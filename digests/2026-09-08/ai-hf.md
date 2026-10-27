# Hugging Face 热门模型日报 2026-09-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-08 10:05 UTC

---

# Hugging Face 热门模型日报 — 2026-09-08

## 今日速览

Qwen 3.8 系列延续强势，围绕 **Qwen3.8-27B** 及 **Qwen3.8-Flash-Next** 的 GGUF 量化、社区微调与 NVFP4 优化持续扩散。视频生成赛道热度显著，**MiniMax-H3** 系列（含微调变体与衍生模型）大量涌现。GLM 5.3 系列迎来重要发布，其中 **GLM-5.3** 采用 MoE 架构并附带社区安全微调版本。语音赛道出现新面孔，微软 **VibeVoice-ASR-Streaming-7B** 与 **Breeze-TTS-2** 均进入周榜。经典模型（BERT、GPT-2、CLIP、MiniLM）仍保持稳定热度。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型）

- [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3) — zai-org | 👍 1,757 | ⬇️ 474,141
  智谱 GLM-5.3 基座模型（MoE 架构），新一代旗舰级文本生成模型，发布即登榜。

- [**zai-org/GLM-5.3-Flash**](https://huggingface.co/zai-org/GLM-5.3-Flash) — zai-org | 👍 2,149 | ⬇️ 826,875
  轻量多模态版本，支持图像+文本输入，延续 Flash 系列的高效定位。

- [**XHToken/Spark-X2.5-4B**](https://huggingface.co/XHToken/Spark-X2.5-4B) — XHToken | 👍 791 | ⬇️ 10,661
  轻量级文本生成模型（Spark 2.5 架构），以高下载/点赞比受到社区关注。

- [**openbmb/MiniCPM5-2B**](https://huggingface.co/openbmb/MiniCPM5-2B) — openbmb | 👍 507 | ⬇️ 2,879
  面壁智能新一代小尺寸 LLM，主打端侧部署能力。

- [**IFM/K2-Horizon-MoVA-36B-A4B**](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B) — IFM | 👍 219 | ⬇️ 3,205
  36B 总量 4B 激活的 MoE 模型（K2-Horizon 架构），主打推理效率。

- [**dealignai/GLM-5.3-CYBERSECURITY-FP8**](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8) — dealignai | 👍 286 | ⬇️ 19,433
  GLM-5.3 的 FP8 量化安全微调版，移除拒答限制，面向网络安全研究场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) — Qwen | 👍 14,318 | ⬇️ 6,712,160
  通义千问旗舰多模态模型（图像+文本），周榜点赞最高，带动整个量化与微调生态。

- [**Qwen/Qwen3.8-Flash-Next**](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) — Qwen | 👍 4,992 | ⬇️ 503,263
  新一代 Flash 实验版多模态对话模型（qwen4_exp 标签），轻量化路线新探索。

- [**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) — deepseek-ai | 👍 808 | ⬇️ 313,547
  DeepSeek V4 系列 Flash 视觉实验版，多模态对话方向的新竞争者。

- [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) — MiniMaxAI | 👍 5,027 | ⬇️ 4,994,268
  MiniMax 新一代视频生成模型（支持图生视频与文生视频），发布后即引爆生态，衍生大量下游微调模型。

- [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) — Lightricks | 👍 3,115 | ⬇️ 1,644,796
  开源视频生成模型，支持文生视频、图生视频与视频编辑等多项能力。

- [**OpenVDN/vdn-minimax-h3**](https://huggingface.co/OpenVDN/vdn-minimax-h3) — OpenVDN | 👍 235 | ⬇️ 0
  基于 MiniMax-H3 的文生视频社区微调模型，刚发布暂无下载。

- [**WarmBloodAban/Minimax-h3_Singularity**](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity) — WarmBloodAban | 👍 157 | ⬇️ 58,060
  MiniMax-H3 视频生成微调变体，扩展图生/文生/视频生视频多场景风格化能力。

- [**BreezeBlue/Breeze-TTS-2**](https://huggingface.co/BreezeBlue/Breeze-TTS-2) — BreezeBlue | 👍 480 | ⬇️ 7,243
  新一代语音合成（TTS）模型，以 transformers 架构实现文本到语音生成。

- [**microsoft/VibeVoice-ASR-Streaming-7B**](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B) — microsoft | 👍 147 | ⬇️ 1,449
  微软 7B 流式语音识别模型，面向实时转写场景。

### 🔧 专用模型（嵌入、时序、分类等）

- [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch) — google | 👍 600 | ⬇️ 444,052
  Google 时序预测基础模型，专注时间序列 forecasting 场景。

- [**sentence-transformers/all-MiniLM-L6-v2**](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) — sentence-transformers | 👍 5,580 | ⬇️ 253,331,994
  轻量句子嵌入模型，累计下载超 2.5 亿，仍是语义相似度任务的社区事实标准。

- [**openai-community/gpt2**](https://huggingface.co/openai-community/gpt2) — openai-community | 👍 3,717 | ⬇️ 14,748,356
  经典开源 GPT-2 模型，历史地位的持续体现。

- [**google-bert/bert-base-uncased**](https://huggingface.co/google-bert/bert-base-uncased) — google-bert | 👍 2,993 | ⬇️ 50,396,517
  BERT 基础模型，NLP 领域基石性预训练模型。

- [**openai/clip-vit-base-patch32**](https://huggingface.co/openai/clip-vit-base-patch32) — openai | 👍 1,212 | ⬇️ 20,702,763
  OpenAI CLIP 视觉-语言对齐经典模型，支撑零样本图像分类与检索任务。

- [**distilbert/distilbert-base-uncased**](https://huggingface.co/distilbert/distilbert-base-uncased) — distilbert | 👍 1,157 | ⬇️ 7,138,152
  蒸馏版 BERT，在保持效果的同时大幅压缩推理成本。

- [**facebook/mms-300m**](https://huggingface.co/facebook/mms-300m) — facebook | 👍 268 | ⬇️ 12,388
  Meta 多语言语音预训练模型（wav2vec2），覆盖大规模语种。

### 📦 微调与量化（GGUF、社区优化）

- [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) — unsloth | 👍 3,661 | ⬇️ 10,675,683
  Qwen3.8-27B 的官方 GGUF 量化版，下载超千万，是本地部署旗舰多模态模型的默认路径。

- [**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF) — ISTA-DASLab | 👍 601 | ⬇️ 479,597
  学术实验室推出的混合精度 GGUF 量化版，探索 RCO（协作量化）技术在 27B 规模的应用。

- [**unsloth/Qwen3.8-Flash-Next-GGUF**](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) — unsloth | 👍 831 | ⬇️ 935,568
  Flash-Next 的 GGUF 量化版，延续 unsloth 对新模型秒级量化的跟进速度。

- [**nvidia/Qwen3.8-Flash-Next-NVFP4**](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4) — nvidia | 👍 147 | ⬇️ 26,302
  NVIDIA ModelOpt 产出的 FP4 量化版，为 Blackwell 架构优化本地推理性能。

- [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) — HauhauCS | 👍 1,005 | ⬇️ 1,715,824
  移除安全对齐的社区微调，叠加 MTP（多 token 预测）优化与 GGUF 量化。

- [**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF) — DavidAU | 👍 318 | ⬇️ 348,753
  社区"缝合怪"式实验性微调，叠加编码优化与 MTP 加速。

- [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) — orcarouter | 👍 802 | ⬇️ 299,670
  abliterated 技术移除对齐（安全拒答）后的 GGUF 量化版。

- [**Jackrong/Qwopus3.8-27B-Flash-GGUF**](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF) — Jackrong | 👍 144 | ⬇️ 113,295
  第三方以 llama.cpp 工具链制作的 Qwen 3.8 系 GGUF 社区版。

---

## 生态信号

**Qwen 3.8** 系（含 27B 旗舰与 Flash-Next 实验版）成立体化生态：官方权重 + unsloth GGUF + NVIDIA FP4 + 社区多路微调，单日下载或达数千万级；围绕一个模型的衍生链路之深，已成为开源多模态模型的标杆事件。**MiniMax-H3** 带动视频生成赛道集中爆发，围绕新视频基础模型的社区微调（含数据蒸馏扩展）同期多路开花，反映视频生成正沿 LLM 的"基座 — 量化 — 领域微调"路径快速演进。

GLM 5.3 系列 MoE 化明显（`glm_moe_dsa` 标签），并出现安全对齐移除的 FP8 变体（`abliterated`/`refusal-removed`），这类"去对齐"微调在多个生态头部模型上同时出现。语音侧，微软 VibeVoice（7B 流式 ASR）与 Breeze-TTS-2 同周亮相，语音基础模型开始追赶多模态 LLM 的规模与开源节奏。

值得关注的是，头部权重（Qwen/DeepSeek/MiniMax/GLM）全为开源权重路线，下载与再创作生态均极为活跃，开源生态在多模态领域的覆盖度持续加深。

---

## 值得探索

1. [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B)
   本周点赞与衍生生态的绝对中心。其 GGUF 版下载逾千万说明已被大规模本地化采用。值得实测其多模态对话上限与 tool use 能力。

2. [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)
   视频生成的头部新开源权重，衍生微调迅速跟进的节奏类似 LLM 生态成熟期的复现。试用的重点在于图生视频质量与动作一致性。配合 [OpenVDN/vdn-minimax-h3](https://huggingface.co/OpenVDN/vdn-minimax-h3) 可考察开源视频生态的可塑性。

3. [**zai-org/GLM-5.3**](https://huggingface.co/zai-org/GLM-5.3)
   MoE 架构的旗舰文本模型，下载与点赞比高，可能是 2026 下半年文本智能基准的新坐标。若预算有限，GLM-5.3-Flash 是轻量多模态的替代项。

4. [**google/timesfm-3.0-pytorch**](https://huggingface.co/google/timesfm-3.0-pytorch)
   长期位于热度榜的时序预测基础模型，同时期无直接竞品上榜。若涉及金融、运营预测场景，值得与当前业务基线对比。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*