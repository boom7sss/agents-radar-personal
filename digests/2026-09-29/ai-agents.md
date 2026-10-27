# OpenClaw 生态日报 2026-09-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-29 14:21 UTC

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

# OpenClaw 项目日报 — 2026-09-29

> 数据来源：OpenClaw GitHub 仓库（github.com/openclaw/openclaw）。以下所有条目、数字与链接均直接取自当日提供的数据，未作外部补充。

---

## 1. 今日速览

- 过去 24 小时 Issues 更新 **500 条**（新开/活跃 396，已关闭 104），PR 更新 **500 条**（待合并 386，已合并/关闭 114），属于高吞吐量维护状态。
- 发布 **1 个版本** `v2026.8.33`，为 gateway-only 的 `extended-stable`（当前等同于 LTS）分支，内容基于 2026 年 8 月底的 OpenClaw，叠加关键安全更新、可靠性与性能修复及新模型支持。
- 当天最活跃的讨论几乎全部集中在 **P0 崩溃/内存类回归**上，涉及 Windows SQLite WAL 膨胀、Gateway RSS 失控、prepared-model-catalog worker 内存与临时磁盘占用、macOS 看门狗误杀等。
- 合并/关闭侧以维护者主导的 **deslop（去冗余重构）与测试清理批次**为主（steipete 多个 PR），功能面推进有限，稳定性债务仍在累积。
- 综合判断：项目**活跃度极高但稳定性压力显著**，当前版本线的 P0 标签密度偏高，健康度取决于后续补丁版本能否收敛这些回归。

---

## 2. 版本发布

### v2026.8.33 — `extended-stable`（LTS 等价分支）

- **定位**：gateway-only 的 extended-stable 发布，官方称其为当前 LTS 的等价物。
- **基线**：OpenClaw 2026 年 8 月底的代码，外加：
  - 关键安全更新
  - 可靠性与性能修复
  - 新模型支持等功能
- **当前最新版本**：官方在 release 说明中明确指向 `2026.9.6`。
- **破坏性变更 / 迁移注意事项**：本次 release note 中**未提及**破坏性变更或迁移步骤。

链接：openclaw/openclaw Release v2026.8.33

> 注：数据中另出现 `2026.9.7 Fixes Tracker`（Issue #157531），说明 9.6 与 9.7 之间的修复窗口已开启，但当日无 9.7 正式发布记录。

---

## 3. 项目进展

当日 PR 更新 500 条，其中已合并/关闭 114 条。被重点展示的高评论 PR 中，**无一条标记为已合并**（全部为 OPEN），因此以下内容描述的是"推进方向"而非已完成能力：

- **重构与清理（维护者主导，体量最大）**
  - #161202 `refactor(commands): deslop commands sixth pass`（XL，P3）——继续移除重复结果投影、迁移遍历与格式化接线。
  - #158916 `refactor(runtime): deslop tasks, daemon, node-host and tui second pass`（XL）。
  - #160850 `refactor(infra): deslop infra sixth pass`（XL）。
  - #161187 `refactor(plugins): deslop feature plugins fourth pass`（XL）。
  - #161159 `refactor(agents): remove unused required-source mode`（S）。
- **测试治理**
  - #161204 `test(...): remove low-value tests (batch d099)`（XL）——维护者要求的清理批次。
  - #161013 `test(talk): add consult correlation tests for current main APIs`——起因是 #160227 因改动 7,715 个文件超出 GitHub 3,000 文件安全审查上限而反复 CI 失败。
- **稳定性修复 PR（均待合并）**
  - #161194 `fix(agents): serialize ended hook stamps after wake publication`（P1，subagent 唤醒挂起）。
  - #160962 `fix(sessions): preserve accepted input during announcements`（XL，P1）。
  - #158447 `fix(updater): identify the config-read child by env, not by import query`（P0，Bun Gateway 配置读取子进程无限链）。
  - #154773 `fix(google): share request timeout with credential preparation in video generation`（P2）。
- **少数已关闭项（Issue 侧）**：#145072（macOS npm 更新在 "global install swap" 失败）已 CLOSED。

推进程度评估：当日可见的合并/关闭量（114 条 PR）主要由清理类工作构成，**面向用户的功能推进信号较弱**，工程侧主要在还技术债。

链接：#161202、#158916、#160850、#161187、#161159、#161204、#161013、#161194、#160962、#158447、#154773、#145072

---

## 4. 社区热点

按评论数排序的高热讨论：

| 排名 | 条目 | 评论 | 标签强度 | 链接 |
|---|---|---|---|---|
| 1 | #143524 Windows 单网关 Agent SQLite WAL 数天内涨到 1.4–2.8 GB，阻塞 gateway 启动 | 93 | P0 / crash-loop / ux-release-blocker | openclaw/openclaw#143524 |
| 2 | #153257 2026.9.5 把稳定环境变成 8 小时故障恢复 | 39（👍1） | P0 / crash / crash-loop | openclaw/openclaw#153257 |
| 3 | #149538 main(1611ca6d) Gateway ready 后不响应，/health 全部超时，632-agent 舰队 | 21 | P0 / crash-loop | openclaw/openclaw#149538 |
| 4 | #102175 嵌入式 prompt cache 跨 room-event / policy / Responses 边界失效 | 20（👍1） | P2 / regression / security | openclaw/openclaw#102175 |
| 5 | #111897 同一 session lane 的两个并发 run 都完成，产生重复回复 | 19（👍1） | P1 / session-state / message-loss | openclaw/openclaw#111897 |
| 6 | #157067 Windows 隔离 cron 把不可克隆的 env Proxy 传给 session history worker | 18 | P1 / source-repro | openclaw/openclaw#157067 |
| 7 | #139710 mid-turn plugin-generation supersede 杀死 system-agent turn 与 planner fallback | 17（👍1） | P1 / source-repro | openclaw/openclaw#139710 |
| 8 | #97616 hook/tool 子进程未回收，僵尸进程累积导致运行时退化 | 16（👍1） | P1 / regression | openclaw/openclaw#97616 |
| 9 | #157531 2026.9.7 Fixes Tracker | 15 | P0 / 需产品决策 | openclaw/openclaw#157531 |
| 10 | #156571 2026.9.5 model-catalog worker 在 tmp 泄漏 1–3 GB/min 源捕获 | 14（👍1） | P0 / regression | openclaw/openclaw#156571 |

诉求分析：

- **版本升级信任危机**是当前最尖锐的社区情绪。#153257 的标题与正文（"我真的很后悔升级到 2026.9.5"）表明用户对 9.x 系列回归的容忍度正在下降，且多条 P0 都带 `impact:ux-release-blocker` 标签，说明这些不是边缘场景，而是直接影响发布可用性。
- **资源泄漏是跨平台的系统性主题**：Windows 的 WAL（#143524）、macOS/Linux 的 RSS 与 prepared-model-catalog worker（#159596、#160522、#156571）、Codex app-server 的稳态 CPU（#84037）指向同一类"长跑即退化"的运维痛点。
- **多 agent / 舰队规模场景**开始成为压力测试来源（#149538 的 632-agent 舰队、#155859 的启动墙钟随插件数线性增长）。

---

## 5. Bug 与稳定性

按严重程度排列（P0 > P1 > P2）：

### P0（crash-loop / 发布阻塞级）

| Issue | 问题 | 状态 | fix PR |
|---|---|---|---|
| #143524 | Windows Agent SQLite WAL 涨到 1.4–2.8 GB 且从不 checkpoint，阻塞 gateway 启动（2026.9.2/9.3） | OPEN，`no-new-fix-pr`、需维护者评审 | 无 |
| #153257 | 2026.9.5 导致崩溃，稳定环境变成 8 小时恢复（`manual-only`） | OPEN | 无 |
| #149538 | Gateway 到达 ready 后不服务，/health 全部超时，事件循环饥饿 | OPEN，`needs-info` | 无 |
| #157531 | 2026.9.6 → 2026.9.7 修复追踪 | OPEN，需产品决策 | 无 |
| #156571 | 2026.9.5 model-catalog worker 泄漏 1–3 GB/min 临时源捕获，填满磁盘（#155753 的磁盘侧） | OPEN，`manual-only` | 无 |
| #155859 | 2026.9.5 Gateway 启动墙钟随启用插件数增长，discord/codex/openclaw-weixin 占满 120s 发布预算 | OPEN | 无 |
| #154812 | Gateway RSS 在 V8 堆外失控，导致 OOM 与 shutdown 超时 | OPEN | 无 |
| #145192 | 2026.9.2 → 9.4 托管更新在 candidate-Doctor 阶段失败，回滚到 9.4 迁移后的状态 | OPEN | 无 |
| #158936 | macOS 应用就绪看门狗 SIGTERM 掉启动较慢的 gateway，形成重启循环 | OPEN，`linked-pr-open` | 关联 PR 已开 |
| #159612 | Subagent 完成结算无限重试，"owner changed before settlement" 每轮重新注入结果 | OPEN，`platinum hermit` | 无 |

### P1（功能性/会话状态/消息丢失）

- #111897 同一 session lane 双 run 并发完成，重复回复 — OPEN。
- #157067 Windows 隔离 cron 传递不可克隆 env Proxy — OPEN，`linked-pr-open`。
- #139710 mid-turn plugin supersede 杀死 system-agent turn — OPEN。
- #97616 hook/tool 子进程未回收，僵尸累积 — OPEN。
- #121953 Cron agent turn 在 DeepSeek 上因 `[cron:...]` 前缀被降优先级而停顿 — OPEN。
- #127148 Codex `sessions.compact` 获取第二个 app-server，触发 active-writer 冲突 — OPEN。
- #121661 CLI-backed subagent announce-wake turn 无工具运行，模型编造工具调用与输出 — OPEN。
- #157630 显式 `--max-old-space-size` 静默覆盖 worker 的 `resourceLimits` — OPEN。
- #159094 2026.9.6 Gateway 持有 state-lifecycle 租约但内部 worker 报其他进程持有 — OPEN。
- #84037 Codex app-server 稳态 CPU 与 helper 进程开销偏高（2026.5.18 起长期存在）— OPEN。
- #159596 2026.9.6 Gateway 内存锯齿，prepared-model-catalog worker 涨到堆上限，约 200 次/天 critical 内存压力事件（👍2）— OPEN。
- #154572 `sessions_spawn` 到 claude-cli 子代理必然失败（SessionTranscriptWriterClaimReboundError，~350ms）— OPEN。
- #137710 原生 Codex 完成已记录但不唤醒 `sessions_yield` 父级 — OPEN。
- #126246 Telegram 持久化出站投递卡在 `send_attempt_started`，重启后丢失 — OPEN。

### P2

- #102175 嵌入式 prompt cache 跨边界失效（`diamond lobster`，需安全评审）— OPEN。
- #146004 subagent 完成触发无 channel 的 dashboard heartbeat turn（2026.9.3）— OPEN。
- #153706 已关闭的 ACP session 投影出 `agentRuntime: {id:"codex"}`，断言了从未使用的原生运行时 — OPEN。
- #160522 prepared-model-catalog worker 在 `maxOldGenerationSizeMb: 512` 下仍达 1.15 GB — OPEN。

**整体判断**：P0 项中相当比例带 `no-new-fix-pr`，意味着尚无对应修复 PR；仅 #158936、#157067、#137710 标注了 `linked-pr-open`。稳定性收敛是当前最紧迫的工程任务。

---

## 6. 功能请求与路线图信号

数据中**未出现明确的新功能请求型 Issue**，更多是既有能力的正确性修复。但以下 PR 与 tracker 释放出下一版本的路线信号：

- **#157531（2026.9.7 Fixes Tracker）**：官方 tracker，明确指出需在 2026.9.6 与 2026.9.7 之间修复的事项，并给出 prepared source `711db27c67738d31a41eaf67710a53f149b67225`。这是最直接的下一版本范围信号。
- **#161057 `refactor(skills): make Skill Workshop a direct, versioned self-learning loop`**：将 Skill Workshop 改为直接、带版本的自学习循环。当前背景评审多被记为失败、审查器把数百 MB 草稿写入 skill 目录。这是少数带产品演进意味的大型 PR。
- **#161165 `fix(memory): OR-join keyword FTS tokens so natural-language questions get BM25 hits`**：修复 memory-core 关键字腿用 AND 拼接导致自然语言提问几乎无命中。
- **#160649 `improve(acp): add reusable runtime turn contract suite`**：把 ACP turn 边界抽成可复用一致性套件，ACPX 为首个采用者，属架构级投入。
- **#160958 `ci: plan trusted fork PRs with their Blacksmith runner profile`**：修复 fork PR 上 compact Node 分片反复失败/超时（回归贡献者 vs 维护者不一致）。
- **#146963 `fix: guard env: undefined in normalizeCronPayload`**：修复 `openclaw automations edit` 在 agentTurn 作业上的 SQLite 持久化崩溃。

纳入下一版本的可能性判断（仅基于标签）：#158447（P0）、#161194（P1）、#160962（P1）已标 `ready for maintainer look` 或 P0/P1 高优，具备进入 9.7 窗口的条件；#161057 体量 XL 且带 `needs proof`、多个 merge-risk 标签，短期落地可能性较低。

链接：#157531、#161057、#161165、#160649、#160958、#146963、#158447、#161194、#160962

---

## 7. 用户反馈摘要

从当日 Issues 正文中提炼的真实痛点与场景：

- **升级即事故**：#153257 作者（abuegab1-spec）直言"我真的很后悔升级到 OpenClaw 2026.9.5"，升级前是稳定环境，升级后经历 8 小时故障恢复。
- **大规模部署先撞墙**：#149538 报告方运营 **632-agent 舰队**，main 分支能打印 `[gateway] ready` 却完全无法服务，/health 探测全部超时，RSS 一路上涨直到主机 OOM。这说明单机多 agent 是真实生产形态。
- **Windows 是薄弱环节**：#143524（desksk）单网关 Windows 主机上 WAL 涨到 2865 MB 且永不 checkpoint；#157067（WG-Mojo）原生 Windows 上隔离 cron 因 env Proxy 无法克隆而失败；#123774 涉及 Windows 隐藏启动器在重启后成为孤儿。
- **磁盘与内存的实际代价可量化**：#156571 报告 model-catalog worker 以 **1–3 GB/min** 写入 tmp 并填满磁盘；#160522 报告 worker 在 512 MB 上限配置下仍占 1.15 GB；#159596 报告约 **每天 200 次** critical 内存压力事件。
- **隔离性承诺被打破**：#159612 使用 2026.9.6 + macOS launchd + QQ Bot 直连会话，从 private-mode 请求派生的 subagent 结果被每轮重复注入；#159094 报 Gateway 声称持有 state-lifecycle 租约但内部 worker 报另一个 OpenClaw 进程持有。
- **多运行时一致性不足**：#154572 报告所有解析到 `agentRuntime.id = "claude-cli"` 的 `sessions_spawn` 在 ~350ms 后必然失败，而 CLI agent 路径正常；#153706 报告已关闭的 ACP 会话仍投影成 codex 原生运行时。
- **配置语义不直观**：#156864 报告 `tools.alsoAllow: ["browser"]` 配置生效但 agent 工具集中并没有 browser 工具。

