# Hugging Face 热门模型日报 2026-11-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-06 17:31 UTC

---

# Hugging Face 热门模型日报（2026-11-06）

## 今日速览

今日榜首由 Qwen 家族的 [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) 以 19,255 点赞、784 万+ 下载强势领跑，多模态与图像文本任务成主流。视频生成赛道 Lightricks 的 [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) 以超 260 万下载成为最热生成模型之一。DeepSeek-V4.1-Flash-1017 形成"官方发布 + 社区微调 + 多路量化"的密集生态，同一基座衍生出 GGUF、NVFP4、Coder 等多个变体。图像侧 FLUX 与 Qwen-Image 的 ComfyUI 生态持续活跃。整体看，开源权重发布、社区微调与量化适配构成今日热度主轴。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜19,255 赞｜7,845,288 下载
  官方旗舰多模态对话模型，点赞与下载双料第一，是今日绝对焦点。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai｜5,350 赞｜259,511 下载
  官方旗舰"Flash"版本，支持文本与图像文本生成，并衍生出大量社区变体。

- **[mistralai/Mistral-Large-4-1T-A52B](https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B)** — mistralai｜1,623 赞｜10,530 下载
  1T 总参数量大规模 MoE 模型，支持 vLLM/SGLang，下载量因体量偏低但关注度高。

