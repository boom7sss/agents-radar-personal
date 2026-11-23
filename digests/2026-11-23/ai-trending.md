# AI 开源趋势日报 2026-11-23

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-23 22:04 UTC

---

# AI 开源趋势日报（2026-11-23）

## 1. 今日速览

今日热榜最大的信号是“Agent 原生”正在从概念变为工程实践：CLI-Anything 提出让所有软件变成 Agent 可调用的接口，而 Claude-BugHunter、superpowers、stitch-skills 等“技能包（Skills）”集中登榜，说明社区正在围绕 Claude Code / Codex / Gemini CLI 等编码 Agent 构建可复用的能力层。与此同时，面向 Agent 的“上下文经济”成为新战场——firecrawl（知识获取）、headroomlabs（Token 压缩）、claude-mem（跨会话记忆）、caveman（精简输出）从不同角度解决同一问题。基础层方面，minimind 用“2 小时训练 64M 小模型”持续吸引关注，openvino 代表端侧推理优化仍被重视。整体看，今日热点高度集中于**编码 Agent 的周边生态（技能、记忆、检索、压缩）**，而非新模型本身。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything)** ⭐0（+783 today）
  提出“让所有软件 Agent-Native”，把 CLI 作为 Agent 调用软件的统一入口，是今日最具范式意义的基础工具动向。
- **[openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino)** ⭐0（+183 today）
  Intel 主导的 AI 推理优化与部署工具包，端侧/边缘推理方向的老牌基础设施。
