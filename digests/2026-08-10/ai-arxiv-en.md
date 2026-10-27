# ArXiv AI Research Digest 2026-08-10

> Source: [ArXiv](https://arxiv.org/) (AI, ML, CV, imaging, quantitative biology) | 50 papers | Generated: 2026-08-10 02:15 UTC

---

# ArXiv AI Research Digest — 2026-08-10

## 1. Today's Highlights

Today's submissions focus heavily on **agentic memory, skill self-improvement, and test-time compute allocation**, suggesting a shift from static model training toward dynamic, self-evolving agent systems. Several papers also tackle **training and evaluation reliability**, including post-training creativity loss, grokking instability, contamination mitigation, and benchmark-leakage issues. Efficiency remains a core concern, with new approaches to RAG KV-cache reuse and compute-balanced routing. Medical imaging, scientific reasoning, and AI-generated music detection show strong applied progress. A notable safety thread examines vulnerabilities in diffusion-based LLMs.

## 2. Key Papers

### 🧠 Large Language Models

**CreativeInstruct: Scalably Teaching LLMs to Balance Quality, Creativity, and Diversity**  
Sahu, Bansal, Stengel-Eskin — [http://arxiv.org/abs/2608.07460v1](http://arxiv.org/abs/2608.07460v1)  
Introduces a scalable instruction-based method that counters post-training diversity loss by teaching LLMs to balance quality, creativity, and diversity simultaneously.

**Post-Grokking Collapse at the Representation-Readout Interface in Muon-Trained Transformers**  
Janati, El Maghraoui, Kanavalau et al. — [http://arxiv.org/abs/2608.07436v1](http://arxiv.org/abs/2608.07436v1)  
Reports that Muon-trained transformers grok modular addition only to later lose generalization across all tested configurations, exposing instability at the representation-readout interface.

**Diffusion LLMs as Targets and Adversaries: Mechanistic Safety Exploits**  
Dumitrescu, Lek, Chen et al. — [http://arxiv.org/abs/2608.07430v1](http://arxiv.org/abs/2608.07430v1)  
Investigates safety mechanisms in diffusion LLMs and demonstrates mechanistic vulnerabilities that can be exploited both against and by these models.

### 🤖 Agents & Reasoning

**SkillProx: Self-Evolving Agent Skills via Proximal Textual Gradient Descent**  
Zheng, Zhou, Cao et al. — [http://arxiv.org/abs/2608.07449v1](http://arxiv.org/abs/2608.07449v1)  
Proposes a proximal textual gradient descent method that lets LLM agents iteratively refine reusable skills from task experience without weight updates.

**TEPA: Revoking Stale Memories for Conflict-Robust Language Agents**  
Zhou, Ouyang, Zheng et al. — [http://arxiv.org/abs/2608.07429v1](http://arxiv.org/abs/2608.07429v1)  
Identifies a memory-pollution failure mode in persistent agent memory and introduces a method for revoking stale memories to preserve falsifiability as the world changes.

**CoBa: Cost-Effective Test-Time Scaling via Compute-Balanced Routing**  
Zhou, Ouyang, Zheng et al. — [http://arxiv.org/abs/2608.07424v1](http://arxiv.org/abs/2608.07424v1)  
Formulates test-time reasoning as a compute-allocation problem and routes budget across sampling, chain-of-thought, and verification for cost-effective scaling.

**Fisher-R1: Training LLM Agents for Reliable Hypothesis Testing**  
Miao, Mu, Chen et al. — [http://arxiv.org/abs/2608.07437v1](http://arxiv.org/abs/2608.07437v1)  
Trains LLM agents specifically for reliable end-to-end hypothesis testing, reducing subtle inferential errors in automated scientific analyses.

**Interaction Creates Dynamical AI Behavior Absent in Isolation**  
Li, Huo, Johnson — [http://arxiv.org/abs/2608.07457v1](http://arxiv.org/abs/2608.07457v1)  
Shows that when one AI directs messages at another while ignoring replies, the subordinate is driven into out-of-equilibrium dynamical states not present in isolation.

### 🔧 Methods & Frameworks

**CoinRAG: Contextualized Information Nugget KV Cache Reuse for Long-Context RAG**  
Kim, Park, Yang — [http://arxiv.org/abs/2608.07458v1](http://arxiv.org/abs/2608.07458v1)  
Optimizes RAG efficiency by caching KV states at the level of contextualized information nuggets rather than coarse chunks, reducing redundancy and noise.

**SABRE: Scalable and Automated Benchmarking of VLMs under Stress**  
Lan, Sun, Walter et al. — [http://arxiv.org/abs/2608.07435v1](http://arxiv.org/abs/2608.07435v1)  
Presents an automated pipeline for generating controlled, answerable, and challenging stress tests for vision-language models, making weakness discovery scalable.

**PACE: Primitive-Aware Code Evolution for Automated Algorithm Design**  
Xie, Zheng, Xu et al. — [http://arxiv.org/abs/2608.07395v1](http://arxiv.org/abs/2608.07395v1)  
Decomposes LLM-evolved algorithms into reusable primitives so useful local logic is not lost when whole programs are discarded or mutated.

**GeoBenchLLM: A Comprehensive Benchmark for Evaluating LLMs on Geo-Related Tasks**  
Rodrigues, Radouane, Moreno et al. — [http://arxiv.org/abs/2608.07411v1](http://arxiv.org/abs/2608.07411v1)  
Provides a broad, multi-task benchmark probing LLM generalization across diverse geo-related tasks beyond homogeneous settings.

**FinRank: An Evidence-Grounded Benchmark for Financial Question Answering and Retrieval over SEC Filings**  
Mansouri, Saad, Wahrenburg et al. — [http://arxiv.org/abs/2608.07400v1](http://arxiv.org/abs/2608.07400v1)  
Shifts financial QA evaluation from answer correctness to evidence grounding, addressing cases where plausible answers are supported by irrelevant or wrong evidence.

### 📊 Applications

**EliSeg: Verified Target Construction for Report-Grounded Abnormality Segmentation**  
Peng, Yang, Shi et al. — [http://arxiv.org/abs/2608.07299v1](http://arxiv.org/abs/2608.07299v1)  
Constructs verified, executable segmentation targets from radiology reports, handling negation, uncertainty, and coexisting abnormalities for reliable report-grounded segmentation.

**How Much AI Is in This Track? Quantifying the Proportion of AI-Generated Stems in Hybrid Music Mixtures**  
Garcia de la Cruz, López-Ayala, Zinemanas et al. — [http://arxiv.org/abs/2608.07285v1](http://arxiv.org/abs/2608.07285v1)  
Reformulates AI music detection from binary classification to stem-level proportion estimation, addressing hybrid human/AI production pipelines.

## 3. Research Trend Signal

Today's papers point toward **self-improving agent systems** as a dominant research direction: skills, memory, and reasoning are no longer assumed static but are actively refined through experience. Memory management is becoming a first-class problem, with work on stale-memory revocation, affect-sensitive architectures, and predictive eviction. Another clear signal is **budget-aware inference**: test-time scaling, compute-balanced routing, and KV-cache reuse all treat compute as an explicit resource to be allocated rather than an unlimited constant. Reliability and evaluation integrity also stand out, from grokking collapse to contamination mitigation and evidence-grounded benchmarks. Finally, applied submissions increasingly target **high-stakes domains**—medical imaging, clinical reasoning, financial filings, and scientific hypothesis testing—where correctness, provenance, and robustness matter more than raw benchmark scores.

## 4. Worth Deep Reading

1. **CreativeInstruct** — The quality–creativity–diversity trade-off in post-training is underappreciated; this paper proposes a scalable remedy with implications for both creative tasks and downstream RL/alignment.

2. **Post-Grokking Collapse** — The finding that grokking can reverse into generalization loss is surprising and safety-relevant, especially for optimizers being adopted in open-source LLM training.

3. **CoinRAG** — A pragmatic efficiency breakthrough for long-context RAG: caching contextualized information nuggets instead of whole chunks could have immediate production impact.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*