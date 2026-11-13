# ArXiv AI 研究日报 2026-11-13

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-13 17:47 UTC

---

# ArXiv AI 研究日报（2026-11-13）

## 1. 今日速览

今日提交列表中**没有直接针对超声（散斑抑制、RF/IQ/通道数据、波束形成、无参考超声质量评价）的论文**——这是本期最重要的读者提示。我们不以任何通用去噪或通用图像质量方法冒充超声成果。可迁移到超声方向的工作主要集中在四类：跨站点域偏移下的医学图像分割（FGCARL）、无干净参考/自洽约束的扩散蒸馏（eDMD）、冻结视觉-语言评估器的免微调校准（D-MAD 提示选择），以及端侧/资源受限推理的效率分析（稀疏卷积、Apple Silicon GPU 智能体执行环境）。这些方法均在原论文的医学影像或通用视觉域中验证，能否迁移至超声需读者自行评估，本文不作超声性能断言。此外，LLM 架构研究缺乏可复现记录的元问题（ArchSpace）与扩散语言模型的"何时重生成"决策（Learning When Diffusion LMs Should Regenerate）是今日 LLM 方向的两点新意。

---

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价（当前重点）

> **说明：今日无超声专属论文。** 以下为方法层面可能与超声去噪/重建/质量评价相关的邻近工作，全部为原论文域内结论，**未经超声验证**。

- **FGCARL: Fisher-Guided Continuously Adaptive Representation Learning for Medical Image Segmentation**
  http://arxiv.org/abs/2611.16210v1
  Xiaobing Yu, Jin Yang, Peijie Qiu et al.（eess.IV）
  针对多临床站点独立采集导致的显著域偏移，用 Fisher 信息引导的持续自适应表示学习做医学分割。与超声的"跨设备稳健性"问题同构，是本期最贴近超声跨设备泛化议题的方法，但验证域为医学分割而非超声。

- **eDMD: Endpoint Distribution Matching for Few-Step Diffusion Distillation**
  http://arxiv.org/abs/2611.17194v1
  Tong Zhao, Xianfang Zeng, Yucheng Han et al.（cs.CV）
  指出 DMD 中辅助"伪评分模型"跟踪学生分布时存在偏差，改为端点分布匹配以蒸馏少步扩散学生。扩散先验用于超声重建/去噪时，少步蒸馏是端侧部署的关键环节；本文属通用扩散方法，无超声实验。

- **Validation-Guided Prompt Selection for Differential Morphing Attack Detection**
  http://arxiv.org/abs/2611.17176v1
  Raghavendra Ramachandra, Hailin Li（cs.CV）
  在**冻结参数**的视觉-语言评估器上，仅用带标签验证集做提示选择而非微调。对"无干净参考下的图像质量/真伪判别"是一条低成本校准思路，可类比超声无参考评价中的参考样本校准；原域为人脸 morphing 检测。

- **Data Archive for 2D and 3D Electrical Impedance Tomography with moderate conductivity contrast phantoms**
  http://arxiv.org/abs/2611.17225v1
  S. J. Hamilton, A. Hauptmann, A. Hänninen et al.（eess.IV, cs.LG）
  公开 KIT4/KIT5 设备的 EIT 体模测量数据。属另一模态的"物理测量+重建"开放数据集范式，对构建超声开放基准的数据组织方式有参考价值，非超声数据。

### 🧠 大语言模型（架构、训练、对齐、评估）

- **ArchSpace: Recording, Reviewing, and Referencing LLM Architecture Research**
  http://arxiv.org/abs/2611.17332v1
  Jie Wang, Tong Zhu, JiaHao Kuang et al.（cs.CL, cs.LG）
  指出现有架构创新（提及 DeepSeek、Qwen、Kimi 团队）在公开报告中记录不足，提出记录/审阅/引用架构研究的系统。对架构研究的可复现性是结构性补位。

- **Learning When Diffusion Language Models Should Regenerate**
  http://arxiv.org/abs/2611.17320v1
  Minhae Oh, Jeonghye Kim, Jinwoo Koo et al.（cs.CL）
  在 Sudoku 上诊断出隐藏状态含 token 置信度未暴露的错误信息，且孤立错误重掩码无效，据此学习"何时重生成"。把重掩码从启发式变为可学决策。

- **Goal Encoding in LLMs**
  http://arxiv.org/abs/2611.17297v1
  Arnab Sen Sharma, Eric Todd, Sheridan Feucht et al.（cs.CL, cs.AI, cs.LG）
  构建多子任务编码环境，检验 LLM 是否编码可跨执行路径实现的目标表征。是可解释性中较少被直接检验的"目标"层面。

- **Synthesis Smuggling: Maliciously Hiding Inferred Personal Attributes in LLM Outputs**
  http://arxiv.org/abs/2611.17280v1
  Gautam Galada, Supreeth Shastri, Sagnik Ray Choudhury（cs.CL, cs.AI）
  提出新威胁模型：对抗 LLM 从常规求助交互推断敏感属性并隐写进看似无害的输出，由用户无意外传。安全评估中值得纳入的红队场景。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **AgentSSL: Can MLE Agents Leverage Unlabeled Data?**
  http://arxiv.org/abs/2611.17323v1
  Ethan Lin, Akanksha Sarkar, Ziang Liu et al.（cs.AI, cs.LG）
  指出 MLE 智能体几乎只在全监督设定下被研究，首次系统检验其利用无标签数据的能力。与"自监督/无干净参考"思路天然相关。

