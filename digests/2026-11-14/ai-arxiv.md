# ArXiv AI 研究日报 2026-11-14

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-14 16:37 UTC

---

# ArXiv AI 研究日报（2026-11-14）

## 1. 今日速览

今日 50 篇投稿中，**没有**专门针对超声去噪、超声重建或去噪后图像质量评价的论文。与医学影像相关的只有两篇：一篇是电阻抗断层成像（EIT）的开放数据集，另一篇是在 0.55T 低场强系统上开展 fMRI 的可行性研究。二者均非超声工作，因此本期“超声”重点板块只能标注为**本期无符合条件的新投稿**，不以通用方法冒充超声成果。真正值得关注的方向集中在：扩散模型的生成范式（像素空间生成、关键帧生成、蒸馏与视频一致性）、LLM 内部机制与评测方法学（目标编码、上下文归因、交互式评测偏差），以及智能体在真实演化环境下的可靠决策。

---

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

**本期无符合该主题的新投稿。** 以下两篇属于相关医学影像工作，仅作延伸参考，**均不涉及超声**：

- **[Data Archive for 2D and 3D Electrical Impedance Tomography with moderate conductivity contrast phantoms](http://arxiv.org/abs/2611.17225v1)**
  S. J. Hamilton, A. Hauptmann, A. Hänninen et al.
  发布带中等电导率对比体模的 EIT 开放测量数据（KIT4/KIT5 设备）。这是医学成像反问题重建的公开基准数据，可类比“无干净参考下的重建评价”思路，但属于电阻抗成像，不是超声。

- **[A Feasibility Study of Whole-Cerebrum Task-Based fMRI at 0.55 T](http://arxiv.org/abs/2611.17211v1)**
  P. Razmara, T. Medani, A. A. Joshi et al.
  在低场强（0.55T）系统上评估全脑任务态 fMRI 的可行性，并与 3.0T 匹配任务比较。属于低信噪比条件下的成像可行性与一致性研究，方法论上对“低质量采集下的稳健评估”有借鉴意义，但并非超声。

> 说明：本期未出现散斑抑制、自监督/无干净参考超声去噪、RF/IQ/通道数据与波束形成、无参考超声质量评价等相关稿件的标题或摘要，故不虚构对应成果。

---

### 🧠 大语言模型

- **[ArchSpace: Recording, Reviewing, and Referencing LLM Architecture Research](http://arxiv.org/abs/2611.17332v1)**
  J. Wang, T. Zhu, J. Kuang et al.
  针对工业界（DeepSeek、Qwen、Kimi 等）架构创新常在公开报告中记录不全的问题，提出记录、评审与引用 LLM 架构研究的框架，有助于提升架构研究的可复现性与可比性。

- **[Goal Encoding in LLMs](http://arxiv.org/abs/2611.17297v1)**
  A. Sen Sharma, E. Todd, S. Feucht et al.
  通过多子任务编码场景，探究 LLM 内部是否存在先于行动、可灵活经由多条执行路径实现的“目标”表征，为可解释性提供机制层面的证据。

- **[Sketching Language Models for Context Attribution](http://arxiv.org/abs/2611.17313v1)**
  C. Liaw, A. Mehta, G. Velegkas et al.
  研究 leave-one-out 上下文归因；在稳定性假设下给出替代直接做 $n$ 次模型评估的算法，属面向 LLM 归因的效率方法（cs.DS 交叉）。

- **[Maximizing Capacity Utilization of LoRA Adapters for Mitigating the Learning-Forgetting Trade-off](http://arxiv.org/abs/2611.17191v1)**
  T. Sawada, K. Goyal
  指出 LoRA 在异构与持续学习场景下弱于全量微调，并从“适配器容量利用率”角度定位学习-遗忘权衡的成因。

- **[Parsed, Plausible, Wrong: Output Format Controls Silent Errors in Small-Model Semantic Parsing](http://arxiv.org/abs/2611.17169v1)**
  U. Ahmed, M. Dunaev, M. N. Al Awad et al.
  在 PIZZA 基准上微调两个十亿级以下模型（Qwen3.5-0.8B、LFM2.5-350M），考察输出格式这一“免费设计选择”如何影响“格式合法但语义错误”的静默错误率。

---

### 🤖 智能体与推理

- **[LiveGeo: Benchmarking Geographic Agents in Continuously Evolving Worlds](http://arxiv.org/abs/2611.17267v1)**
  P. Zhou, X. Liu, Y. Yin et al.
  提出可控、持续演化的地理环境平台 GeoWorld 与基准 LiveGeo，弥补既有评测多在固定环境上推理规划的不足，强调真实动态世界中的可靠决策。

- **[AgentSSL: Can MLE Agents Leverage Unlabeled Data?](http://arxiv.org/abs/2611.17323v1)**
  E. Lin, A. Sarkar, Z. Liu et al.
  指出现有 MLE 智能体几乎只在全监督设定下被研究，系统考察其在无标签数据下的能力，填补自动化管线设计研究的空白。

- **[Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents](http://arxiv.org/abs/2611.17167v1)**
  H. Liu, Q. Zhu, Z. Wang et al.
  区分决策模型作为行动者、评估者、教师三种角色，此前研究多只关注“行动者”用法，有助于厘清长程智能体中的决策模型设计。

- **[CoReMem: Cost-Internalizing Memory for Successive Coding Tasks with Prospective Valuation](http://arxiv.org/abs/2611.17316v1)**
  P. Li, H. Verma, S. Zhou et al.
  面向演化代码库上的连续编码任务，在“下一任务未知”的前提下权衡记忆的未来价值与读写成本，为编码智能体的记忆选择提供新机制。

- **[Towards a Theory of Learnability via Debate](http://arxiv.org/abs/2611.17303v1)**
  T. Lechner, V. Pathak, S. Sabato et al.
  为“辩论式训练”（人类评判两个模型互证正确性）给出可学习性理论分析，为对齐协议提供理论支撑。

---

### 🔧 方法与框架

- **[Back to Pixels: Lifting Latent Video Diffusion into Pixel Space](http://arxiv.org/abs/2611.17336v1)**
  Y. Song, S. Chen, C. Rockwell et al.
  指出现有视频生成在 VAE 潜空间压缩时空，导致分辨率翻倍即 token 四倍、条件难以精细施加；提出回到像素空间，为高分辨率可控交互生成开路。

- **[Classical Energies Learn to Reason 1,000x Faster than Looped Models](http://arxiv.org/abs/2611.17309v1)**
  B. Hoover, H. Blayney, J. C. R. Whittington
  针对循环模型在 Sudoku-Extreme 等推理谜题上训练不稳、慢、参数与 FLOPs 消耗大的问题，提出在能量上做下降，声称快约 1000 倍。

- **[Two mathematical models of knowledge distillation](http://arxiv.org/abs/2611.17230v1)**
  A. Xie, L. Schmidt, J. Duchi
  提出并分析蒸馏的数学模型，主张蒸馏收益来自更易优化的损失地形，而非得到更好的模型本身。

- **[eDMD: Endpoint Distribution Matching for Few-Step Diffusion Distillation](http://arxiv.org/abs/2611.17194v1)**
  T. Zhao, X. Zeng, Y. Han et al.
  针对 DMD 中辅助 fake score 模型追踪学生分布的做法，提出端点分布匹配的少步扩散蒸馏改进。

- **[When Both Sides Adapt: The Challenges of Evaluating Interactive LLM Systems](http://arxiv.org/abs/2611.17239v1)**
  H. Li
  指出交互系统中用户会根据模型回复调整提示策略与后续任务难度，导致评测集本身被模型输出影响，提出评测方法学上的挑战（stat.ME）。

- **[Introducing Feedback Delays to Non-Delayed Adversarial MDPs](http://arxiv.org/abs/2611.17214v1)**
  A. Kulkarni, K. Nguyen, W. Chang et al.
  在表格与线性对抗 MDP 中研究带反馈延迟的遗憾最小化，改进至 $\sqrt S$、$\sqrt K$ 依赖。

---

### 📊 应用

- **[Consistent Video-to-Video Translation via Explicit Correspondences](http://arxiv.org/abs/2611.17298v1)**
  G. Parmar, Z. Li, R. Zhang et al.
  针对实时视频转视频方法靠固定长度因果窗口换取速度、从而损害长程一致性的问题，用显式对应关系提升一致性。

- **[K2V: Generative Keyframing For Physically Plausible Video Generation](http://arxiv.org/abs/2611.17324v1)**
  F. O'Mahony, D. Olmeda Reino, R. Cipolla et al.
  针对视频扩散模型外观高质但物理错误显著的问题，提出生成式关键帧以分担物理推理。

- **[Ballad: Bandit-Based LLM Routing for Automated Heuristic Discovery](http://arxiv.org/abs/2611.17241v1)**
  S. Verma, A. Anand, S. Ranu
  挑战“越强越贵的模型产出越好启发式”的假设，用 bandit 路由在自动启发式发现中调度 LLM。

- **[SpotDiff: A Plug-and-Play Framework for Zero-Shot Change Detection in Remote Sensing Imagery](http://arxiv.org/abs/2611.17172v1)**
  A. Upadhyaya, A. A. Asanjan, C. Jalluri et al.
  针对遥感变化检测依赖大量像素级标注的问题，提出即插即用的零样本变化检测框架，降低对监督的依赖。

- **[Scalable Conversational Assessment: Chat-Based Exams with a Two-Agent LLM Pipeline](http://arxiv.org/abs/2611.17220v1)**
  G. Challen, C. Zilles
  用双智能体 LLM 管线实现可扩展的口试式对话测评，兼顾追问推理与规模化的矛盾。

- **[Cortex-FL: Agent-Mediated Collaboration for Federated Learning](http://arxiv.org/abs/2611.17186v1)**
  R. Sun, J. Peng, Z. Cheng et al.
  用智能体中介协作降低联邦学习在寻找合作方、准备训练任务、协调执行与激励方面的门槛。

---

## 3. 研究趋势信号

今日投稿呈现三条清晰信号。其一，**扩散生成范式正在向更底层和更可控的方向调整**：像素空间视频生成、关键帧物理先验、显式对应的一致性、端点分布匹配蒸馏，共同指向“压缩潜空间换效率”的代价正被重新审视。其二，**LLM 研究从能力展示转向机制与评测可信度**：目标编码、上下文归因、交互双方同时适应带来的评测偏差、输出格式引发的静默错误，都在追问“我们如何知道模型真的做对了”。其三，**智能体评测从静态走向动态环境**（LiveGeo），并从纯监督扩展到无标签数据与成本敏感记忆。值得注意的是，医学影像方向今日仅有 EIT 数据与低场 fMRI 两篇，**超声相关的去噪、重建与质量评价在本批次中缺位**，未见可支撑该主题的稿件。

---

## 4. 值得精读

1. **[Back to Pixels: Lifting Latent Video Diffusion into Pixel Space](http://arxiv.org/abs/2611.17336v1)** — 直接触及当前视频生成的核心结构性瓶颈（潜空间压缩 vs 分辨率/可控性），思路具有范式意义，值得完整阅读其动机与代价分析。

2. **[When Both Sides Adapt: The Challenges of Evaluating Interactive LLM Systems](http://arxiv.org/abs/2611.17239v1)** — 提出一个常被忽视却根本的评测偏差来源（用户随模型输出自适应），对所有交互式 LLM 评测设计都有直接影响。

3. **[LiveGeo: Benchmarking Geographic Agents in Continuously Evolving Worlds](http://arxiv.org/abs/2611.17267v1)** — 环境可控且持续演化，与多数固定环境基准形成对比，是理解“真实动态条件下智能体可靠性”如何被度量的好样本。

> 备注：本期无超声去噪/重建/质量评价稿件，若需该主题，建议扩大时间窗或检索更早批次；上述医学影像两篇仅为相关延伸，不作为超声成果引用。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*