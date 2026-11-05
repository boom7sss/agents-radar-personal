# AI 开源趋势日报 2026-11-05

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-11-05 18:03 UTC

---

# AI 开源趋势日报（2026-11-05）

## 一、今日速览

今日最强烈的信号是 **“Agent Skills” 生态的集体爆发**：Trending 榜 15 个仓库中有 5 个是 skills 合集（mattpocock、google、scenario-labs、ConardLi、garrytan），说明社区正从“造 Agent 框架”转向“给 Agent 装能力包”。与之呼应，**Agent 的“感官层”**（浏览器、桌面操控、互联网读取）成为新战场——vercel-labs 同时推出 agent-desktop 与 agent-browser。同时，**Token 成本优化**与**上下文/记忆持久化**构成另一条主线（caveman、headroom、claude-mem、mem0）。老牌框架（tensorflow、pytorch、transformers）仍占据存量 star 榜首，但当日增量热度已明显让位于 Agent 基础设施。整体呈现“基础设施轻薄化、技能模块化、成本精细化”的态势。

> 说明：主题搜索结果未提供“今日新增 stars”，其 star 数（如 29 万量级）应视为异常或累计口径，下文仅据数据原样引用，不做增量解读。

---

## 二、各维度热门项目

### 🔧 AI 基础工具（框架 / SDK / 推理引擎 / 开发工具 / CLI）

- **[vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop)** [Rust] ⭐0（+2173 today）
  面向 AI Agent 的 computer-use CLI，让 Agent 直接操控桌面。今日 Trengding 增量第二高，标志“计算机使用”从演示走向可复用工具层。
- **[vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser)** [Rust] ⭐0（+181 today）
  面向 AI Agent 的浏览器自动化 CLI，与 agent-desktop 构成 Vercel Labs 的“Agent 感官套件”。
