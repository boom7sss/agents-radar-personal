# Hugging Face 热门模型日报 2026-09-01

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-01 12:03 UTC

---

# 🤗 Hugging Face 热门模型日报 — 2026-09-01

---

## 📌 今日速览

今日榜单一览无余——**Qwen3.8 系列**全面霸榜，其中旗舰多模态模型 **Qwen3.8-27B** 以 4,573 点赞和近 500 万下载量断层领先，直接引爆社区关注度；**DeepSeek**、**GLM（智谱）**、**MiniMax** 三大头部团队同日发布新作，呈"四强争霸"格局。与此同时，"去审查"（abliterated/uncensored）衍生模型生态极其活跃，或carouter、huihui-ai 等社区团队围绕 Qwen3.8 与 GLM-5.3 快速产出多个量化变体，下载量高达数百万，成为榜单中不可忽视的"第二曲线"。视频生成赛道由 **MiniMax-H3** 和 **Lightricks/LTX-2.5** 领跑，开源视频模型的生成效率（4-step）与质量竞争持续白热化。

---

## 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
|---|---|---|---|
| [**Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,522 / 4.96M | **榜首**，Qwen3.8 系列旗舰多模态模型，集图像理解与对话能力于一体，下载量近 500 万，是当前社区最热门的基座模型。 |
| [**GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,437 / 94K | 智谱最新 MoE 架构文本生成模型（glm_moe_dsa），非 Flash 版本完整形态，主打高推理性能与对话能力。 |
| [**Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 371 / 3.5K | 腾讯混元 Hunyuan 系列第 4 代预览版，纯文本生成模型，上线初期下载量较低但值得关注后续发力。 |
| [**phonellm-alpha-1**](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 178 / 6.8K | 基于 Nemotron 架构的 Alpha 版语音语言模型，面向电话语音场景优化，处于早期探索阶段。 |
| [**Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,125 / 2.78M | 月之暗面 Kimi K3 模型，**第二名**，采用压缩张量技术（compressed-tensors），多模态+特征提取定位，下载超 278 万。 |

## 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
|---|---|---|---|
| [**Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,573 / 208K | Qwen 第 4 代实验（qwen4_exp）多模态快速版，Flash 定位兼顾速度与图像/文本双向理解。 |
| [**GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,844 / 441K | GLM 5.3 的 Flash 多模态版本，图像+文本双模态，下载量超过完整版 GLM-5.3（44 万 vs 9.4 万）。 |
| [**DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 419 / 17.9K | DeepSeek V4 Flash 视觉实验版，兼具文本生成与图像理解，属于 V4 系列的早期公开试水。 |
| [**LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,414 / 1.23M | 全能视频模型，一条龙支持 图→视频、文→视频、视频→视频，单文件 diffusion 格式，下载超 123 万。 |
| [**MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,726 / 5.53M | **视频生成赛道顶流**，支持图文多模态输入转视频，下载量 553 万，社区生态（LoRA/实验版）最活跃的视频模型。 |
| [**FastVideo-FastH3-4-step-Preview-v1**](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 225 / 0 | **4 步推理**视频生成加速版（VSA 数据免费蒸馏），彻底零下载但技术路线极具探索价值。 |
| [**Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 279 / 3.1K | Breeze 系列第 2 代语音合成模型，文本转语音任务，新上线尚处早期增长期。 |
| [**Qwen3.8-Flash-Next-FP8**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 178 / 130K | 官方 FP8 量化版 Flash-Next，保留全部图像理解能力并压缩体积，推理成本更低。 |
| [**MiniMax-H3-Acc-LoRAs**](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 173 / 32.9K | 阿里 PAI 团队为 MiniMax-H3 定制的加速 LoRA 集合，配合论文成果（arXiv:2607.26004）发布。 |

## 🔧 专用模型（代码、嵌入、时间序列等）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
|---|---|---|---|
| [**timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 119 / 0 | 谷歌 TimeSFM 第 3 代时间序列预测模型 PyTorch 版，零下载但代表时序预测方向的前沿权重。 |
| [**Tiel-Coder-35B-A3B-GGUF**](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 175 / 130K | 35B 总参/3B 激活的 MoE 代码模型量化版（qwen35moe 架构），带 imatrix 优化，码农友好。 |
| [**Thomson-1.0-Small**](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 176 / 1.1K | 汤森路透基于 qwen3_5_moe 的多模态小模型，面向专业/金融信息场景，初始下载量有限。 |

## 📦 微调与量化（社区微调、GGUF、MLX、FP8）

| 模型 | 作者 | 点赞/下载 | 一句话说明 |
|---|---|---|---|
| [**Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 647 / 431K | unsloth 官方量化 Flash-Next，GGUF 格式，客户端/本地一键部署首选。 |
| [**Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,308 / 9.35M | **下载量冠军（935万）**，unsloth 量化 Qwen 旗舰，社区生态最核心的 GGUF 底座。 |
| [**GLM-5.3-Flash-GGUF**](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 315 / 63.7K | GLM-5.3 Flash 官方 GGUF 量化版，本地推理 GLM 多模态的便捷入口。 |
| [**Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 988 / 806K | **去审查（abliterated）**代表作，多格式（MLX/GGUF/safetensors），去除安全对齐限制的社区衍生版。 |
| [**Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 823 / 1.28M | 激进版无审查+多 token 预测（MTP）GGUF，追求最佳本地产出质量的社区特调。 |
| [**Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,256 / 121K | Apple Silicon 用户福音，MLX 格式去审查版，Mac 本地流畅跑 Qwen3.8。 |
| [**Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,336 / 316K | FP8 精度无审查版，省显存的同时保持较好生成质量。 |
| [**Qwen3.8-Flash-Next-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 159 / 64.3K | Flash-Next 无审查 GGUF，轻量级去审查方案。 |
| [**Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 619 / 254K | 标准版无审查 GGUF，社区"全家桶"系列之一。 |
| [**Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 883 / 2.14M | llama.cpp 优化+MTP 无审查版，下载超 214 万，独立作者中表现最亮眼。 |
| [**GLM-5.3-Flash-Uncensored-FP8**](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 137 / 2.6K | 去审查+FP8 双管齐下的 GLM Flash 版，社区覆盖开始向 GLM 家族延伸。 |
| [**MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 383 / 0 | ComfyUI 社区大佬 Kijai 的实验版封装，面向部署场景优化，值得关注。 |
| [**Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 485 / 1.87M | huihui-ai 经典"去审查"系列延续，下载 187 万，老牌团队的拳头产品。 |

---

## 🌐 生态信号

**家族竞争进入"多模态全栈"阶段。** Qwen3.8 势能最强：官方基础版、FF8 官方量化、GGUF 生态、海量去审查衍生版层层包围，下载量合计超 2,000 万；GLM-5.3（Flash 与非 Flash）紧随其后，开始出现 FP8/GGUF 社区适配；MiniMax-H3 则在视频赛道建立护城河，LoRA 生态（阿里 PAI 等）已开始介入。

**"去审查"（abliterated/uncensored）成为社区最大"第二生态"。** 至少 8 个衍生模型上榜，覆盖 GGUF/MLX/FP8 全格式，头部作品均获数十万至数百万下载——折射出开源社区对"无限制"版本的真实需求，也推动或carouter 等团队快速成长为模型再加工"品牌"。

**开源权重全面领先。** 前 30 名 100% 为开放权重模型，Top10 中 8 个来自中国团队（Qwen、GLM、DeepSeek、MiniMax），中国开源模型已实质主导 Hugging Face 社区热度。量化格式从 GGUF 向 FP8、MLX 多元演进，本地部署生态日趋成熟。

---

## 🔭 值得探索

- **Qwen/Qwen3.8-27B** — 榜单点赞与下载双冠，集多模态理解+对话生成于一体，是当前最强开源全能基座模型，无论微调、量化还是直接部署都值得优先试水。
- **MiniMaxAI/MiniMax-H3** — 视频生成下载量断层第一（553万），生态（LoRA、加速方案、实验版）最完整，是当前开源视频生成绕不开的锚点。
- **FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree** — 零下载的"技术信号"型模型：4 步采样+无数据蒸馏，代表视频生成效率竞赛的最前沿，建议研究者深度体验。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*