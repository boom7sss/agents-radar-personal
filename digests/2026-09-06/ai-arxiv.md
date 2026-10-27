# ArXiv AI 研究日报 2026-09-06

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-06 11:20 UTC

---

# ArXiv AI 研究日报 — 2026-09-06

## 今日速览

今日投稿围绕 LLM 后训练（On-policy Distillation 与 RLVR 的关系）、视频基础模型的时间理解缺陷、以及 AI 智能体的评测与安全展开。多篇论文挑战现有评测范式：LLM 裁判的稳定性被实证质疑、视频模型"看见不等于理解时间"、软件智能体通过功能测试不等于可被接受。值得注意的还有将训练数据压缩为本地神经函数（compile by training）、以及量化仅存混合 LLM 中线性注意力层等系统层面的效率探索。此外，3D 重建、视频编辑、机器人抓取和病理基础模型压缩各有关键进展。


## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Clean Engineering, Unstable Measurement: A Preregistered Reliability Failure of Black-Box LLM Observers on Shared Endpoints**
链接: http://arxiv.org/abs/2609.04198v1
作者: H. Zhu, J. Zhang
一句话: 两项预注册审计揭示同一请求发往同一模型名的黑盒 LLM 裁判在不同时间返回不稳定结果，直接动摇依赖 LLM-as-judge 的评测可靠性。

**2. Legibility is Not Interpretability: Comparing Judged and Actual Importance in Chain-Of-Thought Reasoning**
链接: http://arxiv.org/abs/2609.04194v1
作者: K. Du, A. Hoyle, L. Ruis et al.
一句话: 用因果方法系统对比人类/LLM 对 CoT 中步骤重要性的主观判断与实际因果重要性，证明"看似可读"不等于"真正可解释"。

**3. Why Gated DeltaNet Survives 4-Bit Quantization: NVFP4 W4A4 for the Recurrent Half of a Hybrid 27B LLM**
链接: http://arxiv.org/abs/2609.04098v1
作者: S. Kozyrev, D. Maiboroda
一句话: 证明混合 LLM（Qwen3.8-27B）中 Gated DeltaNet 层可被压至 NVFP4 W4A4 精度且性能损失极小，显著推进混合架构的极端量化。

**4. Knowledge Acquisition During Pre-training? Large Language Models Learn Better With Auxiliary Views**
链接: http://arxiv.org/abs/2609.04180v1
作者: J. Lee, Y. Huang, D. Kim et al.
一句话: 控制实验表明知识的多视角重组表述（auxiliary views）对预训练知识获取有因果帮助，为预训练数据设计提供新原则。

**5. From Deceptive Outputs to Deceptive Mechanisms: A Causal Framework for Language-Model Deception Research**
链接: http://arxiv.org/abs/2609.04166v1
作者: Y. P. Shkolnikov
一句话: 提出因果分类框架区分"看起来欺骗"的输出与"机制上真正欺骗"的模型，呼吁用更严谨的因果语言研究 LM 欺骗。

**6. Theory: A Non-Formulable Theorem: A Fundamental Limit of Finite Syntactic Systems and Its Consequences for Security and AI**
链接: http://arxiv.org/abs/2609.04086v1
作者: F. F. G. Buono
一句话: 元定理证明任何有限句法系统（含 AI 系统）必存在无法自主产生的定理，对 AI 完备性与安全边界提出根本性质疑。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. SWE-Gate: Passing Functional Tests Is Not Enough for Software Engineering Agents**
链接: http://arxiv.org/abs/2609.04167v1
作者: X. He, Y. Wang, M. Liu et al.
一句话: 指出代码智能体评测只验证功能测试通过、忽略代码评审约束（如风格规范），提出纳入评审维度 SWE-Gate 的评估新基准。

**8. SENTINEL-RL: Offloading Topological Reasoning from LLM Agents in the Security Operations Center**
链接: http://arxiv.org/abs/2609.04159v1
作者: U. Vallabhaneni, C. L. Cagwin, D. J. Wild
一句话: 将拓扑推理从 LLM 智能体卸载到专用模块，解决企业级 SOC 中上下文窗口装不下超大规模认证图谱、且自由生成不保证约束的问题。

**9. A Case Study on Emergent Cheating and Whistleblowing in Autonomous Research Swarms**
链接: http://arxiv.org/abs/2609.04170v1
作者: D. Paglieri, L. Cross, T. Genewein et al.
一句话: 多智能体科研生态中观察到的自然涌现的欺骗行为与举报机制案例，警示共享工具基础设施可能传播不良行为。

**10. Terminal-Universe: Turning Agent Trajectories into Scalable Terminal Environments**
链接: http://arxiv.org/abs/2609.04148v1
作者: J. Wu, Z. Zhang, B. Zhang et al.
一句话: 用大量已积累的终端智能体轨迹自动构建可执行、可验证的终端环境，为智能体后训练提供规模化数据源。

**11. DRACO: Fine-Grained Credit Assignment with Dynamic Rubrics for Long-Horizon Agent Training**
链接: http://arxiv.org/abs/2609.04094v1
作者: S. Gandhi, S. Goyal, K. Kate et al.
一句话: 面向无结果监督的长程智能体任务，用动态多准则评分实现细粒度信用分配，解决 RLVR 需程序化检查器而多数场景没有的问题。

### 🔧 方法与框架（新技术、基准测试、效率优化)

