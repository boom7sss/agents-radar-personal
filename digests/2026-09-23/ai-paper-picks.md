# 今日论文精读 · 2026-09-23

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **FleXray: Universal Clinical X-ray Segmentation** · `ArXiv`
   **做什么：** 通用 X 射线全身解剖分割模型，用可扩展流程替代大规模人工标注数据。
   **为什么读：** 覆盖全身多解剖区域的通用分割，提供代码、模型、数据与浏览器演示，可复现性强。
   [阅读论文](http://arxiv.org/abs/2609.26756v1)

2. **Foundation model embeddings capture pre-diagnostic changes on screening mammograms** · `ArXiv`
   **做什么：** 在 1773 例活检女性与配对对照中，用四类 2D 基础模型嵌入追踪筛查乳腺 X 线的癌前组织变化。
   **为什么读：** 样本量明确、配对设计、同一流程比较域内与域外预训练模型，直接检验嵌入的临床预测价值。
   [阅读论文](http://arxiv.org/abs/2609.26605v1)

3. **What Makes a Good Medical Image Tokenizer? Rethinking Reconstruction and Generation in Medical Image Tokenization** · `ArXiv`
   **做什么：** 系统评估医学图像分词器，检验自然图像分词器假设在医学域是否成立。
   **为什么读：** 直击潜扩散医学生成管线的关键设计假设，医学数据样本少方差低，评测结论对下游生成与分析有直接指导。
   [阅读论文](http://arxiv.org/abs/2609.24691v1)

4. **GAD-MambaUNet: Direction-Group Mamba with Gradient-Adaptive DINOv3 Distillation for Lightweight Medical Image Segmentation** · `ArXiv`
   **做什么：** 轻量医学分割网络，用方向组图选择性扫描与梯度自适应 DINOv3 蒸馏补齐上下文建模。
   **为什么读：** 面向紧凑网络的算力受限场景，结合状态空间建模与训练期基础模型监督，方向契合端侧医学分割。
   [阅读论文](http://arxiv.org/abs/2609.26729v1)

5. **ROAM-ASD: Robust Open-World Active Speaker Detection with Flexible Multimodal Fusion** · `ArXiv`
   **做什么：** 统一联合自注意力融合音频、全脸与嘴部表征，模态 dropout 提升缺失模态鲁棒性。
   **为什么读：** 在五个活跃说话人检测基准上报告最优结果并显式处理模态缺失，面向开放域多模态鲁棒性。
   [阅读论文](http://arxiv.org/abs/2609.26648v1)
