# Hugging Face 热门模型日报 2026-09-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-24 12:15 UTC

---

# Hugging Face 热门模型日报（2026-09-24）

## 今日速览

今日榜单由 Qwen 生态主导：**Qwen/Qwen3.8-27B** 以 16,175 点赞、676 万下载断层领跑，其 GGUF 量化版（unsloth）与混合精度量化版（ISTA-DASLab）同样高居前列，显示出围绕单一基座模型的社区衍生热潮。DeepSeek-V4.1-Flash 与 Qwen3.8-Flash-Next 两款"Flash/Next"轻量旗舰分列高赞位置，反映厂商在推理效率上的竞争。视频与图像生成赛道热度不减，Lightricks/LTX-2.5 与 Qwen-Image-2.1 及其社区无审查/量化衍生版本密集上榜。量化成为主流分发方式：GGUF、2-bit 三元量化、MLX 2-bit 等格式在榜单中占据显著位置。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 点赞 16,175 | 下载 6,765,008
  本周榜首的旗舰多模态对话模型（image-text-to-text），凭借超大下载量和高点赞成为生态核心基座。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)**
  deepseek-ai | 点赞 3,690 | 下载 606,028
  DeepSeek 新一代轻量旗舰，支持图文输入，以高效推理定位吸引大量关注。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)**
  Qwen | 点赞 5,652 | 下载 830,208
  Qwen 的高效"Next"版本，标签指向 qwen4_exp，代表下一代架构的实验性发布。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
  prism-ml | 点赞 1,987 | 下载 2,991,233
  基于 2-bit 三元量化的文本生成模型，近 300 万下载说明极低位宽推理需求旺盛。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)**
  XingChen-AGI | 点赞 1,640 | 下载 41,923
  29B 规模对话模型，采用 A4B 结构，是本周国产开源 LLM 的代表之一。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)**
  Altworld | 点赞 607 | 下载 4,541
  基于 qwen3.5 文本架构的对话模型，点赞量显示社区对其风格化定位的兴趣。

- **[ukisai/Swift-Qwen3.8-27b](https://huggingface.co/ukisai/Swift-Qwen3.8-27b)**
  ukisai | 点赞 568 | 下载 18,227
  Qwen3.8 的社区衍生版本，主打轻快推理。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)**
  XiaomiMiMo | 点赞 467 | 下载 9,841
  小米 MiMo V2.6 系列强化学习版本之一，多模态文本生成。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)**
  XiaomiMiMo | 点赞 434 | 下载 18,821
  MiMo V2.6 的 Flash 强化学习版，下载量高于同系列 Pro 版。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)**
  yandex | 点赞 302 | 下载 2,678
  Yandex 的 80B MoE 基础模型，含 custom_code 标签，属大规模开源基座。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 点赞 4,951 | 下载 1,637,601
  支持图生视频、文生视频、视频生视频的综合视频生成模型，是本周生成赛道点赞最高者。

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)**
  Qwen | 点赞 2,123 | 下载 37,618
  Qwen 的图像生成与编辑模型，官方基座，带动大量社区衍生版本。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)**
  TaichuAI | 点赞 989 | 下载 8,313
  紫东太初 5.0 多模态视觉语言模型，主打空间推理能力。

- **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)**
  m-a-p | 点赞 992 | 下载 23,703
  音乐生成模型，结合符号规划与智能体编辑，是音频生成赛道亮点。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)**
  netease-youdao | 点赞 381 | 下载 4,930
  网易有道基于 qwen3_asr 的语音识别模型。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)**
  XiaomiMiMo | 点赞 420 | 下载 5,705
  MiMo V2.6 蒸馏至 Qwen 9B 的图文模型，体现跨家族蒸馏趋势。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)**
  nvidia | 点赞 211 | 下载 4,282
  NVIDIA Nemotron 3 说话人分离模型，用于语音活动检测与音频帧分类。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)**
  inclusionAI | 点赞 204 | 下载 0
  蚂蚁 inclusionAI 的文生图模型，面向设计场景。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)**
  convaiinnovations | 点赞 3,266 | 下载 0
  文本分类模型，标签指向"system-one"与"calibrated-decisions"，以极高点赞但零下载的异常组合引人注意。

- **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)**
  convaiinnovations | 点赞 235 | 下载 0
  laya 的多语言版本，基于 mmbert。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)**
  AlexWortega | 点赞 543 | 下载 0
  基于 qwen3.5 的 NLI 交叉编码器文本分类模型。

- **[Cactus-Compute/needle3](https://huggingface.co/Cactus-Compute/needle3)**
  Cactus-Compute | 点赞 219 | 下载 69,655
  端侧工具调用/函数调用模型，面向 on-device 场景。

- **[harshatheg/Qwen-2.5-1B-RLCD](https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD)**
  harshatheg | 点赞 563 | 下载 0
  MLX 上的结构化生成与并行解码实验，面向 Apple Silicon。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  unsloth | 点赞 4,570 | 下载 7,063,930
  Qwen3.8-27B 的官方生态 GGUF 量化版，700 万+下载，是本周实际使用量最大的模型。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)**
  Comfy-Org | 点赞 651 | 下载 2,858,923
  Qwen-Image-2.1 的 ComfyUI 单文件扩散版本，便于工作流直接调用。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)**
  ISTA-DASLab | 点赞 1,631 | 下载 1,465,429
  采用 GSQ/RCO 混合精度量化方法的 Qwen3.8 GGUF 版，代表量化研究前沿。

- **[DavidAU/Qwen3.8-27B-TURBO-...-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 点赞 1,141 | 下载 1,502,387
  基于 Qwen3.8-27B 的社区激进微调（去审查、编码增强）GGUF 版本。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)**
  abenzerps | 点赞 1,547 | 下载 575,697
  Qwen-Image-2.1 的去审查 GGUF 版，支持 ComfyUI。

- **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)**
  pottokao | 点赞 227 | 下载 103,226
  Qwen-Image-2.1 文本编码器的 FP8/量化版本。

- **[prism-ml/Ternary-Bonsai-2-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)**
  prism-ml | 点赞 364 | 下载 51,644
  Ternary-Bonsai 的 MLX 2-bit 版本，适配 Apple Silicon。

---

## 生态信号

本周生态由 **Qwen 家族**全面主导——从基座 Qwen3.8-27B、多模态 Qwen-Image-2.1 到 Qwen3.8-Flash-Next，几乎每个细分赛道都有其身影，且衍生生态极为活跃。**开源权重**依旧是绝对主流，DeepSeek、小米 MiMo、Yandex、NVIDIA、紫东太初等均放出可下载权重，未见明显闭源化倾向。量化活动空前密集：GGUF 已是标准分发格式，2-bit 三元量化（prism-ml 的 Ternary-Bonsai）、MLX 2-bit、GSQ/RCO 混合精度等多种极低位宽方案同台竞争，说明社区在本地与端侧部署上的投入持续加深。此外"去审查/Heretic"微调形成稳定小众生态。

---

## 值得探索

1. **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — 混合精度量化（GSQ/RCO）在保留精度的同时压缩体量，是研究当前量化方法上限的优质样本，且已有 146 万下载验证可用性。

2. **[m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)** — 在图像/视频扎堆的生成赛道中，这款结合符号规划与智能体编辑的音乐生成模型方向独特，适合研究音频生成与 agentic 编辑的结合。

3. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — 三元 2-bit 量化 + 近 300 万下载，是探索极低位宽下 27B 级模型可用性的理想对象，可对比其 MLX 版本。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*