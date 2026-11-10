# ArXiv AI 研究日报 2026-11-10

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-10 17:53 UTC

---

# ArXiv AI 研究日报（2026-11-10）

## 今日速览

今日投稿中没有直接以“超声去噪（散斑抑制、无干净参考训练、RF/IQ/通道数据）”为核心命题的论文，与超声去噪最接近的工作集中在**超声重建与仿真**一侧：UltraVoxelGS 提出前馈式体素优先高斯泼溅，主打快速重建与物理保真渲染；Simulating Vein Compressibility 关注探针压迫下血管形变的可交互仿真。**去噪后的图像质量评价（无参考/结构保真）今日未见专门投稿**，这是本日报的重点空缺，需明确标注而非用通用方法填补。超声相关延伸方向出现两篇：超声辅助生物特征水印（对抗人脸视频深度伪造）与多项医学影像、跨模态对齐工作。泛 AI 侧的主要信号是：多教师 on-policy 蒸馏与智能体能力恢复、模态冲突下的推理时控制、以及低精度训练对“稀有事实习得”的隐性代价。

> 说明：本日报严格依据所给摘要，摘要为截断文本，故部分论文仅能描述其已明确表述的部分；凡未在超声数据上验证的通用方法，均不归入超声成果。

---

## 重点论文

### 🩺 超声去噪、重建与质量评价

