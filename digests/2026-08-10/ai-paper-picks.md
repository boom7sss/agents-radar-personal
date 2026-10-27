# 今日论文精读 · 2026-08-10

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并尽量均衡覆盖。

1. **Same Attention, Different Truths: Put Logit-Lens over Visual Attention to Detect and Mitigate LVLM Object Hallucination** · `CVPR`
   **做什么：** 发现真实与幻觉物体同样受LVLM强关注，用Logit Lens解码视觉特征以检测并缓解幻觉。
   **为什么读：** CVPR 2026 Highlight，直击多模态大模型幻觉机制，提供可操作的检测与缓解方案。
   [阅读论文](http://arxiv.org/abs/2608.07302v1)

2. **RayletDF: Raylet Distance Fields for Generalizable 3D Surface Reconstruction from Point Clouds or Gaussians** · `ICCV`
   **做什么：** 提出raylet距离场，从点云或3D高斯中单前馈重建表面，跨数据集无需微调即可泛化。
   **为什么读：** ICCV 2025 Highlight，绕开坐标网络逐点建场，为通用3D表面重建提供新范式。
   [阅读论文](https://iccv.thecvf.com/virtual/2025/awards_detail)

3. **Fisher-R1: Training LLM Agents for Reliable Hypothesis Testing** · `ArXiv`
   **做什么：** 构建P-Bench评估LLM代理统计检验有效性，暴露其分析代码正确但p值不成立的推理错误。
   **为什么读：** 首个关注假设检验统计有效性的LLM基准，对自动化科学分析的可信度有直接影响。
   [阅读论文](http://arxiv.org/abs/2608.07437v1)

4. **EliSeg: Verified Target Construction for Report-Grounded Abnormality Segmentation** · `ArXiv`
   **做什么：** 无需目标提示或空间先验，直接从原始影像报告中判定异常并完成分割，消除隐藏目标oracle。
   **为什么读：** 解决报告驱动分割的目标歧义与多异常对应问题，方向对医学影像AI实际落地重要。
   [阅读论文](http://arxiv.org/abs/2608.07299v1)

5. **Generalizable Slum Detection from Satellite Imagery with Mixture-of-Experts** · `AAAI`
   **做什么：** 用混合专家模型从卫星影像中泛化检测贫民窟，应对跨区域分布偏移。
   **为什么读：** AAAI 2026 AI for Social Impact最佳论文，官方高信号且社会影响明确。
   [阅读论文](https://aaai.org/about-aaai/aaai-awards/aaai-conference-paper-awards-and-recognition/)
