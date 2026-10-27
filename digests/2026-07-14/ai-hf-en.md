# Hugging Face Trending Models Digest 2026-07-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-14 02:56 UTC

---

# Hugging Face Trending Models Digest — 2026-07-14

## Today's Highlights

This week's trending board is dominated by **Qwen-3.x derivatives** and **GGUF quantized reasoning models**, with over 7,000 total likes across the top 30. The **GLM-5.2** series by zai-org leads with nearly 4,000 likes, signaling strong community interest in its Mixture-of-Experts architecture with Dynamic-Sparse-Attention. Enterprise releases from **Tencent (Hy3)**, **Baidu (Unlimited-OCR)**, and **Nvidia (Nemotron-Labs-Audex)** highlight growing open-weight contributions from major AI labs. The **GGUF quantization ecosystem continues to explode**, with quantized models like unsloth's Qwen3.6-27B-MTP-GGUF and empero-ai's Qwythos-9B variants racking up millions of downloads. Notably, **Uncensored and "thinking" fine-tunes** for local deployment represent a major use case, while specialized models for **Arabic ASR, tabular data, and video generation** add diversity to the landscape.

---

## Trending Models

### 🧠 Language Models

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — *zai-org | 3,902 likes, 464,914 downloads*
  Leading the board with a large MoE model featuring Dynamic-Sparse-Attention (DSA), trending due to its conversational quality and efficient expert routing.
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — *Tencent | 755 likes, 9,157 downloads*
  Tencent's Hy3 text-generation model from the Hunyuan lineage, gaining traction as a strong open-weight contender.
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — *InternScience | 526 likes, 29,801 downloads*
  A Qwen3.5 MoE model optimized for agentic workflows, trending as the community explores multi-expert architectures.
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — *bottlecapai | 313 likes, 4,909 downloads*
  Image-text-to-text model building on Qwen3.6 with reinforced thinking capabilities, appealing to reasoning-focused users.
- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — *Nvidia | 143 likes, 1,058 downloads*
  Nvidia's 30B MoE with only 3B active parameters, trending as a compute-efficient enterprise model despite smaller numbers.
- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — *Nvidia | 115 likes, 38,775 downloads*
  A massive 75B puzzle-solving model with 9B active parameters and NVFP4 quantization, showing Nvidia's push into structured reasoning.
- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** — *migtissera | 104 likes, 1,105 downloads*
  A Qwen3.5-based image-text-to-text model with the "Tess" conversational style, gaining niche attention.
- **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)** — *empero-ai | 99 likes, 2,476 downloads*
  The raw transformer version of the popular Qwen3.5 finetune, less downloaded than GGUF but the source for the quantized variants.

### 🎨 Multimodal & Generation

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — *Baidu | 1,963 likes, 1,506,937 downloads*
  Baidu's state-of-the-art image-text-to-text OCR model, trending as an enterprise-grade, open-weight document processing solution.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *HauhauCS | 2,711 likes, 2,512,124 downloads*
  An uncensored vision-MoE model with aggressive instruction tuning, extremely popular for local deployment due to its permissiveness.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — *empero-ai | 2,087 likes, 1,985,221 downloads*
  A GGUF-quantized image-text-to-text model based on Qwen3.5, trending as a lightweight, reasoning-capable multimodal model for local use.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — *OpenMOSS-Team | 162 likes, 39,509 downloads*
  Audio-text-to-text model combining transcription with speaker diarization, gaining traction in voice processing applications.
- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** — *CohereLabs | 102 likes, 11,647 downloads*
  Cohere's specialized Arabic ASR model, filling a gap in high-quality non-English speech recognition.
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — *Alissonerdx | 125 likes, 0 downloads (reserved)*
  A text-to-video LoRA for identity-preserving video generation, capturing interest in face-consistent video synthesis.
- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — *robbyant | 100 likes, 513 downloads*
  A diffusers-based video generation MoE model, trending as a novel video-generation architecture with sparse activation.
- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** — *robbyant | 93 likes, 0 downloads (reserved)*
  An image-to-video world model with causal fast inference, generating interest as a flexible video prediction tool.
- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — *nineninesix | 95 likes, 3,940 downloads*
  A Qwen3.5-based text-to-speech model, trending as an integrated text-generation-plus-TTS pipeline.
- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — *open-gigaai | 128 likes, 0 downloads (reserved)*
  A diffusers world model with Apache-2.0 license, pre-released to gather community interest before download.

