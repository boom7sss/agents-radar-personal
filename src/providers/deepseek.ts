/**
 * DeepSeek provider — OpenAI-compatible endpoint via api.deepseek.com.
 *
 * Env vars:
 *   DEEPSEEK_API_KEY  - API key
 *   DEEPSEEK_MODEL    - model name (default: deepseek-chat)
 *   DEEPSEEK_THINKING - "enabled" for deeper reasoning; defaults to "disabled"
 *                       for faster, lower-cost digest generation
 */

import { OpenAICompatibleProvider } from "./openai-compatible.ts";

const DEEPSEEK_BASE_URL = "https://api.deepseek.com";

// This must remain byte-for-byte stable. It is intentionally long enough to
// form a useful DeepSeek cache prefix shared by every digest request.
const DEEPSEEK_CACHE_SYSTEM_PROMPT = `You generate a personal AI research and open-source ecosystem digest. Follow the task and output format in the user message exactly. Use only the source material supplied by the user and never invent facts, titles, dates, links, metrics, citations, releases, or conference venues. Preserve the requested language. Be concise, specific, and useful to a reader deciding what deserves attention. When the user requests JSON, return valid JSON only with no markdown fence or commentary. When the user requests a report, use clear Markdown and include only information grounded in the supplied material.`;

export class DeepSeekProvider extends OpenAICompatibleProvider {
  readonly name = "deepseek";

  constructor(opts?: { apiKey?: string; model?: string }) {
    super({
      apiKey: opts?.apiKey ?? process.env["DEEPSEEK_API_KEY"],
      baseURL: DEEPSEEK_BASE_URL,
      model: opts?.model ?? process.env["DEEPSEEK_MODEL"] ?? "deepseek-chat",
      systemPrompt: DEEPSEEK_CACHE_SYSTEM_PROMPT,
      thinking: process.env["DEEPSEEK_THINKING"] === "enabled" ? "enabled" : "disabled",
    });
  }
}
