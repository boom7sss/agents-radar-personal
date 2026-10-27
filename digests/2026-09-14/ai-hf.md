# Hugging Face 热门模型日报 2026-09-14

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-14 14:24 UTC

---

# Hugging Face 热门模型日报（2026-09-14）

## 今日速览

今日榜单由 Qwen3.8 系列主导，Qwen/Qwen3.8-27B 以 15,089 点赞、770 万下载断层领跑，其 GGUF 量化版本（unsloth）下载量更突破千万。多模态与视频生成热度高涨，MiniMax-H3 与 Lightricks/LTX-2.5 均获得数千点赞与百万级下载。MoE 与边缘推理方向出现新面孔：Edge0-35B-A3B-preview 与 nex-agi 的 Nex-N2.5 系列。社区量化与微调活动密集，Qwen3.8-27B 衍生出大量 GGUF、混合精度与去审查（abliterated）变体。经典基准模型（gpt2、bert、all-MiniLM-L6-v2）凭借海量下载仍稳居榜内。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

**1. Qwen/Qwen3.8-27B**
- https://huggingface.co/Qwen/Qwen3.8-27B
- 作者：Qwen｜点赞 15,089｜下载 7,703,400
- Qwen3.8 系列主力旗舰，支持图文理解与对话，以最高点赞与下载量成为今日绝对焦点。

**2. meta-llama/Llama-3.1-8B-Instruct**
- https://huggingface.co/meta-llama/Llama-3.1-8B-Instruct
- 作者：meta-llama｜点赞 7,595｜下载 5,620,539
- Llama 3.1 指令微调版，长期稳居榜内的经典对话模型，下载量持续积累。

**3. openai-community/gpt2**
- https://huggingface.co/openai-community/gpt2
- 作者：openai-community｜点赞 4,072｜下载 15,182,177
- 元老级文本生成模型，凭借历史地位与极高复用率长期在榜。

**4. Qwen/Qwen3.8-Flash-Next**
- https://huggingface.co/Qwen/Qwen3.8-Flash-Next
- 作者：Qwen｜点赞 5,202｜下载 645,881
- Qwen 新一代 Flash 系列的实验性版本（tag 为 qwen4_exp），主打高效图文对话。

**5. zai-org/GLM-5.3-Flash**
- https://huggingface.co/zai-org/GLM-5.3-Flash
- 作者：zai-org｜点赞 2,321｜下载 1,770,038
- GLM-5.3 系列的轻量版本，面向图文对话，下载量已达百万级。

**6. Edge0/Edge0-35B-A3B-preview**
- https://huggingface.co/Edge0/Edge0-35B-A3B-preview
- 作者：Edge0｜点赞 1,589｜下载 8,109
- 基于 qwen3_5_moe 的 MoE 边缘推理预览模型，主打设备端部署，点赞高但下载尚少。

**7. TokenRhythm/NeoHorse-1-4B**
- https://huggingface.co/TokenRhythm/NeoHorse-1-4B
- 作者：TokenRhythm｜点赞 1,777｜下载 9,520
- 面向 agentic 场景的 4B 小模型，基于 qwen3_5_text，属新晋受关注发布。

**8. openbmb/MiniCPM5-2B**
- https://huggingface.co/openbmb/MiniCPM5-2B
- 作者：openbmb｜点赞 1,372｜下载 206,774
- MiniCPM5 系列 2B 文本生成模型，轻量且下载稳定，端侧友好。

**9. XHToken/Spark-X2.5-4B**
- https://huggingface.co/XHToken/Spark-X2.5-4B
- 作者：XHToken｜点赞 1,166｜下载 24,084
- Spark2.5 系列 4B 通用 LLM，中等规模、下载增长中。

**10. nex-agi/Nex-N2.5-mini**
- https://huggingface.co/nex-agi/Nex-N2.5-mini
- 作者：nex-agi｜点赞 776｜下载 4,543
- 基于 qwen3_5_moe 的轻量 MoE 模型，同时支持图文与文本生成。

**11. nex-agi/Nex-N2.5-Pro**
- https://huggingface.co/nex-agi/Nex-N2.5-Pro
- 作者：nex-agi｜点赞 630｜下载 30,489
- Nex-N2.5 系列的 Pro 版本，同为 qwen3_5_moe 架构，面向更高性能需求。

**12. Agnes-AI/Agnes-3.0-Flash**
- https://huggingface.co/Agnes-AI/Agnes-3.0-Flash
- 作者：Agnes-AI｜点赞 152｜下载 736
- Agnes 系列新发布的轻量图文对话模型，处于早期关注阶段。

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

**1. MiniMaxAI/MiniMax-H3**
- https://huggingface.co/MiniMaxAI/MiniMax-H3
- 作者：MiniMaxAI｜点赞 5,271｜下载 4,827,156
- MiniMax-H3 视频生成基座（diffusers），支持文/图生视频，是今日视频生成热度核心。

**2. Lightricks/LTX-2.5**
- https://huggingface.co/Lightricks/LTX-2.5
- 作者：Lightricks｜点赞 3,823｜下载 1,559,653
- LTX 最新视频生成模型，覆盖图生视频、文生视频、视频到视频多种能力。

**3. deepseek-ai/DeepSeek-V4.1-Flash**
- https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash
- 作者：deepseek-ai｜点赞 2,366｜下载 288,414
- DeepSeek V4.1 的 Flash 版本，支持图文输入到文本生成，多模态大模型新作。

