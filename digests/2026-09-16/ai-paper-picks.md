# 今日论文精读 · 2026-09-16

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Which Pretext Task Transfers? Self-Supervised Pretraining Objectives for Lung Ultrasound** · `ArXiv`
   **做什么：** 同一骨干与语料下对比对比学习、掩码重建与JEPA三类自监督目标，用于肺超声
   **为什么读：** 统一语料与冻结评估协议消除了既往超声SSL比较的混淆，结论可直接指导标注稀缺场景
   [阅读论文](http://arxiv.org/abs/2609.16551v1)

2. **Comparative Evaluation of Carotid Artery Hemodynamics: Patient-Specific CFD Simulations vs. 4D flow MRI** · `ArXiv`
   **做什么：** 在120例患者240条颈动脉上比较4D flow MRI与个体化CFD的速度与壁面剪切力
   **为什么读：** 大规模配对队列量化斑块表面WSS一致性，为超声/影像血流评估提供参照基线
   [阅读论文](http://arxiv.org/abs/2609.17295v1)

3. **MUMINS: Metadata-conditioned Uncertainty-aware Medical Image Next-state Synthesis** · `ArXiv`
   **做什么：** 元数据条件扩散联合建模基线影像与随访残差，单次采样给出随访影像及不确定性
   **为什么读：** 面向肿瘤生长与神经退变预测，避免多轮采样量化不确定性，患者个体化建模思路新
   [阅读论文](http://arxiv.org/abs/2609.17169v1)

4. **Where Should a Document Live: Context, Representations, or Parameters?** · `ArXiv`
   **做什么：** 在五个知识密集基准上受控比较KV缓存注入与微调参数化两类知识写入方式
   **为什么读：** 给出存储预算下的取舍证据，对RAG与长上下文系统选型有直接工程价值
   [阅读论文](http://arxiv.org/abs/2609.17346v1)

5. **Decomposition Buys Integrity, Not Yield** · `ArXiv`
   **做什么：** 用树模型刻画多智能体任务分解中信息到达根节点的比例，给出解析与数值验证
   **为什么读：** 指出分解提升的是完整性而非产出量，对多智能体架构设计有反直觉的指导意义
   [阅读论文](http://arxiv.org/abs/2609.17464v1)
