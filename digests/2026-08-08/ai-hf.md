# Hugging Face 热门模型日报 2026-08-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-08 02:01 UTC

---

# Hugging Face 热门模型日报（2026-08-08）

数据来源：Hugging Face Hub 周趋势榜（30 个模型）

## 今日速览

本周榜单呈现明显的“视频生成 + 开源权重”双主线。MiniMax-H3 是最大热点：官方版本、ComfyUI 单文件、Turbo/LoRA、GGUF/NVFP4/INT8 量化等衍生模型占据大量席位。语言模型方面，DeepSeek-V4-Flash-0731、GLM-5.2、Kimi-K3 等高下载/高赞模型继续领跑，其中 Kimi-K3 以 10,284 点赞成为本周最受关注的多模态模型。Baidu Unlimited-OCR 下载量达 284 万，反映文档智能与多模态 OCR 的强劲需求。社区侧，Qwen3.x 的 GGUF 与 uncensored 微调仍活跃，本地部署和二次开发成为主流实践。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — zai-org · 点赞 4,889 · 下载 2,430,330  
  GLM-5.2：智谱开源 MoE 对话模型，下载超 240 万，是本周最受关注的中文/多语言 LLM 之一。

- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — deepseek-ai · 点赞 2,748 · 下载 702,709  
  DeepSeek-V4-Flash 官方文本生成模型，70 万下载延续 DeepSeek 系列的高人气。

- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — LiquidAI · 点赞 380 · 下载 77,973  
  Liquid AI 的 2.6B 小参数 LLM，主打高效的液态神经网络架构，适合边缘部署。

- [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) — deepgrove · 点赞 228 · 下载 686  
  deepgrove 的 MoE 文本生成预览模型，社区关注其混合专家架构与生成能力。

- [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) — inclusionAI · 点赞 203 · 下载 3,065  
  inclusionAI 的对话/文本生成模型，采用 bailing_hybrid/custom_code 配置，面向中文场景。

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — moonshotai · 点赞 10,284 · 下载 1,308,186  
  Kimi-K3：月之暗面开源的多模态视觉-语言模型，本周点赞最高，综合多模态理解与生成能力是社区关注焦点。

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — MiniMaxAI · 点赞 2,959 · 下载 18,112  
  MiniMax-H3：官方 image-text-to-video 模型，支持文本/图像生成视频，是本周视频生成热潮的核心。

- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — Comfy-Org · 点赞 938 · 下载 3,139,920  
  ComfyUI 官方组织打包的 MiniMax-H3 单文件版，下载量超 314 万，是本地视频工作流的重要入口。

- [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) — thinkingmachines · 点赞 336 · 下载 25,340  
  Thinking Machines 的小规模多模态模型，面向图文理解与对话任务。

