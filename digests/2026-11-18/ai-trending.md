# AI 开源趋势日报 2026-11-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-18 18:52 UTC

---

# AI 开源趋势日报 · 2026-11-18

## 1. 今日速览

今日最强烈的信号是「Agent Skills（智能体技能包）」生态的集中爆发：Claude-BugHunter（+2322）、last30days-skill（+1062）、stitch-skills、superpowers、ECC 等多个技能/编排类仓库同时冲榜，且 NVIDIA 同日推出 SkillEvaluator 为技能质量建立评估门禁，说明这一层正在从"野生技能堆"走向"可评估、可复用"的基础设施。其次是多智能体在垂直生产场景的落地——Google Research 的 paper-orchestra（+1529）把 AI 论文写作全流程多智能体化，成为今日最受关注的新应用形态。主题搜索侧则显示上下文工程（记忆、压缩、知识图谱）仍是存量大盘中最密集的赛道：claude-mem、mem0、headroom、graphify、caveman 均围绕"给智能体省 token、留记忆"展开。基础工具层 Claude Code、Cursor、Codex 等 CLI 已成为技能生态的事实标准宿主。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator)** [Python] ⭐0（+323 today）
  NVIDIA 推出的多层级 AI 技能/插件评估框架，含质量门禁、语义重叠检测、合成评测集生成与实时 agent 行为评估——在技能包泛滥的今天，它补上了"如何判断一个技能是否真的有用"这一环。

