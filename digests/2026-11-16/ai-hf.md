# Hugging Face 热门模型日报 2026-11-16

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-16 20:31 UTC

---

# Hugging Face 热门模型日报（2026-11-16）

## 今日速览

Qwen3.8-27B 以 20,236 点赞、676 万下载双料领跑，确立本周绝对主导地位，其 GGUF 衍生版本（unsloth，666 万下载）紧随其后，显示"官方基座 + 社区量化"的传播路径已成熟。围绕 Qwen 系与 DeepSeek-V4.1 的大量 heretic / abliterated / uncensored 微调变体继续上榜，去审查化仍是社区最活跃的二次开发方向。生成侧，Lightricks 的 LTX-2.5 视频模型与 MiniMax-H3-Image 分别以千万级、百万级下载印证视频与图像生成的高热度。此外 metafacebook/sam3、Zyphra/ZONOS3-Mini 等专用模型的上榜，说明研究级与音频工具同样保有一席之地。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
  Qwen｜点赞 20,236｜下载 6,763,402
  本周点赞与下载双第一的旗舰基座，定位 image-text-to-text 对话模型，是全站生态的引力中心。

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)**
  moonshotai｜点赞 2,141｜下载 49,428
  Kimi 新代 Pro 模型，采用 compressed-tensors 标签，下载量尚低但关注度高，属早期观察对象。

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)**
  NousResearch｜点赞 641｜下载 9,187
  基于 qwen3_5 的监督微调模型，代表研究机构对主流基座的再塑造。

- **[Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4)**
  Edge0｜点赞 399｜下载 55,335
  面向边缘推理的 MoE 模型，主打 end-inference 与 latent-moe，超大参数量配 NVFP4 量化值得关注。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)**
  MiniMaxAI｜点赞 1,292｜下载 609,130
  文本/图像到图像生成模型，下载量远超点赞，是本周被大量实际调用的基础生成模型之一。

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
  Lightricks｜点赞 12,193｜下载 2,789,021
  点赞第二高的视频生成模型，覆盖图生视频、文生视频、视频转视频多任务，热度极高。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
  black-forest-labs｜点赞 3,317｜下载 1,115,161
  Flux 三代面向 ComfyUI 的图像生成/编辑单文件发布，强绑定 ComfyUI 工作流生态。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)**
  facebook｜点赞 6,753｜下载 1,973,300
  SAM 三代分割/掩码生成模型，扩展至视频分割，是研究与应用两端的基础设施级模型。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)**
  speridlabs｜点赞 2,407｜下载 34,752
  基于高斯泼溅的图像到 3D 模型，Apache-2.0 许可，3D 生成方向的代表。

- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)**
  Zyphra｜点赞 448｜下载 69,946
  轻量文本转语音模型，同时提供 safetensors 与 GGUF 权重，TTS 本地部署友好。

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)**
  higurashi-ai｜点赞 406｜下载 3,372
  全双工语音到语音模型，指向实时对话式语音交互这一新兴方向。

- **[Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake)**
  Viggle｜点赞 441｜下载 218,765
  视频转视频编辑模型，主打角色替换，标签关联 MiniMax-H3 生态。

- **[IFM/PAN2](https://huggingface.co/IFM/PAN2)**
  IFM｜点赞 184｜下载 374
  标注为 world-model / world-simulation 的图生文生视频模型，属探索性早期项目。

- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)**
  thinkingmachines｜点赞 390｜下载 16,918
  小型 image-text-to-text 对话模型，探索性小模型代表。

- **[Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage)**
  Cactus-Compute｜点赞 363｜下载 32,031
  图像到文本/目标检测方向的多模态模型，属视觉理解工具类。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca)**
  n4ze3m｜点赞 168｜下载 860
  极轻量 ONNX/GGUF 英文 TTS 模型，下载规模虽小，但体现超小模型落地方向。

