# 今日论文精读 · 2026-09-02

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声相关工作。

1. **Expert-like Bone Ultrasound Segmentation through Expert-in-the-loop Mask-conditioned Progressive Learning** · `ArXiv`
   **做什么：** 提出ExiL，用符号距离场模拟专家笔刷渐进标注，训练轻量U-Net完成超声骨骼分割，部署中可在线适应专家行为。
   **为什么读：** 直接针对超声标注瓶颈，7.8M参数轻量模型，专家在环持续适应，对跨设备临床应用有实际价值。
   [阅读论文](http://arxiv.org/abs/2609.00473v1)

2. **UI-VISA: U-Net Initialized Vascular Image Segmentation Architecture** · `ArXiv`
   **做什么：** 混合U-Net与区域生长，以U-Net输出初始化种子点，增强细长血管分割的连续性与拓扑保持。
   **为什么读：** 针对血管结构易断裂的核心痛点，结合学习与经典算法优势，计算开销可控。
   [阅读论文](http://arxiv.org/abs/2609.01598v1)

3. **Can LLMs Discover Scientific Laws in Real and Parallel Worlds?** · `ArXiv`
   **做什么：** 构建SCILAWS-BENCH科学定律发现基准，用真实已发表数据检验LLM能否真正发现规律，含42页分析。
   **为什么读：** 直面LLM记忆污染的评测缺陷，提供真实数据基准，对AI for Science方向影响明确。
   [阅读论文](http://arxiv.org/abs/2609.01552v1)

4. **Beyond Scores: Understanding LLM-as-a-Judge Mechanisms in Summarization Evaluation** · `EMNLP 2026 Main Conference`
   **做什么：** 用八类扰动、因果追踪、logit-lens与注意力头消融，机械化解析Themis和Prometheus的摘要评分内部机制。
   **为什么读：** EMNLP 2026主会录用；揭示LLM评判者黑箱内部运作，对评估可靠性与训练信号设计意义重大。
   [阅读论文](http://arxiv.org/abs/2609.01604v1)

5. **Knowledge Distillation During Mid-Training Favors Reasoning over Factual Recall** · `ArXiv`
   **做什么：** 受控实验发现KL前向蒸馏在中期训练阶段提升推理却拖慢事实回忆获取，与预训练阶段行为相反。
   **为什么读：** Facebook开源代码，揭示蒸馏阶段依赖效应，对训练策略选择提供可操作指导。
   [阅读论文](http://arxiv.org/abs/2609.01532v1)
