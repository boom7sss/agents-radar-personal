# Hugging Face 热门模型日报 2026-09-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-29 14:21 UTC

---

# Hugging Face 热门模型日报（2026-09-29）

## 1. 今日速览

今日榜单由 Qwen 生态全面主导：`Qwen/Qwen3.8-27B` 以 16,533 点赞高居榜首，围绕其衍生的量化、微调、二次开发占据近半席位。图像生成赛道由 `Qwen-Image-2.1` 领跑，官方模型加上社区无审查版、GGUF 量化版与 ComfyUI 适配版形成完整链条。量化活动极其活跃，`prism-ml/Ternary-Bonsai-2-27B-gguf` 下载量突破 358 万，`Comfy-Org/Qwen-Image-2.1` 下载量达 470 万，显示本地部署需求旺盛。视频与语音方向亦有亮点，Lightricks 的 `LTX-2.5` 与小米 MiMo 系列多模态模型同步上榜。

## 2. 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
  Qwen｜16,533 赞｜7,020,239 下载
  本周榜首，Qwen 最新 27B 多模态对话模型，下载量与点赞双高，是整个生态的基座模型。

- **deepseek-ai/DeepSeek-V4.1-Flash** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  deepseek-ai｜3,884 赞｜690,388 下载
  DeepSeek 新一代轻量多模态模型，官方出品带来高热度和稳定下载。

