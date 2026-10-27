# Hugging Face Trending Models Digest 2026-07-17

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-17 03:19 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-17

## Today's Highlights

This week’s trending list is defined by two major themes: **extreme quantization** (1-bit and ternary models) and the explosive growth of **Qwen 3.5/3.6-based variants**, especially in uncensored and image‑text‑to‑text pipelines. The top spot by likes goes to **zai-org/GLM-5.2** (4,030 likes), a MoE model that signals a community shift toward efficient mixture‑of‑experts architectures. Meanwhile, **HauhauCS/Qwen3.6-35B-A3B-Uncensored** and **empero-ai/Qwythos-9B-Claude-Mythos** both surpassed 2 million downloads, underlining strong demand for vision‑language models with reasoning capabilities. Finally, the emergence of **prism-ml’s Bonsai/Ternary-Bonsai** series in 1‑bit and ternary formats points to a growing appetite for ultra‑low‑bit inference on consumer hardware.

---

## Trending Models

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  Author: zai-org | Likes: 4,030 | Downloads: 513,061  
  A MoE transformer (GLM architecture) with DSA inference, the most‑liked model this week – likely driven by its strong reasoning‑to‑efficiency ratio.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  Author: tencent | Likes: 813 | Downloads: 11,849  
  Tencent’s latest text‑generation model (Hunyuan‑v3 family), gaining attention for its high‑quality output and MoE‑like design.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
  Author: InternScience | Likes: 568 | Downloads: 33,400  
  A Qwen 3.5 MoE model tuned for agentic tasks, reflecting the trend of specialized “agent” models.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**  
  Author: GnLOLot | Likes: 131 | Downloads: 4,117  
  A tiny 1B thinking model based on MiniCPM‑5, showing that even small models can be fine‑tuned for chain‑of‑thought.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
  Author: deepreinforce‑ai | Likes: 902 | Downloads: 1,785,575  
  A 35B GGUF variant (likely of an Ornith base model) that has seen massive download volumes, indicating community demand for mid‑sized quantized LLMs.

---

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
  Author: thinkingmachines | Likes: 824 | Downloads: 4  
  A new image‑text‑to‑text model (Inkling MM), still low on downloads but high on likes – early buzz suggests quality vision‑language performance.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  Author: empero-ai | Likes: 2,239 | Downloads: 2,042,670  
  A popular Qwen 3.5‑based vision‑language model in GGUF, optimized for reasoning – one of the most‑downloaded models on the list.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
  Author: bottlecapai | Likes: 390 | Downloads: 8,238  
  A 27B thinking‑enhanced vision model (Qwen3.6), demonstrating the push to add multi‑step reasoning to multimodal pipelines.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  Author: HauhauCS | Likes: 2,788 | Downloads: 2,328,315  
  An uncensored MoE vision model (35B with 3B active) – extremely high downloads, reflecting strong demand for “no guardrails” multimodal models.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
  Author: ATH-MaaS | Likes: 137 | Downloads: 3,678  
  A Qwen 3.5‑based OCR model, specialized for document understanding.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  Author: baidu | Likes: 2,011 | Downloads: 1,852,722  
  Baidu’s high‑performance OCR model, trending for its ability to handle unlimited‑length documents.

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**  
  Author: Wan‑AI | Likes: 92 | Downloads: 1,884  
  An image‑to‑video model using Diffusers, focused on dance motions – early sign of interest in generative video.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**  
  Author: Alissonerdx | Likes: 168 | Downloads: 0  
  A text‑to‑video LoRA for identity‑preserving video generation (LTX Video), showcasing reference‑to‑video personalization.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
  Author: OpenMOSS‑Team | Likes: 234 | Downloads: 75,105  
  An audio‑text‑to‑text model for transcription and speaker diarization, gaining traction for its all‑in‑one speech pipeline.

- **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**  
  Author: Cseti | Likes: 78 | Downloads: 0  
  A video‑generation LoRA for novel‑view synthesis (LTX Video), pushing creative video control.

- **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)** (and its GGUF variant) – both are Qwen 3.5‑based vision‑language models receiving continued community updates.

---

### 🔧 Specialized Models (code, math, agentic, embeddings, utility)

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
  Author: yuxinlu1 | Likes: 1,208 | Downloads: 506,068  
  A Gemma‑4‑based agentic coding model (with “fable5” fine‑tuning) in GGUF, strongly trending for terminal‑use and code generation.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
  Author: Cactus‑Compute | Likes: 249 | Downloads: 733  
  A JAX‑based model for function‑calling and tool use – niche but important for agent ecosystem building.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
  Author: froggeric | Likes: 925 | Downloads: 0  
  A curated set of fixed chat templates for Qwen models (MLX‑ready), highly liked as a utility for correct prompt formatting.

