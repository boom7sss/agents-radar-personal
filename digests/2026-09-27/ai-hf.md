# Hugging Face 热门模型日报 2026-09-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-27 14:18 UTC

---

# Hugging Face 热门模型日报（2026-09-27）

## 今日速览

今日榜单由 Qwen 家族全面主导：Qwen3.8-27B 以 16,387 点赞登顶，其社区 GGUF 量化版（unsloth）也收获 4,668 点赞和超 660 万下载，Qwen-Image-2.1 及其多个衍生版本（未审查 GGUF、Comfy-Org 打包版、Viggle 加速 LoRA、unsloth 量化版）几乎占据了图像生成赛道的半壁江山。量化活动异常活跃，3.4M 下载的三值 2-bit 模型与 GSQ-RCO 混合精度 GGUF 表明社区对极致压缩兴趣浓厚。多模态方向上，DeepSeek-V4.1-Flash、Xiaomi MiMo-V2.6 系列与苹果 LensVLM-9B 同台竞技。此外，榜首 convaiinnovations/laya 下载量为 0 却获 4,012 点赞，反映出榜单存在"叫好未叫座"的早期关注现象。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜16,387 赞｜6,727,629 下载
  Qwen 最新旗舰级多模态对话模型（image-text-to-text），以绝对优势登顶，是本周生态的核心基座。

- **[XingChen-AGI/Xing4.0-29B-A4B](https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B)** — XingChen-AGI｜1,774 赞｜45,028 下载
  29B 对话文本生成模型，采用 A4B 结构，主打会话能力，是本周新晋的对话模型黑马。

- **[deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)** — deepseek-ai｜3,793 赞｜651,078 下载
  DeepSeek 轻量级 V4.1 迭代，支持图文输入，凭借 DeepSeek 品牌势能与高效定位获得高关注。

- **[XiaomiMiMo/MiMo-V2.6-Pro-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL)** — XiaomiMiMo｜542 赞｜75,079 下载
  小米 MiMo V2.6 系列 RL 强化版，主打多模态文本生成，是三家 MiMo 发布中下载最高者。

- **[XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)** — XiaomiMiMo｜487 赞｜25,661 下载
  MiMo V2.6 的 Flash RL 轻量版本，面向高效多模态推理场景。

