# AI 开源趋势日报 2026-11-19

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-19 19:00 UTC

---

# AI 开源趋势日报 · 2026-11-19

## 一、今日速览

今日最突出的信号是 **Agent Skills / Agent Harness 生态出现成规模增加**：Trending 榜前五中就有 Claude-BugHunter（+1353）、superpowers（+2029）、CLI-Anything（+899）、cursor/plugins（+383）四个与编码智能体技能或插件直接相关；主题搜索侧也有 ECC、learn-claude-code、stitch-skills 等项目。第二主线是 **Token 成本与上下文工程**：caveman、headroom、claude-mem 分别从“少说”“压缩输入”“持久记忆”三个角度解决上下文问题。第三主线是 **Agent 的可执行产出**（视频剪辑、PPT、求职、股票分析、图表）。传统框架类项目（transformers、pytorch）今日无新增 stars 数据，热度集中在“技能层”而非“模型层”。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | — | +899 | “让所有软件变成 Agent 原生”的 CLI-Hub，是让智能体接入终端的关键基础设施方向 |
| [cursor/plugins](https://github.com/cursor/plugins) | — | +383 | Cursor 官方插件规范与官方插件集，标志着编码智能体生态开始出现官方插件规范 |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | — | +246 | Intel 的 AI 推理优化与部署工具包，是端侧与异构部署的成熟选项 |
| [obra/superpowers](https://github.com/obra/superpowers) | — | +2029 | Agentic skills 框架与开发方法论，今日 Trending 新增 stars 最高；它反映社区在寻找“可复用技能”而非新模型 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐203,947 | +795 | 面向 Agent 的搜索与抓取知识基础设施，统一 API 接入 550+ 数据源；作为基础工具与 Agent 两栖项目 |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | ⭐121,510 | — | 编码智能体的减 token 技能与本地代理，缩短输出且可还原原文 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐80,154 | — | 在工具输出、日志和 RAG 分块进入 LLM 前进行压缩，宣称编码智能体省 20%、JSON 省 60–95% token |

### 🤖 AI 智能体/工作流

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | — | +1353 | 面向漏洞挖掘与外网红队的 Claude Code 技能包（82 项技能、681 条披露报告模式），是安全垂直领域技能化的典型样本 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | — | +952 | 跨 Reddit/X/YouTube/HN/Polymarket 的研究型 Agent 技能，输出有依据的摘要 |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | — | +303 | Google Labs 基于 Agent Skills 开放标准的技能库，兼容 Antigravity、Gemini CLI、Claude Code、Cursor；**值得关注的方向信号**：大厂开始跟进统一技能标准 |
| [Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre) | — | +25 | 开源 CI/CD 可靠性 Agent，属运维场景落地 |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐307,151 | — | Agent harness 性能优化系统（技能、记忆、安全），覆盖 Claude Code/Codex/Cursor 等 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐264,712 | — | “与你共同成长”的 Agent，NousResearch 出品 |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | ⭐80,649 | — | “Bash is all you need”：从零构建类 Claude Code 的 nano agent harness，适合作为学习入口 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | ⭐121,498 | — | 开源 AI 浏览器 Agent 库，并提供托管 Agent API |

### 📦 AI 应用（垂直场景解决方案）

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | — | +332 | 面向多款编码智能体的编辑级图表设计技能（45 种图表、自包含 HTML+SVG） |
| [mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance) | — | +542 | 应用商店合规手册+AI 编码智能体技能，含 117 条拒审模式与 95 个监管截止日期（含 EU AI Act） |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | — | +110 | 开源 AI 视频剪辑桌面工具，长视频自动切短视频并生成字幕/封面/发布文案 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐144,689 | — | 用大模型+自动化工作流一键生成高清短视频 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | ⭐78,594 | — | 文档/主题转原生 PowerPoint（原生形状、转场、图表、旁白） |
| [career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops) | ⭐83,754 | — | AI 求职 Agent：岗位扫描、CV 匹配打分、ATS 简历定制，本地运行 |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | ⭐123,156 | — | 多智能体 LLM 金融交易框架 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐73,473 | — | LLM 驱动的多市场股票分析系统，支持零成本定时运行 |

### 🧠 大模型/训练

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐66,765 | +301 | 两小时从零训出 64M 小模型，双榜在列，是低成本教学/复现的标杆 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐169,275 | — | 文本/视觉/音频/多模态模型的模型定义框架，训练与推理通用底座 |
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐187,642 | — | 本地一键运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐105,705 | — | GPU 加速的动态神经网络框架 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐201,647 | — | 面向所有人的开源机器学习框架 |

### 🔍 RAG/知识库

| 项目 | Stars | 今日新增 | 说明 |
|---|---|---|---|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐150,542 | — | 将代码库/文档/SQL/PDF 转为可查询知识图谱，本地确定性 AST 解析、不用向量库；**值得注意的技术路线分歧**：以图结构替代向量检索 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐118,390 | — | 跨会话持久上下文：捕获→AI 压缩→回注，兼容 Claude Code、Codex、Gemini、Copilot 等 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐94,441 | — | 自称 “agent-native database”，从 RAG 引擎扩展为上下文基础设施 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | ⭐87,567 | — | Apache-2.0 爬虫，支撑其托管抓取/检索 API |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐69,243 | — | 面向 Agent 的记忆层（drop-in 持久上下文），面向生产环境 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐68,439 | — | 本地优先的 Agent 体验，强调“拥有而非租用智能” |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | ⭐145,081 | — | 100+ Agent、Agent Skills 与 RAG 应用合集 |
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐161,511 | — | Agentic 工作流与 RAG 流水线的一体化协作平台，云端/自托管均可 |

---

## 三、趋势信号分析

今日爆发点不在模型，而在 **Agent 的“技能与上下文层”**。Trending 新增 stars 最高的四个项目（superpowers +2029、Claude-BugHunter +1353、last30days-skill +952、CLI-Anything +899）全部围绕“让智能体具备可复用能力”，且多为 Skill/Slash Command 形态，而非新框架。值得注意的新信号有二：一是 **Agent Skills 开放标准开始被大厂采纳**（google-labs-code/stitch-skills 明确对齐该标准并兼容多家编码智能体）；二是 **token 经济成为独立赛道**，caveman 与 headroom 分别从输出侧和输入侧压缩上下文。应用侧则明显偏向“可交付成品”（视频、PPT、图表、合规清单），而非对话式 Demo。与行业事件的关联上，数据中未见具体模型发布信息，仅可观察到 ollama 已支持 Kimi、GLM、MiniMax、DeepSeek、gpt-oss 等多家模型，说明国产与开放权重模型在本地推理入口的覆盖持续扩大。

---

## 四、社区关注热点

- **[obra/superpowers](https://github.com/obra/superpowers)（+2029）**：今日新增 stars 最高，若你要构建可复用的 Agent 技能体系，这是当前社区共识度最高的方法论入口。
- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)**：大厂背书 + 开放标准 + 多客户端兼容，可能是技能生态从“各家私货”走向互通的分水岭，值得跟踪标准演进。
- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) / [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)**：输入/输出两侧的 token 压缩组合，直接对应编码智能体的实际成本，工程收益明确且可度量。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) / [mem0ai/mem0](https://github.com/mem0ai/mem0)**：跨会话记忆正从“功能”变为“基础设施”，跨客户端兼容性是其核心竞争力。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)**：明确“no vector store”的图结构知识表示，是对主流向量 RAG 路线的正面对照实验，适合作为技术选型时评估的替代方案。

> 注：Trending 中 nginx/nginx、AFFiNE、Ghost-Downloader-3 与 AI 无明确关联，已略去；主题搜索中的 cs-video-courses、scikit-learn、tesseract 属通用 ML/CS 资源，未纳入重点讨论。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*