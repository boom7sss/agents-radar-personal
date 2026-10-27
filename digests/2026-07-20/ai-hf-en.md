# Hugging Face Trending Models Digest 2026-07-20

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-20 03:42 UTC

---

# 🤗 Hugging Face Trending Models Digest — 2026-07-20

## 1. Today's Highlights

This week's trending roster is defined by three major signals: **massive adoption of extreme quantization**, the **rise of unified multimodal-native architectures**, and a **renewed focus on real-time and agentic capabilities**. Google's **Gemma-4-31B-it** continues to dominate absolute downloads (12.3M+), while Zhipu AI's **GLM-5.2** (4.2K likes) signals strong community traction for MoE-based models with novel DSA attention mechanisms. The emerging "Bonsai" family from prism-ml demonstrates that extreme 1-bit and ternary quantization can achieve broad adoption (1.3M+ downloads), pointing to a maturing ecosystem where highly compressed models are no longer niche experiments but primary deployment targets. Additionally, Baidu's Unlimited-OCR (2.1M downloads) and the Qwythos-family GGUF variants highlight intensifying interest in specialized multimodal and reasoning-focused quantized models.

## 2. Trending Models by Category

### 🧠 Language Models (LLMs, chat, instruction-tuned)

**[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
Author: zai-org | Likes: 4,172 | Downloads: 536,177  
Leading-edge MoE architecture with DSA attention, trending for its strong reasoning benchmarks and open-weight release from a major Chinese AI lab.

**[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
Author: prism-ml | Likes: 503 | Downloads: 1,262,894  
A 1-bit quantized 27B model that has become one of the most downloaded LLMs this week, appealing to users seeking extreme compression with usable quality.

**[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
Author: tencent | Likes: 836 | Downloads: 13,698  
Tencent’s latest Hunyuan-generation language model, gaining attention as a strong baseline for Chinese-language tasks and downstream fine-tuning.

**[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
Author: froggeric | Likes: 948 | Downloads: 0  
A utility fix for Qwen3.5 chat templates, trending due to widespread template compatibility issues across the Qwen ecosystem.

### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

**[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**  
Author: google | Likes: 3,276 | Downloads: 12,337,374  
Google's flagship open multimodal model with vision-language capabilities; its massive download count reflects both strong performance and broad deployment via GGUF conversions.

**[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
Author: baidu | Likes: 2,201 | Downloads: 2,122,848  
A high-performance OCR model from Baidu capable of handling unlimited-length documents in a single pass, trending for practical enterprise and document processing use cases.

**[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
Author: empero-ai | Likes: 2,350 | Downloads: 2,118,995  
A vision-language model based on Qwen3.5, fine-tuned for enhanced reasoning, heavily downloaded for its quantized GGUF serving variant.

**[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
Author: thinkingmachines | Likes: 1,158 | Downloads: 13,462  
A new multimodal model supporting both image and audio input/output, trending as a strong entry in the "universal multimodal" category.

**[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
Author: HauhauCS | Likes: 2,903 | Downloads: 2,084,530  
An uncensored Qwen3.6 MoE vision model with aggressive fine-tuning, highly popular among users seeking unfiltered multimodal outputs.

**[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**  
Author: Wan-AI | Likes: 129 | Downloads: 2,408  
A dedicated image-to-video generation model optimized for dance and motion sequences, gaining traction in creative video pipelines.

**[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)**  
Author: OpenMOSS-Team | Likes: 83 | Downloads: 544  
A real-time video-text-to-text model enabling live video understanding and conversational interaction.

### 🔧 Specialized Models (function calling, agent, tools)

**[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
Author: Cactus-Compute | Likes: 280 | Downloads: 955  
A JAX-native model specialized for function calling and tool-use, representing the growing trend of models designed specifically for agentic workflows.

**[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
Author: InternScience | Likes: 584 | Downloads: 35,833  
A Qwen3.5-based MoE agent model with multimodal capabilities, adopting architecture optimized for structured agent use cases.

**[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
Author: OpenMOSS-Team | Likes: 280 | Downloads: 87,533  
An audio-text-to-text model combining speech transcription with speaker diarization, trending for meeting transcription and telephony pipelines.

### 📦 Fine-tunes & Quantizations (GGUF, MLX, LoRA)

**[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
Author: prism-ml | Likes: 796 | Downloads: 338,945  
A ternary (2-bit) quantization of the 27B Bonsai model in GGUF format, attracting users seeking the best trade-off between extreme compression and output quality.

**[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**  
Author: prism-ml | Likes: 140 | Downloads: 21,690  
Apple MLX-native 1-bit quantization of Bonsai, enabling efficient on-device inference for Mac and iOS platforms.

**[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**  
Author: AngelSlim | Likes: 139 | Downloads: 109,749  
Community GGUF conversion of Tencent's Hy3 model, making the Hunyuan-generation LLM accessible in llama.cpp compatible format.

**[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**  
Author: jlnsrk | Likes: 142 | Downloads: 4,035  
An int4 quantization of GLM-5.2 with Colibri expert-streaming for efficient CPU inference, driving interest in MoE model deployment on edge hardware.

**[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**  
Author: unsloth | Likes: 105 | Downloads: 6,771  
Unsloth's GGUF conversion of the Inkling multimodal model, democratizing access to the new Thinking Machines model for local inference.

**[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**  
Author: conradlocke | Likes: 427 | Downloads: 0  
A LoRA for identity-preserving image editing using Krea-2, notable for its targeted fine-tuning approach to face editing.

**[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**  
Author: Alissonerdx | Likes: 195 | Downloads: 0  
Identity-preservation LoRA for LTX video models, enabling consistent face generation in reference-to-video pipelines.

**[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://gucseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**  
Author: Cseti | Likes: 99 | Downloads: 0  
Novel-view synthesis LoRA for LTX2.3, enabling cross-view prompt-based video generation from multiple perspectives.

## 3. Ecosystem Signal

Three structural trends define this week's ecosystem:

**Extreme Quantization Becomes Mainstream.** The Bonsai family (prism-ml) has crossed 1.3M downloads for its 1-bit GGUF variant, while ternary quantization (Ternary-Bonsai) adds 338K more. This signals that the "quality cliff" previously associated with sub-4-bit quantization is being overcome, at least for knowledge-rich 27B-scale models. Users appear willing to trade some coherence for the ability to run large models on consumer hardware.

**Multimodal-Native Architectures Converge.** Inkling (thinkingmachines), GLM-5.2, Gemma-4, and the Qwen3.6 vision variants all share a common design philosophy: unified transformers that jointly process text, image, and (in Inkling's case) audio in a single model without separate encoders. This shift from "language model + adapter" to "native multimodal transformer" is now the dominant paradigm for new releases.

**Qwen Family Dominates Fine-Tuning Activity.** A massive share of highest-download models are derived from Qwen3.5 or Qwen3.6 — Qwythos, ThinkingCap, HauhauCS aggressive variants, DavidAU's fusion models, and multiple GGUF targets. The Qwen ecosystem has become the default fine-tuning base for the open-weight community, analogous to Llama's role in earlier years. This is driven by Qwen's strong multilingual performance, permissive license, and consistent MoE scaling.

**Open-Weight Models Lead Downloads.** With Gemma-4, GLM-5.2, Baidu Unlimited-OCR, and the entire Qwen ecosystem all fully open-weight, the most downloaded models this week are universally open-access. Proprietary models do not appear in the trending list — the community continues to vote with downloads for openness.

## 4. Worth Exploring

**1. [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
Inkling is the most architecturally novel multimodal model this week, supporting both image and audio as native inputs within a single transformer. It represents a "Swiss Army knife" approach to modality coverage and is worth studying as a potential template for future unified models. Its relatively modest download count (13K) suggests early-stage adoption, making now a good time to evaluate its quality.

**2. [Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
"Needle" stands out as a JAX-native model designed explicitly for function calling and tool-use — not as a fine-tune of a general LLM, but as a purpose-built architecture. As agentic workflows become central to LLM deployment, specialized models like this may outperform generalists. Its JAX foundation also makes it interesting for research on alternative training frameworks.

**3. [jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**  
This int4 quantization of GLM-5.2 with Colibri expert-streaming is a technically notable contribution: it brings a MoE architecture with 50+ experts to CPU inference efficiently, using selective expert loading. This is a novel approach to making scalable MoE models practical on resource-constrained hardware, and it may foreshadow how future large MoE models are deployed at the edge.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*