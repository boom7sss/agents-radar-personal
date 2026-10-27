# Hugging Face 热门模型日报 2026-07-27

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-27 03:42 UTC

---

好的，以下是为您生成的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 | 2026-07-27**

#### **今日速览**

本周 Hugging Face 生态呈现“量价齐升”态势：**zai-org/GLM-5.2** 凭借 **4,481** 周点赞登顶榜首，验证了国产 MoE 大模型的强劲号召力；**百度**的 OCR 模型 **Unlimited-OCR** 下载量突破百万，成为本周最“实用”的工具；**Qwen3.6** 系列及其大量“Uncensored”社区微调版本（如 HauhauCS、LuffyTheFox）形成密集发布潮，表明社区对齐与安全讨论仍在升温。此外，**Microsoft** 推出了 **Mage-Flow** 图像生成与编辑套件，**NVIDIA** 带来 **Cosmos3-Edge**，AI 生成工具链正从“单一模型”向“编辑与流水线”阶段深化。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

- **zai-org/GLM-5.2**  
  作者: zai-org | 点赞: 4,481 | 下载: 827,191  
  👉 基于 MoE-DSA 架构的国产大模型，凭借极高的人气与低门槛推理成本成为本周绝对焦点。

- **poolside/Laguna-S-2.1**  
  作者: poolside | 点赞: 704 | 下载: 56,445  
  👉 文本生成主力模型，由企业级 AI 公司发布，其 NVFP4 及 GGUF 变体同步入榜，呈现工业级部署生态。

- **upstage/Solar-Open2-250B**  
  作者: upstage | 点赞: 600 | 下载: 3,305  
  👉 韩国 Upstage 的 250B 参数开源大模型，虽下载量不高，但点赞活跃，代表非中美阵营的高端开源力量。

- **Nanbeige/Nanbeige4.2-3B**  
  作者: Nanbeige | 点赞: 450 | 下载: 14,049  
  👉 轻量级 LLM（3B），适合资源受限场景，在“小模型”类别中表现突出。

- **prism-ml/Ternary-Bonsai-27B-gguf**  
  作者: prism-ml | 点赞: 1,052 | 下载: 631,970  
  👉 采用 2-bit “三进制”量化的 27B 模型，下载量极高，验证了极致量化方案在社区中的超高需求。

- **prism-ml/Bonsai-27B-gguf**  
  作者: prism-ml | 点赞: 652 | 下载: 2,187,304  
  👉 同系列的 1-bit 量化版本，下载量超两百万，成为本周下载冠军，展示极致压榨模型规模的社区偏好。

- **bottlecapai/ThinkingCap-Qwen3.6-27B**  
  作者: bottlecapai | 点赞: 554 | 下载: 27,823  
  👉 基于 Qwen3.6 的多模态推理增强版，具备视觉-语言联合理解能力。

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

- **thinkingmachines/Inkling**  
  作者: thinkingmachines | 点赞: 1,581 | 下载: 34,511  
  👉 多模态对话模型，主打“图片+文本”到文本的交互式理解，是本周新兴的创业公司作品。

- **microsoft/Mage-Flow**  
  作者: microsoft | 点赞: 339 | 下载: 1,375  
  👉 微软推出的文本到图像生成模型，标志着在图像生成领域的持续发力。

- **owensong/Inflect-Micro-v2**  
  作者: owensong | 点赞: 182 | 下载: 298  
  👉 轻量级文本到语音模型，主打 CPU 与边缘设备部署，是**唯一上榜的 TTS 模型**。

- **nvidia/Cosmos3-Edge**  
  作者: nvidia | 点赞: 125 | 下载: 32,700  
  👉 NVIDIA 的边缘端多模态宇宙模型，体现大厂向端侧 AI 的渗透趋势。

- **microsoft/Mage-Flow-Edit-Turbo**  
  作者: microsoft | 点赞: 90 | 下载: 946  
  👉 Mage-Flow 的编辑特化版，支持“按指令修图”，代表生成工具进化为编辑工具。

##### 🔧 专用模型（代码、数学、医疗、嵌入）

- **baidu/Unlimited-OCR**  
  作者: baidu | 点赞: 3,220 | 下载: 2,593,460  
  👉 百度开源的高性能 OCR 模型，适用于不限长度的字符识别，下载量遥遥领先，体现强大的实用价值。

- **Kwaipilot/KAT-Coder-V2.5-Dev**  
  作者: Kwaipilot | 点赞: 199 | 下载: 3,764  
  👉 基于 Qwen3.5 MoE 的代码生成模型，定位开发者场景。

- **moonshotai/Kimi-K2.7-Code**  
  作者: moonshotai | 点赞: 1,298 | 下载: 730,129  
  👉 月之暗面推出的代码专用版本，采用压缩张量技术，下载量与热度非常高，展现出极强的代码任务竞争力。

- **ATH-MaaS/OvisOCR2**  
  作者: ATH-MaaS | 点赞: 314 | 下载: 35,562  
  👉 基于 Qwen3.5 的 OCR 增强版，与百度模型形成竞争，共同推高 OCR 赛道热度。

- **openbmb/MiniCPM-RobotManip** & **openbmb/MiniCPM-RobotTrack**  
  作者: openbmb | 点赞: 177 / 130 | 下载: 643 / 398  
  👉 机器人操作与跟踪模型（VLA），代表 AI 从“软件对话”走向“物理世界交互”的前沿方向。

