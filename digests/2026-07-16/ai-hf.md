# Hugging Face 热门模型日报 2026-07-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-16 03:17 UTC

---

好的，作为AI模型生态分析师，以下是根据您提供的2026年7月16日数据生成的《Hugging Face热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-16**

#### **今日速览**

本周开源社区热度空前，**MoE（混合专家）架构**与**极限量化**成为两大核心主题。**智谱AI的GLM-5.2** 作为开源MoE-DSA模型登顶本周点赞榜，展现出社区对高效稀疏模型的极高期待。同时，围绕**Qwen3.5/3.6** 家族衍生的海量**GGUF量化变体**在下载量上遥遥领先，表明本地部署与高端硬件的性能平衡仍是用户刚需。此外，多模态模型在**OCR**、**视频生成**与**图像编辑**领域的应用也涌现出多个高热度项目。

---

#### **热门模型**

##### 🧠 **语言模型（LLM、对话模型、指令微调）**

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** | 作者: zai-org | 👍 4,003 | ⬇️ 489,611
    - **一句话说明**：智谱AI发布的首个开源MoE-DSA模型，凭借稀疏激活与高分点赞，成为本周最受关注的通用语言模型。
2.  **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** | 作者: tencent | 👍 801 | ⬇️ 10,406
    - **一句话说明**：腾讯发布的HyV3系列的新成员，定位于高性能文本生成，是国产大模型的有力竞争者。
3.  **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)** | 作者: nvidia | 👍 156 | ⬇️ 1,332
    - **一句话说明**：英伟达发布的30B参数MoE模型（仅有3B活跃参数），专注于高性价比的推理性能，体现巨头在稀疏模型上的布局。

##### 🎨 **多模态与生成（图像、视频、音频、文本到X）**

1.  **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)** | 作者: thinkingmachines | 👍 412 | ⬇️ 0
    - **一句话说明**：一款全新的多模态模型，支持图像、音频、文本的多模态转换，虽未开放下载但已获得高关注，预示未来交互新范式。
2.  **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** | 作者: baidu | 👍 2,002 | ⬇️ 1,715,301
    - **一句话说明**：百度发布的高精度通用OCR模型，下载量超过170万，表明文档数字化需求依然强劲。
3.  **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** | 作者: OpenMOSS-Team | 👍 215 | ⬇️ 65,109
    - **一句话说明**：集语音转录与说话人分离（Diarization）于一体的开源模型，是会议记录等场景的热门工具。
