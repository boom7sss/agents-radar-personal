# ArXiv AI 研究日报 2026-09-17

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-17 12:05 UTC

---

# ArXiv AI 研究日报（2026-09-17）

## 今日速览

今日投稿最密集的方向是**智能体（Agent）系统化落地**：从工具调用的服务系统优化、Agent 基准压缩、界面设计到多智能体协调与安全，都出现了成体系的工程与研究方案。其次，**LLM 训练与对齐的底层机制**继续深化，包括零阶偏好对齐、tokenizer 目标/搜索的解耦分析、以及 MoE 专家剪枝的新思路。值得注意的第三个信号是**生成式数据与合成训练的可靠性问题**，涵盖防止模型崩溃的 Fisher-Rao 视角、奖励黑客的内部表征监测，以及视频/音频生成用于力感知数据生成。医学与科学领域应用（超声、EHR、粒子物理事件重建）也形成了清晰的多模态+物理约束路线。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Objective vs. Search: Decomposing What Makes a Good Tokeniser**
http://arxiv.org/abs/2609.19145v1
Ahmetcan Yavuz, Clara Meister, Tiago Pimentel
将 BPE 与 UnigramLM 的差异拆解为"优化目标（压缩 vs 对数似然）"与"搜索过程（自底向上合并 vs 自顶向下剪枝）"两个正交维度，为 tokenizer 设计提供了清晰的归因框架。

**2. A Zeroth-Order Paradigm for LLM Preference Alignment**
http://arxiv.org/abs/2609.19144v1
Peter Chen, Xi Chen, Wotao Yin et al.
针对似然位移问题，提出用零阶方法从偏好对中提取信息，为直接偏好对齐提供了新的优化视角。

**3. Higher-order pruning of experts in mixture-of-experts language models**
http://arxiv.org/abs/2609.18916v1
Alex M. Tseng, Prannay Kaul, Luca Zancato et al.
指出既有专家剪枝方法忽略了专家间的相关性，提出高阶剪枝以缓解 MoE 的内存瓶颈。

**4. How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents**
http://arxiv.org/abs/2609.19107v1
Zixi Chen, Akshay Vegesna, Samip Dahal et al.
挑战"架构只改系数不改指数"的常规认知，展示架构干预可改变预训练 scaling 指数，具有较强理论冲击力。

**5. Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data**
http://arxiv.org/abs/2609.18878v1
Matteo Marchi, João Pedro Silvestre, Bahman Gharesifard et al.
用 Fisher-Rao 几何视角分析递归合成数据训练导致的模型崩溃，为合成数据治理提供了理论工具。

**6. Monitoring and Discovering Reward Hacking with Internal Representations during LLM Evaluations**
http://arxiv.org/abs/2609.19101v1
Leon Bergen, Usha Bhalla, Andrew Lee et al.
探究奖励黑客行为是否在前沿开源 LLM 内部表征中留下可识别信号，并说明如何据此进行监测。

---

### 🤖 智能体与推理（规划、工具使用、多智能体）

**7. Ask the Tool, Don't Guess: Agent Tool Calls Hold Their Progress, and the Serving System Should Read It**
http://arxiv.org/abs/2609.18849v1
Yipeng Liu, Yingqiang Zhang, Feifei Li et al.
指出服务系统不应靠工具名或历史"猜测"工具运行时长来决定 KV cache 去留，而应直接读取工具调用进度，直击 Agent 推理的服务效率瓶颈。

**8. In-Context Robot Learning with VLM Agents**
http://arxiv.org/abs/2609.19138v1
Dongzhou Cheng, Taoran Yi, Ye Fang et al.
面向部署时的上下文学习能力，让机器人 VLM Agent 适应未见环境，回应"有限演示无法覆盖所有情形"的核心泛化难题。

**9. Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments**
http://arxiv.org/abs/2609.19128v1
João Meneses dos Santos, Arlindo L. Oliveira
在 SwiftSage 双过程 Agent 上加入记忆与自反思两个模块化认知扩展，针对长时程状态跟踪与失败恢复的脆弱性。

**10. Social Laws for Multi-agent Coordination in Stochastic Environments**
http://arxiv.org/abs/2609.18929v1
Rolando Fernandez, Caleb Probine, Tyler Lee et al.
将社会法则（social laws）从确定性目标设定扩展到随机环境，为多智能体防干扰与鲁棒协调提供新框架。

**11. Flag Game: A Toy Model for Mechanistic Swarm Interpretability**
http://arxiv.org/abs/2609.19124v1
Elizabeth Pavlova, Hidenori Tanaka
提出一个玩具模型研究 AI 群体中信念的快速形成与传播，为集体对齐的机制可解释性提供分析入口。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**12. Beyond Outcomes: Dual-View Relational Learning for Efficient Agent Benchmarking**
http://arxiv.org/abs/2609.18909v1
Xinshuai Guo, Junjie Wu, Dolly Deng et al.
针对 Agent 基准评估成本高昂的问题，从任务-模型关系结构而非仅最终分数分布建模冗余，推动基准压缩。

