# ArXiv AI 研究日报 2026-09-03

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-03 10:05 UTC

---

# ArXiv AI 研究日报（2026-09-03）

## 今日速览

今日论文集中在几个鲜明方向：**视觉世界模型**与**生成式 3D/视频**取得进展（SolarWM、RoGe、InceptionGS、Thinking in Pictures）；**LLM 推理与训练效率**出现多个新方法（LoRA-TSD、Cliff、GRADSOLVE、FP4 预训练）；**安全与可信**成为热点，覆盖 LLM 安全（linguistic illegibility）、智能体安全对齐（SafeEvolve）、代码生成投毒攻击（CodePoisonRAG）等；同时涌现一批**面向低成本评估与部署**的工作（EarlyEval、Incremental Pooled LLM Evaluation、Measurement-Driven Sub-Network Selection）。值得关注的还有语言模型“自我控制注意力”（LMCocoa）这一新颖的推理效率思路。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**Cliff: Learning Process Rewards from the First Mistake**
http://arxiv.org/abs/2609.02817v1 — P. Han, R. Wang, K. Ramaneti 等
针对 RLVR 粗粒度结果奖励的局限，提出从首个错误处学习过程奖励的新方法，改善 LLM 中间推理步骤的监督信号。

**Language Models Can Control Their Own Attention**
http://arxiv.org/abs/2609.02737v1 — N. Ho, H. Ahmad, W. Koh 等
探索让语言模型自行决定关注哪些上下文片段以跳过全局注意力扫描，为超长上下文推理效率提供新思路。

**UE5M3 FP4 Block Scaling for Stable Language Model Pretraining**
http://arxiv.org/abs/2609.02846v1 — R. Hu, C. Luschi, P. Balanca
提出新的 FP4 块缩放方案解决 4-bit 浮点预训练的不稳定性，减少对 BF16 层和 Hadamard 变换的依赖。

**Do Tabular Foundation Models Know Physics? Contamination, Units, and the Deterministic Limit**
http://arxiv.org/abs/2609.02766v1 — W. Tenachi, Y. Hezaveh, L. Perreault Levasseur 等
系统考察表格基础模型的物理先验：是否包含真实物理知识、单位敏感性以及污染与确定性问题。

**Human Feedback Provides a Unique Signal LLMs Can’t Detect**
http://arxiv.org/abs/2609.02859v1 — S. Don-Yehiya, L. Choshen, O. Abend
论证用户自然反馈中蕴含 LLM 自身无法从文本中提取的独特信号，挑战“反馈过于嘈杂难以利用”的既有认知。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**Discriminative World Models for Web Agents**
http://arxiv.org/abs/2609.02885v1 — K. Li, D. Pendharkar, A. Pahilajani 等
将判别式世界模型引入 web 智能体动作选择，改进基于候选动作+PRM 排序的现有测试时决策框架。

**SafeEvolve: Harness-Policy Co-Evolution from Agent Experience for Safety Alignment**
http://arxiv.org/abs/2609.02786v1 — Q. Mao, W. Qu, D. Guo 等
提出智能体基座模型与交互 harness 共同进化的安全对齐方法，同时覆盖有害终态响应与多步执行轨迹风险。

**Bilevel Coordinated Reflection: A Game-Theoretic Approach to Multi-Agent LLM Systems**
http://arxiv.org/abs/2609.02750v1 — Y. Chen, Y. Chen, Y. Huang 等
用博弈论统一建模多智能体系统的编排、记忆改进与外部验证三者关系，为 orchestrator-worker 架构提供理论框架。

**CodePoisonRAG: Knowledge Poisoning Attacks on Retrieval-Augmented Code Generation**
http://arxiv.org/abs/2609.02774v1 — V. Gadey, Z. Marey, A. Dmitrienko
揭示检索增强代码生成面临的知识投毒攻击面：被污染的代码工件、文档与补丁可导致生成不安全代码。

**EarlyEval: Cheaper Agent Evaluation via Early Outcome Prediction**
http://arxiv.org/abs/2609.02783v1 — Y. Shi, Z. Sun, J. Dong 等
通过提前预测智能体任务结果来降低评测成本（前沿模型跑一次 agentic benchmark 需数百至数千美元）。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**SolarWM: Open Data and Scalable Training for Long-Horizon Video World Models**
http://arxiv.org/abs/2609.02886v1 — J. Huang, G. Fang, S. Qian 等
提供从数据准备到长时程推理的完整开源视频世界模型构建方案，处理异构数据源与不同视频骨干的训练挑战。

**Thinking in Pictures: A Systematic Benchmark for Reasoning-driven Image Generation**
http://arxiv.org/abs/2609.02864v1 — Y. Liu, N. Huang, X. Cao 等
指出统一生成模型停留于表层事件对齐，提出系统基准测试用于评估图像生成中的高层视觉推理能力。

**GRADSOLVE: Fast Exact Gradients for ODE Ensembles on GPUs**
http://arxiv.org/abs/2609.02876v1 — A. S. Mancini
针对 GPU 上 ODE 系综的梯度计算，在速度和精度之间打破现有权衡，实现快速精确梯度。

