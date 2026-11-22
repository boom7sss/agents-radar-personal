# 超声课题精读 · 2026-11-22

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **The Contrast Order: An Order-Based Image Quality Criterion for Nonlinear Beamformers.** · `IEEE transactions on ultrasonics · 2026`
   **做什么：** 提出对比序数（CO）指标，仅依赖ROI亮度相对次序，对任何严格单调变换不变；用模拟/体模证据与gCNR等方法对照比较，针对非线性波束形成器。
   **为什么读：** 适合评估去噪/去散斑后处理：可区分真实杂波抑制与动态范围重映射造成的伪增益；注意其非无参考、需双ROI，未验证医生评分与下游诊断。
   [阅读论文](https://doi.org/10.1109/tuson.2026.3746169)

2. **Blind Restoration of High-Resolution Ultrasound Video** · `MICCAI · 2025`
   **做什么：** MICCAI 2025方法论文，面向高分辨率超声视频的盲目复原，处理未知退化；证据限于复原任务本身。
   **为什么读：** 仅作邻近阅读：可参考其盲退化建模思路；材料未给出散斑统计、无参考IQA或下游验证，不能当作去散斑/质评证据。
   [阅读论文](https://papers.miccai.org/miccai-2025/0102-Paper3415.html)
