# AI 开源趋势日报 2026-11-06

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-06 17:31 UTC

---

# AI 开源趋势日报（2026-11-06）

## 1. 今日速览

今日热榜最突出的信号是 **"Agent Skills"生态的集中爆发**：mattpocock/skills、cloudflare/security-audit-skill、google/skills 三个"技能"类仓库单日合计新增超 5000 stars，与 Claude Code、Codex、Cursor 等编码 Agent 的扩展机制直接相关。与之呼应的是 NVIDIA 的 auto-ontology（+2005）与 Graphify-Labs/graphify、headroom 等"给 Agent 提供结构化上下文/降 token"的工具，显示社区焦点正从"造 Agent"转向"让 Agent 更省、更准、更可控"。同时，上下文记忆（claude-mem、mem0）与数据获取（firecrawl、crawl4ai、Agent-Reach）仍是 RAG 方向的高星主力。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐0（+2058 today）
  面向"真工程师"的 Agent 技能集合，直接来自作者的 `.agents` 目录；单日涨幅居 Trending 之首，代表编码 Agent 技能化配置的社区共识。
- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** [JavaScript] ⭐0（+2524 today）
  多云安全审计的编码 Agent 技能，产出可机器验证的独立结论；单日 +2524，是今日 Trending 新增 stars 最高项目，标志厂商开始官方下场做 Agent 技能。
- **[google/skills](https://github.com/google/skills)** [Python] ⭐0（+532 today）
  面向 Google 产品与技术的 Agent Skills；大厂以官方仓库形式提供技能包，值得关注其标准化走向。
- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** [Python] ⭐0（+2005 today）
  在数据上构建语义图推理层的 Python 框架，支持确定性查询生成与更可解释的 LLM/Agent 工作流；NVIDIA 入局"Agent 上下文结构化"。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐79,007
  在工具输出、日志、RAG 分块进入 LLM 前做压缩，编码 Agent 减 20% token、JSON 减 60-95%；提供库、代理与 MCP server 三种形态。

### 🤖 AI 智能体/工作流

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐298,387
  Agent harness 性能优化系统，涵盖技能、本能、记忆、安全与"研究优先"开发，兼容 Claude Code、Codex、Cursor 等；星标体量居本次数据首位。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐261,123
  "与你共同成长"的 Agent 框架，属于模型厂商自研 Agent 栈的代表。
- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐160,562
  Agentic 工作流与 RAG 管线的一体化协作平台，支持云、VPC、自托管，主打原型到生产的平滑过渡。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐120,197
  开源 Python 浏览器 Agent 库，并提供隐身浏览器与托管 Agent API 的云服务。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐80,664
  开源 AI 求职 Agent：扫描职位板、按简历打分、定制 ATS 简历与求职信，可在 Codex、OpenCode 或作为 Claude Code 插件本地运行。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐74,241
  将文档或主题转为原生 PowerPoint（原生形状、转场、图表、语音旁白、支持自有模板）的垂直 Agent 应用。

### 📦 AI 应用

- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** [Python] ⭐187,924
  "人人可用 AI"的经典自主 Agent 项目，仍是该赛道标杆与入口。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐199,181
  为 AI Agent 提供网页及更广来源数据，定位"超级智能的数据层"。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐140,164
  用大模型与自动化工作流按主题/关键词一键生成高清短视频。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐120,975
  多 Agent LLM 金融交易框架，是 LLM Agent 在量化金融的落地样板。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐109,611
  单一 CLI 让 Agent 读取/搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书等，零 API 费用。
- **[netdata/netdata](https://github.com/netdata/netdata)** [Go] ⭐81,292
  面向全栈可观测性的 AI 加持方案，小团队可用的运维数据入口。

### 🧠 大模型/训练

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,589
  文本、视觉、音频与多模态 SOTA 模型的模型定义框架，兼顾推理与训练。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐186,118
  一键运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的本地推理入口。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,353
  面向所有人的开源机器学习框架，仍是生态基石。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,209
  张量与动态神经网络，GPU 加速能力强，研究与训练主力。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐107,918
  用 PyTorch 从零逐步实现类 ChatGPT LLM 的教学项目。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐77,101
  AI 工程学习路径项目，主打"学—建—交付"。

### 🔍 RAG/知识库

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,125
  定位为 Agent 工程平台，是 RAG 与 Agent 编排的长期主力。
- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** [Python] ⭐144,024
  100+ AI Agent、Agent Skills 与 RAG 应用的开源合集。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐143,397
  把代码库、文档、SQL schema、配置与 PDF 转为可查询知识图谱，本地确定性 AST 解析、每条边可解释、不使用向量库。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Svelte] ⭐157,930
  友好易用的 AI 界面，兼容 Ollama 与 OpenAI API。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐93,683
  从 RAG 引擎演进为"agent-native 数据库"/上下文基础设施。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐113,886
  跨会话持久上下文：捕获 Agent 会话行为、AI 压缩后回注，兼容 Claude Code、Codex、Gemini 等多个 Agent。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,519
  面向 AI Agent 的即插即用记忆层，强调生产级持久上下文。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐86,995
  Apache-2.0 的开源爬虫，驱动其托管的抓取/抽取/搜索 API，为 Agent 提供网页数据。

---

## 3. 趋势信号分析

今日最显著的爆发点是 **Agent Skills / 技能插件层**：cloudflare（+2524）、mattpocock（+2058）、google（+532）三家"技能"仓库同登 Trending，且分别覆盖安全审计、工程实践、云厂商产品三类场景，说明围绕 Claude Code、Codex、Cursor 的扩展机制已从个人实验走向厂商标准化竞争。第二个信号是 **"上下文工程"**：NVIDIA auto-ontology 与 graphify 用图/本体取代纯向量检索，headroom、claude-mem、mem0 则从压缩与记忆两端降低 token 与上下文丢失——这批项目共同回应了编码 Agent 的准确性与成本痛点。数据获取端（firecrawl、crawl4ai、Agent-Reach）依旧高星，但今日新增热度不及技能层。技术栈上，"非向量、确定性、可解释"的图谱路线作为对纯 RAG 的补充首次集中出现；Go/Rust/TypeScript 在 Agent 基础设施中占比上升。需说明：本次数据未包含任何大模型发布或会议信息，故无法建立与近期模型发布的直接关联，上述判断仅基于榜单本身。

---

## 4. 社区关注热点

- **厂商官方 Agent 技能仓库** — [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 与 [google/skills](https://github.com/google/skills) 同日上榜，值得跟进技能规范是否趋同。
- **图谱/本体替代或补充向量检索** — [NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)、[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) 主打确定性查询与可解释性，是 RAG 架构演进的新分支。
- **Agent 上下文与 token 成本优化** — [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)、[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)、[mem0ai/mem0](https://github.com/mem0ai/mem0) 覆盖压缩、记忆、持久上下文，直接影响生产可用性。
- **新入场的 Agent 编排与优化系统** — [affaan-m/ECC](https://github.com/affaan-m/ECC)、[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) 星标体量大但相对生面孔，建议先核验其实际能力再投入。
- **垂直场景 Agent 快速成熟** — [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)（求职）、[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)（PPT）、[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)（金融）显示 Agent 正沿具体职业任务落地。

> 注：本次数据中 Trending 仓库的 ⭐ 显示为 0（仅提供今日新增 stars），主题搜索仓库为总 stars 快照，两类数据口径不同，无法直接横向比较；上文中部分高星仓库的 star 数值规模明显偏大，引用时请以 GitHub 实时数据为准。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*