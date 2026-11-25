# OpenClaw 生态日报 2026-11-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-25 19:57 UTC

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

# OpenClaw 项目动态日报 · 2026-11-25

> 数据来源：OpenClaw (github.com/openclaw/openclaw) GitHub 数据快照。所有条目均基于所提供材料，未补充外部事实。

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时 Issues 更新 500 条（新开/活跃 403，关闭 97，关闭率约 19%），PR 更新 500 条（待合并 283，已合并/关闭 217，合并率约 43%），并有 2 个版本发布。
- **两条主线**：① 更新/安装链路（prepared-release、Doctor 校验、package-swap）问题密集，成为 P0/P1 主战场；② SQLite / WAL / 内存相关稳定性问题持续消耗维护精力。
- **健康度评估**：PR 吞吐正常且合并率可观，但待合并积压 283 条偏高；多项 P0 release-blocker 类 Issue 仍 OPEN 且标注 `needs-maintainer-review`，说明瓶颈在维护者评审而非提交量。
- **维护者负载信号**：多条高热度 Issue 同时带有 `clawsweeper:no-new-fix-pr` + `needs-maintainer-review` 标签，机器人已分流但人工评审环节拥堵。

---

## 2. 版本发布

今日发布 2 个版本，但**所供材料中的发布说明均被截断**，仅能确认版本号与统计口径，无法核实具体变更项、破坏性变更或迁移步骤。

