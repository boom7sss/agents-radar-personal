# Hugging Face 热门模型日报 2026-07-15

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-15 02:55 UTC

---

## Hugging Face 热门模型日报（2026-07-15）

### 📰 今日速览

- **Qwen3.6 成为生态基石**：基于 Qwen 3.5/3.6 的微调与量化模型占据榜单近半数席位，其中 `HauhauCS/Qwen3.6-35B-A3B-Uncensored` 与 `unsloth/Qwen3.6-27B-MTP-GGUF` 分别以 2,735 和 1,092 点赞领跑，凸显开源社区对这类多模态基座的高度欢迎。
- **MoE 与极低比特量化同时爆发**：GLM-5.2（3,949 点赞）、`InternScience/Agents-A1` 等 MoE 模型走红，同时 `prism-ml` 推出 1bit/2bit 的 `Ternary-Bonsai-27B` 和 `Bonsai-27B`，代表极端压缩方向。
- **OCR/视频生成赛道持续升温**：百度 `Unlimited-OCR` 下载量超 171 万次，`lingbot-world-v2-14b` 与 `LTX-Best-Face-ID` 将身份保持与视频生成结合，多模态应用日趋细分。
- **社区微调接近“工业化”**：众多作者将 Claude、Opus、Fable5 等虚构/研究性能力融入基座，形成固定“缝合”范式（如 `Qwythos-9B` 系列），并快速产出 GGUF 格式，降低部署门槛。

---

### 🧠 语言模型（LLM、对话、指令微调）

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)**  
  作者：zai-org | 点赞：3,949 | 下载：489,611  
  📝 基于 GLM 的 MoE 对话模型，采用 `glm_moe_dsa` 架构，周热度最高，代表国产开源 MoE 新势力。

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)**  
  作者：tencent | 点赞：782 | 下载：10,406  
  📝 腾讯 Hunyuan 系列第三版，纯文本生成，权重由 safetensors 提供，企业级模型持续开源。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)**  
  作者：InternScience | 点赞：539 | 下载：30,539  
  📝 基于 Qwen3.5 MoE 的 Agent 专用模型，支持图像-文本输入，适配工具调用场景。

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/Nemotron-Labs-Audex-30B-A3B)**  
  作者：nvidia | 点赞：149 | 下载：1,332  
  📝 NVIDIA 实验室的 30B 参数 MoE 模型（激活 3B），主打高效推理，具备研究属性。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)**  
  作者：deepreinforce-ai | 点赞：882 | 下载：1,533,354  
  📝 35B 密集模型，MIT 许可，经 GGUF 量化后下载量极佳，成为通用聊天/任务的轻量高能选择。

---

### 🎨 多模态与生成（图像、视频、音频、文本到 X）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)**  
  作者：empero-ai | 点赞：2,161 | 下载：2,006,265  
  📝 将 Qwen3.5 与“Claude Mythos”风格融合的图像-文本模型，GGUF 量化后极大降低部署门槛。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)**  
  作者：baidu | 点赞：1,984 | 下载：1,715,301  
  📝 百度推出的高精度通用 OCR 模型，支持多种场景文字识别，下载量接近 172 万。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)**  
  作者：HauhauCS | 点赞：2,735 | 下载：2,443,871  
  📝 Qwen3.6 的 MoE 版本（35B 参数量，激活 3B），免审查 + 激进角色扮演调教，社区热捧。

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)**  
  作者：bottlecapai | 点赞：342 | 下载：6,208  
  📝 为 Qwen3.6 增加思维链能力（“ThinkingCap”），提升多模态推理表现。

- **[migtissera/Tess-4-27B](https://huggingface.co/migtissera/Tess-4-27B)**  
  作者：migtissera | 点赞：112 | 下载：1,262  
  📝 基于 Qwen3.5 的 27B 多模态助手，强调通用图像理解与对话。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)**  
  作者：OpenMOSS-Team | 点赞：190 | 下载：65,109  
  📝 音频转写 + 说话人分离一体化模型，适合会议记录等场景。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)**  
  作者：Alissonerdx | 点赞：141 | 下载：0  
  📝 针对 LTX-Video 的身份保持 LoRA，实现参考人脸到视频的生成。

