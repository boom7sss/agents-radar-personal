# OpenClaw 生态日报 2026-11-17

> Issues: 446 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-17 19:12 UTC

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

# OpenClaw 项目日报 · 2026-11-17

> 数据来源：github.com/openclaw/openclaw（Issues 446 条更新 / PR 500 条更新 / 1 个新版本）。下文所有引用均来自所提供数据。

---

## 1. 今日速览

过去 24 小时项目保持高活跃度：Issues 更新 446 条（新开/活跃 347、关闭 99），PR 更新 500 条（待合并 220、已合并/关闭 280），并发布 v2026.11.5。迭代节奏强劲，但**积压压力同样显著**——待合并 PR 达 220 条，且多个 P0/P1 稳定性议题（状态库 WAL、SQLite 争用、升级回滚、记忆注入）持续挂起超过一个月。今日讨论焦点集中在**状态持久化与升级可靠性**两类主题，说明项目正处在"高频发布 + 稳定性追赶"的并行阶段。

---

## 2. 版本发布

### v2026.11.5

**Highlights（据发布说明）：**
- **重启安全的会话：** 排队的消息、发送权限以及最终聊天写入在 Gateway 重启后得以保留（#196923、#196540、#196493，作者 @steipete，致谢 @joshavant）。
- **更安全的更新：** Doctor 或 Gateway 启动失败时会**回滚**（说明文本被截断，仅能确认"回滚"这一机制存在）。

