# ArXiv AI 研究日报 2026-11-21

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 45 篇论文 | 生成时间: 2026-11-21 17:36 UTC

---

# ArXiv AI 研究日报（2026-11-21）

## 1. 今日速览

今日 45 篇投稿中，**没有一篇直接针对超声去噪、超声重建或去噪后图像质量评价**，按"不凑篇数"原则，本报告不将任何通用方法包装为超声成果。最接近医疗影像的是巴雷特食管病理分级（#22）与胸片报告多模态错误检测（#43），二者可作医学影像质量评价的思路延伸，但均未涉及超声。其余重点集中在扩散模型蒸馏与 RL 后训练的机理分析、世界模型/3D 重建、以及 LLM 后训练与安全审计。超声方向近期无投稿这一信号本身值得关注。

---

## 2. 重点论文

### 🩺 超声去噪、重建与质量评价

**今日无超声相关投稿。** 以下为可迁移至超声质量评价/影像分析的医学影像工作，仅作延伸参考，**均未在超声上验证**：

- **[多机构巴雷特食管异型增生分级](http://arxiv.org/abs/2611.26562v1)** — A. Khosravi 等：病理基础模型 + 多实例学习，免染色归一化，涉及跨机构验证，对"无参考、跨设备稳健性"评价有借鉴意义。
- **[胸片报告多模态错误检测](http://arxiv.org/abs/2611.26492v1)** — Y. Cheng 等：小型 LLM（1.5B, LoRA）+ 图像分类器一致性检查，用于报告纠错，属质量评价性质工作，但对象为报告非图像重建质量。

### 🧠 大语言模型

- **[后训练改变的是读出而非表征](http://arxiv.org/abs/2611.26584v1)** — J. Laubrock：用线性探针 + 信号检测理论对比六个开源基座与后训练版本，区分"表征变化"与"读出变化"，对理解对齐机制有价值。
- **[Verify the Verifier](http://arxiv.org/abs/2611.26588v1)** — A. E. Sanchez Villalobos 等：用规范约束的 LLM 交叉检查发现 UVM scoreboard 失效的硬件 bug，属验证工程与 LLM 结合。
- **[AutoMaster / Skill-FT](http://arxiv.org/abs/2611.26510v1)** — G. Chen 等：用自然语言"技能"引导自蒸馏式后训练，让同一模型做更好教师，关注成功轨迹中的虚假假设问题。
- **[GLiDE](http://arxiv.org/abs/2611.26509v1)** — S. Allahyar 等：从推理教师蒸馏出可校准的单次前向决策模型，兼顾速度与校准。

### 🤖 智能体与推理

- **[AgentRoboCritic](http://arxiv.org/abs/2611.26613v1)** — Y. Du 等：超越 episode 级成功率，细粒度评估前沿多模态智能体直接低层机器人控制能力。
- **[ROGUE-AI](http://arxiv.org/abs/2611.26553v1)** 与 **[Backtracking Agent Security Incidents](http://arxiv.org/abs/2611.26525v1)** — 分别聚焦智能体安全事故的复现审计与轨迹回溯定位入侵点，构成智能体安全事件取证的一对工作。
- **[GEOHunter](http://arxiv.org/abs/2611.26564v1)** — S. Tang 等：测绘生成引擎优化（GEO）灰色产业链网络，揭示检索增强答案被操纵的风险。
- **[FLUID](http://arxiv.org/abs/2611.26491v1)** — Y. Zhao 等：证据接地的实时任务指导，允许"沉默"作为正确动作，贴合真实交互灵活性。

### 🔧 方法与框架

- **[Posterior Matching Distillation](http://arxiv.org/abs/2611.26629v1)** — H. Yesiltepe 等：扩散蒸馏新方法，将教师分布匹配问题重新建模，加速图像/视频生成。
- **[RL 后训练即激活转向（Activation Steering）](http://arxiv.org/abs/2611.26627v1)** — T. H. S. Meral 等：提出 RL 对扩散 Transformer 的增益本质是激活转向，对理解扩散 RL 机制有解释价值。
- **[One Prior, Two Dynamics](http://arxiv.org/abs/2611.26617v1)** — Y. Jiang 等：复用视频扩散 Transformer 作先验做自监督潜在动作学习。
- **[TideCache](http://arxiv.org/abs/2611.26619v1)** — J. Luo 等：混合架构 LLM 的透明缓存管理与逐层流式服务，面向 CPU–GPU 超芯片部署。
- **[Direct3D-V3](http://arxiv.org/abs/2611.26511v1)** — S. Wu 等：原生体素域的无潜变量扩散 Transformer 三维生成。

### 📊 应用

- **[Depth Pro 2](http://arxiv.org/abs/2611.26603v1)** — P. Hu 等：全分辨率单目/视频稠密度量深度，正面处理时序一致性与边界锐度的权衡（对重建类任务有方法启发）。
- **[SGAR](http://arxiv.org/abs/2611.26493v1)** — A. Fan 等：稀疏几何引导注意力，缓解稠密全局注意力随视角数的二次增长。
- **[AnyVIO](http://arxiv.org/abs/2611.26625v1)** — O. Atekha 等：跨平台前馈流式视觉惯性里程计，用惯性观测补足单目不可观尺度（与"多模态补观测"思路相通）。

---

## 3. 研究趋势信号

今日最显著趋势是**对生成/训练机制的解释性拆解**：Posterior Matching Distillation 与 "RL 即激活转向" 都在追问蒸馏与后训练"到底改变了什么"。其次，**智能体安全**从模型层转向运行层——事故复现、轨迹回溯、GEO 灰产测绘形成完整链条。医疗影像侧则延续**基础模型 + 跨机构泛化 + 多模态一致性校验**路线。值得注意的是，**今日无超声相关投稿**，超声去噪/重建/无参考评价方向正处于投稿低谷，相关研究者宜扩大检索窗口。

---

## 4. 值得精读

1. **[RL Post-Training in Diffusion Transformers Is Activation Steering](http://arxiv.org/abs/2611.26627v1)** — 提出机制性解释而非仅报性能，可能改变后续扩散 RL 的设计假设，对理解"后训练改了表征还是读出"这一问题有范式意义。
2. **[Posterior Matching Distillation](http://arxiv.org/abs/2611.26629v1)** — 蒸馏方法的核心改进，影响图像/视频生成的推理成本，方法本身可迁移至重建类生成任务。
3. **[Depth Pro 2](http://arxiv.org/abs/2611.26603v1)** — 明确诊断"时序一致性 vs 边界锐度"的固有权衡，其分析框架对任何重建/深度类任务的评价设计（结构保真而非单一 PSNR）有直接参考价值。

> **说明**：本报告中所有论文均来自用户提供材料，未在超声数据上验证的工作已明确标注为延伸参考，未将其表述为超声成果。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*