**13. ScienceIDE: Turning World's Scientific Codebase into Agent Learnable Environments**
http://arxiv.org/abs/2609.19134v1
Hejia Geng, Zesen Huang, Haoyang Li et al.
把科学代码仓库转化为 Agent 可学习环境，直面工具链碎片化、领域隐含约定与专用正确性标准带来的"科学代码学习"挑战。

**14. Affora: A Design System for Agent-Friendly Interfaces**
http://arxiv.org/abs/2609.19125v1
Jin Gao
提出兼顾人类与机器可读性的设计系统，让计算机使用型 Agent 更清楚地理解动作与任务状态，附三项对照研究。

**15. Probabilistic Linear Explanations**
http://arxiv.org/abs/2609.19077v1
Frederic Koriche, Jean-Marie Lagniez, Chi Tran
针对溯因解释特征过多超出人类认知、概率松弛又多限于分类的问题，提出概率线性解释方法。

---

### 📊 应用（垂直领域、多模态、代码生成）

**16. STUNet-Fusion: Spatiotemporal Needle-Tip Localization in Ultrasound Video via Multi-Channel Motion Fusion**
http://arxiv.org/abs/2609.18546v1
Chia-Chi Hsu, Chia-Hsuan Hsu, Che-Chou Shen
针对针尖在超声中信号弱、不连续、受伪影干扰的问题，提出多通道运动融合的时空定位框架。

**17. Decodable but Misrouted: Sparse Features Uncover a Readout Gap in Vision-Language Models for Harmful Meme Detection**
http://arxiv.org/abs/2609.18860v1
Girish A. Koushik, Diptesh Kanojia, Helen Treharne
用稀疏自编码器与因果干预区分"缺失内部证据"与"证据无法路由到输出"两类失败，对多模态安全评测有方法学价值。

**18. MUSE: Benchmarking Large Vision-Language Models on Multi-Modal Understanding in Situated Education**
http://arxiv.org/abs/2609.19088v1
Luyao Zhu, Xun Wei Yee, Wei Li et al.
首个聚焦教育场景（含艺术图像的语义、情感与文化语境）的 VLM 多模态理解基准，填补评估空白。

**19. EviGen: Predictive Evidence Scaffolding for Verifiable Clinical Rationale Generation**
http://arxiv.org/abs/2609.18852v1
Fengnan Li, Heman Burre, Liwen Sun et al.
面向纵向 EHR 的可验证临床推理生成，在临床审查不可行、LLM 处理成本高的约束下构建证据脚手架。

**20. Comprehensive reconstruction of collider events with hypergraph representation learning and graph-conditioned diffusion**
http://arxiv.org/abs/2609.18928v1
Lining Mao, Yvonne Peters, Ethan Simpson et al.
将粒子对撞事件重建分解为子任务，并用超图表示学习+图条件扩散完成，是 AI4Science 中结构化生成的代表。

---

## 研究趋势信号

今日投稿显示三条清晰脉络。其一，**Agent 从"能不能用"转向"如何可靠服务与评估"**：服务系统读取工具进度、基准压缩、界面可读性、RAN 中智能体仲裁等，说明研究重心正移向系统级工程与安全性。其二，**合成数据与自训练的可靠性成为显学**：从 Fisher-Rao 视角防模型崩溃、奖励黑客内部表征监测，到用视频/音频生成为接触密集型操作补充力信息，都在回应"生成数据能信到什么程度"。其三，**机制可解释性向多智能体与多模态扩展**：群体可解释性玩具模型、稀疏特征揭示 VLM 读出路缺失，标志着可解释性研究正走出单模型范畴。

---

## 值得精读

**1. How Model Growth, Recursion, and Boundary Operators Influence Scaling Exponents**
http://arxiv.org/abs/2609.19107v1
若"架构干预可改变 scaling 指数"成立，则直接挑战当前以固定指数外推算力-性能的主流实践，对预训练资源配置具有根本性影响，理论与实证都值得细读。

**2. Ask the Tool, Don't Guess: Agent Tool Calls Hold Their Progress, and the Serving System Should Read It**
http://arxiv.org/abs/2609.18849v1
Agent 推理的墙钟时间与 KV cache 显存占用是当前部署的真实成本中心，该文把"猜测工具时长"改为"读取真实进度"，思路直接、工程可落地，值得系统方向读者完整阅读。

**3. Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data**
http://arxiv.org/abs/2609.18878v1
合成数据已是大模型训练的常态，模型崩溃是长期隐性风险。该文提供几何化的动力学分析框架，对数据策略制定者与训练理论研究者均具参考价值。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*