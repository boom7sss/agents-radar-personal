# Hugging Face 热门模型日报 2026-11-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-03 17:53 UTC

---

# Hugging Face 热门模型日报（2026-11-03）

## 今日速览

今日榜首由 Qwen/Qwen3.8-27B 领跑（1.9 万点赞、801 万下载），多模态图像-文本理解成为最强主线。视频生成侧 Lightricks/LTX-2.5 以 1,0458 点赞、248 万下载稳居热度前列，图像编辑/生成衍生量化版（Qwen-Image-2.1-Uncensored-Quantized）也突破 5600 点赞。LiquidAI 一次性铺开 LFM3 全系列（文本、GGUF、Omni、VL、Audio、d1），形成明显的家族化发布节奏。DeepSeek-V4.1-Flash-1017 则带动一批社区微调与 GGUF 扩散。开源权重与社区量化/去审查活动同步活跃。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  作者 Qwen｜点赞 19,058｜下载 8,014,877
  通义新一代 27B 多模态对话模型，今日榜单绝对热度第一，下载量远超同榜，是当前最受关注的开源基座之一。

- **LiquidAI/LFM3-1.7B** — https://huggingface.co/LiquidAI/LFM3-1.7B
  作者 LiquidAI｜点赞 1,377｜下载 47,817
  Liquid 新一代 LFM3 小参数文本模型，带动整个 LFM3 家族上榜，是本周点赞增长最快的开源小模型。

- **Nanbeige/Nanbeige4.3-33B** — https://huggingface.co/Nanbeige/Nanbeige4.3-33B
  作者 Nanbeige｜点赞 1,020｜下载 17,839
  南贝 33B 通用 LLM，基于 LLaMA 架构，属稳健型开源权重发布。

- **RecursiveSI/flint** — https://huggingface.co/RecursiveSI/flint
  作者 RecursiveSI｜点赞 1,318｜下载 32,677
  对话向文本生成模型，点赞数在非头部实验室中格外突出。

- **Diffuspace/Clover-35B-A3B-Preview** — https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview
  作者 Diffuspace｜点赞 233｜下载 3,017
  35B MoE（激活 3B）预览版文本模型，代表轻量 MoE 路线的新尝试。

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  作者 Lightricks｜点赞 10,458｜下载 2,488,128
  覆盖图生视频、文生视频、视频生视频的扩散模型，今日视频生成类热度与下载双冠。

- **deepseek-ai/DeepSeek-V4.1-Flash-1017** — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
  作者 deepseek-ai｜点赞 4,827｜下载 187,260
  DeepSeek V4.1 Flash 多模态图像-文本模型，同时催生大量社区微调。

- **mistralai/Mistral-Large-4-1T-A52B** — https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B
  作者 mistralai｜点赞 1,530｜下载 6,556
  1T 参数、52B 激活的多模态大模型，支持 vLLM/SGLang，下载量低但关注度高。

- **baidu/Unlimited-OCR-2** — https://huggingface.co/baidu/Unlimited-OCR-2
  作者 baidu｜点赞 583｜下载 189,897
  百度 OCR 二代图像-文本模型，下载量远超点赞，属实用型高频调用模型。

- **black-forest-labs/flux-3-image-klein-comfy** — https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy
  作者 black-forest-labs｜点赞 2,402｜下载 1,032,077
  FLUX 3 图像编辑模型 ComfyUI 单文件版，百万级下载说明其工作流生态成熟。

- **speridlabs/idol** — https://huggingface.co/speridlabs/idol
  作者 speridlabs｜点赞 487｜下载 10,742
  基于高斯泼溅的图像转 3D 模型，是榜单中少见的 3D 生成代表。

- **Pika-Labs/Pika-H3-Flex** — https://huggingface.co/Pika-Labs/Pika-H3-Flex
  作者 Pika-Labs｜点赞 383｜下载 633
  音视频联合生成的视频模型（含 LoRA），处于早期热度积累阶段。

- **LiquidAI/LFM3-Omni-2B** — https://huggingface.co/LiquidAI/LFM3-Omni-2B
  作者 LiquidAI｜点赞 331｜下载 11,662
  LFM3 家族 any-to-any 全能小模型，是家族铺量的核心成员。

- **LiquidAI/LFM3-VL-2B** — https://huggingface.co/LiquidAI/LFM3-VL-2B
  作者 LiquidAI｜点赞 226｜下载 11,153
  LFM3 视觉-语言小模型，面向端侧多模态。

- **sensenova/SenseNova-Loop-9B-Preview** — https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview
  作者 sensenova｜点赞 201｜下载 2,221
  商汤 Loop 9B 多模态预览模型。

