# AI 开源趋势日报 2026-11-25

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-25 19:57 UTC

---

# AI 开源趋势日报（2026-11-25）

## 一、今日速览

今日 GitHub AI 热榜最鲜明的信号是 **“Agent Skills 生态”集中爆发**：Claude-BugHunter、superpowers、last30days-skill、stitch-skills、app-store-compliance 等多个“技能包/slash 命令”型项目单日新增数百至千余 stars，说明社区正从“造 Agent”转向“给 Agent 装技能”。与之呼应，**Agent 的“感官与记忆”** 成为第二条主线——抓取（firecrawl）、上网搜索（Agent-Reach）、持久记忆（claude-mem、mem0）、工具输出压缩（headroom、caveman）构成完整的上下文工程工具链。**“让软件 Agent-Native”** 与 **“降低 token 成本”** 是开发者当前最实际的两个痛点。训练侧则以 minimind、LLMs-from-scratch 为代表，小模型从零训练仍是稳定的学习型热点。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** [C++] +188 today
  Intel 主导的开源 AI 推理优化与部署工具包，是边缘/端侧部署的核心基础设施；今日登榜说明部署侧优化仍受关注。
- **[cursor/plugins](https://github.com/cursor/plugins)** [TypeScript] +408 today
  Cursor 官方插件规范与官方插件，标志 Cursor 正把插件生态“标准化”，对 IDE 内 Agent 开发拓展有直接影响。
- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** [Python] +1094 today
  主张“让所有软件 Agent-Native”，通过 CLI-Hub 桥接软件与 Agent，是今日热榜前列的 Agent 基础设施新思路。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐188,117
  本地模型运行的标准入口，描述中提到 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen 等，反映国产生态兼容性持续扩展。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐169,313
  文本/视觉/音频/多模态模型的定义框架，推理与训练通吃，仍是模型侧最权威的基础设施。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,733
  深度学习主力框架，GPU 加速与动态图生态的基石。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐80,853 [rag]
  在内容到达 LLM 前压缩工具输出/日志/RAG 分块，编码 Agent 省 20% token、JSON 场景省 60–95%，是“上下文成本工程”的代表。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** [Python] +1644 today（今日榜首）
  Claude Code 的红队/漏洞挖掘技能包，含 84 个技能、15 个 slash 命令、681 条披露报告模式，是“垂直领域技能包”最激进的样本。
- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] +902 today
  Agentic 技能框架 + 软件开发方法论，把“技能”上升为可复用的工程规范，今日热度印证方法论层的需求。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐310,640 [llm]
  Agent harness 性能优化系统（技能、直觉、记忆、安全、研究优先开发），跨 Claude Code/Codex/Cursor 等，是 Agent 运行时的“增强层”。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐266,074 [llm]
  “随你成长的 Agent”，NousResearch 出品的通用 Agent 项目。
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** [Python] ⭐188,189 [llm]
  Agent 概念的开山项目，仍保持高体量关注。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,989 [llm]
  定位“Agent 工程平台”，是 Agent 编排的主流框架。
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** [Python] +343 today
  面向 CI/CD 可靠性的开源 Agent，把 Agent 落到运维场景。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐84,806 [ai-agent]
  开源 AI 求职 Agent，按 CV 给岗位打 1–5 分并定制简历，可在 Codex/OpenCode 本地运行或作为 Claude Code 插件。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] +1131 today / ⭐209,875 [llm]
  为 Agent 提供“知识基础设施”，一个 API 搜索/抓取/访问 550+ 数据源，是 Agent 数据供给的头部项目。
- **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)** [HTML] +1133 today
  面向 Claude Code/Codex/Copilot/Cursor 等的编辑级图表设计技能，52 种图型、纯 HTML+SVG，切中 Agent 产出“可交付视觉物”的需求。
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] +950 today
  跨 Reddit/X/YouTube/HN/Polymarket 做主题研究并生成有据可依的摘要，是“深度调研类技能”的代表。
- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** [TypeScript] +352 today
  Google Labs 出品的 Agent Skills 库，遵循 Agent Skills 开放标准，兼容 Antigravity、Gemini CLI、Claude Code、Cursor。
- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)** [Shell] +853 today
  应用商店合规 playbook：124 条拒审模式、隐私清单/数据安全校验、114 个法规截止日（含 EU AI Act、DSA、COPPA），并附 AI 编码 Agent 技能。
- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** [Python] +868 today
  开源 AI 视频剪辑桌面工具，长视频一键剪成短视频并生成字幕/封面/文案，适配抖音、小红书、TikTok、Reels。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐145,671 [llm]
  按主题/关键词一键生成高清短视频的 AI 自动化工作流，中文社区内容生产类代表。
- **[toeverything/AFFiNE](https://github.com/toeverything/AFFiNE)** [TypeScript] +578 today
  隐私优先的开源知识库（Notion+Miro 融合），作为“AI 可接入的知识底座”持续受关注。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** [Python] +828 today / ⭐70,878 [llm-model]
  “两小时从 0 训出 64M 大模型”，同时出现在今日热榜与 llm-model 主题，是低成本从零训练的教学标杆。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐109,044 [ml]
  用 PyTorch 逐步实现类 ChatGPT 的 LLM，是最系统的从零实现教程。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐80,122 [ml]
  “学—建—交付”式 AI 工程学习路线，反映工程化学习需求上升。
- **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** [Python] ⭐63,745 [ml]
  YOLO 系列（YOLO27/26/11/v8）检测、分割、分类、姿态、跟踪一体化，视觉模型主力工具链。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,819 [ml]
  经典 ML 框架，仍保持庞大基数。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐119,727 [rag]
  跨会话的持久上下文：捕获 Agent 会话、AI 压缩、回注相关上下文，兼容 Claude Code/Codex/Gemini/Copilot 等。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐69,467 [rag]
  面向生产环境的 AI Agent 记忆层，即插即用。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐153,313 [llm]
  把代码库/文档/SQL/配置/PDF 转成可查询知识图谱，本地确定性 AST 解析、不用向量库，是“图谱替代向量”路线的代表。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,705 [rag]
  从 RAG 引擎成长为“Agent-native 数据库/上下文基础设施”。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,884 [rag]
  面向 AI Agent 的托管抓取/抽取/搜索 API，核心爬虫 Apache-2.0 可自托管。
- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐161,899 [llm]
  Agentic 工作流 + RAG 流水线一体化协作平台，可从原型直落生产。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,636 [vector-db]
  本地优先的私有化 Agent/知识库体验。
- **[HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor)** [Python] ⭐62,742 [rag]
  终身个性化辅导，是 RAG 在教育垂直场景的落地。

> 附：以下 Trending 项目因与 AI 无明确关联，按要求略去——nginx/nginx、XiaoYouChR/Ghost-Downloader-3。

---

## 三、趋势信号分析

今日最突出的爆发点是 **Agent Skills 的“标准化 + 垂直化”**。Claude-BugHunter（+1644）、superpowers（+902）、last30days-skill（+950）、stitch-skills（+352）、app-store-compliance（+853）集体登榜，且 stitch-skills 明确遵循“Agent Skills 开放标准”、兼容 Cursor/Gemini CLI/Antigravity，说明技能正从个人 prompt 走向跨 Agent 可移植的规范层。第二条主线是 **上下文成本工程**：headroom、caveman（“why use many token when few token do trick”）、claude-mem、mem0 同时上榜，反映 Agent 规模化后 token 与记忆成为硬约束，“压缩 + 持久化”形成新工具栈。第三条是 **CLI-Anything 的“Agent-Native 化”**，把任意软件接成 Agent 可调用接口，方向新颖且首次以高增量登榜。训练侧无新模型权重发布信号，热点集中在 minimind、LLMs-from-scratch 等从零训练教学，指向“理解与自建”而非“追新”。整体看，社区注意力已从“用哪个模型”转向“如何把 Agent 用好、用省、用到垂直场景”。

---

## 四、社区关注热点

- **Agent Skills 开放标准与跨 Agent 兼容**：stitch-skills 遵循开放标准、兼容多家 coding agent，值得跟进——这可能是技能生态“可移植”的关键分水岭。
- **CLI-Anything 的 Agent-Native 路线**：以 +1094 登榜，“让所有软件变成 Agent 接口”若能落地，将大幅扩展 Agent 的能力边界，建议优先评估其 CLI-Hub。
- **上下文压缩与记忆层（headroom / caveman / claude-mem / mem0）**：直接决定 Agent 的成本与长任务可靠性，是当前投入产出比最高的工程优化点。
- **垂直领域技能包（Claude-BugHunter 安全红队、app-store-compliance 合规）**：把行业知识封装成 Agent 技能，验证了“技能即产品”的商业模式，值得作为垂直落地模板研究。
- **低成本从零训练（minimind / LLMs-from-scratch）**：在无新模型发布的日子里仍是稳定热点，适合团队做模型原理与私有化小模型的入门实践。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*