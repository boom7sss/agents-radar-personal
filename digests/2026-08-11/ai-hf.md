# Hugging Face 热门模型日报 2026-08-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-11 02:08 UTC

---

# Hugging Face 热门模型日报（2026-08-11）

## 今日速览

- **MiniMax-H3 视频生成模型成为绝对焦点**：11 个相关条目上榜，占榜单 1/3 以上，已形成“官方权重 → ComfyUI 适配 → LoRA 微调 → GGUF 量化”的完整生态链。
- **DeepSeek-V4-Flash-0731 与 Kimi-K3 双雄领跑对话模型**：分别拿下 95 万和 151 万下载量，开源 LLM 热度持续攀升。
- **Meta 发布 Muse-Glimmer-30B 多模态模型**：官方原版与 GGUF 量化版同步上架，大厂开始默认支持本地部署。
- **百度 Unlimited-OCR 下载 292 万**：仅次于 Comfy-Org 版 MiniMax-H3，是榜单上下载量最高的专用模型，OCR 工具化需求十分强劲。
- **Qwen 社区生态活跃**：Heretic、BigBang、Mach-1 等衍生模型达 5 个，跨模型组件复用（如 Qwen3-VL 视觉编码器 + MiniMax-H3）成为社区新玩法。

## 热门模型

### 🧠 语言模型

- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — 作者: deepseek-ai · 点赞: 3,063 · 下载: 954,441 — 新一代 V4 对话模型，延续 DeepSeek 在开源社区的高人气。

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 作者: moonshotai · 点赞: 10,472 · 下载: 1,510,032 — 月之暗面开源多模态对话模型，点赞位列全榜第二，社区号召力尽显。

- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — 作者: LiquidAI · 点赞: 490 · 下载: 89,680 — 2.6B 高效小参数 LLM，面向端侧与低资源部署场景。

- [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) — 作者: deepgrove · 点赞: 312 · 下载: 1,344 — MoE 架构文本生成预览模型，值得关注的社区新面孔。

- [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) — 作者: inclusionAI · 点赞: 288 · 下载: 5,261 — 采用混合架构的快速对话模型，主打低延迟推理。

