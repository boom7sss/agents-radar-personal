# Hugging Face 热门模型日报 2026-08-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-09 02:08 UTC

---

# Hugging Face 热门模型日报（2026-08-09）

## 今日速览

本周热门榜呈现「视频生成生态爆发 + 中文开源模型领跑」的态势。MiniMax-H3 不仅自身是图像/视频生成明星，还衍生出 ComfyUI 封装、GGUF/NVFP4 量化、LoRA 微调等 10+ 个相关条目，形成完整本地视频工作流。语言模型方面，GLM-5.2、DeepSeek-V4-Flash、Kimi-K3 的点赞与下载量均居前，中文开源权重在国际社区吸引力显著。FLUX.1-dev 仍是图像生成领域热度最高的开源基础模型；OCR、语音对话、安全护栏等专用模型也开始占据重要生态位。

---

## 热门模型

### 🧠 语言模型

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)**  
  作者: deepseek-ai | 👍 2,854 | 📥 785,771  
  说明：DeepSeek V4 Flash 的文本生成/对话模型，以高性能和低延迟推理获得大量下载。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  作者: zai-org | 👍 4,902 | 📥 2,480,368  
  说明：GLM 系列新一代 MoE-DSA 大模型，是本周热度最高的开源 LLM 之一。

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)**  
  作者: LiquidAI | 👍 418 | 📥 81,522  
  说明：Liquid AI 的 2.6B 高效语言模型，主打低资源/边缘部署场景。

- **[deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview)**  
  作者: deepgrove | 👍 255 | 📥 896  
  说明：新团队 deepgrove 的 MoE 文本生成预览模型，具有早期研究关注度。

- **[inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash)**  
  作者: inclusionAI | 👍 222 | 📥 4,189  
  说明：Ling-3.0 Flash 对话模型，采用 bailing_hybrid 混合架构，适合对话/指令场景。

---

### 🎨 多模态与生成（图像 / 视频 / 音频 / 多模态理解）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**  
  作者: MiniMaxAI | 👍 3,111 | 📥 26,693  
  说明：图像+文本到视频的生成模型，本周 MiniMax-H3 生态的源头模型。

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)**  
  作者: Comfy-Org | 👍 1,007 | 📥 3,943,176  
  说明：ComfyUI 单文件版本，下载量极高，是本地使用 H3 的主要入口。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**  
  作者: moonshotai | 👍 10,343 | 📥 1,388,105  
  说明：Kimi K3 多模态模型，周点赞破万，是本周最受关注的视觉语言模型之一。

- **[lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)**  
  作者: lightx2v | 👍 199 | 📥 0  
  说明：MiniMax H3 Turbo 版本，支持 text-to-video、image-to-video、reference-to-video。

- **[Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy)**  
  作者: Kijai | 👍 184 | 📥 0  
  说明：Kijai 制作的 ComfyUI 封装，方便将 H3 节点化接入工作流。

- **[Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)**  
  作者: Kijai | 👍 141 | 📥 0  
  说明：H3 实验性版本，用于验证新功能与工作流兼容性。

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)**  
  作者: Audio8 | 👍 324 | 📥 12,837  
  说明：0.6B 轻量文本到语音模型，基于 ArkTTS 架构，适合语音合成场景。

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)**  
  作者: microsoft | 👍 314 | 📥 457,581  
  说明：微软推出的多模态视觉语言模型，通用图像理解与对话能力较强。

- **[black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev)**  
  作者: black-forest-labs | 👍 14,038 | 📥 502,330  
  说明：FLUX.1-dev 文生图模型，本周榜单中点赞最高的开源模型之一。

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)**  
  作者: thinkingmachines | 👍 346 | 📥 28,178  
  说明：小型多模态模型，支持图文输入与对话，适合轻量集成。

---

### 🔧 专用模型（代码 / OCR / 语音 / 安全）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  作者: baidu | 👍 3,970 | 📥 2,857,997  
  说明：百度发布的 OCR 多模态模型，下载量近 286 万，是本周最热门的专用模型之一。

