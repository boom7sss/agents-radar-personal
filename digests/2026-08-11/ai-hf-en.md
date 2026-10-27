# Hugging Face Trending Models Digest 2026-08-11

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-11 02:08 UTC

---

# Hugging Face Trending Models Digest — 2026-08-11

## 1. Today's Highlights

This week’s Hugging Face trending list is dominated by **MiniMax-H3**, the open image-text-to-video model that has spawned a full ecosystem of LoRAs, ComfyUI packs, GGUF quantizations, and prompt rewriters — accounting for over a third of all trending entries. **DeepSeek-V4-Flash-0731** is the most-downloaded pure language model on the list (~954k downloads), and an Unsloth GGUF version already appears in the top 20, showing intense demand for local inference. **FLUX.1-dev** and **Kimi-K3** continue to attract the highest raw like counts, while brand-new releases like meta-models’ **Muse-Glimmer-30B**, NVIDIA’s **VoiceChat-11B**, and Baidu’s **Unlimited-OCR** add fresh multimodal and task-specific momentum. Quantization and format compatibility are central: NVFP4, INT8, GGUF, and ComfyUI single-file conversions are spreading rapidly across video and vision models.

## 2. Trending Models

### 🧠 Language Models

- [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — Author: deepseek-ai | Likes: 3,063 | Downloads: 954,441  
  Latest DeepSeek Flash-generation conversational LLM, trending for strong fast reasoning performance and immediate local-ecosystem adoption.

- [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — Author: LiquidAI | Likes: 490 | Downloads: 89,680  
  Compact 2.6B LLM from Liquid AI, gaining momentum in the efficient small-model movement for local inference.

- [**deepgrove/maple-preview**](https://huggingface.co/deepgrove/maple-preview) — Author: deepgrove | Likes: 312 | Downloads: 1,344  
  Mixture-of-experts causal-LM preview, drawing attention as a new architecture before a full release.

- [**inclusionAI/Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash) — Author: inclusionAI | Likes: 288 | Downloads: 5,261  
  Conversational text-generation model with custom bailing_hybrid architecture, representing the “flash” class of fast small-scale LLMs.

- [**SyzygyResearch/Mach-1-Additive-35B**](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) — Author: SyzygyResearch | Likes: 116 | Downloads: 2,129  
  Research model exploring ternary/additive weights on a Qwen3.5 MoE base, notable for novel compression and efficiency techniques.

### 🎨 Multimodal & Generation

- [**black-forest-labs/FLUX.1-dev**](https://huggingface.co/black-forest-labs/FLUX.1-dev) — Author: black-forest-labs | Likes: 14,077 | Downloads: 480,762  
  The long-standing open text-to-image reference model, still trending as the community continues to build around its quality and ecosystem.

- [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) — Author: moonshotai | Likes: 10,472 | Downloads: 1,510,032  
  Kimi’s large multimodal model with compressed-tensor support, ranking among the most-liked models this week.

- [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — Author: MiniMaxAI | Likes: 3,437 | Downloads: 47,468  
  The base open image-text-to-video model behind the week’s largest video-generation ecosystem wave.

- [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) — Author: meta-models | Likes: 754 | Downloads: 0  
  New 30B image-text-to-text conversational multimodal model, generating heavy early interest despite no downloads yet.

- [**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) — Author: nvidia | Likes: 299 | Downloads: 597  
  NVIDIA’s real-time voice-chat model, notable for integrating speech and dialogue into a single conversational stack.

- [**Audio8/Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — Author: Audio8 | Likes: 338 | Downloads: 13,432  
  Compact 0.6B text-to-speech preview using ArkTTS, signaling growing demand for lightweight speech generation.

- [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) — Author: lightx2v | Likes: 261 | Downloads: 15,087  
  Turbo-optimized image-to-video variant built on MiniMax-H3, aimed at faster video generation workflows.

- [**endless-frontier/BigBang-v1**](https://huggingface.co/endless-frontier/BigBang-v1) — Author: endless-frontier | Likes: 153 | Downloads: 617  
  New Qwen3.5-MoE-based image-text-to-text conversational model, showing increased fusion of MoE and vision-language capabilities.

### 🔧 Specialized Models

- [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) — Author: baidu | Likes: 4,002 | Downloads: 2,921,751  
  Baidu’s powerful OCR model for document and visual-text extraction, with massive downloads reflecting strong practical demand.

- [**mistralai/Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B) — Author: mistralai | Likes: 222 | Downloads: 6,343  
  Mistral’s 3B guardrail/safety classification model, important for moderating open-weight chat and agent deployments.

### 📦 Fine-tunes & Quantizations

- [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) — Author: Comfy-Org | Likes: 1,149 | Downloads: 6,009,639  
  ComfyUI single-file conversion of MiniMax-H3, with the highest download count on the list thanks to easy local video-generation integration.

- [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — Author: DavidAU | Likes: 1,862 | Downloads: 2,439,083  
  Community GGUF fine-tune/merge with uncensored and “heretic” styling, showing continued appetite for alternative-aligned chat models.

- [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — Author: unsloth | Likes: 638 | Downloads: 199,167  
  Unsloth’s GGUF quantization suite for DeepSeek V4 Flash, making the model immediately usable in llama.cpp local inference.

- [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) — Author: larryvrh | Likes: 601 | Downloads: 0  
  LoRA adapter for MiniMax-H3 Turbo targeting text-to-video and audio-video workflows.

- [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) — Author: ethanfel | Likes: 440 | Downloads: 0  
  INT8 Qwen3-VL-32B variant fused with Heretic-H3 elements for ComfyUI, representing the trend of highly customized vision-language/video tooling.

- [**Kijai/MiniMax-H3_comfy**](https://huggingface.co/Kijai/MiniMax-H3_comfy) — Author: Kijai | Likes: 258 | Downloads: 0  
  Kijai’s ComfyUI implementation for MiniMax-H3, a key integration piece in the open video-model workflow stack.

- [**drbaph/MiniMax-H3-Turbo-Lora-ComfyUI**](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) — Author: drbaph | Likes: 251 | Downloads: 0  
  Pruned, ComfyUI-ready LoRA for MiniMax-H3 Turbo, simplifying video-generation customization.

- [**SexGod1979/PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) — Author: SexGod1979 | Likes: 251 | Downloads: 0  
  Community text-to-video fine-tune of MiniMax-H3 released under Apache-2.0.

- [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) — Author: unsloth | Likes: 217 | Downloads: 0  
  Unsloth’s optimized GGUF conversion of the new Muse-Glimmer multimodal model.

- [**realrebelai/MiniMax-H3_GGUFs**](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) — Author: realrebelai | Likes: 193 | Downloads: 174,862  
  GGUF quantizations of Comfy-Org’s MiniMax-H3, enabling video generation on lower-resource hardware.

- [**LiquidAI/LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) — Author: LiquidAI | Likes: 186 | Downloads: 89,611  
  Official GGUF version of LiquidAI’s 2.6B model, extending its reach to llama.cpp and edge deployment.

- [**Kijai/MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) — Author: Kijai | Likes: 184 | Downloads: 0  
  Experimental ComfyUI build for MiniMax-H3, signaling rapid active development in the video-generation tooling space.

- [**meta-models/Muse-Glimmer-30B-GGUF**](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) — Author: meta-models | Likes: 154 | Downloads: 0  
  Standard GGUF conversion of Muse-Glimmer-30B, aimed at local multimodal inference.

- [**sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4**](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) — Author: sakamakismile | Likes: 152 | Downloads: 0  
  NVFP4-quantized Qwen3-VL 32B text-encoder for MiniMax-H3 ComfyUI pipelines, enabling larger models on limited VRAM.

- [**lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA**](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) — Author: lightx2v | Likes: 117 | Downloads: 268  
  PEFT LoRA that rewrites user prompts for better MiniMax-H3 generation quality.

## 3. Ecosystem Signal

MiniMax-H3 is clearly this week’s center of gravity: at least ten of the thirty trending models are either base, LoRA, ComfyUI, or GGUF variants of it. This signals that open video generation has moved from single model releases to full-stack workflows, with users prioritizing ComfyUI integration and quantized files over raw checkpoints. Open-weight models from large labs — DeepSeek, Moonshot, NVIDIA, Baidu, BFL, and meta-models — continue to coexist with smaller efficient releases such as LiquidAI’s 2.6B and Audio8’s 0.6B. The rapid GGUF, INT8, and NVFP4 conversions suggest local deployment is now a primary expectation rather than an afterthought. Meanwhile, “uncensored/heretic” fine-tunes remain a persistent niche but are increasingly fused with serious tooling — Qwen3-VL text encoders, MiniMax-H3, ComfyUI — indicating that customization and workflow compatibility matter as much as raw model quality.

## 4. Worth Exploring

- [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — Best starting point for understanding the week’s dominant open video-generation family, especially with so many LoRA and ComfyUI derivatives already appearing.

- [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — With nearly a million downloads, this is the strongest signal of real-world LLM demand and a good baseline for evaluating open-weight chat performance.

- [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — A compact, efficient model at the center of the small-model trend; ideal for studying how far 2-3B parameter models can go on local hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*