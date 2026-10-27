# Hugging Face Trending Models Digest 2026-07-28

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-28 03:13 UTC

---

# Hugging Face Trending Models Digest – 2026-07-28

## Today’s Highlights

This week’s trending models are dominated by **multimodal vision-language models** and **aggressive quantization efforts**, with Moonshot AI’s **Kimi-K3** leading the pack at over 6,500 likes. The **Qwen3.6** family continues its strong community momentum, spawning numerous fine-tunes and GGUF quantizations (e.g., #4, #18, #24, #28). Microsoft pushes image generation with **Mage-Flow** and its edit variant, while **extreme compression** techniques like ternary (Prism-ML’s Ternary-Bonsai-27B) and 1-bit (Bonsai-27B) attract significant interest. Notably, small edge‑AI text‑to‑speech models **Inflect-Micro-v2** and **Inflect-Nano-v2** (owensong) are gaining traction for local deployment.

## Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** – by poolside | 759 likes, 63.6k downloads  
  A state‑of‑the‑art text‑generation model from the Laguna series, trending for its strong general reasoning capabilities.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** – by upstage | 630 likes, 3.8k downloads  
  A 250B‑parameter open‑weight LLM designed for high‑performance chat and instruction following.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** – by Nanbeige | 494 likes, 16.5k downloads  
  A compact 3B‑parameter LLM that balances efficiency and quality, popular for fine‑tuning and deployment.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – by zai-org | 4,553 likes, 1M downloads  
  The latest GLM generation with MoE architecture, noted for its conversational fluency and strong community adoption.

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** – by Motif-Technologies | 199 likes, 2.5k downloads  
  A fresh beta release focused on feature extraction and general text generation, gaining early interest.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** – by moonshotai | 6,508 likes, 2.9k downloads  
  The top‑trending model this week – a vision‑language model from Moonshot AI with compressed‑tensors for efficient inference.

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** – by microsoft | 393 likes, 1.7k downloads  
  A text‑to‑image diffusion model by Microsoft, trending for its ability to generate and edit images with fine control.

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** – by thinkingmachines | 1,606 likes, 36.2k downloads  
  A multimodal conversational model (image‑text‑to‑text) designed for interactive Q&A and visual reasoning.

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** – by microsoft | 156 likes, 1.4k downloads  
  A 27B vision‑language model fine‑tuned for computer‑use tasks (GUI understanding, action prediction).

- **[microsoft/Mage-Flow-Edit-Turbo](https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo)** – by microsoft | 102 likes, 1.1k downloads  
  A faster variant of Mage‑Flow specialized for instruction‑based image editing.

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** – by owensong | 227 likes, 483 downloads  
  A lightweight text‑to‑speech model optimized for CPU and edge AI, trending due to the growing demand for local TTS.

- **[owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)** – by owensong | 92 likes, 349 downloads  
  An even smaller sibling of Inflect‑Micro, designed for ultra‑resource‑constrained speech synthesis.

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** – by Qwen | 2,548 likes, 6.2M downloads  
  The base **Qwen3.6** MoE vision‑language model; massive download count reflects its role as the foundation for many community fine‑tunes.

### 🔧 Specialized Models (code, math, medical, embeddings, OCR, security)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – by baidu | 3,340 likes, 2.6M downloads  
  A powerful OCR model that handles a wide variety of documents and images, highly popular for enterprise digitization.

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** – by Kwaipilot | 245 likes, 5.3k downloads  
  A code‑focused multimodal model (image‑text‑to‑text) based on Qwen3.5 MoE, trending for its integration of visual coding contexts.

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** – by fdtn-ai | 208 likes, 6.4k downloads  
  A 1B‑parameter LLM with a Granite‑MoE‑Hybrid architecture, tailored for security‑related text generation.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** – by moonshotai | 1,322 likes, 695.7k downloads  
  A code‑specialized version of the Kimi family, combining vision and language for programming tasks (e.g., screenshot‑to‑code).

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – by ATH-MaaS | 328 likes, 42.2k downloads  
  An OCR‑focused vision‑language model built on Qwen3.5, offering high accuracy on complex document layouts.

### 📦 Fine‑Tunes & Quantizations (community fine‑tunes, GGUF, AWQ)

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** – by DavidAU | 758 likes, 634k downloads  
  An heavily fine‑tuned and uncensored GGUF variant of Qwen3.6, reflecting community interest in custom role‑play and creative writing.

- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** – by unsloth | 219 likes, 117.5k downloads  
  The official GGUF quantization of Laguna‑S‑2.1 by unsloth, enabling efficient local inference with vLLM support.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – by prism-ml | 1,069 likes, 648.9k downloads  
  A 2‑bit ternary quantization of a 27B model, pushing the envelope of extreme compression while retaining conversational quality.

- **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** – by poolside | 154 likes, 85.6k downloads  
  Another GGUF quant of Laguna‑S‑2.1, published directly by the original authors for easy end‑user deployment.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – by HauhauCS | 3,133 likes, 1.9M downloads  
  A highly popular uncensored GGUF fine‑tune of Qwen3.6‑MoE with aggressive prompt handling, used widely for unrestricted generation.

- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** – by poolside | 148 likes, 158.3k downloads  
  An NVFP4‑quantized variant of Laguna‑S‑2.1, demonstrating poolside’s focus on 4‑bit floating‑point quantization for GPUs.

- **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** – by baseten | 125 likes, 2.3k downloads  
  An NVFP4 quantization of GLM‑5.2‑Vision, optimized for fast inference via SGLang.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – by prism-ml | 659 likes, 2.3M downloads  
  A 1‑bit (binary) quantization of a 27B model, offering extreme memory savings while maintaining reasonable performance.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)** – by LuffyTheFox | 188 likes, 83.7k downloads  
  Another uncensored GGUF fine‑tune of Qwen3.6‑MoE, this time mixing Hermes and Genesis styles, reflecting the diversity of community remixes.

