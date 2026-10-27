/**
 * High-signal product and engineering updates for handheld ultrasound.
 *
 * Official vendor pages are tracked incrementally by sitemap URL or content
 * hash. Relevant open-source releases are fetched from a small, curated set of
 * medical-imaging UI/integration projects. No LLM call is needed when nothing
 * changed.
 */

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fetchRecentReleases } from "./github.ts";
import { extractText, extractTitle, parseSitemapUrls, titleFromUrl } from "./web.ts";

export type HandheldUltrasoundItemKind = "official-update" | "open-source-release";

export interface HandheldUltrasoundItem {
  title: string;
  url: string;
  source: string;
  date: string;
  summary: string;
  kind: HandheldUltrasoundItemKind;
}

export interface HandheldUltrasoundData {
  items: HandheldUltrasoundItem[];
  fetchSuccess: boolean;
}

interface HandheldUltrasoundState {
  initializedSources: string[];
  seenUrls: Record<string, string>;
  pageHashes: Record<string, string>;
  seenReleases: Record<string, string>;
  pendingItems: HandheldUltrasoundItem[];
}

interface SitemapSource {
  id: string;
  name: string;
  url: string;
  filter: (url: string) => boolean;
}

interface FixedPageSource {
  name: string;
  url: string;
}

const STATE_FILE = path.join("digests", "handheld-ultrasound-state.json");
const FETCH_TIMEOUT_MS = 12_000;
const MAX_OFFICIAL_CANDIDATES = 12;
const MAX_TOTAL_CANDIDATES = 20;

const RELEVANT_URL_TERMS = [
  "ultrasound",
  "pocus",
  "handheld",
  "portable",
  "wireless",
  "vscan",
  "lumify",
  "clarius",
  "butterfly",
  "te-air",
  "te_air",
  "compassai",
  "t-mode",
  "scan-guidance",
  "workflow",
  "dicom",
  "pacs",
  "sdk",
  "developer",
];

export function isHandheldRelevantUrl(url: string): boolean {
  let normalized = url.toLocaleLowerCase();
  try {
    const parsed = new URL(url);
    normalized = `${parsed.pathname}${parsed.search}`.toLocaleLowerCase();
  } catch {
    // Keep the original string for non-URL unit inputs.
  }
  return RELEVANT_URL_TERMS.some((term) => normalized.includes(term));
}

const SITEMAP_SOURCES: SitemapSource[] = [
  {
    id: "butterfly",
    name: "Butterfly Network",
    url: "https://www.butterflynetwork.com/sitemap.xml",
    filter: (url) => new URL(url).pathname.startsWith("/press-releases/") && isHandheldRelevantUrl(url),
  },
  {
    id: "clarius-posts",
    name: "Clarius",
    url: "https://clarius.com/post-sitemap.xml",
    filter: isHandheldRelevantUrl,
  },
  {
    id: "clarius-press",
    name: "Clarius",
    url: "https://clarius.com/press-sitemap.xml",
    filter: isHandheldRelevantUrl,
  },
  {
    id: "mindray",
    name: "Mindray",
    url: "https://www.mindray.com/sitemap.xml",
    filter: (url) => new URL(url).pathname.includes("/news/") && isHandheldRelevantUrl(url),
  },
];

const FIXED_PAGE_SOURCES: FixedPageSource[] = [
  {
    name: "Philips Lumify",
    url: "https://www.usa.philips.com/healthcare/sites/lumify-handheld-ultrasound/products/whats-new",
  },
  { name: "GE HealthCare Vscan Air", url: "https://vscanair-support.gehealthcare.com/support/home" },
  { name: "Butterfly CompassAI", url: "https://www.butterflynetwork.com/compassai" },
  { name: "Butterfly AI Developers", url: "https://www.butterflynetwork.com/ai-developers" },
  { name: "Clarius", url: "https://clarius.com/" },
  {
    name: "Mindray TE Air",
    url: "https://www.mindray.com/na/products/ultrasound/portable-ultrasound-machines/handheld-ultrasound/te-air-e5m-handheld-ultrasound/",
  },
];

