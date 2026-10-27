# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 03:20 UTC

---

好的，作为AI模型生态分析师，以下为您生成2026年7月11日的《Hugging Face热门模型日报》。

---

### 🤗 Hugging Face 热门模型日报 | 2026-07-11

---

### 📰 今日速览

本周 Hugging Face 生态呈现出明显的“多模态扩张”与“小模型高效化”并行趋势。以 **Qwen 3.5/3.6** 为基座的社区微调模型（尤其是 GGUF 量化版本）在下载量上占据绝对主导，显示出社区对可部署、高性能开源模型的旺盛需求。同时，**NVIDIA 和 DeepSeek 等大厂** 密集发布新一代大模型（如 Nemotron 系列、DeepSeek-V4），并积极探索 MoE（混合专家）与新型量化（如 NVFP4）架构，标志着开源大模型的军备竞赛进入新阶段。值得注意的是，从图像定位（LocateAnything）到视频生成（LingBotVideo），多模态模型的种类和成熟度均有显著提升。

---

### 🏆 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

-   **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**
    - **作者**: zai-org | **点赞**: 3,787 | **下载**: 392,655
    - **说明**: 国产大模型 GLM 系列的最新版本，采用 MoE 架构，凭借其在对话和生成任务上的强劲性能，成为本周点赞量最高的模型。
-   **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**
    - **作者**: InternScience | **点赞**: 473 | **下载**: 25,772
    - **说明**: 基于 Qwen3.5 MoE 的智能体模型，表明社区对模型“知行合一”，即从单纯生成迈向工具使用和自主决策能力的追求。
-   **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)**
    - **作者**: meituan-longcat | **点赞**: 172 | **下载**: 1,308
    - **说明**: 美团推出的超长上下文模型，服务于长文档理解与生成场景，体现了产业界对大模型处理复杂业务信息的需求。
-   **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)**
    - **作者**: mistralai | **点赞**: 184 | **下载**: 315
    - **说明**: Mistral 发布的大参数 MoE 模型（119B，激活6B），延续其高效计算路线，探索极致性能与成本的平衡。
-   **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)**
    - **作者**: deepseek-ai | **点赞**: 463 | **下载**: 33,088
    - **说明**: DeepSeek V4 系列的 Pro 版本，结合创新的 DSpark 技术，标志着 DeepSeek 在顶级开源模型领域持续发力，与 NVIDIA 等形成竞争。
-   **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)**
    - **作者**: nvidia | **点赞**: 99 | **下载**: 23,404
    - **说明**: NVIDIA 发布的新一代 Nemotron 模型，采用 NVFP4 4-bit 量化，展示了在保持性能的同时大幅降低推理内存占用方面的探索。

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

-   **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)
    - **作者**: nvidia | **点赞**: 2,701 | **下载**: 1,456,269
    - **说明**: NVIDIA 出品的视觉定位模型，能精准识别和定位图像中的任意物体，强大的零样本能力使其在多模态应用（如机器人、图像编辑）中极具潜力。
-   **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**
    - **作者**: empero-ai | **点赞**: 1,981 | **下载**: 1,909,705
    - **说明**: 基于 Qwen3.5 的社区顶级微调版本，融合了 Claude-Mythos 数据集，其 GGUF 量化版在性能与可部署性上达到极佳平衡，下载量巨大。
-   **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**
    - **作者**: baidu | **点赞**: 1,921 | **下载**: 1,319,683
    - **说明**: 百度推出的大模型时代的新一代 OCR 模型，以其强大的识别能力和通用性（Unlimited）迅速成为企业级应用标杆。
-   **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**
    - **作者**: HauhauCS | **点赞**: 2,626 | **下载**: 2,660,170
    - **说明**: 基于 Qwen3.6 的社区微调版本，主打“无审查”并集成了视觉能力，吸引了大量寻求自由度高的角色扮演或创意生成用户。
-   **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)**
    - **作者**: krea | **点赞**: 578 | **下载**: 164,525
    - **说明**: Krea 团队推出的改进版文生图模型，相比基础版拥有更快的生成速度和更优的效果，代表了图像生成领域从“可用”到“好用”的进化。
-   **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)**
    - **作者**: robbyant | **点赞**: 77 | **下载**: 317
    - **说明**: 开创性的视频生成 MoE 模型，预示着将大模型的高效架构（MoE）引入高计算成本的视频生成领域，未来可期。

