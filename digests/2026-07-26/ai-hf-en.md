# Hugging Face Trending Models Digest 2026-07-26

> Source: [Hugging Face Hub](https://huggingface.co/) | 30 models | Generated: 2026-07-26 03:34 UTC

---

Here is the structured digest based on the current Hugging Face trending models.

---

## Hugging Face Trending Models Digest – 2026-07-26

### 1. Today's Highlights

The week is dominated by the **Qwen 3.6 MoE ecosystem**, with the base model from Qwen and multiple high-download community quantizations (Uncensored, Aggressive, Hermes) occupying the top of the charts. The **GLM-5.2** series from Zhipu AI (zai-org) has emerged as the single most-liked model this week, signaling strong interest in their new Mixture-of-Experts architecture. **Quantization remains the dominant use case**: GGUF and NVFP4 variants of Laguna, Bonsai, and Qwen 3.6 collectively account for millions of downloads. On the application side, **vision-language models (VLMs) with OCR capabilities** are gaining traction, with Baidu's Unlimited-OCR and ATH-MaaS's OvisOCR2 seeing notable adoption. Finally, **robotics VLAs (Vision-Language-Action)** from OpenBMB represent a small but meaningful new category entering the mainstream.

### 2. Trending Models

#### 🧠 Language Models (LLMs, chat models, instruction-tuned)

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – zai-org | 4,448 likes | 707K downloads
  The week's most-liked model: a MoE-based conversational LLM from Zhipu AI, trending for its performance-per-parameter ratio and broad reasoning capabilities.

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** – poolside | 664 likes | 45K downloads
  A text-generation model fine-tuned for software engineering workflows, leading a family of official quantizations (GGUF, NVFP4) that are widely adopted.

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** – upstage | 567 likes | 2.8K downloads
  A large 250B-parameter open-weight LLM, notable for its scale and placement in the open-weight leaderboard race.

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** – Nanbeige | 406 likes | 11.5K downloads
  A compact 3B text-generation model optimized for low-latency inference, gaining traction for edge and mobile deployment.

- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** – Motif-Technologies | 191 likes | 2.3K downloads
  A feature-extraction and generation model from a new player, attracting attention for its novel architecture and embedding quality.

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** – fdtn-ai | 166 likes | 5.7K downloads
  A 1B-parameter Granite-MoE-Hybrid model focused on security use cases, representing a push toward small, specialized safety LLMs.

#### 🎨 Multimodal & Generation (image, video, audio, text-to-X)

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – baidu | 3,108 likes | 2.56M downloads
  A high-performance OCR model handling unlimited-length text extraction from images, trending due to its practical utility and massive download count.

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** – thinkingmachines | 1,572 likes | 31.6K downloads
  A conversational image-text-to-text model optimized for interactive vision-language dialogue, standing out for its strong multimodal chat quality.

- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** – microsoft | 277 likes | 1.2K downloads
  A text-to-image diffusion model supporting image editing and generation, representing Microsoft's latest entry in the image-generation space.

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** – openbmb | 175 likes | 607 downloads
  A Vision-Language-Action (VLA) model for robotic manipulation, pioneering a new pipeline category on the Hub with a fine-tuned MiniCPM backbone.

- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** – openbmb | 128 likes | 379 downloads
  A companion VLA model for robotic object tracking, extending the MiniCPM family into embodied AI.

- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)** – nvidia | 121 likes | 31.8K downloads
  A diffusion-based model from NVIDIA for edge device video generation, leveraging their Cosmos architecture for efficient on-device inference.

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** – owensong | 88 likes | 47 downloads
  A lightweight text-to-speech model designed for CPU and edge-AI deployment, gaining early interest for local speech synthesis.

#### 🔧 Specialized Models (code, math, medical, embeddings)

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** – Kwaipilot | 168 likes | 841 downloads
  A code-generation model built on the Qwen 3.5 MoE architecture, targeting developer productivity and code understanding.

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** – moonshotai | 1,277 likes | 749K downloads
  A compressed Moonshot model specialized for coding, with strong adoption as a lightweight code assistant.

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** – microsoft | 93 likes | 1K downloads
  A vision-language model fine-tuned for **computer-use** (GUI agent tasks), signaling a growing trend toward multimodal models for UI automation.

