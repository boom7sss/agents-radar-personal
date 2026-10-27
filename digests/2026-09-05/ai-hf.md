# Hugging Face 热门模型日报 2026-09-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-05 10:55 UTC

---

# Hugging Face 热门模型日报 — 2026-09-05

## 今日速览

- **Qwen 3.8 家族全面爆发**——旗舰型号 Qwen3.8-27B 以约 1.4 万周点赞、超 600 万下载量断层领跑，GGUF 版本累计下载破千万，生态热度无可争议。
- **多模态视频生成大热**——MiniMax-H3 与 LTX-2.5 双双霸榜下载量前十，4 步推理技术与高效微调成为关键词。
- **GLM-5.3 持续升温**——zai-org 官方与 orcarouter 的 "Uncensored" 微调版本同时上榜，Flash 小尺寸版本亦受青睐。
- **"Uncensored" 社区风潮渐起**——围绕 Qwen3.8-27B 至少出现 5 个去审查微调/量化版本，已成为不容忽视的生态现象。
- **量化竞争白热化**——unsloth、ISTA-DASLab、DavidAU、OBLITERATUS 等不同机构/个人为同一基座模型提供差异化 GGUF 方案，Abliteration、MTP、FP8 混精度等新技术名词高频出现。

## 热门模型

### 🧠 语言模型（LLM / 对话 / 指令微调）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,711 | 370,417 | 智谱最新旗舰文本模型，MoE 架构 + DSA 注意力机制，是本周文本生成赛道的核心看点之一。 |
| [Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 497 | 4,755 | 4B 级轻量 LLM，小参数 + 新版本架构，适合边缘部署或低成本场景研究。 |
| [Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 438 | 6,195 | 腾讯混元系最新预览版文本模型，值得关注其与同生态视觉模型的联动潜力。 |
| [K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 163 | 1,333 | 36B 总参数 / 4B 激活的 MoE 模型，从命名看或为 K2-Horizon 系列的多模态变体，值得关注。 |

### 🎨 多模态与生成（图像/视频/音频/文本到 X）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 633 | 184,542 | 深度求索 V4 系列视觉实验版，兼具 Flash 高效推理与视觉理解能力。 |
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,988 | 6,024,467 | 本周最热多模态大模型（图片+文本），Qwen 团队官方发布，生态影响力首屈一指。 |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,894 | 401,327 | Qwen 轻量快速版迭代，定位类似 Flash/Lite 系列，主打速度与资源效率。 |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,063 | 727,610 | GLM 5.3 多模态 Flash 版，在轻量级配置下提供视觉语言能力。 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,828 | 1,484,329 | 专业视频生成模型，支持图生视频/文生视频，在创意工具领域热度极高。 |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,918 | 5,057,414 | MiniMax 最新视频生成大作，下载量突破 500 万，是本周视频赛道现象级作品。 |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 439 | 5,962 | 新晋 TTS 模型第二代迭代版本，由独立团队贡献，关注其在语音自然度上的表现。 |
| [FastVideo-FastH3-4-step-preview](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-preview-V1-VSA-DataFree) | FastVideo | 277 | 22,851 | 4 步推理视频生成加速方案，主打数据自由与速度，针对 MiniMax-H3 生态的优化方向明显。 |

### 🔧 专用模型（代码、时间序列、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 441 | 123,025 | Google 时间序列预测专用模型，是 TFM（Time Series Foundation Model）系代表作之一。 |
| [all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,522 | 255,006,933 | 嵌入/句向量领域"常青树"，累计下载超 2.5 亿，是该榜单的绝对基准参照物。 |
| [gpt2](https://huggingface.co/openai-community/gpt2) | openai-community | 3,662 | 14,739,982 | 开源 AI 史上的里程碑模型，作为生态基线与研究参考持续保持高热度。 |
| [clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,187 | 20,755,211 | CLIP 家族经典之作，长期霸占零样本图像分类检索榜首之一。 |
| [bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,952 | 56,175,564 | 预训练时代最经典模型，至今仍在大量微调场景被广泛使用。 |
| [distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,133 | 7,101,423 | DistilBERT 知识蒸馏代表作，本周热度重燃，印证轻量化仍在持续受捧。 |
| [mms-300m](https://huggingface.co/facebook/mms-300m) | facebook | 238 | 12,961 | Meta 的 MMS 语音预训练模型，支持多语种语音识别。 |

### 📦 微调与量化（社区微调 / GGUF / AWQ）

| 模型 | 作者 | 点赞 | 下载 | 一句话点评 |
|---|---|---|---|---|
| [Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 336 | 297,493 | 学术机构提出的 GSQ + RCO 混合精度量化方案，代表从"能跑"到"跑得更聪明"的技术探索方向。 |
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,519 | 10,157,510 | unsloth 官方量化的 Qwen 3.8 GGUF 全家桶，下载量破千万，是本地部署的首选入口之一。 |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 791 | 780,823 | 与官方 Flash-Next 同步发布的轻量 GGUF 版本，适合边缘侧快速接入。 |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 953 | 1,527,627 | 社区热门 Uncensored 微调 + MTP 加速推理，下载量超 150 万，引发了一定争议但也反映了用户对"少限制"的需求。 |
| [Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 193 | 174,405 | 命名极具个性（长到夸张）的融合型微调，聚合编码 + 去审查等能力于一体。 |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,092 | 968,936 | "Abliteration"（消融审查）路线代表作品，提供 MLX / GGUF / safetensors 多格式版本。 |
| [GLM-5.3-Flash-Uncensored-FP8](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8) | orcarouter | 183 | 8,338 | GLM 系少见的 8-bit FP8 量化 + 去审查微调版本，可看作一次高性能端侧部署实验。 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 721 | 283,774 | 同类型中的高人气版本之一，核心定位为解除审查或缓解对齐过度。 |
| [Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 236 | 106,845 | 针对 Flash-Next 小模型的 Uncensored GGUF 版本，适合轻量化部署同样风格的需求场景。 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 976 | 2,453,361 | 下载量突破 240 万，是 Uncensored + GGUF + MTP 路线的社区代表作之一。 |
| [vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 179 | — | 基于 MiniMax-H3 的视频微调派生项目，展示了大众化定制视频模型的扩张趋势。 |

## 生态信号

**Qwen 家族空前强大**——从官方多模态基座到海量 GGUF / Uncensored / 加速推理的二次创作，Qwen 已经构成了完整的"官方发布 → 社区裂变 → 生态反哺"循环。GLM 与 MiniMax 则在形成各自的多模态护城河。**开源权重依旧是绝对主流**——几乎所有热门模型都提供开源权重（safetensors/GGUF/MLX），闭源模型在此次榜单中几乎缺席。**量化和微调活动呈现两极分化**：一边是追求极致性能的学术级方案（如 MTP、GSQ-RCO、FP8）；另一边是社区层面大量围绕 Unslicensed / Uncensored / Abliteration 的微调潮，客观反映了用户在"对齐束缚"与"自由创作"之间的偏好拉锯。视频生成赛道正在从"质量竞争"升级为"成本 + 速度竞争"——4 步蒸馏 / 数据自由训练的趋势值得后续追踪。

## 值得探索

1. [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) —— 周点赞 14K、下载 600 万+，是目前生态覆盖最广、周边工具最完备的多模态主干模型。无论做应用开发还是模型研究，都建议基于它做基线。
2. [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) —— 视频生成领域 500 万+ 下载的现象级模型，与此前 T2V 模型相比在文本对齐和画质上具有不可忽视的竞争力，是视频类应用的必测项。
3. [timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch) —— 时间序列专用基础模型是当前 AI 应用中最被低估的赛道之一。Google 官方预训练权重提供开箱即用的预测能力，适合金融与工业场景的深度研究。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*