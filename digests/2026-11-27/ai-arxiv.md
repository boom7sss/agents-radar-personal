# ArXiv AI 研究日报 2026-11-27

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-27 19:29 UTC

---

# ArXiv AI 研究日报（2026-11-27）

## 1. 今日速览

今日超声相关投稿共 10 篇，重点关注三方面：伪影与噪声建模（#1）、通道级校准与重建（#2、#3）、以及无需微调的通用分割与质量评价（#10）。去噪方向明显从“像素独立高斯噪声”转向结构化、具备物理先验的噪声建模（#1、#5），重建方向则强调通道/几何对齐与稀疏切片的欠定问题（#2、#3）。值得注意的是，#7 直接指出公开排行榜小样本调参可能导致过拟合，提示超声方法评估需警惕 leaderboard 过拟合。通用 AI 方向，循环 Transformer 效率（#26）、令牌化复杂度理论（#19）、以及监控评估失效（#21）较具信号价值。所有超声论文摘要均只给出部分信息，本文不推断未见结果。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

**[Structured Noise Diffusion for Echocardiography Haze Removal](http://arxiv.org/abs/2611.33860v1)**
Z. Luo, H. Li, M. Wang et al.（cs.CV）
指出现有扩散模型采用像素独立高斯噪声、难以表达局部超声雾状伪影，提出结构化噪声扩散；核心在噪声建模与解剖边界保持，而非单纯平滑。

**[CROSS-Calib: Selective Channel Calibration for Ultrasound Reconstruction](http://arxiv.org/abs/2611.31684v1)**
T. Hu, J. Zhou（cs.AI）
面向通道数据的误差校正与瞬态干扰抑制，目标是“在保留有效回波的前提下”修复通道；属于通道/RF 层面的工作，与波束形成前的数据质量直接相关。

**[XFreq: Geometry-Aligned Cross-View Residual Learning for Sparse 3D Ultrasound Reconstruction](http://arxiv.org/abs/2611.30869v1)**
Y. Lu, P. E. Grant, D. Karimi（cs.CV）
针对稀疏 2D 切片重建 3D 体积时大量未观测区域的问题，以几何对齐的跨视图残差学习替代插值；关注切片位姿已知下的欠定补全。

**[US-Seg: One Reference for Universal Ultrasound Segmentation](http://arxiv.org/abs/2611.28740v1)**
C. Ma, Y. Li, S. Liang et al.（eess.IV）
基于超声基础模型特征，试图用单参考减少任务特定微调；对跨器官、跨任务、跨成像条件的泛化是其主要卖点，可作为下游质量评价的载体。

**[UPP-Gauss: Ultrasound Propagation Physics-informed Gaussian Splatting for B-mode Novel-View Synthesis](http://arxiv.org/abs/2611.33920v1)**
G. Jung, S.-H. Oh, M.-G. Kim et al.（cs.CV）
将声传播物理引入高斯泼溅，用于 B 模式新视角合成；把探头位姿变化下的外观变化显式建模，属“物理先验 + 重建”路线。

**[TAT-Det: A Dataset for Testicular Appendage Torsion Detection and Segmentation in Ultrasound Images](http://arxiv.org/abs/2611.33940v1)**
Y. Jiang, J. Jiang, L. Fan et al.（cs.CV）
填补儿科急性阴囊急症缺乏标准化数据集的空白，提供 TAT 检测与分割数据；临床任务证据型工作，可用于检验去噪/重建对下游诊断的影响。

**[Continuous Foundation-Guided Pseudo-Label Weighting for Breast Ultrasound Domain Adaptation](http://arxiv.org/abs/2611.33843v1)**
X. Fan, X. Li（cs.CV）
针对跨扫描仪、跨机构、跨人群的泛化退化，用 EMA 教师生成目标域伪标签并做连续加权；属跨设备稳健性延伸。

**[Frame geometry, fascicle extrapolation and leaderboard overfitting in muscle ultrasound](http://arxiv.org/abs/2611.33539v1)**
S. Kooklan（cs.CV, eess.IV）
系统考察帧几何、肌束外推与在小公开排行榜上调参对自动测量（羽状角、肌束长度、肌厚度）的影响；对超声定量评价的可复现性有直接警示意义。

**[ReCAP: Sequential Concept Acquisition with Guarantees under Imperfect Concept Predictors](http://arxiv.org/abs/2611.31776v1)**
Md Nahiduzzaman, S. Korevaar, A. Bab-Hadiashar et al.（cs.CV）
指出多数概念方法默认预测概念正确，导致诊断可能建立在错误概念上；面向可解释诊断的保证性设计，与临床可信评价相关。

**[CLASP: Complementary Layer Selection and Profiling for Zero-Shot OOD Detection using Vision-Language Models](http://arxiv.org/abs/2611.28986v1)**
S. Islam, A. B. Panambur, T. Spasojevic et al.（cs.CV, cs.AI, cs.LG）
表明仅用末层置信度/熵选层可能遗漏互补信息，提出互补层选择；属医学影像无参考式异常/分布外检测的延伸。

*说明：上述论文摘要未提供 PSNR/SSIM、跨设备实测或端侧部署的具体数值，故不在此比较平滑观感或指标优劣。*

### 🧠 大语言模型

**[Mixture-of-Loops Transformer](http://arxiv.org/abs/2611.34923v1)**
L. Zhu, S. Wang, X. Gong et al.（cs.LG, cs.CL）
重新审视循环间“传递什么”，以混合循环推进表达力—效率前沿；对循环 Transformer 的效率瓶颈是有针对性的回应。

**[Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1)**
V. Kastreva, P. Whittington, D. Komm et al.（cs.CL, cs.LG）
证明除非 P=NP，否则不存在常数因子近似的最优分词器算法，覆盖自顶向下与自底向上两类；为分词优化的不可近似性提供理论边界。

### 🤖 智能体与推理

**[Attack Policy Selection can Mislead Monitor Evaluators](http://arxiv.org/abs/2611.34934v1)**
C. Griffin, O. Makins, A. C. Stickland et al.（cs.LG, cs.AI）
以某已下线 OpenAI 监控器为案例，发现用攻击策略生成转写作为代理会扭曲测得的假阴性率；对 AI 监控评估方法本身提出警示。

**[Cairn: Object-Centric 3D Trajectory Priors for Steering Frozen VLAs](http://arxiv.org/abs/2611.34914v1)**
A. Kratimenos, K. Daniilidis, E. Chatzipantazis（cs.RO, cs.CV）
指出 VLA 把物体去向绑定在训练布局上，提出以物体为中心的 3D 轨迹先验引导冻结 VLA，避免布局变动下的误放与碰撞。

**[DRBench Pro: A Knowledge-Centric Benchmark for Professional Deep Research Agents](http://arxiv.org/abs/2611.34852v1)**
H. Huang, Y. Yan, X. Wu et al.（cs.CL, cs.AI）
补足现有深度研究基准缺少的“知识中心”评估：报告覆盖哪些研究方向、深度如何；对调研型智能体的评价维度是实质补充。

### 🔧 方法与框架

**[How Much Do Coding Agents Over-Edit, and Why? An Empirical Study of Unneeded Edits in Repository-Level Agent Patches](http://arxiv.org/abs/2611.34875v1)**
A. Goel, B. Steenhoek, Y. Hu（cs.SE, cs.AI）
提出 Delta Residue Attribution 回放轨迹、归因补丁中每个块的多余编辑来源；把“补丁更大”从观感问题转为可归因的实证问题。

**[Real2SimLab: A Unified Platform for Real-to-Simulation Transfer](http://arxiv.org/abs/2611.34849v1)**
Y. Zhang, J. Huang, Y. Ni et al.（cs.RO, cs.CV）
面向编码智能体从视频生成仿真程序的统一平台，回应现有基准彼此割裂的问题。

**[BOP-Refer: Benchmark for Monocular 3D and 2D Object Grounding](http://arxiv.org/abs/2611.34862v1)**
T. Hodan, V. Bhat, M. Sundermeyer et al.（cs.CV, cs.AI, cs.RO）
首个覆盖日常与工业物体的单目 3D/2D grounding 基准，整合 9 个 BOP 数据集，指代表达经 VLM 生成并人工核验。

### 📊 应用

**[A gene informed benchmark for BioScoring of pathology foundation models](http://arxiv.org/abs/2611.34930v1)**
P. Vilars, V. Q.-H. Trinh, M. Vakalopoulou et al.（cs.LG）
指出分类/检索类下游基准只测“有用性”而不反映所表征的生物学，提出 BioScore；与超声侧“结构保真/生物学可信”的评价诉求同构。

**[Enhancing Maritime Domain Awareness using Latent Space Representations](http://arxiv.org/abs/2611.34899v1)**
R. Vinge, M. A. Belenguer-Plomer, I. Wittmann et al.（cs.CV, cs.AI, cs.LG）
基于 TerraMind 地理空间基础模型，直接在压缩隐空间而非原始 Sentinel-1 影像上操作；隐空间效率路线，可类比特超声基础模型的部署思路。

## 3. 研究趋势信号

超声方向正在从“去噪后更好看”转向“噪声/伪影是否被正确建模”：结构化噪声（#1）与声传播物理（#5）同日出炉，通道级校准（#2）与几何对齐重建（#3）则把问题前移到采集与波束形成环节。评价层面出现两个反向信号：一端是减少微调的通用分割（#10）与无参考式 OOD 检测（#12），另一端是对排行榜过拟合（#7）与概念预测不可靠（#11）的自我审视。跨设备稳健性（#6）仍是伪标签加权的经典路径，端侧部署今日投稿中未见明确超声证据。

## 4. 值得精读

1. **[Structured Noise Diffusion for Echocardiography Haze Removal](http://arxiv.org/abs/2611.33860v1)** —— 直接挑战“像素独立高斯噪声”这一扩散去噪默认假设，是理解超声伪影建模边界的关键文献，值得核对噪声构造与结构保持的评估方式。
2. **[CROSS-Calib](http://arxiv.org/abs/2611.31684v1)** —— 通道级误差校正与瞬态干扰抑制位于链路最前端，其“保留有效回波”的取舍标准对后续重建与质量评价有上游决定性影响。
3. **[Frame geometry, fascicle extrapolation and leaderboard overfitting in muscle ultrasound](http://arxiv.org/abs/2611.33539v1)** —— 对定量超声评价的几何前提与调参偏差做了系统测量，适合在采用任何公开排行榜结论前先读。

*注：原文仅提供各论文摘要片段，报告未对未见结果（具体指标、样本量、临床结论）作任何推断。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*