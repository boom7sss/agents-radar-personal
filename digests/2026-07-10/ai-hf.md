# Hugging Face 热门模型日报 2026-07-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-10 15:58 UTC

---

# 🤗 Hugging Face 热门模型日报 | 2026-07-10

---

## 📌 今日速览

- **GLM-5.2（ZAI开源）** 以 3,763点赞登顶本周热门语言模型，彰显国产 MoE 在对话与推理场景的竞争力。
- **多模态模型全面爆发**：百度 Unlimited-OCR（1.9k赞，1.3M下载）与 NVIDIA LocateAnything-3B（2.7k赞，1.5M下载）分别主攻 OCR 与视觉定位，均在社区获高下载。
- **Qwen3.6 生态持续火热**，仅一天内涌现多个量化版本：社区 HauhauCS 的 Uncensored GGUF（2.6k赞，2.7M下载）和 unsloth 的 MTP GGUF（1k赞，2.9M下载），以及官方 NVIDIA NVFP4 量化版（335赞，788k下载）。
- **DeepSeek-V4 系列** 同步发力，官版 Pro-DSpark 与 unsloth 的 Flash GGUF 均获关注，标志新一代 MoE 已进入快速部署阶段。
- **专用模型多样化**：谷歌 TabFM 表格分类、NVIDIA Nemotron-Audex 音频语言模型、SupraLabs 推理路由等小众赛道同样有亮眼新作。

---

