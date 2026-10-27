# Hugging Face 热门模型日报 2026-08-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-26 11:02 UTC

---

# Hugging Face 热门模型日报（2026-08-26）

## 今日速览

本周 Hugging Face 趋势由 Qwen3.8 生态全面主导：官方多模态模型以约 1.3 万周点赞登顶，社区围绕其展开的 uncensored/abliterated 变体与 GGUF 量化占总榜近半。视频生成赛道迎来重量级玩家，MiniMax-H3 以 4,474 点赞和 479 万下载成为本周第二大热点，LTX-2.5 亦表现强劲。DeepSeek-V4-Flash 延续高热度，Kimi-K3 以 1.1 万点赞跻身一线梯队。值得关注的是，本周出现了多款针对推理/内存优化的衍生产品，包括 2-bit 量化（Escha-W2）和投机解码（DFlash2）等，显示社区正加速推动大模型在消费级硬件上的落地。

## 热门模型

### 🧠 语言模型（LLM、对话模型）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen 官方旗舰多模态对话模型，本周点赞第 1、下载超 329 万，是当前社区最受关注的基础模型。
- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — DeepSeek 最新一代高效对话模型，本周以 3,726 点赞和 385 万下载量稳居第一梯队。
- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — Kimi 新一代多模态模型，11,003 点赞为本周第 2 高，下载量超 292 万，采用压缩张量（compressed-tensors）技术。
- **[ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — 35B 参数的 MoE 模型（3B 激活），主打多模态与文本生成，MIT 协议开源。
- **[ornith-ai/Ornith-1.5-9B](https://huggingface.co/ornith-ai/Ornith-1.5-9B)** — Ornith-1.5 系列的小参数版本，同样支持图像-文本到文本任务。
- **[superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini)** — 基于 Qwen3 的轻量文本生成模型，集成 ASR 能力，本周新发布。
- **[sensenova/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT)** — 商汤科技推出的原生多模态 any-to-any 模型，8B 规模支持多模态特征提取。

### 🎨 多模态与生成（图像、视频、音频）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMax 旗舰视频生成模型，支持文本/图像到视频，本周 4,474 点赞、下载量近 480 万，为本周下载量最高的视频模型。
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks 新一代视频生成模型，支持图生视频/文生视频/视频生视频，1,817 点赞。
- **[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)** — MiniMax 音乐生成模型，基于 diffusers 框架，1,250 点赞，扩充了 MiniMax 的生成矩阵。
- **[Audio8/Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b)** — 基于 ArkTTS 的语音合成预览模型（0.1B），面向轻量 TTS 场景。
- **[alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union)** — 阿里 PAI 基于 MiniMax-H3 的 ControlNet 适配模型，实现可控视频生成。
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 见上文语言模型部分；同时作为本周最热的视觉-语言基础模型值得在此重申。 

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — 修复 Qwen 模型聊天模板（Jinja）问题的专用仓库，1,478 点赞，下载量为 0，说明其为纯模板分发而非模型权重。
- **[peculiar-ragdoll/Qwen-Sharp-Chat-Templates](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates)** — 类标准化的 Qwen 聊天模板仓库（MLX/Jinja），251 点赞，供 MLX 开发者使用。

### 📦 微调与量化（社区微调、GGUF）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 官方 Qwen3.8-27B 的 GGUF 量化版，下载量高达 763 万，为全部模型之首。
- **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — 社区"abliterated"（去审查）微调版，支持 MLX/GGUF，776 点赞。
- **[orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)** — Apple Silicon 专属 MLX 格式的 uncensored 版本，1,123 点赞。
- **[orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)** — FP8 精度的无审查版，1,159 点赞。 
- **[orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored)** — 完整精度无审查版（transformers），185 点赞。
- **[orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)** — 无审查版 GGUF 格式，458 点赞。
- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — 激进版无审查 + MTP 加速的多模态 GGUF，631 点赞、下载超 91 万。
- **[JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)** — llama.cpp 兼容的无审查 GGUF，733 点赞、下载量 162 万。
- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai 出品的 abliterated GGUF，365 点赞、下载量 131 万。
- **[0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF](https://huggingface.co/0bserverx/Qwen3.8-27B-Heretic-Abliterated-Uncensored-GGUF)** — "Heretic" 版无审查 GGUF，281 点赞。
- **[DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF)** — 采用 GAIN/COLD-FUSION 训练技巧的社区增强版 GGUF，245 点赞。
- **[z-lab/Qwen3.8-27B-DFlash2](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** — 集成投机解码（DFlash2）推理优化的 Qwen3.8-27B，230 点赞。
- **[incoai/Qwen3.8-27B-DFlash2](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2)** — 另一款 DFlash2 投机解码优化版，181 点赞。
- **[EschaLabs/Qwen3.8-27B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.8-27B-Escha-W2)** — 2-bit 极量化版本，128 点赞，追求极致内存压缩。
- **[ornith-ai/Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF)** — Ornith 35B MoE 的 GGUF 版，下载 139 万，MIT 协议。
- **[ornith-ai/Ornith-1.5-9B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF)** — Ornith 9B 的 GGUF 版，下载 139 万。

## 生态信号

**Qwen3.8 生态势不可挡。** 官方 27B 多模态模型 + 社区超过 15 款衍生变体（GGUF、abliterated、MLX、FP8、2-bit 等）占据榜单近半壁江山,已形成"官方发布 → 社区量化 → 去审查二次分发 → 推理优化"的完整产业链。视频生成呈现双核格局：MiniMax-H3 凭借 479 万下载量力压 LTX-2.5,阿里 PAI 迅速跟进 ControlNet 适配。DeepSeek-V4 与 Kimi-K3 则代表闭源团队持续向开源开放靠拢的态势。下载量上,GGUF 量化版（763 万）远超原版 329 万,说明本地部署/推理是社区核心诉求;而 abliterated 无审查变体持续高热度,揭示了 开源模型审查绕行 的持续需求。MoE 架构（Ornith 35B-A3B）、2-bit 量化与投机解码技术集中涌现,标志社区正从「追求规模」转向「打磨可用性」。

## 值得探索

1. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 本周下载冠军（479 万次),代表视频生成赛道最新水平,值得评估其与 LTX-2.5 的能力差异,配套的 [Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) 还提供可控生成方案。
2. **[Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B)** — MIT 协议 + MoE 架构（仅 3B 激活),在 35B 总参数量下兼顾性能与推理成本,是开源可持续路线的重要样本。
3. **[Qwen3.8-27B-DFlash2（z-lab 版）](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2)** — 投机解码优化版的代表,若与 GGUF 量化结合,有望成为消费级硬件上运行 27B 级模型的最优解。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*