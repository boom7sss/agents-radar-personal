/**
 * LLM prompt builders for data-source reports (trending, web, HN)
 * and rollup reports (weekly, monthly).
 *
 * Separated from prompts.ts to keep each module focused.
 */

import type { WebFetchResult } from "./web.ts";
import type { TrendingData } from "./trending.ts";
import type { HnData } from "./hn.ts";
import type { PhData } from "./ph.ts";
import type { ArxivData } from "./arxiv.ts";
import type { ConferencePaperData } from "./conference-papers.ts";
import type { HandheldUltrasoundData } from "./handheld-ultrasound.ts";
import type { HfData } from "./hf.ts";
import type { DevtoData } from "./devto.ts";
import type { LobstersData } from "./lobsters.ts";
import type { Lang } from "./i18n.ts";
export function buildTrendingPrompt(data: TrendingData, dateStr: string, lang: Lang = "zh"): string {
  const trendingSection =
    data.trendingFetchSuccess && data.trendingRepos.length > 0
      ? data.trendingRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.totalStars.toLocaleString()}` +
              (r.todayStars > 0 ? ` (+${r.todayStars} today)` : "") +
              (r.forks > 0 ? ` 🍴${r.forks.toLocaleString()}` : "") +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(Unable to fetch today's GitHub Trending list)"
        : "（未能抓取今日 GitHub Trending 榜单）";

  const searchSection =
    data.searchRepos.length > 0
      ? data.searchRepos
          .map(
            (r) =>
              `- [${r.fullName}](${r.url})` +
              (r.language ? ` [${r.language}]` : "") +
              ` ⭐${r.stargazersCount.toLocaleString()}` +
              ` [topic:${r.searchQuery}]` +
              (r.description ? `\n  ${r.description}` : ""),
          )
          .join("\n")
      : lang === "en"
        ? "(No search results)"
        : "（无搜索结果）";

  if (lang === "en") {
    return `You are a technical analyst focused on the AI open-source ecosystem. The following is ${dateStr} GitHub AI-related trending repository data. Please filter for AI relevance, categorize, and analyze trends.

## Data Sources
- **Trending List** (github.com/trending, today's stars most reliable): Real-time hot list with today's new stars
- **Topic Search** (GitHub Search API, topic tags): AI-related projects active in last 7 days, grouped by topic

---

## GitHub Today's Trending (${data.trendingRepos.length} repositories)
${trendingSection}

---

## AI Topic Search Results (${data.searchRepos.length} repositories, deduplicated)
${searchSection}

---

Generate a structured AI Open Source Trends Report in English:

**Step 1 (Filter)**: From the above data, select projects clearly related to AI/ML (exclude unrelated general tools, frontend frameworks, games, etc.). Skip non-AI trending repos.

**Step 2 (Categorize)**: Group filtered projects into these categories (a project can belong to multiple; pick the primary one):
- 🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI)
- 🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems)
- 📦 AI Applications (specific apps, vertical solutions)
- 🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools)
- 🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management)

**Step 3 (Output Report)** with these sections:

1. **Today's Highlights** — 3-5 sentences on the most noteworthy AI open-source developments today

