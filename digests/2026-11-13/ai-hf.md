# Hugging Face 热门模型日报 2026-11-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-13 17:47 UTC

---

# Hugging Face 热门模型日报（2026-11-13）

## 今日速览

今日榜单被 Qwen3.8 全家桶强势占据：基座、GGUF 量化、社区微调与 abliterated 版本同框上榜，衍生生态极为活跃。视频与图像生成侧，Lightricks 的 LTX-2.5 以 11,733 点赞、278 万下载成为流量之王，BFL、MiniMax 的 ComfyUI 适配版本同步放量。语言模型方面，DeepSeek-V4.1-Flash、Kimi-K3.1-Pro、NousResearch Arete-27B 构成新一轮旗舰竞逐。量化与"去审查"（heretic/abliterated）社区继续高产，单仓库下载可达数百万。Facebook 在视觉基建（SAM3、DINOv3、SAM-3D-Body）持续补位。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-Flash-Next**
  https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  Qwen | 7,051 赞 · 3,098,083 下载
  Qwen 新一代 Flash 系列主力（image-text-to-text，标签 qwen4_exp），基座发布即冲上高热度，是今日多数量化与微调的上游源头。

- **deepseek-ai/DeepSeek-V4.1-Flash-1017**
  https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
  deepseek-ai | 5,615 赞 · 398,161 下载
  DeepSeek V4.1 Flash 正式版，多模态对话（deepseek_v41），被视为本周与 Qwen 正面竞争的开源旗舰。

- **NousResearch/Arete-27B**
  https://huggingface.co/NousResearch/Arete-27B
  NousResearch | 526 赞 · 5,545 下载
  基于 Qwen3.5 的监督微调模型（arete），点赞高而下载低，属"发布初期被观望/尝鲜"的典型。

- **moonshotai/Kimi-K3.1-Pro**
  https://huggingface.co/moonshotai/Kimi-K3.1-Pro
  moonshotai | 2,004 赞 · 40,953 下载
  Kimi K3.1 Pro 开源权重，采用 compressed-tensors 压缩，主打高质量文本生成。

- **ricursiveAI/Ripple-65B-Preview**
  https://huggingface.co/ricursiveAI/Ripple-65B-Preview
  ricursiveAI | 548 赞 · 8,500 下载
  65B 预览模型（custom_code），体量大、下载少，处于早期评测期。

- **thinkingmachines/Inkling-2-Small**
  https://huggingface.co/thinkingmachines/Inkling-2-Small
  thinkingmachines | 203 赞 · 1,064 下载
  小尺寸对话模型新作，热度尚在培育阶段，适合关注其后续迭代。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **Lightricks/LTX-2.5**
  https://huggingface.co/Lightricks/LTX-2.5
  Lightricks | 11,733 赞 · 2,778,909 下载
  今日下载与点赞双冠的视频生成模型（image/text/video-to-video 全覆盖），diffusion-single-file 形态对本地部署极友好。

- **Qwen/Qwen3.8-27B**
  https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen | 19,825 赞 · 6,960,395 下载
  全榜点赞与下载第一，Qwen3.8 多模态 27B 基座，是今日生态的绝对中心。

- **MiniMaxAI/MiniMax-H3-Image**
  https://huggingface.co/MiniMaxAI/MiniMax-H3-Image
  MiniMaxAI | 974 赞 · 437,039 下载
  MiniMax H3 图像生成/编辑正式发布，diffusers 生态原生支持，下载量快速爬升。

- **Comfy-Org/MiniMax-H3-Image**
  https://huggingface.co/Comfy-Org/MiniMax-H3-Image
  Comfy-Org | 330 赞 · 1,257,301 下载
  MiniMax-H3-Image 的 ComfyUI 单文件适配版，下载远超原始仓库，体现工作流分发的重要性。

- **black-forest-labs/flux-3-image-klein-comfy**
  https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy
  black-forest-labs | 3,070 赞 · 1,330,289 下载
  FLUX.3 的 ComfyUI 版本，主打图像生成与编辑，官方直供工作流形态。

- **VideoRebirthAI/hyperflow-h3-flash**
  https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash
  VideoRebirthAI | 251 赞 · 389,065 下载
  基于 MiniMax-H3 的视频生成衍生模型（hyperflow-h3），已出现社区生态分层。

- **Viggle/Viggle-Remake**
  https://huggingface.co/Viggle/Viggle-Remake
  Viggle | 359 赞 · 183,188 下载
  视频编辑/角色替换工具（基于 minimax-h3），面向视频后期创作场景。

- **Zyphra/ZONOS3-Mini**
  https://huggingface.co/Zyphra/ZONOS3-Mini
  Zyphra | 265 赞 · 13,068 下载
  Zonos3 小型 TTS 模型，同时提供 safetensors 与 gguf，代表语音方向的新品。

- **ConwayResearch/Underdog-Woof**
  https://huggingface.co/ConwayResearch/Underdog-Woof
  ConwayResearch | 227 赞 · 10 下载
  主打 on-device/CPU 的纯 numpy TTS，点赞高但下载极低，属概念性/实验性发布。

