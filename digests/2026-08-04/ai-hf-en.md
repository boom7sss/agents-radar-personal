# Hugging Face Trending Models Digest 2026-08-04

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-04 15:28 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-08-04

## 1. Today's Highlights

Moonshot AI's **Kimi-K3** is the week's most-liked release (9,969 likes, 1.1M downloads), signaling strong appetite for multimodal open-weight models. The **DeepSeek-V4-Flash** family dominated raw usage with 2.7M+ downloads, while an immediate unsloth GGUF quantization showed the ecosystem's fast-follow pattern. A wave of massive open-weight MoE models — LG's **K-EXAONE-2.0-750B**, **Solar-Open2-250B** (NVFP4-quantized), and **GLM-5.2** — pushed frontier-scale inference into community reach. Meanwhile, community fine-tunes of the Qwen3.6-35B-A3B base (HauhauCS, DavidAU, LuffyTheFox) generated 1.6M–1.9M downloads each, confirming the uncensored GGUF niche remains one of the strongest distribution channels on the Hub. Video (MiniMax-H3 with ComfyUI support) and edge TTS (Audio8, Inflect-Micro-v2) rounded out a diverse week.

---

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai · ⭐ 2,224 · ⬇️ 433,284 — A fresh checkpoint of DeepSeek's fast conversational flagship, trending for its strong quality-to-latency ratio and immediate ecosystem support.

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — deepseek-ai · ⭐ 2,004 · ⬇️ 2,737,621 — The base V4 Flash release, one of the most-downloaded open-weight chat models this week.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org · ⭐ 4,809 · ⬇️ 2,234,662 — A powerful MoE model with dynamic sparse attention (glm_moe_dsa), cementing GLM as a top open-weight frontier family.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — Nanbeige · ⭐ 663 · ⬇️ 37,256 — A compact 3B general-purpose LLM gaining traction for lightweight deployment.

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — poolside · ⭐ 917 · ⬇️ 82,912 — An updated generation of poolside's code-oriented foundation model, attracting developer attention.

- **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)** — EschaLabs · ⭐ 184 · ⬇️ 2,987 — An efficient 35B-A3B MoE refinement of the Qwen3.6 lineage for low-cost inference.

- **[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)** — XYZAILab · ⭐ 401 · ⬇️ 1,317 — A small Qwen3.5/3.6-based MoE variant focused on agentic and multimodal tasks.

- **[XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro)** — XYZAILab · ⭐ 357 · ⬇️ 1,388 — The pro-tier sibling with agentic-search capabilities, exploring retrieval-augmented tool use.

- **[LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)** — LGAI-EXAONE · ⭐ 111 · ⬇️ 325 — One of the largest open-weight MoE models ever released (750B total, 37B active).

- **[amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think)** — amd · ⭐ 151 · ⬇️ 2,306 — AMD's DeepSeek-V3-style reasoning-tuned MoE, signaling renewed vendor investment in open models.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — moonshotai · ⭐ 9,969 · ⬇️ 1,125,935 — A multimodal image-text-to-text flagship with compressed-tensors support, the most-liked release of the week.

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI · ⭐ 1,845 · ⬇️ 0 — A newly announced image-text-to-video generation model, highly anticipated despite zero downloads yet.

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — Comfy-Org · ⭐ 551 · ⬇️ 2 — The official ComfyUI-backed port of MiniMax-H3, built to bring video generation into local node-based pipelines.

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** — thinkingmachines · ⭐ 277 · ⬇️ 15,500 — A compact multimodal conversational model, gaining traction for lightweight vision-language chat.

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** — microsoft · ⭐ 251 · ⬇️ 435,784 — Microsoft's vision-language model, drawing significant downloads for general multimodal understanding.

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** — Audio8 · ⭐ 233 · ⬇️ 11,276 — A 0.6B-parameter preview TTS model, part of a wave of high-quality local speech synthesis.

- **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** — lodestones · ⭐ 171 · ⬇️ 0 — A LoRA for Krea 2 image generation, designed for ComfyUI workflows.

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** — owensong · ⭐ 405 · ⬇️ 2,072 — A CPU-friendly, edge-optimized TTS model that generated strong interest from local-first developers.