2. **Top Projects by Category** — For each category, list 3-8 representative projects, each with:
   - Project name (with link)
   - Stars data (total + today's new, if available)
   - One sentence: what it is and why it's worth attention today

3. **Trend Signal Analysis** — 200-300 words, distill from today's hot list:
   - Which type of AI tool is getting explosive community attention?
   - Any new tech stacks or directions appearing for the first time?
   - Connection to recent LLM releases / industry events

4. **Community Hot Spots** — Bullet list of 3-5 specific projects or directions worth developer focus, with brief reasoning

Style: English, professional and concise, must include GitHub links for every project.
`;
  }

  return `你是一位专注于 AI 开源生态的技术分析师。以下是 ${dateStr} 的 GitHub AI 相关热门仓库数据，请进行 AI 相关性筛选、分类和趋势分析。

## 数据说明
- **Trending 榜单**（github.com/trending，今日 stars 数最可信）：今日实时热榜，含今日新增 stars
- **主题搜索**（GitHub Search API，topic 标签）：7天内活跃的 AI 相关项目，按主题分类

---

## GitHub 今日 Trending 榜单（共 ${data.trendingRepos.length} 个仓库）
${trendingSection}

---

## AI 主题搜索结果（共 ${data.searchRepos.length} 个仓库，已去重）
${searchSection}

---

请生成一份结构清晰的《AI 开源趋势日报》，要求：

**第一步（过滤）**：从以上数据中筛选出与 AI/ML 明确相关的项目（排除与 AI 无关的通用工具、前端框架、游戏等），对于 Trending 榜单中的非 AI 项目直接略去。

**第二步（分类）**：将筛选后的项目按以下维度分类（一个项目可归入多类，优先归入最主要类别）：
- 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- 📦 AI 应用（具体应用产品、垂直场景解决方案）
- 🧠 大模型/训练（模型权重、训练框架、微调工具）
- 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

**第三步（输出报告）**，包含以下部分：

1. **今日速览** — 3~5 句话概括今日 AI 开源领域最值得关注的动向

2. **各维度热门项目** — 每个维度列出 3~8 个代表项目，每项包含：
   - 项目名（附链接）
   - stars 数据（总量 + 今日新增，如有）
   - 一句话说明：这个项目是什么，为什么今天值得关注

3. **趋势信号分析** — 200~300 字，从今日热榜中提炼：
   - 哪类 AI 工具正在获得社区爆发性关注？
   - 有无新兴技术栈或方向首次登榜？
   - 与近期大模型发布/行业事件的关联

4. **社区关注热点** — 以 bullet 形式列出 3~5 个值得开发者重点关注的具体项目或方向，给出简短理由

语言要求：中文，专业简洁，每个项目必须附 GitHub 链接。
`;
}

export function buildWebReportPrompt(results: WebFetchResult[], dateStr: string, lang: Lang = "zh"): string {
  const isAnyFirstRun = results.some((r) => r.isFirstRun);

  const siteSections = results
    .map(({ siteName, isFirstRun, newItems, totalDiscovered }) => {
      const mode =
        lang === "en"
          ? isFirstRun
            ? `First full crawl (sitemap total ${totalDiscovered} URLs, showing latest ${newItems.length} articles)`
            : `Incremental update, ${newItems.length} new articles today`
          : isFirstRun
            ? `首次全量抓取（sitemap 共 ${totalDiscovered} 条 URL，以下为最新 ${newItems.length} 篇正文内容）`
            : `今日增量更新，共 ${newItems.length} 篇新内容`;

      if (newItems.length === 0) {
        const noContent =
          lang === "en" ? `(${mode}, no content to analyze.)` : `（${mode}，暂无可供分析的内容。）`;
        return `## ${siteName}\n\n${noContent}`;
      }

      const categoryLabel = lang === "en" ? "Category" : "分类";
      const dateLabel = lang === "en" ? "Published/Updated" : "发布/更新";
      const unknownDate = lang === "en" ? "unknown" : "未知";
      const excerptLabel = lang === "en" ? "Excerpt" : "内容节选";
      const metadataOnlyNote =
        lang === "en"
          ? "(metadata-only: title derived from URL slug, may be inaccurate; no article text available)"
          : "（仅元数据：标题由 URL 路径推断，可能不准确；无法获取正文内容）";
      const itemsText = newItems
        .map((item) => {
          const lines = [
            `### [${item.title || item.url}](${item.url})`,
            `- ${categoryLabel}: ${item.category} | ${dateLabel}: ${item.lastmod.slice(0, 10) || unknownDate}`,
          ];
          if (item.content) {
            lines.push(`- ${excerptLabel}: ${item.content}`);
          } else {
            lines.push(`- ${metadataOnlyNote}`);
          }
          return lines.join("\n");
        })
        .join("\n\n");

      const lp = lang === "en" ? "(" : "（";
      const rp = lang === "en" ? ")" : "）";
      return `## ${siteName}${lp}${mode}${rp}\n\n${itemsText}`;
    })
    .join("\n\n---\n\n");

  const firstRunNote =
    lang === "en"
      ? isAnyFirstRun
        ? "This is the first full crawl. Please focus on the overall content landscape, historical context, and core themes of each site, rather than individual articles."
        : "This is an incremental update. Please focus on today's new content and assess its strategic significance in context."
      : isAnyFirstRun
        ? "本次为首次全量抓取，请重点梳理各站点的内容格局、历史脉络与核心主题，而非仅关注单篇文章。"
        : "本次为增量更新，请聚焦今日新增内容，并结合上下文判断其战略意义。";

  if (lang === "en") {
    return `You are a deep content analyst focused on AI, skilled at extracting strategic signals from official announcements, technical blogs, research papers, and product documentation.

The following content was crawled on ${dateStr} from Anthropic (claude.com / anthropic.com) and OpenAI (openai.com). ${firstRunNote}

${siteSections}

---

Generate a detailed AI Official Content Tracking Report in English with these sections:

1. **Today's Highlights** — 3-5 sentences on the most important new releases or developments, calling out key highlights

2. **Anthropic / Claude Content Highlights** — Organize important content by category (news / research / engineering / learn, etc.):
   - For each piece, 2-4 sentences extracting core insights, technical details, or business significance
   - Note publication date and original link
   - If first full crawl, trace important milestones chronologically

3. **OpenAI Content Highlights** — Same structure, organized by research / release / company / safety categories
   - ⚠️ Note: OpenAI data is metadata-only (titles derived from URL slugs, no article text). Only list URLs and categories objectively. Do NOT speculate on title meanings or fabricate content summaries. If information is insufficient for analysis, state the data limitation clearly.

4. **Strategic Signal Analysis** — Based on both companies' release cadence and content focus, analyze:
   - Each company's recent technical priorities (model capabilities / safety / productization / ecosystem)
   - Competitive dynamics: who is setting the agenda, who is following
   - Potential impact on developers and enterprise users

5. **Notable Details** — Extract hidden signals from titles, phrasing, and timing, e.g.:
   - New terms or topics appearing for the first time
   - Dense releases in a category (may signal a product milestone)
   - Policy, compliance, and safety developments

${isAnyFirstRun ? "6. **Content Landscape Overview** — First full crawl only: summarize the content category distribution for both companies and describe their content strategy style (academic-oriented vs product-oriented vs user stories, etc.)\n\n" : ""}Style: English, professional and detailed, suited for AI researchers, product managers, and technical decision-makers. Every item must include official links.
`;
  }

  return `你是一位专注于 AI 领域的深度内容分析师，擅长从官方公告、技术博客、研究论文和产品文档中提炼战略信号。

以下是 ${dateStr} 从 Anthropic（claude.com / anthropic.com）和 OpenAI（openai.com）官网抓取的内容，${firstRunNote}

${siteSections}

---

请生成一份详实的《AI 官方内容追踪报告》，包含以下部分：

1. **今日速览** — 3~5 句话概括最重要的新发布或动向，点出核心亮点

2. **Anthropic / Claude 内容精选** — 按分类（news / research / engineering / learn 等）逐条整理重要内容：
   - 每篇用 2~4 句话提炼核心观点、技术细节或业务意义
   - 标注发布日期和原文链接
   - 如首次全量，按时间线梳理重要里程碑

3. **OpenAI 内容精选** — 同上，按 research / release / company / safety 等分类整理
   - ⚠️ 注意：OpenAI 数据为仅元数据模式（标题由 URL 路径推断，无正文）。请仅基于 URL 和分类进行客观列举，不要对标题含义进行推测性解读或编造内容摘要。如果信息不足以分析，直接说明数据受限即可。

4. **战略信号解读** — 基于两家公司的发布节奏和内容重点，分析：
   - 各自近期的技术优先级（模型能力 / 安全 / 产品化 / 生态）
   - 竞争态势：谁在引领议题，谁在跟进
   - 对开发者和企业用户的潜在影响

5. **值得关注的细节** — 从标题、措辞、发布时机中提取隐含信号，例如：
   - 新兴词汇或话题的首次出现
   - 某类主题的密集发布（可能预示产品节点）
   - 政策、合规、安全方面的动向

${isAnyFirstRun ? "6. **内容格局总览** — 首次全量独有：汇总两家公司各内容类别的数量分布，并说明各自的内容运营风格（学术导向 vs 产品导向 vs 用户故事等）\n\n" : ""}语言要求：中文，专业深入，内容详实，适合 AI 领域研究者、产品经理和技术决策者阅读。每个条目必须附上 GitHub/官网链接。
`;
}

