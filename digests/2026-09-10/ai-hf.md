# Hugging Face 热门模型日报 2026-09-10

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-10 10:02 UTC

---

# Hugging Face 热门模型日报（2026-09-10）


## 一、今日速览

今日榜单由 **Qwen3.8-27B** 家族主导：官方原版单周斩获 14,566 赞、732 万下载，其 GGUF 量化版（unsloth）更以 1,112 万下载成为全榜下载量最高的模型，社区微调与"去审查"衍生版也密集上榜。视频生成赛道热度不减，MiniMax-H3 与 Lightricks LTX-2.5 双双突破 3,300+ 赞，并已出现 Viggle-Animate、OpenVDN 等下游编辑与微调模型。厂商侧，DeepSeek 同时发布 V4.1-Flash 文本模型与 V4-Flash-Vision-Exp 视觉实验版，zai-org 的 GLM-5.3 系列（Flash 版 2,213 赞）延续 MoE 势头。整体看，多模态（image-text-to-text）已成为主流任务标签，量化与社区微调生态极为活跃。值得注意的是，多个高赞模型的下载数极低（如 DeepSeek-V4.1-Flash 仅 6 次、Nex-N2.5-Pro 仅 3 次），点赞与下载严重脱节，说明榜单存在明显的"发布即热"效应。


## 二、热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
  Qwen | 点赞 14,566 | 下载 7,322,476
  阿里 Qwen 新一代旗舰，虽标注 image-text-to-text 但为对话通用模型，以压倒性的点赞与下载量稳居本日热度第一。

