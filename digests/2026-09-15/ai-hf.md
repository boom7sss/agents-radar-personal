# Hugging Face 热门模型日报 2026-09-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-15 12:08 UTC

---

# Hugging Face 热门模型日报（2026-09-15）

## 今日速览

今日榜单最突出的信号是 Qwen3.8 生态的全面爆发：官方 Qwen3.8-27B 以 15,200 点赞、770 万下载领跑，其量化与衍生版本（unsloth GGUF、ISTA-DASLab GSQ-RCO、DavidAU 社区微调）合计下载超千万，形成完整的"基座—量化—微调"链条。多模态方向，DeepSeek-V4.1-Flash 与 GLM-5.3-Flash 两个"Flash"系列对话模型热度居高，视频生成则由 MiniMax-H3 与 Lightricks LTX-2.5 双雄占据。MoE 架构在中小尺寸模型上密集出现（Edge0、nex-agi、TokenRhythm 均标注 qwen3_5_moe）。同时，经典老模型（all-MiniLM-L6-v2、gpt2、bert-base-uncased）继续贡献榜单中最大的下载量，说明基础设施型模型仍是生态底座。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen | 点赞 15,200 | 下载 7,702,543
  本周榜首，阿里 Qwen3.8 系列旗舰，支持图文输入与对话，是当前衍生与量化生态的核心基座。

- **Qwen/Qwen3.8-Flash-Next** — https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  Qwen | 点赞 5,243 | 下载 667,672
  同门轻量高速版本，采用 qwen4_exp 架构，主打低延迟对话与多模态交互。

- **Edge0/Edge0-35B-A3B-preview** — https://huggingface.co/Edge0/Edge0-35B-A3B-preview
  Edge0 | 点赞 2,379 | 下载 17,853
  基于 qwen3_5_moe 的端侧 MoE 模型（35B 总参 / 3B 激活），以 mlx 格式发布，面向 Apple 设备本地推理。

- **zai-org/GLM-5.3-Flash** — https://huggingface.co/zai-org/GLM-5.3-Flash
  zai-org | 点赞 2,353 | 下载 1,992,040
  智谱 GLM 系列新 Flash 版本，基于 glm5_next，支持图文理解与对话，下载量已近 200 万。

- **TokenRhythm/NeoHorse-1-4B** — https://huggingface.co/TokenRhythm/NeoHorse-1-4B
  TokenRhythm | 点赞 1,913 | 下载 11,904
  小尺寸 agentic 文本模型，基于 qwen3_5_text，主打智能体任务场景。

- **openbmb/MiniCPM5-2B** — https://huggingface.co/openbmb/MiniCPM5-2B
  openbmb | 点赞 1,422 | 下载 271,754
  面壁 MiniCPM 第五代 2B 小模型，llama 架构，下载量远超同类小模型，端侧部署友好。

- **XHToken/Spark-X2.5-4B** — https://huggingface.co/XHToken/Spark-X2.5-4B
  XHToken | 点赞 1,188 | 下载 25,650
  4B 级通用文本生成模型，spark2_5 架构，属新晋中小模型阵营。

- **nex-agi/Nex-N2.5-mini** — https://huggingface.co/nex-agi/Nex-N2.5-mini
  nex-agi | 点赞 798 | 下载 5,202
  Nex N2.5 系列小尺寸版本，MoE 架构并支持图文输入，同系列还有 Pro 版（点赞 642 / 下载 30,881，https://huggingface.co/nex-agi/Nex-N2.5-Pro）。

- **meta-llama/Llama-3.1-8B-Instruct** — https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct
  meta-llama | 点赞 7,617 | 下载 5,712,837
  常青指令模型，仍稳居点赞前列，是社区微调与对比的长期基准。

- **openai-community/gpt2** — https://huggingface.co/openai-community/gpt2
  openai-community | 点赞 4,083 | 下载 15,311,786
  经典基座，下载量超 1500 万，教学与轻量实验的首选。

- **Agnes-AI/Agnes-3.0-Flash** — https://huggingface.co/Agnes-AI/Agnes-3.0-Flash
  Agnes-AI | 点赞 167 | 下载 898
  新上榜的 Flash 类图文对话模型，热度尚低，可作早期观察对象。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **deepseek-ai/DeepSeek-V4.1-Flash** — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
  deepseek-ai | 点赞 2,580 | 下载 325,712
  本周多模态热度第一，DeepSeek V4.1 高速版本，支持图文到文本，已出现社区去审查衍生物。

- **MiniMaxAI/MiniMax-H3** — https://huggingface.co/MiniMaxAI/MiniMax-H3
  MiniMaxAI | 点赞 5,307 | 下载 4,906,989
  视频生成主力模型，基于 diffusers，覆盖文生视频与图生视频，下载近 500 万。

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Lightricks | 点赞 3,923 | 下载 1,580,077
  Lightricks 视频生成新版本，支持图生视频、文生视频与视频到视频，单文件 diffusion 格式便于部署。

- **WarmBloodAban/Minimax-h3_Singularity** — https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity
  WarmBloodAban | 点赞 405 | 下载 147,766
  基于 MiniMax-H3 的社区视频生成微调版本。

