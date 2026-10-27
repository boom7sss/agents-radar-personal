# ArXiv AI 研究日报 2026-09-11

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-11 11:49 UTC

---

# ArXiv AI 研究日报（2026-09-11）

## 今日速览

今日投稿呈现出三个清晰的技术焦点。其一是**稀疏架构与数据重复的交互**：随着人类文本供给见底，Mixture-of-Experts 在重复数据上的过拟合问题被首次系统刻画，这对当前主流稀疏模型训练范式构成直接警示。其二是**评测可靠性的集体反思**：从医学 LLM 评测缺口、心血管筛查中的目标泄漏，到 RAG 安全基准，多篇工作指出高报告指标可能并不反映真实能力。其三是**推理时算力的精细化利用**：循环流模型、多步转移前瞻强化学习、语音 LLM 的回顾式思考，都在探索"多花算力换更优解"的可训练路径。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [Data Scarcity and Model Sparsity: Mixtures-of-Experts Overfit More to Repeated Data](http://arxiv.org/abs/2609.11917v1)**
Atindra Jha, Margaret Li, Jure Leskovec 等 | cs.LG, cs.CL
首次系统研究数据重复对稀疏架构的影响，发现 MoE 比稠密 Transformer 更易对重复数据过拟合——在数据枯竭、重复训练成为常态的当下，这直接挑战了主流稀疏模型的训练假设。

**2. [The widening evaluation gap in medical large language model research 2023 to 2026](http://arxiv.org/abs/2609.11770v1)**
Raad Bin Tareaf, Murad Al-Rajab, Samia Loucif | cs.CL
基于 PubMed 2023.1–2026.6 的 11,628 条记录，量化了医学 LLM 研究规模 45 倍增长与临床证据滞后之间的鸿沟，为"评测跟不上模型迭代"提供了可引用的大样本证据。

**3. [Target leakage, not model class, explains reported accuracy in survey-based cardiovascular screening](http://arxiv.org/abs/2609.11838v1)**
Raad Bin Tareaf, Murad Al-Rajab, Samia Loucif 等 | cs.CL
对常规报告 AUROC≈0.89 的心血管筛查模型做泄漏分级审计，论证高精度来自目标泄漏而非模型能力，并检验了表格基础模型是否改变结论——对健康 AI 复现研究有方法论价值。

**4. [AdamX: Cosine similarity meets gradient descent](http://arxiv.org/abs/2609.11867v1)**
Francisco Caldas, Ruben Belo, Cláudia Soares | cs.LG, math.OC
提出以余弦相似度作为自适应更新幅度控制机制的一阶优化器，模型无关、易接入现有训练流水线，并引入方差校正项，是实用的优化器替代候选。

**5. [Augustinian BabyLM: What Ostensive Definition Can and Cannot Teach a Small Language Model](http://arxiv.org/abs/2609.11870v1)**
Lisa Bylinina | cs.CL
在 10M 词上训练的 DeBERTa 上实现"以指物定义学习词义"，检验视觉 grounding 在训练前注入能否替代语料学习，是对词嵌入获取机制的一次精巧受控实验。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**6. [Thinking with Looped Flows](http://arxiv.org/abs/2609.11801v1)**
Ayhan Suleymanzade, Chanhyuk Lee, Floor Eijkelboom 等 | cs.LG, cs.AI
针对循环模型推理时反复更新隐状态、但训练只反传一两次更新的矛盾，提出流式循环训练方案，旨在让测试时算力投入真正可训练，是推理时扩展的重要方向。

**7. [MindTopo: Can Foundation Models Reason in Topological Space?](http://arxiv.org/abs/2609.11897v1)**
Yunfei Ge, Anbang Liu, Qineng Wang 等 | cs.AI, cs.CL, cs.CV
指出既有基础模型空间推理评测偏重距离、角度等度量属性，忽视连续形变下不变的拓扑关系，填补了认知科学中基础性空间理解能力的评测空白。

**8. [Artificial Id: Drive and Persistent Alignment in Agentic AI](http://arxiv.org/abs/2609.11911v1)**
Yakov Pyotr Shkolnikov | cs.AI
聚焦智能体跨越任务边界时保留状态、持续运行带来的控制问题，指出当前框架靠手工设定目标、重试、验证与停止规则，提出对齐需从任务级走向持久化。

**9. [SpecGuard: Inference-Time Backdoor Detection For Free](http://arxiv.org/abs/2609.11799v1)**
Rui Wen, Ahmed Salem, Andrew Paverd 等 | cs.CR, cs.CL
针对第三方微调或下载模型可能携带触发式后门的问题，提出推理时零额外开销的后门检测方法，契合"部署后可审计"的现实需求。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**10. [GPU-CFR: 80x Faster Counterfactual Regret Minimization by Compiling the Game to Static Dataflow and CUDA Graph Replay](http://arxiv.org/abs/2609.11923v1)**
Boning Li, Longbo Huang | cs.DC, cs.AI, cs.GT
CFR 是少数仍 CPU 快于 GPU 的大规模数值负载，作者通过把博弈编译为静态数据流并用 CUDA Graph 重放，实现 80 倍加速，是系统与博弈论交叉的工程亮点。

**11. [Building py-kvcache: A Performance Characterization of External KV Caching for vLLM with NVMe SSDs](http://arxiv.org/abs/2609.11744v1)**
Joseph Kanichai, Tiziano De Matteis, Animesh Trivedi | cs.DC, cs.LG
量化了 vLLM 中前缀缓存"重算 vs 外部加载"的取舍：短前缀或快 GPU 下重算反而更快，为长上下文 LLM 服务的 KV 缓存设计提供了跨 GPU/CPU/NVMe 的实测依据。

**12. [CausalArena: Benchmarking Causal Discovery in the Foundation Model Era](http://arxiv.org/abs/2609.11897v1)**
Zi-Rong Li, Si-Yang Liu, Tian-Zuo Wang 等 | cs.LG
指出现有因果发现评测过度依赖结构因果模型（SCM），提出新一代基准，回应基础模型介入因果发现的评测需求。

**13. [RAG-Safety-Bench: Reliable Evaluation of Retrieval-Augmented LLM Safety](http://arxiv.org/abs/2609.11758v1)**
Adithiyan Rajan Indira Saravanan, Kathleen C. Fraser | cs.CL, cs.IR
针对 RAG 在降低幻觉的同时可能引入安全性副作用的问题，构建可靠的 RAG 安全性评测基准。

**14. [A Unified Per-Token Gating Family for On-Policy Distillation](http://arxiv.org/abs/2609.11768v1)**
Suwan Wu, Yumeng Lin, Pengcheng Yuan 等 | cs.AI, cs.CL, cs.LG
指出 EOPD、ToDi 等方法各自固定单一门控信号与方向且从未被比较，提出统一的 FKL/RKL 混合门控族，为在线策略蒸馏提供通用框架。

### 📊 应用（垂直领域、多模态、代码生成）

**15. [SenseNova-U1.5: Towards Native Unified Visual Intelligence](http://arxiv.org/abs/2609.11929v1)**
Haiwen Diao, Jiahao Wang, Chenjing Ding 等 | cs.CV
发布 8B-MoT 原生统一多模态模型，在无编码器、无 VAE 架构内完成视觉理解、推理与生成，通过空间一致的 patch 重建强化视觉接口，是统一多模态架构的一次激进尝试。

**16. [Biology-in-the-loop: Amortized Adaptive Hit Discovery in CRISPR Screens](http://arxiv.org/abs/2609.11877v1)**
Carl Edwards, Edward De Brouwer, Xiner Li 等 | q-bio.QM, cs.AI, cs.CL
把 CRISPR 筛选建模为预算约束下的序贯实验选择问题，实现多轮实验中的候选扰动摊销式优先级排序，是"实验在环"主动学习的代表性应用。

**17. [RetroThinker: Enabling Retrospective Thinking in Speech LLMs](http://arxiv.org/abs/2609.11864v1)**
Yi-Jen Shih, Puyuan Peng, Abdelrahman Mohamed 等 | eess.AS, cs.AI, cs.CL
针对语音 LLM 在复杂推理上落后于纯文本 LLM、而实时语音又限制思考时间的两难，引入回顾式思考机制，是语音推理能力补短的关键一步。

---

## 研究趋势信号

今日投稿释放出三个信号。**第一，"重复数据 + 稀疏架构"正成为独立研究议题**：当人类文本耗尽、重复训练常态化，MoE 的过拟合敏感性被首次量化，预示着数据策展策略需按架构类型重新设计。**第二，评测方法论进入自我批判期**：医学 LLM 评测缺口、心血管筛查目标泄漏、RAG 安全副作用三篇共同质疑高指标的可信度，泄漏审计与领域专用基准或成标配。**第三，推理时算力从"扩展"转向"可训练"**：循环流、多步前瞻 RL、语音回顾思考均致力于让额外算力投入可被训练目标有效利用，而非仅靠测试时堆叠。

---

## 值得精读

**1. [Data Scarcity and Model Sparsity: Mixtures-of-Experts Overfit More to Repeated Data](http://arxiv.org/abs/2609.11917v1)**
在当前几乎所有前沿模型都采用稀疏架构、且重复数据不可避免的背景下，这篇工作直接触及训练范式的核心假设。若结论稳健，将影响数据去重策略、重复倍率上限乃至 MoE 与稠密架构的取舍——属于"读完需要重新审视现有 pipeline"的类型。

**2. [GPU-CFR: 80x Faster Counterfactual Regret Minimization](http://arxiv.org/abs/2609.11923v1)**
CFR 长期是 GPU 难以加速的顽固负载，本文用静态数据流编译 + CUDA Graph 重放将其提速 80 倍，方法具有向其他"细碎 gather/scatter 密集型"数值负载迁移的潜力，工程与理论价值兼具。

**3. [The widening evaluation gap in medical large language model research 2023 to 2026](http://arxiv.org/abs/2609.11770v1)**
以 11,628 条 PubMed 记录为样本、跨 14 个临床领域的量化分析，为"模型每季度迭代、临床证据需数年"的结构性错配提供了硬数据。对从事医学 AI、评测基准或科研政策研究的读者，是最具宏观视野的一篇。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*