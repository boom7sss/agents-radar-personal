# Hugging Face 热门模型日报 2026-08-05

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-05 03:12 UTC

---

# 📊 Hugging Face 热门模型日报（2026-08-05）

## 今日速览

本周 HF 趋势榜由「大厂开源 + 社区快速适配」主导：DeepSeek-V4-Flash、GLM-5.2、Kimi-K3 同时占据高赞与高下载位。Kimi-K3 以 10,016 周点赞登顶，DeepSeek-V4-Flash 以 273.7 万次下载领跑全榜。Qwen3.6/Qwen3.5 衍生的 GGUF 与 Uncensored 微调模型大量上榜，社区再创作异常活跃。视频生成模型 MiniMax-H3 在发布首周即形成官方权重、ComfyUI 适配、GGUF 量化的完整生态链。多模态视觉语言模型加速渗透，Kimi-K3、Inkling-Small、Mage-VL、Qwythos 等多款 VLM 集中登榜。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **[deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)** — 作者：deepseek-ai | ❤️ 2,320 | ⬇️ 433,284  
   DeepSeek-V4-Flash 的 0731 快照版，与主线 Flash 模型共同带动 DeepSeek V4 系列生态热度。

- **[EschaLabs/Qwen3.6-35B-A3B-Escha-W2](https://huggingface.co/EschaLabs/Qwen3.6-35B-A3B-Escha-W2)** — 作者：EschaLabs | ❤️ 195 | ⬇️ 2,987  
   基于 Qwen3.6 架构的 35B 总参数、3B 激活 MoE 高效推理模型，体现社区对稀疏化架构的快速跟进。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 作者：zai-org | ❤️ 4,821 | ⬇️ 2,234,662  
   智谱最新 MoE 对话模型（GLM MoE DSA 架构），高赞高下载，是本周国产开源大模型的核心产品。

- **[LiquidAI/LFM2.5-2.6B](https://huggingface.co/LiquidAI/LFM2.5-2.6B)** — 作者：LiquidAI | ❤️ 162 | ⬇️ 47,393  
   LiquidAI 的 2.6B 小型语言模型，主打高效文本生成与低成本部署。

- **[XYZAILab/XYZ-Aquila-mini](https://huggingface.co/XYZAILab/XYZ-Aquila-mini)** — 作者：XYZAILab | ❤️ 404 | ⬇️ 1,317  
   结合 Qwen3.5 MoE 架构与图像文本处理标签的轻量文本生成模型。

- **[deepseek-ai/DeepSeek-V4-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)** — 作者：deepseek-ai | ❤️ 2,011 | ⬇️ 2,737,621  
   DeepSeek-V4 系列 Flash 主线模型，周下载量全榜第一，可见对话模型本地化部署需求旺盛。

- **[Nanbeige/Nanbeige4.2-3B](https://huggingface.co/Nanbeige/Nanbeige4.2-3B)** — 作者：Nanbeige | ❤️ 665 | ⬇️ 37,256  
   Nanbeige 4.2 系列 3B 小型 LLM，小体量模型关注度持续上升。

- **[LGAI-EXAONE/K-EXAONE-2.0-750B-A37B](https://huggingface.co/LGAI-EXAONE/K-EXAONE-2.0-750B-A37B)** — 作者：LGAI-EXAONE | ❤️ 117 | ⬇️ 325  
   LG 的 750B 总参/37B 激活 MoE 超大模型，代表开源榜单向超大权重持续扩容。

- **[poolside/Laguna-S-2.1](https://huggingface.co/poolside/Laguna-S-2.1)** — 作者：poolside | ❤️ 920 | ⬇️ 82,912  
   poolside 推出的文本生成模型，以代码能力为导向，备受开发者社区关注。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 作者：MiniMaxAI | ❤️ 2,050 | ⬇️ 0  
   全新图像/文本到视频生成模型，上线首周即获高赞，下载量为 0 说明刚发布且被生态二次分发包围。

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 作者：moonshotai | ❤️ 10,016 | ⬇️ 1,125,935  
   全榜周点赞最高的多模态模型，采用压缩权重（compressed-tensors），兼顾多模态理解与特征提取。

- **[thinkingmachines/Inkling-Small](https://huggingface.co/thinkingmachines/Inkling-Small)** — 作者：thinkingmachines | ❤️ 286 | ⬇️ 15,500  
   小型多模态对话模型，主打轻量级视觉语言交互。

- **[Audio8/Audio8-TTS-Preview-0.6b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.6b)** — 作者：Audio8 | ❤️ 249 | ⬇️ 11,276  
   基于 ArkTTS 架构的 0.6B TTS 模型，音频生成类模型开始进入趋势榜视野。

- **[microsoft/Mage-VL](https://huggingface.co/microsoft/Mage-VL)** — 作者：microsoft | ❤️ 257 | ⬇️ 435,784  
   微软推出的视觉语言模型，支持图像文本到文本任务，企业级多模态需求强劲。

- **[lodestones/Kroma](https://huggingface.co/lodestones/Kroma)** — 作者：lodestones | ❤️ 176 | ⬇️ 0  
   基于 Krea 的 LoRA 文生图模型，刚发布即获 176 赞，值得关注其后续效果展示。

- **[owensong/Inflect-Micro-v2](https://huggingface.co/owensong/Inflect-Micro-v2)** — 作者：owensong | ❤️ 410 | ⬇️ 2,072  
   面向 CPU/边缘部署的轻量 TTS 模型，反映本地语音合成与端侧 AI 需求。

- **[empero-ai/Qwythos-27B-v1](https://huggingface.co/empero-ai/Qwythos-27B-v1)** — 作者：empero-ai | ❤️ 134 | ⬇️ 2,243  
   基于 Qwen3.5 的 27B 多模态社区微调模型，探索视觉语言能力的二次训练。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 作者：baidu | ❤️ 3,882 | ⬇️ 2,703,366  
   百度开源的通用 OCR 模型，周下载量近 270 万，反映文档解析与检索场景对 OCR 的刚需。

- **[Kwaipilot/KAT-Coder-V2.5-Dev](https://huggingface.co/Kwaipilot/KAT-Coder-V2.5-Dev)** — 作者：Kwaipilot | ❤️ 475 | ⬇️ 15,381  
   基于 Qwen3.5 MoE 架构的代码模型，面向开发者工具链场景。

- **[XYZAILab/XYZ-Aquila-pro](https://huggingface.co/XYZAILab/XYZ-Aquila-pro)** — 作者：XYZAILab | ❤️ 358 | ⬇️ 1,388  
   Aquila 系列专业版，标签含 agentic-search，面向智能体搜索与工具调用场景。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 作者：Comfy-Org | ❤️ 619 | ⬇️ 2  
   Comfy 官方组织发布的 MiniMax-H3 ComfyUI 适配版本，视频模型接入 UI 生态的关键节点。

- **[DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)** — 作者：DavidAU | ❤️ 1,516 | ⬇️ 1,633,405  
   Qwen3.6-27B 的高强度社区微调 GGUF，下载量超 163 万，Uncensored 角色扮演需求旺盛。

- **[unsloth/DeepSeek-V4-Flash-0731-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)** — 作者：unsloth | ❤️ 474 | ⬇️ 111,678  
   unsloth 出品的 DeepSeek-V4-Flash GGUF 量化，显著降低本地部署门槛。

- **[unsloth/Kimi-K3-GGUF](https://huggingface.co/unsloth/Kimi-K3-GGUF)** — 作者：unsloth | ❤️ 304 | ⬇️ 170,055  
   Kimi-K3 的 GGUF 量化版，让这一高赞多模态模型可被社区本地运行。

- **[ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-MiniMax-H3-ComfyUI-INT8-ConvRot)** — 作者：ethanfel | ❤️ 190 | ⬇️ 0  
   将 Qwen3-VL-32B 与 MiniMax-H3 融合的 ComfyUI INT8 社区实验版，代表“多模型融合 + UI 适配”新玩法。

- **[LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF](https://huggingface.co/LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V6-GGUF)** — 作者：LuffyTheFox | ❤️ 364 | ⬇️ 308,857  
   Qwen3.6-35B-A3B 的 Hermes 微调 + GGUF 量化版，下载超 30 万，社区微调赛道持续火热。

- **[DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.5-9B-The-Defiant-Fable-Uncensored-Heretic-NEO-IMATRIX-MAX-MTP-GGUF)** — 作者：DavidAU | ❤️ 266 | ⬇️ 323,116  
   Qwen3.5-9B 的激进社区微调 GGUF，下载 32 万，延续“Uncensored + NEO Imatrix”系列热度。

- **[realrebelai/MiniMax-H3_GGUFs](https://huggingface.co/realrebelai/MiniMax-H3_GGUFs)** — 作者：realrebelai | ❤️ 104 | ⬇️ 40,010  
   MiniMax-H3 的 GGUF 量化版本，基于 Comfy-Org 适配版，推动视频模型本地化部署。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — 作者：HauhauCS | ❤️ 3,296 | ⬇️ 1,930,898  
   Qwen3.6-35B-A3B 的另一款 Uncensored 微调 GGUF，点赞 3,296、下载 193 万，去审查微调需求显著。

- **[nota-ai/Solar-Open2-250B-Nota-NVFP4](https://huggingface.co/nota-ai/Solar-Open2-250B-Nota-NVFP4)** — 作者：nota-ai | ❤️ 174 | ⬇️ 69,253  
   Solar-Open2-250B 的 NVFP4 量化版，面向 vLLM 部署，代表新量化格式进入趋势视野。

## 生态信号

生态有三个信号：一是 Qwen3.6/Qwen3.5、DeepSeek-V4、GLM-5.2 构成开源底座第一梯队，社区快速产出 GGUF 与 Uncensored 微调，开源竞争从发布权重走向生态运营；二是视频生成出现官方模型 + ComfyUI + GGUF 的完整链路，MiniMax-H3 是典型案例；三是量化格式走向多元，GGUF 仍是主力，NVFP4 等新格式进入部署栈，2.6B~35B 中小模型集中上榜，边缘部署与 OCR、TTS、代码等专用场景获得独立生态位。

## 值得探索

- **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 全榜点赞最高，采用压缩权重技术，代表多模态模型在体量与性能之间平衡的前沿方向，值得深入研究其架构与压缩方案。

- **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) + [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3)** — 一周内形成“官方权重 + ComfyUI 适配 + GGUF 量化”的完整视频生成生态链，是观察多模态生成模型落地路径的最佳样本。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — 下载量近 270 万的专用模型，OCR 被大厂重新定义为基础设施级能力，适合作为文档智能与 RAG 管线的实用基座进行评估。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*