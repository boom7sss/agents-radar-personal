# AI 开源趋势日报 2026-11-20

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-20 18:37 UTC

---

# AI 开源趋势日报 · 2026-11-20

## 1. 今日速览

今日最显著的特征是**“Agent Skills”生态的集中爆发**：Trending 前 16 名中有超过半数与 Claude Code、Codex、Cursor 等编码智能体的技能扩展直接相关，且出现了针对 bug 猎捕、图表设计、应用商店合规、话题研究等细分场景的“技能包”。同时，**降低 token 成本与上下文管理**（caveman、headroom、claude-mem、graphify）成为独立的工具品类，说明社区关注点正从“能否跑通 Agent”转向“如何让 Agent 更省、更持久、更可靠”。大模型训练侧则呈现“轻量化 + 教学化”双线并进（minimind 两小时训 64M 模型、LLMs-from-scratch）。此外，**CLI/MCP 作为智能体与软件交互的统一接口**成为新方向（CLI-Anything、stitch-skills）。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** [Python] ⭐— (+774 today)
  提出“让所有软件 Agent-Native”的 CLI-Hub，将命令行作为智能体的通用操作面，是今日最值得关注的新范式项目之一。

- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** [C++] ⭐— (+219 today)
  老牌 AI 推理优化与部署工具包重新登榜，反映社区对端侧/生产环境推理性能的持续需求。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐205,048 (+1226 today)
  为智能体提供网页搜索、抓取与 550+ 数据源接入的知识基础设施，今日新增 stars 为全榜最高，热度突出。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐307,718 [topic:llm]
  面向 Claude Code、Codex、Cursor 等编码代理的“代理运行框架性能优化系统”，涵盖技能、记忆、安全与研究方法论。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐80,207 [topic:rag]
  在工具输出、日志、RAG 片段进入 LLM 前进行压缩，宣称编码代理 token 减少 20%、JSON 减少 60–95%，直击成本痛点。

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐121,756 [topic:llm]
  “能少用 token 就别多用”的技能 + 本地代理，压缩编码代理回答与工具输出且原文可回溯。

- **[cursor/plugins](https://github.com/cursor/plugins)** [TypeScript] ⭐— (+292 today)
  Cursor 官方插件规范与插件集，是编码智能体扩展生态标准化的信号。

### 🤖 AI 智能体/工作流

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** [Python] ⭐— (+1660 today)
  今日新增 stars 冠军：含 82 个技能、15 个斜杠命令、681 条已披露漏洞报告模式的 Claude Code 红队技能包，垂直安全场景落地范例。

- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐— (+888 today)
  一套可用的智能体技能框架与软件开发方法论，是“方法论 + 技能”组合的代表。

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** [TypeScript] ⭐— (+315 today)
  Google Labs 推出、遵循 Agent Skills 开放标准的技能库，兼容 Antigravity、Gemini CLI、Claude Code、Cursor，推动技能格式统一。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐264,945 [topic:ai-agent]
  强调“随你成长”的智能体项目，位列 AI 主题搜索最高 star 之一。

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] ⭐— (+685 today)
  跨 Reddit、X、YouTube、HN、Polymarket 的话题研究技能，可生成有据可依的综述，展示 Agent 的信息整合能力。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐121,606 [topic:llm]
  AI 浏览器智能体库及托管 API，是 Web 自动化 Agent 的主流选择。

- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [Python] ⭐80,679 [topic:ai-agent]
  从 0 到 1 构建类 Claude Code 的“agent harness”，适合理解智能体底层机制。

- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** [Python] ⭐— (+465 today)
  面向 CI/CD 可靠性的开源智能体，将 Agent 引入运维场景。

- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐161,571 [topic:llm]
  集 Agentic 工作流、RAG 管线与多模型支持于一体的协作式开发平台，可从原型直达生产环境。

### 📦 AI 应用

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** [Python] ⭐— (+983 today)
  开源 AI 视频剪辑桌面工具，将长视频自动剪成适配抖音、小红书、TikTok、YouTube Shorts 的短视频并生成字幕文案。

- **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)** [HTML] ⭐— (+634 today)
  面向多个编码代理的编辑级图表设计技能，45 种图表类型、纯 HTML+SVG，代表“技能即设计资产”的应用形态。

- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)** [Shell] ⭐— (+874 today)
  涵盖 117 条应用商店拒审模式、隐私清单检查、95 条监管截止日（含 EU AI Act）的合规手册与编码代理技能。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐144,816 [topic:llm]
  用 AI 大模型与自动化工作流，按主题一键生成高清短视频。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐78,856 [topic:ai-agent]
  将文档或主题转化为原生 PowerPoint（含动画、图表、旁白），支持自有模板。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐83,926 [topic:ai-agent]
  开源 AI 求职智能体：扫描岗位、按 CV 打分、定制简历与求职信，本地运行于多种 AI CLI。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐123,268 [topic:llm]
  多智能体 LLM 金融交易框架，是垂直金融场景的代表项目。

### 🧠 大模型/训练

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** [Python] ⭐67,606 (+841 today)
  “两小时从 0 训出 64M 大模型”，以极低门槛成为今日训练类最亮眼项目，双榜（Trending + topic）同时出现。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐108,711 [topic:ml]
  用 PyTorch 从零逐步实现类 ChatGPT 的 LLM，是长期畅销的教学型训练项目。

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐169,322 [topic:ml]
  文本、视觉、音频与多模态模型的权威定义框架，兼顾推理与训练。

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐187,757 [topic:llm]
  本地运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的便捷入口。

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,660 [topic:ml]
  通用开源机器学习框架，仍是 ML 主题 star 最高的基础项目。

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,750 [topic:ml]
  GPU 加速的张量计算与动态神经网络框架，训练侧主力。

### 🔍 RAG/知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐151,079 [topic:rag]
  将代码库、文档、SQL schema、配置与 PDF 转为可查询知识图谱，采用确定性 AST 解析且不依赖向量库，是“非向量化 RAG”的新方向。

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐118,592 [topic:rag]
  跨会话持久化上下文，压缩代理会话内容并回注未来会话，兼容 Claude Code、Codex、Gemini、Hermes 等多个代理。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐69,283 [topic:rag]
  面向生产环境的 AI 智能体记忆层，提供即插即用的持久上下文。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,479 [topic:rag]
  从 RAG 引擎演进为“agent-native 数据库”的上下文基础设施。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,596 [topic:rag]
  Apache-2.0 开源爬虫，驱动面向 AI 智能体的托管抓取/抽取/搜索 API。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,468 [topic:rag]
  本地优先的智能体与知识库一体化体验，强调“自有智能”。

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Svelte] ⭐159,156 [topic:rag]
  易用的 AI 界面，支持 Ollama、OpenAI API 等多种后端。

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,969 [topic:rag]
  定位为“智能体工程平台”，是 RAG 与 Agent 编排的长期基础设施。

---

## 3. 趋势信号分析

今日热榜最强烈的信号是**Agent Skills 的“应用商店化”**：Claude-BugHunter、superpowers、stitch-skills、last30days-skill、diagram-design、app-store-compliance 等均以“技能包”形态出现，覆盖安全、设计、合规、研究等垂直领域，且多家（Google Labs、Cursor）在推动技能规范标准化。第二信号是**上下文与成本优化工具独立成类**：caveman、headroom、claude-mem、graphify 分别从压缩、记忆、图谱三个角度解决 token 开销与上下文持久化，说明 Agent 已进入“工程调优期”而非“概念验证期”。第三，**CLI/MCP 成为智能体操作软件的统一接口**（CLI-Anything、stitch-skills 的 MCP 服务器），是新兴技术栈方向。训练侧则以 minimind 为代表，体现“小模型、低门槛、可复现”的教学化趋势，与近期社区对轻量本地模型的持续兴趣相呼应。需说明：数据未包含具体大模型发布事件，故不推断行业发布关联。

---

## 4. 社区关注热点

- **Claude-BugHunter（+1660 today）**：今日新增 stars 最高，垂直安全红队技能包的落地范本，适合观察“技能包 + 领域知识库”如何构成竞争力。
- **CLI-Anything**：提出“让所有软件 Agent-Native”，若被采纳可能重塑智能体与软件交互的接口层，属于范式级方向。
- **headroom / caveman**：token 压缩工具同时登榜，直接关系 Agent 运行成本，是当前最具实用价值的优化点。
- **graphify**：不依赖向量库的知识图谱方案，为 RAG 提供“可解释边”的替代路径，值得对比评估。
- **stitch-skills（Google Labs）**：推动 Agent Skills 开放标准与 MCP 兼容，关注其是否成为跨代理技能格式的事实标准。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*