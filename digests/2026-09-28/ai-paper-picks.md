# 今日论文精读 · 2026-09-28

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Towards Whole-Study Screening for Congenital Heart Disease in Fetal Ultrasound Using Multiple Instance Learning** · `ArXiv`
   **做什么：** 胎儿超声整体检查级先心病筛查，自监督MAE预训练后检索心脏帧并做多实例聚合
   **为什么读：** 去掉"已挑好关键帧"假设，贴近真实筛查流程，价值在流程级重构
   [阅读论文](http://arxiv.org/abs/2609.31376v1)

2. **UltraG-Bench: A Multi-task Benchmark for assessing Large Vision-Language Models on Pixel-level Evidence Grounding in Ultrasound** · `ArXiv`
   **做什么：** 整合40个公开超声分割集、13类解剖，评测VLM像素级证据定位
   **为什么读：** 超声VLM细粒度grounding此前缺标尺，可复现评测资产价值高
   [阅读论文](http://arxiv.org/abs/2609.30928v1)

3. **MBFormer: Microbubble Transformer for 3D Time-Series Da-ta Processing to Improve Bound Bubble Detection in Nonde-structive Ultrasound Molecular Imaging** · `ArXiv`
   **做什么：** 无位置编码层次Transformer处理3D时空视频，区分成簇结合微泡与游离微泡
   **为什么读：** 直击超声分子成像假阳性痛点，无需破坏性成像，临床系统可用
   [阅读论文](http://arxiv.org/abs/2609.30618v1)

4. **Trust Guided Decision Transformer** · `NeurIPS`
   **做什么：** 用下一状态预测误差加分裂保形校准，筛选上下文后再做价值引导
   **为什么读：** 把长程rollout分布漂移变为可校准信号，NeurIPS 2026接收
   [阅读论文](http://arxiv.org/abs/2609.31586v1)

5. **Online Learning via Learned Latent Bayesian Tracking** · `NeurIPS`
   **做什么：** 学习低维潜动力系统，使贝叶斯滤波可扩展到深度模型在线学习
   **为什么读：** 指出瓶颈为缺合适低维动力学表示，NeurIPS 2026接收
   [阅读论文](http://arxiv.org/abs/2609.31559v1)
