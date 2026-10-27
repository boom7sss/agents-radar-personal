# OpenClaw 生态日报 2026-08-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-03 03:34 UTC

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

# OpenClaw 开源项目动态日报 — 2026-08-03

## 1. 今日速览

过去24小时内 OpenClaw 项目保持高活跃度：**500条 Issue 更新**（新开/活跃 449 条，关闭 51 条）与 **500条 PR 更新**（待合并 366 条，已合并/关闭 134 条），同时发布 v2026.7.2-beta.7。beta 版本重点强化**状态安全与恢复**能力，包括隔离存储（quarantine store）、崩溃可恢复 SQLite 快照、schema 升级数据丢失拒绝等。社区讨论热点集中在 **DeepSeek v4 Flash 静默失败**（87条评论）与 **Realtime voice 状态无界增长**（51条评论）两个 P1 问题上；Subagent 完成消息交付的可靠性成为 PR 侧最集中的攻防方向，多条 XL 级 PR 同时推进。整体来看项目迭代速度快、维护者响应积极，但待合并 PR 积压量较大（366 条），长期未闭环的 P1 问题（如 #91009、#48003）仍值得关注。

---

## 2. 版本发布

### v2026.7.2-beta.7
**发布日期：** 2026-08-03

本版本核心主题为 **State safety and recovery（状态安全与恢复）**，集中强化持久化数据的抗损坏与可恢复能力：

- **Quarantine store**：主数据库受损时将受影响数据隔离保存，避免直接丢失。
- **Crash-recoverable SQLite snapshots**：SQLite 快照具备崩溃恢复能力。
- **Crash-durable filesystem publication**：文件系统发布操作在崩溃场景下保持持久性。
- **Schema-upgrade data-loss rejection**：检测到 schema 升级可能导致数据丢失时主动拒绝执行，保护用户数据。
- **Rollback-writer snapshot recovery**：支持通过回滚写入器进行快照恢复。

**破坏性变更/迁移注意：**
- 由于新增了 schema 升级数据丢失拒绝机制，从旧版本升级到 v2026.7.2-beta.7 时，若状态数据库 schema 版本差距过大（如直接从 v1 跳到 v6），升级过程可能被主动拒绝。建议在升级前**手动备份状态数据库**，并确保遵循官方 UPGRADE SOP。
- 值得注意的是，Issue #115421（P0）正在报告 schema 降级恢复时数据库被错误隔离/清空的问题（cron 任务丢失），升级/降级操作需格外谨慎。

