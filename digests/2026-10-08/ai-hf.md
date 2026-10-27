# Hugging Face 热门模型日报 2026-10-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-08 15:01 UTC

---

# Hugging Face 热门模型日报（2026-10-08）

## 今日速览

本周榜单由 Qwen 家族全面主导：Qwen/Qwen3.8-27B 以 17,259 点赞、684 万下载高居榜首，Qwen3.8-Flash-Next 与 Qwen-Image-2.1 同步上榜，形成从语言到图像的多线布局。多模态与生成方向热度持续爆发，Lightricks/LTX-2.5（6,880 赞）和 Qwen3.8-27B 领跑，Cloudflare 的 clef 系列则以近乎零下载的高点赞展现"发布即关注"的新品效应。量化社区异常活跃，ISTA-DASLab、prism-ml、unsloth、DavidAU 等围绕 GGUF、三值/2-bit 与混合精度展开密集迭代，其中 Ternary-Bonsai-2-27B 下载已达 434 万。同时，"uncensored / abliterated"类微调持续占据可观的下载份额，反映社区对开放权重的强烈需求。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen | 点赞 17,259 | 下载 6,841,660
  本周绝对头部：官方 Qwen3.8 对话/多模态主力模型，点赞与下载双榜第一，是当前生态关注度的基准。

- **Aleph-Alpha/Kolibri-1** — https://huggingface.co/Aleph-Alpha/Kolibri-1
  Aleph-Alpha | 点赞 801 | 下载 6,777
  基于 MoE 架构的推理（reasoning）文本生成模型，支持 vLLM，点赞远高于下载，属新发布高关注度模型。

- **Venastine-Research/Xing4.0-29B-A4B-GGUF** — https://huggingface.co/Venastine-Research/Xing4.0-29B-A4B-GGUF
  Venastine-Research | 点赞 639 | 下载 36,481
  Xing4.0 家族的 29B 激活 4B GGUF 版本，主打本地可部署的文本生成。

- **Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw** — https://huggingface.co/Infatoshi/GLM-5.3-UNCENSORED-EXL3-3.0bpw
  Infatoshi | 点赞 299 | 下载 2,091
  GLM-5.3 MoE 的去审查版本，采用 EXL3 3.0bpw 极低位宽量化，面向 exllamav3 推理。

- **Cactus-Compute/whistle** — https://huggingface.co/Cactus-Compute/whistle
  Cactus-Compute | 点赞 158 | 下载 2,594
  端侧（on-device）语音识别模型，基于 cactus-needle，代表轻量专用模型方向。

- **LiquidAI/d1-3B** — https://huggingface.co/LiquidAI/d1-3B
  LiquidAI | 点赞 156 | 下载 5,370
  LiquidAI 的 lfm2_vl 系列小型多模态模型，主打小参数与 Liquid 架构。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Lightricks | 点赞 6,880 | 下载 1,688,807
  本周最高赞模型：支持图生视频、文生视频、视频生视频的扩散模型，是视频生成方向的旗舰发布。

- **autotrust/JEV-27B-VL** — https://huggingface.co/autotrust/JEV-27B-VL
  autotrust | 点赞 2,693 | 下载 1,533,034
  基于 qwen3_5 的图文输入模型（jev 系列），点赞与下载双高，是社区最热的第三方多模态分支之一。

- **Cloudflare/clef** — https://huggingface.co/Cloudflare/clef
  Cloudflare | 点赞 1,865 | 下载 10,874
  Cloudflare 官方首发的图文理解模型（clef），下载极少但点赞极高，典型的"新品即关注"。

- **Cloudflare/clef-flash** — https://huggingface.co/Cloudflare/clef-flash
  Cloudflare | 点赞 682 | 下载 17,587
  clef 的轻量 Flash 版本，面向更低延迟的图文任务。

- **Qwen/Qwen-Image-2.1** — https://huggingface.co/Qwen/Qwen-Image-2.1
  Qwen | 点赞 3,118 | 下载 116,957
  官方图像生成/编辑模型，基于 diffusers，是 Qwen 图像线的最新迭代。

- **abenzerps/Qwen-Image-2.1-Uncensored-GGUF** — https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF
  abenzerps | 点赞 3,648 | 下载 1,933,066
  Qwen-Image-2.1 的去审查 GGUF 版，ComfyUI 可用，下载量近 200 万，位居生成类前列。

- **Alissonerdx/BFS-Best-Face-Swap** — https://huggingface.co/Alissonerdx/BFS-Best-Face-Swap
  Alissonerdx | 点赞 1,314 | 下载 243,910
  基于 qwen-image-2.1 的换脸 LoRA（diffusers），图生图方向的社区热门。

- **TaichuAI/ZDTaichu5.0-9B** — https://huggingface.co/TaichuAI/ZDTaichu5.0-9B
  TaichuAI | 点赞 2,918 | 下载 13,076
  主打空间推理（spatial-reasoning）的视觉语言模型，强调多模态理解能力。

- **deepseek-ai/DeepSeek-V4.1-Flash** — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
  deepseek-ai | 点赞 4,253 | 下载 1,282,524
  DeepSeek 官方 V4.1 Flash，兼顾文本生成与图文输入，是本周最强官方多模态发布之一。

- **Qwen/Qwen3.8-Flash-Next** — https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  Qwen | 点赞 6,035 | 下载 1,640,938
  Qwen3.8 系列的 Flash-Next 版本，对话与图文能力兼备，点赞数仅次于 LTX-2.5 与 Qwen3.8-27B。

