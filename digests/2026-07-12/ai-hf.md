# Hugging Face 热门模型日报 2026-07-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-12 03:32 UTC

---

# Hugging Face 热门模型日报（2026-07-12）

## 今日速览

本周 Hugging Face 热门榜上，**国产 MoE 大模型 GLM-5.2** 以 3,836 点赞领跑，NVIDIA 的定位多模态模型 **LocateAnything-3B** 紧随其后。**Qwen3.6 系列**衍生出众多社区微调与量化版本，下载量突破百万。百度推出通用 OCR 模型 **Unlimited-OCR**，谷歌的表格模型 **TabFM** 则开辟零样本分类赛道。量化活动持续火爆，GGUF 格式几乎成为社区部署标配。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

1. **zai-org/GLM-5.2**  
   作者：zai-org | 点赞：3,836 | 下载：421,270  
   链接：https://huggingface.co/zai-org/GLM-5.2  
   说明：基于 MoE 架构的大规模对话模型，支持高效推理，本周人气最高。

2. **openbmb/MiniCPM5-1B**  
   作者：openbmb | 点赞：911 | 下载：366,106  
   链接：https://huggingface.co/openbmb/MiniCPM5-1B  
   说明：1B 参数的轻量语言模型，适合端侧部署，社区关注度高。

3. **tencent/Hy3**  
   作者：tencent | 点赞：699 | 下载：8,210  
   链接：https://huggingface.co/tencent/Hy3  
   说明：腾讯开源的混元系列新模型，标注为 hy_v3 版本，聚焦文本生成。

4. **InternScience/Agents-A1**  
   作者：InternScience | 点赞：495 | 下载：28,141  
   链接：https://huggingface.co/InternScience/Agents-A1  
   说明：基于 Qwen3.5 的 MoE 智能体模型，支持图像和文本输入。

5. **mistralai/Leanstral-1.5-119B-A6B**  
   作者：mistralai | 点赞：189 | 下载：350  
   链接：https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B  
   说明：Mistral 最新 119B 参数 MoE 模型，激活 6B，高效推理。

6. **meituan-longcat/LongCat-2.0**  
   作者：meituan-longcat | 点赞：177 | 下载：1,572  
   链接：https://huggingface.co/meituan-longcat/LongCat-2.0  
   说明：美团推出的长文本对话模型，专注长上下文生成。

7. **nvidia/Nemotron-Labs-Audex-30B-A3B**  
   作者：nvidia | 点赞：123 | 下载：743  
   链接：https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B  
   说明：NVIDIA 30B 参数 MoE 模型（3B 活跃），面向实验室场景。

8. **nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4**  
   作者：nvidia | 点赞：107 | 下载：30,418  
   链接：https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4  
   说明：75B 参数 MoE 模型，采用 NVFP4 精度，优化推理性能。

9. **SupraLabs/Supra-Router-51M**  
   作者：SupraLabs | 点赞：99 | 下载：1,275  
   链接：https://huggingface.co/SupraLabs/Supra-Router-51M  
   说明：51M 参数的路由器模型，用于智能负载分配，新赛道探索。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

1. **nvidia/LocateAnything-3B**  
   作者：nvidia | 点赞：2,707 | 下载：1,472,194  
   链接：https://huggingface.co/nvidia/LocateAnything-3B  
   说明：3B 参数的目标定位模型，支持开放词汇目标检测与分割。

2. **baidu/Unlimited-OCR**  
   作者：baidu | 点赞：1,931 | 下载：1,380,690  
   链接：https://huggingface.co/baidu/Unlimited-OCR  
   说明：百度通用 OCR 模型，不限场景和文字类型，下载量极高。

3. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M**  
   作者：empero-ai | 点赞：769 | 下载：186,852  
   链接：https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M  
   说明：基于 Qwen3.5 的多模态模型，融合 Claude 风格推理能力。

4. **krea/Krea-2-Turbo**  
   作者：krea | 点赞：588 | 下载：168,154  
   链接：https://huggingface.co/krea/Krea-2-Turbo  
   说明：Krea 系列 Turbo 版文生图模型，推理速度优化。

5. **bottlecapai/ThinkingCap-Qwen3.6-27B**  
   作者：bottlecapai | 点赞：236 | 下载：4,128  
   链接：https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B  
   说明：27B 参数“思考帽”模型，增强多模态推理链。

6. **open-gigaai/Giga-World-1**  
   作者：open-gigaai | 点赞：121 | 下载：0  
   链接：https://huggingface.co/open-gigaai/Giga-World-1  
   说明：基于 Diffusers 的大规模图像生成模型，尚未有下载记录。

7. **Alissonerdx/LTX-Best-Face-ID**  
   作者：Alissonerdx | 点赞：101 | 下载：0  
   链接：https://huggingface.co/Alissonerdx/LTX-Best-Face-ID  
   说明：保持身份的文本到视频生成 LoRA，基于 LTX-2 模型。

8. **migtissera/Tess-4-27B**  
   作者：migtissera | 点赞：85 | 下载：806  
   链接：https://huggingface.co/migtissera/Tess-4-27B  
   说明：27B 参数多模态模型，基于 Qwen3.5，支持图像文本推理。

