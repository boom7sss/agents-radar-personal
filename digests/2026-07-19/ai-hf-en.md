# Hugging Face Trending Models Digest 2026-07-19

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-19 03:29 UTC

---

# Hugging Face Trending Models Digest — 2026-07-19

## 1. Today's Highlights

This week's landscape is dominated by a surge in multimodal models, extreme quantization (1-bit and ternary), and high-profile open-weight releases. **zai-org/GLM-5.2** (4,131 likes) and **google/gemma-4-31B-it** (3,263 likes, 12.6M downloads) lead in community engagement, while **baidu/Unlimited-OCR** (2,027 likes, 2.09M downloads) signals growing demand for production-grade OCR. Quantization is a major theme: **prism-ml** pushes the frontier with 1-bit and ternary Bonsai models, and numerous GGUF variants of Qwen3.5/3.6 and MiniCPM5 flood the hub. Video generation and identity-preservation LoRAs also gain traction, reflecting a maturing multimodal ecosystem.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — Author: zai-org | Likes: 4,131 | Downloads: 541,662  
  A powerful MoE model with DSA architecture, trending for its strong open-weight performance and conversational ability.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — Author: tencent | Likes: 830 | Downloads: 13,571  
  Tencent’s next-generation language model from the Hunyuan family, gaining interest as a competitive open-weight LLM.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — Author: google | Likes: 3,263 | Downloads: 12,608,008  
  Google’s multimodal LLM (image-text-to-text) with massive download numbers, reflecting trust in the Gemma lineage.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — Author: InternScience | Likes: 579 | Downloads: 35,575  
  A Qwen3.5 MoE model specialized for agentic tasks and tool use, trending as agent frameworks grow.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** — Author: GnLOLot | Likes: 143 | Downloads: 5,271  
  A 1B thinking model fine-tuned from MiniCPM5, notable for packing reasoning ability into a small footprint.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — Author: Cactus-Compute | Likes: 268 | Downloads: 935  
  A JAX-based model optimized for function calling and tool use, standing out for its specialized architecture.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — Author: thinkingmachines | Likes: 1,067 | Downloads: 12,456  
  A multimodal image-text-to-text model with MoE, trending as a strong conversational vision-language model.

- **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)** — Author: empero-ai | Likes: 140 | Downloads: 9,060  
  The raw (non-quantized) version of a Qwen3.5-based multimodal reasoning model, driving interest in the Qwythos series.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — Author: bottlecapai | Likes: 437 | Downloads: 10,445  
  A multimodal thinking model built on Qwen3.6, gaining attention for structured reasoning over images.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — Author: ATH-MaaS | Likes: 172 | Downloads: 13,750  
  A specialized OCR model using Qwen3.5, trending due to practical text-extraction applications.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — Author: HauhauCS | Likes: 2,868 | Downloads: 2,190,398  
  An uncensored, aggressive MoE vision model in GGUF format, one of the most downloaded models this week.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — Author: OpenMOSS-Team | Likes: 259 | Downloads: 86,385  
  An audio-text-to-text model that transcribes and diarizes speech, riding the wave of real-time audio AI.

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** — Author: OpenMOSS-Team | Likes: 78 | Downloads: 529  
  A real-time video-text-to-text model, novel for live video understanding.

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — Author: Wan-AI | Likes: 115 | Downloads: 2,328  
  An image-to-video generation model, gaining interest as video synthesis quality improves.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — Author: baidu | Likes: 2,027 | Downloads: 2,088,470  
  Baidu’s production-grade OCR supporting unlimited-length text recognition, extremely popular for its accuracy and scale.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — Author: conradlocke | Likes: 398 | Downloads: 0  
  A ComfyUI LoRA for identity-preserving image editing based on Krea-2, trending despite zero downloads (likely for privacy).

- **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)** — Author: Cseti | Likes: 91 | Downloads: 0  
  A video-generation LoRA for novel view synthesis using cross-view prompts, novel in the LTX ecosystem.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Author: Alissonerdx | Likes: 187 | Downloads: 0  
  A LoRA for identity preservation in text-to-video, reflecting rising demand for consistent character generation.

