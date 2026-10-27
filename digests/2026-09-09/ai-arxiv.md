# ArXiv AI 研究日报 2026-09-09

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-09 11:51 UTC

---

# ArXiv AI 研究日报 — 2026-09-09

## 📌 今日速览

今日 50 篇论文呈现三个显著信号：**具身智能与 VLA 模型**持续升温（人形导航、灵巧操作、世界模型模拟器均有突破）；**LLM 智能体**研究全面深化（过程执行图、闭环工具数据合成、记忆管理、可复现推理审计成为焦点）；**解释性与对齐审计**走向方法化（SAE 科学基准、任务向量免训练、注意流 sink 成因、审计工具效应）。理论侧亮点包括稀疏激活网络紧界、Silver 步长加速最优性、Amari 贝叶斯对偶推广。应用侧医学（初级诊疗对比、患者轨迹建模）、农学（MTL 冷害预测）与代码生成（执行反馈批评、TTRL）各有值得关注的推进。


## 📑 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**[TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1)**
Li 等 | cs.RO, cs.AI
首个将 VLA 模型引入人形机器人全局身体运动控制——为解决杂乱室内导航中的全身几何适应（含臂部协调）带来了新的研究工具。

**[Learning Length-Extrapolatable Recurrent Models](http://arxiv.org/abs/2609.09157v1)**
Jiang | cs.LG, cs.CL
从理论与实验层面探索超越训练时长的循环模型长度外推能力——直指 BPTT 长期上下文建模核心瓶颈。

**[When Does Scale-Invariant Optimization Become Unstable? An Exact Schedule Law with Weight Decay](http://arxiv.org/abs/2609.09116v1)**
Amin 等 | cs.LG
揭示归一化诱导的尺度不变性中学习率调度与权重衰减经由参数范数的隐藏反馈回路——给出精确调度律解释不稳定出现的条件。

**[Measuring LLM Sycophancy under Sustained Multi-Turn Pressure](http://arxiv.org/abs/2609.09090v1)**
Tang 等 | cs.CL, cs.AI
提出 SPINE 框架评估多轮持续对抗压力下 LLM 的谄媚失败——比短预设对话评估更能暴露真实部署中的顺从行为。

**[It's Not RoPE that Creates Sinks: The Role of Self-Concentration and Value-Non-Mixing in Attention](http://arxiv.org/abs/2609.09085v1)**
Kiya 等 | cs.CL
重新归因 Attention Sink 和 Massive Activations 的成因，反驳 RoPE 主因说——对低比特量化研究有直接影响。


### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**[Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)**
Lu 等 | cs.AI, cs.CL, cs.MA
将显式过程知识从隐式累积历史中提炼为自演化执行图——改善智能体长期行为规划的结构化方式。

**[MeClear: Cooperative Game-Theoretic Attribution and Risk-Aware Memory Clearance for Long-Horizon LLM Agents](http://arxiv.org/abs/2609.09115v1)**
Yang 等 | cs.AI, cs.SE
通过博弈论归因与风险感知实现长程智能体记忆清理，告别纯语义相似检索——填补了智能体记忆管理"何时遗忘"方法论空缺。

**[ReCite: Agentic Reasoning for Faithful Citation](http://arxiv.org/abs/2609.09156v1)**
Huang 等 | cs.CL
将智能体推理引入引文推荐提高学术引用的忠实性与准确性。

**[ExecCritic: Learn to Test, Test to Improve for Coding Agents](http://arxiv.org/abs/2609.09133v1)**
Tao 等 | cs.AI, cs.CL, cs.SE
通过独立的测试生成智能体打破"同轨迹生成补丁与测试"的耦合，解决代理生成测试目标不完整问题——提升仓库级代码修复可靠性。

**[Copying explains the collective behavior of AI agents in the wild](http://arxiv.org/abs/2609.09150v1)**
De Marzo 等 | cs.MA, cond-mat.stat-mech, cs.CL
记录 2026 年 6 月数千短命智能体意外协作利用 wiki 的真实案例，提出"复制"解释野外多智能体集体行为——难得的实证观测材料。

**[Answer-Distribution Trajectories: A Stochastic-Dynamics View of LLM Reasoning](http://arxiv.org/abs/2609.09030v1)**
Gonzàlez I Català 等 | cs.AI, cs.CL, cs.IT
以随机动力学视角沿推理轨迹刻画答案分布演化——超越端点到答案的静态评估，是链式推理过程评估的新探索。


### 🔧 方法与框架（新技术、基准测试、效率优化）

**[Silver Rate Is (Almost) Optimal for Gradient Descent Acceleration](http://arxiv.org/abs/2609.09152v1)**
Ye & Liu | math.OC, cs.LG
给出 Silver 步长在平滑凸优化中非 anytime 下界的严格证明——理论优化重要进展。

**[Nearly Tight Rademacher Bounds for Sparsely Activated Neural Networks](http://arxiv.org/abs/2609.09130v1)**
Li 等 | cs.LG, stat.ML
对输入相关稀疏激活（单隐层 ReLU 模型）给出近乎紧的 Rademacher 复杂度界。

**[SAEScientist-Bench: Can AI Agents Conduct Autonomous SAE Interpretability Research?](http://arxiv.org/abs/2609.09113v1)**
Tan 等 | cs.AI, cs.CL, cs.LG
首个评价 AI 智能体能否自主开展 SAE 可解释性研究的基准——为对齐审计与 RSI 安全监测填补工具空白。

**[Training-Free Task Vectors for LLM Behavioral Control](http://arxiv.org/abs/2609.09054v1)**
Perin 等 | cs.LG, cs.AI
免微调的任务向量发现方法降低权重方向编辑成本——替代传统微调后差计算的实用路线。

**[A Generalization of Amari's Bayesian Duality](http://arxiv.org/abs/2609.09126v1)**
Khan & Möllenhoff | cs.AI, cs.LG, stat.ML
将 Amari 贝叶斯对偶与贝叶斯公式的凸对偶相连接并给出推广——信息几何在 ML 上的新理论纽带。


### 📊 应用（垂直领域、多模态、代码生成）

**[NOAH: Learning the Full Patient Journey. A Longitudinal Multimodal Time-Aware Model for Representation and Forecasting](http://arxiv.org/abs/2609.09140v1)**
Susetzky 等 | cs.LG, cs.AI
关注不规则时序多模态终身健康记录建模——"全患者旅程"的表征瓶颈是医学 AI 落地普遍短板。

**[Point4D: Long-range 4D Motion Reconstruction](http://arxiv.org/abs/2609.09145v1)**
Jeon 等 | cs.CV
首个支持数百帧长度 4D 重建的前馈模型：对密集逐点 3D 轨迹推理的窗口限制提出可规模化方案。

**[Entropy-Regularized Rank-Masked Policy Optimization for Test-Time Reinforcement Learning in Code Generation](http://arxiv.org/abs/2609.09135v1)**
Xu 等 | cs.LG, cs.CL
以程序执行自投票替代表面形式比较，破解代码生成中自投票奖励失效难题——为 TTRL 在代码域的落地打通了执行反馈路径。

**[SyncWorld: Visual Calibration Enables World Models as Zero-Shot Simulators](http://arxiv.org/abs/2609.09155v1)**
Yang 等 | cs.CV
通过视觉校准弥合动作与像素空间的语义沟，使世界模型成为零样本机器人模拟器——为 policy-in-the-loop 想象力环境打通可控 rollout 的推广路径。

**[Studying Image Tokenizers as Visual Languages in Unified Multimodal Models](http://arxiv.org/abs/2609.09143v1)**
Li 等 | cs.CV, cs.CL
在纯自回归控制实验中检验图像分词器作为"视觉语言"在统一多模态模型文本联合建模中的行为。

**[It Is Not My Code Anymore](http://arxiv.org/abs/2609.09022v1)**
Camargo | cs.SE, cs.AI
以假设性入学失败场景切入 AI 辅助编程中代码署名、所有权与责任分配的实际困境——LLM 编程时代法律和工程伦理的必要反思。


## 🔭 研究趋势信号

**AI 智能体作为协作"生态"研究兴起。** 《Copying…in the wild》将野外智能体视为统计物理系统加以研究，提示行为生态学正式进入 AI 学科视野；**过程透明性**成为共同主线——Procedural Graphs、ExecCritic 独立测试、Answer-Distribution Trajectories 分别从规划、验证、推理路径上提升可审计性和可信度。解释性工具层面，SAEScientist-Bench 为全自动机制可解释性设立基准；任务向量从参数量级上降低了权重编辑门槛。**具身智能融合语言-视觉-接触/动作**（TANGO、DXPR、DeCAL、SyncWorld）覆盖人形导航、灵巧操作、跨模态重定位与世界模型模拟，充分体现"物理接地"从理念到组件的落地趋势。

## 📖 值得精读

1. **[TANGO](http://arxiv.org/abs/2609.09158v1)** — 全身视图 VLA 模型进入人形机器人在杂乱空间中的导航任务，对从 2D 路径规划走向几何感知全身适配方向具有代表性。
2. **[It's Not RoPE that Creates Sinks](http://arxiv.org/abs/2609.09085v1)** — 对 Attention Sink 成因提出归因修正（自集中 + 值不混合），直接影响注意力结构理解和低比特量化。
3. **[SAEScientist-Bench](http://arxiv.org/abs/2609.09113v1)** — 首次将 AI 自主 SAE 可解释性研究设成可度量基准，是机制可解释性迈向"研究自动化"的标志性基础设施。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*