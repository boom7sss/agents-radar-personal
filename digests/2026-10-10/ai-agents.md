# OpenClaw 生态日报 2026-10-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-10 13:58 UTC

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

# OpenClaw 项目日报 — 2026-10-10

## 1. 今日速览

过去24小时项目维持**极高活跃度**：500 条 Issue 更新（新开/活跃 333、关闭 167），500 条 PR 更新（待合并 354、已合并/关闭 146），无新版本发布。讨论重心集中在 **Gateway/Agent 的崩溃与资源泄漏类 P0 问题**（SQLite WAL 膨胀、事件循环饥饿、插件临时目录不回收），以及维护者 steipete 主导的**多组 SQLite 读写性能优化 PR**。Issue 侧关闭率约 33%（167/500），PR 侧合入/关闭率约 29%（146/500），积压（待合并 354 条）仍是主要健康度风险。整体看，项目在稳定性修复与性能优化两条主线并行推进，但高优先级崩溃类问题尚未收敛。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合入/关闭的 PR 以修复类为主，以下为可确认的代表项：

- **#168464 [CLOSED] fix(telegram): keep raw command progress rows within line budget** — 修复 Telegram 原始命令进度行超出 `progress.maxLineChars` 的问题（工具图标、标签、分隔符与状态在明细额度之外被累加）。附 `telegram-e2e` 证明。链接: https://github.com/openclaw/openclaw/pull/168464

- 维护者 steipete 今日集中提交/更新了多组 SQLite 性能优化 PR（仍为 OPEN，尚未合入）：#168093（减少 chat turn 期间重复 SQLite 工作，stacked on #167965）、#168318（减少 chat preparation 的 SQLite 工作，宣称 warmed chat preparation 降低约 2x）、#168316（减少 chat turn 期间重复数据库读取）、#168465（拒绝查询 embedding 维度漂移）。链接: https://github.com/openclaw/openclaw/pull/168093 · https://github.com/openclaw/openclaw/pull/168318 · https://github.com/openclaw/openclaw/pull/168316 · https://github.com/openclaw/openclaw/pull/168465

- **#168467 [OPEN] fix(ci): select channel chunking suites for shared Markdown chunker changes** — 修复共享 Markdown render-aware chunker（`packages/markdown-core`）变更时 channel chunking 回归逃过 PR CI 与 `pnpm test:changed` 的问题（CI 基建类）。链接: https://github.com/openclaw/openclaw/pull/168467

> 说明：本期数据未提供已合入 PR 的完整清单与代码量统计，故不对“整体向前迈进多少”做量化推断。

---

## 4. 社区热点

按评论数与反应排序：

| 排名 | 类型 | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | Issue #143524 | Agent SQLite WAL 数日内膨胀至 1.4–2.8 GB，阻塞网关启动（Windows, 2026.9.2/9.3） | 116 | 0 | https://github.com/openclaw/openclaw/issues/143524 |
| 2 | Issue #149538 | main（1611ca6d）网关 ready 后不响应，/health 全部超时，事件循环饥饿（632-agent 集群）— 已关闭 | 26 | 0 | https://github.com/openclaw/openclaw/issues/149538 |
| 3 | Issue #97616 | 未回收的 hook/tool 子进程泄漏，僵尸进程累积导致运行时退化 | 18 | 1 | https://github.com/openclaw/openclaw/issues/97616 |
| 4 | Issue #40001 | write 工具缺少 append 模式，隔离 cron 会话破坏共享文件 | 16 | 1 | https://github.com/openclaw/openclaw/issues/40001 |
| 5 | Issue #69208 | Umbrella：跨渠道的重复 transcript、replay 与上下文装配问题 | 16 | 0 | https://github.com/openclaw/openclaw/issues/69208 |
| 6 | Issue #43367 | 多智能体编排不稳定：并发 add/config 覆盖、会话锁失败、子任务脱离 | 15 | 1 | https://github.com/openclaw/openclaw/issues/43367 |

**诉求分析**：热度最高的 #143524（116 条评论）指向**长时运行下 SQLite 资源不收敛**，是同一位作者从 9 月持续跟踪至今的 P0 阻塞问题，说明该缺陷对生产可用性影响大且修复周期长。#149538 涉及 632-agent 规模集群的可用性雪崩，虽已关闭，但其“事件循环饥饿 + RSS 攀升”的特征与今日其他内存/进程泄漏类报告（#97616、#158390）形成同一主题簇——**大规模、长运行网关的资源治理**。此外 #40001、#69208、#43367 共同指向**多智能体与 cron 场景下的会话状态与文件写入正确性**，属于被反复提出的结构性问题。

---

## 5. Bug 与稳定性

**P0（阻断级）**
- #143524 [OPEN] — SQLite WAL 无限增长（峰值 2865 MB），阻塞网关启动；标签含 `impact:message-loss`、`impact:crash-loop`、`ux-release-blocker`，`clawsweeper:no-new-fix-pr`（**暂无修复 PR**）。🔗 https://github.com/openclaw/openclaw/issues/143524
- #40001 [OPEN] — write 工具无 append 模式，cron 会话覆盖共享文件（`impact:data-loss`），`no-new-fix-pr`（**暂无修复 PR**）。🔗 https://github.com/openclaw/openclaw/issues/40001
- #158390 [OPEN] — `plugin-captures` 临时目录在构建/目录操作后不 GC，磁盘无限增长（`impact:crash-loop`、`ux-release-blocker`），`no-new-fix-pr`（**暂无修复 PR**）。🔗 https://github.com/openclaw/openclaw/issues/158390
- #167771 [OPEN] — 更新被 `update-recovery-pending` / 托管交接租约数据库身份变更永久阻塞，无修复路径（`ux-release-blocker`），`needs-live-repro`（**暂无修复 PR**）。🔗 https://github.com/openclaw/openclaw/issues/167771
- #168307 [CLOSED] — 2026.9.9 网关启动后单核持续满载、间歇拒连 6+ 小时（Windows，附 dumps/stacks）— 今日新开并当日关闭。🔗 https://github.com/openclaw/openclaw/issues/168307
- #164113 [CLOSED] — 非特权 LXC 容器内 `openclaw update` 因 FICLONE EPERM（seccomp 阻止 ioctl）在 updater-runtime-retention 失败；标签含 `clawsweeper:fix-shape-clear`、`clawsweeper:queueable-fix`（**修复形态已明确/可排队**）。🔗 https://github.com/openclaw/openclaw/issues/164113
- #156986 [CLOSED] — `openclaw update` 卡在 update-candidate-state，工作进程失控输出 233MB+ 并 respawn 循环（9.5）。🔗 https://github.com/openclaw/openclaw/issues/156986

**P1**
- #97616 [OPEN] — hook/tool 子进程未回收、僵尸累积（`impact:message-loss`、`crash-loop`），`needs-live-repro`（**暂无修复 PR**）。🔗 https://github.com/openclaw/openclaw/issues/97616
- #85251 [OPEN] — Codex app-server 发出 `turn/started` 后静默，embedded run 卡死整个恢复窗口（`impact:session-state`、`message-loss`），`no-new-fix-pr`。🔗 https://github.com/openclaw/openclaw/issues/85251
- #162119 [OPEN] — Codex 原地切换模型后间歇性返回 403 owner-verification 错误（`impact:security`、`auth-provider`）。🔗 https://github.com/openclaw/openclaw/issues/162119
- #101929 [OPEN] — `context-overflow-midturn-precheck` 估算超计约 2.3–2.6x，误触发截断恢复，`source-repro`、`diamond lobster`。🔗 https://github.com/openclaw/openclaw/issues/101929
- #156895 [OPEN] — 智能体创建的自动化任务约 20ms 内 fail-closed（"Scheduled account ... is unavailable"），`needs-security-review`。🔗 https://github.com/openclaw/openclaw/issues/156895
- #125764 [OPEN] — Telegram 适配器出站发送单次网络失败即死信，公告/完成回复静默丢失，无重试。🔗 https://github.com/openclaw/openclaw/issues/125764
- #137710 [OPEN] — 原生 Codex 子任务完成被记录但不唤醒 `sessions_yield` 父会话（`linked-pr-open`）。🔗 https://github.com/openclaw/openclaw/issues/137710
- #130955 [CLOSED] — `openclaw memory index` 恰好索引 2 个文件后永久停滞（extraPaths 与 base memory dir 均受影响）。🔗 https://github.com/openclaw/openclaw/issues/130955

**P2/P3**
- #84516 [OPEN] — Codex app-server 长回复在 ~1000–1100 字符处静默截断（`stop=null`、`aborted=false`）。🔗 https://github.com/openclaw/openclaw/issues/84516
- #67419 [OPEN] — 会话上下文膨胀：bootstrap 文件每轮重新注入，浪费 20–30% token。🔗 https://github.com/openclaw/openclaw/issues/67419
- #72015 [OPEN] — 启用官方 active-memory 插件会阻塞回复，QMD 启动初始化可压垮多智能体网关（`needs-live-repro`）。🔗 https://github.com/openclaw/openclaw/issues/72015
- #43367 [OPEN] — 多智能体编排的 add/config 覆盖、会话锁失败、子任务脱离（`linked-pr-open`）。🔗 https://github.com/openclaw/openclaw/issues/43367
- #142336 [OPEN] — 核心 `/dashboard` 在 2026.9.2+ 遮蔽 Telegram Mini App 启动器（回归，`not-repro-on-main`、`linked-pr-open`）。🔗 https://github.com/openclaw/openclaw/issues/142336
- #48709 [OPEN] — Gemini 2.5 Pro 的 textSignature 膨胀 + think 标签 + 混合文本/工具导致会话失败（`stale`）。🔗 https://github.com/openclaw/openclaw/issues/48709
- #88079 [CLOSED] — WebChat 对 Kimi Code 与 DeepSeek Reasoner 不流式输出 reasoning_content（仅 MiniMax 正常，回归）。🔗 https://github.com/openclaw/openclaw/issues/88079
- #97335 [OPEN] — cron 回退模型在普通会话可用，经 cron 触发时 LLM 请求失败（`auth-provider`）。🔗 https://github.com/openclaw/openclaw/issues/97335
- #146118 [OPEN] — #123737 的 superseded-task 压缩保护未覆盖 Codex 原生或非溢出压缩（`stale`、`bulk-filed`）。🔗 https://github.com/openclaw/openclaw/issues/146118

**可用修复线索**：#164113 被标记 `clawsweeper:fix-shape-clear` + `queueable-fix`；#43367、#142336、#137710、#88079 均带 `linked-pr-open`，已有相关 PR 在途。

---

## 6. 功能请求与路线图信号

- **#53763 [OPEN] [Feature] 内置无头浏览器** — 打包 headless Chromium 作为一等工具，使智能体无需依赖用户 Chrome 或第三方 API 即可访问 JS 渲染/需登录页面（👍 0，14 评论，`off-meta tidepool`，`needs-product-decision`）。**判断：产品决策未定，短期纳入下一版本的可能性低。** 🔗 https://github.com/openclaw/openclaw/issues/53763
- **#43454 [CLOSED] 网关生命周期钩子**（onSubagentComplete、onToolCallThreshold、onTurnComplete）— 让 workspace hooks 在智能体生命周期节点自动触发；今日关闭，`fix-shape-clear`、`source-repro`。**判断：形态已明确，具备落地条件。** 🔗 https://github.com/openclaw/openclaw/issues/43454
- **#166114 [OPEN] feat: 让具备图像能力的决策插件评估所提供的截图** — 允许智能体通过 `decision_evaluate` 提交已有截图；`needs proof`，`merge-risk: compatibility`。🔗 https://github.com/openclaw/openclaw/pull/166114
- **#132103 [OPEN] feat(sandbox): 发现环境内技能与已授权工作区 MCP 服务器** — 扩展内置运行时以发现仅存在于执行环境中的技能与显式授权的 MCP servers；`needs proof`，含安全边界变更。🔗 https://github.com/openclaw/openclaw/pull/132103
- **#167796 [OPEN] refactor(automations): 迁移周期性 heartbeats 并退役 executor** — 声明为 #164265 的最终顺序切片，采纳经批准的 #135933 设计（Peter 10 月 3 日决定）；`waiting on author`。**判断：属既定路线图内的结构性重构。** 🔗 https://github.com/openclaw/openclaw/pull/167796

---

## 7. 用户反馈摘要

**痛点**
- **资源失控是最高频抱怨**：#143524 反映 WAL 增长“数日内 1.4–2.8 GB 且从不 checkpoint”，#158390 反映临时目录“累积多 GB、永不清理”，#97616 反映僵尸进程累积导致运行时退化——三者共同指向长期运行网关的**清理机制缺失**。
- **升级/更新路径脆弱**：#164113（LXC 内 FICLONE EPERM）、#167771（更新被恢复锁永久阻塞且无修复路径）、#156986（update 卡住并失控输出）说明容器化与托管部署下的更新体验是明显短板。
- **静默数据/消息丢失**：#125764（Telegram 单次失败即死信）、#84516（Codex 长回复截断）、#40001（cron 覆盖共享文件）——用户强调“无重试、无用户可见错误、无 reconcile”。
- **成本与上下文焦虑**：#67419 明确量化“每个新会话开局就消耗 20–30% 上下文”，#101929 指出 token 估算超计 2.3–2.6x 误触发截断。

**使用场景**：Windows 单网关主机、632-agent 规模集群、非特权 Proxmox LXC 容器、macOS + Telegram 轮询（经 HTTP 代理）、多智能体并行编码批处理、isolated cron 会话、Codex/OAuth（gpt-5.5）无头调用。

**满意信号（较少但存在）**：#164113 被标 `fix-shape-clear`/`queueable-fix`、#88079 已关闭、#168307 当日新开当日关闭，以及维护者对 Codex/Telegram/记忆检索的多项修复 PR 在途，显示部分问题响应及时。

---

## 8. 待处理积压

