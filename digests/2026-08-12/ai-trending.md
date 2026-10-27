# AI 开源趋势日报 2026-08-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-12 02:25 UTC

---

# AI 开源趋势日报（2026-08-12）

> 数据源：GitHub Trending + AI 主题搜索（已过滤 nvm、manim、awesome-mac、project-based-learning 等非 AI/ML 项目）

## 一、今日速览

- AI Agent 生态从“单 Agent 对话”加速转向“多 Agent 协同与工程化”：`prime-agent` 以今日 +1,138 登顶 Trending，`agency-agents`、`orca`、`paperclip` 等紧随其后。
- Agent Skills 正在成为新的分发单元：Anthropic 官方 `skills` 仓库与 `addyosmani/agent-skills` 同日登榜，`OpenMontage` 更将 700+ 技能文件直接打包进视频生产系统。
- 图原生/代码级 RAG 受关注：`semantica`（+893）与 `code-graph-rag`（+341）分别从上下文基础设施和 monorepo 两个方向重构 RAG。
- 垂直行业 AI 应用密集出现：教育（`DeepTutor` +812）、金融（`daily_stock_analysis`）、法律（`harvey-labs`）、视频（`OpenMontage`）均有新代表。
- 基础层仍由 `transformers`、`pytorch`、`tensorflow`、`ollama` 等明星项目把持，但社区热度正明显向应用层与 Agent 工程化倾斜。

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐196,955 · 经典机器学习框架，AI 基础底座。
- [ollama/ollama](https://github.com/ollama/ollama) — ⭐178,302 · 本地运行最新开源大模型的轻量入口。
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐163,830（今日 +80） · 模型定义、训练与推理的标准框架。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐102,326 · 动态神经网络与 GPU 训练基础框架。
- [anthropics/skills](https://github.com/anthropics/skills) — 今日 +485 · Agent Skills 官方公开仓库，代表“技能即分发单元”的新趋势。
- [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) — 今日 +578 · 为 AI 编码 Agent 提供生产级工程技能。
- [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) — ⭐36,698 · Agent 与 Generative UI 前端栈，支持 React/Angular/Mobile。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐65,983 · 在进入 LLM 前压缩工具输出与 RAG 片段，为编码 Agent 节省 token。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) — 今日 +1,138 · 自改进 RLM 编码 Agent，面向长时自治任务，今日 Trending 第一。
- [msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) — 今日 +958 · 角色化多 Agent 协作系统，覆盖前端、社区运营、内容创意等“虚拟团队”角色。
- [stablyai/orca](https://github.com/stablyai/orca) — 今日 +875 · 并行 Agent 开发环境（ADE），可用自己的订阅运行任意编码 Agent。
- [paperclipai/paperclip](https://github.com/paperclipai/paperclip) — 今日 +748 · 开源的工作场景 Agent 管理应用，面向“管理一群 Agent”的企业需求。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐239,499 · 面向 Claude Code、Codex 等编码 Agent 的 Harness 性能优化系统。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐229,071 · “可随用户一起成长”的 Agent 框架。
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐144,014 · Agent 工程化平台，仍然是 Agent 开发的核心栈之一。
- [langgenius/dify](https://github.com/langgenius/dify) — ⭐152,134 · 可视化构建 Agentic Workflow 与 RAG Pipeline 的一体化平台。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- [f/prompts.chat](https://github.com/f/prompts.chat) — ⭐167,010 · 社区提示词分享与发现平台，LLM 应用生态的重要入口。
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐148,514 · 用户友好的 AI 对话界面，支持 Ollama、OpenAI API。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐102,651 · 输入关键词即可用 AI 工作流一键生成短视频。
- [santifer/career-ops](https://github.com/santifer/career-ops) — ⭐63,534 · 开源 AI 求职助手：扫描职位、评分简历并跟踪申请。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐62,182（今日 +243） · LLM 驱动的多市场股票智能分析系统。
- [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) — ⭐50,307 · AI 生产力工作室，集成 300+ 助手与多模型接入。
- [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) — 今日 +812 · 终身个性化 AI 教育助手，今日教育赛道最热。
- [calesthio/OpenMontage](https://github.com/calesthio/OpenMontage) — 今日 +458 · 开源 Agentic 视频生产系统，内置 12 条生产管线与 700+ 技能文件。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐102,440 · 从零手写 ChatGPT 类 LLM 的经典教程仓库。
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) — ⭐54,569 · 2 小时从零训练 64M 小参数 LLM，适合入门与教学。
- [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) — ⭐4,467 · 面向系统工程师，在 Apple Silicon 上构建微型 vLLM + Qwen。
- [thinkwee/AgentsMeetRL](https://github.com/thinkwee/AgentsMeetRL) — ⭐1,774 · Agentic RL 方向资源列表，反映“强化学习驱动 Agent”的新兴趣。
- [llm-jp/awesome-japanese-llm](https://github.com/llm-jp/awesome-japanese-llm) — ⭐1,424 · 日语 LLM 生态全景梳理。
- [SeekingDream/Static-to-Dynamic-LLMEval](https://github.com/SeekingDream/Static-to-Dynamic-LLMEval) — ⭐500 · 针对 LLM 数据污染的静态/动态评测研究仓库。
- [AarambhDevHub/aarambh-studio](https://github.com/AarambhDevHub/aarambh-studio) — ⭐75 · 纯 Rust + Candle 从零构建 decoder-only LLM，含 MoE 与量化训练。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) — ⭐165,922 · 面向 LLM 的网页搜索、抓取与交互 Context API。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐105,347 · 将代码库、文档、SQL Schema 转为可查询知识图谱，不使用向量库。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐87,300 · 领先的开源 RAG 引擎，融合 Agent 能力构建 LLM 上下文层。
- [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) — ⭐64,622 · 本地优先的 RAG/Agent 全家桶应用。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐63,064 · AI Agent 的通用长期记忆层。
- [run-llama/llama_index](https://github.com/run-llama/llama_index) — ⭐51,567 · 文档 Agent 与 RAG 框架的领导者。
- [milvus-io/milvus](https://github.com/milvus-io/milvus) — ⭐45,605 · 高性能云原生向量数据库。
- [semantica-agi/semantica](https://github.com/semantica-agi/semantica) — 今日 +893 · 图原生上下文基础设施，为可问责 AI 系统提供知识图谱底座。
- [vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag) — 今日 +341 · 面向 monorepo 的“终极 RAG”，用知识与图谱理解多语言代码库。

## 三、趋势信号分析

今日最强烈的信号是 **Agent Skills 成为独立分发层**：Anthropic 官方 `skills` 仓库与 `addyosmani/agent-skills` 同登 Trending，`OpenMontage` 直接打包 700+ Agent skill 文件，说明社区正从“调模型”转向“复用工程技能”。其次，**多 Agent 编排与管理开始产品化**：`orca`、`paperclip`、`agency-agents` 同日高增长，意味着 Agent 数量爆发后，开发环境和企业级管理工具成为刚需。第三，**RAG 向图原生与 token 经济演进**：`semantica` 用图原生基础设施重构上下文，`code-graph-rag` 面向 monorepo 建知识图谱，`headroom` 则在送入 LLM 前压缩工具输出。第四，编码 Agent 出现“自我进化”方向：`prime-agent` 以 RLM 自改进登顶 Trending，`AgentsMeetRL` 也在集中整理 Agentic RL 资源，预示下一阶段可能从 prompt/skill 走向强化学习驱动。最后，教育、金融、法律、视频等垂直场景的开源 Agent 应用密集出现，AI 落地正进入“行业化”阶段。

## 四、社区关注热点

- **Agent Skills 生态**：[anthropics/skills](https://github.com/anthropics/skills)、[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)、[OpenMontage](https://github.com/calesthio/OpenMontage) —— 官方与社区共同定义可复用技能，正在改变 Agent 应用的分发方式。
- **多 Agent 管理与编排**：[stablyai/orca](https://github.com/stablyai/orca)、[paperclipai/paperclip](https://github.com/paperclipai/paperclip)、[msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents) —— 从“跑一个 Agent”到“管理一群 Agent”，企业级需求开始出现。
- **自改进编码 Agent**：[PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent)、[affaan-m/ECC](https://github.com/affaan-m/ECC)、[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix) —— RLM 与 Harness 优化让编码 Agent 具备长时自我进化能力。
- **图原生 RAG**：[semantica-agi/semantica](https://github.com/semantica-agi/semantica)、[vitali87/code-graph-rag](https://github.com/vitali87/code-graph-rag)、[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) —— 相比纯向量检索，知识图谱带来更强的可解释性与代码理解能力。
- **垂直行业 Agent 应用**：[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)、[harveyai/harvey-labs](https://github.com/harveyai/harvey-labs)、[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) —— 教育、法律、金融率先跑出开源 Agent 样板。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*