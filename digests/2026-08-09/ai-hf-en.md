# Hugging Face Trending Models Digest 2026-08-09

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-09 02:08 UTC

---

# Hugging Face Trending Models Digest — 2026-08-09

## 1. Today's Highlights

MiniMax-H3 is the dominant story today: the official image-text-to-video model anchors a fast-growing ecosystem of ComfyUI single-file packs, LoRAs, and quantized variants. In LLMs, DeepSeek-V4-Flash-0731 and GLM-5.2 both show strong momentum with millions of downloads, while Kimi-K3 and FLUX.1-dev continue to lead in multimodal interest. Community activity is heavy around GGUF conversions, “uncensored”/“heretic” Qwen fine-tunes, and NVFP4/INT8 quantizations of video models. Specialized tools like Baidu Unlimited-OCR and NVIDIA’s VoiceChat also stand out, signaling broader enterprise and audio-driven adoption.

## 2. Trending Models

### 🧠 Language Models

- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — zai-org | ❤️ 4,902 | ⬇️ 2,480,368. A large open-weight conversational MoE model with strong adoption and high immediate popularity.
- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — deepseek-ai | ❤️ 2,854 | ⬇️ 785,771. A fast, conversational text-generation flagship from DeepSeek with significant ecosystem pull.
- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — LiquidAI | ❤️ 418 | ⬇️ 81,522. A compact 2.6B liquid-model LLM gaining traction for efficient, small-footprint text generation.
- [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) — deepgrove | ❤️ 255 | ⬇️ 896. A Mixture-of-Experts causal LM preview from deepgrove, interesting for early-adopter experimentation.
- [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) — inclusionAI | ❤️ 222 | ⬇️ 4,189. A conversational text-generation model using a “bailing_hybrid” architecture, trending as a lightweight flash model.

### 🎨 Multimodal & Generation

