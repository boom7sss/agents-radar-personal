# AI 开源趋势日报 2026-08-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-05 03:12 UTC

---

# AI 开源趋势日报（2026-08-05）

**筛选说明**：已从 Trending 中排除 webpack、spdlog、Deno、Angular、TailwindCSS、Cypress、Kaneo 等非 AI/ML 项目；主题搜索中也剔除了 Julia、Airflow 等仅靠 topic 关联但非 AI 核心的泛工具。

> 数据口径：Trending-only 项目标注“今日 +”新增；主题搜索项目标注当前 stars 总量；两者均有则同时标注。

---

## 1. 今日速览

- AI Agent 正在从“模型调用”走向“工程化治理”：技能、记忆、安全、可观测性相关项目同日爆发。
- DeepSeek 生态 Coding Agent 崛起：DeepSeek-Reasonix 今日 +922，主打终端常驻与 prefix-cache 稳定性。
- 低资源推理仍是刚需：AirLLM 今日 +1,711，单张 4GB GPU 运行 70B 模型持续引发关注。
- 多模态 Agent 开始落地垂直场景：实时语音、视频编辑两类 Agent 项目同时进入热榜。
- 企业级 AI Agent 安全成为新细分：Uber 开源的 ADR 与安全技能路由项目 reverse-skill 同日上榜。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐163,339  
  最主流的开源模型框架，覆盖文本、视觉、音频与多模态模型的定义、训练和推理。

