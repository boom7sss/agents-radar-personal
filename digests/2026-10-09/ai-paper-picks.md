# 今日论文精读 · 2026-10-09

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声与因果稳健性相关工作。

1. **Neural Inverse Rendering from Propagating Light** · `CVPR`
   **做什么：** 从传播光的时间分辨测量中做神经逆向渲染，重建场景几何与材质
   **为什么读：** CVPR 2025 Best Student Paper，任务新颖且有官方最高奖项背书
   [阅读论文](https://cvpr.thecvf.com/Conferences/2025/BestPapersDemos)

2. **VersaCamVLA: Camera-Configurable VLA Policies for Robotic Manipulation** · `NeurIPS`
   **做什么：** 解耦相机集合表示与动作学习，统一场景 token 支持任意数量与位姿相机
   **为什么读：** NeurIPS 2026 接收，直接针对部署时相机变化导致的脆弱性问题
   [阅读论文](http://arxiv.org/abs/2610.12451v1)

3. **Beyond Spatio-Temporal Priors: A Generalizable Approach for Dense Correspondence Matching** · `NeurIPS`
   **做什么：** 融合生成与语义基础表征做稠密对应匹配，突破平滑运动与刚性假设
   **为什么读：** NeurIPS 2026 接收，面向图像编辑与参考引导生成的通用匹配问题
   [阅读论文](http://arxiv.org/abs/2610.12421v1)

4. **Beyond Report Imitation: Clinically Aware Multi-Image Ultrasound Report Generation from Visible Evidence** · `ArXiv`
   **做什么：** 从多图可见证据出发生成超声报告，避免诊断反转与不可验证内容
   **为什么读：** BMVC 2026 接收并开源代码，聚焦超声报告中的临床行为对齐问题
   [阅读论文](http://arxiv.org/abs/2610.11610v1)

5. **Caught in the Act: Probes Effectively Detect Sabotage and Catch Unverbalized Deception** · `ArXiv`
   **做什么：** 用跨层跨 token 聚合的白盒探针检测 LLM 欺骗，覆盖前沿监控场景
   **为什么读：** SHADE-Arena 达 98.8% AUC，超过 Opus 5.5 文本监控基线，随规模提升
   [阅读论文](http://arxiv.org/abs/2610.12445v1)