- **[max-sixty/worktrunk](https://github.com/max-sixty/worktrunk)** [Rust] ⭐0（+546 today）
  为并行 AI Agent 工作流设计的 Git worktree 管理 CLI，解决多 Agent 并发改代码的隔离与协作痛点。
- **[ollama/ollama](https://github.com/ollama/ollama)** [Go] ⭐186,015
  本地模型运行与分发入口，支持 Kimi、GLM、MiniMax、DeepSeek、gpt-oss、Qwen、Gemma 等，是自托管推理的事实标准之一。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** [Python] ⭐168,574
  文本/视觉/音频/多模态模型的模型定义框架，兼顾推理与训练，仍是生态底座。
- **[tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract)** [C++] ⭐77,373
  经典开源 OCR 引擎，作为文档理解与 RAG 前置解析环节持续被复用。

### 🤖 AI 智能体 / 工作流

- **[mattpocock/skills](https://github.com/mattpocock/skills)** [Shell] ⭐0（+2053 today）
  来自作者 `.agents` 目录的工程向 Skills 合集，今日增量最高的 AI 项目之一，代表“个人 Agent 配置即开源资产”的新现象。
- **[garrytan/gstack](https://github.com/garrytan/gstack)** [TypeScript] ⭐0（+608 today）
  完整复刻 Garry Tan 的 Claude Code 配置：23 个扮演 CEO、设计师、工程经理、QA 等角色的工具，展示“角色化多 Agent”实践。
- **[google/skills](https://github.com/google/skills)** [Python] ⭐0（+199 today）
  面向 Google 产品与技术的 Agent Skills，大厂正式加入 Skills 分发竞争。
- **[scenario-labs/skills](https://github.com/scenario-labs/skills)** [Python] ⭐0（+674 today）
  让 Agent 产出图像/视频/音频/3D 的生产级 Skills，含“先估价再生成”与品牌一致性，经 Scenario MCP 驱动 Blender、Maya、Unreal、Unity 等专业软件。
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** [Python] ⭐149,091
  自我定位为“Agent 工程平台”，是 Agent 编排的主流基础设施。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** [Python] ⭐120,116
  AI 浏览器 Agent 的开源 Python 库，并提供云端 stealth 浏览器与托管 Agent API。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** [Python] ⭐120,785
  多智能体 LLM 金融交易框架，是 Agent 在垂直金融场景的代表。
- **[langgenius/dify](https://github.com/langgenius/dify)** [Python] ⭐160,473
  在一个协作工作区内构建 Agentic 工作流与 RAG 流水线，支持云/VPC/自托管，覆盖原型到生产。

### 📦 AI 应用（产品 / 垂直场景）

- **[Usagi-org/ai-goofish-monitor](https://github.com/Usagi-org/ai-goofish-monitor)** [Python] ⭐0（+242 today）
  基于 Playwright 与 AI 的闲鱼多任务实时/定时监控与智能分析系统，带后台管理 UI，用于从海量二手商品中筛选目标。
- **[microsoft/VibeVoice](https://github.com/microsoft/VibeVoice)** [Python] ⭐0（+214 today）
  开源前沿语音 AI，是今日 Trending 中少数“模型能力”型项目。
- **[ConardLi/garden-skills](https://github.com/ConardLi/garden-skills)** [JavaScript] ⭐0（+181 today）
  开源 Skills 合集，覆盖网页设计、知识检索、图像生成等。
- **[career-ops-hq/career-ops](https://github.com/career-ops-hq/career-ops)** [JavaScript] ⭐80,402
  开源 AI 求职 Agent：扫描职位、按 CV 打 1–5 分、定制 ATS 友好简历与求职信，本地运行于 Codex/OpenCode 或作为 Claude Code 插件。
- **[harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo)** [Python] ⭐139,691
  用大模型与自动化工作流按主题/关键词一键生成高清短视频。
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** [Python] ⭐73,907
  将文档或主题转为原生 PPTX，含原生形状/转场/动画、数据图表与旁白音频，支持自有模板。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** [Svelte] ⭐157,852
  兼容 Ollama/OpenAI API 的友好 AI 界面，是自托管对话入口的主力。

### 🧠 大模型 / 训练

- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** [C++] ⭐201,314
  面向所有人的开源机器学习框架，生态根基深厚。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** [Python] ⭐105,161
  带强 GPU 加速的张量与动态神经网络，研究到生产的默认选择。
- **[rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch)** [Jupyter Notebook] ⭐107,866
  用 PyTorch 从零分步实现类 ChatGPT 的 LLM，是最受欢迎的学习路径之一。
- **[microsoft/AI-For-Beginners](https://github.com/microsoft/AI-For-Beginners)** [Jupyter Notebook] ⭐70,589
  12 周 24 课时的 AI 入门课程，面向广泛学习人群。
- **[microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners)** [Jupyter Notebook] ⭐92,018
  12 周 26 课 52 测验的经典机器学习课程。
- **[scikit-learn/scikit-learn](https://github.com/scikit-learn/scikit-learn)** [Python] ⭐68,024
  经典机器学习库，仍是表格与基线建模的稳定选择。

### 🔍 RAG / 知识库

- **[NVIDIA/auto-ontology](https://github.com/NVIDIA/auto-ontology)** [Python] ⭐0（+2707 today）
  在数据之上构建语义化、图结构推理层的 Python 框架，支持确定性查询生成、更好的上下文检索与可解释 AI，服务 LLM 与 Agent 工作流；**今日 Trending 增量第一**。
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** [Python] ⭐142,849
  把代码库连同文档、SQL schema、配置与 PDF 转为可查询知识图谱，作为 Claude Code/Cursor/Codex/Gemini CLI 的 `/graphify` skill，采用本地确定性 AST 解析、每条边可解释、不用向量库。
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** [TypeScript] ⭐113,420
  跨会话持久上下文：捕获 Agent 会话内容、AI 压缩后回注未来会话，兼容 Claude Code、Codex、Gemini、Hermes、Copilot、OpenCode 等。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** [Python] ⭐68,469
  面向 AI Agent 与应用的 drop-in 记忆层，为生产环境提供持久上下文。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** [Go] ⭐93,610
  从 RAG 引擎演化为“agent-native 数据库”的上下文基础设施。
- **[unclecode/crawl4ai](https://github.com/unclecode/crawl4ai)** [Python] ⭐86,951
  Apache-2.0 爬虫（官方云提供托管抓取/抽取/搜索 API），为 Agent 提供网页数据入口。
- **[headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom)** [Python] ⭐78,918
  在进入 LLM 前压缩工具输出、日志、文件与 RAG 分块，编码 Agent 省约 20% token、JSON 省 60–95%，以库/代理/MCP 服务形式提供。
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** [JavaScript] ⭐67,975
  本地优先的一体化 Agent 与知识库体验，“拥有而非租用智能”。

---

## 三、趋势信号分析

今日最明确的爆发点是 **Agent Skills**：Trending 15 席中占 5 席（mattpocock +2053、scenario-labs +674、garrytan +608、google +199、ConardLi +181），且形态各异——个人配置、大厂官方、垂直创作、设计检索——意味着竞争焦点已从“Agent 能否运行”转向“Agent 装什么能力”。第二条主线是 **Agent 的行动与感知层**：vercel-labs 同日推出 agent-desktop（+2173）与 agent-browser，配合 browser-use、Agent-Reach，Rust 成为 Agent 工具链的新兴技术栈。第三条是 **成本与上下文的精算化**：caveman 以“原始人语言”省 65% token、headroom 做入模前压缩、claude-mem/mem0 做持久记忆，共同指向“token 预算”与“上下文工程”成为工程核心。此外，NVIDIA auto-ontology 以 +2707 登顶，反映社区对**确定性、可解释、图结构检索**的兴趣回潮，与“无向量库”的 graphify 相互呼应，构成对纯向量 RAG 的补充性反思。与近期模型侧动态（Trending 中仅 microsoft/VibeVoice 一个模型项目）形成对比：**模型发布不再是社区热度的唯一引擎，编排与能力分发才是**。

---

## 四、社区关注热点

- **Skills 分发与治理**：mattpocock/skills、google/skills、scenario-labs/skills 同日上榜，值得关注“Skills 是否形成标准包格式与依赖/权限治理”，以及个人配置开源化的可持续性。
- **Agent 计算机使用（Computer Use）工具链**：agent-desktop、agent-browser 均以 Rust 实现且当日增量显著，适合优先评估其 CLI 接口、权限沙箱与跨平台稳定性。
- **企业级语义层 / 图检索**：NVIDIA/auto-ontology（+2707）与 Graphify-Labs/graphify 指向“确定性查询 + 可解释边 + 免向量库”，对要求可审计的 RAG 场景有直接价值。
- **Token 与上下文经济学**：caveman（省 65% token）与 headroom（JSON 省 60–95%）代表“省钱即性能”的新工程范式，值得纳入 Agent 成本基线测试。
- **跨会话记忆基础设施**：claude-mem 与 mem0 解决多工具（Claude Code/Codex/Gemini/Copilot）间的上下文断点，是长任务 Agent 落地的关键依赖，建议重点验证其压缩保真度与隐私边界。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*