# Hugging Face 热门模型日报 2026-09-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-28 14:28 UTC

---

# Hugging Face 热门模型日报（2026-09-28）

## 今日速览

本周榜首由新面孔 **convaiinnovations/laya** 拿下（4,223 赞），主打"system-one 校准决策"的文本分类路线。Qwen 家族继续霸榜：**Qwen/Qwen3.8-27B** 以 16,462 赞、684 万下载成为全榜热度与流量双冠，**Qwen-Image-2.1** 则衍生出 GGUF、ComfyUI、LoRA 等至少六个社区版本。量化生态异常活跃，**prism-ml/Ternary-Bonsai-2-27B-gguf**（345 万下载）与 ISTA-DASLab 的 GSQ-RCO 混合精度量化印证了"极致压缩"正成为显学。视频方向 **Lightricks/LTX-2.5**（5,385 赞）与 DeepSeek-V4.1-Flash 的表现值得留意。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

**Qwen/Qwen3.8-27B** · [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
Qwen | 赞 16,462 | 下载 6,844,348
全榜热度与下载双料冠军，image-text-to-text 定位的对话级多模态旗舰，几乎定义了本周期生态基准。

**XingChen-AGI/Xing4.0-29B-A4B** · [链接](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)
XingChen-AGI | 赞 1,788 | 下载 45,834
29B 规模、A4B 稀疏激活的对话模型，以高点赞低下载的高关注度姿态冲入前列。

**XiaomiMiMo/MiMo-V2.6-Pro-RL** · [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)
XiaomiMiMo | 赞 571 | 下载 76,518
小米 MiMo V2.6 系列的 RL 版本，多模态文本生成，同期还有 Flash-RL 与 Distill-Qwen-9B 变体在榜。

**XiaomiMiMo/MiMo-V2.6-Flash-RL** · [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
XiaomiMiMo | 赞 504 | 下载 28,842
同系列轻量 Flash 版，强化学习对齐，主打多模态下的高效推理。

**Altworld/Hemmingway-1** · [链接](https://huggingface.co/Altworld/Hemmingway-1)
Altworld | 赞 755 | 下载 7,478
基于 qwen3_5_text 的文本生成模型，标签带有 qwen3.8 痕迹，属小众创作向发布。

**yandex/AliceAI-Foundation-80B-A3B-Base** · [链接](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)
yandex | 赞 353 | 下载 3,650
80B 总参、A3B 激活的基础模型基座，含 custom_code，代表大厂稀疏架构开源路线。

**Contrastive-LM/CLM-v0.1-8B** · [链接](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)
Contrastive-LM | 赞 444 | 下载 1,271
面向验证/重排的对比学习 8B 模型，text-ranking 任务的小众但明确卡位。

**AlexWortega/openjev** · [链接](https://huggingface.co/AlexWortega/openjev)
AlexWortega | 赞 617 | 下载 0
基于 qwen3.5 的 NLI 交叉编码器，零下载却有高点赞，属话题型发布。

**SupersonicLabs/Julia-1** · [链接](https://huggingface.co/SupersonicLabs/Julia-1)
SupersonicLabs | 赞 236 | 下载 1,006
多语言"决策模型"文本分类器，定位鲜明。

**akhilaaa3/Jev-Omni** · [链接](https://huggingface.co/akhilaaa3/Jev-Omni)
akhilaaa3 | 赞 287 | 下载 577
基于 gemma4_unified 的分类/多模态混合体，社区实验性质。

---

### 🎨 多模态与生成（图像、视频、音频）

**Lightricks/LTX-2.5** · [链接](https://huggingface.co/Lightricks/LTX-2.5)
Lightricks | 赞 5,385 | 下载 1,595,377
集 image-to-video、text-to-video、video-to-video 于一身的视频生成旗舰，是本周非 Qwen 阵营最亮眼的发布。

**Qwen/Qwen-Image-2.1** · [链接](https://huggingface.co/Qwen/Qwen-Image-2.1)
Qwen | 赞 2,554 | 下载 58,693
官方图像生成与编辑基础模型，全榜多个衍生量化/ComfyUI 版本皆源出于此。

**XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B** · [链接](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)
XiaomiMiMo | 赞 535 | 下载 9,994
基于 qwen3_5 的多模态蒸馏 9B 模型，V2.6 家族的小尺寸承接者。

**Edge0/Audio8-ASR-Infinite** · [链接](https://huggingface.co/Edge0/Audio8-ASR-Infinite)
Edge0 | 赞 1,359 | 下载 19,963
支持流式的 ASR 模型，在语音赛道中点赞领先。

**TaichuAI/ZDTaichu5.0-9B** · [链接](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)
TaichuAI | 赞 1,702 | 下载 11,738
主打空间推理的视觉语言模型，是本周多模态 VLM 中点赞最高者之一。

**XingChen-AGI/TeleOCR** · [链接](https://huggingface.co/XingChen-AGI/TeleOCR)
XingChen-AGI | 赞 650 | 下载 27,904
基于 qwen2_5_vl 的 OCR 专用 image-text-to-text 模型。

**deepseek-ai/DeepSeek-V4.1-Flash** · [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
deepseek-ai | 赞 3,843 | 下载 668,537
DeepSeek V4.1 的 Flash 版本，兼顾文本与图像输入，热度仅次于 Qwen3.8。

**nvidia/Nemotron-3-Diarization** · [链接](https://huggingface.co/nvidia/Nemotron-3-Diarization)
nvidia | 赞 436 | 下载 26,428
NeMo 体系下的说话人分离/语音活动检测模型，含 GGUF 版本。

**netease-youdao/Confucius4-R2T2** · [链接](https://huggingface.co/netease-youdao/Confucius4-R2T2)
netease-youdao | 赞 442 | 下载 9,336
基于 qwen3_asr 的语音识别模型，代表中文厂牌在 ASR 开源上的持续投入。

**inclusionAI/Ming-Image-0.1-Design** · [链接](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)
inclusionAI | 赞 319 | 下载 0
设计导向的文生图模型，零下载高点赞，属新发布造势阶段。

**Viggle/Qwen-Image-2.1-viggle-turbo** · [链接](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)
Viggle | 赞 365 | 下载 175,907
基于 Qwen-Image-2.1 的 LoRA 加速版，支持文生图与图生图。

**apple/LensVLM-9B** · [链接](https://huggingface.co/apple/LensVLM-9B)
apple | 赞 255 | 下载 1,840
苹果基于 qwen3_5 的视觉语言模型，是少数官方机构发布的 VLM。

---

### 🔧 专用模型（分类/提取/重排）

**convaiinnovations/laya** · [链接](https://huggingface.co/convaiinnovations/laya)
convaiinnovations | 赞 4,223 | 下载 0
本周点赞榜首，主打 system-one 与"校准决策"的文本分类模型，零下载却登顶，属于典型的"话题引爆型"发布。

**fastino/GLiNER2.5-Decide** · [链接](https://huggingface.co/fastino/GLiNER2.5-Decide)
fastino | 赞 222 | 下载 24,250
GLiNER2 系列的信息抽取/意图分类 token-classification 模型，延续该家族实用路线。

---

### 📦 微调与量化（GGUF、AWQ、社区衍生）

**prism-ml/Ternary-Bonsai-2-27B-gguf** · [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
prism-ml | 赞 2,220 | 下载 3,457,124
2-bit 三值量化 27B 模型，345 万下载凸显极致压缩的强烈需求。

**abenzerps/Qwen-Image-2.1-Uncensored-GGUF** · [链接](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)
abenzerps | 赞 2,195 | 下载 1,062,921
Qwen-Image-2.1 的去审查 GGUF 版，ComfyUI 生态下载量破百万。

**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** · [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
ISTA-DASLab | 赞 1,795 | 下载 1,655,818
采用 GSQ/RCO 混合精度量化的 Qwen3.8-27B GGUF，学术机构量化研究代表作。

**Comfy-Org/Qwen-Image-2.1** · [链接](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)
Comfy-Org | 赞 817 | 下载 4,351,753
Qwen-Image-2.1 的 ComfyUI 单文件扩散版，435 万下载为全榜最高之一。

**pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF** · [链接](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)
pottokao | 赞 306 | 下载 158,806
针对 Qwen-Image-2.1 文本编码器的 fp8/GGUF 量化件，属工具链拆件。

**unsloth/Qwen-Image-2.1-GGUF** · [链接](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)
unsloth | 赞 278 | 下载 220,231
unsloth 出品的 Qwen-Image-2.1 量化版，延续其在量化工具链的常规卡位。

---

## 生态信号

本期最清晰的信号是 **Qwen 家族的结构性统治**：Qwen3.8-27B 与 Qwen-Image-2.1 分别统领语言与图像两条主线，围绕它们衍生出 GGUF、ComfyUI、LoRA、文本编码器拆件等大量下游，形成"官方基座 + 社区量化"的分工生态。其次，**极致量化成为独立赛道**——Ternary-Bonsai 的三值 2-bit 与 ISTA-DASLab 的 GSQ-RCO 混合精度均获百万级下载，说明在消费级硬件上跑大模型的需求已超过"微调"本身。多模态方面，MiMo V2.6 系列一口气放出 Pro-RL、Flash-RL、Distill 三个变体，Yandex、Apple、nvidia、DeepSeek 等机构持续以开源权重入场，开源与闭源的能力差距在这份榜单上几乎不可见。此外，"零下载高点赞"（laya、Ming-Image、openjev）现象提示榜单热度受话题与发布节奏影响显著。

---

## 值得探索

1. **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
   16,462 赞、684 万下载，全榜绝对中心。无论做对话、多模态还是作为量化基座，它都是最优先的评估对象。

2. **prism-ml/Ternary-Bonsai-2-27B-gguf** — [链接](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
   2-bit 三值量化把 27B 压到极低资源，345 万下载验证其可用性，是研究极限压缩与本地部署的绝佳样本。

3. **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
   同时覆盖图生视频、文生视频、视频生视频，是本周非 Qwen 阵营最值得关注的视频生成发布。

*数据来源：Hugging Face Hub，2026-09-28 周点赞榜（共 30 个模型）。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*