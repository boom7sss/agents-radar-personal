import { describe, it, expect, afterEach } from "vitest";
import {
  buildDailyPicksMessage,
  buildFeishuMessage,
  buildHandheldUltrasoundMessage,
  buildPaperPicksMessage,
} from "../feishu.ts";
import type { Highlights } from "../notify.ts";

const BASE_URL = "https://example.com/radar";

describe("buildFeishuMessage", () => {
  const origPagesUrl = process.env["PAGES_URL"];

  afterEach(() => {
    if (origPagesUrl !== undefined) {
      process.env["PAGES_URL"] = origPagesUrl;
    } else {
      delete process.env["PAGES_URL"];
    }
  });

  it("builds a daily message with zh + en reports", () => {
    const msg = buildFeishuMessage(
      "2026-03-09",
      ["ai-cli", "ai-cli-en", "ai-agents", "ai-agents-en"],
      BASE_URL,
    );
    expect(msg).toContain("agents-radar");
    expect(msg).toContain("2026-03-09");
    expect(msg).toContain("📡");
    expect(msg).toContain(`[AI CLI 工具](${BASE_URL}/#2026-03-09/ai-cli)`);
    expect(msg).toContain(`[AI CLI Tools](${BASE_URL}/#2026-03-09/ai-cli-en)`);
  });

  it("shows weekly icon and suffix for weekly reports", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-weekly", "ai-weekly-en"], BASE_URL);
    expect(msg).toContain("📅");
    expect(msg).toContain("周报");
  });

  it("shows monthly icon and suffix for monthly reports", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-monthly", "ai-monthly-en"], BASE_URL);
    expect(msg).toContain("📆");
    expect(msg).toContain("月报");
  });

  it("monthly takes priority over weekly", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-weekly", "ai-monthly"], BASE_URL);
    expect(msg).toContain("📆");
    expect(msg).toContain("月报");
  });

  it("renders zh-only reports without en link", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-hn"], BASE_URL);
    expect(msg).toContain("HN 社区动态");
    expect(msg).not.toContain("HN Community");
  });

  it("includes Web UI and RSS links", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-cli"], BASE_URL);
    expect(msg).toContain("🌐 Web UI");
    expect(msg).toContain("RSS");
    expect(msg).toContain(`${BASE_URL}/feed.xml`);
  });

  it("uses markdown links instead of HTML", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-cli", "ai-cli-en"], BASE_URL);
    expect(msg).not.toContain("<a href=");
    expect(msg).not.toContain("<b>");
    expect(msg).toContain("**agents-radar");
    expect(msg).toContain(`[AI CLI 工具](`);
  });

  it("includes highlights when provided", () => {
    const highlights: Highlights = {
      zh: {
        "ai-cli": ["Claude Code 发布 v1.2.0", "Gemini CLI 修复 streaming"],
        "ai-agents": ["OpenClaw 新增 MCP 支持"],
      },
      en: {
        "ai-cli": ["Claude Code releases v1.2.0"],
      },
    };
    const msg = buildFeishuMessage(
      "2026-03-09",
      ["ai-cli", "ai-cli-en", "ai-agents", "ai-agents-en"],
      BASE_URL,
      highlights,
    );
    expect(msg).toContain("◦ Claude Code 发布 v1.2.0");
    expect(msg).toContain("◦ Gemini CLI 修复 streaming");
    expect(msg).toContain("◦ OpenClaw 新增 MCP 支持");
  });

  it("works without highlights", () => {
    const msg = buildFeishuMessage("2026-03-09", ["ai-cli", "ai-cli-en"], BASE_URL, null);
    expect(msg).toContain("AI CLI 工具");
    expect(msg).not.toContain("◦");
  });

  it("keeps the must-read selection out of the full overview card", () => {
    const msg = buildFeishuMessage(
      "2026-03-09",
      ["ai-picks", "ai-paper-picks", "ai-handheld-ultrasound", "ai-cli"],
      BASE_URL,
    );
    expect(msg).toContain("AI CLI 工具");
    expect(msg).not.toContain("ai-picks");
    expect(msg).not.toContain("今日 AI 必看");
    expect(msg).not.toContain("今日论文精读");
    expect(msg).not.toContain("掌上超声产品与交互");
  });

  it("builds a short must-read card with source links", () => {
    const msg = buildDailyPicksMessage("2026-03-09", [
      {
        title: "OpenAI 发布新模型",
        why: "推理成本下降，适合更大规模部署。",
        source: "OpenAI",
        url: "https://example.com/release",
      },
    ]);
    expect(msg).toContain("今日 AI 必看");
    expect(msg).toContain("OpenAI 发布新模型");
    expect(msg).toContain("[来源：OpenAI](https://example.com/release)");
  });

  it("builds a paper reading card with venue and paper link", () => {
    const msg = buildPaperPicksMessage("2026-03-09", [
      {
        title: "Vision Foundation Paper",
        takeaway: "统一视觉表征训练。",
        why: "在多个公开基准上表现突出。",
        venue: "CVPR",
        url: "https://arxiv.org/abs/2603.00001",
      },
    ]);
    expect(msg).toContain("今日论文精读");
    expect(msg).toContain("`CVPR`");
    expect(msg).toContain("[阅读论文](https://arxiv.org/abs/2603.00001)");
  });

  it("builds a handheld-ultrasound product and interaction card", () => {
    const msg = buildHandheldUltrasoundMessage("2026-09-09", [
      {
        title: "Vscan Air 新增 DICOMweb 配置",
        context: "Vscan Air 是掌上超声产品，本次新增检查上传配置。",
        relevance: "可参考移动端检查上传和错误反馈流程。",
        action: "设计云端上传流程时对照其交互。",
        category: "工程集成",
        source: "GE HealthCare Vscan Air",
        url: "https://example.com/vscan-dicomweb",
        kind: "official-update",
      },
    ]);
    expect(msg).not.toContain("掌上超声产品与交互");
    expect(msg).toContain("`工程集成`");
    expect(msg).toContain("这是什么：");
    expect(msg).toContain("和你的项目有什么关系：");
    expect(msg).toContain("建议：");
    expect(msg).toContain("[查看官方更新]");
    expect(msg).toContain("来源：GE HealthCare Vscan Air");
  });
});
