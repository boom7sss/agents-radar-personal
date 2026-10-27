# Hugging Face 热门模型日报 2026-09-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-21 11:06 UTC

---

# Hugging Face 热门模型日报（2026-09-21）

## 今日速览

本周周榜由 Qwen 家族主导：**Qwen3.8-27B** 以 15,907 点赞、715 万下载断层领先，其生态衍生（GGUF 量化、微调、蒸馏变体）几乎占据榜单三分之一。**qwen3_8 / qwen3_5 / qwen4_exp** 三条技术线同时活跃，配合 DeepSeek-V4.1-Flash（3,474 赞）、GLM-5.3-Flash（2,505 赞）等，Flash/轻量高效推理方向竞争激烈。视频生成端 **MiniMax-H3**（5,546 赞、405 万下载）与 **LTX-2.5**（4,602 赞、163 万下载）形成双雄格局。量化侧出现新范式信号：**三元 2-bit（Ternary-Bonsai-2 / lllama.cpp + MLX）** 与 **GSQ-RCO 混合精度** 同时上榜，低比特部署加速。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）
- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 赞 15,907 | 下载 7,153,238
  Qwen 新一代旗舰多模态对话模型，周榜第一，是本周几乎所有量化与微调活动的基座。
- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai | 赞 3,474 | 下载 512,120
  DeepSeek V4.1 系列轻量高效版本，主打快速推理的图文对话。
- **[zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)** — zai-org | 赞 2,505 | 下载 3,309,565
  GLM-5.3 Flash 轻量对话模型，下载量高，是本周国产 LLM 阵营另一主力。
- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI | 赞 992 | 下载 18,394
  29B 级对话模型，A4B 暗示稀疏/激活架构，关注度集中在推理成本优化。
- **[TokenRhythm/NeoHorse-1-9B](https://huggingface.co/TokenRhythm/NeoHorse-1-9B)** — TokenRhythm | 赞 985 | 下载 12,260
  9B 级 agentic 文本生成模型，主打智能体场景。
- **[openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)** — openbmb | 赞 1,633 | 下载 460,533
  MiniCPM 第五代 2B 小模型，端侧友好，小模型赛道代表。
- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld | 赞 215 | 下载 834
  基于 qwen3.8 的文本生成模型，属短线关注对象。

### 🎨 多模态与生成（图像、视频、音频、文本到X）
- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — MiniMaxAI | 赞 5,546 | 下载 4,046,917
  文生/图生视频模型，周榜视频类最高赞，扩散架构。
- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen | 赞 5,523 | 下载 774,778
  Qwen 新一代实验性多模态模型（qwen4_exp），Flash-Next 命名指向下一代轻量架构。
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 赞 4,602 | 下载 1,626,742
  图/文/视频到视频的统一扩散模型，视频生成另一主攻方向。
- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen | 赞 1,135 | 下载 6,523
  Qwen 图像生成/编辑模型，配套生态（ComfyUI 版本）同步上榜。
- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — m-a-p | 赞 933 | 下载 18,759
  3B 音乐生成模型，含符号规划与智能体编辑能力，音频赛道少数代表。
- **[WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)** — WarmBloodAban | 赞 583 | 下载 268,296
  基于 MiniMax-H3 的视频生成衍生版。
- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI | 赞 216 | 下载 5,078
  紫东太初 5.0，主打空间推理的多模态视觉语言模型。
- **[internlm/Atria-Dawn-Preview](https://huggingface.co/internlm/Atria-Dawn-Preview)** — internlm | 赞 219 | 下载 978
  书生体系新预览模型（glm_moe_dsa，附 arXiv 2609.15818）。

### 🔧 专用模型（代码、数学、医疗、嵌入）
- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations | 赞 1,416 | 下载 0
  文本分类模型，标签指向"system-one 校准决策"，定位为决策/推理分类器，热度高但尚无下载。
- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega | 赞 370 | 下载 0
  基于 qwen3.5 的 NLI 交叉编码器，检索/排序用途。
- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — netease-youdao | 赞 195 | 下载 1,864
  网易有道语音识别模型（qwen3_asr 路线），ASR 方向代表。
- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)** — harshatheg | 赞 491 | 下载 0
  Apple Silicon 上 MLX 并行/约束解码实验，聚焦结构化生成。

### 📦 微调与量化（社区微调、GGUF、AWQ）
- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth | 赞 4,443 | 下载 7,039,006
  Qwen3.8-27B 官方 GGUF 量化，下载量全榜最高之一，本地部署首选。
- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml | 赞 1,624 | 下载 2,227,879
  三元 2-bit 量化模型，走 llama.cpp 路线，极致低比特压缩代表。
- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab | 赞 1,503 | 下载 1,292,471
  GSQ-RCO 混合精度 GGUF 量化，学术机构出品的高质量量化方案。
- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-…-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 赞 1,023 | 下载 1,348,712
  去审查+编码特化的社区微调 GGUF，反映"heretic/uncensored"风格持续有需求。
- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)** — ukisai | 赞 520 | 下载 16,514
  Qwen3.8-27B 微调版本，主打高效推理。
- **[ukisai/Swift-Qwen3.8-27B-GGUF](https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF)** — ukisai | 赞 337 | 下载 144,372
  上者的 GGUF 量化版，形成 micro-fork 量化链条。
- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)** — prism-ml | 赞 297 | 下载 36,744
  Ternary-Bonsai 的 MLX 2-bit 版本，面向 Apple Silicon。
- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org | 赞 367 | 下载 535,365
  Qwen-Image-2.1 的 ComfyUI 单文件版本，图生成落地工具链。
- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps | 赞 285 | 下载 33,232
  图生成模型的去审查 GGUF，服务于 ComfyUI GGUF 工作流。
- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — ISTA-DASLab | 赞 201 | 下载 53,094
  对 Qwen3.8-Flash-Next 的同套 GSQ-RCO 量化，量化方案向新模型快速跟进。
- **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)** — dealignai | 赞 328 | 下载 35,493
  DeepSeek-V4.1-Flash 的去审查 FP8 版本，走 8-bit 部署路线。

## 生态信号

**Qwen 家族势头最旺**：榜单中直接或间接基于 Qwen 的模型超过 15 个，qwen3_8 为主基线，qwen3_5 作为旧线仍有社区沿用，qwen4_exp 则预告下一代。开源权重仍是绝对主流，DeepSeek、GLM、MiniMax、Lightricks 均以可下载权重上榜，闭源未见踪影。量化活动明显向 **低比特两头走**：一端是 Ternary-Bonsai 的三元 2-bit（llama.cpp + MLX 双平台），另一端是 GSQ-RCO 混合精度与 FP8；同时"去审查（uncensored/heretic）"微调持续活跃，覆盖语言与图像模型。量化常与微调叠加，形成"基座 → 微调 → GGUF"的快速衍生链。

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周生态的中心节点，围绕它的量化、微调、工具链版本最丰富，是理解当前开源多模态 LLM 默认基座的起点。
2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三元 2-bit 量化在 27B 规模上跑出 222 万下载，值得研究其在 llama.cpp/MLX 上的质量-容量权衡。
3. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 视频生成赞与下载双高，且已出现社区衍生版，是观察开源视频模型落地路径的样本。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*