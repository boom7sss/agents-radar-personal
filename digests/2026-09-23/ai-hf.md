# Hugging Face 热门模型日报 2026-09-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-23 12:11 UTC

---

# Hugging Face 热门模型日报（2026-09-23）

## 今日速览

今日榜单由 Qwen 家族全面主导，`Qwen/Qwen3.8-27B` 以 16,106 点赞、691 万下载稳居热度榜首，派生量化与微调版本（unsloth、ISTA-DASLab、ukisai、DavidAU）几乎覆盖整个榜单。视频生成持续升温，Lightricks 的 `LTX-2.5`（4,851 赞）与 MiniMax 的 `MiniMax-H3`（5,616 赞、366 万下载）双双进入高热度区间。量化活动异常活跃，ternary/2-bit、GGUF、GSQ-RCO 混合精度等多条技术路线并行推进，`prism-ml/Ternary-Bonsai-2-27B-gguf` 单周下载高达 281 万。同时，Qwen-Image-2.1 生态迅速衍生出官方、ComfyUI 与社区无审查版本，显示图像生成工作流化趋势明显。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 16,106 赞 / 6,912,469 下载
  本周热度最高的旗舰多模态对话模型，是榜单内几乎所有量化与微调版本的基座。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 5,626 赞 / 807,550 下载
  Qwen 新一代高效多模态对话模型（qwen4_exp 标签），主打 Flash 级推理效率。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 3,642 赞 / 570,909 下载
  DeepSeek 最新的图像-文本到文本 Flash 模型，是本周点赞数第二的原创权重发布。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI | 1,444 赞 / 39,009 下载
  29B 参数、A4B 激活的对话模型，属于近期 MoE 高效架构的代表作品。

- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)** — TokenRhythm | 1,010 赞 / 13,009 下载
  基于 qwen3.5_text 的 9B 轻量代理型（agentic）文本生成模型。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 532 赞 / 3,787 下载
  基于 qwen3_5_text / qwen3.8 的文本生成模型，社区关注度快速上升。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — XiaomiMiMo | 428 赞 / 4,070 下载
  小米 MiMo V2.6 的 Pro 强化学习版本，主打多模态文本生成。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — XiaomiMiMo | 409 赞 / 13,243 下载
  MiMo V2.6 的 Flash 强化学习版本，下载量明显高于 Pro 版本。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** — yandex | 284 赞 / 2,254 下载
  Yandex 的 80B 总参、A3B 激活基础模型，采用 custom_code 实现。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** — harshatheg | 552 赞 / 0 下载
  面向 Apple Silicon（MLX）的并行/受限解码结构化生成小模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 1,923 赞 / 28,407 下载
  Qwen 官方图像生成与编辑模型，是本周图像生态的核心基座。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 4,851 赞 / 1,638,605 下载
  支持图像/文本/视频到视频的多模态视频生成模型，是本周视频赛道热度最高的原创发布。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 5,616 赞 / 3,664,216 下载
  基于 diffusers 的图像-文本到视频模型，本周多模态生成中下载量最高者之一。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — m-a-p | 978 赞 / 22,415 下载
  3B 音乐生成模型，具备符号规划与 agentic 编辑能力。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI | 468 赞 / 6,934 下载
  主打空间推理的视觉-语言多模态模型。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — XiaomiMiMo | 379 赞 / 3,253 下载
  基于 Qwen3.5 的 MiMo V2.6 蒸馏 9B 多模态模型。

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** — ukisai | 552 赞 / 17,837 下载
  Qwen3.8-27B 的 Swift 微调版，主打快速推理。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 599 赞 / 2,220,609 下载
  Qwen-Image-2.1 的 ComfyUI 单文件扩散版本，下载量极高，体现工作流化分发趋势。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 2,865 赞 / 0 下载
  采用 system-one、calibrated-decisions 设计的文本分类模型，本周点赞数第三。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega | 495 赞 / 0 下载
  基于 qwen3.5 的 NLI 交叉编码器文本分类模型。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — netease-youdao | 324 赞 / 3,708 下载
  基于 qwen3_asr 的语音识别（ASR）模型。

- **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)** — convaiinnovations | 202 赞 / 0 下载
  laya 的多语言版本，基于 mmbert 构建。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 4,545 赞 / 7,134,167 下载
  本周下载量最高（713 万）的 Qwen3.8-27B 量化 GGUF，是量化分发的标杆。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 1,913 赞 / 2,815,979 下载
  ternary / 2-bit 三值量化模型，llama.cpp 路线，单周下载近 282 万。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 1,592 赞 / 1,414,991 下载
  采用 GSQ-RCO 混合精度量化的 Qwen3.8-27B GGUF，学术量化路线代表。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 1,105 赞 / 1,452,915 下载
  基于 unsloth 的社区融合微调量化版本，标签含 heretic / uncensored。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 1,297 赞 / 350,678 下载
  Qwen-Image-2.1 的无审查 GGUF 版，面向 ComfyUI-GGUF 工作流。

- **[ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)** — ukisai | 367 赞 / 168,762 下载
  Swift 微调版的 GGUF 量化，主打高效推理。

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** — prism-ml | 347 赞 / 48,214 下载
  三值量化的 MLX 2-bit 版本，面向 Apple Silicon。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 249 赞 / 80,659 下载
  Qwen3.8-Flash-Next 的 GSQ-RCO 混合精度 GGUF 量化版。

---

## 生态信号

本周生态高度集中于 Qwen 家族：Qwen3.8-27B 及其派生版本（unsloth、ISTA-DASLab、ukisai、DavidAU）占据榜单近半，形成"基座—微调—量化"完整链条，且 Qwen3.8-Flash-Next 已进入 qwen4_exp 阶段，显示迭代速度加快。视频生成由 LTX-2.5 与 MiniMax-H3 领跑，成为继图像后最热的多模态赛道。开源权重明显占优——榜单全部为开放权重发布，无闭源迹象。量化方向尤为活跃，ternary/2-bit、GGUF、GSQ-RCO 多路线并进，且普遍向 llama.cpp 与 MLX 双平台分发，社区"无审查/heretic"微调亦持续存在。

---

## 值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 以三值/2-bit 量化实现 27B 模型在 llama.cpp 上的高效部署，单周下载近 282 万，是研究极低比特量化的绝佳样本。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 采用 GSQ-RCO 混合精度方案，代表了学术机构在量化算法上的最新探索，适合对比不同量化策略的效果。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 同时支持图像、文本、视频到视频生成的统一视频模型，点赞 4,851，是紧跟视频生成前沿的必试选项。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*