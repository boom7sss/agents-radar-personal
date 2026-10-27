# 今日论文精读 · 2026-09-25

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Temporal Gradient Inversion for Private Trajectory Reconstruction in Embodied Reinforcement Learning** · `NeurIPS`
   **做什么：** 提出 TRACE，从分布式具身 RL 的逐步策略梯度自回归重建私有观测-动作轨迹。
   **为什么读：** NeurIPS 2026 接收，利用跨时相关等单帧攻击忽略的结构信号。
   [阅读论文](http://arxiv.org/abs/2609.30258v1)

2. **SemMSA: Latent Semantic-Aided Robust Multimodal Sentiment Analysis with Incomplete Data** · `NeurIPS`
   **做什么：** 用 LLM 构造情感语义，经无锚谱对齐融合语言、视觉、听觉三模态。
   **为什么读：** NeurIPS 2026 接收，针对缺失模态下虚假生成与噪声引导问题。
   [阅读论文](http://arxiv.org/abs/2609.30238v1)

3. **The Alignment Illusion in Multimodal Large Language Models** · `NeurIPS`
   **做什么：** 对 13 个 MLLM 的视觉流做噪声干预，检验层级对齐分数是否反映跨模态交互。
   **为什么读：** NeurIPS 2026 接收，CKA/SVCCA 等四种标量度量无法稳定区分被破坏的视觉输入。
   [阅读论文](http://arxiv.org/abs/2609.30210v1)

4. **Shadow Reduction in Ultrasound Imaging Using Differentiable Simulation and Radiance Field Decomposition** · `ArXiv`
   **做什么：** RFlash 用可微辐射场分解波束形成后的超声图像，显式估计衰减与散射强度图。
   **为什么读：** 物理约束的后处理去声影，无需原始扫描数据，避免生成模型幻觉解剖结构。
   [阅读论文](http://arxiv.org/abs/2609.29373v1)

5. **Physics-Guided Multi-Objective Deep Learning for Ultrasound RF Data Interpolation in Resource-Constrained Imaging** · `ArXiv`
   **做什么：** 物理引导的端到端网络将稀疏 RF 数据插值为稠密数据，对齐下游波束形成成像。
   **为什么读：** 面向掌上/可穿戴超声的稀疏采集，混合监督缓解栅瓣伪影，提升对比分辨率。
   [阅读论文](http://arxiv.org/abs/2609.28775v1)
