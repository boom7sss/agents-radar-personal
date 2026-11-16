# AI 开源趋势日报 2026-11-16

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-16 20:31 UTC

---

# AI 开源趋势日报（2026-11-16）

## 1. 今日速览

今日 AI 开源热度高度集中在「智能体技能（Agent Skills）」生态：Claude Code / Codex / Cursor 的技能包成为 Trending 榜单的绝对主角，并首次出现专门评估技能质量的框架（NVIDIA SkillEvaluator）与聚合技能市场的协议层（AG-UI）。与此同时，Agent 的 token 成本优化（caveman、headroom）与本地视频、代码审查等垂直工具化技能持续登榜，说明社区正从「造 Agent」转向「降本增效、补齐配套」。Google 系动作密集，一天内同时贡献多智能体论文写作框架、Stitch 技能库与 Chrome DevTools MCP。传统 ML 基础设施（TensorFlow、PyTorch、scikit-learn）在主题搜索中热度稳定但缺乏今日新增，社区注意力明显偏向 Agent 工程层。

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** — ⭐0（+540 today）｜TypeScript
  基于 Agent Skills 开放标准、适配 Stitch MCP 服务器的技能库，兼容 Antigravity、Gemini CLI、Claude Code、Cursor 等编码智能体。
- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — ⭐0（+837 today）｜TypeScript
  官方将 Chrome DevTools 能力开放给编码 Agent，是浏览器调试链路接入 Agent 的重要基础组件。
- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** — ⭐0（+953 today）｜Python
  多层级的 Agent 技能与插件评估框架，含质量门禁、语义重叠检测与合成评测集生成，填补「技能质量评估」空白。
- **[kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill)** — ⭐0（+475 today）｜Python
  面向编码 Agent 的本地视频编辑器，42 个 FFmpeg 工具 + 机器可读契约 + MCP 服务器，无云、无 API Key。
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — ⭐0（+946 today）｜Go
  阿里大规模实战验证的代码审查工具，确定性流水线 + LLM Agent 混合架构，内置 NPE、线程安全、XSS、SQL 注入规则集。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — ⭐79,834｜Python
  在工具输出、日志、RAG 分块进入 LLM 前压缩，编码 Agent 减少约 20% token、JSON 减少 60-95%，提供库、代理与 MCP 服务器三种形态。

### 🤖 AI 智能体/工作流

- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)** — ⭐0（+790 today）｜TypeScript
  Agent-User Interaction Protocol，将 Agent 带入前端应用的交互协议层，是当日最受关注的协议级项目。
- **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)** — ⭐0（+689 today）｜TypeScript
  让人「留在回路中」的 Agent 工作区，支持规划、决策、标注、代码审查并一键把反馈发回 Agent。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐263,887｜Python
  「与你共同成长」的 Agent，主题搜索中体量最大的 Agent 类项目之一。
- **[google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)** — ⭐0（+306 today）｜Python
  Google Research 的多智能体框架，自动化 AI 论文写作流程，将多 Agent 协作推入科研产出环节。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — ⭐304,506｜JavaScript
  Agent harness 性能优化系统，覆盖技能、本能、记忆、安全与 research-first 开发。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — ⭐121,221｜Python
  开源 AI 浏览器 Agent 库，并提供托管 Agent API 与隐身浏览器云服务。
- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** — ⭐114,323｜TypeScript
  用于「在工作中管理 Agent」的开源应用，切入 Agent 运维管理场景。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** — ⭐120,734｜Go
  病毒式传播的技能 + 代理，通过「像穴居人说话」压缩约 65% token，是当日降本方向最出圈的项目。

### 📦 AI 应用