**高危且长期未解（无修复 PR）**
- #97616 — 创建于 **2026-06-29**，已超 3 个月，P1 进程泄漏仍 `needs-live-repro`。🔗 https://github.com/openclaw/openclaw/issues/97616
- #40001 — 创建于 **2026-03-08**，P0 数据丢失（write 无 append），仍 `needs-maintainer-review` + `needs-product-decision`。🔗 https://github.com/openclaw/openclaw/issues/40001
- #53763 — 创建于 **2026-03-24**，内置无头浏览器功能请求停滞于产品决策。🔗 https://github.com/openclaw/openclaw/issues/53763
- #30381 — 创建于 **2026-03-01**，`x-openclaw-agent-id` 存在时仍校验请求 model 字段（`diamond lobster`，`needs-product-decision`）。🔗 https://github.com/openclaw/openclaw/issues/30381
- #69208 — 创建于 **2026-04-20**，跨渠道重复 transcript/replay 的 umbrella 议题（`maintainer` 标签）。🔗 https://github.com/openclaw/openclaw/issues/69208
- #43367 — 创建于 **2026-03-11**，多智能体编排不稳定，`linked-pr-open` 但长期未收敛。🔗 https://github.com/openclaw/openclaw/issues/43367
- #67419 — 创建于 **2026-04-15**，bootstrap 重复注入浪费 20–30% token（👍 2，`needs-product-decision`）。🔗 https://github.com/openclaw/openclaw/issues/67419
- #72015 — 创建于 **2026-04-26**，active-memory 阻塞回复 / QMD 启动过载（👍 2，`needs-live-repro`）。🔗 https://github.com/openclaw/openclaw/issues/72015

**待合并 PR 积压**：PR 侧 354 条待合并，其中多条 XL 且 `needs proof` / `waiting on author`（如 #120138、#134956、#134617、#168206、#132103、#167796），建议维护者优先处理带 `merge-risk: compatibility/session-state` 标签者的审阅排队。🔗 https://github.com/openclaw/openclaw/pull/120138 · https://github.com/openclaw/openclaw/pull/134956 · https://github.com/openclaw/openclaw/pull/132103

**关注建议**：#97616、#40001、#158390 三项均为 P0/P1 且无修复 PR、跨越数月，是当前对项目健康度影响最大且最需维护者介入的条目。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析
**数据日期：2026-10-10 · 覆盖 12 个项目**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**"规模扩张与运行稳定性脱节"**的临界阶段：头部的 OpenClaw 单日吞吐 1000 条 Issue/PR 更新，尾部多个项目当日零活动，活跃度呈极端分化。全生态今日**无一个新版本发布**，重心普遍从"新增能力"转向"修复长时运行下的资源泄漏、升级路径脆弱、多智能体编排不稳定"等工程化议题。跨项目最一致的技术压力来自三个方向：**上下文与成本治理、第三方 Provider/模型兼容适配、以及长期运行网关的资源收敛**。同时，多个项目出现对上游依赖的版本 pin 卡住能力天花板（NanoClaw、Moltis），以及维护者评审吞吐成为发布门槛（ZeroClaw、Hermes Agent）。总体判断：生态已越过"能否跑通"阶段，正集体进入"能否像生产基础设施一样可靠"的攻坚期。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/关） | PR 更新（待合并/合并关闭） | Release | 核心焦点 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（333/167） | 500（354/146） | 无 | P0 崩溃/资源泄漏 + SQLite 性能优化 | 极高活跃，积压 354 条 PR 为主要风险 |
| **ZeroClaw** | 25（18/7） | 50（46/4） | 无 | runtime 稳定性、Telegram 通道、A2A/RAG RFC | 活跃但吞吐比 11:1，v0.8.6 被门控 PR 卡住 |
| **Hermes Agent** | 50（47/3） | 50（42/8） | 无 | 跨平台安装/更新、网关服务身份、配置体验 | 活跃，评审吞吐为瓶颈，多处 P0/P2 无 fix PR |
| **CoPaw** | 18（7/11） | 21（10/11） | 无（beta 2.2.2b4） | Console 前端韧性、Responses API 兼容 | 关闭量 > 新开量，积压净缩减，**正向** |
| **LobsterAI** | 0 | 22（3/19） | 无 | OpenClaw 运行时健壮性、Office 能力补全 | 高合并日，清理 2 条 stale，无新 Bug 报告 |
| **NanoBot** | 8（2/6） | 74（34/40） | 无 | WebUI 打磨、发布流程契约 | 小范围 bug 收敛快，WebUI 体验持续改进 |
| **NanoClaw** | 2（2/0） | 7（5/2） | 无 | 容器运行时升级、依赖版本 pin | 稳定推进，**4 条 PR 积压近 2 个月** |
| **Moltis** | 4（4/0） | 1（1/0） | 无 | Discord 权限分类、gpt-6 适配、时间注入 | 中等，单一用户驱动，PR #1295 挂起 5 天 |
| **PicoClaw** | 4（2/2） | 7（1/6） | 无 | 依赖升级、浏览器自动化路线图 | 中等偏低，stale 标签大量出现，**功能停滞** |
| **NullClaw** | 1（1/0） | 1（1/0） | 无 | 会话上下文无界增长 | 低强度维护日，问题+修复配套完整 |
| **IronClaw** | 1（0/1） | 0 | 无 | DeepSeek 鉴权（已关闭，无 PR） | 低位，7 个月 Issue 零评论闭环 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | — | 无活动 |

> 数据说明：表中数字均来自各项目日报"今日速览"。OpenClaw 的 500+500 为本期唯一达到三位数量级的项目。

---

## 3. OpenClaw 在生态中的定位

**规模层面**：OpenClaw 单日 Issue 更新量（500）超过其余 11 个项目当日 Issue 更新总和（约 113 条），PR 更新量（500）亦为第二名 ZeroClaw（50）的 10 倍。它是本生态中**唯一具备"平台级"社区规模**的项目，其余项目多处于单一维护者或小团队驱动阶段。

**技术路线差异**：
- **架构深度**：OpenClaw 已进入 SQLite 读写路径级优化（#168093、#168318、#168316 等多组维护者 steipete 主导的性能 PR），其他项目仍停留在 provider 适配、UI 修复层面。
- **稳定性议题的复杂度**：OpenClaw 的 P0 问题涉及 SQLite WAL 膨胀至 2.8GB、632-agent 集群事件循环饥饿、插件临时目录不回收——这些是**大规模长运行**场景特有的问题，其他项目尚未触及该量级。
- **生态角色**：LobsterAI 今日 5 条 PR 直接修复"OpenClaw 运行时"相关问题（gateway 启动、配置恢复、计时器），证实 OpenClaw 已成为**被下游产品依赖的底层运行时**，其生态位类似"智能体领域的 Kubernetes"。

**社区规模对比信号**：OpenClaw 的热点 Issue #143524 单条 116 条评论、跨月持续跟踪；作为对比，Hermes Agent 最热 Issue 仅 21 条评论，其余项目热点多在 2–10 条评论区间。评论密度显示 OpenClaw 已形成**规模化生产者用户群**（Windows 单机、632-agent 集群、LXC 容器等多样部署形态）。

---

## 4. 共同关注的技术方向

### 方向一：上下文与成本治理（涉及 OpenClaw、CoPaw、ZeroClaw、NullClaw、Hermes Agent）
- **OpenClaw** #67419：bootstrap 文件每轮重新注入，浪费 20–30% token；#101929：token 估算超计 2.3–2.6x 误触发截断。
- **NullClaw** #1053/PR #1054：长会话上下文无界增长，自动压缩结果未写回 session store。
- **CoPaw** #7994：上下文达 91.7K/131.1K 仍不压缩。
- **ZeroClaw** PR #11578：请求无法装入窗口时说明"是什么占满了窗口"。
- **Hermes Agent** #67347：子代理模型配置体验割裂。

> **共性诉求**：上下文预算需要**可观测、可持久化、可预测**，而非停留在内存层优化。

### 方向二：第三方 Provider / 新模型兼容适配（涉及 NanoBot、Moltis、Hermes Agent、CoPaw、IronClaw）
- **Moltis** #1298：gpt-6-luna 搭配工具返回 HTTP 400。
- **NanoBot** #5898（GitHub Copilot 下 gpt-6）、#5896（需 `/responses` 线格式）、#6085（websearch 工具类型反序列化失败）、#6122（DeepSeek 思考参数矛盾）。
- **CoPaw** #8162/PR #8165：OpenAI Responses API 流式空响应。
- **Hermes Agent** #72171：Anthropic OAuth 计费通道错配。
- **IronClaw** #1047：DeepSeek 密钥配置 401。

> **共性诉求**：**provider 适配层**已成为新的 bug 高发区，模型能力组合（推理+工具）与传统 `/chat/completions` 路由的矛盾集中爆发。

### 方向三：长运行资源收敛（涉及 OpenClaw、ZeroClaw、Hermes Agent、NanoClaw、PicoClaw）
- **OpenClaw** #143524（WAL 膨胀）、#97616（僵尸进程）、#158390（临时目录不 GC）。
- **ZeroClaw** #11614（`Box::leak` 内存持续增长）、#11632（桌面端 GPU 持续重绘）。
- **Hermes Agent** #21485（profile 克隆 1.3G 技能树）。
- **PicoClaw** #3377（TLS 证书过期）。

> **共性诉求**：**清理机制缺失**是长期运行网关的系统性缺陷，跨项目同构。

### 方向四：升级/更新路径健壮性（涉及 OpenClaw、Hermes Agent、LobsterAI、NanoBot）
- **OpenClaw** #164113（LXC FICLONE EPERM）、#167771（更新被恢复锁阻塞）、#156986（update 卡住失控输出 233MB）。
- **Hermes Agent** #134185（macOS 更新失败）、#135179（Windows 500）、#127561（ASLR 崩溃）。
- **LobsterAI** #2831（Windows 升级后 gateway 无法启动）。
- **NanoBot** PR #5817（stable/self-update 流程讨论中）。

> **共性诉求**：用户对"每次更新都可能弄坏运行环境"的容忍度已接近临界。

### 方向五：多智能体编排可靠性（涉及 OpenClaw、CoPaw、Hermes Agent）
- **OpenClaw** #43367（并发 add/config 覆盖、会话锁失败）、#137710（子任务不唤醒父会话）。
- **CoPaw** #7678（spawn subAgent 全部超时，10 条评论）。
- **Hermes Agent** #67347（子代理模型配置）。

### 方向六：国际化（i18n）缺口（涉及 CoPaw）
- #8160（西班牙语界面）、#7809（工具审批卡片硬编码英文）——目前为单项目信号，但反映 Console 类产品的成熟度需求。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | CoPaw | LobsterAI | NanoBot | PicoClaw / NanoClaw |
|---|---|---|---|---|---|---|---|
| **功能侧重** | 通用智能体运行时 + 网关 | Rust runtime + 插件/WASM 通道 | 多通道网关 + 桌面端 | Console 前端 + AgentScope 生态 | 办公套件 + OpenClaw 封装 | WebUI + 多渠道 | 轻量嵌入 / 容器化 |
| **目标用户** | 生产级大规模部署者 | 插件开发者、自托管运维 | 跨平台桌面用户、多 profile 用户 | 中文优先 + Console 用户 | 办公协作用户 | WebUI 用户 | 边缘/移动/轻量场景 |
| **技术架构** | SQLite 持久化 + 大规模 agent 集群 | Rust + WASM 插件 | Python 网关 + launchd 服务 | 前后端分离 + 第三方 Provider | 基于 OpenClaw 的桌面应用 | 多 provider 适配层 | Go 为主（PicoClaw）/ 容器化（NanoClaw） |
| **差异化信号** | 唯一拥有下游依赖者（LobsterAI） | 唯一有 A2A/RAG RFC 架构讨论 | 唯一强调多 Home/Profile 语义 | 唯一有明确 i18n 需求批次 | 唯一聚焦 Office 文档编辑 | 唯一讨论 stable/preview 发布契约 | PicoClaw 有浏览器自动化路线图 |

**关键差异洞察**：
- **OpenClaw 与 LobsterAI 形成上下游**：后者今日 5 条 PR 直接修复 OpenClaw 运行时问题，构成"核心运行时 + 垂直应用"的早期生态分层。
- **ZeroClaw 是唯一在讨论协议层扩展（A2A、RAG）**的项目，技术野心最接近"智能体互联协议"。
- **Hermes Agent 的多 profile/多 Home 语义困惑（#93349、#11763、#21485）**是唯一围绕"单机多租户"形成议题簇的项目。
- **PicoClaw 是唯一发布 `stale` 标签大量出现的项目**，反映轻量项目在维护资源不足下的自动清理机制。

---

## 6. 社区热度与成熟度

### 第一梯队 · 平台级高速迭代
- **OpenClaw**：单日 1000 条更新，进入"性能优化 + 稳定性修复"双线并行。**特征**：高速迭代期，但 P0 崩溃类问题尚未收敛，积压 354 条 PR。

### 第二梯队 · 高活跃、质量巩固
- **ZeroClaw**：46 条待合并 PR（含多条 release-gate），v0.8.6 发布被卡。**特征**：质量巩固期，RFC 决策队列（#8692）超三月未清。
- **Hermes Agent**：50/50 更新，评审吞吐为瓶颈，多平台问题集中爆发。**特征**：跨平台适配期，长期高优 Issue（#11763 积压 6 个月）待闭环。
- **CoPaw**：关闭量 > 新开量，积压净缩减，修复闭环率高。**特征**：**健康度最优**，从"报错提示"转向"自动恢复+诊断"。

### 第三梯队 · 稳定推进、局部停滞
- **LobsterAI**：19 条 PR 集中合并，顺带清理 stale。**特征**：集中清理日，主攻 Office 与跨平台稳定性。
- **NanoBot**：74 条 PR 更新，WebUI 打磨为主。**特征**：体验优化期，发布流程尚在讨论。
- **NanoClaw**：4 条 PR 积压近 2 个月，#3569 投递失败 6 周无 fix PR。**特征**：稳定但**存量债务累积**。
- **Moltis**：单一用户驱动 4 条 Issue。**特征**：真实生产部署反馈，但 PR #1295 挂起。

### 第四梯队 · 低位/停滞
- **PicoClaw**：功能落地停滞（0 功能合并），stale 标签大量出现，高优先级路线图 #293 无实现 PR。
- **NullClaw**：单日 1 Issue + 1 PR，配套完整但无互动。
- **IronClaw**：仅 1 条 7 个月历史 Issue 关闭，零评论。
- **TinyClaw / ZeptoClaw**：今日无活动。

---

## 7. 值得关注的趋势信号

### 信号一：Provider 适配层正成为新的"技术债重灾区"
跨 6 个项目出现 provider/模型兼容 bug（gpt-6、Responses API、DeepSeek、Anthropic OAuth）。**对开发者的参考**：模型能力组合（推理 + 工具）与传统 API 路由的矛盾将成为长期维护成本，建议在架构层预留**线格式适配抽象**，而非逐个 provider 打补丁。

