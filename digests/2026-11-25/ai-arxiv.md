# ArXiv AI 研究日报 2026-11-25

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-25 19:57 UTC

---

# ArXiv AI 研究日报（2026-11-25）

## 1. 今日速览

今日投稿中没有直接以“散斑抑制、自监督去噪、RF/IQ/通道数据、无参考质量评价”为主题的超声去噪或重建论文。唯一明确涉及超声信号的是 CROSS-Calib，但它主要做通道校准与重建，未给出散斑抑制或质量评价证据。信号层面，其余论文更多在通用通道校准、表示空间引导、自监督图像超分以及质量评价思路上做出了可迁移的贡献；医学与端侧部署也出现了少量边界型工作，但多模态医学模型的统一部署、多视角一致重建和可解释概念诊断则提供了可借鉴的结构保真与可信度思路。由此可见，直接可用的超声方法储备偏少，跨设备/端侧部署证据仍显不足，泛 AI 方向则以推理蒸馏、评测基准和多智能体降本为主线。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

> 说明：今日仅 CROSS-Calib 明确涉及超声数据；其余为不涉及超声验证的通用信号/重建方法，仅作方法参考，不能视为超声成果。

- **[CROSS-Calib: Selective Channel Calibration for Ultrasound Reconstruction](http://arxiv.org/abs/2611.31684v1)**
  T. Hu, J. Zhou（cs.AI，2026-11-23）
  针对超声信号受干扰、需在保留有效回波的同时纠正误差与去除瞬态干扰的问题，提出选择性通道校准与重建方法；这是今日唯一明确基于超声通道数据的论文，值得优先关注其对结构保真的处理方式（摘要未提供量化结果）。

- **[Linear Probes Can Guide: Training-Free Control of Representation Generators](http://arxiv.org/abs/2611.33037v1)**
  P. Wang, J. Morano, B. Fazekas et al.（cs.CV）
  指出表示自编码器所用视觉基础模型的表示空间可被线性探针引导，从而实现免训练控制；对重建类任务的控制/保真思路有潜在借鉴，但未涉及超声，需谨慎迁移。

- **[SHARPnP: Self-Supervised and Plug-and-Play Hyperspectral Super-Resolution from Real Noisy Unaligned Camera Measurements](http://arxiv.org/abs/2611.33032v1)**
  M. Jouni, B. Monroy, J. Bacca et al.（cs.CV, eess.IV, eess.SP）
  面向真实含噪、跨相机未对齐测量做自监督即插即用超分；其“无干净参考 + 真实传感器噪声 + 对齐失配”的设定与超声通道数据挑战相近，但非超声工作。

- **[ReCAP: Sequential Concept Acquisition with Guarantees under Imperfect Concept Predictors](http://arxiv.org/abs/2611.31776v1)**
  M. Nahiduzzaman, S. Korevaar, A. Bab-Hadiashar et al.（cs.CV）
  正视概念预测器不完美时诊断仍可信的问题，为可解释医学诊断提供保证；对超声图像质量/可信度评价的“不把预测当正确”思路有参考价值，非超声专用。

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Draft Calibration for Speculative Decoding: Accelerating LLM Serving by Matching Draft and Target Distributions](http://arxiv.org/abs/2611.33111v1)**
  Y. Liu, W. Zuo, W. Krichene et al.（cs.LG, cs.AI）
  通过匹配草稿模型与目标模型分布提升投机解码接受率，直接关系到 LLM 推理加速的落地效率。

- **[A Bias in Disguise: Tiny Gradient Edits Stop a Small Language Model's Thinking Loops and Complement a Frontier Model's Weight Edit](http://arxiv.org/abs/2611.33133v1)**
  H. Syed（cs.LG, cs.CL）
  报告 Qwen3.5-0.8B 在 4,096 token 预算下仅 1–2/500 道 MATH-500 能闭合 think block、准确率 15.4%，并用微小梯度编辑缓解“思考循环”，提供了具体的失效证据与干预手段。

- **[Auditing the Judge: Human-Derived Bias Discovery, Quantification, and Mitigation in LLM Judges](http://arxiv.org/abs/2611.33065v1)**
  H. Koo, C. Jung, F. Wu et al.（cs.AI, cs.LG）
  系统审计 LLM 评审的系统性偏差并给出量化与缓解，对评测管线可信度有直接意义。

- **[Shifter Quantization: Compact Representations for Native Integer Computation](http://arxiv.org/abs/2611.33080v1)**
  Y. Huang（cs.LG）
  提出在低比特下兼容原生整数 MMA 的量化方法，面向 GPU 推理效率，属端侧/部署相关的方法储备。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies](http://arxiv.org/abs/2611.33148v1)**
  D. J. Kopiczko, T. Blankevoort, Y. M. Asano（cs.CL）
  研究在蒸馏长程策略时如何跨格式迁移教师思维链与动作，触及强教师轨迹难以获取的核心痛点。

- **[Delegent: A Multi-Agent Harness That Reduces Cost without Sacrificing Performance](http://arxiv.org/abs/2611.33098v1)**
  L. Gu, J. Lin（cs.AI, cs.IR）
  把简单子任务下派给小模型、难题留给前沿模型，探索不牺牲性能的多智能体降本路径。

- **[Reinforcement Learning Can Be Recovered From Its Own Rollouts](http://arxiv.org/abs/2611.33102v1)**
  J. Sheng, J. Gu, G. Zeng et al.（cs.LG）
  探讨每次更新后被丢弃的 rollout 中蕴含多少可回收知识，关系到 RL 后训练的样本利用效率。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **[ROAM-Bench: Evaluating Embodied Active Spatial Intelligence through Evidence Verification](http://arxiv.org/abs/2611.33143v1)**
  X. Ran, X. Mo, S. Liu et al.（cs.RO, cs.CV）
  用证据核验区分“结果碰巧正确”与“真正完成任务要求”，改进具身空间智能的评测有效性。

- **[Lost on Campus: Evaluating Embodied Spatial Reasoning of Vision-Language Models in the Wild](http://arxiv.org/abs/2611.33145v1)**
  Z. Zheng, Y. Chen, D. Li et al.（cs.CV）
  在真实校园环境中评测 VLM 的具身空间推理，弥补静态图像与合成室内场景的语义捷径问题。

- **[AIChipBench: Benchmarking LLM Agents for Automated AI Accelerator Design](http://arxiv.org/abs/2611.33093v1)**
  G. Wang, C. Li, M. Luo et al.（cs.CL, cs.AI）
  强调硬件状态更新错误可能“当前 token 正确、数步后损坏”，据此设计输出测试难以覆盖的基准，评测维度有启发性。

### 📊 应用（垂直领域、多模态、代码生成）

- **[HuluOPD: Unifying Heterogeneous Medical Specialists into One Lightweight Model with Unlabeled Prompts](http://arxiv.org/abs/2611.32021v1)**
  Y. Zhang, S. Jiang, Y. Tang et al.（cs.CV, cs.AI, cs.CL）
  在专科数据私有、架构各异的前提下把多个医学 VLM 专科模型统一为一个轻量模型，对医学影像的跨系统部署有借鉴意义（未涉及超声）。

- **[OmniAct: One Policy, One Million Embodiments](http://arxiv.org/abs/2611.33158v1)**
  X. Fan, Y. Wang, J. Yan et al.（cs.RO, cs.AI, cs.CV）
  强调单一策略需适配各机器人能力而非仅共享动作表示，对跨设备稳健性研究有方法论参考。

## 3. 研究趋势信号

今日投稿显示，与超声去噪/重建直接相关的工作明显稀缺，信号处理类贡献更多转向“真实噪声、无干净参考、未对齐测量”的通用设定；可解释医学诊断开始正视预测器不完美，强调结论可信而非表面指标。部署侧，量化与投机解码继续围绕原生整数计算和分布匹配提效，端侧稳健性仍是延伸线索。评测维度从“结果正确”转向“证据与过程核验”，智能体研究则聚焦降本与轨迹蒸馏。整体看，超声领域亟需补充散斑抑制、RF/IQ 通道与无参考质量评价的系统性证据。

## 4. 值得精读

1. **CROSS-Calib**（[链接](http://arxiv.org/abs/2611.31684v1)）——今日唯一直接基于超声通道数据的论文，应完整阅读其通道选择、干扰去除与重建细节，判断结构保真与可迁移性。
2. **ROAM-Bench**（[链接](http://arxiv.org/abs/2611.33143v1)）——其“证据核验”式评测思想可迁移到超声重建与质量评价，即区分“观感平滑/指标好看”与“真正保留结构信息”。
3. **SHARPnP**（[链接](http://arxiv.org/abs/2611.33032v1)）——真实含噪、未对齐、无干净参考的自监督设定与超声通道数据的实际约束最接近，值得作为方法借鉴精读（注意其非超声验证）。

> 提示：今日供给与“超声去噪/重建/质量评价”重点方向的重合度低，本报告未将任何通用方法表述为超声成果；建议结合更早或后续投稿补充该方向证据。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*