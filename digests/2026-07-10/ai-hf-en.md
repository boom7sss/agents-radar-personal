# Hugging Face Trending Models Digest 2026-07-10

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-10 15:58 UTC

---

# Hugging Face Trending Models Digest — 2026-07-10

## Today’s Highlights

This week’s trending list is dominated by **Mixture-of-Experts (MoE) LLMs** from Chinese labs (Zhipu’s GLM-5.2, Tencent’s Hy3, Meituan’s LongCat-2.0) and **multimodal models** with strong downstream deployments. **NVIDIA** continues its push into quantized inference with NVFP4 variants (Qwen3.6, Nemotron Puzzle) and a high‑likes vision model (LocateAnything‑3B). The community quantization scene is as active as ever, with **GGUF versions** of Qwen3.6, DeepSeek‑V4, and fine‑tuned mythos‑style models racking up millions of downloads. Notably, **Baidu’s Unlimited‑OCR** and **Krea’s text‑to‑image ecosystem** (Turbo, depth controlnets, identity LoRAs) signal that multimodal content generation remains a hot priority.

## Trending Models

### 🧠 Language Models
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** – Tencent, 646 likes, 6,923 downloads. Hunyuan‑based MoE text‑generation model from Tencent, likely a successor to the Hy2 line.
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – zai-org, 3,763 likes, 392,655 downloads. Latest conversational MoE from Zhipu AI, attracting high community interest for its scale and instruction‑tuned performance.
- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** – AliesTaha, 197 likes, 4,875 downloads. A Qwen3‑based instruct model specialized in narrative generation, trending for structured creative writing.
- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** – meituan-longcat, 169 likes, 1,308 downloads. Meituan’s long‑context conversational LLM, successor to LongCat line.
- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** – mistralai, 182 likes, 315 downloads. Massive 119B‑parameter MoE base model from Mistral AI, optimized for vLLM deployment.
- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** – deepseek-ai, 463 likes, 33,088 downloads. Fourth generation DeepSeek model with improved reasoning and MoE efficiency, accompanied by a technical report (arxiv:2606.19348).
- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** – nvidia, 91 likes, 576 downloads. A 30B‑parameter text MoE model from NVIDIA’s Nemotron Labs series, likely focused on agentic or puzzle solving.

### 🎨 Multimodal & Generation
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** – InternScience, 459 likes, 25,772 downloads. MoE vision‑language model based on Qwen3.5, designed for agent tasks.
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – baidu, 1,914 likes, 1,319,683 downloads. Powerful OCR model from Baidu, able to handle unlimited text in images while preserving layout.
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – bottlecapai, 204 likes, 3,699 downloads. Vision‑language model built on Qwen3.6, emphasizing chain‑of‑thought reasoning.
- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** – open-gigaai, 118 likes, 0 downloads. Apache‑2.0 licensed diffusion model for world generation (diffusers).
- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – nvidia, 2,694 likes, 1,456,269 downloads. Highly precise 3B‑param visual grounding model that localizes any object described by text, trending for zero‑shot detection.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** – empero-ai, 757 likes, 184,315 downloads. The base model behind the popular GGUF variant, combining Qwen3.5 with Mythos‑style fine‑tuning for creative and role‑playing use.
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** – OpenMOSS-Team, 92 likes, 5,919 downloads. Audio‑to‑text model that transcribes and diarizes multi‑speaker conversations.
- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** – krea, 575 likes, 164,525 downloads. Faster version of Krea-2‑Raw text‑to‑image diffusion model, enabling real‑time generation.

### 🔧 Specialized Models
- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** – google, 341 likes, 18,626 downloads. Foundation model for tabular data classification and regression, demonstrating zero‑shot transfer on structured benchmarks.
- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** – froggeric, 831 likes, 0 downloads. A non‑model utility that patches incorrect chat templates for Qwen and Qwen3.5, widely shared to fix compatibility issues.
- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** – SupraLabs, 79 likes, 1,160 downloads. A lightweight router model that selects the best LLM or expert for a given query, enabling dynamic model selection.