- [endless-frontier/BigBang-v1](https://huggingface.co/endless-frontier/BigBang-v1) — 作者: endless-frontier · 点赞: 153 · 下载: 617 — 基于 Qwen3.5 MoE 的社区微调多模态对话模型，Qwen 衍生态的代表。

- [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) — 作者: meta-models · 点赞: 754 · 下载: 0 — Meta 最新的 30B 多模态对话模型，支持图像+文本输入，发布即上榜。

- [SyzygyResearch/Mach-1-Additive-35B](https://huggingface.co/SyzygyResearch/Mach-1-Additive-35B) — 作者: SyzygyResearch · 点赞: 116 · 下载: 2,129 — 基于 Qwen3.5 MoE 的 35B 模型，探索三值/加法型权重压缩路线。

### 🎨 多模态与生成

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 作者: MiniMaxAI · 点赞: 3,437 · 下载: 47,468 — 支持图像+文本到视频的生成模型，是本周 MiniMax-H3 生态的源头模型。

- [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo) — 作者: lightx2v · 点赞: 261 · 下载: 15,087 — 社区加速版 MiniMax-H3，针对图像/视频到视频的推理效率优化。

- [black-forest-labs/FLUX.1-dev](https://huggingface.co/black-forest-labs/FLUX.1-dev) — 作者: black-forest-labs · 点赞: 14,077 · 下载: 480,762 — 开源文生图标杆模型，本周点赞数全榜第一，生态地位稳固。

- [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — 作者: Audio8 · 点赞: 338 · 下载: 13,432 — 0.6B 轻量级 TTS 语音合成预览模型，音频生成赛道的新尝试。

### 🔧 专用模型

- [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) — 作者: nvidia · 点赞: 299 · 下载: 597 — 英伟达推出的语音对话模型，面向实时语音交互场景。

- [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) — 作者: mistralai · 点赞: 222 · 下载: 6,343 — Mistral 轻量级安全审核模型，用于内容过滤与安全对齐。

- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — 作者: baidu · 点赞: 4,002 · 下载: 2,921,751 — 百度开源的 OCR 模型，下载量全榜第二，文本识别落地需求极强。

### 📦 微调与量化

- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — 作者: Comfy-Org · 点赞: 1,149 · 下载: 6,009,639 — ComfyUI 单文件适配版，是当前视频生成用户的主要入口。

- [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) — 作者: larryvrh · 点赞: 601 · 下载: 0 — 让 MiniMax-H3 支持文本+音频到视频的 LoRA 扩展。

- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — 作者: DavidAU · 点赞: 1,862 · 下载: 2,439,083 — Qwen3.6-27B 的社区微调 + GGUF 量化版，下载量达 243 万。

- [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) — 作者: ethanfel · 点赞: 440 · 下载: 0 — 将 Qwen3-VL 视觉能力与 MiniMax-H3 结合的 ComfyUI 集成实验，INT8 量化。

- [Kijai/MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) — 作者: Kijai · 点赞: 258 · 下载: 0 — Kijai 为 MiniMax-H3 打造的 ComfyUI 工作流实现，社区热门参考。

- [drbaph/MiniMax-H3-Turbo-Lora-ComfyUI](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI) — 作者: drbaph · 点赞: 251 · 下载: 0 — MiniMax-H3 Turbo LoRA 的 ComfyUI 整合版，简化本地使用流程。

- [SexGod1979/PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) — 作者: SexGod1979 · 点赞: 251 · 下载: 0 — 社区风格微调版 MiniMax-H3，体现开放生态下的个性化衍生。

- [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) — 作者: unsloth · 点赞: 217 · 下载: 0 — unsloth 为 Muse-Glimmer-30B 提供的 GGUF 量化版，方便本地部署。

- [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — 作者: unsloth · 点赞: 638 · 下载: 199,167 — DeepSeek-V4-Flash 的 GGUF 量化版，本地运行 V4 的首选之一。

- [LiquidAI/LFM2.5-2.6B-GGUF](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF) — 作者: LiquidAI · 点赞: 186 · 下载: 89,611 — 官方 GGUF 量化版，配合 llama.cpp 生态使用。

- [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) — 作者: Kijai · 点赞: 184 · 下载: 0 — Kijai 的实验性分支，探索 MiniMax-H3 的新特性与新玩法。

- [meta-models/Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) — 作者: meta-models · 点赞: 154 · 下载: 0 — Meta 官方 GGUF 量化版，进一步降低多模态模型部署门槛。

- [sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4](https://huggingface.co/sakamakismile/Qwen3-VL-32B-Heretic-MiniMax-H3-NVFP4) — 作者: sakamakismile · 点赞: 152 · 下载: 0 — 面向英伟达 GPU 的 NVFP4 量化版，与 Heretic 系列组合使用。

- [lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA) — 作者: lightx2v · 点赞: 117 · 下载: 268 — 专门优化视频生成提示词的 LoRA，可提升出片质量。

- [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) — 作者: realrebelai · 点赞: 193 · 下载: 174,862 — MiniMax-H3 的社区 GGUF 量化集合，下载量超过 17 万。

## 生态信号

**MiniMax-H3 是本周最强势的模型家族**，11 个条目上榜，涵盖原版、ComfyUI 适配、LoRA、GGUF、提示词优化等完整工具链；Qwen 系（含 Heretic、BigBang、Mach-1）有 5 个模型上榜，是衍生生态最丰富的开放家族；DeepSeek V4 与 Muse-Glimmer 均以“原版 + GGUF”双条目形式出现。**开源权重仍是绝对主流**，发布后 2~3 天内即有量化版本，社区再分发效率极高。量化与微调活动覆盖 GGUF、INT8、NVFP4 等多精度格式，unsloth、Comfy-Org、Kijai、lightx2v 等角色成为生态关键节点。

## 值得探索

1. **MiniMax-H3 生态** —— 视频生成是当前多模态最热赛道，从 [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) 到多个 LoRA/GGUF 变体，可快速搭建本地视频创作流程，推荐优先体验。
2. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** —— 周点赞 10,472、下载 151 万，是国产开源多模态对话模型中最具影响力的候选，值得纳入中文与长上下文能力评测。
3. **[meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** —— Meta 最新开源的多模态模型，原版与官方 GGUF 同步上架，适合作为多模态对话系统的研究基线与本地部署实验对象。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*