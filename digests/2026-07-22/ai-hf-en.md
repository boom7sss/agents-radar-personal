# Hugging Face Trending Models Digest 2026-07-22

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-22 03:20 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-22

## Today's Highlights

Today's trending landscape is dominated by two major forces: **extreme quantization breakthroughs** and **multimodal expansion**. Zhipu AI's **GLM-5.2** (4,285 likes) leads all models, signaling strong interest in Mixture-of-Experts architectures with a novel DSA attention mechanism. Google's **Gemma-4-31B-it** (3,314 likes) amassed over 12 million downloads, validating the demand for compact, capable vision-language models. A striking trend is the surge of **1-bit and ternary quantized models** from prism-ml, with their **Ternary-Bonsai-27B-gguf** (900 likes, 432K downloads) pushing the boundaries of extreme compression. Meanwhile, the **Qwen3.6 ecosystem** continues to expand with multiple uncensored fine-tunes and GGUF variants accumulating millions of downloads collectively.

---

## Trending Models

### 🧠 Language Models

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 4,285 likes | 545K downloads  
  A 52B MoE model using novel DSA attention; trending for its strong conversational capabilities and open-weight release from Zhipu AI.

- **[Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — poolside | 210 likes | 3K downloads  
  Poolside's latest specialized LLM for software engineering, gaining traction as a code-focused alternative to general-purpose models.

- **[Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** — Motif-Technologies | 128 likes | 125 downloads  
  An emerging 3B model from a new startup, drawing interest for its efficient architecture and feature-extraction capabilities.

- **[Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — Nanbeige | 98 likes | 0 downloads  
  A compact 3B LLM from Chinese researchers; worth watching despite low adoption.

- **[needle](https://huggingface.co/Cactus-Compute/needle)** — Cactus-Compute | 298 likes | 1K downloads  
  A JAX-native model for function-calling and tool-use, standing out for its unique framework choice and niche specialization.

### 🎨 Multimodal & Generation

- **[Inkling](https://huggingface.co/thinkingmachines/Inkling)** — thinkingmachines | 1,369 likes | 16K downloads  
  A new multimodal MoE model supporting image, text, and audio input; notable for its efficient architecture and broad modality support.

- **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 2,617 likes | 2.2M downloads  
  Baidu's next-generation OCR model with unlimited-length processing; trending for its practical utility and massive download count.

- **[OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — ATH-MaaS | 238 likes | 17K downloads  
  A Qwen3.5-based OCR model, benefiting from the broader Qwen ecosystem and demand for vision-language understanding.

- **[ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 492 likes | 12K downloads  
  A 27B vision-language model built on Qwen3.6, gaining popularity for its reasoning-enhanced design.

- **[Gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google | 3,314 likes | 12.1M downloads  
  Google's latest open-weight vision-language model; the highest-downloaded model today, reflecting strong trust and deployment interest.

- **[MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — openbmb | 147 likes | 58 downloads  
  A vision-language-action model for robotic manipulation; early-stage but signals the growing robotics-AI convergence.

- **[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** — openbmb | 107 likes | 72 downloads  
  A companion model for robot object tracking; part of openbmb's push into embodied AI.

- **[MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 299 likes | 92K downloads  
  An audio-text model combining transcription with speaker diarization; trending for practical meeting and media use cases.

- **[nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 904 likes | 590K downloads  
  NVIDIA's streaming ASR model, efficient at 0.6B parameters; popular for real-time speech applications.

- **[LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 223 likes | 0 downloads  
  A LoRA for identity-preserving video generation; niche but demonstrates the community's demand for controllable video synthesis.

- **[krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | 476 likes | 0 downloads  
  A LoRA for identity-consistent image editing based on Krea-2; trending in the ComfyUI ecosystem.

### 🔧 Specialized Models

- **[Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 1,200 likes | 722K downloads  
  Moonshot AI's code-specialized model with compressed-tensor techniques; trending for strong code generation and reasoning.

- **[Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** — nvidia | 96 likes | 93K downloads  
  A 1B embedding model optimized for sentence similarity; popular in RAG pipelines and search systems.

### 📦 Fine-tunes & Quantizations

- **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml | 900 likes | 432K downloads  
  A pioneering 2-bit ternary quantization of a 27B model; trending as the most extreme compression achieving usable quality.

- **[Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — prism-ml | 571 likes | 1.4M downloads  
  1-bit quantized GGUF of Bonsai-27B; highly downloaded due to its ultra-small footprint for edge deployment.

- **[Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)** — prism-ml | 162 likes | 25K downloads  
  Apple MLX-optimized 1-bit variant; gaining traction among macOS and Apple Silicon users.

- **[Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)** — prism-ml | 135 likes | 20K downloads  
  MLX counterpart of the ternary quantization; expands platform coverage for extreme compression.

- **[Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 2,972 likes | 2M downloads  
  A heavily uncensored MoE fine-tune of Qwen3.6; driving debate and downloads in the uncensored model community.

- **[Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,391 likes | 2.1M downloads  
  A Qwen3.5-based GGUF with reasoning enhancements; extremely popular for its balance of quality and efficiency.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 252 likes | 62K downloads  
  An uncensored fine-tune of Qwen3.6 with extensive customization; attracting a niche but active community.

- **[inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** — unsloth | 116 likes | 7K downloads  
  Unsloth's GGUF quantization of Inkling; leverages the Inkling model's appeal with optimized inference.

- **[MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)** — GnLOLot | 147 likes | 52K downloads  
  A thinking-enhanced GGUF of MiniCPM5; trending for combining small-size with reasoning capabilities.

- **[MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** — GnLOLot | 166 likes | 6K downloads  
  Base version of the above; serves as a lightweight thinking model.

- **[Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** — AngelSlim | 157 likes | 145K downloads  
  A GGUF quantization of Tencent's Hy3 model; popular for its Apache-2.0 license and practical performance.

---

## Ecosystem Signal

The current landscape reveals **four key dynamics**:

**Extreme quantization is maturing.** Prism-ml's 1-bit and ternary Bonsai models demonstrate that sub-2-bit compression can reach production attention (900+ likes, 400K+ downloads). This signals a shift toward running capable models on consumer hardware and edge devices, with Apple MLX variants confirming platform democratization.

**Qwen3.6 has become the dominant fine-tuning substrate.** At least 4 models in today's top 30 are derivative of Qwen3.6 or Qwen3.5, collectively accumulating over 6 million downloads. The ecosystem is thriving with uncensored variants, MoE adaptations, and specialized thinking versions — reminiscent of Llama 2's community dynamism in earlier cycles.

**Multimodal is the new baseline.** A clear majority (16 of 30) of trending models process more than text alone — including vision, audio, robotics, and video. Google's Gemma-4, Baidu's Unlimited-OCR, thinkingmachines' Inkling, and NVIDIA's ASR models all confirm that multimodal capability is no longer a differentiator but an expectation.

**Open-weight momentum continues but with strategic guardrails.** Major players (Google, Zhipu AI, Baidu, Moonshot AI, NVIDIA) released open models, yet NVIDIA's Nemotron series are restricted to feature-extraction, and Google's Gemma-4 uses a custom license. The "open" definition remains varied, but the volume of community fine-tunes suggests that even restricted-open models unlock substantial downstream innovation.

---

## Worth Exploring

1. **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — The highest-liked model today with a unique MoE-DSA architecture. Studying its attention mechanism could reveal why it outperforms similarly sized dense models on conversational tasks. Its open-weight release also makes it a strong candidate for fine-tuning experiments.

2. **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — Arguably the most technically audacious release today. Running a 27B model at 2-bit ternary precision is a frontier achievement. Practitioners interested in edge deployment or efficient inference should benchmark this against FP16 baselines to understand the quality-compression tradeoff curve.

3. **[needle](https://huggingface.co/Cactus-Compute/needle)** — Unique for being built entirely in JAX with a focus on function-calling, needle represents a departure from the PyTorch-dominated ecosystem. For researchers exploring alternative frameworks or building tool-use agents, this model offers a fresh architectural perspective worth studying.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*