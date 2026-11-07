# AI 开源趋势日报 2026-11-07

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-07 16:28 UTC

---

# AI 开源趋势日报（2026-11-07）

## 1. 今日速览

今日最强烈的信号是 **Agent Skills（智能体技能）生态的集中爆发**：Trending 榜前五中有四个是 skills 类仓库（Cloudflare、Google、Anthropic、Matt Pocock），说明"给编码智能体装技能包"正成为新的扩展范式。其次是 **上下文压缩与内存管理**成为独立品类（billion-context、headroom、claude-mem、caveman 同日上榜或高频出现），直接指向 token 成本与长会话这两个真实痛点。基础工具层面，浏览器自动化（agent-browser、browser-use）与数据抓取（firecrawl、crawl4ai）持续火热，agent 的"感官层"仍在快速成熟。传统 ML 框架（tensorflow、pytorch、scikit-learn）保持存量热度但无新增长故事，教育类仓库（LLMs-from-scratch、AI-For-Beginners）仍是星标大户。

---

## 2. 各维度热门项目

### 🔧 AI 基础工具

- **[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)** [JavaScript] ⭐0（+2088 today）
  今日 Trending 新增 stars 最高的项目：一个面向编码智能体的多阶段安全审计"技能"，产出可机器读取、可独立验证的审计结论，代表厂商把安全能力封装为标准 agent skill 的思路。

- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** [Rust] ⭐0（+180 today）
  Vercel 实验室出品的浏览器自动化 CLI，专为 AI agent 设计，用 Rust 实现，是 agent 操作网页的底层工具层新选手。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐120,248（主题搜索）
  开源 AI 浏览器 agent 的 Python 库，并提供托管的 stealth 浏览器与 agent API，是该赛道的存量头部项目。

- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐186,250（主题搜索）
  本地模型推理与运行入口，支持 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等模型，仍是本地部署的事实标准。

- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐79,066（主题搜索）
  在工具输出、日志、文件、RAG chunk 进入 LLM 前做压缩，宣称编码 agent 省 20% token、JSON 场景省 60–95%，提供库、代理与 MCP server 三种形态。

- **[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)** [TypeScript] ⭐0（+185 today）
  上下文压缩插件，面向月级长会话与十万级小窗口场景，宣称节省 5 倍 token，是今日 Trending 中"长上下文降本"方向的代表。

- **[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)** [Go] ⭐118,121（主题搜索）
  通过"原始人式"精简表达削减 65% token 的编码 agent 技能与代理，与 headroom、billion-context 共同构成 token 压缩赛道。

