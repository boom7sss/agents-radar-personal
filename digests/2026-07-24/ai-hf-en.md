# Hugging Face Trending Models Digest 2026-07-24

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-24 03:21 UTC

---

Here is the structured Hugging Face Trending Models Digest you requested.

---

### 🤖 Hugging Face Trending Models Digest | 2026-07-24

#### 1. Today’s Highlights
This week’s rankings are dominated by large Chinese model ecosystems, with **GLM-5.2** (4,375 likes) from Zhipu AI taking the top spot and **Qwen**-family fine-tunes flooding the charts. The **Qwen3.6** series in particular has sparked intense community activity, with uncensored fine-tunes and new MoE variants like the 35B-A3B model leading downloads. Another major signal is the rise of **1-bit and ternary quantization**: Prism ML’s **Bonsai-27B** family has racked up nearly 2M downloads across a 1-bit GGUF, a ternary GGUF, and a new MLX 1-bit port, suggesting extreme compression for edge deployment is no longer experimental but a practical mainstream workflow. Finally, specialized audio and speech models from **NVIDIA** (Nemotron-ASR) and **Qwen** (TTS) show strong adoption, signaling a broadening of the hub beyond pure language and vision.

#### 2. Trending Models

**🧠 Language Models (LLMs, chat models, instruction-tuned)**

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 4,375 likes | 596K downloads
  *Topping the chart this week, this dense MoE conversational model represents Zhipu AI’s latest generation, driving strong community buzz for its reasoning and Chinese-language capabilities.*

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — poolside | 520 likes | 13K downloads
  *A newly released text-generation model from the startup poolside, gaining traction as a specialized code/development assistant.*

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** — upstage | 468 likes | 362 downloads
  *A massive 250B open-weight model from Upstage, generating interest despite low download numbers, likely due to its scale and Korean-language optimization.*

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — Nanbeige | 326 likes | 4.5K downloads
  *A compact 3B LLM optimized for efficiency, trending for its strong performance-to-size ratio for lightweight deployment.*

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** — Motif-Technologies | 174 likes | 1.8K downloads
  *A new foundation model from a lesser-known team, gaining early attention as a potential general-purpose LLM alternative.*

**🎨 Multimodal & Generation (image, video, audio, text-to-X)**

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 2,900 likes | 2.4M downloads
  *A high-volume OCR model from Baidu, trending due to its exceptional accuracy on dense text and the huge demand for reliable document parsing.*

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — thinkingmachines | 1,509 likes | 24K downloads
  *A multimodal image-to-text conversational model, gaining buzz for its polished vision-language reasoning in a chat interface.*

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** — microsoft | 190 likes | 411 downloads
  *Microsoft’s latest text-to-image diffusion model, offered as a unified framework for generation and editing.*

- **[Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice)** — Qwen | 1,800 likes | 2.5M downloads
  *An open-weight text-to-speech model supporting custom voice cloning at 12Hz, trending as a powerful alternative to proprietary TTS APIs.*

- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** — nvidia | 926 likes | 750K downloads
  *A streaming automatic speech recognition model optimized for low-latency real-time transcription.*

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 320 likes | 111K downloads
  *A specialized audio-text model for transcription with speaker diarization, trending for meeting and call transcription use cases.*

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** — nvidia | 102 likes | 28K downloads
  *An edge-optimized diffusion model from NVIDIA’s Cosmos series, designed for on-device image generation.*

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** / **[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** — openbmb | 165 / 117 likes
  *Pioneering vision-language-action models for robotic manipulation and tracking, representing an emerging robotics category on the Hub.*

**🔧 Specialized Models (code, math, medical, embeddings, OCR)**

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** — moonshotai | 1,249 likes | 766K downloads
  *A compressed code-specialized model from Moonshot AI (Kimi), using compressed-tensors to deliver strong coding performance in a smaller footprint.*

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** — google | 3,348 likes | 12.6M downloads
  *Google’s largest open Gemma release yet, a 31B instruction-tuned multimodal model that has become the most downloaded model on the list.*

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — ATH-MaaS | 257 likes | 26K downloads
  *A vision-LLM specialized for OCR, competing with Baidu’s Unlimited-OCR in a rapidly growing document intelligence space.*

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** — fdtn-ai | 122 likes | 2.7K downloads
  *A security-focused 1B parameter model using a Granite MoE hybrid architecture, trending for its niche focus on safety and compliance tasks.*

**📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)**

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** — prism-ml | 621 likes | 1.9M downloads
  *The most downloaded GGUF on the list, a 1-bit quantized 27B model that makes running large models on consumer hardware practically viable.*

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — prism-ml | 986 likes | 576K downloads
  *A 2-bit ternary quantization of the Bonsai model, trending as a middle ground between extreme compression and quality.*

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 3,036 likes | 2.0M downloads
  *The most popular Qwen3.6 fine-tune, an uncensored MoE variant with “aggressive” creative writing capabilities, driving massive community downloads.*

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 2,440 likes | 2.1M downloads
  *A Qwen3.5-based GGUF fine-tune aiming to replicate Claude-level reasoning and “mythos” (roleplay/narrative) quality.*

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 407 likes | 334K downloads
  *A heavily modified uncensored Qwen3.6 fine-tune, notable for its long model name and extreme customization for “heretic” creative outputs.*

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | 518 likes | 0 downloads
  *A LoRA adapter for Krea-2 for identity-preserving image editing, trending in the ComfyUI community despite zero raw downloads (likely hosted elsewhere).*

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 529 likes | 25K downloads
  *A Qwen3.6 fine-tune designed to enhance long-chain thinking and reasoning, trending as a “thinking cap” for the base model.*

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)** — LuffyTheFox | 118 likes | 24K downloads
  *Another uncensored Qwen3.6 fine-tune, this time blending Hermes-style helpfulness with reduced refusal boundaries.*

---

#### 3. Ecosystem Signal

The current ecosystem is defined by three dynamics:

1. **The Rise of Chinese Foundation Models.** GLM-5.2, Nanbeige 4.2, and Kimi-K2.7-Code all originate from Chinese labs, and Qwen serves as the base for the single largest collection of fine-tunes on this list. The open-weight war is now multi-polar, with Chinese players offering competitive models for global consumption.

2. **Qwen3.6 Becomes the New LLaMA.** Just as LLaMA 3.1 once dominated the fine-tuning ecosystem, **Qwen3.6** (especially the 35B-A3B MoE variant) has become the base model of choice for community modifiers. The sheer volume of Qwen3.6 GGUF fine-tunes—uncensored, thinking-focused, creative—indicates that the community has found a model that is both performant and “fine-tunable” in meaningful ways.

3. **Extreme Compression Goes Mainstream.** The Bonsai-27B family (1-bit and ternary) achieving nearly 2.5M combined downloads is a clear signal. Community users are willing to sacrifice some quality for 5-10x size reductions. This trend, accelerated by `llama.cpp` and `mlx`, is democratizing access to 27B+ parameter models on laptops and phones.

**Open-weight vs. Proprietary:** There is no proprietary “GPT-5” moment here. Instead, the ecosystem is doubling down on open-weight innovation, with Google (Gemma-4), NVIDIA (Cosmos, Nemotron), and Baidu (Unlimited-OCR) all contributing substantially to the open ecosystem.

**Quantization & Fine-tuning Activity:** The list is heavily weighted (16 of 30 models) toward GGUF or fine-tuned variants. The community is not just consuming base models; it is actively reshaping them for specific aesthetics (uncensored, aggressive, mythos) and deploying them via quantized formats.

#### 4. Worth Exploring

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — *To understand where the next generation of open Chinese LLMs are heading. Its 4,375 likes are the highest on the list, and its MoE-DSA architecture is worth studying for efficiency.*
- **[Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice)** — *This model is a serious open-weight contender to ElevenLabs and OpenAI TTS. With 2.5M downloads and custom voice support, it is the most accessible high-quality TTS model available today.*
- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** — *For those interested in the frontier of robotics + LLMs. This vision-language-action model represents a new category (robotics) that will likely grow significantly on the Hub in the coming months. It is both novel and practical for researchers building robot control systems.*

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*