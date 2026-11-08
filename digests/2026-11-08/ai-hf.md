# Hugging Face 热门模型日报 2026-11-08

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-08 16:42 UTC

---

# Hugging Face 热门模型日报（2026-11-08）

## 一、今日速览

今日榜单由 Qwen3.8-27B 领跑：点赞 1.9 万、下载超 766 万，Qwen 生态衍生品占据多个席位。视频与图像生成同样活跃，Lightricks/LTX-2.5 以 1.1 万点赞、266 万下载成为下载量最高模型之一，facebook/sam3 以 6,091 点赞进入前列。DeepSeek-V4.1-Flash-1017 官方权重与多份社区 GGUF 量化版同时上榜。Kimi-K3.1-Pro、Mistral-Large-4-1T-A52B、ERNIE-5.5-Flash-Base 等旗舰对话模型集中发布，反映大模型竞争正向多模态能力转移。社区端，“uncensored/heretic”微调与 GGUF 量化仍是热度最高的话题。

## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen｜点赞 19,382｜下载 7,668,187
  今日榜首。Qwen3.5 架构的多模态对话模型，凭借超大下载基数与官方权重稳居趋势第一。

- **moonshotai/Kimi-K3.1-Pro** — https://huggingface.co/moonshotai/Kimi-K3.1-Pro
  moonshotai｜点赞 1,706｜下载 25,569
  Kimi K3.1 系列旗舰图文对话模型，采用 compressed-tensors 压缩权重，下载量仍偏低，属于早期关注型发布。

- **mistralai/Mistral-Large-4-1T-A52B** — https://huggingface.co/mistralai/Mistral-Large-4-1T-A52B
  mistralai｜点赞 1,637｜下载 11,628
  Mistral 稀疏大模型（1T 总参 / 52B 激活），标注支持 vLLM 与 SGLang，是高关注低下载的权重发布。

- **deepseek-ai/DeepSeek-V4.1-Flash-1017** — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
  deepseek-ai｜点赞 5,407｜下载 295,747
  DeepSeek V4.1 Flash 官方图文对话权重，是今日社区量化与微调潮的母模型。

- **LiquidAI/LFM3-1.7B** — https://huggingface.co/LiquidAI/LFM3-1.7B
  LiquidAI｜点赞 1,553｜下载 73,562
  Liquid AI 第三代小型文本生成模型，以 1.7B 规模获得较高点赞，代表小模型方向。

- **NousResearch/Arete-27B** — https://huggingface.co/NousResearch/Arete-27B
  NousResearch｜点赞 268｜下载 1,747
  基于 Qwen3.5 的监督微调模型，属于研究机构对新基座的快速适配。

- **webAI-Official/TwIL-8B** — https://huggingface.co/webAI-Official/TwIL-8B
  webAI-Official｜点赞 224｜下载 22,737
  基于 granite 的 8B 文本生成模型，同时提供 transformers 与 GGUF 权重。

- **baidu/ERNIE-5.5-Flash-Base** — https://huggingface.co/baidu/ERNIE-5.5-Flash-Base
  baidu｜点赞 227｜下载 1,400
  百度 ERNIE5.5 MoE 基座模型，点赞与下载都低，处于发布早期。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Lightricks｜点赞 11,092｜下载 2,661,026
  覆盖文生视频、图生视频、视频生视频的一体化视频模型，是今日下载量与点赞双高的生成模型。

- **facebook/sam3** — https://huggingface.co/facebook/sam3
  facebook｜点赞 6,091｜下载 1,982,669
  SAM3 分割与掩码生成模型，支持视频场景，是榜单中少见的视觉基础模型。

- **abenzerps/Qwen-Image-2.1-Turbo-Quantized** — https://huggingface.co/abenzerps/Qwen-Image-2.1-Turbo-Quantized
  abenzerps｜点赞 5,722｜下载 76,804
  Qwen-Image 2.1 Turbo 的 GGUF 量化版，面向 ComfyUI 加速出图，点赞远超下载，属高热尝鲜型。

- **black-forest-labs/flux-3-image-klein-comfy** — https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy
  black-forest-labs｜点赞 2,731｜下载 1,167,959
  FLUX 3 图像编辑/生成单文件权重，直接适配 ComfyUI，下载量破百万。

- **nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B** — https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B
  nvidia｜点赞 3,106｜下载 67,230
  基于 NeMo 的语音转写大模型（30B 总参 / A4B 激活），是榜单唯一 ASR 模型。

- **PrunaAI/P-H3-Image-Comfy** — https://huggingface.co/PrunaAI/P-H3-Image-Comfy
  PrunaAI｜点赞 239｜下载 625,136
  P-H3 图像模型的 ComfyUI 单文件版本，下载量显著高于同系列基础版。

- **PrunaAI/P-H3-Image** — https://huggingface.co/PrunaAI/P-H3-Image
  PrunaAI｜点赞 168｜下载 893
  同系列 diffusers 权重版本，热度远低于 ComfyUI 版。