- **Motif-Technologies/Motif-3-Beta**  
  作者: Motif-Technologies | 点赞: 193 | 下载: 2,400  
  👉 **特征提取**方向的新秀，用于嵌入与相似度搜索。

- **fdtn-ai/antares-1b**  
  作者: fdtn-ai | 点赞: 187 | 下载: 5,978  
  👉 主打**安全**的 1B 参数混合专家模型，体现 AI 安全垂直优化趋势。

##### 📦 微调与量化（社区微调、GGUF、AWQ）

- **DavidAU/Qwen3.6-27B-Fable-Fusion-711-Uncensored-Heretic-NM-DAU-NEO-MAX-MTP-GGUF**  
  作者: DavidAU | 点赞: 644 | 下载: 552,026  
  👉 众多“Uncensored” Qwen3.6 微调版中的代表，名称极长，下载量极高，反映社区对“无审查”模型的旺盛需求。

- **HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive**  
  作者: HauhauCS | 点赞: 3,114 | 下载: 1,927,138  
  👉 同样基于 Qwen3.6 的“激进”风格微调版，大受欢迎，下载逼近 200 万。

- **LuffyTheFox/Qwen3.6-35B-A3B-Uncensored-Genesis-Hermes-V5-GGUF**  
  作者: LuffyTheFox | 点赞: 172 | 下载: 73,642  
  👉 融合 Hermes 风格的 GGUF 量化版，属于同一“Uncensored”生态的分支。

- **empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF**  
  作者: empero-ai | 点赞: 2,480 | 下载: 1,410,054  
  👉 基于 Qwen3.5 的推理增强版，GGUF 量化后下载量超 140 万，代表对“推理能力”定量化部署的强需求。

- **unsloth/Laguna-S-2.1-GGUF** & **poolside/Laguna-S-2.1-GGUF** / **poolside/Laguna-S-2.1-NVFP4**  
  作者: unsloth / poolside | 点赞: 143~203 | 下载: 56k~138k  
  👉 Laguna 模型的完整量化生态链，包含 GGUF 和 NVFP4，体现基础模型与量化工具的深度绑定。

- **conradlocke/krea2-identity-edit**  
  作者: conradlocke | 点赞: 544 | 下载: 0  
  👉 针对 Krea-2 模型的身份编辑 LoRA，虽然上传到平台但下载量暂为 0，可能是刚发布或社区展示用途。

- **baseten/GLM-5.2-Vision-NVFP4**  
  作者: baseten | 点赞: 114 | 下载: 2,033  
  👉 GLM-5.2 的多模态量化版，由推理平台 Baseten 提供，实现“大模型”到“可部署”的一步到位。

- **microsoft/Fara1.5-27B**  
  作者: microsoft | 点赞: 110 | 下载: 1,225  
  👉 基于 Qwen3.5 的微软多模态**计算机使用**模型（Computer-Use），面向 UI 自动化场景。

---

#### **生态信号**

1. **模型家族态势**：
   - **GLM 系列**（zai-org）凭借最高点赞数形成“榜首独大”效应，国产大模型社区影响力与日俱增。
   - **Qwen3.5/3.6** 家族成为本周最多样的生态，从基础模型到各种“Uncensored”、“Code”、“推理增强”版本应有尽有，是当之无愧的“社区最活跃底座”。
   - **Poolside Laguna** 形成“基础模型+量化（GGUF/NVFP4）+ 第三方工具链”的完整闭环，代表企业基础模型+开源社区工具的成功范式。

2. **开源 vs 闭源**：
   - 本周热点全线开源，且头部模型（GLM、moonshotai Kimi、百度 Unlimied-OCR）均来自中国企业，显示中国开源力量在全球权重持续攀升。
   - 量化与微调版本下载量远超基础模型，说明“民主化部署”是当前增长的核心引擎。

3. **值得注意的微调与量化活动**：
   - **“Uncensored”主题**形成一股潮流，多个 Qwen 变体主打“无审查”，与主流对齐运动形成张力，值得行业关注。
   - **GGUF 与 NVFP4** 成为量化方法的主流，前者由 llama.cpp 生态带动，后者由 NVIDIA vLLM 支持，分别占据本地端与云端量化市场。

---

#### **值得探索**

1. **zai-org/GLM-5.2**  
   🔗 https://huggingface.co/zai-org/GLM-5.2  
   **理由**：周点赞冠军（4,481），且下载量接近百万，代表了国产 MoE 模型在社区中的最高热度，是研究混合专家模型落地路线的必看模型。

2. **moonshotai/Kimi-K2.7-Code**  
   🔗 https://huggingface.co/moonshotai/Kimi-K2.7-Code  
   **理由**：月之暗面在代码领域的最新力作，压缩张量技术值得关注，下载量超 73 万，适合深入分析其对代码任务（如生成、补全、修复）的影响。

3. **microsoft/Mage-Flow-Edit-Turbo**  
   🔗 https://huggingface.co/microsoft/Mage-Flow-Edit-Turbo  
   **理由**：代表图像生成领域从“文生图”向“精准编辑”的范式转变，且由微软官方发布，是了解未来多模态工具链趋势的重要切入点。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*