- **Actor, Judge, or Teacher? Understanding Decision Models in Long-Horizon Agents**
  http://arxiv.org/abs/2611.17167v1
  Haochen Liu, Qianhao Zhu, Zixuan Wang et al.（cs.AI, cs.CL）
  将决策模型统一为"带类型输出的回答器"，比较其作为行动者、评判者、教师的角色差异。为长程智能体的组件选型提供统一视角。

- **Ballad: Bandit-Based LLM Routing for Automated Heuristic Discovery**
  http://arxiv.org/abs/2611.17241v1
  Samidha Verma, Ankit Anand, Sayan Ranu（cs.AI）
  挑战"更强更贵模型必带来更好启发式"的假设，用 bandit 路由选择模型。对成本敏感的迭代式发现流程有直接实用价值。

- **CoReMem: Cost-Internalizing Memory for Successive Coding Tasks with Prospective Valuation**
  http://arxiv.org/abs/2611.17316v1
  Peiwen Li, Harshit Verma, Sophia Zhou et al.（cs.AI, cs.CL, cs.SE）
  在下一任务未知的前提下，把记忆的写入/读取成本内生化，衡量未来收益与开销。编码智能体记忆管理的一个务实问题设定。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **Spatial Foundry: A Multimodal Dataset for Spatial Intelligence**
  http://arxiv.org/abs/2611.17318v1
  Ethan Lin, Yang Song（cs.CV）
  将外观、相机运动与场景变化纳入同一参考框架的多模态空间智能数据集，弥补单图关系隐式、标注割裂的问题。

- **LiveGeo: Benchmarking Geographic Agents in Continuously Evolving Worlds**
  http://arxiv.org/abs/2611.17267v1
  Pengcheng Zhou, Xuanyu Liu, Yanchen Yin et al.（cs.AI）
  提供可控、持续演化的地理环境平台 GeoWorld 及基准 LiveGeo，突破在固定地理信息上推理的评测局限。

- **Theoretical and Empirical Analysis of Sparse Convolution**
  http://arxiv.org/abs/2611.17212v1
  Keshvi Tuteja, Yu-Hsiang Tsai, Gregor Olenik et al.（cs.PF, cs.DC, cs.LG）
  面向无人机、医疗系统、智能手机等资源受限端的稀疏卷积理论与实测分析，属端侧效率方向的参考，非超声实验。

- **Metal Sandbox: Isolated Execution and Command Scheduling for GPU Coding Agents on Apple Silicon**
  http://arxiv.org/abs/2611.17294v1
  Haozhe Wang, Lina Chen, Fanqi Wan et al.（cs.LG, cs.AI, cs.CL）
  为在 macOS 上生成 Apple Metal kernel 的智能体会话提供隔离执行与命令调度，端侧推理工具链的工程性补位。

### 📊 应用（垂直领域、多模态、代码生成）

- **K2V: Generative Keyframing For Physically Plausible Video Generation**
  http://arxiv.org/abs/2611.17324v1
  Felix O'Mahony, Daniel Olmeda Reino, Roberto Cipolla et al.（cs.CV）
  针对视频扩散模型显著物理错误，以生成式关键帧分离物理推理与外观生成。物理合理性是可评测的明确目标。

- **Cortex-FL: Agent-Mediated Collaboration for Federated Learning**
  http://arxiv.org/abs/2611.17186v1
  Rui Sun, Jinfeng Peng, Zehua Cheng et al.（cs.AI, cs.MA）
  用智能体中介处理联邦学习的协作者识别、任务准备、执行协调与激励，降低无专业团队组织的采用门槛。

- **Parsed, Plausible, Wrong: Output Format Controls Silent Errors in Small-Model Semantic Parsing**
  http://arxiv.org/abs/2611.17169v1
  Umar Ahmed, Maxim Dunaev, Mohammad Nour Al Awad et al.（cs.CL, cs.LG）
  在 PIZZA 基准上微调 Qwen3.5-0.8B 与 LFM2.5-350M，发现输出格式这一免费设计选择会左右"格式正确但语义错误"的静默失败率。

---

## 3. 研究趋势信号

本期可见三条信号。其一，**"可复现记录"本身成为研究对象**（ArchSpace），社区开始正视架构细节公开不足的问题。其二，**训练/推理决策的元层面学习**：扩散语言模型学"何时重生成"而非只学生成，bandit 学"选哪个模型"而非只选模型，记忆系统学"写什么值多少"——从优化结果转向优化"何时、用哪个、花多少"。其三，**端点与资源约束成为一线议题**：稀疏卷积、Apple Silicon 上的隔离执行与命令调度，反映端侧部署的工程需求上浮。需要强调：今日没有超声专文，超声去噪/重建/质量评价方向本日无新增直接证据。

---

## 4. 值得精读

1. **FGCARL**（http://arxiv.org/abs/2611.16210v1）——若关注超声跨设备稳健性，这是本期最接近"多站点域偏移"问题设定的医学影像方法。建议重点看其自适应机制如何应对连续到来的新域，但需自行判断迁移到超声 RF/IQ 或图像域的可行性；原文未做超声实验。
2. **eDMD**（http://arxiv.org/abs/2611.17194v1）——扩散先验用于重建/去噪若要落到端侧少步推理，蒸馏中的分布匹配偏差是关键瓶颈；本文对 DMD 辅助模型偏差的诊断值得完整阅读。
3. **Validation-Guided Prompt Selection for D-MAD**（http://arxiv.org/abs/2611.17176v1）——在冻结评估器上仅靠验证集做提示选择，是"无干净参考 + 低成本校准"的清晰范式，对超声无参考质量评价的评估器校准有方法借鉴意义（原域非超声）。

*注：以上"延伸"条目均为原论文自身领域的结论，不构成对超声场景有效性的论断。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*