满意信号（相对少）：#157531 的 Fixes Tracker 与 #161194、#160962 等 PR 标注 `proof: sufficient` / `ready for maintainer look`，显示社区贡献者能提供可复现证据并被维护者接受进入评审。

---

## 8. 待处理积压

以下长期存在或反复出现在当日高评论列表中的重要条目，建议维护者关注：

| Issue/PR | 创建日 | 距今 | 状态 | 风险 |
|---|---|---|---|---|
| #84037 Codex app-server 稳态 CPU 与 helper 进程开销 | 2026-05-19 | ~4 个月 | OPEN，需维护者评审 + 产品决策 | P1 / crash-loop 标签 |
| #97616 子进程未回收导致僵尸累积 | 2026-06-29 | ~3 个月 | OPEN，需维护者评审 | P1 / message-loss + crash-loop |
| #102175 prompt cache 跨边界失效 | 2026-07-08 | ~2.5 个月 | OPEN，标记 stale / 需安全评审 / `diamond lobster` | P2 / security |
| #111897 session lane 并发双跑导致重复回复 | 2026-07-20 | ~2 个月 | OPEN，`needs-info` | P1 / message-loss |
| #121661 CLI-backed subagent 编造工具调用 | 2026-08-10 | ~1.5 个月 | OPEN，需维护者评审 + 产品决策 + 安全评审 | P1 |
| #121953 DeepSeek 上 cron 前缀被降优先级 | 2026-08-11 | ~1.5 个月 | OPEN，需维护者评审 + 产品决策 | P1 |
| #123774 Windows 守护进程隐藏启动器孤儿（PR） | 2026-08-14 | ~1.5 个月 | OPEN，`needs proof` + `needs-pr-context` | 平台可用性 |
| #126246 Telegram 出站投递卡死并丢失 | 2026-08-19 | ~1.5 个月 | OPEN，`platinum hermit`、需 live repro | P1 / message-loss |
| #127148 Codex sessions.compact 二次 app-server 冲突 | 2026-08-21 | ~1.5 个月 | OPEN，需维护者评审 + 产品决策 | P1 / session-state |
| #146963 cron payload env guard（PR） | 2026-09-13 | ~2 周 | OPEN，`needs proof` + `needs-pr-context` | 触发 SQLite 持久化崩溃 |

**积压特征**：多条涉及第三方运行时（Codex、DeepSeek、claude-cli）的条目反复进入 `needs-product-decision` 状态，说明跨运行时边界的行为契约尚未确立；而 #102175、#121661 同时带安全评审标签，长期滞留的合规风险值得单独排期。

---

## 横向生态对比

# 个人 AI 智能体开源生态横向对比报告

**数据日期：2026-09-29** ｜ 覆盖 13 个项目 ｜ 数据来源：各项目当日 GitHub 动态摘要


## 1. 生态全景

当日生态呈现**"头部高吞吐震荡、长尾分层明显"**的格局：OpenClaw 以单日 1000 条 Issue/PR 更新的量级继续充当参照系，但其讨论几乎被 P0 崩溃与内存/磁盘泄漏回归占据，暴露出"规模领先、稳定性债务累积"的典型头部困境。中坚梯队（NanoBot、NanoClaw、Hermes Agent、CoPaw、ZeroClaw）保持 20–80 条日更新，且普遍在**会话架构收敛、子智能体隔离、权限撤销、渠道降噪**四条主线上同步演进。长尾项目（PicoClaw、LobsterAI、IronClaw）活跃度中低且 stale 标记密集，多处于"方案堆积等待评审"状态。全生态共同缺位的是**权限/身份的撤销一致性**与**长跑资源退化治理**，这两类问题在 5 个以上项目中以不同形态重复出现。


## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（活跃396/关104） | 500（待386/合114） | v2026.8.33 (LTS等价) | ⚠️ 活跃极高但 P0 标签密集，稳定性压力显著；合并以清理为主 |
| **NanoBot** | 7 | 33（待20/合13） | 无 | ✅ 良好，Bug 多在当日获 fix PR，响应链路短；PR 堆叠依赖管理有压力 |
| **Hermes Agent** | 50（活跃46/关4） | 50（待48/合2） | 无 | ⚠️ 高强度发现+集中修复，评审吞吐是瓶颈（合并率 2/50） |
| **CoPaw** | 9（活跃5/关4） | 33（待13/合20） | 无 | ✅ 活跃且闭环效率高，新开 Issue 与合并 PR 高度对应 |
| **ZeroClaw** | 39（活跃19/关20） | 50（待45/合5） | 无 | ✅ 良好，但多个 S0/P0 权限缺陷同日活跃，45 条待合并积压 |
| **NanoClaw** | 3（新1/关2） | 19（待9/合10） | 无 | ✅ 良好，稳定性债务偿还日；但社区互动为 0，纯核心团队驱动 |
| **LobsterAI** | 10（8 stale） | 9（8 合并/关闭） | 无 | ⚠️ 存量清仓为主，高危 Bug 被 stale 关闭而非修复 |
| **IronClaw** | 2 | 3（全开放） | 无 | 🔸 中等偏低，今日零合并，以维护性活动为主 |
| **PicoClaw** | 3（全 stale 相关） | 4（待4/合0） | 无 | ⚠️ 中低，净推进为 0，评审合入积压 |
| **NullClaw** | 1 | 1（已合并） | 无（PR含版本号） | 🔸 偏低但结构健康，无阻塞故障 |
| **TinyClaw** | 0 | 0 | 无 | ⚫ 24h 无活动 |
| **Moltis** | 0 | 0 | 无 | ⚫ 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚫ 24h 无活动 |

> 注：OpenClaw 数据源未拆分 Issues/PR 内部构成以外的维度；表中"活跃/关"为原文口径。


## 3. OpenClaw 在生态中的定位

**规模维度**：OpenClaw 当日 1000 条更新，是第二名 ZeroClaw/Hermes（各 50 条 PR + 39/50 条 Issue，合计约 89/100 条）的 **10 倍量级**，是 NanoBot（40 条）的 **25 倍**。其单日关闭 104 条 Issue、合并 114 条 PR 的绝对吞吐，超过多数长尾项目的年度总量。

**优势**：
- **唯一拥有正式 LTS 发布节奏的项目**（`v2026.8.33` extended-stable，且已开启 9.7 Fixes Tracker 修复窗口），其余项目当日均无版本发布。
- **问题图谱最完整**：632-agent 舰队、Windows SQLite WAL、prepared-model-catalog worker 等大规模/长跑场景，只有 OpenClaw 收到此类生产级反馈。

**技术路线差异**：
- OpenClaw 走**"gateway 中心化 + 多运行时插件"**路线，稳定性问题集中爆发在 gateway 内存/磁盘与跨运行时（Codex、claude-cli、DeepSeek）契约上（#154572、#153706、#121953）。
- 对比 NanoBot/NanoClaw 正推进**会话状态向 SQLite 集中**（NanoBot #5943、NanoClaw 容器生命周期治理），OpenClaw 的对应痛点是 SQLite WAL 膨胀（#143524）——同一存储选型，头部因规模先撞上运维上限。

**社区规模对比**：OpenClaw 单条 P0 Issue 可达 93 条评论（#143524），而 PicoClaw 最高仅 16 条、NanoClaw/NullClaw 当日评论数为 0。**OpenClaw 的社区讨论深度是长尾项目的数倍，但也意味着其决策噪声与协调成本更高**。


## 4. 共同关注的技术方向

| 共同方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **权限撤销 / 身份一致性** | ZeroClaw（#11197/#11198/#11126/#11123）、NanoBot（#5976）、Hermes（#127811） | 管理员撤销授权后，会话恢复/委派工具/排队操作仍保留旧权限路径；子智能体快照需限定当前会话 |
| **会话/子智能体架构收敛** | NanoBot（#5943/#5811/#5976/#5969/#4616）、NanoClaw（#3947/#3878）、Hermes（#127869 行重复） | 会话状态集中 SQLite、子智能体结果 in-turn 路由、失败恢复后数据库行去重 |
| **长跑资源退化（内存/磁盘）** | OpenClaw（#143524/#156571/#154812/#159596）、Hermes（#119403/#127830/#123340）、LobsterAI（#2395）、PicoClaw（#3281） | WAL 从不 checkpoint、worker 泄漏 1–3 GB/min、state.db 读放大、pack 增至 103 GB、长历史 UI 卡顿 |
| **渠道通知降噪 / 内部机制不外泄** | NanoBot（#5903/#5956/#5900）、CoPaw（#2359）、LobsterAI（微信轮询日志）、Hermes（#104849） | 压缩标记与通知被当普通消息发出；心跳/定时任务需 HEARTBEAT_OK/CRON_OK 信令控制 |
| **上下文成本预算化** | NanoBot（#5298/#1759）、OpenClaw（#102175 prompt cache）、ZeroClaw（#10778 缓存前缀失效） | 大型 MCP 工具集 schema 惰性加载与自动降级，避免上下文前缀失效导致缓存全废 |
| **Windows / 非 x86 平台适配** | Hermes（#126861/#127830/#127869）、OpenClaw（#143524/#157067）、LobsterAI（#2390/#2396 PowerShell 与中文路径）、NanoClaw（#3888 arm64）、CoPaw（#8026 Windows 路径） | PATH 超 8191 字符、PowerShell 5.1 默认 wrapper、arm64 缺 amd64 镜像、中文用户名编码 |
| **外部生态接入标准化** | NullClaw（#1015 MemCode）、ZeroClaw（#4853 .well-known 技能索引）、CoPaw（#8015 自定义 Skill 市场源） | 托管记忆引擎接入、技能发现索引、内网/气隙环境的自托管市场源 |


## 5. 差异化定位分析

**按功能侧重与目标用户分层：**

- **OpenClaw** — 通用 gateway 平台，面向**多 agent 舰队与生产自托管**（632-agent 规模真实存在）。技术架构最重、插件面最广，代价是稳定性债务最重。
- **NanoBot** — 多渠道（Telegram/飞书/微信）群组常驻助手，面向**真实生产级群组场景**。当日重心是子智能体运行时一致性 + WebUI 安全（#5970 防止凭据入 transcript）。
- **NanoClaw** — 容器生命周期与更新流程可靠性，面向**自托管 + 凭据网关（Iron/OneCLI）深度集成**用户，含非 x86（DGX Spark）场景。
- **Hermes Agent** — 桌面端（Desktop/TUI）+ 远程 profile，面向**跨平台重度个人用户**。当日主线是桌面端空闲资源燃烧，且是少数同时维护 **evals 评测工具链**的项目（#127895/#127894）。
- **CoPaw** — 桌面端（Tauri/NSIS）+ 多 IM 渠道，面向**中文环境私有化部署**（飞牛 fnOS、Windows、内网 Skill 市场）。可访问性诉求（#7999 字号）最鲜明。
- **ZeroClaw** — RPC/HTTP 行为对齐（v0.9.0 core-parity lane）+ 知识图谱记忆层 RFC，面向**协议级集成与身份权限模型**要求高的场景。
- **PicoClaw / LobsterAI / IronClaw** — 硬件厂商/大厂/研究机构背景的长尾项目，分别聚焦嵌入式渠道（IRC/DeltaChat）、Cowork 会话体验与文档编辑、远程边缘 worker 调度。

**架构关键差异**：中坚梯队正集体从 **JSONL 会话存储向 SQLite 集中**（NanoBot #5943），而 OpenClaw 因更早采用该路线，已率先遭遇 SQLite WAL 运维瓶颈——这构成一个清晰的"架构选型时差"样本。


## 6. 社区热度与成熟度

**活跃度四层分层：**

| 层级 | 项目 | 特征 |
|---|---|---|
| **T1 高吞吐（>100条/日）** | OpenClaw | 唯一。规模领先但 P0 密度高，处于**规模扩张后的质量压力期** |
| **T2 快速迭代（30–100条/日）** | Hermes、ZeroClaw、NanoBot、CoPaw | 快速迭代阶段。CoPaw/NanoBot 闭环效率高；Hermes/ZeroClaw 评审吞吐受限 |
| **T3 维护推进（5–30条/日）** | NanoClaw、LobsterAI、PicoClaw | 质量巩固/存量清仓阶段。LobsterAI 高危 Bug 被 stale 掩盖，PicoClaw 净推进 0 |
| **T4 低频/静默（≤5条/日）** | IronClaw、NullClaw、TinyClaw、Moltis、ZeptoClaw | 维护性活动或完全静默 |

**阶段判断：**
- **快速迭代阶段**：CoPaw（新 Issue 当日出 fix PR）、NanoBot（当日闭环）、ZeroClaw（RPC parity 主力推进）。
- **质量巩固阶段**：NanoClaw（"稳定性债务偿还日"，修复更新/清理路径缺陷）、Hermes（集中修复性能与安全，合并率低反映谨慎）。
- **质量风险阶段**：OpenClaw（P0 项多带 `no-new-fix-pr`）、LobsterAI（stale 机制掩盖高危 Bug，社区信任受损信号出现）。

**成熟度信号对比**：NanoClaw 当日 Issue/PR 评论数**全为 0**，属纯核心团队驱动；而 OpenClaw 单 Issue 93 条评论，社区参与深度差异极大。ZeroClaw 出现单一贡献者（Leon-SK668）单日大量 size:XS 测试 PR，是社区贡献活跃但也占用评审资源的双面信号。


## 7. 值得关注的趋势信号

