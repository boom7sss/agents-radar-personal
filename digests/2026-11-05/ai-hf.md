# Hugging Face 热门模型日报 2026-11-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-05 18:03 UTC

---

# Hugging Face 热门模型日报（2026-11-05）

## 今日速览

Qwen3.8-27B 以 19,200 周点赞、803 万下载同时领跑点赞与下载双榜，是本日最具统治力的发布。视频与图像生成赛道持续高热：Lightricks/LTX-2.5 单周下载突破 256 万、点赞破万，black-forest-labs 与 Qwen-Image 量化版本共同撑起图像生成生态。DeepSeek-V4.1-Flash-1017 成为新一代“被量化母体”，同日出现 unsloth、nvidia、ISTA-DASLab、AtomicChat 等多个衍生版本。轻量高效模型（LiquidAI LFM3 系列、NVIDIA Nemotron Transcribe）与多模态 OCR 方向同样值得关注。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen｜❤️ 19,200｜⬇️ 8,037,597
  本日双榜第一的旗舰多模态对话模型（image-text-to-text），凭借 Qwen 家族势头与极高的实际部署量占据榜首。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)**
  mistralai｜❤️ 1,607｜⬇️ 9,592
  参数量达 1T、激活 52B 的大型旗舰模型，官方标注 vLLM/SGLang 支持，点赞高但下载仍处早期。

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)**
  moonshotai｜❤️ 843｜⬇️ 11,658
  Kimi K3.1 系列 Pro 版本，采用 compressed-tensors 压缩格式的多模态文本生成模型。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)**
  LiquidAI｜❤️ 1,505｜⬇️ 60,681
  Liquid 家族 1.7B 轻量文本生成模型，以小巧体积获得较高关注。

- **[sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview)**
  sensenova｜❤️ 246｜⬇️ 2,929
  商汤 9B 多模态预览模型，处于早期曝光阶段。

- **[ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview)**
  ricursiveAI｜❤️ 227｜⬇️ 939
  65B 预览模型，带 custom_code，采用 Apache-2.0 许可，尚属小众尝鲜对象。

- **[FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3)**
  FusionCow｜❤️ 375｜⬇️ 607
  基于 MiniMaxAI/MiniMax-H3 的微调模型，反映 MiniMax 生态的社区活跃度。

---

### 🎨 多模态与生成（图像、视频、音频）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks｜❤️ 10,697｜⬇️ 2,561,845
  支持文生视频、图生视频、视频生视频的全能视频模型，单周下载超 256 万，是视频生成赛道绝对焦点。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook｜❤️ 5,924｜⬇️ 1,921,413
  SAM3 分割/掩码生成模型，支持视频，兼具点赞与大规模下载，是视觉基础工具级发布。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  black-forest-labs｜❤️ 2,549｜⬇️ 1,077,477
  FLUX 3 的 ComfyUI 单文件图像生成/编辑版本，下载破百万，ComfyUI 部署友好。

- **[abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized)**
  abenzerps｜❤️ 5,661｜⬇️ 233,059
  Qwen-Image 2.1 Turbo 的 GGUF 量化版，面向 ComfyUI-GGUF 场景，点赞位居前列。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)**
  Pika-Labs｜❤️ 458｜⬇️ 863
  音视频联合生成模型，采用 LoRA 形式，下载量仍低，属早期热度。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)**
  nvidia｜❤️ 3,048｜⬇️ 57,297
  30B / 激活 4B 的语音识别（ASR）模型，基于 NeMo SpeechLM，点赞破三千，语音方向亮点。

- **[Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air)**
  Edge0｜❤️ 313｜⬇️ 11,349
  基于 arktts 的文本转语音模型，主打真实音色。

- **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)**
  LiquidAI｜❤️ 372｜⬇️ 14,315
  any-to-any 全能小模型，可作多模态输入输出实验对象。

- **[PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy)**
  PrunaAI｜❤️ 190｜⬇️ 218,534
  ComfyUI 单文件文生图/图生图模型，下载量可观但点赞偏低。

