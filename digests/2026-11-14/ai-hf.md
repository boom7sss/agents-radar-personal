# Hugging Face 热门模型日报 2026-11-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-14 16:37 UTC

---

# Hugging Face 热门模型日报（2026-11-14）

## 今日速览

今日榜单呈现"一超多强"格局：Qwen3.8-27B 以近 2 万点赞、676 万下载领跑，其衍生微调与量化版本几乎占据榜单四分之一。视频生成赛道热度爆发，Lightricks/LTX-2.5 以 1.19 万点赞、278 万下载位居点赞第二，MiniMax-H3 生态（图像、视频编辑、加速器）多点开花。语言模型仍由开源权重主导，但"uncensored/heretic/abliterated"类社区脱敏微调占据了大量席位。语音全双工方向出现 Sophon-Realtime-v1、Haru-4B 两个零下载起步的新品，值得留意。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)** — Qwen｜点赞 19,968｜下载 6,757,964
  旗舰级 image-text-to-text 大模型，本周热度榜首，是整个榜单被衍生最多的基座模型。

- **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen｜点赞 7,116｜下载 3,031,222
  新一代轻量多模态对话模型（qwen4_exp 标签），以更高性价比承接 Qwen 家族的高并发需求。

- **[deepseek-ai/DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)** — deepseek-ai｜点赞 5,697｜下载 434,013
  DeepSeek V4.1 系列多模态版本，延续 V4 生态的迭代节奏，下载量反映实际部署热度。

- **[moonshotai/Kimi-K3.1-Pro](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)** — moonshotai｜点赞 2,071｜下载 43,687
  Kimi K3.1 专业版，采用 compressed-tensors 压缩，主打推理效率与长上下文场景。