9. **robbyant/lingbot-video-moe-30b-a3b**  
   作者：robbyant | 点赞：85 | 下载：381  
   链接：https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b  
   说明：MoE 式视频生成模型（30B 参数，3B 活跃），探索高效视频生成。

### 🔧 专用模型（代码、数学、医疗、嵌入、表格、语音）

1. **google/tabfm-1.0.0-pytorch**  
   作者：google | 点赞：349 | 下载：20,110  
   链接：https://huggingface.co/google/tabfm-1.0.0-pytorch  
   说明：谷歌开源的表格基础模型，支持零样本分类与回归。

2. **OpenMOSS-Team/MOSS-Transcribe-Diarize**  
   作者：OpenMOSS-Team | 点赞：110 | 下载：12,817  
   链接：https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize  
   说明：语音转文本+说话人分离联合模型，适合会议记录。

3. **CohereLabs/cohere-transcribe-arabic-07-2026**  
   作者：CohereLabs | 点赞：90 | 下载：7,687  
   链接：https://huggingface.co/CohereLabs/cohere-transcribe-arabic-07-2026  
   说明：Cohere 阿拉伯语自动语音识别模型，覆盖方言识别。

### 📦 微调与量化（社区微调、GGUF、AWQ、LoRA）

1. **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
   作者：HauhauCS | 点赞：2,653 | 下载：2,641,936  
   链接：https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive  
   说明：Qwen3.6 的 35B MoE 量化版，去限制+激进风格，下载量第一。

2. **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**  
   作者：empero-ai | 点赞：2,016 | 下载：1,944,961  
   链接：https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF  
   说明：Qwythos 多模态模型的 GGUF 量化版，极受本地部署欢迎。

3. **yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF**  
   作者：yuxinlu1 | 点赞：1,150 | 下载：436,530  
   链接：https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF  
   说明：Gemma-4-12B 的 agent 强化微调 + GGUF 量化，兼顾编程能力。

4. **unsloth/Qwen3.6-27B-MTP-GGUF**  
   作者：unsloth | 点赞：1,049 | 下载：2,904,169  
   链接：https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF  
   说明：Unsloth 优化的 Qwen3.6 27B GGUF 版，下载量惊人。

5. **deepreinforce-ai/Ornith-1.0-35B-GGUF**  
   作者：deepreinforce-ai | 点赞：853 | 下载：1,216,495  
   链接：https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF  
   说明：35B 参数 Ornith 模型的 GGUF 版，MIT 许可，兼容性高。

6. **froggeric/Qwen-Fixed-Chat-Templates**  
   作者：froggeric | 点赞：852 | 下载：0  
   链接：https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates  
   说明：修复 Qwen 聊天模板的工具资源，无模型但点赞高。

7. **GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF**  
   作者：GnLOLot | 点赞：192 | 下载：29,887  
   链接：https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF  
   说明：MiniCPM5-1B 的“思考”风格微调 + GGUF 量化版。

8. **conradlocke/krea2-identity-edit**  
   作者：conradlocke | 点赞：190 | 下载：0  
   链接：https://huggingface.co/conradlocke/krea2-identity-edit  
   说明：用于 Krea-2 的身份保持编辑 LoRA，支持 ComfyUI。

9. **unsloth/DeepSeek-V4-Flash-GGUF**  
   作者：unsloth | 点赞：142 | 下载：38,922  
   链接：https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF  
   说明：DeepSeek-V4 Flash 的 GGUF 量化版，兼顾速度与质量。

---

## 生态信号

本周最显著的信号是 **MoE 架构全面开花**：GLM-5.2、Nemotron 系列、Agents-A1、Leanstral、LingBot 等均采用混合专家设计，在保持高性能的同时控制推理成本。**Qwen 家族**（3.5/3.6）成为社区生态核心，衍生出大量微调、去限制、量化版本，下载量占据前列。**企业开源意愿增强**：腾讯、百度、NVIDIA、Mistral、Cohere 均贡献了重量级模型，且多数附有商业友好许可。量化方面，**GGUF 格式一家独大**，几乎每个热门模型都伴随社区量化版，Unsloth 等团队提供的优化工具加速了这一过程。此外，**多模态与专用化**趋势明显，定位、OCR、表格、语音等垂直场景模型获得了高下载，说明用户越来越追求“开箱即用”的精准能力。

---

## 值得探索

1. **zai-org/GLM-5.2**  
   链接：https://huggingface.co/zai-org/GLM-5.2  
   理由：本周点赞最高，代表 MoE 对话模型的最新水平，适合研究高效推理与生成质量平衡。

2. **nvidia/LocateAnything-3B**  
   链接：https://huggingface.co/nvidia/LocateAnything-3B  
   理由：轻量但强大的开放词汇目标定位模型，下载量超百万，可应用于机器人、自动驾驶等具身智能场景。

3. **unsloth/Qwen3.6-27B-MTP-GGUF**  
   链接：https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF  
   理由：下载量突破 290 万，Unsloth 的量化优化使 27B 模型可在消费级 GPU 运行，是本地部署多模态模型的标杆。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*