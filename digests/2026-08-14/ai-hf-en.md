# Hugging Face Trending Models Digest 2026-08-14

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-14 02:26 UTC

---

# Hugging Face Trending Models Digest — 2026-08-14

## Today's Highlights

The Hugging Face leaderboard this week is split between massive open-weight MoE language models and the rapidly expanding MiniMax-H3 video generation ecosystem. Moonshot's Kimi-K3 leads all models in likes (10.6k) as a compressed-tensor image-text-to-text release, while DeepSeek-V4-Flash and Qwen3.8-2.4T-A95B show continued appetite for huge sparse MoE architectures. On the video side, Comfy-Org's single-file MiniMax-H3 packaging has surpassed 10.3M downloads, supported by LoRAs, Turbo variants, GGUFs, and ComfyUI wrappers. The presence of GGUF releases for both Muse-Glimmer-30B and MiniMax-H3 signals that multimodal models are now following the same local-quantization playbook as text LLMs.

## Trending Models

### 🧠 Language Models

- [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) — Qwen · 795 likes · 1,012 downloads  
  A massive 2.4T-parameter MoE with 95B active parameters, representing Qwen's continued push toward frontier-scale open-weight sparse models.

- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — deepseek-ai · 3,324 likes · 1,431,587 downloads  
  The fast, production-oriented Flash variant of DeepSeek V4, one of the most actively downloaded open-weight text-generation models this week.

- [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) — deepseek-ai · 308 likes · 0 downloads  
  A freshly published Pro version of DeepSeek V4, likely heavier and more capable than Flash, with adoption still to come.

- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — LiquidAI · 603 likes · 116,640 downloads  
  A compact 2.6B liquid foundation model, notable for exploring non-transformer-inspired architectures in the small-model tier.

- [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) — nvidia · 131 likes · 22,279 downloads  
  NVIDIA's BF16 30B-total/3B-active MoE chat model, designed for low-latency text generation on NVIDIA GPU servers.

- [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) — deepgrove · 354 likes · 3,868 downloads  
  A preview of a Mixture-of-Experts causal LM under the “maple” name, drawing attention as a new architecture to watch.

- [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) — inclusionAI · 216 likes · 1,292 downloads  
  A tiny MIT-licensed hybrid-architecture model using custom code; its exact task isn't exposed, but it reflects the trend toward efficient, permissively licensed small models.

### 🎨 Multimodal & Generation

- [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) — meta-models · 1,427 likes · 121,042 downloads  
  A 30B image-text-to-text conversational model, trending strongly for multimodal reasoning and for its growing GGUF ecosystem.

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — MiniMaxAI · 3,831 likes · 1,605,940 downloads  
  The base video generation model behind this week's largest ecosystem, supporting image-to-video and text-to-video tasks.

- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) — Lightricks · 729 likes · 57,287 downloads  
  A versatile diffusion single-file model for image-to-video, text-to-video, and video-to-video generation.

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — moonshotai · 10,624 likes · 1,871,575 downloads  
  The top-liked model of the day: an image-text-to-text foundation model with compressed-tensor optimization, spanning conversational and feature-extraction use cases.

- [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) — MiniMaxAI · 352 likes · 25 downloads  
  A brand-new text-to-audio music generation model from MiniMax, extending the H3 family into the audio domain.

- [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) — lightx2v · 462 likes · 91,455 downloads  
  A Diffusers-native Turbo version of MiniMax-H3 for faster text-, image-, and reference-conditioned video generation.

- [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) — endless-frontier · 188 likes · 3,184 downloads  
  A Qwen3.5-MoE-based image-text-to-text conversational model, blending large sparse MoE reasoning with visual understanding.

- [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) — Gazingstars123 · 133 likes · 0 downloads  
  A compact 2.9B text-to-image diffusion model packaged for ComfyUI, interesting for low-resource image generation experiments.

### 🔧 Specialized Models

- [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) — nvidia · 373 likes · 1,164 downloads  
  A specialized 11B voice chat model from NVIDIA for spoken dialogue, built on the company's recent speech and language research.

