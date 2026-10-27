# Hugging Face 热门模型日报 2026-09-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-26 13:23 UTC

---

# Hugging Face 热门模型日报（2026-09-26）

## 今日速览

今日榜单被 **Qwen 家族**强势主导：`Qwen/Qwen3.8-27B` 以 16,317 周点赞高居榜首，其量化版、图文版与 Flash 变体同时上榜，形成完整的模型矩阵。社区量化活动极为活跃，`unsloth` 与 `ISTA-DASLab` 的 GGUF 版本下载量合计超过 800 万，反映本地部署需求旺盛。图像生成方面，`Qwen-Image-2.1` 及其无审查 GGUF 版带动了一波基于 ComfyUI 的工作流生态。此外，超低比特量化（`prism-ml` 的三值 2-bit 模型）与多模态视觉语言模型（小米 MiMo、中科院 Taichu）同日发布，显示效率与多模态两条主线并进。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
  Qwen | 点赞 16,317 | 下载 6,652,309
  本周绝对主角，Qwen 新一代旗舰，支持图文输入与对话，超高下载量表明其已成为社区基座首选。

- **Qwen/Qwen3.8-Flash-Next** — [链接](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  Qwen | 点赞 5,713 | 下载 1,073,493
  基于 `qwen4_exp` 的轻量快速版，主打低延迟对话，是 Qwen 在推理效率方向的探索。

- **deepseek-ai/DeepSeek-V4.1-Flash** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  deepseek-ai | 点赞 3,762 | 下载 640,577
  DeepSeek 最新 Flash 系列，支持图文输入生成，延续其高性价比路线。

- **XingChen-AGI/Xing4.0-29B-A4B** — [链接](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
  XingChen-AGI | 点赞 1,709 | 下载 43,947
  29B MoE（A4B 激活）对话模型，稀疏激活架构吸引关注。

- **Altworld/Hemmingway-1** — [链接](https://huggingface.co/Altworld/Hemmingway-1)
  Altworld | 点赞 692 | 下载 5,590
  基于 `qwen3_5_text` 的文本生成模型，定位文学化写作。

- **yandex/AliceAI-Foundation-80B-A3B-Base** — [链接](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)
  yandex | 点赞 336 | 下载 3,336
  Yandex 的 80B MoE 基座（A3B 激活），需自定义代码加载，属于大厂开源基座。

- **XiaomiMiMo/MiMo-V2.6-Pro-RL** — [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
  XiaomiMiMo | 点赞 514 | 下载 74,497
  小米 MiMo V2.6 系列强化学习版，主打多模态能力。

- **XiaomiMiMo/MiMo-V2.6-Flash-RL** — [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  XiaomiMiMo | 点赞 473 | 下载 23,000
  MiMo V2.6 的 Flash 强化学习版，面向快速多模态生成。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **Qwen/Qwen-Image-2.1** — [链接](https://huggingface.co/Qwen/Qwen-Image-2.1)
  Qwen | 点赞 2,377 | 下载 48,361
  Qwen 图像生成/编辑新版本，是本周图像生态的核心基座。

- **abenzerps/Qwen-Image-2.1-Uncensored-GGUF** — [链接](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)
  abenzerps | 点赞 1,875 | 下载 876,673
  去审查 GGUF 版本，下载量远超官方版，专为 ComfyUI 本地工作流打造。

- **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
  Lightricks | 点赞 5,165 | 下载 1,604,804
  支持图生视频、文生视频、视频生视频的全能视频模型，视频生成赛道焦点。

- **TaichuAI/ZDTaichu5.0-9B** — [链接](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)
  TaichuAI | 点赞 1,280 | 下载 11,063
  主打空间推理的视觉语言模型，多模态推理方向。

- **XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B** — [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)
  XiaomiMiMo | 点赞 485 | 下载 7,905
  基于 Qwen3.5 蒸馏的 9B 图文模型，体现跨家族蒸馏。

- **Edge0/Audio8-ASR-Infinite** — [链接](https://huggingface.co/Edge0/Audio8-ASR-Infinite)
  Edge0 | 点赞 741 | 下载 7,859
  支持流式识别的语音识别模型，音频方向代表。

- **netease-youdao/Confucius4-R2T2** — [链接](https://huggingface.co/netease-youdao/Confucius4-R2T2)
  netease-youdao | 点赞 419 | 下载 7,155
  网易有道基于 qwen3_asr 的语音识别模型。

- **nvidia/Nemotron-3-Diarization** — [链接](https://huggingface.co/nvidia/Nemotron-3-Diarization)
  nvidia | 点赞 356 | 下载 19,620
  NVIDIA 说话人分离/语音活动检测模型，同时提供 gguf 格式。

- **inclusionAI/Ming-Image-0.1-Design** — [链接](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)
  inclusionAI | 点赞 246 | 下载 0
  面向设计场景的文生图模型，尚处早期无下载。

- **Viggle/Qwen-Image-2.1-viggle-turbo** — [链接](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)
  Viggle | 点赞 268 | 下载 101,512
  基于 Qwen-Image-2.1 的 LoRA 加速版，支持图文互转。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **convaiinnovations/laya** — [链接](https://huggingface.co/convaiinnovations/laya)
  convaiinnovations | 点赞 3,798 | 下载 0
  以“系统一 / 校准决策”为理念的文本分类模型，高点赞但零下载，话题性突出。

- **AlexWortega/openjev** — [链接](https://huggingface.co/AlexWortega/openjev)
  AlexWortega | 点赞 587 | 下载 0
  基于 qwen3.5 的 NLI 交叉编码器，文本分类用途。

- **StarDoc-AI/TeleOCR** — [链接](https://huggingface.co/StarDoc-AI/TeleOCR)
  StarDoc-AI | 点赞 330 | 下载 26,152
  基于 qwen2_5_vl 的 OCR 模型，文档识别方向。

- **akhilaaa3/Jev-Omni** — [链接](https://huggingface.co/akhilaaa3/Jev-Omni)
  akhilaaa3 | 点赞 244 | 下载 128
  基于 gemma4_unified 的文本分类/图文模型。

- **convaiinnovations/laya-multilingual** — [链接](https://huggingface.co/convaiinnovations/laya-multilingual)
  convaiinnovations | 点赞 284 | 下载 0
  laya 的多语言版本，基于 mmbert。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
  unsloth | 点赞 4,639 | 下载 6,832,629
  Qwen3.8-27B 的官方量化合作版，全榜下载量最高的量化模型。

- **prism-ml/Ternary-Bonsai-2-27B-gguf** — [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  prism-ml | 点赞 2,111 | 下载 3,247,527
  三值（ternary）2-bit 量化模型，超低比特压缩的代表，下载量惊人。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
  ISTA-DASLab | 点赞 1,721 | 下载 1,560,929
  采用 GSQ/RCO 混合精度量化的学术版 GGUF。

- **DavidAU/Qwen3.8-27B-...-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — [链接](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
  DavidAU | 点赞 1,194 | 下载 1,603,479
  社区深度魔改微调，主打无审查与多能力融合。

- **Comfy-Org/Qwen-Image-2.1** — [链接](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)
  Comfy-Org | 点赞 756 | 下载 3,641,785
  Qwen-Image-2.1 的单文件扩散版，ComfyUI 一键可用。

- **pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF** — [链接](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)
  pottokao | 点赞 269 | 下载 137,283
  文本编码器量化版（GGUF/Fp8），服务 ComfyUI 生态。

- **unsloth/Qwen-Image-2.1-GGUF** — [链接](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)
  unsloth | 点赞 233 | 下载 170,469
  Qwen-Image-2.1 的 GGUF 量化版。

---

## 生态信号

**Qwen 家族全面制霸**：从基座（Qwen3.8-27B）、快速版（Flash-Next）、图像（Qwen-Image-2.1）到第三方量化，前 30 中近三分之一与 Qwen 相关，其作为开源基座的生态位已相当稳固。**效率与压缩成为主线**：unsloth、ISTA-DASLab 与 prism-ml 的量化版本下载量占绝对优势，尤其 2-bit 三值量化单模型下载超 320 万，说明本地低资源部署是真实强需求。**社区魔改分化明显**：去审查版本（Uncensored、Heretic）下载普遍高于官方原版，ComfyUI 单文件格式成为图像模型的默认分发形态。**多模态与视频齐头并进**：LTX-2.5、DeepSeek-V4.1-Flash、小米 MiMo 系列显示图文/视频能力正从附加项转为标配。整体看，开源权重（多为大厂发布）在榜单占据主导，闭源并未出现在本轮趋势中。

---

## 值得探索

1. **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
   本周断层第一，图文对话全能，配套量化版本齐全，是体验当前开源基座能力的最佳入口。

2. **prism-ml/Ternary-Bonsai-2-27B-gguf** — [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
   三值 2-bit 量化的前沿实践，下载量证明其实用性，值得研究超低比特压缩在真实部署中的表现。

3. **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
   支持文生、图生、视频生视频的全能视频模型，是当前视频生成赛道的重点研究对象。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*