- [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — Audio8 · 点赞 307 · 下载 12,633  
  Audio8 的 0.6B TTS 预览模型，基于 ArkTTS 架构，是本周热门语音合成方向之一。

- [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) — microsoft · 点赞 302 · 下载 456,140  
  微软开源的视觉-语言多模态模型，45 万下载，适合图文理解和视觉问答。

- [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) — nvidia · 点赞 228 · 下载 359  
  NVIDIA 的 11B 语音对话模型，聚焦语音交互与 LLM 结合，是音频入口的新探索。

- [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) — lodestones · 点赞 221 · 下载 0  
  Kroma：面向 Krea 2 的 LoRA 风格模型，专注文本到图像生成，0 下载但获得社区点赞。

- [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) — lightx2v · 点赞 133 · 下载 0  
  MiniMax-H3-Turbo 的 Diffusers 风格版本，支持 t2v/i2v/r2v 多种视频生成输入。

- [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) — Kijai · 点赞 122 · 下载 0  
  Kijai 为 ComfyUI 提供的 MiniMax-H3 集成版，方便在节点工作流中使用。

- [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) — Kijai · 点赞 106 · 下载 0  
  Kijai 的 MiniMax-H3 实验版本，代表 ComfyUI 生态的快速迭代与玩法探索。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — baidu · 点赞 3,954 · 下载 2,836,694  
  百度开源的 OCR 模型，下载量近 284 万，是文档解析与多模态 OCR 场景的高热度选择。

- [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) — Kwaipilot · 点赞 532 · 下载 17,399  
  KAT-Coder V2.5 开发者版：基于 Qwen3.5-MoE 的代码生成模型，也支持多模态代码理解。

- [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) — mistralai · 点赞 184 · 下载 2,480  
  Mistral 的 3B 安全护盾/审查模型，面向生成内容过滤，可与 vLLM 部署配合。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — DavidAU · 点赞 1,709 · 下载 2,217,339  
  Qwen3.6-27B 的社区 GGUF 微调版，长文件名体现极致自定义，下载量超过 220 万。

- [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — unsloth · 点赞 588 · 下载 161,253  
  Unsloth 出品的 DeepSeek-V4-Flash GGUF 量化，面向本地推理与内存优化。

- [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) — LuffyTheFox · 点赞 425 · 下载 332,992  
  Qwen3.6-35B-A3B 的 Hermes/uncensored 微调 GGUF，MoE 架构适合本地部署。

- [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) — larryvrh · 点赞 420 · 下载 0  
  MiniMax-H3-Turbo 的 LoRA 适配器，探索文本到视频、音频/视频联合生成。

- [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) — ethanfel · 点赞 381 · 下载 0  
  面向 ComfyUI 的 Qwen3-VL-32B INT8/ConvRot 变体，常作为 MiniMax-H3 的文本编码器替代。

- [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) — drbaph · 点赞 178 · 下载 0  
  与上一条同源的 MiniMax-H3-Turbo LoRA，已封装为 ComfyUI 可直接加载的适配器。

- [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) — realrebelai · 点赞 168 · 下载 87,870  
  MiniMax-H3 的 GGUF 量化包，降低视频模型本地部署的显存压力。

- [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) — LiquidAI · 点赞 145 · 下载 31,489  
  LFM2.5-2.6B 的官方 GGUF 版本，配合 llama.cpp 在本地高效运行。

- [Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot](https://huggingface.co/Abiray/Minimax-H3-nvfp4-INT4-INT8-Convrot) — Abiray · 点赞 128 · 下载 452,420  
  MiniMax-H3 的 NVFP4/INT4/INT8 混合量化版，在显存与生成质量之间寻找实用平衡。

- [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) — sakamakismile · 点赞 121 · 下载 0  
  Qwen3-VL-32B 作为 MiniMax-H3 文本编码器的 NVFP4 量化组合，适配 ComfyUI。

- [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) — SexGod1979 · 点赞 113 · 下载 0  
  MiniMax-H3 的社区微调视频生成变体，反映长尾/风格化创作方向。

## 生态信号

MiniMax-H3 是本周最明显的生态引擎：官方模型、ComfyUI 单文件、Turbo/LoRA、GGUF/NVFP4/INT8 量化形成完整工具链，视频生成正从模型发布走向可复现工作流。语言模型方面，DeepSeek-V4-Flash、GLM-5.2、Kimi-K3 等开源权重均获得高热度，闭源模型未进入榜单；社区大量围绕 Qwen3.x 与 MiniMax-H3 做微调。GGUF/INT8 等量化活动密集，说明本地化部署和二次创作已成为开源模型社区的核心诉求。

## 值得探索

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 本周点赞最高的多模态模型，兼具理解与生成能力，适合作为多模态 Agent 或视觉问答基座。
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 视频生成热潮的核心模型，与 Comfy-Org 单文件、GGUF 量化版本配合，可快速搭建本地视频生成实验。
- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — 下载量超 240 万的开源 MoE 对话模型，是研究中文/多语言 LLM 与混合专家架构的重要样本。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*