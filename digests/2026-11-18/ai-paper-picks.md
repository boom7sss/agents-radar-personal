# 超声课题精读 · 2026-11-18

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **Speckle2Self: Self-supervised ultrasound speckle reduction without clean data.** · `Medical image analysis · 2025`
   **做什么：** 仅用单张含噪超声图做自监督去斑，通过多尺度扰动构造训练目标，在真实超声散斑上验证。
   **为什么读：** 针对散斑空间相关、盲点网络失效的问题给出可复现对照设计；需核验其无参考质评与结构保真指标。
   [阅读论文](https://doi.org/10.1016/j.media.2025.103755)

2. **Multicycle Temporal Compounding Sonography for Despeckling at Specified Respiratory Phases.** · `IEEE transactions on medical imaging · 2026`
   **做什么：** 按呼吸相位做多周期时间复合去斑，结合各向异性扩散与引导滤波，在117例呼吸数据集上评估。
   **为什么读：** 真实采集验证且含边缘/斑点抑制指标；属成像采集策略，复现需相位追踪与多周期数据。
   [阅读论文](https://doi.org/10.1109/tmi.2025.3602633)
