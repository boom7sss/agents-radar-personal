# 今日论文精读 · 2026-09-21

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **When Online Adaptation Hurts: Parameter-Frozen Test-Time Ensembling for Continual Medical Image Segmentation** · `ArXiv`
   **做什么：** 医学分割跨中心域偏移下，用解剖保持的尺度/翻转视图集成，冻结权重与归一化统计
   **为什么读：** 在M&Ms心脏MRI跨厂商流上对比CTTA，指向不更新模型也能抗漂移的实用推理方案
   [阅读论文](http://arxiv.org/abs/2609.21412v1)

2. **GALA: Geometry-Aware Latent Action Modeling for Vision-Language-Action Model Pretraining across Embodiments** · `ArXiv`
   **做什么：** 跨本体VLA预训练用3D末端执行器几何运动增强隐动作建模，捕捉手指级articulation
   **为什么读：** 针对异构动作空间与灵巧手细粒度几何变化，是隐动作模型的关键补强方向
   [阅读论文](http://arxiv.org/abs/2609.21948v1)

3. **MintAct: A Unified Visual Agent for Digital Environments** · `ArXiv`
   **做什么：** 2B/4B/8B统一视觉语言模型，覆盖UI grounding、跨端多步导航与视觉工具调用
   **为什么读：** 配套异步RL基建与数百并发环境，匹配各领域专家性能，工程与规模信号明确
   [阅读论文](http://arxiv.org/abs/2609.22083v1)

4. **PRIME: Perception Feedback with Situational Memory Embeddings in VLA Models** · `ArXiv`
   **做什么：** 为自动驾驶VLA引入情境记忆反馈，使感知查询被下游推理与导航目标条件化
   **为什么读：** 打破感知-推理-规划单向前馈，聚合历史潜表征的闭环机制值得关注
   [阅读论文](http://arxiv.org/abs/2609.22040v1)

5. **Similarity Memory Prior is All You Need for Medical Image Segmentation** · `ICCV`
   **做什么：** 以相似性记忆先验网络与动态记忆权重损失注意力做医学图像分割，含双相似度增强模块
   **为什么读：** ICCV 2025 Highlight，四项公开数据集优于同期方法，代码已匿名开源
   [阅读论文](https://iccv.thecvf.com/virtual/2025/awards_detail)
