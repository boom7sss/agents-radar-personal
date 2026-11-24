# ArXiv AI 研究日报 2026-11-24

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-24 09:55 UTC

---

# ArXiv AI 研究日报（2026-11-24）

## 1. 今日速览

今日这批 50 篇投稿中，**没有以超声散斑抑制、无参考图像质量评价或 RF/IQ/通道数据为核心的论文**，与当前超声去噪、重建与质量评价的重点直接相关的工作只有一篇稀疏 3D 超声重建（#1），它处理的是稀疏切片造成的未观测体素，兼顾结构保真，并非针对散斑或去噪后的图像质量评价。其余工作集中在视觉生成与表征（#3、#4、#16）、LLM 推理与解码效率（#32、#47、#48、#50）、智能体工具与评测（#18、#30、#45、#46、#49）三个方向。与医学影像相关的延伸工作是文本提示的 3D 胸部 CT 病灶分割（#11）和 EEG 到 fMRI 的合成（#19），可作为跨模态医学影像的参考，但二者都没有在超声数据上验证。本报告不把任何通用方法当作超声成果呈现。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

> 本批次仅有 1 篇直接相关，其余超声方向（散斑抑制、自监督或无干净参考去噪、RF/IQ 与波束形成、无参考质量评价）今日无对应投稿，不做补位。