4.  **[robbyant/lingbot-world-v2-14b-causal-fast](https://huggingface.co/robbyant/lingbot-world-v2-14b-causal-fast)** | 作者: robbyant | 👍 100 | ⬇️ 0
    - **一句话说明**：一个图像到视频的世界模型，展示了从静态画面推理动态视频的能力，是前沿研究方向。
5.  **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** | 作者: Alissonerdx | 👍 154 | ⬇️ 0
    - **一句话说明**：专注于身份保留的视频生成LoRA，针对LTX-Video模型，用于生成可控人物视频。
6.  **[mgwr/M87](https://huggingface.co/mgwr/M87)** | 作者: mgwr | 👍 127 | ⬇️ 2,408
    - **一句话说明**：基于Krea-2-Turbo的文本到图像LoRA，社区定制化能力在图像生成领域持续活跃。
7.  **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 👍 307 | ⬇️ 0
    - **一句话说明**：基于Krea-2的图像编辑LoRA，专注于身份一致性编辑，体现了对图像编辑可控性的高需求。

##### 🔧 **专用模型（代码、数学、医疗、嵌入）**

1.  **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** | 作者: conradlocke | 👍 307 | ⬇️ 0
    - *（已归类于多模态，此处为避免重复，推荐关注其专业编辑特性）*
2.  **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)** | 作者: Cactus-Compute | 👍 236 | ⬇️ 571
    - **一句话说明**：一个专注于函数调用和工具使用的JAX模型，代表Agent/工具链调用的垂直细分趋势。
3.  **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** | 作者: ATH-MaaS | 👍 119 | ⬇️ 745
    - **一句话说明**：基于Qwen3.5的专用OCR模型，表明在通用大模型基础上进行垂直领域微调依然是高效路径。

##### 📦 **微调与量化（社区微调、GGUF、AWQ）**

1.  **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** | 作者: empero-ai | 👍 2,218 | ⬇️ 2,006,265
    - **一句话说明**：基于Qwen3.5的高效量化GGUF版本，凭借超过200万的周下载量，成为社区量化部署的标杆。
2.  **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** | 作者: HauhauCS | 👍 2,761 | ⬇️ 2,443,871
    - **一句话说明**：基于Qwen3.6的MoE“未审查”GGUF版本，下载量最高，显示出对“无限制”对话和高压缩比MoE的极端需求。
3.  **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** | 作者: deepreinforce-ai | 👍 895 | ⬇️ 1,533,354
    - **一句话说明**：一个35B大模型的量化版本，因其MIT许可和端侧部署兼容性而备受青睐。
4.  **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** | 作者: yuxinlu1 | 👍 1,198 | ⬇️ 468,629
    - **一句话说明**：一个融合了Agent与编程能力的Gemma-4量化版，主打终端使用，是AgenticAI本地化部署的代表。
5.  **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)** | 作者: unsloth | 👍 208 | ⬇️ 1,599,150
    - **一句话说明**：著名优化工具Unsloth推出的NVIDIA FP4量化版，在保持性能的同时大幅降低显存需求，下载量超150万。
6.  **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)** | 作者: jlnsrk | 👍 112 | ⬇️ 2,188
    - **一句话说明**：对GLM-5.2的Int4 CPU友好量化版本，推动了MoE模型在低功耗设备的落地。
7.  **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** | 作者: GnLOLot | 👍 250 | ⬇️ 89,892
    - **一句话说明**：将Claude-Opus能力蒸馏到MiniCPM-1B小模型并量化，体现了极致的小型化和知识蒸馏趋势。
8.  **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)** | 作者: AngelSlim | 👍 109 | ⬇️ 0
    - **一句话说明**：腾讯Hy3模型的社区量化版，体现出社区对新兴大模型的快速适配热情。

---

#### **生态信号**

- **模型家族与架构趋势**：**Qwen家族（3.5/3.6）** 一枝独秀，其衍生模型占据了下载量和点赞榜的半壁江山。**MoE架构**全面爆发，从GLM-5.2到HauhauCS的模型，都证明稀疏激活已成为提升效率的主流方案。
- **量化与部署热潮**：**GGUF格式**是绝对的王者，几乎所有高下载量模型均为GGUF量化版。社区对“小模型、高性能、本地化”的追求近乎疯狂，尤其是对“1bit”、“2bit”这种极限量化的探索（如`prism-ml/Bonsai-27B`），标志着性能与资源平衡点的持续下探。
- **多模态与垂直应用**：OCR、视频生成、图像编辑等领域不再依赖单一通用模型，而是出现了大量针对特定任务的LoRA和微调版本，表明AI应用正从“基础能力”向“专业工具”快速演进。

---

#### **值得探索**

1.  **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**: 这是开源MoE-DSA架构的旗舰模型，如果对新一代稀疏激活模型的原理（如DSA）和性能感兴趣，这是必须研究的对象。
2.  **[unsloth/Qwen3.6-27B-NVFP4](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)**: 结合了Unsloth的高效优化与NVFP4这一新的量化范式，是试图用较低成本（27B）获取高性能（接近FP8）的理想实验样本，尤其适合显存受限的用户。
3.  **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**: 这是一个专注于函数调用的JAX模型，打破了Transformer-based LLM的常规思路，是对工具调用与Agent落地在轻量化框架下的全新探索，值得关注。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*