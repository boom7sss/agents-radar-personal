# Hugging Face 热门模型日报 2026-11-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-18 18:52 UTC

---

# Hugging Face 热门模型日报（2026-11-18）

## 今日速览

今日榜单由 Qwen3.8-27B 家族主导：原版（20,545 赞）、unsloth 的 GGUF 量化版（6,180 赞）与 DavidAU 的社区微调版（3,339 赞）同时上榜，生态扩散极为显著。视频与图像生成持续走热：Lightricks/LTX-2.5 以 12,520 赞、287 万下载高居下载前列，FLUX 3 的 ComfyUI 版本与 SAM3 也都获得了可观的关注。量化与 ComfyUI 打包版正在成为上游模型的第二增长曲线：它们围绕 MiniMax-H3-Image 产生了多个社区分叉版本。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜赞 20,545｜下载 6,888,351
  这是 Qwen3.8 系列的 27B 多模态对话主干模型，也是今日点赞数最高的模型，下载量也位居前列。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai｜赞 5,904｜下载 492,972
  这是 DeepSeek V4.1 的 Flash 轻量版本，同时支持文本与图像输入，兼具高关注度和实际部署量。

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** — NousResearch｜赞 708｜下载 12,167
  这是基于 Qwen3.5 架构、经过监督微调的 27B 模型，代表了社区对基座模型的指令化改造。

- **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)** — nvidia｜赞 549｜下载 163,423
  这是 Nemotron 3.5 的 4GB 小体量版本，主打低资源部署，并提供 GGUF。

- **[Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4)** — Edge0｜赞 520｜下载 73,309
  这是 145B 的 MoE 模型，采用 NVFP4 精度，定位边缘推理。

- **[maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash)** — maxwell-model｜赞 219｜下载 1,052
  这是 MoE 架构的对话模型新发布，下载量仍然很低，尚处于早期。

- **[tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash)** — tencent｜赞 213｜下载 159
  这是腾讯混元 Hy4 Flash 版本，刚发布，关注度尚待观察。

- **[sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B)** — sensenova｜赞 319｜下载 964
  这是商汤 Loop 系列 9B 多模态模型，体量小，适合研究。

- **[internlm/Sage-S2.1-Flash](https://huggingface.co/internlm/Sage-S2.1-Flash)** — internlm｜赞 132｜下载 678
  这是书生 Sage S2.1 Flash 版本，标签中指向 glm5 架构，属于新发布，数据较少。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜赞 12,520｜下载 2,871,190
  这是 LTX 2.5 视频生成单文件模型，支持图生视频、文生视频与视频生视频，下载量在今日居高。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook｜赞 6,944｜下载 1,955,213
  这是 SAM3 分割与掩码生成模型，支持视频场景，是视觉基础模型的重要更新。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs｜赞 3,466｜下载 1,037,285
  这是 FLUX 3 图像生成与编辑的 ComfyUI 打包版。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — speridlabs｜赞 2,476｜下载 37,179
  这是图像到 3D 的 Gaussian Splatting 模型，属于 3D 生成方向的高赞新作。

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** — MiniMaxAI｜赞 1,574｜下载 759,661
  这是 MiniMax H3 图像生成与编辑模型的原版。

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — higurashi-ai｜赞 639｜下载 5,314
  这是 4B 的全双工语音到语音模型，属于实时对话语音方向。

- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)** — Zyphra｜赞 540｜下载 114,126
  这是 ZONOS3 TTS 的小型版本，提供 safetensors 与 GGUF 两种格式。

- **[Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage)** — Cactus-Compute｜赞 441｜下载 39,750
  这是面向目标检测的多模态模型。

- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)** — thinkingmachines｜赞 484｜下载 30,082
  这是 Inkling-2 的小型多模态对话模型。

- **[meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6)** — meituan-longcat｜赞 252｜下载 1,226
  这是音频与文本驱动的数字人视频生成模型 1.6 版本。

- **[HuggingFaceTB/SmolVLM2-256M-Video-Instruct](https://huggingface.co/HuggingFaceTB/SmolVLM2-256M-Video-Instruct)** — HuggingFaceTB｜赞 205｜下载 43,594
  这是 256M 超小体量的视频指令多模态模型。

- **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)** — apple｜赞 188｜下载 0
  这是苹果的文生视频模型，基于 Wan2.1-T2V-14B 微调而来，附有 arXiv 论文；目前下载量仍为 0，刚刚上线。

- **[briaai/RMBG-3.0](https://huggingface.co/briaai/RMBG-3.0)** — briaai｜赞 95｜下载 42
  这是 RMBG 3.0 背景移除与抠图模型，属新发布早期。

- **[KORMo-VL/KORMo-Web-11B](https://huggingface.co/KORMo-VL/KORMo-Web-11B)** — KORMo-VL｜赞 102｜下载 277
  这是基于 LLaVA-OneVision 的 11B GUI Agent 多模态模型。

- **[n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca)** — n4ze3m｜赞 279｜下载 4,430
  这是轻量英文 TTS 模型，提供 ONNX 与 GGUF 格式。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** — harness-hub｜赞 366｜下载 377
  这是采用 PEFT 与 GRPO/异步 GRPO 训练的适配版本，偏向强化学习后训练研究。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth｜赞 6,180｜下载 6,998,076
  这是 Qwen3.8-27B 的官方来源 GGUF 量化版，下载量与基座模型相当，是今日量化主线。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜赞 3,339｜下载 1,773,418
  这是基于 unsloth 微调而成的社区 GGUF 魔改版，走“去审查 + Coder”路线。

- **[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)** — chatrlabs｜赞 602｜下载 224,306
  这是 Qwen-Image-2.1 的量化去审查版本。

- **[Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image)** — Comfy-Org｜赞 550｜下载 2,950,724
  这是 MiniMax-H3-Image 的 ComfyUI 打包版，其下载量远超原版。

- **[Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF)** — Abiray｜赞 317｜下载 225,215
  这是 MiniMax-H3-Image 的社区 GGUF 量化版。

## 生态信号

Qwen3.8-27B 是今日无可争议的中心：原版、unsloth 的 GGUF 量化版与 DavidAU 的社区微调版同时挤进前三，形成了“基座 → 量化 → 魔改”的完整链条，说明头部开源模型的生态扩散速度已非常快。图像侧，MiniMax-H3-Image 同样衍生出 ComfyUI 打包版与 GGUF 版，其中打包版的下载量（295 万）远超原版（76 万），表明实际使用场景正在向 ComfyUI 等工作流工具迁移。视频生成（LTX-2.5、FastFrames-L）与 3D 生成（idol）保持高热，语音全双工（Haru-4B）也显示出新方向。量化活动高度集中于 GGUF，NVFP4 也开始在边缘推理场景出现。

## 值得探索

1. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 视觉基础模型的重要迭代，支持视频掩码生成，下载量与点赞数均处高位，适合视觉分割与下游应用研究者优先测试。
2. **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — 4B 全双工语音到语音模型，体量小，定位实时对话，在语音交互方向上值得作为实验基线。
3. **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)** — 基于 Wan2.1-T2V-14B 微调、附有论文的文生视频模型，目前下载量为 0，处于极早期，适合研究者抢先评估其方法细节。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*