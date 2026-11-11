# Hugging Face 热门模型日报 2026-11-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-11-11 17:55 UTC

---

# Hugging Face 热门模型日报（2026-11-11）

## 今日速览

本期榜单由 Qwen 家族主导：官方 Qwen3.8-27B 以 19,613 周点赞、723 万下载登顶，围绕它的 GGUF 量化与社区微调版本同步上榜，形成完整衍生链。视频与图像生成方向热度集中，Lightricks/LTX-2.5 单周下载达 284 万，black-forest-labs 的 FLUX-3 系列、MiniMax-H3-Image 的 ComfyUI 适配版本也都进入榜单。榜单另一显著现象是“heretic / uncensored / abliterated”类去审查微调版本密集出现，GGUF 量化与上述微调的叠加成为社区分发主流。官方闭源级发布（Kimi-K3.1-Pro、DeepSeek-V4.1-Flash、ERNIE-5.5、Nemotron-3.5）开放权重上架，进一步挤压中间层。细分工具侧，tencent 的投机解码草稿模型、facebook/sam3 分割模型显示工程化需求上升。

## 热门模型

### 🧠 语言模型

- **Qwen/Qwen3.8-27B** — https://huggingface.co/Qwen/Qwen3.8-27B
  Qwen 官方 · 19,613 赞 · 7,232,703 下载
  官方旗舰级 27B 图文对话模型，以压倒性点赞与下载量居榜首，也是本期大量社区微调与量化的基座来源。

- **moonshotai/Kimi-K3.1-Pro** — https://huggingface.co/moonshotai/Kimi-K3.1-Pro
  moonshotai · 1,913 赞 · 33,617 下载
  Moonshot 新一代旗舰对话模型（压缩张量权重），开放权重上架即获得高关注度。

- **deepseek-ai/DeepSeek-V4.1-Flash-1017** — https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
  deepseek-ai · 5,496 赞 · 348,914 下载
  DeepSeek V4.1 Flash 系列版本，支持图文输入与文本生成，是榜单中点赞最高的官方 LLM 之一。

- **NousResearch/Arete-27B** — https://huggingface.co/NousResearch/Arete-27B
  NousResearch · 423 赞 · 4,023 下载
  基于 qwen3_5 架构的监督微调模型，Nous 研究品牌的新一批开源发布，下载量仍处早期。

- **baidu/ERNIE-5.5-Flash-Base** — https://huggingface.co/baidu/ERNIE-5.5-Flash-Base
  baidu · 268 赞 · 2,551 下载
  百度 ERNIE 5.5 的 MoE 基座权重首次开放，点赞与下载均较低，处于冷启阶段。

- **webAI-Official/TwIL-8B** — https://huggingface.co/webAI-Official/TwIL-8B
  webAI-Official · 294 赞 · 47,087 下载
  基于 granite 架构的 8B 文本生成模型，同时提供 GGUF 版本，定位轻量本地部署。

- **ricursiveAI/Ripple-65B-Preview** — https://huggingface.co/ricursiveAI/Ripple-65B-Preview
  ricursiveAI · 506 赞 · 7,112 下载
  65B 规模预览模型，采用 custom_code 加载方式，任务类型未标注，属探索性发布。

- **tencent/Qwen3.8-27B-DSpine-b16** — https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16
  tencent · 185 赞 · 3,241 下载
  面向投机解码的草稿模型（draft-model），服务于 Qwen3.8-27B 推理加速。

- **ConwayResearch/Underdog-Woof** — https://huggingface.co/ConwayResearch/Underdog-Woof
  ConwayResearch · 166 赞 · 10 下载
  基于 numpy 的端侧 CPU 语音合成模型，体量与下载数据极小，属小众实验项目。

### 🎨 多模态与生成

- **Lightricks/LTX-2.5** — https://huggingface.co/Lightricks/LTX-2.5
  Lightricks · 11,480 赞 · 2,848,771 下载
  视频生成模型，覆盖图生视频、文生视频与视频生视频，是本期下载量最高的模型。

