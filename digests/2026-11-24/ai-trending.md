# AI 开源趋势日报 2026-11-24

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-24 09:55 UTC

---

# AI 开源趋势日报（2026-11-24）

## 1. 今日速览

今日热榜最鲜明的信号是“Agent 基础设施层”的集体爆发：Claude Code / Codex / Gemini CLI 等编码智能体的 **Skills、记忆、上下文压缩、网页感知** 插件大量登榜，说明生态正从“模型能力”转向“Agent 外围工程”。其次，**Token 成本优化**成为独立赛道（caveman、headroom 同日出现），反映 Agent 长会话的实用化压力。第三，**垂直场景 Agent 应用**（求职、股票分析、视频剪辑、App 上架合规）密集出现，`autoclip` 与 `MoneyPrinterTurbo` 同日上榜，AI 内容再生成已是成熟需求。传统 ML 框架（TensorFlow、PyTorch、scikit-learn）仍占据 star 总量高地但今日无新增，热度已让位于应用层。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（Agent 开发/CLI/推理）

- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐0 (+840 today)
  Agentic skills 框架与软件开发方法论，为编码智能体提供可复用的技能组织方式，今日高增显示“技能框架”已成新基建。
- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** [Python] ⭐0 (+790 today)
  主张“让所有软件 Agent-Native”，通过 CLI-Hub 把传统软件接入智能体，是 Agent 生态扩展边界的关键尝试。
- **[cursor/plugins](https://github.com/cursor/plugins)** [TypeScript] ⭐0 (+397 today)
  Cursor 官方插件规范与插件集，标志主流 IDE 开始标准化 Agent 插件接口。
- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** [TypeScript] ⭐0 (+422 today)
  Google Labs 出品的 Agent Skills 库，遵循 Agent Skills 开放标准，兼容 Antigravity、Gemini CLI、Claude Code、Cursor。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐122,522
  编码智能体的 Skill + 本地代理，压缩回答与工具输出以节省 token，且原文可恢复。
- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** [C++] ⭐0 (+184 today)
  Intel 的 AI 推理优化与部署工具包，是端侧/CPU 推理部署的代表性基础设施。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐187,966
  本地模型一键运行，支持 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等主流开源模型。

### 🤖 AI 智能体/工作流

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐309,811 [topic:llm]
  Agent harness 性能优化系统，覆盖技能、记忆、安全与“研究优先”开发，兼容 Claude Code、Codex、Cursor 等。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐265,754 [topic:llm]
  NousResearch 的可持续成长型 Agent，是研究机构向 Agent 框架延伸的代表。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐121,902 [topic:llm]
  开源 AI 浏览器智能体库，并提供云端隐身浏览器与托管 Agent API。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐114,373 [topic:ai-agent]
  一个 CLI 让 Agent 读取并搜索 X、Reddit、YouTube、GitHub、Bilibili、小红书，零 API 费用。
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** [Python] ⭐0 (+436 today)
  面向 CI/CD 可靠性的开源运维 Agent，是“Agent 进入 SRE 场景”的今日新面孔。
- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** [Python] ⭐0 (+2029 today)
  Claude Code 的红队/漏洞挖掘技能包（84 技能、681 个披露报告模式），今日新增 star 最高，安全 Agent 化趋势明确。

### 📦 AI 应用（垂直场景）

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** [Python] ⭐0 (+907 today)
  开源 AI 视频剪辑桌面工具，长视频一键切成适配抖音/小红书/TikTok/Reels 的短视频，并生成字幕、封面、文案。
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** [Python] ⭐69,845 (+828 today) [topic:llm-model]
  “两小时从 0 训出 64M 大模型”，教育与动手实践价值极高，今日再次登榜。
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] ⭐0 (+797 today)
  Agent 技能：跨 Reddit、X、YouTube、HN、Polymarket 调研任意话题并输出有据可依的摘要。
- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)** [Shell] ⭐0 (+761 today)
  App Store / Google Play 上架合规 playbook，含 124 个拒审模式与 EU AI Act 等 112 个截止日期，附编码 Agent 技能。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐84,501 [topic:ai-agent]
  开源 AI 求职 Agent：扫描岗位、按 CV 打分、定制简历与求职信，本地运行于 Codex/OpenCode 或作为 Claude Code 插件。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐79,750 [topic:ai-agent]
  将文档或主题转为原生 PowerPoint 演示（原生形状、动画、图表、配音）。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐74,164 [topic:ai-agent]
  LLM 驱动的多市场股票分析系统，含实时新闻、决策看板与零成本定时运行。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐145,345 [topic:llm]
  按主题/关键词一键生成高清短视频的 AI 工作流。

### 🧠 大模型/训练

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐169,280 [topic:llm]
  文本/视觉/音频/多模态 SOTA 模型的模型定义框架，推理与训练通吃。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐108,958 [topic:ml]
  用 PyTorch 逐步实现类 ChatGPT 的 LLM，是最系统的从零学习路径。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,713 [topic:ml]
  面向所有人的开源机器学习框架，生态基座。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,706 [topic:ml]
  张量与动态神经网络，GPU 加速强，研究/生产主力。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐79,988 [topic:ml]
  AI 工程学习路径：学、建、发布，偏向落地工程能力。
- **[keras-team/keras](https://github.com/keras-team/keras)** [Python] ⭐64,446 [topic:ml]
  面向人类的高层深度学习 API。

### 🔍 RAG/知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐152,708 [topic:rag]
  把代码库、文档、SQL schema、配置与 PDF 转为可查询知识图谱，本地确定性 AST 解析、无向量库，作为 Claude Code/Cursor 等的 skill。
- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐161,811 [topic:llm]
  Agentic 工作流与 RAG 流水线的协作式统一工作台，云/VPC/自托管均可。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,968 [topic:rag]
  Agent 工程平台，RAG 与 Agent 编排的事实标准之一。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐119,415 [topic:rag]
  跨会话持久上下文：捕获 Agent 会话、AI 压缩后回注，兼容 Claude Code、Codex、Gemini、Copilot 等。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,632 [topic:rag]
  从 RAG 引擎进化为“上下文基础设施”的 Agent-native 数据库。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐80,696 [topic:rag]
  在进入 LLM 前压缩工具输出、日志与 RAG 分块，编码 Agent 省 20% token，JSON 省 60–95%。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐69,411 [topic:rag]
  AI Agent 的即插即用记忆层，面向生产环境的持久上下文。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Svelte] ⭐159,395 [topic:rag]
  友好的 AI 交互界面，支持 Ollama 与 OpenAI API。

---

## 3. 趋势信号分析

今日热榜最突出的方向是 **Agent Skills 生态的标准化竞赛**：superpowers、stitch-skills、Claude-BugHunter、last30days-skill、app-store-compliance、graphify 均以“某项 Agent 技能”的形态出现，且普遍声明兼容 Claude Code / Codex / Gemini CLI / Cursor 多端，说明社区正在围绕“技能”而非“框架”构建复用层。

**Token 经济首次成为显性赛道**：caveman（少用 token）与 headroom（压缩工具输出与 RAG 分块）同日现身，直接对应 Agent 长会话的上下文与成本痛点，也间接反映近期开源模型（Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen）密集迭代后，用户对“跑得起、跑得久”的诉求上升。

**安全与合规 Agent 化**是今日新信号：Claude-BugHunter 单日 +2029 居首，app-store-compliance 内置 EU AI Act 截止日期，表明监管压力正在被编码为 Agent 技能。此外，**“无向量库”的知识图谱方案**（graphify）与 **CI/CD 运维 Agent**（opensre）是较新的方向，值得跟踪。

---

## 4. 社区关注热点

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — 今日新增 star 最高（+2029），安全红队被 Agent 技能化的标志性项目，安全团队值得评估。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) + [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — 两条独立的 token 压缩路线同日上榜，做长会话 Agent 的团队应优先测试其收益。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — 以确定性 AST 解析替代向量库的代码知识图谱，为 RAG 提供一条低幻觉、可解释的替代路径。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) + [mem0ai/mem0](https://github.com/mem0ai/mem0)** — 跨会话记忆层的两个代表，是 Agent 从“一次性工具”走向“长期助手”的关键组件。
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** — 新上榜的 CI/CD 可靠性 Agent，代表 Agent 正从编码/内容生成向运维可靠性等后端场景渗透。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*