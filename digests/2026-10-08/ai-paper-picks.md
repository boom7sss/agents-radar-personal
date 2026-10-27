# 今日论文精读 · 2026-10-08

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **UltraWorld: Learning Interactive Ultrasound World Models from Untracked Clinical Videos with Acoustic Sampling Map** · `ArXiv`
   **做什么：** 用自蒸馏把临床超声视频转为交互式世界模型，无需动作标注，引入声学采样图建模切面几何。
   **为什么读：** 面向自主超声扫描的动作-观测预测，绕开昂贵的视频-位姿配对采集，扩展性强。
   [阅读论文](http://arxiv.org/abs/2610.09785v1)

2. **Hybrid++: The Bridge between PDE Models and Deep Learning for Gamma Noise Removal** · `ArXiv`
   **做什么：** 结合 PDE 可解释性与深度网络复原力，处理 SAR 与超声中的乘性 Gamma 噪声去噪。
   **为什么读：** 针对像素相关、随位置剧变的乘性噪声，兼顾高风险医学场景所需的透明度。
   [阅读论文](http://arxiv.org/abs/2610.08892v1)

3. **MedCORE: Criteria-Grounded Clinical Reasoning for Interpretable Medical Image Diagnosis** · `ArXiv`
   **做什么：** 在视觉-语言架构中把诊断拆成临床标准，逐条空间定位并生成结构化证据推理。
   **为什么读：** 直面黑盒直接映射标签问题，提升诊断透明度，利于安全临床部署。
   [阅读论文](http://arxiv.org/abs/2610.08528v1)

4. **Rephrase Before You Act: Characterizing and Mitigating Language Sensitivity in Vision-Language-Action Models** · `ArXiv`
   **做什么：** 用单编辑实验与 oracle 短语搜索量化 VLA 指令措辞敏感，并提出重述缓解、不需改模型。
   **为什么读：** 给出最多 61 点的措辞摆动证据，短语搜索几乎弥合分布内外 21 点差距。
   [阅读论文](http://arxiv.org/abs/2610.10526v1)
