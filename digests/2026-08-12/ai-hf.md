# Hugging Face 热门模型日报 2026-08-12

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-08-12 02:25 UTC

---

## 《Hugging Face 热门模型日报》  
**日期：2026-08-12**

---

### 今日速览

今日 Hugging Face 榜单被 **MiniMax-H3 视频生成生态**强势主导：官方基础版、ComfyUI 单文件版、Turbo LoRA、Prompt Rewriter LoRA、GGUF 量化版同时上榜，说明社区正在快速将开源视频模型产品化、工具化。语言模型方面，**DeepSeek-V4-Flash** 下载量突破 100 万，成为当前部署热度最高的 LLM；**Kimi-K3** 则以 10,532 点赞位列榜首，显示多模态模型关注度极高。垂直场景中，**百度 Unlimited-OCR** 继续维持高下载与高赞，是文档理解赛道的重要开源力量。量化与微调活动集中在 GGUF、LoRA 与 uncensored 社区融合模型，unsloth 等基础设施团队依然扮演关键角色。整体趋势是“大模型效率化 + 多模态工具链成熟”。

---

### 热门模型

#### 🧠 语言模型（LLM、对话模型、指令微调）

- [**DeepSeek-V4-Flash-0731**](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731)  
  作者：deepseek-ai｜👍 3,159｜⬇ 1,048,685  
  新一代高效对话模型，下载量破百万，是榜单中部署热度最高的 LLM。

