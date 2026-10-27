# Hugging Face Trending Models Digest 2026-07-18

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-18 02:56 UTC

---

**Hugging Face Trending Models Digest – July 18, 2026**

---

## Today’s Highlights

This week’s top trends highlight a surge in **extreme compression techniques** (ternary 2‑bit, 1‑bit, NVFP4) that bring large MoE models to edge devices, alongside **vision‑language MoE fine‑tunes** based on Qwen3.6 that dominate both likes and downloads. **GLM-5.2** from Zhipu AI leads pure language model interest with over 4,000 weekly likes, while quantized variants of **Inkling** and **Hy3** show strong community adoption. The ecosystem also sees a burst of **LoRAs for identity‑preserving video editing** and a new **function‑calling** model built with JAX.

---

## Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction‑tuned)

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – Author: zai‑org | Likes: 4,073 | Downloads: 534,698  
  Zhipu AI’s latest MoE‑based dense language model, trending for its strong reasoning and conversational performance at the 50B‑class scale.

- **[Hy3](https://huggingface.co/tencent/Hy3)** – Author: tencent | Likes: 820 | Downloads: 12,719  
  Tencent’s third generation dense LLM, drawing attention as a competitive open‑weight alternative to GPT‑4 class models.

- **[MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** – Author: GnLOLot | Likes: 134 | Downloads: 4,840  
  A 1‑B parameter fine‑tune with advanced chain‑of‑thought abilities, popular for running on low‑resource devices.

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

- **[Inkling](https://huggingface.co/thinkingmachines/Inkling)** – Author: thinkingmachines | Likes: 962 | Downloads: 7,870  
  A new vision‑language architecture integrating image and text understanding, gaining steady community momentum.

- **[ThinkingCap‑Qwen3.6‑27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – Author: bottlecapai | Likes: 416 | Downloads: 9,383  
  A vision‑language MoE fine‑tune of Qwen3.6, optimized for step‑by‑step reasoning over images.

- **[MOSS‑Transcribe‑Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** – Author: OpenMOSS‑Team | Likes: 249 | Downloads: 83,160  
  An audio‑text model that both transcribes and performs speaker diarization, widely used for meeting and podcast processing.

- **[Wan‑Dancer‑14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** – Author: Wan‑AI | Likes: 109 | Downloads: 2,185  
  A diffusion image‑to‑video model specialised for generating dance movements, popular among content creators.

- **[krea2‑identity‑edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – Author: conradlocke | Likes: 348 | Downloads: 0  
  A LoRA for **Krea‑2‑Raw** that preserves subject identity during image editing, enabling consistent character edits.

- **[LTX‑Best‑Face‑ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** – Author: Alissonerdx | Likes: 178 | Downloads: 0  
  A text‑to‑video LoRA using LTX for identity‑preserving face generation from a reference image.

- **[LTX2.3‑22B_IC‑LoRA‑CrossView‑Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)** – Author: Cseti | Likes: 87 | Downloads: 0  
  An image‑conditioned LoRA for novel view synthesis in video generation, broadening LTX’s scene control.

- **[mgwr/M87](https://huggingface.co/mgwr/M87)** – Author: mgwr | Likes: 146 | Downloads: 3,874  
  A diffusion LoRA for **Krea‑2‑Turbo** that applies a stylised aesthetic, catching on among image generation enthusiasts.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[Cactus‑Compute/needle](https://huggingface.co/Cactus-Compute/needle)** – Author: Cactus‑Compute | Likes: 257 | Downloads: 874  
  A JAX‑trained function‑calling model with built‑in tool‑use capabilities, pioneering a new paradigm for agent workloads.

- **[ATH‑MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – Author: ATH‑MaaS | Likes: 153 | Downloads: 10,795  
  An OCR‑specific vision‑language model built on Qwen3.5, excelling at document and scene text extraction.

- **[baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited-OCR)** – Author: baidu | Likes: 2,020 | Downloads: 1,992,355  
  Baidu’s production‑grade OCR model, offering high accuracy for unconstrained text recognition – the most downloaded model today.

- **[froggeric/Qwen‑Fixed‑Chat‑Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** – Author: froggeric | Likes: 934 | Downloads: 0  
  A utility repository providing corrected Jinja chat templates for Qwen3.5 models, praised for fixing alignment issues.

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

- **[Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – Author: empero‑ai | Likes: 2,277 | Downloads: 2,096,147  
  A Qwen3.5‑based reasoning vision model quantized to GGUF, extremely popular for high throughput on consumer hardware.

- **[Qwen3.6‑35B‑A3B‑Uncensored‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – Author: HauhauCS | Likes: 2,830 | Downloads: 2,295,313  
  An uncensored MoE GGUF variant of Qwen3.6 with vision support, leading downloads with its aggressive fine‑tuning.

- **[Ternary‑Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – Author: prism‑ml | Likes: 681 | Downloads: 200,774  
  A pioneering **ternary 2‑bit** quantization of the Bonsai‑27B LLM, enabling 27B‑class intelligence at minimal memory footprint.

- **[Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – Author: prism‑ml | Likes: 398 | Downloads: 1,045,182  
  The original **1‑bit** Bonsai quantization, widely adopted for running LLMs on CPU and mobile devices.

- **[Qwen3.6‑27B‑NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** – Author: unsloth | Likes: 225 | Downloads: 1,924,495  
  UnsLoth’s efficient NVFP4 quantization of Qwen3.6, optimized for NVIDIA GPUs while maintaining vision‑language capabilities.

- **[Hy3‑GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** – Author: AngelSlim | Likes: 122 | Downloads: 84,834  
  GGUF conversion of Tencent’s Hy3, enabling seamless deployment with llama.cpp.

- **[GLM‑5.2‑colibri‑int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** – Author: jlnsrk | Likes: 127 | Downloads: 3,447  
  An int4 MoE quantization with expert‑streaming, designed for CPU inference with low latency.

- **[inkling‑GGUF](https://huggingface.co/unsloth/inkling-GGUF)** – Author: unsloth | Likes: 91 | Downloads: 5,194  
  GGUF version of the Inkling multimodal model, giving broader access to its vision‑language pipeline.

- **[MiniCPM5‑1B‑Thinking‑GGUF & V2](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** – Author: GnLOLot | Likes: 273 & 103 | Downloads: 154,762 & 6,367  
  GGUF quantizations of the 1B thinking model, with the V2 version offering improved reasoning chains.

- **[Bonsai‑27B‑mlx‑1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit) / [Ternary‑Bonsai‑27B‑mlx‑2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** – Authors: prism‑ml | Likes: 117 & 100 | Downloads: 17,127 & 14,605  
  Apple MLX ports of the Bonsai extreme quantizations, optimised for Mac Silicon.

---

## Ecosystem Signal

The most striking trend this week is the **explosion of sub‑4‑bit quantization** (1‑bit, ternary 2‑bit, NVFP4). Models like **Bonsai‑27B** and **Ternary‑Bonsai** demonstrate that 27B parameters can run on devices with only a few GB of RAM, opening the door for truly open‑weight LLMs on mobile and edge hardware. Simultaneously, **MoE architectures are becoming the default base** behind popular fine‑tunes (GLM‑5.2, Qwen3.6‑35B‑A3B, Hy3). Community efforts focus on uncensored, reasoning‑enhanced variants of these MoEs, with **GGUF and MLX** wrappers ensuring cross‑platform compatibility.

Chinese AI labs continue to drive open‑weight releases: **Zhipu (GLM‑5.2)**, **Tencent (Hy3)**, and **Baidu (Unlimited‑OCR)** each contribute state‑of‑the‑art models that see rapid community adoption. On the multimodal side, **Inkling** stands out as a new architecture, while **LoRAs for Krea‑2 and LTX video models** indicate a maturing ecosystem for controllable image and video generation. The rise of **JAX‑based function‑calling** (needle) hints at where the next wave of agent‑oriented models may emerge.

---

## Worth Exploring

1. **[Ternary‑Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – This model exemplifies the cutting edge of extreme compression. With only 2‑bit per weight, it proves that high‑quality language generation is possible far below the traditional 4‑bit floor. Anyone interested in on‑device LLMs should study its approach.

2. **[Inkling](https://huggingface.co/thinkingmachines/Inkling)** – A fresh multimodal architecture that is not yet oversaturated by fine‑tunes. Its strong weekly likes (962) and modular design suggest it could become a foundation for future vision‑language projects.

3. **[Cactus‑Compute/needle](https://huggingface.co/Cactus-Compute/needle)** – A novel JAX‑based model purpose‑built for function‑calling. It avoids the “chat‑plus‑tool” kludge of most LLMs and instead treats tool use as a first‑class primitive. Worth experimenting with for agent workflows.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*