# Hugging Face 热门模型日报 2026-07-23

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-23 03:27 UTC

---

好的，作为AI模型生态分析师，以下是基于2026年7月23日数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-23**

#### **今日速览**

本周 Hugging Face 生态呈现多极化繁荣。**谷歌 Gemma-4-31B-it** 凭借其强大的多模态能力与谷歌品牌效应，下载量突破千万，毫无悬念地成为本周流量之王。与此同时，**智谱 GLM-5.2** 凭借 MoE 架构与 DSA 技术，以高点赞数领跑社区关注度，显示学术界与工业界对高效稀疏模型的持续追捧。在社区微调领域，**Qwen3.6** 系列生态异常活跃，涌现出大量量化与“无审查”变体，成为本周社区创新的核心温床。值得注意的是，**机器人操作模型** (MiniCPM-RobotManip) 和 **身份保持视频生成** (LTX-Best-Face-ID) 等细分赛道开始出现具有影响力的模型，预示着 AI 应用正在向物理世界和个性化内容创作加速渗透。

---

#### **热门模型分类**

##### 🧠 语言模型

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)**
  - 作者: poolside | 点赞: 405 | 下载: 3,056
  - poolside 发布的代码生成模型，专注于软件工程领域，本周其多个 GGUF 和 NVFP4 量化版本也同步上榜，显示了社区对专业领域模型的高度关注。
- **[upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)**
  - 作者: upstage | 点赞: 313 | 下载: 0
  - Upstage 发布的开源 250B 超大模型，定位为前沿研究模型，虽然下载量尚为零，但作为超大尺寸开源权重代表，其潜在影响力不容小觑。
- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**
  - 作者: Nanbeige | 点赞: 243 | 下载: 0
  - 小而美的 3B 语言模型，专注于高效推理，适合资源受限场景，其出现在热门榜上反映了对小模型实用性的需求。
- **[Motif-Technologies/Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**
  - 作者: Motif-Technologies | 点赞: 161 | 下载: 125
  - Motif 推出的新一代模型，标签包含“feature-extraction”，可能专注于文本嵌入与检索，代表了 RAG 生态对高质量嵌入模型的需求。

##### 🎨 多模态与生成

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 点赞: 3,330 | 下载: 12,113,203
  - 本周绝对王者，谷歌最新 Gemma 4 系列旗舰，强大的多模态（Image-Text-to-Text）能力与优秀的对话表现，使其成为开源社区的必选模型。
- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 4,342 | 下载: 545,109
  - 智谱 AI 的最新迭代，采用 MoE 和 DSA 技术，以最高点赞数成为社区焦点，代表了国产大模型在架构创新上的突破。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 2,755 | 下载: 2,237,351
  - 百度推出的通用 OCR 模型，以强大的文本识别能力和极高的下载量霸榜，是工业化多模态应用的典型案例。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 3,008 | 下载: 1,997,690
  - 基于 Qwen3.6 的社区微调版本，通过 MoE 架构和“无审查”风格，迎合了特定用户群体的需求，是社区活力的体现。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  - 作者: thinkingmachines | 点赞: 1,459 | 下载: 16,441
  - 全新的多模态模型系列，支持图文及音频输入，体现了多模态融合的前沿趋势，其 GGUF 版本也已迅速跟上。
- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**
  - 作者: moonshotai | 点赞: 1,226 | 下载: 722,058
  - 月之暗面推出的 Kimi 模型代码增强版，结合压缩技术，专为代码生成和理解优化。
- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)**
  - 作者: conradlocke | 点赞: 498 | 下载: 0
  - 基于 Krea-2 模型的 LoRA，用于身份保持的图像编辑，是图像生成领域个性化应用的典型代表。
