# Hugging Face 热门模型日报 2026-11-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-17 19:12 UTC

---

# Hugging Face 热门模型日报（2026-11-17）

## 今日速览

Qwen 系列继续主导生态：官方 Qwen3.8-27B 以 2 万余点赞、近 700 万下载位居榜首，围绕它扩展出的 GGUF 量化、abliterated（去除内容限制）和社区微调模型占据榜单近三分之一席位。视频与图像生成模型热度不减，Lightricks LTX-2.5 和 MiniMax-H3-Image 以及它们的 ComfyUI 适配版本形成了从基础模型到工作流的完整链条。facebook/sam3 是少数非生成类视觉模型，靠视频分割能力吸引近 7000 点赞。另一显著现象是“uncensored/heretic”变体集中上榜，反映社区对去除内容限制的需求。整体看，榜单中开源权重占绝对多数，量化分发（GGUF、NVFP4）成为模型触达终端用户的主要渠道。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

**[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)**
Qwen | 👍 20,388 | ⬇️ 6,942,530
榜单点赞和下载双料第一，是多模态对话旗舰模型，也是本轮 Qwen3.5 生态下游微调的母体。

**[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)**
deepseek-ai | 👍 5,851 | ⬇️ 479,986
DeepSeek V4.1 的 Flash 轻量版本，主打高性价比的图文理解与生成。

**[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)**
moonshotai | 👍 2,192 | ⬇️ 53,224
Kimi K3.1 系列旗舰，标注 compressed-tensors，暗示已做压缩优化以便本地部署。

**[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)**
NousResearch | 👍 680 | ⬇️ 10,670
基于 Qwen3.5 进行 SFT（监督微调）得到的模型，代表开源社区对官方底座的标准二次微调路线。

