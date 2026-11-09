# 今日论文精读 · 2026-11-09

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **ProtoCouncil: Multi-Encoder Anatomical Prototypes for Prostate Cancer Detection in Micro-Ultrasound** · `ArXiv`
   **做什么：** 微超声前列腺癌检测；融合MedSAM/DINOv3/V-JEPA原型，保证可追溯并标记不确定性
   **为什么读：** 面向域偏移与决策可解释性，采用多编码器原型融合；结论待全文验证
   [阅读论文](http://arxiv.org/abs/2611.09058v1)

2. **Smart Spectral Doppler Ultrasound Imaging using Motion Tracking based on Wide-beam transmission and Neural Networks: Preliminary Results** · `ArXiv`
   **做什么：** 频谱多普勒；宽波束单次发射获2D采样容积，神经网络跟踪运动抗呼吸/探头位移
   **为什么读：** 直击频谱增宽与信号丢失的采集物理问题；仅初步结果
   [阅读论文](http://arxiv.org/abs/2611.09002v1)

3. **An Ultra-Low-Noise Tunable TIA in 45nm Silicon Photonics for Electro-Optical Ultrasound Data Acquisition** · `ArXiv`
   **做什么：** 32通道硅光接收阵列；微环解复用与超低噪TIA服务毫米级电光超声探头
   **为什么读：** 为小型化光声/超声前端提供实测表征，涉及端侧采集硬件
   [阅读论文](http://arxiv.org/abs/2611.08826v1)

4. **AdaptivePnP: Fast Auto-Tuned Plug-and-Play for Deconvolution** · `ArXiv`
   **做什么：** 即插即用反卷积；每次迭代由残差联合估计步长与噪声水平，免网格调参
   **为什么读：** 可迁移方法，尚无超声验证；对超声逆问题重建有潜在价值
   [阅读论文](http://arxiv.org/abs/2611.09845v1)

5. **Region-aware error triage for medical image segmentation with groupwise conformal risk control** · `ArXiv`
   **做什么：** 分割后处理；按边界带与非边界区分组做保形风险控制，标出易错区域
   **为什么读：** 提供可校准的错误定位替代重绘，契合质评与审阅流程；尚无超声验证
   [阅读论文](http://arxiv.org/abs/2611.08962v1)
