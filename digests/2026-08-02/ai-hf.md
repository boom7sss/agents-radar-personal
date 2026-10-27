# Hugging Face 热门模型日报 2026-08-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-02 03:32 UTC

---

# Hugging Face 热门模型日报（2026-08-02）

## 今日速览

Kimi-K3 以 9,497 次周点赞断层领先，成为今日最受关注的多模态基础模型；DeepSeek-V4-Flash、GLM-5.2 与百度 Unlimited-OCR 则继续维持高下载量。微软连续推出 Fara1.5-27B（电脑操作智能体）与 VibeVoice-ASR-BitNet，显示大厂在多模态 Agent 与高效语音识别上的投入。社区层面，Qwen3.6-35B-A3B 成为最热微调基座，多家账号发布 uncensored GGUF 变体，量化与本地部署仍是主流诉求。值得注意的还有 Ternary-Bonsai-27B 等极端低比特量化模型，正在把 27B 级推理推向更低资源门槛。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) — 作者：deepseek-ai｜点赞：1,450｜下载：15,366  
  一句话：DeepSeek-V4-Flash 的 7 月 31 日迭代版，附 arXiv 技术报告，文本生成能力受到关注。

- [deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash) — 作者：deepseek-ai｜点赞：1,947｜下载：2,814,414  
  一句话：DeepSeek-V4 系列轻量高效版本，下载量已超 281 万，是最热门的 DeepSeek 入口之一。

- [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) — 作者：zai-org｜点赞：4,738｜下载：1,683,442  
  一句话：采用 MoE 与 DSA 架构的对话模型，延续 GLM 系列，下载热度很高。

- [Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B) — 作者：Nanbeige｜点赞：611｜下载：27,892  
  一句话：Nanbeige 4.2 的 3B 小模型，面向轻量文本生成与本地部署。

- [poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1) — 作者：poolside｜点赞：868｜下载：77,021  
  一句话：Laguna-S-2.1 是池畔实验室发布的文本生成模型，周点赞稳步增长。

- [upstage/Solar-Open2-250B](https://huggingface.co/upstage/Solar-Open2-250B) — 作者：upstage｜点赞：718｜下载：13,426  
  一句话：Upstage 开源的 250B 参数开源 LLM，主打大规模开放权重。

- [XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini) — 作者：XYZAILab｜点赞：358｜下载：650  
  一句话：基于 Qwen3.5 MoE 路线的迷你版模型，适合低成本实验。

- [XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro) — 作者：XYZAILab｜点赞：332｜下载：923  
  一句话：带 agentic-search 标签的 Aquila 增强版，面向智能搜索与推理场景。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) — 作者：moonshotai｜点赞：9,497｜下载：559,924  
  一句话：今日周点赞最高的模型，多模态 image-text-to-text 基础模型，并使用 compressed-tensors 优化。

- [thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small) — 作者：thinkingmachines｜点赞：213｜下载：3,998  
  一句话：Inkling 的轻量多模态版本，适合资源受限的多模态推理。

- [thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling) — 作者：thinkingmachines｜点赞：1,672｜下载：59,076  
  一句话：Inkling 旗舰多模态模型，周点赞与下载均表现突出。

- [microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL) — 作者：microsoft｜点赞：173｜下载：10,525  
  一句话：微软发布的多模态视觉语言模型，聚焦图像文本理解。

