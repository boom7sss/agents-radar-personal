# Hugging Face 热门模型日报 2026-10-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-28 06:51 UTC

---

# Hugging Face 热门模型日报（2026-10-28）

## 今日速览

今日榜单由 Qwen3.8-27B 领跑（18,560 赞、752 万下载），成为绝对焦点。视频与图像生成同样火热：Lightricks 的 LTX-2.5 以 9,606 赞、216 万下载位居第二，black-forest-labs 的 flux-3 系列继续强势。DeepSeek-V4.1-Flash 衍生出多个量化与微调版本，形成明显的社区生态。ComfyUI 生态（Comfy-Org、GGUF 量化）下载量惊人，反映本地部署需求旺盛。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Qwen | 赞 18,560 | 下载 7,522,728
  阿里 Qwen3.5 系列多模态对话大模型，以压倒性点赞数登顶，是本周最受关注的开源权重发布。

- [RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint) — RecursiveSI | 赞 1,086 | 下载 10,574
  新晋对话模型，短时间内即获千赞并被 unsloth 迅速量化，显示社区对新架构的高度兴趣。

- [XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B) — XHToken | 赞 816 | 下载 6,191
  4B 小参数 LLM，兼具点赞与 GGUF 衍生版，定位轻量本地部署。

- [Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B) — Nanbeige | 赞 682 | 下载 4,785
  基于 llama 架构的 33B 中文 LLM，延续 Nanbeige 系列迭代。

- [MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash) — MiniMaxAI | 赞 427 | 下载 11,075
  MiniMax 多模态 Flash 版本，主打高效图文理解。

- [KRAFTON/Raon-1-mini-preview](https://huggingface.co/KRAFTON/Raon-1-mini-preview) — KRAFTON | 赞 219 | 下载 2,208
  游戏公司 KRAFTON 推出的 mini 预览版 LLM，试水开源模型。

- [LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B) — LiquidAI | 赞 231 | 下载 6,311
  Liquid AI 第三代 1.7B 小模型，延续其高效架构路线。

- [nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB) — nvidia | 赞 196 | 下载 44,651
  NVIDIA Nemotron 3.5 轻量版，提供 GGUF 格式，适合边缘部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) — Lightricks | 赞 9,606 | 下载 2,163,739
  支持图生视频、文生视频、视频转视频的扩散模型，下载量破 216 万，是本周视频生成领域的最大赢家。

- [black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy) — black-forest-labs | 赞 1,882 | 下载 750,694
  FLUX 3 图像编辑模型 ComfyUI 单文件版，图像编辑与生成一站式。

- [abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized) — abenzerps | 赞 5,211 | 下载 2,201,569
  社区对 Qwen-Image 2.1 的去审查 GGUF 量化版，下载量巨大，反映用户对无限制图像生成的需求。

- [facebook/sam3](https://huggingface.co/facebook/sam3) — facebook | 赞 5,271 | 下载 1,876,779
  Meta Segment Anything 3，支持视频分割的通用掩码生成模型。

- [fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3) — fishaudio | 赞 1,069 | 下载 24,996
  多说话人文本转语音模型，Fish Audio 第三代产品。

- [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) — OpenMOSS-Team | 赞 790 | 下载 13,253
  MOSS 图像 SFT 版本，diffusers 格式的文生图模型。

- [Comfy-Org/MOSS-Image](https://huggingface.co/Comfy-Org/MOSS-Image) — Comfy-Org | 赞 513 | 下载 2,760,550
  MOSS-Image-Base 的 ComfyUI 微调版本，下载量高达 276 万，显示社区对即用型图像工作流的需求。

- [ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder) — ccore | 赞 189 | 下载 3,544
  面向 Three.js 与 3D 代码生成的 GGUF 模型。

- [Comfy-Org/Fibo-2.0](https://huggingface.co/Comfy-Org/Fibo-2.0) — Comfy-Org | 赞 215 | 下载 170,383
  基于 briaai/Fibo-2.0-dev 的图生图模型，附 arXiv 引用，ComfyUI 单文件格式。

- [dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-1017-UNCENSORED-FP8) — dealignai | 赞 427 | 下载 8,282
  DeepSeek-V4.1-Flash 的去审查 FP8 版本。

- [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) — DavidAU | 赞 2,176 | 下载 1,713,544
  Qwen3.8-27B 的社区去审查 GGUF 微调，命名夸张，下载量高。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- [google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2) — google | 赞 2,980 | 下载 256,852
  Google EmbeddingGemma 第二代嵌入模型，特征提取任务主力。

- [mistralai/Timestral-209M](https://huggingface.co/mistralai/Timestral-209M) — mistralai | 赞 424 | 下载 12,334
  Mistral 推出的时间序列预测基础模型，209M 参数。

- [baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2) — baidu | 赞 274 | 下载 513
  百度 Unlimited-OCR 第二代，轻量 OCR 特征提取模型。

- [HuggingFaceBio/Carbon-X](https://huggingface.co/HuggingFaceBio/Carbon-X) — HuggingFaceBio | 赞 235 | 下载 1,595
  基于 Qwen3 的 DNA 序列文本生成模型，面向生物信息学。

- [tencent/Hy-SimulMT-30B-A3B-FP8](https://huggingface.co/tencent/Hy-SimulMT-30B-A3B-FP8) — tencent | 赞 203 | 下载 93
  腾讯混元同声传译 30B-A3B MoE 翻译模型，FP8 版本。

- [InternScience/Sage-A1.5](https://huggingface.co/InternScience/Sage-A1.5) — InternScience | 赞 347 | 下载 6,613
  基于 Qwen3.5 MoE 的科学推理模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- [ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF) — ISTA-DASLab | 赞 407 | 下载 1,105,751
  DeepSeek-V4.1-Flash 的混合精度 GSQ/RCO 量化 GGUF，下载量超百万。

- [unsloth/flint-GGUF](https://huggingface.co/unsloth/flint-GGUF) — unsloth | 赞 299 | 下载 149,888
  unsloth 对 flint 的 GGUF 量化，延续其热门基座的社区热度。

- [orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF) — orcarouter | 赞 285 | 下载 13,441
  DeepSeek-V4.1-Flash 的 abliterated（去除拒答）GGUF 版本。

- [XHToken/Spark-X2.6-4B-GGUF](https://huggingface.co/XHToken/Spark-X2.6-4B-GGUF) — XHToken | 赞 205 | 下载 104,927
  Spark-X2.6-4B 的 GGUF 量化版。

## 生态信号

Qwen 家族（Qwen3.5/3.8 及衍生微调）势头最猛，占据榜单头部与多个社区微调条目。DeepSeek-V4.1-Flash 成为本周被量化、去审查、微调最频繁的基座，ISTA-DASLab 的 GGUF 下载破百万，说明社区对开源权重的二次加工已成常态。生成侧，ComfyUI 单文件格式（flux、MOSS、Fibo）下载量普遍高于原始模型，本地工作流是主要分发渠道。去审查（uncensored/abliterated）版本集中出现且下载可观，反映用户对开放权重的实际需求。整体上，开源权重生态活跃度远超闭源可观测范围。

## 值得探索

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 榜单绝对领跑者，27B 多模态对话模型，下载与点赞断层领先，是研究当前开源多模态能力上限的首选。
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖图生视频、文生视频、视频转视频的全能视频扩散模型，下载 216 万，适合研究视频生成工程化。
- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — 混合精度量化方案（GSQ/RCO）值得关注，下载破百万，是研究量化对推理质量影响的实用样本。

---

*注：以上分类中的数量与数据均直接取自提供的榜单信息。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*