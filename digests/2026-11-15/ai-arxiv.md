# ArXiv AI 研究日报 2026-11-15

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-15 17:13 UTC

---

# ArXiv AI 研究日报（2026-11-15）

## 1. 今日速览

今日投稿中与超声直接相关的论文集中在三个方向：超声弹性成像的激励方式与非MRI导航对齐、基于体素的3D超声重建（UltraVoxelGS）、以及超声引导操作中的组织形变仿真。**需要说明：所提供的 50 篇摘要中，没有一篇以“散斑抑制”或“自监督/无干净参考超声去噪”为主题，也没有论文提出超声专用的无参考图像质量评价指标。** 因此本期不设专门的散斑抑制或去噪条目，也不把通用去噪、通用质量评价方法包装成超声成果。与“结构保真”最接近的证据是 UltraVoxelGS 声称的“物理忠实渲染”与 UltraVoxelGS、LoopMR 的加速重建思路。泛 AI 方向上，像素空间视频扩散、视觉编码器解耦、去中心化LLM架构知识记录、辩论学习理论等值得关注。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

- **[Ultrasound Elastography: Excitation Methods and Low-Cost Alternative](http://arxiv.org/abs/2611.15645v1)**
  Otesteanu。综述超声弹性成像的激励方式，并探讨低成本替代方案；需要注意这是方法综述，摘要并未给出在散斑或噪声条件下的定量验证数据。

- **[UltraVoxelGS: Voxel-First Feed-Forward Gaussian Splatting for 3D Ultrasound Reconstruction](http://arxiv.org/abs/2611.11951v1)**
  Wang, Chen, Guo。前馈式3D超声重建，作者声称首次同时实现快速重建与“物理忠实渲染”，目标是在2D扫描时提供实时空间反馈。这是今日与“重建+结构保真”最直接相关的一篇；摘要未披露精度或临床数据。

- **[Subwavelength registration of skull-compensating acoustic holograms via nonlinear parametric array feedback](http://arxiv.org/abs/2611.15730v1)**
  Dash, Arvanitis。针对经颅超声中声学全息图的亚波长（1 MHz 下 <1.5 mm）对齐难题，提出用非线性参量阵反馈替代非MRI光学神经导航。属于波束形成/声场调控层面的硬件与对齐问题，不是图像去噪。

- **[The Calderón Problem with Randomly Distributed Resonant Droplets](http://arxiv.org/abs/2611.15196v1)**
  Anjana E. J., Sini。定量超声造影剂框架下的声学系数反演理论（随机分布共振微滴），属数学反问题，为定量超声成像提供理论依据。

- **[One Block Is Enough: LoopMR for Accelerated MRI Reconstruction](http://arxiv.org/abs/2611.14947v1)**
  He, Xie, Zheng 等。用单块跨迭代共享替代 PromptMR+ 的逐级独立块，避免参数量随级数增长。**这是MRI而非超声**，作为“加速重建+参数效率”的邻近参考列出，不可视为超声验证结果。

- **[Ultrasound-Assisted Biometric Watermarking Against Face Video Deepfakes](http://arxiv.org/abs/2611.11800v1)**
  Liu, Wang, Liu 等。将生物特征水印用于对抗人脸视频深度伪造，摘要提及现有水印易被篡改与私有模型伪造。主题是安全而非去噪或质量评价，归入超声应用的边缘延伸。

- **[Simulating Vein Compressibility for Ultrasound-Guided Femoral Access](http://arxiv.org/abs/2611.12818v1)**
  Manicka, Coulon, Ang 等。面向机器人超声引导股动脉穿刺，仿真探头压迫下的静脉塌陷等力学形变，强调速度与模体验证。与“跨设备/操作鲁棒性”相关的仿真侧工作。

- **[Domain adaptation of a video Foundation model for Heart Failure Diagnosis from Echocardiography](http://arxiv.org/abs/2611.13297v1)**
  Bolhassani, Geroski, Singam 等。将视频基础模型域适配到超声心动图心衰诊断，是跨中心/跨设备泛化在超声上的实证探索。

- **[Counterfactual Analysis of Extent Leakage from Annotation-Derived Prompts in Vision-Language Medical Image Segmentation](http://arxiv.org/abs/2611.13970v1)**
  Nataraj, Das, Krishna Mohan 等。在结肠镜与乳腺超声上揭示：文本提示中的大小、数量、位置词由评分用掩码反推而来，造成“范围泄漏”。对超声分割评测的**评估效度**有直接警示意义，属质量评价的方法论层面。

- **[Medical Image Segmentation: Foundation Model Adaptation versus Task-Specific Training](http://arxiv.org/abs/2611.14519v1)**
  Kutlusan, Li。指出多数基础模型对比只在训练分布内、且仅用单一任务基线；主张更严格的跨分布比较。是医学影像评测方法学的通用提醒。

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Unbundling Multimodal Vision Encoding](http://arxiv.org/abs/2611.17334v1)**
  Brown, Hoang, Qian 等。把视觉编码器拆解为“视觉先验/从零训练/移除编码器”三类设计选择分别检验，为多模态LM的视觉接入方式给出更清晰的取舍依据。

- **[ArchSpace: Recording, Reviewing, and Referencing LLM Architecture Research](http://arxiv.org/abs/2611.17332v1)**
  Wang, Zhu, Kuang 等。针对DeepSeek、Qwen、Kimi等团队的架构创新在公开报告中记录不全的问题，构建架构研究的记录与引用平台。

- **[Learning When Diffusion Language Models Should Regenerate](http://arxiv.org/abs/2611.17320v1)**
  Oh, Kim, Koo 等。以数独诊断出两个缺口：隐状态含 token 置信度未暴露的错误信息；孤立重掩码无法修正。提出学习“何时重生成”。

- **[Goal Encoding in LLMs](http://arxiv.org/abs/2611.17297v1)**
  Sen Sharma, Todd, Feucht 等。构造多子任务编码场景，检验LLM是否以可经多种执行路径实现的内部表征来编码“目标”。

- **[Two mathematical models of knowledge distillation](http://arxiv.org/abs/2611.17230v1)**
  Xie, Schmidt, Duchi。提出并分析蒸馏的数学模型，主张收益来自更易优化的损失景观而非更好的模型本身。

- **[Sketching Language Models for Context Attribution](http://arxiv.org/abs/2611.17313v1)**
  Liaw, Mehta, Velegkas 等。在稳定性假设下，用草图算法避免对 n 个 token 逐一做留一法所需的 n 次模型评估。

### 🤖 智能体与推理

- **[AgentSSL: Can MLE Agents Leverage Unlabeled Data?](http://arxiv.org/abs/2611.17323v1)**
  Lin, Sarkar, Liu 等。指出现有 MLE 智能体几乎只在全监督设定下被研究，首次系统考察其利用无标签数据的能力。

- **[Ballad: Bandit-Based LLM Routing for Automated Heuristic Discovery](http://arxiv.org/abs/2611.17241v1)**
  Verma, Anand, Ranu。挑战“更强更贵模型必然产出更好启发式”的假设，用 bandit 路由在自动启发式发现中按需选模型。

- **[LiveGeo / GeoWorld: Benchmarking Geographic Agents in Continuously Evolving Worlds](http://arxiv.org/abs/2611.17267v1)**
  Zhou, Liu, Yin 等。提出可控且持续演化的地理环境平台与基准，弥补现有评测在固定静态环境上推理规划的不足。

- **[Metal Sandbox: Isolated Execution and Command Scheduling for GPU Coding Agents on Apple Silicon](http://arxiv.org/abs/2611.17294v1)**
  Wang, Chen, Wan 等。面向端侧 Apple Silicon 的 GPU 内核生成智能体，提供隔离执行与命令调度。与“端侧部署”相关，但**不涉及超声**。

- **[CoReMem: Cost-Internalizing Memory for Successive Coding Tasks](http://arxiv.org/abs/2611.17316v1)**
  Li, Verma, Zhou 等。为未知的后续任务选择记忆时，显式权衡未来收益与读写成本。

### 🔧 方法与框架

- **[Classical Energies Learn to Reason 1,000x Faster than Looped Models](http://arxiv.org/abs/2611.17309v1)**
  Hoover, Blayney, Whittington。针对循环模型在数独/迷宫上不稳定、训练慢、参数与FLOPs耗费大的问题，用能量下降替代，声称快约1000倍（作者表述）。

- **[Back to Pixels: Lifting Latent Video Diffusion into Pixel Space](http://arxiv.org/abs/2611.17336v1)**
  Song, Chen, Rockwell 等。指出 VAE 潜空间在时空上的压缩已成为高分辨率与交互式生成的瓶颈（分辨率翻倍使 token 数四倍），探索回到像素空间。

- **[TTB: Test-time Baking for Efficient Rendering of Decoder-only View Synthesis Models](http://arxiv.org/abs/2611.17331v1)**
  Lin, Hachiuma, Choe 等。在 KV-cache 的 LVSMs 上提出“测试时烘焙”，试图兼顾 TTT 层省算力与画质。

- **[Towards a Theory of Learnability via Debate](http://arxiv.org/abs/2611.17303v1)**
  Lechner, Pathak, Sabato 等。为“人类裁决两模型辩论”这一对齐训练协议建立可学习性理论。

- **[Introducing Feedback Delays to Non-Delayed Adversarial MDPs](http://arxiv.org/abs/2611.17214v1)**
  Kulkarni, Nguyen, Chang 等。在表格式与线性 AMDP 中引入反馈延迟，达到最优 √S 与 √K 依赖，缩小既有 regret 界的 √S 缺口。

- **[Theoretical and Empirical Analysis of Sparse Convolution](http://arxiv.org/abs/2611.17212v1)**
  Tuteja, Tsai, Olenik 等。面向边缘设备（无人机、医疗系统、手机）的稀疏卷积理论与实测分析。

### 📊 应用

- **[Synthesis Smuggling: Maliciously Hiding Inferred Personal Attributes in LLM Outputs](http://arxiv.org/abs/2611.17280v1)**
  Galada, Shastri, Ray Choudhury。提出对抗性LLM从日常求助交互中推断敏感属性并隐写进无害输出、由用户无意转发的新威胁模型。

- **[Scalable Conversational Assessment: Chat-Based Exams with a Two-Agent LLM Pipeline](http://arxiv.org/abs/2611.17220v1)**
  Challen, Zilles。用双智能体 LLM 流水线把口头考试的追问式评估规模化。

- **[When Both Sides Adapt: The Challenges of Evaluating Interactive LLM Systems](http://arxiv.org/abs/2611.17239v1)**
  Hannah Li。用户会随模型响应改变提示策略与后续任务难度，导致评测所用的提示集合本身被模型影响；用统计方法刻画该评测难题。

- **[Spatial Foundry: A Multimodal Dataset for Spatial Intelligence](http://arxiv.org/abs/2611.17318v1)**
  Lin, Song。把外观、相机运动与场景变化纳入统一参照系的多模态空间智能数据集。

## 3. 研究趋势信号

从今日投稿看，与超声相关的进展主要集中在“采集—重建—对齐”链路：前馈体素高斯重建、声学全息图的亚波长配准、以及操作形变仿真，而非后处理去噪。评测侧出现一个更普遍的信号：医学影像论文开始质疑基准本身，例如由掩码反推的提示词造成的范围泄漏、基础模型对比仅在训练分布内进行；这直接关系到“质量评价是否可信”。泛 AI 方面，潜空间视频压缩的瓶颈促使部分工作回到像素空间，能量模型与循环模型的效率之争、以及为辩论/蒸馏建立理论模型也较为集中。**本批次未见超声去噪或无参考质量评价的专门工作，相关方向仍需等待。**

## 4. 值得精读

1. **[UltraVoxelGS](http://arxiv.org/abs/2611.11951v1)** — 今日唯一同时触及“超声重建”与“结构/物理保真”的工作；宜细读其前馈设计与“物理忠实渲染”的具体判据，判断其是否有可复用的保真度量（摘要未给数据）。
2. **[Counterfactual Analysis of Extent Leakage...](http://arxiv.org/abs/2611.13970v1)** — 在乳腺超声与结肠镜上直接检验评测泄漏，对任何超声分割/重建的评价协议设计都有直接约束意义。
3. **[ArchSpace](http://arxiv.org/abs/2611.17332v1)** 或 **[Unbundling Multimodal Vision Encoding](http://arxiv.org/abs/2611.17334v1)** — 若关注方法与架构层面：前者涉及工业界架构知识的记录规范，后者把视觉编码器的设计选择解耦，二者都便于迁移到医学多模态建模的选型思考。

*说明：本期未收录散斑抑制、自监督超声去噪、RF/IQ/通道数据专用方法或无参考超声质量评价论文，因所给材料中不存在此类条目；亦未将MRI、通用去噪或通用指标研究表述为超声成果。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*