- **[thinkingmachines/Inkling-2-Small](https://huggingface.co/thinkingmachines/Inkling-2-Small)** — thinkingmachines｜点赞 298｜下载 3,647
  小参数多模态对话模型，处早期阶段，代表新入局团队的小而精路线。

- **[meituan-longcat/LongCat-2.5](https://huggingface.co/meituan-longcat/LongCat-2.5)** — meituan-longcat｜点赞 261｜下载 1,254
  美团 LongCat 2.5 多模态版本，刚发布下载基数低，属观察窗口期新品。

- **[NousResearch/Arete-27B](https://huggingface.co/NousResearch/Arete-27B)** — NousResearch｜点赞 585｜下载 6,191
  基于 qwen3_5 的监督微调模型，Nous 研究品牌加持的对话型后训练版本。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — Lightricks｜点赞 11,882｜下载 2,777,667
  全能视频生成/编辑模型（图生视频、文生视频、视频生视频），本周视频赛道最强人气。

- **[facebook/sam3](https://huggingface.co/facebook/sam3)** — facebook｜点赞 6,586｜下载 2,065,427
  SAM 3 分割与掩码生成模型，支持视频，是视觉基础工具链的重要更新。

- **[MiniMaxAI/MiniMax-H3-Image](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image)** — MiniMaxAI｜点赞 1,093｜下载 517,948
  MiniMax-H3 图像生成模型，支持文生图与图生图，衍生生态迅速扩张。

- **[black-forest-labs/flux-3-image-klein-comfy](https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy)** — black-forest-labs｜点赞 3,157｜下载 1,292,519
  FLUX 3 图像编辑模型，官方集成 ComfyUI，面向本地工作流落地。

- **[facebook/dinov3-vitl16-pretrain-lvd1689m](https://huggingface.co/facebook/dinov3-vitl16-pretrain-lvd1689m)** — facebook｜点赞 2,247｜下载 692,241
  DINOv3 ViT-L 图像特征提取模型，视觉研究常用的自监督骨干网络。

- **[speridlabs/idol](https://huggingface.co/speridlabs/idol)** — speridlabs｜点赞 2,331｜下载 32,619
  基于高斯泼溅的单图到 3D 生成模型，Apache-2.0 许可，3D 生成赛道新秀。

- **[Zyphra/ZONOS3-Mini](https://huggingface.co/Zyphra/ZONOS3-Mini)** — Zyphra｜点赞 332｜下载 19,743
  Zonos3 小尺寸 TTS 语音合成模型，同时提供 safetensors 与 GGUF。

- **[adventists-ai/Sophon-Realtime-v1](https://huggingface.co/adventists-ai/Sophon-Realtime-v1)** — adventists-ai｜点赞 257｜下载 0
  全双工语音到语音实时模型，支持副语言（paralinguistics）信息，尚处零下载起步。

- **[higurashi-ai/Haru-4B](https://huggingface.co/higurashi-ai/Haru-4B)** — higurashi-ai｜点赞 212｜下载 1,262
  4B 全双工语音对话模型，小型化实时语音方向的新尝试。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[ccore/Qwen3.5-4B-3D-Coder](https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder)** — ccore｜点赞 1,117｜下载 416,680
  面向 Three.js/3D 场景的代码小模型，垂直代码生成细分的代表。

- **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** — tencent｜点赞 270｜下载 4,873
  推测解码用草稿模型（draft-model），可加速 Qwen3.8-27B 推理，属基础设施型工具。

- **[Edge0/Edge0-145B-NVFP4](https://huggingface.co/Edge0/Edge0-145B-NVFP4)** — Edge0｜点赞 250｜下载 33,819
  145B 稀疏 MoE 模型，主打边缘推理，并提供 NVFP4 低精度格式。

- **[Cactus-Compute/mirage](https://huggingface.co/Cactus-Compute/mirage)** — Cactus-Compute｜点赞 295｜下载 24,452
  支持零样本目标检测的图像理解模型，面向端侧视觉场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic](https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic)** — xtools-at｜点赞 7,293｜下载 24,470
  9B 规模的脱敏微调模型，点赞高但下载规模较小，反映社区对社区类微调模型的关注。

- **[unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)** — unsloth｜点赞 5,919｜下载 6,422,783
  Qwen3.8-27B 的官方 GGUF 量化版，下载量接近基座，说明本地部署是主流需求。

- **[DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)** — DavidAU｜点赞 3,104｜下载 1,657,783
  Qwen3.8-27B 的多合一社区量化微调，长命名本身就是当前社区打包风格的缩影。

- **[huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF)** — huihui-ai｜点赞 2,134｜下载 4,094,475
  abliterated 脱敏版 GGUF，下载量超过 400 万，是本周脱敏衍生中落地最广的一个。

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** — DavidAU｜点赞 1,757｜下载 2,139,868
  9B 脱敏 GGUF 微调，主打 imatrix 量化与 MTP，偏本地玩家向。

- **[Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image)** — Comfy-Org｜点赞 377｜下载 1,615,613
  MiniMax-H3-Image 的 ComfyUI 单文件分发版，下载远高于原版，说明工作流集成是扩散模型落地关键。

- **[mradermacher/gemma-4-31B-it-ARA-heretic-GGUF](https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF)** — mradermacher｜点赞 284｜下载 116,423
  Gemma-4-31B 的 heretic 脱敏 GGUF 版，跨家族覆盖脱敏量化需求。

- **[chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized](https://huggingface.co/chatrlabs/Qwen-Image-2.1-Uncensored-Omni-Quantized)** — chatrlabs｜点赞 286｜下载 96,251
  Qwen-Image 2.1 的脱敏量化图像生成模型，面向本地图像工作流。

- **[Viggle/Viggle-Remake](https://huggingface.co/Viggle/Viggle-Remake)** — Viggle｜点赞 397｜下载 196,821
  基于 minimax-h3 的视频角色替换/视频编辑模型，提供 GGUF。

- **[VideoRebirthAI/hyperflow-h3-flash](https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash)** — VideoRebirthAI｜点赞 290｜下载 440,150
  基于 minimax-h3 的视频生成加速版，下载量较高，属效率型衍生。

---

## 生态信号

本周生态由 **Qwen3.8 家族主导**，基座、GGUF、脱敏、社区打包、草稿模型全线开花，Qwen3.5 仍是脱敏微调的主要底座。**开源权重明显压过闭源**，榜单几乎无闭源 API 模型。值得注意的量化/微调活动有三类：一是 unsloth、mradermacher 等专业量化者带动 GGUF 下载远超点赞；二是 heretic/abliterated 脱敏微调成稳态品类；三是 ComfyUI 单文件分发（Comfy-Org、FLUX klein-comfy）让扩散模型落地速度反超原版。MiniMax-H3 正形成"图像+视频编辑+加速"的生态圈层。

## 值得探索

1. **[Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)** — 单模型覆盖图/文/视频多向生成与转换，278 万下载印证工程可用性，是当前视频生成最值得实测的开放式模型。
2. **[tencent/Qwen3.8-27B-DSpine-b16](https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16)** — 以极低下载量藏着高价值：推测解码草稿模型可直接加速最热基座，适合研究推理优化者深入。
3. **[adventists-ai/Sophon-Realtime-v1](https://huggingface.co/adventists-ai/Sophon-Realtime-v1)** — 零下载但切入全双工语音+副语言感知的空白地带，配合 Haru-4B，是观察实时语音代理方向的早期样本。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*