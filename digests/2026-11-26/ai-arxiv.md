# ArXiv AI 研究日报 2026-11-26

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-26 19:39 UTC

---

# ArXiv AI 研究日报（2026-11-26）

## 1. 今日速览

今日超声方向的核心线索是“建模 ultrasound 特有的物理与数据结构”，而非套用通用图像去噪：三篇重要论文分别针对超声雾霭的结构化噪声扩散、B-mode 新视角合成的声传播物理先验、以及跨设备乳腺超声域适应中的伪标签加权，这三点直接对应去噪、重建与质量评价。另有研究揭示：基于帧几何的腓肠肌自动测量存在排行榜过拟合，提示“评价方法本身”需要被审视。泛 AI 侧，tokenisation 的 APX 不可近似性证明、混合循环 Transformer、以及编码智能体过度编辑的归因研究值得关注。需注意：今日多数通用视觉方法的超声有效性尚未验证，不应视作超声成果。

---

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

**1. [Structured Noise Diffusion for Echocardiography Haze Removal](http://arxiv.org/abs/2611.33860v1)**
Z. Luo, H. Li, M. Wang et al. | 一句话说明：指出常规扩散模型的像素独立高斯噪声无法表达超声雾霭的局部化结构，提出结构化噪声扩散以贴合超声雾霭的空间形态；针对的是去噪噪声建模这一核心假设，而非只调整网络。

**2. [UPP-Gauss: Ultrasound Propagation Physics-informed Gaussian Splatting for B-mode Novel-View Synthesis](http://arxiv.org/abs/2611.33920v1)**
G. Jung, S.-H. Oh, M.-G. Kim et al. | 一句话说明：把声传播与探头位姿引起的成像变化纳入 Gaussian Splatting，提升 B-mode 新视角合成；这是重建方向中少数显式引入超声物理的工作。

**3. [Continuous Foundation-Guided Pseudo-Label Weighting for Breast Ultrasound Domain Adaptation](http://arxiv.org/abs/2611.33843v1)**
X. Fan, X. Li | 一句话说明：以 EMA 教师生成目标域伪标签，并用连续（而非二值）权重经基础模型引导，应对不同扫描仪/机构/人群间的分割泛化差问题，直指跨设备稳健性。

**4. [Frame geometry, fascicle extrapolation and leaderboard overfitting in muscle ultrasound](http://arxiv.org/abs/2611.33539v1)**
S. Kooklan | 一句话说明：系统测量帧几何、筋膜外推方式与“小公开排行榜选参”三者对羽状角、肌束长度、肌厚自动读数的影响；属于对超声定量评价可靠性的方法性反思，值得在做超声指标评价时对照。

> 注：上述四篇摘要均只给出方法与问题定位，未提供可核实的定量指标（如散斑抑制幅度、结构保持度量或无参考评分结果），因此此处不引用具体数值。

### 🧠 大语言模型

**5. [Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1)**
V. Kastreva, P. Whittington, D. Komm et al. | 一句话说明：证明除非 P=NP，否则不存在多项式时间算法能得到目标值在任意常数因子内的 tokeniser，即分词不在 APX 类；覆盖自顶向下与自底向上、压缩与非压缩两种设定，为分词优化难度划出理论边界。

**6. [Mixture-of-Loops Transformer](http://arxiv.org/abs/2611.34923v1)**
L. Zhu, S. Wang, X. Wang et al. | 一句话说明：重新设计相邻循环之间传递的内容，以在循环 Transformer 的表达力与效率之间推进前沿。

**7. [Repairing the Trustworthiness of Distilled Language Models](http://arxiv.org/abs/2611.34831v1)**
K. Shubham, D. Vyas, V. Agarwal et al. | 一句话说明：指出知识蒸馏在下游性能保持的同时可能损害可信性，并尝试在原始蒸馏语料不可得（或难以直接复用）的条件下修复该退化。

### 🤖 智能体与推理

**8. [Attack Policy Selection can Mislead Monitor Evaluators](http://arxiv.org/abs/2611.34934v1)**
C. Griffin, O. Makins, A. Cooper Stickland et al. | 一句话说明：以一款已下线（ex-production）的 OpenAI monitor 为案例，发现用攻击策略生成转录来代理危险行为时，所测得的假阴性率会被误导；对 AI 监控评估方法论有直接影响。

**9. [DRBench Pro: A Knowledge-Centric Benchmark for Professional Deep Research Agents](http://arxiv.org/abs/2611.34852v1)**
H. Huang, Y. Yan, X. Wu et al. | 一句话说明：针对深度研究智能体现有评测缺少“报告覆盖了哪些研究方向、深度如何”的知识中心评估，提出专门基准。

**10. [How Much Do Coding Agents Over-Edit, and Why? An Empirical Study of Unneeded Edits in Repository-Level Agent Patches](http://arxiv.org/abs/2611.34875v1)**
A. Goel, B. Steenhoek, Y. Hu | 一句话说明：提出 Delta Residue Attribution，重放智能体轨迹并追溯最终补丁中每个块的来源，从而区分“多余编辑”的规模、内容与成因，而非只看补丁大小。

### 🔧 方法与框架

**11. [Diverse Alternative Reasoning Traces for Hard Math Problems](http://arxiv.org/abs/2611.34928v1)**
L. Aichberger, A. Golinski, A. Blaas et al. | 一句话说明：针对难题下独立蒙特卡洛采样难得可验证轨迹的问题，构造多样化的替代推理轨迹用于后训练。

**12. [Diffusion Steering via Adaptive Reward Estimation and Resampling](http://arxiv.org/abs/2611.34839v1)**
A. Gourabathina, S. Tonekaboni, M. Ghassemi et al. | 一句话说明：将扩散模型的概率重新分配到更成功的采样结果上，以缓解文本到图像中漏画对象、属性或关系的问题。

**13. [Not all world models can doubt: how training objective and architecture shape epistemic uncertainty in JEPA and RSSM world models](http://arxiv.org/abs/2611.34830v1)**
S. Baur, W. Samek, J. Ma | 一句话说明：对比 JEPA 与 RSSM 两类世界模型，指出训练目标与架构决定了其认知不确定性表达能力的差异，关系到基于模型预测的决策可靠性。

### 📊 应用

**14. [A gene informed benchmark for BioScoring of pathology foundation models](http://arxiv.org/abs/2611.34930v1)**
P. Vilars, V. Q.-H. Trinh, M. Vakalopoulou et al. | 一句话说明：提出 BioScore，用基因信息衡量病理基础模型所表征的生物学，而非仅看分类/检索等下游任务表现。

**15. [Beyond PSNR? — [High-Fidelity Image Matting with Pixel-Space Diffusion Transformers](http://arxiv.org/abs/2611.34929v1)**
B. Yang, X. Lin, Y. Wei et al. | 一句话说明：指出现有 latent diffusion 的压缩表征与 VAE 重建同高保真抠图存在失配，改用像素空间扩散 Transformer；其“生成先验 vs 重建保真”的张力与超声去噪后质量评价的关切相通，但未涉及超声。

---

## 3. 研究趋势信号

今日投稿显示，医学超声研究正从“换更强去噪网络”转向“改噪声模型与成像物理假设”（结构化噪声、声传播先验），并开始反思评价环节本身（排行榜选参、帧几何对定量指标的影响）。“无干净参考”的思路在多篇论文中以伪标签加权、域适应形式出现。泛 AI 侧，理论边界（分词近似难度）、循环/混合架构效率、以及智能体行为评估的可信度成为热点，但多数方法尚无超声验证。

---

## 4. 值得精读

1. **[Structured Noise Diffusion for Echocardiography Haze Removal](http://arxiv.org/abs/2611.33860v1)** — 直接针对超声雾霭的空间结构化特性改造扩散噪声模型，是理解“超声专用去噪假设”的关键起点。
2. **[Frame geometry, fascicle extrapolation and leaderboard overfitting in muscle ultrasound](http://arxiv.org/abs/2611.33539v1)** — 提醒超声定量读数与排行榜调参的系统性偏差，对构建可信的无参考/结构保真评价有方法论价值。
3. **[Can image generation help visual reasoning? An empirical study](http://arxiv.org/abs/2611.34935v1)** — 覆盖 13 个视觉-语言模型与生成器的实证研究，可作为“生成辅助是否真提升视觉任务”的对照参考（注：非超声工作）。

---

*说明：本日报仅基于所提供摘要撰写；摘要未披露的定量结果、数据集规模与临床验证细节均未补写。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*