#### 🔧 专用模型（代码、数学、医疗、嵌入、分类）

-   **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**
    - **作者**: yuxinlu1 | **点赞**: 1,135 | **下载**: 427,668
    - **说明**: 基于 Google Gemma-4 的 Agentic 代码模型，专为终端和代码生成场景优化，表明社区正积极探索小模型在专业 Agent 领域的应用。
-   **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)**
    - **作者**: google | **点赞**: 345 | **下载**: 18,626
    - **说明**: Google 开源的表格基础模型（TabFM），首次将大规模预训练范式引入表格数据领域，对金融、医疗等依赖结构化数据的行业意义重大。
-   **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)**
    - **作者**: SupraLabs | **点赞**: 88 | **下载**: 1,160
    - **说明**: 一种专门用于模型路由的小型模型（51M参数），可智能判断任务并调度给最适合的大模型，是构建高效模型生态的关键组件。

#### 📦 微调与量化（社区微调、GGUF、AWQ）

-   **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**
    - **作者**: unsloth | **点赞**: 1,038 | **下载**: 2,895,457
    - **说明**: unsloth 团队发布的 Qwen3.6 官方量化版，其极高的下载量证明了 unsloth 在模型量化领域的领先地位和社区对高质量量化模型的热切追求。
-   **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)
    - **作者**: deepreinforce-ai | **点赞**: 837 | **下载**: 1,085,554
    - **说明**: 基于强大基座模型的社区微调版，其 GGUF 量化版广受欢迎，反映了“好模型+好量化”的组合是取得高下载的普遍公式。
-   **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)
    - **作者**: nvidia | **点赞**: 336 | **下载**: 787,748
    - **说明**: NVIDIA 使用其自研的 Model Optimizer 工具对 Qwen3.6 进行 4-bit 量化，不仅推动了 NVFP4 这一新格式的普及，也为行业提供了更多量化选择。

---

### 🌐 生态信号

1.  **Qwen 生态持续扩张，成为社区微调“首选底座”**：从榜单看，Qwen 3.5/3.6 系列模型（尤其是其 MoE 变体）正取代 LLaMA 成为社区微调和量化活动最活跃的基座模型。Qwythos、HauhauCS 等多个明星微调版本均基于 Qwen，说明其在性能、易用性和社区支持上已形成强大飞轮效应。

2.  **MoE 架构全面开花，量化格式多元化**：无论是大厂出品（GLM-5.2、Leanstral）还是社区贡献（Agents-A1），MoE 架构成为主流。与此同时，量化领域不再是 GGUF 一家独大，NVIDIA 的 **NVFP4**、以及 DeepSeek 的新型技术正成为行业关注的焦点，低比特推理正走向多样化。

3.  **大厂（NVIDIA, DeepSeek）占据生态高位**：NVIDIA 和 DeepSeek 均带来多款模型（基座、微调、量化版本），且获得了极高关注度，显示顶级 AI 公司在开源社区中的话语权日益增强。这与纯社区小团队形成互补，共同构建了从研究到落地的完整链路。

4.  **“专业模型”兴起，从通用走向精准**：TabFM（表格）、LocateAnything（图像定位）、Supra-Router（模型路由）等模型的诞生，标志着 AI 应用正在从“一个模型通吃”转向“模型专家+智能调度”的专业化分工时代。

---

### 🔭 值得探索

1.  **nvidia/LocateAnything-3B**：推荐理由：这是 NVIDIA 在多模态感知领域的一次重要开源，其强大的零样本定位能力堪称“开箱即用”。无论是 AI 研究员还是前端开发者，都能基于此快速构建视觉交互应用，是探索视觉 AI Agent 的绝佳起点。

2.  **zai-org/GLM-5.2**：推荐理由：作为国内顶尖大模型的最新一代，它在当前榜单上点赞数一骑绝尘，代表了国产开源模型的最新高度。深入研究其 MoE 架构与微调细节，对于理解大模型发展方向具有重要参考价值。

3.  **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**：推荐理由：这个超长模型名背后，是一次将小参数模型（12B）深度适配代码 Agent 任务的成功尝试。它证明了“小模型+强 Agent”的可能性，是低成本构建自动化编程助手的理想研究与部署对象。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*