# ArXiv AI 研究日报 2026-07-18

> 数据来源: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 共 50 篇论文 | 生成时间: 2026-07-18 02:56 UTC

---

# ArXiv AI 研究日报 | 2026-07-18

## 今日速览

今日论文呈现三大亮点：**长上下文与测试时训练**在机器人策略中实现数量级突破（RoboTTT 将上下文扩展到 8000 步）；**无反向传播神经网络**（NeuronSoup）提出异步时序图计算范式，挑战传统 BP 主导地位；**LLM 物理世界安全**（物理危险探测、世界行动模型缺陷）成为新的研究焦点，提示安全对齐需从文本层面延伸到行动空间。此外，数据中毒、元分析自动化、低资源语言扩展等方向亦有多项扎实工作。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Partition, Prompt, Aggregate: Statistical Self-Consistency in Language Models**  
   http://arxiv.org/abs/2607.15277v1  
   Patrik Wolf, Thomas Kleine Buening, Andreas Krause et al.  
   *揭示 LLM 条件估计的统计自洽性——若上下文学习被视为条件推断，模型输出应满足基本概率规则，并据此设计更可靠的自洽性方法。*

2. **In-Place Tokenizer Expansion for Pre-trained LLMs**  
   http://arxiv.org/abs/2607.15232v1  
   Jimmy T. H. Smith, Tarek Dakhran, Alberto Cabrera et al.  
   *提出无需重新训练即可扩展 tokenizer 词汇表的方法，解决低资源语言因分词碎片化导致的性能瓶颈，对多语言部署极具实用价值。*

3. **Mask-Aware Policy Gradients for Diffusion Language Models**  
   http://arxiv.org/abs/2607.15200v1  
   Haran Raajesh, Kulin Shah, Adam Klivans et al.  
   *将强化学习成功应用于掩码扩散语言模型（MDLM），通过近似对数似然实现策略梯度优化，为生成式推理提供了新途径。*

4. **Can We Trust Item Response Theory for AI Evaluation?**  
   http://arxiv.org/abs/2607.15190v1  
   Han Jiang, Sunbeom Kwon, Jinwen Luo et al.  
   *系统分析 AI 基准数据偏离人类测试假设的情况，警告 IRT 模型在 AI 能力评估中的误用风险，对 benchmark 设计有重大指导意义。*

5. **Grokipedia vs Wikipedia: An LLM-Based Audit of Political Neutrality along Ideologies**  
   http://arxiv.org/abs/2607.15146v1  
   Filippos Vlahos, Guillaume Bied, Tijl De Bie  
   *使用 LLM 审计由 Grok 编写的百科全书 Grokipedia 与 Wikipedia 的政治中立性，揭示生成式百科在意识形态偏差上的新挑战。*

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

6. **RoboTTT: Context Scaling for Robot Policies**  
   http://arxiv.org/abs/2607.15275v1  
   Yunfan Jiang, Yevgen Chebotar, Ruijie Zheng et al.  
   *将机器人策略的视觉运动上下文扩展到 8000 时间步（比现有方法高三个数量级），通过测试时训练实现前所未有的事件记忆与长期推理能力。*

7. **SearchOS-V1: Towards Robust Open-Domain Information-Seeking Agent Collaboration**  
   http://arxiv.org/abs/2607.15257v1  
   Yuyao Zhang, Junjie Gao, Zhengxian Wu et al.  
   *提出多智能体搜索协作框架，解决长交互历史中任务跟踪失败和搜索无法产出的鲁棒性问题，是开放域信息代理的重要进展。*

8. **When Words Are Safe But Actions Kill: Probing Physical Danger Beyond Text Safety in Hidden-State Risk Space**  
   http://arxiv.org/abs/2607.15218v1  
   Weimeng Wang, Ziqiang Wang, Zihang Zhan et al.  
   *首次系统研究语言模型作为具身智能体规划器时的物理世界安全——文本安全的提示在物理环境中可能致命，并设计隐藏状态风险空间进行探测。*

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

