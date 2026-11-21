# AI 开源趋势日报 2026-11-21

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-21 17:36 UTC

---

# AI 开源趋势日报（2026-11-21）

## 1. 今日速览

今日最突出的信号是「Agent 技能包（Skills）」生态的整体爆发：Trending 榜上 Claude-BugHunter、superpowers、stitch-skills、last30days-skill、diagram-design 等多个仓库都是面向 Claude Code / Codex / Cursor 等编程智能体的技能或方法论，并出现了专门把任意软件 CLI 化以适配 Agent 的 CLI-Anything。与此并行，Agent 的“上下文与成本管理”成为新的工程焦点——caveman、headroom、claude-mem 分别在压缩 token、压缩工具输出和跨会话持久记忆上发力。知识获取侧，firecrawl 同时登上 Trending 与 LLM/RAG 主题榜，延续“为 Agent 供给知识基础设施”的主题。训练与模型侧则以 minimind 这类低成本从零训练小模型为代表，体现社区对可复现训练流程的兴趣。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** [Python] ⭐0（+767 today）
  主张“让所有软件成为 Agent 原生”，通过 CLI-Hub 把软件以 CLI 形态暴露给智能体，是今日 Agent 工具化方向的代表性基础设施。

- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** [C++] ⭐0（+202 today）
  开源 AI 推理优化与部署工具包，登上 Trending 说明边缘/端侧推理部署仍是稳定刚需。

- **[cursor/plugins](https://github.com/cursor/plugins)** [TypeScript] ⭐0（+261 today）
  Cursor 的插件规范与官方插件，反映编辑器侧对 Agent 扩展标准化的推进。

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** [TypeScript] ⭐0（+324 today）
  面向 Stitch MCP server 的 Agent Skills 库，遵循 Agent Skills 开放标准，兼容 Antigravity、Gemini CLI、Claude Code、Cursor，是“技能标准化”的关键样本。

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐121,935
  面向编程 Agent 的 Skill + 本地代理，用更少 token 输出回答、压缩工具输出，且原始内容可恢复，直击 Agent 推理成本痛点。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐80,246
  在到达 LLM 前压缩工具输出、日志、文件与 RAG 片段，声称编码 Agent 省 20% token、JSON 省 60–95%，提供库、代理与 MCP server 三种形态。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐308,222
  “agent harness 性能优化系统”，覆盖技能、记忆、安全与研究优先开发，支持 Claude Code、Codex、Opencode、Cursor 等。

### 🤖 AI 智能体/工作流

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** [Python] ⭐0（+1794 today，今日 Trending 第一）
  Claude Code 的漏洞挖掘/红队技能包：82 个技能、15 个 slash 命令、覆盖 24 类核心漏洞的 681 条披露报告模式，并含企业身份与基础设施攻击矩阵。

- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐0（+884 today）
  一个“能用”的 Agent 技能框架与软件开发方法论，是技能生态中偏方法论层的代表。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐205,937（+999 today）
  面向 Agent 的知识基础设施，一个 API 即可搜索、抓取并访问 550+ 数据源；同时出现在 Trending 与 LLM 主题榜，是今日跨榜热度最高的项目之一。

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] ⭐0（+566 today）
  Agent 技能：跨 Reddit、X、YouTube、HN、Polymarket 与网页调研任意话题并生成有据可依的摘要。

- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** [Python] ⭐0（+450 today）
  面向 CI/CD 可靠性的开源 Agent，把 Agent 能力落到运维场景。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐84,026
  开源 AI 求职 Agent：扫描职位板、按 CV 打分（1–5）、定制 ATS 友好简历与求职信，本地运行于 Codex/OpenCode 或作为 Claude Code 插件。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐265,147
  “与你一起成长的 Agent”，是 Agent 框架层的头部项目。

- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [Python] ⭐80,699
  从 0 到 1 构建类 Claude Code 的 nano agent harness，适合理解 Agent 内部机制。

### 📦 AI 应用

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** [Python] ⭐0（+689 today）
  开源 AI 视频剪辑桌面工具，一键把播客/访谈/课程长视频剪成短视频并生成字幕、封面与发布文案，适配抖音、小红书、TikTok、Reels、YouTube Shorts。

- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)** [Shell] ⭐0（+724 today）
  App Store / Google Play 上架合规 playbook：117 条拒审模式与修复、隐私清单与数据安全检查、95 个监管截止日期跟踪（含 EU AI Act、DSA、COPPA），并附 AI 编码 Agent 技能。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐144,956
  用大模型与自动化工作流从主题/关键词一键生成高清短视频。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐79,059
  用 AI 把文档或主题转成原生 PowerPoint（原生形状、转场、动画、图表、旁白），并支持自有 .pptx 模板。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐73,629
  LLM 驱动的多市场股票智能分析系统，含多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐123,373
  多智能体 LLM 金融交易框架。

