# Hugging Face 热门模型日报 2026-08-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-10 02:15 UTC

---

# Hugging Face 热门模型日报（2026-08-10）

## 今日速览

今日 Hugging Face 趋势榜呈现“视频生成生态井喷 + 新一代语言模型领跑”的组合格局。MiniMax-H3 系列成为绝对热点，围绕它涌现出 ComfyUI 适配、LoRA、GGUF 量化、INT4/INT8 压缩等大量衍生模型，构成完整社区生态。语言模型方面，DeepSeek-V4-Flash、Kimi-K3、GLM-5.2 等大模型占据高赞，其中 GLM-5.2 以 4.9k 点赞紧随 FLUX.1-dev 之后。多模态与工具模型同样活跃，百度 Unlimited-OCR 下载量逼近 290 万，NVIDIA 语音模型、Audio8 TTS 亦受关注。整体来看，开源权重模型仍是绝对主流，社区微调与量化活动高度活跃。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 作者: zai-org | 点赞: 4,914 | 下载: 2,488,397
  🧠 新一代 MoE 对话模型，采用 GLM-MoE-DSA 架构，是今日榜单中点赞最高的纯文本语言模型。

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — 作者: deepseek-ai | 点赞: 2,952 | 下载: 868,576
  DeepSeek V4 Flash 系列对话模型，主打低延迟与强推理能力，是国产开源大模型的又一力作。

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** — 作者: LiquidAI | 点赞: 453 | 下载: 85,651
  Liquid AI 推出的 2.6B 液态基础模型，以高效推理为特色，适合边缘和低资源场景。

- **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)** — 作者: deepgrove | 点赞: 290 | 下载: 1,089
  MoE 架构的文本生成模型，预览版引发社区对新型稀疏激活机制的讨论。

- **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)** — 作者: inclusionAI | 点赞: 246 | 下载: 4,747
  采用 Bailing-hybrid 架构的对话模型，强调自定义代码与混合专家的高效结合。

- **[SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B)** — 作者: SyzygyResearch | 点赞: 104 | 下载: 1,589
  基于 Qwen3.5-MoE 的 35B 实验模型，探索三元/加法式参数压缩方式。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)** — 作者: black-forest-labs | 点赞: 14,059 | 下载: 487,171
  图像生成领域经典开源模型，持续霸榜，是社区微调与工作流的重要基座。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 作者: moonshotai | 点赞: 10,399 | 下载: 1,456,459
  Kimi K3 多模态大模型，支持图像文本联合理解，采用压缩张量技术降低部署成本。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 作者: MiniMaxAI | 点赞: 3,251 | 下载: 35,295
  MiniMax 官方视频生成大模型，支持文本/图像生成视频，是今日 H3 生态的源头。

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 作者: Comfy-Org | 点赞: 1,076 | 下载: 4,947,943
  ComfyUI 官方发布的 single-file 版 MiniMax-H3，让视频生成模型能够一键接入 ComfyUI 工作流，下载量惊人。

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** — 作者: Audio8 | 点赞: 333 | 下载: 13,132
  轻量级高质量语音合成模型，基于 ArkTTS，以 0.6B 参数实现自然语音生成。

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)** — 作者: nvidia | 点赞: 261 | 下载: 543
  NVIDIA 推出的语音对话模型，集成了多轮语音理解与生成能力，面向实时交互场景。

- **[Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy)** — 作者: Kijai | 点赞: 236 | 下载: 0
  Kijai 为 MiniMax-H3 开发的 ComfyUI 节点/适配器，方便用户在 ComfyUI 中调用视频生成。

- **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** — 作者: lightx2v | 点赞: 235 | 下载: 6,117
  基于 MiniMax-H3 的 Turbo 加速版本，支持图像生成视频和更快的采样。

- **[Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)** — 作者: Kijai | 点赞: 170 | 下载: 0
  Kijai 的 MiniMax-H3 实验性版本，用于测试新的采样与工作流特性。

