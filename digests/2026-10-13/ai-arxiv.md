# ArXiv AI 研究日报 2026-10-13

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-10-13 12:10 UTC

---

# ArXiv AI 研究日报（2026-10-13）

## 今日速览

今日投稿呈现出鲜明的"医学超声 + 方法学反思"双重特征：超声相关研究占据了显著篇幅，涵盖原始通道数据开放、分割不确定性量化、报告生成与世界模型等多个层次。与此同时，多篇论文对既有假设提出挑战——语言模型的隐藏能力是否可被可靠评估、自监督异常检测是否真正学到了解剖结构、VLM 的内部空间表征是否可靠。在智能体方向，工具检索的可靠性感知、个人智能体的红队测试以及编码智能体的沙箱状态复用构成了新的关注点。理论层面，条件扩散模型的有限样本保证、异步 Q-learning 的命中时间界、神经网络拓扑表达力的构造性界均有推进。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. AI Models Can Provably Hide Arbitrary Capabilities**
[http://arxiv.org/abs/2610.13928v1](http://arxiv.org/abs/2610.13928v1)
Draguns, Motwani, Douglas et al.
通过构造嵌入加密神经网络的后门攻击，从理论上证明模型可以隐藏任意能力，直接挑战"隐藏能力可被诱导出来"这一能力评估的核心假设。

**2. When VLMs Destroy What They Know: Spatial Representations Fall Below Lexical Priors**
[http://arxiv.org/abs/2610.13910v1](http://arxiv.org/abs/2610.13910v1)
Garg, Shani
提出 EICS 指标检验 VLM 内部表征是否忠实编码结构化关系，发现其空间表征甚至低于词汇先验，对多模态推理的可信度提出了警示。

**3. Task Context Shapes Component Roles in Language Models**
[http://arxiv.org/abs/2610.13895v1](http://arxiv.org/abs/2610.13895v1)
Mohapatra, Bassett
借鉴神经科学中脑区任务依赖交互的观点，论证同一注意力头在不同任务中承担不同功能，单纯识别共享头无法解释其行为差异。

**4. Can machines reason non-verbally?**
[http://arxiv.org/abs/2610.13925v1](http://arxiv.org/abs/2610.13925v1)
Saeed, Tse, Slabaugh et al.
系统检验 DeepSeek、ChatGPT、Gemini 等系统在视觉非言语推理（如抽象图形补全）上的局限，指出当前模型在缺乏语言中介时推理能力显著退化。

**5. Revisiting Tabular Deep Regression: Objectives and the Limits of Global Early Stopping**
[http://arxiv.org/abs/2610.13909v1](http://arxiv.org/abs/2610.13909v1)
Rudenko, Bulgakov, Kartashev et al.
重新审视表格数据回归中目标函数选择这一被忽视的自由度，并揭示全局早停策略的内在局限。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. RATED: Reliability-Aware AI Agent Tool Retrieval via Execution Dynamics**
[http://arxiv.org/abs/2610.13889v1](http://arxiv.org/abs/2610.13889v1)
Chen, Liao
指出既有工具检索只优化语义相关性而忽略执行期可用性，提出基于执行动态的可靠性感知检索方法，补上了智能体工具调用链条上的关键一环。

**7. X-AgentRed: Red-Teaming Personal Agents in Evolving Multi-Service Ecosystems**
[http://arxiv.org/abs/2610.13886v1](http://arxiv.org/abs/2610.13886v1)
Jung, Wang, Wang et al.
针对个人智能体跨服务行动效果累积与耦合的问题，主动识别合法用户请求下的组合式失效，为多服务生态中的智能体安全提供了红队框架。

**8. Returning to Development States: When Full Sandbox Snapshots Help Coding Agents**
[http://arxiv.org/abs/2610.13841v1](http://arxiv.org/abs/2610.13841v1)
Graviet, Shah
把编码智能体的失败恢复重构为搜索问题：完整沙箱快照可保留中间进展，使从失败点回退与分支优于从零重试，为 Coding Agent 提供了实用的状态管理思路。

**9. RSI-Anything: Unlocking Recursive Self-Improvement with World Models**
[http://arxiv.org/abs/2610.13912v1](http://arxiv.org/abs/2610.13912v1)
Cui, Zeng, Xu et al.
基于 JEPA-Anything 构建领域通用的递归自我改进框架，用预测式世界模型降低对外部反馈的依赖，并直面策略演化过程中世界模型可靠性下降的问题。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**10. Chronos Policy: Learning Robot Policies on Physical Time**
[http://arxiv.org/abs/2610.13929v1](http://arxiv.org/abs/2610.13929v1)
Wang, Clark, Song
将物理时间显式引入机器人策略，突破固定频率观测-动作序列的假设，在观测速率、延迟或推理耗时变化时保持鲁棒。

**11. FeatureZ: A General Framework for Feature-Preserving Compression via Pointwise Bounds and Star Classification**
[http://arxiv.org/abs/2610.12371v1](http://arxiv.org/abs/2610.12371v1)
Gorski, Liang, Guo et al.
面向等值面、分位数、合并树、Morse-Smale 复形等几何与拓扑特征，提出通用保特征压缩框架，贯穿医学影像、气候、材料与天文等多个科学计算领域。

**12. LapMerge: Differentiable Exact-Budget Token Merging in Linear Time**
[http://arxiv.org/abs/2610.13858v1](http://arxiv.org/abs/2610.13858v1)
Trędowicz, Nowak, Steifer et al.
在线性时间内实现可微的精确预算 token 合并，试图调和"选择丢信息"与"合并仅靠成对合并保信息"之间的取舍，直接作用于视觉与语言模型的下游成本。

**13. Finite-Sample Guarantees for Fully Discrete Conditional Diffusion Models**
[http://arxiv.org/abs/2610.13851v1](http://arxiv.org/abs/2610.13851v1)
Zhu
将分数训练目标与采样网格对齐，使统计估计误差与数值离散化误差得以联合分析，为实际部署中有限步数采样的条件扩散模型给出有限样本保证。

**14. Constructive Bounds for the Topological Expressivity of Neural Networks**
[http://arxiv.org/abs/2610.13931v1](http://arxiv.org/abs/2610.13931v1)
Beshkov
以决策边界 Betti 数刻画二分类的拓扑表达力，给出构造性界，为理解网络容量提供了不同于传统逼近论的视角。

**15. Hitting-Time Bounds for Asynchronous Q-Learning**
[http://arxiv.org/abs/2610.13901v1](http://arxiv.org/abs/2610.13901v1)
Peng
研究单轨迹、固定行为策略（状态-动作链不可约且可能周期）下异步 Q-learning 最后迭代的命中时间界，推进了实用场景下的收敛性分析。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. OpenH-RF: A Large-Scale Ultrasound Raw Channel Dataset Initiative**
[http://arxiv.org/abs/2610.13616v1](http://arxiv.org/abs/2610.13616v1)
Stevens, Penninga, van Nierop et al.
针对公开数据多为重建图像、原始通道数据稀缺的瓶颈，发起大规模开放超声原始通道数据集计划，有望改变数据驱动超声研究的底层条件。

**17. A Multi-Source Ultrasound Benchmark Revealing the Limits of Contemporary Self-Supervised Anomaly Detection Methods**
[http://arxiv.org/abs/2610.09677v1](http://arxiv.org/abs/2610.09677v1)
Riedenauer, Kienzle, Mayekar et al.
构建多解剖部位、多任务的超声基准，指出多数自监督异常检测评估局限于单一场景，并揭示现有方法是否真正学到解剖结构仍不明确。

**18. UltraWorld: Learning Interactive Ultrasound World Models from Untracked Clinical Videos with Acoustic Sampling Map**
[http://arxiv.org/abs/2610.09785v1](http://arxiv.org/abs/2610.09785v1)
Yang, Wang, Guan et al.
用声学采样图替代昂贵的同步视频-位姿对，从无跟踪的常规临床视频中学习动作-观测关系，为自主超声扫查扫除了一大采集障碍。

**19. Designing Protein Structures from Natural Language**
[http://arxiv.org/abs/2610.13917v1](http://arxiv.org/abs/2610.13917v1)
Lee, Li, Qiang et al.
提出 Prompteina，首个全原子蛋白质设计模型，用自然语言统一表达多种设计目标，突破以往每类属性需专用输入表示的限制。

**20. Revisiting the Task of Building Damage Assessment by Satellite Imaging**
[http://arxiv.org/abs/2610.13857v1](http://arxiv.org/abs/2610.13857v1)
Cioppa, Blua, Piérard et al.
重新审视卫星影像建筑损毁评估这一应急响应关键任务，对既有评测与任务定义进行反思。

**21. Studying Comics at Scale with Artificial Intelligence: The PAGE Framework and Three Studies of American Comics and Japanese Manga**
[http://arxiv.org/abs/2610.13840v1](http://arxiv.org/abs/2610.13840v1)
Ferrara
提出 PAGE 框架，将漫画研究从"一本一本读"推进到大规模计算分析，并以美漫与日漫三项研究展示 AI 在人文领域的规模化研究潜力。

**22. Event-based Action Recognition by Pre-Training on Multi-Frame Representations**
[http://arxiv.org/abs/2610.13856v1](http://arxiv.org/abs/2610.13856v1)
Norrby, Wilkinson, Nyblom et al.
借鉴帧基预训练范式来弥补事件相机数据稀缺，兼顾快速运动捕捉与隐私优势，适用于机器人、病患监护与监控。

---

## 研究趋势信号

今日投稿释放出三个清晰信号。其一，**超声研究正在从"重建图像"向"原始数据—不确定性—交互世界模型"的全链条下沉**：OpenH-RF 补数据底座，UltraWorld 绕开位姿标注，多篇工作引入共形预测给出可信度，形成协同推进的格局。其二，**对模型可信度的检验从"能不能"转向"是否真的"**：VLM 空间表征劣于词汇先验、自监督异常检测跨解剖泛化存疑、能力评估可被加密后门规避，共同指向评估方法的可靠性危机。其三，**智能体研究开始重视运行期现实约束**——工具可用性、跨服务耦合风险、沙箱状态复用与物理时间建模，显示该领域正从能力展示走向工程与安全并重。

---

## 值得精读

**1. AI Models Can Provably Hide Arbitrary Capabilities**
[http://arxiv.org/abs/2610.13928v1](http://arxiv.org/abs/2610.13928v1)
这是今日对 AI 安全评估基础假设冲击最直接的一篇。它并非提出经验性观察，而是构造性地证明隐藏能力可被加密嵌入，从而在原理层面动摇了"能力评估能提前暴露危险行为"的前提，对评估方法论、红队实践与部署决策都有直接影响，值得完整阅读其构造与推论。

**2. UltraWorld: Learning Interactive Ultrasound World Models from Untracked Clinical Videos with Acoustic Sampling Map**
[http://arxiv.org/abs/2610.09785v1](http://arxiv.org/abs/2610.09785v1)
自主超声扫查长期受制于同步视频-位姿数据的采集成本。该工作以声学采样图绕开这一瓶颈，直接从无跟踪的常规临床视频学习交互式世界模型，是"用表示设计替代标注成本"这一思路在医疗机器人场景中的典型案例，方法论可迁移性强。

**3. When VLMs Destroy What They Know: Spatial Representations Fall Below Lexical Priors**
[http://arxiv.org/abs/2610.13910v1](http://arxiv.org/abs/2610.13910v1)
以 EICS 指标定量比较内部表征与词汇先验，发现 VLM 的空间表征竟然劣于纯语言先验，这一反直觉结论对"多模态模型具备空间理解"的普遍叙事构成挑战。若结论稳健，将影响依赖 VLM 做空间与结构化推理的应用设计，适合深入检视其指标构造与实验设置。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*