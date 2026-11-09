# AI 开源趋势日报 2026-11-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-09 20:48 UTC

---

# AI 开源趋势日报 · 2026-11-09

## 一、今日速览

今日热榜由"Agent 基础设施"主导：Anthropic 官方 Agent Skills 仓库单日破千星，Claude 生态从"模型"转向"技能/上下文工程"配套。Token 经济成为显性主线——headroom、caveman、claude-mem 三个项目都围绕"少花 token、跨会话记住上下文"切入。浏览器与互联网访问成为 Agent 标配能力，vercel-labs/agent-browser 与 Agent-Reach 分别从 Rust CLI 和多平台读取两条路线切入。垂直场景上，LLM 股票分析与求职 Agent 均获得可观热度，说明"Agent + 明确 ROI 场景"比通用框架更受关注。传统 ML 学习资源（transformers、PyTorch、LLMs-from-scratch）继续保持高星存量，但今日增量信号集中在 Agent 工程化一侧。

---

## 二、各维度热门项目

### 🔧 AI 基础工具

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐79,240
  LLM 调用前的上下文压缩层（库/代理/MCP server），主打编码 Agent 省 20% token、JSON 省 60–95%。今日"降本"叙事的代表项目。

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐118,611
  以"穴居人式说话"压缩编码 Agent 提示词、宣称省 65% token 的代理工具，是 token 优化方向传播最广的项目之一。

- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** [Rust] ⭐0 (+914 today)
  Vercel Labs 出品的 AI Agent 浏览器自动化 CLI，今日新增 stars 靠前，反映 Agent 操作浏览器正在工具层标准化。

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐186,442
  本地模型运行与分发入口，描述中已覆盖 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等多家模型，是本地推理的事实标准层。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐200,116
  为 AI Agent 提供网页数据抓取的库，属于 Agent 的"数据入口"基础设施。

