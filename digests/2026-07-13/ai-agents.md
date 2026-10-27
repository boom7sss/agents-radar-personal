# OpenClaw 生态日报 2026-07-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-13 03:35 UTC

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

It seems you have provided a lot of data, but the date in your prompt and the data might be slightly misaligned. Based on the provided data (which shows an update date of 2026-07-13 in the Issues and PRs), I will generate the report as requested.

Here is the daily report generated from the provided OpenClaw data.

---

# OpenClaw 项目日报 | 2026-07-13

## 1. 今日速览
今日项目活跃度极高，社区与开发者协作紧密。过去24小时内，共有500条Issue和500条PR被更新，其中新提交或活跃的Issue达372条，待合并的PR也有270条，体现了项目强大的社区驱动力。尽管代码库活跃且发布频繁，但数据中暴露出多个P0/P1级别的严重稳定性问题（如内存泄漏、数据库损坏和关键渲染回归），维护者已针对性地创建了多个修复PR。新版本 `v2026.7.1-beta.6` 引入了对新模型和provider的支持，显示出项目在持续扩展生态。社区讨论高度集中于**安全性增强**（如凭据遮蔽、文件沙箱）与**跨平台支持**（Linux/Windows桌面应用）。

## 2. 版本发布
- **版本号**: `v2026.7.1-beta.6`
- **链接**: [OpenClaw v2026.7.1-beta.6](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.6)
- **更新内容**:
    - **新模型与Provider**: 新增了对 Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1 和 ClawRouter 的支持。
    - **默认模型变更**: 将 `GPT-5.6` 设为新安装的默认模型。
    - **系统指令增强**: 为 `Sol` 和 `Terra` 引入了 `/think ultra` 指令，为 `Luna` 引入了 `max` 指令。
    - **Provider兼容性**: 修复了与Z.AI provider的兼容性，使其 `max` 指令生效。
    - **OAuth优化**: 在OAuth认证流程后，刷新了模型可用性列表。
- **破坏性变更/迁移**: 本次发布没有明确的破坏性变更说明。但默认模型的变更可能会影响现有用户的预期行为（例如Token消耗增加）。建议用户检查各自配置中设定的模型，并留意新模型在现有工作流中的表现。

## 3. 项目进展
今日的PR活动主要集中在代码质量、性能优化和关键Bug修复上，显示出项目正从“功能快速迭代”向“提升稳定性与代码健壮性”的阶段过渡。

