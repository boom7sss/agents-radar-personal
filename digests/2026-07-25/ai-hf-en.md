# Hugging Face Trending Models Digest 2026-07-25

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-25 03:20 UTC

---

# Hugging Face Trending Models Digest – 2026-07-25

## Today’s Highlights

This week’s HF Hub is dominated by large-scale vision-language models, with **Google’s Gemma-4-31B-it** (12.6M downloads) and **Qwen’s Qwen3.6-35B-A3B** (6.5M downloads) leading the pack. The MoE-based **GLM-5.2** from Zhipu AI also surged to 4.4K likes, signaling strong community interest in efficient mixture-of-experts architectures. Concurrently, extreme quantization techniques are gaining traction: the **Bonsai** family (1‑bit and ternary) saw hundreds of thousands of downloads, while numerous uncensored fine-tunes of Qwen3.6 flooded the hub. A notable new niche is embodied AI, with openbmb’s **MiniCPM-RobotManip** and **RobotTrack** models highlighting the growing crossover between LLMs and robotics.

## Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** – poolside – 613 likes / 28,992 downloads – A dedicated code-centric language model from poolside, attracting developer interest for its specialized reasoning.
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** – upstage – 543 likes / 1,106 downloads – Upstage’s 250B‑parameter open‑weight LLM, benchmark‑competitive despite its smaller size relative to frontier models.
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** – Nanbeige – 373 likes / 8,169 downloads – A compact 3B model optimized for efficiency, trending as a lightweight alternative for edge deployment.
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – zai-org – 4,416 likes / 667,403 downloads – A Mixture‑of‑Experts architecture from Zhipu AI, gaining massive traction for its strong performance and 4.4K weekly likes.
- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** – Motif-Technologies – 185 likes / 2,108 downloads – A new embedding/feature‑extraction model designed for retrieval-augmented generation pipelines.
- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** – fdtn-ai – 150 likes / 4,266 downloads – A small 1B hybrid MoE model focused on security‑aware text generation, appealing to safety researchers.

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – baidu – 3,019 likes / 2,500,391 downloads – A state‑of‑the‑art OCR model from Baidu, versatile across document and scene text recognition.
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** – thinkingmachines – 1,547 likes / 27,883 downloads – A conversational vision‑language model with strong image‑to‑text reasoning, trending for its chat‑friendly interface.
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** – microsoft – 236 likes / 891 downloads – Microsoft’s diffusion‑based text‑to‑image model, capable of both generation and editing.
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – ATH-MaaS – 277 likes / 30,292 downloads – A Qwen3.5‑based OCR model optimized for high‑accuracy document parsing.
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** – moonshotai – 1,263 likes / 756,668 downloads – Kimi’s code‑focused vision‑language model, combining multimodal understanding with programming capabilities.
- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** – nvidia – 113 likes / 30,303 downloads – NVIDIA’s diffusion transformer for video generation, tailored for edge inference.
- **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** – baseten – 90 likes / 494 downloads – A quantized (NVFP4) vision variant of GLM-5.2, enabling multimodal inference on resource‑limited hardware.
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** – google – 3,360 likes / 12,629,921 downloads – Google’s latest 31B instruction‑tuned vision‑language model, dominating downloads with broad community adoption.
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** – Qwen – 2,504 likes / 6,460,680 downloads – The flagship Qwen3.6 MoE model with 35B activated parameters, setting a new standard for open‑weight multimodal performance.

### 🔧 Specialized Models (code, math, medical, embeddings, robotics, speech)

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** – openbmb – 173 likes / 559 downloads – A vision‑language‑action model for robotic manipulation, pioneering the integration of LLMs into physical tasks.
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** – Kwaipilot – 126 likes / 396 downloads – A code‑generation model built on Qwen3.5 MoE, trending among developers for its programming focus.
- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** – openbmb – 124 likes / 349 downloads – A companion model to RobotManip for visual object tracking in robotics environments.
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** – nvidia – 937 likes / 797,525 downloads – A low‑latency streaming ASR model (0.6B parameters) optimized for real‑time speech recognition.

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, AWQ, LoRA)

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** – DavidAU – 487 likes / 407,421 downloads – An uncensored GGUF fine‑tune of Qwen3.6‑27B, popular for role‑play and creative writing.
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – prism-ml – 1,007 likes / 595,415 downloads – A pioneering 2‑bit ternary quantization of a 27B model, enabling near‑lossless performance at extreme compression.
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – prism-ml – 632 likes / 2,028,115 downloads – The 1‑bit predecessor to Ternary‑Bonsai, achieving record‑low quantization with high community downloads.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – HauhauCS – 3,070 likes / 2,057,103 downloads – An uncensored, “aggressive” fine‑tune of the Qwen3.6 MoE, one of the most‑downloaded community variants.
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – conradlocke – 532 likes / 0 downloads – A LoRA for identity‑preserving image editing built on Krea‑2, trending despite zero downloads (likely newly uploaded).
- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** – unsloth – 171 likes / 57,536 downloads – Unsloth’s GGUF quantization of Laguna‑S‑2.1, making the code‑focused model accessible on consumer hardware.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – empero-ai – 2,455 likes / 1,906,539 downloads – A Qwen3.5‑based GGUF fine‑tune blending Claude‑style reasoning with “Mythos” storytelling, highly popular.
- **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** – poolside – 133 likes / 62,092 downloads – Official GGUF version of Laguna‑S‑2.1 by poolside, optimized for local deployment.
- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** – poolside – 130 likes / 89,186 downloads – NVIDIA FP4 quantization of Laguna‑S‑2.1, leveraging vLLM for fast inference on Blackwell GPUs.
- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – bottlecapai – 542 likes / 26,092 downloads – A “thinking‑style” fine‑tune of Qwen3.6‑27B, designed to encourage step‑by‑step reasoning.
- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)** – LuffyTheFox – 135 likes / 36,703 downloads – Another uncensored Qwen3.6 MoE GGUF, mixing Hermes and Genesis styles.

## Ecosystem Signal

The Qwen3.6 family is the clear epicenter of activity: the base model (6.4M downloads) and dozens of fine‑tunes/quantizations collectively dominate the trending list. This signals that the open‑weight, MoE‑based architecture has captured the community’s appetite for both performance and efficiency. Google’s Gemma‑4‑31B‑it, meanwhile, proves that proprietary‑trained models can still command massive adoption when released openly. On the compression frontier, 1‑bit and ternary quantization (Bonsai) are moving from research curiosities to production‑ready artifacts—the 2M downloads of Bonsai‑27B‑gguf suggest that extreme compression is becoming mainstream. Robotic vision‑language‑action models from openbmb (MiniCPM series) mark a nascent but growing trend: LLMs are increasingly being adapted for physical world interaction, with models gaining likes despite low download counts. Speech and OCR models (nemotron ASR, OvisOCR2, Unlimited‑OCR) also saw strong traction, highlighting that multimodal understanding beyond text‑to‑image remains a key demand.

## Worth Exploring

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – With 4,416 weekly likes and a novel MoE design, this model is both a strong chat alternative and an architecture worth studying for its Mixture‑of‑Experts routing.
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – The 1‑bit quantization achieving 2M downloads is a testament to its viability; exploring it reveals how far compression can go without catastrophic quality loss.
- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** – This vision‑language‑action model represents the bleeding edge of LLM‑based robotics, offering a concrete entry point for embodied AI experimentation.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*