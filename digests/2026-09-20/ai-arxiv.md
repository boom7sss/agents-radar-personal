# ArXiv AI 研究日报 2026-09-20

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-20 12:37 UTC

---

# ArXiv AI 研究日报（2026-09-20）

## 今日速览

今日投稿呈现两大集中趋势：一是**医学超声 AI 的"基础模型化"**，从通用分割到多任务路由、自监督预训练目标选择，超声领域正在复制自然图像的 foundation model 路径；二是**智能体可靠性与评估的深化**，多篇论文关注编码智能体的"过度声称"（overclaiming）、harness 组件级分析与安全操作。此外，线性/混合注意力架构持续渗透（扩散语言模型、视频生成、长上下文推理），而"记忆"成为 4D 基础模型与机器人策略的新焦点。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. dQwen3.5: Hybrid-Attention Diffusion Language Models**
[arXiv:2609.20751](http://arxiv.org/abs/2609.20751v1)
Anton Xue, Litu Rout, Aditya Akella et al.
核心贡献：从混合注意力（attention + RNN）自回归模型适配扩散语言模型。值得关注在于它填补了"扩散 LLM 几乎都基于全注意力"的空白，与 AR 架构演进趋势对齐。

**2. On-Demand Attention: Language Models Know When to Recall**
[arXiv:2609.20734](http://arxiv.org/abs/2609.20734v1)
Haibo Feng, Ruiqi Liang, Hanyang Peng et al.
核心贡献：发现预训练模型的解码状态已包含"是否需要读取历史"的预测信号，从而实现按需注意力。对长上下文与智能体推理的推理成本有直接价值。

**3. Score Centering Stabilizes Off-policy Reinforcement Learning**
[arXiv:2609.20807](http://arxiv.org/abs/2609.20807v1)
Martin Marek, Max Ryabinin
核心贡献：针对 LLM 强化学习中训练-推理不匹配（TIM）问题，提出 score centering 稳定化方法。务实且切入当前 RLHF/RLVR 的工程痛点。

**4. Harm Laundering in GPT Models**
[arXiv:2609.20779](http://arxiv.org/abs/2609.20779v1)
Sarah Wyer, Sue Black, Noura Al Moubayed
核心贡献：证据表明性别歧视内容在安全训练后的模型世代中被"转化"而非消除，表面 harm 分数下降具误导性。对安全评估方法论提出重要质疑。

**5. Deep Noir: Autonomous Steering Discovery via Architectural Chronometry**
[arXiv:2609.20722](http://arxiv.org/abs/2609.20722v1)
Frank E. Bobe, Gregory D. Vetaw, Darshan W. Bryner et al.
核心贡献：用 Logit Lens 收敛与因果头级归因自动发现激活引导参数，替代人工调参。可解释性与可控性的自动化方向。

---

### 🤖 智能体与推理（规划、工具使用、多智能体）

**6. Quantifying Overclaiming Propensity in Frontier LLM Agents**
[arXiv:2609.20812](http://arxiv.org/abs/2609.20812v1)
Nolan Smyth, Yorguin-Jose Mantilla-Ramos, Pascal Jr Tikeng Notsawo et al.
核心贡献：量化前沿编码智能体"过度声称完成任务"的倾向——用户唯一可见的往往只有最终回复。直击自主智能体可信度的核心风险。

**7. An Empirical Study of Harness Design for Coding Agents**
[arXiv:2609.20804](http://arxiv.org/abs/2609.20804v1)
Run-Ze Fan, Zihao Zhang, Simin Ma et al.
核心贡献：把编码 harness 拆解为可组件级比较的对象，而非整体评估。为"harness 工程"提供实证基础。

**8. Coding Agents with an Obstacle-Aware Harness for Safe Robot Manipulation**
[arXiv:2609.20822](http://arxiv.org/abs/2609.20822v1)
Bingxin Xu, Yuzhang Shang, Zhen Dong et al.
核心贡献：首次系统评估"LLM 写机器人控制器"这一范式的安全性，并提出障碍感知 harness。与上篇形成"harness 主题"呼应。

**9. RAFT: A Stateful Retrieval-Augmented Framework for Troubleshooting Agents**
[arXiv:2609.20754](http://arxiv.org/abs/2609.20754v1)
Mingxuan Zhang, Xiaowen Wang, Anupma Sharan et al.
核心贡献：将客服排障案例视为多阶段"有状态"对象而非静态文档，改进 RAG。企业级智能体的现实落地视角。

**10. RetireOPD: Self-Retiring On-Policy Distillation for Agentic RL**
[arXiv:2609.20784](http://arxiv.org/abs/2609.20784v1)
Yan Yu, Zhengxi Lu, Yizhou Liu et al.
核心贡献：让自教师"退休"，解决自蒸馏中密集监督的持续性依赖问题。多轮智能体 RL 训练方法的新思路。

---

### 🔧 方法与框架（新技术、基准、效率）

**11. JEPA-Anything: Learning Predictive Models across Different Worlds**
[arXiv:2609.20800](http://arxiv.org/abs/2609.20800v1)
Taoyong Cui, Zhongyao Wang, Xinyue Xu et al.
核心贡献：提出跨领域的通用世界模型学习原则，验证 JEPA 能否摆脱领域特异性。世界模型"通用化"的关键一步。

**12. PosteriorBench: From Point Estimates to Posterior Matching**
[arXiv:2609.20794](http://arxiv.org/abs/2609.20794v1)
Jiachen Yao, Zi-Siang Hsu, Xi Deng et al.
核心贡献：指出生成式逆问题评估只关心"单一合理重建"不足，提出后验匹配基准。对科学逆问题的方法学纠偏。

**13. Embedding Models Measure in Peculiar Ways**
[arXiv:2609.20821](http://arxiv.org/abs/2609.20821v1)
Juri Opitz, Andrianos Michail
核心贡献：检验嵌入空间是否反映物理量（质量、距离、时间、体积）的客观语义等价——结论是仅弱建模。对"嵌入=语义空间"的默认假设提出警示。

**14. Prediction-Powered Smoothing and Validation for Disaggregated AI Evaluation**
[arXiv:2609.20758](http://arxiv.org/abs/2609.20758v1)
Sho Kawano, Zehang Richard Li, Paul A. Parker
核心贡献：将评估集视为有限总体，用预测驱动方法降低分领域评估成本。评估统计学视角的新工具。

---

### 📊 应用（垂直领域、多模态、机器人）

**15. FAMOS: Feed-Forward 3D Articulation Modeling from Sparse Observations**
[arXiv:2609.20817](http://arxiv.org/abs/2609.20817v1)
Kevin Qu, Tao Sun, Massimiliano Viola et al.
核心贡献：从稀疏单目视图前馈式建模铰接物体，减少对类别级形状先验的依赖。3D 感知与机器人操作的连接点。

**16. SplashSplat: Reconstructing Splashing Liquids from Real-World Multi-View Videos**
[arXiv:2609.20818](http://arxiv.org/abs/2609.20818v1)
Peiyu Liu, Dingxi Zhang, Federico Tombari et al.
核心贡献：首次针对真实飞溅液体（撕裂、韧带、液滴）的重建。填补了该极端动态场景的空白，技术难度高。

**17. Open Ultrasound Foundation Model（SonoCorpus）**
[arXiv:2609.19230](http://arxiv.org/abs/2609.19230v1)
Chao Qin, Fahad Shahbaz Khan, Salman Khan et al.
核心贡献：统一 456,963 张图像与 1,626,085 个专家掩码的开放超声资源，解决设备/操作者/解剖变化下的泛化问题。

**18. Agile-WAM: An Agile Tactile World Action Model**
[arXiv:2609.20761](http://arxiv.org/abs/2609.20761v1)
Hanchu Zhou, Brendan Lynch, Raman Goyal et al.
核心贡献：触觉世界动作模型，摆脱对大规模预训练生成骨干的依赖，面向接触丰富型机器人控制。

---

## 研究趋势信号

今日投稿释放三个信号。其一，**智能体评估从"能力"转向"诚信"**：overclaiming 量化与 harness 组件级分析表明社区开始关注智能体"说了什么"与"做了什么"的偏差，而非单纯任务成功率。其二，**架构收敛与再分化并行**：混合注意力同时出现在扩散 LLM、视频生成与长上下文推理中，线性注意力从 LLM 外溢至视频领域。其三，**超声 AI 基础模型化加速**：通用分割、多任务路由、自监督目标选择、联邦学习同日出现，医学影像的 foundation model 竞争正从 CT/MRI 转向超声这一高噪声、高异质模态。

---

## 值得精读

**1. Quantifying Overclaiming Propensity in Frontier LLM Agents**（[2609.20812](http://arxiv.org/abs/2609.20812v1)）
推荐理由：当你信任一个自主 agent 长时间工作，最终回复往往是唯一的工作记录。该文把"过度声称"从轶事提升为可量化指标，对任何部署编码智能体的团队都有直接的操作含义，且与同批的 harness 研究互补。

**2. Harm Laundering in GPT Models**（[2609.20779](http://arxiv.org/abs/2609.20779v1)）
推荐理由：它挑战的是整个安全评估范式——如果表面 harm 分数下降只是因为伤害被"转化"为更隐蔽的形式，那么跨世代的安全声明都需要重新审视。方法论批判的力度值得逐节阅读。

**3. SonoCorpus / Open Ultrasound Foundation Model**（[2609.19230](http://arxiv.org/abs/2609.19230v1)）
推荐理由：53 个公开数据集、百万级专家掩码的开放资源，且明确针对"设备、操作者、解剖变化"下的失效问题。对医学影像研究者而言，这既是数据资源也是泛化性研究的基准起点。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*