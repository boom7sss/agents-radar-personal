# Hugging Face 热门模型日报 2026-09-02

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-09-02 11:43 UTC

---

# 🤖 Hugging Face 热门模型日报 — 2026-09-02

## 📌 今日速览

今日 Hugging Face 趋势榜由 **Qwen3.8 系列**全面领跑，其中 **Qwen/Qwen3.8-27B** 以 13,636 点赞、近 500 万下载量断层登顶，成为绝对焦点。**Kimi-K3**（11,137 赞）与 **MiniMax-H3**（4,782 赞）分别代表压缩模型和视频生成两个方向的强劲势头。值得关注的是，**GLM-5.3 系列**正式亮相并快速进入趋势榜前列，与 Qwen 形成双雄争霸格局。此外 **orcarouter/OBLITERATUS 等社区的"去审查"（Uncensored/Abliterated）微调**与 GGUF 量化生态异常活跃，占据了榜单近三分之一席位。视频生成赛道备受关注，用户对 **4 步推理蒸馏、高质量多模态视频模型**的需求明显上升。

---

## 🏆 热门模型

### 🧠 语言模型（LLM、对话、指令微调）

#### **zai-org/GLM-5.3**
- 作者: zai-org | 👍 1,486 | ⬇️ 94,403
- [查看模型](https://huggingface.co/zai-org/GLM-5.3)
- GLM 系列旗舰版，基于 MoE 架构（glm_moe_dsa），文本生成定位，代表智谱新一代大模型技术方向。

#### **tencent/Hy4-preview**
- 作者: tencent | 👍 392 | ⬇️ 3,516
- [查看模型](https://huggingface.co/tencent/Hy4-preview)
- 腾讯混元系列最新预览版（hy_v4），纯文本生成 LLM，预示腾讯下一代混元大模型技术方向，当前处于早期预览阶段。

#### **pipecat-ai/phonellm-alpha-1**
- 作者: pipecat-ai | 👍 191 | ⬇️ 6,813
- [查看模型](https://huggingface.co/pipecat-ai/phonellm-alpha-1)
- 面向语音场景的 Nemotron 架构 LLM，alpha 试水版本，由对话 AI 基础设施团队 pipecat 推出。

> 💡 **注意**：Kimi-K3 虽标注 image-text-to-text 任务，但其标签含 feature-extraction 与 compressed-tensors，为多模态 LLM 模型，故一并归入上述对比。

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

#### **Qwen/Qwen3.8-27B**
- 作者: Qwen | 👍 13,636 | ⬇️ 4,960,483
- [查看模型](https://huggingface.co/Qwen/Qwen3.8-27B)
- Qwen3.8 家族旗舰多模态模型（qwen3_5 代），今日最热门模型，下载量近 500 万。

#### **moonshotai/Kimi-K3**
- 作者: moonshotai | 👍 11,137 | ⬇️ 2,783,061
- [查看模型](https://huggingface.co/moonshotai/Kimi-K3)
- 月之暗面最新多模态模型，主打 compressed-tensors（压缩张量）技术路线。

#### **Qwen/Qwen3.8-Flash-Next**
- 作者: Qwen | 👍 4,694 | ⬇️ 207,941
- [查看模型](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- Qwen4 实验系列（qwen4_exp）Flash 迭代版，追求速度优化的多模态对话模型。

#### **Lightricks/LTX-2.5**
- 作者: Lightricks | 👍 2,510 | ⬇️ 1,232,274
- [查看模型](https://huggingface.co/Lightricks/LTX-2.5)
- LTX 视频生成模型 2.5 版，支持图生视频、文生视频、视频生视频全链路。

#### **MiniMaxAI/MiniMax-H3**
- 作者: MiniMaxAI | 👍 4,782 | ⬇️ 5,532,597
- [查看模型](https://huggingface.co/MiniMaxAI/MiniMax-H3)
- MiniMax 新一代视频生成大模型，支持文本/图像生成视频，下载量突破 550 万。

#### **zai-org/GLM-5.3-Flash**
- 作者: zai-org | 👍 1,921 | ⬇️ 441,348
- [查看模型](https://huggingface.co/zai-org/GLM-5.3-Flash)
- GLM-5.3 的闪电版多模态型号，面向实时对话场景。

#### **deepseek-ai/DeepSeek-V4-Flash-Vision-Exp**
- 作者: deepseek-ai | 👍 477 | ⬇️ 17,893
- [查看模型](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
- DeepSeek V4 Flash 系列视觉实验版（deepseek_v4 代），探索多模态融合新路径。

#### **BreezeBlue/Breeze-TTS-2**
- 作者: BreezeBlue | 👍 330 | ⬇️ 3,086
- [查看模型](https://huggingface.co/BreezeBlue/Breeze-TTS-2)
- Breeze 系列第二代文本转语音模型。

#### **FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree**
- 作者: FastVideo | 👍 242 | ⬇️ 0
- [查看模型](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree)
- MiniMax-H3 的 4 步蒸馏加速版，主打数据无关的 VSA 技术路径，刚发布尚无下载。

#### **alibaba-pai/MiniMax-H3-Acc-LoRAs**
- 作者: alibaba-pai | 👍 182 | ⬇️ 32,893
- [查看模型](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)
- 阿里 PAI 为 MiniMax-H3 加速场景推出的 LoRA 插件集（基于 arxiv:2607.26004）。

#### **Kijai/MiniMax-H3-experimental**
- 作者: Kijai | 👍 393 | ⬇️ 0
- [查看模型](https://huggingface.co/Kijai/MiniMax-H3-experimental)
- 知名 ComfyUI 开发者 Kijai 的 MiniMax-H3 实验版，新发布，适合技术尝鲜。

---

### 🔧 专用模型（代码、数学、时间序列等）

#### **google/timesfm-3.0-pytorch**
- 作者: google | 👍 257 | ⬇️ 0
- [查看模型](https://huggingface.co/google/timesfm-3.0-pytorch)
- Google 时间序列预测模型 TimesFM 3.0 PyTorch 版本，刚发布暂无下载。

> 💡 **提示**：榜单中无传统意义的代码/医疗专用模型；**Tiel 与 Thomson** 系列分别偏代码与 MoE 架构（见表内其他模型）。当前热门呈现"通用多模态 + 量化部署"压倒专用模型的特征。

---

### 📦 微调与量化（社区微调、GGUF、FP8、MLX）

#### **unsloth/Qwen3.8-27B-GGUF**
- 作者: unsloth | 👍 3,364 | ⬇️ 9,354,057
- [查看模型](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF)
- Qwen3.8-27B 的 GGUF 量化版，下载量高达 935 万，是本地部署首选。

#### **unsloth/Qwen3.8-Flash-Next-GGUF**
- 作者: unsloth | 👍 700 | ⬇️ 431,339
- [查看模型](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF)
- Qwen3.8-Flash-Next 的 GGUF 量化版，unsloth 出品。

#### **unsloth/GLM-5.3-Flash-GGUF**
- 作者: unsloth | 👍 329 | ⬇️ 63,718
- [查看模型](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF)
- GLM-5.3-Flash 的 GGUF 量化版，unsloth 出品。

#### **JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**
- 作者: JonathanColetti | 👍 901 | ⬇️ 2,143,289
- [查看模型](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF)
- 带 llama.cpp 与 MTP 支持的 GGUF 去审查版。

#### **HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**
- 作者: HauhauCS | 👍 855 | ⬇️ 1,276,092
- [查看模型](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF)
- 激进 MTP 策略 + 去审查的 Qwen3.8 GGUF 包装版。

#### **OBLITERATUS/Qwen3.8-27B-OBLITERATED**
- 作者: OBLITERATUS | 👍 1,017 | ⬇️ 805,791
- [查看模型](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)
- 经典 OBLITERATED 去审查系列，支持 MLX 与 GGUF，qwen3_5 架构。

#### **orcarouter/Qwen3.8-27B-Uncensored-MLX**
- 作者: orcarouter | 👍 1,266 | ⬇️ 121,028
- [查看模型](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX)
- Apple Silicon 专用 MLX 格式的去审查版，适合 Mac 本地部署。

#### **orcarouter/Qwen3.8-27B-Uncensored-FP8**
- 作者: orcarouter | 👍 1,357 | ⬇️ 316,128
- [查看模型](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8)
- FP8 精度去审查版，已在榜单受到大量关注。

#### **orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF**
- 作者: orcarouter | 👍 176 | ⬇️ 64,325
- [查看模型](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF)
- Qwen3.8-Flash-Next 的去审查 GGUF 版。

#### **orcarouter/Qwen3.8-27B-Uncensored-GGUF**
- 作者: orcarouter | 👍 647 | ⬇️ 254,529
- [查看模型](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF)
- Qwen3.8-27B 去审查 GGUF 版，orcarouter 的 qwen3 系列产品线之一。

#### **orcarouter/GLM-5.3-Flash-Uncensored-FP8**
- 作者: orcarouter | 👍 147 | ⬇️ 2,576
- [查看模型](https://huggingface.co/orcarouter/GLM-5.3-Flash-Uncensored-FP8)
- GLM-5.3-Flash 的 FP8 去审查版。

#### **ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF**
- 作者: ISTA-DASLab | 👍 139 | ⬇️ 56,208
- [查看模型](https://huggingface.co/ISTA-DASLab/Qwen3.8-27B-GSQ-RCO-GGUF)
- 学术机构 ISTA-DASLab 出品的 GSQ-RCO 混合精度量化研究型 GGUF。

#### **peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF**
- 作者: peculiar-ragdoll | 👍 191 | ⬇️ 130,086
- [查看模型](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF)
- Tiel-Coder 35B-A3B MoE 架构代码模型，imatrix 优化 GGUF，主打本地化运行。

#### **Qwen/Qwen3.8-Flash-Next-FP8**
- 作者: Qwen | 👍 183 | ⬇️ 130,451
- [查看模型](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8)
- Qwen 官方 FP8 量化版 Flash-Next，官方出品。

---

## 📡 生态信号

- **Qwen 系列一骑绝尘**：Qwen3.8-27B 以压倒性优势登顶，且下游 GGUF/FP8/MLX/Abliterated 衍生产物占据榜单近半壁江山，说明 Qwen 已构建完整生态闭环——从官方主模型到社区量化、去审查衍生一应俱全，生态统治力极强。值得注意，榜单中出现了 **Thomsom-1.0-Small** 等基于 Qwen3.5 MoE 架构的第三方微调，未来可能形成围绕 Qwen 的商用衍生生态。

- **开源权重 vs 闭源**：本周新发布多为开源权重模型，开源权重社区活跃度持续走高，社区"反审查"（Abliterated/Uncensored）微调非常活跃——多模态偏好优化对齐（如 orcarouter 的 multiple-token prediction）正成为社区主流玩法。

- **量化生态高度活跃**：unsloth 与 orcarouter 系列量化产物下载量极高，GGUF 仍是本地部署主流格式，FP8 与 MLX 版本受欢迎程度上升。与此同时，GLM-5.3 与 DeepSeek-V4 的加入表明竞争加剧，多模态成为"默认配置"，纯文本模型更难出圈。H3 相关加速方案（4 步推理、VSA）虽新发布下载为零，但预告了下一波视频生成方向的优化主题。

---

## 🔭 值得探索

1. **Qwen/Qwen3.8-27B**（[链接](https://huggingface.co/Qwen/Qwen3.8-27B)）— 今日趋势榜首，下载逼近 500 万，无论是能力、生态支持还是社区活跃度都是标杆级存在，建议作为核心基座模型评估。

2. **moonshotai/Kimi-K3**（[链接](https://huggingface.co/moonshotai/Kimi-K3)）— 11,137 赞位居第二，标签含 compressed-tensors，暗示 Kimi 选择了低比特/压缩模型路线做差异化竞争。技术路线值得深入研究。

3. **alibaba-pai/MiniMax-H3-Acc-LoRAs**（[链接](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)）— 阿里 PAI 为 MiniMax-H3 提供加速 LoRA 解决方案，背后的 arxiv:2607.26004 论文方法与 VSA/4-step 蒸馏路线，值得关注后续演进。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*