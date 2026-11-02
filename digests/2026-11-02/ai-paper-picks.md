# 今日论文精读 · 2026-11-02

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Cross-Device Transfer of a Hospital-Trained Fetal Head Circumference Model to a Low-Cost Handheld Ultrasound Probe** · `ArXiv`
   **做什么：** 胎儿头围分割模型迁移至1350美元掌上超声，量化跨设备精度衰减
   **为什么读：** 同次就诊18例配对扫描，域内2.34mm，掌上16.12mm恶化6.9倍
   [阅读论文](http://arxiv.org/abs/2610.40710v1)

2. **DiffUltra: Task-Guided Pathology Synthesis for Large-Scale Real-World Lung Ultrasound Data** · `ArXiv`
   **做什么：** 任务引导潜扩散合成肺超声病灶，按无回声/低回声/高回声分区条件
   **为什么读：** 针对病灶与解剖位置约束的超声数据扩增，附下游效用筛选
   [阅读论文](http://arxiv.org/abs/2610.40705v1)

3. **Quantitative Ultrasound Characterizes Perfusion Trajectories in Healthy and Inflamed Gingival Wound Healing** · `ArXiv`
   **做什么：** 定量超声血流灌注轨迹，51例纵向彩色血流联合LASCA验证
   **为什么读：** 用相位信息原始TRI数据估计速度加权色像素密度，可借鉴质控设计
   [阅读论文](http://arxiv.org/abs/2610.41897v1)

4. **Measuring What Matters: A Causal Reliance Score for Histopathology Image Segmentation** · `ArXiv`
   **做什么：** 干预式评估框架，量化分割模型对前景结构vs背景域偏移的依赖
   **为什么读：** 可迁移的因果稳健性质评思路，尚无超声验证
   [阅读论文](http://arxiv.org/abs/2610.41763v1)
