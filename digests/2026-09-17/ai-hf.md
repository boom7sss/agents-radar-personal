# Hugging Face 热门模型日报 2026-09-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-17 12:05 UTC

---

# Hugging Face 热门模型日报（2026-09-17）

## 今日速览

本周榜单由 Qwen 家族主导：**Qwen/Qwen3.8-27B** 以 15,475 点赞、745 万下载断层领跑，其 GGUF 量化版（unsloth）单周下载高达 820 万，衍生微调与量化版本大量涌入榜单。DeepSeek 推出 V4.1-Flash（2,934 点赞、39 万下载），MiniMax-H3 与 Lightricks LTX-2.5 则代表视频生成方向的强势存在。MoE 架构与 edge 推理成为新标签热点，社区微调明显向"去审查/角色化"（uncensored、heretic）和端侧（MLX、GGUF）两端分化。经典基座模型（all-MiniLM-L6-v2、gpt2、bert）仍以数千万级下载稳居长尾流量。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen | 点赞 15,475 | 下载 7,456,257
  本周榜首。Qwen3.5 世代旗舰多模态对话模型，下载与点赞双高，是整个衍生生态（量化、微调）的源头基座。

- **deepseek-ai/DeepSeek-V4.1-Flash** — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
  deepseek-ai | 点赞 2,934 | 下载 390,657
  DeepSeek V4.1 世代的轻量 Flash 版本，支持图文输入，凭官方品牌与高效定位快速上榜。

- **Qwen/Qwen3.8-Flash-Next** — https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  Qwen | 点赞 5,341 | 下载 706,052
  搭载 qwen4_exp 标签的下一代 Flash 预览，被视为 Qwen 4 世代的先行信号。

- **zai-org/GLM-5.3-Flash** — https://huggingface.co/zai-org/GLM-5.3-Flash
  zai-org | 点赞 2,413 | 下载 2,446,115
  智谱 GLM-5.3 世代轻量多模态模型，下载量可观，是国产开源对话模型的稳定竞争者。

- **openbmb/MiniCPM5-2B** — https://huggingface.co/openbmb/MiniCPM5-2B
  openbmb | 点赞 1,528 | 下载 329,713
  面壁智能 2B 级小模型，主打端侧可用，下载量远超点赞，实用性强。

- **TokenRhythm/NeoHorse-1-4B** — https://huggingface.co/TokenRhythm/NeoHorse-1-4B
  TokenRhythm | 点赞 2,195 | 下载 19,789
  基于 qwen3_5_text 的 4B agentic 模型，点赞高而下载低，属早期关注型发布。

- **XHToken/Spark-X2.5-4B** — https://huggingface.co/XHToken/Spark-X2.5-4B
  XHToken | 点赞 1,251 | 下载 28,347
  spark2_5 架构的 4B 文本生成模型，新锐团队的小模型尝试。

- **nex-agi/Nex-N2.5-mini** — https://huggingface.co/nex-agi/Nex-N2.5-mini
  nex-agi | 点赞 826 | 下载 7,347
  基于 qwen3_5_moe 的 mini 多模态模型，体现 MoE 向小体量迁移的趋势。

- **meta-llama/Llama-3.1-8B-Instruct** — https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct
  meta-llama | 点赞 7,679 | 下载 5,887,953
  经典指令模型长青款，累计点赞居全榜前列，仍是社区微调首选基座。

- **openai-community/gpt2** — https://huggingface.co/openai-community/gpt2
  openai-community | 点赞 4,131 | 下载 15,558,794
  历史性基座模型，凭借教学与流水线默认地位维持千万级下载。

- **Agnes-AI/Agnes-3.0-Flash** — https://huggingface.co/Agnes-AI/Agnes-3.0-Flash
  Agnes-AI | 点赞 207 | 下载 1,223
  新团队多模态 Flash 模型，热度尚低，处于早期曝光阶段。

### 🎨 多模态与生成（图像、视频、音频）

- **MiniMaxAI/MiniMax-H3** — https://huggingface.co/MiniMaxAI/MiniMax-H3
  MiniMaxAI | 点赞 5,402 | 下载 4,576,471
  本周视频生成头号模型，支持文本/图像到视频，点赞与下载双高，扩散生态核心扩散源。

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Lightricks | 点赞 4,165 | 下载 1,602,865
  支持图/文/视频到视频的多向生成模型，是开源视频生成的重要生产级选择。

- **Edge0/Edge0-35B-A3B-preview** — https://huggingface.co/Edge0/Edge0-35B-A3B-preview
  Edge0 | 点赞 3,258 | 下载 37,131
  MoE 端侧预览模型（35B 总参 / 3B 激活），主打 edge-inference，代表稀疏架构下沉端侧的新方向。

- **m-a-p/YuE2-3B** — https://huggingface.co/m-a-p/YuE2-3B
  m-a-p | 点赞 684 | 下载 11,626
  音乐生成模型，支持符号规划与 agentic 编辑，音频生成领域少见的 agent 化尝试。