const OPEN_SOURCE_PROJECTS = [
  { repo: "OHIF/Viewers", name: "OHIF Viewer" },
  { repo: "cornerstonejs/cornerstone3D", name: "Cornerstone3D" },
  { repo: "dcmjs-org/dcmjs", name: "dcmjs" },
  { repo: "Project-MONAI/MONAILabel", name: "MONAI Label" },
];

/**
 * Keep the product card from turning into a feed of routine dependency
 * patches. Major/minor milestones still go to the editor; patch releases only
 * qualify when their own notes signal an urgent compatibility or security
 * impact that a product team should not miss.
 */
export function isSubstantiveOpenSourceRelease(
  tag: string,
  name: string,
  body: string | null | undefined,
): boolean {
  const version = tag.match(/^v?(\d+)\.(\d+)\.(\d+)(?:[-+].*)?$/i);
  if (version && Number(version[3]) === 0) return true;

  const notes = `${name}\n${body ?? ""}`.toLocaleLowerCase();
  return /\b(cve-\d+|critical|security advisory|breaking change|data loss|remote code execution)\b/.test(
    notes,
  );
}

function emptyState(): HandheldUltrasoundState {
  return { initializedSources: [], seenUrls: {}, pageHashes: {}, seenReleases: {}, pendingItems: [] };
}

function loadState(): HandheldUltrasoundState {
  try {
    const parsed = JSON.parse(fs.readFileSync(STATE_FILE, "utf-8")) as Partial<HandheldUltrasoundState>;
    return {
      initializedSources: parsed.initializedSources ?? [],
      seenUrls: parsed.seenUrls ?? {},
      pageHashes: parsed.pageHashes ?? {},
      seenReleases: parsed.seenReleases ?? {},
      pendingItems: parsed.pendingItems ?? [],
    };
  } catch {
    return emptyState();
  }
}

function saveState(state: HandheldUltrasoundState): void {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n", "utf-8");
}

async function httpGet(url: string): Promise<string> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; agents-radar/1.0)",
        Accept: "text/html,application/xml,text/xml,*/*",
      },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } finally {
    clearTimeout(timer);
  }
}

function contentHash(content: string): string {
  return crypto.createHash("sha256").update(content.replace(/\s+/g, " ").trim()).digest("hex");
}

async function fetchOfficialPage(source: string, url: string, date: string): Promise<HandheldUltrasoundItem> {
  try {
    const html = await httpGet(url);
    return {
      title: extractTitle(html) || titleFromUrl(url),
      url,
      source,
      date,
      summary: extractText(html),
      kind: "official-update",
    };
  } catch (err) {
    console.error(`  [handheld-ultrasound] page failed ${url}: ${err}`);
    return {
      title: titleFromUrl(url),
      url,
      source,
      date,
      summary: "",
      kind: "official-update",
    };
  }
}

async function fetchSitemapCandidates(
  state: HandheldUltrasoundState,
): Promise<Array<{ source: string; url: string; date: string }>> {
  const candidates: Array<{ source: string; url: string; date: string }> = [];
  const results = await Promise.allSettled(
    SITEMAP_SOURCES.map(async (source) => {
      const xml = await httpGet(source.url);
      return { source, urls: parseSitemapUrls(xml).filter((item) => source.filter(item.loc)) };
    }),
  );

  for (const result of results) {
    if (result.status === "rejected") {
      console.error(`  [handheld-ultrasound] sitemap failed: ${result.reason}`);
      continue;
    }

    const { source, urls } = result.value;
    const isInitialized = state.initializedSources.includes(source.id);
    for (const { loc, lastmod } of urls) {
      const previous = state.seenUrls[loc];
      const version = lastmod ?? "seen";
      if (isInitialized && (!previous || (lastmod && lastmod > previous))) {
        candidates.push({ source: source.name, url: loc, date: lastmod ?? "" });
      }
      state.seenUrls[loc] = version;
    }
    if (!isInitialized) state.initializedSources.push(source.id);
    console.log(`  [handheld-ultrasound] ${source.id}: ${urls.length} relevant URLs`);
  }

  return candidates.sort((a, b) => b.date.localeCompare(a.date)).slice(0, MAX_OFFICIAL_CANDIDATES);
}

