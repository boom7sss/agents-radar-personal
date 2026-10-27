# Hugging Face Trending Models Digest 2026-08-03

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-08-03 03:34 UTC

---

# Hugging Face Trending Models Digest — 2026-08-03

## Today's Highlights

Moonshot AI's **Kimi-K3** is the undisputed top of the week, pulling in 9.6K likes and 837K downloads with its compressed-tensor multimodal design. DeepSeek remains a heavyweight: the **DeepSeek-V4-Flash** family crossed 2.78M downloads on the base model, and the new **-0731** checkpoint plus Unsloth GGUF variants extend its local-use reach. Chinese labs are dominating the open-weight race, with **ZAI's GLM-5.2** and **Baidu's Unlimited-OCR** each seeing millions of downloads. On the release side, **MiniMax-H3** enters as a fresh image-text-to-video diffusion model, while Microsoft shipped **Mage-VL** and the computer-use model **Fara1.5-27B**. Community activity is heavily concentrated around Qwen3.6 MoE fine-tunes, uncensored GGUF packs, and efficient quantizations.

## Trending Models

### 🧠 Language Models

- [**DeepSeek-V4-Flash**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) — deepseek-ai · 1,960 likes · 2,785,810 downloads  
  The flagship V4 "Flash" text-generation model, one of the most downloaded releases on the Hub this week.

