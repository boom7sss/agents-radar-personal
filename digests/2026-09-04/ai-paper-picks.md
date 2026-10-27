# 今日论文精读 · 2026-09-04

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声相关工作。

1. **Scal3R: Learning Efficient Multi-Relative Pose Query for Scalable Online 3D Reconstruction** · `ArXiv`
   **做什么：** 将在线三维重建重构为多参考相对位姿查询，用轻量token注入冻结主干。
   **为什么读：** ECCV 2026；分离局部几何与全局位姿，解决长视频重建漂移。
   [阅读论文](http://arxiv.org/abs/2609.04201v1)

2. **Puffin-World: Scaling a Unified Multimodal Model with Native 3D World States** · `ArXiv`
   **做什么：** 统一多模态架构联合建模物理、几何与外观三种原生3D世界状态。
   **为什么读：** 引入Omni-Camera统一表征并跨帧传播物理动态，支持生成重建。
   [阅读论文](http://arxiv.org/abs/2609.04196v1)

3. **The Shape of Time: Video-Token Contrast for Temporal Understanding in VideoLMs** · `ArXiv`
   **做什么：** 面向VideoLM视频token表征的时间反事实对比目标，监督事件动态。
   **为什么读：** EMNLP 2026 main；针对时间理解捷径，直接监督内部视频表征。
   [阅读论文](http://arxiv.org/abs/2609.04110v1)

4. **Sequential Beats Joint: On the Interplay between On-Policy Distillation and RLVR** · `ArXiv`
   **做什么：** 提出OPD-then-RL两阶段方案以替代OPD与RLVR的联合加权融合。
   **为什么读：** 经验证明两阶段优于纯OPD、纯RLVR及所有联合基线，含机理分析。
   [阅读论文](http://arxiv.org/abs/2609.04108v1)

5. **Why Gated DeltaNet Survives 4-Bit Quantization: NVFP4 W4A4 for the Recurrent Half of a Hybrid 27B LLM** · `ArXiv`
   **做什么：** 对含48层Gated DeltaNet的混合27B模型实现全线性层NVFP4 W4A4量化。
   **为什么读：** 多任务匹配BF16精度（5任务均值-0.52），实测推翻递归误差累积假设。
   [阅读论文](http://arxiv.org/abs/2609.04098v1)
