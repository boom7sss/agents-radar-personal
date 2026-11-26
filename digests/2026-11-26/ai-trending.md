# AI 开源趋势日报 2026-11-26

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-26 19:39 UTC

---

# AI 开源趋势日报 · 2026-11-26

## 1. 今日速览

今日热榜最鲜明的信号是**“Agent 技能（Skills）”生态的集中爆发**：Claude-BugHunter（+1600）、superpowers（+853）、last30days-skill（+755）、stitch-skills（+308）等多个“技能包/方法论”类项目同日登榜，Agent 的能力扩展正从“框架”转向“可插拔技能资产”。同时，多款项目在压缩 Agent 的**上下文与 token 成本**（caveman、headroom），说明“把 Agent 跑便宜”已成为独立的工程赛道。垂直场景方面，安全攻防、合规审查（app-store-compliance，含 EU AI Act 等截止日期跟踪）、视频剪辑（autoclip）等领域出现“技能化封装”的落地产品。基础层则由 openvino、minimind 等推理优化与小模型训练项目维持稳定热度。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** [Python] ⭐0（+744 today）
  “让所有软件都成为 Agent 原生”的 CLI 枢纽，把命令行软件接入 Agent 生态。今日高增，代表“Agent 与既有软件对接”这一基础层需求。
- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** [C++] ⭐0（+176 today）
  Intel 开源的 AI 推理优化与部署工具包，是端侧/异构部署的成熟基础设施，今日持续上榜。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐188,223
  本地一键运行 Kimi、GLM、DeepSeek、Qwen 等模型，事实上的本地 LLM 运行标准入口。
- **[cursor/plugins](https://github.com/cursor/plugins)** [TypeScript] ⭐0（+268 today）
  Cursor 官方插件规范与插件集，标志 AI 编辑器开始建立插件生态。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐210,797（+1042 today）
  为 Agent 提供搜索、抓取、接入 550+ 数据源的知识基础设施 API；今日热度极高，是“Agent 感知网页”的头部工具。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐123,053
  面向编码 Agent 的 token 压缩技能 + 本地代理，输出更短且原始内容可恢复。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐80,933
  在工具输出、日志、RAG 分块进入 LLM 前进行压缩，编码 Agent 省约 20% token、JSON 省 60–95%；库 / 代理 / MCP 三种形态。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** [Python] ⭐0（+1600 today）
  面向漏洞挖掘与红队作业的 Claude Code 技能包（85 个技能、16 个斜杠命令、681 条披露报告模式），今日榜首，代表“安全场景技能化”。
- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐0（+853 today）
  Agent 技能框架与软件开发方法论，把“怎么让 Agent 写好软件”沉淀为可复用规范。
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] ⭐0（+755 today）
  跨 Reddit、X、YouTube、HN、Polymarket 的调研型 Agent 技能，输出有据可依的综述。
- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** [TypeScript] ⭐0（+308 today）
  基于 Agent Skills 开放标准的技能库，兼容 Antigravity、Gemini CLI、Claude Code、Cursor，是“技能标准化”的代表。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐311,207
  Agent harness（运行框架）的性能优化系统，涵盖技能、记忆、安全与研究优先开发流程。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐266,346
  “随你成长”的 Agent 项目，是主题搜索中热度最高的 Agent 框架之一。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐85,037
  开源求职 Agent：扫描职位、按 CV 打分、生成 ATS 友好简历与面试准备，本地运行。

### 📦 AI 应用（具体产品、垂直场景解决方案）

- **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)** [HTML] ⭐0（+951 today）
  面向 Claude Code、Codex、Copilot、Cursor 等编码 Agent 的图表设计规范（52 种图表、纯 HTML+SVG），今日高增。
- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)** [Shell] ⭐0（+561 today）
  规避 App Store / Google Play 拒审的开放手册与提交前检查，含 125 条驳回模式、117 项监管截止日期（EU AI Act、DSA、COPPA 等）。
- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** [Python] ⭐0（+770 today）
  本地优先的开源 OpusClip 替代：长视频自动切短视频，生成字幕、封面与发布文案，并提供 MCP server。
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** [Python] ⭐0（+325 today）
  面向 CI/CD 可靠性的开源运维 Agent。
