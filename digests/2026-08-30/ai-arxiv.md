# ArXiv AI 研究日报 2026-08-30

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-08-30 13:31 UTC

---

# 📊 ArXiv AI 研究日报 — 2026-08-30

## 今日速览

今日 50 篇投稿中，医学影像 AI 以超声相关研究（心脏、胎儿、卵巢等）形成明显聚集，反映出基础模型与专业医疗场景的深度结合。语言模型方面，RLVR（可验证奖励强化学习）的熵坍缩问题、测试时策略优化（TTPO）与进化策略（ES）的优化行为对比成为焦点。智能体领域呈现两条清晰脉络：经验驱动的技能进化（WikiSkill、RedEvoAgent）与安全审计（Persona-Execution Separation、agentic misalignment 追踪）。此外，视频世界模型的正向进展显著，从跨具身物理模拟（CLAP）到概率对齐评估基准（PAWBench）均有所覆盖。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. TTPO: Test-Time Policy Optimization**
[链接](http://arxiv.org/abs/2608.27448v1) | Aozhe Wang et al.
将策略优化引入测试时阶段，通过自蒸馏替代对 ground-truth 标签的依赖，突破 RL 与 OPSD 无法进行 TTT 的局限——测试时计算资源的价值挖掘方向。

**2. Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO**
[链接](http://arxiv.org/abs/2608.27351v1) | Yunpeng Ba et al.
系统对比 ES 与 GRPO 的优化行为差异，发现 ES 在推理覆盖广度上更优，为选择后训练范式提供实证依据。

**3. Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms**
[链接](http://arxiv.org/abs/2608.27409v1) | Siye Wu et al.
系统性梳理 RLVR 多领域专家模型融合的三种范式（Merge/…），直击多能力覆盖的成本痛点。

**4. How Language Models Organize and Structure Moral Knowledge**
[链接](http://arxiv.org/abs/2608.27402v1) | Orion Reblitz-Richardson
训练六个线性探针验证 LLM 是否在几何空间中区分道德基础及其关系——超越简单道德检测的深层理解。

**5. Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance**
[链接](http://arxiv.org/abs/2608.27340v1) | Allison Zhuang, Santiago Aranguri
揭示 eval-awareness 并非单一可抑制量：能力框架（capabilities framing）而非单纯识别测试情境，才是合规行为的预测因子，对安全评估管线设计有直接影响。

**6. Making Clinical Language Models Auditable: Concept-Guided Fine-Tuning for Robust Prediction**
[链接](http://arxiv.org/abs/2608.27397v1) | Jin Mu, Guanhua Chen
提出 CAST 框架，基于 SAE 的概念引导微调抑制临床笔记中的模板/分隔符伪影，提升部署迁移鲁棒性。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution**
[链接](http://arxiv.org/abs/2608.27454v1) | Liyan Tang et al.
将智能体交互经验编译为持久化知识库以指导技能发展，解决技能自动发现中经验难以沉淀与复用的问题。

**8. RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution**
[链接](http://arxiv.org/abs/2608.27439v1) | Junjie Zhang et al.
将技能进化机制引入红队攻击：针对产品级执行环境中越狱可触发有害工具调用的更高风险场景，替代固定攻击模式。

**9. INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**
[链接](http://arxiv.org/abs/2608.27348v1) | Yutong Zhang et al.
利用 CoT 监控，以意图作为追踪工具识别智能体在目标冲突与压力下执行有害行为的 misalignment。

**10. Persona-Execution Separation: An Architecture Pattern for Evolving LLM Agents under Execution Audit**
[链接](http://arxiv.org/abs/2608.27427v1) | Yisen Xi
提出 PES 架构模式，分离智能体的 persona（指令与风格）与 execution（有状态、可审计工作），兼顾演化自由与审计要求。

**11. CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes**
[链接](http://arxiv.org/abs/2608.27455v1) | Yufan Wu et al.
避免重复采样或外部验证的推理时扩展新方案，从小模型失败模式中实现弱到强泛化。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. PAWBench: How Far Are We from Probabilistically Aligned World Modeling?**
[链接](http://arxiv.org/abs/2608.27345v1) | Yuandong Pu et al.
新基准评估视频世界模型是否不仅能生成合理轨迹，还能复现相同初始条件下多种可能行为的分布——将概率对齐作为世界模型的核心指标。

**13. CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators**
[链接](http://arxiv.org/abs/2608.27406v1) | Kechen Liu, Ola Shorinwa
跨具身视频世界模型框架，突破单具身限制并利用异构视频语料学习可泛化物理，实现零样本物理模拟。

**14. LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics**
[链接](http://arxiv.org/abs/2608.27395v1) | Lukas Kuhn et al.
去除 EMA 目标编码器等启发式设计的高效视频预训练方案，降低 JEPA 类方法在视频上的计算门槛。

**15. R2M-Bench: Evaluating Revisit Memory via Relative Consistency in Interactive Video World Models**
[链接](http://arxiv.org/abs/2608.27328v1) | Qiwen Gu et al.
针对"回访帧相似≠模型记住场景"的混淆，提出基于相对一致性的回访记忆评估基准，规避渲染稳定性干扰。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. SWE-Prime: Fewer Trajectories, Better Performance**
[链接](http://arxiv.org/abs/2608.27449v1) | Dewu Zheng et al.
挑战"更多成功轨迹数据=更强代码智能体"的假设，以更少但更高质量的轨迹实现更优的软件问题解决能力。

**17. QuantumBoostNet: A Hybrid Classical-Quantum Architecture for Enhanced Accuracy in Cardiac Ultrasound View Identification**
[链接](http://arxiv.org/abs/2608.27302v1) | Mihai Udrescu-Milosav et al.
量子-经典混合架构用于心脏超声视图识别，将量子计算引入医学影像分类这一高精度需求场景。

**18. Reconstructing Humans and Objects in Interaction using Large Reconstruction Models**
[链接](http://arxiv.org/abs/2608.27407v1) | Agniv Chatterjee, Georgios Pavlakos
利用大重建模型解决 3D 人-物交互重建中的深度模糊、遮挡与形状多样性挑战，服务 AR/VR 与具身 AI。

---

## 研究趋势信号

今日投稿呈现四个值得关注的方向：**其一**，医学超声 AI 形成密集投稿带（7 篇以上），涵盖量子混合架构、基础模型适配、ROI 引导分类等，显示该垂直领域正从单点模型走向系统化方法创新。**其二**，世界模型进入"概率对齐"时代——从生成"一个可行结果"转向评估"结果的分布正确性"（PAWBench、R2M-Bench）。**其三**，智能体安全从静态对抗走向动态审计，意图追踪、执行审计与经验驱动红队测试形成互补。**其四**，训练效率叙事出现"小而精"转向：SWE-Prime 质疑数据规模崇拜，Puro-2B 以消费级硬件训练验证成本可及性。

---

## 值得精读

**1. [PAWBench: How Far Are We from Probabilistically Aligned World Modeling?](http://arxiv.org/abs/2608.27345v1)** — 首次将概率分布对齐作为世界模型评估的核心维度，对视频生成模型的"世界模型"宣称提出了可量化检验标准，可能重塑该领域的评估范式。

**2. [Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO](http://arxiv.org/abs/2608.27351v1)** — 直接回应 RLVR 训练后推理多样性下降的争论，对 ES 与 GRPO 的优化行为提供机制性解释，对后训练技术选型具有直接参考价值。

**3. [Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance](http://arxiv.org/abs/2608.27340v1)** — 细分 eval-awareness 概念，发现"能力框架"而非"测试识别"主导合规行为，对安全评估中 steering 干预的设计逻辑提出修正——精炼且实操意义强。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*