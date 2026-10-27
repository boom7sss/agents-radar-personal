# Hugging Face 热门模型日报 2026-09-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-25 14:10 UTC

---

# Hugging Face 热门模型日报（2026-09-25）

## 今日速览

Qwen 家族继续主导榜单：Qwen/Qwen3.8-27B 以 16,250 点赞高居榜首，其量化版本 unsloth/Qwen3.8-27B-GGUF 下载量达 693 万，生态扩散效应明显。图像生成与视频生成竞争激烈，Qwen-Image-2.1 官方版与多个社区微调/量化版本同时上榜，Lightricks/LTX-2.5 以 5,067 点赞领跑视频生成赛道。极端量化成为热点，prism-ml 的 2-bit 三值模型 Bonsai-2 同时提供 GGUF 与 MLX 版本，GGUF 版下载量突破 310 万。语音与多模态方向也有新面孔，MiMo-V2.6 系列、Audio8-ASR 与 Nemotron-3-Diarization 显示音频基础设施持续升温。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

**Qwen/Qwen3.8-27B**
- 链接: https://huggingface.co/Qwen/Qwen3.8-27B
- 作者: Qwen | 点赞: 16,250 | 下载: 6,579,319
- 本周榜首的旗舰级 image-text-to-text 模型，Qwen3.8 家族的基座，凭借官方权重与超高下载量成为整个生态的锚点。

**Qwen/Qwen3.8-Flash-Next**
- 链接: https://huggingface.co/Qwen/Qwen3.8-Flash-Next
- 作者: Qwen | 点赞: 5,696 | 下载: 846,820
- Flash 系列的最新迭代，标签中已出现 qwen4_exp，暗示下一代架构预研，是观察 Qwen 路线图的重要信号。

**deepseek-ai/DeepSeek-V4.1-Flash**
- 链接: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- 作者: deepseek-ai | 点赞: 3,739 | 下载: 621,396
- DeepSeek 的快速版多模态模型，以高点赞率进入前十，是 Qwen 之外最受关注的国产开源权重之一。

**XingChen-AGI/Xing4.0-29B-A4B**
- 链接: https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B
- 作者: XingChen-AGI | 点赞: 1,676 | 下载: 42,950
- 29B 激活 4B 的 MoE 对话模型，以稀疏激活换取效率，属于当前中小体量高效 LLM 的主流思路。

**Altworld/Hemmingway-1**
- 链接: https://huggingface.co/Altworld/Hemmingway-1
- 作者: Altworld | 点赞: 654 | 下载: 4,978
- 基于 qwen3_5_text 的文本生成模型，命名与标签透露出偏写作/文学方向的定位。

**yandex/AliceAI-Foundation-80B-A3B-Base**
- 链接: https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base
- 作者: yandex | 点赞: 331 | 下载: 2,911
- Yandex 的 80B 总参、3B 激活基座模型，代表大厂稀疏 MoE 基座的持续开源投放。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**Lightricks/LTX-2.5**
- 链接: https://huggingface.co/Lightricks/LTX-2.5
- 作者: Lightricks | 点赞: 5,067 | 下载: 1,598,133
- 支持图生视频、文生视频、视频生视频的全能视频模型，是本周期视频生成赛道点赞最高的作品。

**Qwen/Qwen-Image-2.1**
- 链接: https://huggingface.co/Qwen/Qwen-Image-2.1
- 作者: Qwen | 点赞: 2,275 | 下载: 42,469
- Qwen 官方图像生成/编辑模型，是本周多款社区微调与量化版本的原始基座。

**Comfy-Org/Qwen-Image-2.1**
- 链接: https://huggingface.co/Comfy-Org/Qwen-Image-2.1
- 作者: Comfy-Org | 点赞: 708 | 下载: 3,266,380
- Qwen-Image-2.1 的 ComfyUI 单文件封装版，下载量远超原版，说明工作流集成才是出图用户的真实入口。

**TaichuAI/ZDTaichu5.0-9B**
- 链接: https://huggingface.co/TaichuAI/ZDTaichu5.0-9B
- 作者: TaichuAI | 点赞: 1,044 | 下载: 9,498
- 主打空间推理的视觉语言模型，在 VLM 同质化竞争中切出差异化能力点。

**m-a-p/YuE2-3B**
- 链接: https://huggingface.co/m-a-p/YuE2-3B
- 作者: m-a-p | 点赞: 998 | 下载: 24,655
- 3B 规模的文本到音频/音乐生成模型，标签显示符号规划与智能体编辑能力，是音乐生成方向的代表。

**Edge0/Audio8-ASR-Infinite**
- 链接: https://huggingface.co/Edge0/Audio8-ASR-Infinite
- 作者: Edge0 | 点赞: 540 | 下载: 2,853
- 支持流式识别的语音识别模型，面向实时转写场景。

**inclusionAI/Ming-Image-0.1-Design**
- 链接: https://huggingface.co/inclusionAI/Ming-Image-0.1-Design
- 作者: inclusionAI | 点赞: 237 | 下载: 0
- 定位设计场景的文本到图像模型，采用 custom + diffusers 组合，尚未产生下载量。

**XiaomiMiMo/MiMo-V2.6-Pro-RL / Flash-RL / Distill-Qwen-9B**
- 链接: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL ｜ https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL ｜ https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B
- 作者: XiaomiMiMo | 点赞: 489 / 451 / 458 | 下载: 42,062 / 20,473 / 6,652
- 小米 MiMo-V2.6 一次放出 Pro-RL、Flash-RL 与 Qwen 蒸馏 9B 三个版本，三模型同日上榜，显示其多尺寸、多训练阶段的完整投放策略。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