#### 📦 Fine-tunes & Quantizations (community fine-tunes, GGUF, AWQ)

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** – prism-ml | 1,029 likes | 612K downloads
  An extreme 2-bit ternary quantization of Bonsai-27B using llama.cpp, pushing the frontier of compression at the cost of precision.

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – prism-ml | 638 likes | 2.11M downloads
  A 1-bit GGUF quantization of the Bonsai-27B model, the single most-downloaded model on today's list due to its ultra-low memory footprint.

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** – empero-ai | 2,466 likes | 1.57M downloads
  A highly popular GGUF community fine-tune combining Qwen 3.5 with a Claude-Mythos-5 reasoning dataset, one of the top-downloaded quantized models.

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** – HauhauCS | 3,093 likes | 1.99M downloads
  An uncensored, aggressively fine-tuned version of Qwen 3.6 MoE, driving massive community adoption for roleplay and unconstrained generation.

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** – DavidAU | 548 likes | 484K downloads
  A heavily merged GGUF fine-tune of Qwen 3.6, notable for its extreme naming convention and high download count among "uncensored" variants.

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** – ATH-MaaS | 287 likes | 33K downloads
  A Qwen 3.5-based vision-language model fine-tuned specifically for OCR tasks, filling a niche competing with Baidu's Unlimited-OCR.

- **[baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4)** – baseten | 100 likes | 2K downloads
  An NVFP4-quantized multimodal version of GLM-5.2, providing efficient inference for vision-language workloads via SGLang.

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** – bottlecapai | 551 likes | 27K downloads
  A fine-tune of Qwen 3.6 designed to encourage chain-of-thought reasoning, part of the broader "thinking model" trend.

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF)** – LuffyTheFox | 153 likes | 60.6K downloads
  Another community GGUF variant of Qwen 3.6 uncensored, using the Hermes V5 dataset—part of a crowded fine-tune landscape.

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** – conradlocke | 539 likes | 0 downloads
  A LoRA for identity-consistent image editing using Krea-2, trending for its zero-dowload count (uploaded very recently) and strong initial community interest.

- **[poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4)** – poolside | 135 likes | 117K downloads
  Official NVFP4 quantization of Laguna-S-2.1, enabling fast vLLM inference for the popular code model.

- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** – unsloth | 187 likes | 72K downloads
  Community GGUF quantization of Laguna-S-2.1 using Unsloth, lowering the barrier for local deployment.

- **[poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)** – poolside | 143 likes | 77K downloads
  The official GGUF version of Laguna-S-2.1, enabling CPU-based inference for the poolside model.

### 3. Ecosystem Signal

The most significant trend is the **dominance of MoE (Mixture-of-Experts) architectures**, particularly the Qwen 3.6 and GLM-5.2 families. Both 4.4K-liked GLM-5.2 and 2.5K-liked Qwen 3.6-35B are MoE models, and they are spawning dozens of community fine-tunes. This confirms that **sparse activation is the preferred path to scaling** without proportional compute cost. Quantization continues to dominate the download charts: 9 of the top 20 most-downloaded models are GGUF or NVFP4 variants. The **"uncensored" fine-tune sub-ecosystem** remains highly active, especially around Qwen 3.6, where variants from HauhauCS, DavidAU, and LuffyTheFox are each driving hundreds of thousands of downloads. On the open-weight vs. proprietary front, the Hub is seeing strong activity from Chinese labs (Zhipu's GLM, Alibaba's Qwen, Moonshot's Kimi) alongside Western players (Poolside, Upstage, Microsoft), indicating a **geographically diverse open-weight race**. Finally, the emergence of **robotics VLAs (MiniCPM-RobotManip/Track)** and **computer-use models (Fara1.5-27B)** points to a growing interest in models that can directly interact with the physical and digital world, not just generate text.

### 4. Worth Exploring

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** – This is the single highest-liked model on the list and the flagship of Zhipu AI's next-generation MoE architecture. It is worth studying both for its technical design (dense-to-sparse MoE, post-training optimization) and for its conversational performance that rivals much larger dense models.

2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** – With over 2.5 million downloads, this is the most downloaded VLM on the list. It represents a clear trend: the commoditization of high-quality OCR into a single, unlimited-length model. It is a strong candidate for real-world document processing pipelines and for studying how vision-language models can be specialized for a single practical skill.

3.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** – Despite being a 1-bit quantization (extreme compression), this model has over 2.1 million downloads. It is a case study in the trade-off between quality and accessibility: it proves that the community is willing to accept significant quality loss for the ability to run a 27B-class model on consumer hardware. For anyone interested in quantization research and model deployment, this is an essential data point.

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*