- **canberkkkkkk/ema-lightning** — https://huggingface.co/canberkkkkkk/ema-lightning
  canberkkkkkk | 点赞 295 | 下载 9,467
  土耳其语文本转语音（TTS）模型，代表多语言语音合成的小众但活跃方向。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **google/embeddinggemma-2** — https://huggingface.co/google/embeddinggemma-2
  google | 点赞 1,120 | 下载 21,148
  Google 官方第二代嵌入模型（feature-extraction），是本周嵌入类热度最高的官方发布。

- **unsloth/embeddinggemma-2-GGUF** — https://huggingface.co/unsloth/embeddinggemma-2-GGUF
  unsloth | 点赞 185 | 下载 29,692
  embeddinggemma-2 的 GGUF 量化版，支持多模态嵌入，方便本地部署。

- **autotrust/GEV-26B-Decide** — https://huggingface.co/autotrust/GEV-26B-Decide
  autotrust | 点赞 1,675 | 下载 903,866
  基于 gemma4 的决策/分类模型（system-one），下载近 90 万，属专用决策类高热度模型。

- **autotrust/GEV-26B-Decide-NVFP4** — https://huggingface.co/autotrust/GEV-26B-Decide-NVFP4
  autotrust | 点赞 164 | 下载 19,655
  GEV-26B-Decide 的 NVFP4 量化版，面向 FP4 硬件推理。

- **convaiinnovations/laya** — https://huggingface.co/convaiinnovations/laya
  convaiinnovations | 点赞 5,376 | 下载 36,328
  主打"校准决策"（calibrated-decisions）的 text-classification 模型，点赞数高居本周前三，是专用模型中的黑马。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **prism-ml/Ternary-Bonsai-2-27B-gguf** — https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf
  prism-ml | 点赞 2,539 | 下载 4,345,410
  三值/2-bit GGUF 量化模型，下载量突破 434 万，是本周最受落地的极端量化成果。

- **ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF
  ISTA-DASLab | 点赞 714 | 下载 3,405,442
  Qwen3.8-Flash-Next 的 GSQ-RCO 混合精度 GGUF，下载超 340 万，学术量化方案的规模化落地。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
  ISTA-DASLab | 点赞 2,060 | 下载 1,517,150
  针对 Qwen3.8-27B 的 GSQ-RCO 混合精度量化，与 Flash 版形成完整量化矩阵。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU | 点赞 1,564 | 下载 2,037,446
  极长命名的社区微调 GGUF：去审查 + 编码增强 + 多 token 预测（MTP），下载超 200 万。

- **orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF** — https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF
  orcarouter | 点赞 666 | 下载 492,022
  Qwen3.8-Flash-Next 的 abliterated 去审查 GGUF，下载近 50 万。

- **orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF** — https://huggingface.co/orcarouter/OrcaSAQ-2-Cyber-27B-Uncensored-GGUF
  orcarouter | 点赞 468 | 下载 20,613
  基于 qwen3.8/qwen3_5 的"Cyber"主题去审查 GGUF，面向 llama.cpp 本地推理。

- **jialinyyzz/humanizer** — https://huggingface.co/jialinyyzz/humanizer
  jialinyyzz | 点赞 597 | 下载 23,439
  基于 gemma4_unified 的"人性化"文本生成微调模型，GGUF + safetensors 双格式。

- **autotrust/GLM5.3-Flash-E224-DGX-Spark** — https://huggingface.co/autotrust/GLM5.3-Flash-E224-DGX-Spark
  autotrust | 点赞 243 | 下载 5,422
  GLM5.3-Flash 的 MoE 部署版本，基于 vLLM，面向 DGX Spark 硬件场景。

---

## 生态信号

**Qwen 家族全面主导。** 本周榜单从语言（Qwen3.8-27B）、轻量（Qwen3.8-Flash-Next）到图像（Qwen-Image-2.1）三线齐发，且第三方围绕 qwen3_5/qwen3.8 的微调与量化（ISTA-DASLab、DavidAU、orcarouter、abenzerps）占据了量化榜单的大半，Qwen 已成事实上的社区基座。**开放权重仍是主流选择**：官方模型（Qwen、DeepSeek-V4.1-Flash、google/embeddinggemma-2、LiquidAI）与社区微调同台竞技，去审查（uncensored/abliterated）分支持续获得可观的下载份额。**量化竞争激烈**：极端低位宽（ternary 2-bit、GSQ-RCO 混合精度、NVFP4、EXL3 3.0bpw）并行推进，Ternary-Bonsai-2-27B 超 434 万下载表明低位宽本地部署需求极为旺盛。

---

## 值得探索

1. **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
   本周最高赞（6,880），单一模型同时覆盖图生视频、文生视频、视频生视频，是评估视频生成当前水平的最佳入口。

2. **prism-ml/Ternary-Bonsai-2-27B-gguf** — https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf
   三值/2-bit 极端量化且下载超 434 万，值得研究其质量-体积权衡，对本地部署与边缘推理有直接参考价值。

3. **google/embeddinggemma-2** — https://huggingface.co/google/embeddinggemma-2
   Google 官方第二代嵌入模型，且有 unsloth 的 GGUF 版可直接落地，是检索/RAG 场景最值得优先验证的组件。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*