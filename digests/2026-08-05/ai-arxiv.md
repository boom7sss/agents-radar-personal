# ArXiv AI 研究日报 2026-08-05

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-08-05 03:12 UTC

---

# ArXiv AI 研究日报（2026-08-05）

## 今日速览

今日 50 篇论文呈现三条主线：其一，测试时扩展（test-time scaling）进入精细化阶段，多篇工作从固定预算转向自适应、可解释的推理计算分配；其二，智能体研究从单任务完成走向长视频理解、多模态深度调研与社会世界反事实建模；其三，基础组件的数值可靠性与部署复用成为新焦点，包括 ALiBi 位置编码的浮点失效分析与跨模型 KV 缓存迁移。此外，非英语资源建设（阿拉伯语、德语、孟加拉语）和医学影像垂直应用持续产出高质量数据集与系统。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. When Attention Goes Blind: Numerical Failure in ALiBi Positional Encodings**  
🔗 http://arxiv.org/abs/2608.03994v1  
作者：Schröder 等  
一句话：首次揭示 ALiBi 的线性偏置在低精度下发生浮点下溢，导致大量注意力权重归零、注意力头"部分失明"，影响面覆盖所有 ALiBi 系模型。

**2. Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility**  
🔗 http://arxiv.org/abs/2608.04001v1  
作者：Hariri 等  
一句话：系统梳理测试时扩展的三类推理范式（单轨迹延展、采样投票、迭代修正）并讨论评估协议与可复现性问题，是该领域急需的"地图式"综述。

**3. WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament**  
🔗 http://arxiv.org/abs/2608.04008v1  
作者：Wang 等  
一句话：在 2026 世界杯 39 天赛程上对前沿 LLM 进行前瞻性预测评估，从机制上杜绝数据记忆污染，是评测方法论上的罕见创新。

**4. Logic Before Language: Pre-pretraining on Formal Derivations Fosters Skill Acquisition and Compressibility**  
🔗 http://arxiv.org/abs/2608.03930v1  
作者：Cheng 等  
一句话：提出在形式化推导数据上进行预预训练，相比 Dyck 语言等窄基元任务更能提升自然语言技能习得与模型压缩率。

**5. Cross-Model KV Cache Transfer in LLM Families: A Closed-Form Linear Mapping for Prefill Reuse**  
🔗 http://arxiv.org/abs/2608.03893v1  
作者：Heo 等  
一句话：提出同族不同规模 LLM 之间的 KV 缓存迁移，通过闭式线性映射复用预填充结果，解决生产中模型切换的高昂重计算成本。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning**  
🔗 http://arxiv.org/abs/2608.04007v1  
作者：Qu 等  
一句话：针对工具集成推理中轨迹级监督无法进行细粒度信用分配的问题，提出回合级事后自蒸馏，实现 on-policy 的细粒度 TIR 训练。

**7. ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning**  
🔗 http://arxiv.org/abs/2608.03972v1  
作者：Bi 等  
一句话：当专家模型在难题上失败时，"黄金负轨迹"仍然蕴含可学习的反思信号，本文据此设计反思到直接推理的渐进式强化学习流程。

**8. Video-DeepResearch: Towards the Next-Generation Multimodal Deepresearch Agent**  
🔗 http://arxiv.org/abs/2608.03979v1  
作者：Fang 等  
一句话：将多模态深度调研智能体从静态图像扩展到连续视频流，明确指出当前模型存在模态偏置和密集时空定位两大瓶颈。

**9. When and Where to Look: Adaptive Visual Evidence Scheduling for Efficient Long Video Understanding**  
🔗 http://arxiv.org/abs/2608.03918v1  
作者：Li 等  
一句话：提出自适应视觉证据调度机制，按需决定"何时看、看哪里"，打破静态一次性帧选择的固定预算限制。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**10. Sparse Weight Decomposition for Efficient Circuit Extraction**  
🔗 http://arxiv.org/abs/2608.03913v1  
作者：Yan 等  
一句话：无需训练稀疏模型或学习辅助表示，直接对稠密预训练权重做稀疏分解即可高效提取可解释电路，显著降低电路提取的计算门槛。

**11. Muon Meets Mamba: Spectral Optimization for State Space Models**  
🔗 http://arxiv.org/abs/2608.03941v1  
作者：Battalov 等  
一句话：Muon 优化器此前证据几乎全部来自 Transformer，本文首次系统评估其在状态空间模型上的表现，并比较与 AdamW 的收敛差异。

**12. string2string Studio: An Interactive, In-Browser Platform for String-to-String Algorithms**  
🔗 http://arxiv.org/abs/2608.03984v1  
作者：Suzgun 等  
一句话：将比对、距离、相似度、搜索、生成指标与 BLAST 六大字符串算法模块整合为浏览器内交互平台，兼具科研与教学价值。

### 📊 应用（垂直领域、多模态、代码生成）

**13. UniWorld-Design: From Pixel Generation to Layer-Native Design**  
🔗 http://arxiv.org/abs/2608.03971v1  
作者：Li 等  
一句话：把图像生成从平面像素合成重构为以语义 RGBA 层为原子单位的结构化视觉组合，统一了生成、理解与编辑三个环节。

**14. CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement**  
🔗 http://arxiv.org/abs/2608.03890v1  
作者：Ranjit 等  
一句话：面向临床胸部 X 光场景，将发现分类（可调阈值）、病灶定位与解剖测量统一进一个 VLM，直击现行系统的临床实用性缺口。

**15. ANNOTARES: A Dataset for Extracting Logical Structures from German Statutory Texts**  
🔗 http://arxiv.org/abs/2608.03898v1  
作者：Schwarz 等  
一句话：发布首个德语法律条文逻辑结构（事实构成 Tatbestand / 法律后果 Rechtsfolge）标注数据集，填补法律科技中非英语资源空白。

---

## 研究趋势信号

测试时扩展正从"固定预算"转向"自适应分配"（Interpretable Adaptive Sampling、When and Where to Look），并与可解释性结合。智能体研究开始触及社会世界建模（SocietyBench、WorldCup Arena、博弈论新框架），指向超越任务执行的预测与协调能力。工程层面，基础组件缺陷（ALiBi 数值失效）与部署复用（KV 缓存迁移）成为热点，显示领域正从追求能力上限转向夯实底层可靠性。

---

## 值得精读

1. **WorldCup Arena**（http://arxiv.org/abs/2608.04008v1）— 前瞻性、无泄漏评测在当前 LLM 评估中极为罕见。用真实赛事做持续预测，从机制上规避记忆污染，其方法论可迁移到其他动态领域。

2. **When Attention Goes Blind**（http://arxiv.org/abs/2608.03994v1）— ALiBi 被广泛采用，但该文发现其线性偏置在低精度浮点下会"整体失明"。这是一个影响面广、极易复现、此前被忽视的基础性缺陷，值得所有 ALiBi 使用者认真对待。

3. **Logic Before Language**（http://arxiv.org/abs/2608.03930v1）— 在符号推导上做预预训练是一个被低估的方向。该文用受控实验证明形式化数据能加速自然语言技能习得，对下一代预训练配方具有潜在指导意义。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*