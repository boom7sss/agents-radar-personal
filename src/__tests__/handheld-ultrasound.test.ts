import { describe, expect, it } from "vitest";
import { isHandheldRelevantUrl, isSubstantiveOpenSourceRelease } from "../handheld-ultrasound.ts";

describe("isHandheldRelevantUrl", () => {
  it("matches handheld ultrasound product and integration terms", () => {
    expect(isHandheldRelevantUrl("https://example.com/vscan-air-dicom-workflow")).toBe(true);
    expect(isHandheldRelevantUrl("https://example.com/portable-ultrasound-scan-guidance")).toBe(true);
  });

  it("does not match unrelated corporate news", () => {
    expect(isHandheldRelevantUrl("https://example.com/investor-quarterly-results")).toBe(false);
    expect(isHandheldRelevantUrl("https://clarius.com/company-announces-quarterly-results/")).toBe(false);
  });
});

describe("isSubstantiveOpenSourceRelease", () => {
  it("keeps major and minor release milestones", () => {
    expect(isSubstantiveOpenSourceRelease("v5.10.0", "5.10.0", "New tools")).toBe(true);
  });

  it("drops routine patch releases even when they contain implementation details", () => {
    expect(
      isSubstantiveOpenSourceRelease(
        "v5.10.3",
        "5.10.3",
        "Store labelmaps using RLE and improve preview validation.",
      ),
    ).toBe(false);
  });

  it("keeps urgent security or breaking patch releases", () => {
    expect(isSubstantiveOpenSourceRelease("v5.10.4", "Security advisory", "Critical CVE-2026-1234 fix")).toBe(
      true,
    );
  });
});