- **[LiquidAI/LFM3-1.7B](https://huggingface.co/LiquidAI/LFM3-1.7B)** — LiquidAI｜1,522 赞｜66,003 下载
  Liquid 新一代小参数文本生成模型，轻量定位吸引关注。

- **[ricursiveAI/Ripple-65B-Preview](https://huggingface.co/ricursiveAI/Ripple-65B-Preview)** — ricursiveAI｜314 赞｜2,013 下载
  65B 预览版自定义代码模型，早期预览阶段热度有限。

- **[FusionCow/Sulphur-3](https://huggingface.co/FusionCow/Sulphur-3)** — FusionCow｜390 赞｜950 下载
  基于 MiniMax-H3 的社区微调模型，尚处早期。

- **[webAI-Official/TwIL-8B](https://huggingface.co/webAI-Official/TwIL-8B)** — webAI-Official｜165 赞｜8,209 下载
  基于 granite 的 8B 文本生成模型，提供 GGUF 权重。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜10,826 赞｜2,607,491 下载
  全功能视频生成模型，支持图/文/视频互转，下载量领跑生成赛道。

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** — moonshotai｜1,418 赞｜18,432 下载
  Kimi 新一代图像文本模型，主打专业级多模态理解。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook｜5,989 赞｜1,920,315 下载
  第三代分割一切模型，支持视频，下载量印证其工具属性。

- **[abenzerps/Qwen-Image-2.1-Turbo-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized)** — abenzerps｜5,680 赞｜135,850 下载
  Qwen-Image 的 GGUF 量化 Turbo 版，ComfyUI 用户推动高热度。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs｜2,614 赞｜1,109,078 下载
  FLUX 第三代图像编辑/生成模型的 ComfyUI 单文件版，下载破百万。

- **[Pika-Labs/Pika-H3-Flex](https://huggingface.co/Pika-Labs/Pika-H3-Flex)** — Pika-Labs｜488 赞｜986 下载
  支持音视频同步生成的视频模型/LoRA，早期关注为主。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — speridlabs｜894 赞｜19,139 下载
  基于高斯泼溅的图生 3D 模型，3D 生成小众赛道亮点。

- **[Edge0/Audio8-TTS-Realistic-Air](https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air)** — Edge0｜330 赞｜12,847 下载
  高拟真 TTS 语音合成模型。

- **[PrunaAI/P-H3-Image-Comfy](https://huggingface.co/PrunaAI/P-H3-Image-Comfy)** — PrunaAI｜213 赞｜398,138 下载
  ComfyUI 优化图像生成单文件，下载量与点赞存在落差。

- **[microsoft/Mage-VL-Cowork](https://huggingface.co/microsoft/Mage-VL-Cowork)** — microsoft｜196 赞｜2,826 下载
  微软基于 llava_onevision2 的多模态协作视觉模型。

- **[sensenova/SenseNova-Loop-9B-Preview](https://huggingface.co/sensenova/SenseNova-Loop-9B-Preview)** — sensenova｜263 赞｜3,138 下载
  商汤预览版多模态文本生成模型。

- **[xiaomi-research/Xiaomi-OCR-0](https://huggingface.co/xiaomi-research/Xiaomi-OCR-0)** — xiaomi-research｜301 赞｜23,683 下载
  小米首个 OCR 多模态模型。

- **[baidu/Unlimited-OCR-2](https://huggingface.co/baidu/Unlimited-OCR-2)** — baidu｜634 赞｜310,955 下载
  百度不限长 OCR 第二代，下载量说明实用需求旺盛。

- **[nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B)** — nvidia｜3,070 赞｜61,049 下载
  30B 稀疏语音识别模型，企业级 ASR 关注度高。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — ccore｜767 赞｜190,243 下载
  基于 Qwen3.5 的 Three.js/3D 代码专用模型，垂直代码场景下载亮眼。

- **[ccore/Qwen3.5-4B-GLB-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder)** — ccore｜212 赞｜20,256 下载
  同系列 GLB 输出变体，覆盖 3D 资源生成。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜2,583 赞｜1,518,569 下载
  Qwen3.8-27B 的极致社区微调 GGUF 版，uncensored 取向，下载破 150 万。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth｜1,452 赞｜1,309,045 下载
  Qwen3.8-Flash-Next 的 GGUF 量化版，unsloth 出品下载破 130 万。

- **[AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF)** — AtomicChat｜339 赞｜108,162 下载
  DeepSeek-V4.1-Flash 的 uncensored GGUF 量化版。

- **[ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF](https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF)** — ISTA-DASLab｜177 赞｜222,222 下载
  学术机构出品的 DeepSeek-V4.1 Coder GGUF 量化版。

- **[nvidia/DeepSeek-V4.1-Flash-1017-NVFP4](https://huggingface.co/nvidia/DeepSeek-V4.1-Flash-1017-NVFP4)** — nvidia｜183 赞｜7,147 下载
  NVIDIA ModelOpt 驱动的 NVFP4 量化版，官方硬件优化。

- **[OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated](https://huggingface.co/OBLITERATUS/DeepSeek-V4.1-Flash-1017-obliterated)** — OBLITERATUS｜266 赞｜2,640 下载
  DeepSeek-V4.1-Flash 的去对齐改造版本。

## 生态信号

今日生态呈现三大信号。其一，**Qwen 家族势头最猛**，Qwen3.8/Qwen3.5 基座同时占据榜首与多个微调、量化、3D 代码场景，形成最密集的衍生网络。其二，**DeepSeek-V4.1-Flash 同样衍生密集**，官方加上 AtomicChat、ISTA-DASLab、NVIDIA、OBLITERATUS 等多路量化与改造变体，显示头部开源基座"一发多分支"的扩散模式。其三，**开源权重发布与量化/微调活动并行活跃**：GGUF 与 NVFP4 量化版本下载量动辄百万级（如 unsloth、DavidAU），ComfyUI 单文件图像模型亦广受欢迎，说明社区对可本地部署、可定制的权重需求持续旺盛。

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 今日双料榜首，27B 多模态模型兼顾性能与部署可行性，是理解当前开源旗舰能力的最佳样本，也有丰富下游微调版本可参考。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖图/文/视频互转的全功能视频生成模型，260 万+ 下载说明工程可用性，适合研究视频生成与多任务统一架构。

3. **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — 小而专的 3D/Three.js 代码模型，190 万+ 下载但点赞平平，垂直场景实用价值被低估，值得作为专用代码模型案例研究。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*