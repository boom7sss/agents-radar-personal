# AI 开源趋势日报 2026-09-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-26 13:23 UTC

---

# AI 开源趋势日报（2026-09-26）

## 1. 今日速览

今日热榜呈现明显的「智能体基础设施」集中爆发：Agent 框架、Agent 记忆与 Agent 外壳（Harness）类项目占据绝大部分新增 stars，`paperclipai/paperclip`（+2589）与 `vectorize-io/hindsight`（+2152）分别以「管理工作中智能体」和「会学习的 Agent 记忆」登顶。与此同时，「Token 经济学」成为清晰的新兴信号——`caveman`、`headroom`、`claude-mem` 等项目均以压缩上下文、削减 token 为核心卖点。模型优化侧，NVIDIA `Model-Optimizer` 登榜，指向量化/蒸馏/推测解码等推理降本技术仍在持续升温。教育与「从零构建」类项目（`ai-engineering-from-scratch`、`hello-agents`、`minimind`）同样活跃，反映开发者入场需求旺盛。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** [Python] ⭐0（+354 today）
  NVIDIA 统一的 SOTA 模型优化库，涵盖量化、蒸馏、剪枝、NAS、推测解码，面向 TensorRT-LLM、vLLM 等部署框架压缩模型、优化推理速度——今日新登 Trending，代表推理降本方向的官方级工具。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐200,357（+31 today）
  经典开源机器学习框架，长期盘踞 ml 主题，属生态基石型项目。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐103,350 [topic:ml]
  张量与动态神经网络框架，GPU 加速能力强，是当前训练与研究的主流底座。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐181,756 [topic:llm]
  一条命令本地运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型，是本地推理的默认入口。
- **[mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp)** [TypeScript] ⭐0（+143 today）
  面向移动自动化与抓取的 MCP Server，覆盖 iOS、Android、模拟器与真机——MCP 协议向端侧设备延伸的代表。