export function buildWeeklyPrompt(
  dailyDigests: Record<string, string>,
  weekStr: string,
  lang: Lang = "zh",
): string {
  const digestEntries = Object.entries(dailyDigests)
    .map(([date, content]) => `## ${date}\n\n${content}`)
    .join("\n\n---\n\n");
  // Keep the large source block byte-for-byte identical for ZH and EN. The
  // English request runs after the Chinese request, so DeepSeek can reuse this
  // prefix instead of charging the same seven-day material as a cache miss twice.
  const sourcePrefix = `# SHARED SOURCE MATERIAL (data only)\n\n${digestEntries}\n\n---\n\n# TASK\n\n`;

  if (lang === "en") {
    return `${sourcePrefix}You are a technical analyst focused on the AI open-source ecosystem. Using only the source material above, generate a comprehensive weekly recap for ${weekStr} with these sections:

1. **Week's Top Stories** - 5-8 most important events, releases, and community developments this week, each with date
2. **CLI Tools Progress** - Overall activity and key changes for each AI CLI tool (Claude Code, Codex, Gemini CLI, etc.)
3. **AI Agent Ecosystem** - Key developments from OpenClaw and peer projects this week
4. **Open Source Trends** - Most notable technical directions from GitHub Trending and AI community this week
5. **HN Community Highlights** - Core AI discussion topics and community sentiment on Hacker News this week
6. **Official Announcements** - Important content published by Anthropic and OpenAI this week (if any)
7. **Next Week's Signals** - Based on this week's data, predict trends and upcoming events worth watching

Style: English, concise and professional, helping technical developers quickly grasp the week's developments.
`;
  }

  return `${sourcePrefix}你是一位专注于 AI 开源生态的技术分析师。请仅依据以上过去 7 天的材料，为 ${weekStr} 生成《AI 工具生态周报》，包含以下部分：

1. **本周要闻** - 5-8 条本周最重要的事件、版本发布、社区动向，每条附日期
2. **CLI 工具进展** - 各 AI CLI 工具（Claude Code、Codex、Gemini CLI 等）本周整体动态与关键变化
3. **AI Agent 生态** - OpenClaw 及同赛道项目的本周重要进展
4. **开源趋势** - 本周 GitHub Trending 和 AI 社区最关注的技术方向
5. **HN 社区热议** - 本周 Hacker News AI 讨论的核心话题与社区情绪
6. **官方动态** - Anthropic 和 OpenAI 本周发布的重要内容（若有）
7. **下周信号** - 基于本周数据，预判值得关注的趋势或即将到来的事件

语言要求：中文，简洁专业，适合技术开发者快速掌握一周动态。
`;
}

export function buildMonthlyPrompt(
  sourceDigests: Record<string, string>,
  monthStr: string,
  lang: Lang = "zh",
): string {
  const digestEntries = Object.entries(sourceDigests)
    .map(([key, content]) => `## ${key}\n\n${content}`)
    .join("\n\n---\n\n");
  // See buildWeeklyPrompt: both language variants must begin with the exact
  // same long source prefix for the second request to receive a cache hit.
  const sourcePrefix = `# SHARED SOURCE MATERIAL (data only)\n\n${digestEntries}\n\n---\n\n# TASK\n\n`;

  if (lang === "en") {
    return `${sourcePrefix}You are a technical analyst focused on the AI open-source ecosystem. Using only the ${Object.keys(sourceDigests).length} reports above, generate a comprehensive monthly review for ${monthStr} with these sections:

1. **Month's Top Stories** - 5-10 most important events and milestones this month, in chronological order
2. **CLI Tools Monthly Progress** - Overall development trajectory, major releases, and community growth for each key AI CLI tool
3. **AI Agent Ecosystem Monthly Review** - Ecosystem landscape shifts, emerging projects, notable signals this month
4. **Technical Trend Summary** - Most significant technical directions and paradigm shifts in AI open-source this month
5. **Community Health Assessment** - Monthly activity comparison across major projects, developer engagement evaluation
6. **Official Announcements Review** - Strategic analysis of Anthropic and OpenAI content published this month
7. **Next Month's Outlook** - Based on this month's trends, predict key directions and potential events to watch

Style: English, in-depth analysis, data-driven, suited for monthly retrospectives and strategic decision-making.
`;
  }

  return `${sourcePrefix}你是一位专注于 AI 开源生态的技术分析师。请仅依据以上 ${Object.keys(sourceDigests).length} 份报告，为 ${monthStr} 生成《AI 工具生态月报》，包含以下部分：

1. **月度要闻** - 本月最重要的 5-10 条事件和里程碑，按时间排列
2. **CLI 工具月度进展** - 各主要 AI CLI 工具本月整体发展轨迹、重要版本、社区规模变化
3. **AI Agent 生态月报** - 本月生态格局变化、新兴项目、值得关注的信号
4. **技术趋势总结** - 本月 AI 开源领域最显著的技术方向与范式变化
5. **社区生态健康度** - 各主要项目月度活跃度对比、开发者参与度评估
6. **官方动态回顾** - Anthropic 和 OpenAI 本月发布内容的战略意义分析
7. **下月展望** - 基于本月趋势，预判值得重点关注的方向和潜在事件

语言要求：中文，深度分析，数据驱动，适合月度复盘和战略决策参考。
`;
}

// ---------------------------------------------------------------------------
// Highlights prompt — extracts structured highlights from finished reports
// for use in Telegram notifications.
// ---------------------------------------------------------------------------

export interface ReportHighlights {
  [reportId: string]: string[];
}

export interface DailyPick {
  title: string;
  why: string;
  source: string;
  url?: string;
}

export interface DailyPicks {
  picks: DailyPick[];
}

export interface DailyEditorial {
  highlights: ReportHighlights;
  picks: DailyPick[];
}

export interface PaperPick {
  title: string;
  takeaway: string;
  why: string;
  venue: string;
  url: string;
}

export interface PaperPicks {
  picks: PaperPick[];
}

export interface HandheldUltrasoundPick {
  title: string;
  context: string;
  relevance: string;
  action: string;
  category: string;
  source: string;
  url: string;
  kind: "official-update" | "open-source-release";
}

export interface HandheldUltrasoundPicks {
  picks: HandheldUltrasoundPick[];
}