- [pytorch/pytorch](https://github.com/pytorch/pytorch) ⭐102,185  
  深度学习训练与研究的核心框架，生态地位依然稳固。

- [ollama/ollama](https://github.com/ollama/ollama) ⭐177,800  
  本地一键运行 Kimi、GLM、DeepSeek、Qwen、Gemma 等开源模型，端侧 LLM 部署首选。

- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐88,202  
  高吞吐、内存高效的 LLM 推理与服务引擎，生产环境部署标配。

- [lyogavin/airllm](https://github.com/lyogavin/airllm) 今日 +1,711  
  单张 4GB GPU 即可运行 70B 模型，面向资源受限场景的轻量化推理方案。

- [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) 今日 +2,540  
  Rust 编写的高性能 PDF 检查/分类/文本提取库，自动判断扫描版与文本版 PDF，是 AI 文档管线的预处理组件。

- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) ⭐60,210  
  YOLO 系列目标检测、分割、分类的工程化框架，计算机视觉领域热门基础设施。

### 🤖 AI 智能体/工作流

- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) ⭐30,884，今日 +922  
  DeepSeek 原生的终端 AI 编程 Agent，围绕 prefix-cache 稳定性设计，适合长期驻留运行。

- [obra/superpowers](https://github.com/obra/superpowers) 今日 +653  
  Agentic Skills 框架与软件开发方法论，帮助编码 Agent 沉淀可复用技能。

- [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) 今日 +2,297  
  面向逆向/渗透/安全的 AI 技能路由包，可按需自举工具链，兼容 Claude Code、Cursor、Cline 等客户端。

- [livekit/agents](https://github.com/livekit/agents) 今日 +432  
  实时语音 AI Agent 构建框架，支持语音对话、音视频交互场景。

- [browser-use/video-use](https://github.com/browser-use/video-use) 今日 +320  
  让 Coding Agent 直接编辑视频，延续 browser-use“让 AI 操作界面”的思路。

- [EveryInc/compound-engineering-plugin](https://github.com/EveryInc/compound-engineering-plugin) 今日 +40  
  Compound Engineering 官方插件，将复合工程方法论带入 Claude Code、Codex、Cursor 等工作流。

- [affaan-m/ECC](https://github.com/affaan-m/ECC) ⭐237,736  
  Agent harness 性能优化系统，包含技能、直觉、记忆、安全与研究优先开发支持。

- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐143,438  
  Agent 工程平台，连接模型、工具、记忆与 RAG，是当前 Agent 开发最常用的框架之一。

### 📦 AI 应用

- [uber/ADR](https://github.com/uber/ADR) 今日 +148  
  企业级 AI Agent 安全平台，提供可观测性、安全基准测试与威胁检测，已在 Uber 内部部署。

- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐49,416  
  AI 生产力工作室，聚合智能聊天、自主 Agent 与 300+ 助手，统一接入前沿 LLM。

- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) ⭐64,346  
  本地优先的 LLM 工作台，强调“Own your intelligence”，支持强大 Agent 体验。

- [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐147,868  
  用户友好的 AI 前端，兼容 Ollama、OpenAI API 等，适合自托管部署。

- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐101,629  
  输入主题或关键词，一键生成高清短视频的 AI 自动化内容生产工具。

- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐43,045  
  将文档或主题转化为原生 PowerPoint，支持动画、图表、数据表格与音频旁白。

- [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) ⭐71,389  
  面向分析师、量化团队与 AI Agent 的开放金融数据平台。

- [googleworkspace/cli](https://github.com/googleworkspace/cli) ⭐30,202  
  Google Workspace 官方 CLI，内置 AI Agent skills，可让 Agent 直接操作 Gmail、Drive、Calendar 等。

### 🧠 大模型/训练

- [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) 今日 +783  
  微软出品的 21 课生成式 AI 入门教程，是学习大模型应用开发的经典起点。

- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,273  
  大模型评测平台，支持 Llama、InternLM、Qwen、GPT-4、Claude 等 100+ 数据集。

- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) ⭐4,441  
  面向系统工程师的 LLM 推理课程：从零构建一个微型 vLLM + Qwen。

- [Picovoice/picollm](https://github.com/Picovoice/picollm) ⭐316  
  设备端 LLM 推理库，通过 X-Bit 量化降低部署门槛。

- [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) ⭐62  
  纯 Rust + Candle 构建的 decoder-only LLM，无 Python/PyTorch 依赖，探索端侧训练与多模态 Agent。

- [thinkwee/AwesomeOPD](https://github.com/thinkwee/AwesomeOPD) ⭐802  
  On-Policy Distillation 方向的论文与资源列表，关注蒸馏技术新进展。

- [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) ⭐617  
  LLM 机器遗忘资源库，涉及模型合规、隐私与安全方向。

### 🔍 RAG/知识库

- [langgenius/dify](https://github.com/langgenius/dify) ⭐151,357  
  可视化构建 Agentic 工作流与 RAG 管道，支持云部署、VPC 与自托管。

- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐86,840  
  开源 RAG 引擎，融合 RAG 与 Agent 能力，为 LLM 提供上下文层。

- [run-llama/llama_index](https://github.com/run-llama/llama_index) ⭐51,381  
  领先的文档 Agent 与 OCR/RAG 平台，适合知识密集型应用。

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐102,577  
  将代码库、文档、SQL Schema、PDF 转化为可查询知识图谱，无需向量库。

- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐62,540  
  AI Agent 通用记忆层，为长期上下文与个性化交互提供支持。

- [qdrant/qdrant](https://github.com/qdrant/qdrant) ⭐33,782  
  高性能向量数据库，面向大规模向量搜索与 AI 应用。

- [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,510  
  云原生向量数据库，支持可扩展的向量 ANN 检索。

- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) 今日 +1,111  
  团队级 Agent Memory Hub，将对话、文档、代码沉淀为 Chat Memory、Skill、LLM-Wiki 与 Code-Graph。

---

## 3. 趋势信号分析

今日热榜释放出明确信号：AI Agent 正在从“单点模型能力”走向“工程化基础设施”。技能（superpowers、compound-engineering-plugin）、记忆（TencentDB-Agent-Memory）、安全（uber/ADR、reverse-skill）三类项目同日上榜，说明开发者不再只关心模型“能不能答”，更关心 Agent 能否在企业级环境中稳定、合规、可复用。

与此同时，DeepSeek-Reasonix 以 +922 星进入 Trending，强化了“DeepSeek 原生模型 + 终端常驻编程助手”的路线；Ollama 持续支持 Kimi、GLM、DeepSeek 等开源权重，显示开源模型生态仍在加速。AirLLM 单卡 4GB 推理 70B 再获 +1,711 星，低资源推理仍是强需求。多模态 Agent 也开始在垂直场景落地：livekit/agents 面向实时语音，browser-use/video-use 面向视频编辑。

总体来看，Agent 的记忆、技能、安全与多模态是今天最值得追踪的四个方向。

---

## 4. 社区关注热点

- **Agent Skills 标准化**：关注 `obra/superpowers`、`EveryInc/compound-engineering-plugin`、`zhaoxuya520/reverse-skill`，技能包正成为 Agent 能力复用的核心单元。
- **Agent 长期记忆与上下文**：关注 `TencentDB-Agent-Memory`、`mem0ai/mem0` 等，跨会话记忆是 Agent 规模化落地的关键瓶颈。
- **企业级 AI 安全与可观测性**：关注 `uber/ADR` 与 `reverse-skill`，Agent 安全评估、红队测试和合规治理开始成为独立赛道。
- **低成本/端侧推理**：关注 `lyogavin/airllm`、`ollama`、`vllm-project/vllm`，从单卡 70B 到本地小模型，推理成本仍是社区最关心的问题之一。
- **多模态 Agent 应用**：关注 `livekit/agents`、`browser-use/video-use`，Agent 正从文本代码走向实时语音与视频创作等更丰富的交互形态。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*