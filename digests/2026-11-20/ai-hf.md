# Hugging Face 热门模型日报 2026-11-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-20 18:37 UTC

---

# Hugging Face 热门模型日报（2026-11-20）

## 今日速览

今日榜单由 Qwen3.8-27B 系列主导：官方基座以 20,769 点赞和 645 万下载量遥遥领先，其余用户基于该基座制作的 GGUF 量化版本和社区微调版本也大量出现在榜单上。视频生成方面，Lightricks 的 LTX-2.5 以 1.28 万点赞和近 300 万下载量成为仅次于 Qwen 官方基座的第二大热门模型；image-to-video 和 audio-text-to-video 方向的发布依然活跃。Apple、Meta、NVIDIA、DeepSeek、腾讯等厂商在当天集中发布，覆盖视频、深度估计、3D 人体、端侧 MoE 等方向。此外，量化、abliterated、uncensored 等社区二次加工模型占据了榜单近三分之一，显示出开源权重“基座 + 社区衍生”的分发结构正在进一步固化。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 点赞 20,769 | 下载 6,454,419
  本日榜单的绝对核心：一个 image-text-to-text 的对话模型，它的下载量是榜单中第二名下载量的两倍以上；它也是多个上榜衍生模型的共同基座。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)**
  deepseek-ai | 点赞 6,015 | 下载 505,387
  DeepSeek 的 V4.1 Flash 新版本，兼具文本生成与 image-text-to-text 能力，是当日少数能与 Qwen 官方基座在点赞量上接近的官方发布。

- **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)**
  nvidia | 点赞 657 | 下载 183,617
  NVIDIA Nemotron 3.5 的 4GB 小体积版本，同时提供 transformers 与 GGUF 格式，主打端侧与低显存部署。

- **[Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4)**
  Edge0 | 点赞 652 | 下载 85,400
  面向 edge-inference 的大规模 latent-MoE 模型，使用 NVFP4 低精度格式，其名称中的“145B”与端侧定位是它受关注的主要原因。

- **[maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash)**
  maxwell-model | 点赞 317 | 下载 2,453
  一个新作者的 MoE 对话模型（maxwell_moe），下载量仍然很小，目前处于早期关注阶段。

- **[tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash)**
  tencent | 点赞 509 | 下载 3,949
  腾讯混元 Hy4 的 flash 变体，是当日 Hy4 系列两个上榜版本之一，定位为轻量文本生成。

- **[tencent/Hy4](https://huggingface.co/tencent/Hy4)**
  tencent | 点赞 105 | 下载 89
  混元 Hy4 的完整多模态版本（hy_v4_vl），发布首日数据量低，关注度明显不及 flash 版本。

- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)**
  thinkingmachines | 点赞 618 | 下载 40,574
  Thinking Machines 的 Inkling 2 小尺寸对话模型，主打多模态 image-text-to-text。

- **[sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B)**
  sensenova | 点赞 427 | 下载 1,631
  商汤 SenseNova 的 9B 多模态模型，以“Loop”架构命名，属于小参数量多模态路线。

- **[Cloudflare/clairic](https://huggingface.co/Cloudflare/clairic)**
  Cloudflare | 点赞 123 | 下载 246
  Cloudflare 基于 qwen3_5 发布的 image-text-to-text 模型，是基础设施厂商进入模型发布领域的信号。

- **[RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B)**
  RadixArk | 点赞 234 | 下载 918
  基于 qwen3_5 的 27B 对话模型，属于 Qwen 生态的独立品牌封装。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 点赞 12,842 | 下载 2,964,523
  当日生成侧最大赢家：单个文件同时支持 image-to-video、text-to-video、video-to-video 与 image-text-to-video，社区接受度已然形成。

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)**
  higurashi-ai | 点赞 4,659 | 下载 7,323
  一个 4B 的全双工 speech-to-speech 模型，点赞数很高但下载量仅 7 千；这一反差说明它更多是“围观热点”，实际部署规模有限。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  black-forest-labs | 点赞 3,599 | 下载 981,223
  FLUX 3 的 ComfyUI 单文件版本，直接提供图像生成与编辑能力。

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)**
  MiniMaxAI | 点赞 1,682 | 下载 876,986
  MiniMax H3 的图像模型（diffusers），同时支持 text-to-image 与 image-to-image。

- **[Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image)**
  Comfy-Org | 点赞 705 | 下载 3,424,035
  MiniMax-H3-Image 的 ComfyUI 单文件微调版，它的下载量（342 万）远高于原版（87 万），说明分发主要通过 Comfy 渠道进行。

