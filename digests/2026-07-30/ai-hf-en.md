# Hugging Face Trending Models Digest 2026-07-30

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-30 02:49 UTC

---

Here is the **Hugging Face Trending Models Digest** for July 30, 2026.

---

## 1. Today's Highlights

The biggest event this week is the explosive debut of **Moonshot AI’s Kimi-K3**, which swept to the top with over 8.6K likes, signaling a major shift toward compressed, multimodal, and vision-capable models. **Baidu’s Unlimited-OCR** also saw exceptionally strong traction with 2.7M downloads, cementing the growing demand for practical, enterprise-grade OCR tools. Meanwhile, the ecosystem continues to fragment around open-weight giants like **GLM-5.2** and **Qwen 3.6**, with a surge of community fine-tunes—especially uncensored variants—and extreme quantization (1-bit, 2-bit) model families like **Bonsai** and **Ternary-Bonsai**. The week also marks a notable uptick in both **text-to-speech** and **ASR** edge models from Microsoft and owensong, pointing to a maturing inference-on-device trend.

## 2. Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** | moonshotai | 8,685 likes, 99k downloads — A state-of-the-art compressed multimodal model dominating the charts for its blend of vision and text capabilities at unusual efficiency.
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | zai-org | 4,644 likes, 1.2M downloads — A conversational MoE model from the GLM lineage, trending for its strong performance and high download volume.
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** | upstage | 698 likes, 4.8k downloads — A massive 250B open-weight text-generation model from Upstage, gaining traction among enterprise and research teams.
- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** | poolside | 827 likes, 67k downloads — A text-generation model targeting code and reasoning tasks, rising due to its architecture for broader general use cases.
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** | Nanbeige | 556 likes, 18k downloads — A compact 3B LLM optimized for efficient inference, popular for on-device and lightweight deployments.
- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** | fdtn-ai | 233 likes, 7.6k downloads — A security-focused 1B GraniteMoEHybrid model, gaining attention for its safe-by-design fine-tuning.
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** | Kwaipilot | 319 likes, 6.2k downloads — A code-specialized Qwen3.5 MoE variant, trending among developers for its strong coding performance.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | baidu | 3,517 likes, 2.7M downloads — A top-performing OCR model from Baidu, trending massively for its unlimited pipeline approach to document and scene text extraction.
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | thinkingmachines | 1,641 likes, 39k downloads — A conversational multimodal model supporting image-text tasks, rising for its polished interaction design.
- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** | microsoft | 203 likes, 1.5k downloads — A 27B computer-use multimodal model from Microsoft, notable for its practical GUI agent capabilities.
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** | moonshotai | 1,336 likes, 681k downloads — A code-focused variant of the Kimi family, trending for high-download volume among developer tools.
- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** | owensong | 290 likes, 645 downloads — A lightweight, CPU-friendly TTS model designed for edge AI and local deployment.
- **[owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)** | owensong | 112 likes, 434 downloads — The Nano sibling of Inflect-Micro, pushing even smaller footprints for speech synthesis on edge devices.
- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** | microsoft | 106 likes, 1.7k downloads — A BitNet-based ASR model supporting GGUF and GGML, trending for its ultra-low-bit inference efficiency.
- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** | microsoft | 100 likes, 702 downloads — A new vision-language model from Microsoft exploring multimodal alignment and generation.
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | conradlocke | 577 likes, 0 downloads — A LoRA for identity-consistent image editing built on Krea-2, popular among ComfyUI users.

