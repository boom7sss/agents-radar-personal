# AI 开源趋势日报 2026-11-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-11 17:55 UTC

---

# AI 开源趋势日报 · 2026-11-11

## 1. 今日速览

今日 GitHub AI 生态最鲜明的信号是 **"为 Agent 服务的基础设施" 全面上位**：coding agent 的技能库、上下文记忆、token 压缩、浏览器自动化与安全审计工具集中在热榜，社区正从"造 Agent"转向"让 Agent 干好活"。Trending 榜首 `meta/astryx` 打出 "agent ready" 的旗帜，标志设计系统等传统前端层也开始为 Agent 适配。成本优化成为显性主题（`caveman`、`headroom`），垂直应用端则出现股票分析、求职、PPT 生成等"个人生产力 Agent"密集涌现。与此同时，教程型项目（`hello-agents`、`ai-engineering-from-scratch`）热度居高不下，说明人才供给正在追赶工具生态。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、开发工具、CLI）

- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** [Rust] ⭐0 (+712 today)
  Vercel 官方出品的浏览器自动化 CLI，专为 AI Agent 设计；Rust 实现，今日登榜显示"Agent 的手"正被标准化。
- **[shadcn/improve](https://github.com/shadcn/improve)** ⭐0 (+333 today)
  用最强模型审计代码库、为廉价模型编写执行计划——"贵模型规划、便宜模型执行"的分层成本范式颇受关注。
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** [JavaScript] ⭐0 (+788 today)
  面向 AI coding agent 的生产级工程技能包，今日新增近 800 星，是"Agent Skills"这一新兴形态的代表。
- **[openai/codex-security](https://github.com/openai/codex-security)** [TypeScript] ⭐0 (+20 today)
  OpenAI 官方 Codex Security CLI 与 TypeScript SDK，用于发现、验证并修复安全漏洞，AI 安全审计进入产品化阶段。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐186,665
  本地模型运行的事实标准入口，描述中已列出 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen 等多元模型阵营。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐79,361
  在工具输出、日志、RAG chunk 进入 LLM 前做压缩，把 token 成本当作一等工程问题，提供库/代理/MCP 三种形态。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐301,207
  Agent harness 性能优化系统，覆盖 skills、instincts、memory、安全与研究优先开发，兼容 Claude Code、Codex、Cursor 等。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐262,673
  NousResearch 的"与你一同成长"的智能体项目，是今日榜单中 star 量最高的 Agent 框架之一。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐120,719
  AI 浏览器 Agent 的开源 Python 库，并提供带隐身浏览器与托管 API 的云端服务。
- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** [TypeScript] ⭐113,127
  用于"在工作中管理 Agent"的开源应用，指向多 Agent 协作的调度与治理层。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐111,083
  一个 CLI 即可让 Agent 读取搜索 Twitter、Reddit、YouTube、GitHub、B站、小红书，零 API 费用。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐119,081
  以"原始人说话"风格为 coding agent 削减约 65% token 的代理/skill，是成本焦虑下的病毒式方案。

### 📦 AI 应用（垂直场景解决方案）

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐70,025 (+429 today)
  LLM 驱动的多市场股票分析系统，多源行情 + 实时新闻 + 决策看板，支持零成本定时运行；同时登上 Trending 与 AI 主题搜索。
- **[homeassistant-ai/ha-mcp](https://github.com/homeassistant-ai/ha-mcp)** [Python] ⭐0 (+640 today)
  用 Claude、ChatGPT 等 AI 助手配置和自动化 Home Assistant，是 MCP 落地智能家居的典型场景。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐81,929
  开源 AI 求职 Agent：扫描岗位、按 CV 打分、定制简历与求职信、准备面试，本地运行于多种 AI CLI。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐75,938
  将文档或主题转为原生 PowerPoint（含原生形状、动画、图表与旁白），支持自有模板。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐142,492
  用 LLM 与自动化工作流按主题/关键词一键生成高清短视频。

### 🧠 大模型/训练（模型、训练框架、微调）

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,815
  覆盖文本、视觉、音频与多模态的模型定义框架，兼顾推理与训练。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,505
  老牌开源机器学习框架，仍是 ML 主题下的头部仓库。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,387
  张量与动态神经网络框架，GPU 加速支撑训练主战场。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐108,241
  用 PyTorch 从零实现类 ChatGPT 大模型的分步教程，长期位列学习类头部。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐78,473
  AI 工程实战学习路径，"Learn it. Build it. Ship it." 定位工程落地。

### 🔍 RAG/知识库（向量库、检索增强、知识管理）

- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐160,984
  在一个协作工作区构建 Agentic workflow 与 RAG 流水线，可从原型走向生产。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,362
  自我定位为"agent engineering platform"，仍是 Agent 工程的主流框架。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐146,036
  把代码库、文档、SQL schema、配置与 PDF 转为可查询知识图谱，本地确定性 AST 解析、不依赖向量库。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐116,135
  跨会话持久记忆：捕获 Agent 会话、AI 压缩、再注入未来上下文，兼容 Claude Code、Codex、Gemini 等。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,036
  从 RAG 引擎成长为"agent-native 数据库"式上下文基础设施。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,817
  面向 AI Agent 的可即插即用记忆层，强调生产可用。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,226
  Apache-2.0 爬虫，为 AI Agent 提供网页抓取、抽取与搜索能力，并附托管云 API。

---

## 3. 趋势信号分析

今日最明确的爆发点是 **Agent 的"外围工程"**——而非模型本身。技能包（agent-skills、ECC）、记忆（claude-mem、mem0）、输入压缩（headroom、caveman）、浏览器与环境操作（agent-browser、browser-use）、安全审计（codex-security）形成完整栈，说明社区关注点已从"能不能跑起来"转向"跑得稳、跑得省、跑得安全"。第二个信号是 **成本分层范式首度显性化**：shadcn/improve 的"强模型规划 + 廉价模型执行"与 caveman、headroom 的 token 削减形成呼应。

新兴技术栈方面，**Rust 实现的 Agent 浏览器工具**与 **MCP 形态的垂直集成**（ha-mcp）首次进入热榜视野，知识图谱路线（graphify 的"无向量库"）对主流向量 RAG 构成方法论挑战。与前几日趋势相比，今日榜单缺少新的基础模型权重发布，热度整体由应用层与工程层承接，提示生态可能处于上一轮模型发布后的消化与落地期。

---

## 4. 社区关注热点

- **`addyosmani/agent-skills` 与 `affaan-m/ECC`** — "Agent Skills"正在成为独立于框架的可复用资产形态，关注它如何定义 coding agent 的工程规范。
- **`headroomlabs-ai/headroom` + `JuliusBrussee/caveman`** — 两条不同的 token 成本削减路线（工程压缩 vs. 提示风格），直接关系 Agent 运行成本，值得实测对比。
- **`Graphify-Labs/graphify`** — "无向量库、边可解释"的知识图谱路线，对 RAG 架构选型有潜在颠覆性，建议做小规模验证。
- **`vercel-labs/agent-browser`** — Vercel 以 Rust CLI 切入 Agent 网页操作，可能成为浏览器自动化的新标准层，值得跟进入门。
- **`openai/codex-security`** — AI 驱动的漏洞发现与修复官方工具，AI 安全审计从概念走向产品，团队应评估是否纳入 CI 流程。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*