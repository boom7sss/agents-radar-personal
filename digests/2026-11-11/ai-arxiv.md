# ArXiv AI 研究日报 2026-11-11

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-11 17:55 UTC

---

# ArXiv AI 研究日报（2026-11-11）

## 1. 今日速览

今日投稿中没有一篇论文直接研究超声去噪、超声重建或去噪后的图像质量评价，因此本期的“超声”重点栏目实际上没有可报道的内容；为避免误报，不作任何凑数填充。与之最接近的是两篇医学影像证据质量方面的批判性工作：一篇揭示文本提示中“尺寸/数量/位置”信息来自评测所用掩码、因而造成信息泄漏（该结论在结肠镜与乳腺超声数据上得到验证），另一篇系统比较基础模型适配与任务专用训练。泛 AI 方向的高价值工作集中在推理式科学发现、策略优化理论、时序基础模型与轻量化推理效率。生物学与神经科学交叉方向出现了分子相互作用基础模型与连接组约束模型的系统性检验。

> 说明：本期无超声去噪/重建/质量评价直接相关论文，以下“超声”栏目仅收录与超声数据证据质量相关的工作，并已明确其非去噪主题。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价（本期无直接相关工作）

本期没有发表散斑抑制、自监督或无干净参考去噪、RF/IQ/通道数据与波束形成、无参考质量评价、跨设备稳健性、端侧部署等方向的超声论文。以下两篇与医学影像（含超声）的证据可靠性相关，属于“评价方法学”而非去噪方法本身。

