# AI 开源趋势日报 2026-11-14

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-14 16:37 UTC

---

# AI 开源趋势日报（2026-11-14）

## 1. 今日速览

今日 AI 开源生态的核心信号是"**Agent 配套基础设施**"全面爆发：从 Chrome DevTools 官方出品的 MCP 工具、阿里开源的企业级代码审查 Agent、腾讯的编码 Agent 工作流编排器，到 GoogleChrome 维护的"给编码 Agent 投喂最新 Web 最佳实践"仓库，编码场景的 Agent 周边工具占据了 Trending 的半壁江山。同时，**Token 经济学**成为显性话题——caveman（削减 65% token）与 headroom（压缩工具输出）共同指向上下文成本优化正从"技巧"变为"刚需"。传统阵营（TensorFlow、Transformers、LangChain、Ollama）依然稳居主题搜索榜首，说明社区基本盘稳固；而应用侧的垂直化特征明显，金融交易、求职、PPT 生成、股票分析等场景化项目快速聚集星标。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** [TypeScript] ⭐0（+673 today）
  Chrome DevTools 官方为编码 Agent 提供的 MCP 接口，让 Agent 能够直接操控浏览器调试能力；官方出品意味着浏览器自动化 Agent 的基础设施标准化开始启动。
- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)** [Go] ⭐0（+101 today）
  腾讯开源的编码 Agent 交付工作流，可编排 CodeBuddy、Codex、Claude Code，并内置脚本与人工审批门禁，指向"Agent 进入生产环境必须有可控闸门"这一实际痛点。
- **[ashhart/TensorFold](https://github.com/ashhart/TensorFold)** [Zig] ⭐0（+188 today）
  面向 Metal、CUDA、Vulkan 的 LLM 推理引擎，用 Zig 编写；小众语言与异构后端的组合是今日榜单中最有"技术尝鲜"意味的首次登榜项目。
- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)** [TypeScript] ⭐0（+9 today）
  Agent-User Interaction Protocol，把 Agent 接入前端应用的交互协议层，新增 stars 不高但属于协议栈型项目，值得长期跟踪。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐186,958 [topic:llm]
  本地模型运行的事实标准入口，现已覆盖 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等主流模型，是个人与团队本地推理的首选底座。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,965 [topic:llm]
  文本、视觉、音频与多模态模型的统一定义框架，同时覆盖推理与训练，仍是模型层工作绕不开的核心依赖。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)** [TypeScript] ⭐0（+412 today）
  面向 Agent 协作的工作空间，支持塑形、决策、规划、标注、代码审查，并可一键把反馈回传给 Agent；"Human-in-the-loop 界面层"是当前 Agent 落地最缺的一环。
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** [Go] ⭐0（+897 today）
  阿里开源的企业级代码审查工具，采用"确定性流水线 + LLM Agent"混合架构，支持行级精确评论与多语言规则集（NPE、线程安全、XSS、SQL 注入），兼容 OpenAI 与 Anthropic；今日 Trending 中 AI 项目新增 stars 最高者。
- **[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)** [TypeScript] ⭐0（+462 today）
  通义千问团队开源的终端内 AI 编码 Agent，是模型厂商亲自下场做 CLI Agent 的代表。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐263,331 [topic:ai-agent]
  主打"随你一起成长"的 Agent 项目，体量已达到极高水平，是开源 Agent 框架阵营的重量级玩家。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐121,002 [topic:llm]
  AI 浏览器 Agent 的开源 Python 库，并提供托管 Agent API 与隐身浏览器服务，是 Web 自动化 Agent 的主流方案。
- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** [TypeScript] ⭐113,864 [topic:llm]
  用于"在工作中管理 Agent"的开源应用，切中多 Agent 并行后团队缺少统一管理面板的空档。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐82,523 [topic:ai-agent]
  开源 AI 求职 Agent，扫描职位板、按简历打分、定制 ATS 友好简历与求职信并生成面试准备；本地运行于 Codex、OpenCode 或作为 Claude Code 插件使用。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[tradermonty/claude-trading-skills](https://github.com/tradermonty/claude-trading-skills)** [Python] ⭐0（+556 today）
  面向股票投资者与交易员的 Claude Code skills 集，覆盖行情分析、技术图表、经济日历、筛选器与策略开发；"Skill 包"作为分发形态正在被快速复制到垂直行业。
- **[dream-num/univer](https://github.com/dream-num/univer)** [TypeScript] ⭐0（+495 today）
  开源 Office SDK，把编辑、计算、协作与文件处理能力嵌入产品，明确面向"人与 AI Agent"共用；办公套件的 Agent 原生化是一个新叙事。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐76,815 [topic:ai-agent]
  将文档或主题转为真正的原生 PowerPoint，保真形状、转场、动画、数据图表、演讲备注音频与自定义模板；解决的是"AI 生成 PPT 不可编辑"的长期痛点。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐72,184 [topic:ai-agent]
  LLM 驱动的多市场股票分析系统，含多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行；中文社区金融 Agent 的代表。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐143,517 [topic:llm]
  输入主题或关键词即可一键生成高清短视频的全自动 AI 工作流，是内容生产自动化方向的常青项目。
- **[openbq-org/OpenBB](https://github.com/openbq-org/OpenBB)** [Python] ⭐75,419 [topic:ml]
  面向分析师、量化与 AI Agent 的开放数据平台，为金融 Agent 提供可靠数据层。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,596 [topic:ml]
  面向所有人的开源机器学习框架，仍是工业界部署与教学最广泛使用的底座之一。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,483 [topic:ml]
  Python 张量与动态神经网络框架，具备强 GPU 加速能力，是当前模型研发的默认选择。
- **[keras-team/keras](https://github.com/keras-team/keras)** [Python] ⭐64,427 [topic:ml]
  "Deep Learning for humans"，高层 API 定位清晰，适合快速搭建与教学。
- **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** [Python] ⭐68,171 [topic:ml]
  经典机器学习工具库，在 AI 应用的数据预处理与基线建模环节仍不可替代。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐108,403 [topic:ml]
  用 PyTorch 从零逐步实现类 ChatGPT 的 LLM，是当前最受欢迎的大模型原理实践教程之一。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐147,589 [topic:rag]
  将任意代码库连同文档、SQL schema、配置与 PDF 转为可查询知识图谱，提供 Claude Code、Cursor、Codex、Gemini CLI 的 `/graphify` skill；采用本地确定性 AST 解析、每条边可解释、不依赖向量库，是对"向量检索万能论"的明确反命题。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐117,017 [topic:rag]
  为每个 Agent 提供跨会话持久上下文：捕获会话行为、用 AI 压缩、再把相关上下文注入后续会话，兼容 Claude Code、Codex、Gemini、Hermes、Copilot、OpenCode 等；Agent 记忆层正在成为独立品类。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,148 [topic:rag]
  自称"Agent 原生数据库"，从 RAG 引擎演进为上下文基础设施，是 RAG 向 Context Infra 概念迁移的代表。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐79,645 [topic:rag]
  在工具输出、日志、文件与 RAG 分块进入 LLM 前进行压缩：编码 Agent 减少约 20% token，JSON 场景减少 60–95%，且答案保持一致；提供库、代理与 MCP server 三种形态。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,276 [topic:rag]
  本地优先的 Agent 体验一体化平台，主打"拥有而非租用你的智能"，适合数据敏感场景自部署。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,347 [topic:rag]
  面向 AI Agent 的爬取、抽取与搜索 API，仓库本体是 Apache-2.0 爬虫、可自托管，同时提供免费额度的托管云服务。
- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐161,157 [topic:llm]
  在统一协作空间中构建 Agentic 工作流与 RAG 流水线，支持云、VPC 与自托管，覆盖从原型到生产的完整路径。

## 3. 趋势信号分析

今日最突出的爆发点集中在**编码 Agent 的配套工具链**：plannotator（人机协作界面）、chrome-devtools-mcp（浏览器能力）、open-code-review（代码审查）、LoopForge（交付编排）、modern-web-guidance-src（知识投喂）与 qwen-code（终端 Agent）构成了一条完整链路——社区关注点已从"造 Agent"转向"让 Agent 在生产中可控、可审查、可交付"。第二个明确信号是**Token 成本优化成为显性品类**：caveman 以"原始人说话"削减 65% token，headroom 从工具输出侧压缩，二者在 Trending 与主题搜索双榜同时出现，说明上下文经济学已从优化技巧升级为独立工具层。技术栈上，Zig 编写的异构推理引擎 TensorFold 首次登榜，Rust/Go 在基础设施层的占比继续提升。协议层也出现新面孔：AG-UI 试图标准化 Agent 与前端应用的交互。从行业关联看，模型厂商（阿里、腾讯、Qwen）亲自下场发布 Agent 工具，与 Claude Code、Codex、Gemini CLI 生态的"多 CLI 并存"格局相呼应——Agent 工具正围绕主流编码 CLI 形成插件与 skill 的分发网络，而非各自为政。

## 4. 社区关注热点

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — 今日新增 +897 stars，AI 项目中最高的增幅；"确定性规则 + LLM Agent"的混合架构和阿里规模背书，最有可能被企业直接引入 CI 流程。
- **[ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp)** — 浏览器厂商官方维护的 MCP 工具，意味着浏览器自动化 Agent 的接口将有稳定维护方，值得作为长期基础设施押注。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) / [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** — 两个方向相反的 token 压缩方案同日出圈，建议实测对比：前者结构化压缩、后者风格化改写，成本收益差异可能很大。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — "不用向量库、每条边可解释"的知识图谱路线，为代码库理解与 RAG 提供了可验证的替代方案，适合对检索可解释性有要求的团队。
- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)** — 把"人工审批门禁"做进编码 Agent 交付流程，是多 Agent 上生产前绕不开的治理问题，建议优先评估其与现有 CLI 的集成成本。

> 说明：Trending 榜单中 uptime-kuma、we-promise/sure、airgorah、Veyra-NRVideo 等与 AI/ML 无明确关联，已按要求略去；modern-web-guidance-src 因定位为"为编码 Agent 提供最新 Web 最佳实践"，归入 Agent 工具链语境提及但未单列。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*