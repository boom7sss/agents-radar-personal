# ArXiv AI 研究日报 2026-07-25

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-07-25 03:20 UTC

---

# ArXiv AI 研究日报 (2026-07-25)

## 今日速览

今日 ArXiv 投稿呈现出三个鲜明趋势：**对 LLM 行为偏差的深层剖析**（Surprisal 理论被指为重言式、系统性的修辞过用与谄媚现象）与**推理时计算扩展的迁移**（扩散模型种子剪枝、递归自改进智能体、长上下文 MTP 窗口化）共同指向下一代模型的可信与效率；**3D/视频理解与生成的统一框架**（VLM-IE3D、SANA-Video、GraphVid）正加速融合空间、时序与语言信息；同时，面向**低资源语言**（非洲语言 ASR 模型 DONDO）和**垂直领域**（医疗教育、自动驾驶协调、水下图像增强）的专用模型持续涌现，表明 AI 正从通用走向深耕。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **Surprisal Theory is Tautological (without Rational Grounding)**  
   [http://arxiv.org/abs/2607.21574v1](http://arxiv.org/abs/2607.21574v1)  
   *Ryan Cotterell*  
   指出“惊讶度理论”的核心主张（语言处理难度正比于惊讶度）在无额外约束下是重言式，任何难度度量都能被某语言模型拟合——对心理语言学基础假设提出根本性质疑。

2. **Beyond Sycophancy: Structured Resistance and Compliance in LLM Moral Reasoning**  
   [http://arxiv.org/abs/2607.21558v1](http://arxiv.org/abs/2607.21558v1)  
   *Baihui Wang, Bernard Koch*  
   超越单纯的“谄媚”视角，揭示 LLM 在道德推理中会区分何时应采纳他人观点、何时应坚持己见，提出结构化的抵抗/顺从框架。

3. **Artificial Epanorthosis: Why large language models overuse a classical rhetorical figure, and how to mitigate it**  
   [http://arxiv.org/abs/2607.21498v1](http://arxiv.org/abs/2607.21498v1)  
   *Federico Boggia*  
   发现 LLM 系统性地过度使用“自我纠正”（epanorthosis）这一修辞手法，分析其训练数据根源并提出缓解策略。

4. **Windowed-MTP: Removing the Full-Context Draft-KV Tax at Million-Token Context**  
   [http://arxiv.org/abs/2607.21535v1](http://arxiv.org/abs/2607.21535v1)  
   *Alagappan Valliappan*  
   提出窗口化多 token 预测（MTP）草稿机制，消除百万 token 上下文中全上下文 KV 缓存的开销，大幅加速推测解码。

### 🤖 智能体与推理（规划、工具使用、多智能体、思维链）

1. **AREX: Towards a Recursively Self-Improving Agent for Deep Research**  
   [http://arxiv.org/abs/2607.21461v1](http://arxiv.org/abs/2607.21461v1)  
   *Shuqi Lu, Chaofan Li, Kun Luo et al.*  
   提出递归自改进智能体：利用“发现困难→验证容易”的不对称性，通过自我验证循环逐步提升研究质量，是深层研究自动化的前沿尝试。

2. **OpenForgeRL: Train Harness-native Agents in Any Environment**  
   [http://arxiv.org/abs/2607.21557v1](http://arxiv.org/abs/2607.21557v1)  
   *Xiao Yu, Baolin Peng, Ruize Xu et al.*  
   发布开源框架，允许在任意环境中对使用复杂推理 harness（如 Claude Code、OpenClaw）的智能体进行端到端强化学习训练，填补了开源工具链的空白。

3. **Agentic Context Management: Solving Agent Memory and Cost by Treating Them as Lifecycle and Architecture Problems**  
   [http://arxiv.org/abs/2607.21503v1](http://arxiv.org/abs/2607.21503v1)  
   *Gaurav Dadhich*  
   将智能体的上下文管理重塑为生命周期与架构设计问题，针对对话历史膨胀、工具输出溢出等实际故障提供系统化解法。

### 🔧 方法与框架（新技术、基准测试、效率优化）

1. **3D-Aware VLMs with Implicit and Explicit Geometries**  
   [http://arxiv.org/abs/2607.21595v1](http://arxiv.org/abs/2607.21595v1)  
   *Wenhao Li, Xueying Jiang, Quanhao Qian et al.*  
   提出 VLM-IE3D 框架，融合隐式与显式 3D 几何表征，提升 VLM 对空间关系的理解能力，是连接 2D VLM 与 3D 任务的关键桥梁。

2. **Inference-Time Scaling of Diffusion Models via Progressive Seed Pruning**  
   [http://arxiv.org/abs/2607.21591v1](http://arxiv.org/abs/2607.21591v1)  
   *Rogerio Guimaraes, Pietro Perona*  
   提出渐进式种子剪枝策略，将扩散模型推理时的计算分配给更优的初始噪声种子，首次系统研究扩散模型的推理时扩展规律。

3. **Expanding Flow Maps**  
   [http://arxiv.org/abs/2607.21585v1](http://arxiv.org/abs/2607.21585v1)  
   *Sophia Tang, Pranam Chatterjee*  
   介绍 Expanding Generative Flows (EFlows)，突破流模型只能处理固定维度/序列长度的限制，支持动态扩展的生成空间。

4. **SANA-Video 2.0: Hybrid Linear Attention with Attention Residuals for Efficient Video Generation**  
   [http://arxiv.org/abs/2607.21553v1](http://arxiv.org/abs/2607.21553v1)  
   *Junsong Chen, Jincheng Yu, Yitong Li et al.*  
   提出混合线性注意力+注意力残差的视频 DiT 架构，5B/14B 模型可在单 GPU 生成 720p 视频，质量媲美全 softmax 模型。

5. **GraphVid: Interactive Graph-Controllable Video Generation**  
   [http://arxiv.org/abs/2607.21580v1](http://arxiv.org/abs/2607.21580v1)  
   *Vedant Shah, Onkar Susladkar, Tushar Prakash et al.*  
   用户可用图结构指定多物体交互关系以控制视频生成，弥补文本/轨迹控制的不足，提升可控视频生成的精确性。

### 📊 应用（垂直领域、多模态、代码生成）

1. **DONDO: Open w2v-BERT Speech-Recognition Base Models for African Languages**  
   [http://arxiv.org/abs/2607.21540v1](http://arxiv.org/abs/2607.21540v1)  
   *Paul Azunre*  
   发布 21 个单语 + 5 个多语非洲语言 ASR 基础模型（基于 w2v-BERT 2.0），许可证开放，填补高资源语言之外的空白。

2. **MedGame: Storytelling Gamification Empowered by Large Language Models for Medical Education**  
   [http://arxiv.org/abs/2607.21570v1](http://arxiv.org/abs/2607.21570v1)  
   *Qian Wu, Xinrong Zhou, Zizhan Ma et al.*  
   将 LLM 与叙事游戏化结合，构建以临床决策为核心的完整学习路径，而非简单的问答交互，提升医学教育沉浸感。

3. **X³-OPD: Distilling Reasoning into Large Audio-Language Models via On-Policy Alignment**  
   [http://arxiv.org/abs/2607.21550v1](http://arxiv.org/abs/2607.21550v1)  
   *Dongjie Fu, Di Cao, Xize Cheng et al.*  
   提出跨模态 on-policy 对齐框架，将文本 LLM 的推理能力蒸馏到音频语言模型，缓解高质量音频推理数据稀缺问题。

4. **Agentic coding without the cloud: evaluating open-weight large language models on longitudinal data preparation tasks**  
   [http://arxiv.org/abs/2607.21482v1](http://arxiv.org/abs/2607.21482v1)  
   *Mack Nixon, Liam Wright, Yevgeniya Kovalchuk et al.*  
   评估开源权重 LLM 在本地完成纵向数据准备任务的能力，为涉及个人隐私数据的科研场景提供不依赖云端的 agent 编码方案。

## 研究趋势信号

从今日投稿中观察到两个新兴方向：**第一，对 LLM 生成文本中系统性修辞/认知偏差的“元分析”**——不再仅关注事实错误，而是深入挖掘训练数据导致的修辞模式（epanorthosis 过用）、推理中的谄媚策略、以及理论基础（surprisal 重言性）的反思，预示未来对齐工作将更注重语言风格与推理结构的去偏。**第二，推理时计算扩展从自回归模型向扩散模型迁移**——种子剪枝、递归自改进、以及长上下文 MTP 窗口化，共同表明“在测试时投入更多计算以获得更优输出”这一范式正扩散至图像、视频生成和深度研究领域，有望带来效率与质量的双重提升。

## 值得精读

1. **Surprisal Theory is Tautological (without Rational Grounding)** — 论文 11。该文对心理语言学领域的核心假设提出了尖锐的数学论证，迫使研究者重新审视“语言处理难度=惊讶度”这一广为接受的等式是否具有实质内容。无论结论是否被接受，其逻辑推演对 NLP 理论建模具有重要启发。

2. **Expanding Flow Maps** — 论文 5。流模型长期受限于固定维度，EFlows 通过动态扩展机制打破了这一限制，可能为连续序列生成（如无限长视频、可变维度数据）铺平道路。其设计思路对生成模型的通用架构有广泛意义。

3. **AREX: Towards a Recursively Self-Improving Agent for Deep Research** — 论文 50。当“发现问题比验证答案更难”时，智能体如何利用逆向不对称性实现自我改进？AREX 不仅给出了可操作的框架，更定义了深度研究智能体的核心挑战，是 Agent 领域从“执行指令”走向“自主探索”的重要一步。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*