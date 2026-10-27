# Hugging Face 热门模型日报 2026-08-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-17 01:41 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-17

## 今日速览

本期榜单由 Qwen 与 Kimi 两大国产旗舰强势领跑：**Qwen3.8-27B**（周赞破万）与 **moonshotai/Kimi-K3**（周赞 10,768）成为社区焦点。多模态视频生成持续升温，**MiniMax-H3** 系列全面开花，官方权重、社区 GGUF 与 ComfyUI 版本均入榜。DeepSeek 发布 V4-Pro 与 V4-Flash 双版本，延续其在推理效率上的布局。量化生态活跃，Unsloth 主导 GGUF 量化分发，同时 **NVIDIA Nemotron 3.5 系 MoE** 与 **LiquidAI LFM2.5** 等新架构模型值得关注。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 数据 | 一句话说明 |
|------|------|------|-----------|
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 👍 10,768 / ⬇ 2,136,775 | 月之暗面新一代多模态模型，周赞最高、下载超两百万，采用压缩张量技术。 |
| [**Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 👍 1,012 / ⬇ 7,932 | Qwen 3.5 系列 2.4T 总参/95B 激活参数的 MoE 文本模型，旗舰级稀疏架构。 |
| [**Qwen3.8-2.4T-A95B-FP8**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 👍 210 / ⬇ 11,311 | 2.4T MoE 的 FP8 量化版，降低部署门槛。 |
| [**DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 👍 536 / ⬇ 21,873 | V4 系列 Pro 版，0813 迭代，主打对话与长文本生成。 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 👍 3,462 / ⬇ 1,872,232 | V4 轻量快速版，周赞与下载均极高，社区采用活跃。 |
| [**NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 👍 291 / ⬇ 196,326 | NVIDIA 30B 总参/3B 激活 MoE，NVFP4 量化高效推理。 |
| [**NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 👍 160 / ⬇ 66,253 | 同上架构的 BF16 全精度版本。 |
| [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 👍 647 / ⬇ 141,009 | 液体 AI 2.6B 小而强文本模型，轻量高效备受关注。 |
| [**inclusionAI/Ling-3.0-tiny**](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 👍 285 / ⬇ 5,727 | 百凌混合架构小模型，MIT 许可，区域标注美国。 |
| [**dots-studio/dots3-note-prev**](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 👍 186 / ⬇ 393 | 多模态小型模型预览版，尚在早期探索阶段。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 数据 | 一句话说明 |
|------|------|------|-----------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 👍 10,295 / ⬇ 267,725 | 本期最强多模态模型，Qwen3.5 架构图/文/语音全能，周赞破万。 |
| [**Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 👍 1,632 / ⬇ 292,973 | Meta 系 30B 多模态对话模型，社区关注度高。 |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 👍 4,031 / ⬇ 2,307,541 | MiniMax 视频生成旗舰，支持文本/图像转视频，下载超两百三十万。 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 👍 844 / ⬇ 8,639 | 音乐生成第三代模型，文本直接生成音乐。 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 👍 1,030 / ⬇ 424,099 | 全能视频生成模型，支持图像/文本/视频间相互转换。 |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 👍 560 / ⬇ 239,206 | H3 高效 Turbo 变体，主打图像/文本/参考图到视频。 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 👍 1,389 / ⬇ 13,406,892 | ComfyUI 官方集成版 H3，下载量惊人超一千三百万。 |
| [**fal/MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 👍 229 / ⬇ 16,103 | 面向写实人物视频生成的 H3 LoRA 插件。 |
| [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 👍 776 / ⬇ 0 | 社区 H3-Turbo LoRA，支持图文音视频，新发布暂无下载。 |
| [**Gazingstars123/Anima-2.9B**](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 👍 223 / ⬇ 20,860 | 单文件动漫风格文生图模型，适配 ComfyUI。 |
| [**Comfy-Org/MiniMax-Music-3**](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 👍 153 / ⬇ 0 | ComfyUI 版音乐生成模型，Apache-2.0 许可新发布。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

本期趋势榜中未出现显著的代码、数学、医疗或嵌入专用模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 数据 | 一句话说明 |
|------|------|------|-----------|
| [**Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 👍 1,463 / ⬇ 1,945,635 | Qwen3.8 官方 GGUF 量化，下载近两百万，生态主力。 |
| [**Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 👍 485 / ⬇ 352,971 | 官方 FP8 量化版，部署效率更高。 |
| [**Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 👍 458 / ⬇ 718,178 | Glimmer 30B 的 Unsloth GGUF 量化版。 |
| [**Muse-Glimmer-30B-GGUF**](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 👍 298 / ⬇ 357,877 | 官方再打包 GGUF 版，标注两篇 arXiv 论文。 |
| [**Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 👍 347 / ⬇ 4,285 | 去审查 FP8 社区版（abliterated 技术）。 |
| [**Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 👍 2,096 / ⬇ 3,020,070 | 社区大规模融合微调 GGUF，周赞超两千、下载超三百万。 |
| [**Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 👍 215 / ⬇ 183,988 | 去审查 GGUF 版，支持 MTP，适配 llama.cpp。 |
| [**Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 👍 202 / ⬇ 276,269 | Unsloth NVFP4 量化，适配 NVIDIA 新硬件。 |
| [**MiniMax-H3-GGUF**](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 👍 175 / ⬇ 204,344 | H3 视频模型的 GGUF 量化版，支持 stable-diffusion.cpp。 |

---

## 生态信号

**模型家族格局**：Qwen3.8 与 MiniMax-H3 形成双核驱动——Qwen 在语言/多模态通用能力上领跑并带火全套量化生态，MiniMax 则凭借视频生成霸榜多模态赛道。DeepSeek V4 双版本与 Kimi-K3 紧随其后，国产开源梯队优势明显。

**量化与微调**：Unsloth 是量化分发核心枢纽；GGUF（尤其 Qwen 系）与 NVFP4 并行发展，反映本地部署与 NVIDIA 新硬件的双路径需求。社区“Uncensored”微调持续繁荣，说明用户对模型自由度有稳定需求。

**开源趋势**：榜单几乎全为开源权重，商业化公司（NVIDIA、Meta）也在积极拥抱开放生态；ComfyUI 官方集成版本下载量巨大，证明**工具链适配**是模型爆发的关键放大器。

---

## 值得探索

1. [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) — 周赞与下载双料冠军，压缩张量技术路线独特，值得深入评测其多模态能力与推理效率。

2. [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)（及 Comfy-Org 版）— 视频生成生态最完整，配套 LoRA、Turbo、GGUF 齐全，是创作者和研究者的首选平台。

3. [**Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) — MoE 稀疏架构旗舰，FP8 量化版已发布，代表超大模型高效部署的前沿方向。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*