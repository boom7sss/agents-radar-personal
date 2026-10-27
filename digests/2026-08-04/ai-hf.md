# Hugging Face 热门模型日报 2026-08-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-04 15:28 UTC

---

# Hugging Face 热门模型日报（2026-08-04）

## 今日速览
- 多模态模型强势领跑：Moonshot 的 **Kimi-K3** 以 9,969 点赞登顶热榜，MiniMax-H3 视频生成模型同样引发大量关注。
- 语言模型赛道中，**GLM-5.2** 与 **DeepSeek-V4-Flash** 系列继续霸榜，下载量均超百万，开源 LLM 仍是生态核心。
- **Qwen3.5/3.6 衍生生态爆发**：大量社区微调（uncensored/heretic）与 GGUF 量化版本占据热榜半壁江山，成为本周最活跃的“周边”力量。
- 垂直模型表现亮眼：百度 **Unlimited-OCR** 下载量突破 270 万，音频 TTS（Inflect-Micro、Audio8）与代码模型（KAT-Coder）也涌现新作。
- 量化与部署工具链持续活跃：unsloth 的 GGUF 转换覆盖头部模型，NVFP4 等企业级量化也开始进入大众视野。

## 热门模型

### 🧠 语言模型
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — zai-org · 点赞 4,809 · 下载 2,234,662  
  智谱新一代 MoE 对话模型，延续 GLM 系列高性能与高热度，是本周点赞最高的纯文本 LLM。

- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — deepseek-ai · 点赞 2,224 · 下载 433,284  
  DeepSeek-V4-Flash 的 0731 迭代版，主打对话与快速推理，官方持续更新推高关注度。

- [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) — deepseek-ai · 点赞 2,004 · 下载 2,737,621  
  DeepSeek 官方原版 V4 Flash，下载量本周最高，兼顾性能与速度，是社区部署的热门选择。

- [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) — poolside · 点赞 917 · 下载 82,912  
  Laguna 系列新版本，企业级文本生成模型，以稳定性和长上下文能力受到关注。

- [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) — Nanbeige · 点赞 663 · 下载 37,256  
  小尺寸高效 LLM（3B），主打低成本部署，适合边缘设备与轻量场景。

- [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) — XYZAILab · 点赞 401 · 下载 1,317  
  基于 Qwen3.5/3.6 架构的 MoE 小型模型，定位轻量多模态推理，社区关注其架构探索。

- [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) — XYZAILab · 点赞 357 · 下载 1,388  
  Aquila 系列专业版，增强 agentic-search 能力，面向智能体与搜索场景。

- [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) — EschaLabs · 点赞 184 · 下载 2,987  
  基于 Qwen3.6 的 35B MoE 版本（激活 3B），社区训练的高效原始权重。

- [amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think) — amd · 点赞 151 · 下载 2,306  
  AMD 发布的 MoE 推理模型（16B 总参/3B 激活），侧重“思考”能力，硬件厂商入局 LLM 的标志。

