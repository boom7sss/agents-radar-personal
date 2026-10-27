# AI 开源趋势日报 2026-07-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-15 02:55 UTC

---

# AI 开源趋势日报（2026-07-15）

## 今日速览

- **AI Agent 生态持续爆发**：今日 Trending 中 9 个与 AI 相关的仓库中，7 个直接涉及 Agent 应用或编码助手，其中 `Graphify-Labs/graphify`（今日 +1851 ⭐）和 `mattpocock/skills`（+1679 ⭐）增长最为迅猛。
- **金融垂直 Agent 成新热点**：`HKUDS/Vibe-Trading`（+1256 ⭐）和 `virattt/ai-hedge-fund` 两个交易 Agent 同时登榜，反映社区对 AI + 量化交易场景的强烈兴趣。
- **AI Agent 安全工具首次登上热榜**：`Dicklesworthstone/destructive_command_guard`（+473 ⭐）专门防止 Agent 执行危险命令，标志着 Agent 安全防护正成为独立开发方向。
- **RAG / 记忆层赛道持续扩容**：主题搜索中 `mem0`、`memvid`、`cognee`、`headroom` 等多个记忆与压缩工具突破万星，RAG 从“检索”走向“持久化记忆”。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐176,117  
  本地运行 Kimi、DeepSeek、Qwen 等主流模型的 CLI 工具，持续作为 AI 基础设施标配。

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** — ⭐86,271  
  高吞吐、低延迟的 LLM 推理引擎，生产部署首选。

- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐162,612  
  定义 SOTA 模型的统一框架，覆盖文本、视觉、多模态。

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** — ⭐141,790  
  Agent 工程平台，今日持续迭代，仍是 LLM 应用开发的核心抽象层。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐86,527（今日 +1,851）  
  将代码、文档、图片等任意文件夹转为可查询知识图谱，适配 Claude Code、Codex、Cursor 等主流编码助手，今日热度最高。

