# ArXiv AI 研究日报 2026-08-11

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 30 篇论文 | 生成时间: 2026-08-11 02:08 UTC

---

## 今日速览

今日 ArXiv 的 AI 论文呈现几个鲜明信号：LLM 安全从“微调 + 生成式裁判”转向更轻量的几何推理与生产级自进化护栏；代码智能体训练开始重视失败轨迹的价值，而非只筛选成功样本。语音 LLM 的 KV Cache 压缩和训练无关低秩压缩得到更系统的误差分析。时间演化文档理解、RAG 的 IR 史视角以及 Agent Skills 生态审计，为评测与安全提供新基准。整体上，社区更关注效率、可靠性与动态安全之间的平衡。

## 重点论文

### 🧠 大语言模型

- **HoloAegis: Frozen Representation, Topological Inference: Minimally Parametric Safety Manifolds for Zero-Shot LLM Guardrails** · [arXiv:2608.08485](http://arxiv.org/abs/2608.08485v1) · T.H.A. Li 等 — 在冻结语义表示上构建拓扑安全流形，无需微调或 LLM 判别器即可实现零样本安全护栏，为对齐提供低成本的几何路径。

- **Yesterday's Shield, Today's Spear: A Self-Evolving Safety Guardrail in Production** · [arXiv:2608.08471](http://arxiv.org/abs/2608.08471v1) · C. Ming 等 — 提出 SESG 自进化安全护栏，在生产环境中动态更新防御，回应新越狱技巧与新兴危害类别。

- **VoxZip: Semantic-Anchored Temporal KV Cache Compression for Long-Context Audio Inference** · [arXiv:2608.08569](http://arxiv.org/abs/2608.08569v1) · W. Jia 等 — 面向语音 LLM 的语义锚定时间 KV Cache 压缩，缓解长上下文音频推理的显存瓶颈。

- **Understanding Calibration and Truncation Error Propagation in Training-Free Low-Rank Compression for LLMs** · [arXiv:2608.08506](http://arxiv.org/abs/2608.08506v1) · M. Odema 等 — 系统分析训练无关低秩压缩中校准误差与截断误差的传播机制，为 LLM 压缩提供更可预测的误差边界。

- **Time Present and Time Past: Benchmarking Large Language Models on Temporally Evolving Document Understanding** · [arXiv:2608.08512](http://arxiv.org/abs/2608.08512v1) · M.E. Sobhani 等 — 构建时间演化文档基准，测试 LLM 在法律、税码等频繁修订文档上的“时间感知”能力。

### 🤖 智能体与推理

- **FailForge: Distilling Procedural Competence from Persistent Failures into Code Agents** · [arXiv:2608.08570](http://arxiv.org/abs/2608.08570v1) · D. Lv 等 — 将代码智能体反复失败的经验蒸馏为程序性能力，补充拒绝采样微调只保留成功轨迹的盲区。

- **Discovering Diverse Planning Policies for Multimodal Embodied Agents with Quality-Diversity Optimization** · [arXiv:2608.08523](http://arxiv.org/abs/2608.08523v1) · P. Xu 等 — 用质量-多样性优化为多模态具身智能体发现多样化规划策略，避免大模型规划器陷入单一执行风格。

- **Hierarchical Self-Improvement: A Framework for Task-Specific Evolvable Agent Harnesses** · [arXiv:2608.08466](http://arxiv.org/abs/2608.08466v1) · T. Zhou — 提出可演化的任务专属 agent 脚手架框架，让提示、工具、工作流而非仅模型本身参与自动改进。

- **Reproducing and Stress-Testing Two Approaches to LLM Reasoning Reliability** · [arXiv:2608.08514](http://arxiv.org/abs/2608.08514v1) · M. Cho, J. Kweon — 独立复现并压力测试两种 LLM 推理可靠性方法，跨任务、跨模型检验其真实泛化力。

### 🔧 方法与框架

- **Forgotten History or Test-of-Time? Retrospect and Prospect on RAG from an IR Perspective** · [arXiv:2608.08445](http://arxiv.org/abs/2608.08445v1) · X. Zhao 等 — 从信息检索历史重新定位 RAG，强调 RAG 并非凭空出现的范式，为未来设计与评测提供更完整的谱系。

- **Beyond Tables: Doc2DB-Bench for Relationally Faithful Document-to-Database Construction** · [arXiv:2608.08459](http://arxiv.org/abs/2608.08459v1) · Z. Liang 等 — 提出文档到关系数据库构建基准，要求模型生成规范化模式与实体链接，而非简单表格抽取。

- **What Keeps Agent Skills from Being Reusable? Evidence from 138K SKILL.md Files** · [arXiv:2608.08453](http://arxiv.org/abs/2608.08453v1) · C. Zhang 等 — 对 13.8 万个 Agent Skills 文件进行大规模实证分析，识别技能不可复用的结构性原因。

### 📊 应用

- **Aero Realtime: Fully Aligned Input-Output Streams for Low-Latency Streaming Multimodal Generation** · [arXiv:2608.08469](http://arxiv.org/abs/2608.08469v1) · K. Zhang 等 — 让多模态模型在生成过程中持续接收新输入，实现真正的双工流式交互，而非轮流式 prefill-decode。

- **Deep Probabilistic Logic Programming for Diagnostic Reasoning from Incomplete Information: A Case Study in Stroke Detection** · [arXiv:2608.08561](http://arxiv.org/abs/2608.08561v1) · F. Weitkämper 等 — 将深度学习感知与概率逻辑编程结合，从不完整信息中做卒中检测，兼顾隐私保护与可解释性。

- **TrustRoboReward: Preference-Ordered Isotonic Score Editing for Multi-Paradigm Robot Reward Models** · [arXiv:2608.08491](http://arxiv.org/abs/2608.08491v1) · Y. Wang 等 — 用保序同位素回归修正 VLM 奖励模型的评分，提升机器人长程操作中奖励信号的可信度。

## 研究趋势信号

今日投稿显示：1）LLM 安全护栏从“微调表示”与“生成式裁判”转向冻结特征上的拓扑几何推理，以及可自进化的生产级防御；2）Agent Skills 生态进入大规模实证阶段，涉及 138K 技能文件的可复用性分析与恶意技能静态检测；3）推理效率优化向场景化、语义化压缩演进，如语音 KV Cache 与低秩压缩误差传播分析；4）更多“动态维度”评测出现，包括时间演化文档、多语言思维链一致性，反映社区对模型可靠性的更高要求。

## 值得精读

1. **HoloAegis** — 提出完全基于冻结表示与拓扑推理的零样本安全护栏，避开微调与生成式判断的高成本，是一种全新的安全对齐范式，值得全文阅读以理解其能力边界。

2. **FailForge** — 不同于传统拒绝采样只保留成功轨迹，该工作把反复失败当作知识来源，从失败中蒸馏程序性能力。对于代码智能体训练范式的改进有直接参考价值。

3. **Forgotten History or Test-of-Time? Retrospect and Prospect on RAG from an IR Perspective** — 从信息检索的历史脉络重新审视 RAG，帮助研究者在快速演进的 RAG 文献中获得更清醒的定位，避免“重新发明轮子”。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*