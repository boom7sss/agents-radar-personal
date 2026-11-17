# AI 开源趋势日报 2026-11-17

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-17 19:12 UTC

---

# AI 开源趋势日报（2026-11-17）

## 1. 今日速览

今日热榜由“Agent 技能/插件”类项目主导：Claude Code 技能包、Agent Skills、Agent 插件规范与各类 agent harness 优化系统密集登榜，说明社区正把注意力从“造新模型”转向“把 agent 打磨得更能干活”。Agent 与前端/用户交互的协议层开始成形（AG-UI 今日 +1444），同时降本方向出现明显信号：省钱省 token 的代理与上下文压缩类项目获得高关注。多智能体落地到具体场景成为主旋律，自动化科研写作（paper-orchestra）、金融交易（TradingAgents）、求职（career-ops）与股票分析同日出现。基础模型训练侧仍有“从零造 LLM”的教育型项目（minimind）进入热榜，但声量明显小于应用与工具层。

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** — ⭐0（+350 today，数据源未给出总量）
  面向 Stitch MCP server 的 Agent Skills 库，遵循 Agent Skills 开放标准，可兼容 Antigravity、Gemini CLI、Claude Code、Cursor，是跨 coding agent 的“技能复用层”，今日值得关注。
- **[cursor/plugins](https://github.com/cursor/plugins)** — ⭐0（+196 today，总量未给出）
  Cursor 官方插件规范与官方插件，标志主流 coding agent 开始把插件生态标准化，虽今日新增不高但具方向性。
- **[ag-ui-protocol/ag-ui](https://github.com/ag-ui-protocol/ag-ui)** — ⭐0（+1444 today，总量未给出；总量为本日 Trending 最高新增）
  AG-UI：Agent-User Interaction Protocol，把 Agent 接入前端应用，是今日唯一明确的“交互协议层”项目，新增 stars 居首。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** — ⭐305,301（+902 today）
  agent harness 性能优化系统，涵盖 skills、instincts、memory、security 与 research-first 开发，覆盖 Claude Code、Codex、Opencode、Cursor。
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — ⭐0（+764 today，总量未给出）
  阿里规模的混合架构代码评审工具：确定性流水线 + LLM Agent，行级评论、内置多语言规则集，兼容 OpenAI 与 Anthropic，是“工程约束 + LLM”结合的典型。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** — ⭐79,907（今日新增未给出）
  在内容进入 LLM 前压缩工具输出、日志、文件与 RAG 分块，编码 agent 省约 20% token、JSON 场景省 60–95%，提供库、代理与 MCP server。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** — ⭐0（+1007 today，总量未给出；Trending 今日新增第二高）
  Claude Code 的安全/红队技能包：82 个技能、15 个 slash command、681 条公开报告模式，覆盖 24 类核心漏洞及企业身份与基础设施攻击矩阵。
- **[obra/superpowers](https://github.com/obra/superpowers)** — ⭐0（+598 today，总量未给出）
  agentic skills 框架与软件开发方法论，今日是“方法论层”项目的代表。
- **[Tencent/LoopForge](https://github.com/Tencent/LoopForge)** — ⭐0（+590 today，总量未给出）
  自托管的 coding-agent 交付工作流，编排 CodeBuddy、Codex、Claude Code，带脚本与人工审批门。
- **[backnotprop/plannotator](https://github.com/backnotprop/plannotator)** — ⭐0（+691 today，总量未给出）
  让开发者“留在回路中”的工作区：塑造、决策、规划、标注、评审代码，并把反馈一键回传给 agent。
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** — ⭐0（+772 today，总量未给出）
  跨 Reddit、X、YouTube、HN、Polymarket 与网页做主题调研并生成有依据摘要的 agent skill，体现“调研类技能”需求。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** — ⭐264,169（今日新增未给出）
  “随你成长的 agent”，NousResearch 的 agent 方向代表项目，总量居本日主题搜索前列。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** — ⭐122,951（今日新增未给出）
  多智能体 LLM 金融交易框架，是多智能体落到垂直金融场景的代表。
- **[google-research/paper-orchestra](https://github.com/google-research/paper-orchestra)** — ⭐0（+1175 today，总量未给出）
  多智能体框架，用于自动撰写 AI 研究论文，来自 Google Research，今日新增亮眼。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[dream-num/univer](https://github.com/dream-num/univer)** — ⭐0（+1776 today，总量未给出；今日 Trending 新增最高）
  Univer Office SDK，把编辑、计算、协作与文件处理嵌入产品，同时服务人与 AI agent，是“AI office”方向的开源底座。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** — ⭐83,305（今日新增未给出）
  开源 AI 求职 agent：扫描岗位、按简历打 1–5 分、定制 ATS 友好简历与求职信，可本地跑在 Codex、OpenCode 或作为 Claude Code 插件。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** — ⭐144,187（今日新增未给出）
  用大模型与自动化工作流，按主题或关键词一键生成高清短视频。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** — ⭐77,914（今日新增未给出）
  把文档或主题转成原生 PowerPoint（原生形状、转场动画、图表、语音旁白、支持自有 .pptx 模板）。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** — ⭐73,054（今日新增未给出）
  LLM 驱动的多市场股票智能分析系统，含行情、新闻、决策看板与自动推送，支持零成本定时运行。
- **[openbq-org/OpenBB](https://github.com/openbq-org/OpenBB)** — ⭐75,493（今日新增未给出）
  面向分析师、量化与 AI agent 的开源数据平台。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** — ⭐0（+188 today，总量未给出）
  2 小时从零训练 64M 参数 LLM 的教学型项目，是今日 Trending 中唯一聚焦“从零训练”的项目。
- **[ollama/ollama](https://github.com/ollama/ollama)** — ⭐187,411（今日新增未给出）
  本地运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的运行时，是本地推理入口的事实标准之一。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** — ⭐169,329（今日新增未给出）
  文本、视觉、音频、多模态模型的定义框架，覆盖推理与训练。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** — ⭐105,824（今日新增未给出）
  PyTorch 主仓，GPU 加速的张量与动态神经网络基础。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** — ⭐201,784（今日新增未给出）
  TensorFlow 主仓，ML 框架基本盘。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — ⭐117,945（今日新增未给出）
  跨会话持久上下文：捕获 agent 会话内容、AI 压缩并注入未来会话，兼容 Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode 等。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** — ⭐149,548（今日新增未给出）
  把代码库连同文档、SQL schema、配置与 PDF 转成可查询知识图；本地确定性 AST 解析、每条边可解释、不用向量库。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** — ⭐69,123（今日新增未给出）
  面向 AI agent 的记忆层，可作为 drop-in 记忆基础设施。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** — ⭐94,319（今日新增未给出）
  自称“agent-native database”，从 RAG 引擎演进为上下文基础设施。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** — ⭐87,477（今日新增未给出）
  Apache-2.0 爬虫，为 AI agent 提供网页抓取、抽取与搜索 API，可自托管。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** — ⭐202,583（今日新增未给出）
  为 AI agent 供给网页及更广数据源，是 RAG 上游数据采集的高热度项目。

> 说明：`getarcaneapp/arcane`（Docker 管理）、`sveltejs/svelte`（前端框架）与主题搜索中的 `netdata/netdata`（可观测性）、`tesseract-ocr/tesseract`（OCR）、`Developer-Y/cs-video-courses`、`microsoft/AI-For-Beginners`、`datawhalechina/hello-agents` 等非 agent/AI 工具本体的项目，按“AI 明确相关”要求作弱相关处理或略去，未进入上述主分类。

## 3. 趋势信号分析

今日热榜最鲜明的信号是“Agent 技能与 harness 优化”集体爆发：Claude-BugHunter（+1007）、ECC（+902）、last30days-skill（+772）、plannotator（+691）、superpowers（+598）同框，说明社区正把 agent 从“能对话”推向“能交付”，胜负手在技能库、记忆与反馈闭环，而非模型本身。其次是交互与插件标准的出现：AG-UI（+1444）定义 Agent-User 交互协议，Google 的 stitch-skills 与 Cursor 的 plugins 分别以开放标准与厂商规范切入，agent 生态开始出现“协议层”争夺。第三是成本与上下文工程首次成为热榜主题：headroom 主打压缩 token、caveman 以“少说 token”为卖点，反映 API 成本已成为实际工程约束。落地侧，多智能体向科研写作（paper-orchestra）、金融交易（TradingAgents）、求职与股票分析扩散，说明编排能力已下沉到垂直场景。与近期模型发布的直接关联在数据中未体现，不作推断；可确认的是，热榜讨论重心正从“模型能力”转向“agent 工程化与 token 经济学”。

## 4. 社区关注热点

- **Agent Skills 生态标准化**：stitch-skills + cursor/plugins + superpowers 同日出现，值得关注技能格式是否会像 MCP 一样形成跨 agent 通用标准。
- **AG-UI 交互协议**：今日新增 stars 居 Trending 首位，若被前端框架采纳，将成为 agent 接入产品的关键中间层，值得提前评估。
- **Agent 成本与上下文压缩**：headroom（JSON 省 60–95% token）与 caveman（省 65%）指向同一痛点，适合在生产 agent 中优先试点。
- **安全红队技能包**：Claude-BugHunter 把 82 个技能与 681 条报告模式结构化，是“垂直领域技能库”可复制的样板。
- **代码知识图谱替代向量库**：graphify 以确定性 AST 解析 + 可解释边、不用向量库为卖点，值得与 ragflow、mem0 等记忆/检索方案做对比测试。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*