# Hugging Face 热门模型日报 2026-11-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-12 18:21 UTC

---

# Hugging Face 热门模型日报（2026-11-12）

## 今日速览

Qwen3.8 家族今日在榜单上表现最强：官方 **Qwen3.8-27B**（19,712 赞，709 万下载）位居点赞第一，衍生 GGUF 与微调版本也同样热门。视频生成方面，Lightricks **LTX-2.5**（11,598 赞，278 万下载）与 MiniMax **H3** 系列（官方模型 6,833 赞、646 万下载）形成双强格局，并且围绕 MiniMax-H3 已衍生出多个社区改版和 ComfyUI 版本。工具与视觉方向上，facebook 的 **SAM3**（6,438 赞）和 **DINOv3** 系列继续保持高关注。社区中“无审查（heretic/uncensored）”微调和 GGUF 量化的活动依然活跃，多个此类模型进入榜单。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen｜19,712 赞｜7,094,218 下载
  官方旗舰多模态对话模型，本周点赞量最高，是当前生态的核心基座。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  Qwen｜7,015 赞｜3,193,031 下载
  Qwen 的快速版新模型，下载量超过 300 万，已出现了大量 GGUF 与微调衍生版本。

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)**
  moonshotai｜1,971 赞｜37,486 下载
  月之暗面新一代 Pro 对话模型，采用 compressed-tensors 压缩，属于官方权重发布。

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)**
  NousResearch｜470 赞｜4,669 下载
  基于 qwen3_5 的监督微调模型，是研究机构出品的对话与推理新品。

- **[ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview)**
  ricursiveAI｜528 赞｜7,667 下载
  65B 预览版自研架构（custom_code，Apache-2.0），属于新玩家的尝试。

- **[webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B)**
  webAI-Official｜320 赞｜49,861 下载
  基于 granite 的 8B 文本生成模型，同时提供 safetensors 与 GGUF。

- **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)**
  tencent｜207 赞｜3,738 下载
  Qwen3.8-27B 的推测解码草稿模型，面向推理加速的专业用途。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks｜11,598 赞｜2,782,513 下载
  支持文生、图生、视频生视频的多功能视频模型，是本周视频生成领域的最大热门。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  MiniMaxAI｜6,833 赞｜6,466,331 下载
  MiniMax 的视频基座，支持文生视频与图生视频，下载量超过 640 万。

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)**
  MiniMaxAI｜839 赞｜306,718 下载
  H3 家族的图像生成版本，支持文生图与图生图。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  black-forest-labs｜3,009 赞｜1,296,849 下载
  FLUX 3 的 ComfyUI 单文件版本，专注于图像生成与编辑。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook｜6,438 赞｜2,070,504 下载
  第三代分割模型（支持视频），支持 mask 生成与特征提取，是本周点赞第二高的模型。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)**
  speridlabs｜2,212 赞｜29,904 下载
  基于高斯泼溅的图生 3D 模型，属于 3D 生成方向的黑马。

- **[facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3)**
  facebook｜1,073 赞｜14,473 下载
  结合 SAM3D 与 DINOv3 的人体网格恢复和姿态估计模型。

- **[VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash)**
  VideoRebirthAI｜235 赞｜326,487 下载
  基于 minimax-h3 的快速视频生成版本，属于社区衍生模型。

- **[Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake)**
  Viggle｜326 赞｜152,819 下载
  基于 H3 的视频编辑与角色替换工具。

- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)**
  Zyphra｜221 赞｜8,543 下载
  ZONOS3 系列的轻量 TTS 模型，同时提供 GGUF。

- **[ConwayResearch/Underdog-Woof](https://huggingface.co/ConwayResearch/Underdog-Woof)**
  ConwayResearch｜205 赞｜10 下载
  基于 numpy、可在 CPU 端侧运行的 TTS 模型，特点在于轻量；但下载量极低。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[facebook/dinov3-vitl16-pretrain-lvd1689m](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m)**
  facebook｜2,145 赞｜703,532 下载
  DINOv3 的 ViT-L/16 预训练图像特征提取器，是视觉基座的常用选择。

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**
  ccore｜1,038 赞｜368,236 下载
  面向 Three.js 与 3D 代码生成的 Qwen3.5-4B 专用模型。

- **[Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage)**
  Cactus-Compute｜192 赞｜16,133 下载
  聚焦图生文与零样本目标检测的多模态模型。

- **[Comfy-Org/RelayVSR](https://huggingface.co/Comfy-Org/RelayVSR)**
  Comfy-Org｜190 赞｜107,527 下载
  ComfyUI 单文件的无条件图像生成模型，属于 RelayVSR 的微调版本。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic)**
  xtools-at｜4,665 赞｜18,933 下载
  无审查（heretic）社区微调版，点赞数在非官方模型中最高。

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  unsloth｜5,795 赞｜6,097,719 下载
  Qwen3.8-27B 的 GGUF 量化版，下载量超过 600 万，是本地部署的主力。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU｜2,968 赞｜1,599,836 下载
  叠加多种微调与无审查标签的 Qwen3.8-27B GGUF 版本，下载量约 160 万。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**
  unsloth｜1,626 赞｜2,146,470 下载
  Qwen3.8-Flash-Next 的 GGUF 量化版。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)**
  SC117｜927 赞｜4,120,281 下载
  abliterated 无审查量化版，下载量超过 400 万，超过许多官方版本。

- **[Scantist/GLM-5.3-SLIM-GGUF](https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF)**
  Scantist｜1,350 赞｜15,693 下载
  采用 MoE 与神经架构搜索的 GLM-5.3 精简 GGUF 版本。

- **[Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image)**
  Comfy-Org｜285 赞｜835,593 下载
  MiniMax-H3-Image 的 ComfyUI 单文件微调版。

- **[mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF)**
  mradermacher｜237 赞｜96,342 下载
  Gemma-4-31B 的无审查 GGUF 量化版。

---

## 生态信号

Qwen3.8 家族（包括 Flash-Next）明显是本周生态的中心：官方基座、unsloth GGUF、腾讯草稿模型和多家社区的微调版本全部进入榜单。视频生成方面，Lightricks LTX-2.5 与 MiniMax H3 双强并立，H3 已形成包含官方模型、ComfyUI 版和社区快速版的衍生生态。开源权重的势头很强：榜单前几名几乎均为可下载权重，官方与社区版本同台竞争。值得注意的是，“heretic/abliterated” 无审查微调加上 GGUF 量化，仍然是下载量的主要来源；其中 SC117 的 abliterated 版本下载量甚至超过官方模型，这说明本地部署与个性化需求推动了量化活动的持续繁荣。

---

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 支持文生、图生、视频生视频的统一视频模型，并且下载达到 278 万，是目前最成熟的开放视频工具链之一，适合研究多任务视频生成。

2. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 支持视频的第三代分割模型，兼具 mask 生成与特征提取能力；在视觉基础工作中通用，并且在榜单上保持高关注度。

3. **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — 基于高斯泼溅的 Apache-2.0 图生 3D 模型，在视频和图像之外提供了另一条生成路径，值得关注其在 3D 资产管线中的应用潜力。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*