---

### 🔧 专用模型（代码、OCR、视觉语言等）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**
  ccore｜❤️ 684｜⬇️ 157,157
  面向 Three.js / 3D 代码的 Qwen3.5 微调模型，提供 safetensors 与 GGUF，下载表现亮眼。

- **[xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0)**
  xiaomi-research｜❤️ 295｜⬇️ 22,477
  小米首发的 OCR 多模态模型，基于 qwen3_5 架构。

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)**
  baidu｜❤️ 619｜⬇️ 269,424
  百度 Unlimited-OCR 第二代，下载近 27 万，OCR 赛道竞争加剧。

- **[microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork)**
  microsoft｜❤️ 186｜⬇️ 2,555
  基于 llava_onevision2 的视觉语言模型，主打协作场景，早期热度。

---

### 📦 微调与量化（社区微调、GGUF、NVFP4）

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU｜❤️ 2,521｜⬇️ 1,457,791
  基于 Qwen3.8-27B 的社区 GGUF 微调，下载近 146 万，体现热门基座 + 社区魔改的高传播力。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)**
  SC117｜❤️ 705｜⬇️ 3,880,611
  本日下载量最高的衍生模型（388 万），abliterated + GGUF 组合满足本地 llama.cpp 部署需求。

- **[unsloth/DeepSeek-V4.1-Flash-1017-GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF)**
  unsloth｜❤️ 348｜⬇️ 777,689
  官方 DeepSeek-V4.1-Flash 的 unsloth GGUF 量化版，下载超 77 万，是主流本地化入口。

- **[nvidia/DeepSeek-V4.1-Flash-1017-NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4)**
  nvidia｜❤️ 182｜⬇️ 6,010
  使用 ModelOpt 的 NVFP4 低精度量化版，代表硬件厂商主导的原生量化方向。

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF)**
  ISTA-DASLab｜❤️ 170｜⬇️ 127,948
  面向代码场景的 DeepSeek-V4.1 GGUF 量化版本。

- **[AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF)**
  AtomicChat｜❤️ 314｜⬇️ 92,333
  去审查版 DeepSeek-V4.1 GGUF，下载近 9 万。

- **[OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated)**
  OBLITERATUS｜❤️ 258｜⬇️ 2,296
  DeepSeek-V4.1 的“obliterated”改造版，safetensors 格式，早期热度。

- **[burner22/numbat](https://huggingface.co/burner22/numbat)**
  burner22｜❤️ 351｜⬇️ 8,789
  8-bit、ModelOpt 量化的 custom_code 模型，探索性较强。

---

## 生态信号

本日榜单清晰地呈现三条主线。其一，**Qwen 3.8 与 DeepSeek-V4.1-Flash 成为两大“母体”**：前者既有官方旗舰霸榜，又衍生出 DavidAU、SC117 等大量 GGUF 微调；后者在一天内被 unsloth、nvidia、ISTA-DASLab、AtomicChat、OBLITERATUS 多方量化与改造，说明热门开源权重正快速形成工具链生态。其二，**多模态与生成模型下载量惊人**——LTX-2.5、sam3、FLUX 3、Qwen-Image 量化版均达百万级下载，视频与图像生成是最真实的使用需求。其三，**量化与社区的强烈需求**：榜单近半为 GGUF/NVFP4 及 abliterated 变体，下载量普遍远超点赞，反映本地部署是主要消费方式。整体看，高质量开源权重（Mistral、Qwen、DeepSeek、LiquidAI、NVIDIA）持续扩充，硬件厂商与量化社区已成为分发链条中不可忽视的一环。

---

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 双榜第一且下载量最高，是当前最值得实际部署评测的多模态旗舰，也可作为后续社区微调与量化的统一基座参照。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 周下载 256 万的视频生成模型，覆盖文/图/视频多种输入，是研究视频生成落地效果的首选样本。

3. **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — 高点赞的 MoE 语音识别模型，代表“稀疏激活 + 语音”方向，值得与主流 ASR 方案对比研究。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*