- **[endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1)** — 作者: endless-frontier | 点赞: 125 | 下载: 482
  基于 Qwen3.5-MoE 的多模态对话模型，尝试将视觉理解与稀疏 MoE 结合。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 作者: baidu | 点赞: 3,987 | 下载: 2,889,062
  百度推出的通用 OCR 模型，支持无限长度文档识别，是当前下载量最高的专用视觉模型之一。

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — 作者: Kwaipilot | 点赞: 552 | 下载: 18,574
  面向代码生成与理解的多模态模型，基于 Qwen3.5-MoE 微调，针对开发者场景优化。

- **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)** — 作者: mistralai | 点赞: 211 | 下载: 5,651
  Mistral 推出的 3B 安全分类模型，用于内容审核与输出安全检查，适配 vLLM 部署。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — 作者: DavidAU | 点赞: 1,808 | 下载: 2,390,692
  社区微调的 Qwen3.6 27B GGUF，融合“Uncensored”与多角色风格，下载量极高。

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** — 作者: unsloth | 点赞: 629 | 下载: 188,761
  Unsloth 优化并量化 DeepSeek-V4-Flash 的 GGUF 版本，显著降低本地部署门槛。

- **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** — 作者: larryvrh | 点赞: 546 | 下载: 0
  为 MiniMax-H3 Turbo 准备的 LoRA 微调模块，可增强文本到视频的特定风格。

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)** — 作者: LuffyTheFox | 点赞: 455 | 下载: 396,282
  基于 Qwen3.6 35B-A3B 的社区微调 MoE 模型，采用 Hermes 风格 + Uncensored，并量化至 GGUF。

- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)** — 作者: ethanfel | 点赞: 418 | 下载: 0
  面向 ComfyUI 的 Qwen3-VL 32B 微调版本，集成 H3 视频理解与 INT8 量化。

- **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)** — 作者: drbaph | 点赞: 232 | 下载: 0
  为 ComfyUI 裁剪的 MiniMax-H3 Turbo LoRA，即插即用。

- **[SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)** — 作者: SexGod1979 | 点赞: 231 | 下载: 0
  社区对 MiniMax-H3 的风格化微调版本，主打特定美学方向。

- **[realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)** — 作者: realrebelai | 点赞: 188 | 下载: 160,747
  MiniMax-H3 的 GGUF 量化集合，基于 Comfy-Org 版本，方便 CPU/低显存推理。

- **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)** — 作者: LiquidAI | 点赞: 175 | 下载: 68,468
  LiquidAI 官方发布的 LFM2.5-2.6B GGUF 版本，兼容 llama.cpp 生态。

- **[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)** — 作者: Abiray | 点赞: 155 | 下载: 511,473
  对 MiniMax-H3 进行 NVFP4/INT4/INT8 混合量化，大幅压缩显存占用。

- **[sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4)** — 作者: sakamakismile | 点赞: 143 | 下载: 0
  将 Qwen3-VL 32B 与 MiniMax-H3 文本编码器结合，并做 NVFP4 量化的联合模型。

## 生态信号

MiniMax-H3 无疑是本周生态扩张最猛烈的模型家族——从官方权重到 ComfyUI 适配、LoRA、GGUF、多精度量化，几乎每个环节都有社区参与者，形成“原模型 + 工具链 + 衍生微调”的完整开源生态。语言模型领域，DeepSeek、Kimi、GLM 等国产开源大模型持续占据头部，开源权重正成为技术分发的重要路径。量化与微调活动异常活跃，GGUF 仍是本地部署首选格式，而针对视频生成模型的多精度压缩（INT4/INT8/NVFP4）成为新热点；同时，“Uncensored/H3 融合”等非官方定制方向也显现出社区对创意自由度与边界探索的强烈需求。

## 值得探索

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：单周 10k+ 点赞，多模态 + 压缩张量路线，代表下一代高效多模态模型的方向，值得深入测试其推理表现与部署友好度。

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**：接近 500 万下载的 ComfyUI 封装，是视频生成工作流事实上的“入口”。配合原版 MiniMax-H3 与社区量化版本，能极大降低用户尝试 SOTA 视频生成的成本。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：下载量近 290 万的 OCR 模型，宣称支持无限长度文档识别，在文档数字化与 RAG 场景中极具实用价值，值得作为工具链集成试点。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*