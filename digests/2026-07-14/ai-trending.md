# AI 开源趋势日报 2026-07-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-14 02:56 UTC

---

# AI 开源趋势日报（2026-07-14）

## 今日速览

今日 GitHub 社区继续围绕 **AI Agent + RAG 深度融合** 展开，多个高增长 Trending 项目聚焦于为 Claude Code、Cursor 等编码助手提供**即插即用的专业技能包**（设计、营销、图谱）。**AI 交易代理**（Vibe-Trading）与**多模态伴侣代理**（airi）分别以 1153 和 78 今日新增 stars 进入热榜，显示垂直场景应用正快速落地。同时，**图增强 RAG**（Graphify）与 **LLM 应用脚手架**（awesome-llm-apps）持续火爆，表明开发者对「可立刻运行」的 AI 工作流有强烈需求。自托管本地推理与记忆层（Mem0、Cognee）亦保持高度关注。

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **ollama/ollama** ⭐176,068｜本地模型运行利器，支持 Kimi-K2.6、DeepSeek 等多模型一键下载和推理。
- **huggingface/transformers** ⭐162,577｜业界标准模型库，今日无增量热点但生态地位稳固。
- **langchain-ai/langchain** ⭐141,703｜Agent 工程平台，支撑大量 RAG 与工具链项目。
- **Significant-Gravitas/AutoGPT** ⭐185,515｜经典自主 Agent 框架，持续迭代。
- **vllm-project/vllm** ⭐86,169｜高性能 LLM 推理引擎，PP 与吞吐优化标杆。
- **Nutlope/hallmark** ⭐0 (+794 today)｜针对 Claude Code 等助手的 CSS 设计技能，反 AI-slop 设计理念，助产高质量 UI。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **Shubhamsaboo/awesome-llm-apps** ⭐119,760 (+996 today)｜100+ 可立即运行的 AI Agent & RAG 应用集合，克隆即用，极易上手。
- **OpenHands/OpenHands** ⭐80,688｜AI 驱动开发 Agent，支持多任务编排。
- **CherryHQ/cherry-studio** ⭐48,525｜集成智能聊天、自主代理与 300+ 助手，统一前端接入前沿 LLM。
- **NousResearch/hermes-agent** ⭐214,329｜“与你一起成长的 Agent”，强调持续学习与记忆。
- **coreyhaines31/marketingskills** ⭐0 (+299 today)｜为 Claude Code 等 AI 代理提供的营销技能包（CRO、SEO、增长工程）。
- **esengine/DeepSeek-Reasonix** ⭐26,875｜基于 DeepSeek 的终端编码 Agent，利用前缀缓存稳定运行。
- **HKUDS/nanobot** ⭐45,447｜轻量级开源 AI 代理，集成工具、聊天与工作流。

### 📦 AI 应用（具体产品、垂直场景解决方案）

