# Hugging Face 热门模型日报 2026-09-03

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-03 10:05 UTC

---

## 📰 Hugging Face 热门模型日报 — 2026-09-03

---

### 1. 今日速览

本周 HF 热点聚焦于各模型家族的新一代重磅发布：**Qwen3.8 系列**携最强开源多模态模型 Qwen3.8-27B 强势领跑（周点赞 1.37 万），并带动了庞大的量化生态；**GLM-5.3 系列**（含 Flash 变体）紧随其后，进一步巩固智谱在多模态对话领域的地位；**MiniMax-H3** 则在视频生成赛道表现亮眼，展示出极强的社区影响力（周点赞 4,828）。此外视频生成领域 Lightricks 的 LTX-2.5 与时间序列预测模型 timesfm-3.0 等垂直模型也值得关注。值得留意的是，围绕 Qwen3.8-27B 的 **Uncensored（审查移除）及 GGUF 量化衍生品**大量涌现，成为本周不可忽视的社区微调趋势。

---

### 2. 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 说明 |
|---|---|
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)（zai-org · 点赞 1,551 · 下载 151k） | 智谱新一代 MoE 语言模型基础版本，桌面端对话部署热门选择。 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)（OBLITERATUS · 点赞 1,037 · 下载 849k） | 对 Qwen3.8-27B 进行“去审查”（abliterated）的社区重制版，多格式（GGUF/MLX）发布。 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)（HauhauCS · 点赞 879 · 下载 1.34M） | 主打激进去审查的多模态 GGUF，MTP 优化，下载量极高。 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)（JonathanColetti · 点赞 931 · 下载 2.24M） | 知名去审查 GGUF 版本，支持 llama.cpp 本地部署需求。 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)（orcarouter · 点赞 666 · 下载 262k） | 另一 Oarcouter 出品的 Qwen3.8 去审查量化版，主打 GGUF。 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)（orcarouter · 点赞 1,378 · 下载 322k） | FP8 精度去审查版，在保留性能的同时大幅降低显存占用，点赞最高。 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)（orcarouter · 点赞 197 · 下载 85k） | 对 Qwen3.8-Flash-Next 进行 abliterated 处理的多模态 GGUF 量化模型。 |
| [XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)（XHToken · 点赞 146 · 下载 1.5k） | 4B 参数轻量级 LLM（spark 2.5 系列），适合低成本部署场景。 |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1)（pipecat-ai · 点赞 201 · 下载 11.5k） | 电话场景专用语音 LLM，基于 Nemotron-H，融合对话与音频处理能力。 |

#### 🎨 多模态与生成（图像、视频、音频、文本到 X）

| 模型 | 说明 |
|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)（Qwen · 点赞 13,743 · 下载 5.25M） | **本周最热模型**。新一代多模态旗舰大模型（qwen3.5），拥有极强视觉+文本对话能力，开源社区热度顶流。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)（zai-org · 点赞 1,991 · 下载 518k） | GLM-5.3 的 Flash 轻量多模态版本，强调低延迟图像+文本理解，下载量突出。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)（Qwen · 点赞 4,756 · 下载 263k） | Qwen 实验性（qwen4_exp）的快速多模态对话模型，面向边缘/低延迟场景。 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)（deepseek-ai · 点赞 518 · 下载 55k） | DeepSeek V4 系列实验版，专注视觉+文本双模态高效推理。 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview)（tencent · 点赞 404 · 下载 4.4k） | 腾讯 Hunyuan 混元系列最新预览版 LLM（Hy v4），文本生成方向。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)（Lightricks · 点赞 2,618 · 下载 1.29M） | 成熟的图像/文本到视频生成模型，功能全面覆盖多类视频生成任务。 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)（MiniMaxAI · 点赞 4,828 · 下载 5.09M） | MiniMax 新一代图像/文本到视频生成大模型，下载量超 500 万，热度极高。 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)（BreezeBlue · 点赞 369 · 下载 3.9k） | 新一代文本转语音（TTS）模型，主打自然语音合成。 |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)（FastVideo · 点赞 250 · 下载 0） | 专注 MiniMax-H3 的 4 步加速推理方案，主打数据免费蒸馏（预览版）。 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental)（Kijai · 点赞 399 · 下载 0） | ComfyUI 知名作者 Kijai 发布的 H3 实验版，供视频工作流测试研究。 |
| [orcarouter/GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)（orcarouter · 点赞 156 · 下载 4.5k） | GLM-5.3-Flash 的 FP8 量化及去审查（abliterated）多模态改版。 |