- **xiaomi-research/Xiaomi-OCR-0** — https://huggingface.co/xiaomi-research/Xiaomi-OCR-0
  作者 xiaomi-research｜点赞 259｜下载 20,802
  小米首发的 OCR 多模态模型，标注为 qwen3_5 架构。

- **LiquidAI/LFM3-Audio-2B** — https://huggingface.co/LiquidAI/LFM3-Audio-2B
  作者 LiquidAI｜点赞 204｜下载 7,069
  LFM3 音频 any-to-any 模型，补齐家族音频能力。

- **LiquidAI/d1-2B** — https://huggingface.co/LiquidAI/d1-2B
  作者 LiquidAI｜点赞 199｜下载 5,952
  LFM3-VL 架构衍生模型，走特征提取路线。

- **Efficient-Large-Model/Open-H3-Regenerate-2K** — https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K
  作者 Efficient-Large-Model｜点赞 200｜下载 413,605
  基于 MiniMax-H3 的视频精修（video-refinement）LoRA，下载量显著高于点赞。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **facebook/sam3** — https://huggingface.co/facebook/sam3
  作者 facebook｜点赞 5,778｜下载 1,891,393
  SAM 3 分割/掩码生成模型，含 sam3_video 能力，是视觉基础模型中的高热代表。

- **ccore/Qwen3.5-4B-3D-Coder** — https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder
  作者 ccore｜点赞 591｜下载 91,123
  面向 Three.js/3D 场景的代码专用模型，提供 safetensors 与 GGUF，下载量颇高。

- **nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B** — https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B
  作者 nvidia｜点赞 720｜下载 38,942
  NeMo SpeechLM 架构的 30B MoE 语音转录模型，是专业 ASR 方向的头部发布。

- **Edge0/Audio8-TTS-Realistic-Air** — https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air
  作者 Edge0｜点赞 270｜下载 8,090
  基于 arktts 的文本转语音模型，聚焦真实自然音色。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **abenzerps/Qwen-Image-2.1-Uncensored-Quantized** — https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized
  作者 abenzerps｜点赞 5,604｜下载 2,508,590
  Qwen-Image 2.1 的去审查 GGUF 量化版，ComfyUI 工作流友好，下载量逼近头部官方模型。

- **AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF** — https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF
  作者 AtomicChat｜点赞 248｜下载 53,913
  DeepSeek-V4.1-Flash 的社区去审查 GGUF 量化版本。

- **OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated** — https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated
  作者 OBLITERATUS｜点赞 231｜下载 1,643
  同源模型的“obliterated”去审查微调版本，代表社区二次改写的活跃度。

- **AtomicChat/LFM3-1.7B-Uncensored-GGUF** — https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF
  作者 AtomicChat｜点赞 230｜下载 72,919
  LFM3-1.7B 的去审查 GGUF 版，下载量甚至超过部分官方版本。

- **LiquidAI/LFM3-1.7B-GGUF** — https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF
  作者 LiquidAI｜点赞 204｜下载 194,039
  官方 LFM3 的 llama.cpp GGUF 版，下载量远超原模型，说明端侧推理需求强烈。

- **burner22/numbat** — https://huggingface.co/burner22/numbat
  作者 burner22｜点赞 316｜下载 7,461
  带 custom_code 的 8-bit（modelopt）定制模型，属小众但有意思的技术实验。

- **FusionCow/Sulphur-3** — https://huggingface.co/FusionCow/Sulphur-3
  作者 FusionCow｜点赞 317｜下载 395
  基于 MiniMax-H3 的社区微调模型，热度尚在起步。

## 生态信号

今日最强势的是 **Qwen（Qwen3.8-27B + Qwen-Image 衍生量化）** 与 **LiquidAI 的 LFM3 全家族**（文本、GGUF、Omni、VL、Audio、d1 一口气上榜），显示头部机构正以“家族化、多模态、端侧友好”方式批量发布。**MiniMax-H3 生态**也通过 Open-H3 视频精修 LoRA 与 Sulphur-3 微调显现外溢效应。开源权重持续主导热度榜；闭源未见于榜单。值得注意的是，**社区去审查与 GGUF 量化**（AtomicChat、OBLITERATUS、abenzerps）下载量可与官方版本比肩甚至超过，端侧 llama.cpp 需求旺盛。

## 值得探索

1. **Qwen/Qwen3.8-27B**（https://huggingface.co/Qwen/Qwen3.8-27B）— 今日下载与点赞双冠的多模态基座，最适合作为通用起点跟踪能力上限。
2. **Lightricks/LTX-2.5**（https://huggingface.co/Lightricks/LTX-2.5）— 覆盖图/文/视频互转的单一模型，下载 248 万，是视频生成工作流最实用的选择。
3. **LiquidAI/LFM3-1.7B-GGUF**（https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF）— 小模型 + 端侧 GGUF，下载量远超原模型，适合研究轻量部署与量化效果对比。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*