- **[microsoft/Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**
  - 作者: microsoft | 点赞: 132 | 下载: 0
  - 微软推出的文本到图像生成模型，虽然下载量不大，但作为大厂的又一布局，显示了文生图赛道的持续热度。
- **[nvidia/Cosmos3-Edge](https://huggingface.co/nvidia/Cosmos3-Edge)**
  - 作者: nvidia | 点赞: 91 | 下载: 6,623
  - 英伟达 Cosmos 系列的新模型，可能专注于边缘计算或特定场景的视频生成，代表了模型向小型化和实用化发展。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
  - 作者: Alissonerdx | 点赞: 235 | 下载: 0
  - 基于 LTX 视频模型的 LoRA，专注于保持人物身份特征的视频生成，是AIGC视频领域的热门方向。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - 作者: OpenMOSS-Team | 点赞: 308 | 下载: 92,265
  - 复旦 MOSS 团队的音频模型，集成了转录和说话人分离功能，是音频理解领域的优秀代表。
- **[nvidia/nemotron-3.5-asr-streaming-0.6b](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)**
  - 作者: nvidia | 点赞: 914 | 下载: 590,230
  - 英伟达推出的流式 ASR 模型，专为实时语音识别场景设计，0.6B 的小参数使其适合部署。

##### 🔧 专用模型

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**
  - 作者: ATH-MaaS | 点赞: 249 | 下载: 17,162
  - 基于 Qwen3.5 的专用 OCR 模型，专注于增强图片中的文字识别能力，是 OCR 赛道的又一有力竞争者。
- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**
  - 作者: openbmb | 点赞: 155 | 下载: 58
  - 面壁智能推出的机器人操作模型，属于视觉-语言-动作（VLA）模型，是 AI 从数字世界走向物理世界的关键一步。
- **[openbmb/MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)**
  - 作者: openbmb | 点赞: 114 | 下载: 72
  - 与上面模型同系列，专注于机器人目标跟踪，共同构成了完整的机器人感知与操控方案。

##### 📦 微调与量化

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - 作者: prism-ml | 点赞: 948 | 下载: 432,196
  - 采用三值化（Ternary）的极端量化模型，将 27B 模型压缩至 2-bit，是模型压缩领域的先锋探索。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  - 作者: prism-ml | 点赞: 598 | 下载: 1,404,962
  - Bonsai 系列的基础量化版本，1-bit 的极致量化，证明了社区对超低比特量化模型的巨大兴趣和实际需求。
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  - 作者: DavidAU | 点赞: 330 | 下载: 62,842
  - 社区微调模型的极致代表，融合了多种技术和思路（Unsloth、无审查等），展示了社区强大的“炼丹”能力。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 点赞: 2,418 | 下载: 2,133,420
  - 结合了 Qwen3.5 与 Claude 风格的社区融合模型，拥有极高的下载量，证明了“数据蒸馏”和“风格融合”微调的热门程度。
- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**
  - 作者: prism-ml | 点赞: 165 | 下载: 25,273
  - Bonsai 系列针对 Apple Silicon 的 MLX 框架优化版本，使得在本地 Mac 上运行 27B 模型成为可能。

---

#### **生态信号**

1.  **Gemma vs. GLM vs. Qwen 三足鼎立**：本周榜单清晰展示了当前开源大模型的竞争格局。谷歌 Gemma 4 以海量下载领先，智谱 GLM 5.2 以技术创新获得高关注，而阿里 Qwen3.6 则通过极高的社区活跃度（众多微调、量化版本）巩固了其生态位。开源权重体系的头部效应愈发明显。
2.  **极致量化的军备竞赛**：以 `prism-ml` 的 Bonsai 系列为代表，模型量化正迈向 2-bit 乃至 1-bit 的极端领域。这背后是社区对“在消费级硬件上运行大模型”的强烈渴望，尽管这会带来性能损失，但其极高的实用价值依然驱动着大量下载。
3.  **机器人操作与音频理解成为新增长点**：MiniCPM-RobotManip 和 MOSS-Transcribe-Diarize 的入榜，标志着 AI 模型正从单纯的“聊”和“画”向“动手”和“听懂”拓展。未来几周，专注于物理世界交互和特定领域（如语音、OCR）的专用模型将越来越多。

#### **值得探索**

1.  **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**: **必试模型**。作为谷歌最新旗舰，它的多模态能力和对话质量代表了当前开源模型的天花板，是评估和比对其他模型的最佳基准。
2.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**: **探索未来**。这是 AI 进入物理世界的窗口，如果你想了解 VLA（视觉-语言-动作）模型的工作原理，这个模型是绝佳的起点。
3.  **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**: **极限挑战**。尝试在你的本地设备上运行这个 1-bit 的 27B 模型，体验极致压缩带来的性能和资源消耗的极限，这将是对模型压缩技术最直观的感受。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*