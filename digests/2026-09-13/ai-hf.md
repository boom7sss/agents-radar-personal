# Hugging Face 热门模型日报 2026-09-13

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-13 12:19 UTC

---

# Hugging Face 热门模型日报（2026-09-13）

## 今日速览

今日趋势榜由 Qwen 家族主导：Qwen3.8-27B 以 14,907 点赞、776 万下载稳居榜首，配套的 GGUF 量化版本下载量更突破 1,100 万，显示出极强的社区本地化部署需求。MiniMax-H3（5,216 赞）与 Lightricks LTX-2.5（3,666 赞）推动视频生成继续升温，多模态 image-text-to-text 任务已占据榜单近三分之一。DeepSeek 同时推出 V4.1-Flash 与 V4-Flash-Vision-Exp，延续其 Flash 系列的双线布局。值得注意的是，榜单中相当一部分是围绕 Qwen3.8-27B 的社区量化与微调衍生模型（GGUF、混合精度、uncensored），生态放大效应明显。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen | 点赞 14,907 | 下载 7,768,964
  今日榜单绝对冠军，qwen3_5 架构的多模态对话模型，点赞与下载双双领先，是当前 Qwen 家族的核心旗舰。

- **openbmb/MiniCPM5-2B** — https://huggingface.co/openbmb/MiniCPM5-2B
  openbmb | 点赞 1,296 | 下载 150,110
  轻量级 2B 文本生成模型，主打小体积高性能，凭 openbmb 系列口碑冲上第二。

- **XHToken/Spark-X2.5-4B** — https://huggingface.co/XHToken/Spark-X2.5-4B
  XHToken | 点赞 1,148 | 下载 21,336
  4B 级 spark2_5 架构 LLM，下载量相对较低但点赞靠前，属于新发布引发关注的模型。

- **nex-agi/Nex-N2.5-mini** — https://huggingface.co/nex-agi/Nex-N2.5-mini
  nex-agi | 点赞 749 | 下载 3,970
  基于 qwen3_5_moe 的迷你 MoE 模型，兼顾文本与图像输入，是 MoE 路线的新尝试。

- **nex-agi/Nex-N2.5-Pro** — https://huggingface.co/nex-agi/Nex-N2.5-Pro
  nex-agi | 点赞 619 | 下载 30,289
  Nex-N2.5 系列的 Pro 版本，同为 qwen3_5_moe 多模态架构，下载量高于 mini 版。

- **Edge0/Edge0-35B-A3B-preview** — https://huggingface.co/Edge0/Edge0-35B-A3B-preview
  Edge0 | 点赞 668 | 下载 3,552
  面向边缘推理的 MoE 模型，采用 mlx 格式，主打端侧部署，预览版即获较高关注。

- **openai-community/gpt2** — https://huggingface.co/openai-community/gpt2
  openai-community | 点赞 4,020 | 下载 15,158,496
  经典常青模型，长期占据下载榜，仍是教学与基线实验的首选。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **MiniMaxAI/MiniMax-H3** — https://huggingface.co/MiniMaxAI/MiniMax-H3
  MiniMaxAI | 点赞 5,216 | 下载 4,819,845
  MiniMax 新一代视频生成模型，支持文/图生视频，是今日视频赛道点赞最高者。

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Lightricks | 点赞 3,666 | 下载 1,548,442
  LTX 系列升级版，单文件扩散格式，覆盖图生视频、文生视频与视频生视频全流程。

- **deepseek-ai/DeepSeek-V4.1-Flash** — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
  deepseek-ai | 点赞 2,100 | 下载 244,457
  DeepSeek 新一代 Flash 模型，支持图文输入，点赞数在榜单中排名靠前。

- **zai-org/GLM-5.3-Flash** — https://huggingface.co/zai-org/GLM-5.3-Flash
  zai-org | 点赞 2,293 | 下载 1,576,209
  GLM-5.3 的 Flash 版本，glm5_next 架构多模态对话模型，下载量已破百万。

- **Qwen/Qwen3.8-Flash-Next** — https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  Qwen | 点赞 5,154 | 下载 624,390
  采用 qwen4_exp 标签的新一代 Flash 模型，是 Qwen 冲刺更高性能的探索版本。

- **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp** — https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp
  deepseek-ai | 点赞 891 | 下载 518,558
  DeepSeek V4 Flash 视觉实验版，与 V4.1-Flash 形成视觉能力双线。

- **m-a-p/YuE2-3B** — https://huggingface.co/m-a-p/YuE2-3B
  m-a-p | 点赞 369 | 下载 3,707
  3B 音乐生成模型，支持符号规划与智能体式编辑，是音频生成方向的代表。

- **WarmBloodAban/Minimax-h3_Singularity** — https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity
  WarmBloodAban | 点赞 363 | 下载 123,491
  基于 MiniMax-H3 的社区视频生成变体，覆盖文/图/视频多种生成任务。

- **Viggle/Viggle-Animate** — https://huggingface.co/Viggle/Viggle-Animate
  Viggle | 点赞 210 | 下载 0
  视频编辑模型，主打角色替换与视频到视频转换，刚发布尚未产生下载。

