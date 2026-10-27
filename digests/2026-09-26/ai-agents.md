# OpenClaw 生态日报 2026-09-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-26 13:23 UTC

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

# OpenClaw 项目日报 · 2026-09-26

## 1. 今日速览

过去 24 小时项目维持极高活跃度：Issues 更新 500 条（459 条为新开/活跃，41 条关闭），PR 更新 500 条（350 条待合并，150 条已合并/关闭），但**新版本发布为 0**。今日最显著的特征是 **P0 级稳定性问题集中爆发**：Gateway 崩溃循环、SQLite WAL 无限增长、更新流程失败等多条 `impact:ux-release-blocker` 问题同时处于活跃讨论状态。维护者 steipete 于 2026-09-26 集中提交了一批大规模重构 PR（core / channels / qa-lab 的 "deslop" 系列），显示主干代码正在做结构性清理。整体看，项目处于"高吞吐修复 + 大规模重构并行"的状态，健康度中等偏紧——修复动作频繁，但累积的稳定性债务仍在放大。


## 2. 版本发布

今日无新版本发布。


## 3. 项目进展

今日已合并/关闭 150 条 PR，但**展示列表中缺少已合并 PR 的详情**，仅可确认以下两条 Issue 状态由 OPEN 转为 CLOSED，代表对应问题已获推进：

- **#157842 [CLOSED]** `prepared-model-catalog` worker 每 agent turn 保留约 77 MB 堆内存（超过 512 MB 限制）——2026.9.5 → 9.6 升级后的内存泄漏，已被关闭，说明修复已落地或已定位。
  链接：openclaw/openclaw Issue #157842
- **#119087 [CLOSED]** Gateway 冷启动在 1-vCPU 容器上从 2026.7.1-beta.1 到 2026.7.2-beta.7 退化约 2.5 倍——长期性能回归问题被关闭。
  链接：openclaw/openclaw Issue #119087

**重构推进信号**：维护者 steipete 今日提交多份 XL 级重构 PR，覆盖 core（#158906）、channels（#158830、#158896）、qa-lab（#158889），并推动 CI 迁移至托管 runner（#158257），表明项目正进行系统性的"去 slop"清理与基础设施降本。这些 PR 均声明"不改变运行时/配置/更新行为"，属于维护性投入而非功能推进。
链接：openclaw/openclaw PR #158906 | #158830 | #158889 | #158257


## 4. 社区热点

今日讨论最活跃的条目集中在**稳定性与数据安全**，且多为长期挂起的高难度问题：

| 条目 | 状态 | 评论 | 焦点诉求 |
|---|---|---|---|
| #143524 SQLite WAL 增至 1.4–2.8 GB 阻塞 Gateway 启动 | OPEN, P0 | 72 | Windows 单网关环境下 WAL 永不 checkpoint，用户需手动离线处理才能启动 |
| #48003 Steer 模式未在轮次中注入消息 | OPEN, P1 | 20 (👍4) | 主会话 steer 模式失效，消息被排队而非注入运行中的 turn |
| #137332 终端 requester-settle 批次永久重试 | OPEN, P1 | 19 | 失败/超时/孤儿子任务批次在所有权检查后无限重试 |
| #87744 Codex 驱动的 Telegram 轮次反复超时 | OPEN, P1 | 18 (👍4) | 等待 `turn/completed` 失败，Telegram 会话无法交付最终答案 |

链接：openclaw/openclaw Issue #143524 | #48003 | #137332 | #87744

**分析**：72 条评论的 #143524 是绝对焦点——一个 P0 且带 `crash-loop` 与 `ux-release-blocker` 标签、自 2026-09-09 起持续发酵 17 天的数据层问题，说明用户对"升级后无法启动"的容忍度已触底。多条高评论 Issue（#48003、#87744、#137332）都指向同一主题：**会话状态机在并发/异常路径下不可靠**——steer 不注入、批次不收敛、轮次不终止。这不是零散 bug，而是会话/reply 生命周期设计层面的系统性薄弱点。

PR 侧热度集中在 steipete 的重构系列与 `#158587 perf(gateway): stream append deltas to every client`（修复并发聊天流序列化导致的二次方流量增长），后者直击性能痛点。
链接：openclaw/openclaw PR #158587


## 5. Bug 与稳定性（按严重程度）

### P0 — 崩溃/发布阻塞

- **#143524** SQLite WAL 无限增长（1.4–2.8 GB）阻塞 Gateway 启动，Windows 2026.9.2/9.3。标签含 `impact:crash-loop`、`no-new-fix-pr`。**无 fix PR**。
  链接：openclaw/openclaw Issue #143524
- **#154114** `openclaw update` 候选排练失败："No usable, authenticated, tool-capable inference route"，尽管线上 Gateway 模型鉴权正常。**无 fix PR**。
  链接：openclaw/openclaw Issue #154114
- **#152804** 2026.9.5 回归：minimax-portal 升级后丢失模型目录，heartbeat/main-lane 报 "Unknown model"。**无 fix PR**。
  链接：openclaw/openclaw Issue #152804
- **#157160** Gateway 在 `plugin-doctor-post-session-state` 上崩溃循环（已修复 busyTimeoutMs=0 后仍复现）。`crash-loop` + `release-blocker`。**无 fix PR**。
  链接：openclaw/openclaw Issue #157160
- **#155094** 更新失败：unexpected-error（2026.9.4）。**无 fix PR**。
  链接：openclaw/openclaw Issue #155094
- **#153049** 更新失败：doctor-failed（2026.9.4）。**无 fix PR**。
  链接：openclaw/openclaw Issue #153049
- **#157812** Windows 自动更新反复失败（多失败模式：托管服务预检、快照路径未展开 `$OPENCLAW_STATE_DIR`、重启后 `reconcile:abandoned`）。**无 fix PR**。
  链接：openclaw/openclaw Issue #157812
- **#91931** 预置 SOUL.md/IDENTITY.md/USER.md 导致 OpenClaw 在首次运行前自动完成 bootstrap 并**删除用户提供的 BOOTSTRAP.md**（数据丢失）。**无 fix PR**。
  链接：openclaw/openclaw Issue #91931
- **#138409** `gateway-active-work` drain 将 controller-session 计为 blocker，导致插件更新死锁。**无 fix PR**。
  链接：openclaw/openclaw Issue #138409

### P1 — 会话状态 / 消息丢失 / 崩溃

- **#48003** Steer 模式不注入消息（见社区热点）。**无 fix PR**。
- **#137332** 终端 requester-settle 批次无限重试。**无 fix PR**。
- **#87744** Codex Telegram 轮次超时。**无 fix PR**。
- **#148707** 2026.9.4 回归：第二个 run 顶替在途 turn 时丢失回复（"no active tool authority snapshot"）。**无 fix PR**。
- **#85251** Codex app-server 发 `turn/started` 后静默，embedded run 卡死整个恢复窗口。标签 `clawsweeper-recovery-stuck`。**无 fix PR**。
- **#84516** Codex app-server 长回复在 ~1000–1100 字符处静默截断（stop=null, aborted=false）。**无 fix PR**。
- **#154572** 2026.9.5：`sessions_spawn` 到 claude-cli 子会话始终失败（SessionTranscriptWriterClaimReboundError，~350 ms）。**无 fix PR**。
- **#94939** 6.x 状态迁移遗留空（0 字节）channel conversation-store SQLite，破坏 MS Teams 主动发送。**有 linked PR open**。
- **#157986** Automations：每个 agentTurn 任务因 DataCloneError 失败（command/script payload 正常）。**无 fix PR**。
- **#134993** 2026.8.1 升级后 Gateway 在文件系统发现中忙循环占满一核（大型 skill/agent 舰队）。**无 fix PR**。

### P2 — 性能 / 缓存 / 摩擦

- **#95610** OpenAI 模型 prompt-cache 前缀频繁变更（每轮动态注入）破坏自动前缀缓存。**有 linked PR open**。
- **#67419** 会话上下文膨胀：bootstrap 文件每轮重新注入，浪费 20–30% token。
- **#82662** 隔离 cron agentTurn 失败："setup timed out before runner start"，所有 fallback 模型耗尽。
- **#87441** diagnostics/memory 阈值参数未接入配置。
- **#87756** 回归：prompt 启动的 Lobster 工作流在嵌套 `/tools/invoke` 处挂起（curl 启动正常）。
- **#143980** Docker 沙箱 agent 的 `taskSuggestions.accept` 因 `lstat '/workspace'` 失败。

**稳定性小结**：绝大多数高严重度问题标注 `clawsweeper:no-new-fix-pr`（无新修复 PR），其中 P0 更新失败类问题多达 5 条且集中在 2026.9.4→9.5 升级路径上。**升级可靠性是当前最大的健康度风险**。


## 6. 功能请求与路线图信号

- **#155633** 新增 Databricks Unity Gateway 为原生模型 provider（OpenAI 兼容 `/ai-gateway/mlflow/v1`，含 `system.ai.claude-sonnet-4-5`、`system.ai.gpt-5-6-sol`）。标签 `linked-pr-open`，**最有可能进入下一版本**。
  链接：openclaw/openclaw Issue #155633
- **#138366** 允许 memory slot owner 驱动 Dreams 页面（在 `MemoryPluginCapability` 中加入 `dreaming` provider）。属插件架构扩展，需产品决策。
  链接：openclaw/openclaw Issue #138366
- **#91455** Kubernetes 文档更新（现文档教程被指"awkward"，讨论为何不用 Helm）。
  链接：openclaw/openclaw Issue #91455

**判断**：#155633 已有 linked PR，最可能落地；#138366 涉及插件能力契约，需 maintainer 产品决策，短期进入版本的概率较低。


## 7. 用户反馈摘要

- **升级即故障**是最集中的不满：多个用户在 2026.9.4→9.5/9.6 升级后遭遇更新失败（#155094、#153049、#154114）、模型目录丢失（#152804）、Gateway 崩溃循环（#157160、#157842）、Windows 自动更新反复失败（#157812）。用户对"更新器自身不可靠"表达出明显的挫败。
- **数据安全焦虑**：一位用户报告预置身份文件导致 OpenClaw 在首次运行前**删除其手工编写的 BOOTSTRAP.md**（#91931），另有 6.x 迁移留下 0 字节 SQLite 导致 Teams 主动消息失效（#94939）——两者均涉及用户数据丢失或破坏。
- **成本与资源敏感**：用户明确指出 bootstrap 文件每轮重注入浪费 20–30% token（#67419），以及 WAL 文件膨胀到 GB 级占用磁盘（#143524），反映自托管/单机用户对资源占用的高度关注。
- **并发路径不可靠**：steer 不注入（#48003）、回复丢失（#148707）、长回复被截断（#84516）、批次无限重试（#137332）——多位用户描述了在多轮/并发会话中"消息消失或永远不返回"的重复体验。
- **使用场景画像**：Windows 单机 Gateway（#143524、#157986、#157812）、Docker 沙箱 agent（#143980、#94939）、1-vCPU 容器（#119087）、大型 skill/agent 舰队（#134993）、Kubernetes 部署（#91455）——用户群体覆盖从个人桌面到容器化生产环境。


## 8. 待处理积压（长期未响应 / 需维护者关注）

以下高价值 Issue 已挂起数月，且多数标注 `needs-maintainer-review` 或 `needs-product-decision`：

- **#48003**（创建于 2026-03-16，已 6 个月）Steer 模式失效，P1 + 4 👍，涉及核心会话行为。
- **#87744**（2026-05-28）Codex Telegram 超时，P1 + 4 👍，`needs-live-repro`。
- **#85251**（2026-05-22）Codex app-server 静默卡死，P1，`clawsweeper-recovery-stuck`。
- **#84516**（2026-05-20）Codex 长回复截断，P1 + 2 👍。
- **#67419**（2026-04-15）bootstrap 上下文膨胀，P2 + 2 👍，影响每轮 token 成本。
- **#91931**（2026-06-10）bootstrap 删除用户文件，P0 + 数据丢失，`diamond lobster` 评级，已 3 个多月。
- **#82662**（2026-05-16）隔离 cron agentTurn 超时，P2 + 2 👍。
- **#87441**（2026-05-27）memory 阈值未接入配置，P2 + 2 👍。
- **#138409**（2026-09-04）gateway drain 死锁，P0，`needs-maintainer-review`。

**PR 侧积压**：多条 PR 处于长时间等待状态，需维护者推进：

- **#135328**（2026-09-01）UI 聊天记录宽度修复，`needs-pr-context` + `needs proof`。
- **#133376**（2026-08-30）Code Mode 允许 `skills.read` 加载 skill root 下文件，P1 + `security-review-required`。
- **#135290**（2026-09-01）memory 组合搜索在负载下保留 wiki 结果，`waiting on author`。
- **#111646**（2026-07-20）Codex 避免过早的 post-tool turn 超时，P3 `needs proof`。
- **#89826**（2026-06-03）聊天 token 用量进度条，maintainer 标签 + `needs proof`。

**提醒**：Codex/claude-cli 运行时相关的会话问题（#87744、#85251、#84516、#154572）呈现出明显的聚类特征，建议维护者以"运行时集成稳定性"为单位统一排查，而非逐条处理。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析
**数据日期：2026-09-26｜样本：14 个项目**

---

## 1. 生态全景

