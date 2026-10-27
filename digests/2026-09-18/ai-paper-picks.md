# 今日论文精读 · 2026-09-18

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Open ultrasound foundation model for robust segmentation and clinical measurement across heterogeneous settings** · `ArXiv`
   **做什么：** 超声分割基础模型SonoBase，融合53个公开数据集与162万专家掩码，交互式跨器官跨设备分割。
   **为什么读：** 15个评测集全部超越SAM2/MedSAM2/MedSAM3，含新器官、新设备与跨地域外推验证。
   [阅读论文](http://arxiv.org/abs/2609.19230v1)

2. **Compression Hurts, Pooling Helps: Information Loss in Rayleigh-Scale Estimation from B-Mode Ultrasound** · `ArXiv`
   **做什么：** 用Fisher信息分析证明B-mode对数压缩严重损失Rayleigh尺度σ信息，池化可缓解。
   **为什么读：** 定量超声组织表征需从已压缩临床B-mode图像反推，揭示采集物理约束下的可行性边界。
   [阅读论文](http://arxiv.org/abs/2609.19525v1)

3. **Should This Case Be Adapted? Prediction Fragmentation Controls Test-Time Adaptation** · `ArXiv`
   **做什么：** 指出固定步数测试时适配的群体均值掩盖逐例伤害，提出预测碎片化控制与有害接受面积指标。
   **为什么读：** 跨厂商心脏MRI上均值ΔDice近零却58.7%病例变差，动摇既定TTA实践。
   [阅读论文](http://arxiv.org/abs/2609.20700v1)

4. **FreqDINO++: A Frequency-Guided Multi-Task Routing Vision Foundation Model for Universal Ultrasound Analysis** · `ArXiv`
   **做什么：** 频率引导多任务路由的超声视觉基础模型，联合处理病灶分割与良恶性分类，减轻重编码器微调开销。
   **为什么读：** 作者备注Accepted by TBME，针对自然图像到超声的域差共享多任务共性。
   [阅读论文](http://arxiv.org/abs/2609.20340v1)

5. **JEPA-Anything: Learning Predictive Models across Different Worlds** · `ArXiv`
   **做什么：** 基于正交预测分解的域无关世界模型框架，跨视觉、生物、临床轨迹等七个领域预测。
   **为什么读：** 把JEPA推广为通用预测学习原则，并给出跨异构系统的统一评估与开源代码。
   [阅读论文](http://arxiv.org/abs/2609.20800v1)