### 🔧 Specialized Models (code, math, medical, embeddings, utilities)

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — Author: froggeric | Likes: 941 | Downloads: 0  
  A utility repository fixing chat template issues for Qwen models, widely appreciated for improving inference compatibility.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — Author: jlnsrk | Likes: 132 | Downloads: 3,869  
  An int4 quantization of GLM-5.2 optimized for CPU with expert streaming, notable for enabling large MoE models on consumer hardware.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, MLX)

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — Author: prism-ml | Likes: 446 | Downloads: 1,218,815  
  A 1-bit GGUF quantization of Bonsai-27B, extremely downloaded for its extreme compression while retaining capability.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — Author: prism-ml | Likes: 740 | Downloads: 301,893  
  A 2-bit ternary quantization (using -1/0/1 weights), trending for pushing the limits of lossy compression.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — Author: prism-ml | Likes: 127 | Downloads: 20,639  
  1-bit MLX version for Apple Silicon, extending Bonsai’s reach to Mac users.

- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** — Author: prism-ml | Likes: 112 | Downloads: 17,063  
  Ternary MLX variant, completing Bonsai’s quantization family.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — Author: empero-ai | Likes: 2,317 | Downloads: 2,112,869  
  The most downloaded GGUF model this week, a quantized multimodal reasoning model based on Qwen3.5.

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** — Author: empero-ai | Likes: 171 | Downloads: 103,504  
  Updated GGUF version of Qwythos, gaining momentum for improved quantization quality.

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — Author: AngelSlim | Likes: 128 | Downloads: 100,768  
  GGUF quantized version of tencent/Hy3, enabling efficient deployment of the model.

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** — Author: unsloth | Likes: 97 | Downloads: 6,461  
  GGUF quantization of Inkling, making the multimodal model accessible for local use.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — Author: GnLOLot | Likes: 277 | Downloads: 172,409  
  GGUF version of the 1B thinking model, popular for its small size and reasoning ability.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** — Author: GnLOLot | Likes: 114 | Downloads: 19,279  
  A second GGUF variant of the MiniCPM5 thinking model, offering alternative quantization settings.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** — Author: jlnsrk | Likes: 132 | Downloads: 3,869  
  Int4 CPU-optimized quantization of GLM-5.2 with expert streaming, bridging large MoE models to edge devices.

## 3. Ecosystem Signal

The current ecosystem is defined by several converging trends. **Qwen3.5/3.6** variants are the most active base family — nearly half of the trending models are derived from it, spanning reasoning, uncensored, and specialized OCR models. The **GLM-5.2** and **Gemma-4** releases from zai-org and Google signal that open-weight competition is intensifying at the 27B–40B scale, with MoE architectures (DSA, MoE-DSA) becoming mainstream. **Extreme quantization** — 1-bit and ternary — from prism-ml’s Bonsai family is the most notable technical development, promising to run 27B models on consumer devices with minimal quality loss; this is paired with a parallel explosion in **MLX** conversions for Apple users. Community fine-tuning is highly active, with LoRAs for identity preservation and video generation gaining traction. The rise of **multimodal models** (image-text-to-text, video, audio) now outpaces pure LLMs in volume, indicating that the hub is pivoting toward vision-language applications. Paper utility tools (chat template fixes, CPU-optimized runtimes) also see strong engagement, reflecting a maturing ecosystem where ease-of-deployment is as valued as performance.

## 4. Worth Exploring

1. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — A JAX-native model purpose-built for function calling and tool use. Its dedicated architecture (rather than a fine-tune) and low download count suggest an underappreciated innovation worth studying for agentic workflows.

2. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — With 2 million downloads and production-level performance, this is a practical powerhouse for OCR on long documents. Its popularity and Baidu’s backing make it a go-to model for anyone building text-extraction pipelines.

3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — The pinnacle of extreme quantization this month. While 1-bit models are known, ternary (2-bit with -1/0/1) is rare; evaluating its actual quality-vs-size trade-off is worthwhile for deploying large models on constrained hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*