export function buildHandheldUltrasoundPrompt(data: HandheldUltrasoundData, dateStr: string): string {
  const candidates = data.items
    .map(
      (item, index) =>
        `${index + 1}. 标题: ${item.title}\n来源: ${item.source}\n类型: ${item.kind}\n日期: ${item.date || "未知"}\n链接: ${item.url}\n内容: ${item.summary.slice(0, 700) || "来源页没有可用正文"}`,
    )
    .join("\n\n");

  return `你是掌上超声产品、医学影像界面与临床工作流方向的严格技术编辑。请从 ${dateStr} 新发现的官方页面变更和开源版本中，最多选出 1–2 条对掌上超声界面设计或集成开发真正有用的更新。读者可能完全不知道候选中的厂商、软件库或技术名词；卡片必须让人无需打开链接也能看懂“它是什么、与我的项目有什么关系、现在该做什么”。信号不足时返回空数组，绝不能凑数。\n\n# 候选\n\n${candidates || "今天没有新候选。"}\n\n只返回合法 JSON，不要 markdown 代码块，不要解释。格式：\n{"picks":[{"title":"面向产品人员的简明中文标题","context":"它是什么及本次具体变化（不超过45字）","relevance":"与掌超界面、工作流或集成的具体关系（不超过55字）","action":"现在建议关注、参考、评估还是暂不动作（不超过40字）","category":"界面交互/扫查工作流/AI引导/工程集成/设备软件/安全合规之一","source":"候选中的来源名","url":"候选中的原始链接","kind":"候选中的类型"}]}\n\n筛选规则：\n- 来源优先级：掌超厂商的明确产品/软件变化 > 临床扫查流程与界面变化 > 医学影像开源依赖；不是为了填满卡片而选择开源版本\n- 重点关注：扫查流程、深度/增益/焦点/预设、冻结回放、测量标注、AI 扫查引导与质量反馈、移动端交互、单手/戴手套操作、DICOM/PACS、SDK/API、网络连接、边缘推理、隐私安全和可用性\n- 开源项目只有在重大版本、严重安全/兼容性风险，或直接影响 DICOM、测量标注、移动端渲染、AI 集成时才可入选；例行补丁、构建/依赖更新、普通 bug 修复以及同一仓库的连续小版本一律跳过\n- context 要先用普通中文解释项目或产品是做什么的，不能默认读者认识 Cornerstone3D、OHIF、MONAI Label 等名称\n- relevance 必须点明会影响掌超系统的哪个具体模块或阶段；如果说不清直接关系，就不要选\n- action 要诚实区分“立即关注”“设计参考”“进入该模块开发时再评估”和“暂不需要动作”，不能把所有更新都写成必须集成\n- 跳过商业地区扩张、融资、奖项、普通合作、活动宣传、课程营销和只有口号没有功能细节的产品稿\n- 厂商自述只能当产品信号，不得改写成已被独立验证的临床结论\n- source、url 和 kind 必须逐字使用同一候选中已有的值，绝不能编造\n- 同一事件只保留一条；没有足够具体、可执行的信息就返回 {"picks":[]}`;
}

/**
 * Produces both per-report card highlights and the cross-source must-read list
 * from one shared set of excerpts. Keeping the two editorial tasks together
 * avoids sending essentially the same report material to the model twice.
 */
export function buildDailyEditorialPrompt(
  reportContents: Record<string, string>,
  itemsPerReport: number = 6,
): string {
  const sections = Object.entries(reportContents)
    .map(([id, content]) => `## [${id}]\n\n${content.slice(0, 2000)}`)
    .join("\n\n---\n\n");

  return `你是一位严格、简洁的中文 AI 新闻主编。以下是今日多个 AI 生态专题报告的节选，每份报告均以 ID 标注。请一次完成两项编辑工作：为现有卡片提取专题亮点，并选出跨来源的今日必看事件。\n\n${sections}\n\n---\n\n只返回合法 JSON，不要 markdown 代码块，不要解释。格式：\n{"highlights":{"ai-cli":["亮点1","亮点2"],"ai-agents":["亮点1","亮点2"]},"picks":[{"title":"事件标题","why":"为什么重要（不超过45字）","source":"来源名称","url":"报告中已有的原始链接"}]}\n\n专题亮点规则：\n- highlights 必须使用上面方括号中的报告 ID 作为 key\n- 只包含有实际内容的报告，失败或无活动的报告直接跳过\n- 每份报告最多 ${itemsPerReport} 条，每条不超过30个字\n- 优先版本发布、重要特性、热门项目、关键讨论，并保留项目名、版本号或 star 数等具体信息\n\n今日必看规则：\n- picks 选出真正值得关注的 5–10 条；当天信号不足时可以少于5条，绝不能凑数\n- 优先官方模型/产品发布、原始论文、重要开源发布、政策或融资等实质事件\n- 同一事件多处出现时只保留一条，并选择最原始、最可信的来源\n- 跳过例行小更新、营销稿、重复讨论和没有实际新增信息的 Issue/PR\n- 尽量覆盖不同方向，不要让同一家公司或主题占据多数\n- url 只能使用节选里已有的链接；没有可靠链接时省略 url，绝不能编造`;
}

/**
 * Selects a short, cross-source editorial briefing for readers who want the
 * signal without opening every specialist report.
 */
export function buildDailyPicksPrompt(reportContents: Record<string, string>): string {
  const sections = Object.entries(reportContents)
    .map(([id, content]) => `## [${id}]\n\n${content.slice(0, 1800)}`)
    .join("\n\n---\n\n");

  return `你是一位严格的中文 AI 新闻主编。以下是今日多个来源的 AI 生态报告节选。请从中选出真正最值得读者关注的 5–10 条事件；如果当天没有足够强的新闻，可以少于 5 条，绝不能凑数。\n\n${sections}\n\n---\n\n只返回合法 JSON，不要 markdown 代码块，不要解释。格式：\n{"picks":[{"title":"事件标题","why":"为什么重要（不超过45字）","source":"来源名称","url":"报告中已有的原始链接"}]}\n\n选择规则：\n- 优先级：官方模型/产品发布、原始论文、重要开源发布、政策/融资等实质行业事件；高质量社区讨论只能作为佐证，不能替代事实来源\n- 同一事件多处出现时，只保留一条，并使用最原始、最可信的来源\n- 跳过例行小更新、营销稿、重复讨论、没有实际新增信息的 Issue/PR\n- 条目要覆盖当天最重要的不同方向，不要让同一家公司或同一主题占据多数\n- url 只能使用节选里出现过的链接；找不到可靠链接时省略 url 字段，绝不能编造\n- title 要具体，why 用人话解释对 AI 从业者或关注者的实际影响`;
}

/**
 * Selects a small reading list from the fresh ArXiv feed. Conference labels
 * are deliberately conservative: a venue may only be named when it appears
 * in the paper's own ArXiv metadata.
 */
