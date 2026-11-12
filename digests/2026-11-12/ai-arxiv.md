# ArXiv AI 研究日报 2026-11-12

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 26 篇论文 | 生成时间: 2026-11-12 18:21 UTC

---

# ArXiv AI 研究日报（2026-11-12）

## 1. 今日速览

今日投稿中**没有直接针对超声去噪、超声重建或无参考超声质量评价的论文**，因此本报告的重点部分不列超声条目，以免把通用医学影像方法误称为超声成果。与超声去噪最相关的邻域信号来自医学图像分割的基础模型适配评估（#1），以及 EM 病灶检测中标注稀缺条件下的示例驱动定位（#2）；两者都涉及医学影像在标注不足、跨分布时的可靠性，可作为方法论参考。通用视觉侧，`C$^2$-Routing`（#21）与 RS-JEPA（#11）分别讨论视觉 token 压缩和跨传感器检索，与“输入降载、跨设备稳健”的思路相近。其余较强的工作集中在后训练与 RL 理论（#23、#4）、智能体工程化（#12、#13）与科学发现智能体（#5）。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

> 今日来源中没有超声去噪、超声重建或超声质量评价的直接论文。以下两条属于最接近的医学影像邻域工作，**原文未涉及超声数据，不构成超声验证**。

- **[Medical Image Segmentation: Foundation Model Adaptation versus Task-Specific Training](http://arxiv.org/abs/2611.14519v1)**
  Kutlusan, Li
  系统比较自然图像预训练基础模型适配与任务专用训练在医学分割上的表现；摘要明确指出既往比较多局限于训练分布内、且只用一个任务专用基线，这正是评估“去噪或重建后结构保真”时需要警惕的评测偏差来源。

- **[Toward Foundation Detection Models via Example-Based Grounding in EM-DETR](http://arxiv.org/abs/2611.14518v1)**
  Bhat, Georgescu, Mansoor et al.
  针对医学病灶检测中标注稀缺、标准化不足的问题，提出基于示例定位的检测建模范式；其中“少标注、弱标准化”的设定，与超声数据缺乏干净参考的处境同源，可作迁移参考，但原文并未做超声实验。

### 🤖 智能体与推理

- **[Contrastive Discovery: Open-Ended Scientific Discovery over Competing Explanations](http://arxiv.org/abs/2611.14514v1)**
  Liu, Kim, Dai et al.
  指出科学发现智能体多采用逐点证伪（只检验 h 与其补集），拒绝后无法得到替代解释，提出在竞争性假设之间做对比式推断；这是对“假设空间搜索”评估范式的一次实质修正。

- **[ReTrace: Distilling Tool-Using Agents into Planner-Free Workflows](http://arxiv.org/abs/2611.14492v1)**
  Hou, Kuo, Bhattacharya et al.
  针对同一 SOP 反复执行时每步都调用 LLM 带来的延迟与成本，提出把工具型智能体蒸馏为无规划器的固定工作流；对端侧和批量部署的成本约束有直接吸引力。

- **[Re-Search: Dissecting LLM Ideation Through a Two-Player Questioning Game](http://arxiv.org/abs/2611.14487v1)**
  Gao, Zhu, Su et al.
  将研究构思重构为双人提问博弈，用来暴露迭代搜索过程而非只看最终想法；补上了构思类评测长期“只看结果、不看搜索路径”的缺口。

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[A Theory of Policy Optimization in Post-Training: Coverage Collapse and Reference Resets](http://arxiv.org/abs/2611.14467v1)**
  Huang, Jiang, Kakade et al.
  以基座模型的响应覆盖面为核心量，给出后训练策略优化的样本与梯度复杂度刻画，并提出参考重置以应对覆盖塌缩；为 RL 后训练的失败模式提供了可操作的理论解释。

- **[AutoScaffold: AI-Guided Scaffolding for Reinforcement Learning of Language Models](http://arxiv.org/abs/2611.14515v1)**
  Zhang, Hu, Peng et al.
  指出 RLVR 的结局奖励把每次尝试压成单一数值，浪费了大部分训练信息，转而用训练期提示脚手架显式利用策略或提示；是“让奖励之外的信息回流到训练”的一条具体路径。

- **[When does text encoding matter for language modeling?](http://arxiv.org/abs/2611.14459v1)**
  Jang, Arnett, Blevins
  直接考察 UTF-8 变长编码在设计上带来的跨语言不平等对模型性能的实际影响；把一个长期被默认接受的预处理决策变成可测量的问题。

### 🔧 方法与框架（技术、基准、效率）

- **[C$^2$-Routing: Complementary Cropping and Compression for Efficient Vision-Language Inference](http://arxiv.org/abs/2611.14469v1)**
  Lu, Chen
  面向 VQA 的视觉 token 降载，指出简单设定 token 上限会损失信息，提出裁剪与压缩互补的模型无关路由；属于黑盒可用的推理降本手段。

- **[TorchCurves: Differentiable Parametric Curves](http://arxiv.org/abs/2611.14516v1)**
  Shtoff
  把 B 样条与 Legendre 基表示的参数曲线作为可学习原语，支持对输入和系数同时求导；可作为几何先验、曲线拟合类重建任务的通用构件。

- **[TimeSeek: Multi-Task and Multi-Domain Pretraining for Generalized Time Series Analytics](http://arxiv.org/abs/2611.14491v1)**
  Chen, Wang, Rao et al.
  针对时序基础模型“只靠堆 Transformer 层扩参、能力不随规模增长”的问题，转向多任务多域预训练；对 RF/IQ 等信号序列的通用表征训练有方法借鉴价值（原文为通用时序，非超声）。

- **[Continual-ARC: Measuring Skill Acquisition over a Working Lifetime](http://arxiv.org/abs/2611.14505v1)**
  Lenton
  批评现有持续学习基准只覆盖单一领域、每个实例只用一次、假设单一学习器家族，提出跨“工作生命周期”的技能获取度量；是评测设计层面较有分量的反思。

- **[FERN: Cross-Benchmark Table Retrieval for Text-to-SQL with Frozen Retrievers and Learned Ranking](http://arxiv.org/abs/2611.14477v1)**
  Rao, Gopinath
  在合并 BIRD/Spider/Fiben 的大目录上做表检索，以冻结检索器加学习排序替代全文关键词抽取式选表，并直接对标 RASL 的公开召回；工程可复现性较好。

### 📊 应用（垂直领域、多模态、生物医学）

- **[Emergent Biological Capabilities in a Foundation Model for Molecular Interactions](http://arxiv.org/abs/2611.14504v1)**
  Mashiach
  在约 3.2 万亿 token 的蛋白-配体配对数据上训练多模态基础模型 Bonbon，观察到超出训练目标的涌现任务能力；是把“规模化涌现”范式搬到多模态生物学的明确尝试。

- **[Pyrite: Building and Benchmarking Protein-Ligand Pose Ranking Agents](http://arxiv.org/abs/2611.14511v1)**
  Srivastava, Lim, Keys et al.
  指出共折叠模型能生成多样候选构象但排序不可靠，构建含 1,500 对构象的成对排序基准；把“生成”与“排序”解耦评测，思路与重建后质量评价相通。

- **[Accurate predictions of properties of energetic materials with tabular foundation models](http://arxiv.org/abs/2611.14462v1)**
  Glomsrud, Bynke, Olsen et al.
  用 TabPFN 在零超参调优下预测感度、分解温度与晶体密度三项性质，均超过已发表最优模型；是表格基础模型在专业小数据场景的有力实证。

- **[BoviShift: A Six-Year Multi-Attribute Audit of Visual Cattle Phenotyping Across Animals and Time](http://arxiv.org/abs/2611.14476v1)**
  Shagor, Tonmoy, Miah
  指出按图像随机划分会把同一动物视图同时放进训练与测试，提出跨个体、跨时间的六年度多属性审计；对“同一受试跨划分泄漏”的评测陷阱有普适警示意义。

## 3. 研究趋势信号

今日投稿呈现三条信号。其一，**评价方法本身成为研究对象**：分割基础模型适配的比较偏差（#1）、CV 方差理论（#24）、持续学习基准的局限（#5）、构思过程的可见化（#15）、个体级数据泄漏审计（#19），共同指向“评测协议比模型分数更值得审”。其二，**后训练理论开始给出机制性病名**，如覆盖塌缩与参考重置（#23），并用训练期脚手架回收结局奖励丢弃的信息（#4）。其三，**基础模型向专业小数据渗透**，表格模型在含能材料上零调参胜过专用模型（#25），分子交互模型展示涌现能力（#9）。

## 4. 值得精读

1. **[A Theory of Policy Optimization in Post-Training: Coverage Collapse and Reference Resets](http://arxiv.org/abs/2611.14467v1)** — 对后训练中“越训越窄”的现象给出可检验的理论刻画与算法对策，读者面最广，且直接指导 RL 训练配方。
2. **[Medical Image Segmentation: Foundation Model Adaptation versus Task-Specific Training](http://arxiv.org/abs/2611.14519v1)** — 对“基础模型是否取代任务专用模型”给出更严格的比较框架；其指出的分布内评测与单一基线偏差，可迁移到任何“去噪后结构保真”类评估设计。
3. **[Contrastive Discovery: Open-Ended Scientific Discovery over Competing Explanations](http://arxiv.org/abs/2611.14514v1)** — 把假设评估从逐点证伪改为竞争解释对比，是科学发现智能体范式中少见的、原则清晰的问题重构。

---

**编辑说明**：今日来源不含超声散斑抑制、自监督或无干净参考去噪、RF/IQ/通道数据与波束形成、无参考质量评价的论文，故该部分未列条目；报告中所有医学影像与信号类工作均按其原文真实模态描述，未作超声外推。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*