# 超声课题精读 · 2026-11-21

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **Mamba Based Anisotropic Diffusion Model for Speckle Noise Reduction in Ultrasound Images** · `MICCAI · 2026`
   **做什么：** Mamba 结合各向异性扩散做去散斑，在 BUSI 与 AULI 上人工加散斑验证；非真实采集噪声。
   **为什么读：** 对照实验价值：与纯扩散基线（不加 Mamba）对比消融，看扩散步数/各向异性项是否分别贡献增益；真实噪声迁移性未验证。
   [阅读论文](https://papers.miccai.org/miccai-2026/0609-Paper5381.html)

2. **Efficient Frequency Domain-Based Transformers for High-Quality Image Deblurring** · `CVPR · 2023 · 方法借鉴（未在超声验证）`
   **做什么：** 自然图像去模糊用频域注意力与频率选择；属于通用复原，非超声实验。
   **为什么读：** 可迁移模块：可学习子带门控对照空间基线，检查边缘保持与残余散斑；前提是高频不等于噪声，需超参数调。
   [阅读论文](https://openaccess.thecvf.com/content/CVPR2023/html/Kong_Efficient_Frequency_Domain-Based_Transformers_for_High-Quality_Image_Deblurring_CVPR_2023_paper.html)