### 信号二：上下文治理从"内存优化"升级为"持久化语义问题"
NullClaw #1053 精准指出：压缩结果未写回 session store，导致会话恢复时压缩失效——这揭示了一个跨项目共性缺陷：**请求级上下文与持久化链路的脱节**。**参考价值**：上下文预算必须端到端可观测（写入、恢复、重放全链路一致）。

### 信号三：升级路径成为最尖锐的信任危机
OpenClaw、Hermes Agent、LobsterAI 三个项目今日均有"升级后完全不可用"级别的报告。**参考价值**：自托管智能体的**更新原子性**（失败可回滚、无半应用状态）将成为必要条件，而非加分项。

### 信号四：上游依赖版本 pin 正在成为能力天花板
NanoClaw（chat-adapter 落后 3 个版本、OneCLI 1.42.0 卡住 Google Docs 权限）、IronClaw、PicoClaw（anthropic-sdk-go 1.55.1→1.74.0 大跨度升级）均受影响。**参考价值**：**依赖管理策略**已是产品能力的一部分，长期 pin 会直接阻碍用户场景扩展。

### 信号五：维护者评审吞吐成为发布瓶颈
ZeroClaw（46:4 吞吐比）、Hermes Agent（42:8）、OpenClaw（354 条积压）共同显示：**社区贡献速度已超过维护者评审速度**。**参考价值**：`release-gate` / `clawsweeper:queueable-fix` 类标签机制的出现，反映项目在尝试用**机器辅助分流**缓解评审压力，可能成为生态标准实践。

### 信号六：多智能体编排的"可靠性鸿沟"
CoPaw #7678（spawn subAgent 全部超时，用户自称"技术我不懂"）与 OpenClaw #43367 共同显示：**普通用户对多智能体能力的容错预期极低**，而当前可靠性与宣传存在显著落差。**参考价值**：面向终端用户的多智能体产品需优先保证"失败可诊断、可恢复"，而非追求并发规模。

### 信号七：安全边界成为新议题
ZeroClaw 外部安全团队（DefuzeX/KUMA）主动提交 agent loop 中止问题、LobsterAI 的 MCP 命令注入加固 PR（#2590，挂起 39 天）、CoPaw 的 root RCE 报告（判定为 invalid 但需公开说明）——**智能体正在成为安全测试的目标对象**。**参考价值**：MCP stdio 命令、外部 URL 打开、工具参数序列化（ZeroClaw #11371）是当前最集中的攻击面。

---

**一句话决策参考**：若关注平台级稳定性实践，优先跟踪 OpenClaw 的 SQLite/资源治理路径；若关注跨项目共性缺陷的早期修复模式，CoPaw（前端韧性与 provider 兼容）与 NullClaw（上下文持久化）今日给出了最清晰的"问题—修复"闭环样本；若关注生态分层信号，LobsterAI 对 OpenClaw 的依赖修复证实了"核心运行时 + 垂直应用"的分层正在形成。

*（本报告所有数据均来自所提供各项目 2026-10-10 日报，未引入外部信息。）*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-10）

## 1. 今日速览

今日 NanoBot 无新版本发布，但协作活跃度处于高位：过去 24 小时内 74 条 PR 更新（34 条待合并，40 条已合并/关闭），8 条 Issue 更新（2 条新开/活跃，6 条已关闭）。关闭的 Issue 集中在具体的 provider 与 channel 兼容性缺陷（DeepSeek、WhatsApp、GitHub Copilot、websearch），显示维护者对小范围 bug 的响应与收敛速度较快。WebUI 与发布流程成为 PR 侧主线：多条 WebUI 修复/体验改进 PR 被关闭，同时关于 stable/preview 发布契约与自更新流程的 PR 仍在讨论中。新开 Issue（#6121、#6123）均为 Telegram channel 的功能性增强与分类修正，来自同一贡献者，属于细节打磨型需求。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 以 WebUI 稳定性与体验修复为主，整体向前推进集中在"打磨既有功能"而非"新增能力"：

- **[CLOSED] #6021 fix(webui): hide unavailable website preview actions** — 修复移动端 Safari 选择"Preview website"后对话被替换为不支持预览面板的问题，通过共享能力判断隐藏不可用动作。链接：HKUDS/nanobot PR #6021
- **[CLOSED] #5942 fix(webui): provide iOS PWA top-edge color surface** — 修复已安装 iOS PWA 顶部控件不清晰的问题（对应 #5772），在 React root 外增加非交互的视口固定色彩层。链接：HKUDS/nanobot PR #5942
- **[CLOSED] #5941 feat(webui): connect to existing remote nanobot instances** — 允许本地 WebUI 连接服务器上已运行的 nanobot 实例，免去端口转发或独立启动器；会话、模型配置、channel 与工具仍保留在服务器端。链接：HKUDS/nanobot PR #5941
- **[CLOSED] #5836 fix(webui): make OAuth reauthentication actionable** — 区分 OAuth 凭据被拒与临时目录失败：确认授权失败时隐藏模型搜索并提供"Sign in again"，网络/限流失败时保留缓存选项。链接：HKUDS/nanobot PR #5836
- **[CLOSED] #6144 fix(webui): clarify Chinese temporary chat tooltip** — 中文临时聊天提示文案改为"关闭页面"并明确模型 provider，保持简繁各 20 字内。链接：HKUDS/nanobot PR #6144

发布流程方向仍处于开放讨论状态，尚未落地：**[OPEN] #6146 docs: define stable and preview release rollout**（定义 stable/preview 发布契约，与 #5817 分离）与 **[OPEN] #5817 [conflict] feat: add stable and source self-update flows**（`nanobot update` 稳定版自更新、`--dev` 源码更新、SHA-256 校验引导）。链接：HKUDS/nanobot PR #6146、HKUDS/nanobot PR #5817

> 说明：PR 列表未提供评论数（显示为 undefined），故不对"评论最多"作推断。

## 4. 社区热点

受数据所限（PR 评论数缺失、Issue 👍 均为 0），热点按评论数与时效性识别：

- **#5898 [CLOSED] gpt-6 model series through Github Copilot** — 4 条评论，为今日评论最多的 Issue。用户 gqcao 报告 v0.3.5 通过 GitHub Copilot 使用 OpenAI 6 系列模型失败，报错为 provider 请求失败。该 Issue 自 2026-09-24 创建、10-09 更新后关闭。诉求：第三方 provider 网关与新模型系列的兼容性需要跟上。链接：HKUDS/nanobot Issue #5898
- **#1739 [CLOSED] Windows 多实例 NANOBOT_HOME 冲突** — 2 条评论，且创建于 2026-03-08、直至 2026-10-10 才更新关闭，属于长周期 Issue。用户 tobicon 在 Windows Server 2019/Windows 10 上尝试用 `NANOBOT_HOME` 启动两个实例，环境变量被忽略导致 Telegram 冲突。诉求：Windows 下的多实例隔离与配置生效机制。链接：HKUDS/nanobot Issue #1739

## 5. Bug 与稳定性

按影响面排序，今日相关 Issue 均已关闭：

1. **#6085 [CLOSED] 开启 deepseek websearch 导致所有 LLM 调用不可用**（严重）— 任意 channel 的每条消息都返回错误：`tools[23].type: unknown variant 'web_search', expected 'function'`，即工具类型反序列化失败，属于全局性阻断。创建 2026-10-06，更新 2026-10-09 关闭。链接：HKUDS/nanobot Issue #6085
2. **#5898 [CLOSED] GitHub Copilot 下 gpt-6 系列不可用**（高）— v0.3.5 报 provider 请求失败。链接：HKUDS/nanobot Issue #5898
3. **#6120 [CLOSED] WhatsApp 重放过滤器永不触发**（中）— neonize 的 `Timestamp` 为毫秒，却与秒级的 `time.time()` 比较，导致丢弃旧消息的重放过滤逻辑失效。链接：HKUDS/nanobot Issue #6120
4. **#6122 [CLOSED] DeepSeek `reasoning_effort="minimal"` 发送互相矛盾的思考控制**（中）— 同时发送 `reasoning_effort="minimal"` 与 `thinking.type="disabled"`。链接：HKUDS/nanobot Issue #6122
5. **#1739 [CLOSED] Windows NANOBOT_HOME 被忽略导致实例冲突**（中）— 见上节。链接：HKUDS/nanobot Issue #1739

> 数据中未提供与上述 Issue 关联的 fix PR 编号，故不标注修复 PR；仅 #1739、#6122 等显示 Issue 本身已关闭。

## 6. 功能请求与路线图信号

- **Telegram 相册发送（#6121，OPEN）** — 代理一次返回多张图片时，当前逐张调用 `send_photo`，Telegram 显示为多条独立消息；建议对兼容的出站媒体列表使用 `sendMediaGroup`。链接：HKUDS/nanobot Issue #6121
- **Telegram 远程媒体 URL 按路径扩展名分类（#6123，OPEN）** — 形如 `...card.jpg?width=672` 的合法图片 URL 会被推断为 `jpg?width=672`，导致类型判断错误；应按路径扩展名而非完整 URL 字符串判断。链接：HKUDS/nanobot Issue #6123
- **OpenAI Responses API 支持（#5896，CLOSED）** — `muse-spark-*-contributor` 在 `opencode.ai/zen/go/v1` 需要 `/responses` 线格式，网关的 `/chat/completions` 路由对其返回 500；该 Issue 带 `good first issue`、`priority: p2` 标签。链接：HKUDS/nanobot Issue #5896

结合已有 PR 判断：Telegram 两项增强尚处 Issue 阶段，未见对应 PR；而 provider 侧与发布流程侧已有在途 PR——**#6145 feat(webui): improve model and provider settings UX**（可搜索模型字段、骨架屏、缓存与重试、焦点管理）、**#6068 FXMacroData MCP preset**、**#6014 Keenable MCP preset**（均为 WebUI 内可选的 MCP 预设，后者无需 API key）、**#5930 feat(feishu): 允许群内机器人间消息（allowlist + 跳数上限）**。这些更可能先于 Telegram 增强进入下一版本。链接：HKUDS/nanobot PR #6145、HKUDS/nanobot PR #6068、HKUDS/nanobot PR #6014、HKUDS/nanobot PR #5930

## 7. 用户反馈摘要

- **第三方 provider 与新模型的兼容性是核心痛点**：GitHub Copilot 下的 gpt-6 系列（#5898）、opencode 网关下需要 Responses 线格式的模型（#5896）、DeepSeek 的思考控制参数（#6122）与 websearch 工具类型（#6085）——问题集中在多 provider 适配层，而非核心 agent 逻辑。
- **跨平台运行环境仍需打磨**：Windows 用户在多实例场景下遭遇 `NANOBOT_HOME` 被忽略及 Telegram 冲突（#1739），该 Issue 从 3 月延续至 10 月，反映 Windows 长尾问题修复周期偏长。
- **消息渠道的边界情况影响体验**：WhatsApp 重放过滤因毫秒/秒单位不一致而失效（#6120）、Telegram 多图被拆成多条消息（#6121）、带查询参数的图片 URL 类型误判（#6123），均为渠道层细节，但直接可见于用户体感。
- **WebUI 体验是被积极改进的方向**：从 OAuth 重认证可操作性（#5836）、iOS PWA 顶栏可见性（#5942）、到链接预览不可用时的降级（#6021），修复均围绕"界面在异常状态下不误导用户"。

## 8. 待处理积压

以下长期开放项建议维护者优先分流：

- **[OPEN] #5817 feat: add stable and source self-update flows**（创建 2026-09-19，已带 `conflict` 标记）— 自更新流程是发布体系的关键拼图，与其配套的 #6146 发布契约文档同日更新，建议一并决策。链接：HKUDS/nanobot PR #5817
- **[OPEN] #5537 feat(my): persist session focus across turns**（创建 2026-08-25）— 修复 #3292，为 `my` 工具增加可跨轮次与进程重启的会话级 `focus`。链接：HKUDS/nanobot PR #5537
- **[OPEN] #5405 feat(skills): support manual-only invocation**（创建 2026-08-16）— 为部署/发布类有副作用技能提供仅用户手动触发模式，避免被自动预加载或广告给模型。链接：HKUDS/nanobot PR #5405
- **[OPEN] #5727 docs(webui): explain headless login secret**（创建 2026-09-10）— 说明 WebUI 引导密钥的存储位置及无头服务器下的使用方式。链接：HKUDS/nanobot PR #5727
- **[OPEN] #6091 feat(apps): add managed computer use with Cua Driver**（创建 2026-10-07）— 已于 2026-10-10 按维护者要求**暂停并保持 draft**，明确"恢复工作且检查完成前不要合并或发布"。链接：HKUDS/nanobot PR #6091

> 另注：#5930、#6068、#5727、#5537、#5405 均带 `conflict` 标记，需先解决冲突才能推进评审。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-10-10

## 1. 今日速览

项目今日维持高活跃度：过去 24 小时共有 50 条 Issue 更新（新开/活跃 47，关闭 3）与 50 条 PR 更新（待合并 42，合并/关闭 8），无新版本发布。待合并 PR 积压明显高于同期合并量，代码评审吞吐可能是当前瓶颈。Bug 类工单占据主流，跨平台问题（Windows、macOS、Debian）与网关/CLI 稳定性是集中爆发点。社区讨论热度集中在 API 权限故障、网关服务身份冲突与配置体验三类议题上。整体健康度：活跃但维护压力偏大，尤其体现在长期未闭环的高优先级 Issue 上。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭的 PR 共 8 条，其中有代表性的包括：

- **PR #127960（已关闭）** — 修复飞书卡片动作回调把回调 id 当作回复目标的问题，避免消息下发到错误目标。链接: NousResearch/hermes-agent PR #127960
- **PR #125568（已关闭）** — 修复更新逻辑在 uid 伪装沙箱（如 Termux/Android 上的 PRoot）中将自身文件误判为外部所有者的问题。链接: NousResearch/hermes-agent PR #125568
- **PR #125561（已关闭，标记 duplicate）** — 转发 `UV_LINK_MODE`，使沙箱化安装可强制 uv 使用 copy 模式。链接: NousResearch/hermes-agent PR #125561
- **PR #134185（已关闭）** — 修复 macOS 上经由 Desktop 按钮触发更新时因进程 pid 判定错误而持续失败的问题（该问题曾导致每次更新以 exit 2 结束）。链接: NousResearch/hermes-agent PR #134185
- **Issue #88618（已关闭）** — CLI `hermes model` 选择器遗漏 `background_review` 槽位的问题已闭环。链接: NousResearch/hermes-agent Issue #88618