**nvidia/Nemotron-3-Diarization**
- 链接: https://huggingface.co/nvidia/Nemotron-3-Diarization
- 作者: nvidia | 点赞: 315 | 下载: 11,459
- 基于 NeMo 的说话人分离/语音活动检测模型，同时提供 safetensors 与 gguf，属音频处理基础设施。

**netease-youdao/Confucius4-R2T2**
- 链接: https://huggingface.co/netease-youdao/Confucius4-R2T2
- 作者: netease-youdao | 点赞: 403 | 下载: 5,827
- 基于 qwen3_asr 的语音识别模型，是 Confucius4 系列在 ASR 方向的延续。

**AlexWortega/openjev**
- 链接: https://huggingface.co/AlexWortega/openjev
- 作者: AlexWortega | 点赞: 569 | 下载: 0
- 面向 NLI 的 cross-encoder 模型，基于 qwen3.5，属文本分类/排序类小众工具。

**harshatheg/Qwen-2.5-1B-RLCD**
- 链接: https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD
- 作者: harshatheg | 点赞: 568 | 下载: 0
- 聚焦结构化生成、并行解码与受限解码的 Apple Silicon MLX 模型，是解码效率方向的探索性作品。

**convaiinnovations/laya & laya-multilingual**
- 链接: https://huggingface.co/convaiinnovations/laya ｜ https://huggingface.co/convaiinnovations/laya-multilingual
- 作者: convaiinnovations | 点赞: 3,571 / 263 | 下载: 0 / 0
- 主打"系统一"式校准决策的文本分类模型，主版本以 3,571 点赞冲至总榜第二，但两个版本下载量均为 0，热度与采用度明显脱节。

**akhilaaa3/Jev-Omni**
- 链接: https://huggingface.co/akhilaaa3/Jev-Omni
- 作者: akhilaaa3 | 点赞: 215 | 下载: 0
- 标注为 merged 的多模态文本分类模型，信息有限，处于早期阶段。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**unsloth/Qwen3.8-27B-GGUF**
- 链接: https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
- 作者: unsloth | 点赞: 4,604 | 下载: 6,938,321
- 本周下载量最高的模型，是 Qwen3.8-27B 的官方级 GGUF 量化，几乎成为本地部署的默认选择。

**prism-ml/Ternary-Bonsai-2-27B-gguf**
- 链接: https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf
- 作者: prism-ml | 点赞: 2,071 | 下载: 3,109,078
- 2-bit 三值量化模型，以极低比特位挑战 27B 规模的可用性，下载量破 300 万证明极端量化有真实需求。

**prism-ml/Ternary-Bonsai-2-27B-mlx-2bit**
- 链接: https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit
- 作者: prism-ml | 点赞: 374 | 下载: 54,097
- 同一三值模型的 MLX 版本，面向 Apple Silicon，是量化跨平台化的典型动作。

**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**
- 链接: https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- 作者: ISTA-DASLab | 点赞: 1,684 | 下载: 1,510,016
- 采用 GSQ + RCO 混合精度量化的学术方案，代表了量化研究向主流模型快速落地的路径。

**DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**
- 链接: https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- 作者: DavidAU | 点赞: 1,172 | 下载: 1,546,398
- 典型的社区"缝合式"微调，叠加去审查与编码强化，下载量说明这类个性化改造有稳定受众。

**abenzerps/Qwen-Image-2.1-Uncensored-GGUF**
- 链接: https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF
- 作者: abenzerps | 点赞: 1,723 | 下载: 715,906
- Qwen-Image-2.1 的去审查 GGUF 版本，面向 ComfyUI 工作流，下载量高于官方原版。

**pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF**
- 链接: https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF
- 作者: pottokao | 点赞: 252 | 下载: 126,393
- 针对图像模型文本编码器的 fp8/量化改造，属精细化组件级优化。

---

## 生态信号

本周期生态由 Qwen 家族主导：从 Qwen3.8-27B 基座、Flash-Next 预研版，到 unsloth GGUF、ISTA-DASLab 混合精度量化、Comfy-Org 单文件封装，再到 DavidAU、abenzerps 等社区魔改，单一家族几乎覆盖了榜单的所有环节，开源权重的扩散链条已高度成熟。极端量化是第二条主线，prism-ml 的三值 2-bit 模型与 ISTA-DASLab 的混合精度方案同时上榜，说明社区在算力受限下对低比特推理的需求真实且旺盛。值得注意的错位是：convaiinnovations/laya 点赞高居第二却零下载，热度与采用度出现明显分离，提示点赞榜未必等于实用榜。

---

## 值得探索

1. **prism-ml/Ternary-Bonsai-2-27B-gguf**（https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf）— 2-bit 三值量化把 27B 模型压到极低比特，310 万下载量证明其可用性已被验证，是研究低比特推理边界的绝佳样本；配套 MLX 版本可对比不同后端表现。

2. **unsloth/Qwen3.8-27B-GGUF**（https://huggingface.co/unsloth/Qwen3.8-27B-GGUF）— 693 万下载量使其成为本周事实标准，若要在本地运行 Qwen3.8-27B，这是最省事的起点。

3. **Lightricks/LTX-2.5**（https://huggingface.co/Lightricks/LTX-2.5）— 同时支持图生视频、文生视频与视频生视频，是当前视频生成赛道点赞最高的模型，适合评估开源视频模型的实际生成质量与控制能力。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*