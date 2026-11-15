# Hugging Face 热门模型日报 2026-11-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-15 17:13 UTC

---

# Hugging Face 热门模型日报（2026-11-15）

## 今日速览

今日榜单由 Qwen3.8 家族主导：官方版 [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)、Flash 版 [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) 及 Unsloth 量化版均进入前列，衍生微调数量最多。MiniMax 同时布局图像与视频：图像模型 [MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image) 下载量达 57 万，视频模型 [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 下载量超 600 万。围绕 Qwen3.8 的"去审查/abliterated"微调（DavidAU、huihui-ai）热度突出，反映社区对无限制变体的持续需求。视觉侧，Facebook 的 [sam3](https://huggingface.co/facebook/sam3) 与 [dinov3](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m) 显示基础视觉模型仍具生命力。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 点赞 20,080 | 下载 6,547,772
  本周点赞最高的官方旗舰模型，面向图文对话的多模态大模型，下载量领先，是当日生态核心。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 点赞 7,145 | 下载 2,997,819
  Qwen3.8 系列轻量快速版本，主打高效多模态推理，下载量居前列。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai | 点赞 5,724 | 下载 460,551
  DeepSeek V4.1 系列 Flash 版本，多模态文本生成模型，与 DeepSeek 生态其他模型形成组合。

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** — moonshotai | 点赞 2,097 | 下载 46,766
  Kimi K3.1 专业版，采用 compressed-tensors 量化的多模态对话模型。

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** — NousResearch | 点赞 609 | 下载 7,497
  基于 Qwen3.5 的监督微调模型，Nous 研究风格，面向文本生成。

- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)** — thinkingmachines | 点赞 334 | 下载 7,329
  Inkling-2 系列小尺寸多模态对话模型，新家族试水之作。

- **[meituan-longcat/LongCat-2.5](https://huggingface.co/meituan-longcat/LongCat-2.5)** — meituan-longcat | 点赞 269 | 下载 1,573
  美团 LongCat 2.5 多模态大模型，主打长上下文与图文理解。

- **[Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4)** — Edge0 | 点赞 278 | 下载 41,606
  号称 145B 的 latent-MoE 模型，主打边缘推理与 NVFP4 格式。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** — MiniMaxAI | 点赞 1,162 | 下载 571,067
  MiniMax H3 图像版，支持文生图与图生图，当日下载最高图像模型之一。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 点赞 6,939 | 下载 6,057,372
  同系列视频模型，支持文生/图生视频，下载量突破 600 万，是本日视频方向最热模型。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 点赞 12,016 | 下载 2,754,355
  LTX 2.5 视频生成模型，覆盖图生视频、文生视频与视频转换，点赞数第二高。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs | 点赞 3,226 | 下载 1,182,267
  FLUX 3 图像版，主打图像编辑，提供 ComfyUI 单文件版本，便于本地集成。

- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)** — Zyphra | 点赞 375 | 下载 39,862
  ZONOS3 系列 TTS 模型，同时提供 safetensors 与 GGUF 版本。

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — higurashi-ai | 点赞 284 | 下载 2,098
  Haru 4B 全双工语音到语音模型，面向实时语音交互。

- **[adventists-ai/Sophon-Realtime-v1](https://huggingface.co/adventists-ai/Sophon-Realtime-v1)** — adventists-ai | 点赞 271 | 下载 0
  any-to-any 实时语音代理模型，强调全双工与副语言特征，尚处早期阶段（下载为 0）。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — speridlabs | 点赞 2,358 | 下载 33,423
  基于高斯泼溅的图像到 3D 模型，Apache-2.0 许可，3D 生成方向少见的上榜模型。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook | 点赞 6,638 | 下载 2,011,153
  SAM3 分割模型，支持视频掩码生成与特征提取，视觉基础模型代表。

- **[facebook/dinov3-vitl16-pretrain-lvd1689m](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m)** — facebook | 点赞 2,279 | 下载 687,007
  DINOv3 ViT-L/16 预训练图像特征提取模型，经典自监督视觉骨干。

- **[pyannote/speaker-diarization-community-1](https://huggingface.co/pyannote/speaker-diarization-community-1)** — pyannote | 点赞 4,418 | 下载 4,905,484
  pyannote 社区版说话人日志 pipeline，音频处理场景的高频工具，下载量近 500 万。

- **[Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage)** — Cactus-Compute | 点赞 314 | 下载 28,553
  面向图文理解与零样本目标检测的视觉模型。

- **[ConceptCountry/qwen-concept-27b](https://huggingface.co/ConceptCountry/qwen-concept-27b)** — ConceptCountry | 点赞 263 | 下载 63,964
  基于权重编辑的 27B 概念/推理模型，探索非微调式的模型改造路径。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic)** — xtools-at | 点赞 7,476 | 下载 27,037
  命名夸张的 Qwen3.5 9B 去审查变体，虽下载量不高但点赞数居前，社区关注度极高。

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 点赞 5,986 | 下载 6,566,295
  Qwen3.8-27B 的 Unsloth GGUF 量化版，下载量与原版持平，说明本地/量化部署需求强劲。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 点赞 3,151 | 下载 1,708,637
  Qwen3.8-27B 的极端命名社区微调 GGUF，结合 unsloth、heretic 与 MTP 优化。

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai | 点赞 2,162 | 下载 4,202,683
  Qwen3.8-27B 的 abliterated 去限制 GGUF 版本，下载量超 420 万，是量化微调最大赢家之一。

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** — DavidAU | 点赞 1,784 | 下载 2,139,859
  Qwen3.5-9B 的 heretic GGUF 微调，采用 NEO Imatrix 与 MTP 下载量可观。

- **[Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image)** — Comfy-Org | 点赞 407 | 下载 1,973,388
  MiniMax-H3-Image 的 ComfyUI 单文件版，下载量远超原版，凸显工作流集成需求。

- **[Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF)** — Abiray | 点赞 230 | 下载 127,803
  MiniMax-H3-Image 的 GGUF 量化版，面向本地图像生成。

- **[mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF)** — mradermacher | 点赞 295 | 下载 149,532
  Gemma-4-31B-it 的 heretic 去审查 GGUF 量化版本。

- **[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)** — chatrlabs | 点赞 309 | 下载 120,618
  Qwen-Image-2.1 的去审查量化版本，支持文生图。

## 生态信号

Qwen3.8 家族是本周绝对中心：官方 27B、Flash-Next 及 Unsloth 量化版同时上榜，社区围绕它产出了 DavidAU、huihui-ai 等多个去审查微调，形成"官方模型→量化→去限制微调"的完整链条。MiniMax H3 在图像与视频双线并进，视频版下载超 600 万，显示开源视频生成需求旺盛。开源权重明显压过闭源：榜单几乎全为可下载权重，量化（GGUF/unsloth）与 ComfyUI 单文件版下载量常超过原件，说明本地部署是主要消费方式。值得警惕的是"heretic/abliterated/uncensored"类命名的去审查微调占比很高，社区对无限制变体的追逐已成稳定现象。

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态锚点，官方多模态旗舰，搭配 [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) 可快速本地部署，是理解整个 Qwen3.8 微调生态的起点。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖图生视频、文生视频与视频转换的统一视频模型，点赞数第二高而下载量适中，适合研究开源视频生成的新基线。

3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 支持视频掩码生成的分割基础模型，下载超 200 万，是视觉分割与视频理解任务的高价值通用工具。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*