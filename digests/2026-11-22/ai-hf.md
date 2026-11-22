# Hugging Face 热门模型日报 2026-11-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-22 17:52 UTC

---

# Hugging Face 热门模型日报（2026-11-22）

## 今日速览

Qwen3.8-27B 系列全面占据榜单：官方权重以 20,857 点赞高居榜首，unsloth GGUF 版本下载量达 768 万，社区微调版本同样表现抢眼。thinkingmachines 的 Inkling-2 家族也势头强劲，Mini 版获 4,511 点赞，GGUF 版下载超 80 万。视频生成双强 Apple FastFrames-L 与 Lightricks LTX-2.5 同时入榜，后者下载接近 300 万。语音方向出现全双工语音对话模型 Haru-4B 与语音隔离工具 voice-isolator，值得留意。

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜20,857 赞｜6,297,396 下载
  本期点赞榜首的旗舰多模态对话模型，下载量巨大，是当前生态的核心基座。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai｜5,843 赞｜515,306 下载
  DeepSeek V4.1 的 Flash 版本，兼顾文本生成与图文理解，高下载印证其生产可用性。

- **[maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash)** — maxwell-model｜343 赞｜3,317 下载
  新入榜的 MoE 文本生成模型，体量不大但属于全新家族，值得观察后续走向。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** — thinkingmachines｜4,511 赞｜23,543 下载
  Inkling-2 家族的小型图文对话模型，依靠密集的社区适配衍生出多个版本，推动热度上升。

- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)** — thinkingmachines｜663 赞｜48,974 下载
  同一家族的另一尺寸版本，下载高于 Mini，显示用户对轻量档位的实际需求。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜13,031 赞｜2,993,088 下载
  支持图生视频、文生视频、视频生视频的全能视频模型，高点赞加近 300 万下载，是视频方向最强信号之一。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs｜3,669 赞｜950,169 下载
  Flux 3 的 ComfyUI 单文件版本，主打图像生成与编辑，直接兼容工作流。

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** — MiniMaxAI｜1,718 赞｜952,024 下载
  MiniMax-H3 的图像生成、图生图版本，已有社区基于 H3 做微调。

- **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)** — apple｜519 赞｜0 下载
  基于 Wan2.1-T2V-14B 微调的文生视频模型，附 arXiv 论文，下载为零，说明刚发布、热度尚在点赞阶段。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook｜7,189 赞｜1,806,893 下载
  SAM 3 分割与掩码生成模型，支持视频，下载量说明它在视觉工具链中已被广泛采用。

- **[facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3)** — facebook｜1,697 赞｜18,709 下载
  面向 3D 人体网格恢复与姿态估计，是 SAM 生态向三维扩展的新方向。

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — higurashi-ai｜865 赞｜8,608 下载
  全双工语音到语音模型，属于较少见的实时语音对话方向。

- **[inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator)** — inworld｜596 赞｜0 下载
  语音增强与降噪的音频到音频模型，刚发布，下载为零，值得关注其后续落地。

- **[meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6)** — meituan-longcat｜418 赞｜3,483 下载
  音频加文本驱动的数字人视频模型，提供 ONNX 与 diffusers 两种形态。

- **[Lakonik/pi-H3](https://huggingface.co/Lakonik/pi-H3)** — Lakonik｜150 赞｜9,038 下载
  基于 flow-matching 与蒸馏的图文生音视频模型，属于小众但技术路线鲜明的实验性作品。

- **[n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca)** — n4ze3m｜396 赞｜10,768 下载
  轻量英文 TTS，同时提供 ONNX 与 GGUF，适合本地部署。

- **[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)** — chatrlabs｜780 赞｜381,769 下载
  基于 Qwen-Image-2.1 的量化图像生成版本，下载量相当可观。

- **[tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash)** — tencent｜595 赞｜6,617 下载
  腾讯混元 Hy4 的 flash 版本，图文对话方向，属于新入榜的大厂发布。

### 🔧 专用模型（代码、数学、医疗、嵌入）

本期榜单未出现明确的代码、数学或医疗专用模型。较接近“专用”定位的是：

- **[apple/DepthPro2](https://huggingface.co/apple/DepthPro2)** — apple｜251 赞｜0 下载
  单目与视频度量深度估计模型，是 Depth Pro 的第二代，专业视觉任务工具。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth｜6,290 赞｜7,683,660 下载
  Qwen3.8-27B 的 GGUF 量化版，下载量全场最高，是本地部署的事实标准入口。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜3,496 赞｜1,827,784 下载
  Qwen3.8 的超深度社区微调 GGUF，名称极长但下载极高，反映社区对“无审查加长链微调”的持续热情。

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** — DavidAU｜2,064 赞｜2,266,182 下载
  基于上一代 Qwen3.5-9B 的同类微调，说明该系列微调模板已形成稳定产品线。

- **[unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF)** — unsloth｜814 赞｜805,993 下载
  Inkling-2-Mini 的 MoE 量化版，下载量远超原模型，量化正是分发主渠道。

- **[AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF)** — AtomicChat｜424 赞｜129,693 下载
  Inkling-2-Mini 的无审查 LoRA 加 GGUF 版本，体现社区二次创作链。

- **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** — harness-hub｜968 赞｜2,831 下载
  使用 GRPO 与 async-GRPO 训练的 PEFT 适配版本，属训练方法导向的微调。

- **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)** — nvidia｜710 赞｜203,420 下载
  Nemotron 3.5 的小体量发布，同时提供 transformers 与 GGUF。

- **[SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3)** — SulphurAI｜758 赞｜78,931 下载
  基于 MiniMax-H3 的微调模型，许可为 other。

- **[RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B)** — RadixArk｜295 赞｜1,815 下载
  基于 Qwen3.5 的图文对话微调，规模小但属新定制系列。

- **[sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B)** — sensenova｜481 赞｜1,863 下载
  多模态文本生成模型，与 Inkling 的 loop 结构形成同方向呼应。

- **[Sentinel7/h3](https://huggingface.co/Sentinel7/h3)** — Sentinel7｜1,130 赞｜0 下载
  标签含 not-for-all-audiences 的 H3 相关模型，下载为零，仅靠点赞入榜。

## 生态信号

Qwen3.8-27B 已形成完整生态：官方权重、unsloth GGUF、社区微调三层同时上榜，是当下最强势的模型家族，Inkling-2 与 MiniMax-H3 次之。量化是主要分发形态：多款 GGUF 版本的下载量数倍于原模型，本地部署需求明显压过云端调用。开源权重仍是榜单绝对主体，Apple、Meta、NVIDIA、腾讯、DeepSeek 均在持续放出权重；未见闭源趋势逆转。社区微调呈现两条明显分支：Unsloth 系模板化的系统化量化，以及 DavidAU 式“无审查加深度微调”的长名称产品线，后者下载量已达百万级。

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 同时覆盖图文生视频与视频编辑，近 300 万下载说明它已是可用的生产级工具，是本期视频方向最值得实测的模型。

2. **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — 全双工语音到语音模型较为稀缺，对手希望搭建实时语音对话的开发者而言，它是相对轻量、又完整的起点。

3. **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)** — 基于 Wan2.1-T2V-14B 微调、附有论文且下载仍为 0，说明刚发布，适合在“先于大众”阶段研究其方法与推理效率。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*