整体看，今日推进集中在**安装/更新路径的健壮性**（沙箱、macOS 更新、uv 链接模式）与**平台消息投递正确性**上，属于稳定性加固型推进，而非新功能落地。

## 4. 社区热点

- **Issue #131859**（21 条评论，今日讨论最热）— 通过 API 创建 PR 时报 CreatePullRequest 权限错误，仅影响特定账号，issue 创建与 fork PR 仍正常。用户提供了两次可复现的时间戳与命令行细节。链接: NousResearch/hermes-agent Issue #131859
- **Issue #67347**（12 条评论，1 👍）— 桌面端与 Dashboard 高级设置中缺少"子代理模型 + Provider"的引导式选择器，`delegation.model` 等字段配置体验割裂。链接: NousResearch/hermes-agent Issue #67347
- **Issue #93349**（8 条评论）— 网关服务身份在不同 `HERMES_HOME` 根目录间冲突；macOS 上同名 profile 解析到同一 launchd label 与 plist 路径。链接: NousResearch/hermes-agent Issue #93349
- **Issue #135181**（5 条评论）— 停止/启动系统上下文 profile 网关时输出难以理解的日志，并伴随"未授权更新活动"。链接: NousResearch/hermes-agent Issue #135181
- **Issue #136071**（5 条评论，当日新开）— Desktop 为外部进程型 Antigravity 插件生成无效的 `agy auth add ...` 登录命令。链接: NousResearch/hermes-agent Issue #136071

背后诉求可归纳为三点：**配置发现性差**（模型/Provider/Profile 相关字段散落在 YAML，UI 不可见）、**多 Home / 多 Profile 场景语义不清晰**（服务身份、路径解析冲突）、**错误信息不可读**，用户被迫把日志原文搬进 Issue 才能让维护者理解问题。

## 5. Bug 与稳定性

按严重程度排列：

**P0**
- **Issue #135997**（今日新开）— `gateway/config.py` 中未加引号的前向引用导致 CPython < 3.14 无法导入该模块，`Platform._add_pseudo_member` 注解在类体阶段即抛 `NameError`。影响范围广（所有 < 3.14 环境）。暂无 fix PR。链接: NousResearch/hermes-agent Issue #135997

**P2**
- **Issue #131859** — API 创建 PR 权限故障，账号级复现，21 条评论仍在推进中。无 fix PR。
- **Issue #127561** — Windows 强制 ASLR 环境下，每次 `hermes update` 后终端工具以 `0xC0000142` 崩溃，根因是 staged store 的 Git Bash 优先于 `HERMES_GIT_BASH_PATH`，且健康检查仅为内置检查。无 fix PR。
- **Issue #133659** — Windows/Edge 真实 profile 快照启动后处于登出状态（应用绑定 cookie 无法解密），并存在 agent-browser CDP 附加竞态（10060）。无 fix PR。
- **Issue #132096** — `pre_tool_call` shell hook 即使配置 `fail_closed: false` 且带 matcher，单次超时后 60 秒内仍阻断所有工具调用（dispatcher 包装层 fail closed，忽略 matcher）。无 fix PR。
- **Issue #72171** — Anthropic OAuth 下系统提示形状导致订阅请求被路由进按量的 "extra usage" 通道而非订阅配额。标记 needs-decision，无 fix PR。
- **Issue #135245** — 本地 STT 全面失效：faster-whisper 1.2.1 向 PyAV 19 传递已被移除的 `metadata_errors` 参数。无 fix PR。
- **Issue #11763** — 网关模式（WeChat/Telegram/Discord）下 `AGENTS.md` 未被加载，因 `_load_agents_md()` 仅检查 `cwd/AGENTS.md`。标记 needs-decision，无 fix PR。

**P3**
- **Issue #47977** — NVIDIA NIM 精选模型列表过期：3 个错误 ID、缺失 20+ 模型（`hermes_cli/models.py` 273–287 行）。
- **Issue #135659** — macOS 上 `scripts/run_tests.sh` 失败（浅克隆后运行）。
- **Issue #136049**（今日新开）— 建议将瞬态 CPA 认证失败在模型回退前视为可重试。
- **Issue #135179** — Windows 下 `POST /api/hermes/update` 返回 500 `[WinError 5]`（job object 无 breakaway）。
- **Issue #21485** — profile 克隆会把 GStack 技能树整体复制进每个 profile（单个副本约 1.3G）。
- **Issue #129827** — `hermes profile list` 表头未对齐，且不显示 profile 网关是否以 `user` 身份运行。

**对应修复 PR（已存在，待合并）**
- PR #136137 — 让终端执行自行管理前台超时，避免被通用 420 秒看门狗误杀（对应终端超时类问题）。链接: NousResearch/hermes-agent PR #136137
- PR #136148 — 修复 kanban 中过期配额戳把卡片困在 `blocker_auth`。链接: NousResearch/hermes-agent PR #136148
- PR #132577 — 将 dashboard basic-auth 密码告警限定到解析进程，消除无关进程日志噪音。链接: NousResearch/hermes-agent PR #132577
- PR #118089 — 在 Markdown 平台（Telegram）为 verbose 工具进度参数做转义围栏。链接: NousResearch/hermes-agent PR #118089
- PR #136141 — 折叠 vendor 前缀分隔符，使带厂商前缀的模型 id 可被搜索到。链接: NousResearch/hermes-agent PR #136141
- PR #136140 — 为每任务维护一个链接到属主存储的 HERMES_HOME。链接: NousResearch/hermes-agent PR #136140

## 6. 功能请求与路线图信号

- **子代理模型引导选择器**（Issue #67347，12 条评论、1 👍）— 需求成熟且讨论充分，属于 UI/配置层改进，落地成本相对可控，具备进入下个版本的可能。
- **`hermes profile list` 格式与信息增强**（Issue #129827）— 小范围 CLI 改进，与今日大量 profile/网关相关工单形成主题聚合。
- **CPA 认证失败可重试**（Issue #136049，当日新开）— 与既有模型回退逻辑交互，涉及 needs-decision 类判断，短期可能仍停留在设计讨论。
- **配套技能图谱插件**（PR #50057，长期开放）— 通过 `agent.skill_graph_mode: true` 启用动态技能发现，属较大体量特性，标记多项风险 sweeper，短期落地不确定。
- **hermes-verifier 插件**（PR #135996，今日新开）— 独立评审模型读取主代理回合增量并反馈发现，属插件目录扩展。
- **Desktop 模型价格单位选择（每 1M / 每 1K）**（PR #136138，今日新开）— 明确标注 stacked on #136134，仍为草稿，需前置 PR 落地。

## 7. 用户反馈摘要

- **真实痛点**
  - 更新路径反复出问题：macOS Desktop 更新失败（#134185 已修）、Windows 更新 500（#135179）、Windows 强制 ASLR 下终端崩溃（#127561）——用户对"每次更新都可能弄坏运行环境"的容忍度在下降。
  - 配置不可见性：`background_review`、`delegation.model` 等字段只能改 YAML，UI 不暴露（#88618 已修、#67347 待处理）。
  - 多 profile / 多 home 场景语义混乱：服务身份冲突（#93349）、profile 克隆体积膨胀至 1.3G（#21485）、网关模式 AGENTS.md 不生效（#11763）。
- **使用场景**：Debian/Linux 桌面与服务端（#129827、#135181）、macOS 开发机（#135659、#134185）、Windows 11 + Edge（#133659、#135179）、Termux/Android 沙箱（#125568），以及 WeChat/Telegram/Discord/飞书网关部署。
- **不满意集中点**：错误信息不可读（#135181 "prints incomprehensible messages"）、日志噪音（#132577 描述的无关进程告警）、以及插件/provider 集成细节错误（#136071 生成无效登录命令）。
- **满意点**：本轮数据中未见明确的正向反馈被收录，暂无相关依据可总结。

## 8. 待处理积压

以下 Issue 创建时间早、仍处于开放状态且近期活跃，建议维护者优先关注：

- **Issue #11763**（创建于 2026-04-17，标记 needs-decision）— AGENTS.md 在网关模式不加载，跨平台行为不一致，已积压近 6 个月。链接: NousResearch/hermes-agent Issue #11763
- **Issue #21485**（创建于 2026-05-07）— profile 克隆重复复制 GStack 技能树，占用约 1.3G/份。链接: NousResearch/hermes-agent Issue #21485
- **Issue #47977**（创建于 2026-06-17）— NVIDIA NIM 模型列表过期，含错误 ID 与 20+ 缺失模型。链接: NousResearch/hermes-agent Issue #47977
- **Issue #50057 / PR #50057**（创建于 2026-06-21）— skill-graph 插件与配套配置，长期开放，带多项风险标记。链接: NousResearch/hermes-agent PR #50057
- **Issue #72171**（创建于 2026-07-26，标记 needs-decision）— Anthropic OAuth 计费通道错配，直接影响订阅用户成本。链接: NousResearch/hermes-agent Issue #72171
- **Issue #67347**（创建于 2026-07-19）— 子代理模型引导选择器，讨论充分但仍未落地。链接: NousResearch/hermes-agent Issue #67347
- **Issue #93349**（创建于 2026-08-24）— 网关服务身份跨 HERMES_HOME 冲突。链接: NousResearch/hermes-agent Issue #93349

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-10

## 1. 今日速览

今日 PicoClaw 无新版本发布，活动集中在 Issue 与 PR 的清理与推进。过去 24 小时共 4 条 Issue 更新（2 开 / 2 关）、7 条 PR 更新（1 待合并 / 6 已关闭），其中 5 条关闭 PR 为 Dependabot 依赖升级。合并/关闭的 PR 以依赖维护为主，功能层面仅有 #3421（HTTP agent 服务）被关闭。高优先级路线图 Issue #293（自主浏览器操作）保持活跃，8 条评论、8 个 👍，是社区关注度最高的议题。整体活跃度中等偏低，以维护性工作为主，缺乏重量级功能落地。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日无功能类 PR 合并进主线，进展主要体现在关闭与依赖维护：

- **#3421 [CLOSED] feat(apiserve): serve PicoClaw agents over HTTP for internal services**（作者 hms58，创建/更新均 2026-10-10）
  提供独立服务，让其他内部服务通过单次 HTTP 调用驱动 agent，`/v1` 下所有端点使用 Bearer API key 认证（含 `POST /v...`），不触碰现有 channel、gateway 或 config 代码。该 PR 当日创建当日关闭，未合并入主线，功能未实际落地。
  链接: sipeed/picoclaw PR #3421
- **依赖升级（5 条，均已关闭）**：`golang.org/x/crypto` 0.53.0→0.57.0（#3389）、`modelcontextprotocol/go-sdk` 1.6.1→1.8.0（#3388）、`anthropics/anthropic-sdk-go` 1.55.1→1.74.0（#3387）、`maunium.net/go/mautrix` 0.27.0→0.31.0（#3386）、`line/line-bot-sdk-go/v8` 8.20.1→8.22.0（#3385）。均为 dependabot 自动提交，维护了 LLM SDK、MCP SDK 及各 IM 平台 SDK 的版本新鲜度，其中 anthropic-sdk-go 跨度为 1.55.1→1.74.0，属较大版本跳跃。

综合来看，今日项目在功能维度基本原地踏步，进展限于依赖供应链维护。

## 4. 社区热点

- **#293 [OPEN] [priority: high, type: roadmap] Feature: Autonomous Browser Operations**（作者 Zepan，创建 2026-02-16，更新 2026-10-10，评论 8，👍 8）
  诉求：扩展 PicoClaw 的 web 操作能力，实现浏览器自动化——由 AI 直接导航页面、提取数据并执行操作。作为唯一带 `priority: high` 与 `type: roadmap` 标签的开放 Issue，且创建已近 8 个月仍在更新，反映社区对 agent 接入真实网页的强烈期待。
  链接: sipeed/picoclaw Issue #293
- **#3415 [OPEN] [stale] [Feature] 支持反向代理（Nginx 挂载到 /pico 路径）**（作者 altman08，评论 1）
  诉求：在同一域名下用 Nginx 将 Web Console 挂载到 `/pico/`，页面、登录、API、静态资源、聊天 WebSocket 与附件请求均需保持该前缀；当前前后端部分地址写死根路径（`/api/...`、`/launcher-login`、`/pico/ws`），仅靠 Nginx 转发无法解决。
  链接: sipeed/picoclaw Issue #3415
- **#3377 [CLOSED] [stale] [CRITICAL] TLS 证书过期**，4 条评论、2 个 👍，虽已关闭但讨论量居前（详见第 5 节）。
  链接: sipeed/picoclaw Issue #3377

## 5. Bug 与稳定性

按严重程度排列：

1. **[CRITICAL] #3377 — picoclaw.io TLS 证书于 2026-09-10 过期，站点对所有浏览器不可用**（作者 dimonb，创建 2026-09-12，更新 2026-10-09，评论 4，👍 2，状态 CLOSED）
   `https://picoclaw.io`（README 链接的项目主页）证书于 2026-09-10 23:59:59 UTC 过期，所有浏览器与 TLS 客户端拒绝连接，站点实际下线。已关闭，数据中未见关联 fix PR，需确认修复方式。
   链接: sipeed/picoclaw Issue #3377
2. **[BUG] #3391 — Pico channel 将多行输入拆分为多条消息**（作者 chentianxiong123，创建 2026-09-24，更新 2026-10-09，评论 2，状态 CLOSED）
   在 pico 客户端（移动端 TUI）粘贴多行文本（如诗歌、代码块）时，picoclaw 按换行符自动切分，每行作为独立消息发送，破坏内容完整性。已关闭，数据中未见 fix PR 编号。
   链接: sipeed/picoclaw Issue #3391

注：两条 Issue 均带 `stale` 标签，提示长期无维护者响应后才被处理。

## 6. 功能请求与路线图信号

- **浏览器自动化（#293）**：路线图级功能，社区呼声最高（8 👍），但数据中无对应实现 PR，短期落地存疑。
- **反向代理 / 子路径部署（#3415）**：需求具体、可验证（前缀下的页面、登录、API、WebSocket、附件），属于部署形态改进，工程边界清晰，具备进入下一版本候选的条件。
- **HTTP 驱动 agent 的内部服务接口（#3421）**：虽以 CLOSED 结束，但其“用一次 HTTP 调用驱动 agent、仅 `/v1` + Bearer 认证、不改动现有 channel/gateway/config”的设计，与 #3415 的集成化诉求方向一致，可作为对外服务化能力的参考。
- **Agent 单轮墙钟时间预算（#3414，OPEN，作者 racso2609）**：新增可选 `agents.defaults.turn_time_budget_seconds`（默认 `0` 为禁用），超预算时要求 agent 停止调度新工具并给出简明总结。该 PR 仍待合并，是今日唯一开放的代码贡献，具备落地可能。
  链接: sipeed/picoclaw PR #3414

