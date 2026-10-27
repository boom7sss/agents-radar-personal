# AI 开源趋势日报 2026-08-30

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-08-30 13:31 UTC

---

# AI 开源趋势日报（2026-08-30）

## 一、今日速览

今日 AI 开源生态呈现三大显著特征：**Agent Skills 标准化浪潮**成为绝对主线，多个主打"即插即用技能"的项目（如 scientific-agent-skills、archify、last30days-skill）集中登榜且涨星迅猛；**知识图谱与代码智能**方向初现爆发，GitNexus 主打浏览器端零服务器代码知识图谱与 Graph RAG，Graphify 则以确定性 AST 解析构建可查询知识图谱；**科学智能（AI for Science）** 与**垂直领域 Agent**（专利、股票、SEO）正在快速渗透，显示 Agent 落地从通用转向行业纵深。同时 LLM 生态持续扩张，freellmapi 聚合 34 家免费 LLM 提供商与 635 个模型端点，单月提供 74 亿 tokens，反映社区对低成本模型调用的强烈需求。


## 二、各维度热门项目

### 🔧 AI 基础工具

- [freellmapi](https://github.com/tashfeenahmed/freellmapi) — ⭐0（今日 +505）。聚合 34 家免费 LLM 提供商、635 个模型端点的统一 /v1 网关，支持智能路由与自动故障转移，单月可用 74 亿 tokens，大幅降低实验成本。
- [crawl4ai](https://github.com/unclecode/crawl4ai) — ⭐0（今日 +229）。开源 LLM 友好型网络爬虫与抓取工具，专为 AI 应用的数据采集场景设计。
- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐112,491。将代码库、文档、SQL Schema 转化为可查询知识图谱，纯本地确定性解析，无需向量存储，支持 Claude Code、Cursor 等主流工具。
- [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) — ⭐68,069。在 LLM 之前压缩工具输出、日志与 RAG 分块，JSON 场景可减少 60-95% tokens，提供库、代理与 MCP 服务器三种形态。
- [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) — ⭐59,134。极速搜索 API 引擎，为站点与应用提供 AI 驱动的混合搜索能力。

### 🤖 AI 智能体/工作流

- [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) — ⭐0（今日 +1,113）。拥有 165 个经过验证的 Agent Skills 与 100+ 科学数据库，覆盖生物、化学、医学与药物发现，兼容 Cursor、Claude Code、Codex 等主流编辑器，已服务全球 190,000+ 科学家。
- [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) — ⭐0（今日 +907）。清华大学出品的开源多智能体交互式课堂，一键获得沉浸式多 Agent 学习体验。
- [affaan-m/ECC](https://github.com/affaan-m/ECC) — ⭐244,498。Agent 运行时性能优化系统，涵盖技能、本能、记忆、安全与研究优先开发，适配 Claude Code、Codex、Cursor 等主流工具链。
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) — ⭐238,341。Nous Research 出品的可成长型 Agent 框架，强调随使用者持续演进的能力。
- [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) — ⭐76,676。为 AI Agent 提供互联网"眼睛"，一条 CLI 零 API 费用读取 Twitter、Reddit、YouTube、GitHub、B站与小红书。
- [browser-use/browser-use](https://github.com/browser-use/browser-use) — ⭐111,718。让网站对 AI Agent 可访问，轻松实现在线任务自动化。
- [livekit/agents](https://github.com/livekit/agents) — ⭐0（今日 +131）。构建实时语音 AI Agent 的框架，支持音频与视频交互。

### 📦 AI 应用

- [every-app/open-seo](https://github.com/every-app/open-seo) — ⭐0（今日 +517）。Semrush 与 Ahrefs 的开源替代品，提供 SEO 分析与优化能力。
- [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) — ⭐118,720。利用 AI 大模型与自动化工作流，根据主题或关键词一键生成高清短视频。
- [santifer/career-ops](https://github.com/santifer/career-ops) — ⭐69,389。开源 AI 求职助手：扫描招聘网站、1-5 分结构化评估、定制简历、追踪申请进度，完全本地运行。
- [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) — ⭐64,313。LLM 驱动的多市场股票智能分析系统，支持多源行情、实时新闻、决策看板与自动推送，可零成本定时运行。
- [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) — ⭐0（今日 +38）。中国专利 Agent 技能：专利点挖掘、交底书（发明/实用/外观）自动编写、政策嗅探与审查答复辅助。

### 🧠 大模型/训练

- [ollama/ollama](https://github.com/ollama/ollama) — ⭐179,771。本地推理引擎，现已支持 Kimi-K2.6、GLM-5.2、MiniMax、DeepSeek、Qwen、Gemma 等最新模型，一行命令开箱即用。
- [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) — ⭐198,043。经典开源机器学习框架。
- [huggingface/transformers](https://github.com/huggingface/transformers) — ⭐164,630。模型定义与训练框架，支持文本、视觉、音频与多模态模型。
- [pytorch/pytorch](https://github.com/pytorch/pytorch) — ⭐102,674。动态神经网络框架，GPU 加速深度学习核心工具。
- [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) — ⭐104,045。从零逐步用 PyTorch 实现 ChatGPT 类 LLM 的教学项目。
- [jingyaogong/minimind](https://github.com/jingyaogong/minimind) — ⭐55,282。只需 2 小时即可从零训练 64M 参数 LLM 的轻量教学项目。
- [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) — ⭐61,088。YOLO26/11/8 目标检测、实例分割、姿态估计一站式工具包。

### 🔍 RAG/知识库

- [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) — ⭐112,491。将任意代码库与文档转化为可查询的知识图谱，每条边都有解释，无需向量数据库。
- [abhigyanpatwari/GitNexus](https://github.com/abhigyanpatwari/GitNexus) — ⭐0（今日 +181）。浏览器端零服务器代码智能引擎，拖入 Git 仓库即生成交互式知识图谱与内置 Graph RAG Agent。
- [open-webui/open-webui](https://github.com/open-webui/open-webui) — ⭐150,405。用户友好型 AI 界面，支持 Ollama 与 OpenAI API。
- [langchain-ai/langchain](https://github.com/langchain-ai/langchain) — ⭐145,280。Agent 工程平台，RAG 应用开发的事实标准。
- [infiniflow/ragflow](https://github.com/infiniflow/ragflow) — ⭐89,641。领先的开源 RAG 引擎，融合 Agent 能力为 LLM 构建上下文层。
- [mem0ai/mem0](https://github.com/mem0ai/mem0) — ⭐64,352。AI Agent 通用记忆层，跨会话持久化上下文。
- [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) — ⭐92,623。跨会话持久化上下文工具，压缩 Agent 对话历史并在未来会话注入相关内容。
- [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) — ⭐135,222。收录 100+ 个 AI Agents、Agent Skills 与 RAG 应用的开源合集。


## 三、趋势信号分析

**Agent Skills 生态呈现爆发式增长**是今日最强烈的信号。scientific-agent-skills（今日 +1,113）、archify（+3,730）、last30days-skill（+272）、patent-disclosure-skill（+38）等多款"技能包"型项目同日登榜，叠加 Graphify、caveman、claude-mem 等已具备高 star 基数的 Skills 项目，表明 Agent 从"框架之争"进入"技能分发"时代，开发者正在通过标准化技能层快速复用 Agent 能力。兼容 Cursor、Claude Code、Codex 等工具已成为新项目的基本配置，Agent 互操作性标准初步形成。

**知识图谱 + Graph RAG 首度批量登榜**值得关注。GitNexus 主打浏览器端零服务器构建代码知识图谱，Graphify 强调确定性 AST 解析替代向量存储，两个项目同日出现在不同数据源中，暗示以图结构替代向量检索正在成为 RAG 技术的第三条路径，尤其适用于代码理解和结构化文档场景。此外，**免费 LLM API 聚合层**（freellmapi）与**token 压缩层**（headroom）的走红，反映了社区在模型调用成本上的务实取向。


## 四、社区关注热点

- **Agent Skills 标准与分发** — scientific-agent-skills 与 archify 的爆红表明，标准化的、可跨工具复用的 Agent 技能正在成为新的增长极，建议关注 open Agent Skills 标准的演进生态。
- **代码知识图谱与 Graph RAG** — GitNexus 与 Graphify 双双发力，浏览器端零服务器分析与确定性图解析有望成为代码智能的新范式。
- **免费 LLM 聚合网关** — freellmapi 以 74 亿 tokens/月的免费额度吸引大量开发者，低成本模型路由与故障转移正在成为工具链重要组件。
- **AI for Science 落地** — scientific-agent-skills 获得 190,000+ 科学家使用，科学数据库与 Agent 技能的结合正在为药物发现、化学合成等场景提供可落地的开源方案。
- **科学智能与多智能体教育** — 清华 OpenMAIC 单日涨星 907，多智能体交互式学习环境为 AI 教育提供了沉浸式新形态，值得关注其教学效果与后续扩展。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*