🔗 [v2026.7.2-beta.7 Release](https://github.com/openclaw/openclaw/releases)

---

## 3. 项目进展

今日 PR 侧呈现多线程推进态势，最重要的信号集中在 **Subagent 完成消息交付的可靠性**与**状态数据安全**两条主线上，另有安全加固与质量基建的持续投入。

### 今日合并/关闭的关键 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#118130](https://github.com/openclaw/openclaw/pull/118130) | **fix(failover): classify interrupted transport failures as timeouts**（clawsweeper 自动生成） | 将中断流/提前关闭的传输失败归类到统一的 timeout 故障转移路径，修复 cron 快速重试机制。 |
| [#117843](https://github.com/openclaw/openclaw/pull/117843) | **fix(agents): verify delegated writes before reporting success**（clawsweeper 自动生成） | 写工具在返回成功前校验文件实际落盘和 UTF-8 字节内容，避免虚假的成功报告（修复 #67136）。 |
| [#117697](https://github.com/openclaw/openclaw/pull/117697) | **fix(whatsapp): preserve source direction for automatic reactions**（clawsweeper 自动生成） | WhatsApp 自动反应保留消息方向，修复机器人对自己消息的错误反应（修复 #117672）。 |
| [#114411](https://github.com/openclaw/openclaw/pull/114411) | **refactor(cli): consolidate security-sensitive regression fixtures** | 合并四个安全敏感 CLI 测试套件中的重复 fixtures，降低维护成本。 |
| [#118323](https://github.com/openclaw/openclaw/pull/118323) | **refactor(opencode): consolidate session catalog test fixtures** | OpenCode 会话目录测试夹具整合，提升安全与生命周期敏感测试的可读性。 |

### 值得关注的大规模待合并 PR（社区贡献）

- **Subagent 交付链路修复（两条 XL 级 PR 并行）**
  - [#118360](https://github.com/openclaw/openclaw/pull/118360) — **Make subagent completion delivery durable and recoverable**（P1, XL）：将 subagent 完成交付变为持久化可恢复，修复"交付仅排队即被标记为成功"的问题，延长重试窗口并解除悬挂状态。
  - [#118296](https://github.com/openclaw/openclaw/pull/118296) — **prevent internal subagent completion events from leaking into chats**（P1, XL）：修复 subagent 内部完成事件泄漏到聊天会话的问题（修复 #110378）。
  - 两条 PR 同时指向 subagent 场景，说明该链路是目前已知的系统性薄弱环节。

- **Schema 迁移前快照**：[#113567](https://github.com/openclaw/openclaw/pull/113567) — **snapshot state DB before a forward schema migration**（L, P2）：在 schema 前向迁移前自动拷贝快照，为降级恢复提供路径，与 beta.7 的发布主题和 P0 Issue #115421 直接呼应。

- **安全加固**
  - [#110692](https://github.com/openclaw/openclaw/pull/110692) — **guard loopback WS classification with isIP**（codex, P0）：修复 DNS 主机名绕过 loopback 安全检查的问题（修复 #110693）。
  - [#113107](https://github.com/openclaw/openclaw/pull/113107) — **redact command env from JSON readback**（P1）：cron 命令 env 中的凭据在 JSON 读回接口中全部脱敏。
  - [#100074](https://github.com/openclaw/openclaw/pull/100074) — **enforce computer-use policy in Claude CLI runtime**（XL, P2）：在 Claude CLI 运行时强制执行业务侧 computer-use 策略。

**总评**：项目在短期内密集推进了 subagent 交付可靠性、状态数据安全和 CLI 凭据脱敏三个方向的修复，整体健康度向好的趋势明显，但大规模 PR 的合并周期较长，需持续关注。

---

## 4. 社区热点

今日讨论热度最高的 Issue 集中在**消息丢失、资源泄漏和崩溃循环**三类影响用户体验最直接的问题上。

### 🥇 #116277 — DeepSeek v4 Flash 静默回复失败（87条评论，已关闭）
- **链接：** [Issue #116277](https://github.com/openclaw/openclaw/issues/116277)
- **标签：** P1, impact:message-loss, 🦞 diamond lobster, source-repro
- **现象：** 2026-07-30 起，`deepseek/deepseek-v4-flash` 模型在 Telegram 群组消息中静默失败，不生成任何回复，OpenClaw 仅发布一条兜底消息 "No reply was generated for this message"。
- **诉求分析：** 这是典型的"模型侧静默失败 + 框架兜底不透明"的组合问题。用户无法区分是模型问题、鉴权问题还是框架问题，87条评论的高热度说明有大量用户受到影响。该 Issue 已关闭（可能已有修复或 workaround），但横向影响（其他模型是否也有静默失败路径）值得关注。

### 🥈 #116201 — Realtime voice 可保留无界 provider 和 consult 状态（51条评论）
- **链接：** [Issue #116201](https://github.com/openclaw/openclaw/issues/116201)
- **标签：** P1, maintainer, impact:session-state, 🦞 diamond lobster
- **现象：** Realtime voice 会话在慢速、停滞或突发 provider/client 行为下，可无界保留已过期的 consult 工作、大型 provider 帧、pre-ready audio 和播放队列，资源限制按条数或取消信号表达，而非硬性所有权边界。
- **诉求分析：** 开发者关注的是资源管理和会话生命周期的根本性设计缺陷。这是一个架构层面的问题，需要 maintainer 做产品决策（needs-product-decision），短期内可能不会有快速修复。

### 🥉 #115326 — 崩溃循环熔断器永久抑制 Discord/WhatsApp（26条评论，已关闭）
- **链接：** [Issue #115326](https://github.com/openclaw/openclaw/issues/115326)
- **标签：** P1, regression, impact:message-loss, impact:crash-loop, maturity:stable
- **现象：** 网关成功启动但永久抑制 Discord 和 WhatsApp，原因是崩溃循环熔断器（crash-loop breaker）激活。文档中的恢复路径 `channels.start` 失败并返回 WebSocket 1006。
- **诉求分析：** 属于回归性 Bug（"worked before, now fails"），且影响 stable 版本用户。恢复路径失效比 Bug 本身更严重，因为它让用户陷入"无法自救"的困境。

### 其他高热度问题

- [#91009](https://github.com/openclaw/openclaw/issues/91009)（19条评论，2👍）：Codex PreToolUse 钩子生成 CPU-bound `openclaw-hooks` 进程，占满 CPU 并阻塞 gateway RPC（P1, 6月6日创建，长期未关闭）。
- [#48003](https://github.com/openclaw/openclaw/issues/48003)（16条评论，4👍）：steer 模式无法在主会话运行中注入消息（P1, 3月16日创建，长期未关闭）。
- [#57901](https://github.com/openclaw/openclaw/issues/57901)（14条评论，1👍）：safeguard 压缩模式忽略 `compaction.model` 配置，使用会话主模型（P2）。
- [#74586](https://github.com/openclaw/openclaw/issues/74586)（13条评论，3👍）：AM embedded run 中止 `memory_search` 工具调用，模型已完成却被归类为超时（P1）。

---

## 5. Bug 与稳定性

按严重程度排列（P0 → P1），标注修复状态。

### 🔴 P0 — 数据丢失风险

| Issue | 描述 | 修复状态 |
|---|---|---|
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | **Schema 降级恢复不得隔离/清空状态数据库**（cron 任务丢失）。旧版打开高版本 schema 的数据库时，恢复逻辑将原库移至 `.bak-schema6-.moved-schema6-` 并新建空库，导致 cron 任务全部丢失。 | ⚠️ 无直接 fix PR；[#113567](https://github.com/openclaw/openclaw/pull/113567)（迁移前快照）可缓解但未解决降级场景。 |

### 🟠 P1 — 严重功能/安全/稳定性问题

| Issue | 描述 | 修复状态 |
|---|---|---|
| [#117956](https://github.com/openclaw/openclaw/issues/117956) | **claude-cli 后端绕过 `CLAUDE_CLI_CLEAR_ENV` 产生计费 API 调用**——一天内被计费约 1370 万 token，涉及安全审查。 | ⚠️ 无 fix PR；`needs-security-review` |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | **所有持久会话被限制在 128k 上下文**，与模型选择或 contextTokens 配置无关（P2 但影响面极大）。 | ⚠️ 无 fix PR，有 [linked PR](https://github.com/openclaw/openclaw/pull/116010)（#116010 issue 关联） |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | **Usage-cost 刷新锁在容器环境永远无法释放**——重启后 PID 复用导致缓存永久冻结。 | ⚠️ 无 fix PR |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | **DeepSeek v4 Flash 静默失败**（见社区热点）。 | ✅ 已关闭（可能已修复） |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | **崩溃循环熔断器永久抑制 Discord/WhatsApp** 且文档恢复路径失败（WebSocket 1006）。 | ✅ 已关闭 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **Realtime voice 状态无界增长**，资源限制设计缺陷。 | ⚠️ 无 fix PR，`needs-product-decision` |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | **Codex PreToolUse 钩子生成 CPU-bound 进程**（~100%+ CPU each）阻塞 gateway RPC。 | ⚠️ 无 fix PR，`recovery-stuck` |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | **循环检测阻止 exec 但未终止 stuck agent run**，资源持续消耗数小时。 | ⚠️ 无 fix PR，`recovery-stuck` |

### 🟡 已有关联修复 PR 的 Issue

| Issue | 关联 PR | 说明 |
|---|---|---|
| [#118083](https://github.com/openclaw/openclaw/issues/118083)（推断） | [#118130](https://github.com/openclaw/openclaw/pull/118130) | 中断的传输失败归类为 timeout，修复 cron 快速重试。 |
| [#67136](https://github.com/openclaw/openclaw/issues/67136) | [#117843](https://github.com/openclaw/openclaw/pull/117843) | 写工具成功前校验文件持久化。 |
| [#110378](https://github.com/openclaw/openclaw/issues/110378) | [#118296](https://github.com/openclaw/openclaw/pull/118296) | 阻止 subagent 内部完成事件泄漏入聊天。 |
| [#117672](https://github.com/openclaw/openclaw/issues/117672) | [#117697](https://github.com/openclaw/openclaw/pull/117697) | WhatsApp 自动反应方向错误。 |
| [#112616](https://github.com/openclaw/openclaw/issues/112616) | [#118360](https://github.com/openclaw/openclaw/pull/118360) | Subagent 交付持久化与可恢复。 |

**稳定性小结**：今日 P1 级更新中近半数处于"无 fix PR、需要 maintainer 决策"状态。两条 XL 级 subagent 交付修复 PR（#118360, #118296）若能顺利合并，将显著改善该领域。P0 的 schema 降级数据丢失问题最需要优先关注。

---

## 6. 功能请求与路线图信号

### 高潜力需求（有对应 PR 或明确产品决策中）

| Issue | 功能 | 路线图信号 |
|---|---|---|
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | **macOS Talk Mode 接入 OpenAI Realtime（语音到语音）**——将延迟从 1.7-4.9s 降至亚秒级，与 voice-call 插件体验对齐。 | 有明确对比数据和实现路径；属于体验差异化功能。 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | **WhatsApp 重连后回填错过的消息**——连接断开期间的消息被静默丢失。 | 与消息可靠性主题一致，多用户提及。维持 `needs-product-decision`。 |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | **Control UI 文件查看器支持图片查看** | 纯前端增强，实现成本低，用户期待明确。 |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | **为长时运行任务提供持久任务状态界面**（Discord 优先） | 2👍，属于体验优化类，优先级可能不高。 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | **单个 Gateway 支持多个 Azure/Teams 机器人** | 企业级多租户需求，需要架构调整。 |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | **Control UI 上传大小限制可配置**（当前硬编码 5MB） | 与多模态能力增强相关，合理诉求。 |

### 正在通过 PR 推进的功能（很可能进入下一版本）

- **Plugin tools 可让出回合**（[#101665](https://github.com/openclaw/openclaw/pull/101665)，XL, P2）：插件工具可将工作发送到外部交互面后在回调节点前暂停 agent 循环，避免竞态。这是一项能力扩展，review 中。
- **auto-reply 增加 "commentary" 级别**（[#103991](https://github.com/openclaw/openclaw/pull/103991)，XL, P3）：`/verbose on` 当前 all-or-nothing，新增 narration-only 细分级别，便于操作员追踪工作进度。
- **清理空的入站媒体暂存目录**（[#117184](https://github.com/openclaw/openclaw/pull/117184)，M, P2）：修复临时目录积累问题。
- **`sessions_yield` 等待状态透出**（[#117509](https://github.com/openclaw/openclaw/pull/117509)，L, P1）：父 agent yield 等待子 agent 时，将 wait 消息通过正常回复路径发送，避免用户无响应。

---

## 7. 用户反馈摘要

### 高频痛点

- **模型的静默失败让用户无法区分问题归属。** #116277（DeepSeek v4 Flash）中，用户只能看到通用兜底文案 "No reply was generated"，无法判断是模型、鉴权还是框架问题。#51336 也提出类似诉求：**在错误/过载消息中显示 API provider 名称**，说明这不是个例。

- **群聊场景的多 agent 串扰。** #56692（Telegram 多 agent 群聊）中，当前 agent 可能响应了其他 agent 的消息；#50490（飞书）中，`/activation mention` 切换后机器人仍然响应所有消息。多 agent 上下文隔离仍不完善。

- **工具失败导致的重试刷屏。** #55694（飞书）中，exec 工具参数错误后 agent 连续重试 20+ 次并每次发送重复消息，用户收到 6+ 条几乎相同的消息。工具调用失败终止策略需要改进。

- **长会话后工具参数静默丢失。** #53408 经过 15+ 轮对话后，`write`/`exec` 工具的参数开始变成空对象。用户描述为"没有崩溃但行为错误"，最难排查。

- **重启/降级 = 数据丢失的恐惧。** #115421（P0）与 #114234（容器 PID 复用锁死）分别暴露了状态数据库和缓存锁的健壮性问题，对生产用户而言，这比普通 Bug 更令人担忧。

### 用户满意点

- 今日关闭的 #106760（Telegram 多内容块文本被擦除）和 #58498（OAuth 用量显示不一致）说明**维护者持续在关闭高影响力的老 Issue**，社区有正向反馈。
- clawsweeper 自动修复 bot 的 PR 频率很高（今日 10+ 条），能够快速响应小型缺陷，用户对修复效率的感知在改善。

---

## 8. 待处理积压

以下为创建时间长、影响严重、但仍未关闭或未取得关键进展的问题，提醒维护者关注：

### 长期未闭环的 P1 问题

| Issue | 创建时间 | 持续天数 | 标签与影响 |
|---|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex PreToolUse 生成 CPU-bound 进程 | 2026-06-06 | ~58天 | P1, `recovery-stuck`，19条评论，2👍。CPU 占满 + RPC 阻塞，影响严重。 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) — steer 模式无法注入中段消息 | 2026-03-16 | ~140天 | P1, 16条评论，4👍。核心功能缺陷，root cause 已定位（`KeyedAsyncQueue`）。 |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) — memory_search 被中止并误判为超时 | 2026-04-29 | ~96天 | P1, `needs-live-repro`，13条评论，3👍。影响 AM（active-memory）插件核心功能。 |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) — followup drain 独占 session lane 20-30 分钟 | 2026-03-25 | ~131天 | P1, `needs-live-repro`，7条评论。入站消息被静默排队半小时。 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) — subagent 完成交付在超时/回收时丢失 | 2026-04-16 | ~109天 | P1, `diamond lobster`，11条评论。与今日两条 XL 修复 PR 直接对应，PR 合并后应关闭。 |
| [#52249](https://github.com/openclaw/openclaw/issues/52249) — ACP 父会话等待子完成时卡死 | 2026-03-22 | ~134天 | P1, `diamond lobster`，10条评论。需刷新 UI 才能恢复。 |
| [#76492](https://github.com/openclaw/openclaw/issues/76492) — CLI 静默回退 embedded 模式掩盖问题 | 2026-05-03 | ~92天 | P1, `diamond lobster`，6条评论，1👍。诊断行为误导。 |

### 长期未响应的 PR

| PR | 创建时间 | 状态 |
|---|---|---|
| [#86540](https://github.com/openclaw/openclaw/pull/86540) — 保留 lock stall 后的 subagent 交付 | 2026-05-25 | P1, `needs proof`，已挂起 ~70 天。与今日 #118360 功能重叠，需决策是否合并或取代。 |
| [#115301](https://github.com/openclaw/openclaw/pull/115301) — msteams 审批先于 agent 队列解析 | 2026-07-28 | P1, `waiting on author`。Teams 审批按钮被排队导致过期，等待作者更新。 |

### 建议关注

1. **P0 #115421**（schema 降级数据丢失）应作为最高优先级处理，可与 #113567 迁移前快照 PR 联动设计完整方案。
2. **长期积压的 P1 大多与 subagent/消息交付/会话状态相关**，若 #118360 和 #118296 两条 XL 级 PR 顺利合并，建议维护者系统性复盘该领域所有相关 Issue 并批量关闭。
3. **#91009（Codex CPU 进程）** 和 **#48003（steer mode）** 均为社区反复提及的核心问题，建议明确排期并给予结论性回复。

---

*本报告基于 GitHub 公开数据生成，数据统计周期：2026-08-02 ~ 2026-08-03。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：** 2026-08-03
**覆盖项目：** OpenClaw、ZeroClaw、Hermes Agent、IronClaw、CoPaw、NanoBot、NanoClaw、PicoClaw、LobsterAI、Moltis、NullClaw、TinyClaw、ZeptoClaw


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于高速迭代期，头部项目（OpenClaw、ZeroClaw、Hermes Agent）单日 Issue/PR 更新量均达 50+，但项目间活跃度断层显著——尾部 3 个项目（NullClaw、TinyClaw、ZeptoClaw）已完全休眠。全生态共同攻关的核心议题集中在三条主线：**状态持久化与数据安全**（OpenClaw beta.7、NanoClaw SQLite、ZeroClaw 配置竞态）、**子代理/消息交付可靠性**（OpenClaw 两条 XL PR、IronClaw CAS 恢复、NanoBot 子代理标记）、**模型兼容性与静默失败**（OpenClaw DeepSeek、Hermes DeepSeek 缓存、CoPaw agentscope 兼容性）。与此同时，安全边界意识显著抬头——webhook 认证缺失（ZeroClaw P0）、凭据脱敏（OpenClaw）、SSRF 防护（IronClaw）成为多个项目同步关注的重点。整体判断：生态已从"功能扩张期"进入"可靠性加固期"，架构治理与规范化开始被提上议程。


## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 版本发布 | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 449，关闭 51） | 500（待合并 366，合并/关闭 134） | ✅ v2026.7.2-beta.7 | 高度活跃；PR 积压严重，长期 P1 未闭环 |
| **ZeroClaw** | 50（新开/活跃 37，关闭 13） | 50（待合并 40，合并/关闭 10） | ✅ v0.8.4（262 commits） | 活跃；P0 webhook 安全漏洞未修复、RFC 决策积压 |
| **Hermes Agent** | 50（新开/活跃 48） | 50（待合并 37） | ❌ | 高度活跃；P0 回归（DeepSeek 缓存破坏） |
| **CoPaw** | 12（新开/活跃 9，关闭 3） | 28（待合并 17，合并/关闭 11） | ❌ | 良好；agentscope 兼容性问题待处理 |
| **IronClaw** | 8（新开/活跃 7，关闭 1） | 31（待合并 22，合并/关闭 9） | ❌（release PR 搁置 31 天） | 健康；QA→修复闭环优秀，但发版阻塞 |
| **NanoBot** | 1（关闭） | 15（合并/关闭 9，待合并 6） | ❌ | 良好；Bug 闭环快，社区贡献积极 |
| **NanoClaw** | 1（新开） | 10（合并/关闭 3，待审查 7） | ❌ | 中等；SQLite 锁竞争 Issue 待解 |
| **PicoClaw** | 3（新开/活跃） | 9（待合并 6） | ❌ | 中等；修复快速但 stale 积压 |
| **LobsterAI** | 3（存量 stale） | 6（存量 stale，无实质更新） | ❌ | 偏低；4 个高价值 PR 停滞约 4 个月 |
| **Moltis** | 0 | 1（待合并） | ❌ | 低活跃；功能开发驱动，社区反馈缺失 |
| **NullClaw** | 0 | 0 | ❌ | 休眠 |
| **TinyClaw** | 0 | 0 | ❌ | 休眠 |
| **ZeptoClaw** | 0 | 0 | ❌ | 休眠 |

**OpenClaw 以 500+/500+ 的日更新量领先全生态，其次为 ZeroClaw 与 Hermes Agent（各 50 条）。** 其余项目维持在 10–30 条区间。值得注意：LobsterAI 今日所有"更新"均为 stale 机器人自动标记，真实社区互动接近于零。


## 3. OpenClaw 在生态中的定位

**OpenClaw 是生态的绝对枢纽和参照实现**，其"核心参照"地位从数据维度得到充分验证：日更新量（500 Issue / 500 PR）是第二梯队（ZeroClaw、Hermes）的 10 倍，P1 级问题评论数（DeepSeek 静默失败 87 条、Realtime voice 51 条）远超其他项目的讨论热度，且已形成以 `clawsweeper` 自动修复 bot 为标志的自动化维护基础设施。

- **技术路线差异：** OpenClaw 近期版本主题明确指向**状态安全与恢复**（quarantine store、崩溃可恢复 SQLite 快照、schema 升级数据丢失拒绝），这一套完整的持久化安全机制在全生态中独一无二。相较之下，ZeroClaw 以 Rust 重写 + RFC 驱动治理见长，IronClaw 侧重 Wave 2 架构收敛与 QA 闭环，Hermes Agent 则在桌面端和多 profile 场景上布局更深。

- **社区规模与治理模式：** OpenClaw 通过自动化 bot 维持高吞吐（今日 10+ 条自动 PR），但 366 条待合并 PR 的积压形成吞吐瓶颈，长期未闭环的 P1（#91009、#48003）已分别悬置 58 天与 140 天。ZeroClaw 的 40 条待合并 PR 中大量为 `needs-author-action`，瓶颈在贡献者响应而非维护者处理速度。

- **生态衍生关系：** PicoClaw、NanoClaw、TinyClaw、ZeptoClaw 等从命名即可看出与 OpenClaw 的衍生关系，它们承载着轻量化/嵌入式场景的分工──但这批项目今日仅有 PicoClaw（9 PR）和 NanoClaw（10 PR）保持有限活跃，意味着**衍生品生态的可持续性存疑**。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **子代理/消息交付可靠性** | OpenClaw（#118360/#118296 XL 双 PR）、NanoBot（#5152 subagent 完成标记）、IronClaw（#7025/#7028/#7029 投递状态 CAS 恢复）、Hermes Agent（#67777 交付丢失） | 多项目同时遇阻：子代理完成事件泄漏、交付仅排队即报成功、投递状态并发覆盖、恢复时重复发送。**该方向是当前生态最大的系统性薄弱环节** |
| **状态持久化与数据安全** | OpenClaw（beta.7 隔离存储/快照恢复）、NanoClaw（#3177 SQLite 跨挂载锁竞争）、ZeroClaw（#9519 配置写入竞态）、LobsterAI（#1217 网关偶发重启） | 数据库损坏、配置竞态丢失、重启/降级导致数据丢失的恐惧（OpenClaw #115421 P0：cron 任务全部丢失） |
| **模型兼容性与静默失败** | OpenClaw（DeepSeek 静默失败，87 评论）、Hermes Agent（DeepSeek 缓存破坏 OpenCode Zen，P0）、CoPaw（agentscope 2.0.4.post1 兼容性串） | 模型升级/供应商变更导致的静默失败、HTTP 400、协议不兼容——用户无法自行区分问题归属 |
| **多渠道/多平台支持** | 几乎全部项目 | Telegram/WhatsApp/Discord/微信/飞书/Teams 六大渠道均有问题报告；WhatsApp 出现跨项目修复（OpenClaw 方向保留、Hermes 超时修复、ZeroClaw webhook 漏洞） |
| **WebUI/桌面端体验** | OpenClaw（Control UI）、Hermes Agent（桌面端更新循环/设置不生效）、CoPaw（UI 冻结/加载超时）、NanoBot（WebUI 性能）、LobsterAI（代码块折叠） | 大输出渲染阻塞、慢网络加载失败、设置持久化失效、本地化缺失 |
| **可观测性与成本控制** | Hermes Agent（token/成本分析三连 Issue）、IronClaw（#7035 模型预算未强制）、OpenClaw（usage-cost 刷新锁死） | 计量数据"最后一公里"：核心层有数据但 UI 层未暴露；预算上限形同虚设 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手；多通道（Telegram/Discord/WhatsApp 等）+ 插件体系 + 子代理 | 大众用户至高级用户 | 状态安全与恢复体系（quarantine store、SQLite 快照）；自动修复 bot 驱动的维护模式 |
| **ZeroClaw** | 高性能 Rust 版助手；架构级 RFC 驱动演进 | 技术型用户/自托管者 | Rust + WASM 插件生命周期；RFC 治理制度化；Chat Completions 协议适配（社区最高呼声） |
| **Hermes Agent** | 桌面端深度集成 + 多 profile 部署 + 语音 | 专业用户/开发者 | 核心/桌面双层架构；多路复用 gateway；SMART busy-input 编排（PR #77076） |
| **IronClaw** | 可靠性优先的 Rust 实现；Wave 2 架构重构 | 企业/生产环境 | 端口反转栈 + 持久投递 CAS 所有权模型；QA→修复高配对闭环；90% 覆盖率门禁 |
| **CoPaw** | 基于 agentscope 的多智能体协作 | 学术/研究背景用户 | 依赖 agentscope 框架，受上游版本变动影响大；ACP 协议支持 |
| **NanoBot** | 轻量级、WebUI 友好 | 个人用户/快速部署 | Python 实现；JSONL 会话存储；跨会话搜索（PR #5211） |
| **PicoClaw / NanoClaw** | OpenClaw 轻量衍生 | 嵌入式/资源受限环境 | 更小的功能集；PicoClaw 有安全加固 PR（#3297）；NanoClaw 在扩展 Dial 电信集成与远程 MCP |
| **LobsterAI** | 中文优先 + IM 协作（钉钉/飞书） | 中文企业用户 | 前端 React + 后端 Python；核心与 IM 配置热更新强耦合 |
| **Moltis** | MCP 服务器托管与生命周期管理 | 开发者/基础设施团队 | 专注 MCP 仓库 bundle 管理（发现/安装/更新/移除）；vault 集成 |


## 6. 社区热度与成熟度分层

**第一梯队——快速迭代期（日更新 50+，功能与修复并行推进）：**
- **OpenClaw**：迭代速度全生态最快，但待合并 PR 积压 366 条、P1 悬置最长 140 天，暴露"高速缝补"模式的治理成本；
- **ZeroClaw**：v0.8.4 发布后进入系统性债务清理期，但 P0 webhook 安全漏洞与 6 个 60 天+ 未决 RFC 构成双重风险；
- **Hermes Agent**：桌面端用户反馈密集，P0 回归说明在快速合入（如 DeepSeek 缓存）时质量门禁存在漏洞。

**第二梯队——质量巩固期（日更新 10–30，QA 与基建优先）：**
- **IronClaw**：最健康的模式——QA 当天提 Bug、当天出修复 PR，恢复 90% 覆盖率门禁，Wave 2 架构收尾。唯一风险是 release PR 搁置 31 天阻塞交付；
- **CoPaw**：Bug 闭环速度快（UI 冻结当日合并修复），但依赖上游 agentscope 的兼容性风险突出；
- **NanoBot**：合并/关闭率高（9/15），Windows 阻塞 Bug 当日闭环，社区贡献质量好。

**第三梯队——低速运转期：**
- **PicoClaw / NanoClaw**：保持有限活跃，修复响应快，但功能合入节奏慢、stale 积压；
- **LobsterAI**：4 个高价值 PR 停滞 4 个月（stale 自动标记），"能运转但缺乏维护者带宽"；
- **Moltis**：单 PR 推进但零社区反馈，功能开发驱动、用户参与度为当前生态最低。

**第四梯队——休眠：** NullClaw、TinyClaw、ZeptoClaw 连续无活动。


## 7. 值得关注的趋势信号

**① 状态安全与恢复正从"加分项"变为"必选项"。** OpenClaw 以整个 beta 版本主题押注状态安全，NanoClaw 因 Docker 跨挂载 SQLite 出现 29,000+ 次只读错误，ZeroClaw 投入序列化配置写入修复。生产用户对"重启/降级 = 数据丢失"的恐惧已成为最强烈的情绪反馈（OpenClaw #115421 P0）。**建议：所有面向生产的项目应把"崩溃可恢复 + 迁移防丢失"作为基本能力设计，而非事后补救。**

**② 子代理/多 Agent 协作的交付可靠性是系统性短板。** 至少 4 个独立项目同时攻关同一问题（交付丢失、重复投递、完成事件泄漏、状态并发覆盖），说明这是个人 AI 助手从"单 Agent 对话"走向"多 Agent 协作"的必经关卡。IronClaw 的 CAS 所有权模型和 OpenClaw 的持久化交付队列可能成为可借鉴的参考方案。

**③ 模型供应商依赖风险全面浮出水面。** DeepSeek 在 OpenClaw（静默失败，87 评论）和 Hermes（缓存破坏 OpenCode Zen，P0）同时出问题，CoPaw 因上游 agentscope 版本变动触发崩溃串。**对开发者的启示：模型/框架层抽象必须包含"失败可诊断"与"自动回退"机制（NanoBot #5214 的 chat completions 回退是正确方向），否则供应商任何变更都将直接冲击最终用户。**

**④ AI Agent 开始反哺开源治理本身。** IronClaw 的 PR #7033 明确标注"AI agent 在 owner 显式委托下做出架构决策"，OpenClaw 的 `clawsweeper` 自动修复 bot 已承担日常 bug 修复。**这是生态最具想象力的信号：AI 助手不再只是被构建的产品，正在成为构建者。**

**⑤ 安全合规压力从"功能"升级为"底线"。** ZeroClaw 的 webhook 未 fail closed（P0，3 个渠道可被伪造注入）、IronClaw 的代理变量 SSRF 绕过、OpenClaw 的 CLI 凭据 JSON 读回泄漏、Hermes 的计费 API 绕过（单日 1370 万 token）——安全议题已覆盖认证、网络出口、凭据管理、成本控制四个层面，且多由社区用户/QA 主动发现，说明**安全众测正在成为事实上的质量保障机制**。

**⑥ 生态兼容协议是扩大采用的关键钥匙。** ZeroClaw 社区对 Chat Completions 适配的呼声（15 评论持续发酵）揭示了通用协议的战略价值——兼容 OpenAI 生态意味着直接接入 Open WebUI、LobeChat、Aider 等成熟客户端。NanoClaw/Moltis 对远程 MCP 服务器的支持也指向同一方向：**让助手融入已有工具生态，而非要求用户迁移到封闭体系。**

---

*本报告基于 13 个开源项目 2026-08-02 至 2026-08-03 的 GitHub 公开数据综合分析。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-03

## 1. 今日速览

过去 24 小时项目保持中等偏高活跃度：1 条 Issue 关闭，15 条 PR 更新（9 条合并/关闭，6 条待合并），无新版本发布。核心成果是修复了 Windows 平台因 MIME 类型错误导致前端完全无法加载的严重 Bug（#5190/#5191），同时合并了 Gemini Flash 图像模型参数修复、WebUI 性能优化、微信会话恢复等多个 PR。当前有 6 个 PR 处于待合并状态，其中包含 2 个 P1 优先级修复，合并压力可控。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日共合并/关闭 9 条 PR，覆盖 Bug 修复、性能优化和功能落地，项目在兼容性、稳定性和 WebUI 体验方面均有实质推进。

**关键修复**

- [#5191 [CLOSED] Register correct MIME types for static assets on Windows](https://github.com/HKUDS/nanobot/pull/5191)：修复 Windows 下 `.js` 文件被系统注册表强制识别为 `text/plain` 导致前端模块加载失败的问题（关闭 #5190），直接消除 Windows 用户无法启动项目的阻塞性故障。
- [#5216 [CLOSED] fix(image): send Gemini Flash hints via generationConfig.imageConfig](https://github.com/HKUDS/nanobot/pull/5216)：修复 Gemini Flash 图像模型在设置宽高比或尺寸提示时返回 HTTP 400 的错误，扩展了图像类模型兼容性。
- [#5217 [CLOSED] fix(webui): show timestamps for replayed messages](https://github.com/HKUDS/nanobot/pull/5217)：WebUI 重放消息时展示正确的时间戳，并覆盖 cron/主动消息等无完成元数据的场景。
- [#5196 [CLOSED] fix(weixin): recover refreshed state after session expiry](https://github.com/HKUDS/nanobot/pull/5196)：修复微信渠道在 `errcode -14` 进入 60 分钟暂停后无法拾取刷新会话状态的问题（关闭 #5195）。
- [#4021 [CLOSED] fix(codex): dedup reasoning items before send, retry on duplicate-item 400 [AI-assisted]](https://github.com/HKUDS/nanobot/pull/4021)：修复 Codex Provider 在 Responses API 偶发重复 `reasoning` item 导致 400 错误并中断多轮对话的问题。

**性能优化**

- [#5194 [CLOSED] perf(webui): accelerate JSONL session list and thread loading](https://github.com/HKUDS/nanobot/pull/5194)：优化 WebUI JSONL 会话列表和线程加载速度，通过复用活动目录、缓存 workspace 快照减少重复 IO。

**功能落地**

- [#4854 [CLOSED] feat(exec): add RTK command rewriter](https://github.com/HKUDS/nanobot/pull/4854)：新增可选的 RTK 命令重写器，在沙箱包装前重写 exec 命令并复用既有 exec 守卫，同时过滤 RTK hook 提醒噪声。该 PR 自 7 月 8 日创建，经近一个月的 review 后合并。
- [#4833 [CLOSED] Gate sustained goals behind explicit runtime mode](https://github.com/HKUDS/nanobot/pull/4833)：将长期目标/目标完成工具从常驻可见改为运行时门控，仅在 `/goal` 或活跃目标轮次注入，并引入动态工具注册机制，收敛了工具暴露面。
- [#4822 [CLOSED] fix(webui): preserve automation source on streamed replies](https://github.com/HKUDS/nanobot/pull/4822)：保留流式回复上的自动化来源元数据，使会话重放后仍能显示自动化徽标。

整体来看，项目今日完成了从用户侧 Bug 报告到修复合并的闭环（#5190 → #5191），同时兼顾了渠道稳定性、WebUI 体验和底层工具链灵活性。

## 4. 社区热点

今日无评论密集的争议性讨论，但以下高价值 PR 值得关注：

- [#5211 [OPEN] feat(session): add cross-session search and mentions](https://github.com/HKUDS/nanobot/pull/5211)：作者 Re-bin 提出跨会话搜索能力，允许用户在 WebUI 中通过 `@` 提及其他会话，并持久化稳定会话引用。这是近期少有的面向用户交互模式的功能型 PR，可能成为下一版本的重要亮点。目前无评论，建议维护者重点关注设计合理性。
- [#5212 [OPEN] feat: add MiniMax music guidance](https://github.com/HKUDS/nanobot/pull/5212)：为现有音乐 provider 栈补充 MiniMax 音乐生成的工具契约发现与技能指南，属于生态扩展类改进。

社区整体讨论热度不高，但 PR 提交活跃，说明贡献者群体正以提交代码而非评论的方式参与项目。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 | 分析 |
|---|---|---|---|
| 🔴 高 | Windows 下静态资源 MIME 类型错误，前端 JS 模块完全无法加载（#5190） | ✅ 已修复（#5191 已合并） | 阻塞 Windows 用户本地启动，8 月 3 日当天完成闭环。根因是 Windows 注册表将 `.js` 关联为 `text/plain`，覆盖了 Python 内建映射 |
| 🟠 中高 | OpenAI Responses API 在 serde 反序列化错误时对话终止（[#5214](https://github.com/HKUDS/nanobot/pull/5214)） | ⏳ Fix PR 待合并（P1） | 当前实现将终态错误视为不可恢复，建议回退到 chat completions 提升鲁棒性 |
| 🟠 中高 | Gateway 停止时 agent 资源未确定性关闭，产生 asyncio teardown 噪声并可能挂起停止流程（[#5215](https://github.com/HKUDS/nanobot/pull/5215)） | ⏳ Fix PR 待合并（P1） | 涉及 exec 会话和 MCP 子进程的生命周期管理，影响运维体验 |
| 🟡 中 | 无 pip 的 uv tool 环境下插件管理命令失败（[#5213](https://github.com/HKUDS/nanobot/pull/5213)） | ⏳ Fix PR 待合并（P2） | 官方安装器安装的环境可能缺 `ensurepip`，需回退到 `uv` 执行 |
| 🟢 低 | 子代理部分完成结果被模型误判为已结束（[#5152](https://github.com/HKUDS/nanobot/pull/5152)） | ⏳ Fix PR 待合并 | 需向模型显式标记 `subagent_remaining_count`，避免推断未完成结果 |

## 6. 功能请求与路线图信号

- **跨会话搜索与提及（#5211）**：最具潜力的用户功能需求。从 WebUI 的 `@` 选单中选择其他聊天、持久化稳定会话引用，预示项目正在向更复杂的多会话管理方向演进。该 PR 已待合并且无冲突标记，有可能进入下一版本。
- **MiniMax 音乐生成支持（#5212）**：在已有音乐 provider 栈上的生态扩展，说明项目正在持续覆盖更多第三方模型服务。
- **[#5214] OpenAI Responses API 自动回退**：虽然这是一个 P1 修复，但引入“serde 拒绝时回退 chat completions”的机制本身带有架构演进信号——意味着项目可能逐步弱化对单一 API 协议的强依赖，增强 Provider 层的容错和自适应能力。
- **[#4854] RTK 命令重写器**（今日合并）：虽为工具链功能，但 `RTK_TEE_DIR` 和工作区变量注入暗示 exec 沙箱的安全模型正在丰富，与后续可能的安全相关功能形成配合。

## 7. 用户反馈摘要

- **Windows 用户阻塞性痛点**：用户 amkile 在 #5190 中明确反馈“启动项目时前端 JS 模块无法加载”，浏览器控制台报 `Failed to load module script`，根因是 Windows 注册表将 `.js` 的 Content Type 设为 `text/plain`。该用户同时提交了修复 PR #5191，形成了完整的“报告-定位-修复”闭环。此类跨平台环境差异问题在开源项目中有代表性，值得在文档或安装脚本中增加 Windows 专项说明。
- **安装环境适配反馈**：#5213 的 PR 描述侧面反映了“通过官方安装器获得的环境可能缺少 pip”这一真实场景，说明项目需要同时兼容 uv 和 pip 两种 Python 包管理生态。

## 8. 待处理积压

以下 OPEN 状态的 PR 需要维护者关注：

- [#5214 [OPEN] fix(providers): fall back to chat completions on serde body rejections](https://github.com/HKUDS/nanobot/pull/5214)：P1 优先级，影响使用 OpenAI Responses API 的稳定性，推荐尽快 review。
- [#5215 [OPEN] fix(gateway): close agent resources deterministically on stop](https://github.com/HKUDS/nanobot/pull/5215)：P1 优先级，影响服务优雅关闭，推荐尽快 review。
- [#5211 [OPEN] feat(session): add cross-session search and mentions](https://github.com/HKUDS/nanobot/pull/5211)：重要功能 PR，建议安排代码审查并评估与现有 SessionStore 的集成方案。
- [#5213 [OPEN] fix(plugins): use uv when pip is unavailable](https://github.com/HKUDS/nanobot/pull/5213)：P2，影响特定安装环境下的插件启用。
- [#5152 [OPEN] fix(subagent): mark partial completion results](https://github.com/HKUDS/nanobot/pull/5152)：自 7 月 28 日起已 open 近一周，涉及子代理结果语义准确性，建议推进。
- [#5212 [OPEN] feat: add MiniMax music guidance](https://github.com/HKUDS/nanobot/pull/5212)：功能扩展类 PR，优先级较低，可择机合并。

此外，今日虽无长期无响应的 Issue 积压，但 #4854（RTK 命令重写器）从 7 月 8 日到 8 月 3 日经历近一个月的 review 周期才合并，期间带有 `conflict` 标签。建议后续对 open 超过两周的 PR 主动同步进度，避免社区贡献者等待过久。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# 🤖 Hermes Agent 项目动态日报

**日期：2026-08-03（星期日）**  
**数据来源：** [github.com/NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)  
**统计窗口：** 2026-08-02 ~ 2026-08-03（过去 24 小时）

---

## 1. 今日速览

**项目活跃度：高。** 过去 24 小时内 Issues 与 PR 均更新 50 条，其中新开/活跃 Issue 48 条、待合并 PR 37 条，社区开发和反馈节奏明显加快。今日无新版本发布。值得关注的是，出现了 **1 个 P0 级回归**（#77217 DeepSeek 缓存破坏 OpenCode Zen 兼容性）和 **4 个 P1 级 Bug**，涵盖了桌面端更新循环、WhatsApp 永久断连、模型切换数据丢失、桌面端孤儿 gateway 等问题，其中 3 个已有对应 fix PR 待合并。与此同时，社区功能请求呈现"使用量分析"与"CLI/桌面体验精细化"两大主线，已有 3 个 PR 直接响应相关诉求。

---

## 2. 版本发布

今日**无新版本 Release**。

上游主干仍处于高频迭代期，最新已知稳定版为 v0.19.0（2026-07-20 前后）。今日已合入的修复（如 YOLO 持久化、boardd 重启安全）预计将随下一小版本释出。

---

## 3. 项目进展

今日共 **13 条 PR 被合并/关闭**（另有 37 条待合并）。以下为最重要的 3 项合入变更：

### 🔧 fix(cli): persist YOLO mode across --resume — [#77237](https://github.com/NousResearch/hermes-agent/pull/77237)
- **状态：** 已合并（CLOSED）
- **内容：** 修复 `/yolo ON` 与 `--yolo` 启动的 YOLO 绕过模式在 `hermes --resume` 后丢失的问题。此前该设置仅存于内存 `tools.approval._session_yolo`，新进程会静默回退到普通审批模式。
- **意义：** 消除了"用户以为还在 YOLO 模式，实际上危险命令重新开始弹确认框"的安全心智错位。

### 🔧 fix(secrets): hydrate cold multiplex sources locally — [#75263](https://github.com/NousResearch/hermes-agent/pull/75263)
- **状态：** 已关闭
- **内容：** 修复 #74317，冷启动多路复用 profile 时，将外部 secret 源（外部密钥源）水合到**独立的 profile 级映射**中，避免在首次运行时才构造 secret scope 导致的竞态。
- **意义：** 对 `GATEWAY_MULTIPLEX_PROFILES=1` 的多 profile 部署是一个重要的可靠性补丁。

### 🔧 fix(kanban): make boardd runtime restart-safe — [#77289](https://github.com/NousResearch/hermes-agent/pull/77289)
- **状态：** 已关闭
- **内容：** 将 `boardd` 打包为不可变 `/opt/hermes-boardd/releases/<fingerprint>` 运行时，root 拥有 `current` 指针，broker socket 保持 `0660` 权限。升级不再因运行时文件被覆盖而导致状态丢失。
- **意义：** 看板守护进程从此具备安全重启/滚动升级能力。

**整体判断：** 项目在**安全状态持久化、多路复用可靠性与后台守护进程生命周期**三个方向上有实质性推进。

---

## 4. 社区热点

今日讨论热度较高的 Issues 集中在 **Windows 桌面端体验** 与 **网关/调度正确性** 两个主题：

### 🔥 #71837 — Windows 项目侧边栏重复分支车道（6 条评论，持续活跃 8 天）
[Issue #71837](https://github.com/NousResearch/hermes-agent/issues/71837)

进入单个项目后，侧边栏出现两条相同会话的 lane（`main` + 仓库名），但 `state.db` 中会话唯一，是 lane-id 分组 Bug。这是 **Windows 专属 bug**，已连续 8 天被讨论，用户资产数据实际未重复但**展示层严重混乱**。

### 🔥 #69163 — coder profile 导入后 gateway 未注册（6 条评论）
[Issue #69163](https://github.com/NousResearch/hermes-agent/issues/69163)

用户通过 `hermes profile export/import` 迁移 coder profile 后，`coder gateway start` 报 `no such gateway 'coder'`。该问题已持续 12 天，涉及 docker 场景下 profile 迁移的完整性。

### 🔥 #73985 — xAI 流式 TTS 完全不可用（4 条评论）
[Issue #73985](https://github.com/NousResearch/hermes-agent/issues/73985)

社区用户 **Adolanium** 对 #73862 合入的 XAIStreamer 做了逐行审计，指出"四个独立故障叠加，每个都足以导致完全不可用"——包括错误的 websockets 参数、被拒绝的握手、以及**自造 wire protocol**。分析质量极高，获 4 条评论跟进。**已有重写 PR #77285 待合并**，且该 PR 明确标注"经 `wss://api.x.ai/v1/tts` 真实协议验证"。

### 🔥 #29530 — Profiled workers 的共享 auth home（4 条评论，持续 75 天）
[Issue #29530](https://github.com/NousResearch/hermes-agent/issues/29530)

多 profile worker 在隔离 `HERMES_HOME` 下会出现 OAuth split-brain，对轮转/单次 refresh token 的 provider 风险极高。此问题**已持续 75 天**，是长期未决的核心架构议题之一。

---

## 5. Bug 与稳定性

今日共报告 **48 条活跃 bug 类 Issue**。按严重程度排列如下：

### 🟥 P0 — 严重回归

| Issue | 标题 | 状态 |
|---|---|---|
| [#77217](https://github.com/NousResearch/hermes-agent/issues/77217) | feat(cache): 启用 DeepSeek 缓存破坏 OpenCode Zen 的 deepseek-v4-flash — HTTP 400 "content must be string, not block array" | ❌ 无 fix PR。已被 #73985 社区深度审查之外的最严重回归，**由 6b6435a87 引入**，影响所有通过 OpenCode Zen 使用 DeepSeek 模型的用户 |

### 🟧 P1 — 严重 Bug（部分已有修复）

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#77268](https://github.com/NousResearch/hermes-agent/issues/77268) | WhatsApp bridge 重连时版本 fetch 无超时 → **永久断连** | ✅ [#77298](https://github.com/NousResearch/hermes-agent/pull/77298)（待合并） |
| [#77276](https://github.com/NousResearch/hermes-agent/issues/77276) | Desktop app 重启遗留孤儿 gateway（QQ 适配器，macOS） | ✅ [#77297](https://github.com/NousResearch/hermes-agent/pull/77297)（待合并） |
| [#76870](https://github.com/NousResearch/hermes-agent/issues/76870) | 模型切换触发 history_version mismatch → **后续输出全部丢弃**，DB 出现空 assistant 消息 | ❌ 无 |
| [#77277](https://github.com/NousResearch/hermes-agent/issues/77277) | Windows 桌面 app 更新无限循环：updater 将自身 respawning backend 识别为 venv blocker | ❌ 无（标注 duplicate） |
| [#75756](https://github.com/NousResearch/hermes-agent/issues/75756) | Desktop 编辑历史消息失败："Edit failed" / session not found，无法 rewind-and-rerun | ❌ 无 |

### 🟨 P2 — 一般 Bug（值得注意）

- **#77241** — Desktop 启用 Message reactions 永远到达不了后端，`config.set` 4002 被静默吞掉。✅ 已有修复 PR [#77296](https://github.com/NousResearch/hermes-agent/pull/77296)
- **#74285** — 多路复用 gateway 将用户 DM 错误路由到兄弟 profile 的 session（fallback 查找漏了 profile_name）。涉及 session 状态安全
- **#74554** — 发布的 **linux/arm64 镜像内 .venv 全是 x86_64 wheels**，任何 `hermes` 命令直接 ImportError。Docker 镜像构建链疑似架构变量未传递
- **#73804** — Cron 的 no-agent 脚本任务因 workdir 被序列化到单线程池，造成静默饥饿
- **#71837** / **#69163** / **#62985** — 前述 Windows 侧边栏、profile 迁移、Kanban containment 绕过，均为持续多日的中优先级问题

### 🟩 P3 — 低优先级 / 待复现

- **#73985** — xAI TTS 完全不可用（已有重写 PR）
- **#77078** — `@terminal:zsh:N-M` 引用间歇性缺少选中文本（需复现）
- **#77286** — Windows 更新程序错误提交（附截图，需复现）
- **#77253** — Desktop 代码块无语言标签时被误判为 prose 不渲染
- **#77215 / #77216** — `kanban_attach` 的 base64 严格校验和缺少本地路径选项

---

## 6. 功能请求与路线图信号

今日功能请求呈明显的"**用量可观测性**"和"**交互效率**"特征，部分已有对应 PR：

### 📊 用量与成本分析（同一作者连发三帖）
- [#77221](https://github.com/NousResearch/hermes-agent/issues/77221) — Desktop 缺少本地 token/成本分析界面，核心层已有完整 metering
- [#77222](https://github.com/NousResearch/hermes-agent/issues/77222) — InsightsEngine 缺少按日 token/成本时间序列聚合
- [#77223](https://github.com/NousResearch/hermes-agent/issues/77223) — 聚合视图应区分 included/estimated/unknown 成本桶

→ **路线图信号：** 核心层早已具备完整的用量计量能力（`estimated_cost_usd`、`actual_cost_usd`、`cost_status`、`billing_provider` 等），但 UI 层完全未暴露。这三个 feature request 指向"计量数据 → 可视化"的最后一公里，可能合并为一个 desktop 用量分析特性进入 v0.20。

### ⚡ 性能与延迟
- [#77291](https://github.com/NousResearch/hermes-agent/issues/77291) — 全面审计：每轮 5–13s 延迟主要来自高 reasoning effort 和串行往返，**而非缓存**。数据基于 14 天真实桌面会话采集

→ **路线图信号：** 该 issue 直接挑战"加缓存"的主流优化思路，可能引导后续版本将优化重心转向**推理策略动态调整**与**并行工具调用**。

### 🖥️ 桌面端交互
- [#73778](https://github.com/NousResearch/hermes-agent/issues/73778) — 支持在侧边栏将 session **拖拽到**不同 Project
- 已有 PR [#77293](https://github.com/NousResearch/hermes-agent/pull/77293)（`hermes desktop install` 子命令）、[#77287](https://github.com/NousResearch/hermes-agent/pull/77287)（open-in-tab 偏好）等直接增强桌面端工作流

### 🧠 智能体能力扩展
- PR [#77295](https://github.com/NousResearch/hermes-agent/pull/77295) — **技能学习循环**：后台审查追加 `lessons.md`、skill 查看时自动注入教训、review fork 获得证据摘要。这是一个"让 agent 从失败中学习"的迭代机制，如果合入将显著提升长期记忆能力
- PR [#77076](https://github.com/NousResearch/hermes-agent/pull/77076) — 跨 CLI/gateway/TUI/Desktop 的 **SMART busy-input 编排**，带持久化 ledger 和回放/取消墓碑，属于较大的架构级特性

### 🎛️ CLI 精细化
- PR [#77288](https://github.com/NousResearch/hermes-agent/pull/77288) — 新增 `--reasoning <level>` per-invocation 参数
- PR [#77290](https://github.com/NousResearch/hermes-agent/pull/77290) — `voice.concise_responses` 可配置化

---

## 7. 用户反馈摘要

以下痛点来自今日 Issue 评论中的真实用户描述：

### 😤 最强烈的挫败感：桌面端"设置不生效"
> "After enabling 'Message reactions', the agent never reacts — `react_to_message` never fires, and the model never sees reaction context. The config error 4002 is silently swallowed."  
> —— [#77241](https://github.com/NousResearch/hermes-agent/issues/77241)

同类问题还包括 #71837（Windows 侧边栏重复 lane）、#75756（编辑历史消息失败）。**桌面端配置与核心层之间的通信断裂**已成为今日投诉最集中的主题。

### 🧱 Docker/平台镜像不可用
> "Every hermes invocation fails immediately: `docker exec -u hermes <container> hermes doc...`"（arm64 镜像错误打包 x86_64 wheels）  
> —— [#74554](https://github.com/NousResearch/hermes-agent/issues/74554)

### 🔄 更新/重启反复失败
- Windows 更新无限循环（#77277）："manual PID kills never help because the Desktop app's own backend keeps respawning"
- mac QQ 适配器重启后孤儿 gateway（#77276）

### 📉 延迟问题被量化
> "Hermes turns take 5–13s even when work is trivial... prompt caching is NOT the bottleneck."  
> —— [#77291](https://github.com/NousResearch/hermes-agent/issues/77291)

### ✅ 用户认可的快速修复
社区对 #77298（WhatsApp 超时修复）和 #77285（xAI TTS 重写）表达了积极反馈，特别是 #77285 明确标注"verified live against the real WebSocket protocol"，用户在 issue #73985 中的高质量审计直接推动了修复 PR 的产生。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获维护者响应，建议重点关注：

### 🕓 长期未决 Issues（创建超 30 天）

| Issue | 创建时间 | 持续天数 | 问题 |
|---|---|---|---|
| [#29530](https://github.com/NousResearch/hermes-agent/issues/29530) | 2026-05-20 | **75 天** | Profiled workers 的共享 auth home / OAuth split-brain |
| [#47415](https://github.com/NousResearch/hermes-agent/issues/47415) | 2026-06-16 | **48 天** | Telegram 群聊无 @mention 的照片被丢弃 |
| [#39771](https://github.com/NousResearch/hermes-agent/issues/39771) | 2026-06-05 | **59 天** | `hermes version` 显示 "860 commits behind" 误报 |
| [#62985](https://github.com/NousResearch/hermes-agent/issues/62985) | 2026-07-12 | **22 天** | Kanban 自动拆解绕过 containment 约定 |
| [#64862](https://github.com/NousResearch/hermes-agent/issues/64862) | 2026-07-15 | **19 天** | `hermes skills install` rich MarkupError 崩溃 |

### 🕓 长期未合并 PR（创建超 20 天且仍 OPEN）

| PR | 创建时间 | 内容 |
|---|---|---|
| [#30975](https://github.com/NousResearch/hermes-agent/pull/30975) | 2026-05-23 | Web 工具后端 fallback 链（`web_search`/`web_extract`） |
| [#57982](https://github.com/NousResearch/hermes-agent/pull/57982) | 2026-07-03 | `/sessions search` 标点剥离不对称修复 |
| [#63505](https://github.com/NousResearch/hermes-agent/pull/63505) | 2026-07-13 | Telegram 本地 GIF 通过 `send_animation` 发送 |
| [#64467](https://github.com/NousResearch/hermes-agent/pull/64467) | 2026-07-14 | `prompt-size` 的 platform 技能过滤 |

### ⚠️ 健康度提示
- **#29530 已持续 75 天无维护者介入**，且与今日 #74285（多路复用 gateway 路由错乱）同属 multi-profile 架构的风险面，建议优先排期。
- **#30975 已开放 72 天**，覆盖 web 工具容灾能力，长期未合并可能阻塞依赖它的下游功能。

---

*本日报由 AI 分析师基于 GitHub 公开数据自动生成，链接均指向 NousResearch/hermes-agent 仓库。数据统计窗口为 2026-08-02 至 2026-08-03。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-08-03）

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度中等偏上：新增/活跃 Issues 3 条，PR 相关活动 9 条（其中 6 条处于待合并状态），无新版本发布。值得关注的是，社区对问题的响应速度较快——新报告的工具有失败死循环 Bug（#3311）当天即出现对应修复 PR（#3312）；同时，也有部分 PR 存在重复提交通道（#3313 被关闭后由 #3314 重新发起）。此外，一批一周前提交的 PR/Issue 已进入 stale 状态，需要维护者关注。

## 2. 版本发布

过去 24 小时无新版本发布，此部分省略。

## 3. 项目进展

今日共有 3 个 PR 被关闭或合并，但其中大部分并非功能合并，具体如下：

- **#3313 [CLOSED] Fix: agent not able to execute shell command added to customAllowPatterns**：该 PR 被关闭，但同一作者当天重新提交了 #3314（仍处于打开状态）。关闭原因未注明，推测为提交流程或内容调整。修复内容本身是解决 `customAllowPatterns` 不生效、默认 deny 模式优先级过高的问题。  
  https://github.com/sipeed/picoclaw/pull/3313  
  https://github.com/sipeed/picoclaw/pull/3314

- **#3310 [CLOSED] Feat/auto pr**：描述仅为 "picoclanker did this"，疑似自动化工具或实验性提交，未附带有效功能信息，已关闭。  
  https://github.com/sipeed/picoclaw/pull/3310

- **#3261 [CLOSED] Add zh-TW locale and Traditional Chinese translations**：繁体中文（台湾用语）本地化 PR，历经约两周后关闭，可能已合并或暂未采纳，数据中未标注合并状态。  
  https://github.com/sipeed/picoclaw/pull/3261

**整体评价**：今日没有大型功能合并，项目进展主要体现在问题修复的快速跟进上（#3311→#3312、#3313→#3314），以及安全加固、Web 搜索 Provider 等 PR 仍在待合并队列中。

## 4. 社区热点

- **#3298 [Feature] Add AI Router as an OpenAI-compatible provider preset**（评论 1，stale）  
  该 Issue 由 AI Router 维护者提交，建议将 AI Router 添加为命名 Provider 预设。作者明确表示愿意为此贡献代码。当前用户只能通过通用的 `openai` provider 手动设置 `api_base` 来使用，但无法获得命名管线的完整体验。这反映了用户对**开箱即用集成**的诉求。  
  https://github.com/sipeed/picoclaw/issues/3298

- **#3294 [/list models only shows the current model]（评论 1，stale）**  
  用户配置了多个模型，但 `/list models` 只显示当前模型和 Provider，与命令描述“Configured models”不符。这属于**命令行为与预期不符**的体验问题。  
  https://github.com/sipeed/picoclaw/issues/3294

- **#3311 [BUG] Repeated identical tool failure loops silently（评论 0）**  
  虽然没有评论，但该 Bug 在生产环境造成“用户长时间无响应”的严重后果，且**当天即有修复 PR**（#3312），应是社区当前最关心的技术问题之一。  
  https://github.com/sipeed/picoclaw/issues/3311

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue/PR | 问题描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | 工具每次以相同错误失败时，Agent 循环静默重试直到 `max_tool_iterations`，用户最终收不到任何回答。已在 Telegram 生产环境中观察到 | 已有修复 PR [#3312](https://github.com/sipeed/picoclaw/pull/3312)（打开中） |
| 🟠 中 | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` 命令只列出当前模型，而非全部已配置模型，与命令描述不符 | 无对应修复 PR |
| 🟠 中 | [#3314](https://github.com/sipeed/picoclaw/pull/3314) | `customAllowPatterns` 不生效：默认 deny 模式在 `guardCommand` 中始终优先，导致 `git push` 等命令即使加入白名单仍被拒绝 | 修复 PR 已提交，待合并 |
| 🟡 低 | [#3295](https://github.com/sipeed/picoclaw/pull/3295) | `SplitMessage` 在开头的 fenced-code info 字符串超过 `maxLen` 时可能挂起，导致消息发送阻塞 | 修复 PR 已提交，待合并 |

## 6. 功能请求与路线图信号

- **#3298 AI Router Provider 预设**：已有作者愿意贡献，与当前 [PR #3299 Exa Web 搜索 Provider](https://github.com/sipeed/picoclaw/pull/3299) 方向一致，表明社区希望 **PicoClaw 持续扩大第三方服务集成**。此类 PR 若被接受，下一版本可能新增多个 Provider 预设。
- **#3299 Exa 原生 Web 搜索 Provider**：支持 `POST /search` API、`X-Api-Key` 认证及范围过滤，属于较完整的功能 PR，已进入待合并队列，可能进入下个版本。
- **本地化（i18n）持续推进**：[#3296 捷克语翻译](https://github.com/sipeed/picoclaw/pull/3296) 与已关闭的 #3261 繁体中文说明多语言支持仍在完善中，但优先级可能低于功能修复。

## 7. 用户反馈摘要

从 Issues 评论和描述中可以提炼出以下真实用户痛点：

- **集成体验不足**（#3298）：AI Router 维护者表示，虽然技术上可以通过参数配置连接，但用户无法“选择”一个命名的 AI Route，设置门槛偏高，希望有开箱即用的预设。
- **命令行为误导**（#3294）：用户按 `/list models` 的字面意思期望查看所有配置模型，结果只得到当前模型，造成困惑。这属于 CLI 语义清晰度问题。
- **静默失败导致信任受损**（#3311）：生产环境中，用户发送指令后长时间无响应，且无任何错误提示，直到超时。这种“黑盒”行为严重损害用户对 Agent 可靠性的信心。
- **白名单配置失效**（#3313/#3314）：用户明明按照文档将命令加入 exec 允许列表，却被安全守卫拦截，说明安全模块的配置优先级设计需要更符合直觉。

总体而言，用户对配置灵活性和命令可用性的期望较高，而安全机制与易用性之间的平衡仍是当前主要矛盾。

## 8. 待处理积压

以下 Issue/PR 已超过 7 天未更新，进入 stale 状态，建议维护者优先跟进：

- **[#3297] fix(security): harden remote prompt and exec boundaries**（PR，7/26 创建）  
  安全加固 PR，涉及远程执行默认禁用、逐次审批、origin 策略执行等关键变更，积压超过一周，可能影响远程功能的安全性。  
  https://github.com/sipeed/picoclaw/pull/3297

- **[#3299] Add native Exa web search provider**（PR，7/26 创建）  
  新功能 PR，若计划在下一版本中加入，建议尽快 review 或给出反馈。  
  https://github.com/sipeed/picoclaw/pull/3299

- **[#3295] fix(channels): prevent SplitMessage hang on oversized fence headers**（PR，7/26 创建）  
  稳定性修复，存在潜在的消息发送阻塞问题，建议尽快合并。  
  https://github.com/sipeed/picoclaw/pull/3295

- **[#3294] /list models only shows the current model**（Issue，7/25 创建）  
  功能行为问题，已 stale，但用户期望明确，建议确认是否为已知限制或安排修复。  
  https://github.com/sipeed/picoclaw/issues/3294

- **[#3298] Add AI Router as an OpenAI-compatible provider preset**（Issue，7/26 创建）  
  已有社区贡献意向，建议评估并回复，避免挫伤贡献者积极性。  
  https://github.com/sipeed/picoclaw/issues/3298

---

**总结**：项目当前处于“社区提问积极、修复跟进快、合并节奏平缓”的状态。最值得关注的是 #3311 这类影响用户核心体验的 Bug 已获得快速修复，但一批功能/安全 PR 的 review 积压时间偏长，可能成为影响社区贡献持续性的因素。建议维护者优先处理 stale 队列中的安全和稳定性相关 PR。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-08-03

## 今日速览

过去 24 小时（截至 2026-08-03）NanoClaw 项目共更新 11 项（1 个 Issue、10 个 PR），无新版本发布，整体活跃度中等偏上。新 Issue #3177 报告了 Docker 跨挂载文件系统上的 SQLite 数据库锁竞争问题，影响面较大；PR 侧以 3 条合并/关闭、7 条待审查的节奏推进，核心团队与外部贡献者均有动作，开发重心集中在 Dial 频道集成、远程 MCP 服务器支持与稳定性修复上。

## 项目进展

过去 24 小时有 3 条 PR 被合并/关闭，分别从发布工程、错误处理与技能完整性三个角度巩固了项目基础：

- **[PR #3176](https://github.com/nanocoai/nanoclaw/pull/3176) `fix(release): retry post-publish readback`** — 为发布后的读回校验增加重试机制，提升发布流程的鲁棒性，减少因瞬时故障导致的发布失败。
- **[PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626) `fix(signal): replace silent restartService failure with explicit error`** — 修复 Signal 频道服务重启失败时“静默无操作”的问题，改为显式报错，显著改善可诊断性。
- **[PR #301](https://github.com/nanocoai/nanoclaw/pull/301) `feat(skill): enhance add-telegram skill with Markdown rendering, file downloads, and Linux/Docker guidance`** — 增强 Telegram 集成技能，新增 Markdown 渲染、文件下载（≤10MB）以及 Linux/Docker 环境下的部署指导。

## 社区热点

当前各条目的直接评论数为 0，但从标签与更新状态可识别出以下关注点：

- **[Issue #3177](https://github.com/nanocoai/nanoclaw/issues/3177)** 是今日新开的严重 Bug 报告，描述了 Docker 挂载文件系统上 29,000+ 次只读错误的故障场景，预计将吸引受影响的用户补充环境信息与复现细节。
- **[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) 与 [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)** 由同一作者 OmriBenShoham 提交，均为 Dial 频道集成（SMS + AI 语音通话），属于面向用户的显性功能增强，关注度较高。
- 标签 `core-team` 出现在 **[PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090)**、**[PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)**、**[PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172)** 等条目上，表明基础设施与核心逻辑正在被核心团队密集修改，这往往是重大项目迭代的前奏。

## Bug 与稳定性

按严重程度排列：

1. **严重** — **[Issue #3177](https://github.com/nanocoai/nanoclaw/issues/3177)**：Docker 跨挂载文件系统（macOS/Linux）上的 SQLite 锁竞争问题。`inbound.db` 和 `outbound.db` 因 DELETE 日志模式无法在 VirtioFS 等 Docker 挂载上正确传播，导致 29,000+ 个只读错误和间歇性投递失败。目前尚无关联的 Fix PR，需要优先调查。

2. **中等** — **[PR #3175](https://github.com/nanocoai/nanoclaw/pull/3175)**：command-gate 拒绝通知通过 `writeOutboundDirect()` 直接写入会话的 `outbound.db`，构成第二个写入者，违反仓库自身的单写入者规则（见 `docs/db.md`）。作者 Joi 已提交修复 PR，将投递改道至 delivery adapter，规避数据损坏风险。

3. **中等** — **[PR #2625](https://github.com/nanocoai/nanoclaw/pull/2625)**：Teams 机器人 manifest 中 `supportsFiles` 被硬编码为 `false`，导致个人聊天中的文件上传界面缺失，同时 bot 侧的 `send_file` 投递被静默丢弃，构成双向功能缺陷。修复 PR 已待审约 2 个月。

## 功能请求与路线图信号

- **Dial 频道集成**（[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)、[PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)）：添加 Dial 的 SMS 与 AI 语音通话适配器，并在设置向导与技能模型中增加对应选项。如果合并，将把 NanoClaw 的触达渠道进一步扩展至传统电信网络。
- **远程 Streamable HTTP MCP 支持**（[PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)）：由核心团队成员提交，支持连接远程 MCP 服务器，顺应 AI 助手外部工具接入的主流趋势，预计会被纳入后续版本。
- **模板上下文优化**（[PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090)）：修复所有顶层上下文 Markdown 的拼接顺序，属于对现有行为的一次纠偏，影响所有使用模板的频道技能。
- **技能库清理**（[PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172)）：移除两个 qodo 相关技能，可能出于维护成本或功能替换的考虑，不影响最终用户功能。

## 用户反馈摘要

- **[Issue #3177](https://github.com/nanocoai/nanoclaw/issues/3177)** 是当前最直接的用户痛点反馈：在 Docker 跨挂载文件系统上运行 NanoClaw 的用户遭遇严重锁竞争，导致会话数据库大量只读错误与投递失败，直接影响消息可靠性。该 Issue 当前无评论，但问题描述具体、影响量化（29,000+ 错误），说明用户已做了深入排查，期待维护者给出 workaround 或修复。

## 待处理积压

以下 PR 开放时间较长且无评论或停滞，建议维护者优先关注：

- **[PR #2625](https://github.com/nanocoai/nanoclaw/pull/2625) `fix(teams): set supportsFiles: true`** — 自 2026-05-27 创建，已搁置 2 个月，持续阻塞 Teams 文件功能的恢复。
- **[PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) 与 [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)** — Dial 集成 PR，自 2026-07-14 等待审查至今，建议明确是否纳入下一版本。
- **[PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090) 与 [PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092)** — 核心团队提交的模板修复与 MCP 支持，自 2026-07-19 后无更新，建议尽快给出审查结论或合并计划。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-03

## 1. 今日速览

过去 24 小时 IronClaw 项目保持高活跃度：共 8 条 Issue 更新（7 条新开/活跃）、31 条 PR 更新（22 条待合并、9 条已合并/关闭），无新版本发布。当前工作重心集中在三条主线：一是 **Wave 2 架构收尾**（端口反转栈 #7018 合并、架构决策文档 #7032/#7033 审计对齐），二是 **QA 驱动的投递可靠性与网络安全修复**（theredspoon 批量提交了 5 个高价值 Bug 及对应修复 PR），三是 **CI/覆盖率门禁治理**（#7036 发现覆盖率门禁失效、#7013 恢复 90% 门槛）。值得关注的是，项目已超过一个月未发布新版本（#5598 release PR 仍处于开放状态），生产环境还存在模型预算未强制（#7035）的潜在资金风险。

## 2. 版本发布

过去 24 小时无新版本发布。但注意 #5598（chore: release）已开放 31 天，计划发布 `ironclaw_common 0.4.2→0.5.0`（API breaking）、`ironclaw_safety 0.2.2→0.2.3`、`ironclaw_skills 0.3.0→0.4.0`（API breaking），建议维护者关注发布阻塞原因。

## 3. 项目进展

今日 9 个 PR 已合并/关闭，其中最重要的进展：

**🎉 Wave 2 端口反转栈完整落地**
- [#7018](https://github.com/nearai/ironclaw/pull/7018)（[已合并] refactor(contracts): consolidate the Wave 2 port-inversion stack (WS2.2, WS2.4, WS5)）——按 owner 指示将四个已审 PR（#7000/#7003/#7004/#7005）合并为一个分支，终结了此前每步都需 rebase 的四步级联合并损耗，是 Wave 2 架构里程碑事件。

**🔧 CI 质量基建回补**
- [#7013](https://github.com/nearai/ironclaw/pull/7013)（[已合并] ci: restore the original 90% changed-line coverage floor）——恢复变更行覆盖率 90% 门槛，保持变更分支 LCOV 强制可见且不设全局分支百分比。
- [#6952](https://github.com/nearai/ironclaw/pull/6952)（[已合并] ci: scope Reborn PR tests by affected area）——新增确定性受影响区域规划器，精确选择变更包及传递闭包消费者，避免全量测试浪费。

**📝 文档/架构治理同步推进**
- [#7032](https://github.com/nearai/ironclaw/pull/7032)（docs: reconcile the decision record with post-Wave-2 main）——审计 `docs/reborn/target-architecture/` 与合并后的 main（`3be5f056e`）对齐，关闭所有与已落地实现不一致的记录。

> 整体判断：Wave 2 大部分技术债已清偿，项目正从"功能开发"切换至"加固与审计"阶段。但注意合并列表中以 CI/文档/依赖更新为主，无重大新功能合入。

## 4. 社区热点

**🔥 最受关注 PR：[#7033](https://github.com/nearai/ironclaw/pull/7033) — docs(target-architecture): resolve the open Wave 2 architecture decisions**
- 作者：BenKurrek（core）｜创建 2026-08-03 ｜ size: XS, risk: low
- 核心内容：一次性解决 Wave 2 遗留的全部 8 个架构决策，**且明确标注"决策由 AI agent 在 owner 显式委托下做出"**（"dispatch an opus 5 max thinking agent to resolve all the blocked items"）。这标志着项目开始正式实践 **AI agent 代理架构治理**，是社区治理模式的重要信号。
- 诉求分析：项目正在以 AI agent 驱动的方式加速架构收敛，减少对人工 review 的阻塞依赖。

**🧵 高频迭代的 WebUI 修复组合**
- [#6917](https://github.com/nearai/ironclaw/pull/6917)（fix(webui): open workspace file links in authenticated previews, size: XL）与 [#6906](https://github.com/nearai/ironclaw/pull/6906)（fix: show only API-backed project data, size: L）——均为 italic-jinxin 提交，创建于 7-30，持续更新至今日。前者涉及 Markdown 工作区链接的安全认证预览，后者移除 Projects 页面虚构的 spend/gate/health 等指标，只显示真实 API 数据。反映社区对 **WebUI 数据真实性**的强烈诉求。

**📦 被取代的旧 PR**
- [#7018](https://github.com/nearai/ironclaw/pull/7018) 明确声明 **supersedes #7000、#7003、#7004、#7005**，相关讨论者与后续关注需迁移至 #7018。

> 注：数据中 PR 评论数字段缺失（undefined），以上基于内容权重、跨领域影响、作者身份综合判断。

## 5. Bug 与稳定性

今日共 8 条 Issue 更新，其中 7 条开放、1 条关闭。**不可忽视的是，QA（theredspoon）在 8-02 至 8-03 集中提交了 5 个高价值 Bug，且几乎都已配备对应修复 PR**，质量闭环优秀。

| 严重度 | Issue | 问题描述 | 状态 / 修复 PR |
|---|---|---|---|
| 🔴 高（资金） | [#7035](https://github.com/nearai/ironclaw/issues/7035) | 模型预算执行未接线，每日 USD 上限自 #6174 起从未强制 | OPEN，暂无 fix PR |
| 🔴 高（并发一致性） | [#7025](https://github.com/nearai/ironclaw/issues/7025) | 并发协调器可能重复发送同一持久投递 | OPEN → [#7029](https://github.com/nearai/ironclaw/pull/7029) 已提交 |
| 🔴 高（状态丢失） | [#7017](https://github.com/nearai/ironclaw/issues/7017) | 中断投递恢复可覆盖并发的 Delivered 状态 | OPEN → [#7028](https://github.com/nearai/ironclaw/pull/7028) 已提交 |
| 🔴 高（SSRF 防护） | [#7016](https://github.com/nearai/ironclaw/issues/7016) | 环境代理变量绕过 DNS-rebinding 保护 | OPEN → [#7027](https://github.com/nearai/ironclaw/pull/7027) 已提交 |
| 🟠 中（可靠性） | [#7031](https://github.com/nearai/ironclaw/issues/7031) | 失败惰性投递恢复不重试（协调器生命周期内） | OPEN，可复用 #7028 修复模式 |
| 🟠 中（可观测性） | [#7030](https://github.com/nearai/ironclaw/issues/7030) | doctor 诊断忽略环境代理变量存在性 | OPEN → [#7034](https://github.com/nearai/ironclaw/pull/7034) 已提交 |
| 🟡 中（CI 盲区） | [#7036](https://github.com/nearai/ironclaw/issues/7036) | 变更覆盖率门禁不跑普通 PR，首个判定落在合并队列 | OPEN，owner 指示暂保持 CI 政策不变 |
| 🟢 低 | [#7015](https://github.com/nearai/ironclaw/issues/7015) | Staking 页 UI bug（**已关闭**，用户未提供截图/复现步骤） | CLOSED |

**新增修复 PR**：今日新提 4 个针对性修复 —— [#7029](https://github.com/nearai/ironclaw/pull/7029)（恢复 Prepared→Sending CAS 唯一权威）、[#7028](https://github.com/nearai/ironclaw/pull/7028)（CAS 保护的 Sending→Unknown 恢复）、[#7027](https://github.com/nearai/ironclaw/pull/7027)（禁用 reqwest 系统代理发现）、[#7034](https://github.com/nearai/ironclaw/pull/7034)（doctor 稳定检测 host-mediated ambient proxy）。**建议维护者优先 review 这组"QA 报告 → 即时修复"的成对产出。**

## 6. 功能请求与路线图信号

- **AI agent 代理架构决策（路线级别）**：[#7033](https://github.com/nearai/ironclaw/pull/7033) 的 8 项决策将直接决定后续目标架构走向，包括 `llm_costs`/`ModelCostTable` 等关键数据模型的裁定；其决策依据反过来又暴露了 #7035 的生产缺口。预计下一迭代会重点落实模型成本核算与强制。
- **自定义 MCP 认证（生态扩展）**：[#7024](https://github.com/nearai/ironclaw/pull/7024) 让 `Auto` 托管 MCP 注册通过 RFC 9728 元数据发现验证 OAuth（而非猜测 401/Bearer），已有 Stripe 实战验证，具备纳入下一版本的基础。
- **持久投递所有权模型收敛**：[#7029](https://github.com/nearai/ironclaw/pull/7029) 将所有权唯一权威重新归还给 durable CAS，移除进程内 `in_flight` 权威 —— 与 #7025 配套，是分布式可靠性路线上的关键修正，预计合入后 Reborn 投递语义将显著简化。
- **WebUI 可信数据展示**：[#6906](https://github.com/nearai/ironclaw/pull/6906) 移除 Projects 页虚构指标，意味着产品层面开始"讲真话"，与 #6917 的安全预览共同构成 WebUI 质量提升主线。
- **排队消息转向**：[#5981](https://github.com/nearai/ironclaw/pull/5981)（Reborn queued-message steering）已移植至当前 main 并修复 turn-boundary races，若合入将补齐消息泵的核心能力，但开放已 23 天，推进速度偏慢。

## 7. 用户反馈摘要

- **#7015（唯一直接用户反馈）**：Staking 页 UI bug，报告者称"存在 UI 缺陷"，但**未附截图、具体描述或复现步骤**，维护者在无有效信息的情况下予以关闭。→ 建议后续用户反馈模板强制要求截图/浏览器版本/复现步骤字段，提高 Bug 可用性。
- **QA 视角的"用户"体验**：theredspoon 的 5 个 QA 问题集中暴露两个真实痛点：① 投递恢复路径存在并发覆盖与重复发送风险（#7017/#7025/#7031），反映核心消息管道在故障场景下可能产生用户可见的数据不一致；② 网络出口对开发者常见的 `HTTP_PROXY`/`HTTPS_PROXY` 环境变量处理不一致（#7016/#7030），在代理受限的企业/CI 环境中会引发难排查的连接问题。
- **贡献者体验积极信号**：从 #7028/#7029/#7027/#7034 的提交与 Issue 关联可以推断，**QA 人员在数小时内完成了"报告→复现→修复→回归测试"的闭环**，说明项目对社区提报的响应速度良好，协作流程顺畅。

## 8. 待处理积压

| 关注点 | 项目 | 开放时长 | 说明 |
|---|---|---|---|
| ⚠️ 发布阻塞 | [#5598](https://github.com/nearai/ironclaw/pull/5598)（chore: release） | 31 天 | **已超过一个月未合并**，涉及两个 crate 的 breaking changes，长期挂起会推迟依赖方升级。建议维护者确认阻塞原因（测试未过？等待批量发布？） |
| ⚠️ 核心特性长跑 | [#5981](https://github.com/nearai/ironclaw/pull/5981)（Reborn queued-message steering） | 23 天 | 已移植至最新 main 并修复 review 发现的 turn-boundary races，功能本身 end-to-end 测试通过，需要 owner 决策是否纳入下一里程碑 |
| 新增 CI 盲区 | [#7036](https://github.com/nearai/ironclaw/issues/7036) | — | owner 明确暂不修改 CI 政策，但这是一个"知道绿灯意味着什么"的认知债，建议在 #6952 落地后重新评估，避免覆盖率门禁形同虚设 |
| 生产资金风险 | [#7035](https://github.com/nearai/ironclaw/issues/7035) | — | 模型每日 USD 上限自 #6174 后未强制，**属于持续资金泄漏类问题**，虽无对应 PR 但超过 24 小时未分配，建议尽快 triage |
| WebUI 大 PR 集合 | [#6917](https://github.com/nearai/ironclaw/pull/6917) + [#6906](https://github.com/nearai/ironclaw/pull/6906) | ~4 天 | 均为 XL/L size 且仍在更新中，review 压力较大，但属于用户可感知的体验改进，建议安排专职 reviewer 加速 |

---

**日报总结**：IronClaw 今日整体健康度良好——QA 发现与修复配对率高、CI 基建持续加固、Wave 2 架构尘埃落定。核心风险点在于**生产模型预算未强制（资金）、release PR 长期积压（交付）、覆盖率门禁实际失效（质量盲区）**三项，建议项目 owner 按此优先级介入。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-03

> 数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

今日项目活跃度整体处于**中低水平**：过去24小时无新版本发布，Issues 更新 3 条、PR 更新 6 条，但所有更新均为 4 月初创建的存量条目被 stale 机器人批量标记/关闭，**无新提交或新对话产生**。值得关注的是，4 个高价值 PR（IM 配置修复、定时任务排序重构、前端性能优化、数据库 N+1 查询消除）仍处于待合并状态，且已停滞约 3 个月；社区侧关于长代码块折叠、网关偶发重启的诉求仍在发酵，但响应速度偏慢。当前项目的主要瓶颈在于**存量 PR 的合并推进**，而非新需求的产生。

---

## 3. 项目进展

今日无实质性 PR 被合并（关闭的 2 个均为 dependabot 依赖自动更新），项目主干代码未产生新提交。但以下 4 个存量 PR 持续处于待合并状态，代表了项目下一阶段最可能推进的方向：

- **[PR #1215] fix(im): always rebuild chat handler on setConfig to avoid stale imSe…**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1215)）
  修复 IM 平台（钉钉/Telegram）保存配置时因缺少 `settings` 字段导致 chat handler 未刷新的问题，直接影响 systemPrompt 等配置的热更新。
  
- **[PR #1218] fix(定时任务): 重构任务列表排序规则**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1218)）
  解决定时任务列表按随机 UUID 排序导致新建任务位置不可预期的问题，改为按创建/执行时间排序，提升任务管理可用性。

- **[PR #1219] perf(cowork): 消除会话列表和详情页的无效重渲染**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1219)）
  通过 `React.memo` 和合并 `useSelector` 减少流式输出时的无效渲染次数，影响会话页面的流畅度体验。

- **[PR #1220] perf(cowork): 消除 recentChats/conversationSearch 的 N+1 查询**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1220)）
  优化会话列表和搜索接口的数据库查询逻辑，从每会话 2 次查询降为批量查询，对大规模会话场景的性能提升意义明显。

> 以上 PR 均被标记为 `[stale]`，若近期无维护者介入，有被自动关闭的风险。这 4 个 PR 分别覆盖 **IM 配置热更新、定时任务可用性、前端渲染性能、后端查询性能**，若能合并，将对项目整体稳定性与用户体验产生显著正向推动。

---

## 4. 社区热点

今日讨论热度最高的条目均为 4 月初的存量对话，评论数均为 2：

- **[Issue #1289] feat: 为长代码块添加折叠/展开功能**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1289)）
  这是当前社区**产品需求层面**最受关注的提案。用户指出 LobsterAI 的 AI 输出经常包含几十至上百行代码块，在当前 200 行/20000 字符的降级阈值之下（15~200 行区间）无任何折叠机制，导致会话视图冗长、滚动成本高。提案附带了明确的技术方案（针对 `MarkdownContent.tsx` 中 CodeBlock 组件改造）。该 issue 虽已关闭，但其背后诉求——**长内容可读性优化**——大概率会被纳入后续迭代。

- **[Issue #1217] 【bug】运行过程中偶发启动网关，影响正常使用**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1217)）
  该问题为活跃 bug 反馈，用户提供了完整日志文件（lobsterai-logs-20260401-180401.zip），复现概率约一天 3~5 次，直接影响正常使用。虽然评论数不多（1 条），但问题严重性高，值得维护者优先响应。

- **[Issue #1287] IM机器人连通性测试：appkey/appsecret/aes key 全填 1 也能通过**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1287)）
  该 issue 反映了 IM 机器人配置校验逻辑不严谨的问题——连接测试未对凭证做实质有效性验证。已关闭，但暴露了配置验证环节的薄弱点。

---

## 5. Bug 与稳定性

按严重程度排列：

**高优先级：**

- **[Issue #1217] 偶发重启网关，影响正常使用**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1217)）— **OPEN**
  Windows 10 环境，运行过程中一天内随机重启网关 3~5 次，已附带日志。用户期望行为是"不要重启网关"。属于稳定性/可靠性问题，目前**尚无关联修复 PR**，且已积压超过 3 个月，建议优先排查。

**中优先级：**

- **[Issue #1287] IM机器人连通性测试校验不通过也能通过**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1287)）— **CLOSED**
  appkey、appsecret、aes key 全部填 `1` 即可通过连接测试，说明连通性测试逻辑存在缺陷——仅验证了网络连通性，未验证凭证有效性。该问题虽已关闭，但潜在的配置错误风险仍在，建议在后续版本中完善校验逻辑。

**低优先级 / 无明确 fix：**

- 仓库内另有 **[PR #1215]**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1215)）针对 IM 配置热更新失效的问题提供修复，尚未合并，可视为对 IM 模块稳定性的一大补强。

---

## 6. 功能请求与路线图信号

当前社区功能需求的核心信号集中在**提升长内容阅读体验**与**后端性能优化**两个方向：

1. **长代码块折叠/展开**（[Issue #1289](https://github.com/netease-youdao/LobsterAI/issues/1289)）
   该需求已有关闭结论，但提案完整度较高（含问题定位、方案描述）。结合现有 `CODE_BLOCK_LINE_LIMIT` 降级机制，**代码块交互增强** 很可能成为下一版本前端体验优化的方向之一。

2. **定时任务排序规则优化**（[PR #1218](https://github.com/netease-youdao/LobsterAI/pull/1218)）
   该 PR 直接回应了定时任务功能在真实使用中的痛点，属于功能完成度补全，预计会被提上合并日程。

3. **会话数据加载性能优化**（[PR #1220](https://github.com/netease-youdao/LobsterAI/pull/1220) / [PR #1219](https://github.com/netease-youdao/LobsterAI/pull/1219)）
   针对会话列表/详情页的 N+1 查询和无效重渲染的优化，反映了项目在**会话数据规模扩展**方面的未雨绸缪，也暗示了产品可能在向更重度的协作场景演进。

---

## 7. 用户反馈摘要

- **长代码块严重影响阅读连贯性**（来自 [Issue #1289](https://github.com/netease-youdao/LobsterAI/issues/1289)）：用户反馈"AI 经常输出几十上百行代码块，占满整个会话视图，需要大量滚动才能继续阅读"，尤其是 15~200 行区间没有折叠机制。这是当前高频使用场景下最直接的体验痛点。

- **偶发网关重启带来使用中断**（来自 [Issue #1217](https://github.com/netease-youdao/LobsterAI/issues/1217)）：用户描述"在使用过程中偶发重启网关"，一天出现 3~5 次，并主动提供了日志，说明该问题已明显影响其正常使用，用户配合度高、期待官方修复。

- **配置校验流于形式**（来自 [Issue #1287](https://github.com/netease-youdao/LobsterAI/issues/1287)）：用户发现 IM 机器人连接测试在凭证全填 `1` 时仍提示通过，反映出用户对配置过程的安全性和有效性校验有较高期待。

- **整体满意度信号**：从 issue 和 PR 的交互细节来看，社区用户愿意主动提供截图、日志、复现步骤，说明用户对 LobsterAI 有较高的参与热情和容忍度；但较长的响应周期正在消耗这部分积极性。

---

## 8. 待处理积压

以下存量 PR/Issue 长期未响应，且已触发 stale 标记，需维护者重点关注：

| 类型 | 编号 & 标题 | 停滞时长 | 影响 | 状态 |
|------|-------------|----------|------|------|
| PR | [#1215 fix(im): always rebuild chat handler on setConfig](https://github.com/netease-youdao/LobsterAI/pull/1215) | ~4 个月 | IM 配置热更新失效，影响所有平台 IM 接入用户 | OPEN / STALE |
| PR | [#1218 fix(定时任务): 重构任务列表排序规则](https://github.com/netease-youdao/LobsterAI/pull/1218) | ~4 个月 | 定时任务可用性缺陷，新建任务位置不可预期 | OPEN / STALE |
| PR | [#1219 perf(cowork): 消除会话列表和详情页的无效重渲染](https://github.com/netease-youdao/LobsterAI/pull/1219) | ~4 个月 | 流式输出时页面卡顿 | OPEN / STALE |
| PR | [#1220 perf(cowork): 消除 recentChats/conversationSearch 的 N+1 查询](https://github.com/netease-youdao/LobsterAI/pull/1220) | ~4 个月 | 会话量增长时接口响应变慢 | OPEN / STALE |
| Issue | [#1217 运行过程中偶发启动网关](https://github.com/netease-youdao/LobsterAI/issues/1217) | ~4 个月 | 直接影响正常使用，一天多次 | OPEN / STALE |

> ⚠️ **健康度提示**：多个 PR 修复了明确且影响范围可量化的缺陷，却长达 4 个月未合入主分支。建议维护者优先 review 以上 4 个 PR，过滤掉 stale 风险；同时对 #1217 网关重启问题给予明确响应，避免真实 bug 长时间悬置。

---

*本日报由数据驱动生成，所有条目均可通过链接回溯到 GitHub 原始内容。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-03

## 1. 今日速览

过去24小时内，Moltis 项目保持平稳的低活跃状态：无新 Issue 开启或关闭，无新版本发布，唯一动态为一条中大型功能型 PR（#1183）仍处于待合并阶段。该 PR 聚焦 MCP（Model Context Protocol）服务器的托管仓库（managed repository bundles）体系，涵盖从发现、预览到安装/更新/移除的完整生命周期管理，并引入 Git 凭据、SSH 传输及 vault 集成等底层能力，属于一次功能面较广的架构级扩展。整体来看，项目当前处于“功能开发驱动、社区互动偏弱”的阶段：代码推进有实质内容，但外部反馈与用户参与度较低，健康度中性的同时，需关注社区活跃度的持续表现。

## 2. 版本发布

今日无新版本发布，最新 Releases 为空。近期暂无可供用户升级或验证的发布版，说明上述 PR 的功能仍需经过代码审查与合入后的完整发版周期。

## 3. 项目进展

今日无 PR 被合并或关闭，唯一进展为一条新提交/更新的待合并 PR：

- **[#1183 [OPEN] feat(mcp): add managed repository bundles](https://github.com/moltis-org/moltis/pull/1183)**
  - 作者: penso | 创建: 2026-08-02 | 更新: 2026-08-03
  - 核心内容：
    - 新增 **托管 Git 仓库 bundle** 机制，用于 MCP server 的 **发现、预览、安装、更新、移除** 全流程管理；
    - 支持 **HTTPS Git 凭据** 与 **SSH 传输** 两种仓库访问方式；
    - 集成 **vault 生命周期管理**，支持由仓库导入的 MCP 配置；
    - 涉及 CLI、RPC、Web UI 多层工作流，并包含 **数据库迁移**，说明该 PR 将改变持久化层结构。

该 PR 若合入，将把 MCP server 的安装来源从“手动配置/命令式安装”推进到“仓库声明式管理”的新阶段，是 MCP 子系统的一次重要能力跃升。建议维护者重点关注其数据库迁移与安全凭据处理的代码审查质量。

## 4. 社区热点

今日社区讨论活跃度极低：无 Issue 更新，仅有的 PR #1183 目前无评论数据（评论: undefined）与点赞。未形成实质性的社区讨论热点。

唯一值得关注的是 PR #1183 本身的功能属性——它属于面向开发者的基础设施类功能，可能尚未被广泛用户感知，但其“一键安装/更新 MCP 服务器”的方向，潜在呼应了用户对 MCP 生态易用性的普遍诉求。待该 PR 合入后，预计会吸引更多相关反馈。

## 5. Bug 与稳定性

今日**无 Bug 相关报告**。既没有新开的缺陷 Issue，也没有崩溃或回归问题的记录，项目当前未暴露出明显稳定性风险。唯一需留意的潜在风险来自 PR #1183 所附带的数据库迁移，该变更可能影响现有数据持久化结构，在合入前的代码评审中应重点验证迁移脚本的兼容性。

## 6. 功能请求与路线图信号

今日无用户提交新的功能请求 Issue，但 PR #1183 本身强烈指向了下一阶段的产品路线图：

- **MCP 生态的“包管理化”** — 通过托管仓库 bundle 实现 MCP server 的声明式安装与更新，这通常是由社区对“MCP server 安装繁琐、来源分散”的痛点所驱动的；
- **企业级安全集成** — 支持 HTTPS Git 凭据与 SSH 传输，同时联动 vault 生命周期管理，表明项目在向 **企业/团队级部署场景** 靠拢；
- **多渠道交付** — CLI、RPC、Web UI 三端同步支持，意味着该能力将覆盖不同用户角色（高级用户、自动化脚本、普通界面用户）。

综合判断，该 PR 极有可能被纳入下一版本。若后续用户反馈中持续出现“如何更方便地管理和分发 MCP server”的诉求，可进一步确认该功能的社区需求基础。

## 7. 用户反馈摘要

今日**无可提炼的用户反馈**。当前 PR/Issue 列表中没有用户评论数据，因此无法从真实用户视角获取痛点、使用场景或满意度信息。

从间接信号看，项目缺乏用户公开反馈渠道的活跃流量，可能的原因是：项目仍处于较早的功能开发阶段、核心用户集中在少数贡献者中，或用户更倾向通过其他渠道（如 Discord）交流。建议后续关注主要渠道的讨论质量，并在合适时机引导用户通过 GitHub Issues 沉淀反馈。

## 8. 待处理积压

今日**无长期未响应的重要 Issue 或 PR**。当前唯一开放 PR 为 #1183，状态活跃（昨日创建、今日更新），不存在拖延风险。

从项目整体看，Issue 积压为零（当前 0 条），PR 积压为 1 条（#1183），积压压力很小。唯一建议是：在 PR #1183 进入 review 后，维护者应保持合理响应节奏，避免因功能面较大而拖长合并周期。

---

**报告日期**: 2026-08-03  
**数据来源**: [Moltis GitHub 仓库](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-03

## 1. 今日速览

- 过去 24 小时共 12 条 Issue 更新（9 条新开/活跃，3 条关闭）、28 条 PR 更新（17 条待合并，11 条关闭/合并），无新版本发布，社区贡献密度处于近期高位。
- Bug 闭环节奏良好：UI 冻结（#6589）与光标渲染错位（#6547）均已关闭，对应修复 PR（#6637、#6639）在同日合并，前端稳定性有明显回升。
- 风险信号集中在 **agentscope 2.0.4.post1 兼容性** 问题串（#6612、#6619 及 headless CLI 的同类问题 #6616），直接影响 QwenPaw 2.0.1 存量用户，亟需维护者优先级介入。
- 大量 first-time-contributor 提交了直接修复 PR（#6566、#6615、#6618、#6620、#6623、#6628、#6629 等），社区共建意愿强，但 review 合入速度略滞后于提交速度。
- 综合来看，项目健康度良好：迭代活跃、修复及时、社区正循环；主要隐患在于依赖兼容性管理和 PR 积压周转。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并 PR 共 11 条，按推进方向梳理如下：

**前端稳定性**
- [#6637 修复大型工具输出导致 UI 冻结](https://github.com/agentscope-ai/QwenPaw/pull/6637)：超过 100KB 或 1000 行的工具输出跳过 Prism 语法高亮，仅展示首 200 行 + 尾 300 行，并附折叠提示，直接解决 #6589。
- [#6639 停止 stub node_modules CSS](https://github.com/agentscope-ai/QwenPaw/pull/6639)：修复了 monaco-editor 样式在真实构建中丢失、光标输入框渲染为白色大框的问题（关联 #6547）。
- [#6521 在斜杠菜单中暴露 OMP Loop 模式](https://github.com/agentscope-ai/QwenPaw/pull/6521)：补充 `/ultrawork` 等模式的 autocomplete，并支持 i18n 与内联 Markdown 展示。

**Agent 编排**
- [#6609 修复 spawn_subagent schema 推断](https://github.com/agentscope-ai/QwenPaw/pull/6609)：将 `Optional[list | str]` 改为 `list | str | None`，使得 `batch`、`allowed_tools`、`skills` 等参数不再被错误标记为必填，修复 #6588。

**协议适配**
- [#6543 OneBot 出站文本与本地媒体发送改进](https://github.com/agentscope-ai/QwenPaw/pull/6543)：清理 Markdown 包装链接，支持发送本地媒体文件，改善 QQ/NapCat 端用户体验。

**创作者工具链**
- [#6640 / #6641 creator rejection feedback loop](https://github.com/agentscope-ai/QwenPaw/pull/6641)：同名 PR 在 #6640 关闭后于 #6641 重新打开，新版本包含拒绝反馈回路、overlay 叠加、结构化日志与运行时加固，仍在迭代中。

整体来看，今日合入集中在「控制台稳定性」与「协议体验」两个方向，是 2.0.1 发布后第一波针对性补强。

## 4. 社区热点

- [#6537 Skill tags 重启后丢失（11 条评论）](https://github.com/agentscope-ai/QwenPaw/issues/6537)：作为 #3270 的回归，用户保存到 `skill_pool/skill.json` 的标签在 manifest 重建时被丢弃。高评论量反映出「设置持久化」类问题在社区中的高敏感度。
- [#6612 QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容：proactive 崩溃 + 工具权限死锁](https://github.com/agentscope-ai/QwenPaw/issues/6612)：新环境组合下同时出现 `Msg.content` 类型错误与工具权限死锁，是当前最受关注的兼容性议题，已有对应 PR #6615。
- [#6621 多智能体协作引导缺失](https://github.com/agentscope-ai/QwenPaw/issues/6621)：用户完成 50+ 轮对话调试后才得知 Default Agent 不会自动调用子 Agent，需在 PROFILE.md 显式声明。诉求直指产品引导与文档缺口。
- [#6635 / #6633 慢网络下控制台加载失败](https://github.com/agentscope-ai/QwenPaw/issues/6635)：两个同源 issue 分别覆盖聊天历史与 Skills 列表，核心矛盾为 MB 级未压缩 API 响应 vs 固定 30 秒前端超时。已催生 PR #6636 的修复方案，讨论热度预计还会持续。

## 5. Bug 与稳定性

按严重程度排列（附修复状态）：

| 严重度 | Issue | 问题 | 状态 |
|---|---|---|---|
| 严重 | [#6619 ToolCallBlock 无 extra_content 字段崩溃](https://github.com/agentscope-ai/QwenPaw/issues/6619) | agentscope 2.0.4.post1 下 Gemini thought signature 透传导致每次流式请求崩溃 | 开放；[PR #6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) 待 review |
| 严重 | [#6612 agentscope 兼容性 + 工具权限死锁](https://github.com/agentscope-ai/QwenPaw/issues/6612) | proactive 子系统崩溃，且工具权限等待造成死锁 | 开放；[PR #6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) 待 review |
| 严重 | [#6589 shell 大量输出导致 UI 冻结](https://github.com/agentscope-ai/QwenPaw/issues/6589) | 数万行 stdout 一次性渲染阻塞主线程 | 已关闭；[PR #6637](https://github.com/agentscope-ai/QwenPaw/pull/6637) 已合并 |
| 中等 | [#6565 多行命令换行被折叠 + PIPE 模式卡死](https://github.com/agentscope-ai/QwenPaw/issues/6565) | 引号外换行被替换为空格改变语义；Linux 下后台进程继承 fd 导致 `communicate()` 永久阻塞 | 开放；[PR #6566](https://github.com/agentscope-ai/QwenPaw/pull/6566) 待 review |
| 中等 | [#6625 ACP 通知与响应竞争导致文本丢失](https://github.com/agentscope-ai/QwenPaw/issues/6625) | `session/update` 与 `session/prompt` 同段到达时，外部 Agent 的文本输出被误判为空 | 开放；[PR #6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) 待 review |
| 中等 | [#6624 自动压缩未触发 summarize 记忆](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll 自动压缩跳过 `summarize_when_compact`，手动 `/compact` 正常 | 开放；[PR #6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) 待 review |
| 一般 | [#6537 Skill tags 重启丢失](https://github.com/agentscope-ai/QwenPaw/issues/6537) | #3270 回归，manifest 重建时丢弃已保存标签 | 已关闭 |
| 一般 | [#6547 编辑器光标错位](https://github.com/agentscope-ai/QwenPaw/issues/6547) | monaco 输入框渲染在编辑器顶部 | 已关闭；[PR #6639](https://github.com/agentscope-ai/QwenPaw/pull/6639) 已合并 |
| 一般 | [#6635 / #6633 慢网络下页面加载失败](https://github.com/agentscope-ai/QwenPaw/issues/6635) | MB 级未压缩响应超出前端 30s fetch 超时 | 开放；chat 部分 [PR #6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) 待 review |

## 6. 功能请求与路线图信号

- **用户上下文透明穿透（[PR #6525](https://github.com/agentscope-ai/QwenPaw/pull/6525)）**：实现 `user_id`/`user_name`/`channel` 等元数据从 Chat API 穿透到 Agent、Tool、MCP 与 Skill CLI 子进程，且对 LLM 不可见。该设计指向多租户、审计和个性化场景，有较大概率进入下一迭代。
- **聊天历史分页 + GZip（[PR #6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)）**：对应 #6635 的基础设施级性能改进，同时覆盖分页和压缩两个方向，预计会成为控制台性能优化的标准方案。
- **本地时区时间戳（[PR #6618](https://github.com/agentscope-ai/QwenPaw/pull/6618)）**：移除强制 UTC 归一化，配合后端 #6301 让会话列表正确显示本地时间，属于「体验正确性」类的小型但高感知改进。
- **Provider 统一大重构（[PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)）**：自 7 月 21 日起开放，涉及 provider 发现、模型元数据、路由、Agent 控制与 Console 管理的统一，是当前最大的 roadmap 信号，但合入周期较长，后续版本可能分步落地。
- **AI review bot 增强（[PR #6550](https://github.com/agentscope-ai/QwenPaw/pull/6550)）**：通过预计算文件变更映射提升 CI 审查精度，减少误报，属于工程基础设施方向的自我改进。

## 7. 用户反馈摘要

- **设置持久化是最敏感的用户触点**：#6537 中用户确认标签已正确写入 `skill_pool/skill.json`，但重启后被 manifest 重建逻辑覆盖；配置类回归会显著降低信任感。
- **多智能体协作存在明显的引导缺口**：#6621 用户完整阅读官方文档仍被隐性行为误导，浪费大量调试时间，反馈「不是用户没读文档，而是产品缺少引导」。
- **中文社区是活跃且务实的用户群体**：多条中文 issue/PR 集中在 shell 执行（#6565、#6589）、压缩记忆（#6624）等实际操作场景，且多位用户直接提交修复 PR，对工具链细节非常关注。
- **弱网用户明确表达性能不满**：#6635/#6633 指出 MB 级未压缩响应 + 固定 30 秒超时的组合让页面在慢网络下完全不可用，用户认为这是「基础可用性」问题而非体验优化。
- **积极信号**：first-time-contributor 直接提交高质量修复（如 #6623 ACP 竞争条件、#6628 角色错误、#6629 记忆触发），说明社区对项目方向认同且愿意投入。

## 8. 待处理积压

- **[PR #6302 Provider 统一重构](https://github.com/agentscope-ai/QwenPaw/pull/6302)**：已开放 14 天，无合并迹象；作为 2026-07-21 发起的大规模重构，建议维护者明确阶段性拆分计划，避免长期挂起消耗社区耐心。
- **一批 first-time-contributor 修复 PR 等待 review**：
  - [#6615 agentscope 2.0.4.post1 兼容性修复](https://github.com/agentscope-ai/QwenPaw/pull/6615)（对应严重 #6612）
  - [#6620 Gemini thought_signature 崩溃修复](https://github.com/agentscope-ai/QwenPaw/pull/6620)（对应严重 #6619）
  - [#6623 ACP 文本丢失修复](https://github.com/agentscope-ai/QwenPaw/pull/6623)
  - [#6628 scroll 压缩角色错误修复](https://github.com/agentscope-ai/QwenPaw/pull/6628)
  - [#6629 自动压缩触发记忆修复](https://github.com/agentscope-ai/QwenPaw/pull/6629)
  - [#6566 shell 换行与 PIPE 卡死修复](https://github.com/agentscope-ai/QwenPaw/pull/6566)
  - [#6618 本地时区显示修复](https://github.com/agentscope-ai/QwenPaw/pull/6618)
- 这些问题多为阻塞性 Bug 的直接修复，且集中在 2.0.1 与 agentscope 2.0.4.post1 的组合上，建议维护者优先处理兼容性相关项，再依次合入其余体验类修复。

> 数据来源：CoPaw（github.com/agentscope-ai/CoPaw）GitHub Issues / Pull Requests 公开数据。日报生成时间：2026-08-03。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-03

## 1. 今日速览

ZeroClaw 过去 24 小时保持了极高的活跃度：共产生 50 条 Issue 更新（37 条新开/活跃，13 条关闭）和 50 条 PR 更新（40 条待合并，10 条已合并/关闭），并正式发布 **v0.8.4** 维护加固版本（262 commits，49 位贡献者）。社区讨论聚焦于多项架构级 RFC（工作管道治理、Chat Completions 协议适配、可插拔认证等），同时暴露出 **1 个 P0 级安全漏洞**（WhatsApp 等网关 webhook 未 fail closed，已有修复方向）。项目整体处于**功能规划密集、安全加固与架构重构并行推进**的高活跃阶段，维护者审阅队列承压明显。

---

## 2. 版本发布：v0.8.4

| 项 | 内容 |
|---|---|
| 版本号 | **v0.8.4**（维护与加固版） |
| 规模 | 262 commits，49 位贡献者 |
| 定位 | 功能冻结后的维护列车，重点在稳定性与安全 |

**主要更新方向（据 Release Notes）：**
- **记忆与 SOP 控制面扩展**：强化长期记忆与标准操作流程（SOP）的执行控制；
- **Provider 与 Channel 可靠性提升**：修复多 provider 与渠道集成中的稳定性问题；
- **Sandbox 与凭据边界加固**：收紧运行时沙箱与密钥管理；
- **桌面端与发布管线改进**：优化桌面端体验与 CI/CD 发布流程。

**破坏性变更 / 迁移注意**：
- Issue #8357 作为 v0.8.4 维护列车 tracker 已关闭，但其中记录的早期决策表明该版本包含 **feature-freeze 前的行为变更**，建议升级前查阅里程碑页完整清单；
- 已知问题：**all-features Docker 变体在 v0.8.4 发布流程中未能发布**（Containerfile 锁定的 Rust 1.95.0 低于项目 MSRV 1.96.1），Issue #9690 跟踪中，容器用户暂无法获取 all-features 镜像。

🔗 [v0.8.4 Release](https://github.com/zeroclaw-labs/zeroclaw/releases) | [v0.8.4 维护 tracker #8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)

---

## 3. 项目进展

本节汇总过去 24 小时关闭/合并的关键 PR，以及整体健康度的提升。

**已合并/关闭的重点 PR（10 条，择要）：**

| PR | 关联问题 | 内容 | 影响 |
|---|---|---|---|
| [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478) | #9465 | 预检查拒绝时通知发送方，避免"看起来像挂起" | 改善渠道 UX，Telegram 用户不再只收到无解释的 emoji 反应 |
| [#9519](https://github.com/zeroclaw-labs/zeroclaw/pull/9519) | #9519 | 序列化网关配置写入，防止并发更新丢失 | 消除 P1 级配置竞态导致的数据丢失风险 |
| [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) | #8838 | 加固 SSE 补全与空闲超时（维护者代为补齐后合并） | 提升 OpenAPI/Anthropic 兼容 provider 的超时可靠性 |
| [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) | #9006 | 从流式文本中剔除 `<eom>` 等终端标记 | 修复 AI21 Jamba 模型的可见/持久化文本泄漏 |
| [#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) | — | 提取重复的 OAuth 刷新重试循环至 oauth_common | 纯重构，消除 provider 间复制粘贴代码 |
| [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) | — | 修复 Rust 1.96 下 `cargo test --doc` 失败 | 恢复 doc 测试 CI 通过 |
| [#9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) | #9690 | 修复 MSRV 升级后的 all-features Docker 发布 | 发布管线恢复（但 #9690 显示仍有残留问题） |

**整体进展判断**：v0.8.4 的落地是本周期的"收盘动作"；渠道 UX（Telegram 回复）、配置竞态、OAuth 维护性、CI 健康的修复说明项目正在**系统性清理历史债务**。同时，40 条待合并 PR 中大量带 `needs-author-action` 标签，提示**贡献者响应度**是当前吞吐的主要瓶颈而非代码质量。

---

## 4. 社区热点

按评论数排序的高互动 Issues 反映社区的真正关切——**架构决策与治理流程**成为讨论焦点：

**① [Issue #6808：RFC: Work Lanes, Board Automation, and Label Cleanup（17 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**
- 讨论已持续 2.5 个月（5 月 20 日创建），最新更新 8 月 2 日；
- 诉求：如何让 Issue/PR 路由自动化，减少维护者手动打标签的负担；
- 信号：社区对**协作流程效率**的耐心在消耗，Rev.23 仍在"Rollout in progress"。

**② [Issue #8603：RFC: ZeroClaw Chat Completions profile（15 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)**
- 热切诉求：让 OpenAI Chat Completions 协议客户端（Open WebUI、LobeChat、Aider、LangChain 等）直接接入 ZeroClaw；
- 价值：**生态兼容性**是最响亮的社区声音，目前仅支持 WebSocket/ACP/webhook 限制了采用。

**③ [Issue #7141：RFC: Pluggable inbound authentication and canonical principals（9 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)**
- 安全架构讨论，目标 Identity & Access 里程碑；
- Rev 6 已迭代，OIDC 与可插拔 provider 方向明确。

**④ [Issue #8303：RFC: Goal mode for bounded autonomous session work（9 评论，👍 1）](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)**
- 社区想要**有界自主目标模式**（直到完成/暂停/失败/预算耗尽），属于 agent 能力的关键演进。

**⑤ [Issue #8692：Maintainer decision queue for RFCs（8 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**
- 跟踪器本身成为热点，说明社区**对 RFC 决策延迟的集体焦虑**——已有专门 tracker 来管理评审队列。

**分析**：社区热度集中在"如何治理"而非"修什么 Bug"，表明项目已度过早期功能爆发期，进入**需要制度化决策机制**的阶段。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 / S0（安全/数据丢失）

**[Issue #9565：网关 webhook 处理器未 fail closed —— WhatsApp Cloud/Linq/WATI（3 评论，状态 in-progress）](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)**
- 风险：三个渠道（WhatsApp Cloud、Linq、WATI）的入站 webhook **不验证调用者即可将消息注入 agent**，可致数据丢失/安全风险；
- 修复状态：**已有对应 PR [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571)（移除 WATI 渠道，size:XL，needs-author-action）**，但尚未合并；WhatsApp Cloud 和 Linq 的修复待定。

### 🟠 P1 / S2（功能受损、高影响）

| Issue/PR | 内容 | 状态 |
|---|---|---|
| [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) | Containerfile 锁定 rustc 1.95.0，低于 MSRV 1.96.1，all-features 容器自 7 月 8 日起不可构建 | in-progress，v0.8.4 发布时暴露，[#9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) 声称修复但本 issue 仍开 |
| [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) | 插件 Registry 的 WIT 固定与 master 偏离，破坏了已发布组件的构建（S2） | accepted，follow-up，暂无对应 PR |
| [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) | `cron add --help` 中 3 个示例全部无法运行，空状态提示第 4 个错误写法（S3 但 P1 因为 CLI 核心体验） | accepted（有 1 评论），暂无 PR |

### 🟡 P2（常规 Bug 修复）

- [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578)：zerocode 启动失败时不终止进程（S3），状态 in-progress；
- [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465)：预检查拒绝时仅回复 emoji 无文本说明——**已由 PR #9478 修复并关闭** ✅；
- [#8997](https://github.com/zeroclaw-labs/zeroclaw/issues/8997)：peer_groups 引用不存在的 channel 别名应告警——**已关闭（功能已实现）** ✅。

---

## 6. 功能请求与路线图信号

### 已具备 PR 支撑、很可能进入 v0.9.0 的功能

| 功能/PR | RFC 背景 | 说明 |
|---|---|---|
| [PR #9696](https://github.com/zeroclaw-labs/zeroclaw/pull/9696)：models.dev 目录解析支持 `modalities`（图像输入） | #8733 | 为视觉模型能力检测铺路，**今日新开** |
| [PR #9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352)：OTel 跨轮次会话关联 | #8933 | 可观测性增强，标注 `status:blocked`？实际为 needs-author-action |
| [PR #9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)：rate limit 后轮换 live 凭据 | — | 多凭据可靠性关键增强 |
| [PR #9405](https://github.com/zeroclaw-labs/zeroclaw/pull/9405)：MCP 每服务器自定义 CA 信任 | — | 安全边界细化 |
| [PR #9413](https://github.com/zeroclaw-labs/zeroclaw/pull/9413)：Docker workspace 根路径未解析时 fail closed | — | 防 bind mount 逃逸 |
| [PR #8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969)：Slack 线程历史回填 | — | 首条提及式提问可用上下文 |
| [PR #8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313)：技能默认紧凑注入，弃用 full 模式 | — | 降低 prompt 上下文占用 |

### 处于 RFC 讨论期的方向性需求（体现社区路线图意愿）

1. **[Chat Completions 适配 #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)**：呼声最高，直接扩大生态；
2. **[目标模式（Goal mode）#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)**：从交互式转向有界自主任务，agent 成熟度关键一步；
3. **[统一附件架构 #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** 与 **[运行时统一会话所有权 #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)**：架构去中心化/适配器化的方向；
4. **[社区驱动的本地模型推荐 #9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549)**：关于 Ollama/llama.cpp 模型选择的知识库，降低本地部署门槛；
5. **[产品遥测（opt-in）#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621)**：让维护者基于真实使用数据决策。

---

## 7. 用户反馈摘要

从 Issues 评论与 Bug 报告中提炼用户声音：

**😤 痛点：**

- **"文档示例是坏的"**（#9672）：`cron add` 帮助里 3 个示例全失败，空状态提示第 4 个也是错的——用户按文档操作直接报错，"An operator following any of them gets an error rather than a job"；
- **"产品看起来坏了"**（#9465）：Telegram 渠道预检查拒绝时只给一个 emoji 反应，无文字说明，用户侧观感就是 agent 坏了，"from the sender's side the agent looks broken"；
- **"webhook 随便打"**（#9565）：三个渠道的 webhook 无认证，攻击者可以伪造消息注入 agent——用户用源码检查直接确认了这一点；
- **"CI 默默坏了两周"**（#9690）：all-features 容器从 7 月 8 日起不可构建，直到 v0.8.4 发布才被发现，说明 CI 监控存在盲区。

**😊 满意点：**

- **维护者快速介入**：#8838 中维护者 Audacity88 直接为贡献者分支补交 commit 完成修复并合并；
- **配置行为改进获得认可**：#8997 关闭说明社区提出的配置验证告警已被实现。

**🙋 诉求：**

- 社区对 RFC 评审进度不满（#8692 决策队列 tracker 本身成为热议话题）；
- 对本地模型支持有明确需求，但缺少模型选择的决策支持工具（#9549）。

---

## 8. 待处理积压

### 长期未决、需要维护者关注的关键项

**① 旧 RFC 积压（超过 60 天仍未审阅定论）**

| Issue | 创建 | 主题 | 风险 |
|---|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 05-20 | 工作管道/看板自动化 | 社区耐心消耗 |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | 05-29 | Schema 验证的记忆合并降级 | high |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 06-03 | 可插拔入站认证 | high，P1 |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | 06-03 | 运行时安全决策管线 | high |
| [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) | 06-05 | 结构化可观测性增强 | high |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | 06-17 | WASM 插件生命周期 Hook | high |

**② 待作者行动的 PR（`needs-author-action`，阻塞合并）**

| PR | 创建 | 待办 |
|---|---|---|
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | 07-23 | config/set 回滚自动创建别名（P1） |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | 07-26 | 凭据轮换（XL） |
| [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) | 07-28 | tools 标签包裹的工具调用解析 |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | 07-10 | Bedrock Nova 2 缓存排除（等待超 3 周） |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 07-11 | 查看器断开后保持 agent 运行（P1） |
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) | 07-30 | 移除 WATI 渠道（**P0 安全问题缓解关键**） |

**③ 阻塞中的 PR**

- [PR #9382](https://github.com/zeroclaw-labs/zeroclaw/pull/9382)（WhatsApp 策略双模式强制，P1）——被 #9397 的"premature acceptance"延误，维护者已修正 RFC 关系，现 blocked。

**④ 结构性信号**

- 40 条待合并 PR 中，相当比例带 `needs-author-action`，**贡献者响应率是当前项目吞吐第一瓶颈**；
- #8692（维护者决策队列 tracker）的存在本身说明治理机制已跟不上 RFC 提交速度，建议维护者优先处理该 tracker 中列出的决策项。

---

> **健康度总结**：发布行为正常（v0.8.4 落地）、Bug 修复节奏良好（多个 P1/P2 快速关闭），但存在 **1 个未修复的 P0 安全漏洞**（#9565）与 **RFC 决策积压**两大风险。建议维护者本周优先：(1) 推动 WATI 移除 PR 合并或单独修复 webhook 认证；(2) 在 #8692 上批量给出 RFC 裁定结果；(3) 修复 #9690 的容器 MSRV pin 问题。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*