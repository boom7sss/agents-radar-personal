# Hugging Face Trending Models Digest 2026-07-12

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-12 03:32 UTC

---

# 🤗 Hugging Face Trending Models Digest – July 12, 2026

## Today's Highlights

The week’s top movers are dominated by **MoE (Mixture-of-Experts) architectures** and **Qwen 3.5/3.6 ecosystem expansions**, with NVIDIA making a strong push via two new sparse models (Audex and Puzzle). Baidu’s **Unlimited-OCR** crossed 1.9K likes, reflecting surging interest in universal OCR capabilities. GGUF quantizations continue to flood the hub, with `unsloth` and `empero-ai` leading in downloads. Meanwhile, **MiniCPM5 and GLM-5.2** signal that smaller, efficient open-weight models are gaining traction alongside the larger frontier releases. A notable shift: many top models now advertise vision-language pipelines (image-text-to-text), blurring the line between pure language and multimodal generation.

---

## 🧠 Language Models

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** – Tencent, 699 likes, 8,210 downloads  
  A  Hunyuan-based text-generation model, likely the latest in Tencent’s large language series, catching attention for its high-quality Chinese-English support.

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – zai-org, 3,836 likes, 421K downloads  
  An MoE conversational model (glm_moe_dsa) that tops the chart this week, benefiting from the continued community interest in GLM architecture advancements.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** – InternScience, 495 likes, 28K downloads  
  A Qwen3.5-based MoE model for agentic tasks, combining image-text-to-text and reasoning capabilities, likely used in tool-use scenarios.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – bottlecapai, 236 likes, 4,128 downloads  
  A fine-tuned Qwen3.6 model optimized for chain-of-thought reasoning with vision support, attracting early adopters of the Qwen3.6 release.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – HauhauCS, 2,653 likes, 2.64M downloads  
  A GGUF-quantized uncensored MoE variant of Qwen3.6, extremely popular for its aggressive behavior tuning and efficient 35B-A3B sparse architecture.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** – deepreinforce-ai, 853 likes, 1.22M downloads  
  A 35B general-purpose LLM in GGUF format, likely fine-tuned for instruction following, seeing heavy download volume for local inference.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** – yuxinlu1, 1,150 likes, 436K downloads  
  A compound fine-tune of Gemma 4 for agentic and coding tasks, using multiple merging techniques and GGUF quantization.

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** – NVIDIA, 123 likes, 743 downloads  
  NVIDIA’s first openly released MoE LLM with 30B total / 3B active parameters, designed for inference efficiency while retaining strong performance.

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** – NVIDIA, 107 likes, 30K downloads  
  A larger 75B MoE puzzle-solving model in NVFP4 precision, targeting structured reasoning and problem-solving benchmarks.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** – GnLOLot, 192 likes, 29K downloads  
  A GGUF distillation of OpenBMB’s MiniCPM5-1B, merged with Claude-style thinking traces for compact reasoning.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** – migtissera, 85 likes, 806 downloads  
  A Qwen3.5-based multimodal assistant fine-tune, focused on interactive conversational agents with vision.

- **[openbmb/MiniCPM5-1B](https://huggingface.co/openbmb/MiniCPM5-1B)** – OpenBMB, 911 likes, 366K downloads  
  The base of the MiniCPM5 family—a compact 1B parameter model that punches above its weight, widely used for on-device and edge deployments.

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** – Mistral AI, 189 likes, 350 downloads  
  Mistral’s latest MoE model with 119B total / 6B active, a fine-tune of their previous Leanstral release, optimized for production vLLM inference.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** – empero-ai, 769 likes, 186K downloads  
  The non-quantized version of the popular Qwen3.5 fine-tune using Claude-style synthetic data, trending for high-quality role-play and creative writing.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** – already listed above.

---

## 🎨 Multimodal & Generation

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – empero-ai, 2,016 likes, 1.94M downloads  
  The GGUF-quantized version of the Qwen3.5 vision-language fine-tune, combining multimodal understanding with Claude-style narrative abilities.

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – Baidu, 1,931 likes, 1.38M downloads  
  A universal OCR model capable of handling diverse text-in-image scenarios (printed, handwritten, scene text), trending for its broad applicability.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – conradlocke, 190 likes, 0 downloads  
  A LoRA for Krea-2-Raw that enables identity-preserving image edits, popular in the ComfyUI ecosystem for character consistency.

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** – robbyant, 85 likes, 381 downloads  
  A video generation MoE model (30B total / 3B active) using the LingBotVideoPipeline in Diffusers, enabling efficient text-to-video.

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** – Alissonerdx, 101 likes, 0 downloads  
  An identity-preservation model for LTX video, enabling reference-based text-to-video generation with consistent faces.

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** – krea, 588 likes, 168K downloads  
  A faster variant of Krea-2-Raw text-to-image model, optimized for high-speed inference while maintaining quality.

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** – open-gigaai, 121 likes, 0 downloads  
  A large-scale image generation model in Diffusers, possibly for world-simulation or high-resolution output (Apache-2.0 licensed).

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** – unsloth, 1,049 likes, 2.90M downloads  
  A GGUF-quantized Qwen3.6 vision-language model (27B), the top-downloaded model this week, ideal for multimodal inference on consumer hardware.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – already listed in Language.

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)** – already listed.

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** – already listed (image-text-to-text).

