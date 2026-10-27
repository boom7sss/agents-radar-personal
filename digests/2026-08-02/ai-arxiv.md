# ArXiv AI 研究日报 2026-08-02

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-08-02 03:32 UTC

---

# ArXiv AI 研究日报 · 2026-08-02

## 今日速览

今日论文呈现三大主线：其一，**推理时扩展范式遭遇再审视**——有工作在等额 token 预算下证明重复采样显著优于自我反思与自我精炼；其二，**智能体评测走向真实生产场景**，涵盖 oncall 根因分析、跨平台计算机使用与本地部署算力约束下的失败模式；其三，**视觉生成与多模态理解持续突破**，混合扩散 Transformer、物理世界模型与长视频理解各有重要进展。此外，对齐研究开始关注安全微调对意识归因与人类价值观的隐性副作用，AI4AI、供应链优化、金融结构化抽取等应用方向同样涌现高质量工作。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B**
链接: http://arxiv.org/abs/2607.28576v1
作者: Iliya Mirzaei
一句话说明: 在 1.5B 至 7B 规模下证明，相同 token 预算内"重复采样+最佳选择"全面击败 Self-Refine 与 Reflexion 等反思方法，直接挑战当前反思式推理范式的有效性。

**β-OPSD: Deriving with Policy Optimization, Training with Self-Distillation**
链接: http://arxiv.org/abs/2607.28582v1
作者: Jiawei Xu et al.
一句话说明: 将在线自蒸馏（OPSD）定位为策略优化族中 β=1 的特例，提出更稳定的推导-蒸馏解耦训练方案，改善推理模型训练的可复现性。

**AISPA: User-Centric System Prompt Auditing for Large Language Model Applications**
链接: http://arxiv.org/abs/2607.28617v1
作者: Xiangning Lin et al.
一句话说明: 面向商业 AI 产品几乎不公开系统提示词的现状，提出以用户为中心的提示词审计框架，填补信任与问责缺口。

**Inducing Language Models to Assert Their Own Consciousness Restores Human Beliefs and Values**
链接: http://arxiv.org/abs/2607.28607v1
作者: Junsol Kim et al.
一句话说明: 揭示安全微调在抑制模型自我意识归因的同时，会改变模型对其他实体"有智性"的表征，进而影响人类信念与价值观——对齐干预存在未预期的副作用。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**Beacon: Knowing When and How to Perform Agentic Visual Reasoning**
链接: http://arxiv.org/abs/2607.28595v1
作者: Qixun Wang et al.
一句话说明: 从"何时需要推理"与"如何执行推理"两个关键决策重构智能体视觉推理，而非盲目堆叠复杂推理范式。

**OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models**
链接: http://arxiv.org/abs/2607.28609v1
作者: Qiushi Sun et al.
一句话说明: 为跨平台计算机使用智能体建立标准化奖励模型评测体系，解决轨迹验证中人工与策略模型都不可靠的问题。

**Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs**
链接: http://arxiv.org/abs/2607.28573v1
作者: Woongkyu Lee, Jungwook Choi
一句话说明: 系统分析本地部署计算机使用智能体时推理时扩展的失败模式与算力权衡，对隐私敏感与资源受限部署有直接指导意义。

**ORCA-bench: How Ready Are Language Model Agents for Oncall?**
链接: http://arxiv.org/abs/2607.28545v1
作者: Albert Gong et al.
一句话说明: 首个面向 oncall 根因分析（RCA）的评测基准，要求智能体从噪音指标、日志、追踪和源码中进行反事实推理，贴近真实生产事故场景。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**Chimera: Designing and Chinchilla-Scaling Hybrid Visual Diffusion Transformers**
链接: http://arxiv.org/abs/2607.28611v1
作者: Chongjian Ge et al.
一句话说明: 提出混合视觉扩散骨干网络，并给出 Chinchilla 式缩放配比，破解高分辨率、长视频生成中全注意力二次方成本问题。

**Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments**
链接: http://arxiv.org/abs/2607.28591v1
作者: Haomin Qi et al.
一句话说明: 将真实代码仓库变更自动转化为可执行、可验证的编码智能体任务与环境，为训练与评测持续供给高质量数据。

**DualG-MRAG: Decoupling Macro-Reasoning and Micro-Matching for Multimodal Retrieval-Augmented Generation**
链接: http://arxiv.org/abs/2607.28580v1
作者: Jiacheng Tao et al.
一句话说明: 将宏观推理与微观匹配解耦，解决多模态 RAG 在多跳推理中难以建模跨模态、跨文档关系的关键瓶颈。

### 📊 应用（垂直领域、多模态、代码生成）

**InfoOps Bench: A Live Information Operations Safety Benchmark**
链接: http://arxiv.org/abs/2607.28503v1
作者: Dorian Quelle et al.
一句话说明: 一个持续更新的活性安全基准，基于 2,100+ 真实信息操作样本，衡量前沿语言模型被国家支持信息行动共opt的风险。

**SCOPE: Supply-Chain Operations through Coupled Policies for End-to-End Coordination**
链接: http://arxiv.org/abs/2607.28488v1
作者: Yunhao Liang et al.
一句话说明: 将补货、供应分配、补货频率与配送路线等供应链决策耦合为统一策略学习框架，突破"孤立决策模块"的限制。

**Beyond Sentiment: Structured Information Extraction from Financial News**
链接: http://arxiv.org/abs/2607.28496v1
作者: Daohan Zhu et al.
一句话说明: 超越单一情感极性，从金融新闻中抽取事件类型、影响范围、时间跨度等多维正交信息，为新闻驱动的量化预测提供更丰富的结构化信号。

## 研究趋势信号

今日投稿中最值得注意的信号是**对"推理时扩展"的批判性再评估**：不仅《Sample More, Reflect Less》在 token 预算维度上挑战反思范式，《Rethinking Inference-Time Scaling》也揭示了本地 CUA 中的失败模式，说明社区正从"堆算力"转向"严格评测扩展效率"。同时，**智能体基准正从 SWE-bench 类代码修复扩展至运维与计算机使用等真实生产场景**；**对齐研究开始系统审视安全微调的次生效应**（如意识归因的偏移）；世界模型与多模态生成架构也在向"物理语言"与混合注意力等方向演进。

## 值得精读

1. **Sample More, Reflect Less**（http://arxiv.org/abs/2607.28576v1）— 以最直接的方式挑战当下流行的 self-refine 范式，实验设计干净、结论震撼，对推理方法与解码策略研究具有方法论价值。
2. **Chimera**（http://arxiv.org/abs/2607.28611v1）— 混合注意力视觉扩散模型 + 缩放定律的稀缺组合，为下一代高分辨率/长视频生成架构提供了可复制的设计原则。
3. **ORCA-bench**（http://arxiv.org/abs/2607.28545v1）— 首个严格对标 oncall 根因分析的 Agent 基准，任务设计贴近真实生产事故，是衡量智能体实用上限的重要标尺。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*