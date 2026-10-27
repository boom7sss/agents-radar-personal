# Hugging Face 热门模型日报 2026-07-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-26 03:34 UTC

---

好的，作为AI模型生态分析师，以下是基于2026年7月26日Hugging Face热门模型数据整理的日报。

---

### 📰 Hugging Face 热门模型日报 (2026-07-26)

#### 1. 今日速览

- **MoE架构全面爆发**：zai-org 的 **GLM-5.2**（MoE）以压倒性的4,448周点赞登顶，标志着混合专家模型已成为当前社区最受追捧的架构。同时，Qwen家族最新旗舰 **Qwen3.6-35B-A3B** 也凭借MoE设计获得了极高热度。
- **视觉理解赛道竞争白热化**：百度发布的 **Unlimited-OCR** 凭借超高的下载量（250万+）和3108点赞，证明通用OCR与文档理解需求极为旺盛。社区涌现大量基于Qwen3.6的视觉微调模型（如“Uncensored”系列），探索模型边界。
- **“1-bit”与极端量化成新趋势**：prism-ml 推出的 **Bonsai-27B-gguf** 系列（1-bit/2-bit量化）获得社区高度关注，表明开发者对在消费级硬件上运行超大规模模型的需求从“能否运行”转向了“如何运行得更高效”。
- **Laguna系列生态初现**：poolside 发布的 **Laguna-S-2.1** 及其衍生出的GGUF、NVFP4量化版本集体上榜，显示其作为开源代码/语言模型的基础地位正在确立。

#### 2. 热门模型分类整理

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** - zai-org | 点赞: **4,448** | 下载: 707,029
  - 本周冠军。基于MoE-DSA架构的通用大模型，凭借强大的对话能力和高性价比成为社区新宠。
- **[Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** - Qwen | 点赞: 2,516 | 下载: **6,413,105**
  - Qwen家族最新MoE模型，35B参数仅激活3B，性能与效率兼顾，成为社区微调和部署的绝对主流基座。
- **[Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B)** - upstage | 点赞: 567 | 下载: 2,784
  - 2500亿参数的指令微调模型，代表了当前开源社区的“超大杯”水平，主要受专业开发者关注。
- **[Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** - Nanbeige | 点赞: 406 | 下载: 11,573
  - 轻量级语言模型（3B），在资源受限场景或边缘部署中具有潜力，获得稳定关注。
- **[antares-1b](https://huggingface.co/fdtn-ai/antares-1b)** - fdtn-ai | 点赞: 166 | 下载: 5,661
  - 专注于安全领域的1B小模型，采用GraniteMoEHybrid架构，适合垂直场景。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** - baidu | 点赞: 3,108 | 下载: **2,564,264**
  - 百度出品的高性能通用OCR模型，在文档、自然场景等各类文字识别任务上表现出色，需求极广。
- **[Inkling](https://huggingface.co/thinkingmachines/Inkling)** - thinkingmachines | 点赞: 1,572 | 下载: 31,575
  - 具备强对话能力的新型多模态模型，可能在视觉问答和交互上取得突破，引发社区好奇。
- **[Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)** - microsoft | 点赞: 277 | 下载: 1,156
  - 微软推出的一体化图像生成与编辑框架，代表了从文生图向复杂图像操作演进的方向。
- **[Kimi-K2.7-Code](https://huggingface.co/moonshotai/Kimi-K2.7-Code)** - moonshotai | 点赞: 1,277 | 下载: 749,449
  - 专注于代码的视觉多模态模型，Kimi家族成员，将代码理解与图像能力结合。
- **[OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)** - ATH-MaaS | 点赞: 287 | 下载: 33,109
  - 基于Qwen3.5的OCR专用模型，是Unlimited-OCR之外的另一个热门选择。
- **[Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B)** - microsoft | 点赞: 93 | 下载: 1,039
  - 微软的计算机使用（Computer Use）模型，能够理解和操作图形界面，是AI Agent领域的重要探索。
- **[Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** - owensong | 点赞: 88 | 下载: 47
  - 轻量级、面向边缘设备的本地TTS模型，满足离线语音合成需求。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** - Kwaipilot | 点赞: 168 | 下载: 841
  - 面向代码生成和视觉理解的混合模型，基于Qwen3.5-MoE，专为开发者设计。
- **[MiniCPM-RobotManip](https://huggingface.co/openbmb/MiniCPM-RobotManip)** / **[MiniCPM-RobotTrack](https://huggingface.co/openbmb/MiniCPM-RobotTrack)** - openbmb | 点赞: 175 / 128
  - 专为机器人设计的视觉-语言-动作（VLA）模型，代表了多模态模型向具身智能领域的延伸，是前沿研究方向。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** / **[Qwen3.6-35B-A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)** - 原生模型本身下载量极高，是社区进行二次开发的基础。
- **Laguna-S-2.1衍生版** - **(poolside/Laguna-S-2.1, unsloth/Laguna-S-2.1-GGUF, poolside/Laguna-S-2.1-GGUF, poolside/Laguna-S-2.1-NVFP4)** - 点赞合计**1,129**，下载合计**311,216**
  - 一个基础模型衍生出多个量化版本并同时上榜，说明社区对该模型的高度关注和部署需求。
- **[Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)** - prism-ml | 点赞: **1,029** | 下载: 611,685
  - 2-bit的三进制量化模型，展示了在极低精度下保留模型性能的可能性，是前沿量化技术代表。
- **[Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)** - prism-ml | 点赞: 638 | 下载: **2,114,963**
  - 1-bit、原生1.58-bit的极端量化版本，下载量巨大，表明社区对“把大模型装进口袋”的热情极高。
- 大量 **“Uncensored”** 微调模型上榜（如多个Qwen3.6和Qwythos的变体），显示社区对减少模型内容限制的强烈需求。

#### 3. 生态信号

本周生态呈现三大信号：**一是“MoE+轻量化”成为主导范式**。GLM-5.2和Qwen3.6-35B-A3B的成功，验证了通过MoE架构在保持高性能的同时降低推理成本的路线。**二是“Qwen化”趋势加剧**。Qwen家族（尤其是Qwen3.6）已成为社区微调和量化的“标准基座”，榜单中半数以上的模型直接或间接基于Qwen。**三是“极端量化”从实验走向主流**。以prism-ml为代表的1-bit/2-bit模型下载量惊人，表明开发者正积极寻求在个人设备上部署顶级模型的实践路径。开源权重模型正通过社区“众包式”的量化与微调，形成强大的生态护城河。

#### 4. 值得探索

1.  **[GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**：作为本周人气冠军，它是探索MoE架构性能上限与高性价比部署的绝佳样本，值得所有LLM使用者深入体验。
2.  **[OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**：在Unlimited-OCR的光环下，此模型亦表现出色。对于希望寻找替代方案或对比不同视觉语言模型OCR能力的开发者而言，这是一个值得研究的案例。
3.  **[Mage-Flow](https://huggingface.co/microsoft/Mage-Flow)**：作为微软推出的统一图像生成与编辑模型，它代表了多模态生成的下一个阶段——从单一生成走向复杂操作，对AIGC研究者有重要参考价值。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*