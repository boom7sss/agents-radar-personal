# ArXiv AI 研究日报 2026-09-24

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-24 12:15 UTC

---

# ArXiv AI 研究日报（2026-09-24）

## 今日速览

今日投稿呈现两条主线：一是**医学影像基础模型与临床落地**，从放射学 3D 基础模型（nnFoundation）到筛查钼靶中预诊断信号的表征捕获，医工结合密度显著上升。二是**对生成模型与智能体的机制性反思**：高维潜空间的可扩散性、自回归视频生成的记忆瓶颈、潜流世界模型的运动丢失，均指向"生成质量提升"之外的可靠性问题。智能体方向则从工具使用扩展到世界建模与群体协作（Agent-Editing World Model、机器人群体加入）。此外，关于 LLM 评估的工作开始覆盖运行时行为推理与教学能力等更贴近真实部署的维度。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Memory Attention**
[arxiv.org/abs/2609.28399v1](http://arxiv.org/abs/2609.28399v1)
Jiale Kang
提出用**按 token 索引的记忆**替代传统的专用 value 投影，在保留上下文信息的同时复用跨上下文内容——对注意力机制参数效率的一次结构性探索。

**2. Order-Invariant Answers, Order-Sensitive Representations in Mathematical Reasoning**
[arxiv.org/abs/2609.28442v1](http://arxiv.org/abs/2609.28442v1)
Zhixu Silvia Tao
用合成多步函数组合任务证明：**答案对规则顺序不变，但内部表征会随顺序改变**——揭示 LLM 推理"结果正确"背后表征并不稳定的重要现象。

**3. Fine-Tuning LLMs for Translation: General Forgetting Mitigation Does Not Preserve MT-Specific Instruction Following**
[arxiv.org/abs/2609.28395v1](http://arxiv.org/abs/2609.28395v1)
N. Scholz, D. Thulke, A. Nasir et al.
指出通用基准上的灾难性遗忘缓解方法**无法迁移到机器翻译的指令遵循能力**，对微调实践具有直接的警示意义。

**4. When and Where to Trust the Teacher: Unifying On-Policy Distillation and GRPO through Entropy-Calibrated Credit Assignment**
[arxiv.org/abs/2609.28385v1](http://arxiv.org/abs/2609.28385v1)
J. Zhang, J. Yang, Z. Huang et al.
用**熵校准的信用分配**统一在线蒸馏与 GRPO，解决 RLVR 只有最终答案监督、token 级指导不足的问题。

**5. Cross-Scale Transfer Learning for Depression Severity Prediction: From PHQ-8 to HAMD-17 Across Languages and Clinical Paradigms**
[arxiv.org/abs/2609.28430v1](http://arxiv.org/abs/2609.28430v1)
W. Feng, S. Zojaji, S. Nakamura
以 Qwen3 为骨干、回归头有界，通过**顺序 LoRA 协议**实现跨量表（PHQ-8→HAMD-17）、跨语言的抑郁严重度预测迁移。

**6. ForgetMimic: Motion Unlearning for Reinforcement Learning Humanoid Control**
[arxiv.org/abs/2609.28378v1](http://arxiv.org/abs/2609.28378v1)
X. Luan, Z. Lei, C. Gong et al.
面向人形机器人 RL 策略的**运动遗忘**问题，兼具隐私与安全（cs.CR）考量。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. Agent-Editing World Model: Rethinking World Modeling for LLM Agents**
[arxiv.org/abs/2609.28416v1](http://arxiv.org/abs/2609.28416v1)
S. Sun, G. Chen, F. Meng et al.
反思传统语言世界模型"预测观测"的范式，转而**仅建模执行依赖的高熵工具结果**——对长程智能体规划效率的关键改进思路。

**8. Where Should I Join? Robot Group Joining via Language-Guided Goal Prediction**
[arxiv.org/abs/2609.28467v1](http://arxiv.org/abs/2609.28467v1)
Z. Fang, Z. Wang, G. H. Lee et al.
将社交导航从"给定目标"扩展到**根据群体实时活动与队形预测加入位置**，是语义驱动社会性机器人能力的新任务设定。

**9. Learning the Cost of Reliable Inference**
[arxiv.org/abs/2609.28322v1](http://arxiv.org/abs/2609.28322v1)
D. Rontogiannis, A. Artola Velasco, M. Gomez Rodriguez
针对 LLM 路由平台**固定 token 定价**的局限，研究如何学习"可靠推理"的成本，对模型路由与基准平台设计有直接价值。

**10. Shopping by algorithm: How agentic AI deploys human heuristics as a surrogate consumer**
[arxiv.org/abs/2609.28372v1](http://arxiv.org/abs/2609.28372v1)
D. Wadi, Y. Ma
用 "Tool-Lab" 过程追踪实验（属性藏于付费工具调用之后）研究 LLM 作为**代理消费者**时如何继承人类启发式（如 just-below 定价线索）。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**11. On the Diffusibility of High-Dimensional Latents**
[arxiv.org/abs/2609.28473v1](http://arxiv.org/abs/2609.28473v1)
C. Feng, Z. Xu, B. Chen et al.
研究 Representation Autoencoders 特征空间中的扩散：**为忠实重建而微调编码器会损害可扩散性**——揭示重建质量与生成可训练性之间的权衡。

**12. MultiVENT-Raw: A Benchmark for Retrieval and Reasoning over Raw Videos**
[arxiv.org/abs/2609.28437v1](http://arxiv.org/abs/2609.28437v1)
R. Kriz, D. Etter, A. Martin et al.
针对手机拍摄/CCTV 等**原始视频**（区别于专业制作内容）构建检索与推理基准，填补视频理解评测的空白。

**13. Can LLMs Reason About Runtime Behavior? A Repository-Level Dynamic Benchmark**
[arxiv.org/abs/2609.28449v1](http://arxiv.org/abs/2609.28449v1)
H. Taherkhani, M. Abdollahi, M. Sepidband et al.
现有仓库级 QA 基准多评估静态代码理解，本文提供**执行推理**导向的动态基准，直击 LLM 编程能力的真实短板。

**14. Even Sharper Bounds for Transductive Learning and Its Applications**
[arxiv.org/abs/2609.28459v1](http://arxiv.org/abs/2609.28459v1)
Yingzhen Yang
提出 **STLC（Sharper Transductive Local Complexity）**，在无放回均匀采样下给出更紧的转导学习泛化界。

**15. MicroQonv: Reshaping Convolution Tensors for Efficient Microscaling in Training and Inference**
[arxiv.org/abs/2609.28358v1](http://arxiv.org/abs/2609.28358v1)
R. Facq, S. Ben Ali, O. Sentieys
解决微缩放（MX）量化在卷积层中难以高效应用的问题，**重塑卷积张量布局**以支持 ≤8 bit 训练与推理。

**16. Mizar: A 159M-Parameter Audio-Language Model for Audio Understanding**
[arxiv.org/abs/2609.28344v1](http://arxiv.org/abs/2609.28344v1)
K. Li, S. Han, Y. Tian et al.
面向**低内存/低算力设备**的小型音频语言模型（<200M 参数），推动 ALM 从云端走向端侧。

---

### 📊 应用（垂直领域、多模态、代码生成）

**17. nnFoundation: 3D Foundation Models for Radiology**
[arxiv.org/abs/2609.26924v1](http://arxiv.org/abs/2609.26924v1)
C. U. Harsy, T. Wald, K. Gotkowski et al.
针对现有放射学基础模型**规模有限、评测狭窄、域偏移下脆弱**的问题，系统推进 3D 医学基础模型的建设。

**18. Foundation model embeddings capture pre-diagnostic changes on screening mammograms**
[arxiv.org/abs/2609.26605v1](http://arxiv.org/abs/2609.26605v1)
K. P. Slavkova, E. Brattain, A. Gowd et al.
测试基础模型嵌入是否**无需任务适配**即可编码预诊断组织变化（沿"癌症方向"的位移速度），对筛查早期预警意义重大。

**19. M3D-Net: Hierarchical Coordination of Spatial Context, Feature Reuse, and Differential Attention for Mammography Classification**
[arxiv.org/abs/2609.27523v1](http://arxiv.org/abs/2609.27523v1)
Z. Yu, X. Li, J. Gao et al.
面向钼靶分类，协同多尺度坐标注意力、**有界动态特征复用**与差分注意力，缓解深层表征中局部与全局线索衰减。

**20. LightMIS: Ultra-Lightweight Medical Image Segmentation Without a Stage-Wise Decoder**
[arxiv.org/abs/2609.28327v1](http://arxiv.org/abs/2609.28327v1)
A. Arhire, M.-E. Breabăn, R. Timofte
用 Scale-Aligned Projection 将五级编码器输出对齐到统一分辨率后**一次性聚合**，去掉逐级解码器，实现超轻量医学分割。

**21. VGM-VS: Rethinking Visual Geometry Model for High-Precision Visual Servoing**
[arxiv.org/abs/2609.28312v1](http://arxiv.org/abs/2609.28312v1)
Y. Pan, S. Wang, Y. Zhou et al.
基于预训练前馈**视觉几何模型**估计相对相机位姿并迭代作为伺服增量，把几何基础模型引入高精度视觉伺服。

**22. Privacy-Preserving Semantic Segmentation from High-Resolution Depth and Ultra-Low-Resolution RGB**
[arxiv.org/abs/2609.28360v1](http://arxiv.org/abs/2609.28360v1)
X. Huang, S. M. Daniel, S. Pan et al.
以**超低分辨率 RGB + 高分辨率深度**在源头降低视觉隐私暴露，同时弥补 ULR 外观带来的语义与空间损失，面向移动机器人。

---

## 研究趋势信号

今日投稿显示：**生成与表征的"可靠性"正在取代"保真度"成为核心议题**。多篇工作（高维潜变量可扩散性、潜流世界模型的运动遗忘、自回归视频生成的记忆瓶颈）都在问同一个问题——模型看似能生成，但关键属性是否被悄然丢失。医学影像领域则出现明显的**基础模型规模化 + 零适配信号检测**趋势（nnFoundation、钼靶预诊断嵌入）。此外，智能体研究从"如何行动"转向"如何建模世界的哪些部分才值得建模"（Agent-Editing World Model），评估基准也同步向运行时推理、原始视频、动态仓库等真实场景迁移。可解释性与监管侧亦有回应（EU AI Act 系统性风险开放管线）。

---

## 值得精读

**1. On the Diffusibility of High-Dimensional Latents** — [arxiv.org/abs/2609.28473v1](http://arxiv.org/abs/2609.28473v1)
它把一个被广泛默认的前提（特征空间可以直接拿来扩散）变成了一个可证伪的命题：为重建微调编码器反而破坏可扩散性。这一权衡会影响几乎所有基于预训练视觉编码器的生成式工作，值得完整阅读其分析与实验设计。

**2. Order-Invariant Answers, Order-Sensitive Representations in Mathematical Reasoning** — [arxiv.org/abs/2609.28442v1](http://arxiv.org/abs/2609.28442v1)
用受控合成任务干净地分离了"答案正确"与"表征稳定"两个维度，结论对推理链评估、可解释性与鲁棒性研究都有方法论启示，且实验设定易于复现。

**3. nnFoundation: 3D Foundation Models for Radiology** — [arxiv.org/abs/2609.26924v1](http://arxiv.org/abs/2609.26924v1)
若其规模与评测广度如摘要所述，这将为医学 3D 基础模型提供一个可对标基线；对关注医疗 AI 落地、域偏移鲁棒性的读者，是理解该子领域当前天花板的关键文献。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*