- **[nineninesix/gepard-1.0](https://huggingface.co/nineninesix/gepard-1.0)**  
  作者：nineninesix | 点赞：101 | 下载：5,872  
  📝 基于 Qwen3.5 文本分支的 TTS 模型，将语言模型能力迁移到语音生成。

---

### 🔧 专用模型（代码、数学、医疗、嵌入等）

本榜单专用模型较少，以下可归入此分类：

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)**  
  作者：froggeric | 点赞：904 | 下载：0  
  📝 修复 Qwen 系列对话模板的工具，虽然是 N/A 但实用价值高，解决社区使用时的模板错乱问题。

- **[ATH-MaaS/OvisOCR2](https://huggingface.co/ATH-MaaS/OvisOCR2)**  
  作者：ATH-MaaS | 点赞：86 | 下载：745  
  📝 基于 Qwen3.5 的 OCR 增强模型，与百度 Unlimited-OCR 定位类似但体量较小。

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
  作者：yuxinlu1 | 点赞：1,189 | 下载：468,629  
  📝 基于 Gemma-4-12B 的 Agentic + 代码创作微调版，GGUF 量化，适合自动化编程与终端交互。

---

### 📦 微调与量化（社区微调、GGUF、AWQ）

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)**  
  作者：unsloth | 点赞：1,092 | 下载：2,904,515  
  📝 unsloth 出品的 Qwen3.6-27B 多任务预测（MTP）GGUF 版，下载量最高，极致优化推理效率。

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**  
  作者：unsloth | 点赞：172 | 下载：55,222  
  📝 DeepSeek V4 Flash 的 GGUF 量化，配合 unsloth 工具，低资源运行前沿模型。

- **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
  作者：prism-ml | 点赞：178 | 下载：23  
  📝 2bit 三进制量化 27B 模型，极端压缩探索，虽下载量低但代表技术前沿。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)**  
  作者：GnLOLot | 点赞：235 | 下载：89,892  
  📝 1B 级别的小模型，集成“Opus Fable5”风格与思考链，GGUF 后适合边缘部署。

- **[empero-ai/Qwythos-9B-v2-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF)**  
  作者：empero-ai | 点赞：130 | 下载：70,260  
  📝 Qwythos 系列 v2 的 GGUF 版，持续迭代风格化多模态模型。

- **[jlnsrk/GLM-5.2-colibri-int4](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)**  
  作者：jlnsrk | 点赞：102 | 下载：2,188  
  📝 将 GLM-5.2 MoE 模型量化至 int4，结合 CPU 友好的专家流式加载，降低硬件需求。

- **[mgwr/M87](https://huggingface.co/mgwr/M87)**  
  作者：mgwr | 点赞：109 | 下载：2,408  
  📝 基于 Krea-2-Turbo 底模的 LoRA，针对特定风格（M87）的图像生成。

---

### 🌐 生态信号

- **Qwen 家族统治性增长**：从 Qwen3.5 到 Qwen3.6，包括 MoE 变体，社区微调（Uncensored、ThinkingCap）和 unsloth 的量化版本形成完整链条，下载量几乎占总量 40%。Qwen 以 Apache-2.0 授权的开放策略继续吸引最广泛的贡献。
- **开源权重 vs 闭源**：榜单中所有模型均为开源权重（safetensors/GGUF），无闭源 API 包装模型。NVIDIA、腾讯、百度等企业持续贡献，推动开源生态与商业竞争力持平。
- **量化深度内卷**：GGUF 格式的主导地位不可撼动，但出现了 `Ternary-Bonsai-27B` (2bit)、`Bonsai-27B` (1bit) 等极端尝试。同时 `unsloth` 与 `llama.cpp` 成为标配工具链，微调后即量化发布已成社区惯性。

---

### 🔍 值得探索

1. **[prism-ml/Ternary-Bonsai-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)**  
   在 2bit 三进制量化下保留 27B 模型的能力，对研究超低比特精度下的模型质量极具参考价值，适合硬件资源有限但需要大模型推理能力的团队。

2. **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)**  
   DeepSeek V4 正式进入开源 GGUF 生态，结合 Flash 推理优化，是当前文本生成模型部署中“能力/速度”平衡的优选之一。

3. **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)**  
   融合 Gemma-4 与多种调优（Agentic、Composer）的 GGUF 模型，代码与终端交互能力强，可作为自动化编程助手的基座。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*