1. **"权限撤销不彻底"正在成为系统性安全缺口，而非孤立 Bug。** ZeroClaw 单日四条独立 Issue（#11197/#11198/#11126/#11123）从会话恢复、委派工具、排队操作、SOP 授权四个入口指向同一根因：**撤销语义未贯穿所有路径**。对开发者的启示是——权限模型必须按"路径穷举"而非"入口打补丁"来设计。

2. **"更新流程必须诚实"成为自托管用户的信任底线。** NanoClaw #3961/`/update-nanoclaw` 报 `phase: complete` 却仍在跑旧宿主，直接催生 3 条 update/rollback PR。对开发者的参考：**静默失败比显式崩溃更危险**，更新事务的 liveness probe 应在切换前自检。

3. **长跑资源退化是跨平台、跨架构的共性难题，且可量化。** 从 OpenClaw 的 1–3 GB/min tmp 泄漏、Hermes 的 521 MB→5.6 MB 读取优化、到 LobsterAI 的 103 GB pack 增长，说明**"能启动"与"能长期运行"是两个不同的工程问题**，后者需要独立的诊断指标体系。

4. **内部机制外泄是渠道适配的普遍盲区。** NanoBot 的压缩标记/通知（#5903/#5956/#5900）与 CoPaw 的心跳信令（#2359）本质相同：**agent 内部状态与用户可见消息之间缺少边界层**。建议引入统一的通知受众（audience）路由，而非在渠道侧逐一手工过滤。

5. **技能/记忆的"可替换后端"生态正在形成。** NullClaw 的托管记忆引擎接入、ZeroClaw 的 `.well-known` 技能发现索引、CoPaw 的自托管市场源，三者指向同一方向：**agent 的技能与记忆层正在从内置走向可插拔标准化**，外部厂商（如 MemCode）已主动接洽。

6. **平台多样性正在倒逼架构决策。** arm64（NanoClaw DGX Spark）、中文用户名环境（LobsterAI）、Windows PATH 长度限制（Hermes）等不再是边缘 case。**非 x86 与非英文环境的适配成本，已成为项目实际可用性的分水岭。**

---

*本报告严格基于所提供的 13 个项目当日 GitHub 动态摘要生成，未补充任何数据源之外的信息。部分项目（TinyClaw、Moltis、ZeptoClaw）当日无活动。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-29

## 1. 今日速览

项目今日维持高强度开发节奏：24 小时内 33 条 PR 更新（20 条待合并、13 条已合并/关闭）、7 条 Issues 更新，无新版本发布。合并/关闭的 PR 集中在会话持久化与子智能体（subagent）架构的收敛上（#5976、#5975、#5969、#5811、#4616），显示维护者正在系统性重写运行时会话模型。待合并队列中，围绕 WebUI 安全与体验（#5970、#5971、#5979）、Telegram 分群策略（#5973、#5974）、MCP 上下文开销（#1759）的改动密集，反映出多渠道、多工具场景成为当前主要演进方向。整体健康度良好：Bug 报告普遍在同日出现对应 fix PR，响应链路短。但 33 条 PR 中多条为相互堆叠（如 #5974 依赖 #5973），合并顺序管理压力上升。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的关键 PR：

- **#5976 [CLOSED] fix(my): scope subagent snapshots to the current session**（作者 chengyongru，priority: p1，标签含 security）
  将 `my` 子智能体快照限定到当前规范会话所拥有的任务，先于格式化与 dot-path 遍历执行；无会话上下文时返回空任务，并在会话不匹配时拒绝直接子智能体检查。这是一项安全边界收紧的修复。
  链接: HKUDS/nanobot PR #5976

- **#5969 [CLOSED] fix(agent): require subagent consolidator at construction**（chengyongru，priority: p2）
  要求构造 `SubagentManager` 时必须显式传入 keyword-only 的 `Consolidator`，并在创建运行时资源前拒绝显式 `None`；同时统一绑定 transcript 与 provider-compaction 回调。
  链接: HKUDS/nanobot PR #5969

- **#5975 [CLOSED] refactor(tui): organize source by feature boundaries**（chengyongru，priority: p2）
  将 TUI 源码与同置测试按职责重组为 `app`、`client`、`composer`、`menus`、`platform`、`rendering`、`views`；以纯重命名的首个提交保留文件历史，再拆分应用外壳与主题/样式。属结构性可维护性投入。
  链接: HKUDS/nanobot PR #5975

- **#4616 [CLOSED] fix(agent): route direct subagent results in-turn**（chengyongru，创建于 2026-07-01，标签 conflict）
  将 direct 模式子智能体完成结果路由进当前 turn 的 pending 队列，不再依赖全局 bus consumer；保留结构化子智能体结果内容以支持 MapReduce 式归约，并保持 `long_task` 作用域。该 PR 从 7 月挂起到今日关闭，是积压清理的重要信号。
  链接: HKUDS/nanobot PR #4616

- **#5811 [CLOSED] refactor(agent): persist subagent sessions through shared execution**（chengyongru，创建于 2026-09-18）
  通过共享 `SessionExecutor` 执行委派任务，并将每个任务持久化为 `subagent:<task_id>` 会话，会话在调度前创建并保留父会话链接、任务 transcript 与工具检查点。
  链接: HKUDS/nanobot PR #5811

- **#5978 [CLOSED] fix(webui): hide provider models past OpenAI shutdown_date**
  与 #5979 内容一致（同日先后提交，一条关闭一条开放），用于在模型选择器中剔除已停服的 OpenAI 模型。
  链接: HKUDS/nanobot PR #5978

整体推进幅度：今日进展主要落在**运行时一致性**（子智能体会话隔离、结果路由、构造期约束）与**代码组织**（TUI 重构）两条主线上，而非用户可见的新功能。会话状态向 SQLite 集中（#5943，仍开放）与子智能体持久化（#5811，已关闭）组合起来，指向一次连贯的会话架构收敛。

## 4. 社区热点

- **#5903 [OPEN] Feishu: 隐藏的 session-checkpoint marker 被投递给用户**（4 条评论，今日讨论最多的 Issue）
  飞书渠道在空闲压缩后，把内部标记文本 `Continue the active task from the working-memory checkpoint above.` 当作普通聊天消息发给用户。这是一个既影响体验又泄露内部提示词结构的问题，与 #5900、#5956 同属"压缩通知外泄"问题簇。
  链接: HKUDS/nanobot Issue #5903

- **#5298 [OPEN] 为大型工具集预算化 model-visible MCP schemas**（2 条评论，创建于 2026-08-08，今日仍在更新）
  提案指出 `ToolRegistry.get_definitions()` 将稳定内置前缀与 MCP 工具 schema 拼接后传给 `AgentRunner`，大型 MCP 工具集带来显著上下文成本。该议题与今日开放的 PR #1759（惰性加载与自动降级以减少 MCP 上下文开销）直接呼应。
  链接: HKUDS/nanobot Issue #5298

- **#5956 [OPEN] 飞书无 in-place edit 能力，compaction notice 应可关闭**（2 条评论）
  指出 `nanobot/bus/notification_delivery.py` 的 `NOTIFICATION_AUDIENCES` 将 `ContextCompactionEvent` 硬映射到 `"channel"`，导致 `phase='started'` 与 `phase='succeeded'` 都被推送到源频道，用户会看到 `Compressing context…` 之类的噪音。作者明确标注与 #5784 同类。
  链接: HKUDS/nanobot Issue #5956

诉求分析：热点几乎全部集中在**"内部机制不应暴露给终端用户"**这一主题——压缩标记、压缩通知、压缩日志前缀。这既是渠道适配问题（飞书缺少 in-place edit、微信轮询日志冗长），也说明 context compaction 的默认行为在多渠道部署下过于"话多"。

## 5. Bug 与稳定性

按严重程度排列：

**P1 · 内部提示泄漏至用户可见渠道**
- **#5903 [OPEN] 飞书 session-checkpoint marker 被投递给用户**（4 条评论）
  空闲压缩后内部续跑指令被当作普通消息发出。属信息暴露与体验问题。
  fix PR：**暂无**（#5956 从通知路由层面提出相关改进，但非直接修复）
  链接: HKUDS/nanobot Issue #5903

**P2 · 故障转移机制被静默绕过**
- **#5967 [OPEN] provider 返回 "insufficient credits"（HTTP 400）时跳过 fallback 模型**（0 条评论，今日新开）
  OpenAI 兼容网关以 HTTP 400 + `You have insufficient credits to make this request` 表述额度耗尽时，nanobot 的欠费检测未识别该措辞，导致 `_should_...` 判定的 fallback 被静默跳过，原始 provider 错误直接返回用户。
  fix PR：**已有 —— #5968 [OPEN] fix(providers): honor configured fallbacks on "insufficient credits"**（同日提交）
  链接: HKUDS/nanobot Issue #5967 · HKUDS/nanobot PR #5968

**P2 · 模型选择器展示已停服模型**
- **#5977 [OPEN] Model picker 列出已关闭的 OpenAI 模型**（0 条评论，今日新开）
  用户选中 `gpt-5-chat-latest` 后下一轮 Telegram 对话立即失败：`The model 'gpt-5-chat-latest' does not exist or you do not have access to it.`；`gpt-5.3-chat-latest` 表现相同，而 `gpt-5-nano` 在同一 key 下正常。
  fix PR：**已有 —— #5979 [OPEN]**（#5978 同日提交后关闭）
  链接: HKUDS/nanobot Issue #5977 · HKUDS/nanobot PR #5979

**P2 · 渠道通知噪音（体验类）**
- **#5956 [OPEN] 飞书 compaction notice 应可关闭**（2 条评论，同日有 Issue 与评论活动）
  fix PR：暂无。另 **#5900 [OPEN]** 提出静默压缩并降低微信渠道轮询日志级别（与 `idleCompactAfterMinutes: 15` 场景相关），可作为同一问题的上位解法参考。
  链接: HKUDS/nanobot Issue #5956 · HKUDS/nanobot Issue #5900

小结：今日四类 Bug 中有两类在报告当日即获得 fix PR，修复闭环效率高；两个飞书通知类问题（#5903、#5956）尚无直接修复 PR，且已累积多渠道同类反馈，建议合并处理。

## 6. 功能请求与路线图信号

- **Telegram 分群 / 分话题组策略** —— Issue **#5972** 提出 `groupPolicy` 目前是频道级的（`"open"` 或 `"mention"`），在 forum topics 场景下无法让机器人在项目话题活跃、在闲聊话题安静。配套 PR **#5973**（per-chat / per-topic 覆盖）与 **#5974**（`/group` 命令，依赖 #5973 先合并）已在待合并队列，**纳入下一版本的可能性高**，但需先解决堆叠合并顺序。
  链接: HKUDS/nanobot Issue #5972 · HKUDS/nanobot PR #5973 · HKUDS/nanobot PR #5974

- **MCP 工具集上下文预算化** —— Issue **#5298** 与长期开放的 PR **#1759**（惰性加载 + 自动降级，创建于 2026-03-09，今日仍有更新但带 `[conflict]` 标签）指向同一目标。方向明确但 PR 存在冲突，短期内落地的确定性较低。
  链接: HKUDS/nanobot Issue #5298 · HKUDS/nanobot PR #1759

- **静默压缩与日志降噪** —— Issue **#5900** 提出上下文压缩不推送渠道通知、降低微信渠道轮询日志冗余度。与 #5956 诉求一致，是渠道可配置性方向的高共识需求，目前无对应 PR。
  链接: HKUDS/nanobot Issue #5900

- **WebUI 凭据安全收集** —— PR **#5970** 提出在 turn 中途以安全表单收集凭据，避免浏览器驱动型 agent（如 Playwright MCP）场景下把登录凭据打入聊天、模型上下文与会话 transcript。属安全驱动的功能新增。
  链接: HKUDS/nanobot PR #5970

- **会话搜索 FTS5 索引** —— PR **#5826** 实现 Issue #5509：为每个 workspace 增加 SQLite FTS5 索引作为搜索镜像，替代此前每次查询扫描全部 JSONL transcript 的做法。
  链接: HKUDS/nanobot PR #5826

## 7. 用户反馈摘要

- **渠道噪音是最集中、最一致的不满**：多位用户（lan5635、shenchaovip-afk、coder-iu）分别从飞书与微信渠道出发报告同一个根因——context compaction 的内部事件被当作面向用户的通知投递。用户能看到 `Compressing context…`、续跑标记等本应内部的文本，且飞书缺少 in-place edit 能力使这类消息无法被优雅替换。
- **真实部署场景是多渠道、多话题**：用户描述的场景包括"单个 bot 服务繁忙的 supergroup"（#5972）、微信渠道高频轮询、飞书群聊。这说明 NanoBot 正被用于真实的生产级群组常驻场景，而非单点试用，渠道行为的可配置性因此成为刚需。
- **配置项与实际行为存在落差**：用户设置了 `idleCompactAfterMinutes: 15`，却未预期会收到可见通知（#5900）；用户按模型选择器的展示结果选择了 `gpt-5-chat-latest`，却遭遇 `model_not_found`（#5977）。反馈指向同一类问题——UI 与配置对内部/失效状态缺乏过滤。
- **对上下文成本的主动关切**：贡献者在 #5298 中主动量化大型 MCP 工具集的 context cost，属于高级用户对资源效率的自发优化诉求，而非故障抱怨。

## 8. 待处理积压

- **#1759 [OPEN] [conflict] feat: 惰性加载与自动降级以降低 MCP 工具上下文开销**（作者 letzdoo-js，**创建于 2026-03-09**，今日更新）
  挂起近 7 个月，带冲突标签，且对应 Issue #5298 自 2026-08-08 起持续有讨论。这是当前积压中最有长期价值也最需要维护者介入的一项。
  链接: HKUDS/nanobot PR #1759

- **#5943 [OPEN] refactor(session): 将会话状态所有权集中到 SQLite**（chengyongru，创建于 2026-09-27，priority: p1）
  以 SQLite 事务替代 JSONL 作为权威存储，是会话架构收敛的核心改动，与今日关闭的 #5811、#5976 同源。规模大、影响面广，需重点评审排期。
  链接: HKUDS/nanobot PR #5943

- **#5826 [OPEN] feat(webui): 会话搜索 FTS5 索引**（ZedingZhang，创建于 2026-09-20）
  已开放 9 天且对应 Issue #5509，属性能优化类改动，等待评审。
  链接: HKUDS/nanobot PR #5826