export function buildPaperPicksPrompt(
  data: ArxivData,
  conferenceData: ConferencePaperData,
  dateStr: string,
  recentlyRecommendedTitles: string[] = [],
): string {
  const papers = data.papers
    .map((paper, index) => {
      const metadata = [
        `分类: ${paper.categories.join(", ")}`,
        paper.comment ? `作者备注: ${paper.comment}` : "",
        paper.journalRef ? `期刊/会议: ${paper.journalRef}` : "",
      ]
        .filter(Boolean)
        .join(" | ");
      return `${index + 1}. 标题: ${paper.title}\n链接: ${paper.url}\n${metadata}\n摘要: ${paper.summary.slice(0, 700)}`;
    })
    .join("\n\n");

  const conferenceSources = conferenceData.sources
    .map(
      (source) =>
        `## ${source.venue} ${source.year} 官方获奖 / Spotlight 来源\n来源链接: ${source.url}\n${source.text}`,
    )
    .join("\n\n---\n\n");

  const recentPicks = recentlyRecommendedTitles.length
    ? recentlyRecommendedTitles
        .slice(-120)
        .map((title) => `- ${title}`)
        .join("\n")
    : "过去 30 天没有已推送的论文。";

  return `你是一位严格的 AI 论文编辑。请为 ${dateStr} 筛出 3–5 篇真正值得精读的论文。候选由“最新 ArXiv”与“CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方获奖/Spotlight 页面”组成；候选不够好时可以少于 3 篇，绝不能凑数。\n\n读者重点关注视觉、医学影像、多模态和大模型，这四类同等重要：当天哪一类出现真正强的工作就优先选哪一类；若有多篇同样优秀的候选，尽量让每日列表覆盖不同方向。在视觉和医学影像中，额外留意颈动脉超声、血管管腔/管壁/斑块/IMT、狭窄评估、分割、检测与定位，以及 B-mode/Doppler/超声视频、跨设备泛化、弱/半监督和实时推理；同时关注超声图像超分辨率、去噪、增强与重建（包括 RF/IQ/通道数据、波束形成、稀疏采样和逆问题），以及掌上超声算法的小型化与端侧部署（轻量网络、剪枝、量化、蒸馏、低秩压缩、NAS、移动 NPU/ARM 推理）。尤其关注设备、探头、操作者、视角、增益及亮度/对比度变化造成的域偏移、数据集偏置与伪相关，以及因果表征/干预、不变学习、域泛化/适配、OOD 检测和测试时适配等跨设备稳健性工作。这是柔性加权而非固定配额，只有质量相当或更强时才优先。其他方向（如具身智能、强化学习、AI 安全、机器人、科学智能等）只要出现足够强、影响明确的工作，也应优先入选，不能因不属于重点方向而遗漏。每天尽量包含 1–2 篇顶会官方高信号论文与 2–3 篇新 ArXiv 论文。\n\n# 过去 30 天已推荐（严禁再次选择）\n\n${recentPicks}\n\n# 最新 ArXiv 候选\n\n${papers || "今天没有可用的 ArXiv 候选。"}\n\n# 顶会官方候选\n\n${conferenceSources || "今天没有可用的顶会官方来源。"}\n\n只返回合法 JSON，不要 markdown 代码块，不要解释。格式：\n{"picks":[{"title":"论文原始标题","takeaway":"任务、方法与对象（不超过45字）","why":"最强证据或项目价值（不超过45字）","venue":"ArXiv 或 CVPR/NeurIPS/ICCV/ECCV/AAAI/MICCAI","url":"候选中已有的 ArXiv 链接，或该会议对应的官方来源链接"}]}\n\n筛选规则：\n- 顶会论文优先官方 Best Paper、Honorable Mention、Oral、Spotlight、Award Candidate 或 MICCAI 官方高评审/获奖工作；不能只因“顶会”就选普通论文\n- 过去 30 天已推荐的论文绝不能再次选择；即使 venue、链接版本或标题中的标点/大小写不同，也视为同一篇\n- 优先新方法、可靠基准、开源且可复现、具有明确实际影响的工作；跳过纯小幅调参、营销式命名和缺少验证的论文\n- 视觉、医学影像、多模态和大模型同等重要；颈动脉、超声重建与掌超端侧部署只作柔性加权，不得为了方向标签降低质量，其他方向出现足够强的工作也应入选\n- 对超分辨率与重建工作，优先真实低质/低通道超声、原始 RF/IQ 数据、采集物理约束和跨设备验证；只在合成降采样上提升自然图像指标的工作不因“超分”标签加分\n- 对模型小型化与端侧部署工作，优先报告真实硬件上的延迟/FPS、内存、功耗、参数量及量化精度损失；只有 FLOPs 或参数下降、没有移动端或边缘设备验证的工作降低优先级\n- 对因果稳健性、域泛化/适配与 OOD 工作，优先报告实际验证过的设备、中心、操作者、协议或视角；只有“因果”标签却缺少明确干预、识别假设或跨域验证的论文，不因术语本身加分\n- 对医学影像论文，why 优先说明摘要中真实提供的数据规模、外部/跨设备验证、代码数据开放或实时性证据；没有这些信息就说明实际项目价值，绝不能推测或编造指标\n- 对 ArXiv，只有候选的“作者备注”或“期刊/会议”明确提到 CVPR、NeurIPS（或 NIPS）、ICCV、ECCV、AAAI、MICCAI 时，venue 才可写该会议；否则写 ArXiv\n- 对顶会来源，venue 必须与来源标题一致，url 必须使用该来源块里的“来源链接”；不能编造单篇论文链接\n- title 必须逐字来自候选或官方来源；不能猜测或改写标题\n- 中文字段要简明、具体，面向希望决定“要不要花时间读全文”的读者`;
}