- **[dsx-ai-factory/nvke](https://github.com/dsx-ai-factory/nvke)** [Go] ⭐0（+125 today）
  NVIDIA Kubernetes Engine，裸金属 GPU K8s 的管理平面，属于 AI 基础设施层的编排工具。

### 🤖 AI 智能体/工作流

- **[google/skills](https://github.com/google/skills)** [Python] ⭐0（+449 today）
  Google 官方为自家产品与技术提供的 Agent Skills 集合，是大厂正式进入 skills 标准的信号。

- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐0（+1111 today）
  来自知名 TypeScript 教育者 `.agents` 目录的真实工程 skills，今日新增 stars 仅次于 Cloudflare，说明个人开发者的 skills 实践同样具备传播力。

- **[anthropics/skills](https://github.com/anthropics/skills)** [Python] ⭐0（+386 today）
  Anthropic 官方的 Agent Skills 公共仓库，是 skills 这一范式的源头定义方。

- **[affaan-m/ECC](https://github.com/affaan-m/ECC)** [JavaScript] ⭐298,974（主题搜索）
  面向 Claude Code、Codex、Cursor 等的 agent harness 性能优化系统，涵盖 skills、instincts、记忆与安全，是 harness 层体量最大的项目。

- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** [Python] ⭐261,410（主题搜索）
  "随你成长"的 agent 项目，由 Nous Research 维护，属 agent 框架层的头部存量项目。

- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,156（主题搜索）
  自我定位为"agent engineering platform"，仍是 agent 工程化的主流底座。

- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐120,248（主题搜索）
  同上，AI 浏览器 agent 库 + 云服务，属 agent 工具链核心。

- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐80,873（主题搜索）
  开源 AI 求职 agent：扫描职位、按 CV 打分、定制简历与求职信，可在 Codex、OpenCode 等 CLI 或作为 Claude Code 插件本地运行。

### 📦 AI 应用

- **[milind-soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot)** [TypeScript] ⭐0（+1986 today）
  开源的 Grok Bot 替代品，核心特点是给 bot 配备可操作的虚拟机，是今日 Trending 新增 stars 第二高的项目。

- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐143,854（主题搜索）
  把代码库、文档、SQL schema、配置与 PDF 转成可查询知识图，作为 Claude Code / Cursor / Codex / Gemini CLI 的 skill 使用，强调本地确定性 AST 解析、无向量库。

- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐140,616（主题搜索）
  用 AI 大模型与自动化工作流，按主题或关键词一键生成高清短视频。

- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐121,131（主题搜索）
  多智能体 LLM 金融交易框架，是垂直金融场景中体量最大的 agent 项目之一。

- **[Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach)** [Python] ⭐109,915（主题搜索）
  给 AI agent "上网的眼睛"：一个 CLI 读取并搜索 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书，宣称零 API 费用。

- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐74,506（主题搜索）
  将文档或主题转成原生 PowerPoint（原生形状、转场、动画、图表、旁白），支持自定义 .pptx 模板。

- **[meta/astryx](https://github.com/meta/astryx)** [TypeScript] ⭐0（+185 today）
  Meta 开源的完全可定制、面向 agent 就绪的设计系统，属 AI 应用的前端基础设施。

- **[openbq-org/OpenBB](https://github.com/openbq-org/OpenBB)** [Python] ⭐75,200（主题搜索）
  面向分析师、量化与 AI agent 的开放数据平台。

### 🧠 大模型/训练

- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,622（主题搜索）
  文本、视觉、音频与多模态模型的模型定义框架，兼顾推理与训练，仍是模型层的事实标准。

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,380（主题搜索）
  老牌开源机器学习框架，体量仍在但今日无新增信号。

- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,233（主题搜索）
  Python 张量与动态神经网络，强 GPU 加速，研究到生产的默认选择之一。

- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐107,966（主题搜索）
  用 PyTorch 一步步实现类 ChatGPT 的 LLM，是训练原理学习类最热仓库。

- **[rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch)** [Python] ⭐77,313（主题搜索）
  "学它、建它、为他人发布"的 AI 工程学习路径项目。

- **[microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners)** [Jupyter Notebook] ⭐92,051（主题搜索）与 **[microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners)** [Jupyter Notebook] ⭐70,624（主题搜索）
  微软两套 12 周课程，分别覆盖经典 ML 与 AI 入门，持续吸引学习者。

- **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** [Python] ⭐68,080（主题搜索）
  Python 经典机器学习库，仍是非深度学习的默认工具。

- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** [TypeScript] ⭐199,441（主题搜索）
  为 AI agent 提供网页与更广来源的数据，自我定位为"超级智能的数据层"，属训练/推理数据供给端。

### 🔍 RAG/知识库

- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐114,325（主题搜索）
  跨会话持久上下文：捕获 agent 会话内容、用 AI 压缩、再把相关上下文注入后续会话，兼容 Claude Code、Codex、Gemini、Copilot、OpenCode 等。

- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐93,722（主题搜索）
  从 RAG 引擎成长为"agent 原生数据库"的上下文基础设施。

- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐87,044（主题搜索）
  Apache-2.0 爬虫，同时提供面向 AI agent 的托管抓取/抽取/搜索 API（免费额度 1000 credits/月），可自托管。

- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,560（主题搜索）
  AI agent 的记忆层：可插拔的持久记忆基础设施，面向生产环境。

- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐68,036（主题搜索）
  本地优先的一体化 agent 体验，强调"拥有而非租用智能"，归类为向量库/知识管理方向。

- **[Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps)** [Python] ⭐144,094（主题搜索）
  100+ AI agent、agent skills 与 RAG 应用的合集，是 RAG/agent 应用的最佳实践索引。

- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐160,618（主题搜索）
  在一个协作工作台里构建 agentic workflow 与 RAG pipeline，支持云、VPC 与自托管。

---

## 3. 趋势信号分析

今日最明确的爆发点是 **Agent Skills**：Cloudflare、Google、Anthropic 三家在同一个 Trending 榜单上以 skills 仓库同台，加上个人开发者 Matt Pocock 的 skills 仓库（+1111），构成"厂商定义标准 + 社区填充实践"的典型扩散曲线。这标志着 agent 扩展方式正从"写插件/写工具函数"收敛为"装技能包"，且 skills 开始覆盖安全审计、产品集成这类专业领域。

第二个信号是 **上下文与 token 经济**成为独立赛道。billion-context（Trending）、headroom、caveman、claude-mem 同日出现，切入点从压缩表达、压缩输入到跨会话记忆各不相同，说明社区已把"省 token"和"长会话可用"当作可独立产品化的问题，而非模型能力的附属。

第三，**agent 的感知层**（浏览器、网页抓取、社交平台读取）持续有新项目进入，agent-browser 与 Agent-Reach 分别从底层 CLI 和多平台读取两端补位。相对地，传统 ML 框架与教育类仓库维持存量热度，没有新的增长叙事；今日榜单中未见新的模型权重或训练框架首次登榜。

---

## 4. 社区关注热点

- **Agent Skills 标准之争**：[anthropics/skills](https://github.com/anthropics/skills)、[google/skills](https://github.com/google/skills)、[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 三家同日上榜，值得关注 skills 的目录结构、分发方式与跨 CLI 兼容性是否会形成事实标准。
- **Token 压缩的多种技术路线**：[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)（输入侧压缩）、[JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)（表达侧压缩）、[ranxianglei/billion-context](https://github.com/ranxianglei/billion-context)（长会话压缩）路线不同，可直接对比实测效果。
- **跨会话记忆**：[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) 与 [mem0ai/mem0](https://github.com/mem0ai/mem0) 分别代表"会话捕获式"与"记忆层基础设施式"两种做法，是 agent 长期可用性的关键。
- **技能化的安全审计**：[cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) 今日新增 stars 最高，其"可独立验证、机器可读的审计结论"设计值得作为把专业流程封装为 skill 的参考范式。
- **代码库知识图谱**：[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) 主张本地确定性 AST 解析、无向量库，与主流 RAG 路线形成对照，适合关注代码理解类 agent 的团队评估。

*说明：Trending 榜中的 prometheus、sherlock、ruff、tailwindcss、localthings、zed 等通用工具/编辑器未被纳入 AI 分类；zed 虽为编辑器但描述中无 AI 属性，故略去。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*