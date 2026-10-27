# AI 开源趋势日报 2026-07-28

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-28 03:13 UTC

---

# AI 开源趋势日报  
**日期：2026-07-28**  
**分析师视角：AI 开源生态技术分析**

---

## 1. 今日速览

今日 GitHub Trending 榜单中 AI 相关项目共 5 个，其中 **moeru-ai/airi**（自托管 AI 伴侣）以 +2346 stars 领跑；阿里开源代码审查工具 **open-code-review**（+979 stars）融合 LLM Agent 与确定性流水线，引发开发者关注；金融领域基础模型 **Kronos**（+441 stars）首次亮相 Trending。与此同时，主题搜索数据显示 **RAG/Agent 类项目持续主导**：langchain、dify、weaviate 等生态老牌项目 stars 稳定增长，而 **Graphify、CherryHQ、HKUDS/nanobot** 等新锐项目凭借“本地化+知识图谱+轻量级 Agent”概念快速冲高。整体而言，**AI Agent 工程化、金融垂直领域模型、及“让 AI 看懂屏幕”的多模态能力**成为今日三大热点方向。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 177,041 | 一键部署主流大模型（Kimi、DeepSeek、Qwen 等），本地推理首选 CLI 工具。 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 142,733 | Agent 工程平台，支持 RAG、工具调用、多模型编排，生态最成熟的 LLM 开发框架。 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 146,994 | 用户友好的 AI 对话界面，支持 Ollama 和 OpenAI API，本地化部署首选。 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,976 | 可视化构建 AI Agent 工作流，无需代码即可搭建 RAG、对话机器人。 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 36,321 | 前端 Agent UI 栈，支持 React/Angular/Mobile，定义 AG-UI 协议。 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 49,056 | AI 生产力工作室：智能聊天、自主 Agent、300+ 助手，统一访问前沿 LLM。 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | 62,807 | 压缩工具输出/日志/RAG 块至 LLM 前，减少 20-95% token 消耗，支持 MCP Server。 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 221,480 | “与你一起成长的 Agent”，强调持续学习和个性化适配，stars 增长极快。 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,722 | 最早出圈的通用 Agent 框架，可自主分解任务、调用工具、执行目标。 |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | 107,041 | 让 AI Agent 操作浏览器，自动化网页任务，被视为“Agent 的双手”。 |
| [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 46,314 | 超轻量级自托管个人 Agent 框架，含 WebUI、工具、记忆、MCP、多 Agent 工作流。 |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | 0 (+979 today) | 阿里开源代码审查工具，结合确定性流水线 + LLM Agent，精确到行级注释。 |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | 0 (+240 today) | AI Agent 技能：自动搜索 Reddit/X/YouTube 等平台并合成总结报告。 |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | 0 (+434 today) | 为 Claude 赋予“看视频”能力：下载、抽帧、转录、分析，一键完成。 |

### 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | 0 (+572 today) | 自托管 Grok 伴侣，支持实时语音、Minecraft/Factorio 游戏控制，类 Neuro-sama 的 AI 角色。 |
| [zhayujie/CowAgent](https://github.com/zhayujie/CowAgent) | 46,161 | 开源超级 AI 助手（前 chatgpt-on-wechat），支持多模型、多通道、记忆与知识。 |
| [cherry-studio](https://github.com/CherryHQ/cherry-studio) | 49,056 | 同上，亦可归入应用类，提供完整 AI 助手体验。 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 41,449 | AI 一键生成原生 PPT：形状、动画、图表、旁白，支持模板。 |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | 0 (+441 today) | 金融市场的基础模型，专用语言建模（Kronos: Foundation Model for Financial Markets）。 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 99,585 | 利用 AI 自动化生成高清短视频，关键词到视频一键出片。 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | 196,577 | 经典机器学习框架，持续更新支持新硬件与量化。 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | 102,025 | PyTorch 生态主导大模型训练与推理，动态图 + 强 GPU 加速。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 163,048 | 🤗 模型定义框架，支持全模态推理与训练，社区标准。 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | 53,913 | 2 小时从零训练 64M 参数小模型，极低门槛入门大语言模型。 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 99,991 | 手把手用 PyTorch 实现类 ChatGPT 模型，深度学习圣经。 |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | 4,417 | 在 Apple Silicon 上学习 LLM 推理服务的课程，构建微型 vLLM + Qwen。 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 一句话说明 |
|------|-------|------------|
| [langgenius/dify](https://github.com/langgenius/dify) | 150,471 | 构建 Agentic 工作流与 RAG 管道，支持云部署/自托管，企业级应用。 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 86,182 | 领先的开源 RAG 引擎，融合 Agent 能力，为 LLM 提供优质上下文层。 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,394 | 高性能云原生向量数据库，支持大规模 ANN 搜索。 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 97,222 | 将代码库/文档/PDF 转为可查询的知识图谱，配合 Claude Code/Cursor 等使用。 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 61,869 | AI Agent 的通用记忆层，跨会话持久化上下文。 |
| [weaviate/weaviate](https://github.com/weaviate/weaviate) | 16,655 | 开源向量数据库，支持对象+向量混合搜索，云原生容错。 |
| [StarTrail-org/LEANN](https://github.com/StarTrail-org/LEANN) | 12,737 | MLsys 2026 论文：97% 存储节省，100% 隐私的本地 RAG 应用。 |

---

## 3. 趋势信号分析

- **AI Agent 工具链爆发式增长**：今日 Trending 中 5 个 AI 项目有 4 个直接与 Agent 相关（airi、open-code-review、claude-video、last30days-skill），合计新增 stars 超 2200。主题搜索中 hermes-agent（221K stars）、nanobot、CopilotKit 等均属 Agent 类别，反映出开发者正在从“调用 API”转向“构建自主 Agent 工作流”。

- **代码审查与 AI 编码助手走向工程化**：阿里开源的 `open-code-review` 采用 **确定性流水线 + LLM Agent** 混合架构，在阿里内部规模验证后开源，今日即获 979 stars。这标志企业级 AI 代码审查从实验性工具进入生产级阶段，结合 `browser-use`（网页自动化）和 `claude-video`（多模态输入），AI 在软件开发全流程中的渗透加速。

- **金融垂直领域大模型首次登榜**：`shiyu-coder/Kronos` 作为金融市场 Foundation Model 出现在 Trending，+441 stars，说明除通用模型外，**行业专用基础模型**（尤其量化金融）开始吸引开发者目光。同领域 `ZhuLinsen/daily_stock_analysis`（59K stars）和 `HKUDS/Vibe-Trading`（28K stars）也保持高热度，金融+AI 正形成独立子生态。

- **本地化/自托管成为隐形主题**：airi（自托管 Grok）、nanobot（自托管个人 Agent）、CherryHQ（本地优先）、Graphify（本地 AST 解析）等项目的兴起，与近期用户对数据隐私、离线可用性的关注一致。叠加 Ollama 的普及，**“本地 AI 小镇”** 模式正在成型。

---

## 4. 社区关注热点

- **🎯 自托管 AI 伴侣（airi）**：今日新增 stars 最高，融合实时语音、游戏控制、角色扮演，代表“AI 角色化+本地化”趋势，可关注其架构（TypeScript、容器化）。
- **🔍 代码知识图谱（Graphify）**：97K stars，将任意代码库转为可查询知识图谱，与 Claude Code/Cursor 无缝集成，标志着 **“符号 AI + LLM”混合路径**在开发者工具中获得认可。
- **⚡ 轻量级 Agent 框架（nanobot）**：46K stars，仅依赖 Python 即可运行，含 WebUI、MCP、多 Agent，适合个人用户快速搭建自动化，值得研究其记忆与工具设计。
- **📊 金融基础模型（Kronos）**：首个专注金融语言的基础模型，今日冲榜，可关注其训练数据源与架构细节，对量化研究社区有参考价值。
- **🖥️ 多模态 Agent 能力扩展（claude-video）**：让 Claude 理解视频，结合开源工具链（ffmpeg+whisper），降低了多模态 Agent 开发门槛，后续可能延伸至实时监控、视频分析等场景。

--- 

*数据统计截止至 2026-07-28 UTC 时间约 15:00，stars 数值来源于 GitHub 官方 Trending 及 Search API。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*