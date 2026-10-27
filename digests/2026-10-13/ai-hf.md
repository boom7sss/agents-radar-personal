# Hugging Face 热门模型日报 2026-10-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-13 12:10 UTC

---

# Hugging Face 热门模型日报（2026-10-13）

## 今日速览

今日榜单由 Qwen 家族全面主导：Qwen3.8-27B 以 17,609 周点赞、711 万下载稳居榜首，Qwen3.8-Flash-Next（6,162 赞）与 Qwen-Image-2.1 系列构成完整的多模态矩阵。视频生成迎来强势玩家，Lightricks/LTX-2.5 以 7,552 赞冲上第二。榜单中"Uncensored / Heretic / Abliterated"类微调与量化版本密集出现，且下载量普遍高于官方原版，显示社区对去审查与 GGUF 量化的旺盛需求。Cloudflare 首次以 clef / clef-flash 双模型入场，LiquidAI、Aleph-Alpha、openbmb 等也均有新作。嵌入、OCR、语音等多条专用赛道同步升温。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 👍 17,609 | ⬇️ 7,119,569
  本周榜首，Qwen3.8 旗舰级 image-text-to-text 对话模型，凭超高点赞与下载量成为当前生态核心。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  Qwen | 👍 6,162 | ⬇️ 2,065,917
  Qwen 高效 Flash 系列新作，主打快速对话，是官方轻量旗舰的高关注度版本。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)**
  Aleph-Alpha | 👍 922 | ⬇️ 15,335
  带 vllm 标签的 MoE 推理模型，主打 reasoning，是本周欧洲开源实验室的代表作。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)**
  Venastine-Research | 👍 708 | ⬇️ 58,000
  29B-A4B 混合专家文本生成模型，同步放出 GGUF，兼顾高性能与本地部署。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)**
  ConwayResearch | 👍 393 | ⬇️ 269,829
  2-bit 量化的工具调用/函数调用模型，主打极限压缩下的 agent 能力。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)**
  LiquidAI | 👍 365 | ⬇️ 13,190
  Liquid 基于 lfm2_vl 的小型多模态对话模型，延续其高效架构路线。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  convaiinnovations | 👍 5,551 | ⬇️ 46,160
  主打 "system-one" 校准决策的模型，高点赞显示推理决策类模型正受关注。

- **[autotrust/JEV-35B](https://huggingface.co/autotrust/JEV-35B)**
  autotrust | 👍 292 | ⬇️ 17,426
  基于 qwen3_5_moe 的 system-one 模型，聚焦可信与校准判断。

- **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)**
  openbmb | 👍 284 | ⬇️ 630
  MiniCPM-V 4.7 的 35B-A3B 版本，新发布、下载尚低但代表端侧多模态新方向。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 👍 7,552 | ⬇️ 1,724,548
  本周点赞第二的视频生成模型，覆盖图生视频、文生视频、视频生视频，是视频赛道的强势新作。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook | 👍 4,207 | ⬇️ 2,037,775
  Meta 第三代分割模型（sam3_video），支持视频掩码生成，是视觉基础模型的重磅更新。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  baidu | 👍 4,587 | ⬇️ 1,175,446
  百度推出的 OCR 模型，兼具 feature-extraction，凭借高下载量成为文档理解热门。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  Qwen | 👍 3,272 | ⬇️ 147,995
  Qwen 官方图像生成与编辑模型，是本周文生图赛道的官方基准。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)**
  Qwen | 👍 676 | ⬇️ 9,665
  Qwen-Image-2.1 的加速版本，支持图像生成与编辑，主打更快推理。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**
  Cloudflare | 👍 2,125 | ⬇️ 17,173
  Cloudflare 基于 qwen3_5 的多模态模型，标志其正式进军开源模型生态。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)**
  Cloudflare | 👍 794 | ⬇️ 24,809
  clef 的轻量快速版本，延续同一多模态架构。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  deepseek-ai | 👍 4,448 | ⬇️ 1,272,612
  DeepSeek V4.1 的 Flash 版本，兼顾文本与图像理解，是本周高热度官方发布。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)**
  canberkkkkkk | 👍 399 | ⬇️ 22,641
  面向土耳其语的文本转语音模型，代表小众语言的 TTS 需求。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)**
  Cactus-Compute | 👍 374 | ⬇️ 21,005
  基于 cactus-needle 的端侧语音识别模型，主打 on-device 场景。

- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)**
  speridlabs | 👍 218 | ⬇️ 889
  像素空间扩散文生图模型，架构思路上有差异化。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)**
  google | 👍 2,027 | ⬇️ 124,930
  Google 第二代嵌入模型，本周嵌入赛道最受关注的新发布。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)**
  unsloth | 👍 288 | ⬇️ 81,504
  embeddinggemma-2 的 GGUF 量化版，支持多模态嵌入，便于本地部署。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)**
  abenzerps | 👍 4,165 | ⬇️ 2,247,929
  去审查 + 量化的 Qwen-Image 版本，下载量远超官方原版，是本周最高下载之一。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  ISTA-DASLab | 👍 845 | ⬇️ 4,675,423
  采用 GSQ / RCO 混合精度量化的 Qwen3.8-Flash-Next，本周下载量最高的模型。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 👍 1,715 | ⬇️ 1,940,062
  典型的社区"缝合"式去审查微调，叠加编码与 MTP，反映 GGUF 社区玩法。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)**
  orcarouter | 👍 829 | ⬇️ 653,893
  Qwen3.8-Flash-Next 的 abliterated 去审查 GGUF 版本。

- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)**
  AtomicChat | 👍 389 | ⬇️ 208,575
  面向 ComfyUI 的去审查 Turbo 图像模型 GGUF 量化版。

- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)**
  nerkyor | 👍 295 | ⬇️ 83,887
  以超长命名叠加多模型风格与 SFT/RLOO/MTP 的社区微调。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)**
  jialinyyzz | 👍 1,393 | ⬇️ 54,039
  基于 gemma4_unified 的 "humanizer" 微调，主打文本去 AI 化风格。

---

## 生态信号

本周 Qwen 家族势头最强，从 Qwen3.8-27B 到 Qwen3.8-Flash-Next、Qwen-Image-2.1 占据多个高位，且几乎所有热门量化/微调都围绕 Qwen 底座展开。开源权重持续活跃，Cloudflare、LiquidAI、Aleph-Alpha、openbmb、百度、DeepSeek 均选择公开权重，闭源模型在趋势榜上几乎缺席。量化活动尤为密集：GSQ/RCO 混合精度、2-bit、GGUF 与去审查（Heretic/Abliterated）叠加，且这些社区版本的下载量常超过官方原版，说明本地部署与去审查需求是当前最强的落地驱动力。视频（LTX-2.5）与分割（SAM3）代表多模态基础模型的下一波增长点。

---

## 值得探索

1. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — 本周下载量最高（467 万），采用 GSQ/RCO 混合精度量化，是研究高效量化在旗舰模型上实际效果的最佳样本。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 一个模型覆盖图/文/视频生视频多种任务，点赞第二、下载超 170 万，是当前视频生成赛道最值得上手的新基线。

3. **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare 首个开源多模态模型，配合 clef-flash 轻量版，值得观察云厂商切入开源生态的路径与工程取向。

---

*注：以上点赞数、下载数及发布日期均依据提供的 2026-10-13 榜单数据，未作外部补充。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*