### 🧠 大模型/训练

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** [Python] ⭐68,056（+488 today）
  「两小时从 0 训出你的 64M 大模型」，同时登上 Trending 与 llm-model 主题榜，是低成本可复现训练的代表。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐108,755
  用 PyTorch 一步步实现类 ChatGPT 的 LLM，是长期高热的底层原理教材型仓库。

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐169,347
  文本/视觉/音频/多模态 SOTA 模型的模型定义框架，兼顾推理与训练。

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐187,831
  一行命令跑起 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的本地运行工具。

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,766
  带 GPU 加速的 Python 张量与动态神经网络框架。

- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐79,742
  AI 工程从学习、构建到交付的实战路线型仓库。

### 🔍 RAG/知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐151,523
  把代码库及其文档、SQL schema、配置、PDF 变成可查询知识图谱，用于 Claude Code/Cursor/Codex/Gemini CLI；强调本地确定性 AST 解析、每条边可解释、不用向量库。

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐118,796
  为每个 Agent 提供跨会话持久上下文：捕获会话行为、AI 压缩、把相关上下文注入后续会话，兼容 Claude Code、Codex、Gemini、Hermes、Copilot、OpenCode 等。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,508
  自称“agent-native 数据库”，从 RAG 引擎演化为上下文基础设施。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐69,307
  AI Agent 的记忆层，可插拔的生产级持久记忆基础设施。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,633
  面向 AI Agent 的托管网页抓取/抽取/搜索 API（含免费额度），本仓库为 Apache-2.0 可自托管爬虫。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,482
  本地优先的全能 Agent 体验，主打“自持智能”。

- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐161,621
  在一个协作工作台里构建 Agentic 工作流与 RAG 管线，云/VPC/自托管均可。

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Svelte] ⭐159,206
  友好的 AI 界面，支持 Ollama、OpenAI API 等。

> 说明：Trending 榜单中的 nginx/nginx（通用 Web 服务器）、toeverything/AFFiNE（知识库/协作工具，非 AI 核心）、XiaoYouChR/Ghost-Downloader-3（下载器）与 AI/ML 无明确关联，已按要求略去。cathrynlavery/diagram-design 虽产出物为图表，但其定位是给编程 Agent 使用的技能包，归入工具/技能生态语境，未单列以免与主维度重复。

---

## 3. 趋势信号分析

今日最明确的爆发点是 **Agent 技能包（Skills）**：Trending 前几名几乎被 Claude Code / Codex / Cursor 的技能与命令集占据，且已从“写代码”扩散到漏洞挖掘、合规审查、话题调研、图表设计等垂直任务。第二个信号是 **Agent 上下文经济学**——caveman（压缩回答与工具输出）、headroom（压缩日志/文件/RAG 片段）、claude-mem（跨会话记忆）同时走热，说明社区正从“能跑”转向“跑得省、记得住”。第三，**知识获取与图谱化**并行：firecrawl 跨榜高热，graphify 以“不用向量库、AST 确定性解析”提供 RAG 的另一条路径，ragflow 则自称 agent-native 数据库。此外，CLI-Anything 提出的“软件 Agent 原生化”与 google-labs-code 的 Agent Skills 开放标准，暗示技能与接口的标准化正在成形。训练侧无新模型登榜，热度集中在 minimind 这类低成本可复现的小模型训练。以上关联均基于榜单描述，未涉及具体大模型发布事件。

---

## 4. 社区关注热点

- **Claude-BugHunter（+1794 today，Trending 第一）**：安全红队技能包首次以如此高热度登顶，说明“Agent + 安全”是当下最吸睛的垂直技能方向，安全团队值得评估。
- **firecrawl（+999 today，跨 Trending 与 LLM 榜）**：Agent 的知识供给层已成基础设施级需求，单 API 覆盖 550+ 数据源，适合作为 Agent 数据接入的默认选项。
- **caveman / headroom / claude-mem 组合**：三者分别从回答压缩、工具输出压缩、跨会话记忆切入，构成 Agent 成本与上下文管理的完整拼图，做 Agent 产品的团队应重点测试。
- **CLI-Anything + stitch-skills**：前者推动软件 CLI 化以适配 Agent，后者推动技能遵循开放标准，二者共同指向“Agent 接口与技能标准化”，是判断生态走向的风向标。
- **graphify（⭐151,523）**：以“确定性 AST 解析 + 可解释边 + 无向量库”挑战主流向量 RAG，对代码库问答场景是值得对比验证的替代方案。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*