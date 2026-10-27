# Hugging Face 热门模型日报 2026-10-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-10 13:58 UTC

---

# Hugging Face 热门模型日报（2026-10-10）

## 今日速览

今日榜单由 Qwen 系生态全面主导：官方 Qwen3.8-27B 以 17,388 点赞、676 万下载稳居榜首，配套的 Flash-Next、Qwen-Image-2.1 及大量社区微调/量化版本形成完整矩阵。视频生成热度惊人，Lightricks/LTX-2.5 以 7,116 点赞领跑非语言模型，下载超 172 万。量化活动空前活跃，"GSQ-RCO 混合精度"GGUF 由 ISTA-DASLab 与社区共同铺开，覆盖 Flash-Next 与 27B 两条主线，极低位宽（2-bit/ternary）与 abliterated 去审查版本同时冲榜。嵌入侧，google/embeddinggemma-2 及其 unsloth GGUF 版双双入榜，显示多模态嵌入需求升温。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 17,388 赞 | 6,768,654 下载
  官方旗舰多模态对话模型，全榜点赞与下载双第一，是整个生态微调与量化的源头基座。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 6,070 赞 | 1,798,393 下载
  采用 qwen4_exp 架构的轻量快速版本，高下载量显示其已成为社区量化改造的首选底座。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 4,310 赞 | 1,355,278 下载
  DeepSeek 新一代 Flash 模型，同时支持文本与图文输入，是 Qwen 之外最强势的官方开源选手。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 5,450 赞 | 42,936 下载
  主打"system-one"校准决策的对话模型，高点赞低下载的比值说明其引发广泛围观与讨论。

- **[Aleph-Alpha/Kolibri-1](https://huggingface.co/Aleph-Alpha/Kolibri-1)** — Aleph-Alpha | 853 赞 | 10,496 下载
  MoE 架构推理模型，支持 vLLM 部署，代表欧洲团队的推理专用方向。

- **[Venastine-Research/Xing4.0-29B-A4B-GGUF](https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF)** — Venastine-Research | 678 赞 | 45,199 下载
  29B 激活 4B 的稀疏架构 GGUF 版本，兼顾性能与本地部署效率。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)** — ConwayResearch | 235 赞 | 59,191 下载
  主打 2-bit 极低位宽与工具/函数调用能力的 27B 模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 7,116 赞 | 1,720,888 下载
  支持图生视频、文生视频、视频转视频的扩散模型，是今日最具统治力的生成式视觉发布。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 3,821 赞 | 2,096,562 下载
  基于 Qwen-Image-2.1 的去审查 GGUF 版，下载量惊人，可对接 ComfyUI 使用。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 3,181 赞 | 128,839 下载
  Qwen 官方图像生成与编辑模型，是社区衍生版本（含 Uncensored、LoRA）的核心基座。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)** — Cloudflare | 1,970 赞 | 13,579 下载
  基于 qwen3_5 的图文理解模型，Cloudflare 入局开源多模态，点赞位列全榜第二。

- **[Alissonerdx/BFS-Best-Face-Swap](https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap)** — Alissonerdx | 1,349 赞 | 248,475 下载
  基于 Qwen-Image-2.1 的人脸替换 LoRA，是图像编辑方向的爆款工具型资产。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)** — jialinyyzz | 894 赞 | 33,664 下载
  基于 gemma4_unified 的图文模型，主打文本"人化"风格改写。

- **[Cloudflare/clef-flash](https://huggingface.co/Cloudflare/clef-flash)** — Cloudflare | 723 赞 | 20,670 下载
  clef 的快速版，延续 Cloudflare 的图文理解产品线。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)** — Qwen | 397 赞 | 2,138 下载
  Qwen-Image-2.1 的加速版，发布初期，下载量尚低。

