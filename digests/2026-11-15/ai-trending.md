# AI 开源趋势日报 2026-11-15

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-15 17:13 UTC

---

# AI 开源趋势日报 · 2026-11-15

## 1. 今日速览

今日热榜的核心叙事是「**Agent 技能化（Skills）**」：Google、NVIDIA、腾讯、阿里巴巴同日有多款与 Agent Skills、Agent 编排、Agent 评测相关的项目登榜，说明社区关注点正从「造 Agent」转向「驯 Agent」。趋势侧，Claude Code / Codex / Cursor 已成为事实上的技能运行宿主，围绕它们的上下文压缩、持久记忆、代码图谱类项目集中出现。同时，Agent 与前端、浏览器、办公套件的协议层和工具层正在打通（AG-UI、Chrome DevTools MCP、Univer）。传统的模型框架（TensorFlow、PyTorch、scikit-learn）依然庞大但缺乏新增热度，流量明显向 Agent 工程侧倾斜。

> 说明：Trending 榜单中 `GoogleChrome/modern-web-guidance-src` 是面向 Agent 的 Web 最佳实践知识库，与 AI 弱相关（属于 Agent 输入资料而非 AI 工具），未纳入分类，仅在趋势中提及。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[ggml-org/ggml](https://github.com/ggml-org/ggml)** [C++] ⭐总量未披露（+53 today）
  轻量张量库，是众多本地推理栈的底层计算基座；今日新增不高，但属于长期基础设施型项目。

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** [TypeScript] ⭐总量未披露（+718 today）
  把 Chrome DevTools 以 MCP 形式暴露给编码 Agent，让 Agent 能直接调试浏览器；由 Chrome 官方团队出品，是「Agent 接入开发工具链」的标志性信号。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐79,715 [topic:rag]
  在工具输出、日志、RAG 分块进入 LLM 前压缩 token（编码 Agent 约省 20%，JSON 省 60–95%），以库 / 代理 / MCP Server 三种形态提供，直击 Agent 成本痛点。

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐120,391 [topic:llm]
  通过「穴居人式表达」为编码 Agent 削减约 65% token 的技能 + 代理；与 headroom 同属「token 经济」赛道，今日主题搜索中热度靠前。

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** [Python] ⭐总量未披露（+205 today）
  多层级 Agent 技能评测框架，含质量门禁、语义重叠检测、合成评测集生成与实时 Agent 行为评测；为 Skills 生态补上「质量度量」这一环。

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,610 [topic:ml]
  老牌机器学习框架，体量仍是主题搜索中最大者之一，但今日无新增热度，代表存量基础设施。

### 🤖 AI 智能体/工作流

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐303,662 [topic:llm]
  Agent harness 性能优化系统，覆盖技能、本能、记忆、安全与研究工作流，兼容 Claude Code、Codex、Opencode、Cursor；是今日主题搜索中 star 总量最高的项目。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐263,585 [topic:llm]
  主打「与你一起成长」的 Agent 框架，来自模型侧团队 Nous Research，体现模型方下场做 Agent 运行时的趋势。

- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)** [TypeScript] ⭐总量未披露（+393 today）
  Agent–User Interaction 协议，把 Agent 带入前端应用；属于 Agent 交互层的标准化尝试，今日登榜值得关注。

- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)** [Go] ⭐总量未披露（+484 today）
  自托管编码 Agent 交付工作流，可编排 CodeBuddy、Codex、Claude Code，内置脚本与人工审批关卡；大厂把「Agent 交付流水线」开源化。

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** [TypeScript] ⭐总量未披露（+248 today）
  面向 Stitch MCP Server 的 Agent Skills 库，遵循 Agent Skills 开放标准，兼容 Antigravity、Gemini CLI、Claude Code、Cursor；Google 在技能标准上的落子。

- **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)** [TypeScript] ⭐总量未披露（+860 today）
  面向 Agent 的工作空间：规划、标注、评审代码并把反馈一键回传给 Agent；今日 Trending 新增第二高，反映「人机协作回路」需求旺盛。

- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [Python] ⭐80,439 [topic:ai-agent]
  从 0 到 1 手写一个 nano 版 Claude Code 式 agent harness，适合理解 Agent 运行时原理。

- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** [TypeScript] ⭐114,089 [topic:llm]
  用于「在工作中管理 Agent」的开源应用，定位 Agent 的团队级控制台。

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** [Python] ⭐总量未披露（+221 today）
  Claude Code 技能包：82 个技能、15 个 slash 命令、覆盖 24 类漏洞的 681 条披露报告模式，面向漏洞挖掘与红队；垂直安全场景的技能化样本。

### 📦 AI 应用

