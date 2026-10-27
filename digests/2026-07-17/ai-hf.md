# Hugging Face 热门模型日报 2026-07-17

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-17 03:19 UTC

---

好的，作为AI模型生态分析师，以下是2026年7月17日的《Hugging Face 热门模型日报》。

---

### **Hugging Face 热门模型日报 (2026-07-17)**

#### **今日速览**

今日Hugging Face趋势榜呈现出“推理与效率并重”的特征。基于Qwen 3.5/3.6的微调模型（特别是“角色扮演/叙述”风格）和它们的GGUF量化版持续霸榜，显示出社区对高性能基座模型的旺盛需求和定制化热情。值得注意的是，以`prism-ml`为代表的“极端量化”模型（1-bit、2-bit）下载量巨大，表明端侧部署和资源受限场景的需求强烈。同时，腾讯的`Hy3`和百度的`Unlimited-OCR`等大厂模型也获得高关注，视频生成赛道出现新玩家（如Wan-AI的`Wan-Dancer-14B`）。

---

#### **热门模型**

##### 🧠 语言模型（LLM、对话模型、指令微调）

*   **`prism-ml/Ternary-Bonsai-27B-gguf`**
    *   作者: prism-ml | 👍 610 | ⬇️ 74,007
    *   一句话说明：一个基于“三元”（Ternary）权重的27B模型GGUF版本，代表了在保持模型质量的同时追求极端压缩的前沿探索。
    *   [模型链接](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)