- **[Counterfactual Analysis of Extent Leakage from Annotation-Derived Prompts in Vision-Language Medical Image Segmentation](http://arxiv.org/abs/2611.13970v1)**
  N. Nataraj, A. Das, C. Krishna Mohan et al.
  指出文本引导分割中提示词的尺寸、数量、位置词由后续用于评分的掩码计算得出，构成反事实意义上的信息泄漏；在结肠镜与乳腺超声数据上验证，对医学影像基准的可信度提出直接质疑。

- **[Medical Image Segmentation: Foundation Model Adaptation versus Task-Specific Training](http://arxiv.org/abs/2611.14519v1)**
  E. Kutlusan, Y. Li
  指出多数基础模型适配与任务专用模型的对比都只在训练分布内、且仅使用单一基线，方法学上不足以支撑“替代专用模型”的结论；对医学影像模型选型有直接参考价值。

### 🧠 大语言模型

- **[A Theory of Policy Optimization in Post-Training: Coverage Collapse and Reference Resets](http://arxiv.org/abs/2611.14467v1)**
  A. Huang, N. Jiang, S. M. Kakade et al.
  从理论上刻画后训练策略优化中的“覆盖坍塌”与参考重置，为样本与梯度预算提供依据，是从原理层面理解 RL 后训练的关键一步。

- **[When does text encoding matter for language modeling?](http://arxiv.org/abs/2611.14459v1)**
  E. Jang, C. Arnett, T. Blevins
  系统考察 UTF-8 变长编码对模型性能的跨语言影响，把常被忽视的编码选择纳入性能不平等的解释框架。

- **[Blurring the Block Boundaries: Overlapping Block Denoising for Efficient Diffusion Language Models](http://arxiv.org/abs/2611.14387v1)**
  A. Mann, J. Fhima, S. Brody et al.
  以重叠块去噪缓解块扩散语言模型的块边界问题，指向低延迟生成的效率与质量折中。

- **[A Margin Perspective on LoRA: Robustness to Catastrophic Forgetting and Adapter Merging (MaLoRA)](http://arxiv.org/abs/2611.14397v1)**
  Z. Xu, H. Min, L. E. MacDonald et al.
  用 margin 视角解释 LoRA 抗遗忘与适配器合并现象，为参数高效微调提供可操作的理论抓手。

### 🤖 智能体与推理

- **[Contrastive Discovery: Open-Ended Scientific Discovery over Competing Explanations](http://arxiv.org/abs/2611.14514v1)**
  Z. Liu, J. J. Kim, Y. Dai et al.
  指出 LLM 科学发现智能体多采用逐点检验（只与自身否定对照），提出在竞争性解释之间做对比评估，改进了开放式假设筛选的推理结构。

- **[Re-Search: Dissecting LLM Ideation Through a Two-Player Questioning Game](http://arxiv.org/abs/2611.14487v1)**
  M. Gao, H. Zhu, X. Su et al.
  用双人提问博弈还原研究构思的迭代搜索过程，弥补现有评估无法揭示“如何探索想法空间”的缺陷。

- **[ReTrace: Distilling Tool-Using Agents into Planner-Free Workflows](http://arxiv.org/abs/2611.14492v1)**
  K. Hou, Y. P. Kuo, I. Bhattacharya et al.
  针对同一 SOP 反复执行的企业流程，把工具使用智能体蒸馏为无需逐步 LLM 规划的工作流，直接降低时延与成本。

- **[Comparative Analysis of Agent Evaluation Frameworks: Stability, Detection, and Discovery in Enterprise Analytics Agents](http://arxiv.org/abs/2611.14493v1)**
  H. Zhang, C. Arvin, L. Brown et al.
  对三类评估范式做三阶段对比，关注多工具工作流下的故障检出与稳定性，为智能体上线评估提供方法学参照。

- **[Evaluating LLM-Generated World Models for Neuro-Symbolic Reasoning](http://arxiv.org/abs/2611.14419v1)**
  S. Djaffal, A. Jamal, G. Madhugiri Devaraja et al.
  考察五个 LLM 能否从开放自然语言情境生成可用于规划与验证的形式化世界模型，聚焦多智能体下多种形式化并存的难题。

### 🔧 方法与框架

- **[TimeSeek: Multi-Task and Multi-Domain Pretraining for Generalized Time Series Analytics](http://arxiv.org/abs/2611.14491v1)**
  P. Chen, Y. Wang, Z. Rao et al.
  针对时序基础模型“只靠堆 Transformer 层”的局限，提出多任务多域预训练，诉求更强的泛化能力。

- **[Quantifying the Sampling Frequency Invariance of Time-Series Foundation Models for Sensor Data Applications](http://arxiv.org/abs/2611.14425v1)**
  S. G. Dhekane, A. Kumar, T. Woertwein et al.
  量化时序基础模型在采样频率变化（如传感器省电模式）下的有效性边界，对传感器部署具有实际意义。

- **[A Theory of Cross-Validation Variance](http://arxiv.org/abs/2611.14463v1)**
  N. S. O'Connell, J. L. Speiser
  将每个观测在交叉验证中的“评估角色”与“训练角色”双重影响形式化，为性能估计的方差提供理论解释。

- **[REAL Loss: Optimizing Real Expected Acceptance Length for Speculative Decoding](http://arxiv.org/abs/2611.14399v1)**
  Y. Tian
  指出交叉熵、KL、TV 等常规目标与投机解码实际加速指标（期望接受长度）不一致，直接优化该指标。

- **[TorchCurves: Differentiable Parametric Curves](http://arxiv.org/abs/2611.14516v1)**
  A. Shtoff
  将 B 样条/Legendre 基参数曲线作为可学习原语，支持对输入与系数同时求导，属实用型基础库。

- **[A Lightweight Differentiable Method for Real-Time Skin Rendering and Digitization](http://arxiv.org/abs/2611.14451v1)**
  M. Marquez-Balduque, C. Rodriguez-Pardo, J. Lopez-Moreno
  直接估计适配实时着色器的次表面散射参数，弥合离线路径追踪与交互应用的差距。

### 📊 应用

- **[Pyrite: Building and Benchmarking Protein-Ligand Pose Ranking Agents](http://arxiv.org/abs/2611.14511v1)**
  M. Srivastava, M. H. Lim, A. M. Keys et al.
  构建含 1,500 个位姿对的成对排序基准，针对共折叠模型“能生成但难排序”的痛点。

- **[Emergent Biological Capabilities in a Foundation Model for Molecular Interactions](http://arxiv.org/abs/2611.14504v1)**
  A. Mashiach
  提出 Bonbon，基于约 3.2 万亿 token 的配对蛋白-配体数据训练，探索多模态生物学基础模型的涌现能力。

- **[Metric-Aligned Group Relative Policy Optimization for Explainable Deepfake Detection](http://arxiv.org/abs/2611.14436v1)**
  L. Dragar, P. Peer, V. Štruc et al.
  针对联合视觉语言模型对篡改图像给出“真实”叙述的问题，用指标对齐的 GRPO 强化可解释检测。

- **[One Policy for 100 Household Tasks: Our Solution for the 2026 BEHAVIOR Challenge](http://arxiv.org/abs/2611.14432v1)**
  I. Larchenko, G. Zarin, A. Nair et al.
  单一 VLA 模型单检查点覆盖 100 项长时程家务任务，最终榜单第 9、前十中唯一独立团队。

- **[Accurate predictions of properties of energetic materials with tabular foundation models](http://arxiv.org/abs/2611.14462v1)**
  V. K. N. Glomsrud, M. Bynke, L. H. B. Olsen et al.
  无需调参，TabPFN 在撞击感度、分解温度与晶体密度三项上均优于已发表最佳模型。

- **[Discovering Equations for the Thermodynamics of South Asian Monsoon Precipitation](http://arxiv.org/abs/2611.14401v1)**
  S. L. Ferretti, J. W. Baldwin, M. S. Pritchard et al.
  用符号蒸馏从神经网络中提取南亚季风降水的热力学方程，处理垂直方向非局地依赖。

## 3. 研究趋势信号

今日投稿呈现三条信号：一是**评估本身成为研究对象**——提示词信息泄漏、基础模型对比方法学、交叉验证方差、智能体评估范式对比，均指向“结论可信度”而非新模型；二是**从逐点到对比/竞争的推理结构转变**，如 Contrastive Discovery 对竞争解释的筛选；三是**面向部署约束的效率与不变性研究**，包括投机解码目标对齐、采样频率不变性、低比特推理预算分配与无规划器工作流蒸馏。生物与神经科学交叉则强调“约束模型需对照未测生理量”，避免把调参差异误读为结构证据。超声方向本期无相关投稿。

## 4. 值得精读

1. **[Counterfactual Analysis of Extent Leakage from Annotation-Derived Prompts in Vision-Language Medical Image Segmentation](http://arxiv.org/abs/2611.13970v1)** — 直接涉及超声（乳腺）与内镜数据的基准可信度，反事实分析设计严谨，凡使用文本引导医学分割者都应核对其提示来源。

2. **[A Theory of Policy Optimization in Post-Training: Coverage Collapse and Reference Resets](http://arxiv.org/abs/2611.14467v1)** — 给出以后训练响应覆盖度为尺度的样本/梯度复杂度结论，对实际 RL 后训练的预算分配有指导意义。

3. **[Contrastive Discovery: Open-Ended Scientific Discovery over Competing Explanations](http://arxiv.org/abs/2611.14514v1)** — 把“拒绝假设不等于找到替代解释”这一被忽视的推理缺口形式化，是智能体科学发现方向少见的框架性贡献。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*