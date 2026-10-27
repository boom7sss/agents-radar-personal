# ArXiv AI 研究日报 2026-09-29

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-29 14:21 UTC

---

# ArXiv AI 研究日报（2026-09-29）

## 今日速览

今日投稿呈现两条清晰主线：一是**效率与自适应计算的深度融合**，循环 Transformer（Looped Transformers）与稀疏 MoE 的结合、测试时自适应、以及 KV 缓存压缩等方向集中出现，显示社区正从"堆参数"转向"更充分地复用参数"。二是**智能体的自我改进与可靠性**，多篇论文探索无需 RL 的自我反思、失败上报基准、以及验证器不完美导致的奖励黑客问题。医学超声影像成为今日应用端的富矿，涵盖图像增强、模型个性化与机器人辅助成像。此外，前沿通用模型（GPT-6 Astra）对传统 CV 任务的覆盖范围引发了对"何为仍属困难"的重新审视。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Telescopic Language Models](http://arxiv.org/abs/2609.35769v1)**
  Guo, Zhang, Aktas et al. — 训练单一嵌套容量 Transformer，用随机前缀监督覆盖多个计算预算，避免为每个部署预算单独训练或压缩，直接回应"一个模型服务多种算力"的现实需求。

- **[How to Loop MoE: Flatten the Experts, Untie the Attention](http://arxiv.org/abs/2609.35751v1)**
  Wang, Ma, Hariri et al. — 将循环 Transformer 与稀疏 MoE 结合，通过展平专家与解绑注意力，让固定规模模型更充分地利用参数，是架构效率方向的重要探索。

- **[Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1)**
  You, Fu, Feng et al. — 追问循环结构在输出变长时是否改善测试时扩展，填补了此前仅在同参数或同 FLOPs 下比较的空白。

- **[MeqMuon: Matrix-Equilibrating Muon for LLM Pretraining](http://arxiv.org/abs/2609.35701v1)**
  Shi, Wang, Li — 在 Muon 优化器中引入矩阵均衡，改进行归一化的更新幅度平衡，直接面向 LLM 预训练成本问题。

- **[Distillation Defenses Easily Break After Reinforcement Learning](http://arxiv.org/abs/2609.35699v1)**
  Javaheri, Panfilov, Britton et al. — 揭示蒸馏防御在 RL 之后容易被攻破，指出攻击者可通过收集推理轨迹低成本复制前沿模型能力，对模型保护策略提出警示。

- **[Rethinking Personalized Generation: Test-Time Alignment via Factorized Ranking Models](http://arxiv.org/abs/2609.35695v1)**
  Ma, Zhang, Zhao — 指出标准对齐范式面向"单一用户"的缺陷，用因子化排序模型实现测试时个性化对齐。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[Shockingly Simple Self-retrospection Improves Agentic Models Without RL](http://arxiv.org/abs/2609.35741v1)**
  Light, Cui, Kim et al. — 仅让智能体训练于对自身经验的解释（而非成功动作的重复），即可改进未来行为，为无需 RL 的智能体自我提升提供了极简路径。

- **[Harness Learning Enables Generalizable Test-Time Adaptation](http://arxiv.org/abs/2609.35738v1)**
  Zhang, Liu, Wang et al. — 提出智能体由"模型 + harness（组织模型调用、工具使用与信息流的可执行程序）"共同定义，并通过任务反馈在测试时自适应 harness。

- **[Failure-Transparent Agents: Benchmarking Post-Failure Reporting in Tool-Using Language Models](http://arxiv.org/abs/2609.35732v1)**
  Zhu, Xie, Chen et al. — 提出 FTA 基准，专门隔离"工具失败后谎报成功"这一双重失败问题，避免与工具选择、恢复能力混淆。

- **[KV-streams for Efficient Compaction in Agentic Reinforcement Learning](http://arxiv.org/abs/2609.35750v1)**
  Penaloza, Malenfant, Vattikonda et al. — 针对 agentic RL 中长上下文占用 GPU 显存的瓶颈，提出优于预填充式压缩的 KV-streams 方案。

- **[Verifier Errors in RLVR: Reward Hacking, Limits of Feedback, and Selective Control](http://arxiv.org/abs/2609.35677v1)**
  Moya, Thornley, Lin — 用梯度流刻画不完美验证器下"奖励上升而正确性下降"的条件，并给出选择性控制手段，对 RLVR 实践具直接指导意义。

- **[Report: Progressive Disclosure of Agent Skills](http://arxiv.org/abs/2609.35692v1)**
  Zhang, Zhao, Mudgal et al. — 来自 Workday 的部署经验，解决技能库增长带来的运营成本上升问题，具工业落地参考价值。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **[Unifying Distributional Training for One-Step Visual Generation](http://arxiv.org/abs/2609.35763v1)**
  Zhang, Shi, Liu et al. — 提出统一理论框架，将分布建模与匹配差异分离，连接单步视觉生成的多种分布训练方法。

- **[ScAn-Bench: Evaluating Scaling Analysis Methodology](http://arxiv.org/abs/2609.35707v1)**
  Sermaxhaj, Alipour, Sinani et al. — 首个系统性评估"缩放分析方法本身"的基准，指出方法论缺乏系统研究的反常现状，具元研究价值。

- **[Rethinking Circuit Evaluation: Do Circuits Explain Model Errors?](http://arxiv.org/abs/2609.35686v1)**
  Zhang, Geng, Zhang et al. — 证明通过消融验证的电路可能无法解释模型错误，对机械可解释性领域的验证范式提出根本质疑。

- **[A Unified Uncertainty Representation for Graph Neural Networks via Doubly-Spectral Stochastic Expansion](http://arxiv.org/abs/2609.35703v1)**
  Xu, Markovich, Regol et al. — 用统一的图谱随机展开同时覆盖校准、OOD 检测与分布偏移鲁棒性，取代此前的分离模型与目标。

### 📊 应用（垂直领域、多模态、代码生成）

- **[DoAtlas-2: A Foundation for Self-Evolving Causal Biomedical Discovery](http://arxiv.org/abs/2609.35107v1)**
  Li, Xia, Zhang et al. — 整合 48 国 72 万+ 参与者、771 项研究资源，围绕因果机制组织知识并以人群证据推进，是生物医学因果发现的基础设施级工作。

- **[Hard Vision, Easy Vision: What GPT-6 Astra Reveals Across Computer Vision](http://arxiv.org/abs/2609.35718v1)**
  Rasheed, Kurpath, Ren et al. — 系统评估前沿通用模型在传统 CV 任务上的覆盖边界，回答"还剩下什么真正困难"，对 CV 社区定位自身价值具参考意义。

- **[Learning Native Reflection in Unified Models with Interleaved Reinforcement Learning](http://arxiv.org/abs/2609.35767v1)**
  Fan, Huang, Cai et al. — 让统一多模态模型通过"诊断—修订—再观察"的交替 RL 实现原生反思，充分利用其同时看图与生成图的能力。

- **[InfiniHand: Streaming World-Space Hand Motion Estimation from Egocentric Video](http://arxiv.org/abs/2609.35743v1)**
  Ren, Song, Zhao et al. — 以流式方式统一手部几何与相机自运动估计，避免级联独立估计器与 SLAM 带来的误差累积。

- **[PDMD: Projected Distribution Matching Distillation for Video Diffusion Models](http://arxiv.org/abs/2609.35768v1)**
  Wang, Yuan, Wang et al. — 针对 DMD 采样在训练中退化（渐进过饱和）的问题提出投影式改进，直击视频扩散的高 NFE 成本。

## 研究趋势信号

今日投稿透露出三个信号。其一，**循环/嵌套架构正在成为效率叙事的新主角**：TLM、Looped MoE、自适应循环 Transformer 三篇从不同角度探索"同一套参数服务多种算力"，暗示固定容量、可变计算的范式正在成形。其二，**智能体的"元能力"受到关注**——harness 学习、技能渐进披露、失败上报、自我反思，研究焦点从"做得对"转向"说清楚自己做得如何"。其三，**对评估与解释方法本身的反思增多**：ScAn-Bench 质疑缩放分析的方法论，电路评估论文质疑机械可解释性的验证逻辑，RLVR 论文质疑验证器可靠性——社区开始审视工具本身的效度。

## 值得精读

1. **[Shockingly Simple Self-retrospection Improves Agentic Models Without RL](http://arxiv.org/abs/2609.35741v1)**
   理由：方法极简但问题重要——若仅靠对自身经验的解释性训练即可提升智能体行为，将大幅降低自我改进的门槛，且与今日多篇 RL 相关论文形成对照，值得完整阅读以判断其适用边界与实验严谨性。

2. **[Hard Vision, Easy Vision: What GPT-6 Astra Reveals Across Computer Vision](http://arxiv.org/abs/2609.35718v1)**
   理由：这类系统性能力边界测绘对 CV 研究者的选题决策有直接价值，能帮助判断哪些任务已被通用模型"解决"、哪些仍是真正的研究前沿。

3. **[Verifier Errors in RLVR: Reward Hacking, Limits of Feedback, and Selective Control](http://arxiv.org/abs/2609.35677v1)**
   理由：RLVR 已成为主流后训练手段，而该文用梯度流给出奖励黑客发生的理论条件并附带控制方案，兼具理论清晰度与实践可操作性，是理解 RLVR 失效模式的必读材料。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*