### 📦 Fine-tunes, GGUF & Quantizations

- [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) — unsloth · 389 likes · 352,023 downloads  
  Unsloth's GGUF quantization of Muse-Glimmer-30B, one of the most-downloaded multimodal GGUF releases this week.

- [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) — meta-models · 257 likes · 136,783 downloads  
  The model author's own GGUF version of Muse-Glimmer-30B, giving local users a first-party path to the 30B vision-language model.

- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — Comfy-Org · 1,291 likes · 10,365,210 downloads  
  A diffusion-single-file, ComfyUI-native packaging of MiniMax-H3; the single most-downloaded item in this digest.

- [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) — Kijai · 307 likes · 0 downloads  
  A ComfyUI wrapper/repo for MiniMax-H3, important infrastructure for the local video-generation workflow rather than a standalone model.

- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — DavidAU · 1,989 likes · 2,793,115 downloads  
  A community GGUF merge/fine-tune based on Qwen3.6-27B, trending in the uncensored role-play and local-inference niche.

- [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) — nvidia · 230 likes · 44,859 downloads  
  The NVFP4-quantized version of Nemotron-3.5 Lightning-30B-A3B, optimized for efficient serving on NVIDIA Blackwell hardware.

- [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) — SexGod1979 · 298 likes · 324 downloads  
  A community text-to-video MiniMax-H3 variant packaged as an endpoint-compatible model.

- [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) — larryvrh · 726 likes · 0 downloads  
  A LoRA adapter for MiniMax-H3-Turbo, one of several new community adapters targeting video generation.

- [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) — drbaph · 314 likes · 0 downloads  
  A ComfyUI-ready LoRA adapter for MiniMax-H3-Turbo, making the Turbo variant easier to use in local pipelines.

- [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) — fal · 159 likes · 4,692 downloads  
  A LoRA focused on more realistic human rendering in MiniMax-H3 video outputs, from inference platform fal.

- [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) — Qwen · 162 likes · 4,000 downloads  
  The official FP8 quantization of Qwen3.8-2.4T-A95B, reducing memory and compute requirements for the giant MoE.

- [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) — unsloth · 149 likes · 111,222 downloads  
  A GGUF packaging of MiniMax-H3, enabling local video generation through stable-diffusion.cpp and similar runtimes.

- [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) — lightx2v · 149 likes · 652 downloads  
  A PEFT LoRA that rewrites prompts before MiniMax-H3 generation, improving video output quality and instruction adherence.

- [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) — ethanfel · 483 likes · 0 downloads  
  A heavily modified INT8 Qwen3-VL-32B variant built for ComfyUI, combining community “uncensored” tuning with quantization.

## Ecosystem Signal

Video generation is the clearest ecosystem signal this week: MiniMax-H3 has generated a full stack of base weights, Turbo variants, LoRAs for realism and prompt rewriting, ComfyUI single-file packs, and GGUF local runtimes. Open-weight MoE models are also accelerating, with Qwen3.8-2.4T-A95B, DeepSeek-V4 Flash/Pro, and NVIDIA Nemotron Lightning all pushing the many-total/few-active parameter design. Quantization is no longer an afterthought: FP8, NVFP4, INT8, and GGUF variants are appearing alongside base models, often from official labs or Unsloth. The long tail of community LoRAs and uncensored merges remains active, but the standout data point is Comfy-Org's MiniMax-H3 crossing 10.3M downloads, suggesting the next open-weight frontier is local, ComfyUI-driven video creation as much as text-based LLM serving.

## Worth Exploring

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — The top-liked model on the leaderboard. Its compressed-tensor image-text-to-text design makes it a high-value study for the next generation of efficient multimodal LLMs.

- [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) — One of the first practical ways to run a modern video generation model locally. It represents a major step toward democratizing video synthesis outside the cloud.

- [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) — A newly previewed MoE architecture with little documentation, making it interesting for anyone tracking novel sparse-model designs before they become mainstream.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*