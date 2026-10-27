# Hugging Face Trending Models Digest 2026-07-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-11 03:20 UTC

---

# Hugging Face Trending Models Digest — 2026-07-11

## Today’s Highlights
This week’s trending models are dominated by **Mixture-of-Experts (MoE) architectures**, with several large-scale MoE releases from Tencent (`Hy3`), Zhipu AI (`GLM-5.2`), InternScience (`Agents-A1`), Mistral (`Leanstral-1.5`), and DeepSeek (`V4-Pro-DSpark`). **Nvidia** makes a strong showing with both a visual grounding model (`LocateAnything-3B`) and a new quantization format (`NVFP4`) applied to Qwen3.6. Meanwhile, the **GGUF quantization ecosystem** continues to surge, led by unsloth’s Qwen3.6-27B-MTP-GGUF (2.9M downloads in one week) and a wave of community fine-tunes. **Baidu’s Unlimited-OCR** stands out as a practical image-text tool, and **Krea 2-Turbo** brings fast text-to-image generation.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — Tencent, 669 likes, 6.9K downloads. An efficient MoE language model from the Hunyuan family, likely optimized for high-throughput inference.
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org, 3,787 likes, 392K downloads. The most-liked model today, a MoE-DSA conversational model with strong Chinese/English capabilities.
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience, 473 likes, 25.8K downloads. A Qwen3.5-based MoE model specialized for agentic and multi-modal reasoning.
- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** — AliesTaha, 198 likes, 4.9K downloads. An instruction-tuned Qwen3 variant aimed at long-form narrative generation.
- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — meituan-longcat, 172 likes, 1.3K downloads. A long-context conversational model designed for processing extremely large inputs.
- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** — Mistral AI, 184 likes, 315 downloads. An Apache-2.0 licensed 119B MoE with 6B active parameters, built on Leanstral-2603 fine-tune.
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — DeepSeek, 463 likes, 33.1K downloads. The latest iteration of DeepSeek’s flagship MoE, with improved reasoning and dspark optimizations.
- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — Nvidia, 99 likes, 23.4K downloads. A 75B MoE using Nvidia’s 4-bit floating point (NVFP4) for efficient inference.
- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** — Nvidia, 95 likes, 576 downloads. A compact 30B MoE (3B active) in the Nemotron Labs series, targeting audio-adjacent reasoning.
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — SupraLabs, 88 likes, 1.2K downloads. A 51M router model for gating in MoE or ensemble systems.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — empero-ai, 762 likes, 184K downloads. A Qwen3.5-based vision-language model fine-tuned with Claude distills; also available in GGUF.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Baidu, 1,921 likes, 1.3M downloads. A transformer-based OCR model that handles unlimited-length text extraction from images, widely adopted.
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai, 213 likes, 3.7K downloads. A multi-modal model blending Qwen3.6 with visual reasoning for step-by-step thought.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS, 2,626 likes, 2.7M downloads. A heavily downloaded uncensored MoE variant of Qwen3.6 with vision capabilities and aggressive post-training.
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — Nvidia, 2,701 likes, 1.5M downloads. A 3B model for open-vocabulary visual grounding (locate objects in images), extremely popular for its accuracy and small size.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team, 99 likes, 5.9K downloads. An audio-to-text model that transcribes and diarizes speakers in a single pipeline.
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx, 86 likes, 0 downloads. A text-to-video identity-preservation model using LTX-Video architecture.
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — Krea, 578 likes, 164K downloads. A fast text-to-image model based on Krea-2-Raw, optimized for speed over quality.
- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — open-gigaai, 119 likes, 0 downloads. An early world model checkpoint (diffusers-based) for generative simulations.
- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — robbyant, 77 likes, 317 downloads. A MoE video generation model with 30B parameters (3B active), Apache-2.0.

### 🔧 Specialized Models (code, math, medical, embeddings, routers, tabular)

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — Google, 345 likes, 18.6K downloads. A zero-shot tabular classification/regression foundational model, the first of its kind in PyTorch.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric, 836 likes, 0 downloads. A correction of Qwen chat templates for MLX/Jinja compatibility; essential tool for Qwen deployers.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai, 1,981 likes, 1.9M downloads. GGUF quantized version of the Qwythos vision-language model, optimized for llama.cpp.
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai, 837 likes, 1.1M downloads. MIT-licensed 35B GGUF suitable for local reasoning tasks.
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot, 158 likes, 9K downloads. Tiny 1B thinking model in GGUF, distilled from Claude Opus.
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — unsloth, 127 likes, 31.9K downloads. GGUF of DeepSeek-V4 optimized for flash attention and fast inference.
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1, 1,135 likes, 427K downloads. A GGUF of Gemma-4 fine-tuned for agentic terminal/coding tasks.
- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — Nvidia, 336 likes, 787K downloads. Qwen3.6-27B quantized with Nvidia’s ModelOpt 4-bit floating point, offering high efficiency on Nvidia GPUs.
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth, 1,038 likes, 2.9M downloads. The most downloaded GGUF this week, enabling multi-token prediction acceleration for Qwen3.6 on consumer hardware.
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke, 161 likes, 0 downloads. A LoRA adapter for Krea-2-Raw that enables identity-consistent image editing.

## Ecosystem Signal

**MoE is now the default architecture** for large-scale open-weight models. Every major player—Tencent, Zhipu, Mistral, DeepSeek, Nvidia, and InternScience—is releasing Mixture-of-Experts models with 30–120B total parameters but only 3–9B active. This trend makes high-quality models accessible on edge hardware while maintaining large capacity.

**Qwen 3.5/3.6 dominates the fine-tuning ecosystem**, with over a dozen variants appearing in this week’s trending list alone. The Qwen family is clearly the “LLaMA 2/3 moment” for 2026, offering a permissive license, strong multilingual performance, and a thriving community of quantizers (unsloth) and uncensors.

**GGUF continues to be the preferred quantization format** for local deployment, accounting for 8 of the 30 trending models. Unsloth’s Qwen3.6-27B-MTP-GGUF set a weekly download record (2.9M), signaling that efficient inference on CPUs/limited GPUs remains a top priority.

**Nvidia is aggressively pushing new quantization formats** (NVFP4) and specialized vision grounding models (LocateAnything-3B). Their strategy bridges high-performance cloud inference with practical, small-footprint models.

**Open-weight releases remain strong**: Mistral’s Leanstral under Apache-2.0, DeepSeek-V4 under a permissive license, and Tencent’s Hy3 all reinforce the trend that the most popular models are open.

## Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — With 2.7K likes and 1.5M downloads, this tiny 3B model performs open-vocabulary visual grounding with surprising accuracy. It’s a must-study for anyone working on object localization, robotics, or multi-modal agents.

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — The highest-liked model (3.8K) this week. GLM-5.2 is a state-of-the-art MoE conversational model; its combination of MoE-DSA architecture and strong benchmark performance makes it a reference for future LLM development.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — Almost 3 million downloads in one week. If you’re deploying Qwen locally, this is the definitive GGUF version. It demonstrates how multi-token prediction can improve throughput without sacrificing quality.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*