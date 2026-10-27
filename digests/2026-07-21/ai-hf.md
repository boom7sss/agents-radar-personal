# Hugging Face 热门模型日报 2026-07-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-21 03:22 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026年7月21日数据生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报** | 2026年7月21日

#### **今日速览**

本周 Hugging Face 生态呈现出三大看点：第一，以 **Qwen 3.6** 和 **MiniCPM5** 为基础的社区微调与量化模型持续霸榜，展现出强大的社区活力；第二，**三元量化（Ternary）** 和 **1-bit 模型** 不再是概念，以 `prism-ml` 的 **Bonsai** 系列为代表的极低比特模型下载量惊人，表明边缘部署需求旺盛；第三，Google **Gemma-4-31B-it** 凭借其顶级权重和极高的下载量，在官方模型中一骑绝尘，但被大量社区魔改模型包围。此外，机器人基础模型 `MiniCPM-RobotManip` 和 `RoboTrack` 的出现，预示多模态模型的物理世界应用正在萌芽。

---

#### **热门模型**

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** (腾讯, 849赞, 13.7k下载)  
  腾讯开源的第三代混元大模型底座，作为基础模型在上游引发广泛关注，是后续社区微调的起点。

- **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** (月之暗面, 1.2k赞, 714k下载)  
  在 Kimi K2.5 基础上专精代码能力的变体，使用压缩张量技术，在编码场景具备高性价比。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** (zai-org, 4.2k赞, 532k下载)  
  本周点赞数最高的模型之一。基于GLM架构的MoE大模型，是智谱AI生态的重要开源成员，社区反响热烈。

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** (AngelSlim, 149赞, 110k下载)  
  腾讯Hy3模型的GGUF量化版，直接受益于上游基础模型的爆火，推动了其在消费级硬件上的本地化部署。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)** (GnLOLot, 159赞, 5.5k下载)  
  在MiniCPM 1B小模型上融合Claude风格蒸馏数据，证明了小模型通过高质量思维链数据也能具备出色推理能力。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)** (谷歌, 3.3k赞, 11.9M下载)  
  **下载量之王**。Gemma-4系列最强的指令模型，综合性能领先，凭借谷歌的品牌效应和绝对实力成为多模态领域标杆。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** (百度, 2.5k赞, 2.1M下载)  
  一个“无限”OCR模型，能处理极其复杂和长文本的识别场景，在实用性任务中表现亮眼，下载量惊人。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** (empero-ai, 2.4k赞, 2.1M下载)  
  基于Qwen3.5微调的视觉-文本模型，融合了神话与推理数据集，量化后体积小、下载量大。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** (HauhauCS, 2.9k赞, 2M下载)  
  Qwen 3.6 MoE模型的无审查激进微调版，在追求“自由”对话的社区中极受欢迎，体现了特定领域的需求。

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)** (Wan-AI, 145赞, 2.4k下载)  
  专业的图生视频模型，专注于舞蹈动作生成，开辟了视频生成在文娱方向的垂直应用场景。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** (OpenMOSS-Team, 293赞, 87.5k下载)  
  集语音转写和说话人日记化于一体的多模态模型，解决了音频处理中的实际痛点，实用性强。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** (Cactus-Compute, 292赞, 950下载)  
  基于JAX的、专为函数调用和工具使用设计的“针”模型，是Agent应用生态的重要基础设施。

- **[nvidia/Nemotron-3-Embed-1B-BF16](https://huggingface.co/nvidia/Nemotron-3-Embed-1B-BF16)** (英伟达, 87赞, 61.7k下载)  
  英伟达出品的高质量文本嵌入模型，1B参数在检索和RAG任务中表现出色，是构建知识库的利器。

- **[openbmb/MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip) & [RoboTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** (openbmb, ~136赞, 0下载)  
  **值得关注**。虽然目前下载量为零，但作为视觉-语言-动作（VLA）机器人基础模型，代表了多模态模型向物理世界控制延伸的前沿方向。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** (prism-ml, 543赞, **1.26M下载**)  
  27B参数量化至**1-bit**的极端压缩模型，下载量巨大。验证了极低比特量化的实用性，牺牲部分精度换取在边缘设备上的流畅运行。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** (prism-ml, 857赞, 339k下载)  
  Bonsai系列的另一分支，采用**三元量化（-1, 0, 1）**，在2-bit级别实现了令人惊讶的模型质量，代表了量化技术的全新方向。

- **[DavidAU/Qwen3.6-27B-Fable...Uncensored...GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** (DavidAU, 160赞, 16.7k下载)  
  一个典型的长标题社区模型，集合了无审查、故事融合、多模型拼接等多种思路，反映了社区“炼丹”文化的活跃。

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V3-GGUF)** (LuffyTheFox, 85赞, 15k下载)  
  同样基于Qwen 3.6 MoE的无审查量化版，说明35B-A3B架构已成为社区最热门的微调基座之一。

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)** (unsloth, 111赞, 6.8k下载)  
  为`thinkingmachines/Inkling`多模态模型提供的官方GGUF量化版，由知名高效微调工具Unsloth提供，兼具易用性与性能。

---

#### **生态信号**

- **Qwen 3.6 成为社区“硬通货”**：榜单中大量基于Qwen 3.6（特别是35B-A3B MoE版本）的微调和量化模型，表明其强大的多模态基座能力已被社区广泛认可，成为生态中最活跃的“骨架”。
- **“反向蒸馏”与“社区造神”**：模型如 `Qwythos` 和 `MiniCPM...Fable5` 明确标注了从Claude蒸馏知识，表明以高性能闭源模型提升开源小模型质量已成为标准操作流程。同时，社区通过“无审查”、“激进”等标签塑造特定风格的模型，形成独特的长尾需求生态。
- **1-bit / Ternary 量化登上台面**：`prism-ml`的Bonsai系列是本周最亮眼的技术趋势。从1-bit到三元量化，极低比特技术正从论文走向落地，下载量数以百万计，预示着移动端和IoT设备部署大模型的技术壁垒正在被打破。

---

#### **值得探索**

1.  **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) & [mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)**：如果你是模型压缩或边缘计算研究者，这是必测模型。探索“三元”量化的极限，它可能是让大模型跑在手机上的关键。

2.  **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**（及其GGUF版[`unsloth/inkling-GGUF`](https://huggingface.co/unsloth/inkling-GGUF)）：一个名字独特、任务标记为多模态的模型，代表了社区对小而精尖通用模型的追求。尝试用它做一次复杂的多轮图片问答，感受其能力边界。

3.  **[moonshotai/Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)**：如果你关注代码生成或压缩技术，这个模型值得深究。它展示了如何通过对现有强模型（Kimi K2.5）进行特定领域微调并使用“压缩张量”技术，在保持基础能力的同时优化代码性能。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*