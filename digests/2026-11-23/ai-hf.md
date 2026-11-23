# Hugging Face 热门模型日报 2026-11-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-23 22:04 UTC

---

# Hugging Face 热门模型日报（2026-11-23）

## 今日速览

今日榜单由 **Qwen3.8-27B 生态**主导：上游 Qwen 官方基础模型（21,672 次点赞）带动 unsloth 的 GGUF 量化版（7040 次点赞、784 万下载）、DavidAU 的超长名微调版（4275 次点赞）以及 huihui 的 abliterated 版本同时上榜，可推断这一模型家族在当日榜单上的关注度较高。**thinkingmachines 的 Inkling-2 系列**同样形成集群，Mini、Small 以及 unsloth、AtomicChat 的衍生版本占据多席。多模态方向由 Qwen 官方图像模型占据首位，视频生成方面 Lightricks LTX-2.5（13,181 次点赞）表现突出。本周榜单中，社区的量化版本、越狱微调版本下载量明显高于原始权重，反映出社区实际部署需求集中在本地推理。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 21,672 次点赞 / 6,185,088 次下载
  Qwen 官方 Qwen3.5 架构多模态对话模型，是当日榜单总点赞数最高的模型，也是多条量化版本、微调版本的基座来源。

- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)** — thinkingmachines | 1,444 次点赞 / 55,885 次下载
  Inkling-2 系列的小型版本，是该家族中除 Mini 外最受关注的官方权重。

- **[tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash)** — tencent | 648 次点赞 / 7,696 次下载
  腾讯混元 Hy4-flash 轻量对话模型，下载量偏低但点赞率较高，属于新发布早期的关注信号。

- **[maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash)** — maxwell-model | 391 次点赞 / 3,639 次下载
  基于 Maxwell MoE 架构的新对话模型，属于新锐团队发布的小规模试水作品。

- **[inclusionAI/LingSante-3.1-flash](https://huggingface.co/inclusionAI/LingSante-3.1-flash)** — inclusionAI | 110 次点赞 / 397 次下载
  采用 bailing_hybrid 架构的对话模型，需 custom_code，热度尚在早期。

- **[inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air)** — inclusionAI | 90 次点赞 / 0 次下载
  bailing_moe_v3_vl 家族 FP8 版本，标注 MIT 许可，当日无下载。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** — thinkingmachines | 5,460 次点赞 / 41,888 次下载
  Inkling-2 系列核心多模态模型（inkling2_loop 架构），下载量相对点赞数偏低，显示出“高关注、低部署”的观望状态。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai | 6,614 次点赞 / 524,232 次下载
  DeepSeek V4.1 的 Flash 版图文模型，是语言类模型中热度最高者之一。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 13,181 次点赞 / 3,002,698 次下载
  支持图像到视频、文本到视频和视频到视频的扩散模型，是视频生成方向当日最热模型。

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** — MiniMaxAI | 2,493 次点赞 / 972,272 次下载
  MiniMax-H3 家族的文生图和图生图模型，下载量高，说明已进入实际使用阶段。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook | 8,020 次点赞 / 1,785,519 次下载
  SAM3 分割基础模型（sam3_video），兼具特征提取能力，下载量接近 180 万。

- **[facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3)** — facebook | 1,823 次点赞 / 19,493 次下载
  SAM-3D 人体网格恢复模型，面向 3D 人体姿态估计。

- **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)** — apple | 568 次点赞 / 0 次下载
  基于 Wan2.1-T2V-14B 微调的文生视频模型，带有 arXiv 引用，当日零下载，属于“论文伴随发布”型。