当前个人 AI 助手与自主智能体开源生态整体处于**"高吞吐迭代 + 稳定性债务累积"并行期**：头部项目（OpenClaw、ZeroClaw、NanoClaw、Hermes Agent）单日工程吞吐达数十至上百条 Issue/PR，但**升级可靠性、会话状态机并发正确性、审批权限门控**成为跨项目共同暴露的系统性薄弱点。绝大多数项目当日 Release 数为 0，说明生态主流已从"功能扩张"转入"修复与重构"节奏。同时，**渠道接入（飞书、QQ、Discord、WhatsApp、Telegram、Slack）与多 provider 适配**是需求侧最活跃的扩张方向，反映真实用户在群组协作、多平台部署场景的落地诉求。值得注意的是，**贡献者响应快但合并吞吐普遍滞后**——多个项目待合并 PR 与已合并 PR 比例超过 10:1，评审带宽正成为生态级瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃 · 关闭） | PR 更新（待合并 · 已合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（459 · 41） | 500（350 · 150） | 0 | 中等偏紧：高吞吐修复 + 大规模重构并行，P0 稳定性债务放大 |
| **ZeroClaw** | 50（45 · 5） | 50（46 · 4） | 0 | 输入远大于输出，46 条待合并 + 多个 S0/S1 长期 in-progress |
| **NanoClaw** | 5（5 · 0） | 50（46 · 4） | 0 | 高活跃但关闭率低，v2.4.0 回归集中暴露 |
| **Hermes Agent** | 50（48 · 2） | 50（42 · 8） | 0 | 发现密集响应及时，合并吞吐低于问题产生速度 |
| **NanoBot** | 6（4 · 2） | 16（13 · 3） | 0 | 良好：修复响应快，13 条待合并构成审查瓶颈 |
| **CoPaw** | 11（10 · 1） | 11（11 · 0） | 0 | 中等偏高：修复闭环率高，但合并通道停滞 |
| **LobsterAI** | 6（0 · 6） | 9（0 · 9） | 0 | 低位维护：stale 集中清理，非功能扩张 |
| **IronClaw** | 1（1 · 0） | 2（2 · 0） | 0 | 低位平稳，无代码入主干 |
| **PicoClaw** | 0（1 关闭） | 5（4 · 1） | 0 | 平稳偏低，存量 PR 长期滞留 |
| **NullClaw** | 0 | 5（5 · 0） | 0 | 单点集中，0 合并，积压累积 |
| **Moltis** | 0 | 1（1 · 0） | 0 | 低强度维护日，无负面信号 |
| **TinyClaw** | — | — | — | 无活动 |
| **ZeptoClaw** | — | — | — | 无活动 |
| **NanoClaw（qwibitai）** | 见上 | 见上 | 0 | 见上 |

> 注：OpenClaw 的 500 条为平台展示上限，实际值可能更高。TinyClaw、ZeptoClaw 当日无活动。

---

## 3. OpenClaw 在生态中的定位

**规模差距是数量级的。** OpenClaw 单日 Issue/PR 更新量（各 500 条）远超第二梯队（ZeroClaw、Hermes、NanoClaw 均为 50 条），约为后者的 10 倍，是生态中唯一的"平台级"参照物。

**优势：**
- **修复—重构双轨并行**：当日既关闭了 #157842（77 MB 堆泄漏）、#119087（冷启动退化 2.5 倍）等长期性能回归，又由维护者 steipete 集中提交 core/channels/qa-lab 的 XL 级 "deslop" 重构系列，并推进 CI 迁移托管 runner——显示项目具备规模化重构的组织能力。
- **生态位参照**：多个同类项目直接对标 OpenClaw 能力（LobsterAI 的 `openclaw` 运行时修复、IronClaw 的 openclaw 会话生命周期），说明其已成为个人 AI 助手的事实标准。

**技术路线差异：**
- 相比 NanoBot/CoPaw 侧重渠道与 provider 广度，OpenClaw 更重**核心运行时与会话状态机**，其 P0 问题（SQLite WAL 无限增长、steer 不注入、批次无限重试）集中于数据层与并发路径深度。
- 相比 Hermes/NanoClaw 侧重安装更新链路，OpenClaw 的问题面更广，但也因此**升级可靠性风险敞口最大**——5 条 P0 更新失败类问题集中在 2026.9.4→9.5 路径。

**社区规模：** 单条焦点 Issue（#143524）72 条评论、持续 17 天，Discord/Telegram 等渠道均有用户规模，用户画像覆盖从 Windows 单机 Gateway 到 Kubernetes 生产部署。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/安装可靠性** | OpenClaw、Hermes、NanoClaw、CoPaw、LobsterAI | 更新后崩溃循环、残留旧 venv、归档缺失 `setup/`、混合构建、更新器自身不可靠 |
| **会话状态机并发正确性** | OpenClaw、NanoClaw、LobsterAI | steer 不注入、回复丢失/截断、Agent 会话永久无法启动、turn 竞态 |
| **审批/权限门控** | ZeroClaw、NanoClaw、OpenClaw | 无人值守 turn 无 ApprovalManager、Discord 审批一律被拒、跨组重启作用域错误 |
| **渠道接入扩张** | NanoBot、ZeroClaw、PicoClaw、NanoClaw、CoPaw | 飞书机器人互发、WhatsApp 群组创建、QQ 事件重放、Discord 自回复回灌 |
| **多 provider 适配** | CoPaw、PicoClaw、ZeroClaw、OpenClaw、Hermes | Responses API 迁移、thinking_param_style 缺失、Gemini thought_signature 中继、Cheaper Inference 接入 |
| **缓存/成本优化** | OpenClaw、NanoClaw、ZeroClaw、CoPaw | prompt-cache 前缀失效、bootstrap 每轮重注入浪费 20–30% token、图像驱逐破坏缓存前缀 |
| **可观测性补齐** | NanoBot、NanoClaw、NullClaw、OpenClaw | 实时 tokens/sec 显示、日志轮转、provider 错误体脱敏记录 |
| **外部输入健壮性** | NanoBot、NullClaw、CoPaw | 非规整输入不应导致功能整体失效（Unicode 截断、字符集未知、二进制污染） |

**共性判断**：生态共识正从"功能覆盖"转向**"可靠性与可运维性底线"**——升级、审批、缓存、可观测性是跨越项目边界的四个公共痛点。

---

## 5. 差异化定位分析

- **OpenClaw**：平台级核心参照，目标用户覆盖个人桌面到容器化生产；架构重核心运行时与会话生命周期，生态位最宽。
- **ZeroClaw / Hermes Agent**：面向生产级自主智能体，ZeroClaw 强调安全审批链路与多渠道（WhatsApp/Matrix/ACP），Hermes 强调跨平台安装一致性与代理运行时正确性。
- **NanoBot / CoPaw**：渠道与 provider 广度优先，NanoBot 侧重飞书/MCP/WebUI 易用性，CoPaw 侧重多 provider 差异化适配与 Console 体验。
- **NanoClaw**：安装/更新可靠性 + provider 边界修复为主线，目标为多平台（Discord/Slack/Telegram）集成用户。
- **PicoClaw**：轻量多渠道（飞书/QQ/DeltaChat）接入，provider 层成本优化方向。
- **IronClaw**：绑定 NEAR 生态，走向链上资产操作工具面（hosted-MCP 扩展）。
- **LobsterAI**：网易有道出品，聚焦认证/会话/UI 稳定性与定时任务体验，中文用户场景明确。
- **NullClaw / Moltis / TinyClaw / ZeptoClaw**：处于低活跃或维护整理期，架构信号有限。

**关键差异**：OpenClaw 走"大而全 + 深度运行时"；ZeroClaw/Hermes 走"生产级安全与一致性"；NanoBot/CoPaw/PicoClaw 走"渠道与 provider 广度"；IronClaw 走"垂直链上场景"。

---

## 6. 社区热度与成熟度

**第一层｜快速迭代期（高吞吐、问题集中暴露）**
- OpenClaw、ZeroClaw、Hermes Agent、NanoClaw、CoPaw
- 特征：新 Issue 密集、P0/P1 集中、修复响应快但合并滞后，处于"打补丁 + 重构并行"阶段。

**第二层｜质量巩固期（修复闭环、吞吐偏低）**
- NanoBot、LobsterAI、PicoClaw
- 特征：以修复类 PR 为主（NanoBot 的 2gg-bit 系列、LobsterAI 的 stale 清理），功能扩张放缓。

**第三层｜沉默/维护期（活动稀疏或无活动）**
- NullClaw、IronClaw、Moltis、TinyClaw、ZeptoClaw
- 特征：单一作者或单条 PR、0 合并、Issues 静默，评审带宽疑似瓶颈。

**成熟度信号**：LobsterAI 出现"180 天 stale 集中清理"与"新 PR 1 天关闭"的鲜明对比，提示**stale 自动清理与人工评审脱节**可能误伤有价值的贡献（NanoClaw、PicoClaw 亦有同类风险）。

---

## 7. 值得关注的趋势信号

1. **升级可靠性已升格为信任问题**（OpenClaw/Hermes/NanoClaw/LobsterAI）：用户反复强调"更新前本地明明可用"，更新器不可靠正在侵蚀对自托管方案的信心。**建议**：将"升级路径"作为独立回归测试域，而非附带功能。

2. **审批/权限门控是安全承诺的薄弱点**（ZeroClaw/NanoClaw）：无人值守 agent turn 静默绕过审批、Discord 审批一律被拒、跨组重启作用域错误——安全语义在并发/异常路径下失效。**建议**：审批逻辑需 fail-closed 且跨入口统一。

3. **缓存与上下文成本成为用户可感知指标**（OpenClaw/NanoClaw/ZeroClaw/CoPaw）：默认输出样式破坏 prompt cache、bootstrap 每轮重注入、图像驱逐失效前缀——**成本优化正从"工程细节"变为"用户留存因素"**。

4. **渠道广度 + 输入健壮性是真实使用场景的硬需求**（NanoBot/ZeroClaw/PicoClaw）：群组协作、机器人互发、非规整输入（Unicode、字符集、二进制）不应导致功能整体失效。

5. **多 provider 差异化适配成为标配**（CoPaw/PicoClaw/ZeroClaw）：Responses API 迁移、thinking_param_style、thought_signature 中继——单一 provider 假设已不适用。

6. **合并吞吐是生态级瓶颈**：多个项目待合并:已合并比例 > 10:1，XL 级 PR 挂起数周至数月（ZeroClaw #9368/#9819、CoPaw #7357/#7359）。**对开发者的参考价值**：向此类项目贡献时优先选择小而快的修复，并预留评审等待周期；对维护者而言，主题化批量合并窗口（如 NanoClaw 的 setup/provider 系列）可能是疏通路径。

7. **首次贡献者活跃是生态健康的正向信号**（CoPaw：dawNotPoi 一人提交 3 个修复；NanoBot：2gg-bit 一组 p1/p2 修复）——但**若审查延迟，将形成新积压并削弱持续参与意愿**。

---

*本报告严格基于 2026-09-26 各项目社区动态摘要，未对未提供的评论内容、合并结论或版本信息做任何推断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报（2026-09-26）

## 1. 今日速览

今日 NanoBot 无新版本发布，项目处于高频维护期：过去 24 小时共 6 条 Issue 更新（4 条新开/活跃、2 条关闭）和 16 条 PR 更新（13 条待合并、3 条已合并/关闭）。修复类 PR 集中爆发，其中由 2gg-bit 提交的一组 p1/p2 修复覆盖 cron 时区、Unicode 截断、日志流关闭、图片 base64 解码、URL 去重、文件换行与通知评估器等基础稳定性问题，是今日最显著的推进方向。渠道侧讨论集中在飞书（Feishu/Lark）：既有会话检查点标记泄漏的用户可见 Bug（#5903），也有机器人互发消息的能力请求（#5929，已配套 PR #5930）。整体健康度良好——修复响应快、PR 供给充足，但待合并 PR 已累积至 13 条，审查吞吐可能成为瓶颈。

## 2. 版本发布

今日无新版本发布。上一版本 v0.3.5 的发布公告 Issue #5788 已于 2026-09-25 关闭。
- 链接：https://github.com/HKUDS/nanobot/issues/5788

## 3. 项目进展

今日合并/关闭的 3 条 PR：

- **#5916 [CLOSED] fix(mcp): 注册前加载服务器工具的全部页面**（作者 KailBug）— 修复 MCP 服务器对 `tools/list` 分页时仅注册首页工具的问题，此前后续页工具即使被显式选中也不可用。属发现层正确性修复。
  https://github.com/HKUDS/nanobot/pull/5916
- **#5919 [CLOSED] feat(linear): 管理成员访问并简化工作区连接**（作者 Re-bin）— 管理员可直接在 WebUI 中决定谁可使用 Linear agent，并新增工作区级成员搜索、头像与访问开关，避免每位成员交换配对码。
  https://github.com/HKUDS/nanobot/pull/5919
- **#5912 [CLOSED] fix(webui): 跨导航与刷新保留输入框草稿**（作者 chengyongru）— 通过 localStorage 按会话保留未完成消息，刷新后恢复文本、会话提及与引用上下文。
  https://github.com/HKUDS/nanobot/pull/5912

此外，Issue #5910（WebUI 按会话持久化草稿）已关闭，与 #5912 构成同一问题的需求—实现闭环，说明 WebUI 易用性方向推进完整。

## 4. 社区热点

- **#5908 [OPEN] feat(webui): 流式回复时显示实时 tokens/sec**（作者 coinwh，4 条评论，今日 Issue 中讨论最多）— 用户希望在 WebUI 中直接看到生成速度，以判断模型是正常工作还是卡住。反映了对可观测性的真实需求，目前仅有需求 Issue，尚无对应 PR。
  https://github.com/HKUDS/nanobot/issues/5908
- **#5903 [OPEN] bug: 飞书空闲压缩后会话检查点标记泄漏给用户**（作者 lan5635，2 条评论）— 内部标记消息 `Continue the active task from the working-memory checkpoint above.` 被当作普通聊天消息投递给用户。这是用户可见的体验缺陷，同时暴露内部上下文管理消息与外部输出之间缺少隔离。
  https://github.com/HKUDS/nanobot/issues/5903
- **#5929 [OPEN] feishu: 允许群内机器人互发消息（发送方白名单 + 跳数限制）**（作者 zxan000，0 评论）— 需求已由同日 PR #5930 直接承接，属当日需求—实现同步推进。
  https://github.com/HKUDS/nanobot/issues/5929

## 5. Bug 与稳定性

按严重程度排列：

