# 今日论文精读 · 2026-10-28

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **When Should We Intervene at Test Time?** · `ArXiv`
   **做什么：** 提出PORTAL控制器，决定是否执行测试时干预、标注哪些输入、何时停止。
   **为什么读：** 针对干预可能伤及某些批次的问题，超越平均精度盲区，方法具部署价值。
   [阅读论文](http://arxiv.org/abs/2610.37658v1)

2. **Understanding the limits of latent world models** · `ArXiv`
   **做什么：** 提出潜空间展开一致性LRC指标，衡量学习到的潜动力学是否符合环境转移等变。
   **为什么读：** 对多个先进潜世界模型评估后发现无一满足该忠实性条件，对世界模型评估有警示价值。
   [阅读论文](http://arxiv.org/abs/2610.37588v1)

3. **The Structure Gap: When More Data Cannot Replace Structured Reasoning** · `ArXiv`
   **做什么：** 定义结构编码问题与结构鸿沟，分析有限数据下识别、外推与认证的局限。
   **为什么读：** 对“更多数据即可替代显式领域知识”的普遍信念给出理论性反例分析。
   [阅读论文](http://arxiv.org/abs/2610.37523v1)

4. **Can Discrete Tokens Serve as Semantically Lossless Representations of Visual Signals?** · `ArXiv`
   **做什么：** 以多模态理解为代理，重新审视量化误差与离散视觉token语义保真度的关系。
   **为什么读：** 发现量化误差不可靠、有效比特预算更关键，挑战连续表示天然更优的假设。
   [阅读论文](http://arxiv.org/abs/2610.37662v1)

5. **Longitudinal retinal imaging and auxiliary tasks for discrete-time survival prediction of referable diabetic retinopathy and maculopathy: a retrospective cohort study** · `ArXiv`
   **做什么：** 用时序离散生存模型结合多次随访视网膜图像与辅助任务，预测糖网/黄斑病变进展。
   **为什么读：** 大型筛查队列（开发7万余眼、测试近1.8万眼）回顾性验证，具临床预后价值。
   [阅读论文](http://arxiv.org/abs/2610.37544v1)
