# ArXiv AI 研究日报 2026-09-28

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-28 14:28 UTC

---

# ArXiv AI 研究日报（2026-09-28）

## 今日速览

今日投稿呈现明显的「医学影像 + 基础模型」双主线：超声方向集中爆发，从胎儿先心病全研究筛查、像素级证据定位基准（UltraG-Bench）到 UltraBench 2，形成「数据—模型—评测」闭环；放射学侧则出现 3D 基础模型 nnFoundation 与乳腺筛查基础模型嵌入的预诊断信号研究。方法层面，LoRA 技能组合、推理早停与置信度自监督、量化泛化理论（OPTQ）构成效率与可靠性的两条支线。此外，多智能体扩展规律、编码感知的多模态服务拆分（EAServe）显示系统层优化正在向 LLM 之外延伸。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[New LoRA Skills Should Read but Never Write](http://arxiv.org/abs/2609.31600v1)**
  Z. Li, P. Yang, Q. Guo et al.
  提出让新增 LoRA 技能「只读不写」的组合范式，绕开权重空间合并的干扰与全量重训开销，对多任务适配器复用有直接工程价值。

- **[User Model Extraction via Belief Self-Distillation](http://arxiv.org/abs/2609.31603v1)**
  A. Holmov, Y. Huang, K. Bykov et al.
  用信念自蒸馏统一线性探针与因果探针，使 LLM 对用户属性的隐含推断可读、可写，是用户建模可解释性与可控性的新工具。

- **[Statistical attribute alignment for black-box generative AI via output post-processing](http://arxiv.org/abs/2609.31607v1)**
  K. Jiang, M. Austern, E. Dobriban et al.
  以输出后处理方式令黑盒生成模型的属性分布对齐用户指定目标，为公平性等约束提供免训练、免访问内部的合规路径。

- **[Weight Pair Encoding: Inducing a Smaller Grammar in Neural Network Weights](http://arxiv.org/abs/2609.31564v1)**
  I. Tallini, D. Solombrino, A. Cazzaniga et al.
  把有损 Re-Pair 压缩器嵌入直通估计器，微调后权重本身可被更小文法描述，为「可压缩性即结构」提供新视角。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[Learning to Stop without Learning to Stop: Self-Supervised Confidence Training Improves Reasoning Efficiency](http://arxiv.org/abs/2609.31619v1)**
  P. Hosseini, A. Tigalappanavara, S. Nawathe et al.
  用自监督置信度训练替代显式早停或长度惩罚，在不牺牲准确率的前提下压缩冗长推理链，直击推理模型推理成本痛点。

- **[Trust Guided Decision Transformer](http://arxiv.org/abs/2609.31586v1)**
  C. Gautam, R. B. Diddigi, C. Kamanchi et al.
  以模型自身的下一状态预测误差作为条件漂移信号，缓解 Decision Transformer 长回合退化，思路简洁且可插拔。

- **[Multi-agent Scaling Across Disjunctive and Compensatory Tasks](http://arxiv.org/abs/2609.31563v1)**
  C. Fortuna, B. Bertalanic
  借用 Steiner 群体任务分类，指出多智能体 LLM 的规模收益高度依赖任务结构，为「加人一定更强」的默认假设提供反例框架。

- **[HySTAR: Anchored Hypergraphs for Stable Credit Assignment in Cooperative MARL](http://arxiv.org/abs/2609.31531v1)**
  X. Luo, Y. Zhang, Y. Kuang et al.
  用锚定超图稳定高阶联盟的信用分配，缓解 MAPPO 式单全局价值与动态分组批评家之间的取舍。

- **[Can You Check That? The Checkability Boundary for Local LLM Network Automation](http://arxiv.org/abs/2609.31540v1)**
  M. Masood, M. Nofal
  提出「可检查性边界」概念，在数据不出域的前提下用本地小模型处理网络自动化输入，面向真实合规约束的落地研究。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **[UltraG-Bench: A Multi-task Benchmark for Assessing Large Vision-Language Models on Pixel-level Evidence Grounding in Ultrasound](http://arxiv.org/abs/2609.30928v1)**
  Q. Zhu, B. Xu, R. Lin et al.
  针对 VLM 在超声中「语义对但证据不对」的问题，构建像素级证据定位多任务基准，是医学 VLM 可信度评测的重要补位。

- **[UltraBench 2: Towards Robust Evaluation of Vision Foundation Models on Ultrasound](http://arxiv.org/abs/2609.28610v1)**
  A. Radhachandran, A. Tupper, C. Gagné et al.
  超声基础模型数量增长与评测滞后的矛盾下，给出更稳健的评测设计，建议与 UltraG-Bench 对照阅读。

- **[Compact Documentation for Coding Agents: A Benchmark, an Optimizer, and Why It Does Not Transfer](http://arxiv.org/abs/2609.31587v1)**
  M. S. Arman, I. Molybog
  以「从描述重生成代码能否通过原测试」的回环基准评估文档价值，并诚实报告优化器不迁移的负面结果。

- **[EAServe: Encode-Aware Disaggregated Serving for Multimodal Large Language Models](http://arxiv.org/abs/2609.31551v1)**
  K. Zhu, Z. Shu, H. Zheng et al.
  指出 MLLM 的第三阶段 Encode 打破了 Prefill/Decode 拆分假设，为多模态服务资源分配提供新的拆分维度。

- **[Generalization behavior of OPTQ and the role of regularization](http://arxiv.org/abs/2609.31560v1)**
  E. George, R. Saab
  从泛化角度分析 OPTQ 量化，厘清正则化在其中的作用，为量化算法选择提供理论依据。

- **[Gap-free Differentially Private PCA for Gaussian Data](http://arxiv.org/abs/2609.31614v1)**
  A. Ene, H. L. Nguyen
  给出高斯数据下无间隙的差分隐私 PCA 算法，是隐私保护降维的理论推进。

### 📊 应用（垂直领域、多模态、代码生成）

- **[nnFoundation: 3D Foundation Models for Radiology](http://arxiv.org/abs/2609.26924v1)**
  C. U. Harsy, T. Wald, K. Gotkowski et al.
  针对现有放射学基础模型规模有限、评测狭窄、域偏移脆弱的问题，提出 3D 基础模型方案，是今日最值得关注的医学基础模型工作之一。

- **[Foundation model embeddings capture pre-diagnostic changes on screening mammograms](http://arxiv.org/abs/2609.26605v1)**
  K. P. Slavkova, E. Brattain, A. Gowd et al.
  无需任务适配，即观察到乳腺筛查嵌入沿「癌症方向」移动快于匹配阴性对照，提示基础模型可捕捉预诊断组织变化。

- **[Towards Whole-Study Screening for Congenital Heart Disease in Fetal Ultrasound Using Multiple Instance Learning](http://arxiv.org/abs/2609.31376v1)**
  M. Azzam, R. Liu, E. C. Ugwueke et al.
  放弃「关键帧已被挑出」的假设，用多示例学习直接做全研究筛查，更贴近产前超声真实工作流。

- **[Structured Reasoning Agentic Framework for Interpretable Critical View of Safety Assessment](http://arxiv.org/abs/2609.31524v1)**
  Q. Xu, Y. Luo, Z. Chen
  把 CVS 评估从分类问题重构为可解释的结构化推理流程，面向腹腔镜胆囊切除的胆管损伤风险。

- **[Shadow Reduction in Ultrasound Imaging Using Differentiable Simulation and Radiance Field Decomposition](http://arxiv.org/abs/2609.29373v1)**
  V. Bacher, P. H. Yeung, B. Kainz et al.
  用可微模拟加辐射场分解削减颅骨声影，改善胎儿脑成像中近探头半球的对称评估。

- **[What Makes a Good Medical Image Tokenizer?](http://arxiv.org/abs/2609.24691v1)**
  N. Bubeck, Y. Zhang, V. Sideri-Lampretsa et al.
  系统反思医学图像 tokenizer 的重建与生成权衡，指出 tokenizer 选择实际上界定了所有下游任务上限。

- **[BeatGraph: Self-Supervised Heartbeat Graphs for Infant ECG Representations from the Home Environment](http://arxiv.org/abs/2609.31546v1)**
  M. N. H. Khan, M. S. Krafczyk, B. G. Bolster et al.
  以心跳为图单元替代固定长度分块，解决婴儿高心率下 patch 切开心搏的问题，面向家庭环境 ECG 基础模型。

- **[Adapting for AI: How elementary teachers adjust their practices for an AI-integrated curriculum](http://arxiv.org/abs/2609.31569v1)**
  F. Melese, R. Wu, X. Cui et al.
  从 HCI 视角记录小学教师为 AI 课程所做的教学调适，提醒课堂集成的瓶颈往往在教师工作而非技术本身。

## 研究趋势信号

今日投稿释放出三个信号。其一，医学影像正从「造模型」转向「验模型」：UltraG-Bench、UltraBench 2、医学 tokenizer 反思同期出现，评测与表示层的基础问题被重新摆上台面，且强调像素级证据与跨域稳健，而非单一指标刷分。其二，效率优化从推理期前移到训练期与权重层：LoRA 读写分离、权重文法压缩、置信度自监督早停、OPTQ 泛化分析，共同指向「如何让模型在部署约束下仍可组配、可压缩、可解释」。其三，系统与合规约束开始实质影响方法设计：EAServe 的编码感知拆分、本地 SLM 的网络自动化可检查性边界、越南教育的数据主权考量，说明工程落地中的非算法因素正成为论文的一等公民。

## 值得精读

1. **[nnFoundation: 3D Foundation Models for Radiology](http://arxiv.org/abs/2609.26924v1)**
   医学 3D 基础模型的规模、评测与域偏移问题是当前最核心的开放议题，该文同时触及三者，适合作为放射学基础模型方向的坐标参照。

2. **[UltraG-Bench](http://arxiv.org/abs/2609.30928v1) 与 [UltraBench 2](http://arxiv.org/abs/2609.28610v1)**
   两篇建议连读：前者聚焦「证据是否对齐」这一 VLM 可信度盲区，后者聚焦基础模型评测的稳健性，合起来是超声 AI 评测现状的完整切片。

3. **[Learning to Stop without Learning to Stop](http://arxiv.org/abs/2609.31619v1)**
   推理成本是当前推理模型落地的最大摩擦，该文用自监督置信度替代显式长度约束，方法轻、动机清晰，且易于迁移到其他长链推理场景。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*