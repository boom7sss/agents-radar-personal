# Hugging Face 热门模型日报 2026-09-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-19 13:24 UTC

---

# Hugging Face 热门模型日报（2026-09-19）

## 今日速览

今日榜单由 Qwen3.8 家族全面主导——Qwen/Qwen3.8-27B 以 15,704 点赞高居榜首，其 GGUF 量化版、社区微调版与第三方量化版合计占据近十个席位。多模态生成赛道热度不减，MiniMax-H3 与 Lightricks/LTX-2.5 两大视频模型分别录得 5,477 和 4,386 点赞。量化活动异常活跃，ISTA-DASLab 的 GSQ-RCO 混合精度方案与 prism-ml 的三值（ternary）2-bit 模型同时上榜，显示极端压缩正从实验走向可用。此外，DeepSeek-V4.1-Flash 与老牌 Llama-3.1-8B-Instruct、all-MiniLM-L6-v2 仍在榜，说明经典基座与嵌入模型具备长期生命力。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 点赞 15,704 | 下载 7,365,368
  今日榜首，Qwen 最新一代 27B 多模态对话基座，是整个榜单量化与微调生态的共同源头。

- **[meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct)**
  meta-llama | 点赞 7,736 | 下载 5,919,746
  经典开源指令模型，长期稳居榜单，仍是社区微调与部署的默认基座之一。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  Qwen | 点赞 5,427 | 下载 742,586
  Qwen 新一代 Flash 系列，标签出现 qwen4_exp，可能是下一代架构的预览版本。

- **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)**
  Edge0 | 点赞 3,466 | 下载 68,403
  面向端侧推理的 MoE 模型（35B 总参数 / 3B 激活），MLX 格式，主打边缘部署。

- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)**
  zai-org | 点赞 2,467 | 下载 2,905,932
  智谱 GLM-5.3 Flash 多模态对话模型，下载量近 300 万，为本周国产模型中的强势选手。

- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)**
  openbmb | 点赞 1,576 | 下载 389,555
  面壁智能 MiniCPM 第五代 2B 小模型，延续该系列在轻量端侧的一贯定位。

- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)**
  TokenRhythm | 点赞 914 | 下载 11,692
  基于 qwen3_5_text 的 9B 文本模型，标签强调 agentic 能力，面向智能体场景。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)**
  XingChen-AGI | 点赞 586 | 下载 7,278
  29B 总参数 / 4B 激活的 MoE 对话模型，属新晋玩家的小规模预览发布。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)**
  harshatheg | 点赞 412 | 下载 0
  基于 Qwen-2.5-1B 的 MLX 实验模型，主打并行解码与约束生成，面向 Apple Silicon。

- **[Agnes-AI/Agnes-3.0-Flash](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)**
  Agnes-AI | 点赞 236 | 下载 1,474
  Agnes-AI 的 Flash 系列多模态文本生成模型，热度尚在早期。

- **[internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview)**
  internlm | 点赞 183 | 下载 806
  上海 AI Lab 的 MoE 预览模型，标签关联 arXiv:2609.15818，偏研究性质。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)**
  MiniMaxAI | 点赞 5,477 | 下载 4,299,737
  今日视频生成最强音，支持文生视频与图生视频，下载量超 400 万，并已催生社区衍生版。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 点赞 4,386 | 下载 1,607,815
  覆盖图生视频、文生视频、视频生视频的全能视频模型，单文件 diffusion 格式便于上手。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  deepseek-ai | 点赞 3,256 | 下载 482,270
  DeepSeek 新一代 Flash 多模态模型，支持图文输入，已有社区去审查版衍生。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)**
  m-a-p | 点赞 845 | 下载 15,446
  音乐生成模型，引入符号规划与智能体式编辑，代表文本到音乐的新方向。

- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)**
  WarmBloodAban | 点赞 511 | 下载 231,197
  MiniMax-H3 的社区衍生视频模型，是头部视频模型被快速二次开发的典型样本。

- **[tencent/AuK](https://huggingface.co/tencent/AuK)**
  tencent | 点赞 317 | 下载 3,355
  腾讯发布的零样本 TTS 模型，支持语音克隆，押注音频生成赛道。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  TaichuAI | 点赞 193 | 下载 2,926
  中文多模态视觉语言模型，标签突出空间推理能力。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)**
  sentence-transformers | 点赞 6,076 | 下载 254,149,235
  嵌入模型常青树，下载量逾 2.5 亿，长期是 RAG 与语义检索的事实标配。

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  convaiinnovations | 点赞 308 | 下载 0
  文本分类模型，标签为 system-one 与 calibrated-decisions，指向低延迟决策场景。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)**
  AlexWortega | 点赞 173 | 下载 0
  基于 qwen3.5 的 NLI 交叉编码器，用于文本分类与推理判断。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  unsloth | 点赞 4,349 | 下载 7,118,363
  Qwen3.8-27B 的官方量化搭档，下载量超 700 万，是本地部署的首选入口。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  ISTA-DASLab | 点赞 1,387 | 下载 1,154,265
  GSQ-RCO 混合精度量化方案，学术机构出品，下载量已破百万。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 点赞 937 | 下载 1,256,962
  社区知名微调者 DavidAU 的堆叠式微调产物，标签含 heretic/uncensored，代表了社区长名微调文化。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  prism-ml | 点赞 1,084 | 下载 1,516,960
  三值（2-bit）极端量化模型，下载量超 150 万，显示极低比特量化已获实际采用。

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)**
  ukisai | 点赞 466 | 下载 8,761
  Qwen3.8-27B 的社区微调版，主打高效思考（efficient-thinking），并有对应 GGUF 版本。

- **[ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)**
  ukisai | 点赞 295 | 下载 120,740
  上述 Swift 微调版的 llama.cpp 量化版，形成“微调 + 量化”配套发布。

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)**
  prism-ml | 点赞 218 | 下载 23,111
  同一三值模型的 MLX 2-bit 版本，面向 Apple Silicon 本地推理。

- **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)**
  dealignai | 点赞 295 | 下载 34,230
  DeepSeek-V4.1-Flash 的去审查 FP8 量化版，属社区对齐改造的代表。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  ISTA-DASLab | 点赞 148 | 下载 31,099
  将 GSQ-RCO 量化流程应用到 Qwen3.8-Flash-Next 上的配套版本。

## 生态信号

Qwen3.8 家族是今日绝对主角：官方基座、unsloth 官方量化、ISTA-DASLab 学术量化、DavidAU 与 ukisai 社区微调，一条完整的“基座—量化—微调”链路在同一周内全部上榜，说明头部开源模型的价值正日益由生态衍生品来放大。视频生成方面，MiniMax-H3 与 LTX-2.5 双双高热度，且 MiniMax-H3 已出现社区衍生版本，多模态生成正复制 LLM 的社区扩散模式。量化方向上，GSQ-RCO 混合精度与三值 2-bit 同时获得百万级下载，极端压缩从论文走向生产。相比之下，闭源权重未见踪影，榜单仍由开放权重全面主导。

## 值得探索

1. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 在 27B 规模上验证 GSQ-RCO 混合精度量化的实际质量损失，对需要本地部署大模型的人有直接参考价值，且已有百万级下载背书。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三值 2-bit 是当前压缩极限的代表，值得研究其在 27B 规模上的可用性边界，并可与同作者的 MLX 版本对比跨平台表现。

3. **[Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)** — MoE + 端侧推理的组合，35B 总参 / 3B 激活的稀疏结构在 MLX 上的效率表现，是端侧大模型路线的重要观察点。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*