- **Pika-Labs/Pika-H3-Flex** — https://huggingface.co/Pika-Labs/Pika-H3-Flex
  Pika-Labs｜点赞 516｜下载 1,083
  Pika H3 Flex 图生视频模型，主打音视频联合生成，下载量仍处于早期。

- **Edge0/Audio8-TTS-Realistic-Air** — https://huggingface.co/Edge0/Audio8-TTS-Realistic-Air
  Edge0｜点赞 360｜下载 15,319
  基于 arktts 的文本转语音模型，是榜单唯一 TTS 条目。

- **speridlabs/idol** — https://huggingface.co/speridlabs/idol
  speridlabs｜点赞 1,315｜下载 22,854
  基于高斯泼溅的图生 3D 模型，采用 Apache-2.0 许可，是榜单唯一的 3D 生成条目。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **ccore/Qwen3.5-4B-3D-Coder** — https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder
  ccore｜点赞 907｜下载 254,053
  基于 Qwen3.5 的 Three.js/3D 代码模型，提供 safetensors 与 GGUF，下载量居高。

- **ccore/Qwen3.5-4B-GLB-3D-Coder** — https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder
  ccore｜点赞 267｜下载 33,641
  同系列 GLB 输出变体，热度明显低于前作。

- **ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF** — https://huggingface.co/ISTA-DASLab/DeepSeek-V4.1-Flash-1017-GSQ-RCO-Coder-GGUF
  ISTA-DASLab｜点赞 204｜下载 258,719
  DeepSeek V4.1 Flash 的 GSQ-RCO 量化版，定位编程与视觉任务，下载量不低但点赞偏弱。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU｜点赞 2,690｜下载 1,553,252
  在 Qwen3.8-27B 上叠加 heretic/uncensored/编程取向的社区 GGUF 微调，下载破百万。

- **unsloth/Qwen3.8-Flash-Next-GGUF** — https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF
  unsloth｜点赞 1,526｜下载 1,548,621
  unsloth 出品的 Qwen3.8-Flash-Next GGUF 量化版，下载量与微调版同级。

- **xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic** — https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic
  xtools-at｜点赞 771｜下载 7,088
  Qwen3.5-9B 的去审查微调文本模型，点赞高但下载少，属话题型发布。

- **AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF** — https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF
  AtomicChat｜点赞 388｜下载 130,020
  DeepSeek V4.1 Flash 的去审查 GGUF 量化。

- **mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF** — https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF
  mradermacher｜点赞 176｜下载 136,706
  对 heritic 微调版的 i1 GGUF 量化，下载高而点赞低，典型“工具型”量化条目。

- **FusionCow/Sulphur-3** — https://huggingface.co/FusionCow/Sulphur-3
  FusionCow｜点赞 413｜下载 1,003
  基于 MiniMax-H3 的社区微调，下载极少。

- **ricursiveAI/Ripple-65B-Preview** — https://huggingface.co/ricursiveAI/Ripple-65B-Preview
  ricursiveAI｜点赞 389｜下载 5,087
  65B 预览模型，带 custom_code，Apache-2.0 许可。

- **burner22/numbat** — https://huggingface.co/burner22/numbat
  burner22｜点赞 386｜下载 10,197
  采用 modelopt 的 8-bit custom_code 模型，规模与用途未标注。

- **Viggle/Viggle-Remake** — https://huggingface.co/Viggle/Viggle-Remake
  Viggle｜点赞 188｜下载 76,308
  基于 MiniMax-H3 的视频角色替换/编辑模型（video-to-video）。

## 三、生态信号

Qwen 家族是今日绝对主角：官方 Qwen3.8-27B 登顶，Qwen3.8-Flash-Next、Qwen3.5 代码模型、Qwen-Image 2.1，以及大量以 Qwen 为基座的社区微调，共同构成榜单最密集的谱系。DeepSeek V4.1 Flash 官方权重与四份社区 GGUF/去审查版本同时上榜，说明新权重发布后，24 小时内形成量化生态已成常态。开源权重仍是趋势榜主力，Kimi、Mistral、ERNIE、Nemotron、LFM3 均在 Hub 直接发布。值得注意的信号是“点赞高、下载少”的尝鲜型与“下载高、点赞低”的工具型量化并存，反映社区侧重实际可用性。uncensored/heretic 微调与 GSQ、GGUF 量化持续活跃，ComfyUI 单文件格式在图像/视频模型中已成事实标准。

## 四、值得探索

1. **facebook/sam3** — 视觉基础模型，下载近 200 万且支持视频分割，通用性强，适合作为下游管线组件重点评估。

2. **Lightricks/LTX-2.5** — 一个模型覆盖文/图/视频生视频，266 万下载验证了实用性，值得研究其一体化视频生成能力。

3. **ccore/Qwen3.5-4B-3D-Coder** — 4B 小模型专攻 Three.js/3D 代码，25 万下载与 safetensors+GGUF 双格式，是低成本专用代码助手的代表样本。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*