- **[dream-num/univer](https://github.com/dream-num/univer)** [TypeScript] ⭐总量未披露（+1041 today）
  开源办公套件 SDK（编辑、计算、协作、文件处理），明确面向「人与 AI Agent」共建的 AI 办公场景；今日 Trending 新增 stars 最高。

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** [Go] ⭐总量未披露（+688 today）
  阿里规模化验证的代码评审工具：确定性流水线 + LLM Agent 混合架构，行级精确评论，内置 NPE、线程安全、XSS、SQL 注入等多语言规则，兼容 OpenAI 与 Anthropic。

- **[tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills)** [Python] ⭐总量未披露（+707 today）
  面向股票投资者与交易员的 Claude Code 技能集：行情分析、技术图表、经济日历、选股器与策略开发。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐82,725 [topic:ai-agent]
  开源 AI 求职 Agent：扫描职位、按简历 1–5 分打分、定制 ATS 友好简历与求职信；可跑在 Codex、OpenCode 等 CLI 或作为 Claude Code 插件。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐77,141 [topic:ai-agent]
  把文档或主题转成原生 PowerPoint（原生形状、转场、动画、图表表格、按备注生成旁白、支持自有模板）。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐72,441 [topic:ai-agent]
  LLM 驱动的多市场股票分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐121,093 [topic:llm]
  AI 浏览器 Agent 的开源 Python 库，并提供托管 Agent API 与隐匿浏览器云服务。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐143,754 [topic:llm]
  用大模型 + 自动化工作流，按主题或关键词一键生成高清短视频。

### 🧠 大模型/训练

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,991 [topic:llm]
  文本、视觉、音频与多模态模型的定义框架，兼顾推理与训练；仍是模型层最重要的入口。

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐187,065 [topic:llm]
  本地模型运行入口，支持 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等；其模型列表变化可视为本地推理侧的「风向标」。

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,512 [topic:ml]
  训练侧主干框架，GPU 加速与动态图能力使其长期占据训练默认选项。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐108,446 [topic:ml]
  用 PyTorch 从零实现类 ChatGPT 模型的分步教程，是模型原理学习的事实标准之一。

- **[keras-team/keras](https://github.com/keras-team/keras)** [Python] ⭐64,425 · **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** [Python] ⭐68,185 [topic:ml]
  经典深度学习与机器学习库，体量稳定，今日无新增热度。

- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐79,026 [topic:ml]
  AI 工程化学习路径（学、建、交付），反映「AI 工程」作为独立技能栈的成型。

### 🔍 RAG/知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐148,226 [topic:rag]
  把代码库、文档、SQL schema、配置与 PDF 转成可查询知识图谱的 `/graphify` 技能，本地确定性 AST 解析、每条边可解释、**不使用向量库**；代表「图谱路线 vs 向量路线」的分化。

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐117,303 [topic:rag]
  跨会话持久上下文：捕获 Agent 会话内容、用 AI 压缩、再把相关上下文注入后续会话，兼容 Claude Code、Codex、Gemini、Hermes、Copilot、OpenCode 等。

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,561 [topic:rag]
  自我定位为「Agent 工程平台」，是与 RAG 生态绑定的老牌框架。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,189 [topic:rag]
  自称「Agent 原生数据库」，从 RAG 引擎演进为上下文基础设施。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,303 [topic:rag]
  本地优先的 Agent 体验与知识管理一体化产品。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,392 · **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐201,990 [topic:llm]
  面向 AI Agent 的网页抓取/抽取层，是 RAG 与 Agent 的数据入口；crawl4ai 提供托管 API 与 Apache-2.0 可自托管爬虫。

- **[datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)** [Python] ⭐87,038 [topic:rag]
  《从零开始构建智能体》中文教程，原理与实践并重。

---

## 3. 趋势信号分析

今日最集中的爆发点在「**Agent Skills 工程化**」。Trending 前 12 中有 6 个直接围绕编码 Agent 的技能、编排、评审或调试：Google 的 stitch-skills 押注 Agent Skills 开放标准，NVIDIA 的 SkillEvaluator 补上技能质量度量，腾讯 LoopForge 做交付编排，阿里 open-code-review 做混合评审，plannotator 做人类反馈回路，Chrome DevTools MCP 让 Agent 获得浏览器调试能力。这说明竞争焦点已从「模型能力」下移到「harness 与技能生态」。

第二个信号是 **token 经济与新检索路线**：caveman、headroom、claude-mem 从压缩与记忆两个方向压低上下文成本，而 graphify 明确「不用向量库」、用确定性 AST 构建可解释知识图谱，显示 RAG 技术栈出现路线分化。

新兴登榜方向包括 Agent 交互协议（AG-UI）、Agent 可观测/管理台（paperclip）、以及面向 Agent 的办公套件 SDK（Univer）。与近期模型侧动态的关联可从 ollama 支持列表（Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma）间接看出：开源模型供给充裕，社区注意力因此转向如何把这些模型装进可交付的 Agent 工作流。传统训练框架今日无新增热度，进一步印证流量向工程侧迁移。

---

## 4. 社区关注热点

- **NVIDIA/SkillEvaluator**：Skills 数量爆发后，「技能质量如何评测」成为刚需，这是目前少见的评测侧工具，适合作为技能上架前的门禁环节。
- **ag-ui-protocol/ag-ui**：Agent 与前端的交互协议若形成标准，将影响所有「Agent 嵌入产品」的集成方式，值得提前跟进规范。
- **Tencent/LoopForge + 阿里 open-code-review**：两家大厂同日开源编码 Agent 的编排与评审层，说明「Agent 参与代码交付」已进入需要审批关卡与确定性规则兜底的阶段。
- **Graphify-Labs/graphify**：不依赖向量库、强调可解释边的代码知识图谱，是评估 RAG 替代路线的低成本试点。
- **headroomlabs-ai/headroom / claude-mem**：上下文压缩与跨会话记忆直接对应 Agent 的账单与体验，二者可组合使用，落地收益明确。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*