### v2026.11.10
- 标题：`openclaw 2026.11.10`
- 材料中可见信息：**8,309 commits · 7,671 pull requests · 349 contributors**
- 说明：发布说明与 changelog 内容相同，链接指向 `https://docs.openclaw.ai/releas...`（材料中链接不完整）。**具体变更内容不可见，建议以官方 release notes 为准。**
- 链接：[Release v2026.11.10](https://github.com/openclaw/openclaw/releases)

### v2026.11.9
- 标题：`openclaw 2026.11.9`
- 材料中可见信息：**13 commits · 15 pull requests · 14 contributors**
- 说明：同上，发布说明被截断，**破坏性变更与迁移注意事项无法从材料中确认。**
- 链接：[Release v2026.11.9](https://github.com/openclaw/openclaw/releases)

> ⚠️ 提示：两版本号（11.9 → 11.10）与近期 Issue 中频繁出现的「2026.11.5 beta / 2026.11.3」更新链路问题在同一时间窗口内，建议发布负责人重点核查升级路径兼容性（见第 5 节）。

---

## 3. 项目进展

材料中**未提供明确的「已合并/关闭 PR」正文摘要**（展示的 20 条 PR 中仅 #205530、#205526、#205345 标记为 CLOSED，且均为测试/小修类）。可从「已关闭 Issue」与 PR 状态推断推进方向：

| 已关闭 Issue | 推进内容 | 链接 |
|---|---|---|
| #182891 | Prompt cache 永不复用（cache read dropped N→0）— 已关闭，涉及信封重写与 runtimeContextCarrier 变更 | [Issue #182891](https://github.com/openclaw/openclaw/issues/182891) |
| #162585 | Windows 插件 source-capture 反复物化自身、npm 树线性膨胀（290MB→612MB+/24min）— 已关闭 | [Issue #162585](https://github.com/openclaw/openclaw/issues/162585) |
| #158127 | 2026.9.6 多智能体运行时发布失败 + Codex 启动超时 — 已关闭 | [Issue #158127](https://github.com/openclaw/openclaw/issues/158127) |
| #112313 | 出站投递队列 dead-letter 条目永久不可清除 — 已关闭 | [Issue #112313](https://github.com/openclaw/openclaw/issues/112313) |
| #160548 | prepared-model-catalog worker 每 5 分钟泄漏 ~1GiB — 已关闭 | [Issue #160548](https://github.com/openclaw/openclaw/issues/160548) |
| #191847 | 大会话反复杀死 512MB SQLite worker — 已关闭 | [Issue #191847](https://github.com/openclaw/openclaw/issues/191847） |
| #192009 | 跨 provider cron fallback 账号显式授权特性 — 已关闭 | [Issue #192009](https://github.com/openclaw/openclaw/issues/192009) |

**进展评估**：关闭的 97 条 Issue 覆盖了内存泄漏、缓存复用、队列清理等历史顽疾，属于「还旧账」而非新功能推进。设计类 PR #204775（prepared-release 更新路径）在 Issue 侧有专门跟踪，说明更新机制正在重构中。整体向前推进幅度：**中等偏稳，以稳定性修复为主，功能层面无重大新增落地证据。**

值得关注的 OPEN PR：
- [#200372](https://github.com/openclaw/openclaw/pull/200372) 修复 setup 探针丢失已发布 catalog（Fixes #196817）
- [#198880](https://github.com/openclaw/openclaw/pull/198880) 修复 secrets 迁移误删其他 agent 凭证导致 `MCP_AUTHORIZATION_RETIRED`（Closes #196381）
- [#204620](https://github.com/openclaw/openclaw/pull/204620) 发布流程依赖隔离重构

---

## 4. 社区热点

按评论数排序的高热度讨论：

1. **[#164294](https://github.com/openclaw/openclaw/issues/164294)（44 评论，OPEN，P2）** Gateway 的 WAL auto-checkpoint 自启动起从未完成，每次 PASSIVE checkpoint 被进程内 reader 阻塞。→ 诉求：**长期存活的 reader 与 checkpoint 机制冲突，需要显式的 reader 生命周期管理。**

2. **[#197083](https://github.com/openclaw/openclaw/issues/197083)（40 评论，OPEN，P0）** 托管 npm 从 2026.11.1 升级到 11.3，新核心已激活但 post-install Doctor 报 `SQLite WAL commit publication could not be verified`；因 `state-migrated-no-rollback` 拒绝回滚，**更新处于半完成状态**。→ 诉求：**更新流程缺乏安全回退，WAL 发布校验与回滚策略需协同设计。**

3. **[#170956](https://github.com/openclaw/openclaw/issues/170956)（34 评论，OPEN，P0）** Windows 通过 `schtasks` 托管安装时，启动慢、插件关闭不干净、schtasks 权限错误，导致重启/更新频繁失败。→ 诉求：**Windows 一等公民支持，服务管理路径需重做。**

4. **[#178359](https://github.com/openclaw/openclaw/issues/178359)（32 评论，OPEN，P1）** `doctor --fix --non-interactive` 在 repair preparation 阶段静默挂起 15+ 分钟，从未到达 agent DB 修复（macOS, 2026.10.3）。→ 诉求：**修复工具自身的可观测性（无输出 = 不可调）。**

5. **[#153426](https://github.com/openclaw/openclaw/issues/153426)（22 评论，👍2，OPEN，P0）** `MEMORY.md` / `USER.md` 因 provenance ratchet 将 `originClass` 置为 `untrusted` 后被**静默且永久排除**出 bootstrap 注入，无诊断、无 CLI、无恢复路径，普通 web-search 行为即可触发。→ 诉求：**核心记忆注入的安全门控需要可解释、可恢复、可审计。**

6. **[#143017](https://github.com/openclaw/openclaw/issues/143017)（20 评论，OPEN，P2）** 持久会话重写前缀的 5 种方式，实测 21.3M cache-write tokens。→ 诉求：**缓存经济学与成本可见性。**

> 共性诉求：评论量最大的议题集中在**「静默失败 / 无诊断 / 无恢复」**这一模式上——用户能忍受错误，但不能忍受无法定位的错误。

---

## 5. Bug 与稳定性

按严重程度排列（材料标记优先级）：

### P0 / release-blocker
| Issue | 现象 | Fix PR |
|---|---|---|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 更新半完成、拒绝回滚、WAL 发布校验失败 | 未见（`clawsweeper:no-new-fix-pr`） |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows 启动慢 / 插件不洁关闭 / schtasks 权限，重启与更新不可靠 | 未见（需维护者评审） |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 记忆根被静默永久排除，无恢复路径 | 未见（需产品决策 + 安全评审） |
| [#190563](https://github.com/openclaw/openclaw/issues/190563) | 无法恢复暂停的 Codex 会话：`Provider review no longer matches the native thread` | 未见（需安全评审） |

### P1
| Issue | 现象 | Fix PR |
|---|---|---|
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor 修复静默挂起 15+ 分钟 | 未见 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 同会话二次 run 挤占在途 turn 导致回复丢失（2026.9.4 回归） | 未见 |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | 自 2026.10.10 起原生 Codex helper 无法恢复父会话，用户被锁在助手外 | 未见 |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | Windows 睡眠/唤醒后 30–60s+ 无法重连 | 未见 |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 基线 RSS ~1.89GB + SQLite 事务超时（10.5，Linux ARM64） | 未见（需更多信息） |
| [#190307](https://github.com/openclaw/openclaw/issues/190307) | 重启后多个 agent 永久 degraded（admission timeout） | 未见（需 live repro） |
| [#121558](https://github.com/openclaw/openclaw/issues/121558) | Cron 隔离运行把 claude-cli 叙述混入正式消息 | 有 linked PR OPEN |
| [#200606](https://github.com/openclaw/openclaw/issues/200606) | 2026.11.5 候选 Doctor 因迁移冲突阻塞更新，`changed=[]` | 未见（主分支不可复现） |

### P2（今日部分）
- [#123792](https://github.com/openclaw/openclaw/issues/123792)（22 评论，diamond lobster）CLI 后端下助手回复重复渲染（CLI 视图 + 聚合记录双份），Control UI 与 Android 受影响，Telegram 不受影响。
- [#200224](https://github.com/openclaw/openclaw/issues/200224) 2026.11.5 beta 拒绝已废弃的 `agents.defaults.heartbeat`，但移除它又会重新启用心跳——**双向陷阱**。
- [#200756](https://github.com/openclaw/openclaw/issues/200756) Windows beta.2→beta.4 在 package-swap 失败（baseline 包扫描失败 / 回滚树变更）。
- [#126360](https://github.com/openclaw/openclaw/issues/126360) 显式多 agent 归属下 `AgentSelectionRequiredError` 刷屏。
- [#177094](https://github.com/openclaw/openclaw/issues/177094) Control UI 中系统通知镜像把 final answer 挤入折叠工具步骤（transcript 本身完好，**标注为 queueable-fix**，最可能先修）。
- [#167609](https://github.com/openclaw/openclaw/issues/167609) Code Mode 把 guest 脚本 TypeError 报为 `internal_error`，仅 failurePhase 可区分。
- [#127195](https://github.com/openclaw/openclaw/issues/127195) 16 处调用点抛出字节相同错误、无 reason code。

**稳定性判断**：今日报告的问题呈现明显的**「更新系统脆弱 + Windows 支持薄弱」**双缺口；且多项 P0 均无 fix PR，是近期版本发布的主要风险源。

---

## 6. 功能请求与路线图信号

| 需求 | 关键内容 | 相关 PR / 状态 | 进入下一版本的可能性 |
|---|---|---|---|
| [#204775](https://github.com/openclaw/openclaw/issues/204775) prepared-release 更新路径设计 | 状态、归属与计划的共享设计文档，用于避免同一文件冲突 | OPEN，16 评论，标签 `needs-product-decision` | **高**——有专门跟踪 Issue，且更新问题是当前 P0 集中区 |
| [#150238](https://github.com/openclaw/openclaw/issues/150238) Skill Workshop Experience Review 上下文预算/跳过策略 | 复用前台会话 context 与 cache 前缀，缺少超长会话保护 | OPEN，有 linked PR | 中——已有 PR 挂接 |
| [#192009](https://github.com/openclaw/openclaw/issues/192009) 跨 provider cron fallback 显式授权 | 允许为 cron 主模型与 fallback 显式绑定独立 provider/账号 | 已 CLOSED | 已处理，待确认落地形态 |

**信号解读**：功能请求重心从「加能力」转向「加护栏」——上下文预算、失败可解释性、更新路径治理，均属于成熟期项目的收敛型需求。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实体验：

**不满意（占绝对多数）**
- **静默失败最伤信任**：#153426、#178359、#164294 均表现为「没有报错、没有输出、没有恢复入口」。用户能定位错误，但不能定位「什么都没发生」。
- **更新流程是最大挫败点**：#197083 的半完成更新 + 拒绝回滚，直接影响生产可用性；#200224 的双向陷阱（保留配置报错、删除配置副作用）让升级无路可走。
- **Windows 体验系统性落后**：schtasks 权限、睡眠唤醒重连、package-swap 失败、插件树膨胀——问题横跨多个版本未收敛。
- **成本焦虑具体化**：#143017 用 21.3M cache-write tokens 量化缓存失效损失，#182891（已关闭）显示 prompt cache 从不复用。
- **UI 层「答案被藏起来」**：#177094 中 final answer 被挤入折叠工具步骤，虽 transcript 完好但阅读体验受损。

**满意/正向信号**
- 用户愿意提供极详细的生产复现（wire capture、949 次请求统计、内存增长曲线），说明核心用户群**高度投入且具备诊断能力**，是项目的重要资产。
- 部分历史顽疾今日关闭（#182891、#162585、#160548），显示维护者对老问题的清理在推进。

**使用场景**：多 agent 显式归属部署（6~35 个 agent）、macOS LaunchAgent 本地网关、Windows 托管服务、Telegram 长会话、Cron 定时任务与 Claude/Codex CLI 后端混用。

---

## 8. 待处理积压

长期未响应或高优先级但停滞的重要条目（按创建时间）：

| Issue | 创建 | 停留 | 标记 | 风险 |
|---|---|---|---|---|
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | 2026-07-21 | 已关闭 | dead-letter 队列永久不可清 | ✅ 已清理 |
| [#121558](https://github.com/openclaw/openclaw/issues/121558) | 2026-08-10 | ~3.5 个月 OPEN | maintainer, P1, linked-pr-open | 有 PR 但长期未合，Cron 消息污染持续 |
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | 2026-08-14 | ~3.4 个月 OPEN | stale, diamond lobster | 双份渲染长期未决 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 2026-08-19 | ~3.3 个月 OPEN | diamond lobster | 日志洪水影响运维 |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | 2026-08-21 | ~3.1 个月 OPEN | stale, fix-shape-clear | 可解释性债务，修复形态已清晰却未动 |
| [#143017](https://github.com/openclaw/openclaw/issues/143017) | 2026-09-09 | ~2.5 个月 OPEN | bulk-filed, source-repro | 成本问题有实测数据但无 fix |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 2026-09-15 | ~2.4 个月 OPEN | P1, message-loss | **P1 消息丢失长期挂起，建议优先** |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 2026-09-20 | ~2.2 个月 OPEN | P0, 需产品+安全评审 | **P0 双评审依赖，最易卡死** |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | 2026-10-03 | ~1.7 个月 OPEN | P2, 44 评论 | 评论最多但无 fix PR |

**PR 侧积压**
- [#166742](https://github.com/openclaw/openclaw/pull/166742)（CI 超时约束，2026-10-07 起，waiting on maintainer）
- [#166852](https://github.com/openclaw/openclaw/pull/166852)（Doctor 失败证据保留，2026-10-08 起，已修复冲突但仍待合）
- 待合并 PR 总数 **283 条**，建议维护者按 `release-fast-lane` 与 P1 标签优先分流。

> **给维护者的建议**：#153426 与 #148707 是「P0/P1 + 长期 OPEN + 无 fix PR」的最危险组合，合计停滞超 2 个月；#204775 作为更新路径的汇总设计 Issue，可能是打开 #197083 / #200224 / #200756 系列死结的钥匙。

---

*本报告严格基于所提供 GitHub 数据快照生成；发布说明正文与部分链接在源材料中被截断，相关内容已标注为不可确认。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据日期：2026-11-25｜基于各项目 GitHub 快照**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态已进入**"规模分化 + 质量收敛"**阶段：头部项目 OpenClaw 以单日 500 条 Issue/PR 更新、349 贡献者的体量形成明显断层，中小项目则普遍在数十条量级上做纵深打磨。当日 11 个有动态的项目中，讨论焦点已从"能否运行/能做什么"明显转向**静默失败可观测性、更新链路回退安全、跨平台（尤其 Windows）一致性、上下文与缓存成本**四大工程化议题。同时，多个项目出现**去遗留化/架构拆分**动作（LobsterAI 去 OpenClaw 化、ZeroClaw 拆 runtime crate、Hermes 文档栈迁移），显示生态正从"快速堆功能"过渡到"为长期维护还债"。无项目发布重大功能版本，当日所有 Release 均为 canary 或说明截断，**功能空窗、修复密集**是共同特征。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃·关闭） | PR 更新（待合·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（403·97，关闭率~19%） | 500（283·217，合并率~43%） | 2 个（11.10 / 11.9，说明截断） | 极高活跃；**待合并积压 283 偏高**，多项 P0 无 fix PR，瓶颈在维护者评审 |
| **CoPaw** | 33（25·8） | 50（22·28） | 无 | 高活跃；合并吞吐正常，但多个 XXXL PR 长期 Under Review，积压积累中 |
| **Hermes Agent** | 50（48·2） | 50（42·8） | 1 个 canary（v0.23.4） | 高活跃；**待合并 42 条**为明显瓶颈，缺陷跨版本长期存在 |
| **ZeroClaw** | 11（10·1） | 50（43·7） | 无 | 高活跃；43 条待合 + 多条 `needs-author-action`，治理动作（v1.0 路线图）积极 |
| **NanoBot** | 9（8·1） | 30（5·25） | 无 | 活跃均衡；**合并率高（~83%）**，队列消化顺畅 |
| **NanoClaw** | 3（3·0） | 19（10·9） | 无 | 高节奏；以 bot 镜像刷新为主，Issue 关闭 0，讨论面窄 |
| **LobsterAI** | 0 | 22（2·20） | 无 | 集中提交；20 条合并高度集中于少数贡献者，**贡献者多样性不足** |
| **PicoClaw** | 0 | 2（0·2，均关闭） | 无 | **低活跃**；仅清理积压（含 9 个月老 PR） |
| **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | **静默（无活动）** |

> 说明：数据口径来自各项目日报；OpenClaw 量级以"500 条"为上限统计，实际更高。

---

## 3. OpenClaw 在生态中的定位

**规模断层明显。** OpenClaw 单日 500 条 Issue/PR 更新、349 贡献者、2 个版本发布，体量约为第二梯队（CoPaw/Hermes 各 50 条 PR）的 **10 倍**，是新兴项目（NanoBot/NanoClaw/ZeroClaw）的 **16–25 倍**。其 8,309 commits / 7,671 PR 的版本统计，说明它已是事实上的**参照基线**——LobsterAI 的日报中明确出现"移除遗留 OpenClaw 耦合""去 OpenClaw 化"等表述，证明其架构甚至成为其他项目的迁移源。

**优势：** 功能覆盖最全（多 agent 显式归属、LaunchAgent/Windows 托管服务、Telegram 长会话、Cron、Claude/Codex CLI 混合后端），核心用户群具备高诊断能力（wire capture、内存曲线级复现），问题闭环有历史证据（当日关闭多项内存泄漏/缓存复用顽疾）。

**技术路线差异：** OpenClaw 承担了"全栈自托管网关"的重量，因此把复杂度集中在了**更新系统（prepared-release / Doctor / package-swap）与 SQLite/WAL 持久层**——这正是当日 P0 集中区。相比小型项目轻量单进程，OpenClaw 的"企业级自托管"定位使其稳定性问题更硬核、修复周期更长。

**风险：** 维护者评审成为真实瓶颈——283 条待合并 + 多个 `needs-maintainer-review` 的 P0 长期 OPEN（#153426、#197083 停滞超 2 个月）。**规模优势正在转化为评审负债**，这是同类项目尚未触及的阶段性问题。

---

## 4. 共同关注的技术方向

当日多个项目独立涌现相同诉求，具备行业共性信号价值：

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **静默失败 / 可观测性** | OpenClaw、NanoBot、Hermes、NanoClaw、ZeroClaw、CoPaw | OpenClaw 多项 P0"无报错无恢复"；NanoBot `-m` 隐藏 thinking 签名错误、大图静默降级；NanoClaw chat turn 无回答无提示；ZeroClaw MCP 失效表现为"outcome-unknown"、Matrix 仅 DEBUG 日志。**共性诉求：错误必须可解释、可定位、可恢复。** |
| **更新/升级链路安全回退** | OpenClaw、PicoClaw、NanoClaw、LobsterAI | OpenClaw 半完成更新拒绝回滚（#197083）、Windows package-swap 失败（#200756）；NanoClaw `tag.gpgsign` 致更新失败；LobsterAI 升级后首窗口前退出。**诉求：更新事务需原子性与可回退。** |
| **Windows / 跨平台一致性** | OpenClaw、CoPaw、NanoBot、Hermes、NanoClaw | OpenClaw schtasks 权限/唤醒重连/插件树膨胀；CoPaw 两台 Windows 复现记忆索引失败；NanoBot Bun 被杀软锁定；Hermes Windows Desktop + Ollama 工具调用失败。**Windows 是系统性薄弱平台。** |
| **上下文/缓存成本可见性** | OpenClaw、CoPaw、Hermes | OpenClaw 21.3M cache-write tokens 实测；CoPaw 压缩摘要被推理占满 4000 token 预算、媒体残留污染后续请求；Hermes 延迟工具重复发送影响计费。**诉求：缓存经济学与上下文预算治理。** |
| **会话状态持久化与恢复** | Hermes、CoPaw、OpenClaw、NanoClaw | Hermes 代理字符致会话停滞、空 `cwd` 会话"丢失"；CoPaw append-only 会话存储（PR 积压）；OpenClaw 暂停 Codex 会话无法恢复。**长会话可靠性成为核心使用场景。** |
| **Human-in-the-Loop 与权限边界** | CoPaw、ZeroClaw、Hermes | CoPaw `ask_user_question` 工具（4 个月高关注）；ZeroClaw OIDC 收尾与守护进程刷新授权；Hermes 插件标记数据使用合规（`no_training`）、跨 agent 同意规则。**可控性与可中断性上升。** |
| **插件/扩展生态化** | LobsterAI、Hermes、CoPaw、NanoBot | LobsterAI DSH 插件全生命周期；Hermes 插件上下文 API + 工具目录扩展；CoPaw 插件 CLI/扩展点（XXXL 积压）；NanoBot web_fetch 可选读取器（第三方主动靠拢）。 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | CoPaw / Hermes | ZeroClaw | NanoBot / NanoClaw | LobsterAI | PicoClaw |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈自托管网关，多 agent + 多渠道 + Cron | CoPaw：模型路由/记忆/Creator；Hermes：会话状态 + 网关 + Desktop | 身份访问（OIDC）+ 多 Provider + 邮件通道 | NanoBot：WebUI 体验；NanoClaw：容器化 agent 运行 | DSH 引擎迁移 + 企业 IM | 轻量 Web 启动器 |
| **目标用户** | 企业级自托管、多 agent 部署者 | 重度日常用户、桌面端 | 工程可持续性导向的自托管者 | WebUI 交互用户、容器部署者 | 企业 IM（飞书/POPO/WeCom）场景 | 轻量个人用户 |
| **技术架构** | 重型网关 + SQLite/WAL 持久层 | Agent 运行时 + 插件/harness 体系 | Rust（拆 crate、Provider 抽象） | NanoBot：Bun/TS；NanoClaw：容器 + agent-runner | Electron + DSH runtime 打包 | 前端 i18n + 配置合并 |
| **成熟度信号** | 规模断层，评审瓶颈 | 功能广，XXXL PR 积压 | 治理清晰（v1.0 tracker） | 队列消化好，功能较窄 | 贡献集中，去遗留化中 | 低活跃，清理积压 |

**关键差异判断：** OpenClaw 走"大而全自托管"，CoPaw/Hermes 走"功能纵深 + 插件化"，ZeroClaw 走"工程质量优先（拆包/身份/RFC）"，NanoBot/NanoClaw 走"轻量 WebUI/容器化快迭代"，LobsterAI 走"企业 IM 垂直场景"。技术架构上，**Rust（ZeroClaw） vs TS/Bun（NanoBot/NanoClaw） vs Electron（LobsterAI）** 分化明显，反映不同性能/部署预期。

---

## 6. 社区热度与成熟度分层

- **第一层 · 规模化运营 / 质量巩固期（OpenClaw）**：量级最大，主线从"加能力"转向"还旧账 + 加护栏"（更新治理、缓存复用、内存泄漏）。特征是**功能空窗、P0 密集、评审负债**——成熟期典型阵痛。
- **第二层 · 快速迭代 + 架构治理并行（CoPaw、Hermes、ZeroClaw）**：活跃度高、功能推进快，但同时出现明显**待合并积压**（CoPaw 22、Hermes 42、ZeroClaw 43）和 XXXL PR 长期 Under Review。处于"扩张与治理拉扯"阶段。
- **第三层 · 快速迭代、队列健康（NanoBot、NanoClaw）**：量级适中，合并效率高（NanoBot 合并率 ~83%），聚焦 WebUI 体验与稳定性修复，处于**健康快迭代**阶段。
- **第四层 · 集中/垂直开发（LobsterAI）**：高强度但贡献集中，主线是 DSH 去 OpenClaw 化，属**架构迁移期**。
- **第五层 · 低活跃/静默（PicoClaw 及 5 个无活动项目）**：以清理积压为主，生态活力低。

> **规律：** 活跃度越高，越早暴露"评审带宽"瓶颈。OpenClaw 的今天，可能是当前第二梯队 3–6 个月后的样子。

---

## 7. 值得关注的趋势信号（对智能体开发者的参考价值）

1. **"静默失败"是当前最致命的体验债。** 六个以上项目独立报告同一模式：成功假象 + 无诊断 + 无恢复。**给开发者的建议：把可观测性当作一等功能设计——每个降级路径都应有显式 reason code 与用户可见提示**（OpenClaw #127195 的"16 处字节相同错误无 reason code"是反面教材）。

2. **更新系统是自托管项目的头号失稳源。** OpenClaw 半完成更新拒绝回滚、NanoClaw `tag.gpgsign` 冲突、LobsterAI 首窗口前退出——**更新必须当作分布式事务处理**：原子性、可回退、状态可验证。这是"自托管"承诺能否兑现的试金石。

3. **上下文/缓存正在成为显性成本项。** 从 OpenClaw 的 21.3M cache-write tokens 到 CoPaw 的压缩预算挤占，**"上下文经济学"从隐性变显性**。建议在设计期引入上下文预算、缓存前缀复用与成本可见性。

4. **Windows 是生态级短板，也是差异化机会。** 跨 5 个项目的 Windows 问题说明：谁能提供"一等公民 Windows 支持"（服务管理、唤醒重连、安装器），谁就能拿下大量被忽视的自托管用户。

5. **Human-in-the-Loop 与权限边界正产品化。** CoPaw `ask_user_question`、Hermes 跨 agent 同意规则、ZeroClaw OIDC 收尾——**智能体从"自动执行"走向"受控执行"**，可中断性、审批转发、数据合规标记（`no_training`/`zero_retention`）将成为企业采用前提。

6. **生态进入"还债与治理"周期。** ZeroClaw 拆 crate、Hermes 文档栈迁移、LobsterAI 去遗留化、OpenClaw 更新治理——**头部项目正主动为长期维护付费**。对开发者的启示：早期架构决策（单 crate/单体网关）的成本会在规模化后集中兑现。

7. **评审带宽而非提交量是真实瓶颈。** 多个活跃项目待合并 PR 高企（OpenClaw 283、ZeroClaw 43、Hermes 42）。**对维护者：需要显式分流机制（release-fast-lane、P1 优先、bot 自动合并镜像类 PR）；对贡献者：小而聚焦的 PR 落地概率显著更高。**

---

*本报告严格基于 2026-11-25 所提供各项目 GitHub 数据快照生成。部分 Release 说明、评论数/点赞数在源材料中截断或缺失，相关结论已避免依赖此类字段；所有量级对比均以各项目日报口径为准。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-11-25

## 1. 今日速览

项目今日维持高活跃度：过去 24 小时 PR 更新 30 条，其中 25 条合并/关闭、5 条待合并；Issues 更新 9 条（8 条新开/活跃，1 条关闭）。合入工作集中在 WebUI 修复与重构、上下文/安全加固，以及文档与社区入口维护。当日无新版本发布。新报问题以 WebUI 体验缺陷与 Anthropic 模型兼容性为主，其中两项已有对应修复 PR。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并 25 条 PR，覆盖面较广，说明维护队列消化顺畅：

- **WebUI 正确性与状态管理**
  - #6800 修复多窗口下归档/恢复串扰：改为在单个 SQLite 事务中仅对指定会话操作，不再整体保存侧边栏归档列表。
  - #6727 重构 WebUI 网关：不再把结构化 WebSocket 写入转成合成 HTTP 请求，拆分磁盘操作、历史投影与 UI 状态归属。
  - #6723 话题删除取消确认弹窗，改为即时隐藏 + 8 秒撤销，移动端同步收起侧边栏。
  - #6724 所选预设关闭图像输入且无可用回退时，保留输入框内容并提示，而不是直接发起一轮对话。
  - #6728 窄屏下隐藏“Working for …”运行计时，保留最新工具活动。
- **执行与性能**
  - #6798 将前台命令（8 并发、排队）与 32 个后台会话容量分离，短命令不再被预览占用阻塞。
  - #6711 消除 diff 场景下的冗余资源：无 Markdown 渲染时不再加载解析器，打包 WebUI 不再内置第二份 Shiki 语言与主题资源。
- **上下文与安全**
  - #6797 系统提示中跳过空的 Archived Context Summary（如仅问候的对话压缩为 `(nothing)`）。
  - #6716 在 DNS 解析前拒绝含控制字符或空白的畸形主机名。
- **配置与社区维护**
  - #6148 提供商连接可删除并持久化，配置重载后不再回填为空默认项，运行中的网关可响应变更。
  - #6799 更新 README/COMMUNICATION.md 中微信群 2 的二维码（原码 2026-11-21 过期）。

整体看，项目在 WebUI 稳定性、执行资源隔离与安全校验三条线上有实质推进。

## 4. 社区热点

- **#6323 feat(webui): 在同一会话内编辑并重新发送消息**（OPEN，自 2026-10-20，今日更新）
  https://github.com/HKUDS/nanobot/pull/6323
  摘要显示 20 项 CI 检查全部通过（含 `CI required`），但带 `conflict` 标签，存在冲突需处理。这是长周期高关注功能，反映用户对“改一句话重问”这类对话编辑能力的需求。
- **#6296 fix(providers): 流式缺少 index 时区分并行工具调用**（OPEN，自 2026-10-19）
  https://github.com/HKUDS/nanobot/pull/6296
  针对 Gemini OpenAI 兼容接口：并行工具调用不带 `tool_calls[].index`，每个调用整块到达且以 `finish_reason: "stop"` 结束，`_parse_chunks` 回退到按当前位置处理导致串号。跨模型兼容性问题，影响面较大。
- **#6807 WebUI 希伯来语本地化与双向对话**（OPEN，评论 1）
  https://github.com/HKUDS/nanobot/issues/6807
  提案者明确披露整个工作流（架构、希伯来语翻译、自动化测试、截图、PR 草稿）由 AI agent 完成，并使用机器翻译起草。讨论价值在于 AI 生成贡献的透明披露方式与 RTL 支持范围。
- **#6801 飞书仅广播的 @所有人 唤醒机器人并产生多余回复**（OPEN，评论 1）
  https://github.com/HKUDS/nanobot/issues/6801
  在 `group_policy: "mention"` 下，仅广播性质的 `@_all` 被当作对群内每个机器人的提及，机器人在未被点名时被唤醒。属群聊场景的误触发，影响真实使用体验。
- **#6785 Anthropic Haiku 5.x 与 reasoningEffort 冲突**（OPEN，评论 1）
  https://github.com/HKUDS/nanobot/issues/6785
  使用 Haiku 5.5 时，任何非 `adaptive`/`none` 的 `reasoningEffort`（如 `"medium"`）都会导致请求失败，报 `invalid_request_error`。

## 5. Bug 与稳定性

按影响程度排列：

1. **高 — Anthropic 思考块签名失效，会话不可用**（#6786，OPEN，无 fix PR）
   https://github.com/HKUDS/nanobot/issues/6786
   在 `anthropic/claude-sonnet-5-5` + `reasoningEffort: "medium"` 下，回合内上下文压缩后恢复会话报 `Invalid signature in thinking block`；且 `nanobot -m` 会隐藏该错误。两个问题叠加：会话不可恢复 + 错误不可见。
2. **高 — 大图入站静默失败**（#6805，OPEN，无 fix PR）
   https://github.com/HKUDS/nanobot/issues/6805
   约 4032×3024、4 MB JPEG 经 WebUI 上传成功，但提供商返回 502，随后无图重试，用户侧表现为静默失败。建议增加可配置最大图片尺寸或更强调降采样。
3. **中 — Anthropic Haiku 5.x reasoningEffort 被拒**（#6785，OPEN，无 fix PR）
   https://github.com/HKUDS/nanobot/issues/6785
   手动思考预算被上游拒绝，需在参数映射层处理。
4. **中 — 飞书广播 @all 误唤醒**（#6801，OPEN，无 fix PR）
   https://github.com/HKUDS/nanobot/issues/6801
   群聊 mention 策略的边界判定问题。
5. **低 — WebUI 将 `<br>` 显示为字面文本**（#6803，OPEN，已有 fix PR #6804）
   https://github.com/HKUDS/nanobot/issues/6803 → https://github.com/HKUDS/nanobot/pull/6804
   Markdown 表格单元格内的 `Draft<br>Ready` 未换行；在流式、完成、刷新三种状态下均可复现。修复方案为归一化无属性的 `<br>` 标签。
6. **已关闭 — Windows 下杀毒软件锁定 bun.exe 导致 TUI 安装失败**（#6784，CLOSED）
   https://github.com/HKUDS/nanobot/issues/6784
   首次使用时 Bun 运行时下载校验通过，但移入缓存报 `WinError 32`。已关闭，未见对应 fix PR 在今日列表中。

## 6. 功能请求与路线图信号

- **WebUI 长文本自动转为工作区文件**（#6806，OPEN）
  https://github.com/HKUDS/nanobot/issues/6806
  粘贴日志、文章、配置、命令输出时整段内联，污染对话记录并增大体积。诉求明确、改动边界清晰，适合纳入 WebUI 迭代。
- **WebUI 希伯来语本地化 + RTL**（#6807，OPEN）
  https://github.com/HKUDS/nanobot/issues/6807
  涉及国际化框架与双向布局，工作量较大，且提案为 AI agent 端到端产出，需人工审校翻译质量。
- **可选的 web_fetch 读取器（Lexmount）**（#6802，OPEN）
  https://github.com/HKUDS/nanobot/issues/6802
  由 Lexmount 开发者关系人员提出，参照现有 Jina Reader 可选 + 本地提取兜底的模式。属生态集成请求，需评估第三方依赖与隐私边界。
- **图片尺寸上限/降采样策略**（#6805，与上述 Bug 同源）
  若作为增强实现，可同时修复静默失败问题。

结合已有 PR 判断：#6803 已具备修复（#6804），落地概率最高；#6806 与 WebUI 近期高频改动方向一致；#6807、#6802 尚无对应 PR，短期进入版本的可能性较低。

## 7. 用户反馈摘要

- **错误可观测性不足**：用户指出 `nanobot -m` 会隐藏 Anthropic 思考块签名错误（#6786），失败原因对用户不可见。
- **静默失败最伤体验**：大图上传后无图重试、用户无从得知（#6805）；这是“看起来成功、实际降级”的典型痛点。
- **群聊场景的误判成本高**：飞书公告类 `@所有人` 触发机器人发言（#6801），在真实群组中会造成干扰。
- **对话编辑是刚需**：#6323 长期开放且已通过全部 CI，说明“编辑并重发”被持续投入。
- **输入体验细节**：长文本内联（#6806）、Markdown 表格换行（#6803）、窄屏计时占位（已由 #6728 处理）均来自日常高频操作路径。
- **生态方主动靠拢**：Lexmount 主动提出作为可选读取器（#6802），显示 `web_fetch` 的插件化设计获得外部关注。

## 8. 待处理积压

- **#6323 WebUI 编辑并重发**（自 2026-10-20，OPEN，`conflict` 标签）
  https://github.com/HKUDS/nanobot/pull/6323
  已通过 20 项 CI 但存在合并冲突，建议尽快 rebase，避免长期悬置。
- **#6296 并行工具调用 index 缺失修复**（自 2026-10-19，OPEN）
  https://github.com/HKUDS/nanobot/pull/6296
  跨提供商兼容性修复，积压超过一个月。
- **#6789 refactor(sdk): 统一直连与流式执行**（2026-11-25 新开，OPEN）
  https://github.com/HKUDS/nanobot/pull/6789
  新提交，涉及 SDK 核心路径，需重点评审。
- **#6786 / #6785 Anthropic 兼容性两项**（均为 OPEN，无 fix PR）
  https://github.com/HKUDS/nanobot/issues/6786 ｜ https://github.com/HKUDS/nanobot/issues/6785
  同属 Anthropic 参数与思考块处理，建议合并排查，优先处理 #6786 的错误隐藏问题。
- **#6784 关联修复缺失**：Windows/Bun 安装问题已关闭，但今日列表中未见对应 fix PR，建议确认关闭依据。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-25

## 1. 今日速览

项目保持高活跃度：过去 24 小时有 50 条 Issue 更新（48 条新开或活跃、2 条关闭）和 50 条 PR 更新（42 条待合并、8 条已合并或关闭），并发布 1 个 canary 版本。讨论集中在会话状态持久化和网关稳定性上，Unicode 代理字符导致的结算崩溃（#144413，11 条评论）是当日最热议题。缺陷类 Issue 占比高，涉及 gateway、desktop、cron、plugins 等多个组件，且多条为跨版本长期存在的问题。社区也出现了产品化方向的新提案，例如 Agent 网络同意规则（#159584）和工具目录扩展（PR #159345）。整体健康度良好，但待合并 PR 积压明显（42 条）。

## 2. 版本发布

**canary.20261125T064800Z-v0.23.4**（2026-11-25 发布）

- 类型：canary（预发布）渠道，版本号 v0.23.4+canary.20261125T064800Z。
- 发布说明中包含 Hermes Desktop 下载表（macOS Apple Silicon DMG 等），但提供给我们的发布说明摘要在下载链接处截断。
- 所提供的材料未包含具体功能变更、破坏性变更或迁移注意事项，无法据此说明，建议维护者补充完整变更日志。

## 3. 项目进展

今日已合并或关闭的 PR 中，可识别的有：

- **PR #151011 [CLOSED]** — `fix(telegram)`: 多段/长 Telegram 消息以 rich_message 块形式到达时被静默丢弃（无线索、无日志），现可转换为可读文本送达 agent（关联 #146067）。这是消息平台可用性的实质性修复。
- **PR #120507 [CLOSED]** — `fix(gateway)`（安全）：在危险命令审批阻塞期间，裸词 `yes`/`always`/`no` 会绕过 `_check_slash_access`，导致非管理员可批准操作；该问题已修复，属于安全边界的加固。

其余 6 条合并/关闭 PR 在材料中未展开。整体看，今日合并侧重“安全与消息链路正确性”，而 42 条待合并 PR 表明评审吞吐是当前主要瓶颈。

## 4. 社区热点

- **Issue #144413**（11 条评论，P2）— 工具结果含孤立代理字符时，网关结算/`/discard` 抛出 `UnicodeEncodeError`，会话随后停滞。链接：NousResearch/hermes-agent Issue #144413
- **Issue #90579**（9 条评论，P3）— Desktop 侧栏“Project”分组使 Messaging 与 Cron 分区不可达，用户要求任何视图下保持可达。链接：NousResearch/hermes-agent Issue #90579
- **Issue #156164**（9 条评论，P2）— #156081 之后主动裁剪工具结果的遗留决策（上下文引擎视角）。链接：NousResearch/hermes-agent Issue #156164
- **Issue #154275**（8 条评论，P2）— patchelf 0.15.2（nixpkgs-unstable 当前版本）下补丁失败。链接：NousResearch/hermes-agent Issue #154275

分析：热点集中于**会话/上下文状态的边界情况**（编码、上下文压缩、结算）与**桌面端信息架构**，反映用户已进入重度日常使用，痛点从“能否运行”转向“长时间运行是否可靠、信息是否易找回”。👍 数据普遍为 0–1，说明讨论以问题排查为主，而非投票式需求。

## 5. Bug 与稳定性

按严重程度：

**P2 / 高影响**
- #144413 网关结算 UnicodeEncodeError（代理字符），会话停滞 — 材料中未见 fix PR。
- #158919 owner 退出/中断不终止 subagent，产生真实孤儿进程（叠加 #146414）— 未见 fix PR。
- #110341 `inject_memory_provider_tools()` 重新附加被 `tool_search` 延迟的工具并随请求发送 — 未见 fix PR。
- #143109 kanban 限流任务固定 5 分钟重试，而非等待已知重置时间 — 未见 fix PR。
- #151918 cron 回执恢复在复用网关下读取 `SLACK_HOME_CHANNEL` 无 profile 密钥作用域，每 30 秒无限重试 — 未见 fix PR。
- #160041 Telegram 溢出续传在 MarkdownV2 超时后以纯文本重发，造成重复 — 未见 fix PR。
- #145705 侧栏缓存被每次 WAL 写入失效，几乎每次轮询全量重建 — 未见 fix PR。
- #126224 `kimi-for-coding` 解析为 262,144 而非 1,048,576 tokens（上游目录改名）— 未见 fix PR。
- #147965 iOS beta Project 过滤无会话、新会话落入 `$HOME` — 未见 fix PR。
- #152731 Windows Desktop + Ollama Qwen 3.5 4B 无法调用终端工具 — 未见 fix PR。
- #93625 网关创建的会话 `cwd` 为空，桌面侧栏丢弃（疑似历史丢失）— 未见 fix PR。
- #145169 Desktop 展开 subagent 后 composer 下方出现空白带 — 未见 fix PR。

**P3 / 中低影响**
- #160012 网关 watchdog 退出可能被 GIL 持有的 faulthandler dump 或阻塞的 stderr 写入拖住 — 有相关 PR #160163？材料未明确，暂记为待确认。
- #64862 `hermes skills install` 的 rich MarkupError 导致扫描报告打印崩溃（安装仍完成）— 未见 fix PR。
- #127468 `hermes pause` 不停派发：6 个 `dispatch_once` 调用方中 5 个忽略 ESTOP 哨兵 — 未见 fix PR。
- #55994 `/model --refresh` 不清除内存中 OpenRouter 目录缓存 — 未见 fix PR。

已有修复 PR 相关的有：PR #160162（并发插件扫描不再丢弃 provider）、PR #160163（网关投递规范化澄清批次）、PR #160160（ACP fork 忙碌会话给出明确拒绝原因）、PR #138857（模糊匹配不再吞掉匹配前空白）。

## 6. 功能请求与路线图信号

- **#159584**（security，P3）Agent 网络：不同所有者 agent 之间的“可问什么”同意规则（插件原型）— 已有原型思路，可能进入插件层而非核心。
- **PR #160159**（P3）`ctx.record_data_use(requires)`：插件可标记工具结果为 `no_training`/`zero_retention`，Nous 后续轮次仅路由至合规端点 — 与合规/数据治理路线直接相关，纳入可能性较高。
- **PR #160132**（P3）向插件告知触发本轮运行的 Hermes 生产者（子 agent 完成、后台任务结束）— 通知类插件痛点，成熟度较高。
- **PR #159345**（P3）插件目录新增 Treg（“agent 工具的 OpenRouter”，4,200+ 工具）— 生态扩展信号。
- **PR #146149**（P3）文档迁移至 `apps/docs` + Fumadocs（替换 Docusaurus）— 工程基础设施改造。

判断：下一版本更可能先落地插件上下文 API（#160159、#160132）与目录 pin 更新（#159905、#160161、#160165），而非跨 agent 网络这类安全议题。

## 7. 用户反馈摘要

- **长会话可靠性是首要痛点**：工具输出体积、上下文压缩与结算耦合，任何一步出错（代理字符、裁剪决策）都会让会话“停摆”，用户需要的是可恢复而非静默失败。
- **桌面端信息组织被高频吐槽**：Project 分组隐藏 Messaging/Cron（#90579）、空 `cwd` 会话消失（#93625）、subagent 展开留白（#145169），本质是“历史找不回、状态看不清”。
- **多 profile / 多平台部署者**在复用网关下遭遇凭据作用域与无限重试（#151918），希望配置隔离更严格。
- **限流与配额**场景（#143109）希望系统遵循已知重置时间，减少无效轮询。
- **本地模型用户**（Ollama、Windows）在工具调用上仍有摩擦（#152731），影响个人助手的“本地化”承诺。
- 满意侧信号：Telegram 富块消息修复（#151011）直接解决了“消息石沉大海”的静默丢失。

## 8. 待处理积压

按创建至今时长（截至 2026-11-25），长期未闭合的重要条目：

- **#55994**（2026-07-01 创建，约 5 个月，P3）`/model --refresh` 缓存不失效 — 存在 1 个 👍。
- **#64862**（2026-07-15，约 4 个月，P3）`hermes skills install` MarkupError 崩溃。
- **#90579**（2026-08-20，约 3 个月，P3）侧栏 Project 分组隐藏 Messaging/Cron — 当日第二大热门，属低成本高感知问题。
- **#93625**（2026-08-24，约 3 个月，P2）空 `cwd` 导致会话“看起来丢失” — 用户信任风险。
- **#110341**（2026-09-13，约 2.5 个月，P2）延迟工具被重新发送 — 影响计费与 token 成本。
- **#127468**（2026-09-29，P3）`hermes pause` 不停派发 — 控制面语义失效，建议优先。
- **#144413**（2026-10-25，1 个月，P2）当日最热崩溃，建议尽快给出版本或 fix。

维护者建议：优先消化 42 条待合并 PR 中的 P2 修复（#160162/#160163/#160160），同时为 #144413、#93625 两条 P2 状态类缺陷指派负责人，避免“会话停滞/历史丢失”叙事扩散。

---
*说明：以上内容严格基于所提供数据；发布说明中的下载链接表格被截断，故未展开具体资产信息。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-25）

## 今日速览

今日项目整体处于**低活跃状态**：过去 24 小时无新 Issue、无评论互动、无新版本发布，仅有 2 条 PR 被关闭（均为合并/关闭状态，待合并为 0）。值得关注的是，今日关闭的 2 条 PR 均为历史积压项：一条是标注 `stale` 的法语 UI 本地化 PR（#3467，创建于 11-10），另一条是修复配置覆盖 Bug 的 PR（#957，创建于 2026-03-01，更新于今日）。从数据看，项目今日的主要动作是**清理积压**而非推进新功能，社区讨论热度为零。

## 版本发布

无新版本发布。

## 项目进展

今日合并/关闭 2 条 PR：

1. **PR #3467 — feat(web): add French UI locale** [CLOSED / stale]
   - 链接：https://github.com/sipeed/picoclaw/pull/3467
   - 作者：slashr512
   - 内容：为 PicoClaw Web 启动器新增完整法语 UI 本地化，包括新增 `web/frontend/src/i18n/locales/fr.json` 完整翻译集、在 i18next 资源中注册法语、处理 dayjs locale，并新增 **Français** 语言选项。
   - 状态说明：该 PR 带有 `stale` 标签，从创建（11-10）到今日（11-25）历时 15 天被关闭，关闭时无合并记录。对多语言生态而言，法语支持的推进**未完成落地**。

2. **PR #957 — fix(config): prevent default ModelList from overriding user config** [CLOSED / type: bug, domain: config]
   - 链接：https://github.com/sipeed/picoclaw/pull/957
   - 作者：HRronaldo
   - 内容：修复 issue #680 — 当用户配置中省略 `api_base` 时，不再错误继承默认值；首次启动的新用户仍获得完整默认模型列表模板；部分配置用户不再遇到 `api_base` 被错误覆盖问题。原问题表现为返回 401 错误（`Status: 401 Body: {"error":{...`）。
   - 健康度提示：这条 PR 从创建（2026-03-01）到关闭（2026-11-25）跨度约 **9 个月**，属于典型的长周期积压修复。

**整体推进评估**：今日无新增功能落地，项目向前推进主要体现在关闭积压项（1 个本地化 PR + 1 个配置修复 PR）。考虑到 #957 关系到用户配置解析的核心正确性，其关闭对配置模块稳定性具有正面意义，但因缺乏合并/版本发布信息，实际效果需在后续版本中验证。

## 社区热点

今日**无活跃讨论**：Issues 更新 0 条，2 条 PR 的评论数均为 `undefined`，👍 反应数均为 0。

从关闭的两条 PR 本身可窥见背后的诉求：
- **本地化需求**（#3467）：社区希望 Web 启动器支持更多语言，法语是其中一例。该类 PR 长期 stale 后被关闭，反映出维护者对 i18n 贡献的处理节奏较慢。
- **配置健壮性需求**（#957）：用户对 `api_base` 默认值覆盖用户配置的行为感到困扰，这是典型的"开箱即用默认值"与"用户显式配置"冲突问题。

## Bug 与稳定性

今日**无新报告的 Bug、崩溃或回归问题**（Issues 更新 0 条）。

已有 fix PR 的稳定性议题：
- **配置覆盖 Bug（issue #680 → PR #957）**：严重程度中等偏上。当用户仅提供 `model_name` 与 `api_key` 而省略 `api_base` 时，系统错误继承默认值并导致 401 鉴权失败，直接影响可用性。已有 fix PR（#957），今日已关闭，**建议关注其是否真正合入或转由其他 PR 承接**，避免问题复发。
  - 链接：https://github.com/sipeed/picoclaw/pull/957

## 功能请求与路线图信号

今日无新功能请求（Issues 0 条）。结合已关闭 PR 判断：

- **多语言 UI（i18n）**：PR #3467 提供了完整的法语本地化实现，但以 stale 关闭。若维护者有意将多语言纳入路线图，这套 `fr.json` + i18next 注册方案可作为模板复用；否则建议在贡献指南中明确 i18n PR 的接受标准，减少重复劳动与贡献者挫败感。**纳入下一版本的可能性：不明确**（数据源未显示合并）。
  - 链接：https://github.com/sipeed/picoclaw/pull/3467

## 用户反馈摘要

今日 Issues 评论为 0，无新增用户反馈可供提炼。

从 PR 描述中可间接反映的真实痛点：
- **配置用户场景**：用户习惯"最小配置"——只填 `model_name` 和 `api_key`，期望系统自动补全其余字段。当前行为导致 401，说明部分配置的默认值合并逻辑曾存在缺陷（PR #957 声称已修复）。
- **本地化诉求**：有贡献者愿意投入精力完成整套法语翻译，说明 PicoClaw Web 启动器存在非英语用户群体。

## 待处理积压

今日数据未提供完整的开放 Issue/PR 列表，无法全面评估积压规模。但今日关闭的两条 PR 本身即是积压清理的证据，提醒维护者关注以下结构性风险：

1. **PR #3467（stale 关闭）**：法语本地化贡献历时 15 天未获处理而被 stale 关闭，建议确认是否有替代方案或明确拒绝原因，以避免影响社区贡献积极性。
   - 链接：https://github.com/sipeed/picoclaw/pull/3467
2. **PR #957（关闭）**：配置修复历经约 9 个月才关闭，反映核心配置模块的维护周期偏长。建议核查该 fix 是否已进入主线，防止 issue #680 长期悬而未决。
   - 链接：https://github.com/sipeed/picoclaw/pull/957

> 说明：以上内容严格基于所提供数据。评论数、点赞数等字段在数据源中为 `undefined`，故未做推断；PR 关闭状态与合并状态在数据中未作区分，涉及"是否合入"的判断均以"需后续验证"表述。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-25

## 1. 今日速览
项目今日维持高频开发节奏：24 小时内 19 条 PR 更新（10 条待合并、9 条已合并/关闭）、3 条新 Issue 打开、0 条 Issue 关闭、0 个新版本发布。PR 活动集中在 agent 镜像自动刷新、依赖升级和 agent-runner/core 的缺陷修复上，CI 与基础设施维护类变更占多数。三条新 Issue 均为 `triage/unresolved` 状态、无评论、无点赞，且均由同一贡献者 glifocat 提交，其中两条已有对应 fix PR（#4562、#4568），响应链路较快。整体活跃度评估：**高**；但 Issue 关闭数为 0，社区讨论面较窄。

## 2. 版本发布
本日无新版本发布。

## 3. 项目进展
今日合并/关闭的 9 条 PR 主要为自动化与维护类变更，实质性功能向前推进有限：

- **agent 镜像硬化刷新（已关闭，多批次）**：#4570（→ `v2026.11.0-20261124T1731`）、#4561、#4556、#4554、#4551、#4542、#4536 均将 `v2026.11.0` 的硬化镜像指向更新的 digest；#4569 则将 `v2.3.0` 发布线更新至 `v2026.11.0-20261124T1354`。此类 PR 由 `nanoclaw-image-refresh[bot]` 自动发起并合入，反映镜像供应链持续维护。
- 上述合并以镜像 digest 替换为主，未涉及功能面变更；项目整体功能推进量本日**偏低**，主要价值在于修复与依赖链的持续打扫。

## 4. 社区热点
今日数据中所有 Issues/PR 的评论数与点赞数均未记录有效值（PR 评论为 `undefined`，Issue 为 0），**无明显讨论热点**。相对值得关注的是两条带 fix 的缺陷条目：

- Issue #4564（chat turn 无回答时静默）：https://github.com/nanocoai/nanclaw/issues/4564 —— 对应 fix PR #4568：https://github.com/nanocoai/nanoclaw/pull/4568
- Issue #4563（`@types/bun` 1.4.4 导致容器 typecheck 失败，阻塞 #4274）：https://github.com/nanocoai/nanoclaw/issues/4563 —— 对应 fix PR #4562：https://github.com/nanocoai/nanoclaw/pull/4562

分析：诉求集中在“代理静默失败”与“依赖升级引发的构建阻断”，属于可用性与工程链路稳定性问题，而非新功能呼声。

## 5. Bug 与稳定性
按影响程度排列：

1. **高 — Issue #4563**：容器 typecheck 在 `@types/bun` 升至 1.4.4 后失败，**阻塞 Dependabot PR #4274**。影响 `main`（9774cb596 + #4274），macOS 平台。**已有 fix PR #4562**（接受 `@types/bun` 1.4 的数值型 `signalCode`）。
   - https://github.com/nanocoai/nanoclaw/issues/4563
2. **中 — Issue #4564**：chat turn 结束时无回答且无提示，既无回复也无 nudge；当 Codex 相关改动 #4166 合并后问题更明显。来自 `processQuery` 中空结果跳过投递检查与 wrapper 的路径。Linux 平台。**已有 fix PR #4568**（对无回答的对话轮次追加一次 nudge）。
   - https://github.com/nanocoai/nanclaw/issues/4564
3. **中 — Issue #4566**：当 git 配置 `tag.gpgsign` 启用时，更新流程在 prepare 阶段失败（备份 tag 调用，位于 `scripts/update/transaction.ts:330`）；影响 v2026.10.0（7203e00d），`main` 上同一逻辑未改。Linux 平台。**暂无 fix PR**。
   - https://github.com/nanocoai/nanoclaw/issues/4566
4. **待观察 — PR #4572**（OPEN）：修复“空闲容器停止过程中到达的消息丢失”问题（area/agent-runner、area/core）。
   - https://github.com/nanocoai/nanoclaw/pull/4572

## 6. 功能请求与路线图信号
今日 Issues 均为缺陷报告，**未见明确的新功能请求**。结合已有 PR，可判断以下改动大概率进入近期版本：

- **agent-runner 稳定性修复**：PR #4562（typecheck 兼容）、PR #4568（无回答 nudge）、PR #4572（避免停止容器时丢消息）均带 `core-team`、`follows-guidelines` 标签，落地优先级较高。
- **依赖链升级**：PR #4557 将 `@clack/core` 1.6.0 与 `@clack/prompts` 1.9.0 合并升级（两者互相锁定，无法单独升级）；PR #4308 将 `actions/checkout` 从 4.4.0 升至 7.0.1（跨度大，仍处 OPEN）。
- 数据中未提供 #4166#4166、#4274 的具体内容，仅可确认它们分别与 Codex 行为和 `@types/bun` 升级相关。

## 7. 用户反馈摘要
今日三条 Issue 均无评论，无法提炼讨论型反馈。从报告正文可归纳的真实使用场景与痛点：

- **多平台使用**：报告覆盖 macOS 与 Linux 宿主，说明跨平台部署是实际使用形态。
- **自托管更新流程敏感**：用户在意 `tag.gpgsign` 等本地 git 配置与更新事务脚本的兼容性（#4566）。
- **对“静默失败”容忍度低**：对话轮次无输出被视为体验缺口，期望有显式提示或 nudge（#4564）。
- 以上 Issue 均由同一贡献者提交，样本有限，**不宜代表广泛用户满意度结论**。

## 8. 待处理积压
- **PR #4308**（OPEN，dependabot）：`actions/checkout` 4.4.0 → 7.0.1，自 2026-11-09 创建、2026-11-25 仍有更新，跨度大且涉及 CI 主流程，建议维护者评估兼容性后推进或关闭。
  - https://github.com/nanocoai/nanoclaw/pull/4308
- **Issue #4566**（OPEN，triage/unresolved）：`tag.gpgsign` 导致更新失败，影响已发布版本 v2026.10.0，尚无 fix PR，建议优先分诊。
  - https://github.com/nanocoai/nanoclaw/issues/4566
- **PR #4571**（OPEN，bot）：最新硬化镜像 `v2026.11.0-20261125T0659` 待合并，属例行刷新。
  - https://github.com/nanocoai/nanoclaw/pull/4571
- 注：数据中 Issues 创建时间均为 2026-11-24，尚未构成长期未响应项；上述为当前唯一可识别的待关注条目。

---
*数据来源：NanoClaw GitHub 仓库（github.com/qwibitai/nanoclaw）2026-11-25 快照。本日报仅依据所提供数据编写，评论数与点赞数缺失的条目不作为热度依据。*

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

# LobsterAI 项目日报（2026-11-25）

## 1. 今日速览

LobsterAI 今日整体呈现高强度集中提交的态势：过去 24 小时共有 22 条 PR 更新，其中 20 条已完成合并或关闭，仅 2 条仍处于待合并状态。Issues 与 Releases 均为零更新，说明今日的工程活动主要围绕既有功能增强和缺陷修复，没有对外发布新版本。活动主体高度集中在少数核心贡献者（fisherdaddy、btc69m979y-dotcom），贡献者广度有限。整体判断：项目处于活跃开发期，工程推进较快，但外部社区参与度偏低。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日合并或关闭的 PR 覆盖插件生态、记忆设置、智能体生成、IM 渠道权限和打包流程等多个方向，项目在“DSH 引擎迁移后的功能补齐”这一主线上明显前进：

- **#3202 插件生态管理**：通过 IPC 与 Typert 客户端补齐 DSH 插件全生命周期管理（list / inspect / install / cancel / remove / setEnabled / getRegistries / pickLocalDir），支持从 registry、git、本地安装。https://github.com/netease-youdao/LobsterAI/pull/3202
- **#3201 记忆设置重构**：将 `MemorySettings` 从 `Settings.tsx` 拆出，支持按智能体切换、范围过滤（all/global/project）、分区展示与批量删除记忆，同时清理了遗留的 dreaming 与 IM 权限逻辑。https://github.com/netease-youdao/LobsterAI/pull/3201
- **#3200 智能体草稿生成**：新增流式智能体草稿生成（`agentDraftGenerator.ts`，支持取消）以及后台描述回填（`agentDescriptionBackfill.ts`），并配合设置页改版。https://github.com/netease-youdao/LobsterAI/pull/3200
- **#3199 IM 渠道权限预设**：新增按渠道的默认 DSH 权限预设配置，并接入 `DshBootstrap` 与 `DshRuntimeAdapter`，附带审批转发与会话预设。https://github.com/netease-youdao/LobsterAI/pull/3199
- **#3196 打包流程**：在 macOS 与 Windows 上将 `dsh-runtime` 打入 `app.asar/dsh-runtime`，原生插件与 helper 二进制置于 unpacked 目录，并简化 Windows 安装器。https://github.com/netease-youdao/LobsterAI/pull/3196
- **#3193 浏览器设置精简**：`BrowserWebAccessConfig` 仅保留活跃 DSH 浏览器配置，移除遗留 OpenClaw 冗余项。https://github.com/netease-youdao/LobsterAI/pull/3193
- **#3190 数据备份与迁移重构**：面向 DSH 引擎的 Manifest v3 备份迁移流程上线，移除 OpenClaw 遗留耦合与已退役的 `sqliteBackup` 代码。https://github.com/netease-youdao/LobsterAI/pull/3190

整体来看，今天的合并工作体现出“去 OpenClaw 化、补齐 DSH 能力”的清晰方向，功能面拓展与历史债务清理同步推进。

## 4. 社区热点

数据中所有 PR 的评论数字段均返回 `undefined`，👍 反馈均为 0，Issues 无更新，因此**今日不存在可量化的社区讨论热点**。从提交密度看，最值得关注的是 fisherdaddy 的插件生态与设置重构系列（#3202、#3201、#3200），但这属于内部工程热点，而非社区热度。

## 5. Bug 与稳定性

今日报告的缺陷均已有对应修复 PR，按严重程度排列如下：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | 从远程连接版本升级的 Windows 配置可能在首个窗口出现前退出（#3187 迁移后遗留的 Agent 快照列问题） | 已修复：#3194 https://github.com/netease-youdao/LobsterAI/pull/3194 |
| 中 | 重命名文件后侧边栏标签路径不同步，导致保存报错、磁盘后续编辑无法进入预览 | 修复待合并：#3197（OPEN）https://github.com/netease-youdao/LobsterAI/pull/3197 |
| 中 | 两个客户端使用相同 WeCom Bot ID 订阅时互相驱逐，初始连接失败可致机器人一直离线 | 已修复：#3188 https://github.com/netease-youdao/LobsterAI/pull/3188 |
| 中 | 飞书话题会话与定时投递在重启/升级后丢失上下文，提醒投递到错误接收者类型 | 已修复：#3192、#3195 https://github.com/netease-youdao/LobsterAI/pull/3192 、https://github.com/netease-youdao/LobsterAI/pull/3195 |
| 低 | DSH 工作区树遗漏无会话的 Agent 目录；生态侧边栏无法展示完整 Agent 列表 | 已修复：#3191、#3189 https://github.com/netease-youdao/LobsterAI/pull/3191 、https://github.com/netease-youdao/LobsterAI/pull/3189 |

值得注意：高严重度问题与迁移改动直接相关，说明升级路径上的兼容性仍是稳定性薄弱环节。

## 6. 功能请求与路线图信号

今日无 Issues 数据可据以提炼用户显式功能请求。但从已合并 PR 的形态可推断下一版本的方向信号：

- **插件生态**（#3202）已成体系，含安装源分类与启停控制，具备随版本发布的成熟度。
- **按渠道的 IM 权限预设与审批转发**（#3199）表明企业/团队场景是重点投入方向。
- **智能体草稿生成**（#3200）引入了 AI 辅助配置体验，可能成为后续交互改版的基线。
- **#3196、#3190** 显示发布工程与数据迁移正被系统性重做，通常意味着为下一版重大更新做准备。

以上为基于 PR 内容的推断，非用户直接提出的需求。

## 7. 用户反馈摘要

本期数据不含 Issue 评论，无法提炼真实用户痛点或满意度表态。仅能从修复 PR 描述中间接看到使用场景：企业 IM（飞书、POPO、WeCom）的定时提醒与话题会话路由、Windows 远程连接用户的升级启动、以及文件重命名后的预览同步。这些反映的是维护者观察到的实际使用路径，而非用户自述反馈。

## 8. 待处理积压

今日数据中未包含长期未响应的 Issue 或陈旧 PR 信息，无法识别积压项。当前仅有的两条待合并 PR 均为当日创建、当日更新，不属于积压：

- #3198 fix(im)：移除过时的网关重启提示 https://github.com/netease-youdao/LobsterAI/pull/3198
- #3197 fix(artifacts)：重命名后保持侧边栏标签同步 https://github.com/netease-youdao/LobsterAI/pull/3197

**维护者提示**：建议补查历史积压列表，并关注今日 20 条 PR 集中于单一贡献者的现象，后续需要关注代码评审的分摊与贡献者多样性。

---

**数据说明**：本报告所有结论均基于所提供的 LobsterAI GitHub 数据；评论数、长期积压、历史 Issue 等字段在该数据中缺失或不完整，相关部分已如实标注，未做推测性补全。

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

# CoPaw 项目日报（2026-11-25）

## 1. 今日速览

项目今日保持高强度活跃：24 小时内 Issues 更新 33 条（新开/活跃 25、关闭 8），PR 更新 50 条（待合并 22、合并/关闭 28），但无新版本发布。讨论重心集中在模型路由与会话级配置（#8464、#8893）、记忆标签索引在 Windows 上的故障（#8863、关联 PR #8786）以及 Creator 插件中 video_memory 的解析和分段缺陷（#8916/#8918/#8919 等）。修复类 PR 密度较高，多个问题有对应 fix PR 正在推进，但大量长期开放 PR（如 #8532、#8554、#8472）仍处于 Under Review 状态，需要关注审阅积压。整体健康度：活跃度高，合并吞吐正常，但积压压力正在积累。

## 2. 版本发布

无（过去 24 小时 0 个新版本）。

## 3. 项目进展

今日合并/关闭的 PR 共 28 条（明细中评论数为 undefined，无法逐条核实内容），从可见信息看，推进方向主要有：

- **code mode 工具调用修复**：PR #8923（fix(code-mode): let run_tool_batch reach catalog tools inside code mode）针对今日新报的 #8903（代码模式下 `run_tool_batch` 调用失败）给出修复，将内部调用从单工具 toolkit 扩展到 catalog 工具，属于对核心 Agent 执行路径的直接改进。
- **媒体类 400 错误回退**：PR #8920（fix(agents): retry generic media bad requests without media）对应 #8887，在 provider 返回通用 `400 Invalid request parameters` 时增加无媒体重试，缓解后续消息持续“Internal error”的问题。
- **记忆标签索引可观测性**：PR #8921 为不健康的标签索引增加诊断说明与重建入口，配合 #8863 的 Windows 故障排查。
- **依赖升级**：PR #8786 将 `reme-ai` 从 0.4.2.0 升级到 0.4.2.3，针对 Windows 路径规范化问题（关联 #8580），直接对应今日活跃的 #8863。
- **Creator JSON 指针修复**：PR #8905 按 RFC 6901 强制数组索引 token 校验，防止错误元素写入。

已关闭 Issue 中，#8464（手动 /compact 无视会话级模型切换）与 #8856（Web 控制台超宽内容被裁切）、#8706（创作助手输入卡顿）已闭环，说明常见体验类问题在被持续消化。整体上项目在“修复稳定性 + 增强记忆/工具链”方向上稳步前进，但今日无版本落地，收益需等下一次发布体现。

## 4. 社区热点

- **#8464 [CLOSED] 手动 /compact 无视会话级模型切换**（6 条评论，最高讨论量）— agentscope-ai/QwenPaw Issue #8464
  用户切换会话模型后压缩请求仍发给 agent 级默认模型，且在严格校验模型上直接 400 失败。反映“会话级配置”与“agent 级默认”之间的语义割裂，是模型路由设计的核心痛点。
- **#8863 [OPEN] Windows 上 ReMe 标签索引永久失败**（5 条评论）— agentscope-ai/QwenPaw Issue #8863
  两台 Windows 机器、两个版本（2.3.0 / 2.3.0.post1）均复现，内置 reme-ai 0.4.2.0。已有 PR #8786 升级依赖，社区在等待验证闭环。
- **#6274 [OPEN] 新增 ask_user_question 工具（Human-in-the-Loop）**（4 条评论，1 👍，创建于 2026-07-20）— agentscope-ai/QwenPaw Issue #6274
  长期高关注的功能请求，诉求是让 Agent 在高风险/模糊请求时暂停并向用户抛出结构化问题，避免自行猜测产生副作用。
- **#8727 [OPEN] Responses continuation summary 因推理占用 4000 token 输出预算而失败**（3 条评论）— agentscope-ai/QwenPaw Issue #8727
  涉及 OpenAI Responses 协议下 `disable_thinking=True` 的实际行为差异，属于长上下文压缩链路的脆弱点。
- **PR #8554 [OPEN] 插件 CLI 命令与扩展点**（创建于 2026-11-03，XXXL）— agentscope-ai/QwenPaw PR #8554
  大型插件能力扩展，长期处于开放状态，是生态化方向的关键讨论点。

诉求归纳：用户最关心的是**模型选择语义一致性**（会话级 / agent 级 / 全局）、**跨平台（尤其 Windows）记忆后端可靠性**，以及**Agent 执行的可控性与可中断性**。

## 5. Bug 与稳定性

按严重程度排列：

**高（阻塞核心流程或数据/会话不可用）**
- **#8863 [OPEN]** Windows 上 ReMe 标签索引永久失败，`/memory/tags`、`/memory/tag-files` 返回 503，记忆标签功能在 Windows 上完全不可用。**已有 fix 路径**：PR #8786（reme-ai 0.4.2.3）+ PR #8921（诊断与重建入口）。
- **#8887 [OPEN]** 工具结果中的媒体数据块在非多模态模型上触发 400，导致后续所有消息 “Internal error”。**已有 fix PR**：#8920。
- **#8851 [OPEN]** console import map 将入口 chunk 重映射为 `?v=…`，bundle 加载两次，插件路由永不注册（`PawApp <id> did not register its app route`）。暂无对应 fix PR。
- **#8903 [OPEN]** 代码模式下 `run_tool_batch` 调用失败（`ToolNotFoundError`）。**已有 fix PR**：#8923。

**中（功能部分失效或有明确错误路径）**
- **#8727 [OPEN]** Responses continuation summary 在模型默认推理耗尽 4000 token 输出预算时失败。暂无 fix PR。
- **#8877 [OPEN]** OpenAI 兼容流中无状态码的模型过载错误绕过重试机制（2.3.0.post1 观测两次，main@228e303 用 mock transport 复现）。暂无 fix PR。
- **#8875 [OPEN]** MCP `streamable_http` 客户端把服务端 4xx 误判为“未连接”并拆除会话。暂无 fix PR。
- **#8890 [OPEN] / #8891 [OPEN]** OpenAI 兼容 provider 的模型发现忽略 `max_input_tokens`，内置 provider 上下文表缺 glm-5.3/5.4，均回落到 128k 默认值，导致上下文窗口计算错误。暂无 fix PR。
- **#8914 / #8916 [OPEN]** Creator 的 JSON 提取函数在 JSON 前后存在散文性括号时误解析。暂无 fix PR。
- **#8464 [CLOSED]** 手动 /compact 使用错误模型，已关闭。

**低（已关闭或已降级处理）**
- **#8918 / #8919 [CLOSED][Close-and-review-later]** video_memory 分段超 `max_scene_sec`、`merged_graph_payload()` 对空值/非字符串根主题崩溃——被标记为延后复核。
- **#8856 [CLOSED]** Web 控制台超宽表格/长行被裁切，无横向滚动。
- **#8706 [CLOSED]** 创作助手输入逐键卡顿（AgentDock 全量重渲染、缺少 memoization）。
- **#8592 [CLOSED]** Creator 评审轮次无法决断（REJECT 恒 422）等多重后端缺陷。

## 6. 功能请求与路线图信号

- **ask_user_question 工具（#6274）**：Human-in-the-Loop 结构化提问，4 条评论、1 👍，创建已逾四个月。目前无直接对应 PR，但需求稳定且与 Agent 安全性高度相关，值得评估进入下个版本。
- **AI Prompt Polishing 按钮（#8892）**：在聊天输入区一键润色提示词，3 条评论，属轻量 UX 增强，落地成本低。
- **Console 模型设置的 agent 作用域（#8893，#8892 同期）**：用户指出 Console 模型配置没有 agent 层级，chat 选择器仅会话级，配置好的 agent 模型可能显示为“无模型”。与 #8464 同源，可能催生统一的“模型作用域”设计。
- **reranker 模型中心（PR #8472，Under Review）**：为记忆检索增加 reranker 设置、服务测试与多查询精度历史，与 Embedding 模型中心对齐，路线图信号明确。
- **独立记忆写入模型（PR #7719，Under Review）**：ReMeLight 记忆写入不再复用主模型，降低 token 成本。
- **插件 CLI 与扩展点（PR #8554）**、**Antigravity CLI (ACP) harness 插件（PR #8922）**、**PawApp 迁移至 QwenPaw-Data 0.4.1（PR #8924）**：指向插件化与多 harness 支持的中长期生态方向。

判断：#8893/#8892 类轻量体验改进与 #6274 最有可能进入近期版本；#8472、#7719、#8554 属大型特性，取决于审阅进度。

## 7. 用户反馈摘要

- **模型选择语义混乱是最大痛点**：用户在多处报告“会话切了模型但实际仍用默认模型”（#8464）、“配置的 agent 模型显示为无模型”（#8893）。真实场景是长上下文会话（约 34 万 token）下的压缩可靠性，一旦压缩请求打到严格校验模型即全盘失败。
- **Windows 是明显的薄弱平台**：用户在**两台独立 Windows 10 机器**上复现记忆标签索引失败（#8863），说明不是环境偶发问题，跨平台一致性直接影响记忆功能可用性。
- **长会话与媒体上下文是稳定性热点**：视频/文件类工具结果残留到后续请求（#8887）、URL 引用媒体未被折叠（PR #8487）、压缩摘要输出预算被推理占满（#8727），都指向“上下文管理”这一核心使用场景。
- **前端插件与打包体验有缺口**：插件路由不注册（#8851）、控制台超宽内容裁切（#8856）反映 Web 控制台与插件体系尚不成熟。
- **性能敏感**：创作助手输入逐键卡顿（#8706）虽已关闭，但说明用户对交互延迟有明确感知和不满。
- **正向信号**：多条 Issues 在 1–2 天内获得关闭或 fix PR（如 #8903→#8923、#8887→#8920），响应速度得到体现，用户反馈闭环较快。

## 8. 待处理积压

长期开放、需要维护者优先关注的事项：

- **PR #8532**（feat(chat): append-only 会话存储、分页历史与原生 Turn fork，XXXL，创建于 2026-11-02，Under Review）— agentscope-ai/QwenPaw PR #8532。涉及核心会话存储架构，久拖会影响后续所有聊天相关改动。
- **PR #8554**（插件 CLI 命令与扩展点，XXXL，创建于 2026-11-03）— agentscope-ai/QwenPaw PR #8554。生态化关键路径，需明确是否拆分合入。
- **PR #7719**（ReMeLight 记忆写入独立模型，创建于 2026-09-12，Under Review）— agentscope-ai/QwenPaw PR #7719。已近两个半月未决。
- **PR #8472**（reranker 模型中心，创建于 2026-10-28，Under Review）— agentscope-ai/QwenPaw PR #8472。
- **Issue #6274**（ask_user_question / Human-in-the-Loop，创建于 2026-07-20，4 条评论、1 👍）— agentscope-ai/QwenPaw Issue #6274。社区持续关注但无明确路线图回应，建议给出状态说明。
- **PR #8268**（task_tracker 运行完成回调限界与清理，创建于 2026-10-16）与 **PR #8308**（provider 404 集成测试修正，创建于 2026-10-18）— 小型修复类 PR 积压，审阅成本低，建议优先清理。
- **Issue #8890 / #8891**（上下文窗口与内置 provider 上下文表缺失）— 同作者同日提交、相互关联，建议合并为统一问题跟踪，避免分散处理。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-11-25

## 1. 今日速览

项目保持高强度开发节奏：过去 24 小时 Issues 更新 11 条（10 条新开/活跃、1 条关闭），PR 更新 50 条（43 条待合并、7 条已合并/关闭），无新版本发布。今日出现两项关键治理动作——v1.0.0 路线图 tracker（#12712）正式创建，OIDC 收尾 tracker（#8289）更新至 v0.9.1 状态，显示项目正从单点功能向版本规划与身份访问体系收敛。合并侧以配置健壮性和 Provider 加固为主，但 43 条待合并 PR 积压较重，其中多条标记 `needs-author-action`，评审带宽是当前瓶颈。整体健康度良好，风险集中在 MCP 传输、邮件通道和成本控制三条稳定性线上。

## 2. 版本发布

今日无新版本发布。v0.9.0（2026-11-12）已包含 OIDC 核心栈与 Dashboard 登录，v0.9.1 仍处于准备阶段（多条 Issue/PR 标记 `release:v0.9.1`）。

## 3. 项目进展

今日已合并/关闭的 7 条 PR 中含数项实质性修复：

- **[PR #12560] 配置健壮性**：拒绝非有限小数的数值配置。此前 `str::parse::<f64>` 会把 `inf`、`NaN`、`1e999` 等文本解析为无效数值进入配置路径，现已封堵。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12560
- **[PR #11717] 本地 Whisper 转写支持指定模型**：为 `local_whisper` 配置块增加可选 model 项，解决上传无法命名模型的问题。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11717
- **[PR #12675] `antigravity_cli` Provider 加固**：硬化状态目录并加入带内失败检测，修正了此前 squash（#12676）带入的旧修订问题。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12675
- **[Issue #12107] 关闭**：Dashboard 聊天 socket 在轮次中途重连后，可在轮次结束后重载对话记录。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12107

整体看，今日推进集中在"配置/Provider 层防错"而非架构级变更；架构级动作（Runtime 拆 crate、IRC/Twitch 插件化）仍在评审队列中。

## 4. 社区热点

- **[Issue #8289] OIDC 里程碑收尾 tracker**（6 条评论，今日最活跃）：OIDC 核心栈已随 v0.9.0 发布，当前聚焦 canonical principals 与入站认证的收尾。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8289
- **[Issue #12697] 拆分 `zeroclaw-runtime` 为更小 crate**（3 评论，1 👍）：维护者在协调模块归属与拆分顺序，反映单 crate 体量已带来维护压力。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12697
- **[Issue #12055] MCP HTTP 客户端无连接池/keep-alive 控制**（3 评论）：过期池化 socket 会导致工具调用结果未知（outcome-unknown），属 S2 降级。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12055
- **[Issue #12712] v1.0.0 路线图 tracker**（今日新建，1 👍）：明确各版本顺序、目标日期与用途，取代 FND-001 §6 的版本计划，是社区判断项目节奏的核心信号。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12712

背后诉求：需求正从"功能增量"转向"工程可持续性"（拆包、身份体系、版本治理）与"可靠性兜底"（连接池、凭证脱敏）。

## 5. Bug 与稳定性

按严重程度排列（据标签与摘要）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| S2 | **[Issue #11760]** 邮件通道重启后重复应答邮件：active 模式从不设置 `\Seen`，重启即重答收件箱 | 状态 `in-progress`，暂无明确 fix PR |
| S2 | **[Issue #12703]** 同一问题的新报告：实时处理的消息保持 UNSEEN，重启重放积压 | 今日更新，暂无 fix PR |
| S2 | **[Issue #12055]** MCP HTTP 客户端无 pool/keep-alive 控制，过期连接导致工具调用 outcome-unknown | 开，暂无 fix PR |
| S2 | **[Issue #12710]** Containerfile `check` 阶段测试在 StageX 镜像中失败，且无 workflow 构建该阶段 | 今日新开，无 PR |

值得注意：#11760 与 #12703 描述同一根因（IMAP `\Seen` 未设置），属重复讨论，建议合并跟踪。稳定性风险持续集中在邮件通道与 MCP 传输层。

## 6. 功能请求与路线图信号

- **[Issue #12709] 原生本地 Turso 作为可选记忆后端**（今日新开）：SQLite 仍为默认，仅面向本地 Rust 引擎。尚无对应 PR，短期落地概率较低。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12709
- **[Issue #12707] 守护进程持有 OIDC 刷新授权（ADR-017）**（今日新开）：为设备绑定的 Zerocode 会话协调实现，设计来自 #12496 的 ADR 修订。与 #8289 同属 `topic:identity-access`，是 v0.9.1 的前瞻信号。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12707
- **[Issue #11119] 接收方自主的会话间消息（RFC #11027）**：实现批次 tracker，属 `topic:agent-loop`，指向多智能体会话通信能力。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11119
- **已有 PR 支撑、可能进入 v0.9.1 的方向**：成本限制覆盖（#12500 / #11589）、凭证脱敏（#12553）、IRC/Twitch 插件化（#12443，标 `breaking-change`）。

## 7. 用户反馈摘要

- **邮件通道是明确痛点**：两位不同用户（#11760、#12703）独立报告"重启后重复应答"，说明默认模式下的行为令运维困惑，期望的是处理后即标记已读。
- **成本控制预期未兑现**：`cost.allow_override` 有文档但无人读取（#11589），超限只能重启守护进程；`[cost.enforcement] mode` 也被预算闸门忽略（#12500），用户期望细粒度执行策略。
- **可观测性不足**：Matrix 被拒消息仅 DEBUG 日志可见（#12442）；MCP 连接失效表现为"结果未知"而非明确错误。
- **CI 可信度**：`check` 阶段被注释为"通过标准的唯一来源"，却实际失败且无 workflow 覆盖（#12710）。

## 8. 待处理积压

- **[PR #11589]**（2026-10-07 创建，`needs-author-action`, XL）成本超限覆盖，已挂起约 7 周。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11589
- **[PR #12443]**（2026-11-14，`breaking-change`, XL）IRC/Twitch 移出二进制，属破坏性变更，需明确迁移路径。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12443
- **[PR #11999]**（2026-10-23，`risk:high`）GitHub Actions 依赖批量升级，长期未合。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11999
- **[Issue #11119]**（2026-09-25）接收方自主会话消息实现 tracker，两个月仅 1 条评论，推进缓慢。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11119

建议维护者优先处理：合并 #11760/#12703 的重复跟踪、为非 `\Seen` 问题指派 fix PR、清理 `needs-author-action` 队列以缓解 43 条待合并压力。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*