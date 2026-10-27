# Hugging Face 热门模型日报 2026-07-20

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-20 03:42 UTC

---

好的，作为AI模型生态分析师，以下是基于2026年7月20日Hugging Face Hub热门模型数据生成的日报。

---

### **Hugging Face 热门模型日报 (2026-07-20)**

**今日速览**

本周Hugging Face生态呈现三大亮点：首先，**多模态模型全面爆发**，从通用多模态到专用OCR，强者恒强，其中谷歌的 `gemma-4-31B-it` 凭借海量下载量强势登顶。其次，**1-bit/极端量化成为社区主流叙事**，`prism-ml` 发布的 `Bonsai-27B` 系列（1-bit）及其量化变体凭借惊人的下载量成为焦点，展示了社区对极致效率的追求。最后，**国产模型生态**（如GLM-5.2、百度OCR）以及基于**Qwen 3.5/3.6的微调/量化模型**占据了榜单半壁江山，开源社区活力十足。

### **热门模型分类**

#### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
  - 作者: zai-org | 点赞: 4,172 | 下载: 536,177
  - 说明: GLM系列最新旗舰，采用MoE-DSA架构，凭借强大的对话与生成能力稳居本周点赞榜第一。
- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**
  - 作者: prism-ml | 点赞: 503 | 下载: 1,262,894
  - 说明: 首个在社区大规模流行的1-bit 27B模型，通过极致量化实现了在消费级硬件上的部署，下载量惊人。
- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**
  - 作者: prism-ml | 点赞: 796 | 下载: 338,945
  - 说明: Bonsai-27B的三元（Ternary）量化版本（2-bit），在极低比特与模型质量之间取得了巧妙平衡。
- **[prism-ml/Bonsai-27B-mlx-1bit](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit)**
  - 作者: prism-ml | 点赞: 140 | 下载: 21,690
  - 说明: Bonsai-27B的Apple MLX 1-bit版本，专为Apple Silicon芯片优化，拓展了端侧部署的可能性。
- **[prism-ml/Ternary-Bonsai-27B-mlx-2bit](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-mlx-2bit)**
  - 作者: prism-ml | 点赞: 121 | 下载: 17,869
  - 说明: Bonsai-27B系列在MLX平台的2-bit版本，进一步丰富了其在Mac设备上的部署选择。
- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**
  - 作者: tencent | 点赞: 836 | 下载: 13,698
  - 说明: 腾讯混元系列的最新语言模型版本，获得社区高度关注，是国产大模型的重要玩家。
- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**
  - 作者: AngelSlim | 点赞: 139 | 下载: 109,749
  - 说明: 腾讯 `Hy3` 模型的社区GGUF量化版，极大降低了Hy3的部署门槛，便于本地运行。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[google/gemma-4-31B-it](https://huggingface.co/google/gemma-4-31B-it)**
  - 作者: google | 点赞: 3,276 | 下载: 12,337,374
  - 说明: 谷歌Gemma-4系列指令微调版，支持图像文本输入，凭借谷歌的品牌效应和强大的多模态能力，下载量遥遥领先。
- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
  - 作者: baidu | 点赞: 2,201 | 下载: 2,122,848
  - 说明: 百度发布的通用OCR模型，在OCR任务上表现突出，下载量极高，反映了社区对高效文档处理能力的旺盛需求。
- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
  - 作者: empero-ai | 点赞: 2,350 | 下载: 2,118,995
  - 说明: 基于Qwen 3.5的9B多模态模型，融合了“Mythos”数据集，且提供GGUF量化版，兼具推理与视觉能力。
- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
  - 作者: HauhauCS | 点赞: 2,903 | 下载: 2,084,530
  - 说明: 基于Qwen3.6的35B MoE视觉模型，主打“无审查”和激进风格，吸引了大量寻求特定风格模型的使用者。
- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**
  - 作者: thinkingmachines | 点赞: 1,158 | 下载: 13,462
  - 说明: 一款名为“Inkling”的多模态MoE模型，支持图像、音频和文本输入，是新一代全能型多模态模型的代表。
- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**
  - 作者: Wan-AI | 点赞: 129 | 下载: 2,408
  - 说明: 万AI发布的图像到视频生成模型，专注于舞蹈动作生成，是近期视频生成领域的热点模型之一。
- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**
  - 作者: OpenMOSS-Team | 点赞: 280 | 下载: 87,533
  - 说明: MOSS团队的音频转文字与说话人分离模型，专注于语音识别领域，填补了专项模型的空缺。

#### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**
  - 作者: Cactus-Compute | 点赞: 280 | 下载: 955
  - 说明: 基于JAX的模型，专注于函数调用和工具使用场景，代表了AI Agent领域的小而精模型探索。
- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
  - 作者: InternScience | 点赞: 584 | 下载: 35,833
  - 说明: 专为Agent任务设计的模型，基于Qwen 3.5 MoE架构，支持图像文本输入，是构建AI Agent的基础模型。
- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**
  - 作者: Alissonerdx | 点赞: 195 | 下载: 0
  - 说明: 针对LTX视频模型的LoRA，专注于身份保持，用于生成特定人物的视频，是视频生成社区微调活动的例证。
- **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**
  - 作者: Cseti | 点赞: 99 | 下载: 0
  - 说明: LTX视频模型的IC-LoRA，支持跨视角提示的新颖视图合成，是视频生成领域的前沿技术尝试。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**
  - 作者: empero-ai | 点赞: 183 | 下载: 105,749
  - 说明: Qwythos-9B模型的v2版GGUF量化，持续迭代，体现了社区对高质量量化模型的长期偏好。
- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**
  - 作者: DavidAU | 点赞: 108 | 下载: 16,719
  - 说明: 基于Qwen3.6的27B模型，社区进行了一系列“融合”微调，体现了社区对模型“特性”的深度定制。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**
  - 作者: GnLOLot | 点赞: 149 | 下载: 5,494
  - 说明: 基于MiniCPM5的1B小模型，融合了Claude风格的“思维链”数据，展示了小模型“蒸馏”与“思想植入”的实验。
- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-V2-Thinking-GGUF)**
  - 作者: GnLOLot | 点赞: 121 | 下载: 28,012
  - 说明: 上述MiniCPM5微调模型的GGUF量化版，结合了“思想植入”和“极致量化”，让极小模型也能具备复杂推理能力。
- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**
  - 作者: unsloth | 点赞: 105 | 下载: 6,771
  - 说明: 知名量化工具Unsloth为顶尖多模态模型“Inkling”提供的GGUF支持，方便社区在本地快速部署。
- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**
  - 作者: jlnsrk | 点赞: 142 | 下载: 4,035
  - 说明: GLM-5.2模型的int4量化版，并采用了“蜂鸟”（colibri）专家流式加载策略，兼顾了CPU推理的性能与效率。

### **生态信号**

- **模型家族势头**: **GLM-5.2**凭借其创新的MoE-DSA架构成为本周“点赞王”；**Google Gemma-4**系列展示了闭源巨头开源的规模优势。但真正的生态赢家是**Qwen 3.5/3.6**，大量微调版和量化版霸榜，表明其已成为社区共识度最高的基座模型之一。**Prism-ml的Bonsai系列**则凭借极端的1-bit量化，开创了一个全新的“极低比特”生态。
- **开源权重 vs 闭源**: **Gemma-4-31B-it** 的全量权重发布，标志着谷歌在开源路线上的“价格战”打法初显成效，下载量一骑绝尘。GLM-5.2虽然开源权重，但具体参数架构细节（DSA）的独特性也引发了社区研究。开源社区更多地围绕Qwen等易于微调的模型进行二创，形成了“基础模型+社区量化”的协同生态。
- **量化与微调活动**: **1-bit量化**（如Bonsai-27B）是本周最大的亮点，标志着社区对端侧部署效率的追求进入新阶段。同时，**Micro LoRA/LoRA**（如LTX系列）在视频生成领域异常活跃，极大丰富了基础模型的定制化能力。GGUF作为最主流的通用量化格式，地位已不可动摇。

### **值得探索**

1. **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**：强烈推荐尝试。1-bit 27B模型能在何种程度上保留原始能力？这是当前最前沿的量化探索。对于研究模型压缩和边缘部署的开发者，这是必看的模型。
2. **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**：如果你对AI视频生成感兴趣，这个“图像到舞蹈视频”的模型值得一试。它代表了一个非常具体的垂直应用场景，其生成质量和创意启发潜力巨大。
3. **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**：这是一个有趣的JAX模型，专注于函数调用。在Agent范式崛起的当下，专门为工具使用设计的模型是潜力股，值得AI应用开发者深入研究其设计思路。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*