#### 🔧 专用模型（代码、数学、医疗、嵌入、时间序列）

| 模型 | 说明 |
|---|---|
| [google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)（google · 点赞 318 · 下载 47k） | Google 时间序列预测专用模型（v3.0 PyTorch 版），支持长时间序列、多频预测。 |
| [sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)（sentence-transformers · 点赞 5,413 · 下载 246M） | **下载量之王（2.46 亿）**，句子嵌入/SOTA 语义相似度经典基座模型，多框架支持。 |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)（peculiar-ragdoll · 点赞 197 · 下载 155k） | 35B-A3B MoE 架构代码生成模型（qwen35moe）GGUF 量化版。 |

#### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 说明 |
|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)（unsloth · 点赞 3,406 · 下载 9.55M） | 官方推荐 Qwen3.8-27B 的 GGUF 量化包，**下载超 950 万**，本地部署首选。 |
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)（unsloth · 点赞 739 · 下载 536k） | Qwen3.8-Flash-Next 的 GGUF 量化版，快且机身灵活。 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)（unsloth · 点赞 340 · 下载 75k） | GLM-5.3-Flash 的 GGUF 量化版。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)（ISTA-DASLab · 点赞 192 · 下载 100k） | 学术界的 GSQ-RCO 混合精度量化技术示范模型，基于 Qwen3.8-27B。 |
| [openai-community/gpt2](https://huggingface.co/openai-community/gpt2)（openai-community · 点赞 3,556 · 下载 14M） | GPT-2，流行基准与微调原型，常年保持高热度榜单常青树。 |
| [google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)（google-bert · 点赞 2,870 · 下载 58.5M） | BERT 经典基座，NLP 迁移学习基础模型，持续占据下载前列。 |
| [distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)（distilbert · 点赞 1,055 · 下载 6.76M） | BERT 蒸馏轻量版，兼顾速度与精度，下游任务通用底座。 |

---

### 3. 生态信号

**Qwen 家族正以绝对优势领跑开源社区**：Qwen3.8-27B 与其衍生模型占据榜单近半席位，涵盖 GGUF 量化、Uncensored 改版、FP8 压缩等多个维度。**视频生成赛道迎来新爆发**：MiniMax-H3 及 Lightricks 的 LTX-2.5 下载量均破百万级，同时 FastVideo、Kijai 等生态合作者正在推动推理加速与 ComfyUI 集成。值得特别注意的是 **“去审查”与新版模型发布几乎同步形成二次生态**，且多以 GGUF/FP8 形式支持本地化部署。**开源权重模型**仍为主流共识，头部实验室（Qwen、GLM、DeepSeek）保持积极发布中。另一方面，小型模型（如 4B 参数 Spark-X2.5）和多模态轻量版（如 Flash 系列）成为端侧与社区轻量需求的有效补充。

---

### 4. 值得探索

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**：本周开源社区的绝对中心，是多模态对话、以及基于它的量化与微调生态的源头，强烈推荐全栈研究测试。
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**：非商业组织出品的高质量学术量化尝试，对了解最新混合精度量化技术（GSQ-RCO）非常有参考价值。
- **[FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)**：基于 MiniMax-H3 的 4 步推理优化方案，毫无下载但概念领先，适合关注视频生成推理加速方向的研究者。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*