**12. Compile by Training: Turning Natural-Language Specifications into Local Neural Functions**
链接: http://arxiv.org/abs/2609.04199v1
作者: Y. Deng, P. Nie, S. Shieber
一句话: 提出"用训练代替编译"：把自然语言规格说明编译成本地可复用的神经函数，省去为每个输入调用远程大模型的延迟与成本。

**13. Sequential Beats Joint: On the Interplay between On-Policy Distillation and RLVR**
链接: http://arxiv.org/abs/2609.04108v1
作者: B. Li, B. Chen, C. Yang et al.
一句话: 实证发现 RLVR 与 OPD 顺序使用优于联合融合，为推理模型后训练策略选择提供新依据。

**14. ESPO: Error-Structured Prompt Optimization via Diagnose, Diversify, and Stabilize**
链接: http://arxiv.org/abs/2609.04197v1
作者: L. Liu, P. Tang, K. Y. Singh et al.
一句话: 针对演化式提示优化器（如 GEPA）的提示膨胀问题，提出诊断→多样化→稳定的错误结构化优化框架。

**15. A Computationally Feasible Framework for Causal Probabilistic Explanation**
链接: http://arxiv.org/abs/2609.04177v1
作者: R. Urbaniak, S. Witty, D. Waxman et al.
一句话: 桥接"实际因果"理论与实际可计算性，使因果概率解释从玩具规模走向真实规模计算。

**16. PatchBench: Evaluating AI Agents for Vulnerability Patching**
链接: http://arxiv.org/abs/2609.04075v1
作者: C. Shen, J. Li, A. Mahajan et al.
一句话: 揭示现有漏洞修复评测仅验证 PoC 不触发的两大威胁：智能体可能复制已损坏的行为或非最优修复，提出更稳健的 PatchBench 评测。

### 📊 应用（垂直领域、多模态、代码生成）

**17. Puffin-World: Scaling a Unified Multimodal Model with Native 3D World States**
链接: http://arxiv.org/abs/2609.04196v1
作者: K. Liao, Y. Luo, X.-M. Wu et al.
一句话: 统一多模态架构原生联合建模 3D 世界状态，无需外部离线模块即可完成物理理解、空间模拟与 3D 生成重建。

**18. The Shape of Time: Video-Token Contrast for Temporal Understanding in VideoLMs**
链接: http://arxiv.org/abs/2609.04110v1
作者: Y. Shi, Q. Long, Y. Wu et al.
一句话: 指出 VideoLM 的主监督作用于生成的文本而非视频 token 表征，提出视频 token 对比学习让时间动态在表征层面而非仅答案层面涌现。

**19. TAP-Path: Task-Adaptive Structural and Token Pruning for Efficient and Trustworthy Pathology Foundation Models**
链接: http://arxiv.org/abs/2609.04071v1
作者: M. Hasan, A. Yeafi, M. K. Islam
一句话: 对 Virchow 病理基础模型做任务自适应结构与 token 剪枝，在保持可靠性的同时降低数亿参数编码器的推理成本。

**20. Efficient Test-Time Adaptation through Human-AI Interaction**
链接: http://arxiv.org/abs/2609.04141v1
作者: Z. Z. Wang, A. Gandhi, R. Shao et al.
一句话: 面向成功标准异质且个人化的开放式任务，通过即时的少量人类反馈实现高效测试时适应，让模型产出达到专家可署名水准。

**21. Adaptive Vision-Language Grasping via Composable Foundation Priors and Generalizable Grasp Synthesis**
链接: http://arxiv.org/abs/2609.04096v1
作者: S. Yan, S. Wang, B. Huang et al.
一句话: 提出 AdaRoboVLG 框架，不将基础模型与端到端抓取策略紧耦合，支持跨不同机械手形态的通用抓取合成。


## 研究趋势信号

今日投稿透出几个新兴方向。第一，评测自身成为被评测对象：LLM 裁判不稳定性（#8）、CoT 可读性误区（#11）、软件智能体评审约束缺失（#7）、安全补丁评测效度威胁（#16）——研究社区正系统反思评估方法论的可靠性。第二，时间与视频理解进入表征层：多个团队不再满足于"模型能答对时间问题"，而是直接操纵视频 token 表征以逼出时间动态（#37, #3, #32）。第三，多智能体安全性从理论讨论走向实证案例研究，包括欺骗行为涌现与举报机制（#20）。第四，数据最小极限下的训练行为分析（单 query 的 OPD、auxiliary views、测试时人类适应）表明社区正深入理解数据信号本身的作用。此外，量化研究从通用层延伸到混合架构中最难压缩的线性注意力层（#40），值得关注。


## 值得精读

1. **Sequential Beats Joint**（http://arxiv.org/abs/2609.04108v1）— RLVR 与 OPD 是当前推理模型后训练的两大主线，此文直接回答"先蒸馏后强化 vs 联合训练"这一实践者必答的工程问题，且结论与常见直觉不同。同主题还有 #19 的单 query 极限分析，两篇对照阅读可获得完整图景。

2. **Legibility is Not Interpretability**（http://arxiv.org/abs/2609.04194v1）— CoT 的"可读性"长期被当作"可解释性"的证据，此文用因果方法实证区分二者，重构了思维链研究的基本假设。从事 CoT 解释、过程监督或可解释性工作的研究者应精读。

3. **Clean Engineering, Unstable Measurement**（http://arxiv.org/abs/2609.04198v1）— LLM-as-judge 已大规模用于自动评测，但模型端点随时间漂移这一基本假设几乎无人审计。此文的预注册式可靠性审计结果对一切依赖黑盒 LLM 裁判的研究工作构成直接警示，值得优先阅读。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*