---

### 📦 Fine‑tunes & Quantizations (GGUF, MLX, int4, ternary, 1‑bit)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  Author: prism‑ml | Likes: 610 | Downloads: 74,007  
  First ternary (2‑bit) quantization of a 27B model – pioneering ultra‑low‑bit inference for llama.cpp.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  Author: prism‑ml | Likes: 344 | Downloads: 559,267  
  A 1‑bit GGUF of a 27B model, one of the most‑downloaded quantization experiments, proving extreme compression works for casual chat.

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**  
  Author: AngelSlim | Likes: 117 | Downloads: 80,796  
  GGUF quant of Tencent’s Hy3, making the model accessible on CPU/consumer GPUs.

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**  
  Author: jlnsrk | Likes: 121 | Downloads: 2,621  
  An int4 CPU‑friendly quantization of GLM‑5.2 with expert streaming, optimizing MoE inference.

- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**  
  Author: unsloth | Likes: 216 | Downloads: 1,712,974  
  Unsloth’s 4‑bit NVFP quantization of Qwen 3.6‑27B – very high downloads, reflecting the popularity of Unsloth’s efficient fine‑tuning and inference stack.

- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)**  
  Author: prism‑ml | Likes: 84 | Downloads: 7,622  
  Apple MLX variant of the ternary quantization, targeting Mac users.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**  
  Author: prism‑ml | Likes: 83 | Downloads: 10,760  
  The 1‑bit companion for MLX, continuing the trend of cross‑platform extreme quantization.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** (and v2) – GGUF versions of the 1B thinking model, attracting downloads from users wanting tiny quantized reasoning.

---

## Ecosystem Signal

The past week confirms several converging trends in the open‑weight ecosystem:

- **Qwen 3.5/3.6 dominance**: Over 40% of the trending list are derivatives of the Qwen family (Qwythos, ThinkingCap, uncensored MoE variants, etc.). Qwen has become the de facto base for vision‑language fine‑tuning, especially for “uncensored” or “reasoning” editions.

- **MoE models gain critical mass**: GLM‑5.2 (4k likes), HauhauCS Qwen3.6 MoE, and InternScience Agents‑A1 all use mixture‑of‑experts. The community increasingly values models that trade total parameter count for active‑parameter efficiency, and quantizations like colibri‑int4 are specifically optimized for MoE expert streaming.

- **Extreme quantization (1‑bit and ternary) moves from experiment to deployment**: prism‑ml’s Bonsai series has accumulated over 570k downloads. Ternary (2‑bit) is a first on Hugging Face, and the simultaneous release of GGUF and MLX formats signals a multi‑platform push. This is driven by the need to run 27B+ models on consumer hardware.

- **Agentic & coding specialization is resilient**: Beyond general chatbots, models like **gemma‑4‑12B‑agentic** (501k downloads) and **needle** (function‑calling) show that the community is hungry for models that can use tools, execute code, and operate in terminal environments. This mirrors a broader industry shift toward “agent‑ready” LLMs.

- **Vision‑language is now the default**: Among the top 10 most‑downloaded models, 6 are image‑text‑to‑text. The multimodal pipeline is no longer a niche – it has become the primary interface for both reasoning and creative tasks.

- **Open‑weight remains vibrant**: No proprietary giants appear on this list. The ecosystem is driven by community quantizations (GGUF/MLX), fine‑tunes of open base models (Qwen, GLM, MiniCPM, Gemma), and new research releases (Inkling, Hy3). This reaffirms Hugging Face’s role as the hub for accessible, reproducible AI.

---

## Worth Exploring

1. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** – Despite only 4 downloads so far, its 824 likes indicate strong early interest. Inkling is a new multimodal model from a new team; worth studying its architecture and performance to see if it can become a serious alternative to Qwen‑based vision models.

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – The first ternary (2‑bit) quantization of a 27B model. It represents the bleeding edge of model compression. Testing its output quality vs. 1‑bit Bonsai will help the community understand the trade‑offs of ternary weights for real‑world chat.

3. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – The most‑liked model of the week, with a new MoE architecture (DSA inference) that hasn’t been widely explored in open‑weight circles. Its high likes despite “only” 513k downloads suggest the research community is closely watching its capabilities. A deep dive into its expert routing strategy could yield insights for future MoE designs.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*