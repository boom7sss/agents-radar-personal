# 今日论文精读 · 2026-10-14

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Registration is a Representation Problem: Solving Whole-Body PET/CT Registration** · `ArXiv`
   **做什么：** 用anatomix 3D基础模型逐体素语义表征做全身PET/CT配准，替代原始强度相似度与稀疏分割标签
   **为什么读：** MICCAI Learn2Reg 2026 PSMAReg挑战赛第一名，方法可用于纵向全身对应问题
   [阅读论文](http://arxiv.org/abs/2610.18804v1)

2. **FETALFusion: Resolution-Aware State-Space Modeling for Multi-Domain Fetal Head Segmentation** · `ArXiv`
   **做什么：** 双路CNN-Mamba编解码器，在高分辨率阶段做四方向状态空间扫描分割胎儿头
   **为什么读：** 经腹与经会阴联合训练，471张留存测试图像，头围测量需逐例边界可靠
   [阅读论文](http://arxiv.org/abs/2610.17951v1)

3. **PixelMoE: Scaling Pixel-Space Diffusion with LLM-Style Mixture-of-Experts** · `ArXiv`
   **做什么：** 把标准LLM式MoE稀疏扩展用于像素空间扩散，无需扩散专用路由或辅助目标
   **为什么读：** 给出像素空间模型以稀疏专家扩展容量的可行路径，绕开tokenizer依赖
   [阅读论文](http://arxiv.org/abs/2610.18857v1)

4. **WorldRecon: Generative Multi-View Mesh Reconstruction for Large-Scale 3D World** · `ArXiv`
   **做什么：** 以粗噪声点云与相机位姿为全局脚手架，分块生成大规模场景完整网格
   **为什么读：** 面向无位姿多视图的大尺度3D世界重建，处理未观测与稀疏表面补全
   [阅读论文](http://arxiv.org/abs/2610.18846v1)

5. **LIBERO-RIG: A Hardware-Setup Robustness Benchmark for Vision-Language-Action Models** · `ArXiv`
   **做什么：** 仅扰动机器人硬件与安装，固定LIBERO任务，评估VLA策略鲁棒性
   **为什么读：** 11个扰动轴×5级严重度共210种条件，覆盖相机安装、标定、控制率与夹爪磨损
   [阅读论文](http://arxiv.org/abs/2610.18843v1)
