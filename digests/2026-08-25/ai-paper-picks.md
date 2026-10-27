# 今日论文精读 · 2026-08-25

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并尽量均衡覆盖。

1. **What's the Catch? Evaluating Temporal Consistency in Vision-Language Models** · `ArXiv`
   **做什么：** 将时序一致性建模为异常检测，提出TimeCatch基准测试VLM对帧序异常的敏感度
   **为什么读：** 揭示VLM时序理解与人类差距，提供受控评估范式，对视频理解具参考价值
   [阅读论文](http://arxiv.org/abs/2608.23474v1)

2. **How to Train a Critic Stably and Efficiently** · `ArXiv`
   **做什么：** 提出BPCO配方稳定训练LLM critic，替代GRPO的多采样，支持token级优势估计
   **为什么读：** 解决RLHF中critic训练不稳定的核心难题，有望大幅提升训练效率
   [阅读论文](http://arxiv.org/abs/2608.23566v1)

3. **GeoWAM: Visual Geometry World Action Models for Autonomous Driving** · `ArXiv`
   **做什么：** 以点云几何状态替代像素空间建模驾驶世界动态与自车动作，解耦外观与运动
   **为什么读：** 为驾驶世界模型提供更自然的几何状态空间，突破像素间接表达的局限
   [阅读论文](http://arxiv.org/abs/2608.23486v1)

4. **SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning** · `ICML`
   **做什么：** 让LLM反思自身轨迹生成密集token级训练信号，无需外部奖励模型
   **为什么读：** ICML 2026录用，将人类自省机制引入强化学习，解决长程推理稀疏奖励难题
   [阅读论文](http://arxiv.org/abs/2608.23493v1)
