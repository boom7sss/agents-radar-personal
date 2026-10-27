# AI 开源趋势日报 2026-07-12

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-12 03:32 UTC

---

# AI 开源趋势日报（2026-07-12）

## 一、今日速览

今日 GitHub AI 领域最引人注目的动向是 **MCP（Model Context Protocol）生态的爆发式增长**：`DesktopCommanderMCP` 单日新增 909 stars，`superpowers` 和 `stitch-skills` 也分别获得 740 和 340 stars，表明社区对标准化 Agent 能力接口（MCP 与 Agent Skills 开放标准）的需求急剧上升。与此同时，Claude Code 配套工具持续走热（`claude-code-templates` +232，`claude-cookbooks` +219），自主 Agent 框架如 `hermes-agent`（213k stars）和 `AutoGPT`（185k stars）仍然霸榜。RAG 赛道继续由 `open-webui`（145k）、`ragflow`（84k）等引领，本地优先与知识图谱结合成为新趋势。

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、CLI）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|------------------|------------|
| [ollama/ollama](https://github.com/ollama/ollama) | 175,944 | 本地运行 Kimi、DeepSeek、Qwen 等大模型的一站式 CLI 工具，持续支持最新模型 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 85,999 | 高吞吐、低内存的 LLM 推理引擎，已成为部署主流模型的首选 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | 141,561 | 智能体工程平台，提供统一的 Agent、工具调用和 RAG 抽象层 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | 50,789 | 文档智能体与 OCR 平台，专注于非结构化数据的索引与检索 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 162,514 | 模型定义与微调的标准框架，支持文本、视觉、音频等多模态 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) / [pytorch/pytorch](https://github.com/pytorch/pytorch) | 196k / 101k | 两大深度学习框架，仍是训练和推理的基础设施 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|------------------|------------|
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 213,342 | “与你一同成长的智能体”，强调持续学习和自我进化 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | 185,481 | 开源自主 Agent 先驱，支持任务规划与工具调用 |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | 80,497 | AI 驱动软件开发，能在 IDE 中自主完成代码编写、调试和部署 |
| [langgenius/dify](https://github.com/langgenius/dify) | 148,528 | 生产级智能体工作流平台，支持可视化编排与多模型混合 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 35,923 | 前端 Agent 栈，让 React、Angular 等应用快速集成生成式 UI 与 Agent 能力 |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | 54,537 | 低代码可视化构建 AI Agent，无需编码即可搭建复杂工作流 |
| [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) | ⭐? (+909) | Claude 的 MCP 服务器，赋予终端控制、文件搜索和差异编辑能力，今日最热项目 |
| [obra/superpowers](https://github.com/obra/superpowers) | ⭐? (+740) | 智能体技能框架与软件开发方法论，定义了一种新的 Agent 编程范式 |

### 📦 AI 应用（具体产品、垂直场景）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|------------------|------------|
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 48,450 | AI 生产力工作室，集智能聊天、自主 Agent 和 300+ 助手于一体 |
| [ZHuLinsen/daily_stock_analysis](https://github.com/ZHuLinsen/daily_stock_analysis) | 56,711 | LLM 驱动的多市场股票分析系统，支持行情、新闻、决策看板和自动推送 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 38,414 | 用 AI 从文档生成真实可编辑的 PowerPoint，支持动画、图表和语音旁白 |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | 54,971 | 让 AI Agent 通过一个 CLI 浏览整个互联网，零 API 费用访问 Twitter、Reddit、YouTube 等 |
| [DayuanJiang/next-ai-draw-io](https://github.com/DayuanJiang/next-ai-draw-io) | ⭐? (+81) | 通过自然语言与 AI 交互创建和修改 draw.io 图表，结合视觉增强 |
| [anthropics/claude-cookbooks](https://github.com/anthropics/claude-cookbooks) | ⭐? (+219) | Claude 官方示例集合，展示提示工程、工具使用和 Agent 构建技巧 |
| [davila7/claude-code-templates](https://github.com/davila7/claude-code-templates) | ⭐? (+232) | 配置和监控 Claude Code 的 CLI 工具，提升开发效率 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|------------------|------------|
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | 98,937 | 从零用 PyTorch 实现类 ChatGPT 的 LLM，配套书籍级教程 |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | 7,184 | 大规模 LLM 评估平台，支持 100+ 数据集和主流模型对比 |
| [galilai-group/stable-pretraining](https://github.com/galilai-group/stable-pretraining) | 283 | 可靠、可扩展的基础模型预训练库，聚焦训练稳定性与可复现性 |
| [testtimescaling/testtimescaling.github.io](https://github.com/testtimescaling/testtimescaling.github.io) | 107 | 关于 LLM 测试时扩展（Test-Time Scaling）的综述与资源集合 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars（今日新增） | 一句话说明 |
|------|------------------|------------|
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | 145,095 | 用户友好的 AI 聊天界面，支持 Ollama、OpenAI，自带 RAG 知识库功能 |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | 84,836 | 领先的开源 RAG 引擎，融合 Agent 能力提供强大的 LLM 上下文层 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | 63,132 | 本地优先的 Agent 体验，一站式管理文档、模型和对话 |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | 33,163 | 高性能向量数据库，专为下一代 AI 搜索和推荐系统设计 |
| [milvus-io/milvus](https://github.com/milvus-io/milvus) | 45,197 | 云原生向量数据库，支持可扩展的 ANN 搜索，广泛用于企业级 AI |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | 60,631 | AI Agent 的通用记忆层，实现跨会话的持久上下文与知识管理 |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | 82,493 | 将代码、SQL、文档等转化为可查询的知识图谱，支持多种 AI 编码助手 |

## 三、趋势信号分析

1. **MCP 与 Agent 技能标准化成为新爆发点**：`DesktopCommanderMCP`（+909）、`superpowers`（+740）、`stitch-skills`（+340）今日涨幅惊人。这背后是 Agent 生态从“单一工具”向“可组合技能”的转变——MCP 协议让 Claude、Gemini CLI、Cursor 等编码 Agent 共享同一套能力接口，而 `superpowers` 提出的技能框架和方法论则试图定义 Agent 开发的“最佳实践”。社区正在快速拥抱这一标准化运动。

2. **Claude Code 工具链持续升温**：Anthropic 的 Claude 系列在开发者群体中影响力持续扩大。`claude-code-templates`、`claude-cookbooks` 以及依赖 Claude 的 MCP 项目集中出现，表明开发者不再满足于“对话式使用”，而是深度集成到开发流程中，追求更高的自主性和可控性。

3. **RAG 与知识图谱融合**：`Graphify`（82k stars）将代码、文档、数据库结构等转换为知识图谱，打破了传统 RAG 仅基于向量检索的局限，实现关联推理。`mem0` 和 `cognee` 等记忆层项目则试图让 Agent 获得长期知识，预示着下一阶段“有记忆的 Agent”将成为标配。

4. **小型专业训练框架崛起**：`stable-pretraining`、`testtimescaling` 等规模较小但方向聚焦的项目获得关注，显示社区开始从“堆模型”转向“精调方法”和“评估透明度”。这与当前学术界对测试时扩展、预训练稳定性等前沿问题的讨论相呼应。

## 四、社区关注热点

- **MCP 服务器与 Agent 技能库**：重点关注 `wonderwhy-er/DesktopCommanderMCP`（终端控制）和 `google-labs-code/stitch-skills`（Google Lab 官方技能库），它们代表了 Agent 与操作系统、Web 服务深度集成的新范式。
- **Agent 开发方法论**：`obra/superpowers` 提出了完整的技能框架和软件开发方法论，尝试解决 Agent 项目难以维护、不可复现的痛点，值得所有 Agent 开发者研究。
- **本地隐私优先的 AI 应用**：`open-webui`、`anything-llm`、`ollama` 持续高星，反映用户对数据主权的强需求。结合 `Graphify` 的本地知识图谱，个人或企业可构建完全离线的智能知识系统。
- **LLM 评估与安全**：`opencompass` 和 `testtimescaling` 代表社区对模型能力透明度的重视。随着更多模型发布，如何科学评估和红队测试将成为关键议题。
- **AI 辅助金融与内容创作**：`daily_stock_analysis`（股票分析）、`ppt-master`（演示文稿生成）等垂直应用星数极高，说明 AI 正快速渗透到专业业务流程，且开源方案正在取代闭源工具。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*