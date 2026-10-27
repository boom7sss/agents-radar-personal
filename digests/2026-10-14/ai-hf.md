# Hugging Face 热门模型日报 2026-10-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-10-14 14:02 UTC

---

# Hugging Face 热门模型日报（2026-10-14）

## 一、今日速览

今日榜单由 Qwen 家族强势主导，`Qwen/Qwen3.8-27B`（17,669 赞）成为热度断层第一，`Qwen3.8-Flash-Next` 与 `Qwen-Image-2.1` 系列同样冲高。视频生成赛道爆发，`Lightricks/LTX-2.5` 以 7,723 赞、超 182 万下载成为多模态焦点。旗舰闭源级模型持续开放权重，`DeepSeek-V4.1-Flash` 与 `facebook/sam3` 双双破四百万级下载，显示出"开源权重即默认"的分发逻辑。围绕 Qwen3.8 的社区微调、去审查（uncensored/abliterated）与 GGUF 量化版本密集涌现，构成今日最活跃的衍生生态。

---

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 赞 17,669 | 下载 7,221,327
  本周绝对主角：Qwen 旗舰级 27B 对话/多模态模型，凭借官方权重与超高下载量稳居榜首。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  Qwen | 赞 6,190 | 下载 2,185,644
  Qwen 的轻量快速版本，兼顾对话性能与效率，是社区微调与量化的主要底座之一。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  deepseek-ai | 赞 4,485 | 下载 1,262,357
  DeepSeek 新一代 Flash 模型，支持文本与图文输入，开放权重后迅速进入高热区间。

