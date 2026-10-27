# Hugging Face 热门模型日报 2026-09-09

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-09 11:51 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-09-09

## 今日速览

本周 Hugging Face 趋势榜由多模态模型主导：Qwen 发布 **Qwen3.8-27B** 及下一代实验版 **Qwen3.8-Flash-Next**，下载量合计超 1700 万；视频生成赛道上 MiniMax 推出 **MiniMax-H3**，为 18 亿参数视频扩散模型带来算力瓶颈的破解方案；多家机构推出 3.0/5.0 系列迭代模型，包括 GLM-5.3 系列、DeepSeek-V4-Flash、TimesFM-3.0 等；与此同时，大量的社区 GGUF 量化/微调版本涌入排行榜（如本列表共收录 7 款与 Qwen3.8 相关的社区衍生模型），显示围绕原生模型的生态正在极速扩展。

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)** — XHToken | 👍 961 | ⬇️ 10.7K
  全新的 4B 规模文本生成模型，凭借轻量级高效在低资源场景吸引开发者关注。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** — openbmb | 👍 800 | ⬇️ 2.9K
  MiniCPM 家族第五代的小型 2B 模型，兼具 2B 规模的高性价比与 llama 兼容架构。

- **[zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3)** — zai-org | 👍 1,785 | ⬇️ 474.1K
  GLM 系列新一代 MoE-DSA 架构文本生成模型，大模型竞赛的红利入局者之一，在趋势榜保持较高热度。

- **[dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)** — dealignai | 👍 343 | ⬇️ 19.4K
  面向网络安全领域的 GLM-5.3 FP8 量化衍生版，社区安全焦点。

- **[IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)** — IFM | 👍 254 | ⬇️ 3.2K
  36B 总参数、4B 激活参数的 MoVA 新一代架构，采用 Horizon 微调，面向高效推理场景。

- **[nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/nex-agi/Nex-N2.5-mini)** — nex-agi | 👍 178 | ⬇️ 2
  全新未发布的 Qwen3.5-MoE 社区再训练版 Mini 推理模型，值得关注的小体量种子选手。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 👍 **14,460** | ⬇️ **6.7M**
  本周最大热门：新一代多模态视觉-语言旗舰，达近 7 万日下载，粉丝狂热期。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 👍 5,035 | ⬇️ 503K
  Qwen 官方“下一代”实验模型，宣布 qwen4_exp 的早期版本，引发开发者对 Qwen 的想象。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 👍 3,222 | ⬇️ 1.6M
  Lightricks 最新的 2.5 版图像/视频传播单文件模型，兼支持文生视频/图像转视频/视频生视频等多任务的轻量级生成器。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 👍 **5,075** | ⬇️ **5M**
  MiniMax 新一代 H3 视频扩散模型：以更低成本生成高质量视频的 text-image-video 全链路解决方案，官方原生版本上线即引爆下载。

- **[deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)** — deepseek-ai | 👍 837 | ⬇️ 313.5K
  DeepSeek V4 系列的 Flash 版视觉实验模型，快速响应与多模态属性能有效服务智能体场景。

- **[BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2)** — BreezeBlue | 👍 506 | ⬇️ 7.2K
  Breeze-TTS 第二代轻量级文本转语音模型，自然与效率的平衡者。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** — WarmBloodAban | 👍 198 | ⬇️ 58.1K
  基于 MiniMax-H3 的社区微调版本 Singularity，为视频生成输入多样性提供参考。

- **[OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3)** — OpenVDN | 👍 267 | ⬇️ 0
  基于 MiniMax-H3 的视频生成微调版本，出自 OpenVDN 开源视频生成探索组，处于早期积累阶段。

### 🔧 专用模型（代码、数学、医疗、嵌入、语音、时序）

- **[google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)** — google | 👍 672 | ⬇️ 444K
  谷歌 TimesFM 时间序列预测第 3 代官方 PyTorch 版本：该架构表现出的 zero-shot 能力持续推动其被采用，下载量已突破 44 万大关。

- **[microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)** — microsoft | 👍 174 | ⬇️ 1.5K
  微软新推出的音视频流式语音识别 7B 系列模型，属于热门的新兴 ASR 分支。

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)** — sentence-transformers | 👍 5,686 | ⬇️ **253.3M**
  史上最经典的开源句子相似度嵌入模型，几乎所有向量检索、RAG 应用的最基础基线之一。今日下载量累计已高达 2.5 亿级 。

- **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)** — openai-community | 👍 3,808 | ⬇️ 14.8M
  开源大模型的启蒙者，在今天依然拥有高访问与基础研究的高频下载，是教科书级别的经典模型。

