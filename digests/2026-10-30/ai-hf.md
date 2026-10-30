# Hugging Face 热门模型日报 2026-10-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-30 16:43 UTC

---

# Hugging Face 热门模型日报（2026-10-30）

## 今日速览

今日榜单由三大主力争夺注意力：Qwen 家族以 Qwen3.8-27B 领跑（18,783 点赞、762 万下载），Lightricks 的 LTX-2.5 视频模型以 9,925 点赞成为生成类最高热度；LiquidAI 一次上榜四个小型 LFM3 系列成员，显示小参数多模态正走向产品化。DeepSeek-V4.1-Flash 的原版与 GGUF 量化版本同时上榜，量化端下载量（174 万）远超原版（14.6 万），本地部署需求强烈。社区微调与“uncensored/abliterated”路线依旧活跃，且往往伴随着高下载量。

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜18,783 赞｜7,624,809 下载
  Qwen 新一代 27B 主力模型，同时具备图像-文本理解能力，是本日热度与下载量的双料冠军。

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)** — Nanbeige｜793 赞｜12,178 下载
  基于 llama 架构的 33B 文本生成模型，是国产开源 LLM 家族的新版本迭代。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** — LiquidAI｜535 赞｜23,694 下载
  LFM3 系列的 1.7B 小模型，轻量文本生成为边缘与本地场景提供方案。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)** — RecursiveSI｜1,253 赞｜19,015 下载
  面向对话场景的新文本生成模型，以 1,253 点赞成为 LLM 类中备受期待的新面孔。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)** — mistralai｜1,313 赞｜1,239 下载
  Mistral 的超大 MoE 旗舰（1T 总参、52B 激活），标注 vLLM/SGLang 支持，热度高但下载仍处于早期。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)** — XHToken｜916 赞｜12,515 下载
  4B 级 text-generation 模型，延续 Spark 系列的小参数路线。

- **[MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)** — MiniMaxAI｜499 赞｜18,795 下载
  MiniMax 多模态 Flash 版本，主打图文理解与高效推理。

- **[Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview)** — Diffuspace｜168 赞｜1,505 下载
  Clover MoE 架构预览版（35B 总参、3B 激活），探索新型稀疏结构。

- **[HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X)** — HuggingFaceBio｜273 赞｜3,289 下载
  基于 qwen3 的 DNA 序列生成模型，将 LLM 带入生物序列领域。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜9,925 赞｜2,335,172 下载
  支持图生视频、文生视频、视频生视频的全能视频模型，是今日生成类最高热度。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** — abenzerps｜5,354 赞｜2,516,721 下载
  基于 Qwen-Image 的无审查 GGUF 量化版，ComfyUI 兼容带来极高下载量。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs｜2,093 赞｜886,973 下载
  Flux 3 的图像编辑/生成版本，官方适配 ComfyUI，下载接近百万。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai｜3,968 赞｜145,869 下载
  DeepSeek V4.1 Flash 多模态版本，支持图文输入，是本日官方发布中点赞第二高。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook｜5,488 赞｜1,886,656 下载
  第三代 Segment Anything，支持视频掩码生成，下载与点赞双高。

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)** — baidu｜434 赞｜24,276 下载
  百度 OCR 第二代模型，主打不限长度文档识别。

- **[openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0)** — openbmb｜357 赞｜2,413 下载
  MiniCPM 系列首款专用 OCR/文档解析模型，轻量文档场景新品。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — nvidia｜471 赞｜15,980 下载
  Nemotron 3.5 语音转写模型（30B 总参、4B 激活），以 NeMo 生态落地 ASR。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)** — fishaudio｜1,112 赞｜29,986 下载
  支持多说话人的 TTS 模型，娱乐与配音场景的新选择。

- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)** — OpenMOSS-Team｜833 赞｜15,575 下载
  MOSS 系列文生图模型的 SFT 版本。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)** — Pika-Labs｜174 赞｜87 下载
  支持音视频生成的视频模型（含 LoRA），刚发布处于早期。

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**（多模态能力）— 亦收录于语言模型分类，此处不重复。

- **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)** — LiquidAI｜221 赞｜3,080 下载
  任意到任意的 2B 全模态小模型。

- **[LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B)** — LiquidAI｜176 赞｜6,241 下载
  LFM3 视觉语言小模型，为图文理解提供轻量方案。

- **[LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B)** — LiquidAI｜146 赞｜3,550 下载
  LFM3 音频模型，覆盖 ASR 与音频理解。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — ccore｜304 赞｜20,197 下载
  基于 Qwen3.5 的 4B 代码模型，标签指向 three.js/3D 生成方向，属细分编程场景。

- **[Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview)** — 见语言模型分类，此处不重复。

- **[HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X)** — 生物序列（DNA）生成，见语言模型分类。

> 说明：榜单中没有单独标注数学、医疗或嵌入任务的模型；其余专用方向以 OCR、语音转写、3D 代码为主。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜2,240 赞｜1,725,724 下载
  基于 Qwen3.8 的超长名社区微调 GGUF，主打 uncensored/编码增强，下载突破 170 万。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — SC117｜541 赞｜3,158,872 下载
  Qwen3.8 Flash 的 abliterated 量化版，下载量高达 316 万，是本地部署的绝对热点。

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — ISTA-DASLab｜498 赞｜1,747,945 下载
  DeepSeek-V4.1-Flash 的 GSQ/RCO 混合精度量化版，下载量显著超过原版。

- **[orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF)** — orcarouter｜365 赞｜30,433 下载
  DeepSeek-V4.1-Flash 的去审查 GGUF 版，面向 llama.cpp 本地运行。

- **[unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-E4B-GGUF)** — unsloth｜153 赞｜162,308 下载
  unsloth 出品的 Nemotron Bolt 量化版，量化下载量显著高于原版（原版 64,263）。

- **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)** — nvidia｜277 赞｜64,263 下载
  面向 4GB 显存约束的 Nemotron 小模型，是边缘部署的原生轻量化方案。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** — 图像量化，见多模态分类。

## 生态信号

Qwen 家族是本日最强信号：Qwen3.8-27B 登顶，Qwen3.8 衍生出社区微调、abliterated 量化等多个高下载变体。DeepSeek-V4.1-Flash 则呈现“原版 + 多个 GGUF”的完整外溢生态。LiquidAI 以 LFM3 四款 2B 级模型集中上榜，说明小型多模态正在成为一类独立产品。量化是最活跃的需求端：多款 GGUF 变体下载量数倍于原版（如 316 万 vs 原版千余），显示本地部署与去审查微调是社区主要驱动力；开源权重在榜单中完全主导，未见闭源模型身影。

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 支持图、文、视频三种输入的统一视频生成模型，9925 点赞与 233 万下载说明其在生成视频领域的强势地位，适合评估视频生成的当前上限。

2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 兼具语言与图像理解的主力模型，762 万下载使其事实成为社区基座，是理解当前开源 LLM 生态演进的最佳切入点。

3. **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)** — 2B 级任意到任意全模态模型，代表小参数多模态路线，值得研究其在边缘设备上同时处理文本/图像/音频的可行性与取舍。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*