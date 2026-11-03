# ArXiv AI 研究日报 2026-11-03

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-03 17:53 UTC

---

# ArXiv AI 研究日报（2026-11-03）

## 1. 今日速览

今日 50 篇投稿中，**没有一篇以超声去噪、超声重建或无参考超声图像质量评价为核心任务**，因此本期“当前重点”板块为空，不做硬凑。最接近医学影像的三项工作分别聚焦超声生物测量（关键点定位，非去噪）、机器人手术中的三维剖切可视化，以及皮肤癌诊断的域自适应，它们都不是去噪或重建方法。其余投稿的重心集中在三类：(1) **LLM 智能体工程化**——GUI 环境、分布式系统调试、编码危害评估、企业级需求发现，多篇围绕“智能体能否胜任真实工程”展开；(2) **训练与优化理论**——Muon 与 AdamW 的微调差距随预训练数据规模反转、多轮预训练缩放律、MoE 反向传播显存优化；(3) **持续学习中的 LoRA 结构设计**——两篇独立工作分别从谱分解与稀疏可塑性角度挑战“每任务一个分支”的范式。此外，RLVR 的可泛化性与调度策略有三篇相关论文，值得作为一个主题统读。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

> 本期无符合入选标准的论文。以下为医学影像方向的延伸条目，**均非超声去噪/重建工作**，仅供参考上下文。

