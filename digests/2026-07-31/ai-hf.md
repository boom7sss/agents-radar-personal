# Hugging Face 热门模型日报 2026-07-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-31 03:32 UTC

---

# Hugging Face 热门模型日报（2026-07-31）

## 今日速览

- **Kimi-K3 周点赞破 9 千**，成为本周最受关注的多模态模型，Unsloth 已迅速跟进 GGUF 版本。
- **Qwen3.6 家族继续霸榜**：官方版下载量超 610 万，同时多个社区微调/GGUF 版本（如 HauhauCS、LuffyTheFox、DavidAU）占据大量席位。
- **开源多模态生态爆发**：30 个热门模型中超过 1/3 涉及多模态理解、TTS 或 OCR，AI 应用正从纯文本向多模态迁移。
- **量化技术持续繁荣**：NVFP4、Ternary 2-bit、MTP-GGUF 等新型量化/微调方案密集出现，本地化部署需求旺盛。

---

## 热门模型

### 🧠 语言模型

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — 作者: poolside | 点赞: 847 | 下载: 73,246  
  说明：Poolside 推出的文本生成模型，主打高效对话能力，因 Unsloth 同步提供 GGUF 版本而热度攀升。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — 作者: Nanbeige | 点赞: 582 | 下载: 24,542  
  说明：百炼智能发布的 3B 轻量级语言模型，适合资源受限场景，凭借高性价比受到中小团队关注。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 作者: zai-org | 点赞: 4,685 | 下载: 1,527,760  
  说明：智谱 AI 新一代 MoE 对话模型，采用 GLM MoE-DSA 架构，下载量超 150 万，中文对话能力强劲。

- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** — 作者: upstage | 点赞: 704 | 下载: 12,411  
  说明：Upstage 开源的 250B 级大模型，主打开放权重与高性能，社区已推出 NVFP4 量化版以降低部署门槛。