- **facebook/sam3** — https://huggingface.co/facebook/sam3
  facebook · 6,338 赞 · 2,051,107 下载
  Meta 第三代 Segment Anything，支持视频与掩码生成，兼具特征提取能力，下载破两百万。

- **black-forest-labs/flux-3-image-klein-comfy** — https://huggingface.co/black-forest-labs/flux-3-image-klein-comfy
  black-forest-labs · 2,931 赞 · 1,271,036 下载
  FLUX 3 家族的 ComfyUI 单文件版本，支持图像生成与编辑，是图像方向点赞最高者。

- **MiniMaxAI/MiniMax-H3-Image** — https://huggingface.co/MiniMaxAI/MiniMax-H3-Image
  MiniMaxAI · 650 赞 · 142,989 下载
  MiniMax H3 系列文生图/图生图模型，同时成为多个 ComfyUI 与视频适配版本的基座。

- **PrunaAI/P-H3-Image-Comfy** — https://huggingface.co/PrunaAI/P-H3-Image-Comfy
  PrunaAI · 302 赞 · 899,096 下载
  基于 H3 的 ComfyUI 优化单文件版本，接近百万下载，显示推理优化版分发需求旺盛。

- **Comfy-Org/MiniMax-H3-Image** — https://huggingface.co/Comfy-Org/MiniMax-H3-Image
  Comfy-Org · 235 赞 · 351,803 下载
  MiniMax-H3-Image 的 ComfyUI 官方适配版，是社区生态对接的标准化入口。

- **nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B** — https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Transcribe-30B-A4B
  nvidia · 3,161 赞 · 74,300 下载
  NVIDIA 语音转写模型（MoE，30B/A4B），基于 NeMo SpeechLM，属音频方向高关注发布。

- **Viggle/Viggle-Remake** — https://huggingface.co/Viggle/Viggle-Remake
  Viggle · 291 赞 · 136,241 下载
  视频编辑模型，主打角色替换与视频到视频改写，同时提供 GGUF 版本。

- **VideoRebirthAI/hyperflow-h3-flash** — https://huggingface.co/VideoRebirthAI/hyperflow-h3-flash
  VideoRebirthAI · 198 赞 · 241,579 下载
  基于 H3 架构的图像+文本到视频模型，提供 diffusers 与 GGUF 两种权重。

- **speridlabs/idol** — https://huggingface.co/speridlabs/idol
  speridlabs · 1,959 赞 · 28,250 下载
  图生 3D 模型（高斯泼溅），Apache-2.0 授权，在 3D 生成方向点赞仅次于大模型。

- **Cactus-Compute/mirage** — https://huggingface.co/Cactus-Compute/mirage
  Cactus-Compute · 157 赞 · 14,615 下载
  支持图生文、目标检测与零样本检测的多模态模型，面向端侧推理场景。

- **Comfy-Org/RelayVSR** — https://huggingface.co/Comfy-Org/RelayVSR
  Comfy-Org · 146 赞 · 91,134 下载
  RelayVSR 的 ComfyUI 单文件版本，归属无条件图像生成任务，属工具链补位发布。

### 🔧 专用模型

- **ccore/Qwen3.5-4B-3D-Coder** — https://huggingface.co/ccore/Qwen3.5-4B-3D-Coder
  ccore · 1,005 赞 · 344,727 下载
  面向 Three.js 3D 代码生成的小模型，同时提供 safetensors 与 GGUF，细分场景下载可观。

- **ccore/Qwen3.5-4B-GLB-3D-Coder** — https://huggingface.co/ccore/Qwen3.5-4B-GLB-3D-Coder
  ccore · 314 赞 · 46,272 下载
  上一款的 GLB 输出变体，聚焦 3D 资产生成代码，属同系列细分迭代。

### 📦 微调与量化