- **[empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1)** — empero-ai · ⭐ 129 · ⬇️ 2,243 — A Qwen3.5-based multimodal model with vision support, mixing chat and image understanding.

### 🔧 Specialized Models (code, math, OCR, embeddings)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu · ⭐ 3,873 · ⬇️ 2,703,366 — Baidu's general-purpose OCR model, the week's most-downloaded specialized release at 2.7M pulls.

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — Kwaipilot · ⭐ 464 · ⬇️ 15,381 — A Qwen3.5-MoE-based code model aimed at agentic and reasoning-heavy development tasks.

- **[LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M)** — LiquidAI · ⭐ 103 · ⬇️ 5,289 — A small 350M encoder (fill-mask) from Liquid AI, interesting for representation-learning and retrieval use cases.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, NVFP4)

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU · ⭐ 1,491 · ⬇️ 1,633,405 — A heavily optimized, uncensored Qwen3.6 fine-tune in multiple GGUF formats, near the top of community downloads.

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** — unsloth · ⭐ 459 · ⬇️ 111,678 — Unsloth's official-quality GGUF quantization of the new DeepSeek checkpoint, enabling local deployment.

- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** — unsloth · ⭐ 298 · ⬇️ 170,055 — The GGUF version of Kimi-K3, making Moonshot's multimodal model accessible on consumer hardware.

- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot)** — ethanfel · ⭐ 173 · ⬇️ 0 — A ComfyUI-oriented INT8 conversion blending Qwen3-VL-32B and MiniMax-H3, aimed at local video + vision pipelines.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)** — LuffyTheFox · ⭐ 358 · ⬇️ 308,857 — A Hermes-style uncensored Qwen3.6 MoE in GGUF, popular in the roleplay/local-model community.

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** — DavidAU · ⭐ 262 · ⬇️ 323,116 — A 9B-scale Qwen3.5 fine-tune with MTP and NEO Imatrix GGUF variants, showing strong long-tail demand.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS · ⭐ 3,288 · ⬇️ 1,930,898 — The breakout community release of the week: a vision-capable, aggressively uncensored Qwen3.6 MoE in GGUF.

- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** — nota-ai · ⭐ 174 · ⬇️ 69,253 — A 250B model quantized to NVFP4 for vLLM, a strong reference point for efficient frontier-scale serving.

---

## 3. Ecosystem Signal

The dominant pattern this week is the **Qwen3.5/3.6 A3B MoE wave**: a single base architecture (35B total, 3B active) has spawned an entire economy of community fine-tunes, uncensored variants, and GGUF quantizations, cumulatively pulling millions of downloads. Hugging Face is consolidating as the distribution layer for **open-weight frontier models**: DeepSeek-V4-Flash, GLM-5.2, Kimi-K3, and K-EXAONE-2.0-750B all appeared as fully open weights within days, blurring the line between lab releases and community artifacts. Quantization remains the key adoption driver — unsloth's near-instant GGUFs, DavidAU's MTP/Imatrix formats, and nota-ai's NVFP4 for 250B-class models all point to a maturing "open-weight serving stack." Uncensored fine-tunes continue to be a major, if controversial, engagement engine. On the modality frontier, video (MiniMax-H3 + ComfyUI) and edge/CPU TTS (Inflect-Micro-v2, Audio8) are clearly the next battlegrounds, with multimodal image-text-to-text becoming the default interface format across new releases.

---

## 4. Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The week's most-liked model (9,969 likes) with 1.1M downloads. It's worth studying for its compressed-tensors approach and multimodal architecture, which could represent Moonshot's strategy for efficient open-weight deployment at scale.

2. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — With 4,809 likes and 2.2M downloads, GLM-5.2 is a compelling case study in how MoE + dynamic sparse attention can achieve frontier-level quality while keeping inference costs tractable. A strong candidate for self-hosted production use.

3. **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — The fastest-rising community GGUF of the week (3,288 likes, 1.9M downloads). Regardless of use case, it's the clearest signal of how the open-weight fine-tuning and quantization ecosystem operates around a single strong MoE base — essential to understand for anyone tracking community distribution dynamics.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*