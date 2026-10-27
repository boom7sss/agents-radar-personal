# OpenClaw 生态日报 2026-08-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-17 01:41 UTC

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

# OpenClaw 项目动态日报 — 2026-08-17

## 1. 今日速览

OpenClaw 项目在过去 24 小时内维持了高强度的社区活跃度：Issues 更新 500 条（新开/活跃 454 条，关闭 46 条），PR 更新 500 条（待合并 384 条，已合并/关闭 116 条），另有 1 个新的 Release（PR #124528 的 Gateway 性能分析证据包）。社区关注的核心集中在**消息静默丢失**（#121058、#44925）、**子代理完成状态不可靠**（#44925、#50165、#92433）、以及 **Gateway 事件循环阻塞**（#115908、#112423）三大类长期顽疾上。值得关注的是，维护者 steipete 当日密集提交了多个高优先级修复 PR（#124914、#124951、#124947、#124948、#124932），覆盖 RSS 诊断、Unicode 迁移、Codex 插件工具丢失等关键问题，项目正在积极消化存量 bug。

## 2. 版本发布

过去 24 小时内无新的稳定版/测试版发布。新增 Release 为：

- **pr-124528-profiles** — [链接](https://github.com/openclaw/openclaw/releases)
  PR #124528 的 Gateway 性能基线证据包，包含在受限三节点、12 并发轮次 Gateway 测试环境中采集的 before/after CPU profiles，用于事件循环热点对比分析。该 Release 面向开发者/维护者，为性能优化决策提供数据支撑，非面向最终用户的功能性发布。

## 3. 项目进展

过去 24 小时共合并/关闭 116 个 PR。从合并及待合并状态看，项目近期推进的重点方向包括：

- **持久化边界 Zod 校验整合（wave 2）**（#124961，待合并） — 将 8 处持久化数据边界的手写运行时校验统一迁移到 Zod schema，提升可审计性和类型一致性。
- **Gateway 控制面轮询停滞修复**（#124891，待合并） — 解决共享 Gateway 在活跃 dashboard 操作和更新期间出现多秒 UI/RPC 停滞的问题，并消除了本地工作树间的串行化阻塞。
- **Gateway RSS 诊断适配运行时上限**（#124914，待合并） — 修复健康大堆 Gateway 反复误报 RSS 压力的问题，采用 Bun-safe 运行时边界方案。
- **Unicode 会话在 SQLite 升级中丢失的修复**（#124951，待合并） — 修复从旧 JSON 会话状态迁移到 SQLite 时，包含 Unicode 字符的会话行被错误丢弃的问题。
- **Codex 动态工具构建修复**（#124947、#124932，待合并） — 修复 Codex 因单个工具名不兼容而拒绝整个 `thread/start`、以及插件工具从 Codex 受限配置中消失的问题。
- **会话可见性与自动归档**（#124925，待合并） — 让 durable work 在 dashboard 中保持可见，并为陈旧会话增加自动归档机制。

## 4. 社区热点

- **[#121058] Silent reply failures still recurring**（[链接](https://github.com/openclaw/openclaw/issues/121058)） — 97 条评论，P1，已关闭。
  这是目前社区最关注的 issue：#116277 关闭后静默回复失败仍在继续，监控 cron 持续记录新发生。它与其他多条活跃 issue（#44925、#87561）共同指向同一核心诉求——**消息投递的最终可靠性缺乏闭环验证**。

- **[#44925] Subagent completion silently lost**（[链接](https://github.com/openclaw/openclaw/issues/44925)） — 31 条评论，2 👍，Diamond lobster 评级，3 月创建至今未关闭。
  子代理在多种故障模式下静默丢失结果（完成通知失败 E31/E42/E45、超时无重试、无通知）。社区用户对此表现出明显不满，反映了对**任务编排可观测性**的强烈需求。

- **[#48003] Steer mode 无法在主线会话回合中注入消息**（[链接](https://github.com/openclaw/openclaw/issues/48003)） — 21 条评论，4 👍，P1。
  用户期望 `messages.queue.mode: "steer"` 在工具边界将消息注入正在进行的回合，但当前只能排队等待回合结束。该问题直接影响了交互实时性体验。

- **[#121487] 大型流式工具调用导致 Agent 假死**（[链接](https://github.com/openclaw/openclaw/pull/121487)） — 待合并 PR，关闭 #121486。
  当工具参数以流式方式传输大 JSON（如多 KB 文件写入）时，流式输出中断、Gateway 短暂无响应。社区对交互流畅度的诉求持续升温。

## 5. Bug 与稳定性

按严重程度排列（P1 = 最严重）：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|--------|-------|------|-------------|
| P1 + 消息丢失 | [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败在 #116277 关闭后仍持续出现 | 无（已关闭但问题复发） |
| P1 + 会话状态 | [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话转录投影在持续写入下可进入活锁，阻塞主线程及所有通道传输 | 无 |
| P1 + 消息丢失 | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 收图后主通道卡死约 3 分钟，多模态 run 陷入无效状态 | 无 |
| P1 + 会话状态 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex 后端 Telegram 回合反复超时，无法到达 `turn/completed` | 无 |
| P1 + 会话状态 | [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite 转录清理阻塞 Gateway 事件循环 | 无 |
| P1 + 会话状态 | [#85844](https://github.com/openclaw/openclaw/issues/85844) | 自动更新后运行中的 Gateway 继续引用旧 hash bundle 导入 | 无 |
| P1 + 消息丢失 | [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后 write/exec 工具参数被静默丢弃 | 无 |
| P2 + 数据增长 | [#114612](https://github.com/openclaw/openclaw/issues/114612) | memory_index_chunks 和 memory_embedding_cache 无保留策略，无限增长 | 无 |
| P1 + 安全 | [#46786](https://github.com/openclaw/openclaw/issues/46786) | `tools.elevated.enabled: true` 导致所有 exec 路由到宿主机而非 sandbox | 无 |
| P1 + 状态丢失 | [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel 更新失败：updater 使用 npm 但仓库要求 pnpm（workspace:*） | 无 |
| P2 + 会话状态 | [#92433](https://github.com/openclaw/openclaw/issues/92433) | 子代理完成通知在 requester run 提前结束时丢失 | [已关闭](https://github.com/openclaw/openclaw/issues/92433)，有修复 |
| P1 + 更新机制 | [#124659 PR](https://github.com/openclaw/openclaw/pull/124659) | 托管 Gateway 更新时 supervisor 与 update 进程竞态创建 successor | 待合并 |
| P1 + 工具 | [#124932 PR](https://github.com/openclaw/openclaw/pull/124932) | Codex 因单个不兼容工具名拒绝整个 thread/start | 待合并 |
| P1 + 工具 | [#124947 PR](https://github.com/openclaw/openclaw/pull/124947) | Codex 动态工具构建时 plugin 工具丢失 | 待合并 |
| P1 + 升级 | [#124951 PR](https://github.com/openclaw/openclaw/pull/124951) | Unicode 会话在 SQLite 升级中被丢弃 | 待合并 |

## 6. 功能请求与路线图信号

- **Per-agent 成本预算（Gateway 级）**（[#42475](https://github.com/openclaw/openclaw/issues/42475)） — 26 条评论，P2，已挂 linked-pr。在 Gateway 层为单个 agent 设置日/月成本上限，在调用模型前拦截，防止失控支出。
- **分层的 bootstrap 文件加载**（[#22438](https://github.com/openclaw/openclaw/issues/22438)） — 19 条评论，P2。避免每个会话（包括子代理、cron）加载全部 bootstrap 文件浪费上下文预算。
- **Agent 自触发的上下文压缩工具**（[#6757](https://github.com/openclaw/openclaw/issues/6757)） — 9 条评论，2 👍。让 agent 自行触发会话压缩而无需用户干预。
- **网关生命周期警告路由到专用频道**（[#45565](https://github.com/openclaw/openclaw/issues/45565)） — 8 条评论，1 👍。避免系统健康警告淹没在活跃对话频道中。
- **WebChat 自托管 STT/TTS 提供商支持**（[#45508](https://github.com/openclaw/openclaw/issues/45508)） — 8 条评论，2 👍。要求将 WebChat 语音功能从浏览器 Web Speech API 改为路由到网关配置的 TTS/STT。
- **Slack Modal 支持**（[#88154](https://github.com/openclaw/openclaw/issues/88154)） — 8 条评论，1 👍。利用 Slack 原生模态 UI 收集结构化输入。
- **Session startup 消息可配置**（[#45501](https://github.com/openclaw/openclaw/issues/45501)） — 7 条评论，1 👍。将 `/new` / `/reset` 后的硬编码启动消息改为可配置。
- **持久化工作可见性**（[PR #124925](https://github.com/openclaw/openclaw/pull/124925)） — 待合并。让 coding 等 durable work 在 dashboard 可见，而非隐藏在 ephemeral 子代理中。

## 7. 用户反馈摘要

从今日活跃 Issues 的评论中提炼的真实用户声音：

- **对消息可靠性的信任危机**：#121058 中用户持续报告"问题被关闭但故障依然存在"，#121486/#121487 中用户描述"流式输出停止更新、Gateway 感觉像卡死了"。用户对静默失败尤为不满——"用户看到的是静默，因为通道投递层抑制或丢弃了最终载荷"（#87561）。
- **对多模态/渠道适配的直接需求**：WhatsApp 图片消息导致通道 3 分钟停滞（#96834）、Feishu 提到的 `@_user_N` 占位符未解析（#48786）、WhatsApp sticker 发送支持（#7476）——用户在各渠道上的体验差异明显。
- **运维痛点集中**:1Password 凭据失败导致 crash-loop 并耗尽 rate limits（#56217）；Windows 上 CLI 命令执行后残留 node.exe 进程（#74378）；Cron "failed" 通知在热加载和重试期间误报、造成告警疲劳（#90595）。
- **对诊断/观测能力的诉求**：WARNING 级别循环检测只记录在服务端，用户和模型都看不到（#120449）；`message` 工具硬编码 25 条上限（#71452）。用户希望 OpenClaw 的诊断信息能透传到模型和 CLI。
- **积极信号**：多个 issue（#87561、#123073、#95844）有维护者介入并标注 `maintainer` 标签，PR #123709 对"外发消息投递过程做可审计解释"的尝试表明项目在主动回应可观测性诉求。

## 8. 待处理积压

以下为长期未响应的关键 Issue/PR，值得维护者关注：

- **[#44925] Subagent completion silently lost**（[链接](https://github.com/openclaw/openclaw/issues/44925)） — 2026-03-13 创建，P1，Diamond lobster，5 个月未关闭。子代理完成结果丢失是最核心的可靠性缺陷之一，一直无 fix PR。
- **[#121058] Silent reply failures still recurring**（[链接](https://github.com/openclaw/openclaw/issues/121058)） — 97 条评论后被关闭，但用户反馈问题仍在持续。关闭时未提供可验证的根因修复，后续 #87561（durable final fallback delivery semantics）可能与之一脉相承但仍在讨论阶段。
- **[#46786] tools.elevated.enabled 破坏 exec 路由逻辑**（[链接](https://github.com/openclaw/openclaw/issues/46786)） — 2026-03-15 创建，P1，安全影响，5 个月未关闭。开启 elevated 选项后所有 exec 路由到宿主机，存在安全隐患，目前只有 `needs-security-review` 标记、无 fix PR。
- **[#115908] Session transcript projection 活锁阻塞主线程**（[链接](https://github.com/openclaw/openclaw/issues/115908)） — 2026-07-29 创建，P1，Diamond lobster，无 fix PR。事件循环阻塞影响所有通道传输，与 #112423（SQLite 转录清理阻塞）高度相关，可考虑合并处理。
- **[#87744] Codex 后端回合反复超时**（[链接](https://github.com/openclaw/openclaw/issues/87744)） — 2026-05-28 创建，P1，3 👍，无 fix PR。"做了工作但永远不报告完成"是比超时更危险的失败模式。
- **[#123073] dev-channel 更新失败（npm vs pnpm 协议不兼容）**（[链接](https://github.com/openclaw/openclaw/issues/123073)） — 2026-08-13 创建，P1，`queueable-fix`，已标 `fix-shape-clear`。修复方向明确、范围有限，适合社区快速贡献。
- **[#78035] memory-core 搜索结果丢弃 sibling supplement 数据**（[链接](https://github.com/openclaw/openclaw/pull/78035)） — 2026-05-05 创建，`needs proof` 状态已 3 个月。`Promise.all` fail-fast 导致一个 supplement 失败即丢弃所有结果，修复方案明确但缺乏验收证据。

---

*本报告基于 GitHub 数据生成，所有链接均可点击跳转至对应 Issue/PR 页面。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**日期**: 2026-08-17

---

## 1. 生态全景

个人 AI 助手开源生态整体处于**高速迭代期**，但分化明显：以 OpenClaw 为代表的头部项目维持每日 500 条 Issue/PR 级别的社区活跃度，而 Moltis、CoPaw 等中型项目则以"问题高发但修复迅速"的节奏推进。生态最集中的痛点是**消息投递可靠性**（OpenClaw #121058、#44925，Hermes #88059，NanoBot #5266 均指向静默丢失/不可观测）、**Token 成本失控**（NanoBot 百万 token 事件、OpenClaw per-agent 成本预算）与**安全加固**（ZeroClaw SSRF 防护、LobsterAI 三连安全 PR、PicoClaw SSRF PR 系列）。多智能体协作（Hermes Bot Mode 内置化、ZeroClaw swarm RFC、NanoClaw A1-A4 规划能力落地）成为最明确的路线图信号，而 Token 监控、可观测性、自动更新安全则是用户反馈最强烈的体验短板。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 合并/关闭率 | 健康度 | 阶段判断 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（454 活跃/46 关闭） | 500（384 待合并/116 合并关闭） | 1 个（dev 证据包） | 23.2% | ⭐⭐⭐⭐ | 快速迭代 + 存量 bug 消化 |
| **NanoBot** | 15（11 活跃/4 关闭） | 500（499 待合并/1 合并） | 无 | 0.2% | ⭐⭐ | 维护评审带宽严重不足 |
| **Hermes Agent** | 50（49 活跃/1 关闭） | 50（43 待合并/7 合并关闭） | v0.20.2（~397 PR 整合） | 14.0% | ⭐⭐⭐⭐⭐ | 快速迭代 + 发布节奏稳定 |
| **PicoClaw** | 3（全活跃） | 5（4 待合并/1 关闭） | 无 | 20.0% | ⭐⭐⭐ | 偏冷清，安全 PR 积压 |
| **NanoClaw** | 1（0 活跃/1 关闭） | 32（19 待合并/13 合并关闭） | 无 | 40.6% | ⭐⭐⭐⭐⭐ | 核心团队高密度推进架构迭代 |
| **IronClaw** | 1（新开） | 9（7 待合并/2 合并关闭） | 无 | 22.2% | ⭐⭐⭐⭐ | 依赖维护 + 单一功能开发 |
| **LobsterAI** | 10（全为 stale 标记/关闭） | 17（8 待合并/9 合并关闭） | 无 | 52.9% | ⭐⭐⭐ | 安全加固落地，但社区活跃度回落 |
| **Moltis** | 3（2 新开/1 关闭） | 6（1 待合并/5 合并关闭） | 无 | 83.3% | ⭐⭐⭐⭐ | 修复迅速，编译阻塞已解除 |
| **CoPaw** | 12（8 活跃/4 关闭） | 11（9 待合并/2 关闭） | 无 | 18.2% | ⭐⭐⭐ | 社区贡献活跃，但版本发布偏慢 |
| **ZeroClaw** | 48（46 活跃/2 关闭） | 50（46 待合并/4 合并关闭） | 无 | 8.0% | ⭐⭐⭐⭐ | 密集设计评审 + 安全加固双轨 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | — | — | — | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**生态位**：OpenClaw 是当前个人 AI 助手开源生态中**社区规模最大、Issue 讨论深度最高**的项目（单日 500 条 Issue 更新，单 issue 最高 97 条评论），已被 LobsterAI（其 PR #1715 修复对 OpenClaw 服务端代理的兼容性）、Hermes Agent（Bot Mode 原为独立仓库后内置）等项目作为**参照实现或集成目标**，实质上承担了生态标准制定者的角色。

**技术路线差异**：OpenClaw 的架构强调 **Gateway 作为统一入口的事件循环模型**（社区讨论集中在 Gateway 事件循环阻塞、SQLite 转录清理、RSS 诊断等基础设施层面），对多通道、多模态、会话持久化有更深的工程积累。相比 Hermes Agent 的三天一个 patch 版本节奏（v0.20.1→v0.20.2），OpenClaw 当前的发布节奏更保守（仅 dev 证据包），但 bug 修复 PR 提交密度高（steipete 单日 5 个高优先级修复 PR）。

**社区规模**：从数字看，OpenClaw 单日活跃度（500 Issue + 500 PR）远超 Hermes（50+50）与 ZeroClaw（48+50），反映出其用户基数与关注度的绝对领先。但需注意，大量 PR 处于待合并状态（384 条）也表明评审压力大。

**核心短板**：消息投递可靠性（"静默失败"持续复发）、子代理完成状态不可靠、Gateway 事件循环阻塞三座大山尚未解决，且顶级 issue（#44925）已存活 5 个月未关闭——用户的信任成本正在累积。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息投递可靠性/最终一致性** | OpenClaw（#121058 静默回复失败、#44925 子代理完成丢失）、Hermes（#88059 bot-to-bot 回复静默丢失）、NanoBot（#5377 consolidation 截断导致消息丢失） | 需要投递闭环验证、失败重试、可审计的投递日志 |
| **Token 成本管控与可观测性** | NanoBot（#5266 百万 token 无感知、#5402 consolidation 不触发）、OpenClaw（#42475 per-agent 成本预算）、NanoBot（#5298 MCP schema 预算控制） | 需要准确的 token 计量、per-agent/per-session 预算拦截、消耗日志 |
| **SSRF 与出入站安全** | PicoClaw（#3322/#3323/#3324 入站媒体 SSRF）、ZeroClaw（#8713 file_download SSRF、#9580 HTTP egress 加固）、LobsterAI（#1833 URL scheme 白名单） | 私网地址（127.0.0.1、169.254.169.254）必须默认阻断，出站流量需策略化管控 |
| **多智能体/Agent 间通信** | Hermes（Bot Mode 内置化 + bot-to-bot 协议）、ZeroClaw（#10025 swarm RFC）、NanoClaw（A1-A4 规划能力落地）、CoPaw（#7056 后台任务列表 API） | Agent 间消息路由、会话隔离、任务追踪成为标配需求 |
| **上下文管理与持久化一致性** | OpenClaw（#124951 Unicode 迁移丢失、#124961 Zod 校验整合）、Hermes（#87368 后台审查丢上下文）、NanoBot（#2463 prompt 前缀不一致）、Moltis（#1186 vault 哈希一致性） | 会话状态迁移不能丢数据、持久化边界需 schema 校验 |
| **长期运行稳定性** | Hermes（#88033 FD 泄漏、#87479 缓存无界增长、#88050 cron 重试风暴）、OpenClaw（#112423 SQLite 清理阻塞、#115908 活锁）、CoPaw（#6471 cron misfire） | 资源泄漏、事件循环阻塞、定时任务可靠性是常驻服务的核心痛点 |
| **CI/测试稳定性** | ZeroClaw（#10013/#10006/#9965 三个并行测试 flaky）、Moltis（#1193 push fanout 竞态、#1201 编译阻塞）、NanoBot（#4329 误合并事件） | 并行测试门禁的可靠性直接影响开发效率与合入信心 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手：多通道（WhatsApp/Telegram/Feishu/Codex）、多模态、持久化记忆、子代理编排 | 重度个人用户、自托管爱好者、开发者 | Gateway 事件循环 + SQLite 持久化 + 多通道适配层，单仓库单二进制 |
| **Hermes Agent** | 桌面应用（Electron-like）+ 多 profile + Bot Mode 多智能体协作 + Codex OAuth 深度集成 | 桌面优先的个人/团队用户 | 桌面壳 + headless 双形态，profile 隔离，Bot Mode 内置插件化（stable-tier 系统提示词） |
| **NanoBot** | 轻量聊天机器人网关（Telegram/Matrix/Discord 等），技能（skills）系统、Dream 工作流 | 开发者、自托管轻量用户 | 技能文件系统 + 多通道路由，无重型 Gateway；PR 积压严重 |
| **NanoClaw** | 跨会话上下文管理、Agent 组消息 fan-out、频道适配层 | 开发者（core-team 驱动） | 消息投递架构收敛（mid-turn streaming 单一入口）+ 频道注册表热启动 + MCP 工具扩展 |
| **ZeroClaw** | 知识图谱、插件系统（WASM）、RFC 驱动治理、Chat Completions 兼容层 | 开发者、生态集成方 | WASM 插件 + 知识图谱共享（需 agent 隔离）+ RFC 流程治理 |
| **CoPaw** | CLI 定时任务、DataPaw 分析工作区、多 agent 协调、模型路由 | 数据分析师/研究者（Python 生态） | agentscope 框架（async generator 模式）+ APScheduler + OpenAI Responses API 兼容 |
| **Moltis** | 自托管个人助手网关（CalDAV、Vault、Heartbeat、channel activity log） | 隐私敏感的自托管用户 | Rust 实现，Vault 密钥管理，CalDAV 集成（RFC 4791），channel activity 三级配置 |
| **LobsterAI** | 桌面 IM 聚合（钉钉/飞书/QQ/Outlook）、cowork 协作接口 | 企业用户、国内生态 | Electron + IPC 安全加固 + IM 实例管理，OpenClaw 服务端代理（cowork 模式） |
| **IronClaw** | Rust 原生 agent（Tester/Reviewer/Resolve 自动流程） | Rust 开发者、CI/CD 场景 | 代码优先（IronLoop 配置）、无 UI、依赖管理为主 |

---

## 6. 社区热度与成熟度

### 第一梯队：快速迭代期（活跃度高 + 发布/合并节奏快）

- **Hermes Agent**：单日 50 Issue + 50 PR，v0.20.1→v0.20.2 仅隔 3 天，Bot Mode 内置化战略落地，P0/P1 当日即有修复 PR。属于"功能与稳定性并进"的健康高速增长。
- **NanoClaw**：虽然绝对数量不高（32 PR），但核心团队贡献密度极高，13 个 PR 当日合并（合并率 40.6%），A1-A4 四项规划能力同日落地，体现明确的架构路线图执行力。
- **OpenClaw**：绝对活跃度第一（500+500），但 384 条 PR 待合并说明评审吞吐是瓶颈。steipete 单日密集提交 5 个修复 PR 显示维护者正在积极消化存量 bug，处于"快速迭代 + 存量治理"阶段。

### 第二梯队：质量巩固期（积极修复 + 安全加固）

- **Moltis**：合并率最高（83.3%），编译阻塞和 flaky 测试当日修复，处于"修复为主、小步快跑"的巩固阶段。
- **ZeroClaw**：48 Issue + 50 PR，大量 RFC 评审 + 安全 PR 合入，处于"设计评审 + 安全加固双轨"阶段，设计成熟度高但功能落地速度慢。
- **LobsterAI**：安全三连 PR（敏感日志脱敏、IPC 越权、URL scheme 白名单）当日全部合入，但 10 条 Issue 全部 stale、无新 Bug 上报，社区活跃度呈回落趋势。
- **IronClaw**：依赖升级 + 单一功能修复（Slack 未链接用户 nudge），Issue→PR 当天闭环，平稳维护节奏。

### 第三梯队：需关注（积压严重或活跃度不足）

- **NanoBot**：499 条 PR 待合并、合并率 0.2%，`[conflict]` 标记的 PR 达 14 条，CI/发布基础设施缺失（PR #1066 等待 6 个月），Token 消耗痛点未解决。**维护者带宽严重不足是最大风险。**
- **CoPaw**：v2.1.0 必现崩溃（#7063）和高频崩溃（#7074）尚无确认修复，两个竞品修复 PR 均已关闭但合入方案待确认，新用户入口 404。5 个 first-time-contributor PR 待合并，存在消耗社区贡献意愿的风险。
- **PicoClaw**：新 Slack Bug（#3338）有明确根因但无 PR，3 个安全 PR 已 stale 8 天，合并节奏偏慢。

---

## 7. 值得关注的趋势信号

### 7.1 多智能体协作正从"概念"走向"基础设施"

Hermes 将 Bot Mode 从独立仓库内置为主仓库默认插件（#87886 已合并），ZeroClaw 提出 swarm RFC（#10025），NanoClaw 四项 Agent-间通信规划能力同日落地，CoPaw 提交后台任务列表 API（#7072）——四个项目不约而同地在同一周内推进多智能体基础能力，说明该方向已过验证期、进入工程化阶段。**对开发者**：Agent 间消息路由、会话隔离、任务追踪将成为框架级需求，选型时应评估该项目是否提供原生支持。

### 7.2 Token 成本可观测性成为刚需，但技术方案尚未收敛

NanoBot 的"2 小时耗掉百万 token"事件将 Token 可观测性推为社区第一痛点，OpenClaw 在 Gateway 层提出 per-agent 日/月成本预算（#42475）作为解法。但当前 tiktoken 估算被证明不可靠（NanoBot #5402），consolidation 机制存在截断丢消息风险（#5377），说明**业界尚未找到既准确计量又不丢上下文的解决方案**。**对开发者**：在自建 agent 时建议内置 token 审计日志（which call produces which consumption），而非依赖估算；同时关注 consolidation/上下文压缩的边界条件。

### 7.3 "假成功"模式（表面成功、实际无效）成为信任杀手，可观测性是最强诉求

跨项目反复出现同类模式：CoPaw `cron update --text` 返回成功但 prompt 未更新（#7048，两个竞品 PR 同时修复）；CoPaw `view_video` 静默替换为 "video omitted" 占位符（#7060）；NanoClaw Discord 附件以 `[file: message.txt]` 占位符到达 Agent（#2752）；ZeroClaw `POST /api/cron` 静默接受非法值（#10037）；OpenClaw "用户看到的是静默，因为通道投递层抑制或丢弃了最终载荷"。**用户对"返回成功但没做事"的容忍度比对报错更低**。**对开发者**：任何异步操作应提供可验证的完成证据（如回读确认、审计日志、幂等标记），而非仅返回任务 ID。

### 7.4 SSRF/出入站安全成为多项目共同的安全基线

PicoClaw（3 个安全 PR 覆盖微信/企微/多通道）、ZeroClaw（#9580 合并 HTTP egress 加固 + #8713 待合并 SSRF 修复）、LobsterAI（#1833 URL scheme 白名单）在 24 小时内同时推进出入站安全加固，且均针对私网地址（loopback、link-local、RFC1918）和元数据服务（169.254.169.254）。这是 AI agent 工具调用能力（file_download、web_search、media download）带来的新攻击面。**对开发者**：默认应拒绝私网/链路本地地址的出站请求，除非显式 opt-in；对模型可触达的所有网络工具实施同样的策略。

### 7.5 自动更新的破坏性是桌面化 AI 助手的共性风险

Hermes 被报告 Windows 自动更新可摧毁桌面构建（#87331）、依赖安装失败回退 ZIP 覆盖导致未提交更改永久删除（#87304）；OpenClaw 有 dev-channel 更新器使用 npm 但仓库要求 pnpm 的协议不兼容（#123073）；ZeroClaw 有 supervisor 与 update 进程竞态创建 successor（#124659）。桌面端 + 自动更新在本周集中暴露问题，说明该模式尚未成熟。**对开发者**：更新流程必须具备 dirty-tree 保护、失败安全回滚、更新前备份未提交更改的能力。

### 7.6 中文/多语言用户群体成为不可忽视的用户基数

Hermes 当日有 CJK 全角标点路径终止符修复（#88044）、飞书 open_message_id 修复（#6422 已存活 130 天为最长积压 PR）、Feishu 上下文问题（#87368）；LobsterAI 面向钉钉/飞书/QQ；TinyClaw 无活动但存在中文用户。**对开发者**：多语言通道适配（尤其飞书、钉钉）和 CJK 文本处理（全角标点、`@_user_N` 占位符）是最容易被忽略但真实存在的兼容性缺口。

### 7.7 社区治理机制成为大型项目的隐形竞争力

ZeroClaw 的 RFC 流程（Rev. 25 仍保持高频更新、Ratified 后滚动落地）和"维护者决策队列 tracker"（#8692）提供了治理透明化的范本；OpenClaw 虽然有 97 条评论的顶级 issue，但"关闭后问题复发"的处理方式正在消耗社区信任；NanoBot 的 499 条 PR 积压 + 14 条 `[conflict]` 表明治理失衡直接导致社区贡献意愿受损。**对开发者**：选择依赖项目时，应评估其 RFC/评审流程的透明度和吞吐率——这是长期维护可持续性的最可靠指标。

---

*本报告基于 2026-08-17 各项目 GitHub 公开数据生成，所有结论均有对应的 Issue/PR 链接支撑。数据来源分别为各项目仓库（openclaw/openclaw、HKUDS/nanobot、NousResearch/hermes-agent、sipeed/picoclaw、qwibitai/nanoclaw、nullclaw/nullclaw、nearai/ironclaw、netease-youdao/LobsterAI、TinyAGI/tinyagi、moltis-org/moltis、agentscope-ai/CoPaw、qhkm/zeptoclaw、zeroclaw-labs/zeroclaw）。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-17

## 今日速览

NanoBot 项目在过去 24 小时内保持中等活跃度：新增/活跃 Issue 11 条，关闭 4 条；PR 提交量异常巨大（500 条），但绝大多数为待合并状态（499 条），实际合并/关闭仅 1 条，反映出大量积压的 PR 等待维护者评审。值得关注的是，围绕 Token 消耗监控（#5266）、Token consolidation 失效（#5402、#5377）的讨论持续升温，表明 Token 使用效率已成为社区最关心的痛点。同时，安全漏洞 `exec.allowPatterns` 绕过问题（#5305）已关闭，但其余安全与稳定性问题仍需关注。

## 版本发布

过去 24 小时内无新版本发布。

## 项目进展

今日合并/关闭的 PR 仅 1 条（共 500 条 PR 中），说明维护团队当前评审效率较低，大量 PR 处于积压状态。重点关注以下信号：

- **PR #4329 被错误标记合并后恢复**：PR #5406 在描述中明确指出，#4329（TypeScript 终端 UI）曾被误标记为合并（head 短暂出现在 `main` 上），随后 `main` 立即恢复。PR #5406 重新提交了相同的连续提交历史，并附带跨终端测试修复。这一事件暴露出分支管理上的流程风险。
- 其余 499 条 PR 均处于待合并状态，其中大量 PR 标记为 `[conflict]`（如 #1306、#1205、#1195、#1147、#1128、#1073、#1072、#1053、#1037、#1032、#1026、#1025、#1024、#1015），需要维护者解决冲突后方可合并。

## 社区热点

### 最活跃讨论

| 排名 | Issue/PR | 评论数 | 主题 |
|------|----------|--------|------|
| 1 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 15 | 架构问题：Nanobot 未保留发送给模型的精确 prompt 前缀 |
| 2 | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | 14 | Token 消耗日志缺失，2 小时耗掉百万 token |
| 3 | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | 9 | 0.1.4 → 0.1.4post5 升级破坏 gemini-3-flash-preview |
| 4 | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | 7 | `complete_goal` 工具无限循环，gateway 参数序列化回归 |
| 5 | [#5305](https://github.com/HKUDS/nanobot/issues/5305) | 3 | 安全漏洞：`exec.allowPatterns` 允许列表绕过 |
| 6 | [#5402](https://github.com/HKUDS/nanobot/issues/5402)，[#5377](https://github.com/HKUDS/nanobot/issues/5377) | 各 3 | Token consolidation 机制失效/截断问题 |

### 趋势分析

- **Token 消耗问题成为社区第一痛点**：#5266 报告"2 小时耗掉百万 token 且用户无感知"，#5402 指出 tiktoken 估算持续低估实际消耗导致 consolidation 永不触发，#5377 则暴露 consolidation 截断​​输入但推进了完整消息批次——三个 Issue 从不同角度指向 Token 管理机制的系统性缺陷。
- **架构层面讨论升温**：#2463 讨论了 conversation history 持久化形式与实际发送给模型的 prompt 前缀不一致，与 OpenAI 协议产生根本冲突，属于需要底层重构的架构问题，已持续活跃近 5 个月。

## Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | Fix PR |
|----------|-------|------|--------|
| 🔴 安全 | [#5305](https://github.com/HKUDS/nanobot/issues/5305) | `exec.allowPatterns` 允许列表绕过，可通过 OpenAI 兼容 API 执行链式 shell 命令（已关闭） | 已解决 |
| 🟠 高 | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 工具无限循环，gateway 将 recap 参数解析为裸字符串而非 JSON 对象（回归） | 暂无 |
| 🟠 高 | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Cron 调度器在单次持久化失败后永久静默死亡（已关闭） | 已解决 |
| 🟡 中 | [#5402](https://github.com/HKUDS/nanobot/issues/5402) | Token consolidation 永不触发——tiktoken 估算持续低估实际 token 数 | 暂无 |
| 🟡 中 | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | Consolidation 截断归档输入但推进完整消息批次，导致消息丢失 | 暂无 |
| 🟡 中 | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | 0.1.4 → 0.1.4post5 升级破坏 gemini-3-flash-preview（已关闭） | 已解决 |

## 功能请求与路线图信号

| 功能请求 | Issue/PR | 社区热度 | 路线图判断 |
|----------|----------|----------|------------|
| MCP Apps 宿主支持（WebUI 展示 MCP UI 扩展） | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | 2 评论 | 可能性中等——已有 MCP 客户端基础，属于自然延伸 |
| MCP 大型工具集的 schema 预算控制 | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | 2 评论 | 与 Token 优化方向一致，可能被纳入 |
| 技能增加 `disable-model-invocation`（模型不可自动调用，仅用户可用） | [#5404](https://github.com/HKUDS/nanobot/issues/5404) | 1 评论 | 参考 Cursor/Claude Code 的成熟模式，实现成本低 |
| Dream 应更新已有工作区技能而非每次创建重复技能 | [#4467](https://github.com/HKUDS/nanobot/issues/4467) | 3 评论，1 👍 | 需求明确，涉及 Dream 工作流逻辑修改 |
| Telegram 贴纸与 agent 主动消息反应 | [#5289](https://github.com/HKUDS/nanobot/issues/5289) | 2 评论 | 已有 PR #1195（Telegram forum threads）积压，通道功能扩展方向明确 |
| WebUI 会话协作（@提及） | [PR #5358](https://github.com/HKUDS/nanobot/pull/5358) | — | 新 PR，功能已完成待评审 |
| 原生 TypeScript 终端 UI | [PR #5406](https://github.com/HKUDS/nanobot/pull/5406) | — | 重新提交，需维护者确认无冲突后合并 |

## 用户反馈摘要

从 Issue 评论中提炼的真实反馈：

- **Token 消耗不可控**（#5266）：用户报告"2 小时耗掉百万 token 且无任何用户可感知的活动"，要求增加 Token 消耗日志以便追踪 "which call produces which token consumption"。当前 Token 消耗缺乏可观测性，导致成本失控但无从排查。
- **Token 估算机制不可信**（#5402）：tiktoken 或 provider-specific 计数器的估算持续低估实际 API 返回的 token 数，导致 consolidation 机制形同虚设。用户需要更准确的 Token 计量方式。
- **技能管理存在重复创建问题**（#4467）：用户反馈每次运行 Dream 都会在 `skills/` 下创建新的技能文件，而非更新已有工作区技能。用户每天使用的自定义技能被迫积累大量重复版本，造成维护负担。
- **升级引入回归**（#2185）：从 0.1.4 升级到 0.1.4post5 后，`gemini-3-flash-preview` 的使用被破坏，用户被迫停留在旧版本。社区对回归问题的容忍度较低。
- **Matrix 频道线程上下文不完整**（#5275，已关闭）：用户指出 Matrix 的 "reply in thread" 应当像 Discord 和 Slack 一样形成独立上下文，当前实现存在上下文混乱。
- **MCP 大型工具集消耗过多上下文**（#5298）：用户关注大型 MCP 工具集带来的 context 成本，希望有预算机制来控制模型可见的 MCP schema 数量。

## 待处理积压

以下 Issue/PR 长期未获维护者响应，值得关注：

| 类型 | 编号 | 创建时间 | 等待时长 | 说明 |
|------|------|----------|----------|------|
| Issue | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 2026-03-25 | ~5 个月 | 架构级问题：prompt 前缀不一致，15 条评论，无维护者回应 |
| PR | [#1306](https://github.com/HKUDS/nanobot/pull/1306) | 2026-02-28 | ~6 个月 | Discord 语音/TTS 支持，标记 `[conflict]`，功能完整待评审 |
| PR | [#1205](https://github.com/HKUDS/nanobot/pull/1205) | 2026-02-25 | ~6 个月 | KV cache 复用与 batch prompt rollover 优化，含实验数据 |
| PR | [#1195](https://github.com/HKUDS/nanobot/pull/1195) | 2026-02-25 | ~6 个月 | Telegram forum threads 支持 |
| PR | [#1149](https://github.com/HKUDS/nanobot/pull/1149) | 2026-02-25 | ~6 个月 | PromptGuard 提示注入检测模块 |
| PR | [#1066](https://github.com/HKUDS/nanobot/pull/1066) | 2026-02-23 | ~6 个月 | 添加 release 和 docker image 的 GitHub workflow——项目至今仍无自动化发布流程 |
| PR | [#1024](https://github.com/HKUDS/nanobot/pull/1024) | 2026-02-22 | ~6 个月 | Subagent profiles（按 profile 配置 tools 和 skills），含 227 行测试 |
| PR | [#1025](https://github.com/HKUDS/nanobot/pull/1025) | 2026-02-23 | ~6 个月 | 修复 OAuth token 持久化 + 保留未知配置字段（修复 #1023） |

### 积压风险提示

- **大量 PR 标注 `[conflict]`**：至少 14 条 PR 因长时间未合并已产生冲突，合并成本随时间递增。
- **CI/发布基础设施缺失**：PR #1066 提出添加 release 和 docker image 的自动构建，但已等待 6 个月未合入，项目缺乏自动化发布流程。
- **499 条待合并 PR 与 1 条合并形成鲜明对比**：当日合并/关闭率仅 0.2%，维护者评审带宽严重不足，建议关注团队是否有足够人力支撑项目当前的增长速度。

---

*本报告基于 NanoBot GitHub 仓库 2026-08-17 数据自动生成，链接指向对应 Issue/PR 页面。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-17

作者：AI 开源项目分析师 | 数据来源：Hermes Agent GitHub 仓库

---

## 1. 今日速览

Hermes Agent 在过去 24 小时内保持高强度活跃：共产生 50 条 Issue 更新（其中 49 条新增/活跃，1 条关闭）、50 条 PR 更新（43 条待合并，7 条已合并/关闭），并发布了 v0.20.2 patch 版本。社区讨论集中于 **桌面端自动更新破坏构建**（Windows）、**FD 泄漏导致 EMFILE**、**后台审查与会话上下文丢失**、**审批超时机制失效**等稳定性与可靠性问题。多个 P0/P1 级 Bug 已有对应修复 PR 或在同日内被提交，显示出维护团队响应迅速。新版本 v2026.8.16 将过去积累的约 397 个 PR 统一收编为稳定 tag，为下游消费者提供了明确的部署基线。

---

## 2. 版本发布

### 🔖 Hermes Agent v0.20.2 (v2026.8.16) — 2026-08-16

**发布性质：** Patch release（补丁版本）

**核心内容：** 本版本将自 v0.20.1 以来合并的约 **397 个 PR** 统一整合为一个稳定 tagged release，主要服务于下游消费者——包括 Docker 镜像、托管部署（hosted deployments）和新安装用户。

**破坏性变更：** 发布说明中未提及明确的破坏性变更。

**迁移注意事项：** 由于是 patch 版本且为累积整合，建议下游消费者直接基于此 tag 重建镜像或部署，以获取自 v0.20.1 以来的全部修复与改进。升级前建议查阅 v0.20.1 → v0.20.2 之间的合并 PR 列表，确认无与自身配置相关的行为变更。

---

## 3. 项目进展

今日合并/关闭的重要 PR（7 条）中，**Bot Mode 内置化**是最具战略意义的进展：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#87886](https://github.com/NousResearch/hermes-agent/pull/87886) | feat(desktop): bundle Bot Mode as built-in default-on plugin + core teammate protocol | ✅ 已合并 | **Bot Mode 正式从独立仓库（Hermes-Bot-Mode，已存档）迁移为主仓库内置插件**，默认开启。bot-to-bot 消息协议从用户 SOUL.md 文件升级为核心 stable-tier 系统提示词部分，适用于所有 profile 的所有会话（包括无头模式）。这标志着 Hermes 从单智能体框架向多智能体协作平台的关键一步。 |
| [#88056](https://github.com/NousResearch/hermes-agent/pull/88056) | feat: raise Codex OAuth context to 900K for gpt-5.6 family and gpt-5.4 | ✅ 已合并 | 将 Codex OAuth 上下文窗口从 350K（当日早些时候合并的 #87981 设定）提升至 **900K**，适配 OpenAI 为 ChatGPT 订阅版 Codex 账户开放的大上下文窗口。 |

**其他待合并 PR 中值得关注的进展方向：**

- **稳定性治理**：#88063（SessionDB FD 泄漏修复）、#88048（SessionDB 支持 context-manager 协议）、#88050（cron 重试风暴修复）三者形成组合拳，直指长期运行服务的资源泄漏与重试风暴问题。
- **平台兼容性**：#88062（Telegram TypeHandler 懒重导入修复）、#88044（CJK 全角标点作为 MEDIA 路径终止符）、#88052（macOS FileProvider 路径检测）。
- **新 Provider 扩展**：#88027 将 Devin（Cognition）ACP 作为一等公民 provider 接入 Hermes。

---

## 4. 社区热点

### 🔥 今日讨论热度 TOP 3

**1. [#87559 — ACP 提供的 MCP 服务器工具无法进入可调用工具目录](https://github.com/NousResearch/hermes-agent/issues/87559)**
- 💬 评论数：5 | 状态：OPEN | 类型：Bug (P4)
- **诉求分析：** 用户通过 ACP 模式（Paseo daemon 注入 MCP 服务器）注册的 MCP server 虽然完成了注册，但工具始终无法被 agent 调用。这暴露出 **ACP 与 MCP 两层协议之间的工具传递链路存在断裂**，且 P4 的优先级标注偏低——对于依赖 ACP 生态的用户来说，这可能是阻塞性问题。

**2. [#62158 — 桌面端对话耗时计数器在切换页面后重置为 ~1s](https://github.com/NousResearch/hermes-agent/issues/62158)**
- 💬 评论数：4 | 状态：✅ CLOSED
- **诉求分析：** 该 Issue 自 7 月 10 日创建，历经约 5 周后关闭。用户期望耗时计数在后台持续运行而非仅在当前视图有效。关闭状态说明已解决，但评论较多表明此问题在用户群中有一定关注度。

**3. [#87479 — Telegram 状态消息缓存无界增长](https://github.com/NousResearch/hermes-agent/issues/87479)**
- 💬 评论数：3 | 状态：OPEN | 类型：性能 (P3)
- **诉求分析：** 长期运行的多聊天/访客模式 Telegram 网关因 `_status_message_ids` 无容量上限而导致内存增长。这与 #88033（FD 泄漏）共同反映出**社区对长期运行稳定性的集中关注**。

---

## 5. Bug 与稳定性

### 🔴 P0 级

| Issue | 标题 | 状态 |
|---|---|---|
| [#87368](https://github.com/NousResearch/hermes-agent/issues/87368) | **后台审查丢失 Gateway 临时会话上下文，破坏 prompt-cache 前缀一致性** — 标记为 P0，后台 memory/skill review fork 未继承父进程的 `ephemeral_system_prompt`，导致 Gateway 会话中 review 请求的 system-prompt 前缀与正常请求不一致，影响缓存命中与上下文正确性。 | OPEN（标记 duplicate） |

### 🟠 P1 级

| Issue | 标题 | 状态 |
|---|---|---|
| [#87331](https://github.com/NousResearch/hermes-agent/issues/87331) | **Windows 桌面自动更新可摧毁桌面构建**（venv 锁忽略→hermes.exe 隔离降级→ZIP 回退覆盖安装） | OPEN（标记 duplicate） |
| [#87304](https://github.com/NousResearch/hermes-agent/issues/87304) | **Windows: 依赖安装失败触发 ZIP 回退，永久删除未提交更改+未跟踪文件**（无 dirty-tree 保护） | OPEN |
| [#88033](https://github.com/NousResearch/hermes-agent/issues/88033) | **`hermes serve` FD 泄漏至 EMFILE** — SessionDB 未关闭 + /dev/null 句柄占用 97% FD 表，长跑实例在 1024 soft limit 下完全不可用。**已有对应 fix PR：[#88063](https://github.com/NousResearch/hermes-agent/pull/88063)** | OPEN + FIX PR |

### 🟡 P2 级（精选）

| Issue | 标题 | 状态 |
|---|---|---|
| [#87497](https://github.com/NousResearch/hermes-agent/issues/87497) | lifecycle_guard: ValueError embedded null byte 仍逃逸 — #76762 修复不完整（os.open 仅捕获 OSError） | OPEN |
| [#87488](https://github.com/NousResearch/hermes-agent/issues/87488) | 无头审批升级永不解决：无 notify 回调路径进入 `approval._pending` 且无定时器，文档化的 `approvals.timeout` 自动拒绝永不触发 | OPEN |
| [#87356](https://github.com/NousResearch/hermes-agent/issues/87356) | cronjob 更新 schema 省略 model/provider 参数，drift-guard 修复对 agent 不可达 | OPEN |
| [#87248](https://github.com/NousResearch/hermes-agent/issues/87248) | 桌面端：提供商失败的错误气泡在自动故障转移成功后仍持续显示，看起来像每轮都报错 | OPEN |
| [#87503](https://github.com/NousResearch/hermes-agent/issues/87503) | `_save_codex_tokens()` 从不写回全局 auth 存储，profile 级刷新导致旋转族失效 | OPEN |

### 🔵 P3 级（重点关注）

- [#88012](https://github.com/NousResearch/hermes-agent/issues/88012) — `honcho_search` 始终返回空结果：`peer_perspective` filter 不兼容当前 Honcho 服务器
- [#87419](https://github.com/NousResearch/hermes-agent/issues/87419) — **安全**：Windows 破坏性命令（format C:、diskpart、Remove-Item -Recurse）仅为 dangerous 而非 hardline，可在 `--yolo` 模式下绕过
- [#88053](https://github.com/NousResearch/hermes-agent/issues/88053) — 读-写保护拒绝所有后台审查技能写入：ContextVar 标记在 worker 线程快照间丢失
- [#87412](https://github.com/NousResearch/hermes-agent/issues/87412) — Ink TUI/桌面端不是 `inject_message` 主机，插件 API 文档与实现不一致

### 🟢 今日已修复（已合并/关闭）

- **#62158**（桌面端耗时计数器重置）已关闭 ✅
- **#88056**（Codex OAuth 上下文 350K→900K）已合并 ✅
- **#87886**（Bot Mode 内置化）已合并 ✅

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本

| Issue/PR | 功能 | 信号 |
|---|---|---|
| [#88061](https://github.com/NousResearch/hermes-agent/issues/88061) | **每任务多智能体工作流**（IM 风格任务追踪+可靠执行），自 Hermes-Bot-Mode#108 移植 | 由核心维护者 teknium1 提交，且 Bot Mode 已内置（#87886 已合并），此设计讨论极可能进入路线图 |
| [#88060](https://github.com/NousResearch/hermes-agent/issues/88060) | **桌面端 composer `@` 自动补全应支持 Bot Mode agents**（移植自 Hermes-Bot-Mode#43） | 同上，Bot Mode 已内置，此为配套 UX 改进 |
| [#87267](https://github.com/NousResearch/hermes-agent/issues/87267) | **新增 MAX 平台插件**（俄罗斯 VK 旗下即时通讯工具） | 社区贡献，需评估维护成本与用户基数 |
| [#88027](https://github.com/NousResearch/hermes-agent/pull/88027) | **Devin ACP 作为一等公民 Hermes provider** | 功能完整（别名、发现、运行时解析均已接入），P4 优先级偏低但实现成熟 |

### 路线图信号分析

**多智能体协作是当前最明确的路线图信号。** #87886（Bot Mode 内置化）已合并，#88059/#88060/#88061 三个移植 Issue 同日均由 teknium1 提交，表明维护团队正在系统性地将 Hermes-Bot-Mode 仓库（已存档）的功能资产整合进主仓库。这三个 Issue 覆盖了 bot-to-bot 消息可靠性、composer UX 和工作流设计三个维度，预计将在未来几个版本中分步落地。

---

## 7. 用户反馈摘要

### 真实痛点

1. **自动更新的破坏性风险（Windows 用户强反馈）**
   - [#87331](https://github.com/NousResearch/hermes-agent/issues/87331) 和 [#87304](https://github.com/NousResearch/hermes-agent/issues/87304) 均描述了 **Windows 平台上桌面应用自动更新流程可能摧毁现有安装** 的严重问题——包括删除未提交更改、覆盖安装目录。用户 yuliangop 详细描述了整个故障链：venv 锁被忽略→hermes.exe 隔离降级→ZIP 回退覆盖 win-unpacked。**核心诉求是：更新流程必须有 dirty-tree 保护和失败安全机制。**

2. **长期运行服务的可靠性**
   - 多个 Issue（[#88033](https://github.com/NousResearch/hermes-agent/issues/88033) FD 泄漏、[#87479](https://github.com/NousResearch/hermes-agent/issues/87479) 缓存无界增长、[#88050](https://github.com/NousResearch/hermes-agent/issues/88050) cron 重试风暴）共同指向一个用户画像：**将 Hermes 作为常驻服务（gateway/serve）部署的深度用户**，他们最关心的是资源使用与长时间运行的稳定性。

3. **多 profile 部署下的状态隔离问题**
   - [#87503](https://github.com/NousResearch/hermes-agent/issues/87503)（Codex token 不写回全局存储）和 [#87469](https://github.com/NousResearch/hermes-agent/issues/87469)（后台审查回执在 named profile 下丢失）表明：**多 profile 场景下的状态一致性和隔离性仍有明显缺陷**。

### 使用场景观察

- **安全敏感部署的用户**（[#87419](https://github.com/NousResearch/hermes-agent/issues/87419)）对 `--yolo` 模式下 Windows 破坏性命令可执行表达了明确担忧，暗示部分用户在生产环境中使用 Hermes 且对安全边界有较高期待。
- **中文用户群体活跃**：多个 CJK 相关问题（[#88044](https://github.com/NousResearch/hermes-agent/pull/88044) 全角标点、[#87368](https://github.com/NousResearch/hermes-agent/issues/87368) Feishu 上下文）表明中文用户是重要的使用群体。
- **俄罗斯用户需求开始出现**（[#87267](https://github.com/NousResearch/hermes-agent/issues/87267) 的 MAX 平台请求、[#86880](https://github.com/NousResearch/hermes-agent/pull/86880) 的俄语本地化），显示项目在新兴市场的渗透。

---

## 8. 待处理积压

### ⏳ 长期未响应/延滞的重要 PR

| PR | 标题 | 创建日期 | 持续天数 | 说明 |
|---|---|---|---|---|
| [#6422](https://github.com/NousResearch/hermes-agent/pull/6422) | fix(feishu): use open_message_id for card action replies | 2026-04-09 | **~130 天** | 修复飞书卡片操作回复的 3 个 bug（无效 message_id、未识别斜杠命令等），今日仍有更新。P2 优先级长期未合并，飞书用户的阻塞性问题。 |
| [#66828](https://github.com/NousResearch/hermes-agent/pull/66828) | fix(cli): skip unreachable support files instead of aborting URL skill install | 2026-07-18 | **~30 天** | 修复 URL 技能安装中单个 support 文件不可达导致整体安装失败的问题。P2，needs-decision。 |

### ⏳ 长期未关闭的高优先级 Issue

| Issue | 标题 | 创建日期 | 持续天数 | 说明 |
|---|---|---|---|---|
| [#85391](https://github.com/NousResearch/hermes-agent/issues/85391) | WhatsApp 配对：wizard 与 gateway 写入不同会话目录，0 字节 creds.json 视为"已配对" | 2026-08-13 | 4 天 + 标记 `needs-repro` | 涉及会话状态风险与兼容性风险，可能需要维护者深入排查后确认复现路径 |
| [#87281](https://github.com/NousResearch/hermes-agent/issues/87281) | Kanban notify-subscribe 无 --thread-id 时静默将通知发送至 Telegram DM 根 | 2026-08-15 | 2 天 | 正确投递到错误位置（footgun），标记 `sweeper:risk-message-delivery` |

### ⚠️ 维护者提醒

1. **P0 #87368（后台审查丢上下文）** 虽标记为 duplicate，但影响 prompt-cache 前缀一致性，建议确认 duplicate 目标 issue 是否已跟踪此场景。
2. **P1 #87331 和 #87304（Windows 更新破坏性）** 虽均标记 duplicate，但属于用户资产安全问题（可能导致未提交更改丢失），建议明确归并到哪条 issue 并跟踪修复。
3. **#88059（bot-to-bot 回复静默丢失）** 作为 Bot Mode 内置化后的遗留 bug，建议在 Bot Mode 相关功能迭代中优先处理。

---

## 附：项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 50 条 Issue + 50 条 PR 更新/日，维护者响应及时，发布节奏稳定（v0.20.1→v0.20.2 仅隔 3 天） |
| **Bug 修复效率** | ⭐⭐⭐⭐ | 多数 P0/P1 级 Bug 当日即有对应 PR 或已在审查中（如 #88033→#88063） |
| **社区参与度** | ⭐⭐⭐⭐ | 外部贡献者活跃（PR 涵盖 i18n、新平台适配、安全修复等），但也有大量 duplicate 需要维护者整理 |
| **稳定性风险** | ⭐⭐⭐ | 长期运行服务的资源泄漏问题（FD、缓存）和 Windows 更新安全问题仍需系统性解决 |
| **路线图清晰度** | ⭐⭐⭐⭐ | Bot Mode 内置化明确指向多智能体方向，配套 Issue 系统性跟进 |

---

*本日报基于 2026-08-17 提供的 GitHub 数据自动生成。所有链接均指向 github.com/NousResearch/hermes-agent 下的对应 Issue/PR。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-17

## 1. 今日速览

PicoClaw 项目今日处于温和活跃状态，24 小时内共有 3 条 Issue 更新（全部处于打开状态）和 5 条 PR 更新（4 条待合并，1 条已关闭）。今日无新版本发布。值得注意的是，安全修复 PR 系列（#3322/#3323/#3324）持续处于待合并状态，涉及微信、企微及多通道的 SSRF 防护加固，建议维护者优先推进。新增 Issue #3338 是一个具有明确代码定位的 Slack 媒体上传 Bug，严重程度较高。

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日仅有 1 条 PR 被关闭，暂无新 PR 被合并，项目推进速度偏慢。

### 已关闭 PR

**#3193 [CLOSED] Added simplex channel type** — 作者: dim | 创建: 2026-06-27 | 更新: 2026-08-16
链接: https://github.com/sipeed/picoclaw/pull/3193

这是一个新功能 PR，旨在为 PicoClaw 添加 Simplex 通道类型的支持，从时间线推测已存在约两个月后关闭，未标注合并，大概率被关闭或放弃，Simplex 通道支持目前未能落地。

---

## 4. 社区热点

今日讨论热度整体偏低，所有 Issue/PR 的评论数量都很少。相对最受关注的是以下两个 Issue：

### 热点 1: #3302 — 请求为 MCP 服务器支持 OAuth 2.1
- 作者: sunboy0523 | 评论: 3 | 创建: 2026-07-30 | 更新: 2026-08-16
- 链接: https://github.com/sipeed/picoclaw/issues/3302
- 状态: [stale]（即将/已被标记为过期）

该 Issue 在两日内有评论更新，请求为 MCP（Model Context Protocol）服务器支持 OAuth 2.1 认证，并引用了同名的旧 Issue #2546。已标记为 stale，表明该需求长期未获进展。背后的诉求是：随着 MCP 生态逐步走向生产环境，用户对标准化认证方式的需求愈发迫切。

### 热点 2: #3325 — Telegram 表格应使用富文本消息渲染
- 作者: As-tsaqib | 评论: 1 | 创建: 2026-08-09 | 更新: 2026-08-16
- 链接: https://github.com/sipeed/picoclaw/issues/3325
- 状态: [stale]

该 Issue 指出当前 PicoClaw 通过 Telegram `sendMessage` 的 HTML/MarkdownV2 格式发送回复，结构化 Markdown 表格会降级为纯文本或等宽代码块，无法使用 Telegram Bot API 10.1 引入的原生表格 UI。诉求是提升消息渲染质量，属于用户体验优化类需求，且已进入 stale 状态。

---

## 5. Bug 与稳定性

今日报告了 1 个新 Bug，严重程度较高且有明确的代码级分析和修复方向。

| 严重程度 | Issue | 描述 | 是否有 fix PR |
|---------|-------|------|--------------|
| 高 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 媒体上传始终失败，错误为 `file.upload.v2: file size cannot be 0`。`SendMedia` 构建 `slack.UploadFileParameters` 时未设置 `FileSize` 字段，导致 slack-go SDK 在任何网络请求之前就拒绝上传。环境: picoclaw 0.3.x | 无 |
| 中-高（潜在） | 安全相关：新增 Issue 中未直接报告，但见下方说明 | — | — |

**说明**：虽然今日没有新增 SSRF/Bug 类的 Issue，但 #3322/#3323/#3324 三个 PR 持续等待合并。它们修复的是**入站媒体下载 SSRF 漏洞**（包括 loopback / link-local / RFC1918 私网地址），涉及 QQ/Telegram/Discord/LINE/Slack（#3322）、企微（#3323）、微信（#3324）。此类漏洞在私有化部署场景下存在被利用的风险，建议尽快完成 review 合并。

---

## 6. 功能请求与路线图信号

### 新提出的功能请求

**#3338 相关的 Slack 修复**（见上文 Bug 部分）本质上是一个高频使用的功能缺陷，需要尽快修复。

**#3302 OAuth 2.1 for MCP 支持** — 请求为 MCP 服务器引入 OAuth 2.1 认证支持，这是一个面向 AI 工具生态现代化的需求。虽然已标记 stale，但如果在后续版本中有 MCP 协议相关更新，该功能有较高概率被重新激活。

**#3325 Telegram 原生表格渲染** — 请求利用 Telegram Bot API 10.1 的原生表格 UI 替代现有的纯文本/代码块降级方案。属于提升消息可读性的体验优化，实现成本较低，但已进入 stale，需要维护者评估是否纳入下个版本。

### 待合并 PR 暗示的功能方向

- **#3299 添加 Exa 原生 web 搜索提供商**（待合并）— 为 `tools.web` / `web_search` 添加 Exa 作为原生搜索提供商，支持 `POST /search` API、`X-Api-Key` 认证，并支持 `d/w/m/y` 时间范围过滤。若合并，PicoClaw 的搜索能力将得到扩展，对后续功能规划有意义。

### 已标记 stale 的 PR（3 个安全修复）

- #3322、#3323、#3324（见上文"Bug 与稳定性"部分）均已在 8 月 9 日创建、8 月 16 日更新，当前已标记为 [stale]。长期搁置可能导致用户手动关闭，建议维护者及时处理。

---

## 7. 用户反馈摘要

从今日的 Issues 评论中可以提炼以下用户反馈：

- **Telegram 频道用户对消息渲染质量有期待**（#3325）：用户希望利用了 Telegram Bot API 10.1 提供的原生表格 UI 来渲染结构化数据，而不是退化为普通文本/代码块。说明用户不仅关注功能本身，也关注消息在 IM 中的呈现体验。
- **安全方向上有贡献者主动提交修复**（#3322/#3323/#3324）：贡献者 SashaMIT 连续三个 PR 处理微信、企微及多通道的 SSRF 问题。这些提交说明外部贡献者关注到 IM 通道中媒体下载的安全隐患，并愿意投入精力修复。此类反馈对于评估项目安全姿态有正面意义。
- **新 Bug 报告质量高**（#3338）：用户 octavioturra 在报告 Slack 上传失败时直接定位到 `SendMedia` 中未设置 `FileSize` 的具体代码位置，分析清晰，有助于维护者快速修复。

---

## 8. 待处理积压

以下 Issue/PR 已长期未获维护者响应，建议重点关注：

| 类型 | 编号 | 标题 | 创建时间 | 已存活 | 状态 |
|------|------|------|---------|--------|------|
| PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | 2026-07-26 | 22 天 | 待合并 |
| Issue | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Support OAuth 2.1 for MCP servers | 2026-07-30 | 18 天 | [stale] |
| PR | [#3322](https://github.com/sipeed/picoclaw/pull/3322) | fix(channels): block private targets on inbound media downloads | 2026-08-09 | 8 天 | [stale] 待合并 |
| PR | [#3323](https://github.com/sipeed/picoclaw/pull/3323) | fix(wecom): use CreateSafeHTTPClient for media downloads | 2026-08-09 | 8 天 | [stale] 待合并 |
| PR | [#3324](https://github.com/sipeed/picoclaw/pull/3324) | fix(weixin): use CreateSafeHTTPClient for media downloads | 2026-08-09 | 8 天 | [stale] 待合并 |
| Issue | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Render Telegram tables with rich messages | 2026-08-09 | 8 天 | [stale] |

### 给维护者的建议

1. **优先处理 #3322/#3323/#3324 三个安全 PR**：涉及 SSRF 防护且已进入 stale，建议本周内完成 review 并合并。
2. **尽快确认 #3338 Slack 上传 Bug**：用户报告了明确原因（`FileSize` 未设置），此类高频通道的上传功能不可用会直接影响用户体验。
3. **评估 #3299 Exa 搜索 PR**：功能完整且影响范围清晰，若项目路线图包含搜索能力扩展，应给予明确反馈以避免过期。
4. **对 stale 的 #3302 和 #3325 给出明确结论**：若不在近期路线图内，建议关闭或打上标记以降低维护噪音。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-08-17

## 1. 今日速览

NanoClaw 项目今日保持**活跃的开发节奏**：24 小时内提交了 32 条 PR（其中 13 条已合并/关闭，19 条待合并），核心团队（core-team）贡献了绝大多数代码，集中在跨会话上下文管理、消息投递架构和频道适配层三大方向。已关闭 1 条误报 Issue（#3271，属无效提交），无新版本发布，无用户报告的破坏性 Bug。整体项目健康度良好，核心架构迭代持续推进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 主要推进了以下能力（按主题归类）：

### 消息投递与上下文管理（核心架构）
- **[#3284] container: mid-turn streaming 单一投递入口**（已合并）— 统一 mid-turn 流式消息为唯一内容出口，基于 DB 消除回声抑制，最终结果不再投递内容。这是对投递门的架构级收敛。
- **[#3259] setup/tooling: 三处工具链修复**（已合并）— skill-apply 标题序号剥离、无头浏览器 URL 暴露、inherit-script 提取，修复了步骤编号错乱等问题。
- **[#3262] Chat SDK 桥接 agent-mode DM 表面**（已合并）— 新增 app-context 捕获、DM 线程 ID 规范化、dm-opened 钩子，已实现 A8 + C4 两项规划能力。
- **[#3260] `decline_notify` 未知发件人策略**（已合并）— 第四种未知发件人策略：机器人礼貌拒绝 + 向管理员发送一行 FYI，避免静默丢弃或打扰审批。
- **[#3261] 可选适配器能力扩展**（已合并）— setTyping 状态行、setThreadTitle、setSuggestedPrompts 等可选能力 + 注册表透传。
- **[#3263] 频道注册表热启动**（已合并）— 支持启动后动态注册并热启动单个适配器实例（A1 项）。
- **[#3264] registerDeliveryBatchPreview 钩子**（已合并）— 允许模块在逐条投递前窥视整个未投递批次，用于预取等场景（A2 项）。
- **[#3265] suppressCreatedNotify 选项**（已合并）— 创建 Agent 时抑制成功通知但保留错误通知（A3 项）。
- **[#3266] registerChannelCardInterceptor 拦截缝**（已合并）— 注册卡片构建前可自定义拦截逻辑（A4 项）。
- **[#3283] 保留结构化聊天链接**（已合并）— 修复平台显示文本被缩短时链接丢失的问题。
- **[#3278] MCP 工具：文档保存到 Agent 记忆**（已合并）— 新增 `save_document` MCP 工具，支持将 Word/PDF 附件持久化到 Agent 组记忆（Document Memory 史诗 Story 1.1）。

> **小结**：今日合并内容覆盖了「跨会话上下文」「频道适配能力」「权限策略」「Agent 间通信」四个模块，其中 A1–A4 四项规划能力同时落地，说明项目正按既定架构路线图稳步推进。

## 4. 社区热点

今日无高讨论量 Issue/PR（评论区均无实质讨论）。PR 提交集中来自核心团队（gavrielc 一人贡献 8 条），社区外部贡献者有：Koshkoshinsk（#3283）、amit-shafnir（#3282）、wakqasahmed（#3281）、chubbicorn245（#2752）、stumpjumper（#3280）、adar666（#3278）。整体呈「核心团队驱动 + 少量外部贡献」格局。

## 5. Bug 与稳定性

今日无新增严重 Bug 报告。以下为已提交修复的 PR：

| 严重程度 | 问题描述 | 修复 PR | 状态 |
|---------|---------|---------|------|
| 中 | 出站投递在多个 bot 实例共享同一频道地址时解析到错误的兄弟实例 | [#3255](https://nanocoai/nanoclaw PR #3255) | 待合并 |
| 中 | 上下文行（trigger=0）积压可能将到期任务行挤出批处理窗口 | [#3254](https://nanocoai/nanoclaw PR #3254) | 待合并 |
| 低 | Telegram 配对码带空格粘贴被拒绝（`extractCode` 仅裁剪边缘） | [#3282](https://nanocoai/nanoclaw PR #3282) | 待合并 |
| 低 | Agent 作用域 `ncl tasks` 对 2.1.54 之前的遗留会话不可见 | [#3281](https://nanocoai/nanoclaw PR #3281) | 待合并 |
| 低 | `ncl groups config update` 无法将可空标量置为 NULL | [#3280](https://nanocoai/nanoclaw PR #3280) | 待合并 |
| 低 | Discord 入站附件（文本/图片）以裸 `[file: ...]` 形式到达 Agent，无字节无路径 | [#2752](https://nanocoai/nanoclaw PR #2752) | 待合并（已悬置 2 个月） |

## 6. 功能请求与路线图信号

| 信号 | 来源 | 说明 |
|------|------|------|
| 跨会话上下文回显 | PR [#3257](https://nanocoai/nanoclaw PR #3257)（待合并） | 多会话 Agent 组：消息 fan-out 到兄弟会话作为 trigger=0 上下文行、DM 回填、回声修剪、新增 `ncl sessions history` 命令。说明 Agent 组场景的上下文一致性与可追溯性是当前迭代重点 |
| 会话分离标记 | PR [#3256](https://nanocoai/nanoclaw PR #3256)（待合并） | `messaging_groups.detached_at` 字段（migration 022）+ 访问器，bot 被移除出平台会话后拒绝投递。为「bot 被踢出会话」场景提供安全语义 |
| 双阶段入站批选 | PR [#3254](https://nanocoai/nanoclaw PR #3254)（待合并） | 先取所有到期任务行，再补充上下文行填充批容量——任务行永不被上下文挤掉 |
| 文档记忆能力 | PR [#3278](https://nanocoai/nanoclaw PR #3278)（已合并） | Story 1.1 落地（save_document MCP 工具），说明文档记忆 + 填表编辑史诗正在推进，后续 Story 值得关注 |
| 外部贡献信号 | [#1251](https://nanocoai/nanoclaw PR #1251)（已关闭合并） | OpenMail 邮件通道技能（`/add-openmail`）——社区扩展频道生态的需求持续存在 |

## 7. 用户反馈摘要

今日无 Issue 评论或用户讨论可供提炼。唯一的 Issue 更新（#3271）为误报至错误仓库，已由作者自行关闭，无需关注。

## 8. 待处理积压

| 项目 | 链接 | 悬置时长 | 说明 |
|------|------|---------|------|
| PR #2752：Discord 入站附件不可读 | [PR #2752](https://nanocoai/nanoclaw PR #2752) | 自 2026-06-12 起，已 2 个月+ | Discord 附件（粘贴文本转为 message.txt、图片）从未以可读形式到达 Agent——仅显示 `[file: message.txt]` 占位符。这是 Discord 频道场景的明显功能缺陷，建议维护者优先安排 review |
| PR #1251：OpenMail 邮件通道技能 | [PR #1251](https://nanocoai/nanoclaw PR #1251) | 自 2026-03-18 起，已 5 个月 | 状态显示为 CLOSED（已合并），但历时 5 个月才完成合并，期间如有 review 延误值得复盘 |

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-17

## 今日速览

IronClaw 项目过去 24 小时活跃度中等偏上：新增 1 个 Slack 用户体验相关 enhancement Issue（#7681），并立即催生了对应的修复 PR（#7682），社区响应迅速。PR 方面共 9 条动态，其中 7 条待合并、2 条已合并/关闭，均为依赖升级或内部清理事项，无功能性代码合并。今日无新版本发布，整体项目处于"依赖维护 + 单一功能开发"的平稳节奏。

## 版本发布

今日无新版本发布。

---

## 项目进展

今日合并/关闭的 2 个 PR 均为内部维护事项：

- **[#7683]** `[CLOSED]` chore: remove retired IronLoop network settings（contributor: core）
  移除 IronLoop 仓库配置中已废弃的 `network_access` 字段，保留现有 Implement/Tester/自动 Review/自动 Resolve 行为。属于配置清理，无功能变更。
  🔗 https://github.com/nearai/ironclaw/pull/7683

- **[#7632]** `[CLOSED]` chore(deps): bump the everything-else group across 1 directory with 4 updates（dependabot[bot]）
  批量升级 base64、toml、rstest、jsonschema 四个 Rust 依赖，风险等级 low，属于常规依赖维护。
  🔗 https://github.com/nearai/ironclaw/pull/7632

整体来看，今日合并内容均为零风险的维护工作，无功能性代码合入主干。另有 #7680（CI 自动刷新 codebase knowledge graph）为机器人生成的例行 PR，审核后即可合并。

---

## 社区热点

今日讨论最集中的是 Slack 未链接用户连接体验问题：

- **[#7681]** `[OPEN]` [enhancement, scope: channel, UX/Onboarding] Slack: unlinked-user connect message is public and requires a manual round trip（作者: sergeiest）
  这是今日唯一新增 Issue，指出两个关键痛点：(1) 共享频道中，未链接 IronClaw 账号的 Slack 用户 @-mention 或 DM bot 时，回复的引导消息是公开的，频道内所有成员可见；(2) 该引导消息让用户去 web app 手动完成连接，但后续回来后再发消息又需要重新解释上下文，形成来回低效的手动流程。
  🔗 https://github.com/nearai/ironclaw/issues/7681

- **[#7682]** `[OPEN]` fix(slack): deliver the unlinked-user connect nudge privately, with a one-click connect link (#7681)（作者: sergeiest）
  同一作者在当天就提交了修复 PR：将未链接用户的连接引导消息改为私有发送，并提供一键连接链接，避免上下文在步骤间丢失。该 PR size 标记为 L，risks low。这体现了项目对用户反馈的高响应速度（Issue → 修复 PR 当天闭环）。
  🔗 https://github.com/nearai/ironclaw/pull/7682

---

## Bug 与稳定性

今日无新增 Bug、崩溃或回归报告。唯一与本类相关的条目是 #7681 中描述的 Slack 集成体验问题——属于功能缺陷（消息可见性 + 流程中断），但已有对应修复 PR（#7682）在途，严重程度判断为中等（不涉及数据/安全，但影响用户体验与隐私）。

---

## 功能请求与路线图信号

今日仅有 1 个新功能请求，即 #7681（Slack 未链接用户的私密一键连接引导）。鉴于以下三点，该功能极可能被纳入下一版本：

1. 该 Issue 被标记为 `epic`，表明产品层面已有规划；
2. 对应的 PR #7682 当天即已提交，标注 size: L 但 risk: low；
3. 修复方案（私有消息 + 一键连接链接）改动集中在 Slack 通道层（scope: channel），风险可控。

---

## 用户反馈摘要

今日 Issue 中体现的真实用户痛点：

- **隐私问题**：在共享 Slack 频道中，未链接用户收到的引导消息对全频道可见，可能暴露私人使用意图或造成噪音干扰。
- **流程断裂**：用户被引导去 web app 连接后返回 Slack，需要重新发起对话且 bot 不了解前文，需要重复解释自己的需求——缺乏上下文延续的一键式连接体验。

整体用户反馈指向同一个诉求：**打通 Slack ↔ IronClaw 账号绑定链路，要求私密、快捷、无缝衔接。**

---

## 待处理积压

值得维护者关注的长期未合并 PR（均为 dependabot 批量升级，等待审核）：

| PR | 内容 | 创建日期 | 等待时长 | 风险 |
| --- | --- | --- | --- | --- |
| #7020 | tokio-tungstenite 0.29.0 → 0.30.0 | 2026-08-02 | 15 天 | low |
| #7262 | wasm 组（wit-component / wit-parser） | 2026-08-05 | 12 天 | low |
| #7406 | GitHub Actions 组 4 项更新（含 claude-code-action、setup-node 等） | 2026-08-09 | 8 天 | medium |
| #7684 | everything-else 组 5 项更新（base64 0.22.1→0.23.1 等） | 2026-08-16 | 1 天 | low |

其中 **#7406** 已滞留 8 天且风险标记为 medium（涉及 CI 关键 action 的升级），建议优先安排审核；#7020 与 #7262 已等待超过一周，依赖版本落后可能积累兼容性隐患。当前共 7 条待合并 PR，全部为依赖/CI 维护事项，建议集中清理。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-08-17

---

## 1. 今日速览

项目过去 24 小时整体活跃度中等偏低。没有新版本发布；Issue 侧 10 条更新全部为历史遗留项（最早创建于 4 月中旬）被 stale bot 标记或关闭，无新 Bug 上报；PR 侧 17 条更新中 9 条已合并/关闭、8 条仍待合并，其中 6 条为 4 月遗留的待处理 PR。值得关注的是安全修复类 PR（#1831–#1833，涉及敏感日志脱敏、IPC 越权、URL scheme 白名单）与代理链路修复 PR（#2452、#1715）已全部合入，项目在安全加固和稳定性方向有明显推进，但社区活跃度呈回落趋势。

---

## 2. 版本发布

过去 24 小时无新版本发布。多个已合入 PR 的改动（安全修复、代理链路修复、Agent 头像图片支持等）预计会随下一版本发布，建议关注 Release 页。

---

## 3. 项目进展

### 已合入/关闭的 PR（按主题归纳）

**安全加固（重大进展）**

| PR | 标题 | 说明 |
|---|---|---|
| [#1831](https://github.com/netease-youdao/LobsterAI/pull/1831) | fix(security): 脱敏主进程与 IM 模块的敏感日志 | 修复 `api:fetch` IPC 将完整 URL/headers/body/Bearer token 写入 electron-log 的问题；同时移除 Auth profile 序列化、second-instance 命令行（含 authCode）等敏感日志泄露路径 |
| [#1832](https://github.com/netease-youdao/LobsterAI/pull/1832) | fix(security): 限制 store:* IPC 越权访问 + 收窄通用 ipcRenderer 桥 | 修复 `store:get/set/remove` 无 key 级访问控制的问题——此前任何被 XSS/模型输出污染的渲染端代码均可读取甚至覆盖 `auth_tokens`、`github_copilot_github_token` 等敏感 key |
| [#1833](https://github.com/netease-youdao/LobsterAI/pull/1833) | fix(security): shell.openExternal 增加 scheme 白名单 | 拒绝 `file:`/`javascript:`/`data:` 等 scheme，阻止模型输出的恶意 markdown 引导打开本地文件或触发 OS 级操作 |

**功能完善**

| PR | 标题 | 说明 |
|---|---|---|
| [#1715](https://github.com/netease-youdao/LobsterAI/pull/1715) | fix(cowork): 修复 OpenClaw 服务端代理请求缺失 session_id | 修复多 cowork session 并发时，代理转发请求缺少顶层 `session_id` 导致服务端无法识别会话来源的问题 |
| [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) | feat(agent): support image avatars alongside emoji avatars | Agent 头像从仅支持 Emoji 升级为同时支持图片上传，提升多 Agent 场景下的辨识度 |
| [#1835](https://github.com/netease-youdao/LobsterAI/pull/1835) | fix(cowork): 去除 continueSession 失败时重复推送的系统错误消息 | 修复 continueSession 失败时连续 dispatch 两条系统错误消息的问题 |
| [#1690](https://github.com/netease-youdao/LobsterAI/pull/1690) | fix(settings): add confirmation modal before deleting IM instances | 钉钉/飞书/QQ 删除实例增加二次确认弹窗，防止误删 |
| [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691) | feat(agent): add agent template import/export | 支持 Agent 配置 JSON 序列化/反序列化、文件/URL 导入导出 |
| [#1693](https://github.com/netease-youdao/LobsterAI/pull/1693) | feat(cowork): improve model setup entry and preserve draft input | 无模型时 ModelSelector 一键跳转设置页；修复发送时输入内容丢失 bug |

**整体评估**：安全加固方面合入了 3 个关键 PR，补上了日志泄露、IPC 越权、URL scheme 三个高风险漏洞；功能侧合入了 Agent 模板导入导出、图片头像、IM 删除确认等多项体验优化。项目安全基线明显提升，功能面持续扩展。

---

## 4. 社区热点

**讨论最活跃的 Issue**：[#1813](https://github.com/netease-youdao/LobsterAI/issues/1813)（DeepSeek V4 无法使用，报 "provider rejected the request schema or tool payload"）— 8 条评论，已于今日关闭（stale）。该问题反映了**模型 API schema 变更导致兼容性断裂**的典型场景，用户对主流新模型的适配时效有较高期待。

**其他讨论较活跃的 Issue**：
- [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698)（与智企帝王蟹并存时 gateway 端口冲突，必现，3 条评论）— 同类型应用间**端口/进程资源竞争**问题，Tahoe 26.4 环境必现。
- [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744)（Bug report，3 条评论）— 附件上传失败，无法查看具体内容。

**值得关注**：今日评论最集中的 3 个 Issue 均已打上 `[stale]` 标签，说明这些用户反馈在 4 个月左右时间内未获得明确解决或回复，活跃用户的持续关注与低响应形成了反差。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 高 | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 与智企帝王蟹并存时 **gateway 端口冲突、进程竞争**，帝王蟹必现"gateway 鉴权失败"无响应；关闭龙虾后重装才恢复 | OPEN（4 个月未解决，已 stale） |
| 高 | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | **DeepSeek V4 完全不可用**，报 provider rejected schema/tool payload | CLOSED（stale 关闭，未见修复方案） |
| 中 | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) | **Write/Edit 工具执行持续失败**，更新应用后仍复现 | CLOSED（stale 关闭，未见修复方案） |
| 中 | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | **更新后 diff 显示异常**，用户定位到 `extractDiffFromToolInput` 函数 bug（edit 分支只从 toolInput 顶层查找 oldText/newText） | OPEN（已 stale，用户提供了详细根因分析） |
| 中 | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 安装过程中图标显示为白色且无效，大概率复现 | OPEN（已 stale，无跟进） |
| 低 | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | 定时任务通知文案不正确 | OPEN（已 stale） |

**关注点**：今日无新增 Bug 报告，但上述遗留问题大部分已进入 stale 状态且无 PR 关联。其中 diff 异常问题用户已给出详细的根因分析（`extractDiffFromToolInput` 前端的 `edit` 分支缺陷），维护者可参考定位修复。

---

## 6. 功能请求与路线图信号

| Issue/PR | 请求 | 状态评估 |
|---|---|---|
| [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) | **批量删除对话**功能，保证上下文有效性（👍 1） | 已 CLOSED（stale）。用户基础需求，实现成本低，建议纳入后续迭代 |
| [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | **Outlook 邮箱支持 OAuth2/新式身份验证**，现状无法登录 | OPEN（stale）。企业用户刚需场景，涉及 IM 模块较大改动 |
| [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | 支持**对话中动态调整 temperature 参数** | OPEN（stale）。偏高级用户/开发者诉求，可考虑作为设置项提供 |
| [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) | **AI 回复朗读功能**（Web Speech API，零依赖） | 待合并（4 个月未合）。功能已完成且轻量，建议合入 |
| [#1691](https://github.com/netease-youdao/LobsterAI/pull/1691) | Agent 模板导入/导出 | 已合并 ✅ |
| [#1760](https://github.com/netease-youdao/LobsterAI/pull/1760) | Agent 图片头像 | 已合并 ✅ |

**信号**：功能请求整体较少，集中在对话管理和邮箱认证两个方向。已合入的 PR 表明项目在 Agent 自定义与配置共享方面持续发力。朗读功能 PR（#1682）已就绪 4 个月未合入，建议维护者评估——若资源允许，此功能可以为 AI 助手增加语音交互入口，提升产品完整性。

---

## 7. 用户反馈摘要

- **多位用户处于"反馈长期无人跟进"状态**：10 条 Issue 更新中有 7 条为 OPEN 但均带 `[stale]` 标签，最早的 #1688 创建于 4 月 15 日，至今 4 个月无实质回复。这类沉默对用户信任的损耗值得关注。
- [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) 中用户**主动深入分析了 diff 失灵 bug 的根因**（指出 `extractDiffFromToolInput` 函数中 `edit` 分支的取值逻辑错误），展现了较高的技术投入和参与意愿。
- [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) 中用户反馈"更新应用后仍然同样的问题"（Write/Edit 工具持续失败），说明**该 Bug 曾在多个版本中反复出现**，可能造成一定程度的用户流失。
- [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) 用户表达了对微软新式身份验证的"不知道怎么办才好"的无助感，反映了**主流邮箱服务策略变更对 IM 功能用户的实际冲击**。
- [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) 用户反馈了与智企帝王蟹（另一款 AI 应用）的资源竞争问题，暗示**同类 AI 工具并存场景下系统资源隔离需求正在提升**。

---

## 8. 待处理积压

### 长期未响应的高优先级 Issue

| Issue | 关键性 | 搁置时长 | 建议 |
|---|---|---|---|
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698)（gateway 端口冲突，必现） | 高 — 影响多应用并存生态 | 4 个月 | 建议调查 gateway 端口是否为固定值，考虑动态端口分配或启动时端口检测 |
| [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796)（Write/Edit 工具持续失败） | 高 — 核心功能不可用 | 4 个月 | 已以 stale 关闭但**未见修复方案**，建议主动排查工具执行链路 |
| [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783)（diff 显示异常，附根因分析） | 中高 — 用户已定位 bug | 4 个月 | 用户已给出根因，建议直接指派相关前端维护者处理 |
| [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813)（DeepSeek V4 兼容性） | 中高 | 近 4 个月 | 已 stale 关闭，但模型兼容性是核心竞争力，建议持续跟踪 |

### 长期未合并的重要 PR

| PR | 说明 | 搁置时长 |
|---|---|---|
| [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682)（AI 回复朗读，功能完成） | 代码完整、零依赖，建议评估合并 | 4 个月 |
| [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707)（切换 Agent 时清空主页输入框） | 修复跨 Agent 输入内容串扰 bug，已有根因分析 | 4 个月 |
| [#1765](https://github.com/netease-youdao/LobsterAI/pull/1765)（dependabot 依赖升级 @headlessui/react 1.x→2.x） | 主版本跨级升级，需评估破坏性变更 | 4 个月 |
| [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769)、[#1770](https://github.com/netease-youdao/LobsterAI/pull/1770)（UI 加载骨架屏/空状态优化） | UI 体验改进，低风险 | 4 个月 |

**整体提示**：项目目前存在一批 4 月份遗留的 PR/Issue 积压，建议维护者定期清理——要么合入、要么明确关闭并告知理由，避免 stale bot 自动关闭造成用户感知的"无声处理"。

---

*日报生成时间：2026-08-17 | 数据来源：LobsterAI GitHub 仓库（netease-youdao/LobsterAI）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-08-17

## 1. 今日速览

过去 24 小时内，Moltis 项目保持较高的开发活跃度：共更新 3 条 Issues（2 条新开、1 条关闭）和 6 条 PR（5 条已合并/关闭、1 条待合并），无新版本发布。最值得关注的是 `main` 分支存在编译失败的阻塞问题（PR #1201 已修复），以及 CI 格式检查因文件超行数限制而变红（Issue #1202），这两项均已获得社区快速响应。核心贡献者 Lstarsky0 今日提交了 3 个 PR，密集修复了 gateway 编译和 flaky 测试问题，项目整体处于"问题高发但修复迅速"的健康状态。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

今日共有 5 个 PR 被合并/关闭，核心进展如下：

- **[PR #1201] fix(gateway): thread start_background_tasks into the memory runtime builder**（已合并）— 修复了 `main` 分支无法编译的阻塞性问题（`E0425: cannot find value start_background_tasks`）。该问题由 #1158 重构引入，将运行时设置提取到 `build_memory_runtime_from_store` 时遗漏了 headless runtime 的适配。这是项目当前最重要的修复，直接恢复了 `main` 分支的可构建性。
- **[PR #1203] test(gateway): run the push fanout test on a paused clock**（已关闭）— 针对 flaky 测试 Issue #1193 的修复。通过暂停时钟消除超时断言中的竞态条件，提升全量测试套件的稳定性。该 PR 基于 #1201 堆叠，待 #1201 合并后落地。
- **[PR #1147] fix(caldav): honor list_events time ranges**（已合并）— CalDAV 功能的重要修复。改用 RFC 4791 `calendar-query` REPORT 代替全量拉取，并将 ISO 8601 时间边界规范化为 UTC，确保重复性事件落入请求范围——大幅提升了 `list_events` 的查询精度与性能。
- **[PR #1093] Add channel activity log visibility settings**（已关闭）— 新增频道活动日志可见性设置（`all` / `errors_only` / `off`），支持按账户、按频道、按用户三级配置，用户级覆盖优先。该功能从 6 月 3 日提出到合并经历约两个半月，属于周期较长的功能开发。
- **[PR #1186] fix(vault): normalize recovery phrase before hashing**（已合并）— 修复 vault 恢复短语哈希不一致的问题：`derive_recovery_kek` 已支持规范化短语（去连字符、转大写），但存储哈希仍基于原始短语计算，导致新存储的哈希与 KEK 派生不一致。现已统一采用规范化后再哈希的逻辑。

整体来看，今日项目修复了 1 个编译阻塞问题、1 个 flaky 测试、1 个 vault 哈希一致性 bug，并完成了 CalDAV 和活动日志两项功能的收尾，推进节奏紧凑。

## 4. 社区热点

今日活跃讨论较少，3 条 Issues 均无评论，6 条 PR 中仅关闭的 PR 有少量交互。最值得关注的是以下两个话题：

- **[Issue #1202] Format CI gate is red on main: two files over the 1500-line limit**（[链接](https://github.com/moltis-org/moltis/issues/1202)）— 该问题直接影响 `main` 分支的 CI 健康度。两个文件超过 1500 行限制（`store.rs` 1799 行、`admin.rs` 1531 行），均由提交 9b47001a 引入。这反映了项目对代码行数有明确的治理规范，而近期提交对大文件的拆分不够及时。
- **[Issue #1193] Flaky test: push fanout timeout assertion races under full-suite load**（[链接](https://github.com/moltis-org/moltis/issues/1193)）— 虽然 Issue 本身在今日被关闭，但该 flaky 测试在 10 核 Mac 上全量运行时 3 次中有 2 次失败，属于高频复现的问题。社区通过 PR #1203 快速响应，体现了对测试稳定性的重视。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| 🔴 严重 | [Issue #1205](https://github.com/moltis-org/moltis/issues/1205) | Heartbeat 忽略已配置的活跃时间段，持续运行 | 新开，无 fix PR |
| 🟠 高 | [PR #1201](https://github.com/moltis-org/moltis/pull/1201) | `main` 分支编译失败（`start_background_tasks` 未定义），阻塞所有后续开发 | ✅ 已修复 |
| 🟡 中 | [Issue #1202](https://github.com/moltis-org/moltis/issues/1202) | CI Format 检查变红：两个文件超过 1500 行限制 | 新开，无 fix PR |
| 🟢 低 | [Issue #1193](https://github.com/moltis-org/moltis/issues/1193) | flaky 测试：push fanout 超时断言在全量套件下竞态 | ✅ 已关闭（PR #1203 修复） |
| 🟢 低 | [PR #1186](https://github.com/moltis-org/moltis/pull/1186) | vault 恢复短语哈希与 KEK 派生不一致，可能导致解锁问题 | ✅ 已修复 |

Heartbeat 问题（Issue #1205）目前尚无对应的修复 PR，值得关注。

## 6. 功能请求与路线图信号

- **[PR #1204] feat: add MiniMax Code ACP agent**（[链接](https://github.com/moltis-org/moltis/pull/1204)，待合并）— 新增 `acp-minimax-code` 外部代理类型，由 `mcode acp` 驱动。同时将 MiniMax Code 纳入 Moltis 的默认可执行文件检测与代理注册表，并补充了自动发现与手动 TOML 配置的文档。这是当前唯一待合并的新功能 PR，方向明确——扩展 AI 代理生态，引入更多外部代码模型。若合并顺利，很可能进入下一版本。
- 此外，CalDAV 时间范围支持（PR #1147）和活动日志可见性（PR #1093）今日正式合并/关闭，可视为上一阶段功能开发的收尾，预计已纳入或即将纳入最近的发布。

## 7. 用户反馈摘要

由于今日所有 Issues 和 PR 均无评论，缺乏直接的社区讨论内容可提炼。从提交本身可间接观察到的信号：

- **测试稳定性是社区的隐性痛点**：Issue #1193 明确描述"仅在完整工作区套件运行时间歇性失败"，这类问题对贡献者的本地开发体验影响较大——贡献者无法确认失败是由自己的改动引起还是环境偶发。
- **编译阻塞对开发效率影响直接**：PR #1201 指出 `main` 分支无法编译，这会导致所有基于 `main` 的后续开发与 PR 无法构建验证（#1203 也因此被迫堆叠在 #1201 之上），间接减缓了测试修复的进度。
- **代码治理规范正在被严格执行**：Issue #1202 表明 CI 有明确的文件行数上限（1500 行）且强制执行（Format 任务变红），说明项目对代码可维护性有较高要求，但近期大文件提交未被及时拆分，存在治理缺口。

## 8. 待处理积压

- **[Issue #1205] Heartbeat ignores configured active hours and runs continuously**（[链接](https://github.com/moltis-org/moltis/issues/1205)，创建于 2026-08-16）— 今日新开的核心缺陷：Heartbeat 未遵循配置的活跃时间段，持续运行。该问题可能涉及资源消耗与用户隐私（非活跃时段不应发送心跳），建议维护者尽快安排排查并分配 fix PR。
- **[Issue #1202] Format CI gate is red on main**（[链接](https://github.com/moltis-org/moltis/issues/1202)，创建于 2026-08-16）— `main` 分支 CI 处于红色状态。虽然不阻塞编译，但会影响所有后续 PR 的 CI 检查基准。需将 `store.rs`（1799 行）和 `admin.rs`（1531 行）拆分到 1500 行以内，或将行数上限调整但需评估是否降低治理标准。
- **[PR #1204] feat: add MiniMax Code ACP agent**（[链接](https://github.com/moltis-org/moltis/pull/1204)，创建于 2026-08-16）— 当前唯一待合并的功能 PR。建议维护者尽快 review，避免长时间驻留积压，影响后续版本规划。

---

*本日报基于 Moltis 仓库 2026-08-17 的 GitHub 公开数据生成，所有链接均指向原始 Issue/PR 页面。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期**: 2026-08-17

---

## 1. 今日速览

CoPaw 项目今日维持较高活跃度，过去 24 小时内有 12 条 Issue 更新（8 条新开/活跃，4 条已关闭）和 11 条 PR 更新（9 条待合并，2 条已关闭）。核心维护者与社区贡献者（尤其以 suantea 为代表的 first-time contributors）围绕 CLI 定时任务、视频工具缺陷、会话恢复等问题提交了多组修复 PR，代码评审与合并节奏稳定。但需注意两点：一是新版本 Release 仍为 0，多项已合入的修复尚未随正式版本发布；二是 `v2.1.0` 上连续出现工具调用崩溃（#7063）和正常运行崩溃需刷新（#7074）的报告，稳定性质疑值得关注。整体评估：**项目健康，社区贡献活跃，但版本发布节奏偏慢**。

---

## 2. 版本发布

**今日无新版本发布。**

⚠️ 注意：v2.1.0（此前版本）存在多项已知缺陷（如 #7063 工具调用崩溃、#7076 模型配置 404），相关修复 PR 多数已提交或合入，但尚未随新版本发布，用户升级前建议关注。

---

## 3. 项目进展

今日两个 PR 已合并/关闭，均有实质性推进：

- **[PR #7064] fix(cli): sync top-level text on cron update --text for agent jobs**（已关闭，作者 suantea）— 修复 `qwenpaw cron update <id> --text` 在 agent 类型任务上"假成功"的问题（即 #7048）。此前仅更新 `request.input[0].content[0].text` 而顶层 `text` 字段未同步，导致 `cron list/get` 显示旧提示词。
- **[PR #7055] fix(cli): sync top-level text on agent cron --text update (#7048)**（已关闭，作者 lcq225）— 与 #7064 修复同一问题（#7048）的竞品 PR，同样定位了"返回成功但 prompt 实际未更新"的根因。

两条 PR 均指向 #7048 同一 bug，表明该问题在社区中已有多个独立修复尝试。值得关注的是两个 PR 均被关闭，需确认维护者选择了哪个方案合入，或是否有后续统一处理。

此外，以下高价值 PR 仍待合并：

- **[PR #6302] feat: unify provider discovery, model metadata, routing, and agent controls**（打开，作者 wangfei010313）— 大规模架构改进，引入目录驱动的模型系统、运行时模型发现、能力感知路由与模型选择体验重构，已持续近一个月仍未合入，建议维护者重点关注。
- **[PR #6940] feat(pawapp): add native DataPaw app runtime and durable analysis workspace**（打开，作者 cyruszhang）— 新增原生 DataPaw 运行时与持久化分析工作区，尚处于 ready-for-human-review 阶段。
- **[PR #6975] fix(console): update context-usage ring after compact**（打开，作者 yuanxs21）— 修复 Console 在 `/compact` 后上下文使用率环形图不刷新的问题。

---

## 4. 社区热点

今日热度最高的议题集中于 **工程稳定性与产品体验**：

1. **[Issue #7063] Agent 执行工具调用时必现崩溃**（已关闭，3 条评论）— 明确指出 `agentscope` 在 `_execute_tool_call` 中错误使用 `async for` 遍历 `self._acting(tool_call)` 返回的 coroutine，导致 `TypeError`。这是 v2.1.0 上最严重的**必现崩溃**，社区讨论热度最高。虽然已关闭，但关闭状态需确认是修复合入还是标记为无效。
2. **[Issue #7074] 正常运行崩溃，需要刷新页面才能重启，频次高发**（打开，1 条评论）— 用户报告 Console 前端高频崩溃，需手动刷新恢复，附有详细日志（`session.py:454` 读取 session state dict），指向会话持久化环节。
3. **[Issue #7076] qwenpaw-creator: LLM 模型配置报错 404**（打开，1 条评论）— 用户在 v2.1.0 上新装即遇 404，属于**新用户入口级问题**，可能影响新用户转化。
4. **[Issue #7048] cron update 返回成功但 prompt 未更新**（已关闭，2 条评论）— 引发了**两个竞品 PR（#7055、#7064）**，虽然已关闭，但社区对 CLI 一致性的诉求明确。

**热点背后的诉求**：用户在 v2.1.0 上集中遭遇稳定性与一致性痛点（崩溃、假成功操作、404），说明该版本的 QA 覆盖存在缺口，建议维护者在下一次发布前系统性地回归上述场景。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 描述 | 修复 PR 状态 |
|--------|-----------|------|-------------|
| 🔴 严重（必现崩溃） | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Agent 执行工具调用时必现 `TypeError: 'async for' requires an object with __aiter__ method` — `_acting` 返回 coroutine 却按 async generator 遍历 | 已关闭，修复方案待确认 |
| 🟠 高（高频崩溃） | [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | Console 正常运行崩溃，需刷新页面恢复，频次高发，日志指向 session 状态读取（`session.py:454`） | 无对应 PR |
| 🟠 高（新用户入口） | [#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076) | qwenpaw-creator LLM 模型配置报 404，v2.1.0 新装后立现 | 无对应 PR |
| 🟡 中（功能假成功） | [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) | `cron update --text` 返回成功但 prompt 未更新（agent 类型任务） | PR #7055 / #7064 均已关闭，需确认合入方案 |
| 🟡 中（数据丢失） | [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065) | 多轮讨论后（约 7 轮）历史消息仅显示最近 3-4 条，滚动也无法查看更早内容 | 无对应 PR |
| 🟡 中（定时任务不触发） | [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | APScheduler AsyncIOScheduler 在事件循环长时间空闲后 misfire，Cron 任务不触发（v2.0.1） | 已关闭，修复方案待确认 |
| 🟢 低（视频工具链） | [#7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) / [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) 对应 PR 见右 | OpenAI Responses API 路径下 `view_video` 静默失败；`view_video` 硬编码 2MB 内联上限静默替换为"video omitted" | PR #7070（修复静默失败）/ PR #7071（内联上限可配置），均待合并 |
| 🟢 低（会话恢复） | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | 历史消息中 data-URL 图片在会话重开后显示为破图/空白缩略图 | PR #7069 待合并 |
| 🟢 低（OAuth 续期） | [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | OAuth2 授权码模式下 refresh_token 轮换后未持久化，过期后无法续期（如 XMind） | PR #7066 待合并 |

**今日无新增回归类 issue 的明确标注，但 suantea 的多条修复 PR（#7066、#7069、#7070、#7071）集中于驱动层与会话层，说明这些区域存在可见缺陷集群。**

---

## 6. 功能请求与路线图信号

今日提交的功能请求中，以下几项具备纳入下一版本的高潜力：

| Issue | 请求内容 | 对应 PR / 状态 |
|-------|---------|---------------|
| [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056)（背景） | 后台任务状态列表 API — 多 agent 协调场景下需批量查询任务状态 | PR #7072 已实现最小化 list API，待合并 |
| [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | `reasoning_effort`（思考强度）按 agent 级/会话级配置，而非仅 provider/model 级 | 无对应 PR，但 [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 的模型控制重构或可涵盖此需求 |
| [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | 插件 API 增加 system_prompt 权限（企业场景下需隐藏内部提示词，不暴露给最终用户） | 无对应 PR |
| [#7068](https://github.com/agentscope-ai/QwenPaw/issues/7068) | 文件/脚本查看器支持更多语言（C# 与 shader 语言，游戏开发工作流） | 无对应 PR |
| [#7075](https://github.com/agentscope-ai/QwenPaw/issues/7075) | 定时任务运行细节展示：开始时间、运行时长、结束时间、运行结果等 | 无对应 PR |
| [#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073) | skill 名称去重，避免 workspace 自定义 skill 与内置 skill 同名冲突重复加载 | 无对应 PR，但已有完整问题分析（`builder.py` 仅做路径去重） |

**路线图信号**：`reasoning_effort` 按 agent/会话级别配置（#7062）与 PR #6302 的模型控制重构方向高度契合，若 #6302 合入，该功能可低成本落地。后台任务列表 API（#7056→#7072）已在路上，说明多 agent 编排是官方认可的方向。

---

## 7. 用户反馈摘要

从今日 Issues 与评论中提炼的真实用户声音：

- **"返回成功但实际未生效"是让用户最困惑的一类问题**（#7048）：CLI 返回 rc=0 + 任务 JSON 看起来完全正常，但后续 `cron list` 显示提示词并未变化。这种**假成功**比报错更伤害信任感。两个独立 PR（#7055、#7064）同时修复该问题，侧面说明用户受此困扰的普遍度。
- **企业用户对提示词安全有明确诉求**（#7052）：插件互动界面场景下，公司希望注入自己的 system prompt 但不希望终端用户在会话界面看到。这类企业级 permission 控制需求，是 CoPaw 向 B 端扩展的关键信号。
- **消息历史不可回溯是直接影响日常使用的痛点**（#7065）：用户反映多轮对话后（约 7 轮）只能看到最近 3-4 条，滚动到顶也无法恢复更早内容。对以研究/分析为典型场景的 agent 工作流而言，历史可回溯性是基本能力需求，建议提升优先级。
- **定时任务的可观测性不足**（#7075）：用户反馈长任务（5-10 分钟）运行期间无法判断是否准时触发、是否仍在运行。"只有在失败时才会给信息" — 这种设计对运维场景不友好。
- **高频崩溃需要刷新页面恢复**（#7074）：有用户上传了详细日志（`session.py:454`），说明问题可定位，期望维护者优先处理。
- **开箱即用体验受阻**（#7076）：新用户在配置阶段即遇 404 报错，对 v2.1.0 的第一印象是"装不上"，此类新用户入口问题对社区增长影响较大。
- **短视频附件用户体验细节**（#7060 / #7059）：小于 50MB 的视频被硬编码 2MB 上限静默替换为"video omitted"占位符；在 OpenAI Responses API 路径下 `view_video` 直接静默失败（模型从未收到视频帧）。用户等待数分钟后得到"Video loaded"的假象，实际并未生效 — 又是"假成功"模式的体现。

**核心模式**：用户对"假成功"（表面成功、实际无效）的容忍度极低，对可观测性（任务状态、历史记录、视频处理结果）有系统性的改进诉求。

---

## 8. 待处理积压

以下重要事项长期未获响应或合入，建议维护者优先关注：

| 事项 | 类型 | 等待时长 | 备注 |
|------|------|---------|------|
| **[PR #6302] feat: unify provider discovery, model metadata, routing, and agent controls** | 大型功能 PR | 已打开 27 天（7/21 创建） | 涉及模型发现、路由、控制的一体化重构，是当前最大的路线图信号，长期未评审/合入 |
| **[PR #6940] feat(pawapp): add native DataPaw app runtime and durable analysis workspace** | 新应用运行时 | 已打开 5 天（8/12 创建） | 引入 DataPaw 桌面运行时，处于 ready-for-human-review，属高影响新功能，建议尽早评审 |
| **[Issue #6471] Cron 任务在事件循环长时间空闲后 misfire** | 严重 Bug | 已打开 22 天（7/26 创建） | 虽已关闭，但涉及调度可靠性，建议维护者确认修复方案并在发布说明中明确 |
| **[Issue #7062] 支持 per-agent / per-session reasoning_effort 覆盖** | 功能请求 | 1 天 | 与 #6302 直接相关，建议在评审 #6302 时一并考虑 |
| **[Issue #7052] 插件 API 增加 system_prompt 权限** | 功能请求 | 2 天 | 企业级安全需求，如纳入路线图建议早期规划 |

**特别提醒**：suantea 今日贡献的 5 个 first-time-contributor PR（#7066、#7069、#7070、#7071、#7072）覆盖了驱动、会话、视频工具、后台任务四个方面的缺陷修复，质量较高但均待合并。若这些 PR 长期得不到合并确认，可能会削弱社区贡献者的持续投入意愿，建议维护者及时回应。

---

*报告基于 agentscope-ai/CoPaw 仓库 2026-08-16 至 2026-08-17 的 GitHub 活动数据生成。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-17

## 1. 今日速览

ZeroClaw 在过去 24 小时保持高活跃度：共产生 48 条 Issue 更新（其中 46 条为活跃讨论，2 条关闭）和 50 条 PR 更新（46 条待合并，4 条合并/关闭），无新版本发布。项目当前处于 **0.8.4 版本演进期**，大量 RFC（Request for Comments）在密集评审中，社区围绕架构治理（#6808）、Chat Completions 兼容层（#8603）、统一附件架构（#9488）等核心问题的讨论热度极高。值得关注的是，安全相关的 PR（SSRF 防护 #8713、插件 egress 策略 #9582/#9584、HTTP egress 加固 #9580）占据大量待合并队列，且多个 P1 级测试不稳定问题（#9965、#10006、#10013）正在影响 CI 稳定性——总体判断：项目处于**密集设计评审 + 安全加固双轨并进**的阶段，社区参与度高，但合并吞吐有待提升。

[🔝 返回目录](#zeroclaw-项目动态日报--2026-08-17)

## 2. 版本发布

**无新版本发布。** 项目当前处于 0.8.4 至 0.8.0-beta-1 的演进窗口（启动自 #6808 RFC），此前已有多个大小为 XL 的 PR 处于待合并状态，建议维护者关注积压合并节奏。

[🔝 返回目录](#zeroclaw-项目动态日报--2026-08-17)

## 3. 项目进展

今日合并/关闭的 PR 共 4 条，其中最值得关注的是：

### 合并

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) | fix(security): harden built-in HTTP egress on the shared network guard | **CLOSED（merged）** | **重大安全里程碑**。加固内置 HTTP egress 边界，将网络分类原语提取到 `zeroclaw-infra::net_guard`，为后续插件 egress 工作（#9137、#9582）奠定共享基础。三个下游 PR（#9137、#9580、#10046）均依赖此 PR 的头提交 |

### 已关闭

| Issue | 标题 | 说明 |
|---|---|---|
| [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) | [Bug]: SOP step schema validation rejects a double-encoded output object instead of unwrapping it | P1 级 Bug 已关闭，SOP 步骤 schema 校验对双重编码 JSON 的拒绝行为已修复 |

**整体评估：** 项目今日向前推进的关键基础设施是 **HTTP egress 安全加固**（#9580 合并），这直接解除了 #9137、#9582、#9584 三个插件 egress 策略 PR 的阻塞依赖，有望在未来几天内带动插件安全策略（Stage 2/3）的整体落地。但 46 条待合并 PR 的积压意味着合并吞吐仍是当前的瓶颈。

[🔝 返回目录](#zeroclaw-项目动态日报--2026-08-17)

## 4. 社区热点

今日讨论最活跃的议题呈现清晰的**架构治理与协议兼容**主线：

### 🔥 热点 1：RFC: Work Lanes, Board Automation, and Label Cleanup（[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)）
- **评论 23 条，活跃跨度近 3 个月**，最新更新 2026-08-16
- 状态：Ratified / rollout in progress（Rev. 25）
- **诉求分析：** 这是项目治理层面的核心 RFC，主旨是让工作路由不依赖维护者手工维护系统。社区持续高强度参与修订，说明项目对**治理流程自动化和标签清理**有迫切需求，且该 RFC 已经被正式批准、正在滚动落地。

### 🔥 热点 2：RFC: ZeroClaw Chat Completions profile（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）
- **评论 22 条**，22 天内保持活跃
- **诉求分析：** 社区强烈渴望 ZeroClaw 暴露 OpenAI Chat Completions 兼容协议，从而接入 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等主流生态工具。这意味着 ZeroClaw 正在从"独立 agent 平台"走向"**生态兼容层**"，是扩大用户基础的关键信号。

### 🔥 热点 3：RFC: Unified attachment architecture for web chat and channels（[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)）
- **评论 17 条**（17 天内）
- **诉求分析：** 统一 web 聊天与各 channel 的附件处理架构，解决多端不一致问题。属于用户体验基础设施层面的设计提案，虽为 Proposed 状态但讨论热度高。

### 🔥 热点 4：RFC: Provenance, conversation binding, and reply contract（[#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)）
- **评论 14 条**，Rev. 2 已完成重写（2026-08-05），含四项边界澄清
- **诉求分析：** 内部启动的 agent 回合（cron、定时任务等）缺乏 provenance 追踪和回复契约，社区在推动定义更严格的身份稳定性和绑定并发语义。

[🔝 返回目录](#zeroclaw-项目动态日报--2026-08-17)

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

### 🔴 S1 — 工作流阻塞（P1）

| Issue | 标题 | 状态 | 备注 |
|---|---|---|---|
| [#10013](https://github.com/zeroclaw-labs/zeroclaw/issues/10013) | Edge TTS cancellation test can miss fake child startup under parallel load | OPEN，已接受 | CI 间歇性失败，影响 "Parallel Runtime Test" 门禁 |
| [#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006) | endpoint_lock_is_held_through_guard_cleanup flakes under Parallel Runtime Test gate on unrelated PRs | OPEN，进行中 | 已导致 PR #9137 的 CI 检查变红 |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | runtime-written executable test fixtures hit ETXTBSY under parallel gate | OPEN，已接受 | 测试夹具设计缺陷，已列为独立 Task 跟踪 |
| [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | /health reports a channel healthy that has never connected | OPEN，已接受 | Telegram 无效 token 时健康检查误报，存在运维误导风险 |

### 🟠 S2 — 行为降级（P1/P2）

| Issue | 标题 | 状态 | 备注 |
|---|---|---|---|
| [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) | approval cards carry no position → back-to-back cards indistinguishable | OPEN，已接受 | Telegram 多工具调用时审批卡片无法区分 |
| [#10020](https://github.com/zeroclaw-labs/zeroclaw/issues/10020) | Agentic independent delegates ignore the target thinking policy | OPEN，进行中 | agentic delegate 子模型 loop 未应用 profile 的 thinking 配置 |
| [#10037](https://github.com/zeroclaw-labs/zeroclaw/issues/10037) | POST /api/cron silently stores invalid session_target as isolated | OPEN，进行中 | `cron_add` 工具会拒绝非法值但 API 不会——存在不一致 |
| [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) | SOP step schema validation rejects double-encoded output object | **CLOSED（已修复）** | 今日关闭 |

### 🟡 已有关联修复 PR

- **#8713**（[PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)）：`file_download` SSRF 防护 —— `allowed_private_hosts` opt-in 机制，修复 `http://127.0.0.1`、`http://169.254.169.254` 等私网地址可被静默请求的漏洞。⚠️ 需求方注意，该 PR 处于 `needs-author-action` 状态。
- **#10046**（[PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10046)）：`image_gen` 工具固定到已验证主机并覆盖重定向边界，依赖 #9580。
- **#9002**（[PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)）：WebSocket viewer 断开后 agent turn 继续存活，修复导航/浏览器休眠导致任务意外取消的问题。

[🔝 返回目录](#zeroclaw-项目动态日报--2026-08-17)

## 6. 功能请求与路线图信号

### 新一代功能需求（新增）

| Issue | 标题 | 潜在归属版本 | 信号强度 |
|---|---|---|---|
| [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) | RFC: zeroclaw swarm — ephemeral agent swarms with a crush-style TUI | 尚未排期 | RFC 提出，讨论刚启动（1 评论），作者 IftekharUddin 为 Distinguished Contributor，项目历史上其 RFC 常被采纳 |
| [#10019](https://github.com/zeroclaw-labs/zeroclaw/issues/10019) | Docs: Align the prompt-injection deprecation deadline after Schema V4 | 随 Schema V4 落地 | 文档同步任务，已接受 |
| [#7887](https://github.com/zeroclaw-labs/zeroclaw/issues/7887) | [Feature]: Add date-range conditional schedules for cron jobs | 0.8.x 候选 | 已接受（P3），CRON 定时任务支持日期范围条件调度 |

### 已在 PR 推进中的功能（大概率进入下一版本）

| PR | 功能 | 状态 |
|---|---|---|
| [#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) | Telegram 群聊增加 `per_user_session` 开关（解决多人协作时的会话隔离问题） | OPEN，needs-maintainer-review，size:XL |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | 知识图谱加入 per-agent 归属和隔离（当前任意 agent 可读写其他 agent 的知识、客户端网络和交互日志） | OPEN，needs-author-action，size:XL |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | 原生 Hailo-Ollama 支持（`HailoOllamaModelProvider`，面向边缘 AI 推理硬件） | OPEN，needs-author-action，size:XL |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | 插件 egress 授予 ceremony（Stage 3，使 Stage 2 的 deny-by-default 可操作化） | OPEN，P1，需要与 #9582 一并合并 |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | WASM 插件 typed instance config 校验（要求 `config_read` 声明 Draft 2020-12 schema） | OPEN，needs-author-action，size:XL |

**路线图判断：** 插件 egress 策略（#9582 + #9584 + #9137 三段式）是当前最有可能整体落地的主线，但需要维护者优先评审。

[🔝 返回目录](#zeroclaw-项目动态日报--2026-08-17)

## 7. 用户反馈摘要

从今日活跃的 Issue 讨论中提炼的用户声音：

### 😤 痛点：配置与使用割裂

- **#10037**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10037)）：`POST /api/cron` 静默接受非法 `session_target` 值，而 `cron_add` 工具会正确拒绝。同一功能在不同入口行为不一致，用户调试成本显著。
- **#9655**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9655)）：同一消息触发多个工具调用时生成的多张审批卡片，因没有位置标识，用户在点击前无法区分。Telegram 场景下操作员面临真实的风险。

### 🔒 安全焦虑：私网访问与数据隔离

- **#8713**（[PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)）：用户配置 `file_download.url` 时，SSRF 防护缺失可导致请求被静默路由到 `127.0.0.1` 或云元数据服务（`169.254.169.254`），存在真实利用风险。
- **#9745**（[PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9745)）：知识图谱工具对**所有 agent 共享同一个 SQLite 图**，无归属维度——任何 agent 均可读取/修改其他 agent 捕获的知识、客户端网络和交互日志。在多租户或多用户生产环境中属于高危设计。

### 👍 肯定信号

- **#6808**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)）已 Ratified 且 roll-out 进行中，说明社区对项目治理 RFC 流程的执行力表示认可；该 RFC 已累计 25 版修订仍能保持高频更新。
- **#9965 / #10011**：用户主动报告并跟踪测试基础设施问题（ETXTBSY 等），且愿意以 Task 形式推动修复，反映出社区对测试可信度的高要求。

[🔝 返回目录](#zeroclaw-项目动态日报--2026-08-17)

## 8. 待处理积压

### ⚠️ 高优先级积压（超过 30 天未合并的重要 PR）

| PR | 标题 | 等待时长 | 状态 | 备注 |
|---|---|---|---|---|
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate | **44 天** (07-04 创建) | OPEN，needs-author-action，size:XL | SSRF 漏洞修复，存在安全风险敞口 |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | feat(plugins): validate typed instance config | 30 天 (07-18) | OPEN，needs-author-action，size:XL | WASM 插件配置校验，架构严谨性诉求 |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | fix(gateway): keep agent turns alive after viewer disconnect | 37 天 (07-11) | OPEN，needs-author-action，P1 | 工作流关键 UX 修复，P1 级别应优先处理 |
| [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) | feat(plugins): add shared egress policy foundation | 30 天 (07-18) | OPEN，needs-maintainer-review，size:XL | 插件 egress 三段式的基础层，阻塞 #9582/#9584 的评审 |

### ⚠️ 长期未获批的 RFC（建议维护者决策）

| Issue | 标题 | 活跃时长 | 状态 |
|---|---|---|---|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Prefer a lighter ZeroClaw core through external integrations | **112 天** (04-27) | OPEN，needs-maintainer-review，14 条评论，风险 high |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance, conversation binding, and reply contract | **83 天** (05-26) | OPEN，needs-maintainer-review，14 条评论，Rev. 2 已完成但未获决策 |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC: Security posture, credential boundaries, universal ingress policy | **82 天** (05-27) | OPEN，needs-maintainer-review，14 条评论 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC: Make wire protocol first-class in provider construction | **51 天** (06-27) | OPEN，needs-author-action，7 条评论 |

### 📋 特别提醒

- **#8692**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）是维护者决策队列 tracker 本身，当前已积压至少上述 4 个 "needs-maintainer-review" 的 RFC 和 3 个同类 PR——建议维护者优先对该队列进行"批处理"式评审，以解阻塞。
- **#10006** 已导致 PR #9137 的 CI 变红（run 31847503828），该 PR 是插件 egress 三条支线的源头，建议尽快修复测试 flakiness 或单独豁免。

---

*本日报基于 2026-08-17 ZeroClaw GitHub 数据自动生成。数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*