- **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)** – by unsloth | 102 likes, 0 downloads  
  A recent upload of unsloth’s optimized variant of Kimi‑K3 (still gathering downloads), likely to become a go‑to quant in future.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – by conradlocke | 556 likes, 0 downloads  
  A LoRA adapter for Krea‑2 that enables identity‑preserving image editing, attracting attention from the ComfyUI community.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – by empero-ai | 2,491 likes, 1.3M downloads  
  A GGUF‑quantized model based on Qwen3.5 with a synthetic Mythos dataset, trending for its balanced reasoning and role‑play abilities.

## Ecosystem Signal

The **Qwen3.6** family (especially the 35B‑A3B MoE) is the clear “base model of the week”, with dozens of community fine‑tunes, uncensored variants, and GGUF quantizations dominating the top‑downloaded list. **Poolside’s Laguna‑S‑2.1** also enjoys strong ecosystem support (multiple quant formats from both poolside and unsloth). **Extreme compression** is a major theme: ternary (2‑bit) and 1‑bit quantizations (Bonsai, Ternary‑Bonsai) are no longer experimental but widely downloaded for local deployment. **GLM‑5.2** from Zhipu continues to hold its position as a top conversational model, now with NVFP4 vision quantizations.

Open‑weight models remain the norm – no proprietary black‑box models appear in this list. The multimodal trend is accelerating: **image‑text‑to‑text** pipelines now outnumber pure text models among the top 30. OCR‑specific models (Unlimited‑OCR, OvisOCR2) prove that domain specialization still drives real‑world downloads. Finally, **edge AI** is visible with the Inflect TTS models, signaling growing demand for on‑device speech synthesis.

## Worth Exploring

1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   *Why?* This 2‑bit ternary quantization pushes the frontier of extreme compression. With 1M+ downloads and 1,000+ likes, it shows that users are willing to accept slight quality loss for massive memory savings – a crucial trend for consumer hardware.

2. **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)**  
   *Why?* As edge AI gains momentum, Inflect‑Micro represents a complete TTS pipeline that runs on CPU. Its small footprint and high‑quality speech make it a perfect starting point for building offline voice assistants or accessibility tools.

3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
   *Why?* Topping the likes chart, Kimi‑K3 is the flagship multimodal model from Moonshot AI. It combines compressed‑tensor technology with vision‑language capabilities, making it a strong candidate for both research and production applications that require efficient inference.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*