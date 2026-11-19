# 超声课题精读 · 2026-11-19

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **Speckle Denoising of Dynamic Contrast- Enhanced Ultrasound Using Low-Rank Tensor Decomposition.** · `IEEE transactions on medical imaging · 2025`
   **做什么：** 对4D DCEUS做低秩张量分解去散斑；在log域假设噪声服从Fisher-Tippett分布；需核实其验证数据与定量下游分析。
   **为什么读：** 用张量低秩建模真实散斑分布与4D数据结构，可借鉴到时空去噪对照；局限在DCEUS特定模态与log域假设。
   [阅读论文](https://doi.org/10.1109/tmi.2025.3551660)

2. **Next-Scale Prediction: A Self-Supervised Approach for Real-World Image Denoising** · `CVPR · 2026 · 方法借鉴（未在超声验证）`
   **做什么：** 用跨尺度自监督配对降低相关噪声，并保留高分辨率预测目标。
   **为什么读：** 可迁移模块是跨尺度监督加高分辨率目标；原证据在自然图像；超声需先验证能否保解剖边界，以及信号相关散斑下是否漏噪声。
   [阅读论文](https://openaccess.thecvf.com/content/CVPR2026/html/Shan_Next-Scale_Prediction_A_Self-Supervised_Approach_for_Real-World_Image_Denoising_CVPR_2026_paper.html)
