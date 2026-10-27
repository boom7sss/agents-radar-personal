# ArXiv AI Research Digest 2026-08-02

> Source: [ArXiv](https://arxiv.org/) (AI, ML, CV, imaging, quantitative biology) | 50 papers | Generated: 2026-08-02 03:32 UTC

---

# ArXiv AI Research Digest — 2026-08-02

## 1. Today's Highlights

Several papers this week focus on where inference-time compute is actually best spent: one controlled study shows that repeated sampling at equal token cost can outperform self-refinement and reflexion loops across 1.5B–7B models, questioning the default value of self-correction. Agentic AI is moving toward harder real-world operations, with new benchmarks for oncall root-cause analysis, computer-use reward models, and executable coding-agent task generation, while multi-agent systems begin to adapt their own communication topologies. On the modeling side, hybrid diffusion transformers and compact discrete world representations aim to make high-resolution generation and video prediction more scalable and efficient. Safety and accountability research is also maturing, including system-prompt auditing, live information-operations benchmarks, and reproducible clinical subgroup-fairness audits.

## 2. Key Papers

### 🧠 Large Language Models

- [Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B](http://arxiv.org/abs/2607.28576v1) — Iliya Mirzaei  
  Repeated sampling at matched token budgets outperforms self-refine/reflexion, challenging assumptions about self-correction and pointing toward simpler sampling-based inference scaling.

- [AISPA: User-Centric System Prompt Auditing for Large Language Model Applications](http://arxiv.org/abs/2607.28617v1) — Xiangning Lin, Shenzhe Zhu, Shu Yang et al.  
  Introduces an auditing framework for undisclosed LLM system prompts, addressing a critical transparency and accountability gap in commercial AI products.

- [β-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1) — Jiawei Xu, Minghui Liu, Juzheng Zhang et al.  
  Identifies vanilla on-policy self-distillation as the β=1 case and provides a more stable parameterized objective for training reasoning LMs.

- [InfoOps Bench: A live information operations safety benchmark](http://arxiv.org/abs/2607.28503v1) — Dorian Quelle, Lisa-Maria Neudert, Jonathan Bright et al.  
  An actively updated benchmark using 2,100+ real state-backed information operations to measure whether frontier models can be co-opted.

### 🤖 Agents & Reasoning

- [Beacon: Knowing When and How to Perform Agentic Visual Reasoning](http://arxiv.org/abs/2607.28595v1) — Qixun Wang, Yang Shi, Letian Cheng et al.  
  Learns when multi-step agentic visual reasoning is necessary and when direct inference is enough, improving efficiency without harming task success.

- [Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments](http://arxiv.org/abs/2607.28591v1) — Haomin Qi, Xingliang Wang, Xuanqi Gao et al.  
  Automatically converts real repository changes into executable coding-agent tasks with realistic states and verification, enabling scalable training and evaluation data.

- [ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1) — Albert Gong, Kyuseong Choi, Abhineet Agarwal et al.  
  A benchmark for oncall root-cause analysis requiring reasoning over noisy metrics, logs, traces, and code—pushing agents toward real operational work.

- [OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1) — Qiushi Sun, Kanzhi Cheng, Yian Wang et al.  
  Proposes standardized evaluation for reward models used to verify and train computer-using agents across platforms.

- [MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1) — Mao-xun Huang, Jerry Wang, Yi-Cheng Lai et al.  
  Dynamically adapts the communication topology of LLM-based multi-agent systems, moving beyond fixed or offline-optimized designs.

### 🔧 Methods & Frameworks

- [Chimera: Designing and Chinchilla-Scaling Hybrid Visual Diffusion Transformers](http://arxiv.org/abs/2607.28611v1) — Chongjian Ge, Hanwen Jiang, Tianyu Wang et al.  
  A hybrid visual diffusion backbone with a Chinchilla-style scaling recipe for high-resolution image and long-video generation at reduced attention cost.

- [ReToken: One Token to Improve Vision-Language Models for Visual Retrieval](http://arxiv.org/abs/2607.28627v1) — Yao Xiao, Reuben Tan, Zhen Zhu et al.  
  Adds a single learnable retrieval token to VLMs, improving long-context visual retrieval while remaining memory-efficient.

- [PhiZero: A World Model Built Around Physical Language](http://arxiv.org/abs/2607.28624v1) — Shuyao Shang, Yuqi Wang, Ruopeng Gao et al.  
  Uses a compact discrete “physical language” of world-state transitions instead of pixel-space video prediction, making physical dynamics rollouts far more tractable.

- [MixFrag: Fragility-Guided Mixed-Precision Post-Training Quantization for Vision Transformers](http://arxiv.org/abs/2607.28589v1) — Md. Mehrab Hossain Opi, Robiul Islam Ryad, Md. Umar Faruk  
  Quantizes different ViT components at heterogeneous bit-widths based on measured fragility, improving deployment on resource-constrained devices.

### 📊 Applications

- [ACE-Data-0: Human-Centric Ambient Capture as Embodied Data Engine](http://arxiv.org/abs/2607.28625v1) — Yukang Cao, Haozhe Xie, Beichen Wen et al.  
  A synchronized multimodal data engine for embodied intelligence, capturing first-person perception, whole-body motion, object state, sound, and touch.

- [KAISEN: Reproducible Subgroup Fairness Auditing for Clinical Risk Models](http://arxiv.org/abs/2607.28608v1) — Sparsh Roy, Samuel Girmachew, Nishita Chavan  
  Stress-tests every component of clinical fairness audit pipelines so subgroup error rates can be reported with confidence.

## 3. Research Trend Signal

A clear shift is visible from simply scaling models to deciding where and how to spend compute. “Sample More, Reflect Less” and “Beacon” both explicitly ask whether agentic reasoning and self-correction justify their token costs. Meanwhile, agent evaluation is becoming industrialized: executable tasks are generated from repository changes, oncall root-cause analysis is benchmarked, and reward models for computer-use agents receive standardized tests. Benchmark integrity is also being scrutinized, including PR-issue misalignment in SWE-bench-like datasets. Efficiency and compression are equally prominent—hybrid diffusion attention, mixed-precision quantization, and compact discrete world models all target lower-cost multimodal generation. Finally, safety and societal impact are more concrete: system-prompt auditing, live information-operations benchmarks, and clinical subgroup-fairness audits all reflect a field paying closer attention to deployment, accountability, and real-world failure modes.

## 4. Worth Deep Reading

1. **[Sample More, Reflect Less](http://arxiv.org/abs/2607.28576v1)**  
   The paper is a useful corrective: self-refinement methods often gain only because they generate more text. Its controlled, token-equal methodology has direct implications for anyone building inference-time scaling strategies.

2. **[ORCA-bench](http://arxiv.org/abs/2607.28545v1)**  
   A realistic, high-value agent benchmark beyond coding or browsing. The design—reasoning over noisy metrics, logs, traces, and ambiguous reports—will likely influence future operations-focused LLM evaluation.

3. **[PhiZero](http://arxiv.org/abs/2607.28624v1)**  
   The idea of representing physical world dynamics with a compact discrete “physical language” rather than pixels could be foundational for more efficient video prediction, planning, and robotics world models.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*