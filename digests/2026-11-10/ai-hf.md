# Hugging Face 热门模型日报 2026-11-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-10 17:53 UTC

---

# Hugging Face 热门模型日报（2026-11-10）

## 今日速览

今日榜单由 Qwen3.8 家族主导：官方 **Qwen/Qwen3.8-27B**（19,548 赞、744 万下载）稳居点赞与下载双榜首，围绕它衍生出的 GGUF、FP4、draft model 等变体遍布榜单。视频生成热度依旧最高，**Lightricks/LTX-2.5** 单周破 279 万下载、11,343 赞，是本周下载量最高的模型。多模态方向（image-text-to-text、视频编辑、“minimax-h3” 系列）与语音（NVIDIA Nemotron 转写、TTS）同步活跃。社区量化与“heretic/uncensored”微调仍是高频现象，但已更多依附于主流大厂基座模型。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 19,548 赞 / 7,443,748 下载
  官方旗舰多模态对话模型，本周榜单点赞与下载双冠，是整个生态的“引力中心”。

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** — moonshotai | 1,844 赞 / 30,721 下载
  Kimi 新一代 Pro 多模态对话模型，采用 compressed-tensors，属头部厂商前沿发布。

- **[xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic)** — xtools-at | 1,150 赞 / 14,378 下载
  基于 Qwen3.5 的去审查微调版本，含 image-text-to-text，社区“heretic”潮流的代表。

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** — NousResearch | 385 赞 / 3,431 下载
  基于 Qwen3.5 的监督微调模型，Nous 的 Arete 系列新作。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** — LiquidAI | 1,586 赞 / 82,718 下载
  Liquid 新一代小型语言模型（1.7B），小模型高关注度样本。

- **[webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B)** — webAI-Official | 272 赞 / 43,175 下载
  基于 granite 的 8B 文本生成模型，同时提供 GGUF。

- **[baidu/ERNIE-5.5-Flash-Base](https://huggingface.co/baidu/ERNIE-5.5-Flash-Base)** — baidu | 249 赞 / 2,111 下载
  百度 ERNIE 5.5 MoE 基础模型，国内大厂新基座，尚处早期关注阶段。

- **[ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview)** — ricursiveAI | 472 赞 / 6,480 下载
  65B 预览模型，采用 custom_code 自研架构，任务未标注。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 11,343 赞 / 2,791,606 下载
  支持图/文/视频到视频的全能视频扩散模型，本周下载量之王，视频生成仍是最大流量入口。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook | 6,239 赞 / 2,025,490 下载
  SAM 第三代分割/掩码生成模型（sam3_video），下载破 200 万，视觉基础工具。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs | 2,859 赞 / 1,251,688 下载
  FLUX 3 图像编辑模型，面向 ComfyUI 的单文件扩散权重，下载量可观。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — speridlabs | 1,801 赞 / 26,470 下载
  基于高斯泼溅的 image-to-3D 模型，点赞高但下载量低，是“点赞驱动”的 3D 新方向。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — nvidia | 3,148 赞 / 72,455 下载
  NVIDIA NeMo 语音转写大模型（30B-A4B MoE），本周语音方向最强发布。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)** — Pika-Labs | 532 赞 / 1,083 下载
  支持音视频生成的图生视频模型，Pika 新系列，尚在早期。

- **[PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy)** — PrunaAI | 281 赞 / 782,946 下载
  ComfyUI 优化的文生图单文件，下载量远超点赞，属实用型工具权重。

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** — MiniMaxAI | 227 赞 / 667 下载
  MiniMax H3 图像模型（diffusers），对应“minimax-h3”标签家族的一员。

- **[VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash)** — VideoRebirthAI | 164 赞 / 110,752 下载
  依托 minimax-h3 的视频生成 flash 版本，下载量明显高于点赞。

- **[PrunaAI/P-H3-Image](https://huggingface.co/PrunaAI/P-H3-Image)** — PrunaAI | 194 赞 / 1,180 下载
  P-H3-Image 的 diffusers 版本，与 Comfy 版本互补。

- **[ConwayResearch/Underdog-Woof](https://huggingface.co/ConwayResearch/Underdog-Woof)** — ConwayResearch | 140 赞 / 10 下载
  纯 numpy 实现的端侧 CPU TTS 模型，极小下载量，属实验性趣味项目。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — ccore | 967 赞 / 319,405 下载
  基于 Qwen3.5 的 Three.js/3D 代码专用模型，代码+3D 交叉垂类，下载量高。

- **[ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder)** — ccore | 300 赞 / 43,008 下载
  上者的 GLB 变体，同属 3D 代码垂类系列。

- **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** — tencent | 161 赞 / 2,627 下载
  基于 Qwen3.8-27B 的投机解码 draft model，偏推理加速的工程向发布。

- **[Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake)** — Viggle | 259 赞 / 115,384 下载
  角色替换/视频编辑模型（video-to-video，minimax-h3 系），属视频编辑垂类。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 2,823 赞 / 1,459,029 下载
  名字极长的 Qwen3.8 GGUF 融合微调，下载破 145 万，是“社区魔改+量化”的典型代表。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth | 1,569 赞 / 1,816,522 下载
  unsloth 出品的 Qwen3.8-Flash-Next GGUF 量化，下载超 180 万，量化分发主力。

- **[autotrust/Qwen3.8-Flash-Next-E384-FP4-V2](https://huggingface.co/autotrust/Qwen3.8-Flash-Next-E384-FP4-V2)** — autotrust | 2,376 赞 / 49,210 下载
  面向 vLLM 的 FP4 量化实验版本，点赞高、下载中等，低比特量化前沿探索。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — SC117 | 823 赞 / 4,233,153 下载
  abliterated 去审查 GGUF，单品下载超 423 万，本周下载最高的社区微调之一。

- **[Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF)** — Scantist | 1,301 赞 / 11,066 下载
  GLM-MoE 结构魔改版 GGUF，标签含 neural-architecture-search，偏研究向。

- **[mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF](https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF)** — mradermacher | 229 赞 / 249,249 下载
  xtools 去审查模型的 i1 GGUF 量化，下载远超点赞。

- **[mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF)** — mradermacher | 171 赞 / 42,215 下载
  Gemma-4 的 heretic 去审查 GGUF，同属 mradermacher 量化流水线。

---

## 生态信号

Qwen3.8 家族（及 Qwen3.5、Flash-Next 支系）是本周绝对主轴——官方模型登顶，衍生量化（unsloth、SC117、autotrust、tencent draft）与魔改微调（DavidAU）几乎占榜单三分之一。视频生成（LTX-2.5、Pika、hyperflow）与 “minimax-h3” 标签串联起图/视频/编辑多条产品线，下载量远高于点赞，说明实际部署需求旺盛。开放性上，头部厂商（Qwen、Kimi、ERNIE、NVIDIA、facebook）均以开放权重形态发布，闭源并未在榜上体现。量化活动高度集中于 GGUF 与新兴 FP4（vLLM 向），“heretic/uncensored/abliterated” 微调持续活跃但已依附主流基座，而非自建模型。

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周双冠基座，想理解后续所有衍生量化与微调的“原版”，应从它入手。
2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 279 万下载、覆盖图/文/视频到视频，是当前视频生成落地最成熟的选择。
3. **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — 语音转写方向的头部发布（3,148 赞），MoE 架构值得关注其效率与精度。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*