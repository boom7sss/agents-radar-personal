import { describe, expect, it } from "vitest";
import { resolveDigestDate } from "../date.ts";

describe("resolveDigestDate", () => {
  it("uses the CST date when no override is provided", () => {
    expect(resolveDigestDate(new Date("2026-10-09T16:30:00Z"))).toBe("2026-10-10");
  });

  it("accepts an explicit date for a manual backfill", () => {
    expect(resolveDigestDate(new Date("2026-10-10T02:30:00Z"), "2026-10-09")).toBe("2026-10-09");
  });

  it("rejects malformed or impossible dates", () => {
    expect(() => resolveDigestDate(new Date(), "2026-2-09")).toThrow("YYYY-MM-DD");
    expect(() => resolveDigestDate(new Date(), "2026-02-30")).toThrow("valid calendar date");
  });
});
