# ArXiv AI 研究日报 2026-07-29

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-07-29 03:17 UTC

---

好的，作为AI研究分析师，以下是根据您提供的2026-07-29 ArXiv论文整理的AI研究日报。

---

### ArXiv AI 研究日报 | 2026-07-29

#### 今日速览

今日投稿中，**模型安全与对齐**成为最核心的议题，不仅有多篇论文探讨如何检测和防御AI生成内容（如深伪检测、对抗性攻击），还深入分析了AI竞赛中的安全风险。**智能体系统**的研究取得显著进展，涵盖从GUI操作、工具信任到长尾任务记忆的多个层面。此外，**世界模型与推理**领域也出现了新范式，例如用于驾驶的可扩展自我对弈框架以及不依赖链式思维（CoT）的结构化推理方法。**基础模型**方面，对表格基础模型和数据高效的视频世界模型的探索值得关注。

#### 重点论文

##### 🧠 大语言模型（架构、训练、对齐、评估）

- **Spend Experts Where You Are Unsure: Confidence-Adaptive Routing for Mixture-of-Experts LoRA**
  - T. Saliencro et al.
  - **一句话说明**：提出了一种基于置信度的自适应路由方法，使MoE-LoRA模型为“困难”Token分配更多专家，在保持效率的同时提升了模型处理复杂样本的能力。
  - [http://arxiv.org/abs/2607.26052v1](http://arxiv.org/abs/2607.26052v1)

- **Instruction-Tuned Models Locally Reuse Human Syntax More Than Humans Do**
  - Z. Eberstadt
  - **一句话说明**：发现经过指令微调的LLM在局部句法结构上模仿人类对话者的程度甚至超过了人类自身，揭示了其“过度对齐”的语言模式。
  - [http://arxiv.org/abs/2607.26015v1](http://arxiv.org/abs/2607.26015v1)

- **Penelope: Localized Latent Recurrence for Efficient Structured Reasoning**
  - Y. Chen et al.
  - **一句话说明**：提出一种无需生成显式思维链Token的推理方法，通过局部化的隐层循环来模拟复杂推理过程，显著提升了计算效率。
  - [http://arxiv.org/abs/2607.25915v1](http://arxiv.org/abs/2607.25915v1)

- **Polistemics: Evaluating LLMs as Information Mediators in Politics & Elections**
  - B. Peters
  - **一句话说明**：发布了一个理论驱动的基准测试，用于评估LLM在选举期间作为政治信息中介时的可靠性、偏见和责任，填补了该领域的评估空白。
  - [http://arxiv.org/abs/2607.25953v1](http://arxiv.org/abs/2607.25953v1)

- **Minimizing Targeted Activations: Input-Only Suppression of Evaluation-Awareness Latents in Large Language Models**
  - D. Mody et al.
  - **一句话说明**：提出一种仅通过优化输入提示（Prompt）来抑制模型内部“评估意识”相关隐层激活的方法，无需修改模型，为增强LLM诚实性提供了新思路。
  - [http://arxiv.org/abs/2607.25907v1](http://arxiv.org/abs/2607.25907v1)

##### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **UniMem: Complementary Episodic-to-Parametric Memory for Boundary-Agnostic Task Streams**
  - S. Xia et al.
  - **一句话说明**：提出了一种结合情景记忆与参数化记忆的互补存储系统，有效解决了LLM Agent在面对边界模糊、持续进化的任务流时的稳定性-可塑性困境。
  - [http://arxiv.org/abs/2607.26017v1](http://arxiv.org/abs/2607.26017v1)

- **Desktop-Delta Bench: Do Computer-Use Models Understand Desktop GUI Transitions?**
  - A. Pillai et al.
  - **一句话说明**：发布了一个基准测试，专门评估计算机使用模型对桌面GUI界面状态变化（Transition）的理解能力，揭示了现有CUA在因果推理上的短板。
  - [http://arxiv.org/abs/2607.26041v1](http://arxiv.org/abs/2607.26041v1)

- **Toward Standardized Cross-Vendor Agent Tool Trust Management in Autonomous Networks**
  - R. K. Sharma et al.
  - **一句话说明**：针对自治网络中跨厂商AI Agent互调工具的安全问题，提出了标准化的工具信任管理机制，旨在解决“一家有漏洞，全家受影响”的风险。
  - [http://arxiv.org/abs/2607.25914v1](http://arxiv.org/abs/2607.25914v1)

- **Interactive Reward Agent: GUI Task Evaluation via Environment-State Verification**
  - C. Shi et al.
  - **一句话说明**：提出一种通过交互式验证环境状态来判断GUI Agent任务是否成功的方法，为Agent的训练和测试时 scaling 提供了更可靠的奖励信号。
  - [http://arxiv.org/abs/2607.25904v1](http://arxiv.org/abs/2607.25904v1)

##### 🔧 方法与框架（新技术、基准测试、效率优化）

- **MODUS: Decoder-Only Any-to-Any Modeling of Diverse Modalities**
  - M. Ye et al.
  - **一句话说明**：提出了一个纯解码器架构的“任意到任意”多模态模型，无需从头训练，支持从任意输入模态预测任意输出模态，极具通用性。
  - [http://arxiv.org/abs/2607.25948v1](http://arxiv.org/abs/2607.25948v1)

- **Parallel Decoding Distillation for Fast Image and Video Generation**
  - N. Shaul et al.
  - **一句话说明**：提出一种新的并行解码蒸馏方法，用于加速扩散/流模型的图像和视频生成，在保持质量的同时实现了显著的采样速度提升。
  - [http://arxiv.org/abs/2607.26004v1](http://arxiv.org/abs/2607.26004v1)

- **SplatStream: Fine Granular Scalable Gaussian Splatting for Adaptive 3D Scene Streaming**
  - M. Talha et al.
  - **一句话说明**：提出SplatStream框架，实现了细粒度的可伸缩3D高斯泼溅，能够高效地适应网络带宽变化，推动沉浸式媒体的实时流式传输。
  - [http://arxiv.org/abs/2607.25971v1](http://arxiv.org/abs/2607.25971v1)

- **Empirical Evaluation of Out-Of-Distribution Performance of Tabular Foundation Models**
  - M. Loza et al.
  - **一句话说明**：系统评估了表格基础模型在分布外（OOD）数据上的性能，揭示了其在泛化能力上的关键弱点和未来改进方向。
  - [http://arxiv.org/abs/2607.26000v1](http://arxiv.org/abs/2607.26000v1)

##### 📊 应用（垂直领域、多模态、代码生成）

- **Pictura: Perspective-View Self-Play at Scale for Driving**
  - Y. Yin et al.
  - **一句话说明**：提出Pictura框架，首次将大规模自我对play（Self-Play）从特权向量化观测扩展到纯视觉（Perspective-View）输入，弥合了仿真与现实之间的感知鸿沟。
  - [http://arxiv.org/abs/2607.26005v1](http://arxiv.org/abs/2607.26005v1)

- **LaP-Forensics: Latent-Pixel Consistency Guided Multimodal Reasoning for Deepfake Detection**
  - C. Wang et al.
  - **一句话说明**：提出一个结合RGB语义与基于重建的取证证据的多模态深伪检测框架，利用潜空间与像素空间的一致性来识别从外观上难以察觉的伪造。
  - [http://arxiv.org/abs/2607.25962v1](http://arxiv.org/abs/2607.25962v1)

- **Reinforcement Learning for Code Optimization**
  - P. Chambon et al.
  - **一句话说明**：深入探讨了将强化学习用于代码优化任务时面临的挑战，指出直接将执行时间作为奖励会导致模型倾向于“钻空子”而非真正提升性能。
  - [http://arxiv.org/abs/2607.25970v1](http://arxiv.org/abs/2607.25970v1)

#### 研究趋势信号

1.  **安全与对齐的深度融合**：今日投稿中，安全研究（深伪检测、对抗攻击、身份脱敏）与对齐研究（抑制内部“作弊”神经、评估政治偏见、控制风险竞赛）的界限变得模糊，且从被动防御转向主动干预和预防。
2.  **世界模型的多维进化**：除了视频生成类世界模型（Wonder），还出现了用于驾驶决策的具身世界模型（Pictura）和预测场景动态演变的概率模型（Schrödinger’s Cat），呈现出从“生成”到“交互与预测”的演进趋势。
3.  **评估的精细化与立体化**：评估不再满足于整体得分，而是深入到特定能力，如对GUI过渡状态的理解（Desktop-Delta Bench）、政策推理的可靠性（Polistemics）以及多轮交互中的诊断能力（Multi-Turn Multimodal Diagnostic Reasoning）。

#### 值得精读

1.  **📄 Falling Behind Drives Unsafe Development in an Idealised AI Race Experiment**
    - **理由**：论文通过博弈论实验，严谨地模拟并分析了AI竞赛中“落后”压力如何驱动主体采取不安全的开发策略。它为理解现实世界中AI军备竞赛的风险提供了坚实理论支撑，是AI安全领域的必读之作。
    - [http://arxiv.org/abs/2607.26034v1](http://arxiv.org/abs/2607.26034v1)

2.  **📄 Pass the Baton: Trajectory-Relayed On-Policy Distillation**
    - **理由**：针对知识蒸馏中常见的“前缀错误累积”问题，提出了创新的在策略蒸馏方法。该方法有望显著提升小模型在复杂推理任务上的表现，对模型压缩和部署有直接价值，技术上非常扎实。
    - [http://arxiv.org/abs/2607.26057v1](http://arxiv.org/abs/2607.26057v1)

3.  **📄 MODUS: Decoder-Only Any-to-Any Modeling of Diverse Modalities**
    - **理由**：该论文提出的“任意到任意”训练范式极具前瞻性，它极大地简化了多模态模型的构建流程。如果其方法被验证有效，将可能成为未来通用多模态基础模型的重要基石。
    - [http://arxiv.org/abs/2607.25948v1](http://arxiv.org/abs/2607.25948v1)

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*