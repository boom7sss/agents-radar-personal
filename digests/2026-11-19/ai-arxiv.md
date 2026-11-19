# ArXiv AI 研究日报 2026-11-19

> 数据来源: [ArXiv](https://arxiv.org/)（AI、机器学习、视觉、影像与定量生物）| 共 50 篇论文 | 生成时间: 2026-11-19 19:00 UTC

---

# ArXiv AI 研究日报（2026-11-19）

## 1. 今日速览

今日 50 篇投稿中，**与超声直接相关的工作仅 2 篇**：一篇做衰减重建的深度学习辅助全波形反演（DL-assisted FWI，论文 2），一篇做超声引导介入机器人（论文 1）。其余编号看似涉医的工作（论文 3、21、35）分别针对一般医学图像分类、临床预测模型审计与生存分析基准，**均未在超声数据上验证**，本文不将其计入超声去噪、重建或质量评价成果。

就“散斑抑制、自监督或无干净参考去噪、RF/IQ/通道数据与波束形成、结构保真、无参考质量评价”而言，今日**没有直接对应的方法学投稿**，这是今日投稿的一个明显空白，值得记录下来。与当前重点最接近的是图像质量评价与结构保真的间接线索：论文 25 提出预算配对的视觉智能体观测审计，结论是仅凭答案准确率不足以评估“看哪里”与“何时停看”，这与超声重建“不能只看平滑观感”的评估思路同构，但**其本身并非超声工作**。今日主要看点在**机器人、智能体与世界模型**方向（论文 5、24、30）和**注意力架构改造**（论文 40）；通用生成式与表示学习方法（论文 4、11、41）可作为后续迁移到超声域的备选，但目前**均无超声验证**。

## 2. 重点论文

### 🩺 超声相关（今日仅 2 篇，均来自原文）

**Deep-Learning-Assisted Full Waveform Inversion for Attenuation Reconstruction in Ultrasound Computed Tomography**
http://arxiv.org/abs/2611.23553v1
M. Liu, M. L. Oelze | eess.SP, physics.med-ph
核心贡献是把深度学习嵌入全波形反演框架来重建声衰减，作者明确指出衰减比声速更难重建、也更少被研究。这是今日唯一直接涉及**波场级重建**的超声工作，可作为后续评估方向（衰减重建对结构边界与组织定量的影响）的起点。注意：摘要未给出散斑、无参考质量评价或跨设备数据。

**Towards Vacuum-Assisted Robotic Needle Interventions: From Fluid Aspiration to Tissue Biopsy**
http://arxiv.org/abs/2611.24258v1
S. Shabana, L. Nag Laxminarayan Nagesh, M. Vallejo et al. | cs.RO
核心贡献是把胸水抽吸与组织活检统一到同一套真空辅助机器人介入流程中，针对超声引导介入中“定位准、取材弱”的薄弱环节。其价值在于打通了超声图像引导的下游临床动作链；对去噪/重建而言，它的意义是提供明确的**下游任务指标**：取材有效性可作为评价重建质量的外部证据，而非仅比 PSNR/SSIM。

> 说明：论文 3（不均衡医学图像分类损失）、论文 21（LLM 审计临床预测模型）、论文 35（生存分析基准）虽属医学影像或临床 ML，但摘要中**均无超声数据、RF/IQ/通道数据或超声质量评价**，因此不纳入本节，仅在下文补充中列出。

### 🧠 大语言模型（架构、训练、对齐、评估）

**General progress substitutes for specific training data in language models**
http://arxiv.org/abs/2611.24844v1
M. Marosi, P. Antal | cs.CL, cs.AI
关注“数据被有意 withheld 后能力会被延后多久”这一安全问题：作者声称模型的一般性进展可以替代特定的训练数据。对大模型能力治理与训练数据策略具有直接参照价值。

**On-Policy Morphing into Hybrid Attention Models**
http://arxiv.org/abs/2611.24809v1
D. Lan, X. Wang, J. Zheng et al. | cs.CL
把预训练 Transformer 改造成混合注意力（全注意力 + 线性注意力）时，指出 FlashMorph 式流程存在两处 off-policy 不匹配。属于**质量与推理效率折中**的架构改造工作，对已训练模型的低成本结构转换有参考意义。

**Jailbreak Detection on Large Language Models via Contrastive Prototype Structures**
http://arxiv.org/abs/2611.24936v1
Y. Qiu, Y. Li | cs.CL
用对比学习得到的原型表示做越狱检测，不额外训练下游分类器。思路轻量，适合作为部署侧安全检查的可复用组件。

### 🤖 智能体与推理（规划、工具使用、多智能体）

**$Z$-sight: Unifying Vision-Language-Action and Latent World Modeling**
http://arxiv.org/abs/2611.24940v1
J. Ye, Y. Zhao, M. Xu et al. | cs.RO, cs.CV
把 VLA 与生成式潜空间世界模型耦合，试图摆脱视频世界动作模型对重型视频生成器的依赖。是今日机器人与世界模型交叉方向的代表作。

**Kaer: Security-Aware Replanning for Multi-Agent Systems**
http://arxiv.org/abs/2611.24839v1
T. Mallick, E. Rose, M. Laws et al. | cs.MA, cs.LG
指出编排器式多智能体在动态重规划时引入的关键安全漏洞，并提出安全感知的重规划。属于多智能体落地中容易被忽视的攻击面分析。

**WorldRuler: Interactive World Modeling under Configurable Rules**
http://arxiv.org/abs/2611.24869v1
M. Zhai, C. Li, J. Tan et al. | cs.AI
让生成式世界模型遵循用户自定义规则，而非仅复现真实世界行为，用于可定制玩法场景。

**Vibe-Trading: Towards Agent-Native Trading**
http://arxiv.org/abs/2611.24845v1
H. Wu, Z. Li, C. Huang | cs.AI, cs.CL, cs.MA
针对智能体在环境变化下难以保持可靠状态的问题，以金融交易为高代价场景提出 agent-native 方案。可作为评估“有状态智能体”稳健性的参考。

**Ground, Iterate, Trace: Decomposing AI Research Ideation**
http://arxiv.org/abs/2611.24887v1
S. Yu, Q. Zou, J. Y. Lim et al. | cs.CL
用文献检索、迭代与溯源拆解自动化科研想法生成，回答“新提案如何从既有工作中生长出来”。对科研智能体评估设计有方法价值。

### 🔧 方法与框架（新技术、基准、效率）

**Can Programs Replace LLM Judges? Executable Program Judges for Scalable and Efficient Relevance Labeling**
http://arxiv.org/abs/2611.24849v1
E. Agichtein, C. L. A. Clarke, K. Dhole et al. | cs.IR, cs.CL
用可执行程序替代 LLM 做相关性标注，直击 LLM 评审成本高、难以解释、不可复现的问题。若成立，可显著降低检索评测的边际成本。

**Monoculture Robust Learning**
http://arxiv.org/abs/2611.24881v1
L. Cohen, J. Kleinberg, O. Reingold | cs.LG
在 PAC 学习中形式化“单一化稳健性”，针对共享同一训练数据的模型在同一样本上集体失效的算法单一化问题。是今日理论味最重、也最易被误用的概念工具，建议作为评估设计的约束条件来读。

**On Evaluating User Simulators for Interactive Agents**
http://arxiv.org/abs/2611.24892v1
H. Zhou, I.-H. Hsu, L. Chen et al. | cs.LG
追问用户模拟器自身的质量评估框架能否识别真实失败，属于“评估的评估”，对交互式智能体基准的可信度的讨论有普遍意义。

**Cap-and-Track: Optimizing LLM Inference Request Dispatch Across Shifting Capacity**
http://arxiv.org/abs/2611.24891v1
B. Novotny, D. Szeto, C. Wang et al. | cs.LG
在生成长度未知、提供商池容量可变的前提下做异步推理分发，是推理服务效率方向的具体工程方案。

**ShadowTransfer: A Geographic Transfer Benchmark for Overhead Shadow Detection**
http://arxiv.org/abs/2611.24904v1
S. Mittal, R. A. Yeh, S. Ukkusuri | cs.CV
为俯视影像阴影检测建立地理迁移基准，指出既有数据集缺乏跨区域迁移协议。其“跨域迁移评测缺位”的诊断结构，对任何需要跨设备/跨中心稳健性验证的成像任务（包括超声）都有借鉴价值，但**该基准本身针对航空影像，不是超声数据**。

### 📊 应用（垂直领域、多模态）

**Ultimate3D: Teaching Multimodal LLMs 3D Camera-Object Relations by Large-Scale Visual Instruction Data**
http://arxiv.org/abs/2611.24795v1
L. He, Y. Song, R. Xu et al. | cs.CV
针对 MLLM 在物体朝向、视角与镜头类型上判断不准，用大规模视觉指令数据补齐 3D 相机-物体关系理解。

**ReCoCo: From Patches to Compositions for Visual Representation Learning**
http://arxiv.org/abs/2611.24806v1
J. Gutiérrez, S. Zadtootaghaj, J. L. Blanco-Murillo et al. | cs.CV
把视图一致性从图像级推广到局部内容，以组合方式学习稠密特征。属于自监督表征学习中较具迁移潜力的方法，但**无超声验证**。

**Edge-Efficient Joint RAW Image Compression and Restoration for Smart Wearable Devices**
http://arxiv.org/abs/2611.24805v1
Y. Sun, S. Chen, F. Xia | cs.CV
针对紧凑传感器噪声 RAW 图，在算力与功耗受限下做联合压缩与恢复。与“端侧部署 + 原始数据域处理”的关注点一致，但面向穿戴设备相机，**非超声**。

**PrismRestore: A Compact Restoration Toolbox for Agentic Image Restoration**
http://arxiv.org/abs/2611.24915v1
Z. Yu, K. Jiang, J. Cao et al. | cs.CV
从单个冻结的 all-in-one 模型构建可调用恢复动作库，解决智能体式复原需要堆叠多个网络的存储开销。多退化混合场景的组织方式对超声复合退化处理有思路参考，但**未在超声上验证**。

**UltraTex: Aligning Physical Knowledge for High-Fidelity PBR Texture Generation**
http://arxiv.org/abs/2611.24941v1
J. Bao, X. Ma, H. Li et al. | cs.CV
从单张参考图生成 PBR 纹理贴图，处理材质、反射率与光照耦合带来的歧义。属于生成建模方向，与超声无关，此处仅作补充。

> 医学影像与临床相关补充（**非超声，不构成超声证据**）：DAL 不均衡医学图像分类 http://arxiv.org/abs/2611.24597v1 ；LLM 黑箱临床模型审计 http://arxiv.org/abs/2611.24877v1 ；生存分析基准的模型选择与数据制度影响 http://arxiv.org/abs/2611.24837v1 ；表格 XAI 中原型方法的价值 http://arxiv.org/abs/2611.24831v1 。

## 3. 研究趋势信号

今日投稿显示，“评估本身”正在成为独立研究对象：论文 25（观测预算审计）、15（用户模拟器评估）、49（可执行程序评审）都在质疑现有评价指标能否反映真实能力，这与超声领域“不能只比较平滑观感或 PSNR/SSIM”的诉求方向一致，但目前尚无可直接迁移的超声验证。另一信号是**跨域/跨区域迁移评测的缺位被明确点名**（论文 13），可类比为超声跨设备稳健性评测尚未建立协议。此外，世界模型与 VLA 的融合（论文 5、24）、混合注意力架构改造（论文 40）、端侧原始数据域联合压缩与恢复（论文 42）均可作为超声重建端侧化的远期参考，但均无超声证据。需说明：今日**散斑抑制、自监督/无干净参考去噪、RF/IQ/通道数据与波束形成、无参考质量评价均无直接投稿**，趋势判断样本不足。

## 4. 值得精读

1. **Deep-Learning-Assisted Full Waveform Inversion for Attenuation Reconstruction in Ultrasound Computed Tomography**（http://arxiv.org/abs/2611.23553v1）——今日唯一直接针对超声重建的方法学论文，且聚焦常被忽略的衰减参数；精读重点应放在其重建结果是否提供结构保真与跨设置稳健性的证据，而非重建误差数值本身。
2. **$Z$-sight: Unifying Vision-Language-Action and Latent World Modeling**（http://arxiv.org/abs/2611.24940v1）——代表了今日最集中的研究方向（机器人基础模型 + 潜空间世界模型），且明确针对重型视频生成器的成本问题，方法取舍清晰，适合作为该路线的对照读物。
3. **Can Programs Replace LLM Judges?**（http://arxiv.org/abs/2611.24849v1）与 **On Evaluating User Simulators for Interactive Agents**（http://arxiv.org/abs/2611.24892v1）任选其一——两者都直接回答“自动评价是否可信、是否可复现”，而超声质量评价的可信度问题与之同构；在当前超声域缺少无参考质量评价投稿的情况下，这类工作提供了评估设计层面的可用参照。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*