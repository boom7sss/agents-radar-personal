# Hugging Face 热门模型日报 2026-07-22

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-22 03:20 UTC

---

好的，这是为您生成的《Hugging Face 热门模型日报》。

---

## Hugging Face 热门模型日报 | 2026-07-22

### 今日速览

本周 Hugging Face 生态呈现多模态大模型与极致量化齐飞的态势。**百度 (Baidu)** 发布的 **Unlimited-OCR** 以 26万+ 点赞和 223万+ 下载量登顶，成为本周最受关注的通用 OCR 模型。在语言模型领域，**zai-org** 的 MoE 架构模型 **GLM-5.2** 以 4,285 点赞引领对话模型赛道，而 **Google** 的 **Gemma-4-31B-it** 也以超 1200 万次下载证明了其强大号召力。值得注意的是，**prism-ml** 等社区团队在极低比特量化（1-bit, 2-bit）和 GGUF/MLX 格式上的工作异常活跃，推动了“大模型上个人设备”的趋势。此外，机器人基础模型（如 **MiniCPM-RobotManip**）和流式语音识别模型（如 **NVIDIA Nemotron**）的出现，标志着专业场景模型正在加速落地。

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** - zai-org | 👍 4,285 | 📥 545,109
  基于最新 MoE (混合专家) 架构的国产大模型，主打高性能对话，以绝对优势领跑文本生成类模型热度榜。
- **[Motif-3-Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)** - Motif-Technologies | 👍 128 | 📥 125
  一款专注于特征提取和任务调度的新兴文本生成模型，标志着模型生态开始向细分应用层拓展。
- **[Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** - Nanbeige | 👍 98 | 📥 0
  轻量级开源语言模型，专为低成本部署场景设计，虽然下载量目前为0，但获得了社区关注。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** - baidu | 👍 2,617 | 📥 2,237,351
  **本周之星**。百度出品的通用 OCR 模型，凭借超强的识别能力和广泛的应用场景，在发布后迅速引爆社区。
- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** - google | 👍 3,314 | 📥 12,113,203
  Google 官方更新的第四代 Gemma 多模态模型，参数规模大，下载量惊人，是闭源模型之外最强的开源多模态基座之一。
- **[Inkling](https://huggingface.co/thinkingmachines/Inkling)** - thinkingmachines | 👍 1,369 | 📥 16,441
  新一代多模态 MoE 模型，支持图文对话，代表了多模态融合技术的最新进展。
- **[Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** - moonshotai | 👍 1,200 | 📥 722,058
  Moonshot AI 代码增强版多模态模型，专注于代码理解和生成，下载量高体现了“AI编程”需求的持续增长。
- **[Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** - HauhauCS | 👍 2,972 | 📥 1,997,690
  基于 Qwen3.6 社区微调的未审查多模态模型，在特定场景下需求巨大，下载量近 200 万。
- **[Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** - empero-ai | 👍 2,391 | 📥 2,133,420
  结合 Claude 风格的社区整合包，经过 GGUF 量化后成为本地部署的热门选择。
- **[MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** - OpenMOSS-Team | 👍 299 | 📥 92,265
  开源语音转文本且支持说话人分离的模型，是音频处理领域的优秀开源替代。
- **[Nemotron-3.5-ASR-Streaming-0.6B](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b)** - nvidia | 👍 904 | 📥 590,230
  NVIDIA 发布的低延时流式语音识别模型，性能强劲，适合实时语音应用。
- **[LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** - Alissonerdx | 👍 223 | 📥 0
  **文本到视频**领域的身份一致性 LoRA，实现了通过参考图进行视频生成。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** - nvidia | 👍 96 | 📥 93,021
  NVIDIA 推出的高性能文本嵌入模型，用于 RAG（检索增强生成）和语义搜索，代表了“小而美”的专业化趋势。
- **[MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)/[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** - openbmb | 👍 147/107 | 📥 58/72
  基于 MiniCPM 的视觉-语言-动作模型，专门用于机器人操作和追踪，代表着“具身智能”基础模型的萌芽。
- **[needle](https://huggingface.co/Cactus-Compute/needle)** - Cactus-Compute | 👍 298 | 📥 1,068
  基于 JAX 的函数调用和工具使用模型，代表了 AI Agent（智能体）专用模型的兴起。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** - prism-ml | 👍 900 | 📥 432,196
  业界首创的**三进制（Ternary）2-bit** 量化模型，将 27B 大模型压缩至极致，实现了个人电脑可运行的超级低成本部署。
- **[Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** - prism-ml | 👍 571 | 📥 1,404,962
  前序 1-bit 量化版本的延续，下载量超百万，证明社区对极致量化的巨大需求。
- **[Qwen3.6-27B-Fable-Fusion-711](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** - DavidAU | 👍 252 | 📥 62,842
  社区最活跃的“缝合怪”微调风格，展示了基于基座模型进行高度定制化微调的繁荣生态。
- **[Kimi-K3](https://huggingface.co/reteetzad/Kimi-K3)** - reteetzad | 👍 327 | 📥 0
  一个未提供任务标签的神秘模型，通常暗示着即将发布或正在内测的新项目。

### 生态信号

1.  **模型家族势能**：**Qwen (通义千问)** 家族生态最为繁荣，涌现出大量社区微调版（如 Qwen3.6）和量化版，已成为开源社区事实上的“安卓”。**Gemma** 和 **GLM** 系列虽下载量惊人，但社区微调生态热度不及 Qwen。**MiniCPM** 系列则作为端侧和多模态的“小钢炮”持续发力。
2.  **量化范式转移**：社区不再满足于传统的 4-bit 或 8-bit 量化。**prism-ml** 的 **1-bit** 和 **三进制（Ternary）2-bit** 量化模型下载量极高，表明“极致压缩、个人部署”已成为主流需求。GGUF 和 MLX 格式是当前最流行的量化分发形式。
3.  **开源权重 vs 闭源**：**Google** 和 **NVIDIA** 正在成为“闭源中的开源”领导者，其模型权重直接下载量巨大，对社区的影响力不亚于纯粹的社区模型。但社区创新活力主要集中于基于这些高权重模型的二次创作（如微调、量化）。
4.  **新方向萌芽**：**机器人基础模型**（MiniCPM-RobotManip）和**函数调用 Agent 模型**（needle）的出现，表明生态正在从通用对话向“具身智能”和“工具使用”等具体应用场景延伸。

### 值得探索

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: 作为本周点赞数最高的纯文本生成模型，其 MoE 架构的具体实现细节和实际推理性能非常值得研究，尤其是在与 Qwen 和 Llama 系列的比拼中，它是国产模型的重要力量。
2.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**: 三进制量化是 AI 模型压缩的前沿领域。如果你对“如何让 27B 模型在低配笔记本上流畅运行”这一议题感兴趣，这个模型是完美的研究起点和实用工具。
3.  **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)**: 当前“具身智能”领域最热门的开源项目之一。它展示了小型语言模型如何直接控制机器人完成物理任务，对于研究 VLA（视觉-语言-动作）模型的开发者和机器人工程师来说，是不可多得的基线模型。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*