- **[canberkkkkkk/ema-lightning](https://huggingface.co/canberkkkkkk/ema-lightning)** — canberkkkkkk | 327 赞 | 15,710 下载
  面向土耳其语的语音合成（TTS）模型，是小语种语音方向的亮点。

- **[FrancisRing/Prism](https://huggingface.co/FrancisRing/Prism)** — FrancisRing | 141 赞 | 0 下载
  联合视频-音频生成的视频扩散 Transformer，零下载说明尚处早期/未公开权重状态。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — google | 1,435 赞 | 45,605 下载
  Google 新一代嵌入模型，位列专用模型点赞第一，代表检索/嵌入赛道持续升温。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)** — Cactus-Compute | 294 赞 | 12,816 下载
  基于 cactus-needle 的端侧语音识别模型，主打设备本地 ASR。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)** — LiquidAI | 252 赞 | 9,088 下载
  Liquid 的 lfm2_vl 小参数图文模型，适合轻量多模态场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 4,992 赞 | 6,449,020 下载
  Qwen3.8-27B 的官方量化搭档，下载量仅次于原模型，是本地部署的首选。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 2,582 赞 | 4,457,576 下载
  三值（ternary）/2-bit 极低位宽量化模型，超 445 万下载印证极端压缩路线的真实需求。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 2,104 赞 | 1,484,655 下载
  采用 GSQ-RCO 混合精度量化的学术成果，将新量化方法直接落地到主流基座。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 763 赞 | 3,922,328 下载
  同款量化方法应用于 Flash-Next，下载量高达 392 万，是学术量化的最大赢家。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 1,622 赞 | 1,960,274 下载
  DavidAU 标志性的超长命名去审查多能力融合微调，近 200 万下载显示其稳定受众。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)** — orcarouter | 716 赞 | 520,450 下载
  Flash-Next 的 abliterated 去审查 GGUF 版本。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — SC117 | 182 赞 | 765,376 下载
  将 GSQ-RCO 量化与 abliterated 去审查两个热点叠加的社区改造版。

- **[orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF)** — orcarouter | 495 赞 | 22,667 下载
  面向网络安全场景的去审查 GGUF 模型。

- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)** — nerkyor | 162 赞 | 42,336 下载
  命名堆叠多家模型标签的社区融合微调，主打高效推理与代码能力。

- **[unsloth/embeddinggemma-2-GGUF](https://huggingface.co/unsloth/embeddinggemma-2-GGUF)** — unsloth | 221 赞 | 50,551 下载
  embeddinggemma-2 的 GGUF 量化版，支持多模态嵌入。

---

## 生态信号

Qwen 系（3.8/27B、Flash-Next、Image-2.1）是今日绝对主轴，官方发布后 24 小时内即被量化、微调、去审查版本全面覆盖，形成"官方基座 + 社区长尾"的双层结构。量化是最活跃的创新层：ISTA-DASLab 的 GSQ-RCO 混合精度、prism-ml 的三值 2-bit、unsloth 的 GGUF 三线并进，说明极低位宽本地部署已从小众走向主流。去审查（uncensored/abliterated）内容持续高产，多围绕 Qwen 与图像模型展开。开源权重侧，Qwen、DeepSeek、Google、Cloudflare、LiquidAI 均有官方发布，开源与社区协作的密度明显高于闭源导向。视频生成（LTX-2.5）与多模态嵌入（embeddinggemma-2）成为语言模型之外的两条新增长曲线。

---

## 值得探索

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 同时覆盖图/文/视频多种输入与视频转视频，是当前最完整的开源视频生成套件之一，7116 点赞与 172 万下载说明其可用性已获验证，值得测试生成质量与推理成本。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — 将学术级 GSQ-RCO 混合精度量化落到热门基座上，392 万下载量远超同类，是研究"精度-体积-效果"权衡的高价值样本。

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)** — 专用模型中点赞最高，且已有 unsloth GGUF 版本支持多模态嵌入，适合作为 RAG 与检索系统的升级评估对象。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值 2-bit 量化在 27B 规模上的实践，445 万下载印证极端压缩的实用价值，适合研究本地推理的边缘部署方案。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*