- **Alissonerdx/Minimax-H3-ComfyUI** — https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI
  Alissonerdx | 点赞 163 | 下载 14,533
  面向 ComfyUI 的 MiniMax-H3 LoRA，说明视频生成正在快速接入工作流工具。

- **m-a-p/YuE2-3B** — https://huggingface.co/m-a-p/YuE2-3B
  m-a-p | 点赞 517 | 下载 6,716
  音乐生成模型，支持符号规划与智能体式编辑，是文本到音频方向的代表。

- **tencent/AuK** — https://huggingface.co/tencent/AuK
  tencent | 点赞 234 | 下载 2,390
  腾讯零样本 TTS 模型，支持语音克隆，音频方向新入榜。

- **openai/clip-vit-base-patch32** — https://huggingface.co/openai/clip-vit-base-patch32
  openai | 点赞 1,531 | 下载 21,504,830
  经典图文对齐模型，下载超 2100 万，仍是多模态检索与分类的默认选择。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **sentence-transformers/all-MiniLM-L6-v2** — https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
  sentence-transformers | 点赞 5,981 | 下载 254,208,155
  全榜下载量最高（超 2.5 亿），嵌入与语义相似度的事实标准。

- **google/timesfm-3.0-pytorch** — https://huggingface.co/google/timesfm-3.0-pytorch
  google | 点赞 793 | 下载 865,343
  Google 时序预测基础模型第三代，时间序列方向少数上榜的专业模型。

- **google-bert/bert-base-uncased** — https://huggingface.co/google-bert/bert-base-uncased
  google-bert | 点赞 3,342 | 下载 46,672,496
  经典填空/编码模型，下载超 4600 万，仍是 NLP 下游任务的基线。

- **distilbert/distilbert-base-uncased** — https://huggingface.co/distilbert/distilbert-base-uncased
  distilbert | 点赞 1,442 | 下载 7,314,069
  BERT 蒸馏版，轻量高效，长期位居实用工具模型之列。

- **facebook/mms-300m** — https://huggingface.co/facebook/mms-300m
  facebook | 点赞 537 | 下载 22,228
  基于 wav2vec2 的多语言语音预训练模型，语音方向基础设施。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
  unsloth | 点赞 4,124 | 下载 9,456,089
  Qwen3.8-27B 的官方级 GGUF 量化，下载超 945 万，是本地部署该基座的主要入口。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
  ISTA-DASLab | 点赞 1,083 | 下载 884,926
  学术团队推出的混合精度 GSQ/RCO 量化版本，代表量化方法研究的前沿尝试。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU | 点赞 700 | 下载 949,394
  典型的社区"缝合式"微调：基于 unsloth 流程，主打去审查与编码增强。

- **dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8** — https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8
  dealignai | 点赞 185 | 下载 5,783
  DeepSeek-V4.1-Flash 的去审查 FP8 量化版，反映热门基座发布后衍生的速度。

- **ukisai/Swift-Qwen3.8-27b** — https://huggingface.co/ukisai/Swift-Qwen3.8-27b
  ukisai | 点赞 198 | 下载 1,355
  Qwen3.8-27B 的社区精简微调版本，热度较低。

## 生态信号

本周生态由 Qwen3.8 家族主导：一个官方基座同时带动官方 Flash 版、unsloth 量化、ISTA-DASLab 混合精度量化与 DavidAU 社区微调四条支线，说明当前开源生态的"发布—量化—微调"闭环已高度成熟。MoE 架构向中小尺寸渗透明显（Edge0 35B-A3B、nex-agi、TokenRhythm 均基于 qwen3_5_moe），端侧推理（mlx）成为独立卖点。视频生成方面，MiniMax-H3 与 LTX-2.5 的高下载量显示多模态生成需求旺盛，且已出现 ComfyUI LoRA 等工具化衍生。值得注意的量化活动集中在 GGUF 与混合精度（GSQ/RCO、FP8），社区微调中"去审查（uncensored）"仍是高频标签。总体看，开源权重模型在热度与下载两端均占绝对优势，闭源模型未出现在本榜。

## 值得探索

1. **Qwen/Qwen3.8-27B + unsloth GGUF 量化版** — https://huggingface.co/Qwen/Qwen3.8-27B ｜ https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
   想研究当前最强开源多模态对话基座，这一对组合是性价比最高的入口：官方权重保证能力完整，GGUF 版本可直接本地部署，且生态衍生丰富，便于做对比实验。

2. **Edge0/Edge0-35B-A3B-preview** — https://huggingface.co/Edge0/Edge0-35B-A3B-preview
   35B 总参仅激活 3B 的 MoE 端侧模型，采用 mlx 格式，是观察"大模型能力 + 小激活成本"这一技术路线在 Apple 设备上落地效果的良好样本。

3. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
   对量化方法研究感兴趣的话，这个混合精度（GSQ/RCO）方案与 unsloth 标准 GGUF 形成直接对照，可用于评估不同量化策略的质量—体积权衡。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*