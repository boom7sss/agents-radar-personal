# Hugging Face 热门模型日报 2026-08-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-14 02:26 UTC

---

# Hugging Face 热门模型日报 — 2026-08-14

## 今日速览

本周 Hugging Face 热榜呈现“视频生成 + 高效权重”双主线。MiniMax-H3 成为最大生态：官方模型、ComfyUI 封装、Turbo/LoRA/GGUF 大量衍生，其中 Comfy-Org 版本下载量已破千万。语言模型侧，Qwen3.8-2.4T-A95B、DeepSeek-V4 系列、NVIDIA Nemotron Lightning 等新 MoE 密集发布；Moonshot 的 Kimi-K3 以 10,624 周点赞登顶，并采用压缩张量技术。量化与微调同样活跃，GGUF、FP8、NVFP4 覆盖主要新模型，社区 LoRA 则集中在 MiniMax-H3 的视频生成工作流上。

## 热门模型

### 🧠 语言模型

- [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) — 作者：Qwen｜周点赞：795｜下载：1,012  
  Qwen 超大稀疏 MoE 文本模型，总参数 2.4T、激活 95B，代表新一代 MoE 规模探索。

- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — 作者：deepseek-ai｜周点赞：3,324｜下载：1,431,587  
  DeepSeek V4 的 Flash 高效版，下载量位居 LLM 前列，主打速度与实用部署平衡。

- [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) — 作者：deepseek-ai｜周点赞：308｜下载：0  
  DeepSeek V4 的 Pro 新版本，定位更高性能配置，刚发布待社区实测。

- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — 作者：LiquidAI｜周点赞：603｜下载：116,640  
  Liquid AI 的小参数文本生成模型，主打高效轻量，适合资源受限场景。

- [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) — 作者：nvidia｜周点赞：131｜下载：22,279  
  NVIDIA 的 30B MoE 模型，仅激活 3B 参数，BF16 精度，强调低成本推理。

- [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) — 作者：deepgrove｜周点赞：354｜下载：3,868  
  新发布的 MoE 文本生成模型，预览版引发社区关注。

### 🎨 多模态与生成

- [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) — 作者：meta-models｜周点赞：1,427｜下载：121,042  
  支持图文输入的对话模型，官方版带动后续 GGUF 量化生态。

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 作者：MiniMaxAI｜周点赞：3,831｜下载：1,605,940  
  MiniMax 官方视频生成模型，支持文本到视频、图像到视频，是本周热度核心。

- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) — 作者：Lightricks｜周点赞：729｜下载：57,287  
  多功能视频生成模型，支持图像/文本/视频到视频。

- [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) — 作者：MiniMaxAI｜周点赞：352｜下载：25  
  音乐生成模型，刚发布不久，代表文本到音频方向的新尝试。

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 作者：moonshotai｜周点赞：10,624｜下载：1,871,575  
  Kimi 新一代多模态模型，使用 compressed-tensors，是本周周点赞最高模型。

- [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) — 作者：lightx2v｜周点赞：462｜下载：91,455  
  社区优化的 MiniMax-H3 Turbo 版本，专注更快视频生成。

- [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) — 作者：endless-frontier｜周点赞：188｜下载：3,184  
  基于 Qwen3.5-MoE 的多模态对话模型，社区实验属性明显。

- [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) — 作者：Gazingstars123｜周点赞：133｜下载：0  
  轻量文生图扩散模型，支持 ComfyUI，适合本地图像生成。

### 🔧 专用模型

- [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) — 作者：inclusionAI｜周点赞：216｜下载：1,292  
  轻量混合架构模型，包含自定义代码实现，引人关注其小型化方案。

- [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) — 作者：nvidia｜周点赞：373｜下载：1,164  
  NVIDIA 的语音对话模型，面向实时语音交互场景。

### 📦 微调与量化

- [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) — 作者：unsloth｜周点赞：389｜下载：352,023  
  Muse-Glimmer-30B 的 GGUF 量化版，显著降低多模态模型本地部署门槛。

- [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) — 作者：meta-models｜周点赞：257｜下载：136,783  
  模型方追加的 GGUF 版，与 unsloth 版形成互补。

- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — 作者：Comfy-Org｜周点赞：1,291｜下载：10,365,210  
  ComfyUI 直接可用的 MiniMax-H3 封装版，下载量本周最高。

- [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) — 作者：Kijai｜周点赞：307｜下载：0  
  社区 ComfyUI 适配脚本，面向 MiniMax-H3 视频生成工作流。

- [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) — 作者：larryvrh｜周点赞：726｜下载：0  
  MiniMax-H3-Turbo 的 LoRA 版本，可在文生视频中调整风格。

- [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) — 作者：drbaph｜周点赞：314｜下载：0  
  将 Turbo LoRA 集成到 ComfyUI 的适配器版本，方便视频工作流直接调用。

- [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) — 作者：fal｜周点赞：159｜下载：4,692  
  增强写实人物效果的 MiniMax-H3 LoRA。

- [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) — 作者：lightx2v｜周点赞：149｜下载：652  
  用于改写提示词的 MiniMax-H3 LoRA，提升视频生成可控性。

- [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) — 作者：SexGod1979｜周点赞：298｜下载：324  
  社区微调的 MiniMax-H3 文生视频模型，主打特定风格化表现。

- [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) — 作者：Qwen｜周点赞：162｜下载：4,000  
  Qwen 大 MoE 的官方 FP8 量化版，为大规模推理节省显存。

- [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) — 作者：nvidia｜周点赞：230｜下载：44,859  
  Nemotron Lightning 的 NVFP4 量化版，针对低比特推理优化。

- [unsloth/MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) — 作者：unsloth｜周点赞：149｜下载：111,222  
  MiniMax-H3 的 GGUF 量化版，支持 stable-diffusion.cpp 等本地推理工具。

- [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) — 作者：ethanfel｜周点赞：483｜下载：0  
  Qwen3-VL 的社区魔改 + INT8 量化版，面向 ComfyUI 集成。

- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — 作者：DavidAU｜周点赞：1,989｜下载：2,793,115  
  社区高热度 GGUF 微调版，主打“uncesored”和角色/叙事风格。

## 生态信号

MiniMax-H3 是本周生态中心：官方视频模型、ComfyUI 打包、Turbo/LoRA/GGUF 衍生层极厚，Comfy-Org 下载超千万，说明视频生成正转向可复现、可定制的工作流。开源权重仍是主流，DeepSeek、Qwen、Moonshot、MiniMax 与 NVIDIA 均在官方仓库直接发布完整权重，随后由社区快速补齐 FP8/NVFP4/GGUF 量化。Kimi-K3 的 compressed-tensors 与 Muse-Glimmer 的 GGUF 也显示：多模态模型的下一个竞争点是压缩与端侧可部署性。

## 值得探索

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)：本周周点赞最高，压缩多模态架构非常值得实测。
- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)：下载量破千万，是快速体验视频生成工作流的核心入口。
- [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8)：若要部署超大 MoE，可优先观察 FP8 量化与 BF16 基座的性能差异。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*