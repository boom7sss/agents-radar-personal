# 今日论文精读 · 2026-11-03

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Every Pixel Is an Option: A System One Model for Medical Ultrasound Biometry** · `ArXiv`
   **做什么：** 超声生物测量用视觉语言模型逐像素定位标志点，显式建模空间似然以缓解定位歧义。
   **为什么读：** 针对标尺放置的观察者间变异，方法直指临床量化测量；摘要未给出验证数据与代码。
   [阅读论文](http://arxiv.org/abs/2611.03360v1)

2. **TPG-INR: Target Prior-Guided Implicit 3D CT Reconstruction for Enhanced Sparse-view Imaging** · `ICCV`
   **做什么：** 用投影数据导出的目标先验引导隐式三维CT重建，稀疏视角下提升采样效率与质量。
   **为什么读：** ICCV 2025 Highlight；报告较NAF快十倍，10/20/30视角PSNR提升3.57/5.42/5.70 dB。
   [阅读论文](https://iccv.thecvf.com/virtual/2025/awards_detail)

3. **CounterPC: Counterfactual Feature Realignment for Unsupervised Domain Adaptation on Point Clouds** · `ICCV`
   **做什么：** 在因果潜空间用反事实干预解耦域不变语义与几何混杂，做点云无监督域适配。
   **为什么读：** ICCV 2025 Highlight；PointDA/GraspNetPC-10精度提升4.7与3.6，代码与权重将公开。
   [阅读论文](https://iccv.thecvf.com/virtual/2025/awards_detail)

4. **3D-BBDA: Backpropagation-Free Black-Box Domain Adaptation for Robust 3D Point Cloud Recognition** · `ArXiv`
   **做什么：** 仅用黑盒输出对无标签目标域做伪标签原型适配，无需源数据或源模型内部参数。
   **为什么读：** 面向传感器与环境变化域偏移，适合隐私受限跨设备部署；仅摘要级证据，WACV 2027接收。
   [阅读论文](http://arxiv.org/abs/2611.03588v1)