## 7. 用户反馈摘要

- **部署灵活性不足**：用户希望以反向代理方式将服务挂载到 `/pico/`，避免占用域名根路径；痛点根源是前后端硬编码根路径（`/api/...`、`/launcher-login`、`/pico/ws`），Nginx 层无法单独解决（#3415）。
- **移动端输入体验受损**：多行文本（诗歌、代码块）被按换行拆分成多条消息，影响 pico 移动 TUI 的可用性（#3391）。
- **项目站点可达性问题引发关注**：证书过期导致站点对所有浏览器不可用，获得 2 个 👍 与 4 条评论，反映用户对项目对外入口可用性的敏感度（#3377）。
- **对网页自动化能力有明确期待**：8 个 👍 集中在 #293，说明用户希望 agent 能直接操作网站而非停留于对话（#293）。

## 8. 待处理积压

- **#293（浏览器自动化，2026-02-16 创建，至今约 8 个月）**：`priority: high` + `type: roadmap`，长期开放且持续有讨论，但无实现 PR，属最需要维护者给出明确排期或结论的议题。
- **#3415（反向代理支持，2026-10-02 创建）**：已带 `stale` 标签但仅 1 条评论，尚未有维护者回应。
- **#3414（turn time budget PR，2026-10-01 创建）**：唯一待合并的功能 PR，同样已被标记 `stale`，存在被自动关闭的风险，建议优先评审。
- **注**：多条 Issue/PR 被标注 `stale`，且 5 条依赖 PR 均在 2026-09-24 提交、2026-10-09 才集中关闭，提示仓库存在响应延迟问题。

---

**项目健康度小结**：供应链维护正常，依赖升级与清理在推进；但功能落地几近停滞（0 新版本、0 功能合并），高优先级路线图 Issue 长期无实现，且 stale 标签大量出现，建议维护者在 #293、#3414、#3415 上给出明确处置意见。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-10

## 1. 今日速览

过去 24 小时 NanoClaw 保持中等偏活跃节奏：共 9 条 Issues/PRs 发生更新，无新版本发布。PR 侧动作更密集（7 条），其中 5 条待合并、2 条已关闭；Issue 侧新增/活跃 2 条、关闭 0 条，说明社区在持续报告问题但当日没有 Issue 收敛。当日最显著的技术动作是容器侧工具链升级（Claude Code / Agent SDK / Codex）被快速关闭处理，以及两条外部依赖/能力适配类 Issue 浮出水面。整体健康度：**稳定推进，但积压的存量 PR 需要维护者注意力**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有 2 条 PR 被合并/关闭：

- **PR #4069 [CLOSED] `chore(container): bump Claude Code to 2.1.296, the Agent SDK to 0.3.296 and Codex to 0.162.1`**
  https://github.com/nanocoai/nanoclaw/pull/4069
  作者 gavrielc（core-team），创建与更新均为 2026-10-10，属当日快速闭环。摘要显示容器镜像将 agent 运行时推进到最新版本，并使 Claude Haiku 5.5 成为默认 Haiku 模型。该 PR 覆盖 `area/agent-runner`、`area/containers`、`area/providers`、`area/skills` 多个模块，是今日对项目运行时能力影响最直接的变更。

- **PR #4066 [CLOSED] `build(deps): bump source-map-js from 1.2.1 to 1.2.2`**
  https://github.com/nanocoai/nanoclaw/pull/4066
  由 dependabot 提交的常规依赖升级，属维护性变更，无功能影响。

**整体推进量评估**：当日进展集中在“运行时版本对齐”这一条主线，功能与修复层面主要由存量待合并 PR 承载，尚未落地。

## 4. 社区热点

今日讨论热度整体偏低，评论数最高的两条均为 Issue（各 2 条和 1 条评论），无 PR 获得评论或点赞：

- **Issue #3569 [OPEN] [kind/bug] Telegram: URLs with an odd number of underscores never deliver（评论 2）**
  https://github.com/nanocoai/nanoclaw/issues/3569
  由 shachartal 于 2026-08-27 创建，2026-10-09 仍活跃，是当前讨论最集中的议题。其诉求指向一个长期未解的供应链问题：所有运行 Telegram 的 NanoClaw 安装都固定在 `@chat-adapter/telegram@4.29.0`，该版本对整条消息中未转义 MarkdownV2 标记数量为奇数的消息**永久投递失败**，而上游已修复。用户的潜在诉求不仅是修 bug，更是希望 NanoClaw 摆脱对过旧适配器版本的长期 pin。

- **Issue #4068 [OPEN] [capability] Support OneCLI 2.x gateway（评论 1）**
  https://github.com/nanocoai/nanoclaw/issues/4068
  由 Philabuster 于 2026-10-09 当日提出，指出 `main` 分支仍将 OneCLI 网关固定在 1.42.0（`.claude/skills/add-onecli/versions.json`），导致 Google Docs 连接只请求 `drive.fi...`（摘要截断）范围的权限。诉求明确：升级到 OneCLI 2.x 以获取 Google Docs 编辑所需的 scope。

**背后信号**：两条热点都指向同一模式——**NanoClaw 对上游依赖的固定版本策略正在成为能力天花板**，分别卡住了 Telegram 消息投递和 Google Docs 编辑权限。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| **高** | **Issue #3569** Telegram 消息在整条消息含奇数个未转义 MarkdownV2 标记（`_ * ~ \``）时**永久无法投递**，影响所有 Telegram 安装 | OPEN，自 2026-08-27 起已持续约 6 周，2026-10-09 仍有更新 | 未见对应 fix PR；根因被定位为 chat-adapter 固定版本落后上游 3 个版本 |
| **中** | **PR #3276 所修复的问题**（关联 Issue #3206）：`src/session-manager.ts` 的 `extractAttachmentFiles` 以 `isSafeAttachmentName(messageId)` 作为入站附件暂存的门禁，任何含 `/` 或 `\` 的 messageId 被拒；Google Chat 的消息 ID 本身就是资源路径（`spaces/<spaces...>`），因此被误伤 | 修复 PR OPEN，自 2026-08-16 起未合并 | 有（PR #3276，待合并） |

https://github.com/nanocoai/nanoclaw/issues/3569
https://github.com/nanocoai/nanoclaw/pull/3276

## 6. 功能请求与路线图信号

- **支持 OneCLI 2.x 网关（Issue #4068，2026-10-09 新开）**
  https://github.com/nanocoai/nanoclaw/issues/4068
  驱动力是 Google Docs 编辑 scope 缺失。目前**无对应 PR**，且涉及 `.claude/skills/add-onecli/versions.json` 中的版本 pin 变更，属于影响面较明确的能力升级。综合其“新开 + 有明确阻塞场景 + 改动点单一”的特征，是相对容易被纳入下一版本的功能请求。

- **容器运行时版本升级（PR #4069）已关闭**
  https://github.com/nanocoai/nanoclaw/pull/4069
  摘要提到 Claude Haiku 5.5 成为默认 Haiku 模型，属已落地的能力变化，可作为后续版本的基线预期。

- **自动丢弃自动化发送者（PR #3446，关联 Issue #3235）**
  https://github.com/nanocoai/nanoclaw/pull/3446
  提出让 Discord `author.bot`/`webhook_id`、Slack `bot_id`、Telegram `from.is_bot` 等 bot/webhook 发送者不再触发 `request_approval` 未知发送者门禁——目前这些机器人会像人类一样触发审批卡，而发送者本身永远无法完成审批，形成死循环。属体验优化型功能，是否纳入下一版本取决于维护者排期。

- **Telegram 频道身份信任（PR #3450，关联 Issue #2991）**
  https://github.com/nanocoai/nanoclaw/pull/3450
  针对 Telegram 广播频道匿名发帖（Bot API 通过 `sender_chat` 归属频道自身、无 `from` 字段）在 `sender_scope` 门禁下的身份判定问题。

## 7. 用户反馈摘要

从今日可见的 Issue 评论与摘要中可提炼：

- **痛点一：消息投递静默失败。** Issue #3569 描述的是“永远无法投递”（never deliver），且根因是整条消息标记奇偶性这种**非直观的触发条件**，对用户而言难排查，属于高挫败感类型的问题。该 Issue 自 8 月底延续至今，反映出修复滞后带来的持续不满。
- **痛点二：审批流程被自动化发送者无效触发。** PR #3446 的摘要指出，bot/webhook 发送者“produces an approval card the sender could never...（完成）”，即审批卡对机器人发送者构成无法闭环的死路。
- **痛点三：平台集成能力受版本 pin 限制。** Issue #4068 表明用户实际使用场景已延伸到 Google Docs 编辑，但被 OneCLI 1.42.0 的 scope 限制卡住。
- **维护者侧信号：** PR #3275 摘要提到这是“clean re-attempt after #2356 was closed by a maintainer（"Something got..."）”，暗示此前有维护者以含糊理由关闭过同类 PR，贡献者需要重复投入——这是社区协作体验上的负面信号。
  https://github.com/nanocoai/nanoclaw/pull/3275

## 8. 待处理积压

以下 OPEN PR 均已积压近 2 个月（创建于 2026-08-16 至 08-22），且在 2026-10-10 同日被批量更新，提示可能存在统一清理动作或长期无人认领：

| PR | 标题 | 创建日期 | 积压时长 | 链接 |
|---|---|---|---|---|
| #3275 | fix(setup): install ncl symlink on upgrade path (#2355) | 2026-08-16 | ~55 天 | https://github.com/nanocoai/nanoclaw/pull/3275 |
| #3276 | Sanitize path-separator message IDs for attachment staging (#3206) | 2026-08-16 | ~55 天 | https://github.com/nanocoai/nanoclaw/pull/3276 |
| #3446 | Auto-drop automated senders in the unknown-sender gate (#3235) | 2026-08-22 | ~49 天 | https://github.com/nanocoai/nanoclaw/pull/3446 |
| #3450 | Telegram: trust channel's own identity in sender_scope gate (#2991) | 2026-08-22 | ~49 天 | https://github.com/nanocoai/nanoclaw/pull/3450 |

Issue 侧同样存在长期未收敛项：

- **Issue #3569**（Telegram 投递失败）已开放约 6 周且无 fix PR，是当前**最值得维护者优先响应**的稳定性问题。
  https://github.com/nanocoai/nanoclaw/issues/3569

> 说明：以上内容完全基于本次提供的 GitHub 数据；数据中未出现的版本号、维护者回复原文、Issue #3206/#3235/#2991 正文等信息均未作补充。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-10-10）

## 1. 今日速览

今日 NullClaw 共产生 1 条新 Issue 与 1 条新 PR，数量均为 1，且二者由同一作者 vernonstinebaker 提出，属于「问题报告 + 修复方案」并行提交的模式。无新版本发布，无 PR 被合并或关闭，代码主线今日未发生变更。活跃度评估：**低强度维护日**，但当日活动集中于会话上下文管理这一核心路径，问题与修复配套完整，技术含金量较高。整体项目健康度稳定，主要风险集中于长会话上下文无界增长这一稳定性议题。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，主分支未推进。

唯一在途工作为 PR #1054（`fix(session): bound restored history to max_history_messages`），仍处于待合并状态。该 PR 针对会话恢复路径，将恢复的历史记录限制为最近 `max_history_messages` 条。其自述验证结果为：`zig build test --summary all` 共 7491/7500 通过（9 项跳过），0 失败、0 泄漏——表明修复已在现有测试套件下完成验证，具备合并条件。

链接：nullclaw/nullclaw PR #1054

## 4. 社区热点

今日讨论热度整体偏低：两条记录评论数均为 0，👍 均为 0。

- Issue #1053（OPEN）：会话历史恢复无边界，自动压缩无法约束单请求上下文
- PR #1054（OPEN）：对恢复历史施加上限的修复

链接：nullclaw/nullclaw Issue #1053 · nullclaw/nullclaw PR #1054

分析：虽然尚无互动量，但 Issue #1053 直指一个对长生命周期会话敏感的核心设计缺陷——自动压缩与 `trimHistory` 只缩减内存中的 `agent.history`，结果未写回 session store，而会话恢复时又整段重新载入。该诉求属于架构级的上下文治理问题，一旦有其他长会话用户复现，讨论热度可能上升。

## 5. Bug 与稳定性

按严重程度排列：

**高 — 长会话上下文无界增长（已有 fix PR）**
- Issue #1053 [OPEN]：对于长期存活的会话，单请求上下文会无限制增长。自动压缩与 `trimHistory` 虽能减少内存中的 `agent.history`，但该结果从未写回 session store，且会话恢复时会重新载入（摘要在此处截断）——即压缩在持久化链路上实际失效。
- 影响面：长生命周期会话场景下的内存与上下文长度控制，可能导致上下文成本持续攀升。
- 状态：已有配套修复 PR #1054，尚待合并。

链接：nullclaw/nullclaw Issue #1053 · nullclaw/nullclaw PR #1054

## 6. 功能请求与路线图信号

今日无明确的新功能请求，唯一议题属于缺陷修复范畴。

可识别的路线图信号来自 PR #1054 本身：若被合并，`max_history_messages` 将成为会话恢复时的硬性约束边界，意味着「上下文边界治理」正被纳入核心会话语义，而非仅停留在内存层优化。结合 Issue #1053 指出的「压缩结果未回写 session store」，后续可能还需要针对写回路径的进一步改动——但该推断超出今日数据范围，仅供参考。

链接：nullclaw/nullclaw PR #1054

## 7. 用户反馈摘要

今日唯一的用户声音来自作者 vernonstinebaker，其提交的两条记录共同勾勒出如下痛点：

- **使用场景**：长期存活的会话（long-lived session）。
- **核心痛点**：单请求上下文随会话持续增长且无上界；自动压缩与 `trimHistory` 的缩减结果未持久化回 session store，导致会话恢复时重新载入完整历史，压缩形同虚设。
- **满意度信号**：该作者在报告问题的同日即提交修复 PR，并在 PR 中给出完整测试结果（7491/7500 通过、0 失败、0 泄漏），表明其对项目测试体系与贡献流程具备较高信心与熟练度。

