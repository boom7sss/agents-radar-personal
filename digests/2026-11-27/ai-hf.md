# Hugging Face 热门模型日报 2026-11-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-27 19:29 UTC

---

# Hugging Face 热门模型日报（2026-11-27）

## 今日速览

今日榜单由 **Qwen3.8-27B** 及其生态衍生模型主导：官方权重以 21,899 点赞居首，社区微调与量化版本（NariQ、pi-adapted、DavidAU 超长名微调版）同时上榜，形成清晰的一条“家族链路”。**Inkling-2-Mini** 是另一条主线，官方版、unsloth GGUF 版及多个社区改版（Uncensored、Strata、GSQ、abliterated）共占 6 席，且下载量集中在 GGUF 侧，说明本地部署需求旺盛。视频生成赛道升温明显，**Lightricks/LTX-2.5** 以 13,688 点赞位列第二，MAGI-2-preview、pi-H3 等文/图生视频模型同日出现。量化与逆向/去审查微调仍是社区热度的重要来源。

---

## 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  作者 Qwen ｜ 点赞 21,899 ｜ 下载 5,752,506
  官方多模态对话主干模型（image-text-to-text），今日榜单点赞与下载双第一，是全场社区衍生模型的源头。

- **Aleph-Alpha/Kolibri-1.1** — https://huggingface.co/Aleph-Alpha/Kolibri-1.1
  作者 Aleph-Alpha ｜ 点赞 194 ｜ 下载 1,725
  MoE 架构推理型文本生成模型，标签含 vllm 与 reasoning，属欧洲厂商新发布。

- **baidu/ERNIE-5.5-Flash-Preview** — https://huggingface.co/baidu/ERNIE-5.5-Flash-Preview
  作者 baidu ｜ 点赞 369 ｜ 下载 2,609
  百度 ERNIE 5.5 MoE 预览版，text-generation，代表国产大模型持续开源投放。

- **KRAFTON/Raon-1-mini** — https://huggingface.co/KRAFTON/Raon-1-mini
  作者 KRAFTON ｜ 点赞 180 ｜ 下载 1,477
  游戏厂商 KRAFTON 自研 Raon 系列轻量文本生成模型，新家族首次试水。

- **ai-sage/GigaChat4-708B-A41B** — https://huggingface.co/ai-sage/GigaChat4-708B-A41B
  作者 ai-sage ｜ 点赞 84 ｜ 下载 287
  708B 总参 / 41B 激活的 MoE 指令模型（fp8），超大稀疏架构，下载量尚低但规格瞩目。

- **Sentinel7/h3** — https://huggingface.co/Sentinel7/h3
  作者 Sentinel7 ｜ 点赞 2,210 ｜ 下载 0
  未标注任务、标记 not-for-all-audiences、下载为 0，点赞却高居第 20，热度来源不明。

---

### 🎨 多模态与生成（图像、视频、音频）

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  作者 Lightricks ｜ 点赞 13,688 ｜ 下载 3,080,701
  单文件扩散视频模型，覆盖文/图/视频到视频，今日点赞第二、下载破三百万，视频生成旗舰。

- **black-forest-labs/flux-3-image-klein-comfy** — https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy
  作者 black-forest-labs ｜ 点赞 4,746 ｜ 下载 842,966
  FLUX 系列的 ComfyUI 单文件图像生成/编辑版本，工程闭环直接可用。

- **chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized** — https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized
  作者 chatrlabs ｜ 点赞 1,031 ｜ 下载 602,227
  Qwen-Image 2.1 的去审查量化版（diffusers + gguf 双格式），社区图像生成热度代表。

- **thinkingmachines/Inkling-2-Mini** — https://huggingface.co/thinkingmachines/Inkling-2-Mini
  作者 thinkingmachines ｜ 点赞 6,416 ｜ 下载 155,741
  inkling2_loop 架构的多模态对话模型，官方权重，今日点赞第三、Inkling 生态源头。

