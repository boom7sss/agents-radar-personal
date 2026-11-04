# Hugging Face 热门模型日报 2026-11-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-04 18:00 UTC

---

# Hugging Face 热门模型日报（2026-11-04）

## 今日速览

今日榜单由 Qwen 与 DeepSeek 两大生态主导：Qwen3.8-27B 以 19,134 周点赞、803 万下载居绝对榜首，DeepSeek-V4.1-Flash 系列则衍生出官方原版、unsloth GGUF、nvidia NVFP4 及多个社区改版，形成完整的发布与再加工链条。视频生成是另一大热点，Lightricks/LTX-2.5 以 1,058 点赞、249 万下载成为下载量最高的生成类模型。量化与"去审查"社区微调持续活跃，SC117 的 abliterated GGUF 以 355 万下载位列全榜下载第二。多模态 image-text-to-text 标签几乎覆盖半数模型，视觉语言已成为新模型默认形态。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 👍 19,134 | ⬇️ 8,032,442
  旗舰级 image-text-to-text 对话模型，全榜点赞与下载双第一，是今日热度最高的基础模型发布。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)**
  deepseek-ai | 👍 5,249 | ⬇️ 221,621
  DeepSeek V4.1 系列的官方 Flash 版本，多模态文本生成，是今日衍生生态的源头模型。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)**
  LiquidAI | 👍 1,470 | ⬇️ 54,959
  LiquidAI 新一代 LFM3 架构的 1.7B 小模型，主打轻量文本生成。

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)**
  Nanbeige | 👍 1,041 | ⬇️ 18,657
  基于 llama 架构的 33B 文本生成模型，属于中等规模开源权重模型。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)**
  mistralai | 👍 1,582 | ⬇️ 8,200
  1T 参数、52B 激活的 MoE 级多模态大模型，支持 vLLM 与 SGLang 部署，下载量低说明仍处于早期阶段。

- **[Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview)**
  Diffuspace | 👍 241 | ⬇️ 3,341
  Clover MoE 架构的 35B-A3B 预览版文本生成模型。

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)**
  moonshotai | 👍 305 | ⬇️ 797
  Kimi K3.1 的 Pro 版本，采用 compressed-tensors 量化格式，刚发布、下载仍低。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 👍 10,589 | ⬇️ 2,493,402
  支持图生视频、文生视频、视频生视频的全能视频扩散模型，今日下载量最高的生成类模型。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook | 👍 5,850 | ⬇️ 1,912,603
  Meta 第三代 Segment Anything，新增 sam3_video 标签，扩展至视频分割。

- **[abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized)**
  abenzerps | 👍 5,645 | ⬇️ 305,860
  Qwen-Image 2.1 Turbo 的 GGUF 量化版，面向 ComfyUI 工作流。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  black-forest-labs | 👍 2,472 | ⬇️ 1,052,684
  FLUX 3 的 Klein 版本单文件模型，针对 ComfyUI 的图像生成与编辑。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)**
  nvidia | 👍 1,458 | ⬇️ 44,939
  基于 NeMo 的 30B-A4B 语音识别模型，是今日榜单中唯一的 ASR 系统。

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)**
  baidu | 👍 605 | ⬇️ 230,232
  百度第二代 Unlimited OCR 多模态识别模型。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)**
  speridlabs | 👍 587 | ⬇️ 14,613
  基于 Gaussian Splatting 的图生 3D 模型，覆盖较冷门但增长较快的 3D 生成方向，采用 Apache-2.0 许可。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)**
  Pika-Labs | 👍 421 | ⬇️ 749
  Pika H3 灵活版，支持音视频联合生成，以 LoRA 形式提供。

- **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)**
  LiquidAI | 👍 350 | ⬇️ 13,057
  LFM3 系列 2B 参数的 any-to-any 全模态模型。

- **[xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0)**
  xiaomi-research | 👍 279 | ⬇️ 22,488
  小米首款 OCR 专用模型，基于 qwen3_5 架构的多模态识别。

- **[sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview)**
  sensenova | 👍 230 | ⬇️ 2,704
  商汤 SenseNova Loop 架构的 9B 多模态预览模型。

- **[microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork)**
  microsoft | 👍 168 | ⬇️ 1,973
  基于 llava_onevision2 的微软视觉语言模型，处于早期阶段。

- **[Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air)**
  Edge0 | 👍 289 | ⬇️ 9,695
  基于 arktts 的文本转语音模型，主打真实音色。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**
  ccore | 👍 643 | ⬇️ 123,321
  面向 Three.js 3D 代码生成的 Qwen3.5 4B 专用模型，同时提供 safetensors 与 GGUF 格式。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)**
  SC117 | 👍 680 | ⬇️ 3,553,512
  Qwen3.8-Flash 的 abliterated 去审查 GGUF，下载量位居全榜第二。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 👍 2,456 | ⬇️ 1,403,315
  基于 Qwen3.8-27B 的多重合社区微调 GGUF，标签含 heretic、uncensored，借助 unsloth 工具链。

- **[unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF)**
  unsloth | 👍 342 | ⬇️ 690,137
  unsloth 出品的 DeepSeek V4.1 官方量化 GGUF，下载量远超原版。

- **[FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3)**
  FusionCow | 👍 354 | ⬇️ 528
  基于 MiniMax-H3 的社区微调模型。

- **[burner22/numbat](https://huggingface.co/burner22/numbat)**
  burner22 | 👍 337 | ⬇️ 8,118
  带 custom_code 的 8-bit ModelOpt 量化模型。

- **[AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF)**
  AtomicChat | 👍 285 | ⬇️ 73,659
  DeepSeek V4.1 Flash 的去审查 GGUF 分支，采用 GSQ 量化。

- **[OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated)**
  OBLITERATUS | 👍 248 | ⬇️ 1,979
  DeepSeek V4.1 Flash 的另一去审查衍生版本（safetensors）。

- **[Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K)**
  Efficient-Large-Model | 👍 210 | ⬇️ 483,649
  基于 MiniMax-H3 的视频精修 LoRA，标签为 video-refinement。

- **[nvidia/DeepSeek-V4.1-Flash-1017-NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4)**
  nvidia | 👍 171 | ⬇️ 3,648
  NVIDIA 用 ModelOpt 将 DeepSeek V4.1 Flash 量化为 NVFP4 格式的官方版本。

## 生态信号

Qwen 与 DeepSeek 两大模型家族占据主导：Qwen3.8、Qwen3.5 的微调、量化与去审查衍生版本覆盖了榜单近四分之一，DeepSeek-V4.1-Flash 单型号便衍生出官方版、unsloth GGUF、nvidia NVFP4 及三家社区改版。开源权重仍是绝对主流，闭源或预览形态（Kimi-K3.1-Pro、SenseNova-Loop-Preview、Mage-VL-Cowork）仅占少数且下载量偏低。量化活动高度集中于 GGUF（ComfyUI、llama-cpp 工作流）与 NVIDIA ModelOpt 的 NVFP4/8-bit，unsloth 已成为官方量化的默认工具链；abliterated、uncensored 类去审查微调在下载量上表现尤其强劲。

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 同时覆盖图生、文生、视频生视频的统一视频扩散模型，249 万下载印证了实际可用性，是当前视频生成的首选基线。

2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 全榜热度最高且下载量远超其他模型，作为多模态对话基座，值得作为 Qwen 系列微调与量化的起点。

3. **[nvidia/DeepSeek-V4.1-Flash-1017-NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4)** — 官方 NVFP4 量化版本，适合研究低精度部署与 NVIDIA ModelOpt 工具链的落地效果。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*