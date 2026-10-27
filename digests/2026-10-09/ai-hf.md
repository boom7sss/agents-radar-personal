# Hugging Face 热门模型日报 2026-10-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-10 02:27 UTC

---

# Hugging Face 热门模型日报（2026-10-09）

## 今日速览

本周榜单由 **Qwen 家族**全面主导：Qwen/Qwen3.8-27B 以 17,355 点赞、678 万下载领跑，其 Flash-Next、Image-2.1 等衍生版本及社区量化/微调版本遍布全榜。**多模态与视频生成**热度突出，Lightricks/LTX-2.5 拿下单模型最高点赞（7,073）并突破 168 万下载。**量化与去审查（uncensored/abliterated）** 活动极为活跃，GGUF/ternary/2-bit 版本大量涌现，prism-ml 的三值量化模型下载超 438 万。Cloudflare 首次以 clef 系列切入图像-文本多模态，Aleph-Alpha 的 MoE 推理模型 Kolibri-1 亦值得关注。

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜17,355 赞｜6,783,589 下载
  Qwen 家族旗舰多模态对话模型，本周榜单独占鳌头，下载量断层领先，代表当前开源权重主力方向。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen｜6,061 赞｜1,751,752 下载
  Qwen3.8 的 Flash-Next 轻量分支，兼顾多模态与对话，成为社区量化与微调的主要底座。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai｜4,297 赞｜1,316,468 下载
  DeepSeek 新一代 Flash 模型，支持图文输入，官方权重发布即获高热度。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha｜845 赞｜8,474 下载
  面向推理的 MoE 文本生成模型，配备 vllm 支持，代表欧洲开源推理模型新势力。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research｜675 赞｜38,740 下载
  29B 参数文本生成模型（含未量化格式），提供 GGUF 便于本地部署。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — ConwayResearch｜191 赞｜15,274 下载
  主打 2-bit 量化与工具/函数调用能力的文本生成模型。

- **[Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw](https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw)** — Infatoshi｜309 赞｜2,277 下载
  基于 GLM MoE 架构的 EXL3 3.0bpw 量化去审查版本，适配 exllamav3。

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜7,073 赞｜1,687,531 下载
  支持图像/文本/视频转视频的全能视频生成模型，本周点赞最高，视频生成赛道标杆。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen｜3,159 赞｜122,311 下载
  Qwen 官方图像生成/编辑扩散模型，diffusers 生态支持完善。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** — Qwen｜304 赞｜0 下载
  Image-2.1 的 Turbo 加速版本，刚发布尚无下载数据，值得关注。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare｜1,946 赞｜12,066 下载
  Cloudflare 推出的 qwen3_5 系多模态图文模型，基于 Qwen 架构的企业级尝试。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare｜716 赞｜18,971 下载
  clef 系列轻量版，延续 qwen3_5 图文输入定位。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — LiquidAI｜238 赞｜7,302 下载
  Liquid 家族 lfm2_vl 小型多模态模型，3B 规模适合端侧部署。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk｜323 赞｜12,118 下载
  土耳其语文本转语音模型，聚焦特定语种的语音合成。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute｜268 赞｜5,558 下载
  面向端上（on-device）的语音识别模型，主打轻量语音转文本。

- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** — FrancisRing｜133 赞｜0 下载
  图生视频扩散 Transformer，支持视频-音频联合生成，新品暂无下载。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google｜1,354 赞｜29,185 下载
  谷歌新一代嵌入模型，feature-extraction 任务热门，成为嵌入赛道核心基线。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations｜5,428 赞｜41,468 下载
  主打 System-One 校准决策的文本分类模型，点赞量居专用模型前列。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth｜4,984 赞｜6,452,782 下载
  Qwen3.8-27B 的官方 GGUF 量化版本，下载量仅次于原模型。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps｜3,773 赞｜2,013,268 下载
  Qwen-Image-2.1 的去审查 GGUF 图像生成版，适配 ComfyUI，下载破 200 万。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml｜2,570 赞｜4,389,072 下载
  三值（ternary）/2-bit 量化 27B 模型，llama.cpp 生态，下载超 438 万，低比特量化代表。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab｜2,097 赞｜1,490,741 下载
  采用 GSQ-RCO 混合精度量化的 Qwen3.8 GGUF，学术量化方案的代表。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜1,611 赞｜2,000,216 下载
  DavidAU 高密度社区微调 GGUF，融合去审查与编码能力，下载破 200 万。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab｜750 赞｜3,559,321 下载
  针对 Qwen3.8-Flash-Next 的混合精度量化版，下载超 355 万。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — orcarouter｜702 赞｜499,273 下载
  Qwen3.8-Flash-Next 的 abliterated 去审查 GGUF 版本。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — jialinyyzz｜755 赞｜29,470 下载
  基于 gemma4_unified 的文本生成微调，主打“去 AI 味”文本改写。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter｜489 赞｜21,406 下载
  基于 Qwen3.8 的去审查量化模型，偏向网络安全场景。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx｜1,339 赞｜245,270 下载
  基于 Qwen-Image-2.1 的人脸交换 LoRA，图像编辑社区热度较高。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — unsloth｜218 赞｜41,582 下载
  embeddinggemma-2 的 GGUF 多模态嵌入量化版，方便本地嵌入检索。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — SC117｜172 赞｜684,487 下载
  GSQ-RCO 量化叠加 abliterated 处理的 Qwen3.8-Flash-Next GGUF 版本。

## 生态信号

**Qwen 家族压倒性主导本周生态**：官方 Qwen3.8-27B、Flash-Next、Qwen-Image-2.1 构成三条主线，并被 unsloth、ISTA-DASLab、DavidAU、orcarouter 等大量二次加工，涵盖量化、去审查、微调各环节，形成完整的社区衍生网络。**开源权重活力强劲**，DeepSeek-V4.1-Flash、Aleph-Alpha Kolibri-1、Cloudflare clef、LiquidAI d1-3B 等官方权重密集发布，闭源趋势在本周榜单中并不明显。**量化活动集中在极低比特方向**：ternary/2-bit（Ternary-Bonsai-2）与 GSQ-RCO 混合精度下载量巨大，显示社区对本地低成本推理的强烈需求；同时 **uncensored/abliterated 去审查版本** 成为高频标签，几乎每个热门底座都有对应版本。

## 值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值/2-bit 量化 27B 且下载超 438 万，是观察极低比特量化在真实部署中可行性的最佳样本。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 单一模型支持图/文/视频转视频，且为本周点赞最高，是视频生成赛道最具代表性的开源选择。

3. **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — 谷歌官方嵌入模型，配合 unsloth 的 GGUF 量化版，是构建本地检索/嵌入流水线的实用起点。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*