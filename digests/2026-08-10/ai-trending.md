# AI 开源趋势日报 2026-08-10

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-10 02:15 UTC

---

# AI 开源趋势日报（2026-08-10）

> 筛选说明：Trending 中 `witr`、`authentik` 已明确为非 AI 通用工具，直接剔除；主题搜索中 `netdata`、`JuliaLang/julia`、`apache/airflow` 等泛用基础设施/语言未列入 AI 分类。

## 今日速览

今日 Trending 几乎被 AI Agent 生态“霸榜”：`prime-agent`、`agency-agents`、`google/skills`、`addyosmani/agent-skills` 集中上榜，指向“可复用 Agent Skills + 自进化编码代理”的新趋势。知识图谱 + RAG 成为明显细分亮点，`code-graph-rag` 登上热榜。AI 应用加速向垂直场景渗透：LLM 股票分析、法律 Agent 基准、DeepMind 天气预测模型同时获得关注。本地 LLM 基础设施也在快速跟进新模型，`ollama` 已更新支持 Kimi-K2.6、GLM-5.2 等近期发布模型。

## 各维度热门项目

### 🔧 AI 基础工具

- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐163,507 — 当前最主流的 SOTA 模型统一训练/推理框架，覆盖文本、视觉、音频与多模态。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102,303 — 动态神经网络计算框架，是 AI 研究与训练的事实标准之一。
- [ollama/ollama](https://github.com/ollama/ollama) ⭐178,144 — 本地/端侧 LLM 运行器，已快速支持 Kimi-K2.6、GLM-5.2 等新模型。
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) ⭐8,222 — Rust 生态的模块化 LLM 应用构建 SDK，强调可扩展性与性能。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,287 — 支持 100+ 数据集和多系列主流模型的 LLM 评测平台。
- [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) ⭐12,824 — JVM 生态的 LLM 应用库，面向 Spring Boot/Quarkus，支持 MCP、RAG、Agent。
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) ⭐4,457 — 面向系统工程师的“迷你 vLLM + Qwen”学习项目，专注 Apple Silicon 上的 LLM 推理实现。
- [pingdotgg/t3code](https://github.com/pingdotgg/t3code) ⭐ —（今日 +163） — T3 栈 AI 辅助全栈开发工具，今日新登上 Trending。

### 🤖 AI 智能体/工作流

- [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐239,034 — Agent Harness 性能优化系统，覆盖 Skills、记忆、安全等能力，适配 Claude Code、Codex 等。
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐143,818 — 当前最主流的 Agent 工程平台，提供工具调用、MCP、RAG 等完整基建。
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐186,464 — 让 AI Agent 更易用、更易扩展的开源平台，长期是 Agent 生态的风向标。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐108,499 — 让 AI Agent 真正“操作浏览器”的自动化工具，是 Web Agent 的重要基础设施。
- [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) ⭐ —（今日 +2,356） — 自改进 RLM 编码 Agent，面向长时运行和自主编码任务，今日热榜第一。
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) ⭐ —（今日 +858） — 一套“AI 代理机构”式专家智能体集合，从前端开发到 Reddit 运营均有对应 Agent。
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) ⭐ —（今日 +680） — 面向 AI 编码 Agent 的生产级工程技能包，强调可复用工程能力。
- [google/skills](https://github.com/google/skills) ⭐ —（今日 +528） — Google 官方发布的 Agent Skills，覆盖 Google 产品与技术栈。

### 📦 AI 应用

- [Comfy-Org/ComfyUI](https://github.com/Comfy-Org/ComfyUI) ⭐ —（今日 +365） — 目前最强模块化扩散模型 GUI/API/后端，节点式工作流仍是图像生成社区的核心工具。
- [langgenius/dify](https://github.com/langgenius/dify) ⭐151,883 — 一站式 Agentic Workflow + RAG 平台，支持云部署与私有化，企业采用率高。
- [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐148,335 — 用户友好的本地 AI 聊天界面，兼容 Ollama、OpenAI API，是自托管 AI 入口首选。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐102,345 — 根据主题/关键词一键生成高清短视频的 AI 自动化工作流。
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) ⭐64,532 — 本地优先、支持私有化部署的 All-in-One AI 助手与知识库应用。
- [santifer/career-ops](https://github.com/santifer/career-ops) ⭐63,319 — 开源 AI 求职助手：扫描职位、结构化评分、定制简历、跟踪申请，本地运行。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) ⭐61,263（今日 +306） — LLM 驱动的多市场股票智能分析系统，含实时新闻、决策看板与自动推送。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐44,117 — 将文档/主题转为真实原生 PPT，支持形状、图表、过渡动画、配音与自定义模板。

### 🧠 大模型/训练

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐102,072 — 从零实现 ChatGPT-like LLM 的 PyTorch 逐步教程，长期是 LLM 学习必读。
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) ⭐54,500 — 2 小时从零训练 64M 参数小 LLM，极低门槛的模型预训练教学项目。
- [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) ⭐1,424 — 日语 LLM 资源汇总，持续跟踪日本社区模型进展。
- [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) ⭐2,591 — 生成式 AI 综合资源库，包含路线图、项目、面试与编码准备。
- [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) ⭐618 — LLM“机器遗忘”资源仓库，关注隐私、版权与模型修正方向。
- [AIDASLab/Awesome-Diffusion-LLM](https://github.com/AIDASLab/Awesome-Diffusion-LLM) ⭐97 — 大语言扩散模型论文清单，代表新一代生成模型研究方向。
- [google-deepmind/weathernext](https://github.com/google-deepmind/weathernext) ⭐ —（今日 +86） — DeepMind 天气预测模型，体现“AI for Science”持续进入开源视野。

### 🔍 RAG/知识库

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐104,639 — 将代码库、文档、SQL Schema、PDF 转为可查询知识图谱，无需向量库，解析结果可解释。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐90,217 — 跨会话持久上下文工具，用 AI 压缩 Agent 历史并注入未来会话，支持多款 CLI Agent。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐87,134 — 领先开源 RAG 引擎，融合 Agent 能力，为 LLM 提供高质量上下文层。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐62,889 — AI Agent 的通用记忆层，致力于跨会话持久记忆与个性化。
- [run-llama/llama_index](https://github.com/run-llama/llama_index) ⭐51,512 — 文档 Agent 与 OCR 平台，也是 RAG 数据框架的经典选择。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,575 — 云原生高性能向量数据库，专为大规模向量 ANN 搜索设计。
- [qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐33,889 — 高性能、大规模向量数据库与向量搜索引擎，广泛用于生产环境 RAG。
- [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) ⭐ —（今日 +96） — 面向 monorepo 的“知识图谱 RAG”，可查询、理解、编辑多语言代码库。

## 趋势信号分析

从今日热榜看，Agent 生态是绝对主线。`prime-agent` 的 self-improving RLM 形态、`google/skills` 与 `addyosmani/agent-skills` 的同时上榜，说明社区正从“单个 Agent 演示”转向“可复用、可组合、可自进化的 Agent 工程体系”。第二，知识图谱与 RAG 的结合明显升温：`code-graph-rag`、`Graphify` 都主打“不依赖向量库、可解释的知识图谱检索”，与 `PageIndex` 等“vectorless RAG”方向形成呼应。第三，垂直领域 AI 加速落地：`daily_stock_analysis` 将 LLM 引入金融投研，`harvey-labs` 为法律 Agent 提供评估基准，`weathernext` 延续“AI for Science”热度。最后，`ollama` 等基础设施快速适配 Kimi-K2.6、GLM-5.2、gpt-oss 等新模型，显示开源社区对大模型发布的响应速度正在加快。

## 社区关注热点

- **Agent Skills 正在成为新的“技能分发单元”**：`google/skills` 与 `addyosmani/agent-skills` 同日上榜，开发者应关注 Agent 从“提示词”到“可复用技能包”的演进。
- **自进化编码 Agent 值得重点跟踪**：`prime-agent` 今日新增 stars 最高，`DeepSeek-Reasonix` 等终端原生编码 Agent 也在持续活跃，长时自主编码可能是下一阶段竞争点。
- **知识图谱 RAG / Vectorless RAG 正在挑战传统向量检索**：`Graphify`、`code-graph-rag`、`PageIndex` 均强调可解释、确定性解析，值得在私有代码库与复杂业务场景中实测。
- **LLM 训练/推理的“平民化教学”仍然高热度**：`minimind`、`LLMs-from-scratch`、`tiny-llm` 让开发者以极低成本理解大模型原理，是社区长期关注的高信号方向。
- **法律、金融、求职等垂直 Agent 开始拥有开源基准**：`harvey-labs`、`daily_stock_analysis`、`career-ops` 代表 AI 开源生态正从通用能力走向行业落地。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*