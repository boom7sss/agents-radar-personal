# 今日论文精读 · 2026-08-30

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声相关工作。

1. **UltraPIPS: Improving model perception in B-mode ultrasound with foundation models** · `MICCAI`
   **做什么：** 提出用超声领域基础模型替代自然图像骨干，计算B模式超声图像的感知相似度LPIPS。
   **为什么读：** MICCAI ASMUS 2026录用，指出超声斑纹特性使通用骨干失效，有跨任务验证。
   [阅读论文](http://arxiv.org/abs/2608.26033v1)

2. **Retrieval Heads Meet Vision: Uncovering How VLMs Locate and Extract Visual Information** · `ArXiv`
   **做什么：** 发现VLM中约1.7-2.6%的注意力头构成视觉检索头，因果负责文本到图像区域定位。
   **为什么读：** 首次揭示VLM视觉检索内部机制，统一设计空间下重估头部评分方法。
   [阅读论文](http://arxiv.org/abs/2608.27417v1)

3. **CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators** · `ArXiv`
   **做什么：** 跨具身动作条件视频生成框架，在互联网规模异构视频上训练通用物理模拟器。
   **为什么读：** 突破单具身限制，统一人与机器人动作表示，零样本迁移物理规律。
   [阅读论文](http://arxiv.org/abs/2608.27406v1)

4. **LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics** · `ArXiv`
   **做什么：** 首个在LeJEPA无崩溃目标下训练的视频编码器，去除EMA目标编码器等启发式设计。
   **为什么读：** SIGReg正则化提供可证明的防崩溃保证，显著降低视频预训练计算成本。
   [阅读论文](http://arxiv.org/abs/2608.27395v1)

5. **Anatomy-Guided Foundation Model Adaptation with Within-Case Prototype Supervision for Standard Plane Detection in Fetal Ultrasound Blind Sweeps** · `ArXiv`
   **做什么：** 用nnU-Net解剖先验重加权冻结的BiomedCLIP特征，检测扫查视频中胎儿腹围标准切面。
   **为什么读：** 针对阳性帧<3%的极端类别不平衡问题，结合解剖引导与原型监督的轻量方案。
   [阅读论文](http://arxiv.org/abs/2608.27051v1)
