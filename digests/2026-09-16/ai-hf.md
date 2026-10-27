# Hugging Face 热门模型日报 2026-09-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-16 12:07 UTC

---

# Hugging Face 热门模型日报（2026-09-16）

## 今日速览

今日榜单由 Qwen 家族全面主导：**Qwen/Qwen3.8-27B** 以 15,332 点赞、766 万下载断层领跑，配套的社区量化版本（unsloth GGUF、ISTA-DASLab 混合精度 GGUF）同步冲榜，形成罕见的"基座+量化"双热格局。视频生成赛道热度不减，**MiniMaxAI/MiniMax-H3**（5,362 赞）与 **Lightricks/LTX-2.5**（4,048 赞）双双高企，并已催生 ComfyUI LoRA 等下游生态。MoE 与端侧推理成为新叙事，Edge0 的 35B-A3B 预览版以 2,980 点赞位居榜单第二，但下载仅 2.7 万，呈明显"高关注、低落地"特征。经典基座模型（all-MiniLM-L6-v2、gpt2、bert-base-uncased）仍凭超高下载量稳居长尾，说明基础设施需求未被新模型替代。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 点赞 15,332 | 下载 7,667,556
  今日榜单绝对头部，qwen3_5 架构的多模态对话模型，点赞与下载量均为断层第一，是整个生态量化与微调活动的基座来源。

- **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)**
  Edge0 | 点赞 2,980 | 下载 27,759
  基于 qwen3_5_moe 的 MoE 端侧推理预览版，位居榜单第二，但下载量偏低，反映其仍处早期尝鲜阶段。

- **[TokenRhythm/NeoHorse-1-4B](https://huggingface.co/TokenRhythm/NeoHorse-1-4B)**
  TokenRhythm | 点赞 2,091 | 下载 16,163
  4B 规模轻量文本生成模型，主打 agentic 能力，小体量+智能体定位契合端侧与本地部署需求。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)**
  openbmb | 点赞 1,487 | 下载 324,322
  MiniCPM 系列 2B 小模型，超 32 万下载显示其在轻量部署场景中的稳定实用价值。

- **[XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)**
  XHToken | 点赞 1,221 | 下载 27,191
  spark2_5 架构的 4B 文本生成模型，属于中量级新玩家。

- **[nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini)** 与 **[nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro)**
  nex-agi | mini：点赞 817 / 下载 6,837；Pro：点赞 656 / 下载 31,251
  同一厂商的 qwen3_5_moe 双版本，均支持图文输入与文本生成，走"小+大"组合路线。

- **[openai-community/gpt2](https://huggingface.co/openai-community/gpt2)**（点赞 4,112 / 下载 15,584,259）与 **[meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)**（点赞 7,645 / 下载 5,861,705）
  经典基座与指令模型，点赞数仍居前列，长期作为教学、基线对照与微调起点。

- **新晋小模型**：[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)（293 赞）、[Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)（192 赞），点赞与下载均较低，属早期试水。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  MiniMaxAI | 点赞 5,362 | 下载 4,689,062
  支持文生/图生/图文生视频的 diffusers 模型，视频生成赛道旗舰，已形成 LoRA 与 ComfyUI 下游生态。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 点赞 4,048 | 下载 1,616,663
  单文件扩散模型，覆盖图生视频、文生视频、视频生视频，下载量超 160 万，商用级视频工具代表。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  Qwen | 点赞 5,292 | 下载 689,347
  基于 qwen4_exp 的快速多模态对话模型，与 Qwen3.8-27B 共同构成 Qwen 双旗舰。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  deepseek-ai | 点赞 2,774 | 下载 366,459
  deepseek_v41 架构的图文转文本模型，DeepSeek 在多模态方向的主力发布。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
  zai-org | 点赞 2,382 | 下载 2,244,085
  glm5_next 架构图文对话模型，下载超 220 万，是国产多模态阵营的强力选手。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)**
  WarmBloodAban | 点赞 437 | 下载 164,451
  基于 MiniMax-H3 的社区视频生成衍生版，覆盖文生/图生/视频生视频。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)**
  m-a-p | 点赞 597 | 下载 9,391
  符号规划与智能体编辑驱动的音乐生成模型，音频生成细分赛道的特色作品。