- **[cursor/plugins](https://github.com/cursor/plugins)** ⭐0（+395 today）
  Cursor 插件规范与官方插件集，编码 Agent 生态开始出现标准化扩展机制。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐169,273 [topic:llm]
  文本/视觉/音频/多模态模型的模型定义框架，推理与训练通用底座。
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐187,906 [topic:llm]
  本地快速运行 Kimi、GLM、DeepSeek、Qwen、Gemma 等模型的主流 Go 工具。
- **[caveman](https://github.com/JuliusBrussee/caveman)** ⭐122,401 [topic:llm]
  面向编码 Agent 的“省 Token”技能 + 本地代理，压缩回答与工具输出且原始内容可还原。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐0（+838 today）
  Agent 技能框架与软件开发方法论，今日登榜说明“如何组织 Agent 能力”正被系统化。
- **[elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)** ⭐0（+2037 today，今日榜首）
  82 个技能、15 个 slash 命令、681 条漏洞模式的红队技能包，是今日 stars 增量最高的项目，代表“垂直安全场景 + 编码 Agent”的组合。
- **[google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills)** ⭐0（+425 today）
  遵循 Agent Skills 开放标准、面向 Stitch MCP server 的技能库，兼容 Antigravity、Gemini CLI、Claude Code、Cursor。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** ⭐309,527 [topic:llm]
  Agent harness（执行框架）性能优化系统，覆盖技能、本能、记忆、安全等维度。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐265,651 [topic:ai-agent]
  “与你一起成长”的 Agent，NousResearch 出品的智能体项目。
- **[Tracer-Cloud/opensre](https://github.com/Tracer-Cloud/opensre)** ⭐0（+438 today）
  面向 CI/CD 可靠性的开源 Agent，运维场景的 Agent 化落地。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐69,385 [topic:rag] / **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐119,308 [topic:rag]
  分别为 Agent 的长期记忆层与跨会话上下文注入，是 Agent 持久化的代表项目。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)** ⭐0（+908 today）
  开源 AI 视频剪辑桌面工具，长视频一键剪成短视频并生成字幕/封面/文案，适配抖音、小红书、TikTok 等。
- **[mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)** ⭐0（+790 today）
  跨 Reddit、X、YouTube、HN、Polymarket 的主题调研 Agent 技能，输出有据可依的摘要。
- **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)** ⭐0（+624 today）
  为多种编码 Agent 提供 52 种图表类型的 HTML+SVG 设计技能，明确对标“Mermaid 质量差”的痛点。
- **[mjmirza/app-store-compliance](https://github.com/mjmirza/app-store-compliance)** ⭐0（+755 today）
  应用商店合规 playbook + Agent 技能，含 124 条拒审模式与 112 个监管截止日期（含 EU AI Act）。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** ⭐145,233 [topic:llm]
  根据主题/关键词一键生成高清短视频的自动化工作流。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** ⭐84,421 [topic:ai-agent]
  开源求职 Agent，按 CV 打分、定制简历并做面试准备，本地运行于多种 AI CLI。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)** ⭐0（+828 today）/ ⭐69,404 [topic:llm-model]
  “2 小时从 0 训练 64M 小模型”，同时出现在今日热榜与主题搜索，是入门级 LLM 训练的代表项目。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** ⭐108,916 [topic:ml]
  用 PyTorch 逐步实现类 ChatGPT 的 LLM，系统化学习路径。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** ⭐105,697 [topic:ml]、**[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** ⭐201,708 [topic:ml]、**[keras-team/keras](https://github.com/keras-team/keras)** ⭐64,444 [topic:ml]
  训练框架三件套，长期占据 AI 训练基础设施基本盘。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** ⭐79,942 [topic:ml]
  AI 工程化学习项目，“学—建—交付”一体化。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐123,597 [topic:llm]
  多智能体 LLM 金融交易框架（偏应用，但含多 Agent 编排能力）。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐0（+920 today）/ ⭐207,825 [topic:llm]
  通过单一 API 访问 550+ 数据源的“知识基础设施”，今日热榜高增，是 Agent 获取实时外部信息的核心入口。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** ⭐152,503 [topic:rag]
  把代码库/文档/SQL/PDF 转成可查询知识图谱，强调本地确定性 AST 解析、**不用向量库**，是与主流向量 RAG 的鲜明对照。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐94,597 [topic:rag]
  自称“Agent 原生数据库”，从 RAG 引擎演化为上下文基础设施。
- **[langchain-ai/langchain](https://github.com/langgenius/dify)**——注：按材料分别为 **[langchain](https://github.com/langchain-ai/langchain)** ⭐149,938（Agent 工程平台）与 **[dify](https://github.com/langgenius/dify)** ⭐161,760（Agentic 工作流 + RAG 协作空间）。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** ⭐80,664 [topic:rag]
  在内容进入 LLM 前压缩工具输出、日志与 RAG 片段，宣称 JSON 可减少 60–95% Token。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** ⭐87,726 [topic:rag]
  Apache-2.0 的抓取/提取/搜索 API，可自托管，服务于 AI Agent 的网页数据获取。

---

## 3. 趋势信号分析

今日最显著的爆发点是**编码 Agent 的“技能化”生态**：Claude-BugHunter（+2037）、superpowers（+838）、last30days-skill、stitch-skills、diagram-design 等清一色是“Skills/slash 命令”形态，说明社区已从“造 Agent”转向“给 Agent 装能力”，且开始出现 Agent Skills 开放标准与 MCP 配套。第二个信号是**上下文经济学**首次成体系登榜——caveman（省 Token）、headroom（压缩输出）、claude-mem（跨会话记忆）、firecrawl（外部知识接入）从四个环节解决同一问题，反映出 Token 成本与上下文长度已成为 Agent 落地的核心瓶颈。此外，CLI-Anything 提出的“软件 Agent-Native”是今日最具前瞻性的新方向，试图把 CLI 统一为 Agent 操作软件的接口层。值得注意的是 graphify 明确“不用向量库”，代表知识图谱对向量 RAG 的路线挑战。整体看，今日热度与“新模型发布”关联较弱，而更多与编码 Agent 工具链的工程化、标准化演进相关。

---

## 4. 社区关注热点

- **Claude-BugHunter**（+2037，今日榜首）：垂直红队/漏洞挖掘技能包的极端成功，提示“高价值垂直场景 + 编码 Agent 技能化”是可复制的爆款模式。
- **CLI-Anything**：把 CLI 作为 Agent 统一调用层，若形成生态，可能改变 Agent 与软件交互的标准方式，值得早期跟踪。
- **上下文压缩/记忆赛道（headroom、caveman、claude-mem、mem0）**：Token 成本与跨会话连续性是企业落地的真实痛点，这四个项目覆盖不同环节，建议组合评估。
- **firecrawl + Graphify 的检索路线之争**：前者走“统一数据源 API”，后者走“确定性知识图谱、拒绝向量库”，代表 RAG 的两种技术路径，值得对比验证。
- **minimind**：同时出现在今日热榜与 LLM 主题，低门槛小模型训练项目对教学与端侧原型开发仍具持续吸引力。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*