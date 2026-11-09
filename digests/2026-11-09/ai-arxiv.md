# ArXiv AI 研究日报 2026-11-09

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-09 20:48 UTC

---

# ArXiv AI 研究日报（2026-11-09）

## 1. 今日速览

今日超声方向最值得关注的是**无配对/无干净参考的恢复与质量把关**这条主线：超声视频自监督联合超分与去散斑（#3）直面临床配对数据稀缺的真问题；胎儿生物测量审计（#10）揭示选择性预测只约束错误率、不约束错误幅度，对超声自动测量的无参考质量评价有直接警示。此外，压缩码率对下游分割的影响（#9）、闭环扫查的 Gymnasium 测试床（#8）与误差三诊（#6）共同指向“面向机器接收端的超声管线评估”。LLM 方面，并行智能体团队扩展测试时计算（#45）、推理缓存复用（#16）与 TTRL 伪标签可靠性分析（#21）是今日方法论层面的看点。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

- **[Diffusion Plug-in Priors for Self-Supervised Ultrasound Video Restoration](http://arxiv.org/abs/2611.05206v2)**
  C. Chen, M. He, Y. Li et al.
  无配对训练数据、无干净参考条件下，联合实现超声视频超分与去散斑；正对临床痛点，但摘要未披露定量指标，建议精读时核对数据规模与评估方式。

- **[Task-Aware Bitrate Thresholds for Codec-Robust Ultrasound Segmentation](http://arxiv.org/abs/2611.06992v1)**
  A. Siyavashi, A. Shirzad, C. Herglotz
  面向远程机器人手术/远程超声的有损压缩，提出以**下游分割任务**而非人眼观感来定码率阈值，是把“机器接收端”纳入质量评价的实用工作。

- **[Risk Control Certifies Rates, Not Magnitudes: An Audit of Selective Fetal Biometry](http://arxiv.org/abs/2611.05851v1)**
  Z. Yang, L. Jiang, C. Li et al.
  审计胎儿头围测量管线的选择性预测：有限样本保证只绑定大误差的**发生率**，而非误差**幅度**；对超声自动测量的可信度声明是重要的负面证据。

- **[Region-aware error triage for medical image segmentation with groupwise conformal risk control](http://arxiv.org/abs/2611.08962v1)**
  N. K. Paul, M. S. I. Shovo, H. Lee
  解决分割掩膜“该警告哪里”的问题：按区域做共形风险控制，避免单一全局阈值使远端错误漏报；可迁移到超声分割复核流程（尚未见超声验证）。

- **[USB Gym: A Gymnasium Testbed for Closed-Loop Ultrasound View Matching](http://arxiv.org/abs/2611.08352v1)**
  T. Intharah, Z. Gao, Y. Liu et al.
  把分散在各模拟器中评估的扫查子方法合入统一闭环测试床，检验组合后是否仍然可用；对端侧超声引导系统集成评估有价值。

- **[ProtoCouncil: Multi-Encoder Anatomical Prototypes for Prostate Cancer Detection in Micro-Ultrasound](http://arxiv.org/abs/2611.09058v1)**
  M. M. Abootorabi, N. Maghsoodi, A. Saadat et al.
  针对微超声前列腺癌检测中稀疏、噪声大的活检级标签与域偏移问题，用多编码器解剖原型提升可解释性与稳健性。

- **[Label-Preserving Fourier Domain Adaptation with Generative-AI and Real Style Donors for 3D Mitral Valve Segmentation](http://arxiv.org/abs/2611.05106v1)**
  J. Javed, A. Salim, M. M. Ur Rahman
  以傅里叶域自适应缓解三维经食管超声标注体数据稀缺，面向跨设备/跨域分割稳健性，属延伸方向。

- **[Smart Spectral Doppler Ultrasound Imaging using Motion Tracking based on Wide-beam transmission and Neural Networks](http://arxiv.org/abs/2611.09002v1)**
  J. Baek, A. Lee, J. Kang et al.
  用宽波束发射与神经网络运动跟踪解决频谱多普勒采样容积被呼吸/探头移动带偏的问题，属波束形成与采集侧的前端改进（初步结果）。

- **[High resolution 3D localization of ultrasound sparse sources using a SAGE algorithm](http://arxiv.org/abs/2611.07966v1)**
  S. V. Heymans, F. Rottenberg, T. Gelvez-Barrera et al.
  被动声学成像受系统点扩散函数限制，用 SAGE 算法做稀疏源三维定位；与波束形成/反卷积重建相关，属信号处理侧延伸。

> 说明：今日投稿中**未见**直接针对 RF/IQ/通道原始数据去噪或端侧部署的专门论文；上述前十条中仅有部分涉及采集与重建前端，其余为下游任务与评估。

### 🧠 大语言模型

- **[CodeQuant2: Enhanced Outlier Mitigation and Adaptive Clustering for Low-Precision LRMs](http://arxiv.org/abs/2611.09868v1)**
  X. Liu, X. Yin, T. Xia et al.
  针对大推理模型长思维链带来的推理成本，改进低比特量化的离群值抑制与自适应聚类。

- **[Compaction, decay and reinforcement in a two-tier conversational memory](http://arxiv.org/abs/2611.09807v1)**
  O. Edogun, J. Obigwe, I. Mehmood
  在 LoCoMo 全部 1,985 题上配对比较“逐轮压缩为原子事实检索”与 RAG 直接检索原始记录，给出记忆机制的直接对照证据。

### 🤖 智能体与推理

- **[Test-Time Compute Scales Better with Parallel Agent Teams](http://arxiv.org/abs/2611.09798v1)**
  J. Wang, H. Chen, A. Li et al.
  指出 Best-of-N 快速饱和、单一长轨迹受限，提出并行智能体团队在有验证器打分时扩展测试时计算更优。

- **[CPU-ARC: Agentic Reasoning Caching for on-CPU Reasoning Reuse](http://arxiv.org/abs/2611.09891v1)**
  P. Belcak, G. Heinrich, S. Muralidharan et al.
  把“解题推理”与“执行解”解耦，复用已完成的推理以降低新实例成本；对推理成本控制有直接工程价值。

- **[On the Reliability of Majority-Vote Pseudo-Labels in Test-Time Reinforcement Learning](http://arxiv.org/abs/2611.09872v1)**
  H. Wang, R. Wang, Y. Wang et al.
  分解 TTRL 在线 DPO 的多数投票监督，分析其可靠性来源与失效条件，是对自监督信号可信度的必要审视。

- **[Knowing When to Intervene: Causal Evaluation of AI Agents](http://arxiv.org/abs/2611.09792v1)**
  A. Sawarni, W. Xing, T. Zrnic et al.
  指出静态基准无法反映部署时审计干预的价值，提出因果框架判断轨迹中“是否该介入”。

### 🔧 方法与框架

- **[On the (non-)closedness of the set of ReLU networks](http://arxiv.org/abs/2611.09887v1)**
  E. Martinet, L. Bungert
  证明单隐层 ReLU 网络集在 $W^{1,p}$ 中弱闭，从而保证一类强制能量泛函存在极小元；为网络逼近的理论分析提供基础结论。

- **[Fifty-Two Shades of Pig: What the UCR Archive Really Asks Classifiers to Do](http://arxiv.org/abs/2611.09843v1)**
  O. Swelam, J. Küken, S. B. Hoo et al.
  揭示 UCR 时间序列基准中标签语义与原实验问题错位，是对基准有效性的尖锐提醒。

- **[Graded convolutional networks: scale invariance without the scale and robustness to unknown blur](http://arxiv.org/abs/2611.09878v1)**
  T. Shaska
  用图像高斯射流的 graded 结构构造尺度不变、对未知模糊稳健的局部卷积；属通用图像方法，**尚未见超声验证**。

### 📊 应用

- **[Health-System-Wide Mapping of Demographic Information in Routine Clinical Histopathology](http://arxiv.org/abs/2611.09851v1)**
  S. Chen, R. Verma, K. Clare et al.
  基于 130 万张 H&E 全切片、257,322 名患者、25 个器官，用病理基础模型表征系统评估人口学信息可检测性；规模与系统性突出。

- **[Can Agentic Systems Close the Gap in Radiology with Production AI Tools?](http://arxiv.org/abs/2611.09836v1)**
  A. Charley, J. Khlaut, C. Corbière et al.
  尝试用智能体系统结合专用模型与通用模型，兼顾覆盖广度与幻觉/测量误差问题。

- **[Assessing the Impact of Retrieval-Augmented Generation on Algorithmic Problem-Solving](http://arxiv.org/abs/2611.09791v1)**
  G. S. Baggio, G. M. Lunardi, G. M. Machado et al.
  针对竞赛编程的算法推理需求设计 RAG 方案，评估检索对算法能力（而非仅代码生成）的实际增益。

- **[When Instruction Files Go Stale: Documentation Debt and Hidden Cost in Coding Agents](http://arxiv.org/abs/2611.09802v1)**
  T. Mehtiyev, B. Tadesse, L. Arkoh et al.
  量化 AGENTS.md/CLAUDE.md 等每次会话必读指令文件“过期”带来的隐性成本，是编码智能体的实用运维问题。

## 3. 研究趋势信号

今日投稿显示，超声方向正从“提升观感”转向“**为下游机器与临床决策负责**”：码率按分割任务定标（#9）、警告像素数量不再凭经验（#6）、选择性预测只保证错误率不保证幅度（#10）、闭环组合方法统一测试床（#8）——评估重心从 PSNR/SSIM 移向任务级与风险级证据。与此同时，无配对自监督恢复（#3）继续填补配对数据缺口。智能体侧则明显从“更大单模型”转向**并行团队、推理缓存与介入时机**的性价比权衡（#45、#16、#48）。

## 4. 值得精读

1. **[Diffusion Plug-in Priors for Self-Supervised Ultrasound Video Restoration](http://arxiv.org/abs/2611.05206v2)** — 与当前“无干净参考去噪+重建”重点完全对口，需核对其自监督机制、结构保真证据与评估协议。
2. **[Risk Control Certifies Rates, Not Magnitudes](http://arxiv.org/abs/2611.05851v1)** — 对超声自动测量的质量把关给出可复用的审计范式，结论具警示性，值得完整阅读其审计设计。
3. **[Test-Time Compute Scales Better with Parallel Agent Teams](http://arxiv.org/abs/2611.09798v1)** — 泛 AI 方向今日最具方法论价值的一篇，清晰界定 Best-of-N 与团队式扩展的适用边界。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*