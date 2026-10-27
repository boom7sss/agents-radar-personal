# Hugging Face 热门模型日报 2026-09-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-06 11:20 UTC

---

# Hugging Face 热门模型日报 — 2026年9月6日

---

## 今日速览

今日 Hub 热度高度集中于 **Qwen3.8 系列**：原版 27B 模型周点赞超 1.4 万、下载超 619 万，且催生了至少 8 个以上社区量化/去审查（Uncensored）/微调变体，形成完整生态链。多模态视频生成赛道同样火热：**MiniMax-H3** 周获 4,947 赞、下载近 500 万，Lightricks 的 **LTX-2.5** 亦达 153 万下载。国内实验室密集发布新模型，智谱 GLM-5.3 系列首次亮相即双双进入榜单，腾讯、讯飞（Spark）亦有新作上榜。值得注意的是，Flash/实验版小模型（如 Qwen3.8-Flash-Next、GLM-5.3-Flash）与"无审查"衍生微调并存，反映出 Hub 上研究探索与社区实用主义并行的双轨生态。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| **Qwen/Qwen3.8-27B** | Qwen | 14,067 | 6,190,807 | 旗舰级多模态对话模型，本周 Hub 绝对王者 |
| [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 572 | 5,477 | 4B 轻量文本生成 LLM，讯飞生态新作 |
| [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,086 | 761,364 | 智谱 GLM-5.3 多模态 Flash 版，主打高效推理 |
| [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,726 | 410,074 | GLM-5.3 旗舰版，采用 MoE-DSA 架构 |
| [**IFM/K2-Horizon-MoVA-36B-A4B**](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 182 | 1,723 | 36B 总参/A4B 激活的 MoE 文本生成模型 |
| [**tencent/Hy4-preview**](https://huggingface.co/tencent/Hy4-preview) | tencent | 443 | 6,441 | 腾讯 Hunyuan 第 4 代预览版 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,916 | 1,526,928 | 2.5 代视频生成模型，支持图/文/视频到视频 |
| **MiniMaxAI/MiniMax-H3** | MiniMaxAI | 4,947 | 4,986,349 | MiniMax 第 3 代视频生成，支持文本/图像到视频 |
| [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 452 | 6,357 | Breeze 系列语音合成第 2 代 |
| [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 702 | 209,191 | DeepSeek V4 实验性视觉-文本理解模型 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 475 | 144,455 | 时序预测专用模型 (TFP) 第 3 代 |
| [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,561 | 253,029,336 | 经典句子嵌入模型，下载量超 2.5 亿 |
| [**google-bert/bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,987 | 52,338,347 | BERT 经典底座，常青下载量惊人 |
| [**distilbert/distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,054,316 | 蒸馏版 BERT，轻量高效 |
| [**openai/clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,210 | 20,579,479 | 视觉-语言对齐经典模型 |
| [**facebook/mms-300m**](https://huggingface.co/facebook/mms-300m) | facebook | 263 | 12,464 | 语音识别自监督预训练模型 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,559 | 10,311,462 | 官方链路量化 Qwen3.8-27B GGUF |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 971 | 1,568,315 | Qwen3.8 去审查微调 + MTP 量化版 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 991 | 2,499,368 | 社区热门去审查 GGUF 版，支持 MTP |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,101 | 995,160 | "abliterated"（去除安全对齐）多格式版本 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 734 | 287,720 | Qwen3.8 去审查变体之一 |
| [**orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 241 | 112,720 | Flash-Next 版去审查量化 |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 437 | 348,389 | 学术机构混合精度量化方案 |
| [**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 233 | 211,018 | 多层微调融合 + 去审查 GGUF 实验性作品 |
| [**Jackrong/Qwopus3.8-27B-Flash-GGUF**](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 121 | 22,128 | qwen3.8 社区魔改版 GGUF 量化 |
| [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 804 | 823,733 | Flash-Next 官方链路 GGUF |
| [**nvidia/Qwen3.8-Flash-Next-NVFP4**](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 105 | 13,321 | NVIDIA ModelOpt 4-bit 浮点量化版 |

---

## 生态信号

**模型家族势力格局**：Qwen 生态一周内形成"原版 + GGUF + 去审查 + MTP 加速"完整产业链，社区热度过半集中于 Qwen3.8-27B 及其变体，延续了 Qwen 在开源社区的领导地位；GLM-5.3 与 MiniMax-H3 分别领跑各自赛道。

**权重 vs 产品化**：开源权重模型生态持续繁荣——多家实验室发布完整权重（GLM、Hunyuan 等），效率型 Flash 系列成新的发布惯例（DeepSeek-V4-Flash、GLM-5.3-Flash、Qwen3.8-Flash-Next）；与此同时，"Uncensored/Abliterated"衍生态在第 3 代 Qwen 上呈现爆发式增长（至少 5 个独立作品）。

**量化与微调热点**：GGUF 已成社区事实标准（几乎每个新模型发布即有 unsloth 官方量化版跟进）；除传统 GGUF 外，学术机构（ISTA-DASLab）尝试混合精度量化，NVIDIA 则以 NVFP4 走企业级 ModelOpt 路线，体现量化手段的多元化。

**经典模型稳健**：BERT、CLIP、MiniLM 等经典模型下载量持续居于榜首（sentence-embeddings 下载破 2.5 亿），表明生产环境对稳定底座模型的需求依然刚健。

---

## 值得探索

**1. Qwen3.8-Flash-Next**（[模型链接](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)）
唯一被标记为 `qwen4_exp` 的实验性模型，高频更新版本，适合研究下一代 Qwen 架构方向；已有 unsloth GGUF 与 NVIDIA NVFP4 量化版，技术验证基础设施完善。

**2. MiniMax-H3**（[模型链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)）
视频生成赛道的现象级作品，周获近 5 千赞、下载近 500 万。已有社区基于其训练辅助下游视频模型（如 OpenVDN 的微调变体），验证了其在生态中的底模地位。

**3. zai-org/GLM-5.3-Flash**（[模型链接](https://huggingface.co/zai-org/GLM-5.3-Flash)）
GLM-5.3 系列首次亮相即主流并置双榜（旗舰 + Flash）发布。Flash 版凭 76 万下载验证"轻量即主流"的趋势，MoE-DSA 架构值得研究者在效率与质量平衡上持续追踪。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*