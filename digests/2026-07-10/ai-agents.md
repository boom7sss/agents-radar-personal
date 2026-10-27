# OpenClaw 生态日报 2026-07-10

> Issues: 498 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-10 15:58 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的OpenClaw仓库数据，我将为您呈上2026年7月10日的项目动态日报。

---

## OpenClaw 项目动态日报 | 2026-07-10

### 1. 今日速览

今日项目活跃度极高，社区参与热情持续高涨。过去24小时内，项目累积收到近500条Issue与PR更新，PR待合并数量（394）是已合并/关闭数量（106）的近4倍，社区贡献提交活跃，但维护者审核压力巨大。社区反馈主要集中在**Agent任务完成的可靠性**（如子任务静默丢失、消息投递失败）、**关键资源泄露**（如网关内存泄漏）以及**用户体验问题**（如工具输出异常、配置复杂度高）上。尽管无新版本发布，但社区提交了大量旨在解决现存Bug和提升稳定性的修复PR，项目健康度处于“**高度活跃但稳定性挑战严峻**”的状态。

### 2. 版本发布

- **无**

### 3. 项目进展

今日没有高关注度（评论数多）的重要Pull Request被合并。大量开放的PR（如 `#103515` 修复执行审批竞态，`#103390` 修复Git工作树孤儿问题）正处于待审核或等待贡献者补充信息的状态。这表明项目维护团队正在进行重要的代码审查和决策，但核心功能的稳定性和安全性修复尚未进入主分支，社区对新修复的落地翘首以盼。

### 4. 社区热点

今日讨论最热烈的Issues反映了社区对**核心功能稳定性**的深切担忧：

