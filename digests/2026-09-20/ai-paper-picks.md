# 今日论文精读 · 2026-09-20

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **STUNet-Fusion: Spatiotemporal Needle-Tip Localization in Ultrasound Video via Multi-Channel Motion Fusion** · `ArXiv`
   **做什么：** 融合灰度、网格运动与帧差三通道，ConvLSTM+U-Net 回归针尖热图。
   **为什么读：** 针对针尖弱/不可见等真实超声难题，视频级时空建模。
   [阅读论文](http://arxiv.org/abs/2609.18546v1)

2. **Evolving Error States: Failure-Aware Progressive Repair for Ultrasound Lesion Segmentation** · `ArXiv`
   **做什么：** 将分割掩膜建模为动态失败状态，渐进修复超声病灶分割错误。
   **为什么读：** 关注高均值精度掩盖的临床关键错误，思路具通用性。
   [阅读论文](http://arxiv.org/abs/2609.18256v1)

3. **AlignUS: MRI-Guided Ultrasound Representation Learning for ALS Classification from Tongue Images** · `ArXiv`
   **做什么：** 跨模态蒸馏将 MRI 解剖知识迁入舌部超声分类器，推理仅需超声。
   **为什么读：** 面向低资源 ALS 评估，用可携带超声替代 MRI，具临床价值。
   [阅读论文](http://arxiv.org/abs/2609.15285v1)

4. **Concept-Grounded Reasoning with Prompt-Driven Localization for Interpretable Structured Report Generation** · `ArXiv`
   **做什么：** CORAL 将空间定位与概念级监督融入统一推理，生成可解释报告。
   **为什么读：** 针对超声/X 光结构化报告，强调临床中间属性建模与可解释。
   [阅读论文](http://arxiv.org/abs/2609.15334v1)
