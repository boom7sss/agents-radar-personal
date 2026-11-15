# 今日论文精读 · 2026-11-15

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Domain adaptation of a video Foundation model for Heart Failure Diagnosis from Echocardiography** · `ArXiv`
   **做什么：** 针对心尖四腔视频，用TimeSformer时序基础模型微调，实现HFrEF诊断，并按相位分段，融合收缩期与舒张期信息
   **为什么读：** 摘要显示该方法在公开RVENet A4C数据集上完成了微调验证，属于超声视频诊断，已获EMBC 2026接收
   [阅读论文](http://arxiv.org/abs/2611.13297v1)

2. **One Block Is Enough: LoopMR for Accelerated MRI Reconstruction** · `ArXiv`
   **做什么：** 在展开网络中跨级共享单块LoopMR，重建加速MRI，以减少参数并探讨权重共享
   **为什么读：** 公开代码，并与PromptMR+等展开模型对比；这是重建逆问题方法，但尚无超声验证
   [阅读论文](http://arxiv.org/abs/2611.14947v1)

3. **FLEX-LBP: Learning Local Binary Patterns with Exact Binary Inference for Texture Classification** · `ArXiv`
   **做什么：** 通过反向传播学习LBP半径、角度与阈值，前向传播仍输出精确二值码
   **为什么读：** 仅90个可学习参数，推理成本不变，并提供代码；可用于纹理描述，但尚无超声验证
   [阅读论文](http://arxiv.org/abs/2611.17302v1)
