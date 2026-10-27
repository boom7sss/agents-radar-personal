# Hugging Face Trending Models Digest 2026-08-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-10 02:15 UTC

---

# Hugging Face Trending Models Digest — 2026-08-10

## 1. Today's Highlights

This week's Hub is defined by three converging stories. First, **MiniMax-H3** has ignited one of the largest open video-model ecosystems in recent memory: the official release now has ComfyUI ports (Comfy-Org's single file has ~5M downloads), Turbo LoRAs, GGUF quantizations, and NVFP4/INT4/INT8 compressed variants. Second, Chinese labs dominate the frontier-LLM conversation with simultaneous launches from DeepSeek (V4-Flash-0731), Moonshot (Kimi-K3, the week's most-liked new model at 10.4K likes), and Z.ai (GLM-5.2, 2.5M downloads). Third, community fine-tuning of Qwen3.x "uncensored/heretic" GGUF variants remains a massive trend, while Baidu's **Unlimited-OCR** shows surging demand for document intelligence. Meanwhile, FLUX.1-dev solidifies its role as the enduring open-weight text-to-image benchmark.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — Author: deepseek-ai | Likes: 2,952 | Downloads: 868,576 — DeepSeek's latest Flash-tier conversational LLM and the flagship open-weight chat release of the week.

- [**zai-org/GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) — Author: zai-org | Likes: 4,914 | Downloads: 2,488,397 — Z.ai's MoE-based GLM-5.2 (glm_moe_dsa) continues the GLM line's momentum with massive adoption for deployed chat workloads.

- [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) — Author: moonshotai | Likes: 10,399 | Downloads: 1,456,459 — Moonshot's flagship multimodal LLM (image-text-to-text) with compressed-tensors support; the most-liked new model in this digest.

- [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — Author: LiquidAI | Likes: 453 | Downloads: 85,651 — A compact 2.6B efficient language model from Liquid AI, gaining traction for low-cost local inference.

- [**deepgrove/maple-preview**](https://huggingface.co/deepgrove/maple-preview) — Author: deepgrove | Likes: 290 | Downloads: 1,089 — An early-preview mixture-of-experts causal LM from a new lab; small numbers but worth monitoring as a potential emerging family.

- [**inclusionAI/Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) — Author: inclusionAI | Likes: 246 | Downloads: 4,747 — A lightweight conversational model built on the bailing_hybrid architecture, aimed at fast "flash-tier" inference.

- [**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) — Author: nvidia | Likes: 261 | Downloads: 543 — NVIDIA's 11B spoken-dialogue model for voice-chat applications, backed by several speech/voice papers.

- [**SyzygyResearch/Mach-1-Additive-35B**](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) — Author: SyzygyResearch | Likes: 104 | Downloads: 1,589 — A research-oriented 35B Qwen3.5-MoE model exploring ternary/additive weight representations for extreme efficiency.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — Author: MiniMaxAI | Likes: 3,251 | Downloads: 35,295 — The official MiniMax-H3 image-text-to-video diffusion model, and the seed of this week's largest ecosystem explosion.

- [**black-forest-labs/FLUX.1-dev**](https://huggingface.co/black-forest-labs/FLUX.1-dev) — Author: black-forest-labs | Likes: 14,059 | Downloads: 487,171 — The long-reigning open-weight text-to-image standard and the Hub's overall most-liked model this week.

- [**endless-frontier/BigBang-v1**](https://huggingface.co/endless-frontier/BigBang-v1) — Author: endless-frontier | Likes: 125 | Downloads: 482 — A Qwen3.5-MoE-based image-text-to-text conversational model from a new lab; early-stage but architecturally interesting.

- [**Audio8/Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — Author: Audio8 | Likes: 333 | Downloads: 13,132 — A compact 0.6B ArKTTS-based text-to-speech preview riding the wave of small open TTS models.

### 🔧 Specialized Models (code, math, medical, embeddings)

- [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) — Author: baidu | Likes: 3,987 | Downloads: 2,889,062 — Baidu's open-weight OCR/document-understanding model (image-text-to-text); near-3M downloads signal very strong practical demand.

- [**Kwaipilot/KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) — Author: Kwaipilot | Likes: 552 | Downloads: 18,574 — A Qwen3.5-MoE-based code model that also accepts image inputs, blending coding with visual understanding.

- [**mistralai/Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) — Author: mistralai | Likes: 211 | Downloads: 5,651 — Mistral's 3B safety-guardrail model (with vLLM support) for classifying and filtering model outputs.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) — Author: Comfy-Org | Likes: 1,076 | Downloads: 4,947,943 — The ComfyUI single-file distribution of MiniMax-H3 and by far the most-downloaded model in this digest (~5M downloads).

- [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — Author: DavidAU | Likes: 1,808 | Downloads: 2,390,692 — A heavily fine-tuned, "uncensored" Qwen3.6-27B GGUF; a prime example of the prolific creative/roleplay fine-tuning scene.

- [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — Author: unsloth | Likes: 629 | Downloads: 188,761 — Unsloth's official GGUF quantization of DeepSeek-V4-Flash, the standard path for running it locally.

- [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) — Author: larryvrh | Likes: 546 | Downloads: 0 — A Turbo LoRA for MiniMax-H3 aimed at faster text-to-video generation.

- [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) — Author: LuffyTheFox | Likes: 455 | Downloads: 396,282 — A Qwen3.6-35B-A3B MoE GGUF with Hermes-style tuning; high-download community "uncensored" MoE.

- [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) — Author: ethanfel | Likes: 418 | Downloads: 0 — A ComfyUI-integrated INT8 "Heretic" fine-tune of Qwen3-VL-32B fused with MiniMax-H3 text-encoder components.

- [**Kijai/MiniMax-H3_comfy**](https://huggingface.co/Kijai/MiniMax-H3_comfy) — Author: Kijai | Likes: 236 | Downloads: 0 — Kijai's influential ComfyUI node implementation for running MiniMax-H3 in graph-based pipelines.

- [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) — Author: lightx2v | Likes: 235 | Downloads: 6,117 — A Diffusers-based Turbo variant of MiniMax-H3 supporting text-to-video, image-to-video, and region-to-video.

- [**drbaph/MiniMax-H3-Turbo-Lora-ComfyUI**](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) — Author: drbaph | Likes: 232 | Downloads: 0 — A pruned, ComfyUI-ready adaptation of the MiniMax-H3 Turbo LoRA.

- [**SexGod1979/PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) — Author: SexGod1979 | Likes: 231 | Downloads: 0 — A community text-to-video fine-tune of MiniMax-H3 with Apache-2.0 licensing and endpoint compatibility.

- [**realrebelai/MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) — Author: realrebelai | Likes: 188 | Downloads: 160,747 — GGUF quantizations of Comfy-Org's MiniMax-H3 enabling video generation on CPU/limited-VRAM setups.

- [**LiquidAI/LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) — Author: LiquidAI | Likes: 175 | Downloads: 68,468 — Official llama.cpp GGUF of LFM2.5-2.6B for lightweight local deployment.

- [**Kijai/MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) — Author: Kijai | Likes: 170 | Downloads: 0 — An experimental fork of Kijai's MiniMax-H3 ComfyUI workflow, signaling active iteration around the base model.

- [**Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot**](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) — Author: Abiray | Likes: 155 | Downloads: 511,473 — A heavily compressed NVFP4/INT4/INT8 MiniMax-H3 variant with ConvRot; 511K downloads show strong appetite for quantized video models.

- [**sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) — Author: sakamakismile | Likes: 143 | Downloads: 0 — An NVFP4-quantized Qwen3-VL-32B text-encoder repurposed for use with MiniMax-H3 in ComfyUI.

## 3. Ecosystem Signal

The clearest signal this week is the maturation of **MiniMax-H3 into a platform**: the official model's 35K downloads are dwarfed by Comfy-Org's 4.95M and Abiray's 511K quantized variant, indicating that ComfyUI and aggressive compression are the primary distribution and adoption channels for open video models. Frontier open-weight momentum has shifted decisively toward **Chinese labs** — DeepSeek, Moonshot, Z.ai, Baidu, and inclusionAI — releasing competitive chat, multimodal, and OCR models in quick succession, while Western labs contribute infrastructure (NVIDIA voice chat, Mistral guardrails) and durable standards (FLUX). Architecturally, **mixture-of-experts is now the default** for large models (GLM-5.2, maple-preview, Qwen3.5/3.6 derivatives), while compact models like LiquidAI's 2.6B target edge deployment. Finally, the thriving "uncensored/heretic" GGUF fine-tune scene around Qwen3.x reflects sustained demand for creative, low-refusal community models — with licensing and safety implications worth monitoring as it scales.

## 4. Worth Exploring

- [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) — The most-liked new release this week (10.4K likes in seven days). Worth studying as a frontier multimodal LLM with compressed-tensors support; its strong like-to-download ratio signals genuine community enthusiasm beyond headline hype.

- [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) — With 2.9M downloads and ~4K likes, this is a rare open-weight OCR release from a major lab. High practical value for document-processing pipelines, and a useful case study in how a top lab packages and distributes specialized multimodal models.

- [**SyzygyResearch/Mach-1-Additive-35B**](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) — A research-oriented ternary/additive MoE that is unusual and under-explored. Worth watching for anyone tracking extreme low-bit weight representations and their quality trade-offs at scale.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*