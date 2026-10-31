# Hugging Face 热门模型日报 2026-10-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-31 15:45 UTC

---

# Hugging Face 热门模型日报（2026-10-31）

## 今日速览

本期榜单流量明显集中在两条主线：一是 Qwen 家族的多模态与衍生生态，Qwen/Qwen3.8-27B 以 18,838 周点赞、758 万下载双双领跑；二是视频与图像生成，Lightricks/LTX-2.5 拿下 1 万级点赞与 244 万下载。LiquidAI 一次性铺开 LFM3 系列（通用、Omni、VL、Audio、GGUF），形成小参数全模态矩阵。量化侧热度集中于 DeepSeek-V4.1-Flash 的 GGUF 衍生（含 ISTA-DASLab 的 GSQ-RCO 混合精度版本，下载超 200 万），说明大模型本地化仍是强需求。

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Nanbeige/Nanbeige4.3-33B](https://huggingface.co/Nanbeige/Nanbeige4.3-33B)** — Nanbeige｜837 赞｜13,832 下载
  基于 llama 架构的 33B 通用文本生成模型，凭中等体量与本家品牌关注度上榜。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** — LiquidAI｜606 赞｜32,933 下载
  LFM3 系列的 1.7B 基础文本模型，作为小参数家族的主干首发受到关注。

- **[RecursiveSI/flint](https://huggingface.co/RecursiveSI/flint)** — RecursiveSI｜1,271 赞｜23,079 下载
  主打对话场景的文本生成模型，以独立系列 flint 首次进入热榜。

- **[XHToken/Spark-X2.6-4B](https://huggingface.co/XHToken/Spark-X2.6-4B)** — XHToken｜935 赞｜14,515 下载
  4B 级轻量 LLM，标签沿用 spark2_5 系列，吸引中低算力用户。

- **[Diffuspace/Clover-35B-A3B-Preview](https://huggingface.co/Diffuspace/Clover-35B-A3B-Preview)** — Diffuspace｜184 赞｜2,021 下载
  35B 总参、3B 激活的 MoE 预览版，稀疏架构是其主要卖点。

- **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)** — nvidia｜297 赞｜75,125 下载
  仅 4GB 级体量的 Nemotron 3.5 小模型（同时提供 GGUF），面向端侧部署。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜18,838 赞｜7,581,050 下载
  本期榜首，Qwen3.8 的 27B 图文理解模型，点赞与下载均断层领先。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai｜4,071 赞｜156,373 下载
  DeepSeek V4.1 Flash 官方权重，支持图文输入，是本周最受关注的 DeepSeek 发布。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)** — mistralai｜1,383 赞｜2,945 下载
  1T 总参、52B 激活的多模态大模型，标注支持 vLLM/SGLang，下载量低但话题度高。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜10,035 赞｜2,441,077 下载
  覆盖图生视频、文生视频、视频生视频的扩散模型，本周下载量最高。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs｜2,167 赞｜925,236 下载
  FLUX 3 的图像编辑/生成单文件版本，直接面向 ComfyUI 工作流。

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)** — baidu｜469 赞｜69,231 下载
  百度 Unlimited-OCR 第二代，图文输入做 OCR/特征提取，实用型多模态。

- **[MiniMaxAI/MiniMax-M3.1-Flash](https://huggingface.co/MiniMaxAI/MiniMax-M3.1-Flash)** — MiniMaxAI｜511 赞｜21,136 下载
  MiniMax M3 系列的轻量多模态版本，主打图文理解。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)** — Pika-Labs｜243 赞｜294 下载
  图生视频模型，支持音视频联合生成并提供 LoRA，处于早期试用阶段。

- **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)** — LiquidAI｜240 赞｜5,695 下载
  any-to-any 的 2B 全模态模型，是 LFM3 家族的旗舰形态。