- **[Nutlope/hallmark](https://github.com/Nutlope/hallmark)** — 今日 +1,015 ⭐  
  为 Claude Code、Cursor、Codex 提供反 AI 味的 UI 设计技能，帮助开发者控制输出风格。

- **[chenyme/grok2api](https://github.com/chenyme/grok2api)** — 今日 +186 ⭐  
  面向 Grok Build、Grok Web 的多账号 API 网关，简化 Grok 模型调用。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — ⭐151,096  
  Web 搜索与抓取 API，为 LLM 提供大规模实时数据源。

---

### 🤖 AI 智能体 / 工作流（Agent 框架、自动化、多智能体）

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐214,937  
  自我进化的通用 Agent 框架，社区最热门的 agent 基础设施之一。

- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** — ⭐185,541  
  自主 Agent 的经典实现，持续推动 AI 自动化落地。

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** — ⭐145,450  
  支持 Ollama、OpenAI 等后端的用户友好界面，本地 Agent 体验首选。

- **[langgenius/dify](https://github.com/langgenius/dify)** — ⭐148,851  
  生产级 Agent 工作流开发平台，提供可视化编排与工具集成。

- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** — ⭐120,952（今日 +1,106）  
  100+ 可直接运行的 AI Agent 和 RAG 应用集合，今日新增大量关注。

- **[HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading)** — ⭐?（今日 +1,256 ⭐）  
  个人交易 Agent，支持行情分析、策略执行，代表金融垂直场景爆发。

- **[virattt/ai-hedge-fund](https://github.com/viratt/ai-hedge-fund)** — 今日 +109 ⭐  
  对冲基金级别 AI 交易团队，多 Agent 协作模拟真实投研流程。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** — ⭐104,766  
  让 AI 代理像人类一样操作浏览器，自动化 Web 任务。

---

### 📦 AI 应用（具体产品、垂直场景解决方案）

- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** — ⭐48,583  
  AI 生产力工作室，集成智能聊天、自主 Agent 和 300+ 助手，支持前沿模型。

- **[santifer/career-ops](https://github.com/santifer/career-ops)** — ⭐60,138  
  开源 AI 找工作助手：扫描职位、评分 A-F、定制简历、本地运行。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — ⭐39,034  
  从任意文档生成可编辑的 PowerPoint，支持原生形状、动画、音频旁白。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — ⭐57,249  
  LLM 驱动的多市场股票智能分析系统，支持定时运行与推送。

- **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** — ⭐85,497  
  高精度 OCR 工具，支持 100+ 语言，是 RAG 数据处理的重要组件。

- **[jeecgboot/JeecgBoot](https://github.com/jeecgboot/JeecgBoot)** — ⭐47,069  
  AI 低代码平台，一句话生成系统、表单、报表，内置知识库与 MCP 插件。

- **[mattpocock/skills](https://github.com/mattpocock/skills)** — 今日 +1,679 ⭐  
  工程师实战技能集，来源于 Claude Code 配置目录，热榜第二。

---

### 🧠 大模型 / 训练（模型权重、训练框架、微调、评估）

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** — ⭐99,100  
  从零实现类 ChatGPT 的 LLM 教学项目，PyTorch 逐步指南。

- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** — ⭐7,192  
  支持 100+ 数据集的 LLM 评测平台，覆盖 Llama、Qwen、GLM 等。

- **[galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining)** — ⭐285  
  可靠、轻量的基础模型与世界模型预训练库，面向研究者。

- **[testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io)** — ⭐109  
  LLM 测试时扩展（Test-Time Scaling）综述资源，代表技术前沿。

- **[AarambhDevHub/aarambh-ai](https://github.com/AarambhDevHub/aarambh-ai)** — ⭐24  
  纯 Rust 实现的 Decoder-only LLM，支持 CLIP、DoRA/DPO、MoE、推测解码等。

---

### 🔍 RAG / 知识库（向量数据库、检索增强、知识管理）

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐85,058  
  领先的开源 RAG 引擎，融合 Agent 能力，为 LLM 构建高质量上下文层。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** — ⭐63,302  
  本地优先的 RAG 全栈工具，“拥有自己的智力”理念深入人心。

- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** — ⭐45,226  
  高性能云原生向量数据库，支撑大规模向量 ANN 搜索。

- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** — ⭐33,276  
  高可扩展向量搜索引擎，提供 Cloud 服务。

- **[lancedb/lancedb](https://github.com/lancedb/lancedb)** — ⭐10,895  
  嵌入式多模态检索库，开发者友好，搜索多，管理少。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐60,840  
  通用 AI 代理记忆层，跨会话持久化上下文，今日热榜未直接出现但 stars 极高。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐86,527（今日 +1,851）  
  兼具 RAG 与知识图谱功能，将任意代码文件夹转为结构化知识库。

- **[PaddleOCR/PaddleOCR](https://github.com/PaddleOCR/PaddleOCR)** — ⭐85,497  
  文档 OCR 工具，为 RAG 管道提供结构化数据前置处理。

---

## 趋势信号分析

1. **AI 编码助手生态“Plug-in 化”**：今日热榜前四名中有三项（`graphify`、`skills`、`hallmark`）都是为 Claude Code、Codex、Cursor 等 CLI 编码助手提供技能/配置/工具。开发者不再满足于使用单一助手，而是通过“技能市场”定制化增强，类似 VS Code 插件生态。

2. **AI Agent 安全成为新兴子领域**：`destructive_command_guard` 专为阻止 Agent 执行危险 shell/git 命令而设计，标识出随着 Agent 自主性提升，安全防护需求快速上升。后续可能出现更多 Agent 沙箱、权限控制项目。

3. **金融垂直 Agent 集中爆发**：`Vibe-Trading`（+1256 ⭐）、`ai-hedge-fund`、`daily_stock_analysis` 三个交易类 Agent 同时受到关注，叠加 `OpenBB`（69k ⭐）等金融数据平台，表明 AI + 量化投资是当前社区最看好的落地场景之一。

4. **“记忆层”与 RAG 融合加速**：`mem0`、`memvid`、`cognee`、`headroom` 等项目均突破万星，将 RAG 从静态检索升级为动态、可压缩的持久化记忆，与 Agent 协同工作。`headroom` 宣称可减少 20-95% 的 token 消耗，直指成本痛点。

5. **伴随新模型发布的工具链更新**：`ollama` 已支持 Kimi-K2.6、GLM-5.1 等新模型；`grok2api` 适配 Grok 最新版本；`chenyme/grok2api` 今日新增 186 ⭐。社区对最新大模型的接入和封装需求旺盛。

---

## 社区关注热点

- **`Graphify-Labs/graphify`** — 今日增长冠军（+1,851 ⭐）。将整个代码库转为知识图谱，供 AI 编码助手直接查询，相当于给 Agent 装上“项目全局地图”。建议关注其对代码理解和上下文维护的提升效果。

- **`mattpocock/skills`** — 来自 TypeScript 知名讲师 Matt Pocock 的实战技能包，直接来自其 `.claude` 配置。这类“技能分享”模式可能成为新潮流——开发者公开自己的 AI 助手配置或提示集合。

- **`Dicklesworthstone/destructive_command_guard`** — 首个专门针对 AI Agent 的命令安全防护工具。随着 Agent 被赋予更多系统权限，此类安全层将成为生产部署的必需组件。

- **`HKUDS/Vibe-Trading`** — 个人交易 Agent，今日 +1,256 ⭐。结合实时行情与 LLM 决策，表明普通开发者对“AI 代替炒股”的极高期待。但需注意其实际收益率风险。

- **`mem0ai/mem0`** 与 **`headroomlabs-ai/headroom`** — 这两个记忆/压缩项目分别以 60k+ 和 59k+ 的 stars 稳居 RAG 记忆层头部。它们解决 Agent 长期记忆和 token 成本两大痛点，是构建持久化 Agent 系统的关键依赖。

- **`Nutlope/hallmark`** — 反 AI 味设计技能（+1,015 ⭐），反映社区对“AI 生成内容质量”的精细化要求——不仅要能干活，还要看起来自然。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*