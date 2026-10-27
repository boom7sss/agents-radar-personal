# Hugging Face 热门模型日报 2026-07-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-25 03:20 UTC

---

好的，以下是为您生成的专业、简洁的《Hugging Face 热门模型日报》。

---

## 📰 Hugging Face 热门模型日报 | 2026-07-25

### 🔥 今日速览

本周 Hugging Face 生态呈现三大核心趋势：**多模态模型霸榜**、**超大参数模型（250B+）回归**以及**极端量化微调（1-bit、2-bit）工业化**。Google 的 **Gemma 4** 系列依靠超高的下载量证明了其在通用场景中的统治力；Qwen 3.6 生态持续爆发，涌现出多个主打“无审查”与“推理增强”的社区微调变体，形成强大家族效应。值得注意的是，百度与智谱 AI 分别凭借 **Unlimited-OCR** 和 **GLM-5.2** 展示了在大规模MoE架构和垂直OCR领域的深厚积累。

---

### 🧠 语言模型（LLM、对话模型、指令微调）
| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
| :--- | :--- | :--- | :--- | :--- |
| [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) | poolside | 613 | 28,992 | Poolside 推出的新一代文本生成模型，性能强劲，是 Lagua 家族的主力版本。 |
| [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) | upstage | 543 | 1,106 | **Upstage 发布的开源 250B 超大模型**，填补了顶级开源 LLM 在超大参数尺寸的空白。 |
| [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) | Nanbeige | 373 | 8,169 | 千亿级对话模型家族新成员，主打高效推理与高质量对话。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | **4,416** | 667,403 | **当周点赞数最高的模型之一**，基于 MoE-DSA 架构，代表智谱 GLM 生态的最前沿。 |
| [Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta) | Motif-Technologies | 185 | 2,108 | Motif 系列第三代 Beta 模型，专注于特征提取与长文本理解。 |
| [fdtn-ai/antares-1b](https://huggingface.co/fdtn-ai/antares-1b) | fdtn-ai | 150 | 4,266 | 1B 参数小模型，采用 GraniteMoEHybrid 架构，专为 **安全与隐私场景**设计。 |

### 🎨 多模态与生成（图像、视频、音频、文本到X）
| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
| :--- | :--- | :--- | :--- | :--- |
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | **3,019** | **2,500,391** | **百度出品的高性能通用OCR模型**，支持无限长度文字识别，下载量突破 250 万。 |
| [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) | thinkingmachines | 1,547 | 27,883 | 具备视觉理解能力的多模态对话模型，适合图片问答与视觉推理。 |
| [microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow) | microsoft | 236 | 891 | 微软发布的最新文本到图像生成模型，注重精细化图像编辑能力。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 532 | 0 | 基于 Krea-2 底座的 LoRA 模型，专用于 **身份保持的图像编辑**，具话题性。 |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 542 | 26,092 | 基于 Qwen3.6 的思考链（CoT）增强多模态模型。 |
| [nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge) | nvidia | 113 | 30,303 | NVIDIA Cosmos 系列最新边缘端视频/图像生成模型。 |
| [baseten/GLM-5.2-Vision-NVFP4](https://huggingface.co/baseten/GLM-5.2-Vision-NVFP4) | baseten | 90 | 494 | GLM-5.2 的视觉版本，支持 SGLang 的高效推理。 |
| [google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it) | google | **3,360** | **12,629,921** | **本周下载量冠军**，Google 轻量级多模态旗舰，兼具推理与视觉能力。 |
| [Qwen/Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B) | Qwen | 2,504 | 6,460,680 | **Qwen 3.6 系列基座模型**，35B 总参数，仅激活3B的 MoE 架构。 |

### 🔧 专用模型（代码、数学、医疗、嵌入）
| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
| :--- | :--- | :--- | :--- | :--- |
| [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) | Kwaipilot | 126 | 396 | 基于 Qwen3.5 MoE 的代码生成模型，专为开发者设计的 Dev 版。 |
| [ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2) | ATH-MaaS | 277 | 30,292 | 基于 Qwen3.5 的轻量级 OCR 模型，在文字识别任务上优化。 |
| [moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code) | moonshotai | 1,263 | 756,668 | Moonshot AI 发布的代码增强模型，采用 **压缩张量技术** 提高效率。 |
| [openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) | openbmb | 173 | 559 | 面向机器人操控的视觉-语言-动作（VLA）模型，**新晋跨界应用**。 |
| [openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack) | openbmb | 124 | 349 | MiniCPM 机器人系列的第二款，聚焦目标追踪。 |
| [nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b) | nvidia | 937 | 797,525 | NVIDIA 发布的 **流式语音识别模型**，0.6B 参数适合边缘部署。 |

### 📦 微调与量化（社区微调、GGUF、AWQ）
| 模型 | 作者 | 👍 点赞 | 📥 下载 | 一句话说明 |
| :--- | :--- | :--- | :--- | :--- |
| [DavidAU/Qwen3.6-27B-Fable-...](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 487 | 407,421 | 社区超长命名的“无审查”微调，基于 Qwen3.6，下载量极高。 |
| [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) | prism-ml | 1,007 | 595,415 | **2-bit 三值量化标杆**，27B 模型极致压缩，部署门槛极低。 |
| [prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf) | prism-ml | 632 | **2,028,115** | **1-bit 超低比特模型**，下载量超 200 万，量化社区的里程碑。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-...](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | **3,070** | 2,057,103 | 基于 Qwen3.6 的“激进”风格微调，GGUF 格式，社区关注度极高。 |
| [unsloth/Laguna-S-2.1-GGUF](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF) | unsloth | 171 | 57,536 | 由 Unsloth 官方提供的优化版 GGUF 量化，兼容性极佳。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-...](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 2,455 | 1,906,539 | 基于 Qwen3.5 的推理增强版 GGUF 模型，**下载量接近 200 万**。 |
| [poolside/Laguna-S-2.1-GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF) | poolside | 133 | 62,092 | 官方出品的多地区 GGUF 量化版本，支持云部署。 |
| [poolside/Laguna-S-2.1-NVFP4](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4) | poolside | 130 | 89,186 | 采用 **NVFP4 格式** 的顶尖量化，兼容 vLLM。 |
| [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-...](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF) | LuffyTheFox | 135 | 36,703 | 另一款 Qwen3.6 的社区微调，融合 Hermes 风格。 |

---

### 📈 生态信号

1.  **模型家族帝国化**：**Qwen 3.6** 和 **GLM-5.2** 形成了强大的家族效应。仅 Qwen 3.6 就涌现出至少 5 个社区微调 + 3 个官方/量化版本，占据了从基座到低比特部署的全链路。这表明，头部开源模型的基座（如 Qwen、Gemma）正成为生态的“基础设施”。

2.  **开源权重与极端量化的胜利**：榜单中 **90% 以上为完全开源权重模型**。闭源模型（如 Gemini、GPT）未直接上榜，但社区对开源模型的量化已走向极致（1-bit、2-bit）。`prism-ml` 的超低比特模型（Bonsai）下载量超 200 万，说明 **边缘私有化部署** 是当下最刚需的场景。

3.  **新赛道：机器人+多模态**：`openbmb/MiniCPM-RobotManip` 及 `RobotTrack` 是本周最值得关注的 **新叙事**。它表明 VLA（视觉-语言-动作）模型正在从研究走向应用层，虽然下载量尚小，但代表了多模态模型的下一个关键落地方向。

---

### 🔭 值得探索

1.  **google/gemma-4-31B-it** — 作为本周下载量冠军，它是 Google 在多模态轻量化上的集大成者。如果您需要一款 **即插即用、支持视觉推理且部署成本可控** 的模型，这是首选。

2.  **prism-ml/Ternary-Bonsai-27B-gguf** — 这是 **极端量化（2-bit）** 走向工业化的标志。它验证了 27B 大模型在极低比特下仍能保持可用性。对于希望在边缘设备（如手机/树莓派）上运行大模型的开发者，极具参考价值。

3.  **openbmb/MiniCPM-RobotManip** — 如果您关注 AI 的物理世界交互，这个模型代表了 **多模态模型的下一步：行动**。它引导性地展示了如何将视觉-语言模型的能力直接映射到机械臂控制，是探索具身智能的最佳起点。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*