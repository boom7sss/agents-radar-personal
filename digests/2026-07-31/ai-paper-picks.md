# 今日论文精读 · 2026-07-31

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并尽量均衡覆盖。

1. **ReToken: One Token to Improve Vision-Language Models for Visual Retrieval** · `ArXiv`
   **做什么：** 用单个可学习检索token从视觉KV缓存选出查询相关令牌，缓解长视觉上下文性能退化与显存压力。
   **为什么读：** 在多个图像/视频基准上大幅提升Qwen等VLM性能，代码开源，训练数据小，易于复现应用。
   [阅读论文](http://arxiv.org/abs/2607.28627v1)

2. **Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B** · `ArXiv`
   **做什么：** 在相同token预算下比较自我反思与重复采样，发现简单重复采样在1.5B–7B模型上更强。
   **为什么读：** 对LLM自我修正方法提出严格重估，方法论严谨，改变推理增强技术的评价方式。
   [阅读论文](http://arxiv.org/abs/2607.28576v1)

3. **Chimera: Designing and Chinchilla-Scaling Hybrid Visual Diffusion Transformers** · `ArXiv`
   **做什么：** 设计混合视觉扩散Transformer，用线性注意力、全局交互与MoE支持高分辨率长视频生成，并给出scaling法则。
   **为什么读：** 面向生成式视觉大模型的可扩展架构，与Chinchilla缩放结合，可能是下一代扩散骨干。
   [阅读论文](http://arxiv.org/abs/2607.28611v1)
