# OpenClaw 生态日报 2026-10-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-14 14:02 UTC

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

# OpenClaw 项目日报 — 2026-10-14

## 1. 今日速览

过去24小时项目保持高活跃度：500 条 Issue 更新（新开/活跃 329，关闭 171），500 条 PR 更新（待合并 383，已合并/关闭 117），无新版本发布。当日讨论高度集中在 **SQLite WAL 无限增长与 gateway 启动阻塞**、**插件捕获导致的严重 I/O 与 SSD 磨损**、以及 **2026.10.1 启动显著变慢** 三类稳定性问题上，多个 P0/P1 标签 Issue 仍处于 `needs-maintainer-review` 状态。合并侧以 Web UI 重构与内存/性能修复为主，Android/Wear OS 也有修复推进。整体看：开发吞吐正常，但**关键路径上的数据库与插件生命周期问题积压明显，健康度承压**。

## 2. 版本发布

无新版本发布（今日 Releases 为空）。

## 3. 项目进展

今日已合并/关闭的 PR 主要集中在性能优化、内存管理与生命周期修复：

- **#171961 [CLOSED]** `fix(memory-wiki): avoid full-vault reads for path lookups` — 避免 `wiki_get` 收到基名/无扩展名路径时读取整个 vault，直接减少冗余 I/O。🐚 platinum hermit。
  https://github.com/openclaw/openclaw/pull/171961
- **#164781 [CLOSED]** `perf(memory-wiki): resolve wiki_get path lookups without reading every page` — 将路径式查找改为只读单页，与 #171961 互补。🦞 diamond lobster。
  https://github.com/openclaw/openclaw/pull/164781
- **#171808 [CLOSED]** `refactor(ui): remove the unused Sessions page bridge` — 移除 Sessions 页无效的 custom-element 桥接，减少每次挂载开销。
  https://github.com/openclaw/openclaw/pull/171808
- **Issue #171933 [CLOSED]** `doctor NOCOW repair` — 在 Linux < 4.7（无 RENAME_EXCHANGE）上的拒绝行为不再需要完整逐文件清点。
  https://github.com/openclaw/openclaw/issues/171933
- **Issue #171647 [CLOSED]** `Visible child completion cannot resume a yielded guest session` — 已关闭。
  https://github.com/openclaw/openclaw/issues/171647

**推进幅度评估**：合并内容偏向局部性能与清理，尚未见直接针对 P0 数据库/WAL 与插件捕获问题的 fix 合并；项目在 UI 与 memory-wiki 子模块上稳步前进，但**关键稳定性主线本日未取得可见合并进展**。

## 4. 社区热点

按评论数排序的讨论焦点：

- **#143524 [OPEN, P0]** — Agent SQLite WAL 数日内涨至 1.4–2.8 GB（实测 2865 MB），阻塞 gateway 启动；124 条评论，为当日最热。🦪 silver shellfish，标签含 `impact:message-loss`、`impact:crash-loop`、`ux-release-blocker`。
  https://github.com/openclaw/openclaw/issues/143524
- **#160959 [OPEN, P0]** — Gateway 捕获大型外部插件时事件循环阻塞数分钟（2026.9.6 回归，源头 #144252）。🦞 diamond lobster，22 条评论。
  https://github.com/openclaw/openclaw/issues/160959
- **#85333 [CLOSED, P1]** — `openclaw doctor --fix` 在 2026.5.20 比 2026.5.19 慢 4–5 倍（55s → 229s+）。17 条评论，已关闭。
  https://github.com/openclaw/openclaw/issues/85333
- **#157989 [OPEN, P1]** — 插件源码捕获每个 CLI 命令重写约 1.1–1.4 GB、每次 Gateway 启动约 6.5 GB，无复用且含原生二进制，造成严重 SSD 磨损。16 条评论。
  https://github.com/openclaw/openclaw/issues/157989

**诉求分析**：社区焦点高度一致——**插件捕获（plugin source capture）机制虽为安全/完整性目的引入，却带来 WAL 膨胀、启动阻塞、磁盘磨损三重代价**，与 gateway 生命周期管理紧密耦合，是当前最迫切的系统级问题簇。

## 5. Bug 与稳定性

按严重程度排列（是否已有 fix PR：据标签判断）：

**P0**
- #143524 — SQLite WAL 无限增长阻塞启动（`no-new-fix-pr`，无 fix PR）。
  https://github.com/openclaw/openclaw/issues/143524
- #160959 — 插件捕获致 Gateway 阻塞数分钟（`no-new-fix-pr`，无 fix PR）。
  https://github.com/openclaw/openclaw/issues/160959
- #148307 — Agent DB `database is locked`，session 回收超 5s busy timeout（`needs-info`，无 fix PR）。
  https://github.com/openclaw/openclaw/issues/148307
- #155563 — 2026.9.5 回归：agent turn 结束后 service-child relay/anchor 与 MCP 组仍被保留（无 fix PR）。
  https://github.com/openclaw/openclaw/issues/155563
- #138409 — `gateway-active-work` drain 将 controller-session 计为 blocker，插件更新时死锁（`needs-product-decision`，无 fix PR）。
  https://github.com/openclaw/openclaw/issues/138409
- #166894 — Windows 多 agent 安装下 Gateway 重启偶发挂起 30 分钟至 2 小时（2026.9.8，`needs-info`）。
  https://github.com/openclaw/openclaw/issues/166894
- #166221 — 2026.9.4 → 2026.9.8 更新在 SQLite preflight/候选快照阶段失败（无 fix PR）。
  https://github.com/openclaw/openclaw/issues/166221
- #167557 — 插件延迟数据/设置迁移永不收敛，报 "managed handoff lease database identity changed"（无 fix PR）。
  https://github.com/openclaw/openclaw/issues/167557

**P1**
- #157989 — 插件捕获致 SSD 严重磨损（无 fix PR）。
  https://github.com/openclaw/openclaw/issues/157989
- #168955 — 2026.10.1 启动回归：ready 由 ~410s 升至 ~1030s（Windows，`sidecars.control-ui-assets` 阻塞 477s，无 fix PR）。
  https://github.com/openclaw/openclaw/issues/168955
- #163029 — 2026.9.7 仍在 turn 中重载外部插件，主线程停顿 40–70s（无 fix PR）。
  https://github.com/openclaw/openclaw/issues/163029
- #155119 — Subagent 完成时最终答案丢失、重复 settle 事件、deliveryStatus 卡 pending。
  https://github.com/openclaw/openclaw/issues/155119
- #164799 — 版本变更后 agent 逐个放行慢于 ready，未配置的 system-agent DB 被拒（readyz 503）。
  https://github.com/openclaw/openclaw/issues/164799
- #143274 — `maybeRetryTransient` 接受完整 Retry-After 致 auth-profile 轮换失效（diamond lobster）。
  https://github.com/openclaw/openclaw/issues/143274

**P2/P3 及其他**
- #164294 — Gateway state DB WAL 自动 checkpoint 从未完成（被进程内 reader 钉住）。
  https://github.com/openclaw/openclaw/issues/164294
- #99659 — companion 应用连接后 OpenClaw 被 OOM kill。
  https://github.com/openclaw/openclaw/issues/99659
- #143335 — session-sqlite`SQLite session write failed` 突发 + 完整性检查超时。
  https://github.com/openclaw/openclaw/issues/143335
- #48709 — Gemini 2.5 Pro textSignature 膨胀等导致会话失败。
  https://github.com/openclaw/openclaw/issues/48709
- #126429 — CLI-backend（claude-cli）模型列表崩溃、次身份认证不识别。
  https://github.com/openclaw/openclaw/issues/126429

**总体判断**：当日 Bug 高度集中于 **SQLite/WAL、插件捕获、Gateway 生命周期与启动性能**四条主线，且多数 P0/P1 标注 `no-new-fix-pr`，**修复供给明显落后于问题报告**。

## 6. 功能请求与路线图信号

- **Android 接收预置的传入数据呼叫** — PR #154093（`feat(android)`），跨 docs/android/web-ui/gateway/cli，标记 `security-sensitive-changed`、`merge-risk` 多项，仍在 `needs proof`。
  https://github.com/openclaw/openclaw/pull/154093
- **Gateway 在 talk.catalog 中报告 stt-tts readiness 与 transport** — PR #165481，解决 Android 因 readiness 取自无关实时 provider 而拒绝可用原生 Talk 配置（`needs proof`）。
  https://github.com/openclaw/openclaw/pull/165481
- **依赖统一刷新** — PR #171658（`chore: refresh dependencies with seven-day release cutoff`），以固定七日窗口（截止 2026-10-07 02:36:46 UTC）全仓刷新依赖。
  https://github.com/openclaw/openclaw/pull/171658
- **Codex 组装期间保留已配置上下文预算** — PR #171359（`agents`，`ready for maintainer look`），修复原生模型上下文额度下目标/约束从 Codex 输入消失的问题。
  https://github.com/openclaw/openclaw/pull/171359
- **Slack 富文本日期保留 fallback** — PR #172185（Closes #172180）。
  https://github.com/openclaw/openclaw/pull/172185

**纳入下一版本的可能性**：依赖刷新（#171658）与 Android/语音就绪类改动（#154093、#165481）已具备清晰实现路径，但后者仍需 proof；Codex 上下文预算修复（#171359）评论稀少但状态已 `ready for maintainer look`，具备较快落地条件。

## 7. 用户反馈摘要

- **数据库与 WAL 是最大痛点**：Windows 单 gateway 主机上 WAL 涨至 2865 MB 且从不 checkpoint（#143524）；state DB 自动 checkpoint 自启动起从未完成（#164294）；464 MB 的 agent DB 零 freelist 页导致 `database is locked`（#148307）。用户明确感受到**日常交互可用性受损**。
- **插件捕获的性能与硬件代价**：用户实测每 CLI 命令重写 ~1.1–1.4 GB、每 Gateway 启动 ~6.5 GB，直指 SSD 磨损（#157989）；大型插件导致事件循环阻塞数分钟（#160959）；turn 中重载外部插件致主线程 40–70s 停顿（#163029）。
- **升级与启动体验恶化**：从 2026.9.9 升到 2026.10.1 后 ready 由 ~410s 升至 ~1030s（#168955）；Windows 多 agent 环境重启偶发挂起 30 分钟至 2 小时（#166894）。
- **消息投递可靠性**：Telegram 回复自身消息时文本丢失、agent 收到空 body（#158147）；durable outbound 卡在 `send_attempt_started` 并在重启后丢失（#126246）；subagent 最终答案被 truncated-by-retention 丢失（#155119）。
- **认证/模型层**：Retry-After 处理致 failover 轮换失效（#143274）；claude-cli 次身份认证不识别（#126429）。
- **UI 可用性**：Control UI 侧边栏 "More" 中 Cron/Skills/审批等入口可发现性差（#110379）；WebSocket 重连导致会话 terminated（#38091，已关闭）。

## 8. 待处理积压

长期未响应但影响重大的条目（按创建时间）：

- **#38091**（创建 2026-03-06）— UI WebSocket 重连导致会话 terminated。已 CLOSED 但仍长时间滞留。
  https://github.com/openclaw/openclaw/issues/38091
- **#48709**（创建 2026-03-17）— Gemini 2.5 Pro textSignature 膨胀致会话失败，stale 且仍 OPEN。
  https://github.com/openclaw/openclaw/issues/48709
- **#85246**（创建 2026-05-22）— UI Update 按钮在 npm global + launchd 场景破坏 Gateway（handoff 死锁），已关闭。
  https://github.com/openclaw/openclaw/issues/85246
- **#85333**（创建 2026-05-22）— `doctor --fix` 4–5x 性能回归，今日关闭但存续近 5 个月。
  https://github.com/openclaw/openclaw/issues/85333
- **#99659**（创建 2026-07-03）— companion 应用连接后 OOM kill，`clawsweeper:needs-info`，已滞留 3 个月+。
  https://github.com/openclaw/openclaw/issues/99659
- **#110379**（创建 2026-07-18）— Control UI "More" 可发现性差，`needs-product-decision`，滞留近 3 个月。
  https://github.com/openclaw/openclaw/issues/110379
- **#126246**（创建 2026-08-19）— Telegram durable outbound 卡 send_attempt_started 并在重启后丢失，stale 且需 live repro。
  https://github.com/openclaw/openclaw/issues/126246
- **#126429**（创建 2026-08-19）— CLI-backend 模型列表崩溃与认证问题，滞留在 product-decision 阶段。
  https://github.com/openclaw/openclaw/issues/126429

**PR 侧提醒**：**#154093**（2026-09-20 创建）体量大、跨模块且涉及安全边界，仍需 proof 与安全审查，长期未合入。
https://github.com/openclaw/openclaw/pull/154093

---

