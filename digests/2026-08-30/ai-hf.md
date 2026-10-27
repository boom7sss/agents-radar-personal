# Hugging Face 热门模型日报 2026-08-30

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-30 13:31 UTC

---

# Hugging Face 热门模型日报（2026-08-30）

## 今日速览

本周 Hugging Face 生态由 Qwen 与 Kimi 两大旗舰模型强势领跑：**Qwen3.8-27B**（周点赞 13,302）登顶热度榜首，而同门新一代实验模型 **Qwen3.8-Flash-Next** 的上线引发广泛关注，带动多款 GGUF/量化衍生版本集中上榜。**moonshotai/Kimi-K3** 以超高点赞紧随其后，印证国产开源大模型在社区中的主导地位。视频生成赛道迎来重要进展，**MiniMax-H3** 系列（官方权重 + 社区 LoRA/ControlNet 适配）形成完整生态链。值得注意的是，围绕 Qwen3.8-27B 的 "Uncensored"（abliterated）微调版本大规模涌现，成为本周社区最活跃的二次创作方向。

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — Qwen ★4,338 | ⬇︎121,976 — Qwen 新一代实验性快速推理多模态语言模型，支持图像+文本输入，是本周最受期待的新架构发布之一。
- [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) — zai-org ★1,665 | ⬇︎346,516 — 智谱新一代轻量高效对话模型，主打快速推理与多模态能力，下载量已积累超 34 万次。
- [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) — zai-org ★1,310 | ⬇︎50,116 — GLM-5.3 旗舰版本，基于 MoE 架构，兼顾多模态理解与对话能力。
- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — deepseek-ai ★3,814 | ⬇︎4,575,518 — DeepSeek V4 轻量化版本，以高效推理著称，累计下载超 457 万次，社区热度持续走高。
- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — moonshotai ★11,090 | ⬇︎2,794,721 — 月之暗面新一代多模态大模型，采用压缩张量技术（compressed-tensors），支持特征提取任务，本周点赞量高达 1.1 万。
- [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) — tencent ★301 | ⬇︎2,123 — 腾讯混元系列第四代预览版，纯文本生成模型，代表大厂在自研基座模型上的持续投入。
- [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) — pipecat-ai ★141 | ⬇︎3,982 — 基于 Nemotron 架构的语音场景专用语言模型，面向实时对话式语音交互设计。

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

