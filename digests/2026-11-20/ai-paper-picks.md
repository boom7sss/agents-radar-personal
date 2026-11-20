# 超声课题精读 · 2026-11-20

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **Denoising Plane Wave Ultrasound Images Using Diffusion Probabilistic Models.** · `IEEE transactions on ultrasonics, ferroelectrics, and frequency control · 2024`
   **做什么：** 用DDPM把低/高角度复合平面波差异当作噪声，仅用400幅仿真图训练，在仿真、体模和活体上评估。
   **为什么读：** 可借鉴它按解剖形状生成强度图以适配不同组织形态，并核查其真实采集验证是否充分，避免把视觉平滑当作临床收益。
   [阅读论文](https://doi.org/10.1109/tuffc.2024.3448209)

2. **Exploring Efficient Asymmetric Blind-Spots for Self-Supervised Denoising in Real-World Scenarios** · `CVPR · 2024 · 方法借鉴（未在超声验证）`
   **做什么：** AT-BSN通过可调盲点尺寸实现真实场景自监督去噪；该研究针对自然图像，未采用逐区域学习到的自适应掩码。
   **为什么读：** 可迁移得假设：在超声自监督去噪中比较固定盲点半径与局部自适应半径，并分别量化噪声泄漏和边缘损伤；迁移的关键前提是盲点假设在散斑相关噪声下仍需验证。
   [阅读论文](https://openaccess.thecvf.com/content/CVPR2024/html/Chen_Exploring_Efficient_Asymmetric_Blind-Spots_for_Self-Supervised_Denoising_in_Real-World_Scenarios_CVPR_2024_paper.html)
