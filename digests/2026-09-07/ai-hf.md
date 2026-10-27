# Hugging Face 热门模型日报 2026-09-07

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-07 13:01 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-09-07

---

## 📌 今日速览

本周 Hugging Face 生态呈现 **多模态大模型集中爆发** 的态势，Qwen 家族发布 Qwen3.8-27B 全能多模态模型与 Qwen3.8-Flash-Next 实验版本，分别斩获 14,192 和 4,963 周点赞，成为榜单绝对主角。**视频生成赛道**竞争激烈，Lightricks LTX-2.5 与 MiniMax-H3 双双跻身下载量前列。同时，GLM-5.3 系列双子星登榜，DeepSeek-V4 系列继续推进多模态探索。**量化社区**围绕 Qwen3.8 展开大规模微调与 GGUF 适配，大量去审查（abliterated）变体涌现。底部，经典模型如 GPT-2、BERT、CLIP 仍保持稳定热度，构成生态底座。

---

## 🔥 热门模型

### 🧠 语言模型（LLM / 对话模型）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话点评 |
|------|------|---------|---------|-----------|
| [**GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,744 | 442,064 | GLM 家族最新旗舰 MoE 模型，主打对话与文本生成能力 |
| [**IFM/K2-Horizon-MoVA-36B-A4B**](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) | IFM | 193 | 2,226 | IFM 推出的 36B 总量 4B 激活 MoE 架构模型，主打高效推理 |
| [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) | XHToken | 657 | 7,216 | 轻量级 4B 文本生成模型，适合本地部署场景 |
| [**openai-community/gpt2**](https://huggingface.co/openai-community/gpt2) | openai-community | 3,711 | 14,629,637 | 经典 GPT-2 开源版本，长期霸榜的常青树 |

### 🎨 多模态与生成（图像 / 视频 / 音频 / 文本到 X）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话点评 |
|------|------|---------|---------|-----------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 14,192 | 6,416,358 | Qwen 新一代全能多模态旗舰（image-text-to-text），本周点赞之最 |
| [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,963 | 474,693 | Qwen 实验版（qwen4_exp）对话模型，社区关注度极高 |
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,989 | 4,990,034 | MiniMax 视频生成旗舰，支持图生视频与文生视频双模态 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 3,017 | 1,584,382 | 全能视频生成模型，覆盖文生/图生/视频生视频全场景 |
| [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 781 | 251,611 | DeepSeek V4 系列视觉实验版，多模态推理方向探索 |
| [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 2,122 | 784,005 | GLM-5.3 的 Flash 轻量多模态版 |
| [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 468 | 6,754 | 新一代 TTS 语音合成模型，文本到语音方向新玩家 |
| [**microsoft/VibeVoice-ASR-Streaming-7B**](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) | microsoft | 134 | 1,144 | 微软推出的流式语音识别（ASR）7B 模型 |
| [**OpenVDN/vdn-minimax-h3**](https://huggingface.co/OpenVDN/vdn-minimax-h3) | OpenVDN | 218 | 0 | MiniMax-H3 的文生视频微调版，刚上线尚无下载 |
| [**WarmBloodAban/Minimax-h3_Singularity**](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban | 126 | 26,731 | 社区对 MiniMax-H3 的视频生成风格化微调 |

### 🔧 专用模型（代码 / 嵌入 / 语音 / 时序）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话点评 |
|------|------|---------|---------|-----------|
| [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) | google | 542 | 271,713 | Google 最新时序预测基础模型，预训练 PyTorch 版 |
| [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) | sentence-transformers | 5,576 | 251,367,312 | 语义相似度嵌入经典小模型，全 Hub 下载量之王 |
| [**google-bert/bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) | google-bert | 2,991 | 50,747,373 | BERT 基础版，NLP 里程碑式预训练模型 |
| [**distilbert/distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) | distilbert | 1,156 | 7,041,011 | 蒸馏压缩版 BERT，兼顾效率与效果 |
| [**openai/clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) | openai | 1,211 | 20,496,047 | OpenAI CLIP 视觉-语言对齐经典模型 |
| [**facebook/mms-300m**](https://huggingface.co/facebook/mms-300m) | facebook | 264 | 12,213 | Meta 多语种语音识别模型，覆盖 300+ 语言 |

### 📦 微调与量化（社区微调 / GGUF / 去审查等）

| 模型 | 作者 | 👍 点赞 | ⬇️ 下载 | 一句话点评 |
|------|------|---------|---------|-----------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,619 | 10,479,045 | unsloth 出品 Qwen3.8 GGUF 量化，下载破千万的明星量化模型 |
| [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 818 | 868,243 | Flash-Next 对应 GGUF 量化版 |
| [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab | 492 | 403,292 | 研究机构出品的 GSQ + RCO 混合精度量化方案 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 1,116 | 1,024,582 | 去审查（abliterated）版 Qwen3.8，多格式支持（MLX/GGUF）|
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 768 | 292,633 | Qwen3.8 无审查 GGUF 变体 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 988 | 1,629,754 | 激进风格去审查微调 + 多 token 预测（MTP）的 GGUF |
| [**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU | 272 | 258,896 | 融合多项技术（去审查、编码增强、MTP）的超长命名社区微调版 |
| [**Jackrong/Qwopus3.8-27B-Flash-GGUF**](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) | Jackrong | 134 | 60,343 | 社区对 Qwen3.8 的 Flash 量化解读版 |
| [**dealignai/GLM-5.3-CYBERSECURITY-FP8**](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) | dealignai | 239 | 18,602 | GLM-5.3 网络安全特化 + FP8 量化 + 去审查版 |
| [**nvidia/Qwen3.8-Flash-Next-NVFP4**](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) | nvidia | 129 | 18,068 | NVIDIA 官方 ModelOpt 团队出品的 NVFP4 4-bit 量化版 |

---

## 🌐 生态信号

**Qwen 家族全面领跑本周生态。** 从官方旗舰模型（Qwen3.8-27B、Flash-Next）到 unsloth 的 GGUF 量化（千万级下载），再到 OBLITERATUS、HauhauCS、orcarouter 等大量去审查微调变体，Qwen3.8 已形成完整的上游发布 — 中游量化 — 下游微调生态链。**视频生成赛道**是本周另一亮点：MiniMax-H3 与 Lightricks LTX-2.5 下载量分别逼近 500 万与 160 万，显示社区对高质量开源视频生成模型需求旺盛。**开源权重势头不减**：本周榜单无纯闭源模型，GLM、DeepSeek、MiniMax 等中国厂商持续加码开源。值得注意的量化活动集中在 GGUF 格式（面向本地推理）与 NVFP4/FP8（面向企业级 GPU 部署），多模态模型的量化适配正成为新战场。去审查（abliterated）微调在 Qwen 与 GLM 上形成规模化社区现象。

---

## 🔬 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周最大热门（14K 点赞、640 万下载），值得深入评测其多模态理解能力，以及它为何能同时获得官方与社区两端的高度认可。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 视频生成赛道翘楚，500 万下载说明实际用户验证充分。已有社区微调出现（见 OpenVDN 与 Singularity），建议研读其技术路线与 Lightricks LTX-2.5 的差异化。

3. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 千万级下载的量化模型，背后是 unsloth 工具的工程实力。对本地部署或边缘推理感兴趣，这份量化的精度/速度权衡非常有参考价值。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*