- **tencent/AuK** — https://huggingface.co/tencent/AuK
  tencent | 点赞 282 | 下载 3,024
  腾讯零样本 TTS 与声音克隆模型，音频方向新发布。

- **WarmBloodAban/Minimax-h3_Singularity** — https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity
  WarmBloodAban | 点赞 465 | 下载 181,811
  基于 MiniMax-H3 的社区视频生成微调，下载量远超点赞，反映社区对 H3 生态的二次开发热情。

- **TaichuAI/ZDTaichu5.0-9B** — https://huggingface.co/TaichuAI/ZDTaichu5.0-9B
  TaichuAI | 点赞 164 | 下载 476
  紫东太初 5.0 多模态视觉语言模型，主打空间推理，属早期小众发布。

### 🔧 专用模型（嵌入、语音、预训练）

- **sentence-transformers/all-MiniLM-L6-v2** — https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
  sentence-transformers | 点赞 6,040 | 下载 255,618,777
  全榜下载之王（2.55 亿），句子相似度任务的绝对默认选择。

- **google-bert/bert-base-uncased** — https://huggingface.co/google-bert/bert-base-uncased
  google-bert | 点赞 3,363 | 下载 47,631,021
  经典掩码语言模型，仍是 NLP 教学与基线的事实标准。

- **openai/clip-vit-base-patch32** — https://huggingface.co/openai/clip-vit-base-patch32
  openai | 点赞 1,556 | 下载 21,776,108
  零样本图像分类经典模型，多模态检索长尾主力。

- **distilbert/distilbert-base-uncased** — https://huggingface.co/distilbert/distilbert-base-uncased
  distilbert | 点赞 1,469 | 下载 7,456,019
  蒸馏版 BERT，轻量场景长期常青。

- **facebook/mms-300m** — https://huggingface.co/facebook/mms-300m
  facebook | 点赞 563 | 下载 22,039
  多语言语音预训练模型，语音基础研究常用。

- **harshatheg/Qwen-2.5-1B-RLCD** — https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD
  harshatheg | 点赞 200 | 下载 0
  基于 MLX、支持结构化/并行/约束解码的 Apple Silicon 实验模型，下载为 0，属研究型早期发布。

### 📦 微调与量化

- **unsloth/Qwen3.8-27B-GGUF** — https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
  unsloth | 点赞 4,239 | 下载 8,205,000
  本周量化下载冠军。Qwen3.8-27B 官方量化版，下载量甚至超过原模型，说明 GGUF 端侧需求旺盛。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
  ISTA-DASLab | 点赞 1,229 | 下载 1,027,602
  采用 GSQ + RCO 混合精度方案的学术量化版，研究价值突出。

- **DavidAU/Qwen3.8-27B-...-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU | 点赞 824 | 下载 1,116,038
  超长命名聚合多种微调技术的社区去审查量化版，下载破百万，折射 uncensored 微调的稳定需求。

- **ukisai/Swift-Qwen3.8-27b** — https://huggingface.co/ukisai/Swift-Qwen3.8-27b
  ukisai | 点赞 356 | 下载 3,221
  Qwen3.8-27B 社区快速微调版。

- **ukisai/Swift-Qwen3.8-27B-GGUF** — https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF
  ukisai | 点赞 210 | 下载 72,862
  上一版本的 GGUF 量化版，主打 efficient-thinking。

- **dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8** — https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8
  dealignai | 点赞 253 | 下载 32,011
  DeepSeek-V4.1-Flash 的 FP8 去审查社区版。

---

## 生态信号

Qwen 家族（3.8-27B 及其 3.5/4 世代变体）本周势头最强，从旗舰、Flash-Next 到 MoE mini 全面铺开，并带动了一批量化、微调衍生物。DeepSeek、MiniMax、GLM、Lightricks 则在各自模态分割市场。开源权重仍主导榜单流量：GGUF 量化下载量普遍超过原模型（Qwen3.8-27B 原版 745 万 vs unsloth 量化版 820 万），说明端侧部署（MLX、GGUF、FP8）已是权重分发的核心形态。社区微调呈现两极：一端是 uncensored / heretic / 角色化聚合微调，一端是 Apple Silicon 端侧与约束解码实验。值得注意的新信号是 MoE 正下沉到 2B–4B 小体量与 edge 场景（Edge0-35B-A3B、Nex-N2.5-mini）。

## 值得探索

1. **Qwen/Qwen3.8-27B**（https://huggingface.co/Qwen/Qwen3.8-27B）— 本周生态中心，无论是直接使用还是作为微调/量化基座，都值得优先评估；配合 unsloth GGUF 版（https://huggingface.co/unsloth/Qwen3.8-27B-GGUF）可在本地快速试跑。

2. **Edge0/Edge0-35B-A3B-preview**（https://huggingface.co/Edge0/Edge0-35B-A3B-preview）— 3B 激活的 MoE 端侧模型，是观察稀疏架构能否真正落地边缘设备的代表性样本。

3. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**（https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF）— 混合精度量化方案的研究价值高，适合关注量化精度—体积权衡的读者。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*