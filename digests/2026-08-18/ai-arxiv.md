# ArXiv AI 研究日报 2026-08-18

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-08-18 10:57 UTC

---

# ArXiv AI 研究日报 — 2026-08-18

## 今日速览

今日 50 篇论文中，**机器人操纵与具身智能** 成为最活跃的方向，涵盖长时程操纵（BATON）、人形机器人全身控制（HAF）和神经符号体代理等突破。**视频世界模型的物理校准** 受到关注，CaliBench 与 HarnessEval-W 均聚焦于对生成式世界模型的可信评估。值得注意的还有 **模型安全** 方向的新发现——"模型催眠"（Model Hypnosis）展示了通过微弱提示线索组合实现强控制的可能性。方法论层面，矩阵乘法指数的优化改进（AlphaEvolve 结合）和 RAG 中的"查询主导"失败模式（GRIP）分别代表了理论计算与实用系统的进展。整体来看，评估方法论的成熟（从标量分数转向可解释诊断）是今日最突出的趋势。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[Proteus: Incremental Memory Activation for Long-Context Sequence Modeling](http://arxiv.org/abs/2608.16844v1)** — Bayat, Behrouz, Mirrokni 等 | 针对记忆模型静态记忆无法适应新信息的缺陷，提出增量式记忆激活机制用于长上下文建模。

2. **[Model Hypnosis: Strong control of AI via additive subliminal effects](http://arxiv.org/abs/2608.16834v1)** — Boix-Adsera, Tessler | 发现"模型催眠"现象——单个弱提示可组合产生对模型行为的强控制，跨模型家族和规模普遍存在，对 AI 安全有重要警示。

3. **[What Do Compliance Detectors Read? An Audit of Activation Probes and Guard Models](http://arxiv.org/abs/2608.16852v1)** — Sadhu, Sengupta, Sankarapu 等 | 审计合规检测器（激活探针与守卫模型）实际读取的内容，评估其判断的可信度与可审计性。

4. **[On the Principles Behind Neural Network Optimizers](http://arxiv.org/abs/2608.16760v1)** — Yushun Zhang | 为 Adam 优化器建立原则性理论基础，重新审视其收敛-发散争论，为设计新优化器提供动机。

5. **[Would this change your answer? Evaluating Explanations of LLM Behavior In The Wild with Counterfactual Experiments](http://arxiv.org/abs/2608.16747v1)** — Karvonen, Ong, Kantamneni 等 | 通过反事实可模拟性（counterfactual simulatability）评估 LLM 行为解释的质量，提出衡量"好解释"的新标准。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

1. **[Don't Drop the BATON: Long-Horizon Robot Manipulation via Agentic Subtask Exploration and Transition-aware Memory](http://arxiv.org/abs/2608.16889v1)** — Xu, Shang, Ferrara | 针对 VLA 模型在长时程操纵中错误累积问题，提出代理式子任务探索与转换感知记忆机制，是机器人+AI 交叉方向的重要进展。

2. **[HAF: Adapting Generalist VLAs to Humanoid Whole-Body Loco-manipulation via Hierarchical Action Flow and Spectral Latent RL](http://arxiv.org/abs/2608.16837v1)** — Gu, Hou, Li 等 | 通过层级动作流与谱潜变量强化学习，将通用 VLA 模型适配到人形机器人全身移动操纵任务。

3. **[Neurosymbolic Embodied Agents](http://arxiv.org/abs/2608.16794v1)** — Albinhassan, Feng, Russo 等 | 将长时程家务任务分解为任务导向的视觉执行与符号推理，保证可执行性与正确接地。

4. **[When State Becomes an Attack Surface: State-Semantic Injection in LLM-Driven Embodied Agents](http://arxiv.org/abs/2608.16806v1)** — Liu, Guo, Zhang 等 | 揭示 LLM 驱动具身代理中"状态"作为一种新型攻击面，展示状态语义注入攻击的威胁模型。

5. **[TDD-Agent: Test-Driven Reasoning for Code Generation](http://arxiv.org/abs/2608.16742v1)** — Yu, Li, Li 等 | 将测试驱动开发范式引入代码生成，让测试从静态后验验证器转变为引导实现过程的推理工具。

6. **[When Agents Coordinate: Measuring Coordination in Multi-Agent AI Coding](http://arxiv.org/abs/2608.16801v1)** — Destefanis, Aste | 首次引入量化 AI 编码代理团队内部协调程度的测量工具，填补了多代理评估中"过程"维度的空白。

### 🔧 方法与框架（新技术、基准测试、效率优化）

1. **[An Empirical Study of Training Pixel-Space Text-to-Image Diffusion Models](http://arxiv.org/abs/2608.16887v1)** — Jiang, Du, Chen 等 | 系统研究像素空间文生图扩散模型的训练方案，填补了该方向大规模设置的实践空白。

2. **[Improving the matrix multiplication exponent with modern optimization and AlphaEvolve](http://arxiv.org/abs/2608.16884v1)** — Dupont, Eisenberger, Kozlovskii 等 | 结合现代优化方法与 AlphaEvolve 改进矩阵乘法指数 ω 的优化问题求解，理论计算方向的重要交叉突破。

3. **[GRIP: Grounded Reasoning via Information-Restricted Premises](http://arxiv.org/abs/2608.16776v1)** — Teng | 识别 RAG 中"查询主导"失败模式（查询在隐状态中压制检索证据），提出信息受限前提实现真正基于证据的推理。

4. **[CaliBench: Are the Stochastic Dynamics of Video World Models Physically Calibrated?](http://arxiv.org/abs/2608.16829v1)** — Sadeghi, Seidenschwarz, Allardice 等 | 提出视频世界模型物理校准基准，检验生成式采样的细粒度偶然不确定性是否物理可信。

5. **[TRACE-Bench: Decomposing and Diagnosing Multi-Reference Image Generation](http://arxiv.org/abs/2608.16765v1)** — Wang, Ma, Yi 等 | 为多参考图像生成提供分解式诊断基准，突破以预定义任务类型组织的传统评测局限。

6. **[Policy Iteration with Human Feedback: Bringing Post-Training RL to In-context Learning](http://arxiv.org/abs/2608.16831v1)** — Nguyen, Shyr | 将后训练强化学习（策略迭代）引入上下文学习，连接两条此前独立的研究路线。

7. **[Q-based Variational Inverse Reinforcement Learning](http://arxiv.org/abs/2608.16888v1)** — Bajgar, Tisnikar, Abate 等 | 提出基于 Q 函数的变分逆强化学习方法，从行为中推断人类偏好，服务于安全有益 AI 的目标。

### 📊 应用（垂直领域、多模态、代码生成）

1. **[UniDot: A Unified Network for Sequence Modeling and Feature Interaction in Large-scale Recommendation](http://arxiv.org/abs/2608.16797v1)** — Lin, Sun, Zhang 等 | 统一工业推荐中的特征交互模型与序列模型两大独立家族，提出 UniDot 统一架构。

2. **[PixRestore: Unified Image Restoration via Pixel Diffusion Transformer](http://arxiv.org/abs/2608.16793v1)** — Sun, Wu, Kong 等 | 基于像素扩散 Transformer 的统一图像复原模型，应对多种退化类型的单模型解决方案。

3. **[VicEdit: Learning to Edit Videos from Visual In-Context Examples](http://arxiv.org/abs/2608.16745v1)** — Wang, Hu, Chen 等 | 提出"视觉上下文编辑"新范式，用多模态视觉示例替代纯文本指令进行视频编辑。

4. **[zLend: A Dual-Scope Cash-Flow Reconstruction Framework for On-Chain Credit Underwriting](http://arxiv.org/abs/2608.16856v1)** — Girish, Sahoo, SP 等 | 已部署的链上信贷承保框架，从公开链上活动重建钱包现金流，解决去中心化借贷缺乏信用局的问题。

5. **[Steering the Flow: Inverting Face Recognition Models via Gradient-Guided Flow Matching](http://arxiv.org/abs/2608.16791v1)** — Lu, Wang, Zhang 等 | 通过梯度引导的流匹配改进模型反演攻击，暴露人脸识别模型的安全漏洞。

6. **[SplatGuide: Geometric Priors from 3D Gaussians for Pose-Free Novel View Synthesis](http://arxiv.org/abs/2608.16863v1)** — Zhang, Wang, Ji 等 | 利用 3D 高斯泼溅的几何先验，从无位姿图像进行新视角合成。

## 研究趋势信号

今日投稿中最值得注意的信号是 **"可诊断评估"正在取代"标量得分"**：HarnessEval-W 要求基准提供评分背后的推理，CaliBench 检验视频世界模型的物理校准而非整体分布匹配，TRACE-Bench 对多参考生成做分解式诊断，TAD 在段级别揭示 RAG 对输出几何的影响。另一信号是 **神经符号方法的回归**——从 NeuroSymbolic Embodied Agents 到 AutoSR 的符号回归，学界在纯数据驱动之外重新寻求可解释性与形式保证。此外，**模型安全与攻击面研究扩大**至具身代理状态注入、模型催眠、合规检测器审计等新场景。最后，**VLA 模型向人形机器人泛化**（HAF）和长时程操纵（BATON）表明具身智能正在从仿真走向更真实的物理复杂度。

## 值得精读

1. **[Model Hypnosis](http://arxiv.org/abs/2608.16834v1)** — "弱信号组合控制模型行为"这一发现的覆盖面（跨模型家族与规模）和潜在安全影响使其成为必读。它挑战了"越狱需要显式对抗提示"的直觉，可能改变对齐评估的方式。

2. **[Don't Drop the BATON](http://arxiv.org/abs/2608.16889v1)** — 长时程操纵中"错误复合"与"子任务间静默约束"是 VLA 落地面临的真实瓶颈。该文的代理式探索与转换感知记忆方案可能成为该方向的代表性解法，兼具理论与工程价值。

3. **[Improving the matrix multiplication exponent with modern optimization and AlphaEvolve](http://arxiv.org/abs/2608.16884v1)** — 将现代优化工具应用于矩阵乘法指数这一核心理论问题，体现了 AI for Math 的典型路径——值得关注其方法论如何迁移到其他组合优化问题。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*