- **[toeverything/AFFiNE](https://github.com/toeverything/AFFiNE)** [TypeScript] ⭐0（+521 today）
  隐私优先的开源知识库（Notion + Miro 替代），今日上榜。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐80,490
  将文档/主题转成原生 PowerPoint（原生形状、动画、图表、配音），支持自定义模板。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐145,857
  用大模型与自动化工作流按主题一键生成高清短视频。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** [Python] ⭐71,559（+701 today）
  两小时从零训练 64M 小模型的教程式项目，是“低成本复现 LLM”的代表，今日同时出现在热榜与主题搜索。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐109,097
  用 PyTorch 分步实现类 ChatGPT 模型，是学习向训练内容的长青项目。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐169,363
  文本、视觉、音频与多模态模型的模型定义框架，覆盖推理与训练。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,778 与 **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,860
  两大深度学习框架，构成训练生态底座。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐80,543
  AI 工程学习路径项目，面向“学—建—交付”。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐119,953
  跨会话持久记忆：记录 Agent 行为、AI 压缩后回注上下文，兼容 Claude Code、Codex、Gemini、Copilot 等。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐69,509
  面向生产的 Agent 记忆层，即插即用的持久上下文基础设施。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐153,790
  把代码库、文档、SQL schema、PDF 转成可查询知识图谱，本地确定性 AST 解析、不依赖向量库。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,767
  自 RAG 引擎演进为“Agent 原生数据库/上下文基础设施”。
- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐161,955
  一站式 Agentic 工作流 + RAG 搭建平台，支持云/自托管。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Svelte] ⭐159,630
  友好的本地 AI 界面，支持 Ollama 与 OpenAI API。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,980
  Apache-2.0 爬虫，为 Agent 提供抓取/抽取/搜索 API，可自托管。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,670
  本地优先的 Agent 与知识库体验，主打“自持智能”。

---

## 3. 趋势信号分析

**技能化（Skills）是今日最强爆发点。** 热榜前四中有三个是 Agent 技能/方法论项目，主题搜索里 ECC、graphify、caveman 等也以“skill”为交付形态。这说明社区关注点已从“造 Agent 框架”转向“为既有编码 Agent 提供可复用能力包”，并开始出现 Agent Skills 开放标准（stitch-skills）与官方插件规范（cursor/plugins）并行的生态化迹象。

**成本与上下文工程成为独立赛道。** caveman、headroom、claude-mem、mem0 同台竞争，方向一致：压缩输入、持久记忆、让 Agent 更省更稳。这是对长上下文与推理成本压力的直接工程回应。

**垂直场景技能化落地加速。** 安全攻防（Claude-BugHunter）、App 合规（app-store-compliance，绑定 EU AI Act 等监管时间线）、图表设计、视频剪辑（autoclip）都以“技能 + 规则库”形态出现，说明法规与专业领域知识正在被编码进 Agent。

**基础层保持稳定。** openvino、ollama、transformers、PyTorch 等仍占位，推理优化与小模型训练（minimind）维持关注，反映落地侧对“可部署、低成本”的持续需求。

---

## 4. 社区关注热点

- **Agent Skills 生态与标准化** — [obra/superpowers](https://github.com/obra/superpowers)、[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)、[cursor/plugins](https://github.com/cursor/plugins)：技能正成为 Agent 能力分发的主要载体，兼容性与开放标准将决定生态归属，值得提前布局。
- **Token/上下文压缩** — [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)、[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)：直接降低 Agent 运行成本，工程收益明确，适合在编码与 RAG 管线中试点。
- **Agent 持久记忆** — [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)、[mem0ai/mem0](https://github.com/mem0ai/mem0)：跨会话上下文是当前 Agent 体验的短板，两者均强调生产可用与多工具兼容。
- **安全与合规技能包** — [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)、[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)：将红队模式与监管要求编码为可执行技能，适合安全团队与出海产品团队评估。
- **低成本从零训练** — [jingyaogong/minimind](https://github.com/jingyaogong/minimind)：以极小模型与极短时间验证训练全流程，适合教学、原型与团队上手。

---

*注：Trending 榜单原始数据中 stars 总量均显示为 0，本报告仅采用其今日新增 stars；主题搜索项目未提供今日新增 stars，故仅列总量。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*