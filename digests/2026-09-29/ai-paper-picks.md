# 今日论文精读 · 2026-09-29

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Domain-adaptive Zero-Shot Image Enhancement via Locality-Constrained Diffusion Guidance** · `ArXiv`
   **做什么：** 用局部约束的扩散引导做跨域零样本图像增强，兼顾目标域真实感与源域特征保真
   **为什么读：** 发表于 Computers & Graphics 的正式接收稿，局部可控性对低质成像增强有直接价值
   [阅读论文](http://arxiv.org/abs/2609.35289v1)

2. **Style-Driven Data Synthesis and Degradation-Aware Enhancement for Ultrasound Image Restoration** · `ArXiv`
   **做什么：** 两阶段框架合成像素对齐低质-高质超声数据集，再训练退化感知增强模型
   **为什么读：** 针对掌上超声复合退化，免像素对齐配对，切中跨设备成像落差痛点
   [阅读论文](http://arxiv.org/abs/2609.35120v1)

3. **Uncertainty Quantification in Cardiac Model Personalisation from Ultrafast Ultrasound** · `MICCAI`
   **做什么：** 以仿真推断从超快超声剪切波弹性成像反演个体化心肌力学参数后验
   **为什么读：** MICCAI STACOM 2026 接收，显式处理反问题不适定性与参数不确定性
   [阅读论文](http://arxiv.org/abs/2609.35214v1)

4. **InfiniHand: Streaming World-Space Hand Motion Estimation from Egocentric Video** · `ArXiv`
   **做什么：** 端到端流式从第一视角视频联合估计手部MANO参数、相机轨迹与手部世界位置
   **为什么读：** 免标定、免SLAM级联，缓解误差累积，适合实时可穿戴交互场景
   [阅读论文](http://arxiv.org/abs/2609.35743v1)

5. **The Devil is in the Spectrum Bias: Spectrum-Balanced Feature Matching for Robust Representation Distillation** · `ArXiv`
   **做什么：** 揭示L2特征匹配偏袒主谱方向，提出谱平衡SpecMatch蒸馏目标
   **为什么读：** 分析清楚且方法简洁，对视觉基础模型压缩与端侧部署有普适价值
   [阅读论文](http://arxiv.org/abs/2609.34106v1)