- **[anthropics/claude-quickstarts](https://github.com/anthropics/claude-quickstarts)** [Python] ⭐0 (+560 today)
  Claude API 可部署应用的快速上手项目集，今日上榜说明开发者对官方落地样例需求旺盛。

### 🤖 AI 智能体/工作流

- **[anthropics/skills](https://github.com/anthropics/skills)** [Python] ⭐0 (+1052 today)
  Anthropic 官方 Agent Skills 公共仓库，今日新增破千，是"技能化 Agent"成为一等公民的直接信号。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐300,164
  面向 Claude Code、Codex、Cursor 等的 Agent harness 优化系统（技能/记忆/安全/研究优先开发），横跨多个编码 Agent，体量最大。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐262,037
  Nous Research 的"随你成长"的 Agent 项目，是开源 Agent 框架阵营的高星代表。

- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐160,774
  Agentic 工作流 + RAG 管线的一体化协作平台，强调从原型到生产的自托管部署。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐120,442
  开源 AI 浏览器 Agent 库，并配套托管云与隐身浏览器 API，是浏览器 Agent 的主要入口之一。

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐110,595
  一个 CLI 读取 Twitter/Reddit/YouTube/GitHub/Bilibili/小红书，零 API 费用为 Agent 提供"眼睛"。

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐115,352
  跨会话持久上下文：捕获 Agent 会话、AI 压缩后回注，兼容 Claude Code/OpenClaw/Codex/Gemini/Hermes 等，直击 Agent 记忆痛点。

- **[homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)** [Python] ⭐0 (+31 today)
  用 Claude、ChatGPT 等助手配置与自动化 Home Assistant 的 MCP 服务，是 MCP 进入智能家居场景的实例。

### 📦 AI 应用

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐68,745 (+505 today)
  LLM 驱动的多市场股票智能分析系统，多源行情+实时新闻+决策看板+自动推送，支持零成本定时运行；同时出现在 Trending 与 ai-agent 主题，是"LLM+金融"落地代表。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐121,567
  多智能体 LLM 金融交易框架，与上者共同构成金融 Agent 双热点。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐81,461
  开源 AI 求职 Agent：扫描职位、按 CV 打分、定制 ATS 简历与求职信，本地跑在 Codex/OpenCode 或作为 Claude Code 插件。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐75,241
  把文档或主题转成原生 PowerPoint（原生形状、转场、动画、带数据图表），支持自有模板。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐141,561
  用 AI 大模型与自动化工作流按主题/关键词一键生成高清短视频。

- **[graphify](https://github.com/Graphify-Labs/graphify)** 与 **[openbq-org/OpenBB](https://github.com/openbq-org/OpenBB)** [Python] ⭐144,964 / ⭐75,275
  前者将代码库/文档/SQL/PDF 转为可查询知识图谱（Skill 形态）；后者是面向分析师、量化与 AI Agent 的开放数据平台，两者均属"专业数据 + Agent"应用层。

### 🧠 大模型/训练

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,698
  文本/视觉/音频/多模态模型的模型定义框架，推理与训练通用底座，长期占据生态核心位置。

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,419 ｜ **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,292
  两大主流训练框架仍贡献高星存量，是学习与生产的双基线。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐108,103
  用 PyTorch 从零实现类 ChatGPT LLM 的逐步教程，是"理解模型原理"方向最受欢迎的项目。

- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐78,134
  "学—建—交付"式 AI 工程学习路径，反映从模型原理向工程落地迁移的学习需求。

- **[google-deepmind/mujoco](https://github.com/google-deepmind/mujoco)** [C++] ⭐0 (+579 today)
  DeepMind 的通用物理仿真器，是具身智能/机器人学习的基础设施，今日上榜值得关注。

- **[netdata/netdata](https://github.com/netdata/netdata)** [Go] ⭐81,330
  主打 AI 驱动的全栈可观测性，属于"AI 运维"交叉方向（非模型训练本体，但与本类运维侧相关）。

### 🔍 RAG/知识库

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,281
  定位为"Agent 工程平台"，是 RAG 与 Agent 编排的通用底座。

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Svelte] ⭐158,226
  友好的 AI 界面，兼容 Ollama/OpenAI API，是自托管 RAG 与对话的常用前端。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐93,886
  从 RAG 引擎进化为"Agent 原生数据库/上下文基础设施"，是 RAG 向 context infra 演进的代表。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,701
  AI Agent 的记忆层，可即插即用的持久上下文，面向生产环境。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,112
  本地优先的一体化 Agent 体验，强调"拥有自己的智能"。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,146
  Apache-2.0 的抓取器，为 Agent 提供网页抓取/抽取/搜索能力，并可自托管。

- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** [Python] ⭐144,292
  100+ AI Agent、Agent Skills 与 RAG 应用合集，是快速寻找可复用方案的索引型项目。

---

## 三、趋势信号分析

今日最强烈的信号是 **Agent 的"上下文经济学"**：headroom、caveman、claude-mem 三个项目同日高频出现，分别从"调用前压缩""提示词瘦身""跨会话记忆"三条路径解决同一问题——token 成本与上下文连续性。这说明社区关注点已从"能不能做 Agent"转向"Agent 跑得省不省、记得住不住"。

第二是 **Agent 能力的外设化**：agent-browser（浏览器 CLI）、Agent-Reach（多平台读取）、firecrawl/crawl4ai（网页数据）、ha-mcp（MCP 接入家居），共同构成"Agent 的眼睛与手脚"层，MCP 与 Skill 正在成为事实上的扩展接口标准。

第三是 **官方生态的牵引**：anthropics/skills 与 claude-quickstarts 同时上榜，配合 ECC、claude-mem 等第三方项目，显示 Anthropic 的 Skill/harness 体系正在吸引开发者围绕其构建工具链。

第四是 **垂直场景 ROI 化**：股票分析（daily_stock_analysis、TradingAgents、OpenBB）与求职（career-ops）两类落地应用热度突出，社区更愿意为"有明确产出"的 Agent 场景投票。此外，DeepMind mujoco 上榜提示具身智能基础设施仍是关注点。整体上，模型层的讨论降温，工程化、降本、记忆与外部工具接入成为今日主线。

---

## 四、社区关注热点

- **anthropics/skills**：官方 Agent Skills 仓库单日 +1052 星，是把握 Claude 生态扩展方式（技能定义与复用）最直接的一手材料，值得优先跟进其目录与规范。
- **headroomlabs-ai/headroom + JuliusBrussee/caveman**：两条 token 压缩路线（结构化压缩 vs 提示词改写）已在生产宣称可省 20%–95% token，适合需要控制 LLM 成本与延迟的团队快速评估。
- **thedotmack/claude-mem**：跨会话记忆并兼容 Claude Code/Codex/Gemini/Hermes 等多 Agent，是解决"Agent 无状态"痛点的可插拔方案，适配面广。
- **vercel-labs/agent-browser**：Rust 实现的 Agent 浏览器 CLI，今日增量靠前，浏览器操作正从"库"走向"标准工具"，值得与 browser-use 对比选型。
- **daily_stock_analysis / TradingAgents / OpenBB**：金融数据 + LLM Agent 的组合持续高星且今日仍有增量，是垂直 Agent 商业化与自动化推送的观察样本（需注意投资类应用的风险与合规）。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*