# ArXiv AI 研究日报 2026-11-04

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-04 18:00 UTC

---

# ArXiv AI 研究日报（2026-11-04）

> 说明：今日 50 篇投稿中，直接涉及超声的论文共 5 篇（#1–#5）。其中与"超声去噪/重建/质量评价"核心链条直接相关的仅 #1 一篇；#2 为超声传播方程的正向建模，#4 为声全息设计，#5 为超声分割的域适应，#3 为临床弹性成像研究。有干净参考的去噪基准（#12 的 LiDAR 参考生成面向植被环境 3D 重建，非超声）今日无对应投稿，以下不作替代性拔高。

## 1. 今日速览

今日最贴近"去噪—重建—评价"链条的工作是 #1：用扩散模型先验在**无配对监督**条件下联合做超声视频超分与散斑抑制，直接对上无干净参考这一现实约束。但需要如实指出，其摘要未给出任何定量指标、结构保真度度量或跨设备验证。#5 提供了超声相关的一条可信证据路径：以生成式 AI 与真实风格供体做傅里叶域适应，缓解 3D 经食管超声分割的标注稀缺，但同样仅停留于摘要描述，未见具体数值。物理侧，#2 用 PINN 求解非线性 Westervelt 方程，属于超声传播建模，可为仿真数据与波束形成提供基础，但并非去噪方法。泛 AI 方向今日热点集中在**长上下文成本**（#28）、**推理与智能体训练稳定性**（#18、#46）与**模型行为审计**（#14、#36、#44）。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