1. **#5924 [OPEN] Agent 陷入 sudo 循环，变得不可用**（作者 kkayam，0 评论）— sudo 授权仅维持一轮，在 Agent 执行命令前即失效，导致反复索取 sudo；且达到最大迭代次数后行为异常。属高严重度的可用性阻断问题，**目前无对应 fix PR**。
   https://github.com/HKUDS/nanobot/issues/5924
2. **#5903 [OPEN] 飞书检查点标记泄漏**（作者 lan5635）— 用户可见的内部状态泄漏，**暂无 fix PR**，仅有关联讨论。
   https://github.com/HKUDS/nanobot/issues/5903
3. **#5922 [OPEN, p1] cron 未按本地时区规则计算下次运行时间**（作者 2gg-bit）— 未显式设置 `CronSchedule.tz` 时使用仅保留当前 UTC 偏移的时区对象，丢失夏令时规则，导致跨季节任务提前/延后一小时。**已有 fix PR #5922**。
   https://github.com/HKUDS/nanobot/pull/5922
4. **#5927 [OPEN, p2] 通知评估器将字符串 `"false"` 视为真值**（作者 2gg-bit）— 模型返回字符串形式布尔值时可能误发通知。**已有 fix PR #5927**。
   https://github.com/HKUDS/nanobot/pull/5927
5. **#5921 [OPEN, p2] 已关闭的后台日志流可重新打开文件**（作者 2gg-bit）— `close()` 后 `write()`/`fileno()` 仍可通过 `_ensure_open()` 重新打开文件并轮转，行为与关闭语义不符。**已有 fix PR #5921**。
   https://github.com/HKUDS/nanobot/pull/5921
6. **#5920 [OPEN, p2] 按 token 截断时切断多 token Unicode 字符**（作者 2gg-bit）— 汉字/Emoji 截断点落在字符内部时产生替换字符 `�`，影响归档上下文与摘要长度限制。**已有 fix PR #5920**。
   https://github.com/HKUDS/nanobot/pull/5920
7. **#5926 [OPEN, p2] 网页抓取将大小写不同的 URL 误判为重复**（作者 2gg-bit）— 重复抓取保护整体转小写，导致 `/API`、`/Api`、`/api` 中第三次被误拦截。**已有 fix PR #5926**。
   https://github.com/HKUDS/nanobot/pull/5926
8. **#5925 [OPEN, p2] Windows 创建文件时换行被重复转换**（作者 2gg-bit）— 传入 `first\r\nsecond\r\n` 实际写成 `first\r\r\nsecond\r\r\n`，LF 内容被隐式改为 CRLF。**已有 fix PR #5925**。
   https://github.com/HKUDS/nanobot/pull/5925
9. **#5923 [OPEN, p2] 图片 base64 中的非 ASCII 字符未被正确处理**（作者 2gg-bit）— 仅捕获 `binascii.Error`，`ValueError` 逃逸，导致 MCP 将整条响应标记为 malformed 并丢弃可保留文本。**已有 fix PR #5923**。
   https://github.com/HKUDS/nanobot/pull/5923
10. **#5928 [OPEN, p2] 邮件正文字符集未知时中断收件轮询**（作者 2gg-bit）— `LookupError` 逃逸出轮询而非回退解码。**已有 fix PR #5928**。
    https://github.com/HKUDS/nanobot/pull/5928
11. **#5914 [OPEN, p2] Napcat 图片 `file_size` 非数值时丢弃整条消息**（作者 Lesereingrape）— 解析失败即提前拒绝图片。
    https://github.com/HKUDS/nanobot/pull/5914
12. **#5918 [OPEN, p2] 工具参数强制转换破坏 JSON Schema 联合类型**（作者 KailBug）— 对 `{"type": ["integer", "string"]}` 可能把 `"00123"` 转为 `123` 或提前拒绝 `"doc-A"`。
    https://github.com/HKUDS/nanobot/pull/5918
13. **#5780 [OPEN, p2] 停止发送上下文压缩通知**（作者 wzrayyy，2026-09-15 创建，仍待合并）— 认为自动压缩提示不应对用户可见，建议保留 `/compact` 的通知。
    https://github.com/HKUDS/nanobot/pull/5780

## 6. 功能请求与路线图信号

- **WebUI 流式 tokens/sec 显示（#5908）**：需求明确、改动面小，但今日无配套 PR，纳入下一版本的确定性中等。
  https://github.com/HKUDS/nanobot/issues/5908
- **飞书群内机器人互发消息（#5929）**：已有同日 PR #5930，包含白名单发送方与跳数限制（hop limit），是今日最可能进入下一版本的功能项。
  https://github.com/HKUDS/nanobot/issues/5929 / https://github.com/HKUDS/nanobot/pull/5930
- **WebUI 草稿持久化（#5910 → #5912）**：已完成闭环，可作为下一版本已就绪的 WebUI 改进项。
  https://github.com/HKUDS/nanobot/issues/5910

## 7. 用户反馈摘要

- **可观测性诉求**：#5908 中用户明确表示需要实时速度指标来判断"模型是正常工作还是卡住"，说明当前流式输出缺少状态反馈。
- **内部消息泄漏困扰**：#5903 中用户发现本应隐藏的会话检查点提示被当作正常消息收到，直接暴露内部实现细节。
- **工作流被基础设施 Bug 阻断**：#5924 中用户描述 sudo 授权只维持一轮、Agent 反复尝试获取 sudo 并最终不可用，属于打断实际使用的严重体验问题。
- **渠道集成细节痛点**：飞书用户要求打通机器人互发消息（#5929）；邮件渠道在遇到未知字符集时中断收件轮询（#5928）；Napcat 图片元数据异常时整条消息被丢弃（#5914）。共同指向"外部输入不规整时不应导致功能整体失效"。
- **对自动化的期望**：#5919 的动机是避免每位团队成员交换配对码，反映管理员希望集中管理访问权限而非逐个协调。

## 8. 待处理积压

- **#5780 [OPEN] fix: 停止发送上下文压缩通知**（作者 wzrayyy）— 创建于 2026-09-15，最后更新 2026-09-25，已滞留 11 天。作者在描述中明确表示不确定这是否是 #5656 的预期行为，并请求维护者确认设计意图，属需要维护者表态的阻塞项。
  https://github.com/HKUDS/nanobot/pull/5780
- **#5924 [OPEN] Agent 陷入 sudo 循环**（作者 kkayam）— 高严重度可用性问题，0 评论、无 fix PR，建议优先响应。
  https://github.com/HKUDS/nanobot/issues/5924
- **#5914 [OPEN, p2] fix(napcat): 保留 `file_size` 非数值的消息**（作者 Lesereingrape）— 创建于 2026-09-25，今日有更新但仍待合并。
  https://github.com/HKUDS/nanobot/pull/5914
- 需注意：今日 13 条待合并 PR 中，多数为 2gg-bit 于 2026-09-26 集中提交的修复，尚未获得审查；若审查延迟，将形成新的积压并延后这些稳定性修复的落地。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-26

## 1. 今日速览

今日项目保持高活跃度：过去 24 小时内 Issues 更新 50 条（新开/活跃 48，关闭 2），PR 更新 50 条（待合并 42，合并/关闭 8），无新版本发布。讨论重心明显集中在 **安装/更新（area/install-update）与跨平台兼容性** 上——Windows PM 运行时、桌面启动器 `Exec` 解析、`hermes update` 竞态等议题占据了评论数前列。同时，代理运行时层面出现多个高质量修复 PR（Anthropic thinking block、Codex 凭据路由、Nous 计费降级、技能环境变量跨 worker 传递），显示维护节奏健康。整体判断：**问题发现密集但响应及时，积压压力主要在待合并 PR 队列（42 条）**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（已合并/关闭的 PR 与 Issue）

今日合并/关闭共 8 条 PR，其中较有代表性的推进：

- **#83055 [CLOSED] fix(config): whitelist no-publish-time pins under rolling exclude-newer** — 修复 `uv sync --extra all --locked` 因 `defusedxml==0.7.1` 无发布时间而解析失败的问题（影响 install.sh Tier 0 与所有自动更新）。链接: https://github.com/NousResearch/hermes-agent/pull/83055
- **#97776 [CLOSED] fix(gateway): bound and secure launchd stdio logs** — 解决 macOS launchd 下 stdout/stderr 日志无限追加、不轮转、绕过 Hermes 有界日志契约的问题。链接: https://github.com/NousResearch/hermes-agent/pull/97776
- **#82155 [CLOSED] fix(tools): expose the configurable search toolset** — 在 CLI 配置器中暴露仅搜索工具集，并与 web-search 工具名对齐，防止重复搜索工具。链接: https://github.com/NousResearch/hermes-agent/pull/82155
- **#74026 [CLOSED] fix(tests): preserve complete pytest long-option values** — 修复并行测试运行器转发 pytest 长选项时丢失以短横线开头的值，兼容 pytest 8/9。链接: https://github.com/NousResearch/hermes-agent/pull/74026
- **#71674 [CLOSED] test: isolate platform-specific assumptions on macOS** — 提升跨平台测试在 macOS 上的确定性。链接: https://github.com/NousResearch/hermes-agent/pull/71674
- **#98512 [CLOSED] docs(skills): harden verified GitHub and reminder mutations** — 用认证 `gh`、精确目标解析、有界清单替换不安全的 token/curl 与批量变更指引。链接: https://github.com/NousResearch/hermes-agent/pull/98512

Issue 侧关闭 2 条：**#112420**（压缩停滞导致 oversized context 每轮重触发 compaction）与 **#68139**（browser_tool 命令超时泄漏 agent-browser daemon 与 Chromium 进程树，长期运行网关可累积至主机 OOM）。后者属于资源泄漏类稳定性问题，关闭具有实际价值。链接: https://github.com/NousResearch/hermes-agent/issues/68139

**整体推进评估**：合并量偏小（8 条），以工具链、测试确定性、文档与日志安全为主；代理核心运行时的大修仍滞留在待合并队列。

---

## 4. 社区热点

按评论数排序的讨论焦点：

1. **#122183 [OPEN][P2] Windows gateway on the PM runtime prepends the pre-PM venv and crashes hosted_room_worker（23 评论，👍2）** — 今日讨论最热。PM 运行时迁移后旧 `<install>\venv`（Python 3.11）残留，`hermes update` 后崩溃 `No module named 'pydantic_core._pydantic_core'`。链接: https://github.com/NousResearch/hermes-agent/issues/122183
2. **#122609 [OPEN][P3] skills-index-watchdog: 索引 stale/degraded（6 评论）** — 自动探针报索引已 28.1h 未刷新（上限 26h）。链接: https://github.com/NousResearch/hermes-agent/issues/122609
3. **#122485 [OPEN][P2] 桌面 `.desktop` 的 `Exec` 指向无法提供 `hermes desktop` 的启动器（6 评论）** — 链接: https://github.com/NousResearch/hermes-agent/issues/122485
4. **#123888 [OPEN][P2] Windows PM 安装下桌面每次都进入首次运行 chooser（4 评论）** — 链接: https://github.com/NousResearch/hermes-agent/issues/123888
5. **#122438 [OPEN][P2] Linux 桌面启动器自愈至无 apps/desktop 的 managed venv（4 评论）** — 链接: https://github.com/NousResearch/hermes-agent/issues/122438

**诉求分析**：热点几乎全部指向同一根因族——**托管运行时（PM）迁移后，安装路径状态与桌面/网关启动器注册信息不一致**。用户期望的是「更新后仍能从系统图标直接启动且不丢会话」，而当前实现会自愈到错误路径或重复触发首次运行流程。这是发布质量的系统性问题，而非零散缺陷。

---

## 5. Bug 与稳定性

按严重程度排列（P1 > P2 > P3）：

**P1**
- #112420 压缩停滞导致上下文超预算，每轮重触发 compaction，系统提示反复重建 — **已关闭**。链接: https://github.com/NousResearch/hermes-agent/issues/112420

**P2（多数已有对应 fix PR）**
- #122183 Windows PM 运行时残留 pre-PM venv 致 `hosted_room_worker` 崩溃 — 暂无明确 fix PR（热帖）。
- #123923 Anthropic `/v1/messages` 400 "thinking blocks cannot be modified"：heartbeat 续跑把 thinking block 复制进同一条 assistant 消息 — **已有 fix PR #123955**（demote stale signed thinking）。链接: https://github.com/NousResearch/hermes-agent/issues/123923
- #122655 Desktop `/model` 在远程网关 live sync 失败（UnscopedSecretError），会话仍用旧模型 — 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/122655
- #123935 `compress()` Phase 1 tool-result prune 忽略 `protect_first_n`，误剪 kanban 任务卡片 — 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/123935
- #123109 bootstrap 启动的 gateway 被误分类，status 轮询删除其 `gateway.pid`/`gateway.lock`（自 #121635 起）— 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/123109
- #123376 `hermes update` 与 launchd 重启的 gateway 竞态，产生混合构建与永久 "Restart to finish update" 横幅 — 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/123376
- #123909 Desktop 会话移入项目后 transcript store 冻结，stale-guard 阻断发送，fork 静默丢弃历史 — 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/123909
- #112961 Windows 桌面主进程在长 WS 会话中 `FAST_FAIL_FATAL_APP_EXIT`（0xC0000409，faulting offset 0x5281f15）— 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/112961
- #122485 / #122438 / #123888 桌面启动器与首次运行流程问题（见上节）。
- #123943 PM 运行时 staging 在配置 pip 镜像时失败：`uv --locked` 因 registry URL 不匹配拒绝 lockfile（标 duplicate）— 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/123943

**P3**
- #68139 browser_tool 超时泄漏 daemon + Chromium 树致 OOM — **已关闭**。链接: https://github.com/NousResearch/hermes-agent/issues/68139
- #118349 Slack 线程父消息 `message_changed` 在网关重启后被重放为新用户轮次 — 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/118349
- #119249 自定义 provider 向不支持该参数的 Ministral 模型发送 `reasoning_effort` — 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/119249
- #53361 指令与现实状态矛盾时进入无限推理循环 — 暂无 fix PR。链接: https://github.com/NousResearch/hermes-agent/issues/53361