- **#5956 / #5903 / #5900 飞书与微信通知噪音问题簇**
  三条 Issue 指向同一根因但尚无统一修复 PR（#5956 标注与 #5784 同类，#5903 有 4 条评论为今日最热）。建议维护者合并处理并给出明确取舍，否则会持续产生重复报告。
  链接: HKUDS/nanobot Issue #5956 · HKUDS/nanobot Issue #5903 · HKUDS/nanobot Issue #5900

- **堆叠 PR 链 #5973 → #5974**
  #5974 明确声明依赖 #5973 先合并，否则 diff 会包含 #5973 的提交。建议维护者优先处理 #5973 以避免审查负担累积。
  链接: HKUDS/nanobot PR #5973 · HKUDS/nanobot PR #5974

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-29

## 1. 今日速览

今日 Hermes Agent 仓库维持高位活跃：24 小时内 Issues 更新 50 条（新开/活跃 46，关闭 4），PR 更新 50 条（待合并 48，合并/关闭 2），无新版本发布。当日动态呈现鲜明的"桌面端性能与资源占用"主题——CPU/GPU 空转、内存增长、`state.db` 读放大、安装/更新流程的资源失控等议题占据了 Issue 列表前列。修复侧同样集中，多个针对性能、Windows 兼容性与安全边界的 PR 在推进中，但合并率偏低（2/50），积压压力明显。整体看，项目处于"高强度问题发现 + 集中修复"阶段，健康度尚可但待处理队列偏长。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #127883** — 会话列表读取优化，对应 Issue #119403：当 `state.db` 中的 planner stats 早于 `idx_messages_session_id` 索引时，不再逐条扫描全部 message 行。报告给出的测试数据显示，单次列表调用页面读取量从 **521 MB 降至 5.6 MB**。这是当日最直接、可量化收益最高的性能修复。
  链接：https://github.com/NousResearch/hermes-agent/pull/127883

- **PR #127929** — 网关侧修复（Fixes #96181，隶属 Tracker #127647 wave 2b）：将"每次启动即被杀死"的 resume 在第三次启动时挂起，而非无限重放。
  链接：https://github.com/NousResearch/hermes-agent/pull/127929

- **PR #127928** — 修复 evals `readtool/runner.py` 的非原子写入与 skip-if-exists 逻辑，避免崩溃后损坏的 rep 被永久跳过（对应当日新开的 Issue #127895）。
  链接：https://github.com/NousResearch/hermes-agent/pull/127928

- **PR #127930** — 安全修复：`browser_cdp(method="Page.navigate")` 此前只执行 SSRF 检查，现补齐 URL 内密钥检查与网站黑/白名单校验，与 `browser_navigate` 对齐。
  链接：https://github.com/NousResearch/hermes-agent/pull/127930

**整体推进幅度判断**：当日合并/关闭仅 2 条，但 open PR 中已有多个与当日新报 Bug 一一对应的修复（#127928↔#127895、#127883↔#119403），说明维护者响应链路通畅；实际向前迈进主要体现在性能与安全两条线上。

## 4. 社区热点

- **Issue #127647（10 条评论，当日创建）** — 桌面端空闲资源燃烧追踪总表，覆盖 renderer CPU/GPU、backend serve CPU 与内存，作为 #122413 / #88288 的 scope map。当日活跃度最高，且衍生了 wave 2b 修复 PR #127929。
  链接：https://github.com/NousResearch/hermes-agent/issues/127647

- **Issue #16833（6 条评论，2 👍）** — 项目级记忆池（全局 + 按项目）功能请求，自 2026-04-28 创建至今仍在更新，是评论数与点赞数最高的长期 Issue。诉求核心：当前单一全局短期记忆池会污染多项目上下文。
  链接：https://github.com/NousResearch/hermes-agent/issues/16833

- **Issue #88288（4 条评论，当日关闭）** — Linux 桌面端 renderer 90–120% CPU 热循环 + backend serve 35–45% 空转，最小化与重启均无法恢复。当日被关闭，成为 #127647 追踪表的组成部分。
  链接：https://github.com/NousResearch/hermes-agent/issues/88288

- **PR #125263（当日更新）** — 测试 runner 的 Windows 路径切分、超时重试与自适应 worker 修复，是当日 PR 列表中较受关注的一条。
  链接：https://github.com/NousResearch/hermes-agent/pull/125263

**背后诉求分析**：热点高度集中于"桌面端在真实使用场景下的资源消耗"，用户不只是报告单点崩溃，而是在构建跨平台的系统性问题图谱（#127647 本身即是一个追踪器）。记忆隔离（#16833）则反映了长周期用户从"能用"转向"多项目可用"的需求升级。

## 5. Bug 与稳定性

按严重程度排列：

**P1**
- **Issue #123340（当日关闭）** — systemd gateway 每次启动重跑 source-completion tail，`installs/<hash>/environments` 增长到数十 GB 直至 ENOSPC。已关闭。
  链接：https://github.com/NousResearch/hermes-agent/issues/123340
- **Issue #127869（OPEN，当日创建）** — Windows 桌面端失败回合恢复后，`state.db` transcript 行大量重复（635 行中仅约 308 唯一）。**暂无对应 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/127869

**P2**
- **Issue #127830（OPEN）** — Windows 下 `tree:0` 部分克隆的 update-check rev-list 触发无界按需抓取，pack 增长至 103 GB 并持续触发杀毒扫描。**暂无 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/127830
- **Issue #119403（OPEN）** — 会话列表每次轮询对每个 session 做 messages 子查询，单次 0.4–0.7 GB 读取、186 MB/s 持续读。**已有 fix PR #127883。**
  链接：https://github.com/NousResearch/hermes-agent/issues/119403
- **Issue #127880（OPEN，当日创建）** — 桌面端 turn 中途 compaction 轮转后，静默回合结算把父会话误报为 `stream_drop`。**暂无 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/127880
- **Issue #127811（OPEN，当日创建）** — 多路复用网关中被 registry 强制退休的 SessionDB 可通过 #94736 自愈路径重开 writer。**暂无 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/127811
- **Issue #108088（OPEN，5 条评论）** — 远程主 Desktop 上 Bot Mode relay 让本地 backend 永久存活（30s WebSocket churn）。**暂无 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/108088
- **Issue #88994（OPEN）** — SSH remote profile 在本地 profile 名 ≠ 远端 `remoteProfile` 时失效（30299efa3 回归）。**暂无 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/88994
- **Issue #126861（OPEN）** — Windows 打包构建因 PATH 超过 cmd.exe 8191 字符限制而报 `'node' is not recognized`。**暂无 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/126861
- **Issue #105239（OPEN）** — 已打开聊天的 backend 豁免 maxBackends 与 idle reaper，N profile 常驻 N 个 serve 进程（约 120 MB/个）。**暂无 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/105239
- **Issue #124874（OPEN）** — HTTP-200 拒答（如 Anthropic `stop_reason=refusal`）触发 fallback 时不记录原因，仅标为 "provider failure"。**相关 PR #125069 正在处理同类问题（#125058）。**
  链接：https://github.com/NousResearch/hermes-agent/issues/124874

**P3**
- **Issue #127899 / #127895 / #127894（均为当日创建）** — evals / 工具链的三处可靠性缺陷：`mini_swe_runner` 所有失败路径均 exit 0；结果写入非原子导致崩溃永久污染 result cell；`core_tool_deferral` 报告硬编码 arm 集合，静默丢弃 `--arms` 覆盖。**#127895 已有 fix PR #127928。**
  链接：https://github.com/NousResearch/hermes-agent/issues/127899 · https://github.com/NousResearch/hermes-agent/issues/127895 · https://github.com/NousResearch/hermes-agent/issues/127894
- **Issue #104849（OPEN，当日更新）** — 桌面端 skill 命令缓存约每 5 秒全量重扫 skills 目录。**暂无 fix PR。**
  链接：https://github.com/NousResearch/hermes-agent/issues/104849
- **Issue #127651（当日关闭）** — macOS launchd gateway 的 `/usr/bin/osascript` wrapper 空闲时约耗 5% CPU。已关闭。
  链接：https://github.com/NousResearch/hermes-agent/issues/127651

**已关闭的历史包袱**：Issue #46975（桌面端切换 profile 累积 80+ 僵尸 dashboard 进程）在创建三个多月后于今日关闭，是长期积压清理的一个正面信号。
链接：https://github.com/NousResearch/hermes-agent/issues/46975

## 6. 功能请求与路线图信号

- **项目级记忆池（Issue #16833，2 👍）** — 请求将单一全局短期记忆池拆分为全局 + 每项目两级。目前**未见对应实现 PR**，但该 Issue 持续保持活跃更新，是呼声最高的功能方向。
  链接：https://github.com/NousResearch/hermes-agent/issues/16833
- **TUI 编辑器 Vim 模式（PR #118517）** — 通过既有 `display.vim_mode` 设置启用 modal 编辑，支持 Esc、i/a/I/A、h/j/k/l、w/b/e、0/$ 等。属低风险增量功能，具备进入下一版本的条件。
  链接：https://github.com/NousResearch/hermes-agent/pull/118517
- **Telegram 图片批量相册发送（PR #99419）** — 多图批次由逐个 `sendPhoto` 改为单个 `sendMediaGroup`。
  链接：https://github.com/NousResearch/hermes-agent/pull/99419
- **邮件 IMAP/SMTP 登录身份解耦（PR #77384）** — 新增 `EMAIL_LOGIN_USER` 环境变量与 `config.yaml` 中 `platforms.email.login_user` 镜像项。
  链接：https://github.com/NousResearch/hermes-agent/pull/77384
- **Telegram 语音回复语义保留（PR #95740）** — 修复回复语音条时缓存为 `AUDIO` 导致 STT 被跳过的问题。
  链接：https://github.com/NousResearch/hermes-agent/pull/95740

**纳入下一版本的可能性判断**：上述 PR 均已 Open 且实现完整，但更新时间跨度从 8 月初到 9 月下旬不等；结合当日仅 2 条合并的情况，短期内集中入版的可能性偏低，更可能按组件分批推进。

## 7. 用户反馈摘要

- **多项目上下文污染是真实高频痛点**：Issue #16833 明确指出用户在多项目间工作时"最终得到一个混合的"记忆池，并为此获得了本批次最高的 2 个 👍。
- **资源消耗直接影响日常可用性**：Issue #88288 描述 Linux 机器上 renderer 从启动即钉死一个核心、最小化与重启都无法恢复；Issue #105239 指出 N profile 场景下常驻约 N × 120 MB 的 serve 进程；Issue #119403 量化了"数百 MB/s 持续读"对同进程 UI 的影响。用户提供的是具体环境、版本与实测数值，属于高质量反馈。
- **跨平台兼容性困扰集中在 Windows**：PATH 长度限制导致打包构建失败（#126861）、103 GB pack 增长与杀毒反复扫描（#127830）、失败恢复后数据库行重复（#127869）——三条独立问题指向同一平台。
- **可观测性不足引发不满**：Issue #124874 抱怨 fallback 切换"不记录原因"，用户只能看到笼统的 "provider failure"，难以自诊断。相关 PR #125069 正在将治理类 403 拒绝与无效 API key 区分开。
- **正面信号**：Issue #46975（僵尸进程累积）与 #88288（CPU 热循环）两个长期困扰用户的缺陷在今日关闭，且前者已存在约三个半月，反映出积压清理在推进。

## 8. 待处理积压

- **PR #77384（邮件登录身份解耦）** — 创建于 2026-08-03，已 Open 近两个月，关联 #41331、#46676。属跨平台网关功能，建议优先评审。
  链接：https://github.com/NousResearch/hermes-agent/pull/77384
- **PR #83880（kanban 拒绝 session 认领 dispatcher 任务，Fixes #83736）** — 创建于 2026-08-11，修复两个并发 writer 写同一任务工作区的问题，属数据一致性风险。
  链接：https://github.com/NousResearch/hermes-agent/pull/83880
- **Issue #16833（项目级记忆池）** — 创建于 2026-04-28，已开放五个月，是本批次中最受认可（2 👍）的功能请求，至今无实现 PR。
  链接：https://github.com/NousResearch/hermes-agent/issues/16833
- **Issue #88994（SSH remote profile 回归）** — 创建于 2026-08-18，已确认是 30299efa3 引入的回归，至今无 fix PR，直接影响远程连接场景。
  链接：https://github.com/NousResearch/hermes-agent/issues/88994
- **PR #125263（测试 runner Windows 修复）** — 创建于 2026-09-27，涉及 CI 中 `--files` 参数在 Windows 上系统性失败，属工程基础设施问题。
  链接：https://github.com/NousResearch/hermes-agent/pull/125263

**维护者关注建议**：当日待合并 PR 高达 48 条而合并仅 2 条，评审吞吐是当前主要瓶颈；同时 P1 级 Issue #127869 与多条 P2 级平台/性能问题尚无对应修复，建议按"P1 → 有 PR 就绪 → Windows 平台批次"的顺序清理。

---
*本日报仅基于所提供的 GitHub 数据（2026-09-29）生成，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-09-29）

## 1. 今日速览

今日 PicoClaw 无新版本发布，活动集中在 Issue 与 PR 的存量更新：过去 24 小时 3 条 Issue 活跃、4 条 PR 更新，但**合并/关闭数为 0**，Issue 新开与活跃均为 3、关闭 0。整体活跃度属**中低水平**，且更新项中多条带有 `stale` 标记，说明相当一部分是长期挂起后的重新触碰而非新增讨论。项目当前没有代码被合入主干，进展主要体现在问题确认与修复方案储备上。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目主干代码未向前推进。4 条处于待合并状态的 PR 覆盖认证、IRC 协议、Web UI 性能与 DeltaChat 重构四个方向：

