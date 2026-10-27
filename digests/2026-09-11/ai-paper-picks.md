# 今日论文精读 · 2026-09-11

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **UBone3D: Physics-Rectified Conditional Flow Matching for Anatomical 3D Shape Completion from Ultrasound** · `ECCV`
   **做什么：** 超声点云补全：用物理代理建模伪影并以条件流匹配重建完整骨骼解剖结构
   **为什么读：** ECCV 2026 接收；测试时物理校正直指超声伪影域偏移，属超声三维重建稀缺方向
   [阅读论文](http://arxiv.org/abs/2609.11506v1)

2. **Logit Refiner: Improving Visual Autoregressive Models via Intra-Scale Dependency Modeling** · `ECCV`
   **做什么：** 诊断VAR并行解码丢失同尺度空间依赖，用轻量自回归模块顺序采样恢复
   **为什么读：** ECCV 2026；仅增约10%参数、低于5%训练算力即可插入任意预训练VAR
   [阅读论文](http://arxiv.org/abs/2609.11804v1)

3. **The widening evaluation gap in medical large language model research 2023 to 2026** · `ArXiv`
   **做什么：** 分析PubMed 11628篇医学LLM研究，量化评估滞后与模型迭代脱节
   **为什么读：** 仅2.5%采用随机对照或前瞻设计，实证揭示临床证据缺口，具政策参考价值
   [阅读论文](http://arxiv.org/abs/2609.11770v1)

4. **Target leakage, not model class, explains reported accuracy in survey-based cardiovascular screening: a leakage-tiered audit of glass-box and tabular foundation models** · `ArXiv`
   **做什么：** 按泄漏风险分层审计442067人问卷心血管筛查模型，暴露目标泄漏问题
   **为什么读：** 覆盖多种模型类与公平性校准审查，为医学表格模型评估方法学提供警示
   [阅读论文](http://arxiv.org/abs/2609.11838v1)

5. **General Quantification of Covariate and Concept Shifts** · `ArXiv`
   **做什么：** 用熵最优传输定义γ*-概念偏移，给出统一协变量与概念偏移误差界及估计量
   **为什么读：** ICML 2026接收，突破源目标支撑不匹配时概念偏移定义失效的理论局限
   [阅读论文](http://arxiv.org/abs/2609.11918v1)
