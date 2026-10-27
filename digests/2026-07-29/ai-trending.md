# AI 开源趋势日报 2026-07-29

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-29 03:17 UTC

---

# AI 开源趋势日报 2026-07-29

## 一、今日速览

- **视频感知能力爆发**：`bradautomates/claude-video` 和 `huggingface/speech-to-speech` 分别让 AI 看懂视频和实现实时语音对话，多模态 Agent 门槛骤降，单日新增 stars 分别达 988 和 227。
- **Agent 治理与安全成为新热点**：微软的 `agent-governance-toolkit` 首次登榜，聚焦 OWASP Agentic Top 10 风险，标志着企业级 Agent 部署进入“合规阶段”。
- **轻量级“Agent 护具”持续升温**：`affaan-m/ECC` 单日新增 636 stars，专注于 Agent 性能优化、记忆与安全，与 `learn-claude-code`、`hermes-agent` 等形成“Agent 开发工具链”生态。
- **RAG 基础设施持续夯实**：向量数据库（Qdrant、Milvus、LanceDB）与记忆层（mem0、cognee）项目活跃，RAG 从“技术概念”走向“生产标配”。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|-------------------|------------|
| [andrewyng/aisuite](https://github.com/andrewyng/aisuite) | 0 (+62) | 吴恩达出品的统一多生成式AI提供商接口，降低切换成本，适合快速原型。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,080 | 模型定义与微调的事实标准框架，支持文本、图像、音频等多模态。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142,829 | Agent 工程平台，提供链式调用、工具集成、记忆管道的核心框架。 |
| [ollama/ollama](https://github.com/ollama/ollama) | 177,145 | 本地推理神器，一键运行 Kimi、DeepSeek、Qwen 等数十种模型，开发者首选。 |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | 8,084 | Rust 生态的 LLM 应用框架，强调模块化与性能，适合构建生产级推理服务。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 147,134 | 自托管 AI 对话界面，支持 Ollama/OpenAI API，成为本地 LLM 的“默认前端”。 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | 157,582 | 面向 AI 的网页抓取与搜索 API，为 Agent 提供“互联网访问”能力。 |

---

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体、治理）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|-------------------|------------|
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | 234,921 (+636) | Agent 性能优化系统，整合技能、记忆、安全，专为 Claude Code/Codex 等 CLI 设计。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,740 | 最早的自主 Agent 项目，至今仍是多步骤任务自动化的象征。 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 221,967 | “与你一起成长的 Agent”，强调长期记忆与自我进化，生态活跃。 |
| [microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) | 0 (+46) | AI Agent 治理工具包，覆盖策略执行、零信任身份、沙箱与可靠性工程，面向企业合规。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 107,146 | 让 AI Agent 像人一样操控浏览器，自动化网页任务，应用场景极广。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,349 | 超轻量、可自托管的个人 AI Agent 框架，支持 WebUI、多工具、MCP 协议。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,344 | 前端 Agent 栈，支持 React/Angular/移动端，让 UI 直接与 LLM 交互。 |

---

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|-------------------|------------|
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | 0 (+988) | 给 Claude 装上“眼睛”——下载、抽帧、转录，让 AI 看懂任何视频。 |
| [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) | 0 (+227) | 基于开源模型构建本地语音 Agent，实现端到端实时语音对话。 |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 0 (+797) | 自托管虚拟伴侣，支持实时语音、Minecraft/Factorio 游戏操控，向 Neuro-sama 看齐。 |
| [virgiliojr94/book-to-skill](https://github.com/virgiliojr94/book-to-skill) | 0 (+423) | 将技术书籍 PDF 转为 Claude Code skill，让 Agent 瞬间掌握专业知识。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 49,100 | AI 生产力工作室，集成300+助手、智能对话与自主 Agent，统一前沿 LLM 入口。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 99,852 | 一键生成短视频，结合 LLM 与自动化工作流，内容创作利器。 |
| [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) | 28,375 | 个人交易 Agent，基于 LLM 分析市场情绪与数据，辅助投资决策。 |

---

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|-------------------|------------|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 53,974 | 2小时从零训练64M参数的小模型，为个人学习和实验提供极简路径。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 100,067 | 手把手从零实现 ChatGPT 级 LLM，PyTorch 教程经典之作。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,421 | 面向 Apple Silicon 的 LLM 推理服务教学项目，从零构建 tiny vLLM。 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,242 | 开源评测平台，支持100+数据集对 Llama、GPT、Qwen 等模型进行全面评估。 |
| [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) | 11,057 | 仅100行代码的 LLM 框架，让 Agent 构建 Agent，极简设计理念。 |

---

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|-------------------|------------|
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 86,282 | 领先的开源 RAG 引擎，融合 Agent 能力，为 LLM 提供高质量上下文层。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 61,964 | AI Agent 的通用记忆层，支持跨会话持久化，是“长期记忆”的基础设施。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,404 | 云原生高性能向量数据库，支撑大规模相似性搜索，RAG 系统的核心组件。 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,632 | 高性能向量搜索引擎，支持过滤与排名，适合生产级语义搜索。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 97,851 | 将代码库、文档、SQL 转为可查询的知识图谱，无需向量数据库，为 Claude 提供结构化记忆。 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | 88,886 | 跨会话上下文注入工具，自动压缩 Agent 行为并回流相关记忆，支持多种 Agent CLI。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 62,977 | 令牌压缩工具，对编码 Agent 可减20% token，对JSON可减60-95%，显著降低成本。 |

---

## 三、趋势信号分析

今日热榜透射出三个明显趋势：

1. **Agent 的“感官”突围**：`bradautomates/claude-video`（+988）和 `huggingface/speech-to-speech`（+227）分别补全了视频理解和实时语音两大模态，使得 Agent 从纯文本走向“多媒体原生”。这与近期多模态大模型（如 GPT-4o、Gemini 2.0）的普及一脉相承，开源社区正快速构建配套工具。

2. **Agent 治理与安全正式进入开发者视野**：微软的 `agent-governance-toolkit` 首次登榜，直接对应 OWASP Agentic Top 10 安全风险。此前 Agent 多为“野蛮生长”，如今随着企业级部署需求激增，策略执行、零信任身份、沙箱隔离成为刚需。该方向很可能在后续一个月内涌现更多竞品。

3. **“轻量化 Agent 护具”形成细分赛道**：以 `affaan-m/ECC`（+636）为代表的项目专注于 Agent 性能优化、记忆压缩、安全管控，与 `learn-claude-code`、`hermes-agent` 等形成互补。它们不追求 Agent 本身的功能，而是为 Claude Code、Codex 等 CLI 工具提供“外挂技能”，社区认可度极高，说明 Agent 开发已从“能用”进入“好用、安全、高效”阶段。

---

## 四、社区关注热点

- **`affaan-m/ECC`** — 单日+636 stars，总星数超23万，是当前 Agent 开发工具链中最火的项目。建议研究其“技能+记忆+安全”的架构设计，以及如何将其集成到自己的 Agent 流程中。
- **视频理解 Agent 工具链** — `bradautomates/claude-video` 展示了如何低成本让 AI 看懂视频，配合 `huggingface/speech-to-speech`，可以构建全双工多模态 Agent。值得关注类似 `Frames`、`Video-LLaVA` 等开源模型的落地。
- **Agent 治理与合规** — 微软的 `agent-governance-toolkit` 虽然仅46新增 stars，但意义重大。建议企业开发者优先阅读其 OWASP Agentic Top 10 实现，这将成为行业标准。
- **RAG 记忆层竞争加剧** — `mem0`、`cognee`、`claude-mem` 等项目均聚焦“持久记忆”，且 `headroom` 提出了 token 压缩方案。未来 Agent 的记忆管理将不再依赖简单嵌入，而是融合知识图谱、压缩、查询优化。
- **从零训练小模型再次升温** — `minimind` 和 `tiny-llm` 的低成本训练/推理方案吸引大量个人开发者，预示“模型民主化”进入实操阶段，适合教育和小众场景。

> **备注**：本报告基于 2026-07-29 的 GitHub Trending 榜单（13个仓库）和 AI 主题搜索结果（79个仓库，已去重），筛选出与 AI/ML 明确相关的项目共计约60余个。非 AI 项目（如 GIS、CI/CD、文件管理器等）已按原则排除。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*