- **[dream-num/univer](https://github.com/dream-num/univer)** — ⭐0（+1878 today）｜TypeScript
  今日 Trending 新增 stars 最高的 AI 相关项目：Univer Office SDK，把编辑、计算、协作与文件处理同时带给人和 AI Agent。
- **[tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills)** — ⭐0（+841 today）｜Python
  面向股票投资者与交易员的 Claude Code 技能包，涵盖行情分析、技术图表、经济日历、筛选器与策略开发。
- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — ⭐0（+1057 today）｜Python
  漏洞挖掘与外部红队技能包：82 个技能、15 个斜杠命令、681 条公开报告模式，覆盖 24 类核心漏洞。
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — ⭐0（+122 today）｜Python
  跨 Reddit、X、YouTube、HN、Polymarket 与网页调研任意话题并生成有据可依的摘要。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — ⭐77,520｜Python
  将文档或主题生成原生 PowerPoint，含原生形状、转场动画、数据图表与语音旁白。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** — ⭐83,072｜JavaScript
  开源 AI 求职 Agent，按简历给岗位打分、定制 ATS 简历与求职信，本地运行于 Codex、OpenCode 等 CLI。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — ⭐72,773｜Python
  LLM 驱动的多市场股票智能分析系统，含多源行情、决策看板与零成本定时任务。

### 🧠 大模型/训练

- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐187,246｜Go
  本地运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的入口工具，模型支持列表即行业风向。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐169,050｜Python
  文本、视觉、音频与多模态模型的定义框架，同时覆盖推理与训练。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** — ⭐201,585｜C++
  经典开源机器学习框架，仍是 ml 主题下 star 体量最大的项目之一。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** — ⭐105,554｜Python
  Python 张量与动态神经网络框架，GPU 加速是核心卖点。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐263,887｜Python
  虽为 Agent 项目，但由模型研究团队 NousResearch 出品，体现「模型团队向 Agent 层延伸」的趋势。
- **[keras-team/keras](https://github.com/keras-team/keras)** — ⭐64,425｜Python
  面向人类友好的深度学习高层 API。

### 🔍 RAG/知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐148,950｜Python
  把代码库及其文档、SQL schema、配置与 PDF 转为可查询知识图谱，本地确定性 AST 解析、无向量库。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐94,249｜Go
  自称「Agent 原生数据库」，从 RAG 引擎演进为上下文基础设施。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — ⭐117,645｜TypeScript
  为各 Agent 提供跨会话持久上下文，压缩会话记录并在未来会话中注入相关内容。
- **[crawl4ai](https://github.com/unclecode/crawl4ai)** — ⭐87,445｜Python
  Apache-2.0 爬虫，同时是 Crawl4AI Cloud 的开源底座，为 AI Agent 提供网页抓取与搜索 API。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — ⭐158,835｜Svelte
  用户友好的 AI 界面，支持 Ollama、OpenAI API 等多种后端。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** — ⭐149,684｜Python
  定位「智能体工程平台」，是 Agent + RAG 组合的主流框架。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** — ⭐68,341｜JavaScript
  本地优先的 Agent 体验，「停止租用智能」的口号主打数据自主可控。

## 3. 趋势信号分析

今日最强烈的信号是**Agent Skills 生态的标准化与配套化**。Trending 15 个仓库中有 10 个项目直接围绕编码 Agent 的技能包、技能评估（NVIDIA SkillEvaluator）、技能协议（AG-UI）或 MCP 工具（Chrome DevTools MCP、ffmpeg-skill）展开，且几乎全部聚焦 Claude Code、Codex、Cursor、Gemini CLI 等 CLI Agent，说明「给 Agent 装能力」已成为独立的产品与社区赛道。第二个信号是**token 经济学的爆发**：caveman（压缩 65% token）与 headroom（JSON 减少 60-95%）同日高热度，反映 Agent 大规模落地后的成本焦虑，压缩/代理/MCP 三形态正在成为标配。第三，**垂直领域技能包首次成规模登榜**：交易、漏洞挖掘、求职、视频编辑、论文写作各自形成技能专辑，Agent 从通用工具走向行业纵深。此外，Google（Stitch、PaperOrchestra、Chrome DevTools MCP）与阿里（open-code-review）、NVIDIA 同日在工程层发力，表明大厂竞争已从模型权重转向 Agent 工具链与评测基建。

## 4. 社区关注热点

- **NVIDIA/SkillEvaluator** — 技能数量爆发后，「技能质量如何度量」成为刚需；提供质量门禁与语义重叠检测，适合任何维护技能库的团队优先接入。
- **ag-ui-protocol/ag-ui** — Agent 与前端交互缺乏统一协议，AG-UI 试图占据这一层，早期参与协议讨论的战略价值高于直接使用。
- **univer（Univer Office SDK）** — 今日新增 stars 最高（+1878）的 AI 相关项目，把办公文档能力同时开放给人（前端）与 AI Agent，是 Agent 进入办公场景的关键 SDK。
- **claude-mem + headroom 的上下文管理组合** — 一个管长期记忆、一个管短期输入压缩，二者共同回答 Agent 落地中最实际的「上下文成本」问题。
- **alibaba/open-code-review** — 确定性流水线 + LLM Agent 的混合代码审查架构，并公开多语言安全规则集，适合作为企业 CI 中 AI 审查的参考实现。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*