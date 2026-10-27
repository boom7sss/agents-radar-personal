# Hugging Face 热门模型日报 2026-09-18

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-18 11:49 UTC

---

# Hugging Face 热门模型日报（2026-09-18）

## 今日速览

今日榜单由 Qwen3.8 系列主导生态：Qwen/Qwen3.8-27B 以 15,594 点赞、735 万下载稳居榜首，其衍生量化与微调版本同时占据多个席位。视频生成赛道热度不减，Lightricks/LTX-2.5 与 MiniMaxAI/MiniMax-H3 双双突破 400 万级下载。DeepSeek 发布 V4.1-Flash 并催生社区无审查分支，显示大厂发布与社区改写的联动依旧迅速。量化侧 unsloth 的 Qwen3.8-27B-GGUF 拿下 762 万下载，GGUF 与低比特方案仍是消费级部署主力。此外，m-a-p/YuE2-3B、tencent/AuK 等音频模型与 internlm 的 MoE 预览版上线，提示音乐生成、语音克隆与新型架构仍在活跃扩张。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen｜15,594 赞｜7,358,662 下载
  阿里 Qwen 新一代 27B 多模态对话主干模型，是本周点赞与下载双料冠军，也是大量衍生量化和微调的基座。

- **Qwen/Qwen3.8-Flash-Next** — https://huggingface.co/Qwen/Qwen3.8-Flash-Next
  Qwen｜5,388 赞｜724,142 下载
  Qwen 轻量 Flash 系列的下一代版本（qwen4_exp 标签），主打高效推理与多模态理解。

- **meta-llama/Llama-3.1-8B-Instruct** — https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct
  meta-llama｜7,707 赞｜5,934,139 下载
  经典常青模型，点赞数仍居全榜前列，说明基础指令模型的长尾使用需求持续存在。

- **TokenRhythm/NeoHorse-1-4B** — https://huggingface.co/TokenRhythm/NeoHorse-1-4B
  TokenRhythm｜2,358 赞｜22,666 下载
  基于 qwen3_5_text 的 4B 智能体（agentic）模型，小体积适配端侧与代理任务。

- **openbmb/MiniCPM5-2B** — https://huggingface.co/openbmb/MiniCPM5-2B
  openbmb｜1,552 赞｜357,166 下载
  面壁智能 MiniCPM 第五代 2B 模型，延续其小参数高性能的定位。

- **XHToken/Spark-X2.5-4B** — https://huggingface.co/XHToken/Spark-X2.5-4B
  XHToken｜1,270 赞｜29,684 下载
  新的 4B 级通用 LLM（spark2_5），属于新兴团队的小模型尝试。

- **TokenRhythm/NeoHorse-1-9B** — https://huggingface.co/TokenRhythm/NeoHorse-1-9B
  TokenRhythm｜884 赞｜10,746 下载
  NeoHorse-1 的 9B 版本，同一 agentic 系列的中等规模选项。

- **Edge0/Edge0-35B-A3B-preview** — https://huggingface.co/Edge0/Edge0-35B-A3B-preview
  Edge0｜3,362 赞｜52,519 下载
  面向边缘推理的 MoE 模型（35B 总参数、3B 激活），MLX 格式，主打端侧高效部署。

- **XingChen-AGI/Xing4.0-29B-A4B** — https://huggingface.co/XingChen-AGI/Xing4.0-29B-A4B
  XingChen-AGI｜402 赞｜3,073 下载
  29B 总参数、4B 激活的 MoE 对话模型，稀疏架构继续向中小规模渗透。

- **harshatheg/Qwen-2.5-1B-RLCD** — https://huggingface.co/harshatheg/Qwen-2.5-1B-RLCD
  harshatheg｜336 赞｜0 下载
  研究型 MLX 模型，聚焦结构化生成、并行解码与受限解码，下载数为 0 说明仍处实验阶段。

- **Agnes-AI/Agnes-3.0-Flash** — https://huggingface.co/Agnes-AI/Agnes-3.0-Flash
  Agnes-AI｜220 赞｜1,357 下载
  新团队发布的 Flash 级多模态对话模型，体量较小、尚在早期。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **MiniMaxAI/MiniMax-H3** — https://huggingface.co/MiniMaxAI/MiniMax-H3
  MiniMaxAI｜5,438 赞｜4,449,605 下载
  MiniMax 第三代视频生成模型，支持文生/图生视频，diffusers 生态，下载量突破 444 万。

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Lightricks｜4,272 赞｜1,590,087 下载
  LTX 视频生成系列 2.5 版，覆盖图生视频、文生视频与视频到视频。

- **deepseek-ai/DeepSeek-V4.1-Flash** — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
  deepseek-ai｜3,094 赞｜429,865 下载
  DeepSeek 新一代 Flash 多模态模型（image-text-to-text），发布即带动社区衍生创作。

- **zai-org/GLM-5.3-Flash** — https://huggingface.co/zai-org/GLM-5.3-Flash
  zai-org｜2,440 赞｜2,669,173 下载
  智谱 GLM-5.3 Flash 多模态模型（glm5_next），下载量超 266 万。

