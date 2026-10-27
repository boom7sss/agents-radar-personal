/**
 * Small persistent cache for exact LLM request results.
 *
 * This is intentionally different from DeepSeek's prefix cache: it avoids an
 * API call entirely when a manual rerun produces the exact same prompt. Only
 * prompt hashes and model outputs are stored; raw prompts and credentials are
 * never written to disk.
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const CACHE_VERSION = 1;
const DEFAULT_CACHE_PATH = path.join("digests", ".llm-response-cache.json");
const DEFAULT_MAX_ENTRIES = 160;
const DEFAULT_MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000;

interface CacheEntry {
  response: string;
  cachedAt: string;
}

interface CacheStore {
  version: number;
  entries: Record<string, CacheEntry>;
}

export function createLlmResponseCacheKey(scope: string, prompt: string, maxTokens: number): string {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify([CACHE_VERSION, scope, maxTokens, prompt]))
    .digest("hex");
}

export class LlmResponseCache {
  private store?: CacheStore;

  constructor(
    private readonly filePath = DEFAULT_CACHE_PATH,
    private readonly maxEntries = DEFAULT_MAX_ENTRIES,
    private readonly maxAgeMs = DEFAULT_MAX_AGE_MS,
  ) {}

  get(key: string): string | undefined {
    const entry = this.load().entries[key];
    if (!entry) return undefined;
    if (Date.now() - Date.parse(entry.cachedAt) > this.maxAgeMs) {
      delete this.load().entries[key];
      return undefined;
    }
    return entry.response;
  }

  set(key: string, response: string): void {
    if (!response) return;
    const store = this.load();
    // Reinsert existing keys so object order continues to represent recency.
    delete store.entries[key];
    store.entries[key] = { response, cachedAt: new Date().toISOString() };

    store.entries = Object.fromEntries(Object.entries(store.entries).slice(-this.maxEntries));

    try {
      fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
      fs.writeFileSync(this.filePath, JSON.stringify(store), "utf-8");
    } catch (err) {
      console.warn(`  [llm/cache] could not persist response cache: ${err}`);
    }
  }

  private load(): CacheStore {
    if (this.store) return this.store;
    try {
      const parsed = JSON.parse(fs.readFileSync(this.filePath, "utf-8")) as Partial<CacheStore>;
      if (parsed.version === CACHE_VERSION && parsed.entries && typeof parsed.entries === "object") {
        this.store = { version: CACHE_VERSION, entries: parsed.entries };
        return this.store;
      }
    } catch {
      // Missing or invalid cache files simply start fresh.
    }
    this.store = { version: CACHE_VERSION, entries: {} };
    return this.store;
  }
}
