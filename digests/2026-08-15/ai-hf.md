# Hugging Face 热门模型日报 2026-08-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-15 04:39 UTC

---

# 🤖 Hugging Face 热门模型日报（2026-08-15）

---

## 今日速览

本周榜单呈现“**多模态爆发 + 视频生成制霸**”格局：MiniMax-H3 系列（含 Turbo、LoRA、GGUF 等变体）以 13 个上榜条目成为绝对霸主，生态覆盖完整。Kimi-K3 以 10,680 点赞领跑全场，成为本周最受关注的开源模型。语言模型方面，DeepSeek-V4 与 Qwen3.8 系列双线推进，其中 DeepSeek-V4-Flash-0731 下载量突破 160 万，表现抢眼。值得关注的是，量化与微调衍生模型占据榜单近 40% 席位，社区二次创作生态空前活跃。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B) | Qwen | 927 | 3,832 | 大规模 MoE 文本生成模型，Qwen3.8 家族旗舰，体现稀疏激活趋势 |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,390 | 1,606,491 | V4 快速版，下载量超 160 万，部署热度极高 |
| [DeepSeek-V4-Pro-0813](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 441 | 245 | V4 专业版，刚发布即上榜，定位高性能场景 |
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,680 | 1,974,635 | 本周点赞冠军，多模态 LLM，支持压缩张量 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4) | nvidia | 260 | 119,572 | 30B 参数 3B 激活 MoE，NVFP4 量化版，推理高效 |
| [NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16) | nvidia | 144 | 34,137 | 同上模型的 BF16 精度版，全家桶发布策略 |
| [LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) | LiquidAI | 616 | 124,172 | 轻量高效语言模型，2.6B 参数适合边缘部署 |
| [LFM2.5-VL-3B](https://huggingface.co/LiquidAI/LFM2.5-VL-3B) | LiquidAI | 133 | 1,794 | LFM2.5 视觉语言版，小参数多模态路线 |
| [dots3-note-prev](https://huggingface.co/dots-studio/dots3-note-prev) | dots-studio | 144 | 11 | 基于 Dots3 的文本生成模型，新晋发布 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 9,195 | 2 | 旗舰多模态模型，一周狂揽 9 千+ 点赞，风头无两 |
| [Muse-Glimmer-30B](https://huggingface.co/meta-models/Muse-Glimmer-30B) | meta-models | 1,523 | 165,300 | Meta 多模态模型，图像+文本全能，下载量 16 万+ |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 3,926 | 1,997,541 | 本周最大赢家之一，图/文生视频，下载近 200 万 |
| [LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 866 | 207,830 | 全能力视频模型，支持 I2V/T2V/V2V，单文件分发 |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 672 | 63 | 文本生成音乐模型，新发布下载量尚低 |
| [MiniMax-h3-Turbo](https://huggingface.co/lightx2v/MiniMax-h3-Turbo) | lightx2v | 494 | 149,865 | MiniMax-H3 加速版，视频生成更快更省 |
| [MiniMax-H3-Turbo-Lora](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora) | larryvrh | 744 | 0 | Turbo 版 LoRA 适配器，刚发布尚未产生下载 |
| [PinkCherry_MiniMax-H3](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3) | SexGod1979 | 311 | 473 | MiniMax-H3 社区微调版（成人向），Apache-2.0 |
| [MiniMax-H3-Realism-People-LoRA](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA) | fal | 181 | 9,060 | 写实人物 LoRA，fal 出品提升人像真实感 |
| [Anima-2.9B](https://huggingface.co/Gazingstars123/Anima-2.9B) | Gazingstars123 | 165 | 10,106 | 动漫风格文生图模型，ComfyUI 单文件 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) | nvidia | 381 | 1,366 | 语音对话专用模型，NVIDIA Labs 出品 |
| [Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny) | inclusionAI | 237 | 2,283 | 国内团队小型专用模型，MIT 协议 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 890 | 0 | Qwen3.8-27B 量化版，刚发布尚未有下载 |
| [Qwen3.8-27B-FP8](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 331 | 0 | 官方 FP8 量化版，降低部署门槛 |
| [Qwen3.8-2.4T-A95B-FP8](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B-FP8) | Qwen | 186 | 9,334 | 大 MoE 模型 FP8 量化版 |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF) | unsloth | 417 | 596,774 | Muse-Glimmer 量化版，下载近 60 万 |
| [Muse-Glimmer-30B-GGUF](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF) | meta-models | 270 | 228,364 | 官方 GGUF 版，带 arxiv 论文引用 |
| [Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 2,019 | 2,891,524 | 社区知名微调+量化，下载量 289 万，热度惊人 |
| [MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) (Comfy-Org 版) | Comfy-Org | 1,325 | 11,768,622 | ComfyUI 专用版，下载量超 1176 万，生态集成标杆 |
| [MiniMax-H3_comfy](https://huggingface.co/Kijai/MiniMax-H3_comfy) | Kijai | 342 | 0 | 社区 ComfyUI 工作流适配 |
| [MiniMax-H3-GGUF](https://huggingface.co/unsloth/MiniMax-H3-GGUF) | unsloth | 158 | 136,774 | 视频模型的 GGUF 量化探索，支持 stable-diffusion.cpp |

---

## 生态信号

**MiniMax-H3 生态现象级爆发**：从官方基础模型到 Turbo、LoRA、GGUF、ComfyUI 集成，再到社区微调，H3 已形成完整生态链。Comfy-Org 版本下载量超 1176 万，是有史以来最成功的视频模型生态之一。

**开源权重全面压制闭源**：本周榜单全部为开放权重模型，从巨头（Qwen、DeepSeek、NVIDIA）到创业公司（MiniMax、LiquidAI）均选择开源战略。

**量化与微调活动空前活跃**：unsloth 成为量化基础设施核心，GGUF/FP8 是主流格式。社区微调呈现两极——DavidAU 的“Uncensored”微调下载达 289 万，同时出现成人向微调内容，平台治理值得关注。

**多模态成为主战场**：前五名有四个是多模态模型，图生视频/文生视频是当前最热风口。

---

## 值得探索

1. **[Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 本周点赞冠军，多模态 LLM 代表作品，技术路线和性能值得深入研究

2. **[MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) 全家桶** — 从基础模型到 [ComfyUI 版](https://huggingface.co/Comfy-Org/MiniMax-H3)、[Turbo 版](https://huggingface.co/lightx2v/Minimax-h3-Turbo)、[GGUF 版](https://huggingface.co/unsloth/MiniMax-H3-GGUF)，是观察视频生成模型生态演进的绝佳案例

3. **[DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — 下载量突破 160 万，V4 系列的快速版在效率与质量间取得平衡，代表 LLM 实用化方向

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*