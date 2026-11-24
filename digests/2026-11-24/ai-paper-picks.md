# 超声课题精读 · 2026-11-24

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **Improving shear-wave speed analysis in penile vibro-ultrasound elastography using self-supervised deep learning-based IQ denoising.** · `Ultrasonics · 2026`
   **做什么：** 3D U-Net 自监督去 IQ 噪声（Noise2Self），重建剪切波速度；在10例患者342次采集上训练，6例独立队列评估。
   **为什么读：** 可借鉴下游任务验证与分阶段质控，但仅含6例独立队列，且 IQ 域非 B 模式散斑，迁移需重设计。
   [阅读论文](https://doi.org/10.1016/j.ultras.2026.108353)

2. **A hybrid deep learning framework for real-time speckle reduction and image enhancement on portable ultrasound systems.** · `Medical physics · 2026`
   **做什么：** EdgeSRIE 将无监督去散斑与自监督去模糊分训，转为8位量化模型，在便携设备实时运行；用 BUSI/HC18 与 PICMUS 验证。
   **为什么读：** 可借鉴自监督分支分工与低资源部署；训练多为合成或体模噪声，缺少真实临床与医生评分证据。
   [阅读论文](https://doi.org/10.1002/mp.70620)