export function buildHighlightsPrompt(
  reportContents: Record<string, string>,
  lang: Lang = "zh",
  itemsPerReport: number = 6,
): string {
  const sections = Object.entries(reportContents)
    .map(([id, content]) => `## [${id}]\n\n${content.slice(0, 2000)}`)
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a concise news editor. The following are today's AI ecosystem report excerpts, each labeled with a report ID.

${sections}

---

For each report, extract ${itemsPerReport} of the most noteworthy highlights — the kind that would make a reader want to click through. Each highlight should be a single short sentence (under 60 characters).

Return ONLY valid JSON, no markdown fences, no explanation. Format:
{"ai-cli":["highlight 1","highlight 2",...],"ai-agents":["highlight 1","highlight 2",...],...}

Rules:
- Use the exact report IDs from the [brackets] above as keys
- Only include reports that have meaningful content (skip reports with failure messages or no activity)
- ${itemsPerReport} highlights per report, each under 60 characters
- Focus on: new releases, notable features, trending projects, key discussions
- Be specific: include project names, version numbers, star counts where relevant`;
  }

  return `你是一位简洁的新闻编辑。以下是今日 AI 生态各报告的摘要，每个报告用 ID 标注。

${sections}

---

为每份报告提取 ${itemsPerReport} 条最值得关注的亮点——能让读者产生点击欲望的那种。每条亮点用一句简短的话（不超过 30 个字）。

只返回合法的 JSON，不要 markdown 代码块，不要解释。格式：
{"ai-cli":["亮点1","亮点2",...],"ai-agents":["亮点1","亮点2",...],...}

规则：
- 用上面方括号中的报告 ID 作为 key
- 只包含有实际内容的报告（跳过失败或无活动的报告）
- 每个报告 ${itemsPerReport} 条亮点，每条不超过 30 个字
- 重点关注：新版本发布、重要特性、热门项目、关键讨论
- 要具体：包含项目名、版本号、star 数等关键信息`;
}

export function buildHnPrompt(data: HnData, dateStr: string, lang: Lang = "zh"): string {
  const storiesText = data.stories
    .map((s, i) =>
      lang === "en"
        ? `${i + 1}. **${s.title}**\n` +
          `   Link: ${s.url}\n` +
          `   Discussion: ${s.hnUrl}\n` +
          `   Score: ${s.points} | Comments: ${s.comments} | Author: ${s.author} | Time: ${s.createdAt.slice(0, 16)}`
        : `${i + 1}. **${s.title}**\n` +
          `   链接: ${s.url}\n` +
          `   讨论: ${s.hnUrl}\n` +
          `   分数: ${s.points} | 评论: ${s.comments} | 作者: ${s.author} | 时间: ${s.createdAt.slice(0, 16)}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI industry news analyst. The following are AI-related top posts from Hacker News in the past 24 hours as of ${dateStr} (sorted by score, ${data.stories.length} total):

---

${storiesText}

---

Generate a structured Hacker News AI Community Digest in English:

1. **Today's Highlights** — 3-5 sentences on the hottest AI discussion topics and community sentiment on HN today

2. **Top News & Discussions** — Organized by category, select the 2-5 most representative items per category, each with:
   - Title (with original link) + HN discussion link
   - Score and comment count
   - One sentence: why this matters, what the community's typical reaction is

   Categories:
   - 🔬 Models & Research (new model releases, papers, benchmarks)
   - 🛠️ Tools & Engineering (open-source projects, frameworks, engineering practices)
   - 🏢 Industry News (company news, funding, product launches)
   - 💬 Opinions & Debates (notable Ask HN, Show HN, or hot discussion threads)

3. **Community Sentiment Signal** — 100-200 words analyzing today's HN AI discussion mood and focus:
   - Which topics are most active (high score + high comments)?
   - Any clear points of controversy or consensus?
   - Compared to last cycle, any notable shift in focus?

4. **Worth Deep Reading** — List 2-3 pieces most worth developers/researchers reading in depth, with brief reasoning

Style: English, concise and professional, preserve all original links.
`;
  }

  return `你是 AI 行业资讯分析师。以下是 ${dateStr} 从 Hacker News 抓取的过去 24 小时内 AI 相关热门帖子（按分数降序，共 ${data.stories.length} 条）：

---

${storiesText}

---

请生成一份结构清晰的《Hacker News AI 社区动态日报》，要求：

1. **今日速览** — 3~5 句话，概括今日 HN 社区围绕 AI 最热门的讨论方向和情绪

2. **热门新闻与讨论** — 按以下分类整理，每类选取最具代表性的 2~5 条，每条包含：
   - 标题（附原文链接）+ HN 讨论链接
   - 分数和评论数
   - 一句话说明：这条内容为什么值得关注，社区有何典型反应

   分类：
   - 🔬 模型与研究（新模型发布、论文、基准测试）
   - 🛠️ 工具与工程（开源项目、框架、工程实践）
   - 🏢 产业动态（公司新闻、融资、产品发布）
   - 💬 观点与争议（值得关注的 Ask HN、Show HN 或热议帖子）

3. **社区情绪信号** — 100~200 字，分析今日 HN AI 讨论的整体情绪和关注重点：
   - 社区对哪类话题最活跃（高分 + 高评论）？
   - 有无明显的争议点或共识？
   - 与上周期相比，关注方向有无明显变化？

4. **值得深读** — 列出 2~3 条今日最值得开发者/研究者深入阅读的内容，简述理由

语言要求：中文，简洁专业，保留所有原文链接。
`;
}

export function buildPhPrompt(data: PhData, dateStr: string, lang: Lang = "zh"): string {
  const productsText = data.products
    .map((p, i) =>
      lang === "en"
        ? `${i + 1}. **${p.name}** — ${p.tagline}\n` +
          `   Product Hunt: ${p.url}\n` +
          `   Website: ${p.website}\n` +
          `   Votes: ${p.votesCount} | Comments: ${p.commentsCount} | Topics: ${p.topics.join(", ")}`
        : `${i + 1}. **${p.name}** — ${p.tagline}\n` +
          `   Product Hunt: ${p.url}\n` +
          `   官网: ${p.website}\n` +
          `   投票: ${p.votesCount} | 评论: ${p.commentsCount} | 话题: ${p.topics.join(", ")}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI product analyst. The following are AI-related products launched on Product Hunt in the past 24 hours as of ${dateStr} (sorted by votes, ${data.products.length} total):

---

${productsText}

---

Generate a structured Product Hunt AI Products Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most notable AI product launches and trends on Product Hunt today

2. **Top Products** — Organized by category, select the most representative products per category, each with:
   - Product name + tagline (with Product Hunt link and website link)
   - Vote count and comment count
   - One sentence: what problem it solves, what makes it stand out

   Categories:
   - 🤖 AI Agents & Assistants (chatbots, copilots, autonomous agents)
   - 🛠️ Developer Tools (APIs, SDKs, coding tools, dev infrastructure)
   - 📊 AI Applications (vertical products, SaaS tools powered by AI)
   - 🎨 Creative & Content (image/video/text generation, design tools)
   - 🔧 Infrastructure & Models (model serving, fine-tuning, MLOps)

3. **Market Signal** — 100-200 words analyzing today's Product Hunt AI launch patterns:
   - Which categories are most crowded?
   - Any innovative approaches or novel use cases?
   - Open-source vs closed-source trend among launches

4. **Worth Trying** — List 2-3 products most worth developers trying out, with brief reasoning

Style: English, concise and professional, preserve all original links.
`;
  }

  return `你是 AI 产品分析师。以下是 ${dateStr} 从 Product Hunt 抓取的过去 24 小时内 AI 相关产品发布（按投票数降序，共 ${data.products.length} 个）：

---

${productsText}

---

请生成一份结构清晰的《Product Hunt AI 产品日报》，要求：

1. **今日速览** — 3~5 句话，概括今日 Product Hunt 上 AI 产品发布的整体趋势和亮点

2. **热门产品** — 按以下分类整理，每类选取最具代表性的产品，每个产品包含：
   - 产品名 + 简介（附 Product Hunt 链接和官网链接）
   - 投票数和评论数
   - 一句话说明：解决什么问题，有何独特之处

   分类：
   - 🤖 AI 智能体与助手（聊天机器人、Copilot、自主 Agent）
   - 🛠️ 开发者工具（API、SDK、编程工具、开发基础设施）
   - 📊 AI 应用（垂直场景产品、AI 驱动的 SaaS 工具）
   - 🎨 创意与内容（图像/视频/文本生成、设计工具）
   - 🔧 基础设施与模型（模型服务、微调、MLOps）

3. **市场信号** — 100~200 字，分析今日 Product Hunt AI 产品的发布规律：
   - 哪些类别最密集？
   - 有无创新性的思路或新颖的应用场景？
   - 开源 vs 闭源的趋势

4. **值得试用** — 列出 2~3 个最值得开发者试用的产品，简述理由

语言要求：中文，简洁专业，保留所有原文链接。
`;
}

// ---------------------------------------------------------------------------
// ArXiv prompt
// ---------------------------------------------------------------------------

export function buildArxivPrompt(data: ArxivData, dateStr: string, lang: Lang = "zh"): string {
  const papersText = data.papers
    .map((p, i) => {
      const authors =
        p.authors.length > 3 ? p.authors.slice(0, 3).join(", ") + " et al." : p.authors.join(", ");
      const cats = p.categories.slice(0, 3).join(", ");
      return lang === "en"
        ? `${i + 1}. **${p.title}**\n` +
            `   Link: ${p.url}\n` +
            `   Authors: ${authors} | Categories: ${cats}\n` +
            `   Published: ${p.published.slice(0, 10)}\n` +
            `   Abstract: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`
        : `${i + 1}. **${p.title}**\n` +
            `   链接: ${p.url}\n` +
            `   作者: ${authors} | 分类: ${cats}\n` +
            `   发布: ${p.published.slice(0, 10)}\n` +
            `   摘要: ${p.summary.slice(0, 300)}${p.summary.length > 300 ? "..." : ""}`;
    })
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI research analyst. The following are recent AI-related papers from ArXiv as of ${dateStr} (${data.papers.length} papers from AI, ML, language, computer vision, image/video processing, and quantitative biology categories):

---

${papersText}

---

Generate a structured ArXiv AI Research Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most significant research directions and breakthroughs

2. **Key Papers** — Select 8-15 most important papers, organized by theme:
   - 🧠 Large Language Models (architecture, training, alignment, evaluation)
   - 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
   - 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
   - 📊 Applications (domain-specific, multimodal, code generation)

   For each paper:
   - Title (with ArXiv link)
   - Authors (abbreviated)
   - One sentence: key contribution and why it matters

3. **Research Trend Signal** — 100-200 words on emerging research directions visible from today's submissions

4. **Worth Deep Reading** — 2-3 papers most worth reading in full, with reasoning

Style: English, concise and professional, preserve all ArXiv links.
`;
  }

  return `你是 AI 研究分析师。以下是 ${dateStr} ArXiv 上最新的 AI 相关论文（共 ${data.papers.length} 篇，来自 AI、机器学习、语言、计算机视觉、图像/视频处理与定量生物分类）：

---

${papersText}

---

请生成一份结构清晰的《ArXiv AI 研究日报》，要求：

1. **今日速览** — 3~5 句话，概括今日最值得关注的研究方向和突破

2. **重点论文** — 选出 8~15 篇最重要的论文，按主题分类：
   - 🧠 大语言模型（架构、训练、对齐、评估）
   - 🤖 智能体与推理（规划、工具使用、多智能体、思维链）
   - 🔧 方法与框架（新技术、基准测试、效率优化）
   - 📊 应用（垂直领域、多模态、代码生成）

   每篇论文包含：
   - 标题（附 ArXiv 链接）
   - 作者（缩写）
   - 一句话说明：核心贡献和为什么值得关注

3. **研究趋势信号** — 100~200 字，从今日投稿中观察到的新兴研究方向

4. **值得精读** — 2~3 篇最值得完整阅读的论文，简述理由

语言要求：中文，简洁专业，保留所有 ArXiv 链接。
`;
}

