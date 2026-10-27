# AI 开源趋势日报 2026-08-13

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-13 02:27 UTC

---

# AI 开源趋势日报（2026-08-13）

> 数据来源：GitHub Trending + AI 主题搜索。已过滤 LocalSend、SpiderFoot、MediaCrawler、everyone-can-use-english 等非 AI 项目。部分 Trending 新仓库未提供总 star 数，仅标注今日新增。

## 一、今日速览

今日 AI 开源热榜被“多智能体管理与编排”主导：orca、paperclip、agency-agents 等集中出现，Agent 正从“单点技能”走向“团队化/平台化”。同时，上下文与记忆基础设施升温，semantica、RAGFlow、claude-mem、mem0 等项目共同指向 RAG 向“AI 长期记忆层”演进。模型层则呈现垂直化与轻量化分化：Kronos 聚焦金融、LTX-2 聚焦音视频生成、needle 把基础模型压到 14MB 端侧可用。此外，Rust/JVM 技术栈开始进入 AI Agent 基础设施领域，值得开发者提前关注。

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) ⭐196,982 — 经典机器学习框架，生态成熟，持续更新。
- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐164,021 — 模型定义/训练/推理的核心工具库，覆盖文本、视觉、语音、多模态。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102,351 — 动态神经网络框架，AI 研究与生产的事实标准之一。
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) ⭐60,568 — 提供 YOLO 系列检测、分割、分类的训练与推理一站式工具。
- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) ⭐8,252 — 用 Rust 构建模块化 LLM 应用，Rust 在 AI 基础设施中快速崛起。
- [NVIDIA-NeMo/Switchyard](https://github.com/NVIDIA-NeMo/Switchyard) 今日 +421 — NVIDIA NeMo 生态的 Rust 新仓库，应是大模型/Agent 相关基础组件，值得关注。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐144,105 — Agent 工程平台，集 RAG、工具调用与多智能体编排于一体。
- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐186,565 — 老牌通用 Agent 平台，持续探索 AI 自主完成任务。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐108,979 — 让 Agent 直接操作浏览器，是 Web Agent 方向的重要基础设施。
- [stablyai/orca](https://github.com/stablyai/orca) 今日 +1235 — 面向“并行 Agent 舰队”的开发环境，可复用自有订阅运行多种编码 Agent。
- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) 今日 +571 — 开源“Agent 管理后台”，解决团队中多个 Agent 的治理与协作问题。
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) 今日 +1873 — 多智能体“代理机构”式集合，每个 Agent 都有独立角色、流程与交付物。
- [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) 今日 +2855 — 为 Claude Code 准备的 29 种图表设计模板，今日 Trending 最高新增。
- [embabel/embabel-agent](https://github.com/embabel/embabel-agent) 今日 +40 — JVM 上的 Agent 框架，让 Kotlin/Java 开发者也能原生构建 AI Agent。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- [ollama/ollama](https://github.com/ollama/ollama) ⭐178,377 — 本地运行大模型的最流行工具，几乎成为个人部署 LLM 的入口。
- [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐148,620 — 自托管 AI 对话界面，支持 Ollama、OpenAI API 等，社区口碑极佳。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐102,825 — 输入主题即可自动生成高清短视频，是 AI 内容生产工具代表。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐50,358 — 聚合 300+ 助手与主流大模型的 AI 生产力客户端。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐45,703 · 今日 +476 — 将文档/主题自动转为原生 PPT，支持动画、图表与语音旁白。
- [macro-inc/macro](https://github.com/macro-inc/macro) 今日 +227 — 团队协作工作台，集成邮件、聊天、文档、CRM 与 Agent，并用共享 AI 记忆串联。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐102,535 — 从零手写 ChatGPT 类 LLM 的教程与代码，是理解大模型训练的最佳起点之一。
- [cactus-compute/needle](https://github.com/cactus-compute/needle) 今日 +315 — 仅 14MB 的端侧基础模型，面向手机、手表、智能家居与机器人。
- [Lightricks/LTX-2](https://github.com/Lightricks/LTX-2) 今日 +65 — LTX-2 音视频生成模型的官方推理与 LoRA 训练工具包。
- [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) 今日 +266 — 面向金融市场的语言基础模型，把大模型能力带入金融分析场景。
- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,298 — 支持 100+ 数据集与主流模型的 LLM 评测平台。
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) ⭐4,480 — 面向系统工程师的微型 vLLM/Qwen 推理实现，适合学习 LLM 推理栈。
- [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) ⭐75 — 纯 Rust + Candle 从零实现的 decoder-only LLM，覆盖 MoE、稀疏注意力与量化训练。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- [langgenius/dify](https://github.com/langgenius/dify) ⭐152,264 — 可编排 Agentic 工作流与 RAG 管线的开源平台，企业级 AI 应用常用。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐105,709 — 将代码、文档、SQL Schema 等转成可查询知识图谱，无需向量库即可支持 RAG。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) ⭐90,559 — Agent 跨会话记忆工具，自动压缩上下文并注入后续会话。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐87,585 · 今日 +139 — 开源 RAG 引擎，融合 Agent 能力，为 LLM 提供高质量上下文层。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐63,143 — AI Agent 通用记忆层，为 Agent 带来跨会话持久记忆。
- [run-llama/llama_index](https://github.com/run-llama/llama_index) ⭐51,600 — 文档 Agent 与 OCR 平台，也是 RAG 生态最常用的数据连接层。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,616 — 云原生向量数据库，支撑大规模 AI 检索与 RAG 场景。
- [semantica-agi/semantica](https://github.com/semantica-agi/semantica) 今日 +845 — 图原生上下文基础设施，面向“可问责 AI 系统”，是上下文/记忆层的新探索。

## 三、趋势信号分析

今日热榜释放明确信号：多智能体协作与 Agent 管理正取代单点聊天机器人，成为最集中的创新方向。orca、agency-agents、paperclip 合计新增超 3600 stars，都围绕“并行 Agent 舰队”“Agent 工作台”展开；diagram-design 以 +2855 登顶，显示 Claude Code 生态的周边技能/资源也在快速积累。

第二信号是上下文基础设施升温：semantica 主打图原生上下文与可问责 AI，RAGFlow 稳定增长，claude-mem、mem0 等跨会话记忆项目在主题搜索中拥有高 stars——RAG 正从“检索知识库”升级为“AI 长期记忆层”。第三，模型层分化明显：Kronos 代表金融垂直基础模型，LTX-2 代表音视频生成，needle 将基础模型压缩到 14MB 适配端侧设备。此外，Rust/JVM 的 AI 组件（Switchyard、embabel-agent、rig）频繁出现，预示 AI 基础设施正加速向非 Python 生态渗透。整体来看，今日热度与“AI 数字员工/智能体工作负载”的行业叙事高度一致。

## 四、社区关注热点

- **Agent 管理与编排**：orca、paperclip、agency-agents 都指向同一问题——当 Agent 数量变多，如何并行、协作与治理？这是下一阶段 Agent 平台化的核心。
- **上下文与长期记忆层**：semantica、claude-mem、mem0、RAGFlow 共同说明 RAG 已从单纯检索升级为跨会话记忆与上下文工程。
- **Claude Code 生态资产**：diagram-design 以 +2855 成为今日最高新增，围绕 Claude Code 的提示词、技能、设计资产正在形成独立生态。
- **端侧与垂直模型**：needle（14MB 基础模型）、Kronos（金融）、LTX-2（音视频）说明模型竞赛正在向边缘设备与行业场景分化。
- **非 Python 技术栈**：Switchyard（Rust）、rig（Rust）、embabel-agent（Kotlin/JVM）显示 AI 基础设施正在覆盖传统后端工程师，值得提前布局。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*