- **DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF** — https://huggingface.co/DavidAU/Qwen3.8-27B-TURBO-Fable-Cold-Fusion-735-882-Heretic-Uncensored-NEO-CODER-MAX-MTP-GGUF
  DavidAU · 2,891 赞 · 1,532,273 下载
  基于 Qwen3.8-27B 的社区微调 GGUF，叠加去审查与编码强化，凭借超长命名与下载量成为榜单现象级条目。

- **SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF** — https://huggingface.co/SC117/Qwen3.8-Flash-Next-GSQ-RCO-abliterated-GGUF
  SC117 · 860 赞 · 4,214,007 下载
  Qwen3.8-Flash-Next 的 abliterated 量化版本，以 421 万下载居全榜第二，反映去审查量化的分发规模。

- **unsloth/Qwen3.8-Flash-Next-GGUF** — https://huggingface.co/unsloth/Qwen3.8-Flash-Next-GGUF
  unsloth · 1,587 赞 · 1,968,774 下载
  Unsloth 出品的官方基座 GGUF 量化，近两百万下载，是 Qwen Flash-Next 本地化的事实入口。

- **Scantist/GLM-5.3-SLIM-GGUF** — https://huggingface.co/Scantist/GLM-5.3-SLIM-GGUF
  Scantist · 1,314 赞 · 13,488 下载
  GLM-5.3 的精简 GGUF 版本，采用 MoE + 神经架构搜索标签，属压缩导向的量化实验。

- **xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic** — https://huggingface.co/xtools-at/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic
  xtools-at · 2,083 赞 · 16,693 下载
  基于 qwen3_5 的去审查社区微调，点赞高但下载有限，随后由 mradermacher 派生量化版。

- **mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF** — https://huggingface.co/mradermacher/DeepSeek-V4-Pro-Qwen3.5-9B-UNCENSORED-heretic-i1-GGUF
  mradermacher · 261 赞 · 290,001 下载
  上一款的 i1 GGUF 量化，下载量约为原版的 17 倍，典型体现“原版出权重、量化版出分发”。

- **mradermacher/gemma-4-31B-it-ARA-heretic-GGUF** — https://huggingface.co/mradermacher/gemma-4-31B-it-ARA-heretic-GGUF
  mradermacher · 205 赞 · 78,183 下载
  Gemma-4-31B 的去审查 GGUF 量化版本，说明去审查微调已扩散到 Qwen 之外的模型家族。

## 生态信号

Qwen 是本期绝对主线：官方 Qwen3.8-27B 登顶，Qwen3.8-Flash-Next 与 Qwen3.5 衍生出多个高下载量化与微调版本，形成“官方基座 → 去审查微调 → GGUF 量化”的三层链条。视频与图像生成（LTX-2.5、FLUX-3、H3 系列）下载量远超纯文本模型。开源权重仍是主流：Kimi、DeepSeek、ERNIE、Nemotron 均以开放权重上架，但真正吸引社区二次分发的是可自由微调的中小基座。量化活动高度集中在 unsloth、mradermacher、DavidAU 等少数发布者，“heretic / uncensored / abliterated”已成为稳定的社区需求标签。

## 值得探索

1. **facebook/sam3** — https://huggingface.co/facebook/sam3
   兼具视频分割与特征提取能力，200 万+ 下载说明其已是视觉管线的基础组件，值得评估替代现有分割方案。

2. **tencent/Qwen3.8-27B-DSpine-b16** — https://huggingface.co/tencent/Qwen3.8-27B-DSpine-b16
   少见的官方投机解码草稿模型发布，体量小、下载量低，但对 27B 级模型推理加速的研究价值高，可先行验证。

3. **speridlabs/idol** — https://huggingface.co/speridlabs/idol
   图生 3D 高斯泼溅模型，Apache-2.0 授权、近 2,000 点赞，是 3D 生成方向少数可直接商用的高关注权重。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*