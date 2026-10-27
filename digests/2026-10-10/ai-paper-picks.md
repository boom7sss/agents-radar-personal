# 今日论文精读 · 2026-10-10

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **OmniCapBench: A Deep-Structured Evaluation Framework for Fine-Grained Audio-Visual Captioning** · `NeurIPS`
   **做什么：** 面向音视频细粒度描述，将预测目标改为原子化可验证命题集合，配套深度结构化诊断评测
   **为什么读：** NeurIPS 2026 接收并开源代码与基准，解决整体分数无定位、局部探针无覆盖的评测困境
   [阅读论文](http://arxiv.org/abs/2610.12458v1)

2. **HRIL: Learning Multimodal Synergy via Higher-Order Tensor Modeling** · `NeurIPS`
   **做什么：** 用高阶张量建模跨模态高阶统计依赖，保留仅在联合配置中出现的协同信息
   **为什么读：** NeurIPS 2026 接收；点出共享信息与协同信息的区别，多模态表征学习的新视角
   [阅读论文](http://arxiv.org/abs/2610.12393v1)

3. **WOVEN: Weaving Visual World Modeling into Multimodal LLMs** · `ArXiv`
   **做什么：** 将视觉转移推理作为共享训练原语，按场景/动作/推理操作组织监督以提升MLLM时空物理推理
   **为什么读：** 构建训练源与基准支持受控对比，指向MLLM在空间、具身、物理推理上的共同缺陷
   [阅读论文](http://arxiv.org/abs/2610.12417v1)

4. **FastBench: Can Streaming VLMs Perceive High-Dynamic Real-World Streams?** · `ArXiv`
   **做什么：** 评测流式VLM在高动态真实视频流中的感知，用高帧率片段与轨迹校验构建QA
   **为什么读：** 306条QA覆盖八域六能力，暴露1–2 FPS稀疏采样漏检快事件的问题
   [阅读论文](http://arxiv.org/abs/2610.12427v1)
