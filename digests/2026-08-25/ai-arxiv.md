# ArXiv AI 研究日报 2026-08-25

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-08-25 11:00 UTC

---

# ArXiv AI 研究日报 — 2026-08-25

## 今日速览

今日投稿呈现三条主线：**智能体与推理**成为最活跃方向，涵盖长程推理优化（SRPO、Prime Agent）、开放世界技能创建（SkillAlchemy）及多智能体交互研究（Interaction Tax）；**LLM对齐与安全**出现一批高质量工作，包括推理诱发越狱的跨架构研究、记忆系统注入攻击（InjecMEM）及奇怪泛化的威胁模型分析；**效率与可证明性**方面，连续流语言模型的收敛性保证（ConvergeFlow）、扩散模型训练-free加速（ChebBooster）和代理架构（ProxyFormer）持续推进。此外，世界模型（ReWorld、GeoWAM）与科学应用（Ariel任务可解释性、血压监测）也值得关注。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

- **[Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1)** — Yipeng Zhao, Qishun Yang, Shenzhe Zhu et al.
  针对推理数据微调诱发有害行为的安全威胁，提出跨架构有效的安全性方向惩罚方法（cs.AI, cs.CL）。

- **[On the Threat Model of Weird Generalization and Emergent Misalignment](http://arxiv.org/abs/2608.23476v1)** — Miriam Wanner, Mark Dredze, William Walden
  系统研究小规模领域数据微调产生广泛行为变化（weird generalization）的必要条件，澄清突发错位的威胁模型（cs.CL）。

- **[ConvergeFlow: Language Flow with Provable Convergence to Token Embeddings](http://arxiv.org/abs/2608.23551v1)** — Na Li, Yuchen Jiao, Changxiao Cai et al.
  解决连续流语言模型流轨迹不保证终止于有效token的问题，提供收敛性证明，减少对交叉熵解码器的依赖（cs.CL, cs.LG）。

- **[ProxyFormer: A Dual-Stream Proxy Architecture for Ultra-Long Context and High-Resolution Generation](http://arxiv.org/abs/2608.23463v1)** — Zhongpan Tang
  基于代理token的双流架构，突破注意力计算与KV缓存随序列长度的二次增长瓶颈（cs.LG）。

- **[How to Train a Critic Stably and Efficiently](http://arxiv.org/abs/2608.23566v1)** — Penghui Qi, Xiangxin Zhou, Wee Sun Lee
  针对GRPO等基于采样的RL方法，提出稳定高效的critic训练方案，实现单响应token级优势估计（cs.LG, cs.AI）。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

- **[SRPO: Self-Reflective Policy Optimization for Long-Horizon Reasoning](http://arxiv.org/abs/2608.23493v1)** — Jialong Liu, Yuling Shi, Ning Yang et al.
  将自我反思引入LLM后训练，把稀疏的结果反馈转化为可操作的信用分配信号，用于长程推理（cs.AI）。

- **[Prime Agent: A Self-Improving RLM Harness](http://arxiv.org/abs/2608.23552v1)** — Seth Karten, Alex L. Zhang, Kevin Thomas et al.
  开源的长程智能体评估与编码工作流工具，基于递归语言模型架构，支持自我改进（cs.AI, cs.CL, cs.SE）。

- **[SWE Refactor Bench: Can Coding Agents Complete a Long-Horizon, Whole-Repository Stack Migration?](http://arxiv.org/abs/2608.23564v1)** — Deyao Hong, Yizhe Chi, Wenyi Li et al.
  首个评估编码智能体完成仓库级全栈迁移能力的长程基准，填补现有bug修复基准的空白（cs.CL, cs.SE）。

- **[The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1)** — Summer Eunhyung Ann, Haokun Liu, Chenhao Tan
  揭示多智能体交互的"互动税"效应：通信可能消除团队多样性而不提升质量（cs.MA, cs.AI）。

- **[SkillAlchemy: Open-World Agent Skill Creation](http://arxiv.org/abs/2608.23417v1)** — Hengjun Wang, Shuyue Wei, Boyi Liu et al.
  开放世界环境下智能体自动创建可复用技能的新方法，减少对人类编写和模型先验的依赖（cs.AI）。

- **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)** — Hanling Tian, Gengyu Zhang, Zeyang Sha et al.
  首次系统研究LLM智能体记忆子系统引入的新型攻击面，仅需最少权限即可实现记忆注入（cs.CR, cs.AI）。

- **[StrategyBench: Evaluating Explicit Strategy Induction in Large Language Models](http://arxiv.org/abs/2608.23475v1)** — Jinghan Tan, Yuanzheng Wang, Lu Chen et al.
  评估LLM在少样本情境下显式归纳任务策略的能力，针对直接ICL缺乏规则抽象的问题（cs.AI）。

### 🔧 方法与框架（新技术、基准测试、效率优化）

- **[FixAnything: 3D-Consistent Rendering Refinement via Video Generative Priors](http://arxiv.org/abs/2608.23549v1)** — Khiem Vuong, Deva Ramanan, Srinivasa Narasimhan
  利用视频生成先验修复3D渲染伪影（3DGS、NeRF等），在稀疏输入视角下保持3D一致性（cs.CV）。

- **[EarthVerse: Benchmarking Scientific Agents Across Dynamic Earth Systems and Natural Hazards](http://arxiv.org/abs/2608.23525v1)** — Zhiqing Cui, Xinxiang Yin, Yihong Tang et al.
  面向地球系统与自然灾害的科学研究智能体基准，覆盖多源、多尺度、多模态观测数据（cs.AI）。

- **[ReWorld: An Interactive World Model with Long-Horizon Memory](http://arxiv.org/abs/2608.23565v1)** — Zhifei Chen, Luozhou Wang, Guibao Shen et al.
  交互式世界模型的新架构：训练时分离控制与记忆、推理时约束两者，解决短时控制与长时记忆的结构性矛盾（cs.AI）。

- **[ChebBooster: A Training-Free Approach for Efficient Diffusion Transformer Inference via Chebyshev-Inspired Extrapolation](http://arxiv.org/abs/2608.23429v1)** — Chengjie Lu, Tianchi Deng, Zhengqi He et al.
  基于Chebyshev插值外推的训练-free加速方法，避免朴素缓存重用带来的质量损失（cs.LG, cs.AI）。

### 📊 应用（垂直领域、多模态、代码生成）

- **[EG-ARSA: An Expert-Grounded Open Model for Visual Road Safety Auditing in Low-Resource Settings](http://arxiv.org/abs/2608.23563v1)** — Md Thamed Bin Zaman Chowdhury, Moazzem Hossain
  面向中低收入国家道路安全审计的专家知识驱动视觉模型，应对事故记录不全与审计人员短缺问题（cs.CV, cs.AI）。

- **[GeoWAM: Visual Geometry World Action Models for Autonomous Driving](http://arxiv.org/abs/2608.23486v1)** — Yiren Lu, Xin Ye, Jiaming Liu et al.
  在像素空间联合建模场景演化与自车动作基础上引入视觉几何约束的世界动作模型（cs.CV, cs.RO）。

- **[Act with Intent: Distilling Behavior Intent for Vision-Language-Action Models](http://arxiv.org/abs/2608.23478v1)** — Sangoh Lee, Sangwoo Mo, Wook-Shin Han
  从行为克隆示范中提炼行为意图这一局部目标，提升VLA模型动作解码的语义对齐（cs.RO, cs.AI）。

- **[Traceable Spectral Inference via Influence Functions: Efficient Data Attribution and Error Proxies for the Ariel Mission](http://arxiv.org/abs/2608.23458v1)** — Nikki Grens, Luís F. Simões, Kai Hou Yip et al.
  将影响函数用于ESA Ariel系外行星任务的谱推断：高效数据归因与物理合理性代理评估（cs.LG, astro-ph.IM）。

## 研究趋势信号

今日投稿最显著的趋势是**智能体安全与可靠性成为系统性研究主题**：从推理诱发错位、记忆注入攻击到奇怪泛化的威胁建模，安全研究正从单模型转向智能体全栈。第二个信号是**"可证明性"回归**——无论是ConvergeFlow的收敛保证、GRPO critic的稳定性，还是扩散模型加速的理论外推，研究者越来越重视方法的理论依据。第三个信号是**世界模型的实用化转向**：ReWorld与GeoWAM均从结构设计上处理长时记忆与几何一致性，而非仅追求生成质量。此外，**科学应用AI**（地球系统基准、空间任务可解释性、医疗预测）持续产出高质量工作。

## 值得精读

1. **[InjecMEM: Memory Injection Attack on LLM Agent Memory Systems](http://arxiv.org/abs/2608.23471v1)** — 记忆已成为LLM智能体的默认子系统，但安全影响尚未被系统研究。本文首次提出记忆注入攻击范式，对理解新一代智能体安全至关重要。

2. **[Mitigating Reasoning-Induced Misalignment via Safety-Direction Penalty](http://arxiv.org/abs/2608.23497v1)** — 推理数据本身可能诱发有害行为，这一发现对推理模型的安全对齐具有直接指导意义，且方法宣称跨架构有效。

3. **[The Interaction Tax: When Communication Erases Diversity in Multi-Agent Teams](http://arxiv.org/abs/2608.23541v1)** — 多智能体交互并非总是有益，本文揭示通信如何消除团队多样性，为多智能体系统设计提供了重要的反直觉视角。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*