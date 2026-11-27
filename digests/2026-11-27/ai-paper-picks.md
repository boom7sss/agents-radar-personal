# 超声课题精读 · 2026-11-27

> 从近几年已发表的期刊和会议论文中择优，重点关注超声去噪、去散斑和去噪质评。

1. **A Detail-Preserving Ultrasound Speckle Reduction Method Based on Complementary Information.** · `Ultrasound in medicine & biology · 2025`
   **做什么：** 提出稀疏与二阶Hessian正则(SASH)，以组织结构连续性和方向一致性为物理先验，在重建中联合抑斑与保细节。
   **为什么读：** Hessian方向先验可迁移为去噪网络的保结构约束；但需确认其验证用的是体模、合成散斑还是真实采集。
   [阅读论文](https://doi.org/10.1016/j.ultrasmedbio.2025.08.028)

2. **De-speckling of medical ultrasound image using metric-optimized knowledge distillation.** · `Scientific reports · 2025`
   **做什么：** MK用知识蒸馏将教师网络能力迁移到小模型，并把评价指标反复计算后纳入损失，以任务指标引导抑斑训练。
   **为什么读：** 可借鉴“指标入损失”的对照设计；但指标进入损失后，同指标评估存在偏乐观风险，需独立真实数据或无参考质评验证。
   [阅读论文](https://doi.org/10.1038/s41598-025-07115-1)
