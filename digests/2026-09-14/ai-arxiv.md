# ArXiv AI 研究日报 2026-09-14

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-14 14:24 UTC

---

# ArXiv AI 研究日报（2026-09-14）

## 今日速览

今日投稿的核心张力在于「评估的可靠性」：多篇工作揭示现有基准存在系统性缺陷——物理基准经专家重评后被指评价破损且接近饱和（#20），医学 LLM 的评分卡式评估无法捕捉幻觉错误（#50），遗忘基准的「模型级证书」在智能体部署后失效（#40），教学公平性也缺乏审计工具（#24）。方法层面，稀疏/次二次注意力与 MoE 卸载的系统协同设计（#2、#22）和更高阶循环状态（#39）持续推进推理效率。医学与多模态仍是最大应用板块，覆盖跨模态分割、CT-to-PET 合成、多人对话与多轮问诊等场景。智能体工作则从「跑通流程」转向「诊断增益来源」，如六层 Text-to-Cypher 循环的消融分析（#48）与仓库 SKILL 文件优化（#49）。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **How Good Are Frontier Models at Physics? Expert Re-Grading Reveals Broken Evaluations and Near-Saturation of Leading Benchmarks** — [2609.13009](http://arxiv.org/abs/2609.13009v1)
  Ansari, Sun, Liu 等 | 专家重评发现主流物理基准的评分本身存在错误，低分更多反映评测破损而非模型能力不足。

