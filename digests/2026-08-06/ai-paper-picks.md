# 今日论文精读 · 2026-08-06

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并尽量均衡覆盖。

1. **OmniHuman-1: Rethinking the Scaling-Up of One-Stage Conditioned Human Animation Models** · `ICCV`
   **做什么：** 通过混合姿态、音频等条件训练，统一驱动生成逼真的全身交互人物视频。
   **为什么读：** ICCV 2025 Highlight，验证条件混合扩展路线，是少有的强交互人物视频生成基础模型。
   [阅读论文](https://iccv.thecvf.com/virtual/2025/awards_detail)

2. **Generative Multimodal Pretraining with Discrete Diffusion Timestep Tokens** · `CVPR`
   **做什么：** 将离散扩散时间步 token 作为统一目标，训练生成式多模态预训练模型。
   **为什么读：** CVPR 2025 最佳学生论文荣誉提名，提出新颖的离散扩散预训练范式，值得关注。
   [阅读论文](https://cvpr.thecvf.com/Conferences/2025/BestPapersDemos)

3. **Objects as Audio-Visual Modal Sound Fields** · `ECCV`
   **做什么：** 从多视角图像和少量撞击声重建物体级视听模态声场，表示材质与结构。
   **为什么读：** ECCV 2026 论文，结合 3DGS 与密集视觉特征，攻碰撞声建模的数据与仿真瓶颈。
   [阅读论文](http://arxiv.org/abs/2608.05145v1)

4. **Lesion Detection in CT with Frozen Self-Distilled Features: SALT, a Spatially Adaptive Label-Guided Temperature** · `ArXiv`
   **做什么：** 在自蒸馏预训练中依据弱框标签局部锐化温度，提升CT病灶检测。
   **为什么读：** 用注释区域改变自蒸馏目标而非仅增广视图，对医学影像预训练有直接价值。
   [阅读论文](http://arxiv.org/abs/2608.05100v1)

5. **Item Response Theory for AI Safety** · `ArXiv`
   **做什么：** 用项目反应理论分析8个安全基准和192个模型，得到拒答严格度等因子。
   **为什么读：** 迄今最大规模LLM安全评估心理测量分析，可指导基准去冗余和防沙袋。
   [阅读论文](http://arxiv.org/abs/2608.05086v1)