- **关键修复与重构:**
    - **[#105953] - 配置深层合并修复**: 修复了在应用嵌套会话重试配置时，会意外丢弃兄弟provider重试默认值的问题。这是一项重要的稳定性修复，`steipete` 创建了此PR。
    - **[#105927] - 统一错误格式化**: 跨核心、网关、插件运行时等边界统一了错误格式化逻辑，确保错误信息的一致性和完整性，有利于调试。
    - **[#105947] - 使用原生AbortSignal组合**: 通过使用Node.js 22.19+原生的 `AbortSignal.any`，移除了私有组合逻辑，提升了代码质量和运行时可靠性。
    - **[#103984] - 修复CJK文本压缩**: 修复了会话压缩（compaction）功能在处理中、日、韩(CJK)文字时，Token估算不准确的问题。这确保了使用这些语言的用户不会在长对话中丢失过多上下文。当前状态为 `ready for maintainer look`。
    - **[#105903] - 优化Cron会话回收器性能**: 修复了Cron会话回收器中的O(SxT)性能瓶颈，避免了在处理大量Cron任务时阻塞Node.js事件循环。
    - **[#105941] - 修复Cron直接投递重试**: 修复了Cron直发模式在遇到 `ECONNRESET` 等含糊网络错误时，可能进行错误重试的问题，防止了消息重复发送。
    - **[#105901] - 修复Discord回复引用**: 修复了当Discord REST API未返回嵌套的`referenced_message`时，OpenClaw无法正确识别回复上下文的Bug。

- **代码清理与基建:**
    - **[#105859] - 死导出校验工具上线**: 引入了一项新的CI检查，用于限制未使用的导出代码，防止代码库膨胀。`steipete` 进行了多项相关的重构工作（如 `#105855`, `#105867`, `#105945`）以让代码库通过此检查。
    - **[#105919] - 修复TypeScript LOC基线漂移**: 修复了因并发提交导致的线代码统计基线漂移问题，确保CI检查的准确性。

## 4. 社区热点
今日社区讨论热度高度集中，主要围绕几个突出的稳定性、安全和功能缺失问题。

- **🔥 最热Issue：Linux/Windows Clawdbot Apps**
    - **链接**: [#75](https://github.com/openclaw/openclaw/issues/75)
    - **热度**: 110条评论，81👍
    - **分析**: 这是由社区长期维护者 `steipete` 提出的功能请求，并非今日新开，但其持续的活跃度显示了社区对补齐桌面端生态（从macOS/iOS/Android扩展到Linux/Windows）的强烈渴望。这是项目平台化进程中的关键缺失。

- **🔥 安全与隐私讨论：Masked Secrets & Filesystem Sandboxing**
    - **链接**: [#10659](https://github.com/openclaw/openclaw/issues/10659), [#7722](https://github.com/openclaw/openclaw/issues/7722)
    - **热度**: 分别有14条/10条评论，及4个👍
    - **分析**: 这两项功能请求共同指向了社区对**企业级安全和数据保护**的迫切需求。`Masked Secrets` 要求API Key对Agent本身“不可见”，是防御提示注入的终极方案。`Filesystem Sandboxing` 则是常见的沙箱访问控制模型。这表明项目用户群体正从个人爱好者向更注重合规和安全的生产环境用户转变。

- **❓ 其他活跃讨论：Agent Turn触发与会话初始化冲突**
    - **链接**: [#17840](https://github.com/openclaw/openclaw/issues/17840) (Reaction-Triggered Turns), [#102020](https://github.com/openclaw/openclaw/issues/102020) (会话初始化冲突)
    - **分析**: `Reaction-Triggered Turns` (7条评论) 反映了用户希望Agent能从“被动回答”变为更具“交互主动性”的期望。`会话初始化冲突` (11条评论) 则是在多通道/高并发场景下暴露出的实际竞态Bug，社区正积极讨论其复现条件和修复方案。

## 5. Bug 与稳定性
今日数据显示项目面临一些严重的稳定性挑战，但幸运的是大部分都有修复PR在跟进。

| 严重程度 | Issue ID | 标题 | 摘要 | 修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 内存泄漏：RSS从350MB增长至15.5GB | 网关进程存在严重内存泄漏，运行数天后被OOM Killer杀死，导致循环崩溃重启。 | (**没有关联的修复PR**) |
| **P0** | [#104721](https://github.com/openclaw/openclaw/issues/104721) | 所有工具返回 "(see attached image)" 字符串 | 一个严重的回归，导致所有工具的输出被替换为固定占位符文字，Agent无法读取任何工具返回的真实数据。 | (**没有关联的修复PR**) |
| **P0** | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI启动预检可能损坏SQLite数据库 | 在网关运行期间运行特定CLI健康检查命令，可能导致数据库 `malformed`，已复现多次。 | (**没有关联的修复PR**) |
| **P1** | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出渲染为不可读图片附件 | 长对话或大量ANSI控制字符的输出会变成图片占位符，Agent因此无法读取文本证据。 | (**没有关联的修复PR**) |
| **P1** | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex驱动的Telegram多次超时 | 升级后，Codex集成下的Telegram会话在任务完成后无法正确返回 `completed` 状态，导致会话卡死。 | (**没有关联的修复PR**) |
| **P1** | [#102020](https://github.com/openclaw/openclaw/issues/102020) | 第二次消息发送失败 | 新会话的第一条消息成功，第二条消息在Signal和`dash`频道上会以“会话初始化冲突”失败。 | (**没有关联的修复PR**) |
| **P1** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex钩子导致CPU过载 | Codex的 `pre_tool_use` 钩子会生成大量消耗CPU的进程，导致网关RPC停滞。 | (**没有关联的修复PR**) |

**稳定性总结**: 多个P0级别的回归和严重Bug同时出现（特别是“**图像占位符**”和“**数据库损坏**”），表明最近的几次更新（`2026.6.6`, `2026.6.1`）可能引入了复杂的副作用。维护者虽然已有多项PR在修复，但压力较大。

## 6. 功能请求与路线图信号
基于今日活跃的Issues和PR，未来版本的功能重点可能集中在以下方面：

- **安全基础架构**:
    - **Masked Secrets** ([#10659](https://github.com/openclaw/openclaw/issues/10659)): 这一呼声很高的功能如果实现，将为防止凭据泄露提供最根本的解决方案。
    - **Filesystem Sandboxing** ([#7722](https://github.com/openclaw/openclaw/issues/7722)): 细化文件访问权限是吸引更多企业用户的关键。
    - **Capability-based Permissions** ([#12678](https://github.com/openclaw/openclaw/issues/12678)): 为第三方技能和工具实现基于能力的权限模型，是构建安全生态的基石。

- **开发体验提升**:
    - **Plugin Hot-Reload** ([#14438](https://github.com/openclaw/openclaw/issues/14438)): 很多插件开发者都期望能避免每次修改代码后都重启整个服务。虽然今日未出现修复PR，但这是提升开发效率的高优需求。
    - **Session Snapshots** ([#13700](https://github.com/openclaw/openclaw/issues/13700)): 在长对话中支持保存、加载和分支上下文，将为用户带来强大的调试和实验能力。

- **平台与集成**:
    - **Linux/Windows Desktop Apps** ([#75](https://github.com/openclaw/openclaw/issues/75)): 这是横亘在项目前的最大里程碑，将直接影响用户群体规模。
    - **AWS Deployment Guide** ([#13597](https://github.com/openclaw/openclaw/issues/13597)): 完善的云部署文档将显著降低生产环境的部署门槛。

- **已有关联PR的功能**:
    - **[#15032] - Per-spawn Tool Restrictions**: 已有一个PR在进展，这可能被纳入下一版本，为用户提供更精细的子Agent权限控制。

## 7. 用户反馈摘要
从今日的Issue评论中，我们提炼出一些典型的用户声音：

- **“这对生产环境来说是个大问题。”**: 多次出现在P0/P1的稳定性和回归Bug中，特别是 #104721（图像占位符）和 #101290（数据库损坏）。用户对最近回归问题表达了明显的不满。
- **“我希望能安全地使用这个功能，而不必担心中毒攻击。”**: 在 #10659(Masked Secrets) 和 #7707(Memory Trust Tagging) 的讨论中体现。用户开始关注Agent的本质安全问题，而不仅仅是功能实现。
- **“开发插件时的迭代体验可以更好。”**: #14438(Plugin Hot-Reload) 的提出者描述了每次改动都需要重启、清除缓存的繁琐过程，反映开发者社区对更好的开发体验有明确期望。
- **“我们迫切需要一个标准的方式来备份和恢复配置。”**: #13616(Backup/Restore Utility) 的提出表明，个人用户和小型团队已经将OpenClaw用于重要的日常工作，对数据安全和灾难恢复有了实际需求。

## 8. 待处理积压
以下是一些长时间未响应或处于停滞状态，但对项目健康度至关重要的Issue和PR，需要维护者关注：

- **关键Bug积压**:
    - **[#91588] - 网关内存泄漏**: P0严重程度，持续多日，目前仅有19条评论但没有关联的修复PR。这是最危险的信号，应优先分配资源解决。
    - **[#99241] - 工具输出不可读**: P1严重程度，作为一个自2026年7月2日以来的高影响Bug，至今未有分支修复，可能会严重影响依赖长流程工具的用户。

- **长期未决的社区呼声**:
    - **[#75] - Linux/Windows Clawdbot Apps**: 虽然很热门，但可能因为其工程量巨大而长时间处于“OPEN”状态。建议维护者对此进行明确的状态更新（如“搁置中，正在寻找贡献者”或“已纳入Q3路线图”）。
    - **[#10659] - Masked Secrets**: 这是一个与安全直接相关的重大功能请求，评论和点赞数都很高，关联PR的存在表明其在路线图上，但进展有待加速。

- **`P1`且`no-new-fix-pr`的议题**:
    - 大量P1级别且没有修复PR的议题（如 #87744, #53408, #102400 等），表明维护团队在面对如此多的高优先级问题时，可能出现了修复资源的瓶颈。建议优先将开发力量集中在最关键且影响面最广的几个P0/P1问题上。

---

## 横向生态对比

好的，作为专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，我将基于您提供的各项目动态数据，为您呈现一份横跨 2026 年 7 月 13 日的生态全景分析报告。

---

### **AI 智能体与个人 AI 助手开源生态全景报告 (2026-07-13)**

#### **1. 生态全景**

当前 AI 智能体开源生态正处于 **“高歌猛进后的阵痛与分化期”**。一方面，以 OpenClaw 为代表的核心项目持续通过频繁发布新版本（如加入新模型、新指令）来扩展功能边界，生态版图快速扩大。但另一方面，多个项目（OpenClaw, CoPaw, ZeroClaw, IronClaw）不约而同地暴露出 **严重的稳定性与兼容性问题**——包括内存泄漏、数据库损坏、核心 API 调用失败以及 CI 基础设施脆弱。这揭示了一个共同趋势：社区在追求功能丰富的下一代架构（如多Agent、扩展运行时）时，基础代码的健壮性、版本迁移的平滑性以及测试覆盖的完整性正成为制约项目成熟度的关键瓶颈。社区不再是单纯追求“能用”，而是开始强烈要求“好用、稳定且安全”。

#### **2. 各项目活跃度对比**

| 项目名称 | 今日活跃 Issue 数 | 今日活跃 PR 数 | 新版本发布 | 健康度评估 | 核心焦点 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 372 (新提交) | 270 (待合并) | v2026.7.1-beta.6 | **🟡 中风险** | 大量P0/P1 Bug修复，社区安全诉求强烈 |
| **Hermes Agent** | 50 (更新) | 50 (更新) | 无 | **🟢 活跃健康** | 高Bug修复产出，架构讨论（多Agent） |
| **CoPaw** | 36 (更新) | 22 (更新) | 无 (v2.0.0后稳定期) | **🔴 高风险** | v2.0.0爆发大量严重Bug，兼容性故障 |
| **NanoBot** | 4 (新) | 10 (新) | 无 | **🟢 活跃健康** | 小步快跑，快速修复短板 |
| **ZeroClaw** | 12 (新) | 50 (新) | 无 | **🟡 中风险** | 严重Bug积压，大量PR待审，交付放缓 |
| **IronClaw** | (通过PR分解) | 50 (新) | 无 | **🟡 中风险** | CI系统脆弱性成主要瓶颈，开发受阻 |
| **PicoClaw** | 3 (新) | 2 (新) | 无 | **🟢 健康** | 聚焦特定Bug修复，社区讨论集中 |
| **NanoClaw** | 3 (新) | 14 (新) | 无 | **🟢 活跃健康** | 修复回归Bug，推进审批流等新功能 |
| **LobsterAI** | 少量 | 7 (合并) + 7 (待合并) | 无 | **🟢 活跃健康** | 高效迭代，专注Cowork模块稳定性与UI优化 |
| **NullClaw** | 0 | 9 (更新) | 无 | **🟢 健康** | 核心Bug修复（Cron、Discord）已就绪，待合并 |
| **TinyClaw, Moltis, ZeptoClaw** | 0 | 0 | 无 | **⚪ 静默** | 过去24小时无活动，处于休眠或开发间歇期 |

*注：健康度评估基于Bug严重程度、修复响应速度及CI健康度综合判断。*

#### **3. OpenClaw 在生态中的定位**

- **优势**：作为生态的 **核心参照项目 (Core Reference)**，OpenClaw 拥有最广泛的社区基础、最快的版本迭代速度以及对新模型/Provider 的最佳支持。其频繁发布（`beta.6`）和庞大PR池 (270待合并) 体现实力。
- **技术路线差异**：与 Hermes Agent 或 ZeroClaw 的重度架构自动化（如Kanban调度、多Agent集群）不同，OpenClaw 侧重于 **零代码/低代码的集成与配置化**，通过配置文件 (config.json) 和丰富的社区插件来满足多样性。
- **社区规模与挑战**：OpenClaw 的活动量远超其他项目（372 Issue, 270 PR），社区体量最大。但这也带来了管理挑战，例如大量 P0 级别回归（内存泄漏、数据库损坏）的存在警示核心维护者需将重心从**功能迭代**转向**质量加固**，否则可能引发核心贡献者流失。

#### **4. 共同关注的技术方向**

多个项目同时涌现出相似的需求，这构成了生态的集体进化方向：

- **安全性增强 (企业级需求)**:
    - **OpenClaw**: `Masked Secrets` (API Key对Agent不可见), `Filesystem Sandboxing`.
    - **NanoClaw**: Container `TMPDIR` 权限控制, `guard()` 函数统一审批流.
    - **IronClaw**: 寻求更好的 Secrets 管理 CLI/TUI.
    - **NanoBot**: 远程会话权限降级.
    - 趋势: 从“功能可用”到“安全可信”，社区正在集体向企业级安全标准看齐。

- **多Agent架构与协作**:
    - **OpenClaw**: (隐含) 社区在 `#17840` 讨论Agent“交互主动性”.
    - **Hermes Agent**: 核心议题 `#9514` 讨论 **单进程多Agent + 隔离**，这是架构上的关键呼声.
    - **LobsterAI**: 直接修复了 **Cowork** 模块的多个严重Bug，这是多Agent协作的具体实现.
    - 趋势: 资源集约化、可隔离的子Agent系统是下一阶段的核心竞争力。

- **上下文管理与长对话稳定性**:
    - **OpenClaw**: 修复CJK文本压缩问题 (`#103984`).
    - **CoPaw**: `tool_call/tool_result` 配对失败、上下文压缩导致的400错误，是今日**最普遍的故障模式**.
    - **ZeroClaw**: 默认上下文预算被系统工具耗尽 (`#5808`)，导致无限修剪循环.
    - **NanoClaw**: 输出Token上限被静默截断 (`#3023`).
    - 趋势: 上下文窗口不再是“越大越好”，而是 **智能、稳定、可预测**。如何高效管理长对话、正确配对工具调用、防止静默截断，是普遍的技术瓶颈。

- **跨平台集成**:
    - **OpenClaw**: Linux/Windows 桌面应用呼声最高 (`#75`).
    - **LobsterAI**: 增加 Windows 标题栏和安装器.
    - **PicoClaw**: Request for ARMv7 Docker support.
    - 趋势: 生态正在从 CLI/服务器端，向桌面和边缘设备（如NAS、树莓派）全面渗透。

- **CI稳定性成为双刃剑**:
    - **IronClaw**: 高亮指出了 **70%的主分支推送因CI失败而变红** 这一令人震惊的数据，并对此进行系统性诊断.
    - **OpenClaw**: 其CI检查（如限制死导出）本身成为内部讨论点，但未报告严重故障.
    - 趋势: 代码库越庞大、PR越频繁，CI作为“质量守门员”的角色就越关键，其自身的稳定性直接影响项目健康度和开发者体验。

#### **5. 差异化定位分析**

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 |
| :--- | :--- | :--- | :--- |
| **OpenClaw** | **一体化全能中心** | 从新人到进阶用户的广泛群体 | 配置驱动、插件丰富、快速集成新服务 |
| **Hermes Agent** | **开发者/高频用户首选** | 追求高度自动化和复杂工作流的开发者 | 多Agent集群、Kanban调度、深度Codex集成 |
| **NanoBot / NanoClaw** | **轻量级 Agent Runner** | 希望快速搭建可重复、有状态的 Agent 服务用户 | 聚焦单Agent执行、审批流、定时任务模板化 |
| **CoPaw** | **企业级协作平台** | 团队协作、生产化部署 | 强调沙箱、权限治理、审核流程、跨平台频道 |
| **LobsterAI** | **桌面端深度沉浸体验** | 以Mac/Windows桌面用户为主，注重GUI交互 | 原生桌面应用、专注Cowork模式、UI/UX优先 |
| **PicoClaw** | **个人轻量部署** | 个人开发者、家庭服务器/树莓派使用者 | 追求资源占用小、易于在低功耗设备上运行 |
| **ZeroClaw / IronClaw** | **前沿框架/运行时创新** | 探索 Agent 新架构的专家开发者 | 对 Agent 运行时的底层逻辑（如历史契约、成本追踪）进行深度重构 |

#### **6. 社区热度与成熟度**

- **快速迭代期 (仍有阵痛):**
    - **OpenClaw, CoPaw, ZeroClaw, IronClaw**: 这些项目处于快速开发前沿，但仍受困于稳定性问题。**CoPaw** 的 v2.0.0 发版后遭遇了最大规模的信任危机；**ZeroClaw** 的 PR 交付瓶颈和 **IronClaw** 的 CI 困境都显示其正在为快速发展付出维护代价。**OpenClaw** 虽体量最大，但修复压力也最大。

- **质量巩固期 (稳重有进):**
    - **Hermes Agent, LobsterAI, NanoBot, NanoClaw, NullClaw, PicoClaw**: 这些项目今日表现出更多的 **有序性**。它们并非不开发新功能，但更侧重于对已发布功能的缺陷修复、配置优化和体验打磨（如 LobsterAI 优化 UI, Hermes 修复大量回归）。它们的CI/测试流程似乎更为健康。

- **休眠/观望期:**
    - **TinyClaw, Moltis, ZeptoClaw**: 过去24小时无活动，可能处于开发间歇或核心团队正在准备下个里程碑。

#### **7. 值得关注的趋势信号**

1.  **“信任”成为用户体验的核心维度**: 用户不再仅仅被“能做什么”吸引，而是开始严厉批评“**不能稳定地做什么**”。CoPaw 升级后的API 400错误、ZeroClaw 的 OOM 问题、OpenClaw 的数据库损坏，都在加速用户对特定版本的流失。**开源项目的下一个竞争焦点是“可靠性”**。

2.  **安全正从功能变为基础设施**：`Masked Secrets`、`Filesystem Sandboxing`、`审批流`、`权限降级` 等词语频繁出现在不同项目的核心讨论中。这不再是锦上添花，而是从个人用户向**小型企业、开发者团队**扩展的**必备条件**。未能提供安全基石的框架将在吸引付费用户或企业贡献者时处于劣势。

3.  **多 Agent 协作的架构分歧初现**：Hermes Agent 在讨论“单进程多Agent + 隔离”，LobsterAI 在修复“Cowork”模块，而 CoPaw 则强调沙箱与权限治理。这表明行业对于**如何高效地让多个 Agent 协作**还没有统一范式。开发者需要关注哪种架构与自己未来的使用场景（资源集约 vs. 强隔离 vs. 工作流编排）更为匹配。

4.  **对开发者体验(DevEx)的呼声日益增高**: 从 IronClaw 的 Secrets 管理 CLI 需求，到 ZeroClaw 的配置默认值不合理，再到 NullClaw 的 Cron 任务静默失败。**好的AI框架不仅要对最终用户好，更要对构建它的开发者好。** 配置的合理性、CLI 工具的完善度、调试信息的清晰度，正成为评价项目的重要隐性指标。

**对开发者的参考价值**：
- **评估稳定性 > 评估功能**：在选择框架构建生产系统时，应优先考察其 CI 健康状况、近期 Bug 修复 PR 的合并速度和回滚策略，而非单纯看功能列表。
- **拥抱容错性设计**：由于整个上游生态（API、模型、Provider）和下游框架自身都不稳定，你的业务代码必须假设网络会断、上下文会错乱、工具会静默失败，并设计相应的超时、重试和兜底逻辑。
- **关注“安全与治理”层**：如果计划将 AI 智能体用于任何需要授权或敏感数据处理的场景，请优先选择已内置或正在积极开发 **细粒度权限模型和密钥管理** 的项目（如 OpenClaw 的 `Masked Secrets` 请求，NanoClaw 的 `guard` 函数）。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-07-13

## 今日速览
过去24小时项目保持高活跃度：共更新4条Issue、10条Pull Request，其中3条PR已关闭/合并。2个关于Dream session的Bug被报告（base64编码文件名不兼容、日志过滤缺失），社区同时针对Discord集成和Ollama缓存问题展开讨论。修复PR已迅速跟进，整体项目健康度良好，核心功能模块持续迭代。

## 版本发布
无（过去24小时无新版本发布）

## 项目进展
今日合并/关闭的PR如下：

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#4892](https://github.com/HKUDS/nanobot/pull/4892) | fix(webui): allow remote workspace access reduction | **已关闭** | 允许远程WebUI会话在不更改工作区的情况下将Full Access降级为Default Permission，同时限制本地主机外的项目变更和权限提升。提升了多用户场景下的安全性。 |
| [#4879](https://github.com/HKUDS/nanobot/pull/4879) | feat(long_task): gate sustained-goal behind opt-in flag (default off) | 已关闭（标记为duplicate） | 该PR建议将“持续目标”功能改为默认关闭的选配项，避免阻塞用户交互。因内容重复被关闭，但议题本身值得关注。 |
| [#4898](https://github.com/HKUDS/nanobot/pull/4898) | merge | 已关闭 | 无实质内容，推测为测试合并，无实际推进。 |

**关键进展**：WebUI远程权限管理合并，直接提升了安全性和可管理性；其余关闭的PR多为重复或测试。

## 社区热点
- **#4867 [CLOSED] [enhancement] Preserve exact prompt prefix to enable caching in Ollama and others** – 评论数最高（4条），讨论Ollama调用每回合额外增加60秒延迟的问题。用户强烈反馈“totally unusable”，虽已关闭但背后诉求（提示前缀缓存）值得后续版本关注。 [链接](https://github.com/HKUDS/nanobot/issues/4867)
- **#4897 [OPEN] [bug] Issue with Discord bot integration** – 2条评论，用户配置Discord bot后无法接收消息，已有修复PR #4899跟进。 [链接](https://github.com/HKUDS/nanobot/issues/4897)

## Bug 与稳定性
按严重程度排列（p1为最高）：

| Issue | 标题 | 严重度 | 是否有Fix PR |
|-------|------|--------|-------------|
| [#4897](https://github.com/HKUDS/nanobot/issues/4897) | Discord bot集成问题 | p1 (用户无法接收消息) | ✅ [#4899](https://github.com/HKUDS/nanobot/pull/4899) (已开放，方向：路由未授权DM到配对流程) |
| [#4894](https://github.com/HKUDS/nanobot/issues/4894) | `prune_dream_sessions()` 未能修剪base64编码的Dream会话文件 | p2 (功能兼容性) | ✅ [#4900](https://github.com/HKUDS/nanobot/pull/4900) (已开放，解码文件名后按修改时间保留最新配置数) |
| [#4893](https://github.com/HKUDS/nanobot/issues/4893) | `/dream-log` 和 `/dream-restore` 显示非Dream提交 | p2 (显示污染) | 暂无直接PR，但问题根源清晰（未过滤git log）|
| [#4896](https://github.com/HKUDS/nanobot/pull/4896) | fix(heartbeat): 重写提示以执行任务而非仅报告 | p1 (回归) | 该PR本身即为修复（开放中），修复v0.2.1重构后心跳提示未更新的回归。 |

**稳定性评估**：3个新发现Bug均有修复PR跟进，其中Discord和心跳问题被标记为p1，修复正在审查中。Dream session的两个Bug为p2，已有一个对应PR。

## 功能请求与路线图信号
- **#4867 [enhancement]** – 用户请求保留精确提示前缀以启用Ollama等模型的缓存，虽已关闭但社区呼声高（评论中详细描述了性能痛点），可能被纳入下一版本优化。
- **PR #4866 [feat] bind model presets to sessions** – 将模型预设持久化到会话元数据，使每个回合的LLM运行时不可变，并让`/model`命令作用域化。带有conflict标签，正在解决冲突中，是重要的功能增强。
- **PR #4855 [feat] add guided setup flows** – 为Channel设置添加产品化引导流程，包括验证、官方链接、QR移交、秘密安全处理及运行时启用/禁用。还在开放中，预计会提升新用户上手体验。

## 用户反馈摘要
- **Ollama用户（#4867）**：明确表示“每轮额外60秒延迟”导致“完全不可用”，即使简单对话也如此。用户期望通过缓存提示前缀来消除这一延迟，目前该问题已关闭但未解决，后续版本需重新评估。
- **Discord集成用户（#4897）**：按照文档配置后Bot在线但无法接收消息，用户感到困惑，说明现有文档或网关实现存在缺口。修复PR #4899已提出解决方案。
- **Dream session高级用户（#4894/#4893）**：指出base64文件名变更后修剪函数未同步更新，以及日志显示非Dream提交，这类细节问题表明系统对不同来源的git操作需要更严格的隔离。

## 待处理积压
- **PR #4145 fix: resolve #3958 — Weather Skill**（[链接](https://github.com/HKUDS/nanobot/pull/4145)）  
  自2026-06-01开放至今，已超过6周，新增天气技能示例及相关测试。该PR长期未合并，建议维护者评估是否因测试覆盖或设计分歧导致阻塞。
- **PR #4855 feat(webui): add guided setup flows**（[链接](https://github.com/HKUDS/nanobot/pull/4855)）  
  开放17天，更新信息停留在7月12日，仍为开放状态。作为提升WebUI用户体验的重要功能，需要持续推动审查与集成。
- **PR #4866 feat(agent): bind model presets to sessions**（[链接](https://github.com/HKUDS/nanobot/pull/4866)）  
  带有conflict标签，自7月10日起开放，需尽快解决合并冲突，否则可能阻碍其他会话相关功能的开发。

---

*数据来源：NanoBot GitHub 仓库（github.com/HKUDS/nanobot），统计时间窗口 2026-07-12 至 2026-07-13 UTC。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 Hermes Agent GitHub 数据，为您生成 2026 年 7 月 13 日的项目动态日报。

---

### **Hermes Agent 项目日报 | 2026-07-13**

#### **1. 今日速览**

今日项目活跃度极高，呈现“高产出、高堆积”的态势。过去 24 小时内，社区和贡献者处理了高达 **50 条 Issue**，其中 **41 条被关闭**，展现了强大的 Bug 修复能力和问题解决效率。PR 数量同样庞大（50 条），但 **39 条仍处于待合并状态**，合并节奏相对滞后，可能形成一定的审查积压。尽管无新版本发布，但近期特定功能的深入讨论（如单守护进程多代理架构）和大量已关闭的 Bug 修复表明，项目正处于一个从高速迭代向精细化打磨过渡的关键阶段。

#### **3. 项目进展**

今日项目取得了显著进展，大量已关闭的 PR 解决了多个关键模块的稳定性问题，整体健壮性迈进一步。

- **关键 Bug 修复（已合并/关闭）：**
    - **#22950 - fix(agent): 修复迭代预算耗尽后，回合未正确标记为“已完成”的问题。** 现在当 `max_iterations` 触发总结后，代理会正确结束本轮对话，避免无效循环。 (PR: #22950)
    - **#57746 - fix(gateway): 修复 macOS 上因意外 SIGTERM 导致 Gateway 进入无限重启循环的问题。** 这对 macOS 用户的稳定性至关重要，该问题已通过代码修复并在后续 PR #63535 中进行了优化。 (PR: #57746)
    - **#22208 - fix(cli): 修复了子进程退出码可能为 `None` 时被错误评估的逻辑漏洞。** 提升了 CLI 在意外进程崩溃场景下的鲁棒性。 (PR: #22208)
    - **#55120 - fix(desktop): 修复桌面应用工具结果摘要中，空字段被错误计入“N more fields”计数的问题。** 优化了用户界面的信息展示清晰度。 (PR: #55120)

- **功能优化与推进（已合并/关闭）：**
    - **#24039 - 辅助回退链现在可以复用主配置中的 `fallback_providers`，而非维护一个独立的硬编码列表。** 这解决了配置分裂问题，简化了用户的 Provider 容灾配置。 (Issue: #24039)
    - 大量 `sweeper:implemented-on-main` 标签的 Issue 被关闭，表明项目在 **Kanban 调度 (#22926, #23844)**、**Telegram 集成 (#22949, #63505)**、**飞书/微信适配器 (#23682, #23371)**、**MCP 插件 (#22724)** 以及 **Dashboard (#22864, #23865)** 等多个领域都有代码层面的落地和优化。

#### **4. 社区热点**

今日社区讨论的核心焦点是 **单进程多代理架构** 与 **密钥管理生态的扩展**。

- **单守护进程多代理（Multi-Agent）** - **Issue #9514** (12 条评论，6 👍)
    该 Issue 提出了一个重要的架构特性：让一个 Hermes 网关进程能运行多个彼此隔离的 Agent。评论认为，当前为一个 Agent 启动一个独立进程的方案在内存和事件循环上开销巨大。社区对此需求强烈，反映了用户对于**资源集约化**和**复杂任务分流**的诉求。

    (链接: NousResearch/hermes-agent Issue #9514)
- **集成 Infisical 作为外部密钥管理后端** - **Issue #22791** (7 条评论，13 👍)
    用户强烈要求支持 Infisical Vault。这回应了更广泛的“插件化密钥管理”呼声。13 个 👍 显示这并非个例，而是社区中许多企业在生产化部署场景下的共同痛点，即需要一个统一、安全的密钥中心。

    (链接: NousResearch/hermes-agent Issue #22791)

#### **5. Bug 与稳定性**

今日报告了一个最高优先级（P1）的 Bug，需引起核心维护者高度关注。此外，大量 P2/P3 的 Bug 已通过今日的修复而被关闭。

- **P1 - 严重 Bug:**
    - **#63425 [OPEN] - Provider 自动检测丢弃凭据池，导致故障转移失效**。当 `AIAgent` 未明确指定 Provider 时，自动检测逻辑可能覆盖用户配置的凭据池，导致无法进行关键字轮换和故障转移。此问题已有关联的 PR (#63533) 提交修复。
    (链接: NousResearch/hermes-agent Issue #63425)

- **P2 - 重要 Bug (已有关联 PR 修复):**
    - **#22986 [CLOSED] - Codex APIConnectionError 重试率在 v0.13.0 后增加约 8 倍**。这是典型的回归问题，怀疑与严格的流式传输超时有关。 (Issue: #22986)
    - **#22949 [CLOSED] - Kimi K2-6 模型的 `reasoning_content` 在 Telegram 上无法显示**。模型返回 `content: null`，导致用户无法看到推理过程。 (Issue: #22949)
    - **#22864 [CLOSED] - Dashboard `/chat` PTY WebSocket 连接超时失败**。部分客户端在建立连接时因 HTTP 101 响应未及时刷新而失败。 (Issue: #22864)

- **其他已报告并修复的 Bug (P2/P3):**
    - Podman 容器用户 ID 匹配问题 (#24041)
    - CLI 指令 `/sessions` 无响应 (#23533)
    - Kanban 调度器在无 TTY 环境下的 Worker 启动失败 (#23844)
    - 多个平台 (微信、飞书、Matrix) 的消息发送错误 (#23371, #23682, #23055)
    - HUD 显示令牌百分比与实际不符 (#23798)
    - Dashboard 更新按钮无确认弹窗 (#23865)

#### **6. 功能请求与路线图信号**

用户提出的新功能主要集中在 **多智能体协作** 和 **外部系统深度集成** 两个方向。

- **单守护进程多 Agent (Multi-Agent with Isolation)** (#9514): 这个高赞功能如果被采纳，将是 Hermes 架构的一次重要演进，使其能更高效地处理复杂、多角色的任务，直接指向“个人 AI 助手中心”的愿景。
- **持久化专业子 Agent (Persistent Specialized Subagents)** (#21303): 用户希望 Agent 能拥有专门的子 Agent 来负责特定领域任务（如编码、搜索），并拥有独立的技能生命周期。这可以看作是 #9514 的一个具体应用场景。
- **外部 Vault 后端与密钥管理扩展** (#22791): 加入对 Infisical 的支持，这符合从单一配置文件向企业级、可插拔密钥管理的演进趋势。
- **Memvid 作为可插拔记忆后端** (#23874): 社区在寻求更轻量、更易维护的长期记忆解决方案，这直接关系到 Agent 的个性化和持续学习能力。

**与路线的关联信号：** 目前针对 #9514 和 #22791 的讨论非常热烈，但尚无直接对应的合并 PR。这些功能很可能成为下一个版本（v0.14.0 或更高）的候选特性。

#### **7. 用户反馈摘要**

从今日的 Issue 评论中，可以提炼出以下真实用户反馈：

- **痛点：网络与连接稳定性**
    > 用户 @QuarkAssistant 报告 Codex API 重试率在升级后大幅增加，虽然有 PR #12953 的临时方案，但仍然存在，**表明底层网络连接处理仍有优化空间**。 (Issue #22986)
    > 用户 @fsantiago07044 的 Dashboard WebSocket 连接问题，**反映了在复杂网络环境下，前端和后端握手过程不够健壮**。 (Issue #22864)
    > 用户 @hh1848 报告英伟达 API 的 base URL 识别失败，**显示了自定义 Provider 配置的易用性待改进**。 (Issue #23158)

- **痛点：配置复杂性与学习成本**
    > 用户 @sunnysktsang 暴露了使用 `custom_providers` 配置百度模型时的诸多问题，包括模型选择器损坏、上下文长度错误等，**表明非原生支持的 Provider 配置门槛很高，易出错**。 (Issue #23318)
    > 用户 @mwhuss 在 UI 中收到持续的“剪贴板无图像”通知，**反映出新默认行为或新特性（如自动检查剪贴板）缺乏必要的配置开关和提示，影响了使用体验**。 (Issue #23984)

- **满意点：Bug 修复响应迅速**
    > 多个用户反馈的 Bug 都在短时间内（从创建到关闭往往在数小时内）得到了官方的确认和修复（标注为 `sweeper:implemented-on-main`）。这间接表明用户对项目维护者的**快速响应和修复能力**是满意的。

#### **8. 待处理积压**

以下关键 Issue/PR 长期开放，应引起维护团队关注：

- **高赞功能需求 #9514**：单守护进程多 Agent 功能从 2026-04-14 提出，至今已近 3 个月，评论 12 条，获 6 个 👍。此功能对优化资源利用至关重要，核心团队应考虑将其纳入路线图，并给出是否接受的官方回复。
    (链接: NousResearch/hermes-agent Issue #9514)
- **高风险 PR #21616**：Discord Webhook 路由支持功能，创建于 2026-05-08，带有 `blast-moderate` 标签和 `risk-security-boundary`，说明此改动影响较大且可能涉及安全边界。这可能是其 2 个月未合并的主要原因。维护者应评估其风险并决定是否合并或关闭。
    (链接: NousResearch/hermes-agent PR #21616)
- **长期开放 PR #15475**：使设置向导和 Gateway 说明对独立 Profile 感知的 PR。它带有多个风险标签，也已开放近 3 个月。该 PR 有助于改善用户体验，应尽早推进。
    (链接: NousResearch/hermes-agent PR #15475)
- **P2 关键 Bug 修复 PR #20995**：修复凭据池轮换后 `/usage` 指令显示旧密钥使用数据的问题。这对使用多 API Key 的商业用户非常重要。
    (链接: NousResearch/hermes-agent PR #20995)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是根据您提供的 PicoClaw GitHub 项目数据生成的 2026-07-13 项目动态日报。

---

## PicoClaw 项目动态日报 | 2026-07-13

### 1. 今日速览

过去24小时，PicoClaw 项目协作活跃。社区提交了3个新 Issue，其中包含两个功能请求和一个关键 Bug 报告。2个 Pull Request 得到了处理，一个关于 i18n 的修复已被合并，另一个关于 Anthropic 提供商缓存功能的 PR 正等待审核。项目整体状态健康，修复节奏良好，但 Matrix 协议通道存在的**无声死亡**问题（#3203）已超过10天无实质性进展，值得关注。

### 2. 项目进展

- **[已合并] PR #3190: 国际化（i18n）翻译同步**
  - **内容**: 该 PR 已将英文 `en.json` 中的最新翻译键同步至孟加拉语（bn-in）和捷克语（cs）的翻译文件中，确保非英语用户在切换语言时不会看到缺失的键值。
  - **影响**: 此修复提升了多语言用户的体验一致性。项目在社区本地化维护方面的流程已趋于成熟。

- **[待审核] PR #3251: 捕获 Anthropic 提供商中的提示缓存（Prompt Cache）令牌使用量**
  - **内容**: 该 PR 为 Anthropic 的官方 SDK 和 Messages API 两个提供商新增了缓存令牌消耗追踪功能。这将允许运维人员监控 Claude 模型的缓存命中率和成本。
  - **影响**: 对于使用 Anthropic 模型且关注 API 成本的用户来说，这是一个直接的功能补充。**预计将合并到下一版本**。

### 3. 社区热点

- **热点 Issue: #3203 - Matrix 同步循环在断网后无重连逻辑**
  - **热度**: 2条评论，1个 👍
  - **链接**: [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)
  - **分析**: 这是当前社区最关注的技术问题。用户 `weissfl` 详细描述了 PicoClaw 作为 Matrix 客户端的一个严重缺陷：当网络中断或服务器重启后，长轮询的 `/sync` 连接会永久死亡，且由于主进程未退出，`systemd` 的失败重启机制无法生效，导致机器人“假死”。这一问题揭示了 PicoClaw 在**网络容错性与自愈能力**方面的缺失，是影响自部署可靠性的核心痛点。尽管已经有1个 👍 和2条评论，但项目方尚未给出明确的重连方案。

### 4. Bug 与稳定性

| 严重程度 | Issue | 标题 | 是否有 fix PR | 分析 |
| :--- | :--- | :--- | :--- | :--- |
| **高** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | [BUG] Matrix sync loop has no reconnection logic | 否 | **无声死亡 Bug**。网络中断后机器人彻底失联，严重影响高可用部署。无自动重连逻辑，是架构层面的缺陷。 |
| **中** | [#3252](https://github.com/sipeed/picoclaw/issues/3252) | [BUG] `splitKnownProviderModel` 解析模型ID时错误截断前缀 | 否 | **配置解析 Bug**。当模型ID（如 `gpt-4-1106-preview`）中包含已知提供商别名（如 `preview`）时，函数会错误地将 `gpt-4-1106` 作为模型名，导致配置失败。影响配置兼容性。 |
| **中** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | [BUG] Android version | 否 | **平台兼容性 Bug**。Android 版本无法正常启动服务，用户无法修改应用路径。该 Issue 已存在近三周，虽标记为 `stale`，但本质上仍未解决。 |

### 5. 功能请求与路线图信号

- **特征请求: #3250 - 添加对 ARMv7 (armhf) 设备的 Docker Compose 支持**
  - **链接**: [Issue #3250](https://github.com/sipeed/picoclaw/issues/3250)
  - **分析**: 用户 `zhang090210` 请求支持在玩客云、树莓派 Zero等低功耗ARM设备上通过 Docker Compose 部署。这指向了**轻量级、低功耗家庭服务器**的使用场景。目前官方Docker镜像默认仅支持 `amd64`，该请求若被采纳，将显著扩大 PicoClaw 在边缘计算和家庭 NAS 领域的部署潜力。结合最近合并的 **PR #3190** 和待审核的 **PR #3251**，项目在**多架构支持**和**成本优化**（缓存）两方面都收到了社区的强烈信号。

### 6. 用户反馈摘要

- **痛点**:
  - **网络不稳定恐惧**: 用户 `weissfl` 在 #3203 中表达了严重的担忧，Matrix 通道的断线问题对依赖即时通讯的用户是致命的。
  - **配置灵活度不足**: 用户 `Monessem` 在 #3182 中反映了 Android 版本配置路径的限制，无法自由更改数据存储位置。
  - **模型配置脆弱性**: 用户 `v2up-32mb` 在 #3252 中发现了一个隐蔽的解析 Bug，该 Bug 使得部分标准模型ID无法被正常配置。
- **场景**:
  - 社区用户正在将 PicoClaw 用于**家庭自动化**（#3250 的ARM设备请求）和**跨平台聊天**（#3203 的 Matrix 重连诉求）。

### 7. 待处理积压

- **Issue #3182 [stale]**: **Android 版本核心功能无法使用**。
  - **链接**: [Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)
  - **状态**: 用户于2026-06-26创建，已近三周无维护者回复。尽管标记为 `stale`，但这是影响特定平台的**严重功能缺失问题**。若不解决，该平台用户流失风险高。
- **Issue #3203**: **Matrix 通道无重连逻辑**。
  - **链接**: [Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)
  - **状态**: 已存在11天，此问题影响了所有使用 Matrix 协议的用户，是影响项目可靠性的关键瓶颈。维护团队应尽快提出修复方案或给出现状评估。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，这是根据 NanoClaw 今日数据生成的项目动态日报。

---

### NanoClaw 项目动态日报 | 2026-07-13

**项目名称:** NanoClaw
**数据来源:** github.com/qwibitai/nanoclaw
**分析时段:** 2026-07-12 至 2026-07-13

---

#### 1. 今日速览

今日项目活跃度较高，主要集中在对近期 `agent-runner` 模块问题的修复与改进上。社区提交了 14 个 PR，其中 11 个仍在待审，显示出活跃的集中开发周期。**三个新报告的 Issues 均为功能异常，而非新功能请求**，揭示了两个核心管线问题：速率限制日志的误报与输出令牌上限的静默截断。今天，针对输出令牌限制、重复回复及容器安全问题的修复 PR 已被提交，表明团队响应迅速。项目整体健康度良好，但社区对基础功能的稳定性有较高期待。

#### 2. 版本发布

**无**

---

#### 3. 项目进展

今日有 3 个 PR 被合并/关闭，标志着一些功能修复和新集成的落地：

- **`[CLOSED] fix(deshi-line): Markdown を LINE 向けプレーンテキストに変換して配信` (PR #3030):** 已合并。这是一个重要的用户体验修复。之前，LINE 渠道无法解析 Markdown 语法（如 `**粗体**`、`## 标题`），导致消息显示为原始标记。此 PR 新增了 `formatLine()` 函数，在消息投递前将其转换为纯文本，解决了代理消息在 LINE 上格式混乱的问题。
- **`[CLOSED] fix(container): raise the agent SDK's 32000 output-token cap to the model's real ceiling` (PR #3024):** 已关闭，被更完善的 PR #3025 取代。此 PR 是针对 Issue #3023 的初步修复，尽管被取代，但它直接指向了根源问题，并立即推动了更优解决方案的出现。
- **`[CLOSED] Skill/add opencode stack` (PR #2952):** 已合并。这是一个历时较长的技能合并，为项目增加了 `opencode` 技术栈的支持，可能是一个容器或操作层面的技能扩展。

**项目里程碑推进:** 项目正在通过一系列 PR 修复关键的稳定性 Bug，特别是围绕 `agent-runner` 的 “re-wrap nudge” 机制和令牌限制。`guard seam` (PR #2986) 和 `ncl approvals CLI` (PR #3029) 等增强权限控制的特性也在稳步推进中，这表明代码基础正在向更安全、更可审计的方向演进。

---

#### 4. 社区热点

今日社区讨论的焦点围绕几个关键 Bug 展开，评论和关注度最高的问题如下：

1.  **`#3016 [OPEN] Every rate_limit_event is logged as a quota error`**：用户 `glifocat` 报告了一个高优先级问题。自某次更新后，`agent-runner` 对所有速率限制事件都错误地记录为“quota error”，尽管这些事件本身是成功的（“allowed”），导致日志被严重污染。这是一个典型的回归问题，用户感到困惑并担心其服务稳定性。此类问题会直接降低运维人员的操作信心。
2.  **`#3026 [OPEN] Re-wrap nudge re-runs the model and duplicates replies when the agent already replied via send_message`**：用户 `fjnoyp` 指出了 `agent-runner` 中“re-wrap nudge”逻辑的一个缺陷。当代理已通过 `send_message` 回复后，nudge 机制会误判并再次运行模型生成回复，导致消息重复。这表明新引入的功能存在边界条件处理不足的问题。

**核心诉求分析:** 社区强烈呼吁 `agent-runner` 核心管线逻辑的稳定性和可预测性。他们期望代理的行为（如日志、回复生成）是准确和确定的，而“误报”和“重复”这类问题严重破坏了用户体验。

---

#### 5. Bug 与稳定性

今日报告的 Bug 主要集中在 `agent-runner` 和容器层面，按严重程度排列如下：

- **[严重] 输出令牌上限被静默截断 (Issue #3023):** 报告者 `javexed` 发现所有 Claude 代理在输出约 32000 个令牌后即被静默截断，导致长文本（如 OpenSCAD 文件）生成失败。该问题有一个致命的日志错误，但之前未被统一配置。
    - **Fix PR:** **已有**经过优化和更新的 PR **#3025** (`fix(container): raise the agent SDK's 32000 output-token cap to the m…`) 正在待审。
    - **链接:** [Issue #3023](https://github.com/nanocoai/nanoclaw/issues/3023), [PR #3025](https://github.com/nanocoai/nanoclaw/pull/3025)
- **[高] 速率限制误报 (Issue #3016):** 日志被大量“假阳性”速率限制错误污染，对问题排查造成严重干扰。
    - **Fix PR:** 待定。
    - **链接:** [Issue #3016](https://github.com/nanocoai/nanoclaw/issues/3016)
- **[中] Re-wrap nudge 导致回复重复 (Issue #3026):** 功能逻辑缺陷，导致代理在某些情况下发送重复消息。
    - **Fix PR:** **已有**，PR **#3028** (`fix: avoid duplicate replies after send_message`) 针对此问题提出了修复方案。
    - **链接:** [Issue #3026](https://github.com/nanocoai/nanoclaw/issues/3026), [PR #3028](https://github.com/nanocoai/nanoclaw/pull/3028)
- **[中] 容器因 TMPDIR 权限问题启动失败 (PR #3027):** 修复了一个安全隐患，即 `/tmp` 目录可能被污染，导致容器无法启动。
    - **Fix PR:** 已提交，PR **#3027** 正在待审。
    - **链接:** [PR #3027](https://github.com/nanocoai/nanoclaw/pull/3027)

---

#### 6. 功能请求与路线图信号

尽管今日没有新功能请求被提出，但多个待审的 PR 是当前开发的重点方向，并可能被纳入下一个小版本：

- **操作员审批工作流 (PR #3029):** 为 CLI 工具 `ncl` 增加 `approve`、`reject` 等操作，使操作员能够直接通过命令行解决审批，无需依赖其他渠道。这增强了项目管理能力。
- **有向图 (Guard) 安全模式 (PR #2986):** 引入统一的“守卫”函数 `guard()` 来处理所有特权操作（允许/阻止/暂缓）。这是向更安全、可审计的系统迈出的重要一步。
- **定时任务模板化 (PR #3022):** 允许在代理模板 (`tasks/*.md`) 中定义定时任务，这使得创建具有预设定时能力的代理组成为可能，简化了用户配置流程。

这些 PR 暗示了项目正在从单纯的即时回复代理，向具备**审批流、权限控制与定时任务**的企业级应用演进。

---

#### 7. 用户反馈摘要

- **关于代理输出截断 (Issue #3023):** 用户 `javexed` 在生成复杂代码（如 OpenSCAD 文件）时遇到严重限制，他惊讶地发现所有 Claude 代理都存在一个默认的 32000 令牌上限，而他无法通过常规方式绕过。这是一个典型的“硬限制”导致的挫败感。
- **关于日志噪音污染 (Issue #3016):** 用户 `glifocat` 报告其社区安装在一周内记录了 82 次虚假速率限制错误，尽管所有请求都成功。这反映了运维人员对**日志清晰度和可靠性**的高度重视，嘈杂日志会掩盖真正的问题。
- **关于重复回复 (Issue #3026):** 用户 `fjnoyp` 在测试中发现，当一个代理已经通过 `send_message` 进行回复后，系统会再次执行模型生成一个多余的回复。这表明用户希望**人工智能行为具有纯粹的可预测性**，任何形式的副作用（如重复回复）都会破坏信任。

---

#### 8. 待处理积压

- **[高优先级，PR 已存在] `fix(agent-runner): reconcile Claude tool allowlist with pinned CLI` (PR #2982):** 此 PR 旨在修复 `agent-runner` 中工具白名单与实际 CLI 版本不匹配的问题。该 PR 已存在 5 天，仍为“OPEN”状态。如果工具调用不一致，会导致代理行为异常，建议核心团队尽快审核。
    - **链接:** [PR #2982](https://github.com/nanocoai/nanoclaw/pull/2982)
- **[中优先级，PR 已存在] `feat: per-group harness capability toggles` (PR #2983):** 此 PR 增加了按用户组切换框架功能的能力，是一个重要的配置灵活性增强。该 PR 同样积压 5 天，其复杂性和潜在的破坏性变更可能是导致延迟的原因。建议尽快推动审核，以便后续功能开发。
    - **链接:** [PR #2983](https://github.com/nanocoai/nanoclaw/pull/2983)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，这是根据 NullClaw 项目在 2026-07-13 的 GitHub 动态数据生成的项目日报。

---

## NullClaw 项目动态日报 2026-07-13

### 1. 今日速览

今日项目未报告新的 Issue 或发布新版本，整体活跃度处于**中高水平**。核心活动集中在 **9 个 Pull Request 的更新与处理**上，其中 4 个关键 Bug 修复 PR（#951, #950, #949, #948）已被合并，标志着项目在稳定性、配置灵活性和集成兼容性方面取得了实质性进展。此外，仍有 5 个 PR 处于开放待合并状态，其中涉及 **cron 任务投递失败**和 **Discord 网关断开**的修复值得特别关注。

### 2. 版本发布

**无**

### 3. 项目进展

今日共有 4 个重要 Pull Request 被合并或关闭，推进了以下关键修复与改进：

-   **Agent 稳定性提升**：`#951` 修复了 Agent 进程失败时，将初始化日志误作为 Agent 响应发送到频道的问题，提升了系统的可靠性。
-   **测试与资源泄漏修复**：`#950` 通过调整端口探测的顺序，解决了 `AddressInUse` 错误下测试环境的内存泄漏问题，增强了测试的健壮性。
-   **配置灵活性增强**：`#949` 新增了 `agent.default_queue_mode` 配置项，允许用户通过 `config.json` 配置新会话的默认队列模式，提高了定制化程度。
-   **Cron 任务归属修复**：`#948` 修复了 cron 任务投递时归属元数据传递问题，确保 Agent 响应能被正确归因到触发它的频道和账户。

这些改动共同解决了从 Agent 执行、测试环境到系统配置的多个痛点，标志着项目向更稳定、更可配置的方向迈进。

### 4. 社区热点

今日没有出现评论特别活跃的 Issue 或 PR。然而，通过观察待合并的 PR，可以分析出社区最关注的两个痛点领域：

1.  **核心功能可靠性**：`#954`(Fix: one-shot cron jobs silently fail to deliver messages) 和 `#953`(fix(discord): recover closed gateway sockets) 都是为了解决在关键消息投递和实时通信通道上的严重 Bug，这表明用户对系统的**核心可靠性和稳定性**有极高要求，任何投递失败或连接断开都会严重影响用户体验。
2.  **企业级集成兼容性**：`#958`(fix(teams): accept lowercase `serviceurl` JWT claim) 和 `#959`(fix(cron): persist paired token for scheduler tool access) 则反映了用户对**第三方服务（如 Teams）集成**的深度需求，以及对**调度任务（Cron）**在权限和令牌管理方面的精细化要求。

### 5. Bug 与稳定性

今日没有报告新的 Bug，项目进展集中在修复已有问题上。结合待办 PR，按严重程度排列如下：

-   **严重（消息丢失）**：
    -   **描述**：一次性 Cron 任务静默失败，无法投递消息。根因是 `OutboundMessage.channel` 的 use-after-free 问题。
    -   **状态**：已有修复 PR `#954` (待合并)。 [PR #954](https://github.com/nullclaw/nullclaw/pull/954)

-   **高（连接中断）**：
    -   **描述**：Discord 网关连接关闭后无法自动恢复，导致机器人离线。
    -   **状态**：已有修复 PR `#953` (待合并)。 [PR #953](https://github.com/nullclaw/nullclaw/pull/953)

-   **中（资源泄漏/回归）**：
    -   **描述**：`#950` 修复了测试中因地址冲突导致的资源泄漏问题，已被合并。
    -   **状态**：已修复。 [PR #950](https://github.com/nullclaw/nullclaw/pull/950)

-   **中（集成兼容性）**：
    -   **描述**：MS Teams 消息因 JWT 声明 `serviceUrl` 大小写不匹配被误拦截，导致 403 错误。
    -   **状态**：已有修复 PR `#958` (待合并)。 [PR #958](https://github.com/nullclaw/nullclaw/pull/958)

### 6. 功能请求与路线图信号

虽然没有新的 Issue 提出功能请求，但从今日的 PR 中可以观察到未来的路线图信号：

-   **调度任务持久化与安全性**：`#959` 请求在 `/pair` 成功后持久化令牌，并支持加密存储。这表明用户对调度任务的长期稳定运行和数据安全有明确需求。此功能很可能被纳入下一个版本。
-   **增强配置能力**：`#949` (已合并) 允许通过 `config.json` 配置队列模式。这显示了向**更高级别、更易用的配置系统**演进的趋势，未来可能会有更多配置项从代码硬编码转移到配置文件。

### 7. 用户反馈摘要

由于今日没有 Issue 或 PR 评论数据，我们无法直接从评论中提取用户反馈。然而，从已提交的 Bug 修复 PR 可以间接推断出用户的不满与期望：

-   **不满**：用户无法容忍“静默失败”（如 Cron 任务无法投递消息且无报错）。这类 Bug 会严重损害用户信任。
-   **期望**：用户对 **稳定性**（期望 Discord 连接不掉线）、**兼容性**（期望第三方服务像 Teams 能即插即用）和 **可配置性**（期望能通过配置文件自定义行为）有着持续且迫切的期待。

### 8. 待处理积压

以下 5 个 PR 已开放较长时间，其中包含严重 Bug 修复，建议维护者优先处理：

-   **`#959` [OPEN] fix(cron): persist paired token for scheduler tool access (#839)**
    -   已开放 27 天，涉及调度任务令牌持久化。
    -   [PR #959](https://github.com/nullclaw/nullclaw/pull/959)
-   **`#958` [OPEN] fix(teams): accept lowercase `serviceurl` JWT claim and raise JWKS fetch cap**
    -   已开放 27 天，影响 Teams 集成。
    -   [PR #958](https://github.com/nullclaw/nullclaw/pull/958)
-   **`#956` [OPEN] [dependencies, docker] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group**
    -   已开放 28 天，由 Dependabot 自动创建，常规依赖更新。
    -   [PR #956](https://github.com/nullclaw/nullclaw/pull/956)
-   **`#954` [OPEN] Fix: one-shot cron jobs silently fail to deliver messages (use-after-free in OutboundMessage.channel)**
    -   已开放 30 天，**严重 Bug 修复**，影响核心消息投递功能。
    -   [PR #954](https://github.com/nullclaw/nullclaw/pull/954)
-   **`#953` [OPEN] fix(discord): recover closed gateway sockets**
    -   已开放 31 天，**高优先级 Bug 修复**，影响 Discord 机器人的在线稳定性。
    -   [PR #953](https://github.com/nullclaw/nullclaw/pull/953)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 IronClaw 项目数据生成的 **2026-07-13 项目动态日报**。

---

## IronClaw 项目动态日报 — 2026-07-13

### 1. 今日速览

过去 24 小时内，IronClaw 项目呈现 **极高活跃度**，社区贡献和核心开发团队双线并进。核心团队针对近期严重的 CI 不稳定问题发起了系统性诊断与修复，创建了多个专门的分析 Issues 和修复 PR。同时，长期功能开发（如扩展运行时、MCP 注册、成本追踪）的 PR 仍在积极演进中。**项目当前核心矛盾在于：修复密集推进，但 CI 稳定性问题成为主要瓶颈，影响了主分支的健康度。**

### 2. 版本发布

**无新版本发布。**

### 3. 项目进展

过去 24 小时内，项目在多个关键方向取得了实质性进展，主要体现在以下合并/关闭的 PR 与 Issue 中：

- **CI 与测试稳定性攻坚**：
    - **PR #6023** (`fix(reborn_cli)： unify crate process-env test lock — kill build_runtime_input flake`) 已创建，针对 Issue #6015 中提到的 **测试隔离缺陷** 提供了修复方案，旨在消除 CI 中最常见的一类非确定性测试失败。
    - **PR #6022** (`ci： static pre-push checks — include_str/Docker-COPY + hermetic env`) 已创建，实现了 Issue #6018 中提出的 **静态预检查** 方案。新增三项检查，旨在从源头捕获大部分确定性 CI 失败。
    - **Issue #6011** (`Daily ironclaw failure taxonomy — 2026-07-12`) 被创建，系统性地对当日 CI 失败进行了分类分析，为后续跟踪和修复提供了数据基础。
    - **Issue #6014、#6015、#6016、#6017** 等 CI 相关的 Bug 已被详细分解，标志着团队已将 **CI 稳定性列为最高优先级的整改项目**。

- **核心功能开发推进**：
    - **扩展运行时（Extension Runtime）**：PR #6025 (P6) 和 PR #6012 (P5) 均在持续推进中，分别聚焦于扩展运行时的 **UI/CLI 完成**、**Slack/Telegram 消息分发** 等关键环节。这是实现平台扩展性的基石。
    - **性能与成本优化**：PR #5976 (`feat(reborn)： per-run token usage + USD cost...`) 仍在开放中，将为 OpenAI 兼容 API 提供 **每轮对话的 Token 消耗和成本追踪**，对运营和审计至关重要。
    - **模型上下文优化**：PR #5975 和 #5977 组成的栈，致力于解决 **Prompt 缓存断裂** 和 **技能负载过大** 的问题。这些优化旨在提升 agent 运行效率并降低成本，是提升用户体验的关键。

- **社区维护**：
    - **依赖更新**：PR #5926 (已关闭) 和 #6021 (待合并) 完成了大量的依赖包升级，确保了项目的技术栈健康。

### 4. 社区热点

尽管没有单个 Issue/PR 聚集大量评论，但 **核心团队围绕 CI 稳定性发起的系列讨论** 构成了今日的社区热点。

- **Issue #6014** (`[bug, scope： ci] CI fragility： flaky non-hermetic tests abort the coverage matrix`)：这篇由核心开发者详细撰写的分析报告引起了广泛关注。它揭示了 **~70% 的主分支推送因 CI 失败而变红** 这一触目惊心的数据，并指出了根因是**结构性**而非简单代码缺陷。这已成为社区了解项目当前第一大痛点的核心入口。
    - 链接： [Issue #6014](https://github.com/nearai/ironclaw/issues/6014)

- **关联的热门 PR**：PR #6022 和 #6023 作为针对此问题的直接“治疗”方案，自然成为社区关注的焦点，被频繁链接和引用。
    - 链接： [PR #6022](https://github.com/nearai/ironclaw/pull/6022)

**数据洞察**：虽然有 50 个 PR 更新，但 **28 个待合并** 显示出贡献的产出很高，但合并的审查/测试环节可能构成瓶颈，这也从侧面反映了 CI 不稳定对流程的负面影响。

### 5. Bug 与稳定性

今日报告的 Bug 主要集中在 **CI 稳定性** 和 **数据库并发** 两个领域，严重程度较高。

| 严重程度 | Issue | 摘要 | 状态 | 关联修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| **严重 (Critical)** | [#6014](https://github.com/nearai/ironclaw/issues/6014) | **CI 脆弱性**：非密封测试导致 70% 的主分支推送失败，严重阻碍开发流程。 | Open | #6022, #6023 |
| **严重 (Critical)** | [#6015](https://github.com/nearai/ironclaw/issues/6015) | **测试隔离缺陷**：`build_runtime_input` 测试在并行运行时会因环境变量冲突而失败。 | Open | #6023 (Fixes 此 Issue) |
| **高 (High)** | [#6017](https://github.com/nearai/ironclaw/issues/6017) | **数据库并发测试不稳定**：Postgres 和 libSQL 的并发测试对时序敏感，并行环境下易失败。 | Open | 暂无 |
| **高 (High)** | [#6016](https://github.com/nearai/ironclaw/issues/6016) | **Slack 集成测试超时**：端到端测试在触发传递时偶发超时，是当前最新的“肇事者”。 | Open | #6020 |
| **中 (Medium)** | [#5704 (已关闭)](https://github.com/nearai/ironclaw/issues/5704) | **图像预览透明度问题**：在对话活跃时，图像缩略图会变得透明，影响用户体验。 | **已关闭** | (推断已有修复) |
| **中 (Medium)** | [#6010 (已关闭)](https://github.com/nearai/ironclaw/issues/6010) | **NEAR AI 推理挂起**：GLM-5.2 模型在 opencode 中使用时会频繁挂起数分钟。 | **已关闭** | (推断已有修复) |

**分析**：今日 Bug 报告的专业度极高（如用“failure taxonomy”命名），表明团队正在采用系统性的方法追踪和解决问题。大量针对 CI 的 Bug 修复 PR 已就绪，预示着项目健康状况有望在下个版本中得到显著改善。

### 6. 功能请求与路线图信号

- **Issue #2601** (`Feature Proposal： CLI / TUI for Managing Secrets`)：这是一个开放许久的 **Secrets 管理功能请求**。用户希望得到一个更友好的 CLI/TUI 界面来管理认证信息，这说明当前方式的交互性和文档性不足。考虑到项目正在推进扩展运行时，此功能很可能在后续版本中被优先考虑，以提升开发者体验。
    - 链接： [Issue #2601](https://github.com/nearai/ironclaw/issues/2601)

- **Issues #6009 (已关闭)** (`GLM-5.2 not available in opencode default model list`) 和 **#6010 (已关闭)** (`NEAR AI inference hangs`)：这两个迅速被关闭的 Issue 表面上是 bug，但背后反映了用户对 **深度集成 `opencode` 这一主流开发工具** 的强烈诉求，以及 **模型服务稳定性** 是开发者体验的核心。

- **关联的 PR 信号**：PR #5976 (成本追踪) 和 PR #5975 (Prompt 缓存优化) 等项目正在推进的功能，直接对应了用户在大规模使用中必然遇到的 **成本控制** 和 **性能** 痛点，是路线图上的关键节点。

### 7. 用户反馈摘要

从今日的 Issues 和评论中，可以提炼出以下几点真实用户反馈：

- **Secrets 管理体验不佳**：“I‘ve been having some struggles with authentication...” (Issue #2601)。用户认为当前管理认证（Secrets）的方式文档不足，上手困难。
- **对模型服务稳定性的高要求**：“...constantly gets stuck... making it unusable..." (Issue #6010)。用户（开发者）在使用 NEAR AI 推理（GLM-5.2）进行交互式开发（`opencode`）时，因模型频繁挂起而极度不满，这直接阻碍了其开发工作。
- **对集成便利性的期待**：用户希望 `opencode` 能开箱即用地包含 GLM-5.2 模型，而不是需要手动fork和修改 (Issue #6009)。这表明开发者期望无缝的集成体验，任何额外的配置步骤都是摩擦。
- **CI 问题间接影响贡献者体验**：虽然没有直接表达，但 **70% 的主分支失败率** (Issue #6014) 极大地增加了开源贡献者的入门和协作成本，可能打击贡献积极性。

### 8. 待处理积压

- **Issue #2601** (`Feature Proposal： CLI / TUI for Managing Secrets`)：创建于 4 月，仅有 2 条评论且获赞为 0。这是一个有价值的功能提案，但长期缺乏维护者与社区的互动。建议项目维护者对此进行评估，告知用户该提案是否被纳入路线图，或引导其使用现有方案。
    - 链接： [Issue #2601](https://github.com/nearai/ironclaw/issues/2601)
    - **提醒**：即使不立即开发，维护者对该 Issue 的“关怀”也能显著提升社区满意度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，我为您呈上基于LobsterAI GitHub数据的项目动态日报。

---

### LobsterAI 项目动态日报 | 2026-07-13

**数据观察时段：** 2026-07-12 至 2026-07-13

---

#### 1. 今日速览

今日项目活跃度非常高，主要体现在代码合并与提交上。**过去24小时内，共有7个Pull Requests被合并或关闭，同时有7个新的Pull Requests处于待合并状态**，显示了强大的开发推进力。项目核心贡献者`liuzhq1986`和`fisherdaddy`表现活跃，主导了今日的多数变更。虽然新开Issues数量不多，但`#2293`关于多Agent配置覆盖的问题引发了社区关注，是一个需要重点关注的潜在Bug。总体而言，项目处于快速迭代和稳定性修复并行的高效阶段。

---

#### 2. 版本发布

过去24小时内无新版本发布。

---

#### 3. 项目进展

今日项目取得了显著进展，主要集中在 **Cowork（协作）模块的稳定性增强、用户界面（UI）优化和构建系统改进** 上。今日合并/关闭的7个PR中，有6个来自`liuzhq1986`，这表明团队正集中精力解决协作功能中的一系列关键问题。

- **核心功能稳定性提升：**
    - **[Cowork] 稳定并优化了“跟随（Steer）”消息的路由与排队机制：** 修复了`#2292` 和 `#2315`，确保了在活跃的对话轮次中，后续的“跟随”消息能被正确处理，并能跨会话工作，甚至在应用最小化时也能保持队列正常执行。这大大提升了连续对话的可靠性。
    - **[Cowork] 支持在“跟随”队列中添加附件：** 合并PR `#2300`，允许用户在排队发送后续消息时，附带文件、图片、文本等附件，极大地丰富了协作场景的交互能力。
    - **[Cowork] 修复了卡住的压缩重试维护任务：** 通过PR `#2289`，修复了自动压缩任务卡住后无法进行上下文维护的问题，提高了数据处理的健壮性。

- **用户界面与体验改进：**
    - **[Windows] 新增品牌标题栏：** PR `#2302` 为Windows平台添加了带有LobsterAI Logo和原生窗口控件的标题栏，并使侧边栏折叠时的操作按钮能整合其中，优化了Windows用户的使用体验。
    - **[UI] 修复Windows标题栏Logo压缩问题：** PR `#2316` 修复了侧边栏折叠并显示更新徽章时，标题栏Logo被压缩的UI小瑕疵。

**总结：** 项目今天向前迈进了一大步，特别是在**Cowork协作功能的可靠性和交互丰富性**方面。多个并发问题的修复，显示出项目正从基础功能实现转向精细化打磨和稳定性加固。

---

#### 4. 社区热点

今日社区讨论焦点相对集中，主要围绕一个用户报告的Bug。

- **热点 Issue: [#2293 重启后，多个agent下的USER.md被覆盖替换的BUG？](https://github.com/netease-youdao/LobsterAI/issues/2293)**
    - **活跃度：** 该 Issue 虽然创建于7月7日，但于昨日（7月12日）有更新，用户`yepcn`详细描述了问题并补充了测试步骤。
    - **诉求分析：** 用户的核心诉求是 **多Agent配置的独立性与隔离性**。用户期望为不同的Agent设置不同的“关于你”信息和`USER.md`文件，以实现差异化。但当前版本存在所有Agent的`USER.md`被主Agent覆盖的问题，使得多Agent功能丧失了实用性。这反映出用户对于**个性化、定制化Agent**的强烈需求，而不仅仅是数量上的堆叠。社区中可能还有其他用户期待此问题的修复。

---

#### 5. Bug 与稳定性

今日无新报告的严重崩溃或回归问题，但有两个值得关注的Bug。

- **严重 Bug：**
    - **多Agent USER.md 被覆盖（Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)）**
        - **严重程度：高**。此Bug直接破坏了“多Agent”的核心功能，导致用户无法为不同Agent设置独立的人格和行为。
        - **当前状态：** 待解决。目前尚无对应的修复PR与之关联，需要项目维护者优先处理。

- **已修复的稳定性问题：**
    - 今天合并的多个PR（如`#2289`、`#2292`、`#2315`、`#2300`）均属于稳定性修复，解决了Cowork模块中关于消息队列、路由、附件处理和上下文维护的一系列问题，显著提升了协作场景的健壮性。

---

#### 6. 功能请求与路线图信号

今日的新增PR揭示了项目未来可能发展的几个方向，预计可能被纳入下一个版本。

- **桌面通知升级（PR [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318)）：** `feat(notifications): upgrade desktop notifications`。此PR将任务完成通知器升级为桌面通知管理器，增加了权限请求和提问的等待通知、前台通知模式等功能。这表明项目正在加强**用户与系统间的异步交互通知体验**。
- **首页快捷操作场景优化（PR [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319)）：** `feat(cowork): revamp homepage quick-action scenarios`。这个PR替换了首页快捷操作中的示例文案，使其更符合办公场景。这指示了项目在**优化开箱即用体验、引导用户进入办公场景**方面所做的努力。
- **Windows Web安装器（PR [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323)）：** `feat(build): add opt-in Windows web installer target`。此PR增加了可选的Windows Web安装器构建目标，允许从CDN下载应用包，有助于**简化用户安装和更新流程**。

**路线图信号：** 从这些PR可以看出，项目正在同时推进**体验打磨（首页、通知）、平台适配（Windows安装器）和核心功能稳固（修复与Cron任务）**，路线图呈现出多点开花的态势。

---

#### 7. 用户反馈摘要

从今日热点Issue `#2293` 的评论中，可以提炼出用户的具体痛点和使用场景。

- **用户痛点：** 用户`yepcn`明确表示“没法对不同agent建立不同的需求”。这表明用户的使用场景是**创建多个具有不同角色、任务或知识背景的AI助手**（例如，一个用于工作，一个用于学习）。当前Bug完全阻断了这一核心使用场景。
- **用户行为：** 用户非常细心，通过“在关闭软件情况下，单独修改workspace-*下的USER.md内容”的方式进行了测试，复现了Bug，并推断出是“最近更新时出现的一个bug”。这反映出用户具备一定的技术能力，并且对产品的使用非常深入。

---

#### 8. 待处理积压

- **重要但陈旧的 PR：** [PR #1325 (Stale) feat(ui): 为新建对话图标按钮添加悬停提示](https://github.com/netease-youdao/LobsterAI/pull/1325)
    - **状态：** 自2026年4月创建以来，已被标记为陈旧，超过3个月未处理。
    - **重要性：** 虽然是一个小型UI改进，但属于基础交互优化。对于新用户或侧边栏折叠时的使用场景，提供tooltip能显著降低学习成本。
    - **提醒：** 请维护者关注此PR，评估是否仍需要合并，或关闭并说明原因。

- **与Agent ID相关的问题：** [PR #2065 (Closed) fix(agent): 使用短 UUID 替代名称生成 Agent ID](https://github.com/netease-youdao/LobsterAI/pull/2065)
    - **状态：** 此PR已于今天（7月12日）关闭，但Issue `#2293` 提到的`USER.md`覆盖问题，很可能与Agent ID生成和管理机制有关。虽然PR已关闭，但其涉及的数据清理和ID唯一性问题并未完全解决，可能仍是导致覆盖Bug的根源之一。建议维护者在调查`#2293`时，重新审视这个已关闭PR中提出的核心问题。

---

**分析师总结：** LobsterAI 项目今日表现出极高的开发活力和维护效率，尤其是在协作模块的稳定性上取得了巨大进步。然而，社区中暴露出的多Agent配置覆盖问题是一个不容忽视的隐患，它直接影响了项目核心价值主张“多Agent”的可用性。建议项目团队将 `Issue #2293` 列为最高优先级，尽快定位并修复，以巩固用户信任。整体来看，项目健康状况良好，正朝着更成熟、更稳定的方向快速发展。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，这是为您生成的 CoPaw 项目动态日报。

---

# CoPaw 项目动态日报 | 2026-07-13

**项目**: [CoPaw (github.com/agentscope-ai/CoPaw)](https://github.com/agentscope-ai/CoPaw)

## 1. 今日速览

今日项目整体活跃度 **极高**。过去24小时内共产生 **36 条 Issue** 更新和 **22 条 PR** 更新，反映出社区在 v2.0.0 发布后正在密集进行压力测试和反馈。核心问题集中在 **Windows 沙箱严重缺陷**、**API 上下文压缩导致的模型调用错误 (400 BadRequestError)** 以及 **v1.x 至 v2.0 的兼容性故障** 上。尽管没有新的版本发布，但针对上述严重 Bug 已有多个修复 PR 被提交，部分已被合并，表明开发团队响应迅速。然而，待合并的 PR 数量较多（16条），项目面临一定的“技术债务”积累风险。

## 2. 版本发布

*无。过去24小时内没有新的版本发布。*

## 3. 项目进展

今日项目向前迈进的步伐主要体现在对 **关键 Bug 的修复推进** 上，多项重要的修复 PR 已被合并或处于审查状态。

- **【已合并】兼容性修复**: `#5991`（及其类似PR `#5988`, `#5990`）修复了从 v1.x 迁移至 v2.0 时，v1 版本遗留的 `file` 类型块导致 Pydantic 校验失败的兼容性问题。这解决了大量用户升级后无法加载历史会话的问题。
- **【已合并】逻辑循环修复**: `#5530` 被合并，该 PR 限制了 ReAct Agent 在纯文本回复时的自动连续执行次数，解决了模型因反复输出简单标记（如 emoji）而陷入无限循环的问题。
- **【已合并】版本标记**: `#6007` 标记了版本 `2.0.0.post1`，预示着 v2.0.0 的修补版即将发布。
- **【重要 PR 提交】**: 针对今日最严重的 Bug（详见后文），开发者和社区贡献者已提交了多个修复 PR，包括：`#6004`（修复 tool_call/tool_result 配对问题）、`#5989`（多层防护孤儿 tool_result 消息）、`#6010`（修复遗留文件名块加载）、`#6005`（修复Telegram 轮询冲突循环）等，表明问题正在被积极解决。
- **【新功能推进】**: `#5882`（OMP工作流集成）和 `#5187`（Windows 桌面 GUI 自动化）等大型功能 PR 仍在持续更新中，预示着项目的长期路线图仍在稳步推进。

## 4. 社区热点

今日社区讨论的焦点高度集中于 **v2.0.0 版本的稳定性与兼容性问题**。

- **🔥 最热门 Issue**: [#5951 [Bug]: Windows 沙箱问题完整排查...](https://github.com/agentscope-ai/CoPaw/issues/5951)
  - **评论数**: 8 | **状态**: OPEN
  - **诉求**: 用户详细报告了 Windows 沙箱的严重缺陷，包括 pwsh 递归爆炸、内存溢出等问题，导致工具几乎不可用。该 issue 描述专业、详细，反映了高级用户对 v2.0.0 沙箱实现的不满，期待紧急修复。
- **🔔 高关注度 Issue**: [#5996 [Bug]: 2.0.0对话时会产生MODEL_EXECUTION_ERROR](https://github.com/agentscope-ai/CoPaw/issues/5996)
  - **评论数**: 7 | **状态**: OPEN
  - **诉求**: 根因分析指向 `make_offload_hint_msg()` 生成的“孤儿” tool 消息导致 OpenAI API 400 错误。该问题揭示了后台工具调用与上下文格式化之间的深层矛盾，影响了所有使用 v2.0.0 的用户。
- **💬 活跃用户**: 用户 `anye3508` 和 `feng183043996` 在社区中非常活跃，提出了多个高质量问题，如 `#5961`（循环执行）、`#5998`（记忆上下文不一致）、`#5995`（消息丢失）等，是社区反馈的重要来源。
- **👀 高频 Issue**: `tool_call/tool_result` 配对断裂导致的 “400 BadRequestError” 是今日被提及最多的故障模式，涉及 `#5996`, `#5986`, `#5960`, `#5972`, `#6002`, `#5985` 等多个 Issue，表明这是一个影响面极广的系统性问题。

## 5. Bug 与稳定性

今日报告的 Bug 数量多且严重，严重影响了 v2.0.0 的使用体验。按严重程度排列如下：

- **🔴 严重 (Critical)**:
  - **Windows 沙箱崩溃** (`#5951`): 导致工具完全不可用，无修复 PR。
  - **API 400 错误 (孤儿 tool 消息)** (`#5996`, `#5986`, `#5960`, `#6002` 等): 核心功能调用失败，影响所有用户。已有对应修复 PR (`#6004`, `#5989`)。
  - **上下文压缩导致会话不可用** (`#6009`): 累积对话后，压缩机制错误导致整个 session 被上游拒绝，只能新建。无修复 PR。

- **🟡 高 (High)**:
  - **升级后数据不兼容** (`#5964`, `#5967`): 对话历史映射丢失、Agent 因 Pydantic 错误启动失败。已有修复 PR (`#5991`, `#6010`) 已被合并。
  - **`auto-memory` 功能失效** (`#5952`, `#5965`): 因 `PyInstaller` 打包缺少模块导致内存摘要失败。已有修复 PR (`#5997`)。
  - **消息丢失 (无队列)** (`#5995`): 并发消息被静默丢弃，严重影响用户体验。无修复 PR。

- **🟠 中 (Medium)**:
  - **WebUI 控制台/频道消息显示异常** (`#6003`, `#6008`, `#5981`, `#5955`): 包括 UI 显示不完整、TUI 点击崩溃、搜索框错误等。
  - **沙箱权限问题** (`#5982`, `#5984`, `#5954`): 权限审核过于频繁或无法正常工作。
  - **技能识别与加载问题** (`#6001`, `#5955`): 新技能无法识别、技能列表显示不全。

## 6. 功能请求与路线图信号

用户提出的功能需求反映了对 **跨平台协作** 和 **精细化权限控制** 的强烈诉求。

- **跨频道会话绑定/切换** (`#5999`): 用户希望在 Console、飞书、钉钉等不同平台间无缝接力同一段对话。这是一个非常合理且有价值的工作流改进请求。鉴于已有 `#5992` (添加会话级模型覆盖) 的 PR 被提交，很可能成为下一版本的新特性。
- **更灵活的权限模式** (`#5954` 评论): 用户建议增加“工具白名单模式”，允许用户选择一次性执行或加入白名单永久自动执行。这可以作为对现有治理模式的补充，值得项目团队评估。
- **(已在 PR 中的) 会话级模型覆盖** (`#5992`): 此功能请求允许单个 Agent 在不同会话中使用不同的LLM，非常实用，也是 `#5999` 的基础。该 PR 为“Ready for Human Review”状态，有望在下一版本中落地。
- **文件快捷打开/预览** (`#4786` 已关闭但仍在更新): 用户对生成的 Word/PPT 文件希望能一键打开或预览，表明对 Agent 产出物的易用性有更高期待。

## 7. 用户反馈摘要

从今日的 Issues 和评论中，可以提炼出以下用户痛点和使用场景反馈：

- **“升级之痛”**: 大量用户反馈升级到 v2.0.0 后遭遇 `400 BadRequestError`，导致系统无法正常工作。用户“2fly2”精确指出了 `_split_context_for_compression()` 的配对缺陷。用户“ausliang”失去了全部历史对话映射。这是 v2.0.0 发布后最大的信任危机。
- **“工具不可用”**: 用户“wjt0321”对 Windows 沙箱问题进行了详尽排查，并直言“整个工具几乎不可用”。用户“30toB”和“BorisPolonsky”则批评权限系统过于繁琐，每个操作都需要审批，效率极低。
- **“心智模型不一致”**: 用户“feng183043996”报告了 Agent 记忆与用户意图不一致的案例（`#5998`），指出 Agent 在用户确认新方案后仍然使用旧方案执行，这暴露了 Agent 规划与记忆机制间的深层问题。
- **“功能被移除”**: 用户“xurids”反馈“消息队列功能没有了”，并表达强烈不满（“急急急，望修复”）。这通常是最让用户失望的变更。
- **正面反馈**: 尽管 Bug 众多，仍有用户愿意提交详细的大报告（如 `#5951`, `#5952`），说明社区中不乏专业且愿意帮助项目改进的用户。（如 `#5975` PR 修复暗色模式文本对比度，也体现了社区对细节的关注。）

## 8. 待处理积压

- **严重 Bug 待修复**:
  - [#5951 [Bug]: Windows 沙箱问题完整排查...](https://github.com/agentscope-ai/CoPaw/issues/5951) (已严重，无修复PR)
  - [#6009 [Bug]: scroll context 压缩触发不准...](https://github.com/agentscope-ai/CoPaw/issues/6009) (已严重，无修复PR)
  - [#5995 [Bug]: Messages silently dropped...](https://github.com/agentscope-ai/CoPaw/issues/5995) (已高，无修复PR)

- **重要功能 PR 等待审查**:
  - [#5882 [PR]: feat(omp): integrate OMP workflow modes...](https://github.com/agentscope-ai/CoPaw/pull/5882) (重大功能，4天无新Review)
  - [#5187 [PR]: feat(computer-use): Windows desktop GUI automation...](https://github.com/agentscope-ai/CoPaw/pull/5187) (重大功能，29天无新Review)
  - [#5726 [PR]: feat(agents): implement vision fallback...](https://github.com/agentscope-ai/CoPaw/pull/5726) (有价值功能，11天无新Review)

- **社区涌入的新手贡献者 PR**: 多个 `first-time-contributor` 的 PR（如 `#5968`, `#5992`, `#5993`）正在等待维护团队更积极的指导和快速合并，以保持社区贡献热情。

---
*报告生成时间: 2026-07-13*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，没问题。作为 AI 智能体与个人 AI 助手领域的开源项目分析师，我将根据您提供的 ZeroClaw GitHub 数据，为您生成了这份结构清晰、数据驱动的 2026-07-13 项目动态日报。

---

## ZeroClaw 项目动态日报 | 2026-07-13

### 1. 今日速览

项目今日维持 **高度活跃** 状态。过去 24 小时内共有 **50 条 PR** 和 **12 条 Issue** 更新，社区贡献热情高涨，技术讨论聚焦于运行时稳定性与核心架构重构。然而，PR 合并率极低（仅 2/50），且大部分开放 PR 标注为“等待作者回应”，表明项目正处于大规模功能开发和重构阶段，维护者审查资源可能成为瓶颈。同时，多个 **P1 级别 Bug** 持续存在，其中部分已有关联修复 PR，但尚未合并，项目的 **内部迭代密度高，但产出交付节奏较慢**。

### 3. 项目进展 (主要合并/关闭项)

尽管今日合并数量不多，但仍有值得关注的进展：

- **功能关闭**：
    - **[#8653]** **自动恢复最近的 Code 会话** 功能已被关闭。该功能旨在提升 ZeroCode 用户的使用体验，其关闭可能意味着该功能已经通过其他方式实现，或者当前优先级被临时搁置。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8653)

- **PR 合并记录**：
    - 今日仅记录了 2 条 PR 被合并或关闭，但具体内容未提供详细数据。根据 PR 池的规模，这暗示项目维护者对代码审查和合并持非常审慎的态度。

**总结：** 项目整体向前迈进的速度因大量待审查 PR 而放缓，但功能开发（如 Inkbox 频道、Webhook 集成）仍在积极进行中。

### 4. 社区热点

今日社区讨论的热点集中在 **运行时核心 Bug** 和 **重大新功能集成** 上，反映了用户对稳定性和扩展性的双重诉求。

- **最热门 Issue & 核心 Bug：**
    - **[#5808]** **默认上下文预算被系统提示和工具定义耗尽**。这是目前评论最多（8条）的 Issue，并被标记为 P1 和“高风险”。用户 `JordanTheJet` 详细描述了默认 32k token 上下文在第一轮迭代就被超支 3.3 倍的问题，这直接导致了“无限抢占式修剪”的死循环，严重影响工作流。此问题的核心矛盾在于默认配置无法满足基本功能负载，是亟待解决的稳定性与可用性问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)
    - **[#6055]** **Slack 频道线程历史上下文补全**。此功能请求也获得了 6 条评论的积极讨论。它旨在解决 Slack 机器人在 “strict_mention_in_thread” 模式下需用户反复提及的问题，通过自动拉取线程历史来改善对话体验，反映了社区对集成聊天平台更深层、更流畅的交互需求。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)

- **最热门 PR & 核心重构：**
    - **[#8784]** **重构运行时：分割历史循环契约**。作为 #7846 重构工作的第一部分，此 PR 处理了核心架构问题——代理循环中历史记录的“追加-日志”契约。该 PR 规模大（L），风险高，且正处于维护者审查阶段，其直接影响代理行为的正确性，是社区专家关注的技术焦点。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8784)

### 5. Bug 与稳定性

今日报告了 **4 个新 Bug**，其中 3 个被标记为严重 (`S1 - workflow blocked`) 的 P1 级别问题。当前 **尚无** 针对这些新 Bug 的修复 PR 被提出。

- **S1 - 工作流阻塞 (P1):**
    - **[#9016]** **OpenAI 工具调用失败**：当发送推理努力 (`reasoning_effort`) 参数给 OpenAI 兼容模型时，如果同时发送了工具，会导致调用失败。这是一个高频使用的核心功能回归或兼容性问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9016)
    - **[#9019]** **OpenAI Responses API 拒绝视觉模型**：使用 `wire_api = "responses"` 的 OpenAI 提供商别名在接收到图像输入时被错误拒绝，因为代码硬编码了 `vision = false`。这导致支持 Vision 的模型在特定配置下无法使用。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9019)
    - **[#8642]** **MCP/工具模式克隆导致无限制内存增长** (P1)：从 OOM (内存溢出) 问题的母议题中拆分出来。此 Bug 驱动了在代理循环中由于工具模式克隆导致的内存持续增长，与 WSL2 下的重启风暴问题同样严重，是当前性能稳定性的主要威胁之一。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)

- **S2 - 降级行为：**
    - **[#9017]** **`--config-dir` 标志在 CLI 语言检测中被忽略**：导致用户指定的配置目录在 CLI 本地化时无效，是一个用户体验上的降级问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9017)

- **已有修复 PR 的严重 Bug：**
    - **[#5808]** **默认上下文超支** (P1)：如前所述，虽无直接修复PR，但已得到社区高度关注并标记为“进行中”。
    - **[#8931]** **OpenAI/Router 工具参数 400 错误**：修复 PR 已存在，但因标记为“等待作者行动”而停滞。如果合并，将修复在多个提供商间因单个 `tool_calls` 参数格式错误导致整个请求 400 的问题。[PR链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8931)

### 6. 功能请求与路线图信号

今日新增了 4 个功能请求，部分功能已展现出高开发成熟度：

- **高潜力纳入**：
    - **[#9022]** **可选的 Slack Events API HTTP 模式**：为适应“缩容到零”的部署模式提出，以替代当前的 Web API 轮询方式。这是对 Serverless 和按需付费架构的关键补充。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9022)
    - **[#9020]** **ZeroCode 会话回滚与分叉**：允许用户从特定对话轮次恢复或分叉，解决因错误状态导致需完全重启新会话的问题。对于提升 ZeroCode 的容错性和高级用户操控能力至关重要。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9020)

- **已有关联 PR 的功能**：
    -   **Inkbox 原生频道集成 ([#8384])**、**从 Web 仪表盘进行应用内升级 ([#8173])**、**插件 Webhook 注册验证 ([#8949])** 等大型功能均有规模巨大的 PR（XL/L）在处理，是下一版本更新的核心内容。
    -   **内存内容扫描 ([#8984])** 和 **内存重排序阶段 ([#8895])** 的 PR 表明，项目正在构建更安全、更智能的内存子系统，这是长期路线图中的重要一环。

### 7. 用户反馈摘要

从 Issues 的评论和描述中，可以提炼出以下用户痛点：

- **配置与默认值失配**：多位用户（如 `JordanTheJet` 在 #5808）指出，默认配置（如 32k 上下文）无法满足系统内置功能（如系统提示和工具定义）的最低需求，导致开箱即用的体验不佳。
- **平台集成体验割裂**：Slack 集成需要改进 (#6055, #9022)；OpenAI 兼容模型的配置路径复杂且容易出错 (#9016, #9019, #8931)，用户对“一处配置错误，全线崩溃”的体验感到沮丧。
- **稳定性与可观测性需求**：OOM 问题 (#8642) 和诊断工具超时 (#8910) 表明，用户在生产环境中对运行时稳定性和可调试性有迫切需求。
- **会话管理不灵活**：无法回滚或分叉有问题的会话 (#9020) 是 ZeroCode 用户的一个明显痛点，导致在面对临时故障时缺乏恢复手段。

### 8. 待处理积压

以下项需要项目维护者重点关注，以避免社区贡献的流失和项目健康度下降：

- **高风险遗留 Issues**：
    - **[#8073]** **v0.8.3 发布支持 Tracker**：这是一个整合了多项工作的 Epics Tracker，运行时间已超过三周，可能导致相关功能被阻塞，需定期评估进度并给出明确信号。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)
    - **[#8353]** **改善错误信息并替换 unwrap**：一个较小但重要的代码质量 PR，来自 6月26日，目前已标记为 `stale-candidate`（即将过时），可能被自动关闭。维护者需决定是否值得合并。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8353)

- **大量“等待作者行动”的 PR**：
    - 在今日活跃的 48 条待合并 PR 中，至少 12 条明确标记了 `needs-author-action`。这反映出维护者在审查后频繁要求修改，但作者未能及时响应。维护者可以考虑设置一个时效窗口，超时则自动关闭，或主动联系核心贡献者。例如 **[#8784]**、**[#8384]**、**[#8949]** 等重要重构和新功能 PR 均处于此状态。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*