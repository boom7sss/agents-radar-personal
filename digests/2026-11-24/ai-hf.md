# Hugging Face 热门模型日报 2026-11-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-24 09:55 UTC

---

# Hugging Face 热门模型日报（2026-11-24）

## 今日速览

今日榜单由 Qwen3.8-27B 生态主导：官方版本以 21,694 点赞、612 万下载高居榜首，unsloth 的 GGUF 量化版单独获得 706 万下载，社区微调分支同样表现突出。thinkingmachines 的 Inkling-2 系列（Mini、Small 及其衍生量化版本）形成第二梯队。视频生成赛道也十分活跃：Lightricks 的 LTX-2.5 获得 13,233 点赞。苹果的 DepthPro2、Facebook 的 sam3 与 sam-3d-body 增强了视觉专用模型的关注度，而音频方向的 inworld 语音分离与 higurashi-ai 的全双工语音模型显示出语音处理领域的活力。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — Qwen｜21,694 赞｜6,122,057 下载
  https://huggingface.co/Qwen/Qwen3.8-27B
  阿里 Qwen3.8 系列 27B 官方多模态模型，以最高热度与巨大下载量成为本轮生态的核心基础模型。

- **deepseek-ai/DeepSeek-V4.1-Flash-1017** — deepseek-ai｜6,632 赞｜524,232 下载
  https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
  DeepSeek V4.1 的 Flash 轻量版本，支持图文输入与文本生成。

- **inclusionAI/Ling-3.2-air** — inclusionAI｜139 赞｜0 下载
  https://huggingface.co/inclusionAI/Ling-3.2-air
  基于 bailing_moe_v3_vl 的 MoE 视觉语言模型，采用 MIT 许可并附带评测结果。

- **inclusionAI/LingSante-3.1-flash** — inclusionAI｜132 赞｜397 下载
  https://huggingface.co/inclusionAI/LingSante-3.1-flash
  基于 bailing_hybrid 的对话式文本生成模型。

- **maxwell-model/Maxwell-V1-Flash** — maxwell-model｜395 赞｜3,639 下载
  https://huggingface.co/maxwell-model/Maxwell-V1-Flash
  基于 maxwell_moe 架构的对话式文本模型。

- **nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB** — nvidia｜1,491 赞｜206,652 下载
  https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB
  Nemotron 3.5 系列的紧凑型（4GB）文本生成模型，同时提供 transformers 与 GGUF 权重。

- **higurashi-ai/Haru-4B** — higurashi-ai｜945 赞｜9,087 下载
  https://huggingface.co/higurashi-ai/Haru-4B
  全双工语音到语音对话模型，属于对话式音频模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **thinkingmachines/Inkling-2-Mini** — thinkingmachines｜5,600 赞｜41,888 下载
  https://huggingface.co/thinkingmachines/Inkling-2-Mini
  Inkling-2 系列最小的图文对话模型，基于 inkling2_loop 架构，是今日热度第二高的模型。

- **thinkingmachines/Inkling-2-Small** — thinkingmachines｜1,454 赞｜55,885 下载
  https://huggingface.co/thinkingmachines/Inkling-2-Small
  Inkling-2 系列中等规模版本，同属图文对话模型。

- **Lightricks/LTX-2.5** — Lightricks｜13,233 赞｜3,024,745 下载
  https://huggingface.co/Lightricks/LTX-2.5
  支持图生视频、文生视频和视频转视频的多功能视频扩散模型，是榜单上热度最高的生成类模型之一。

- **apple/FastFrames-L** — apple｜575 赞｜0 下载
  https://huggingface.co/apple/FastFrames-L
  基于 Wan2.1-T2V-14B 微调的文生视频模型，附 arXiv 论文。

- **apple/DepthPro2** — apple｜1,153 赞｜0 下载
  https://huggingface.co/apple/DepthPro2
  单目及视频度量深度估计模型，属于 DepthPro 第二代。

- **MiniMaxAI/MiniMax-H3-Image** — MiniMaxAI｜2,498 赞｜972,272 下载
  https://huggingface.co/MiniMaxAI/MiniMax-H3-Image
  MiniMax-H3 体系的文生图与图生图模型，下载量接近百万。

- **facebook/sam3** — facebook｜8,055 赞｜1,779,562 下载
  https://huggingface.co/facebook/sam3
  SAM3 分割与掩码生成模型，支持视频特征提取，是视觉分割领域的核心模型之一。

- **facebook/sam-3d-body-dinov3** — facebook｜1,860 赞｜20,355 下载
  https://huggingface.co/facebook/sam-3d-body-dinov3
  面向 3D 人体网格恢复与人体姿态估计的 SAM-3D 模型。

