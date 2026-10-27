/**
 * LLM invocation, file I/O, and GitHub issue creation helpers.
 */

import fs from "node:fs";
import path from "node:path";
import { type Lang, FOOTER } from "./i18n.ts";
import { sleep } from "./date.ts";
import { createLlmResponseCacheKey, LlmResponseCache } from "./llm-response-cache.ts";

// ---------------------------------------------------------------------------
// LLM token budget constants
// ---------------------------------------------------------------------------

// These are ceilings, not targets. They leave enough room for complete reports
// while preventing unexpectedly verbose generations from dominating the bill.
export const LLM_TOKENS_DEFAULT = 3072;
export const LLM_TOKENS_TRENDING = 4096;
export const LLM_TOKENS_WEB = 6144;
export const LLM_TOKENS_ROLLUP = 6144;
import { type LlmProvider, createProvider } from "./providers/index.ts";

const provider: LlmProvider = createProvider();
const responseCache = new LlmResponseCache();

function deepSeekResponseCacheKey(prompt: string, maxTokens: number): string | undefined {
  if (provider.name !== "deepseek") return undefined;
  const model = process.env["DEEPSEEK_MODEL"] ?? "deepseek-chat";
  const thinking = process.env["DEEPSEEK_THINKING"] === "enabled" ? "enabled" : "disabled";
  return createLlmResponseCacheKey(`deepseek:${model}:${thinking}`, prompt, maxTokens);
}

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

const LLM_CONCURRENCY = 5;
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
const RETRY_BASE_MS = 5_000; // 5 s, 10 s, 20 s

export function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

function isRetryableLlmError(err: unknown): boolean {
  const status = (err as { status?: number })?.status;
  if (status === 408 || status === 409 || status === 429 || (typeof status === "number" && status >= 500)) {
    return true;
  }
  const message = String(err).toLowerCase();
  return (
    message.includes("unexpected response from") ||
    message.includes("unexpected empty response from") ||
    message.includes("timeout") ||
    message.includes("connection") ||
    message.includes("fetch failed")
  );
}

export async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
  const responseCacheKey = deepSeekResponseCacheKey(prompt, maxTokens);
  if (responseCacheKey) {
    const cached = responseCache.get(responseCacheKey);
    if (cached !== undefined) {
      console.log(`  [llm/cache] exact response hit ${responseCacheKey.slice(0, 12)}`);
      return cached;
    }
  }

  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      const response = await provider.call(prompt, maxTokens);
      if (responseCacheKey) responseCache.set(responseCacheKey, response);
      return response;
    } catch (err) {
      if (attempt < MAX_RETRIES && isRetryableLlmError(err)) {
        releaseSlot();
        released = true;
        const wait = RETRY_BASE_MS * 2 ** attempt;
        console.error(
          `[llm] temporary provider error — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`,
        );
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// Matches ASCII control characters U+0000–U+001F. Built from a string so no
// literal control character appears in the source (keeps it readable + lint-clean).
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = new RegExp("[\\u0000-\\u001F]", "g");

/**
 * Parse JSON returned by an LLM. Strips markdown code fences and replaces raw
 * control characters with spaces before parsing. The model occasionally emits
 * an unescaped control character (e.g. a bare newline) inside a string literal,
 * which is illegal in JSON and makes `JSON.parse` throw "Bad control character
 * in string literal". Control chars outside strings are only insignificant
 * whitespace, so replacing them is safe either way.
 *
 * If the strict parse still fails, the payload is repaired once (drop any prose
 * wrapper around the JSON, strip trailing commas) and retried — a single stray
 * character (e.g. a trailing comma before `}`) used to wipe an entire language's
 * highlights.json.
 */
export function parseLlmJson<T = unknown>(raw: string): T {
  const cleaned = raw
    .replace(/```json?\n?/g, "")
    .replace(/```/g, "")
    .replace(CONTROL_CHARS, " ")
    .trim();
  try {
    return JSON.parse(cleaned) as T;
  } catch (err) {
    const repaired = repairJson(cleaned);
    if (repaired !== cleaned) return JSON.parse(repaired) as T;
    throw err;
  }
}

/**
 * Best-effort repair of common LLM JSON defects: narrow to the outermost
 * object/array (dropping surrounding prose) and remove trailing commas before a
 * closing brace or bracket. Returns the input unchanged when nothing applies.
 */
function repairJson(s: string): string {
  const first = s.search(/[{[]/);
  const lastBrace = s.lastIndexOf("}");
  const lastBracket = s.lastIndexOf("]");
  const last = Math.max(lastBrace, lastBracket);
  const narrowed = first >= 0 && last > first ? s.slice(first, last + 1) : s;
  return narrowed.replace(/,(\s*[}\]])/g, "$1");
}

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: Lang = "zh"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return `\n\n---\n*${FOOTER.autoGen[lang]} [agents-radar](https://github.com/${digestRepo})${lang === "en" ? "." : " 自动生成。"}*`;
}