- [microsoft/Fara1.5-27B](https://huggingface.co/microsoft/Fara1.5-27B) — 作者：microsoft｜点赞：243｜下载：2,775  
  一句话：面向 computer-use 的视觉语言智能体模型，值得关注的多模态 Agent 方向。

- [empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1) — 作者：empero-ai｜点赞：89｜下载：941  
  一句话：基于 Qwen3.5 生态的多模态 27B 模型。

- [owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2) — 作者：owensong｜点赞：365｜下载：1,565  
  一句话：面向 CPU 与边缘设备的轻量级本地 TTS 模型。

- [Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b) — 作者：Audio8｜点赞：169｜下载：3,254  
  一句话：0.6B 参数的 TTS 预览版，使用 ArkTTS 路线做语音合成。

- [lodestones/Kroma](https://huggingface.co/lodestones/Kroma) — 作者：lodestones｜点赞：97｜下载：0  
  一句话：基于 Krea 2 的 text-to-image LoRA 模型，用于 ComfyUI 工作流。

### 🔧 专用模型（代码、数学、医疗、嵌入、OCR、语音识别）

- [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) — 作者：baidu｜点赞：3,717｜下载：2,457,387  
  一句话：百度开源的 OCR 模型，下载量超 245 万，是榜单上下载量最高的专用模型。

- [Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev) — 作者：Kwaipilot｜点赞：391｜下载：10,771  
  一句话：面向代码生成的 Qwen3.5 MoE 路线模型，兼顾多模态输入与代码任务。

- [microsoft/VibeVoice-ASR-BitNet](https://huggingface.co/microsoft/VibeVoice-ASR-BitNet) — 作者：microsoft｜点赞：142｜下载：5,835  
  一句话：微软的 ASR 模型，结合 BitNet 与 GGUF，主打高效语音识别。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- [DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF) — 作者：DavidAU｜点赞：1,242｜下载：1,173,001  
  一句话：Qwen3.6 27B 的 uncensored 社区微调版，已打包为 GGUF，下载量超 117 万。

- [unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF) — 作者：unsloth｜点赞：292｜下载：4,048  
  一句话：Unsloth 官方制作的 DeepSeek-V4-Flash-0731 GGUF 量化版。

- [unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF) — 作者：unsloth｜点赞：243｜下载：41,337  
  一句话：Kimi-K3 的 GGUF 版本，方便本地与 llama.cpp 系工具链使用。

- [unsloth/Kimi-K3](https://huggingface.co/unsloth/Kimi-K3) — 作者：unsloth｜点赞：222｜下载：1,072  
  一句话：Unsloth 重新发布的 Kimi-K3 压缩张量版本，面向更高效的多模态部署。

- [LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF) — 作者：LuffyTheFox｜点赞：289｜下载：228,610  
  一句话：基于 Qwen3.6-35B-A3B 的 uncensored MoE 模型，GGUF 格式下载量已超 22 万。

- [nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4) — 作者：nota-ai｜点赞：152｜下载：22,396  
  一句话：Solar-Open2-250B 的 NVFP4 量化版，优化 vLLM 推理。

- [EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2) — 作者：EschaLabs｜点赞：112｜下载：875  
  一句话：EschaLabs 对 Qwen3.6-35B-A3B 的 W2 低比特 MoE 再创作。

- [DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF) — 作者：DavidAU｜点赞：189｜下载：267,572  
  一句话：Qwen3.5 9B 的 uncensored 微调 + Imatrix GGUF，主打小体量本地体验。

- [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) — 作者：HauhauCS｜点赞：3,227｜下载：1,823,436  
  一句话：今日量化/微调类中热度最高，Qwen3.6-35B-A3B uncensored 视觉 MoE 模型，下载量超 182 万。

- [prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf) — 作者：prism-ml｜点赞：1,135｜下载：716,341  
  一句话：27B 参数的三值（ternary / 2-bit）GGUF 模型，展示极端量化在 llama.cpp 上的实用性。

## 生态信号

三大信号值得关注：一是头部基础模型由中文团队领跑，Kimi-K3、DeepSeek-V4-Flash、GLM-5.2 居前，开源权重成主流，趋势榜未见闭源模型。二是 Qwen3.5/3.6 成为社区再创作核心底座，围绕 A3B MoE 的 uncensored 微调和 GGUF 量化大量涌现，体现本地部署与可控性诉求。三是量化走向多元：GGUF 是基本盘，NVFP4、Ternary 2-bit 等压缩路线开始被接纳。整体上，“开源发布 + 社区量化/微调 + 边缘部署”循环正在加速。

## 值得探索

- **moonshotai/Kimi-K3** — 周点赞近万，且采用 compressed-tensors 与 feature-extraction，适合作为多模态检索或特征提取底座深入研究。
- **microsoft/Fara1.5-27B** — 面向 computer-use 的视觉语言智能体，是“多模态 + Agent 操作”的重要探索方向，值得跑 GUI 自动任务实验。
- **prism-ml/Ternary-Bonsai-27B-gguf** — 三值 / 2-bit 量化在 27B 模型上的落地，对端侧部署和低比特量化研究很有参考价值。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*