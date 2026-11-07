# Hugging Face 热门模型日报 2026-11-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-07 16:28 UTC

---

# Hugging Face 热门模型日报（2026-11-07）

## 今日速览

今日榜单由生成式多模态模型主导：Lightricks 的 LTX-2.5 以 10,936 点赞、264 万下载稳居榜首，Qwen3.8-27B（19,324 赞）则是点赞最高的单品。Meta 的 facebook/sam3 以近 195 万下载显示出分割基础模型的持续强势。语言模型侧，Kimi-K3.1-Pro、DeepSeek-V4.1-Flash-1017、Mistral-Large-4 等新旗舰集中亮相，并普遍同步放出量化与社区微调版本。量化生态依旧活跃，unsloth、ISTA-DASLab、AtomicChat 等基于 DeepSeek-V4.1 与 Qwen3.8 的 GGUF 变体下载量可观。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** — moonshotai｜1,605 赞｜22,571 下载
  月之暗面的新一代 kimi_k31 文本生成模型，采用 compressed-tensors 压缩格式，是本周最受关注的新旗舰 LLM 之一。

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜19,324 赞｜7,813,215 下载
  阿里 Qwen3.8 系列 27B 多模态对话模型，点赞与下载双双领先，稳居榜单人气核心。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai｜5,382 赞｜277,323 下载
  深度求索 V4.1 Flash 官方版本，兼顾文本与图文理解，是本周衍生量化与微调生态的母模型。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)** — mistralai｜1,633 赞｜11,206 下载
  Mistral 新一代大模型，标注支持 vLLM 与 SGLang，属于面向推理部署的旗舰级发布。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** — LiquidAI｜1,544 赞｜70,034 下载
  Liquid AI 的轻量 lfm3 文本生成模型，填补了本周小参数模型的关注度。

- **[webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B)** — webAI-Official｜204 赞｜15,324 下载
  基于 granite 的 8B 文本生成模型，同时提供 transformers 与 GGUF 权重。

- **[sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview)** — sensenova｜268 赞｜3,306 下载
  商汤的多模态文本生成预览模型，主打 multimodal 能力。

- **[baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)** — baidu｜219 赞｜971 下载
  百度 ERNIE 5.5 MoE 基础模型，是本周国产 MoE 路线的新样本。

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** — NousResearch｜165 赞｜989 下载
  基于 Qwen3.5 的监督微调模型，代表社区微调侧的常规发布。

- **[ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview)** — ricursiveAI｜361 赞｜3,803 下载
  65B 参数的自研架构预览模型，带 custom_code，属早期探索性发布。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜10,936 赞｜2,643,778 下载
  覆盖图/文/视频互转的单一文件扩散模型，双料榜首，是本周绝对的现象级生成模型。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook｜6,039 赞｜1,952,223 下载
  Meta 的 Segment Anything 3，支持 sam3_video 与特征提取，下载量逼近 200 万。

- **[abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized)** — abenzerps｜5,703 赞｜65,099 下载
  Qwen-Image 2.1 的 Turbo 量化版，兼容 ComfyUI GGUF 工作流。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs｜2,667 赞｜1,143,397 下载
  BFL 面向 ComfyUI 的 FLUX 3 图像生成/编辑单文件模型，下载量破百万。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — nvidia｜3,090 赞｜63,798 下载
  NVIDIA 基于 NeMo 的 30B-A4B 语音转写模型，是本周最受关注的 ASR 发布。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)** — Pika-Labs｜505 赞｜1,083 下载
  Pika 的视频（含音视频联合）生成 LoRA，基于 diffusers 发布。

- **[PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy)** — PrunaAI｜228 赞｜505,526 下载
  PrunaAI 面向 ComfyUI 的文生图/图生图单文件模型，下载与点赞明显背离。

- **[PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image)** — PrunaAI｜157 赞｜789 下载
  同系列的 diffusers 标准权重版本，供非 ComfyUI 流程使用。

- **[Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air)** — Edge0｜346 赞｜14,103 下载
  基于 arktts 的文本转语音模型，主打真实音色。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — speridlabs｜1,051 赞｜20,689 下载
  基于高斯泼溅的图生 3D 模型，Apache-2.0 开源，是本周 3D 方向的热点。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — ccore｜848 赞｜221,506 下载
  面向 Three.js 的 3D 代码生成模型，同时提供 safetensors 与 GGUF，下载量远超点赞。

- **[ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder)** — ccore｜242 赞｜24,479 下载
  同系列面向 GLB 格式的文本生成变体，属细化场景版本。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜2,633 赞｜1,545,313 下载
  DavidAU 基于 Qwen3.8 的去审查 GGUF 微调，下载超 150 万，是本周社区微调中最有存在感的一个。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth｜1,498 赞｜1,423,501 下载
  unsloth 出品的 Qwen3.8-Flash-Next 量化版，下载量印证了官方模型 + 高效 GGUF 的组合价值。

- **[AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF)** — AtomicChat｜364 赞｜117,016 下载
  DeepSeek V4.1 的去审查 GGUF 变体，采用 GSQ 量化。

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF)** — ISTA-DASLab｜190 赞｜243,190 下载
  学术机构发布的 DeepSeek V4.1 coder 量化版，点赞低但下载量高，显示实际使用性强。

- **[OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated)** — OBLITERATUS｜272 赞｜3,835 下载
  DeepSeek V4.1 的“去除审查”微调版本，为 safetensors 格式。

- **[xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic)** — xtools-at｜360 赞｜1,369 下载
  混合命名的去审查文本生成微调，反映了命名标注依然混乱。

- **[FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3)** — FusionCow｜403 赞｜997 下载
  基于 MiniMax-H3 的微调模型，属小体量社区发布。

- **[burner22/numbat](https://huggingface.co/burner22/numbat)** — burner22｜377 赞｜9,212 下载
  8-bit modelopt 量化 + custom_code 的自研模型。

---

## 生态信号

本周最明显的信号是旗舰模型的“母模型 + 衍生层”结构：DeepSeek-V4.1-Flash 官方版之外，AtomicChat、ISTA-DASLab、OBLITERATUS 三个方向（去审查、Coder、微调）同时上榜；Qwen3.8 同样被 DavidAU、unsloth 衍生出多个高位 GGUF 版本。模型家族层面，Qwen（含 ccore 的 3D Coder 系列）、DeepSeek、FLUX/Pika/Pruna 图像视频线势头最强。开源权重仍是下载主力，旗舰大模型几乎同步公开权重并配套 vLLM/SGLang 部署选项。“去审查/heretic”类微调持续高频出现，且下载规模不小，是社区释放方向上的显著特征；GGUF 与 8-bit 量化仍是把大模型推向实际使用的主要通道。

---

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 单文件覆盖图/文/视频互转，点赞与下载双料第一，适合作为统一视频生成基线来评测。

2. **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — 下载超 142 万，是观察“官方多模态模型 + 高效 GGUF”落地效果的典型样本。

3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — sam3_video 与特征提取双用途，下载规模证明其作为通用分割基础设施的价值，值得作为下游任务的默认组件评估。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*