**观察**：P2 缺陷中有 fix PR 的比例偏低，安装/更新类问题呈「多平台、同根因」聚集，建议作为一次集中修复批次处理。

---

## 6. 功能请求与路线图信号

- **#40123 [type/feature][P3] 让 `/clear` 在网关（Telegram 等）可用** — 现注册为 `cli_only=True`，用户期望其行为对齐 `/new`；修复成本极低（将其加入 `/new` 的别名/非 CLI 白名单）。**较可能被快速纳入。** 链接: https://github.com/NousResearch/hermes-agent/issues/40123
- **#92618 [type/feature][P3][needs-decision] 企业级安全保证基线、发布门禁与受管部署安全** — 依赖 #118029 的受管 SSH 安装受控发布；带 `needs-decision` 标签，属于路线图级议题，短期不会落地但影响企业采纳。链接: https://github.com/NousResearch/hermes-agent/issues/92618

结合今日 PR 队列看，近期版本更可能聚焦**运行时正确性修复**（thinking block、凭据路由范围、技能环境变量跨 worker、dotenv 展开顺序）而非新功能。

---

## 7. 用户反馈摘要

- **最大痛点：更新即损坏（update-induced breakage）。** 多名用户在 macOS、Linux、Windows 三平台报告 `hermes update` 后出现混合构建、残留旧 venv、启动器指向错误路径（#122183、#122438、#123376、#123888）。用户反复强调「本地运行时明明可用」，却被迫走首次运行流程或无法从系统图标启动，破坏信任感。
- **使用场景**：多 profile 部署（每 profile 一个 launchd gateway，#123376）；Windows 11 + 托管 Python 3.14 + PM venv（#122183、#123943）；企业级 Anthropic 扩展思考 + 多 profile（#123923）；Slack Socket Mode Agent 视图应用（#118349）。
- **不满意点**：错误信息不足以自诊断（UnscopedSecretError、`No module named 'pydantic_core._pydantic_core'`）；配置镜像（如清华镜像）与锁定文件不兼容导致安装失败（#123943）。
- **满意信号**：关闭的 #68139、#112420、#74026、#71674 表明资源泄漏、压缩停滞与测试稳定性问题得到实质处理。

---

## 8. 待处理积压

长期未响应或跨周期滞留的重要条目：

- **#53361**（创建 2026-06-27，P3，needs-repro）指令—现实不匹配导致无限推理循环 — 已近三个月。链接: https://github.com/NousResearch/hermes-agent/issues/53361
- **#40123**（创建 2026-06-05，P3）`/clear` 网关支持 — 近四个月未推进，改动量小，建议优先清理。链接: https://github.com/NousResearch/hermes-agent/issues/40123
- **#68139**（创建 2026-07-20）已关闭，无遗留。
- **#92618**（创建 2026-08-23，needs-decision）企业安全基线 — 需维护者明确取舍。链接: https://github.com/NousResearch/hermes-agent/issues/92618
- **#112420 / #112961**（创建 2026-09-15 / 09-16）前者已关闭，后者（Windows 桌面致命退出）仍开放且无 fix PR。
- **PR 队列压力**：42 条待合并 PR 中包含多项高价值运行时修复（#123932 billing 降级、#123955 Anthropic thinking、#123956 Codex 凭据路由、#123953 dotenv 展开、#123954 技能 env 授权、#123958 ripgrep ESRCH、#123960 虚拟工作区成员裁剪），建议尽快审查以减少重复报告。

**健康度小结**：发现与修复能力正常，但合并吞吐（8/50）低于问题产生速度（48 条新开/活跃），安装更新链路的**根因修复**与**待合并 PR 队列**是当前两个需要优先疏通的关键路径。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-26）

## 1. 今日速览

过去 24 小时项目共发生 6 项协作动作：1 条 Issue 关闭、5 条 PR 有更新，无新版本发布。活跃度处于**平稳偏低**水平——新开/活跃 Issue 为 0，新增代码贡献集中在存量 PR 的推进而非新需求涌入。已合并/关闭的 PR 仅 1 条（#1349），合并吞吐量偏低，待合并队列积压至 4 条。全部更新均无评论数与点赞数记录，社区互动信号较弱。整体健康度稳定，但存在明显的存量 PR 长期滞留问题。

## 2. 版本发布

本日无新版本发布。

## 3. 项目进展

- **PR #1349 [CLOSED] feat(qq): support parsing and replying to more attachment types**（作者 aishannon，创建 2026-03-11，更新 2026-09-26）
  链接: sipeed/picoclaw PR #1349
  该 PR 已关闭（数据未标明是否合并）。内容为 QQ 渠道增强：支持解析 QQ 表情结构、处理来自 QQ 渠道的语音/图片/视频/文件消息、支持以本地语音/图片/视频/文件附件回复（发送前上传）。这是本日唯一关闭的 PR，也是当日推进幅度最大的动作，但注意其创建于 3 月、历经约 6 个月才关闭，属于典型的长期悬挂后收口。

除该 PR 外，当日无其他合并或关闭记录，项目整体向前推进幅度有限。

## 4. 社区热点

本日各项 Issues/PR 的评论数与点赞数均为 0 或未记录，无明确的热点讨论。相对而言，以下条目因附带明确方案或较长背景而值得关注：

- **Issue #3355 [CLOSED] [stale] [BUG] 连接飞书报错-附解决方案**（作者 ttghub，创建 2026-09-01，更新 2026-09-25，评论 3）
  链接: sipeed/picoclaw Issue #3355
  报错信息：`config.json contains unknown field(s): channel_list.feishu.app_id`。该 Issue 是本日唯一有评论（3 条）的条目，用户不仅报告问题还附带了解决方案，最终以 `[stale]` 标签关闭。

诉求分析：用户在配置飞书渠道时遇到字段校验拒绝，属于配置 schema 与实际配置不一致的典型摩擦；作者主动给出解决方案后被标记 stale 关闭，提示维护流程中对"已附方案的问题"缺少明确的采纳闭环。

- **PR #3393 [OPEN] feat(provider): add Cheaper Inference provider**（作者 aiapienthusiast，创建并更新于 2026-09-25）
  链接: sipeed/picoclaw PR #3393
  新增 OpenAI 兼容的 provider 接入，为最新提交，代表生态扩展方向。

## 5. Bug 与稳定性

本日无新报 Bug、崩溃或回归问题。

唯一相关条目为已关闭的 Issue #3355（严重程度：中低，属配置校验报错而非运行时崩溃）：
- 现象：飞书渠道配置 `channel_list.feishu.app_id` 被判定为未知字段，导致连接飞书失败。
- 状态：已 CLOSED，带 `[stale]` 标签，存在 3 条评论，用户附带解决方案。
- Fix PR：数据中未显示对应的修复 PR，无法确认该问题是通过代码修复、配置调整还是随 schema 变更自然消解。

## 6. 功能请求与路线图信号

从当前开放 PR 可观察到的路线图信号：

- **OpenAI 迁移至 Responses API** — PR #3381 [OPEN]（作者 XenonR，创建 2026-09-17，更新 2026-09-25），标注为"新功能（非破坏性）"。若合并，将改变 OpenAI provider 的调用方式，属于核心链路变更。
  链接: sipeed/picoclaw PR #3381
- **新增 Cheaper Inference provider** — PR #3393 [OPEN]（创建并更新于 2026-09-25），定位为 OpenAI 兼容 LLM 网关，单一 API key 可访问多家模型，强调速度与成本优势。与 #3381 同期出现，显示 provider 生态扩展与成本优化是当前活跃方向。
  链接: sipeed/picoclaw PR #3393
- **Parallel Search MCP 配置示例** — PR #3368 [OPEN] [stale]（作者 georgeatparallel，创建 2026-09-05），为现有 CLI 指南补充可复制的 MCP 配置，使 PicoClaw 在无需 Parallel 账号或 API key 的情况下获得网页搜索与页面提取能力。
  链接: sipeed/picoclaw PR #3368

综合判断：#3381 与 #3393 同属 provider 层改动，最可能被纳入下一版本；#3368 为纯文档补充，合并门槛最低但已带 stale 标签，存在被清理风险。

## 7. 用户反馈摘要

受限于数据（评论多为 0 或未记录），可提炼的真实反馈有限：

- **痛点（Issue #3355）**：用户在实际部署飞书渠道时遭遇配置字段不被识别的报错，说明默认配置示例与运行时 schema 校验之间存在不一致，用户需要自行排查字段命名。该用户主动提供解决方案，表明社区中存在愿意贡献修复的用户，但反馈被以 stale 关闭，可能削弱后续贡献意愿。
- **使用场景**：从 PR 内容可侧面反映出用户群体的典型场景——多渠道接入（飞书、QQ、DeltaChat）、消息类型多样化处理（表情/语音/图片/视频/文件）、以及降低使用门槛的诉求（无需 API key 的搜索能力、单一 key 访问多模型的网关）。
- **满意度信号**：本日无正面评价或点赞数据可供引用，不做推断。

## 8. 待处理积压

以下条目创建时间久远、长期未合并且仍处 OPEN 状态，建议维护者优先分流：

- **PR #3222 [OPEN] refactor(deltachat): cleanup implementation, documentation -200LOC**（作者 trufae，创建 2026-07-03，更新 2026-09-25）
  链接: sipeed/picoclaw PR #3222
  积压约 3 个月。内容为 DeltaChat 实现清理：移除遗留特性与过时测试、改为引用官方 relay 列表网站而非硬编码副本、移除基于密码的邮件配置（密钥须存放于 jsonrpc）、重命名 `invite_link` → `join_invite_link` 等。其中"移除密码配置"与字段重命名具有潜在破坏性，需维护者明确取舍，长期悬置会持续产生 rebase 成本。

- **PR #3368 [OPEN] [stale] docs: add Parallel Search MCP setup example**（创建 2026-09-05，更新 2026-09-25）
  链接: sipeed/picoclaw PR #3368
  已带 stale 标签的低风险文档 PR，建议尽快合并或明确关闭，避免无意义地消耗贡献者耐心。

- **Issue #3355 [stale]** 虽已关闭，但其"附解决方案却被 stale 关闭"的处理方式建议复盘，以判断是否需要将用户方案沉淀进配置文档或 schema 校验提示。

**风险提示**：当日 4 条待合并 PR 中，2 条带 `[stale]` 标签（#3368 及长期未动的 #3222 亦属高危），提示仓库存在 stale 自动清理与人工评审脱节的现象；若持续，可能导致有价值的贡献（尤其是文档与渠道增强）被机械关闭，进而影响外部贡献者的持续参与意愿。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-26

## 1. 今日速览

过去 24 小时 NanoClaw 保持高强度开发节奏：Issues 更新 5 条且全部为新开/活跃，PR 更新 50 条（待合并 46，已合并/关闭 4），无新版本发布。今日报告的问题高度集中——5 条 Issue 中有 4 条由同一位报告者（glifocat）提交，且均针对 v2.4.0（commit c313d061）的更新流程、容器生命周期与 provider 检测，呈现明显的"版本发布后回归集中暴露"特征。PR 侧同样以 glifocat 的修复链条为主（setup/opencode/iron-proxy/update 系列），说明核心团队正在快速收敛 v2.4.0 的遗留缺陷。整体活跃度高，但关闭率偏低（Issues 0 关闭、PR 待合并 46），积压压力正在累积。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭的 PR 共 4 条，其中最具实质意义的两条：

- **#3917 [CLOSED] fix: seed Claude's default output style, not Concise, which defeated prompt caching**
  https://github.com/nanocoai/nanoclaw/pull/3917
  修复 2.4 起 Claude 默认输出样式被设为 `Concise` 导致会话无法从 prompt cache 回读、进而削弱提示缓存的问题。这是一条影响性能与成本的回归修复，由核心成员 gavrielc 提交并当日关闭。

- **#3896 [CLOSED] fix(opencode): read provider config from options.env when supplied**
  https://github.com/nanocoai/nanoclaw/pull/3896
  让 OpenCode provider 基于构造时传入的 env 构建配置，而非始终读取 `process.env`。

- **#226 [CLOSED] skill: add /add-model-identity for agent self-identification**
  https://github.com/nanocoai/nanoclaw/pull/226
  一条 2026-02-14 提交、长期滞留的 skill PR 于今日关闭，新增 `/add-model-identity` 技能，使 agent 能正确识别自身模型。

整体判断：今日推进以"修 bug、稳基线"为主，而非新功能扩张。修复覆盖面较广（缓存、provider 配置、技能），但大量修复 PR 仍处于待合并状态，实际落地比例有限。

## 4. 社区热点

- **PR #3185 [OPEN] fix(discord): strip \n delimiter in webhook interaction custom_id so approvals resolve correctly**
  https://github.com/nanocoai/nanoclaw/pull/3185
  自 2026-08-04 开放至今，描述了一个严重交互缺陷：Discord 上点击 `ask_question` / approval 卡片的任何按钮都会解析到错误选项，实际上**即使用户点击 Approve，审批也一律被拒绝**。这是今日列表中生命周期最长、影响面最广的待合并修复，背后诉求是审批链路在 Discord webhook 路径上的正确性。

- **PR #3446 [OPEN] Auto-drop automated senders in the unknown-sender gate (#3235)**
  https://github.com/nanocoai/nanoclaw/pull/3446
  解决 bot/webhook 发送者（Discord `author.bot`/`webhook_id`、Slack `bot_id`、Telegram `from.is_bot`）触发未知发送者审批门控、产生发送者永远无法自行批准的审批卡片问题。反映用户对自动化消息源与人工审批混淆的强烈不满。

- **Issue #3906 [OPEN] update-nanoclaw: controller archive misses setup/ since #3816**
  https://github.com/nanocoai/nanoclaw/issues/3906
  当日唯一有评论（1 条）的新 Issue，直指 `/update-nanoclaw` 流程中控制器归档无法加载，是今日更新链路问题的核心症结，并已引出对应修复 PR #3913。