// ---------------------------------------------------------------------------
// Hugging Face prompt
// ---------------------------------------------------------------------------

export function buildHfPrompt(data: HfData, dateStr: string, lang: Lang = "zh"): string {
  const modelsText = data.models
    .map((m, i) =>
      lang === "en"
        ? `${i + 1}. **${m.id}**\n` +
          `   Link: ${m.url}\n` +
          `   Author: ${m.author} | Pipeline: ${m.pipelineTag || "N/A"}\n` +
          `   Likes: ${m.likes.toLocaleString()} | Downloads: ${m.downloads.toLocaleString()}\n` +
          `   Tags: ${m.tags.slice(0, 5).join(", ")}`
        : `${i + 1}. **${m.id}**\n` +
          `   链接: ${m.url}\n` +
          `   作者: ${m.author} | 任务: ${m.pipelineTag || "N/A"}\n` +
          `   点赞: ${m.likes.toLocaleString()} | 下载: ${m.downloads.toLocaleString()}\n` +
          `   标签: ${m.tags.slice(0, 5).join(", ")}`,
    )
    .join("\n\n");

  if (lang === "en") {
    return `You are an AI model ecosystem analyst. The following are trending models on Hugging Face Hub as of ${dateStr} (${data.models.length} models, sorted by weekly likes):

---

${modelsText}

---

Generate a structured Hugging Face Trending Models Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most notable model releases and trends on Hugging Face

2. **Trending Models** — Organized by category, each with:
   - Model name (with HF link)
   - Author, likes, downloads
   - One sentence: what it is, why it's trending

   Categories:
   - 🧠 Language Models (LLMs, chat models, instruction-tuned)
   - 🎨 Multimodal & Generation (image, video, audio, text-to-X)
   - 🔧 Specialized Models (code, math, medical, embeddings)
   - 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

3. **Ecosystem Signal** — 100-200 words analyzing model ecosystem trends:
   - Which model families are gaining momentum?
   - Open-weight vs proprietary trends
   - Notable quantization or fine-tuning activity

4. **Worth Exploring** — 2-3 models most worth trying or studying, with reasoning

Style: English, concise and professional, preserve all HuggingFace links.
`;
  }

  return `你是 AI 模型生态分析师。以下是 ${dateStr} Hugging Face Hub 上的热门模型（共 ${data.models.length} 个，按周点赞数排序）：

---

${modelsText}

---

请生成一份结构清晰的《Hugging Face 热门模型日报》，要求：

1. **今日速览** — 3~5 句话，概括 Hugging Face 上最值得关注的模型发布和趋势

2. **热门模型** — 按以下分类整理，每个模型包含：
   - 模型名（附 HF 链接）
   - 作者、点赞数、下载数
   - 一句话说明：这个模型是什么，为什么在趋势榜上

   分类：
   - 🧠 语言模型（LLM、对话模型、指令微调）
   - 🎨 多模态与生成（图像、视频、音频、文本到X）
   - 🔧 专用模型（代码、数学、医疗、嵌入）
   - 📦 微调与量化（社区微调、GGUF、AWQ）

3. **生态信号** — 100~200 字，分析模型生态趋势：
   - 哪些模型家族势头正旺？
   - 开源权重 vs 闭源的趋势
   - 值得注意的量化或微调活动

4. **值得探索** — 2~3 个最值得尝试或研究的模型，简述理由

语言要求：中文，简洁专业，保留所有 HuggingFace 链接。
`;
}

