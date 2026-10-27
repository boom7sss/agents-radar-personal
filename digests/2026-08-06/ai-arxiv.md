# ArXiv AI 研究日报 2026-08-06

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-08-06 03:15 UTC

---

# ArXiv AI 研究日报 | 2026-08-06

## 今日速览

1. 今日 50 篇论文中，长程推理与智能体系统最受关注：Argus 提出持久化、自演化的智能体运行时，ABSeeker 用答案回溯解决搜索智能体的信用分配问题，Skill-Native LLMs 则聚焦跨技能推理的度量。
2. 多模态交互与视频理解同样亮眼：CoCo-IR 首次定义上下文组合图像检索任务，HelloWorld 让视频世界模型支持与角色对话，OmniEdit-Bench 为指令视频编辑提供了全面评测体系。
3. 优化理论迎来重要进展：一项研究从规范对称性出发，解释了 Adam 与梯度下降在低秩隐式偏置上的本质差异；MALT 进一步提出曲率感知的 Muon 优化器变体。
4. 基础模型跨界迁移成为新趋势：MarsCast 将地球天气基础模型迁移至火星大气，验证了 AI 气象模型的行星通用性。
5. 安全与隐私方面，Gradient Immunity 探索零空间抗恶意微调，项目反应理论（IRT）被引入 AI 安全基准以破解冗余评估问题。

---

## 重点论文

### 🧠 大语言模型

1. [**Reasoning Core: Designing Broad Procedural Data for Completion-Supervised Reasoning Training**](http://arxiv.org/abs/2608.05148v1)
   Sileo et al. — 提供 50 个程序化数据生成器，可规模化产出数学、逻辑、规划等可验证推理问题，为补全监督式推理训练打开新数据源。

2. [**Toward Skill-Native LLMs: Skill Entropy for Benchmarking and Training Long-Horizon Reasoning**](http://arxiv.org/abs/2608.05139v1)
   He et al. — 提出“技能熵”量化长程推理中跨技能切换的复杂度，为评测和训练长链推理提供新指标。

3. [**Item Response Theory for AI Safety**](http://arxiv.org/abs/2608.05086v1)
   Rivera et al. — 将心理测量学中的项目反应理论引入 AI 安全基准评估，缓解基准重复、分数不可比和模型“作蔽”问题。

4. [**Gradient Immunity: Null-Space Resistance to Malicious Fine-Tuning**](http://arxiv.org/abs/2608.05045v1)
   Huang et al. — 通过零空间构造使对齐模型对恶意微调免疫，无需依赖微调即服务（FTaaS）假设或用户额外安全流程。

### 🤖 智能体与推理

1. [**Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning**](http://arxiv.org/abs/2608.05144v1)
   Boxiu Li et al. — 提出持久化、自演化的智能体运行时，Manager/Planner/Engineer 多角色协作，支撑长任务中的持续执行与目标转向。

2. [**ABSeeker: Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment**](http://arxiv.org/abs/2608.05102v1)
   Lu et al. — 通过答案回溯将最终结果反推至关键中间步骤，缓解长程搜索智能体的稀疏奖励和信用分配问题。

3. [**Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite**](http://arxiv.org/abs/2608.05095v1)
   Yue et al. — 用分层图记忆与路径级定位/改写机制，实现智能体长期记忆的高效更新和多跳检索。

### 🔧 方法与框架

1. [**The Loss Does Not See the Basis, but Adam Does**](http://arxiv.org/abs/2608.05136v1)
   Singh — 从规范对称性切入，理论解释了梯度下降与 Adam 在低秩隐式偏差上的根本差异，对优化器选择具有指导意义。

2. [**OctoLong: Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling**](http://arxiv.org/abs/2608.05141v1)
   Paul et al. — 利用跨仓库代码上下文做中期训练，显著提升语言模型长上下文建模能力，为长上下文数据构建提供新途径。

3. [**MALT: Lightweight Curvature-Aware Muon via Diagonal Preconditioning**](http://arxiv.org/abs/2608.05088v1)
   Wu et al. — 为 Muon 优化器引入轻量对角预条件，在保持低显存的同时显式建模损失曲率，提升大模型预训练效率。

4. [**SparseDitto: Customizing GPU Kernels for Different Sparsity Patterns with LLM-Based Agentic System**](http://arxiv.org/abs/2608.05033v1)
   Shiyang Li et al. — 使用 LLM 智能体自动生成针对不同稀疏模式优化的 GPU 核函数，解决 cuSPARSE 等库在 CSR/BCSR 间的巨大性能差距。

### 📊 应用

1. [**CoCo-IR: Contextual Composed Image Retrieval**](http://arxiv.org/abs/2608.05149v1)
   Cao et al. — 定义上下文组合图像检索新任务，使多轮、迭代式的组合图像检索成为可能，突破了单轮交互限制。

2. [**HelloWorld: Enabling Socially Interactive Characters in Video World Models**](http://arxiv.org/abs/2608.05070v1)
   Ouyang et al. — 首次让视频世界模型中的角色可与用户进行多轮社交对话，将世界模型从内容生成推向交互体验。

3. [**OmniEdit-Bench: A Comprehensive Benchmark for Instruction-based Video Editing**](http://arxiv.org/abs/2608.05049v1)
   Miao et al. — 构建覆盖视频特有编辑维度（时序、运动、对象一致性等）的全面基准，推动指令视频编辑标准化评测。

4. [**MarsCast: Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres**](http://arxiv.org/abs/2608.05054v1)
   Carroll et al. — 将 GraphCast 地球天气模型迁移至火星大气，验证 AI 气象模型的行星通用性，为行星科学提供全新工具。

---

## 研究趋势信号

今日投稿呈现几个新信号：一是“推理基建化”，长程推理不再是单次思维链，而是由持久记忆、图结构、回溯机制与多角色运行时构成的系统工程；二是“跨域基础模型”，从地球天气到火星大气、从文本到无线信道，基础模型正在接受更多物理世界的检验；三是“视频模型的交互转向”，在生成能力之外，检索、编辑、社交互动开始成为核心评测维度；四是“优化理论复兴”，关于 Adam 隐式偏置的新分析以及曲率感知优化器的出现，预示大模型训练将越来越依赖理论指导。

---

## 值得精读

1. [**Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning**](http://arxiv.org/abs/2608.05144v1)
   **理由**：完整呈现了长程智能体运行时所需的持久化状态、自我演化机制与多角色协作设计，是智能体系统从“单次问答”走向“持续工作”的代表性框架，对 Agent 方向的工程与研究都有参考价值。

2. [**The Loss Does Not See the Basis, but Adam Does**](http://arxiv.org/abs/2608.05136v1)
   **理由**：从规范对称性这一优雅视角切入，严格区分了梯度下降与 Adam 在低秩隐式偏差上的行为差异。它不仅解释了常见的实验现象，也为今后优化器设计与理论分析提供了新范式。

3. [**MarsCast: Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres**](http://arxiv.org/abs/2608.05054v1)
   **理由**：将地球天气基础模型迁移到火星，是一次极具想象力的跨域迁移尝试。论文展示的不仅是技术可行性，更揭示了一个新方向：AI 基础模型可以成为行星科学中通用的大气模拟工具。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*