**维护者优先级建议（基于数据）**：优先处理 #143524、#160959、#148307 三条 P0 主线——它们同源（插件捕获 + SQLite/WAL），且均无 fix PR，是当前项目健康度的最大风险点。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据日期：2026-10-14 ｜ 覆盖 14 个 Claw 系及同类项目**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态已进入**"规模扩张与基础设施还债并行"**的阶段：一方面 Core 级项目（OpenClaw、Hermes、CoPaw、ZeroClaw）单日 PR 提交量普遍达数十条，功能与集成持续扩张；另一方面，**SQLite/WAL 膨胀、插件捕获开销、会话状态一致性、静默失败**等系统级问题在多个项目同时爆发，成为共享的技术债。生态已明显分层——头部项目在密集迭代与稳定性承压之间挣扎，而多个项目（NullClaw、IronClaw、TinyClaw、ZeptoClaw）已完全停摆，说明该赛道**进入者众多但持续投入门槛高**。同时，安全与隔离议题（端口暴露、路径穿越、跨 profile 泄漏、私有漏洞披露通道缺失）在多个项目集中出现，表明生态正从"能用"转向"可信可用"的关键过渡期。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃/关闭） | PR（待合并/合并·关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500 更新（329 活跃 / 171 关闭） | 500 更新（383 待合并 / 117 合并·关闭） | 无 | ⚠️ 开发吞吐高，但 P0 数据库/插件问题积压，修复供给落后 |
| **Hermes Agent** | 50（48 / 2） | 50（48 / 2） | **v0.22.0** | ⚠️ 高活跃但合并率极低（各 2 条），PR 积压 48 条 |
| **CoPaw** | 15（13 / 2） | 35（27 / 8） | **beta.5 + beta.6** | 🟡 发版收口期，27 条待合并，评审带宽为瓶颈 |
| **ZeroClaw** | 21（12 / 9） | 50（33 / 17） | 无 | 🟡 修复节奏稳健，33 条待合并含多条 XL 级，审阅拥堵 |
| **NanoBot** | 6（4 / 2） | 37（21 / 16） | 无 | 🟢 密集迭代，响应及时，主干质量与 UI 打磨并行 |
| **NanoClaw** | 2（1 / 1） | 9（7 / 2） | 无 | 🟡 中等偏上，核心可靠性修复推进，但修复型 PR 长挂 |
| **LobsterAI** | 0 | 9（0 / 9） | **2026.10.13** | 🟢 合并队列归零，多线并进，典型的内部迭代型工作日 |
| **PicoClaw** | 6（0 / 6，全 stale 关闭） | 2（1 / 1） | 无 | 🔴 积压整理日，社区输入中断，维护窗口保守 |
| **Moltis** | 0 | 2（2 / 0） | 无 | 🟡 低活跃，提案堆积（同作者 2 条同日更新） |
| **NullClaw / IronClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | ⚫ 24h 无活动 |

**关键观察**：OpenClaw 单日 Issue+PR 更新量（各 500）达到第二梯队（Hermes/ZeroClaw，各 50）的 10 倍，形成断层式领先。但**高吞吐 ≠ 高健康**——其合并率约 23%，且 P0 主线无 fix PR；相比之下 LobsterAI 以 9/9 的合并率实现了最干净的收口。

---

## 3. OpenClaw 在生态中的定位

**规模优势（断层领先）**
- 单日 Issues/PR 更新量各 500 条，是 Hermes、ZeroClaw 的 10 倍量级，社区规模在同类中无出其右。对比 Hermes v0.22.0 累计口径（约 2,520 contributors、约 6,080 merged PRs），OpenClaw 的**单日吞吐即接近其他项目一个发布周期的量级**。

**技术路线差异**
- **子模块化架构**：memory-wiki、gateway、controller-session、sidecars 等子系统边界清晰（今日合并集中在 memory-wiki 路径查找与 UI 桥接清理），便于并行演进，但也导致**跨子系统耦合问题**（如插件捕获同时牵动 WAL、启动阻塞、SSD 磨损三条主线）。
- **插件捕获机制是独有设计包袱**：多项目有插件体系，但**只有 OpenClaw 出现"插件源码捕获导致每 CLI 命令重写 1.1–1.4 GB、每次启动 6.5 GB"**的硬件级代价（#157989），并叠加 WAL 膨胀（#143524 实测 2865 MB）形成系统级问题簇。
- **平台覆盖广**：Android / Wear OS / Windows / Linux 全平台，且出现 #168955（Windows ready 从 ~410s 升至 ~1030s）、#166894（Windows 重启挂起 30 分钟–2 小时）等平台专属问题，反映其部署形态的复杂度远超同类。

**社区规模差距**
- Hermes 已有 v0.22.0 的成熟发布节奏与 2,520 contributors；CoPaw 有明确的 2.2.2 发布链条与 Release Duty 验证流程；OpenClaw 今日无发布，且 P0 问题标注 `no-new-fix-pr`，**规模领先但流程成熟度与修复供给落后于 Hermes/CoPaw**。

