import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { createLlmResponseCacheKey, LlmResponseCache } from "../llm-response-cache.ts";

const tempDirs: string[] = [];

function tempCachePath(): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "agents-radar-cache-"));
  tempDirs.push(dir);
  return path.join(dir, "cache.json");
}

afterEach(() => {
  for (const dir of tempDirs.splice(0)) fs.rmSync(dir, { recursive: true, force: true });
});

describe("createLlmResponseCacheKey", () => {
  it("is stable for an identical request and changes with its model scope", () => {
    const first = createLlmResponseCacheKey("deepseek:flash:disabled", "prompt", 2048);
    expect(createLlmResponseCacheKey("deepseek:flash:disabled", "prompt", 2048)).toBe(first);
    expect(createLlmResponseCacheKey("deepseek:pro:disabled", "prompt", 2048)).not.toBe(first);
  });
});

describe("LlmResponseCache", () => {
  it("persists and reloads exact responses", () => {
    const cachePath = tempCachePath();
    new LlmResponseCache(cachePath).set("key", "cached response");
    expect(new LlmResponseCache(cachePath).get("key")).toBe("cached response");
  });

  it("keeps only the configured number of newest entries", () => {
    const cachePath = tempCachePath();
    const cache = new LlmResponseCache(cachePath, 2);
    cache.set("one", "1");
    cache.set("two", "2");
    cache.set("three", "3");
    const reloaded = new LlmResponseCache(cachePath, 2);
    expect(reloaded.get("one")).toBeUndefined();
    expect(reloaded.get("two")).toBe("2");
    expect(reloaded.get("three")).toBe("3");
  });
});