- **[LiquidAI/LFM3-VL-2B](https://huggingface.co/LiquidAI/LFM3-VL-2B)** — LiquidAI｜184 赞｜8,091 下载
  LFM3 的 2B 视觉语言分支，定位轻量图文理解。

- **[LiquidAI/LFM3-Audio-2B](https://huggingface.co/LiquidAI/LFM3-Audio-2B)** — LiquidAI｜162 赞｜4,790 下载
  LFM3 的 2B 音频分支，支持语音识别与 any-to-any 输入。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook｜5,545 赞｜1,900,570 下载
  SAM3 分割/掩码生成模型（含视频标签），下载与点赞均属头部。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — speridlabs｜190 赞｜2,367 下载
  基于高斯泼溅的图生 3D 模型，Apache-2.0 许可，属小众但高关注方向。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — nvidia｜525 赞｜24,357 下载
  30B 总参、4B 激活的语音转写模型，基于 NeMo SpeechLM。

### 🔧 专用模型（代码、OCR、文档）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — ccore｜372 赞｜29,615 下载
  面向 three.js/3D 代码生成的 Qwen3.5-4B 衍生模型，同时提供 GGUF。

- **[openbmb/MiniCPM-OCR-1.0](https://huggingface.co/openbmb/MiniCPM-OCR-1.0)** — openbmb｜372 赞｜3,050 下载
  MiniCPM 系列首个 OCR 专用模型，主打文档解析。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)** — abenzerps｜5,397 赞｜2,558,497 下载
  Qwen-Image 2.1 的去审查 GGUF 量化版，配 ComfyUI 使用，下载量惊人。

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — ISTA-DASLab｜513 赞｜2,076,624 下载
  学术团队出品的 GSQ-RCO 混合精度 GGUF 量化，是 DeepSeek 本地化的主力分发之一。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜2,257 赞｜1,512,083 下载
  Qwen3.8-27B 的社区去审查/编码增强 GGUF 融合版，命名极长，渲染完整可点击访问。

- **[orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF](https://huggingface.co/orcarouter/DeepSeek-V4.1-Flash-1017-abliterated-GGUF)** — orcarouter｜388 赞｜31,320 下载
  DeepSeek-V4.1-Flash 的 abliterated 本地化 GGUF，面向 llama.cpp 用户。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)** — SC117｜567 赞｜3,268,600 下载
  Qwen3.8-Flash-Next 的去审查量化版，本周下载量全场最高。

- **[LiquidAI/LFM3-1.7B-GGUF](https://huggingface.co/LiquidAI/LFM3-1.7B-GGUF)** — LiquidAI｜153 赞｜129,608 下载
  官方发布的 LFM3-1.7B GGUF，面向 llama.cpp 本地推理。

- **[AtomicChat/LFM3-1.7B-Uncensored-GGUF](https://huggingface.co/AtomicChat/LFM3-1.7B-Uncensored-GGUF)** — AtomicChat｜149 赞｜38,382 下载
  LFM3-1.7B 的社区去审查 GGUF 版本。

- **[OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM](https://huggingface.co/OliviaRossi/Minimax-h3_Singularity-x-10Eros-Max_PRISM)** — OliviaRossi｜157 赞｜152,183 下载
  基于 TenStrip/10Eros-Max 的社区合并模型，属二次创作向。

## 生态信号

Qwen 家族本周势头最猛：官方 Qwen3.8-27B 领跑全榜，其衍生（DavidAU、SC117、ccore 的 Qwen3.5-4B-3D-Coder）合计贡献数百万下载，形成"官方发模型、社区做量化/去审查"的双层结构。DeepSeek-V4.1-Flash 同样出现官方 + 多个 GGUF 分支（含 ISTA-DASLab 的学术量化）。LiquidAI 以 LFM3 一次性覆盖文本、Omni、VL、Audio 与 GGUF，是本周矩阵化最彻底的发布。开源权重仍是热榜主体，未见闭源权重模型上榜。值得注意的信号是量化从"简单 GGUF"走向"GSQ-RCO 混合精度"，以及 abliterated/uncensored 衍生在下载量上持续压过原始模型。

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周唯一点赞破万且下载破 700 万的官方模型，是多模态应用的首选底座，也是理解后续社区微调生态的起点。

2. **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-GGUF)** — 学术团队主导的混合精度量化方案，下载量已超 200 万，值得研究其精度-体积权衡，对比普通 GGUF 的实际差异。

3. **[LiquidAI/LFM3-Omni-2B](https://huggingface.co/LiquidAI/LFM3-Omni-2B)** — 仅 2B 却覆盖 any-to-any，适合作为小参数全模态研究与端侧原型验证的样本，可与同家族 VL/Audio 分支做消融对比。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*