# 今日论文精读 · 2026-09-09

> 候选来自最新 ArXiv 投稿与 CVPR、NeurIPS、ICCV、ECCV、AAAI、MICCAI 官方高信号页面；重点关注视觉、医学影像、多模态和大模型，并柔性加权颈动脉超声相关工作。

1. **PIC: Revisiting INR for Image Coding with Fast Encoding and Sub-Millisecond Decoding** · `ECCV`
   **做什么：** 提出前馈INR图像编码架构PIC，单次前向完成编码，20 FPS编码与2000 FPS解码。
   **为什么读：** ECCV 2026录用，给出20 FPS编码与2000 FPS解码的实测速度证据，代码开源，实际部署价值明确。
   [阅读论文](http://arxiv.org/abs/2609.09020v1)

2. **Canonical Color as a Lens into Concept Decodability in Vision Encoders and VLMs** · `EMNLP`
   **做什么：** 以规范色为探针，研究视觉编码器从灰度图线性解码概念信息的能力及其与物体身份的关系。
   **为什么读：** EMNLP 2026录用，设计受控实验揭示编码器中概念性与视觉性信息的表征差异，方法新颖可复现。
   [阅读论文](http://arxiv.org/abs/2609.09124v1)

3. **"World Knowledge" in the Weights: Reading Concept Circuits of Vision Transformers** · `ECCV`
   **做什么：** 用跨层转码器从ViT权重中读取概念电路，分别构建输入不变的全局电路与输入相关的实例电路。
   **为什么读：** ECCV 2026录用，直接从权重中揭示可复用的世界知识结构，与近期电路分析工作形成方法级创新。
   [阅读论文](http://arxiv.org/abs/2609.09055v1)

4. **ReCite: Agentic Reasoning for Faithful Citation** · `EMNLP`
   **做什么：** 提出从相似性检索转向声明级主动推理的智能体引用推荐框架，应对真实文献的错误归属问题。
   **为什么读：** EMNLP 2026 Findings录用，针对引用误归属的实际缺陷提供新范式，页面已公开，验证充分。
   [阅读论文](http://arxiv.org/abs/2609.09156v1)

5. **It's Not RoPE that Creates Sinks: The Role of Self-Concentration and Value-Non-Mixing in Attention** · `EMNLP`
   **做什么：** 实验表明注意力汇与大规模激活源于因果掩码导致的注意力自集中及Value未混合，而非RoPE。
   **为什么读：** EMNLP 2026录用，纠正关于注意力汇成因的流行假设，对低比特量化策略有直接指导意义。
   [阅读论文](http://arxiv.org/abs/2609.09085v1)