### 🔧 Specialized Models (code, math, medical, embeddings)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — already listed in Multimodal (also fits here for OCR specialization).
- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — already listed in Language Models (code specialization).
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — already listed in Multimodal (code specialization with vision support).

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** | DavidAU | 948 likes, 736k downloads — A highly modified, uncensored Qwen3.6 fine-tune with aggressive prompt fusion, trending in the roleplay/uncensored LLM community.
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | HauhauCS | 3,171 likes, 1.8M downloads — An uncensored 35B MoE variant of Qwen3.6 with vision support, highly downloaded for its performance and availability.
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** | prism-ml | 1,098 likes, 665k downloads — A 2-bit ternary quantized 27B model, gaining massive traction for extreme compression while retaining conversational quality.
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** | prism-ml | 690 likes, 2.3M downloads — A 1-bit quantized 27B model with the highest download count among quantized models, demonstrating huge appetite for ultra-compact LLMs.
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | empero-ai | 2,516 likes, 1.2M downloads — A mythological/roleplay fine-tune of Qwen3.5 in GGUF, trending for its creative writing and storytelling use cases.
- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** | Qwen | 2,587 likes, 6.1M downloads — The official base MoE model from Qwen, trending as the root for dozens of community quantizations and fine-tunes.
- **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)** | unsloth | 169 likes, 410 downloads — An unsloth-optimized variant of Kimi-K3 for efficient fine-tuning.
- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** | unsloth | 163 likes, 0 downloads — A GGUF quantized version of Kimi-K3 by the unsloth team.
- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** | unsloth | 247 likes, 129k downloads — GGUF quant of the Laguna-S-2.1 model, popular for local inference.
- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** | DavidAU | 134 likes, 112k downloads — A smaller, 9B uncensored GGUF fine-tune of Qwen3.5, continuing the Heretic series trend.
- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** | nota-ai | 140 likes, 6.1k downloads — NVFP4-quantized version of Solar-Open2-250B for high-performance inference on vLLM.
- **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** | baseten | 137 likes, 2.7k downloads — A NVFP4 quantized vision-language variant of GLM-5.2, optimized for production serving with SGLang.
- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | ATH-MaaS | 346 likes, 47k downloads — A Qwen3.5-based OCR model, trending as a lightweight alternative to large OCR systems.
- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)** | LuffyTheFox | 217 likes, 99k downloads — Another Hermes/uncensored variant of Qwen3.6 in GGUF, popular for character-driven conversational LLMs.

## 3. Ecosystem Signal

The Hugging Face ecosystem is currently being shaped by three powerful currents. **Moonshot AI's Kimi family** is the fastest-rising force, with K3 and K2.7-Code both ranking high—their "compressed-tensors" approach suggests a new emphasis on efficient multimodal architectures. **Qwen 3.6** has clearly become the foundational backbone of the open-weight community: it spawned more fine-tunes and quantizations (Uncensored, Hermes, Heretic, etc.) than any other base model this week, accumulating millions of downloads collectively. The **Bonsai family** (prism-ml) is a standout trend, proving that users are actively seeking 1-bit and 2-bit ternary quantizations for ultra-low-resource environments. Meanwhile, enterprise players like **Baidu, Microsoft, and Upstage** are maintaining open-weight momentum with practical, deployment-ready models (OCR, computer-use, large-scale LLMs). The **uncensored LLM** subculture continues to thrive, often paired with GGUF formats for easy local use. On the speech side, compact TTS (Inflect) and ASR (VibeVoice) models signal a maturing "edge AI" pipeline that is moving beyond text-only inference. Overall, the trend is clear: extreme quantization, multimodal compression, and uncensored fine-tuning are the key growth vectors.

## 4. Worth Exploring

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — The single most impactful model release of the week. Its compressed-tensors approach and multimodal capabilities make it a prime candidate for teams looking to push vision-language performance without enormous compute overhead. Highly recommended for study and experimentation.
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — With 2.3M downloads, this 1-bit quantized model is the most downloaded entry on the list. It represents the state-of-the-art in extreme compression and is a fascinating case study in how far model weights can be reduced while retaining conversational utility.
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — A well-liked conversational MoE model with high download volume and multiple ecosystem derivatives. It is worth exploring for anyone evaluating strong open-weight alternatives to the Qwen or Llama families, especially for multi-turn dialogue tasks.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*