### 📦 Fine‑tunes & Quantizations
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – empero-ai, 1,953 likes, 1,909,705 downloads. GGUF quantized version of the popular Qwythos role‑playing model, heavily downloaded for local inference via llama.cpp.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – HauhauCS, 2,614 likes, 2,660,170 downloads. Uncensored, aggressively fine‑tuned GGUF variant of Qwen3.6 MoE (35B active 3B) with vision support.
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – conradlocke, 156 likes, 0 downloads. LoRA for Krea-2 that edits a subject’s identity while preserving scene context, part of the growing Krea-2 adapter ecosystem.
- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** – deepreinforce-ai, 834 likes, 1,085,554 downloads. MIT‑licensed GGUF of a 35B LLM, popular for its permissive license and endpoints compatibility.
- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** – yuxinlu1, 1,130 likes, 427,668 downloads. Agentic coding fine‑tune of Gemma‑4‑12B in GGUF, designed for terminal‑based agent tasks.
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** – GnLOLot, 153 likes, 9,029 downloads. Tiny 1B thinking model distilled from Claude Opus, quantized for low‑resource devices.
- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** – unsloth, 121 likes, 31,895 downloads. Unslo’th’s fast GGUF quantization of DeepSeek‑V4, optimized for speed and memory efficiency.
- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** – nvidia, 335 likes, 787,748 downloads. NVIDIA Model Optimizer‑quantized version of Qwen3.6 in 4‑bit floating point (NVFP4), enabling efficient GPU inference.
- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** – nvidia, 97 likes, 23,404 downloads. NVFP4 quantized 75B‑parameter puzzle‑solving MoE from the Nemotron Labs series.
- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** – unsloth, 1,032 likes, 2,895,457 downloads. Most downloaded model this week – GGUF of Qwen3.6 with Multi‑Token Prediction (MTP) for faster vision‑language inference.
- **[Patil/Krea-2-depth-controlnet](https://huggingface.co/Patil/Krea-2-depth-controlnet)** – Patil, 87 likes, 0 downloads. ControlNet adapter for Krea-2 that adds depth‑aware conditioning to the image generation pipeline.
- **[eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B)** – eric-venti-seeds, 126 likes, 0 downloads. LoRA for controlling lighting direction in Flux2Klein9B image‑to‑image generation.

## Ecosystem Signal

The top-30 list reveals several key trends:

- **Chinese Labs Going All‑in on MoE**: A majority of the pure LLMs (GLM-5.2, Hy3, LongCat-2.0, DeepSeek-V4, Nemotron variants) use Mixture‑of‑Experts architectures. This reflects a broader shift toward scaling inference efficiency without exploding parameter counts. Zhipu’s GLM-5.2 leads in likes, while DeepSeek-V4 receives strong research backing (arxiv paper). Tencent and Meituan are also investing heavily, signaling a “MoE race” among Chinese AI companies.

- **NVIDIA’s Quantization Offensive**: NVIDIA is not only releasing base models (LocateAnything-3B, Audex) but also providing ready‑to‑use quantized versions (NVFP4) of its own and third‑party models (Qwen3.6). This lowers the barrier for deploying large models on NVIDIA hardware, and the high download counts indicate strong enterprise adoption.

- **Community Quantization Is Thriving**: GGUF variants continue to dominate downloads, with **unsloth/Qwen3.6-27B-MTP-GGUF** (2.9M), **HauhauCS uncensored** (2.7M), and **Qwythos GGUF** (1.9M) leading. The presence of very small models (MiniCPM5-1B) shows that local, low‑resource inference remains a priority. The “mythos” and “fable” fine‑tune naming patterns (Claude‑Mythos, Opus‑Fable) suggest a community‑driven “data laundering” pipeline using outputs from proprietary models.

- **Multimodal and OCR Momentum**: Baidu’s Unlimited‑OCR (1.3M downloads) and NVIDIA’s LocateAnything‑3B (1.5M) prove that vision‑language tasks with precise grounding and text extraction are high‑demand. Krea‑2’s ecosystem – base model, Turbo version, LoRAs, ControlNets – mirrors the stable‑diffusion expansion pattern we saw earlier.

- **Specialized Utilities Gain Traction**: Google’s tabular foundation model and the chat‑template fix utility show that not all trending models are large LLMs – small, practical tools can gather hundreds of likes.

## Worth Exploring

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – With 2.7K likes and 1.5M downloads, this is the highest‑liked vision model. Its ability to zero‑shot locate any object in an image makes it ideal for robotics, document analysis, and image retrieval pipelines. A must‑try for computer vision practitioners.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – As the most‑liked overall model (3.8K), GLM-5.2 represents the latest from one of China’s leading labs. It’s worth studying for its MoE architecture, instruction‑following capabilities, and its role in the competitive landscape against Llama and Qwen.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** – Though not a model, this utility has 831 likes and zero downloads (because it’s used as a library, not a model). It elegantly solves a common pain point when using Qwen models with different frameworks. Check it if you’ve ever fought with chat templates in Hugging Face Transformers.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*