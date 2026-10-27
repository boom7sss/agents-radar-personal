# 今日论文精读 · 2026-09-19

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Can 4D Foundation Models Remember?** · `ArXiv`
   **做什么：** 提出PersistBench，用360°视频作全知真值，以物体为中心评估4D基础模型的视觉记忆能力。
   **为什么读：** 填补现有基准缺离开视野后物体真值、仅靠像素指标的空白，为4D模型记忆力提供可对照评测。
   [阅读论文](http://arxiv.org/abs/2609.20819v1)

2. **SplashSplat: Reconstructing Splashing Liquids from Real-World Multi-View Videos** · `ArXiv`
   **做什么：** 构建20个真实飞溅液体场景的多视角4K数据集，提出引入物理结构先验的SplashSplat重建方法。
   **为什么读：** 首个同步多视角飞溅液体基准，含逐视角人工精修掩膜与固定划分，支撑高难动力学重建评测。
   [阅读论文](http://arxiv.org/abs/2609.20818v1)

3. **FlowSGS: Improving Flow Matching Priors for Inverse Imaging with Stochastic Interpolants** · `ArXiv`
   **做什么：** 用Split Gibbs Sampling把后验拆成似然步与先验步，结合随机插值将预训练流模型接入逆成像求解。
   **为什么读：** 摆脱线性前向模型与后验采样简化假设，为计算成像逆问题的流匹配先验提供更严谨的采样框架。
   [阅读论文](http://arxiv.org/abs/2609.20769v1)

4. **Multi-center Medical Data Mining with FL-Net - A One-stop Shop for Federated Learning** · `ArXiv`
   **做什么：** 提出FL-Net联邦临床研究框架，整合数据协调、发现、披露控制与容器化联邦工作流。
   **为什么读：** 基于文献五项需求分析14个联邦框架均不满足，并通过协调与跨站点实验做端到端能力验证。
   [阅读论文](http://arxiv.org/abs/2609.20650v1)

5. **ERCPMP-Gx: Endoscopic Image and Video Dataset for Morphological, Histopathological, and Genomic Characterization of Colorectal Polyposis** · `ArXiv`
   **做什么：** 发布内镜、组织病理与基因组数据集，在患者层面把息肉病表型与胚系发现关联起来。
   **为什么读：** 现有公开内镜数据集多围绕散发性单息肉，缺失患者级表型-病理-基因关联，该数据集补此空白。
   [阅读论文](http://arxiv.org/abs/2609.20815v1)