**结论**：OpenClaw 是生态中**体量最大、架构最复杂、技术债最重**的项目——它定义了这一品类的能力上限，也最先撞上了规模化部署的工程天花板。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话/状态持久化正确性** | OpenClaw(#143524 WAL 膨胀)、Hermes(#124273 会话 prune)、ZeroClaw(#11420 时间戳被覆写 / #11711 裁剪永久删轮次)、CoPaw(#8228 历史破 10 MB) | SQLite/WAL 生命周期管理、逐条消息保真、数据不丢失 |
| **Agent 循环失控与静默失败** | NanoClaw(#30 maxTurns 防失控，曾 32s 发 21 条重复消息)、OpenClaw(#138409 drain 死锁)、CoPaw(#8225 热重载取消 cron 无提示 / #8252 CancelledError 产物归零)、ZeroClaw(#11618 静默丢消息) | 循环上限、取消可观测、失败需记录发起方与原因 |
| **上下文/工具 schema 预算** | OpenClaw(#171359 Codex 上下文预算)、ZeroClaw(#5808 延迟内置工具 schema)、Hermes(#131743 Codex 长任务停滞) | 首轮即被 schema 挤占上下文、长任务早期 compaction |
| **安全与隔离边界** | NanoClaw(#2433 管理 API 绑 docker0)、Hermes(#138359 pm 路径穿越 / #85294 跨 profile 泄漏)、PicoClaw(#3405 无私有漏洞披露通道)、OpenClaw(插件捕获安全动机) | 默认安全配置、路径穿越、profile 隔离、披露流程 |
| **会话/群组服务端权威化** | Hermes(#95163 后端托管群组房间 / PR #106742 单一网关拥有所有会话)、Moltis(#1301 Chat 与 sub-agent 行为一致性)、OpenClaw(controller-session) | 从客户端编排转向服务端权威状态与可靠性 |
| **多智能体编排与权限约束** | Moltis(#1302 spawn 白名单 / #1301 路径对齐)、CoPaw(#8252 五角色舰队 + ChatWithAgent)、OpenClaw(subagent delivery) | spawn 目标白名单、coordinator/worker 配置一致性 |
| **外部工具/数据源集成** | NanoBot(Google Drive #6195 / Sheets #6188 / MCP 预设 134 个)、CoPaw(Tavily key #8174)、PicoClaw(Keenable / Sendblue)、ZeroClaw(A2A #11254) | 云盘读写、provider 扩展、协议标准化 |
| **内存/上下文性能 hot path** | OpenClaw(memory-wiki 路径查找 #171961/#164781)、NanoBot(#6192 每秒全量会话扫描) | 避免全量读取/vault 扫描、降低周期性开销 |

**共性判断**：生态的技术焦点已从"加功能"转向**"在规模化下保持正确性"**——持久化保真、失败可观测、上下文经济性、安全默认值，构成当前四大共享工程命题。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | CoPaw | ZeroClaw | NanoBot | LobsterAI |
|---|---|---|---|---|---|---|
| **功能侧重** | 全能助手 + 插件生态 | 学习型助手 + skills/群房间 | 多 agent 编排 + Console | 运行时/网关基础设施 | 办公自动化 + 工具扩展 | 桌面伴侣 + Office 编辑 |
| **目标用户** | 大规模个人/团队部署 | 重度依赖学习能力的用户 | 多智能体生产编排者 | 工程化/正确性敏感用户 | 办公场景用户 | 桌面端中文用户 |
| **技术架构关键差异** | 子模块化 + 插件捕获 + gateway | gateway 侧轮次驱动 + Curator 学习管理 | Console + Hub + 插件热重载 | Rust 系（session_sqlite.rs / infra） | Python（loop.py）+ WebUI | Electron 桌面 + OpenClaw 内核 |
| **平台广度** | Android/Wear/Windows/Linux | Desktop(macOS/Win) + 多 IM | Desktop + Docker/Hub | TUI(ZeroCode) + 网关 | WebUI | Windows 优化 + macOS |
| **独有信号** | 硬件级插件开销 | "我用它因为它会学习" | Release Duty 发版验证流程 | A2A 协议 crate 化 | MCP 预设 134 个 | Office 文档编辑 + 埋点体系 |

**关键差异点**
- **OpenClaw vs Hermes**：前者是"平台型全能体"，后者是"学习型专精体"——Hermes 用户明确表示"我用 Hermes 是因为它会学习"（#137258），希望 skills 自动化而非审批队列，这是差异化护城河。
- **CoPaw vs ZeroClaw**：两者均以工程正确性为重心，但 CoPaw 偏应用层（Console/多 agent 舰队/飞书入口），ZeroClaw 偏底层（A2A 协议、WASM 插件宿主、SQLite 后端）。
- **NanoBot vs LobsterAI**：均面向办公场景，NanoBot 走工具扩展（Drive/Sheets）路线，LobsterAI 走桌面原生体验（划词工具栏、TTS、Office 编辑）路线。
- **PicoClaw**：唯一明确面向硬件/嵌入式语境的项目（sipeed 出身，Web UI 为主入口），但当前停摆。

---

## 6. 社区热度与成熟度

**活跃度分层**

- **第一层（断层领先）**：OpenClaw（各 500 更新）——体量独一档，但健康度承压。
- **第二层（高强度迭代）**：Hermes（50 更新 + 发布）、ZeroClaw（71 更新）、CoPaw（50 更新 + 双 beta）。
- **第三层（中等活跃）**：NanoBot（43）、NanoClaw（11）、LobsterAI（9 但全合并）。
- **第四层（低频/停摆）**：PicoClaw（清理日）、Moltis（2 条提案）、NullClaw/IronClaw/TinyClaw/ZeptoClaw（零活动）。

**成熟度阶段划分**

| 阶段 | 项目 | 特征 |
|---|---|---|
| **快速迭代期** | NanoBot、CoPaw、ZeroClaw、Hermes | 功能密集合入，架构重构在途（NanoBot #5943 SQLite 化、ZeroClaw #11712 A2A、Hermes #106742 单一网关） |
| **迭代+承压并存** | OpenClaw | 吞吐最高但 P0 积压，处于"扩张过载"临界点 |
| **质量巩固期** | LobsterAI、NanoClaw | 合并收敛、打磨细节（划词菜单/TTS/UTF-8），或专注可靠性修复（#3918 回复可靠性） |
| **停滞/衰退** | PicoClaw、Moltis、四个零活动项目 | 社区输入中断或提案堆积，维护窗口保守或停摆 |

**风险提示**：Hermes（合并率各 2/50）与 ZeroClaw（33 待合并含多条 XL）的**评审带宽已成项目健康度的首要瓶颈**；PicoClaw 出现"高质量输入（含复现步骤的 #3404）被 stale 关闭"，存在贡献者流失风险。

---

## 7. 值得关注的趋势信号

**信号一：Agent 已进入生产环境，失控成本真实化**
- NanoClaw #30（32s 发 21 条重复消息）、OpenClaw #138409（插件更新死锁）、CoPaw #8252（多 agent 舰队产物归零）共同表明：**agent 已在真实生产部署**，循环上限、取消可观测、失败归因成为刚需。
- **对开发者**：必须在设计初期内置 `maxTurns`、取消原因记录、失败可观测性，而非事后补丁。

**信号二：静默失败是信任杀手，可观测性优先级上升**
- CoPaw #8225/#8252 反复强调"无任何提示""不记录发起方与原因"；ZeroClaw #11618 用户输入被静默丢弃。多个项目独立提出同一诉求，说明**"失败要可见、要可归因"正成为行业共识**。

**信号三：上下文经济性成为架构级议题**
- ZeroClaw #5808（工具 schema 挤占 32K 上下文的固定前缀）、OpenClaw #171359（Codex 上下文预算）、Hermes #131743（Codex 长任务 compaction）三项目独立撞上同一问题。**工具 schema 延迟加载 / 上下文预算管理**将成为下一轮架构优化热点。

**信号四：持久化正确性从"能存"转向"存得对"**
- ZeroClaw #11420（时间戳被覆写）、#11711（裁剪永久删除轮次）、OpenClaw #143524（WAL 从不 checkpoint）、NanoBot #5943（JSONL→SQLite 权威存储重构）——**数据保真、审计可追溯、备份可移植**成为规模化部署的前置条件。

**信号五：安全默认值缺失是系统性风险**
- NanoClaw #2433（管理 API 绑 docker0）、Hermes #138359（pm 路径穿越到任意 rmtree，作者已验证）、#85294（跨 profile 泄漏）、PicoClaw #3405（无私有漏洞披露通道）——四个项目独立出现安全边界问题。**"默认安全"应成为发行前的强制检查项**。

**信号六：服务端权威状态是群组/多端协作的方向**
- Hermes #95163（后端托管群组房间 + 权威日志）、PR #106742（单一网关拥有所有本地会话）、CoPaw（chat turn 跨移动端发起）、NanoBot（process_direct 与生命周期缺口）——**从客户端编排转向网关权威**是明确的技术走向。

**信号七：评审带宽成为开源项目新瓶颈**
- Hermes（48 待合并 / 合并 2）、ZeroClaw（33 待合并）、CoPaw（27 待合并，含 6 条 XL 级）、NanoClaw（#2899 挂 3.5 个月）、PicoClaw（PR #3416 创建 9 天即 stale）——**高提交量 + 低合并率**成为多个项目的共同特征。建议采用"小修复优先清空 + 与新 Bug 相关的 PR 插队"策略。

---

**总体结论**：该生态正处于**"能力扩张 → 工程收敛"的转折点**。OpenClaw 以断层规模定义了品类上限，但也是技术债最重的警示样本；Hermes/CoPaw/ZeroClaw 在三层架构、网关权威、协议标准化上各有独到探索；而多个项目的停摆与评审拥堵提示——**这一赛道的持续投入门槛正在快速抬升，能否管理"规模与正确性"的张力，将决定项目的长期存活**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报（2026-10-14）

## 1. 今日速览

NanoBot 今日保持高活跃度：过去 24 小时 Issues 更新 6 条（4 条新开/活跃、2 条关闭），PR 更新高达 37 条（21 条待合并、16 条已合并/关闭），无新版本发布。今日工作重心集中在 WebUI 稳定性修复、会话状态管理重构以及工具生态扩展（Google Drive/Sheets）。社区同时出现了围绕"空闲压缩（idle compaction）误归档运行中会话"的重复报告，且已有对应修复 PR 提交，响应及时。整体来看，项目处于密集迭代期，主干代码质量与 UI 细节打磨并行推进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 主要集中在 WebUI 与 provider 层的修复和性能优化：

- **PR #6212 [CLOSED]** 移除 WebUI 子任务轮询与加载错误 UI，消除网关关闭后重复的错误提示。链接：HKUDS/nanobot PR #6212
- **PR #6210 [CLOSED]** 修复 Kimi K3 reasoning-effort 处理，保留 `low`/`high`/`max` 三档并与官方文档同步。链接：HKUDS/nanobot PR #6210
- **PR #6208 [CLOSED]** 性能优化：WebUI 改为流式有界文件 diff 预览，避免大文件编辑时全量物化 diff 与拷贝 hunk。链接：HKUDS/nanobot PR #6208
- **PR #6209 [CLOSED]** 修复 WebUI 实时活动标识（sheen）静止问题。链接：HKUDS/nanobot PR #6209
- **PR #6198 [CLOSED]** 修复代理/Cloudflare 隧道下附件上传因 `credentials: omit` 无法携带同源 cookie 的问题。链接：HKUDS/nanobot PR #6198
- **PR #6205 [CLOSED]** 修复 KaTeX 编号公式标签与公式符号重叠的渲染问题。链接：HKUDS/nanobot PR #6205
- **PR #6206 [CLOSED]** 重构转录模块，统一复用 `_request_json_with_retry` 的 JSON 请求重试逻辑。链接：HKUDS/nanobot PR #6206
- **PR #6207 [CLOSED]** 修复 Markdown 删除线解析：要求双波浪线 `~~` 才触发删除线，避免 `(1)~(6)` 等区间误伤正文。链接：HKUDS/nanobot PR #6207
- **PR #5875 [CLOSED]** 新增 IO Intelligence (io.net) provider（由 io.net 官方贡献）。链接：HKUDS/nanobot PR #5875

整体看，今日合并以"修复+打磨"为主，功能侧向前推进的有 provider 新增与转录重构；核心的会话状态 SQLite 化重构（#5943）仍在开放状态。

## 4. 社区热点

今日评论/互动数据在数据源中均标注为 `undefined` 或 0，无法依据评论数排序，以下按议题关注度与重复性列出：

- **Issue #6214 / #6213**（同一问题重复提交，一开一关，作者 Apageoflove）：空闲压缩守卫漏掉通过 `process_direct` 进入的轮次，可能导致仍在运行的会话被归档，已在 Linux + Python 3.12、main@cdb6210 复现。链接：HKUDS/nanobot Issue #6214 ｜ #6213
- **PR #5943**（chengyongru，自 2026-09-27 持续更新至今日）：将会话状态所有权集中到 SQLite，取代 JSONL 作为权威存储。这是长期高优先级重构，属项目架构层的关键动作。链接：HKUDS/nanobot PR #5943
- **PR #6216**（chengyongru）：将 WebUI 的 MCP 预设从 16 个扩展到 134 个，涉及大量服务连接配置。链接：HKUDS/nanobot PR #6216

背后诉求：一方面是并发/生命周期管理的正确性（空闲压缩误伤运行中会话），另一方面是降低用户的接入成本（MCP 预设、provider 扩展、云托管试用）。

## 5. Bug 与稳定性

按严重程度排列：

1. **【高】空闲压缩误归档运行中会话** — Issue #6214（OPEN）/ #6213（CLOSED），涉及 `_check_expired_sessions_if_due` 使用 `active_session_keys=self._pending_queues.keys()`，但 `process_direct` 不走该队列，直接轮次超过 idle TTL 时可能被压缩，最终保存可能覆盖摘要。**已有 fix PR #6215（OPEN）** 修复：在直接轮次期间跳过空闲压缩。链接：HKUDS/nanobot Issue #6214 ｜ PR #6215
2. **【中】`AutoCompact.check_expired` 每 1 秒全量会话扫描** — Issue #6192（OPEN），`AgentLoop.run` 在每次 1.0s 的 `bus.consume_inbound()` 超时后调用 `auto_compact.check_expired(...)`，后者调用 `SessionManager.list_sessions()`，造成周期性全量扫描（nanobot-ai 0.3.0，`nanobot/agent/loop.py` 约 1032 行）。**暂无 fix PR**。链接：HUDS/nanobot Issue #6192
3. **【低】WebUI 连接中断后的轮次状态不一致** — PR #6211（OPEN）修复：连接中断可能移除运行中轮次的 spinner 并显示更新点，切换话题后返回可能残留部分答案。**已有 fix PR**。链接：HKUDS/nanobot PR #6211

## 6. 功能请求与路线图信号

- **Google Drive 只读工具** — Issue #6187（OPEN）提出 `google_drive` 工具需求；对应 **PR #6195（OPEN）** 已实现：列出文件夹、搜索、读取元数据、下载文件到工作区，支持 Google Docs/Sheets/Slides。极可能进入下一版本。链接：Issue #6187 ｜ PR #6195
- **Google Sheets 读写工具** — Issue #6188（OPEN）提出读取与更新共享电子表格，目前**尚无对应 PR**，是待评估的候选功能。链接：HUDS/nanobot Issue #6188
- **MCP 服务预设扩展** — PR #6216（OPEN）：新增 118 个预设（共 134 个），覆盖远程 OAuth、API-key 与本地服务器连接。链接：HUDS/nanobot PR #6216
- **托管安装与可恢复的应用内更新** — PR #6168（OPEN）：打通托管安装、精确版本更新、恢复与 WebUI，延续 #5817 与 #6154 的工作。链接：HUDS/nanobot PR #6168

## 7. 用户反馈摘要

- **并发正确性痛点**：Apageoflove 在 Linux/Python 3.12 环境下稳定复现空闲压缩误归档问题，说明直接入口（`process_direct`）与会话生命周期管理之间存在真实缺口，影响数据安全（最终保存可能覆盖摘要）。
- **性能担忧**：hsinchao-athena 指出 `AutoCompact.check_expired` 在每次 1 秒空闲 tick 做全量会话扫描，随会话规模增长可能带来持续开销。
- **数据接入场景**：gianfrancodemarco 反映大量小型跟踪数据（开销、任务清单、库存）存放在电子表格中，而 nanobot 无法读写；工作文件大量位于 Google Drive，目前需手动下载放入工作区后才能被 agent 读取。代表真实办公自动化场景。
- **部署环境反馈**：DKlaper 的 PR #6198 反映在代理/Cloudflare 隧道部署下附件上传因 cookie 未携带而不可用，属边缘部署场景的实际阻塞。
- **推广诉求**：agentrohit37（Issue #6200，已关闭）请求为 nanobot 增加免费云托管入口与 README 链接，代表外部服务方的合作/导流意图。

## 8. 待处理积压

- **PR #5943**（chengyongru）：自 2026-09-27 创建，至 2026-10-14 仍 OPEN，已持续约 17 天。会话状态 SQLite 化是架构级重构，涉及 JSONL 到 SQLite 权威存储的迁移与运行时状态收敛，建议优先安排评审以免长期悬置。链接：HUDS/nanobot PR #5943
- **PR #5875**（smiraldr，io.net 官方贡献）：自 2026-09-23 创建，今日关闭。若属合并则已落地，若属关闭需确认是否驳回，避免影响外部贡献者体验（数据源未明确标注合并或拒绝）。链接：HUDS/nanobot PR #5875
- **Issue #6192**（hsinchao-athena）：1 秒 tick 全量扫描的性能问题，目前无对应 fix PR，建议评估。链接：HUDS/nanobot Issue #6192

---

**说明**：以上内容均基于所提供数据，评论数/👍 字段在数据源中多为 `undefined` 或 0，故未作互动量排序；PR #5875 与 #6213、#6200 的关闭状态未标注是合并还是拒绝，相关表述已作保留处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-10-14

## 1. 今日速览

项目今日处于**高活跃状态**：过去24小时有 50 条 Issue 更新（新开/活跃 48，关闭 2）与 50 条 PR 更新（待合并 48，合并/关闭 2），并发布 v0.22.0。社区讨论主要集中在权限、会话隔离、网关稳定性和安装更新流程上，多条 P0/P1 级稳定性问题仍在开放。整体看，功能演进与稳定性修复并行推进，但**待合并 PR 积压明显**（48 条），且存在多条高风险标记（sweeper:risk-*）的会话状态与消息投递问题。合并/关闭比例偏低（各 2 条），说明今日以"提交与讨论"为主，落地节奏较慢。

## 2. 版本发布

**v0.22.0 — The Threshold Release**（发布日期：2026-10-13）

- 自 v0.21.0 以来的规模：约 24,200 commits · 约 6,080 merged PRs · 约 15,600 files changed · 约 2,045,000 insertions · 约 1,140,000 deletions · 约 7,180 issues closed · 约 2,520 contributors
- 发布说明将本版本定位为"Threshold Release"（Hermes 为门槛之神）。

> 注：所提供的发布说明正文被截断，**未包含具体的破坏性变更与迁移注意事项**信息，因此本日报不做臆测。维护者若需对外沟通，建议补充完整的 breaking changes 与升级指引。

## 3. 项目进展

今日合并/关闭的条目数量有限（Issue 关闭 2 条、PR 合并/关闭 2 条），其中可确认的重要关闭项：

- **Issue #17685 [CLOSED]** — `delegate_task` 的 per-task model override 被静默忽略（子代理始终继承父代理模型）。该问题自 2026-04-30 提出后于今日关闭，修复了批量与单任务两种模式下的模型覆盖行为。
  链接：NousResearch/hermes-agent Issue #17685

其余 PR 均处于待合并状态（48 条），尚无明确合并记录。整体而言，项目今日"向前迈进"主要体现在 v0.22.0 的发布，而非当日合并量。

## 4. 社区热点

按评论数与 👍 排序的活跃讨论：

- **Issue #131859**（40 条评论，P2，blocked）— 通过 API 无法创建 PR，报 `CreatePullRequest` 权限错误；issue 创建与 fork PR 仍正常，且**仅影响该账号**。高评论数说明这是影响外部贡献者工作流的关键阻塞。
  链接：NousResearch/hermes-agent Issue #131859
- **Issue #95163**（17 条评论，👍 2，needs-decision）— 请求"后端托管的群组房间"：网关侧轮次驱动 + 权威房间日志，替代完全由桌面渲染器编排的 Bot Mode 群聊。
  链接：NousResearch/hermes-agent Issue #95163
- **Issue #122555**（8 条评论，P1）— `pm` 激活为其它解释器构建的依赖环境，**缺少 ABI 检查**，并丢弃当前运行解释器自身的 site-packages。
  链接：NousResearch/hermes-agent Issue #122555
- **Issue #131743**（6 条评论，P2，needs-repro）— Codex 长任务首次实质性进展停滞（约300秒），早期 compaction 与改善相关。
  链接：NousResearch/hermes-agent Issue #131743
- **Issue #17685**（6 条评论，👍 1）— 已关闭，见上文。
  链接：NousResearch/hermes-agent Issue #17685

**背后诉求**：外部贡献者对仓库权限/协作流程敏感；用户希望群聊编排具备服务端权威状态与可靠性；安装/依赖管理层（pm）的解释器兼容性与安全边界是反复出现的痛点。

## 5. Bug 与稳定性

按严重程度排列（P0 最高）：

- **P0 — Issue #138343**：网关在不洁退出 + pid 回收后进入重启循环，导致 cron 搁浅；陈旧的异步委托投递消耗 provider 配额（Linux 源码安装，2026-10-13/14 观测）。暂无关联 fix PR。
  链接：NousResearch/hermes-agent Issue #138343
- **P0 — PR #126167**（待合并）：`fix(gateway): preserve prompt pins and pending turn ownership`，Fixes #126109。已提交但尚未合并。
  链接：NousResearch/hermes-agent PR #126167
- **P1 — Issue #122555**：pm 无 ABI 检查激活错误解释器环境并丢弃 site-packages。暂无 fix PR。
  链接：NousResearch/hermes-agent Issue #122555
- **P1 — Issue #125607**：`ensure_import` 在网关内提示 stdin 导致事件循环挂起（tmux 重启循环下的 watchdog 崩溃循环）。暂无 fix PR。
  链接：NousResearch/hermes-agent Issue #125607
- **P1 — PR #124273**（待合并）：`fix(sessions): proactive prune rewrites only the changed rows, in place`，实现 #124102 建议 (c)。
  链接：NousResearch/hermes-agent PR #124273
- **P2 — Issue #138359 [Security]**：`pm` 的 `lock.json` sha256 未做形状校验 → 路径穿越至任意 `rmtree`（已验证）+ facts.json 环境注入 + 下载器 loopback 门绕过。**已由作者验证**，建议优先处理。
  链接：NousResearch/hermes-agent Issue #138359
- **P2 — Issue #133220**：macOS 每次应用内更新均报失败——更新后 dashboard 刷新在固定端口杀掉 Desktop 后端且无法重拉。
  链接：NousResearch/hermes-agent Issue #133220
- **P2 — Issue #85294**：Desktop 跨 profile 提示泄漏——一个 profile 的后端恢复并写入另一 profile 的会话。暂无 fix PR。
  链接：NousResearch/hermes-agent Issue #85294
- **P2 — Issue #136988 [Windows]**：Desktop 重启循环，本地后端因就绪探测超时（MCP 发现期间）被杀，临时方案 `mcp_discovery_timeout=1.0`。
  链接：NousResearch/hermes-agent Issue #136988
- **P2 — Issue #138388**：`/api/status` 一秒健康回退在 executor `__exit__` 中超出截止时间。
  链接：NousResearch/hermes-agent Issue #138388
- **P2 — Issue #138373**：`execute_code` 会话内核中，`web_extract` 在一次空 RPC 回复后返回上一次调用的页面。
  链接：NousResearch/hermes-agent Issue #138373
- **P2 — Issue #131743**：见上，Codex 长任务停滞（needs-repro）。
  链接：NousResearch/hermes-agent Issue #131743

已有对应 fix PR 的项：#126167、#124273。其余多为开放且无明确修复 PR。

## 6. 功能请求与路线图信号

- **Issue #95163**（needs-decision）：后端托管的群组房间 + 网关侧轮次驱动与权威房间日志。相关 PR **#106742**（"One gateway owns every local session"）正推进"单一网关拥有所有本地会话"的统一架构，二者方向一致，可能影响后续版本会话编排设计。
  链接：NousResearch/hermes-agent Issue #95163 · PR https://github.com/NousResearch/hermes-agent/pull/106742
- **Issue #137258**：Skills tracker —— 上游自有 bundled skills、用户可控学习。相关 PR **#138409**（`feat(skills): install and inspect hub skills at an explicit commit`）已在推进不可变 commit 选择，说明 skills 供给链方向正在落地。
  链接：NousResearch/hermes-agent Issue #137258 · PR #138409
- **Issue #15793**：为 Hermes Agent 文档添加 AI 助手（4 条评论），指向文档体量大、查找困难的实际体验。
  链接：NousResearch/hermes-agent Issue #15793
- **PR #138001**（待合并）：向插件目录添加 `opencode-shepherd`（纯 skills 插件，无 Python 加载）。
  链接：NousResearch/hermes-agent PR #138001

## 7. 用户反馈摘要

- **协作流程受阻**：Issue #131859 显示部分账号无法通过 API 创建 PR，直接阻断外部贡献路径（40 条评论为今日最高）。
- **安装/更新体验不佳**：macOS 每次应用内更新均失败（#133220）、Windows Desktop 重启循环（#136988），跨平台更新链路是集中抱怨点。
- **隔离与安全担忧**：跨 profile 提示泄漏（#85294）与 pm 路径穿越/注入（#138359）反映用户对会话/环境边界的强烈关注。
- **学习型使用场景**：Issue #137258 用户明确表示"我用 Hermes 是因为它会学习"，其非 bundled skills 多由 Curator 管理，不希望变成权限审批队列——体现对自动化学习体验的认可与对额外摩擦的抵触。
- **文档发现性**：Issue #15793 称文档"非常详尽"，但正因如此偏深，需要一个 AI 助手辅助检索——属于"满意但求更好"的正向反馈。
- **平台细节问题**：Slack Socket Mode 重连泄漏重试（#83662）、Jira 连接器 OAuth 缺 6 个 scopes（#138019）、1Password vault fill 无法确定页面来源（#132492）、rss-feeds 依赖 Python ≥3.11 却用 `python3` 运行（#138239）。

## 8. 待处理积压

- **Issue #15793**（创建 2026-04-25，约 6 个月）— 文档 AI 助手，4 条评论，仍 OPEN。
  链接：NousResearch/hermes-agent Issue #15793
- **Issue #17685**（创建 2026-04-30）— 今日已关闭，不再计入积压。
- **Issue #95163**（创建 2026-08-26，约 7 周）— 后端托管群组房间，needs-decision，17 条评论仍无结论。
  链接：NousResearch/hermes-agent Issue #95163
- **Issue #83662**（创建 2026-08-11，约 2 个月）— Slack Socket Mode 重连泄漏连接循环。
  链接：NousResearch/hermes-agent Issue #83662
- **Issue #85294**（创建 2026-08-13，约 2 个月）— Desktop 跨 profile 提示泄漏（会话隔离破坏），无 fix PR。
  链接：NousResearch/hermes-agent Issue #85294
- **PR #106742**（创建 2026-09-09，约 5 周）— "One gateway owns every local session"，超大范围重构，带 needs-decision 与大量 sweeper 风险标记，仍待合并。
  链接：NousResearch/hermes-agent PR #106742
- **PR #114026**（创建 2026-09-17，约 4 周）— fork 同步：CI 稳定化、依赖安全修复、Windows/desktop 可靠性，涉及 137 commits，仍待合并。
  链接：NousResearch/hermes-agent PR #114026
- **PR #124273 / #126167**（P1 级修复，创建于 2026-09-26 / 09-28）— 均已提交但未合并，建议优先评审以缓解会话/gateway 稳定性风险。

---
*本日报仅基于所提供的 GitHub 数据整理，未对缺失信息（如 v0.22.0 完整发布说明、PR 评论数）做推测。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-14

## 1. 今日速览

过去24小时 PicoClaw 无新版本发布，社区活动集中在**存量 Issue 清理**：6 条 Issues 全部关闭、0 条新开，均为带 `stale` 标签的长期挂起条目；PR 侧 1 条待合并、1 条关闭。整体看，今日是一次典型的**积压整理日**，而非功能推进日——关闭动作多于合并动作，说明维护窗口偏保守。活跃度评估：**低至中等**，社区输入中断，但积压清理对项目健康度有正向意义。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

- **[CLOSED] PR #3370 — feat(tools): add Keenable web search provider**
  https://github.com/sipeed/picoclaw/pull/3370
  为 `web_search` 工具新增 Keenable 作为搜索提供方，其特点是**全新安装下无需 API key 即可工作**（设置 `tools.web.keenable.enabled` 为 `true` 后调用 Keenable 公共端点 `POST /v1/search/pub...`）。该 PR 已关闭，从其摘要描述看属于可降低新用户上手门槛的工具层扩展。

- **[OPEN] PR #3416 — feat(channels): add Sendblue iMessage and SMS transport**
  https://github.com/sipeed/picoclaw/pull/3416
  仍在待合并状态。为渠道层新增原生 Sendblue 通道，让用户可通过 iMessage/SMS 与 agent 对话并在同一手机上收到回复；PR 描述包含免费账号开通、真人手机/联系人验证、模型前置条件等完整指引。

**整体推进幅度**：今日无合并动作披露，项目功能面向前迈进有限。渠道（channels）与工具（tools）两条扩展线各有一项进展，但一项待审、一项关闭，尚未形成可交付增量。

---

## 4. 社区热点

今日讨论与反应最集中的条目：

1. **Issue #440 — Replace hard iteration limit with context-window bounding and loop detection**（9 条评论，今日最高）
   https://github.com/sipeed/picoclaw/issues/440
   提出以上下文窗口约束和循环检测替代 `max_tool_iterations: 20` 硬上限，理由是硬限制会让复杂任务在中途以 "I've completed processing but have no response to give" 失败。作者 drpedapati，自 2026-02-18 创建、10-13 更新后关闭。**诉求核心**：agent 循环控制策略从"计数封顶"转向"语义感知"，是架构层信号。

2. **Issue #3405 — Please enable private vulnerability reporting**（👍 1，今日唯一带正向反应的条目）
   https://github.com/sipeed/picoclaw/issues/3405
   报告者称发现若干安全问题但仓库未开启 GitHub 私有漏洞报告、且无 `SECURITY.md` 与安全联系方式，因而无法私下披露。

3. **Issue #3404 — Reliability fixes with reproducers (wave 1)**（2 条评论）
   https://github.com/sipeed/picoclaw/issues/3404
   系统梳理 agent loop、channels manager、config、updater 四个核心模块的可复现 bug，基于 `main` (bbf6893) 与 v0.3.1 验证。

---

## 5. Bug 与稳定性

今日无新开 Bug，以下为已关闭但值得回溯的稳定性相关条目，按严重程度排列：

| 严重度 | 条目 | 状态 | 是否有 fix PR |
|---|---|---|---|
| 高（安全披露通道缺失） | Issue #3405 — 私有漏洞报告未启用，无 `SECURITY.md` | CLOSED | 数据中未见对应 fix PR |
| 高（可复现核心 bug 集合） | Issue #3404 — agent loop / channels / config / updater 可靠性问题 wave 1 | CLOSED | 数据中未见对应 fix PR |
| 中（UI 状态不一致） | Issue #3407 — Web UI 会话在模型思考期间从列表消失（ghost session） | CLOSED | 数据中未见对应 fix PR |

需提示：以上三条均标注 `stale` 后被关闭，**关闭不等于修复**。Issue #3404 明确指出部分问题"此前被报告甚至修复过但复现仍存在"，Issue #3405 涉及安全披露流程缺失，建议维护者确认关闭理由并补充 fix 记录。

---

## 6. 功能请求与路线图信号

- **Issue #440**（已关闭）— 用上下文窗口边界 + 循环检测取代硬迭代上限。属 agent 核心调度策略变更，改动面涉及配置与运行时，若被采纳将影响 `max_tool_iterations` 相关配置语义。
- **Issue #3406**（已关闭）— Web UI 三项体验改进：更清晰的工作中指示器、手动/渠道会话分离、支持归档的会话列表。与 #3407 的 ghost session 属同一作者的连续反馈，指向 Web UI 正成为主要交互入口这一事实。
- **Issue #3397**（已关闭）— 将 Tsubasa 加入现有 OpenAI 兼容 provider 目录，当前仅能通过自定义 API base 的 `openai` 条目间接选择。

结合已有 PR 判断：**PR #3416（Sendblue iMessage/SMS 通道）** 是唯一处于待合并状态的用户可感知功能，落地概率相对最高；provider 目录类需求（#3397）实现成本低、边界清晰，若维护者恢复活跃则较易纳入后续版本。其余条目今日均以关闭收尾，短期纳入下一版本的信号不明显。

---

## 7. 用户反馈摘要

- **痛点：复杂任务被硬限制打断。** Issue #440 反映 `max_tool_iterations: 20` 让合法工作流在交付前失败，并伴随无意义的 "I've completed processing but have no response to give" 提示——用户对失败原因不可见。
- **痛点：Web UI 状态不可信。** Issue #3407 描述新会话在模型思考期间无声消失，用户所看的聊天已不在列表中；Issue #3406 进一步指出"它还在思考吗？"缺乏明确反馈。
- **使用场景：Web UI 已成为日常主要聊天入口。** Issue #3406 明确表述 launcher dashboard 与 `web/frontend` 是当前 day-to-day 的主要使用方式，因此上述体验瑕疵对真实使用的挫败感被放大。
- **诉求：安全披露通道缺失。** Issue #3405 中用户希望私下报告安全问题但无途径，只能转向公开渠道，反映流程层面的不满意。
- **满意度信号：** 数据中未出现明确的正面反馈条目；今日唯一 👍 出现在安全披露请求上（1 个），侧面说明该诉求获得认同。

---

## 8. 待处理积压

- **PR #3416 — Sendblue iMessage/SMS 通道**（OPEN，创建于 2026-10-05，已带 `stale` 标签）
  https://github.com/sipeed/picoclaw/pull/3416
  创建仅 9 天即被标记 `stale`，是今日唯一仍开放的变更请求，也是渠道层唯一的待合并功能。建议优先评审，避免用户可感知的功能因标签机制被误伤。

- **Issue #440 — 迭代上限与循环检测**（2026-02-18 创建，积压约 8 个月后关闭）
  https://github.com/sipeed/picoclaw/issues/440
  生命周期最长、讨论最充分（9 条评论），却以关闭收尾。建议维护者补充关闭理由或转为设计讨论，否则同类需求可能重复提出。

- **Issue #3405 — 私有漏洞报告**（2026-09-28 创建）
  https://github.com/sipeed/picoclaw/issues/3405
  涉及 `SECURITY.md` 与漏洞披露流程的缺失，属低成本高价值治理项，建议即使关闭也明确后续动作。

- **Issue #3404 — 可靠性修复 wave 1**（2026-09-28 创建）
  https://github.com/sipeed/picoclaw/issues/3404
  提供可复现步骤与基线提交号（bbf6893 / v0.3.1），是高质量输入。若其中的 bug 实际未修复，建议重新开启或拆分为可跟踪条目。

- **Issue #3407 / #3406 — Web UI 系列反馈**（2026-09-29 创建）
  https://github.com/sipeed/picoclaw/issues/3407
  https://github.com/sipeed/picoclaw/issues/3406
  同一作者在同一日提交的关联问题，反映 Web UI 作为主入口的成熟度不足，建议合并评估而非各自关闭。

---

*说明：本报告所有条目、状态、评论数、时间与链接均来自所提供的 GitHub 数据；未提供的信息（如合并提交内容、关闭原因、后续修复 PR）未作推断。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-14

## 1. 今日速览

过去 24 小时项目活跃度中等偏上：9 条 PR 有更新（7 条待合并、2 条已合并/关闭），2 条 Issue 有更新（1 新开、1 关闭），无新版本发布。当日最值得关注的是安全类 Issue #2433 被标记为 `priority/high` 并持续活跃，以及 #30 关于 agent 循环失控导致生产事故的修复被正式关闭。合并/关闭侧主要来自依赖升级与 agent-runner 回复可靠性修复，整体属于"维护清理 + 稳定性加固"的一天。长时间挂起的高价值 PR（如 #3596、#3597、#3674、#3503）仍在等待评审，是当前项目推进的瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 2 条 PR：

- **PR #3918 [CLOSED]** `fix(agent-runner): never lose or repeat a reply around send_message` — 由核心团队成员 glifocat 提交。修复了 agent 在 `send_message` 前后丢失或重复回复的问题，同时覆盖流式提供方（逐条发送）与回合结束型提供方（从最终答案发送）两种模式。属于直接影响对话可靠性的核心修复，价值较高。
  https://github.com/nanocoai/nanoclaw/pull/3918
- **PR #4067 [CLOSED]** `build(deps-dev): bump vitest from 4.1.4 to 4.1.11` — Dependabot 自动依赖升级（开发依赖），常规维护。
  https://github.com/nanocoai/nanoclaw/pull/4067

整体看，项目在"可靠性"方向上向前推进了一步，但今日无功能级合入。

## 4. 社区热点

- **Issue #2433 [OPEN] [priority/high]** `fix(setup/onecli): restrict OneCLI admin API and Postgres to loopback after install`（评论 1，作者 glifocat，创建 2026-05-12，更新 2026-10-14）
  安全相关问题：在裸金属 Linux 上，OneCLI 安装器自动探测 `docker0` 网桥 IP，并将三个已发布端口全部绑定到该地址，其中包含管理 API（`:10254`）与 Postgres（`:5432`），而不仅是代理网关（`:10255`）。这属于默认配置下的暴露风险，被列为高优先级。
  https://github.com/nanocoai/nanoclaw/issues/2433
- **Issue #30 [CLOSED]** `fix: Add maxTurns limit to prevent agent loop runaway`（评论 3，👍 1）
  讨论了 Claude Agent SDK 的 `query()` 未传 `maxTurns` 导致无限循环，曾引发生产事故——agent 在 32 秒内发出 21 条重复消息。该 Issue 是今日评论数最多的一条，反映出社区对 agent 失控风险的持续关注。
  https://github.com/nanocoai/nanoclaw/issues/30

社区诉求集中在两点：**默认安全配置**（端口暴露）与**agent 运行的失控防护**（循环上限）。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — OneCLI 安装后管理 API 与 Postgres 绑定到 `docker0` 而非 loopback**（Issue #2433，OPEN，`priority/high`）
   风险：管理接口与数据库在裸金属环境下可达范围超出预期。
   是否已有 fix PR：**未见对应 fix PR**（今日 PR 列表中无关联条目）。
   https://github.com/nanocoai/nanoclaw/issues/2433
2. **中 — Agent 循环失控导致重复消息**（Issue #30，已关闭）
   曾造成 32 秒内 21 条重复消息的生产事故，修复方式为增加 `maxTurns` 限制。
   是否已有 fix PR：问题已关闭，视为已处理。
   https://github.com/nanocoai/nanoclaw/issues/30
3. **中（待合并 fix）— Discord DM 审批卡片所有按钮均被路由为 reject**（PR #2899，OPEN，自 2026-07-01 起）
   根因是 `@chat-adapter/discord` 将按钮 `custom_id` 编码为带换行分隔符的 `<actionId>\n<value>`，Gateway 交互解析前未剥离换行后缀。已有 fix PR，但已挂起约 3 个月。
   https://github.com/nanocoai/nanoclaw/pull/2899
4. **中（待合并 fix）— Teams 出站文件缺少 mime type 被拒收**（PR #3674，OPEN）
   https://github.com/nanocoai/nanoclaw/pull/3674
5. **中（待合并 fix）— Teams 含冒号的用户 ID 未做命名空间处理，导致卡片点击授权与发送者解析不匹配**（PR #3596，OPEN）
   https://github.com/nanocoai/nanoclaw/pull/3596
6. **中（待合并 fix）— 容器内访问宿主本地地址未绕过网关代理，HTTP MCP server 不可用**（PR #3597，OPEN）
   https://github.com/nanocoai/nanoclaw/pull/3597
7. **低（待合并修复）— spawn 型 mailbox 检查超时设置不现实**（PR #3673，OPEN，测试稳定性）
   https://github.com/nanocoai/nanoclaw/pull/3673

## 6. 功能请求与路线图信号

- **PR #4084 [OPEN] `feat(setup): new installs choose their update channel`**（core-team，2026-10-13 创建）
  新安装流程在 setup 阶段即选择更新通道，而非等到首次更新。动机是：全新克隆默认安装 `main` 尖端，却处于默认 `stable` 通道，产生不一致。这是一条较新的、由核心团队推动的功能性改动，纳入下一版本的可能性较高。
  https://github.com/nanocoai/nanoclaw/pull/4084
- **PR #3503 [OPEN] `feat(add-apple-container): run v2 agent sessions on Apple container instead of Docker (macOS)`**
  新增 `/add-apple-container` 会话驱动 skill，在 macOS 上用 Apple `container` 运行时替代 Docker 运行 agent 会话，作者称已在 Apple container 上实际运行过 v2 会话。属于平台扩展/技能类功能，方向明确但需评审确认。
  https://github.com/nanocoai/nanoclaw/pull/3503

## 7. 用户反馈摘要

- **Agent 失控是真实的生产痛点**：Issue #30 明确描述了一次线上事故——SDK 调用未设置 `maxTurns`，导致 32 秒内发出 21 条重复消息。这说明使用者已在生产环境部署 agent，且对成本/骚扰型副作用敏感。
- **默认安装配置影响部署安全**：Issue #2433 指出裸金属 Linux 上安装器自动绑定的地址范围超出预期，反映出用户在真实裸金属（而非容器化）环境中的部署场景。
- **跨渠道适配问题集中在解析细节**：Discord 按钮 `custom_id` 的换行分隔、Teams 的 mime type 与含冒号用户 ID，都是渠道适配中的具体细节问题，说明多平台集成是主要使用场景，也是缺陷高发区。
- **回复可靠性受关注**：PR #3918 针对"丢失或重复回复"的修复被接受，侧面印证该问题对用户体验影响较大。

## 8. 待处理积压

以下 PR 创建时间较早、今日仍在更新但未合并，建议维护者优先关注：

- **PR #2899**（创建 2026-07-01，挂起约 3.5 个月）— Discord DM 审批卡片全部误判为 reject，影响可用性，fix 已就绪。
  https://github.com/nanocoai/nanoclaw/pull/2899
- **PR #3596 / #3597 / #3673 / #3674**（均由 orgads 于 2026-08-28 ~ 08-30 创建，挂起约 1.5 个月）— 分别涉及 Teams 授权解析、容器内 HTTP MCP 访问、测试超时、Teams 文件 mime type，均为修复类且标签已标注 `PR: Fix`。
  https://github.com/nanocoai/nanoclaw/pull/3596
  https://github.com/nanocoai/nanoclaw/pull/3597
  https://github.com/nanocoai/nanoclaw/pull/3673
  https://github.com/nanocoai/nanoclaw/pull/3674
- **PR #3503**（创建 2026-08-24，挂起约 1.7 个月）— Apple container 运行时支持，功能类，需要评审决策。
  https://github.com/nanocoai/nanoclaw/pull/3503
- **Issue #2433**（创建 2026-05-12，更新 2026-10-14）— `priority/high` 安全问题，目前无对应 fix PR，建议优先排期。
  https://github.com/nanocoai/nanoclaw/issues/2433

**项目健康度小结**：活跃度正常、无版本发布压力，核心团队仍在推进可靠性修复；主要风险是安全类 Issue #2433 缺少修复、以及多条修复型 PR 长期挂起未评审，可能延长已知缺陷的暴露窗口。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-10-14

## 1. 今日速览
今日项目处于**版本发布后的高强度合并期**：过去 24 小时无 Issue 更新，但 9 条 PR 全部完成合并/关闭，待合并队列归零，同时发布 1 个新版本，工程节奏密集但积压清理彻底。合并内容覆盖桌面端中文输入法、Office 文档编辑、桌面伴侣（Desktop Companion）、Windows 平台适配、MCP 工具管理与 OpenClaw 稳定性等多个方向，整体呈"多线并进"态势。数据面看，Issue 侧零互动意味着暂无新的用户反馈输入，当日进展主要由维护者与核心贡献者驱动。活跃度评估：**合并产出高、社区讨论低**，属于典型的内部迭代型工作日。

## 2. 版本发布
**LobsterAI 2026.10.13**（发布于 2026.10.13，今日进入日报视野）

官方更新说明要点：
- **Office 文档编辑**（Office Document Editing）能力上线；
- **Computer Use 支持 macOS**；
- **MCP 工具管理**改进；
- 界面刷新（refreshed interface）与更顺畅的任务体验；
- OpenClaw 稳定性与可靠性显著改进。

**破坏性变更**：所给发布说明中未提及任何破坏性变更或废弃项。
**迁移注意事项**：材料未提供迁移步骤或兼容性说明，暂无可用信息。建议使用者关注 macOS Computer Use 相关权限授予，以及 Office 文档编辑引入的新依赖，但此点尚需官方文档确认。

## 3. 项目进展
今日 9 条 PR 全部处于 CLOSED（已合并/关闭）状态，待合并数为 0。按主题归类：

**桌面伴侣（Desktop Companion）相关**
- PR #2865 `feat: desktop companion`（fisherdaddy）— netease-youdao/LobsterAI PR #2865
- PR #2860 `feat: desktop companion`（fisherdaddy，涉及 renderer / build / docs / main / cowork / windows）— netease-youdao/LobsterAI PR #2860
- PR #2862 `fix(desktop-companion): stabilize selection toolbar menu`（fisherdaddy）— 固定主栏为「翻译、复制、朗读、总结、更多」，更多菜单含「解释、问问 LobsterAI、在此应用中禁用、更多设置」，仅在屏幕下方空间不足时向上展开，并修复窗口缩放导致的菜单闪烁。— netease-youdao/LobsterAI PR #2862
- PR #2861 `fix(desktop-companion): preserve TTS playback speed across segments`（btc69m979y-dotcom）— 修复切换更快朗读速度后下一句回退到 1×，通过同时设置 `defaultPlaybackRate` 与 `playbackRate` 使语速在分段切换、延迟音频、缓存重放和后续请求中保持。— netease-youdao/LobsterAI PR #2861

**平台与稳定性修复**
- PR #2868 `fix(python): default Windows child processes to UTF-8`（fisherdaddy，area: main/openclaw/cowork）— netease-youdao/LobsterAI PR #2868
- PR #2864 `fix(windows): isolate development app identity`（fisherdaddy，area: main）— netease-youdao/LobsterAI PR #2864
- PR #2867 `fix(skills): restrict film and music search to basic information`（liuzhq1986，area: docs/skills）— netease-youdao/LobsterAI PR #2867

**功能与数据能力**
- PR #2866 `feat(analytics): connect expert and task usage funnels`（btc69m979y-dotcom）— 为专家发现、任务执行、能力调用、媒体生成和产物使用补充可关联埋点；上线后可按专家统计曝光、召唤、实际运行和复用，并区分提交受阻、工具失败、用户等待/取消、生成失败和本地保存失败。沿用现有 `rlog → wisdom`，保留旧模板与 `expert_kit` 事件含义；新增事件不上传提示词、搜索正文、工具参数、错误原文或文件内容。— netease-youdao/LobsterAI PR #2866

**安全与设置**
- PR #2863 `fix(settings): secure provider exports and preserve legacy imports`（fisherdaddy）— 默认导出不含凭据的 provider 配置，认证的 v3 备份需用户密码；保留 v1/v2 导入兼容，具备原子失败与凭据路由保护，并新增加密与旧格式兼容的回归覆盖。— netease-youdao/LobsterAI PR #2863

**整体推进度**：桌面伴侣从功能引入到交互与播放细节的连贯修补在一天内完成，说明该模块已进入打磨阶段；Windows 侧同时处理了子进程编码与开发环境应用标识隔离两项底层问题；分析埋点体系的补齐为后续专家功能使用度量打下基础。

## 4. 社区热点
今日无 Issues 更新，因此不存在讨论活跃或评论聚集的 Issue。9 条 PR 的评论数均为 `undefined`（数据未提供），👍 反应数均为 0，未出现社区互动热点。可关注的信息面仅为合并动作本身，无法据现有数据判断用户关注焦点。

## 5. Bug 与稳定性
今日无新报告的 Issue（含 Bug、崩溃、回归），下列为当日通过 PR 修复的稳定性问题，按影响范围排列：

1. **划词工具栏菜单闪烁（桌面伴侣）** — 窗口缩放导致展开/收起"更多"菜单时闪烁，已由 PR #2862 修复。— netease-youdao/LobsterAI PR #2862
2. **TTS 语速在分段/延迟/缓存场景下回退** — 选择较快语速后下一句恢复 1×，已由 PR #2861 修复。— netease-youdao/LobsterAI PR #2861
3. **Windows 子进程编码问题** — 子进程默认编码改为 UTF-8，已由 PR #2868 修复。— netease-youdao/LobsterAI PR #2868
4. **Windows 开发环境应用标识未隔离** — 已由 PR #2864 修复。— netease-youdao/LobsterAI PR #2864
5. **Provider 导出泄露凭据风险与旧版本导入兼容** — 已由 PR #2863 修复并补充回归测试。— netease-youdao/LobsterAI PR #2863
6. **技能搜索返回信息范围过宽** — 影音搜索限制为基础信息，已由 PR #2867 处理。— netease-youdao/LobsterAI PR #2867

以上各项均有对应 fix PR，且均已关闭。

## 6. 功能请求与路线图信号
今日无新 Issues，因此没有直接来自用户的功能请求。从已合并 PR 可观察到的路线图信号包括：
- **桌面伴侣持续深化**：PR #2865、#2860 引入能力，#2862、#2861 紧接着修补交互与播放体验，暗示该功能在近期版本中仍会继续迭代。
- **专家与任务漏斗分析**：PR #2866 提到专家功能背景为 Issue #2849，表明"专家"体系仍在建设与度量阶段，相关埋点补齐常先于功能放量。
- **安全基线收紧**：PR #2863 将认证备份改为默认不含凭据且 v3 需密码，预示配置导出/备份路径的安全策略正在收紧。
- **隐私约束明确化**：PR #2866 明确新增事件不上传提示词、搜索正文、工具参数、错误原文或文件内容，可作为后续埋点扩展的既定边界。

## 7. 用户反馈摘要
今日无 Issues 及评论数据可供提炼，无法呈现真实用户痛点、使用场景或满意度反馈。当日所有信息均来自维护者提交的 PR，属于工程侧输入而非用户侧反馈，因此本节无可报告内容。

## 8. 待处理积压
- 今日待合并 PR 数为 0，Issue 更新为 0，**未观测到新增积压**。
- 唯一可追溯的关联项是 PR #2866 中引用的 **Issue #2849（专家功能背景）**，其当前状态在本次数据中未给出，建议维护者确认该 Issue 是否已完成闭环。
- 由于本次数据未包含长期未响应的 Issue/PR 列表，无法识别历史积压项，建议在后续日报数据源中补充"超期未响应"统计以便持续跟踪。

---
*说明：本日报仅基于所提供的 LobsterAI GitHub 数据生成，未包含发布说明全文、评论内容及历史积压明细，相关部分已如实标注为无可报告内容。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-10-14

## 1. 今日速览
今日 Moltis 项目无新版本发布、无 Issue 更新，主要活跃度集中在 Pull Request 层面：过去 24 小时有 2 条 PR 更新，均为同一作者 ManuRakh 提交并于今日（2026-10-14）刷新，状态均为 OPEN、待合并。两条 PR 主题高度相关，分别聚焦于 `spawn_agent` 的目标白名单约束（#1302）与 Chat 与子智能体之间的行为一致性（#1301），指向同一核心方向：多智能体编排（coordinator / worker、org-chart 图）路径的收敛与对齐。今日无任何合并或关闭动作，项目前进体现在"待评审"而非"已落地"，整体活跃度偏低，处于提案堆积状态。

## 2. 版本发布
无新版本发布，本部分省略。

## 3. 项目进展
今日无已合并或已关闭的 PR，项目未在代码库主干层面取得新推进。

当前有 2 条 PR 处于待合并状态，均停留在开放阶段：

- **PR #1302** — Preset spawn.allow: allowlist for spawn_agent targets（作者 ManuRakh，创建 2026-10-12，更新 2026-10-14）
  为预设增加可选的 `agents.presets.<id>.spawn.allow` 配置，使调用方只能将 `spawn_agent` 指向白名单内的预设（org-chart / coordinator 图）。执行点被置于 `resolve_preset` 中、provider 工作开始之前。摘要未说明是否覆盖工具 schema / description 的完整列出逻辑（原文以省略号截断）。
  链接: moltis-org/moltis PR #1302

- **PR #1301** — Chat ↔ sub-agent parity: persona, system_prompt_suffix, delegate_only, preset model（作者 ManuRakh，创建 2026-10-12，更新 2026-10-14）
  修复当前若干预设字段仅对 `spawn_agent` 子运行生效、而对同一智能体的直接对话不生效的问题，从而消除 coordinator/worker 配置与"直接与该智能体对话"之间的行为分叉。摘要中列举了具体对齐项（persona、system_prompt_suffix、delegate_only、preset model），但正文被截断，未展示完整改动范围。
  链接: moltis-org/moltis PR #1301

两条 PR 若被合并，将共同改善多智能体编排配置的一致性与可控性；但在今日数据窗口内，二者均未落地，无法计入实际进展。

## 4. 社区热点
今日无 Issues 更新，无评论数据（两条 PR 的评论字段在数据中显示为 undefined，👍 均为 0），因此不存在可量化的讨论热度排名。

从提交密度看，唯一可见的集中点来自作者 ManuRakh 的两条同日更新 PR（#1302、#1301）。二者围绕同一主题——多智能体 spawn 与直接 chat 两条执行路径的行为一致性及权限约束——表明该议题在项目内部持续被推进，但数据中未包含任何外部社区参与信号（评论、反应），不宜推断存在社区讨论热点。

## 5. Bug 与稳定性
今日无新报告 Bug、崩溃或回归问题（Issues 更新数为 0）。

值得注意的是，PR #1301 的动机本身属于一类行为不一致缺陷：部分预设字段（persona、system_prompt_suffix、delegate_only、preset model）只作用于 `spawn_agent` 子运行，不影响同一智能体的直接对话，导致 coordinator/worker 场景与直接对话场景产生分叉。该问题尚无独立 Issue 记录，其修复以 PR 形式存在。

| 问题 | 严重程度 | 状态 |
| --- | --- | --- |
| Chat 与 sub-agent 配置行为不一致（#1301 描述） | 中等（配置语义分叉，非崩溃） | 已有 fix PR：#1301（OPEN，未合并） |
| spawn_agent 目标缺乏白名单约束（#1302 动机） | 中等（权限/边界控制缺失，非崩溃） | 已有 fix PR：#1302（OPEN，未合并） |

说明：以上严重程度为基于 PR 摘要描述的性质判断，数据中未提供任何影响面、复现步骤或用户报告。

## 6. 功能请求与路线图信号
今日无用户提出的新功能请求（Issues 为 0）。路线图信号仅可从在途 PR 推断：

- **spawn 目标白名单**（PR #1302）：为 `agents.presets.<id>.spawn.allow` 增加可选的允许列表，执行点在 `resolve_preset`。该设计暗示项目正在强化 org-chart / coordinator 图的调用边界控制，属于权限模型的细化。
- **Chat 与 sub-agent 一致性**（PR #1301）：将 persona、system_prompt_suffix、delegate_only、preset model 对齐到两条路径，暗示"把智能体当作其自身来对话"被视作一等使用场景。

两条 PR 均创建于 2026-10-12、今日仍有更新，具备纳入下一版本的可能性；但因尚未合并、且数据中无里程碑或版本关联信息，无法确认其目标版本。

## 7. 用户反馈摘要
今日无 Issues 评论，无可提炼的真实用户痛点、使用场景或满意度反馈。

可从 PR 摘要中识别的使用场景（属于贡献者视角，非用户反馈）：

- 组织的多智能体编排场景，尤其是 org-chart 与 coordinator 图，需要限制某个调用方可 spawn 的目标范围（PR #1302）。
- coordinator / worker 配置与"直接与该智能体对话"两种使用方式并存，用户期望二者行为一致（PR #1301）。

## 8. 待处理积压
在当前数据中，无法识别长期未响应的重要 Issue 或 PR：Issues 总数为 0，两条 PR 的创建时间均为 2026-10-12，至 2026-10-14 仅 2 天，尚不构成积压。

供维护者关注的在途项：

- moltis-org/moltis PR #1302（OPEN，创建 2026-10-12，更新 2026-10-14）— 待评审，涉及 spawn 权限模型，执行点位于 `resolve_preset`。
- moltis-org/moltis PR #1301（OPEN，创建 2026-10-12，更新 2026-10-14）— 待评审，涉及 Chat / sub-agent 路径对齐。

两条 PR 同源同主题，建议一并评审以评估其相互依赖关系。

---
*数据说明：本日报所有内容均基于所提供的 GitHub 数据快照，PR 摘要存在截断；评论数与反应数在源数据中为 undefined 或 0，故未做任何热度或反馈推断。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-14

> 数据来源：GitHub agentscope-ai/CoPaw（原始数据中部分链接标注为 agentscope-ai/QwenPaw，本报告按原文保留链接文本）

---

## 1. 今日速览

- 项目今日处于**高强度活跃状态**：24 小时内 Issues 更新 15 条（新开/活跃 13、已关闭 2），PR 更新 35 条（待合并 27、已合并/关闭 8），并连续发布 2 个 beta 版本（v2.2.2-beta.5、v2.2.2-beta.6）。
- 合并/关闭侧以**版本节奏推进**为主：版本号 bump、历史数据库路径修复、评估工作流与 Index 相关 PR 被关闭，说明 2.2.2 发布链条正在收口。
- 待合并 PR 池高达 27 条，且包含多条 size/XL–XXXL 的大型特性（Code Mode、模型管理重构、插件热重载、评估网站），**评审带宽是当前主要瓶颈**。
- Bug 侧呈现"**稳定性与长会话体验**"集中特征：Console 页面加载失败、cron 任务被静默取消、agent 间调用 CancelledError、聊天历史膨胀导致 10 MB+ 与 30s 超时。
- 社区诉求集中在**可配置性与生态集成**：Tavily API key 配置面、CommandCode / Hugging Face 内置 provider、Claude Code harness 路线图，且 Tavily 需求已有对应 PR 提交。

---

## 2. 版本发布

今日发布 2 个 beta 版本，均为预发布（pre-release）性质，伴随 Release Duty 安装验证 Issue。

### v2.2.2-beta.6
发布时间线（Release Duty Issue 截止 2026-10-14 14:50 UTC，即发布后 4 小时）。
"## What's Changed" 列出：
- `fix(e2e): align selectors with current console ui` — @zhijianma，[PR #8247](https://github.com/agentscope-ai/QwenPaw/pull/8247)
- `fix(history): support external database paths and portable backups` — @rayrayraykk，[PR #8246](https://github.com/agentscope-ai/QwenPaw/pull/8246)
- `chore: bump the ve...`（原文截断）
- 对应版本号 bump PR：[#8250](https://github.com/agentscope-ai/QwenPaw/pull/8250)（已关闭，`chore: bump the version to 2.2.2b6`）
- Release Duty 验证：[Issue #8258](https://github.com/agentscope-ai/QwenPaw/issues/8258)（OPEN）

### v2.2.2-beta.5
"## What's Changed" 列出：
- `fix(console): preserve drafts when pasting long text (#7948)` — @zhaozhuang521，[PR #8119](https://github.com/agentscope-ai/QwenPaw/pull/8119)
- `fix(providers): recognize newer GPT token limit parameters` — @iluv7，[PR #8090](https://github.com/agentscope-ai/QwenPaw/pull/8090)
- `fix(console): ref...`（原文截断）
- Release Duty 验证：[Issue #8242](https://github.com/agentscope-ai/QwenPaw/issues/8242)（CLOSED）

**破坏性变更与迁移注意事项**：所给数据中**未包含**任何明确的 breaking change 或迁移说明。需注意 beta.6 中的 `fix(history): support external database paths and portable backups` 改变了历史数据库路径解析行为（支持绝对路径、workspace 外路径、`..`、`~` 与符号链接），PR 描述称"现有配置走同一 resolver，不移动数据库、在线可用"，但涉及数据库路径配置的用户仍建议关注该变更。

**版本与 Issues 版本号对齐提示**：原始数据中 Releases 使用 v2.2.2-beta.5/beta.6 命名，而多条 Issue 报告仍停留在 2.2.1 / 2.2.2b4 / beta5，说明用户侧升级滞后。

---

## 3. 项目进展

今日已合并/关闭的 PR（数据中标注 CLOSED 的条目）及其推进方向：

| PR | 标题 | 推进内容 |
|---|---|---|
| [#8250](https://github.com/agentscope-ai/QwenPaw/pull/8250) | `chore: bump the version to 2.2.2b6` | 完成 beta.6 版本号 bump，是本次发版的必要环节 |
| [#8246](https://github.com/agentscope-ai/QwenPaw/pull/8246) | `fix(history): support external database paths and portable backups` | 历史数据库路径解析放开（绝对路径/workspace 外/`..`/`~`/symlink），提升备份可移植性，已进入 beta.6 |
| [#8132](https://github.com/agentscope-ai/QwenPaw/pull/8132) | `feat: add release evaluation workflows and QwenPaw Index` | 添加发布/手动 benchmark 执行与公开模型/SDK 评估索引；通过 Harbor 原生 ACP agent 运行 GAIA validation、SpreadsheetBench Verified、SWE-bench Verified，使用所选 workflow commit 构建的 QwenPaw |

**今日合入的修复**（来自 beta.6 / beta.5 的 What's Changed，对应 PR 已进入发布）：
- [#8247](https://github.com/agentscope-ai/QwenPaw/pull/8247) — e2e 选择器与新 Console UI 对齐
- [#8119](https://github.com/agentscope-ai/QwenPaw/pull/8119) — Console 粘贴长文本时保留草稿
- [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090) — 识别较新的 GPT token limit 参数

**整体推进评估**：8 条已合并/关闭 vs 27 条待合并，合并吞吐约为待处理量的 30%。今日推进集中在**发版收口**（版本 bump + 安装验证）和**基础设施能力**（评估 Index、数据库路径、e2e 稳定性），而非终端用户可见的大功能落地——大功能仍在待合并队列中排队。

---

## 4. 社区热点

按评论数排序的活跃讨论（数据中 PR 评论数字段为 `undefined`，故 PR 部分以规模标签与更新时间为参考）：

1. **[Issue #8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)** — [CLOSED] `[bug] 频繁 页面加载失败` · 评论 7（今日最高）
   作者 henryliuwork，创建 2026-10-08，更新 2026-10-14，👍 0。报告 2.2.2b4 在多台设备上"非常容易出现页面加载失败"，提示"可能由网络问题或应用更新导致"。**已关闭**，是本周期讨论最充分的用户侧问题。

2. **[Issue #8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)** — [OPEN] `web_search built-in tavily provider has no API-key config surface` · 评论 4
   作者 kidding1412，创建 2026-10-11，更新 2026-10-14。指出内置 `web_search` 的 tavily provider 始终走 keyless 匿名 REST（header `X-Tavily-Access-Mode: keyless`），**没有任何配置面可填入用户自己的 Tavily API key**，导致付费配额无法使用。今日已有对应实现 PR（见下）。

3. **[Issue #7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)** — [OPEN] `[Question] Claude Code as a third-party agent harness — status and roadmap?` · 评论 3
   作者 jamie9797，创建 2026-08-28，更新 2026-10-14。指出 2.2.0 betas 引入的第三方 agent harness 中 Codex 与 Qoder 已支持，**Claude Code 仍标记 "Coming soon"**，询问状态与路线图。这是一条跨越一个半月仍在活跃的长线咨询。

4. **[Issue #8225](https://github.com/agentscope-ai/QwenPaw/issues/8225)** — [OPEN] `保存 agent 配置触发的「零停机热重载」会取消正在运行的 cron 任务` · 评论 2
   作者 tina0501853，创建 2026-10-13，更新 2026-10-14，环境 2.2.1。

**诉求分析**：热点集中在三类——(a) **可用性/稳定性**（页面加载失败，已关闭）；(b) **可配置性缺口**（Tavily key 无处填、付费能力被浪费，且已转化为 PR，说明反馈闭环有效）；(c) **生态与路线图透明度**（Claude Code harness、第三方 provider presets），用户希望减少"自定义绕路"。另有一条 **[Issue #8232](https://github.com/agentscope-ai/QwenPaw/issues/8232)** 为第三方推广型请求（agent37.to 提供免费托管 QwenPaw、请求在 README 加链接），属社区外联而非技术诉求。

---

## 5. Bug 与稳定性

按严重程度排列（🔴 高 / 🟠 中 / 🟡 低）：

### 🔴 高：长时间运行任务被静默取消（数据/产物损失风险）
- **[Issue #8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)** [OPEN] — Agent 间调用会话被静默取消（`CancelledError`）：**同秒成对出现、产物归零**，且取消不记录发起方与原因。环境：QwenPaw Desktop（Windows 10 AMD64），2.2.1，多 agent 舰队（Orchestrator / Reasoner / Executor / Reviewer / Defender）+ 飞书通道入口，agent 间通过 `ChatWithAgent` 互调。**未见 fix PR。**
- **[Issue #8225](https://github.com/agentscope-ai/QwenPaw/issues/8225)** [OPEN] — 保存 agent 配置（如心跳设置）触发的「零停机热重载」会**取消正在运行的 cron 任务**，任务被记为 `cancelled` 且**无任何提示**。2.2.1。**未见 fix PR。**

### 🔴 高：长会话导致超大响应与固定超时失败
- **[Issue #8228](https://github.com/agentscope-ai/QwenPaw/issues/8228)** [OPEN] — 聊天历史膨胀：文件与截图工具输出以 **base64 存进 `tool_result`**，使长会话 JSON 超 10 MB，**稳定触发 console 30s 超时**。2.2.2-beta.3（Docker）。**已有 fix PR：[#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229)**（`fix(chat): truncate oversized tool outputs when serving chat history`，Under Review，size/M）。

### 🟠 中：Console 交互与导航缺陷
- **[Issue #8251](https://github.com/agentscope-ai/QwenPaw/issues/8251)** [OPEN] — `[Bug][Console]` 消息导航目录无法准确定位：**位置按条目数均分**，仅活动锚点被真实测量。2.2.2b4（Desktop, Windows 10 AMD64），针对 2.2.2-beta.5 bundle 测试。关联 #8186（导航跳转覆盖手动滚轮），PR #8214 曾修复"用户无法…"（原文截断）。**未见新 fix PR。**
- **[Issue #8254](https://github.com/agentscope-ai/QwenPaw/issues/8254)** [OPEN] — Settings Center 忽略 public menu visibility override：插件可用可逆的 `menu.replace(..., { ...item, visible: () => false })` 隐藏内置快捷入口，主侧边栏生效，但 **Settings Center 内对应内置条目仍可见**。**已有 fix PR：[#8257](https://github.com/agentscope-ai/QwenPaw/pull/8257)**（Closes #8254，size/S）。
- **[Issue #8249](https://github.com/agentscope-ai/QwenPaw/issues/8249)** [OPEN] — Cron Job 修改 BUG：手动修改 cron job 时，**默认时间恒为 0 小时 0 分**，无论原设定是什么；改时间后点击 Task Type，需求…（原文截断）。v2.2.2 beta5。**未见 fix PR。**

### 🟡 低 / 已关闭
- **[Issue #8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)** [CLOSED] — 频繁页面加载失败（2.2.2b4，多设备复现，评论 7）。今日关闭，未在数据中说明根因或对应 PR。
- **[Issue #8256](https://github.com/agentscope-ai/QwenPaw/issues/8256)** [OPEN] / **[Issue #8255](https://github.com/agentscope-ai/QwenPaw/issues/8255)** [OPEN] — 同一作者 zhuxile-uestc 在同日提交的两条近似重复的文档 Issue（Hub 模式缺少 Docker 启动方式）。

**稳定性小结**：今日 6 条新 Bug 中仅 2 条已有 fix PR（#8228→#8229、#8254→#8257），**#8252 / #8225 两条涉及任务被静默取消的问题影响面最大且尚无修复**——两者共同点是"取消无提示、无原因记录"，属于可观测性缺陷叠加数据风险。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关 PR / 状态 | 纳入下一版本的可能性 |
|---|---|---|---|
| Tavily 内置 provider 支持自有 API key | [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | **已有 PR [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204)**（`feat(tools): optional Tavily API key via credential store`，first-time-contributor，Under Review，size/L） | **高** — 反馈→PR 闭环已完成，仅待评审合入 |
| CommandCode / Hugging Face 内置 provider 预设与图标 | [#8233](https://github.com/agentscope-ai/QwenPaw/issues/8233) | 无直接 PR；但 **[PR #8240](https://github.com/agentscope-ai/QwenPaw/pull/8240)**（`feat(console): refine model management experience`，size/XXL）正在重构模型管理/提供商配置层 | **中** — 可能被模型管理重构一并覆盖，但无独立承诺 |
| Claude Code 作为第三方 agent harness | [#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396) | 无 PR；Issue 已挂 1.5 个月仍 OPEN，控制台显示 "Coming soon" | **不确定** — 需官方路线图回应 |
| Hub 模式 Docker 启动文档 | [#8256](https://github.com/agentscope-ai/QwenPaw/issues/8256) / [#8255](https://github.com/agentscope-ai/QwenPaw/issues/8255) | 无 PR（文档类） | **高（低成本）** — 纯文档补齐 |

**其他在途的大型功能 PR（尚未合并，构成下一版本候选）**：
- **[PR #8224](https://github.com/agentscope-ai/QwenPaw/pull/8224)** `feat: add experimental Python Code Mode`（size/XXL）— 重构 Code Mode 为实验性 Python 工具编排接口，开启开关后向模型暴露单个 `run_code` 工具，原生工具仍可经 `await tools.<name>` 调用。
- **[PR #8205](https://github.com/agentscope-ai/QwenPaw/pull/8205)** `feat(models): add TypeSafe decision model configuration`（size/XL）— 新增 TypeSafe/JEV 为可配置决策模型 provider，chat 与 decision 模型拥有独立全局默认值。
- **[PR #8253](https://github.com/agentscope-ai/QwenPaw/pull/8253)** `feat(website): add JSON-driven evaluation index`（size/XXXL）— JSON 驱动的 QwenPaw 评估网站，maintainer 在 `website/evaluation/results/` 提交版本化结果，构建时校验并生成排行榜。
- **[PR #7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)** `feat(plugins): add clean unload and rollback-safe hot reload`（size/XXXL，自 2026-09-04 起）— 插件干净卸载与回滚安全热重载，避免每次安装/更新/卸载重建全部 live workspace，并防止失败更新留下半应用状态。**该 PR 与今日 #8225 热重载取消 cron 任务的 Bug 直接相关，值得优先评审。**

---

## 7. 用户反馈摘要

**真实痛点**
- **付费能力被浪费**：#8174 用户有 Tavily 付费配额却因无 key 配置面无法使用，遇到 432（未付费 Researcher 配额）/429（限流）无解，只能走自定义 provider。
- **长会话不可用**：#8228 用户（Docker 部署）因 base64 工具输出导致历史响应破 10 MB，**稳定撞上 30s 超时**，长对话实际上不可用。
- **静默失败不可观测**：#8225 与 #8252 均反映任务被取消后"**无任何提示**""**不记录发起方与原因**"，用户难以自证与排查——这是比单次失败更伤信任的模式。
- **多设备一致性**：#8120 用户强调"我几台设备都遇到了"，说明非单机环境问题（该 Issue 今日已关闭）。

**使用场景**
- 多 agent 舰队 + IM 通道的真实生产形态：#8252 展示 Orchestrator / Reasoner / Executor / Reviewer / Defender 五角色协同 + 飞书入口 + `ChatWithAgent` 互调，说明 CoPaw 已被用于**多智能体编排**而非单机聊天。
- 跨端使用：#8203 PR 描述提到"chat turn 从移动端（或另一个 console tab）发起"，与 #8120 的多设备报告相互印证。
- Docker/自托管部署：#8228（Docker）、#8256（Hub 模式 Docker 启动）。

**满意度信号**
- #7396 用户明确称第三方 agent harness"is a great addition"，对 Codex / Qoder 支持表示认可，仅对 Claude Code 缺失表达期待——**正面评价 + 明确缺口**。
- #8204 为 first-time-contributor 提交且直接闭合社区 Issue #8174，反映社区对需求响应速度的正向反馈循环。

**不满意信号**
- 文档缺口反复出现（#8255、#8256 同日重复提交，且用户提到"我听了沙龙，好像并不是这样"，说明**官方宣讲与文档不一致**，用户按文档操作得到非 Hub 模式）。
- 版本碎片化：用户报告横跨 2.2.1、2.2.2b4、2.2.2-beta.3/beta5 多个版本，同一类问题在不同版本重复出现，升级路径与版本说明的清晰度待改善。

---

## 8. 待处理积压

**长期未响应的重要 Issue**
- **[Issue #7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)** — Claude Code 作为第三方 agent harness 的状态与路线图。创建 **2026-08-28**，至今 **47 天**仍 OPEN，评论仅 3 条，无官方路线图答复。属于高价值生态问题，建议给出明确排期或"不支持"的结论。

**长期未合并的大型 PR（评审带宽风险）**
- **[PR #7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)** — `feat(plugins): add clean unload and rollback-safe hot reload`，size/XXXL，创建 **2026-09-04**，已挂 **40 天**。**与今日新 Bug #8225（热重载取消 cron 任务）高度相关**，建议优先评审。
- **[PR #7761](https://github.com/agentscope-ai/QwenPaw/pull/7761)** — `fix(tools): support brace expansion in glob search`，size/S，创建 **2026-09-14**，已挂 **30 天**。修复 `glob_search` 对 `**/*.{csv,xlsx,json,tsv,parquet}` 等花括号模式返回空结果（已有 `wcmatch` 依赖可复用）。**小改动、明确修复，长期未合并属于明显积压。**
- **[PR #7928](https://github.com/agentscope-ai/QwenPaw/pull/7928)** — `chore: release notes for v2.2.2`，size/L，创建 **2026-09-22**，已挂 **22 天**，且 2.2.2 相关 beta 已连发至 beta.6。**发布说明与版本发布节奏脱节，建议尽快处理。**

**待处理规模提示**：今日待合并 PR 达 **27 条**，其中 size/XL–XXXL 的大型 PR 至少 6 条（#8205、#8224、#8253、#8240、#7565、#8132 中的部分已关闭）。建议维护者按"**小修复优先清空 + 与新 Bug 相关的 PR 插队**"策略降低积压。

---

*报告基于所提供的 GitHub 数据生成，所有链接、版本号、日期与评论数均取自原始材料；原文中标注为截断（如 "bump the ve"、"fix(console): ref"）或缺失（如 PR 评论数为 undefined）的信息未做推断补全。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-14

## 1. 今日速览

ZeroClaw 今日处于**高活跃度状态**：过去 24 小时 Issues 更新 21 条（新开/活跃 12、关闭 9），PR 更新 50 条（待合并 33、合并/关闭 17），无新版本发布。关闭侧集中在 Windows 路径/文件替换兼容性修复批次（#11361–#11366 系列）与多个 ZeroCode TUI 稳定性缺陷，说明维护者正在系统性清理平台兼容与 TUI 稳定性债务。待合并侧体量偏大（33 条），其中多条为 `size:XL`、`risk:high` 且绑定 `release:v0.8.6`/`v0.9.0` 的大型 RFC 落地 PR（如 A2A crate 抽取 #11712、内置工具默认集 #11221），提示下一版本正在合流前的高压积压期。整体项目健康度：**修复节奏稳健，但审阅带宽可能是当前主要瓶颈**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 17 条 PR 主要构成两个清晰方向：

- **Windows 平台兼容性修复批量落地**：PR #11361（`file/attach` 按类型拒绝目录）、#11362（SOP 文件被读者占用时的替换）、#11363（目录文件系统触发器匹配 Windows 路径）、#11365（丢弃无盘符根目录的 skill-bundle）、#11366（多模态测试使用平台绝对路径）均已关闭。这批修复正对应开放中的批处理 tracker [#11425](https://github.com/zeroclaw-labs/zeroclaw/issues/11425)，该 tracker 明确记载"十个开放 PR 修复 Windows 特定故障"，今日的关闭意味着该批次已开始收敛。
- **测试与 CI 稳定性**：PR #11630 修复了三个误读 Windows 路径拼写的运行时/工具测试，补充了 #11361–#11366 未覆盖的测试面。

Issues 侧同步关闭的重要条目包括 ZeroCode TUI 的三项缺陷：#11481（终端断开后 100% CPU 自旋）、#11618（daemon 返回 SESSION_BUSY 时静默丢弃排队消息）、#11694（Cost 选项卡混用 UTC 与本地日统计）、#10349（SOP 面板加载阻塞全局导航），以及 #10225（ZeroCode RPC 会话无法经 channel-backed 工具触达已配置渠道，S1 阻塞级）、#10643（有界子循环工具的 fail-closed 审批强制）。

综合来看，今日推进以**稳定性与平台兼容**为主，功能面未见新能力落地，属于"还债日"而非"交付日"。

## 4. 社区热点

今日评论最集中的议题反映了架构层面的长期演进诉求：

- [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)（10 评论，已关闭，S1）：**延迟内置工具 schema 以降低固定提示前缀占用**。摘要指出默认 `agent.max_context_tokens = 32000` 下，首个 LLM 迭代即被工具 schema 挤占上下文。该议题关闭，对上下文预算敏感的用户是直接利好。
- [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)（10 评论，开放，RFC）：**A2A 协议 crate（zeroclaw-a2a）**。指出 A2A 线格式与出站客户端由 #9106 建立，需跨既有边界重构所有权与契约。对应实现 PR [#11712](https://github.com/zeroclaw-labs/zeroclaw/pull/11712)（`size:XL`）今日仍在推进，是当前最重量的架构动作。
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)（9 评论，开放，P1）：**SQLite 会话后端每轮重写全部消息的 created_at**，导致逐条消息时间戳丢失。属数据保真度问题，影响审计与时间线还原。
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（6 评论，开放，tracker）：**运行时与网关交付 tracker**，作为 v0.8.6 Phase 2 运行时工作与 v0.9.0 Phase 3 网关分离的唯一事实来源，源自 RFC #5574。
- [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)（5 评论，开放）：请求 `POST /webhook` 在 `stream: true` 时以 SSE 流式返回 agent-loop token，面向"托管路径"场景。

**诉求解读**：社区关注点已从功能堆叠转向**上下文经济性（#5808）、协议边界治理（#11254）、数据持久化正确性（#11420）与流式交互体验（#10419）**，这些都是规模化部署前必须解决的基础设施问题。

## 5. Bug 与稳定性

按严重程度排列（今日报告/活跃）：

**P1 / S1–S2 级：**
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) `[bug, memory, runtime, priority:p1]` — SQLite 会话后端每轮重写全部消息的 `created_at`，逐条消息时间被抹平。S2 降级行为。**暂无对应 fix PR**。
- [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) `[bug]` — 多模态 `max_image_turns` 从不释放 vision 路由，`vision_model_provider` 在整个会话中被钉死，S2。**暂无 fix PR**。
- [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) `[bug]` — 长会话裁剪会**永久删除**会话存储中较早的轮次（`zeroclaw-infra/src/session_sqlite.rs`），S2。属数据丢失，**暂无 fix PR**。
- [#11709](https://github.com/zeroclaw-labs/zeroclaw/issues/11709) — 网关 reload 后，升级的 WebSocket 仍存活于已退役实例并继续服务，S2。**暂无 fix PR**。

**P2 级：**
- [#11708](https://github.com/zeroclaw-labs/zeroclaw/issues/11708) `[bug, status:in-progress]` — `model_routing_config` 的 tool schema 遗漏 action 级必填参数，实测（Ollama `qwen3.5:9b`）导致模型反复误调用 `action: upsert_scenario`。**已标记进行中**。
- [#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179)（已关闭） — `sop::engine` 的 `pending_park_retry_respects_pending_pool_cap` 测试在跨秒边界时偶发失败，曾使 `CI Required Gate` 变红。flaky 测试问题已收敛。

**今日已关闭的稳定性修复**：#11481（ZeroCode 断连后 CPU 自旋）、#11618（SESSION_BUSY 静默丢消息）、#11694（时区口径混用）、#10349（SOP 面板阻塞导航）、#10225（S1，channel-backed 工具不可达）、#10643（子循环审批 fail-closed）。

**风险提示**：#11711 与 #11420 同属会话持久化正确性范畴，且均无 fix PR，建议优先安排。另可关注批处理 tracker [#11425](https://github.com/zeroclaw-labs/zeroclaw/issues/11425) 收尾后是否释放审阅带宽。

## 6. 功能请求与路线图信号

结合已有 PR 与标签，以下需求进入下一版本的可能性较高：

| 需求 | Issue | 对应 PR | 信号强度 |
|---|---|---|---|
| A2A 协议 crate 化 | [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | [#11712](https://github.com/zeroclaw-labs/zeroclaw/pull/11712)（OPEN, size:XL） | 高，已有实现推进 |
| 内置工具默认集调整（Chat 默认 11 个、Code/ACP 默认 8 个） | — | [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221)（OPEN, size:XL, needs-author-action） | 中高，但需作者响应 |
| Telegram 未授权提示可配置、且感知实际授权路径 | [#10400](https://github.com/zeroclaw-labs/zeroclaw/issues/10400) | [#11728](https://github.com/zeroclaw-labs/zeroclaw/pull/11728)（OPEN, 今日创建） | 高，已承接原 PR #10401 |
| `POST /webhook` SSE 流式返回 agent-loop token | [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | 无 | 中，需求明确但未实现 |
| ZeroCode 重连时惰性水合后台会话 | [#9734](https://github.com/zeroclaw-labs/zeroclaw/issues/9734) | 无 | 低，处于 `status:parking-lot` |
| WASM 插件宿主进入正式发布产物 | — | [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347)（OPEN, release:v0.8.6） | 中高，已绑定 release 标签 |

**注**：#11221 携带 `needs-author-action` 标签，若长时间未响应可能滑出 v0.8.6 窗口，建议维护者主动跟进。

## 7. 用户反馈摘要

从今日 Issues 与评论中提炼的真实信号：

- **上下文预算焦虑**：#5808 直指默认 32K 上下文下工具 schema 占据固定提示前缀，用户对"首轮即被挤压"敏感，属高频使用场景下的直接体验痛点（该问题今日已关闭）。
- **数据持久化不可信**：#11420（消息时间戳被覆写）、#11711（裁剪永久删除历史轮次）反映用户将 ZeroClaw 用于**需要可追溯的会话记录**场景，当前实现会破坏审计链。
- **静默失败最伤用户**：#11618 描述"用户输入被静默丢失"，反馈明确指出"其他连接正在跑 turn 时（例如脚本发消息）"这一多端并发场景，属真实工作流而非边缘用例。
- **配置与模型协作摩擦**：#11708 中用户使用 Ollama `qwen3.5:9b`，因 schema 缺参导致模型反复误调用，说明本地小模型对工具契约完整性的容错更低。
- **平台体验割裂**：Windows 相关修复批量出现（#11425 tracker 记录十项），表明 Windows 用户此前遭遇文件替换、路径形式等系统性障碍，今日已大规模修复。
- **运维可控性诉求**：#10400 希望自定义 Telegram 未授权发件人提示并让内置文案与实际授权路径一致，属面向运营者的 UX 改进。

整体情绪：**用户群偏工程化、关注正确性与可控性，对静默错误容忍度低**。

## 8. 待处理积压

以下条目存在时间较长或标签提示停滞，建议维护者关注：

- [#9734](https://github.com/zeroclaw-labs/zeroclaw/issues/9734) — zerocode 重连惰性水合（创建于 2026-08-04，已逾两月），带 `status:parking-lot` 与 `priority:p3`，是对 #9727/#9729 的后续。若重连性能持续影响体验，建议重新评估优先级。
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — 运行时与网关交付 tracker（创建于 2026-06-09，近四个月），承载 v0.8.6/v0.9.0 关键路径，需持续同步进度以免成为版本发布单点。
- [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) — 内置工具默认集 PR（创建于 2026-09-29），带 `needs-author-action` 且 `size:XL`、绑定 v0.8.6/v0.9.0，存在滑期风险。
- [#11035](https://github.com/zeroclaw-labs/zeroclaw/pull/11035) — Qdrant 时间边界应在 recall 限额前应用（创建于 2026-09-21），带 `needs-author-action`。
- [#11520](https://github.com/zeroclaw-labs/zeroclaw/pull/11520) — 遗留插件恢复可发现性修复（创建于 2026-10-04），带 `needs-maintainer-review`、`risk:manual`，需人工审阅介入。
- [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) — WASM 插件宿主进入发布产物（创建于 2026-10-01），当前基于 #11311 堆叠，待其合并后需 retarget 至 `master`。

**带宽观察**：今日待合并 PR 达 33 条，其中多条 `size:XL`/`needs-author-action`/`needs-maintainer-review`，审阅通道拥堵是当前最需关注的项目健康度指标。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*