- **sand-ai/MAGI-2-preview** — https://huggingface.co/sand-ai/MAGI-2-preview
  作者 sand-ai ｜ 点赞 334 ｜ 下载 0
  文/图生视频预览版，支持 text-to-audio-video 音视频联合生成，属预览阶段。

- **Lakonik/pi-H3** — https://huggingface.co/Lakonik/pi-H3
  作者 Lakonik ｜ 点赞 342 ｜ 下载 97,525
  基于 flow-matching 与蒸馏的音视频生成模型，标签标注 text-to-audio-video。

- **nvidia/Nemotron-Labs-Image-30B-A3B** — https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B
  作者 nvidia ｜ 点赞 311 ｜ 下载 1,692
  NVIDIA 的 30B MoE 文生图模型，以 nemotron_h 架构承载图像生成。

- **inclusionAI/Ming-Image-0.2-Design** — https://huggingface.co/inclusionAI/Ming-Image-0.2-Design
  作者 inclusionAI ｜ 点赞 140 ｜ 下载 416
  基于 bailingmm_moe_v2_lite 的文生图模型，面向设计场景。

- **kandinskylab/Kandinsky-ImageSR-2.0** — https://huggingface.co/kandinskylab/Kandinsky-ImageSR-2.0
  作者 kandinskylab ｜ 点赞 167 ｜ 下载 582
  Kandinsky 家族的图像超分模型（diffusers），细分图像增强方向。

- **inworld/voice-isolator** — https://huggingface.co/inworld/voice-isolator
  作者 inworld ｜ 点赞 987 ｜ 下载 20,510
  语音分离/降噪模型（audio-to-audio），榜单中少见的音频专用发布，点赞相对下载偏高。

- **SulphurAI/Sulphur-3** — https://huggingface.co/SulphurAI/Sulphur-3
  作者 SulphurAI ｜ 点赞 1,332 ｜ 下载 539,421
  基于 MiniMaxAI/MiniMax-H3 的微调模型（license: other），下载量可观但任务未标注。

---

### 🔧 专用模型（感知、OCR、深度、3D 等）

- **facebook/sam-3d-body-dinov3** — https://huggingface.co/facebook/sam-3d-body-dinov3
  作者 facebook ｜ 点赞 2,137 ｜ 下载 21,947
  SAM-3D 人体网格恢复 / 人体姿态估计模型，3D 视觉方向高关注度。

- **apple/DepthPro2** — https://huggingface.co/apple/DepthPro2
  作者 apple ｜ 点赞 1,337 ｜ 下载 0
  Apple 单目/视频度量深度估计模型，标签含 video-depth；下载为 0 但点赞高，疑为新发布。

- **llamaindex/OCRia-nano-1** — https://huggingface.co/llamaindex/OCRia-nano-1
  作者 llamaindex ｜ 点赞 319 ｜ 下载 626
  轻量 OCR 模型（onnx），面向 PDF→Markdown 文献解析流水线。

- **inclusionAI/Ling-3.2-air** — https://huggingface.co/inclusionAI/Ling-3.2-air
  作者 inclusionAI ｜ 点赞 282 ｜ 下载 2,403
  bailing_moe_v3_vl 架构多模态模型，带 eval-results，MIT 许可。

- **nari-labs/Qwen3.8-27B-NariQ-GGUF** — https://huggingface.co/nari-labs/Qwen3.8-27B-NariQ-GGUF
  作者 nari-labs ｜ 点赞 226 ｜ 下载 30,849
  Qwen3.8-27B 的量化版本，标签含 coding-agent，偏向代码智能体场景。

---

### 📦 微调与量化（社区微调、GGUF）

- **DavidAU/Qwen3.8-27B-...-GGUF**（超长命名版）— https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  作者 DavidAU ｜ 点赞 4,444 ｜ 下载 1,919,755
  Qwen3.8-27B 的去审查多合一 GGUF 微调版，点赞第四、下载近两百万，社区改模热度极高。

