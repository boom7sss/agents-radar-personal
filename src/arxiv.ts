/**
 * ArXiv AI papers fetched via the ArXiv API (Atom feed).
 *
 * Strategy: query the main AI / imaging categories plus focused searches for
 * ultrasound and causal robustness, sorted by submission date and filtered to
 * the last 48h.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ArxivPaper {
  id: string;
  title: string;
  summary: string;
  authors: string[];
  published: string;
  updated: string;
  categories: string[];
  url: string;
  pdfUrl: string;
  comment: string;
  journalRef: string;
}

export interface ArxivData {
  papers: ArxivPaper[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const ARXIV_MAX_RESULTS = 50;
const API_URL = "https://export.arxiv.org/api/query";

/** ArXiv categories to search. */
const CATEGORIES = ["cs.AI", "cs.CL", "cs.LG", "cs.CV", "eess.IV", "q-bio.QM", "physics.med-ph"];

/**
 * A small source-level boost for the reader's likely carotid-ultrasound work.
 * The final candidate cap remains unchanged, so this improves recall without
 * increasing the amount of paper text sent to the LLM.
 */
const FOCUSED_SEARCH =
  "all:ultrasound AND (all:carotid OR all:vascular OR all:segmentation OR all:localization OR all:detection OR all:handheld OR all:POCUS)";

/** Ultrasound restoration and reconstruction work can sit outside cs.CV. */
const ULTRASOUND_RECONSTRUCTION_SEARCH =
  '(all:ultrasound OR all:sonography) AND (all:"super resolution" OR all:super-resolution OR all:reconstruction OR all:beamforming OR all:denoising OR all:enhancement OR all:"inverse problem")';

/**
 * Favor deployment papers with a medical-imaging or ultrasound connection;
 * generic compression work remains available through the main AI categories.
 */
const EDGE_DEPLOYMENT_SEARCH =
  '(all:ultrasound OR all:"medical imaging" OR all:"medical image") AND (all:"model compression" OR all:quantization OR all:pruning OR all:distillation OR all:"lightweight model" OR all:"edge deployment" OR all:"on-device" OR all:"efficient inference")';

/**
 * Related work around causal bias often uses broader medical-imaging language
 * rather than naming ultrasound in the title. Fetch that intersection without
 * promoting generic causality papers from unrelated domains.
 */
const CAUSAL_ROBUSTNESS_SEARCH =
  '(all:ultrasound OR all:"medical imaging" OR all:"medical image") AND (all:causal OR all:causality OR all:"spurious correlation" OR all:"domain shift" OR all:"domain generalization" OR all:"domain adaptation" OR all:"test-time adaptation" OR all:"out-of-distribution")';

const ULTRASOUND_FOCUS_TERMS = [
  "ultrasound",
  "ultrasonography",
  "sonography",
  "carotid",
  "vascular imaging",
  "point-of-care ultrasound",
  "pocus",
];

const MEDICAL_IMAGING_TERMS = ["medical image", "medical imaging", "radiology", "echocardiography"];

const CAUSAL_ROBUSTNESS_TERMS = [
  "causal",
  "causality",
  "spurious correlation",
  "shortcut learning",
  "domain shift",
  "domain generalization",
  "domain adaptation",
  "invariant representation",
  "test-time adaptation",
  "out-of-distribution",
  "ood",
];

const RECONSTRUCTION_TERMS = [
  "super resolution",
  "super-resolution",
  "image reconstruction",
  "ultrasound reconstruction",
  "beamforming",
  "inverse problem",
  "denoising",
];

const EDGE_DEPLOYMENT_TERMS = [
  "model compression",
  "quantization",
  "pruning",
  "knowledge distillation",
  "lightweight model",
  "edge deployment",
  "on-device",
  "efficient inference",
  "mobile deployment",
];

/** Delay between requests (ArXiv asks for 3s). */
const REQUEST_DELAY_MS = 3000;

// ---------------------------------------------------------------------------
// XML helpers (lightweight, no dependency)
// ---------------------------------------------------------------------------

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`);
  const m = xml.match(re);
  return m ? m[1]!.trim() : "";
}

function extractAllTags(xml: string, tag: string): string[] {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1]!.trim());
  }
  return results;
}

function extractAttr(xml: string, tag: string, attr: string): string[] {
  const re = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"[^>]*/?>`, "g");
  const results: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    results.push(m[1]!);
  }
  return results;
}

function extractLinkHref(xml: string, rel: string): string {
  const re = new RegExp(`<link[^>]*rel="${rel}"[^>]*href="([^"]*)"[^>]*/?>`, "g");
  const m = re.exec(xml);
  return m ? m[1]! : "";
}

// ---------------------------------------------------------------------------
// Parse
// ---------------------------------------------------------------------------

