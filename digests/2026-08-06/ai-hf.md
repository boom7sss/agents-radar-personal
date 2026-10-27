# Hugging Face 热门模型日报 2026-08-06

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-06 03:15 UTC

---

# Hugging Face 热门模型日报（2026-08-06）

## 今日速览

本周 Hugging Face 热门榜由多模态模型与开源 MoE 主导。Moonshot 的 **Kimi-K3** 以 10,131 点赞成为周榜第一，下载量已破 112 万；百度 **Unlimited-OCR** 以 270 万下载领跑实用型模型。**DeepSeek-V4-Flash** 与 **GLM-5.2** 保持高热度，DeepSeek 的 GGUF 量化版也已同步上线。**MiniMax-H3** 视频生成模型发布后，迅速出现 ComfyUI 封装与 GGUF 量化版本，视频生成正走向本地化工作流。**Qwen3.6-35B-A3B** 则是本周社区微调最活跃的基座，多个 uncensored / Hermes 风格衍生模型上榜。

## 热门模型

### 🧠 语言模型

- [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) — 作者：deepseek-ai｜点赞：2,031｜下载：2,737,621。DeepSeek-V4-Flash 主模型，周下载超 270 万，是当前对话/文本生成最热入口。

- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — 作者：deepseek-ai｜点赞：2,510｜下载：433,284。DeepSeek-V4-Flash 的 0731 快照版，点赞更高但下载量低于主模型。

- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — 作者：zai-org｜点赞：4,851｜下载：2,234,662。GLM 系列最新 MoE 对话模型，高下载与高点赞并存。

- [LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B) — 作者：LiquidAI｜点赞：288｜下载：47,393。Liquid AI 的 2.6B 文本生成模型，主打小参数、高能效。

- [deepgrove/maple-preview](https://huggingface.co/deepgrove/maple-preview) — 作者：deepgrove｜点赞：162｜下载：0。DeepGrove 的 MoE 文本生成预览版，代表新团队进入开源 LLM 赛道。

- [inclusionAI/Ling-3.0-flash](https://huggingface.co/inclusionAI/Ling-3.0-flash) — 作者：inclusionAI｜点赞：158｜下载：25。Ling-3.0 的 flash 版，采用混合架构与自定义代码加载。

- [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) — 作者：XYZAILab｜点赞：417｜下载：1,317。基于 Qwen3.5-MoE 的轻量文本/多模态模型。

- [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) — 作者：XYZAILab｜点赞：366｜下载：1,388。Aquila 专业版，强化 agentic-search 能力。

- [LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B) — 作者：LGAI-EXAONE｜点赞：129｜下载：325。750B 总参数、37B 激活的 MoE 大模型，EXAONE 系列开源。

### 🎨 多模态与生成

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 作者：moonshotai｜点赞：10,131｜下载：1,125,935。Kimi 第三代多模态模型，周点赞第一，支持图像+文本输入。

- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) — 作者：MiniMaxAI｜点赞：2,520｜下载：10,841。支持文本/图像到视频的生成模型，本周视频类代表。

- [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) — 作者：Comfy-Org｜点赞：762｜下载：2。MiniMax-H3 的 ComfyUI 单文件封装，便于工作流集成。

- [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) — 作者：thinkingmachines｜点赞：309｜下载：15,500。小型图像文本对话模型，主打轻量多模态推理。

- [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) — 作者：microsoft｜点赞：276｜下载：435,784。微软视觉语言模型，下载量高，适合通用图像理解。

- [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — 作者：Audio8｜点赞：275｜下载：11,276。TTS 预览模型，基于 ArkTTS，面向语音合成。

- [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) — 作者：owensong｜点赞：417｜下载：2,072。轻量本地 TTS，支持 CPU 和边缘设备。

- [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) — 作者：lodestones｜点赞：192｜下载：0。基于 Krea 2 的 LoRA 文生图模型，适配 ComfyUI。

- [nvidia/NVIDIA-NemotronLabs-VoiceChat-11B](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B) — 作者：nvidia｜点赞：126｜下载：80。NVIDIA 的语音对话模型，面向实时语音交互研究。

### 🔧 专用模型

- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — 作者：baidu｜点赞：3,909｜下载：2,703,366。百度 OCR 专用模型，下载量最高，适合通用文字识别落地。

- [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) — 作者：Kwaipilot｜点赞：497｜下载：15,381。面向代码生成的 Qwen3.5-MoE 模型，开发版。

- [mistralai/Shieldstral-1.0-3B](https://huggingface.co/mistralai/Shieldstral-1.0-3B) — 作者：mistralai｜点赞：132｜下载：166。Mistral 的 3B 安全护栏模型，用于输出安全审核。

### 📦 微调与量化

- [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — 作者：unsloth｜点赞：502｜下载：111,678。DeepSeek-V4-Flash-0731 的 GGUF 量化版，方便本地部署。

- [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) — 作者：unsloth｜点赞：316｜下载：170,055。Kimi-K3 的 GGUF 版，由 Unsloth 快速跟进。

- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — 作者：DavidAU｜点赞：1,593｜下载：1,633,405。Qwen3.6-27B 的高热度社区微调 GGUF，定位 uncensored / Heretic 风格。

- [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) — 作者：DavidAU｜点赞：283｜下载：323,116。Qwen3.5-9B 社区微调 GGUF，包含 Imatrix 量化版本。

- [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V7-GGUF) — 作者：LuffyTheFox｜点赞：390｜下载：308,857。Qwen3.6-35B-A3B 的 uncensored GGUF 微调版，支持视觉。

- [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) — 作者：EschaLabs｜点赞：210｜下载：2,987。社区 MoE 微调版，基于 Qwen3.6-35B-A3B 架构。

- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — 作者：HauhauCS｜点赞：3,319｜下载：1,930,898。本周高赞 Qwen3.6 社区视觉/GGUF 微调，下载近 200 万。

- [ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot) — 作者：ethanfel｜点赞：291｜下载：0。Qwen3-VL-32B 的 INT8/ComfyUI 社区转换版。

- [realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs) — 作者：realrebelai｜点赞：139｜下载：40,010。MiniMax-H3 视频模型的 GGUF 量化版，服务本地视频生成。

## 生态信号

生态信号：Kimi-K3、DeepSeek-V4-Flash、GLM-5.2 构成第一梯队开源重量级发布，开源权重势头明显强于闭源。Qwen 3.6-35B-A3B 与 Qwen3.5-MoE 是本周社区微调最活跃的基座，围绕 uncensored、视觉和 Hermes 风格出现大量衍生模型。Unsloth 几乎同步提供头部模型的 GGUF 量化，说明量化服务已成为开源生态的基础设施。MiniMax-H3 的视频模型发布后，ComfyUI 封装与 GGUF 量化迅速跟进，视频生成也开始复制 LLM 的本地化路径。

## 值得探索

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)：周点赞第一，下载量破百万，且自带 compressed-tensors 特性，是研究多模态模型与压缩部署的最佳样本。
- [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)：文本/图像到视频的新模型，配套 ComfyUI 单文件和 GGUF 量化已经出现，适合追踪视频生成本地化工作流。
- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)：下载量 270 万居首，OCR 专用模型在真实场景中的需求已被验证，值得做业务集成和效果复现。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*