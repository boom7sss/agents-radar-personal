# Hugging Face 热门模型日报 2026-11-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-25 19:57 UTC

---

# Hugging Face 热门模型日报（2026-11-25）

## 今日速览

今日榜首由 Qwen 的 **Qwen3.8-27B** 以 21,798 点赞、604 万下载遥遥领先，围绕它衍生的 GGUF、微调和“越狱”变体也集体上榜，形成最强生态圈。Thinking Machines 的 **Inkling-2-Mini** 系列同样热度极高，官方版加多路社区量化变体占据多个席位。视频生成领域 Lightricks **LTX-2.5** 以 13,416 点赞成为仅次于 Qwen3.8 的高热模型。此外，语音、3D 人体、深度估计等专用模型集中涌现，显示多模态能力正加速向细分场景渗透。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen｜21,798 赞｜6,047,011 下载
  本期最热模型，采用 qwen3_5 架构的多模态对话模型，下载量与点赞双重领先，是多条衍生模型的基座。

- **SulphurAI/Sulphur-3** — https://huggingface.co/SulphurAI/Sulphur-3
  SulphurAI｜1,042 赞｜189,735 下载
  基于 MiniMax-H3 微调的模型，任务未标注，热度主要来自对 MiniMax 生态的关注。

- **inclusionAI/Ling-3.2-air** — https://huggingface.co/inclusionAI/Ling-3.2-air
  inclusionAI｜231 赞｜1,467 下载
  搭载 bailing_moe_v3_vl 自定义代码的 MoE 模型，MIT 许可并附评估结果，适合研究者。

- **tencent/Hy4-flash** — https://huggingface.co/tencent/Hy4-flash
  tencent｜711 赞｜10,479 下载
  腾讯混元 Hy4 系列轻量版，主打轻量生成，标签为图像文本到文本。

- **inclusionAI/LingSante-3.1-flash** — https://huggingface.co/inclusionAI/LingSante-3.1-flash
  inclusionAI｜189 赞｜1,487 下载
  基于 bailing_hybrid 架构的对话生成模型，带自定义代码实现。

- **Aleph-Alpha/Kolibri-1.1** — https://huggingface.co/Aleph-Alpha/Kolibri-1.1
  Aleph-Alpha｜152 赞｜837 下载
  主打推理的 MoE 模型，标记 vllm 支持，面向推理任务。

- **baidu/ERNIE-5.5-Flash-Preview** — https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview
  baidu｜301 赞｜1,193 下载
  百度 ERNIE 5.5 的 MoE 预览版，值得关注其后续正式发布。

- **MemTensor/MemT-1.0-Pro** — https://huggingface.co/MemTensor/MemT-1.0-Pro
  MemTensor｜126 赞｜806 下载
  基于 memt_nemotron_h 的文本生成模型，带自定义代码。

- **KRAFTON/Raon-1-mini** — https://huggingface.co/KRAFTON/Raon-1-mini
  KRAFTON｜110 赞｜264 下载
  游戏公司 KRAFTON 推出的轻量自研文本生成模型。

- **Sentinel7/h3** — https://huggingface.co/Sentinel7/h3
  Sentinel7｜1,980 赞｜0 下载
  无任务标注、限制级模型，点赞高但下载为 0，属话题热度。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **thinkingmachines/Inkling-2-Mini** — https://huggingface.co/thinkingmachines/Inkling-2-Mini
  thinkingmachines｜5,984 赞｜96,527 下载
  Inkling-2 系列官方对话式多模态模型，本期第二大热点，带动大量社区变体。

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Lightricks｜13,416 赞｜3,041,405 下载
  支持图生视频、文生视频、视频生视频的扩散模型，是本期视频生成赛道最强选手。

- **inworld/voice-isolator** — https://huggingface.co/inworld/voice-isolator
  inworld｜885 赞｜15,244 下载
  音频到音频的语音分离/降噪增强模型，面向语音清洗场景。

- **higurashi-ai/Haru-4B** — https://huggingface.co/higurashi-ai/Haru-4B
  higurashi-ai｜1,021 赞｜10,026 下载
  支持全双工语音到语音的 4B 模型，适合实时对话语音应用。

- **apple/DepthPro2** — https://huggingface.co/apple/DepthPro2
  apple｜1,244 赞｜0 下载
  单目/视频度量深度估计模型，下载为 0 说明刚发布，技术关注度高。

- **facebook/sam-3d-body-dinov3** — https://huggingface.co/facebook/sam-3d-body-dinov3
  facebook｜1,991 赞｜20,983 下载
  3D 人体网格恢复与姿态估计模型，Meta 出品，专用视觉任务代表。

