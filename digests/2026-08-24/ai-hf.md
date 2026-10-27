# Hugging Face 热门模型日报 2026-08-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-24 11:03 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-08-24

---

## 今日速览

本周 Hugging Face 榜单被 **Qwen3.8-27B** 全面主导——不仅官方原版以 12,411 周点赞登顶，其衍生生态（GGUF 量化、Abliterated 去审查、FP8 压缩、MLX 转换等）更是占据榜单近半数席位，堪称现象级发布。**MiniMax** 与 **DeepSeek** 两大闭源厂商分别凭借视频生成模型 MiniMax-H3 和 DeepSeek-V4 系列强势上榜形成第二梯队。**Ornith-1.5** 系列（35B-A3B MoE 架构）作为新兴开源势力，其 MIT 许可和 9B/35B 双尺寸布局值得关注。此外，本周社区对 **聊天模板修复**（Qwen-Fixed-Chat-Templates、Qwen-Sharp-Chat-Templates）的关注度显著上升，反映生态正在走向精细化维护阶段。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,411 | 264 万 | 官方旗舰多模态对话模型（image-text-to-text），本周绝对焦点，下载量超 264 万次。 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,662 | 327 万 | DeepSeek V4 轻量版，以 327 万下载领跑语言模型类下载量。 |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 740 | 63,058 | V4 系列专业版，更新于 8 月 13 日，面向更强推理能力场景。 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,953 | 279 万 | 月之暗面旗舰多模态模型，周点赞第二，采用压缩张量技术（compressed-tensors），下载量近 280 万。 |
| [Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 374 | 60,294 | 基于 Qwen3.5 MoE 架构的 35B 参数激活 3B 模型，MIT 许可。 |
| [Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 189 | 83,192 | Ornith 系列小尺寸版本，同样 MIT 许可，主打轻量部署。 |
| [s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 219 | 2,976 | 基于 Qwen3 的迷你语音识别文本生成模型，标注 ASR 能力。 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,394 | 446 万 | 视频生成旗舰模型，支持文生视频/图生视频，本周下载量全榜第一（446 万）。 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,676 | 790,378 | 专业视频生成模型，覆盖 image-to-video、video-to-video 等多种任务。 |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,217 | 18,065 | 文本生成音乐模型，通过 diffusers 框架发布。 |

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

_本周榜单暂无独立代码/数学/医疗/嵌入专用模型上榜。如后续数据可补充。_

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|------|------|------|------|------|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,769 | 700 万 | unsloth 官方 GGUF 量化版，下载量突破 700 万，是最受欢迎的量化版本。 |
| [Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 992 | 57,947 | MLX 格式的去审查（abliterated）版本，针对 Apple Silicon 优化。 |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 663 | 312,627 | 经典 OBLITERATUS 去审查系列，同时支持 MLX/GGUF 多种格式。 |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,068 | 224,114 | FP8 精度压缩的去审查版，兼顾质量与显存效率。 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 661 | 146 万 | 支持 llama.cpp 的 GGUF 去审查版，附带 MTP 加速。 |
| [Qwen3.8-27B-Uncensored-HauhauCS-...](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 556 | 761,975 | 「激进」级去审查 GGUF，主打多模态视觉能力保留。 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 395 | 143,108 | orcarouter 同系列 GGUF 版本，补充覆盖。 |
| [Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 263 | 988,170 | Ornith MoE 模型的 GGUF 量化版，MIT 许可且兼容 endpoints。 |
| [Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 181 | 971,104 | 9B 版的 GGUF 量化，下载接近百万。 |
| [Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 313 | 114 万 | 知名社区量化专家 huihui-ai 的去审查 GGUF 版本。 |
| [Qwen3.8-27B-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 217 | 209,017 | 结合 GAIN Training 与 Cold-Fusion 技术的进阶微调 GGUF。 |
| [Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 211 | 50,763 | DFlash2 投机解码加速版，提升推理吞吐。 |
| [Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 169 | 85,034 | 另一团队的同名投机解码版本，社区并行探索。 |
| [Qwen3.8-27B-Heretic-...-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF) | 0bserverx | 252 | 654,805 | 「异端」级激进去审查版本，GGUF 格式。 |
| [Qwen3.8-27B-Ridge-GGUF](https://huggingface.co/empero-ai/Qwen3.8-27B-Ridge-GGUF) | empero-ai | 253 | 162,580 | llama.cpp 量化版，主打本地部署优化。 |
| [Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 674 | 300 万 | 官方 FP8 量化版，下载超 300 万。 |
| [Qwen3.8-27B-abliterated](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 266 | 27,316 | huihui-ai 非量化版去审查模型。 |
| [Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,437 | 0 | 修复 Qwen 聊天模板的 Jinja 文件合集，解决下游兼容问题。 |
| [Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 208 | 0 | 同类聊天模板修复项目，MLX 生态适配。 |
| [Minimax_h3_latent_Upscaler](https://huggingface.co/LBH-123-AI/Minimax_h3_latent_Upscaler) | LBH-123-AI | 172 | 0 | MiniMax-H3 视频模型的潜在空间增强器（Upscaler）。 |

---

## 生态信号

**Qwen3.8-27B 构建了完整衍生生态闭环**——从官方原版、FP8 官方量化，到 unsloth GGUF、多家社区的 Abliterated 去审查版、MLX 苹果生态适配、DFlash2 投机解码，再到聊天模板修复工具，说明一个模型家族一旦在能力和开放性上确立优势，社区会在数周内铺满所有细分场景。

**开源权重模型势头全面压制闭源**：本周 Top 30 中仅 DeepSeek-V4 和 MiniMax-H3 属"源码未公开"阵营，但即便是这两家也选择在 HF 开放权重下载。Qwen、Kimi、Ornith 均以开源可商用（或宽松许可）姿态占据主流生态位。

**量化/微调活动空前活跃**：GGUF 格式下载量普遍远超原版（unsloth 版达 700 万次 vs 原版 264 万次），说明本地部署已成为主流使用方式。Abliterated（去审查）成为社区最强驱动力之一，Top 30 中至少有 7 款去审查衍生版。

---

## 值得探索

1. **[Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态中心，多模态能力 + 开源许可使其成为研究、微调与部署的全能底座，值得作为一切衍生工作的起点。
2. **[Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — MIT 许可的 MoE 架构（35B 总参 / 3B 激活），兼具性能与部署效率，是中小团队值得重点跟踪的新兴开源力量。
3. **[Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — 0 下载却获 1,437 赞，说明模板兼容性是社区刚需。对做模型服务和工具链的开发者，这类"小而关键"的修复项目极具参考价值。

---

*数据来源：Hugging Face Hub Trends，统计周期为 2026-08-24 前一周。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*