**[maxwell-model/Maxwell-V1-Flash](https://huggingface.co/maxwell-model/Maxwell-V1-Flash)**
maxwell-model | 👍 142 | ⬇️ 287
采用 MoE 架构的新兴文本生成模型，属于冷启动阶段的新面孔。

**[Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4)**
Edge0 | 👍 492 | ⬇️ 61,591
145B 边缘推理 MoE，采用 NVFP4 量化方案，是面向端侧或边缘设备的大模型尝试。

**[internlm/Sage-S2.1-Flash](https://huggingface.co/internlm/Sage-S2.1-Flash)**
internlm | 👍 90 | ⬇️ 337
internlm 发布的轻量模型，标签指向 GLM5 系列架构，尚在早期。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)**
Lightricks | 👍 12,372 | ⬇️ 2,828,071
支持图像、文本、视频之间相互转换的视频生成模型，是当前视频生成榜中热度最高的开源模型。

**[facebook/sam3](https://huggingface.co/facebook/sam3)**
facebook | 👍 6,868 | ⬇️ 1,971,023
SAM 第三代分割模型，支持视频分割，是视觉基础工具类模型中的标志性版本。

**[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)**
black-forest-labs | 👍 3,399 | ⬇️ 1,062,051
FLUX 3 的 ComfyUI 单文件版本，主打图像编辑，是专业生成工作流的主要选择。

**[speridlabs/idol](https://huggingface.co/speridlabs/idol)**
speridlabs | 👍 2,448 | ⬇️ 36,388
基于高斯泼溅（Gaussian Splatting）的图像转 3D 模型，采用 Apache-2.0 许可，3D 生成领域的亮点。

**[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)**
MiniMaxAI | 👍 1,418 | ⬇️ 727,110
MiniMax H3 图像生成模型，支持文生图和图生图，是今日新出现的图像生成竞争者。

**[Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image)**
Comfy-Org | 👍 516 | ⬇️ 2,660,341
MiniMax-H3-Image 的 ComfyUI 适配版，下载量远超原版，显示工作流生态在快速扩散。

**[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)**
Zyphra | 👍 505 | ⬇️ 93,909
ZONOS3 轻量 TTS 模型，同时提供 safetensors 与 GGUF 权重。

**[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)**
higurashi-ai | 👍 485 | ⬇️ 4,445
支持全双工（full-duplex）语音对话的 4B 语音到语音模型，属于新兴的实时语音交互方向。

**[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)**
chatrlabs | 👍 481 | ⬇️ 160,748
Qwen-Image 2.1 的去除限制量化版本，同时提供 diffusers 和 GGUF 格式。

**[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)**
thinkingmachines | 👍 434 | ⬇️ 18,359
Thinking Machines 的轻量多模态对话模型，属于小参数方向的新尝试。

**[Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage)**
Cactus-Compute | 👍 408 | ⬇️ 35,418
面向图像理解、目标检测与零样本检测的多模态模型，偏应用侧。

**[Abiray/MiniMax-H3-Image-GGUF](https://huggingface.co/Abiray/MiniMax-H3-Image-GGUF)**
Abiray | 👍 295 | ⬇️ 190,006
MiniMax-H3-Image 的社区 GGUF 量化版，支持文生图与图像编辑。

**[n4ze3m/tiny-voca](https://huggingface.co/n4ze3m/tiny-voca)**
n4ze3m | 👍 224 | ⬇️ 3,042
极小的英文 TTS 模型，提供 ONNX 与 GGUF 权重，面向端侧部署。

**[meituan-longcat/LongCat-Video-Avatar-1.6](https://huggingface.co/meituan-longcat/LongCat-Video-Avatar-1.6)**
meituan-longcat | 👍 191 | ⬇️ 489
音频驱动虚拟人视频模型（audio-text-to-video），提供 ONNX 与 diffusers 格式。

---

### 🔧 专用模型

**[pyannote/speaker-diarization-3.1](https://huggingface.co/pyannote/speaker-diarization-3.1)**
pyannote | 👍 5,278 | ⬇️ 6,375,689
业界常用的说话人分离模型，下载量高达 600 万以上，属于长期保持热度的基础音频工具。

**[sensenova/SenseNova-Loop-9B](https://huggingface.co/sensenova/SenseNova-Loop-9B)**
sensenova | 👍 129 | ⬇️ 0
SenseNova Loop 多模态 9B 模型，刚发布尚无下载，值得关注其后续表现。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**[xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic)**
xtools-at | 👍 9,438 | ⬇️ 32,356
基于 Qwen3.5-9B 的去除限制（heretic）变体，点赞极高而下载偏低，说明社区关注点偏向“实验性”而非实际部署。

**[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)**
unsloth | 👍 6,128 | ⬇️ 6,827,598
Qwen3.8-27B 的官方 GGUF 量化，下载量与基座几乎持平，已是最主流的本地部署渠道。

**[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)**
DavidAU | 👍 3,280 | ⬇️ 1,759,757
典型的“缝合式”社区微调，名字里堆叠了去除限制、编程能力和 MTP 等多种标签。

**[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)**
huihui-ai | 👍 2,269 | ⬇️ 4,292,911
abliterated 去除内容限制版本，下载量破 400 万，说明这类变体已有相当规模的稳定用户。

**[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)**
DavidAU | 👍 1,870 | ⬇️ 2,187,411
9B 级别去除限制微调，采用 NEO Imatrix 量化，属于量化质量优化的代表。

**[xtools-at/DeepSeek-V4-Pro-Qwen3.5-4B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-4B-UNCENSORED-heretic)**
xtools-at | 👍 213 | ⬇️ 21,167
与 9B 版本同源的小参数变体，下载量反而更高，符合小模型便于本地运行的规律。

**[MoonMath-ai/DeepSeek-V4.1-Flash-1017-uncensored](https://huggingface.co/MoonMath-ai/DeepSeek-V4.1-Flash-1017-uncensored)**
MoonMath-ai | 👍 144 | ⬇️ 1,683
对官方 DeepSeek V4.1-Flash 的去除限制微调，属于新发布的早期变体。

---

## 生态信号

Qwen3.5/3.8 家族是当前绝对的中心，官方底座、unsloth GGUF、abliterated 及多路社区缝合微调共同构成了榜单的半壁江山。DeepSeek V4.1 与 Kimi K3.1 紧随其后，形成“三强并列”的中国开源阵营格局。榜单中几乎全部为开源权重，闭源模型零上榜，说明 HF 趋势榜天然偏向可分发的权重。量化活动极为活跃：GGUF 覆盖图像、语音、文本等多个模态，NVFP4 和 compressed-tensors 也出现在大模型上，量化已从“降级手段”变成标配分发格式。值得警惕的是，“uncensored/heretic”变体数量显著，部分 downloads 已达到百万级，监管和合规话题可能随之升温。

---

## 值得探索

1. **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — 下载量几乎追平基座，是体验当前最强开源多模态模型最省事的起点，量化质量由 unsloth 背书。

2. **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — Apache-2.0 许可的图像转 3D 高斯泼溅模型，在 3D 生成这一相对冷门的赛道上拿到 2400+ 点赞，值得研究其泛化能力。

3. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 支持多种图、文、视频相互转换的视频生成模型，热度仅次于 Qwen，是当前开源视频生成的代表作。

4. **[facebook/sam3](https://huggingface.co/facebook/sam3)** — 引入视频分割的分割基础模型，适合作为视觉流水线的通用组件，与榜单中的生成类模型形成互补。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*