- **HKUDS/Vibe-Trading** ⭐0 (+1153 today)｜个人交易代理，基于 LLM 实现调仓分析与自动推送。
- **moeru-ai/airi** ⭐0 (+78 today)｜自托管 Grok 伴侣，支持实时语音、Minecraft/Factorio 游戏互动，目标实现 Neuro-sama 级别。
- **santifer/career-ops** ⭐59,908｜AI 求职代理：扫描职位、评分、定制简历，本地运行在 Claude Code 等 CLI 中。
- **ZhuLinsen/daily_stock_analysis** ⭐57,080｜LLM 驱动的多市场股票智能分析系统，支持定时运行与仪表盘。
- **Panniantong/Agent-Reach** ⭐55,831｜让 AI 代理“看遍全网”，零 API 费用搜索 Twitter、Reddit、B站等。
- **hugohe3/ppt-master** ⭐38,802｜AI 一键从文档生成可编辑 PPT，原生形状与动画，支持自定义模板。
- **ScrapeGraphAI/Scrapegraph-ai** ⭐28,346｜基于 AI 的网站爬虫，自然语言描述即可提取结构化数据。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **rasbt/LLMs-from-scratch** ⭐99,041｜从零实现 ChatGPT 类 LLM 的教程，Jupyter Notebook 可执行。
- **open-compass/opencompass** ⭐7,186｜多模型评测平台，覆盖 Llama3、Qwen、GLM 等 100+ 数据集。
- **galilai-group/stable-pretraining** ⭐285｜稳定、可扩展的预训练库，支持基础模型与世界模型。
- **testtimescaling/testtimescaling.github.io** ⭐108｜测试时扩展（Test-Time Scaling）综述资源库。
- **SuperBruceJia/Awesome-Mixture-of-Experts** ⭐67｜MoE 方法精选列表，涵盖多模态专家混和。
- **R-D-BioTech-Alaska/Qelm** ⭐27｜量子增强语言模型（QELM），探索量子与 LLM 结合。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **Graphify-Labs/graphify** ⭐84,898 (+1095 today)｜AI 编码助手技能，将代码、数据库、文档等构建为可查询知识图谱，兼具 RAG 与图谱推理。
- **infiniflow/ragflow** ⭐84,984｜领先的开源 RAG 引擎，融合 Agent 能力构建上下文层。
- **milvus-io/milvus** ⭐45,214｜云原生向量数据库，高可扩展 ANN 搜索。
- **mem0ai/mem0** ⭐60,762｜AI 代理通用记忆层，跨会话上下文压缩注入。
- **topoteretes/cognee** ⭐27,787｜开源 AI 记忆平台，自托管知识图谱引擎，支持持久长记忆。
- **HKUDS/LightRAG** ⭐37,644｜EMNLP 2025 论文简单快速 RAG 系统。
- **lancedb/lancedb** ⭐10,883｜嵌入式多模态检索库，搜索多、管理少。

## 趋势信号分析

今日社区最突出的信号是 **“AI Agent 技能包”** 的爆发——hallmark（+794）、marketingskills（+299）、graphify（+1095）均以**编码助手插件/技能**形式登榜，标志着开发者不再满足于通用 Agent 框架，而是追求**垂直领域的即时能力注入**。这些项目可插入 Claude Code、Cursor、Codex 等主流工具，形成新生态。同时 **Vibe-Trading**（+1153）作为交易 Agent 代表，结合 awesome-llm-apps（+996）的“克隆即用”模式，说明 **AI 应用正从演示走向可实操的金融、求职等真实场景**。在 RAG 领域，Graphify 将**图结构与 RAG 结合**，获得社区高赞，印证了“知识图谱+检索增强”是克服平面 RAG 瓶颈的最新方向。此外，自托管伴侣代理 airi 虽 stars 增幅不高，但结合其“容灵魂的容器”概念，与 Mem0、Cognee 等记忆层项目形成呼应——**持久化、人格化的 AI 代理**正在被认真探索。

## 社区关注热点

- **📦 AI 代理技能包（Skills）** → hallmark、marketingskills、graphify 等，为编码助手提供现成的设计、营销、图谱能力，是当前增长最快的品类。
- **📊 垂直场景 Agent** → Vibe-Trading（交易）、career-ops（求职）、daily_stock_analysis（股票分析），表明金融、招聘领域正在被 AI Agent 渗透，可运行性强。
- **🗃️ 图增强 RAG（GraphRAG）** → Graphify 将代码库转化为知识图谱，兼具检索与推理，有望成为下一阶段 RAG 主流范式。
- **🧠 代理记忆层** → Mem0、Cognee、claude-mem 等项目持续走热，解决跨会话上下文丢失的痛点，是实现“持续学习”Agent 的基础设施。
- **🚀 轻量本地推理** → ollama 始终活跃，而 lancedb、txtai 等嵌入式工具获得关注，表明开发者对**零依赖、可自托管**的 AI 组件有强烈偏好。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*