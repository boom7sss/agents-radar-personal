# AI 开源趋势日报 2026-11-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-02 20:22 UTC

---

# AI 开源趋势日报（2026-11-02）

## 1. 今日速览

今日热榜的绝对主线是 **"Agent 外围工程"**：记忆持久化（claude-mem）、Agent 桌面操控（agent-desktop）、并行 Agent 工作流（worktrunk）、Agent 管理台（paperclip）与 Agent Skills 分发（skills、Claude-Code-Game-Studios）密集登榜，社区投入正从"模型能力"转向"把 Agent 接入真实工作环境"。同时，**本地/低成本推理**成为第二条强信号——FreeToken、colibri 分别从服务端吞吐与纯 C 磁盘流式 MoE 两个角度下探硬件门槛，karpathy/nanochat 延续"百美元级 ChatGPT"叙事。模型侧出现新的垂类基础模型尝试（Kronos 面向金融市场），heretic 则代表"免训练模型行为改造"这一细分方向。整体看，今日热榜的爆发点集中在"低成本 + 可控性 + Agent 可运维性"，而非新的通用大模型发布。

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** [Rust] ⭐0（+2243 today）— 面向 AI Agent 的 computer-use CLI，是今日 Trending 新增 stars 最高的项目，代表"Agent 操作桌面/图形界面"这一基础设施层的开源化。
- **[FlashML-org/FreeToken](https://github.com/FlashML-org/FreeToken)** [Python] ⭐0（+654 today）— 把数据中心级模型服务能力搬到桌面端，主打本地大模型的快速高效运行，直指本地推理性能瓶颈。
- **[JustVugg/colibri](https://github.com/JustVugg/colibri)** [C] ⭐0（+655 today）— 纯 C、零依赖，通过从磁盘流式加载专家（experts）在自有硬件上运行前沿 MoE 模型，极致的轻量推理引擎路线。
- **[max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)** [Rust] ⭐0（+136 today）— Git worktree 管理的 CLI，专为并行 AI Agent 工作流设计，反映多 Agent 并行开发对版本控制工具的改造需求。
- **[kornia/kornia](https://github.com/kornia/kornia)** [Python] ⭐0（+412 today）— 几何计算机视觉库，面向空间智能（Spatial AI），是今日少数非 LLM 方向的 AI 基础库。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐185,704 — 本地模型运行的主流入口，README 已覆盖 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型阵容。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,458 — 文本/视觉/音频/多模态模型的模型定义框架，兼顾推理与训练。

### 🤖 AI 智能体/工作流

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐110,586（+1799 today）— 为 Agent 提供跨会话持久上下文：记录会话行为、用 AI 压缩、再注入未来会话，兼容 Claude Code、Codex、Gemini、Copilot、OpenCode 等多家 CLI。同时登上 Trending 与 RAG 主题榜，是今日"Agent 记忆层"最集中的关注点。
- **[Donchitos/Claude-Code-Game-Studios](https://github.com/Donchitos/Claude-Code-Game-Studios)** [Shell] ⭐0（+1380 today）— 用 49 个 AI Agent、72 个工作流技能和协调系统，把 Claude Code 改造成一个模拟真实工作室层级的游戏开发团队，是"多 Agent 组织化协作"的典型实验。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐0（+968 today）— 作者 .agents 目录中直接导出的工程技能集合，反映 Skills 作为 Agent 能力分发格式正在形成社区实践。
- **[paperclipai/paperclip](https://github.com/paperclipai/paperclip)** [TypeScript] ⭐0（+451 today）— 用于在工作中管理 Agent 的开源应用，定位为 Agent 的日常运维/管理界面。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐295,527 — Agent harness 性能优化系统，覆盖技能、记忆、安全与研究优先开发，支持 Claude Code、Codex、Opencode、Cursor。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐259,810 — "随你成长"的 Agent 项目，属高关注度的 Agent 框架。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐119,858 — 开源 AI 浏览器 Agent 库，并提供托管 Agent API 与 stealth 浏览器云服务。
- **[shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code)** [Python] ⭐79,764 — 从 0 到 1 构建类 Claude Code 的 nano "agent harness"，主张"Bash 就够了"，是理解 Agent harness 原理的教学样本。

### 📦 AI 应用

- **[shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos)** [Python] ⭐0（+855 today）— 面向"金融市场语言"的基础模型，是今日热榜中少见的垂类领域基础模型尝试。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐119,920 — 多 Agent LLM 金融交易框架，与 Kronos 共同显示金融场景是 Agent/模型应用的热点垂直领域。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐79,560 — 开源 AI 求职 Agent：扫描职位、按 CV 打分、定制 ATS 友好简历与求职信，本地运行于 Codex/OpenCode 或作为 Claude Code 插件。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐137,458 — 基于主题或关键词、用 AI 大模型与自动化工作流一键生成高清短视频。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐72,576 — 把文档或主题转成原生 PowerPoint 演示文稿，含原生形状、转场动画、数据图表与语音旁白。
- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐108,019 — 用一个 CLI 让 Agent 读取与搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书，零 API 费用。

### 🧠 大模型/训练

- **[karpathy/nanochat](https://github.com/karpathy/nanochat)** [Python] ⭐0（+325 today）— "100 美元能买到的最好的 ChatGPT"，以极低预算复现完整对话模型流程，是今日训练/教学向的代表项目。
- **[p-e-w/heretic](https://github.com/p-e-w/heretic)** [Python] ⭐0（+404 today）— 免训练的语言模型行为改造：去除审查、抑制套话、降低谄媚等，代表"模型后处理/行为编辑"这一非训练干预路线。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐107,701 — 用 PyTorch 从零逐步实现类 ChatGPT 的 LLM，长期高热的系统化学习路径。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,088 — 张量与动态神经网络框架，强 GPU 加速，训练侧的基础设施底座。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,272 — 面向所有人的开源机器学习框架。

### 🔍 RAG/知识库

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐141,071 — 把代码库、文档、SQL schema、配置与 PDF 转成可查询知识图谱，强调本地确定性 AST 解析、每条边可解释、不使用向量库，是"图替代向量检索"路线的代表。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐93,365 — 从 RAG 引擎演进为"context infrastructure"的 agent-native 数据库。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐78,658 — 在内容进入 LLM 前压缩工具输出、日志、文件与 RAG 分块；宣称编码 Agent 减少 20% token、JSON 减少 60–95% token 且答案不变，提供库、代理与 MCP server 三种形态。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,288 — 面向 AI Agent 的 drop-in 记忆层，主打生产可用的持久上下文。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐86,784 — 面向 LLM 与 AI Agent 的开源爬虫，把任意网站转成干净的 LLM-ready Markdown。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐197,951 — 为 AI Agent 提供网络及更广来源的数据。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐148,892 — 定位为"agent engineering platform"，是 Agent 与 RAG 编排的主流平台。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Python] ⭐157,576 — 用户友好的 AI 界面，支持 Ollama、OpenAI API 等后端。

> 说明：Trending 中 `hyprwm/Hyprland`（Wayland 合成器）、`pingdotgg/t3code`（无描述，无法确认 AI 相关性）、`D4Vinci/Scrapling`（通用爬虫框架，描述未明确面向 LLM）未纳入 AI 分类，以免过度归因。`karpathy/nanochat`、`heretic` 等为 0 stars 显示但带今日新增，系 Trending 页展示口径所致。

## 3. 趋势信号分析

第一，**Agent 的"外设层"正在成为最热赛道**。claude-mem（记忆）、agent-desktop（计算机操控）、worktrunk（并行工作流）、paperclip（管理台）、skills/Claude-Code-Game-Studios（技能与角色编排）同日登榜，说明社区竞争焦点已从模型本身转移到"如何让 Agent 跨会话、跨工具、跨角色稳定工作"。第二，**本地与低成本推理双线突破**：FreeToken 把服务端吞吐下沉到桌面，colibri 用纯 C + 磁盘流式专家把前沿 MoE 压进自有硬件，叠加 nanochat 的百美元叙事，硬件门槛下探是今日最一致的工程信号。第三，**上下文成本工程**成为独立品类，headroom 以 token 压缩为核心（JSON 场景宣称 60–95% 削减），与 graphify"弃用向量库"的图谱路线形成两条对抗"上下文膨胀"的技术分支。第四，**免训练模型干预**（heretic）与**垂类基础模型**（Kronos 金融）首次进入视野，提示模型层创新正在从通用预训练转向行为编辑与领域专门化。需要说明的是，本次数据未包含任何大模型发布或会议事件，上述判断仅基于榜单项目描述。

## 4. 社区关注热点

- **claude-mem（Agent 记忆层）**：今日 Trending +1799 stars 且横跨 RAG 主题榜，兼容 Claude Code、Codex、Gemini、Copilot、OpenCode 多家 CLI，是"跨会话上下文"最直接的落地方案，值得评估其压缩与注入策略。
- **agent-desktop（computer-use CLI）**：今日新增 stars 最高（+2243），computer use 是 Agent 从"对话"走向"操作真实软件"的关键接口，Rust 实现也利于分发。
- **colibri / FreeToken（本地大模型推理）**：两者分别以纯 C 磁盘流式 MoE 与桌面级服务吞吐切入，若你的场景受限于显存或云成本，这是今日最值得实测的两个方向。
- **headroom（上下文压缩）**：以 MCP server/代理形式即可接入现有栈，声称编码 Agent 省 20% token、JSON 省 60–95%，是低改造成本的成本优化选项。
- **Skills 分发格式（mattpocock/skills、Claude-Code-Game-Studios）**：Skills 正从个人 .agents 目录演化为可共享、可组合的能力单元，多 Agent 角色协调（49 agents/72 skills）展示了组织化用法，值得跟踪其是否会形成事实标准。


---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*