今日无 Issues 评论可供进一步提炼。

链接：nullclaw/nullclaw Issue #1053

## 8. 待处理积压

今日数据中无长期未响应的重要 Issue 或 PR——两条记录均为当日创建、当日更新。

需维护者即时关注的事项：
- Issue #1053 与 PR #1054 均处于 0 评论状态，且为同一作者自报自修，建议尽快安排评审，避免修复方案在等待中过期。
- 提醒：今日两项记录互为配套，评审 PR #1054 时应同步核对 Issue #1053 中「压缩结果未写回 session store」这一根因是否被完整覆盖，而非仅限制恢复时的条数。

链接：nullclaw/nullclaw Issue #1053 · nullclaw/nullclaw PR #1054

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-10-10）

## 1. 今日速览
今日 IronClaw 项目活跃度处于**低位**：过去 24 小时内无新版本发布，无 PR 更新，仅关闭 1 条历史 Issue。唯一动态是 Issue #1047（DeepSeek 配置与鉴权问题）被关闭，该 Issue 创建于 2026-03-12、更新于 2026-10-10，评论数为 0。整体来看，项目今日无代码推进痕迹，外部贡献与维护响应均较为平静。

## 2. 版本发布
今日无新版本发布，故此部分省略。

## 3. 项目进展
今日无合并或关闭的 Pull Request，无代码层面推进。
（唯一关闭项为 Issue 而非 PR，详见第 5 节。）

## 4. 社区热点
今日唯一有更新的条目为 Issue #1047，但**无任何评论、无点赞**，不构成实质讨论热度。

