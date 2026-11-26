# Hugging Face 热门模型日报 2026-11-26

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-26 19:39 UTC

---

# Hugging Face 热门模型日报（2026-11-26）

## 今日速览

今日榜单由 **Qwen3.8-27B** 领跑，以 21,839 点赞、约 605 万下载稳居榜首，并衍生出大量量化与微调版本。**Lightricks/LTX-2.5**（13,540 赞）与 **thinkingmachines/Inkling-2-Mini**（6,194 赞）分别在视频生成与多模态对话上表现强势。Inkling-2-Mini 的社区生态极为活跃，GGUF、无审查、abliterated、Strata 等多条支线同时上榜。量化活动集中于 GGUF，Ternary/2-bit 等低比特方案也开始出现。

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **[Aleph-Alpha/Kolibri-1.1](https://huggingface.co/Aleph-Alpha/Kolibri-1.1)** — Aleph-Alpha | 点赞 168 | 下载 837
  基于 MoE 的推理文本生成模型，配套 vLLM 支持，属于新发布的小体量开源权重。

- **[baidu/ERNIE-5.5-Flash-Preview](https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview)** — baidu | 点赞 322 | 下载 1,193
  ERNIE 5.5 的 MoE 预览版文本模型，百度前沿模型的开源预览，值得关注后续正式版。

- **[inclusionAI/Ling-3.2-air](https://huggingface.co/inclusionAI/Ling-3.2-air)** — inclusionAI | 点赞 247 | 下载 1,467
  基于 bailing_moe_v3_vl 的定制代码模型，MIT 许可并附评测结果，属新家族试水。

- **[inclusionAI/LingSante-3.1-flash](https://huggingface.co/inclusionAI/LingSante-3.1-flash)** — inclusionAI | 点赞 201 | 下载 1,487
  基于 bailing_hybrid 的对话文本模型，flash 定位主打轻量高效。

- **[KRAFTON/Raon-1-mini](https://huggingface.co/KRAFTON/Raon-1-mini)** — KRAFTON | 点赞 136 | 下载 264
  游戏公司 KRAFTON 推出的 mini 级文本生成模型，新自研家族首秀。

- **[MemTensor/MemT-1.0-Pro](https://huggingface.co/MemTensor/MemT-1.0-Pro)** — MemTensor | 点赞 135 | 下载 806
  基于 memt_nemotron_h 的自定义代码文本模型，主打记忆/长上下文方向的小众新品。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen | 点赞 21,839 | 下载 6,047,011
  阿里 Qwen3.8 多模态旗舰，本日点赞与下载双料第一，是整个生态的核心基座。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks | 点赞 13,540 | 下载 3,041,405
  覆盖图生视频、文生视频、视频生视频的扩散模型，视频生成赛道的头号热门。

- **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** — thinkingmachines | 点赞 6,194 | 下载 96,527
  采用 inkling2_loop 的多模态对话模型，凭新颖架构与开源权重冲上第二热。

- **[apple/DepthPro2](https://huggingface.co/apple/DepthPro2)** — apple | 点赞 1,278 | 下载 0
  苹果单目/视频度量深度估计模型，支持视频深度，刚发布尚无下载。

- **[facebook/sam-3d-body-dinov3](https://huggingface.co/facebook/sam-3d-body-dinov3)** — facebook | 点赞 2,056 | 下载 21,394
  Meta 的三维人体网格重建与人体姿态估计模型，属于 SAM 3D 家族。

- **[Sentinel7/h3](https://huggingface.co/Sentinel7/h3)** — Sentinel7 | 点赞 2,094 | 下载 0
  未标注任务、限制级（not-for-all-audiences）的模型，凭话题性获得高赞。

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — higurashi-ai | 点赞 1,041 | 下载 10,026
  全双工语音到语音对话模型，实时语音交互方向的新品。

- **[inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator)** — inworld | 点赞 937 | 下载 15,244
  语音增强/降噪与语音分离模型，音频处理工具链的实用补充。

- **[SulphurAI/Sulphur-3](https://huggingface.co/SulphurAI/Sulphur-3)** — SulphurAI | 点赞 1,188 | 下载 189,735
  基于 MiniMax-H3 微调、许可受限的模型，凭 MiniMax 基座热度上榜。

- **[tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash)** — tencent | 点赞 723 | 下载 10,479
  腾讯混元 Hy4-flash 多模态模型，主打轻量高效的图文理解。

- **[sand-ai/MAGI-2-preview](https://huggingface.co/sand-ai/MAGI-2-preview)** — sand-ai | 点赞 261 | 下载 0
  支持文生/图生/音视频联合生成的视频模型预览版，刚发布暂无下载。

- **[Lakonik/pi-H3](https://huggingface.co/Lakonik/pi-H3)** — Lakonik | 点赞 311 | 下载 73,578
  基于 flow-matching 与蒸馏的音视频生成模型，H3 生态的衍生作品。

- **[llamaindex/OCRia-1](https://huggingface.co/llamaindex/OCRia-1)** — llamaindex | 点赞 111 | 下载 419
  基于 Qwen3.5 的 OCR 图文模型，面向文档理解。

- **[kandinskylab/Kandinsky-ImageSR-2.0](https://huggingface.co/kandinskylab/Kandinsky-ImageSR-2.0)** — kandinskylab | 点赞 87 | 下载 4
  Kandinsky 家族的图像超分辨率模型，属小众但实用的图像复原工具。

### 🔧 专用模型（代码、文档、OCR 等）

- **[llamaindex/OCRia-nano-1](https://huggingface.co/llamaindex/OCRia-nano-1)** — llamaindex | 点赞 259 | 下载 126
  基于 ONNX 的轻量 OCR/PDF 转 Markdown 模型，适合本地文档解析。

### 📦 微调与量化（社区微调、GGUF、低比特）

- **[unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF)** — unsloth | 点赞 1,452 | 下载 2,445,633
  Inkling-2-Mini 的 GGUF 量化版，下载量远超原版，说明本地部署需求极大。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU | 点赞 4,402 | 下载 1,873,950
  Qwen3.8-27B 的无审查 GGUF 微调版，凭基座热度与高下载冲进前四。

- **[AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF)** — AtomicChat | 点赞 892 | 下载 762,491
  Inkling-2-Mini 的无审查 LoRA + GGUF 版本，主打 llama.cpp 本地运行。

- **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** — harness-hub | 点赞 1,133 | 下载 3,844
  用 TRL + GRPO（异步 GRPO）对 Qwen3.8-27B 做 PEFT 微调，附强化学习训练细节。

- **[prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF)** — prism-ml | 点赞 478 | 下载 59,366
  三值（2-bit）GGUF 量化模型，展示极低比特量化在 llama.cpp 上的可行性。

- **[orcarouter/Inkling-2-Mini-abliterated-GGUF](https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF)** — orcarouter | 点赞 251 | 下载 12,157
  Inkling-2-Mini 的 abliterated GGUF 版本，面向本地无约束推理。

- **[nari-labs/Qwen3.8-27B-NariQ-GGUF](https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF)** — nari-labs | 点赞 183 | 下载 14,337
  面向编码代理（coding-agent）的 Qwen3.8-27B 量化版。

- **[strata-engine/Inkling-2-Mini-Strata](https://huggingface.co/strata-engine/Inkling-2-Mini-Strata)** — strata-engine | 点赞 202 | 下载 2,965
  Inkling-2-Mini 的 MoE 量化变体，属 Strata 实验系列。

## 生态信号

Qwen3.8-27B 与 Inkling-2-Mini 是当日两大活跃家族：前者以原版 + GGUF + GRPO 微调 + 编码量化形成完整衍生链，后者则聚集了 GGUF、无审查、abliterated、Strata 等社区分支。开源权重明显主导榜单，轻量 Flash 与 mini 命名频繁出现。量化活动高度集中在 GGUF（llama.cpp 生态），并出现三值/2-bit 极低比特探索；无审查微调与强化学习（GRPO）训练也形成稳定细分。

## 值得探索

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — 当日热度绝对核心，衍生生态最丰富，是评估多模态基座与量化方案的首选起点。
- **[prism-ml/Ternary-Bonsai-2.5-27B-GGUF](https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF)** — 三值/2-bit 量化代表，适合研究极低比特下 27B 模型的可用性与推理效率。
- **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)** — 附带异步 GRPO + TRL 训练细节，对研究强化学习微调流程有参考价值。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*