- **[tencent/AuK](https://huggingface.co/tencent/AuK)**
  tencent | 点赞 264 | 下载 2,753
  零样本 TTS 与声音克隆模型，腾讯在语音合成方向的入场作品。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)**
  sentence-transformers | 点赞 6,014 | 下载 256,481,161
  句子相似度嵌入模型的绝对标杆，累计下载超 2.5 亿，RAG 与语义检索的事实标准。

- **[openai/clip-vit-base-patch32](https://huggingface.co/openai/clip-vit-base-patch32)**
  openai | 点赞 1,544 | 下载 21,790,053
  零样本图像分类经典模型，多模态检索与对齐任务的基础组件。

- **[facebook/mms-300m](https://huggingface.co/facebook/mms-300m)**
  facebook | 点赞 552 | 下载 22,119
  基于 wav2vec2 的多语言语音预训练模型，多语种语音研究常用基座。

- **[google-bert/bert-base-uncased](https://huggingface.co/google-bert/bert-base-uncased)**（点赞 3,352 / 下载 47,693,504）与 **[distilbert/distilbert-base-uncased](https://huggingface.co/distilbert/distilbert-base-uncased)**（点赞 1,458 / 下载 7,410,664）
  掩码语言模型经典双雄，下载量持续高企，仍是 NLP 教学与轻量任务的首选。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  unsloth | 点赞 4,187 | 下载 8,856,150
  基于 Qwen3.8-27B 的 GGUF 量化，下载量高达 885 万，甚至超过基座本体，是本地部署的核心入口。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  ISTA-DASLab | 点赞 1,161 | 下载 956,964
  采用 GSQ+RCO 混合精度量化的 GGUF，属学术机构对量化方法的前沿探索。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 点赞 759 | 下载 1,049,586
  典型的社区大杂烩式微调量化版，主打去审查与编码增强，下载破百万。

- **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)**
  dealignai | 点赞 217 | 下载 6,826
  DeepSeek-V4.1-Flash 的去审查 FP8 版本。

- **[ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)**
  ukisai | 点赞 166 | 下载 55,309
  主打 efficient-thinking 的 llama.cpp 量化版本。

- **[Alissonerdx/Minimax-H3-ComfyUI](https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI)**
  Alissonerdx | 点赞 194 | 下载 18,680
  MiniMax-H3 的 ComfyUI LoRA 适配版，体现视频模型向工具链下游渗透。

## 生态信号

本期榜单清晰显示 **Qwen3.8 已成为新一轮生态中心**：一个基座模型同时带动 unsloth 与 ISTA-DASLab 两条互不相同的量化路线、多个 Swift 社区微调版，以及 DavidAU 这类衍生改造，量化和微调下载量甚至反超基座，说明本地部署需求是权重扩散的最大动力。**MoE 与端侧推理**成为新叙事，Edge0 的 35B-A3B 以高点赞、低下载位列第二，代表市场对"端侧可跑的大模型"的强烈期待但落地尚早。视频生成方面，MiniMax-H3 与 LTX-2.5 双双高热度并延伸出 LoRA、ComfyUI 下游作品，工具链生态化明显。开源权重阵营由 Qwen、DeepSeek、GLM、MiniMax 等中国团队密集供给，多模态已成为默认形态而非差异化卖点。

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本期生态的绝对枢纽，理解今日榜单上大半量化与微调模型的源头，值得作为一切后续研究的第一站。

2. **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** — 高点赞低下载的反差说明它仍是"少数人已验证、多数人未上手"的前沿方案，是评估 MoE 端侧推理可行性的最佳样本。

3. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 混合精度量化方法的研究型产物，适合关注量化前沿与精度-体积权衡的读者深入对比。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*