- **[Issue #44925] Subagent completion silently lost** (评论: 21): 帖子详细描述了子Agent在完成任务后，结果可能因多种原因（如超时、资源清理、网络抖动）被**静默丢弃**且没有任何重试或通知机制。这是对Agent编排可靠性的重大挑战，社区对此表达了高度关切。 [链接](https://github.com/openclaw/openclaw/issues/44925)
- **[Issue #99241] Tool outputs render as unreadable images** (评论: 18): 用户反馈，尤其是在处理包含ANSI转义码的长时间运行任务时，工具的输出结果会渲染成一张图片附件，导致Agent自身也无法读取其中的文本信息，形成了“**工具输出的黑洞**”。 [链接](https://github.com/openclaw/openclaw/issues/99241)
- **[Issue #91588] Critical: Gateway Memory Leak** (评论: 15): 一个被标记为P0的严重内存泄漏问题，网关进程的RSS内存占用在数天内从350MB飙升至15.5GB，最终导致OOM崩溃并反复重启。该问题直接影响了生产环境的可用性。 [链接](https://github.com/openclaw/openclaw/issues/91588)

**分析**：社区热点清晰地指向了**工程化与产品化**的核心矛盾。用户已经完成了从“跑通Demo”到“稳定使用”的阶段，对Agent的可靠性、资源的可管理性以及错误的可观测性提出了刚性要求。**“静默失败”**（Silent Failure）是当前最大的社区痛点，它破坏了用户对Agent的信任基础。

### 5. Bug 与稳定性

今日报告的Bug数量众多，严重程度从P0（崩溃级）到P2（行为异常）不等。以下为按严重程度排列的关键问题：

| 严重程度 | 问题编号 | 摘要 | 修复PR状态 |
| :--- | :--- | :--- | :--- |
| **P0 崩溃级** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关进程RSS内存从350MB泄漏至15.5GB，导致OOM崩溃循环。 | 无新修复PR |
| **P1 阻塞级** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子Agent完成结果在超时等情况下静默丢失，无重试/通知。 | 无新修复PR |
| **P1 阻塞级** | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出（特别是ANSI-heavy）被渲染成图片，Agent无法读取。 | 无新修复PR |
| **P1 阻塞级** | [#102175](https://github.com/openclaw/openclaw/issues/102175) | 回归Bug：Embedded模式下Prompt Cache连续性在特定事件后中断。 | 无新修复PR |
| **P1 阻塞级** | [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp会话在长模型调用期间停滞，导致消息丢失。 | 有开放PR (`linked-pr-open`) |
| **P1 阻塞级** | [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth刷新成功，但Cron/心跳任务仍因10秒超时而失败。 | 无新修复PR |
| **P1 阻塞级** | [#49876](https://github.com/openclaw/openclaw/issues/49876) | Cron任务在工具调用失败后会输出**编造的“幻觉”内容**，而非失败信息。 | 无新修复PR |
| **P2 严重级** | [#45740](https://github.com/openclaw/openclaw/issues/45740) | 安全漏洞：`gh-issues` Skill将未经处理的Issue正文直接注入子Agent提示，存在注入风险。 | 无新修复PR |
| **P2 严重级** | [#7722](https://github.com/openclaw/openclaw/issues/7722) | 功能请求/配置缺陷：配置文件中的文件系统路径限制功能 (`tools.fileAccess`) 未能生效。 | 无新修复PR |

**总结**：稳定性问题集中爆发，**内存泄漏、任务静默失败、模型幻觉输出**是三大核心风险。值得注意的是，多个P1级Bug和关键安全/功能漏洞目前仍**没有任何关联的修复PR**，这表明社区贡献者可能受限于问题复现难度或对核心架构的了解不足，维护者团队的介入可能迫在眉睫。

### 6. 功能请求与路线图信号

用户对功能的请求已从“可用”转向“**好用**”和“**可管理**”：

- **增强交互与控制**：`[Feature] Slack Block Kit support` (#12602)，`[Feature] config option to suppress sub-agent announce` (#8299)，`Feature request: Streaming TTS pipeline for voice calls` (#8355)。这些请求旨在让Agent在特定渠道上提供更专业、更流畅的交互体验。
- **提升安全与隔离**：`[Feature]: Per-agent memory-wiki vault configuration` (#63829，已关闭，暗示已有解决方案或方向)，`Feature Request: Filesystem Sandboxing Config` (#7722)。用户对多Agent环境下的数据隔离和系统安全有了更高要求。
- **运维与可观测性**：`Feature: config option to route gateway lifecycle warnings to a dedicated channel` (#45565)，`Feature: `session.resetPrompt` — configurable session startup message` (#45501)。这表明用户（特别是运维人员）希望将系统级事件与用户对话隔离开，并拥有更精细的会话控制能力。

**路线图信号**：今日有PR `#103723` 提交以支持 Claude Haiku 4.5 模型。这表明项目在跟随LLM生态演进，快速集成新模型。功能请求多处于“needs-product-decision”阶段，说明项目团队仍在权衡优先级，尚未做出明确的部署计划。

### 7. 用户反馈摘要

从Issue的摘要与互动中，可以提炼出用户的典型痛点：

- **“不信任感”**：用户频繁遭遇“静默失败”、“幻觉输出”、“无响应”等问题，导致对Agent的能力产生不信任。例如，抱怨“Cron任务告诉我一切都好，但实际上工具调用全部失败并生成了假数据”（#49876）。
- **“调试与排错困难”**：当出现问题时，用户难以定位根因。例如，“代理行为异常，但日志里没有任何错误信息”（#44925），“打开控制台全是CSP错误，但我们不知道如何修复”（#78362）。
- **“配置复杂度与稳定性冲突”**：一些用户尝试进行复杂的配置（如多实例、自定义Sandbox），极易触发意想不到的边界问题，如“容器名称冲突”（#51363）、“嵌套目录生成”（#45765）。
- **“核心功能不可靠”**：用户对**消息传递**和**会话状态**的可靠性抱怨最多，如“消息永远未送达”、“会话卡死”、“历史记录混乱”。这表明项目的消息队列和状态管理机制存在薄弱环节。

**用户满意点**：相对较少在问题中出现，但部分用户通过点赞（如#63829获得了10个👍）表达了对**多Agent隔离配置**等先进功能的强烈需求，这表明用户认可项目的潜力，但对当前的稳定性和成熟度感到沮丧。

### 8. 待处理积压

以下为长期未解决，但影响广泛或严重的重要问题，需提醒维护者重点关注：

- **[Issue #91588] Critical: Gateway Memory Leak** (`P0`): **项目中最紧急的问题**，威胁所有生产实例的稳定运行，至今无修复PR。 [链接](https://github.com/openclaw/openclaw/issues/91588)
- **[Issue #7722] Feature Request: Filesystem Sandboxing Config** (`P2`, 5个月未关闭): 一个被高频点赞（4👍）的关键安全功能，但一直处于停滞状态，社区已多次询问进展。 [链接](https://github.com/openclaw/openclaw/issues/7722)
- **[Issue #12602] [Feature]: Slack Block Kit support for agent messages** (`P2`, 5个月未关闭): 一个呼声很高且评论活跃的功能，长期“needs-product-decision”，社区期待项目能给出明确答复。 [链接](https://github.com/openclaw/openclaw/issues/12602)
- **[Issue #44431] Browser tool: 7 improvements from real-world automation field test** (`P2`, 4个月未关闭): 提供了基于大量实践得出的详细改进方案，但至今未有维护者或PR跟进，资源投入与用户反馈之间存在较大差距。 [链接](https://github.com/openclaw/openclaw/issues/44431)

---

## 横向生态对比

好的，作为一名专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我将基于您提供的 2026 年 7 月 10 日的各项目动态，为您呈上一份深入的横向对比分析报告。

---

### **AI 智能体与个人 AI 助手开源生态全景分析报告 (2026-07-10)**

#### **1. 生态全景**

2026年7月10日，个人 AI 助手/自主智能体开源生态呈现出 **“高产高需，但稳定性承压”** 的典型特征。社区已经从“跑通Demo”的热情期，全面进入对 **可靠性、安全性和产品化成熟度** 的严苛检验期。项目普遍存在 PR 积压（如 OpenClaw 394个待合并PR），表明社区贡献意愿极高，但核心维护者的审查资源成为瓶颈。在技术方向上，生态正从单一的 LLM 对话接口，向包含 **任务编排、多模态交互、安全沙箱、跨平台集成** 的复杂工程化平台演进。**“静默失败”**（Silent Failure）和 **“上下文管理”** 成为跨项目的两大核心痛点，直接挑战着用户对智能体的信任基础。

#### **2. 各项目活跃度对比**

| 项目名称 | 今日活跃 Issues | 今日 PR 状态 (待合并/已合并) | 版本发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | ~500 (更新) | 394 / 106 | 无 | 高度活跃，但稳定性挑战严峻，维护者审核压力巨大。 |
| **NanoBot** | 9 | 29 / 14 | 无 | 良好，社区贡献密集，修复与功能开发并行。 |
| **Hermes Agent** | 31 | 50 / 0 | 无 | 高度活跃但“高产低效”，交付管道严重阻塞，无任何 PR 合并。 |
| **PicoClaw** | 5 | 19 / 3 | 无 | 高热提交、低效合并，稳定性与功能完善需求突出。 |
| **NanoClaw** | 7 | 17 / 3 | 无 | 功能增强与安全加固并行，但待合并 PR 积压。 |
| **IronClaw** | 27 | 30 / 20 | 无 | 极高活跃度，核心团队驱动的密集 Bug Bash 与质量冲刺。 |
| **LobsterAI** | 4 (活跃) | 7 / 11 | 无 | 活跃，迭代节奏快，聚焦关键 Bug 与协同工作区优化。 |
| **CoPaw (QwenPaw)** | 21 | 21 / 26 | **v2.0.0 (Stable)** | 极高活跃度，重大里程碑发布，进入密集修复期。 |
| **ZeroClaw** | ~44 (更新) | 暂未明确数字 | 无 | 极高活跃度，密集开发与反馈周期，问题驱动迭代。 |
| **NullClaw** | 2 (新开) | 0 / 0 | 无 | 相对平静，但暴露了安全与稳定性隐患。 |
| **TinyClaw / ZeptoClaw** | 0 | 0 / 0 | 无 | 无活动，处于休眠状态。 |
| **Moltis** | 0 | 1 / 0 | 无 | 平稳偏低，唯一活性是跟进新模型支持。 |

#### **3. OpenClaw 在生态中的定位**

- **优势与核心定位**：作为“核心参照”项目，OpenClaw 在社区规模、问题讨论深度和代码复杂度上均处于生态绝对领先地位。它是整个生态的“基础设施”和“功能风向标”，其他项目（如 NanoClaw, PicoClaw, ZeroClaw）在功能和设计上多有参考其架构。
- **技术路线差异**：OpenClaw 代表着一种 **“全能型”** 路线，追求极致的扩展性和功能覆盖（如多 Agent 编排、复杂工具链、丰富渠道集成）。相比之下，NanoBot 更专注于 **“轻量化与易用性”**，Hermes Agent 强调 **“本地部署与前沿模型集成”**，而 CoPaw 则基于 **AgentScope 2.0 进行了一次重大的架构迁移**。
- **社区规模对比**：OpenClaw 的社区量级（日均数百 Issue/PR 交互）远超其他项目（日均数十条）。这种规模带来了丰富的贡献和反馈，但也带来了更严重的维护者审查瓶颈（394个待合并PR是生态之最），以及由此引发的“静默失败”等社区痛点在其身上表现最为突出。

#### **4. 共同关注的技术方向**

多个项目不约而同地面临并试图解决以下技术难题，是当前领域的核心攻关方向：

1.  **任务编排的可靠性与可观察性**：
    - **涉及项目**：OpenClaw, NanoBot, NanoClaw, ZeroClaw
    - **具体诉求**：解决**子任务结果静默丢失**（OpenClaw #44925）、**任务被幻觉输出替代**（OpenClaw #49876）、**消息被静默丢弃**（NanoClaw #2995）、**Cron作业死锁**（Hermes #62163）、**长时间多工具调用后通用失败**（IronClaw #5945）。核心目标是杜绝“黑盒”行为，确保任务可追踪、结果可预期。

2.  **上下文管理与 Token 预算的精确性**：
    - **涉及项目**：OpenClaw, Hermes Agent, ZeroClaw, NanoBot
    - **具体诉求**：解决**上下文压缩崩溃**（Hermes #58317）、**向本地模型发送超大 Prompt**（Hermes #61265）、**Token 预算估算不准导致截断**（ZeroClaw #8840）、**Ollama 因未利用缓存导致性能退化**（NanoBot #4867）。目标是实现高效、准确、强健的上下文窗口利用。

3.  **模型供应商集成与接口兼容性**：
    - **涉及项目**：NanoBot, Hermes Agent, ZeroClaw, Moltis
    - **具体诉求**：**Ollama 响应丢失**（Hermes #61850, NanoBot #4867）、**阿里云 Qwen 连接失败**（ZeroClaw #6558）、**Gemini 原生调用失败**（ZeroClaw #8934）、**Claude Haiku 4.5 支持**（OpenClaw #103723）、**GPT-5.6 支持**（Moltis #1146）。这说明多模型、多供应商的兼容性和稳定性是产品化的关键门槛。

4.  **安全与权限控制**：
    - **涉及项目**：NanoBot, NanoClaw, NullClaw, OpenClaw
    - **具体诉求**：**审批流程参数走私**（NanoClaw #2827）、**命令缺乏授权**（NanoBot #4776）、**共享 Token 导致数据跨用户复用**（NullClaw #974）、**外部链接注入风险**（OpenClaw #45740）。这表明社区对智能体执行敏感操作时的安全性高度警惕。

#### **5. 差异化定位分析**

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | 全能型 Agent 平台，极致的扩展性 | 开发者、高级用户、寻求一站式解决方案的团队 | 复杂编排、丰富的 Skill/Pipeline、自托管架构 |
| **NanoBot** | 轻量、易用、个性化助手 | 普通用户、个人开发者、希望快速入门的用户 | 高度模块化设计，强调配置简洁与快速部署 |
| **Hermes Agent** | 前沿模型、极客化、本地优化 | AI 发烧友、关注隐私与本地部署的研究者 | 强依赖 CLI/TUI，深度集成 Ollama 等本地推理引擎 |
| **PicoClaw** | 跨平台消息渠道集成 | 需要多平台（微信、TG、Discord）统一管理智能体的用户 | 聚焦渠道适配与消息路由，架构相对专注 |
| **NanoClaw** | 共享技能与协作 | 团队用户、需要复用 Agent 能力和组件的场景 | 独特的共享技能（Skills）系统和基于 Wiring 的协作 |
| **IronClaw** | 企业级稳定性、质量保障 | 企业用户、对系统可靠性要求极高的场景 | 强调 CI/CD、金丝雀测试、审计（bug_bash）驱动的质量文化 |
| **LobsterAI** | 协同工作区、日常办公集成 | 知识工作者、需要 AI 辅助协同办公的团队 | 深度集成飞书、钉钉等国内 IM，强调 Cowork 功能 |
| **CoPaw (QwenPaw)** | 内存管理与长对话 | 深度使用者、长时间运行 Agent 的用户 | 基于 AgentScope 2.0，独创 ReMe 记忆系统，架构重构 |
| **ZeroClaw** | 全面功能、社区驱动 | 开源生态贡献者、关注功能完整度的技术用户 | PR 处理节奏快，问题驱动开发，社区治理活跃 |

#### **6. 社区热度与成熟度**

- **快速迭代、问题高发期**：**OpenClaw, Hermes Agent, CoPaw** 处于此阶段。它们社区庞大，新功能和 PR 产出极高，但同时也暴露出大量稳定性和回归问题，用户体验波动较大。**CoPaw** 因 v2.0 大版本发布，正处于“应力测试”期。
- **稳定发展、质量巩固期**：**NanoBot, IronClaw, ZeroClaw** 处于此阶段。它们同样活跃，但合并效率更高或在 Bug Bash 中更侧重目标。**IronClaw** 表现出很强的质量控制文化。
- **迭代优化、体验打磨期**：**PicoClaw, LobsterAI, NanoClaw** 处于此阶段。它们正从“有”向“好用”过渡，用户反馈集中在渠道体验一致性、配置易用性和功能细节上。
- **低活跃/停滞期**：**NullClaw, Moltis, TinyClaw, ZeptoClaw** 活跃度显著不足，需警惕项目停滞风险。

#### **7. 值得关注的趋势信号**

1.  **“产品化”是最大工程挑战**：当前生态最缺乏的不是 AI 能力，而是将 AI 能力转化为稳定、可靠、可预期产品的工程能力。“静默失败”成为众矢之的，证明用户对 Agent 的信任是构建一切价值的起点。

2.  **“可观察性”成为刚需**：开发者和用户都迫切需要了解 Agent “为什么这么做”。OpenTelemetry 追踪（ZeroClaw #8933）、更详细的日志和错误上下文（IronClaw #5932）等诉求，标志着社区正向 **“可调试的 AI”** 演进。

3.  **“上下文管理”是智能体的核心战场**：无论是 Token 预算精确性、压缩算法的健壮性，还是长期记忆（如 CoPaw 的 ReMe）的可靠性，都指向了同一个结论：**谁能更好地管理和利用上下文，谁就能提供更流畅、更智能的用户体验**。

4.  **安全与隔离是规模化部署的前提**：从命令授权到审批流程，再到多租户数据隔离，安全问题贯穿全生态。这表明 AI 智能体正从个人玩具向企业工具过渡，对安全的要求正在快速攀升。

5.  **国产模型的集成与适配成为独特需求**：LobsterAI 对接飞书和钉钉，ZeroClaw 用户报告阿里云 Qwen 问题，显示出中国开发者和企业在将智能体集成到本土技术栈上有强烈且独特的诉求，这是一个重要的市场差异点。

**对 AI 智能体开发者的参考价值**：
- **优先解决“可信度”问题**：投入资源构建完善的错误处理、重试机制和日志审计，杜绝“静默失败”。
- **拥抱“可观察性”体系**：从项目初期引入 OpenTelemetry 等标准，为调试、监控和性能优化打下基础。
- **将“上下文”作为一等公民**：重视上下文管理策略，设计精确的 Token 预算，并考虑长期记忆与短期窗口的结合。
- **安全左移**：在设计审批、授权和执行核心功能时，将安全概念融入架构，而不是后期打补丁。
- **关注本土生态**：如面向中国市场，需预见到与微信、飞书、钉钉及国产大模型集成的复杂性，并提供相应支持。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-07-10

---

## 1. 今日速览

过去24小时内，项目保持高活跃度：新增/活跃 Issue 9 条，关闭 1 条；PR 更新 43 条，其中 **14 条已合并/关闭**，**29 条待合并**，社区贡献密集。关键进展包括：修复了 MCP 重连触发网关崩溃的回归问题、为 WebUI 添加了文件预览语法高亮与队列引导功能、多项安全与稳定性 PR 进入合并通道。并未发布新版本。整体项目健康度良好，但仍有多个长期未合并的 PR 存在冲突风险。

---

## 2. 版本发布

无

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#4832](https://github.com/HKUDS/nanobot/pull/4832) | fix(cli): handle CSI-u Shift+Enter instead of dumping raw escapes | **已合并** | 修复了 #4614 之后因移除 Shift+Enter 路径导致的终端兼容性回归，使 Shift+Enter 也能正确触发换行。 |

此外，以下高优先级 PR 虽未合并，但今日有显著进展（更新至 2026-07-10）：

- [#4843](https://github.com/HKUDS/nanobot/pull/4843) — `fix(mcp): defer stale stack cleanup during reconnect`：修复流式 HTTP MCP 会话过期后重连导致的网关崩溃，**优先级 p1**。
- [#4844](https://github.com/HKUDS/nanobot/pull/4844) — `fix(agent): require slash authorization for sustained goals`：为持续目标机制增加授权检查，防止未授权操作。
- [#4877](https://github.com/HKUDS/nanobot/pull/4877) — `feat(webui): highlight file previews and diffs`：为 WebUI 文件预览和差异对比添加懒加载语法高亮。
- [#4878](https://github.com/HKUDS/nanobot/pull/4878) — `feat(hooks): add auto-discovery mechanism for agent hooks`：使自定义钩子只需放入目录即可自动注册，降低开发门槛。

整体来看，项目在 **稳定性修复**（MCP 重连、终端兼容）、**WebUI 体验**（高亮、引导）、**权限加固**（目标授权、消息外发策略）方面迈出坚实一步。

---

## 4. 社区热点

今日讨论最活跃的 Issue 与 PR 如下（按评论数排序）：

| 链接 | 标题 | 评论数 | 分析 |
|------|------|--------|------|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | [enhancement] support overriding model per conversation | **6** | 用户 `rombert` 希望能在对话级别切换不同模型预设（如 OpenRouter vs 本地 llama.cpp）。该请求获得6条讨论，反映出社区对**灵活模型路由**的强烈诉求。 |
| [#4823](https://github.com/HKUDS/nanobot/issues/4823) | [bug] whatsapp - groups | **4** | 用户 `mxnbf` 报告 WhatsApp 群组响应错乱，0.2.2 之后群组隔离失效，导致消息发送到所有群组。该回归问题影响生产使用，讨论热烈。 |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | [enhancement] Preserve exact prompt prefix to enable caching | **3** | 用户指出 Nanobot 每次调用 Ollama 都会额外增加 **60 秒**，原因是未保留精确提示前缀以利用缓存，导致 32GB VRAM 也不可用。该问题直接影响 Ollama 用户的体验。 |

社区情绪：用户对**稳定性回归**（WhatsApp 群组、Ollama 性能）的不满较多，同时积极呼吁**灵活性**（模型切换）和**性能优化**（缓存）。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

| 严重度 | Issue | 标题 | 状态 | 是否有修复 PR |
|--------|-------|------|------|---------------|
| **P0** | [#4776](https://github.com/HKUDS/nanobot/issues/4776) | Security: /restart command has zero authorization | 开放 | 有 [#4844](https://github.com/HKUDS/nanobot/pull/4844) 解决持续目标授权，但 `/restart` 未直接修复 |
| **P0** | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | Endless loop for <tool_call> <function=complete_goal> | 开放 | 尚无直接 PR |
| **P1** | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | whatsapp - groups 回归 | 开放 | 未发现对应修复 PR |
| **P1** | [#4860](https://github.com/HKUDS/nanobot/issues/4860) | no such command "onboard" or "webui" | 开放 | 文档错误，可快速修复 |
| **P2** | [#4835](https://github.com/HKUDS/nanobot/issues/4835) | WebUI landing message can be sent to an unrelated existing chat | **已关闭** | 已合并？无对应 PR 但 Issue 关闭 |
| **P2** | [#4872](https://github.com/HKUDS/nanobot/issues/4872) | Dream should only create git commits if productive | 开放 | 无对应 PR |

另外，今日合并的 PR [#4832](https://github.com/HKUDS/nanobot/pull/4832) 修复了 CLI 终端兼容性回归，属于稳定性提升。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能请求（今日及近期活跃）

| Issue | 标题 | 可能纳入下一版本的依据 |
|-------|------|------------------------|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | 支持每个对话覆盖模型 | 已有对应 PR [#4291](https://github.com/HKUDS/nanobot/pull/4291)（subagents 使用可配置模型预设），但二者不完全相同 |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) | 为 spawn 工具添加模型参数 | 与 #4253 高度相关，PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) 直接解决 |
| [#4378](https://github.com/HKUDS/nanobot/issues/4378) | cron 级别模型/预设 | 已有 PR [#4622](https://github.com/HKUDS/nanobot/pull/4622) 实现 |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | 保留精确提示前缀以启用缓存 | 暂无对应 PR，但讨论活跃 |
| [#4872](https://github.com/HKUDS/nanobot/issues/4872) | Dream 仅在有效变更时创建提交 | 无明显冲突，属小改进 |

**路线图信号**：`spawn` 模型预设、cron 模型预设已有 PR 在等待合并，预计会成为下一版本的核心功能。Ollama 缓存优化属于性能痛点，可能被优先处理。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

- **rombert**（#4253）：“I work mainly with two model presets – one based on openrouter (fast), one based on local llamacpp (private, cheap). I would like to alternate them.” → 典型多模型使用场景，期望对话级切换。
- **mxnbf**（#4823）：“In the current version, whatsapp group responses now arrive in every group the number is in. Currently group allow is broken.” → 对 0.2.2 后的群组隔离回归表示失望，希望尽快修复。
- **The-Markitecht**（#4867）：“Nanobot adds an extra 60 seconds to every single turn. This is totally unusable with Ollama and 32 GB of VRAM.” → 严重性能问题，用户情绪强烈，认为无法接受。
- **justTravis**（#4860）：“I've just installed with uv tool install. The commands mentioned on the website don't exist?” → 新手引导体验差，文档与实际命令不符。
- **alekwo**（#4872）：“The dream logic creates a new commit on every run, regardless of whether there were any changes. This leads to many unnecessary empty commits.” → 对 Git 提交整洁性的合理要求。

---

## 8. 待处理积压

以下为长期未响应、但重要性较高的 Issue 或 PR，提醒维护者关注：

| 类型 | 链接 | 标题 | 创建时间 | 积压原因 |
|------|------|------|----------|----------|
| Issue | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | 支持每个对话覆盖模型 | 2026-06-08 | 开放超1个月，社区需求高，但讨论未形成明确方案 |
| Issue | [#4231](https://github.com/HKUDS/nanobot/issues/4231) | spawn 工具添加模型参数 | 2026-06-07 | 关联 PR [#4291](https://github.com/HKUDS/nanobot/pull/4291) 已存在，但 PR 标记为 `conflict` 需解决 |
| PR | [#4205](https://github.com/HKUDS/nanobot/pull/4205) | Add mailbox-backed subagent results | 2026-06-05 | 长期处于 `conflict` 状态，核心改动可能影响很大 |
| PR | [#4622](https://github.com/HKUDS/nanobot/pull/4622) | feat(cron): support job model presets | 2026-07-01 | 同样 `conflict`，需人工解决冲突 |
| PR | [#4588](https://github.com/HKUDS/nanobot/pull/4588) | optimization: reducing context tokens from tool uses | 2026-06-29 | 性能优化价值高，但标记冲突且未收到合并回应 |
| Issue | [#4776](https://github.com/HKUDS/nanobot/issues/4776) | Security: /restart command has zero authorization | 2026-07-06 | 安全漏洞，虽有部分相关 PR，但未直接修复该命令 |

**建议**：优先解决标记 `conflict` 的 PR，并针对高频反馈（WhatsApp 回归、Ollama 性能）快速发布补丁版本。

---

*日报生成时间：2026-07-10 | 数据来源：GitHub HKUDS/nanobot*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，现根据 Hermes Agent 项目提供的 GitHub 数据，为您生成 2026 年 7 月 10 日的项目动态日报。

---

### **Hermes Agent 项目日报 (2026-07-10)**

**数据统计区间：** 2026-07-09 至 2026-07-10

#### **1. 今日速览**

Hermes 项目今日呈现极高的社区活跃度，Issues 和 PR 均达到 50 条的更新量，但交付管道出现严重阻塞：**全部 50 个 PR 均处于“待合并”状态，无任何 PR 被合并或关闭**。同时，新开的 31 个 Issue 主要围绕 Bug 报告和用户体验问题。尽管社区反馈热烈，但代码层面的核心进展停滞，项目健康度面临“高产低效”的风险。今日无新版本发布。

#### **2. 版本发布**

无。

#### **3. 项目进展**

**今日无任何 Pull Request 被合并或关闭。** 这意味着所有代码改进、Bug 修复和功能增强均处于停滞状态，无法惠及用户。项目整体在代码层面未向前迈进。

尽管如此，社区贡献者提交了大量高质量的 PR，预示着下一轮合并可能会带来显著改进。以下是一些值得关注的、处于“待合并”状态的关键 PR：

- **死锁与稳定性修复：**
    - `#62163`：修复 Cron 作业在发起第二次 LLM 调用时导致网关 API 死锁的问题，这是一个影响定时任务执行稳定的严重 Bug。
    - `#62125`：修复 `ContextCompressor`（上下文压缩器）的防抖动机制从未生效的问题，这直接影响了大对话上下文的处理效率，可能导致性能下降。
    - `#60727`：为 TUI 增加 WebSocket 心跳与自动重连机制，解决了因网络波动（如睡眠、代理超时）导致客户端无响应的长期痛点。
    - `#61089`：将 MCP（模型上下文协议）子进程的“父进程死亡看门狗”机制扩展到 Windows 平台，防止因异常退出产生孤儿进程。

- **关键功能修复与安全：**
    - `#61105`：解除了对 `cryptography` 库的精确版本锁定，使得项目能够自动接收高严重性（CVSS 7.5）安全补丁，对项目安全至关重要。
    - `#61116`：修复了在工具执行中，因预算强制限制而导致的会话数据库增量持久化缺失问题，确保数据一致性。
    - `#61113`：修复了在 CLI 中通过本地模型自动发现功能时，中途切换模型却仍使用旧模型的 Bug。

这些 PR 涵盖了从崩溃、死锁到安全漏洞等多个核心领域的深度修复，一旦合并，将显著提升项目的稳定性和可靠性。

#### **4. 社区热点**

今日社区讨论焦点集中于**核心机制的泛化与易用性**，而非单一功能。

- **最受关注的 Issue：**
    - **`#49190` [Feature]: Generalize Kanban notifications into an event substrate**：该 Issue 旨在将看板（Kanban）模块的通知系统泛化为一个通用的事件订阅架构，允许任何组件订阅任何事件，并通过注册适配器的方式进行投递。这是对现有通知机制的一次重大架构升级，获得了 5 条评论，说明社区对此方向有强烈共识。
    - **`#60732` [Discussion/UX]: Clarifying Sidebar Hierarchy**：关于桌面版侧边栏仓库与分支层级视觉冗余的 UX 讨论，虽已关闭，但 5 条评论体现了用户对界面信息架构清晰度的重视。

- **讨论度较高的 PR:**
    - **`#61101` Introduce codespell**：引入自动化拼写检查工具。虽然这是一个“零功能”的工具性 PR，但获得了社区广泛关注，反映了大家对代码质量和文档整洁性的共同追求。
    - **`#62163` fix(cron): avoid gateway API deadlock on 2nd+ LLM call**：该修复直接回应了多个用户报告的 Cron 作业卡死问题，因此备受关注。

**分析总结：** 社区不仅关注表面的 Bug 修复，更深层次地思考通过架构优化（如通用事件订阅）来提升整个系统的可扩展性和解耦性。同时，对稳定性和可用性（如 Cron 死锁、UI 混淆）的修复给予了最高支持。

#### **5. Bug 与稳定性**

今日共报告 19 个已关闭 Issue 和 31 个活跃 Issue，其中多数为 Bug。以下为按严重程度排列的关键活跃 Bug：

- **P2 (高) - 核心功能阻断或数据一致性受损：**
    - `#61265` **[Bug]: Hermes sends extremely large prompts to local models**：Hermes 向本地大模型发送超大提示词，导致所有规模模型均出现长达数分钟的卡顿。**尚无已关联的 Fix PR**。这是影响本地部署用户体验的严重性能问题。
    - `#61850` **[Bug]: Ollama codex_responses loses terminal response**：在使用 Ollama 提供商时，成功完成多次工具调用后，最终响应丢失，会话记录不完整。**尚无已关联的 Fix PR**。
    - `#62142` **[Bug]: verification-stop can discard streamed final answers**：TUI 和桌面版的“验证-停止”机制可能导致流式传输的最终答案被丢弃，影响 Cron 报告等功能的可靠性。**尚无已关联的 Fix PR**。
    - `#58317` **[Bug]: Compression crash: AttributeError 'dict' no attribute 'count'**：上下文压缩在特定场景下（处理 `write_file` 工具结果时）直接崩溃，导致会话膨胀。**尚无已关联的 Fix PR**。

- **P3 (中) - 功能异常或体验问题：**
    - `#62158` **[Bug]: Desktop chat elapsed-time counter resets**：桌面端聊天计时器在切换页面后重置，影响用户对运行时间的感知。
    - `#60693` **[Bug]: Interface zoom setting resets to 100%**：界面缩放设置在 110% 时偶尔自动重置回 100%。
    - `#55153` **[Bug]: model discovery fails for custom:<name> providers**：自定义提供商（如 `custom:fireworks`）的模型发现功能失效。

**总结：** 今日 Bug 报告集中在**数据持久化/完整性**（Response 丢失、死锁、崩溃）和**本地模型兼容性**（超大 Prompt、Ollama 响应丢失）两大方面，且关键 Bug 均未有对应的修复 PR 被合并，情况令人担忧。

#### **6. 功能请求与路线图信号**

- **新提出的功能需求：**
    - `#62157` **Feature: Discord gateway self-delete**：用户希望 Discord 上的 Hermes 机器人能根据指示删除自己的消息，而非只是口头拒绝。这暗示了 Gateway 权限模型需要更精细的控制。
    - `#56944` **Feature: Refresh session button**：用户在 VSCode 中创建项目/会话后，桌面端无法及时刷新显示，希望增加“刷新会话列表”按钮。这是一个高频小需求，提升用户体验。

- **路线图信号（从已有 PR 判断）：**
    - **稳定性与健壮性将成为下一版重点**：大量针对死锁、崩溃、数据一致性的 PR（如 `#62163`, `#62125`, `#61116`）正在排队等待合并，预示着 v0.19 可能是一个以稳定性为核心的大版本。
    - **基础设施升级**：`#61105`（安全依赖）和 `#61101`（代码质量工具）表明项目正在加强开发底线，为未来增长打下基础。
    - **上下文管理深化**：`#61091`（压缩工作留存）和 `#61088`（内存写入溯源）等 PR 显示，项目正在围绕“长期会话管理”这一复杂场景进行深度优化。

**预测：** 若这些 PR 合并，下一版本将显著提升系统在长时间运行、网络波动和复杂工具调用场景下的可靠性。`#49190` 这样的架构级 Feature 虽然讨论热度高，但实现复杂，预计不会很快进入开发排期。

#### **7. 用户反馈摘要**

- **痛点与不满：**
    - **模型与提供商问题层出不穷**：从 OpenRouter 路由 401 错误（`#61195`），到本地 Ollama 响应丢失（`#61850`），再到向本地模型发送超长 Prompt 导致卡死（`#61265`），用户在多模型/多提供商环境的体验不佳。
    - **桌面端 UI 行为令人困惑**：用户对侧边栏层级（`#60732`）、模型选择器隐藏 MoA（`#61036`）、计时器重置（`#62158`）、缩放设置丢失（`#60693`）等细节体验不满意，反映 UI 交互缺乏统一的逻辑和稳定性。
    - **核心功能不稳定**：Cron 作业死锁（`#62163`）、上下文压缩崩溃（`#58317`）、消息附件缓存残留（`#61191`）等核心机制的 Bug 动摇了用户对任务的信心。

- **使用场景与亮点：**
    - 用户对“项目创建”（`#60954`）和“多会话管理”有持续需求，表明用户正从试用转向深度使用，并投入真实工作流。
    - 有用户提交了名为“**Harness Consciousness Engineering**（驾驭工程意识）”的极具前瞻性的架构提案（`#60866`），虽因不合理被关闭，但体现了高级用户对 Agent 智能内核的深度思考与期待。

#### **8. 待处理积压**

- **长期未合并的关键修复 PR：**
    - `#37168` **feat(agent): finite first-chunk timeout**（创建: 2026-06-02）：为本地 OpenAI 兼容流式服务增加首块超时和故障转移机制。此 PR 已开放超过一个月，直接关系 `#61265` 等报告的稳定性问题，但至今未合并。
    - `#60731` **fix(tui): suppress sticky-scroll yank + configurable history cap**（创建: 2026-07-08）：解决 TUI 中长回复无法滚动查看的 Bug。与 `#37168` 一样，属于长期未解决的体验问题。

- **被搁置的架构提案：**
    - `#49190` **[Feature]: Generalize Kanban notifications**：如前述，此 Issue 代表了社区对架构升级的呼声，但因实现复杂，响应有限，可能被核心团队暂时搁置。

**维护者提醒：** 请注意上述两个长期未合入的 PR。它们的延期已经导致了相同类别的新 Bug 反复出现。建议优先评估 `#37168`（流式超时），因为它涉及多个本地模型相关的稳定性问题，解决它可以一举消除多个相似 Bug 的根源。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据提供的数据生成的 **PicoClaw 项目动态日报**。

---

# PicoClaw 项目日报 | 2026-07-10

## 1. 今日速览

项目今日提交活跃，但合并效率偏低，整体状态呈“高热提交、低效合并”。过去24小时内共有 **22个 PR** 被提出，但仅合并/关闭了3个，待合并 PR 积压至 **19个**。社区讨论焦点集中在**OAuth认证安全**、**WhatsApp体验优化**以及**渠道功能扩展**上。同时，**5个新开 Issues** 尚无任何关闭，表明项目在稳定性和功能完善方面仍有大量工作需要推进。

## 2. 版本发布

无

## 3. 项目进展

今日仅合并/关闭了3个 PR，项目核心功能推进速度放缓，主要集中在 bug 修复和依赖更新上：

- **[修复] LINE频道稳定性 (#3171)** `[CLOSED]`：修复了 LINE 频道 `Send` 方法中可能因 `sync.Map` 类型断言失败而导致的潜在 panic。这是一个关键性的稳定性提升，避免了在特定场景下服务崩溃的风险。
  [链接](https://github.com/sipeed/picoclaw/pull/3171)

- **[依赖] AWS SDK 版本升级 (#3213)** `[CLOSED]`：将 `aws-sdk-go-v2/config` 从 `1.32.25` 升级至 `1.32.27`，跟随上游版本修复，保持依赖健康。
  [链接](https://github.com/sipeed/picoclaw/pull/3213)

- **[依赖] 依赖版本更新 (#3238...)**：另有2个由 Dependabot 自动发起的依赖更新 PR也已关闭。项目整体在依赖维护上保持了较好的节奏。

## 4. 社区热点

今日社区讨论最活跃的议题集中在**用户体验**和**配置兼容性**上，侧面反映出社区用户对产品易用性的高要求。

1.  **功能请求：QQ频道流式输出 (#3201)**
    - **热度**：评论数最高 (2条)，讨论聚焦于技术实现。
    - **诉求**：用户明确要求为 QQ 频道也添加流式输出支持，强调“看到 token 逐字生成”的体验比“等待完整回复”要好得多。这反映出用户对低延迟、沉浸式 AI 交互体验的追求，且对已有 Telegram 和 WebSocket 支持的流式功能给予了积极评价。
    - [链接](https://github.com/sipeed/picoclaw/issues/3201)

2.  **Bug：v2->v3 配置迁移失败 (#3206)**
    - **热度**：评论1条，讨论集中在排查原因。
    - **痛点**：用户报告在全新安装或执行迁移时遭遇解析失败，直接导致服务无法启动。这是一个严重的入门障碍，会劝退新用户。社区对此类基础功能的稳定性极为敏感。
    - [链接](https://github.com/sipeed/picoclaw/issues/3206)

## 5. Bug 与稳定性

今日共报告了 **2个新 Bug**，且**无任何已关闭**。结合存量的两个关键 Bug，项目在**网络恢复**和**版本迁移**这两个基础高可用性场景上存在明显短板。

- **[严重]** **OAuth 刷新请求不兼容与竞态 (#3239)**
    - **描述**：`auth.RefreshAccessToken` 对所有 OAuth 提供者（如 OpenAI， Google）使用**相同**的表单请求体，并固定包含 `scope` 参数，导致 OpenAI 等期望 JSON 格式的认证失败；同时多个并发刷新请求可能导致数据竞争。
    - **Fix PR**：已有 **#3241** 修复并提出。
    - [链接](https://github.com/sipeed/picoclaw/issues/3239)

- **[中等]** **WhatsApp 缺少打字中反馈 (#3240)**
    - **描述**：用户发送消息后，在等待机器人回复期间没有任何“输入中”状态提示，体验不佳。
    - **Fix PR**：已有 **#3242** 修复并提出。
    - [链接](https://github.com/sipeed/picoclaw/issues/3240)

- **[严重]** **v2→v3 配置迁移失败 (#3206)** `[stale]`
    - **描述**：迁移程序错误地将 `build_info`， `session.dm_scope` 等合法字段识别为未知字段，导致启动失败。该问题已存在一周 (`stale`)，对希望升级或新装的用户影响很大。
    - [链接](https://github.com/sipeed/picoclaw/issues/3206)

- **[严重]** **Matrix 频道断线后无重连逻辑 (#3203)** `[stale]`
    - **描述**：Matrix 长轮询连接在网络中断或服务重启后永久挂起，且因主进程未退出，不会被系统运行监控程序 (如 systemd) 自动重启。这是对高可用性要求严苛的关键缺陷。
    - [链接](https://github.com/sipeed/picoclaw/issues/3203)

## 6. 功能请求与路线图信号

今日新增的4个 Issues 中有2个是功能请求，结合当日活跃的 PR，可以判断项目下一版本的重点方向：

- **MUST-HAVE: 跨渠道体验一致性**
    - **QQ 流式输出 (#3201)**、**WhatsApp 打字反馈 (#3240)** 和 **WhatsApp 打字反馈 PR (#3242)** 共同表明，社区贡献者和维护者都在致力于**补齐不同渠道的用户体验差异**，这是从“能用”迈向“好用”的关键一步。

- **HARDENING: 安全与稳定性加固**
    - **OAuth 刷新修复 (#3241)** 和 **安全与鲁棒性强化 PR (#3246)**（包括 MQTT TLS 证书验证、OAuth 超时、搜索读边界控制）是明确的信号，显示项目团队正在同步进行**底层安全加固和性能优化**，为项目的稳定运行和潜在的企业级应用场景做准备。

## 7. 用户反馈摘要

从今日讨论中，可以提炼出以下几点用户真实反馈：

- **积极反馈**：
    - 用户对 Telegram 和 WebSocket 渠道已实现的流式输出功能表示认可（#3201 摘要）。
    - 社区贡献者积极提交高质量 PR，如重构内存分配（`#3243， #3244`）、增强安全（`#3246`）、本地化翻译（`#3247`），表明开发者社区生态健康且活跃。

- **痛点与不满**：
    - **新手上路门槛高**：`#3206` 报告的配置迁移失败在“全新安装”时就会发生，是一个极其严重的新用户门槛，可能导致初期用户流失。
    - **高可用性不足**：`#3203` 描述的 Matrix 断线问题在没有人工介入前几乎不可恢复，这在生产环境中是无法接受的。用户期望服务具备基本的自愈能力。
    - **用户体验不够细腻**：`#3240` 和 `#3201` 的诉求说明，用户已经不满足于功能的“有无”，而是更关注交互过程中的流畅度和反馈感。

## 8. 待处理积压

以下为长期未响应或进展缓慢的重要议题，需要维护者高度关注：

- **[代码/配置] v2→v3 配置迁移修复 (#3206)** `[stale]`
    - **风险**：严重阻碍新用户及版本升级，已 `stale` 一周。
    [链接](https://github.com/sipeed/picoclaw/issues/3206)

- **[核心/稳定性] Matrix 频道重连逻辑 (#3203)** `[stale]`
    - **风险**：渠道级的核心稳定性问题，长期缺失会导致严重服务可用性问题。
    [链接](https://github.com/sipeed/picoclaw/issues/3203)

- **[平台/适配] Linux ARMv7 构建目标支持 PR (#3205)** `[stale]`
    - **重要性**：Raspberry Pi 等设备是开源项目重要的运行平台，该 PR 已提出8天，对于拓展项目用户群有直接帮助。
    [链接](https://github.com/sipeed/picoclaw/pull/3205)

- **[功能/架构] 远程 Pico WebSocket 模式 PR (#3118)** `[stale]`
    - **重要性**：这是一个较新的、持续了近一个月的 PR，可能会改变 `picoclaw agent` 的使用模式，扩展其应用边界，但至今未合并。
    [链接](https://github.com/sipeed/picoclaw/pull/3118)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NanoClaw项目GitHub数据，现为您呈现2026年7月10日的项目动态日报。

---

### NanoClaw 项目动态日报 | 2026-07-10

---

#### 1. 今日速览

过去24小时内，NanoClaw项目保持高度活跃，共收到7条Issue和20个Pull Request。在Bug修复方面，团队已成功关闭两个长期存在的CLI工具Bug（#2415, #2389），但同时也暴露了与共享技能、消息投递和安全性相关的4个新问题。20个PR中有17个处于待合并状态，表明功能开发和问题修复工作流中存在一定积压，但也显示出社区和核心团队正在进行密集的迭代。项目当前处于功能增强与安全加固并行的阶段，整体健康度较好，但维护者需重点关注待合并PR的积压和新增的高危安全问题。

#### 2. 版本发布

无新版本发布。

#### 3. 项目进展

今日合并/关闭了3个重要PR，标志着一些长期困扰用户的Bug得到了根本性解决：

- **[#2416] `fix(cli): provision companion rows on `ncl groups create` and `ncl wirings create`** (已关闭)
  - **推进内容**: 此PR修复了Issue #2415和#2389的核心问题。之前通过`ncl` CLI工具创建的群组和接线缺少必要的数据库关联行（如`container_configs`和`agent_destinations`），导致容器无法启动或消息被静默丢弃。此修复确保了CLI工具能完整地创建所需的所有数据库记录，解决了CLI工具的基础可用性问题。
  - **项目意义**: 这是CLI工具稳定性的重要一步，使得通过命令行创建和管理代理成为更可靠的方式。

- **[#3000] `fix(codex): footer token 数字用单轮值替代累计值`** (已关闭)
  - **推进内容**: 修复了Codex工具的`turn.completed`事件显示累计Token计数，导致Footer显示数值虚高的问题。现在优先使用单次会话的真实Token消耗值（`last_token_usage`）。
  - **项目意义**: 提升了Codex工具的数据准确性，为开发者提供了更可靠的Token用量参考。

- **[#2621] `chore: add .gitattributes to enforce LF line endings for shell scripts`** (已关闭)
  - **推进内容**: 增加了`.gitattributes`文件，强制所有Shell脚本使用Unix风格的换行符（LF），解决了Windows用户因CRLF换行符导致脚本无法执行的跨平台兼容性问题。
  - **项目意义**: 改善了开发者在不同操作系统上的体验，降低了项目贡献的门槛。

#### 4. 社区热点

今日社区讨论的热点集中在 **安全审查** 和 **核心CLI功能修复** 上。

- **[#2827] `add_mcp_server` approval flow hides runtime `args` and `env`, enabling approval smuggling** (安全，高关注)
  - **链接**: [Issue #2827](https://github.com/nanocoai/nanoclaw/issues/2827)
  - **分析**: 此Issue及其关联的 [#2762](https://github.com/nanocoai/nanoclaw/issues/2762) 都是关于MCP服务器审批流程的安全漏洞。问题在于，当Agent请求添加MCP服务器时，审批卡仅显示服务器名称和基础参数，而关键的运行参数（`args`）和环境变量（`env`）被隐藏。攻击者控制的Agent可以利用此漏洞“走私”恶意参数，绕过人类审批。这两个Issue都获得了安全相关的标签，反映了社区对项目安全性的高度关注。开发者@glifocat已提交了修复PR [#2998](https://github.com/nanocoai/nanoclaw/pull/2998)，显示出项目对安全问题的快速响应。

- **[#2415] `ncl groups create` skips `container_configs` row** (已关闭，曾为痛点)
  - **链接**: [Issue #2415](https://github.com/nanocoai/nanoclaw/issues/2415)
  - **分析**: 这条Issue虽然已关闭，但其长期存在（从5月11日至今）说明了`ncl groups create`命令的缺陷是社区用户一个显著的痛点。许多用户可能在初次使用CLI时遭遇“Container config not found”错误而无法启动代理。该问题的修复是社区迫切需求的体现。

#### 5. Bug 与稳定性

今日报告的Bug较多，按严重程度排列如下：

- **严重 / 安全漏洞**:
  - **[#2827] / [#2762]**: `add_mcp_server`审批流程存在“参数走私”漏洞，可导致代理绕过人类审核。已有修复PR [#2998](https://github.com/nanocoai/nanoclaw/pull/2998) 在审。
  - **待合并的修复PR**: [#2998](https://github.com/nanocoai/nanoclaw/pull/2998).

- **高 / 功能损坏**:
  - **[#2997]**: 提醒系统（Reminders）的`hasIdenticalSend`逻辑错误地匹配了之前的消息，导致文本不变化的周期性提醒仅在首次触发后停止工作。**无相关修复PR**。
  - **[#3001]**: 在共享技能重构（2026-04-21）之前创建的代理组，其技能文件被旧副本“卡住”，无法接收最新的共享技能更新。**已有修复PR [#3002](https://github.com/nanocoai/nanoclaw/pull/3002) 在审。**
  - **[#2995]**: 当通道适配器离线或配置错误时，外发消息被错误地标记为“已投递”，导致消息被静默丢弃，用户和系统均无日志告警。**已有修复PR [#2996](https://github.com/nanocoai/nanoclaw/pull/2996) 在审。**

- **中 / 功能性**:
  - **[#2389]** (已关闭): CLI创建的接线导致消息被静默丢弃。该Bug于今日随PR #2416的合并而修复。

#### 6. 功能请求与路线图信号

- **强信号 / 计划内功能**:
  - **任务系统改进**: 来自核心团队开发者的PR [#2988](https://github.com/nanocoai/nanoclaw/pull/2988) 引入“单门投递”（One-door delivery）机制，要求任务会话中的所有消息必须使用显式的接收方（`to`）。这可能是对任务模块进行重大重构的一部分，旨在提升任务执行的确定性和可追踪性。
  - **Unified iMessage Channel**: PR [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) 提议将本地和托管的iMessage后端统一为一个“imessage”频道，简化用户配置。这显示了项目在强化即时通讯集成方面的意图。
  - **飞书(Lark)通知集成**: PR [#2994](https://github.com/nanocoai/nanoclaw/pull/2994) 提议在代理子任务（delegation）完成后，直接将结果发送到飞书群。这是一个来自社区的具体需求，表明用户需要将代理工作流与日常工作通讯工具深度整合。

- **潜在待评估需求**:
  - **Telegram富文本渲染**: PR [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) 提议利用Telegram Bot API 10.1的新功能，实现原生的富文本消息渲染。该项目自6月28日以来一直处于开放状态，等待核心团队的进一步评估。
  - **远程存储集成**: 长期开放PR [#1598](https://github.com/nanocoai/nanoclaw/pull/1598) (自4月2日) 提议增加通过rclone挂载WebDAV/S3的Skill。虽然积压已久，但其存在表明社区对数据存储扩展性有持续需求。

#### 7. 用户反馈摘要

从今日的Issue和PR摘要中，可以提炼出以下真实用户痛点：

- **CLI工具不一致与不可靠**: 多个用户（`glifocat`, `alexli-77`）报告了`ncl groups create`和`ncl wirings create`命令在执行后，“静默失败”或导致后续操作失败。用户在创建群组和接线后，无法启动代理或无法收到回复，必须深入数据库或日志才能发现问题，这是极差的开发者体验。
- **消息丢失的“黑洞”**: 用户普遍反映代理的回复“被静默吞噬”。这集中体现在两个场景：一是接线未自动创建代理目的地（Issue #2389），二是消息投递到离线/错误适配器时被标记为已完成（Issue #2995）。用户无法知道消息是否被发送，对系统的信任度受损。
- **不安全感的来源**: 关于MCP服务器审批漏洞（Issue #2827, #2762）的披露，虽然没有直接的“用户投诉”，但这类安全问题的存在本身就会给用户带来不安全感。用户期望在授权代理执行更改系统配置的操作时，能看到完整透明的信息。

#### 8. 待处理积压

以下是一些长期未关闭，且可能影响开发进度和用户体验的重要Issue或PR，提醒维护者关注：

- **[PR #2610] `fix: call initGroupFilesystem after ncl groups create`** (自2026-05-25)
  - **链接**: [PR #2610](https://github.com/nanocoai/nanoclaw/pull/2610)
  - **状态**: 开放，长期未合并。该PR与今日关闭的#2416解决的是同一个Bug（`container_configs`缺失），但方法不同。其持续开放可能意味着与当前修复方案存在冲突或重叠，需要进行清理。

- **[PR #1598] `feat: add-remote-storage skill (WebDAV/S3 via rclone + systemd)`** (自2026-04-02)
  - **链接**: [PR #1598](https://github.com/nanocoai/nanoclaw/pull/1598)
  - **状态**: 开放，超过三个月。这是一个重要的社区贡献，旨在扩展代理的文件存储能力。由于其涉及架构变更（systemd集成、挂载管理），需要核心团队给出是否采纳的明确信号，以免积累技术债务。

- **[PR #2226] `fix(host): throw on missing channel adapter instead of silently dropping the message`** (自2026-05-03)
  - **链接**: [PR #2226](https://github.com/nanocoai/nanoclaw/pull/2226)
  - **状态**: 开放。此PR与今日新开的Issue #2995及其修复PR #2996高度相关。它采用“抛出异常”而非“路由重试”的策略。维护者应考虑是直接合并#2996，还是对#2226进行更新，以避免解决方案的碎片化。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 NullClaw 项目 GitHub 数据，我为您生成了 2026-07-10 的项目动态日报。

---

**NullClaw 项目日报 | 2026年7月10日**

### 1. 今日速览

今日项目整体状态相对平静，但社区活跃度保持中等。过去24小时内未产生新的代码合并或版本发布，项目核心开发处于“消化”阶段。然而，社区报告了两个值得关注的问题：一个涉及 **Telegram 频道空闲后停止响应** 的稳定性问题，另一个是 **A2A 路由的安全漏洞**，该漏洞可能导致跨用户的任务与上下文数据被非法复用。其中，安全漏洞是新提出的，需引起高度警觉。整体来看，项目在稳定性、安全性和功能完整度上仍有完善空间。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日未合并或关闭任何 Pull Request，项目主分支代码无变更。从数据看，项目当前没有新功能被合并或关键 Bug 被修复的上线动态。

### 4. 社区热点

*   **Issue #972: Telegram 频道空闲后停止响应**
    *   **状态**: 活跃讨论
    *   **链接**: [Issue #972](https://github.com/nullclaw/nullclaw/issues/972)
    *   **分析**: 该 Issue 是目前讨论最活跃的问题（2条评论）。用户报告在 Telegram 频道空闲一夜后，代理停止响应，但后端进程似乎仍在运行。这指向了与 Telegram 集成相关的心跳维持或会话管理问题。社区对此的讨论表明，**实时通信渠道的长期可用性**是用户的核心关切点，用户期望更稳定的长连接处理机制。

### 5. Bug 与稳定性

按严重程度排列如下：

*   **[严重] Issue #974: 共享 Bearer Token 导致 A2A 路由跨调用任务和上下文复用**
    *   **状态**: 新开，无 Fix PR
    *   **链接**: [Issue #974](https://github.com/nullclaw/nullclaw/issues/974)
    *   **详述**: 这是一个重要的安全漏洞。虽然 NullClaw 使用 bearer token 保护 `/a2a` 路由，但后续的任务与会话授权仅依赖于任务ID和用户提供的 `contextId`。在共享 token 的情况下，攻击者可以越权读取其他用户的任务历史，并复用他人的上下文。此问题直接威胁到多租户环境下的数据隔离和安全性。

*   **[高] Issue #972: Telegram 空闲后停止响应**
    *   **状态**: 已开启，无 Fix PR
    *   **链接**: [Issue #972](https://github.com/nullclaw/nullclaw/issues/972)
    *   **详述**: 这是一个功能稳定性问题。用户反馈在空闲一段时间（如过夜）后，Telegram 频道上的代理停止工作。尽管用户测试后端 (`nullclaw agent -m "ping"`) 显示正常，但前端频道已“死亡”。这暗示了客户端（Telegram bot）与服务端之间可能存在连接池、会话超时或底层库的自动重连机制问题。

### 6. 功能请求与路线图信号

今日未发现明确的 Feature Request 标签。但从 Bug 报告中可以解读出隐性的功能需求：

*   **安全增强**: Issue #974 暴露了 A2A 认证模型的缺陷，这可能会驱动项目在下一版本中改进认证与会话管理机制，例如引入基于请求者身份的上下文隔离，而非仅依赖任务ID。这应被视为路线图上的高优先级事项。
*   **稳定性优化**: Issue #972 提示需要对长连接、空闲连接保持机制进行优化，尤其是针对 Telegram 等即时通讯渠道。这可能涉及引入心跳包、连接池健康检查等功能。

### 7. 用户反馈摘要

*   **痛点 - Telegram 稳定性**: 从 Issue #972 评论中，用户对“Telegram 频道在空闲后无响应”感到困扰，这影响了产品的日常可用性和信任感。用户期望代理能 7x24 小时稳定工作。
*   **痛点 - 安全意识**: Issue #974 的作者展示了高度的安全意识，并发现了潜藏的安全漏洞。该反馈揭示了用户在 **共享访问场景下对数据隔离** 的担忧，表明安全是高级用户的核心考量之一。

### 8. 待处理积压

*   **Issue #972: Telegram channel stop respond after some idle time**
    *   **状态**: 已开启，超10天未修复
    *   **链接**: [Issue #972](https://github.com/nullclaw/nullclaw/issues/972)
    *   **重要性**: 高。该问题影响到核心功能（Telegram 集成）的稳定性，且报告已有10天，尚未看到来自维护者的明确回复或修复 PR，需要项目维护者关注优先级。

*   **Issue #974: NullClaw shared bearer A2A route allows cross-caller task and context reuse**
    *   **状态**: 新开启，极高危漏洞
    *   **链接**: [Issue #974](https://github.com/nullclaw/nullclaw/issues/974)
    *   **重要性**: 紧急。作为安全漏洞，应优先于功能开发处理，以避免潜在的数据泄露风险。需要项目维护者立即响应该报告，评估影响并提供修复方案或缓解措施。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-07-10

## 1. 今日速览

- 过去24小时项目保持高活跃度：共处理 **31 条 Issue**（新开/活跃 27 条，关闭 4 条）和 **50 条 PR**（待合并 30 条，已合并/关闭 20 条）。
- 核心团队密集推送 **bug_bash** 修复，涉及 Slack 集成、WebUI 交互、运行引擎稳定性等多个模块，社区反馈与内部质量检查共振明显。
- 今日无新版本发布，但多项大型 PR（如 Slack 工具面改造、CI 修复、代码结构重构）已合并或进入待合并队列，项目整体向 **Reborn 运行时** 迁移与稳定性冲刺持续推进。

---

## 2. 版本发布

无。

---

## 3. 项目进展

今日合并/关闭的重要 PR 包括：

- **#5898**（[链接](https://github.com/nearai/ironclaw/pull/5898)，作者 @BenKurrek，XL 级）—— “fix(reborn): Slack delivery routing + tool-surface overhaul”  
  修复了 Slack 自动化消息发错频道、用户 ID 显示原始值、重复投递等三个已知缺陷，并基于四维度审计全面优化了 Slack 工具的模型可见逻辑。该 PR 已合并至主分支。

- **#5899**（[链接](https://github.com/nearai/ironclaw/pull/5899)，作者 @BenKurrek，XL 级）—— “test(live-canary): Slack canary suite — 13 probes”  
  配套的 13 项实时测试（金丝雀套件），覆盖 Slack 自动化投递与工具正确性，已合并。

- **#5949**（[链接](https://github.com/nearai/ironclaw/pull/5949)，作者 @BenKurrek，M 级）—— “test(live-canary): promote QA 9/10 Slack canaries into the cron rotation”  
  将上述金丝雀测试纳入定期执行流水线，确保后续回归监控。

- **#5942**（[链接](https://github.com/nearai/ironclaw/pull/5942)，作者 @serrrfirat，S 级）—— “Constrain failure explanations to reply-only”  
  限制失败解释的模型调用仅在回复上下文中执行，避免工具泄漏，已合并。

- **#5939**（[链接](https://github.com/nearai/ironclaw/pull/5939)，作者 @serrrfirat，M 级）—— “Persist success tool observations”  
  保留成功工具调用的观测数据，供 Provider 重放使用；同时限制非 Provider 完成结果的数据量，已合并。

- **#5876**（[链接](https://github.com/nearai/ironclaw/pull/5876)，作者 @italic-jinxin，XL 级）—— “fix(ci): resolve main branch CI failures”  
  修复了 Postgres CAS 删除/重建竞争条件、Slack 触发器交付、技能注册作用域等多个 CI 不稳定因素，持续提升主分支质量门禁。

---

## 4. 社区热点

- **#5747** “Reborn: No way to unpair Slack on the built-in host-beta mount”（[链接](https://github.com/nearai/ironclaw/issues/5747)）  
  评论数最多的 Issue（3 条），用户反馈 Slack 绑定后无法通过 UI 或 `/pair` 命令解绑。该问题涉及核心集成 UX，目前仍处于开放状态，但今日合并的 #5898 已包含“Slack cleanup for extension remove tool”的相关改进，预计能部分缓解此痛点。

- **#5919** “Suggestion: monetize this MCP server with x402 micropayments”（[链接](https://github.com/nearai/ironclaw/issues/5919)）  
  非官方用户提交的货币化建议，虽然评论为 0，但属于社区对外部集成方向的新兴趣点，值得关注。

---

## 5. Bug 与稳定性

今日报告的 Bug 集中且严重，大量为 **bug_bash** 活动的产物。按严重程度排列：

### P1 级
- **#5943** “Slack DM action posts to current channel instead of user's direct messages”（[链接](https://github.com/nearai/ironclaw/issues/5943)）  
  用户请求发送 Slack DM 时，消息被错误地发送到当前频道而非用户私信。该 Bug 在今天合并的 #5898 中已有针对性的修复。

### P2 级
- **#5944** “Slack DM delivery silently fails but run reports success”（[链接](https://github.com/nearai/ironclaw/issues/5944)）  
  运行显示成功但实际未投递，误导用户。已纳入 #5898 修复范围。
- **#5945** “Run fails with generic 'model provider was unavailable' after long multi-tool execution”（[链接](https://github.com/nearai/ironclaw/issues/5945)）  
  长流程多工具调用后失败，错误信息过于笼统。
- **#5946** “Assistant mutates Google Sheet before discovering requested trigger is unavailable”（[链接](https://github.com/nearai/ironclaw/issues/5946)）  
  助手在检查触发器可用性之前修改了 Google Sheet，导致数据被不必要地写入。
- **#5885** “Approval notification opens action without showing the approval message”（[链接](https://github.com/nearai/ironclaw/issues/5885)）  
  通知面板中点击“需要审批”后，审批卡片未显示。
- **#5879** “Stale error banner remains visible after successful follow-up response”（[链接](https://github.com/nearai/ironclaw/issues/5879)）  
  错误横幅在后续成功执行后仍不消失。
- **#5836** “Routine fails on every scheduled run with 'No thread attached'”（[链接](https://github.com/nearai/ironclaw/issues/5836)）  
  计划任务每次执行均失败，影响定时自动化功能。

### P3 级
- **#5948** “Assistant incorrectly reports GitHub extension as activated when it is only installed”（[链接](https://github.com/nearai/ironclaw/issues/5948)）  
- **#5947** “Thread deletion requires page refresh to reflect in UI”（[链接](https://github.com/nearai/ironclaw/issues/5947)）  
- **#5889** “'Load older messages' button does not load additional activity messages”（[链接](https://github.com/nearai/ironclaw/issues/5889)）

以上 P1/P2 级别 Bug 中，Slack 相关的大部分已通过 #5898 得到修复；其他 Bug（如 #5945、#5946、#5885）仍在追踪中，尚未有对应的修复 PR。

---

## 6. 功能请求与路线图信号

- **#5935** “Retire v1 runtime and remove legacy src/ code”（[链接](https://github.com/nearai/ironclaw/issues/5935)）  
  由核心贡献者 @italic-jinxin 提出，明确将 v1 运行时退役并清理遗留代码。结合今日合并的 #5925（W5: preserve the userland loop boundary）等重构 PR，项目正按计划向 Reborn 完全过渡。

- **#5938** “Unify Reborn dropdown styling with the shared SelectMenu component”（[链接](https://github.com/nearai/ironclaw/issues/5938)）  
  UI 统一化议题，今日已有对应的 PR #5940 在开放中。

- **#2601** “Feature Proposal: CLI / TUI for Managing Secrets”（[链接](https://github.com/nearai/ironclaw/issues/2601)）  
  长期未回应的功能请求，但今日 #5934 PR “Scope admin-provisioned secrets to the default agent” 显示了团队正逐步改进密钥管理机制，该请求有望在未来版本得到部分满足。

- **#5919** “Suggestion: monetize this MCP server with x402 micropayments”（[链接](https://github.com/nearai/ironclaw/issues/5919)）  
  外部用户关于 MCP 服务器货币化的建议，虽非官方路线图，但反映了社区对商业化集成模式的兴趣。

---

## 7. 用户反馈摘要

- **Slack 集成体验**：多个用户（@joe-rlo 大量反馈）反映 Slack 解绑、DM 投递、频道归属等问题严重影响日常使用。今日合并的 #5898 被认为是针对性的全面修复，待验证效果。
- **运行稳定性**：用户反馈长时间多工具调用后出现“model provider was unavailable”等笼统错误，缺乏诊断信息。PR #5932（[链接](https://github.com/nearai/ironclaw/pull/5932)）正在尝试将错误细节暴露给用户，目前仍在开放中。
- **UI 交互**：用户指出“Load older messages”按钮失效、线程删除后需手动刷新、错误横幅残留等细节问题，影响使用流畅度。相关修复 PR #5928（[链接](https://github.com/nearai/ironclaw/pull/5928)）和 #5929（[链接](https://github.com/nearai/ironclaw/pull/5929)）今日已进入待合并队列。

---

## 8. 待处理积压

- **#2601** “Feature Proposal: CLI / TUI for Managing Secrets”（[链接](https://github.com/nearai/ironclaw/issues/2601)）  
  创建于 2026-04-18，至今未获得官方回应或分配。虽然今日有 #5934 改善了 admin 密钥，但用户期望的 CLI/TUI 交互仍缺失，建议团队评估优先级。

- **#5640** “Harness gap: no RecordingSecurityAuditSink double — hook_security_audit_sink always None in integration harness”（[链接](https://github.com/nearai/ironclaw/issues/5640)）  
  创建于 2026-07-04，属于测试基础设施缺陷，影响集成测试的审计覆盖。目前无关联 PR，@henrypark133 可能需要跟进。

- **#5747** “Reborn: No way to unpair Slack on the built-in host-beta mount”（[链接](https://github.com/nearai/ironclaw/issues/5747)）  
  尽管 #5898 改善了 Slack 清理逻辑，但该 Issue 明确指出的 UI 解绑入口缺失问题仍待解决（#5898 主要聚焦后端路由与工具面），建议更新 Issue 状态并明确剩余工作。

---

*以上日报基于 GitHub 公开数据（nearai/ironclaw）生成，时间为 2026-07-10。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是为您生成的 LobsterAI 项目动态日报 (2026-07-10)。

---

# LobsterAI 项目动态日报 (2026-07-10)

## 1. 今日速览

今日项目活跃度较高，主要集中在 **Bug 修复与稳定性提升** 上。虽然无新版本发布，但有 **18 条 PR** 被处理，其中 **11 条** 已合并/关闭，且多数为今天入库，显示出出色的开发迭代节奏。社区方面，一个关于多 Agent 配置串扰的 Bug (Issue #2293) 在用户间引起讨论，是当前社区关注的焦点。此外，一批长期未处理的 stale PR 依然在队列中，提醒社区需要更多关注。

## 2. 版本发布

无

## 3. 项目进展

今日项目进展显著，主要围绕 **协同工作区 (Cowork)**、**定时任务 (Scheduled Task)** 及 **构建流程** 的关键修复与功能增强。

- **协同工作区 (Cowork) 核心体验优化**：合并多项重要修复，包括：
    - **修复**：进程队列中跟随式协调器连接问题 (PR #2315)，确保应用在最小化或跨会话时能正确处理后续任务。
    - **增强**：为会话列表增加**文件夹上下文附件**功能 (PR #2310)，用户可直接拖拽文件夹作为提示词附件。
    - **修复**：提交队列 Steering 时仅发送选中项 (PR #2313)，并修复了 AskUser 状态在最小化后丢失的问题 (PR #2312)。
    - **修复**：在发送至底层网关前，从提示词中剥离空字节字符 (PR #2308 & #2309)，避免因无效字符导致的请求硬拒绝。
- **定时任务 (Scheduled Task) 兼容性修复**：合并了针对 IM 群组任务路由的修复 (PR #2306 & #2314)，解决了企微、钉钉群组 ID 大小写问题，以及钉钉连接器吞没失败结果的兼容性问题，提升了系统兼容性和可靠性。
- **内存索引维护**：合并了针对所有 Agent 的全文搜索 (FTS) 索引迁移修复 (PR #2311)，提升了长期运行的多 Agent 系统稳定性。
- **UI 修复**：修复了 Windows 标题栏在侧边栏折叠且存在更新徽标时，图标被压缩的问题 (PR #2316)。

**小结**：项目今日完成了从核心通信协议到用户界面的一系列关键修复，特别是对协同工作区和定时任务稳定性的提升，为下一版本发布奠定了坚实基础。

## 4. 社区热点

- **Issue #2293: [多 Agent 配置覆盖 BUG]** ([链接](https://github.com/netease-youdao/LobsterAI/issues/2293))
  - **状态**：Open (活跃)
  - **热度**：2条评论，今日更新。这是目前社区最活跃的议题。
  - **诉求分析**：用户报告了一个严重影响多 Agent 使用体验的 Bug：修改一个 Agent 的 `USER.md` 或“关于你”配置，会导致所有其他 Agent 的配置被主Agent的内容覆盖。该 Bug 直接破坏了多 Agent 的隔离性，是高级用户的核心痛点。用户怀疑是近期更新引入的回归问题，情绪较为急切，社区中可能还有更多受影响的用户尚未发言。

- **PR #1331 & Issue #1337: [会话列表分组与错误状态可视化]** ([PR链接](https://github.com/netease-youdao/LobsterAI/pull/1331) & [Issue链接](https://github.com/netease-youdao/LobsterAI/issues/1337))
  - **状态**：Open (Stale)
  - **热度**：长期存在，但代表了用户对基础交互体验的普遍诉求。
  - **诉求分析**：用户@MaoQianTu 同时提出了按时间分组 (Issue #1337) 和错误状态红点 (PR #1331) 两项功能。这表明社区用户对现有会话列表组织方式的**不满**已达到需要提出完整方案的程度。该需求参考了 ChatGPT 等主流产品，是提升日常使用效率的重要特性。

## 5. Bug 与稳定性

- **[严重] 多 Agent 配置串扰问题** (Issue #2293)
  - **影响**：破坏多 Agent 数据隔离，影响用户体验和数据安全。
  - **状态**：已报告，未分配，无对应的修复 PR。
  - **概述**：重启应用后，所有 Agent 的 `USER.md` 文件会被主 Agent 的配置覆盖。这是当前最需要优先处理的 Bug。

- **[一般] 定时任务开关无法关闭** (Issue #1392，已关闭)
  - **影响**：特定定时任务无法被用户控制地停止，影响操作可靠性。
  - **状态**：已关闭。该 Issue 已被标记为 `stale` 并关闭，但其背后的问题是否已被根本解决，需要留意是否有相关修复 PR 关联。

- **[提升] 输入中的空字节字符导致请求失败** (PR #2308 & #2309，已合并)
  - **影响**：特定场景下因 `\0` 空字节导致 OpenClaw 网关拒绝请求，造成功能中断。
  - **状态**：**已修复**。通过在输入和发送边界进行清洗，彻底解决了此问题，提升了系统鲁棒性。

## 6. 功能请求与路线图信号

- **高优先级信号：会话列表优化** (Issue #1337, PR #1331, PR #1338)
  - 来自社区用户@MaoQianTu 的完整方案，包含时间分组和错误状态可视化。
  - **路线图信号**：已有对应的实现 PR (#1338) 和增强 PR (#1331)，表明社区有积极贡献者。虽然目前为 `stale` 状态，但反映出用户对基础体验的重视，是提升产品成熟度的明确方向。

- **用户呼声：MCP 配置便捷性** (PR #1336)
  - **诉求**：社区用户@0xFLX 提交了 PR，为 MCP 自定义服务器配置新增 **JSON 导入** 功能，以替代繁琐的逐字段填写。
  - **路线图信号**：这反映了开发者用户对高阶配置效率的追求。该 PR 目前为 `stale` 状态，但其价值较高，值得评估纳入后续版本。

- **持续演进：定时任务灵活性** (PR #1335)
  - **诉求**：社区用户@Noodles006 提议为定时任务增加“仅工作日 (周一至周五)”选项。
  - **路线图信号**：结合今日合并的定时任务兼容性修复，可以看到项目正在积极完善任务系统的功能与稳定性。

## 7. 用户反馈摘要

- **痛点明确**：多 Agent 配置隔离性 (Issue #2293) 是当前最核心的用户痛点，用户描述清晰、操作明确，并直接定位为“近期更新的 BUG”，反映出对早期稳定版本的怀念和对新版本回归问题的不安。
- **期望清晰**：与会话列表相关的两个诉求 (Issue #1337 & PR #1331) 表明用户不仅仅满足于“能用”，而是希望有更高效、更直观的管理体验。用户直接参考了 ChatGPT 的设计，给出了标准化的期望。
- **社区贡献活跃**：从多名社区用户提交的 PR (如 #1331, #1335, #1336, #1338) 可以看出，社区成员不仅提出问题，还积极提供解决方案，项目生态具有自驱力。

## 8. 待处理积压

以下为长期未响应或合并的重要 Issue 和 PR，可能影响核心体验，建议项目维护者重点关注：

- **核心功能 Bug**:
  - **Issue #2293** ([链接](https://github.com/netease-youdao/LobsterAI/issues/2293)): 多Agent USER.md 覆盖BUG。严重性高，需优先调查和修复。

- **高价值功能 PR**:
  - **PR #1338** ([链接](https://github.com/netease-youdao/LobsterAI/pull/1338)): 会话列表按时间分组展示 (closes #1337)。
  - **PR #1331** ([链接](https://github.com/netease-youdao/LobsterAI/pull/1331)): 会话列表错误状态红点徽标。
  - **PR #1336** ([链接](https://github.com/netease-youdao/LobsterAI/pull/1336)): MCP 自定义服务器配置支持 JSON 导入。
  - **PR #1333** ([链接](https://github.com/netease-youdao/LobsterAI/pull/1333)): Agent 与 Cowork 流中的 i18n 标签、Escape关闭、删除确认。

- **需定性的遗留 Issue**:
  - **Issue #1392** ([链接](https://github.com/netease-youdao/LobsterAI/issues/1392)): [已关闭] 定时任务开关无效。虽然已关闭，但其根本原因和是否在其他场景下复现，仍需确认。

**建议**：鉴于多 Agent 串扰 Bug (Issue #2293) 的特殊重要性，建议将修复此问题作为下一个补丁版本的首要任务。同时可以在社区中评论该 Issue，告知用户已收到反馈并正在进行调查，以安抚用户情绪。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 (2026-07-10)

## 1. 今日速览
- 项目过去24小时整体活跃度平稳偏低，无新Issue、无版本发布，仅新增1个待合并的Pull Request。
- 该PR聚焦于添加GPT-5.6系列模型支持，表明Moltis仍在跟进闭源模型的最新演进，但社区讨论和反馈数量有限。
- 无Bug报告、无重要合并事件，项目状态健康但缺乏显著进展信号，维护者需关注PR的审查与合并节奏。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无已合并或关闭的PR，项目核心代码库未发生实质性变更。值得注意的是一个待合并的PR #1146 提出了对GPT-5.6模型的支持，若能顺利合并将为用户提供更新的模型能力，但目前仍处于审查阶段。

## 4. 社区热点
- **[PR #1146] Add GPT-5.6 model support** (待合并)  
  - 作者：PeterDaveHello  
  - 创建于2026-07-09，最后更新2026-07-10  
  - 评论数：0 | 👍：0  
  - 链接：https://github.com/moltis-org/moltis/pull/1146  

  该PR是目前社区唯一活跃的贡献点，虽然暂无评论和点赞，但其提案内容（注册GPT-5.6 Sol/Terra/Luna模型、调整上下文窗口限制、更新配置示例）直接回应了用户对最新GPT能力的需求。缺乏讨论可能意味着社区尚未充分关注或维护者尚未启动评审。

## 5. Bug 与稳定性
过去24小时未报告任何Bug、崩溃或回归问题。项目当前稳定性未受干扰。

## 6. 功能请求与路线图信号
- **GPT-5.6模型支持 (PR #1146)**：该请求直接对标OpenAI最新发布的模型（GPT-5.6），包括三个变体（Sol、Terra、Luna）的注册、上下文窗口限制（1.05M token / 372K token）以及配置示例更新。若PR通过，Moltis将成为首批支持该模型的开源AI Agent工具之一，可视为下一版本的重要候选功能。

  当前无其他新功能请求或路线图讨论。

## 7. 用户反馈摘要
过去24小时内无用户评论或被标记的反馈。项目社区互动为零，可能是由于无Issue更新或用户对当前版本满意度较高，但也可能反映出项目对外沟通不足。

## 8. 待处理积压
- **[PR #1146] Add GPT-5.6 model support** (2026-07-09创建，至今未合并)  
  - 建议维护者尽快启动代码审查、测试合并，避免新模型支持落后于社区预期。  
  - 链接：https://github.com/moltis-org/moltis/pull/1146

  当前无长期未响应的Issue或PR，项目积压负担较轻。

---

**总结**：Moltis项目今日处于静默期，唯一亮点是GPT-5.6支持PR的提出。建议维护团队利用低负载窗口加速该PR的合并进程，并适当引导社区讨论以提升项目活跃度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw（QwenPaw）项目日报 | 2026-07-10

## 1. 今日速览

- **重大里程碑**：项目于今日正式发布 **v2.0.0 稳定版**，核心架构迁移至 AgentScope 2.0（Runtime 2.0），标志着进入全新架构时代。
- **超高活跃度**：过去 24 小时共处理 **44 条 Issue**（21 条新开/活跃，23 条关闭）和 **47 个 PR**（21 个待合并，26 个已合并/关闭），社区贡献与维护节奏极高。
- **密集修复期**：多起严重的回归 Bug（如 MCP 权限失效、Windows 沙箱递归爆炸、中文 embedding 错误）被报告，部分已有对应修复 PR；同时大量 v2.0.0 预发行版问题被清理关闭。
- **社区热情高涨**：#2291 长期贡献者招募帖持续获得关注（64 条评论），新设计提案（主题皮肤、会话分组）涌现，表明社区信任度与参与度正向增长。
- **总体健康度**：项目活跃度 ⭐⭐⭐⭐⭐（极高），稳定性 ⭐⭐⭐（中等，修复密集但严重 Bug 未全闭合），路线清晰度 ⭐⭐⭐⭐（v2.0 目标明确）。

> 数据来源：GitHub [QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 2. 版本发布

### v2.0.0 Stable（正式版）
- **Release**: [v2.0.0](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0)
- **核心变更**：基于 AgentScope 2.0 重构 Runtime 2.0 内核，全面采用新架构、API 和运行时模型。
- **破坏性变更**：从 AgentScope 1.x（`agentscope==1.0.20`）迁移至 2.0，影响后端全部组件（Issue [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727)）。
- **迁移注意事项**：
  - 历史消息、日志、记忆文件的兼容性**尚未明确保证**（见 Issue [#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948)）；
  - 使用 `qwenpaw` CLI 的用户**务必**参考即将发布的升级指南（社区已要求）。

### v2.0.0-beta.7 / v2.0.0-beta.6
- 前者修复了 `ReMe` 记忆汇总中 `session_id` 传播问题（[PR #5938](https://github.com/agentscope-ai/QwenPaw/pull/5938)），更新了官网主页文字与视觉。
- 后者增加了 Channels 模块单元测试，并修复了 `envelope` 工具结果错误状态传递问题。

> 提示：如果使用 v2.0.0-beta.x 系列，请尽快升级至 v2.0.0 正式版以获得最新修复。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 说明 | 状态 |
|----|------|------|
| [#5942](https://github.com/agentscope-ai/QwenPaw/pull/5942) | bump version to v2.0.0（版本标记） | ✅ 合并 |
| [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) | 更新官网主页，适配 2.0 五大能力（Agent OS, Loop Engineering, Scroll Context, ReMe v0.4, TUI） | ✅ 合并 |
| [#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938) | 修复命令式记忆归档时 `session_id` 丢失问题 | ✅ 合并 |
| [#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932) | 更新 v2.0 文档 | ✅ 合并 |
| [#5937](https://github.com/agentscope-ai/QwenPaw/pull/5937) | 修复文档新闻格式 | ✅ 合并 |
| [#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936) | 回退 per-message 时间注入变更（UI 显示不佳） | ✅ 合并 |
| [#5933](https://github.com/agentscope-ai/QwenPaw/pull/5933) | 为网络搜索与抓取结果添加 ToolChunk 示例 | ✅ 合并 |
| [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949) | 修复 MCP 访问策略即时生效问题 | 🔔 待合并 |
| [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931) | 新增基于受限令牌的 Windows 沙箱 | 🔔 待合并 |
| [#5935](https://github.com/agentscope-ai/QwenPaw/pull/5935) | 重构工具结果截断逻辑，统一为 ToolResultPruningMiddleware | 🔔 待合并 |

**关键进展**：v2.0.0 正式版发布后，维护者迅速关闭大量预发行 Bug，并同时推进 MCP、沙箱、内存中等关键组件的修复与重构。项目整体处于“大版本发布 – 快速修复 – 新功能补充”的健康节奏。

---

## 4. 社区热点

### 评论数最多的 Issues

| Issue | 评论数 | 主题 | 链接 |
|-------|--------|------|------|
| #2291 | 64 | 开放任务招募——欢迎贡献 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/2291) |
| #5401 | 15 | 前端崩溃：大量工具调用历史无法渲染 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5401) |
| #4727 | 12 | Breaking Change: 后端迁移至 AgentScope 2.0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4727) |
| #5273 | 11 | v2.0.0 预发行 Bug 集中跟踪 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5273) |

### 分析
- **贡献入口受关注**：#2291 以 64 条评论稳居首位，说明社区对新贡献者友好度非常在意。多个设计提案（如 #5909 主题皮肤、#5943 会话分组）均来自该 Issue 认领。
- **前端稳定性是最大痛点**：#5401 表明 Console 前端在处理 `type: "data"` 内容块时崩溃，影响大型会话的正常使用。该 Issue 今日关闭，应已有修复。
- **版本迁移顾虑**：#4727 和 #5273 的高评论表明用户对 v2.0.0 破坏性变更感到不确定，迫切需要详细的迁移说明。

---

## 5. Bug 与稳定性

### 按严重程度排列（今日报告）

| Bug | 严重程度 | 描述 | 是否有 Fix PR |
|-----|----------|------|---------------|
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | **致命** | Windows 桌面壳沙箱 icacls 超时被静默吞掉 → pwsh 递归爆炸 + 20GB 内存，且无法关闭，必须回退至旧版本 | ❌ 尚未 |
| [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) | **高** | 中文记忆文件 embedding 400 错误：截断按字符数而非 token 数 | ❌ 尚未 |
| [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) | **高** | v2.0.0 MCP 中禁用子工具后 agent 仍可调用 | ✅ PR [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949) |
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | **高** | 上下文压缩时 tool_call 结构丢失 → 400 错误 / 消息计数不匹配 | ❌ 尚未 |
| [#5910](https://github.com/agentscope-ai/QwenPaw/issues/5910) | **中** | Auto Memory Search 导致 OpenAI Responses API 请求失败（502 Cloudflare） | ❌ 尚未 |
| [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | **中** | `model_factory.py` 调试日志误用 WARNING 级别导致刷屏 | ❌ 尚未 |
| [#5946](https://github.com/agentscope-ai/QwenPaw/issues/5946) | **中** | 提示“Full output preserved durably”导致 agent 发起无效的 recall_history 调用 | ❌ 尚未 |
| [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) | **低** | 防重复功能异常触发 Doom loop（实际对话未重复） | ❌ 尚未 |
| [#5896](https://github.com/agentscope-ai/QwenPaw/issues/5896) | **低** | v2.0 迭代次数限制计次错误，基于上次触发而非新消息 | ❌ 尚未 |

**简要分析**：Windows 沙箱递归爆炸 (#5951) 是今日最严重的 Bug，直接导致用户无法使用桌面版，且无任何关闭途径。MCP 权限失效 (#5947) 已有修复 PR，预计很快合并。中文 embedding 问题 (#5950) 影响中文用户群体，需优先修复。

---

## 6. 功能请求与路线图信号

### 新提出的功能需求

| Issue | 功能 | 链接 | 被纳入可能性 |
|-------|------|------|--------------|
| [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) | 会话分组 + 导入导出 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5903) | **高**（已有设计提案 [#5943](https://github.com/agentscope-ai/QwenPaw/issues/5943)，贡献者已认领） |
| [#5909](https://github.com/agentscope-ai/QwenPaw/issues/5909) | 可配置主题/皮肤模块（Task #1 from #2291） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5909) | **高**（P0 任务，贡献者 nolanchic 已提交设计提案） |
| [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) | 桌面端 LaTeX 公式渲染（KaTeX） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5453) | **中**（持续有人点赞，但未看到关联 PR） |
| [#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948) | 提供 v2.0 升级指南 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5948) | **高**（维护者已标记，预计很快发布） |
| [#3569](https://github.com/agentscope-ai/QwenPaw/issues/3569) | 定时任务支持执行记录、编辑参数、版本回退 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3569) | **低**（长期开放，暂无人认领） |
| [#3623](https://github.com/agentscope-ai/QwenPaw/issues/3623) | 多智能体会话间反馈机制（任务移交） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3623) | **低**（需求明确但缺少贡献者） |

### 已有 PR 暗示的路线图方向
- **Observability 增强**：PR [#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) 为 Langfuse 跟踪注入用户/会话/版本信息。
- **API 自动化**：PR [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) 在 SSE 响应中加入结构化运行结果，方便 Java 等外部服务监控异常中断。
- **沙箱安全**：PR [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931) 新增基于受限令牌的 Windows 沙箱，直接回应 #5951 的沙箱灾难。

---

## 7. 用户反馈摘要

以下提炼自 Issues 评论区中的真实用户声音（已脱敏）：

- **防重复功能误触发**（#5906）：“开启防止重复后，正常对话错误触发了 Doom loop，但实际上对话内容根本没有重复。”
- **迭代次数计次混乱**（#5896）：“v2.0 版本迭代次数计次基于上次触发时间，而不是从新消息开始计算，导致刚提问几句就被限制。”
- **Windows 沙箱灾难**（#5951）：“升级后 pwsh 窗口无限递归爆炸，内存吃满 20GB，没有任何途径关闭，只能回退到 v1.1.12。”
- **中文用户 embedding 受阻**（#5950）：“用 bge-m3 本地 embedding，中文记忆文件重建索引报 400，都是因为截断按字符数而非 token 数。”
- **飞书对接权限问题**（#3432, 已关闭）：“权限已给足，但 API 对接始终无法成功，OpenClaw 之前很顺利，QwenPaw 不行。”
- **UI 过时感**（#3571, 已关闭）：“顶栏太高像泰山压顶，希望能隐藏或移到侧边栏。”
- **对 v2.0 的期待与焦虑**（#5948）：“升级 v2 后历史消息、日志、记忆是否兼容？请给一份破坏性变更列表。”

这些反馈集中反映：用户对 v2.0 的稳定性（尤其是 Windows 生态）和兼容性非常敏感，同时对功能细节（防重复、迭代计数）的体验要求较高。MCP 权限等“预期工作但实际无效”的问题也降低了信任感。

---

## 8. 待处理积压

### 长期未响应的重要 Issue（>7 天无维护者回复）

| Issue | 提出时间 | 主题 | 链接 | 建议动作 |
|-------|----------|------|------|----------|
| #5453 | 2026-06-23 | 桌面端 KaTeX 支持 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5453) | 标记需求并鼓励社区 PR |
| #3623 | 2026-04-20 | 多智能体会话间反馈机制 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3623) | 评估是否采纳，更新路线图 |
| #3441 | 2026-04-15 | 强制停止后 agent 重复处理最后提示 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/3441) | 标记为已知 Bug，提供临时 workaround |

### 急需回复的高优先级 Bug

| Issue | 状态 | 链接 | 紧急原因 |
|-------|------|------|----------|
| #5951 | **OPEN** (今天) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5951) | Windows 用户完全无法使用桌面版 |
| #5950 | **OPEN** (今天) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5950) | 影响所有使用中文 embedding 的用户 |
| #5856 | **OPEN** (2026-07-08) | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 上下文压缩破坏工具调用结构，导致后续请求失败 |

> 建议维护团队优先处理 #5951 和 #5950，这两者直接阻挡了大量用户正常使用 v2.0。

---

**日报总结**：v2.0.0 正式发布是项目里程碑事件，但随之而来的回归 Bug 需要快速救火。社区贡献活跃度极高，设计提案与功能需求并存，维护团队应迅速响应最严重的问题（特别是 Windows 沙箱与中文 embedding），同时发布正式的迁移指南以缓解用户焦虑。整体而言，项目处于“大版本发布后的应力测试期”，若能在一周内闭合今日报告的致命 Bug，将迅速转入稳定增长轨道。

*数据截止：2026-07-10 23:59 UTC | 生成：CoPaw 项目分析师 AI*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为AI智能体与个人AI助手领域的开源项目分析师，以下是基于您提供的ZeroClaw (ZeroClaw-labs/zeroclaw) GitHub数据生成的2026年7月10日项目动态日报。

---

# ZeroClaw 项目日报 | 2026年7月10日

---

## 今日速览

今日ZeroClaw项目呈现**极高的社区活跃度**，Issue与PR的总更新量达到86条，反映出项目正经历密集的开发与反馈周期。尽管没有新版本发布，但在**定时任务`uses_memory`功能落地**、**HTTP安全加固**以及**上下文预算机制修复**等关键领域取得了实质性进展。同时，社区报告了多个与**流式输出**和**特定供应商（如Anthropic、Bedrock）集成**相关的Bug，并被迅速响应。项目整体处于一个快速迭代、问题驱动的高强度开发阶段，健康状况良好。

## 版本发布

无

## 项目进展

今日合并/关闭了9个PR，关闭了10个Issue，推动项目在功能完善和稳定性上迈出重要一步。

- **定时任务增强**：PR [#8676](https://github.com/zeroclaw-labs/zeroclaw/pull/8676) 被合并，成功将`uses_memory`标志位暴露在CLI、`cron_add`/`cron_update`工具及Web网关中。现在，用户可以为定时任务开启或关闭记忆功能，增强了自动化的灵活性。
    - 关联 Issue [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) 和 [#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) 随之关闭。

- **安全加固**：PR [#8829](https://github.com/zeroclaw-labs/zeroclaw/pull/8829) 被合并，为Web网关添加了默认的HTTP安全响应头，解决了安全扫描发现的11个信息级风险，提升了网关的基线防护能力。

- **核心稳定性修复**：PR [#8840](https://github.com/zeroclaw-labs/zeroclaw/pull/8840) 被合并，修复了上下文预算管理的关键Bug。现在上下文修剪逻辑将使用**供应商报告的Token数**而非简单的字符数/4进行估算，有效防止了在密集内容（如代码、JSON）场景下因预算错估导致的掉帧或截断问题。

- **开发流程优化**：PR [#8859](https://github.com/zeroclaw-labs/zeroclaw/pull/8859) 被合并，改进了PR模板，新模板包含了结构化的“测试”部分及A/B测试方案，旨在提升贡献质量和审查效率。PR [#8901](https://github.com/zeroclaw-labs/zeroclaw/pull/8901) 则提出了一项大规模的代码库清理工作，旨在移除注释中的`#NNNN`引用等官僚化内容，并通过CI门控，提升代码库整洁度。

- **Bug修复**：PR [#8760](https://github.com/zeroclaw-labs/zeroclaw/pull/8760) 被合并，修复了daemon的agent输出错误地流入daemon标准输出的问题，改善了控制台信息的清晰度。

## 社区热点

今日讨论最活跃的议题聚焦于**核心Agent能力认知**和**项目治理层面**。

1.  **[Issue #5862] Agent为何不知晓自己能添加定时任务（Cron）？**
    - **链接**: [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)
    - **动态**: 该议题持续获得13条评论，是今日讨论的核心之一。
    - **诉求分析**: 用户反馈使用ZeroClaw时，Agent声称自己无法执行“每晚8点提醒”的任务，但ZeroClaw本身支持`zeroclaw cron`工具。此问题暴露了Agent在**工具自我认知**上的缺陷，即Agent未能正确识别并使用Cron工具。这不仅是Bug，更涉及到工具调用、系统提示词与Agent行为对齐的深层次设计问题。社区对此高度关注，期望ZeroClaw的Agent能更智能地选择和使用自身能力。

2.  **[Issue #6808] RFC：工作流、看板自动化与标签清理**
    - **链接**: [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/pull/6808)
    - **动态**: 该治理性RFC同样有13条评论，状态已更新为“已接受/正在执行”。
    - **诉求分析**: 社区和核心维护者（Audacity88）在积极探讨如何优化项目维护流程，通过自动化减少人工负担。这反映了ZeroClaw随着复杂度提升，维护者正努力构建更健壮的开发规范和工作流，是一个项目走向成熟的重要标志。

## Bug 与稳定性

今日共报告了约13个Bug类Issue，主要集中在新功能、特定平台集成和流式输出模块。按严重程度排列如下：

1.  **S0：数据丢失/安全风险**
    - **[Issue #6672]**: `reasoning_content`在小米MIMO模型的Agent工具调用循环中未被传递，导致后几轮缺失推理过程。**严重性高**，目前状态为`status:blocked`，需作者回应。**尚无明确Fix PR**。
    - **[Issue #6558]**: 连接阿里云Qwen模型时因`405 Method Not Allowed`错误告失败。**严重性高**，目前处于`status:blocked`，需作者回应。**尚无明确Fix PR**。

2.  **S1：工作流阻塞**
    - **[Issue #8654]**: `skill-review`后台进程因切片索引越界导致panic（SIGSEGV），在工具密集场景下会杀死整个Agent进程。**严重性高**，已有3条评论，状态为`status:in-progress`。**尚无明确Fix PR**。
    - **[Issue #8934]**: Gemini原生函数调用失败，因`thought_signature`在处理历史记录时被丢弃。**严重性高**，刚报告，**尚无Fix PR**。

3.  **S2/S3：功能降级/次要问题**
    - **[Issue #8952]**: 流式输出的文本在首尾有空白符时会被重复发送。**已有Fix PR [#8951](https://github.com/zeroclaw-labs/zeroclaw/pull/8951)**。
    - **[Issue #8929]**: 流式叙述在最终显示文本被裁剪时会发生重复。与#8952类似，均涉及流式输出逻辑缺陷。**尚无明确Fix PR**，但可能与#8951关联。
    - **[Issue #8945] & [#8944]**: ZeroCode TUI的输入框和转录区存在与macOS文本替换、鼠标选择交互方面的问题。
    - **[Issue #8936]**: `loop_detector`的`hash_value`函数在每次工具调用时深克隆整个工具参数JSON树，造成性能热点和额外的内存分配。

## 功能请求与路线图信号

- **可观测性增强**：[Issue #8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) 请求在OpenTelemetry导出中添加`gen_ai.conversation.id`，以便在跨轮会话中进行关联追踪。这是一项提升Agent行为可观测性的关键能力，符合主流AI应用的监控标准，有较大概率被采纳。
- **TUI统一插件/能力目录**：[Issue #8907](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) 提议为ZeroCode TUI增加一个统一的能力目录面板，以展示所有内置、已安装和可注册的插件。这是实现插件/功能统一（#8850）计划的一部分，与现有大型PR [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) 的“SOP可视化创作”追求一致，表明项目正向更好的用户体验和模块化管理迈进。
- **本地优先模式（小模型）**：[Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 仍在等待，它提出了一个针对小型本地模型的精简模式，以减少提示膨胀并防止提示泄漏。尽管已有PR [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) 等更大规模的功能在推进，但该特性对于吸引本地部署用户至关重要，其“已接受”状态表明它仍在路线图上。

## 用户反馈摘要

- **痛点**：
    - **认知不一致**：用户对Agent不能自主识别并使用已有Cron工具感到困惑（#5862），表明智能体在能力自我宣告方面有待加强。
    - **集成复杂**：配置Amazon Bedrock（#8925）和特定国产模型（#6558）时遇到障碍，用户期望有更清晰、即插即用的文档或向导。
    - **体验退化**：在长对话中出现幻觉/主题漂移（#6517），以及流式输出的重复问题（#8952, #8929），损害了核心交互体验。
    - **快速入门困惑**：在 quickstart 中添加Anthropic模型后，仪表盘可用但聊天窗口不可用，需重启才能生效（#8094），降低了初学者的好感度。

- **期待**：
    - **更智能的Agent**：用户期待Agent能更主动地调用其“已知”的工具（如Cron），而不是被告知后才使用。
    - **更丰富的交互**：用户希望Discord频道能支持更多原生特性，如嵌入、斜杠命令选项和组件（#7831），以增强在不同平台上的使用体验。

## 待处理积压

- **[Issue #5287]**: 关于“本地优先模式”的功能请求，已有4条评论，被标记为 `status:accepted`。虽然今日无大幅更新，但作为已被路线图接受的增强功能，持续吸引着关注本地部署的用户。
    - **链接**: [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)

- **[Issue #5862]**: 核心Bug“Agent不知悉自身Cron能力”，已有多方讨论超过90天，至今仍处于`status:blocked`和`needs-author-action`状态，提示社区或维护者需决定下一步行动方案。
    - **链接**: [Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)

- **[Issue #6517]**: 关于“上下文溢出导致幻觉”的Bug，处于`status:blocked`状态，急需作者提供复现环境或更多信息，否则可能因`stale`而被关闭。
    - **链接**: [Issue #6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517)

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*