- **openai-community/gpt2** — [链接](https://huggingface.co/openai-community/gpt2)
  openai-community | 点赞 3,869 | 下载 14,981,665
  经典基线模型，长期盘踞榜单，是下载量最高的语言模型之一，属历史存量热度。

- **Qwen/Qwen3.8-Flash-Next** — [链接](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  Qwen | 点赞 5,056 | 下载 564,079
  Qwen 的 Flash 系列实验版本（qwen4_exp 标签），主打高效多模态对话，代表下一代架构预告。

- **zai-org/GLM-5.3-Flash** — [链接](https://huggingface.co/zai-org/GLM-5.3-Flash)
  zai-org | 点赞 2,213 | 下载 1,023,103
  智谱 GLM-5.3 的高速版，基于 glm5_next 架构，支持多模态对话。

- **zai-org/GLM-5.3** — [链接](https://huggingface.co/zai-org/GLM-5.3)
  zai-org | 点赞 1,795 | 下载 552,019
  GLM-5.3 标准版，glm_moe_dsa 架构的对话模型，与 Flash 版形成完整产品线。

- **XHToken/Spark-X2.5-4B** — [链接](https://huggingface.co/XHToken/Spark-X2.5-4B)
  XHToken | 点赞 1,029 | 下载 15,930
  4B 参数轻量 LLM，以高点赞/低下载的比例显示社区关注度集中在发布初期。

- **openbmb/MiniCPM5-2B** — [链接](https://huggingface.co/openbmb/MiniCPM5-2B)
  openbmb | 点赞 1,014 | 下载 42,289
  面壁 MiniCPM 第五代 2B 小模型，延续端侧友好路线，是轻量 LLM 的代表。

- **deepseek-ai/DeepSeek-V4.1-Flash** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  deepseek-ai | 点赞 682 | 下载 6
  DeepSeek V4.1 高速版，标注为 image-text-to-text，发布首日下载量极低，热度集中于口碑传播。

- **nex-agi/Nex-N2.5-mini** — [链接](https://huggingface.co/nex-agi/Nex-N2.5-mini)
  nex-agi | 点赞 619 | 下载 2,444
  基于 qwen3_5_moe 的 mini 版模型，走轻量 MoE 路线。

- **nex-agi/Nex-N2.5-Pro** — [链接](https://huggingface.co/nex-agi/Nex-N2.5-Pro)
  nex-agi | 点赞 573 | 下载 3
  Nex 系列 Pro 版，Apache-2.0 许可、支持 endpoints，发布即上榜但尚未产生下载。

- **IFM/K2-Horizon-MoVA-36B-A4B** — [链接](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)
  IFM | 点赞 266 | 下载 4,488
  36B 总参数、A4B 激活的 MoE 架构模型，稀疏激活是当前效率主流方案。

- **BreezeBlue/Breeze-TTS-2** — [链接](https://huggingface.co/BreezeBlue/Breeze-TTS-2)
  BreezeBlue | 点赞 522 | 下载 8,227
  文本转语音模型，多模态语音方向的代表之一。


### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **MiniMaxAI/MiniMax-H3** — [链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)
  MiniMaxAI | 点赞 5,101 | 下载 5,080,204
  视频生成基础模型，支持文生/图生视频，是本日视频赛道热度与下载双料冠军。

- **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
  Lightricks | 点赞 3,302 | 下载 1,740,572
  单文件 diffusion 视频模型，覆盖图生视频、文生视频、视频转视频，商用视频生成的重要选项。

- **OpenVDN/vdn-minimax-h3** — [链接](https://huggingface.co/OpenVDN/vdn-minimax-h3)
  OpenVDN | 点赞 279 | 下载 39
  基于 MiniMax-H3 的微调文生视频模型，体现头部视频模型的生态外溢。

- **WarmBloodAban/Minimax-h3_Singularity** — [链接](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)
  WarmBloodAban | 点赞 250 | 下载 96,682
  MiniMax-H3 的社区衍生视频生成模型，覆盖文/图/视频转视频。

- **Viggle/Viggle-Animate** — [链接](https://huggingface.co/Viggle/Viggle-Animate)
  Viggle | 点赞 138 | 下载 0
  视频编辑模型，主打角色替换与视频转视频，属应用层创新。

- **microsoft/VibeVoice-ASR-Streaming-7B** — [链接](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)
  microsoft | 点赞 182 | 下载 2,065
  微软流式语音识别模型，7B 规模，专注实时转写场景。

- **Qwen/Qwen-Drive-1.0-4B** — [链接](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B)
  Qwen | 点赞 140 | 下载 2,759
  Qwen 面向自动驾驶的 4B 模型，涉及运动规划，属垂直多模态应用。


### 🔧 专用模型（代码、数学、医疗、嵌入）

- **google/timesfm-3.0-pytorch** — [链接](https://huggingface.co/google/timesfm-3.0-pytorch)
  google | 点赞 701 | 下载 483,787
  Google 时间序列预测模型第三代，是榜单中少数非语言/非生成的专用基础模型，下载量可观。

- **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
  deepseek-ai | 点赞 850 | 下载 400,892
  DeepSeek 视觉实验版，deepseek_v4 架构，探索多模态扩展。

- **dealignai/GLM-5.3-CYBERSECURITY-FP8** — [链接](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)
  dealignai | 点赞 362 | 下载 24,303
  基于 GLM-5.3 的网络安全垂直模型，FP8 量化，且已移除拒答对齐（abliterated），属高风险垂直定制。

- **nvidia/Qwen3.8-Flash-Next-NVFP4** — [链接](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)
  nvidia | 点赞 185 | 下载 62,813
  NVIDIA 基于 Model Optimizer 对 Qwen3.8-Flash-Next 做的 NVFP4 低精度优化版本，属硬件厂商侧部署优化。


### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
  unsloth | 点赞 3,803 | 下载 11,127,203
  Qwen3.8-27B 的 GGUF 量化版，全榜下载量第一，是本地部署 Qwen 新旗舰的首选。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
  ISTA-DASLab | 点赞 754 | 下载 614,850
  采用 GSQ+RCO 混合精度量化的 GGUF 版本，代表量化方法学的学术侧探索。

- **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** — [链接](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)
  HauhauCS | 点赞 1,067 | 下载 1,908,917
  去审查（uncensored）微调 + GGUF 量化版，下载量近 191 万，社区定制需求强劲。

- **orcarouter/Qwen3.8-27B-Uncensored-GGUF** — [链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)
  orcarouter | 点赞 851 | 下载 314,894
  另一款去审查 GGUF 版本，采用 abliterated 技术移除拒答行为。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — [链接](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
  DavidAU | 点赞 423 | 下载 517,644
  名字极长的社区微调合并模型，融合编码、去审查等多重调优，是典型"全家桶式"GGUF 定制。

- **Jackrong/Qwopus3.8-27B-Flash-GGUF** — [链接](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)
  Jackrong | 点赞 176 | 下载 192,107
  基于 Qwen3.8-27B 的社区 GGUF 量化版，面向 llama.cpp 本地推理。

- **openbmb/MiniCPM5-2B-GGUF** — [链接](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF)
  openbmb | 点赞 141 | 下载 51,179
  MiniCPM5-2B 的官方 GGUF 量化版，适配端侧与本地部署。


## 三、生态信号

**模型家族方面**，Qwen3.8-27B 是今日绝对中心——官方原版高居榜首，其量化、微调、"去审查"衍生版本占据了量化类目的半壁江山，形成"一模型多衍生"的密集生态；GLM-5.3、MiniMax-H3、DeepSeek-V4 系列同样呈现官方+衍生并行的格局。**开源权重趋势**上，榜单几乎全部为开放权重模型，闭源迹象仅体现在"下载量为个位数但点赞数百"的发布预热型模型（如 Nex-N2.5-Pro、DeepSeek-V4.1-Flash），说明厂商仍倾向以 HF 作为权重首发渠道换取社区声量。**量化与微调活动**极为活跃：GGUF 是绝对主力格式，混合精度（GSQ-RCO）、NVFP4、FP8 等新量化方案并存，而"abliterated / uncensored / refusal-removed"标签频繁出现，显示社区对去对齐模型的稳定需求。


## 四、值得探索

1. **Qwen/Qwen3.8-27B**（[链接](https://huggingface.co/Qwen/Qwen3.8-27B)）— 本日热度与规模双冠王，27B 规模兼顾能力与部署可行性，配合 unsloth 的 GGUF 版（[链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)，下载 1,112 万）可快速本地验证，是判断下一代开源模型能力水位的最佳样本。

2. **Lightricks/LTX-2.5**（[链接](https://huggingface.co/Lightricks/LTX-2.5)）— 单文件 diffusion 视频模型，同时支持图生视频与视频转视频，相比体量更大的 MiniMax-H3 更易上手，适合研究者对比视频生成方案。

3. **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**（[链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)）— 采用 GSQ+RCO 混合精度量化，在 61 万下载量下验证了效果与压缩率的平衡，是研究量化方法对多模态大模型损失影响的实用对照。

---

*数据来源：Hugging Face Hub 热门模型榜（2026-09-10，按周点赞数排序）。*

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*