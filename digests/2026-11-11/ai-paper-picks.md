# 今日论文精读 · 2026-11-11

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Counterfactual Analysis of Extent Leakage from Annotation-Derived Prompts in Vision-Language Medical Image Segmentation** · `ArXiv`
   **做什么：** 反事实检验文本提示泄漏：超声等数据用掩码派生尺寸词
   **为什么读：** 保留尺寸词即可复现84–98%增益，揭示基准虚高
   [阅读论文](http://arxiv.org/abs/2611.13970v1)

2. **Medical Image Segmentation: Foundation Model Adaptation versus Task-Specific Training** · `ArXiv`
   **做什么：** DINOv2多级微调对比从头U-Net，跨站点评估分割
   **为什么读：** 质疑单基线比较，考察基础模型在新临床站点表现
   [阅读论文](http://arxiv.org/abs/2611.14519v1)

3. **TorchCurves: Differentiable Parametric Curves** · `ArXiv`
   **做什么：** PyTorch库将B样条与Legendre曲线作为可学习基元
   **为什么读：** 可复现开源，适合配准、曲线拟合与连续表示重建
   [阅读论文](http://arxiv.org/abs/2611.14516v1)

4. **DnNP: Denoising Input Uncertainty in Neural Processes** · `NeurIPS`
   **做什么：** 变分推断联合去噪含噪输入并做元学习预测
   **为什么读：** NeurIPS接收并公开代码，可迁移至噪声观测建模
   [阅读论文](http://arxiv.org/abs/2611.14424v1)