**4. WarmBloodAban/Minimax-h3_Singularity**
- https://huggingface.co/WarmBloodAban/Minimax-h3_Singularity
- 作者：WarmBloodAban｜点赞 388｜下载 141,057
- 基于 MiniMax-H3 的视频生成社区衍生版本，覆盖文生/图生/视频到视频。

**5. m-a-p/YuE2-3B**
- https://huggingface.co/m-a-p/YuE2-3B
- 作者：m-a-p｜点赞 444｜下载 5,186
- YuE2 音乐生成模型（3B），主打符号规划与 agentic 编辑，属音频生成方向。

**6. tencent/AuK**
- https://huggingface.co/tencent/AuK
- 作者：tencent｜点赞 212｜下载 1,928
- 腾讯发布的零样本 TTS 与声音克隆模型，音频语音方向新面孔。

---

### 🔧 专用模型（代码、数学、医疗、嵌入）

**1. sentence-transformers/all-MiniLM-L6-v2**
- https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2
- 作者：sentence-transformers｜点赞 5,959｜下载 252,806,720
- 最广泛使用的句子嵌入模型，以 2.5 亿下载量成为榜内复用之王。

**2. google/timesfm-3.0-pytorch**
- https://huggingface.co/google/timesfm-3.0-pytorch
- 作者：google｜点赞 788｜下载 826,017
- Google 时序预测基础模型 TimeSFM 3.0 的 PyTorch 版本，垂直领域代表。

**3. google-bert/bert-base-uncased**
- https://huggingface.co/google-bert/bert-base-uncased
- 作者：google-bert｜点赞 3,337｜下载 46,435,111
- 经典预训练语言模型，作为通用基座仍保持极高下载。

**4. openai/clip-vit-base-patch32**
- https://huggingface.co/openai/clip-vit-base-patch32
- 作者：openai｜点赞 1,528｜下载 21,349,787
- CLIP 图文对齐模型，零样本图像分类的长期标准选择。

**5. distilbert/distilbert-base-uncased**
- https://huggingface.co/distilbert/distilbert-base-uncased
- 作者：distilbert｜点赞 1,439｜下载 7,294,014
- BERT 蒸馏压缩版，轻量填充掩码模型，下载量持续稳定。

**6. facebook/mms-300m**
- https://huggingface.co/facebook/mms-300m
- 作者：facebook｜点赞 535｜下载 19,486
- 基于 wav2vec2 的多语言语音预训练模型（MMS），语音领域基础组件。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

**1. unsloth/Qwen3.8-27B-GGUF**
- https://huggingface.co/unsloth/Qwen3.8-27B-GGUF
- 作者：unsloth｜点赞 4,067｜下载 10,077,938
- Qwen3.8-27B 的官方 GGUF 量化版，下载量破千万，是本地部署最热选。

**2. ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**
- https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF
- 作者：ISTA-DASLab｜点赞 1,002｜下载 819,784
- 采用 GSQ/RCO 混合精度量化的 Qwen3.8-27B GGUF，属前沿量化研究产物。

**3. DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF**
- https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
- 作者：DavidAU｜点赞 663｜下载 875,703
- 基于 Qwen3.8-27B 的社区去审查微调 GGUF，主打编码与无限制输出。

**4. dealignai/GLM-5.3-CYBERSECURITY-FP8**
- https://huggingface.co/dealignai/GLM-5.3-CYBERSECURITY-FP8
- 作者：dealignai｜点赞 440｜下载 30,502
- 基于 GLM MoE 的安全领域去审查 FP8 量化模型，面向网络安全场景。

**5. openbmb/MiniCPM5-2B-GGUF**
- https://huggingface.co/openbmb/MiniCPM5-2B-GGUF
- 作者：openbmb｜点赞 223｜下载 108,471
- MiniCPM5-2B 的 GGUF 量化版，便于本地与端侧部署。

**6. Alissonerdx/Minimax-H3-ComfyUI**
- https://huggingface.co/Alissonerdx/Minimax-H3-ComfyUI
- 作者：Alissonerdx｜点赞 149｜下载 13,295
- MiniMax-H3 的 LoRA，适配 ComfyUI 视频工作流。

---

## 生态信号

Qwen3.8 家族是今日最强势头：旗舰 27B 与 Flash-Next 双双上榜，并衍生出 unsloth GGUF（千万级下载）、ISTA-DASLab 混合精度量化、DavidAU 去审查微调等多条支线，形成完整生态。开源权重仍是榜单主流，闭源替代品未见身影；MiniMax-H3 与 LTX-2.5 推动视频生成开源化。MoE 与边缘推理成新兴方向，Edge0 与 nex-agi 均基于 qwen3_5_moe 架构，主打设备端部署。量化与微调活动高度活跃，GGUF、FP8、混合精度（GSQ/RCO）以及 abliterated 去审查变体密集出现，显示社区对本地化与定制化的强烈需求。

---

## 值得探索

**1. Qwen/Qwen3.8-27B**（https://huggingface.co/Qwen/Qwen3.8-27B）
今日点赞与下载双料冠军，图文对话能力强，且有 unsloth GGUF 等成熟量化版本可直接本地部署，是性价比最高的起点。

**2. Edge0/Edge0-35B-A3B-preview**（https://huggingface.co/Edge0/Edge0-35B-A3B-preview）
MoE + 边缘推理的组合，下载量尚低但点赞高，代表端侧部署的新方向，适合关注稀疏架构与设备端优化的研究者。

**3. m-a-p/YuE2-3B**（https://huggingface.co/m-a-p/YuE2-3B）
少见的音乐生成模型，主打符号规划与 agentic 编辑，在视频与语言模型扎堆的榜单中提供了音频生成的新视角，值得音频方向探索。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*