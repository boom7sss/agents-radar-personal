# Hugging Face 热门模型日报 2026-08-28

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-27 20:41 UTC

---

# Hugging Face 热门模型日报

**日期：2026-08-28**

---

## 今日速览

本周 Hugging Face 榜首由 **Qwen3.8 系列**全面称霸——旗舰多模态模型 Qwen3.8-27B 以逾 340 万下载量稳居第一，衍生出 GGUF、MLX、FP8、abliterated 等十余个变体，生态密度极高。**Kimi-K3**（11,035 赞）和 **DeepSeek-V4-Flash**（3,959,575 下载）紧随其后，维持着中国大模型军团在开源社区的主导地位。视频生成赛道再迎重磅，**Lightricks LTX-2.5** 与 **MiniMax-H3**（4,855,095 下载）双双突破千万级关注。值得注意的新鲜面孔包括 **GLM-5.3-Flash**、**SenseNova-U1.5-8B-MoT**（any-to-any 原生多模态）以及 **Thomson-1.0-Small**（路透社首个开源 MoE 模型）。整体来看，多模态化、量化分发与"去审查"（abliterated）微调构成本周三大叙事主线。

---

## 热门模型

### 🧠 语言模型（LLM、对话模型、指令微调）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3) | moonshotai | 11,035 | 2,829,554 | Kimi 第三代旗舰多模态对话模型，主打压缩张量技术，社区热度仅次于 Qwen |
| [DeepSeek-V4-Flash-0731](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) | deepseek-ai | 3,759 | 3,959,575 | DeepSeek V4 系列 Flash 版，轻量高效推理，下载量逼近四百万 |
| [GLM-5.3-Flash](https://huggingface.co/zai-org/GLM-5.3-Flash) | zai-org | 1,300 | 34 | Z.ai 新一代 GLM 快速推理模型，刚发布即获千余点赞，增长势头强劲 |
| [Ornith-1.5-35B-A3B](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B) | ornith-ai | 464 | 88,102 | 35B 总参数量、3B 激活参数的 MoE 模型，基于 Qwen3.5-MoE 架构 |
| [sense-sense/SenseNova-U1.5-8B-MoT](https://huggingface.co/sensenova/SenseNova-U1.5-8B-MoT) | sensenova | 179 | 4,232 | 商汤 SenseNova 原生多模态 MoT 模型，支持 any-to-any 任意模态互转 |
| [Thomson-1.0-Small](https://huggingface.co/thomsonreuters/Thomson-1.0-Small) | thomsonreuters | 124 | 349 | 路透社首个开源 MoE 多模态模型，基于 Qwen3.5-MoE，金融/新闻领域值得关注 |
| [superwhisper/s1-mini](https://huggingface.co/superwhisper/s1-mini) | superwhisper | 277 | 4,149 | 融合 ASR 能力的轻量文本生成模型，基于 Qwen3 架构 |

### 🎨 多模态与生成（图像、视频、音频）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen/Qwen3.8-27B](https://huggingface.co/Qwen/Qwen3.8-27B) | Qwen | 13,023 | 3,457,687 | 本周总榜第一，Qwen3.5 系列旗舰多模态对话模型，全能型视觉语言助手 |
| [Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) | Qwen | 3,923 | 4,810 | Qwen4 实验架构的 Flash 快速推理版，新架构风向标 |
| [MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3) | MiniMaxAI | 4,529 | 4,855,095 | MiniMax 第三代视频生成模型，支持文生视频/图生视频，周下载近五百万 |
| [Lightricks/LTX-2.5](https://huggingface.co/Lightricks/LTX-2.5) | Lightricks | 1,929 | 912,729 | 多功能视频生成模型，支持图像/文本/视频到视频的全链路转换 |
| [MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) | MiniMaxAI | 1,274 | 19,726 | MiniMax 第三代音乐生成模型，文生音乐赛道头部选手 |
| [Breeze-TTS-2](https://huggingface.co/BreezeBlue/Breeze-TTS-2) | BreezeBlue | 123 | 240 | 新一代语音合成模型，新发布尚在热度爬坡期 |
| [Audio8-TTS-Preview-0.1b](https://huggingface.co/Audio8/Audio8-TTS-Preview-0.1b) | Audio8 | 178 | 4,477 | Audio8 首个 TTS 预览版，基于 ArkTTS 架构 |

### 🔧 专用模型（代码、数学、医疗、嵌入）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [MiniMax-H3-Fun-Controlnet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) | alibaba-pai | 146 | 3,344 | 阿里 PAI 为 MiniMax-H3 适配的 ControlNet 统一控制模块，支持视频姿态/边缘控制 |
| [froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates) | froggeric | 1,502 | 0 | 修复 Qwen 系列聊天模板的 Jinja 补丁库，虽无下载但获 1,502 赞，开发者刚需 |
| [Qwen3.8-Flash-Next-FP8](https://huggingface.co/Qwen/Qwen3.8-Flash-Next-FP8) | Qwen | 117 | 2,219 | Flash-Next 的 FP8 量化版，兼顾精度与显存效率，适配 Hopper/Ada 架构 |

### 📦 微调与量化（社区微调、GGUF、AWQ）

| 模型 | 作者 | 点赞 | 下载 | 说明 |
|---|---|---|---|---|
| [Qwen3.8-27B-GGUF](https://huggingface.co/unsloth/Qwen3.8-27B-GGUF) | unsloth | 3,066 | 7,758,790 | Qwen3.8-27B 的 GGUF 量化版，本周下载量总榜第一（776 万次），本地部署首选 |
| [Qwen3.8-27B-OBLITERATED](https://huggingface.co/OBLITERATUS/Qwen3.8-27B-OBLITERATED) | OBLITERATUS | 843 | 509,270 | "去审查"（abliterated）版 Qwen3.8，移除安全对齐限制，社区热度极高 |
| [Qwen3.8-27B-Uncensored-FP8](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-FP8) | orcarouter | 1,206 | 273,577 | FP8 精度 + 未审查微调，兼顾性能与自由度 |
| [Qwen3.8-27B-Uncensored-MLX](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-MLX) | orcarouter | 1,164 | 83,352 | Apple Silicon 专用 MLX 版未审查模型 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/orcarouter/Qwen3.8-27B-Uncensored-GGUF) | orcarouter | 490 | 188,460 | 同一系列的 GGUF 量化版，覆盖多端部署场景 |
| [Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF](https://huggingface.co/HauhauCS/Qwen3.8-27B-Uncensored-HauhauCS-Aggressive-MTP-GGUF) | HauhauCS | 684 | 938,219 | 带 MTP（多 token 预测）加速的激进优化版 GGUF，下载量近百万 |
| [Qwen3.8-27B-Uncensored-GGUF](https://huggingface.co/JonathanColetti/Qwen3.8-27B-Uncensored-GGUF) | JonathanColetti | 779 | 1,666,948 | llama.cpp 生态优化版，160 万+下载，社区口碑之作 |
| [Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF](https://huggingface.co/DavidAU/Qwen3.8-27B-Cold-Fusion-GAIN-V1.1-NM-DAU-NEO-MAX-MTP-GGUF) | DavidAU | 261 | 238,691 | 叠加 GAIN Training 与冷融合等多重优化的极限调教版 |
| [Huihui-Qwen3.8-27B-abliterated-GGUF](https://huggingface.co/huihui-ai/Huihui-Qwen3.8-27B-abliterated-GGUF) | huihui-ai | 400 | 1,355,482 | huihui-ai 出品的去审查量化版，135 万下载验证社区认可度 |
| [Qwen3.8-Flash-Next-GGUF](https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF) | unsloth | 442 | 4,354 | Flash-Next 的 GGUF 量化版，方便本地快速体验新架构 |
| [GLM-5.3-Flash-GGUF](https://huggingface.co/unsloth/GLM-5.3-Flash-GGUF) | unsloth | 191 | 0 | GLM-5.3 的 GGUF 版，刚上线暂无下载，但结合原版热度值得关注 |
| [Ornith-1.5-35B-A3B-GGUF](https://huggingface.co/ornith-ai/Ornith-1.5-35B-A3B-GGUF) | ornith-ai | 325 | 1,469,059 | 35B  MoE 的 GGUF 版，MIT 协议，147 万下载表明小激活模型的受欢迎度 |

---

## 生态信号

**Qwen 系列形成现象级生态**：Qwen3.8-27B 本体加衍生量化/微调模型共计 12 个上榜，下载量占榜单总量的近三分之二，印证了"旗舰模型 + 社区量化分发"的开源范式。**"去审查"（uncensored/abliterated）成为本周最活跃的社区微调主题**，至少 6 个相关变体上榜，反映用户对"未对齐"模型存在持续需求。**开源权重竞争白热化**：Qwen、DeepSeek、Kimi、GLM、MiniMax 五大家族同台竞技，且全部开放权重并附带 GGUF/MLX 等多格式支持，闭源 API 模式的竞争压力持续加大。**视频生成迎来新一轮升级**：MiniMax-H3 与 LTX-2.5 双双进入榜单头部，配合 ControlNet 等控制工具的适配，视频生成正从"能生成"走向"可控制"。MiniMax 更横跨视频、音乐两大生成模态，显示多模态全栈布局正在加速。

---

## 值得探索

1. **[Qwen/Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** — Qwen4 实验架构的首个公开模型。虽然下载量尚小（4,810），但作为下一代架构的方向标，值得研究者深入拆解其设计思路，抢先了解 Qwen 的未来技术路线。

2. **[MiniMaxAI/MiniMax-H3](https://huggingface.co/MiniMaxAI/MiniMax-H3)** — 周下载 485 万，是本周视频生成赛道的最大赢家。配合阿里发布的 [ControlNet-Union](https://huggingface.co/alibaba-pai/MiniMax-H3-Fun-Controlnet-Union) 模块，可实现对生成视频的精确控制，是目前最值得上手实验的视频模型组合。

3. **[moonshotai/Kimi-K3](https://huggingface.co/moonshotai/Kimi-K3)** — 点赞数仅次于 Qwen3.8-27B（11,035 赞），标签中"compressed-tensors"暗示其在模型压缩方向有独特技术。考虑到 Kimi 系列在中文场景的表现力，值得与 Qwen3.8 做系统对比评测，尤其适合关注"压缩模型是否损失能力"这一核心问题的研究者。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*