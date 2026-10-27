# Hugging Face Trending Models Digest 2026-08-13

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-13 02:27 UTC

---

# Hugging Face Trending Models Digest — 2026-08-13

## 1. Today's Highlights

The Hugging Face trending board is currently ecosystem-led: MiniMax-H3 has become the anchor for a wave of LoRAs, ComfyUI integrations, prompt-rewriting adapters, and GGUF conversions. Moonshot AI's Kimi-K3 leads in weekly likes at 10.5K, while DeepSeek-V4-Flash crossed 1M downloads, confirming strong demand for efficient open-weight LLMs. Official FP8 (Qwen) and NVFP4 (NVIDIA) releases also show that low-precision deployment is now a first-class release strategy. The mix of massive sparse MoE models, mobile-sized LLMs, and open video-generation tooling makes this one of the most format-heavy weeks in recent months.

---

## 2. Trending Models

### 🧠 Language Models

- **DeepSeek-V4-Flash-0731** — deepseek-ai | Likes: 3,241 | Downloads: 1,048,685  
  The latest DeepSeek text-generation release and the week's most-downloaded pure LLM, driving broad local and production adoption.

- **LiquidAI/LFM2.5-2.6B** — LiquidAI | Likes: 586 | Downloads: 93,668  
  A compact 2.6B liquid-transformer model for efficient text generation, popular for edge and low-latency use cases.

- **Qwen/Qwen3.8-2.4T-A95B** — Qwen | Likes: 529 | Downloads: 978  
  A 2.4T-parameter sparse MoE LLM with 95B active parameters, representing an aggressive step toward large-scale efficient serving.

- **deepgrove/maple-preview** — deepgrove | Likes: 346 | Downloads: 2,049  
  A preview MoE causal language model, gaining attention for its mixture-of-experts text-generation design.

- **inclusionAI/Ling-3.0-flash** — inclusionAI | Likes: 319 | Downloads: 6,148  
  A "flash" hybrid chat model using custom `bailing_hybrid` code, trending as a fast, lightweight conversational option.

- **nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4** — nvidia | Likes: 207 | Downloads: 19,250  
  NVIDIA's official NVFP4-quantized version of the 30B-A3B Lightning MoE, signaling a broader push toward low-precision inference.

- **inclusionAI/Ling-3.0-tiny** — inclusionAI | Likes: 193 | Downloads: 0  
  MIT-licensed tiny sibling of Ling-3.0-flash, aimed at very small and local deployments.

- **nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16** — nvidia | Likes: 117 | Downloads: 15,740  
  The BF16 release of NVIDIA's 30B-total/3B-active MoE LLM, a solid open-weight option for efficient text generation.

---

### 🎨 Multimodal & Generation

- **moonshotai/Kimi-K3** — moonshotai | Likes: 10,584 | Downloads: 1,565,484  
  Moonshot AI's image-text-to-text model with compressed-tensor support; it is the highest-liked model in this digest and one of the most-downloaded.

- **MiniMaxAI/MiniMax-H3** — MiniMaxAI | Likes: 3,718 | Downloads: 83,484  
  The core image-text-to-video flagship powering the week's largest open video-generation ecosystem.

- **meta-models/Muse-Glimmer-30B** — meta-models | Likes: 1,302 | Downloads: 0  
  A 30B image-text-to-text conversational model currently trending with GGUF companions despite being a very fresh release.

- **Comfy-Org/MiniMax-H3** — Comfy-Org | Likes: 1,259 | Downloads: 6,798,796  
  ComfyUI's single-file packaging of MiniMax-H3; the list's most-downloaded artifact, reflecting heavy local workflow usage.

- **Lightricks/LTX-2.5** — Lightricks | Likes: 575 | Downloads: 39  
  Lightricks' latest diffusion model for image-to-video, text-to-video, and video-to-video, offering a strong open alternative in video generation.

- **lightx2v/Minimax-h3-Turbo** — lightx2v | Likes: 412 | Downloads: 20,376  
  A community "Turbo" port of MiniMax-H3 focused on faster image-to-video generation.

- **Kijai/MiniMax-H3_comfy** — Kijai | Likes: 295 | Downloads: 0  
  Kijai's ComfyUI implementation of MiniMax-H3, a key integration layer for local video workflows.

- **Kijai/MiniMax-H3-experimental** — Kijai | Likes: 214 | Downloads: 0  
  Experimental ComfyUI nodes for early testing of new MiniMax-H3 features.

- **endless-frontier/BigBang-v1** — endless-frontier | Likes: 182 | Downloads: 708  
  A Qwen3.5-MoE-based image-text-to-text model, notable for applying sparse MoE reasoning to vision-language tasks.