- **[obra/superpowers](https://github.com/obra/superpowers)** [Shell] ⭐0（+823 today）
  一个 agentic 技能框架与软件开发方法论，把"技能"组织成可运行的开发流程，今日高增说明社区在寻找技能的体系化用法而非零散集合。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐306,329（+1109 today）
  面向 Claude Code、Codex、Cursor 等的 agent harness 性能优化系统，覆盖技能、直觉、记忆、安全与研究优先开发，是今日"agent 运行层"最重量级项目。

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** [Python] ⭐0（+384 today）
  港大数据智能实验室出品，主张"让所有软件都成为 Agent-Native"，并提供 CLI-Hub，是连接传统软件与智能体的接口层尝试。

- **[cursor/plugins](https://github.com/cursor/plugins)** [TypeScript] ⭐0（+315 today）
  Cursor 官方插件规范与官方插件集合，标志编辑器厂商正式开放插件/技能生态。

- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** [C++] ⭐0（+18 today）
  Intel 开源 AI 推理优化与部署工具包，是老牌但今日仍有增量上榜的推理引擎代表。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)** [Python] ⭐0（+1529 today）
  Google Research 的多智能体框架，用于自动化撰写 AI 研究论文，今日新增 stars 最高的 AI 项目之一，把多智能体推向"知识生产"核心环节。

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** [Python] ⭐0（+2322 today）
  面向漏洞挖掘与外部红队工作的 Claude Code 技能包，含 82 个技能、15 个斜杠命令、681 个已披露报告模式，覆盖 24 类核心漏洞及企业身份/基础设施攻击矩阵——今日全榜最高增速，是"垂直安全 agent"的标杆。

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** [TypeScript] ⭐0（+369 today）
  配合 Stitch MCP server 的 Agent Skills 库，遵循 Agent Skills 开放标准，兼容 Antigravity、Gemini CLI、Claude Code、Cursor 等，代表"技能跨宿主互操作"方向。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐264,468
  主打"与你共同成长的智能体"，NousResearch 出品的通用 agent 框架，存量 star 极高。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐121,425
  AI 浏览器智能体开源库，并提供托管云端 API，是 Web 自动化 agent 的主流选择。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐123,065
  多智能体 LLM 金融交易框架，把角色分工式智能体用于量化交易决策。

- **[n8n-io/n8n](https://github.com/n8n-io/n8n)** [TypeScript] ⭐0（+315 today）
  内置原生 AI 能力的 fair-code 工作流自动化平台，可视化 + 自定义代码，400+ 集成，是低代码智能体编排的成熟方案。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐83,526
  开源 AI 求职 agent：扫描职位、按 CV 打分、定制简历与求职信，可在 Codex/OpenCode 本地运行或作为 Claude Code 插件。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** [Python] ⭐0（+1062 today）
  跨 Reddit、X、YouTube、HN、Polymarket 与网页做主题调研并合成有依据摘要的 AI agent 技能，是"信息聚合型 agent 应用"的高热度案例。

- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐161,438
  构建 Agentic 工作流与 RAG 流水线的协作平台，支持云、VPC、自托管，从原型到生产的全栈方案。

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Svelte] ⭐159,035
  友好的 AI 界面，兼容 Ollama 与 OpenAI API，是最广泛部署的自托管 AI 前端之一。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐144,447
  用 AI 大模型 + 自动化工作流按主题一键生成高清短视频，垂直内容生产场景的代表。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐78,279
  将文档或主题转成原生 PowerPoint（原生形状、转场、动画、图表与旁白），支持自定义模板，办公场景 agent 应用。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐73,315
  LLM 驱动的多市场股票智能分析系统，含行情、实时新闻、决策看板与自动推送，支持零成本定时运行。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐187,566
  本地一行启动 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型，是开源模型本地分发的事实入口。

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐169,229
  文本、视觉、音频与多模态 SOTA 模型的模型定义框架，兼顾推理与训练。

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,611
  开源机器学习框架，面向所有人的 ML 基础设施。

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,682
  GPU 加速的动态神经网络张量框架，训练侧主力。

- **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** [Python] ⭐68,242
  Python 经典机器学习库，仍是 tabular 与基线建模的标准工具。

- **[tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract)** [C++] ⭐77,583
  开源 OCR 引擎，文档/图像文本提取的长期基础设施。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐202,961
  通过一个 API 提供搜索、抓取与 550+ 数据源的知识基础设施，为 agent 提供更聪明的输入。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐150,089
  把代码库、文档、SQL schema、配置与 PDF 转成可查询知识图谱，本地确定性 AST 解析、每条边可解释、不依赖向量库——"图谱替代向量"路线的高关注代表。

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐118,188
  跨会话持久化上下文的记忆层：捕获 agent 会话内容、AI 压缩后再注入未来会话，兼容 Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot 等。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐94,389
  从 RAG 引擎成长为"上下文基础设施"的 agent-native 数据库。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐69,191
  面向 AI agent 与应用的 drop-in 记忆层，生产可用的持久上下文基础设施。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐80,080
  在送入 LLM 前压缩工具输出、日志、文件与 RAG 分块，编码 agent 省 20% token、JSON 省 60–95%，以库/代理/MCP server 形式提供。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,401
  local-first 的全能 agent 体验套件，主打"拥有而非租用"你的智能。

---

## 3. 趋势信号分析

今日热榜最突出的动向是 **Agent Skills 层的集体爆发**：Claude-BugHunter、last30days-skill、stitch-skills、superpowers、ECC 同时上榜，覆盖安全、调研、开发方法论与 harness 优化，说明社区已把"技能包"当作继提示词之后的第二大可复用资产。与此同步，NVIDIA 的 SkillEvaluator 首次将**技能质量评估**作为独立项目提出（质量门禁、语义重叠检测、行为级评测），标志该方向开始从数量扩张转向质量治理。第二个信号是 **多智能体进入生产型垂直场景**：paper-orchestra 的 AI 论文写作与 TradingAgents 的金融交易，显示编排框架的价值正从通用 demo 转向"替代一段专业工作流"。基础工具层面，Cursor 官方插件仓与 CLI-Anything 共同指向 **CLI/MCP 成为 agent 与软件的标准接口**。在大模型侧，ollama 的模型列表（Kimi、GLM、MiniMax、DeepSeek、Qwen、Gemma）反映开源与国产模型的持续扩容，但今日热榜缺少模型训练侧新面孔，热度明显偏向推理与应用层。整体看，**上下文工程（记忆、压缩、知识图谱、token 经济）仍是存量生态中最密集、最耐久的竞争带**。

---

## 4. 社区关注热点

- **Agent Skills 标准化与互操作**（stitch-skills、Claude-BugHunter、superpowers）：技能正跨 Claude Code / Cursor / Gemini CLI 多宿主复用，值得关注"Agent Skills 开放标准"的落地程度。
- **技能评估与质量门禁**（NVIDIA SkillEvaluator）：技能数量已过剩，如何自动判断相关性、语义重叠与实际行为收益，将是下一阶段刚需。
- **智能体记忆与 token 压缩**（claude-mem、mem0、headroom、caveman）：直接决定 agent 长任务成本与一致性，是企业落地的成本杠杆。
- **知识图谱 + AST 替代向量检索**（graphify）："每条边可解释、无向量库"的路线对代码库场景尤其有吸引力，值得对比评测。
- **多智能体垂直生产**（paper-orchestra、TradingAgents、career-ops）：从通用 agent 转向"完整交付一份专业产物"，是判断 agent 真实生产力的观察窗口。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*