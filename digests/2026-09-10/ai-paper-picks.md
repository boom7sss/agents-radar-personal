# 今日论文精读 · 2026-09-10

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Myocardial Strain Drift Correction in Deep Learning Based Ultrasound Tracking** · `ArXiv`
   **做什么：** 在TAS-Net上加入跨滑窗持久记忆token，抑制超声心肌追踪的周期漂移，估计应变。
   **为什么读：** STACOM 2026（MICCAI卫星）接收，直击超声追踪时序漂移这一实际失效模式，方法改动小。
   [阅读论文](http://arxiv.org/abs/2609.09577v1)

2. **Layer Selection in VLMs for Zero-Shot OOD Detection via Multi-Resolution Entropy Estimation** · `ArXiv`
   **做什么：** 指出医学影像OOD检测中末层嵌入并非最优，用多分辨率熵估计选择中间层。
   **为什么读：** MICCAI Workshop 2026，针对跨机构、跨采集协议的域偏移，挑战常用末层假设。
   [阅读论文](http://arxiv.org/abs/2609.08524v1)

3. **Cross-Model Agreement as a Deployment-Time Reliability Signal for Automatic Polyp Segmentation** · `ArXiv`
   **做什么：** RBQE用独立训练裁判模型与主模型的一致性，无需标注即可在推理时检测分割失败。
   **为什么读：** 在1223张外部基准、4个公开数据集上评估，并分解裁判独立性与架构多样性两轴。
   [阅读论文](http://arxiv.org/abs/2609.10495v1)

4. **Show-Harness: Just a VLM Agent Can Play Robots** · `ArXiv`
   **做什么：** 用离散语义动作单元作接口，让VLM推理高层意图，具身解释器落地为机器人动作。
   **为什么读：** 同一接口验证闭源前沿VLM零样本机器人控制可行性，项目页已公开。
   [阅读论文](http://arxiv.org/abs/2609.10522v1)

5. **Shape-guided Gaussian Splatting for Sparse-View X-ray 3D Reconstruction** · `ArXiv`
   **做什么：** 以统计形状模型约束3D高斯原语，从少量X光投影重建密度场，降低辐射暴露。
   **为什么读：** MICCAI 2026 Off-Grid Workshop接收，针对少视图病态重建自由优化缺乏解剖先验的问题。
   [阅读论文](http://arxiv.org/abs/2609.10376v1)