> 注：本期榜单未出现明确的代码、数学、医疗或嵌入专用模型，故本分类仅列可归入工具/专用场景的极小模型。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic)**
  xtools-at｜点赞 8,338｜下载 29,567
  榜单第二高点赞，去审查化 heretic 微调，下载量偏低但社区声量极大。

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
  unsloth｜点赞 6,062｜下载 6,666,734
  Qwen3.8-27B 的官方量化版，下载量全站第二，量化是基座扩散的关键通道。

- **[unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)**
  unsloth｜点赞 1,780｜下载 2,673,551
  Qwen3.8-Flash-Next 的 GGUF 版本，延续 unsloth 的量化覆盖打法。

- **[Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image)**
  Comfy-Org｜点赞 467｜下载 2,294,065
  MiniMax-H3-Image 的 ComfyUI 适配单文件版，下载量远超原版点赞，体现工作流封装价值。

- **[Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF)**
  Abiray｜点赞 267｜下载 155,475
  MiniMax-H3-Image 的 GGUF 量化，扩大图像模型本地可用性。

- **[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)**
  chatrlabs｜点赞 366｜下载 142,901
  Qwen-Image-2.1 的去审查量化 Omini 版本。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
  DavidAU｜点赞 3,215｜下载 1,746,935
  DavidAU 的 Qwen3.8 去审查微调 GGUF，点赞与下载双高，是社区微调中最成功的一档。

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)**
  huihui-ai｜点赞 2,227｜下载 4,253,987
  abliterated 量化版，下载量极高，显示去除拒绝行为模型的巨大实际需求。

- **[HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)**
  HauhauCS｜点赞 2,634｜下载 1,718,332
  多模态视觉版去审查微调，MTP GGUF 格式。

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)**
  DavidAU｜点赞 1,833｜下载 2,178,238
  小参数规模去审查微调，主打 NEO Imatrix 量化。

- **[mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF)**
  mradermacher｜点赞 327｜下载 161,317
  Gemma 4 系去审查量化版，代表非 Qwen 家族也在此赛道布局。

- **[AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF](https://huggingface.co/AtomicChat/DeepSeek-V4.1-Flash-1017-Uncensored-GSQ-RCO-GGUF)**
  AtomicChat｜点赞 698｜下载 207,466
  DeepSeek-V4.1 去审查量化版，附 GSQ-RCO 标签。

- **[SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF](https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF)**
  SC117｜点赞 1,063｜下载 4,164,878
  abliterated 量化版下载量突破 400 万，单看下载量是量化阵营的头部。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)**
  deepseek-ai｜点赞 5,784｜下载 467,224
  DeepSeek 官方 V4.1 快版，虽非社区微调，但与上述多条量化版形成"官方发布—社区二次加工"的完整链条。

---

## 生态信号

本周生态高度集中于 Qwen 家族：Qwen3.8-27B 及其 Flash-Next 衍生线几乎主导点赞与下载榜，unsloth、huihui-ai、DavidAU、SC117 等围绕其产出的 GGUF / abliterated / heretic 版本占据量化与微调榜单大半席位，形成清晰的"官方基座向社区量化传播"路径。开源权重仍是社区主力，未见闭源信号。去审查化（heretic / abliterated / uncensored）是最显著的二次开发动机，多个变体下载量达百万级，其规模已可与官方版本相比。生成侧则出现 ComfyUI 封装与 GGUF 量化并行的趋势，说明图像/视频模型正快速向本地化工作流下沉。

---

## 值得探索

1. **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** —— 本周无可争议的基座，理解整个榜单衍生的前提；搭配 unsloth 的 GGUF 版可低成本本地部署。

2. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** —— 单模型覆盖图生视频、文生视频、视频转视频多任务，点赞第二高，是视频生成领域值得优先评估的对象。

3. **[facebook/sam3](https://huggingface.co/facebook/sam3)** —— 分割能力延伸至视频，兼具研究与应用价值，适合作为视觉管线的基础组件考察。

> 说明：以上分析均基于所附 30 个模型的点赞/下载与标签数据，未引入榜单外信息；"微调与量化"分类中 deepseek-ai 官方模型系为呈现发布链而列，其本身非社区微调。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*