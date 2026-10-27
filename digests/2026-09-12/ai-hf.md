# Hugging Face 热门模型日报 2026-09-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-12 13:09 UTC

---

# Hugging Face 热门模型日报（2026-09-12）

## 今日速览

Qwen3.8-27B 是今日绝对的生态中心：其官方权重以 14,808 点赞、772 万下载高居榜首，同时衍生出 GGUF、量化、社区微调等大量下游版本，形成完整生态链。视频生成赛道热度持续，MiniMax-H3 与 Lightricks LTX-2.5 双双进入头部。DeepSeek V4 系列以 Flash 与 Vision-Exp 双线布局，主打高效多模态。量化与"去审查"（uncensored/abliterated）微调活动异常活跃，GGUF 格式占据下载量前列。经典模型 all-MiniLM-L6-v2 与 gpt2 凭借长期积累仍在榜单中维持巨量下载。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

**Qwen/Qwen3.8-27B**
[https://huggingface.co/Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B)
作者: Qwen | 点赞: 14,808 | 下载: 7,726,687
今日榜首，Qwen3.8 系列旗舰多模态对话模型，凭借庞大下载与点赞量成为整个榜单的生态核心。

**XHToken/Spark-X2.5-4B**
[https://huggingface.co/XHToken/Spark-X2.5-4B](https://huggingface.co/XHToken/Spark-X2.5-4B)
作者: XHToken | 点赞: 1,128 | 下载: 19,733
轻量级 4B 文本生成模型，以较小体量获得高关注，适合端侧与低成本部署探索。

**openbmb/MiniCPM5-2B**
[https://huggingface.co/openbmb/MiniCPM5-2B](https://huggingface.co/openbmb/MiniCPM5-2B)
作者: openbmb | 点赞: 1,225 | 下载: 102,334
MiniCPM5 系列 2B 小模型，主打高性价比文本生成，是榜单中少见的超小参数高热度模型。

**nex-agi/Nex-N2.5-mini**
[https://huggingface.co/nex-agi/Nex-N2.5-mini](https://huggingface.co/nex-agi/Nex-N2.5-mini)
作者: nex-agi | 点赞: 706 | 下载: 3,581
基于 qwen3_5_moe 的混合专家小模型，支持图文输入，下载量低但点赞高，属早期关注型新品。

**nex-agi/Nex-N2.5-Pro**
[https://huggingface.co/nex-agi/Nex-N2.5-Pro](https://huggingface.co/nex-agi/Nex-N2.5-Pro)
作者: nex-agi | 点赞: 607 | 下载: 30,081
Nex-N2.5 系列专业版，同属 MoE 架构并支持多模态，与 mini 版构成完整产品线。

**Edge0/Edge0-35B-A3B-preview**
[https://huggingface.co/Edge0/Edge0-35B-A3B-preview](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)
作者: Edge0 | 点赞: 322 | 下载: 1,596
面向边缘推理的 MoE 模型（35B 总参 / 3B 激活），MLX 格式，主打端侧高效部署。

**IFM/K2-Horizon-MoVA-36B-A4B**
[https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)
作者: IFM | 点赞: 295 | 下载: 5,616
K2-Horizon 系列 MoE 文本生成模型，36B 总参 / 4B 激活，属新晋高效架构尝试。

**openai-community/gpt2**
[https://huggingface.co/openai-community/gpt2](https://huggingface.co/openai-community/gpt2)
作者: openai-community | 点赞: 3,962 | 下载: 15,150,566
经典基准模型，长期霸榜，下载量反映其作为教学与实验基线的持久地位。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**deepseek-ai/DeepSeek-V4.1-Flash**
[https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
作者: deepseek-ai | 点赞: 1,910 | 下载: 140,636
DeepSeek V4.1 高效多模态版本，支持图文输入，是 DeepSeek 系列今日热度最高者。

**deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**
[https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
作者: deepseek-ai | 点赞: 876 | 下载: 484,422
V4 系列实验性视觉版本，与 V4.1-Flash 形成并行探索，下载量可观。

**Qwen/Qwen3.8-Flash-Next**
[https://huggingface.co/Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
作者: Qwen | 点赞: 5,129 | 下载: 604,992
Qwen 新一代 Flash 多模态模型，标签显示 qwen4_exp，预示下一代架构的早期信号。

**zai-org/GLM-5.3-Flash**
[https://huggingface.co/zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash)
作者: zai-org | 点赞: 2,264 | 下载: 1,333,574
GLM-5.3 高效多模态版本，支持图文对话，下载与点赞双高，是国产多模态主力之一。

**MiniMaxAI/MiniMax-H3**
[https://huggingface.co/MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)
作者: MiniMaxAI | 点赞: 5,176 | 下载: 4,860,709
MiniMax 官方视频生成模型，支持文生/图生视频，是视频赛道热度与体量最大的发布。

**Lightricks/LTX-2.5**
[https://huggingface.co/Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5)
作者: Lightricks | 点赞: 3,557 | 下载: 1,601,007
LTX 系列视频生成模型，支持图生视频等多种任务，是视频生成领域另一头部玩家。

**WarmBloodAban/Minimax-h3_Singularity**
[https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)
作者: WarmBloodAban | 点赞: 330 | 下载: 114,141
基于 MiniMax-H3 的社区视频生成衍生版本，反映头部视频模型的社区二次开发热度。

**m-a-p/YuE2-3B**
[https://huggingface.co/m-a-p/YuE2-3B](https://huggingface.co/m-a-p/YuE2-3B)
作者: m-a-p | 点赞: 285 | 下载: 2,304
音乐生成模型，支持符号规划与 agentic 编辑，是音频生成领域的小众亮点。

**microsoft/VibeVoice-ASR-Streaming-7B**
[https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)
作者: microsoft | 点赞: 213 | 下载: 2,494
微软流式语音识别模型，主打实时转写，代表语音处理方向的头部厂商投入。

**Viggle/Viggle-Animate**
[https://huggingface.co/Viggle/Viggle-Animate](https://huggingface.co/Viggle/Viggle-Animate)
作者: Viggle | 点赞: 195 | 下载: 0
视频编辑与角色替换模型，下载量为 0 但已上榜，属刚发布、备受期待的新品。

**Qwen/Qwen-Drive-1.0-4B**
[https://huggingface.co/Qwen/Qwen-Drive-1.0-4B](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B)
作者: Qwen | 点赞: 179 | 下载: 3,761
面向自动驾驶的多模态模型，涉及运动规划，是 Qwen 向垂直领域延伸的信号。

**facebook/mms-300m**
[https://huggingface.co/facebook/mms-300m](https://huggingface.co/facebook/mms-300m)
作者: facebook | 点赞: 465 | 下载: 12,122
Meta 多语言语音预训练模型，基于 wav2vec2，长期作为多语种语音任务基线。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

**sentence-transformers/all-MiniLM-L6-v2**
[https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2)
作者: sentence-transformers | 点赞: 5,842 | 下载: 253,739,900
句子相似度嵌入模型，以 2.5 亿量级下载遥遥领先，是检索与嵌入领域的标准组件。

**google/timesfm-3.0-pytorch**
[https://huggingface.co/google/timesfm-3.0-pytorch](https://huggingface.co/google/timesfm-3.0-pytorch)
作者: google | 点赞: 749 | 下载: 784,262
Google 时序预测基础模型，面向时间序列 forecasting，属非文本模态的专业工具模型。

**nvidia/Qwen3.8-Flash-Next-NVFP4**
[https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)
作者: nvidia | 点赞: 214 | 下载: 89,924
英伟达基于 ModelOpt 对 Qwen3.8-Flash-Next 的 NVFP4 优化版本，属硬件厂商针对性部署优化。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**unsloth/Qwen3.8-27B-GGUF**
[https://huggingface.co/unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
作者: unsloth | 点赞: 3,923 | 下载: 11,529,203
Qwen3.8-27B 的 GGUF 量化版本，下载量突破 1,150 万，是量化生态中最具统治力的版本。

**ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**
[https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
作者: ISTA-DASLab | 点赞: 857 | 下载: 729,683
采用 GSQ/RCO 混合精度量化方案，代表学术界对 Qwen3.8 的量化方法研究。

**DavidAU/Qwen3.8-27B-TURBO-...-GGUF**
[https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
作者: DavidAU | 点赞: 501 | 下载: 665,911
典型社区"融合 + 去审查 + 编程强化"微调 GGUF，命名堆叠反映社区微调的极端定制化倾向。

**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**
[https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)
作者: HauhauCS | 点赞: 1,115 | 下载: 2,078,044
去审查多模态 GGUF 版本，下载量超 200 万，显示该类需求拥有庞大用户基础。

**orcarouter/Qwen3.8-27B-Uncensored-GGUF**
[https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)
作者: orcarouter | 点赞: 905 | 下载: 330,078
abliterated 去审查 GGUF 量化版本，是同一基础模型去审查生态中的又一热门选择。

**openbmb/MiniCPM5-2B-GGUF**
[https://huggingface.co/openbmb/MiniCPM5-2B-GGUF](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF)
作者: openbmb | 点赞: 186 | 下载: 87,316
MiniCPM5-2B 官方 GGUF 量化版，将小模型推向本地部署场景。

**dealignai/GLM-5.3-CYBERSECURITY-FP8**
[https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)
作者: dealignai | 点赞: 400 | 下载: 30,068
基于 GLM-5.3 的网络安全领域 FP8 量化微调版，标签显示已移除拒答机制。

*注：openbmb/MiniCPM5-2B 同属语言模型与 GGUF 量化两个维度，因原始数据仅列一次，此处按其原始条目归入。*

---

## 生态信号

今日榜单最鲜明的信号是 **Qwen3.8-27B 一超多强**：官方权重登顶，unsloth 的 GGUF 版下载破千万，ISTA、DavidAU、HauhauCS、orcarouter 等围绕其展开量化与微调，形成从官方到社区、从全精度到多方案量化的完整链条。其次，**视频生成（MiniMax-H3、LTX-2.5）与高效多模态（DeepSeek V4、GLM-5.3、Qwen-Flash-Next）并行升温**，反映出开源权重在多模态主赛道的持续攻势。MoE 与小参数高效模型（Nex-N2.5、Edge0、K2-Horizon）密集出现，指向端侧与低成本推理的明确需求。值得特别注意的是，**"去审查/abliterated"微调占据多席且下载量巨大**，说明社区对可自由定制权重的需求强烈。相比之下，闭源未在此榜单体现，榜单完全由开源权重主导。

---

## 值得探索

1. **Qwen/Qwen3.8-27B**（[链接](https://huggingface.co/Qwen/Qwen3.8-27B)）
   今日绝对核心，既是能力最强的官方多模态权重，也是整个量化与微调生态的母体，研究其衍生版本可一次看清当前社区工作流。

2. **unsloth/Qwen3.8-27B-GGUF**（[链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)）
   下载量超 1,150 万，是本地部署 Qwen3.8 的事实标准路径，适合作为量化部署与效率研究的起点。

3. **MiniMaxAI/MiniMax-H3**（[链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)）
   视频生成赛道体量最大、点赞最高的官方模型，支持文生/图生视频，是观察开源视频生成能力上限的代表作。

*（备选：google/timesfm-3.0-pytorch 为榜单中罕见的时序专业基础模型，适合作为非文本模态研究的补充对象。）*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*