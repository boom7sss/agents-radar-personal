# OpenClaw 生态日报 2026-08-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-20 10:58 UTC

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

# OpenClaw 项目动态日报 — 2026-08-20

> 数据来源：github.com/openclaw/openclaw（2026-08-19 至 2026-08-20）

---

## 1. 今日速览

过去 24 小时项目保持高活跃度，Issues 更新 500 条（新开/活跃 472 条、关闭 28 条），PR 更新 500 条（待合并 409 条、已合并/关闭 91 条），无新版本发布。今日合并的 PR 覆盖 Control UI 安装策略审查、Claude CLI OAuth 恢复、Apple 端会话路由、插件代际切换等关键功能与修复。值得关注的是，大量核心 Issues（会话状态、消息丢失、crash-loop）已长时间处于 `needs-maintainer-review` 状态，主流维护者响应可能存在积压。质量门槛高 — 多数重要 PR 带有 `needs proof` 或 `waiting on author` 标签，合入节奏较慢。整体项目活跃但修复吞吐需关注。

---

## 3. 项目进展 — 今日合入/关闭的重要 PR

今日关闭的 PR 中，以下贡献值得关注：

- **[PR #120900] feat(ui): review install policy warnings**（CLOSED, 作者: jesse-merhi）— 允许管理员在 Control UI 中审查安装策略警告并决定是否继续安装插件，配合 `acknowledgeInstallPolicyWarning` 参数，属安全边界功能推进。这是此前 PR #116489 在 UI 层面的落地。
- **[PR #125471] fix(models): keep Claude CLI OAuth available in Control UI**（CLOSED, 作者: VACInc）— 修复 Gateway 重启后 legacy `auth.profiles["anthropic:claude-cli"]` 条目导致 OAuth refresh 所有权丢失的问题。
- **[PR #126626] fix(agents): keep turns on their admitted plugin generation**（CLOSED, 作者: vincentkoc）— 修复 Gateway 在新插件代际下复用了旧代际 prepared runtime 导致 abort 的问题。
- **[PR #126639] perf(test): settle partial reply drains deterministically**（CLOSED, 作者: steipete）— 测试稳定性优化，缩短 CI 时间。

**核心信号**：今日合入内容集中在安全审查交互（install policy UI）、认证稳定性（Claude CLI OAuth）、插件代际切换与测试基础设施，均为质量与安全方向的收敛，功能性大特性合入有限。

---

## 4. 社区热点

以下 Issues/PR 讨论最为活跃：

- **[Issue #48788]** feat: centralized filename encoding utility for multi-encoding Content-Disposition handling（20 评论）— 讨论飞书中文文件名的编码处理，来自 PR #48578 的架构级后续方案，涉及 Shift-JIS、EUC-KR、GB18030 等多编码支持。
- **[Issue #48003]** Steer mode does not inject messages mid-turn for main sessions（19 评论，👍4）— 用户期望在 turn 进行中通过工具边界注入消息，当前实现是排队到 turn 结束。这是交互体验核心诉求，且关联 session-state 与 message-loss 影响面。
- **[Issue #125626]** Release validation: v2026.8.1-beta.2（16 评论）— 社区在协助 beta 版本验证，属正常发布流程。
- **[Issue #96834]** WhatsApp 1:1 入站图片导致消息通道 wedge 约 3 分钟（15 评论）— 多模态输入在 WhatsApp 主通道造成消息处理延迟，已标记 `clawsweeper-recovery-stuck`，repro 时间在 2026.6.10。
- **[Issue #38327]** "Cannot convert undefined or null to object" with google-vertex/gemini-3.1-pro-preview（14 评论）— 2026.3.2 回归问题，影响 Gemini preview 模型用户，长期未关闭。

**共性诉求**：会话状态可靠性（消息注入/丢失）、多编码/多语言文件支持、模型 provider 兼容性。其中 **#48003** 与 **#96834** 均直接关系到日常使用质量，社区关注度高。

---

## 5. Bug 与稳定性

按严重程度排列（P0 > P1 > P2）：

### P0 级

- **[Issue #108435]** Gateway start failure after update to 2026.7.1（P0, 14 评论, 标记 `impact:crash-loop`, `ux-release-blocker`）— systemd/OpenClaw 更新后 gateway 无法启动，`clawsweeper:source-repro`。**无对应 open fix PR**。
- **[Issue #48920]** Live Docs are ahead of release（P0, 11 评论, `impact:ux-release-blocker`）— `IsolatedSessions` 已出现在 heartbeat 文档但 2026.3.13 版本未实现，文档与发布不同步。**无 fix PR**。

### P1 级

- **[Issue #48003]** Steer mode 不注入 mid-turn 消息（P1, 19 评论）— **有 linked PR 但 `no-new-fix-pr`**，长时间未合入。
- **[Issue #96834]** WhatsApp 入站图片 wedge 消息通道 ~3 分钟（P1, 15 评论, `recovery-stuck`）— **无 fix PR**。
- **[Issue #38327]** google-vertex/gemini-3.1-pro-preview "Cannot convert undefined or null to object"（P1, 14 评论）— **无 fix PR**。
- **[Issue #43367]** 多代理编排不稳定：并发 add/config 覆盖、session-lock 失败、子任务脱离（P1, 13 评论）— **有 linked PR**。
- **[Issue #41165]** Telegram DM 仍可落入 agent:main:main，污染主会话（P1, 9 评论, `recovery-stuck`）— **有 linked PR**。
- **[Issue #123073]** dev-channel update 失败：EUNSUPPORTEDPROTOCOL on workspace:*（P1, 10 评论）— 根因是 updater 用 npm 但仓库要求 pnpm。**有 linked PR**。
- **[Issue #119087]** Gateway cold start 回归 ~2.5x（P1, 9 评论, `recovery-stuck`）— 2026.7.1-beta.1 到 2026.7.2-beta.7 性能退化。**无 fix PR**。
- **[Issue #97616]** 未回收的 hook/tool 子进程导致 zombie 累积（P1, 8 评论）— 需 `needs-info`。**无 fix PR**。
- **[Issue #123799]** Codex compact 404 的生产升级/回滚指导（P1, 7 评论）— 相关 #123706 已在 main 实现，但生产用户需要操作指引。**无 fix PR**。

### P2 及以下（典型代表）

- **[Issue #43747]** Memory management is in chaos（P2, 11 评论）— 多用户观察到 memory 管理行为不一致（chunking/embedding 路径不同），疑似回归。
- **[Issue #88657]** DeepSeek V4 Flash incomplete turn（P2, 11 评论）— 2026.5.27/28 回归，`payloads=0, tools=2, replaySafe=no`。
- **[Issue #45494]** Cron agent jobs silently time out during LLM outages（P2, 9 评论）— 应在确定性错误时快速失败而非耗尽 timeout。
- **[Issue #14785]** 工具 schema 单会话 token 开销 ~3,500 tokens（P2, 9 评论）— 长期存在的高频成本问题。
- **[Issue #53628]** `${XDG_CONFIG_HOME}` 未展开导致 skill 安装失败（P3, 13 评论）— **有 linked PR**。
- **[Issue #50490]** 飞书群聊 activation 模式切换无效（P2, 7 评论）— `/activation mention` 后仍响应所有消息，`source-repro` 已确认。

**稳定性总结**：今日无新 P0/P1 报告；多数聚焦于长期未合入的回归与 message-loss/session-state 类问题。多个 P1 已带 linked PR，但 `no-new-fix-pr` 标签暗示修复方案长期未推进，维护者积压是主要瓶颈。

---

## 6. 功能请求与路线图信号

以下功能请求在今日数据中持续活跃，且有对应 PR 在途，可能进入下一版本：

| 功能请求 | Issue | 对应 PR | 状态 |
|---|---|---|---|
| 集中式文件名多编码处理（Content-Disposition） | [#48788](https://github.com/openclaw/openclaw/issues/48788) | #48578（前置修复） | 架构讨论中，无新 PR |
| Provider fallback by failure class — 隔离 auth-broken providers | [#47910](https://github.com/openclaw/openclaw/issues/47910) | — | 无对应 PR |
| 暴露 resolved backend model 于 session_status（LiteLLM 场景） | [#51441](https://github.com/openclaw/openclaw/issues/51441) | — | 无对应 PR |
| A2A 单向 dispatch 模式，避免 reply-back ping-pong | [#44309](https://github.com/openclaw/openclaw/issues/44309) | — | 无对应 PR |
| TUI `--deliver` flag 默认值可配置 | [#33102](https://github.com/openclaw/openclaw/issues/33102) | — | 无对应 PR |
| Session snapshots（/session save\|load 检查点） | [#13700](https://github.com/openclaw/openclaw/issues/13700) | — | 无对应 PR，长期开放 |
| diagnostics.memory 阈值可配置 | — | [PR #115703](https://github.com/openclaw/openclaw/pull/115703)，需维护者确认 | 等待维护者，`needs proof` |

**路线图信号**：
- **会话可靠性**是当前最集中的诉求方向（#48003 steer-mode 注入、#96834 WhatsApp wedge、#41165 Telegram 路由污染），反映了多通道统一会话基建的欠账。
- **多编码文件名处理**已有明确的架构级方向（#48788），是跨渠道（飞书、WhatsApp、Telegram）文件功能的共同基础。
- **诊断可配置化**（#115703）若合入，将提升大规模部署的可观测性。

---

## 7. 用户反馈摘要

以下基于 Issues 评论提炼的真实用户痛点与场景：

- **生产环境受困且缺乏指导**：FlaviaDyckerhoff（#123799）作为受 Codex compact 404 影响的生产部署方，直言"需要操作指引"，且相关 #123706 已在 main 实现但 2026.5.12 用户无法自行解决——用户希望有明确的升级/回滚路径。
- **内存管理体验不一致**：AM-young-fun（#43747）反馈 3 人团队各自看到不同的 memory 行为（chunking/embedding 路径不同），"从未见过一致的管理方式"——多实例行为一致性是用户信任感的基础。
- **多代理可靠性不足**：waliddafif（#43367）在用 CLI 编排并行编程任务时遇到并发安全问题（agents add 不安全、session-lock 失败），评价"make multi-agent runs unreliable in practice"。
- **模型切换静默失败**：LunaLee0130（#58957）指出携带过大上下文切换模型时无错误提示，"appear to fail silently"——用户期望明确的 context window 超限提示。
- **文档领先于发布造成困惑**：Stoff81（#48920）直接踩坑（文档中的 `IsolatedSessions` 在 2026.3.13 不存在），属文档-版本不同步的典型用户损伤。
- **Google 供应商误封风险**：caimao9539（#44134）反馈因频繁 tool schema reloading 被 Google Antigravity 误判为滥用并封号——工具 schema 管理不仅是 token 成本问题，还涉及账号安全。
- **TUI 默认行为令人困惑**：samoclah（#33102）指出 `--deliver` 默认 false 导致回复不输出到 stdout，"confusing for users"。

---

## 8. 待处理积压

以下为长期未合入或长期未响应的重要 Issue/PR，建议维护者优先关注：

### 长期未关闭的高影响 Issue

| Issue | 创建时间 | 严重度 | 影响面 | 等待时长 |
|---|---|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) Gemini preview "Cannot convert undefined or null to object" | 2026-03-06 | P1 | auth-provider | 5.5 个月 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) 工具 schema token 开销 ~3,500 tok/会话 | 2026-02-12 | P2 | session-state | 6+ 个月 |
| [#13700](https://github.com/openclaw/openclaw/issues/13700) Session snapshots (/session save\|load) | 2026-02-10 | P2 | session-state | 6+ 个月 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) Live Docs ahead of release（P0） | 2026-03-17 | P0 | ux-release-blocker | 5 个月 |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) 2026.7.1 gateway 启动失败（P0） | 2026-07-15 | P0 | crash-loop | 1+ 个月 |

### 长时间等待维护者审阅的 PR

| PR | 创建时间 | 要点 | 状态 |
|---|---|---|---|
| [#116489](https://github.com/openclaw/openclaw/pull/116489) install policy warnings 确认机制 | 2026-07-30 | 安全边界功能 | `ready for maintainer look`，等待合入 |
| [#115184](https://github.com/openclaw/openclaw/pull/115184) ACP 会话 reset 超时恢复 | 2026-07-28 | 会话卡死修复 | `waiting on author` |
| [#117427](https://github.com/openclaw/openclaw/pull/117427) 飞书通讯录分页查询修复 | 2026-08-01 | 飞书渠道功能 | `ready for maintainer look` |
| [#126366](https://github.com/openclaw/openclaw/pull/126366) Apple 端会话路由 | 2026-08-19 | iOS/macOS 会话路由 | `ready for maintainer look` |
| [#115703](https://github.com/openclaw/openclaw/pull/115703) diagnostics.memory 阈值可配置 | 2026-07-29 | 可观测性 | `needs proof` |

**维护者关注提醒**：大量 `no-new-fix-pr` + `needs-maintainer-review` 的 P1 Issue 已拖 5 个月以上（如 #48003、#96834、#41165），社区对会话可靠性修复的期待值在上升。当前多数高质量 PR 已在队列中就绪，建议在下一发布周期优先合入这批修复。

---

## 横向生态对比

# 2026-08-20 个人 AI 助手开源生态横向对比分析报告

## 1. 生态全景

个人 AI 助手/自主智能体开源生态整体处于**高速迭代期**：以 OpenClaw 为代表的头部项目贡献量级远超同侪（24 小时 500+ Issue/PR），但维护者审阅积压成为普遍瓶颈；各项目不约而同将重心放在**会话状态可靠性、跨渠道一致性与安全加固**三大方向。同时，生态呈现出明显分层——头部项目已在架构重构（插件代际、mailbox 接缝、WASM 插件化）与竞品交互吸收上发力，而中小项目仍以渠道补全和基础体验修复为主。值得警惕的是，**多项目同时报告会话中断、静默失败与文档-版本脱节**，说明基础可靠性尚未在生态层面充分解决。

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PR（待合并/合并关闭） | Release | 核心方向 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 条更新（472 活跃 / 28 关闭） | 500 条更新（409 待 / 91 合） | 无 | 安全审查 UI、OAuth 恢复、插件代际修复 | ⚠️ 高活跃但维护积压严重，多个 P1 拖 5 个月以上 |
| **Hermes Agent** | 50 条更新（41 活跃 / 9 关闭） | 50 条更新（40 待 / 10 合） | 无 | bot-mode 收尾、竞品 CLI 交互吸收 | ✅ 响应迅速，当日事件多数当日出 fix PR |
| **NanoBot** | 3 条（2 关闭） | 22 条（12 合 / 10 待） | 无 | TUI 体验、WebUI 本地化、会话恢复 | ✅ 合并潮密集，但单贡献者集中度高 |
| **NanoClaw** | 4 条 | 30 条（23 合 / 7 待） | 无 | mailbox 架构、Node 26 兼容、Slack 修复 | ✅ 响应极快（Issue→修复 24h），架构级推进 |
| **CoPaw** | 13 关闭 / 10 活跃 | 31 合 / 19 待 | **v2.1.1-beta.1** | Console 性能、渠道隔离、Hub 架构 | ✅ 高强度整合，但核心体验 bug 无 fix |
| **IronClaw** | 13 条更新 | 40 条更新（23 待） | **v1.3.0** | 持久化沙箱、通知中心、automations | ✅ 进入 v1.4.0 密集开发期 |
| **ZeroClaw** | 50 条更新（44 活跃 / 6 关闭） | 50 条更新（46 待 / 4 合） | 无 | 安全合约、沙箱逃逸修复、架构轻量化 | ⚠️ 安全 CI 持续失败被 blocked，多个请求无响应 |
| **PicoClaw** | 0 条 | 4 条（3 待 / 1 合） | 无 | Telegram UX、LINE 配置、路由上下文 | ⚠️ 3 条 open PR 中 2 条已 stale |
| **LobsterAI** | 2 条（均历史遗留） | 8 条（7 合 / 1 待） | 无 | Write 预览、设置搜索、打包修复 | ✅ 存量消化期，维护节奏良好 |
| **Moltis** | 1 条（已关闭） | 6 条（5 合 / 1 待） | **20260818.10** | Vault 鉴权、WhatsApp 修复 | ✅ 安全修复及时，平台兼容 PR 长期滞留 |
| **NullClaw** | 0 条 | 1 条（1 待） | 无 | README 修复 | 💤 低活跃，渐进迭代 |
| **TinyClaw** | — | — | — | 无活动 | 💤 无活动 |
| **ZeptoClaw** | — | — | — | 无活动 | 💤 无活动 |

## 3. OpenClaw 在生态中的定位

**优势**：OpenClaw 的社区规模与贡献量级在生态中处于绝对领先地位（24h 500+ Issue/PR 更新远超其他项目 1-2 个数量级），已形成跨飞书、WhatsApp、Telegram、Apple 等全渠道的多模态接入版图。其插件代际切换、Steer Mode 等概念正在成为生态内的事实参照标准，多个项目（NanoClaw、PicoClaw、ZeroClaw）在命名与路线图上均与其存在对应关系。

**技术路线差异**：相比 NanoBot/Hermes 聚焦 CLI/TUI 终端体验和 Codex/OpenClaude 的协议兼容，OpenClaw 更强调**多通道统一会话基建**与**安全边界的纵深防御**（install policy 审查、OAuth 所有权管理），其插件系统具备代际隔离能力。ZeroClaw 与其定位最接近但走 Rust/WASM 插件化和轻量化核心路线。

**主要风险**：高流量带来的维护者响应积压已在侵蚀生态位——大量 P1 会话可靠性 Issue（#48003/#96834/#41165）拖沓 5 个月未能合入修复，`needs-maintainer-review` 标签堆积，这对依赖 OpenClaw 作为基础设施的开发者构成实际风险。相比之下，NanoClaw、Hermes 在当日事件响应速度上反而表现更好。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话状态可靠性与消息不丢失** | OpenClaw（#48003 steer 不注入、#96834 WhatsApp wedge）、Hermes（#9333 ACP 回合消失）、CoPaw（#6921 多步骤任务无提示中断）、NanoClaw（#3349 跨会话 memory 不同步）、PicoClaw（#3316 路由 agent 不记忆上下文） | 多通道下会话连续性、跨重启持久化、失败时明确通知而非静默 |
| **渠道路由隔离与跨渠道一致性** | OpenClaw（#41165 Telegram 污染主会话）、NanoClaw（#3366 Slack 回归）、CoPaw（#7158/#7159 QQ/钉钉上下文隔离）、Moltis（#1217 WhatsApp 回复被丢弃） | 消息来源与目标会话的正确映射、多代理并发安全 |
| **安全边界与鉴权加固** | Moltis（#1177 Vault CWE-306）、ZeroClaw（#9827 沙箱逃逸、#9440 estop 失效、SOP 权限合约）、Hermes（#90750 信息泄露）、OpenClaw（#120900 install policy UI） | 鉴权全端点覆盖、沙箱逃逸修补、安全功能"表面存在但未生效"的问题 |
| **多编码/多语言/多平台兼容** | OpenClaw（#48788 飞书中文文件名多编码）、ZeroClaw（#7911 Termux 安装）、LobsterAI（#1555 macOS 打包）、NanoClaw（#3354 非登录 SSH 安装） | 文件名编码、安装脚本对无头环境的适配、跨平台打包 |
| **安装/更新/升级路径可靠性** | Hermes（#90746 Windows 更新挂起、#90687 安装全失败）、OpenClaw（#108435 Gateway crash-loop）、ZeroClaw（#9290 Windows 启动失败）、IronClaw（v1.3.0 1.2→1.3 升级崩溃） | 版本升级不崩溃、文档-版本同步、回滚指导 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道（飞书/WhatsApp/Telegram/Apple）统一会话基建、插件生态 | 大型团队，跨平台重度用户 | 模块化插件代际隔离；Gateway 统一路由 |
| **Hermes Agent** | bot-mode 自动化、cron 任务、桌面端 | 自动化运营者、桌面重度用户 | 竞品（opencode/codex）交互吸收速度最快；ACP 客户端 |
| **NanoBot** | TUI 终端体验、WebUI 本地优先 | 开发者/终端用户 | TUI 分支系统化打磨；OAuth 存储路由 |
| **NanoClaw** | 多渠道适配 + 架构快速演进 | 核心团队小步快跑的部署者 | mailbox 接缝架构；Node 26 快速兼容 |
| **CoPaw** | Console UI、中国市场渠道（QQ/钉钉） | 中国用户、Console 重度使用者 | 自托管 Hub；驱动并发加载优化 |
| **IronClaw** | 持久化沙箱、automations、通知中心 | 运维/自动化部署者 | per-user 容器 + Docker Exec；MCP-backed memory |
| **ZeroClaw** | Rust 核心、安全加固（SOP 权限合约） | 安全敏感型开发者 | WASM 插件化演进；Rust 依赖链安全治理 |
| **PicoClaw** | Telegram 体验优化、LINE 配置 | 轻量部署者 | stale PR 积压说明维护能力有限 |
| **LobsterAI** | Windows/macOS 桌面打包、IM 集成 | 桌面端生产力用户 | 安装器（NSIS 静默）深度打磨 |
| **Moltis** | WhatsApp 渠道精细化、安全审计 | 中小团队快速部署 | Vault 鉴权、渠道自定义名称支持 |
| **NullClaw** | 文档与展示层维护 | 自托管轻量用户 | 低活跃、基础设施维护模式 |

## 6. 社区热度与成熟度

**快速迭代期（架构演进 + 高吞吐）**：**OpenClaw**（但面临维护瓶颈）、**NanoClaw**（架构重构 + 生态兼容同步推进，响应速度出色）、**CoPaw**（多渠道扩展 + Console 整合）、**IronClaw**（v1.4.0 功能密集落地）、**ZeroClaw**（架构转型与安全治理并行）。

**质量巩固期（体验打磨 + 修复收敛）**：**Hermes Agent**（bot-mode 收尾 + 竞品交互吸收 + 当日事件快速响应）、**NanoBot**（TUI 系统化打磨）、**LobsterAI**（存量消化，体验补全）、**Moltis**（安全修复 + 渠道体验完善）。

**积累/低活跃期**：**PicoClaw**（变更积累但合入效率低，stale 风险上升）、**NullClaw**（仅基础设施维护）、**TinyClaw / ZeptoClaw**（当日无活动）。

## 7. 值得关注的趋势信号

1. **会话可靠性成为生态共性欠账**：OpenClaw、Hermes、CoPaw、PicoClaw、NanoClaw 在 24 小时内同时暴露会话中断、消息丢失、上下文不同步问题。这已从单一项目缺陷上升为**生态级基础能力缺口**——对 AI 智能体开发者而言，会话状态机、消息投递保证与失败通知机制是下一轮竞争的技术制高点。

2. **多代理编排与安全边界是双刃剑**：一方面社区强烈需求多 Agent 协作（Hermes #5257 通用 ACP 客户端获 23👍 仍无 PR）；另一方面多代理场景下并发安全问题频发（CoPaw 并发 add/config 覆盖、OpenClaw 多代理不稳定）。**安全机制"表面存在但未生效"**（ZeroClaw estop 状态文件只写不读、Moltis Vault 端点无鉴权、Hermes /api/status 泄露）正在系统性侵蚀用户信任，安全审计与端点全覆盖将成为评估项目成熟度的关键指标。

3. **架构演进向"核心轻量化 + 插件化"集中**：ZeroClaw 轻量化核心 RFC、WASM 插件化、NanoClaw mailbox 接缝、IronClaw MCP-backed memory provider、CoPaw 独立 sidecar 打包 MCP——**可插拔、可隔离、可扩展**成为头部项目的共同架构方向。开发者选型时应关注项目的插件 ABI 稳定性与生态扩展成本。

4. **竞品交互设计吸收成为迭代常态**：Hermes 以"round-3 teardown"系统吸收 opencode/codex 的 CLI/TUI 交互设计（/status 增强、composer 占位提示、prompt 分发钩子）。**终端体验正在从"功能完备"走向"交互品质"竞争**，AI 助手的人机交互设计（状态可视化、进度透明、失败可恢复）将成为用户体验分层的新标准。

5. **安装/升级路径的脆弱性是隐性负债**：Hermes 当天安装全量失败 + Windows 更新挂起、OpenClaw Gateway crash-loop、ZeroClaw Windows 安装器失效、IronClaw v1.3.0 需要紧急升级——**多个项目在同一天暴露升级链路问题**，反映 CI 对多平台真实环境验证不足。对企业用户而言，升级/回滚路径的可靠性应作为选型硬指标。

6. **中国渠道（飞书/QQ/钉钉）成为差异化战场**：OpenClaw 关注飞书文件名编码、CoPaw 深耕 QQ/钉钉定时推送与会话隔离、NanoClaw 关注飞书通讯录——面向国内 IM 渠道的适配深度正在成为区分"真正可用"与"仅理论上支持"的关键维度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-20

## 1. 今日速览

NanoBot 今日进入高强度迭代节奏：过去 24 小时累计更新 28 条（3 个 Issue + 22 个 PR + 版本发布 0 个），合并/关闭 12 个 PR、2 个 Issue，当前仍有 10 个 PR 待合并。维护者 chengyongru 与 Re-bin 贡献了绝大多数 PR，集中在 TUI（终端界面）体验优化、WebUI 会话管理与本地化部署两大方向。特别值得注意的是，TUI 分支今日一口气合并了 5 个 PR（#5448-#5452），显示出该项目正针对终端用户工作流做系统性打磨。社区活跃度极高，但新版本尚未发布，当前处于"合并潮"与"版本整理"之间的窗口期。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共合并/关闭 12 个 PR，核心进展集中在以下三个方面：

**TUI 终端体验系统性优化（5 个 PR 同日合并）**
- [#5452](https://github.com/HKUDS/nanobot/pull/5452) 在 TUI 退出后打印可立即执行的 `nanobot agent --session websocket:<id>` 恢复命令，显著降低会话切换成本
- [#5451](https://github.com/HKUDS/nanobot/pull/5451) 精简 /context 面板，仅保留 token、replay、archive 计数，减少视觉干扰
- [#5450](https://github.com/HKUDS/nanobot/pull/5450) 修复源码检出环境下 TUI 启动网关时被强制同步执行 WebUI 安装/构建导致阻塞的问题
- [#5449](https://github.com/HKUDS/nanobot/pull/5449) 确保 Herdr 托管面板中保留原生导航命令（/sessions、/new-chat、/branch），明确 Herdr 与 nanobot 的职责边界
- [#5448](https://github.com/HKUDS/nanobot/pull/5448) 每次默认启动 TUI 时开启全新 WebSocket 会话，以命令启动目录为初始工作区，删除过期的 last-session 持久化逻辑

**WebUI 与模型预设统一（3 个 PR 合并）**
- [#5240](https://github.com/HKUDS/nanobot/pull/5240) 统一浮动控件样式，规范 Menu/Popover/Combobox 语义（8/4 创建，经长时间打磨后于今日合并）
- [#5384](https://github.com/HKUDS/nanobot/pull/5384) 恢复纯 transcript 会话历史的侧边栏发现与打开能力
- [#5381](https://github.com/HKUDS/nanobot/pull/5381) 为本地托管的 WebUI 增加 macOS/Windows/Linux 原生文件夹选择器，仅在 gateway 绑定 loopback 且浏览器连接为本地时启用
- [#5400](https://github.com/HKUDS/nanobot/pull/5400) 统一模型预设命名，使每个预设 key 成为跨 config、WebUI、commands、sessions、fallbacks、runtime 的唯一规范名称

**跨渠道会话与代理修复**
- [#3145](https://github.com/HKUDS/nanobot/pull/3145) 修复 webSocket 会话通过 `message` 工具发送到飞书等渠道 B 时，消息未写入渠道 B 历史导致上下文丢失的问题（4/14 创建，今日最终合并）
- [#5439](https://github.com/HKUDS/nanobot/pull/5439) 仅支持标准 `socks5://` 代理协议，启用 HTTPX 的 SOCKS 扩展，保持版本范围不变

整体来看，TUI 分支的集中合并标志着终端用户工作流已进入成熟期；WebUI 侧则在向"本地优先、原生体验"方向稳步推进。

## 4. 社区热点

**Issue #5444 — [OPEN] Failed to login OpenAI via OAuth in Docker**
[链接](https://github.com/HKUDS/nanobot/issues/5444) | 评论 1 | 👎 0

Docker 环境下 OpenAI OAuth 登录失败，回调 URL 为 `http://localhost:1455/auth/callback`，贴出"Exchanging authorization cod..."后中断。该问题与今日两个待合并 PR 直接相关：#5446（将 OAuth token 存储路由到 nanobot 数据目录）和 #5445（Docker 中持久化 OAuth 客户端数据），均指向同一根因——Docker 容器内非 root 用户 `nanobot` 对 oauth-cli-kit 默认目录无写权限。这是典型的"Issue 驱动 PR"案例，风险在于 #5446 和 #5445 的修复方案存在重叠，维护者需协调合并策略。

**PR #5453 — [OPEN] feat(providers): add SenseNova（商汤日日新）provider**
[链接](https://github.com/HKUDS/nanobot/pull/5453) | 👍 0 | 创建于今日

新增商汤日日新为原生 LLM provider，采用 OpenAI 兼容端点 `https://token.sensenova.cn/v1`，支持 `sensenova-6.8-flash-lite`（多模态）、`deepseek-v4-flash` 等模型。这是 8 月社区持续贡献新 provider 趋势的延续，但值得注意的是 SenseNova 官方是否已开放这些模型名称，以及 `deepseek-v4-flash` 作为第三方模型挂载在 SenseNova 端点下的可信度，建议维护者核验。此前已有 Issue #5425（legacy socks:// 代理支持）暗示社区对自定义 OpenAI 兼容 provider 的强烈需求，SenseNova 的加入与之一致。

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 状态 | 说明 |
|---------|----------|------|------|
| 高 | [#5444](https://github.com/HKUDS/nanobot/issues/5444) Docker 中 OpenAI OAuth 登录失败 | OPEN，已有 2 个关联 fix PR（[#5446](https://github.com/HKUDS/nanobot/pull/5446)、[#5445](https://github.com/HKUDS/nanobot/pull/5445)） | 非 root 用户下 oauth-cli-kit 无法写入默认平台目录，阻断 Docker 生产环境使用 |
| 中 | [#5425](https://github.com/HKUDS/nanobot/issues/5425) 自定义 OpenAI 兼容 provider 配置 `socks://` 代理时请求失败 | CLOSED，由 [#5439](https://github.com/HKUDS/nanobot/pull/5439) 修复 | 修复策略为仅支持标准 `socks5://`，明确拒绝其他格式，行为变更需在 release notes 中提示用户迁移 |
| 中 | [#5450](https://github.com/HKUDS/nanobot/pull/5450) TUI 启动的网关在源码检出环境下同步执行 WebUI 构建导致 stall | CLOSED | 将 gateway 从 `auto` 强制回 `warn` 模式，避免阻塞监听器绑定 |

今日无崩溃级回归报告。tui 相关的 5 个 PR 合并虽密集，但每个 PR 均附带针对性测试覆盖（#5451 覆盖 session 相关场景、#5449 覆盖 /sessions 等命令），回归风险可控。

## 6. 功能请求与路线图信号

**SenseNova provider（#5453）** — 新增商汤日日新 provider，延续"OpenAI 兼容端点即插即用"的策略，预计高质量 provider PR 将被快速合入。

**付费安全扫描 MCP 集成（#5447）** — 社区提出将 nanobot 与 Solana x402 微支付安全扫描器 ScanPay 集成，实现"付费 MCP / x402 服务"。该 Issue 已被关闭且 0 评论，目前无维护者回应信号，短期内大概率不会进入路线图。

**TUI 会话恢复体验（#5452）** — 退出时打印恢复命令，这一模式未来可能进一步扩展为"自动恢复上次会话"或"会话书签"功能。

**跨渠道会话完整性（#3145）** — 今日合并后将 message 工具写入目标渠道历史的修复是基础能力，后续可能延伸至更多渠道（飞书之外的钉钉、Slack 等）以及双向同步方向。

**OAuth 凭据持久化（#5445/#5446）** — 两个 PR 方向一致但实现路径不同：#5445 走 Docker 层 XDG 数据目录重定向，#5446 走代码层存储路由。二者正面对撞，维护者需尽快裁决合并策略，避免功能重复或冲突。

## 7. 用户反馈摘要

**Docker 生产环境 OAuth 痛点（来自 #5444）** — 用户 Bennett-Yang 在 Docker 下执行 OAuth 登录时遇到回调失败，贴出的日志停留在"Exchanging authorization cod..."。这与 #5446 的 PR 描述完全吻合——"`nanobot provider login openai-codex` can fail in Docker"，说明该问题已影响至少两名用户。根因是容器内非 root 运行用户对 oauth-cli-kit 默认平台目录无写权限，属于 Docker 镜像构建时未充分适配的遗留问题。用户表现出的行为模式（给出完整复现命令、等待社区修复）说明其对 nanobot 的 Docker 支持有明确预期。

**代理协议支持诉求（来自 #5425）** — 用户 pxy0592 提出自定义 OpenAI 兼容 provider 在配置 `socks://` 代理（非标准）时请求失败。修复方案（#5439）明确只支持标准 `socks5://`、拒绝其他格式。这一决策清晰务实，但对使用旧式 `socks://` 配置的历史用户可能构成破坏性变更，建议在 release notes 中明确提示。

**新 provider 贡献热情** — 今日 SenseNova provider PR 表明社区仍在持续贡献新 LLM 接入。综合此前多轮 provider 合并经验，nanobot 已成为事实上的"LLM 聚合层"，但需警惕"provider 过多导致的维护负担"，可考虑建立 provider 质量标准（如模型清单核验、端点稳定性验证）。

## 8. 待处理积压

**高度优先 — OAuth 双 PR 冲突**：[#5446](https://github.com/HKUDS/nanobot/pull/5446)（CLI 层路由）与 [#5445](https://github.com/HKUDS/nanobot/pull/5445)（Docker 层 XDG 重定向）均由同一根因驱动，但方案相互独立。两者同时合入可能产生路径冲突或功能冗余，建议维护者限期（48 小时内）协调统一方案。

**低活跃但值得关注 — PR #5420**：[feat(webui): add turn observability and safe recovery](https://github.com/HKUDS/nanobot/pull/5420)，8/18 创建，已 2 天未更新。该 PR 将用户每一轮交互投影为统一的答案面板，同时保留推理、工具调用、文件编辑等中间过程，并聚合 provider 用量。功能体量较大，涉及 WebUI 核心数据模型变更，建议社区提前 review 以降低合并成本。

**结构性问题**：本周 WebUI 侧贡献（#5240、#5381、#5384、#5400）全部来自同一贡献者 Re-bin，TUI 侧（#5448-#5452）则集中在 chengyongru 一人。单贡献者集中提交虽效率高，但增加知识单点风险。结合 Issue 侧反馈（#5444 已影响 Docker 用户），建议项目组考虑对活跃贡献者分配 Review 权限、降低外部 PR 的响应延迟，以维持生态健康度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-20

## 1. 今日速览

过去24小时内项目保持高度活跃：共产生50条Issue更新（其中41条活跃/新开、9条关闭）和50条PR更新（40条待合并、10条已合并/关闭）。值得关注的是，今日有多个直接针对2026-08-20当天发生的线上事件（Windows更新挂起、安装故障）的修复PR提交，说明团队对紧急问题的响应速度较快。同时，一批基于opencode/codex产品拆解（round-3 teardown）的CLI/TUI体验改进PR集中出现，显示项目正在系统性借鉴竞品交互设计。无新版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的PR主要集中于bot-mode（机器人模式）的收尾修正与文档同步：

- **[#90751] [CLOSED] fix(bot-mode): canonical-chat adoption no longer misses a buried forever-chat**（teknium1）— 修复了 #90732 引入的会话采用逻辑缺陷：原扫描仅覆盖 `session.list` 的200条最近记录窗口，忙碌的bot档案（群聊流量、routines、fork垃圾）会导致永久聊天（forever-chat）被遗漏。该PR改为精确标题查找，确保规范会话被正确接管。
- **[#90756] [CLOSED] fix(bot-mode): disband dialog no longer points at the removed session browser**（kshitijk4poor）— 解散群组确认对话框不再引导用户访问已被 #90732 移除的按bot会话浏览器，消除界面文案与功能的脱节。
- **[#90755] [CLOSED] fmt(js): `npm run fix` auto-fix**（hermes-seaeye[bot]）— 自动格式化PR，由CI工作流自动生成与合并，属日常维护。

另有多项重要PR今日处于开放状态，包括安全修复（#90750）和Windows更新挂起修复（#90746），预计将在后续合并。整体来看，项目正在稳步推进bot-mode功能的完善收尾、CLI/Desktop体验优化以及安全隐患的修补。

## 4. 社区热点

**最高热度Issue：**

- **[#5257] feat: Generalized ACP client for multi-agent CLI orchestration**（24条评论，23个👍）— 该Issue虽创建于4月，至今仍是社区最高关注度的功能提案。核心诉求是将 Hermes目前仅针对Copilot的ACP（Agent Client Protocol）客户端泛化为支持所有ACP兼容Agent，并允许通过CLI进行多Agent编排。23个👍表明多Agent协作是社区的强需求信号，且当前仍无对应PR，值得维护者优先评估。

**其他高讨论量Issue：**

- **[#39609] [Bug]: Tasks created with --initial-status blocked auto-promote to ready ~1s later with no actor**（8条评论）— 用户报告看板任务在创建为blocked状态后约1秒被自动提升为ready，且无操作者记录，导致人工审批门禁被绕过。这是工作流安全相关的严重缺陷。
- **[#38048] [Bug]: url_safety false-positively blocks DNS64/NAT64 addresses in 64:ff9b::/96**（7条评论）— URL安全检查误伤正常网站，影响使用DNS64/NAT64转换的IPv6网络环境。
- **[#70266] [Bug]: Hermes Desktop "Check for updates" checks the remote container instead of the Desktop app**（6条评论，已关闭）— 桌面端更新检查逻辑指向错误目标，该问题已被关闭，可能有对应修复。

## 5. Bug 与稳定性

**P1 级：**

- **[#88655] Scheduler-level cron processing errors bypass failure_nudge alerting** — 网关在混合代码版本状态下运行（见 #88654），导致每10分钟的agent cron在调度器层面连续失败约5小时且未触发告警。这暴露了调度器错误处理与告警链路的盲区。已有相关PR #90761 修复scale-to-zero空闲判定中遗漏cron工作的问题，但告警旁路本身是否已修复尚不明确。

**P2 级：**

- **[#90687] ERROR codes on all devices - Installation** — 2026-08-20凌晨起 Hermes Agent 在所有设备（包括全新安装Termux的设备）上无法安装。这属于当日重大回归，但目前未看到对应的修复PR被提及。
- **[#90315] API server GET /health ignores API_SERVER_KEY** — 健康检查端点不要求认证，与其他OpenAI兼容路由不一致，存在信息泄露风险。
- **[#90722] Updated hermes 20.4 in web shows Hermes v0.19.1 8 behind** — 版本号显示不一致，web端更新到20.4后系统显示v0.19.1且落后8个版本，疑似版本元数据同步问题。
- **[#90229] Desktop right-sidebar file tree stuck on skeleton forever after boot** — Windows 11桌面端侧边栏文件树偶发无限加载。
- **[#28987] Dashboard blank page on native Windows (JS served as text/plain)** — Windows原生环境下仪表盘白屏，MIME类型配置错误。该Issue自5月19日创建至今未关闭，属长期未修复项。

**P3 级：**

- **[#84361] Desktop MEDIA: file links dead** — 标签正则吞噬尾部markdown导致file://链接失效。
- **[#80136] TTS text normalizer expands units/symbols in English regardless of voice language** — TTS归一化硬编码英文，法语等非英语语音会读出"percent"、"degrees Celsius"等英文词。
- **[#89350] Desktop session tab header disappears and stays gone** — macOS远程/SSH后端下会话标签栏消失且不恢复。
- **[#50937] transform_llm_output plugin hook not firing on non-default profiles** — 非默认profile下插件钩子不触发。
- **[#62951] Bundled chronos plugin fails to load on v0.18.2** — 插件调用了已移除的API，导致加载失败。

**已有fix PR：**

- **Windows更新挂起**（#90746，对应2026-08-20 Windows incident）— 使 `hermes update` 在GUI交接时回收泄漏的 `serve` 后端进程，避免venv更新死锁12分钟的问题。[PR #90746](https://github.com/NousResearch/hermes-agent/pull/90746)
- **本地源码修改被更新覆盖**（#90753）— Desktop驱动更新改用 `--keep-stash`，保留本地修改。[PR #90753](https://github.com/NousResearch/hermes-agent/pull/90753)
- **/api/status 信息泄露**（#90750）— 修复未认证端点泄露平台错误的自由文本字段，修复 #90700。[PR #90750](https://github.com/NousResearch/hermes-agent/pull/90750)
- **systemd直接停止被标记为异常**（#85901）— 标记直接 `systemctl stop/restart` 为计划内停止。[PR #85901](https://github.com/NousResearch/hermes-agent/pull/85901)

## 6. 功能请求与路线图信号

**高潜力纳入下一版本：**

- **通用ACP客户端**（[#5257](https://github.com/NousResearch/hermes-agent/issues/5257)，23👍）— 将ACP客户端从Copilot专用泛化为所有ACP兼容Agent，支持多Agent CLI编排。当前无对应PR，但社区呼声最高。
- **Web搜索后端有序故障转移链**（[#32159](https://github.com/NousResearch/hermes-agent/issues/32159)）— 支持 `web_search`/`web_extract`/`web_crawl` 的有序后端故障转移。今日已关闭的 #78984 是同一诉求的不同表述（单后端故障导致cron管线静默失败），说明该问题已获团队关注。
- **渐进式后台预压缩缓存**（[#35467](https://github.com/NousResearch/hermes-agent/issues/35467)）— 在会话达到硬压缩阈值前提前做后台摘要，减少同步压缩的卡顿。

**已实现（今日PR对应）：**

- **旋转式任务导向composer占位提示**（[#90752](https://github.com/NousResearch/hermes-agent/pull/90752)）— 借鉴opencode/codex的C-09设计，新用户引导。
- **更丰富的 /status 命令**（[#90745](https://github.com/NousResearch/hermes-agent/pull/90745)）— 展示推理级别、审批模式、上下文窗口使用率，借鉴codex的C-02设计。
- **必需式prompt分发钩子**（[#90754](https://github.com/NousResearch/hermes-agent/pull/90754)）— 为TUI网关客户端提供fail-closed的prompt处理钩子，支持会话创建/恢复时注册必选处理器。

**路线图信号**：多PR（#90745、#90752）引用了"round-3 teardown"的竞品分析，说明团队正在系统化地将opencode/codex的交互设计纳入Hermes，未来可能继续出现该系列的CLI/TUI改进。

## 7. 用户反馈摘要

**痛点与使用场景：**

- **审批门禁被绕过**（#39609）：任务创建为blocked后自动提升状态，用户强调"no actor recorded"和"no operator action"，说明看板工作流在团队中被用于人工审批管控场景，该bug直接破坏了流程合规性。
- **更新流程脆弱**（#90722、#90687、PR #90746背景）：用户kangarooo报告更新到20.4后版本显示异常；qapdex-maker报告当天安装全量失败。结合PR #90746对"12分钟更新挂起"事件的描述，2026-08-20的更新/安装链路存在多环节问题，影响面较广。
- **IPv6环境被误伤**（#38048）：DNS64/NAT64是IPv6过渡场景的常见机制，用户Thinkscape在正常网页抓取中遇到误拦截，说明URL安全模块对现代网络环境的适配不足。
- **cron任务静默失败**（#88655、#78984）：多个用户报告cron任务在无告警情况下长时间静默失败，对依赖定时自动化的用户影响极大。

**满意点：**

- Hermes团队对社区反馈的响应速度较快：多个当日创建的Issue（#90687、#90722）和事件（Windows更新挂起）当天即有修复PR出现（#90746、#90753），说明项目健康度较好。
- 竞品功能的快速吸收（/status增强、composer占位提示）表明项目迭代节奏积极。

## 8. 待处理积压

以下Issue长期开放、近期仍被社区活跃讨论但无明确修复计划，提醒维护者关注：

- **[#28987] Dashboard blank page on native Windows (JS served as text/plain)** — 创建于2026-05-19至今约3个月未关闭，P2级Windows平台bug。
- **[#39609] --initial-status blocked 自动提升绕过审批** — 创建于2026-06-05，P3级但涉及工作流安全，8条评论讨论至今无修复PR。
- **[#38048] url_safety误伤DNS64/NAT64地址** — 创建于2026-06-03，P2级且影响正常功能的可用性。
- **[#5257] 通用ACP客户端提案** — 24条评论、23个👍，社区需求强烈但始终无对应PR或官方回应。
- **[#88655] Scheduler-level cron错误绕过failure_nudge告警** — P1级高严重度，目前只有scale-to-zero空闲判定的相关PR（#90761），告警旁路的修复未见对应PR。

---

*日报数据来源：NousResearch/hermes-agent GitHub 仓库，数据抓取时间 2026-08-20。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-20

## 1. 今日速览

PicoClaw 项目近24小时处于**中等活跃度**状态：无新 Issues 提交或关闭，但 PR 通道有 4 条更新，其中 3 条处于开放待合并状态，1 条已关闭。当前无新版本发布，核心关注点集中在 LINE 通道配置修复、Telegram 私聊主题支持和路由代理上下文管理三个方向。一个值得注意的信号是：3 条开放 PR 中 2 条已被标记为 stale（超过两周未获得合入或更新），说明维护者对 PR 的响应速度可能存在瓶颈。整体来看，项目处于**积累变更、等待合并**的阶段，社区提交活跃但合入效率有待提升。

---

## 2. 版本发布

**无**。过去24小时内没有新版本发布，也没有预发布或 RC 版本信息。

---

## 3. 项目进展

**今日合并/关闭 1 条 PR：**

- **[#3341] [CLOSED] feat(telegram): add interactive command UX and formatted ephemeral fallback** · 作者: As-tsaqib · 创建/关闭: 2026-08-19
  链接: https://github.com/sipeed/picoclaw/pull/3341
  
  该 PR 针对 Telegram 通道的命令交互体验做了两项改进：(1) `/memory` 等命令不再要求完整的 CLI 风格子命令语法，降低了认知负担；(2) 对 `/help` 的默认输出做了精简，将完整子命令说明改为格式化格式并支持临时消息（ephemeral）回退。该 PR 在同一天内完成创建和关闭，合入效率高，表明 Telegram 用户体验优化是当前维护者重视的方向。

**待合并的 3 条 PR 仍在积累中**（详见下文"待处理积压"），项目整体处于功能改进批量待合入的状态。

---

## 4. 社区热点

当前没有出现评论数较高的热点讨论（各 PR 评论数据均未显示）。但从 PR 的内容和标签来看，**两个方向最能反映社区诉求**：

1. **[#3316] [stale] 路由代理的上下文管理缺陷** · 作者: j-v
   链接: https://github.com/sipeed/picoclaw/pull/3316

   该 PR 揭示了实际使用场景中的核心痛点：用户配置 dispatch 规则将 agent 路由到特定 discord 频道后，agent **完全不记忆之前的消息**，且自动压缩（auto-compaction）功能在多条消息后**从未触发**。这直接指向了多通道路由场景下上下文管理的可靠性问题，是影响核心体验的缺陷。

2. **[#3315] [stale] 支持私聊 bot 的 Telegram 主题（topics）** · 作者: genuss
   链接: https://github.com/sipeed/picoclaw/pull/3315

   该 PR 指出 PicoClaw 仅在 `Chat.IsForum` 为 true 时识别 Telegram 主题，导致私有聊天中启用了 forum topic mode 的 bot 无法正确解析主题。属于 Telegram 通道的功能覆盖遗漏。

**诉求分析**：两条 stale PR 分别涉及"多通道路由下上下文丢失"和"Telegram 主题兼容性"，都反映了真实用户在多平台部署中遇到的边界场景问题，且提交均已超过两周未获合入，建议维护者优先审阅。

---

## 5. Bug 与稳定性

以下按严重程度排列：

| 严重程度 | 描述 | PR / 状态 |
|---------|------|-----------|
| 🟠 高 | 路由 agent 在 discord 频道内不记忆消息，自动压缩永不触发，导致长对话完全丧失上下文 | [#3316](https://github.com/sipeed/picoclaw/pull/3316) — fix PR 已提交，stale 待合入 |
| 🟡 中 | LINE 通道声明了 `webhook_host` / `webhook_port` 配置项并默认填充，但实际无任何代码读取，造成配置误导 | [#3329](https://github.com/sipeed/picoclaw/pull/3329) — fix PR 已提交，开放中 |
| 🟢 低 | Telegram 私聊中 bot 启用了 forum topic 模式时无法识别主题 | [#3315](https://github.com/sipeed/picoclaw/pull/3315) — fix PR 已提交，stale 待合入 |

没有发现崩溃类或回归类 Bug 的汇报。

---

## 6. 功能请求与路线图信号

值得关注的路线图信号：**Telegram 通道交互体验的迭代方向**。

今日关闭的 PR [#3341](https://github.com/sipeed/picoclaw/pull/3341) 将 `/memory` 等命令从 CLI 语法简化为交互式引导，同时为 `/help` 输出增加了格式化与临时消息回退，暗示项目正在向"**降低非技术用户的命令使用门槛**"方向演进。结合仍在等待合入的 [#3315](https://github.com/sipeed/picoclaw/pull/3315)（Telegram 主题支持），可以合理推断 **Telegram 通道的完整性和易用性**是下一版本的重点改进区域之一。

此外，[#3329](https://github.com/sipeed/picoclaw/pull/3329) 对 LINE 通道"无效配置项"的处理方式（改为警告而非静默填充）体现了对配置健壮性的关注，这类防护性改进有可能与后续配置校验的重构一起纳入后续版本。

---

## 7. 用户反馈摘要

由于当前没有活跃的 Issues 评论区数据，以下从 PR 描述中提取真实用户的反馈与痛点：

- **路由场景上下文丢失（用户 j-v）**：通过 dispatch 规则在 discord 频道中路由 agent 后，"wasn't remembering anything from previous messages"，且"auto-compaction never triggered regardless of the number of messages"。这反映了多通道路由 + 上下文管理的组合场景下，用户对 agent 对话连续性的高期望值与实际体验之间的落差。
- **Telegram 私聊主题缺失（用户 genuss）**：在私人聊天中启用论坛主题模式的 bot 无法正确识别话题，说明 Telegram 通道的功能实现与官方 API 能力存在覆盖差距。
- **LINE 配置误导（用户 ex-takashima）**：`webhook_host` / `webhook_port` 被声明、默认化并绑定环境变量，但"nothing reads them"，用户按配置设置后实际不生效，属于影响部署体验的文档与实现不一致问题。
- **Telegram 命令 UX（用户 As-tsaqib）**：指出 `/memory` 等命令"requires full subcommand grammar (CLI-style)"认知负担高，且"/help command output is overly verbose because it displays full subcommands"。该反馈已获修复并被合并。

**整体痛点画像**：用户关注点集中在多通道（Discord/Telegram/Line）下功能完整性和配置一致性上，交互体验的简化需求正在上升。

---

## 8. 待处理积压

以下 PR 已开放较长时间且未获得合入或维护者响应，建议优先处理：

| PR | 主题 | 开放时长 | 状态 | 链接 |
|----|------|---------|------|------|
| #3316 | 路由 agent 上下文管理（历史、压缩、seahorse bootstrap）修复 | 自 2026-08-03 起，17 天 | stale | [查看](https://github.com/sipeed/picoclaw/pull/3316) |
| #3315 | 支持私聊 bot 的 Telegram 主题 | 自 2026-08-03 起，17 天 | stale | [查看](https://github.com/sipeed/picoclaw/pull/3315) |
| #3329 | LINE 通道对无效 webhook 配置改为警告而非填充 | 自 2026-08-11 起，9 天 | open（上次更新 08-19） | [查看](https://github.com/sipeed/picoclaw/pull/3329) |

其中 #3315 和 #3316 均已达到 stale 状态，建议维护者尽快确认是否合入、打回或指派 reviewer，避免社区贡献者的积极性受影响。#3329 虽仅 9 天，但描述清晰、修复目标明确（修复 #3328），也建议在近期审阅。

---

*本日报基于 PicoClaw GitHub 仓库 2026-08-20 的公开数据自动生成，仅涵盖数据概览中提供的信息。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-20

---

## 1. 今日速览

NanoClaw 今日活跃度处于**高位**：24 小时内 30 条 PR 更新（23 条已合并/关闭，7 条待处理）和 4 条 Issue 动态。核心团队主导了多项关键修复，包括 **Slack 流程恢复（#3366）、agent mailbox 接缝合并（#3349）、Node 26 兼容性修复（#3360）**，显示项目正积极应对新 Node 运行时的生态变化。社区贡献者在 8 月 19 日集中提交了 3 个高质量 bug 报告（Dial 短信状态、安装脚本、Node 26 兼容），其中 Node 26 兼容问题已被核心团队在 24 小时内修复并合并（PR #3360）。Dial 频道适配器相关 PR（#3041、#3050）已持续开放 6 周仍待合并，值得关注。

---

## 3. 项目进展

以下为今日已合并/关闭的重要 PR：

| PR | 标题 | 类型 | 影响 |
|---|---|---|---|
| [#3366](https://github.com/nanocoai/nanoclaw/pull/3366) | fix(slack): restore agent flow after mailbox refactor | 修复 | 修复 #3349 引入的 Slack 回归，迁移 payload 至新 mailbox API |
| [#3349](https://github.com/nanocoai/nanoclaw/pull/3349) | feat: add agent mailbox seam and registry | 功能 | 新增 agent mailbox 接缝与注册表，为 NanoClaw 与其运行 agent 的通信提供统一基础设施 — **标志性架构变更** |
| [#3363](https://github.com/nanocoai/nanoclaw/pull/3363) | fix(memory): notify resumed turns when memory files change | 修复 | 解决多会话间 memory 文件变更不同步、旧答案无限延续的问题，无需重启即可生效 |
| [#3365](https://github.com/nanocoai/nanoclaw/pull/3365) | fix(setup): manage template agents after install | 修复 | 安装后模板 agent 管理流程修正 |
| [#3360](https://github.com/nanocoai/nanoclaw/pull/3360) | fix: support current Node runtimes | 修复 | better-sqlite3 11.10.0 → 13.0.3；Node 最低版本 20 → 22；修复 uvx/npx 兼容 — 对应 #3359 |
| [#3317](https://github.com/nanocoai/nanoclaw/pull/3317) | Log warning for unrecognized engage_mode instead of silent drop | 修复 | 关闭 #2606，未识别模式将记录警告而非静默丢弃消息 |
| [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) | fix(tasks): keep run logs for task rows firing in chat sessions | 修复 | 聊天会话中触发的 task run 日志不再丢失 |
| [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) | bump @openai/codex pin 0.138.0 → 0.146.0 | 修复 | **时效性关键** — GPT-5.4 将于 2026-08-31 从 Codex 退役，提前升级避免中断 |
| [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | feat(cli): accept bounded JSON from stdin | 功能 | 为 ncl 客户端新增 `--stdin-json` 输入模式，支持有界结构化参数传递 |
| [#3362](https://github.com/nanocoai/nanoclaw/pull/3362) | fix: validate Slack agent flow prerequisites | 修复 | 强制 `declineAndNotify` 覆盖契约前置检查 |
| [#3361](https://github.com/nanocoai/nanoclaw/pull/3361) | fix: expose decline notification overrides | 修复 | 为 `declineAndNotify` 接缝新增 `dedupeKey`、`declineText`、`fyiText` 可选输入 |

**关键进展判断**：今日最大的架构推进是 **mailbox seam（#3349）** 的合并，它将成为 NanoClaw 与其托管 agent 之间的通信基础层。其次是 **Node 26 兼容修复（#3360）** 的快速跟进，24 小时内从 Issue 报告（#3359）到修复合并，体现了项目对生态兼容的高度响应。11 个重要 PR 在同一天合并，整体项目推进速度显著。

---

## 4. 社区热点

由于 PR 评论数据未提供，以 Issue/PR 时间密集度和影响面作为代理指标：

**热点 1：Node 26 生态兼容**（三连击）
- [#3359（Issue）](https://github.com/nanocoai/nanoclaw/issues/3359) — 报告 better-sqlite3 无法在 Node 26 下编译
- [#3360（PR）](https://github.com/nanocoai/nanoclaw/pull/3360) — 核心团队修复（已合并）
- [#3354（Issue）](https://github.com/nanocoai/nanoclaw/issues/3354) — 非登录 SSH 环境下安装脚本的 PATH 假设问题
- [#3299（PR）](https://github.com/nanocoai/nanoclaw/pull/3299) — OpenAI Codex GPT-5.4 退役（8/31）前的 pin 升级

**分析**：今日社区热点高度集中在**安装与运行环境健壮性**上。多个问题源于同一个模式 — setup 脚本对交互式登录 shell 的假设不成立（非登录、headless、PATH 未初始化）。这反映了 NanoClaw 用户群体正从开发者本机向服务器/CI 环境扩展，安装体验的"零交互场景"支持成为刚需。

**热点 2：Dial 频道集成**（长期热度）
- [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) — Dial 频道适配器（SMS + AI 语音），已开放 **38 天**
- [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) — 配套的 setup wizard 集成，同样开放 38 天
- [Issue #3353](https://github.com/nanocoai/nanoclaw/issues/3353) — Dial 短信被运营商拒收后仍标记为已送达

**分析**：Dial 集成是当前社区最关注的新频道功能，但两个 PR 长时间未被合并（可能因为 #3349 的 mailbox 接缝改变了底层架构）。建议维护者明确告知贡献者是否需要 rebase 或分批合并。

---

## 5. Bug 与稳定性

按严重程度排列：

**高 — 数据完整性**
- [#3353（OPEN）](https://github.com/nanocoai/nanoclaw/issues/3353) **Dial 短信被运营商拒收后仍记录为 delivered** — 状态不可逆转，重试预算失效，直接导致用户与客户沟通失败后无法感知。**暂无 fix PR**。

**中 — 功能静默丢失**
- [#2606（CLOSED）](https://github.com/nanocoai/nanoclaw/issues/2606) engage_mode='always' 静默丢弃所有消息 — **已修复**（PR #3317），改为记录警告而非静默丢弃。

**中 — 安装阻塞**
- [#3359（OPEN）](https://github.com/nanocoai/nanoclaw/issues/3359) Node 26 + better-sqlite3 编译失败导致安装中断 — **已修复**（PR #3360：升级至 13.0.3）。注意新版本要求 Node ≥ 22。
- [#3354（OPEN）](https://github.com/nanocoai/nanoclaw/issues/3354) 非登录 SSH 安装产生 0 字节 channel 文件 + PATH 修复顺序错误 — **暂无 fix PR**。影响 headless 服务器部署场景。

**中 — 回归**
- [#3366（CLOSED）](https://github.com/nanocoai/nanoclaw/pull/3366) mailbox 重构破坏 Slack agent 流程 — **已修复并合并**，配合 #3361、#3362 形成完整修复链。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 状态 | 判断 |
|---|---|---|---|
| **Dial 频道（SMS + 语音呼叫）** | [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)、[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 开放 38 天 | 功能完整（适配器 + wizard + 技能），是下一版本最高概率入选功能；需处理与 mailbox 接缝的兼容 |
| **Context.dev MCP 技能** | [PR #3364](https://github.com/nanocoai/nanoclaw/pull/3364) | 今日新开 | 新提交的 utility skill，需求明确（MCP 生态扩展），有望快速合入 |
| **Agent mailbox 接缝** | [PR #3349](https://github.com/nanocoai/nanoclaw/pull/3349)（已合并） | 已完成 | 为未来 agent 间通信、外部系统接入打下基础，是架构级铺垫 |
| **CLI 有界 JSON 输入** | [PR #3218](https://github.com/nanocoai/nanoclaw/pull/3218)（已合并） | 已完成 | 提升 CLI 可编程性与安全性，为自动化脚本提供结构化输入能力 |
| **groups config add-mount 支持 --rw** | [PR #3149](https://github.com/nanocoai/nanoclaw/pull/3149) | 开放 23 天 | 小而实用的 CLI 增强，等待维护者 review |

---

## 7. 用户反馈摘要

> 注：当前 Issue 评论为 0，以下观点提炼自 Issue 描述与 PR 摘要中的用户问题阐述。

**痛点 1：静默失败是最糟糕的失败方式**（来自 #2606）
> "engage_mode='always' 存储到数据库后，evaluateEngage() 却没有对应处理分支，所有消息被静默丢弃且原因记录为 no_agent_engaged。"

用户强调的不是 bug 本身，而是**静默性** — 没有任何日志或警告告知配置无效。修复方向（PR #3317）正是改为记录警告，符合用户预期。

**痛点 2：安装脚本对真实环境假设过强**（来自 #3354）
> "在干净机器上通过非登录 SSH 会话安装时，~/.local/bin 尚未加入 PATH，git-show 复制失败产生 0 字节文件，且 onecli 检查在 PATH 修复之前就执行了。"

安装脚本假设了交互式登录环境，在无头服务器/CI 容器中必然失败。这是追求"一条命令安装"的项目常见陷阱，需要为无交互场景提供 fallback。

**痛点 3：跨会话知识不同步**（来自 PR #3363 描述）
> "在一个会话中教会 agent 某件事，其他会话却一直用旧版本回答，且重启无效。"

memory 文件变更通知缺失导致多会话间事实不一致，对核心用户体验（agent 作为长期助手）影响直接，修复价值高。

**痛点 4：外部服务状态变更无法回传**（来自 #3353）
> "Dial 接受了短信发送但运营商之后拒绝，系统不会再审视这个决定，错误标记为 delivered。"

这是**外部集成状态同步**的经典问题 — 单次确认不足以代表最终结果，需要补偿机制。

---

## 8. 待处理积压

**长期未合并的 PR（需维护者注意）**

| PR | 标题 | 开放时长 | 建议 |
|---|---|---|---|
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | Dial 频道适配器（SMS + AI 语音） | 38 天 | 与 #3050 配套，建议与 #3349 的 mailbox 架构对齐后合并或给出明确修改方向 |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | Dial 集成 setup wizard + 技能 | 38 天 | 同上 |
| [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) | CLI groups config add-mount 添加 --rw | 23 天 | 小改动，建议快速 review |

**无 fix 的 OPEN Issue（需分配）**

| Issue | 标题 | 年龄 |
|---|---|---|
| [#3353](https://github.com/nanocoai/nanoclaw/issues/3353) | Dial 短信拒收后误标 delivered | 1 天（新） |
| [#3354](https://github.com/nanocoai/nanoclaw/issues/3354) | 安装脚本非登录环境问题 | 1 天（新） |
| [#3359](https://github.com/nanocoai/nanoclaw/issues/3359) | Node 26 编译失败（已有 fix，可关闭） | 1 天 |

**#3359 建议关闭**：PR #3360 已合并修复，且 Node 最低版本提高至 22 — 这是用户需要注意的**潜在破坏性变更**，建议在下次 CHANGELOG 中显著标注。

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 响应速度 | ★★★★★ | Issue 报告 → 修复合并最快 24 小时内完成（#3359→#3360） |
| 核心团队投入 | ★★★★★ | 今日 10+ 个核心团队 PR 合并，架构级工作（mailbox）持续推进 |
| 社区活跃度 | ★★★★☆ | 外部贡献者活跃，但集中报告问题为主，功能贡献较少 |
| 积压风险 | ★★★☆☆ | Dial PR 已悬置 38 天，存在 stale 风险 |

**整体判断**：项目处于**高速迭代期**，核心团队主导的架构重构（mailbox seam）与生态兼容修复（Node 26、Codex 升级）同步推进，响应速度出色。主要风险点是外部大功能 PR（Dial）的长期悬置可能打击贡献者积极性，建议维护团队尽快给出明确处理方案。


</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-20

## 1. 今日速览

过去 24 小时内，NullClaw 项目整体活跃度较低：未产生新的 Issue 或版本发布，但有 1 个待合并的 PR（#989）提交，旨在修复 README 中损坏的 star history 图表。项目处于正常的渐进迭代节奏，无重大事件或用户报告的问题涌入，社区交互量较小。PR #989 指向基础设施可靠性修复，这是维护健康的积极信号。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

过去 24 小时内无 PR 被合并或关闭。但有一个新的待合并 PR 值得关注：

- **[PR #989] fix: restore broken star history chart** — [查看 PR](https://github.com/nullclaw/nullclaw/pull/989)  
  由 **FaintFlower** 创建于 2026-08-19，目前处于待合并状态。该 PR 修复了 README 中的 star history 图表无法显示的问题。问题根源在于依赖 GitHub stargazer API，该 API 存在访问限制，导致图表数据无法正常加载。修复方案是将数据源切换至 star-history.dera.page（一个无需 token 的可靠替代服务）。

**项目推进评估**：此 PR 虽未合并，但标志着项目维护者对文档/展示层可靠性的关注。修复属于"小而必要"的基础设施维护，不涉及核心功能改动，但有助于提升项目对外展示信息的可用性。

---

## 4. 社区热点

过去 24 小时内无 Issue 活跃，唯一出现的 PR #989 目前无评论、无 👍 反应，社区讨论热度极低。该 PR 反映的诉求是：**项目作为开源自托管 AI 助手，README 数据可视化的可靠性直接影响用户对项目活跃度的第一印象**。star history 图表作为展示社区采用度的常用窗口，其损坏可能影响潜在用户对项目的信任判断。

---

## 5. Bug 与稳定性

过去 24 小时内仅报告/修复 1 个问题：

| 严重程度 | 问题描述 | 状态 | 修复 PR |
|---------|---------|------|---------|
| 低（展示层） | README 中 star history 图表失效，因 GitHub stargazer API 访问受限 | 已提交修复方案，待合并 | **[PR #989](https://github.com/nullclaw/nullclaw/pull/989)** |

该问题不影响产品核心功能，仅影响项目文档页面的展示完整性。修复方案已就绪，合并后即可解决。

---

## 6. 功能请求与路线图信号

过去 24 小时内无新的功能请求提交。

**路线图参考信号**：PR #989 虽为 Bug 修复，但隐含着对"外部 API 依赖最小化"的运维思路——使用无需认证的替代数据源，降低对外部服务的耦合。这一方向可能与项目未来的可部署性、可靠性优化路线相契合，可关注是否会在后续架构调整中延续此模式。

---

## 7. 用户反馈摘要

过去 24 小时内无 Issue 评论或讨论。唯一可提取的"用户反馈"来自 PR #989 作者的提交说明：指出 GitHub stargazer API 存在访问限制，这暗示部分依赖 GitHub API 的展示层功能在部分网络环境下可能不可用或受限。对于自托管用户而言，外部 API 的可用性差异是一个潜在的体验痛点，值得项目维护者关注。

---

## 8. 待处理积压

- **[PR #989] fix: restore broken star history chart** — [查看 PR](https://github.com/nullclaw/nullclaw/pull/989)  
  提交于 2026-08-19，目前仍为待合并状态。该 PR 修复的是一个明确且影响直接的展示层问题（README 图表失效），建议维护者及时 review 并合并，避免修复积压。

---

*本报告基于 2026-08-20 前 24 小时（截至 2026-08-20）的 NullClaw GitHub 仓库数据生成。所有链接均指向原始 GitHub 页面。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-20

## 1. 今日速览

IronClaw 项目今日保持高活跃度：过去 24 小时达成 40 条 PR 更新（23 条待合并）和 13 条 Issue 更新，并发布稳定版 v1.3.0。核心方向聚焦于持久化沙箱、通知中心、automations 创建预检及 memory 定期整理等 v1.4.0 功能开发，其中 "持久化 per-user 沙箱"（#7732）已推进至首个实现 PR（#7764）。讨论热度集中在 Issue #7732（8 条评论）与 #7764/#7699 等 XL 级 PR 管线中。项目整体状态健康，进入 v1.4.0 功能密集落地阶段。

## 2. 版本发布

**ironclaw-v1.3.0（2026-08-19）** — 由 `1.3.0-rc.2` 稳定转正。包含 RC2 已修复的升级与容器问题，并覆盖 RC1 全部范围。

**关键修复（升级路径）**：从 1.2 升级时，现在能够接受并保留已发布扩展的 `activation_state` 字段，不再在 sta（状态恢复）阶段崩溃循环。1.2 → 1.3 升级存在此修复前会崩溃的风险，已有 1.2 部署的用户应尽快升级。

## 3. 项目进展

今日合并/关闭的 PR 集中在修复与基础设施层：

| PR | 内容 | 影响 |
|---|---|---|
| [#7761](https://github.com/nearai/ironclaw/pull/7761)（已关闭） | 收敛 provider 诊断栈：三个错误边界共享 `DispatchAuthRequirement`，boxed 化 | 降低 provider-auth 错误的内存与栈足迹 |
| [#7753](https://github.com/nearai/ironclaw/pull/7753)（已关闭） | capability 调度失败时保留 worker-local 状态，使 `DefaultHostRuntime` 能物化 `Failed` 终止边 | 修复 dispatch 失败时状态丢失问题 |
| [#7759](https://github.com/nearai/ironclaw/pull/7759)（已关闭，bot） | 夜间代码库知识图谱刷新 | 基础设施例行更新 |
| [#7751](https://github.com/nearai/ironclaw/pull/7751)（已关闭） | 持久化 per-user 容器（Docker Exec）第一步（#7732） | 旧版本实现已合并，随后由 #7764 迭代 |

发布说明确认 v1.3.0 覆盖 RC1 全部范围，即此前两个 RC 周期积累的升级兼容与容器修复已全部稳定交付。

## 4. 社区热点

**Issue #7732 — [EPIC] Persistent per-user sandbox with iron-proxy**（[链接](https://github.com/nearai/ironclaw/issues/7732)）以 8 条评论位居今日讨论榜首。核心诉求：当前 `builtin.shell` 虽经 Docker 路由，但每次命令都创建并销毁容器，不是"持续存在的用户电脑"。该 EPIC 的两步实现（#7764/#7751）都在今日活跃，说明团队响应速度极快。

**Issue #5998 — MCP server 本地传输缺失**（[链接](https://github.com/nearai/ironclaw/issues/5998)）虽创建近 40 天，但仍在 8/19 有更新。诉求：`stdio` 被直接拒绝、loopback HTTP 被 https-only 规则拦截，设备上本地 MCP server 完全无法连接。该问题目前仅有 1 条评论、无修复 PR 指向，社区关注度有限但属于功能性缺口。

## 5. Bug 与稳定性

按严重程度排列：

**P2 — Copilot MCP 扩展安装失败**（[#7745](https://github.com/nearai/ironclaw/issues/7745)）：目录重复（两个 Copilot 条目）、`auth_required` 错误、token 类型不明确。影响 Railway 测试实例用户。无对应 fix PR。

**P3 — Cron job UI 缺少编辑/测试按钮**（[#7744](https://github.com/nearai/ironclaw/issues/7744)）：用户只能查看 cron job，无法修改或手动触发。无对应 fix PR。

**未分级 — IronClaw "突然卡死并停止工作"**（[#7748](https://github.com/nearai/ironclaw/issues/7748)）：来自 Slack 自反馈通道的用户报告，暂无复现细节与评论跟进。

**已修复（今日合并）**：
- capability 调度失败时状态丢弃（[#7753](https://github.com/nearai/ironclaw/pull/7753)）
- provider 诊断栈足迹过大（[#7761](https://github.com/nearai/ironclaw/pull/7761)）
- v1.3.0 修复 1.2 → 1.3 升级崩溃（Release Notes）

## 6. 功能请求与路线图信号

**自动化（Automations）体系** 是当前最集中投入的方向，指向 v1.4.0：
- **创建预检与运行边界**：[#7742](https://github.com/nearai/ironclaw/issues/7742) + [PR #7743](https://github.com/nearai/ironclaw/pull/7743) — 建立 `ready` / `needs_setup` / `needs_input` 协议，区分"创作未来运行"与"立即执行"
- **run-now 手动触发**：[PR #7729](https://github.com/nearai/ironclaw/pull/7729) — 手动触发不破坏原有调度，含 domain-separated provenance

**持久化沙箱**（#7732）：per-user 容器 + Docker Exec，配合后续 iron-proxy 集成 [#7764](https://github.com/nearai/ironclaw/pull/7764)（今日新建）。

**通知中心三件套**（今日全部在活跃队列）：
- 后端契约与存储：[#7688](https://github.com/nearai/ironclaw/issues/7688)（已关闭）
- run gate 事件发布：[#7699](https://github.com/nearai/ironclaw/pull/7699)
- WebUI 通用化：[#7698](https://github.com/nearai/ironclaw/pull/7698)
- run 结果权威发布：[#7700](https://github.com/nearai/ironclaw/pull/7700)

**Memory 可插拔化**：MCP-backed provider（[PR #7661](https://github.com/nearai/ironclaw/pull/7661)）与定期整理（"dreaming"）首片（[PR #7765](https://github.com/nearai/ironclaw/pull/7765)）——后者是 #7276 的首个实现切片。

## 7. 用户反馈摘要

- **"IronClaw got confused and stopped working"**（[#7748](https://github.com/nearai/ironclaw/issues/7748)）：来源为 Slack #x-ai-product-feedback 频道（bianca.guimaraes-chadwick，8/19 15:24 UTC）。用户未提供可复现上下文，需引导补充日志与环境信息。
- **MCP 本地 server 不可用**（[#5998](https://github.com/nearai/ironclaw/issues/5998)）：用户明确表达**设备上本地 MCP server 无法接入**的痛点，`stdio` 与 `http://127.0.0.1` 两种路径均被拒绝，说明本地开发场景的传输能力缺失。

## 8. 待处理积压

值得维护者关注的长期未决事项：

- **[#5998](https://github.com/nearai/ironclaw/issues/5998)（创建 2026-07-11，已悬置 40 天）**：本地 MCP 传输问题，无 assignee、无 PR 指向。属于明确功能缺口，建议评估是否纳入 v1.4.0 范围。
- **PR #7491（omp core-tool 契约，XL）**：创建于 8/11，今日仍为 OPEN，等待合并超过一周，涉及 6 个编码工具名称的统一，关联 #7392 的 slices 1-4。
- **PR #7661（MCP-backed memory provider）**：创建于 8/14，OPEN 状态已 6 天，XL 级改动，与 #7765 存在功能关联，需确认合并顺序。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-08-20**


## 1. 今日速览

LobsterAI 项目今日活跃度**中等**。过去 24 小时内有 2 条 Issue 更新（均为历史遗留的 stale Issue 收到新活动），8 条 PR 更新，其中 7 条已合并/关闭、1 条仍在等待合并。值得关注的是，多个四月提交的历史 PR 于今日集中关闭（预计为维护者批量清理），另有 1 个新提交的 Windows 安装器修复 PR 在创建当日即被合并，说明维护通道仍然畅通。今日无新版本发布。

**活跃度评估**：维护者仍在处理积压 PR，但新 Issue 与 PR 提交速度放缓，项目处于**存量消化期**。


## 3. 项目进展

今日共合并且关闭 **7 个 PR**，其中多数为历史遗留（4 月初提出、今日集中合并），覆盖 Agent 交互逻辑、文档站点、工程化脚本等多个方面。这些 PR 的落盘意味着以下功能将进入主线：

- **Write 工具文件卡片与分屏预览面板**（[PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553)）：为 Write 工具调用添加内联文件卡片及可拖拽宽度（320–900px）的右侧预览面板，支持 Markdown 渲染、HTML 沙箱 iframe、SVG 内联、图片展示与代码语法高亮。Read 工具保持原有摘要展示，避免批量读取时产生视觉噪音。对应 Issue #1552，是写作与文档生成场景体验的重要补全。
- **Agent 技能徽章实时同步**（[PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545)）：修复修改技能列表并保存后，当前对话的技能徽章不立即更新、需切换 Agent 才能刷新的问题（Fixes #1502）。
- **引擎启动超时交互**（[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)）：OpenClaw 引擎启动超 30 秒后自动显示"取消启动"与"查看日志"按钮，替代原先 5 分钟硬超时无操作的体验。
- **设置面板侧栏搜索**（[PR #1557](https://github.com/netease-youdao/LobsterAI/pull/1557)）：设置弹窗左侧栏增加搜索框，支持中英关键词分词过滤、多关键词 AND 匹配，被过滤掉当前 Tab 时自动切换到第一个可见分类。
- **macOS 打包脚本兼容**（[PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555)）：修复 `npm run dist:mac:x64` 因 macOS 不支持 `sha256sum` 而失败的问题，加入 `shasum` 兼容。
- **Windows 安装器静默 Banner 修复**（[PR #2512](https://github.com/netease-youdao/LobsterAI/pull/2512)，今日新提交当日合并）：仅对 dictbind 双击静默安装通道隐藏插件自带静默 Banner，保留其他静默安装路径行为，UAC 与 RequestExecutionLevel 行为不变。
- **Agent 编辑后无法切回聊天界面**（[PR #1560](https://github.com/netease-youdao/LobsterAI/pull/1560)）：修复在"我的 Agent"界面编辑后点击原 Agent 无法返回聊天界面的问题，根因是 `SidebarAgentList` 的 `handleSwitch` 对 `agentId === currentAgentId` 直接 return，未调用 `onShowCowork()`。

*尚有一个 PR（[#1547](https://github.com/netease-youdao/LobsterAI/pull/1547)，定时任务通知渠道无法改回"不通知"的修复）仍在等待合并。*


## 4. 社区热点

今日讨论热度整体偏低，无高互动帖子。相对值得关注的是：

- **[Issue #1556](https://github.com/netease-youdao/LobsterAI/issues/1556)：IM 机器人配置指南链接 404**（2 条评论）。用户报告文档站 `LobsterAI-IM机器人配置指南.md` 链接失效。虽为文档小问题，但属于新用户 onboarding 的关键路径——配置指南 404 会直接阻断 IM 接入流程，建议优先处理。
- **[Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)：AI 产物 Markdown 预览及文件卡片支持**（1 条评论）。需求提出者为协作者 noransu，已通过 [PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553) 落地，今日合并，属"提了就做"的高效闭环。


## 5. Bug 与稳定性

今日共确认 3 个 Bug 类问题，按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🟠 中 | **Agent 编辑后无法切回聊天界面** — 点击原 Agent 仍停留"我的 Agent"页，影响核心交互流（[PR #1560](https://github.com/netease-youdao/LobsterAI/pull/1560)） | ✅ 已合并 Fix |
| 🟠 中 | **macOS x64 打包失败** — `sha256sum` 在 macOS 不可用导致无法产出安装包（[PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555)） | ✅ 已合并 Fix |
| 🟡 低 | **定时任务通知渠道无法改回"不通知"** — 表单初始化未优先检查 `delivery.mode`，下拉框残留旧渠道（[PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)） | ⏳ Fix 待合并 |

另有一条文档类问题（[Issue #1556](https://github.com/netease-youdao/LobsterAI/issues/1556)，IM 配置指南 404），严重度低但影响新用户接入，建议尽快修复链接或补充该页面。稳定性方面，引擎启动超时交互优化（[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)）也为启动卡死场景提供了用户逃逸出口。


## 6. 功能请求与路线图信号

- **AI 产物文件卡片 + 分屏预览**（[Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)）→ 已落地（[PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553)）。Issue 描述的用户画像是"写作、文档生成"重度场景——Agent 产出 Markdown/HTML/代码后需快速预览与操作，绕开"Read 读全文刷屏"或"切文件管理器"的折中方案。此为**明确的产品体验补全**，建议在 Release Notes 中重点提及，并观察社区反馈以确定后续增强方向（如下一步可能扩展到的附件卡片类型）。
- **引擎启动超时操作按钮**（[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)）→ 已落地。解决引擎启动卡住时用户只能干等 5 分钟的问题，是稳定性工程的重要一环。
- **设置面板搜索**（[PR #1557](https://github.com/netease-youdao/LobsterAI/pull/1557)）→ 已落地。设置 Tab 多到需要搜索，侧面说明产品功能面在扩大，后续可关注设置项的组织与分组。


## 7. 用户反馈摘要

今日收集到的直接用户反馈有限，综合 Issues 与 PR 描述提炼如下：

- **真实痛点**：Agent 写完文件后无法就地预览，需 Read 全文（刷屏）或手动切文件管理器——"写作、文档生成等场景下体验较差"（[Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)）；引擎启动卡住时无任何操作入口，只能等 5 分钟硬超时（[PR #1546](https://github.com/netease-youdao/LobsterAI/pull/1546)）；Agent 技能修改后需切换才能看到生效，易误导用户以为未保存成功（[PR #1545](https://github.com/netease-youdao/LobsterAI/pull/1545)）。
- **使用场景**：以写作、长文档生成为主的生产力场景；Windows 端安装器使用覆盖静默安装/企业分发路径（[PR #2512](https://github.com/netease-youdao/LobsterAI/pull/2512)）。
- **工具链痛点**：macOS 上执行 `npm run dist:mac:x64` 直接失败，影响开发者自打包分发的连续性（[PR #1555](https://github.com/netease-youdao/LobsterAI/pull/1555)）。


## 8. 待处理积压

- **[PR #1547](https://github.com/netease-youdao/LobsterAI/pull/1547)：定时任务通知渠道"不通知"选项失效修复**（open，创建于 2026-04-07）。根因定位清晰（`delivery.mode` 未优先检查），改动范围限定为表单初始化逻辑，风险低。该 Bug 影响用户将通知渠道改回"不通知"的核心操作，建议尽快 review 合并。
- **[Issue #1556](https://github.com/netease-youdao/LobsterAI/issues/1556)：IM 机器人配置指南 404**（open/ stale，创建于 2026-04-08）。新用户接入路径的关键文档链接失效，建议核实文档站部署或补链。
- **[Issue #1552](https://github.com/netease-youdao/LobsterAI/issues/1552)** 与 **[PR #1553](https://github.com/netease-youdao/LobsterAI/pull/1553)** 虽已闭环，但 Issue 状态仍为 open，建议维护者及时关闭以避免积压噪音。

---

**项目健康度总结**：今日无新版本、无新 Issue，7 个 PR 集中合并且其中含 2 个 Bug 修复与多项体验增强，说明维护节奏良好但输入放缓。1 个功能类 Bug 修复（PR #1547）仍滞留待合并，建议下一轮优先处理。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-20

## 1. 今日速览

Moltis 项目今日活跃度较高，24 小时内共处理 6 条 PR（5 条已合并/关闭）和 1 条 Issue（已关闭），并发布 1 个新版本（20260818.10）。今日合并的 PR 集中于 WhatsApp 集成修复（推送名称硬编码、回复提及识别）、HTTP 服务安全加固（Vault 鉴权，修复 CWE-306）、频道工具策略可配置化以及 README 星标图修复。项目在安全性和跨渠道体验上均有明显推进，整体健康度良好。

## 2. 版本发布

**20260818.10**（发布链接：moltis-org/moltis Releases）

- 更新内容：数据源未提供详细变更日志，无法确认具体包含的 PR。从时间线推断，可能包含今日合并的修复（如 Vault 鉴权、WhatsApp 修复等），但需查看 release notes 确认。
- 破坏性变更：无相关信息，暂无法评估。
- 迁移注意事项：无相关信息。

## 3. 项目进展

今日合并/关闭的 5 条 PR 从三个方向推进了项目：

- **安全加固**：[PR #1216](https://github.com/moltis-org/moltis/pull/1216)（penso）为 `POST /api/auth/vault/unlock` 和 `POST /api/auth/vault/recovery` 添加了 `AuthSession` 鉴权。此前 `is_public_path()` 对 `/api/auth/` 前缀整体放行，导致 Vault 解锁与恢复端点无需认证即可访问（CWE-306）。此修复关闭了 [Issue #1177](https://github.com/moltis-org/moltis/issues/1177)。
- **WhatsApp 集成体验修复**（3 条，均来自 vikng-dev）：
  - [PR #1218](https://github.com/moltis-org/moltis/pull/1218)：停止硬编码推送名称为 "Moltis"，使配置为 "Ada" 等名称的机器人不再在群聊中错误显示为 "Moltis"。
  - [PR #1217](https://github.com/moltis-org/moltis/pull/1217)：在 `mention_mode = "mention"` 模式下，将对机器人消息的回复视为"提及"，修复了回复被丢弃的问题。
  - [PR #1219](https://github.com/moltis-org/moltis/pull/1219)：使非可信轮次的工具调用上限可配置，修复 #1170 引入的硬编码策略导致公共受众的三个工具被意外移除的回归问题。
- **文档/社区基建**：[PR #1211](https://github.com/moltis-org/moltis/pull/1211)（CrustyMozarella）修复了 README 中失效的 Star 历史图表，因 GitHub API 限制改用替代数据源。

## 4. 社区热点

今日无高互动 Issue 或 PR（评论数普遍为 0）。相对值得关注的是：

- **PR #468**（[链接](https://github.com/moltis-org/moltis/pull/468)，jmikedupont2）是当前唯一处于打开状态（OPEN）的 PR，在 Windows 上使用 `cmd.exe /C` 替代 `sh -c` 执行 shell hooks。该 PR 创建于 2026-03-23，已积压近 5 个月，今日有更新，说明仍在推进中。其诉求明确：Windows 用户无法使用 shell hooks，属平台兼容性需求。
- **Issue #1177**（[链接](https://github.com/moltis-org/moltis/issues/1177)）为安全漏洞报告（Vault 解锁/恢复端点缺少认证），已于今日通过 PR #1216 修复关闭，社区无额外讨论。

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| **高（安全）** | [Issue #1177](https://github.com/moltis-org/moltis/issues/1177) | Vault 解锁/恢复端点缺少认证（CWE-306），未授权用户可访问敏感恢复接口 | ✅ 已有 [PR #1216](https://github.com/moltis-org/moltis/pull/1216) 修复，已合并 |
| **中（回归）** | [PR #1219](https://github.com/moltis-org/moltis/pull/1219) | #1170 引入的硬编码拒绝策略误删了公共受众注册的 3 个工具 | ✅ 已通过本 PR 修复（工具上限改为可配置） |
| **中（功能异常）** | [PR #1217](https://github.com/moltis-org/moltis/pull/1217) | 群聊中回复机器人消息被误判为"未提及"而丢弃 | ✅ 已修复 |
| **低（显示问题）** | [PR #1218](https://github.com/moltis-org/moltis/pull/1218) | WhatsApp 推送名称硬编码为 "Moltis"，机器人自定义名称不生效 | ✅ 已修复 |
| **低（文档）** | [PR #1211](https://github.com/moltis-org/moltis/pull/1211) | README 星标历史图失效 | ✅ 已修复 |

## 6. 功能请求与路线图信号

今日无新增功能请求 Issue。从已合并 PR 可观察到的路线图信号：

- **平台兼容性**：[PR #468](https://github.com/moltis-org/moltis/pull/468) 如果在后续合入，将补齐 Windows 上的 shell hooks 支持，这是一项已等待约 5 个月的功能补全，可能进入下一版本。
- **安全加固方向**：PR #1216 表明项目正在系统性地补齐各端点的鉴权覆盖，预计后续会有更多针对 `/api/auth/` 及其他公开路径的安全审计。
- **可配置性增强**：PR #1219 将硬编码的策略上限改为可配置项，方向上支持更多自定义部署场景，后续可能扩展到更多硬编码参数。

## 7. 用户反馈摘要

今日无新增用户评论。从近两天合并的 PR 可以间接提炼用户痛点：

- **WhatsApp 群聊体验**：用户配置的机器人名称（如 "Ada"）在群聊中显示为 "Moltis"，且回复机器人消息时消息被意外丢弃（[PR #1218](https://github.com/moltis-org/moltis/pull/1218)、[PR #1217](https://github.com/moltis-org/moltis/pull/1217)）。这两个问题均已修复，直接影响 WhatsApp 渠道的日常使用体验。
- **安全顾虑**：Issue #1177 的提交者在 Preflight Checklist 中确认已搜索现有 Issue 并使用最新版本，表明该用户在生产环境中遇到了未认证可访问 Vault 恢复接口的问题，属于安全敏感型用户，已获得及时修复。
- **Windows 平台支持**：PR #468 的作者明确测试了 Windows 环境，说明存在一批在 Windows 上使用 Moltis 的用户，shell hooks 不可用是他们的实际痛点。

## 8. 待处理积压

- **PR #468**（[链接](https://github.com/moltis-org/moltis/pull/468)，创建于 2026-03-23，已打开约 5 个月）：Windows 下 shell hooks 使用 `cmd.exe /C` 替代 `sh -c`。作者称已在 Windows 上测试通过。此 PR 涉及平台兼容性，长期未合并可能导致 Windows 用户持续受影响，建议维护者安排评审。
- 其余 Issue 和 PR 均已在合理时间内得到处理，无其他明显积压。

---

*报告数据来源：moltis-org/moltis GitHub 仓库，覆盖 2026-08-19 至 2026-08-20 的 24 小时动态。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-08-20** | 数据源：agentscope-ai/CoPaw (GitHub)

---

## 1. 今日速览

CoPaw 项目今日保持高强度迭代节奏：24小时内关闭/合并了31个 PR 和13个 Issue，同时有19个 PR 等待合并，新增10个活跃 Issue，并发布了 `v2.1.1-beta.1` 版本。开发侧重点为 Console 前端性能优化、会话级思考模式管理、QQ/钉钉渠道的会话隔离与上下文配置，以及自托管多用户 Hub 的落地。社区反馈集中在稳定性问题（模型中途停止、超时、数据库膨胀）和多渠道（QQ、钉钉）的增强需求。项目整体健康度良好，维护响应迅速，但长期未关闭的旧 Issue 仍有一定积压。

---

## 2. 版本发布

### v2.1.1-beta.1

- 来源：[Release v2.1.1-beta.1](https://github.com/agentscope-ai/CoPaw/releases)
- 更新内容：
  - **feat(console)**: 改进编辑器标签页溢出的导航体验（PR #6983）
  - **fix(providers)**: 降低 rate limiter 初始化日志级别，减少噪音（PR #6988）
- **破坏性变更**：无
- **迁移注意事项**：Beta 版本，建议测试环境验证后升级

---

## 3. 项目进展

今日合并/关闭的重要 PR 及意义：

| PR | 内容 | 意义 |
|---|---|---|
| [#6880](https://github.com/agentscope-ai/CoPaw/pull/6880) | **统一应用/插件/技能市场**：合并到共享 `/market` 页面 | 大幅改善市场入口的可用性，统一导航路径 |
| [#7174](https://github.com/agentscope-ai/CoPaw/pull/7174) | **持久化 Drivers 并发初始化**：工作区启动时并行加载 | 缩短启动时间，同时保持失败隔离和原子发布逻辑 |
| [#6371](https://github.com/agentscope-ai/CoPaw/pull/6371) | **下载器超时后继续 fallback**（首次贡献者） | 修复了 `wget`/`curl` 超时后不降级到 `urllib` 的缺陷 |
| [#7135](https://github.com/agentscope-ai/CoPaw/pull/7135) | **envs 原子写入 + 保留损坏文件** | 防止配置写入中断导致环境文件损坏 |
| [#7172](https://github.com/agentscope-ai/CoPaw/pull/7172) | **修补 website/creator 依赖漏洞**（vite 6.4.3、rollup 4.59.0 等） | 安全加固 |
| [#7166](https://github.com/agentscope-ai/CoPaw/pull/7166) | **qwenpawmail MCP 作为独立 sidecar 打包** | 隔离邮件 MCP 进程，提升打包与运行稳定性 |
| [#7161](https://github.com/agentscope-ai/CoPaw/pull/7161) | **Console 助手响应卡片增加 artifacts 展示** | 完善产物可视化 |

**整体评估**：项目在 Console 体验、启动性能、依赖安全、渠道稳定性四个维度均有实质推进，正处于功能整合与打磨阶段。

---

## 4. 社区热点

### 🔥 最热 Issue：[#6921 多步骤任务无提示中途停止](https://github.com/agentscope-ai/CoPaw/issues/6921)（10 评论）
- 用户 `rerbin` 反馈在 QwenPaw 2.1-beta2 + Windows 11 上，多步骤任务常以 "Now 2.1, 3.1, 3.2. Let me do all three." 等输出后无提示停止，需手动输入"继续"才能恢复。
- **诉求分析**：这是影响日常核心工作流的严重体验问题——Agent 自主执行中断却无信号，用户无法判断是完成、失败还是需要输入。背后反映的是 Agent 任务状态机与用户通知机制的缺失。

### 🔥 Issue [#7102 QwenPaw 冻结超过 10 分钟](https://github.com/agentscope-ai/CoPaw/issues/7102)（9 评论，已关闭）
- 使用 GLM 5.3 时桌面端长时间无 token 输出，疑似模型请求挂起。已关闭说明已处理或定位。

### 📌 Issue [#6643 任务产出物按任务分目录](https://github.com/agentscope-ai/CoPaw/issues/6643)（6 评论，已关闭）
- 用户 `rerbin` 提出目前所有任务产物堆在 `media` 目录下非常混乱，建议按任务建目录。该诉求已关闭，说明可能已实现或进入排期。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **高** | [#6921](https://github.com/agentscope-ai/CoPaw/issues/6921) | 多步骤任务无提示停止，需手动"继续" | ❌ 无 |
| **高** | [#7168](https://github.com/agentscope-ai/CoPaw/issues/7168) | `history.db` 被 `recall_history` expand 撑爆至 7.6GB，同一区间重复落库 | ❌ 无 |
| **高** | [#7162](https://github.com/agentscope-ai/CoPaw/issues/7162) | 流式输出 `httpx.ReadError` 导致偶发 `UNKNOWN_AGENT_ERROR`，`_get_httpx_retryable()` 漏掉 ReadError 不重试 | ❌ 无（已关闭，可能已修复） |
| **中** | [#6932](https://github.com/agentscope-ai/CoPaw/issues/6932) | 网络短暂中断恢复后 LLM 请求持续超时，必须重启进程 | ❌ 无 |
| **中** | [#7156](https://github.com/agentscope-ai/CoPaw/issues/7156) | Embedding health check 在 warm 后端仍超时（5s），timeout 硬编码无配置项 | ❌ 无 |
| **中** | [#7110](https://github.com/agentscope-ai/CoPaw/issues/7110) | 对话中无法下载的图片链接导致整个会话不可用 | ❌ 无（已关闭） |
| **低** | [#6826](https://github.com/agentscope-ai/CoPaw/issues/6826) | 助手消息结束时间显示异常（实际耗时 2min 显示几秒） | ❌ 无（已关闭） |
| **低** | [#7060](https://github.com/agentscope-ai/CoPaw/issues/7060) | `view_video` 2MB 硬编码上限，`max_inline_media_bytes` 不生效 | ✅ [#7061](https://github.com/agentscope-ai/CoPaw/pull/7061)（视频路径修复，仍开放中） |

**重点提示**：#7168 的 7.6GB 数据库膨胀属于数据完整性风险，#6921 的中断问题直接影响核心体验，建议优先排期。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue/PR | 信号强度 |
|---|---|---|
| **会话级思考模式（Off/Low/Medium/High）** | [PR #7163](https://github.com/agentscope-ai/CoPaw/pull/7163)（开放中） | 🔥 高，很可能进入下个版本 |
| **自托管多用户 Hub（本地 + Docker）** | [PR #7112](https://github.com/agentscope-ai/CoPaw/pull/7112)（开放中） | 🔥 高，重大架构升级 |
| **QQ 群定时主动消息** | [Issue #7159](https://github.com/agentscope-ai/CoPaw/issues/7159) | 🟡 中，配合 [PR #7169](https://github.com/agentscope-ai/CoPaw/pull/7169) 的会话隔离，QQ 渠道在快速完善 |
| **钉钉群聊上下文模式配置** | [Issue #7158](https://github.com/agentscope-ai/CoPaw/issues/7158) | 🟡 中 |
| **统一工具面板 + Web 终端** | [Issue #7013](https://github.com/agentscope-ai/CoPaw/issues/7013) | 🟡 中，产品愿景类 |
| **优化智能体切换下拉框** | [Issue #7179](https://github.com/agentscope-ai/CoPaw/issues/7179) | 🟢 低，UI 体验优化 |
| **优化 platform.agentscope.io 首页** | [Issue #7177](https://github.com/agentscope-ai/CoPaw/issues/7177) | 🟢 低，网页端操作便捷性 |

---

## 7. 用户反馈摘要

来自 Issues 评论的真实声音：

- **Agent 自主执行的可控性是最大痛点**：多个用户反映模型"自作主张"却无提示地停止（#6921），需要手动干预才能继续，说明任务执行链路的状态反馈机制亟需完善。
- **长会话性能问题困扰重度用户**：PR #7176 的提交信息印证了用户对长对话卡顿的普遍反馈。
- **幂等性与文件管理诉求强烈**：`media` 目录混乱（#6643）、中文文件名被转义（#6453）、视频被硬编码 2MB 截断（#7060）——用户希望产出物可管理、可读、大小可配置。
- **网络环境适配不足**：VPN 场景不可用（#6974）、短时网络中断后无法自动恢复（#6932），反映了国内用户实际使用环境的多样性需求。
- **QQ 群机器人能力被期待**：用户主动引用 QQ 官方开放的机器人新能力（定时推送、撤回消息），希望 CoPaw 跟进。

---

## 8. 待处理积压

以下为长期未关闭或需维护者关注的重要条目：

| 条目 | 创建时间 | 状态 & 备注 |
|---|---|---|
| [#6921](https://github.com/agentscope-ai/CoPaw/issues/6921) | 2026-08-12 | ⚠️ 8天未关闭，10 条评论，核心体验 Bug |
| [#6932](https://github.com/agentscope-ai/CoPaw/issues/6932) | 2026-08-12 | ⚠️ 8天未关闭，网络恢复后需重启的稳定性问题 |
| [#7013](https://github.com/agentscope-ai/CoPaw/issues/7013) | 2026-08-14 | 6天未关闭，大型产品功能建议，需产品团队评估排期 |
| [#7067](https://github.com/agentscope-ai/CoPaw/pull/7067) | 2026-08-16 | ⚠️ 首次贡献者 PR，4天未合并，建议维护者加速 review |
| [#7061](https://github.com/agentscope-ai/CoPaw/pull/7061) | 2026-08-15 | 首次贡献者 PR，修复 Responses API 视频传递缺陷，5天未合并 |

---

*本报告基于 CoPaw 仓库 2026-08-20 当日 GitHub 数据自动生成，所有链接均指向原文。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-08-20**

---

## 1. 今日速览

ZeroClaw 项目今日保持高度活跃，过去 24 小时内有 50 条 Issue 更新（44 条活跃、6 条关闭）和 50 条 PR 更新（46 条待合并、4 条已合并/关闭），无新版本发布。项目正围绕安全加固（SOP 权限合约、沙箱逃逸修复、供应链漏洞治理）、架构演进（轻量化核心、运行时插件化）和 CI/发布基础设施优化三条主线推进。值得关注的是，多个高优先级安全 PR（#9827、#9378、#9440）和风险讨论（RUSTSEC-2026-0247 追溯跟踪器）正处于活跃处理期，显示维护团队对安全债务的重视程度较高。总体来看，项目处于密集开发与架构转型并行的阶段，社区讨论活跃但明显向"少数关键议题深度讨论"集中。

---

## 2. 版本发布

**无新版本发布。**

上一个已知版本为 v0.8.4（由 Issue #9381 提及），而 Issue #9290 报告了 v0.8.3 Windows 桌面安装程序的启动失败问题（详见第 5 节），建议用户关注该问题的修复进展。

---

## 3. 项目进展

过去 24 小时内 4 个 PR 已合并/关闭，另有一批重要 PR 等待合并。代表性进展包括：

- **PR #9548（已关闭）** `fix(config): warn on risky Codex CLI extra args` — 为 `codex_cli.extra_args` 中添加已知可能削弱沙箱、审批、hook 信任、执行策略等边界的参数时增加非阻塞警告。直接对应 Issue #5842 中提出的功能请求，该 Issue 今日也已关闭。这是对 Codex CLI 集成的安全加固。

- **Issue #9803（已关闭）** RFC: Retire the standalone zeroclaw-robot-kit crate — 将 `zeroclaw-robot-kit` 合并入 `zeroclaw-hardware`，延续此前 `aardvark-sys` 废弃的架构精简方向，减少独立 crate 的维护负担。

- **Issue #10011（已关闭）** 任务：移除 daemon 心跳测试中运行时写入可执行文件的 fixture — 清理测试中的不安全模式（多线程测试进程启动后写文件、chmod、执行），消除潜在的测试竞态条件。

- **PR #10157（新提交，待合并）** — dependabot 批量更新 rust-all 组 47 个依赖包（clap 4.6.1→4.6.6、clap_complete 4.6.5→4.6.9 等），属于常规依赖维护。

多个关键 PR 仍处于待合并状态，其中安全相关的高优先级（priority:p1）PR 包括：

- **PR #9827** `fix(security): stop shell children from escaping their validated confinement` — 修复命令边界与实际进程之间的四个安全间隙，包括沙箱后端替换时保留调用方工作目录等。**建议优先审查合并。**
- **PR #9378** `fix(acp): persist failed and cancelled turn transcripts` — 修复 ACP 对话失败/取消时消息丢失问题，对应 Issue #9333（S1 严重度）。
- **PR #9440** `feat(security): enforce emergency stop before each tool call` — 修复 `zeroclaw estop` 写入状态文件但运行时没有实际生效的问题（关闭 #9390）。

---

## 4. 社区热点

今日讨论最集中的议题呈现明显的"架构与治理"主导特征：

- **Issue #6165（17 条评论）** [RFC] Prefer a lighter ZeroClaw core through external integrations — 讨论是否通过外部集成（而非内置核心）来承载长尾集成功能，使核心更轻量。这是项目整体架构转型的核心议题，与 #8850（可选频道/工具从编译期 feature flag 迁移到运行时 WASM 插件）形成呼应。**社区诉求：降低核心维护负担、提高二进制分发灵活性。**

- **Issue #8692（13 条评论）** [Tracker]: Maintainer decision queue for RFCs and design issues — 维护者决策队列跟踪器，用于集中管理需要维护者关注的 RFC、设计议题、发布政策问题。**这本身就是项目治理拥挤的信号——大量 RFC 等待决策，社区希望提高决策透明度和效率。**

- **Issue #9598（8 条评论）** RFC: Define the SOP capability permission contract — 定义 SOP capability 的 `required_permissions` 为唯一授权依据，避免创建第二套 SOP 专用授权系统。目前为 Rev 3，目标是 v0.9.0 SOP 授权合约。**社区关注点：安全模型的一致性和可审计性。**

- **Issue #9621（8 条评论）** RFC: staged opt-in product telemetry with operator-reviewed reports — 分阶段引入产品遥测（需操作员审查报告后上传），解决维护者无法得知已发布功能实际使用情况的问题。**这说明维护者在功能取舍上面临数据空白，希望通过受控的遥测获得决策依据。**

---

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻断：**

- **Issue #9333（OPEN，priority:p1）** [Bug] failed ACP turns disappear after switching sessions — ACP（Code/）回合在 provider 错误后，切换会话会导致已出现在实时记录中的消息丢失。**已有 PR #9378 待合并进行修复。**
- **Issue #9290（OPEN，priority:p1，help wanted）** [Bug] Windows desktop installer fails at launch with missing TaskDialogIndirect — v0.8.3 Windows 桌面版安装后无法启动，提示缺少 `TaskDialogIndirect`。**目前无关联 fix PR，需社区帮助。**
- **Issue #9929（OPEN，priority:p1，status:blocked）** [Bug] headless SOP step turns 获得会话路径但从未持久化到会话存储 — 导致无头模式下的 SOP 回合记录丢失（S2 降级行为但被标记为 p1 且 blocked）。**尚无 fix PR。**

**S2 / 高风险/安全：**

- **Issue #8519（OPEN，priority:p1）** Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs — `cargo audit` 与 `cargo deny` 的忽略列表存在漂移，需协调并修复 wasmtime-wasi 的 CVE。**安全 CI 可能持续失败。**
- **Issue #9899（OPEN，priority:p1，status:blocked）** [Tracker]: triage and remove bitmaps unmaintained advisory waiver — `RUSTSEC-2026-0247`（bitmaps 3.2.1 未维护）通过 imbl → Matrix SDK dev-dependencies 进入依赖图，`cargo deny check` 持续失败。**无 fix PR，且被 blocked。**
- **Issue #10074（OPEN）** SECURITY.md 文档中提到的 CI 容器检查 job 已在四月移除 — 文档与实际 CI 流程脱节，需更新文档或恢复检查。**已有对应修复方向但未提 PR。**

**其他：**

- **Issue #7911（OPEN，priority:p2）** install.sh 在 Android/Termux 上选择通用 Linux 二进制而非正确的硬件架构版本 — 安装脚本未正确识别 Termux 环境。

---

## 6. 功能请求与路线图信号

以下 RFC/功能请求正在形成项目的下一步方向：

**短期（可能纳入 v0.9.0）：**

- **Issue #9598** SOP capability 权限合约（目标 v0.9.0）— 将 `required_permissions` 设为唯一授权依据，涉及安全模型的核心改动，与 PR #7821（canonical sandbox_policy schema）共同指向"统一安全策略模型"。
- **Issue #9621** 分阶段产品遥测 — 与 PR #8337（herdr agent 可观测性集成）方向一致，但遥测涉及更多隐私与运营审查流程。

**中期架构转型：**

- **Issue #6165** 轻量化核心（外部集成）— 与 **Issue #8850**（编译期 feature flag → 运行时 WASM 插件）互相支撑，是 ZeroClaw 向"核心 + 插件"架构演进的核心路线图信号。
- **Issue #9702** Goal mode v2 — 持久化延续 + Web 控制面，将目标模式从"重启后暂停"推进到"可跨重启持久化、浏览器可控"。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

- **安全信任问题（Issue #6165 讨论）**：社区对"哪些集成适合保留在默认核心中"存在明显分歧，部分用户担心长尾集成的安全维护质量，倾向通过外部集成或插件机制隔离风险。
- **决策效率不足（Issue #8692 的涌现）**：多个 RFC 长期停留在等待维护者评审状态（如 #6165 自 4 月 27 日创建至今仍在讨论），社区用户自发创建决策队列 tracker 以推动流程改进。
- **安全机制"假象"问题（PR #9440 评论）**：用户 @belumume 指出的 `zeroclaw estop` 状态文件只写不读的问题表明，安全功能"表面存在但实际未生效"会显著侵蚀用户对项目的信任。
- **安装体验碎片化（Issue #7911、#9290）**：Android/Termux 用户无法正确安装、Windows 桌面版启动失败，反映多平台分发质量不均。
- **文档与实际问题脱节（Issue #10074）**：SECURITY.md 中描述的 CI 检查已删除，用户发现文档与事实不符，损害了安全文档的可信度。

---

## 8. 待处理积压

以下问题长期未获充分响应，建议维护者优先关注：

| 项目 | 创建时间 | 等待时长 | 状态 | 风险 |
|---|---|---|---|---|
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) RFC: 轻量化核心 | 2026-04-27 | 约 4 个月 | needs-maintainer-review | 高（架构方向性决策） |
| [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) Codex CLI extra_args 安全警告 | 2026-04-17 | 约 4 个月 | **今日已关闭**（PR #9548 落地） | — |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) cargo-audit/deny 忽略列表漂移 | 2026-06-30 | 约 7 周 | accepted，无 fix PR | 高（安全 CI 持续失败） |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) bitmaps 未维护公告豁免跟踪 | 2026-08-10 | 10 天 | blocked，无 fix PR | 高（安全 CI 持续失败） |
| [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) Windows 桌面安装启动失败 | 2026-07-23 | 约 4 周 | help wanted，无 fix PR | 高（S1，影响发行版可用性） |
| [#9929](https://github.com/zeroclaw-labs/zeroclaw/issues/9929) headless SOP 回合未持久化 | 2026-08-11 | 9 天 | blocked | 高（p1，数据丢失） |

**积压特征总结：** 安全 CI 持续失败（#8519、#9899 均被 blocked 且无修复方案）和 Windows 发行版可用性（#9290）是最突出的未解决问题，两者都属于直接影响用户信任的范畴。另一方面，PR #9827（沙箱逃逸修复）、#9378（ACP 会话消息丢失修复）等高优先级安全修复仍停留在 needs-author-action 状态，建议维护者与作者沟通推进合并。

---

**报告结束。**

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*