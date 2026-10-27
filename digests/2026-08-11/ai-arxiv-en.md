# ArXiv AI Research Digest 2026-08-11

> Source: [ArXiv](https://arxiv.org/) (AI, ML, CV, imaging, quantitative biology) | 30 papers | Generated: 2026-08-11 02:08 UTC

---

# ArXiv AI Research Digest — 2026-08-11

## Today's Highlights

Today’s submissions emphasize making LLM-based systems safer, more temporally aware, and more efficient. Safety research is moving beyond static classifiers toward self-evolving production guardrails and zero-shot geometric/topological inferences over frozen representations. Agent-skill ecosystems are being audited at scale for reusability and security, while code and embodied agents learn from persistent failures and behavioral diversity. Efficiency work targets long-context bottlenecks through KV-cache compression for speech LLMs and fine-grained analysis of training-free low-rank compression. Benchmarks also shift from static QA toward date-dependent document understanding and relationally faithful document-to-database construction.

## Key Papers

### 🧠 Large Language Models

- **Time Present and Time Past: Benchmarking Large Language Models on Temporally Evolving Document Understanding** ([http://arxiv.org/abs/2608.08512v1](http://arxiv.org/abs/2608.08512v1)) — M. E. Sobhani et al.  
  Introduces a benchmark for question answering over amended, replaced, or reverted documents, forcing models to reason about date-dependent answers rather than treating facts as static.

- **Reproducing and Stress-Testing Two Approaches to LLM Reasoning Reliability: Test-Time Probability Aggregation and Logic-Representation Editing** ([http://arxiv.org/abs/2608.08514v1](http://arxiv.org/abs/2608.08514v1)) — M. Cho, J. Kweon  
  Independently reproduces RPC and LCF across new task domains and 7–8B models, clarifying which reasoning-reliability techniques actually generalize.

- **Hidden Language Consistency Phenomena in Reasoning LLMs** ([http://arxiv.org/abs/2608.08447v1](http://arxiv.org/abs/2608.08447v1)) — M. A. Shafique, K. Marchisio  
  Shows that multilingual reasoning models increasingly abandon the intended language as task difficulty rises, revealing a previously overlooked quality dimension.

- **HoloAegis: Frozen Representation, Topological Inference: Minimally Parametric Safety Manifolds for Zero-Shot LLM Guardrails** ([http://arxiv.org/abs/2608.08485v1](http://arxiv.org/abs/2608.08485v1)) — T. H. A. Li et al.  
  Builds safety guardrails via pure geometric/topological reasoning over frozen semantic representations, avoiding fine-tuning distortion and expensive generative judges.

- **Yesterday's Shield, Today's Spear: A Self-Evolving Safety Guardrail in Production** ([http://arxiv.org/abs/2608.08471v1](http://arxiv.org/abs/2608.08471v1)) — C. Ming et al.  
  Presents a production multi-agent safety guardrail that continuously adapts to new jailbreak techniques and emerging harmful categories, replacing static defenses.

### 🤖 Agents & Reasoning

- **FailForge: Distilling Procedural Competence from Persistent Failures into Code Agents** ([http://arxiv.org/abs/2608.08570v1](http://arxiv.org/abs/2608.08570v1)) — D. Lv et al.  
  Learns from failed code-generation trajectories via rejection-sampling fine-tuning on verifiable tasks, improving agents by converting persistent failures into procedural competence.

- **Discovering Diverse Planning Policies for Multimodal Embodied Agents with Quality-Diversity Optimization** ([http://arxiv.org/abs/2608.08523v1](http://arxiv.org/abs/2608.08523v1)) — P. Xu et al.  
  Uses quality-diversity optimization to discover multiple planning styles for embodied agents, addressing the rigidity of single-dominant-planning large-model planners.

- **What Keeps Agent Skills from Being Reusable? Evidence from 138K SKILL.md Files** ([http://arxiv.org/abs/2608.08453v1](http://arxiv.org/abs/2608.08453v1)) — C. Zhang et al.  
  Large-scale empirical analysis of public agent skills identifies factors that limit cross-task reusability, informing future skill packaging standards.

### 🔧 Methods & Frameworks

- **SDDBMs: Soft Denoising Diffusion Bridge Models** ([http://arxiv.org/abs/2608.08594v1](http://arxiv.org/abs/2608.08594v1)) — S. Qi, K. He, M. Liu  
  Introduces soft endpoint conditioning for diffusion bridge models, enabling more flexible image-to-image translation and restoration without hard constraints.

- **Beyond Tables: Doc2DB-Bench for Relationally Faithful Document-to-Database Construction** ([http://arxiv.org/abs/2608.08459v1](http://arxiv.org/abs/2608.08459v1)) — Z. Liang et al.  
  New benchmark for converting heterogeneous documents into queryable relational databases, emphasizing normalized schemas and entity identities rather than isolated tables.

- **LLM within MCP Matters: Measuring Inefficient Resource Utilization Driven by LLMs** ([http://arxiv.org/abs/2608.08467v1](http://arxiv.org/abs/2608.08467v1)) — M. Cho et al.  
  Analyzes how Model Context Protocol servers waste resources by embedding reference data in system-prompt instructions, quantifying LLM-driven inefficiency.

- **Forgotten History or Test-of-Time? Retrospect and Prospect on RAG from an IR Perspective** ([http://arxiv.org/abs/2608.08445v1](http://arxiv.org/abs/2608.08445v1)) — X. Zhao et al.  
  Recontextualizes RAG within information-retrieval history, arguing that current novelty claims are incomplete and proposing a broader cross-era research agenda.

### 📊 Applications

- **CDGC-Net: 3D Medical Image Segmentation with Cooperative Dual-Scale Self-Attention and Grouped Channel Modeling** ([http://arxiv.org/abs/2608.08575v1](http://arxiv.org/abs/2608.08575v1)) — Z. Jing et al.  
  Combines dual-scale self-attention and grouped channel modeling for accurate 3D medical image segmentation, integrating long-range context with fine boundary detail.

- **VoxZip: Semantic-Anchored Temporal KV Cache Compression for Long-Context Audio Inference** ([http://arxiv.org/abs/2608.08569v1](http://arxiv.org/abs/2608.08569v1)) — W. Jia et al.  
  Compresses KV caches in speech large language models using semantic-anchored temporal selection, directly addressing long-context audio memory bottlenecks.

- **TrustRoboReward: Preference-Ordered Isotonic Score Editing for Multi-Paradigm Robot Reward Models** ([http://arxiv.org/abs/2608.08491v1](http://arxiv.org/abs/2608.08491v1)) — Y. Wang et al.  
  Improves vision-language-model robot reward judges via preference-ordered isotonic score editing, enabling more reliable long-horizon manipulation feedback.

## Research Trend Signal

A clear emerging direction is **adaptive safety**: SESG and HoloAegis represent two paradigms—continuous production updates versus pure geometric reasoning over frozen representations—suggesting guardrails will become both self-maintaining and representation-centric. A second signal is **agent-skill governance**: large-scale audits of SKILL.md files and static-analysis frameworks point to a new subfield concerned with reusability, security, and standardization of executable agent knowledge. A third direction is **temporal and relational semantics**: benchmarks for evolving documents and for document-to-database construction indicate a shift from static QA toward date-aware, structurally faithful knowledge extraction. Efficiency research is also maturing: VoxZip and low-rank compression error analysis target memory and weight compression with source-level diagnostics rather than black-box accuracy. Finally, **failure-driven learning**—from code-agent failures and reward-score editing—shows growing interest in using negative or low-quality data productively.

## Worth Deep Reading

- **Time Present and Time Past** ([http://arxiv.org/abs/2608.08512v1](http://arxiv.org/abs/2608.08512v1)) — The most conceptually important benchmark: it formalizes that real-world documents have a temporal dimension, with immediate implications for legal, tax, and software QA systems.

- **HoloAegis** ([http://arxiv.org/abs/2608.08485v1](http://arxiv.org/abs/2608.08485v1)) — A provocative approach to LLM safety: if topological inference over frozen representations can replace fine-tuned guardrails, it may enable cheap, zero-shot, and less intrusive safety mechanisms.

- **What Keeps Agent Skills from Being Reusable?** ([http://arxiv.org/abs/2608.08453v1](http://arxiv.org/abs/2608.08453v1)) — The 138K-file evidence base offers a rare empirical grounding for why agent-skill ecosystems fragment, directly shaping future skill packaging and discovery standards.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*