- **unsloth/Inkling-2-Mini-GGUF** — https://huggingface.co/unsloth/Inkling-2-Mini-GGUF
  作者 unsloth ｜ 点赞 1,563 ｜ 下载 3,302,340
  Inkling-2-Mini 的 GGUF 量化版（MoE），全场下载量最高，本地推理首选。

- **AtomicChat/Inkling-2-Mini-Uncensored-GGUF** — https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF
  作者 AtomicChat ｜ 点赞 994 ｜ 下载 1,059,763
  Inkling-2-Mini 的去审查 LoRA + GGUF 版本，下载破百万。

- **harness-hub/Qwen3.8-27B-pi-adapted** — https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted
  作者 harness-hub ｜ 点赞 1,164 ｜ 下载 4,362
  采用 GRPO / async-GRPO 训练的 PEFT 适配器，展示强化学习微调工作流。

- **prism-ml/Ternary-Bonsai-2.5-27B-GGUF** — https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF
  作者 prism-ml ｜ 点赞 601 ｜ 下载 382,546
  三值（ternary / 2-bit）量化的 27B GGUF 模型，极低比特压缩方向代表。

- **ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Inkling-2-Mini-GSQ-RCO-GGUF
  作者 ISTA-DASLab ｜ 点赞 224 ｜ 下载 24,931
  学术机构发布的 GSQ + RCO 混合精度量化 GGUF，偏研究性质。

- **orcarouter/Inkling-2-Mini-abliterated-GGUF** — https://huggingface.co/orcarouter/Inkling-2-Mini-abliterated-GGUF
  作者 orcarouter ｜ 点赞 309 ｜ 下载 21,019
  Inkling-2-Mini 的 abliterated（去拒答）GGUF 本地版。

- **strata-engine/Inkling-2-Mini-Strata** — https://huggingface.co/strata-engine/Inkling-2-Mini-Strata
  作者 strata-engine ｜ 点赞 276 ｜ 下载 4,532
  Inkling-2-Mini 的 Strata 量化改版，沿用 inkling2_loop 与 MoE 结构。

---

## 生态信号

**Qwen3.8-27B** 与 **Inkling-2-Mini** 是今日两条并行的家族主线：前者靠强官方权重带动衍生微调（NariQ、pi-adapted、DavidAU），后者则以 GGUF 量化扩散到最高下载量（unsloth 版超 330 万）。开源权重依旧是榜单主体，未见闭源 API 类条目，但“预览版”（MAGI-2-preview、ERNIE-5.5-Flash-Preview）与“下载为 0 却高赞”（DepthPro2、Sentinel7/h3）并存，提示新发布与热度/真实使用之间的落差。量化活动极为活跃：三值/2-bit（Ternary-Bonsai）、混合精度（GSQ-RCO）、abliterated 与 uncensored 微调集中爆发，说明本地部署与自由调校是社区主要驱动力。视频与音视频联合生成（LTX-2.5、MAGI-2、pi-H3）明显升温。

---

## 值得探索

1. **unsloth/Inkling-2-Mini-GGUF** — https://huggingface.co/unsloth/Inkling-2-Mini-GGUF
   全场下载量最高（3,302,340），是在本地跑 Inkling-2-Mini 多模态能力的最实用入口，可直接验证 MoE 架构的推理效率。

2. **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
   视频生成赛道今日最强信号（13,688 点赞、308 万下载、单文件扩散、覆盖文/图/视频多输入），适合评估开源视频模型当前水平。

3. **prism-ml/Ternary-Bonsai-2.5-27B-GGUF** — https://huggingface.co/prism-ml/Ternary-Bonsai-2.5-27B-GGUF
   三值 2-bit 量化 27B，是观察极低比特压缩在真实模型上可用性的代表性样本，研究价值高。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*