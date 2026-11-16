# ArXiv AI 研究日报 2026-11-16

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-16 20:31 UTC

---

# ArXiv AI 研究日报（2026-11-16）

> 数据来源：2026-11-16 ArXiv 最新 AI 相关论文（50 篇中的相关条目）。
> 说明：今日论文中，**没有直接针对超声散斑抑制、RF/IQ/通道数据去噪、无参考超声图像质量评价的方法论文**。以下超声相关条目均为相邻方向（弹性成像综述性讨论、超声合成数据、声学全息配准、定量超声理论、超声分割提示偏差）。本报告不将通用去噪/评价方法表述为超声成果。

---

## 1. 今日速览

今日与超声最接近的工作集中在**数据与成像前端**而非纯去噪算法：多视角超声心动图合成数据（#2）、声学全息亚波长配准（#3）、定量超声的随机散射体理论（#4），以及一条对文本提示分割中“标注泄漏”的反事实分析（#7）——后者直接提示：在结肠镜/乳腺超声基准上，提示词中的尺寸/数量/位置信息来自评分掩膜本身，会虚高分割指标。医学影像方向整体呈现“基础模型适配 vs 任务专用训练”的再评估（#6）与域偏移下的持续自适应（#9）。通用方法侧，去噪/生成效率（#16、#17）、数值稳定性（#30）与不确定性量化（#48）值得关注，但均无超声验证。今日未见超声专用去噪或质量评价新方法，该方向仍是明显空白。

---

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价（含相邻方向）

