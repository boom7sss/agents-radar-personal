# AI 开源趋势日报 2026-07-31

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-31 03:32 UTC

---

# AI 开源趋势日报（2026-07-31）

**筛选说明**：Trending 14 个仓库中，已排除 Baileys（WhatsApp API）、PowerToys、Ansible、Jenkins、aspnetcore、pascalorg/editor、tuicr、awesome-systematic-trading 等与 AI/ML 无关的项目。以下为筛选后的 AI 相关热门项目。

---

## 1. 今日速览

今日 AI 开源社区的主线是「Agent 工程化」：openwork（+915）和 ECC（+804）分别从协作界面与运行时性能两个方向引爆热榜，说明开发者不再满足于调用模型，而是追求可落地的 Agent 基础设施。语音交互成为新热点，Hugging Face speech-to-speech（+628）展示本地语音 Agent 的可能性。同时，RAG 与记忆层持续深化，Graphify、claude-mem、mem0 等将知识图谱和跨会话记忆变成 Agent 标配。教育类内容（AI-For-Beginners）也保持活跃，社区仍在快速吸纳新开发者。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐196,617  
  经典机器学习框架，仍是工业级训练与部署底座。

- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐102,080  
  动态图深度学习框架，AI 研究与生产的事实标准之一。

- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐163,187  
  统一模型定义、训练与推理生态，覆盖文本/视觉/音频/多模态。

- [ollama/ollama](https://github.com/ollama/ollama) — ⭐177,359  
  本地大模型运行器，私有化部署与本地 Agent 的关键基础设施。

- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) — ⭐60,062  
  YOLO 系列目标检测、分割、姿态估计工具箱，CV 应用开发首选。

- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) — ⭐158,406  
  面向 AI Agent 的网页搜索、抓取与交互 API，数据入口型工具。

- [OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB) — ⭐71,203  
  面向分析师、量化研究员和 AI Agent 的开放金融数据平台。

- [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) — 今日 +80 ⭐  
  为 coding agent 提供 Chrome DevTools 能力，MCP 生态重要组件。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐143,052  
  Agent 工程平台，工具调用、RAG、工作流编排的核心中间层。

- [langgenius/dify](https://github.com/langgenius/dify) — ⭐150,850  
  可视化构建 Agentic 工作流与 RAG 管线，支持云部署与私有化。

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) — ⭐185,753  
  通用自主 Agent 的代表性开源项目，推动 Agent 平民化。

- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐107,352  
  让 AI Agent 直接操作浏览器完成网页自动化任务。

