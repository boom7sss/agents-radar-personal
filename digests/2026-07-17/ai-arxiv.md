# ArXiv AI 研究日报 2026-07-17

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-17 03:19 UTC

---

# 📄 ArXiv AI 研究日报 — 2026-07-17

---

## 🔍 今日速览

今日论文展现了几个鲜明趋势：**机器人策略的长时域上下文扩展**（RoboTTT 将视动上下文提升至 8000 步）与 **预训练数据投毒的新威胁**（利用计算宣传手法污染语料）成为安全与鲁棒性的焦点。**Transformer 递归机制**（T^2MLR）与 **无反向传播的异步神经架构**（NeuronSoup）在架构创新上引人注目。同时，多篇工作探讨了 **AI 系统在物理世界中的安全边界**（如隐蔽文本指令引发的真实危险）和 **AI 驱动的自动化科学研究**（AutoSynthesis、BrainPilot）。此外，**持续多模态表示学习**（AlphaWiSE）与 **参数高效的长上下文微调**（Long-Context Fine-Tuning）为实际部署提供了新的效率方案。

---

## 📌 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Pretraining Data Can Be Poisoned through Computational Propaganda**  
   [http://arxiv.org/abs/2607.15267v1](http://arxiv.org/abs/2607.15267v1)  
   *V. Graf, H. Hajishirzi, N. A. Smith et al.*  
   揭示通过大规模计算宣传手法污染预训练数据可向语言模型植入难以检测的恶意行为，拓展了数据投毒的攻击面。

2. **In-Place Tokenizer Expansion for Pre-trained LLMs**  
   [http://arxiv.org/abs/2607.15232v1](http://arxiv.org/abs/2607.15232v1)  
   *J. T. H. Smith, T. Dakhran, A. Cabrera et al.*  
   提出不重新预训练的原地分词器扩展方法，解决后期添加语言时词元碎片化问题，降低延迟与计算成本。

3. **Grokipedia vs Wikipedia: An LLM-Based Audit of Political Neutrality along Ideologies**  
   [http://arxiv.org/abs/2607.15146v1](http://arxiv.org/abs/2607.15146v1)  
   *F. Vlahos, G. Bied, T. De Bie*  
   对比 Grok 生成的百科全书与维基百科的政治中立性，揭示 LLM 在意识形态维度上的系统性偏差。

4. **Mask-Aware Policy Gradients for Diffusion Language Models**  
   [http://arxiv.org/abs/2607.15200v1](http://arxiv.org/abs/2607.15200v1)  
   *H. Raajesh, K. Shah, A. Klivans et al.*  
   将强化学习扩展到掩码扩散语言模型，提出可处理的策略梯度近似，提升推理能力。

5. **Rubrics on Trial: Evolving Rubrics from a Single Query via Synthetic Pairwise Evidence**  
   [http://arxiv.org/abs/2607.15092v1](http://arxiv.org/abs/2607.15092v1)  
   *H. Yang, L. Pan, X. Li et al.*  
   提出从单条查询自动演化评分细则的方法，利用合成成对证据提供细粒度监督信号。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

6. **RoboTTT: Context Scaling for Robot Policies**  
   [http://arxiv.org/abs/2607.15275v1](http://arxiv.org/abs/2607.15275v1)  
   *Y. Jiang, Y. Chebotar, R. Zheng et al.*  
   将机器人策略的视动上下文扩展到 8000 时间步（提升三个数量级），通过测试时训练实现长程记忆。

7. **Beyond Success Rate: Cost-Aware Evaluation of Offensive and Defensive Security Agents**  
   [http://arxiv.org/abs/2607.15263v1](http://arxiv.org/abs/2607.15263v1)  
   *P. Kassianik, B. Nelson, Y. Singer*  
   提出考虑推理成本的安全智能体评估框架，弥补仅衡量峰值能力的不足，贴近实际运营场景。

8. **When Words Are Safe But Actions Kill: Probing Physical Danger Beyond Text Safety in Hidden-State Risk Space**  
   [http://arxiv.org/abs/2607.15218v1](http://arxiv.org/abs/2607.15218v1)  
   *W. Wang, Z. Wang, Z. Zhan et al.*  
   发现外观安全的语言指令在具身环境中可能导致物理危险，提出在隐状态风险空间中检测此类危险。

9. **Plover: Steering GUI Agents through Plan-Centric Interaction**  
   [http://arxiv.org/abs/2607.15193v1](http://arxiv.org/abs/2607.15193v1)  
   *M. Venkatesan, S. Wen, J. Guo et al.*  
   提出以计划为中心的图形用户界面智能体，通过交互式计划调整应对动态布局与意外对话框。

10. **AutoSynthesis: An agentic system for automated meta-analysis**  
    [http://arxiv.org/abs/2607.15247v1](http://arxiv.org/abs/2607.15247v1)  
    *M. Taherinezhad, S. Maier, G. Vitagliano et al.*  
    端到端多智能体系统，自动完成元分析全流程（检索、提取、统计合并），显著提升循证研究效率。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

11. **T²MLR: Transformer with Temporal Middle-Layer Recurrence**  
    [http://arxiv.org/abs/2607.15178v1](http://arxiv.org/abs/2607.15178v1)  
    *Z. Cai, X. Zhu, Y. Dong et al.*  
    引入中间层时间递归，使隐状态跨时间步持久化，突破自回归解码的信息压缩瓶颈。

12. **Long-Context Fine-Tuning with Limited VRAM**  
    [http://arxiv.org/abs/2607.15105v1](http://arxiv.org/abs/2607.15105v1)  
    *V. Fedosov, A. Sazhin, A. Grinenko et al.*  
    结合分层全局注意、分片反向传播和分层 KV 存储，实现有限显存下的长上下文参数高效微调。

13. **AlphaWiSE: Adaptive Weight Interpolation for Continual Multimodal Representation Learning**  
    [http://arxiv.org/abs/2607.15094v1](http://arxiv.org/abs/2607.15094v1)  
    *S. Jain, Q. Hu, Z. Zhu et al.*  
    通过自适应权值插值在不遗忘跨模态对齐的前提下持续更新多模态表示，支持任意时点回滚。

14. **NeuronSoup: Evolving Asynchronous, Shared-Neuron Temporal Graphs without Backpropagation**  
    [http://arxiv.org/abs/2607.15217v1](http://arxiv.org/abs/2607.15217v1)  
    *S. Kalia*  
    提出完全异步、延迟驱动的共享神经元网络，无需反向传播即可进行演化计算，挑战传统深度学习范式。

15. **On-Policy Delta Distillation**  
    [http://arxiv.org/abs/2607.15161v1](http://arxiv.org/abs/2607.15161v1)  
    *B. Heo, J. Hwang, S. Yun et al.*  
    系统分析强化学习中在线蒸馏的本质，提出 Delta 蒸馏方法，在无奖励模型约束下实现高效的 token 级教师监督。

---

### 📊 应用（垂直领域、多模态、代码生成）

16. **Beyond the Leaderboard: Design Lessons for Trustworthy Multimodal VQA**  
    [http://arxiv.org/abs/2607.15241v1](http://arxiv.org/abs/2607.15241v1)  
    *S. Gautam, V. Thambawita, M. A. Riegler et al.*  
    以胃肠内镜 QA 为例，分析九个系统的设计选择，总结构建可信赖多模态医疗 AI 的关键经验。

17. **MedFailBench: A Clinician-Built Open-Source Benchmark for Medical AI Safety Boundary Inspection**  
    [http://arxiv.org/abs/2607.15166v1](http://arxiv.org/abs/2607.15166v1)  
    *G. Ozkan*  
    由临床医生构建的合成基准和故障图谱，按严重等级和失效门类型标注医疗 AI 错误，推动安全边界检查。

18. **Scaling Behavior Foundation Model for Humanoid Robots**  
    [http://arxiv.org/abs/2607.15163v1](http://arxiv.org/abs/2607.15163v1)  
    *W. Zeng, K. Yin, X. Niu et al.*  
    提出人形机器人行为基础模型，通过扩展学习实现全身协调、实时响应与环境泛化。

---

## 📈 研究趋势信号

- **物理世界安全放大**：多篇论文（#20、#8、#25）从不同角度指出语言模型作为规划器时，文本无害但具身执行后果严重，推动“物理对齐”成为新兴子方向。
- **记忆机制与长上下文突破**：从机器人策略（#2）到 Transformer 架构（#11）再到微调方法（#12），均聚焦于突破上下文长度限制，测试时训练、递归隐状态等技术路线并行。
- **无梯度神经网络探索**：NeuronSoup（#14）提出无需反向传播的异步网络，LINCS（#43）用范畴论框架刻画非组合性故障——两种理论驱动的方法预示计算范式可能多元化。
- **自动化科学发现**：AutoSynthesis（#10）、BrainPilot（#50）等智能体系统开始接管元分析、文献综合等科研流程，AI 从“工具”转向“合作者”。

---

## ⭐ 值得精读

1. **RoboTTT** — 将机器人策略的视动上下文从几十步扩展到 8000 步，性能提升三个数量级。测试时训练机制简洁有力，对具身智能的长时域决策具有里程碑意义。
2. **Pretraining Data Can Be Poisoned through Computational Propaganda** — 首次系统研究利用计算宣传（而非传统数据污染）攻击预训练语料，风险隐蔽且规模化可行，对 LLM 供应链安全提出严峻挑战。
3. **T²MLR** — 通过轻量级中间层递归让 Transformer 在自回归解码中保留长时间推理状态，思路新颖且兼容现有架构，有望替代或补充传统位置编码与记忆增强方法。

---

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*