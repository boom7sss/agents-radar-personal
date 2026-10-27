# Hugging Face 热门模型日报 2026-08-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-20 10:58 UTC

---

# 🤖 Hugging Face 热门模型日报（2026-08-20）

## 📌 今日速览

本周 Hugging Face 生态由 **Qwen3.8 系列** 主导，27B 多模态模型以压倒性优势登顶热度榜，并催生了大量社区微调（abliterated/uncensored）与量化（GGUF/FP8/NVFP4/MLX）衍生版本。同时 **MiniMax 在视频与音乐双领域发力**，其 H3 视频模型下载量突破 1500 万次，堪称本周下载王。**DeepSeek-V4** 家族（Pro 与 Flash 型号）保持强势增长，其中 Flash 型号以 254 万周下载量证明其实用价值。值得关注的是 **Kimi-K3**（10,870 赞）异军突起，以压缩张量技术切入多模态赛道。此外，视频生成赛道竞争白热化，LTX-2.5、MiniMax-H3 及其社区 Turbo 衍生版纷纷上榜。

---

## 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 662 | 43,287 | DeepSeek 新一代旗舰对话模型，延续 V4 系列的高质量文本生成能力，是闭源最强竞品的开源回应。 |
| [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,564 | 2,547,549 | V4 系列轻量版，以更快的推理速度和更低的资源占用成为开发者首选，254 万周下载印证其普及度。 |
| [**Qwen/Qwen3.8-2.4T-A95B**](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 1,112 | 14,592 | Qwen3.8 系列 MoE 变体（2.4T 总参数 / 95B 激活），主打高性价比的稀疏计算路线。 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,870 | 2,349,853 | 月之暗面全新多模态对话模型，采用压缩张量技术，10,870 赞证明社区期待值极高。 |
| [**dots-studio/dots3-note-prev**](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 238 | 1,373 | dots3 系列的预览版本，主打笔记场景的文本生成，属于早期社区尝鲜模型。 |

---

## 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 11,610 | 1,373,584 | 本周人气王（11,610 赞），Qwen3.8 旗舰多模态模型（image-text-to-text），同时支持视觉对话与文本生成双任务。 |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,203 | 3,308,673 | 支持文本/图像双驱动视频生成，330 万周下载说明其已被大规模采用。 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,073 | 14,471 | MiniMax 旗下第三代号音乐生成模型（text-to-audio / 文本转音乐），创作领域新标杆。 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,360 | 611,825 | 全能视频生成模型，同时支持文生视频、图生视频、视频生视频（video-to-video），Lightricks 新一代 Video Diffusion 模型。 |
| [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,713 | 478,622 | Meta 阵营 30B 多模态对话模型，视觉语言任务表现亮眼，社区口碑持续攀升。 |
| [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo) | lightx2v | 640 | 380,072 | H3 的 Turbo 加速版：支持文生视频/图生视频/参考视频（r2v）三种模式。 |
| [**TenStrip/10Eros-Max**](https://huggingface.co/TenStrip/10Eros-Max) | TenStrip | 293 | 0 | 基于 MiniMax-H3 的社区微调版本，面向特定风格视频生成，模型描述未完全公开。 |
| [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3) | Comfy-Org | 1,455 | **15,721,667** | ComfyUI 官方适配版 H3，**1572 万次下载** 荣登本周总下载量冠军，是 ComfyUI 视频工作流的核心模型。 |

---

## 📦 微调与量化（社区微调、GGUF、量化）

| 模型 | 作者 | 点赞 | 下载 | 一句话说明 |
|------|------|------|------|-----------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,228 | **5,126,652** | unsloth 出品 Qwen3.8-27B GGUF 量化版，512 万下载量说明其为本地部署的默认选择。 |
| [**unsloth/Qwen3.8-27B-NVFP4**](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4) | unsloth | 300 | 831,483 | NVIDIA FP4 精度量化版，针对 RTX Blackwell 系列 GPU 深度优化。 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 616 | 1,517,643 | 官方 FP8 量化版，在精度损失极小前提下大幅降低显存需求。 |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 657 | 2,628 | Apple Silicon 专用 MLX 版本，消除安全对齐限制（abliterated）。 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 645 | 76,109 | 去审查版 FP8 量化，兼顾显存效率与自由对话能力。 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 215 | 52,382 | GGUF 格式的去审查版本，便于 llama.cpp 等本地推理框架加载。 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 489 | 979,768 | 社区知名 uncensored 分支，支持 MTP 并行解码加速的 GGUF 封装。 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,317 | 0 | 修复 Qwen 系模型的 Jinja 对话模板，提升 MLX 等框架兼容性。 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 329 | 268,258 | 整合"激进 MTP"优化的 GGUF 封装，对多模态推理速度有额外加成。 |
| [**empero-ai/Qwen3.8-27B-Ridge-GGUF**](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 215 | 55,074 | llama.cpp 生态的 GGUF 变体，旨在降低量化后多模态性能衰减。 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 189 | 187,008 | huihui-ai 定制 abliterated（去对齐）GGUF 版本，融合 transformers 与 GGUF 双格式。 |
| [**Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF**](https://huggingface.co/Blackfrost-AI/Qwen3.8-27B-ABLITERATED-GGUF) | Blackfrost-AI | 178 | 186,470 | 标注为 dense 架构的 abliterated GGUF 分支，适配本地 CPU/GPU 混合推理。 |
| [**0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF**](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 178 | 326,638 | "Heretic" 风格强化版去审查模型，面向追求极致自由度的文本生成场景。 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 179 | 10,540 | 非量化原始权重版 abliterated 模型，为开发者提供完整的微调基础。 |
| [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,175 | 3,001,999 | 基于 Qwen3.6 的重度社区魔改版，集成"Fable Fusion"与 MTP 加速，**300 万下载** 说明其稳定性极佳。 |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 162 | 1,713 | 基于 Qwen3.5 MoE 架构改进的 35B-A3B 稀疏激活模型，主打轻量高效对话。 |
| [**Comfy-Org/MiniMax-Music-3**](https://huggingface.co/Comfy-Org/MiniMax-Music-3) | Comfy-Org | 202 | 418,785 | ComfyUI 适配 MiniMax-Music3 的单文件版本，将音乐生成无缝接入 ComfyUI 工作流，Apache-2.0 协议。 |

---

## 🔧 专用模型（代码、数学、医疗、嵌入等）

> ⚠️ 本次 Top 30 榜单中暂无纯代码/数学/医疗/嵌入类专用模型上榜。榜单焦点集中在多模态、视频生成与量化部署领域。建议关注榜单外的垂直领域发布。

> 💡 *补充说明：本榜单中 orcarouter/Qwen3.8-27B-Uncensored-MLX、froggeric/Qwen-Fixed-Chat-Templates 等 MLX/Jinja 相关模型，虽不属典型专用模型，但已归入 "微调与量化" 分类进行说明。*

---

## 🌐 生态信号分析（100~200 字）

**Qwen3.8 生态已形成完整闭环**：从官方旗舰（11,610 赞）到 FP8/NVFP4 官方量化，再到 unsloth GGUF（512 万下载）以及至少 9 个社区去审查（abliterated）分支，围绕单一基座模型的二次开发密度达到新高度。**开源权重策略占据绝对主导**，Kimi-K3 与 DeepSeek-V4 的加入更使开源阵营形成"三足鼎立"格局。**视频生成和音乐生成成为新一轮必争之地**：MiniMax 通过 H3 与 Music3 双点突破，LTX-2.5 提供全能视频方案，而 ComfyUI 对 H3 的适配（1572 万下载）表明"AI 视频 + 节点化工作流"已成为刚需。量化活动集中在 **GGUF（CPU 友好）与 FP8/NVFP4（GPU 显存优化）双线并进**，暗示本地部署需求正从"能跑"升级到"跑得快且省显存"。

---

## 🔭 值得探索

1. **moonshotai/Kimi-K3**（[链接](https://huggingface.co/moonshotai/Kimi-K3)）— 10,870 赞 / 235 万下载，压缩张量 + 多模态对话的组合可能代表下一代高效架构方向，是理解 Kimi 技术路线的关键样本。

2. **Qwen/Qwen3.8-2.4T-A95B**（[链接](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)）— 仅 14,592 次下载，MoE 版本尚未被社区充分挖掘。相比 27B Dense 版，它在长上下文与复杂推理上存在明显潜力，值得先行研究。

3. **MiniMaxAI/MiniMax-Music3**（[链接](https://huggingface.co/MiniMaxAI/MiniMax-Music3)）— 文本到音乐的赛道刚起步，基于 Diffusers 架构的 14K 下载量表示其仍处早期红利期，探索将 AI 音乐生成接入 UGC 内容工作流是差异化方向。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*