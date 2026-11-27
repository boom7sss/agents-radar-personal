# AI 开源趋势日报 2026-11-27

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-27 19:29 UTC

---

# AI 开源趋势日报（2026-11-27）

## 1. 今日速览

今日热榜最鲜明的信号是**“Agent 技能/方法论层”的集中爆发**：Claude Code 技能包（Claude-BugHunter +1615、superpowers +916、last30days-skill +664、stitch-skills +311）占据 Trending 前列，社区正从“造 Agent”转向“给 Agent 装技能与规范”。第二个信号是**让软件与数据对 Agent 原生化**：CLI-Anything 主张“让所有软件 Agent-Native”，firecrawl 定位为 Agent 的知识基础设施。第三，**Agent 上下文经济学**成为独立赛道——caveman、headroom、claude-mem、mem0 等一批“省 token / 记忆持久化”项目在主题搜索中体量庞大。此外，轻量训练（minimind）与本地化产品（autoclip）同日登榜，说明“小模型自训”和“开源替代闭源 SaaS”两条路线仍然活跃。

> 注：主题搜索数据中 stars 总量普遍偏高（如 ECC 31 万），与 Trending 榜的 ⭐0（未抓取总量）口径不一致，下文按原始数据并列标注，不做合并推断。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** — ⭐0（+668 today）｜主张“让所有软件 Agent-Native”，为 Agent 提供 CLI 接入层，是今日“软件 Agent 化”叙事的代表。
- **[cursor/plugins](https://github.com/cursor/plugins)** — ⭐0（+242 today）｜Cursor 官方插件规范与官方插件，标志编辑器生态开始标准化 Agent 扩展接口。
- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** — ⭐0（+152 today）｜Intel 开源的 AI 推理优化与部署工具箱，端侧/异构推理部署的成熟基础设施。
- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐188,311｜本地一键跑 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的入口层。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐169,382｜文本/视觉/音频/多模态 SOTA 模型的模型定义框架，兼具推理与训练。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — ⭐0（+833 today）｜主题搜索 ⭐211,539｜通过单一 API 搜索、抓取并接入 550+ 数据源，定位为“让 Agent 更聪明的知识基础设施”。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — ⭐0（+1615 today，今日榜首）｜面向漏洞挖掘与外部红队的 Claude Code 技能包：85 个技能、16 个 slash 命令、681 个披露报告模式，覆盖 24 类核心漏洞，并含企业身份与基础设施攻击矩阵。
- **[obra/superpowers](https://github.com/obra/superpowers)** — ⭐0（+916 today）｜Agent 技能框架 + 软件开发方法论，把“如何用 Agent 写软件”固化为可复用实践。
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — ⭐0（+664 today）｜跨 Reddit、X、YouTube、HN、Polymarket 与网页做主题调研并生成有据可依摘要的 Agent 技能。
- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** — ⭐0（+311 today）｜Google Labs 出品、面向 Stitch MCP server 的 Agent Skills 库，遵循 Agent Skills 开放标准，兼容 Antigravity、Gemini CLI、Claude Code、Cursor。
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** — ⭐0（+326 today）｜面向 CI/CD 可靠性的开源 Agent，把 Agent 落到运维场景。
- **[langgenius/dify](https://github.com/langgenius/dify)** — ⭐162,020｜在同一协作工作区构建 Agentic 工作流与 RAG 流水线，支持云/VPC/自托管。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** — ⭐85,203｜开源求职 Agent：扫描职位、按简历 1–5 分打分、生成 ATS 友好的简历与求职信，本地运行于 Codex、OpenCode 或作为 Claude Code 插件。

### 📦 AI 应用（具体产品、垂直场景）

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** — ⭐0（+733 today）｜开源 OpusClip 替代品，本地优先的 AI 长视频自动切片桌面工具（字幕、封面、发布文案，适配抖音/小红书/TikTok/Reels/YouTube Shorts），并带 MCP server。
- **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)** — ⭐0（+731 today）｜面向 Claude Code、Codex、Copilot、Cursor 等编码 Agent 的编辑级图表设计技能，52 种图型，自包含 HTML+SVG。
- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)** — ⭐0（+531 today）｜应用商店合规 playbook（125 条被拒模式、117 个监管截止日期，含 EU AI Act/DSA/COPPA），并附 AI 编码 Agent 技能。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — ⭐145,983｜用大模型 + 自动化工作流按主题一键生成高清短视频。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — ⭐123,927｜面向 Agentic 金融研究的 TradingAgents。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — ⭐75,000｜LLM 驱动的多市场股票分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — ⭐0（+667 today）｜主题搜索 ⭐72,155｜两小时从 0 训出 64M 大模型，是“自训小模型”教育路线的代表，今日同时出现在两个榜单。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — ⭐109,150｜用 PyTorch 逐步实现类 ChatGPT 的 LLM，系统学习路径。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** — ⭐105,760｜张量计算与动态神经网络框架，GPU 加速训练底座。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** — ⭐201,819｜面向所有人的开源机器学习框架。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐266,603｜“随你成长的 Agent”，Nous Research 的开放 Agent 项目。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** — ⭐80,842｜AI 工程实践教程：学、建、交付。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — ⭐120,181｜跨会话持久上下文：捕获 Agent 会话内容、AI 压缩、回注未来会话，兼容 Claude Code、Codex、Gemini、Hermes、Copilot、OpenCode 等。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐69,549｜面向生产环境的 Agent 记忆层，即插即用的持久上下文基础设施。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐154,207｜把代码库及其文档、SQL schema、配置、PDF 转成可查询知识图谱，本地确定性 AST 解析、每个边都有解释、不依赖向量库。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐94,834｜从 RAG 引擎演进为“Agent 原生的上下文基础设施数据库”。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — ⭐159,689｜支持 Ollama/OpenAI API 等的友好 AI 界面。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** — ⭐68,704｜本地优先的 Agent 体验套件，“不再租用智能”。
- **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)** — ⭐63,753｜终身个性化辅导系统。