- **[XFreq: Geometry-Aligned Cross-View Residual Learning for Sparse 3D Ultrasound Reconstruction](http://arxiv.org/abs/2611.30869v1)**
  Y. Lu, P. E. Grant, D. Karimi
  从稀疏 2D 切片重建 3D 超声，用几何对齐的跨视图残差学习处理切片采集位姿已知但大部分体素未观测的问题；关注点是重建结构是否可信，而非平滑观感。需要核对精度指标与三维解剖结构的保持情况。

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Language Models Steer on Injected Uncertainty Tokens, but Fail to Self-Monitor In Situ](http://arxiv.org/abs/2611.31228v1)**
  D. Theron
  区分两种能力：被注入不确定性信号时模型能改变行为，但在生成过程中自行监测置信度并触发回溯的能力不足；对依赖逐步置信度提示的智能体推理设计有直接警示。

- **[Attention Latent Feedback](http://arxiv.org/abs/2611.31154v1)**
  X. Xiong, S. Chen, M. Chen et al.
  让当前 token 的浅层直接读取上一 token 的深层表示，弥补标准自注意力只在同深度连接位置的限制，属于自回归解码的架构改进。

- **[Attention Temperature Confounds Zero-Shot Context Extension](http://arxiv.org/abs/2611.31113v1)**
  R. Navasardyan
  指出零样本上下文扩展的评测结论会受基线在超出训练长度处温度失校准的影响，提示此类对比应在校准后评估，方法学价值较高。

- **[LiveLoRA: Exact KV Cache Migration Across LoRA Updates for LLM Agents](http://arxiv.org/abs/2611.31105v1)**
  T. Huang, S. Xu, I. Gu et al.
  在 LoRA 适配器更新时精确迁移 KV 缓存，避免重放历史或混用不同模型版本的缓存，直接面向多会话智能体的工程瓶颈。

- **[Corrective Prefix Attention for Parallel Speculative Decoding](http://arxiv.org/abs/2611.31112v1)**
  M. M. Moradi, A. Pourranjbar, Z. Wang et al.
  针对并行投机解码中早期不一致导致后缀被整体拒绝的问题，用前缀感知选择加自回归监督提高草稿块的接受率。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[ToolSmith: An Automatic Tool-Generation Framework for Multimodal Search Agents](http://arxiv.org/abs/2611.31198v1)**
  R. Sun, J. Huang, L. Zancato et al.
  把手写、易过时且面对新查询类型会失效的多模态搜索工具库改为自动生成，针对智能体工具维护的真实成本。

- **[Self-Upgrading Embodied Agents](http://arxiv.org/abs/2611.31117v1)**
  J. Fan, N. He, Q. Zheng et al.
  探索具身智能体通过推理直接编辑自身权重来获得改进，而不依赖每步都付出代价的反思、记忆、搜索或提示。

- **[RUIBench: What Makes a Good Robot-Use Interface?](http://arxiv.org/abs/2611.31115v1)**
  Y. Chen, Z. Cao, Z. Bai et al.
  系统评测“机器人使用接口”如何影响基础模型表达与执行物理动作的可靠性，是从接口层解释具身执行失败的新基准。

- **[Habitats: A Framework for Open-Ended Evolution of Agent Objectives](http://arxiv.org/abs/2611.31160v1)**
  N. Bolouri, G. Mehenni, D. Toyama
  把“优化什么”与“如何实现”解耦，避免语言模型奖励生成方法只围绕预定义任务收敛。

- **[Preflight: Agentic Last-Mile Verification for AI Software Supply Chains](http://arxiv.org/abs/2611.31110v1)**
  Y. Jandali, N. Sheybani, F. Koushanfar et al.
  面向具体程序行为，在执行前验证依赖产物，补充仅看溯源与包级行为分析的不足。

- **[Know When to Abstain: Conformal Confidence Estimation for Text-to-SQL](http://arxiv.org/abs/2611.31190v1)**
  A. K. Singh, B. Sarmah, S. Pasquali
  用共形置信估计识别“能执行但答错”的 Text-to-SQL 查询，在部署时决定是否弃答；可迁移的思路对需要弃答机制的诊断系统有参考价值。

### 🔧 方法与框架（新技术、基准、效率优化）

- **[Seeking in Space: Benchmarking Purposeful Active Exploration of VLMs for Spatial Reasoning](http://arxiv.org/abs/2611.31215v1)**
  X. Liu, Y. Li, X. Li et al.
  把证据从给定变为需要主动寻找，检验视觉语言模型能否“在空间中觅证”，是对现有整理好的图像/视频评测的重要补充。

- **[CO-GRAFT: Attributing Reinforcement Learning Gains in Search Agents via Role-Level Policy Grafting](http://arxiv.org/abs/2611.31185v1)**
  R. Chandradevan, S. Ghosh, V. Selvendran
  报告 RL 可带来最高 32 EM 点提升，但整体准确率无法说明哪项功能能力在起作用；用角色级策略嫁接做归因，方法层面有借鉴意义。

- **[Pruning Autonomous Driving VLAs: What to Preserve for Reasoning and Action](http://arxiv.org/abs/2611.31240v1)**
  S. Kim, S. Son, S. Kim et al.
  研究结构化剪枝时如何同时保留场景理解与轨迹预测，对带 CoT 推理的 VLA 模型的内存与算力约束给出取舍依据。

### 📊 应用（垂直领域、多模态、代码生成）

- **[CTLink: A Text-Prompted Segmentation Model for Linking Radiology Report Findings to 3D Chest CT](http://arxiv.org/abs/2611.31222v1)**
  M. Baharoon, S. E. Kim, M. H. Alabbad et al.
  将放射报告中的文本发现定位到 3D 胸部 CT，属文本提示 3D 医学影像分割的延伸；未涉及超声，作为医学影像跨模态定位参考。

- **[Learning Neurovascular Codes for EEG-to-fMRI Synthesis](http://arxiv.org/abs/2611.31194v1)**
  Y. Sun, Y. Wang, A. Feng et al.
  用冻结的 EEG 编码器学习共享神经血管表征以生成 fMRI，属跨模态生理信号合成；是 EEG 方向的延伸参考，与超声无关。

## 3. 研究趋势信号

今日投稿呈现两条清晰线索。其一是**推理过程的可信度与效率**：不确定性注入、置信度自监测、弃答共形估计、投机解码接受率、KV 缓存跨适配器迁移，共同指向“模型如何知道并修正自己”。其二是**智能体从静态能力转向运行时自维护**：工具自动生成、权重自升级、接口基准、供应链执行前验证。医学影像仍是文本与 3D 结构的对接，超声方向今日仅有稀疏重建一篇。若要推进超声研究，可关注“推理自监测”式的无参考质量评价思路，但需明确这些方法尚未在超声上验证。

## 4. 值得精读

1. **[XFreq](http://arxiv.org/abs/2611.30869v1)**：今日唯一直接对应超声重建的论文，几何对齐跨视图残差的设计涉及切片位姿与未观测体素，是判断结构保真而非插值平滑度的关键材料。
2. **[Language Models Steer on Injected Uncertainty Tokens, but Fail to Self-Monitor In Situ](http://arxiv.org/abs/2611.31228v1)**：把“被引导”与“自我监测”拆成两项能力来检验，结论对置信度驱动的回溯与弃答机制具有普适警示意义。
3. **[Seeking in Space](http://arxiv.org/abs/2611.31215v1)**：将主动探索纳入空间推理评测，改变了证据给定的惯例，对评测设计与后续基准建设有直接影响。

> 注：今日批次未见超声散斑抑制、RF/IQ/通道数据与波束形成、无参考质量评价、跨设备稳健性或端侧部署的超声专属工作，故未在本报告中以任何通用方法替代。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*