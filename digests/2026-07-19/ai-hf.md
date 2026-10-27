# Hugging Face 热门模型日报 2026-07-19

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-19 03:29 UTC

---

好的，以下是基于2026年7月19日 Hugging Face 热榜数据生成的模型生态日报。

---

# Hugging Face 热门模型日报 — 2026-07-19

## 今日速览

本周 Hugging Face 社区呈现“多模态+极低比特”双轮驱动格局。**zai-org/GLM-5.2** 以超高点赞量登顶，证明 MoE 架构在大模型竞争中持续领跑；**google/gemma-4-31B-it** 则以千万级下载量成为部署端的绝对主力。值得注意的是，**prism-ml** 团队推出的 **1-bit/2-bit 三元量化模型（Bonsai 系列）** 引发大量关注，标志着消费级硬件上运行 27B 参数模型已进入实用阶段。此外，**Qwen 3.5/3.6** 仍然是社区微调与二次开发的核心底座，衍生出大量具备视觉、推理和“无审查”能力的变体。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  作者: zai-org | 点赞: 4,131 | 下载: 541,662  
  MoE 架构的旗舰模型，凭借优秀的对话与推理能力成为本周点赞冠军。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  作者: tencent | 点赞: 830 | 下载: 13,571  
  腾讯发布的最新 HyV3 系列基座模型，在长文本生成和指令跟随方面表现突出。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
  作者: InternScience | 点赞: 579 | 下载: 35,575  
  基于 Qwen3.5-MoE 构建的 Agent 专用模型，着力于工具调用与多步推理。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking)**  
  作者: GnLOLot | 点赞: 143 | 下载: 5,271  
  基于 MiniCPM5 的 1B 级“思考链”蒸馏模型，在小参数领域探索推理能力。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[thinkingmachines/Inkling](https://huggingface.co/thinkingmachines/Inkling)**  
  作者: thinkingmachines | 点赞: 1,067 | 下载: 12,456  
  全新多模态对话模型，支持图像/文本/音频统一输入，社区对统一模型的期待度极高。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  作者: HauhauCS | 点赞: 2,868 | 下载: 2,190,398  
  MoE + 视觉多模态 + 无审查标签，社区对其在敏感场景下的“大胆”输出有极大需求。

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
  作者: bottlecapai | 点赞: 437 | 下载: 10,445  
  为 Qwen3.6 注入“深度思考”模块，提升了多模态场景下的逻辑推理与 OCR 能力。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
  作者: ATH-MaaS | 点赞: 172 | 下载: 13,750  
  专注 OCR 的高性能微调版，展示了 Qwen3.5 在文档理解任务上的潜力。

- **[Wan-AI/Wan-Dancer-14B](https://huggingface.co/Wan-AI/Wan-Dancer-14B)**  
  作者: Wan-AI | 点赞: 115 | 下载: 2,328  
  图像到视频的生成模型，专注于人物舞蹈动作高保真生成，标志着可控视频生成正在成熟。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
  作者: OpenMOSS-Team | 点赞: 259 | 下载: 86,385  
  一站式音频转写和说话人分离模型，社区对端到端语音理解的需求依然强劲。

- **[OpenMOSS-Team/MOSS-VL-Realtime](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime)**  
  作者: OpenMOSS-Team | 点赞: 78 | 下载: 529  
  实时视频理解模型，适合流媒体与视频监控场景。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[Cactus-Compute/needle](https://huggingface.co/Cactus-Compute/needle)**  
  作者: Cactus-Compute | 点赞: 268 | 下载: 935  
  基于 Jax 构建的函数调用（function calling）专用模型，为 Agent 生态提供了更轻量的底层方案。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
  作者: froggeric | 点赞: 941 | 下载: 0  
  不是模型，但热度极高——它修复了 Qwen 系列对话模板的兼容性问题，解决了 MLX 和 transformers 社区的一个痛点。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  作者: baidu | 点赞: 2,027 | 下载: 2,088,470  
  百度开源的“无限制”OCR 模型，能够处理扭曲、遮挡、手写等复杂场景，下载量巨大。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  作者: empero-ai | 点赞: 2,317 | 下载: 2,112,869  
  Qwen3.5 的推理增强微调版 + GGUF 量化，推理能力与部署友好性兼备。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  作者: prism-ml | 点赞: 740 | 下载: 301,893  
  **全球首个大规模三元量化模型**，2-bit 精度即可保持大部分性能，是边缘部署的里程碑。

- **[prism-ml/Bonsai-27B-gguf](https://huggingface.co/prism-ml/Bonsai-27B-gguf)**  
  作者: prism-ml | 点赞: 446 | 下载: 1,218,815  
  1-bit 的极端量化版，社区用下载量证明了对“极限量化”的热情。

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**  
  作者: jlnsrk | 点赞: 132 | 下载: 3,869  
  针对 GLM-5.2 的 Intel 4-bit 量化版，探索在 CPU 上高效运行 MoE 模型。

- **[unsloth/inkling-GGUF](https://huggingface.co/unsloth/inkling-GGUF)**  
  作者: unsloth | 点赞: 97 | 下载: 6,461  
  unsloth 团队出品的 Inkling 模型 GGUF 版，方便 llama.cpp 用户快速体验多模态模型。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**  
  作者: GnLOLot | 点赞: 277 | 下载: 172,409  
  小模型 + 推理 + GGUF 的教科书级组合，非常受欢迎。

- **[Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt](https://huggingface.co/Cseti/LTX2.3-22B_IC-LoRA-CrossView-Prompt)**  
  作者: Cseti | 点赞: 91 | 下载: 0  
  为 LTX 视频模型添加新颖视角生成的 LoRA，实验性很强。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**  
  作者: Alissonerdx | 点赞: 187 | 下载: 0  
  专注于视频生成中人脸身份保持的 LoRA，填补了“可控角色一致性”的空白。

- **[AngelSlim/Hy3-GGUF](https://huggingface.co/AngelSlim/Hy3-GGUF)**  
  作者: AngelSlim | 点赞: 128 | 下载: 100,768  
  Hy3 模型的社区快速 GGUF 移植版，证明了腾讯新模型拥有极高的生态热度。

## 生态信号

- **MoE 与多模态成为绝对主流**：GLM-5.2、Qwen3.6-35B-A3B、Agents-A1 均采用 MoE 架构，在性能与成本间取得平衡。同时，本周热榜中超过一半的模型具备图像/视频/音频理解能力。**纯文本模型正向“视觉优先”演进**，如 gemma-4 和 Inkling 均以多模态为主打。
- **极端量化进入军备竞赛**：prism-ml 的 Bonsai 系列（1-bit / 2-bit）代表了一种新方向——通过三元量化彻底改写模型部署的硬件要求。社区对此反响热烈，下载量合计超过 150 万次，**推理质量与存储成本的博弈将成为下半年焦点**。
- **中国团队贡献显著**：zai-org、baidu、tencent、InternScience 等中国机构或团队在本周贡献了多款高热度模型，**开源生态的去中心化程度进一步加深**，不再由单一地区的机构主导。

## 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
   MoE 大模型的新标杆，点赞数与下载量的双高证明了社区对其质量和架构创新（DSA）的认可。建议重点研究其 MoE 路由与长上下文表现。

2. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   如果你对“如何把大模型塞进手机/笔记本”感兴趣，这个 2-bit 三元量化模型是必看的。它在终端部署、隐私计算和低成本推理方面设立了新基准。

3. **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
   对于一个看似成熟的任务，这个模型通过大规模数据与模型设计实现了质的飞跃。无论是做文档 AI 还是自动化工具链，它都值得深入测试。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*