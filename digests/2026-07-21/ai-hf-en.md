# Hugging Face Trending Models Digest 2026-07-21

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-21 03:22 UTC

---

# Hugging Face Trending Models Digest — 2026-07-21

## Today's Highlights

This week's trending models reveal a clear surge in **multimodal understanding**, particularly around OCR and vision-language capabilities, with Baidu's **Unlimited-OCR** and Google's **Gemma-4-31B-it** leading in both likes and downloads. Meanwhile, the **Bonsai family** from prism-ml continues to push the boundaries of extreme quantization, achieving 1-bit and ternary (2-bit) representations of 27B models that have become the most downloaded quantized models on the hub. The **Qwen 3.6 ecosystem** is exploding with community fine-tunes—uncensored variants, roleplay merges, and aggressive personality tweaks—signaling a strong demand for customizable, locally deployable vision-language models. Finally, the appearance of **MOSS real-time audio and video pipelines** from OpenMOSS-Team points toward growing interest in streaming, interactive multimodal systems.

## Trending Models

### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — *Author: zai-org | Likes: 4,229 | Downloads: 531,947* — A 5.2B MoE conversational model that is the most-liked release this week, likely due to its strong performance-per-parameter ratio and Chinese-language support.

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — *Author: tencent | Likes: 849 | Downloads: 13,698* — Tencent's Hunyuan-based text-generation model that serves as the base for AngelSlim's popular GGUF quantized variant.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — *Author: prism-ml | Likes: 543 | Downloads: 1,262,894* — A 1-bit quantized 27B model that is the most downloaded in this category, making a large model feasible for consumer hardware.

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — *Author: prism-ml | Likes: 857 | Downloads: 338,945* — A 2-bit (ternary) variant of Bonsai that retains more quality than the 1-bit version while still being highly compressed.

- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — *Author: prism-ml | Likes: 155 | Downloads: 21,690* — Apple MLX-compatible 1-bit version of Bonsai for efficient deployment on Mac devices.

- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** — *Author: prism-ml | Likes: 130 | Downloads: 17,869* — MLX variant of the ternary 2-bit Bonsai, extending extreme quantization to the Apple ecosystem.

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — *Author: AngelSlim | Likes: 149 | Downloads: 109,749* — Community GGUF quantization of Tencent's Hy3 model, making it immediately usable with llama.cpp.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** — *Author: GnLOLot | Likes: 159 | Downloads: 5,494* — A 1B parameter thinking model fine-tuned from MiniCPM5, optimized for reasoning and storytelling.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** — *Author: GnLOLot | Likes: 136 | Downloads: 28,012* — GGUF version of the MiniCPM5 thinking model for easy local deployment.

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** — *Author: Cactus-Compute | Likes: 292 | Downloads: 950* — A JAX-based model specialized for function calling and tool use, representing an emerging category of agentic LLMs.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — *Author: google | Likes: 3,298 | Downloads: 11,987,240* — Google's most capable open-weight multimodal model with 31B parameters, trending due to its massive download count and state-of-the-art vision-language performance.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — *Author: baidu | Likes: 2,454 | Downloads: 2,122,848* — A specialized image-text-to-OCR model from Baidu handling unlimited-length text recognition, likely the most practical utility model this week.

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — *Author: thinkingmachines | Likes: 1,276 | Downloads: 13,462* — A MoE-based image-text-to-text model optimized for conversational interaction, gaining rapid community traction.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — *Author: moonshotai | Likes: 1,178 | Downloads: 713,992* — A code-specialized vision-language model from Moonshot AI using compressed tensors, bridging multimodal understanding and code generation.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — *Author: HauhauCS | Likes: 2,938 | Downloads: 2,007,025* — An uncensored, aggressive personality fine-tune of Qwen3.6-35B MoE with vision capabilities, extremely popular for roleplay and creative writing.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — *Author: empero-ai | Likes: 2,372 | Downloads: 2,117,323* — A GGUF-quantized 9B reasoning model based on Qwen3.5, optimized for mythology and narrative tasks.

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)** — *Author: empero-ai | Likes: 197 | Downloads: 105,749* — Updated version of the Qwythos reasoning model in GGUF format.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — *Author: bottlecapai | Likes: 485 | Downloads: 10,647* — A 27B thinking-augmented Qwen3.6 variant with safetensors, designed for improved chain-of-thought reasoning.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — *Author: ATH-MaaS | Likes: 220 | Downloads: 14,587* — An OCR-focused Qwen3.5-based model competing with Baidu's Unlimited-OCR for document understanding tasks.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — *Author: OpenMOSS-Team | Likes: 293 | Downloads: 87,533* — An audio-text-to-text model for simultaneous transcription and speaker diarization, indicating growing audio AI demand.

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)** — *Author: OpenMOSS-Team | Likes: 89 | Downloads: 544* — A real-time video-text-to-text model for streaming video understanding and interaction.

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** — *Author: Wan-AI | Likes: 145 | Downloads: 2,408* — A 14B image-to-video model using diffusers, specialized for generating dance videos from still images.

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** — *Author: unsloth | Likes: 111 | Downloads: 6,771* — GGUF-quantized version of Inkling with MoE architecture, supporting both image and audio inputs.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — *Author: DavidAU | Likes: 160 | Downloads: 16,719* — A heavily merged uncensored Qwen3.6 fine-tune combining multiple roleplay and creative writing LoRAs.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF)** — *Author: LuffyTheFox | Likes: 85 | Downloads: 15,148* — Another uncensored Qwen3.6 MoE variant, this one merged with Hermes V3 for improved instruction following.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — *Author: Alissonerdx | Likes: 214 | Downloads: 0* — A LoRA for identity-preserving text-to-video generation using LTX-Video, enabling consistent character generation.

