# Hugging Face 热门模型日报 2026-07-24

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-24 03:21 UTC

---

好的，作为AI模型生态分析师，现将2026年7月24日的Hugging Face模型生态日报呈上。

---

### **Hugging Face 热门模型日报 (2026-07-24)**

#### **1️⃣ 今日速览**

本周Hugging Face生态呈现出典型的“基础模型驱动，社区微调繁荣”的特征。**Google Gemma-4** 与 **百度 Unlimited-OCR** 分别在通用对话与专业OCR领域占据绝对主导地位，展现出顶级基础模型与垂直场景模型的巨大吸引力。以 **Qwen 3.6** 为基座的社区微调模型（尤其是“未审查”变体）形成显著矩阵，下载量惊人，反映出开发者对特定风格与行为模型的强烈需求。此外，**MoE架构**与**极端量化（1-bit/2-bit）** 技术正成为主流话题，以 **GLM-5.2** 和 **Bonsai** 系列为代表，标志着模型效率与部署灵活性成为核心竞争力。

#### **2️⃣ 热门模型**

##### 🧠 **语言模型（LLM、对话模型、指令微调）**

*   **google/gemma-4-31B-it** ([链接](https://huggingface.co/google/gemma-4-31B-it))
    *   作者: google | 点赞: 3,348 | 下载: 12,666,488
    *   说明: Google最新开源的多模态最强模型，凭借强大的性能和Google品牌效应，成为本周下载量与关注度的双料冠军。
*   **zai-org/GLM-5.2** ([链接](https://huggingface.co/zai-org/GLM-5.2))
    *   作者: zai-org | 点赞: 4,375 | 下载: 596,442
    *   说明: 采用MoE架构的GLM-5系列新成员，以高达4,375的周点赞数证明其MoE-DSA混合架构获得了社区高度认可。
*   **upstage/Solar-Open2-250B** ([链接](https://huggingface.co/upstage/Solar-Open2-250B))
    *   作者: upstage | 点赞: 468 | 下载: 362
    *   说明: Upstage推出的250B参数巨量模型，虽然下载量尚在早期，但其“Open”定位和超大参数规模引起了高端研究与企业的关注。
*   **Nanbeige/Nanbeige4.2-3B** ([链接](https://huggingface.co/Nanbeige/Nanbeige4.2-3B))
    *   作者: Nanbeige | 点赞: 326 | 下载: 4,532
    *   说明: 在小规模（3B）模型上的持续迭代，展示了在参数量受限下追求高性价比语言模型的努力。

##### 🎨 **多模态与生成（图像、视频、音频、文本到X）**

*   **baidu/Unlimited-OCR** ([链接](https://huggingface.co/baidu/Unlimited-OCR))
    *   作者: baidu | 点赞: 2,900 | 下载: 2,414,259
    *   说明: 来自百度的通用OCR模型，以极高的下载量与点赞数占据本周榜首，体现了端到端文档理解与识别任务的巨大实际需求。
*   **thinkingmachines/Inkling** ([链接](https://huggingface.co/thinkingmachines/Inkling))
    *   作者: thinkingmachines | 点赞: 1,509 | 下载: 24,669
    *   说明: 一个专注于多模态对话的模型，其高点赞数说明社区对能够进行流畅图文交互的模型兴趣浓厚。
*   **Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice** ([链接](https://huggingface.co/Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice))
    *   作者: Qwen | 点赞: 1,800 | 下载: 2,497,020
    *   说明: Qwen推出的高音质、支持自定义声音的TTS模型，得益于其在声音克隆上的突破，一经发布便成为热门。
*   **moonshotai/Kimi-K2.7-Code** ([链接](https://huggingface.co/moonshotai/Kimi-K2.7-Code))
    *   作者: moonshotai | 点赞: 1,249 | 下载: 766,522
    *   说明: 月之暗面推出的代码专用多模态模型，结合视觉与代码能力，在编程辅助场景中极具潜力。
*   **microsoft/Mage-Flow** ([链接](https://huggingface.co/microsoft/Mage-Flow))
    *   作者: microsoft | 点赞: 190 | 下载: 411
    *   说明: 微软的文生图新模型，专注于图像生成与编辑，是扩散模型领域的重要新玩家。
*   **nvidia/nemotron-3.5-asr-streaming-0.6b** ([链接](https://huggingface.co/nvidia/nemotron-3.5-asr-streaming-0.6b))
    *   作者: nvidia | 点赞: 926 | 下载: 750,118
    *   说明: NVIDIA推出的流式语音识别模型，0.6B小参数保证了高效的实时转录能力，非常适合边缘部署。
*   **nvidia/Cosmos3-Edge** ([链接](https://huggingface.co/nvidia/Cosmos3-Edge))
    *   作者: nvidia | 点赞: 102 | 下载: 28,493
    *   说明: NVIDIA Cosmos系列的边缘端版本，旨在将强大的世界模型能力带到算力受限的设备上。
*   **ATH-MaaS/OvisOCR2** ([链接](https://huggingface.co/ATH-MaaS/OvisOCR2))
    *   作者: ATH-MaaS | 点赞: 257 | 下载: 26,919
    *   说明: 另一个专注于OCR的多模态模型，与百度Unlimited-OCR形成竞争，证明了该赛道的火热。

##### 🔧 **专用模型（代码、数学、医疗、嵌入）**

*   **OpenMOSS-Team/MOSS-Transcribe-Diarize** ([链接](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize))
    *   作者: OpenMOSS-Team | 点赞: 320 | 下载: 111,598
    *   说明: 集语音转录与说话人识别（Diarization）于一体，是会议、访谈等场景的实用工具。
*   **openbmb/MiniCPM-RobotManip** ([链接](https://huggingface.co/openbmb/MiniCPM-RobotManip))
    *   作者: openbmb | 点赞: 165 | 下载: 408
    *   说明: 面向机器人操纵任务的视觉-语言-动作（VLA）模型，代表了多模态模型向具身智能发展的趋势。
*   **openbmb/MiniCPM-RobotTrack** ([链接](https://huggingface.co/openbmb/MiniCPM-RobotTrack))
    *   作者: openbmb | 点赞: 117 | 下载: 306
    *   说明: 与RobotManip并肩的机器人跟踪模型，共同构成了MiniCPM家族的机器人解决方案。
*   **poolside/Laguna-S-2.1** ([链接](https://huggingface.co/poolside/Laguna-S-2.1))
    *   作者: poolside | 点赞: 520 | 下载: 13,285
    *   说明: 来自poolside的代码生成模型，专注为开发者提供高效、可靠的代码辅助。
*   **Motif-Technologies/Motif-3-Beta** ([链接](https://huggingface.co/Motif-Technologies/Motif-3-Beta))
    *   作者: Motif-Technologies | 点赞: 174 | 下载: 1,856
    *   说明: 一个强调特征提取（Embedding）的模型，可能被用于信息检索或RAG场景。
*   **fdtn-ai/antares-1b** ([链接](https://huggingface.co/fdtn-ai/antares-1b))
    *   作者: fdtn-ai | 点赞: 122 | 下载: 2,747
    *   说明: 一个专注于安全的小型MoE模型（1B），显示了对模型安全性的日益关注。
*   **conradlocke/krea2-identity-edit** ([链接](https://huggingface.co/conradlocke/krea2-identity-edit))
    *   作者: conradlocke | 点赞: 518 | 下载: 0
    *   说明: 基于Krea-2的LoRA模块，用于个性化身份编辑，但无下载量，可能刚刚发布。

##### 📦 **微调与量化（社区微调、GGUF、AWQ）**

*   **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive** ([链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive))
    *   作者: HauhauCS | 点赞: 3,036 | 下载: 2,027,080
    *   说明: Qwen3.6-35B MoE模型的“未审查”激进微调版，下载量极高，社区对风格化、无限制模型的需求强烈。
*   **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF** ([链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF))
    *   作者: empero-ai | 点赞: 2,440 | 下载: 2,126,755
    *   说明: 基于Qwen3.5的9B模型，融合了Claude风格的微调，并转化为GGUF格式，兼具风格与可用性。
*   **prism-ml/Ternary-Bonsai-27B-gguf** ([链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf))
    *   作者: prism-ml | 点赞: 986 | 下载: 576,083
    *   说明: 引入“三进制（2-bit）”量化的Bonsai-27B变体，探索了更极致的模型压缩方法。
*   **prism-ml/Bonsai-27B-gguf** ([链接](https://huggingface.co/prism-ml/Bonsai-27B-gguf))
    *   作者: prism-ml | 点赞: 621 | 下载: 1,910,116
    *   说明: 经典的1-bit GGUF量化版Bonsai-27B，超高下载量验证了极端量化模型在社区中广受欢迎。
*   **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF** ([链接](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF))
    *   作者: DavidAU | 点赞: 407 | 下载: 334,847
    *   说明: 一个名字极长的Qwen3.6微调版本，定位为“异端”与“未审查”，吸引寻求极端风格的社区用户。
*   **unsloth/Laguna-S-2.1-GGUF** ([链接](https://huggingface.co/unsloth/Laguna-S-2.1-GGUF))
    *   作者: unsloth | 点赞: 151 | 下载: 28,542
    *   说明: 知名量化工具unsloth发布的Laguna-S-2.1的GGUF版本，方便社区在本地运行。
*   **poolside/Laguna-S-2.1-GGUF** ([链接](https://huggingface.co/poolside/Laguna-S-2.1-GGUF))
    *   作者: poolside | 点赞: 113 | 下载: 25,360
    *   说明: 模型原作者提供的官方GGUF版本，确保了最佳兼容性与性能。
*   **LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF** ([链接](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF))
    *   作者: LuffyTheFox | 点赞: 118 | 下载: 24,982
    *   说明: 又一个Qwen3.6-35B的“未审查”微调GGUF变体，社区微调活动之活跃可见一斑。
*   **prism-ml/Bonsai-27B-mlx-1bit** ([链接](https://huggingface.co/prism-ml/Bonsai-27B-mlx-1bit))
    *   作者: prism-ml | 点赞: 173 | 下载: 34,270
    *   说明: 专为Apple Silicon优化的MLX格式1-bit量化版，满足Mac用户的本地部署需求。
*   **bottlecapai/ThinkingCap-Qwen3.6-27B** ([链接](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B))
    *   作者: bottlecapai | 点赞: 529 | 下载: 25,231
    *   说明: 在Qwen3.6-27B基础上微调的模型，意图增强其思考能力。
*   **poolside/Laguna-S-2.1-NVFP4** ([链接](https://huggingface.co/poolside/Laguna-S-2.1-NVFP4))
    *   作者: poolside | 点赞: 118 | 下载: 52,235
    *   说明: 采用NVIDIA NVFP4格式量化的版本，专为NVIDIA GPU优化。

#### **3️⃣ 生态信号**

本周生态释放出强烈信号。**“Qwen 3.6”** 家族作为基座，衍生出大量针对特定风格（如Uncensored, Hermes）或场景（如ThinkingCap）的微调模型，体现了社区强大的二次开发能力。**极端量化（1-bit/2-bit）** 技术，如 **Bonsai** 系列，正成为主流，配合 **Llama.cpp** 和 **MLX** 工具链，使大模型的个人设备部署门槛降至冰点。此外，**MoE架构**（如GLM-5.2, Qwen3.6-35B-A3B）成为中大规模模型标配，旨在提升推理效率。在闭源模型方面，以 **Gemma-4** 为代表的开源模型正对闭源模型形成有力竞争，而 **Unlimited-OCR** 的成功则表明，垂直领域的专用模型依然存在巨大的蓝海市场。

#### **4️⃣ 值得探索**

1.  **google/gemma-4-31B-it**：作为谷歌最新的开源旗舰，其性能是衡量其他模型的标杆。值得立即下载测试其在通用对话、推理、编码等方面的能力上限。
2.  **Qwen/Qwen3-TTS-12Hz-1.7B-CustomVoice**：如果你对语音合成或声音克隆感兴趣，这个模型提供了一个非常高“出片”的起点。效果惊艳，且参数量适中，便于上手。
3.  **openbmb/MiniCPM-RobotManip**：这是具身智能领域的一次重要开源努力。对于研究者和对机器人感兴趣的开发者，这是一个绝佳的起点，可以真实地探索VLA模型如何操控现实世界的机器人。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*