# Hugging Face 热门模型日报 2026-10-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-11 09:18 UTC

---

# Hugging Face 热门模型日报（2026-10-11）

## 一、今日速览

今日榜单由 **Qwen3.8 系列**全面主导：基座 Qwen3.8-27B 单周拿下 17,461 赞与 684 万下载，Flash-Next 版本紧随其后，衍生出大量社区微调、无审查版与量化版本。量化成为最活跃的二次创作方向，**ISTA-DASLab** 的 GSQ-RCO 混合精度 GGUF 系列与 **prism-ml** 的三值（Ternary）2-bit 模型均获得数百万级下载。多模态与生成侧，**Lightricks/LTX-2.5**（7,214 赞）和 **Cloudflare/clef**（2,008 赞）表现突出，视频生成与新型图像-文本架构持续升温。与此同时，无审查（uncensored/abliterated）图像与文本模型在下载量上占据显著份额，反映社区需求侧的结构性偏好。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
  Qwen | 👍 17,461 | ⬇️ 6,843,108
  本轮榜单的绝对中心，Qwen3.8 基座模型，是几乎所有衍生微调与量化的上游来源。

- **Qwen/Qwen3.8-Flash-Next** — [链接](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  Qwen | 👍 6,095 | ⬇️ 1,870,465
  基于 qwen4_exp 的 Flash 新版本，主打高效对话，是本周被二次创作最多的模型之一。

- **deepseek-ai/DeepSeek-V4.1-Flash** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  deepseek-ai | 👍 4,338 | ⬇️ 1,382,367
  DeepSeek 新一代 Flash 模型，兼顾文本生成与图文理解，是 Qwen 之外最强竞品信号。

- **Aleph-Alpha/Kolibri-1** — [链接](https://huggingface.co/Aleph-Alpha/Kolibri-1)
  Aleph-Alpha | 👍 876 | ⬇️ 12,550
  支持 vLLM 的 MoE 推理模型，主打 reasoning，代表欧洲实验室的开放权重尝试。

- **Venastine-Research/Xing4.0-29B-A4B-GGUF** — [链接](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)
  Venastine-Research | 👍 687 | ⬇️ 48,389
  29B 规模的 Xing4.0 GGUF 版本，以激活参数稀疏化（A4B）降低推理成本。

- **ConwayResearch/Underdog-Saluki-27B-1.0** — [链接](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)
  ConwayResearch | 👍 295 | ⬇️ 108,900
  2-bit 量化的 27B 模型，突出工具调用/函数调用能力，面向本地 agent 场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
  Lightricks | 👍 7,214 | ⬇️ 1,726,683
  本轮点赞最高的生成模型，覆盖图生视频、文生视频与视频到视频，视频生成赛道热度领跑。

- **abenzerps/Qwen-Image-2.1-Uncensored-GGUF** — [链接](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)
  abenzerps | 👍 3,913 | ⬇️ 2,188,658
  下载量全场最高，Qwen-Image 2.1 的无审查 GGUF 版本，主打 ComfyUI 本地出图。

- **Qwen/Qwen-Image-2.1** — [链接](https://huggingface.co/Qwen/Qwen-Image-2.1)
  Qwen | 👍 3,211 | ⬇️ 136,103
  Qwen 官方图像生成与编辑模型，是众多图像类微调与量化的底座。

- **Cloudflare/clef** — [链接](https://huggingface.co/Cloudflare/clef)
  Cloudflare | 👍 2,008 | ⬇️ 14,351
  基于 qwen3_5 的图文理解模型，由 Cloudflare 发布，体现云厂商布局多模态推理。

- **Alissonerdx/BFS-Best-Face-Swap** — [链接](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)
  Alissonerdx | 👍 1,365 | ⬇️ 253,548
  基于 Qwen-Image 2.1 的 LoRA 换脸模型，是图像编辑向细分应用落地的代表。

- **Cloudflare/clef-flash** — [链接](https://huggingface.co/Cloudflare/clef-flash)
  Cloudflare | 👍 745 | ⬇️ 22,123
  clef 的轻量版，面向更低延迟的图文推理。

- **Qwen/Qwen-Image-2.1-Turbo** — [链接](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)
  Qwen | 👍 484 | ⬇️ 4,702
  Qwen-Image 2.1 的加速版本，支持图像生成与编辑。

- **canberkkkkkk/ema-lightning** — [链接](https://huggingface.co/canberkkkkkk/ema-lightning)
  canberkkkkkk | 👍 347 | ⬇️ 18,079
  土耳其语语音合成（TTS）模型，是榜单中少见的语种专用语音项目。

- **AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF** — [链接](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)
  AtomicChat | 👍 266 | ⬇️ 100,530
  Turbo 版无审查 GGUF，延续 Qwen-Image 生态的本地化生成路线。

- **FrancisRing/Prism** — [链接](https://huggingface.co/FrancisRing/Prism)
  FrancisRing | 👍 157 | ⬇️ 0
  视频扩散 Transformer，主打视频与音频联合生成，点赞偏低但方向前沿。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **google/embeddinggemma-2** — [链接](https://huggingface.co/google/embeddinggemma-2)
  google | 👍 1,567 | ⬇️ 98,829
  Google 新一代嵌入模型，是本周嵌入/检索方向的标杆。

- **convaiinnovations/laya** — [链接](https://huggingface.co/convaiinnovations/laya)
  convaiinnovations | 👍 5,479 | ⬇️ 44,088
  文本分类模型，主打“system-one”与校准决策，是对话式 AI 基础设施方向的探索。

- **Cactus-Compute/whistle** — [链接](https://huggingface.co/Cactus-Compute/whistle)
  Cactus-Compute | 👍 322 | ⬇️ 16,434
  端上（on-device）语音识别模型，面向本地部署的语音转文本。

- **LiquidAI/d1-3B** — [链接](https://huggingface.co/LiquidAI/d1-3B)
  LiquidAI | 👍 285 | ⬇️ 10,843
  基于 LFM2-VL 的 3B 图文理解小模型，面向轻量多模态场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
  unsloth | 👍 5,013 | ⬇️ 6,488,262
  Qwen3.8-27B 的官方 GGUF 量化版，下载量全场第二，是本地部署的首选入口。

- **prism-ml/Ternary-Bonsai-2-27B-gguf** — [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  prism-ml | 👍 2,613 | ⬇️ 4,549,911
  三值（ternary）2-bit 量化模型，基于 llama.cpp，代表极限压缩的新方向。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
  ISTA-DASLab | 👍 2,123 | ⬇️ 1,489,676
  GSQ-RCO 混合精度量化，来自学术机构，方法论文属性强。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — [链接](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
  DavidAU | 👍 1,645 | ⬇️ 2,016,567
  典型 DavidAU 式多配方融合微调，无审查 + 代码向，社区个性化定制的极端样本。

- **ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)
  ISTA-DASLab | 👍 783 | ⬇️ 4,189,006
  把 GSQ-RCO 量化扩展到 Flash-Next，下载量极高，说明量化需求集中在旗舰变体上。

- **orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF** — [链接](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)
  orcarouter | 👍 742 | ⬇️ 614,193
  abliterated 无审查量化版，面向受限内容场景。

- **unsloth/embeddinggemma-2-GGUF** — [链接](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)
  unsloth | 👍 241 | ⬇️ 59,274
  对 Google 嵌入模型的 GGUF 量化，兼顾多模态嵌入与本地部署。

- **nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2** — [链接](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)
  nerkyor | 👍 213 | ⬇️ 56,525
  名称堆叠多模型配方的 SFT 微调，主打高效思考与推理。

- **SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF** — [链接](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)
  SC117 | 👍 197 | ⬇️ 906,582
  在 GSQ-RCO 量化基础上叠加 abliteration，量化与无审查两条主线的合流。

---

## 三、生态信号（约 190 字）

本周生态呈现明显的“**Qwen 单极 + 量化放大**”结构。Qwen3.8-27B 与 Flash-Next 占据榜单上游，并催生出大量社区微调与量化衍生品，几乎覆盖全部四个分类。量化方向从常规 GGUF 走向**极限压缩与混合精度**：prism-ml 的三值 2-bit 与 ISTA-DASLab 的 GSQ-RCO 系列下载量均达数百万，说明本地推理需求强劲。开源权重仍占主导，Cloudflare、Lightricks、DeepSeek 等机构持续放开权重，闭源信号不明显。值得注意的另一点是**无审查/abliterated 版本已成常态**，多个 Qwen-Image 与 Qwen3.8 变体在下载榜名列前茅，社区偏好正直接塑造二次创作方向。

---

## 四、值得探索

1. **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
   本周绝对中心，理解当前榜单的衍生生态（量化、微调、无审查）都需以此为基础，是性价比最高的研究起点。

2. **prism-ml/Ternary-Bonsai-2-27B-gguf** — [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
   三值 2-bit 量化在 27B 规模上落地，兼具极高下载量与前沿方法价值，适合研究极限压缩下的可用性边界。

3. **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
   点赞最高的生成模型，单一权重覆盖图生视频/文生视频/视频到视频三任务，是视频生成方向最值得试用的开源选择。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*