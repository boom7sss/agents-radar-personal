# AI 开源趋势日报 2026-10-09

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-10-10 02:27 UTC

---

# AI 开源趋势日报（2026-10-09）

## 1. 今日速览

今日 GitHub Trending 被 **AI 编码智能体的"技能（Skills）"生态**主导：`mattpocock/skills`、`cathrynlavery/diagram-design`、`addyosmani/agent-skills`、`twostraws/SwiftUI-Agent-Skill` 同时登榜，说明社区正围绕 Claude Code、Codex 等 CLI 智能体沉淀可复用的工程技能资产。与此同时，`morluto/rea` 以 +14927 今日新增居首，指向"用智能体逆向工程"这一新兴方向。企业侧信号明显——阿里开源 `open-code-review`，Anthropic 推出 `knowledge-work-plugins`，知识工作与代码审查成为大厂落子重点。检索侧则延续"上下文压缩 + 知识图谱"两条主线。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[BerriAI/litellm](https://github.com/BerriAI/litellm)** [Python] ⭐追踪中（+95 today）
  统一调用 100+ LLM API 的 AI Gateway，新版本以 Rust 为核心、Python SDK 为接口，内置成本追踪、护栏、负载均衡与日志，是接入多模型供应商的中立层。
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** [Go]（+326 today）
  阿里规模化验证的代码审查工具，采用"确定性流水线 + LLM Agent"混合架构，支持行级精确评论与多语言安全规则集（NPE、线程安全、XSS、SQL 注入），兼容 OpenAI 与 Anthropic。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐182,548
  本地运行 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型的默认入口，是本地推理的社区基础设施。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐166,949
  文本、视觉、音频、多模态模型的定义框架，覆盖推理与训练，仍是模型侧的事实标准。
- **[thedaviddias/Front-End-Checklist](https://github.com/thedaviddias/Front-End-Checklist)** [MDX] ⭐74,418
  现代 Web 开发清单，已明确面向"人类与 AI 智能体"双读者，是前端工程知识被智能体消费化的样本。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[morluto/rea](https://github.com/morluto/rea)** [TypeScript]（+14927 today，今日榜首）
  用智能体做逆向工程：从应用行为一路下探到原生二进制。今日新增最高，代表"智能体 + 底层分析"这一新场景首次大规模登榜。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell]（+1687 today）
  直接取自作者 `.agents` 目录的"给真正工程师的技能"，反映个人级智能体技能资产的公开化。
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** [JavaScript]（+436 today）
  面向 AI 编码智能体的生产级工程技能集，与上者共同构成"Agent Skills"赛道。
- **[cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)** [HTML]（+1739 today）
  面向 Claude Code、Codex、GitHub Copilot、Factory Droid、Pi 的编辑级图表设计技能，含 42 种图表类型，自包含 HTML + SVG，明确反对 Mermaid 式粗糙输出。
- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐276,020
  智能体 harness 性能优化系统，覆盖技能、本能、记忆、安全与研究优先开发，兼容 Claude Code、Codex、Opencode、Cursor。
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐252,301
  "与你共同成长"的智能体，定位通用 Agent 框架。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐117,438
  让智能体操作浏览器的代表性项目，是网页自动化 Agent 的默认选择。
- **[twostraws/SwiftUI-Agent-Skill](https://github.com/twostraws/SwiftUI-Agent-Skill)**（+65 today）
  面向 Claude Code、Codex 等工具的 SwiftUI 智能体技能，说明技能生态正从通用扩展到具体 UI 框架。

### 📦 AI 应用（应用产品、垂直场景解决方案）

- **[anthropics/knowledge-work-plugins](https://github.com/anthropics/knowledge-work-plugins)** [Python]（+709 today）
  Anthropic 开源的插件仓库，主要面向知识工作者在 Claude Cowork 中使用，是大厂押注"知识工作智能体"的明确信号。
- **[storytold/artcraft](https://github.com/storytold/artcraft)** [Rust]（+3752 today）
  面向艺术家、设计师、电影制作人的"刻意创作引擎"，今日新增位居前列，代表生成式创作工具向专业工作流渗透。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐73,913
  开源 AI 求职智能体：扫描职位、按 CV 打 1–5 分、定制 ATS 友好简历与求职信、面试准备与申请追踪，本地运行于 Claude Code、Codex、OpenCode 等 CLI。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐129,346
  用大模型与自动化工作流，按主题或关键词一键生成高清短视频。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐66,105
  LLM 驱动的多市场股票智能分析系统，含多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。
- **[Robbyant/lingbot-map](https://github.com/Robbyant/lingbot-map)** [Python]（+110 today）
  LingBot-Map：面向流式 3D 重建的几何上下文 Transformer，标注为 ECCV 2026 Best Paper Award Candidate，属研究型应用。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐200,576
  面向所有人的开源机器学习框架，仍是训练与部署的基础设施。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐104,007
  Python 张量与动态神经网络，强 GPU 加速，研究与生产的默认训练框架。
- **[keras-team/keras](https://github.com/keras-team/keras)** [Python] ⭐64,360
  "Deep Learning for humans"，高层建模接口。
- **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** [Python] ⭐62,340
  YOLO27、YOLO26、YOLO11、YOLOv8 系列，覆盖检测、实例/语义分割、分类、姿态估计与目标跟踪。
- **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** [Python] ⭐67,512
  Python 经典机器学习库，仍是表格与基线任务的常用选择。
- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐66,230
  "Learn it. Build it. Ship it for others."——面向 AI 工程实操的学习路径项目。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐189,954
  为 AI 智能体提供网页与更广来源的数据，定位"超智能的图书馆"。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐147,516
  智能体工程平台，是 RAG 与 Agent 编排的长期主力。
- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐158,028
  在一个协作工作区构建 Agentic 工作流与 RAG 流水线，支持云、VPC 或自托管，直达生产。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Python] ⭐154,156
  用户友好的 AI 界面，支持 Ollama 与 OpenAI API。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐125,050
  把代码库连同文档、SQL schema、配置与 PDF 变成可查询知识图谱，本地确定性 AST 解析、每条边可解释、不使用向量库，作为 /graphify 技能接入 Claude Code、Cursor、Codex、Gemini CLI。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐99,003
  跨会话持久上下文：记录智能体行为、AI 压缩后回注未来会话，兼容 Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐91,923
  开源 RAG 引擎，把 RAG 与 Agent 能力融合为 LLM 的上下文层。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐66,910
  面向 AI 智能体的记忆层，即插即用的生产级记忆基础设施。

---

## 3. 趋势信号分析

**"Agent Skills"成为今日最密集的爆发点。** Trending 11 个仓库中有 5 个直接是技能/插件形态（mattpocock/skills、diagram-design、agent-skills、SwiftUI-Agent-Skill、knowledge-work-plugins），说明社区注意力正从"造智能体"转向"给智能体装技能"——可复用、可分发、跨 CLI 兼容的工程资产成为新的竞争单位。**新兴栈首次显性登榜的是"智能体做逆向工程"（morluto/rea，+14927）与"智能体驱动的专业创作"（artcraft，+3752）**，两者都指向智能体向底层系统与专业行业纵深。**上下文工程进一步分化出两条路线**：一条是压缩（headroom、caveman 用"少 token"换成本），一条是记忆与知识图谱（claude-mem、mem0、graphify），反映长任务智能体对"记住什么、丢掉什么"的现实焦虑。企业侧，阿里与 Anthropic 同日分别落子代码审查与知识工作插件，表明大厂正把智能体从演示推进到组织内部的生产流程。

---

## 4. 社区关注热点

- **[morluto/rea](https://github.com/morluto/rea)** — 今日新增最高（+14927），"智能体逆向工程"这一新场景值得第一时间验证其可复现性与适用范围。
- **Agent Skills 生态（[mattpocock/skills](https://github.com/mattpocock/skills)、[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)、[diagram-design](https://github.com/cathrynlavery/diagram-design)）** — 若你重度使用 Claude Code / Codex，这是当下投入产出比最高的可复用资产方向。
- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** — 大厂规模化验证的"确定性流水线 + LLM Agent"混合架构，是评估 AI 代码审查能否进生产的重要参照。
- **上下文压缩路线（[headroom](https://github.com/headroomlabs-ai/headroom)、[caveman](https://github.com/JuliusBrussee/caveman)）** — 直接对应 token 成本，JSON 场景宣称降低 60–95%，对长上下文Agent 有直接价值。
- **知识图谱式检索（[graphify](https://github.com/Graphify-Labs/graphify)）** — "不用向量库、每条边可解释"的思路，是向量检索之外值得对比的一条 RAG 路线。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*