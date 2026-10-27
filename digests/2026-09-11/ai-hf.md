# Hugging Face 热门模型日报 2026-09-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-11 11:49 UTC

---

# Hugging Face 热门模型日报（2026-09-11）

## 今日速览

今日榜单由 Qwen 家族主导：`Qwen/Qwen3.8-27B` 以 14,696 点赞、7,563,763 下载稳居人气榜首，并衍生出 unsloth 的 GGUF 量化版本（11,339,637 下载）与大量社区微调。视频生成赛道热度不减，`MiniMaxAI/MiniMax-H3`（5,140 点赞）与 `Lightricks/LTX-2.5`（3,429 点赞）领跑，并已出现第三方衍生模型。DeepSeek 与智谱 GLM 同日均有多款 Flash 系列发布，形成"多模态 + 高效推理"的密集上新。同时，27B 级模型的"去审查/量化"社区变体（GGUF、abliterated）集中上榜，显示开放权重生态的二次加工极为活跃。

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

- **Qwen/Qwen3.8-27B** — [链接](https://huggingface.co/Qwen/Qwen3.8-27B)
  Qwen | 14,696 赞 | 7,563,763 下载
  Qwen 3.8 系列旗舰，标注为 image-text-to-text 但核心为对话模型，以绝对人气和下载量领跑全榜。

- **Qwen/Qwen3.8-Flash-Next** — [链接](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  Qwen | 5,088 赞 | 586,040 下载
  采用 qwen4_exp 架构标签的 Flash 迭代版，主打高效多模态推理，是 Qwen 最新试验线。

- **zai-org/GLM-5.3-Flash** — [链接](https://huggingface.co/zai-org/GLM-5.3-Flash)
  zai-org | 2,236 赞 | 1,173,520 下载
  智谱 GLM-5.3 的高效版本（glm5_next），多模态对话定位，下载量已破百万。

- **zai-org/GLM-5.3** — [链接](https://huggingface.co/zai-org/GLM-5.3)
  zai-org | 1,804 赞 | 597,626 下载
  GLM-5.3 全量版，基于 glm_moe_dsa 架构，与 Flash 版同日上榜。

- **deepseek-ai/DeepSeek-V4.1-Flash** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  deepseek-ai | 1,636 赞 | 75,774 下载
  DeepSeek V4.1 高效版，支持图文输入，下载量尚低但点赞增速居前。

- **openbmb/MiniCPM5-2B** — [链接](https://huggingface.co/openbmb/MiniCPM5-2B)
  openbmb | 1,154 赞 | 67,550 下载
  面壁 MiniCPM5 的 2B 小模型，轻量文本生成，小尺寸高人气代表。

- **XHToken/Spark-X2.5-4B** — [链接](https://huggingface.co/XHToken/Spark-X2.5-4B)
  XHToken | 1,081 赞 | 17,712 下载
  4B 级自研架构（spark2_5）文本生成模型，点赞高而下载相对有限。

- **nex-agi/Nex-N2.5-mini** — [链接](https://huggingface.co/nex-agi/Nex-N2.5-mini)
  nex-agi | 673 赞 | 3,121 下载
  基于 qwen3_5_moe 的 MoE 小模型，支持多模态文本生成。

- **nex-agi/Nex-N2.5-Pro** — [链接](https://huggingface.co/nex-agi/Nex-N2.5-Pro)
  nex-agi | 591 赞 | 12,260 下载
  Nex N2.5 的 Pro 版本，同为 qwen3_5_moe 架构，与 mini 版同期发布。

- **IFM/K2-Horizon-MoVA-36B-A4B** — [链接](https://huggingface.co/IFM/K2-Horizon-MoVA-36B-A4B)
  IFM | 275 赞 | 5,192 下载
  36B 总参、A4B 激活的 MoE 模型（k2_horizon），走稀疏激活路线。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **MiniMaxAI/MiniMax-H3** — [链接](https://huggingface.co/MiniMaxAI/MiniMax-H3)
  MiniMaxAI | 5,140 赞 | 4,970,363 下载
  MiniMax 第三代视频生成模型，支持文/图生视频，是视频赛道的人气与下载双冠。

- **Lightricks/LTX-2.5** — [链接](https://huggingface.co/Lightricks/LTX-2.5)
  Lightricks | 3,429 赞 | 1,669,564 下载
  LTX 2.5 视频模型，覆盖图/文/视频到视频，单文件 diffusion 格式便于部署。

- **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp** — [链接](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
  deepseek-ai | 863 赞 | 443,954 下载
  DeepSeek V4 的视觉实验版，多模态能力探索型号。

- **google/timesfm-3.0-pytorch** — [链接](https://huggingface.co/google/timesfm-3.0-pytorch)
  google | 720 赞 | 633,239 下载
  Google 时间序列预测基础模型第三代，是榜单中少见的非生成式专用模型。

- **BreezeBlue/Breeze-TTS-2** — [链接](https://huggingface.co/BreezeBlue/Breeze-TTS-2)
  BreezeBlue | 530 赞 | 8,645 下载
  文本转语音模型第二代，榜单中少数语音合成代表。

- **OpenVDN/vdn-minimax-h3** — [链接](https://huggingface.co/OpenVDN/vdn-minimax-h3)
  OpenVDN | 288 赞 | 153 下载
  基于 MiniMax-H3 的社区微调文生视频模型，下载极少属早期发布。

- **WarmBloodAban/Minimax-h3_Singularity** — [链接](https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity)
  WarmBloodAban | 273 赞 | 103,178 下载
  MiniMax-H3 衍生视频模型，覆盖文/图/视频到视频。

- **Viggle/Viggle-Animate** — [链接](https://huggingface.co/Viggle/Viggle-Animate)
  Viggle | 168 赞 | 0 下载
  面向角色替换与视频编辑的 video-to-video 模型，刚发布尚无下载。

- **m-a-p/YuE2-3B** — [链接](https://huggingface.co/m-a-p/YuE2-3B)
  m-a-p | 166 赞 | 971 下载
  3B 音乐生成模型，带符号规划与智能体编辑能力。

### 🔧 专用模型（代码、数学、医疗、嵌入）

- **Qwen/Qwen-Drive-1.0-4B** — [链接](https://huggingface.co/Qwen/Qwen-Drive-1.0-4B)
  Qwen | 161 赞 | 3,271 下载
  面向自动驾驶与运动规划的专用 4B 模型，垂直领域新方向。

- **microsoft/VibeVoice-ASR-Streaming-7B** — [链接](https://huggingface.co/microsoft/VibeVoice-ASR-Streaming-7B)
  microsoft | 194 赞 | 2,279 下载
  微软流式语音识别模型，主打实时转写。

- **dealignai/GLM-5.3-CYBERSECURITY-FP8** — [链接](https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8)
  dealignai | 376 赞 | 28,328 下载
  基于 GLM-5.3 的安全/网络领域变体，FP8 精度并移除拒答。

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **unsloth/Qwen3.8-27B-GGUF** — [链接](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
  unsloth | 3,870 赞 | 11,339,637 下载
  Qwen3.8-27B 的 unsloth GGUF 量化版，下载量为全榜最高，是本地部署主力。

- **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF** — [链接](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)
  HauhauCS | 1,089 赞 | 1,999,181 下载
  Qwen3.8-27B 的去审查 GGUF 微调版，约 200 万下载显示强需求。

- **orcarouter/Qwen3.8-27B-Uncensored-GGUF** — [链接](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)
  orcarouter | 881 赞 | 320,537 下载
  同为 Qwen3.8-27B 的 abliterated GGUF 版本。

- **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF** — [链接](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
  ISTA-DASLab | 814 赞 | 682,187 下载
  带 GSQ/RCO 混合精度量化技术的 GGUF 版本，学术机构出品。

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — [链接](https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF)
  DavidAU | 463 赞 | 606,200 下载
  DavidAU 出品的多重微调去审查 GGUF，以超长模型名著称。

- **Jackrong/Qwopus3.8-27B-Flash-GGUF** — [链接](https://huggingface.co/Jackrong/Qwopus3.8-27B-Flash-GGUF)
  Jackrong | 194 赞 | 231,831 下载
  Qwen 与 Open 系融合向的 GGUF 量化版本，支持视觉。

- **openbmb/MiniCPM5-2B-GGUF** — [链接](https://huggingface.co/openbmb/MiniCPM5-2B-GGUF)
  openbmb | 165 赞 | 70,755 下载
  MiniCPM5-2B 官方 GGUF 量化版，便于端侧部署。

- **nvidia/Qwen3.8-Flash-Next-NVFP4** — [链接](https://huggingface.co/nvidia/Qwen3.8-Flash-Next-NVFP4)
  nvidia | 198 赞 | 78,737 下载
  英伟达用 ModelOpt 对 Qwen3.8-Flash-Next 做的 NVFP4 量化。

## 生态信号

Qwen 家族是今日绝对主线：旗舰 27B 一款模型就裂变出 unsloth、ISTA-DASLab、DavidAU、HauhauCS、orcarouter、Jackrong 等多个量化与微调版本，几乎占据"量化"分类全部席位，且 unsloth GGUF 下载破 1100 万，说明社区对 27B 级开放权重的本地化需求极强。DeepSeek、智谱 GLM 同日推出"Flash"高效版并直接落地多模态，头部厂商的开放权重竞争已延展到"高效推理 + 视觉"组合。视频生成由 MiniMax-H3 与 LTX-2.5 双雄带动，并迅速出现社区衍生品。值得警惕的是，"uncensored/abliterated"去审查变体在榜单高频出现，反映二次加工生态活跃但治理压力上升。

## 值得探索

1. **Qwen/Qwen3.8-27B** — 全榜人气与下载双冠，生态衍生最丰富，无论做基座评估还是本地部署，都是当前最值得先跑通的模型。
2. **unsloth/Qwen3.8-27B-GGUF** — 下载量全榜第一（超 1100 万），是把 27B 模型带入消费级硬件的实际首选量化版。
3. **MiniMaxAI/MiniMax-H3** — 视频生成赛道人气标杆，支持文/图生视频，并已形成第三方微调生态，适合研究多模态视频生成现状。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*