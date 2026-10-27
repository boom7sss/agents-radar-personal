/**
 * Date and timing utilities used across the pipeline.
 */

const CST_OFFSET_MS = 8 * 60 * 60 * 1000;

/** Convert a Date to a CST (UTC+8) date string like "2026-03-11". */
export function toCstDateStr(date: Date): string {
  return new Date(date.getTime() + CST_OFFSET_MS).toISOString().slice(0, 10);
}

/** Resolve an optional YYYY-MM-DD output date used for manual backfills. */
export function resolveDigestDate(date: Date, override?: string): string {
  if (!override) return toCstDateStr(date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(override)) {
    throw new Error(`DIGEST_DATE must use YYYY-MM-DD, received: ${override}`);
  }

  const [year, month, day] = override.split("-").map(Number) as [number, number, number];
  const parsed = new Date(Date.UTC(year, month - 1, day));
  if (parsed.getUTCFullYear() !== year || parsed.getUTCMonth() !== month - 1 || parsed.getUTCDate() !== day) {
    throw new Error(`DIGEST_DATE is not a valid calendar date: ${override}`);
  }
  return override;
}

/** Format a Date as a compact UTC string like "2026-03-11 00:00". */
export function toUtcStr(date: Date): string {
  return date.toISOString().slice(0, 16).replace("T", " ");
}

/** Promise-based delay. */
export function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}
