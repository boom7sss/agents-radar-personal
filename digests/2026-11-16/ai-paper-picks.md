# 今日论文精读 · 2026-11-16

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **A thorough review on Deep Learning approaches to 2D-to-3D Registration in Medical Imaging** · `ArXiv`
   **做什么：** 51页综述系统梳理2D-3D配准的深度学习框架、数据与评价体系
   **为什么读：** 大篇幅、多表格归纳，可作为术中配准与重建方法选型的参考
   [阅读论文](http://arxiv.org/abs/2611.17468v1)

2. **Restoring Diversity in Distilled Image and Video Generators by Probing Activations** · `ArXiv`
   **做什么：** 探查蒸馏扩散模型激活方向集中，定位多样性坍缩并修复
   **为什么读：** 根因分析具体到初始去噪步的中间块，可迁移至超声生成先验
   [阅读论文](http://arxiv.org/abs/2611.18550v1)

3. **On numerical issues of divergences between nearly equal distributions** · `ArXiv`
   **做什么：** 指出KL/JSD在近等分布下的舍入与抵消问题并给出稳定重写
   **为什么读：** 影响蒸馏、RL与近分布优化目标，具备明确工程价值
   [阅读论文](http://arxiv.org/abs/2611.18511v1)
