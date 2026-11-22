# ArXiv AI 研究日报 2026-11-22

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-22 17:52 UTC

---

# ArXiv AI 研究日报（2026-11-22）

## 1. 今日速览

今日投稿中没有直接聚焦超声散斑抑制、无干净参考去噪（如 Noise2Noise 类）、RF/IQ/通道数据与波束形成、或超声专用无参考质量评价的论文，因此“超声去噪—重建—质量评价”这一主线今天**缺乏直接命中**，需诚实说明。与超声最相关的三篇分别落在：退化感知的超分提示路由（超声超分）、深度学习辅助的全波形反演衰减重建（超声 CT）、以及机器人超声引导穿刺的下游取材。其余为医学影像分割纠错、机构特化适配、无参考可靠性审计等延伸工作。非超声方向上，扩散模型蒸馏与 RL 后训练机理、世界模型与 3D/视频生成、智能体安全审计构成今日次重点。以下仅按原文证据归类，**未将任何通用方法表述为已在超声上验证**。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价（今日无直接命中，列出最相关延伸）

> 说明：今日**没有**散斑抑制、自监督/无干净参考去噪、RF/IQ/通道数据处理、波束形成或无参考超声质量评价的直接工作。以下为最接近的三篇，均非上述子方向。

- **[DAP-MR: Degradation-Aware Prompt-Magnitude Routing for Real-World Ultrasound Super-Resolution](http://arxiv.org/abs/2611.22331v1)**
  N.-H.-L. Le, T.-A. Le, D.-H. Le 等（cs.CV）
  指出自然图像超分依赖语义文本提示用于超声时不可靠——生成标签常与实际复原需求不符、通用模型可能误解专业医学术语；提出按退化感知进行提示—幅度路由。属超声重建方向，但摘要未给出结构保真、跨设备或临床任务的量化证据。

- **[Deep-Learning-Assisted Full Waveform Inversion for Attenuation Reconstruction in Ultrasound Computed Tomography](http://arxiv.org/abs/2611.23553v1)**
  Mingrui Liu, Michael L. Oelze（eess.SP, physics.med-ph）
  针对超声 CT 中声衰减重建比声速更难、研究更少的问题，提出基于前期工作的 DL 辅助 FWI 衰减重建框架。属超声重建主线，涉及物理建模，但摘要未提供结构保真或跨设备数据。

- **[Towards Vacuum-Assisted Robotic Needle Interventions: From Fluid Aspiration to Tissue Biopsy](http://arxiv.org/abs/2611.24258v1)**
  S. Shabana, L. Nag Laxminarayan Nagesh, M. Vallejo 等（cs.RO）
  指出机器人超声引导穿刺多关注定位与置针，后续诊断取材研究不足，且积液抽吸与组织活检通常分开处理；本文统一二者。属超声下游临床任务延伸，非去噪/重建。

### 📊 应用（医学影像延伸）

- **[Retrieval-Augmented Correction for Generalist Medical Image Segmentation](http://arxiv.org/abs/2611.23189v1)**
  V. Marcianò, Xiaoming Zhang, M. Antonelli 等（cs.CV, cs.AI）
  针对自动分割掩码的残余结构误差，现有纠错按单一解剖逐一手工处理、难以扩展；提出检索增强的通用纠错。与“结构保真”理念相关，但对象是分割掩码而非超声图像。

- **[Efficient Self-Supervised Adaptation of 3D Abdominal Vision-Language Model for Institution-Specific HCC Classification](http://arxiv.org/abs/2611.22504v1)**
  F. P. Kartika, Cheng-Yu Ma, Ying-Jia Lin 等（cs.CV, cs.LG）
  对比全量微调与 PEFT 将预训练 3D 医学 VLM 适配到机构特异的 HCC 分类任务。属跨机构稳健性延伸，非超声。

- **[Multi-institutional grading of Barrett's esophagus dysplasia... pathology foundation model and MIL](http://arxiv.org/abs/2611.26562v1)**
  A. Khosravi, J. M. Jagtap, D. C. Codipilly 等（cs.CV, cs.AI）
  多机构回顾性诊断准确性研究，用病理基础模型+MIL 做不依赖染色归一化的异型增生分级，针对观察者间变异大的问题。属跨机构稳健性延伸（病理，非超声）。

- **[Multimodal Error Detection in Chest X-ray Reports](http://arxiv.org/abs/2611.26492v1)**
  Yanda Cheng, Bo Wen, Yuhao Lu（cs.CL）
  Rad-Linter 用图像分类器给九类病变打分，再由 1.5B 参数 LLM（LoRA，1,816 例）校验报告一致性以标记潜在错误。属“质量审计”思路的影像报告延伸，非超声质量评价。

### 🤖 智能体与推理

- **[AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control](http://arxiv.org/abs/2611.26613v1)**
  Yiyang Du, Yuxuan Kuang, Qitao Zhao 等（cs.RO, cs.CL, cs.CV）
  指出现有基准只报 episode 级成功率、看不出智能体如何成功，评测前沿多模态语言智能体直接输出底层数值动作控制机器人。

- **[AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher](http://arxiv.org/abs/2611.26510v1)**
  Guoxin Chen, Shuang Sun, Fanzhe Meng 等（cs.CL）
  指出仅凭任务成功无法界定该强化哪些行为，成功轨迹也可能含无根据假设等；提出用自然语言技能引导的技能微调（Skill-FT），让同一模型做更好的教师。

### 🧠 大语言模型

- **[Represented but misread: Post-training changes how language models read out what they represent](http://arxiv.org/abs/2611.26584v1)**
  Jochen Laubrock（cs.CL, cs.LG）
  在六个开源基座模型及其后训练版本上，用线性探针与模型自答结合信号检测理论，区分后训练改变的是“表征”还是“读出”。对理解对齐副作用有方法学价值。

- **[Text-Aware, Vision-Blind: How Multimodal Image Editing Systems Handle Unsafe Inputs](http://arxiv.org/abs/2611.26569v1)**
  Ziqing Yang, Yixin Wu, Michael Backes 等（cs.CR, cs.CV, cs.LG）
  指出多模态图像编辑的安全机制多依赖单一模态、缺乏视觉内容与文本提示的联合判断，属系统性安全缺口分析。

### 🔧 方法与框架

- **[Posterior Matching Distillation](http://arxiv.org/abs/2611.26629v1)**
  H. Yesiltepe, J. Berner, A. Vahdat 等（cs.CV）
  针对扩散蒸馏中“学生分布匹配教师分布”常由反向/轨迹驱动的问题，提出后验匹配式蒸馏，压缩采样步数。属生成效率方向。

- **[RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1)**
  T. H. S. Meral, Kaan Oktay, A. Helbling 等（cs.CV, cs.LG）
  探索 RL 后训练为何提升扩散 Transformer 的视觉质量与文本渲染，作者观察到其机制近似激活引导（activation steering），对理解 RL 后训练机理有启发。

- **[Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth](http://arxiv.org/abs/2611.26603v1)**
  Peiyun Hu, M. Mihajlovic, L. Duong 等（cs.CV, cs.LG）
  分析出先验方法常在时序一致性与边界锐度间取舍（多帧偏一致、单帧偏锐），提出兼顾二者的全分辨率度量深度估计。属结构保真理念的深度延伸，**无超声验证**。

- **[Susceptibility source separation via Closed-form Alternating Newton-type Optimization](http://arxiv.org/abs/2611.26561v1)**
  I. Contreras-Zúñiga, C. Tejos, C. Milovic（eess.IV）
  针对 QSM 顺/抗磁源体素内相消，用三池模型加闭式交替牛顿型优化做源分离。属定量成像重建，非超声。

## 3. 研究趋势信号

今日投稿显示两条信号：一是**“审计/纠错”视角渗透到各层**——分割掩码纠错、概念纠错审计（When Lower Harm Misleads）、LLM 后训练读出分析、智能体安全事件回溯，反映学界从“提升指标”转向“验证改进是否真实”。二是**医学影像的机构特化与跨机构稳健性**成为显性关切（HCC 适配、多机构病理分级）。需注意：超声去噪/质量评价主线今日**无直接投稿**，超声相关仅见超分与 CT 衰减重建，且多无结构保真或临床量化证据。

## 4. 值得精读

1. **[When Lower Harm Misleads: Auditing Concept Corrections](http://arxiv.org/abs/2611.22084v1)**（cs.AI, cs.CV）— 揭示“有害性下降”可能只是因为模型对任何纠正都反应变弱或起点更差，直接关系超声 BI-RADS 描述符纠错这类临床场景的评估口径，方法论警示意义强。

2. **[Posterior Matching Distillation](http://arxiv.org/abs/2611.26629v1)** 与 **[RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1)**（均 cs.CV）— 前者是生成效率的可复用技术，后者对 RL 后训练机理给出可检验解释，均适合作为端侧/低延迟图像生成的底层参考。

3. **[Deep-Learning-Assisted Full Waveform Inversion for Attenuation Reconstruction in Ultrasound Computed Tomography](http://arxiv.org/abs/2611.23553v1)**（eess.SP）— 今日唯一较接近超声物理重建主线、且强调“衰减重建比声速更难”的工作，适合顺着补充声学建模背景。

> 备注：因今日缺少超声去噪/无参考质量评价直接工作，未强行拼凑；相关评估指标（结构保真、无参考质量）如需，应查更早期投稿，本material未提供。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*