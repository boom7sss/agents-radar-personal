# ArXiv AI 研究日报 2026-11-23

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-23 22:04 UTC

---

# ArXiv AI 研究日报（2026-11-23）

## 今日速览

今日投稿中，与超声相关的工作集中在成像链条的后半段：波反演与衰减重建（FWI/弹性成像）、超分辨率重建与任务导向的质量评价。其中两篇标题/摘要明确涉及“无干净参考/语义提示不可靠”下的超声超分与“概念修正审计”中的 BI-RADS 乳腺超声，与“无参考质量评价”最贴近，但均未报告跨设备验证。结构保真方面，OCTA 分割与检索增强分割修正给出了“结构/残差错误”层面的显式约束，可作为超声分割-评价的方法借鉴。泛 AI 侧，世界模型的物理一致性（防穿透）与 Transformer 的功能深度/拓扑自优化值得关注。需要说明：今日超声相关稿件多为可行性研究，样本与临床证据有限，不宜过度外推。

---

## 重点论文

### 🩺 超声去噪、重建与质量评价

**1. [DAP-MR: Degradation-Aware Prompt-Magnitude Routing for Real-World Ultrasound Super-Resolution](http://arxiv.org/abs/2611.22331v1)**
Le N.-H.-L., Le T.-A., Le D.-H. et al.
指出面向自然图像的超分模型在超声上依赖语义文本提示不可靠，提出退化感知的提示-幅度路由以适配真实超声退化，是今日最贴近“无干净参考/退化自适应重建”的超声超分工作。

**2. [When Lower Harm Misleads: Auditing Concept Corrections](http://arxiv.org/abs/2611.22084v1)**
Lai T., Yue W., Li H. et al.
以乳腺超声 BI-RADS 描述符修正为例，审计“降低 harm”类指标可能因模型对修正普遍不敏感或被错误基线掩盖而失真，直接触及专家修正场景下的评价效度问题，与质量评价方法论高度相关。

**3. [Deep-Learning-Assisted Full Waveform Inversion for Attenuation Reconstruction in Ultrasound Computed Tomography](http://arxiv.org/abs/2611.23553v1)**
Liu M., Oelze M. L.
在既有 FWI 框架上引入深度学习辅助重建声衰减，指出衰减比声速更难重建，属于物理模型（RF/波形层面）驱动的重建改进，而非纯图像后处理。

**4. [Feasibility of Multifrequency Neural Network-Based Wave Inversion in Ultrasound Time-Harmonic Elastography](http://arxiv.org/abs/2611.27792v1)**
Bustin H., Meyer T., Spiesecke P. et al.
将多频神经网络波反演用于时间谐波弹性成像的刚度图重建，与 MRE 同原理，强调全视场刚度映射；属可行性研究，需注意其证据层级。

**5. [Retrieval-Augmented Correction for Generalist Medical Image Segmentation](http://arxiv.org/abs/2611.23189v1)**
Marcianò V., Zhang X., Antonelli M. et al.
针对预测掩膜的“残余结构错误”做自动修正，以检索增强替代逐解剖部位建模，方法可直接迁移到超声分割的结构保真校正与后处理评价。

**6. [DGC-Net: A Depth-Geometric Conditioning Network for Projection-Supervised OCTA Segmentation](http://arxiv.org/abs/2611.27854v1)**
Santiago L., Wang B., Cardoso J. S. et al.
指出 2D 与 3D-to-2D 方法丢弃轴向信息或压缩深度响应，导致血管交叉处失真；用深度几何条件约束投影监督分割，是“结构保真”思路的清晰范例（非超声）。

**7. [How Does SAM-3 Adapt? Capacity, Update Geometry, and Domain Transfer](http://arxiv.org/abs/2611.27142v1)**
Kazakov A., Javat A., Cakir D.
系统比较 LoRA、HiRA、KRAdapter、QuanTA 等适配族在专业域（含医学影像语境）的迁移表现，对超声分割/去噪模型的参数高效微调选型有参考价值。

> 备注：第 1、2、3、4、6 篇为超声或医学影像直接相关；第 5、7 篇为可迁移方法，尚无超声验证，不应表述为超声成果。今日未见专门针对 RF/IQ/通道数据散斑抑制或通道域波束形成的独立稿件。

**8. [Interpretable Tissue Architecture Complements Pathology Foundation Models](http://arxiv.org/abs/2611.27881v1)**
Shahid Z., AlGhamdi H. M.
考察可解释的细胞/多细胞架构测量相对病理基础模型表征的增量预测价值，为“结构先验 + 基础模型”的评价范式提供证据。

---

### 🧠 大语言模型

**9. [MemOnce: A Scalable Memory Architecture for Large Language Models](http://arxiv.org/abs/2611.27973v1)**
Nie C., Fu C., Liu S. et al.
针对标准 Transformer 逐层 token 级 KV 缓存线性增长问题，提出可复用记忆状态的可扩展架构，面向长时程与持续交互部署。

**10. [Speculative Decoding Is Less Speculative Than You Think](http://arxiv.org/abs/2611.27891v1)**
Zeng G., Zanette A.
分析投机解码效率取决于草稿计算对目标路径的预判，区分两类不确定性来源，属推理加速的机制性分析而非单纯工程调参。

---

### 🔧 方法与框架

**11. [Non-penetrating World Models](http://arxiv.org/abs/2611.27963v1)**
Dai Y., Wu Y., Lin Z. et al.
提出交互式视频世界模型的物体防穿透问题，并给出 NoPeBench 基准，评估显示现有开源模型均无法满足；对“视觉逼真≠动力学可信”给出可量化检验。

**12. [Model Carving: Training Transformers That Optimize Their Own Topology](http://arxiv.org/abs/2611.27962v1)**
Zheng K., Sharma P.
打破“固定层内子层顺序与数量”的惯例，让 Transformer 在训练中优化自身拓扑，属架构与训练解耦的尝试。

**13. [Functional Depth Is Learned: Isolating the Computation That Layers Produce Only Together](http://arxiv.org/abs/2611.27911v1)**
Kim J., Lim K. T.
区分“层数”与“功能深度”，提出隔离层间协同计算的分析手段，为深度缩放的可解释性提供新工具。

**14. [Topology Hub Optimal Transport: Eliminating Long Context Dilution at Flash Speed](http://arxiv.org/abs/2611.27951v1)**
Forde D.
针对长上下文中归一化质量随长度弥散、少量相关事实检索退化的问题，用 hub-and-spoke 最优传输替代稠密注意力。

---

### 📊 应用

**15. [TEA-Bench-BR: Can Coding Agents Turn a Branching Clinical Specification into Correct Code?](http://arxiv.org/abs/2611.27895v1)**
Estevam M. A. de S.
基于巴西儿童自闭症筛查路径构建基准，暴露“代码能跑且结果貌似合理但实际错误”的静默 bug 问题，评估编码智能体的规格实现正确性。

**16. [LesionAgent: Training-Free Agentic Tumor Tracking and Response Assessment in Longitudinal CT](http://arxiv.org/abs/2611.27876v1)**
Rokuss M., Valanarasu J. M. J., Lozano A. et al.
免训练智能体在纵向 CT 中完成病灶判定、跨时间点配准与追踪，强调“像放射科医生一样阅读”而非只做检测分割。

---

## 研究趋势信号

两条线索较清晰：其一，医学图像重建正从“像质指标驱动”转向“退化感知 + 结构约束 + 修正效度审计”，今日超声超分（DAP-MR）与 BI-RADS 修正审计形成呼应，说明社区开始质疑平滑观感与聚合 harm 指标的可信度；其二，世界模型与生成模型的评价正向物理一致性与可控记忆转移（防穿透基准、记忆架构）。此外，参数高效适配（SAM-3 适配族比较）持续在专业域推进。需注意：超声专门的无参考质量评价与通道域波束形成今日无独立稿件，相关结论应保持谨慎。

## 值得精读

1. **[DAP-MR](http://arxiv.org/abs/2611.22331v1)**：直击“通用语义提示在超声上失效”这一真实痛点，是构建你自己的无干净参考超声超分/去噪流程时最需先读的动机与方法来源。

2. **[When Lower Harm Misleads](http://arxiv.org/abs/2611.22084v1)**：以乳腺超声为场景，给出评价指标可能被“模型不响应修正”所欺骗的审计框架，对设计去噪后质量评价与专家在环修正流程有直接方法学价值。

3. **[Non-penetrating World Models](http://arxiv.org/abs/2611.27963v1)**：提供“逼真不等于物理可信”的可复现基准与结论，是判断生成式重建（含医学影像）是否可信的通用参照。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*