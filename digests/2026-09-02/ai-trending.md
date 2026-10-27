# AI 开源趋势日报 2026-09-02

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-09-02 11:43 UTC

---

# AI 开源趋势日报
**2026-09-02**


## 一、今日速览

今日 AI 开源生态呈现出显著的 **"Agent Skills 工具化"** 浪潮：从科研辅助到专利撰写，"技能包/插件"类项目集中爆发，正在将通用 AI Agent 快速垂直化。**科学计算与学术场景**成为今日热榜最大黑马——OpenMAIC 单日暴涨 3,128 stars 登顶，多个科研 Agent 技能库项目（scientific-agent-skills 单日 +912、academic-research-skills 单日 +193）扎堆上榜。与此同时，**AI Agent 基础设施**持续火热：PDF 智能分类引擎、视频编辑代理、Agent 内存/上下文管理均在收获高增长。值得关注的是，AI 辅助编程与 **Agent 代码编辑工具链**正加速与工作流产品深度融合，多项目横跨 Trending 与主题双榜。


## 二、各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）

| 项目 | Stars | 说明 |
|------|-------|------|
| [ollama/ollama](https://github.com/ollama/ollama) | ⭐179,948 | 本地大模型运行工具，已支持 Kimi-K2.6、GLM-5.2、Qwen、DeepSeek 等主流模型，是个人开发者使用 LLM 的首选入口 |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | ⭐175,499 | 面向 LLM 的网页搜索、抓取与交互 API，为 Agent 提供规模化上下文获取能力，今日热榜兄弟项目 pdf-inspector 单日 +541 |
| [unclecode/crawl4ai](https://github.com/unclecode/crawl4ai) | ⭐—（今日 +145） | 开源 LLM 友好型网络爬虫与抓取工具，今日热榜持续吸引关注 |
| [firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector) | ⭐—（今日 +541） | Rust 编写的高性能 PDF 检查与分类库，可智能区分扫描版与文本版 PDF，为 RAG 路由决策提供基础设施，今日新登热榜 |
| [3b1b/manim](https://github.com/3b1b/manim) | ⭐—（今日 +86） | 解释型数学视频动画引擎，被大量 AI 教育内容创作者使用，与 AI 生成的讲解视频工作流深度绑定 |

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体、Agent Skills）

| 项目 | Stars | 说明 |
|------|-------|------|
| [THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC) | ⭐—（今日 **+3,128**） | 清华出品：开源多智能体互动课堂，一键获得沉浸式多智能体学习体验——**今日热榜单日新增 stars 冠军** |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | ⭐245,985（今日 +623） | Agent 运行性能优化系统，为 Claude Code、Codex、Cursor 等提供技能、记忆、安全与研究优先的开发增强 |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | ⭐187,076 | 老牌通用 AI Agent 平台，持续迭代，目标是让 AI 工具人人可用 |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | ⭐145,497 | Agent 工程化平台，构建可感知、可推理、可行动 LLM 应用的事实标准框架 |
| [K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills) | ⭐—（今日 +912） | "把任意 AI Agent 变成 AI 科学家"，提供 165 个即用型科学技能 + 100+ 科学数据库，声称已有 190,000+ 科学家使用，今日热度极高 |
| [browser-use/video-use](https://github.com/browser-use/video-use) | ⭐—（今日 +472） | 用编码智能体编辑视频，将 AI Agent 能力延伸到视频创作工作流 |
| [Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) | ⭐—（今日 +193） | 为 Claude Code 打造的学术研究技能套件：研究→写作→评审→修改→定稿全流程自动化 |

### 📦 AI 应用（具体应用产品、垂直场景解决方案）

| 项目 | Stars | 说明 |
|------|-------|------|
| [langgenius/dify](https://github.com/langgenius/dify) | ⭐154,205 | 一站式 Agentic 工作流与 RAG 管道构建平台，支持云端/私有化部署，是当前最流行的 LLM 应用开发工作台之一 |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | ⭐150,688 | 用户友好的 AI 交互界面，支持 Ollama、OpenAI API 等多后端，是自托管 AI 聊天工具首选 |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ⭐119,705 | 利用 AI 大模型一键生成高清短视频，AI 内容创作的典型爆款应用 |
| [handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill) | ⭐—（今日 +501） | 中文专利技能包：专利点挖掘与交底书编写（发明/实用/外观），辅助审查答复——AI Agent 在法律/知识产权领域的垂直应用，今日新登热榜 |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | ⭐64,493 | LLM 驱动的多市场股票智能分析系统，支持零成本定时运行，金融垂直场景的成熟开源应用 |

### 🧠 大模型/训练（模型权重、训练框架、微调工具）

| 项目 | Stars | 说明 |
|------|-------|------|
| [huggingface/transformers](https://github.com/huggingface/transformers) | ⭐164,715 | 模型定义与训练的事实标准框架，支持文本/视觉/音频/多模态 SOTA 模型 |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | ⭐57,595（今日 +1,005） | 仅需 2 小时即可从零训练 64M 参数 LLM 的教学项目，**今日热榜第二高增长**，反映出社区对轻量级模型训练的强烈兴趣 |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | ⭐104,199 | 从零手写 ChatGPT 类 LLM 的 PyTorch 教学项目，系统性学习 LLM 内部机制的经典资源 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | ⭐239,764 | "伴随你成长的智能体"——NousResearch 出品，高关注度的 Agent 模型/框架项目 |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | ⭐102,710 | 深度学习核心框架，支撑绝大多数 LLM 训练与微调 |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | ⭐198,353 | 经典开源机器学习框架 |

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）

| 项目 | Stars | 说明 |
|------|-------|------|
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | ⭐113,777 | 将代码库、文档、SQL Schema、PDF 转为可查询知识图谱，无向量库的确定性 AST 解析方案，兼容 Claude Code/Cursor/Codex/Gemini CLI |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | ⭐89,889 | 领先的开源 RAG 引擎，融合 Agent 能力为 LLM 构建上下文层 |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | ⭐92,990 | Agent 跨会话持久记忆工具，自动捕获会话内容、AI 压缩并注入未来会话上下文 |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | ⭐64,569 | AI Agent 的即插即用记忆层基础设施，专为生产环境设计 |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | ⭐65,506 | 本地优先的全能 AI 助手，强调"拥有自己的智能"，内置 RAG 能力 |
| [run-llama/llama_index](https://github.com/run-llama/llama_index) | ⭐51,979 | 领先的文档 Agent 与 OCR 平台，RAG 应用开发的核心框架之一 |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | ⭐68,417 | 在到达 LLM 前压缩工具输出、日志、文件与 RAG 块——JSON 场景可减少 60-95% Token，大幅降低 Agent 成本 |


## 三、趋势信号分析

今日数据释放出两个强烈信号。**其一，"Agent Skills（技能包）"模式正迎来爆发拐点。** 今日 Trending 榜上，OpenMAIC（+3,128）、scientific-agent-skills（+912）、patent-disclosure-skill（+501）、academic-research-skills（+193）及 ECC（+623）等技能包/指令集项目集体登榜，共同指向一个趋势：开发者不再满足于通用 Agent，而是通过可复用的"技能"将 Claude Code、Cursor 等编码代理快速改造成领域专家（科学家、专利工程师、教师）。这与主题榜单中 Graphify、claude-mem、caveman（砍 65% Token）等项目形成呼应，呈现出去年"提示词工程"的进阶形态——**结构化的技能库正在成为新的分发单元**。

**其二，科学/学术研究场景成为今日增长最快的垂直方向。** 清华 OpenMAIC 的单日 3,128 stars 刷新今日榜单纪录，叠加 scientific-agent-skills 宣称的 190,000+ 科学家用户基础，表明社区对"AI 科学家"的想象正加速落地。这些项目普遍采用"技能库 + 科学数据库 + 多 Agent 协作"的组合范式，与近期各大模型厂商密集发布推理增强模型的行业节奏相衔接——更强的推理能力正将 Agent 的应用边界从代码生成推向需要严谨验证的科学研究与专利撰写等专业领域。

此外，**PDF 智能解析**作为数据入口正获得新关注（pdf-inspector 单日 +541），与 RAG/知识管理赛道的持续热度叠加，说明高质量文档理解仍是 LLM 应用落地的基础瓶颈。


## 四、社区关注热点

- 🔥 **[THU-MAIC/OpenMAIC](https://github.com/THU-MAIC/OpenMAIC)**（今日 +3,128）——单日 stars 增量断层第一，多智能体互动式学习是当前最受追捧的教育场景创新，建议尽早体验并关注其技术架构。
- 🔬 **[K-Dense-AI/scientific-agent-skills](https://github.com/K-Dense-AI/scientific-agent-skills)**（今日 +912）——"Agent 技能库"模式的标杆项目，165 个开箱即用的科学技能 + 100+ 科学数据库，横跨生物/化学/医学/药物发现，值得科研方向开发者深入研究。
- 📄 **[firecrawl/pdf-inspector](https://github.com/firecrawl/pdf-inspector)**（今日 +541）——Rust 高性能 PDF 智能分类引擎，扫描版/文本版自动识别能力对 RAG 管道的路由优化有直接价值，叠加 Firecrawl 生态值得关注。
- 📝 **[handsomestWei/patent-disclosure-skill](https://github.com/handsomestWei/patent-disclosure-skill)**（今日 +501）——AI 专利写作这一细分场景的高热度表明垂直专业技能的付费意愿与需求强度，也预示着知识产权领域将成为 AI Agent 落地的下一个热土。
- 🎓 **[jingyaogong/minimind](https://github.com/jingyaogong/minimind)**（今日 +1,005）——2 小时从零训练 LLM 的教学项目持续爆火，轻量化训练范式的普及正在降低大模型研究门槛，适合入门与教学场景深度跟进。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*