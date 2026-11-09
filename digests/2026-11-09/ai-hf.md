# Hugging Face 热门模型日报 2026-11-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-09 20:48 UTC

---

# Hugging Face 热门模型日报（2026-11-09）

## 今日速览

本周榜单由 Qwen 家族主导：官方 Qwen3.8-27B 以 19,478 点赞、750 万下载稳居头部，围绕 Qwen3.8-Flash-Next 的量化、微调与转写版本密集出现。视频生成是另一大热点，Lightricks 的 LTX-2.5 以 11,246 点赞、272 万下载成为本周最受欢迎的多模态模型。轻量化语音、3D 与姿态、语音专用模型（NVIDIA Nemotron 系列中的 Transcribe）同样受到关注，facebook/sam3 则以 6,172 点赞显示视觉基础模型持续走强。社区侧，“uncensored/heretic/abliterated” 微调与 GGUF 量化仍是点赞与下载的主要驱动力之一。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** — moonshotai｜1,786 赞｜27,926 下载
  面向图文理解与生成的 Kimi 旗舰版本，采用压缩张量（compressed-tensors），属于厂商主力更新。

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜19,478 赞｜7,508,158 下载
  本周热度与下载量双冠，Qwen 官方旗舰多模态对话模型，是全榜生态的“基座核心”。

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** — NousResearch｜351 赞｜2,407 下载
  基于 Qwen3.5 的监督微调模型，体现研究机构对开源基座的再训练兴趣。

- **[webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B)** — webAI-Official｜250 赞｜34,546 下载
  基于 Granite 的 8B 文本生成模型，同时提供 GGUF，主打轻量部署。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** — LiquidAI｜1,569 赞｜78,750 下载
  1.7B 小参数模型获高关注，反映边缘侧高效模型的持续需求。

- **[baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)** — baidu｜236 赞｜1,699 下载
  百度 ERNIE 5.5 的 MoE 基座，属国内厂商开源动作。

- **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** — tencent｜144 赞｜1,464 下载
  基于 Qwen3.8-27B 的投机解码草稿模型（DSpine），用于加速推理。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜11,246 赞｜2,720,096 下载
  支持图生视频、文生视频、视频生视频的扩散模型，本周视频生成领域最热，下载量极高。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — speridlabs｜1,591 赞｜24,747 下载
  基于高斯泼溅的图生 3D 模型，给 3D 重建带来新玩法。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs｜2,814 赞｜1,203,472 下载
  FLUX 3 的 ComfyUI 单文件版本，主打图像生成与编辑，下载量破百万。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — nvidia｜3,121 赞｜69,992 下载
  基于 NeMo 的语音识别模型，30B 总参数但激活量较小，语音专用模型获得高赞。

- **[PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy)** — PrunaAI｜263 赞｜704,467 下载
  文本到图像单文件模型，适配 ComfyUI，下载量显著高于点赞。

- **[PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image)** — PrunaAI｜183 赞｜1,016 下载
  同系列的 Diffusers 原生版本，供非 ComfyUI 用户使用。

- **[abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized)** — abenzerps｜5,750 赞｜89,977 下载
  Qwen-Image 2.1 的量化版（GGUF、ComfyUI），并以高点赞位列生成类前段。

- **[Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake)** — Viggle｜227 赞｜97,356 下载
  基于 minimax-h3 的视频编辑/角色替换模型，提供 GGUF。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)** — Pika-Labs｜527 赞｜1,083 下载
  图生视频、音视频联合生成模型，属 Pika 的新版本。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook｜6,172 赞｜2,004,798 下载
  支持视频的 SAM3 掩码生成/特征提取模型，下载量突破 200 万，视觉基础模型热度高。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai｜5,429 赞｜312,293 下载
  DeepSeek 官方 V4.1 Flash 多模态模型，是本周官方发布中点赞最高的之一。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — ccore｜944 赞｜289,466 下载
  面向 Three.js、3D 代码生成的 Qwen3.5-4B 微调版，同时提供 GGUF，下载量亮眼。

- **[ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder)** — ccore｜285 赞｜38,696 下载
  同系列面向 GLB（3D 模型格式）的代码生成版本。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.8-27B-TURBO-...-Heretic-Uncensored-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜2,763 赞｜1,530,688 下载
  社区高热度 uncensored GGUF 微调，标签堆叠夸张，体现出“命名即营销”的现象，下载量破 150 万。

- **[xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic)** — xtools-at｜1,023 赞｜11,755 下载
  Qwen3.5-9B 的 uncensored 微调版，采用 image-text-to-text 与 TGI。

- **[mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF)** — mradermacher｜210 赞｜217,408 下载
  对上述模型的 i1 GGUF 量化，下载量远高于原模型，说明量化是主要分发渠道。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth｜1,552 赞｜1,694,090 下载
  Qwen3.8-Flash-Next 官方基座的 unsloth GGUF 量化，下载量近 170 万。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — SC117｜806 赞｜4,215,003 下载
  abliterated 去审查 + GSQ/RCO 量化的 GGUF，本周下载量全榜最高，量化链路的头部。

- **[Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF)** — Scantist｜1,295 赞｜7,884 下载
  GLM-5.3 的 MoE 精简 GGUF 版本，走 llama.cpp 路线。

- **[AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF)** — AtomicChat｜400 赞｜137,288 下载
  DeepSeek V4.1 Flash 的 uncensored 量化版本，下载量可观。

- **[autotrust/Qwen3.8-Flash-Next-E384-FP4-V2](https://huggingface.co/autotrust/Qwen3.8-Flash-Next-E384-FP4-V2)** — autotrust｜2,373 赞｜46,017 下载
  Qwen3.8-Flash-Next 的 FP4 量化、vLLM 版本，点赞位居量化类前列。

- **[FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3)** — FusionCow｜426 赞｜1,022 下载
  基于 MiniMax-H3 的社区微调，作为生成模型社区微调的样本。

- **[ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview)** — ricursiveAI｜446 赞｜5,835 下载
  65B 自定义代码模型预告版，任务未标注，值得进一步核实。

## 生态信号

Qwen 生态无疑是本周最强信号：官方 Qwen3.8-27B 大幅领先，Qwen3.8-Flash-Next 衍生出 GGUF、FP4、abliterated、3D-Coder、投机解码等多条支线和多种量化版本。生成侧，视频（LTX-2.5）与视觉基础模型（SAM3）双双领先，显示多模态需求正从图像走向视频与分割。开源权重仍占主导，DeepSeek、Kimi、ERNIE、Nemotron 均以开源方式发布。量化方面，GGUF（含 GSQ/RCO）与 FP4 是主流，并且经常出现“派生量化版本的下载量远超原模型的”现象，说明工具链和社区分发能力正在决定实际使用量。uncensored/heretic 系微调依旧活跃，是点赞与下载的重要来源。

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖图生视频、文生视频、视频生视频，下载量 272 万，是当前开源视频生成的实用首选。
2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 它是本周生态的基座核心；研究其官方能力以及下游微调、量化路径，性价比最高。
3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 支持视频的掩码生成与特征提取，下载量突破 200 万，适合作为视觉与视频理解管线的基础组件。

> 说明：以上内容均基于所给榜单数据整理，未补充外部事实；任务标注为 N/A 的模型（如 Ripple-65B-Preview、Sulphur-3、ccore 的 3D-Coder 部分版本）已按标签谨慎描述其用途。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*