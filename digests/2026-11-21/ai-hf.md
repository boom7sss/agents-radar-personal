# Hugging Face 热门模型日报 2026-11-21

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-21 17:36 UTC

---

# Hugging Face 热门模型日报（2026-11-21）

## 一、今日速览

今日榜首由 Qwen 家族的 **Qwen3.8-27B** 以 20,772 点赞、约 630 万下载量强势领跑，其生态衍生版本（GGUF、微调、适配器）几乎占据榜单半壁江山。视频生成继续野蛮生长，Lightricks **LTX-2.5** 以 12,895 点赞、300 万下载成为今日人气与采用双料王者。多模态阵营中 **Inkling-2** 系列呈家族式爆发（Mini/Small/GGUF/Uncensored 四个变体同时上榜）。量化与社区微调（unsloth、DavidAU、AtomicChat）依旧是把基础模型推向大规模实际使用的关键环节。

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen | 👍 20,772 | ⬇️ 6,298,190
  Qwen 3.8 代旗舰多模态模型，本周绝对焦点，点赞与下载均为榜单最高，是整个排行榜的热度基础。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)**
  deepseek-ai | 👍 5,778 | ⬇️ 511,124
  DeepSeek V4.1 的 Flash 轻量版本，主打高效推理，是高关注度开源 LLM 的有力竞争者。

- **[nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-E4B-4GB)**
  nvidia | 👍 668 | ⬇️ 195,916
  NVIDIA Nemotron 3.5 系列小体积模型（同时提供 GGUF/PyTorch），面向端侧部署，下载量亮眼。

- **[maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash)**
  maxwell-model | 👍 308 | ⬇️ 2,959
  基于 MoE 架构的新锐文本生成模型，为生态带来一个新的模型家族。

- **[microsoft/Aion-1.0-Instruct-2.3B](https://huggingface.co/microsoft/Aion-1.0-Instruct-2.3B)**
  microsoft | 👍 122 | ⬇️ 3,099
  微软小参数指令微调模型，需 custom_code 加载，适合研究轻量指令对齐。

- **[tencent/Hy4-flash](https://huggingface.co/tencent/Hy4-flash)**
  tencent | 👍 508 | ⬇️ 5,588
  腾讯混元 Hy4 的 Flash 版本，走“多模态标签 + 轻量”路线，与完整的 Hy4 同期亮相。

- **[tencent/Hy4](https://huggingface.co/tencent/Hy4)**
  tencent | 👍 130 | ⬇️ 974
  混元 Hy4 视觉语言主模型，与 Flash 版本形成高低搭配。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**视频生成**
- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks | 👍 12,895 | ⬇️ 3,000,544
  支持文生/图生/视频生视频的单一文件扩散模型，今日人气最高、下载破三百万，是视频生成的标杆之作。
- **[meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6)**
  meituan-longcat | 👍 357 | ⬇️ 3,031
  音频/文本驱动数字人视频，提供 ONNX + diffusers 双格式，适合虚拟人场景。
- **[apple/FastFrames-L](https://huggingface.co/apple/FastFrames-L)**
  apple | 👍 464 | ⬇️ 0
  基于 Wan2.1-T2V-14B 微调的文生视频模型（附 arXiv 引用），刚上线、下载尚未起量，值得关注。

**图像生成与编辑**
- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)**
  MiniMaxAI | 👍 1,662 | ⬇️ 916,726
  MiniMax H3 图像模型，支持文生图与图生图，下载近百万，闭源厂商开源化的代表。
- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  black-forest-labs | 👍 3,607 | ⬇️ 964,439
  Flux 3 的 ComfyUI 整合版，主打图像编辑/生成，生态兼容性极好。
- **[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)**
  chatrlabs | 👍 707 | ⬇️ 339,903
  Qwen-Image 2.1 的去审查量化版本，无限制内容加量化释放，下载量可观。

**语音与音频**
- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)**
  higurashi-ai | 👍 818 | ⬇️ 8,120
  全双工语音到语音模型，低延迟对话式语音交互是新热点。
- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)**
  Zyphra | 👍 546 | ⬇️ 154,251
  ZONOS3 小型 TTS 模型，同时提供 safetensors 与 GGUF，下载量突出。
- **[n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca)**
  n4ze3m | 👍 347 | ⬇️ 9,323
  超小体积 TTS（ONNX+GGUF），主打轻量本地部署。
- **[inworld/voice-isolator](https://huggingface.co/inworld/voice-isolator)**
  inworld | 👍 473 | ⬇️ 0
  语音分离/降噪模型，新发布暂无下载，但语音增强方向值得留意。

**多模态理解**
- **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)**
  thinkingmachines | 👍 1,689 | ⬇️ 7,944
  Inkling-2 家族的核心小模型，专用 inkling2_loop 架构，是家族爆发的源头。
- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)**
  thinkingmachines | 👍 604 | ⬇️ 45,356
  同系列 Small 版本，下载量显著高于 Mini，说明家族正被实际采用。