- **[Every Pixel Is an Option: A System One Model for Medical Ultrasound Biometry](http://arxiv.org/abs/2611.03360v1)**
  Heidari, Rao, Chen 等 | 超声关键点定位（生物测量）。摘要指出测量依赖操作者手动放置卡尺，存在操作者间差异；属于超声定量任务的自动化，与去噪/重建/质量评价无关，且摘要被截断，具体数据未给出。

- **[Contrastive Adapter Training and Consensus Knowledge Distillation for Multi-Source-Free Domain Adaptation in Skin Cancer Diagnosis](http://arxiv.org/abs/2611.03528v1)**
  Abedi, Wu, Zhang 等 | 皮肤癌诊断中的多源无源域自适应，可参考其跨设备/跨域稳健性思路，但与超声无关。

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Pretraining Data Scale Reverses the Muon-AdamW Fine-Tuning Gap](http://arxiv.org/abs/2611.03633v1)**
  Li, Gai, Risteski 等 | 直接检验 Muon 相对 AdamW 的优势能否延续到微调阶段，并发现预训练数据规模会反转这一差距——对优化器选型有实际指导意义。

- **[A Scaling Theory of Multi-Epoch Pretraining: Late-Time Overfitting and Ensembling](http://arxiv.org/abs/2611.03590v1)**
  Yang, Miao, Bordelon | 面向“数据受限而非算力受限”的未来预训练，给出训练轮数与集成规模的缩放理论，属于范式切换期的理论前瞻。

- **[Library of Layers (LoL): Adaptively Ordering Transformer Layers at Runtime](http://arxiv.org/abs/2611.03526v1)**
  Rahmani, McLeish, Li 等 | 打破“层序固定”这一架构惯例，在运行时自适应排列 Transformer 层，动机来自程序复用量语原语的思想。

- **[Evaluating Uncertainty Calibration in Probabilistic Time Series Foundation Models](http://arxiv.org/abs/2611.03592v1)**
  Decker, Tresp | 指出时序基础模型的不确定性校准“仍缺乏理解”，给出系统的方法论与实证评估，对概率预测的可信部署有直接价值。

- **[Tracing the Scientific Discovery Capacity of LLMs to Their Training Data](http://arxiv.org/abs/2611.03617v1)**
  Uzunoglu, Revsine, Schatz 等 | 以“缺失概率质量”为理论工具，追溯科学发现能力与训练数据的关联，回应了能力来源这一核心问题。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[Strategist: Evolving Reasoning with Agents](http://arxiv.org/abs/2611.03618v1)**
  Lu, Xu, Hua 等 | 提出“推理策略”这一被忽视的智能体另一半，用元智能体自动演化推理流程，使策略经验可跨任务迁移。

- **[WebHarbor: Docking Real Websites for Evolving GUI Agent Environments](http://arxiv.org/abs/2611.03634v1)**
  Wang, Wu, Gou 等 | 针对真实网站内容漂移与合成环境不真实的两难，提出可稳定复用的 GUI 智能体环境，是 GUI 智能体的基础设施级工作。

- **[DistDebug-Bench: Can LLM Agents Diagnose Bugs in Distributed Systems?](http://arxiv.org/abs/2611.03523v1)**
  Jiang, Liu, Rose 等 | 现有基准多局限于自包含 Python 模块，本文把评测推进到分布式系统这一生产级场景，填补了评测空白。

- **[VeriHarm-Bench: Measuring Harmful Success in LLM Coding Agents Verifiably](http://arxiv.org/abs/2611.03575v1)**
  Chen, Wei, Zhu 等 | 关注“目标达成但造成附带损害”（删文件、改权限）这一被忽视的风险面，并提供可验证的度量。

- **[Four Bridges: Measuring Deception Propensity in a Multi-Agent Game](http://arxiv.org/abs/2611.03600v1)**
  Casey, Simeone, Tosato 等 | 研究无欺骗指令下的多智能体自发欺骗，补充了单轮单智能体基准无法覆盖的测量维度。

- **[From Natural Language to Exact Cover: A Neuro-Symbolic Approach to Zebra Puzzles](http://arxiv.org/abs/2611.03641v1)**
  Skaisgiris, Pammer, Semmelrock 等 | 用精确覆盖求解器补足纯神经 LLM 在初级逻辑题上的短板，是神经-符号推理的清晰案例。

- **[FADE: Factored Ability–Difficulty Filtering for Online RLVR Scheduling](http://arxiv.org/abs/2611.03625v1)**
  Duncun, Ellison, Ruiz 等 | 针对全对/全错组零优势、浪费生成预算的问题，用能力与难度的因子化估计调度 rollout。

- **[Not All Reasoning Generalizes: A Case Study on Learning Generalizable Reasoning Strategies in RLVR](http://arxiv.org/abs/2611.03627v1)**
  Pang, Wang | 以可控方程求解框架检验 RLVR 推理策略的可泛化边界，对“RLVR 提升的是通用推理还是任务技巧”给出拆解。

### 🔧 方法与框架（新技术、基准、效率优化）

- **[Sonar-MoE: In-Backward Expert Updates for Memory-Efficient Mixture-of-Experts Training](http://arxiv.org/abs/2611.03577v1)**
  Mittal, Anand, Kumar 等 | 在反向传播中即时更新专家，避免为全部专家梯度占用显存，直接缓解 MoE 随规模增长的显存痛点。

- **[BISECT: Bilevel Spectral Decomposition for Low-Rank Continual Learning](http://arxiv.org/abs/2611.03574v1)**
  Saliencro, Liu, Desai 等 | 用谱分解替代严格的子空间隔离，在无样本持续学习中管理 LoRA 更新空间。

- **[RASP: Read-All, Sparse-Plasticity Continual Learning in a Stationary-Size LoRA](http://arxiv.org/abs/2611.03513v1)**
  Liu, Okonkwo, Saliencro 等 | 针对适配器参数随任务数线性增长的问题，提出尺寸恒定的 LoRA 方案。与上一篇主题相近，建议对照阅读。

- **[Variational Functional Neural Networks (vfNN)](http://arxiv.org/abs/2611.03542v1)**
  Katke, Kaplan | 直接优化积分形式的泛函以绕过欧拉-拉格朗日方程求解，为物理约束学习提供新范式。

- **[ST-GFM: Spectral-Temporal Graph Forecasting with Measured Perturbation Bounds and Masked Spectral Reconstruction](http://arxiv.org/abs/2611.03512v1)**
  Bohra, Vijay | 将谱偏移拆为算子通道与频率通道并各自给出无量纲度量，配以可测量的扰动界，训练/部署不一致问题处理得较严谨。

- **[Benchmark Prediction with Sparse and Unpaired Cached Responses](http://arxiv.org/abs/2611.03614v1)**
  Helm, Ghosh, Johnson 等 | 直面“全量评测过于昂贵”的现实，从不配对、稀疏的缓存响应中预测榜单，统计方法扎实。

### 📊 应用（垂直领域、多模态、代码生成）

- **[DiabAgent: Toward Agentic Physiological Control](http://arxiv.org/abs/2611.03601v1)**
  Li, Li, Hong 等 | 指出医疗语言模型在临床问答之外缺乏“持续干预实现生理控制”的定量评估，以 1 型糖尿病为具体场景补上这一环。

- **[Can LLM Agents Be Forward-Deployed Engineers? Requirement Discovery and Delivery for Enterprise Text-to-SQL](http://arxiv.org/abs/2611.03551v1)**
  Liu, Wang, Wang 等 | 基于真实企业 text-to-SQL 项目，检验智能体能否完成从需求发现到部署决策的全链路。

- **[Can LLM Agents Improve Imperfect Earth System Model Parameterizations?](http://arxiv.org/abs/2611.03543v1)**
  Lamb | 针对物理理解转化为稳定参数化“常需数年”的瓶颈，探索智能体化 AI 的加速可能。

- **[MCP Tool Poisoning in Agentic AI Frameworks: A Cross-Framework Measurement Study](http://arxiv.org/abs/2611.03555v1)**
  Shaikh, Montaruli | 指出 MCP 将工具描述、schema 与响应数据未经校验地带入模型上下文，并用跨框架测量量化该风险。

- **[PlantVLM-Edge: Quantized Vision-Language Models for On-Device Crop Health Diagnosis](http://arxiv.org/abs/2611.03557v1)**
  Wagle, Adhikari, Li 等 | 面向缺乏专家资源的农业场景做端侧量化 VLM，是边缘部署的可参考案例。

- **[Ask, Don't Equip: Question-Driven Coding Agents for Deep Kernel Optimization](http://arxiv.org/abs/2611.03517v1)**
  Oliaro, Lee, Su 等 | 在“脚本化智能体样本高效但易卡死”与“开放式智能体灵活但低效”之间提出第三种结构自由度取舍。

- **[NitiBench+: A Temporal Thai Legal Question Answering Benchmark Across 17 Domains](http://arxiv.org/abs/2611.03576v1)**
  Akarajaradwong, Nutanong, Chaksangchaichot | 检查 156,650 份泰国法院判决，发现最高 67% 引用了已修订或废止的法律，据此构建时间敏感的法律 QA 基准——问题定义本身很有说服力。

## 3. 研究趋势信号

今日投稿透露出一个共同取向：**从“方法能否跑通”转向“部署后还剩多少有效性”**。Muon 优势在微调后是否保持、时序基础模型的区间是否校准、图预测器跨工况的谱偏移、基准榜单在稀疏响应下是否可信、法律 QA 面对的法规时效——这些工作的价值都落在训练与部署之间的落差上。智能体方向同样如此：GUI 环境要抵抗真实网站漂移，编码智能体要测“成功但有害”，分布式调试基准要跳出玩具模块。另一个信号是 LoRA 持续学习出现两条独立的“去分支化”路线（BISECT、RASP），说明适配器参数随任务线性增长已被普遍视为需要解决的问题而非可接受代价。对超声方向而言，本日没有可直接引用的去噪/重建进展，建议关注跨域稳健性与关键点定位类工作作为方法侧输入。

## 4. 值得精读

1. **[Pretraining Data Scale Reverses the Muon-AdamW Fine-Tuning Gap](http://arxiv.org/abs/2611.03633v1)** — 结论是“反转”而非“保持/消失”，意味着优化器选择必须与预训练数据规模联合考虑。若结论稳健，会直接影响实际训练配方，且其分析框架可迁移到其他优化器对比。

2. **[DistDebug-Bench: Can LLM Agents Diagnose Bugs in Distributed Systems?](http://arxiv.org/abs/2611.03523v1)** — 分布式系统是生产软件的核心类别却在基准中长期缺位。该工作的问题设定、任务构造与失败模式分析，对判断智能体在真实工程中的能力边界最有信息量。

3. **[NitiBench+: A Temporal Thai Legal Question Answering Benchmark Across 17 Domains](http://arxiv.org/abs/2611.03576v1)** — 以 156,650 份判决的实证统计（最高 67% 引用已失效法律）支撑基准设计，是“先证明现有评测错在哪、再建新基准”的范本，方法论可复用到任何随时间演化的知识领域。

---

*备注：本期“超声去噪、重建与质量评价”板块因无匹配论文而留空。若需覆盖该方向，建议扩大检索窗口或指定其他日期。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*