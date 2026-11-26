# 超声课题精读 · 2026-11-26

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **SGF-RWKV: Semantic-Guided and Frequency-Enhanced RWKV for Unified Medical Image Denoising.** · `IEEE journal of biomedical and health informatics · 2026`
   **做什么：** 提出SGF-RWKV统一去噪框架：CLIP语义引导生成任务感知注意力，Fourier幅度建模增强结构边缘，多尺度移位扩展空间上下文，在多模态医学图像上验证。
   **为什么读：** 频域增强与语义引导的注意力可在超声去噪中借鉴；但多模态数据含合成噪声，真实超声与下游质评证据不足。
   [阅读论文](https://doi.org/10.1109/jbhi.2026.3739849)

2. **Flow Matching for Generative Modeling** · `ICLR · 2023 · 方法借鉴（未在超声验证）`
   **做什么：** 用条件概率路径的向量场回归训练连续归一化流，验证集中于生成建模，未涉及图像修复任务。
   **为什么读：** 可迁移的是条件扩散基线对照以隔离路径与回归目标影响；超声去噪效果未验证，迁移需自行做受控实验。
   [阅读论文](https://openreview.net/forum?id=PqvMRDCJT9t)