- [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — deepseek-ai · 1,780 likes · 156,173 downloads  
  Updated DeepSeek V4 checkpoint with a research paper reference, extending the Flash line's reach.

- [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) — zai-org · 4,758 likes · 2,050,533 downloads  
  ZAI's conversational MoE LLM (glm_moe_dsa) with massive adoption and strong weekly momentum.

- [**Nanbeige4.2-3B**](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) — Nanbeige · 628 likes · 33,042 downloads  
  A compact 3B LLM aimed at efficient text generation and lightweight deployment.

- [**Laguna-S-2.1**](https://huggingface.co/poolside/Laguna-S-2.1) — poolside · 879 likes · 80,102 downloads  
  poolside's enterprise-oriented text-generation model, showing steady interest beyond the usual frontier labs.

- [**Solar-Open2-250B**](https://huggingface.co/upstage/Solar-Open2-250B) — upstage · 720 likes · 14,863 downloads  
  Upstage's 250B-scale open-weight LLM, also serving as the base for a notable NVFP4 quantized variant.

- [**Instella-MoE-16B-A3B-Think**](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) — amd · 124 likes · 1,957 downloads  
  AMD's reasoning-oriented MoE LLM with ~3B active parameters, built around DeepSeek-V3-style architecture.

### 🎨 Multimodal & Generation

- [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) — moonshotai · 9,661 likes · 837,202 downloads  
  The week's most-liked model: a multimodal image-text-to-text system with compressed-tensor support.

- [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — MiniMaxAI · 278 likes · 0 downloads  
  A brand-new image-text-to-video diffusion model, likely to be a major release once adoption starts.

- [**Inkling-Small**](https://huggingface.co/thinkingmachines/Inkling-Small) — thinkingmachines · 232 likes · 6,839 downloads  
  A compact multimodal conversational model from Thinking Machines, targeting image+text interaction.

- [**Mage-VL**](https://huggingface.co/microsoft/Mage-VL) — microsoft · 192 likes · 272,148 downloads  
  Microsoft's vision-language model with strong multimodal traction and high download volume.

- [**Inflect-Micro-v2**](https://huggingface.co/owensong/Inflect-Micro-v2) — owensong · 372 likes · 1,825 downloads  
  A lightweight text-to-speech model built for CPU and edge inference, riding the local-TTS wave.

- [**Audio8-TTS-Preview-0.6b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — Audio8 · 180 likes · 4,314 downloads  
  An ArkTTS-based speech synthesis preview model for high-quality audio generation.

- [**Kroma**](https://huggingface.co/lodestones/Kroma) — lodestones · 129 likes · 0 downloads  
  A text-to-image LoRA for Krea 2 and ComfyUI, representing the creative-generation corner of the Hub.

- [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) — Comfy-Org · 95 likes · 2 downloads  
  Not a model itself but the ComfyUI integration for MiniMax-H3, signaling local video-generation workflows.

### 🔧 Specialized Models

- [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) — baidu · 3,783 likes · 2,536,284 downloads  
  Baidu's OCR-centric image-text-to-text model, one of the most downloaded practical tools this week.

- [**KAT-Coder-V2.5-Dev**](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) — Kwaipilot · 402 likes · 13,164 downloads  
  A coding-focused model built on Qwen3.5-MoE architecture, trending for developer assistance tasks.

- [**XYZ-Aquila-mini**](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) — XYZAILab · 366 likes · 903 downloads  
  A small Qwen3.5-MoE-based model tuned for agentic/search-oriented workflows.

- [**XYZ-Aquila-pro**](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) — XYZAILab · 335 likes · 1,094 downloads  
  The larger sibling in the Aquila line, highlighting agentic search and tool-use specialization.

- [**Fara1.5-27B**](https://huggingface.co/microsoft/Fara1.5-27B) — microsoft · 250 likes · 2,938 downloads  
  Microsoft's computer-use multimodal model based on Qwen3.5, targeting GUI-agent applications.

### 📦 Fine-tunes & Quantizations

- [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — DavidAU · 1,345 likes · 1,372,285 downloads  
  A heavily branded uncensored Qwen3.6 GGUF fine-tune with enormous community download counts.

- [**HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — HauhauCS · 3,244 likes · 1,892,654 downloads  
  An "aggressive", vision-capable, uncensored Qwen3.6 MoE GGUF that has become a community phenomenon.

- [**LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF**](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) — LuffyTheFox · 305 likes · 259,237 downloads  
  A Hermes-flavored uncensored Qwen3.6 MoE GGUF with solid adoption for local roleplay/creative use.

- [**DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) — DavidAU · 210 likes · 292,511 downloads  
  A smaller 9B uncensored Qwen3.5 GGUF, popular for low-resource or fast local inference.

- [**EschaLabs/Qwen3.6-35B-A3B-Escha-W2**](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) — EschaLabs · 120 likes · 2,550 downloads  
  A community MoE fine-tune of Qwen3.6, reflecting the rush to customize A3B-class models.

- [**empero-ai/Qwythos-27B-v1**](https://huggingface.co/empero-ai/Qwythos-27B-v1) — empero-ai · 97 likes · 1,279 downloads  
  A Qwen3.5-based multimodal 27B fine-tune, adding to the growing stack of Qwen-derived releases.

- [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — unsloth · 344 likes · 48,707 downloads  
  Unsloth's GGUF quantization of DeepSeek V4 Flash, making the new checkpoint easier to run locally.

- [**unsloth/Kimi-K3-GGUF**](https://huggingface.co/unsloth/Kimi-K3-GGUF) — unsloth · 252 likes · 88,481 downloads  
  The GGUF version of Kimi-K3 for efficient multimodal inference on consumer hardware.

- [**unsloth/Kimi-K3**](https://huggingface.co/unsloth/Kimi-K3) — unsloth · 227 likes · 1,277 downloads  
  An Unsloth-optimized export of Kimi-K3, aimed at faster fine-tuning and deployment.

- [**nota-ai/Solar-Open2-250B-Nota-NVFP4**](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) — nota-ai · 154 likes · 68,199 downloads  
  A vLLM-ready NVFP4 quantization of Solar-Open2-250B, showing the push toward efficient serving of very large open models.

## Ecosystem Signal

The dominant signal this week is **open-weight MoE momentum**. Qwen3.5/Qwen3.6 derivatives are the most common base for community fine-tunes, especially the 35B-A3B and 27B form factors, while DeepSeek V4 Flash, GLM-5.2, and Solar-Open2 anchor the frontier-scale open-model race. Efficiency is the clear theme: **GGUF, NVFP4, compressed-tensors, and MoE architectures** are everywhere, indicating that users care as much about local or low-cost serving as raw quality. Multimodal capabilities are becoming the default rather than the exception, with image-text-to-text, OCR, TTS, video generation, and computer-use models all appearing in the top 30. Another strong signal is the **uncensored fine-tune market**: several Qwen3.6 GGUF packs have millions of downloads, showing enormous demand for fictional, roleplay, and creative-use variants. No proprietary-model-only releases appear in the top list; open weights from both Western and Chinese labs are clearly winning the early adoption race.

## Worth Exploring

- [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) — It is the week's most-liked model and showcases how compressed-tensor techniques can be combined with powerful multimodal understanding; worth studying for efficient MLLM design.
- [**GLM-5.2**](https://huggingface.co/zai-org/GLM-5.2) — With 4.7K likes and 2M downloads, this MoE chat model represents one of the strongest open-weight alternatives to the DeepSeek/Qwen wave.
- [**Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR) — The 2.5M download count makes it a standout practical tool; it is a great benchmark model for document AI and OCR-heavy production workloads.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*