- **meituan-longcat/LongCat-Video-Avatar-1.6** — meituan-longcat｜476 赞｜4,083 下载
  https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6
  支持音频与文本驱动视频生成（audio-text-to-video）的数字人视频模型。

- **inworld/voice-isolator** — inworld｜761 赞｜0 下载
  https://huggingface.co/inworld/voice-isolator
  语音分离、降噪与增强的音频到音频模型。

- **TenStrip/10Eros-Max** — TenStrip｜1,128 赞｜0 下载
  https://huggingface.co/TenStrip/10Eros-Max
  基于 MiniMax-H3 微调的文生视频、图文生视频模型。

- **SulphurAI/Sulphur-3** — SulphurAI｜866 赞｜133,732 下载
  https://huggingface.co/SulphurAI/Sulphur-3
  基于 MiniMax-H3 微调的模型，任务标签未标注（N/A），但下载量可观。

- **Sentinel7/h3** — Sentinel7｜1,673 赞｜0 下载
  https://huggingface.co/Sentinel7/h3
  任务标签未标注，标记为受限内容（not-for-all-audiences）。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **sensenova/SenseNova-Loop-9B** — sensenova｜657 赞｜2,036 下载
  https://huggingface.co/sensenova/SenseNova-Loop-9B
  基于 sensenova_loop 架构的 9B 多模态文本生成模型。

- **RadixArk/DaisyRose-27B** — RadixArk｜348 赞｜2,130 下载
  https://huggingface.co/RadixArk/DaisyRose-27B
  基于 qwen3_5 的多模态图文对话模型（DaisyRose 项目）。

- **harness-hub/Qwen3.8-27B-pi-adapted** — harness-hub｜1,049 赞｜3,132 下载
  https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted
  基于 Qwen3.8-27B 并使用 GRPO 与 async-GRPO（TRL）训练的多模态适配模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — unsloth｜7,060 赞｜8,019,028 下载
  https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
  Qwen3.8-27B 的 GGUF 量化版本，以 800 万下载成为榜单下载量最高的模型。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — DavidAU｜4,292 赞｜1,851,836 下载
  https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  基于 unsloth 的超长命名社区微调与 GGUF 量化版本，定位为无审查编程强化版，热度极高。

- **unsloth/Inkling-2-Mini-GGUF** — unsloth｜1,165 赞｜1,292,888 下载
  https://huggingface.co/unsloth/Inkling-2-Mini-GGUF
  Inkling-2-Mini 的 GGUF 量化版本（MoE），下载量达到百万级。

- **AtomicChat/Inkling-2-Mini-Uncensored-GGUF** — AtomicChat｜691 赞｜329,497 下载
  https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF
  基于 LoRA 微调的无审查版本，由 llama.cpp 驱动。

- **strata-engine/Inkling-2-Mini-Strata** — strata-engine｜102 赞｜1,064 下载
  https://huggingface.co/strata-engine/Inkling-2-Mini-Strata
  Inkling-2-Mini 的 Strata 量化衍生版本（MoE）。

- **chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized** — chatrlabs｜866 赞｜427,005 下载
  https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized
  Qwen-Image-2.1 的无审查量化版本（diffusers + GGUF），下载量逾 42 万。

## 生态信号

Qwen3.8-27B 是今日最明显的生态中心：官方权重、unsloth 的 GGUF 量化版、harness-hub 的 GRPO 适配版、DavidAU 的社区强化微调共同构成一个从基础模型到推理量化、再到社区变体的完整链条。Inkling-2 系列紧随其后，Mini 和 Small 两个版本都出现了多家社区的量化与无审查衍生。开源权重模型在热度和下载量上依然占绝对主导，闭源模型没有进入榜单；不过多个模型标记为“Uncensored / not-for-all-audiences”，无审查微调依然是社区的重要创作方向。视频生成方面，LTX-2.5 热度突出，MiniMax-H3 作为基础模型被多方微调（Sulphur-3、10Eros-Max），显示出基础视频模型在二次开发生态中的作用。

## 值得探索

1. **Lightricks/LTX-2.5** — 单模型覆盖图生视频、文生视频与视频转视频，点赞 13,233、下载超 300 万，是目前最可直接上手的多任务视频生成基座。
2. **unsloth/Qwen3.8-27B-GGUF** — 800 万下载说明它已是 Qwen3.8 本地部署的事实标准入口，适合研究量化后多模态模型的性能保持情况。
3. **harness-hub/Qwen3.8-27B-pi-adapted** — 标签明确指向 GRPO 与 async-GRPO（TRL），是观察强化学习微调在 Qwen3.8 上实际效果的一个具体样本。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*