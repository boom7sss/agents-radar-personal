# Hugging Face 热门模型日报 2026-07-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-28 03:13 UTC

---

# Hugging Face 热门模型日报 (2026-07-28)

## 今日速览

本周 Hugging Face 社区热度集中在多模态大型模型与极致量化两个方向。**月之暗面 Kimi-K3** 以 6,508 点赞登顶，成为本周最受关注的视觉‑语言模型；**百度 Unlimited‑OCR** 下载量已突破 264 万，展现出强大的工业级 OCR 需求。**Qwen3.6 系列**生态继续扩大，官方版本下载量接近 620 万，社区涌现多个基于 Qwen3.6 的 uncensored 微调与 GGUF 量化版本。同时，**prism‑ml** 推出的 1‑bit、2‑bit 量化模型（Bonsai、Ternary‑Bonsai）将大模型推理成本推向新低，下载量合计近 300 万。微软的 **Mage‑Flow** 系列在文本到图像编辑领域持续发力，本周新增 Turbo 版编辑模型。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[poolside/Laguna‑S‑2.1](https://huggingface.co/poolside/Laguna-S-2.1)**（作者：poolside | 点赞：759 | 下载：63,605）  
  专注代码生成的 Laguan 系列 2.1 版，周内点赞与下载齐升，同时有 GGUF、NVFP4 等多种量化版本被社区跟进。

- **[upstage/Solar‑Open2‑250B](https://huggingface.co/upstage/Solar-Open2-250B)**（作者：upstage | 点赞：630 | 下载：3,761）  
  250B 参数的开放权重语言模型，延续 Solar 系列开源路线，关注度持续攀升。

- **[Nanbeige/Nanbeige4.2‑3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)**（作者：Nanbeige | 点赞：494 | 下载：16,518）  
  3B 轻量级 LLM，适合资源受限场景，凭借高效推理进入趋势榜。

- **[zai‑org/GLM‑5.2](https://huggingface.co/zai-org/GLM-5.2)**（作者：zai‑org | 点赞：4,553 | 下载：1,003,547）  
  GLM 系列最新一代，采用 MoE + DSA 架构，对话生成性能出色，下载量已破百万。

- **[Motif‑Technologies/Motif‑3‑Beta](https://huggingface.co/Motif-Technologies/Motif-3-Beta)**（作者：Motif‑Technologies | 点赞：199 | 下载：2,532）  
  Motif 系列第三代 Beta 版，主打特征提取与通用文本表示，社区关注度稳步上升。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[moonshotai/Kimi‑K3](https://huggingface.co/moonshotai/Kimi-K3)**（作者：moonshotai | 点赞：6,508 | 下载：2,850）  
  Kimi 系列最新的图像‑文本到文本模型，本周点赞数断层领先，代表月之暗面在端侧多模态的最新探索。

- **[baidu/Unlimited‑OCR](https://huggingface.co/baidu/Unlimited‑OCR)**（作者：baidu | 点赞：3,340 | 下载：2,645,773）  
  百度开源的高精度 OCR 模型，支持任意文本识别，下载量仅次于 Qwen3.6 官方，工业场景需求旺盛。

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**（作者：thinkingmachines | 点赞：1,606 | 下载：36,196）  
  多模态对话模型，结合视觉理解与对话能力，周内点赞飙升，社区讨论活跃。

- **[microsoft/Mage‑Flow](https://huggingface.co/microsoft/Mage‑Flow)**（作者：microsoft | 点赞：393 | 下载：1,691）  
  文本到图像生成模型，强调高效流式生成，同时提供编辑版 Mage‑Flow‑Edit‑Turbo（点赞 102）。

- **[owensong/Inflect‑Micro‑v2](https://huggingface.co/owensong/Inflect‑Micro‑v2)**（作者：owensong | 点赞：227 | 下载：483）  
  轻量级本地 TTS 模型（微版），支持 CPU 推理和边缘部署，配套 Nano 版本（点赞 92）。

- **[Qwen/Qwen3.6‑35B‑A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**（作者：Qwen | 点赞：2,548 | 下载：6,187,853）  
  Qwen 官方最新 MoE 多模态模型，35B 总参数、3B 激活，下载量位列本周第一，已成为社区微调与量化的基准模型。

- **[Kwaipilot/KAT‑Coder‑V2.5‑Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)**（作者：Kwaipilot | 点赞：245 | 下载：5,312）  
  基于 Qwen3.5 MoE 的代码生成专用模型，融入视觉输入（如代码截图），开发版持续迭代。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[ATH‑MaaS/OvisOCR2](https://huggingface.co/ATH‑MaaS/OvisOCR2)**（作者：ATH‑MaaS | 点赞：328 | 下载：42,152）  
  基于 Qwen3.5 的 OCR 增强模型，专攻文档与自然场景文字识别，下载量稳定增长。

- **[microsoft/Fara1.5‑27B](https://huggingface.co/microsoft/Fara1.5-27B)**（作者：microsoft | 点赞：156 | 下载：1,406）  
  计算机使用（Computer Use）多模态模型，支持 GUI 元素理解与操作，标注任务为图像‑文本到文本。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[prism‑ml/Ternary‑Bonsai‑27B‑gguf](https://huggingface.co/prism‑ml/Ternary‑Bonsai‑27B‑gguf)**（作者：prism‑ml | 点赞：1,069 | 下载：648,938）  
  使用三元量化（2‑bit）的 27B 对话模型，GGUF 格式，在保留能力同时大幅降低资源需求。

- **[prism‑ml/Bonsai‑27B‑gguf](https://huggingface.co/prism‑ml/Bonsai‑27B‑gguf)**（作者：prism‑ml | 点赞：659 | 下载：2,257,928）  
  1‑bit 极量量化版本，下载量超过 225 万，证明极端压缩在社区的接受度正在提高。

- **[DavidAU/Qwen3.6‑27B‑Fable‑Fusion‑711‑Uncensored‑Heretic‑NM‑DAU‑NEO‑MAX‑MTP‑GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)**（作者：DavidAU | 点赞：758 | 下载：634,146）  
  基于 Qwen3.6 的 uncensored 微调 + GGUF 量化，命名体现社区微调的“缝合”风格，下载量可观。

- **[HauhauCS/Qwen3.6‑35B‑A3B‑Uncensored‑HauhauCS‑Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**（作者：HauhauCS | 点赞：3,133 | 下载：1,894,395）  
  Qwen3.6 MoE 的 uncensored 微调版，强调“激进”回复风格，点赞与下载均极高，反映社区对多样对话风格的需求。

- **[empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF](https://huggingface.co/empero‑ai/Qwythos‑9B‑Claude‑Mythos‑5‑1M‑GGUF)**（作者：empero‑ai | 点赞：2,491 | 下载：1,336,263）  
  基于 Qwen3.5 的推理增强量化版，1M 上下文长度，GGUF 格式，适合长文本场景。

- **[poolside/Laguna‑S‑2.1‑GGUF](https://huggingface.co/poolside/Laguna-S-2.1-GGUF)**（作者：poolside & unsloth 各有版本）点赞均超 150，下载合计 20 万+，官方和社区双向推动量化生态。

- **[unsloth/Kimi‑K3](https://huggingface.co/unsloth/Kimi-K3)**（作者：unsloth | 点赞：102 | 下载：0）  
  刚刚发布的 Kimi‑K3 量化适配版（暂未积累下载），值得关注。

## 生态信号

1. **MoE 架构成主流**：本周热榜中，Qwen3.6 系列（7 个变体）、GLM‑5.2 均采用混合专家结构，兼顾性能与推理效率。开源 MoE 模型正快速迭代，驱动社区二次开发。

2. **多模态模型统治力加强**：30 个热门模型中超过半数属于 image‑text‑to‑text 任务，视觉语言融合已成为共识。同时，微软、月之暗面、智谱等头部玩家均推出专有模型并开源权重，开源 vs 闭源的差距缩小。

3. **量化领域向极致压缩演进**：从传统的 4‑bit 到 1‑bit（Bonsai）、2‑bit（Ternary‑Bonsai），再到 NVFP4 等新格式，社区对降低推理成本的追求已超过单纯参数数量。Bonsai‑27B‑1‑bit 下载量破 225 万，说明用户愿意接受一定质量损失换取极低硬件门槛。

4. **“Uncensored”微调生态火爆**：Qwen3.6 的 uncensored 版本多次上榜，下载量合计超 250 万。这类模型追求减少内容限制，引发广泛讨论，也带来监管与合规的新议题。

## 值得探索

- **[Qwen3.6‑35B‑A3B](https://huggingface.co/Qwen/Qwen3.6-35B-A3B)**  
  官方 MoE 多模态模型，35B 总参仅激活 3B，兼顾性能与速度。可作为下游微调、量化的基础底座，生态支持丰富（已有多版 GGUF、uncensored 微调）。

- **[Ternary‑Bonsai‑27B‑gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  2‑bit 三元量化的 27B 对话模型，在极低内存（约 2GB 量化后）下运行，验证了大模型在个人设备上部署的可能性。若追求边缘推理或实验极端压缩，是绝佳案例。

- **[Kimi‑K3](https://huggingface.co/moonshotai/Kimi-K3)**  
  本周点赞冠军，代表月之暗面在端侧多模态的最新突破。若关注前沿视觉理解与多模态对齐，值得深入分析其压缩‑蒸馏技术（标签包含 compressed‑tensors）。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*