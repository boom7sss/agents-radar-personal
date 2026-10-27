# ArXiv AI 研究日报 2026-10-14

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-10-14 14:02 UTC

---

# ArXiv AI 研究日报（2026-10-14）

## 今日速览

今日投稿最突出的主线是 **"智能体自进化"（Recursive Self-Improvement）**：从机器人物理经验的自我改进、智能体脚手架（harness）的自我修改，到遥感任务的全自动化建模，多篇工作试图让 AI 系统在固定模型权重下持续改进自身流程。其次是 **具身与机器人评测基础设施的密集出现**——LIBERO-RIG、WorldOracle、Plan-Bench、SEAR 等基准共同指向"泛化与可靠性如何被量化验证"。方法层面，**视频/多模态模型的系统性诊断**成为热点：重复动作计数（RepProbe）、全模态视频理解（OmniCompass）、几何一致性（GAD）等基准与诊断工作揭示了当前模型的能力盲区。此外，**效率与优化**持续受关注，包括流匹配的在线最优传输、像素空间扩散的 MoE 扩展、以及 LLM 温度选择的可解释化。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Hybrid Reasoning Agents](http://arxiv.org/abs/2610.18861v1)** — Zou, Qi, Chen et al.
  融合文本推理与隐空间推理，使智能体既能高效内部思考、又保留工具调用与推理透明度，是连接 latent reasoning 与工具使用的重要尝试。

- **[DoubtLess: Training-Free Contrastive Decoding for Efficient Reasoning](http://arxiv.org/abs/2610.18862v1)** — Luo, Chen
  无需额外训练即可缩短思维链长度，避免逐模型训练或固定 steering vector 的代价，对推理成本控制有直接实用价值。

- **[Two Clocks: Why Larger Rollout Batches Learn Slower but Fail on Schedule in RLVR](http://arxiv.org/abs/2610.18853v1)** — Li, Quan, Qiu et al.
  重新审视 RLVR 中"大批量 rollout + 平方根学习率缩放"的经验法则，揭示其在实践中的失效机制，对 RLHF/RLVR 训练配置有指导意义。

- **[Where Do LLM Ensemble Gains Come From?](http://arxiv.org/abs/2610.18786v1)** — Donghwan Kim
  将 LLM 集成增益分解为候选价值、多样性与聚合三部分，指出增益测量高度依赖基线选择，为集成评估提供更严格的方法论。

- **[Read the Room Before Your Model Generates](http://arxiv.org/abs/2610.18820v1)** — Kong, Lin
  用几何可解释的方式替代固定启发式温度设置，试图解决 LLM 采样随机性缺乏原则性控制的问题。

- **[Depth Memory](http://arxiv.org/abs/2610.18809v1)** — González-Martínez, Nazari, Rusch et al.
  提出比残差连接更表达力强的深度聚合机制，是对网络"深度信息流"设计的基础性探索。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[Self-Evolving Agent Harness](http://arxiv.org/abs/2610.18813v1)** — Wei, Guan, Zhu et al.
  形式化"脚手架自进化"过程：在冻结模型权重的前提下迭代修改提示、记忆与工作流，是 RSI 议题在智能体工程层的系统化表述。

- **[Tev: Scaling Long-Horizon Agentic Environments with Dense Progress Rewards](http://arxiv.org/abs/2610.18868v1)** — Hu, Pramanick, Singh et al.
  以密集进度奖励扩展长时程智能体环境，直接针对开源模型在数小时至数天任务上的短板。

- **[Pack Light, CarryOn: Building Object-Oriented Context for Long-Horizon Agents](http://arxiv.org/abs/2610.18784v1)** — Lu, McAuley, Zhang
  将长时程上下文围绕"可复用进展"而非交互历史组织，是对 agent 上下文膨胀问题的结构性思考。

- **[BLADE: Auditing Information Use for Failure Attribution in LLM Multi-Agent Systems](http://arxiv.org/abs/2610.18780v1)** — Guo, Long, Zhang
  通过审计信息使用而非仅看输出，定位多智能体系统中的失败归因，弥补协作带来的诊断困难。

- **[SkillScaffold: Scaffolding Agentic RL with Policy-Adaptive Skill Credit Assignment](http://arxiv.org/abs/2610.18807v1)** — Zhong, Wang, Yuan et al.
  解决技能型 RL 中技能标注假设过强的问题，以自适应信用分配与选择性注入提升多轮交互学习效率。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **[Scaling Online Optimal Transport Minibatches for Flow Matching](http://arxiv.org/abs/2610.18838v1)** — Chen, Levine
  用在线小批量最优传输替代独立随机配对，缓解流匹配训练与积分中的不稳定性，属生成建模基础方法改进。

- **[PixelMoE: Scaling Pixel-Space Diffusion with LLM-Style MoE](http://arxiv.org/abs/2610.18857v1)** — Dong, Bao, Luan et al.
  将 MoE 引入像素空间扩散，解耦模型容量与激活计算，为无 tokenizer 的高分辨率生成提供扩展路径。

- **[LIBERO-RIG: A Hardware-Setup Robustness Benchmark for VLA Models](http://arxiv.org/abs/2610.18843v1)** — Cui, Wang, Wang et al.
  仅扰动机器人硬件配置（相机移位、标定漂移、控制频率、末端磨损），填补 VLA 部署鲁棒性评测空白。

- **[WorldOracle: Benchmarking Action-Conditioned World Models against Real-World Executions](http://arxiv.org/abs/2610.18826v1)** — Duan, Chen, Wang et al.
  以真实执行配对验证动作条件世界模型的预测保真度，为世界模型评测建立"现实对照"标准。

- **[RepProbe: Can Video Language Models Count Repeated Actions?](http://arxiv.org/abs/2610.18844v1)** — Khoshnoodi, Bargal
  42K 规模诊断基准揭示视频语言模型能流畅描述动作却无法可靠计数，暴露时序枚举能力的结构性缺陷。

- **[GAD: Geometry Attention Distillation for Consistent Video Generation](http://arxiv.org/abs/2610.18779v1)** — Ni, Zhu, Jiang et al.
  诊断出视频注意力无法建立跨帧可靠对应，并以几何注意力蒸馏改善长时程场景结构一致性。

- **[Exact Topological Compliance: Generating Persistence-Equivalent Graphs](http://arxiv.org/abs/2610.18856v1)** — Ji, Roy, Garg
  摆脱软正则化的近似拓扑生成，实现持久同调意义上的精确等价，方法上有较强理论保证。

### 📊 应用（垂直领域、多模态、代码生成）

- **[SEAR: Self-Evolving Agentic Robotics](http://arxiv.org/abs/2610.18792v1)** — Wang, Li, Wang et al.
  框架 + 基准双重贡献，追问"智能体是否真的在学习"，对 agentic robotics 的自我提升叙事提出可验证的质疑。

- **[Who Improves the Robot? Toward Physical Recursive Self-Improvement](http://arxiv.org/abs/2610.18842v1)** — Zhou, Yang, Chen et al.
  提出 Physical RSI 概念，让物理经验同时更新机器人能力与其改进流程，是 RSI 从软件走向具身的重要一步。

- **[ChunkAct: Action Chunking for Agentic Robotics](http://arxiv.org/abs/2610.18874v1)** — Xu, Bao, Liu et al.
  针对 LLM 智能体置于机器人控制回路时的效率瓶颈，以动作分块降低感知-运动-VLA 工具组合的开销。

- **[AesCode: Aesthetic Code Generation with Decoupled Cross-Modal Rewards](http://arxiv.org/abs/2610.18860v1)** — Gao, Yang, Li et al.
  用解耦的跨模态奖励让代码模型"看见"布局与配色的画布效果，弥补幻灯片/海报类代码生成的美学盲区。

- **[The Last Remote Sensing Model Built by Humans?](http://arxiv.org/abs/2610.18845v1)** — Zhao, Zhou, Qi et al.
  将任意可验证的遥感任务抽象为 harness + verifier，让智能体自动完成建模循环，是 RSI 在 EO 领域的激进落地。

- **[Joint Neural Posterior Estimation and Model Selection for Chemical Reaction Networks](http://arxiv.org/abs/2610.18825v1)** — Esquivel, Campos-Gonzalez-Angulo et al.
  同时解决反应路径判别与速率常数估计两个耦合难题，替代高成本的 SMC-ABC 类方法。

- **[Back-Translation Still Matters](http://arxiv.org/abs/2610.18818v1)** — Bathla, Singla, Singla
  验证在 LLM 时代，低资源语言单语数据经回译仍能显著提升翻译质量，对低资源 MT 实践有直接价值。

## 研究趋势信号

今日投稿显示两条交汇的暗流。其一是**"自进化"话语的快速扩散与自我校正**：从 harness 自修改、遥感任务自动建模、到机器人物理自我改进，RSI 概念正被多领域借用；但 SEAR、WorldOracle、Trust Before Autonomy 同时强调"是否真的在学""答案是否可信"，表明该领域正从叙事走向严格验证。其二是**视频与多模态理解的"能力盲区测绘"**：RepProbe、OmniCompass、GAD、Plan-Bench 共同指向——当前模型在流畅生成背后，缺乏可靠的时序枚举、跨帧对应与物理规划能力。两条线索都指向同一判断：**扩张之后，评估与自我审计正在成为新的竞争焦点。**

## 值得精读

1. **[SEAR: Self-Evolving Agentic Robotics](http://arxiv.org/abs/2610.18792v1)**
   在"智能体自我改进机器人"叙事正热的当下，这篇同时给出框架与基准并直接追问"agent 是否真在学、学到的东西能否泛化"，是评估这一波 RSI 热潮可信度的关键参照。

2. **[Two Clocks: Why Larger Rollout Batches Learn Slower but Fail on Schedule in RLVR](http://arxiv.org/abs/2610.18853v1)**
   挑战已被广泛采用的平方根学习率缩放经验法则，理论联系实践，对任何进行 RLVR/RLHF 训练的研究者都有直接的配置指导意义。

3. **[RepProbe: Can Video Language Models Count Repeated Actions?](http://arxiv.org/abs/2610.18844v1)**
   以 42K 数据集干净地切出一个被长期忽视的能力维度——时序重复计数，揭示了"描述流畅"与"精确枚举"之间的根本鸿沟，方法简洁、结论锐利。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*