// ---------------------------------------------------------------------------
// Community prompt (Dev.to + Lobste.rs combined)
// ---------------------------------------------------------------------------

export function buildCommunityPrompt(
  devto: DevtoData,
  lobsters: LobstersData,
  dateStr: string,
  lang: Lang = "zh",
): string {
  const devtoText =
    devto.articles.length > 0
      ? devto.articles
          .map((a, i) =>
            lang === "en"
              ? `${i + 1}. **${a.title}**\n` +
                `   Link: ${a.url}\n` +
                `   Author: ${a.user} | Reactions: ${a.positiveReactionsCount} | Comments: ${a.commentsCount} | Reading: ${a.readingTimeMinutes} min\n` +
                `   Tags: ${a.tags.join(", ")}\n` +
                `   ${a.description}`
              : `${i + 1}. **${a.title}**\n` +
                `   链接: ${a.url}\n` +
                `   作者: ${a.user} | 点赞: ${a.positiveReactionsCount} | 评论: ${a.commentsCount} | 阅读: ${a.readingTimeMinutes} 分钟\n` +
                `   标签: ${a.tags.join(", ")}\n` +
                `   ${a.description}`,
          )
          .join("\n\n")
      : lang === "en"
        ? "(No Dev.to articles available)"
        : "（无 Dev.to 文章）";

  const lobstersText =
    lobsters.stories.length > 0
      ? lobsters.stories
          .map((s, i) =>
            lang === "en"
              ? `${i + 1}. **${s.title}**\n` +
                `   Link: ${s.url}\n` +
                `   Discussion: ${s.commentsUrl}\n` +
                `   Score: ${s.score} | Comments: ${s.commentCount} | Author: ${s.author} | Tags: ${s.tags.join(", ")}`
              : `${i + 1}. **${s.title}**\n` +
                `   链接: ${s.url}\n` +
                `   讨论: ${s.commentsUrl}\n` +
                `   分数: ${s.score} | 评论: ${s.commentCount} | 作者: ${s.author} | 标签: ${s.tags.join(", ")}`,
          )
          .join("\n\n")
      : lang === "en"
        ? "(No Lobste.rs stories available)"
        : "（无 Lobste.rs 内容）";

  if (lang === "en") {
    return `You are a tech community analyst. The following are AI-related content from Dev.to and Lobste.rs as of ${dateStr}:

## Dev.to Articles (${devto.articles.length} articles)

${devtoText}

---

## Lobste.rs Stories (${lobsters.stories.length} stories)

${lobstersText}

---

Generate a structured Tech Community AI Digest in English:

1. **Today's Highlights** — 3-5 sentences on the most discussed AI topics across these communities today

2. **Dev.to Highlights** — Select 5-10 most valuable articles:
   - Title (with link)
   - Reactions and comments
   - One sentence: key takeaway for developers

3. **Lobste.rs Highlights** — Select 3-8 most notable stories:
   - Title (with link + discussion link)
   - Score and comments
   - One sentence: why it's worth reading

4. **Community Pulse** — 100-200 words on what these communities are talking about:
   - Common themes across both platforms
   - Practical concerns developers have about AI tools
   - Emerging tutorials, patterns, or best practices

5. **Worth Reading** — 2-3 articles/stories most worth reading in depth

Style: English, concise and developer-friendly, preserve all original links.
`;
  }

  return `你是技术社区分析师。以下是 ${dateStr} Dev.to 和 Lobste.rs 上的 AI 相关内容：

## Dev.to 文章（共 ${devto.articles.length} 篇）

${devtoText}

---

## Lobste.rs 内容（共 ${lobsters.stories.length} 条）

${lobstersText}

---

请生成一份结构清晰的《技术社区 AI 动态日报》，要求：

1. **今日速览** — 3~5 句话，概括今日技术社区围绕 AI 最热门的讨论方向

2. **Dev.to 精选** — 选出 5~10 篇最有价值的文章：
   - 标题（附链接）
   - 点赞数和评论数
   - 一句话说明：对开发者的核心价值

3. **Lobste.rs 精选** — 选出 3~8 条最值得关注的内容：
   - 标题（附链接 + 讨论链接）
   - 分数和评论数
   - 一句话说明：为什么值得阅读

4. **社区脉搏** — 100~200 字，分析技术社区在聊什么：
   - 两个平台共同关注的主题
   - 开发者对 AI 工具的实际关切
   - 新兴的教程、模式或最佳实践

5. **值得精读** — 2~3 篇最值得深入阅读的内容

语言要求：中文，简洁专业，保留所有原文链接。
`;
}