- [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) — black-forest-labs | ❤️ 14,038 | ⬇️ 502,330. The long-standing open text-to-image developer model, still a benchmark for community image generation.
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — moonshotai | ❤️ 10,343 | ⬇️ 1,388,105. A high-profile multimodal image-text-to-text model with compressed-tensor deployment hooks.
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — MiniMaxAI | ❤️ 3,111 | ⬇️ 26,693. The core text-to-video / image-to-video model driving today's biggest video-generation trend.
- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — Comfy-Org | ❤️ 1,007 | ⬇️ 3,943,176. ComfyUI-packaged single-file version of MiniMax-H3, massively downloaded for easy local video workflows.
- [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) — thinkingmachines | ❤️ 346 | ⬇️ 28,178. A compact multimodal conversational model from thinkingmachines with broad image-text-to-text appeal.
- [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — Audio8 | ❤️ 324 | ⬇️ 12,837. A 0.6B text-to-speech preview model with ArkTTS-based audio generation, riding the TTS wave.
- [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) — microsoft | ❤️ 314 | ⬇️ 457,581. Microsoft’s multimodal vision-language model, popular for general image-text-to-text tasks.
- [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) — nvidia | ❤️ 246 | ⬇️ 458. NVIDIA’s 11B voice-chat model adding audio conversation capability to the Nemotron family.
- [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) — lightx2v | ❤️ 199 | ⬇️ 0. A diffusers-based image-to-video Turbo variant built on MiniMax-H3.
- [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) — Kijai | ❤️ 184 | ⬇️ 0. ComfyUI implementation wrapper for MiniMax-H3, enabling graph-based video workflows.
- [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) — Kijai | ❤️ 141 | ⬇️ 0. Experimental ComfyUI companion for MiniMax-H3, capturing early-adopter interest.

### 🔧 Specialized Models

- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — baidu | ❤️ 3,970 | ⬇️ 2,857,997. A high-performance OCR model from Baidu, trending as a practical document-understanding solution.
- [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) — Kwaipilot | ❤️ 544 | ⬇️ 17,885. A Qwen3.5-MoE-based code model with image-text support, aimed at coding and multimodal reasoning.
- [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) — mistralai | ❤️ 201 | ⬇️ 4,950. A compact 3B safety/guardrail model built on Mistral 3, designed for vLLM deployment.

### 📦 Fine-tunes & Quantizations

- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — DavidAU | ❤️ 1,761 | ⬇️ 2,345,190. A heavily merged, uncensored Qwen3.6 GGUF fine-tune with massive community downloads.
- [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — unsloth | ❤️ 608 | ⬇️ 175,093. Official-style GGUF quantizations of DeepSeek-V4-Flash from the Unsloth team for local inference.
- [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) — larryvrh | ❤️ 490 | ⬇️ 0. A LoRA adapter for MiniMax-H3-Turbo, popular in the text-to-video fine-tuning community.
- [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) — LuffyTheFox | ❤️ 438 | ⬇️ 373,651. An uncensored Qwen3.6 MoE GGUF with Hermes-style prompting, well-loved by local LLM enthusiasts.
- [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) — ethanfel | ❤️ 403 | ⬇️ 0. A ComfyUI-oriented INT8 multimodal fine-tune fusing Qwen3-VL with H3-style video capabilities.
- [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) — drbaph | ❤️ 207 | ⬇️ 0. A pruned, ComfyUI-ready LoRA adapter for MiniMax-H3-Turbo text-to-video workflows.
- [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) — SexGod1979 | ❤️ 176 | ⬇️ 0. A community fine-tune of MiniMax-H3 for text-to-video, tagged Apache-2.0 and endpoint-compatible.
- [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) — realrebelai | ❤️ 176 | ⬇️ 128,265. GGUF quantizations of Comfy-Org’s MiniMax-H3, making the video model more accessible on CPU/low-GPU systems.
- [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) — LiquidAI | ❤️ 157 | ⬇️ 49,562. Official GGUF packaging of LiquidAI’s 2.6B LLM for llama.cpp and local inference.
- [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) — Abiray | ❤️ 143 | ⬇️ 471,519. A heavily quantized NVFP4/INT4/INT8 version of MiniMax-H3 for efficient image-text-to-video generation.
- [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) — sakamakismile | ❤️ 133 | ⬇️ 0. A Qwen3-VL text-encoder variant paired with MiniMax-H3 in NVFP4 precision for ComfyUI video workflows.

## 3. Ecosystem Signal

The strongest momentum is around **MiniMax-H3**, which has become the center of an unusually broad open-weight video ecosystem: official releases, Comfy-Org single-file packs, GGUF quantizations, LoRA fine-tunes, and ComfyUI wrappers are all trending simultaneously. **Qwen3.x/Qwen3-VL** remains the favorite base for community merges and “uncensored”/“heretic” fine-tunes, often shipped as GGUF by Unsloth-style pipelines. Meanwhile, **DeepSeek-V4-Flash** and **GLM-5.2** are leading mainstream open-weight LLM adoption with very high download counts. There is also clear movement in specialized multimodal models: OCR, TTS, voice chat, and safety guardrails are all present, pointing to a maturing ecosystem beyond generic chatbots. Open-weight distribution is overwhelmingly dominant over proprietary releases, and the presence of NVFP4/INT4/INT8 and GGUF variants shows that efficient local deployment is a key driver of virality.

## 4. Worth Exploring

1. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — It is the seed model behind the largest trending ecosystem on the Hub today. Studying its official weights alongside Comfy-Org, GGUF, and LoRA derivatives reveals how a single open-weight video model spawns a full infrastructure stack.
2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — With 10.3K likes and compressed-tensor support, it represents the cutting edge of efficient multimodal deployment and is an excellent case study for production-grade image-text-to-text models.
3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — A practical, highly downloaded specialized model. It is worth testing for document intelligence and OCR-heavy RAG pipelines, and shows how domain-specific tools can outpace general-purpose models in real-world adoption.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*