- **m-a-p/YuE2-3B** — https://huggingface.co/m-a-p/YuE2-3B
  m-a-p｜763 赞｜13,668 下载
  3B 音乐生成模型，采用符号规划与智能体式编辑，是音频生成方向的新面孔。

- **tencent/AuK** — https://huggingface.co/tencent/AuK
  tencent｜295 赞｜3,184 下载
  腾讯零样本 TTS 与声音克隆模型，拓展语音生成的开源选项。

- **WarmBloodAban/Minimax-h3_Singularity** — https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity
  WarmBloodAban｜486 赞｜217,900 下载
  基于 MiniMax-H3 的社区视频生成变体，支持多种视频到视频任务。

- **TaichuAI/ZDTaichu5.0-9B** — https://huggingface.co/TaichuAI/ZDTaichu5.0-9B
  TaichuAI｜178 赞｜1,802 下载
  9B 视觉语言模型，强调多模态与空间推理能力。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **sentence-transformers/all-MiniLM-L6-v2** — https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
  sentence-transformers｜6,055 赞｜255,050,544 下载
  经典句子嵌入模型，累计下载超 2.55 亿，仍是检索与嵌入场景的事实标准。

- **internlm/Atria-Dawn-Preview** — https://huggingface.co/internlm/Atria-Dawn-Preview
  internlm｜154 赞｜711 下载
  上海 AI 实验室的预览模型（glm_moe_dsa 架构，附 arXiv 标签），中英双语，属早期研究发布。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
  unsloth｜4,297 赞｜7,628,907 下载
  unsloth 出品的 Qwen3.8-27B 官方 GGUF 量化，下载量高达 762 万，是本周期量化分发的核心入口。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
  ISTA-DASLab｜1,285 赞｜1,078,301 下载
  学术团队提出的 GSQ/RCO 混合精度量化方案 GGUF 版，下载量破百万，代表研究级量化方法的落地。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU｜870 赞｜1,197,378 下载
  高度堆叠的社区无审查微调 + GGUF 量化，下载量超百万，反映社区定制与解除对齐方向的旺盛需求。

- **prism-ml/Ternary-Bonsai-2-27B-gguf** — https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf
  prism-ml｜600 赞｜405,609 下载
  三值（ternary / 2-bit）极端量化模型，llama.cpp 生态，探索极低比特压缩的可行边界。

- **ukisai/Swift-Qwen3.8-27b** — https://huggingface.co/ukisai/Swift-Qwen3.8-27b
  ukisai｜418 赞｜6,293 下载
  针对 Qwen3.8-27B 的效率优化微调版本（Swift 系列）。

- **ukisai/Swift-Qwen3.8-27B-GGUF** — https://huggingface.co/ukisai/Swift-Qwen3.8-27B-GGUF
  ukisai｜259 赞｜100,177 下载
  上述 Swift 版的 GGUF 量化，主打高效思考（efficient-thinking）。

- **dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8** — https://huggingface.co/dealignai/DeepSeek-V4.1-Flash-UNCENSORED-FP8
  dealignai｜276 赞｜33,065 下载
  DeepSeek-V4.1-Flash 的无审查 FP8 版本，典型的“大厂发布—社区改写”链条产物。

- **Comfy-Org/YuE2** — https://huggingface.co/Comfy-Org/YuE2
  Comfy-Org｜176 赞｜102,247 下载
  将音频模型 YuE2 打包为 ComfyUI 单文件扩散格式，属于工具链适配而非新模型。

## 生态信号

Qwen3.8 系列是本周绝对中心：基座 Qwen3.8-27B 领跑热度，其 GGUF 量化（unsloth 762 万下载）、学术量化（ISTA-DASLab GSQ-RCO）与社区微调（ukisai Swift、DavidAU 无审查版）形成完整下游链条，Qwen 家族还通过 NeoHorse 等衍生模型向外扩散。DeepSeek 与 MiniMax、Lightricks 分别代表多模态理解与视频生成的强势阵营。开源权重持续占据榜单主流，但社区围绕其做的“解除对齐 + 量化”二次分发同样规模庞大——DavidAU、dealignai 等百万级下载说明此类需求已成生态常态。量化方向上，GGUF 仍是分发主力，三值/2-bit 等极端低比特方案开始进入公众视野，边缘侧 MoE（Edge0、Xing4.0）与 MLX 格式也在扩张。

## 值得探索

1. **unsloth/Qwen3.8-27B-GGUF** — https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
   762 万下载的量化入口，是本地部署 Qwen3.8-27B 的最实用起点，也便于横向对比不同量化策略的质量-体积权衡。

2. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
   学术界的 GSQ/RCO 混合精度方法，与常规 GGUF 量化形成对照，适合研究量化精度与压缩率的前沿取舍。

3. **m-a-p/YuE2-3B** — https://huggingface.co/m-a-p/YuE2-3B
   3B 规模音乐生成、结合符号规划与智能体式编辑，是音频生成中较少见的思路，值得关注其可编辑性与工作流设计。

4. **Edge0/Edge0-35B-A3B-preview** — https://huggingface.co/Edge0/Edge0-35B-A3B-preview
   35B 总参 / 3B 激活的 MLX 端侧 MoE，代表边缘推理方向的稀疏架构实践，适合苹果芯片本地部署测试。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*