async function fetchChangedFixedPages(state: HandheldUltrasoundState): Promise<HandheldUltrasoundItem[]> {
  const results = await Promise.allSettled(
    FIXED_PAGE_SOURCES.map(async (source): Promise<HandheldUltrasoundItem | null> => {
      const html = await httpGet(source.url);
      const title = extractTitle(html) || titleFromUrl(source.url);
      const summary = extractText(html);
      const hash = contentHash(`${title}\n${summary}`);
      const previous = state.pageHashes[source.url];
      state.pageHashes[source.url] = hash;
      if (!previous || previous === hash) return null;
      return {
        title,
        url: source.url,
        source: source.name,
        date: new Date().toISOString().slice(0, 10),
        summary,
        kind: "official-update",
      };
    }),
  );

  return results.flatMap((result) => {
    if (result.status === "fulfilled") return result.value ? [result.value] : [];
    console.error(`  [handheld-ultrasound] fixed page failed: ${result.reason}`);
    return [];
  });
}

async function fetchOpenSourceReleases(state: HandheldUltrasoundState): Promise<HandheldUltrasoundItem[]> {
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const results = await Promise.allSettled(
    OPEN_SOURCE_PROJECTS.map(async ({ repo, name }) => {
      const releases = await fetchRecentReleases(repo, since);
      return releases.map((release): HandheldUltrasoundItem | null => {
        const key = `${repo}@${release.tag_name}`;
        if (state.seenReleases[key]) return null;
        state.seenReleases[key] = release.published_at;
        if (!isSubstantiveOpenSourceRelease(release.tag_name, release.name, release.body)) return null;
        return {
          title: `${name} ${release.name || release.tag_name}`,
          url: `https://github.com/${repo}/releases/tag/${encodeURIComponent(release.tag_name)}`,
          source: name,
          date: release.published_at,
          summary: (release.body ?? "").replace(/\s+/g, " ").trim().slice(0, 1_500),
          kind: "open-source-release",
        };
      });
    }),
  );

  return results.flatMap((result) => {
    if (result.status === "fulfilled") return result.value.filter((item) => item !== null);
    console.error(`  [handheld-ultrasound] GitHub release fetch failed: ${result.reason}`);
    return [];
  });
}

export async function fetchHandheldUltrasoundData(): Promise<HandheldUltrasoundData> {
  const state = loadState();
  const [sitemapCandidates, fixedPageItems, releaseItems] = await Promise.all([
    fetchSitemapCandidates(state),
    fetchChangedFixedPages(state),
    fetchOpenSourceReleases(state),
  ]);

  const officialItems = await Promise.all(
    sitemapCandidates.map((item) => fetchOfficialPage(item.source, item.url, item.date)),
  );
  const newlyDiscovered = [...officialItems, ...fixedPageItems, ...releaseItems];
  const items = [...state.pendingItems, ...newlyDiscovered]
    .filter((item, index, all) => all.findIndex((candidate) => candidate.url === item.url) === index)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, MAX_TOTAL_CANDIDATES);
  state.pendingItems = items;
  saveState(state);

  console.log(`  [handheld-ultrasound] ${items.length} candidate(s) ready`);
  return { items, fetchSuccess: true };
}

/** Clear candidates only after the editorial LLM returned valid JSON. */
export function markHandheldUltrasoundItemsProcessed(urls: string[]): void {
  if (!urls.length) return;
  const processed = new Set(urls);
  const state = loadState();
  state.pendingItems = state.pendingItems.filter((item) => !processed.has(item.url));
  saveState(state);
}