- [**LiquidAI/LFM2.5-2.6B**](https://huggingface.co/LiquidAI/LFM2.5-2.6B)  
  作者：LiquidAI｜👍 555｜⬇ 93,668  
  Liquid AI 的轻量 2.6B 语言模型，主打高效推理与低资源部署。

- [**deepgrove/maple-preview**](https://huggingface.co/deepgrove/maple-preview)  
  作者：deepgrove｜👍 336｜⬇ 2,049  
  基于 mixture-of-experts 的因果语言模型预览版，架构方向受到社区关注。

- [**inclusionAI/Ling-3.0-flash**](https://huggingface.co/inclusionAI/Ling-3.0-flash)  
  作者：inclusionAI｜👍 307｜⬇ 6,148  
  使用 bailing_hybrid 架构的对话模型，定位快速响应场景。

- [**inclusionAI/Ling-3.0-tiny**](https://huggingface.co/inclusionAI/Ling-3.0-tiny)  
  作者：inclusionAI｜👍 159｜⬇ 0  
  Ling-3.0 系列的超小参数版本，MIT 许可，便于本地与边缘部署。

- [**nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4**](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4)  
  作者：nvidia｜👍 137｜⬇ 19,250  
  30B 总参数、3B 激活的 MoE 模型，NVFP4 量化主打高吞吐推理。

---

#### 🎨 多模态与生成（图像、视频、音频、文本到X）

- [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3)  
  作者：moonshotai｜👍 10,532｜⬇ 1,565,484  
  本周最高赞模型，支持图像与文本输入，并带有压缩张量特性，是多模态领域的焦点发布。

- [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)  
  作者：MiniMaxAI｜👍 3,584｜⬇ 59,368  
  官方视频生成基础模型，支持 text-to-video / image-to-video，是大量衍生工具链的底座。

- [**Comfy-Org/MiniMax-H3**](https://huggingface.co/Comfy-Org/MiniMax-H3)  
  作者：Comfy-Org｜👍 1,216｜⬇ 6,798,796  
  ComfyUI 单文件版本，下载量接近 680 万，表明视频生成工作流已高度产品化。

- [**meta-models/Muse-Glimmer-30B**](https://huggingface.co/meta-models/Muse-Glimmer-30B)  
  作者：meta-models｜👍 1,108｜⬇ 0  
  30B 图文对话模型，发布后迅速进入趋势榜，当前处于早期采用阶段。

- [**lightx2v/Minimax-h3-Turbo**](https://huggingface.co/lightx2v/Minimax-h3-Turbo)  
  作者：lightx2v｜👍 348｜⬇ 20,376  
  基于 MiniMax-H3 的 image-to-video 加速版，兼顾 t2v / i2v / r2v 能力。

- [**nvidia/NVIDIA-NemotronLabs-VoiceChat-11B**](https://huggingface.co/nvidia/NVIDIA-NemotronLabs-VoiceChat-11B)  
  作者：nvidia｜👍 331｜⬇ 653  
  NVIDIA 的语音对话模型，面向实时语音交互与 VoiceChat 场景。

- [**Kijai/MiniMax-H3_comfy**](https://huggingface.co/Kijai/MiniMax-H3_comfy)  
  作者：Kijai｜👍 280｜⬇ 0  
  ComfyUI 节点/工作流实现，方便本地接入 MiniMax-H3 进行视频生成。

- [**Lightricks/LTX-2.5**](https://huggingface.co/Lightricks/LTX-2.5)  
  作者：Lightricks｜👍 244｜⬇ 39  
  通用视频生成模型，支持 image / text / video-to-video，是新的单文件扩散模型。

- [**Kijai/MiniMax-H3-experimental**](https://huggingface.co/Kijai/MiniMax-H3-experimental)  
  作者：Kijai｜👍 196｜⬇ 0  
  Kijai 推出的 MiniMax-H3 实验版 ComfyUI 适配，紧追上游更新。

- [**endless-frontier/BigBang-v1**](https://huggingface.co/endless-frontier/BigBang-v1)  
  作者：endless-frontier｜👍 171｜⬇ 708  
  基于 Qwen3.5-MoE 的多模态对话模型，融合图像与文本输入。

---

#### 🔧 专用模型（OCR、安全、嵌入等）

- [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR)  
  作者：baidu｜👍 4,022｜⬇ 2,892,191  
  OCR 专用模型，点赞与下载双高，适合文档解析、版面识别等场景。

- [**mistralai/Shieldstral-1.0-3B**](https://huggingface.co/mistralai/Shieldstral-1.0-3B)  
  作者：mistralai｜👍 232｜⬇ 6,769  
  3B 安全护栏/内容审核模型，基于 Mistral3，适合部署在生成链路前做防护。

---

#### 📦 微调与量化（社区微调、GGUF、LoRA）

- [**DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**](https://huggingface.co/DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF)  
  作者：DavidAU｜👍 1,904｜⬇ 2,521,093  
  社区融合微调的 GGUF 量化模型，下载量超 250 万，主打 uncensored 对话。

- [**larryvrh/MiniMax-H3-Turbo-Lora**](https://huggingface.co/larryvrh/MiniMax-H3-Turbo-Lora)  
  作者：larryvrh｜👍 655｜⬇ 0  
  MiniMax-H3 的 Turbo LoRA，用于加速或风格化视频生成。

- [**unsloth/DeepSeek-V4-Flash-0731-GGUF**](https://huggingface.co/unsloth/DeepSeek-V4-Flash-0731-GGUF)  
  作者：unsloth｜👍 652｜⬇ 207,990  
  DeepSeek-V4-Flash 的 GGUF 量化版本，适合 llama.cpp 本地部署。

- [**ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot**](https://huggingface.co/ethanfel/Qwen3-VL-32B-Ultra-Heretic-H3-ComfyUI-INT8-ConvRot)  
  作者：ethanfel｜👍 464｜⬇ 0  
  Qwen3-VL 32B 的社区 INT8 微调/合并版，面向 ComfyUI 工作流。

- [**unsloth/Muse-Glimmer-30B-GGUF**](https://huggingface.co/unsloth/Muse-Glimmer-30B-GGUF)  
  作者：unsloth｜👍 311｜⬇ 0  
  Muse-Glimmer-30B 的 GGUF 量化版本，由 unsloth 提供，便于本地推理。

- [**drbaph/MiniMax-H3-Turbo-Lora-ComfyUI**](https://huggingface.co/drbaph/MiniMax-H3-Turbo-Lora-ComfyUI)  
  作者：drbaph｜👍 279｜⬇ 0  
  MiniMax-H3 Turbo LoRA 的 ComfyUI 剪枝适配版，降低接入门槛。

- [**SexGod1979/PinkCherry_MiniMax-H3**](https://huggingface.co/SexGod1979/PinkCherry_MiniMax-H3)  
  作者：SexGod1979｜👍 268｜⬇ 0  
  MiniMax-H3 的社区风格微调模型，兼容 endpoints 部署。

- [**meta-models/Muse-Glimmer-30B-GGUF**](https://huggingface.co/meta-models/Muse-Glimmer-30B-GGUF)  
  作者：meta-models｜👍 207｜⬇ 0  
  Muse-Glimmer-30B 的 GGUF 量化版本，与 base model 配套使用。

- [**LiquidAI/LFM2.5-2.6B-GGUF**](https://huggingface.co/LiquidAI/LFM2.5-2.6B-GGUF)  
  作者：LiquidAI｜👍 205｜⬇ 111,942  
  LFM2.5 的 GGUF 量化版，在 llama.cpp 生态中下载量可观。

- [**lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA**](https://huggingface.co/lightx2v/MiniMax-H3-Prompt-Rewriter-LoRA)  
  作者：lightx2v｜👍 134｜⬇ 353  
  用于改写视频生成提示词的 LoRA，可提升 MiniMax-H3 的指令遵循能力。

- [**fal/MiniMax-H3-Realism-People-LoRA**](https://huggingface.co/fal/MiniMax-H3-Realism-People-LoRA)  
  作者：fal｜👍 119｜⬇ 0  
  面向真实人物视频生成的 MiniMax-H3 LoRA。

- [**unsloth/MiniMax-H3-GGUF**](https://huggingface.co/unsloth/MiniMax-H3-GGUF)  
  作者：unsloth｜👍 113｜⬇ 781  
  MiniMax-H3 的 GGUF 量化版，适配 stable-diffusion.cpp 等推理后端。

---

### 生态信号

MiniMax-H3 已成为当下最典型的开源视频生态：官方模型、ComfyUI 单文件、多个 LoRA 与 GGUF 同时上榜，说明社区正围绕一个开放底座快速工具化。DeepSeek-V4-Flash、Kimi-K3 等旗舰权重均开放下载，开源权重路线继续主导 HF 榜单，闭源模型并未直接参与。量化与微调活动极其活跃：unsloth 的 GGUF 覆盖 DeepSeek/Muse/Liquid/MiniMax，社区还大量产出 uncensored/Heretic 融合模型与垂直 LoRA。安全护栏模型 Shieldstral 的出现，也表明开源生态开始重视部署侧的防护。

---

### 值得探索

- [**MiniMaxAI/MiniMax-H3**](https://huggingface.co/MiniMaxAI/MiniMax-H3)  
  不仅是本周视频生成的核心模型，更已形成完整 ComfyUI/LoRA/GGUF 生态，值得作为开源视频生成工作流的研究起点。

- [**moonshotai/Kimi-K3**](https://huggingface.co/moonshotai/Kimi-K3)  
  本周点赞最高的模型，代表多模态大模型的最新关注度，压缩张量与特征提取能力尤其值得深入测试。

- [**baidu/Unlimited-OCR**](https://huggingface.co/baidu/Unlimited-OCR)  
  高赞、高下载、高实用性的 OCR 专用模型，适合直接集成到文档理解与检索系统中验证效果。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*