- **[LiquidAI/LFM2.5-24B-A2B](https://huggingface.co/LiquidAI/LFM2.5-24B-A2B)**
  LiquidAI | 赞 251 | 下载 4,067
  Liquid 的 MoE 架构文本生成模型，代表非 Transformer 主流路线的新迭代。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 赞 7,723 | 下载 1,823,507
  支持图生视频、文生视频、视频生视频的全能生成模型，是本周视频赛道最高热度。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook | 赞 4,296 | 下载 2,019,842
  Meta 的通用分割模型，支持视频场景，下载量破两百万，基础视觉工具地位稳固。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  baidu | 赞 4,631 | 下载 1,154,213
  百度推出的 OCR/图文理解模型，高赞高下载，反映文档场景刚需。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  Qwen | 赞 3,291 | 下载 153,537
  Qwen 官方图像生成与编辑模型，是 Turbo 版及众多衍生量化的基础。

- **[google/embeddinggemma-2](https://huggingface.co/google/embeddinggemma-2)**
  google | 赞 2,194 | 下载 135,175
  Google 的 Gemma 系列嵌入模型，用于特征提取，检索/RAG 场景关注度高。

- **[Cloudflare/clef](https://huggingface.co/Cloudflare/clef)**
  Cloudflare | 赞 2,156 | 下载 18,304
  Cloudflare 推出的图文理解模型，企业级玩家入场的信号。

- **[Qwen/Qwen-Image-2.1-Turbo](https://huggingface.co/Qwen/Qwen-Image-2.1-Turbo)**
  Qwen | 赞 746 | 下载 12,704
  图像生成/编辑的加速版本，面向更低延迟的出图需求。

- **[openbmb/MiniCPM-V-4.7-35B-A3B](https://huggingface.co/openbmb/MiniCPM-V-4.7-35B-A3B)**
  openbmb | 赞 530 | 下载 4,157
  MiniCPM-V 系列 MoE 多模态模型，延续轻量高效路线。

- **[pablodawson/MiniMax-H3-360-Orbit-LoRA](https://huggingface.co/pablodawson/MiniMax-H3-360-Orbit-LoRA)**
  pablodawson | 赞 438 | 下载 16,890
  基于 MiniMax-H3 的 LoRA，支持首尾帧图生视频，社区创作向。

- **[Cactus-Compute/whistle](https://huggingface.co/Cactus-Compute/whistle)**
  Cactus-Compute | 赞 387 | 下载 23,589
  面向端侧的语音识别模型，主打 on-device。

- **[LiquidAI/d1-3B](https://huggingface.co/LiquidAI/d1-3B)**
  LiquidAI | 赞 390 | 下载 14,854
  Liquid 的小型图文理解模型，延续 lfm2_vl 架构。

- **[openbmb/MiniCPM-V-4.7-1B](https://huggingface.co/openbmb/MiniCPM-V-4.7-1B)**
  openbmb | 赞 320 | 下载 2,543
  MiniCPM-V 4.7 的 1B 小尺寸版本，适合端侧与轻量部署。

- **[fishaudio/drama-3](https://huggingface.co/fishaudio/drama-3)**
  fishaudio | 赞 234 | 下载 839
  支持多说话人的文本转语音模型，来自 Fish Audio。

- **[speridlabs/iris-3b](https://huggingface.co/speridlabs/iris-3b)**
  speridlabs | 赞 247 | 下载 1,132
  像素空间扩散文生图模型，走非潜空间路线，偏研究向。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  convaiinnovations | 赞 5,591 | 下载 47,754
  主打"校准决策"的文本分类/判定模型，与 JEV 同属 system-one 标签体系。

- **[autotrust/JEV-35B](https://huggingface.co/autotrust/JEV-35B)**
  autotrust | 赞 712 | 下载 27,970
  基于 qwen3_5_moe 的判定/分类模型，用于可信度与决策场景。

- **[autotrust/JEV-35B-NVFP4](https://huggingface.co/autotrust/JEV-35B-NVFP4)**
  autotrust | 赞 304 | 下载 33,343
  JEV-35B 的 NVFP4 低精度版本，面向高效推理部署。

> 说明：本批榜单中未出现明确的代码、数学、医疗专用模型；相关能力多以通用 LLM 微调形式出现。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[abenzerps/Qwen-Image-2.1-Uncensored-Quantized](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-Quantized)**
  abenzerps | 赞 4,264 | 下载 2,315,771
  Qwen-Image-2.1 的去审查量化版，下载量超两百万，ComfyUI 生态热门。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 赞 1,753 | 下载 1,900,731
  基于 Qwen3.8 的社区微调 GGUF 合集，主打去审查与编码增强。

- **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)**
  ISTA-DASLab | 赞 863 | 下载 4,894,108
  采用 GSQ/RCO 混合精度量化的 GGUF，本周下载量最高之一，量化研究代表。

- **[orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)**
  orcarouter | 赞 854 | 下载 692,812
  Qwen3.8-Flash-Next 的去审查 GGUF 版本。

- **[dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8](https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8)**
  dealignai | 赞 632 | 下载 78,156
  DeepSeek-V4.1-Flash 的 FP8 去审查版本。

- **[AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF](https://huggingface.co/AtomicChat/Qwen-Image-2.1-Turbo-Uncensored-GGUF)**
  AtomicChat | 赞 437 | 下载 258,320
  Qwen-Image Turbo 的去审查 GGUF，面向 ComfyUI 出图工作流。

- **[ConwayResearch/Underdog-Saluki-27B-1.0](https://huggingface.co/ConwayResearch/Underdog-Saluki-27B-1.0)**
  ConwayResearch | 赞 443 | 下载 311,969
  主打 2-bit 极限量化与工具/函数调用的 GGUF 模型。

- **[jialinyyzz/humanizer](https://huggingface.co/jialinyyzz/humanizer)**
  jialinyyzz | 赞 1,589 | 下载 65,616
  基于 gemma4_unified 的社区微调，定位"文本人性化"，热度异常突出。

- **[nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2](https://huggingface.co/nerkyor/Qwen3.8-27B-Coder390-EfficientThink-Opus5.5-GPT6Astra-Grok4.7-DSV4Pro-K3-SFT-RLOO-MTP-DFlash2)**
  nerkyor | 赞 319 | 下载 114,351
  多源蒸馏/微调的 Qwen3.8 变体，主打高效推理。

---

## 三、生态信号

**Qwen 家族全面主导。** Qwen3.8 系列同时统治原始权重、Flash 轻量版与图像生成线，衍生微调、量化和去审查版本几乎全部以其为底座，官方权重正成为事实上的社区默认起点。**"开源权重"持续挤压闭源。** DeepSeek-V4.1-Flash、Qwen3.8-27B、facebook/sam3 等旗舰均以开放权重分发，下载量动辄百万至千万级，开放权重已成为头部厂商的默认发布方式。**量化与去审查是最活跃的衍生层。** GSQ/RCO 混合精度、NVFP4、2-bit 与海量 GGUF 覆盖文本与图像模型，uncensored/abliterated 变体密集出现，说明用户对本地部署与内容自由度的需求非常强劲。

---

## 四、值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 本周热度断层第一且下载超七百万，是当前最值得研究的通用旗舰底座，后续绝大多数微调与量化都基于它。

2. **[ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** — 下载量近五百万的混合精度量化样本，对研究量化方法与高效推理部署很有参考价值。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 覆盖图/文/视频多向生成的视频模型，代表了当前视频生成赛道的最前沿方向。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*