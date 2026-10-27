# Hugging Face Trending Models Digest 2026-07-29

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-29 03:17 UTC

---

# 🚀 Hugging Face Trending Models Digest — 2026-07-29

## 1. Today's Highlights

This week’s trending landscape is dominated by large multimodal models, with **moonshotai/Kimi-K3** soaring to 8k+ likes and massive download numbers for GLM-5.2 and Qwen3.6 variants. A wave of community fine-tunes and quantizations — especially GGUF, NVFP4, and even ternary 1-bit formats — surrounds flagship models like Qwen3.6-35B-A3B and Laguna-S‑2.1, reflecting strong grassroots interest in efficient deployment. Specialized OCR models (Baidu Unlimited‑OCR, OvisOCR2) and code‑focused models (Kimi‑K2.7‑Code, KAT‑Coder) also see high engagement, while Microsoft pushes forward with image generation (Mage‑Flow) and computer‑use agents (Fara1.5‑27B). The ecosystem is clearly shifting toward compact, quantized, and task‑specific variants of already powerful open‑weight backbones.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction‑tuned)

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**  
  Author: poolside | Likes: 802 | Downloads: 67,286  
  A large, high‑performance text‑generation model from poolside, trending as the base for multiple quantization variants.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**  
  Author: upstage | Likes: 648 | Downloads: 4,804  
  Upstage’s 250B‑parameter open‑weight LLM, one of the largest publicly available, attracting enterprise and research interest.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**  
  Author: Nanbeige | Likes: 530 | Downloads: 18,933  
  A compact 3B chat model from Nanbeige, gaining traction for efficient on‑device conversational AI.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  Author: zai-org | Likes: 4,608 | Downloads: 1,267,198  
  A conversational GLM MoE model topping 4.6k likes, widely adopted for its strong few‑shot capabilities and MoE efficiency.

### 🎨 Multimodal & Generation (image, video, audio, text‑to‑X)

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
  Author: moonshotai | Likes: 8,090 | Downloads: 99,214  
  The week’s highest‑liked model — a large multimodal (image‑text‑to‑text) model from Moonshot AI with compressed‑tensor support.

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
  Author: thinkingmachines | Likes: 1,626 | Downloads: 39,052  
  A new vision‑language conversational model from Thinking Machines, noted for its architectural novelty and strong multimodal benchmarks.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  Author: Qwen | Likes: 2,572 | Downloads: 6,158,876  
  Qwen’s flagship multimodal MoE model (35B total, 3B active) with massive downloads, the base for numerous community fine‑tunes.

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)**  
  Author: microsoft | Likes: 179 | Downloads: 1,543  
  A 27B multimodal model focused on computer‑use agents, drawing attention for its GUI‑grounded reasoning.

- **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)**  
  Author: baseten | Likes: 131 | Downloads: 2,756  
  A quantized (NVFP4) vision variant of GLM‑5.2, enabling efficient multimodal inference on NVIDIA hardware.

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**  
  Author: microsoft | Likes: 418 | Downloads: 2,007  
  A text‑to‑image diffusion model pushing image generation quality, with an editing turbo variant also trending.

- **[microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo)**  
  Author: microsoft | Likes: 109 | Downloads: 1,260  
  An instruction‑based image‑editing diffusion model, optimized for fast, high‑quality edits.

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**  
  Author: owensong | Likes: 270 | Downloads: 645  
  A lightweight text‑to‑speech model designed for local/edge deployment, with a larger Nano variant also available.

- **[owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)**  
  Author: owensong | Likes: 105 | Downloads: 434  
  The bigger sibling of Inflect‑Micro, delivering higher‑quality speech synthesis while still being CPU‑friendly.

### 🔧 Specialized Models (code, math, OCR, security, embeddings)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  Author: baidu | Likes: 3,425 | Downloads: 2,694,935  
  Baidu’s unlimited‑scope OCR model (image‑text‑to‑text) with nearly 2.7M downloads, a go‑to for document understanding.

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**  
  Author: Kwaipilot | Likes: 289 | Downloads: 6,275  
  A code‑specialized MoE model built on Qwen3.5, trending for its strong programming task performance.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**  
  Author: moonshotai | Likes: 1,332 | Downloads: 681,111  
  Moonshot’s code‑focused multimodal model (Kimi family), widely used for code generation and comprehension.

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)**  
  Author: fdtn-ai | Likes: 223 | Downloads: 7,666  
  A 1B hybrid MoE model specialized for security tasks, drawing niche interest from the safety and compliance community.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
  Author: ATH-MaaS | Likes: 340 | Downloads: 47,129  
  A Qwen3.5‑based OCR model that rivals Baidu’s Unlimited‑OCR for accuracy on complex layouts.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**  
  Author: conradlocke | Likes: 565 | Downloads: 0  
  A LoRA adapter for identity‑preserving image editing using Krea‑2, attracting creative AI developers.

