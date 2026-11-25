# 超声课题精读 · 2026-11-25

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **LDM-Echo: A Latent Diffusion Model for Echocardiographic Image Denoising with Clinical Evaluation.** · `Journal of imaging informatics in medicine · 2026`
   **做什么：** 用潜空间扩散模型对超声心动图去散斑，以MSE+SSIM+LPIPS混合损失训练；在CAMUS数据集及多档退化强度上评估，并纳入临床评价。
   **为什么读：** 兼顾结构保真与感知质量，并以医生评价验证，有助于选择去散斑后的质评方式；需注意评测是否含真实噪声，不可将视觉平滑或指标提升当作临床收益。
   [阅读论文](https://doi.org/10.1007/s10278-026-02168-8)