---

## 🔧 Specialized Models

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** – Google, 349 likes, 20K downloads  
  Google’s TabFM (Tabular Foundation Model) for zero-shot classification and regression on tabular data, a rare entry in a domain dominated by text and vision.

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** – NVIDIA, 2,707 likes, 1.47M downloads  
  A 3B vision-language model for object localization and feature extraction, trending for its versatility in referring expression comprehension and visual grounding.

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** – OpenMOSS-Team, 110 likes, 12,817 downloads  
  An audio-text-to-text model that performs both transcription and speaker diarization in one pass, useful for meeting summarization and forensic audio.

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** – SupraLabs, 99 likes, 1,275 downloads  
  A tiny router model (51M) that can direct inputs to appropriate downstream LLMs or tools, supporting agent orchestration.

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** – froggeric, 852 likes, 0 downloads  
  Not a model but a crucial utility—a collection of corrected Jinja chat templates for Qwen models, fixing widespread template mismatches in the ecosystem.

- **[CohereLabs/cohere-transcribe-arabic-07-2026](https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026)** – CohereLabs, 90 likes, 7,687 downloads  
  A specialized automatic speech recognition model for Arabic, reflecting growing attention to multilingual and low-resource speech tasks.

---

## 📦 Fine-tunes & Quantizations

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – already listed in Multimodal.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – already listed in Language.

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** – already listed.

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** – unsloth, 142 likes, 38K downloads  
  A GGUF quantization of DeepSeek V4 Flash, made by unsloth for fast inference with vLLM and llama.cpp, referencing arXiv paper 2606.19348.

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** – already listed.

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** – already listed.

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** – already listed in Multimodal.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – already listed (fine-tuned base).

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** – already listed (base fine-tune).

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – already listed in Multimodal (LoRA fine-tune).

---

## 🌍 Ecosystem Signal

**MoE is the new normal.** Over a third of the top 30 models use Mixture-of-Experts (MoE) – from GLM-5.2, Qwen3.5 MoE, NVIDIA’s Audex and Puzzle, to Mistral’s Leanstral and the LingBot video model. The active-parameter count (e.g., 35B-A3B, 30B-A3B, 119B-A6B) is now a key selling point, promising frontier-level quality at a fraction of inference cost.

**Qwen 3.5→3.6 migration is in full swing.** At least 8 models reference Qwen 3.5/3.6, including the week’s most downloaded model (unsloth/Qwen3.6-27B-MTP-GGUF with 2.9M downloads). The ecosystem is rapidly adopting Qwen3.6 for its improved vision-language integration and instruction following.

**GGUF dominates local deployment.** Nearly every popular fine-tune now ships a GGUF variant, often surpassing the original in downloads. Unsloth and empero-ai have become key quantizers, enabling open-weight models to run on laptops and edge devices.

**NVIDIA and Google enter the open-weight space.** NVIDIA’s Nemotron models (LocateAnything-3B, Audex, Puzzle) and Google’s TabFM represent a shift away from purely proprietary deployment. These are production-ready but fully open (Apache 2.0 or custom licenses), likely to spur competition in specialized domains.

**Time to market is shrinking.** Fine-tunes of the latest base models (Qwen3.6, Gemma 4, DeepSeek V4) appear within days of release, often with merges and synthetic data (Claude, Opus), indicating a very active and responsive community.

---

## 💡 Worth Exploring

1. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** (2,707 likes)  
   A standout for its combination of high download count and low model size (3B). It offers strong visual grounding and localization out of the box, making it ideal for building multimodal agents without heavy compute.

2. **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** (349 likes)  
   One of the few zero-shot tabular foundation models available. Worth studying for anyone working on structured data problems where LLM-style generalization is needed for columns and rows.

3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** (1,049 likes, 2.9M downloads)  
   The most downloaded model this week, offering the latest Qwen vision-language capabilities in a user-friendly GGUF format. A natural starting point for experimenting with Qwen3.6’s multimodal and reasoning strengths on consumer hardware.

---

*Digest generated for 2026-07-12. All links are preserved as provided.*

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*