# AI 开源趋势日报 2026-11-03

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-03 17:53 UTC

---

# AI 开源趋势日报（2026-11-03）

## 1. 今日速览

今日热榜几乎被「AI Agent 基础设施」占据：上下文记忆（claude-mem）、计算机使用（agent-desktop）、并行工作流（worktrunk）、Agent 技能包（mattpocock/skills、Claude-Code-Game-Studios）同时冲榜，说明社区竞争焦点已从「模型能力」转向「Agent 的工程化周边」。今日新增 stars 最高的 vercel-labs/agent-desktop（+3792）代表大厂正式切入 computer-use CLI 赛道。模型侧出现两个值得注意的新方向：面向 MoE 的分层推理引擎 colibri（C 语言手写、GPU/RAM/NVMe 三级调度），以及无需训练即可修改模型行为的 heretic（去审查/去谄媚）。主题搜索侧，token 压缩（caveman、headroom）与 Agent 记忆层（claude-mem、mem0）密集出现，效率与记忆成为 Agent 落地的两大刚需。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[colibri](https://github.com/JustVugg/colibri)** [C] ⭐今日 +803 — 面向前沿 MoE 模型的分层推理引擎，热专家留 GPU（CUDA/Vulkan）、温专家放 RAM、冷专家从 NVMe 流式加载，用纯 C 在消费级硬件上跑大 MoE，是今日少见的「底层推理优化」型项目。
- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** [Rust] ⭐今日 +3792（今日新增最高）— 为 AI Agent 提供 computer use 的 CLI，Vercel Labs 出品，标志大厂工具链向 Agent 操作层延伸。
- **[worktrunk](https://github.com/max-sixty/worktrunk)** [Rust] ⭐今日 +437 — 专为并行 AI Agent 工作流设计的 Git worktree 管理 CLI，解决多 Agent 并发改同一仓库的冲突痛点。
- **[headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐78,719 — 在工具输出、日志、文件、RAG chunk 进入 LLM 前做压缩，编码 Agent 省 20% token、JSON 省 60–95%，提供库/代理/MCP server 三种形态。
- **[Scrapling](https://github.com/D4Vinci/Scrapling)** [Python] ⭐今日 +1658 — 从单请求到全站爬取的一体化 Web 抓取框架，是 Agent 获取网页数据的基础设施。
- **[caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐117,139 — 让编码 Agent「像原始人说话」以削减 65% token 的 skill + 代理，思路极端但在榜单上验证了 token 成本焦虑。
- **[ollama](https://github.com/ollama/ollama)** [Go] ⭐185,795 — 本地模型运行入口，继续作为开源模型落地的默认起点。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐111,605（今日 +1138）— 跨会话持久上下文：捕获 Agent 会话行为、AI 压缩后回注入未来会话，兼容 Claude Code、Codex、Gemini、Copilot 等多客户端，今日同时出现在 Trending 与 RAG 主题。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐今日 +1164 — 作者直接从自己的 `.agents` 目录公开的工程师实用 Skills，反映「技能包」正成为 Agent 生态的分发单位。
- **[Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios)** [Shell] ⭐今日 +1181 — 把 Claude Code 改造成含 49 个 AI Agent、72 个 workflow skill 的「游戏工作室」，是模拟真实组织层级的多 Agent 编排样例。
- **[ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐296,336 — Agent harness 性能优化系统，覆盖 skills、instincts、memory、安全与研究优先开发，支持 Claude Code / Codex / Cursor 等。
- **[hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐260,179 — NousResearch 的「随你成长」式 Agent 框架。
- **[Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐108,368 — 一个 CLI 让 Agent 零 API 费用读取 Twitter、Reddit、YouTube、GitHub、B 站、小红书。
- **[browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐119,940 — 开源 AI 浏览器 Agent 库 + 托管云服务。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[ai-goofish-monitor](https://github.com/Usagi-org/ai-goofish-monitor)** [Python] ⭐今日 +204 — 基于 Playwright + AI 的闲鱼多任务实时/定时监控与智能分析系统，带后台管理 UI，是国内垂直电商场景的典型 Agent 化应用。
- **[Kronos](https://github.com/shiyu-coder/Kronos)** [Python] ⭐今日 +503 — 定位「金融市场语言」的基础模型，金融时序/文本方向的领域大模型尝试。
- **[career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐79,774 — 求职 Agent：扫描职位板、按 CV 打 1–5 分、定制 ATS 简历与求职信，本地跑在 Codex / OpenCode 或作为 Claude Code 插件。
- **[ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐73,060 — 把文档/主题转成原生 PowerPoint（原生形状、转场动画、数据图表、演讲者备注配音），支持自有 .pptx 模板。
- **[MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐138,197 — 按主题/关键词一键生成高清短视频的 AI 自动化工作流。
- **[OpenBB](https://github.com/openbq-org/OpenBB)** [Python] ⭐75,056 — 面向分析师、quant 与 AI Agent 的开放数据平台。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[heretic](https://github.com/p-e-w/heretic)** [Python] ⭐今日 +699 — 免训练的语言模型行为修改：去除审查、抑制废话、降低谄媚等，代表「后训练/激活层干预」这一轻量路线受关注。
- **[transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,493 — 文本/视觉/音频/多模态模型的定义框架，推理与训练通用底座。
- **[pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,103 — 主流深度学习框架，Agent 与模型训练的共同底座。
- **[LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐107,757 — 用 PyTorch 从零实现类 ChatGPT LLM 的分步教程。
- **[ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐76,550 — 「学了就建、建了就发」的 AI 工程化学习路径。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐93,435 — 从 RAG 引擎演进为「agent-native 数据库」的上下文基础设施。
- **[mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,341 — 面向生产环境的 Agent 记忆层，即插即用的持久上下文设施。
- **[graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐141,684 — 把代码库（含文档、SQL schema、配置、PDF）转成可查询知识图谱的 `/graphify` skill，本地确定性 AST 解析、每条边可解释、不用向量库。
- **[crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐86,834 — 把任意网站转为 LLM 友好 Markdown 的开源爬虫，可自托管或用云服务。
- **[anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐67,898 — 本地优先、可自持的全能 Agent 体验。
- **[firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐198,254 — 为 AI Agent 提供网页及更广数据源的抓取库。

---

## 3. 趋势信号分析

今日爆发性关注集中在 **Agent 的工程化周边**而非模型本身：记忆（claude-mem +1138）、并行工作流（worktrunk +437）、技能包（skills +1164、Game-Studios +1181）、操作层（agent-desktop +3792）同日冲榜，说明社区的重心已转入「如何让 Agent 可靠、低成本、可协作地跑起来」。第二个信号是**推理效率**：colibri 以纯 C 做 MoE 三级分层推理首次登榜，配合主题侧的 token 压缩双雄 caveman 与 headroom，呼应低成本跑大模型与长上下文的双重压力。第三，**免训练模型修改**（heretic +699）代表后训练/激活干预这一轻量路线抬头。技术栈上，Rust 在 Agent 工具链（agent-desktop、worktrunk、hex）中出现频次明显上升。这些动向与榜单中 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen 等开源/半开源模型的密集供给相呼应——模型供给充足后，竞争自然转向上下文、成本和调用基础设施。

---

## 4. 社区关注热点

- **vercel-labs/agent-desktop**（+3792）— 今日新增最高且出自大厂 Labs，computer use CLI 可能成为 Agent 操作桌面/浏览器的新标准入口，值得跟进展望。
- **claude-mem**（+1138，同时进 RAG 主题）— 跨客户端、跨会话的持久记忆，直击 Agent「每次都从零开始」的核心痛点，且兼容面广。
- **colibri**（+803）— 用 C 在消费级硬件上跑前沿 MoE 的分层推理，若成熟将显著降低大 MoE 的部署门槛，是少见的底层硬核方向。
- **token 压缩方向（headroom / caveman）** — 长上下文与多 Agent 调用下 token 成本是第一约束，压缩层正从技巧变为基础设施。
- **graphify / ragflow / mem0 的「上下文基础设施」竞赛** — 知识图谱、RAG 数据库、记忆层三条路线在争夺同一个位置：Agent 的长期知识底座，选型值得持续观察。

---

*注：Trending 仓库仅有今日新增 stars、无总量（数据中显示为 0）；主题搜索仓库仅有总量、无今日新增，报告中已分别标注。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*