---

## 3. 趋势信号分析

今日最强烈的信号是**“Agent 技能/规范层”成为新的竞争焦点**：Trending 前 12 名中有 5 个是 Claude Code / Codex / Cursor 等编码 Agent 的技能包或方法论（Claude-BugHunter、superpowers、last30days-skill、stitch-skills、diagram-design），且覆盖红队、求职、图表、调研、合规等垂直场景，说明生态正从“谁的 Agent 更强”转向“谁积累了更多可复用技能与踩坑知识”。与此同时，**Agent 上下文经济学**首次形成规模化赛道：caveman（少用 token）、headroom（压缩工具输出与 RAG chunk）、claude-mem / mem0（持久记忆）分别从“省、压、记”三个角度切入，反映长会话 Agent 的成本与精度瓶颈已成共识。**MCP 与开放标准**（Agent Skills 开放标准、Stitch MCP server、autoclip 的 MCP server）成为跨工具互通的默认接口。两个相对新面孔值得标注：Google Labs 的 Stitch 技能库（大厂介入技能标准）与 Graphify 的“无向量库、确定性 AST 知识图谱”路线，代表对向量检索范式的反思。小模型自训（minimind）与开源替代闭源 SaaS（autoclip、AnythingLLM）延续既往主线。今日数据未直接体现具体大模型发布事件，相关关联无法从材料确认。

---

## 4. 社区关注热点

- **Claude-BugHunter**：今日新增 stars 最高（+1615），把安全红队知识（681 个披露报告模式、24 类漏洞）打包成技能，是“垂直领域知识 × Agent 技能”跑通关注度的样板。
- **Agent 技能标准与跨工具兼容**：stitch-skills 明确遵循 Agent Skills 开放标准并兼容多个编码 Agent，叠加 cursor/plugins 的官方规范，值得跟进“技能是否会同质化为可移植资产”。
- **上下文压缩与记忆**：caveman、headroom、claude-mem、mem0 四条路线并存，做生产级 Agent 的团队应重点评估 token 成本与跨会话一致性。
- **Graphify 的确定性知识图谱**：明确“无向量库、每条边可解释”，为代码库/文档问答提供了 RAG 之外的可审计替代路径。
- **CLI-Anything**：“让所有软件 Agent-Native”若成立，将改变 Agent 接入存量工具的集成成本，值得观察其 CLI-Hub 生态进展。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*