- **[apple/DepthPro2](https://huggingface.co/apple/DepthPro2)** — apple | 1,140 次点赞 / 0 次下载
  单目和视频度量深度估计模型，同样处于发布早期、尚无下载。

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — higurashi-ai | 937 次点赞 / 9,087 次下载
  全双工语音到语音模型，是少数聚焦实时语音交互的发布。

- **[inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator)** — inworld | 728 次点赞 / 0 次下载
  语音增强和降噪工具模型，可用于音频隔离，下载为零，说明其初步曝光与可及性可能不匹配。

- **[meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6)** — meituan-longcat | 466 次点赞 / 4,083 次下载
  音频加文本驱动视频的数字人模型，提供 ONNX 和 diffusers 两种格式。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3)** — SulphurAI | 851 次点赞 / 133,732 次下载
  基于 MiniMax-H3 微调的模型，但未标注任务类型，下载量可观，用途需查阅模型卡确认。

- **[Sentinel7/h3](https://huggingface.co/Sentinel7/h3)** — Sentinel7 | 1,459 次点赞 / 0 次下载
  未标注任务的模型，并标记 not-for-all-audiences，下载为零，实质可用性存疑。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 7,040 次点赞 / 7,848,375 次下载
  Qwen3.8-27B 的官方格式 GGUF 量化，是当日下载量最高的模型，本地部署首选。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 4,275 次点赞 / 1,833,410 次下载
  基于 unsloth 的超长名称社区微调 GGUF，名称中包含 Heretic、Uncensored 和 CODER 等标签，表现为固定的社区口味。

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai | 2,554 次点赞 / 4,501,257 次下载
  Qwen3.8-27B 的 abliterated（去除拒答）GGUF，下载量超过 450 万。

- **[unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF)** — unsloth | 1,094 次点赞 / 1,292,888 次下载
  Inkling-2-Mini 的 MoE GGUF 量化，下载量约为原模型的 30 倍。

- **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** — harness-hub | 1,033 次点赞 / 3,132 次下载
  使用 GRPO 和 async-GRPO 进行 PEFT 微调的 Qwen3.8-27B 版本，属于强化学习微调方向的样本。

- **[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)** — chatrlabs | 856 次点赞 / 427,005 次下载
  Qwen-Image-2.1 的 uncensored 量化文生图版本，同时提供 diffusers 和 GGUF 格式。

- **[AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF)** — AtomicChat | 637 次点赞 / 329,497 次下载
  基于 LoRA 的 Inkling-2-Mini 越狱 GGUF，下载量约为原模型的 8 倍。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs | 4,480 次点赞 / 900,080 次下载
  FLUX 3 的 ComfyUI 单文件版本，面向图像生成与编辑工作流，是官方为本地工作流提供的发布版本。

- **[RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B)** — RadixArk | 344 次点赞 / 2,130 次下载
  使用 qwen3_5 架构的社区微调图文模型，热度仍较低。

- **[sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B)** — sensenova | 640 次点赞 / 2,036 次下载
  SenseNova 自家的 9B 多模态循环架构模型，下载量低，说明尚处早期。

---

## 生态信号

本日最清晰的结构性信号是**模型家族集群效应**：Qwen3.8-27B 一个基座就衍生出官方版、unsloth GGUF、DavidAU 微调、huihui abliterated、harness-hub RL 微调共五个上榜模型；Inkling-2 也形成 Mini、Small 和两个社区量化的组合。**量化与去审查微调仍是下载主力**——榜单下载量前两名中的 GGUF 版本均达到数百万，且社区衍生版的下载数普遍是原始权重的数倍到数十倍，说明多数用户实际获取的是可本地运行的版本。官方权重仍以高点赞、低下载的“观望型”热度为主，开源权重发布即公开的趋势延续。视频、音频和 3D 基础模型（LTX-2.5、SAM3、DepthPro2）密集出现，显示多模态基础能力正成为大厂发布重点。

---

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当日榜单总点赞数最高的模型，且已有 GGUF、RL 微调、abliterated 三条成熟生态分支；评估一个基座时，该模型是信息量最大的样本。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 同时支持图生视频、文生视频和视频生视频，在视频生成方向上点赞和下载都处于高位，是当日最值得测试的可控视频生成方案。

3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 分割与特征提取合一的 SAM3，下载量接近 180 万且可直接使用 transformers，适合作为视觉流水线的通用基座进行对比评估。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*