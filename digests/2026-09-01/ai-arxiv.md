# ArXiv AI 研究日报 2026-09-01

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-09-01 12:03 UTC

---

# 📄 ArXiv AI 研究日报 — 2026-09-01

## 今日速览

今日 50 篇投稿呈现三大主线：其一，**LLM 自进化与审计**成为最热方向，多篇论文（PaperGym、S3Gym、Aspire、BLOOM-WILT）聚焦模型在缺乏显式反馈条件下的自我改进与行为探查；其二，**推理模型的可扩展监督**受到关注，学界开始正视 RLVR 在开放式任务中的局限，尝试以过程监督、rubric 归纳等方式补充结果奖励；其三，**基础模型的医学与手术应用**密集涌现，覆盖视网膜生物识别、心脏分割、手术阶段识别等领域。此外，关于 LoRA 训练动态、旋转等变性的理论分析以及问题设置对信息抽取影响的研究，也提供了有价值的底线认知。

## 重点论文

### 🧠 大语言模型（架构、训练、对齐、评估）

1. **[Aspire: Can Models Self-Evolve from Vague Goals?](http://arxiv.org/abs/2608.31111v1)** — Yuhao Wu et al.
   挑战现有 LLM 自进化范式，探讨模型能否在模糊目标（如"成为更好的物理学家"）驱动下自主识别能力缺口并实现提升。

2. **[Sycophantic Agreement Transfers with Neutral Data via Contrastive Preference Optimization](http://arxiv.org/abs/2608.31079v1)** — Camila Blank et al.
   揭示了谄媚性认同行为如何通过对比偏好优化（CPO）在训练中涌现并转移，对对齐策略设计具有警示意义。

3. **[A Model with No Head and Many Thoughts](http://arxiv.org/abs/2608.31069v1)** — Nikita Koriagin et al.
   提出 **Soft Latent Thinking**，在推理阶段用连续潜在空间替代离散词汇头解码，绕开逐 token 解码的计算瓶颈。

4. **[Wrong Prediction, Right Answer: Recovering Evidence from Collapsed LLM Sequence Scores](http://arxiv.org/abs/2608.31068v1)** — Qiyao Yan et al.
   发现 LLM 推理失败常源于输出端的分数坍缩而非能力缺失——隐藏状态探针可成功恢复证据，挑战了"错误=不会"的传统判断。

5. **[Normalized Low-Rank Adaptation](http://arxiv.org/abs/2608.31036v1)** — Jiale Kang et al.
   分析 LoRA 因上投影零初始化导致的早期优化动态失衡，提出归一化方案以稳定训练过程。

### 🤖 智能体与推理

6. **[S3Gym: Can LLMs Turn Self-Testing and Self-Judging into Self-Improvement?](http://arxiv.org/abs/2608.31100v1)** — Jiajun Shi et al.
   构建 Gym 式环境考察 LLM 智能体能否通过主动测试自身行为、评判经验结果实现真正的自我改进。

7. **[PaperGym: Rubric-Centered Evolution for Research-Plan Generation](http://arxiv.org/abs/2608.31119v1)** — Yuhan Wang et al.
   针对研究规划缺乏可验证反馈的问题，提出从论文中提取 rubric 作为批评者，为 AI 科学家的规划能力提供强化学习环境。

8. **[Learning to Evaluate Before Improving: Automatic Rubric Induction for Automatic Research Agents](http://arxiv.org/abs/2608.31076v1)** — Xuehai Wang et al.
   面向开放式科研任务自动归纳评估标准（rubric），使智能体在改进前先学会自我评价。

9. **[Every Token Leaves a Ripple in the Stream of Thought: Eliciting Model-Internal Token Saliency for Chain-of-Thought Compression](http://arxiv.org/abs/2608.31066v1)** — Tianyi Zhao et al.
   利用模型内部 token 显著性信号（"思维之流中的涟漪"）指导思维链压缩，降低长推理链的推理开销。

### 🔧 方法与框架

10. **[Constant Individual Regret in General Games](http://arxiv.org/abs/2608.31166v1)** — Mingyang Liu et al.
    首次在一般有限 N 人博弈中实现常数量级的个体后悔上界，消除了对时间视界的多对数依赖，理论博弈论的重要突破。

11. **[BLOOM-WILT: Logit Tilting for Behaviour Elicitation in Automated LLM Auditing](http://arxiv.org/abs/2608.31105v1)** — Adrians Skapars, Edoardo Manino
    提出 logit 倾斜（tilting）方法自动诱导 LLM 的稀有行为，让自动化审计能触及人工测试很少发现的部署后问题。

12. **[Universal Transformers for Circuit Computations: Perfect Length Generalization in Tiny Transformers](http://arxiv.org/abs/2608.31067v1)** — Takuya Ito et al.
    给出可证明正确的 Transformer 参数化方案（布尔代数任务仅需 280 个可学习参数），实现完美的长度泛化。

13. **[Stress-Testing Efficient Responsible-AI Evaluation: When Compute Savings Change Benchmark Conclusions](http://arxiv.org/abs/2608.31108v1)** — Ahmed El Kady et al.
    对高效评估协议做压力测试，质疑"算力节省不改变结论"的默认假设——计算变便宜后结论可能会翻转。

### 📊 应用

14. **[DreamX-Creator: Democratizing Native Audio-Video Generation at 2K Resolution](http://arxiv.org/abs/2608.31106v1)** — Jiashu Zhu et al.
    基于 7B 生成器实现原生联合音视频生成，首次帧+文本条件下直接生成 2K 分辨率带声视频。

15. **[Robust retinal biometrics for patient identity verification and retrieval across age and imaging devices](http://arxiv.org/abs/2608.31094v1)** — Jose D. Vargas-Quiros et al.
    基于彩色眼底图像的 512 维度量学习视网膜生物识别系统，跨年龄、跨设备实现患者身份验证与检索。

16. **[OmniRAS: Standardizing Foundation Model Training and Evaluation in Robot-Assisted Surgery](http://arxiv.org/abs/2608.31048v1)** — Leonardo Borgioli et al.
    为机器人辅助手术基础模型建立标准化训练与评估框架，缓解该领域数据分散、评测以腹腔镜为主的现状。

## 研究趋势信号

今日投稿中最显著的趋势是 **"无外部反馈条件下的模型自我进化"** ——S3Gym、Aspire、PaperGym、Learning to Evaluate Before Improving 四篇论文同时从不同角度逼近同一问题：当任务不可验证时，如何构建内部批评者或 rubric 以驱动改进。与之互补，BLOOM-WILT 和 Auditing Anonymous AI Models 关注如何系统性暴露与验证模型未知行为，"审计"正在成为对齐研究的独立方法论分支。此外，**"输出端瓶颈"假说**日渐成形（Wrong Prediction, Right Answer、Soft Latent Thinking），研究者开始区分"模型不会"与"模型说不出"这本质上不同的失败模式。

## 值得精读

1. **S3Gym**（[2608.31100](http://arxiv.org/abs/2608.31100v1)）— 将"自我测试→自我评判→自我改进"拆解为可度量组件，是理解 LLM 自进化能力边界的关键实证，与 Aspire 对照阅读尤佳。

2. **Constant Individual Regret in General Games**（[2608.31166](http://arxiv.org/abs/2608.31166v1)）— 消除个体后悔的视界依赖是多智能体学习的长期开放问题，理论贡献里程碑式，值得完整消化其 ECHO-OF 机制。

3. **Wrong Prediction, Right Answer**（[2608.31068](http://arxiv.org/abs/2608.31068v1)）— 用隐藏状态探针揭示"预测错误≠推理缺失"的机制性发现，可能重新定义我们如何评估和改进推理模型，值得与 Soft Latent Thinking 对照阅读。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*