- **Qwen/Qwen-Drive-1.0-4B** — https://huggingface.co/Qwen/Qwen-Drive-1.0-4B
  Qwen | 点赞 192 | 下载 4,119
  面向自动驾驶的 4B 多模态模型，涉及运动规划，是 Qwen 切入垂直场景的新品。

- **tencent/AuK** — https://huggingface.co/tencent/AuK
  tencent | 点赞 164 | 下载 1,202
  腾讯零样本 TTS 模型，支持语音克隆，属高潜力但早期阶段的音频模型。

- **microsoft/VibeVoice-ASR-Streaming-7B** — https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B
  microsoft | 点赞 231 | 下载 2,594
  微软流式语音识别模型，vibevoice 架构，面向实时转录场景。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **sentence-transformers/all-MiniLM-L6-v2** — https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
  sentence-transformers | 点赞 5,907 | 下载 252,928,721
  嵌入模型绝对标杆，下载量超 2.5 亿，仍是检索与相似度任务的事实标准。

- **google/timesfm-3.0-pytorch** — https://huggingface.co/google/timesfm-3.0-pytorch
  google | 点赞 769 | 下载 797,832
  Google 时间序列预测模型，专用于 forecasting 任务，是榜单中少见的时序专精模型。

- **google-bert/bert-base-uncased** — https://huggingface.co/google-bert/bert-base-uncased
  google-bert | 点赞 3,283 | 下载 46,513,338
  NLP 领域经典基线，长期稳定在榜单，仍是 fill-mask 任务首选。

- **distilbert/distilbert-base-uncased** — https://huggingface.co/distilbert/distilbert-base-uncased
  distilbert | 点赞 1,432 | 下载 7,325,282
  BERT 蒸馏轻量版，凭效率优势持续被引用与下载。

- **openai/clip-vit-base-patch32** — https://huggingface.co/openai/clip-vit-base-patch32
  openai | 点赞 1,491 | 下载 21,331,361
  零样本图像分类经典模型，多模态领域的长期基础设施。

- **facebook/mms-300m** — https://huggingface.co/facebook/mms-300m
  facebook | 点赞 520 | 下载 12,880
  基于 wav2vec2 的多语言语音预训练模型，服务低资源语言场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
  unsloth | 点赞 3,979 | 下载 11,005,880
  Qwen3.8-27B 官方量化衍生，下载量破千万，反映强烈的本地部署需求。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
  ISTA-DASLab | 点赞 933 | 下载 769,557
  Qwen3.8-27B 的混合精度量化版本，采用 GSQ/RCO 技术，面向研究型量化场景。

- **DavidAU/Qwen3.8-27B-TURBO-...-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU | 点赞 599 | 下载 750,591
  社区激进微调 + GGUF 量化版本，主打去审查与编码优化，属典型社区二创。

- **dealignai/GLM-5.3-CYBERSECURITY-FP8** — https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8
  dealignai | 点赞 421 | 下载 30,310
  基于 GLM-5.3 的网络安全方向去审查微调，FP8 量化，垂直领域社区版本。

- **openbmb/MiniCPM5-2B-GGUF** — https://huggingface.co/openbmb/MiniCPM5-2B-GGUF
  openbmb | 点赞 209 | 下载 99,716
  MiniCPM5-2B 的官方 GGUF 版本，服务轻量本地推理。

---

## 生态信号

今日榜单最鲜明的信号是 **Qwen 生态的压倒性规模**：Qwen3.8-27B 本体加上 unsloth、ISTA-DASLab、DavidAU 三个 GGUF/量化衍生版本，合计贡献了超过 1,300 万次下载，说明开源权重一旦形成基础模型，社区量化会迅速放大其触达。**开源权重仍占据榜单绝对主导**，纯闭源模型几乎不可见，DeepSeek、MiniMax、GLM、Qwen 均以开放权重方式发布 Flash 系列。**MoE 与端侧**成为新热点（Edge0 的 mlx 边缘推理、Nex 系列的 qwen3_5_moe）。**去审查微调活动**活跃（DavidAU、dealignai），但下载量相对克制，属于长尾需求。

---

## 值得探索

1. **Qwen/Qwen3.8-27B**（https://huggingface.co/Qwen/Qwen3.8-27B）— 今日双料冠军，配合同日上榜的 unsloth GGUF 量化版本，是评估当前开源多模态对话能力上限的首选，也是理解整个 Qwen 生态的入口。

2. **MiniMaxAI/MiniMax-H3**（https://huggingface.co/MiniMaxAI/MiniMax-H3）— 视频生成赛道点赞最高、下载近 482 万，支持文/图生视频，代表该领域当前最受认可的开放方案，值得与 LTX-2.5 对照研究。

3. **google/timesfm-3.0-pytorch**（https://huggingface.co/google/timesfm-3.0-pytorch）— 榜单中罕见的时序预测专精模型，下载近 80 万，对非生成类、垂直结构化任务的研究者具有独特参考价值。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*