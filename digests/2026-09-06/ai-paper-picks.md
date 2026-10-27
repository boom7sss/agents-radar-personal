# 今日论文精读 · 2026-09-06

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声相关工作。

1. **Temporal Self-Distillation: Learning Visual State Tracking in Videos Without Supervision** · `ArXiv`
   **做什么：** 提出S3T，以时间采样密度为特权信息做自蒸馏，无监督训练视觉状态追踪模型
   **为什么读：** 首个无需标签的视频状态追踪自监督框架，在LLaVA-OneVision-2-8B上VSTAT提升+1.74，无推理开销
   [阅读论文](http://arxiv.org/abs/2609.04203v1)

2. **Principia: Relational Physics Tests for Video Models** · `ArXiv`
   **做什么：** 介绍Principia基准，通过成对物体的关系一致性评估视频模型的牛顿物理推理
   **为什么读：** 首个不依赖帧率、尺度与相机标定的物理推理基准，覆盖八类物理现象，提供可靠评测
   [阅读论文](http://arxiv.org/abs/2609.04200v1)

3. **One Editor, Many Edits: A Unified Training-Free Framework for Diverse Video Editing** · `ArXiv`
   **做什么：** 提出EditVid，统一支持指令与参考引导的视频编辑，结合稀疏因果记忆与token注入
   **为什么读：** FiVE上达78.16 Acc，超过最强免训练方法58.95约19个点，无需训练且支持多种编辑范式
   [阅读论文](http://arxiv.org/abs/2609.04190v1)

4. **CORE: Improving Compositional Reasoning in MLLM Embedding via Reranker Distillation** · `ArXiv`
   **做什么：** 提出CORE，用Rank-KL目标将重排器的组合判断蒸馏进MLLM嵌入模型
   **为什么读：** 针对组合检索中属性-对象绑定混淆的难题，引入五级匹配合成候选与分级评测协议
   [阅读论文](http://arxiv.org/abs/2609.04083v1)