## 5. Bug 与稳定性

按严重程度排列：

**高 — 更新流程整体失效**
- **#3906 [OPEN] [kind/bug, triage/unresolved]** `/update-nanoclaw` 控制器归档自 #3816 起缺失 `setup/`，且 stage-rooted 命令在依赖就绪前运行。
  https://github.com/nanocoai/nanoclaw/issues/3906
  → **已有 fix PR：#3913**（fix(update): load the update controller without setup/ or node_modules）
  https://github.com/nanocoai/nanoclaw/pull/3913

- **#3907 [OPEN] [kind/bug, triage/unresolved]** Gateway 检测失败：当嵌套 pnpm 向 stdout 打印 workspace 警告时，`/update-nanoclaw` validate 报 "No installed gateway could be detected"，即便 OneCLI 已安装且健康。
  https://github.com/nanocoai/nanoclaw/issues/3907
  → 暂无直接对应 PR，但与 #3302（OneCLI 默认 gateway bind 地址修正）https://github.com/nanocoai/nanoclaw/pull/3302 同属 gateway 配置域。

**高 — 权限作用域错误**
- **#3911 [OPEN] [kind/bug, triage/unresolved]** `ncl groups restart --id <other group>` 从 agent 发起时重启的是调用方而非目标组，即便 operator 已批准。涉及 `cli_scope: global` 语义，存在被误用风险。
  https://github.com/nanocoai/nanoclaw/issues/3911
  → 暂无 fix PR。

**中 — 容器生命周期竞态**
- **#3909 [OPEN] [kind/bug, area/containers]** `spawnContainer`（`src/container-runner.ts`）对 agent group 只读取一次，导致为中途被删除的 agent group 仍启动会话容器。
  https://github.com/nanocoai/nanoclaw/issues/3909
  → 暂无 fix PR。

**中 — 可观测性**
- **#3916 [OPEN]** Host 日志从不轮转且不带日期，`nanoclaw.log` 达 10 MB、`nanoclaw.error.log` 达 29 MB，均溯至 5 月；多周日志按时间过滤"最近几分钟"会误读为正在发生的事故。
  https://github.com/nanocoai/nanoclaw/issues/3916
  → 暂无 fix PR。

**小结**：5 条 Bug 中 3 条由 glifocat 以 v2.4.0 同一 commit 复现，表明 v2.4.0 更新链路存在系统性回归；目前修复响应速度快（#3906 当日即有 PR），但 #3907、#3909、#3911 仍无对应修复。

## 6. 功能请求与路线图信号

今日 Issues 未见新功能请求，全部为缺陷报告。但从 PR 待合并队列可读出明确的下一版本方向：

- **Setup / Onboarding 健壮性**：PR #3920（限制 live install 上的 failure-assist agents）、#3905（OpenCode endpoint 未验证时明示并记录 ping）、#3919（在提示层拒绝 Iron Proxy 无法路由的本地模型 URL）、#3915（跳过非法 allowed-hosts 条目而非中止 setup）、#3878（删除 folder 前先停 ping agent 容器）。
  https://github.com/nanocoai/nanoclaw/pull/3920 / https://github.com/nanocoai/nanoclaw/pull/3905 / https://github.com/nanocoai/nanoclaw/pull/3919 / https://github.com/nanocoai/nanoclaw/pull/3915 / https://github.com/nanocoai/nanoclaw/pull/3878
  → 六条 PR 同向指向"安装/更新流程不再静默失败、不再破坏 live install"，极可能作为下一版本的主线。

- **Provider 正确性**：#3895（保持 `send_card` url pattern 可被 llama.cpp grammar 解析）、#3918（result-door provider 不重复发送已由工具发出的回复）。
  https://github.com/nanocoai/nanoclaw/pull/3895 / https://github.com/nanocoai/nanoclaw/pull/3918

- **仓库维护规范化**：#3914（PR 未遵循 v2 模板时让 template-compliance 状态变红）。
  https://github.com/nanocoai/nanoclaw/pull/3914

判断：下一版本大概率是一个以"更新/安装可靠性 + provider 边界修复"为主题的维护版本，而非功能版本。

## 7. 用户反馈摘要

- **更新流程不可信**：Issue #3906 与 #3907 均描述 `/update-nanoclaw` 在真实安装环境中失败——一个因归档缺 `setup/`，一个因嵌套 pnpm 的 workspace 警告污染 stdout。用户 glifocat 提供了明确的版本（c313d061 / v2.4.0）与平台（Linux），报告质量高，痛点指向"更新后而非更新前就已知的失败"。
- **审批链路信任缺失**：PR #3185 指出 Discord 上所有审批一律被拒绝；PR #3446 指出 bot/webhook 发送者产生的审批卡片"发送者永远无法批准"。两者共同反映用户对审批机制可靠性的核心不信任。
- **权限语义困惑**：Issue #3911 中 agent 以 `cli_scope: global` 执行跨组重启、operator 已批准，结果却重启了调用方——用户操作预期与系统行为不一致。
- **性能回归**：PR #3917 显示 2.4 起 Claude 默认 `Concise` 输出样式使会话无法命中 prompt cache，属直接影响成本的用户可感知回归。
- **运维可观测性缺失**：Issue #3916 中用户 BuckG71 在 macOS 上升级 v2.3.0 → 2.4.0 时发现日志自 5 月累积 10 MB / 29 MB 且无时间戳，"误读为实时事故"。

## 8. 待处理积压

以下条目开放时间显著长于今日批次，建议维护者优先关注：

- **PR #226**（2026-02-14 → 今日关闭）
  https://github.com/nanocoai/nanoclaw/pull/226
  滞留约 7 个月后于今日关闭，建议复盘此类 skill PR 长期无响应的流程原因。

- **PR #3185**（2026-08-04 开放，约 7.5 周）
  https://github.com/nanocoai/nanoclaw/pull/3185
  "所有审批被拒"属高影响功能性缺陷，长期未合并值得升级优先级。

- **PR #3302**（2026-08-17 开放，约 5.7 周）
  https://github.com/nanocoai/nanoclaw/pull/3302
  OneCLI gateway 默认 bind 地址修正（Fixes #2903），与今日 #3907 的 gateway 检测失败同域，存在合并价值。

- **PR #3446**（2026-08-22 开放，约 5 周）
  https://github.com/nanocoai/nanoclaw/pull/3446
  自动化发送者门控修复，影响机器人集成场景。

- **PR #3878**（2026-09-23 开放，3 天）
  https://github.com/nanocoai/nanoclaw/pull/3878
  时间不长，但与今日多条 setup 修复同属一条链路，建议一并评审。

**积压指标提醒**：今日 PR 待合并 46 条 vs 已合并/关闭 4 条，合并吞吐约为积压量的 1/11；同时 Issues 零关闭。若此比率持续，v2.4.0 的回归修复将排队等待，建议考虑集中合并窗口或对 setup/provider 系列 PR 做主题化批量评审。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-09-26）

## 1. 今日速览

过去 24 小时项目无 Issue 更新（新开 0、关闭 0），无新版本发布，全部活跃度集中在 Pull Request 侧：5 条 PR 处于待合并状态，均未合并或关闭，作者全部为 vernonstinebaker。今日活动呈"单点集中"特征——5 条 PR 中 4 条为修复类（memory / providers / agent / discord），1 条为 CLI 交互体验改进，说明当前阶段以稳定性打磨为主，而非功能扩张。综合来看，项目健康度平稳但吞吐偏低：缺乏合并动作与社区讨论，积压风险正在累积。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，代码库未发生已落地的功能推进。待合并队列包含以下 5 条：

- #1011 [OPEN] fix(agent): 修复 `parseXmlToolCalls` 在列表追加或后续分配失败时 `name` / `arguments` 内存泄漏 — [nullclaw/nullclaw PR #1011](nullclaw/nullclaw PR #1011)
- #1010 [OPEN] fix(discord): 忽略机器人自身发布的消息，避免自回复被回灌进 agent — [nullclaw/nullclaw PR #1010](nullclaw/nullclaw PR #1010)
- #1005 [OPEN] fix(memory): 阻止归档会话分片被召回进实时轮次与 `memory_recall` 工具 — [nullclaw/nullclaw PR #1005](nullclaw/nullclaw PR #1005)
- #1004 [OPEN] fix(providers): 在非 2xx 响应时记录已脱敏的 provider 错误体 — [nullclaw/nullclaw PR #1004](nullclaw/nullclaw PR #1004)
- #970 [OPEN] fix(cli): 为 `nullclaw agent` REPL 增加无分配行编辑器，支持方向键与历史导航 — [nullclaw/nullclaw PR #970](nullclaw/nullclaw PR #970)

值得注意的是 #970 创建于 2026-06-29，至今已近三个月仍未合并，属于队列中最陈旧的条目。

## 4. 社区热点

今日所有 PR 的评论数与点赞数均未提供有效数据（评论为 undefined，👍 均为 0），Issues 侧无任何条目。因此不存在可量化的讨论热点；从时间维度看，更新最频繁的是 #1005、#1004、#970（均在 2026-09-26 有更新，创建于更早日期），表明维护者或作者仍在推动这些旧 PR，而非新议题引发关注。