- **apple/FastFrames-L** — https://huggingface.co/apple/FastFrames-L
  apple｜630 赞｜0 下载
  基于 Wan2.1-T2V-14B 微调的文生视频模型，附 arXiv 论文，刚发布待下载。

- **nvidia/Nemotron-Labs-Image-30B-A3B** — https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B
  nvidia｜137 赞｜218 下载
  英伟达 Nemotron 图像生成 MoE 模型，尚处早期。

- **sensenova/SenseNova-Loop-9B** — https://huggingface.co/sensenova/SenseNova-Loop-9B
  sensenova｜737 赞｜3,268 下载
  商汤多模态文本生成模型，采用 sensenova_loop 架构。

- **harness-hub/Qwen3.8-27B-pi-adapted** — https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted
  harness-hub｜1,112 赞｜3,844 下载
  基于 Qwen3.8-27B 的多模态 PEFT 适配模型，采用 async-GRPO 训练。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **llamaindex/OCRia-nano-1** — https://huggingface.co/llamaindex/OCRia-nano-1
  llamaindex｜223 赞｜126 下载
  轻量 ONNX OCR 模型，可将 PDF 解析为 Markdown，面向文档处理管线。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Inkling-2-Mini-GGUF** — https://huggingface.co/unsloth/Inkling-2-Mini-GGUF
  unsloth｜1,360 赞｜2,445,633 下载
  Inkling-2-Mini 的官方量化版，下载量高达 244 万，是本地部署的主力。

- **DavidAU/Qwen3.8-27B-…-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU｜4,370 赞｜1,873,950 下载
  Qwen3.8-27B 的极限社区“越狱”量化版，长名暗示多功能叠加，下载近 188 万。

- **AtomicChat/Inkling-2-Mini-Uncensored-GGUF** — https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF
  AtomicChat｜831 赞｜762,491 下载
  基于 LoRA 的 Inkling-2-Mini 无审查 GGUF 版，llama.cpp 可用。

- **chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized** — https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized
  chatrlabs｜952 赞｜515,591 下载
  Qwen-Image-2.1 的无审查全量化图像生成版本，diffusers 可用。

- **prism-ml/Ternary-Bonsai-2.5-27B-GGUF** — https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF
  prism-ml｜303 赞｜59,366 下载
  三值（2-bit）量化 27B 模型，代表极低比特量化探索方向。

- **nari-labs/Qwen3.8-27B-NariQ-GGUF** — https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF
  nari-labs｜155 赞｜14,337 下载
  面向编码智能体场景的 Qwen3.8-27B 量化版。

- **orcarouter/Inkling-2-Mini-abliterated-GGUF** — https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF
  orcarouter｜209 赞｜12,157 下载
  Inkling-2-Mini 的 abliterated 消融 GGUF 版，面向本地运行。

- **strata-engine/Inkling-2-Mini-Strata** — https://huggingface.co/strata-engine/Inkling-2-Mini-Strata
  strata-engine｜154 赞｜2,965 下载
  Inkling-2-Mini 的 MoE 量化变体，采用 strata 方案。

- **RadixArk/DaisyRose-27B** — https://huggingface.co/RadixArk/DaisyRose-27B
  RadixArk｜387 赞｜3,182 下载
  基于 qwen3_5 架构的社区多模态微调模型。

## 生态信号

本期生态呈现清晰的“双家族主导”格局：**Qwen3.8-27B** 与 **Inkling-2-Mini** 各自衍生出大量 GGUF、无审查、abliterated、量化变体，且下载量远超点赞数，说明社区部署需求旺盛。此外，**Qwen3.8-27B 单模型**贡献了本期近半数的衍生排名，其传播力已超过许多厂商自建模型。在量化方向上，从常规 GGUF 到三值 2-bit（Ternary-Bonsai）的极低比特探索并存；微调则频繁围绕“无审查/越狱”展开，形成独立需求。厂商方面，Apple、Meta（facebook）、NVIDIA、腾讯、百度、商汤均有新作，但多数下载为 0 或极低，表明其仍处发布早期，热度更多来自技术关注。整体看，开源权重与社区二次开发仍是 HF 活跃度的核心驱动力。

## 值得探索

1. **Qwen/Qwen3.8-27B**（https://huggingface.co/Qwen/Qwen3.8-27B）— 本期绝对核心，多模态对话基座，生态最完整，是理解整个榜单衍生模型的起点。

2. **Lightricks/LTX-2.5**（https://huggingface.co/Lightricks/LTX-2.5）— 视频生成赛道最强选手，同时支持文/图/视频三种输入，且下载量验证了实际落地需求。

3. **prism-ml/Ternary-Bonsai-2.5-27B-GGUF**（https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF）— 三值 2-bit 量化 27B 模型，是研究极低比特推理可行性与效率的少见样本，值得关注其质量与速度权衡。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*