# 今日论文精读 · 2026-08-13

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并尽量均衡覆盖。

1. **Context Blindness in DPO: Mitigating Object Hallucination in MLLMs via Context-Calibrated Preference Optimization** · `ECCV`
   **做什么：** 揭示DPO偏好优化存在上下文盲区，提出CPG度量与上下文校准偏好优化，缓解MLLM对象幻觉。
   **为什么读：** 直接针对多模态大模型幻觉问题，方法可落地，ACCEPTED ECCV2026，对偏好优化有启发。
   [阅读论文](http://arxiv.org/abs/2608.12158v1)

2. **Tiling artifacts and trade-offs of feature normalization in the segmentation of large biological images** · `ICCV`
   **做什么：** 系统分析大图像分割中平铺伪影的根源，发现来自归一化层，提出BatchRenorm消除伪影并提升迁移。
   **为什么读：** 解决医学/生物图像滑动窗口推理的普遍痛点，ICCV 2025 Highlight，实践价值高。
   [阅读论文](https://iccv.thecvf.com/virtual/2025/awards_detail)

3. **GeoFlow: Efficient Driving Video Generation via Geometry-Aligned Priors** · `ECCV`
   **做什么：** 提出用几何对齐先验替代高斯噪声初始化，加速驾驶视频生成的扩散/流匹配模型，降低推理延迟。
   **为什么读：** 针对驾驶视频生成效率瓶颈，ECCV 2026，思路新颖且实验验证。
   [阅读论文](http://arxiv.org/abs/2608.12203v1)

4. **Who Thinks Best Depends on How Long You Let Them: Budget-Dependent Rankings in LLM Evaluation** · `ArXiv`
   **做什么：** 系统研究LLM评估中推理预算对排名的影响，发现预算变化导致模型排名反转，并给出校准建议。
   **为什么读：** 对大模型评测方法论有直接冲击，56K推理的实证规模，结果可复现。
   [阅读论文](http://arxiv.org/abs/2608.12150v1)

5. **Concept Arithmetics for Circumventing Concept Inhibition in Diffusion Models** · `ECCV`
   **做什么：** 发现概念算术可绕过扩散模型中的概念抑制机制，暴露安全防护漏洞，并提出规避分析。
   **为什么读：** 关乎生成模型安全与版权防护，ECCV 2024 Award Candidate，影响明确。
   [阅读论文](https://eccv.ecva.net/Conferences/2024/Awards)