- **[amd/Instella-MoE-16B-A3B-Think](https://huggingface.co/amd/Instella-MoE-16B-A3B-Think)** — 作者: amd | 点赞: 94 | 下载: 1,315  
  说明：AMD 基于 DeepSeek-V3 架构推出的 MoE 推理模型，仅激活 3B 参数，体现高效推理与边缘部署趋势。

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** — 作者: Qwen | 点赞: 2,595 | 下载: 6,119,519  
  说明：阿里 Qwen 官方最新 MoE 多模态对话模型，下载量超 600 万，是目前最具人气的开源模型之一，也是众多微调版本的基础。

### 🎨 多模态与生成

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 作者: moonshotai | 点赞: 9,043 | 下载: 387,822  
  说明：月之暗面发布的全新多模态理解模型，支持压缩张量特性，周点赞超 9 千，位列本周榜首。

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** — 作者: owensong | 点赞: 323 | 下载: 1,100  
  说明：面向 CPU/边缘设备的轻量级文本到语音模型，主打本地实时语音合成。

- **[microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** — 作者: microsoft | 点赞: 224 | 下载: 2,316  
  说明：微软推出的多模态计算机智能体（Computer Use）模型，能够理解视觉信息并操作 GUI。

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** — 作者: thinkingmachines | 点赞: 129 | 下载: 840  
  说明：Thinking Machines 的小参数多模态对话模型，与旗舰版 Inkling 形成大小互补。

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** — 作者: Audio8 | 点赞: 128 | 下载: 225  
  说明：新出现的 TTS 预览模型，采用 ARK-TTS 架构，当前仍处于早期扩散阶段。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** — 作者: thinkingmachines | 点赞: 1,654 | 下载: 45,658  
  说明：Thinking Machines 的旗舰多模态视觉语言模型，下载量超 4.5 万，主打通用视觉对话与推理。

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** — 作者: microsoft | 点赞: 122 | 下载: 2,951  
  说明：微软的视觉语言模型，延续 Mage 系列在图像理解上的积累，定位多模态通用任务。

- **[microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet)** — 作者: microsoft | 点赞: 121 | 下载: 3,864  
  说明：微软基于 BitNet 架构的自动语音识别模型，支持 GGML/GGUF，拓展了比特级量化在 ASR 中的应用。

- **[owensong/Inflect-Nano-v2](https://huggingface.co/owensong/Inflect-Nano-v2)** — 作者: owensong | 点赞: 119 | 下载: 654  
  说明：Inflect 系列更小尺寸的 TTS 模型，与 Micro 版共同覆盖从微到小的边缘语音合成场景。

- **[Comfy-Org/Mage-Flow](https://huggingface.co/Comfy-Org/Mage-Flow)** — 作者: Comfy-Org | 点赞: 97 | 下载: 44,714  
  说明：ComfyUI 发布的单文件扩散模型，基于微软 Mage-Flow，用于图像生成工作流的无缝集成。

### 🔧 专用模型

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 作者: baidu | 点赞: 3,589 | 下载: 2,598,659  
  说明：百度开源的通用 OCR 模型，下载量超过 250 万，是目前最火爆的 OCR 模型之一。

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — 作者: Kwaipilot | 点赞: 352 | 下载: 9,225  
  说明：基于 Qwen3.5-MoE 的代码生成模型，面向开发者工具链，兼顾多模态输入与代码能力。

- **[fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** — 作者: fdtn-ai | 点赞: 240 | 下载: 9,820  
  说明：面向安全场景的 1B 参数混合专家模型，轻量但聚焦安全分析任务。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** — 作者: ATH-MaaS | 点赞: 353 | 下载: 57,439  
  说明：基于 Qwen3.5 的 OCR 模型，由 ATH-MaaS 以 Model-as-a-Service 的形式提供，稳定性与下载量均表现亮眼。

### 📦 微调与量化

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — 作者: DavidAU | 点赞: 1,043 | 下载: 955,767  
  说明：社区微调的“无审查”风格 GGUF 模型，下载量接近 96 万，反映用户对个性化对话的强烈需求。

- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** — 作者: unsloth | 点赞: 211 | 下载: 12,178  
  说明：Unsloth 快速推出的 Kimi-K3 GGUF 部署版本，方便本地/边缘端直接运行。

- **[unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3)** — 作者: unsloth | 点赞: 176 | 下载: 766  
  说明：Unsloth 对 Kimi-K3 的适配版本，采用 Compressed-Tensors 优化，改善推理效率与生态兼容性。

- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** — 作者: nota-ai | 点赞: 148 | 下载: 7,755  
  说明：与 Nota 合作推出的 NVFP4 量化版 Solar-Open2，显著降低 250B 级模型的部署门槛。

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)** — 作者: LuffyTheFox | 点赞: 242 | 下载: 162,394  
  说明：基于 Qwen3.6 的 Hermes 风格微调 + GGUF 量化版，专注无审查对话，下载量超 16 万。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 作者: HauhauCS | 点赞: 3,191 | 下载: 1,803,090  
  说明：下载量超 180 万的 Qwen3.6 微调 GGUF 模型，以“激进”对话风格和视觉能力获得社区青睐。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** — 作者: prism-ml | 点赞: 1,117 | 下载: 697,666  
  说明：使用三元量化（2-bit 级）的 27B 模型 GGUF，代表超低比特量化的前沿方向，下载量近 70 万。

- **[unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF)** — 作者: unsloth | 点赞: 259 | 下载: 159,331  
  说明：Unsloth 为 Laguna-S-2.1 提供的 GGUF 量化版，与官方版同步流行，方便 7B 级模型本地部署。

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** — 作者: DavidAU | 点赞: 160 | 下载: 248,173  
  说明：针对 Qwen3.5-9B 的 IMATRIX + MTP 微调 GGUF 模型，下载量已超 24 万，社区定制化痕迹明显。

- **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)** — 作者: EschaLabs | 点赞: 95 | 下载: 201  
  说明：社区对 Qwen3.6-35B-A3B 的 W2 权重配置微调版，目前尚处早期，但已被收藏为 MoE 调优的参考。

---

## 生态信号

当前最明显的趋势是 **Qwen 家族统治级影响力**：官方 Qwen3.6-35B-A3B 与多个社区微调/量化版本占据榜单近三分之一席位，且下载量巨大。多模态成为标配，30 个热门模型中超过 10 个涉及图像、语音或 TTS，尤其是 Kimi-K3 的登顶与微软 Computer Use 模型的出现，标志着下一代助手将深度绑定视觉与操作能力。开源权重继续向高性能、大规模推进（如 Solar-Open2-250B），同时量化社区极度活跃，GGUF、NVFP4、Ternary 2-bit 等手段让 250B 级模型也可在消费级设备上尝试运行。此外，中文开源模型（Kimi、GLM、Qwen、百度）在国际社区形成强大的集群效应，生态多元化趋势明显。

---

## 值得探索

- **[Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**：官方旗舰 MoE 多模态对话模型，下载量 600 万+。无论是作为通用基线、微调底模还是多模态 Agent，都是目前生态中最值得研究的对象。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)**：本周点赞第一。它采用了 compressed-tensors 技术，在保持多模态理解能力的同时优化存储与推理，值得关注其架构创新及后续生态适配。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**：27B 模型被压到 2-bit 三元量化仍能维持对话能力，下载量近 70 万。这项技术可能成为未来端侧大模型的核心突破点，非常适合研究极限量化与模型压缩的人深入探索。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*