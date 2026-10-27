# Hugging Face Trending Models Digest 2026-07-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-13 03:35 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-13

## Today's Highlights

This week's trending models reveal a powerful convergence: **Qwen 3.5/3.6 derivatives dominate** across both raw model releases and quantized variants, with multiple entries from Unsloth, bottlecapai, and community fine-tuners. **NVIDIA and Tencent pushed frontier-scale MoE architectures** — the Nemotron-Labs-3-Puzzle-75B-A9B and Tencent Hy3 signal continued investment in sparse, efficient large models. Meanwhile, **two vision-language models crossed 2.5M+ weekly downloads** (Qwen3.6-35B-A3B-Uncensored and Qwen3.6-27B-MTP-GGUF), indicating massive demand for capable multimodal models in quantized form. The appearance of specialized models like Baidu's Unlimited-OCR, NVIDIA's LocateAnything-3B, and Cohere's Arabic transcription model shows the ecosystem maturing into domain-specific applications.

---

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — Tencent | 729 likes, 8.7k downloads  
  A new generation Hunyuan text-generation model (Hy3) from Tencent, gaining traction as a strong Chinese-language foundation model with transformer architecture.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 3,859 likes, 441k downloads  
  A conversational MoE model with DSA architecture from the GLM lineage, trending as one of the most popular open-weight Chinese LLMs this week.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | 511 likes, 29k downloads  
  A Qwen3.5-based MoE model optimized for agentic workflows, reflecting the growing specialization of LLMs for tool-use and autonomous tasks.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,680 likes, 2.6M downloads  
  An uncensored, aggressively fine-tuned Qwen3.6 MoE variant (35B total, 3B active), extremely popular for creative writing and roleplay communities.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — nvidia | 114 likes, 34.8k downloads  
  NVIDIA's latest Nemotron 75B MoE model (9B active) with NVFP4 quantization, pushing the frontier of efficient large-scale inference.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** — migtissera | 94 likes, 971 downloads  
  A Qwen3.5-based image-text-to-text model from the Tess series, part of the growing ecosystem of vision-capable LLMs.

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — meituan-longcat | 183 likes, 1.8k downloads  
  A long-context conversational model from Meituan, reflecting industry investment in extended context windows for real-world applications.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,050 likes, 2.0M downloads  
  A GGUF-quantized Qwen3.5-based image-text-to-text model fine-tuned on Claude-generated reasoning data, extremely high download velocity.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 1,943 likes, 1.4M downloads  
  Baidu's OCR model supporting unlimited text recognition from images, trending as a practical tool for document digitization and accessibility.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 2,717 likes, 1.5M downloads  
  A 3B vision-language model for open-vocabulary object localization, notable for its combination of small size and generalizable grounding capability.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 113 likes, 0 downloads (new)  
  A LoRA for identity-preserving text-to-video generation using LTX-Video, representing the cutting edge of controllable video generation.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 133 likes, 14.5k downloads  
  An audio-text-to-text model combining transcription with speaker diarization, signaling growing demand for integrated speech understanding.

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** — CohereLabs | 95 likes, 9.9k downloads  
  A specialized ASR model for Arabic from Cohere, highlighting the push for language-specific speech recognition.

- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** — robbyant | 85 likes, 0 downloads (new)  
  A 14B causal world model for image-to-video generation, part of the emerging "world model" trend in generative AI.

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)** — nineninesix | 86 likes, 2.3k downloads  
  A Qwen3.5-based text-to-speech model, combining a language model backbone with speech generation capabilities.

### 🔧 Specialized Models (code, math, embeddings, tabular, agents, video)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google | 357 likes, 21k downloads  
  Google's TabFM foundation model for tabular classification and regression with zero-shot capabilities, a significant entry in the structured data ML space.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — SupraLabs | 107 likes, 1.4k downloads  
  A tiny 51M parameter router model for LLM selection and orchestration, reflecting the trend toward model routing and agent coordination.

