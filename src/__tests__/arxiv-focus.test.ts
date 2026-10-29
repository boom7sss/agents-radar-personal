import { describe, expect, it } from "vitest";
import { paperFocusScore, type ArxivPaper } from "../arxiv.ts";

const paper = (title: string, summary = ""): ArxivPaper => ({ title, summary }) as ArxivPaper;

describe("current ultrasound research focus", () => {
  it("keeps denoising, reconstruction and quality assessment equally focused", () => {
    for (const title of [
      "Self-supervised ultrasound denoising",
      "Ultrasound reconstruction from channel data",
      "No-reference image quality assessment for sonography",
      "Ultrasonography despeckling with structure preservation",
    ]) {
      expect(paperFocusScore(paper(title))).toBe(3);
    }
  });

  it("ranks direct focus above ultrasound segmentation and generic AI", () => {
    expect(paperFocusScore(paper("Carotid ultrasound segmentation"))).toBe(2);
    expect(paperFocusScore(paper("Natural image denoising and image quality"))).toBe(0);
    expect(paperFocusScore(paper("Large language model reasoning"))).toBe(0);
  });
});