### 🔧 Specialized Models

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — *Google | 362 likes, 21,590 downloads*
  Google's TabFM foundation model for tabular classification and regression with zero-shot capabilities, a rare high-quality tabular transformer.
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — *SupraLabs | 114 likes, 1,573 downloads*
  A tiny 51M text-generation router model, trending as a lightweight orchestrator for model selection in agentic pipelines.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — *froggeric | 888 likes, 0 downloads (resource)*
  Not a model but a curated collection of corrected Jinja chat templates for Qwen3.5, highly liked for fixing common formatting issues in MLX-based deployments.

### 📦 Fine-tunes & Quantizations

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — *unsloth | 1,074 likes, 2,901,906 downloads*
  Unsloth's GGUF-quantized Qwen3.6-27B with Multi-Turn Prompting, the most-downloaded model this week for efficient local inference.
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — *deepreinforce-ai | 867 likes, 1,392,300 downloads*
  An MIT-licensed 35B GGUF, trending as a high-quality open-weight model with permissive licensing and strong download numbers.
- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — *unsloth | 192 likes, 1,497,456 downloads*
  Nvidia FP4-quantized version of Qwen3.6-27B, bridging the gap between full-precision and extremely compressed inference.
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — *yuxinlu1 | 1,178 likes, 452,627 downloads*
  A heavily fine-tuned Gemma-4 GGUF focused on agentic coding and terminal tasks, trending as a specialized coding assistant for local use.
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — *unsloth | 162 likes, 49,423 downloads*
  GGUF quantization of DeepSeek-V4-Flash, offering fast inference of the recent V4 model (arXiv:2606.19348) for local experimentation.
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — *GnLOLot | 222 likes, 68,714 downloads*
  An ultra-compact 1B GGUF with "thinking" capability, popular for running reasoning chains on resource-constrained devices.
- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — *jlnsrk | 88 likes, 1,997 downloads*
  An INT4 quantization of GLM-5.2 optimized for CPU inference with expert-streaming, making the large MoE accessible without a GPU.
- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** — *empero-ai | 107 likes, 45,189 downloads*
  The GGUF variant of Qwythos-9B-v2, providing a quantized path to this popular Qwen3.5 finetune for local deployment.

---

## Ecosystem Signal

The **Qwen-3.x ecosystem** is the dominant force this week, with over 12 variants across the top 30 — spanning base models, uncensored finetunes, vision-added versions, MoE configurations, and GFUP/NVFP4 quantizations. This saturation suggests the community has standardized on Qwen as their preferred open-weight base for customization.

**GGUF quantization continues to reshape the deployment landscape.** Five of the top 10 most-downloaded models are GGUF quantizations, with unsloth and empero-ai capturing the bulk of this traffic. The high download-to-like ratio for quantized models (e.g., Qwen3.6-27B-MTP-GGUF with 2.9M downloads vs 1K likes) indicates silent industrial adoption where users consume without explicit upvoting.

**Enterprise labs are increasingly contributing to open-weight.** Tencent, Baidu, Nvidia, Google, and Cohere all released notable models this week, signaling a shift from purely closed-source to "open-by-default" for core research artifacts. Baidu's Unlimited-OCR and Google's TabFM are particularly strategic, targeting vertically underserved domains.

**MoE architectures are gaining mainstream traction.** Models tagged with "moe," "dsa," or "moe_dsa" span four of the top ten by likes. The combination of large total parameters (30B–75B) with small active parameters (3B–9B) is resonating with users who want frontier-quality reasoning on consumer hardware.

**"Thinking" and "uncensored" remain major fine-tuning vectors.** Tags like "thinking," "reasoning," and "uncensored" appear on multiple high-download models, indicating that the community values both guided chain-of-thought and unrestricted output generation as complementary workflows.

---

## Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — As the week's most-liked model, GLM-5.2's Dynamic-Sparse-Attention MoE deserves study for its architectural novelty and strong conversational quality. It represents a distinct Chinese-origin LLM family competing with Qwen and DeepSeek, and its reception suggests growing international adoption.

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With 1.5M downloads and consistent likes, this is an enterprise-grade OCR model released openly. Worth exploring for document processing pipelines, fine-tuning on domain-specific documents, or benchmarking against commercial OCR APIs.

3. **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — At only 51M parameters, this dedicated routing model is an intriguing agentic infrastructure component. Worth studying as a lightweight orchestrator that selects which larger model to invoke for a given query — a pattern that is likely to grow as multi-model agent systems proliferate.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*