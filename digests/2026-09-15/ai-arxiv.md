# ArXiv AI 研究日报 2026-09-15

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-15 12:08 UTC

---

# ArXiv AI 研究日报（2026-09-15）

## 今日速览

今日投稿密集聚焦于**LLM 的可靠性与可验证性**：从引用核查（CiteGuard-RAG、CiteShade、CITECHOICE）、事实性解码（DescaPE）到评估器自身的可信度审计（Can We Trust the Judges?），形成一条完整的"可信生成"链路。**智能体自我进化**成为另一条主线，多篇工作（RSIAgent、EMR、RESKILL、HypoEvolve）试图让智能体从失败中积累并复用经验，而非停留在一次性反思。**RLVR 与推理对齐**持续升温，BPO 提出了无 critic 的策略优化方法，另有工作将安全对齐下沉到推理链分段级别。此外，全双工语音、模块化多语言分词、长视频关键帧选择等方法性工作显示出对**效率与跨模态迁移**的持续投入。

---

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

**1. Bellman Policy Optimization**
[http://arxiv.org/abs/2609.15987v1](http://arxiv.org/abs/2609.15987v1)
Zhuoqing Song, Haotian Xu, Xikun Zhang et al.
从 Policy Mirror Descent 推导出无 critic 的 RLVR 方法 BPO，针对带终端奖励的自回归生成，为 LLM 推理能力训练提供了更轻量的策略优化路径。

**2. Disentangling Representation Evolution in Transformers through Directional Decomposition**
[http://arxiv.org/abs/2609.15975v1](http://arxiv.org/abs/2609.15975v1)
Shwai He, Haichao Zhang, Shen Yan
将 Transformer 表示更新分解为平行与垂直分量，从"功能几何"角度刻画预训练模型中的表示演化，为机制可解释性提供新工具。

**3. Inoculation Midtraining with Learned Neologisms**
[http://arxiv.org/abs/2609.15886v1](http://arxiv.org/abs/2609.15886v1)
Kyle O'Brien, Edward James Young, Puria Radmard et al.
提出在 midtraining 阶段用学习到的新造词"接种"基座模型，考察早期训练阶段能否决定后续哪些属性被泛化，为对齐训练时序提供新思路。

**4. Beyond Safe Answers: Segment-Aware Listwise Alignment for Reasoning Safety in Large Reasoning Models**
[http://arxiv.org/abs/2609.15517v1](http://arxiv.org/abs/2609.15517v1)
JungMin Yun, Junehyoung Kwon, Hayeong Ryu et al.
指出现有对齐在整段响应级别操作，导致不安全的推理链被看似安全的最终答案掩盖，提出分段感知的 listwise 对齐方法。

**5. Can We Trust the Judges? Validation of Factuality Evaluation Methods via Answer Perturbation**
[http://arxiv.org/abs/2609.15561v1](http://arxiv.org/abs/2609.15561v1)
Sarra Gharsallah, Adele Robaldo, Mariia Tokareva et al.
通过答案扰动对事实性评估指标做元评估，直指"评估工具本身是否可信"这一被忽视的问题。

**6. To Each Language Its Tokenizer: Modular Tokenizers for Efficient Multilingual LLMs**
[http://arxiv.org/abs/2609.15528v1](http://arxiv.org/abs/2609.15528v1)
Franck Signe, Hippolyte Pilchen, François Yvon et al.
用模块化分词器替代单一共享词表，缓解多语言压缩不均与嵌入矩阵过大问题，对小规模多语言模型尤有实际价值。

**7. Temperature Fragility and the Conditional Benefits of Truncation Sampling**
[http://arxiv.org/abs/2609.15476v1](http://arxiv.org/abs/2609.15476v1)
Francesco La Rosa
系统分析温度参数与 top-p / min-p 截断采样的交互脆弱性，澄清了高温度下截断采样的条件性收益。

---

### 🤖 智能体与推理（规划、工具使用、多智能体）

**8. Stellar Colosseum: A Many-Agent Harness for Long-Horizon Research in Mathematics and Theoretical Computer Science**
[http://arxiv.org/abs/2609.15983v1](http://arxiv.org/abs/2609.15983v1)
Honghao Lin, David P. Woodruff, Yuan Deng et al.
面向长周期数学与理论 CS 研究的模型无关多智能体推理分配框架，针对"长程研究中不确定且相互依赖的决策序列"这一核心难点。

**9. The Router Within: Eliciting Native Skill Routing from a Frozen LLM**
[http://arxiv.org/abs/2609.15982v1](http://arxiv.org/abs/2609.15982v1)
Ruishuo Chen, Xun Wang, Yu Chen et al.
将技能选择从"预加载全部元数据"或外部检索管线中解耦，从冻结 LLM 内部直接引出原生技能路由，突破上下文注意力分散与技能库规模上限。

**10. RSIAgent: Autonomous Exploration for Recursive Self-improvement in New Environments**
[http://arxiv.org/abs/2609.15364v1](http://arxiv.org/abs/2609.15364v1)
Sibo Zhu, Shicheng Fan, Xinyue Wang et al.
免训练的多智能体框架，通过自主记忆构建实现递归自我改进，面向新环境中的界面、工具与失败模式适配。

**11. RESKILL: Explicit Failure Attribution and Structured Repair for Interactive Language Agents**
[http://arxiv.org/abs/2609.15684v1](http://arxiv.org/abs/2609.15684v1)
Mengyi Deng, Xin Li, Duyi Pan et al.
针对"不透明一次性反思"修补技能的缺陷，显式建立失败归因与候选修复、复测结果之间的关联结构。

**12. EMR: Self-Evolving Medical Multi-Agent System via Experience Mining and Reuse**
[http://arxiv.org/abs/2609.15161v1](http://arxiv.org/abs/2609.15161v1)
Dongsheng Shi, Yue Li, Xin Yi et al.
为医疗多智能体系统引入持久化临床记忆，从既往诊断成败中挖掘并复用经验，弥补静态策略的不足。

**13. When Agents Slow Down: Understanding LLM Agents' Test-Time Strategies via Elo-per-token Analysis**
[http://arxiv.org/abs/2609.15309v1](http://arxiv.org/abs/2609.15309v1)
Kaiyuan Liu, Qiuyang Mang, Bo Peng et al.
以 Elo-per-token 指标度量智能体测试时算力分配效率，面向可给出连续评分的开放式任务，填补 agent 性能随算力扩展的度量空白。

---

### 🔧 方法与框架（新技术、基准、效率优化）

**14. K-Bench: a clinically calibrated benchmark for evaluating large language models in high-risk mental health conversations**
[http://arxiv.org/abs/2609.15855v1](http://arxiv.org/abs/2609.15855v1)
Laura M. Vowels, Matthew J. Vowels, Shivali Sharma et al.
由临床医生校准的受保护基准，覆盖 125 种模型配置，针对高风险心理健康对话中动态演变的安全性问题。

**15. How Lossless Is Lossless Speculative Decoding? The Role of Numerical Precision in Orthrus**
[http://arxiv.org/abs/2609.15504v1](http://arxiv.org/abs/2609.15504v1)
Ilya Koziev, Leonid Sinev, Ivan Oseledets
质疑混合自回归-扩散架构 Orthrus 所声称的"无损"推测解码，揭示数值精度对无损性的实际影响。

**16. Dynamic Semantic Compression for Efficient Latent-Space Inference in Large Language Models**
[http://arxiv.org/abs/2609.15338v1](http://arxiv.org/abs/2609.15338v1)
Peipei Li, Dongsen Zhang, Yuchen Liu et al.
提出 DSEI 框架，在潜空间实现段级推理而非 token 级，以降低内存开销、提升计算效率。

---

### 📊 应用（垂直领域、多模态、代码与检索）

**17. CiteGuard-RAG: A Validation-Centered AI System for Evidence-Grounded Question Answering**
[http://arxiv.org/abs/2609.15830v1](http://arxiv.org/abs/2609.15830v1)
Sumit Barua, Guan Hong, Halil Dursunoglu et al.
以"验证"为中心重构 RAG，强调检索到证据并不等于答案有据、引用有效或应恰当拒答。

**18. MarKey: Marginal Utility Guided Greedy Keyframe Selection for Long Video Understanding**
[http://arxiv.org/abs/2609.15408v1](http://arxiv.org/abs/2609.15408v1)
Hongchang Shi, Jinpeng Hu, Ao Wang et al.
免训练的关键帧选择方法，以边际效用贪心策略在有限视觉预算下捕捉稀疏但决定性的证据，缓解长视频编码成本。

**19. IROH: Insightful Ranking Of Humor using Multi-Stage Hybrid Retrieval with Rationale-Distilled LLM Judges for JOKER 2026 Track Task 1 English**
[http://arxiv.org/abs/2609.15618v1](http://arxiv.org/abs/2609.15618v1)
Ana-Maria Luisa Mocanu, Sebastian Mocanu, Ciprian-Octavian Truică et al.
三阶段检索系统（混合稀疏-稠密检索 + 交叉编码器重排 + LoRA 适配 LLM），在 CLEF 2026 JOKER 任务英语赛道上以 0.6347 MAP 位列榜首。

**20. Look Before You Leap: Factual Decoding with Internal Attribution Signals**
[http://arxiv.org/abs/2609.15745v1](http://arxiv.org/abs/2609.15745v1)
Hayeong Ryu, JungMin Yun, Byeonggeuk Lim et al.
提出 DescaPE，利用模型内部归因信号在解码阶段前置拦截事实错误，针对自回归生成中错误"滚雪球"的问题。

---

## 研究趋势信号

今日投稿显现出三个交汇趋势。其一，**"验证层"正从后处理前移**：引用核查（CiteShade 的 citation laundering、CITECHOICE 的 citation allocation）、解码期事实拦截、分段安全对齐，共同指向"生成过程中的实时可信性"而非事后修补。其二，**智能体的记忆与经验复用机制化**：RSIAgent、EMR、RESKILL 均不再满足于一次性反思，而是构建可持久、可归因、可复测的经验结构，递归自我改进（RSI）开始从概念走向可训练框架。其三，**评估的元层次反思**：Can We Trust the Judges?、What Limits Us?（NLP 论文自述局限的系统分析）、Orthrus 无损性再审视，显示社区正把审视目光从模型转向评估工具与自我报告本身。

---

## 值得精读

**1. Stellar Colosseum** — [http://arxiv.org/abs/2609.15983v1](http://arxiv.org/abs/2609.15983v1)
作者阵容包含理论 CS 重量级学者（David P. Woodruff 等），且直指"长周期研究中不确定、相互依赖的决策序列"这一智能体最难的能力瓶颈。其"模型无关的推理分配 harness"设计思路可能对后续多智能体研究具有方法论价值，值得完整阅读其推理分配机制与实验设定。

**2. The Router Within** — [http://arxiv.org/abs/2609.15982v1](http://arxiv.org/abs/2609.15982v1)
技能路由是 LLM Agent 落地的关键工程瓶颈，本文提出从冻结模型内部引出原生路由能力，若成立将同时解决上下文注意力分散与技能库规模上限两个问题。其"内部路由 vs. 外部检索"的对比实验值得细读。

**3. Can We Trust the Judges?** — [http://arxiv.org/abs/2609.15561v1](http://arxiv.org/abs/2609.15561v1)
在 factuality 指标被广泛用作 LLM 评估标准的当下，本文用答案扰动做元评估，直接质疑评估工具的敏感性与可靠性。这类"评估评估者"的工作往往比单项新指标更具长期影响力，建议精读其扰动设计与信度分析框架。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*