- **speridlabs/idol**
  https://huggingface.co/speridlabs/idol
  speridlabs | 2,266 赞 · 31,367 下载
  image-to-3D 模型，采用 Gaussian Splatting，Apache-2.0 许可，单图重建 3D 资产。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **facebook/sam3**
  https://huggingface.co/facebook/sam3
  facebook | 6,509 赞 · 2,092,498 下载
  SAM3 分割基础模型（mask-generation / feature-extraction），视觉基建级发布，下载破两百万。

- **facebook/dinov3-vitl16-pretrain-lvd1689m**
  https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m
  facebook | 2,180 赞 · 698,339 下载
  DINOv3 ViT-L/16 预训练视觉特征模型，下游任务的常用骨干。

- **facebook/sam-3d-body-dinov3**
  https://huggingface.co/facebook/sam-3d-body-dinov3
  facebook | 1,109 赞 · 15,467 下载
  基于 DINOv3 的 3D 人体网格恢复/姿态估计模型，垂直场景专用。

- **tencent/Qwen3.8-27B-DSpine-b16**
  https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16
  tencent | 225 赞 · 4,332 下载
  面向投机解码的 draft model（speculative-decoding），加速 Qwen3.8-27B 推理的配套件。

- **ccore/Qwen3.5-4B-3D-Coder**
  https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder
  ccore | 1,072 赞 · 392,582 下载
  面向 three.js/3D 场景的代码模型（code、threejs），小而专，下载可观。

- **Cactus-Compute/mirage**
  https://huggingface.co/Cactus-Compute/mirage
  Cactus-Compute | 233 赞 · 18,959 下载
  零样本目标检测/图像理解模型，面向端侧感知场景。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF**
  https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
  unsloth | 5,849 赞 · 6,253,865 下载
  Qwen3.8-27B 官方标配量化版，全榜下载第二，是本地部署的事实入口。

- **SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF**
  https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF
  SC117 | 952 赞 · 4,081,896 下载
  Qwen3.8-Flash-Next 的 abliterated 量化版，下载超四百万，去审查需求催生的高流量仓库。

- **huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**
  https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF
  huihui-ai | 2,061 赞 · 4,051,917 下载
  老牌 huihui 的 Qwen3.8-27B abliterated 量化版本，持续占据高下载量。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**
  https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU | 3,024 赞 · 1,639,400 下载
  重度叠合微调的 heretic/coder GGUF，命名即卖点，代表"缝合怪"式社区玩法。

- **unsloth/Qwen3.8-Flash-Next-GGUF**
  https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF
  unsloth | 1,663 赞 · 2,322,693 下载
  Qwen3.8-Flash-Next 的 GGUF 量化版，与基座同步放量。

- **Scantist/GLM-5.3-SLIM-GGUF**
  https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF
  Scantist | 1,363 赞 · 18,066 下载
  GLM-5.3 MoE 的裁剪/量化（S LIM + 神经架构搜索标签），探索 MoE 瘦身路线。

- **mradermacher/gemma-4-31B-it-ARA-heretic-GGUF**
  https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF
  mradermacher | 249 赞 · 105,256 下载
  Gemma-4-31B 的 heretic 去审查 GGUF，多家族去审查量化正在常态化。

- **xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic**
  https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic
  xtools-at | 4,934 赞 · 21,586 下载
  DeepSeek-V4-Pro / Qwen3.5-9B 合并路线的去审查版本，点赞极高而下载偏低，具"话题型"特征。

---

## 生态信号

Qwen3.8 家族是今日绝对主角：基座（27B、Flash-Next）与 unsloth 量化、abliterated、heri tic、重度微调版本同时上榜，形成"一基座、多分支"的完整树状生态。开源权重仍是榜单主力，MiniMax-H3、Kimi、GLM、DeepSeek、Gemma、FLUX 等多家族并存，未见闭源垄断迹象。量化活动高度集中于 GGUF：unsloth 是事实标准出口，SC117、huihui、DavidAU 等社区分支以 abliterated/heretic 为卖点获得数百万下载，反映"去审查"已成为与量化同等重要的分发动力。视频侧围绕 MiniMax-H3 出现 hyperflow、Viggle 等衍生层，ComfyUI 单文件适配的下载量普遍高于原始仓库，工作流分发正在重塑模型热度分布。

---

## 值得探索

1. **Lightricks/LTX-2.5** — 榜单视频生成最强（1.17 万赞、278 万下载），单一 diffusion 文件同时覆盖图/文/视频到视频，部署门槛低，适合作为视频生成基线与二次创作起点。

2. **unsloth/Qwen3.8-27B-GGUF** — 若只挑一个本地可用模型，它是 Qwen3.8-27B 最成熟的量化入口（625 万下载），配合 tencent 的 DSpine 投机解码 draft model 可进一步提速。

3. **Scantist/GLM-5.3-SLIM-GGUF** — 唯一的 MoE 瘦身/神经架构搜索路线代表，点赞 1,363 但下载仅 1.8 万，处于早期，值得研究 MoE 压缩能否在消费级硬件上跑通。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*