## 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 👍点赞 | 📥下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [tencent/Hy3](https://huggingface.co/tencent/Hy3) | tencent | 646 | 6,923 | 腾讯 Hy3 文本生成模型，基于混元架构，专注长文本理解。 |
| [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2) | zai-org | **3,763** | 392,655 | 新一代 MoE 对话模型，周赞最高，代表国产开源大模型最新进展。 |
| [AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces) | AliesTaha | 197 | 4,875 | 基于 Qwen3 的指令微调版本，强调故事生成与追踪能力。 |
| [meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0) | meituan-longcat | 169 | 1,308 | 美团开源长对话模型，承接长上下文交互场景。 |
| [mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B) | mistralai | 182 | 315 | Mistral 最新 119B 参数 MoE 模型，仅激活 6B，效率与性能平衡。 |
| [deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark) | deepseek-ai | 463 | 33,088 | DeepSeek V4 专业版，带分布式推理优化，搭配论文 arXiv:2606.19348。 |
| [nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B) | nvidia | 91 | 576 | NVIDIA 音频-语言统一模型，30B 总参/3B 激活，面向语音交互。 |

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 👍点赞 | 📥下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR) | baidu | 1,914 | 1,319,683 | 百度开源多语言 OCR 模型，支持不限长度的文字识别，工业级精度。 |
| [bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B) | bottlecapai | 204 | 3,699 | 基于 Qwen3.6 的视觉-语言推理增强版，主打“思考帽”式多步推理。 |
| [InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1) | InternScience | 459 | 25,772 | 多模态 Agent 模型，融合 Qwen3.5 MoE 与图像理解，支持工具调用。 |
| [nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B) | nvidia | **2,694** | 1,456,269 | 任意目标定位模型，3B 参数，零样本检测与区域描述。 |
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M) | empero-ai | 757 | 184,315 | 受 Claude 风格启发，融合 Qwen3.5 多模态能力的对话模型（非量化版）。 |
| [krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo) | krea | 575 | 164,525 | 基于 Krea-2 架构的 Turbo 文生图模型，推理速度大幅提升。 |
| [open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1) | open-gigaai | 118 | 0 | 开源世界模型，基于 Diffusion 架构，探索多步物理模拟。 |
| [OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize) | OpenMOSS-Team | 92 | 5,919 | 语音转录与说话人分离模型，支持多说话人场景。 |
| [Patil/Krea-2-depth-controlnet](https://huggingface.co/Patil/Krea-2-depth-controlnet) | Patil | 87 | 0 | Krea-2 的深度 ControlNet，基于流匹配实现精确结构控制。 |

---

## 🔧 专用模型（代码、数学、医疗、嵌入、工具）

| 模型 | 作者 | 👍点赞 | 📥下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch) | google | 341 | 18,626 | 谷歌表格基础模型，零样本分类与回归，可处理异构表格数据。 |
| [conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit) | conradlocke | 156 | 0 | Krea-2 的身份编辑 LoRA，支持 ComfyUI 工作流，精准修改人物特征。 |
| [SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M) | SupraLabs | 79 | 1,160 | 51M 参数的推理路由模型，动态选择专家，优化 LLM 调用成本。 |
| [eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B](https://huggingface.co/eric-venti-seeds/Sun-Direction-Lora-Flux2Klein9B) | eric-venti-seeds | 126 | 0 | 针对 Flux2Klein 的太阳方向 LoRA，用于图像光照控制。 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 831 | 0 | 修复 Qwen 系列聊天模板的 Jinja 文件，适用于 MLX 部署，下载数为0（仅模板）。 |

---

## 📦 微调与量化（社区微调、GGUF、NVFP4）

| 模型 | 作者 | 👍点赞 | 📥下载 | 一句话说明 |
|------|------|--------|--------|------------|
| [empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF) | empero-ai | 1,953 | 1,909,705 | Qwythos 模型的 GGUF 量化版，支持 llama.cpp 本地推理，极受欢迎。 |
| [HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive) | HauhauCS | **2,614** | 2,660,170 | 无审查版 Qwen3.6 MoE 量化模型，35B总参/3B激活，视觉+文本，社区热度极高。 |
| [deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF) | deepreinforce-ai | 834 | 1,085,554 | 全新 35B 语言模型的 GGUF 版，MIT 许可，兼容多种推理框架。 |
| [yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF) | yuxinlu1 | 1,130 | 427,668 | 基于 Gemma-4 的 Agentic 微调版 GGUF，侧重代码与终端操作。 |
| [GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF) | GnLOLot | 153 | 9,029 | MiniCPM5 1B 模型的思考链 GGUF 版，体积小，适合资源受限场景。 |
| [unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF) | unsloth | 121 | 31,895 | DeepSeek V4 Flash 的 GGUF 量化版，unsloth 出品，兼容主流框架。 |
| [nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4) | nvidia | 335 | 787,748 | NVIDIA 官方发布的 Qwen3.6 的 NVFP4 量化版，优化推理内存与速度。 |
| [nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4) | nvidia | 97 | 23,404 | Nemotron 系列 puzzle 任务模型的 NVFP4 量化版本，75B/9B激活。 |
| [unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF) | unsloth | 1,032 | 2,895,457 | Qwen3.6 多模态模型的 MTP GGUF 版，下载量超 289 万，社区主流部署选择。 |

---

## 🌐 生态信号

1. **多模态与 MoE 主导热度**：本周 Top 10 中超过半数为多模态模型（OCR、视觉定位、视觉对话），且很多采用 MoE 架构（GLM-5.2、Qwen3.6 MoE、Leanstral-1.5），稀疏激活成为平衡性能与资源的主流方案。
2. **Qwen3.6 成为“量化之王”**：围绕 Qwen3.6 诞生的 GGUF 和 NVFP4 版本从 1B 到 35B 应有尽有，社区微调（Uncensored、Agentic）与官方量化工具（NVIDIA ModelOpt）齐头并进，生态成熟度极高。
3. **开源权重全面领先**：榜单前 30 中**无任何闭源模型**，所有模型均可下载权重。大型科技公司（腾讯、百度、Mistral、DeepSeek、NVIDIA）与独立社区创作者共同推动开放模型浪潮。
4. **量化格式竞争白热化**：GGUF 依然是社区首选（llama.cpp 生态），但 NVIDIA 的 NVFP4 正借助官方 Quantization Toolkit 抢占部署市场，值得关注。

---

## 🔍 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 本周点赞最高，国产 MoE 里程碑，在对话、推理任务上表现突出，可对比 DeepSeek V4 和 Qwen3.6 系列。
2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — 3B 参数实现零样本目标定位，下载量超 145 万，适合视觉感知任务，论文与 Demo 均已在社区公开。
3. **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — 社区最活跃的 Qwen3.6 量化版本，下载近 300 万，结合 unsloth 技术让推理更高效，部署首选。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*