1. **[UltraVoxelGS: Voxel-First Feed-Forward Gaussian Splatting for 3D Ultrasound Reconstruction](http://arxiv.org/abs/2611.11951v1)**
   Y. Wang, H. Chen, X. Guo
   核心贡献：以“体素优先 + 前馈”设计首次同时追求快速三维超声重建与物理保真渲染，目标是让二维扫查过程中获得实时空间反馈。值得关注：这是今日与超声重建最直接相关的工作，但摘要未给出量化指标或临床验证细节，结构保真与跨设备稳健性需读全文确认。

2. **[Simulating Vein Compressibility for Ultrasound-Guided Femoral Access: Speed, Accuracy, and Phantom Validation](http://arxiv.org/abs/2611.12818v1)**
   A. Manicka, L. Coulon, D. Ang 等
   核心贡献：面向机器人超声引导股动脉穿刺，仿真探针压迫导致的组织形变与血管解剖变化，并强调速度、精度与体模验证。值得关注：为“结构保真”提供可交互的物理仿真基线，体模验证是少见的真实证据；但其定位是仿真而非去噪或图像质量评价。

3. **[Ultrasound-Assisted Biometric Watermarking Against Face Video Deepfakes](http://arxiv.org/abs/2611.11800v1)**
   G. Liu, L. Wang, D. Liu 等
   核心贡献：借助超声生物特征构建水印，抵御水印篡改与私有模型伪造两类攻击，应对 AIGC 人脸视频深度伪造。值得关注：属超声在安全侧的延伸应用，涉及信号鲁棒性；与去噪/质量评价无直接关系，不宜过度关联。

*（今日无散斑抑制、自监督/无干净参考去噪、RF/IQ/通道数据与波束形成、无参考图像质量评价的专门投稿。）*

### 🧠 大语言模型（架构、训练、对齐、评估）

4. **[Reframe: Observation-Aligned Multi-Teacher On-Policy Distillation for Agentic Visual Reasoning](http://arxiv.org/abs/2611.12886v1)**
   H. Yuan, H. Li, Y. Zhang 等
   核心贡献：面向视觉智能体，用与观测对齐的多教师 on-policy 蒸馏，缓解“忽视工具返回观测”和“动作缺乏依据”两类问题。

5. **[What the Loss Curve Misses: FP4 Pretraining Slows the Acquisition of Rare Facts](http://arxiv.org/abs/2611.12832v1)**
   C. Lu, M. Zhang
   核心贡献：在受控合成传记数据上训练 Transformer，发现匹配验证损失并不等于同等高效地习得稀有事实，FP4（模拟 4-bit 矩阵乘）预训练会拖慢稀有事实获取。值得关注：直接挑战“看 loss 即可”的低精度训练评估惯例。

6. **[Is Persona Generalization Predictable?](http://arxiv.org/abs/2611.12864v1)**
   O. Mukherjee, A. Goel, A. Raghunathan 等
   核心贡献：发现人格泛化中域内与域外表现存在“on-the-line”现象，为微调引发的跨域行为变化（如涌现性失配）提供可预测性线索。

7. **[PORT: Preference Optimization via Robust Token-Level Reweighting](http://arxiv.org/abs/2611.12763v1)**
   D. Zhu, X. Wei, T. Xie 等
   核心贡献：针对噪声偏好标注，在 token 级做鲁棒重加权，提升偏好优化的抗噪能力。

8. **[KiteNorm: Variance Regularisation for Stable and Scalable Post-LN Transformers](http://arxiv.org/abs/2611.12729v1)**
   L. A. Trochelmann, S. Movahedi, S. Liu 等
   核心贡献：以方差正则改善 Post-LayerNorm Transformer 在大学习率与深层堆叠下的稳定性，回应其难以扩展的长期问题。

9. **[Beyond Modality Preference: Controlling Multimodal Arbitration under Modality Conflict in MLLMs](http://arxiv.org/abs/2611.12883v1)**
   Z. Pan, S. Lu, J. H. Wong 等
   核心贡献：多模态输入冲突时，MLLM 可能偏向并非最可靠的模态；作者提出推理时的模态仲裁控制。

### 🤖 智能体与推理

10. **[Agentic-OPD: Recovering Forgotten Agent Capabilities via On-Policy Distillation for Agentic Tasks](http://arxiv.org/abs/2611.12799v1)**
    T. Bian, K. Gong, J. Luo 等
    核心贡献：指出 GRPO 训练中“只保留最佳验证 checkpoint”是有损的——该 checkpoint 会在早期 checkpoint 能解的问题上失败，并用 on-policy 蒸馏找回被丢弃的能力。

11. **[Mitigating Agentic Deception via Evaluation-Side Partially Observable Games](http://arxiv.org/abs/2611.12835v1)**
    H. Li, S. Liu, Y. Ma 等
    核心贡献：将智能体欺骗归因于“评估侧部分可观测”（只看最终结果、不查过程忠实性），并提出评估侧的部分可观测博弈方案。

12. **[World In-Context Learning for Agentic Robot Manipulation](http://arxiv.org/abs/2611.12885v1)**
    H. Fang, Z. Guo, Y. Zhang 等
    核心贡献：用世界反馈弥补 in-context 示教的缺陷，试图让 ICL 在机器人操作上追平训练型策略。

13. **[SWAM: Scaling World Action Models with Cross-Modal Alignment](http://arxiv.org/abs/2611.12870v1)**
    Y. Zhou, X. Xia, X. Yang 等
    核心贡献：重新审视“视频预训练已提供语言—视频对齐”的默认假设，研究引入动作学习后如何用跨模态对齐扩展世界动作模型。

### 🔧 方法与框架（技术、基准、效率）

14. **[Click3R: Interactive Stereo 3D Reconstruction with Sparse Correspondence Clicks](http://arxiv.org/abs/2611.12875v1)**
    H. Gu, J. Yao, Z. Zhou
    核心贡献：针对前馈大重建模型“一次预测、不可修正”的缺陷，用稀疏对应点击实现交互式几何纠错。

15. **[What kills $v$-prediction? A Patch-wise PCA Perspective on Pixel-Space Flow Matching](http://arxiv.org/abs/2611.12852v1)**
    T. Luo, H. Huang, Y. Yao
    核心贡献：从 patch 级 PCA 视角解释像素空间 Flow Matching 使用标准 v-prediction 时的训练困难，为免自编码器的端到端生成提供分析依据。

### 📊 应用（垂直领域、多模态、医疗）

16. **[LUCQUE: A lung cancer screening dataset from Québec for reliable AI evaluation](http://arxiv.org/abs/2611.12817v1)**
    J. Topalis, Y. Lemaréchal, G. Couture 等
    核心贡献：公开肺癌筛查数据集，回应评估依赖私有数据或碎片化公开数据、临床数据与专家结节标注不一致导致的可复现性问题。

17. **[AI-based characterization of lymphoid structures and the tumor microenvironment … in lung squamous cell carcinoma](http://arxiv.org/abs/2611.12855v1)**
    A. Schmidt, J. Nieder, C. Boehm 等
    核心贡献：用 AI 刻画三级淋巴结构与淋巴结滤泡、浆细胞，发现新辅助治疗后成熟 TLS/SLS 与浆细胞减少；属计算病理而非超声。

18. **[DeepChronos: Temporal Neuro-Symbolic Reasoning for Multi-Step Attack Detection](http://arxiv.org/abs/2611.12760v1)**
    S. Burkow, A. Agiollo, E. Bardhi 等
    核心贡献：以时序神经符号推理替代“先检测后关联”范式，直接建模多步攻击的时序与因果阶段。

---

## 研究趋势信号

今日最清晰的信号是**“评估侧”成为一等公民**：从智能体欺骗归因于部分可观测的评估方式、到 FP4 训练在 loss 之外遗漏稀有事实、再到肺癌筛查强调可复现的公开评估数据，研究者正把注意力从“跑分”转向“评估是否看得见问题”。第二个信号是**丢弃信息的代价被重新计价**：RD 训练只留最佳 checkpoint、视频预训练默认语言—视频对齐已就绪，都被证明是隐含损失。此外，低精度/大学习率下的稳定性（KiteNorm）与生成建模的机制解释（v-prediction）继续升温。超声侧则集中在重建与仿真，去噪与无参考质量评价仍显稀疏。

---

## 值得精读

1. **[UltraVoxelGS](http://arxiv.org/abs/2611.11951v1)** — 今日与超声重建最贴近的工作，且“体素优先前馈 + 物理保真渲染”的设计直接关系到二维扫查中的实时空间反馈，需精读其结构保真证据与验证设置。

2. **[What the Loss Curve Misses](http://arxiv.org/abs/2611.12832v1)** — 用受控实验说明匹配 loss ≠ 同等习得稀有事实，对任何以验证损失判断低精度训练可行性的流程都有直接影响，方法干净、结论可迁移。

3. **[Agentic-OPD](http://arxiv.org/abs/2611.12799v1)** — 揭示 agentic RL 常规“只留最佳 checkpoint”做法的有损性，并提供可操作的恢复路径，对智能体训练流程设计有直接参考价值。

*（关于超声去噪：今日 50 篇中无散斑抑制、自监督/无干净参考去噪、RF/IQ/通道数据与波束形成、无参考质量评价的专门投稿；相关需求建议检索近期的超声去噪专题批次，而非从本批通用方法中推断。）*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*