### 🔧 Specialized Models (code, math, medical, embeddings, robotics)

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nvidia/Nemotron-3-Embed-1B-BF16)** — *Author: nvidia | Likes: 87 | Downloads: 61,708* — A 1B sentence-embedding model from Nvidia based on Ministral3, optimized for semantic similarity and retrieval tasks.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — *Author: openbmb | Likes: 136 | Downloads: 0* — A vision-language-action model for robot manipulation, representing the intersection of LLMs and robotics.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** — *Author: openbmb | Likes: 101 | Downloads: 0* — Companion model to RobotManip, specialized for object tracking in robotic vision pipelines.

### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ, LoRA)

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — *Author: conradlocke | Likes: 459 | Downloads: 0* — A LoRA for Krea-2-Raw enabling facial identity editing in images, popular for ComfyUI workflows.

- *(All GGUF entries above are also fine-tunes/quantizations; most notable are the Bonsai family, Qwen3.6 GGUF variants, and empero-ai's Qwythos models.)*

## Ecosystem Signal

The current HuggingFace landscape reveals several converging trends. **Extreme quantization is now mainstream**, with 1-bit and 2-bit ternary models from prism-ml achieving over 1.2 million downloads each—indicating that users prioritize local deployment over absolute quality. The **Qwen 3.5/3.6 family** has become the dominant foundation for community fine-tuning, especially for uncensored and roleplay variants, with the HauhauCS and LuffyTheFox models accumulating over 2 million downloads combined. This suggests a thriving sub-economy of personality-tuned models for creative and uncensored use cases.

On the infrastructure side, **GGUF remains the format of choice** for local deployment, while MLX variants are growing for Apple users. The rise of **MoE architectures** (GLM-5.2, Inkling, Qwen3.6-35B-A3B) points toward parameter-efficient scaling as a key design pattern. Meanwhile, **specialized models are carving niches**: OCR (Unlimited-OCR, OvisOCR2), audio diarization (MOSS-Transcribe-Diarize), real-time video (MOSS-VL-Realtime), and robotics (MiniCPM-RobotManip) all signal maturation beyond general-purpose chatbots. The open-weight release of Gemma-4-31B-it by Google reinforces the trend of major labs releasing capable models, further intensifying competition in the multimodal space.

## Worth Exploring

1. **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — With nearly 12 million downloads and strong multimodal performance, this is the week's most significant release. It's worth studying as a baseline for open-weight vision-language models and for understanding Google's strategy in the open ecosystem.

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — The 2-bit ternary quantization approach is a research and engineering achievement worth examining. It demonstrates how far compression can go while maintaining useful capabilities, and its popularity indicates strong demand for edge-deployable large models.

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — This model solves a practical, high-value problem (unlimited-length OCR) with impressive download numbers. It's worth testing for any document processing pipeline and understanding the architecture behind its "unlimited" capability.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*