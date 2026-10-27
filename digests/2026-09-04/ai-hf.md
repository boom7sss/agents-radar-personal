# Hugging Face 热门模型日报 2026-09-04

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-04 11:44 UTC

---

# 🤖 Hugging Face 热门模型日报

**2026-09-04**


## 📌 今日速览

本周趋势榜由 **Qwen3.8 系列**强势领跑：旗舰多模态模型 **Qwen3.8-27B** 以 13,876 点赞和超 573 万下载量登顶，其非官方量化版（unsloth GGUF）下载量达 995 万，接近原版的 2 倍，充分说明开源社区对高效本地部署的旺盛需求。**GLM-5.3 系列**与 **MiniMax-H3**（视频生成）紧随其后，分别凭借新一代架构和在视频生成上的突破占据第二梯队。生态上呈现出两大信号：其一，视觉-语言多模态统一模型（VTG）已成绝对主流，榜单 top30 中近半数是多模态模型而非纯文本 LLM；其二，**"去审查（Uncensored/Abliterated）"微调生态异常活跃**，多个以 Qwen3.8 为基座的社区微调版（GGUF 格式）密集涌现，表明 HF 已成为模型再创作与再分发的基础设施。此外，经典模型（BERT、GPT-2、CLIP、MiniLM）凭借巨大存量下载持续出现在趋势榜，但新发布模型的周点赞数已远超历史经典，新势力影响力占据绝对主导。


## 🏆 热门模型

### 🧠 语言模型

| 模型 | 作者 | 👍 | ⬇️ | 要点 |
|---|---|---|---|---|
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,647 | 303,534 | 智谱新一代 MoE 旗舰，GLM 系列最新版本（纯文本版） |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 416 | 3,524 | 4B 轻量对话模型，同生态中的端侧部署候选 |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 420 | 5,684 | 腾讯混元 4 系列预览版文本生成模型 |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,616 | 14,607,268 | 经典开源 GPT-2 原版，持续作为基线模型被高频使用 |
| [phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 209 | 18,874 | 基于 Nemotron 架构的电话语音/音频语言模型（α版） |
| [mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 185 | 12,823 | Meta 多语言语音模型（wav2vec2 架构） |

### 🎨 多模态与生成

| 模型 | 作者 | 👍 | ⬇️ | 要点 |
|---|---|---|---|---|
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,838 | 351,374 | Qwen3.8 轻量多模态版（实验性架构标记 qwen4_exp） |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,876 | 5,739,341 | 本周趋势王 — Qwen3.8 系列旗舰 27B 视觉-语言统一模型 |
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 571 | 133,024 | DeepSeek V4 Flash 视觉实验版，延续高性价比开源路线 |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,031 | 654,957 | GLM-5.3 轻量多模态版，FLash 级别高效推理 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,727 | 1,399,511 | 集图像转视频/文本转视频/视频转视频于一体的多功能视频模型 |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,889 | 5,118,457 | MiniMax 第三代视频生成模型，支持图生视频与文生视频 |
| [FastVideo-FastH3-4-step-preview](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-preview-v1-VSA-DataFree) | FastVideo | 260 | 0 | 基于 MiniMax-H3 的 4 步蒸馏加速预览版（数据免蒸馏） |
| [vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 148 | 0 | MiniMax-H3 的社区微调版本（VDN 方向） |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 408 | 5,388 | 新一代文本转语音模型，原生支持对话生成 |
| [bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,916 | 58,675,189 | BERT 经典基线模型 |
| [distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,097 | 7,067,963 | 蒸馏版轻量 BERT |
| [clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,141 | 20,569,141 | OpenAI CLIP 经典图文对齐模型 |

### 🔧 专用模型

| 模型 | 作者 | 👍 | ⬇️ | 要点 |
|---|---|---|---|---|
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 405 | 105,304 | 时间序列预测基础模型（第 3 代 PyTorch 版） |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,472 | 253,789,790 | 最经典句向量嵌入模型，累计下载超 2.5 亿次 |

### 📦 微调与量化

| 模型 | 作者 | 👍 | ⬇️ | 要点 |
|---|---|---|---|---|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,468 | 9,951,693 | 官方原版多模态模型的 GGUF 量化版，下载量反超原版 |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 770 | 702,251 | Flash-Next 对应的 GGUF 量化版 |
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 267 | 206,575 | 学术实验室 (DASLab) 推出的混合精度量化研究版 |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 912 | 1,463,966 | 去审查 + 激进多 token 预测微调的社区版 GGUF |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,066 | 928,393 | 经典 Abliterated 去审查系列版，去审查社区标杆作品 |
| [GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 167 | 7,782 | GLM-5.3-Flash 去审查 + FP8 量化版 |
| [Qwen3.8-27B-TURBO-Fable-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 147 | 95,226 | 融合多模型要素（TURBO/Fable 等要素）的超长名社区微调版 |
| [Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 216 | 97,994 | Flash-Next 去审查 + GGUF 量化版 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 696 | 276,706 | 27B 原版的去审查 + GGUF 量化版（ABLITERATED） |
| [GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 350 | 85,158 | GLM-5.3-Flash 的 GGUF 量化版 |


## 📡 生态信号

**» 多模态大一统已至：** 榜单前 10 中 7 席为图像-文本-视频统一模型（Qwen3.8 系列、MiniMax-H3、GLM-5.3 系列），纯文本模型正加速向"通吃"架构迁移。

**» 开源权重全面开花：** 中国 AI 阵营（Qwen、DeepSeek、GLM/MiniMax）持续以开放权重发布前沿模型，并对标闭源竞品形成生态包围，开源社区影响力显著扩大。

**» 量化微调热度空前：** GGUF 下载量是原版权重的 2~3 倍，证明端侧部署正成为刚需；同时"去审查/消融"微调（Abliterated/Uncensored）已形成显性社区文化，且呈现向量化（FP8、GSQ）+ 去审查叠加深化的趋势。


## 🔭 值得探索

1. **Qwen/Qwen3.8-27B** — 本周最大亮点。13,876 周点赞 + 573 万下载，从榜单表现上看是目前最强的开源统一多模态模型，建议优先深入研究其视觉-语言能力。适合作为研究基座或产品基座。

2. **MiniMaxAI/MiniMax-H3** — 视频生成新势力的代表，4,889 点赞和 511 万下载量证明了其超高热度。若关注视频生成方向，该模型的架构思路（H3）值得深入拆解。

3. **google/timesfm-3.0-pytorch** — 榜单中少见的非生成式模型，作为第 3 代时间序列基础模型具有独特价值。若关注基础模型在时序数据上的泛化规律，它是难得的参考样本。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*