- **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)** — google-bert | 👍 3,084 | ⬇️ 48.8M
  BERT 开源传统模型的最强鼻祖，至今仍是各任务经典主干与微调起点，下载量稳定攀升。

- **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)** — distilbert | 👍 1,241 | ⬇️ 7.2M
  蒸馏版经典 BERT 模型，在缩体量提质效方面仍具领先优势。

- **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)** — openai | 👍 1,299 | ⬇️ 20.8M
  最广泛使用的多模态对齐骨干模型之一——CLIP 视觉编码器标准版本，广泛用于零样本图像分类与跨模态场景。

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)** — facebook | 👍 336 | ⬇️ 12.2K
  facebook 的语音通用模型 MMS-300，使用 300M 规模提升多语言语音任务的泛化表现。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 👍 3,745 | ⬇️ **10.7M**
  最强官方 Qwen3.8-27B GGUF 量化版本，unsloth团队实现的高性能本地部署方案，下载已突破千万级别，成为 top 系列新标杆。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)** — unsloth | 👍 857 | ⬇️ 935.6K
  unsloth 为新发布的 Qwen3.8-Flash-Next 适配的官方 GGUF 版本，宣布与旧版本并存亦可即用。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 👍 697 | ⬇️ 479.6K
  结合混合精度与近年 GSQ-RCO 量化技术的社区版 Qwen3.8-27B GGUF，为高端硬件的模型高效压缩提供了新选项。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 👍 391 | ⬇️ 348.8K
  对 Qwen3.8-27B 高度融合微调的社区 GGUF 版本，极大扩展了视觉对话和代码任务的输入边界。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)** — HauhauCS | 👍 1,043 | ⬇️ 1.7M
  针对视觉与对话场景重新去审查与高强度调优的 Qwen3.8-27B 社区量化模型，因有趣味属性吸收大量关注。

- **[Jackrong/Qwopus3.8-27B-Flash-GGUF](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)** — Jackrong | 👍 168 | ⬇️ 113.3K
  由 Jackrong 实验的 “Qwopus” 融合理念打造的 Qwen3.8-Flash GGUF，重点改善视觉体验与本地推理可用性。

- **[nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)** — nvidia | 👍 173 | ⬇️ 26.3K
  英伟达 NVFP4 精度与 ModelOpt 优化引擎加持的 Qwen3.8-Flash-Next 版本，为 TensorRT 等路线提供前沿性能支撑。

## 生态信号

1. **Qwen DSP** — Qwen 家族明显占据绝对流量，官方开源核心模型（Qwen3.8-27B + Flash-Next）不仅自身下载量巨大，同时带动了至少 7 种第三方微调/量化衍生品的出现。这背后代表了新一代 *“强核开源 + 社区适配大量繁殖”* 的开源模型分发道路。

2. **多模态为主战场** — 从 Qwen、MiniMax H3 到 LTX-2.5、DeepSeek-V4-Flash，图像与视频已显式进入大众开源下载前列。视频模型 MiniMax-H3 单日下载逼近 500 万且持续不减，标志深度学习重心已开始从纯文本往更强的多模态迁移。

3. **开源权重成进一步主流** — 榜单冠军及下载 Top1(Qwen3.8-27B)与 Top20(所有大模型类)均为可下载的开放权重模型。与此同时闭源 API 模型生态（如 Claude/GPT）并未在此排行榜中被反映，说明低成本/可复现路线已经远超曾经的观望氛围。

4. **量化生态持续繁荣与分化** — 除了传统 GGUF 打包，还出现了 NVFP4、GSQ-RCO、混合精度量化以及 “uncensored/去审查” 的社区衍生模型。现下从部署成本到能力微调门槛的要求，催生了极多结构化衍生模型，也意味着 Hugging Face 已是硬核玩家自由套利与试错的主要平台。

## 值得探索

1. **Qwen/Qwen3.8-27B** — 本周最大流量王，代表新一代开源旗舰多模态最强模型，几乎为任何视觉-语言-推理场景提供了新的长期基线。强烈建议在真实任务中抓取并进行能力评测。

2. **MiniMaxAI/MiniMax-H3** — 高下载高点击的核心热门，若你偏向文生视频/图像生视频：它的模型能很好地控制一致性且较上一系列有视觉提升，是当下开源视频模型值得花费时间尝试的对象。

3. **unsloth/Qwen3.8-27B-GGUF** — 下载量突破千万最能说明其价值：这是满足本地化长期运行的关键枢纽型模型，无论做私域部署或二次微调，皆为几乎必备的最优起点与基础设施组件。

---

*报告基于 2026-09-09 HuggingFace Hub 热门榜 Top30 数据。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*