- [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — LGAI-EXAONE · 点赞 111 · 下载 325  
  LG 超大规模 MoE 模型（750B 总参/37B 激活），韩语与多语言能力突出，展示超大规模开源野心。

### 🎨 多模态与生成
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — moonshotai · 点赞 9,969 · 下载 1,125,935  
  Moonshot 新一代多模态模型，支持图像+文本输入，点击量断层第一，是本周最亮眼的发布。

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — MiniMaxAI · 点赞 1,845 · 下载 0  
  图生视频/文生视频生成模型，基于扩散架构，探索高质量可控视频生成新范式。

- [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) — owensong · 点赞 405 · 下载 2,072  
  轻量级本地 TTS 模型，主打 CPU 推理和边缘 AI，适合离线语音合成。

- [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) — thinkingmachines · 点赞 277 · 下载 15,500  
  小型多模态模型，兼顾图像理解与对话，为高效多模态推理提供新选择。

- [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) — microsoft · 点赞 251 · 下载 435,784  
  微软推出的视觉语言模型，擅长图像理解与多模态问答，下载量表现稳定。

- [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — Audio8 · 点赞 233 · 下载 11,276  
  ArkTTS 架构的语音合成预览版，0.6B 参数，面向高质量自然语音生成。

- [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) — lodestones · 点赞 171 · 下载 0  
  基于 Krea 2 的 LoRA 模型，支持文本到图像生成，为 ComfyUI 生态提供风格化能力。

- [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) — empero-ai · 点赞 129 · 下载 2,243  
  基于 Qwen3.5 的 27B 多模态模型，融合文本与视觉理解，社区微调潜力大。

### 🔧 专用模型
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — baidu · 点赞 3,873 · 下载 2,703,366  
  百度通用 OCR 模型，下载量超 270 万，是本周下载最高的专用模型，支持复杂场景文字识别。

- [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) — Kwaipilot · 点赞 464 · 下载 15,381  
  面向代码生成的 MoE 开发者模型，基于 Qwen3.5 MoE，专注编程任务与工具调用。

- [LiquidAI/LFM2.5-Encoder-350M](https://huggingface.co/LiquidAI/LFM2.5-Encoder-350M) — LiquidAI · 点赞 103 · 下载 5,289  
  Liquid AI 的 350M 编码器模型，主打 fill-mask 与特征提取，适合嵌入和检索场景。

### 📦 微调与量化
- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — HauhauCS · 点赞 3,288 · 下载 1,930,898  
  Qwen3.6 的 uncensored GGUF 微调版，下载量近 200 万，反映社区对“无审查”风格的强烈需求。

- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — DavidAU · 点赞 1,491 · 下载 1,633,405  
  社区顶级“缝合怪”微调，融合多种风格与 MTP 优化，GGUF 格式便于本地部署。

- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — Comfy-Org · 点赞 551 · 下载 2  
  ComfyUI 官方适配版 MiniMax-H3，将视频生成模型无缝接入 ComfyUI 工作流。

- [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — unsloth · 点赞 459 · 下载 111,678  
  unsloth 出品的高效 GGUF 量化版，专为 DeepSeek-V4-Flash-0731 优化，降低部署门槛。

- [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) — LuffyTheFox · 点赞 358 · 下载 308,857  
  Qwen3.6 的 Hermes 风格 uncensored 微调 GGUF，兼顾创意与本地运行性能。

- [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) — unsloth · 点赞 298 · 下载 170,055  
  Kimi-K3 官方热度下的 GGUF 量化版本，使多模态模型更易在消费级硬件上运行。

- [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) — DavidAU · 点赞 262 · 下载 323,116  
  Qwen3.5 9B 的 IMATRIX 高压缩 GGUF，兼顾小体积与生成质量，适合轻量设备。

- [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) — nota-ai · 点赞 174 · 下载 69,253  
  Solar Open2 250B 的企业级 NVFP4 量化版，面向 vLLM 商业化部署，压缩比与精度均衡。

- [ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot) — ethanfel · 点赞 173 · 下载 0  
  结合 Qwen3-VL 与 MiniMax-H3 的社区魔改 INT8 版本，专为 ComfyUI 图像/视频工作流设计。

## 生态信号
本周生态呈现三大趋势：**头部模型“全家桶”效应显著**，DeepSeek-V4-Flash、Kimi-K3、Qwen3.6 均形成“官方原版 + GGUF 量化 + 社区微调”的完整矩阵，其中 Qwen3.5/3.6 衍生模型数量最多，Aquila、Qwythos 等新架构也基于其底座，社区二次创作高度活跃。**开源权重成为主流选择**，Moonshot、MiniMax、智谱、LG 等原本偏闭源的实验室纷纷公开权重，并通过 Hugging Face 快速触达开发者；与此同时，社区用 GGUF、INT8、NVFP4 等量化手段将大模型推向消费级硬件，uncensored/heretic 等非官方微调也占据热榜重要席位，反映出用户对“无限制”与“本地化”的持续需求。此外，多模态（视频生成、视觉理解）和垂直模型（OCR、TTS、代码）的升温，显示开源生态正从纯文本向更丰富的应用场景全面扩展。

## 值得探索
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周点赞最高的模型，多模态理解+对话能力强劲，下载量破百万，且已有 GGUF 量化版，值得第一时间体验多模态对话新标杆。
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：视频生成新物种，支持图像/文本到视频，配合 ComfyUI 生态可快速搭建生成工作流，探索创意视频的无限可能。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：纯文本 LLM 中的高赞代表，下载量超 220 万，Moe 架构与对话性能俱佳，研究国产开源模型进化路线不可错过。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*