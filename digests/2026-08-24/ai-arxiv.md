# ArXiv AI 研究日报 2026-08-24

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-08-24 11:03 UTC

---

# ArXiv AI 研究日报 — 2026-08-24

## 今日速览

今日投稿覆盖大模型对齐与安全、持续学习、机器人操纵表示学习等方向。安全对齐研究热度保持高位，出现多条解决"安全-能力权衡"的新路线（**CLEAR** 的连续适配器路由、**RARE** 的解耦表示与路由）。**AUSO** 提出技能生命周期三阶段框架，**VT-MUSE** 与 **JND Modeling** 分别从触觉-视觉融合和感知冗余角度推进具身智能。评估基准方面，**OmniAssistBench**、**VIALS** 和 **WildFin** 分别填补了全模态助手、生命科学视觉与野生鱼类行为识别的空白。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**CLEAR: Continuous Latent Adapter Routing for Utility-Preserving LLM Safety Alignment**
[Chengxiao Wang, Enyi Jiang, Xiaojing Liao et al.](http://arxiv.org/abs/2608.21278v1)
通过条件式连续潜在适配器路由实现安全对齐，在提升安全性的同时保持模型效用，直接回应"安全-能力权衡"难题。

**RARE: Decoupling Representation Steering from Expert Routing in MoE Language Models**
[Zhibo Zhang, Zhen Ouyang, Ling Shi et al.](http://arxiv.org/abs/2608.21236v1)
实证揭示表示工程直接应用于 MoE 模型的结构性失配，并提出将表示操控与专家路由解耦的轻量控制方案。

**Affective Context Amplifies Sycophancy in LLM Responses**
[Jiayi Li, Sanjana Menon, Brett Frischmann et al.](http://arxiv.org/abs/2608.21242v1)
基于讨好理论系统研究情感上下文如何放大 LLM 的马屁精倾向，对情感陪伴场景的安全部署有直接警示意义。

**Personalized Privacy Control in LLMs via Attention Head Intervention**
[Junseok Kim, Nakyeong Yang, Kyomin Jung](http://arxiv.org/abs/2608.21209v1)
突破"上下文隐私"单一大纲的局限，通过注意力头干预实现用户级可定制的隐私披露边界。

**No PUN Intended: Plausible Unknown Names for Person-Centred LLM Evaluation**
[Dimitri Staufer, David Hartmann, Ibrahim Baroud](http://arxiv.org/abs/2608.21206v1)
提出"可信未知人名"（PUN）方法，控制人名证据状态，避免评测中混淆记忆、检索与姓名先验，提升事实性与隐私评测的可靠性。

**When Adaptation Hurts: Connecting Representational Drift to OOD Failures in MedSAM Fine-Tuning**
[Marko Haralović, Sounic Akkaraju, Carlo Baretta et al.](http://arxiv.org/abs/2608.21300v1)
系统分析 MedSAM 微调中表征漂移与分布外失败之间的关联，为医学分割基础模型的自适应调优提供重要警示。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

**AUSO: Action-Level Unified Skill Optimization from Internalization to Utilization**
[Huizu Lin, Chengkai Huang, Tianqi Gao et al.](http://arxiv.org/abs/2608.21292v1)
将技能生命周期建模为"可学习知识→能力形成→按需调用"三阶段，统一优化技能的内化与利用过程。

**Memory Augmentation Unlocks Efficient Chain-of-Thought Reasoning**
[Simeng Zhang, Yilong Chen, Wenyuan Zhang et al.](http://arxiv.org/abs/2608.21265v1)
形式化 CoT 压缩的准确性-效率权衡，提出用记忆增强缓解激进压缩导致的逻辑断层，兼顾推理质量与推理开销。

**Move by Move: Measuring and Steering How LLMs Conduct Psychotherapy**
[Afonso Baldo, Hugo Pitorro, Areti Vassilopoulos et al.](http://arxiv.org/abs/2608.21325v1)
基于 MULTI-60 清单构建十类"治疗动作"本体，逐句标注并评估 LLM 心理治疗交互过程，开辟对话评估的新粒度。

### 🔧 方法与框架（新技术、基准测试、效率优化）

**OmniAssistBench: Assistant-style Interaction Benchmark for Omni-LLMs**
[Xianyun Sun, Chaoyou Fu, Zhengye Zhang et al.](http://arxiv.org/abs/2608.21360v1)
首个面向全模态 LLM 的助手式交互基准，聚焦持续环境感知与目标导向引导能力，区别于传统被动视频理解评测。

**VIALS: A Benchmark for Visual Interpretation of Artifacts in the Life Sciences**
[Elaine Lau, Thanuka Udumulla, Lee Izhaki-Tavor et al.](http://arxiv.org/abs/2608.21357v1)
包含 161 个生命科学视觉工件（凝胶印迹、显微图像、质粒图谱等）的视觉问答基准，填补专业科学工作流评估空白。

**E$^2$-TTT: Rethinking Expressivity and Efficiency in Test-Time Training**
[Zeyun Zhong, Joya Chen, Manuel Martin et al.](http://arxiv.org/abs/2608.21308v1)
提出兼顾逐 token 更新动态表达能力与分块近似硬件效率的测试时训练方案，推进长上下文处理。

**TurboBias 2.0: Streaming Context-Biasing for Production-Efficient ASR Systems**
[Vladimir Bataev, Lilit Grigoryan, Andrei Andrusenko et al.](http://arxiv.org/abs/2608.21343v1)
面向生产级 ASR 的流式上下文偏置方案，同时满足严格延迟约束与用户短语识别精度。

**Spotlight: 难度校准的插值路径（Difficulty-Calibrated Interpolation Paths for Conditional Flow Matching）**
[Airin Akter Tania, Md Raihan Khan](http://arxiv.org/abs/2608.21286v1)
提出根据数据难度自适应调整插值路径的条件流匹配训练策略，突破固定插值调度的局限。

### 📊 应用（垂直领域、多模态、代码生成）

**VT-MUSE: Multimodal Unified Sequential Visuotactile Representation Learning for Manipulation**
[Congsheng Xu, Qiaochu Yang, Fangyuan Shi et al.](http://arxiv.org/abs/2608.21290v1)
提出统一序列式视觉-触觉表征学习框架，在融合前捕捉细粒度跨模态依赖，提升操纵任务表现。

**JND Modeling for Token Compression in Vision-Language-Action Models**
[Zhuoyuan Li, Rui Zhao, Jin Wang et al.](http://arxiv.org/abs/2608.21247v1)
借鉴人类"恰可察觉差异"（JND）感知特性，为具身 VLA 模型设计保留感知关键信息的 token 压缩方法。

**PerturbRx: Learning Treatment-Conditioned Latent Transitions for Patient Drug Response Prediction**
[Yoshitaka Inoue, Minoh Jeong, Alfred Hero et al.](http://arxiv.org/abs/2608.21349v1)
显式建模治疗条件下的分子状态变迁，用于患者级癌症药物反应预测，克服数据稀缺与肿瘤异质性挑战。

## 研究趋势信号

本轮投稿呈现四条值得关注的新兴路径：

- **安全-效用解耦**：从全局安全微调转向条件路由（CLEAR）、注意力头干预等细粒度机制，在保持模型能力的同时实现个性化安全控制；
- **技能生命周期建模**：AUSO 提出技能"内化-形成-调用"三阶段，呼应持续学习与自主智能体对技能复用日益增长的需求；
- **跨模态感知新基准**：OmniAssistBench 与 VIALS 分别指向"交互式"与"专业领域视觉"评估的空白地带；
- **生理与临床序列建模**：AECOPD 时间感知预测、生理时间序列插值（Curriculum-Aware Interpolate-then-Refine）等工作持续下沉到临床现实约束（延迟、缺失模式）。

## 值得精读

1. **AUSO: Action-Level Unified Skill Optimization** — 首次以"生命周期"视角统一处理技能的内化与调用，对理解智能体技能的形成、迁移与按需使用机制有系统性贡献，值得完整阅读其框架设计与实验支撑。

2. **CLEAR: Continuous Latent Adapter Routing** — 直击安全对齐的核心矛盾（安全 vs 效用），将路由粒度细化到条件式连续空间，方法论上有较强创新性，对实际部署有参考价值，完整阅读可帮助评估其在多样化安全场景下的边界条件。

3. **VIALS: Visual Interpretation of Artifacts in the Life Sciences** — 面向专业生命科学工作流的高质量视觉问答基准，题目设计贴近真实科研决策场景，对多模态模型"专业能力"的评估范式有启发意义，值得精读以了解其数据构建与评测设计细节。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*