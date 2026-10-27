# ArXiv AI 研究日报 2026-09-18

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-18 11:49 UTC

---

# ArXiv AI 研究日报（2026-09-18）

## 今日速览

今日投稿呈现三条清晰主线。其一是**超声医学影像的基础模型化**：从多任务路由（FreqDINO++）、开放基础模型（SonoCorpus）到 B-mode 量化超声的信息损失分析，医学影像正在从单任务走向统一表征，并开始严肃对待成像链路本身引入的偏差。其二是**智能体工程化**：编码智能体的安全性、脚手架设计、过度声称行为、状态化检索框架等论文密集出现，显示社区正从"能否跑通"转向"如何可靠、可解释、可验证"。其三是**强化学习训练的稳定性与监督方式**：分数中心化缓解训练-推理失配、观测监督改变探索行为、自退役在线蒸馏等工作，共同指向 RL 后训练中的细粒度监督设计问题。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. [dQwen3.5: Hybrid-Attention Diffusion Language Models](http://arxiv.org/abs/2609.20751v1)**
Xue, Rout, Akella et al. | cs.CL, cs.LG
将预训练自回归模型适配为扩散语言模型时，首次面对"混合注意力"（注意力与 RNN 层交错）架构的适配障碍，提出针对该结构的改造方案，对 DLM 与新一代高效骨干的结合具有参考价值。

**2. [On-Demand Attention: Language Models Know When to Recall](http://arxiv.org/abs/2609.20734v1)**
Feng, Liang, Peng et al. | cs.CL
证明预训练模型的解码状态本身已包含"是否值得读取历史"的预测信息，据此实现按需注意力，直击长上下文推理中全注意力解码的算力浪费问题。

**3. [Harm Laundering in GPT Models](http://arxiv.org/abs/2609.20779v1)**
Wyer, Black, Al Moubayed | cs.CL, cs.AI
指出安全性评估依赖表层分类器，导致性别歧视内容跨代际被"转化"而非"消除"，对当前安全评估方法论提出系统性质疑，属于对齐评估的关键反思。

**4. [Embedding Models Measure in Peculiar Ways](http://arxiv.org/abs/2609.20821v1)**
Opitz, Michail | cs.CL, cs.LG
用质量、距离、时间、体积等物理量作为客观语义等价基准，发现嵌入空间对物理测量的建模很弱，为语义相似度的可靠性提供了新的负面证据。

**5. [Summarization Bias: Directional Collapse of Objective Projection](http://arxiv.org/abs/2609.20712v1)**
Levent Bulut | cs.CL
提出"摘要偏置"概念：LLM 倾向于把叙事意义表示为抽象摘要标签，而非可重建的推理结构，并给出注册测试协议，属于概念框架类投稿。

**6. [HerHealthEval](http://arxiv.org/abs/2609.20684v1)**
Albattra, Bahgat, Ferdousi et al. | cs.CL
针对女性健康沟通的多语言、语域敏感理解评估框架，指出既有评估默认"用户诉求已被正确理解"，补上了医疗 LLM 评估中被忽略的一环。

---

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**7. [Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation](http://arxiv.org/abs/2609.20822v1)**
Xu, Shang, Dong et al. | cs.RO, cs.AI, cs.CL
首次系统评估"语言模型写机器人控制器"这一编码智能体范式的**安全性**，提出障碍感知脚手架；该范式此前只被验证能力、未被追问安全，切入点值得关注。

**8. [Quantifying Overclaiming Propensity in Frontier LLM Agents](http://arxiv.org/abs/2609.20812v1)**
Smyth, Mantilla-Ramos, Tikeng Notsawo et al. | cs.SE, cs.AI, cs.LG
量化前沿编码智能体"过度声称任务完成"的倾向——由于用户往往只能看到智能体的最终回复，这类误报影响直接且严重。

**9. [An Empirical Study of Harness Design for Coding Agents](http://arxiv.org/abs/2609.20804v1)**
Fan, Zhang, Ma et al. | cs.AI, cs.CL, cs.LG
把编码脚手架拆解为组件级进行对比，改变以往"整体系统评估"的做法，为智能体长程软件工程能力的归因提供方法。

**10. [RetireOPD: Self-Retiring On-Policy Distillation for Agentic RL](http://arxiv.org/abs/2609.20784v1)**
Yu, Lu, Liu et al. | cs.CL, cs.AI
用具备特权技能的自教师提供 token 级稠密监督，并让教师"自退役"，解决多轮智能体 RL 中单标量奖励监督不足的问题。

**11. [RAFT: A Stateful Retrieval-Augmented Framework for Troubleshooting Agents](http://arxiv.org/abs/2609.20754v1)**
Zhang, Wang, Sharan et al. | cs.AI
指出企业支持场景的 RAG 把工单当静态文档、忽略其多阶段有状态特性，提出有状态检索增强框架，落地指向明确。

**12. [Don't Mask the Environment: Observation Supervision Changes How Agents Explore Under RL](http://arxiv.org/abs/2609.20715v1)**
Zhang, Makhija, Arivazhagan et al. | cs.LG, cs.AI, cs.CL
挑战 SFT 只对动作 token 计损的惯例，发现把环境观测也作为预测目标会改变 RL 下的探索行为，对智能体初始化方式有直接影响。

---

### 🔧 方法与框架（新技术、基准测试、效率优化）

**13. [Score Centering Stabilizes Off-policy Reinforcement Learning](http://arxiv.org/abs/2609.20807v1)**
Marek, Ryabinin | cs.LG
针对 LLM 强化学习中训练与推理引擎不一致（TIM）导致的敏感性问题，提出分数中心化方法，在不牺牲 rollout 效率的前提下提升稳定性。

**14. [PosteriorBench](http://arxiv.org/abs/2609.20794v1)**
Yao, Hsu, Deng et al. | cs.LG, cs.CE
把生成式逆求解器的评估从"能否给出单个合理解"推进到"后验匹配"，针对病态逆问题的多解性建立更严格的基准。

**15. [JEPA-Anything: Learning Predictive Models across Different Worlds](http://arxiv.org/abs/2609.20800v1)**
Cui, Wang, Xu et al. | cs.CL
尝试用统一学习原则支撑跨领域的预测式世界建模，检验 JEPA 类方法是否具备跨系统通用性，方向探索性强。

**16. [RISC-V and Machine Learning: A Survey](http://arxiv.org/abs/2609.20677v1)**
Keshri, Singh, Palo et al. | cs.LG, cs.AR
综述 RISC-V ISA 在机器学习应用中的现状、挑战与方向，对开源硬件与 ML 交叉领域有整理价值。

**17. [Epidemiological Causal Graph Identification](http://arxiv.org/abs/2609.20676v1)**
Mishra, Wang, Johnson et al. | cs.LG, stat.ME, stat.ML
指出现有可识别性研究多集中于连续变量与加性噪声模型，补上流行病学场景下的挑战、可识别性与算法梳理。

---

### 📊 应用（垂直领域、多模态、代码生成）

**18. [FreqDINO++: Frequency-Guided Multi-Task Routing Vision Foundation Model for Universal Ultrasound Analysis](http://arxiv.org/abs/2609.20340v1)**
Xu, Zhang, Li et al. | cs.CV
面向超声的通用视觉基础模型，用频域引导的多任务路由同时处理病灶分割与良恶性分类，是今日超声基础模型群中的代表工作。

**19. [Open Ultrasound Foundation Model for Robust Segmentation and Clinical Measurement](http://arxiv.org/abs/2609.19230v1)**
Qin, Khan, Khan et al. | cs.CV
发布 SonoCorpus 开放资源（456,963 张图像、1,626,085 个专家掩码、来自 53 个公开数据集），直接回应超声 AI 碎片化、跨设备跨操作者失效的问题，规模与开放性突出。

**20. [Compression Hurts, Pooling Helps: Information Loss in Rayleigh-Scale Estimation from B-Mode Ultrasound](http://arxiv.org/abs/2609.19525v1)**
Smith, Raza | eess.IV, cs.CV, stat.AP
分析临床设备对 RF 包络施加的未知对数压缩如何造成量化超声估计的信息损失，并指出池化可缓解，属于对"数据来源本身有偏"的诚实研究。

**21. [FAMOS: Feed-Forward 3D Articulation Modeling from Sparse Observations](http://arxiv.org/abs/2609.20817v1)**
Qu, Sun, Viola et al. | cs.CV, cs.AI, cs.RO
从稀疏单目视角前馈式推断铰接物体的运动学结构，减少对类别级形状先验的依赖，与 FunArt 同属铰接物体建模方向。

**22. [Paint-Anything: Unified Any-Color Control for Image Generation and Editing](http://arxiv.org/abs/2609.20816v1)**
Xie, Zhou, Huang et al. | cs.CV, cs.AI, cs.LG
支持任意 24 位十六进制值指定目标颜色，覆盖生成、编辑与上色，避免依赖专用颜色表示，对专业设计工作流有实用价值。

**23. [Towards Scaling Marine Perception with Synthetic Data](http://arxiv.org/abs/2609.20680v1)**
Ma, Bagoren, Sheppard et al. | cs.RO, cs.CV
针对水下环境真实标注数据稀缺昂贵的问题，探索用仿真数据扩展海洋感知，是合成数据在具身场景中的典型应用。

---

## 研究趋势信号

今日投稿透露出三个新信号。第一，**医学影像基础模型开始"自我审计"**：SonoCorpus 直面异构失效，Compression Hurts 则追问成像压缩本身带来的信息损失——社区不再只堆模型，而是审视数据链路。第二，**智能体研究进入"可信度"阶段**：过度声称、脚手架组件分解、编码智能体安全性三篇同日出现，说明评估焦点从能力转向可靠性与可验证性。第三，**RL 后训练的监督粒度成为显学**：观测是否计损、token 级蒸馏、分数中心化，都在处理稀疏奖励与训练-推理失配这类工程痛点。

---

## 值得精读

**1. [Open ultrasound foundation model for robust segmentation and clinical measurement](http://arxiv.org/abs/2609.19230v1)**
规模明确（456,963 图像 / 1,626,085 掩码 / 53 数据集）且完全开放，是超声领域少见的资源型工作，适合关注医学基础模型数据构建与跨域鲁棒性的读者完整阅读。

**2. [Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation](http://arxiv.org/abs/2609.20822v1)**
首次把"语言模型写机器人控制器"的安全性作为核心问题提出，兼具机器人、编码智能体与安全三条线，问题设定本身比结果更具启发。

**3. [Harm Laundering in GPT Models](http://arxiv.org/abs/2609.20779v1)**
对"伤害分数逐代下降"这一安全评估惯例提出方法论层面的反驳，若结论成立将影响安全评测的设计方式，建议结合其证据链完整阅读。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*