- **[nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)**  
  作者: nvidia | 👍 246 | 📥 458  
  说明：NVIDIA 的语音对话模型，面向实时语音交互场景。

- **[mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B)**  
  作者: mistralai | 👍 201 | 📥 4,950  
  说明：Mistral 推出的 3B 安全护栏模型，用于检测和过滤不安全内容。

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**  
  作者: Kwaipilot | 👍 544 | 📥 17,885  
  说明：面向开发场景的代码生成模型，基于 Qwen3.5-MoE 架构，支持代码与多模态理解。

---

### 📦 微调与量化（社区微调 / GGUF / NVFP4 / LoRA）

- **[larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)**  
  作者: larryvrh | 👍 490 | 📥 0  
  说明：MiniMax-H3-Turbo 的 LoRA 版本，用于视频生成风格/运动控制，属早期社区实验。

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**  
  作者: DavidAU | 👍 1,761 | 📥 2,345,190  
  说明：Qwen3.6-27B 的社区微调 GGUF 版本，下载量超 234 万，主打本地化“Uncensored”对话。

- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)**  
  作者: ethanfel | 👍 403 | 📥 0  
  说明：Qwen3-VL-32B 的 INT8 量化版，对接 ComfyUI/H3 文本编码管线。

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)**  
  作者: unsloth | 👍 608 | 📥 175,093  
  说明：Unsloth 制作的 DeepSeek-V4-Flash GGUF 量化，是本地部署该模型的主流选择。

- **[drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)**  
  作者: drbaph | 👍 207 | 📥 0  
  说明：将 Turbo LoRA 封装为 ComfyUI 可直接加载的 adapter/pruned 格式。

- **[SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)**  
  作者: SexGod1979 | 👍 176 | 📥 0  
  说明：社区微调的 MiniMax-H3 文本到视频模型，主打特定视觉风格。

- **[realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)**  
  作者: realrebelai | 👍 176 | 📥 128,265  
  说明：MiniMax-H3 的 GGUF 量化包，适配 ComfyUI，下载量超过 12 万。

- **[LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)**  
  作者: LiquidAI | 👍 157 | 📥 49,562  
  说明：LFM2.5-2.6B 的 llama.cpp GGUF 量化版本，面向低资源本地推理。

- **[Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot)**  
  作者: Abiray | 👍 143 | 📥 471,519  
  说明：MiniMax-H3 的 NVFP4/INT4/INT8 混合量化版本，兼顾生成质量与显存占用。

- **[sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4)**  
  作者: sakamakismile | 👍 133 | 📥 0  
  说明：Qwen3-VL-32B 的 NVFP4 量化版本，常作为 MiniMax-H3 的文本编码器接入 ComfyUI。

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF)**  
  作者: LuffyTheFox | 👍 438 | 📥 373,651  
  说明：Qwen3.6 MoE（35B-A3B）的 Hermes 风格社区微调 GGUF，下载量超 37 万。

---

## 生态信号

MiniMax-H3 的视频生成生态是本周最强信号：从原版到 ComfyUI 封装、GGUF/NVFP4/INT 量化、Turbo LoRA 等衍生条目大量上榜，说明开源视频模型已进入「可安装、可量化、可二次微调」的本地化阶段。中文开源权重继续主导 HF 热度：GLM、DeepSeek、Kimi、MiniMax、百度等均有高赞条目，开源权重与闭源 API 的差距在缩小。社区“Uncensored/Heretic”风格与 GGUF 微调版本频繁出现，反映出对低门槛本地部署和不设限对话的持续需求。

---

## 值得探索

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**：视频生成领域生态最完整的模型，周边有 ComfyUI、量化、LoRA 等大量衍生工具，值得作为视频生成基准深入测试。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：新一代 MoE-DSA 架构，下载量超 248 万，是研究中文开源大模型前沿路线的重要样本。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**：OCR 专用模型下载量近 286 万，实用性强，适合文档解析、知识库预处理等真实业务场景。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*