- **[sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B)**
  sensenova | 👍 437 | ⬇️ 1,745
  商汤 Loop 架构 9B 多模态模型，与 Inkling 的 loop 命名形成有趣的架构呼应。
- **[RadixArk/DaisyRose-27B](https://huggingface.co/RadixArk/DaisyRose-27B)**
  RadixArk | 👍 256 | ⬇️ 1,375
  基于 qwen3_5 的多模态社区衍生模型。
- **[Cloudflare/clairic](https://huggingface.co/Cloudflare/clairic)**
  Cloudflare | 👍 161 | ⬇️ 547
  基于 qwen3_5 的图像理解模型，Cloudflare 下场做模型值得关注。
- **[harness-hub/Qwen3.8-27B-pi-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-pi-adapted)**
  harness-hub | 👍 907 | ⬇️ 2,383
  用 GRPO/async-GRPO 训练的 PEFT 适配器，是强化学习后训练的典型样本。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook | 👍 7,116 | ⬇️ 1,850,744
  SAM3 分割/掩码生成模型，支持视频特征提取，榜单点赞第三、下载近两百万，是通用视觉基础设施级模型。
- **[apple/DepthPro2](https://huggingface.co/apple/DepthPro2)**
  apple | 👍 172 | ⬇️ 0
  单目/视频度量深度估计模型，专业视觉任务，新发布尚无下载。

*(榜单中未见明确的代码、数学、医疗专门模型；因此与代码相关的模型仅有榜单上同时归类于其他分类的以下适配器。)*

- **[harness-hub/Qwen3.8-27B-opencode-adapted](https://huggingface.co/harness-hub/Qwen3.8-27B-opencode-adapted)**
  harness-hub | 👍 147 | ⬇️ 578
  面向代码/opencode 场景的 GRPO 适配器，是 harness-hub 系列中代码向的版本。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  unsloth | 👍 6,231 | ⬇️ 7,532,043
  Qwen3.8-27B 的官方推荐 GGUF 量化，下载超 750 万，是本地部署的主要来源，榜单下载第一。
- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU | 👍 3,435 | ⬇️ 1,787,788
  极长命名的社区“去审查 + 编码”GGUF 微调，典型的高关注度激进微调产物。
- **[unsloth/Inkling-2-Mini-GGUF](https://huggingface.co/unsloth/Inkling-2-Mini-GGUF)**
  unsloth | 👍 499 | ⬇️ 238,152
  Inkling-2-Mini 的 MoE GGUF 量化，把多模态小模型推向本地推理。
- **[AtomicChat/Inkling-2-Mini-Uncensored-GGUF](https://huggingface.co/AtomicChat/Inkling-2-Mini-Uncensored-GGUF)**
  AtomicChat | 👍 129 | ⬇️ 9,540
  基于 LoRA 的去审查 GGUF 版本，走 llama.cpp 路线。

## 三、生态信号

**家族势头：** Qwen（Qwen3.8/3.5 系）是今日绝对核心，其底座被 GGUF、适配器、社区微调反复引用；Inkling-2 呈现“一代多档”（Mini/Small/量化/去审查）的家族式扩张；tencent Hy4、thinkingmachines、Lightricks 则在多模态侧形成新增长点。

**开源 vs 闭源：** MiniMax、black-forest-labs 等原本偏闭源的厂商持续开源权重（H3-Image、Flux 3），开源生态的供给正在被头部商业团队加强。

**量化与微调：** unsloth 的 GGUF 管线是最大的分发通道（Qwen3.8 量化下载破 750 万）；去审查（uncensored/heretic）微调与 GRPO 强化学习适配器（harness-hub）并行活跃，社区微调明显向“极限命名 + 本地可用”倾斜。

## 四、值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 同时覆盖文生视频、图生视频、视频生视频，下载破三百万且单一文件易用，是当前视频生成最成熟的开源起点。
2. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 分割/掩码 + 视频特征提取，下载近两百万，适合作为视觉数据清洗、标注与下游管线的基础设施。
3. **[thinkingmachines/Inkling-2-Mini](https://huggingface.co/thinkingmachines/Inkling-2-Mini)** — 专用 inkling2_loop 架构的小型多模态模型，家族已在多个变体同步上榜，值得研究其架构设计与部署可行性。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*