**Cliff 与 LoRA-TSD：优化方法新进展**

**LoRA-TSD: Tangent-Space Spectral Descent for LoRA via Muon-Style Updates**
http://arxiv.org/abs/2609.02734v1 — D. Andriianov, A. Veprikov, A. Beznosikov
将 LoRA 更新视为固定秩流形上的切向量，提出 Muon 风格的谱下降优化器，修正双因子独立训练导致的几何忽略问题。

**Balancing Frequencies and Pixels in Flow Matching**
http://arxiv.org/abs/2609.02748v1 — L. Degeorge, P. Couairon, A. Ghosh 等
针对自然图像 1/f² 频谱分布与像素域重建损失均匀处理所有误差的矛盾，探索流匹配中频率与像素的平衡策略。

**frb100-40 After Two Decades: An Optimality Certificate and a Preregistered Search Study**
http://arxiv.org/abs/2609.02804v1 — O. Uğurlu
解决开放 20 余年的 Model-RB 基准 frb100-40：给出 4000 顶点图的 100 顶点独立集与可验证最优性证明。

### 📊 应用（垂直领域、多模态、代码生成）

**RoGe: Novel View Synthesis via End-to-End Implicit Reconstruction and Generation**
http://arxiv.org/abs/2609.02847v1 — X. Lang, Z. Kang, Z. Huang 等
提出端到端隐式重建与生成结合的新视角合成方法，无需中间的渲染图像或显式 3D 表示作为桥接。

**InceptionGS: Generative Bootstrapping for Large-Scale Gaussian Splatting under Unstructured View Sampling**
http://arxiv.org/abs/2609.02747v1 — T. Lu, G. Wang, R. Huang 等
面向大规模场景非结构化视角采样，以生成式 bootstrapping 方式补全多视角采集盲区，实现一致渲染。

**Post-Training Language Models for Gold-Medal Performance in Coding Competitions**
http://arxiv.org/abs/2609.02849v1 — A. Ficek, S. Narenthiran, M. Samadi 等
以端到端专业化流水线（大规模题目筛选、合成推理轨迹、监督微调）将 LLM 提升到编程竞赛金牌水平。

**PlantC2USeg: Cross-Scale Consistent Pre-Training for Few-Shot Unified Plant Point Cloud Segmentation**
http://arxiv.org/abs/2609.02860v1 — Y. Tian, X. Jiang, J. F. Adamowski 等
面向现代作物育种的器官级分析需求，提出跨尺度一致的少样本植物点云统一分割预训练方法。

**DiscoSign: Discourse-Aware Text to Sign Language Gloss Translation**
http://arxiv.org/abs/2609.02796v1 — V. Baltatzis, M. Inan, C. Gillis 等
首次在文本到手语 gloss 翻译中引入语篇层面感知，弥补传统句级模型忽视手语语篇现象的缺陷。

**CORAL: An LLM-Native Harness for Production Recommender Systems**
http://arxiv.org/abs/2609.02730v1 — M. R. Azhar, Y. Zhou, G. Jiang 等
面向生产推荐系统的持续优化需求，构建 LLM 原生 harness，辅助检索、排序与服务策略的自动化决策。

## 研究趋势信号

今日投稿中观察到若干新兴方向：**(1) 世界模型从“生成”走向“判别 + 生成”融合**（Discriminative World Models、RoGe、SolarWM 分别从 web 智能体、新视角合成、视频预测切入）；**(2) 智能体评估的经济性**成为显性议题（EarlyEval、Incremental Pooled LLM Evaluation、Measurement-Driven Sub-Network Selection 均以降低成本为目标）；**(3) 安全研究从单点防御转向系统视角**——harness 与策略协同进化（SafeEvolve）、RAG 知识投毒（CodePoisonRAG）、模型内部语言不可读性（linguistic illegibility）表明攻击面正在向组件间信任边界延伸；**(4) 低精度与高效训练**持续深化，FP4 预训练优化与 LoRA 几何感知优化器并存。

## 值得精读

1. **The Implications of Linguistic Illegibility for LLM Security**（http://arxiv.org/abs/2609.02852v1，J. Mickens）
   提出“语言不可读性”（linguistic illegibility）概念——LLM 外部语言输出与内部机制计算之间可能存在系统性错位，直接关系到安全对齐的根本假设，值得完整研读。

2. **SolarWM: Open Data and Scalable Training for Long-Horizon Video World Models**（http://arxiv.org/abs/2609.02886v1，J. Huang 等）
   若标题所述为真，这将是首个“完全开源”的长时程视频世界模型全栈方案：从数据准备到推理开箱即用，对社区可复现性意义重大。

3. **Improved Gradient Descent Lower Bounds Beyond Nesterov**（http://arxiv.org/abs/2609.02855v1，Y. Ye, K. Liu）
   突破 Nemirovsky-Yudin 经典 Ω(n⁻²) 一阶下界，给出非 anytime 的 Ω(n⁻¹·⁶³⁴²) 与 anytime 的 Ω(n⁻¹·²⁴⁰⁸) 下界，是优化理论层面的实质性进展。数学功底扎实的读者建议精读。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*