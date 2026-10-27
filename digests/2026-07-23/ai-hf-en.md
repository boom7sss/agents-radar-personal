# Hugging Face Trending Models Digest 2026-07-23

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-23 03:27 UTC

---

Here is your **Hugging Face Trending Models Digest** for **2026-07-23**.

---

# 🤗 Hugging Face Trending Models Digest

## 1. Today's Highlights

The open-source landscape is being reshaped by a surge in **Mixture-of-Experts (MoE) architectures**, led by **zai-org/GLM-5.2** (4,342 likes) and the rapidly multiplying **Qwen3.6-based MoE fine-tunes** from the community. **Google** has entered the chat with a powerful large multimodal entry, **gemma-4-31B-it**, while a new contender, **thinkingmachines/Inkling**, signals a push toward unified multimodal models with native audio support. Quantization continues to dominate activity, with **prism-ml** pioneering novel 1-bit and ternary precision, and **unsloth** acting as the primary quantization engine for many top releases. Finally, **Baidu's Unlimited-OCR** and **nvidia's Nemotron ASR** show that specialized, production-grade task-specific models are generating immense download volumes.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  *Author:* zai-org | *Likes:* 4,342 | *Downloads:* 545,109  
  A flagship MoE text-generation model from GLM family, trending as the week's most-liked pure LLM, signaling strong interest in efficient, high-performance mixture-of-experts architectures.

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
  *Author:* google | *Likes:* 3,330 | *Downloads:* 12,113,203  
  Google’s latest open-weight multimodal (image-text-to-text) LLM, dominating downloads due to its combination of massive scale, strong performance, and accessibility.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**  
  *Author:* upstage | *Likes:* 313 | *Downloads:* 0  
  A 250-billion parameter open-weight LLM from Upstage, notable for its sheer size in the open ecosystem, though currently low on community adoption.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**  
  *Author:* Nanbeige | *Likes:* 243 | *Downloads:* 0  
  A compact 3B parameter LLM, appealing for lightweight deployment while maintaining competitive performance in its size class.

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**  
  *Author:* Motif-Technologies | *Likes:* 161 | *Downloads:* 125  
  A new feature-extraction and text-generation model from Motif, positioned for enterprise embedding and retrieval use cases.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
  *Author:* thinkingmachines | *Likes:* 1,459 | *Downloads:* 16,441  
  A novel multimodal MoE model supporting image, text, and audio outputs, gaining traction as a unified "all-in-one" conversational model.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  *Author:* baidu | *Likes:* 2,755 | *Downloads:* 2,237,351  
  Baidu’s industrial-grade image-to-text OCR model, trending due to its practicality and massive download count for document parsing tasks.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  *Author:* HauhauCS | *Likes:* 3,008 | *Downloads:* 1,997,690  
  An uncensored, aggressive-tuned MoE variant of Qwen3.6 that is exploding in popularity among users seeking high-performance, unfiltered conversational agents.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  *Author:* empero-ai | *Likes:* 2,418 | *Downloads:* 2,133,420  
  A reasoning-focused GGUF quantization of a Qwen3.5 fine-tune, blending computer-generated reasoning traces with Claude distillation—highly downloaded.

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**  
  *Author:* microsoft | *Likes:* 132 | *Downloads:* 0  
  Microsoft’s new text-to-image and image-editing diffusion model, representing a continued push from big labs into generative visual AI.

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**  
  *Author:* nvidia | *Likes:* 91 | *Downloads:* 6,623  
  A Cosmos-family edge model for diffusion-based generation, optimized for on-device or low-latency visual inference.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**  
  *Author:* Alissonerdx | *Likes:* 235 | *Downloads:* 0  
  A fine-tuned LoRA for identity-preserving text-to-video generation, riding the wave of personalized video generation interest.