- [#1047 [CLOSED] can not use deepseek ,can not set key](nearai/ironclaw Issue #1047)
  - 作者：hwyrq｜创建：2026-03-12｜更新：2026-10-10｜评论：0｜👍：0
  - 诉求分析：用户无法配置 DeepSeek 提供方密钥，属于接入第三方 LLM 的配置/鉴权路径问题。Issue 从 3 月创建到 10 月关闭、全程零评论，反映出该问题在社区中未形成共鸣或维护者未在公开渠道展开讨论。

## 5. Bug 与稳定性
今日无新增 Bug 报告。唯一相关条目为已关闭的 Issue：

- **严重程度：中** —— Issue #1047：DeepSeek 无法使用，密钥无法设置。
  - 报错信息：`LLM error: Provider deepseek-chat request failed: HttpError: Invalid status code 401 Unauthorized with message: {"error":{"message":"Authentication Fails, Your api key: ****bbaa is invalid","type":"authentication_error"...`
  - 性质：为 401 鉴权失败，指向 API Key 配置无效或未正确传入。
  - Fix PR：**无**（数据中无关联 PR，且该 Issue 已关闭）。
  - 说明：由于该 Issue 已关闭但无配套 PR，无法从数据判断是通过配置指引解决、还是问题本身失效；建议维护者补充关闭原因。

## 6. 功能请求与路线图信号
今日数据中未出现新的功能请求类 Issue，亦无任何 PR 可供参考，因此**无法从现有材料推断下一版本的纳入项**。Issue #1047 更偏向配置/鉴权缺陷而非新功能需求。

## 7. 用户反馈摘要
- 真实痛点（来自 Issue #1047 摘要）：用户在 IronClaw 中**无法完成 DeepSeek 的接入配置**，表现为密钥设置失败并触发 401 鉴权错误。这暗示第三方 LLM 提供方的密钥配置流程可能存在可用性或文档缺口。
- 使用场景：多模型提供方（DeepSeek）接入，属于 LLM 配置（`scope: llm`）与初始化（`scope: setup`）交叉场景。
- 满意度：数据中无正面或负面评价性评论，无法评估用户满意度。该 Issue 评论数为 0，用户未获得公开响应。

## 8. 待处理积压
- Issue #1047 从创建（2026-03-12）到关闭（2026-10-10）历时约 7 个月，期间零评论。虽已关闭，但**长时间无公开响应**本身是值得维护者关注的信号，建议回补处理结论。
- 今日无其他长期未响应的 Issue 或 PR 数据可供列出。

---
**说明**：以上内容严格基于所提供的数据生成；未提供的指标（如 Star、Fork、提交数、CI 状态等）不作推断。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-10

## 1. 今日速览

今日项目处于**高活跃合并、零新增讨论**的状态：24 小时内 PR 更新 22 条，其中 19 条已合并/关闭，3 条仍待合并；Issues 更新为 0 条，无新版本发布。合并内容全部由核心维护者 fisherdaddy 主导，集中在 OpenClaw 运行时稳定性、Office 编辑器能力补全、Artifact 预览刷新与协同任务计时等方向，属于典型的"集中清理与修复日"而非功能扩展日。值得注意的是，今日关闭的 PR 中包含两条 4 月和 8 月开启的 `stale` 积压项，说明维护者正在顺带清理历史待办。整体项目健康度良好：无新增未处理 Bug 报告，但积压攻击面类 PR（#2590 安全加固）已挂起逾一个月，值得关注。

## 2. 版本发布

今日无新版本发布，无 Releases 记录。

## 3. 项目进展

今日 19 条 PR 已合并/关闭，项目在以下方向明显向前推进：

**OpenClaw 运行时健壮性（今日主线，5 条）**
- [#2831](https://github.com/netease-youdao/LobsterAI/pull/2831)：修复 Windows 用户从 2026.9.4 升级到 2026.9.24 后 gateway 无法启动的问题——持久化配置时移除已废弃的 `meta.lastTouchedAt` 字段，避免 auth profile 迁移被无关配置错误阻断。
- [#2824](https://github.com/netease-youdao/LobsterAI/pull/2824)：配置恢复（config recovery）停滞时不再广播为引擎错误，保持 composer、cowork 任务准入和 IM 连接可用（#2819 的后续）。
- [#2830](https://github.com/netease-youdao/LobsterAI/pull/2830)：修复 Windows 用户首任务耗时数分钟、计时器中途重置的问题——改为从提交时刻计时，并对引擎等待阶段单独标注。
- [#2827](https://github.com/netease-youdao/LobsterAI/pull/2827)：修复被 steer 的轮次被中断，以及用户停止时仍在排队的 steer 输入未丢弃的问题。
- [#2826](https://github.com/netease-youdao/LobsterAI/pull/2826)：运行结束前重新检查未完成的 progress-card 计划，修复长任务中进度卡在"第 3/10 步 · 本轮已结束"的卡死状态。

**协同与 Artifact（3 条）**
- [#2832](https://github.com/netease-youdao/LobsterAI/pull/2832)：agent 改写用户正在预览的文件后，预览不再自动关闭。
- [#2828](https://github.com/netease-youdao/LobsterAI/pull/2828)：Windows 上检测 Excel/WPS 占用文件并提示，关闭后再保存，解决临时文件重命名被拒的问题。
- [#2829](https://github.com/netease-youdao/LobsterAI/pull/2829)：侧边栏中 agent 行与其嵌套任务行在 36px 改版后视觉无法区分，本次恢复层级区分。

**新能力落地**
- [#2833](https://github.com/netease-youdao/LobsterAI/pull/2833)：Word 编辑器补上**插入表格与图片**入口（10×8 尺寸网格、悬停预览、方向键+回车操作），这是用户直接反馈驱动的能力补齐。
- [#2834](https://github.com/netease-youdao/LobsterAI/pull/2834)：修复 `npm test` 会改动已跟踪文件 `logs/cowork.log` 的问题（该文件在 983ec2a0 中被误提交，`.gitignore` 对已跟踪文件无效）。

**历史积压清理（2 条 stale）**
- [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660)：非 main agent 首页欢迎区动态显示 agent 名称与描述（如"Hi，我是内容总结助手"）。
- [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)：保留含 `/` 的模型 ID 的 provider 前缀（如 `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` 不再被截断）。

## 4. 社区热点

本次数据中所有 PR 的评论数与 👍 均为 `undefined`/0，**不存在可量化的讨论热度**。从摘要内容看，反映真实用户诉求最集中的三条是：

- [#2835](https://github.com/netease-youdao/LobsterAI/pull/2835)（OPEN）：macOS 用户安装 Computer Use 后 gateway 意外二次重启，导致首条消息无法送达。
- [#2836](https://github.com/netease-youdao/LobsterAI/pull/2836)（OPEN）：agent 就地编辑文件后，artifact 面板内置浏览器与各类预览未刷新。
- [#2833](https://github.com/netease-youdao/LobsterAI/pull/2833)：源于用户直接提问"Word 文件编辑不支持插入表格、图片之类的吗？"

**诉求分析**：今日热点集中于"跨平台（尤其 Windows/macOS）桌面环境的稳定性"与"编辑后即时反馈"。用户对 LobsterAI 的期待已从"能跑通"进入"像本地 Office / IDE 一样可靠"的阶段。

## 5. Bug 与稳定性

按严重程度排列（所有问题均已有对应 PR）：

| 严重度 | 问题 | 平台 | 状态 |
|---|---|---|---|
| 🔴 高 | Gateway 升级后完全无法启动：auth profile 迁移被无关配置错误阻断（#2831） | Windows | 已修复并合并 |
| 🔴 高 | 安装 Computer Use 后 gateway 二次重启，任务无法准入（#2835） | macOS | PR OPEN |
| 🔴 高 | 配置恢复停滞被误报为引擎错误，composer/任务准入/IM 连接被连带禁用（#2824） | 全平台 | 已修复并合并 |
| 🟠 中 | Office 就地保存时，Windows 拒绝临时文件重命名（Excel/WPS 占用）导致保存失败（#2828） | Windows | 已修复并合并 |
| 🟠 中 | 长任务 progress card 卡死在"第 3/10 步 · 本轮已结束"（#2826） | 全平台 | 已修复并合并 |
| 🟠 中 | 首任务耗时数分钟且计时器中途重置（#2830） | Windows | 已修复并合并 |
| 🟡 低 | Artifact 预览在 agent 编辑文件后不刷新（#2836） | 全平台 | PR OPEN |
| 🟡 低 | agent 改写预览文件后预览自动关闭（#2832） | 全平台 | 已修复并合并 |
| 🟡 低 | `npm test` 修改已跟踪的 `logs/cowork.log`（#2834） | macOS 表现明显 | 已修复并合并 |
| 🟡 低 | 36px 侧边栏改版后 agent 行与任务行无法区分（#2829） | 全平台 | 已修复并合并 |

今日无崩溃类（crash）新报告；上述高严重度问题均源自用户上报的日志分析，且当日即产出修复，响应速度良好。

## 6. 功能请求与路线图信号

- **Office 套件能力补全**（[#2833](https://github.com/netease-youdao/LobsterAI/pull/2833)）：Word 插入表格/图片已合并，底层 `@docx-editor.dev/core` 2.22 尚有更多未接入能力，推测文字格式之外的图表、批注等会继续补齐。
- **非 main agent 个性化首页**（[#1660](https://github.com/netease-youdao/LobsterAI/pull/1660)）：多 agent 场景的体验打磨，随该 PR 关闭可能已并入主线或转为其他实现方式。
- **模型 ID 兼容性**（[#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)）：支持斜杠命名的第三方/自建模型（如 DeepSeek 系列），指向多 provider 兼容路线的延续。
- **Computer Use + 免重启安装**（[#2835](https://github.com/netease-youdao/LobsterAI/pull/2835)）：若合并，将显著改善 kit 安装体验，是下一版本的高概率候选。

综合判断：**跨平台稳定性与 Office/编辑体验**是当前最清晰的两条投入主线，而非新增 Agent 能力。

## 7. 用户反馈摘要

从今日 PR 摘要中可提炼的真实用户声音：

- **不满意 · 升级即不可用**：Windows 测试者从 2026.9.4 升级到 2026.9.24（test channel）后 gateway 从未启动，报错 `Auth migration cannot repair unrelated config errors`——升级路径的兼容性是当前最尖锐的痛点。
- **不满意 · 首任务等待过长**：Windows 用户反馈"引擎启动后第一个任务要等好几分钟，且计时器中途重置"，第三方插件加载是根因。
- **不满意 · 长任务进度误导**：使用 MiniMax-M3.1-Flash-Preview 做长评测任务时，模型已完成进度报告，但 UI 仍显示"本轮已结束"，造成"任务是否还活着"的困惑。
- **不满意 · 桌面软件互操作**：Windows 上 Excel/WPS 占用文件导致 Office 编辑器保存失败。
- **明确的功能期待**：用户直接询问 Word 是否支持插入表格和图片，说明文字编辑能力已不够用。
- **使用场景画像**：长时评测任务、多 agent 协作、桌面 Office 文档就地编辑、第三方模型接入——用户正把 LobsterAI 当作"常驻工作台"而非一次性工具。

## 8. 待处理积压

截至今日仍处于 OPEN 状态、需要维护者关注的 PR：

- [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590)（**已挂起 39 天**，2026-09-01 至今）：`fix(security): harden MCP stdio command and external URL boundaries`。摘要指出 MCP stdio 的 command/args 从表单、JSON 导入和配置同步直接流入 `openclaw.json`，**未做 shell 元字符或命令路径校验**；渲染层提供的 URL 也未经校验直接交给 `shell.openExternal`。这是明确的本地命令注入与外部协议边界风险，建议优先安排 review。
- [#2835](https://github.com/netease-youdao/LobsterAI/pull/2835)：macOS Computer Use 安装后 gateway 二次重启。
- [#2836](https://github.com/netease-youdao/LobsterAI/pull/2836)：Artifact 预览刷新缺失。

另外提示：今日 Issues 板块更新为 0 条，建议确认 Issue 模板与入口是否正常，避免反馈被导向 PR 而绕过 Issue 追踪。

---

*说明：本日报所有结论均基于给定的 GitHub 数据快照，评论数与点赞数在源数据中为 `undefined`/0，因此未做热度排序推断。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-10-10)

## 1. 今日速览

今日 Moltis 项目活跃度处于中等偏上水平，全部动态集中在 Issue 与 PR 的更新上，无新版本发布。过去24小时内共有 4 条 Issue 更新（全部为新开/活跃，0 条关闭），均由同一用户 texxronn 提交，涵盖 Discord 权限分类、OpenAI gpt-6 模型支持、共享频道触发词配置以及运行时时间注入失效等问题。PR 方面仅有 1 条待合并记录（#1295），且无任何 PR 被合并或关闭。值得关注的是，今日新开的 Issue #1300 与长期挂起的 PR #1295 指向同一个底层问题——Discord 私信分类，显示出社群对此议题的持续关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日**无**任何 PR 被合并或关闭，项目在代码合并层面未向前推进。

唯一相关的 PR 线索为 **#1295 [OPEN] `fix(discord): classify direct messages as direct chats`**（作者：tomachianura），创建于 2026-10-05，最后更新于 2026-10-10，目前仍处于待合并状态。该 PR 直接修复了 `crates/channels/src/chat_classification.rs` 中 `ChannelType::Discord => true` 导致所有 Discord 会话被一律归类为 shared 的问题。今日新开的 Issue #1300 正是该 PR 所解决问题的延伸诉求，说明修复方向已获得社群认可，但 PR 尚未落地。

- PR #1295: moltis-org/moltis PR #1295

## 4. 社区热点

今日讨论热度集中在以下条目（评论数均为 1，👍 均为 0，热度整体偏低）：

- **Issue #1300** [OPEN] `Discord: forward DM vs guild so operator DMs can be trusted (tools), instead of always fail-closed as shared` — moltis-org/moltis Issue #1300
  作者 texxronn，创建/更新均为 2026-10-10，评论 1。
  诉求：Discord 上 channel turn 始终被当作 "shared" 处理，导致工具被剥离，即便是在 DM 中、即便发送者已被列入账号的 `operators` 名单。用户希望 DM 与 guild 场景能够被区分对待，使运营者私信获得可信的工具调用权限。

- **Issue #1298** [OPEN] `Feature: native support for OpenAI gpt-6 models (reasoning + tools)` — moltis-org/moltis Issue #1298
  诉求：在使用内置 `openai` provider 时，`gpt-6-luna` 在包含工具的回合中失败（HTTP 400：`Function tools with reasoning_effort are not supported for gpt-6-luna`）。

- **Issue #1297** [OPEN] `Feature: configurable mention/trigger word for a shared channel` — moltis-org/moltis Issue #1297
  诉求：用户在共享群组中希望通过稳定的触发词（如消息以 `@Rio` 开头）唤起自托管 agent，否则保持静默。

- **PR #1295** [OPEN] `fix(discord): classify direct messages as direct chats` — moltis-org/moltis PR #1295
  与 Issue #1300 高度关联，是同一 Discord 分类问题的修复实现。

分析：今日全部热点均由单一用户 texxronn 驱动，且 4 条 Issue 中有 3 条（#1300、#1297、#1299）都围绕"权限边界与运行时上下文注入"这一主题，反映出实际部署自托管 agent 的用户对**权限可控性**与**行为可预测性**的强烈诉求。

## 5. Bug 与稳定性

按严重程度排列：

1. **[高] Issue #1299** [OPEN] `Bug: runtime datetime never injected (host context sets time=None, today unset)` — moltis-org/moltis Issue #1299
   严重程度：高。agent 无法回答"现在几点/今天是几号"。Moltis 本应通过 `runtime_datetime_message()` 在回合前注入当前时间（`[The current user datetime is …]`），但因 host run 将 time 设为 None、today 未设置，该逻辑从未触发。这是一个基础功能失效，会影响所有依赖时间感知的会话。
   **是否已有 fix PR：暂无。**

2. **[中] Issue #1300** [OPEN] `Discord: forward DM vs guild so operator DMs can be trusted (tools)...` — moltis-org/moltis Issue #1300
   严重程度：中。Discord 会话被一律视为 shared，导致工具被无条件剥离（fail-closed），运营者 DM 也无法使用工具。
   **是否已有 fix PR：已有相关 PR #1295（待合并），但 #1300 提出的 operator 可信度诉求可能超出 #1295 的修复范围。**

3. **[中] Issue #1298** [OPEN] `Function tools with reasoning_effort are not supported for gpt-6-luna` — moltis-org/moltis Issue #1298
   严重程度：中。内置 `openai` provider 在搭配工具使用时，gpt-6-luna 返回 HTTP 400，导致该模型在有工具的场景下完全不可用。
   **是否已有 fix PR：暂无。**

今日报告的 3 项 Bug/故障中，仅 1 项（#1300）有潜在的修复 PR 关联，其余 2 项（#1299、#1298）尚无 fix PR，需维护者尽快响应。

## 6. 功能请求与路线图信号

今日新开的功能请求：

- **Issue #1298**：原生支持 OpenAI gpt-6 模型（reasoning + tools）。该请求指向 provider 层对新模型能力组合（推理 + 函数工具）的适配缺失。结合当前无相关 PR，预计需新增 provider 适配逻辑，短期内纳入下一版本的可能性取决于维护者对 gpt-6 系列的跟进节奏。
- **Issue #1297**：为共享频道配置可自定义的 mention/触发词。用户明确指出 `mention_mod...`（摘要截断）现有机制不满足需求，希望以稳定名称（如 `@Rio`）唤醒 agent。此需求与 #1300 的权限边界主题一致，且实现相对独立，具备被纳入后续版本的潜力。
- **Issue #1300**：DM 与 guild 转发区分，使 operator DM 可信。该请求与已在评审中的 PR #1295 方向一致，**最有可能被纳入下一版本**——前提是 #1295 能够合并，并在此基础上补足 operator 可信度逻辑。

## 7. 用户反馈摘要

从今日（及关联）Issue 中可提炼的真实用户场景与痛点：

- **使用场景**：texxronn 在个人 WhatsApp（linked device）上自托管 agent，并在共享群组中使用，希望通过稳定触发词（如 `@Rio`）控制唤醒时机，其余时间保持静默（Issue #1297）。
- **核心痛点一：权限边界不清**。Discord 场景下所有会话被强制归为 shared，连带运营者 DM 也被剥离工具权限，即使用户已将发送者加入 `operators`，形成"always fail-closed"的体验落差（Issue #1300）。
- **核心痛点二：基础能力缺失**。agent 无法回答日期/时间，用户定位到 `runtime_datetime_message()` 因 `time=None`、`today` 未设置而从不触发（Issue #1299）——属于可复现、影响面明确的功能性缺陷。
- **核心痛点三：新模型适配滞后**。使用内置 `openai` provider 搭配 gpt-6-luna 时，任何含工具的回合都直接返回 400 错误，用户被迫在推理与工具之间二选一（Issue #1298）。

整体反馈显示用户正在**真实生产环境**（自托管、多平台、群组协作）中部署 Moltis，对权限可控性、时间上下文、前沿模型支持三项能力有明确且一致的需求。今日未见满意类反馈，也未出现负面情绪化表述，问题陈述均较为技术化。

## 8. 待处理积压

- **PR #1295** [OPEN] `fix(discord): classify direct messages as direct chats` — moltis-org/moltis PR #1295
  作者 tomachianura，创建于 **2026-10-05**，截至 2026-10-10 已挂起 **5 天**未合并。该 PR 直指 Discord 分类的根因问题，且今日新开的 Issue #1300 恰好是其诉求的延续，建议维护者优先评审并推进合并，以避免同类问题持续产生新 Issue。

- **PR #1295 评论数据缺失**：该 PR 的评论数在数据中显示为 `undefined`，建议核实其评审状态与是否存在未响应的评审意见。

---

*注：本日报所有内容均基于所提供的 GitHub 数据生成，未包含数据源之外的信息。今日无新版本发布，无已合并/关闭的 PR，故第 2 节无实质内容、第 3 节代码推进量为零。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-10

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 动态。注：所给数据中部分条目链接指向 `agentscope-ai/QwenPaw`，本报告按原始数据保留链接标识。

## 1. 今日速览

过去 24 小时项目保持高强度维护节奏：Issues 更新 18 条（新开/活跃 7、关闭 11），PR 更新 21 条（待合并 10、合并/关闭 11），关闭量均高于新开量，积压呈净缩减趋势。今日无新版本发布。工作重心集中在 **Console 前端稳定性**（chunk 加载失败恢复、DOM 渲染错误、Files 面板刷新）与 **Provider/Responses API 兼容**两个集群，且多条 Issue 与 fix PR 已形成明确配对了结。同时出现一条被标记为 `invalid` 的 root RCE 安全报告（#8153），需关注其判定依据。

## 2. 版本发布

无新版本发布。数据中最新版本号为 **2.2.2b4 / 2.2.2-beta.4**（见 #8120、#7995、#8143），当前处于 beta 迭代期，多个已关闭 Bug 均针对该版本或 2.2.1。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **PR #8154 [CLOSED, size/XXL] fix(console): improve chunk error recovery and diagnostics** — 一次性修复 #8120、#8094、#7815、#7074 四个前端稳定性 Issue，重置失败的 lazy 加载状态以支持页面导航后重载，并限制失败模块自动重试次数，同时改善 Safari/WebView 的错误检测与 CSS module 问题。是今日影响力最大的合并项。
  https://github.com/agentscope-ai/CoPaw/pull/8154
- **PR #8165 [OPEN, size/M] fix(providers): recover Responses output sent only on the terminal event** — 针对 #8162 修复部分 Responses API Provider 仅在终止事件中返回完整 output 的问题。虽仍待合并，但与 #8162 已关闭形成闭环信号。
  https://github.com/agentscope-ai/CoPaw/pull/8165
- **PR #7996 / #8149 [CLOSED] fix(console): refresh expanded folders in Files panel** — 两个 PR 均关闭并指向 #7995，修复 Files 面板刷新后已展开目录不更新的问题（#8149 额外保留分页）。
  https://github.com/agentscope-ai/CoPaw/pull/8149 · https://github.com/agentscope-ai/CoPaw/pull/7996
- **PR #8157 [CLOSED, size/XS] fix(chat): prevent invalid copy icon size** — 修复 #8143 中 SVG 收到非数值 `small` 尺寸导致的 Console 报错刷屏。
  https://github.com/agentscope-ai/CoPaw/pull/8157
- **PR #8168 / #8169 [CLOSED, size/XS] Hub 模型上下文限制校验修复** — #8168 使用解析后的模型上下文上限，#8169 尊重管理员 token 能力覆盖，解决合法 context window 被误拒的问题（涉及 `qwen3.8-max` 的 1,000,000 上下文场景）。
  https://github.com/agentscope-ai/CoPaw/pull/8168 · https://github.com/agentscope-ai/CoPaw/pull/8169
- **PR #7132 / #7096 [CLOSED]** — 均为作者主动关闭：#7132 被当前侧边栏改版取代，#7096 因 main 已 pin `agentscope[model-ollama]==2.0.9`（#8008）而不再需要。

整体看，项目在**前端韧性（错误恢复而非仅报错）**方向推进明显，从“报错提示”转向“自动恢复+诊断”，属于健康度正向信号。

## 4. 社区热点

按评论数排序的活跃讨论：

- **Issue #7678 [CLOSED] spawn subAgent 全部超时失败**（评论 10，最高）
  用户 xiaohushi512 报告 win2.2.0 下 spawn subAgent 无一成功、延长 timeout 无效。该 Issue 跨月长期活跃（创建 2026-09-11）后于今日关闭。反映**多智能体子任务编排的可靠性**是核心诉求。
  https://github.com/agentscope-ai/CoPaw/issues/7678
- **Issue #8162 [CLOSED] OpenAI Responses API 流式空响应**（评论 7）
  会话运行 1–3 步后无提示中断，根因指向 `_parse_stream_response` 仅处理增量事件。已由 #8165 跟进。反映**第三方 Provider 兼容性是高频痛点**。
  https://github.com/agentscope-ai/CoPaw/issues/8162
- **Issue #7815 / #8120 [CLOSED] Console 页面加载失败不可恢复 / 频繁页面加载失败**（评论 5 / 4）
  多设备复现、严重“影响体验”，由 #8154 统一修复。用户对**前端错误不可自愈**的容忍度很低。
  https://github.com/agentscope-ai/CoPaw/issues/7815 · https://github.com/agentscope-ai/CoPaw/issues/8120

热点共性：**长尾疑难 Bug（子智能体、流式解析）** 与 **高频体验型前端故障** 是社区关注焦点，且两者今日均获得关闭或修复配对，说明维护响应有效。

## 5. Bug 与稳定性

按严重程度排列：

**高**
- **#8153 [CLOSED, invalid] MCP Driver 配置接口导致 root RCE（含挖矿木马、SSH 持久化证据链）** — 已脱敏的完整入侵描述。**注意：该 Issue 被标记为 `invalid`**，但涉及 root 权限远程代码执行，建议维护者公开说明判定理由以消除用户疑虑。
  https://github.com/agentscope-ai/CoPaw/issues/8153
- **#7311 [OPEN] v2.1.1b2 缺失 `_qwenpaw_remote_backend`，所有工具失效** — Windows Desktop 全部 agent 工具抛 `ModuleNotFoundError`，重装无效。**长期未闭合（创建 2026-08-26）且今日仍活跃，无对应 fix PR。**
  https://github.com/agentscope-ai/CoPaw/issues/7311
- **#8171 [OPEN] send_file_to_user 音频文件永久卡死会话** — LM Studio 返回 400 `At most 0 audio(s)`，被音频回退/媒体能力分类器漏判。属 #7015 / #7024 / PR #7654 同族第三种拒绝形态，**尚无 fix PR**。
  https://github.com/agentscope-ai/CoPaw/issues/8171
- **#8163 [OPEN] Windows 长路径破坏 Review decision journal（503 STORAGE_INTEGRITY_ERROR → 409 CAS_CONFLICT）** — 首次失败后不可恢复。**已有 fix PR #8167。**
  https://github.com/agentscope-ai/CoPaw/issues/8163

**中**
- **#8150 [OPEN] 飞书入站 post 图文混发静默丢弃图片** — 仅解析文字、无任何警告，与 #2792 出站方向相反。**无 fix PR。**
  https://github.com/agentscope-ai/CoPaw/issues/8150
- **#7678 [CLOSED] spawn subAgent 全部超时**
- **#7994 [CLOSED] 上下文状态信息不更新、超阈值不压缩**
  https://github.com/agentscope-ai/CoPaw/issues/7994

**低（多已修复）**
- #8162（→ #8165）、#8120 / #8094 / #7815 / #7074（→ #8154）、#7995（→ #8149/#7996）、#8143（→ #8157）、#8158（→ 渲染空气泡，尾部文本块）、#7815。

**结论**：今日 Bug 修复闭环率高（11 关闭），但 #7311、#8171、#8150 三条高风险/中风险 Bug 仍无 fix PR，需重点跟进。

## 6. 功能请求与路线图信号

- **#8160 [OPEN] 新增西班牙语 (es) 界面语言** — 现有 zh/en/ja/ru/pt-BR/id/vi，请求覆盖 console、website、plugin creator UI 与后端。讨论 2 条，**尚无对应 PR**，属国际化扩张信号。
  https://github.com/agentscope-ai/CoPaw/issues/8160
- **#7809 [OPEN] 工具审批卡片与通知硬编码英文，需 i18n** — Tool Guard 拦截高风险调用时推送的交互卡片全英文。与 #8160 同属**本地化缺口**，可能被合并进同一 i18n 需求批次。
  https://github.com/agentscope-ai/CoPaw/issues/7809
- **#8082 [OPEN] 文档化 heartbeat 的 silence 语义、并发与 AGENTS.md 章节** — 现状仅文档化配置项，缺运行时语义。**已有对应 PR #8166 待合并**，很可能纳入下一版本。
  https://github.com/agentscope-ai/CoPaw/issues/8082 · https://github.com/agentscope-ai/CoPaw/pull/8166
- **PR #7565 [OPEN, size/XXXL] 插件干净卸载与回滚安全热重载** — 避免 install/update/uninstall 重建全部工作区、避免更新失败留下半应用状态。体量大、仍待合并，属**架构级能力**，是潜在路线图重点。
  https://github.com/agentscope-ai/CoPaw/pull/7565
- **PR #7127 [OPEN, first-time-contributor] CLI `--agent-id` 使用指南** — 文档补充中英双语。
  https://github.com/agentscope-ai/CoPaw/pull/7127

**最可能进入下一版本**：#8166（heartbeat 文档）、#8167（Windows 长路径修复）、#8165（Responses 兼容）、#8170（Console 错误容忍重制）；i18n 系列（#8160/#7809）尚需 PR 落地。

## 7. 用户反馈摘要

**核心痛点**
- **稳定性与自恢复**：用户对页面加载失败“必须完整刷新”强烈不满（#8120 “几台设备都遇到，非常影响体验”；#7815 “每次导航都停在错误页”）。今日 #8154 直接回应。
- **子智能体可靠性**：#7678 用户自称“技术我不懂”，spawn subAgent 全 timeout，反映普通用户对多智能体能力的**低容错预期**。
- **上下文管理不可信**：#7994 用户指出上下文窗口已达 91.7K / 131.1K 仍不压缩，即使阈值设为 0.5，且圈状指示器不随会话切换更新。
- **静默失败最伤人**：#8150（飞书图片被静默丢弃、无警告）、#8171（音频卡死会话）均属“无提示失败”，用户难以自查。

**使用场景**
- Windows 10/11 + Desktop + WebView2 为主要反馈平台，Windows 长路径为系统性风险点（#8163）。
- 第三方 Provider 组合使用普遍（OpenAI Responses、LM Studio、DashScope/qwen3.8-max）。

**满意方向**
- 多条 Bug 从报告到关闭周期短（如 #8162、#8120 当日闭环），维护响应速度得到事实印证。
- 用户在 #8162 中主动附上“问 AI 后的修复线索”，并认可修复，属正向互动。

## 8. 待处理积压

需维护者重点关注：

- **#7311 [OPEN] v2.1.1b2 缺失 `_qwenpaw_remote_backend`** — 创建 2026-08-26，**已积压约 45 天**，全工具失效属阻断级，无 fix PR。
  https://github.com/agentscope-ai/CoPaw/issues/7311
- **#7654（PR，数据中被引用为“仍开放”）** — 与 #7015 音频拒绝同族修复相关，仍未合并，而 #8171 又新增第三种拒绝形态，建议一并收敛。
- **PR #7565 [OPEN, size/XXXL] 插件热重载** — 创建 2026-09-04，体量大、评审周期长，存在长期挂起风险。
  https://github.com/agentscope-ai/CoPaw/pull/7565
- **PR #8170 [OPEN, size/L] Console DOM-mutation 渲染错误容忍** — 为 #7889 的 rebase 版本（#7889 今日已关闭），需确认是否完整替代。
  https://github.com/agentscope-ai/CoPaw/pull/8170
- **PR #7127 [OPEN, first-time-contributor]** — 首次贡献者 PR 自 2026-08-19 起开放，长期未决可能影响新贡献者留存。
  https://github.com/agentscope-ai/CoPaw/pull/7127
- **#7809 [OPEN] 工具审批卡片 i18n** — 创建 2026-09-16，长期无 PR 承接。

**健康度小结**：关闭/合并量（22）显著高于新开（7 Issue + 数据未明示的新 PR），积压净缩减，维护节奏积极；风险集中在 #7311（长期阻断）、无 fix PR 的 #8150/#8171，以及 #8153 需公开定性的安全报告。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-10

## 1. 今日速览

ZeroClaw 今日维持高强度开发节奏：过去 24 小时 Issues 更新 25 条（新开/活跃 18、关闭 7），PR 更新 50 条（待合并 46、已合并/关闭 4），无新版本发布。待合并 PR 高达 46 条，明显积压，其中多条带 `release:v0.8.6` 标签，说明 v0.8.6 的发布门槛正在被这批 PR 卡住。今日关闭的 Issue 集中在图像/成本账本/技能 HTTP/ZeroCode 等既有主题，属于既有工作的收尾。活跃议题以 runtime 稳定性（测试夹具加固、遥测泄漏）、Telegram 通道可靠性、以及 A2A / RAG 等 RFC 架构讨论为主。整体健康度：开发活跃、收敛偏慢，需关注 PR 审查吞吐与 P1 通道类故障。

## 2. 版本发布

今日无新版本发布（最新 Releases：无）。

## 3. 项目进展

今日已合并/关闭的 PR 共 4 条，其中可见的代表性工作：

- **PR #11348 [CLOSED]** `fix(plugins): report a plugin channel's own health check in /health` — 让 `WasmChannel` 实现 `Channel::listener_health`，此前通道监督器对 `channel:plugin.<alias>` 始终报 `ok`。标签含 `release:v0.8.6`。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11348)）
- **PR #11303 [CLOSED]** `test(plugins): prove the channel WebSocket lifecycle end to end` — 补齐 WASM 通道插件 WebSocket 生命周期的端到端测试，覆盖单个热存储与宿主中介 WebSocket 跨多次 `poll-message` 的行为。标签含 `release:v0.8.6`。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11303)）
- **PR #11534 [CLOSED]** `test(runtime): make RPC and delegate fixtures deterministic` — 消除 RPC 与 delegate 夹具的不确定性，属测试稳定性改进。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11534)）

同日关闭的 Issue 亦反映推进方向：#11166（超限时批量淘汰图像块）、#10700（成本记录携带守护进程级 session id）、#10550（约束技能 HTTP DNS 解析）、#11545（移除废弃的 `StreamErrorWithUsage`）、#11371（MCP 嵌套对象参数被序列化为字符串）、#10741（ZeroCode 静默暂停队列工作）、#11180（并行 runtime 下的 flaky 测试）。

整体看，项目在**插件/通道健康检查、成本账本正确性、测试确定性**三条线上向前推进，但仍属收尾性质；46 条待合并 PR 意味着大量新功能尚未落袋。

## 4. 社区热点

今日讨论热度最高的条目（按评论数）：

- **Issue #9965 [OPEN]（15 评论，P1，status:in-progress）** 加固在并行 runtime 门控下写入可执行测试夹具的行为。源自 `cron::scheduler::tests` 的失败，属测试基础设施的系统性问题。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)）
- **Issue #8692 [OPEN]（15 评论，type:tracker）** 维护者 RFC/设计议题决策队列，是社区提案进入决策流程的入口，长期高热度说明 RFC 积压（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）
- **Issue #9887 [OPEN]（7 评论，status:blocked，risk:high）** 超大图片应降采样而非直接丢弃，并允许用 0 关闭多模态限制。当前超过 `multimodal.max_image_size_mb`（默认 5 MiB）会直接拒绝并提示图像无法加载。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)）
- **Issue #7432 [OPEN]（6 评论，release:v0.9.0 跟踪器）** v0.8.6 Phase 2 runtime 与 v0.9.0 Phase 3 网关分离的进展总账，源自 RFC #5574。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）
- **Issue #11254 [OPEN]（5 评论，type:rfc，needs-maintainer-review）** 提议新增 A2A 协议 crate（zeroclaw-a2a）。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)）

诉求解读：社区热度集中在**架构决策的排队与落地速度**。两个 tracker（#8692、#7432）与两条 RFC（#11254、#11235）同框，说明能力扩展提案（A2A、RAG）与既有 runtime/网关重构在争夺同一批维护者注意力。

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

**S1 — workflow blocked**
- **#11612 [OPEN]（P1，2 评论）** 同一轮次内重跑已批准的 shell 命令会中止 agent loop（"repeated prompt-required tool call 'shell' with identical arguments before approval"），并终止 ACP 会话。报告方为 DefuzeX，附 KUMA SDK 复现。**未见对应 fix PR。**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11612)）
- **#11608 [OPEN]（P1，1 评论）** Telegram 监听器可能被黑洞请求永久卡死；`listener_health` 能检测到停滞但无任何机制恢复通道。根因是 runtime HTTP 客户端无请求超时。**未有 fix PR（今日有相关测试 PR #11645）。**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11608)）
- **#11615 [OPEN]（P1，1 评论）** Telegram 发送路径忽略 429 的 `retry_after`，立即重试会加重限流，回复可能彻底丢失。**未有 fix PR。**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11615)）
- **#11614 [OPEN]（P1，1 评论）** `Configurable::map_key_sections()` 每次调用永久泄漏格式化后的 schema 路径（`Box::leak`），导致守护进程内存持续增长。**未有 fix PR。**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11614)）

**S2 — degraded behavior**
- **#11613 [OPEN]（P2，3 评论）** 成本账本丢弃 provider 的 `total_tokens`，导致把推理 token 只放在 `total_tokens` 的模型（如经 OpenAI 兼容 provider 访问的 Gemini）被少计。**未有 fix PR。**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)）
- **#11632 [OPEN]（P2，desktop）** Linux/Tauri 桌面端 WebKitWebProcess 空闲时仍持续重绘，GPU 渲染引擎接近 100%。**未有 fix PR。**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11632)）

**已关闭的稳定性问题**：#11371（MCP 嵌套对象参数序列化错误，已关闭）、#10741（ZeroCode 静默暂停队列，已关闭）、#11180（并行 runtime 下的 flaky 测试，已关闭）。

## 6. 功能请求与路线图信号

- **A2A 协议 crate（RFC #11254）** 状态为 `needs-maintainer-review`，wire model 与外发客户端已由 #9106 确立，属跨边界契约重构。**判断：需维护者决策，短期不会进 v0.8.6。**
- **知识语料库 / RAG（RFC #11235）** 命中"新子系统/项目级能力边界"触发条件，`risk:high`，面向操作者自有文档的检索。**判断：方向明确但尚在提案阶段。**
- **search_routes 提示路由（RFC #11074）** 为 `web_search_tool` 增加类似 `[[model_routes]]` 的按提示路由，可让不同查询分流到不同 provider。**判断：与既有配置范式一致，落地成本相对可控。**
- **图像处理方向**：#9887（降采样替代丢弃 + 允许 0 关闭多模态限制），状态 `blocked / parking-lot`；而 #11166（超限时批量淘汰图像块）今日已关闭并带 `follow-up` 标签，说明图像链路正在分批推进。
- **Context window 可诊断性**：PR #11578（请求无法装入窗口时说明"是什么占满了窗口"，带 `trusted contributor / needs-author-action`）与配套文档 PR #11649（提议一个受限的 holding-crate 例外）正在推进，**有较大概率进入 v0.8.6**。
- **插件可恢复性**：PR #11236（通过 `plugin remove` 恢复不完整安装）、PR #11356（channel 插件 trap 后替换实例）均带 `release:v0.8.6`、`release-gate` 标签，是下一版本的明确候选。

## 7. 用户反馈摘要

- **多媒体输入体验**：用户不愿看到超大图片被静默丢弃，只得到"有 N 张图片无法加载"的提示（#9887），希望有降采样兜底、并保留显式关闭限制的能力。
- **成本可见性**：用户希望按会话/对话切分花费，但 `CostTracker.session_id` 是守护进程级 UUID，跨所有 agent 共享（#10700，已关闭）；同时推理 token 计费少算影响成本判断（#11613）。
- **外部安全测试者的参与**：DefuzeX 团队用其开源 SDK KUMA 提交了可复现的 agent loop 中止问题（#11612），并主动说明身份与复现方式——外部方在把 ZeroClaw 当作被测对象，是生态正向信号。
- **通道可靠性不满**：Telegram 相关两条 P1（#11608 卡死、#11615 限流放大）同属一位报告者，反映生产环境对通道自愈与退避策略有明确诉求。
- **工具参数保真**：MCP 工具调用中嵌套对象被序列化为字符串（#11371），用户担心工具执行参数被静默改写。

## 8. 待处理积压

- **Issue #8692（创建于 2026-07-04，更新 2026-10-09，15 评论）** 维护者决策队列 tracker，历时三月以上仍在滚动，是 RFC 落地的瓶颈信号。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）
- **Issue #7432（创建于 2026-06-09，更新 2026-10-10，6 评论）** v0.8.6 / v0.9.0 的 runtime 与网关交付 tracker，已跟踪四个月。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）
- **Issue #9965（创建于 2026-08-13，更新 2026-10-10，15 评论，status:in-progress）** 并行 runtime 门控下的测试夹具加固，讨论量高但近两月未结。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)）
- **Issue #9887（创建于 2026-08-10，status:blocked + status:parking-lot）** 图像降采样方案被阻塞在停车区，需维护者裁定。（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)）
- **PR #11578（创建于 2026-10-06，needs-author-action）** 若作者不响应，v0.8.6 的上下文窗口可诊断性改进将被推迟。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11578)）
- **PR #11236（创建于 2026-09-29，size:XL，release:v0.8.6，release-gate）** 插件不完整安装恢复，体量大、属发布门控项，需优先审查。（[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11236)）

**总体提示**：46 条待合并 PR 对 4 条合并的吞吐比（约 11:1）是当前最值得警惕的信号，多条 `release:v0.8.6 / release-gate` PR 长期停在待合并状态，会直接推迟版本发出。建议维护者优先清理 #11236、#11356、#11578 这类门控项与待作者响应项，并给两个 tracker（#8692、#7432）设定明确的裁决节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*