# Hugging Face 热门模型日报 2026-08-31

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-31 15:00 UTC

---

# Hugging Face 热门模型日报（2026-08-31）

## 一、今日速览

今日 Hugging Face 榜单由 **Qwen3.8** 与 **GLM-5.3** 两大模型家族领跑，其中 Qwen3.8-27B 以 13,428 点赞、472 万下载量居首，Kimi-K3 以 11,111 点赞紧随其后。多模态能力成为主流——榜单中近半数模型支持 image-text-to-text 或视频生成任务。MiniMax-H3 视频生成模型热度飙升（4,691 点赞），反映视频生成赛道竞争加剧。社区側，Qwen3.8-27B 的 abliterated/uncensored 及 GGUF 量化衍生版大量涌现，形成庞大生态。DeepSeek-V4-Flash-0731 以 3836 点赞、456 万下载量证明其高性价比地位。

## 二、热门模型分类

### 🧠 语言模型（LLM、对话、指令微调）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 4,476 | 158,598 |
| [zai-org/GLM-5.3](https://huggingface.co/zai-org/GLM-5.3) | zai-org | 1,389 | 66,195 |
| [tencent/Hy4-preview](https://huggingface.co/tencent/Hy4-preview) | tencent | 338 | 2,589 |
| [deepseek-ai/DeepSeek-V4-Flash-Vision-Exp](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp) | deepseek-ai | 249 | 0 |
| [deepseek-ai/DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,836 | 4,561,861 |
| [moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,111 | 2,792,274 |
| [ornith-ai/Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 510 | 172,695 |
| [pipecat-ai/phonellm-alpha-1](https://huggingface.co/pipecat-ai/phonellm-alpha-1) | pipecat-ai | 166 | 4,721 |

**说明**：Kimi-K3 为月之暗面新一代多模态大模型，支持压缩张量，点赞攀升极快；GLM-5.3 为智谱最新 MoE 架构模型；DeepSeek-V4-Flash-Vision-Exp 为新发布的视觉实验版（下载量为 0，值得关注）；phonellm-alpha-1 为 Nemotron 系电话场景专用语言模型。

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,428 | 4,720,763 |
| [zai-org/GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,779 | 379,271 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 2,325 | 1,182,585 |
| [MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,691 | 5,362,365 |
| [FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree](https://huggingface.co/FastVideo/FastVideo-FastH3-4-step-Preview-v1-VSA-DataFree) | FastVideo | 213 | 0 |
| [BreezeBlue/Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 228 | 2,236 |
| [Kijai/MiniMax-H3-experimental](https://huggingface.co/Kijai/MiniMax-H3-experimental) | Kijai | 374 | 0 |
| [alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs) | alibaba-pai | 162 | 27,009 |

**说明**：Qwen3.8-27B 是今日榜王，多模态视觉语言大模型；LTX-2.5 为 Lightricks 视频生成模型，支持多任务；MiniMax-H3 视频生成下载量超 536 万，社区生态庞大；Breeze-TTS-2 为新晋语音合成模型；FastVideo 与 Kijai 的实验版印证 MiniMax-H3 生态热度。

### 🔧 专用模型（代码、数学、医疗、语音等）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [thomsonreuters/Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 168 | 1,045 |
| [peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF](https://huggingface.co/peculiar-ragdoll/Tiel-Coder-35B-A3B-GGUF) | peculiar-ragdoll | 158 | 105,974 |

**说明**：Thomson-1.0-Small 是汤森路透基于 Qwen3.5-MoE 架构的行业专用模型；Tiel-Coder 为代码能力优化的 MoE 模型 GGUF 量化版，适合本地部署。

### 📦 微调与量化（社区微调、GGUF、FP8、MLX）

| 模型 | 作者 | 点赞 | 下载 |
|------|------|------|------|
| [unsloth/Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 623 | 373,029 |
| [unsloth/Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,268 | 9,059,937 |
| [unsloth/GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 306 | 53,350 |
| [OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 966 | 759,644 |
| [HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 806 | 1,202,914 |
| [orcarouter/Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,246 | 114,057 |
| [orcarouter/Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,312 | 307,496 |
| [Qwen/Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 170 | 84,954 |
| [orcarouter/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 593 | 246,445 |
| [orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-Flash-Next-Uncensored-GGUF) | orcarouter | 143 | 51,125 |
| [JonathanColetti/Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 866 | 2,055,081 |
| [huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 469 | 1,764,919 |

**说明**：unsloth 的 Qwen3.8-27B-GGUF 下载量破 900 万，是本地部署首选；社区围绕 Qwen3.8-27B 的 abliterated/uncensored 衍生版形成完整生态（MLX、FP8、GGUF 多格式覆盖），反映用户对"无审查"模型的强需求。

## 三、生态信号

**Qwen3.8 家族一家独大**：截至今日，Qwen3.8-27B 及其衍生版（GGUF、FP8、MLX、abliterated）合计上榜 9 款，下载量超过 2000 万，形成完整的"官方发布→量化→社区微调"生态链条。GLM-5.3 系列（标准版+Flash 版+GGUF）同样展现出强势增长。

**开源权重模型持续引领**：榜单前 5 名全部为开放权重模型（Qwen、GLM、DeepSeek）。Kimi-K3 的发布进一步印证头部厂商加速开源步伐。闭源模型仅通过 API 形式影响生态，热度难以与开源模型抗衡。

**量化与"去审查"成为社区核心议题**：GGUF 量化包占据榜单近三分之一席位；abliterated/uncensored 版本（orcarouter、huihui-ai、OBLITERATUS 等）被广泛下载，反映用户对模型对齐限制的抵触情绪及对本地自由部署的需求。

**视频生成赛道升温**：MiniMax-H3 及其衍生项目（FastVideo、Kijai 实验版、阿里 LoRAs）集体上榜，配合 LTX-2.5 的发布，预示多模态视频生成即将成为下一波竞争焦点。

## 四、值得探索

1. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 点赞破万的新发布模型，采用压缩张量技术（compressed-tensors），支持特征提取任务，架构新颖，值得深入研究其压缩策略与多模态能力。

2. **[ali alibaba-pai/MiniMax-H3-Acc-LoRAs](https://huggingface.co/alibaba-pai/MiniMax-H3-Acc-LoRAs)** — 阿里云发布的 MiniMax-H3 加速 LoRA 集合，附 arXiv 论文，对视频生成推理优化研究者极具参考价值。

3. **[OBLITERATUS/Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED)** — "去审查"微调的代表作，同时提供 MLX 与 GGUF 格式，是研究模型对齐移除技术和 Apple Silicon 本地部署的最佳范例。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*