### 📦 Fine‑tunes & Quantizations (community fine‑tunes, GGUF, NVFP4, ternary)

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**  
  Author: DavidAU | Likes: 858 | Downloads: 736,692  
  A heavily fine‑tuned and GGUF‑quantized Qwen3.6 variant (uncensored) for users seeking maximally unconstrained outputs.

- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**  
  Author: unsloth | Likes: 232 | Downloads: 129,601  
  A popular GGUF quantized version of Laguna‑S‑2.1, optimized for vLLM and local inference.

- **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)**  
  Author: unsloth | Likes: 149 | Downloads: 410  
  A compressed‑tensor quantized variant of Kimi‑K3 for reduced memory footprint.

- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)**  
  Author: unsloth | Likes: 92 | Downloads: 0  
  The GGUF‑format quantization of Kimi‑K3, brand new and not yet downloaded.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  Author: HauhauCS | Likes: 3,158 | Downloads: 1,855,505  
  A massive uncensored fine‑tune of Qwen3.6‑35B (GGUF), one of the most downloaded community models this week.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)**  
  Author: LuffyTheFox | Likes: 198 | Downloads: 99,660  
  Another uncensored Qwen3.6‑based GGUF fine‑tune, blending Hermes‑style instruction tuning.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  Author: prism-ml | Likes: 1,085 | Downloads: 665,427  
  A pioneering 2‑bit ternary quantization of a 27B model, drawing attention for extreme compression while retaining quality.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  Author: prism-ml | Likes: 680 | Downloads: 2,339,098  
  An even more aggressive 1‑bit quantization of the same 27B architecture, with over 2.3M downloads.

- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)**  
  Author: poolside | Likes: 153 | Downloads: 180,545  
  An NVFP4 (4‑bit) quantization of Laguna‑S‑2.1 from the original team, enabling high‑throughput inference.

- **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)**  
  Author: poolside | Likes: 160 | Downloads: 90,106  
  The official GGUF quantized release of Laguna‑S‑2.1, optimized for llama.cpp and edge deployments.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  Author: empero‑ai | Likes: 2,503 | Downloads: 1,262,662  
  A 9B GGUF fine‑tune combining Qwen3.5 with reasoning enhancements (Claude‑Mythos style), extremely popular.

## 3. Ecosystem Signal

This week’s top models reveal several clear trends:

- **Multimodal dominance** – The highest‑liked model (Kimi‑K3) and many of the top‑downloaded models (Qwen3.6, GLM‑5.2 Vision) are image‑text‑to‑text. Open‑weight multimodal models from Chinese AI labs (Moonshot, Zhipu AI, Qwen) lead the pack, while Microsoft’s image generation (Mage‑Flow) and computer‑use (Fara1.5) show growing enterprise adoption.
- **Quantization frenzy** – Over a third of the listed models are quantized variants (GGUF, NVFP4, ternary, 1‑bit). The community is obsessed with pushing models to run on consumer hardware. Prism‑ML’s ternary and 1‑bit Bonsai quantizations (665k and 2.3M downloads) highlight a strong appetite for extreme compression.
- **Uncensored fine‑tuning** – Multiple uncensored Qwen3.6 variants (HauhauCS, LuffyTheFox, DavidAU) amass millions of downloads, indicating a persistent demand for models with minimal content filters.
- **Specialized OCR and code** – Baidu’s Unlimited‑OCR (2.7M downloads) and Moonshot’s Kimi‑K2.7‑Code (681k downloads) show that task‑specific multimodal models capture significant niche usage.
- **Edge AI maturation** – Inflect‑Micro/Nano TTS models (owensong) and the prevalence of GGUF quantizations underscore the shift toward local, low‑resource inference.

The ecosystem is increasingly **open‑weight driven**, with few proprietary releases; almost all models are publicly accessible. Community activity (fine‑tuning, quantizing) is quantitatively outpacing base model releases, a sign of a maturing model reuse economy.

## 4. Worth Exploring

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** – The week’s top model by likes (8,090) with compressed‑tensor support. Its strong multimodal performance and active community make it essential for anyone tracking state‑of‑the‑art vision‑language models.

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – A breakthrough in extreme 2‑bit ternary quantization that maintains surprising quality (1,085 likes). Worth studying for its compression methodology and practical applicability to running large models on limited hardware.

3. **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** – A fast, local TTS model optimized for CPU inference with 270 likes. Its balance of quality and efficiency makes it a prime candidate for real‑time speech applications on edge devices.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*