**1) [Ultrasound Elastography: Excitation Methods and Low-Cost Alternative](http://arxiv.org/abs/2611.15645v1)**
Corin F. Otesteanu｜cs.CV, eess.IV
综述弹性成像的激励方式并讨论低成本替代方案；对理解超声组织力学表征的成像链路与工程约束有参考价值。

**2) [AI-Based Multi-View Echocardiographic Image Synthesis using Dynamic Shape Control](http://arxiv.org/abs/2611.18375v1)**
J. Freitas, A. Balinisteanu, A. Youssef 等｜cs.CV, cs.AI
以动态形状控制合成多视角超声心动图，针对标注数据稀缺问题；值得关注的是其“形状可控”思路，但摘要未给出下游任务的量化收益。

**3) [Subwavelength registration of skull-compensating acoustic holograms via nonlinear parametric array feedback](http://arxiv.org/abs/2611.15730v1)**
P. P. Dash, C. D. Arvanitis｜physics.med-ph 等
用非线性参量阵反馈实现颅骨补偿声全息图的亚波长配准（1 MHz 下 <1.5 mm），属超声前端对准问题；与图像域去噪无直接关系，但涉及通道/波束层面的信号利用。

**4) [Counterfactual Analysis of Extent Leakage from Annotation-Derived Prompts in Vision-Language Medical Image Segmentation](http://arxiv.org/abs/2611.13970v1)**
N. Nataraj, A. Das, C. Krishna Mohan 等｜eess.IV, cs.CV, cs.LG
在结肠镜与乳腺超声上做反事实分析，指出提示词中的尺寸/数量/位置词由评分掩膜计算而来，存在“范围泄漏”，会抬高基准分数；对超声分割与评价协议设计是重要的方法学警示。

**5) [A thorough review on Deep Learning approaches to 2D-to-3D Registration in Medical Imaging](http://arxiv.org/abs/2611.17468v1)**
A. Borghesi, J. van Beurden, M. van Alphen 等｜eess.IV, cs.CV, cs.LG
系统梳理 2D-3D 配准的深度学习方法，面向术中引导等场景；可作为超声与其他模态配准的方法索引。

**6) [One Block Is Enough: LoopMR for Accelerated MRI Reconstruction](http://arxiv.org/abs/2611.14947v1)**
Y. He, Y. Xie, Y. Zheng 等｜eess.IV, cs.CV
用跨迭代共享的单一模块替代逐级独立模块的展开式重建，目标是减少参数与级联规模；属 MRI 重建，**未在超声验证**，仅为重建架构思路的延伸参考。

**7) [Medical Image Segmentation: Foundation Model Adaptation versus Task-Specific Training](http://arxiv.org/abs/2611.14519v1)**
E. Kutlusan, Y. Li｜cs.CV, cs.AI
在跨分布数据与多基线条件下比较基础模型适配与任务专用训练，纠正“基础模型必然替代专用模型”的乐观预期；对超声分割的模型选型有直接借鉴意义。

**8) [FGCARL: Fisher-Guided Continuously Adaptive Representation Learning for Medical Image Segmentation](http://arxiv.org/abs/2611.16210v1)**
X. Yu, J. Yang, P. Qiu 等｜eess.IV
针对多中心采集导致的域偏移，用 Fisher 信息引导持续自适应；对应“跨设备稳健性”需求，但摘要未涉及超声数据。

> 质量评价说明：今日无无参考超声图像质量评价（NR-IQA）专门工作。若需将通用评价方法用于超声，应先在本领域数据上验证，不能直接沿用自然图像结论。

---

### 🧠 大语言模型（架构、训练、对齐、评估）

**9) [WeightBench: Evaluating Language Models as Weight-Space Programmers](http://arxiv.org/abs/2611.18553v1)**
A. Marasini, B. Khadka, N. Rahimi｜cs.LG, cs.AI
系统评测 LLM 直接读写网络参数（读功能、修故障、从零写出可用网络）的能力，为“权重空间编程”提供基准。

**10) [On numerical issues of divergences between nearly equal distributions](http://arxiv.org/abs/2611.18511v1)**
Brandon Amos｜cs.LG, math.NA, stat.ML
指出分类分布间 KL/广义 JS 等散度在近等分布时的数值问题；对训练与评测指标的可靠性有直接影响。

**11) [Black-Box Uncertainty Quantification for Large Language Models via Ensemble-of-Ensembles](http://arxiv.org/abs/2611.18453v1)**
W. Ma, D. Bhattacharjya, J. Lee 等｜cs.LG, cs.AI
在黑盒条件下分离提示固有歧义与知识缺口，规避 LLM 规模下贝叶斯/深度集成的高成本。

**12) [Alignment by Socialization: Learning Tradeoffs Under Selection](http://arxiv.org/abs/2611.18531v1)**
T. Brennan, A. W. Lo, C. Zhao｜cs.AI, q-bio.PE, q-fin.GN
用演化选择研究“完成任务”与“遵守行为规范”冲突时的取舍，以及经验能否使选择贴近人类判断。

---

### 🤖 智能体与推理

**13) [ModHarness-RL: Recasting Harnesses as Learnable and Evolving Programs for Agentic RL](http://arxiv.org/abs/2611.18533v1)**
Z. He, S. Zhu, J. Helwig 等｜cs.AI, cs.CL, cs.LG
把智能体外壳（决定模型看到什么、获得什么指导）从手写固定改为可学习、可演化，直击 agentic RL 的关键瓶颈。

**14) [Can Mechanistic Interpretability Help Explain LLM Agent Failures? A Case Study on Web Element Hallucination](http://arxiv.org/abs/2611.18514v1)**
M. Aghzal, M. Geva, G. J. Stein 等｜cs.AI, cs.CL
以网页元素幻觉为案例，检验机制可解释性能否解释智能体失败，是 MI 从模型内部走向 agent 决策的实证尝试。

**15) [ARCHER: From Rationale Imitation to Executable Reasoning in Small Language Models](http://arxiv.org/abs/2611.18494v1)**
D. Dixit, K. Patel, C. Xu 等｜cs.AI
以小模型为对象，把“模仿理由”转向可执行的动作轨迹强化学习，针对数学推理中的分解、精确计算、工具使用与验证。

---

### 🔧 方法与框架（新技术、基准、效率）

**16) [Restoring Diversity in Distilled Image and Video Generators by Probing Activations](http://arxiv.org/abs/2611.18550v1)**
F. Horoz, O. Kara, K. Oktay 等｜cs.CV
定位少步蒸馏导致的多样性塌缩根源（不同种子输出几乎不变），通过探测内部表征加以修复；对任何“加速采样”流程都有借鉴意义。

**17) [JVT: Just Video Transformer makes pixel-space video diffusion simple](http://arxiv.org/abs/2611.18549v1)**
J. Zhou, H. Geng, H. Guo｜cs.CV
大 patch DiT 风格 Transformer 直接做像素空间视频扩散，不依赖预训练自编码器，简化架构。

**18) [Elliptic Sampling: Optimal Interpolant Schedules for Gaussians and Beyond](http://arxiv.org/abs/2611.18542v1)**
C. Becker, T. Kargin, K. Hassibi 等｜stat.ML, cs.AI, cs.LG
联合优化随机插值日程与概率流 ODE 离散化，为生成建模的两项关键设计提供统一框架。

**19) [Callo: Serving Cache-Miss Requests with Speculative Decoding on Invalidated KV under Prefill-Decode Disaggregation](http://arxiv.org/abs/2611.18459v1)**
J. Ou, M. Lentz｜cs.DC, cs.LG
在预填充—解码分离架构下利用失效 KV 做投机草稿，降低上下文编辑频繁场景的重预填充延迟。

**20) [MMFlash: Faster Speculative Decoding for Vision-Language Models](http://arxiv.org/abs/2611.18482v1)**
S. Feng, Z. Chen, S. Wang 等｜cs.CV
将扩散式块草稿扩展到多模态场景，补上投机解码在多模态草稿上的空白。

---

### 📊 应用（垂直领域、多模态、代码生成）

**21) [Domain adaptation of a video Foundation model for Heart Failure Diagnosis from Echocardiography](http://arxiv.org/abs/2611.13297v1)**
M. Bolhassani, T. Geroski, N. S. Singam 等｜cs.CV
探索将预训练视频基础模型微调用于超声心动图时空数据的心衰诊断，属超声临床任务证据方向。

**22) [FETTUCCINE: Fast and efficient brain-to-text decoding on mobile devices](http://arxiv.org/abs/2611.18561v1)**
J. D. McCart, P. I. Deevi, M. Azabou 等｜q-bio.NC, cs.LG
在移动端做高效脑信号到文本解码，是端侧部署与轻量化推理的代表案例。

**23) [StreamEmbed: Real-Time Indexing from Pixels for Screenshot Retrieval](http://arxiv.org/abs/2611.18516v1)**
D. Ko, Y. Wang, S. Jeong 等｜cs.CV, cs.IR, cs.LG
针对增量变化的截图流做实时像素级索引，兼顾 OCR 的速度与视觉编码的信息量。

**24) [Agentic induction of common data elements and information extraction from sarcoma case report abstracts](http://arxiv.org/abs/2611.18506v1)**
D. Reichenpfader, K. Appiagyei, M. Nadarajah 等｜cs.CL
由 LLM 智能体从 24,588 篇 PubMed 摘要提出 72,909 个候选 CDE 并规模化抽取，展示临床数据结构化的 agentic 路径。

---

## 3. 研究趋势信号

今日投稿呈现出三点信号：其一，**评价协议本身成为研究对象**——#7 的标注泄漏反事实分析与 #6 的跨分布基础模型对比，说明“指标是否可信”正被置于与模型性能同等的位置，这对超声无参考质量评价的设计是直接提醒。其二，**加速与效率路线转向内部机制**——#16 从激活中定位多样性塌缩、#19/#20 在服务层与多模态层改造投机解码，而非单纯堆叠模块。其三，医学影像侧从“替换专用模型”转向**条件化的领域适配与持续自适应**（#6、#8、#10、#21）。但需明确：上述方法均未在超声去噪或超声图像质量评价场景验证，超声专用去噪仍是今日空白。

---

## 4. 值得精读

**1) [Counterfactual Analysis of Extent Leakage from Annotation-Derived Prompts in Vision-Language Medical Image Segmentation](http://arxiv.org/abs/2611.13970v1)**
直接涉及超声（乳腺）基准，且攻击的是评价协议而非模型，结论会改变对既有分割分数与提示设计的解读方式，方法学价值高且可迁移。

**2) [Restoring Diversity in Distilled Image and Video Generators by Probing Activations](http://arxiv.org/abs/2611.18550v1)**
从内部表征定位加速采样引发的多样性塌缩，属“先诊断、后修复”的范式；对任何以蒸馏/少步采样换取速度的影像生成与重建流水线都有方法论参考（需自行在目标数据上验证）。

**3) [Medical Image Segmentation: Foundation Model Adaptation versus Task-Specific Training](http://arxiv.org/abs/2611.14519v1)**
在跨分布与多基线条件下重估基础模型适配的收益，为“是否值得为超声任务采用/微调基础模型”提供更审慎的决策依据。

---

*备注：今日无超声散斑抑制、自监督/无干净参考去噪、RF/IQ/通道去噪、无参考超声质量评价的专门论文；#6、#16 等属通用医学影像或生成方法，不能视为超声成果。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*