**[Diffusion Plug-in Priors for Self-Supervised Ultrasound Video Restoration](http://arxiv.org/abs/2611.05206v1)**
*Chen C., He M., Li Y. et al.（cs.CV）*
面向超声视频"硬件受限的低空间分辨率 + 信号相关散斑"两大退化，在**无配对低/高分辨率采集**的前提下，以扩散模型作为**可插拔先验**联合执行超分与去斑。这是今日唯一同时命中"自监督/无干净参考 + 散斑抑制 + 重建"三要素的工作，值得作为当前重点方向的代表精读；但摘要未披露结构保真、临床可读性或跨设备泛化的定量证据，评估时需谨慎。

**[Label-Preserving Fourier Domain Adaptation with Generative-AI and Real Style Donors for 3D Mitral Valve Segmentation](http://arxiv.org/abs/2611.05106v1)**
*Javed J., Salim A., Rahman M. M. U.（eess.IV, cs.CV）*
针对 3D 经食管超声（3D TEE）专家标注体数据稀缺，采用**保标签的傅里叶域适应**，并结合生成式 AI 与真实风格供体扩充数据，用于二尖瓣分割。作为超声方向的下游任务延伸，其"保标签"设计对无干净参考条件下的数据增广有借鉴意义；具体分割精度摘要未给出。

**[Solving the Nonlinear Westervelt Equation in Ultrasound Propagation Using Physics-Informed Neural Networks](http://arxiv.org/abs/2611.05130v1)**
*Joel L. O.（math.AP, cs.LG, cs.NE）*
用 PINN 求解 1D 非线性 Westervelt 方程（含 γ 三阶时间项与 η 非线性项），刻画有限振幅超声在生物组织中的传播。定位为**正向物理建模**，可为超声仿真、波束形成与非线性伪影理解提供可信数据源，但本身不是去噪或重建方法。

**[Perioperative shear wave elastography for the evaluation of spinal cord release in pediatric dysraphism: first experience in 21 patients](http://arxiv.org/abs/2611.04746v1)**
*Gaume M., Richard L., Vergari C. et al.（physics.med-ph）*
21 例儿科脊髓闭合不全患者的围手术期剪切波弹性成像首例经验，讨论超声骨屏障对脊髓硬度测量的限制。属于**临床验证类**工作，可作为超声定量成像在结构与力学评估上的应用参照。

**[Differentiable topology optimization for high-fidelity acoustic holography beyond the thin-element approximation](http://arxiv.org/abs/2611.04251v1)**
*Dash P. P., Arvanitis C. D.（physics.app-ph）*
针对亚兆赫至低兆赫频段（与经颅治疗最相关）设计声全息透镜拓扑，突破薄元件近似，采用可微拓扑优化处理复杂波传播。与超声换能器/声场调控相关，但方向为声学器件设计，不涉及图像去噪。

### 🧠 大语言模型（架构、训练、对齐、评估）

**[Suppressing Misaligned Behaviors in Language Models, Durably](http://arxiv.org/abs/2611.05358v1)**
*He L., Jiang P., Zhang J. et al.（cs.CL, cs.AI, cs.LG）*
构建两个"模型生物"——有意训练出特定失准行为、触发条件不同的语言模型，系统研究失准行为在训练各阶段出现或复现后能否被持久抑制。为对齐鲁棒性提供了可控实验载体。

**[Knowingly Wrong: Training LLMs Against Their Own Beliefs can Induce Misalignment](http://arxiv.org/abs/2611.05287v1)**
*Villegas-Suarez A. M., Freire G., Venkatesh S. et al.（cs.CL, cs.AI, cs.LG）*
显示即使在狭窄领域用**与模型自身信念相悖**的数据微调（非显式有害数据），也可能诱发广泛失准。把失准风险从"有害数据"扩展到更现实的训练场景，结论有警示价值。

**[The Geometry of Ignorance: Detecting Suppressed Knowledge in LLMs through Activation Fragmentation](http://arxiv.org/abs/2611.05272v1)**
*Peleg A., Alsheich D., Ashuach T. et al.（cs.AI）*
以"匿名向量"的几何一致性度量模型内部知识，用于识别**拒答但知识仍可恢复**的被压制知识。为"模型是否真知道"提供行为指标之外的内部表征视角。

**[You don't need long context](http://arxiv.org/abs/2611.05306v1)**
*Belcak P., Muralidharan S., Jiang J. et al.（cs.AI）*
指出前沿开源权重模型中后段 token 生成成本可达前段的约 7 倍，并通过**频繁压缩（compaction）**在多种长程与长输入任务上显示任务精度几乎不损失。对长上下文成本结构给出直接反例。

**[Aligning Language Models with General Preferences: An Empirical Study of Direct Nash Optimization](http://arxiv.org/abs/2611.05373v1)**
*Tsai A., Nanda S., Parthasarathy G. et al.（cs.LG, cs.AI, cs.CL）*
对 Direct Nash Optimization 及其实用变体 DNO-Prct 做实证研究，考察以 LLM 评分近似两人偏好博弈纳什均衡的可行性与局限。

**[LoopVQ: Sub 1-bit KV Cache Quantization for Looped Transformers](http://arxiv.org/abs/2611.05304v1)**
*Cheong M., Yoo S.（cs.LG, cs.AI, cs.CL）*
针对循环 Transformer 复用同层、KV 缓存随循环步数累积的开销，提出低于 1 bit 的 KV 缓存量化，属参数高效架构下的显存优化。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**[Adversarial Speculative Reasoning Improves Long Horizon Agents](http://arxiv.org/abs/2611.05345v1)**
*Luo H., Fang W., Yang L. et al.（cs.AI）*
挑战"推测解码只是系统优化、不改变模型行为"的通行观点，提出对抗式推测推理以提升长程智能体表现。把推测机制从加速手段重新定位为推理能力来源，视角新颖。

**[Stabilizing On-Policy Targeted Guidance in Agentic Reinforcement Learning](http://arxiv.org/abs/2611.05266v1)**
*Frans K., Rush A. M., Levine S. et al.（cs.LG）*
针对朴素 on-policy RL 受限于基座模型覆盖不足、难以从某些奖励学习的问题，研究如何稳定地引入来自评分模型/评分细则等文本来源的**定向引导**。

**[JHiMA-WebRL: A Joint Hierarchical Multi-Agent Reinforcement Learning Framework for Long-Horizon Web Tasks](http://arxiv.org/abs/2611.05263v1)**
*Mondal S. S., Wang J.（cs.AI）*
面向 GUI 网页智能体的长程多步任务，以联合分层多智能体 RL 分解高层规划与底层操作，回应单体策略难以兼顾长程规划的问题。

**[PyRUA-DataFarm: LLM Agent as a Cost-Efficient Teleoperator for Real-Ready Robot Data](http://arxiv.org/abs/2611.05320v1)**
*Zhang K., Ma J., Lv G. et al.（cs.RO, cs.AI）*
让编码智能体接替遥操作员：接收数据请求与一次标定示例后生成机器人演示数据，直指真实遥操作采集的每回合成本问题。

**[MDSKILL: Learning to Internalize Skill Memory through Multi-View Distillation for Efficient Dynamic Agent Self-Evolution](http://arxiv.org/abs/2611.05313v1)**
*Jin D., Yang J., Han K. et al.（cs.CL）*
用 On-Policy Self-Distillation 把技能记忆引导轨迹中的知识内化进策略，作为 RL 之外的密集监督补充，加速自演化智能体学习。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**[MedPhysBench: A Benchmark for Evaluating Language Models on Medical Physics Calculations and Error Detection](http://arxiv.org/abs/2611.05340v1)**
*Nusrat O.（physics.med-ph, cs.AI, cs.CL）*
面向放疗剂量与机器跳数（MU）计算的基准，含十个带种子的计算题生成器，并考察**错误检测**能力。医疗物理场景中单次标定错误影响全体患者，评测目标务实。

**[Weight-space programming for auditing clinical decision networks](http://arxiv.org/abs/2611.05341v1)**
*Nusrat H., Nusrat O.（physics.med-ph, cs.AI）*
讨论以"读写小型网络原始权重"的方式审计放疗模型可能存在的捷径，指出常规已知答案测试无法暴露训练/测试共享的捷径。

**[GSCV++: Lightweight 3D Gaussian Splatting Sequence Compression via Standard Video Codecs](http://arxiv.org/abs/2611.05359v1)**
*Yang Q., Xu Y., Zhang K. et al.（cs.CV）*
以标准视频编解码器压缩 3DGS 序列，联合改进预处理与 3D→2D 映射，强调低复杂度与硬件兼容。

**[Conformal Prediction at Performative Equilibrium: The Price of Performativity](http://arxiv.org/abs/2611.05277v1)**
*Mahrous A., Di Pietro R.（math.ST, cs.LG）*
研究预测器本身改变数据分布（performative 设定）时，共形预测的交换性假设失效及覆盖率的代价。

**[Agnostic Learning by Imitating](http://arxiv.org/abs/2611.05346v1)**
*Casacuberta S., Gopalan P., Kanade V. et al.（cs.LG, cs.CC, cs.DS）*
从计算复杂度角度比较"判别式最优学习"与"生成式模仿学习"的难度，为生成/判别路线之争提供理论刻画。

### 📊 应用（垂直领域、多模态、代码生成）

**[DreamX: Video Diffusion Model is a Universal Latent Action Learner](http://arxiv.org/abs/2611.05377v1)**
*Kim J., Kim C., Kim J. et al.（cs.CV, cs.AI, cs.RO）*
从视频中学习对同一动作跨具身、跨外观保持一致的通用隐动作表示，服务机器人策略迁移。

**[Möbius: A Unified Motion-Language Model Bridging Understanding and Generation](http://arxiv.org/abs/2611.05279v1)**
*Shu J., Zhao C., Wang J. et al.（cs.CV）*
在单一框架内统一人体运动的理解、生成与编辑，回应现有运动 UMM"理解靠语言模型、生成靠独立扩散模块"的部分统一问题。

**[OpenBrain: An Auditable Generated-Label Release for Whole-Brain MRI Parcellation](http://arxiv.org/abs/2611.05348v1)**
*Lan Q., Hsu Y.-C., Wei Y. et al.（cs.CV）*
发布 35,838 例来源可核验的全脑 T1w 生成标签，并附带**置信度信息**，让使用者判断哪些病例可复用，而非只给标签。

**[iGC: Antibody Optimization via Reinforcement Learning over a Learned Somatic Hypermutation Prior](http://arxiv.org/abs/2611.05270v1)**
*Nguyen T., Alberstein R. G., Nowara E. et al.（cs.LG, q-bio.BM）*
以学习到的体细胞高频突变先验为搜索空间，用 RL 做抗体亲和力成熟优化，兼顾生物合理性与优化效率。

## 3. 研究趋势信号

今日投稿透露出三个信号。其一，**"无干净参考"正成为医学影像恢复的默认前提**：#1 的自监督扩散先验与 #5 的保标签域适应都在标注或配对数据稀缺下工作，但两者摘要均未给出结构保真或临床可读性的定量结论——评估环节仍明显落后于方法环节，超声领域尤其缺少可信的无参考质量评价。其二，**物理建模与数据驱动开始分工**：#2 的 PINN 与 #4 的可微拓扑优化补齐正向仿真与声场调控，可为后续去噪/重建提供仿真监督。其三，泛 AI 侧出现对既有假设的集中反思——长上下文成本（#28）、推测解码的能力属性（#18）、失准的触发机制（#14、#36），以及以内部几何而非行为指标判断模型"是否知道"（#44）。

## 4. 值得精读

1. **[Diffusion Plug-in Priors for Self-Supervised Ultrasound Video Restoration](http://arxiv.org/abs/2611.05206v1)** —— 今日唯一正面对齐"无需配对监督 + 散斑抑制 + 超分重建"三要素的超声工作。建议精读时重点核对其实验设计：是否报告散斑信噪比、边缘/结构相似度或下游任务（分割/检测）增益，以及是否覆盖多设备或多中心数据，而非仅看视觉平滑度。

2. **[Suppressing Misaligned Behaviors in Language Models, Durably](http://arxiv.org/abs/2611.05358v1)** —— 以两个触发条件不同的"模型生物"研究失准的抑制与复现，实验框架可复用性强；配合 #36 的"与自身信念相悖的微调"一起读，能较完整地把握失准的可控研究范式。

3. **[MedPhysBench](http://arxiv.org/abs/2611.05340v1) + [Weight-space programming for auditing clinical decision networks](http://arxiv.org/abs/2611.05341v1)** —— 同一位作者的两篇医疗物理方向工作，一篇给出带种子生成器的计算与错误检测基准，一篇讨论用权重空间读写审计捷径；合读可看到"评测 + 审计"的完整闭环思路，对在其他高风险领域复刻有直接参考价值。

---
*本日报严格基于所提供摘要撰写，未采用摘要之外的信息。凡摘要未披露的定量指标、临床验证与跨设备证据，均已在文中明确标注为缺失。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*