- **K-Bench: A Benchmark for LLM Unlearning in Agentic Deployments** — [2609.12808](http://arxiv.org/abs/2609.12808v1)
  Yu, Jiang, Wang 等 | 指出「拒答即遗忘」的模型级证明在智能体部署后不再成立，提出面向智能体场景的遗忘基准。

- **MAxBench: A Multinomial Concept Recovery Benchmark** — [2609.13072](http://arxiv.org/abs/2609.13072v1)
  Appapogu, Behrens, Belinkov 等 | 针对「多类别概念无法用单一方向操控」的问题，建立多项概念恢复基准，推进细粒度行为控制。

- **Attention Quantization for Tabular Foundation Models** — [2609.13031](http://arxiv.org/abs/2609.13031v1)
  Kübler, Jäger, Flöge 等 | 表格基础模型与 LLM 架构相似但服务模式不同，本文为其注意力定制量化方案以优化推理性能。

- **Behavior Quotient Learning for Low-Rank Adaptation of LLM Agents** — [2609.12896](http://arxiv.org/abs/2609.12896v1)
  Zhou, Tu, Liu 等 | 用单一 LoRA 替代多适配器分发异构智能体能力，降低存储与路由开销。

### 🤖 智能体与推理（规划、工具使用、多智能体）

- **What Drives Recovery in Agentic Text-to-Cypher? LAST-CQ** — [2609.12746](http://arxiv.org/abs/2609.12746v1)
  Prokopiou, Aidinis, Kyrmpatsos 等 | 用五智能体、免训练、执行接地的框架做仪表化测试台，在 2,471 个实例上消融，定位循环中真正带来增益的环节。

- **Skill Issue: Lessons from Optimizing Repository SKILLs for Coding Agents** — [2609.12742](http://arxiv.org/abs/2609.12742v1)
  Kozyrev, Kozyrev, Podkopaev | 编码智能体依赖仓库内 `.md` 形式的 SKILL 文件，本文研究在「无基准可用」的现实条件下如何优化这些文档。

- **Tasks over Application Manuals: Revealing Gaps in Long-Horizon Procedural Reasoning** — [2609.13005](http://arxiv.org/abs/2609.13005v1)
  Soni, Murtaza, Nie 等 | 现有推理基准多为短程，本文揭示 LLM 在长程流程性推理上的能力缺口。

- **GraphAHA: Graph-Based Adaptive Search with Heterogeneous Actions for Test-Time Code Generation** — [2609.12757](http://arxiv.org/abs/2609.12757v1)
  Li, Wang, Yuan 等 | 针对树结构搜索的局限，用图结构自适应分配测试时预算，服务代码生成。

- **Embodied-BenchForge: A Closed-Loop Agentic Workflow for Embodied Benchmark Construction** — [2609.13082](http://arxiv.org/abs/2609.13082v1)
  Jiang, Zhang, Wang 等 | 用闭环智能体工作流自动化具身基准构建，解决多步构建产生的依赖型中间产物问题。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **Rethinking Heterogeneous System Disaggregation for Subquadratic Attention** — [2609.13134](http://arxiv.org/abs/2609.13134v1)
  Tschand, Fu, Mailthody 等 | 前沿模型正积极采用次二次注意力，本文论证现有以稠密注意力为中心的解耦式服务决策已不适用。

- **RunningTensor: Generalizing Linear Attention to Higher-Order Recurrent States** — [2609.12814](http://arxiv.org/abs/2609.12814v1)
  Herranz-Celotti, Guigue | 将线性注意力/状态空间模型的循环记忆从二阶张量推广到 o 阶，提升可表达的状态交互阶数。

- **SeqMoE: Toward Full-Load Performance via Predictive and Graph-Compatible MoE Offloading** — [2609.12978](http://arxiv.org/abs/2609.12978v1)
  Wang, Wang, Gong 等 | 从 MoE 的结构性优势出发，用预测式、图兼容的卸载策略逼近全量加载时的性能。

- **4D Parallelism Unlocks Exascale Bayesian Neural Networks for High-Fidelity Atmospheric Modeling** — [2609.12815](http://arxiv.org/abs/2609.12815v1)
  Kieckhefen, Gutiérrez Hermosillo Muriedas, Heyen 等 | BEAST 是首个在 0.25° 全球分辨率上做大气预报的贝叶斯 Swin Transformer，可同时量化偶然与认知不确定性。

### 📊 应用（垂直领域、多模态、代码生成）

- **Unified CT and MRI Pancreas Segmentation for Label-Efficient Cross-Modality Subregion Transfer** — [2609.13043](http://arxiv.org/abs/2609.13043v1)
  Hong, Pan, Aktas 等 | 统一 3D 胰腺分割框架，缓解单模态训练模型在跨模态场景下的显著性能下降。

- **3D CT-to-PET Translation via Latent Brownian Bridge Diffusion** — [2609.12860](http://arxiv.org/abs/2609.12860v1)
  Mourya, Di Feola, Veltri 等 | 用潜空间布朗桥扩散合成 PET，以规避其高辐射、高成本与可及性受限的问题。

- **Scaling Clinical Judgment to Evaluate Medical AI** — [2609.12822](http://arxiv.org/abs/2609.12822v1)
  Buckley, Kanjee, Brodeur 等 | 针对盲法医师评审难以规模化（样本小、多来自单一机构或专科）的瓶颈提出扩展方案。

- **Online Video Agent Harness for Long Video Understanding** — [2609.12818](http://arxiv.org/abs/2609.12818v1)
  Yang, Duan, Yang 等 | 长视频理解受困于「上下文腐化」与高成本，本文提出在线智能体框架替代查询无关的稠密抽帧。

- **MP-Bench: Evaluating Voice Agents as a Multiparty Conversation Participant** — [2609.13076](http://arxiv.org/abs/2609.13076v1)
  Shih, Kuan, Lin 等 | 现有语音基准普遍忽视多方对话场景，本文填补该评估空白。

- **Dynin-Robotics: Omnimodal Unified Diffusion Vision-Language-Action Model** — [2609.13053](http://arxiv.org/abs/2609.13053v1)
  Lee, Kim, Oh 等 | 通过共享轨迹模型把视觉目标预测与动力学预测引入动作生成与选择。

- **UniPart: Towards Zero-shot Language-Grounded 3D Part Segmentation for Embodied Interaction** — [2609.12898](http://arxiv.org/abs/2609.12898v1)
  Yu, qi, He 等 | 面向精细操作，弥补 3D 基础模型「泛化但只认整体」或「懂部件但闭集」的割裂。

## 研究趋势信号

一个清晰信号是**评估方法学的自我修正**：多篇工作不再提出新模型，而是拆解既有基准的失效模式——评分错误、拒答即遗忘的伪证书、评分卡对幻觉的盲区、单机构小样本评审的不可扩展性。伴随而来的是对**智能体化部署**的评估重构：遗忘、代码生成、Text-to-Cypher、具身基准都被要求在实际智能体回路中验证，而非停留在模型输出层。效率侧则从单点优化转向**系统协同设计**——次二次注意力需要新的解耦策略，MoE 卸载需要预测与图兼容调度，高阶循环状态试图在保持线性复杂度的同时扩大状态容量。

## 值得精读

1. **How Good Are Frontier Models at Physics?（[2609.13009](http://arxiv.org/abs/2609.13009v1)）** — 专家重评推翻了对前沿模型物理能力的既有印象，其「基准本身破损」的结论会直接影响你如何解读 Artificial Analysis Intelligence Index 等榜单分数，方法论上也适用于其他学科的评测审计。

2. **K-Bench（[2609.12808](http://arxiv.org/abs/2609.12808v1)）** — 「模型级遗忘证书不迁移到智能体部署」是一个干净而重要的论点，对所有做合规、隐私或安全对齐的团队都有直接的操作含义：你在模型上验证的遗忘，在工具调用链中可能并不成立。

3. **Rethinking Heterogeneous System Disaggregation for Subquadratic Attention（[2609.13134](http://arxiv.org/abs/2609.13134v1)）** — 若你在做推理服务基础设施，这篇指出了一个正在扩大的错配：架构已转向次二次注意力，而服务栈的解耦决策仍假设稠密注意力。属于需要提前布局的系统层判断。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*