- [different-ai/openwork](https://github.com/different-ai/openwork) — 今日 +915 ⭐  
  Claude Cowork 的开源替代品，基于 opencode 构建，登顶今日热榜。

- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐236,288（今日 +804）  
  Agent 运行时性能优化系统，为 Claude Code、Codex、OpenCode 等提供技能、记忆与安全能力。

- [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) — 今日 +378 ⭐  
  AI Agent Skill，跨 Reddit、X、YouTube、HN 等平台研究并生成 grounded 摘要。

- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐222,954  
  “与你一起成长”的 Agent，强调长期记忆与自我进化能力。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- [huggingface/speech-to-speech](https://github.com/huggingface/speech-to-speech) — 今日 +628 ⭐  
  用开源模型构建本地语音 Agent，实现端到端语音对话，今日热榜亮点。

- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐147,399  
  自托管 AI 聊天界面，支持 Ollama、OpenAI API 等多种后端。

- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ⭐64,143  
  本地优先的 All-in-One Agent 体验，强调“拥有自己的智能”。

- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐100,682  
  利用 AI 大模型与自动化工作流，按主题一键生成高清短视频。

- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) — ⭐42,060  
  将文档或主题转化为原生 PowerPoint，支持图表、动画与自定义模板。

- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐49,175  
  多模型 AI 生产力桌面应用，集成智能聊天与 300+ Assistant。

- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐59,627  
  LLM 驱动的多市场股票智能分析系统，含实时新闻、决策看板与自动推送。

- [HKUDS/Vibe-Trading](https://github.com/HKUDS/Vibe-Trading) — ⭐28,804  
  个人交易 Agent，将 LLM 与量化交易场景深度结合。

### 🧠 大模型/训练（模型权重、训练框架、微调工具、学习资源）

- [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) — 今日 +155 ⭐  
  12 周、24 课时的 AI 入门课程，适合快速上手。

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐100,193  
  从零实现 ChatGPT 类 LLM 的实战教程，覆盖预训练、微调等环节。

- [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) — ⭐88,784  
  经典机器学习课程，12 周 26 课，面向广大学习者。

- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,427  
  面向系统工程师的 LLM 推理服务课程，从零构建 tiny vLLM + Qwen。

- [open-compass/opencompass](https://github.com/open-compass/opencompass) — ⭐7,248  
  LLM 评测平台，支持 100+ 数据集与主流模型评估。

- [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) — ⭐8,107  
  Rust 生态的模块化 LLM 应用开发框架，适合追求性能的 Agent 项目。

- [The-Pocket/PocketFlow](https://github.com/The-Pocket/PocketFlow) — ⭐11,072  
  100 行 LLM 框架，强调“Let Agents build Agents”，极简范式。

- [chrisliu298/awesome-llm-unlearning](https://github.com/chrisliu298/awesome-llm-unlearning) — ⭐615  
  LLM 机器遗忘方向资源清单，安全对齐领域值得关注。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐86,462  
  领先的开源 RAG 引擎，深度结合 Agent 能力与上下文工程。

- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ⭐51,249  
  文档 Agent 与 OCR 平台，RAG 框架的标杆项目。

- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐45,436  
  高性能云原生向量数据库，支撑大规模向量 ANN 检索。

- [qdrant/qdrant](https://github.com/qdrant/qdrant) — ⭐33,686  
  高性能向量搜索引擎，专为下一代 AI 应用设计。

- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐62,166  
  通用 AI Agent 记忆层，为助手增加跨会话长期记忆。

- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐89,097  
  捕获 Agent 会话并压缩、注入未来上下文，解决记忆持久化问题。

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐99,209  
  将代码库、文档、SQL Schema 转为可查询知识图谱，Agent 可直接使用。

- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) — ⭐34,926  
  “无向量、基于推理”的新型 RAG 文档索引方案，值得关注。

---

## 3. 趋势信号分析

今日热榜最突出的信号是 **Agent 基础设施** 正在取代纯模型成为社区焦点。openwork 以 +915 stars 登顶，直接对标 Claude Cowork；ECC 以 +804 stars 验证了 agent harness（技能、记忆、安全、性能优化）这一细分赛道；speech-to-speech 的 +628 stars 则表明本地语音 Agent 成为新热点。第二个信号是 **Agent Skill / MCP 生态** 继续碎片化繁荣：chrome-devtools-mcp、last30days-skill 将浏览器调试、跨平台检索变成可复用技能。第三个信号是 **RAG 与知识图谱深度融合**：Graphify、claude-mem、mem0 等把持久记忆和结构化知识当作 Agent 的标准配置。此外，AI 教育内容（AI-For-Beginners）保持热度，说明开源社区在加速吸纳新开发者。

---

## 4. 社区关注热点

- **Agent Harness / 运行时优化（ECC、openwork）**  
  随着 Claude Code、Codex 等 coding agent 普及，开发者开始关注 Agent 的性能、记忆、安全控制层，这两日热榜的直接体现。

- **本地/自托管语音 Agent（huggingface/speech-to-speech）**  
  开源模型让语音助手摆脱云端依赖，实时交互延迟与端侧优化将成为下一波看点。

- **Agent 记忆与上下文持久化（claude-mem、mem0、cognee）**  
  跨会话记忆是 Agent 从 demo 走向生产的关键瓶颈，记忆层项目正在快速收获社区关注。

- **MCP 生态扩展（chrome-devtools-mcp、headroom）**  
  MCP 协议正在把浏览器、文件、压缩等基础设施变成 Agent 原生工具，开发者可提前布局 skill 开发。

- **垂直场景 AI 应用爆发（Vibe-Trading、daily_stock_analysis、ppt-master）**  
  Agent 在金融、办公、内容生成等场景快速落地，结合开源数据与本地模型，应用层机会显著。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*