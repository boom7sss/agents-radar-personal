# Hugging Face 热门模型日报 2026-08-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-18 10:57 UTC

---

# 🤖 Hugging Face 热门模型日报

**日期：2026-08-18**


## 今日速览

本周 Hugging Face 生态呈现三强并立格局：Qwen 3.8 系列以巨大优势领跑文本与多模态赛道，Moonshot 的 Kimi-K3 以压缩权重方案成为最大黑马，而 MiniMax-H3 的视频生成能力则催生了活跃的社区微调生态。量化与社区微调占据榜单半壁江山，FP8、GGUF、NVFP4 等格式版本获得海量下载，其中以 Qwen 系列和 MiniMax 视频模型的衍生版本最为活跃。值得关注的是，开源大模型（27B~30B 级别，最高达 2.4T 总参数量 MoE）正在快速逼近闭源性能，多模态融合（视频+音频、图像+文本）成为新的竞争焦点。


## 🧠 语言模型（LLM、对话模型、指令微调）

**1. [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 10,928 | ⬇️ 665,513
本周趋势榜榜首，Qwen 3.8 旗舰级多模态对话模型，27B 参数规模，发布即登顶。

**2. [Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — Qwen | 👍 1,049 | ⬇️ 11,212
Qwen 3.8 系列超大 MoE 版本，总参数量 2.4T，激活 95B，纯文本生成任务旗舰。

**3. [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — moonshotai | 👍 10,816 | ⬇️ 2,226,898
月之暗面新一代多模态模型，采用压缩张量技术，以超高点赞量位列黑马。

**4. [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — deepseek-ai | 👍 3,513 | ⬇️ 2,123,462
DeepSeek V4 快闪版本，发布于 7 月 31 日，凭借高效推理获得大量下载。

**5. [deepseek-ai/DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813)** — deepseek-ai | 👍 585 | ⬇️ 30,985
DeepSeek V4 专业版，8 月 13 日发布，面向更高性能需求的文本生成场景。

**6. [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)** — nvidia | 👍 315 | ⬇️ 269,372
英伟达 Nemotron 3.5 闪电版，30B 总参数仅激活 3B，NVFP4 量化格式。

**7. [nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16)** — nvidia | 👍 173 | ⬇️ 78,254
Nemotron 3.5 闪电版 BF16 全精度版本，为无需量化的部署场景提供选择。

**8. [inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny)** — inclusionAI | 👍 313 | ⬇️ 9,990
聆心智能 Ling 3.0 小尺寸版本，主打高效对话能力。


## 🎨 多模态与生成（图像、视频、音频、文本到X）

**1. [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 1,163 | ⬇️ 503,632
Lightricks 图像转视频生成模型，支持图生视频、文生视频、视频转视频全面能力。

**2. [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 👍 4,107 | ⬇️ 2,855,539
MiniMax 第三代视频生成模型，图文转视频，下载量近 300 万，社区生态活跃。

**3. [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMaxAI | 👍 925 | ⬇️ 11,745
MiniMax 音乐生成模型第三代，文本生成音乐。

**4. [lightx2v/Minimax-h3-Turbo](https://huggingface.co/lightx2v/Minimax-h3-Turbo)** — lightx2v | 👍 596 | ⬇️ 300,279
MiniMax-H3 加速版，支持图生视频、文生视频、参考图生视频。

**5. [meta-models/Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B)** — meta-models | 👍 1,670 | ⬇️ 384,097
Meta 新一代多模态模型，30B 参数量，图文对话能力。

**6. [Gazingstars123/Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B)** — Gazingstars123 | 👍 240 | ⬇️ 24,893
2.9B 轻量级文生图模型，支持 ComfyUI，单文件格式易于部署。

**7. [LiquidAI/LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B)** — LiquidAI | 👍 166 | ⬇️ 9,101
Liquid AI 视觉语言模型 2.5 代，3B 小参数多模态方案。

**8. [TenStrip/10Eros-Max](https://huggingface.co/TenStrip/10Eros-Max)** — TenStrip | 👍 250 | ⬇️ 0
基于 MiniMax-H3 的社区微调视频模型。关注度见涨，下载量暂为0。

**9. [larryvrh/MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)** — larryvrh | 👍 792 | ⬇️ 0
MiniMax-H3 Turbo 的 LoRA 适配器，支持文生视频和音视频生成，亮点：点赞近800但零下载。


## 🔧 专用模型（代码、数学、医疗、嵌入）

**本周榜中未见典型的专用模型（代码/数学/医疗/嵌入），榜单全部由通用对话、多模态生成、视频与音频模型占据。**


## 📦 微调与量化（社区微调、GGUF、AWQ）

**1. [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 👍 1,725 | ⬇️ 3,561,466
Qwen 3.8 旗舰的 GGUF 量化版，356 万下载量高居量化模型之首。

**2. [Qwen/Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8)** — Qwen | 👍 547 | ⬇️ 741,011
官方 FP8 量化版本，在精度与效率间取得平衡。

**3. [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** — orcarouter | 👍 477 | ⬇️ 45,465
Qwen 的 abliterated 去审查 FP8 量化版。

**4. [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** — JonathanColetti | 👍 365 | ⬇️ 558,767
Qwen 3.8 去审查 GGUF 版，支持 llama.cpp，含 MTP 优化。

**5. [unsloth/Qwen3.8-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.8-27B-NVFP4)** — unsloth | 👍 252 | ⬇️ 523,919
NVFP4 格式量化版，适配英伟达最新硬件。

**6. [Qwen/Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8)** — Qwen | 👍 221 | ⬇️ 13,344
2.4T 超大 MoE 的 FP8 量化版本，降低部署门槛。

**7. [unsloth/Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)** — unsloth | 👍 474 | ⬇️ 787,276
Meta Muse-Glimmer 30B 的 GGUF 量化版，近 80 万下载。

**8. [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — DavidAU | 👍 2,127 | ⬇️ 3,020,528
社区深度微调版 Qwen（Fable Fusion），GGUF 格式，302 万下载量证明社区微调需求强劲。

**9. [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — Comfy-Org | 👍 1,413 | ⬇️ 14,641,908
ComfyUI 适配的 MiniMax-H3 单文件版本，**全榜最高下载量 1464 万**。

**10. [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3)** — Comfy-Org | 👍 167 | ⬇️ 285,444
ComfyUI 适配的 MiniMax Music 3 版本。

**11. [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 👍 1,229 | ⬇️ 0
Qwen 3.5 聊天模板修复包（Jinja 格式），解决社区痛点，点赞 1229，专注于模板修复。

**12. [fal/MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)** — fal | 👍 252 | ⬇️ 20,600
fal 为 MiniMax-H3 推出的人物写实风格 LoRA。

**13. [dots-studio/dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev)** — dots-studio | 👍 214 | ⬇️ 1,120
dots3 预览版模型。


## 🌐 生态信号

**Qwen 家族主导地位难以撼动。** 本榜前 11 名中 Qwen 相关模型占据 6 席，从旗舰多模态（27B）到超大 MoE（2.4T），官方与社区量化版本全面开花，形成了完整生态矩阵。

**视频生成成为最活跃的新战场。** MiniMax-H3 及其衍生模型（Turbo、LoRA、ComfyUI 版）合计高达 5 个上榜，其中 Comfy-Org 版下载量突破 1464 万，是本周下载量最高的模型。fal 等平台级玩家也开始为视频模型提供 LoRA，暗示视频生成正走向"基建+微调"的平台化。

**量化格式加速收敛：GGUF 与 FP8 成为主流，NVFP4 开始渗透。** NVIDIA 在 KV Cache 和训练框架的布局，有望让 FP4/FP8 成为下一代低成本推理标准。unsloth 始终保持最活跃的量化团队身份，几乎为每个热门模型提供即时量化版。

**两个值得关注的长期信号：** ① Kimi-K3 采用压缩张量技术（compressed-tensors），暗示稀疏化/压缩正在成为新方向；② 30B 级"小而精"模型（Muse-Glimmer、Nemotron-Lightning）扎堆发布，标志着开源社区正在"小模型、大能力"路线上加速追赶闭源。


## 🔭 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 月之暗面的压缩张量多模态方案，与 Qwen 形成差异化技术路线，值得研究其压缩架构与性能表现。

2. **[Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)** — 超大 MoE 旗舰，总参数量 2.4T 而仅激活 95B。若 FP8 版本可用，这是当前开源生态中"超大模型、可控成本"的代表，值得认真测试。

3. **[MiniMax-H3（Comfy-Org 版）](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 1464 万下载量，社区热度近乎疯狂，配套 Turbo、LoRA 和 ComfyUI 生态已初具规模，想入局视频生成生态，需要关注这个模型。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*