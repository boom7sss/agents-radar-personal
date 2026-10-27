/**
 * Official award / spotlight sources for the major AI conferences tracked by
 * the paper-reading card. These sources complement fresh ArXiv submissions:
 * conferences publish in batches, so their strongest papers remain valuable
 * after the event and can be rotated without relying on an ArXiv repost.
 */

export interface ConferenceSource {
  venue: "CVPR" | "NeurIPS" | "ICCV" | "ECCV" | "AAAI" | "MICCAI";
  year: number;
  url: string;
}

export interface ConferencePaperData {
  sources: Array<ConferenceSource & { text: string }>;
  fetchSuccess: boolean;
}

const SOURCES: ConferenceSource[] = [
  {
    venue: "CVPR",
    year: 2025,
    url: "https://cvpr.thecvf.com/Conferences/2025/BestPapersDemos",
  },
  {
    venue: "NeurIPS",
    year: 2025,
    url: "https://proceedings.neurips.cc/paper/2025",
  },
  {
    venue: "ICCV",
    year: 2025,
    url: "https://iccv.thecvf.com/virtual/2025/awards_detail",
  },
  {
    venue: "ECCV",
    year: 2024,
    url: "https://eccv.ecva.net/Conferences/2024/Awards",
  },
  {
    venue: "AAAI",
    year: 2026,
    url: "https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/",
  },
  {
    venue: "MICCAI",
    year: 2025,
    url: "https://conferences.miccai.org/2025/en/BEST-PAPER-AWARDS.html",
  },
];

function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/gi, '"')
    .replace(/\s+/g, " ")
    .trim();
}

async function fetchOfficialSource(source: ConferenceSource): Promise<ConferenceSource & { text: string }> {
  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch(source.url, {
        headers: { "User-Agent": "agents-radar/1.0 research digest" },
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = htmlToText(await response.text());
      if (!text) throw new Error("empty page");
      console.log(`  [conference/${source.venue}] official source loaded`);
      return { ...source, text: text.slice(0, 7000) };
    } catch (err) {
      lastError = err;
      if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 1_000));
    }
  }
  throw lastError;
}

export async function fetchConferencePaperData(): Promise<ConferencePaperData> {
  const settled = await Promise.allSettled(SOURCES.map((source) => fetchOfficialSource(source)));

  const sources = settled.flatMap((result, index) => {
    if (result.status === "fulfilled") return [result.value];
    console.error(`  [conference/${SOURCES[index]!.venue}] ${result.reason}`);
    return [];
  });

  return { sources, fetchSuccess: sources.length > 0 };
}
