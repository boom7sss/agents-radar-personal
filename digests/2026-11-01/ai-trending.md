# AI 开源趋势日报 2026-11-01

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-01 16:49 UTC

---

# AI 开源趋势日报 · 2026-11-01

## 1. 今日速览

今日热榜最显著的特征是 **Agent 上下文与记忆层** 集中爆发：`claude-mem` 以 +1527 今日新增居首，同时 `headroom`（上下文压缩）、`mem0`（记忆层）、`graphify`（代码库知识图谱）在主题搜索中形成"Agent 记忆/上下文"矩阵。**Agent 专用基础设施**（无头浏览器、虚拟机、安全运营）成为第二热点，`lightpanda/browser`、`OpenMausBot`、`AiSOC`、`OpenBot` 同日均千级/百级增长。**本地优先（local-first）AI** 趋势明显：离线语音转写 `Handy`、macOS 本地听写 `hex`、本地大模型服务 `FreeToken` 三箭齐发。**垂直领域基础模型**（金融 `Kronos`）与 **Agent 化工作流**（游戏开发、求职、PPT）持续渗透。传统 ML 框架（TensorFlow、PyTorch、scikit-learn）仍在榜，但今日无爆发性新增，热度集中于应用层。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[lightpanda-io/browser](https://github.com/lightpanda-io/browser)** [Zig] ⭐0 (+827 today)
  专为 AI 与自动化设计的无头浏览器，Zig 实现，瞄准 Agent 网页操作的性能与资源瓶颈。

- **[cjpais/Handy](https://github.com/cjpais/Handy)** [Rust] ⭐0 (+383 today)
  完全离线、可扩展的开源语音转文字应用，本地优先路线的代表。

- **[anomalyco/hex](https://github.com/anomalyco/hex)** [Rust] ⭐0 (+1329 today)
  macOS 本地优先语音听写，原生 Rust + 端上语音识别，已推 Linux beta，今日新增居前五。

- **[FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken)** [Python] ⭐0 (+232 today)
  把"数据中心级模型服务"搬到桌面，本地高效运行大模型，与 local-first 趋势呼应。

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐185,558
  本地模型运行入口，覆盖 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等，是本地推理的事实标准。

- **[kornia/kornia](https://github.com/kornia/kornia)** [Python] ⭐0 (+88 today)
  面向空间 AI 的几何计算机视觉库，CV 与空间智能场景的基础设施。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐78,527
  在内容进入 LLM 前压缩工具输出、日志、RAG 分块，编程 Agent 省约 20% token、JSON 省 60–95%，提供库/代理/MCP server。

### 🤖 AI 智能体/工作流

- **[pingdotgg/t3code](https://github.com/pingdotgg/t3code)** [TypeScript] ⭐0 (+3100 today)
  今日新增 stars 最高（+3100），虽无描述，但作为当日最热仓库值得开发者优先核实其能力与定位。

- **[CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot)** [TypeScript] ⭐0 (+178 today)
  开源的"AI 同事"框架，每个 Agent 拥有独立浏览器、文件与工具，动作先决策后记录，支持任意 AG-UI Agent。

- **[milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)** [TypeScript] ⭐0 (+919 today)
  开源 Grok Bot 替代品，为机器人提供可用虚拟机，Agent 执行环境方向。

- **[Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios)** [Shell] ⭐0 (+970 today)
  用 49 个 AI Agent + 72 个技能把 Claude Code 变成完整游戏开发工作室，多智能体编排的极端示例。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐294,568
  Agent harness 性能优化系统，涵盖技能、本能、记忆、安全与研究优先开发，横跨 Claude Code、Codex、Cursor 等。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐259,414
  "与你共同成长"的 Agent，NousResearch 出品，可扩展智能体方向。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐119,749
  AI 浏览器 Agent 的开源 Python 库，并提供托管式 stealth 浏览器云服务。

- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [Python] ⭐79,678
  从零构建"nano claude code"式 agent harness，"Bash is all you need"，适合学习 Agent 底层。

### 📦 AI 应用

- **[Renhuai123/ziwei-doushu](https://github.com/Renhuai123/ziwei-doushu)** [TypeScript] ⭐0 (+953 today)
  紫微斗数开源排盘引擎，含完整排盘算法、四化系统、格局知识库与古籍原文数据，传统文化垂直应用的典型。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐137,113
  用 AI 大模型 + 自动化工作流，按主题/关键词一键生成高清短视频。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐72,065
  AI 将文档或主题转成原生 PowerPoint（原生形状、转场动画、数据图表、语音旁白），支持自定义模板。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐79,207
  开源 AI 求职 Agent：扫职位、按简历 1–5 打分、定制 ATS 简历与求职信，本地运行于 Codex/OpenCode，或作为 Claude Code 插件。

- **[beenuar/AiSOC](https://github.com/beenuar/AiSOC)** [Python] ⭐0 (+436 today)
  开源 AI 安全运营中心：告警融合、LLM Agent 分诊、MITRE ATT&CK 调查，全程可回放决策账本，无需 API key，附 MCP server。

- **[togg53192-cmd/jailbreaks](https://github.com/togg53192-cmd/jailbreaks)** [无语言] ⭐0 (+730 today)
  "越狱"提示词合集，反映社区对模型安全边界的高关注度；仅作趋势观察，非工程选型。

### 🧠 大模型/训练

- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** [Python] ⭐0 (+611 today)
  面向"金融市场语言"的基础模型，垂直领域基础模型（Vertical Foundation Model）代表。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐119,393
  多 Agent LLM 金融交易框架，把交易决策拆解为多智能体协作。

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,258
  经典开源机器学习框架，仍是规模化训练的基石之一。

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,063
  Python 张量计算与动态神经网络，GPU 加速生态核心。

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,414
  文本/视觉/音频/多模态 SOTA 模型的模型定义框架，推理与训练通用。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐107,638
  用 PyTorch 从零逐步实现类 ChatGPT 的 LLM，学习训练原理的首选教程。

### 🔍 RAG/知识库

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐108,802 (+1527 today)
  为 Agent 提供跨会话持久上下文：捕获会话、AI 压缩、回注相关上下文，兼容 Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode 等，主题搜索与 Trending 双榜第一，今日最值得关注。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐140,403
  把代码库（含文档、SQL schema、配置、PDF）转成可查询知识图谱，作为 Claude Code/Cursor/Codex/Gemini CLI 的 `/graphify` 技能，本地确定性 AST 解析、无向量库。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,232
  面向 AI Agent 的记忆层，即插即用、面向生产、持久上下文。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐93,292
  融合 RAG 与 Agent 能力的上下文层引擎，RAG 工程化代表。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐86,701
  为 LLM 与 Agent 设计的开源爬虫，任意网页转干净 Markdown，自托管或云服务。

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐107,512
  给 Agent "看互联网的眼睛"：一个 CLI 读搜 Twitter/Reddit/YouTube/GitHub/Bilibili/小红书，零 API 费用。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐67,816
  本地优先的完整 Agent 体验，"自己拥有智能"而非租用，自托管 RAG 应用。

---

## 3. 趋势信号分析

今日社区爆发点集中在 **Agent 的"上下文与记忆"层**：`claude-mem` 双榜第一，`headroom`（token 压缩）、`mem0`、`graphify`（无向量库的确定性知识图谱）同现，说明在模型能力趋同后，竞争正转向"如何让 Agent 记得住、看得准、省得下"。第二波是 **Agent 的物理与数字执行环境**——`lightpanda/browser`（Zig 无头浏览器）、`OpenMausBot`（虚拟机）、`OpenBot`（每人一台电脑）共同指向"给 Agent 一台可操作、可审计的机器"。技术栈上出现 **Zig、Rust 在 AI 基础设施中的首次成规模登榜**（浏览器、语音），以及 **local-first / 端上推理**（Handy、hex、FreeToken、anything-llm、ollama）的集体抬头，与隐私诉求和推理成本相关。此外 `Kronos`（金融基础模型）、`TradingAgents` 表明 **垂直领域基础模型与 Agent 金融化** 正在成型；`AiSOC` 则显示安全运营成为 AI Agent 的新落地场景，并普遍以 MCP server 形式接入 Claude/Cursor。

---

## 4. 社区关注热点

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** — 今日新增最高（+1527），跨多个 Agent CLI 的持久记忆方案，直接解决"每次会话重新解释"的痛点，Agent 工具的通用刚需。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) + [mem0ai/mem0](https://github.com/mem0ai/mem0)** — 上下文"压缩 + 记忆"两件套，决定长时间 Agent 任务的成本与稳定性，值得作为基础设施预研。
- **[lightpanda-io/browser](https://github.com/lightpanda-io/browser)** — Agent 网页操作的无头浏览器新实现（Zig），性能导向，可能成为 browser-use 类项目的底层替换选项。
- **[beatnar/AiSOC](https://github.com/beenuar/AiSOC)** — 无需 API key、自带决策账本与 MCP server 的 AI 安全运营中心，面向可审计的 Agent 落地场景，安全团队可关注。
- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** — 金融"语言"基础模型，代表垂直领域 foundation model 方向，配合 `TradingAgents` 值得跟踪其在金融数据上的实际表现。

> 注：`t3code`（+3100）、`public-apis`、`Hyprland`、`Front-End-Checklist`、`cs-video-courses` 因与 AI 无关或缺乏可核实的 AI 能力描述，未进入 AI 分类（`t3code` 仅作观望提示）；`ai-engineering-hub`、`ai-engineering-from-scratch`、`ML-For-Beginners`、`transformers` 等学习/框架类项目已按主题归入相应维度。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*