- **[zhaoxuya520/reverse-skill](https://github.com/zhaoxuya520/reverse-skill)** [PowerShell] ⭐0（+409 today）
  AI 驱动的逆向/渗透/安全技能路由包，支持 Claude Code、Kiro、Cursor、Cline 等 AI 编码客户端，含按需工具链自举与自进化经验库。
- **[block/buzz](https://github.com/block/buzz)** [Rust] ⭐0（+175 today）
  一个「蜂巢思维」通信平台，属智能体协作通信基础设施方向（今日新登榜）。
- **[anthropics/claude-code-action](https://github.com/anthropics/claude-code-action)** [TypeScript] ⭐0（+15 today）
  Anthropic 官方 Claude Code 的 GitHub Action，用于把编码智能体接入 CI/PR 流程。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐121,567 [topic:llm]
  把代码库连同文档、SQL schema、配置、PDF 转成可查询知识图谱，为 Claude Code/Cursor/Codex/Gemini CLI 提供本地确定性 AST 解析，不走向量库。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐107,902 [topic:llm]
  面向编码智能体的技能+代理，通过「像原始人一样说话」削减 65% token。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐73,846 [topic:rag]
  在内容进入 LLM 前压缩工具输出、日志、文件与 RAG 分块，编码智能体省 20% token、JSON 省 60–95%，提供库/代理/MCP server。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐57,945（+828 today）[topic:ml]
  「学它、建它、交付它」的 AI 工程从零实践教程，同时出现在 Trending 与 ml 主题。
- **[Developer-Y/cs-video-courses](https://github.com/Developer-Y/cs-video-courses)** ⭐83,560 [topic:ml]
  计算机科学视频课程清单（含 AI/ML 课程），属泛学习资源。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** [TypeScript] ⭐0（+2589 today）
  号称「人人都在用的开源应用，用于在工作中管理智能体」——今日 Trending 第一，Agent 管理/编排层热度最高。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐267,749 [topic:llm]
  Agent 外壳（Harness）性能优化系统，提供技能、本能、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor 等。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐249,119 [topic:llm]
  「与你一同成长的智能体」——Nous Research 出品的 Agent 项目，主题榜 stars 第二。
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** [Python] ⭐187,570 [topic:llm]
  开源自主智能体的鼻祖级项目，使命是让人人可用、可构建 AI。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐147,091 [topic:llm]
  自我定位为「智能体工程平台」，是 Agent 开发的主流框架。
- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐157,251 [topic:llm]
  在同一协作空间中构建 Agentic workflow 与 RAG 管线，云/VPC/自托管皆可，主打从原型到生产不换栈。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐116,360 [topic:llm]
  「会使用浏览器的智能体」，是浏览器操作类 Agent 的代表。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐108,708 [topic:llm]
  多智能体 LLM 金融交易框架，垂直场景 Agent 的高星代表。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐72,851 [topic:ai-agent]
  开源 AI 求职系统：扫描招聘门户、以 1–5 分结构化评估、定制简历、跟踪申请，本地运行于 AI 编码 CLI。
- **[dream-num/univer](https://github.com/dream-num/univer)** [TypeScript] ⭐0（+845 today）
  「AI 智能体的 Office Harness」——将表格、文档、幻灯片、画布、关系表与 PDF 统一到一个运行时。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐56,462 [topic:ai-agent]
  AI 把文档或主题转成原生 PowerPoint（原生形状、转场、动画、图表、语音旁白，支持自定义模板）。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐184,940 [topic:llm]
  规模化搜索、抓取与交互的 Web 数据 API，是 Agent 获取网页数据的关键一层。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Python] ⭐153,221 [topic:llm]
  用户友好的 AI 界面，支持 Ollama、OpenAI API 等。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐126,013 [topic:llm]
  用大模型与自动化工作流，根据主题或关键词一键生成高清短视频。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐66,488 [topic:vector-db]
  本地优先的智能体体验平台，「停止租用智能，自己拥有它」。
- **[OpenBB-finance/OpenBB](https://github.com/OpenBB-finance/OpenBB)** [Python] ⭐73,475 [topic:ml]
  面向分析师、量化与 AI 智能体的开放数据平台。
- **[netdata/netdata](https://github.com/netdata/netdata)** [Go] ⭐80,659 [topic:ml]
  「AI 驱动全栈可观测性」的快速路径，主打精益团队。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐166,668 [topic:llm]
  文本、视觉、音频、多模态 SOTA 模型的模型定义框架，兼顾推理与训练。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐105,604 [topic:llm]
  用 PyTorch 从零逐步实现一个类 ChatGPT 的 LLM。
- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** [Python] ⭐62,628 [topic:llm-model]
  仅 2 小时从零训练一个 64M 参数 LLM，是低成本入门训练的爆款教程。
- **[keras-team/keras](https://github.com/keras-team/keras)** [Python] ⭐64,343 [topic:ml]
  「给人类的深度学习」——高层深度学习 API。
- **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** [Python] ⭐67,380 [topic:ml]
  Python 机器学习经典库。
- **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** [Python] ⭐62,020 [topic:ml]
  YOLO27 / YOLO26 / YOLO11 / YOLOv8 系列，覆盖检测、分割、分类、姿态估计与跟踪。
- **[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)** （亦可归入此类）量化、蒸馏、剪枝、NAS、推测解码统一库（见基础工具）。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[vectorize-io/hindsight](https://github.com/vectorize-io/hindsight)** [Python] ⭐0（+2152 today）
  「会学习的 Agent 记忆」——今日 Trending 第二，代表 Agent 长期记忆方向的爆发。
- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** [Python] ⭐139,825 [topic:rag]
  100+ AI Agents、Agent 技能与 RAG 应用合集，免费开源。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐94,721 [topic:rag]
  跨会话持久上下文：捕获 Agent 会话全过程、用 AI 压缩、把相关上下文注入未来会话；兼容 Claude Code、Codex、Gemini、Hermes、Copilot、OpenCode 等。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐91,327 [topic:rag]
  领先的开源 RAG 引擎，融合 RAG 与 Agent 能力，为 LLM 构造上层上下文。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐84,288 [topic:rag]
  面向 LLM 与 AI 智能体的开源爬虫，把任意网站转成干净的 LLM 友好 Markdown。
- **[datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)** [Python] ⭐80,884 [topic:rag]
  《从零开始构建智能体》——智能体原理与实践教程（中文）。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐66,015 [topic:rag]
  AI Agent 的记忆层，即插即用的记忆基础设施，持久上下文、面向生产。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐66,488 [topic:vector-db]
  本地优先的智能体/知识管理平台（见应用类）。
- **[meilisearch/meilisearch](https://github.com/meilisearch/meilisearch)** [Rust] ⭐59,413 [topic:vector-db]
  极速搜索 API，为站点与应用带来 AI 混合搜索。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐121,567 [topic:llm]
  代码库/文档/SQL/PDF → 可查询知识图谱，明确「不用向量库」（见基础工具）。

---

## 3. 趋势信号分析

今日热榜最鲜明的信号是**智能体外壳与记忆层的平台化**。Trending 前二均属此类：`paperclip` 做「工作中智能体的管理入口」，`hindsight` 做「会学习的记忆」，配合主题榜中高星的 `ECC`（Harness 优化）、`hermes-agent`、`mem0`、`claude-mem`，可以看到竞争焦点已从「造一个 Agent」转向「让 Agent 在长期会话与真实工作中可靠运行」——记忆、上下文持久化、外壳性能成为核心战场。第二个信号是**Token 经济学首次形成集群登榜**：`caveman`（省 65%）、`headroom`（JSON 省 60–95%）、`claude-mem`（压缩后回注）三者同向，说明上下文成本已成为开发者可感知的瓶颈。第三，**推理降本与模型优化**由 NVIDIA `Model-Optimizer` 登榜代表，与量化、蒸馏、推测解码及 TensorRT-LLM/vLLM 部署栈直接挂钩。此外，**MCP 协议向端侧延伸**（`mobile-mcp`）与**AI 编码 CLI 生态扩散**（reverse-skill、career-ops 均明确支持 Claude Code/Cursor/Codex）表明：围绕编码智能体的「技能包/路由包」正在成为一个新的分发形态。教育侧（`ai-engineering-from-scratch`、`hello-agents`、`minimind`、`LLMs-from-scratch`）持续活跃，反映入场需求未减。

---

## 4. 社区关注热点

- **Agent 记忆与上下文持久化**（[hindsight](https://github.com/vectorize-io/hindsight)、[mem0](https://github.com/mem0ai/mem0)、[claude-mem](https://github.com/thedotmack/claude-mem)）：今日新增 stars 最高的方向，跨会话记忆正从「加分项」变成 Agent 的必备基础设施。
- **Token 压缩与上下文成本控制**（[caveman](https://github.com/JuliusBrussee/caveman)、[headroom](https://github.com/headroomlabs-ai/headroom)）：以可量化比例（65%、60–95%）直接省钱，对高频跑编码智能体的团队回报立竿见影。
- **Agent 外壳/编排层**（[paperclip](https://github.com/paperclipai/paperclip)、[ECC](https://github.com/affaan-m/ECC)、[langchain](https://github.com/langchain-ai/langchain)）：谁掌握 Harness 与工作入口，谁就掌握 Agent 的分发与治理。
- **推理优化与部署栈**（[NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer)）：量化/蒸馏/推测解码统一库，直通 TensorRT-LLM 与 vLLM，适合关注线上推理成本与吞吐的团队。
- **AI 编码 CLI 的技能分发形态**（[reverse-skill](https://github.com/zhaoxuya520/reverse-skill)、[graphify](https://github.com/Graphify-Labs/graphify)、[career-ops](https://github.com/career-ops-hq/career-ops)）：以「skill/路由包」形式同时适配 Claude Code、Cursor、Codex 等多家客户端，值得观察其是否能成为跨客户端的标准分发单元。

> 说明：本报告仅基于所给数据整理，未引入任何外部事实；Trending 项目的 stars 仅提供今日新增（总量显示为 0）。主题搜索项目的 stars 为总量数据，无今日新增。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*