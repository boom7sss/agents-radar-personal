# AI 开源趋势日报 2026-11-22

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-22 17:52 UTC

---

# AI 开源趋势日报（2026-11-22）

## 1. 今日速览

今日热榜的核心主线是 **AI Agent 的"技能化"与"记忆/上下文基础设施化"**：Claude Code 技能包（Claude-BugHunter、superpowers、stitch-skills、last30days-skill、diagram-design）集体登榜，说明社区正围绕编码 Agent 构建可复用的技能生态。与此同时，Token 压缩与上下文管理（caveman、headroom、claude-mem、mem0）成为独立赛道，反映出 Agent 落地时对成本与持久记忆的真实痛点。主题侧则显示 RAG、Agent 框架与自建小模型（minimind）持续活跃，而传统 ML 框架（TensorFlow、PyTorch、scikit-learn、Keras）以存量高星维持基本盘，今日无明显新增热度。

> 注：Trending 榜单所有仓库总星标均显示为 ⭐0，仅有今日新增数据；主题搜索结果仅有总星标、无今日新增。下文数据严格按原样呈现，不做推断补全。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) — ⭐0（+687 today）。主张"让所有软件变为 Agent 原生"，通过 CLI-Hub 为 Agent 提供统一命令行接入层，是 Agent 工具化的基础设施尝试。
- [cursor/plugins](https://github.com/cursor/plugins) — ⭐0（+301 today）。Cursor 官方插件规范与官方插件集，代表主流 AI 编辑器开始沉淀插件生态。
- [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) — ⭐0（+155 today）。Intel 开源的 AI 推理优化与部署工具包，是推理落地侧的老牌基础设施。
- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) — ⭐206,799（+910 today）。为 Agent 提供搜索与抓取能力，声称可经统一 API 访问 550+ 数据源，今日同时出现在 Trending 与主题榜，热度最高。
- [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) — ⭐122,143。面向编码 Agent 的 Token 压缩技能 + 本地代理，主张更短回答、更小工具输出且原始内容可还原。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐80,440。在内容进入 LLM 前压缩工具输出、日志与 RAG 片段，声称编码 Agent 减少约 20% Token、JSON 减少 60–95%，提供库/代理/MCP server 三种形态。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- [obra/superpowers](https://github.com/obra/superpowers) — ⭐0（+785 today）。Agent 技能框架 + 软件开发方法论，是"技能驱动开发流程"的代表。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐308,820。主打 Agent harness 性能优化，覆盖 skills、instincts、memory、security，兼容 Claude Code、Codex、Cursor 等，是主题榜最高星项目。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐265,367。定位"与你共同成长的 Agent"，来自 NousResearch。
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐149,982。自称"agent engineering platform"，是 Agent 工程化的长期主力框架。
- [langgenius/dify](https://github.com/langgenius/dify) — ⭐161,682。可视化构建 Agentic 工作流与 RAG 管线，支持云/自托管部署，覆盖从原型到生产。
- [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) — ⭐0（+395 today）。面向 CI/CD 可靠性的开源 Agent，是 Agent 向运维场景渗透的信号。
- [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) — ⭐84,164。开源 AI 求职 Agent，可扫描职位、按 CV 打分、定制简历，本地运行于 Codex/OpenCode 等 CLI。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) — ⭐0（+1721 today，今日新增全榜第一）。面向漏洞挖掘与外部红队的 Claude Code 技能包，含 82 个技能、15 个 slash 命令、681 条已披露报告模式，覆盖 24 类核心漏洞。
- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) — ⭐0（+673 today）。跨 Reddit、X、YouTube、HN、Polymarket 与网页做主题调研并生成有据可依摘要的 Agent 技能。
- [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) — ⭐0（+516 today）。Google Labs 出品、面向 Stitch MCP server 的 Agent Skills 库，遵循 Agent Skills 开放标准，兼容 Antigravity、Gemini CLI、Claude Code、Cursor。
- [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) — ⭐0（+640 today）。开源 AI 视频剪辑桌面工具，将长视频自动剪成短视频并生成字幕、封面与发布文案，适配抖音/小红书/TikTok/Reels/YouTube Shorts。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐145,073。按主题或关键词一键生成高清短视频的自动化 AI 工作流。
- [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) — ⭐123,473。多智能体 LLM 金融交易框架。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐73,704。LLM 驱动的多市场股票分析系统，含多源行情、实时新闻、决策看板与自动推送。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) — ⭐68,542（+473 today）。"两小时从 0 训出 64M 大模型"，同时登上 Trending 与 llm-model 主题，是低成本自训 LLM 的代表性教学项目。
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐187,866。本地一键运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的主流入口。
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐169,392。文本、视觉、音频与多模态模型的模型定义框架，兼顾推理与训练。
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐108,831。用 PyTorch 从零实现类 ChatGPT LLM 的逐步教程。
- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐201,764；[pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐105,817；[keras-team/keras](https://github.com/keras-team/keras) — ⭐64,451。传统深度学习框架仍以高存量星标占据基本盘，今日无新增热度数据。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐119,008。为 Agent 提供跨会话持久上下文：捕获会话行为、AI 压缩、再注入后续会话，兼容 Claude Code、Codex、Gemini、Copilot 等。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐69,343。面向 AI Agent 的即插即用记忆层，主打生产可用的持久上下文。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐94,538。从 RAG 引擎演进为"agent-native 数据库"，定位上下文基础设施。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐151,922。将代码库、文档、SQL schema、配置与 PDF 转为可查询知识图谱，主张本地确定性 AST 解析、不使用向量库。
- [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) — ⭐87,664。面向 AI Agent 的网页抓取/抽取/搜索 API，仓库本身为 Apache-2.0 爬虫，可自托管。
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ⭐68,514。强调本地优先、自持智能的 Agent 体验与知识管理平台。

---

## 3. 趋势信号分析

今日最显著的信号是**编码 Agent 的"技能层"正在形成生态**：Claude-BugHunter、superpowers、stitch-skills、last30days-skill、diagram-design、app-store-compliance 在同一天集中登榜，且多数明确标注面向 Claude Code / Codex / Cursor / Gemini CLI 等，说明开发者已从"用 Agent"转向"为 Agent 写技能"。值得注意的是，Google Labs 的 stitch-skills 强调"Agent Skills 开放标准"，暗示技能格式可能出现跨工具互操作的方向。

第二个信号是**上下文与 Token 经济成为独立赛道**：caveman 与 headroom 都以压缩输入/输出为核心卖点，claude-mem 与 mem0 则解决跨会话记忆，二者从"省成本"和"存得住"两端夹击 Agent 落地的真实瓶颈。此外，Graphify 明确"不用向量库"，代表 RAG 架构出现反向量化的分支探索。

应用侧，垂直场景 Agent 持续细分（红队、求职、CI/CD、金融交易、视频剪辑），其中 Claude-BugHunter 以单日 +1721 stars 领跑，安全领域的 Agent 化落地强度突出。开源小模型方面，minimind 的持续活跃表明"低成本自训"仍是教学与验证的热门路径。

---

## 4. 社区关注热点

- **Claude-BugHunter**（+1721 today）：今日新增第一，安全红队与漏洞挖掘的 Agent 技能化样本，值得观察垂直安全场景的 Agent 复用模式。
- **Agent Skills 开放标准之争**：google-labs-code/stitch-skills 与 obra/superpowers 分别代表官方标准派与方法论派，技能格式可能成为下一个生态入口。
- **上下文压缩双雄**：caveman 与 headroom 直面 Agent Token 成本，headroom 声称 JSON 场景减少 60–95% Token，适合优先压测验证。
- **Agent 记忆层**：claude-mem 与 mem0 解决跨会话持久上下文，是长周期 Agent 任务能否落地的关键依赖。
- **Graphify 的"无向量库"路线**：以确定性 AST 解析构建代码知识图谱，为 RAG 之外的代码理解提供另一种架构选择。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*