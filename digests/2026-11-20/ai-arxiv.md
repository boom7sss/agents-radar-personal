# ArXiv AI 研究日报 2026-11-20

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-20 18:37 UTC

---

# ArXiv AI 研究日报（2026-11-20）

## 1. 今日速览

今日 50 篇投稿中**没有一篇直接以超声散斑抑制、超声重建或超声无参考质量评价为主题**，因此本报告不将任何通用去噪/重建/评价方法标注为“超声成果”，超声方向仅能提供少量可迁移的间接线索。与超声最相关的是医学影像与无参考/多机构鲁棒性工作：Barrett 食管病理基础模型的多机构分级（#22）、胸部 X 光报告多模态错误检测（#43）。通用视觉方向的高分辨率生成、度量深度与 3D 重建（#7、#10、#34、#42）在“结构保真 + 时序一致”上的取舍思路，对超声重建与质量评价有方法学借鉴价值，但均**未在超声数据上验证**。其余重点集中在扩散模型蒸馏与强化学习后训练（#1、#2、#6）、LLM 后训练与可解释读出（#19、#38、#39）以及智能体安全审计（#25、#31、#17）。

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价（今日无直接超声论文；以下为相关医学影像与可迁移方法，均已注明验证域）

- **[Multi-institutional grading of Barrett's esophagus dysplasia without stain normalization using a pathology foundation model and multiple instance learning](http://arxiv.org/abs/2611.26562v1)**
  A. Khosravi, J. M. Jagtap, D. C. Codipilly 等。多机构回顾性诊断准确性研究，病理基础模型 + 多示例学习在**不做染色归一化**的情况下分级，直接回应“跨设备/跨中心稳健性”问题；其无归一化流程可类比超声跨设备域偏移的评估范式，但验证域为病理切片，非超声。

- **[Rad-Linter: Multimodal Error Detection in Chest X-ray Reports](http://arxiv.org/abs/2611.26492v1)**
  Y. Cheng, B. Wen, Y. Lu。以图像证据核对报告一致性，图像分类器给出 9 类病变分数，1.5B LLM 经 LoRA 在 1,816 例上微调；是“用图像证据做质量核查”的实例，可为超声报告/图像一致性评价提供思路，验证域为胸片。

- **[Depth Pro 2: Sharp and Temporally Consistent Metric Monocular Depth](http://arxiv.org/abs/2611.26603v1)**
  P. Hu, M. Mihajlovic, L. Duong 等。指出多帧方法偏向时序一致、单帧方法偏向边界锐利，二者存在取舍——这与超声序列重建中“散斑平滑 vs. 结构边界保真”的核心矛盾同构，可作为结构保真评价设计的参考；**未在超声上验证**。

- **[ScaleWorld: High-Resolution World Generation through Shared Prediction and Refinement](http://arxiv.org/abs/2611.26615v1)**
  Y. Qu, W. Zheng, Q. Song 等。因果视频模型统一低分辨率预测与高分辨率精修，避免直接高分辨率生成的开销；其“先粗后精”的重建管线对高帧率/高分辨率超声重建有借鉴意义，验证域为通用视频。

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Represented but misread: Post-training changes how language models read out what they represent](http://arxiv.org/abs/2611.26584v1)**
  J. Laubrock。在 6 个开源基座模型及后训练版本上比较线性探针与模型自身回答（信号检测论分析），区分“表征改变”与“读出改变”；对理解后训练副作用有价值。

- **[AutoMaster: Autonomous Post-Training by Making the Same Model a Better Teacher](http://arxiv.org/abs/2611.26510v1)**
  G. Chen, S. Sun, F. Meng 等。提出 Skill-FT，用自然语言技能指导同一模型自任教师，指出成功轨迹中仍含无依据假设与表面验证——针对后训练信号质量的关键问题。

- **[GLiDE: A Fast, Calibrated Decision Model Distilled from Reasoning Teachers](http://arxiv.org/abs/2611.26509v1)**
  S. Allahyar, J. White, D. Atreja 等。单次前向打分候选答案、保留推理收益且输出校准置信度，适合延迟敏感场景，与端侧部署诉求相关。

- **[TideCache: Efficient Hybrid LLM Serving with Transparent Cache Management and Layer-Wise Streaming](http://arxiv.org/abs/2611.26619v1)**
  J. Luo, X. Yao, S. Yang 等。针对混合架构（全局注意力 + 有界状态层）异构缓存随上下文与并发变化的问题，提出 CPU–GPU 超级芯片上的服务系统，属效率优化方向。

### 🤖 智能体与推理（规划、工具使用、多智能体、安全）

- **[Replication of Agentic Security Events: Audit and Investigation (ROGUE-AI)](http://arxiv.org/abs/2611.26553v1)**
  M. Wang, M. Alam, K. Nakka 等。针对媒体报道的智能体事故（如编码智能体删除生产数据库）普遍缺乏可验证性，提出事件复现与审计框架。

- **[Backtracking Agent Applications Security Incidents](http://arxiv.org/abs/2611.26525v1)**
  Y. Cai, T. Kim, P. Liu。以轨迹等可用工件回溯智能体安全事故的入侵入口点（CEP），与服务端审计互补。

- **[PlayCraft: Designing Engaging Games from Agent Play Experience](http://arxiv.org/abs/2611.26624v1)**
  W. Cheng。用视觉智能体试玩并据其经验自动调参，把“精通感”作为参与度来源，是智能体驱动设计闭环的案例。

- **[AgentRoboCritic: Understanding the Capability of Frontier Agents on Direct Robot Control](http://arxiv.org/abs/2611.26613v1)**
  Y. Du, Y. Kuang, Q. Zhao 等。指出既有基准仅报告回合级成功率，无法说明智能体如何通过低层数值动作控制机器人，提出更细粒度评估。

### 🔧 方法与框架（新技术、基准、效率）

- **[A new algorithmic approach for finding flat minima: critically damped Polyak stepsizes](http://arxiv.org/abs/2611.26475v1)**
  F. Caporali, J. M. Altschuler, B. Hanin。提出临界阻尼 Polyak（CDP）步长，使梯度下降偏向平坦极小值，并给出局部二次目标下 sharpness 与损失下降的首个一致时间保证。

- **[Bayesian optimization on amortized search space](http://arxiv.org/abs/2611.26459v1)**
  T. Fauvel, F. Pavone, T. Guillou 等。利用仿真器的摊销逆映射重塑贝叶斯优化的搜索空间，适合存在近似机理模型的真实黑箱问题。

- **[Simple Private Noisy SGD is Minimax-Optimal under Population Strong Convexity](http://arxiv.org/abs/2611.26515v1)**
  V. Roth, M. Avella Medina。回答最简差分隐私 Noisy SGD 是否达极小极大最优的理论问题，属隐私训练理论。

### 📊 应用（垂直领域、多模态、代码/工程）

- **[SoK: Assessing the Evolution of LLM Capability in Software Vulnerability Research](http://arxiv.org/abs/2611.26601v1)**
  A. Lbath, M. Suri, A. Delaitre 等。系统化梳理分散在论文与厂商报告中的 LLM 漏洞发现/验证/修补主张，试图为“能力演进”建立可对照的图景。

- **[AnyVIO: Feed-Forward Streaming Visual-Inertial Odometry Across Platforms](http://arxiv.org/abs/2611.26625v1)**
  O. Atekha, M. Greiff, R. Zhang 等。用惯性传感补足几何基础模型的度量尺度不可观问题，跨平台流式估计，属实时部署相关。

- **[Verify the Verifier: Specification-Grounded LLM Cross-Checking for Bugs That Escape UVM Scoreboards](http://arxiv.org/abs/2611.26588v1)**
  A. E. Sanchez Villalobos, M. D. Quinn, A. Tyagi 等。针对“通过全部测试但违反规格”的 scoreboard 逃逸缺陷，用规格锚定的 LLM 交叉核查。

- **[Hybrid Retrieval for Government Scheme Search in English and Marathi](http://arxiv.org/abs/2611.26514v1)**
  A. Gunjal, K. Khemnar, P. Poojary 等。BM25 与句向量检索结合的双语政务检索系统，属低资源语言落地。

## 3. 研究趋势信号

今日投稿呈现两条主线：一是**生成模型向“少步、可控、有结构”收敛**——扩散蒸馏（#1）、把 RL 后训练解释为激活引导（#2）、用视频扩散先验做隐动作学习（#6）与 4D 可规划世界（#34），共同关注“压缩采样步数但保住结构与可控性”。二是**智能体从能力展示转向可审计**——事故复现、CEP 回溯、细粒度机器人控制评测集中出现。对超声方向而言，今日没有可直接采用的成果，但“时序一致 vs. 边界锐利”的取舍（#10）与“无归一化多中心评估”（#22）是设计超声重建与无参考质量评价时值得借用的实验框架。

## 4. 值得精读

- **[Depth Pro 2](http://arxiv.org/abs/2611.26603v1)**：把“平滑-锐利”权衡讲清楚，并给出兼顾时序一致与边界锐利的全分辨率方案，是超声序列重建与结构保真指标设计最可迁移的一篇。
- **[Multi-institutional grading of Barrett's esophagus dysplasia](http://arxiv.org/abs/2611.26562v1)**：无染色归一化的多机构研究设计，为跨设备超声稳健性评估提供可复用的实验范式与外部验证思路。
- **[Replication of Agentic Security Events (ROGUE-AI)](http://arxiv.org/abs/2611.26553v1)**：智能体安全从轶事报道走向可复现审计，是当前 agent 落地的关键缺口。

---
*说明：本期无超声去噪/重建/质量评价主题论文，相关小节仅收录医学影像与可迁移方法，且未将通用方法表述为超声成果。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*