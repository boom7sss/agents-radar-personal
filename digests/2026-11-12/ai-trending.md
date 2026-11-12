# AI 开源趋势日报 2026-11-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-12 18:21 UTC

---

# AI 开源趋势日报（2026-11-12）

## 1. 今日速览

今日 AI 开源注意力高度集中在**编码智能体（Coding Agent）配套工程**上：技能（skills）、记忆（memory）、性能优化 harness、Token 压缩等“围绕 Agent 的中间层”同时霸榜，说明社区关注点已从“做一个 Agent”转向“把 Agent 调得更好用、更省钱、更可靠”。模型侧虽有 llama.cpp、TensorFold 等推理工程持续吸星，但热度明显弱于应用与工作流层。值得注意的新信号是 **meta/astryx** 这类“为 Agent 准备的设计系统”首次进入热榜前列（+1,789），以及 OpenAI 官方下场发布安全 CLI **codex-security**，显示 Agent 生态开始补齐安全与前端交付两块短板。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[openai/codex-security](https://github.com/openai/codex-security)** [TypeScript] ⭐总数据未提供（+663 today）—— OpenAI 官方的 Codex 安全 CLI 与 TypeScript SDK，用于发现、验证并修复安全漏洞，是今日唯一由模型厂商直接发布的开发工具，值得第一时间评估。
- **[ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp)** [C++] ⭐总数据未提供（+287 today）—— C/C++ 本地 LLM 推理的事实标准，持续稳居热榜，是低成本私有化部署的默认底座。
- **[ashhart/TensorFold](https://github.com/ashhart/TensorFold)** [Zig] ⭐总数据未提供（+94 today）—— 面向 Metal / CUDA / Vulkan 的 LLM 推理引擎，用 Zig 编写、跨后端，是今日技术栈上较新颖的一个信号。
- **[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)** [TypeScript] ⭐总数据未提供（+151 today）—— Qwen 官方开源、运行在终端里的 AI 编码智能体，厂商自研 CLI 继续增多。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,909 —— 文本、视觉、音频、多模态模型的模型定义框架，覆盖推理与训练，仍是生态基座。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐186,793 —— 一条命令拉起 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的本地运行方案。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,578 / **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,456 —— 两大主流训练/推理框架，作为长期基础设施参考。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐301,876 —— Agent harness 性能优化系统，覆盖 skills、instincts、memory、security，面向 Claude Code / Codex / Opencode / Cursor，是“Agent 调优层”中体量最大的项目。
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** [JavaScript] ⭐总数据未提供（+812 today）—— 为 AI 编码智能体提供生产级工程技能包，今日热榜高增，反映“skills 化”正成为 Agent 能力分发的主流形态。
- **[CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)** [TypeScript] ⭐总数据未提供（+291 today）—— 开源 AI“数字同事”，每个 Agent 拥有独立浏览器、文件与工具，动作先决策后记录，兼容任意 AG-UI Agent，主打可审计性。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐262,920 —— 强调“随你成长”的 Agent 项目，属于高星长期项目。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,407 —— 自我定位为“Agent 工程平台”，是工作流编排的传统入口。
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** [Python] ⭐188,010 —— 自主 Agent 的早期标杆，仍是生态参照物。
- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** [TypeScript] ⭐113,346 —— 用于“在工作中管理 Agent”的开源应用，指向 Agent 运维/治理场景。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐120,836 —— AI 浏览器智能体库，并提供托管 Agent API。

### 📦 AI 应用（具体产品、垂直场景）

- **[meta/astryx](https://github.com/meta/astryx)** [TypeScript] ⭐总数据未提供（+1,789 today）—— 今日新增 stars 最高的项目：一个完全可定制、且“为 Agent 就绪”的开源设计系统，把 Agent 产出直接落到前端交付层。
- **[Alishahryar1/free-claude-code](https://github.com/Alishahryar1/free-claude-code)** [Python] ⭐总数据未提供（+461 today）—— 在终端、IDE、手机、浏览器中统一调用 Claude Code、Codex 等 10+ harness 的免费入口，主打多 harness 多模型与浏览器原生会话。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐82,171 —— 开源求职 Agent：扫描招聘板、按简历打分、定制 ATS 友好简历与求职信，本地运行于 Codex / OpenCode 或作为 Claude Code 插件。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐71,056 —— LLM 驱动的多市场股票分析系统，含决策看板与自动推送，支持零成本定时运行。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐76,275 —— 将文档或主题转成原生 PowerPoint（原生形状、转场动画、图表、配音），支持自定义模板。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐142,831 —— 用 AI 大模型与自动化工作流从主题一键生成高清短视频。
- **[openbq-org/OpenBB](https://github.com/openbq-org/OpenBB)** [Python] ⭐75,364 —— 面向分析师、量化与 AI Agent 的开放数据平台。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,219 —— 本地优先的 Agent 体验产品，强调“自有智能、不外租”。

### 🧠 大模型/训练（模型权重、训练框架、微调、学习路径）

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐108,302 —— 用 PyTorch 从零实现类 ChatGPT LLM 的分步教程，是最主流的自研入门路径。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐78,565 —— “学 AI 工程、动手构建、交付他人”的系统化学习项目。
- **[microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners)** [Jupyter Notebook] ⭐92,150 —— 12 周 26 课的经典机器学习入门课程。
- **[datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)** [Python] ⭐86,846 —— 中文《从零开始构建智能体》原理与实践教程，填补中文 Agent 教学材料。
- **[Developer-Y/cs-video-courses](https://github.com/Developer-Y/cs-video-courses)** ⭐84,823 —— 计算机科学视频课程清单，其中包含 ML 相关课程。
- **[tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract)** [C++] ⭐77,485 —— 开源 OCR 引擎，仍是文档/图像数据流水线的基础组件。

### 🔍 RAG/知识库（向量检索、知识管理、上下文工程）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐201,226 —— 为 AI Agent 提供网页等外部数据抓取，是 RAG/Agent 数据入口的老牌高星项目。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐146,628 —— 把代码库、文档、SQL schema、配置、PDF 转成可查询知识图谱；本地确定性 AST 解析、每条边可解释、**不用向量库**，是图谱路线的明确反信号。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐116,496 —— 跨会话持久上下文：捕获 Agent 会话、AI 压缩后回注，兼容 Claude Code、Codex、Gemini、Hermes 等多个 harness。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,093 —— 自称已从 RAG 引擎演进为“Agent 原生数据库/上下文基础设施”。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,879 —— 面向 AI Agent 的“记忆层”，可直接接入的生产级记忆基础设施。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,274 —— Apache-2.0 爬虫，支撑托管版抓取/抽取/搜索 API（每月 1,000 免费额度，可自托管）。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐79,466 —— 在上下文进入 LLM 前压缩工具输出、日志、文件与 RAG chunk，宣称编码 Agent 省 20% token、JSON 省 60–95%，提供库/代理/MCP server。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐111,305 —— 一个 CLI 让 Agent 读取并搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书，零 API 费用。

## 3. 趋势信号分析

今日最清晰的爆发点是**“Agent 中间件”**：ECC 的 harness 优化、agent-skills 的技能包、claude-mem 的持久记忆、headroom 与 caveman 的 token 压缩，构成一条完整的“让 Agent 更好用、更省 token”的工程链路，且都明确标注支持 Claude Code / Codex / OpenCode 等多 harness——单模型独占期正在让位于跨 harness 兼容。第二个信号是**上下文与检索路线分化**：graphify 明确宣称“不用向量库”，以 AST + 知识图谱 + 可解释边替代向量检索，ragflow 则自我重定位为“上下文基础设施”，RAG 概念正向 context engineering 迁移。第三是**厂商官方工具与安全层入场**：openai/codex-security 与 meta/astryx 同时出现，说明 Agent 生态开始补齐安全审计与前端交付两块此前由社区自填的空白。技术栈上，Zig 编写的 TensorFold 登榜较为少见；应用侧则集中在求职、股票、PPT、短视频等可直接变现的垂类。与行业事件的关联方面，材料中未提供具体大模型发布信息，仅能从 ollama 支持的模型清单（Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma）侧面看出开源模型供给持续丰富。

## 4. 社区关注热点

- **[openai/codex-security](https://github.com/openai/codex-security)**：模型厂商官方发布的安全 CLI + SDK，Agent 生成代码的漏洞发现与修复有望成为标准化能力，建议尽早接入 CI 流程评估。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：以确定性 AST 解析 + 可解释知识图谱替代向量库，若你的 RAG 存在召回不可解释、chunk 割裂问题，这是值得对照实验的另一条路线。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** 与 **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)**：两者都以“减少 token”为核心卖点（分别宣称 JSON 省 60–95%、整体省 65%），直接对应 Agent 运行成本，建议用真实负载验证其“same answers”承诺。
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** + **[affaan-m/ECC](https://github.com/affaan-m/ECC)**：技能包与 harness 优化层正在成为 Agent 能力分发的事实标准，跨 harness 兼容性是选型关键。
- **[meta/astryx](https://github.com/meta/astryx)**：今日新增 stars 最高（+1,789），“agent ready 的设计系统”把 Agent 输出与前端交付打通，是应用层值得关注的新品类。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*