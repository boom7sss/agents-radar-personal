# Hugging Face 热门模型日报 2026-10-29

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-29 16:56 UTC

---

# Hugging Face 热门模型日报（2026-10-29）

## 今日速览

今日榜首由 **Qwen/Qwen3.8-27B** 拿下（18,667 赞、750 万下载），多模态大模型继续占据热度中心。视频与图像生成同样强劲：**Lightricks/LTX-2.5** 以 9,814 赞成为单模型点赞最高者，**black-forest-labs/flux-3** 与 **facebook/sam3** 紧随其后。DeepSeek-V4.1-Flash 形成明显的“衍生生态”——官方原版、GGUF 量化版和无审查微调版同时上榜，量化版本甚至贡献了本次最高的 157 万下载量。量化与 ComfyUI 分发链路（GSQ-RCO、GGUF、Comfy-Org）已成为模型触达用户的关键通道。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)**
  作者 Nanbeige｜759 赞｜9,655 下载
  33B 规模的 llama 架构文本生成模型，凭借中等体量下的通用能力上榜。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)**
  作者 RecursiveSI｜1,232 赞｜16,598 下载
  对话型文本生成模型，原生版本热度带动了后续 GGUF 社区量化。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)**
  作者 XHToken｜896 赞｜10,163 下载
  4B 小体量 LLM，适合本地部署，同时衍生出 GGUF 版本上榜。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)**
  作者 LiquidAI｜453 赞｜15,885 下载
  Liquid 系列新的小尺寸文本生成模型，是 LFM3 家族多款衍生模型中的基础型号。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)**
  作者 mistralai｜1,132 赞｜278 下载
  1T 参数、A52B 稀疏激活的多模态大模型，支持 vLLM/SGLang，点赞高但下载少，说明社区仍停留在观望或评测阶段。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  作者 Qwen｜18,667 赞｜7,509,924 下载
  本周双榜第一的图像-文本多模态对话模型，同时是大量社区微调与量化的基座。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  作者 Lightricks｜9,814 赞｜2,269,999 下载
  支持图生视频、文生视频、视频生视频的扩散模型，是本周点赞最高的单模型。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  作者 black-forest-labs｜2,019 赞｜832,197 下载
  Flux 3 系列的 ComfyUI 单文件图像编辑/生成版本，开箱即用推动高下载。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  作者 facebook｜5,419 赞｜1,884,719 下载
  SAM3 视频分割/掩码生成模型，属基础视觉能力模型，热度与下载均很高。

- **[MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)**
  作者 MiniMaxAI｜481 赞｜15,738 下载
  minimax_m3_vl 架构的多模态图像-文本模型，主打轻量快速。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)**
  作者 nvidia｜362 赞｜4,276 下载
  基于 NeMo 的语音识别（ASR）大模型，30B 总参、A4B 稀疏激活。

- **[OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT)**
  作者 OpenMOSS-Team｜821 赞｜14,950 下载
  基于 diffusers 的文生图模型，是 Comfy-Org/MOSS-Image 分发包的上游基座。

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)**
  作者 baidu｜370 赞｜18,141 下载
  百度推出的 OCR 图像-文本模型，主打不限长度文档识别。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)**
  作者 fishaudio｜1,100 赞｜28,162 下载
  支持多说话人的 TTS 语音合成模型，音频方向的少数上榜者。

- **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)**
  作者 LiquidAI｜186 赞｜1,814 下载
  2B 规模的任意输入/输出（any-to-any）全模态模型。

- **[LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B)**
  作者 LiquidAI｜159 赞｜4,193 下载
  LFM3 家族的 2B 视觉语言模型，主打小体量多模态。

### 🔧 专用模型

- **[tencent/Hy-SimulMT-30B-A3B-FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8)**
  作者 tencent｜457 赞｜396 下载
  面向翻译任务的 30B-A3B 稀疏模型 FP8 版本，任务专精但下载基数仍小。

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)**
  作者 ccore｜267 赞｜12,237 下载
  基于 Qwen3.5 的 4B 代码模型，标签指向 Three.js 3D 代码生成，任务未标注。

- **[openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0)**
  作者 openbmb｜307 赞｜1,597 下载
  面向文档解析的轻量 OCR 模型，与百度 OCR 形成同周竞争。

- **[HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X)**
  作者 HuggingFaceBio｜268 赞｜2,808 下载
  基于 Qwen3 的 DNA 序列文本生成模型，代表生物基础模型的一支新势力。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)**
  作者 ISTA-DASLab｜463 赞｜1,578,937 下载
  DeepSeek-V4.1-Flash 的 GGUF 混合精度量化版，是本次下载量最高的模型。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  作者 DavidAU｜2,216 赞｜1,726,051 下载
  基于 Qwen3.8-27B 的无审查社区微调 + GGUF，长串命名与高下载显示社区玩法仍具流量。

- **[unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF)**
  作者 unsloth｜335 赞｜201,035 下载
  RecursiveSI/flint 的官方量化版，20 万下载说明本地推理需求强烈。

- **[orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF)**
  作者 orcarouter｜335 赞｜28,763 下载
  DeepSeek-V4.1-Flash 的 abliterated 无审查 GGUF 版，面向 llama.cpp 本地部署。

- **[dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8)**
  作者 dealignai｜472 赞｜9,787 下载
  同系列的 FP8 无审查微调版，与 GGUF 版共同构成社区再分发矩阵。

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)**
  作者 abenzerps｜5,298 赞｜2,172,670 下载
  Qwen-Image 2.1 的无审查 GGUF 量化版，接入 ComfyUI，点赞下载双高。

- **[XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF)**
  作者 XHToken｜236 赞｜179,258 下载
  官方 Spark-X2.6-4B 的 GGUF 版本，下载量远超原生权重。

- **[Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image)**
  作者 Comfy-Org｜542 赞｜3,401,045 下载
  MOSS-Image-Base 的 ComfyUI 单文件分发版，以 340 万下载成为下载量第二名。

## 生态信号

**Qwen 与 DeepSeek 是本周最强家族**：Qwen3.8-27B 既是热度第一，也孵化了 DavidAU 等社区微调与量化；DeepSeek-V4.1-Flash 则通过官方版、GGUF 量化版、无审查微调和 FP8 版形成完整分发谱系。**开源权重分发链路高度依赖量化与 ComfyUI**：下载榜前列多为 GGUF 和 ComfyUI 单文件版本，原生 FP/BF16 权重下载反而较低，说明实际使用端以本地推理为主。**无审查（uncensored/abliterated）微调仍具强流量**，集中在 Qwen 与 DeepSeek 基座上。3B 级小模型（LiquidAI LFM3、Spark、MiniCPM-OCR）密集出现，轻量化竞争明显。

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态的绝对基座：热度最高、下载最高，且向下游衍生出多款微调与量化，适合作为研究多模态基座能力与社区二次开发的起点。

2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — 157 万下载、混合精度量化路线，是观察“如何让大模型真正落地本地推理”的样本。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 8000+ 赞的视频生成模型，同时支持 I2V、T2V、V2V，是本周生成式视频方向最值得实测的模型。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*