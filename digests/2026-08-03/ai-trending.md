# AI 开源趋势日报 2026-08-03

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-03 03:34 UTC

---

# AI 开源趋势日报（2026-08-03）

> 数据来源：GitHub Trending 与 AI 主题搜索。已过滤与 AI/ML 无关的项目（如 kaneo、invidious、build-your-own-x、Lighthouse 等）。

## 今日速览

- 今日 Trending 中 **AI Agent 相关项目占据半壁江山**：reverse-skill、Agent-Reach、DeepSeek-Reasonix 等围绕“技能路由”“互联网访问”“编码 Agent”的项目集中上榜。
- **DeepSeek 4 生态快速成型**：antirez 推出本地推理引擎 ds4，DeepSeek-Reasonix 提供终端编码 Agent，叠加 AirLLM 单卡推理方案，本地化部署关注度提升。
- **团队级 Agent 记忆与知识图谱**成为 RAG 新焦点：TencentDB-Agent-Memory、Graphify 等将多源信息沉淀为可复用记忆资产。
- 微软 **AI 与生成式 AI 入门课程**分别新增 2629/588 stars，教育类 AI 资源持续走热。

---

## 一、AI 基础工具

- [huggingface/transformers](https://github.com/huggingface/transformers) ⭐163,269  
  模型定义、训练与推理的标准框架，覆盖绝大多数主流模型架构，AI 开发者的事实标准依赖。

- [ollama/ollama](https://github.com/ollama/ollama) ⭐177,628  
  一条命令本地运行大模型，支持 Kimi、DeepSeek、Qwen 等最新模型，是本地 Agent 的基础设施。

- [vllm-project/vllm](https://github.com/vllm-project/vllm) ⭐87,991  
  高吞吐、内存高效的 LLM 推理与服务引擎，大规模部署场景的核心选择。

- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) ⭐159,608  
  面向 AI Agent 的网页搜索/抓取 API，可将任意网页转为 LLM 可用的结构化数据。

- [lyogavin/airllm](https://github.com/lyogavin/airllm) 今日 +819  
  单张 4GB 显存即可推理 70B 模型，极大降低本地大模型硬件门槛。

- [antirez/ds4](https://github.com/antirez/ds4) 今日 +139  
  DeepSeek 4 Flash/PRO 本地推理引擎，支持 Metal/CUDA/ROCm，为 DeepSeek 模型提供轻量部署路径。

- [open-compass/opencompass](https://github.com/open-compass/opencompass) ⭐7,261  
  大模型评测平台，支持 100+ 数据集与主流模型横向对比，是模型选型的重要参考。

---

## 二、AI 智能体/工作流

- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) ⭐143,263  
  代理工程平台，为构建 Agent 和 RAG 应用提供统一抽象与编排能力。

- [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) ⭐185,775  
  老牌通用 Agent 项目，提供可扩展的 AI Agent 开发框架与工具集。

- [browser-use/browser-use](https://github.com/browser-use/browser-use) ⭐107,628  
  让 AI Agent 像人类一样操作系统浏览器，实现网页自动化任务。

- [langgenius/dify](https://github.com/langgenius/dify) ⭐151,124  
  可视化构建 Agentic workflow 与 RAG Pipeline，支持从原型到生产的一站式部署。

- [esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) 今日 +333  
  专为 DeepSeek 模型设计的终端 AI 编码 Agent，围绕 prefix-cache 稳定性优化，适合长时运行。

- [different-ai/openwork](https://github.com/different-ai/openwork) 今日 +280  
  开源版 “Claude Cowork”，基于 opencode 提供即时协作式 AI 结对编程体验。

- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) 今日 +659  
  为 Agent 提供“互联网之眼”的 CLI，可读取 Twitter、Reddit、B站、小红书等平台数据，且零 API 费用。

- [zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill) 今日 +1,141  
  面向逆向/渗透测试的 AI 技能路由包，可将工具链按需自举，兼容 Claude Code、Cursor 等主流 AI 编程客户端。

---

## 三、AI 应用

- [open-webui/open-webui](https://github.com/open-webui/open-webui) ⭐147,657  
  可自托管的 AI 对话界面，支持 Ollama/OpenAI 等后端，是本地私有化 AI 应用的最常用入口。

- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) ⭐64,252  
  本地优先的 All-in-One Agent 应用，支持文档库、模型管理，强调“拥有自己的智能”。

- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) ⭐101,232  
  利用 AI 与自动化工作流一键生成高清短视频，内容创作场景落地极强。

- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) ⭐49,306  
  集成 300+ 助手与自主 Agent 的 AI 生产力工作站，统一接入前沿大模型。

- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) ⭐42,609  
  将文档/主题自动生成原生 PowerPoint，支持动画、图表与录音旁白，直接提升办公效率。

- [santifer/career-ops](https://github.com/santifer/career-ops) ⭐62,568  
  开源 AI 求职助手，可自动扫描岗位、评分并针对性优化简历，全程在本地 AI CLI 中运行。

- [f/prompts.chat](https://github.com/f/prompts.chat) ⭐166,651  
  社区驱动的 Prompt 分享与发现平台，可自托管，是 Agent 开发者的“弹药库”。

---

## 四、大模型/训练

- [microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners) 今日 +2,629  
  24 课时的 AI 入门课程，覆盖机器学习、神经网络与生成式 AI，今日热榜第 1。

- [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) 今日 +588  
  21 课时的生成式 AI 实战课，侧重 Prompt 工程与生成应用构建。

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) ⭐100,406  
  从零手写 ChatGPT 类 LLM 的 PyTorch 教程，深入理解 Transformer 训练全流程。

- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) ⭐4,432  
  面向系统工程师的 LLM 推理学习项目，在 Apple Silicon 上构建极简 vLLM + Qwen。

- [genieincodebottle/generative-ai](https://github.com/genieincodebottle/generative-ai) ⭐2,582  
  Generative AI 一站式学习路径，包含路线图、项目案例与面试准备。

---

## 五、RAG/知识库

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) ⭐101,171  
  将代码库、文档、SQL 模式等自动转为可查询知识图谱，无需向量库即可实现可解释 RAG。

- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) ⭐86,655  
  开源 RAG 引擎，结合 Agent 能力，提供面向 LLM 的生产级上下文层。

- [mem0ai/mem0](https://github.com/mem0ai/mem0) ⭐62,342  
  AI Agent 的通用记忆层，支持跨会话长期记忆，是 Agent 个性化的重要组件。

- [run-llama/llama_index](https://github.com/run-llama/llama_index) ⭐51,324  
  主流文档 Agent 与 OCR 平台，简化连接私有数据与 LLM 的流程。

- [milvus-io/milvus](https://github.com/milvus-io/milvus) ⭐45,470  
  云原生向量数据库，专为高并发向量搜索设计，是 RAG 架构的核心存储。

- [VectifyAI/PageIndex](https://github.com/VectifyAI/PageIndex) ⭐34,974  
  面向“无向量、基于推理”的 RAG 文档索引，探索 RAG 新范式。

- [topoteretes/cognee](https://github.com/topoteretes/cognee) ⭐29,710  
  开源 AI 记忆平台，用知识图谱引擎为 Agent 提供持久与可演化的长期记忆。

- [TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory) 今日 +602  
  团队级 Agent 记忆中枢，将对话、文档、代码沉淀为 Chat Memory、Skill、LLM-Wiki 与 Code-Graph 四类资产。

---

## 趋势信号分析

今日热榜中，**Agent 技能封装类项目集中爆发**：reverse-skill、Agent-Reach、last30days-skill、k-skill 的同步上榜，说明社区正从“开发 Agent 框架”转向“沉淀可复用技能包”，AI 编码客户端的生态位开始被细分工具占据。**DeepSeek 相关工具**在底层推理（ds4）与上层应用（DeepSeek-Reasonix）同步出现，结合 AirLLM 的低显存方案，本地/私有化部署成为清晰趋势。RAG 方向出现两个新信号：一是“**无向量/知识图谱**”式检索（Graphify、PageIndex）挑战传统向量数据库叙事；二是**团队级 Agent 记忆**（TencentDB-Agent-Memory、cognee）将 RAG 从文档检索升级为组织知识资产。微软两门 AI 课程的高热度则反映新一批开发者正涌入 AI 学习周期。整体上，AI 开源生态正在从通用模型能力转向工程化、场景化和可复用资产化。

---

## 社区关注热点

- **DeepSeek 4 本地推理与编码 Agent**：antirez/ds4 与 DeepSeek-Reasonix 同天登榜，呈现“底层推理+终端交互”的完整本地工具链，值得跟踪其性能与生态兼容性。
- **Agent 技能（Skills）赛道**：多个 Skill 项目同时爆发（reverse-skill +1,141、Agent-Reach +659），Skill 标准化或成为下一阶段 Agent 发展的关键。
- **RAG 新范式探索**：Graphify 和 PageIndex 的“无向量、图谱/推理驱动”路线，可能为大型代码库与文档的知识检索带来更可解释、更低成本的方案。
- **团队级 AI 记忆层**：TencentDB-Agent-Memory 将对话、文档、代码整合为可共享资产，预示企业级 Agent 需要更结构化的组织记忆。
- **微软 AI 课程重登榜首**：AI-For-Beginners 今日新增 2.6k stars，适合作为系统学习起点，也侧面印证 AI 教育需求仍在增长。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*