- **[Altworld/Hemmingway-1](https://huggingface.co/Altworld/Hemmingway-1)** — Altworld｜724 赞｜5,904 下载
  基于 qwen3.5 文本基座的写作向文本生成模型，主打文学创作风格。

- **[yandex/AliceAI-Foundation-80B-A3B-Base](https://huggingface.co/yandex/AliceAI-Foundation-80B-A3B-Base)** — yandex｜340 赞｜3,456 下载
  Yandex Alice AI 的 80B 基础模型（含 custom_code），代表大厂开源基座力量。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen-Image-2.1](https://huggingface.co/Qwen/Qwen-Image-2.1)** — Qwen｜2,448 赞｜52,804 下载
  Qwen 图像生成/编辑旗舰模型，是本周所有图像衍生版本的基座来源。

- **[abenzerps/Qwen-Image-2.1-Uncensored-GGUF](https://huggingface.co/abenzerps/Qwen-Image-2.1-Uncensored-GGUF)** — abenzerps｜2,021 赞｜964,220 下载
  Qwen-Image-2.1 的未审查 GGUF 版，面向 ComfyUI，下载量接近百万，需求旺盛。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜5,287 赞｜1,601,089 下载
  Lightricks 视频生成模型，支持图生视频、文生视频等多任务，是本周视频赛道唯一上榜者，热度极高。

- **[TaichuAI/ZDTaichu5.0-9B](https://huggingface.co/TaichuAI/ZDTaichu5.0-9B)** — TaichuAI｜1,677 赞｜11,612 下载
  紫东太初 5.0 多模态视觉语言模型，主打空间推理能力。

- **[XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)** — XiaomiMiMo｜517 赞｜8,839 下载
  MiMo V2.6 蒸馏至 Qwen 9B 的多模态模型，面向轻量图文理解。

- **[StarDoc-AI/TeleOCR](https://huggingface.co/StarDoc-AI/TeleOCR)** — StarDoc-AI｜538 赞｜27,837 下载
  基于 qwen2_5_vl 的 OCR 多模态模型，面向文档文字识别场景。

- **[netease-youdao/Confucius4-R2T2](https://huggingface.co/netease-youdao/Confucius4-R2T2)** — netease-youdao｜432 赞｜8,243 下载
  网易有道孔子 4 系列语音识别模型，基于 qwen3_asr。

- **[Edge0/Audio8-ASR-Infinite](https://huggingface.co/Edge0/Audio8-ASR-Infinite)** — Edge0｜969 赞｜19,434 下载
  支持流式的语音识别模型，主打"无限"长音频处理。

- **[nvidia/Nemotron-3-Diarization](https://huggingface.co/nvidia/Nemotron-3-Diarization)** — nvidia｜390 赞｜22,514 下载
  英伟达 Nemotron-3 说话人分离模型，基于 NeMo 框架，含 GGUF 版本。

- **[inclusionAI/Ming-Image-0.1-Design](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design)** — inclusionAI｜286 赞｜0 下载
  蚂蚁 inclusionAI 的 Ming 图像设计模型，主打设计类图像生成。

- **[Viggle/Qwen-Image-2.1-viggle-turbo](https://huggingface.co/Viggle/Qwen-Image-2.1-viggle-turbo)** — Viggle｜318 赞｜133,151 下载
  Qwen-Image-2.1 的加速 LoRA，支持文生图与图生图，面向提速推理。

- **[apple/LensVLM-9B](https://huggingface.co/apple/LensVLM-9B)** — apple｜234 赞｜1,740 下载
  苹果 LensVLM 视觉语言模型，基于 qwen3_5 基座，是苹果少见的开源多模态发布。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[convaiinnovations/laya](https://huggingface.co/convaiinnovations/laya)** — convaiinnovations｜4,012 赞｜0 下载
  主打"系统一"式校准决策的文本分类模型，尽管零下载却高居点赞榜首，是本周最受关注的概念型发布。

- **[convaiinnovations/laya-multilingual](https://huggingface.co/convaiinnovations/laya-multilingual)** — convaiinnovations｜301 赞｜0 下载
  laya 的多语言版本，基于 mmbert，同样呈"高赞零下载"特征。

- **[AlexWortega/openjev](https://huggingface.co/AlexWortega/openjev)** — AlexWortega｜606 赞｜0 下载
  基于 qwen3.5 的 NLI 交叉编码器文本分类模型。

- **[Contrastive-LM/CLM-v0.1-8B](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)** — Contrastive-LM｜363 赞｜766 下载
  对比学习驱动的验证器/重排序模型（text-ranking），面向检索增强场景。

- **[akhilaaa3/Jev-Omni](https://huggingface.co/akhilaaa3/Jev-Omni)** — akhilaaa3｜264 赞｜248 下载
  基于 gemma4_unified 的文本分类模型，同时标注图文理解能力。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth｜4,668 赞｜6,651,662 下载
  Qwen3.8-27B 的官方级社区 GGUF 量化，下载量与基座同量级，是本周量化赛道最热单品。

- **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)** — prism-ml｜2,167 赞｜3,343,748 下载
  三值（ternary）2-bit 量化 27B 模型，专为 llama.cpp 打造，超高下载显示极致压缩需求。

- **[ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)** — ISTA-DASLab｜1,752 赞｜1,608,439 下载
  采用 GSQ-RCO 混合精度量化的 Qwen3.8-27B GGUF 版，学术团队出品的高质量量化。

- **[Comfy-Org/Qwen-Image-2.1](https://huggingface.co/Comfy-Org/Qwen-Image-2.1)** — Comfy-Org｜792 赞｜3,987,373 下载
  Qwen-Image-2.1 的 ComfyUI 单文件打包版，下载近 400 万，是 ComfyUI 生态的关键分发入口。

- **[pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF](https://huggingface.co/pottokao/Qwen-Image-2.1-Text-Encoder-Heretic-GGUF)** — pottokao｜290 赞｜145,246 下载
  Qwen-Image-2.1 文本编码器的 FP8/GGUF 量化拆分包，面向 ComfyUI 精细化部署。

- **[unsloth/Qwen-Image-2.1-GGUF](https://huggingface.co/unsloth/Qwen-Image-2.1-GGUF)** — unsloth｜261 赞｜194,341 下载
  unsloth 出品的 Qwen-Image-2.1 GGUF 量化版，面向本地图像生成。

---

## 生态信号

本周生态呈现"一超多衍"格局：Qwen 家族凭借 Qwen3.8-27B 与 Qwen-Image-2.1 两个基座，衍生出至少 8 个上榜变体，涵盖 GGUF、LoRA 加速、ComfyUI 打包、FP8 与混合精度量化，充分说明开源权重的二次开发生态极为繁荣。量化方向尤为激进，prism-ml 的三值 2-bit 与 ISTA-DASLab 的 GSQ-RCO 混合精度代表两条压缩极限路线，且均获百万级下载，印证"降本部署"是社区刚需。视频（LTX-2.5）与音频（Audio8、Nemotron-3、Confucius4）虽上榜但数量有限，说明多模态生成仍以图像为主战场。值得注意的是 laya 系列"高赞零下载"，暗示榜单点赞可能受概念/营销驱动，而真正落地的价值集中在可下载量化的开源权重。

---

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) + [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
   基座与量化版双榜前列，下载量合计超 1,300 万。若需本地部署多模态大模型，这是本周性价比最高、生态最完整的组合。

2. **[prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)**
   2-bit 三值量化 27B 模型，340 万下载验证其实用性。对研究极端量化与边缘部署的读者极具参考价值。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
   本周唯一高热度视频生成模型（5,287 赞），支持图/文/视频多模态输入生视频，是图像之外最值得跟踪的生成方向。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*