- [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) — Qwen ★13,302 | ⬇︎4,511,348 — 本周热度冠军，Qwen 3.8 系列最强多模态模型（image-text-to-text），下载量超 451 万。
- [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) — Lightricks ★2,198 | ⬇︎1,137,181 — 全能型视频生成模型，支持文生视频、图生视频及视频转视频，单文件扩散模型，下载超百万。
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — MiniMaxAI ★4,641 | ⬇︎5,263,381 — MiniMax 最新视频生成大模型，同时支持文本与图像驱动，下载量超 526 万，领跑视频生成赛道。
- [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) — FastVideo ★175 | ⬇︎0 — 基于 MiniMax-H3 的 4 步快速推理预览版，主打无数据蒸馏的高效视频生成，刚发布尚待下载积累。
- [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) — BreezeBlue ★201 | ⬇︎1,838 — 新一代轻量级文本转语音模型，基于 transformer 架构，适合嵌入式语音合成场景。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- 本周榜单中未出现独立分类的代码/数学/医疗专用模型。目前专用模型生态主要由 Qwen3.5-MoE 与 Nemotron 架构衍生品构成（如 [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small)、[peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) 等），或以上榜模型的量化/调优形态出现，详见下方分类。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) — unsloth ★587 | ⬇︎328,195 — Flash-Next 官方 GGUF 量化版，由 unsloth 出品，便于本地部署。
- [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) — unsloth ★3,211 | ⬇︎8,839,153 — Qwen3.8-27B 的 GGUF 量化版，下载量超 883 万，是全网最热门的 Qwen3.8 本地部署方案。
- [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) — OBLITERATUS ★938 | ⬇︎725,757 — Qwen3.8-27B 的"去审查"（abliterated）版本，兼容 MLX、GGUF 多格式，社区热度高。
- [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) — unsloth ★282 | ⬇︎45,936 — GLM-5.3-Flash 的 GGUF 量化版，English 优化。
- [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) — orcarouter ★1,227 | ⬇︎109,121 — Qwen3.8 去审查版，面向 Apple Silicon 的 MLX 格式，便于 Mac 本地运行。
- [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) — orcarouter ★1,276 | ⬇︎301,964 — FP8 精度去审查版，在显存占用与推理速度间取得平衡。
- [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) — orcarouter ★565 | ⬇︎238,397 — GGUF 格式去审查版，支持 llama.cpp 本地部署。
- [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) — HauhauCS ★762 | ⬇︎1,158,065 — 激进式去审查 + MTP（多 token 预测）GGUF 版，下载量超 115 万。
- [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) — JonathanColetti ★839 | ⬇︎1,991,437 — 支持 MTP 的去审查 GGUF 版，下载近 200 万次。
- [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) — huihui-ai ★444 | ⬇︎1,622,056 — 知名社区玩家 huihui-ai 出品的去审查 GGUF 版，用户基础庞大。
- [alibaba-pai/MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) — alibaba-pai ★162 | ⬇︎5,538 — MiniMax-H3 的 ControlNet 联合控制适配器，实现视频生成中的结构控制。
- [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) — alibaba-pai ★149 | ⬇︎23,734 — MiniMax-H3 加速 LoRA 集合，配套论文已发布（arXiv:2607.26004）。
- [orcarouter/Qwen3.8-27B-Uncensored](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) — orcarouter ★214 | ⬇︎58,501 — 去审查版原版权重（非量化）。
- [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) — peculiar-ragdoll ★129 | ⬇︎87,848 — 基于 Qwen3.5-MoE 的代码专用模型 GGUF 版，带 imatrix 校准。
- [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) — ornith-ai ★502 | ⬇︎147,038 — Qwen3.5-MoE 架构的 35B 激活 3B 稀疏模型，兼顾多模态与高效推理。
- [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) — thomsonreuters ★156 | ⬇︎1,009 — 汤森路透基于 Qwen3.5-MoE 定制的多模态小型模型，面向垂直领域。
- [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) — froggeric ★1,522 | ⬇︎0 — 修复 Qwen 系列聊天模板（Jinja）的社区工具包，解决多模型模板兼容痛点，获大量点赞支持。

## 生态信号

**模型家族版图**：Qwen 3.8 系列（含 27B 旗舰与 Flash-Next 实验版）以绝对优势主导本周榜单，围绕它形成"官方权重 → GGUF/FP8/MLX 量化 → abliterated 去审查"的完整三层生态，其中 unsloth、orcarouter、huihui-ai 等社区玩家贡献了大量高质量的量化/微调衍生品。Kimi-K3 与 DeepSeek-V4-Flash 作为国产开源第二、第三梯队，热度与下载量同样可观，显示国内厂商在开源权重策略上的持续加码。GLM-5.3 双版本（标准版 + Flash）代表智谱在 MoE 与推理效率上的双线推进。视频生成方面，MiniMax-H3 已形成围绕单一模型的控制网络、加速 LoRA、快速推理蒸馏等生态组件，标志着视频生成正在复刻语言模型的生态化发展路径。**值得注意**：Qwen3.8-27B 的 "Uncensored" 系列累计贡献了超 500 万次下载，凸显社区对"去审查"模型的高度偏好；同时 Qwen3.8-Flash-Next 的标签中已出现 "qwen4_exp" 字眼，暗示下一代架构的探索方向。

## 值得探索

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen 新一代实验架构的首发代表，标注 "qwen4_exp"，是了解官方下一代模型方向的第一手资料，建议研究其架构设计与 Flash 推理机制。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** + 配套的 [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) — 视频生成领域少见的"官方权重 + 加速 LoRA + 社区控制网络"完整生态案例，是研究视频生成模型可组合性的绝佳样本。

3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 采用压缩张量（compressed-tensors）技术路线，支持 feature-extraction 任务，代表了国产大模型在推理效率与多模态融合上的前沿探索，点赞量（11,090）与下载量（279 万）双高，值得深入研究。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*