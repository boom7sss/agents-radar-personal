# AI 开源趋势日报 2026-11-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-10 17:53 UTC

---

# AI 开源趋势日报 · 2026-11-10

## 1. 今日速览

今日 AI 开源最强烈的信号来自「Agent Skills」生态：Anthropic 官方 skills 仓库、addyyosmani 与 mattpocock 的个人 skills 集合、以及围绕 Claude Code 的各类增强项目同日登上热榜，说明社区正从「讨论 Agent 能力」转向「标准化 Agent 工程资产」。与此同时，上下文与 token 优化成为第二主线——billion-context、claude-mem、headroom、caveman 等项目都指向同一个痛点：长会话、小窗口、省 token。基础设施层依然稳固：transformers、tensorflow、pytorch、ollama 等常青项目继续占据主题榜高位，但今天的增量关注明显偏向「Agent 周边生产工具」而非模型本身。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[anthropics/skills](https://github.com/anthropics/skills)** [Python] — 今日 +1676 ⭐（总量未提供）。Anthropic 官方 Agent Skills 公共仓库，是今天 skills 生态爆发的事实源头，值得作为能力封装规范的参考基准。
- **[meta/astryx](https://github.com/meta/astryx)** [TypeScript] — 今日 +3111 ⭐（今日热榜第一）。自称「完全可定制、agent ready」的开源设计系统，把 Agent 交互纳入组件层设计，是今日最高新增 stars 项目。
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** [Rust] — 今日 +775 ⭐。面向 AI Agent 的浏览器自动化 CLI，Rust 实现，补齐 Agent 与真实网页交互的一环。
- **[anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts)** [Python] — 今日 +530 ⭐。基于 Claude API 的可部署应用快速起步项目集，降低从原型到上线的门槛。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] — ⭐300,655。面向 Claude Code、Codex、Cursor 等的 agent harness 性能优化系统，涵盖 skills、instincts、memory、security。
- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** [C++] — 今日 +453 ⭐。通用物理仿真器，是具身智能与机器人学习方向的基础设施，今日登榜值得注意。
- **[homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)** [Python] — 今日 +792 ⭐。用 Claude、ChatGPT 等 AI 助手配置和自动化 Home Assistant 的 MCP 集成。

### 🤖 AI 智能体/工作流

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** [JavaScript] — 今日 +465 ⭐。面向 AI 编码 Agent 的「生产级工程技能」集合，把资深工程师经验封装为可复用技能。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] — 今日 +1223 ⭐。直接来自作者 `.agents` 目录的实战技能集合，热度高于多数官方项目，代表个人实践型 skills 的受欢迎程度。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] — ⭐149,313。自我定位为「agent engineering platform」，是 Agent 工程化叙事的主流承载者。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] — ⭐262,373。主打「随你成长的 Agent」，在主题榜中排名极高。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] — ⭐120,570。开源 Python AI 浏览器 Agent 库，并提供托管 Agent API。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] — ⭐121,849。多 Agent LLM 金融交易框架，是垂直领域多智能体协作的代表。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] — ⭐110,870。一个 CLI 让 Agent 读取搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书，零 API 费用。

### 📦 AI 应用

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] — ⭐81,673。开源 AI 求职 Agent：扫描职位、按 CV 打分、定制简历与求职信，本地运行于 Codex / Claude Code。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] — ⭐75,607。将文档或主题转换为原生 PowerPoint 演示文稿，含原生形状、动画、图表与语音旁白。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] — ⭐141,919。用 AI 大模型与自动化工作流从主题一键生成高清短视频。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] — ⭐69,527。LLM 驱动的多市场股票智能分析系统，支持零成本定时运行。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] — ⭐68,148。本地优先的一体化 Agent 体验应用。
- **[openbq-org/OpenBB](https://github.com/openbq-org/OpenBB)** [Python] — ⭐75,304。面向分析师、量化与 AI Agent 的开放数据平台。

### 🧠 大模型/训练

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] — ⭐168,739。文本、视觉、音频、多模态模型的模型定义框架，训练与推理通用底座。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] — ⭐186,554。本地一键运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] — ⭐201,433。面向所有人的开源机器学习框架。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] — ⭐105,318。具备强 GPU 加速的张量与动态神经网络框架。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] — ⭐108,182。用 PyTorch 从零实现类 ChatGPT 大模型的分步教程。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] — ⭐78,249。系统的 AI 工程学习路径。

