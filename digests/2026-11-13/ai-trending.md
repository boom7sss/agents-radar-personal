# AI 开源趋势日报 2026-11-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-13 17:47 UTC

---

# AI 开源趋势日报（2026-11-13）

## 1. 今日速览

今日 AI 开源热度由两类方向主导：一是面向编码智能体的“配套基础设施”持续升温（代码审查、浏览器调试、编码智能体的最佳实践同步），二是围绕“为 Agent 提供记忆、降低 Token 消耗、接入 Web 数据”的上下文与数据层项目密集出现。Trending 榜首的 `GoogleChrome/modern-web-guidance-src`（+1875）显示，让编码智能体掌握最新 Web 规范已成为大厂直接押注的方向；`openai/codex-security`（+754）则把“AI 找漏洞并修复”产品化为 CLI + SDK。同日两个股票分析类 LLM 项目同时出现，提示垂类金融应用正在社区中加速形成。总体看，热点集中在“Agent 的工程化配套”，而不再只是模型本身。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- [openai/codex-security](https://github.com/openai/codex-security) [TypeScript] ⭐0（+754 today）— OpenAI 官方的 Codex Security CLI 与 TypeScript SDK，用于发现、验证并修复安全漏洞，是编码智能体在安全领域的官方工具链。
- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) [TypeScript] ⭐0（+145 today）— 把 Chrome DevTools 接入编码智能体的 MCP 服务，让 Agent 直接获得浏览器调试能力。
- [GoogleChrome/modern-web-guidance-src](https://github.com/GoogleChrome/modern-web-guidance-src) [TypeScript] ⭐0（+1875 today）— 让编码智能体跟上最新 Web 最佳实践，今日增量高居榜首。
- [ollama/ollama](https://github.com/ollama/ollama) [Go] ⭐186,873 — 本地运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的入口，仍是本地推理的事实标准。
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) [Go] ⭐119,650 — 面向编码智能体的“精简表达”技能与代理，宣称可削减 65% Token。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) [Python] ⭐79,562 — 在工具输出、日志、文件和 RAG 分块进入 LLM 前压缩上下文，以库、代理、MCP 服务三种形式提供。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- [affaan-m/ECC](https://github.com/affaan-m/ECC) [JavaScript] ⭐302,350 — Agent 运行框架的性能优化系统，覆盖技能、直觉、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Cursor 等。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) [Python] ⭐263,170 — 主打“随你成长”的智能体项目。
- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) [TypeScript] ⭐113,615 — 用于在工作场景中管理 Agent 的开源应用。
- [backnotprop/plannotator](https://github.com/backnotprop/plannotator) [TypeScript] ⭐0（+100 today）— 与 Agent 保持同步的工作区，可塑造、规划、标注、审查代码并将反馈一键回传给 Agent。
- [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) [Python] ⭐86,935 — 《从零开始构建智能体》中文教程，覆盖原理与实践。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) [Python] ⭐71,437（+272 today）— LLM 驱动的多市场股票智能分析系统，含多源行情、实时新闻、决策看板、自动推送，支持零成本定时运行；同时出现在 Trending 与主题搜索。
- [tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills) [Python] ⭐0（+60 today）— 面向股票投资者的 Claude Code 技能集：行情分析、技术图表、经济日历、选股器与交易策略开发。
- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) [JavaScript] ⭐82,356 — 开源 AI 求职 Agent，按简历给职位打 1–5 分、定制 ATS 简历与求职信，可在 Codex、OpenCode 或 Claude Code 中本地运行。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) [Python] ⭐76,579 — 由 AI 把文档或主题生成原生 PowerPoint，支持原生形状、转场动画、图表表格与语音旁白。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) [Python] ⭐143,222 — 以主题或关键词一键生成高清短视频的自动化 AI 工作流。
- [openbq-org/OpenBB](https://github.com/openbq-org/OpenBB) [Python] ⭐75,395 — 面向分析师、量化与 AI Agent 的开放数据平台。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) [C++] ⭐201,584 — 面向所有人的开源机器学习框架。
- [huggingface/transformers](https://github.com/huggingface/transformers) [Python] ⭐168,948 — 文本、视觉、音频与多模态模型的模型定义框架，覆盖推理与训练。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) [Python] ⭐105,466 — 带 GPU 加速的张量与动态神经网络框架。
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) [Jupyter Notebook] ⭐108,354 — 用 PyTorch 逐步实现类 ChatGPT 的 LLM。
- [scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn) [Python] ⭐68,161 — Python 机器学习基础库。
- [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) [Python] ⭐78,671 — AI 工程学习路径：学、建、发布。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- [langgenius/dify](https://github.com/langgenius/dify) [Python] ⭐161,103 — 在一个协作工作区内构建 Agentic 工作流与 RAG 流水线，支持云、VPC 与自托管部署。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) [Python] ⭐147,152 — 把代码库、文档、SQL schema、配置与 PDF 转为可查询知识图谱，本地确定性 AST 解析、不使用向量库。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) [TypeScript] ⭐116,787 — 为各 Agent 提供跨会话持久上下文，压缩会话内容并在后续注入相关内容。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) [Go] ⭐94,121 — 从 RAG 引擎发展为“Agent 原生数据库”的上下文基础设施。
- [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) [Python] ⭐87,311 — Apache-2.0 爬虫，为 AI Agent 提供网页抓取、提取与搜索能力，可自托管。
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) [JavaScript] ⭐68,243 — 本地优先的 Agent 体验，主打“拥有而非租用智能”。

## 3. 趋势信号分析

今日最明显的信号是“Agent 工程化配套”的爆发：Trending 增量最高的 `modern-web-guidance-src`、`codex-security`、`chrome-devtools-mcp`、`plannotator` 都不是模型或框架，而是让编码智能体更可靠、更安全、更贴合规范的周边工具，说明社区注意力正从“接入模型”转向“把 Agent 用对、用稳”。第二个方向是 Token/上下文经济：`caveman` 与 `headroom` 从不同角度压缩进入模型的上下文，`claude-mem` 则解决跨会话记忆，三者共同指向“上下文管理”正成为独立品类。第三，Agent 的数据触达层在扩张，`firecrawl`、`crawl4ai`、`Agent-Reach` 分别覆盖 Web、抓取与社媒数据源。此外，金融垂类同时出现 `daily_stock_analysis`、`claude-trading-skills` 与 `OpenBB`，显示 LLM 金融分析正形成小生态。需注意：本次数据中多数 Trending 仓库 stars 总量显示为 0，仅今日新增可信，具体技术栈与方向多为首次集中登榜，暂无材料说明与具体大模型发布事件的关联。

## 4. 社区关注热点

- **[openai/codex-security](https://github.com/openai/codex-security)**：OpenAI 官方将“找漏洞—验证—修复”做成 CLI + SDK，若团队在用编码智能体，这是最直接可试的安全环节。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) 与 [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)**：分别以压缩输入和精简表达降低 Token 成本，是当前“上下文经济”最具操作性的两种方案，值得对比实测。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：不用向量库、以确定性 AST 解析构建代码知识图谱，为代码库问答提供了 RAG 之外的可解释路线。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)**：跨会话持久记忆，兼容 Claude Code、Codex、Gemini 等多个 Agent，解决 Agent 长期使用的连续性问题。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)**：同时出现在 Trending 与主题搜索，零成本定时运行，是 LLM 垂类金融应用中落地门槛较低的一个样本。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*