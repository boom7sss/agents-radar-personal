# ArXiv AI 研究日报 2026-08-10

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-08-10 02:15 UTC

---

# ArXiv AI 研究日报 — 2026-08-10

## 📌 今日速览

今日 arXiv 投稿聚焦 LLM 的“后训练”与“评估”双重反思：一方面 CreativeInstruct 试图在微调中平衡质量、创造性与多样性，另一方面多项工作揭示基准污染和记忆失效会扭曲模型真实能力。智能体方向从静态调用工具走向自进化技能与记忆治理，TEPA、SkillProx、Fisher-R1 等提出更接近人类认知的机制。效率优化出现预算感知的全局计算分配（CoBa、CoinRAG），医疗、金融、科学发现等垂直领域的结构化基准与落地应用持续升温。同时，扩散式 LLM 的安全机制成为新的攻防焦点。

## 📑 重点论文

### 🧠 大语言模型

- **CreativeInstruct: Scalably Teaching LLMs to Balance Quality, Creativity, and Diversity**  
  [http://arxiv.org/abs/2608.07460v1](http://arxiv.org/abs/2608.07460v1)  
  Ananya Sahu 等  
  提出可扩展的指令构造方法，在 post-training 中同时优化质量、创意与多样性，缓解标准对齐训练导致的输出多样性退化。

- **Diffusion LLMs as Targets and Adversaries: Mechanistic Safety Exploits**  
  [http://arxiv.org/abs/2608.07430v1](http://arxiv.org/abs/2608.07430v1)  
  Elena Dumitrescu 等  
  系统性剖析扩散式 LLM 的内部安全机制，展示其既可作为攻击目标也可成为对抗方，暴露新的机制性安全漏洞。

- **Zero Gap Is Not Restoration: Stratified Per-Question Probability Evaluation and Step-wise Mitigation of Benchmark Contamination**  
  [http://arxiv.org/abs/2608.07341v1](http://arxiv.org/abs/2608.07341v1)  
  Ruijie Hou 等  
  指出当前基准污染缓解评估的缺陷，提出分层逐问题概率评估与逐步缓解策略，更真实地还原模型能力。

### 🤖 智能体与推理

- **SkillProx: Self-Evolving Agent Skills via Proximal Textual Gradient Descent**  
  [http://arxiv.org/abs/2608.07449v1](http://arxiv.org/abs/2608.07449v1)  
  Mingxuan Zheng 等  
  通过近端文本梯度下降让智能体在任务执行中自我进化技能库，无需权重更新即可适应重复性任务。

- **TEPA: Revoking Stale Memories for Conflict-Robust Language Agents**  
  [http://arxiv.org/abs/2608.07429v1](http://arxiv.org/abs/2608.07429v1)  
  Yan Zhou 等  
  为语言智能体设计“撤销陈旧记忆”的机制，通过冲突检测与回滚，解决世界变化导致的长期记忆污染问题。

- **CoBa: Cost-Effective Test-Time Scaling via Compute-Balanced Routing**  
  [http://arxiv.org/abs/2608.07424v1](http://arxiv.org/abs/2608.07424v1)  
  Yan Zhou 等  
  将 test-time scaling 建模为计算资源分配问题，用 compute-balanced routing 在固定预算下更优配置采样、思维链和评估器。

- **Fisher-R1: Training LLM Agents for Reliable Hypothesis Testing**  
  [http://arxiv.org/abs/2608.07437v1](http://arxiv.org/abs/2608.07437v1)  
  Jiacheng Miao 等  
  训练 LLM 智能体进行端到端可靠假设检验，显著减少数据分析中不易察觉的统计推断错误。

- **WNM-3D: A World Navigation Model with 3D Scene Conditioning for Closed-Loop VLN**  
  [http://arxiv.org/abs/2608.07267v1](http://arxiv.org/abs/2608.07267v1)  
  Yuehao Huang 等  
  提出以 3D 场景为条件的世界导航模型，支持闭环视觉语言导航，减少对短视动作预测的依赖。

### 🔧 方法与框架

- **CoinRAG: Contextualized Information Nugget KV Cache Reuse for Long-Context RAG**  
  [http://arxiv.org/abs/2608.07458v1](http://arxiv.org/abs/2608.07458v1)  
  Gyuwan Kim 等  
  将 KV 缓存重用粒度从粗粒度 chunk 细化到“上下文信息片段”，降低长上下文 RAG 的噪声与计算开销。

- **SABRE: Scalable and Automated Benchmarking of VLMs under Stress**  
  [http://arxiv.org/abs/2608.07435v1](http://arxiv.org/abs/2608.07435v1)  
  Zixuan Lan 等  
  构建可扩展、自动化的 VLM 压力测试流水线，可在受控条件下批量生成高质量挑战样本，帮助发现视觉语言模型弱点。

- **FinRank: An Evidence-Grounded Benchmark for Financial Question Answering and Retrieval over SEC Filings**  
  [http://arxiv.org/abs/2608.07400v1](http://arxiv.org/abs/2608.07400v1)  
  Sasan Mansouri 等  
  发布基于 SEC 文件的证据锚定金融 QA 与检索基准，强调“答案正确”不等于“证据正确”。

- **PACE: Primitive-Aware Code Evolution for Automated Algorithm Design**  
  [http://arxiv.org/abs/2608.07395v1](http://arxiv.org/abs/2608.07395v1)  
  Zhuoliang Xie 等  
  通过原语感知的代码演化，将算法设计中可复用的局部逻辑与宿主程序解耦，提升自动算法搜索的效率与泛化。

### 📊 应用

- **EliSeg: Verified Target Construction for Report-Grounded Abnormality Segmentation**  
  [http://arxiv.org/abs/2608.07299v1](http://arxiv.org/abs/2608.07299v1)  
  Chengyi Peng 等  
  从放射学报告中构建可验证的分割目标，正确处理否定、既往、不确定与并存病灶，缓解报告到掩码的歧义。

- **LSEAD: A Privacy-Preserving LLM-Based Speech Analysis Framework for Early Alzheimer's Disease Screening**  
  [http://arxiv.org/abs/2608.07378v1](http://arxiv.org/abs/2608.07378v1)  
  Xin Wang 等  
  提出隐私保护的 LLM 语音分析框架，用于早期阿尔茨海默病筛查，兼顾非侵入性、成本效益与真实临床条件多样性。

- **Artificial Intelligence Can Match Domain Experts in Evidence Extraction and Critical Appraisal of Microbial Oncogenesis Research Publications**  
  [http://arxiv.org/abs/2608.07250v1](http://arxiv.org/abs/2608.07250v1)  
  Kaela Kokkas 等  
  验证 LLM 在微生物致癌研究文献的证据提取与批判性评估中可达到领域专家水平，为大规模科学证据综合铺路。

## 🔭 研究趋势信号

从今日投稿看，AI Agent 正经历从“能用”到“可信”的转变：记忆不再只增不减，出现撤销与冲突检测（TEPA）；技能不再静态，而是通过文本梯度持续演化（SkillProx）；测试时计算也由单一维度转向预算感知的全局路由（CoBa）。评估方面，“分数污染”和“证据锚定”成为显性问题，多个基准明确区分“答案正确”和“证据正确”（FinRank、Zero Gap）。同时，AI for Science 进入更深层自动化：假设检验、合成规划、文献证据评估、医学影像与语音筛查均有系统性工作。最后，扩散式 LLM 的安全机制成为新攻击面，值得持续关注。

## 📚 值得精读

- **CreativeInstruct**：后训练导致创造性和多样性下降是当前 LLM 普遍痛点，本文提出可扩展的解决方案并显式平衡多目标，对训练范式有直接启发。
- **TEPA**：长期记忆的“污染”问题在现实 agent 中常见但缺乏系统研究，本文定义了失效模式并提出可操作的撤销机制，值得完整阅读。
- **Zero Gap Is Not Restoration**：基准污染评估本身存在方法论陷阱，本文的分层概率评估与逐步缓解框架对社区正确衡量模型能力具有普适意义。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*