- **[open-gigaai/Giga-World-1](https://githuggingface.co/open-gigaai/Giga-World-1)** — open-gigaai | 124 likes, 0 downloads (new)  
  A world model diffusion model for video generation, hosted under Apache 2.0, representing open-weight efforts in video generation.

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — robbyant | 91 likes, 461 downloads  
  A 30B MoE video model (3B active) for video generation, showcasing efficiency-vs-quality tradeoffs in generative video.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, NVFP4)

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 268 likes, 4.5k downloads  
  A token-efficient thinking/fast-thinking model fine-tuned on Qwen3.6-27B, designed for efficient reasoning.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 868 likes, 0 downloads (template-only)  
  A template-only repository providing corrected Jinja chat templates for Qwen3.5 models, showing the community's attention to prompt formatting.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | 204 likes, 49.3k downloads  
  A 1B parameter GGUF-quantized model fine-tuned on Claude Opus reasoning data, demonstrating that small models with distilled reasoning capabilities attract significant interest.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — unsloth | 153 likes, 44.6k downloads  
  Unsloth's GGUF quantization of DeepSeek V4 Flash, enabling efficient local deployment of this competitive architecture.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 1,161 likes, 445k downloads  
  A GGUF-quantized Gemma-4-12B model fine-tuned for agentic coding and terminal use, trending strongly in developer communities.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 856 likes, 1.3M downloads  
  A 35B GGUF model released under MIT license, showing strong adoption for local inference.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth | 1,060 likes, 2.9M downloads  
  The highest-download model this week: Unsloth's GGUF quantization of Qwen3.6-27B with Multi-Token Prediction, demonstrating the massive demand for efficient multimodal Qwen variants.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B-GGUF](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B-GGUF)** — bottlecapai | 85 likes, 312k downloads  
  A GGUF version of the ThinkingCap token-efficient reasoning model, providing local deployment accessibility.

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** — unsloth | 180 likes, 1.4M downloads  
  An NVFP4 quantization of Qwen3.6-27B, showing NVIDIA's 4-bit floating-point format gaining community traction alongside traditional GGUF.

---

## Ecosystem Signal

**Qwen (3.5/3.6) has become the dominant model family** this week, appearing in 12 of 30 entries across base models, fine-tunes, and quantized variants. The lineage's MoE architectures (35B-A3B, 27B-MTP) are particularly popular, with active parameter counts of 3B enabling strong performance on consumer hardware. The rapid adoption of Qwen3.6 suggests Alibaba's open-weight strategy is effectively competing with Meta's Llama and Google's Gemma ecosystems.

**Quantization is the primary distribution channel** — over half the models are GGUF or NVFP4 quantized, and the highest-download models (2.9M, 2.6M, 2.0M) are all quantized variants. This confirms that the community values local deployment and inference efficiency over raw checkpoint access. Unsloth's quantization pipeline has become a critical infrastructure layer.

**Multimodal is now the norm, not the exception** — only 10 of 30 models are text-only; the rest include vision, audio, or video capabilities. Models like LocateAnything-3B and Unlimited-OCR demonstrate that specialized vision-language applications are reaching production maturity.

**NVIDIA is actively shaping the open-weight landscape** with three entries (Nemotron-Labs-3-Puzzle, LocateAnything, Nemotron-Labs-Audex) and a new quantization format (NVFP4). This represents a strategic push to build ecosystem presence beyond hardware.

**Small and efficient models are gaining disproportionate attention** — MiniCPM5-1B-Thinking, Supra-Router-51M, and LocateAnything-3B all show that targeted small models can compete for mindshare against 70B+ giants.

---

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — At 2,717 likes and 1.5M downloads, this 3B vision-language model for open-vocabulary localization is a standout. Its combination of small size and generalizable grounding ability makes it ideal for studying how to build capable, deployable multimodal models without massive compute budgets. Worth studying for both its architecture design and its data/training recipe.

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — With 3,859 likes (highest on the list), GLM-5.2 represents the strongest open-weight Chinese LLM trend. Its MoE DSA architecture is a departure from dense transformers, and understanding its training methodology could inform future efficient model designs. It's also worth trying as a production-ready conversational model.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — The most downloaded model this week (2.9M downloads) combines three important trends: Qwen3.6 architecture, Multi-Token Prediction training, and GGUF quantization. This model represents the current sweet spot of capability, efficiency, and deployability. Running it locally via llama.cpp is the single best way to understand the state of open-weight multimodal AI in mid-2026.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*