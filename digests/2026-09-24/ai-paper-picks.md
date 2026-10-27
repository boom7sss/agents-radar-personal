# 今日论文精读 · 2026-09-24

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **nnFoundation: 3D Foundation Models for Radiology** · `ArXiv`
   **做什么：** 在2.1M例CT/MRI/PET体数据上预训练卷积与Transformer双路3D放射基础模型
   **为什么读：** 覆盖125个数据集、跨108项下游任务评估，规模与广度明确，检验域偏移鲁棒性
   [阅读论文](http://arxiv.org/abs/2609.26924v1)

2. **On the Diffusibility of High-Dimensional Latents** · `ECCV`
   **做什么：** 分析表征自编码器微调后潜空间维度收缩，指出高维流匹配需拟合正交噪声方向
   **为什么读：** ECCV 2026接收并附项目页，揭示生成建模中潜几何与生成质量的因果联系
   [阅读论文](http://arxiv.org/abs/2609.28473v1)

3. **Recursive Uncertainty-Gated Image Registration for Learning-based Algorithms** · `ArXiv`
   **做什么：** 用学习不确定性门控迭代精修形变场，仅在难配准区域集中更新
   **为什么读：** 结合传统算法鲁棒性与深度学习效率，针对域移样本的OOD配准问题给出方案
   [阅读论文](http://arxiv.org/abs/2609.28081v1)

4. **GenMC: Real-Time Generative Monte Carlo Surrogate for Quantitative Photoacoustic Imaging** · `ArXiv`
   **做什么：** 条件GAN代理蒙特卡洛光传输，从组织解剖与光学属性估计光通量分布
   **为什么读：** 针对光声定量中谱着色误差，以生成代理替代昂贵MC模拟，面向实时成像
   [阅读论文](http://arxiv.org/abs/2609.28261v1)

5. **HaRP: High Dynamic Range Photosequencing through Dual Reversed Shutter Scanning** · `ArXiv`
   **做什么：** 利用RSGR与反向RSGR双曝光扫描，兼顾动态范围平衡与HDR光序列重建
   **为什么读：** 针对CMOS卷帘快门几何畸变与动态范围压缩，提出可落地的双扫描采集方案
   [阅读论文](http://arxiv.org/abs/2609.28439v1)