**破坏性变更 / 迁移注意事项：**
- 发布说明中未见明确的破坏性变更声明；"回滚"属于升级行为变化，建议升级前确认带状态迁移的版本路径。
- ⚠️ 与本次发布相关的存量风险仍需关注：Issue #197083 报告 2026.11.1→2026.11.3 的 npm 升级在安装后 Doctor 校验 WAL 提交时失败，且因 `state-migrated-no-rollback` 拒绝回滚；Issue #161921 报告 `doctor --fix` 与 `plugins update` 互相阻塞。新版本声称"更安全的更新"，但这两个问题今日仍为 OPEN 状态，升级前建议先行验证。
- 链接：Release v2026.11.5（未提供独立链接）；相关 Issue [openclaw/openclaw#197083](https://github.com/openclaw/openclaw/issues/197083)、[#161921](https://github.com/openclaw/openclaw/issues/161921)

---

## 3. 项目进展

今日合并/关闭 PR 共 280 条，但**所提供数据仅列出 20 条 PR 及其状态，其中多数为 OPEN**，仅可确认以下关闭项：

- **[PR #200262](https://github.com/openclaw/openclaw/pull/200262)（CLOSED）** `fix(gateway)`：引导式频道设置在初始连接关闭后（含首个 `wizard.start` 回复丢失的情况）仍卡在 busy 状态的问题。标签：P1、docs/gateway、compatibility 风险、等待维护者。
- 另有 4 条 Issue 今日关闭：[#44309](https://github.com/openclaw/openclaw/issues/44309)（A2A 单向派发模式，stale）、[#138561](https://github.com/openclaw/openclaw/issues/138561)（active-memory 升级后停止召回）、[#112313](https://github.com/openclaw/openclaw/issues/112313)（死信投递队列条目永久无法清理）、[#158592](https://github.com/openclaw/openclaw/issues/158592)（宿主睡眠唤醒后 runtime 发布超时，P0）、[#149153](https://github.com/openclaw/openclaw/issues/149153)（WebChat 重复渲染最终回复）。其中 #158592 属 P0 级、#112313 与 #149153 标记 stale，关闭原因需维护者复核确认。

**观察：** 关闭动作覆盖了网关引导、记忆召回、消息投递、runtime 恢复四条链路，方向正确；但**今日未见明确记录的功能性新增合并**，项目推进更多体现在缺陷收敛与 v2026.11.5 的可靠性加固上。

---

## 4. 社区热点

按评论数排序的讨论焦点：

| 排名 | 条目 | 评论 | 核心诉求 |
|---|---|---|---|
| 1 | [#164294](https://github.com/openclaw/openclaw/issues/164294) Gateway 状态库 WAL 自动 checkpoint 从未完成（被进程内 reader 钉住） | 42 | 状态库可靠性；WAL 无限增长导致运维焦虑 |
| 2 | [#150635](https://github.com/openclaw/openclaw/issues/150635) 短期回忆存储每晚驱逐条目，导致 dreaming 深度阶段永不晋升（🦞 钻石龙虾评级，涉及数据丢失） | 29 | 记忆机制的**数据丢失**与语义失效 |
| 3 | [#178359](https://github.com/openclaw/openclaw/issues/178359) `doctor --fix --non-interactive` 空转 15+ 分钟无输出（P1，崩溃/挂起） | 26 | 修复工具本身不可用、无反馈 |
| 4 | [#168955](https://github.com/openclaw/openclaw/issues/168955) Windows 启动回归：ready 从 ~410s 恶化至 ~1030s | 22 | 跨平台性能回归 |
| 5 | [#126360](https://github.com/openclaw/openclaw/issues/126360) `AgentSelectionRequiredError` 在显式多智能体归属下刷屏日志（🦞 钻石龙虾） | 21 | 多智能体默认配置的可观测性 |

**分析：** 高热度议题高度集中在**"状态/记忆持久化"与"运维工具可诊断性"**两处。用户并非在要求新能力，而是在要求系统**不再静默失败**（无日志、无 CLI、无恢复路径的表述在 #153426、#112313 中反复出现）。这对个人 AI 助手形态尤为关键——单用户场景下没有 SRE 兜底，任何静默故障都会直接演化为数据丢失。

---

## 5. Bug 与稳定性

按严重程度排列（均已标注是否存在 fix PR，依据所提供标签）：

### P0
- **[#153426](https://github.com/openclaw/openclaw/issues/153426)** 受管理的记忆根文件 `MEMORY.md` / `USER.md` 被 provenance ratchet 静默且永久排除出 bootstrap 注入，普通行为（一次网页搜索）即可触发，无诊断、无 CLI、无恢复。标签含 needs-security-review、impact:security、ux-release-blocker。**无 fix PR**（clawsweeper:no-new-fix-pr）。
- **[#161921](https://github.com/openclaw/openclaw/issues/161921)** `state-migrated-no-rollback` 后 `doctor --fix` 与 `plugins update` 互相要求对方先执行，插件卡在旧版本。**无 fix PR**；相关回滚修复见 PR [#200734](https://github.com/openclaw/openclaw/pull/200734)（OPEN）。
- **[#89278](https://github.com/openclaw/openclaw/issues/89278)** Codex OAuth 刷新成功但 cron/heartbeat 因 10s 超时失败。**有 linked PR**。

### P1
- **[#48003](https://github.com/openclaw/openclaw/issues/48003)** steer 模式未在主会话回合中途注入消息（20 评论、4 👍，为本次数据中反应最高）。**有 linked PR**。
- **[#178359](https://github.com/openclaw/openclaw/issues/178359)** doctor 修复准备阶段挂起（26 评论）。**无 fix PR**，但标签含 fix-shape-clear。
- **[#168955](https://github.com/openclaw/openclaw/issues/168955)** Windows 启动性能回归。**无 fix PR**。
- **[#117262](https://github.com/openclaw/openclaw/issues/117262)** 状态库 3 个并发写句柄导致 ~33s 事件循环停顿（DEF-61）。**无 fix PR**。
- **[#104719](https://github.com/openclaw/openclaw/issues/104719)** memory-wiki 兜底扫描忽略工具超时。**有 linked PR**。
- **[#157255](https://github.com/openclaw/openclaw/issues/157255)** lane 超时后 turn claim 未释放，会话卡死 90+ 分钟。**无 fix PR**。
- **[#181120](https://github.com/openclaw/openclaw/issues/181120)** macOS Gateway 主线程关闭 worker MessagePort 时阻塞无响应。**无 fix PR**。
- **[#38327](https://github.com/openclaw/openclaw/issues/38327)** google-vertex/gemini 报 "Cannot convert undefined or null to object"（回归，3 👍）。**有 linked PR**。

### P2（择要）
- [#150635](https://github.com/openclaw/openclaw/issues/150635) 记忆晋升失效（数据丢失，26/29 评论，有 linked PR）
- [#101929](https://github.com/openclaw/openclaw/issues/101929) 上下文估算器高估约 2.3–2.6 倍（消息丢失）
- [#182891](https://github.com/openclaw/openclaw/issues/182891) prompt cache 从不复用（每次请求 `cache read dropped N -> 0`，直接影响成本）
- [#141474](https://github.com/openclaw/openclaw/issues/141474) `sessions_yield` 使 `agents_wait` 永久悬挂；今日更新称修复已在 main 通过 30/30 测试，将随预发布版发布
- [#126360](https://github.com/openclaw/openclaw/issues/126360)、[#167609](https://github.com/openclaw/openclaw/issues/167609)（今日在 main `f27bc2417fe` 有 live repro 并修正了原定位）

**稳定性判断：** 状态数据库（WAL、并发写、checkpoint）是当前**结构性风险单点**，#164294 与 #117262 同日更新且互相关联；记忆子系统存在两处独立的数据丢失路径（#150635 逐出、#153426 注入排除），修复需要产品决策，短期难闭环。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 状态信号 | 纳入下一版本可能性 |
|---|---|---|---|
| A2A 单向派发模式（避免回复乒乓） | [#44309](https://github.com/openclaw/openclaw/issues/44309) | 今日 CLOSED（stale），19 评论 | 低——但 PR [#200755](https://github.com/openclaw/openclaw/pull/200755) 正在解决相邻的"消息突发合并"问题 |
| Skill Workshop 超大会话的上下文预算/跳过策略 | [#150238](https://github.com/openclaw/openclaw/issues/150238) | OPEN，needs-product-decision，有 linked PR | 中——决策依赖，但已有 PR 路径 |
| WhatsApp 直聊文本+媒体突发合并为单个 agent 回合 | 由 PR [#200755](https://github.com/openclaw/openclaw/pull/200755)（Closes #200753）承载 | OPEN，今日新建 | 中高——直接改善多模态碎片回复体验 |
| 插件 hook 可见"经校验的配对设备"身份 | PR [#200664](https://github.com/openclaw/openclaw/pull/200664) | OPEN，等待作者 | 中——安全边界相关 |
| 排队输入记录结束原因并支持崩溃恢复 | PR [#200533](https://github.com/openclaw/openclaw/pull/200533) | OPEN，XL 级，多项 merge-risk | 与 v2026.11.5 "重启安全会话"同一主线，**较高** |
| GBrain 插件集成元数据补齐 | PR [#200752](https://github.com/openclaw/openclaw/pull/200752) | OPEN，CI 阻塞中 | 高（维护性修复，XS 级） |

**路线图判断：** 下一版本重心大概率延续 v2026.11.5 的主线——**会话/排队消息的崩溃与重启恢复**（#200533 与之同源），以及**多模态渠道的消息聚合质量**（#200755）。记忆子系统的结构性修复受 product-decision 与 security-review 双重阻塞，预计不会快速进版。

---

## 7. 用户反馈摘要

**核心痛点：静默失败缺乏可观测性。**
用户反复强调"无诊断、无 CLI、无恢复"——#153426（记忆注入被排除）、#112313（死信队列条目永久不可清理）、#138561（active-memory 停止召回，info 级别无任何信号）。这类问题在单用户个人助手场景中无人兜底，伤害最大。

**使用场景画像：**
- **macOS / Windows 桌面常驻 Gateway**（LaunchAgent 服务、睡眠唤醒后恢复），#158592、#181120、#168955 均源于此。
- **多智能体显式归属配置**（`agents.ownership: "explicit"`，6 个智能体），#126360 的日志刷屏直接来自该配置。
- **多渠道混合接入**（Telegram 历史回放、WhatsApp 突发消息、WebChat），#168611、#200755、#177094 指向渠道间消息形态不一致。
- **成本敏感的重度使用**：#182891 的 prompt cache 失效与 #101929 的上下文高估直接推高按 token 计费的开销。

**满意度侧写：** 报告者普遍提供可复现环境与 commit 哈希（`434ff77`、`16fd68b`、`f27bc2417fe`），#141474 与 #167609 今日更新显示维护者与报告者形成了有效的"复现—定位—修正结论"闭环，社区协作质量较好。同时 #192667 报告者在升级 macOS 27.3 beta 3 后确认深色主题输入可见性恢复，说明部分 UI 问题随操作系统升级自然消解。

**不满侧写：** 升级路径不可回滚（#197083、#161921）造成"想退退不回去"的高压处境；stale 标签被施加于 P0/P2 数据丢失类问题（#158592、#112313、#149153），可能让报告者感到问题被降权。

---

## 8. 待处理积压（提醒维护者关注）

以下条目创建时间久、严重性高、今日仍在活动但缺乏 fix PR：

| Issue | 创建 | 严重度 | 时长 | 备注 |
|---|---|---|---|---|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) steer 模式不中途注入 | 2026-03-16 | P1 | ~8 个月 | 4 👍 为数据中最高；有 linked PR 未合并 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) gemini-vertex 回归 | 2026-03-06 | P1 | ~8 个月 | 3 👍；有 linked PR |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) Codex OAuth cron 失败 | 2026-06-02 | P0 | ~5.5 个月 | 有 linked PR |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) SQLite 争用 33s 停顿 | 2026-08-01 | P1 | ~3.5 个月 | DEF-61，无 fix PR |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) 记忆根被永久排除 | 2026-09-20 | P0 | ~2 个月 | 需 security review，无 fix PR |
| [#161921](https://github.com/openclaw/openclaw/issues/161921) doctor/plugins 互锁 | 2026-09-30 | P0 | ~1.5 个月 | 无 fix PR |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) Windows 启动回归 | 2026-10-11 | P1 | ~1 个月 | 无 fix PR |

**PR 侧积压：** 待合并 220 条中，[#173124](https://github.com/openclaw/openclaw/pull/173124)（agent persona 丢失，2026-10-15 起，L 级，已 ready for maintainer look）与 [#194443](https://github.com/openclaw/openclaw/pull/194443)（网关管理员权限跨原生客户端保持，security-review-required，2026-11-07 起）值得优先排期；后者涉及安全边界，长期悬置会累积风险。

**建议：** 优先为 #164294 / #117262 建立统一的状态库可靠性跟踪项（二者共享根因线索），并对 #153426 完成 security review 决策，以解除其 product-decision 阻塞。

---

*说明：本报告严格基于所提供的 OpenClaw GitHub 数据片段生成。PR 评论数在原始数据中多为 undefined，故未作排名；部分发布说明与 Issue 摘要文本被截断，相关结论已标注为"据现有文本可确认"。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-11-17）

> 数据范围：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw 共 13 个项目的当日 GitHub 动态摘要。所有数字与结论均来自素材，未引入外部信息。

---

## 1. 生态全景

今日生态呈现明显的**三层分化**：OpenClaw、Hermes Agent、NanoClaw、CoPaw、ZeroClaw 处于高频迭代与发布窗口（单日 PR 更新 15–50 条，含多条版本发布或 RC），而 PicoClaw、IronClaw、LobsterAI、TinyClaw 转入维护或清账状态，NullClaw、Moltis 全天无活动。一个强烈的共性信号是：**讨论重心已从"能力扩展"转向"可靠性、安全边界与默认配置的正确性"**——状态库/会话持久化、静默失败、配置项"被解析但未被消费"是多个项目独立出现的高热度主题。与此同时，多用户/多实例/Provider 可插拔等"从个人助手走向生产化"的架构诉求在 Hermes Agent、ZeroClaw、NanoBot 中同步浮现。生态整体处于**"高频发布 + 稳定性追赶"的并行阶段**，交付端（合并吞吐）普遍慢于输入端（Issue/PR 新增）。

---

## 2. 各项目活跃度对比

| 项目 | Issues（更新 / 关闭） | PR（更新 / 待合并 / 合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 446 / 99 关闭 | 500 / 220 待合 / 280 关闭 | v2026.11.5 | 活跃度最高，但积压与 P0/P1 稳定性风险显著 |
| **Hermes Agent** | 50 / 3 关闭 | 50 / 41 待合 / 9 关闭 | v0.23.2（稳定）+ canary | 高活跃；会话存储重构收尾干净，两条回归无 fix PR |
| **NanoClaw** | 5 / 2 关闭 | 43 / — / 27 关闭 | v2026.11.0-rc.1 + beta.4 | 高活跃、响应及时；RC 安装/更新链有未闭环缺陷 |
| **CoPaw** | 23 / 11 关闭 | 50 / 34 待合 / 16 关闭 | 无 | 流量活跃、交付偏慢；多个 XXXL 插件化 PR 卡评审 |
| **ZeroClaw** | 18 / 0 关闭 | 50 / 48 待合 / 2 关闭 | 无 | 输入高、吞吐低；新报 S0 安全问题，XL PR 长期待审 |
| **NanoBot** | 17 / 1 关闭 | 10 / 5 待合 / 5 关闭 | 无 | 修复吞吐正常，但安全类积压集中暴露且均无 fix PR |
| **IronClaw** | 0 | 10 / 10 待合 / 0 关闭 | 无 | 低活跃；全部为 dependabot 依赖升级，长期积压 |
| **LobsterAI** | 0 | 15 / 2 待合 / 13 关闭 | 无（有 release 分支同步） | 高合并、零社区讨论；安全类问题当日闭环 |
| **PicoClaw** | 0 | 3 / 1 待合 / 2 关闭 | 无 | 低活跃；以清理 stale 积压为主，缺 review 吞吐 |
| **TinyClaw** | 0 | 1 / 1 待合 / 0 关闭 | 无 | 低活跃；仅 1 条文档 PR |
| **ZeptoClaw** | 1 新开 | 0 | 无 | 极低活跃；仅 1 条无评论功能请求 |
| **NullClaw** | — | — | — | 过去 24 小时无活动 |
| **Moltis** | — | — | — | 过去 24 小时无活动 |

> 注：OpenClaw 的 Issue/PR 计数为"更新"口径（含新开、活跃、关闭），其余项目按素材所给统计口径；"—"表示素材未提供。

---

## 3. OpenClaw 在生态中的定位

**规模断层领先。** 单日 Issues 更新 446 条、PR 更新 500 条，是第二名 Hermes Agent（各 50 条）的近 9–10 倍，也是当日唯一进入"数百条级"的项目。这既是社区规模的体现，也意味着它是生态中唯一已形成**大规模外部贡献者池与维护者分流压力**的项目。

**优势：**
- **重启安全与会话持久化已产品化落地**（v2026.11.5 的排队消息、发送权限、最终聊天写入在 Gateway 重启后保留），其他项目多以 Issue/PR 形式提出同一诉求（如 NanoClaw #4422 线程历史回读仍为 opt-in 实验、Hermes Agent 处于存储接口重构期）。
- **升级回滚机制**已进入发布说明，而 Hermes Agent、ZeroClaw 的同类可靠性问题仍在 Issue 阶段。
- **社区协作闭环质量高**：报告者普遍附可复现环境与 commit 哈希，#141474、#167609 当日形成"复现—定位—修正结论"闭环。

**技术路线差异：** OpenClaw 以 **Gateway 常驻进程 + 状态库（SQLite/WAL）+ 记忆子系统（active-memory / dreaming）** 为核心，桌面常驻（macOS LaunchAgent、Windows）与多渠道（Telegram / WhatsApp / WebChat）混合接入是其典型部署形态；这与 Hermes Agent 的会话存储接口化重构、NanoClaw 的容器分组/加固镜像路线、ZeroClaw 的 SOP 审批与紧急停止安全控制路线明显不同。

**代价：** 规模带来的结构性风险集中——状态库 WAL（#164294，42 评论）、SQLite 并发写 33s 停顿（#117262）、记忆根被永久排除（#153426，P0 且需 security review）均挂起 1.5–3.5 个月；待合并 PR 达 220 条。**OpenClaw 是生态中"功能最完整、但稳定性债务最重"的项目。**

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话/状态持久化可靠性** | OpenClaw、Hermes Agent、CoPaw、NanoClaw、ZeroClaw | OpenClaw：#164294 WAL 无限增长、#117262 并发写停顿；Hermes：#149558 存储接口化（已合入）、#23717 可插拔 SessionDB（PG/MySQL）；CoPaw：#7724 会话与模型配置同时丢失；NanoClaw：#4422 线程历史回读 |
| **静默失败 / 可诊断性** | OpenClaw、NanoClaw、ZeroClaw、CoPaw | OpenClaw：#153426"无诊断、无 CLI、无恢复"；NanoClaw：#4429 更新校验只输出 schema 行；ZeroClaw：#9390 紧急停止文件无运行时消费者；CoPaw：#7724 反复丢失 |
| **配置项被解析但运行时未消费** | ZeroClaw、CoPaw、OpenClaw | ZeroClaw：#12477 cost enforcement、#12492 thinking 设置、#12054 profile 推理等级、#9390 紧急停止；OpenClaw：#161921 doctor/plugins 互锁；CoPaw：#8776 fallback 误判 |
| **默认安全边界不足** | NanoBot、ZeroClaw、NanoClaw、OpenClaw | NanoBot：#4796 `restrict_to_workspace` 默认 False、#4072/#4790 符号链接绕过、#6693 查询串令牌泄露、#6694 日志明文配对码；ZeroClaw：#12514 S0 审批跳过；NanoClaw：#4440 FIFO 阻塞容器打开；OpenClaw：#153426 security-review |
| **多用户 / 多实例 / 生产化** | Hermes Agent、ZeroClaw、NanoBo

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-17

## 1. 今日速览

今日项目活跃度**高**，但结构明显偏向安全与稳定性维护：24 小时内 Issues 更新 17 条（16 条新开/活跃、1 条关闭），PR 更新 10 条（待合并 5 条、已合并/关闭 5 条），无新版本发布。新开 11 条 Issue（#6690–#6698 等）几乎全部由同一贡献者 hamb1y 在今日集中提交，覆盖 SSRF、令牌泄露、依赖 CVE、协议与配置健壮性等安全面，同时多条早至 2026-05/07 的旧 Issue 被重新激活。PR 侧以 WebUI 修复与 CI 提速为主，共 5 条关闭，另有网关重构与 MCP 隔离两条架构级 PR 待合并。整体看，项目**修复吞吐正常，但安全类积压集中暴露，且尚无对应的 fix PR**，健康度需持续关注。

## 2. 版本发布

无。今日无新版本发布。

## 3. 项目进展

今日无功能级合并，关闭的 5 条 PR 均为 WebUI 修复与 CI 优化：

- **#6684** perf(ci): 加速 WebUI 全量回归门禁 — 针对前端改动约 14 分钟的浏览器测试等待（近 150 次 CI 运行中位 13m54s、p95 17m21s）做优化，直接改善开发反馈循环。[链接](https://github.com/HKUDS/nanobot/pull/6684)
- **#6683** fix(webui): 修复重连路径下已完成回合的状态结算 — 解决会话在回合完成后仍显示“响应中”的生命周期记账 Bug。[链接](https://github.com/HKUDS/nanobot/pull/6683)
- **#6687** fix(webui): 将 Agent 插件与 CLI 应用分离 — Apps 目录中拆分 CLI Apps / Agent Plugins / MCP 三类，保留 Ready 聚合与分类搜索。[链接](https://github.com/HKUDS/nanobot/pull/6687)
- **#6685** fix(webui): Apps 默认打开 Ready 页 — 修正始终落在安装目录的体验问题。[链接](https://github.com/HKUDS/nanobot/pull/6685)
- **#6689** fix(webui): 统一推理外壳活动文案（10 个语言区域）— 纯文案精修。[链接](https://github.com/HKUDS/nanobot/pull/6689)

**推进幅度评估：** 本日进展集中在 WebUI 体验打磨与 CI 效率，未推进核心 Agent 能力；网关启动重构（#6686）、MCP 启动隔离（#6680）等架构改动仍待合入。

## 4. 社区热点

今日讨论热度整体偏低（单条 Issue 评论数最高 3 条，👍 均为 0），热点由同一贡献者集中提交的系列安全 Issue 构成：

- **[#4798](https://github.com/HKUDS/nanobot/issues/4798)**（3 条评论）：并发文件写入未串行化导致工作区文件损坏 — 今日评论最多。
- **[#4796](https://github.com/HKUDS/nanobot/issues/4796)**（2 条评论）：`restrict_to_workspace` 默认 `False`，文件系统工具默认不受工作区约束。
- **[#4780](https://github.com/HKUDS/nanobot/issues/4780)**（2 条评论）：`MessageBus` 的 `asyncio.Queue()` 无 maxsize，无背压，可致内存耗尽。
- **[#4797](https://github.com/HKUDS/nanobot/issues/4797)**（2 条评论）：shell 子进程无 ulimit/cgroups/CPU 内存限制，存在 fork bomb 类风险。

**诉求分析：** 上述议题共同指向一个核心关切——**Agent 执行层的默认安全边界不足**。用户期望在“默认安全”而非“默认开放”的前提下使用文件、shell 与消息通道能力，并希望多会话并发场景具备可靠的资源隔离。由于评论者与提交者高度集中于同一人，尚不能视为广泛社区共识，但其技术论证详实，值得维护者优先评估。

## 5. Bug 与稳定性

按严重程度排列（**均无对应 fix PR**）：

**严重 — 数据完整性与拒绝服务**
- [#4798](https://github.com/HKUDS/nanobot/issues/4798) 并发写入未加文件锁，跨会话写同一文件可致数据损坏。
- [#4780](https://github.com/HKUDS/nanobot/issues/4780) 消息队列无界，任意通道或 WebSocket 客户端洪泛即可耗尽内存。
- [#4797](https://github.com/HKUDS/nanobot/issues/4797) shell 子进程无 OS 级资源限制。
- [#6698](https://github.com/HKUDS/nanobot/issues/6698)（今日新增）无输出命令可占满 agent 回合至最大运行时长；长时流式输出的截断按轮询应用，总缓冲量存在缺口。

**高 — 安全边界绕过**
- [#4796](https://github.com/HKUDS/nanobot/issues/4796) `restrict_to_workspace` 默认关闭。
- [#4072](https://github.com/HKUDS/nanobot/issues/4072) 工作区内相对符号链接可绕过 ExecTool 的工作区限制。
- [#4790](https://github.com/HKUDS/nanobot/issues/4790) 文件系统工具存在符号链接 TOCTOU 窗口（先解析后访问）。

**高 — 凭证与依赖**
- [#4885](https://github.com/HKUDS/nanobot/issues/4885) CLI Apps 远程注册表构成未签名的代码安装供应链，注册表可控包名被用于执行 pip/npm/uv/brew 安装。
- [#6693](https://github.com/HKUDS/nanobot/issues/6693)（今日新增）`check_api_token` 接受 `?token=` 查询串回退，令牌可经 URL 泄露。
- [#6694](https://github.com/HKUDS/nanobot/issues/6694)（今日新增）配对码在 info 级别明文写入日志。
- [#6695](https://github.com/HKUDS/nanobot/issues/6695)（今日新增）`sigstore==4.5.0` 约束解析出 `pyasn1 0.6.4`，含 4 个 CVE，建议升至 `>=0.6.5`。
- [#6697](https://github.com/HKUDS/nanobot/issues/6697)（今日新增）`webui/` dev 工具链 32 条 npm 通告（4 critical / 8 high，含 happy-dom、vitest、tinypool、vite、postcss），仅影响构建/开发链。
- [#6696](https://github.com/HKUDS/nanobot/issues/6696)（今日新增）`rehype-katex` 引入的 katex 受 GHSA-238p-pmpm-9mq7 影响，原型污染可绕过 KaTeX 信任限制，输入由 LLM 控制。

**中 — 网络与健壮性**
- [#6690](https://github.com/HKUDS/nanobot/issues/6690)（今日新增）`_BLOCKED_NETWORKS` 缺失组播 `224.0.0.0/4`、保留段 `240.0.0.0/4`、`198.18.0.0/…` 等，SSRF 防护不完整。
- [#6691](https://github.com/HKUDS/nanobot/issues/6691)（今日新增）`resolve_url_target` 未捕获 IDNA `UnicodeError`，畸形主机名可穿透 URL 校验。
- [#6692](https://github.com/HKUDS/nanobot/issues/6692)（今日新增）配置加载器遇超长整数字面量时裸 `ValueError` 逃逸 `load_config`，未包装为 `ConfigLoadError`。

**已关闭**
- [#4883](https://github.com/HKUDS/nanobot/issues/4883) API 会话锁映射无界增长 — 已关闭。

## 6. 功能请求与路线图信号

今日 Issues 以缺陷与加固为主，未出现明确的新功能请求；路线图信号主要来自待合并 PR：

- **[#6441](https://github.com/HKUDS/nanobot/pull/6441)**（OPEN，自 2026-10-24）会话级 reasoning effort：可在单会话内为下一条消息选择推理强度，无需改设置或影响运行中任务。属用户可控性增强，与 WebUI 近期密集迭代方向一致。
- **[#4477](https://github.com/HKUDS/nanobot/pull/4477)**（OPEN，自 2026-06-23）渐进式 Markdown 记忆：以常驻 `SOUL.md`/`USER.md`/`memory/MEMORY.md` + 按需读取的 `memory/wiki/` 取代结构化生命周期写入与自动概念注入。属长期记忆架构变更，建议下一版本重点评估。
- **[#6688](https://github.com/HKUDS/nanobot/pull/6688)**（OPEN）终态执行失败后阻断目标：修复持续目标在输出上限恢复、连续空响应后仍保持活动的问题，并将拒绝/截断响应正确标记为失败。
- **[#6686](https://github.com/HKUDS/nanobot/pull/6686)**（OPEN）网关启动整合与运行时职责拆分；**[#6680](https://github.com/HKUDS/nanobot/pull/6680)**（OPEN，含冲突）MCP 服务器启动隔离，慢启动 10 秒上报、60 秒取消，避免阻塞普通聊天。

**判断：** #6686、#6680 与现有关闭 PR 主题连贯（启动/网关/目录分类），具备较快合入可能；#4477 因涉及记忆架构替换，短期落地风险较高。

## 7. 用户反馈摘要

基于 Issues 摘要与评论数量可提炼：

- **默认配置安全感不足**：`restrict_to_workspace` 默认 `False` 被明确指出，反映使用者在实际部署中希望开箱即具备边界约束（#4796）。
- **多会话并发是真实使用场景**：并发写同一文件致损坏（#4798）与消息队列无背压（#4780）表明用户在多会话/多通道并行运行 agent，资源治理需求真实存在（#4797、#6698）。
- **执行链的可控性诉求**：长时/无输出命令占用回合（#6698）、子进程无 CPU/内存上限（#4797），指向对 agent 自主执行可预测性的关注。
- **供应链与凭证卫生**：远程注册表安装（#4885）、查询串令牌（#6693）、日志明文配对码（#6694）显示用户已按生产标准审视该项目。
- **满意度信号：** 今日 👍 均为 0、单条评论不超过 3 条，尚无正面反馈数据可引用；WebUI 侧连续修复（默认 Ready 页、插件分离、文案本地化）表明前端体验问题在被持续收敛。

## 8. 待处理积压

建议维护者优先关注长期挂起、影响面大的条目（均无 fix PR）：

- **[#4072](https://github.com/HKUDS/nanobot/issues/4072)** — 创建于 2026-05-29，相对符号链接绕过工作区限制，已挂起约 5.5 个月。
- **[#4477](https://github.com/HKUDS/nanobot/pull/4477)** — 创建于 2026-06-23，记忆架构 PR 挂起近 5 个月，长期未决将影响记忆相关设计共识。
- **[#4790](https://github.com/HKUDS/nanobot/issues/4790) / [#4796](https://github.com/HKUDS/nanobot/issues/4796) / [#4797](https://github.com/HKUDS/nanobot/issues/4797) / [#4798](https://github.com/HKUDS/nanobot/issues/4798) / [#4780](https://github.com/HKUDS/nanobot/issues/4780)** — 均创建于 2026-07-06，挂起逾 4 个月后于今日被重新激活，构成一组系统性的执行层加固议题，建议合并为统一的安全加固追踪项。
- **[#4885](https://github.com/HKUDS/nanobot/issues/4885)** — 创建于 2026-07-11，CLI Apps 供应链签名缺失，挂起逾 4 个月。
- **[#6441](https://github.com/HKUDS/nanobot/pull/6441)** — 创建于 2026-10-24，会话级 reasoning effort 已等待约 3 周。
- **[#6680](https://github.com/HKUDS/nanobot/pull/6680)** — 标记 `[conflict]`，需尽快解决冲突以免与 #6686 的网关重构产生叠加冲突。

---

*说明：本日报所有结论均基于所提供数据中的标题、摘要、时间与计数，未引入外部信息；未提供评论正文，故第 7 部分仅依据摘要与互动计数推断。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-17

## 1. 今日速览

项目今日处于**高活跃状态**：过去 24 小时 Issues 更新 50 条（新开/活跃 47、关闭 3），PR 更新 50 条（待合并 41、已合并/关闭 9），并发布 2 个版本（稳定版 v0.23.2 与 canary v0.23.2+canary.20261117T064624Z）。v0.23.2 是补丁版，官方说明其汇总了自 v0.23.1 以来约 **1,989 个已合并 PR**，完整整理说明将随 v0.24 发布。今日最显著的架构性进展是会话存储重构（#149558）系列 PR 全部关闭，`SessionDB` 从 `main` 分支移除。同时，Windows 平台相关的性能与兼容问题（文件写入拒绝、网关文件系统元数据风暴等）在本日 Issue 更新中占比较高，值得关注。

---

## 2. 版本发布

### v0.23.2（稳定版，发布日 2026-11-16）
- **性质**：补丁发布。官方说明为“将自 v0.23.1 以来约 1,989 个已合并 PR 汇总进一个稳定版本”，覆盖 GitHub Release（CLI 与安装器）、Microsoft Store 应用、Docker 和 Hermes Cloud。
- **完整变更说明**：不在本版本中，官方明确“该窗口的完整精选说明随 v0.24 发布”。
- **破坏性变更 / 迁移注意事项**：本条发布说明中未提及。

### v0.23.2+canary.20261117T064624Z（Canary，发布日 2026-11-17）
- 每日构建通道版本，发布说明包含下载表格（如 macOS Apple Silicon 的 DMG 等）。素材中下载链接被截断，未提供完整地址，故不引用。

**判断**：今日的稳定版没有逐条变更明细，实质功能信息需等待 v0.24 的完整说明；读者不应据 v0.23.2 的“1,989 PR”数字推断单个功能，因为该数字是汇总口径。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在**会话存储架构重构**与**代码清理**两条线：

| PR | 状态 | 内容 |
|---|---|---|
| [#149565](https://github.com/NousResearch/hermes-agent/pull/149565) | 已关闭 | 存储接口第一步：为 state.db 定义存储接口，含内存参考后端与契约测试套件 |
| [#149566](https://github.com/NousResearch/hermes-agent/pull/149566) | 已关闭 | 第二步：为存储接口实现 SQLite 后端，沿用 `main` 的 schema 与语句、同一文件 |
| [#149567](https://github.com/NousResearch/hermes-agent/pull/149567) | 已关闭 | 第三步（2/3）：所有调用方改为持有 store，而非旧的存储类 |
| [#151855](https://github.com/NousResearch/hermes-agent/pull/151855) | 已关闭 | 第三步（3/3）：**移除 `SessionDB` 及 hermes_state 模块**，为外部插件提供替代层（标题含破坏性标记 `refactor(storage)!`） |
| [#149571](https://github.com/NousResearch/hermes-agent/pull/149571) | 已关闭 | 清理仅为迁移期服务的检查与句柄 |
| [#157075](https://github.com/NousResearch/hermes-agent/pull/157075) | 已关闭 | 机器人自动格式修复（`pnpm run fix`），CI 通过后自动合并，属常规维护 |

**推进幅度评估**：这组 PR 对应 Issue [#149558](https://github.com/NousResearch/hermes-agent/issues/149558) 的三步计划，今日全部关闭，意味着“会话存储收敛到单一接口、以 SQLite 为后端”的既定期目标已从设计落到代码。其中 #151855 带破坏性标记，对依赖 `SessionDB` 的外部插件有直接影响（发布说明中未给出迁移细节，需关注后续 v0.24 说明）。这是今日对项目长期健康度影响最大的进展。此外，通过移除 `SessionDB`，也为 [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) 提出的可插拔 SessionDB 提供方（PostgreSQL/MySQL）铺平了接口层面的道路，但该 RFC 本身仍为开放状态。

---

## 4. 社区热点

按评论数与反应数排序：

1. **[#23717](https://github.com/NousResearch/hermes-agent/issues/23717) RFC: Pluggable SessionDB Provider — PostgreSQL、MySQL 及更多**（25 评论，👍11，2026-05-11 创建，今日仍活跃）
   诉求：解决“热更新死循环”——在运行 Hermes 的同时执行 `git pull`/更新会导致问题；并希望会话存储可替换为外部数据库，支撑多实例/多用户场景。👍 数是今日最高，说明社区对“生产级会话存储”的需求强烈。与今日 #149558 系列合入方向一致。

2. **[#21574](https://github.com/NousResearch/hermes-agent/issues/21574) RFC: 按用户隔离 agent 与基于身份的权限系统**（12 评论，👍2）
   诉求：用户通过 Telegram 网关向他人展示 agent 时，遭遇了经典的 prompt injection，暴露出**多用户共享 agent 缺乏身份与权限边界**的问题。与 #23717 同属“从个人助手走向多用户/团队使用”的架构诉求。

3. **[#18990](https://github.com/NousResearch/hermes-agent/issues/18990) 恢复 Kimi Coding provider 的视觉能力**（11 评论，👍1）
   诉求：认为上游已支持视觉，但 Hermes 仍将 `kimi-coding` 列入 `_PROVIDERS_WITHOUT_VISION`，属 Provider 能力表落后于上游的同步问题。

4. **[#126622](https://github.com/NousResearch/hermes-agent/issues/126622) Windows 上 write_file 永久拒绝执行**（10 评论，P2，`os/windows`）
   诉求：`_file_version` 中 `stat()`/`fstat()` 的 `st_ctime_ns` 来源不一致，导致 Windows 上文件写入工具不可用，影响 C:/D:/E: 全部 NTFS 卷。

5. **[#146538](https://github.com/NousResearch/hermes-agent/issues/146538) 多 profile 下网关每秒 3.4 万–9.9 万次文件系统元数据操作**（9 评论，P2，`os/windows`）
   诉求：66 个 profile 的单网关进程空闲时也持续占用约一核 CPU，Windows 内核池增长，根因指向技能签名遍历、profile 重复枚举与未缓存的 realpath。

**整体分析**：热点集中在两类——(A) 多用户/生产化架构诉求（#23717、#21574），(B) Windows 平台可靠性与性能（#126622、#146538、#141599）。前者是路线图级议题，后者是即时的用户可用性问题。

---

## 5. Bug 与稳定性

按严重程度排列（P 级标签来自素材）：

**P1 / 安全（已有 fix PR）**
- **[#157073](https://github.com/NousResearch/hermes-agent/pull/157073) fix(approvals): 选择加入时要求独立的 Matrix 审批人**（`type/security`，P1）
  两个共享同一 Matrix 房间的网关可以互相批准危险命令提示，全程无人工参与：`MATRIX_APPROVAL_REQUIRE_SENDER` 比较的是反应账户与请求者，在机器人对机器人的房间内失效。**已有 fix PR（OPEN）。**

**P2（高影响，未见到 fix PR）**
- **[#126622](https://github.com/NousResearch/hermes-agent/issues/126622)** Windows 上 `write_file` 永久拒绝（`st_ctime_ns` 来源不一致），平台级复现。**未见 fix PR。**
- **[#146538](https://github.com/NousResearch/hermes-agent/issues/146538)** 网关高频率文件系统元数据操作，持续满载一核，Windows 内核池增长。**未见 fix PR。**
- **[#141223](https://github.com/NousResearch/hermes-agent/issues/141223)** 多路复用 profile 下，共享 MCP server 停驻后复活时只有归属 profile 拿回工具。**未见 fix PR。**
- **[#148601](https://github.com/NousResearch/hermes-agent/issues/148601)** **回归**：v0.22.x 中具名自定义 provider 上的确认模型锁导致每次会话聊天失败（#116070 的回归，#116752 曾修复）。**未见 fix PR。**
- **[#156709](https://github.com/NousResearch/hermes-agent/issues/156709)** `display.runtime_footer.enabled: true` 时，`FooteredReply` 导致 `gateway/session_events.py` 的 `copy.deepcopy` 抛 TypeError（缺 `footer`），发生于 2026-11-16。**未见 fix PR，为新报告。**
- **[#131433](https://github.com/NousResearch/hermes-agent/issues/131433)** 桌面 Cron 区：正常关闭的 cron 运行在首次回复后变为只读（与 #124945 的写限制相关）。**未见 fix PR。**
- **[#133577](https://github.com/NousResearch/hermes-agent/issues/133577)** `secure_parent_dir()` 忽略 `HERMES_HOME_MODE`，凭据写入会把 HERMES_HOME 重新锁为 0700（#6991 的回归）。**未见 fix PR。**
- **[#62169](https://github.com/NousResearch/hermes-agent/issues/62169)**（**已关闭**）终端沙箱：会话 CWD 被删除后所有后续命令以 exit 126 失败。今日关闭，说明该类稳定性问题有修复进展。

**P3**
- **[#141599](https://github.com/NousResearch/hermes-agent/issues/141599)** Windows 保留名条目（`nul` 等）导致共享网关的 TUI 补全崩溃；CLI 侧已修复，网关侧未修。
- **[#148414](https://github.com/NousResearch/hermes-agent/issues/148414)** Webapp UI 缩放（`<html>` CSS zoom）非 100% 时菜单溢出视口。

**稳定性小结**：今日没有出现 P0 级问题。值得警惕的是 **两条回归**（#148601、#133577）均属“修复后又复发”类，且都未看到对应 fix PR；Windows 平台聚集了 3 个 P2 问题，是该平台用户体验的主要摩擦点。已关闭的 #62169 是唯一明确的稳定性改善信号。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 信号判断 |
|---|---|---|
| 可插拔 SessionDB（PostgreSQL/MySQL） | [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | **最可能被纳入近期路线图**。今日 #149558 系列的存储接口 + SQLite 后端已合入，接口抽象到位，外部数据库后端是其自然延伸；但 RFC 仍标注 `needs-decision`。 |
| 会话存储单一接口 + SQLite 后端 | [#149558](https://github.com/NousResearch/hermes-agent/issues/149558) | **今日已被实现**（见项目进展），对应 PR 全部关闭。 |
| 按用户的 agent 隔离与身份权限系统 | [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) | 架构级需求，跨 agent/gateway/memory/telegram/auth 多组件，短期难落地；但 P3 且 `needs-decision`，与 #23717 形成同一主题的社区共识。 |
| OpenAI API 本地工具调用支持 | [#20950](https://github.com/NousResearch/hermes-agent/issues/20950) | 面向 API 客户端集成，规模可控，具备纳入后续版本的可能。 |
| 具名、分域的 API Key（scope、会话白名单、只读、过期） | [PR #157069](https://github.com/NousResearch/hermes-agent/pull/157069) | **已有实现 PR（OPEN，ci-reviewed）**，直指当前“单一 `API_SERVER_KEY` 全权共享”的痛点，若合入将成为下一个版本的可感知安全改进。 |
| ACP 模式变更后发布生效模式 | [#32419](https://github.com/NousResearch/hermes-agent/issues/32419) | 小范围协议完善，P3。 |
| 桌面双栏聊天气泡布局 | [#41302](https://github.com/NousResearch/hermes-agent/issues/41302) | UI 偏好类，👍4，社区有明确兴趣。 |
| 禁用 Ctrl+滚轮缩放 | [#71421](https://github.com/NousResearch/hermes-agent/issues/71421) | 低风险配置项，易实现。 |
| 子代理携带所需文件与上下文启动 | [PR #156936](https://github.com/NousResearch/hermes-agent/pull/156936) | **已有实现 PR（OPEN，今日提交）**，直接改善多代理协作效率。 |
| Kanban 零权限 worker 等大型追踪议题 | [#82591](https://github.com/NousResearch/hermes-agent/issues/82591) | 三部分实施计划，范围大，属长期路线图，不宜视为近期版本内容。 |

---

## 7. 用户反馈摘要

- **“个人助手 → 多人共享”的落差**：用户 #21574 描述了自己通过 Telegram 向女友展示 agent、却被一句经典 prompt injection 击穿的经历；另有 #23717 指出“边运行边 `git pull` 更新”会导致死循环。两者共同指向：当前架构围绕单人使用设计，一旦进入共享或持续运行场景，会话状态与权限边界就会成为痛点。
- **Windows 用户的可用性受损**：#126622 用户报告文件写入工具在 Windows 上“永久拒绝”执行，且换卷无效；#146538 用户报告 66 profile 部署下网关空闲时持续占用约一核、内核池增长。这类反馈语气偏事实陈述，但对日常可用性影响直接。
- **Provider 能力同步滞后**：#18990 用户认为 Kimi 上游已支持视觉，Hermes 的白名单未跟进——反映用户期待 provider 能力表能快速跟随上游。
- **桌面端交互细节被认真对待**：#41302（双栏气泡布局，👍4）、#71421（禁用缩滚缩放，提到资源受限设备上误触）、#148414（UI 缩放非 100% 时菜单溢出）表明桌面/Webapp 用户群在扩大，审美与可达性类反馈增多。
- **编排与存储的专业化诉求**：#149558、#131433、#136535（精简压缩丢失用户原话）、#82591 的讨论者以较深的工程语言描述问题，说明存在一批将 Hermes 用于长期/生产场景的重度用户。
- **满意度信号**：Canary 与稳定版持续并行发布、格式化机器人自动合入等常规流程运转顺畅；#62169（终端沙箱 CWD 被删导致后续命令全废）今日关闭，是该类稳定性反馈得到回应的正面例子。

*说明：素材仅提供 Issue 摘要而非完整评论，以上痛点提炼自摘要描述，未引用未给出的评论内容。*

---

## 8. 待处理积压

以下为**创建早、今日仍在更新但长期未闭环**的重要条目，建议维护者优先分配决策：

| 条目 | 创建日 | 年龄（至今日） | 状态 | 关注理由 |
|---|---|---|---|---|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) 可插拔 SessionDB | 2026-05-11 | 约 6 个月 | OPEN，`needs-decision`，25 评论、👍11 | 今日评论与点赞最高的议题，且底层接口已在今日合入，只差方向决策 |
| [#21574](https://github.com/NousResearch/hermes-agent/issues/21574) 用户隔离与身份权限 | 2026-05-08 | 约 6 个月 | OPEN，`needs-decision` | 安全相关，与 #23717 同主题，需一并决策 |
| [#18990](https://github.com/NousResearch/hermes-agent/issues/18990) Kimi 视觉白名单 | 2026-05-02 | 约 6.5 个月 | OPEN，`sweeper:risk-compatibility` | 明确的一行代码级修正，长期挂起 |
| [#20950](https://github.com/NousResearch/hermes-agent/issues/20950) OpenAI API 本地工具 | 2026-05-07 | 约 6 个月 | OPEN | 集成方向明确，无明显争议 |
| [#32419](https://github.com/NousResearch/hermes-agent/issues/32419) ACP 生效模式发布 | 2026-05-26 | 约 6 个月 | OPEN | 协议完整性小修，拖延成本低 |
| [#62169](https://github.com/NousResearch/hermes-agent/issues/62169) 终端沙箱 CWD 被删 | 2026-07-10 | 约 4 个月 | **今日已关闭** | 可视为积压清理的正面进展，建议在下次说明中体现 |
| [#148601](https://github.com/NousResearch/hermes-agent/issues/148601) 自定义 provider 模型锁回归 | 2026-11-03 | 约 2 周 | OPEN，P2 | 回归问题已挂两周且未见 fix PR，建议优先修复 |

**健康度总评**：今日合并/关闭 9 个 PR，其中 6 个直接服务于会话存储重构，方向集中、收尾干净，说明核心架构治理在稳步推进；但 Issues 侧“新开/活跃 47 : 关闭 3”的比例明显偏开发侧，且两条回归（#148601、#133577）与多个 Windows P2 问题尚无 fix PR，是当前项目健康度的主要风险点。

---

*本报告所引信息均来自给定 GitHub 数据；未提供的指标（如具体合并时间、测试覆盖率、修复版本号）不予推断。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-17）

## 1. 今日速览

过去 24 小时项目活跃度偏低：无 Issues 更新，无新版本发布，PR 侧仅有 3 条动态（1 条待合并、2 条关闭）。三条 PR 均带 `stale` 标记或长期挂起特征，说明今日的 PR 流转主要是历史积压的清理而非新功能推进。整体看，社区讨论进入平静期，维护重心偏向存量整理。项目健康度需关注：唯一仍开放的 PR 自 11-10 创建后仅因更新而重新出现，缺乏维护者互动信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 2 条 PR，但均非新功能落地：

- **#1546 [CLOSED]** `fix: merge PR #1480 #1479 #1478 #1473 #1467`（作者 xuwei-xy，创建 2026-03-14，更新 2026-11-17）
  链接：sipeed/picoclaw PR #1546
  摘要显示该 PR 旨在合并 5 个开放 PR 的修复内容。该 PR 自 3 月挂起至 11 月才更新，今日关闭降低了积压数量，但数据未披露这 5 个修复是否已通过其他途径落地，需维护者确认 #1480、#1479、#1478、#1473、#1467 的实际状态，避免修复丢失。

- **#3455 [CLOSED]** `Fix/nvidia model id termux shell`（作者 theophillus-imtl，创建 2026-11-01，更新 2026-11-17）
  链接：sipeed/picoclaw PR #3455
  标题指向 NVIDIA 模型 ID 与 Termux 环境的修复，摘要正文为空（仅保留模板占位），无法判断修复内容与关闭原因（是否被采纳或放弃）。

**推进评估：** 今日进展以"清账"为主，未观察到新的能力合并，项目功能面基本无净增量。

## 4. 社区热点

数据中三 条 PR 的评论数均缺失（`undefined`），点赞均为 0，无 Issues 讨论。因此今日无实质社区热点。唯一值得关注的是仍在开放的：

- **#3467 [OPEN] [stale]** `feat(web): add French UI locale`（作者 slashr512）
  链接：sipeed/picoclaw PR #3467
  从描述看属于较完整的本地化贡献：新增 `web/frontend/src/i18n/locales/fr.json` 全量翻译、注册到 i18next 资源、处理 dayjs 本地化、并在界面加入 **Français** 入口。

背后诉求：Web 启动器（launcher）用户对多语言界面的需求真实存在，法语社区贡献者愿意主动提交完整实现，属于低成本高接受度的社区向功能。但其被标 `stale` 且无评论，说明维护响应不足，存在贡献者流失风险。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归 Issue。被关闭的 **#3455** 涉及 NVIDIA 模型 ID 与 Termux shell 场景，可能对应环境适配类问题，但摘要为空，无法核实严重程度与是否已有 fix 落地。建议维护者补充关闭原因说明，以保证可追溯性。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。结合存量 PR，可能的下一版本信号：

- **多语言 UI 本地化**：#3467 提供了法语完整实现，且描述完整，机制上已具备合并条件。若维护者认可 i18n 扩展方向，可将其作为模板，为后续语言贡献建立规范。建议优先处理，因其是今日唯一具备落地潜力的功能型 PR。
- **平台/环境适配**（NVIDIA 模型 ID、Termux shell）：#3455 提示移动端与特定硬件环境的使用需求，但信息不足，暂无法判断是否纳入路线图。

## 7. 用户反馈摘要

今日无 Issues 评论数据可供提炼。从 PR 层面可观察到两点间接信号：

- 使用场景覆盖 Web launcher（前端界面）与 Termux 等轻量终端环境，符合项目面向低资源设备的定位。
- 社区贡献者（法语本地化、NVIDIA/Termux 修复）来自多样化使用环境，但均未获得评论互动或点赞，维护者反馈缺位是当前主要痛点。

## 8. 待处理积压

- **#3467 [OPEN] [stale]** 法语 UI 本地化，创建于 2026-11-10，已标 stale、零互动。
  链接：sipeed/picoclaw PR #3467
  建议：本周内给出 review 结论（合入或明确修改要求），并考虑取消 stale 标记。

- **#1546 所引用的 5 个上游 PR（#1480 #1479 #1478 #1473 #1467）**：汇总 PR 已关闭，但这些原始 PR 的最终状态未见披露，需维护者核对，防止有效修复随汇总关闭而失效。

- **#3455**：关闭但无摘要说明，建议补充关闭原因（已修复/重复/不采纳），以降低后续重复提交。

**维护者提醒：** 当前积压以 `stale` 状态堆积为主，缺乏 review 吞吐。建议建立固定节奏（如每周一次）集中处理 stale PR，并统一要求 PR 摘要必填，以提升可评估性与项目健康度。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-11-17

## 1. 今日速览

NanoClaw 今日进入 2026.11.0 发布窗口的收尾阶段：首个 release candidate `v2026.11.0-rc.1` 已发布，同时 `v2026.11.0-beta.4` 也在同日发布，说明测试周期在快速推进。过去 24 小时 PR 流量极高（43 条更新，27 条已合并/关闭），核心团队主导了多项加固与修复工作。Issues 侧以回归问题为主：5 条更新中有 3 条来自同一用户对安装/更新路径的连续报障，其中 2 条已关闭、2 条仍开放。整体活跃度高、维护响应及时，但发布前 rc 阶段的核心更新链（容器镜像重建、门户连接）暴露出若干稳定性瑕疵。

## 2. 版本发布

### v2026.11.0-rc.1
- **性质**：2026.11.0 的首个 release candidate，即除非测试发现问题否则将作为稳定版发布的构建；不再有 beta。由 PR #4444 从 `main` @ `32b60435a` 切出，自 `v2026.11.0-beta.*` 以来 `main` 上共 15 个 PR。
- **版本线说明**：11 月版本取代从未成为稳定版的 2026.10.1，后者的两个 rc 保持已发布状态，其内容均已并入本版本。
- 链接：https://github.com/nanocoai/nanoclaw/pull/4444

### v2026.11.0-beta.4
- **性质**：2026.11.0 的第四个 beta，早期测试构建，说明"仍有粗糙边缘"。同样纳入 2026.10.1 rc 的全部内容。
- 链接：版本说明见 Release 页

> **迁移注意**：官方说明中未列出破坏性变更；但 rc 阶段存在已知安装/更新路径回归（详见第 5 节），升级前建议关注相关 Issue 修复状态。

## 3. 项目进展

今日合并/关闭的 PR 主要集中在**安全加固**与**发布准备**两条主线：

| PR | 内容 | 状态 |
|---|---|---|
| #4431 | 修复容器镜像重建：使用 `install_packages` 的分组在更新后会切换到新 agent 镜像，而非继续运行旧镜像直到手动 `--rebuild`（对应 Issue #4076） | 已合并 |
| #4440 | 宿主以 `O_NONBLOCK` 打开容器可写目录中的两个文件，命名管道（FIFO）无法再阻塞打开操作，并在日志中标注被拒文件 | 已合并 |
| #4439 | Setup 为 OneCLI 本地数据库生成独立随机密码，替代 compose 文件中的固定回退值 | 已合并 |
| #4433 | 门户被拒拨号立即在日志中记为 `dial_failed`，而非 10 秒后误报 `handshake_timeout`（Node 22 上 `error` 触发但无 `close`） | 已合并 |
| #4422 | 实验性功能（opt-in）：被 @ 提及的 agent 可读取该线程中此前未见过的消息，由 `NANOCLAW_PLATFORM_HISTORY` 指定渠道 | 已合并 |
| #4391 | 文档：`CLAUDE.md` 的 `cli_scope` 表补全所有例外项 | 已合并 |

**推进幅度评估**：合并项覆盖了更新链、容器安全边界与凭据管理三个核心面，为 rc 提供了实质性的质量支撑；但 #4433 修复的 `handshake_timeout` 误报与 #4076 的镜像重建问题均属"更新后/安装后首次可用性"路径，说明 rc 阶段的验证重点应放在端到端安装流程上。

## 4. 社区热点

- **#4426 / #4427 / #4428 / #4429**（均来自 glifocat，2026-11-17 同日提交）：单日 4 条 Bug 报告且全部围绕同一版本 `8e52b12` 的安装与更新体验，是本日讨论最集中的议题。四者共同指向"setup 流程反馈不可靠"——重跑 setup 会跳过加固镜像提问、门户链接不建立、无 polkit 主机报错、更新校验不说明哪个 skill 失败。背后诉求明确：**安装/更新的可诊断性**。
  - https://github.com/nanocoai/nanoclaw/issues/4426
  - https://github.com/nanocoai/nanoclaw/issues/4427
  - https://github.com/nanocoai/nanoclaw/issues/4428
  - https://github.com/nanocoai/nanoclaw/issues/4429
- **PR #4300**（echarrod，2026-11-08 创建，持续更新至今日）：防止分组 `settings.json` 处的 FIFO/符号链接/目录导致容器启动卡死。与 #4440 同属"容器可写路径不可信"主题，已挂起 9 天，值得关注。
  - https://github.com/nanocoai/nanoclaw/pull/4300
- **PR #4445**（nanoclaw-image-refresh[bot]）：agent 镜像自动刷新，`v2026.10.0` 指向新 digest，属常规流水线动作。
  - https://github.com/nanocoai/nanoclaw/pull/4445

## 5. Bug 与稳定性

按严重程度排列（严重 = 影响安装/更新可用性）：

| 严重度 | Issue | 问题 | Fix PR |
|---|---|---|---|
| 高 | #4076 [已关闭] | `/update-nanoclaw` 重建 agent 镜像后，安装了包的分组仍持旧镜像 | ✅ 已由 #4431 修复并合并 |
| 高 | #4427 [开放] | 启用加固镜像并成功登录后，宿主从未链接门户；被拒的 WebSocket 升级被记为 `handshake_timeout` | ✅ #4433 已合并（修日志语义），门户链接行为待确认 |
| 中 | #4426 [已关闭] | 全新安装时同意启用加固 agent 镜像后流程异常；"重跑 setup 获取新 code"无效，重跑跳过加固镜像提问 | 未见关联 PR |
| 中 | #4428 [开放] | 无 polkit 主机上 setup 打印 `Failed to execute /usr/bin/pkttyagent`，插入进度行中间 | 未见关联 PR |
| 中 | #4429 [已关闭] | `update-nanoclaw.ts validate` 仅输出 schema 行，不说明哪个已安装 skill 刷新失败及原因 | 未见关联 PR |
| 低（健壮性） | PR #4300 | `settings.json` 处 FIFO/符号链接可挂起容器启动 | 待合并 |
| 低 | PR #4303 | checkout 路径含空格或经符号链接时，10 个 CLI 脚本无法运行 | 待合并 |
| 低 | PR #2896 | WhatsApp 审批应答路径上媒体失败备注应用顺序的回归 | 待合并（自 2026-06-30 起） |

**回归信号**：#4427 与 #4426 均发生在 `8e52b12`，且 #4427 被 #4433 覆盖，提示 `8e52b12` 这一基线存在门户拨号与 setup 交互两类缺陷，rc 验证应聚焦于此。

## 6. 功能请求与路线图信号

- **线程历史回读（#4422，已合并）**：agent 被 @ 时读取未见消息，opt-in 设计并限定于 `NANOCLAW_PLATFORM_HISTORY` 列出的渠道，属谨慎落地的能力扩展，大概率进入 2026.11.0 稳定版。
- **新 Provider：`/add-antigravity`（#4442，开放）**：以独立 skill 方式支持在 Google Antigravity CLI（`agy`）与 Gemini 模型上运行 agent 分组，可通过 `ncl groups config update --provider antigravity` 按分组切换。以 skill 交付而非核心改动，符合项目现有扩展路径，但仍在待合并队列，是否赶上本版 rc 需看今日之后进展。
- **渠道长消息渲染（#4443，开放）**：长回复在代码块中间被切分时补全/重开围栏，属体验修补而非新功能。
  - https://github.com/nanocoai/nanoclaw/pull/4442

## 7. 用户反馈摘要

- **对"一键可用"的期待落空**（glifocat，多 Issue）：用户完整走完安装与登录，却停在"门户从未链接"和"setup 报错插进进度行"这类不可解释的失败上，且日志给出误导性结论（`handshake_timeout` 而非连接被拒）。核心不满是**失败不可解释**，而非功能缺失。
- **恢复路径失效**（#4426）：用户按提示"重跑 setup 获取新 code"，却被悄然跳过加固镜像提问——即官方建议的补救步骤本身不可靠，这会显著削弱信任。
- **可诊断性不足**（#4429）：更新校验失败只吐一行 JSON schema，用户无法定位是哪个 skill、为什么失败。
- **使用场景**：Linux 主机上运行自建 agent 分组；使用 `install_packages` 定制分组的用户（#4076 报告者 billyshipp）依赖更新后自动迁移到新镜像。

## 8. 待处理积压

以下项已开放较长时间且仍有活动，建议维护者优先分诊：

- **PR #2896**（创建于 **2026-06-30**，约 4.5 个月）：WhatsApp 审批应答路径回归，今日仍有更新。长期挂起的正确性修复，建议明确取舍。
  - https://github.com/nanocoai/nanoclaw/pull/2896
- **PR #4300**（创建于 2026-11-08，9 天）：agent-runner 容器启动阻塞风险加固，未合并。
  - https://github.com/nanocoai/nanoclaw/pull/4300
- **PR #4303**（创建于 2026-11-08，9 天）：路径含空格/符号链接时 CLI 入口不可用，涉及 10 个脚本，对非常规环境用户影响明确。
  - https://github.com/nanocoai/nanoclaw/pull/4303
- **PR #4371**（创建于 2026-11-14）：修复 Arch 镜像上 `pacman -S jq` 失败（jq 提示误称 5 个 skill，实际 13 个依赖 jq），属 setup 正确性问题，仍在待合并。
  - https://github.com/nanocoai/nanoclaw/pull/4371
- **PR #4441**（开放）：#4418 评审的三个非阻塞跟进点（如损坏 Node 被重复检查），正常路径无影响，可随 rc 后续小版本处理。

---

**健康度小结**：PR 吞吐与响应速度良好（单日 27 条合并/关闭），核心团队对加固类问题处理果断；风险集中在 rc 的安装/更新端到端体验——4 条同日 Bug 与 2 条未关联修复 PR 的开放项，建议在稳定版发布前补齐。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-11-17

## 1. 今日速览

今日 IronClaw 没有版本发布，也没有 Issues 更新；PR 侧共有 10 条记录，全部为 `OPEN` 状态，没有合并或关闭的条目。这 10 条 PR 均由 `dependabot[bot]` 提交，类别分别为依赖与 CI，内容为依赖升级，不涉及代码改动。今日没有出现功能推进、Bug 修复或设计讨论，活跃度处于**低水平**；统计口径内看不到人工作者的直接参与。这批 PR 的创建时间为 2026-10-22 至 2026-11-03，今日只是集中发生更新，说明维护者尚未处理这些自动化升级请求。

## 2. 版本发布

今日无新版本发布（Releases 为空），省略本节。

## 3. 项目进展

今日**没有合并或关闭的 PR**，项目在功能与修复层面没有向前推进。以下 10 条 PR 全部仍待合并，均为自动化依赖升级：

| PR | 依赖 | 变更 | 范围 |
|---|---|---|---|
| [#8167](https://github.com/nearai/ironclaw/pull/8167) | zod → 4.6.7；@remotion/cli、@remotion/tailwind-v4 一并升级 | 升级连带依赖 | /docs/internal/architecture-video |
| [#8166](https://github.com/nearai/ironclaw/pull/8166) | rustls 0.23.43 → 0.23.46 | Rust | /harness/latency/runner |
| [#8165](https://github.com/nearai/ironclaw/pull/8165) | rustls 0.23.43 → 0.23.46 | Rust | （摘要未标明路径） |
| [#8162](https://github.com/nearai/ironclaw/pull/8162) | wasmtime 47.0.3 → 48.0.7 | Rust | /harness/latency/runner |
| [#8159](https://github.com/nearai/ironclaw/pull/8159) | actions 组，共 11 项更新（含 anthropics/claude-code-action 1.0.183 → 1.0.259、actions/setup-python 等） | GitHub Actions | / |
| [#8158](https://github.com/nearai/ironclaw/pull/8158) | storybook 10.5.7 → 10.6.2 | JS（dev） | crates/product/ironclaw_webui/frontend |
| [#8156](https://github.com/nearai/ironclaw/pull/8156) | @storybook/addon-vitest 10.5.7 → 10.6.2 | JS（dev） | crates/product/ironclaw_webui/frontend |
| [#8155](https://github.com/nearai/ironclaw/pull/8155) | dompurify 3.4.12 → 3.4.17 | JS | crates/product/ironclaw_webui/frontend |
| [#8157](https://github.com/nearai/ironclaw/pull/8157) | certifi 2026.7.22 → 2026.10.19 | Python（uv） | /tests/e2e |
| [#8154](https://github.com/nearai/ironclaw/pull/8154) | vite 8.1.3 → 8.1.6 | JS（dev） | crates/product/ironclaw_webui/frontend |

## 4. 社区热点

今日没有评论数或点赞数特别突出的条目，也没有 Issues 讨论。所有 PR 的 👍 均为 0。

从内容上看，以下两条 PR 的变更范围值得优先审查：

- [#8162 wasmtime 47.0.3 → 48.0.7](https://github.com/nearai/ironclaw/pull/8162)：这是跨主版本跨度较大的运行时升级，涉及 /harness/latency/runner，可能影响执行语义与性能表现。
- [#8159 actions 组 11 项更新](https://github.com/nearai/ironclaw/pull/8159)：批量更新 CI 工作流，其中 anthropics/claude-code-action 从 1.0.183 升级到 1.0.259，跨度很大，会影响自动化流程的行为。

数据未提供评论内容，因此不推断社区诉求。

## 5. Bug 与稳定性

今日无新增 Issues，数据中未出现 Bug、崩溃或回归报告。依赖升级 PR 中，dompurify（[#8155](https://github.com/nearai/ironclaw/pull/8155)）的升级范围为 3.4.12 → 3.4.17，涉及前端 HTML 清洗库；rustls（[#8165](https://github.com/nearai/ironclaw/pull/8165)、[#8166](https://github.com/nearai/ironclaw/pull/8166)）则涉及 TLS 栈。这两类升级通常与安全修复相关，但仅凭所给摘要无法确认具体修复内容，建议维护者在合并前查阅上游 release notes。

## 6. 功能请求与路线图信号

今日没有用户功能请求。据现有 PR 判断，短期内唯一可见的待纳入项是工具链与依赖维护，包括 Rust、JS、Python 与 GitHub Actions 的例行升级；这些维护项是否进入下一版本需由维护者决定，数据中无版本计划信息。

## 7. 用户反馈摘要

今日无 Issues 更新、无评论数据，无法提炼用户痛点、使用场景或满意度信息。

## 8. 待处理积压

全部 10 条 PR 均处于 OPEN 状态，且创建于 7 至 26 天前（2026-10-22 至 2026-11-03）。按等待时长排序，建议优先处理以下条目：

- [#8154 vite 8.1.3 → 8.1.6](https://github.com/nearai/ironclaw/pull/8154) — 创建于 2026-10-22，等待约 26 天
- [#8158 storybook 10.5.7 → 10.6.2](https://github.com/nearai/ironclaw/pull/8158) — 创建于 2026-10-23
- [#8156 @storybook/addon-vitest 10.5.7 → 10.6.2](https://github.com/nearai/ironclaw/pull/8156) — 创建于 2026-10-23
- [#8155 dompurify 3.4.12 → 3.4.17](https://github.com/nearai/ironclaw/pull/8155) — 创建于 2026-10-23
- [#8157 certifi 2026.7.22 → 2026.10.19](https://github.com/nearai/ironclaw/pull/8157) — 创建于 2026-10-23
- [#8159 actions 组 11 项更新](https://github.com/nearai/ironclaw/pull/8159) — 创建于 2026-10-25
- [#8162 wasmtime 47.0.3 → 48.0.7](https://github.com/nearai/ironclaw/pull/8162) — 创建于 2026-10-29
- [#8165](https://github.com/nearai/ironclaw/pull/8165)、[#8166](https://github.com/nearai/ironclaw/pull/8166) rustls 0.23.43 → 0.23.46 — 创建于 2026-11-02
- [#8167 zod 及 Remotion 系列](https://github.com/nearai/ironclaw/pull/8167) — 创建于 2026-11-03

**项目健康度提示**：积压主要来自自动化依赖升级，其中出现跨主版本升级（wasmtime）与大跨度批量更新（actions 组）。长期积压会持续累积安全补丁缺口，也会增加后续集中合并的冲突成本；建议维护者分批审查并合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-11-17

> 数据来源：netease-youdao/LobsterAI GitHub 活动（Issues / PRs / Releases）。以下链接均为对应 GitHub 条目。

---

## 1. 今日速览

今日项目呈现“高合并、零社区讨论”的典型维护日状态：过去 24 小时无新 Issue、无新 Release，但 PR 侧高度活跃，15 条 PR 中有 13 条被合并/关闭、仅 2 条处于待合并。工作重心集中在 Cowork、OpenClaw 集成、Artifacts 预览与主窗口交互等稳定性与体验修复上。并有一条 `release/2026.11.17` 分支的同步合并，说明正处在发布收尾阶段但尚未打 Tag。整体活跃度评估：**维护与打磨阶段，活跃度高、社区互动为零**。

---

## 2. 版本发布

无新版本发布。仅有发布分支同步 PR（#3099，已将 main 修复并入 `release/2026.11.17`），但数据中未出现对应 Release，故不做版本内容推断。

---

## 3. 项目进展

今日合并/关闭的重要 PR，按方向归类：

**安全性**
- [#3103](https://github.com/netease-youdao/LobsterAI/pull/3103)（CLOSED）`fix(artifact)`：将 `localfile://` 协议限制为沙箱内本地媒体，修复 #3096 —— 此前该 handler 可服务任意绝对路径的任意类型文件。属于安全加固，优先级高。

**OpenClaw 集成稳定性**
- [#3101](https://github.com/netease-youdao/LobsterAI/pull/3101)：索引 max tokens 时跳过异步 provider catalog builder（`buildHuggingfaceProvider` 为 async 引发问题）。
- [#3102](https://github.com/netease-youdao/LobsterAI/pull/3102)：全平台延长插件压缩包解压超时（macOS 安装 `@openclaw/discord@2026.8.1` 时 `extract tar timed out after 120000ms`，导致后续 wecom/weixin/popo/nim/bee/email 插件全部缺失）。
- [#3104](https://github.com/netease-youdao/LobsterAI/pull/3104)：忽略 OpenClaw 系统代理会话（`openclaw`、`crestodian`），避免残留本地会话。
- [#3100](https://github.com/netease-youdao/LobsterAI/pull/3100)：保留应用内浏览器标签页，回收空闲后台页（关闭了会误杀用户已登录标签页的清理逻辑）。

**Cowork 体验**
- [#3105](https://github.com/netease-youdao/LobsterAI/pull/3105)：将 dreaming 状态/日记按 agent 隔离并暴露日记加载错误。
- [#3107](https://github.com/netease-youdao/LobsterAI/pull/3107)：新增会话前进/后退导航（触控板横向滑动、鼠标侧键）与提示历史召回。
- [#3093](https://github.com/netease-youdao/LobsterAI/pull/3093)：澄清文件编辑进度，避免无单位的 `+N/-N` 计数被误认为额度扣费。

**渲染层/功能**
- [#3106](https://github.com/netease-youdao/LobsterAI/pull/3106)：主窗口缩放（快捷键、Ctrl/Cmd+滚轮）并新增缩放指示器与 `window:zoomChanged` IPC。
- [#3110](https://github.com/netease-youdao/LobsterAI/pull/3110)：模型选择器展示服务端配置的自定义标签（可选图标与颜色）。
- [#3111](https://github.com/netease-youdao/LobsterAI/pull/3111)：账户菜单新增服务端配置的 More 入口与一级分组子菜单，含预取缓存与本地化。
- [#3108](https://github.com/netease-youdao/LobsterAI/pull/3108)：文档重构，`AGENTS.md` 由 542 行精简至 199 行，按目录拆分 agent 指南。
- [#3099](https://github.com/netease-youdao/LobsterAI/pull/3099)：main 同步至 `release/2026.11.17`（4 个提交、13 个文件变更，已在独立 worktree 试合并无冲突）。

**整体估算**：13 条合并/关闭中约 6 条为稳定性/安全类修复，4 条为功能增强，2 条为文档/发布支持。项目健康度信号良好——修复密度高、安全类问题当日闭环；但功能增量多为打磨型，无重大新能力落地。

---

## 4. 社区热点

今日**无任何 Issue 更新**，且数据中所有 PR 的评论数与点赞数均为 `undefined` / 0，不存在可量化的讨论热度排行。唯一可提及的是创建时间较早、仍在待处理的 PR（见第 8 节）。结论：今日社区互动处于静默状态，暂无热点可分析。

---

## 5. Bug 与稳定性

按严重程度排列（均已有 fix PR）：

| 严重度 | 问题 | 状态 | PR |
|---|---|---|---|
| 高（安全） | `localfile://` 协议可服务任意绝对路径任意类型文件（#3096） | 已修复并关闭 | [#3103](https://github.com/netease-youdao/LobsterAI/pull/3103) |
| 高（可用性） | macOS 插件解压超时，导致多个插件连锁缺失 | 已修复并关闭 | [#3102](https://github.com/netease-youdao/LobsterAI/pull/3102) |
| 中 | 应用内浏览器空闲清理误关用户已登录标签页 | 已修复并关闭 | [#3100](https://github.com/netease-youdao/LobsterAI/pull/3100) |
| 中 | OpenClaw 模型目录索引调用 async builder 出错 | 已修复并关闭 | [#3101](https://github.com/netease-youdao/LobsterAI/pull/3101) |
| 中 | OpenClaw 系统代理残留本地会话 | 已修复并关闭 | [#3104](https://github.com/netease-youdao/LobsterAI/pull/3104) |
| 中 | OpenClaw 主代理会话出现在 Cowork 列表造成困惑 | **待合并** | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) |
| 低（UI 误解） | 文件编辑 `+N/-N` 无单位，被误读为扣费 | 已修复并关闭 | [#3093](https://github.com/netease-youdao/LobsterAI/pull/3093) |

另有两条**未闭环**的用户反馈（来自待合并 PR 描述）：
- [#3109](https://github.com/netease-youdao/LobsterAI/pull/3109)（OPEN）：Windows 下 GBK 编码 CSV 中文预览乱码；正文 `C:/.../products.csv` 链接误调用系统程序。暂无 fix PR 合并。
- [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181)（OPEN）：`[OpenClaw]` 主代理会话混入 Cowork 列表。

---

## 6. 功能请求与路线图信号

结合已合并/待合并 PR，以下方向具备进入下一版本的明确信号：

- **Cowork 会话导航能力**（[#3107](https://github.com/netease-youdao/LobsterAI/pull/3107) 已关闭）：前进/后退与提示历史召回，指向“多会话工作流”体验升级。
- **服务端可配置的 UI**（[#3110](https://github.com/netease-youdao/LobsterAI/pull/3110)、[#3111](https://github.com/netease-youdao/LobsterAI/pull/3111) 已关闭）：模型自定义标签、账户菜单动态 More 链接，表明路线图正在强化服务端下发的可运营能力。
- **Artifacts 跨平台预览体验**（[#3109](https://github.com/netease-youdao/LobsterAI/pull/3109) 待合并）：CSV/TSV 编码自动识别与手动切换、应用内打开 Windows 链接，属于明确的用户诉求修复。
- **窗口缩放与无障碍可读性**（[#3106](https://github.com/netease-youdao/LobsterAI/pull/3106) 已关闭）。

上述除 #3109 外均已合并，若随 `release/2026.11.17` 发布，则下一版本将主要体现为“交互打磨 + 服务端可配置”而非新架构能力。

---

## 7. 用户反馈摘要

今日数据未提供的用户反馈，但从 PR 描述中可提炼的真实痛点如下（均来自 PR 正文，非推断）：

- **误读成本**：文件编辑的绿色/红色 `+N/-N` 计数无单位，用户可能误以为在扣额度（#3093）。
- **编码兼容痛点**：Windows 11 下 GBK CSV 乱码，而 UTF-8 正常；应用内链接错误调用系统打开方式（#3109）。
- **会话列表噪音**：内部 `[OpenClaw]` 会话暴露给用户，造成困惑（#1181）。
- **浏览器标签页丢失**：agent 打开的标签页在空闲清理中被关闭，影响已登录状态（#3100）。

满意/不满意方向的量化数据缺失（无评论、无反应数），不做外推。

---

## 8. 待处理积压

- **长期待合并**：[#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) — 创建于 **2026-04-01**，更新于 2026-11-17，已挂起约 7 个多月，修复的是用户可见的会话列表混淆问题。建议维护者优先合入或明确关闭理由。
- **待合并新 PR**：[#3109](https://github.com/netease-youdao/LobsterAI/pull/3109) — 创建当日（2026-11-17），属 Windows 编码预览修复，建议在 `release/2026.11.17` 冻结前完成评审。
- **Issue 侧**：过去 24 小时无更新，数据中无可追踪的长期未响应 Issue；如需评估积压健康度，建议补充全量 Issue 列表。

---

*说明：本报告仅基于所提供数据生成。Issues 评论、点赞等互动指标在原始数据中缺失（显示为 0 或 undefined），因此第 4、7 节无法提供社区热度与满意度量化分析，相关结论均标注为数据不足。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报 — 2026-11-17

## 1. 今日速览

过去 24 小时内 TinyClaw 项目整体活跃度偏低：无新版本发布，无 Issues 新开或更新，仅 PR 出现 1 条待合并更新。项目今日无实质性推进（0 个 PR 合并/关闭），主要动态集中在团队协作相关的文档补充。整体健康度平稳，无明显风险信号，但也缺乏开发进展。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无已合并或关闭的 PR，项目代码库未发生合并层面的推进。

唯一动态为待合并的文档类 PR（详见下文社区热点），尚未合入，对功能无直接影响。

## 4. 社区热点

今日唯一活跃项：

- **#297 [OPEN] docs(teams): add optional public evidence handoff guide** — 作者 georgeatparallel｜创建/更新 2026-11-17｜👍 0
  链接: TinyAGI/tinyagi PR #297
  摘要显示该 PR 旨在记录"研究者如何查阅公开 Python 文档，并通过 TinyAGI 现有 team 机制将原始 URL 与简短摘录转交给 writer"。

**分析**：评论数为 undefined、点赞为 0，说明今日无实质讨论互动。该 PR 属于团队协作场景的文档补充，反映作者关注"研究—写作"多智能体协作中证据溯源（evidence handoff）的可追溯性诉求，属于使用体验完善类贡献，非核心功能变更。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告。**稳定性方面无已知风险信号。**

## 6. 功能请求与路线图信号

今日无新的功能请求类 Issue。

唯一相关信号来自 PR #297，其文档所描述的"可选公开证据转交指南"可能间接暗示用户对多智能体团队协作中证据链/引用来溯的需求。但该 PR 为文档性质，且作者在标题中标注为 optional，是否纳入下一版本尚无数据支撑，暂不宜作为路线图判断依据。

## 7. 用户反馈摘要

今日无 Issues 评论数据，无法从用户讨论中提炼痛点或使用场景。

可参考的唯一行为信号来自 PR #297 的描述：贡献者关注 researcher 查证公开文档并向 writer 传递原始链接与摘录的协作流程，可能对应"多智能体内容生产中证据可追溯"的实际使用场景，但仅为单一贡献者视角，样本不足。

## 8. 待处理积压

今日数据仅包含 1 条 PR，且为 2026-11-17 当日新建，#297 尚不构成长期积压。

**提醒**：本次数据快照未提供任何长期未响应的 Issue/PR 信息，无法评估积压情况。建议维护者关注 #297 的评审进度，若后续多日无评论互动，可主动推动 review。

---

**数据说明**：以上内容严格基于所提供的 2026-11-17 单日快照。Issues 为 0 条、Releases 为 0 个、PR 评论数缺失（undefined），故多项分析受限于数据样本极小，相关推断已作保守标注。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-11-17）

## 1. 今日速览

过去 24 小时 CoPaw 仓库保持高活跃度：Issues 更新 23 条（新开/活跃 12，关闭 11），PR 更新 50 条（待合并 34，合并/关闭 16），合并/关闭比例约 32%。议题集中在**插件化架构**（主题扩展点、CLI 扩展点、MCP/本地模型插件抽取）与**渠道/会话稳定性**（会话丢失、微信 ACCOUNT_IN_USE、钉钉 session_id 冲突）。亦有用户报告 2.3.0 新版本下移动端安全区渲染、模型 fallback 误判等新问题。整体判断：迭代节奏快、关闭率尚可，但长期挂起的 XL 级重构 PR 与多次复现的会话丢失类 Bug 构成主要健康度风险。今日无新版本发布。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 以版本管理与小修复为主，未见大型功能落地：

- **#8794**（CLOSED，size/XS）版本号升至 2.3.0.post1 — https://github.com/agentscope-ai/QwenPaw/pull/8794
- **#8795**（CLOSED，size/XS）将渠道最低 QwenPaw 版本要求下调至 2.3.0.post1 — https://github.com/agentscope-ai/QwenPaw/pull/8795
- **#7378**（CLOSED，[DO NOT MERGE]）原生移动端体验草案关闭，Expo/React Native 客户端方向暂未通过 — https://github.com/agentscope-ai/QwenPaw/pull/7378

另有多条 XL/XXXL 级重构 PR 持续更新但仍未合并（见第 8 节），说明架构演进处于"进行中"而非"已交付"状态。整体看，项目今日在**工程收尾**层面前进有限，主要推进来自待合并的长周期 PR 的持续迭代。

## 4. 社区热点

- **#8071 [OPEN] 插件主题扩展点**（评论 18，最高）— 诉求是让插件能覆盖 Console 主题的语义 token，当前插件仅有 `window.QwenPaw.chat.theme.set(...)` 一个旋钮。反映插件生态方对**定制能力开放度**的强烈需求，讨论热度远超其他议题。https://github.com/agentscope-ai/QwenPaw/issues/8071
- **#7724 [CLOSED] 会话丢失**（评论 6）— 用户在插件重部署 + shutdown 后完全找不到历史会话，且大模型配置丢失。属高影响体验问题，虽已关闭但历史"反复遇到"的描述值得警惕。https://github.com/agentscope-ai/QwenPaw/issues/7724
- **#8595 [CLOSED] qwenpaw-creator 安装报 `No package metadata was found`**（评论 5）— 官方插件经 UI 与 CLI 均热装失败。https://github.com/agentscope-ai/QwenPaw/issues/8595

PR 侧评论数据缺失（显示为 undefined），无法据此排序热度。

## 5. Bug 与稳定性

按严重程度排列：

**高**
- **#7724 会话丢失**（已关闭）— 会话与模型配置同时丢失，涉及持久化可靠性。https://github.com/agentscope-ai/QwenPaw/issues/7724
- **#8771 钉钉渠道 session_id 冲突**（OPEN）— `short_session_id_from_conversation_id()` 取 conversationId 末 8 位，同组织内所有 1:1 会话会碰撞。无 fix PR 记录。https://github.com/agentscope-ai/QwenPaw/issues/8771
- **#8693 微信渠道 ACCOUNT_IN_USE**（已关闭）— 启动路径与 workspace 投影重复占用同一 runtime key。https://github.com/agentscope-ai/QwenPaw/issues/8693
- **#8776 模型错误分类误判**（OPEN）— HTTP 400 + "quota exceeded" 被归为 `bad_request`（`fallback_eligible=False`），主模型额度耗尽时无法自动 fallback。https://github.com/agentscope-ai/QwenPaw/issues/8776
- **#8700 DoomLoopGate 不触发**（OPEN，2.3.0 及 main `fc1db1a` 均可复现）— agentscope 将回复聚合为单条 assistant 消息时死循环防护失效。https://github.com/agentscope-ai/QwenPaw/issues/8700

**中**
- **#8789 批量任务非法值可先派发兄弟子代理**（OPEN）— `_spawn_batch()` 校验用 `str().strip()` 但派发用原值，null/数字/列表/对象可通过预检。https://github.com/agentscope-ai/QwenPaw/issues/8789
- **#8796 移动端顶部安全区缺失**（OPEN）— `viewport-fit=cover` 引入后 Console 内容渲染到系统状态栏下，自 `c54a4465` 起存在，影响 2.3.0.post1。https://github.com/agentscope-ai/QwenPaw/issues/8796
- **#8778 Creator 参考图 ~24h 后失效**（OPEN）— 复用过期的 DashScope 签名 source_url 且不校验过期，短路了本地 Base64 路径。https://github.com/agentscope-ai/QwenPaw/issues/8778
- **#8779 Creator 远端 asset_ingest FAILED 无重试**（OPEN）— FAILED 为终态，素材预览永久 404，尽管存储层已允许 FAILED→QUEUED。https://github.com/agentscope-ai/QwenPaw/issues/8779
- **#8521 无答复内容 / Ctrl+C 需多次 / 新版 UI 变慢**（已关闭）— 用户明确表达对新 UI 的不满。https://github.com/agentscope-ai/QwenPaw/issues/8521

**低（已关闭）**
- #7745 切换 Agent 删除 lastChatIdByAgent 并致历史会话不可点；#7767 guardrail 插件多项缺陷（附件 stale blob、cron 漏触发、console tail-drop、`on_acting` 不触发）；#8742 集成测试对 PUT-only 路由发 GET；#8716 / #8547 Windows Creator 路径问题。测试类 #8775（test-issue-please-ignore）已关闭。

**说明**：上述 OPEN 问题均未见对应 fix PR 记录，需维护者认领。

## 6. 功能请求与路线图信号

- **插件主题扩展点 #8071** — 已有 18 条评论讨论；对应插件体系重构 PR **#8554**（插件 CLI 命令与扩展点，size/XXXL，OPEN）正在推进，二者高度相关，后续版本落地的可能性较高。https://github.com/agentscope-ai/QwenPaw/issues/8071
- **qwenpawmail 增加 `save_draft` 工具 #8780** — 当前 send/reply/forward 均直接经 SMTP 发送，无草稿模式。属 MCP 插件层新增工具，实现成本较低。https://github.com/agentscope-ai/QwenPaw/issues/8780
- **独立记忆写入模型 PR #7719** — ReMeLight 记忆写入复用主模型，改为可配置独立模型，可降低主模型消耗。https://github.com/agentscope-ai/QwenPaw/pull/7719
- **共享 Platform Web App 访问本地 QwenPaw PR #8793** — Console 连接云账号、扫码登录、云端/已连接 workspace 切换（size/XXXL）。https://github.com/agentscope-ai/QwenPaw/pull/8793
- **worker-advisor 协作改进 PR #8797** — 将 worker 系统约束带入 advisor 上下文，避免无效建议。https://github.com/agentscope-ai/QwenPaw/pull/8797
- 用户侧诉求（#8521）还包括**新旧 UI 切换开关**，尚未见对应 PR。

## 7. 用户反馈摘要

- **会话与配置可靠性是第一痛点**：#7724 用户描述"反复遇到"会话丢失，并称模型配置一并丢失，需退出重选模型后对话仍无法找回，直接影响信任度。
- **UI 改版引发负面评价**：#8521 用户认为新版 UI"没有旧版高效""整体反应迟缓"，并希望提供旧版显示模式切换，同时报告 Ctrl+C 复制需多次按键。
- **官方插件安装体验不佳**：#8595 官方 qwenpaw-creator 在 UI 与 CLI 两条路径均热装失败，首次使用门槛高。
- **Windows 平台问题反复回归**：#8547 指出唯一内置灵感示例在 Windows 上无法打开，且是 #7291（1.1.2 声称已修）的回归；#8716 进一步拆出写路径根因，显示问题修而不净。
- **插件开发者诉求明确**：#8071 反映插件侧定制能力过窄，主题仅一个入口，社区希望更深层的语义 token 覆盖。
- **Creator 远端素材链路脆弱**：#8778、#8779 显示签名 URL 过期与 FAILED 终态两类问题叠加，素材预览可能长期不可用。

## 8. 待处理积压

以下 PR 均处 OPEN 且已持续较长时间，建议维护者重点关注评审排期：

- **#7719**（2026-09-12，Under Review，XL）记忆写入独立模型 — 已挂起约 2 个月。https://github.com/agentscope-ai/QwenPaw/pull/7719
- **#8469**（2026-10-28，XXXL）将 MCP 抽取为插件 — 与插件化主线一致，长期未合。https://github.com/agentscope-ai/QwenPaw/pull/8469
- **#8499**（2026-10-29，XXXL）本地模型管理抽取为 Plugin Provider — 同上。https://github.com/agentscope-ai/QwenPaw/pull/8499
- **#8554**（2026-11-03，XXXL）插件 CLI 命令与扩展点 — #8071 落地前提。https://github.com/agentscope-ai/QwenPaw/pull/8554
- **#8133**（2026-10-08，Under Review，XL）修复 CJK Markdown 强调边界 — 中文用户排版体验，已等待约 40 天。https://github.com/agentscope-ai/QwenPaw/pull/8133
- **#8268**（2026-10-16，M）TaskTracker 回调超时与清理。https://github.com/agentscope-ai/QwenPaw/pull/8268

Issue 侧需关注长期未闭环的 **#6952**（2026-08-12，perf：工具 schema 顺序不定与 env_context 字段交错导致 prefix cache 不稳定）—— 直接影响推理成本，已挂起三个月以上。https://github.com/agentscope-ai/QwenPaw/issues/6952

---

**健康度小结**：Issue 关闭率约 48%（11/23），PR 合并/关闭率约 32%，流量端活跃但交付端偏慢；三个 XXXL 级插件化重构 PR 构成架构演进的关键路径，其评审进度将决定下一版本的能力边界。渠道与会话持久化相关的重复性 Bug 建议优先排期。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 · 2026-11-17

## 1. 今日速览
过去24小时内项目活跃度**极低**：仅有 1 条 Issue 新开，PR 更新为 0，无新版本发布。今日唯一动作是一条 CLI 功能请求（Issue #725），尚无评论与点赞，也未进入实现阶段。项目整体处于平稳的输入阶段，主要健康信号是有一项新需求被提出，但缺乏代码侧推进。数据不足以支持对项目动能做出正面判断。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无 PR 合并或关闭，项目功能与修复层面无可见推进。

## 4. 社区热点
今日唯一讨论条目为 [#725 [OPEN] feat(cli): one-turn, explicitly approved Parallel search for public documentation](https://github.com/qhkm/zeptoclaw/issues/725)
- 作者 georgeatparallel，创建与更新均为 2026-11-17，评论 0，👍 0。
- 诉求（基于摘要）：在有人参与的交互式 CLI 会话中，用户希望从托管搜索服务获取公共文档摘录与原始来源链接，而无需自行运行 SearXNG 实例；摘要提到 ZeptoClaw 已部分支持相关能力。该需求强调“单轮”与“显式批准”两个约束，反映用户对检索动作可控性与信任边界的关注。
- 注：由于评论与反应均为 0，本条不构成真正的社区讨论热点，仅为首个提出者。

## 5. Bug 与稳定性
今日未报告 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号
- [#725](https://github.com/qhkm/zeptoclaw/issues/725)：请求为 CLI 增加单轮、需显式批准的 Parallel 搜索能力，面向公共文档检索场景。
- 判断依据：该请求处于 OPEN、无评论、无关联 PR 的状态，今日数据中不存在任何实现侧信号，因此**无法判断其是否会被纳入下一版本**。仅可标记为待评估的路线图候选输入。

## 7. 用户反馈摘要
- 使用场景：交互式 CLI 会话中检索公共文档并保留原始来源链接。
- 痛点：不希望自建 SearXNG 实例即可获得托管搜索服务能力。
- 偏好：希望检索以单轮方式执行，并需用户显式批准，体现对操作可控/可审计的要求。
- 其他满意或不满意反馈：今日数据中无评论，无法提炼。

## 8. 待处理积压
今日数据未提供长期未响应 Issue 或 PR 的信息，无法识别积压项。仅有一条当日新开 Issue #725 处于无响应状态，建议维护者尽早回应其可行性边界（尤其是“显式批准”与托管搜索服务的集成方式）。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-11-17

## 1. 今日速览

过去24小时项目保持高活跃度：18 条 Issue 全部为新开或活跃状态，无关闭；50 条 PR 更新中 48 条待合并、仅 2 条合并/关闭，合并吞吐明显低于积压增速。今日最值得关注的是新报告的 S0 安全问题 #12514（supervised SOP 在特定决策路径下跳过审批），以及持续占据讨论热度的多模型切换、紧急停止执行、成本与超时治理等 P1/P2 议题。PR 端以安全凭据管理、通道扩展、cron/成本修复为主线，但大量 XL 体量 PR 长期挂在待评审状态，评审资源成为主要瓶颈。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 为 2 条，均为 Web 前端小型可访问性修复：

- **#12375 fix(web): close the model picker on Escape**（已关闭，size:S）— 对话头部的模型菜单此前仅在鼠标点击外部或选择时关闭，键盘用户无法退出，现补上 Escape 关闭路径。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12375
- **#12374 fix(web): show a check on the pressed "Keep thinking collapsed" button**（已关闭，size:XS）— "Keep thinking collapsed" 按钮的按下态仅有边框与色调变化，在低对比度环境下不易辨识，现增加勾选标识。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12374

整体推进幅度有限：48 条待合并 PR 中多条为 size:XL 且标记 risk:high 的大型变更（如 #12453、#12438、#11847、#12440），尚未进入合并通道，项目功能面向前推进的速度受限于评审而非开发。

## 4. 社区热点

按评论数排序，今日讨论最集中的 Issue 为：

- **#8600 [Feature]: easy per-chat model switching for multi-model providers**（5 条评论，👍1，P2，tracker，parking-lot）— 用户 vvuk 表示从 moltis 迁移而来，所用能力基本齐备，唯独缺少 moltis 中按会话切换同一 provider 下任意模型的能力。这是典型的迁移用户流失点，且已被标记为 tracker 与 parking-lot，说明方向被认可但排期未定。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8600
- **#12401 [Bug]: Tool-context collapse breaks Claude Opus 5.5 chats with thinking-signature 400**（5 条评论，S1）— 自 v0.9.0 起，原生 anthropic provider 上的 `claude-opus-5-5` 会话在若干轮工具调用后永久失败。属于发布版本回归，直接影响工作流。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12401
- **#9191 [Bug]: Cron agent jobs have no wall-clock timeout**（5 条评论，P1）— `run_agent_job` 调用 `agent::run` 时没有外层 timeout/cancel 预算，且进行中的锁仅在进程启动时清理。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9191
- **#9390 [Bug]: emergency stop is a CLI-only state file that no runtime path reads**（4 条评论，P1）— 审计发现紧急停止只是一个 CLI 状态文件，运行时路径未读取它。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9390

**诉求分析**：讨论热度并未集中在单一新功能，而是持续围绕三条主线——多模型/多 agent 场景下的会话级配置粒度（#8600、#12054）、SOP 与紧急停止等安全控制是否真正闭环（#9390、#9802、#12514），以及 cron/成本等长时运行资源的治理（#9191、#12477、#12489）。这些均指向同一根因：配置项被解析但未被运行时消费，形成"配置存在即视为已实现"的错觉。

## 5. Bug 与稳定性

按严重程度排列（S0 最高）：

| 严重度 | Issue | 摘要 | Fix PR 状态 |
|---|---|---|---|
| **S0** | [#12514](https://github.com/zeroclaw-labs/zeroclaw/issues/12514) | supervised SOP 中唯一的 SOP 级审批位于步骤 1 之前；若步骤 1 的 `decide` 问题被决策模型回答为"否"，后续步骤不再请求审批（数据丢失/安全风险） | 无 |
| **S1** | [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | `keep_tool_context_turns` 折叠旧工具轮次后，Claude Opus 5.5 会话因 thinking-signature 400 永久失败；release:v0.9.1 回归 | 无 |
| **S1** | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | cron agent 任务无墙钟超时，进行中锁仅在进程启动时清理 | 无（#12511 为相关问题，见下） |
| **S1** | [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | `[cost.enforcement] mode` 被解析但运行时未读取，默认 `"warn"` 模式下预算超限仍会终止本轮 | **有** — PR [#12512](https://github.com/zeroclaw-labs/zeroclaw/pull/12512) |
| **S2** | [#12504](https://github.com/zeroclaw-labs/zeroclaw/issues/12504) | Anthropic provider 回放无签名的 `thinking` block，每次重试均以 `signature: Field required` 失败 | 无 |
| **S2** | [#12492](https://github.com/zeroclaw-labs/zeroclaw/issues/12492) | Web Dashboard 中的对话忽略 runtime profile 的 thinking 设置，从不发送原生 thinking 配置 | 无 |
| **S2** | [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | 自 #11901 起 gateway 通过 `ServeTasks::spawn` 以 INFO 记录每条连接，淹没运行时 trace | 无 |
| **S2** | [#12489](https://github.com/zeroclaw-labs/zeroclaw/issues/12489) | cron 调度器等待整批到期任务完成，单个长 agent 任务拖慢其他 cron 任务（master 6e8398234 复现） | **有** — PR [#12511](https://github.com/zeroclaw-labs/zeroclaw/pull/12511) |
| **S3** | [#12507](https://github.com/zeroclaw-labs/zeroclaw/issues/12507) | 从服务端重载聊天后，Web 聊天显示 runtime 的 `[CURRENT DATE & TIME: …]` 前缀与合成时间戳 | **有** — PR [#12515](https://github.com/zeroclaw-labs/zeroclaw/pull/12515) |

另有 Windows 平台测试专项 [#12400](https://github.com/zeroclaw-labs/zeroclaw/issues/12400)，对应 PR [#12510](https://github.com/zeroclaw-labs/zeroclaw/pull/12510)（在 Windows 上跳过 reply-end 写截止时间测试）。此外 [#12505](https://github.com/zeroclaw-labs/zeroclaw/issues/12505) 记录了 PR #12269 的 Security job 报告 RUSTSEC-2026-0543（chrono）与 RUSTSEC-2026-0555（chrono-tz），二者均被判定为无人维护且 cargo-deny 未提供安全升级路径。

**健康度提示**：S0/S1 共 4 条中仅 1 条有对应 fix PR，且 #12401 与 #12504 显示 Anthropic thinking 签名处理存在系统性缺陷，建议合并为同一修复主题处理。

## 6. 功能请求与路线图信号

- **按会话切换模型**：[#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600)（P2，parking-lot）已有同方向的 PR [#12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453)——后者引入"精确模型引用选择"，与 #8600 的诉求高度重合，可视为该需求进入实现的信号，但 #12453 体量 XL、标签众多且标记 needs-author-action，距离落地仍有距离。
- **OpenAI 原生推理强度按 profile 生效**：[#12054](https://github.com/zeroclaw-labs/zeroclaw/issues/12054) 与 #12492（Dashboard 忽略 thinking 设置）属同一类"运行时未消费 profile 配置"问题，建议打包处理。
- **紧急停止完整执行**：RFC [#9802](https://github.com/zeroclaw-labs/zeroclaw/issues/9802)（status:blocked）计划在共享网络出口边界强制执行 `network-kill` 与 `domain-block`，并中断进行中的可取消工具任务，基于 PR #9440 的第一阶段工作。目前阻塞中，无后续 PR。
- **受限操作员托管服务凭据**：RFC [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) 提出让 agent 在不暴露凭据的前提下访问服务；已有配套 PR 链 [#12482](https://github.com/zeroclaw-labs/zeroclaw/pull/12482)（在外部云 vault 中开通目录凭据）、[#12490](https://github.com/zeroclaw-labs/zeroclaw/pull/12490)（scoped Authorization Token）、[#12408](https://github.com/zeroclaw-labs/zeroclaw/pull/12408)（WebUI 管理 scoped HTTP 凭据），是最接近形成完整特性的一组。
- **按 agent 隔离的开发构建运行器**：RFC [#12494](https://github.com/zeroclaw-labs/zeroclaw/issues/12494) 针对 agent 执行构建/测试/包还原时运行不可信代码的问题，暂无配套 PR。
- **SOP 决策回退语义**：[#12513](https://github.com/zeroclaw-labs/zeroclaw/issues/12513) 要求为"决策答案被忽略时 `switch` 的路由"补充回归测试并修正文档，与 [#12237](https://github.com/zeroclaw-labs/zeroclaw/pull/12237)（决策答案不可用时 fail-closed）配套。

## 7. 用户反馈摘要

- **迁移者有明确的能力落差**：来自 moltis 的用户指出除会话级模型切换外其余能力均可用，这类"只差一项"的反馈通常意味着迁移意愿强、阻碍单一，优先级值得上调。
- **配置项"写了不生效"是最集中的不满**：cost 的 `enforcement.mode`（#12477）、Dashboard 的 thinking 设置（#12492）、OpenAI 的 profile 推理等级（#12054）、紧急停止状态文件（#9390）——用户反复发现配置被解析却未被运行时读取，这比功能缺失更损害信任，因为它让人误以为保护机制已生效。紧急停止一项尤为严重：用户以为存在安全开关，实际没有任何运行时路径读取它。
- **多 agent/多模型是真实使用形态**：用户提到"两个 agent 共享一个 OpenAI provider 却无法各自选择推理强度"，说明多 agent 共存已是常态场景，而非边缘用例。
- **发布版本回归影响工作流**：v0.9.0/v0.9.1 引入的 Claude Opus 5.5 会话永久失败被标为 S1"workflow blocked"，属于阻断级反馈。
- **报告质量较高**：多条 Bug 由 cursor[bot] 提交（#9191），且 #9390 的提交者明确说明"每一处引用行都打开核对、每一段引文都对 HEAD 校验"，说明社区参与者的证据标准在提升，有利于修复效率。

## 8. 待处理积压

以下条目长期未落地，建议维护者优先排期：

| 条目 | 创建日 | 已挂起 | 状态 |
|---|---|---|---|
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) 多模型按会话切换 | 2026-07-01 | 约 4.5 个月 | status:parking-lot |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) cron 无墙钟超时（S1） | 2026-07-20 | 约 4 个月 | status:accepted |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) 紧急停止未被读取（P1） | 2026-07-26 | 约 4 个月 | status:no-stale，help wanted |
| [#9802](https://github.com/zeroclaw-labs/zeroclaw/issues/9802) 紧急停止完整执行 RFC（P1） | 2026-08-07 | 约 3.5 个月 | **status:blocked** |
| [PR #11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) 原生 Rust XMPP + 可选 OMEMO | 2026-10-19 | 约 1 个月 | risk:high, size:XL, needs-maintainer-review |
| [PR #11754](https://github.com/zeroclaw-labs/zeroclaw/pull/11754) 可配置确认反应 | 2026-10-15 | 约 1 个月 | needs-author-action, size:XL |
| [PR #12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) 规范注册表编辑与精确模型引用 | 2026-11-15 | 2 天 | needs-author-action, size:XL |

**维护者关注重点**：#9390 与 #9802 构成同一安全承诺的两半——前者指出状态文件无消费者，后者是补全执行的 RFC 但处于 blocked。两者合计已挂起约 4 个月，是全表中风险收益比最高的待办。此外 48 条待合并 PR 中多条为 XL 体量且依赖链明确（#12482 依赖 #12481，#12453 要求先合并其依赖项），建议按依赖顺序分批推进，避免 XL PR 在等待中持续产生冲突与过期。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*