9. **AutoSynthesis: An agentic system for automated meta-analysis**  
   http://arxiv.org/abs/2607.15247v1  
   Moein Taherinezhad, Sebastian Maier, Gerardo Vitagliano et al.  
   *端到端多智能体系统实现自动元分析，从文献检索到效应量综合全流程自动化，对科学证据合成具有里程碑意义。*

10. **NeuronSoup: Evolving Asynchronous, Shared-Neuron Temporal Graphs without Backpropagation**  
    http://arxiv.org/abs/2607.15217v1  
    Subodh Kalia  
    *提出完全摒弃反向传播的神经计算架构：信号经异步延迟传播，通过共享神经元池进化生成时序图，为生物启发式学习提供全新范式。*

11. **BadWAM: When World-Action Models Dream Right but Act Wrong**  
    http://arxiv.org/abs/2607.15207v1  
    Qi Li, Xingyi Yang, Xinchao Wang  
    *发现世界行动模型（WAMs）虽能正确预测未来世界状态，但行动输出却可能错误——对“耦合即鲁棒”的假设提出警示，并分析失败根源。*

12. **Long-Context Fine-Tuning with Limited VRAM**  
    http://arxiv.org/abs/2607.15105v1  
    Vladimir Fedosov, Aleksandr Sazhin, Artemiy Grinenko et al.  
    *结合层级全局注意力、分段反向传播与层级 KV 缓存，使长上下文微调在有限显存中可行，是实用效率优化工作。*

---

### 📊 应用（垂直领域、多模态、代码生成）

13. **MedFailBench: A Clinician-Built Open-Source Benchmark for Medical AI Safety Boundary Inspection**  
    http://arxiv.org/abs/2607.15166v1  
    Goktug Ozkan  
    *医疗 AI 安全基准：由临床医生构建的合成数据集，按严重程度和安全门类型标注错误，解决“模型知道答案但跨越安全边界”的问题。*

14. **MM-IssueLoc: A Controlled Benchmark for Evaluating Visual Evidence in Multimodal Repository-Level Issue Localization**  
    http://arxiv.org/abs/2607.15205v1  
    Shaoxiong Zhan, Shi Hu, Boyu Feng et al.  
    *首个多模态仓库级问题定位基准，包含截图、日志等视觉证据，评估 AI 在真实软件 bug 定位中的多模态能力。*

15. **Pretraining Data Can Be Poisoned through Computational Propaganda**  
    http://arxiv.org/abs/2607.15267v1  
    Victoria Graf, Hannaneh Hajishirzi, Noah A. Smith et al.  
    *展示通过计算宣传污染预训练数据的威胁（无需篡改原始数据源），对大规模语言模型的安全训练构成新挑战。*

---

## 研究趋势信号

1. **物理世界安全对齐**：随着 LLM 成为具身智能体规划器，文本安全不保证行动安全，催生“动作空间安全审计”新子领域（BadWAM、When Words Are Safe）。
2. **非反向传播学习**：NeuronSoup、LINCS（范畴学习框架）等代表对 BP 之外学习范式的严肃探索，可能影响下一代神经网络训练。
3. **自动化科学研究**：AutoSynthesis、BrainPilot 等将多智能体系统引入元分析和脑科学发现，标志 AI 从“工具”向“科学合作者”转变。
4. **多模态证据融合**：MM-IssueLoc、MedFailBench 等强调视觉证据在软件工程和医疗中的关键作用，多模态基准正从图表走向真实复杂场景。

---

## 值得精读

1. **RoboTTT** — 首次将测试时训练与机器人策略结合，实现 8000 步上下文，从根本上改变了机器人长期记忆与推理的能力边界，对具身 AI 和在线学习有深远影响。
2. **NeuronSoup** — 完全无反向传播的异步时序图神经网络，从架构到学习算法都极具颠覆性，值得完整理解其设计原理与实验效果。
3. **BadWAM** — 对当前备受追捧的“世界行动模型”作出冷静检视，揭示其关键失败模式：预测世界正确但行动错误，对所有基于预测控制的系统研究者都有警示意义。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*