### 🔍 RAG/知识库

- **[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)** [TypeScript] — 今日 +374 ⭐。上下文压缩插件，面向月级长会话、小窗口与省 token（宣称省 5 倍 token）。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] — ⭐115,724。跨会话持久上下文：捕获 Agent 行为、AI 压缩、注入未来会话，兼容 Claude Code、Codex、Gemini 等。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] — ⭐79,300。在进入 LLM 前压缩工具输出、日志、文件与 RAG 块，宣称编码 Agent 省 20%、JSON 省 60–95% token。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] — ⭐118,840。以「原始人说话」方式削减 65% token 的编码 Agent 技能 + 代理，风格极端但方向一致。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] — ⭐93,964。自称「Agent 原生数据库」的 RAG 引擎，已扩展为上下文基础设施。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] — ⭐68,761。面向 AI Agent 的可直接接入的记忆层。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] — ⭐145,500。把代码库、文档、SQL schema、配置与 PDF 转为可查询知识图谱，本地确定性 AST 解析、无向量库。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] — ⭐87,185。面向 AI Agent 的网页抓取、抽取与搜索 API，核心为 Apache-2.0 可自托管爬虫。

---

## 3. 趋势信号分析

今日热榜最鲜明的特征是「Agent Skills 的资产化」。Anthropic 官方仓库加上两个个人技能集合同日进榜，说明社区正在围绕 Claude Code 等编码 Agent 建立可复用、可分发的能力包，skills 正从小技巧变成工程交付物。第二个方向是上下文经济学：billion-context、claude-mem、headroom、caveman 四个项目同时强调压缩、记忆与省 token，反映出长会话与有限窗口之间的现实矛盾已成为工程瓶颈，而非模型能力瓶颈。第三，MCP 正在向垂直系统渗透，ha-mcp 把智能家居纳入 Agent 控制面，配合 vercel-labs 的浏览器 CLI，Agent 的「手脚」在快速补齐。技术栈上，Rust 与 Go 在 Agent 基础设施中占比上升。值得注意的是，今日增量关注几乎全部落在 Agent 周边生产工具，而非模型本身——这与主题榜中 transformers、pytorch、ollama 等常青项目维持高位形成对照，显示社区注意力正从「用什么模型」转向「如何让 Agent 可靠工作」。具体的大模型发布或行业事件，本次数据未提供，故不作推断。

---

## 4. 社区关注热点

- **Agent Skills 标准化**：[anthropics/skills](https://github.com/anthropics/skills) 与 [mattpocock/skills](https://github.com/mattpocock/skills)、[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) 同榜。若你在做编码 Agent，现在是观察甚至对齐技能封装格式的窗口期。
- **上下文压缩与 Agent 记忆**：[billion-context](https://github.com/ranxianglei/billion-context)、[claude-mem](https://github.com/thedotmack/claude-mem)、[headroom](https://github.com/headroomlabs-ai/headroom) 指向同一刚需。长会话成本与跨会话连续性，是当前最可落地的优化点。
- **Agent 与真实世界的接口**：[ha-mcp](https://github.com/homeassistant-ai/ha-mcp) 与 [agent-browser](https://github.com/vercel-labs/agent-browser) 分别覆盖智能家居与网页。MCP 生态的垂直扩张值得持续跟踪。
- **代码库知识图谱的非向量路线**：[graphify](https://github.com/Graphify-Labs/graphify) 明确「无向量库、本地确定性 AST 解析、每条边可解释」，为 RAG 提供了可审计的替代思路。
- **面向 Agent 的设计系统**：[meta/astryx](https://github.com/meta/astryx) 以今日最高新增 stars 登顶，提示「Agent 可消费的 UI 规范」可能成为新的前端议题。

> 说明：Trending 榜中的 we-promise/sure（个人理财）、sherlock（社交账号检索）、tokio-rs/topcoat（Web 框架）与本次 AI 主题不直接相关，已略去；mujoco 因与具身智能/机器人学习密切相关予以保留。所有 stars 数据均按原始材料呈现，Trending 项目仅提供今日新增数。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*