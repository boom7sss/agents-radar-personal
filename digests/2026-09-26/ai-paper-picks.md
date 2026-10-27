# 今日论文精读 · 2026-09-26

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **TrackEverything: Long Horizon Dense Tracking via De-Duplicating 3D Scene Representations** · `ArXiv`
   **做什么：** 把视频表示为世界坐标下的持久3D场景轨迹，用体素去重合并滑窗边界，实现长时稠密点跟踪。
   **为什么读：** 打破稀疏长时跟踪与稠密短时跟踪的取舍，模型复杂度随唯一几何而非视频时长增长。
   [阅读论文](http://arxiv.org/abs/2609.30222v1)

2. **BiCC: Bidirectional Connected-Component Loss for Instance-Aware Segmentation** · `ArXiv`
   **做什么：** 提出双向连通分量损失，同时给标注与假阳性连通域加实例项，兼顾召回与假阳性负担。
   **为什么读：** 直击体素级损失对小病灶欠加权、blob/CC-DiceCE 忽略假阳性分量的问题，代码已开源。
   [阅读论文](http://arxiv.org/abs/2609.30223v1)

3. **A Living Benchmark for Information Retrieval from Electronic Health Records** · `ArXiv`
   **做什么：** 自动从纵向EHR笔记生成问答对，19位临床医生验证，构建可持续更新的BRIE评测集。
   **为什么读：** 面向临床助手安全与效用的可维护基准，解决人工基准昂贵且快速过时的问题。
   [阅读论文](http://arxiv.org/abs/2609.30205v1)

4. **SAGE: Mitigating Long-Horizon Reasoning Biases via Topological Guidance** · `NeurIPS`
   **做什么：** 用符号闭包分析刻画长程推理的探索偏置与累积偏置，并以拓扑引导缓解稀疏奖励下的脆弱性。
   **为什么读：** NeurIPS 2026 接收，为长程推理提供理论视角与结构性先验设计原则。
   [阅读论文](http://arxiv.org/abs/2609.30192v1)

5. **Beyond Compression: Training Latent Representations for Stable Long-Horizon Rollout in Neural Surrogate Solvers** · `ArXiv`
   **做什么：** 证明潜空间代理求解器的长程发散源于仅按重建训练，并系统比较对齐长程预测的训练干预。
   **为什么读：** 指出潜表示本身非根因，为神经代理求解器的稳定自回归推演提供可操作训练策略。
   [阅读论文](http://arxiv.org/abs/2609.30198v1)