### 🔧 Specialized Models (code, math, medical, embeddings, audio, robotics)

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
  *Author:* ATH-MaaS | *Likes:* 249 | *Downloads:* 17,162  
  A Qwen3.5-based vision-language model optimized for OCR, competing with Baidu's offering by being open and community-friendly.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**  
  *Author:* moonshotai | *Likes:* 1,226 | *Downloads:* 722,058  
  A code-specialized, compressed language model from Moonshot AI (Kimi), trending for its efficient code generation and feature extraction capabilities.

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**  
  *Author:* nvidia | *Likes:* 914 | *Downloads:* 590,230  
  A compact streaming automatic speech recognition model from Nvidia, purpose-built for real-time transcription workloads.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**  
  *Author:* openbmb | *Likes:* 155 | *Downloads:* 58  
  A vision-language-action model for robotic manipulation, signaling the slow but steady maturation of open-weight robotics models.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**  
  *Author:* openbmb | *Likes:* 114 | *Downloads:* 72  
  Companion to RobotManip, focused on object tracking in robotic contexts, part of OpenBMB’s broader MiniCPM robotics suite.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
  *Author:* OpenMOSS-Team | *Likes:* 308 | *Downloads:* 92,265  
  An audio-text-to-text model combining transcription and speaker diarization, gaining steam for meeting analysis and media processing.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  *Author:* prism-ml | *Likes:* 948 | *Downloads:* 432,196  
  The industry’s first ternary (2-bit) quantization of a 27B LLM, pushing the frontier of extreme model compression.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**  
  *Author:* DavidAU | *Likes:* 330 | *Downloads:* 62,842  
  A highly merged, uncensored fine-tune of Qwen3.6 in GGUF, appealing to the uncensored and experimental fine-tuning community.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  *Author:* prism-ml | *Likes:* 598 | *Downloads:* 1,404,962  
  A 1-bit GGUF quantization of a 27B model, extremely popular for enabling large-model inference on consumer hardware.

- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)**  
  *Author:* unsloth | *Likes:* 111 | *Downloads:* 0  
  Unsloth’s GGUF conversion of the Laguna-S-2.1 base model, demonstrating Unsloth’s role as a central quantization infrastructure.

- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)**  
  *Author:* poolside | *Likes:* 97 | *Downloads:* 1,953  
  A 4-bit NVFP4 quantization of the Laguna code model, targeting vLLM-compatible inference pipelines.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**  
  *Author:* prism-ml | *Likes:* 165 | *Downloads:* 25,273  
  Apple MLX-compatible 1-bit variant of Bonsai-27B, broadening access to extreme quantization on Mac hardware.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)**  
  *Author:* LuffyTheFox | *Likes:* 103 | *Downloads:* 19,140  
  Another Qwen3.6 MoE uncensored fine-tune in GGUF, showing the high demand for diverse "character" tweaks on popular base models.

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**  
  *Author:* unsloth | *Likes:* 120 | *Downloads:* 7,377  
  Unsloth’s GGUF quantization of the new multimodal Inkling model, making it immediately deployable on consumer GPUs.

## 3. Ecosystem Signal

**MoE is the new mainstream.** GLM-5.2 and the numerous Qwen3.6 MoE variants (e.g., by HauhauCS, LuffyTheFox) show that open-weight developers have widely adopted Mixture-of-Experts as the standard for balancing capacity and inference cost. **Extreme quantization has gone mainstream.** Prism-ml's 1-bit and ternary models are no longer experimental stunts—they are regularly generating hundreds of thousands of downloads, allowing 27B+ models to run on laptops and edge devices. This is democratizing large model access faster than any other trend.

**Open-weight is winning.** Google’s Gemma-4, Nvidia’s Nemotron & Cosmos, and Baidu’s OCR all released as open weights, and they dominate the download charts. The fact that a 250B parameter open model (Solar-Open2) exists with zero downloads this week, while popular fine-tunes of smaller models explode, suggests that **community preference has shifted to usable, quantized, specialized models** over sheer parameter count. Finally, **Inkling** signals a clear direction: the next frontier is unified multimodal models that handle text, image, and audio natively—a response to the closed-source ChatGPT vision/voice capabilities.

## 4. Worth Exploring

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – The week’s most-liked pure LLM. If you want to understand where MoE architecture is heading and why the community is excited, this is the model to study. It offers a great balance of performance and efficiency without needing extreme quantization.

2. **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** – This is the most forward-looking model on the list. Its support for image-text-to-text and audio-text-to-text in a single MoE frontier model makes it a strong candidate for building unified assistants. The GGUF variant from unsloth makes it immediately testable.

3. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – For anyone interested in model compression, this ternary quantization is a technical achievement. It provides a unique look into the trade-offs of sub-2-bit inference and is highly practical for deployment on constrained hardware.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*