- **[meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6)**
  meituan-longcat | 点赞 365 | 下载 2,568
  美团 LongCat 的数字人视频模型，支持 audio-text-to-video，提供 onnx 与 diffusers 两种格式。

- **[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)**
  chatrlabs | 点赞 745 | 下载 309,394
  基于 Qwen-Image-2.1 的去审查、量化图像生成模型，提供 gguf 格式。

- **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)**
  apple | 点赞 471 | 下载 0
  Apple 的 text-to-video 模型，基于 Wan2.1-T2V-14B 微调，带有 arXiv 编号标示，首日下载量为零。

- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)**
  Zyphra | 点赞 606 | 下载 142,778
  ZONOS3 系列的轻量 TTS 模型，同时提供 safetensors 与 gguf。

- **[n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca)**
  n4ze3m | 点赞 365 | 下载 7,949
  一个小体量英文 TTS 模型，提供 onnx 与 gguf，并附带自建数据集。

- **[inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator)**
  inworld | 点赞 468 | 下载 0
  Inworld 的语音分离与降噪模型，属于榜单中少见的“增强类”而非“生成类”音频模型。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook | 点赞 7,115 | 下载 1,895,035
  当日下载量最高的专用模型之一：SAM3 的 video 版本，用于 mask-generation 与特征抽取，是分割领域的参考基准。

- **[facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3)**
  facebook | 点赞 1,646 | 下载 17,319
  将 SAM-3D 与 DINOv3 结合，做 3D 人体网格恢复与人体姿态估计。

- **[apple/DepthPro2](https://huggingface.co/apple/DepthPro2)**
  apple | 点赞 87 | 下载 0
  Apple 的单目、度量与视频深度估计模型第二代，首日关注度低，但方向明确。

（注：本批 30 个模型中，未出现明确的代码、数学或医疗专用模型。）

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  unsloth | 点赞 6,272 | 下载 7,383,193
  Qwen3.8-27B 的 GGUF 量化版，下载量（738 万）甚至高于官方基座，是当日分发力最强的单一产物。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 点赞 3,441 | 下载 1,807,159
  典型的高强度社区微调 GGUF：在 Qwen3.8-27B 上叠加 heretic、uncensored 等改造，下载量突破 180 万。

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)**
  huihui-ai | 点赞 2,486 | 下载 4,448,225
  abliterated 版 Qwen3.8-27B 的 GGUF 包，下载量达 444 万，是 abliteration 路线中关注度最高的版本之一。

- **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)**
  harness-hub | 点赞 839 | 下载 1,874
  用 PEFT + TRL + GRPO / async-GRPO 做的 Qwen3.8-27B 适配版本，属于偏向训练方法的实验性微调。

- **[Sentinel7/h3](https://huggingface.co/Sentinel7/h3)**
  Sentinel7 | 点赞 193 | 下载 0
  信息极少（无任务标注、仅 region:us 标签），目前没有可依据的内容来判断其用途。

---

## 生态信号

当日生态的首要信号是 **Qwen3.8-27B 已形成一个围绕自身的子生态**：官方基座、unsloth 量化版、huihui abliterated 版、DavidAU 高强度微调版、harness-hub 的 GRPO 适配版、RadixArk 的独立品牌版共同占榜单约 6 席；其中量化版下载量甚至超过官方基座，说明分发重心正在向 GGUF、ComfyUI 等下游包装迁移。第二个信号是 **官方厂商集中发布**：Apple（视频、深度）、Meta（SAM3、3D 人体）、NVIDIA（端侧小模型）、DeepSeek（V4.1 Flash）同日出现，开源权重阵营明显扩张。第三，**低精度与端侧**成为共同主题，NVFP4、4GB 级 Nemotron、GGUF、ONNX 频繁出现。最后，**去审查/abliterated 微调仍稳定占据榜单高位**，社区二次加工已成为开源分发中不可忽视的一环。

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 单个文件即可覆盖图生视频、文生视频、视频生视频和图文生视频四类任务，下载量接近 300 万，是当前最成熟、可直接上手的统一视频生成基线。

2. **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — 榜单中唯一的全双工 speech-to-speech 模型，4B 体量对本地部署友好；“高点赞、低下载”的反差使其值得实测，以验证真实可用性。

3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 下载量超过官方基座，是当前 Qwen3.8 生态中最实际的分发入口，适合作为本地推理与后续微调的起点。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*