*   **`zai-org/GLM-5.2`**
    *   作者: zai-org | 👍 4,030 | ⬇️ 513,061
    *   一句话说明：智谱AI最新一代MoE架构的基座模型，本周点赞数最高，标志着国产开源模型社区的强劲势头。
    *   [模型链接](https://huggingface.co/zai-org/GLM-5.2)

*   **`tencent/Hy3`**
    *   作者: tencent | 👍 813 | ⬇️ 11,849
    *   一句话说明：腾讯混元大模型的最新版本（Hy3），性能强劲且引发社区高关注，其GGUF版本也迅速上榜。
    *   [模型链接](https://huggingface.co/tencent/Hy3)

*   **`InternScience/Agents-A1`**
    *   作者: InternScience | 👍 568 | ⬇️ 33,400
    *   一句话说明：一个基于Qwen 3.5 MoE的Agent专用模型，专为工具调用和任务执行优化，反映了Agent生态的持续火热。
    *   [模型链接](https://huggingface.co/InternScience/Agents-A1)

*   **`deepreinforce-ai/Ornith-1.0-35B-GGUF`**
    *   作者: deepreinforce-ai | 👍 902 | ⬇️ 1,785,575
    *   一句话说明：一个35B模型的GGUF量化版，凭借极高的下载量成为实用主义者的热门选择，平衡了性能与部署成本。
    *   [模型链接](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)

##### 🎨 多模态与生成（图像、视频、音频、文本到X）

*   **`empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF`**
    *   作者: empero-ai | 👍 2,239 | ⬇️ 2,042,670
    *   一句话说明：基于Qwen 3.5的视觉-语言模型，融合“Claude Mythos”风格，GGUF格式使其在多模态推理和故事叙述应用中大受欢迎。
    *   [模型链接](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)

*   **`HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive`**
    *   作者: HauhauCS | 👍 2,788 | ⬇️ 2,328,315
    *   一句话说明：一个极具话题性的、取消了内容限制（Uncensored）的Qwen 3.6 MoE视觉模型GGUF版本，下载量和点赞数均极高。
    *   [模型链接](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)

*   **`baidu/Unlimited-OCR`**
    *   作者: baidu | 👍 2,011 | ⬇️ 1,852,722
    *   一句话说明：百度推出的强OCR模型，在海量下载和点赞中证明其在文档解析、图像文字识别等垂直场景的优异表现。
    *   [模型链接](https://huggingface.co/baidu/Unlimited-OCR)

*   **`Wan-AI/Wan-Dancer-14B`**
    *   作者: Wan-AI | 👍 92 | ⬇️ 1,884
    *   一句话说明：专注于“图像到视频”生成的新模型，特别是舞蹈动作生成，为视频生成社区注入了新活力。
    *   [模型链接](https://huggingface.co/Wan-AI/Wan-Dancer-14B)

*   **`Alissonerdx/LTX-Best-Face-ID`**
    *   作者: Alissonerdx | 👍 168 | ⬇️ 0
    *   一句话说明：一个用于LTX视频模型的LoRA，专注于在生成视频中保持人物身份一致性，代表了视频编辑的精细化趋势。
    *   [模型链接](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)

##### 🔧 专用模型（代码、数学、医疗、嵌入）

*   **`Cactus-Compute/needle`**
    *   作者: Cactus-Compute | 👍 249 | ⬇️ 733
    *   一句话说明：一个基于JAX框架、针对函数调用和工具使用优化的专用模型，体现了对Agent能力的专项强化趋势。
    *   [模型链接](https://huggingface.co/Cactus-Compute/needle)

*   **`froggeric/Qwen-Fixed-Chat-Templates`**
    *   作者: froggeric | 👍 925 | ⬇️ 0
    *   一句话说明：虽无下载量，但以高点赞数上榜，它修复了Qwen模型的对话模板兼容性问题，是社区维护基础设施的典型代表。
    *   [模型链接](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)

##### 📦 微调与量化（社区微调、GGUF、AWQ）

*   **`empero-ai/Qwythos-9B-v2-GGUF`** / **`empero-ai/Qwythos-9B-v2`**
    *   作者: empero-ai | 👍 150 (GGUF版) | ⬇️ 89,107 (GGUF版)
    *   一句话说明：Qwythos系列的第二代，提供了GGUF和原始格式，是社区围绕Qwen 3.5进行风格化微调的热门范例。
    *   [GGUF版链接](https://huggingface.co/empero-ai/Qwythos-9B-v2-GGUF) [原始版链接](https://huggingface.co/empero-ai/Qwythos-9B-v2)

*   **`unsloth/Qwen3.6-27B-NVFP4`**
    *   作者: unsloth | 👍 216 | ⬇️ 1,712,974
    *   一句话说明：Unsloth推出的NVIDIA FP4量化版本，代表了在NVIDIA硬件上实现极致推理效率的最新进展，下载量惊人。
    *   [模型链接](https://huggingface.co/unsloth/Qwen3.6-27B-NVFP4)

*   **`yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF`**
    *   作者: yuxinlu1 | 👍 1,208 | ⬇️ 506,068
    *   一句话说明：一个基于Gemma 4的Agent指令微调模型的GGUF版，专注于“终端编程”和Agent能力，下载量证明其巨大需求。
    *   [模型链接](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)

*   **`jlnsrk/GLM-5.2-colibri-int4`**
    *   作者: jlnsrk | 👍 121 | ⬇️ 2,621
    *   一句话说明：针对GLM-5.2的INT4量化版本，旨在让这个强大的MoE模型能够在CPU上运行，拓宽了其应用场景。
    *   [模型链接](https://huggingface.co/jlnsrk/GLM-5.2-colibri-int4)

---

#### **生态信号**

*   **Qwen 生态扩张与“角色驱动”微调**：Qwen 3.5/3.6 无疑是本周的“基座之王”。社区围绕其展开了大量“角色扮演”（如Mythos、Fable、Uncensored）和“指令优化”（如Agent相关）的微调，这表明强大的基座模型已催生出成熟的文化和创意定制生态。
*   **量化进入“深水区”**：`prism-ml` 的1-bit和Ternary（2-bit）权重模型下载量巨大，同时Unsloth的NVFP4和`GLM-5.2-colibri-int4`等方案涌现。这显示社区正积极寻求在边缘设备或低算力环境部署强模型，量化技术的“极限竞赛”已经开始。
*   **视频生成赛道的新老面孔**：腾讯`Hy3`和Wan-AI的`Wan-Dancer-14B`的同时上榜，表明大厂与新锐团队都在视频生成领域投入重兵。结合LTX Video系列LoRA的涌现，视频生成正从“能否生成”快速转向“精细化控制与特定场景应用”。
*   **大厂权重开源保持吸引力**：无论是百度的OCR，还是智谱的GLM、腾讯的混元，它们在总榜上依然占据重要位置。开源权重依然是建立技术影响力、构建开发者生态的有效手段。

---

#### **值得探索**

1.  **`yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF`**：它是“Agent”与“代码生成”趋势的结合体。如果你想研究如何利用强大的基座模型（Gemma 4）进行专业的Agent任务微调，并追求本地化高效部署，这个模型是绝佳的研究对象。其高下载量也证明了其实际价值。

2.  **`empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF`**：作为本周的“明星模型”之一，它完美诠释了“强大基座 + 创意风格微调 = 社区爆款”的模式。对于希望了解如何利用Qwen进行高质量“角色/叙事”风格微调的用户，这个模型值得深入分析其训练数据和架构。

3.  **`Wan-AI/Wan-Dancer-14B`**：在视频生成领域，这是一个值得注意的新方向。如果你对从静态图像生成动态舞蹈动作感兴趣，可以探索这个模型，它可能代表了视频生成中一个更细分、更具创造性的应用前景。

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*