- **XingChen-AGI/Xing4.0-29B-A4B** — [链接](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
  XingChen-AGI｜1,805 赞｜46,557 下载
  29B 对话模型，采用 A4B 架构，是国产开源 LLM 的新晋选手。

- **Altworld/Hemmingway-1** — [链接](https://huggingface.co/Altworld/Hemmingway-1)
  Altworld｜769 赞｜7,880 下载
  基于 qwen3_5_text 的文本生成模型，定位写作风格化生成。

- **XiaomiMiMo/MiMo-V2.6-Pro-RL** — [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  XiaomiMiMo｜595 赞｜78,135 下载
  小米 MiMo V2.6 强化学习版本，多模态文本生成，下载量可观。

- **XiaomiMiMo/MiMo-V2.6-Flash-RL** — [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  XiaomiMiMo｜517 赞｜39,625 下载
  MiMo 系列的 Flash 轻量 RL 版本，主打高效多模态生成。

- **orcarouter/OrcaSAQ-2-27B** — [链接](https://huggingface.co/orcarouter/OrcaSAQ-2-27B)
  orcarouter｜205 赞｜2,143 下载
  基于 qwen3_5 的 vLLM 推理文本生成模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
  Lightricks｜5,492 赞｜1,589,098 下载
  支持图生视频、文生视频、视频生视频的全能视频扩散模型，本周生成赛道高赞代表。

- **Qwen/Qwen-Image-2.1** — [链接](https://huggingface.co/Qwen/Qwen-Image-2.1)
  Qwen｜2,637 赞｜64,362 下载
  官方文生图与图像编辑模型，是整个图像生态的核心基座。

- **convaiinnovations/laya** — [链接](https://huggingface.co/convaiinnovations/laya)
  convaiinnovations｜4,444 赞｜0 下载
  主打"system-one 校准决策"的文本分类模型，点赞极高但尚无下载，值得警惕其热度真实性。

- **TaichuAI/ZDTaichu5.0-9B** — [链接](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)
  TaichuAI｜1,906 赞｜11,836 下载
  紫东太初 5.0 多模态视觉语言模型，主打空间推理能力。

- **Edge0/Audio8-ASR-Infinite** — [链接](https://huggingface.co/Edge0/Audio8-ASR-Infinite)
  Edge0｜1,464 赞｜23,674 下载
  流式语音识别模型，主打无限长音频转写。

- **netease-youdao/Confucius4-R2T2** — [链接](https://huggingface.co/netease-youdao/Confucius4-R2T2)
  netease-youdao｜458 赞｜10,482 下载
  网易有道基于 qwen3_asr 的语音识别模型。

- **Viggle/Qwen-Image-2.1-viggle-turbo** — [链接](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)
  Viggle｜407 赞｜190,649 下载
  基于 Qwen-Image-2.1 的 LoRA 加速模型，支持图生图。

- **inclusionAI/Ming-Image-0.1-Design** — [链接](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)
  inclusionAI｜342 赞｜0 下载
  面向设计场景的文生图模型，暂无下载。

- **XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B** — [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)
  XiaomiMiMo｜560 赞｜11,131 下载
  基于 Qwen 蒸馏的 9B 多模态模型。

- **apple/LensVLM-9B** — [链接](https://huggingface.co/apple/LensVLM-9B)
  apple｜263 赞｜1,956 下载
  苹果开源 9B 视觉语言模型。

- **nvidia/Nemotron-3-Diarization** — [链接](https://huggingface.co/nvidia/Nemotron-3-Diarization)
  nvidia｜495 赞｜30,931 下载
  英伟达语音活动检测与说话人分离模型。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **XingChen-AGI/TeleOCR** — [链接](https://huggingface.co/XingChen-AGI/TeleOCR)
  XingChen-AGI｜852 赞｜30,354 下载
  基于 qwen2_5_vl 的 OCR 专用模型。

- **fastino/GLiNER2.5-Decide** — [链接](https://huggingface.co/fastino/GLiNER2.5-Decide)
  fastino｜238 赞｜29,199 下载
  GLiNER 系列的抽取与意图分类模型。

- **Contrastive-LM/CLM-v0.1-8B** — [链接](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)
  Contrastive-LM｜509 赞｜1,910 下载
  对比学习驱动的验证器/重排序模型。

- **SupersonicLabs/Julia-1** — [链接](https://huggingface.co/SupersonicLabs/Julia-1)
  SupersonicLabs｜282 赞｜1,725 下载
  多语言决策模型。

- **akhilaaa3/Jev-Omni** — [链接](https://huggingface.co/akhilaaa3/Jev-Omni)
  akhilaaa3｜307 赞｜923 下载
  基于 gemma4_unified 的多模态分类模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **prism-ml/Ternary-Bonsai-2-27B-gguf** — [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  prism-ml｜2,255 赞｜3,581,027 下载
  2-bit 三值量化模型，下载量突破 358 万，本地部署爆款。

- **Comfy-Org/Qwen-Image-2.1** — [链接](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)
  Comfy-Org｜842 赞｜4,699,089 下载
  Qwen-Image-2.1 的 ComfyUI 单文件适配版，下载量高达 470 万。

- **abenzerps/Qwen-Image-2.1-Uncensored-GGUF** — [链接](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)
  abenzerps｜2,372 赞｜1,152,523 下载
  社区无审查 GGUF 量化版，下载量超 115 万。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
  ISTA-DASLab｜1,823 赞｜1,678,861 下载
  混合精度量化版，学术机构出品的 Qwen3.8 压缩方案。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — [链接](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
  DavidAU｜1,266 赞｜1,726,231 下载
  叠加多重微调与 MTP 的无审查 GGUF 融合版。

- **unsloth/Qwen-Image-2.1-GGUF** — [链接](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)
  unsloth｜295 赞｜251,937 下载
  unsloth 出品的量化版。

- **pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF** — [链接](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)
  pottokao｜319 赞｜168,249 下载
  Qwen-Image-2.1 文本编码器的 FP8 量化版。

## 3. 生态信号

Qwen 家族本周势头最盛，`Qwen3.8-27B` 与 `Qwen-Image-2.1` 分别统治语言与图像两条主线，衍生模型占据榜单近半。小米 MiMo V2.6 系列一次上榜三款，形成自有产品矩阵；DeepSeek V4.1 与苹果 LensVLM、英伟达 Nemotron 显示大厂持续开源权重。量化与微调活动异常活跃：三值 2-bit、GSQ 混合精度、Unsloth 与 ComfyUI 适配齐发力，`Comfy-Org` 与 `prism-ml` 单品下载均破百万乃至数百万，说明社区本地部署与二次创作需求已超过单纯基座下载。值得警惕的是部分模型点赞极高但下载为 0（如 laya、Ming-Image-0.1-Design），热度与真实使用存在脱节。

## 4. 值得探索

1. **Qwen/Qwen3.8-27B**（[链接](https://huggingface.co/Qwen/Qwen3.8-27B)）— 榜单双料第一，907 万下载说明其已成为新一代基座标准，是理解当前生态绕不开的模型。

2. **prism-ml/Ternary-Bonsai-2-27B-gguf**（[链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)）— 2-bit 三值量化在 27B 规模上的落地代表，358 万下载验证了极限压缩的实用性，适合研究端侧推理。

3. **Lightricks/LTX-2.5**（[链接](https://huggingface.co/Lightricks/LTX-2.5)）— 同时覆盖文生视频、图生视频、视频生视频，是本周视频生成方向最完整的开源方案。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*