# AI 官方内容追踪报告 2026-09-12

> 今日更新 | 新增内容: 13 篇 | 生成时间: 2026-09-12 13:09 UTC

数据来源:
- Anthropic: [anthropic.com](https://www.anthropic.com) — 新增 12 篇（sitemap 共 443 条）
- OpenAI: [openai.com](https://openai.com) — 新增 1 篇（sitemap 共 959 条）

---

# AI 官方内容追踪报告

**抓取日期：2026-09-12｜来源：anthropic.com / claude.com / openai.com｜增量更新**

---

## 1. 今日速览

今日增量更新呈现极度不对称的发布节奏：Anthropic 一次性放出 12 篇研究类内容，但**全部为公司既往研究档案的集中回溯**（最早可追溯至 2024 年 4 月的 many-shot jailbreaking），并非当日新研究；其主线高度集中于 **Societal Impacts / Economics / Education**——即"AI 如何被真实使用"的实证研究体系。OpenAI 仅 1 篇新内容，位于 `index` 分类，且正文不可获取，仅能从 URL 路径判断主题与存储扩展相关。综合来看，Anthropic 在今日的实质动作是**用研究档案强化其"负责任 AI + 实证透明"的叙事资产库**，尤其是把隐私保护分析工具 Anthropic Insights 向外部研究者开放这一动作，具备可验证的战略含义；OpenAI 侧信息不足以支撑任何分析。

---

## 2. Anthropic / Claude 内容精选

> 说明：以下 12 篇均为 `research` 分类，发布日期标注为 2026-09-11（抓取日期的前置日），但内容节选中明确写有各自的原始发布月份。为准确起见，两者分别标注。

### 2.1 价值观与模型行为研究

**① How Claude's values vary by model and language**
- 链接：https://www.anthropic.com/research/claude-values-models-languages
- 原文日期：2026 年 7 月 13 日（页面标注）｜抓取标注：2026-09-11
- 核心内容：延续此前对 70 万条匿名 Claude.ai 对话、识别出 3000+ 种价值观的分析，本文提出一种**降维方法**——把数千个价值观压缩为若干个"轴"（axis），每个轴是两组价值观之间的数轴（例如一端是情感温度、另一端是严谨性），用 Claude 在轴上的落点判断其价值倾向。研究随后用该方法对比了两个维度上的价值观差异：不同模型之间、以及不同语言之间。
- 意义：这是把"价值观"这一难以量化的对象转为可比较坐标系的工程化尝试，为跨模型、跨语言的价值观漂移提供了可复用的度量框架。

**② Enabling independent research on how people use Claude**
- 链接：https://www.anthropic.com/research/enabling-independent-research
- 原文日期：2026 年 8 月 26 日｜抓取标注：2026-09-11
- 核心内容：Anthropic 今年早些时候试点将**聚合的真实 Claude 使用数据**开放给外部研究者，三家研究机构通过其隐私保护分析工具 **Anthropic Insights** 自主设计研究，由 Anthropic 代为执行数据收集，研究者独立完成分析。本文公开了试点的高层结果与经验，并提供面向未来合作研究者的意向表达表。
- 意义：文中提出的问题意识值得注意——研究者目前只有两个次优选项：要么依赖实验室发布的分析（反映真实使用，但回答的是实验室自己的问题），要么使用公开数据集（可自由研究，但偏向轻度使用场景）。该试点试图提供第三条路径。

**③ Many-shot jailbreaking**
- 链接：https://www.anthropic.com/research/many-shot-jailbreaking
- 原文日期：2024 年 4 月 2 日｜抓取标注：2026-09-11
- 核心内容：研究了利用 LLM 上下文窗口急剧扩张（从 2023 年初约 4000 token 增长到百万级 token）的攻击手法——通过在输入中按特定配置放入大量文本，可迫使模型产出本应被训练规避的有害回复。该手法对 Anthropic 自身模型及其他公司模型均有效，Anthropic 事先向其他 AI 开发者通报了该漏洞并已在自家系统部署缓解措施。

### 2.2 可解释性

**④ Mapping the mind of a large language model**
- 链接：https://www.anthropic.com/research/mapping-mind-language-model
- 原文日期：2024 年 5 月 21 日｜抓取标注：2026-09-11
- 核心内容：首次识别出 Claude Sonnet 内部数百万个概念的表示方式，是**对生产级大模型内部结构的第一份详细观察**。文章解释了为何直接查看神经元激活无助于理解模型（每个概念分散在多个神经元上，每个神经元参与多个概念的表示），并指出该可解释性发现未来可能帮助提升 AI 安全性。

### 2.3 教育与技能

**⑤ Anthropic Education Report: The AI Fluency Index**
- 链接：https://www.anthropic.com/research/AI-fluency-index
- 原文日期：2026 年 2 月 23 日｜抓取标注：2026-09-11
- 核心内容：AI Fluency Index 在数千条 Claude.ai 对话中测量 **11 种可观察行为**，用于理解人们如何发展 AI 协作技能。与此前聚焦大学生和教育工作者的教育报告不同，本文关注随时间推移形成的"AI 流畅度"。与近期 Economic Index 结论一致：**AI 流畅度最常见的表现形式是"增益型"（augmentative）**——把 AI 当作思考伙伴，而非替代者。

**⑥ Education Report: How educators use Claude**
- 链接：https://www.anthropic.com/research/anthropic-education-report-how-educators-use-claude
- 原文日期：2025 年 8 月 27 日｜抓取标注：2026-09-11
- 核心内容：分析全球高等教育从业者在 Claude.ai 上约 **74,000 条匿名对话**，并与东北大学合作直接听取教职员工的使用方式。发现教育者的用途跨越课堂内外：开发课程材料、撰写经费申请、学业指导、招生与财务规划等行政事务；并且不只把 Claude 当聊天机器人，而是用 **Claude Artifacts 构建定制工具**，如化学模拟、自动评分量表、数据可视化仪表盘。结论倾向是"教育者倾向于自动化繁琐事务"。

### 2.4 经济影响研究（Economic Index 系列，构成一条完整演进线）

**⑦ Introducing the Anthropic Economic Index**
- 链接：https://www.anthropic.com/research/the-anthropic-economic-index
- 原文日期：2025 年 2 月 10 日｜抓取标注：2026-09-11
- 核心内容：经济指数开篇报告，基于数百万条匿名 Claude.ai 对话。首批主要发现：使用集中在软件开发与技术写作；约 36% 的职业其至少四分之一任务出现 AI 使用，约 4% 的职业在四分之三任务上使用 AI；AI 使用偏向**增益（57%）而非自动化（43%）**。同时开源该分析所用数据集，并邀请经济学家与政策专家参与。

**⑧ Anthropic Economic Index: Insights from Claude 3.7 Sonnet**
- 链接：https://www.anthropic.com/research/anthropic-economic-index-insights-from-claude-sonnet-3-7
- 原文日期：2025 年 3 月 27 日｜抓取标注：2026-09-11
- 核心内容：指数第二份报告。Claude 3.7 Sonnet 发布后，编码、教育、科学、医疗类用途占比上升；其"extended thinking"模式主要用于技术类任务（计算机科学研究、软件开发、多媒体动画、游戏设计等职业相关）。报告首次发布**任务与职业层面的增益/自动化拆分**：文案与编辑类任务呈现最高程度的"任务迭代"（人机共同写作），而笔译与口译类任务呈现最高程度的"指令式"行为（模型以最少人工介入完成任务），并发布首个自下而上的分类法。

**⑨ Anthropic Economic Index: AI's impact on software development**
- 链接：https://www.anthropic.com/research/impact-software-development
- 原文日期：2025 年 4 月 28 日｜抓取标注：2026-09-11
- 核心内容：分析 Claude.ai 与 Claude Code 上 **50 万条编码相关交互**，得出三个关键模式，其中最突出的是：**Claude Code 上 79% 的对话被判定为"自动化"，而 Claude.ai 仅 49%**——编码 agent 被用于更多自动化而非增益型协作。

**⑩ Economic Index: AI's role in the US and global economy**
- 链接：https://www.anthropic.com/research/economic-index-geography
- 原文日期：2025 年 9 月 15 日｜抓取标注：2026-09-11
- 核心内容：第三份指数报告，首次给出**美国各州之间 AI 使用差异的详细评估**。发现各州经济结构影响其人均 Claude 使用量；一个反直觉的结论是**使用量最高的州并非编码主导的州**。全球维度上，巴西用户对语言类用途（翻译与语言学习）的使用约为全球平均的六倍。软件开发在几乎所有州和国家仍居首位。

**⑪ Economic Index: New building blocks for AI use（economic primitives）**
- 链接：https://www.anthropic.com/research/economic-index-primitives
- 原文日期：2026 年 1 月 15 日｜抓取标注：2026-09-11
- 核心内容：第四份指数报告，引入 **economic primitives（经济基元）**——五个基础测量维度：任务复杂度、技能水平、用途（工作/教育/个人）、AI 自主性、成功与否。这些基元通过让 Claude 对样本中每条对话回答一组统一问题来导出，样本取自 2025 年 11 月。Anthropic 将其定位为"AI 潜在经济影响的领先指标"。分析对象同时覆盖 Claude.ai（消费者）与一方 API（主要为商业用途）。

**⑫ Anthropic Economic Index report: Cadences**
- 链接：https://www.anthropic.com/research/economic-index-june-2026-report
- 原文日期：2026 年 6 月 26 日｜抓取标注：2026-09-11
- 核心内容：第五份（最新）指数报告，也是方法论改动最大的一份。驱动因素是使用形态变化：一年前 Claude 使用主要是用户与助手对话，随着 **Claude Code 与 Cowork** 的快速增长，会话越来越由长时间运行的 agentic 任务构成，聊天记录已不足以反映真实使用。本次改动包括：提高采样率以查看**小时级**使用模式；引入新分类器标注每条对话产出；更细粒度地拆分聊天、Cowork（合称"Claude conversations"）与一方 API 的数据，按月聚合。同时报告 2026 年 4 月启动的 **Anthropic Economic Index Survey** 的初步发现，首次触及会话之外的问题——人们如何感知 AI 改变了他们的工作与机会。

---

## 3. OpenAI 内容精选

### 3.1 index（仅元数据）

**⑬ Scaling Storage One Billion Users Part One**
- 链接：https://openai.com/index/scaling-storage-one-billion-users-part-one/
- 分类：index｜抓取标注：2026-09-12
- **数据受限说明**：本条目为仅元数据模式，正文内容无法获取，标题由 URL 路径推断，**可能不准确**。基于现有信息无法进行任何可靠的内容分析，故不做摘要、不推测标题含义、不评估技术或业务细节。仅客观记录：OpenAI 今日增量更新为 1 篇，归入 `index` 分类。

---

## 4. 战略信号解读

### 4.1 各自近期的技术优先级

**Anthropic：把"AI 的真实社会影响"做成可复用的测量基础设施。**
今日 12 篇内容无一涉及模型能力发布，全部落在 Societal Impacts、Economics、Education 与 Alignment/Interpretability 四条线上。值得注意的是其中的**方法论递进**关系：Economic Index 从 2025 年 2 月的首份报告，历经按模型（3.7 Sonnet）、按职业（软件开发）、按地理（美国与全球）、按基元（primitives），到 2026 年 6 月的 Cadences 完成了一次方法重构——重构的动因不是学术好奇心，而是**产品形态变化**（Claude Code / Cowork 带来的长时程 agentic 会话）让原有 chat transcript 采样失效。这说明 Anthropic 的经济研究已不只是对外沟通，而是被迫跟随自身产品演进同步迭代的测量管线。

同时，"Enabling independent research" 与 "AI Fluency Index" 共享一个底层设施：**Anthropic Insights**（隐私保护分析工具）。前者把它开放给外部机构，后者用它测量 11 种行为。可判断 Anthropic 正在把隐私保护分析能力从"内部研究方法"升级为"对外生态接口"。

**OpenAI：今日信息不足以判断优先级。** 唯一线索是 1 篇 `index` 分类内容，且正文不可获取。任何关于其技术优先级、产品化或基础设施方向的判断都将超出数据支持范围。

### 4.2 竞争态势：谁在引领议题

就今日可观察的发布而言，**Anthropic 是唯一在主动设置议题的一方**，且设置的议题是"AI 影响的实证测量"与"研究数据的对外开放"，而非模型能力竞赛。这在竞争层面是一种差异化定位：不与对手在能力榜单上正面交锋，而是争夺"谁有权定义 AI 社会影响的衡量标准"。

需要谨慎的是：今日 12 篇实为档案集中回溯，不能等同于"Anthropic 单日产出 12 项新研究"。这一集中释放本身可能对应页面结构或索引的更新，而非内容事件。相较之下，OpenAI 仅 1 篇且内容不可读，**无法构成有意义的竞争对比**——今日数据在两家之间不具备可比性。

### 4.3 对开发者和企业用户的潜在影响

- **若 Anthropic Insights 的开放试点延续**：外部研究者将获得一条介于"实验室自选问题"与"公开数据集"之间的中间路径——真实使用数据 + 自主设计研究问题。文中明确提供了意向表达表，对有社会科学研究需求的高校与政策机构是可操作入口。
- **Economic Index 的"基元"体系**：任务复杂度、技能水平、用途、AI 自主性、成功度这五个维度，对企业在评估自身 AI 部署效果时具有直接的方法论借鉴价值——尤其是把"AI 自主性"单独作为一个可测量维度。
- **方法论的时效性提醒**：Cadences 报告明确指出，随着 agentic 任务成为主流，基于聊天记录的度量方式已失效。依赖对话日志做使用分析的企业工具链可能面临同样的盲区。
- **教育场景的具体信号**：教育者使用 Claude Artifacts 自建交互式教学材料（化学模拟、自动评分量表、数据仪表盘），提示 Artifacts 这类"低门槛构建"能力在教育与企业内部工具场景中存在实际需求，而非仅是演示功能。

---

## 5. 值得关注的细节

**① "经济基元"这一新词汇的出现。** `economic primitives` 是 Economic Index 第四份报告中首次引入的概念（2026 年 1 月）。将"基元"这一带有还原论色彩的工程术语移植到经济学分析中，显示出 Anthropic 试图为 AI 经济影响建立像 CPU 指令集一样可组合、可复用基础单元的意图。

**② 报告标题用词从"报告"转向"节奏"。** 最新一份报告标题为 **Cadences**（节奏/节拍），而非以往的地理、职业、基元等描述性命名。结合其内容——按小时级采样、观察使用的时间模式——这暗示研究重心从"谁在用什么"转向"人们以什么节律使用 AI"，这是一个新的分析维度。

**③ 产品名首次在研究中承担结构性角色。** Cadences 报告明确把 **Cowork** 与 Claude Code 并列为改变采样方法论的驱动力，并将聊天与 Cowork 合称为"Claude conversations"、与一方 API 并列。这是产品分类直接进入研究分类体系的信号。

**④ Anthropic Economic Index Survey 的定位转换。** 该调查于 2026 年 4 月启动，其价值在于**首次把测量对象从"会话内行为"扩展到"用户的主观感知与期望"**——包括人们在理想情况下希望从 AI 得到什么。这是从行为数据向态度数据的跨越。

**⑤ 一条持续两年的安全叙事线。** Many-shot jailbreaking（2024-04）与 Mapping the mind（2024-05）两篇早期内容被同步纳入本次更新，前者强调"事先通报其他 AI 开发者并已部署缓解"，后者强调"可解释性有助于未来安全"。两篇措辞均把安全与开放协作绑定。

**⑥ 增益 vs 自动化的张力在累积。** 从 2025 年 2 月"增益 57% / 自动化 43%"的全局结论，到 2025 年 4 月"Claude Code 自动化 79%"的产品级结论，再到 2026 年 2 月 AI Fluency Index 重申"最常见的流畅度表现是增益型"——Anthropic 的公开叙事持续强调增益，但其自身最成功的 agentic 产品却呈现压倒性的自动化特征。这一张力值得持续跟踪。

**⑦ 隐私保护表述的标准化。** "隐私保护的"（privacy-preserving）这一修饰语在 Economic Index 系列、Independent Research、AI Fluency Index 三处反复出现，已固化为该公司描述数据方法的固定定语。

**⑧ OpenAI 侧的信息缺口本身是信号。** 今日 OpenAI 增量仅 1 条且无正文，无法判断这是抓取限制还是发布节奏使然。在缺乏正文的情况下，不建议从 URL 路径对其主题做任何推断。

---

*报告完。所有条目均附原文链接；Anthropic 部分的日期已区分"页面标注原文日期"与"本次抓取标注日期"，OpenAI 部分因数据受限未做内容分析。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*