function parseEntry(entryXml: string): ArxivPaper | null {
  const id = extractTag(entryXml, "id");
  if (!id) return null;

  const title = extractTag(entryXml, "title").replace(/\s+/g, " ");
  const summary = extractTag(entryXml, "summary").replace(/\s+/g, " ");
  const authors = extractAllTags(entryXml, "name");
  const published = extractTag(entryXml, "published");
  const updated = extractTag(entryXml, "updated");
  const categories = extractAttr(entryXml, "category", "term");
  const comment = extractTag(entryXml, "arxiv:comment").replace(/\s+/g, " ");
  const journalRef = extractTag(entryXml, "arxiv:journal_ref").replace(/\s+/g, " ");

  const url = id; // ArXiv id IS the URL (e.g. http://arxiv.org/abs/...)
  const pdfUrl = extractLinkHref(entryXml, "related") || id.replace("/abs/", "/pdf/");

  return { id, title, summary, authors, published, updated, categories, url, pdfUrl, comment, journalRef };
}

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchArxivData(): Promise<ArxivData> {
  const seen = new Map<string, ArxivPaper>();
  const searches = [
    ...CATEGORIES.map((category) => ({ label: category, query: `cat:${category}` })),
    { label: "focused-ultrasound", query: FOCUSED_SEARCH },
    { label: "focused-ultrasound-reconstruction", query: ULTRASOUND_RECONSTRUCTION_SEARCH },
    { label: "focused-edge-deployment", query: EDGE_DEPLOYMENT_SEARCH },
    { label: "focused-causal-robustness", query: CAUSAL_ROBUSTNESS_SEARCH },
  ];

  for (let i = 0; i < searches.length; i++) {
    const search = searches[i]!;
    if (i > 0) await sleep(REQUEST_DELAY_MS);

    try {
      const params = new URLSearchParams({
        search_query: search.query,
        sortBy: "submittedDate",
        sortOrder: "descending",
        max_results: String(ARXIV_MAX_RESULTS),
      });

      const resp = await fetch(`${API_URL}?${params}`, {
        headers: { "User-Agent": "agents-radar/1.0" },
      });

      if (!resp.ok) {
        console.error(`  [arxiv] ${search.label}: HTTP ${resp.status}`);
        continue;
      }

      const xml = await resp.text();

      // Split into entries
      const entryBlocks = xml.split("<entry>").slice(1);
      for (const block of entryBlocks) {
        const paper = parseEntry("<entry>" + block);
        if (paper && !seen.has(paper.id)) {
          seen.set(paper.id, paper);
        }
      }

      console.log(`  [arxiv] ${search.label}: ${entryBlocks.length} papers`);
    } catch (err) {
      console.error(`  [arxiv] ${search.label}: ${err}`);
    }
  }

  // ArXiv has weekend / holiday gaps. Prefer the fresh 48h window, but keep a
  // 7-day fallback so the paper card is not blank simply because a batch did
  // not land today. The caller removes papers already sent recently.
  const allPapers = [...seen.values()].sort(
    (a, b) => new Date(b.published).getTime() - new Date(a.published).getTime(),
  );
  const fresh = allPapers.filter((p) => new Date(p.published).getTime() > Date.now() - 48 * 60 * 60 * 1000);
  const fallback = allPapers.filter(
    (p) => new Date(p.published).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000,
  );
  const candidates = fresh.length ? fresh : fallback;
  const isFocused = (paper: ArxivPaper): boolean => {
    const text = `${paper.title} ${paper.summary}`.toLocaleLowerCase();
    const isUltrasoundFocused = ULTRASOUND_FOCUS_TERMS.some((term) => text.includes(term));
    const isMedicalImaging = MEDICAL_IMAGING_TERMS.some((term) => text.includes(term));
    const isCausalMedicalImaging =
      isMedicalImaging && CAUSAL_ROBUSTNESS_TERMS.some((term) => text.includes(term));
    const isReconstructionFocused =
      isUltrasoundFocused && RECONSTRUCTION_TERMS.some((term) => text.includes(term));
    const isDeploymentFocused =
      (isUltrasoundFocused || isMedicalImaging) && EDGE_DEPLOYMENT_TERMS.some((term) => text.includes(term));
    return isUltrasoundFocused || isCausalMedicalImaging || isReconstructionFocused || isDeploymentFocused;
  };
  const papers = [...candidates.filter(isFocused), ...candidates.filter((paper) => !isFocused(paper))].slice(
    0,
    ARXIV_MAX_RESULTS,
  );

  console.log(
    `  [arxiv] ${papers.length} papers (from ${seen.size} unique${fresh.length ? "" : ", 7-day fallback"})`,
  );
  return { papers, fetchSuccess: papers.length > 0 };
}
