# Hugging Face 热门模型日报 2026-09-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-20 12:37 UTC

---

# Hugging Face 热门模型日报（2026-09-20）

## 一、今日速览

今日榜单由 **Qwen3.8-27B** 领跑，以 15,824 点赞、733 万下载成为绝对焦点，其量化、微调、蒸馏版本几乎占据了半个榜单。**DeepSeek-V4.1-Flash**（3,374 赞）与 **MiniMax-H3**（5,509 赞）、**LTX-2.5**（4,498 赞）共同撑起多模态与视频生成热度。值得关注的是 **prism-ml/Ternary-Bonsai-2-27B** 系列掀起的 2-bit 三值量化浪潮，以及 ISTA-DASLab 的 GSQ-RCO 混合精度量化方案。整体看，Qwen 家族生态、超低比特量化和视频生成是本周三大主线。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen / 15,824 / 7,331,932 | 本周榜首的多模态对话旗舰，整个生态的量化与微调都围绕它展开。 |
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen / 5,475 / 761,112 | Qwen 新版 Flash 轻量系列，主打高效推理的对话模型。 |
| [Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | Edge0 / 3,545 / 76,669 | 基于 Qwen3.5-MoE 的 35B-A3B 端侧推理模型，MLX 格式面向 Apple Silicon。 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org / 2,488 / 3,109,084 | 智谱 GLM-5.3 Flash 多模态对话模型，下载量已破 310 万。 |
| [openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B) | openbmb / 1,612 / 420,622 | MiniCPM 第 5 代 2B 小模型，延续轻量高效路线。 |
| [TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B) | TokenRhythm / 973 / 11,913 | 基于 Qwen3.5-text 的 9B Agent 向模型，主打智能体任务。 |
| [m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B) | m-a-p / 895 / 17,403 | 音乐生成模型，结合符号规划与 Agent 化编辑能力。 |
| [convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya) | convaiinnovations / 805 / 0 | 主打"system-one 校准决策"的文本分类模型，无下载但点赞不俗。 |
| [XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B) | XingChen-AGI / 786 / 12,617 | 星辰 4.0 的 29B-A4B MoE 对话模型。 |
| [harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD) | harshatheg / 465 / 0 | 面向 Apple Silicon 的并行解码/约束生成小模型实验。 |
| [ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b) | ukisai / 498 / 10,962 | Qwen3.8-27B 的"高效思考"改动版。 |
| [meta-llama/Llama-3.1-8B-Instruct](https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct) | meta-llama / 7,762 / 5,910,102 | 小模型经典常青树，仍稳定在榜。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|---|---|---|
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI / 5,509 / 4,057,444 | 本周视频生成主力，支持文生/图生视频，衍生微调活跃。 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks / 4,498 / 1,609,559 | LTX 新一代扩散视频模型，覆盖图/文/视频多种到视频任务。 |
| [deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) | deepseek-ai / 3,374 / 496,684 | DeepSeek 新版 Flash 多模态模型，支持图文到文本。 |
| [WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) | WarmBloodAban / 556 / 242,751 | 基于 MiniMax-H3 的社区视频生成微调。 |
| [tencent/AuK](https://huggingface.co/tencent/AuK) | tencent / 336 / 3,471 | 腾讯零样本 TTS 与声音克隆模型。 |
| [TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B) | TaichuAI / 209 / 3,750 | 紫东太初 5.0 多模态视觉语言模型，主打空间推理。 |
| [internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview) | internlm / 205 / 895 | 上海 AI Lab 的 glm_moe_dsa 架构新预览（附 arXiv 引用）。 |
| [Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4](https://huggingface.co/Mothersuperior/yue2-mothersuperior-realaudio-tokenizer-v4) | Mothersuperior / 158 / 0 | Yue2 生态下的音频 tokenizer + LoRA 微调。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|---|---|---|
| [AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev) | AlexWortega / 256 / 0 | 基于 Qwen3.5 的 NLI 交叉编码器，用于文本分类。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 / 点赞 / 下载 | 一句话说明 |
|---|---|---|
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth / 4,406 / 6,941,478 | Qwen3.8-27B 官方级 GGUF 量化，下载量高达 694 万。 |
| [prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf) | prism-ml / 1,366 / 1,908,396 | 2-bit 三值量化，近 190 万下载，本周最火量化实验。 |
| [ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) | ISTA-DASLab / 1,453 / 1,217,204 | GSQ-RCO 混合精度量化方案，学术机构出品。 |
| [DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) | DavidAU / 989 / 1,301,417 | 社区"叠料"式无审查编码微调，命名即卖点。 |
| [ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF) | ukisai / 321 / 136,668 | Swift-Qwen3.8 的 GGUF 量化版，主打"高效思考"。 |
| [dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8) | dealignai / 317 / 34,688 | DeepSeek-V4.1-Flash 的无审查 FP8 社区版。 |
| [prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit) | prism-ml / 267 / 30,043 | 同一三值量化的 MLX 版本，服务 Apple Silicon。 |
| [audnai/penclaw-GLM-5.3-abliterated](https://huggingface.co/audnai/penclaw-GLM-5.3-abliterated) | audnai / 167 / 670 | GLM-5.3 的 abliterated（去拒答）社区版。 |
| [ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF) | ISTA-DASLab / 181 / 42,965 | GSQ-RCO 量化方案对 Qwen3.8-Flash-Next 的移植。 |

---

## 三、生态信号

**Qwen 家族全面统治**：榜单 30 个模型中约三分之一与 Qwen3.8-27B 直接相关（量化、微调、蒸馏、改版），其 733 万下载远超同侪，已形成"发布即被整条量化/微调流水线覆盖"的生态闭环。**开源权重仍是主流**，Meta Llama-3.1 这种常青模型与 DeepSeek、MiniMax、GLM、腾讯等悉数开源放权重，闭源压力下开源阵营持续扩张。**量化竞争白热化**：从 unsloth 的常规 GGUF，到 prism-ml 的 2-bit 三值、ISTA-DASLab 的 GSQ-RCO 混合精度，低比特与学术量化方案争相抢榜，显示推理成本已成核心战场。此外，视频生成（MiniMax-H3、LTX-2.5）与音频/TTS（Yue2、AuK）赛道同样拥挤。

---

## 四、值得探索

1. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 2-bit 三值量化在 27B 规模上做到近 190 万下载，是研究极限压缩与推理成本权衡的最佳样本，配套还有 MLX 版本。

2. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 学术团队的 GSQ-RCO 混合精度方案，对同一模型与 unsloth 版本可做量化质量对比，适合量化研究者。

3. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — 与旗舰 27B 并列的轻量高效型号，值得测试其在效率与能力间的平衡点，判断是否适合生产部署。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*