# AI 开源趋势日报 2026-09-18

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-18 11:49 UTC

---

# AI 开源趋势日报（2026-09-18）

## 一、今日速览

今日 Trending 榜单几乎被「编码智能体周边」占据：Cloudflare 的 security-audit-skill 单日 +3607 stars 登顶，阿里 open-code-review（+3286）紧随其后，Claude Code 系技能（skills）工具链成为最密集的爆发区。与此同时，浏览器/真实环境接入（Tencent BrowserSkill）与智能体记忆压缩（supermemory、claude-mem、headroom、caveman）形成第二条明显主线。主题搜索侧则显示 RAG 与「智能体记忆层」持续沉淀为工程化基础设施。整体看，社区关注点正从「造模型」转向「让智能体在真实工程环境中可靠干活」。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

- **[anthropics/claude-code](https://github.com/anthropics/claude-code)** [TypeScript] ⭐今日 +538
  终端内的智能体编码工具，理解代码库并以自然语言执行任务、处理 git 工作流；作为今日多条技能生态的宿主平台，是整个热点链的基座。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐261,540 · 今日 +1171
  面向 Claude Code、Codex、Cursor 等编码智能体的「harness 性能优化系统」，覆盖技能、直觉、记忆、安全与研究优先开发，是今日 agent harness 方向最热项目。

- **[Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill)** [TypeScript] ⭐今日 +1302
  让 AI 智能体直接使用你已登录的真实浏览器而不打断你工作，CLI + 扩展形式支持任意可调用 shell 的智能体，解决「登录态/真实环境」这一关键落地瓶颈。

- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** [JavaScript] ⭐今日 +680
  生产级工程技能的 AI 编码智能体技能集，把工程最佳实践沉淀为可复用技能。

- **[Fission-AI/OpenSpec](https://github.com/Fission-AI/OpenSpec)** [TypeScript] ⭐今日 +298
  面向 AI 编码助手的规格驱动开发（SDD），用规格约束智能体行为。

- **[alibaba/open-code-review](https://github.com/alibaba/open-code-review)** [Go] ⭐今日 +3286
  阿里规模实战验证的代码评审工具，确定性流水线 + LLM Agent 混合架构，支持行级精确评论与多语言规则集，兼容 OpenAI 与 Anthropic。

（同维度另有成熟基建：**[ollama/ollama](https://github.com/ollama/ollama)** ⭐181,197、**[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐166,284、**[pytorch/pytorch](https://github.com/pytorch/pytorch)** ⭐103,081）

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** [JavaScript] ⭐今日 +3607
  今日 Trending 榜首。面向编码智能体的多阶段安全审计技能，产出可独立验证的机器可读发现，代表「安全审计」被正式纳入智能体技能目录。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐246,742
  「与你一起成长的智能体」，主题搜索 ai-agent 下星数最高的通用智能体项目之一。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐115,076
  让智能体使用浏览器，浏览器操作类智能体的代表性基础库。

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐82,987
  一条 CLI 让智能体读取搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书，零 API 费用，扩展智能体的互联网触达面。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐72,001
  开源 AI 求职自动化：扫描招聘门户、结构化评估、定制简历、跟踪申请，本地运行于你的 AI 编码 CLI 中。

- **[TencentCloud/Octop](https://github.com/TencentCloud/Octop)** [Python] ⭐今日 +367
  可自托管的多用户、多智能体 AI 助手。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐107,396
  多智能体 LLM 金融交易框架，智能体垂直落地金融场景的代表。

- **[tinydotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐94,164
  跨会话持久上下文：捕获智能体会话内容、AI 压缩后回注未来会话，兼容 Claude Code、Codex、Gemini 等多家。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Python] ⭐152,457
  用户友好的 AI 界面，支持 Ollama、OpenAI API 等，本地/自托管对话前端的事实标准。

- **[langgenius/dify](https://github.com/langgenius/dify)** [TypeScript] ⭐156,268
  在一个协作工作区里构建 Agentic 工作流与 RAG 流水线，支持云、VPC、自托管部署。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐66,174
  本地优先的智能体体验平台，「不再租用智能」。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐124,524
  用 AI 大模型与自动化工作流一键生成高清短视频。

- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** [Python] ⭐65,240
  LLM 驱动的多市场股票智能分析系统，多源行情 + 实时新闻 + 决策看板 + 自动推送，可零成本定时运行。

- **[tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp)** [JavaScript] ⭐今日 +64
  将 Claude Code 接入 TradingView Desktop 做 AI 辅助图表分析的个人工作流自动化。

- **[thedotmack/supermemory](https://github.com/supermemoryai/supermemory)** [TypeScript] ⭐今日 +140
  极快、可扩展、可完全本地运行的记忆与上下文引擎，自称「AI 时代的 Memory API」。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐200,163
  面向所有人的开源机器学习框架，训练侧长期基础设施。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐105,182
  用 PyTorch 从零逐步实现类 ChatGPT 的 LLM，是学习大模型原理的首选教程式仓库。

- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** [Python] ⭐187,425
  「人人可用的 AI」愿景项目，早期自主智能体范式的开创者。

- **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** [Python] ⭐67,289 / **[keras-team/keras](https://github.com/keras-team/keras)** [Python] ⭐64,320
  经典机器学习与深度学习的高层 API，仍是入门与生产基线。

- 教学向同列：**[microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners)** ⭐68,680、**[microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners)** ⭐90,633。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐181,839
  大规模搜索、抓取与交互的 Web 数据 API，是 RAG 语料获取的关键入口。

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐146,586
  智能体工程平台，RAG 与 Agent 编排的主流框架。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐90,934
  将前沿 RAG 与 Agent 能力融合的开源 RAG 引擎，为 LLM 提供更优上下文层。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐119,205
  把代码库、文档、SQL schema、配置与 PDF 转成可查询知识图谱，本地确定性 AST 解析、无需向量库。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐65,568
  面向 AI 智能体的记忆层，可即插即用的记忆基础设施。

- **[PaddlePaddle/PaddleOCR](https://github.com/PaddlePaddle/PaddleOCR)** [Python] ⭐89,766
  把任意 PDF/图片转为结构化数据，支持 100+ 语言，是文档 RAG 的常用前置。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐72,877
  在内容抵达 LLM 前压缩工具输出、日志、文件与 RAG 分块，JSON 场景可省 60-95% token，提供库/代理/MCP server。

- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** [Python] ⭐138,782 / **[datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents)** [Python] ⭐79,751
  前者汇集 100+ AI 智能体、技能与 RAG 应用；后者是《从零开始构建智能体》中文教程。

---

## 三、趋势信号分析

今日热榜最鲜明的信号是「编码智能体技能化」（Agent Skills）的集中爆发：Cloudflare security-audit-skill（+3607）、阿里 open-code-review（+3286）、ECC（+1171）、agent-skills（+680）、OpenSpec（+298）同日登榜，说明社区正把安全审计、代码评审、规格驱动开发等具体工程能力封装成可插拔技能，而非继续堆砌通用 Agent 框架。第二条主线是「真实环境与上下文接入」：BrowserSkill 解决已登录浏览器操作，Agent-Reach 打通社媒与互联网读取，supermemory、claude-mem、headroom、caveman 则从记忆持久化与 token 压缩两端降低智能体运行成本——「省 token」首次以独立品类（caveman 宣称省 65%）高调登榜。此外，RAG 侧出现 Graphify 这类「确定性 AST + 知识图谱、不要向量库」的新范式，值得关注。整体上，行业焦点已从模型能力竞争转向智能体的工程可靠性、安全边界与成本效率。

---

## 四、社区关注热点

- **编码智能体安全审计**：[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 单日 +3607 登顶，机器可读、可独立验证的安全发现或成智能体上生产的准入门槛。
- **混合架构代码评审**：[alibaba/open-code-review](https://github.com/alibaba/open-code-review) 用「确定性流水线 + LLM Agent」替代纯模型方案，阿里规模验证，兼容 OpenAI/Anthropic，落地参考价值高。
- **智能体真实环境接入**：[Tencent/BrowserSkill](https://github.com/Tencent/BrowserSkill) 让智能体复用已登录真实浏览器，是突破自动化授权与登录态瓶颈的实用方向。
- **上下文成本工程**：[supermemoryai/supermemory](https://github.com/supermemoryai/supermemory)、[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)、[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) 分别从记忆引擎、跨会话记忆、token 压缩切入，直接决定智能体能否规模化。
- **知识图谱式 RAG 新思路**：[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) 以本地确定性 AST 解析替代向量库，为代码库与文档检索提供可解释路径。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*