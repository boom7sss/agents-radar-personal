# ArXiv AI Research Digest 2026-08-05

> Source: [ArXiv](https://arxiv.org/) (AI, ML, CV, imaging, quantitative biology) | 50 papers | Generated: 2026-08-05 03:12 UTC

---

# ArXiv AI Research Digest — 2026-08-05

## 1. Today’s Highlights

Today’s submissions show a field consolidating around **efficient, adaptive inference**: multiple papers tackle test-time scaling, adaptive sampling budgets, and cross-model KV cache reuse. Evaluation is also becoming more **prospective and behaviorally grounded**, with live-tournament forecasting and agentic self-improvement benchmarks complementing retrospective static tasks. Post-training methods are shifting toward **fine-grained and failure-aware supervision**, using turn-level hindsight, golden negative trajectories, and latent reward registers to improve credit assignment. In multimodal and applied areas, generation and editing are converging through layer-native and real-time video frameworks, while new benchmarks target high-impact domains such as radiology, Bengali OCR, legal text, and histopathology.

## 2. Key Papers

### 🧠 Large Language Models

**Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility**  
Hariri et al.  
http://arxiv.org/abs/2608.04001v1  
Provides a systematic analysis of test-time scaling methods, inference regimes, evaluation protocols, and reproducibility concerns, helping consolidate best practices for reasoning LLMs.

**When Attention Goes Blind: Numerical Failure in ALiBi Positional Encodings**  
Schröder et al.  
http://arxiv.org/abs/2608.03994v1  
Identifies a floating-point underflow bug in ALiBi’s linear bias that zeros out a large fraction of attention weights, partially blinding attention heads and creating a previously overlooked failure mode.

**Cross-Model KV Cache Transfer in LLM Families: A Closed-Form Linear Mapping for Prefill Reuse**  
Heo et al.  
http://arxiv.org/abs/2608.03893v1  
Proposes a closed-form linear mapping that transfers key-value caches across models in the same family, avoiding expensive re-prefill during model switching, cost-quality routing, and mid-conversation swaps.

### 🤖 Agents & Reasoning

**TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning**  
Qu et al.  
http://arxiv.org/abs/2608.04007v1  
Improves credit assignment in long-horizon tool-integrated reasoning by distilling turn-level hindsight signals instead of relying solely on trajectory-level supervision.

**ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning**  
Bi et al.  
http://arxiv.org/abs/2608.03972v1  
Uses “golden negative” trajectories from expert failures to train reflective reasoning and recover direct correct paths, enabling progress where expert-guided methods previously stagnate.

**PAST-Bench: Benchmarking the Foundations of Recursive Self-Improvement in Personal Agents**  
Xue et al.  
http://arxiv.org/abs/2608.04003v1  
Introduces a benchmark for whether personal agents convert retained experience into better future behavior, a core capability for recursive self-improvement.

**WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament**  
Wang et al.  
http://arxiv.org/abs/2608.04008v1  
Evaluates LLM forecasting ability on the live 2026 FIFA World Cup, avoiding retrospective memorization and measuring genuine predictive skill in real time.

**Video-DeepResearch: Towards the Next-Generation Multimodal Deepresearch Agent**  
Fang et al.  
http://arxiv.org/abs/2608.03979v1  
Extends multimodal deep research agents from static images to continuous video streams, exposing bottlenecks in dense spatiotemporal grounding and open-web exploration.

### 🔧 Methods & Frameworks

**Sparse Weight Decomposition for Efficient Circuit Extraction**  
Yan et al.  
http://arxiv.org/abs/2608.03913v1  
Extracts interpretable circuits from dense pretrained transformers via sparse weight decomposition, avoiding the computational cost of auxiliary sparse training and reducing fidelity gaps.

**Muon Meets Mamba: Spectral Optimization for State Space Models**  
Battalov et al.  
http://arxiv.org/abs/2608.03941v1  
Evaluates the Muon optimizer on state-space models, showing that spectral-norm updates behave differently outside Transformers and providing guidance for optimizer selection.

**Interpretable Adaptive Sampling for LLM Test-Time Scaling**  
Kashaniyan & Jannesari  
http://arxiv.org/abs/2608.03961v1  
Introduces adaptive per-query sampling budgets with interpretable explanations, avoiding fixed compute waste on easy prompts and making test-time scaling more inspectable.

### 📊 Applications

**JoyAI-Video-Edit: Real-Time Open-Ended Video Editing with Autoregressive Diffusion**  
Xiao et al.  
http://arxiv.org/abs/2608.03974v1  
Presents a 16B-parameter autoregressive diffusion framework for low-latency, open-ended video editing with causal generation and long-term temporal consistency.

**UniWorld-Design: From Pixel Generation to Layer-Native Design**  
Li et al.  
http://arxiv.org/abs/2608.03971v1  
Repositions image generation as semantic RGBA layer composition rather than flat pixel synthesis, unifying generation, understanding, and editing in one structured representation.

**CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement**  
Ranjit et al.  
http://arxiv.org/abs/2608.03890v1  
Combines classification, spatial localization, and anatomical measurement in chest X-ray vision-language models, moving beyond fluent report generation toward actionable clinical utility.

**BanglaWild: An In-the-Wild Bengali Scene Text Recognition Benchmark for OCR and Vision-Language Models**  
Shiper et al.  
http://arxiv.org/abs/2608.03884v1  
Introduces a real-world Bengali scene-text benchmark covering both conventional OCR and VLMs, addressing underrepresentation and the limitations of aggregate edit-distance-only evaluation.

## 3. Research Trend Signal

A clear trend in today’s submissions is **compute-aware adaptation**: rather than simply scaling models or data, researchers are scaling inference budgets dynamically, reusing caches across model variants, and designing adaptive routing schemes—while also probing the security and numerical fragility of such efficiency mechanisms. Benchmarking is also shifting away from static, contamination-prone tests toward **prospective, behavioral, and in-the-wild evaluations**: live tournaments, counterfactual social forecasting, personal-agent self-improvement, and underrepresented-language OCR. A third direction is **fine-grained post-training supervision**: turn-level and negative-trajectory methods, latent reward registers for diffusion, and activation-based preference steering all aim to assign credit where trajectory-level or terminal rewards are too coarse. Finally, multimodal systems are moving beyond pixel-level outputs toward structured, editable, and clinically or temporally grounded representations.

## 4. Worth Deep Reading

**Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility**  
http://arxiv.org/abs/2608.04001v1  
A timely synthesis of a rapidly growing but fragmented area. It provides a practical map of inference regimes, evaluation trade-offs, and reproducibility issues—essential reading before designing or deploying test-time compute strategies.

**When Attention Goes Blind: Numerical Failure in ALiBi Positional Encodings**  
http://arxiv.org/abs/2608.03994v1  
This paper uncovers a concrete, silent numerical bug in a widely used positional encoding scheme. The analysis is important both for model debugging and for understanding how floating-point precision can subtly degrade large-scale attention architectures.

**WorldCup Arena: Prospective, Leakage-Free Evaluation of Frontier LLMs on a Live Tournament**  
http://arxiv.org/abs/2608.04008v1  
A methodologically interesting benchmark that circumvents memorization by evaluating LLMs on events that have not yet happened. It offers a compelling template for future contamination-resistant evaluation of frontier models.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*