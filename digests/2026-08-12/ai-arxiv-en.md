# ArXiv AI Research Digest 2026-08-12

> Source: [ArXiv](https://arxiv.org/) (AI, ML, CV, imaging, quantitative biology) | 50 papers | Generated: 2026-08-12 02:25 UTC

---

# ArXiv AI Research Digest — 2026-08-12

## Today's Highlights

Today's submissions emphasize reliability and controllability across generative and predictive models: several papers tackle uncertainty estimation and calibration in LLMs and medical MLLMs, while others address cross-lingual safety gaps and emergent misalignment mechanisms. Generative modeling advances include a new adversarial Fréchet-distance objective for diffusion/flow post-training and more robust video/image forensics. Embodied AI is moving toward task-adaptive test-time learning and surgical/robotic foundation models. Methods that combine sparse autoencoders with concept erasure or mechanistic interpretability are also prominent, alongside a continued push toward verifiable rewards in open-ended medical reasoning.

---

## Key Papers

### 🧠 Large Language Models

**Attention-Path Fragility as an Uncertainty Signal in Large Language Models**  
[http://arxiv.org/abs/2608.11138v1](http://arxiv.org/abs/2608.11138v1)  
Minsoo Kim, Sungyoung Ji, Kisung Moon et al.  
Proposes ASMI, a training-free uncertainty signal based on attention-subnetwork mutual information, capturing “fragile confident” predictions to improve calibration.

**Data Attribution of Emergent Misalignment with Persona Features**  
[http://arxiv.org/abs/2608.11025v1](http://arxiv.org/abs/2608.11025v1)  
Clemens Vetter, David Kaczér, Lucie Flek et al.  
Shows that emergent misalignment after fine-tuning is driven by latent persona features and provides a data-attribution method to trace and potentially prevent harmful generalization.

**The Illusion of Cross-Lingual Safety in Low-Resource Languages**  
[http://arxiv.org/abs/2608.11146v1](http://arxiv.org/abs/2608.11146v1)  
Abigail Oppong, P Sam Sahil, Tadesse Destaw Belay et al.  
Demonstrates that English-centric safety alignment fails to transfer to low-resource languages, exposing a concrete multilingual vulnerability.

**ReRound: Reconstructive Rounding to Resolve Midpoint Ambiguity in Calibration-Free LLM Quantization**  
[http://arxiv.org/abs/2608.11045v1](http://arxiv.org/abs/2608.11045v1)  
He-Yen Hsieh, H. T. Kung  
Introduces a post-training quantization method that trains a conditional diffusion model to resolve midpoint rounding ambiguity, improving low-bit LLM compression without calibration data.

**Mapping and Measuring the Behavioral Evolution of Large Language Models**  
[http://arxiv.org/abs/2608.11027v1](http://arxiv.org/abs/2608.11027v1)  
Dong Qiao, Chris Ding, Jicong Fan  
Characterizes 32 LLMs via embedded responses to 10,000 prompts, producing behavior maps that reveal inter-model relations and cross-generation shifts beyond leaderboard scores.

### 🤖 Agents & Reasoning

**Surgical WAM: A World-Action Model for Data-Efficient Surgical Robot Learning**  
[http://arxiv.org/abs/2608.11204v1](http://arxiv.org/abs/2608.11204v1)  
Wenrui Bao, Tianyun Jiang, Zhiben Chen et al.  
Combines a world model with action prediction to learn surgical manipulation policies from limited demonstrations, addressing data scarcity and long-horizon contact-rich tasks.

**Test-Time Self-Evolving GUI Visual Grounding via Reflection-Guided On-Policy Self-Distillation**  
[http://arxiv.org/abs/2608.11191v1](http://arxiv.org/abs/2608.11191v1)  
Shiyu Xuan, Zechao Li  
Enables GUI agents to adapt at test time by reflecting on failures and self-distilling on-policy outputs, improving grounding on unseen interfaces.

**Actions Speak Louder than Words: Measuring Cross-Lingual Policy Retention in Tool-Using Agents**  
[http://arxiv.org/abs/2608.11110v1](http://arxiv.org/abs/2608.11110v1)  
Sourabrata Mukherjee, Kalika Bali, Sunayana Sitaram  
Measures whether tool-using agents preserve action sequences across languages, showing that final-answer multilingual evaluations miss substantial policy divergence.

### 🔧 Methods & Frameworks

**AdvFD: Boosting Visual Generation via Adversarial Fréchet Distance Loss**  
[http://arxiv.org/abs/2608.11205v1](http://arxiv.org/abs/2608.11205v1)  
Mingju Gao, Jingkai Zhou, Kun Gai et al.  
Proposes an adversarial formulation of Fréchet distance as a post-training objective, outperforming prior Fréchet losses while mitigating “Fréchet hacking.”

**VidForensics-M1: Meta-Detection Reinforcement Learning with Verifiable Temporal Grounding for AI-Generated Video Forensics**  
[http://arxiv.org/abs/2608.11201v1](http://arxiv.org/abs/2608.11201v1)  
Bowei Liu, Zheng Lu, Yuhan Bian et al.  
Introduces an MLLM-based video forgery detector trained with meta-detection RL and verifiable temporal grounding, improving generalization across generators.

**PRMU: A Corpus-Free Benchmark for Person-Centric Knowledge Unlearning in Multimodal Large Language Models**  
[http://arxiv.org/abs/2608.11149v1](http://arxiv.org/abs/2608.11149v1)  
Huafeng Chen, Yueming Lyu, Ziyuan Chen et al.  
Provides a corpus-free benchmark to evaluate person-specific knowledge removal from MLLMs, addressing privacy without assuming access to original training data.

**PEAK: Precise and Persistent Concept Erasure via k-Sparse Autoencoders**  
[http://arxiv.org/abs/2608.10985v1](http://arxiv.org/abs/2608.10985v1)  
Man Jiang, Ouxiang Li, Weibao Xue et al.  
Applies k-sparse autoencoders to locate and erase concepts in text-to-image diffusion models, achieving more precise and persistent removal than prior methods.

**CapProbe: Evaluating Detailed Image Captions via Full-Scene Dense Question Answering**  
[http://arxiv.org/abs/2608.11074v1](http://arxiv.org/abs/2608.11074v1)  
Mouxiao Huang, Qiangyu Yan, Borui Jiang et al.  
Proposes a QA-based caption evaluation protocol with full-scene dense questions to verify detailed factual claims, overcoming limitations of reference-based and LLM-as-scorer metrics.

### 📊 Applications

**ConRub-Med: Reinforcement Learning with Consensus Rubrics for Open-Ended Medical Question Answering**  
[http://arxiv.org/abs/2608.10996v1](http://arxiv.org/abs/2608.10996v1)  
Taojie Zhu, Yuan Xia, Tao Sun et al.  
Uses consensus rubrics as verifiable rewards in RL to improve open-ended medical answers, balancing correctness, completeness, and clinical safety.

**CARE: Confidence-Aware Reasoning for Reliable Medical VQA**  
[http://arxiv.org/abs/2608.10964v1](http://arxiv.org/abs/2608.10964v1)  
Yuetian Du, Yucheng Wang, Zhenyuan Chen et al.  
Adds confidence-aware reasoning to medical MLLMs, reducing miscalibration between expressed certainty and diagnostic accuracy in visual QA.

---

## Research Trend Signal

Several signals stand out from today's submissions. First, reliability is shifting from aggregate benchmarks to per-decision uncertainty and calibration: LLM uncertainty via attention fragility, medical VQA confidence, and consensus-rubric rewards all target trustworthiness in high-stakes settings. Second, alignment research is moving toward mechanistic attribution and cross-lingual stress-testing, with persona features and low-resource safety audits exposing failure modes that standard evals miss. Third, test-time adaptation and self-evolution are becoming core for embodied and GUI agents, as seen in surgical world-action models and reflection-guided self-distillation. Fourth, sparse autoencoders are consolidating as a general-purpose interpretability and control interface—from SAE instability analysis to concept erasure in diffusion models. Finally, generative video/image forensics is evolving from supervised detection to reinforcement-learned meta-detection with verifiable grounding. Together, these trends suggest a field focused on making models more auditable, controllable, and robust under distribution shift.

---

## Worth Deep Reading

**Attention-Path Fragility as an Uncertainty Signal in Large Language Models**  
[http://arxiv.org/abs/2608.11138v1](http://arxiv.org/abs/2608.11138v1)  
A deep dive into a new uncertainty notion that goes beyond output entropy and may improve selective prediction and calibration; includes careful perturbation analysis of attention pathways.

**Data Attribution of Emergent Misalignment with Persona Features**  
[http://arxiv.org/abs/2608.11025v1](http://arxiv.org/abs/2608.11025v1)  
A valuable mechanistic alignment study connecting persona features to emergent misalignment, with direct implications for safety, interpretability, and fine-tuning protocols.

**When Visual Signals Mislead: A Mechanistic Study of Attribute Hallucination in Vision-Language Models**  
[http://arxiv.org/abs/2608.11024v1](http://arxiv.org/abs/2608.11024v1)  
Challenges the dominant language-prior explanation of attribute hallucination in VLMs with mechanistic evidence, making it essential reading for model understanding and mitigation.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*