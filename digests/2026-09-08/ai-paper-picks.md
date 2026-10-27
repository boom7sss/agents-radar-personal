# 今日论文精读 · 2026-09-08

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声相关工作。

1. **A Generalizable Feature Extractor for Alzheimer's-Related Brain MRI Tasks** · `ArXiv`
   **做什么：** 评估冻结脑龄预测3D CNN作为神经影像基础模型，配合LoRA适应下游任务。
   **为什么读：** 仅需约1%可训练参数适配多任务，验证跨数据集中泛化。
   [阅读论文](http://arxiv.org/abs/2609.05400v1)

2. **Same Trajectory, Contradictory Rewards (ROBORMBENCH): Paraphrase Fragility in Vision Language Reward Models** · `ArXiv`
   **做什么：** 构建2390条真实机器人轨迹与21673个验证释义的基准，测试VLM奖励模型释义不变性。
   **为什么读：** 展示释义可翻转成败判断，对机器人学习和VLM评估有重要影响。
   [阅读论文](http://arxiv.org/abs/2609.05401v1)

3. **CrossDepth: Geometry-Constrained Attention for Generalizable Multi-View Surround Depth Estimation** · `ArXiv`
   **做什么：** 通过相机感知射线嵌入和几何约束注意力，改善多视角环视深度估计的跨图像一致性。
   **为什么读：** 针对自动驾驶中重叠少、单目线索不一致的核心难题。
   [阅读论文](http://arxiv.org/abs/2609.05397v1)

4. **Don't Drop Dropout: Optimizing Layer Sparsity for Efficient LLM Training and Inference** · `ICML`
   **做什么：** ICML2026论文，证明层dropout应加入现代LLM训练，建立训练与推理收益的最佳实践。
   **为什么读：** 挑战主流无dropout预训练范式，提供缩放分析和训练后收益数据。
   [阅读论文](http://arxiv.org/abs/2609.05275v1)
