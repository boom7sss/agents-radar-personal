# ArXiv AI 研究日报 2026-09-10

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-10 10:02 UTC

---

# ArXiv AI 研究日报（2026-09-10）

## 今日速览

今日投稿呈现出两条清晰主线：一是**世界模型与具身智能的"可控化"**，Programmable World Model、Semigroup-JEPA、DUET-DINO 等工作试图让预测式模型显式维护世界状态并服从可编程规则；二是**评测与可靠性的"接地"转向**，从 IBIB 质疑以模型标识而非推理路径衡量企业 AI，到 AVSRBench、Candor-LR 指出语音基准的领域偏差。医疗 AI 依然是最大板块，覆盖少样本分割、OOD 检测、超声追踪漂移与联邦多模态诊断。方法层面，算法稳定性、语言极限生成、gap-entropy 猜想等理论工作集中出现，显示社区对基础保证的持续关注。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. ConvMem: Convolutional Memory for Long-Context Reasoning**
[http://arxiv.org/abs/2609.10441v1](http://arxiv.org/abs/2609.10441v1)
Hongming Zhang, Zhaozhen Gu, Fengshuo Bai et al.
针对 MemAgent 等分段阅读式长上下文方案中固定尺寸记忆的瓶颈，提出卷积式记忆更新机制，值得关注因为它直接触及长上下文推理的核心瓶颈。

**2. Building Multilingual Bridges: Data Mixing as the Pillar of Generalization for In-Language Reasoning**
[http://arxiv.org/abs/2609.10445v1](http://arxiv.org/abs/2609.10445v1)
Mehrnaz Mofakhami, Ananya Sahu, Alejandro R. Salamanca et al.
指出推理模型无论被何种语言提示都倾向用英语推理，并以数据混合作为泛化关键；对多语言部署有直接指导意义。

**3. Forgetting Only What Matters: Layer-Selective Unlearning toward Robust LLMs**
[http://arxiv.org/abs/2609.10439v1](http://arxiv.org/abs/2609.10439v1)
Ravi Ranjan, Olivera Kotevska, Agoritsa Polyzou
针对现有遗忘方法参数改动过宽或固定的问题，提出层级选择性遗忘，在隐私与合规压力下更具实用价值。

**4. Fortunate Recall: Ontology-Driven Memory Lifecycle Management for Persistent Coherence in LLMs**
[http://arxiv.org/abs/2609.10413v1](http://arxiv.org/abs/2609.10413v1)
Ansuman Mullick, Eray Tüzün
把记忆生命周期管理（哪些保留、哪些替换、以何速率）与事实行为类型挂钩，回应了当前记忆系统无界增长、检索精度下降的通病。

**5. Do speech foundation models really learn words?**
[http://arxiv.org/abs/2609.10434v1](http://arxiv.org/abs/2609.10434v1)
Robin Huo, Ewan Dunbar
重新审视自监督语音基础模型的表征能力究竟落在音素还是词层面，对语音 LLM 的 token 设计有基础性意义。

---

### 🤖 智能体与推理（规划、工具使用、多智能体）

**6. Programmable World Model**
[http://arxiv.org/abs/2609.10540v1](http://arxiv.org/abs/2609.10540v1)
Zheng-Hui Huang, Guixu Lin, Jiacheng Lin et al.
解耦世界状态与规则，使视频世界模型在长时间交互中保持状态持久并服从可编程规则，是今日最值得关注的世界模型工作。

**7. JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition**
[http://arxiv.org/abs/2609.10451v1](http://arxiv.org/abs/2609.10451v1)
Zixiang Chen, Yuheng Lu, Zihao Cheng et al.
面向跨设备工作流的 GUI 智能体，需处理中间结果传递与共享状态；填补了现有基准几乎只评单设备的空白。

**8. Show-Harness: Just a VLM Agent Can Play Robots**
[http://arxiv.org/abs/2609.10522v1](http://arxiv.org/abs/2609.10522v1)
Yanzhe Chen, Zechen Bai, Zhijun Cao et al.
通过紧凑语义接口把 VLM 的通用智能映射为机器人动作，提供了一条不依赖大规模机器人数据的选择路径。

**9. DUET-DINO: Simultaneous Cross-View World Modeling for Latent Planning in Robot Manipulation**
[http://arxiv.org/abs/2609.10506v1](http://arxiv.org/abs/2609.10506v1)
Nisarga Nilavadi, Ralf Römer, Moritz Reuss et al.
针对动作条件潜世界模型在精细空间与旋转动作上预测不可靠的问题，引入跨视角同时建模，面向完整 7-DoF 控制。

**10. Multi-Agent Reinforcement Learning for Autonomous UAV Exploration in Wildfire Response**
[http://arxiv.org/abs/2609.10433v1](http://arxiv.org/abs/2609.10433v1)
Caden Chandra, Jerry Ng
在模拟野火环境中训练 UAV 多智能体导航监测，属于多智能体强化学习的现实场景验证。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**11. IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier**
[http://arxiv.org/abs/2609.10494v1](http://arxiv.org/abs/2609.10494v1)
Blake Stenstrom, Charangan Vasantharajan, Brian Sathianathan
指出被审计的 18 个基准全部只衡量"广告中的模型标识"，而企业实际部署的是由权重、服务路径、精度、输出契约与 harness 共同决定的系统，并把这一偏差明确定义为测量误差。

**12. AVSRBench: A Multi-Condition AVSR Benchmark**
[http://arxiv.org/abs/2609.10366v1](http://arxiv.org/abs/2609.10366v1)
Rishabh Jain, Naomi Harte
在 LRS3 上 AVSR 已做到 sub-1% WER，该工作用六种条件评测三种架构，检验这究竟是真实泛化还是领域适配。

**13. Candor-LR: A Dyadic Conversational Dataset for Audio-Visual Speech Recognition**
[http://arxiv.org/abs/2609.10394v1](http://arxiv.org/abs/2609.10394v1)
Rishabh Jain, Aristeidis Papadopoulos, Zhaofeng Lin et al.
针对 LRS3 依赖干净、脚本化、排练过的语音这一问题，构建含重叠语音与自发话轮转换的双人对话数据集。

**14. IdeaAMBIG: Benchmarking Implementation-Critical Gaps in Research-Idea Specifications**
[http://arxiv.org/abs/2609.10539v1](http://arxiv.org/abs/2609.10539v1)
Yiling Ma, Yilun Zhao, Sihong Wu et al.
提出"可编码就绪度"概念，衡量研究方法描述是否足以被忠实实现，直指 AI 辅助科研流程中的关键缺口。

**15. Algorithmic stability via ensembling**
[http://arxiv.org/abs/2609.10428v1](http://arxiv.org/abs/2609.10428v1)
Rina Foygel Barber, Richard J. Samworth
提出通用框架量化任意平均式集成策略对数据扰动的稳定性，为集成方法提供统一的理论刻画。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. Cross-Model Agreement as a Deployment-Time Reliability Signal for Automatic Polyp Segmentation**
[http://arxiv.org/abs/2609.10495v1](http://arxiv.org/abs/2609.10495v1)
Siddharth Gupta, Jitin Singla
提出无参考的裁判式质量估计，用独立训练模型的间一致性在推理时捕捉"静默失败"，思路可迁移到其他临床分割任务。

**17. OmniMed-FL: A Robust Multimodal Federated Learning Framework for Clinical Diagnosis**
[http://arxiv.org/abs/2609.10364v1](http://arxiv.org/abs/2609.10364v1)
Ayush Debnath, Ruelia Saha, Sudip Misra
在 HIPAA/GDPR 限制集中聚合的前提下，同时利用医学影像与病历进行多模态联邦诊断。

**18. Retrofitting Code Using LLMs to Support Exceptional Behavior**
[http://arxiv.org/abs/2609.10397v1](http://arxiv.org/abs/2609.10397v1)
Linghan Zhong, Jiyang Zhang, Jayanth Srinivasa et al.
聚焦异常相关代码（throw、卫语句、try/catch）的自动补齐，是 LLM 代码改造中较少被覆盖但工程价值高的方向。

---

## 研究趋势信号

今日投稿显示"评测可信度"正在成为独立议题：IBIB 质疑模型标识作为度量单位，AVSRBench 与 Candor-LR 质疑基准本身的领域偏差，IdeaAMBIG 则把"描述是否足以实现"形式化。与此同时，世界模型研究从"生成逼真"转向"状态可维护、规则可编程"（Programmable World Model、Semigroup-JEPA、DUET-DINO），并明显向机器人控制收敛。医疗 AI 的重心也从提升精度转向部署期可靠性（跨模型一致性、漂移校正、OOD 检测）。理论侧则出现算法稳定性与语言极限生成的统一刻画。

---

## 值得精读

**1. Programmable World Model** — [http://arxiv.org/abs/2609.10540v1](http://arxiv.org/abs/2609.10540v1)
它正面回应了当前视频世界模型最实质的缺陷：交互延长后状态无法持久、规则无法约束。解耦世界状态与可编程规则这一设计若成立，会影响后续所有交互式世界模型与具身规划的架构选择。

**2. IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier** — [http://arxiv.org/abs/2609.10494v1](http://arxiv.org/abs/2609.10494v1)
以"全部 18 个被审计基准都测错了对象"作为出发点，把广泛存在的评测惯例重新定义为测量误差，并给出可报告协议。对企业选型与基准设计者而言，这是今日最具操作性的批评。

**3. AVSRBench: A Multi-Condition AVSR Benchmark** — [http://arxiv.org/abs/2609.10366v1](http://arxiv.org/abs/2609.10366v1)
把 sub-1% WER 究竟是泛化能力还是领域适配这一长期悬而未决的问题，转化为可控的六条件对照实验，方法简洁但对整个 AVSR 评测范式有冲击力；与同日的 Candor-LR 数据集配合阅读效果更佳。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*