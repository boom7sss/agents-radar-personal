# ArXiv AI 研究日报 2026-07-31

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-07-31 03:32 UTC

---

# ArXiv AI 研究日报（2026-07-31）

## 今日速览

今日 arXiv 投稿在推理时扩展、智能体评估和生成模型效率三方面呈现密集进展。一项控制 token 成本的系统研究表明，多次采样显著优于自我反思/Reflexion，挑战当前反思式推理范式。智能体方向，跨平台计算机使用奖励模型基准 OSReward、本地部署推理扩展分析以及多智能体拓扑自适应 MANTA 等为可靠智能体提供了新基础设施。方法层面，Chimera 提出混合视觉 Diffusion Transformer 的 Chinchilla 缩放配方，PhiZero 用“物理语言”离散状态构建世界模型。应用上，Oncall 根因分析、临床公平审计与文献级化学检索等垂直任务也获得针对性突破。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B](http://arxiv.org/abs/2607.28576v1)**  
  作者：I. Mirzaei  
  一句话说明：在 1.5B 到 7B 模型上严格控制总 token 成本，发现多次采样优于 self-refine/Reflexion，提示反思式推理的收益可能来自额外生成而非自我修正本身。

- **[β-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1)**  
  作者：J. Xu, M. Liu, J. Zhang et al.  
  一句话说明：把 on-policy self-distillation 解释为 β=1 特例并给出更稳定的导出与训练目标，为推理模型的自蒸馏提供更可靠的理论依据。

- **[AISPA: User-Centric System Prompt Auditing for Large Language Model Applications](http://arxiv.org/abs/2607.28617v1)**  
  作者：X. Lin, S. Zhu, S. Yang et al.  
  一句话说明：面向系统提示词提出用户侧审计框架，针对商业 AI 中不透明提示词带来的责任与信任问题。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1)**  
  作者：Q. Sun, K. Cheng, Y. Wang et al.  
  一句话说明：建立跨平台计算机使用智能体奖励模型的标准化评测，推动 CUA 轨迹验证、数据筛选和强化学习走向可比较。

- **[Beacon: Knowing When and How to Perform Agentic Visual Reasoning](http://arxiv.org/abs/2607.28595v1)**  
  作者：Q. Wang, Y. Shi, L. Cheng et al.  
  一句话说明：通过自适应判断何时及如何进行 agentic visual reasoning，避免低效复杂推理，直接提升 MLLM 在复杂视觉任务上的成功率。

- **[Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs](http://arxiv.org/abs/2607.28573v1)**  
  作者：W. Lee, J. Choi  
  一句话说明：系统分析本地部署计算机使用智能体在严格硬件约束下推理时扩展的失败模式与计算权衡，对隐私敏感场景的实际部署很有价值。

- **[MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1)**  
  作者：M.-X. Huang, J. Wang, Y.-C. Lai et al.  
  一句话说明：让多智能体系统在线动态调整通信拓扑，打破固定或离线图设计，增强复杂任务下的自演化与协调能力。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **[Chimera: Designing and Chinchilla-Scaling Hybrid Visual Diffusion Transformers](http://arxiv.org/abs/2607.28611v1)**  
  作者：C. Ge, H. Jiang, T. Wang et al.  
  一句话说明：引入混合视觉 Diffusion Transformer 并给出 Chinchilla 缩放配方，统一处理文本、图像和视频 token，缓解全注意力二次成本。

- **[PhiZero: A World Model Built Around Physical Language](http://arxiv.org/abs/2607.28624v1)**  
  作者：S. Shang, Y. Wang, R. Gao et al.  
  一句话说明：用“物理语言”的离散世界状态表示替代像素空间预测，使世界模型更紧凑、可解释，并便于下游规划与控制。

- **[ReToken: One Token to Improve Vision-Language Models for Visual Retrieval](http://arxiv.org/abs/2607.28627v1)**  
  作者：Y. Xiao, R. Tan, Z. Zhu et al.  
  一句话说明：提出单一可学习检索 token，在长视觉上下文中提升 VLM 检索能力，并在 GPU 内存约束下实现更高效处理。

### 📊 应用（垂直领域、多模态、代码生成）

- **[Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments](http://arxiv.org/abs/2607.28591v1)**  
  作者：H. Qi, X. Wang, X. Gao et al.  
  一句话说明：从代码仓库变更自动生成可执行编码任务与验证环境，为扩展编码智能体的训练、评测与持续评估提供系统化数据供给。

- **[ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1)**  
  作者：A. Gong, K. Choi, A. Agarwal et al.  
  一句话说明：面向 on-call 根因分析的新基准，要求智能体从模糊用户报告出发，结合 metrics、logs、traces 和源码进行推理，紧贴真实运维场景。

- **[KAISEN: Reproducible Subgroup Fairness Auditing for Clinical Risk Models](http://arxiv.org/abs/2607.28608v1)**  
  作者：S. Roy, S. Girmachew, N. Chavan  
  一句话说明：提出可复现的临床风险模型亚组公平审计流水线，并回答审计环节中哪些部分可被信任，推进负责任的医疗 AI。

- **[AskChem: Claim-Centered Infrastructure for Chemistry Literature Synthesis](http://arxiv.org/abs/2607.28618v1)**  
  作者：B. Yan, G. Wolfe, S. Martiniani et al.  
  一句话说明：面向化学文献的“以论断为中心”检索与综合基础设施，帮助科学家和 AI 代理完成跨文献证据溯源与组装。

- **[ACE-Data-0: Human-Centric Ambient Capture as Embodied Data Engine](http://arxiv.org/abs/2607.28625v1)**  
  作者：Y. Cao, H. Xie, B. Wen et al.  
  一句话说明：提出以人为中心的环境捕获数据引擎，同步记录第一视角、全身动作、物体状态、声音与触觉，缓解具身智能数据瓶颈。

## 研究趋势信号

从今日投稿可观察到三条信号：一是对思维链/反思类方法的成本收益进行更严格审视，“重复采样”作为更强基线正在成为推理扩展的新共识；二是智能体研究从单轮/单机扩展到跨平台、本地部署和多智能体拓扑自适应，评估重心转向验证与安全；三是多模态与科学计算加速融合，Diffusion Transformer、世界模型和生成式证据聚合开始用于物理、化学、医学与三维生成。效率优化（PTQ、混合精度）仍与部署需求深度绑定。

## 值得精读

1. **[Sample More, Reflect Less](http://arxiv.org/abs/2607.28576v1)**  
   值得读：它用严格等 token 成本比较了采样与反思，结果对 self-refine/Reflexion 的增益提出直接挑战。所有做推理时扩展研究的人都应关注这一基线效应。

2. **[Chimera](http://arxiv.org/abs/2607.28611v1)**  
   值得读：Chimera 给出混合视觉 Diffusion Transformer 的缩放规律，补上了文本语言模型缩放定律在视觉生成与多模态生成中的关键空白。

3. **[OSReward](http://arxiv.org/abs/2607.28609v1)**  
   值得读：它填补了计算机使用智能体奖励模型标准化评估的缺失，是该领域训练、数据构造和跨平台比较的重要参考。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*