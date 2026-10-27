/**
 * Feishu (Lark) notification — reads manifest.json and sends a card message
 * with links to the latest reports. Skips silently if secrets are not set.
 *
 * Required env vars:
 *   FEISHU_WEBHOOK_URLS — comma-separated list of custom bot webhook URLs
 *                         (also accepts legacy FEISHU_WEBHOOK_URL for one URL)
 * Optional:
 *   PAGES_URL           — GitHub Pages base URL (defaults to the public deployment)
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { NOTIFY_LABELS } from "./i18n.ts";
import type { Highlights } from "./notify.ts";
import type {
  DailyPick,
  DailyPicks,
  HandheldUltrasoundPick,
  HandheldUltrasoundPicks,
  PaperPick,
  PaperPicks,
} from "./prompts-data.ts";

const PAGES_URL_DEFAULT = "https://duanyytop.github.io/agents-radar";

function getWebhookUrls(): string[] {
  const raw = process.env["FEISHU_WEBHOOK_URLS"] ?? process.env["FEISHU_WEBHOOK_URL"] ?? "";
  return raw
    .split(",")
    .map((u) => u.trim())
    .filter(Boolean);
}

async function sendToOneWebhook(webhookUrl: string, title: string, content: string): Promise<void> {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      msg_type: "interactive",
      card: {
        header: {
          title: { tag: "plain_text", content: title },
          template: "blue",
        },
        elements: [{ tag: "markdown", content }],
      },
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Feishu API ${res.status}: ${body}`);
  }
}

async function sendFeishu(title: string, content: string): Promise<void> {
  const urls = getWebhookUrls();
  const results = await Promise.allSettled(urls.map((url) => sendToOneWebhook(url, title, content)));
  const failures = results.filter((r) => r.status === "rejected");
  if (failures.length) {
    const msgs = failures.map((r) => (r as PromiseRejectedResult).reason);
    console.error(`[feishu] ${failures.length}/${urls.length} webhook(s) failed:`, msgs);
    if (failures.length === urls.length) throw new Error("All Feishu webhooks failed");
  }
}

export function buildFeishuMessage(
  date: string,
  reports: string[],
  pagesUrl?: string,
  highlights?: Highlights | null,
): string {
  const PAGES_URL = (pagesUrl ?? process.env["PAGES_URL"] ?? PAGES_URL_DEFAULT).replace(/\/$/, "");
  // Picks have their own compact card, so keep the existing overview focused
  // on the specialist reports instead of listing the same content twice.
  const baseReports = reports.filter(
    (r) => !r.endsWith("-en") && r !== "ai-picks" && r !== "ai-paper-picks" && r !== "ai-handheld-ultrasound",
  );
  const isWeekly = baseReports.includes("ai-weekly");
  const isMonthly = baseReports.includes("ai-monthly");

  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " 月报" : isWeekly ? " 周报" : "";
  const lines: string[] = [`${icon} **agents-radar${suffix} · ${date}**`];

  const ordered = [
    ...baseReports.filter((r) => !r.includes("weekly") && !r.includes("monthly")),
    ...baseReports.filter((r) => r.includes("weekly") || r.includes("monthly")),
  ];

  const zhHighlights = highlights?.zh ?? {};

  for (const r of ordered) {
    const zhLabel = NOTIFY_LABELS[r]?.zh ?? r;
    const zhUrl = `${PAGES_URL}/#${date}/${r}`;
    const enKey = `${r}-en`;

    lines.push("");
    if (reports.includes(enKey)) {
      const enLabel = NOTIFY_LABELS[r]?.en ?? "EN";
      const enUrl = `${PAGES_URL}/#${date}/${enKey}`;
      lines.push(`• [${zhLabel}](${zhUrl})  ·  [${enLabel}](${enUrl})`);
    } else {
      lines.push(`• [${zhLabel}](${zhUrl})`);
    }

    const items = zhHighlights[r];
    if (items?.length) {
      for (const h of items) {
        lines.push(`  ◦ ${h}`);
      }
    }
  }

  lines.push(`\n[🌐 Web UI](${PAGES_URL})  ·  [⊕ RSS](${PAGES_URL}/feed.xml)`);
  return lines.join("\n");
}

export function buildDailyPicksMessage(date: string, picks: DailyPick[]): string {
  const lines = [`📌 **今日 AI 必看 · ${date}**`];

  for (const [index, pick] of picks.entries()) {
    lines.push("");
    lines.push(`${index + 1}. **${pick.title}**`);
    lines.push(`   ${pick.why}`);
    lines.push(`   ${pick.url ? `[来源：${pick.source}](${pick.url})` : `来源：${pick.source}`}`);
  }

  return lines.join("\n");
}

export function buildPaperPicksMessage(date: string, picks: PaperPick[]): string {
  const lines = [`📄 **今日论文精读 · ${date}**`];

  for (const [index, pick] of picks.entries()) {
    lines.push("");
    lines.push(`${index + 1}. **${pick.title}** · \`${pick.venue}\``);
    lines.push(`   做什么：${pick.takeaway}`);
    lines.push(`   为什么读：${pick.why}`);
    lines.push(`   [阅读论文](${pick.url})`);
  }

  return lines.join("\n");
}

export function buildHandheldUltrasoundMessage(_date: string, picks: HandheldUltrasoundPick[]): string {
  const lines = ["以下内容已按掌超项目相关性筛选，无需打开链接也能判断是否值得跟进。"];

  for (const [index, pick] of picks.entries()) {
    lines.push("");
    lines.push(`${index + 1}. **${pick.title}** · \`${pick.category}\``);
    lines.push(`   **这是什么：** ${pick.context}`);
    lines.push(`   **和你的项目有什么关系：** ${pick.relevance}`);
    lines.push(`   **建议：** ${pick.action}`);
    const linkLabel = pick.kind === "open-source-release" ? "查看版本说明" : "查看官方更新";
    lines.push(`   [${linkLabel}](${pick.url}) · 来源：${pick.source}`);
  }

  return lines.join("\n");
}

async function main(): Promise<void> {
  const urls = getWebhookUrls();
  if (!urls.length) {
    console.log("[feishu] FEISHU_WEBHOOK_URLS not set — skipping.");
    return;
  }

  if (!fs.existsSync("manifest.json")) {
    console.log("[feishu] manifest.json not found — skipping.");
    return;
  }

  const { dates } = JSON.parse(fs.readFileSync("manifest.json", "utf-8")) as {
    dates: { date: string; reports: string[] }[];
  };

  const latest = dates?.[0];
  if (!latest) {
    console.log("[feishu] manifest is empty — skipping.");
    return;
  }
  const { date, reports } = latest;

  let highlights: Highlights | null = null;
  const highlightsPath = path.join("digests", date, "highlights.json");
  if (fs.existsSync(highlightsPath)) {
    try {
      highlights = JSON.parse(fs.readFileSync(highlightsPath, "utf-8")) as Highlights;
    } catch {
      console.log("[feishu] Failed to parse highlights.json — sending without highlights.");
    }
  }

  let dailyPicks: DailyPicks | null = null;
  const dailyPicksPath = path.join("digests", date, "daily-picks.json");
  if (fs.existsSync(dailyPicksPath)) {
    try {
      dailyPicks = JSON.parse(fs.readFileSync(dailyPicksPath, "utf-8")) as DailyPicks;
    } catch {
      console.log("[feishu] Failed to parse daily-picks.json — skipping picks card.");
    }
  }

  let paperPicks: PaperPicks | null = null;
  const paperPicksPath = path.join("digests", date, "paper-picks.json");
  if (fs.existsSync(paperPicksPath)) {
    try {
      paperPicks = JSON.parse(fs.readFileSync(paperPicksPath, "utf-8")) as PaperPicks;
    } catch {
      console.log("[feishu] Failed to parse paper-picks.json — skipping paper card.");
    }
  }

  let handheldPicks: HandheldUltrasoundPicks | null = null;
  const handheldPicksPath = path.join("digests", date, "handheld-ultrasound-picks.json");
  if (fs.existsSync(handheldPicksPath)) {
    try {
      handheldPicks = JSON.parse(fs.readFileSync(handheldPicksPath, "utf-8")) as HandheldUltrasoundPicks;
    } catch {
      console.log("[feishu] Failed to parse handheld-ultrasound-picks.json — skipping card.");
    }
  }

  const isMonthly = reports.some((r) => r === "ai-monthly");
  const isWeekly = reports.some((r) => r === "ai-weekly");
  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " 月报" : isWeekly ? " 周报" : "";
  const title = `${icon} agents-radar${suffix} · ${date}`;

  const content = buildFeishuMessage(date, reports, undefined, highlights);

  if (dailyPicks?.picks?.length) {
    console.log(`[feishu] Sending ${dailyPicks.picks.length} daily picks…`);
    await sendFeishu(`📌 今日 AI 必看 · ${date}`, buildDailyPicksMessage(date, dailyPicks.picks));
  }

  if (paperPicks?.picks?.length) {
    console.log(`[feishu] Sending ${paperPicks.picks.length} paper picks…`);
    await sendFeishu(`📄 今日论文精读 · ${date}`, buildPaperPicksMessage(date, paperPicks.picks));
  }

  if (handheldPicks?.picks?.length) {
    console.log(`[feishu] Sending ${handheldPicks.picks.length} handheld-ultrasound picks…`);
    await sendFeishu(
      `🩺 掌上超声产品与交互 · ${date}`,
      buildHandheldUltrasoundMessage(date, handheldPicks.picks),
    );
  }

  console.log(`[feishu] Sending to ${urls.length} webhook(s) for ${date} (${reports.length} reports)…`);
  await sendFeishu(title, content);
  console.log("[feishu] Done!");
}

// Only auto-send when run directly (`tsx src/feishu.ts`). Guard prevents an
// accidental send when another module imports from here.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e: unknown) => {
    console.error("[feishu]", e instanceof Error ? e.message : e);
    process.exit(1);
  });
}