- [PR #3378](https://github.com/sipeed/picoclaw/pull/3378) `fix(auth)`：修复 `RefreshAccessToken` 中硬编码 scope 为 `"openid profile email"`、覆盖 `OAuthProviderConfig.Scopes` 配置的问题，属配置正确性修复。
- [PR #3354](https://github.com/sipeed/picoclaw/pull/3354) `feat(irc)`：新增 IRCv3 `draft/multiline` 接收支持，默认请求 `batch`、`message-tags` 与 `draft/multiline`，使长消息或跨行消息作为单条入站消息处理。
- [PR #3347](https://github.com/sipeed/picoclaw/pull/3347)：针对 Web UI 聊天区域文本过多时的卡顿问题，作者称已在 `picoclaw-launcher` 上构建测试，桌面与移动端 Brave 浏览器均不再卡顿。
- [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) `refactor(deltachat)`：清理实现与文档，减少约 200 行代码，移除遗留特性与过时测试、改用官方 relay 列表网站、移除基于密码的邮件配置（密钥须存于 jsonrpc）、将 `invite_link` 重命名为 `join_invite_link` 等。

其中 PR #3222 与 PR #3347 的创建时间分别为 2026-07-03 与 2026-08-27，均已被标记 `stale`，长期停滞值得关注。**今日项目在代码层面的净推进为 0，处于“方案堆积、等待评审合入”的状态。**

## 4. 社区热点

今日讨论热度最高的条目集中在 Issue 侧：

- [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)（16 条评论，👍 2）：Web UI 聊天输入在历史记录较长时非常卡顿。这是今日评论数最多、也是唯一获得点赞的条目，说明 Web UI 性能是真实且被多人认同的痛点。
- [Issue #440](https://github.com/sipeed/picoclaw/issues/440)（7 条评论）：主张用上下文窗口约束与循环检测替代 `max_tool_iterations: 20` 硬性迭代上限。
- [Issue #3366](https://github.com/sipeed/picoclaw/issues/3366)（5 条评论）：请求支持 OpenAI 兼容的第三方 provider。

**诉求分析**：热点议题分别指向三个基础体验方向——前端交互性能、Agent 执行策略的灵活性、以及模型/网关接入的开放性。这些都是影响长期使用体验的结构性问题，而非边缘需求。

## 5. Bug 与稳定性

今日仅有一例明确的 Bug 类 Issue：

- **[中高] Web UI 聊天输入卡顿** — [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)，标记为 `[BUG]`、`[stale]`。环境为 PicoClaw 0.3.1、Go 1.25.11、PicoClaw Web 渠道；复现路径为打开会话、累积较多聊天历史后持续输入即出现卡顿。**已有对应 fix PR**：[PR #3347](https://github.com/sipeed/picoclaw/pull/3347) 声称可解决该卡顿，但尚未合并。

另需注意 [PR #3378](https://github.com/sipeed/picoclaw/pull/3378) 修复的 OAuth token 刷新 scope 硬编码问题，虽以 fix 形式提交，但本次数据中未见对应 Issue，暂按潜在配置缺陷对待。

今日无崩溃或回归类问题报告。

## 6. 功能请求与路线图信号

- **自定义 OpenAI 兼容 Provider** — [Issue #3366](https://github.com/sipeed/picoclaw/issues/3366)。用户希望接入自托管路由（如 9Router），建议新增名为 "OpenAI Compatible" 的自定义 provider。目前**未见对应实现 PR**，属待评估需求。
- **以上下文窗口约束替代硬性迭代上限** — [Issue #440](https://github.com/sipeed/picoclaw/issues/440)。指出 `max_tool_iterations: 20` 对复杂任务过于严格，会导致合法工作流在产出交付物之前就以 "I've completed processing but have no response to give" 失败，建议引入循环检测与上下文窗口边界控制。该 Issue 自 2026-02-18 创建、跨度较长，**暂无关联 PR**。
- **IRCv3 多行消息支持** — [PR #3354](https://github.com/sipeed/picoclaw/pull/3354)。属已具实现形态的功能增量，若被合入将改善 IRC 渠道的长消息体验。

综合判断：**上述需求今日均无合入动作，短期内最可能落地的是已有 PR 支撑的 IRC 多行消息与 Web UI 性能修复**；OpenAI 兼容 provider 与 Agent 迭代策略调整仍需维护者表态。

## 7. 用户反馈摘要

- **Web UI 是主要不满来源**：Issue #3281 指向累积聊天历史后的输入卡顿，评论达 16 条，说明有较多用户复现或参与讨论；PR #3347 作者亦从桌面与移动端浏览器角度确认了卡顿的存在与修复效果。
- **Agent 执行体验受硬上限困扰**：Issue #440 反馈 `max_tool_iterations: 20` 会使复杂任务在未完成交付前中断，并给出 "I've completed processing but have no response to give" 这一具体失败表征。
- **接入灵活性存在缺口**：Issue #3366 反映用户有自托管路由/第三方 OpenAI 兼容服务的实际使用场景，当前缺少对应接入方式。
- **认证配置行为不符合预期**：PR #3378 反映 token 刷新会覆盖用户已配置的 provider scopes，属配置被静默忽略类反馈。

整体看，用户反馈集中于**性能、执行策略可控性、接入开放性**三个方向，均为使用场景驱动的真实诉求。

## 8. 待处理积压

以下条目创建时间较早、至今未合入或未关闭，且多带 `stale` 标记，建议维护者优先安排评审或明确结论：

| 条目 | 创建时间 | 状态 | 说明 |
|---|---|---|---|
| [Issue #440](https://github.com/sipeed/picoclaw/issues/440) | 2026-02-18 | OPEN，`enhancement`/`agent`/`config` | 积压约 7 个月，涉及 Agent 核心执行策略，讨论 7 条但无实现 PR |
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | 2026-07-03 | OPEN，`stale` | DeltaChat 重构，-200LOC，含破坏性变更（重命名字段、移除密码邮件配置），长期未评审 |
| [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) | 2026-08-27 | OPEN，`stale` | 直接对应热点 Bug #3281，作者已自测，建议优先合入 |
| [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) | 2026-07-21 | OPEN，`stale` | 今日最热 Issue，已有 fix PR 待合并 |
| [PR #3354](https://github.com/sipeed/picoclaw/pull/3354) | 2026-08-31 | OPEN，`stale` | IRCv3 多行消息，功能明确 |

**健康度提示**：今日 Issue/PR 更新中 `stale` 标记占比高，且合并数为 0，反映出评审与合入环节存在积压。尤其是 PR #3347 与 Issue #3281 构成“痛点 + 修复”配对，已具备合入条件，是当前投入产出比最高的处理项。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-29

## 1. 今日速览

项目今日处于**高强度维护状态**：过去 24 小时共 22 条 Issue/PR 更新，其中 PR 19 条（9 条待合并、10 条已合并/关闭），Issue 3 条（1 条新开、2 条关闭）。今日无新版本发布。从内容分布看，活动高度集中在**容器生命周期管理、`/update-nanoclaw` 更新流程可靠性与 Iron Proxy 网关安装/卸载**三条主线上，且绝大多数贡献来自核心团队成员 `glifocat`，另有 `tchopoorian` 参与。整体看，项目正在系统性地收敛一批"边缘但真实"的安装与更新失败场景，健康度良好，但**社区参与度偏低**——所有 Issue/PR 的评论数与 👍 数均为 0，属于典型的"核心团队内部驱动"阶段。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日已合并/关闭 10 条 PR，推进方向可归纳为四类：

**容器生命周期治理（核心逻辑）**
- [#3947 CLOSED](https://github.com/nanocoai/nanoclaw/pull/3947) `fix(host): stop containers whose session or agent group was deleted` — 主机端巡检现在会停止「会话或 agent group 已被删除」的容器，消除了删除操作后容器残留至下次宿主重启的窗口。这直接对应 Issue #3909。
- [#3878 CLOSED](https://github.com/nanocoai/nanoclaw/pull/3878) `fix(setup): stop the ping agent's container before deleting its folder` — 修复 setup 后置清理删除 ping agent 目录却遗留其容器的问题。

**调度与进程管理**
- [#3957 CLOSED](https://github.com/nanocoai/nanoclaw/pull/3957) `fix(scheduling): kill the whole process group when a pre-task script times out` — 超时的 pre-task 脚本现在会连同子进程一起终止（此前 bash fork 出的最后一条命令会变孤儿）。

**Iron Proxy 网关链路**
- [#3953 CLOSED](https://github.com/nanocoai/nanoclaw/pull/3953) `fix(iron-proxy): stop early on arm64 engines that cannot run amd64 images` — 在无法运行 amd64 镜像的 arm64 Docker engine 上提前终止安装并给出明确修复指引，取代原先拉取后才 `exec format error` 的失败方式，对应 Issue #3888。
- [#3883 CLOSED](https://github.com/nanocoai/nanoclaw/pull/3883) `fix(iron-proxy): remove Iron Control's database on uninstall` — 卸载时清理本副本的 Iron Control 数据库，保证同目录重装干净启动；核心保持 gateway-agnostic，不硬编码 Iron。

**安全检查（Hardening）**
- [#3920 CLOSED](https://github.com/nanocoai/nanoclaw/pull/3920) `fix(setup): restrict failure-assist agents on a live install` — setup 期间的失败辅助 agent 从 allow-all 改为各 CLI 自身的默认安全权限基线。这是一项**安全性收紧**，值得已在用失败辅助流程的用户留意行为变化。

整体推进幅度：中等偏上。今日合并的 PR 并非新功能，而是集中修复"更新/安装/清理"路径上的可靠性缺陷，属于**稳定性债务偿还日**。

---

## 4. 社区热点

需要如实指出：**今日所有 Issue 与 PR 的评论数和 👍 数均为 0**（数据源中 PR 的评论字段显示为 `undefined`）。因此不存在真正意义上的"讨论热点"。若以"变更影响面"作为热度替代指标，最受关注的集中在：

- [#3962 OPEN](https://github.com/nanocoai/nanoclaw/pull/3962) `fix(update): refuse cutover when the service liveness probe itself fails` — 直击 Issue #3961 所报"更新报 complete 但旧宿主仍在服务"的静默错误。
- [#3956 OPEN](https://github.com/nanocoai/nanoclaw/pull/3956) `fix(update): rollback stops the live nohup host and drains agent containers` — 修复 rollback 在 nohup 安装场景下停错进程、且在替换 `data/` 前不停 agent 容器的问题。
- [#3918 OPEN](https://github.com/nanocoai/nanoclaw/pull/3918) `fix(agent-runner): do not nudge a result-door turn that already replied via a tool` — 阻止 result-door provider（如 OpenCode）重复发送 agent 已通过 `send_message` 发出的回复。**注意：该 PR 自述 "Held until the send_message ack flag lands"**，处于主动阻塞状态。

诉求分析：当前核心团队的实际关注点是**"更新流程不能说谎"**——即 `/update-nanoclaw` 在失败时不得报告 `complete`。这是一类高优先级信任问题，也解释了为何单日出现 3 条围绕 update/rollback 的 PR。

---

## 5. Bug 与稳定性

按影响面排序：

**高 — 更新流程静默失败（数据一致性风险）**
- [#3961 OPEN](https://github.com/nanocoai/nanoclaw/issues/3961) `[kind/bug, area/setup-installation, triage/unresolved]` `/update-nanoclaw` 报 `phase: complete`，但实际仍是更新前的宿主在服务（`systemctl --user` 无法连接到 bus 时）。影响 v2.4.0 (143db6c9) 及 main@63082563，平台 Linux。**已有 fix PR：[#3962](https://github.com/nanocoai/nanoclaw/pull/3962)**（配套 [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) 处理 rollback）。

**中 — 容器残留**
- [#3909 CLOSED](https://github.com/nanocoai/nanoclaw/issues/3909) `[kind/bug, area/containers]` 宿主会为「在 spawn 中途被删除的 agent group」启动会话容器（`spawnContainer` 在 `src/container-runner.ts` 约 L359 处只读取一次 agent group）。影响 main@c313d061，任意平台。**已由 [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) 关闭。**

**中 — arm64 平台安装失败**
- [#3888 CLOSED](https://github.com/nanocoai/nanoclaw/issues/3888) Iron Proxy setup 在 arm64 主机失败：Iron Control 镜像仅提供 amd64，容器以 `exec format error` 退出。复现环境为 NVIDIA DGX Spark、NanoClaw 2.4.0、OpenCode + Iron Proxy（Advanced setup）。**已由 [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) 关闭**——注意该 PR 的解法是"提前失败并给出修复说明"，**并非让 Iron Control 在 arm64 上可用**，arm64 用户仍需规避该路径。

**其他待观察（OPEN，尚未合并）**
- [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) 日志遇到不可 JSON 序列化的值（如循环引用）时 `JSON.stringify` 抛异常可拖垮宿主。
- [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) 当凭证网关启用时，`host.docker.internal` 上的明文 HTTP MCP 服务不可达（缺 `NO_PROXY` 本地跳转），自 2026-08-29 起已开放 31 天。
- [#3963](https://github.com/nanocoai/nanoclaw/pull/3963) 更新 e2e 套件在 Node 24.13.1 之前的版本上因测试自身 setup 失败而报错，阻塞 `/update-nanoclaw` 验证。

---

## 6. 功能请求与路线图信号

今日无明确的"新功能请求"类 Issue；所有条目均为 bug/修复。但以下 PR 透露出下一版本可能纳入的**能力与约定变化**：

- **网关解耦（文档与架构方向）**：[#3955](https://github.com/nanocoai/nanoclaw/pull/3955) 让 OpenCode skill 文档不再点名任何网关，把 Iron 与 OneCLI 的凭证说明分别迁入各自 skill；[#3954](https://github.com/nanocoai/nanoclaw/pull/3954) 明确记录 OneCLI 与 Iron 适配器**无法拒绝查找与写入之间发生的并发值轮换**，并为 OneCLI 补了测试。前者倾向纳入，后者是能力边界的诚实披露。
- **网关感知的模型 URL 校验**：[#3919](https://github.com/nanocoai/nanoclaw/pull/3919) 让 OpenCode setup 在提示符处即校验本地模型 URL 与所选网关的匹配性（Iron 下同机无密钥模型走明文 `http://host.docker.internal:<port>/v1`）。属于 setup 体验改进。
- **`send_message` ack flag**：[#3918](https://github.com/nanocoai/nanoclaw/pull/3918) 的合并被显式绑定在一个尚未落地的 `send_message` ack flag 上，说明该依赖项是相关修复的前置条件，可作为**近期路线图节点**跟踪。

---

## 7. 用户反馈摘要

受限于今日 Issue/PR 评论数均为 0，无法提炼讨论区反馈。但从**报错文本本身**可还原出真实使用场景与痛点：

- **平台多样性真实存在**：Issue #3888 来自 aarch64（NVIDIA DGX Spark）主机，配合 OpenCode + Iron Proxy Advanced setup。说明用户正在非 x86 环境中做较深度的网关集成，而官方镜像的架构覆盖尚未跟上。
- **更新可靠性是核心痛点**：#3961 描述 `/update-nanoclaw` 在 `systemctl --user` 连不上 bus 时"报告成功实际没更新"，这类**静默失败**对自托管用户尤其危险——用户会在不知情的情况下长期运行旧宿主。
- **setup 清理不彻底**：#3878、#3909、#3947 三条共同指向"删除/清理后容器仍在跑"，反映用户在反复安装、删除 agent group 的迭代过程中遇到了资源泄漏类摩擦。
- **失败辅助 agent 权限过宽**：#3920 修复合乎安全预期的诉求，说明有用户在实机安装中关注 setup 阶段 agent 的权限边界。

---

## 8. 待处理积压

以下 OPEN 条目已存在相对较长时间或处于阻塞状态，建议维护者优先关注：

| 条目 | 类型 | 已开放 | 说明 |
|---|---|---|---|
| [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) | PR: Fix | 自 2026-08-29（**31 天**） | `NO_PROXY` 本地跳转，使凭证网关启用时宿主侧 MCP 服务可达。功能影响明确，长期未合并。 |
| [#3918](https://github.com/nanocoai/nanoclaw/pull/3918) | PR: Fix | 自 2026-09-25（4 天） | 主动阻塞于 `send_message` ack flag；需跟踪前置项落地节奏。 |
| [#3961](https://github.com/nanocoai/nanoclaw/issues/3961) | Issue: bug | 自 2026-09-28（1 天） | 标记 `triage/unresolved`，虽有 #3962 对应，但 Issue 本身尚未关闭。 |
| [#3963](https://github.com/nanocoai/nanoclaw/pull/3963) | PR: Fix | 自 2026-09-28（1 天） | Node 24.13.1 以下版本 e2e 失败，**阻塞更新流程验证**，优先级实际不低。 |
| [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) / [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) | PR: Fix | 自 2026-09-28（1 天） | rollback 正确停止 live nohup 宿主、日志序列化不再抛异常。 |

**观察**：#3654 是当前积压中最久的一条，且其场景（凭证网关 + 本地 MCP）与今日大量 Iron/OneCLI 相关改动属同一主题域，建议与 [#3954](https://github.com/nanocoai/nanoclaw/pull/3954)、[#3955](https://github.com/nanocoai/nanoclaw/pull/3955) 一并排期处理。

---

*说明：本报告严格基于所提供的 GitHub 数据生成，未补充任何外部信息。数据源中 PR 评论数显示为 `undefined`，故第 4 节以变更影响面替代讨论热度进行排序。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-09-29）

## 1. 今日速览

今日项目活跃度**偏低但结构健康**：过去 24 小时仅有 1 条 Issue 更新和 1 条 PR 更新，无新版本发布。唯一的 PR #1014（`v20260929`）已合并/关闭，完成了一次常规版本迭代（Web 搜索 provider 修复、QQ 回复 Markdown 清理、版本号提升）。社区侧出现一条来自第三方厂商 MemCode 的集成提案（Issue #1015），属于外部生态主动接洽，但尚无社区讨论（0 评论、0 反应）。整体看，项目处于**维护性推进阶段**，无阻塞性故障信号，但也缺乏深度社区互动。

## 2. 版本发布

今日无新版本 Release。合并的 PR #1014 标题为 `v20260929`，包含版本号提升，表明新一轮版本已在代码层面就绪，但尚未在 Releases 中体现，建议关注后续发布动作。

## 3. 项目进展

**已关闭 PR #1014 — `v20260929`**（作者：elwina）
链接：nullclaw/nullclaw PR #1014

推进内容（依据 PR 摘要）：
- **Web 搜索 provider 固定**：将搜索行为绑定到已配置的 provider，并阻止 Exa 因重复的 `Content-Type` 头而拒绝请求 —— 属于外部服务兼容性修复。
- **QQ 官方回复处理**：在发送官方 QQ 回复前剥离 Markdown 标记，改善非 Markdown 渲染渠道下的消息可读性。
- **版本号提升**：为 v20260929 做版本准备。

贡献评估：该 PR 属于**修复 + 发布准备**型变更，单次合并即为项目补上了两个具体渠道/服务层面的缺陷，向前迈进的幅度为**小幅稳定推进**，而非功能性跃升。PR 的 Test plan 显示发布工作流构建项为未勾选状态（`- [ ]`），建议维护者确认发布链路是否已实际验证。

## 4. 社区热点

今日无高讨论度条目：两条更新均为 0 评论。

**唯一值得关注的社区动作 — Issue #1015**（作者：vivekgupta-memcode，OPEN）
链接：nullclaw/nullclaw Issue #1015
标题：Hosted MemCode engine for nullclaw memory interface

诉求分析：提案方 MemCode 创始人 Vivek Gupta 主动提出以**托管（hosted）记忆引擎**的形式接入 NullClaw 的记忆接口。其论据为：NullClaw 已支持多种可替换的记忆引擎、运行时占用极小，而远程记忆选项可让用户将部分记忆数据保留在外部。这反映出**外部厂商希望以插件/可替换后端的方式进入 NullClaw 生态**，而非独立竞争。需注意：该 Issue 目前 0 评论、0 👍，尚不构成社区热点，更接近单向的商业/生态接洽，尚无用户端需求验证。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归 Issue。已在 PR #1014 中修复的两项稳定性问题（已合并，属既有 fix）：

- **中等严重度 — Exa 搜索因重复 `Content-Type` 头被拒绝**：影响 Web 搜索功能可用性；**fix PR 已合并（#1014）**。
- **低严重度 — QQ 官方回复中残留 Markdown 标记**：影响输出呈现一致性，非功能性故障；**fix PR 已合并（#1014）**。

## 6. 功能请求与路线图信号

**Issue #1015：Hosted MemCode 记忆引擎接入请求**
链接：nullclaw/nullclaw Issue #1015

纳入下一版本的可能性评估：**信号存在但证据不足**。支持纳入的既有基础是 NullClaw 已有可替换记忆引擎架构（由提案方陈述），理论上接入成本较低；不利因素是该提案今日 0 评论、0 反应，维护者尚未表态，也无 PR 出现。因此当前只能判断为**待评估的路线图候选**，不宜视为已排期。

## 7. 用户反馈摘要

今日 Issues 无评论，缺少终端用户反馈数据。唯一可提炼的一手信息来自 Issue #1015 提案方的表述：

- **认可点**：NullClaw 已支持多种可互换记忆引擎、运行时资源占用很小。
- **潜在使用场景**：用户可能希望将"选定的记忆"保存在远程/托管侧，而非全部本地化。
- 该信息来自厂商创始人而非普通用户，属于**供给侧陈述**，代表性有限。

## 8. 待处理积压

今日数据中**未提供**长期未响应的 Issue 或 PR 列表，无法基于所给材料判断积压情况。当前唯一待处理项为 Issue #1015（OPEN，创建与更新均为 2026-09-29），尚在 24 小时内，不构成积压。建议维护者关注：该提案目前无人回应，若长期无反馈可能影响外部生态接入意愿；同时建议确认 PR #1014 的发布工作流构建项是否已完成验证。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-29

## 1. 今日速览

过去 24 小时项目无新版本发布，共 5 条 Issues/PRs 发生更新（2 条 Issue、3 条 PR），全部处于开放状态，今日无任何合并或关闭动作。活跃度评估为**中等偏低、以维护性活动为主**：新增 2 条由新贡献者提交的小型修复 PR，另有 1 条 CI 机器人自动生成的快照刷新 PR；Issue 侧一条架构级 RFC 恢复讨论，一条每日基准失败分类持续输出。项目向前推进的实质性代码变更有限，主要信号集中在配置/UI 修复与远程边缘 worker 的路线图讨论上。

## 2. 版本发布

今日无新版本发布，此部分省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，因此没有已落地的功能推进。处于待合并状态的 3 条 PR 如下，均尚未合入：

- **#7988** `[size: XS, risk: low, contributor: core]` chore(agents): refresh codebase knowledge graph — 由 `ironclaw-ci[bot]` 于 2026-08-29 创建、2026-09-29 更新，刷新代码库记忆引导快照，由夜间 `Codebase Graph Refresh` 工作流生成。属基础设施维护类变更，风险低。
  链接: nearai/ironclaw PR #7988
- **#8118** `[size: M, risk: low, contributor: new]` fix(cli): report effective config profile — 新贡献者 changeroa 于 2026-09-29 提交，使 `ironclaw config path`、`ironclaw doctor`、`ironclaw status` 在 `IRONCLAW_REBORN_PROFILE` 未设置时报告 `config.toml` 中的有效启动 profile，复用现有的 `runtime::effective_profile` 优先级逻辑。
  链接: nearai/ironclaw PR #8118
- **#8117** `[size: M, risk: low, scope: docs, contributor: new]` fix(webui): restore focus after closing the command palette — 同为新贡献者 changeroa 于 2026-09-29 提交，修复从输入框打开 Cmd/Ctrl+K 后关闭命令面板时焦点丢失到 `body`、导致后续输入不回到原输入框的问题。
  链接: nearai/ironclaw PR #8117

整体而言，项目今日在功能演进维度上的净推进为**零（无合并）**，但待合并队列中有两条来自新贡献者的低风险修复，若被合入将改善 CLI 配置可见性与 WebUI 交互体验。

## 4. 社区热点

今日评论与反应数据整体稀少（各项 👍 均为 0），讨论热度最高的条目为：

- **Issue #7889** `[OPEN]` RFC: extend the scheduler/orchestrator with opt-in remote edge workers — 作者 kvnloo，创建于 2026-08-25，更新于 2026-09-29，**1 条评论**（今日唯一有评论的条目）。
  链接: nearai/ironclaw Issue #7889
  诉求分析：作者在摘要中指出 IronClaw 已支持并行作业、本地 worker、Docker 沙箱 worker、WASM 工具、按作业凭据、资源限制、routines 以及安全优先的审计模型，**剩余的限制在于 worker 池归属于单一节点**。该 RFC 旨在通过 opt-in 的远程边缘 worker 扩展调度器/编排器，属于架构级能力扩展诉求，但评论数仅为 1，社区响应仍然有限。

- **Issue #8116** `[OPEN]` Daily ironclaw failure taxonomy — 2026-09-28 — 作者 pranavraja99，**0 条评论**，为每日基准失败分类报告。
  链接: nearai/ironclaw Issue #8116

- PR #7988 / #8118 / #8117 评论数均未提供（显示为 `undefined`），无社区讨论热度。

结论：今日社区互动量极低，热点集中在一条尚未形成广泛共识的架构 RFC 上，缺乏高反应度条目。

## 5. Bug 与稳定性

按严重程度排列今日涉及的稳定性相关条目：

1. **中低 — WebUI 焦点回归（已有 fix PR）**：PR #8117 描述了命令面板关闭后焦点落回 `body`、后续输入无法回到原输入框的问题。这是可复现的交互缺陷，直接影响键盘操作效率；已有 fix PR（#8117）待合并。
   链接: nearai/ironclaw PR #8117
2. **低 — CLI 有效配置 profile 报告不正确（已有 fix PR）**：PR #8118 指出当 `IRONCLAW_REBORN_PROFILE` 未设置时，`config path`、`doctor`、`status` 未报告 `config.toml` 中的有效启动 profile，可能导致用户误判运行配置；已有 fix PR（#8118）待合并。
   链接: nearai/ironclaw PR #8118
3. **信息性 — 基准失败分类（无 fix PR）**：Issue #8116 报告 officeqa 套件存在 31 个 non-pass 任务（摘要显示其中除一项外均…，原文截断），为每日自动分类输出，未标注为崩溃或回归，也未关联 fix PR。
   链接: nearai/ironclaw Issue #8116

今日**未报告崩溃或生产级严重回归**，两项已知缺陷均已在同日提交低风险修复 PR。

## 6. 功能请求与路线图信号

- **远程边缘 worker（Issue #7889，RFC）**：请求在调度器/编排器中加入 opt-in 的远程边缘 worker，以突破"worker 池属于单一节点"的限制。这是今日唯一明确的功能扩展诉求，且为 RFC 形式，涉及调度器与编排器的核心架构。当前仅 1 条评论，处于早期讨论阶段；**今日无任何相关实现 PR**，因此短期内纳入下一版本的可能性取决于 RFC 讨论进展与维护者回应，现有材料不足以判定其排期。
  链接: nearai/ironclaw Issue #7889

- 其余今日条目（#7988、#8118、#8117）均为维护、修复或文档范围变更，不构成新增功能需求。

提醒：本次数据中未包含任何已合并 PR，因此无法从代码落地角度判断哪些需求"确定"进入下一版本。

## 7. 用户反馈摘要

今日仅有 Issue #7889 存在评论（1 条），评论内容未在所提供材料中给出，因此无法提炼具体的用户观点。从 Issue 与 PR 摘要中可识别的真实反馈信号如下：

- **能力边界痛点（#7889）**：用户认可现有并行作业、本地 worker、Docker 沙箱、WASM 工具、按作业凭据、资源限制、routines 与安全审计模型，但明确指出 worker 池的节点归属是当前的能力上限，希望以 opt-in 方式引入远程边缘 worker。
  链接: nearai/ironclaw Issue #7889
- **配置可观测性不满（#8118）**：在未设置 `IRONCLAW_REBORN_PROFILE` 时，CLI 无法反映 `config.toml` 中的有效 profile，说明用户在实际使用中需要更明确地确认当前生效配置。
  链接: nearai/ironclaw PR #8118
- **交互体验不满（#8117）**：命令面板关闭后丢失输入焦点，表明 WebUI 键盘工作流存在影响日常使用的摩擦。
  链接: nearai/ironclaw PR #8117

今日数据中没有出现明确的满意类反馈记录。

## 8. 待处理积压

- **Issue #7889**（创建 2026-08-25，至更新日 2026-09-29 已约 35 天）：架构级 RFC，跨度超过一个月仍只有 1 条评论，且无对应实现 PR，建议维护者明确表态或推进设计讨论。
  链接: nearai/ironclaw Issue #7889
- **PR #7988**（创建 2026-08-29，至更新日 2026-09-29 已约 31 天）：CI 机器人自动生成的代码库知识图谱快照刷新，标注 `risk: low`、`size: XS`，长期待合并；若确为常规快照刷新，建议按例行流程处理以避免持续堆积与后续快照冲突。
  链接: nearai/ironclaw PR #7988

注：PR #8117 与 #8118 均为 2026-09-29 当日创建，不构成积压。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-29）

## 1. 今日速览

项目今日处于**高活跃维护状态**：过去 24 小时共 10 条 Issue 更新、9 条 PR 更新，但两者均以存量清仓为主——Issues 中 8 条带 `[stale]` 标签，PR 中 8 条为合并/关闭，且多数为 2026 年 4 月的休眠 PR。当日新增内容集中在渲染与 Cowork 会话体验方向（#2777、#2778、#2779、#2780、#2781），其中 4 条 PR 由同一贡献者 fisherdaddy 在 9 月 28-29 日密集提交并已有 3 条被关闭/合并。无新版本发布。值得警惕的是，多个长期未决的严重数据完整性 Bug（#2393、#2293）今日仅因 stale 处理被关闭而非修复。

## 2. 版本发布

今日无新版本发布（最新 Releases：无）。

## 3. 项目进展

今日合并/关闭的 PR 共 8 条，可分三类：

**Cowork 会话体验改进（当日活跃线，均已关闭/合并）**
- [#2778](https://github.com/netease-youdao/LobsterAI/pull/2778) `feat(cowork): show OpenClaw progress cards above the composer` — 将原本仅以「使用了 progress_card」原始步骤呈现的调用，改为在输入框上方展示会话原生进度卡片，使 Agent 保留的 plan 首次可见。
- [#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) `feat(cowork): keep long running turns to their latest five steps` — 修复长任务刷屏问题（摘要给出实例：一个 7 分钟任务渲染 94 行），限制为仅保留最新五步。
- [#2776](https://github.com/netease-youdao/LobsterAI/pull/2776) `feat: support ppt/word/excel document editing` — 跨 renderer/build/docs/openclaw/skills/artifacts 多区域的功能提交（摘要为空，覆盖范围最广）。
- [#2780](https://github.com/netease-youdao/LobsterAI/pull/2780) `feat(artifacts): open markdown links in the matching artifact card` — 助手消息中的内联链接改为在对应 artifact 卡片内打开，并放宽 artifact 解析器以识别链接文件。

**存量休眠 PR 清仓（创建于 2026-04，作者多为 gongzhi-netease，均带 stale）**
- [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) `feat(cowork): 为 AI 回复消息添加朗读功能` — 基于浏览器原生 Web Speech API 的 TTS。
- [#1683](https://github.com/netease-youdao/LobsterAI/pull/1683) `fix(skills): validate URL format before remote import` — 导入前置校验 `owner/repo` 格式。
- [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) `fix(cowork): 切换 Agent 时自动清空主页输入框内容` — 修复 `draftPrompts['__home__']` 跨 Agent 共享草稿问题。
- [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) `fix(i18n): add missing 'edit' translation key for memory entry button`。

**整体推进评估**：近期主线明确指向 Cowork 会话的可读性与 artifact 联动，方向正确但推进集中、清仓为主，未见底层稳定性修复进入合并流程。

## 4. 社区热点

今日讨论最集中的是两条被 stale 关闭的老 Issue：

- [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) `[CLOSED] 重启后，多个agent下的USER.md被覆盖替换的BUG？` — 6 条评论，为当日评论数最高。用户详尽描述了复现过程：关闭软件后单独修改 `workspace-*` 下的 USER.md，重启后所有 agent 的 USER.md 均被 main agent 的内容替换覆盖。
- [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) `[CLOSED] 左下角广告可以彻底关闭吗` — 3 条评论，用户指出 `v2026.7.15` 更新后出现此前未见的广告弹窗，且设置项中找不到相关开关。

**诉求分析**：两条热帖指向两类核心期待——**多 Agent 配置隔离的可靠性**（数据不能互相污染）与**客户端商业化元素的用户可控性**。两者均以 `[CLOSED] [stale]` 结案，评论虽多但未见修复 PR 关联，社区诉求与维护动作之间存在落差。

## 5. Bug 与稳定性

按严重程度排列：

**🔴 严重 — 数据完整性**
- [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) `[OPEN] [stale]` LobsterAI 加速器在字符串改写时把 `\f` 字节对 (5C 66) 替换为 `\x0C`（form feed），导致文件数据静默损坏 — 用户自评严重等级 🔴 严重，可重现性 100%，影响任何写入含字面 `\firecrawl`、`\foo`、`\filename` 等 token 的文本操作。**未关闭，但无 fix PR。**
- [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) `[CLOSED] [stale]` 多 agent USER.md 被 main agent 覆盖 — 多 Agent 场景下的配置数据丢失。**已关闭，未见 fix PR。**

**🟠 高 — 功能不可用 / 环境兼容**
- [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779) `[OPEN]` 多分身配置下「梦境日记」面板恒为空：内置 runtime 2026.8.1 缺 `doctor.memory.*` 的 ambient-owner 回退（上游已修，待跟进）— 用户环境为 LobsterAI 2026.9.23 / macOS 27.0 arm64 / OpenClaw 2026.8.1，5 个 agent、`agents.ownership = "explicit"`。**当日新开，尚未有 fix PR。**
- [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) `[OPEN] [stale]` exec 工具默认 shell wrapper = Windows PowerShell 5.1，导致 Linux 命令 / 含特殊字符的内联脚本（`node -e` / `pwsh -Command`）静默失败 — **未关闭，无 fix PR。**
- [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) `[OPEN] [stale]` 无法安装 — 报错 `The LobsterAI update stopped because user skills could not be backed up. The previous installation was not replaced.` 阻断更新流程。**未关闭，无 fix PR。**
- [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) `[OPEN] [stale]` exec 工具默认 Shell 及中文路径编码问题 — Windows 11 25H2 / LobsterAI 2026.6.1，用户名含中文字符（`M幸福`），exec 硬编码调用 `powershell.exe`。与 #2396 同源。**未关闭。**

**稳定性小结**：今日无崩溃类回归新增；但 #2393（静默数据损坏）与 #2293（配置覆盖）属高破坏性且均无修复 PR，是当前项目健康度的主要风险点。

## 6. 功能请求与路线图信号

用户在 Issues 中提出的功能需求：

- [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) `[OPEN] [stale]` 询问 pdf/docs/pptx/xlsx 是否使用 Anthropic 官方 skill，以及**能否商用** — 涉及许可合规，属产品对外承诺问题。
- [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) `[OPEN] [stale]` 请求**技能重命名**功能。
- [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) `[OPEN] [stale]` 定时任务**无法选择使用的 agent 与 skill**。
- [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) `[CLOSED] [stale]` 请求**彻底关闭左下角广告**的开关。

**纳入下一版本的可能性判断**：#2392（定时任务选择 agent/skill）与当日 Cowork/多 Agent 主线契合度最高，且 #2779 同样暴露多 Agent 配置能力不足，该方向被后续版本覆盖的概率较大；#2391 技能重命名属轻量增强，实现成本低。#2342 与 #2401 涉及运营与法务决策，无法从现有 PR 推断走向。

## 7. 用户反馈摘要

**真实痛点**
- **多 Agent 隔离失效**：#2293 用户明确诉求「没法对不同 agent 建立不同的需求」，属核心使用场景被破坏。
- **长任务刷屏影响可读性**：#2777 摘要记录 DeepSeek 等模型在长时间调用工具时的一个 7 分钟 deck 任务渲染 94 行，用户侧体现为会话被步骤淹没——该问题已有 fix PR。
- **Agent 切换时草稿串场**：#1707 描述在 main 输入内容后切到 Architect，输入框仍保留旧内容——已有 fix PR。
- **安装/更新被阻断**：#2395 用户因 skills 备份失败导致旧安装未被替换，更新流程完全中断。
- **中文环境兼容性差**：#2390、#2396 两位报告者（同一账户 `M幸福`）反映中文用户名与 PowerShell 5.1 默认 wrapper 导致的命令静默失败。

**满意/不满意信号**：#2293 用户主动补充 2026.7.9 的二次测试结果（关闭软件后单独改文件、重启即被覆盖），显示用户愿意投入时间协助定位问题，但对修复无回应转而以 stale 关闭，可能损伤社区信任。#2342 用户措辞克制（「虽然可以点叉子关掉，但能不能以后就彻底不弹出」），属可协商的产品预期，但同样未见回复结论。

## 8. 待处理积压

以下 Issue 创建于 2026-07-07 至 2026-07-28，至 2026-09-29 更新时仍为 OPEN 且带 `[stale]` 标记，最长已积压近三个月，建议维护者优先复核：

| Issue | 主题 | 创建 | 状态 |
|---|---|---|---|
| [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | 🔴 数据静默损坏（`\f` → `\x0C`），100% 可复现 | 2026-07-27 | OPEN / stale，无 fix PR |
| [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | exec 默认 Shell 与中文路径编码 | 2026-07-27 | OPEN / stale |
| [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | 技能重命名功能请求 | 2026-07-27 | OPEN / stale |
| [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | 定时任务无法选择 agent/skill | 2026-07-27 | OPEN / stale |
| [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | PowerShell 5.1 wrapper 致命令静默失败 | 2026-07-28 | OPEN / stale |
| [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | 安装更新被 skills 备份失败阻断 | 2026-07-28 | OPEN / stale |
| [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) | skill 商用许可咨询（Anthropic 官方 skill） | 2026-07-28 | OPEN / stale |

PR 侧唯一待合作为 [#2781](https://github.com/netease-youdao/LobsterAI/pull/2781) `fix(markdown): keep currency dollars out of inline math`（当日创建，OPEN）——修复 `remark-math` 将 `$3/$15` 这类货币文本误渲染为 KaTeX 并错位后续配对的问题，方案是采用 Pandoc 分隔符规则约束行内公式构造。该 PR 修复明确、范围小，宜尽快推进合并。

**健康度提示**：当日 10 条 Issue 中 8 条为 stale 存量、2 条被 stale 关闭，仅 #2779 为新开有效报告；说明存量清仓速度快于新问题响应，长期未修复的高危 Bug 与用户诉求存在被 stale 机制掩盖的风险。

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

# CoPaw 项目日报 · 2026-09-29

> 数据来源：CoPaw GitHub 仓库（github.com/agentscope-ai/CoPaw）。以下 Issue/PR 链接沿用数据中给出的 `agentscope-ai/QwenPaw` 编号路径。

## 1. 今日速览

过去 24 小时项目保持高强度开发节奏：33 条 PR 有更新（13 条待合并、20 条已合并/关闭），是当日最主要的推进力量；Issues 侧 9 条更新（5 条新开/活跃、4 条关闭）。当日无新版本发布。值得注意的是，新开 Issue 与合并 PR 高度对应——多个当日报告的 Bug（技能池下载超时、Telegram 格式化、时区解析、终端描述符）在同日即出现修复 PR，响应速度良好。整体健康度评估：**活跃且闭环效率高**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 集中在稳定性与跨平台修复：

- **#8026 [CLOSED] fix(ci): 跨平台路径、沙箱清理与 Windows 终端中断**（cuiyuebing）— 修复媒体文件名、沙箱关闭、时区加载与 Windows 终端输入问题，覆盖 Windows 盘符路径、UNC 路径与文件 URL。
  https://github.com/agentscope-ai/QwenPaw/pull/8026
- **#8024 [CLOSED] fix(portability): 拒绝非法 qoder 时区**（zhijianma）— 拒绝仅含空白的时区值，避免 Windows 下 ZoneInfo 误解析。
  https://github.com/agentscope-ai/QwenPaw/pull/8024
- **#8023 [CLOSED] fix(terminal): 支持高位 POSIX 描述符**（zhijianma）— 用 poll 替换 select 完成就绪等待，修复描述符大于 1023 时的回归，并补充回归测试。
  https://github.com/agentscope-ai/QwenPaw/pull/8023
- **#8025 [CLOSED] fix(desktop): 关闭 NSIS 固实压缩**（zhaozhuang521）。
  https://github.com/agentscope-ai/QwenPaw/pull/8025
- **Telegram 系列三连修复 [CLOSED]（首次贡献者 j4Uq）**：#7773 处理 `/start` 平台握手（否则 Bot API 返回 403）、#7765 在提及门控中尊重 `@BotName` 寻址、#7718 用 HTML parse_mode 渲染审批卡片 Markdown。
  https://github.com/agentscope-ai/QwenPaw/pull/7773 · .../pull/7765 · .../pull/7718

推进幅度：当日进展以“补漏与平台适配”为主，覆盖 Windows/macOS/桌面端/Telegram 多平台，并补上 CI 与回归测试，属夯实基础而非新功能跃迁。社群侧整合大 PR **#7903** 仍处 WIP 开放状态。

## 4. 社区热点

数据中评论数最高的是 **Issues #2359（3 条评论）**：

- **#2359 [OPEN] [enhancement] HEARTBEAT_OK / CRON_OK 控制心跳/定时任务下的模型发消息行为**（TranscendenceLiang）— 建议参考 OpenClaw 的做法，让模型用 `HEARTBEAT_OK` 决定是否发送心跳后续内容，同时涉及 cron 场景。
  https://github.com/agentscope-ai/QwenPaw/issues/2359

诉求分析：这是典型的“自动化空转噪音”问题——心跳与定时任务触发时，模型是否输出、输出什么缺乏结构化信令控制，用户希望对自动化链路有更精细的开关。该 Issue 自 2026-03-26 创建、至 9-29 仍在活跃讨论，说明这是长期未被满足的设计级需求。

其余 8 条 Issue 评论数均为 1–2 条，整体讨论深度有限。

## 5. Bug 与稳定性

按严重程度排列：

1. **#8022 [OPEN] 会话上下文污染导致所有模型持续 400**（djj532）— `send_file_to_user` 产生的 file/image 内容块叠加空 assistant 消息污染上下文，后续请求对所有模型持续返回 400，未按模型能力降级 content。影响面最大（会话级不可恢复）。**暂无对应 fix PR。**
   https://github.com/agentscope-ai/QwenPaw/issues/8022
2. **#8013 [OPEN] 技能池下载大技能后 UI 30 秒超时**（michaelchen781211）— 桌面端 2.2.2b3 下载 ppt-master（12,994 文件 / 80.1 MB）时报 `Request timeout after 30000ms`，后端实际仍在执行。**已有当日 PR #8027 对应**（将下载流水线移出 async handler、放入工作线程）。
   https://github.com/agentscope-ai/QwenPaw/issues/8013 · https://github.com/agentscope-ai/QwenPaw/pull/8027
3. **#8011 [OPEN] Telegram HTML 格式化器处理 c++/objective-c 信息串、`~~~` 围栏与嵌套围栏不当**（huiq777，main@70715e98 / 2.2.2b4）— 正则 `` ```(\w*)\n?(.*?)``` `` 无法正确匹配。**暂无对应 fix PR。**
   https://github.com/agentscope-ai/QwenPaw/issues/8011
4. **#7946 [CLOSED] QQ 官方机器人网关会话恢复时重放事件导致重复处理**（yaozy2020，2.2.1 / 飞牛 fnOS）— 服务端要求重连后会话恢复时重放此前 INT 事件。已关闭。
   https://github.com/agentscope-ai/QwenPaw/issues/7946
5. **#6252 [CLOSED] 桌面端（Tauri）Linux 下 Ctrl +/- 与 Ctrl+滚轮缩放无效**（xiutianlin）。已关闭。
   https://github.com/agentscope-ai/QwenPaw/issues/6252

安全相关补充：PR **#8028 [OPEN] fix(security)** 指出 Windows 下 approval level 为 `auto` 且沙箱关闭时，agent 编写的内联 Office COM 命令（PowerPoint/Excel/Word/Outlook.Application）会被直接执行而非拦截，值得优先关注。
https://github.com/agentscope-ai/QwenPaw/pull/8028

## 6. 功能请求与路线图信号

- **#8015 [OPEN] 自定义 Skill / Plugin 市场源（自托管 · 内网/离线部署）**（qhxuezhou）— 要求一等公民式的市场源配置，可启用/禁用或指向自建镜像，适配内网与气隙环境。目前**无对应 PR**，但属于企业/私有化部署的明确缺口。
  https://github.com/agentscope-ai/QwenPaw/issues/8015
- **#7999 [CLOSED] 桌面端 UI 字体大小可调节**（hjfb42241-hub，2.2.1）— 建议提供小/默认/大/特大档位或连续缩放，作者自荐 `good first issue`。该请求当日关闭，且与 #6252（缩放失效，已关闭）主题相邻，提示桌面端 UI 可访问性是一组关联诉求。
  https://github.com/agentscope-ai/QwenPaw/issues/7999
- **#2359 [OPEN] HEARTBEAT_OK / CRON_OK 信令**（见社区热点）— 若被采纳，将影响心跳/定时任务的消息发送语义。

结合已有 PR 判断，**技能池下载线程化（#8027）** 大概率进入下一版本；**模型回退冷却（#8020）**、**浏览器启动参数可配置（#8029）**、**持久化分页会话历史（#7931）** 亦为下一版本的候选方向。

## 7. 用户反馈摘要

- **部署环境多样，平台差异是主要痛点来源**：飞牛 fnOS 原生部署（非 Docker，Python 3.12 / Linux 6.18.18）、Windows、桌面端 Tauri 均有用户报告，当日修复也高度集中在跨平台路径、时区与终端层面（#8026/#8024/#8023）。
- **大文件/大技能操作体验不佳**：#8013 中用户下载 80.1 MB 技能包时前端 30 秒超时而后端仍在跑，反映“前端超时与后端实际状态不一致”的体感问题。
- **可访问性诉求真实存在**：#7999 明确指出视力较弱用户（含中老年用户）无法调节字体大小；#6252 抱怨无法调整字号/UI 缩放。
- **模型能力降级处理不足**：#8022 用户实测“后续请求对所有模型持续 400”，说明内容块与模型能力的适配层缺少兜底。
- **社区治理信号**：#8030 为明显无效内容（`[invalid]`，当日即关闭），反映 Issue 区存在噪音，维护者处理及时。

## 8. 待处理积压

- **#2359 [OPEN] HEARTBEAT_OK / CRON_OK** — 创建于 **2026-03-26**，至 2026-09-29 仍开放，跨度约 6 个月，是当日列表中存续最久的活跃 Issue，且涉及心跳/定时任务核心行为设计，建议维护者给出明确取舍或设计结论。
  https://github.com/agentscope-ai/QwenPaw/issues/2359
- **#7903 [OPEN] [wip] feat(community): 集成社区与收件箱**（Osier-Yi）— 创建于 2026-09-20，体量较大（社区信息流、资源来源追踪、Platform HTTP PKCE 认证），已持续 9 天仍为 WIP，属需重点跟进的大型开放 PR。
  https://github.com/agentscope-ai/QwenPaw/pull/7903
- **#7931 [OPEN] feat(chat): 持久化分页会话历史**（zhijianma）— 创建于 2026-09-22，涉及 SQLite transcript 存储、游标与去重，已开放 7 天。
  https://github.com/agentscope-ai/QwenPaw/pull/7931
- **#8007 [OPEN] fix(task_tracker)：producer task 存在后再注册 run**（BeiMu-new，首次贡献者，标注 ready-for-human-review）— 已具备人工评审条件，等待维护者响应。
  https://github.com/agentscope-ai/QwenPaw/pull/8007
- **#8022 [OPEN] 会话上下文污染致 400** — 当日新开但影响面大且**尚无 fix PR**，建议优先响应。
  https://github.com/agentscope-ai/QwenPaw/issues/8022

---
**说明**：数据中 Issues 与 PR 链接路径均显示为 `agentscope-ai/QwenPaw`，本日报按原样保留；PR 评论数在数据中为 `undefined`，故第 4 节仅以 Issue 评论数排序。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-29

## 1. 今日速览

过去24小时项目维持高强度运转：Issues 更新 39 条（新开/活跃 19，关闭 20），PR 更新 50 条（待合并 45，合并/关闭 5），无新版本发布。关闭量与新增量基本持平，说明维护团队在持续消化积压，但 45 条待合并 PR 的堆积显示评审带宽仍是瓶颈。今日讨论焦点集中在安全/身份权限（principal scope、admin 撤销、SOP 授权）与 RPC 核心功能对齐（v0.9.0 core-parity lane）两条主线上。整体健康度良好：安全问题被快速识别并转为 fix，但多个 S0/P0 级权限缺陷同日活跃，值得重点关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 5 条 PR、关闭 20 条 Issue，推进方向集中在 RPC 对齐与长期 Bug 收口：

- **RFC 流程简化落地** — Issue #10549 [CLOSED]：移除强制讨论窗口、REVISE 停止当前快照，降低 RFC 参与摩擦。https://github.com/zeroclaw-labs/zeroclaw/issues/10549
- **OIDC 里程碑收口** — Issue #8289（tracker）：核心 OIDC 栈已合并（#10248/#10255/#10259/#10263/#10265），#11082 合并了统一的 enrollment、gateway、private-memory 与迁移逻辑，该 tracker 进入 close-out 阶段。https://github.com/zeroclaw-labs/zeroclaw/issues/8289
- **并发文件写入丢编辑修复** — Issue #11136 [CLOSED]（P1）：修复 `parallel_tools` 下对同一路径并发 `file_edit`/`file_write` 静默丢失一次编辑的问题。https://github.com/zeroclaw-labs/zeroclaw/issues/11136
- **委派子循环成本追踪** — Issue #10645 [CLOSED]：将 cost-tracking context 贯穿到 delegated sub-loops，补齐 `max_cost_per_day_cents` 在子循环中的执行。https://github.com/zeroclaw-labs/zeroclaw/issues/10645
- **零代码编辑器标准文本编辑** — Issue #10909 [CLOSED]：为共享 ZeroCode Chat/Code composer 提供 undo/redo、键盘选择、全选与剪切。https://github.com/zeroclaw-labs/zeroclaw/issues/10909

整体看，项目正沿 v0.9.0 core-parity lane（#11001，见 PR #11176）稳步推进 RPC 与 HTTP 路由的行为对齐。

## 4. 社区热点

- **Issue #10549**（12 评论）— RFC 投票流程简化，反映社区对治理流程轻量化的强烈诉求。https://github.com/zeroclaw-labs/zeroclaw/issues/10549
- **Issue #4853**（8 评论，已关闭）— 从 `.well-known` agent-skills 发现索引安装技能，指向技能生态标准化（关联 agentskills PR #254）的方向性需求。https://github.com/zeroclaw-labs/zeroclaw/issues/4853
- **Issue #11053**（4 评论，OPEN）— RFC：将知识图谱提升为一级 agent 记忆层。当前 `knowledge_graph.rs` 只是工具而非记忆，作者主张记忆应在无 agent 主动介入下工作。https://github.com/zeroclaw-labs/zeroclaw/issues/11053
- **PR #11171**（OPEN，size:XL）— 本地传输边界与分块上传，作者显式标注 **Hold the merge**：现有批准早于最后四个提交。https://github.com/zeroclaw-labs/zeroclaw/pull/11171
- **PR #11132 / #11176 / #11186**（均 OPEN，size:XL）— RPC turn parity、cron/memory/skills/personality/quickstart parity、zeroclaw-rpc-client 与 in-process gateway seam，构成 RPC 核心对齐的主力。https://github.com/zeroclaw-labs/zeroclaw/pull/11132 https://github.com/zeroclaw-labs/zeroclaw/pull/11176 https://github.com/zeroclaw-labs/zeroclaw/pull/11186

## 5. Bug 与稳定性

按严重程度：

**S0 / P0（数据丢失 / 安全风险）**
- **Issue #11197** [CLOSED]（P0，security/sandbox）：会话恢复在本地管理员失去 `admin` 授权后仍恢复转发的环境变量。https://github.com/zeroclaw-labs/zeroclaw/issues/11197
- **Issue #11198** [OPEN]（P0，memory）：委派记忆工具丢失 principal scope — principal 拥有的 RPC 会话将直接记忆工具路由到私有平面，但 agentic delegate 构造了替换机制，导致越权。https://github.com/zeroclaw-labs/zeroclaw/issues/11198
- **Issue #11123** [OPEN]（P1，security/sandbox）：SOP 执行接受通配符工具选择器而未要求 `tools:execute`。https://github.com/zeroclaw-labs/zeroclaw/issues/11123

**P1**
- **Issue #11126** [OPEN]：排队会话操作保留已撤销管理员的 ownership 绕过；#10412 为部分实现，明确未覆盖其余 stale-grant 路径。https://github.com/zeroclaw-labs/zeroclaw/issues/11126
- **Issue #11136** [CLOSED]：并发文件写入静默丢编辑（已修复）。https://github.com/zeroclaw-labs/zeroclaw/issues/11136
- **Issue #10778** [CLOSED]：多模态图像上限驱逐重写早期历史消息，使缓存前缀从该点起失效。https://github.com/zeroclaw-labs/zeroclaw/issues/10778

**P2 及以下**
- **Issue #6105** [CLOSED]：agent 不持有其所运行 cron job 的上下文，无法引用自己发出的消息。https://github.com/zeroclaw-labs/zeroclaw/issues/6105
- **Issue #11009** [OPEN]：agent alias 改名未级联 permission-profile 选择器。https://github.com/zeroclaw-labs/zeroclaw/issues/11009
- **Issue #9708** [CLOSED]：daemon 启动路径 stdout/stderr 重定向到固定文件，缺少大小、期限或文件数上限。https://github.com/zeroclaw-labs/zeroclaw/issues/9708
- **Issue #10802** [CLOSED]：`session/list-acp` 与 `turn_end` 报告的 `message_count` 语义不一致。https://github.com/zeroclaw-labs/zeroclaw/issues/10802

**待观察**：#11198、#11126、#11123 均处 OPEN 且未在数据中显示对应 fix PR，建议优先跟进。

## 6. 功能请求与路线图信号

- **知识图谱作为一级记忆层**（#11053，RFC，OPEN）— 若通过评审，将改变 `zeroclaw-memory` 的架构定位，且与 #11198 的 principal scope 问题直接相关。
- **`.well-known` 技能发现索引安装**（#4853，已关闭）— 与 agentskills 标准化的对齐意图明确，落地取决于上游标准进展。
- **wecom_ws 主动消息与媒体发送**（#7824，OPEN，目前标记 `status:icebox`）— 需求清晰但被搁置。https://github.com/zeroclaw-labs/zeroclaw/issues/7824
- **ZeroCode agent 删除与批量清理**（#10244，OPEN，in-progress）— 复用受保护的 agent 生命周期删除路径，与 #10909 同属 ZeroCode 体验完善序列，较可能进入近期版本。
- **provider profile 语义保留**（#10171，已关闭）— 配置的 `<family>.<alias>` 点分身份在多个运行时与目录入口被破坏，已收口。

结合 RPC parity lane（#11132/#11176/#11186）可判断，下一版本（v0.9.0）主线是 **RPC 与 HTTP 行为对齐**，功能请求类多为配套体验补完。

## 7. 用户反馈摘要

- **权限撤销不彻底是最大痛点**：多条独立 Issue（#11197、#11198、#11126、#11123）都指向同一类问题 — 管理员授权被撤销后，会话恢复、委派工具、排队操作仍保留旧的权限路径。这已不是孤立 Bug，而是身份/访问模型的系统性缺口。
- **会话一致性困扰**：用户（radther，#6105）反馈 agent 在频道中基于 cron 运行时，无法引用自己早先发出的消息，影响多轮上下文连贯性。
- **数据丢失敏感**：ZeroCode 在 Code/ACP turn 完成前进程退出会导致已流式显示的内容消失（#10121，S0），用户对"已看到但未落盘"的场景容忍度低。
- **提交质量差异明显**：Leon-SK668 单日提交大量 size:XS 的纯测试 PR（#11240–#11252 等），覆盖 unicode 提及边界、HTML 实体解码、零字节日志上限等边界场景，属正向信号；但也占用了相当比例的评审资源。

## 8. 待处理积压

- **Issue #8289（OIDC tracker）** — 创建于 2026-06-24，跨越三个月，虽已进入 close-out 但仍需持续跟踪至正式关闭。
- **Issue #7824（wecom_ws）** — 创建于 2026-06-17，标记 `status:icebox`，已逾三个月无推进，建议明确是否长期搁置或给出排期。
- **Issue #11171（PR，XL）** — 作者主动标注 **Hold the merge**，因现有批准早于最后四个提交（含对抗性评审发现的四项修复）。需重新评审后才能合并，属高风险待决项。
- **Issue #11009** — 由社区成员在独立核查 #10259 时发现，自 2026-09-20 起处于 accepted 状态但无 fix PR，涉及权限配置级联，建议排期。

---

*注：本报告仅基于所提供的 GitHub 数据生成；PR 评论数在数据中为 undefined，故未按评论数对 PR 排序。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*