- [nullclaw/nullclaw PR #1005](nullclaw/nullclaw PR #1005)
- [nullclaw/nullclaw PR #1004](nullclaw/nullclaw PR #1004)
- [nullclaw/nullclaw PR #970](nullclaw/nullclaw PR #970)

背后的诉求可以合理推断为：项目在内存召回语义、provider 可观测性与 CLI 可用性三方面存在用户可感知的缺陷，但当前缺少来自社区的公开反馈渠道（Issues 为 0）。

## 5. Bug 与稳定性

按严重程度排列（依据 PR 摘要中描述的故障影响面）：

1. **高 — 内存召回污染实时对话（#1005）**：归档副本被召回进 prompt 与 `memory_recall` 工具，导致模型将当前用户消息误判为旧历史；同时会话搜索在过滤前应用 `LIMIT`，使全局结果被截断。已有 fix PR。 [nullclaw/nullclaw PR #1005](nullclaw/nullclaw PR #1005)
2. **高 — 机器人自回复回灌（#1010）**：Discord 入口仅通过 `allow_bots` 放行机器人流量，配置 `allow_bots = true` 的部署会把自身回复重新喂给 agent；若回复以机器人自己的 `@` 提及开头还会进一步触发问题。已有 fix PR。 [nullclaw/nullclaw PR #1010](nullclaw/nullclaw PR #1010)
3. **中 — XML 工具调用解析内存泄漏（#1011）**：`parseXmlToolCalls` 在列表追加或同次解析中后续分配失败时泄漏 `name` / `arguments`。已有 fix PR。 [nullclaw/nullclaw PR #1011](nullclaw/nullclaw PR #1011)
4. **中 — provider 错误不可诊断（#1004）**：非 2xx 的 provider POST 返回 `HttpStatusError` 并释放响应体，服务端原因（如模型不支持工具）在不抓包的情况下不可见。已有 fix PR。 [nullclaw/nullclaw PR #1004](nullclaw/nullclaw PR #1004)

以上 4 项均已附带 fix PR，但均处于 OPEN 状态，尚未合并。

## 6. 功能请求与路线图信号

今日无 Issue 形式的功能请求。从待合并 PR 可观察到以下方向性信号：

- **CLI 交互能力补齐（#970）**：为 `nullclaw agent` REPL 引入 POSIX raw 模式与无分配行编辑器，覆盖方向键、历史导航、光标移动、退格/删除、Home/End 及常用按词操作。该 PR 滞留近三个月，若被纳入，将显著改善交互式使用体验。 [nullclaw/nullclaw PR #970](nullclaw/nullclaw PR #970)
- **可观测性建设（#1004）**：对 provider 错误体做脱敏后记录，暗示路线图中"可诊断性"正在被补齐。
- **多平台接入健壮性（#1010）**：Discord 入口的自我消息过滤属于接入层加固，同类策略可能需推广至其他平台入口。

## 7. 用户反馈摘要

今日 Issues 为 0，PR 评论数据不可用（undefined），因此无法从评论中提炼真实用户痛点、使用场景或满意度反馈。现有信息全部来自 PR 摘要，反映的是维护者/贡献者视角的技术问题，而非终端用户原话。

## 8. 待处理积压

- **#970**（创建 2026-06-29，更新 2026-09-26，OPEN，作者 vernonstinebaker）：滞留近三个月的 CLI REPL 行编辑器 PR，是当前队列中年龄最长的条目，建议维护者优先给出评审结论（合并、拆分或关闭）。 [nullclaw/nullclaw PR #970](nullclaw/nullclaw PR #970)
- **#1005 / #1004**（创建 2026-09-24，更新 2026-09-26，OPEN）：涉及内存召回正确性与错误可观测性的修复，均已挂起两天以上，建议尽快合入。 [nullclaw/nullclaw PR #1005](nullclaw/nullclaw PR #1005) · [nullclaw/nullclaw PR #1004](nullclaw/nullclaw PR #1004)
- **整体队列健康度提示**：5 条 PR 全部单一作者、全部 OPEN、0 条合并、0 条关闭，且 Issues 侧完全静默——今日数据既无新增讨论，也无闭环交付，建议关注评审带宽是否成为瓶颈。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-09-26）

## 1. 今日速览

过去 24 小时 IronClaw 仓库活跃度处于**低位平稳**状态：新增/活跃 Issue 1 条，无关闭；PR 更新 2 条，均为待合并状态，无合并或关闭记录；无新版本发布。今日无任何代码进入主干，项目推进主要停留在评审与待合并队列中。社区互动信号极弱，唯一的活跃 Issue 与两条 PR 均无评论、无点赞。整体健康度：无崩溃或回归报告，但吞吐量偏低，待合并队列需要关注。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，主干代码与已发布能力无变化，项目功能推进量为零。两条待合并 PR 情况如下：

- **PR #7988** [OPEN] `chore(agents): refresh codebase knowledge graph`（size: XS, risk: low, contributor: core，作者 ironclaw-ci[bot]，创建于 2026-08-29，更新于 2026-09-26）
  链接: https://github.com/nearai/ironclaw/pull/7988
  由 nightly `Codebase Graph Refresh` 工作流自动生成，刷新已提交的 codebase-memory 引导快照。属于 CI/基础设施类维护变更，作者标注为 core 贡献者，规模极小、风险低，长期停留在待合并状态。
- **PR #8108** [OPEN] `fix(host-runtime): add builtin.time shift and typed input issues`（size: XL, risk: low, scope: docs, contributor: new，作者 Bortlesboat，创建于 2026-09-22，更新于 2026-09-25）
  链接: https://github.com/nearai/ironclaw/pull/8108
  为 `builtin.time` 增加 `operation: "shift"`，支持相对于显式时间戳或当前时间的有符号秒、分、时、天、周偏移；日与周按固定时长处理，并使用宽累加器以支持可表示的有符号进位。该 PR 规模为 XL，作者标记为首次贡献者（contributor: new）。

## 4. 社区热点

今日**无任何 Issue 或 PR 产生评论或点赞反应**，缺乏可量化的讨论热度。相对最值得关注的是当日唯一新开 Issue：

- **Issue #8112** [OPEN] `Feature: NEARA hosted-MCP extension (keyless NEAR token launchpad tools)`，作者 iwaterheater，创建并更新于 2026-09-26，评论 0，👍 0
  链接: https://github.com/nearai/ironclaw/issues/8112
  摘要显示其诉求是让 IronClaw 智能体具备操作 NEAR 代币发射平台的能力，包括列出与报价新币、发射代币以及交易代币；提案指向 NEAR 主网上的发射平台 NEARA（neara.fun），其代币具有固定 1B 供应量。该诉求反映用户希望扩展智能体在链上资产操作场景的可执行工具面。

## 5. Bug 与稳定性

今日**无 Bug、崩溃或回归问题报告**。在已披露的数据中，唯一与修复相关的是 PR #8108（`fix(host-runtime): add builtin.time shift and typed input issues`），其标题提及 “typed input issues”，但摘要主体描述的是新增 `builtin.time` 的 shift 操作能力，未给出具体的崩溃或回归细节，因此无法在本日报中确认为已定位的线上问题。该 PR 目前仍为待合并状态，即没有已合入的 fix。

链接: https://github.com/nearai/ironclaw/pull/8108

## 6. 功能请求与路线图信号

今日唯一的新功能请求为 Issue #8112，提出以 hosted-MCP 扩展形式接入 NEARA 发射平台工具（无密钥方式），覆盖代币列表/报价、发射与交易三类操作。

- 链接: https://github.com/nearai/ironclaw/issues/8112

结合已有 PR 判断：今日两条待合并 PR 中，#7988 为 CI 快照维护，#8108 为 host-runtime 的时间工具能力扩展，**均与 NEARA 或 MCP 扩展方向无直接关联**。因此在现有数据范围内，没有证据表明 Issue #8112 已被纳入下一版本的开发计划；其是否会被采纳，需要维护者在 Issue 中给出回应后方可判断。

## 7. 用户反馈摘要

今日数据中**没有任何 Issue 评论**可供提炼用户反馈。可用的用户侧信息仅来自 Issue #8112 的正文摘要：使用者指出当前 IronClaw 智能体**无法对 NEAR 代币发射平台执行操作**——既不能列出和报价新币，也不能发射或交易代币，这构成其提出功能请求的直接痛点与使用场景。除此之外，本日无满意度或不满意的用户表态数据。

链接: https://github.com/nearai/ironclaw/issues/8112

## 8. 待处理积压

- **PR #7988** 自 2026-08-29 创建，至 2026-09-26 仍为待合并状态，已滞留约 **28 天**。该 PR 由自动化工作流生成、规模 XS、风险 low，属于应当低成本快速处理的维护类变更；同时需注意，代码知识图谱快照长期未刷新会使其与默认分支逐步偏离。
  链接: https://github.com/nearai/ironclaw/pull/7988
- **PR #8108** 自 2026-09-22 创建，至 2026-09-25 有更新，仍为待合并，滞留约 **4 天**。该 PR 规模为 XL 且作者标记为首次贡献者（contributor: new），属于典型的“高评审成本 + 新人贡献”组合，若缺乏审阅反馈容易造成流失，建议维护者优先给出评审意见或明确后续路径。
  链接: https://github.com/nearai/ironclaw/pull/8108
- **Issue #8112** 为当日新建，暂无积压问题，但当前 0 评论、0 反应，建议及时确认或标注标签，避免新提案在队列中静默。
  链接: https://github.com/nearai/ironclaw/issues/8112

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-26

## 1. 今日速览

今日 LobsterAI 出现一次典型的 **stale 清理潮**：6 条 Issue 全部关闭、9 条 PR 全部合并或关闭，新开/活跃 Issue 为 0，无新版本发布。所有关闭条目均带有 `[stale]` 标记且创建于 2026-03-30，说明今日的更新并非新增开发活动，而是维护者对约半年前积压条目的集中收口。唯一例外是 PR #2763（2026-09-25 创建并于同日关闭），属于近期真实修复。整体活跃度评估为**低**，但积压消化指标为**正向**，项目处于维护整理状态而非功能扩张期。

## 2. 版本发布

今日无新版本发布，不涉及破坏性变更或迁移事项。

## 3. 项目进展

今日合并/关闭的 PR 覆盖认证、Agent 会话引擎、UI、日志规范、记忆判定、定时任务与 Windows 兼容性多个模块：

- **[PR #1049](https://github.com/netease-youdao/LobsterAI/pull/1049) fix(auth)**：`fetchWithAuth` 的内联 401-refresh 逻辑绕过 `refreshOnce()` 去重机制，引入 `sharedRefreshOnce` 共享槽修复并发刷新导致的双重消费问题（关联 Issue #1048）。
- **[PR #1052](https://github.com/netease-youdao/LobsterAI/pull/1052) fix(openclaw)**：修复两处导致 AI 会话永久无法启动的竞态条件——`ensureGatewayClientReady` 并发初始化失败后等待者不校验就绪状态（S-07），以及 `ensureActiveTurn` 对已手动停止 session 仍创建 ActiveTurn（S-08）（关联 Issue #1051）。
- **[PR #1054](https://github.com/netease-youdao/LobsterAI/pull/1054) fix(modal)**：定位到顶部栏 `.draggable`（`-webkit-app-region: drag`）会拦截 Modal 关闭按钮鼠标事件，通过在 `index.css` 为 `.fixed` 和 `.modal-backdrop` 添加 `-webkit-app-region: no-drag` 修复（关联 Issue #1053）。
- **[PR #1056](https://github.com/netease-youdao/LobsterAI/pull/1056) fix(cowork)**：清理 `src/renderer/services/cowork.ts` 中遗留的三处调试 `console.log`，符合项目日志规范。
- **[PR #1057](https://github.com/netease-youdao/LobsterAI/pull/1057) fix(memory)**：`coworkMemoryJudge.ts` 的 `extractTextFromAnthropicResponse` 未跳过 `type="thinking"` 块，在 Anthropic 扩展思考开启时会污染 LLM judge 输出。
- **[PR #1058](https://github.com/netease-youdao/LobsterAI/pull/1058) fix(scheduled-task)**：`migrateScheduledTaskRunsToOpenclaw` 在 `fs.appendFileSync` 失败时仍无条件写入 `setKv(…, "true")`，导致下次启动被幂等守卫跳过、产生数据丢失。
- **[PR #1059](https://github.com/netease-youdao/LobsterAI/pull/1059) fix(windows)**：修正 Windows 默认浏览器探测，避免在 Chrome 已设为默认时仍启动 Edge。
- **[PR #1065](https://github.com/netease-youdao/LobsterAI/pull/1065) feat(scheduled-task)**：为定时任务创建/编辑表单新增 session 选择器（可搜索），允许绑定到已有 cowork session，而非每次运行都新建隔离会话。
- **[PR #2763](https://github.com/netease-youdao/LobsterAI/pull/2763) fix(openclaw)**：模型调用已启动后再整轮重放，会与已提交的 keyed user message 冲突并暴露 “LLM request failed.” 掩盖真实 provider 错误；新增 `modelCallStarted` 到 `OverloadRetryState` 以终止整轮重放。

其中 #1049/#1052/#1054/#1056/#1057/#1058/#1059 均为 3 月提交后长期滞留的修复，今日集中落地，表明这些修复在关闭前未标记合并结论，实际推进幅度需结合代码分支状态进一步确认；#1065 与 #2763 属于相对更具功能增量与近期活跃度的条目。

## 4. 社区热点

今日所有条目 👍 均为 0，Issues 评论数统一为 2，未出现明显高热讨论条目，社区互动整体清淡。相对值得关注的是：

- **[Issue #1048](https://github.com/netease-youdao/LobsterAI/issues/1048)** 与配套 **[PR #1049](https://github.com/netease-youdao/LobsterAI/pull/1049)**：并发 401 双消费 refreshToken 导致强制登出，属于认证链路的核心可靠性问题。
- **[Issue #1051](https://github.com/netease-youdao/LobsterAI/issues/1051)** 与配套 **[PR #1052](https://github.com/netease-youdao/LobsterAI/pull/1052)**：AI 会话永久无法启动，直接影响核心可用性。
- **[Issue #1053](https://github.com/netease-youdao/LobsterAI/issues/1053)** 与配套 **[PR #1054](https://github.com/netease-youdao/LobsterAI/pull/1054)**：Modal 无法关闭，用户明确表示“应该是所有 modal 都有这个问题”，影响面广。

诉求集中在一点：**核心交互路径（登录态、会话启动、弹窗关闭）的稳定性**，而非新功能。

## 5. Bug 与稳定性

按严重程度排列，均已有对应 fix PR（PR 编号见括号）：

| 严重度 | 问题 | 说明 | Fix PR |
|---|---|---|---|
| 高 | [Issue #1051](https://github.com/netease-youdao/LobsterAI/issues/1051) 竞态导致 AI 会话永久无法启动 | 初始化失败后等待者不校验状态，后续调用永久报错且无法恢复；已停止 session 被强行创建 ActiveTurn | [PR #1052](https://github.com/netease-youdao/LobsterAI/pull/1052) |
| 高 | [Issue #1048](https://github.com/netease-youdao/LobsterAI/issues/1048) 并发 401 双重消费 refreshToken | 两套独立 token 刷新逻辑，`fetchWithAuth` 绕过 `refreshOnce` 去重，用户被强制登出 | [PR #1049](https://github.com/netease-youdao/LobsterAI/pull/1049) |
| 中 | [Issue #1053](https://github.com/netease-youdao/LobsterAI/issues/1053) Modal 关闭按钮无反应 | 顶部拖拽区域拦截鼠标事件，用户判断“所有 modal 都有此问题” | [PR #1054](https://github.com/netease-youdao/LobsterAI/pull/1054) |
| 中 | [PR #1058](https://github.com/netease-youdao/LobsterAI/pull/1058) 定时任务历史写入失败导致数据丢失 | 迁移函数在 append 失败时仍标记完成，下次启动跳过 | 自身即 fix PR |
| 中 | [Issue #1062](https://github.com/netease-youdao/LobsterAI/issues/1062) 定时任务改时间后标题与描述不符 | v2026.3.26 / win10，必现 | 未见对应 PR |
| 低-中 | [PR #2763](https://github.com/netease-youdao/LobsterAI/pull/2763) 整轮重放掩盖真实 provider 错误 | 错误信息误导为 “LLM request failed.” | 自身即 fix PR |
| 低 | [Issue #1066](https://github.com/netease-youdao/LobsterAI/issues/1066) 心跳对话未过滤 | 系统日志/对话未过滤，造成用户困惑 | 未见对应 PR |
| 低 | [PR #1057](https://github.com/netease-youdao/LobsterAI/pull/1057) thinking 块污染 memory judge 响应 | 需开启 Anthropic extended thinking 才触发 | 自身即 fix PR |
| 低 | [PR #1056](https://github.com/netease-youdao/LobsterAI/pull/1056) 生产代码残留调试日志 | 违反项目日志规范 | 自身即 fix PR |
| 低 | [PR #1059](https://github.com/netease-youdao/LobsterAI/pull/1059) Windows 默认浏览器探测错误 | Chrome 为默认时仍启动 Edge | 自身即 fix PR |

## 6. 功能请求与路线图信号

今日唯一明确的功能性需求来自 [Issue #1061](https://github.com/netease-youdao/LobsterAI/issues/1061)：用户希望**修改网关端口**，因其与 OpenClaw 端口冲突。该 Issue 已关闭但未见对应实现 PR，属于遗留的配置化诉求。

较可能纳入后续版本的是 **[PR #1065](https://github.com/netease-youdao/LobsterAI/pull/1065)**：允许定时任务绑定到已有 cowork session。该功能直接回应“每次运行都新建隔离会话”的体验缺陷，且已在表单中实现可搜索的 session 选择器，功能完整度较高，是最具路线图价值的一条。

此外，[PR #2763](https://github.com/netease-youdao/LobsterAI/pull/2763) 与 [PR #1052](https://github.com/netease-youdao/LobsterAI/pull/1052) 均触及 openclaw 运行时（`OverloadRetryState`、`ensureGatewayClientReady`、`ensureActiveTurn`），暗示 openclaw 会话生命周期管理仍是迭代重点。

## 7. 用户反馈摘要

由于今日 Issues 评论数均为 2 且无正文评论内容提供，以下痛点均从 Issue/PR 正文提炼：

- **登录态不稳定**（[#1048](https://github.com/netease-youdao/LobsterAI/issues/1048)）：并发请求下 refreshToken 被双重消费，用户被动登出。
- **核心功能不可用**（[#1051](https://github.com/netease-youdao/LobsterAI/issues/1051)）：AI 会话一旦进入失败态便永久无法启动，缺乏恢复路径。
- **UI 阻塞性缺陷**（[#1053](https://github.com/netease-youdao/LobsterAI/issues/1053)）：Modal 关闭按钮失效，用户需附带截图说明，并主动指出问题范围可能覆盖所有弹窗。
- **配置冲突**（[#1061](https://github.com/netease-youdao/LobsterAI/issues/1061)）：网关端口与 OpenClaw 冲突，用户找不到修改入口——“怎么才能修改网关端口”。
- **信息呈现混乱**（[#1066](https://github.com/netease-youdao/LobsterAI/issues/1066)）：系统性日志/对话未过滤，用户明确表示“不然会给用户造成困惑”。
- **定时任务状态不一致**（[#1062](https://github.com/netease-youdao/LobsterAI/issues/1062)）：标题与实际执行时间不符，用户标注为必现。
- **环境兼容问题**（[PR #1059](https://github.com/netease-youdao/LobsterAI/pull/1059)）：Windows 下默认浏览器识别错误。

满意度信号方面，今日无正面反馈；不满意集中在**可靠性、可配置性与信息噪音**三个方向。

## 8. 待处理积压

今日关闭的 6 条 Issue 创建于 2026-03-30、更新于 2026-09-26，平均滞留约 180 天，全部以 `[stale]` 标记关闭。存在以下需要维护者留意的情况：

- **[Issue #1062](https://github.com/netease-youdao/LobsterAI/issues/1062)**（定时任务时间与标题不符，必现）：以 stale 关闭，但今日 PR 列表中未见对应修复，可能仍在代码中存在。
- **[Issue #1066](https://github.com/netease-youdao/LobsterAI/issues/1066)**（心跳对话未过滤）：同样以 stale 关闭且无对应 PR。
- **[Issue #1061](https://github.com/netease-youdao/LobsterAI/issues/1061)**（网关端口修改）：用户配置诉求未获实现即被关闭。
- **[PR #1059](https://github.com/netease-youdao/LobsterAI/pull/1059)**、**[PR #1065](https://github.com/netease-youdao/LobsterAI/pull/1065)**：均为 3 月提交、今日关闭，若未真正合入主干，存在被 stale 机制误伤的风险，建议复核。

同时，昨日创建的 **[PR #2763](https://github.com/netease-youdao/LobsterAI/pull/2763)** 在 1 天内即关闭，与上述 180 天滞留形成鲜明对比，建议维护者审视 stale 策略与近期 PR 处理节奏的一致性。

---

*说明：本报告所有数据与链接均来自所提供的 LobsterAI GitHub 数据，未对未提供的评论内容、合并结论或版本信息做任何推断。今日数据中所有 PR 状态为 CLOSED 且均带 `[stale]` 标记，无法据此确认是否已实际并入主干，相关表述已作相应保留。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-26）

## 1. 今日速览

今日 Moltis 项目整体活跃度处于低位。过去 24 小时内无 Issue 更新、无新版本发布，仅产生 1 条新的待合并 PR（#1285），内容为文档层面的部署方式补充。项目未出现任何已合并/已关闭的 PR，代码主线无实质推进。综合来看，今日属于低强度维护日，项目健康度指标（活跃度）偏弱，但无负面信号（无新增 Bug、无回归报告）。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目代码主线在 24 小时内无功能性推进。当前唯一在途变更为文档类 PR（见下节），尚未合并，因此对项目能力的实际增量尚未落地。

## 4. 社区热点

今日唯一活跃条目为：

- **PR #1285 [OPEN] docs: add RepoCloud one-click deploy button**
  作者：cosark | 创建/更新：2026-09-26 | 评论：undefined | 👍：0
  链接：moltis-org/moltis PR #1285

该 PR 在 README.md 的 Cloud Deployment 表格中新增 RepoCloud 一行，样式对齐已有的 DigitalOcean 一键部署按钮，按钮链接指向 `https://repocloud.io/det...`（摘要中链接被截断）。

**诉求分析**：这是一次典型的部署渠道扩展贡献，反映出社区希望降低 Moltis 的部署门槛、丰富托管平台选项。由于评论数与点赞数均无数据（评论为 undefined、👍 为 0），暂无实际讨论热度，属于常规文档增强类贡献，未形成社区讨论焦点。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告（Issues 更新为 0 条）。稳定性方面无新增风险信号。

## 6. 功能请求与路线图信号

今日无用户提交的新功能请求（Issues 为 0 条）。唯一可视为"路线图信号"的是 PR #1285 所体现的部署生态扩展方向——即通过接入更多云平台（如 RepoCloud）的一键部署入口来降低上手成本。该 PR 若被合并，将成为下一版本 README/文档层面的可见变化；但由于其仅为文档改动且尚未合并，不宜过度解读为产品功能路线图调整。

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼（Issues 更新为 0 条，PR 评论数为 undefined）。无法归纳真实用户痛点、使用场景或满意度反馈。建议在数据积累后再行分析。

## 8. 待处理积压

今日数据仅包含 1 条 PR，无长期未响应的 Issue 数据可供识别。需提醒维护者关注的是：

- **PR #1285**（moltis-org/moltis PR #1285）目前处于 OPEN 状态，创建与更新均为 2026-09-26，尚无评论与点赞记录。该 PR 内容简单、影响面小（README 表格新增一行），建议维护者尽快完成 review 与合并决策，避免文档类贡献堆积，同时向贡献者传递正向反馈。

---

**数据说明**：本日报全部内容基于上述提供的 GitHub 数据生成；对于未提供的数据（如 Issue 评论、长期积压 Issue 列表、PR 评论数），均如实标注为无数据，未作推断或补充。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-26

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 公开数据。注：部分条目链接与摘要中出现的仓库标识为 `QwenPaw`，正文按原始数据呈现。

---

## 1. 今日速览

过去 24 小时项目保持中等偏高的社区活跃度：Issues 与 PR 更新各 11 条，其中 10 条 Issue 为新开或持续活跃，仅 1 条关闭；PR 侧 11 条全部处于待合并状态，**无任何合并/关闭记录，也无新版本发布**。

今日动态呈现明显的"**问题发现快、修复响应快**"特征：多个当日或前一日报告的 Bug（#7980 grep_search 二进制污染、#7984 Browser SDK 扩展加载、#7946 QQ 事件重放）均在 24 小时内出现了对应的修复 PR（#7988、#7987、#7983），且其中两条来自首次贡献者。

整体健康度评估：**社区参与活跃、修复闭环效率高，但合并通道停滞**——积压的 11 条待合并 PR 中已包含 8 月下旬提交的老 PR（#7357、#7359），若合并节奏持续滞后，可能影响贡献者留存。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

**今日合并/关闭的 PR：0 条**，项目主线代码未取得已落地的推进。

已关闭的条目仅 1 条 Issue：
- [#7804](https://github.com/agentscope-ai/QwenPaw/issues/7804) [CLOSED] [enhancement] management — 作者 carriereroofingpro-ctrl，涉及 Core/Backend、Console、Channels 多组件，创建于 2026-09-16，更新于 2026-09-26，评论 2 条。

⚠️ 关注点：11 条 PR 全部处于待合并状态，其中包括：
- [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) feat(chat): add tool call visibility toggle（创建于 2026-08-27，已积压约 30 天）
- [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) feat(providers): expose per-media inline caps（创建于 2026-08-27，已积压约 30 天）

这两个功能型 PR 自 8 月底提交后未见合并，是当前项目推进速度的主要瓶颈。

---

## 4. 社区热点

按评论数排序的今日最活跃讨论：

| 排名 | 条目 | 评论 | 链接 |
|---|---|---|---|
| 1 | #7884 [question] 压缩后刷新前端，历史信息无法全量加载 | 5 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7884) |
| 2 | #4963 [enhancement] Cron 支持直接执行脚本/Shell 任务 | 4 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/4963) |
| 3 | #7957 [enhancement] 支持手动停用预置模型与渠道 | 3 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7957) |
| 4 | #7948 [bug] Web 控制台设计导致用户输入中断 | 3 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7948) |

**诉求分析：**

- **#7884 是今日情绪最强烈的反馈**。用户 happieme 直接质问聊天历史过短、"讨论过的问题回头往上翻就看不到了"，并明确表达体验落差。该 Issue 创建于 2026-09-19，已持续 6 天仍有更新，说明**上下文持久化与前端加载策略**是真实且未解决的体验痛点。
- **#4963 值得特别关注**：该 Issue 创建于 2026-06-04，至今已近 4 个月仍在活跃讨论，需求（cron 直接执行 shell 脚本，而非仅 text/agent 两种类型）指向自动化工作流的实质能力缺口，长期悬置可能积累不满。
- **#7957 反映配置洁癖类需求**：用户希望能停用未被使用的预置模型与渠道，属于产品打磨层面的诉求。

---

## 5. Bug 与稳定性

按严重程度排列（严重度依据：是否造成状态污染/不可恢复循环 > 功能不可用 > 显示问题）：

### 🔴 高严重度

**[#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980) grep_search 缺少二进制过滤，匹配到内部 history.db-wal，导致会话状态污染与不可恢复的死循环**
- 作者 djj532｜创建 2026-09-25｜评论 2
- 根因：`grep_search` 在未指定 `path` 时默认搜索 workspace 根目录，且缺少 `grep -I` / ripgrep 那样的二进制文件检测，会读到 QwenPaw 自身的 `history.db-wal`。
- **已有 fix PR：[#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988)**（[first-time-contributor] fix(tools): skip binary and internal files in grep search），该 PR 明确指出 WAL 输出中的二进制控制字节会进入工具结果并持久化到会话状态。

### 🟠 中严重度

**[#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) QQ 官方机器人网关在会话恢复时重放事件，导致消息重复处理**
- 作者 yaozy2020｜创建 2026-09-23｜评论 2
- 环境：QwenPaw `2.2.1`（PyPI stable），飞牛 fnOS 原生部署（非 Docker），Python 3.12，Linux 6.18.18，QQ 官方机器人长连接（WebSocket）模式。
- 场景：服务端主动要求重连（`qq server requested reconnect`）后，重连恢复会话（`qq session resumed`）时服务端重放此前依赖 INT… 的事件。
- **已有 fix PR：[#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983)** Fix qq replayed messages，指出 `QQChannel._handle_msg_event` 会重复处理同一 message ID，再次调度 ack 并重复入队。

**[#7984](https://github.com/agentscope-ai/QwenPaw/issues/7984) Browser SDK 无法加载 profile 扩展**
- 作者 One-sixth｜创建 2026-09-25｜评论 2
- 根因：Playwright 注入了 `--disable-extensions`，而 QwenPaw 无法移除该默认参数，导致持久 profile 模式下已安装扩展（如 SwitchyOmega 代理扩展）不加载。
- **已有 fix PR：[#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987)**（[first-time-contributor] fix(browser): support Playwright default argument exclusions），新增 `browser.ignore_default_args` 配置项并贯通至 Playwright 适配器。

**[#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) TaskTracker `_runs` 僵尸条目导致 running_task_count 虚高，与 /api/chats 不一致**
- 作者 yylxdzz｜创建 2026-09-26｜评论 1
- 现象：仪表盘显示 "2 running tasks"，但聊天列表 API 只返回 1 个 `status="running"` 的会话，全局计数器与逐会话计数器出现分歧。
- 尚无对应 fix PR。

### 🟡 较低严重度（体验/UI）

**[#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) Web 控制台设计不佳，破坏用户输入**
- 作者 BorisPolonsky｜创建 2026-09-23｜评论 3｜尚无 fix PR。
- 注：正文模板中 QwenPaw 版本、描述等字段未填写，信息完整度有限。

**[#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924) Console 中 Markdown 表格超宽且横向滚动条沉底**
- 作者 liunux4odoo｜创建 2026-09-22｜评论 2
- 三点问题：表格超宽需横向滚动；行数多时横向滚动条位于表格最底部难以触碰；表格…
- **已有 fix PR：[#7989](https://github.com/agentscope-ai/QwenPaw/pull/7989)**（[first-time-contributor] fix(console): keep Markdown table scrolling reachable），将表格限制在气泡内、长单元格换行，滚动区上限设为 `min(60vh, 32rem)`。

### 补充：今日修复型 PR 中未直接关联 Issue 的项

- [#7992](https://github.com/agentscope-ai/QwenPaw/pull/7992) fix(wecom): stop treating prose containing a pipe as a markdown table — 修复 `format_markdown_tables()` 将任何含 `|` 的行误判为表格开头的问题。
- [#7986](https://github.com/agentscope-ai/QwenPaw/pull/7986) fix(providers): skip the context pattern table for custom endpoints — 修复自建 OpenAI 兼容端点（llama.cpp、vLLM 等）上下文窗口被静态模式表错误推断的问题。
- [#7982](https://github.com/agentscope-ai/QwenPaw/pull/7982) fix(providers): relay Gemini thought_signature in native Gemini provider — 修复原生 Gemini + 思考模型 + 工具调用在第二轮报 `400: Function call is missing a thought_signature` 的问题。

**小结：今日 6 个 Bug 中已有 4 个配备 fix PR，响应闭环率高。**

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有相关 PR | 纳入下一版本的可能性判断 |
|---|---|---|---|
| Cron 支持直接执行脚本/Shell | [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | 无 | 持续讨论近 4 个月，需求明确，但无实现 PR，短期落地不确定 |
| 手动停用预置模型与渠道 | [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 无 | 属配置项增补，实现成本较低，但尚无 PR 支撑 |
| 为 Aliyun Token Plan 模型声明 `thinking_param_style` | [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 无 | **可能性较高**。属模型目录数据补齐（`model_catalog.json`，catalog_version 2026.08.27），上游端点实际支持 `reasoning_effort`/`thinking…`，当前导致 Console 思考控件被隐藏 |
| 隐藏工具调用卡片 | — | [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | PR 已就绪但积压约 30 天，取决于维护者合并意愿 |
| 按媒体类型暴露内联上限 | — | [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | 同上，PR 已就绪但积压约 30 天 |

**信号研判**：今日最清晰的路线图信号来自 **模型目录与提供商层的精细化配置**——#7990（thinking_param_style）与 PR #7986（自定义端点上下文窗口）、#7359（按媒体类型的内联上限）共同指向"**多提供商、多模型差异化适配**"这一主题，#7986 已有 PR 落地，方向一致性较强。

---

## 7. 用户反馈摘要

**核心痛点：**

1. **聊天历史留存不足（最强烈）** — #7884 用户 happieme 用连续质问表达不满："现在聊天记录的历史这么短么？讨论过的问题，回头往上翻，看不到了？？？咱聊天记录多存点，做不到么？知道这个体验多差么？？？" 该反馈直指上下文持久化与前端加载的架构性体验问题。

2. **配置界面冗余感** — #7957 用户 dylanleesky 表示预置了大量未使用的模型与渠道，希望可手动停用，理由中包含"有些人有强迫症"的表述，反映产品默认值策略对部分用户的干扰。

3. **自动化能力缺口** — #4963 用户 feng183043996 指出当前 cron 仅支持 `text` 与 `agent` 两种任务类型，无法在不经过 AI 处理的情况下直接执行脚本/Shell 命令，限制了自动化场景。

4. **模型能力未在 UI 正确暴露** — #7990 用户 Andykpa 指出模型目录未声明 `thinking_param_style`，导致 Console 中"思考模式/推理强度"区块与 Agent 设置的 "Thinking level" 下拉被隐藏或禁用，而上游端点实际支持相关参数——属"能力存在但用户够不着"的典型落差。

**部署场景观察：**

- #7946 提供了较完整的真实环境画像：**PyPI stable 版本 2.2.1、飞牛 fnOS 原生部署（非 Docker）、Python 3.12、Linux 6.18.18、QQ 官方机器人长连接模式**——说明非容器化、NAS 类环境的部署路径已有实际用户。
- #7984 显示用户在使用**持久化 profile + 真实 user_data_dir + 代理扩展**的浏览器自动化场景，属较进阶的用法。

**社区贡献信号（正面）：**

今日多条修复来自**[first-time-contributor]**，且一人（dawNotPoi）同时提交了 #7987、#7988、#7989 三个针对不同子系统的修复，说明新贡献者的进入门槛与响应意愿均较积极。

---

## 8. 待处理积压

### 🔴 长期未落地的 PR（建议优先处理）

- **[#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357)** feat(chat): add tool call visibility toggle — 作者 AaronZ345，创建于 **2026-08-27**，最后更新 2026-09-25，已积压 **约 30 天**。功能完整（为聊天界面增加工具调用卡片显示开关），长期挂起。
- **[#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359)** feat(providers): expose per-media inline caps — 作者 AaronZ345，创建于 **2026-08-27**，最后更新 2026-09-25，同样积压 **约 30 天**。已包含提供商级默认值、配置 API 持久化与转发、高级设置 UI 暴露及本地化。

> 两位同作者的 PR 同步积压 30 天未合并，是当前贡献者留存的最大风险点。

### 🟠 长期活跃但未定论的 Issue

- **[#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963)** Cron 支持直接执行脚本/Shell — 创建于 **2026-06-04**，已持续 **近 4 个月**，评论 4 条，无对应 PR。建议维护者至少给出明确的接受/拒绝结论。

### 🟡 创建数日仍无 fix PR 的 Issue

- [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) TaskTracker 僵尸条目导致计数不一致（2026-09-26，当日新开）
- [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) Web 控制台破坏用户输入（2026-09-23，创建 3 天，且正文信息不完整）
- [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) 停用预置模型与渠道（2026-09-23，创建 3 天）
- [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) `thinking_param_style` 缺失（2026-09-25）

### 待合并 PR 全景（11 条）

#7992、#7956、#7989、#7988、#7987、#7986、#7985、#7983、#7357、#7359、#7982 全部处于 OPEN 状态，建议维护者集中评审，避免修复型 PR 因等待过久而失效。

---

*本日报基于所提供的 GitHub 数据生成，未对未列出的字段（如 PR 评论数）进行推断；摘要中未完整显示的内容以"…"标注。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-26

## 1. 今日速览

ZeroClaw 今日维持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 45，关闭 5），PR 更新 50 条（待合并 46，合并/关闭 4），无新版本发布。整体呈"输入远大于输出"的状态——新增讨论与提案持续涌入，但合并吞吐偏低（仅 4 条 PR 关闭/合并），待合并队列已积压至 46 条。安全与权限类问题是今日主线：多个 S0/S1 级 issue 集中在无人值守 agent turn 缺少 ApprovalManager、工具跨 agent 越权访问、审批门控失效等方向，且有对应 fix PR 正在推进。WhatsApp Web 渠道问题密集（群组创建、mention、TTS 抑制），显示该渠道近期使用热度上升。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 数量有限，以下为已关闭项：

- **PR #9090 [CLOSED]** — `fix(agent): enforce tool-call pairing at one canonical chokepoint`：在单一规范卡点强制 tool-call 配对，解决 provider 拒绝"无前置 tool_use 的 tool_result"等破损配对形态的问题。链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9090
- **PR #10937 [CLOSED]** — `fix(runtime): enforce bounded child tool approvals`：为有界 agentic 子循环提供基于目标 agent 风险画像派生的全新非交互式审批管理器，对应 Issue #10643。链接：https://github.com/zeroclaw-labs/zeroclaw/pull/10937
- **PR #11018 [CLOSED]** — `test(tools): verify inherited Windows cache environment`：新增 Windows 执行回归测试，覆盖 `PSModuleAnalysisCachePath` 经 ShellTool 与 SkillShellTool 的继承转发。链接：https://github.com/zeroclaw-labs/zeroclaw/pull/11018
- **Issue #10922 [CLOSED]** — WhatsApp Web 忽略 `suppress_voice` 的自动 TTS 排队 bug 已关闭。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10922
- **Issue #10643 [CLOSED]** — 有界子循环工具审批的 fail-closed 强制问题已关闭（由 PR #10937 承接）。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10643

**整体推进评估**：审批/权限链路是今日唯一形成"issue → PR → 关闭"闭环的方向，属于实质进展；其余进展主要停留在大型 XL 级 PR 的持续迭代（如 #10621、#10803），尚未落地。

## 4. 社区热点

讨论最活跃的条目：

- **Issue #8692 [OPEN]** — `[Tracker]: Maintainer decision queue for RFCs and design issues`，15 条评论，今日评论数最高。这是 RFC 与设计议题的维护者决策队列，反映社区对决策流程透明度和决策积压的关注。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **Issue #10977 [OPEN]** — WhatsApp Web 实现 `create_room` 和 `invite_user` 以支持群组创建，5 条评论，标签含 `risk:high`，表明已有 `channel_room` 工具但 WhatsApp 渠道未接通。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10977
- **Issue #10922 [CLOSED]** — WhatsApp Web 忽略 `suppress_voice`，5 条评论后关闭。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10922
- **Issue #9284 [OPEN]** — `config flush can overwrite concurrent writes`，5 条评论，P1/high risk，涉及运行时并发写覆盖。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9284

**诉求分析**：决策队列（#8692）高讨论度说明社区对"提案如何被采纳"的元流程需求强烈；WhatsApp 相关条目集中出现，指向真实的群组协作使用场景尚未被渠道能力覆盖。

## 5. Bug 与稳定性

按严重程度排列：

**S0 - 数据丢失/安全风险**
- **Issue #9646 [OPEN]** — Session/channel 读写工具缺少 per-agent 所有权作用域（`sessions_list/history/send`、`discord_search`），目标标识符由模型提供参数直接使用，无 agent 级隔离。已标记 `status:in-progress`。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9646
- **Issue #10968 [OPEN]** — 无人值守 agent turn（cron、heartbeat、headless SOP、`spawn_subagent`）在无 ApprovalManager 下运行，导致风险画像工具审批静默失效。已标记 `status:accepted`，与今日关闭的 #10643/#10937 属同一缺陷类。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10968

**S1 - 工作流阻塞**
- **Issue #9946 [OPEN]** — `agent-browser` 子进程等待在可用性探测与 `run_command` 两处均无墙钟截止时间，也无 `kill_on_drop`。已标记 `status:in-progress`。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9946

**P1 级**
- **Issue #9284 [OPEN]** — `RpcDispatcher::flush_config` 分三步 flush 脏配置，可能覆盖并发写入。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9284
- **Issue #10780 [OPEN]** — v0.8.5 缺少主动式、token 预算驱动的上下文压缩，`keep_recent`/`collapse_tool_results` 失效。已标记 `status:in-progress`。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10780
- **Issue #10778 [OPEN]** — 多模态图像上限驱逐会重写更早的历史消息，从该点起使缓存前缀失效。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10778
- **Issue #10991 [OPEN]** — Windows 计划任务在登录时弹出控制台窗口，已标记 `needs-maintainer-review`。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10991

**P2 级（渠道相关）**
- **Issue #11036 [OPEN]** — OpenCode `big-pickle` 免费层模型在 v0.8.4 返回 403 FreeTierError，标记 `r:needs-repro`、`needs-author-action`。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/11036
- **Issue #10976 [OPEN]** — WhatsApp Web mention 双向损坏（入站为裸 JID 数字，出站为纯文本无 `mentionedJid`）。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10976
- **Issue #10926 [OPEN]** — Matrix `send_via` 将 peer 用户身份误当作房间目标。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10926
- **Issue #11021 [OPEN]** — ACP 硬取消后需保证 `session_end` 的 exactly-once 投递。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/11021

**Fix PR 关联情况**：#10968、#9646 与今日关闭的 #10643/#10937 同属审批/权限缺陷簇，PR #11132、#11174 正在推进；其余多数 bug 尚无可确认的 fix PR。

## 6. 功能请求与路线图信号

**有对应 PR、可能较快落地：**
- **Issue #10909 [OPEN]** — ZeroCode composer 的标准文本编辑（撤销/重做、键盘选择、全选、剪切）。已有对应 PR #11175（`feat(zerocode): add standard composer editing`，2026-09-26 开启）。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10909
- **Issue #10963 [OPEN]** — 向 delegate 子 agent 转发会话身份，标签 `status:parking-lot`。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10963

**新增提案、尚无 PR：**
- **Issue #10977 [OPEN]** — WhatsApp Web 群组创建（`create_room`/`invite_user`），`status:in-progress`、`risk:high`。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10977
- **Issue #10969 [OPEN]** — 为 cron 与 heartbeat 调度增加 jitter 窗口，避免同一表达式的 agent 同时触发。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10969
- **Issue #10933 [OPEN]** — 新增 MiniMax TTS/STT provider 家族（T2A v2 + speech_to_text），支持 `endpoint = "cn" | "intl"`。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10933
- **Issue #10900 [OPEN]** — 转写 provider 级联（主 STT 端点失败时的有序回退链）。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10900

**信号判断**：jitter 调度（#10969）与转写级联（#10900）针对多 agent 并发与失败静默两类生产痛点，落地价值高；MiniMax 与 WhatsApp 群组反映用户对 provider 与渠道覆盖面的持续扩张诉求。均带有 `status:parking-lot` 或 `accepted` 标签，短期进入下一版本的可能性取决于维护者带宽。

## 7. 用户反馈摘要

- **审批机制信任缺口**：#10968 与已关闭的 #10643 显示，用户在无人值守场景（cron、heartbeat、SOP、子 agent）下发现审批"看似生效实则静默失效"，属于对安全承诺的信任问题，而非单纯功能缺失。
- **渠道使用场景真实且具体**：WhatsApp Web 的群组创建、mention 解析、语音回复抑制（#10977、#10976、#10922）均带有明确的用户操作路径描述，说明已有用户将 ZeroClaw 用于群组协作而非仅一对一对话。
- **免费层凭据摩擦**：#11036 中用户反映 OpenCode 免费层 `big-pickle` 模型直接 403，附带完整报错信息，属于上手阶段即受阻的体验问题（已标记待复现）。
- **上下文与缓存管理不满**：#10780 指出主动式 token 预算压缩已被移除、相关配置项失效；#10778 指出图像驱逐会破坏缓存前缀——两者均指向长会话用户对成本与性能的敏感。
- **本地运行时体验**：#10991 的 Windows 登录时弹出控制台窗口，属于日常使用中的直接干扰；#11173（PR）针对报告类命令的 SIGPIPE 静默退出，同样来自 CLI 使用摩擦。

## 8. 待处理积压

长期未响应或跨越多日的重要条目，建议维护者优先关注：

- **Issue #8692**（创建于 2026-07-04，今日仍活跃，15 条评论）— 维护者 RFC/设计决策队列，本身即为解决积压而设，但其存在时长反映决策流程瓶颈。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **PR #9368**（创建于 2026-07-25，OPEN，XL 级）— `fix(runtime): count and report retained history in whole turns`，已挂起约两个月。链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9368
- **Issue #9284**（创建于 2026-07-23，P1，5 条评论）— config flush 并发写覆盖，两周以上未见关闭。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9284
- **Issue #9646**（创建于 2026-08-01，S0，`status:in-progress`）— 工具跨 agent 所有权作用域缺失，近两个月仍在进行中。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9646
- **Issue #9946**（创建于 2026-08-12，S1，`status:in-progress`）— browser 子进程无超时，已逾一个月。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9946
- **PR #9819**（创建于 2026-08-07，OPEN，XL 级）— 像素级图像校验，挂起约七周。链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9819
- **PR #10621**（创建于 2026-09-04，OPEN，XL 级，`needs-maintainer-review`）— agent 生命周期变更协调，涉及 daemon/gateway/channels/ACP/CLI 多入口统一配置权威。链接：https://github.com/zeroclaw-labs/zeroclaw/pull/10621

**健康度提示**：待合并 PR 46 条、今日仅 4 条关闭，且其中有多个 XL 级 PR 已挂起数周（#9368、#9819），叠加 6 个以上 S0/S1 级 issue 长期处于 `in-progress`，合并与关闭吞吐是当前项目健康度的主要压力点。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*