---

### 🔧 Specialized Models

- **nvidia/NVIDIA-NemotronLabs-VoiceChat-11B** — nvidia | Likes: 355 | Downloads: 653  
  An 11B voice-chat / spoken-dialogue model from NVIDIA, gaining traction as an open option for voice-enabled assistants.

---

### 📦 Fine-tunes & Quantizations

- **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF** — DavidAU | Likes: 1,960 | Downloads: 2,521,093  
  A community GGUF merge/fine-tune of Qwen3.6-27B; regardless of the long name, it is the most-used community repack in today's list.

- **larryvrh/MiniMax-H3-Turbo-Lora** — larryvrh | Likes: 701 | Downloads: 0  
  A Turbo LoRA for MiniMax-H3 aiming at faster generation and audio-video workflows.

- **unsloth/DeepSeek-V4-Flash-0731-GGUF** — unsloth | Likes: 666 | Downloads: 207,990  
  Unsloth's GGUF of DeepSeek-V4-Flash; the download count shows strong demand for local frontier-class LLM inference.

- **ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot** — ethanfel | Likes: 477 | Downloads: 0  
  A ComfyUI-oriented INT8 quantization/fine-tune of Qwen3-VL-32B for local multimodal experimentation.

- **unsloth/Muse-Glimmer-30B-GGUF** — unsloth | Likes: 362 | Downloads: 0  
  Unsloth's GGUF conversion of Muse-Glimmer-30B for efficient local image-text-to-text inference.

- **drbaph/MiniMax-H3-Turbo-Lora-ComfyUI** — drbaph | Likes: 303 | Downloads: 0  
  A pruned MiniMax-H3-Turbo LoRA packaged directly for ComfyUI.

- **SexGod1979/PinkCherry_MiniMax-H3** — SexGod1979 | Likes: 287 | Downloads: 0  
  A community MiniMax-H3 text-to-video variant with endpoint compatibility and an Apache-2.0 license.

- **meta-models/Muse-Glimmer-30B-GGUF** — meta-models | Likes: 241 | Downloads: 0  
  The releasing organization's own GGUF version of Muse-Glimmer-30B, complementing Unsloth's package.

- **fal/MiniMax-H3-Realism-People-LoRA** — fal | Likes: 147 | Downloads: 0  
  A focused LoRA for generating more realistic people in MiniMax-H3 video outputs.

- **lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA** — lightx2v | Likes: 141 | Downloads: 353  
  A prompt-rewriting LoRA designed to improve text-to-video prompt quality for MiniMax-H3.

- **unsloth/MiniMax-H3-GGUF** — unsloth | Likes: 137 | Downloads: 781  
  A GGUF conversion of MiniMax-H3 for local video generation via stable-diffusion.cpp.

- **Qwen/Qwen3.8-2.4T-A95B-FP8** — Qwen | Likes: 122 | Downloads: 3,851  
  Official FP8 quantization of Qwen's 2.4T MoE model, enabling lower-memory deployment of a massive sparse LLM.

---

## 3. Ecosystem Signal

MiniMax-H3 is the clearest ecosystem signal this week: roughly a third of the trending entries are directly tied to it — official model, ComfyUI packs, Turbo LoRAs, realism LoRAs, prompt-rewriting adapters, and GGUF files. Open video generation is becoming a platform play rather than a single-model release.

At the LLM level, mixture-of-experts is now the default architecture across scale ranges: Qwen's 2.4T-A95B, NVIDIA's 30B-A3B, deepgrove's maple-preview, and BigBang-v1 all use MoE designs. Moonshot's Kimi-K3 also confirms that compressed-tensor and sparse techniques are moving into multimodal territory.

Quantization and fine-tuning activity is unusually high. GGUF variants from Unsloth, meta-models, and DavidAU, plus official FP8 and NVFP4 releases and multiple INT8 ComfyUI-friendly models, show that local, low-precision deployment is now a primary demand signal. All major families here are openly downloadable, reinforcing the continued open-weight momentum on Hugging Face.

---

## 4. Worth Exploring

- **Kimi-K3** — [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)  
  Highest likes, strong downloads, and compressed-tensor support make it a compelling study in efficient multimodal model design.

- **MiniMax-H3 + Comfy-Org/MiniMax-H3** — [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) and [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)  
  This ecosystem shows how a single video-generation model can evolve into a full local workflow platform with LoRAs, ComfyUI nodes, and GGUF variants.

- **DeepSeek-V4-Flash-0731 (+ Unsloth GGUF)** — [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) and [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)  
  With over 1M downloads and an active local-quantization ecosystem, this is the most practical open LLM launch to watch right now.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*