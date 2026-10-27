# Hugging Face Trending Models Digest 2026-07-16

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-16 03:17 UTC

---

# 🧠 Hugging Face Trending Models Digest — 2026-07-16

## 1. Today's Highlights

The model ecosystem continues its rapid shift toward **massive MoE architectures** and **extreme compression**. Zhipu AI’s **GLM-5.2** (4K likes) and Tencent’s **Hy3** (801 likes) represent two major open-weight MoE releases, while **Qwen 3.6** variants dominate community fine‑tuning and quantization – the uncensored MoE vision variant alone has 2.4M downloads. **Multimodal OCR** is a breakout trend: Baidu’s **Unlimited-OCR** (2K likes, 1.7M downloads) proves image‑to‑text pipelines are now production‑ready. On the generation side, **lingbot** world models and **LTX** identity‑preserving video LoRAs hint at a maturing video generation stack. Quantization innovation is also front and center with **ternary (2‑bit)** and **1‑bit** Bonsai models, plus NVIDIA’s new **Nemotron‑Labs‑Audex‑30B‑A3B** entering the MoE race.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – Zhipu AI’s 52‑B‑parameter MoE model, trending for its DSA architecture and strong conversational performance; 4,003 likes, 489K downloads.
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** – Tencent’s latest Hunyuan‑family language model (likely 30B+ scale), gaining traction for its open‑weight release and efficient architecture; 801 likes, 10K downloads.
- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** – NVIDIA’s new 30B‑A3B MoE model, designed for agent‑like reasoning and tool use; 156 likes, 1.3K downloads.

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** – A unified multimodal model handling both image‑to‑text and audio‑to‑text, pulling 412 likes despite zero downloads (likely first release); trending for its “inkling_mm_model” architecture.
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – A vision‑language fine‑tune of Qwen 3.6, optimized for reasoning; 367 likes, 6.2K downloads.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** – An audio‑to‑text model that simultaneously transcribes and performs speaker diarization, useful for meeting/analysis pipelines; 215 likes, 65K downloads.
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** – A Qwen‑3.5‑based MoE multimodal LLM optimized for agentic tasks (image‑text‑to‑text); 556 likes, 30K downloads.
- **[empero-ai/Qwythos-9B-v2](https://huggingface.co/empero-ai/Qwythos-9B-v2)** – Base version of the Qwythos vision‑language model (non‑quantized), a strong open‑source alternative to Claude‑style reasoning; 123 likes, 4K downloads.
- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** – A new diffusion‑based world model for video generation (region‑specific, Apache‑2.0); 135 likes, early discovery.
- **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** – A 14B causal image‑to‑video world model, achieving fast inference for interactive environments; 100 likes.
- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** – A 30B‑A3B MoE video diffusion model, leveraging mixture‑of‑experts for efficient high‑quality video generation; 111 likes, 700 downloads.

### 🔧 Specialized Models (OCR, code, function‑calling, LoRAs, utilities)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – A state‑of‑the‑art OCR model that can handle unlimited‑length documents, witnessing explosive adoption (2K likes, 1.7M downloads).
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – A Qwen‑3.5‑based OCR fine‑tune offering high accuracy on dense text; 119 likes, 745 downloads.
- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** – A novel JAX‑based model for tool‑use and function‑calling, designed as a lightweight alternative to GPT‑4 function calls; 236 likes, 571 downloads.
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – A LoRA for identity‑preserving image editing using Krea‑2, enabling face‑swap and consistent character editing; 307 likes.
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** – A LoRA for LTX Video that maintains face identity across generated video frames; 154 likes.
- **[mgwr/M87](https://huggingface.co/mgwr/M87)** – A LoRA for Krea‑2 Turbo to enhance text‑to‑image generation; 127 likes, 2.4K downloads.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** – A community resource correcting chat‑template issues in Qwen models, essential for MLX and deployment; 918 likes.

### 📦 Fine‑tunes & Quantizations (GGUF, AWQ, int4, 1‑bit, ternary)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – First public ternary (2‑bit) quantization of a 27B model, enabling extreme memory savings; 478 likes, 23 downloads.
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – A 1‑bit (binary/ternary hybrid) GGUF of the same Bonsai family; 272 likes, 513 downloads.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – A GGUF quantization of the Qwythos vision model fine‑tuned on Claude‑style data, incredibly popular (2.2K likes, 2M downloads).
- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** – Updated GGUF of the v2 release of Qwythos, now with improved reasoning; 144 likes, 70K downloads.
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** – A 1.5B‑class thinking model based on MiniCPM5, quantized to GGUF for edge deployment; 250 likes, 89K downloads.
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** – Non‑GGUF version of the same fine‑tune, attracting 129 likes.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – An uncensored, aggressive fine‑tune of Qwen 3.6 35B‑A3B MoE, quantized to GGUF; 2.8K likes, 2.4M downloads.
- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** – Community GGUF quantization of Tencent’s Hy3; 109 likes.
- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** – INT4 quantization of GLM-5.2 using the Colibri method for CPU inference; 112 likes, 2.2K downloads.
- **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** – Unsloth’s NVFP4 quantization of Qwen 3.6, offering high throughput at reduced precision; 208 likes, 1.6M downloads.
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** – GGUF of the Ornith‑1.0 35B model, a strong all‑purpose LLM; 895 likes, 1.5M downloads.
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** – A GGUF of a Gemma‑4‑based agentic coding model, designed for terminal tasks and tool orchestration; 1.2K likes, 468K downloads.

## 3. Ecosystem Signal

The ecosystem is being reshaped by **three converging forces**:  
**MoE at scale** — GLM‑5.2, Hy3, Qwen 3.6‑A3B, Agents‑A1, and Nemotron all leverage mixture‑of‑experts to deliver large effective capacity with manageable compute. This trend signals that the industry is moving past dense models for frontier applications.  
**Extreme quantization goes mainstream** — Ternary (2‑bit) and 1‑bit models (Bonsai) and NVFP4 (Unsloth) prove that sub‑4‑bit inference is viable, enabling local deployment of 27B+ models. Community demand for GGUF variants is immense, as shown by downloads in the millions.  
**Multimodal convergence** — Models are rapidly absorbing audio, image, and video capabilities. OCR (Unlimited‑OCR, OvisOCR2) and world models (lingbot) are maturing into drop‑in tools. The open‑weight ecosystem is outpacing proprietary alternatives in breadth, with Baidu, Tencent, Zhipu, and NVIDIA all releasing competitive, permissively licensed models.  
**Agentic and reasoning fine‑tunes** dominate the customization space, with uncensored Qwen variants and GGUF’d coding agents (Gemma‑4) seeing massive adoption. The community is actively shaping base models for real‑world tool‑use and role‑playing.

## 4. Worth Exploring

1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   The first ternary (2‑bit) model of this scale is a technical milestone. Studying it reveals how extreme compression (≈20‑30% of original size) affects quality, latency, and the viability of local 27B inference on commodity hardware.

2. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
   A fresh approach to function‑calling – built on JAX and designed for speed. It represents a growing class of models that optimize for tool orchestration rather than conversational fluency, and could become the backbone of agentic systems.

3. **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)**  
   A diffusion‑based world model for video generation under Apache‑2.0. Early‑stage but significant: if it converges, it could democratize interactive video simulation, with applications from gaming to robotics. Worth watching for architecture and release updates.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*