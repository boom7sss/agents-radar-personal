# Hugging Face 热门模型日报 2026-11-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-01 16:49 UTC

---

# Hugging Face 热门模型日报（2026-11-01）

## 今日速览

今日榜首由 Lightricks 的 LTX-2.5 视频生成模型（10,165 赞、243 万下载）拿下，Qwen3.8-27B 则以 18,896 赞成为全榜点赞最高、下载量最高（789 万）的模型。视频与图像生成赛道依然强势：LTX-2.5、Qwen-Image-2.1 量化版、flux-3-image-klein-comfy 均进入前列。LiquidAI 一次性发布 LFM3 系列多个规格（文本、VL、Omni、Audio、GGUF），形成明显的家族化布局。量化与社区微调依旧活跃，DeepSeek-V4.1-Flash 的 GSQ-RCO GGUF 版本下载达 229 万，其衍生的 abliterated 量化版更高达 342 万。NVIDIA（Nemotron-3.5 转写与 Bolt 模型）与百度（Unlimited-OCR-2）则补强了语音与 OCR 的专用场景。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)**
  Nanbeige｜963 赞｜15,795 下载
  33B 通用 LLM，基于 llama 架构，凭借中文社区关注度上榜。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)**
  mistralai｜1,428 赞｜4,576 下载
  1T 参数、52B 激活的大规模稀疏多模态模型，官方支持 vLLM/SGLang，点赞高但下载尚少，处于尝鲜阶段。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)**
  XHToken｜945 赞｜16,707 下载
  4B 轻量对话 LLM，小尺寸易部署，受到关注。

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen｜18,896 赞｜7,892,866 下载
  本日点赞与下载双冠，27B 图像文本对话模型，生态配套（量化、微调）迅速跟进。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)**
  RecursiveSI｜1,285 赞｜26,703 下载
  对话向文本生成模型，新晋家族首发即获关注。

- **[Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview)**
  Diffuspace｜201 赞｜2,352 下载
  35B-A3B MoE 预览版文本生成模型，处于早期试水阶段。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)**
  deepseek-ai｜4,197 赞｜170,353 下载
  DeepSeek V4.1 图像文本到文本旗舰，位列全榜第二，衍生生量（量化版）已大量出现。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks｜10,165 赞｜2,431,846 下载
  图生/文生/视频编辑一体化扩散模型，本日热度最高，下载量居首梯队。

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)**
  baidu｜503 赞｜109,519 下载
  百度第二代 OCR 多模态模型，下载量显著高于同赞数模型，实用需求强。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)**
  abenzerps｜5,455 赞｜2,548,468 下载
  Qwen-Image-2.1 的无审查 GGUF 量化版，ComfyUI 生态适配，下载量极高。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)**
  Pika-Labs｜294 赞｜404 下载
  音视频联合生成的图生视频模型，含 LoRA，下载量极低，属新发布观察期。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  black-forest-labs｜2,232 赞｜970,633 下载
  Flux 3 的 ComfyUI 单文件图像编辑模型，图像修图场景热门。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)**
  speridlabs｜270 赞｜4,194 下载
  基于高斯泼溅的图生 3D 模型，Apache-2.0 许可，3D 生成小众但上升。

- **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)**
  LiquidAI｜259 赞｜8,376 下载
  LFM3 家族的任意到任意（any-to-any）2B 模型。

- **[LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B)**
  LiquidAI｜197 赞｜9,121 下载
  LFM3 视觉语言 2B 版本。

- **[LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B)**
  LiquidAI｜172 赞｜5,688 下载
  LFM3 音频 any-to-any 模型，兼顾语音识别。

- **[Edge0/Audio8-TTS-Realistic-0.6b](https://huggingface.co/Edge0/Audio8-TTS-Realistic-0.6b)**
  Edge0｜193 赞｜4,613 下载
  0.6B 轻量拟真 TTS 模型，尺寸友好。

- **[Efficient-Large-Model/Open-H3-Regenerate-2K](https://huggingface.co/Efficient-Large-Model/Open-H3-Regenerate-2K)**
  Efficient-Large-Model｜152 赞｜0 下载
  基于 minimax-h3 的视频细化 LoRA，刚上线尚无下载。

- **[OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM](https://huggingface.co/OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM)**
  OliviaRossi｜171 赞｜167,612 下载
  minimax-h3 的社区合并模型，下载量明显高于点赞，使用需求强于讨论度。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)**
  nvidia｜577 赞｜29,364 下载
  30B-A4B 语音识别转写模型，NeMo 生态，面向企业级 ASR。

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**
  ccore｜452 赞｜44,825 下载
  面向 Three.js/3D 场景的代码模型，同时提供 gguf，垂直代码需求明确。

- **[openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0)**
  openbmb｜382 赞｜3,513 下载
  轻量 OCR/文档解析模型，与百度 OCR 形成同类竞争。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook｜5,614 赞｜1,891,055 下载
  SAM3 分割模型，支持视频掩码生成，点赞与下载双高，属通用分割基础设施。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)**
  ISTA-DASLab｜530 赞｜2,294,642 下载
  DeepSeek-V4.1-Flash 的 GSQ-RCO 混合精度量化版，下载量远超原模型，说明本地推理需求旺盛。

- **[LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF)**
  LiquidAI｜168 赞｜150,260 下载
  官方 LFM3-1.7B 的 llama.cpp GGUF 版，官方下场做量化。

- **[AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF)**
  AtomicChat｜173 赞｜46,155 下载
  LFM3-1.7B 的社区无审查量化版，下载高于官方 GGUF，形成衍生竞争。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU｜2,283 赞｜1,451,434 下载
  Qwen3.8-27B 的高热度社区 GGUF 微调版（unsloth + heretic），下载量巨大。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)**
  SC117｜590 赞｜3,425,127 下载
  全榜下载量第二（342 万），Qwen3.8-Flash 的 abliterated 量化版，本地部署需求极强。

## 生态信号

Qwen 家族势头最猛：Qwen3.8-27B 拿下双冠，其社区量化与 abliterated 衍生版本合计下载超 480 万，形成一个“官方首发—社区量化—无审查微调”的完整链条。LiquidAI 借 LFM3 一次性铺开文本、VL、Omni、Audio、GGUF 多个规格，走家族化路线；DeepSeek V4.1-Flash 与 NVIDIA Nemotron-3.5 则分别占据旗舰多模态与企业级语音。值得注意的是，多个头部模型的 GGUF/量化衍生版下载量显著高于原模型（如 DeepSeek-V4.1-Flash 量化版 229 万 vs 原版 17 万），说明本地推理与消费级部署是当前最强需求之一。开源权重仍是生态主流：榜单几乎全部为开放权重模型，闭源或纯 API 模型几乎不见踪影，社区微调（heretic、abliterated、unsloth）活跃度极高。

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 本日热度与下载量最高的视频生成模型，覆盖图生视频、文生视频、视频编辑多种任务，是观察视频生成能力边界的最佳样本。

2. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 点赞与下载双冠的多模态对话模型，配套量化与微调生态成熟，适合作为中文多模态应用的基线模型进行评测。

3. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — GSQ-RCO 混合精度量化方案在 229 万下载量下验证了实用性，值得研究其对旗舰模型精度与显存占用的折中策略。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*