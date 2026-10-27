# Hugging Face 热门模型日报 2026-08-25

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-25 11:00 UTC

---

# 🤖 Hugging Face 热门模型日报

**2026-08-25** | 数据来源：Hugging Face Hub 周点赞排行

---

## 📌 今日速览

本周 Hugging Face 榜单呈现 **“一超多强”** 格局：Qwen 发布的 **Qwen3.8-27B** 旗舰多模态模型（周点赞 12,600）及其庞大的生态衍生矩阵（GGUF 量化、abliterated 去审查、FP8 等）霸榜近半；月之暗面 **Kimi-K3**（10,983 赞）与 DeepSeek **V4-Flash-0731**（3,696 赞）紧随其后，形成国内三大模型的正面交锋。多模态生成赛道亮点频出，MiniMax 视频模型 **MiniMax-H3**（4,438 赞）与音乐生成模型 **MiniMax-Music3**（1,235 赞）双双上榜，Lightricks 发布视频生成 **LTX-2.5**。值得关注的是，社区涌现大量 Qwen3.8-27B 的“去审查（abliterated）”微调版本，且 **ornith-ai** 系列 MoE 模型带来自研权重与量化生态。整体呈现“官方发布→社区衍生→生态固化”的模型生命周期模式。

---

## 🔥 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞/下载 | 说明 |
|------|------|----------|------|
| [**Qwen/Qwen3.8-27B**](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 12,600 / 294.5万 | 本周绝对焦点，Qwen 全新多模态对话模型（图+文→文），27B 参数，官方原版权重 |
| [**deepseek-ai/DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,696 / 352.8万 | DeepSeek V4 系列 Flash 版，主打高效推理，下载量领先 |
| [**deepseek-ai/DeepSeek-V4-Pro-0813**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813) | deepseek-ai | 750 / 7.5万 | V4 系列 Pro 旗舰版，8月13日更新，高性能对话模型 |
| [**ornith-ai/Ornith-1.5-35B-A3B**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 409 / 7.0万 | 35B 参数 MoE 架构（激活 3B），基于 Qwen3.5-MoE，MIT 协议 |
| [**ornith-ai/Ornith-1.5-9B**](https://huggingface.co/ornith-ai/Ornith-1.5-9B) | ornith-ai | 206 / 9.8万 | 同系列小尺寸版本，9B 多模态文本生成 |
| [**superwhisper/s1-mini**](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 232 / 3,474 | 集成 ASR 能力的文本生成模型，定位语音+文本双模态 |
| [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 10,983 / 286.5万 | Kimi 第三代模型，采用压缩张量技术，图+文→文，趋势榜亚军 |
| [**sensenova/SenseNova-U1.5-8B-MoT**](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 141 / 2,682 | 商汤 SenseNova 系列，8B 原生多模态 MoT 架构，任意输入→任意输出 |

---

### 🎨 多模态与生成（图像、视频、音频、文本到X）

| 模型 | 作者 | 点赞/下载 | 说明 |
|------|------|----------|------|
| [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,438 / 464.0万 | MiniMax 第三代视频生成模型（文/图→视频），下载量超 460 万 |
| [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,749 / 83.4万 | 新一代视频生成模型，支持文/图/视频→视频全向转换 |
| [**MiniMaxAI/MiniMax-Music3**](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,235 / 1.9万 | 第三代音乐生成模型，文本直接生成音乐 |
| [**Audio8/Audio8-TTS-Preview-0.1b**](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 151 / 3,640 | TTS 语音合成预览版，基于 ArkTTS 架构 |

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞/下载 | 说明 |
|------|------|----------|------|
| [**unsloth/Qwen3.8-27B-GGUF**](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 2,873 / 733.5万 | unsloth 出品 Qwen3.8 官方 GGUF 量化版，下载量超 730 万，生态核心 |
| [**orcarouter/Qwen3.8-27B-Uncensored-FP8**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,115 / 25.0万 | FP8 精度去审查版，保留多模态能力 |
| [**orcarouter/Qwen3.8-27B-Uncensored-MLX**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,060 / 6.9万 | 适配 Apple MLX 框架的去审查版本 |
| [**OBLITERATUS/Qwen3.8-27B-OBLITERATED**](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 714 / 39.0万 | 经典 “OBLITERATED” 去审查系列，支持 MLX/GGUF 多格式 |
| [**JonathanColetti/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 706 / 152.6万 | 面向 llama.cpp 的 GGUF 去审查版，支持 MTP，下载超 150 万 |
| [**HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF**](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 602 / 83.2万 | 激进风格 MTP 优化 GGUF 去审查版 |
| [**orcarouter/Qwen3.8-27B-Uncensored-GGUF**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 431 / 15.4万 | 同系列 GGUF 格式去审查版 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 346 / 123.1万 | huihui-ai 出品去审查 GGUF，下载超 123 万 |
| [**huihui-ai/Huihui-Qwen3.8-27B-abliterated**](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated) | huihui-ai | 282 / 3.2万 | 同系列未量化 safetensors 去审查版 |
| [**orcarouter/Qwen3.8-27B-Uncensored**](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored) | orcarouter | 175 / 1.5万 | 去审查系列原始 safetensors 版 |
| [**DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 233 / 22.2万 | 融合 GAIN Training 与 Cold-Fusion 技术的 GGUF 优化版 |
| [**z-lab/Qwen3.8-27B-DFlash2**](https://huggingface.co/z-lab/Qwen3.8-27B-DFlash2) | z-lab | 224 / 6.5万 | 引入 DFlash2 投机解码技术，提升推理速度 |
| [**incoai/Qwen3.8-27B-DFlash2**](https://huggingface.co/incoai/Qwen3.8-27B-DFlash2) | incoai | 174 / 10.6万 | 同款 DFlash2 投机解码技术路径 |
| [**ornith-ai/Ornith-1.5-35B-A3B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 283 / 115.7万 | 35B MoE 的 GGUF 量化版，下载超 115 万 |
| [**ornith-ai/Ornith-1.5-9B-GGUF**](https://huggingface.co/ornith-ai/Ornith-1.5-9B-GGUF) | ornith-ai | 192 / 114.4万 | 9B 版本 GGUF 量化版，下载同样超 114 万 |
| [**Qwen/Qwen3.8-27B-FP8**](https://huggingface.co/Qwen/Qwen3.8-27B-FP8) | Qwen | 689 / 336.4万 | 官方 FP8 量化版，下载量超 336 万 |
| [**froggeric/Qwen-Fixed-Chat-Templates**](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,455 / 0 | 修复 Qwen3.5 聊天模板的 MLX/Jinja 工具类模型 |
| [**peculiar-ragdoll/Qwen-Sharp-Chat-Templates**](https://huggingface.co/peculiar-ragdoll/Qwen-Sharp-Chat-Templates) | peculiar-ragdoll | 239 / 0 | 精调版 Qwen 聊天模板，MLX/Jinja 格式 |

---

## 🧬 生态信号

**Qwen3.8-27B 构建了本周“一超多强”的最完整衍生生态**：从官方 FP8 量化到 unsloth GGUF，再到至少 8 个独立社区的 abliterated（去审查）版本，覆盖 MLX、llama.cpp、投机解码（DFlash2）、MTP 优化等多种推理路径，累计下载超 1,600 万次。

**国产模型占据绝对主导**：榜单前 4 名（Qwen、Kimi、DeepSeek、MiniMax）均为中国团队发布，中国已成为开源权重模型最大输出方。**开源 vs 闭源**呈现明显分水岭：Qwen、DeepSeek、Kimi 均开放权重并配合社区生态，而 MiniMax 的 H3 视频模型与 Music3 虽有安全隐患，但仍全部开源，开源生态正快速吞噬原“闭源护城河”的应用场景。

**去审查（abliterated）成为社区最活跃的微调方向**，且已形成标准化流程（orcarouter、huihui-ai、OBLITERATUS 等专业玩家）。同时，**MoE 轻量化**（Ornith 1.5 系列）与**投机解码**（DFlash2）成为当前效率优化的两大主流技术路线。MiniMax-H3 超 464 万次的下载量则印证了视频生成正成为继文本之后开源社区的最大刚需。

---

## 🧪 值得探索

1. **Kimi-K3** — 月之暗面新一代模型，采用压缩张量技术（compressed-tensors），在“质量-体积”平衡上可能代表新的范式方向，值得与 Qwen3.8、DeepSeek-V4 对比研究。

2. **Ornith-1.5-35B-A3B** — MIT 协议下极低激活参数的 MoE 架构（35B 总参、3B 激活），本地部署性价比极高，GGUF 版下载破百万，值得实测与量化研究。

3. **Qwen3.8-27B 的 DFlash2 系列**（z-lab / incoai）— 投机解码（speculative decoding）技术在实际生产环境中能带来多少吞吐提升，是当前推理优化领域最值得关注的问题之一。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*