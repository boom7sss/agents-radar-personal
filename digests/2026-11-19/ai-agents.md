# OpenClaw 生态日报 2026-11-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-19 19:00 UTC

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

# OpenClaw 项目动态日报 · 2026-11-19

## 1. 今日速览

过去 24 小时项目维持极高活跃度：Issues 更新 500 条（新开/活跃 347，关闭 153），PR 更新 500 条（待合并 295，合并/关闭 205），并发布 2 个新版本。合并/关闭侧约完成 205 条 PR 与 153 条 Issue，说明清理动作与新增体量基本相当。但最热议题集中在**更新/迁移流程与 Gateway 稳定性**：多个 P0/P1 的升级失败、SQLite 锁、Doctor 卡死类问题同日仍在更新，`impact:crash-loop`、`impact:message-loss` 标签反复出现。整体看：开发吞吐旺盛，但稳定版升级链路的健康度是当前主要短板。

## 2. 版本发布

**v2026.11.10-beta.1**（beta）
- **Agent 模板**：支持直接从 ClawHub 包添加 agent，使用单一 `CLAW.md` 清单与打包的 skill 目录，并经由原生信任流程校验（#195707、#196322、#196348，作者 @steipete，致谢 @Patrick-Erichsen）。
- **OpenClaw ID**：摘要被截断，仅提到"connect nodes thr…"，无法确认完整能力，建议以官方 changelog 为准。
- 破 坏性变更/迁移注意事项：本条 release note 中**未明确说明**。

**v2026.11.6**（稳定）
- **更顺畅的升级**：将 2026.11.5 的 updater 桥接到当前发布路径；修正 Windows 上暂存插件依赖的校验（#200662、#200595，作者 @steipete，致谢 @RomneyDa、@desksk）。
- **更健壮的会话**：保留 subagent 相关内容（摘要截断，细节不全）。
- 破坏性变更/迁移注意事项：release note 中**未明确说明**。

> 注意：两个版本恰发布于"更新流程故障"类 Issue 持续高发期间（见第 5 节），建议升级前先关注 #197083、#194655、#200289 等迁移失败报告。

## 3. 项目进展

今日关闭/合并的重要 PR 包括：

- **#201538 [CLOSED]** `fix: finish a half-switched Git update instead of reporting it current` — 修复 Git checkout 安装中"切换了 release 链接但新版本未启动"的半完成更新被误报为最新；标注 `merge-risk: 🚨 compatibility`、P1。
- **#201657 [CLOSED]** `fix(codex): let setup verify the standalone installer runtime` — 修复 Codex 独立安装含 `codex -> bin/codex` 链接时 setup/repair 推断提前终止的问题（关联 #161720），P1。
- **#201966 / #201994 / #201987 / #201967 [CLOSED]** — 一批测试与性能类重构：修复编译态 Gateway worker 构建标识、消除测试时序抖动、简化 provider contract fixtures、降低 subagent 进度保存的分配开销。
- 时间线上还可见 **#201796 [CLOSED]**（cron agentTurn 无限重放已完成工具调用，P1、message-loss）当日关闭，属高价值稳定性修复。

**推进程度评估**：今日合并以"更新链路修补 + 测试/性能清理"为主，方向与用户最痛的问题一致；但不少同类根因 Issue 仍为 OPEN，属于"部分缓解、尚未收口"的阶段。

**仍在评审的关键 PR：**
- #201998 `refactor(gateway): check system-agent approval authority once at request start`（security-sensitive）
- #202000 `fix(gateway): settle a lost yielded child after restart so its parent wakes` — 直指重启后父子会话挂起问题
- #201972 `fix: avoid rereading compacted history before replies`（steipete，XL，标记 `merge-risk: 🚨 automation`）
- #201668 `fix: check a recorded data-at-risk mark before repair or the next update acts on it`

## 4. 社区热点

| 议题 | 状态 | 评论 | 链接 |
|---|---|---|---|
| #119720 同步式 agent 持久化与 transcript 维护阻塞 Gateway 事件循环 | OPEN，P1，diamond lobster | 29 | openclaw/openclaw Issue #119720 |
| #197083 安装后 Doctor WAL 发布校验失败，2026.11.3 更新半完成 | OPEN，P2 | 27 | openclaw/openclaw Issue #197083 |
| #177094 Control UI webchat 系统通知镜像挤掉本轮最终回答 | OPEN，P2 | 16 | openclaw/openclaw Issue #177094 |
| #125764 Telegram 适配器一次性发送失败即死信，回复静默丢失 | OPEN，P1 | 15 | openclaw/openclaw Issue #125764 |
| #141172 首个 session commit 前崩溃导致 `agent.run.started` 永久泄漏 | OPEN，P2 | 13 | openclaw/openclaw Issue #141172 |

**诉求分析**：热榜几乎全部是"多用户、长期反复复现"的既有缺陷，而非新功能讨论。核心关切有三：① **性能/事件循环**——状态库读写与持久化在规模化下阻塞主循环；② **消息可靠性**——Telegram 死信、系统通知挤压回答，属于"用户可见的丢失"；③ **更新原子性**——迁移失败后无法回滚（`state-migrated-no-rollback`）。值得注意的是，多个高赞条目评论数高但 👍 极低（多为 0–2），说明参与以维护者/复现者排查为主，社区投票信号偏弱。

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

**P0 / 发布阻断**
1. #164800 托管更新在 Doctor 后停滞、Gateway 已停止（2026.9.7→9.8），今日更新仍标 **unresolved** — 未见 fix PR。
2. #200289 2026.11.3→2026.11.4 更新耗时数小时、Gateway 交接时 SQLite 锁，需 SSH 恢复 — `impact:ux-release-blocker`，未见 fix PR。

**P1 / 崩溃与消息丢失**
3. #119720 Gateway 事件循环阻塞 — 已有部分修复落地（#140231 等），仍 OPEN，无新 fix PR。
4. #125764 Telegram 单次失败即死信，无重试、无 `reconcileUnknownSend` — 无 fix PR。
5. #196199 自 2026.10.10 起 Codex helper 完成无法唤醒父会话，用户被锁在助手外 — 无 fix PR。
6. #198218 Doctor/update 维护在 Gateway 停止时活锁（无限重哈希状态库）— 无 fix PR。
7. #191476 Matrix 房间卡在 "Plugin matrix consumer is closed" — 无 fix PR。
8. #194655 更新以 `state-migrated-no-rollback` 结束，workboard 迁移被推迟（期望 schema 38，实际 0）— 无 fix PR。
9. #169797 单 CPU 主机上 2026.9.9/10.1 内存约为 2026.9.4 的 2.5 倍，启动慢 3–5 倍 — 无 fix PR。
10. #153899 Gateway drain 等满 `TimeoutStopSec`（5m30s）— 无 fix PR。
11. #200606 2026.11.5 candidate Doctor 因插件迁移冲突阻断更新，`changed=[]` — 无 fix PR。

**P2 / 会话状态与体验**
12. #112638 `session.maintenance enforce` 模式下 maxEntries/maxDiskBytes 被静默突破（thread/channel 条目免于回收）。
13. #180978 Active Memory 超时熔断器在聊天节奏下永不打开，慢召回阻塞每一轮。
14. #170496 只读状态库快照每次读取都全量复制，cron 每 tick 触发。
15. #181084 超大主会话（35k 事件 / 228 MB）导致多秒 SQLite 快照读，compact 报 "admission is closed"。
16. #167854 超过 20 个会话有待报活动时，Home 丢弃会话通知（20 条系统事件队列上限）。
17. #177989 Kimi Code 在 2026.10.4/10.5 频繁重复工具调用、过度轮询。

**已关闭**：#201796（cron agentTurn 无限重放，P1）、#200022（2026.11.4 更新失败，P2）、#172986（WebChat 路径中截断，stale）。

**结论**：今日无新增 P0，但存量 P0/P1 未见 fix PR 的比例偏高；更新链路是重复失血点。

## 6. 功能请求与路线图信号

- **记忆检索分块与分词**：#179954（让 `MEMORY.md`/`USER.md` 之外的列表式记忆文件按条目分块索引）、#170997（memory FTS 增加 CJK bigram 分词器，因 trigram 无法匹配 2 字中文查询）。两者均已有 `clawsweeper:linked-pr-open` 标签，**进入下一版本的可能性较高**。
- **插件扩展点**：#164355（希望能在工具结果之后追加请求内容）今日已 CLOSED，涉及产品决策，信号是"暂不改动扩展点模型"。
- **可观测性**：#169428 希望在 `/usage full` 页脚暴露 `/status` 已显示的 `model.auth_label`。
- **本地模型接入**：PR #201941 为 Control UI Models 页增加本地 OpenAI 兼容服务（llmman）入口，解决只能手改 `models.providers` 的痛点。
- **渠道配置安全**：PR #201428 修复 configure/onboard/agents add 将渠道 token 以明文保存（关闭 #175333），属安全向改进，值得优先合入。

## 7. 用户反馈摘要

- **升级体验是最集中的不满**：多位用户在托管 npm 升级中遭遇 Doctor 校验失败、迁移未完成、无法回滚（#197083、#194655、#200289、#200606），其中 #200289 需 SSH 手动恢复，#164800 自 10 月提出至今仍标注未解决。
- **消息可靠性与"静默失败"**：Telegram 一次性发送失败即死信（#125764）、Slack `unknown_after_send` 无 CLI 可查/可结算（#183048）、Home 通知超 20 条即丢（#167854）——共同诉求是**重试/对账与可观测**。
- **性能在规模化与小机器上均吃紧**：单 CPU 主机内存与启动退化（#169797）、大会话快照读（#181084）、只读复制每 tick 发生（#170496），用户实际场景是"单机长期运行的 Gateway"。
- **多平台适配细节**：Matrix 房间被关闭的消费者卡死（#191476）、WebChat 显示层挤压最终回答（#177094）——属"不崩溃但影响信任"的体验摩擦。
- **满意信号**：同日有 AI agent 代用户提交的完整测量报告（#181084），以及多条带 source-repro 的高质量复现，说明用户愿意深度参与排查，社区协作氛围良好。

## 8. 待处理积压

建议维护者优先关注：

1. **#164800**（P0，创建 2026-10-04，今日仍 unresolved，无 fix PR）— 更新停滞 + Gateway 停止，已悬置约 6 周。
2. **#112638**（P2，创建 2026-07-22，标记 `needs-product-decision`）— 会话存储无界增长，积压近 4 个月。
3. **#153899**（P1，stale）— Gateway drain 等满超时，标记 stale 但属重启可用性问题。
4. **#119720**（P1，创建 2026-08-05）— 事件循环阻塞，虽已部分修复，仍缺完整收口。
5. **PR #198752**（XL，创建 2026-11-14，`waiting on author`）与 **PR #201972**（XL，`merge-risk: automation`）— 大型 PR 长期悬置，存在合并冲突与评审疲劳风险。
6. **PR #201310**（memory forget 大批量操作，`needs proof`）与 **PR #194682**（浏览器崩溃标签错误，2026-11-07 起）— 已 ready for maintainer look 但未推进。

---

*说明：本报告仅基于提供的 GitHub 数据生成。两则 release note 原文存在截断（OpenClaw ID 段、v2026.11.6 会话段），相关能力未作推断；PR 评论数为 `undefined`，故未用于热点排序。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-11-19）

## 1. 生态全景

今日生态呈现明显的"三速分化"：以 OpenClaw 为首的头部项目维持每小时级别的吞吐（单日 Issue+PR 各 500+ 条），第二梯队的 Hermes Agent、ZeroClaw、CoPaw 处于"输入大于消化"的高积压状态，第三梯队的 PicoClaw、NanoClaw 分别在清库存与短闭环修复中运行，另有 NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw 五个项目零活动。整体最集中的共性问题**不是功能缺失，而是升级/更新链路的可靠性**——OpenClaw 的 P0 更新停滞、NanoClaw 的"先停服务后失败"、Hermes 的 v0.23 插件回归、CoPaw 的 post1 升级回归，四者独立指向同一处。渠道（Telegram/QQ/Matrix/Discord）的"静默失败"是第二高频复现点。

## 2. 各项目活跃度对比

| 项目 | Issues 更新（开/闭） | PR 更新（待／合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（347/153） | 500（295/205） | 2（beta + stable） | 吞吐极高，但 P0/P1 存量无 fix PR 比例高，更新链路重复失血 |
| **Hermes Agent** | 50（46/4） | 50（33/17） | 1（canary） | 高活跃；当日回归当日修（#157818→#157837），但 P1 #145022 悬置 3 周+ |
| **CoPaw** | 23（11/12） | 30（22/8） | 0 | 高活跃；新 Bug 当日出 PR，评审带宽成瓶颈（4 条 XL+ 超 2 周） |
| **ZeroClaw** | 15（13/2） | 50（49/1） | 0 | 输入 65 / 闭环 3，关闭率显著低于流入；98% PR 待合并 |
| **NanoClaw** | 35 条 Issue/PR 合计（Issue 闭 10、PR 合闭 8） | — | 0（rc.2 待发） | 中等偏上；短闭环效率高，update 路径仍持续出新 Bug |
| **NanoBot** | 3（1/2） | 19（6/13） | 0 | 良好；单日 13 条合闭，安全 Issue 一日闭环；老 PR 沉淀久 |
| **PicoClaw** | 0 | 7（0/7） | 0 | 低—单边运转；纯清库存（含 1095 commit 上游同步） |
| **LobsterAI** | 1（1/0） | 50（0/50） | 0 | 良好但单向；性能治理集中合入，唯一新 Issue 为安全项未闭环 |
| NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw | 0 | 0 | 0 | 无活动 |

> 注：NanoClaw 原始数据未拆分 Issue/PR 明细至同一口径；各项目 PR 评论数普遍缺失（`undefined`），未用于排序。

## 3. OpenClaw 在生态中的定位

**规模优势是数量级的。** OpenClaw 单日 500 条 Issue + 500 条 PR 更新，约为第二梯队（50/50）的 10 倍，其余项目更在其下。这一体量带来的直接差异是：OpenClaw 已进入"发布治理与存量稳定性"问题域，而大多数同类仍在"单条 Bug 修复"阶段。

**优势：**
- **发布节奏最完整**：唯一同时有 beta 与 stable 通道且当日双发的项目，其他项目多为 canary-only（Hermes）或无发布（CoPaw、ZeroClaw、NanoClaw）。
- **生态机制先发**：Agent 模板经 ClawHub 包与 `CLAW.md` 清单分发、原生信任流程校验（#195707 等），是所提供材料中唯一成型的 agent 分发与信任机制。
- **深度排查文化**：出现 AI agent 代用户提交的完整测量报告（#181084）与多条 source-repro，社区协作质量领先。

**技术路线差异：** OpenClaw 的重心在 **Gateway 事件循环 + SQLite 状态库 + 更新/迁移原子性**——其热榜几乎全是"多用户长期复现"的既有缺陷（#119720 事件循环阻塞、#125764 Telegram 死信、#141172 崩溃泄漏），而非新功能讨论。这与 CoPaw（插件化瘦身）、ZeroClaw（V5 注册表重构）等以架构演进为主线的项目形成对比。

**短板同样突出：** 存量 P0/P1 无 fix PR 比例偏高（#164800 悬置约 6 周、#200289 SQLite 锁需 SSH 恢复），且多个高评论条目 👍 仅 0–2，社区投票信号弱于维护者驱动。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/更新的原子性与可回滚** | OpenClaw（#194655 state-migrated-no-rollback、#200289）、NanoClaw（#4478 先停服务后检查、#4479 快照过大）、Hermes（#147873 重启义务永不解除）、CoPaw（#8812 post1 升级告警刷屏） | 破坏性操作前预检、失败可回退、迁移失败不静默 |
| **渠道消息"静默失败"与对账** | OpenClaw（#125764 Telegram 死信、#183048 Slack unknown_after_send）、CoPaw（#8475 QQ enabled 静默重置、#8313 QQ 群消息丢弃）、ZeroClaw（#12558 Matrix 审批发错位置）、NanoClaw（#4482 WhatsApp reaction） | 重试/对账机制、失败可见的错误与日志 |
| **会话隔离与数据边界** | NanoClaw（#4475 组内会话共享 group 目录与记忆）、CoPaw（#8513 外向命令未被拦截）、LobsterAI（#3120 API Key 明文命令行）、Hermes（#156844 `.env` 密钥打码 PR） | 默认安全、最小暴露、凭据不出上下文 |
| **性能与资源在规模化下的退化** | OpenClaw（#119720 事件循环、#181084 大会话快照读、#169797 单 CPU 退化）、CoPaw（#6952 prefix cache 失效）、Hermes（#154960 提交重扫 3–5 次、#156593 inode 耗尽）、LobsterAI（#3029 工具 schema 约 106k 字符、#2996 启动扫描占 75%） | 长期运行 Gateway 的性能一致性 |
| **工具调用解析与迭代预算** | PicoClaw（#586 状态感知解析器）、Hermes（#137639 工具被拒浪费一轮、#157892 iteration-budget PR）、CoPaw（#8700 DoomLoopGate） | 复杂模型输出下的工具调用鲁棒性、防循环 |
| **本地/自托管模型接入** | OpenClaw（#201941 本地 OpenAI 兼容入口）、Hermes（#146546 Bedrock 配置）、ZeroClaw（#11296 llama.cpp URI 不被采用）、CoPaw（#8826 Rapid-MLX 预设）、NanoBot（#5718 OpenRouter 原生 Images） | 多 provider 一致性、自托管 endpoint 正确性 |

## 5. 差异化定位分析

- **OpenClaw —— 通用平台型**：Gateway 中心架构，状态库 + 迁移体系 + 插件/skill 生态 + ClawHub 分发，面向需要长生命周期运行的个人/小团队助手。技术复杂度与社区规模均为生态之最。
- **Hermes Agent —— 多 surface / 多 profile 桌面型**：Nous Desktop 打包、canary 快速迭代，重心在多设备会话接管（#117321）、profile 生命周期、catalog 插件生态；目标用户偏开发者与多端用户。
- **CoPaw —— 渠道整合 + 插件化重构型**：深度绑定 QQ/飞书/钉钉/小艺/微信等中文渠道，主推插件化瘦身（MCP、本地模型管理抽为插件），移动端浏览器为主要使用形态；面向中文 IM 重度用户。
- **ZeroClaw —— 发布工程与治理型**：重心在 V5 注册表/运行时绑定重构、发布体积闸门、PR 风险标签自动化、a2a/委托代理策略强制；工程治理色彩最浓。
- **NanoBot —— WebUI 体验打磨型**：HKUDS 出品，单日集中修复 WebUI 状态一致性、重连对账、网关重构；轻量、开源学术背景。
- **NanoClaw —— 容器化本地隐私型**：group 目录 + per-group 记忆 + 容器隔离 + iMessage 摘要（消息不出本机），Codex/OneCLI 提供方集成；面向隐私敏感的 Mac 用户。
- **PicoClaw —— 下游 fork 维护型**：SiPEED 硬件背景，当前主要为上游同步（1095 commit）与早期 PR 清库存，定制前向移植承压。
- **LobsterAI —— 启动性能工程型**：网易有道，单日 50 条 PR 全为 OpenClaw 网关启动性能与打包体积优化，产品化取向明显。

## 6. 社区热度与成熟度

**第一层 · 快速迭代 + 存量消化并行（OpenClaw）**：唯一同时具备高吞吐、双通道发布与真实规模缺陷的项目。处于"能力已铺开、稳定性待收口"阶段——新特性仍在上（Agent 模板、OpenClaw ID），但升级链路的健康度是当前主要短板。

**第二层 · 快速迭代期（Hermes、CoPaw、ZeroClaw、NanoClaw、NanoBot）**：均为当日回归当日修的响应速度，但各有不同瓶颈——Hermes 是 canary 缺变更日志、用户只能从 Issue 反推风险；CoPaw/ZeroClaw 是评审带宽被 XL 级 PR 卡住（ZeroClaw 98% 待合并、CoPaw 4 条 XL+ 超两周）；NanoBot 是安全响应快但老 PR 沉淀久（#5234 积压 3.5 个月、p1 标签与时长不匹配）。

**第三层 · 质量巩固 / 清库存期（PicoClaw、LobsterAI）**：PicoClaw 零 Issue、纯批量合并（#1560/#1555/#1551 打包 10+ 早期 PR）；LobsterAI 50 条 PR 全为性能收口，无新 Issue 输入。二者均属"消化而非扩张"。

**第四层 · 静默（NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw）**：24 小时零活动，成熟度无从由本日数据判断。

## 7. 值得关注的趋势信号

1. **"更新即事故"已成生态级痛点。** 四个独立项目同日暴露升级失败/无法回滚，说明**发布治理（changelog、迁移预检、回滚）正从工程细节上升为项目可信度指标**。对开发者的参考：更新路径的设计优先级应不低于新功能，且迁移失败必须具备回滚能力。

2. **"静默失败"比直接失败更伤信任。** Telegram 死信、QQ `enabled` 被重置、飞书仅显示 "Internal error"、NanoBot 标题恒为 "Untitled"——用户反复批评的是**部分可用状态缺少可见错误与可调参数**。趋势：可观测性与对账机制将成为个人助手的差异化能力。

3. **安全默认值成为外部贡献者的入场主题。** NanoBot 的 NUL 字节校验绕过（#6701）、NanoClaw 的组内会话共享（#4475）、LobsterAI 的 API Key 明文传参（#3120）、CoPaw 的外向命令未拦截（#8513）——安全审计类 Issue 增多，说明项目已吸引到会做边界输入审计的用户群，默认安全优于手工加固。

4. **插件化 + 核心瘦身 + 可观测计费的组合方向。** CoPaw 将 MCP 与本地模型管理抽为插件（#8469/#8499）并写入 cron/heartbeat token 用量（#8707）；Hermes 的 catalog 持续扩张（memrack/swarm-studio/iteration-budget）；OpenClaw 以 ClawHub + `CLAW.md` 做 agent 分发。共同指向：**核心收窄、能力外挂、成本可计量**。

5. **本地/自托管推理接入的一致性缺口。** 自托管 llama.cpp endpoint URI 不被采用（ZeroClaw #11296，标 security/high）、preset slug 遮挡 prompt caching（Hermes #157875，影响计费）、Kimi 兼容 provider 标题生成超时（NanoBot #6718）——多 provider 场景下的**上下文重建与配置一致性**是尚未被系统解决的横切问题。

6. **社区信号利用率不均衡。** Hermes 最高赞 Issue（#55287，👍4，改动面小）长期停留 `needs-decision`，而 OpenClaw 热榜多条评论高但 👍 低——**投票信号普遍偏弱，维护者决策仍以复现质量驱动**。对开发者的提示：若依赖 👍 排序路线图，需先建立有效的用户声量渠道。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-11-19

## 1. 今日速览

NanoBot 今日处于高强度合并节奏：24 小时内 19 条 PR 更新，其中 13 条已合并/关闭、6 条待合并，Issues 侧仅 3 条更新（1 条新开、2 条关闭）。WebUI 稳定性是本日绝对主线——#6724、#6725、#6726、#6727、#6728 五条同日关闭的 PR 均出自同一贡献者 chengyongru，覆盖窄屏计时器、排队消息状态、网关状态重构与文档可读性。安全侧亦有实质收敛：#6701 报告的 URL 校验 NUL 字节问题已由 PR #6716 修复关闭。整体健康度良好，但待合并队列中多条老 PR 带有 `conflict` 标签，合并成本在上升。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭的 PR 主要推进三条线：

- **WebUI 运行时状态正确性**：#6715 在重连时对仍在运行的 turn 做状态对账，修复浏览器漏收终止帧后 Agent 永久显示"运行中"的问题；#6719 明确区分"网关已收件"与"模型已开始回答"，为排队中的后续消息增加呼吸虚线提示；#6726 修复 #6719 与 #6715 同时落地后遗留的 `websocket_turn_id` 导入失效问题——这是一次典型的合并冲突后遗症，已当日闭环。
- **架构重构**：#6727 拆分 WebUI 网关的变更操作与 UI 状态，消除"结构化 WebSocket 写入被转成合成 HTTP 请求再转回"的往返路径，并将磁盘操作、历史投影、UI 状态所有权从高频 handler 中剥离，属于对长期可维护性的投资。
- **安全加固**：#6716 在 DNS 解析前拒绝含控制字符/空白的畸形主机名，与 Issue #6701 形成完整的报告-修复闭环。

另有 #6720 修复会话中用户图片以本地路径标记而非图片本体回放的问题，#6724 修复预设关闭图像输入时仍发起 turn 的问题，#6725 整理了 20 个面向用户的文档页面。整体看，项目在"打磨而非扩边界"——今日没有新能力上线，但一批影响体感的状态一致性问题被集中清掉。

## 4. 社区热点

今日数据中评论数最多的 Issues 也仅有 1 条评论，PR 评论数未回传（显示 `undefined`），社区讨论热度整体偏低，热点集中在开发者自驱的修复流：

- [Issue #6718](https://github.com/HKUDS/nanobot/issues/6718)（OPEN）：WebUI 自动标题生成在 Kimi K3.1 Pro + OpenAI 兼容 provider 下持续超时于 96 token 预算，主题停留"Untitled"。这是唯一新开且仍在讨论的 Issue，且已被关闭的 #6704 同样涉及"模型侧生成内容不一致"。
- [PR #5234](https://github.com/HKUDS/nanobot/pull/5234)（OPEN，2026-08-03 创建，今日仍有更新）：以 mst-python 作为元搜索 provider，聚合 DuckDuckGo/Google/Brave/Bing 并用 RRF 融合。作为 p1 功能 PR 挂置逾三个月仍未合并，是社区侧最值得关注的信号。

诉求解读：用户侧的讨论重心正从"能不能用"转向"多 provider 场景下的一致性"——标题生成、消息草稿、图片回放三个问题共享同一根因类别，即不同 provider/会话边界下的上下文重建不可靠。

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 中高 | [#6704](https://github.com/HKUDS/nanobot/issues/6704) 草拟的 `message()` 通知在下一轮对话中消失，复述时文本与格式细节均不一致 | 已关闭 | 未在数据中明确关联，但 #6681（原生续接回放被动历史）、#6720（从存储附件回放用户图片）属同一上下文丢失问题族 |
| 中 | [#6718](https://github.com/HKUDS/nanobot/issues/6718) Kimi K3.1 Pro 下 WebUI 标题生成因 96 token 预算耗尽而失败，主回复正常、标题恒为"Untitled" | **仍 OPEN** | 无 |
| 中（安全） | [#6701](https://github.com/HKUDS/nanobot/issues/6701) `resolve_url_target()` 未拒绝含 NUL 字节/控制字符的主机名，macOS/POSIX 上导致 C 层 `getaddrinfo` 截断 | 已关闭 | ✅ [#6716](https://github.com/HKUDS/nanobot/pull/6716) |

值得注意的是 #6701 的利用面：NUL 截断可能使校验器与解析器对同一主机名得出不同结论，属于校验绕过类缺陷，修复及时值得肯定。#6718 是今日唯一无 fix 的开放 Bug，且修复点明确（预算可配置或按 provider 调整），预计处理成本不高。

## 6. 功能请求与路线图信号

- **渠道会话在 WebUI 中续接**：[#6714](https://github.com/HKUDS/nanobot/pull/6714)（OPEN，`conflict`）允许从侧边栏打开并继续 Telegram 等渠道发起的会话。该 PR 直接对应"跨端上下文断裂"这一用户高频痛点，但带冲突标签，需维护者介入 rebase。
- **OpenRouter 原生图像生成**：[#5718](https://github.com/HKUDS/nanobot/pull/5718)（OPEN，2026-09-09 起）为保持与 OpenRouter 当前服务兼容而迁移至原生 Images API，属外部依赖驱动的被动升级，拖延越久兼容风险越大。
- **Keenable MCP 预设**：[#6014](https://github.com/HKUDS/nanobot/pull/6014)（OPEN，2026-10-03 起）接入托管 MCP 端点，仅暴露 `search_web_pages` 与 `fetch_page_content`，免 API key 即可运行，契合"低门槛开箱可用"的产品方向。
- **元搜索 provider**：[#5234](https://github.com/HKUDS/nanobot/pull/5234)，优先级 p1，见上文。

结合来看，下一版本最可能纳入的是 WebUI 交互闭环类改动（#6714 若解决冲突）；三个 provider 类 PR 均带 `conflict` 且挂置时间长，除非维护者集中投入，否则短期落地概率偏低。

## 7. 用户反馈摘要

从有限的 Issue 文本可提炼三类真实场景：

- **长链路任务的产物稳定性**（#6704）：用户用 NanoBot 准备 Python `message()` 调用，关注的是"草稿"这一中间产物的可复现性——通知文本与"stationery details"在跨 turn 后发生漂移，说明用户已将助手用于需要精确复用的正式输出，而非闲聊。
- **多模型接入的降级体验**（#6718）：用户通过 OpenAI 兼容层接 Kimi K3.1 Pro，主链路可用但辅助功能（标题生成）静默失败，且以"Untitled"呈现而非报错。这类"部分可用"状态比直接失败更易被误判为产品缺陷。
- **安全敏感用户的存在**（#6701）：报告者具备定位到 C 库 `getaddrinfo` 截断行为的能力，说明项目已吸引到会做边界输入审计的用户群，这对个人 AI 助手类项目是正向信号。

不满意点集中在一处：辅助生成路径的失败缺少可见错误与可调参数；满意点则体现在安全 Issue 从报告到合并修复在一个自然日内完成。

## 8. 待处理积压

- [PR #5234](https://github.com/HKUDS/nanobot/pull/5234) — 创建于 2026-08-03，**积压约 3.5 个月**，p1 优先级、元搜索 provider、含测试。p1 标签与超长挂置时间不匹配，建议维护者给出明确结论（合并、拆分或关闭）。
- [PR #5718](https://github.com/HKUDS/nanobot/pull/5718) — 创建于 2026-09-09，积压约 2.4 个月，涉及 OpenRouter 原生 Images API 的兼容性迁移，外部服务变更风险随时间累积。
- [PR #6014](https://github.com/HKUDS/nanobot/pull/6014) — 创建于 2026-10-03，积压约 1.5 个月，MCP 预设接入。
- [PR #6688](https://github.com/HKUDS/nanobot/pull/6688)、[#6681](https://github.com/HKUDS/nanobot/pull/6681)、[#6714](https://github.com/HKUDS/nanobot/pull/6714) — 均为近期提交但已标记 `conflict`，其中 #6681 声称修复 #6678（会话被动历史回放），与今日关闭的 #6704 症状高度同源，建议优先解冲突以验证是否能一并收敛上下文丢失类问题。
- [Issue #6718](https://github.com/HKUDS/nanobot/issues/6718) — 今日唯一无 fix 的开放 Bug，token 预算硬编码 96 的合理性需产品侧确认。

**健康度小结**：修复吞吐能力强（单日 13 条合并/关闭），安全响应及时，但存在"新问题消化快、老 PR 沉淀久"的结构性倾向，且多条待合并 PR 的 `conflict` 状态提示主干演进速度已超过贡献者的跟进速度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-19

> 数据来源：NousResearch/hermes-agent 公开 GitHub 活动（过去 24 小时）
> 统计口径：Issues 更新 50 条（新开/活跃 46，已关闭 4）；PR 更新 50 条（待合并 33，已合并/关闭 17）；新版本 1 个

---

## 1. 今日速览

- **活跃度：高。** 24 小时内 50 条 Issue、50 条 PR 同时流动，且当日新开 Issue 已形成多次讨论（如 #157750 RTL 渲染问题 4 条评论、#157818 插件崩溃已当日关闭）。
- **主线推进集中在稳定性：** 已关闭 PR 覆盖 Nous 登录时钟偏差误判（#157778）、holographic 记忆插件 v0.23 升级后丢失数据（#157837）、catalog 自更新误拦截（#157919）三类直接影响用户可用性的问题。
- **发布节奏延续 canary 通道：** 当日仅有一个 canary 构建，无 stable 版本，说明项目仍处于快速迭代期。
- **结构性风险仍待消化：** P1 的 Kanban 崩溃（#145022，28 条评论）与多项 P2 会话/网关一致性问题持续活跃，尚无对应合并的修复 PR。

---

## 2. 版本发布

### v0.23.2+canary.20261119T064637Z（2026-11-19）

- **性质：** canary 预发布构建，非稳定版。发布说明仅包含下载表（Hermes Desktop，含 macOS Apple Silicon DMG 等条目），**未列出变更日志、破坏性变更或迁移说明**。
- **迁移提示：** 从今日 Issue 可反推 v0.23 系列存在升级风险——#157818 报告 holographic 记忆插件在升级到 v0.23 后无法打开数据库，原因是从 Hermes 导入了存储重写中被移除的 `hermes_state_wal` 模块。该问题当日已由 PR #157837 修复。**使用 holographic 记忆插件的用户升级 v0.23 前应确认插件版本。**
- 链接：Release `v0.23.2+canary.20261119T064637Z`（无独立 Issue/PR 链接）

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 内容 | 意义 |
|---|---|---|
| [#157778](https://github.com/NousResearch/hermes-agent/pull/157778) | 修复 PC 时钟走快时，全新的 Nous 登录被误判为"即将过期"而丢弃（关联 #157720） | 直接影响新用户首次领取免费试用后的可用性，属入门路径阻断性修复 |
| [#157837](https://github.com/NousResearch/hermes-agent/pull/157837) | holographic 记忆插件重新可打开存储（修复 #157818） | 阻止 v0.23 升级导致的记忆数据"丢失"体验 |
| [#157919](https://github.com/NousResearch/hermes-agent/pull/157919) | 放宽 catalog 自更新检查，允许 rom-studio 0.3.0 的已审核编译器下载 | 解除插件生态上架阻塞（配套 #157487） |

**进展评估：** 今日合并/关闭的 17 条 PR 以"止血型"修复为主，集中在升级回归与生态准入两个面。没有涉及新的大型功能落地，项目健康度改善主要体现在**消除阻断性回归**，而非能力扩张。

---

## 4. 社区热点

| 条目 | 评论 | 诉求分析 |
|---|---|---|
| [#145022](https://github.com/NousResearch/hermes-agent/issues/145022) P1 · Kanban workers 在 gateway 卡顿时崩溃（"Kanban execution unknown; retained by owner"） | 28 | **今日最高热度。** 多 worker 并发 + 网关停顿导致 exit code 1，卡被重试但进行中的工作丢失。反映多智能体并发编排下的状态归属（ownership）语义不够健壮，属于会直接损失工作成果的 P1 缺陷，且自 10-26 起持续 3 周+ 仍为 OPEN，**未见关联 fix PR**。 |
| [#55287](https://github.com/NousResearch/hermes-agent/issues/55287) Desktop 可配置聊天宽度（Appearance 设置） | 12 · 👍4 | 今日唯一有明显正反馈（👍）的 Issue。诉求具体、改动面小（调节 `--composer-width`），但自 2026-06-30 创建至今已近 5 个月，处于 `needs-decision`，是典型的**低成本高共鸣但缺决策**项。 |
| [#155595](https://github.com/NousResearch/hermes-agent/issues/155595) profile 创建与生命周期追踪 | 10 | 维护者自建的 handoff 追踪帖，汇总 gateway 归属/恢复、共享 provisioning、凭据、模型继承、clone 安全、Honcho 抽取等剩余工作。说明 profile 体系仍在演进，属**路线图信号**而非用户投诉。 |
| [#147873](https://github.com/NousResearch/hermes-agent/issues/147873) 同一 gateway PID 被同时记为 mapped 与 stopped_unmapped，重启义务永不解除 | 8 | 更新后每次 CLI 调用都打印"未重启 gateway"警告，属**持续性噪音型折磨**，影响所有历经 fleet restart 的用户。 |

---

## 5. Bug 与稳定性（按严重程度）

### P1

- **[#145022](https://github.com/NousResearch/hermes-agent/issues/145022)** · Kanban 多 worker 并发时崩溃，进行中工作丢失。**无 fix PR。**

### P2（影响面明确的正确性/数据问题）

- **[#149057](https://github.com/NousResearch/hermes-agent/issues/149057)** · `context_compression_timeout` 自动重置后，`_CHAIN_STEP_SQL` 只遍历 `compression` 而 `validate_local_lineage` 接受 `session_reset`，导致长期桌面 bot 会话被"搁浅"。**无 fix PR。**
- **[#156593](https://github.com/NousResearch/hermes-agent/issues/156593)** · `df -h` 显示 103 GB 可用但 inode 耗尽（89% 已用），gateway 在 241 字节写入时死亡——现有磁盘检查全部失效。**无 fix PR。**
- **[#147873](https://github.com/NousResearch/hermes-agent/issues/147873)** · 重启义务无法解除（macOS / install-update）。**无 fix PR。**
- **[#148624](https://github.com/NousResearch/hermes-agent/issues/148624)** · `apply_durability_barriers` 每次 guest `state.db` 打开都全量加载 config，多路复用下产生大量 `${env:}` 占位符警告（性能问题）。**无 fix PR。**
- **[#157750](https://github.com/NousResearch/hermes-agent/issues/157750)** · 阿拉伯语 RTL 文本在 desktop / web dashboard 中乱序、片段镜像、内嵌数字反转（双向文本未应用）；**同样文本在 Telegram 等客户端显示正常**。（当日新开）
- **[#157812](https://github.com/NousResearch/hermes-agent/issues/157812)** · 非默认 profile 的会话中，MEDIA 文件卡"下载"返回 404 "Session not found"。（当日新开）
- **[#154960](https://github.com/NousResearch/hermes-agent/issues/154960)** · tui-gateway 变更监听器每次 `state.db` 提交重扫 sessions 表 3–5 次，单次约 115 MB（TEXT 主键 autoindex）。
- **[#137639](https://github.com/NousResearch/hermes-agent/issues/137639)** · `tool_call` 调用已直接列出的工具被拒绝，每次命中浪费一轮迭代。相关修复方向见 [#151931](https://github.com/NousResearch/hermes-agent/pull/151931)（后者针对不同根因，标注 Related）。
- **[#127471](https://github.com/NousResearch/hermes-agent/issues/127471)** · 入站 webhook 拒绝 Hermes 自身的出站签名（`X-Hermes-Signature-256`），导致"唤醒另一个 Hermes 实例"的文档能力实际不可用。
- **[#146546](https://github.com/NousResearch/hermes-agent/issues/146546)** · Bedrock `anthropic_messages` 路径下同时配置 `AWS_PROFILE` 与 `AWS_BEARER_TOKEN_BEDROCK` 导致客户端构建失败。
- **[#157875](https://github.com/NousResearch/hermes-agent/issues/157875)** · `@preset/<slug>` 形式的 OpenRouter 模型永远拿不到 Anthropic prompt caching，因家族子串检查被 preset slug 遮挡（影响计费）。（当日新开）

### P2 · 已有 fix PR

- **[#157818](https://github.com/NousResearch/hermes-agent/issues/157818)** · holographic pin 0.29.2 在 0.23 上不可用（`hermes_state_wal` 已移除）→ **已关闭**，修复由 [#157837](https://github.com/NousResearch/hermes-agent/pull/157837) 提供。

### P3（可用性）

- [#97425](https://github.com/NousResearch/hermes-agent/issues/97425) 桌面实时切换模型后主会话选择器状态残留（👍1）。
- [#154823](https://github.com/NousResearch/hermes-agent/issues/154823) `drive_preview` 在多路复用本地 profile、平铺布局下恒定拒绝。
- [#137491](https://github.com/NousResearch/hermes-agent/issues/137491) 官方安装器在 Node.js 验证阶段因缺少 C++ 符号失败。

---

## 6. 功能请求与路线图信号

**较可能进入近期版本（已有对应实现或高度具体）：**

- **按渠道配置 `reasoning_effort`** — [#157928](https://github.com/NousResearch/hermes-agent/pull/157928) 已提交，复用现有 `channel_overrides` 结构（模型已可按渠道固定），改造成本低、语义一致。**建议关注。**
- **`.env` 密钥在工具输出/日志/聊天回复中统一打码** — [#156844](https://github.com/NousResearch/hermes-agent/pull/156844) 已标 `ci-reviewed`（salvage #144804），安全属性明确，具备合入条件。
- **跨设备会话接管（opt-in takeover）** — [#117321](https://github.com/NousResearch/hermes-agent/pull/117321) 长期在案，目标是保留"单活所有者"默认前提下允许一个对话在设备间跟随。涉及会话状态，标注 `needs-decision` + `sweeper:risk-session-state`。

**生态侧（catalog 扩张）：**

- [#154152](https://github.com/NousResearch/hermes-agent/pull/154152) 新增记忆类 provider **memrack** v0.11.1（社区，首次收录，ci-reviewed）
- [#154007](https://github.com/NousResearch/hermes-agent/pull/154007) 新增 **swarm-studio** 插件 0.3.0（ci-reviewed）
- [#157487](https://github.com/NousResearch/hermes-agent/pull/157487) **rom-studio** 升至 0.3.0
- [#157892](https://github.com/NousResearch/hermes-agent/pull/157892) 新增 **iteration-budget**（暴露每轮工具调用迭代预算）

**用户提出但尚无实现：**

- [#55287](https://github.com/NousResearch/hermes-agent/issues/55287) 桌面聊天宽度设置（👍4，最积极的用户信号，卡在决策）

---

## 7. 用户反馈摘要

**真实痛点（高频、跨条目）：**

1. **升级与重启体验** — #147873 的"重启义务永不解除"让每次 CLI 调用都伴随警告；#157818 的 v0.23 升级直接导致记忆插件不可用。用户对**升级路径的信任**是当前最脆弱环节。
2. **多表面/多 profile 的一致性** — #157812（非默认 profile 下载 404）、#154823（多路复用下 preview 恒定拒绝）、#97425（切换模型后选择器残留）、#117321（会话在设备间无法跟随）共同指向：surface/profile/session 三者的归属模型对用户不够透明，错误信息也不解释"谁持有"（#157926 正是在改这段措辞）。
3. **并发编排的工作丢失** — #145022 中用户明确描述"卡被重试，但本次运行的进行中工作丢失"，是多智能体场景下最不可接受的失败模式。
4. **资源检查的盲区** — #156593 的 inode 耗尽案例说明用户会在`df -h` 显示充裕时遭遇写入失败，且无任何预警。
5. **国际化缺口** — #157750 用户特别指出同一段阿拉伯语在 Telegram 正常、在桌面/web 面板乱序，说明问题定位清晰、修复预期明确。

**满意度信号：** 今日唯一带 👍 的条目为 #55287（聊天宽度，4 赞），说明用户对**低摩擦的界面可调性**有明确偏好；此外 #55287、#97425 等条目均以"聚焦的后续项"方式被认真复现，反映社区报告质量较高。

**不满/挫败信号：** #145022（28 条评论、跨 3 周未修）、#147873（每次调用都被警告）属于重复暴露的挫败点。

---

## 8. 待处理积压（提请维护者关注）

| 条目 | 创建 | 停留时长 | 状态与风险 |
|---|---|---|---|
| [#55287](https://github.com/NousResearch/hermes-agent/issues/55287) Desktop 聊天宽度 | 2026-06-30 | 约 4.7 个月 | `needs-decision`；今日最高赞（👍4），改动面小，决策成本与用户收益比极佳 |
| [#117321](https://github.com/NousResearch/hermes-agent/pull/117321) 跨设备会话接管 | 2026-09-20 | 约 2 个月 | `needs-decision` + `risk-session-state`，需架构决策 |
| [#127471](https://github.com/NousResearch/hermes-agent/issues/127471) 入站 webhook 拒绝自身签名 | 2026-09-29 | 约 1.7 个月 | 文档承诺的能力实际不可用，且涉及 `risk-message-delivery` |
| [#137639](https://github.com/NousResearch/hermes-agent/issues/137639) 直接列出的工具被 `tool_call` 拒绝 | 2026-10-13 | 约 1.2 个月 | 每次命中浪费一轮迭代，属**持续性 token/时延浪费**，性价比高 |
| [#137491](https://github.com/NousResearch/hermes-agent/issues/137491) 安装器 Node.js C++ 符号缺失 | 2026-10-12 | 约 1.2 个月 | 阻断首次安装，`sweeper:risk-compatibility` |
| [#145022](https://github.com/NousResearch/hermes-agent/issues/145022) Kanban 崩溃 | 2026-10-26 | 约 3.4 周 | **P1 且零 fix PR**，今日热度第一，建议优先分配 |
| [#154152](https://github.com/NousResearch/hermes-agent/pull/154152) / [#154007](https://github.com/NousResearch/hermes-agent/pull/154007) catalog 新条目 | 2026-11-11 | 约 8 天 | 均 `ci-reviewed`，等待合入以解锁生态上架 |

---

### 健康度小结

| 维度 | 评价 |
|---|---|
| 吞吐 | 高——单日 50 Issue + 50 PR 流动 |
| 修复响应 | 良好——当日发现的升级回归（#157818）当日有修复 PR 并关闭 |
| 高危积压 | **需关注**——P1（#145022）3 周+ 无 fix PR；多项 P2 会话/网关问题（#149057、#147873、#156593）同样无修复 |
| 发布治理 | 待改善——canary 发布说明未附变更日志，用户只能从 Issue 反推升级风险 |
| 社区信号利用 | 待改善——最高赞 Issue（#55287）长期停留 `needs-decision` |

*注：以上所有标题、编号、作者、日期、评论数、标签均直接取自所提供的 GitHub 数据；未提供的指标（如下载量、PR 评论数、合入时间）不作推断。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-19）

## 1. 今日速览

今日项目**Issue 侧完全静默**（0 条新开/活跃/关闭），但 PR 侧有 **7 条集中关闭**，全部为已合并/关闭状态，无待合并 PR、无新版本发布。活跃度评估：**低—代码通道单边运转**。今日关闭的 PR 主要以历史积压的批量合并（backlog merge）与 CI 治理为主，另含上游同步和两处功能性修复（工具调用解析、WebSocket 鉴权），说明维护者正在做"清库存"而非推进新特性。

## 2. 版本发布

今日无新版本发布（Releases 为 0），本节省略。

## 3. 项目进展

今日关闭 7 条 PR，可归为四类：

**（a）积压 PR 批量合并（3 条，同一作者）**
- #1560 [CLOSED] fix: merge PR #1312 #1311 #1308 — xuwei-xy
  sipeed/picoclaw PR #1560
- #1555 [CLOSED] fix: merge PR #1390 #1389 #1383 #1381 — xuwei-xy
  sipeed/picoclaw PR #1555
- #1551 [CLOSED] fix: merge PR #1428 #1422 #1417 — xuwei-xy
  sipeed/picoclaw PR #1551
  三条 PR 创建于 2026-03-14，今日集中关闭，属于将多个早期 open PR 打包合入的清理动作，共牵涉至少 10 个早期 PR 编号。

**（b）CI 治理**
- #2516 [CLOSED] chore(ci): disable scheduled sync-rebase trigger — sushi30
  sipeed/picoclaw PR #2516
  移除 sync-rebase 工作流的每日 `0 0 * * *` 定时触发，仅保留 `workflow_dispatch` 手动运行。降低自动化噪声与失败面。

**（c）上游同步**
- #2810 [CLOSED] Sync with upstream/main (1095 commits) + forward-port magicform customizations — nuestraai
  sipeed/picoclaw PR #2810
  合并约 1095 个上游 commit（上次同步点 `7ea7bb0`），并将 6 个定制 commit 前向移植到上游重构后的布局（agent loop 拆分为 `agent_*.go`、tools 重组）。这是一次规模较大的下游 fork 对齐。

**（d）功能性修复**
- #586 [CLOSED] feat: Improve tool call extraction and stripping — RahulChand028
  sipeed/picoclaw PR #586
  实现状态感知的 `findMatchingBrace` 扫描器，加固工具调用解析以支持复杂模型输出（标签含 `type: bug, domain: provider`）。
- #2363 [CLOSED] Fix WebSocket authentication and standardize header casing — nglmercer
  sipeed/picoclaw PR #2363
  修复 WebSocket 鉴权并统一 header 大小写（标签含 `type: bug, domain: channel`），自述为"mostly AI-generated, human verified"。

**整体推进判断**：今日进展主要体现为**债务清理与稳定性修补**，无新功能交付；实质性能力提升集中在 #586（provider 侧解析健壮性）与 #2363（channel 侧鉴权）。

## 4. 社区热点

今日**无评论数与点赞数据可参考**（数据中评论数为 `undefined`、点赞均为 0），Issue 区无任何讨论。因此不存在可量化的讨论热点。

按更新时序与影响面看，最值得关注的是 **#2810**（1095 commits 上游同步），其跨版本跨度最大，但并非社区讨论驱动，而是下游维护方的主动对齐。

链接：
- sipeed/picoclaw PR #2810
- sipeed/picoclaw PR #586
- sipeed/picoclaw PR #2363

## 5. Bug 与稳定性

今日**无新报告的 Bug、崩溃或回归 Issue**（Issues 更新为 0）。今日关闭的两条 bug 类 PR 属于已修复项：

| 严重度判断依据 | PR | 领域 | 状态 |
|---|---|---|---|
| 中—高（鉴权与通道连通性） | #2363 WebSocket authentication + header casing | channel | 已关闭（fix 已提交） |
| 中（模型输出解析健壮性，影响工具调用） | #586 工具调用提取/剥离加固 | provider | 已关闭（fix 已提交） |

两者均随 PR 关闭而落地，无遗留未修复缺陷记录。需注意 #2363 为 AI 生成草稿、人工验证修改，建议在发布前补充针对性回归测试。

## 6. 功能请求与路线图信号

今日**无用户新提出的功能请求**（Issue 区为空）。仅能从已关闭 PR 推断维护方向：

- **provider 层鲁棒性**：#586 对复杂模型输出做状态感知解析，暗示后续版本可能继续强化多模型兼容。
- **channel 层通信规范**：#2363 统一 header casing 与鉴权，指向网关/协议一致性。
- **下游 fork 兼容性**：#2810 前向移植显示 agent loop 与 tools 目录已被上游重构，下游定制可能持续承压。

以上均为**工程信号而非路线图承诺**，无证据表明已纳入下一版本，请以官方发布说明为准。

## 7. 用户反馈摘要

今日 Issues 评论为 0，**无可提炼的用户痛点、使用场景或满意度反馈**。为避免臆测，本报告不对此部分作任何推断。

## 8. 待处理积压

- **无待合并 PR**（今日 7 条均已完成关闭），PR 队列当前为空。
- **Issue 积压**：数据未提供长期未响应的 Issue 列表，无法识别具体存量。
- **需维护者留意的流程性问题**：#1560 / #1555 / #1551 的"打包合并"模式（创建于 2026-03-14、集中至 2026-11-19 才关闭）反映早期 PR 清理周期过长，建议建立定期 triage 机制，避免同类积压再次形成。
- **#2810 的上游同步节奏**：上次同步点为 `7ea7bb0`，本次一次引入约 1095 个 commit，跨度过大将放大下游前向移植成本，建议缩短同步周期。

---

*说明：本报告仅基于所提供数据生成；评论数缺失（`undefined`）、无 Issue 内容、无 Release 详情，故相关分析从简。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报（2026-11-19）

## 1. 今日速览

NanoClaw 今日处于高活跃维护状态：过去 24 小时共 35 条 Issue/PR 有更新，其中 Issue 关闭 10 条、PR 合并/关闭 8 条，关闭比例高于新开，积压呈收敛趋势。当日无新版本发布，v2026.11.0-rc.2 仍处于候选阶段。工作重心集中在 `update-nanoclaw` 更新切换流程、setup/安装健壮性以及 Codex/OneCLI 提供方集成，另有若干安全加固类 Issue 集中关闭。值得注意的风险是：多条 Issue 报告了"先停服务后失败"这类破坏性升级路径问题，且新的 `update` 相关 Bug 仍在持续被发现（今日新开 6 条中 4 条与 update/setup 相关）。整体健康度：中等偏上，修复响应快，但更新路径的可靠性仍是薄弱环节。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 主要推进了以下方向：

- **Codex 登录流程重构**：PR #4455（已关闭）让 Codex ChatGPT 登录通过 `pnpm dlx` 使用锁定版本的 Codex CLI，不再要求宿主机全局安装 CLI，也不再产生 `/tmp` 警告；PR #4477（已关闭）进一步修复 Linux 下删除旧登录目录时的安全判断。对应关闭 Issue #3791、#4449、#4476。这是今日推进最完整的一条链路。
  https://github.com/nanocoai/nanoclaw/pull/4455
  https://github.com/nanocoai/nanoclaw/pull/4477
- **OneCLI 安全加固**：PR #4471（已关闭）为 #4439 补充三项后续：显示被拒绝的数据库密码轮换、阻止 `~/.onecli` 挂载等。对应关闭 Issue #4472、#4473。
  https://github.com/nanocoai/nanoclaw/pull/4471
- **Setup 输出体验**：PR #4453（已关闭）让非 Claude 提供方安装后的镜像重建复用首轮进度窗口，不再刷屏 Docker 全量输出，关闭 Issue #4447。
  https://github.com/nanocoai/nanoclaw/pull/4453
- **文档修复**：Issue #4474（Ollama 缓存代理示例监听 `0.0.0.0` 且无认证）已关闭。

总体进展评估：今日以"issue→fix PR→关闭"的短闭环为主，闭环效率较高，但多数改动属于体验与加固层，尚无面向新能力的重大特性落地。

## 4. 社区热点

今日数据中评论数普遍为 0 或 1，未出现高热度讨论线程；`👍` 计数均为 0。相对值得关注的条目：

- **#4475 [OPEN] 智能体组会话共享 transcript、笔记与内存的读写权限**（作者 singhravi1979，非核心团队提交）——涉及会话级隔离边界的加固诉求，是今日少数来自外部贡献者的安全类反馈。
  https://github.com/nanocoai/nanoclaw/issues/4475
- **#4478 [OPEN] update 切换时先停服务、杀智能体，之后才检查快照磁盘空间**（1 条评论，已有修复 PR #4484）——讨论指向同一核心诉求：破坏性操作前的预检顺序。
  https://github.com/nanocoai/nanoclaw/issues/4478
- **PR #4468 [OPEN] 新增 `add-imessage-summaries` 技能**（作者 aaronpdoherty）——外部贡献者提出让智能体组以摘要形式跟进指定 iMessage 会话、消息不进入容器也不离开 Mac，反映社区对"本地数据、最小暴露"型集成有明显兴趣。
  https://github.com/nanocoai/nanoclaw/pull/4468

诉求分析：社区关注点已从"能不能用"转向"升级是否安全、数据边界是否清晰、本地隐私是否可保证"。

## 5. Bug 与稳定性

按严重程度排列：

**高（可能造成服务中断或数据/权限风险）**

- **#4478** update 切换在停止服务并杀死智能体之后才检查快照磁盘空间，失败即处于服务已停状态。已有 fix PR **#4484**（OPEN）。
  https://github.com/nanocoai/nanoclaw/issues/4478
- **#4479** update 快照会复制 `groups/` 下智能体构建的 `node_modules` 与包缓存，可能显著放大快照体积。**暂无 fix PR**。
  https://github.com/nanocoai/nanoclaw/issues/4479
- **#4475** 同一智能体组的所有会话以读写方式共享同一 group 目录与 per-group 记忆，隔离不足。**暂无 fix PR**。
  https://github.com/nanocoai/nanoclaw/issues/4475

**中（功能缺失或行为错误）**

- **#4482** WhatsApp 群内智能体 reaction 不显示，react key 缺少 participant。**暂无 fix PR**。
  https://github.com/nanocoai/nanoclaw/issues/4482
- **#4486** setup 步骤运行器在无法打开原始日志时崩溃（`spawnQuiet`/`spawnStep` 中 `fs.createWriteStream`）。**暂无 fix PR**。
  https://github.com/nanocoai/nanoclaw/issues/4486
- **#4480** `update-nanoclaw` 技能要求展示 prepare 结果中并不存在的 upstream 提交与文件分桶信息。**暂无 fix PR**。
  https://github.com/nanocoai/nanoclaw/issues/4480
- **#4476** Codex 登录会删除 Linux 上进程可能仍在使用的旧登录目录。已由 **#4477** 修复并关闭。
  https://github.com/nanocoai/nanoclaw/issues/4476

**低（开发体验）**

- **#4481** pre-commit 钩子在未暂存 `.ts` 文件时仍对全量 `src/` 运行 prettier。**暂无 fix PR**。
  https://github.com/nanocoai/nanoclaw/issues/4481

**今日已修复关闭**：#3791、#4428、#4452、#4449、#4447、#4472、#4473、#4474、#4476、#4482。

## 6. 功能请求与路线图信号

- **iMessage 摘要技能**：PR #4468 提出以摘要方式跟进 iMessage 线程、消息不出本机。属于新增 channel/技能能力，若通过评审，可能进入下一版本。
  https://github.com/nanocoai/nanoclaw/pull/4468
- **新装跟随克隆分支**：PR #4084（OPEN，自 2026-10-13 起）让新安装跟随克隆来源分支的更新通道，setup 不再询问也不再移动 checkout。
  https://github.com/nanocoai/nanoclaw/pull/4084
- **openSUSE 与非 Debian 发行版安装支持**：PR #4483（OPEN）让 `install-node.sh` 支持 openSUSE，并在其他非 Debian 发行版上给出明确失败信息。信号是跨发行版可安装性需求上升。
  https://github.com/nanocoai/nanoclaw/pull/4483
- **Telegram 话题路由**：PR #3971（OPEN）将论坛超级群与私聊话题作为 thread 路由，支持 per-thread 会话。
  https://github.com/nanocoai/nanoclaw/pull/3971

判断：iMessage 摘要与跨发行版安装若评审顺利，最有可能在下一版本落地；#4084、#3971 已积压较久，需维护者明确取舍。

## 7. 用户反馈摘要

- **升级路径是最大痛点**：多条 Issue 明确指出 update 流程在破坏性操作之后才做检查（#4478），以及快照范围过大（#4479）、技能与后端返回字段不一致（#4480）。用户诉求是"先校验、再执行，失败可回退"。
- **初次安装体验**：非 Debian 发行版用户卡在 NodeSource Debian 安装脚本（#4483 描述）；setup 阶段仍会出现日志刷屏（#4447 已修）与 polkit 报错污染进度行（#4428 已修）。
- **安全默认值受关注**：外部贡献者提交的 #4475 与已关闭的 #4474、#4472、#4473 均指向默认配置的暴露面，用户希望"默认安全"而非依赖手工加固。
- **本地隐私偏好**：PR #4468 的描述强调消息不进入容器、不离开 Mac，符合部分用户对本地化处理的明确偏好。

## 8. 待处理积压

- **PR #4084**（2026-10-13 创建，OPEN）：新装跟随克隆分支。已积压约 5 周，涉及安装语义变更，需维护者决策。
  https://github.com/nanocoai/nanoclaw/pull/4084
- **PR #3971**（2026-09-30 创建，OPEN）：Telegram 论坛/私聊话题线程路由。已积压约 7 周，属渠道层功能，长期未合并可能影响渠道一致性问题修复。
  https://github.com/nanocoai/nanoclaw/pull/3971
- **PR #3322**（2026-08-18 创建，今日关闭）：`/add-youdotcom-tool` 技能，历时约 3 个月后关闭，建议复盘评审周期。
  https://github.com/nanocoai/nanoclaw/pull/3322
- **PR #4289**（2026-11-06 创建，OPEN，core-team，area/agent-runner / area/core）：修复存储上下文在命令处于 pending 时误启动 turn，已近两周未合，属核心运行器逻辑，建议优先推进。
  https://github.com/nanocoai/nanoclaw/pull/4289
- **PR #4434**（2026-11-17 创建，OPEN）：OneCLI 网关就绪检查失败时 setup 应非零退出，与今日已合并的 #4471 同属 OneCLI 加固簇，建议合并评审。
  https://github.com/nanocoai/nanoclaw/pull/4434
- **PR #4469**（2026-11-18 创建，OPEN）：允许挂载点设为可写（bug #4150），涉及容器安全默认值，需谨慎评审。
  https://github.com/nanocoai/nanoclaw/pull/4469

另注：今日有两条镜像刷新机器人 PR（#4485、#4470）同时处于开放状态，指向不同的 hardened image 摘要，建议维护者确认保留哪一条以避免引用歧义。

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

# LobsterAI 项目日报 — 2026-11-19

## 1. 今日速览

今日项目呈现“以性能收口为主、安全反馈启动”的典型状态：Issues 仅 1 条新开，PR 侧 50 条全部关闭/合并、零待合并，说明维护者的清理节奏明显快于新增输入。关闭的 PR 高度集中在 OpenClaw 网关启动性能与打包体积优化（routing 到 `area: openclaw` 占多数），另有 renderer 层交互修复与 Mac 打包隔离。唯一新 Issue 指向官方 youdaonote skill 的 API Key 明文传递问题，属凭据安全范畴，需优先响应。整体健康度良好，但需关注“输入少、输出多”是否掩盖了版本发布缺位（今日 0 release）。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日 50 条 PR 全部关闭/合并，无待合并项，推进主线为 **OpenClaw 网关启动性能治理**：

- **请求体积削减**：#3029 启用 OpenClaw Tool Search（目录模式），将每次请求的工具 schema 从 68 个工具、约 106k 字符（首请求基线约 45k tokens）压缩至仅核心工具，属本次最大幅度的成本优化。[PR #3029](https://github.com/netease-youdao/LobsterAI/pull/3029)
- **启动扫描剪枝**：#2996 仅打包白名单 skill，解决 Windows 上 51 个 skill + 4 个 custodian skill 每次启动全量 `fs.access` 检查（占启动耗时约 75%）的问题。[PR #2996](https://github.com/netease-youdao/LobsterAI/pull/2996)
- **Windows 极端场景修复**：#2987 改为原生加载 Windows 插件并缓存 realpath，针对装有 360 安全卫士的机器上网关启动达 170–250s 的同步元数据阻塞问题。[PR #2987](https://github.com/netease-youdao/LobsterAI/pull/2987)
- **启动链路串行点消除**：#3000 将网关 ready 到客户端握手的 2.3–2.7s 拆解优化；#2997 以原生方式读取 Windows 进程启动时间，替代每次启动 6 次同步 PowerShell 调用；#3001 在 dreaming 关闭时跳过启动清理；#3066 按需启用 xai 插件并缩小 dist 包；#3011 随网关包附带 `build-info.json` 以稳定启动迁移检查点。[#3000](https://github.com/netease-youdao/LobsterAI/pull/3000) [#2997](https://github.com/netease-youdao/LobsterAI/pull/2997) [#3001](https://github.com/netease-youdao/LobsterAI/pull/3001) [#3066](https://github.com/netease-youdao/LobsterAI/pull/3066) [#3011](https://github.com/netease-youdao/LobsterAI/pull/3011)
- **上下文精简**：#3085 裁剪受管 `AGENTS.md` 中重复/未使用段落，因该文件随每次模型请求发送，直接节省冷启动 token。[PR #3085](https://github.com/netease-youdao/LobsterAI/pull/3085)
- **交互与打包**：#3121 首页图片示例默认折叠；#3119 修复 PPT 示例弹窗在 Windows 下关闭按钮点击失效并明确受众输入；#2948 按目标架构隔离 Mac skill 依赖。[#3121](https://github.com/netease-youdao/LobsterAI/pull/3121) [#3119](https://github.com/netease-youdao/LobsterAI/pull/3119) [#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)
- **联网能力修正**：#3043 让 web-search 在应用内浏览器模式走带认证的本地桥接端口，独立模式保留 Playwright/Chrome，并探测 Fake-IP DNS 与 TUN 网卡。[PR #3043](https://github.com/netease-youdao/LobsterAI/pull/3043)

总体判断：本轮改动多为累积多日的性能 PR 集中合入（多为 11 月初创建），项目在“启动速度、请求 token 成本、Windows 兼容性”三条线上有实质推进。

## 4. 社区热点

今日数据中所有 PR 的评论数均缺失（`undefined`），无高评论条目可排序；唯一有评论记录的是 Issue #3120（1 条评论）。

- [#3120 youdaonote：API Key 以明文命令行参数传递，安装脚本缺少版本与校验](https://github.com/netease-youdao/LobsterAI/issues/3120)（1 条评论，👍 0）

诉求分析：报告者并非泛泛质疑，而是精确指出 `SKILL.md:18` 要求 Agent 执行 `youdaonote config set apiKey <Key>`，导致明文 Key 同时暴露于模型上下文、命令行参数、shell 历史与进程列表，并指出 `SKILL.md:57`、`SKILL.md:152` 的示例沿用同一形式。其核心论点是“对官方 skill 而言，这是当前主要凭据暴露面”。这反映用户对 Agent 生态中 **skill 作者需承担凭据处理规范责任** 的意识正在提升。

## 5. Bug 与稳定性

今日无崩溃或回归类报告，仅 1 条安全类 Issue，按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 高（凭据泄露面） | #3120 API Key 以明文命令行参数传递至 youdaonote skill；安装脚本缺版本与校验 | OPEN，1 条评论 | 未见对应 fix PR |

建议处理方向（基于报告内容）：改用环境变量或交互式输入替代命令行参数、同步清理 `SKILL.md` 中两处示例、为安装脚本补充版本锁定与校验值。当前无 fix PR，属本次唯一需要跟踪的未闭环安全项。

## 6. 功能请求与路线图信号

今日无独立功能请求类 Issue。结合已合入 PR 与唯一新 Issue，可判断以下方向可能进入下一版本：

- **Skill 凭据处理规范**：#3120 提出的问题若被采纳，可能催生通用的 skill 密钥管理机制（环境变量/密钥存储），并影响其它官方 skill 的文档模板——概率较高，因其为官方 skill 且暴露面明确。
- **工具目录按需加载**：#3029 的 Tool Search 目录模式属架构级改动，后续可能扩展为按会话/任务动态选择工具集。
- **应用内浏览器统一联网通道**：#3043 已建立带认证的本地桥接端口，后续 web_fetch 类能力可能进一步收敛到该通道。

## 7. 用户反馈摘要

由于仅 #3120 一条 Issue 且有 1 条评论，反馈样本有限，仅能提炼以下真实痛点：

- **痛点**：Agent 执行 skill 命令时，用户提供的敏感凭据被写入命令行，用户担忧其出现在 shell 历史与进程列表（可被同机其它进程读取）。
- **使用场景**：用户通过 Agent 配置第三方笔记服务（youdaonote）的 API Key。
- **不满意处**：官方 skill 文档示例本身示范了不安全的传参方式，且安装脚本缺少版本与校验，难以验证来源与完整性。
- 今日无正面满意度反馈数据可引用。

## 8. 待处理积压

今日关闭的 PR 中存在多条长期挂起项，虽已闭环，但反映出评审周期偏长，提醒维护者关注后续节奏：

- [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729)（2026-09-21 创建，今日关闭，约 59 天）：Windows 网关退出恢复与一键修复。
- [#2867](https://github.com/netease-youdao/LobsterAI/pull/2867)（2026-10-14 创建，约 36 天）：限制影视与音乐搜索仅返回基础信息。
- [#2948](https://github.com/netease-youdao/LobsterAI/pull/2948)（2026-10-28 创建，约 22 天）：Mac skill 依赖按架构隔离。
- [#2987](https://github.com/netease-youdao/LobsterAI/pull/2987)、[#2996](https://github.com/netease-youdao/LobsterAI/pull/2996)、[#2997](https://github.com/netease-youdao/LobsterAI/pull/2997)、[#3000](https://github.com/netease-youdao/LobsterAI/pull/3000)、[#3001](https://github.com/netease-youdao/LobsterAI/pull/3001)（11 月初创建，约 14–16 天）：均属性能线，批量合入前堆积时间较长。

当前无“长期未响应且仍开启”的 Issue/PR 可供列出；需持续关注的是 OPEN 状态的 #3120 是否获得维护者回应。

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

# CoPaw 项目日报 — 2026-11-19

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) 当日 GitHub 数据；Issue/PR 正文中出现的仓库链接统一显示为 `agentscope-ai/QwenPaw`，本报告沿用原始链接文本。

## 1. 今日速览

- **活跃度：高。** 过去 24 小时 Issues 更新 23 条（新开/活跃 11、已关闭 12），PR 更新 30 条（待合并 22、已合并/关闭 8），无新版本发布。
- **稳定期。** 当前主线为 v2.3.0.post1，今日无 release，讨论集中于升级后的回归问题与渠道（QQ / 飞书 / 钉钉 / 小艺）可用性。
- **修复节奏健康。** 多个新报 Bug 在当日即出现对应 fix PR（#8823、#8824、#8825），说明维护者响应速度快。
- **风险点。** 待合并 PR 达 22 条，其中 #8472、#8469、#8499 等大型（XL/XXL/XXXL）改动已挂起数周，评审带宽可能成为瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭 8 条 PR（具体清单未逐条披露），其中可确认的推进包括：

- **CJK Markdown 渲染修复进入评审**：PR #8823 收窄修复范围，配合 #8133（中文强调边界解析）https://github.com/agentscope-ai/QwenPaw/pull/8823
- **运行配置降级路径**：PR #8825 在 provider 被禁用时回落到全局默认模型，直接对应 Issue #8579 的通道报错 https://github.com/agentscope-ai/QwenPaw/pull/8825
- **移动端安全区适配**：PR #8824 修复全屏容器被系统状态栏遮挡 https://github.com/agentscope-ai/QwenPaw/pull/8824

总体判断：今日进展以**回归修复与体验打磨**为主，未见能力型大功能合入；项目处于 2.3.0 后的稳定化阶段。

## 4. 社区热点

| 条目 | 评论 | 链接 |
|---|---|---|
| Issue #8811 窄屏消息文字被裁剪、表格/代码块无法横向滚动 | 5 | https://github.com/agentscope-ai/QwenPaw/issues/8811 |
| Issue #8815 定时任务会话在执行完成前不显示消息（已关闭） | 3 | https://github.com/agentscope-ai/QwenPaw/issues/8815 |
| Issue #8700 DoomLoopGate 在 agentscope 合并回复为单条 assistant 消息时永不触发（已关闭） | 3 | https://github.com/agentscope-ai/QwenPaw/issues/8700 |
| Issue #6952 工具 schema 排序不定导致 prefix cache 失效（性能） | 3 | https://github.com/agentscope-ai/QwenPaw/issues/6952 |
| Issue #8475 QQ 渠道 `enabled` 在配置重载后被静默重置 | 3 | https://github.com/agentscope-ai/QwenPaw/issues/8475 |

**诉求分析：**
- 窄屏/移动端体验是当日最集中的抱怨点（#8811、#8796、#8824、#8685），用户已把 CoPaw 当作日常移动端使用工具。
- 渠道可靠性问题（QQ、飞书、钉钉、小艺）持续消耗用户信任，**静默失败**（无日志、无提示）是被反复批评的模式。
- 性能类诉求（prefix cache、长会话切换无响应）指向"长期使用后的可用性"，而非首次体验。

## 5. Bug 与稳定性

按严重程度排序：

**高**
- **#8579** 禁用 provider 后 agent 运行配置仍指向旧模型，所有通道抛 `ProviderError: Provider is disabled`，飞书侧仅显示 "Internal error"，无降级。→ **已有 fix PR #8825**
  https://github.com/agentscope-ai/QwenPaw/issues/8579
- **#8513（已关闭）** 安全缺口：SMTP 发送 / HTTP POST / @file-to-network 等外向型 shell 命令在 AUTO/SMART 审批级别下不被 tool_guard 与治理层拦截。
  https://github.com/agentscope-ai/QwenPaw/issues/8513
- **#8475** QQ 渠道 `enabled` 在配置重载/重启后被静默置为 false，消息收发全断且无告警日志。
  https://github.com/agentscope-ai/QwenPaw/issues/8475

**中**
- **#8811** v2.3.0 → v2.3.0.post1 升级后窄屏文字被裁剪、超宽内容无法横向滚动。→ **已有 fix PR #8823**
  https://github.com/agentscope-ai/QwenPaw/issues/8811
- **#8812** 升级至 2.3.0.post1 后 `startup_diagnostic` 刷屏 WARNING，钉钉/飞书渠道默认不可用需手动更新。
  https://github.com/agentscope-ai/QwenPaw/issues/8812
- **#8796** 移动端全屏容器渲染至系统状态栏下方（安全区缺失）。→ **已有 fix PR #8824**
  https://github.com/agentscope-ai/QwenPaw/issues/8796
- **#8313（已关闭）** 2.2.2 上 QQ 群消息被静默丢弃：网关派发 `GROUP_MESSAGE_CREATE`，而 `_MESSAGE_EVENT_SPECS` 仅识别 `GROUP_AT_MESSAGE_CREATE`。
  https://github.com/agentscope-ai/QwenPaw/issues/8313

**低 / 已关闭**
- **#8815** 定时任务会话在执行完成前不显示任何消息与进度（已关闭）
  https://github.com/agentscope-ai/QwenPaw/issues/8815
- **#8394** 小艺渠道长回合内无工作状态帧，WS 静默断开（已关闭）
  https://github.com/agentscope-ai/QwenPaw/issues/8394
- **#8627** Windows 长路径前缀导致 Checkpoint 服务失败、微信渠道卡在 `DEPENDENCY_ENVIRONMENT_AMBIGUOUS`（已关闭）
  https://github.com/agentscope-ai/QwenPaw/issues/8627
- **#8700** DoomLoopGate 失效（已关闭）
  https://github.com/agentscope-ai/QwenPaw/issues/8700

**观察：** 今日 3 个新报 Bug 均已在同日获得对应 PR，回归修复链路闭环良好；但"静默失败无日志"在多条 Issue 中重复出现，属于系统性可观测性缺口。

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关 PR | 纳入可能性 |
|---|---|---|---|
| Windows 原生系统通知（任务结束提醒） | #8821 | 未见 | 中：实现成本低，与桌面端定位契合 |
| Rapid-MLX 本地 OpenAI 兼容 provider 预设（Apple Silicon） | #8826 | 未见 | 中：范围聚焦，作者主动询问是否欢迎 |
| QQ 渠道流式输出 | #6421 / #8307（均已关闭） | 未见 | 待观察：官方 API 已支持，关闭原因未披露 |
| Console UI/UX 系统性重构（统一组件、小屏适配、模型配置联动） | #8817 | #8685（响应式输入控件） | 中：与已有 #8685 部分重叠，完整重构成本高 |
| 统一的存储清理页面 | #6593（已关闭） | 未见 | 待观察 |
| 服务端部署的轻量代理客户端 | #7002（已关闭） | 未见 | 低：架构改动大 |
| browser_use 支持远程 Playwright 端点 | #4617（已关闭） | 未见 | 待观察 |

同时，待合并 PR 中包含若干显著能力增量，可能定义下一版本方向：

- **PR #8472** 重排模型中心（含服务测试、多查询精度历史与自动校验）https://github.com/agentscope-ai/QwenPaw/pull/8472
- **PR #8499** 将本地模型管理抽为插件 Provider https://github.com/agentscope-ai/QwenPaw/pull/8499
- **PR #8469** 将 MCP 抽为插件 https://github.com/agentscope-ai/QwenPaw/pull/8469
- **PR #8719** 运行时 base-path 部署支持 https://github.com/agentscope-ai/QwenPaw/pull/8719
- **PR #8819** 可配置的后续问题建议（follow-up suggestions）https://github.com/agentscope-ai/QwenPaw/pull/8819
- **PR #8707** 将 cron / heartbeat 的 token 用量写入 turn records https://github.com/agentscope-ai/QwenPaw/pull/8707

插件化（#8469、#8499）与可观测计费（#8707）组合起来，方向指向"核心瘦身 + 可扩展"。

## 7. 用户反馈摘要

**痛点：**
- **窄屏体验差是共性抱怨**：#8817 直言 "对小屏幕适配很差，大量的组件不对齐，重叠，布局异常"，风格与圆角不统一，长会话切换点击无响应、无加载动画。
- **配置项分散**：用户指出记忆向量、重排模型需在各 agent 内单独配置，而非从模型配置页统一选择。
- **渠道静默失效**：QQ 群消息丢失（#8313）、QQ `enabled` 被重置（#8475）、飞书报错无信息量（#8579）、小艺无状态帧（#8394）——共同特征是用户难以自行定位原因。
- **存储膨胀**：#6593 反馈自动记忆与工具调用产生大量数据，长期使用后空间占用失控，且删除会话时无法连带删除工作区目录。

**使用场景：** 移动端浏览器（375px 视口）日常使用；飞书 / 钉钉 / 企微 / 微信 / QQ 多通道接入；定时任务后台运行；Apple Silicon 本地推理；服务器部署 + 个人设备代理。

**满意处（间接证据）：** 用户持续在升级后第一时间反馈回归（v2.3.0 → post1），并给出完整环境与复现步骤，说明核心功能已具备日常依赖度；多条 Enhancement 以"希望进一步"而非"无法使用"的措辞提出。

## 8. 待处理积压

| 条目 | 类型 | 已挂起 | 说明 |
|---|---|---|---|
| #6952 prefix cache 不稳定（工具 schema 排序 + env_context 交错） | perf | 2026-08-12 起，约 3 个月 | 影响每轮推理成本，长期未解决 https://github.com/agentscope-ai/QwenPaw/issues/6952 |
| #8475 QQ 渠道 enabled 静默重置 | bug（高） | 2026-10-28 起 | 无 fix PR，影响渠道可用性 https://github.com/agentscope-ai/QwenPaw/issues/8475 |
| #8579 provider 禁用残留配置 | bug（高） | 2026-11-04 起 | 已有 PR #8825，待评审合入 |
| #8469 MCP 插件化（XXXL） | refactor | 2026-10-28 起 | 大型重构，评审成本高 https://github.com/agentscope-ai/QwenPaw/pull/8469 |
| #8472 重排模型中心（XXL） | feat | 2026-10-28 起 | 已 Under Review，等待评审带宽 https://github.com/agentscope-ai/QwenPaw/pull/8472 |
| #8499 本地模型管理插件化（XXXL） | feat | 2026-10-29 起 | 同上 https://github.com/agentscope-ai/QwenPaw/pull/8499 |
| #8308 补缺失 provider 返回 404 的测试 | test | 2026-10-18 起 | 小改动长期未合，测试债 https://github.com/agentscope-ai/QwenPaw/pull/8308 |

**提示维护者：** 待合并 PR 中 4 条为 XL 及以上规模，且均在 Under Review 或 OPEN 状态超过 2 周。建议明确评审排期或拆分合入；#8475 与 #6952 属无 PR 的高影响长期问题，应优先排期。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-11-19

## 1. 今日速览

项目今日处于高活跃、高积压状态：过去 24 小时 15 条 Issue 更新（13 条新开/活跃、2 条关闭）、50 条 PR 更新（49 条待合并、仅 1 条合并/关闭），无新版本发布。当日最重要的正面信号是网关连接日志刷屏回归（#12476）已关闭，以及邮件工具文档缺口（#12217）完成修补；但新报告的两个 S1/S2 级缺陷（#12570 守护进程挂起、#12569 插件加载误报）尚无修复 PR。PR 侧 98% 待合并比例说明评审带宽已构成主要瓶颈，其中 NiuBlibing 的 V5 注册表系列 XL 级改动（#12450/#12452/#12453/#12457）形成互依赖链条，需按序合入。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅 1 条 PR 合并/关闭，从现有数据可确认的推进主要来自关闭的 Issue：

- **#12476（CLOSED）** 网关经 `ServeTasks::spawn` 对每条连接输出 INFO 日志、淹没运行时 trace 的回归已关闭（标记 `release:v0.9.1`），可观测性噪音问题得到收敛。链接：zeroclaw-labs/zeroclaw Issue #12476
- **#12217（CLOSED）** 邮件 tools-only 配置文档补全，说明 approval 路由同时会启动 IMAP listener。链接：zeroclaw-labs/zeroclaw Issue #12217

在审 PR 中，影响面最大的待合入工作是 **canonical V5 注册表与运行时模型绑定**系列（#12450 运行时绑定、#12452 Zerocode 配置、#12453 Web 注册表编辑、#12457 嵌套配置反射），均为 size:XL 且彼此声明依赖顺序，属于下一阶段的核心架构推进，但今日均未合入。另有 #12168 为 `send_message_to_peer` 补齐 Act 策略强制（对齐 `a2a_send`/`spawn_subagent`/`delegate`），属安全一致性修复。链接：zeroclaw-labs/zeroclaw PR #12168

**整体判断：** 推进量偏低（1 条合入），项目当日以"输入大于消化"为主。

## 4. 社区热点

评论数最多的条目集中在少数长期活跃的架构类 Issue：

- **#11296**（7 条评论）llama.cpp / 自定义 provider 的 URI 未被正确用于从 router 拉取模型，标签含 `domain:security`、`risk:high`。链接：zeroclaw-labs/zeroclaw Issue #11296
- **#9345**（7 条评论）PR 每次更新时重算 `size:*` / `risk:*` 标签，同时避免执行不可信 PR 代码。链接：zeroclaw-labs/zeroclaw Issue #9345
- **#11580**（5 条评论）x86_64 Linux 发布二进制仅比 64 MiB 硬上限低约 0.7 MB，需确定 size gate 策略，关联 `release:v0.9.1`、`priority:p1`。链接：zeroclaw-labs/zeroclaw Issue #11580

**诉求分析：** 三点共同指向"发布工程与供应链治理"——发布体积闸门、PR 风险评估自动化、非本地 provider 的 URI/安全处理。三者都属于发布阻断或高风险类别，建议优先排期。

## 5. Bug 与稳定性

按严重程度排列（今日无对应 fix PR 的报告）：

| 级别 | Issue | 问题 | Fix PR |
|---|---|---|---|
| S1 workflow blocked | #12570 | 滚动 trim 失败时泄漏 `runtime-trace.tmp.*`，日志目录堆积数百万文件导致守护进程启动挂起 | 无 |
| S2 | #12569 | 插件包名与内置工具名（如 `weather`）冲突时，`plugin install` 与 `plugin list --verify` 误报加载成功 | 无 |
| S2 | #12559 | 配置 setter 用 `str::parse::<f64>` 接受 `inf`/`NaN` 等非法十进制值 | 无 |
| S2 | #12558 | Matrix 在 `reply_in_thread = true` 时把工具审批提示发到房间时间线而非当前线程 | 无 |
| S3 | #12568 | Dashboard Cost Overview 柱状图按最大值缩放，导致 Monthly 柱恒为满格 | 无 |
| S3 | #11296 | llama.cpp / 自定义 provider 的 URI 未被正确采用 | 无 |

**回归说明：** #12570 明确指出两个缺陷叠加（trim 出错即泄漏临时文件 + 文件堆积阻塞启动），虽为新开 Issue，但属于可累积恶化的稳定性风险，建议当日提级处理。

## 6. 功能请求与路线图信号

| Issue | 需求 | 纳入下一版本的可能性判断 |
|---|---|---|
| #12557 | Discord/Matrix 用 emoji 反应简化工具审批（对标 Telegram 按钮） | 中——已有 #12116/#12271/#12315 的 Discord peer 路由系列在审，通道审批体验正在被系统性改造，方向一致 |
| #12562 | Telegram `trusted_groups`，群内任意成员免 sender-allowlist | 中——改动局限于通道配置层，成本较低 |
| #12561 | Matrix 对已拒绝的过期房间邀请做有界清理 | 中低——防刷号存储膨胀，与 #12558 同属 Matrix 通道卫生 |
| #11955 | Signal 通道实现 `listener_health()` 并在 dashboard 展示就绪状态 | 中——与 dashboard 相关 PR（#11845、#12376）同域 |

另有工具侧在审 PR 提供路线图信号：**#12406** 将 Parallel 作为 opt-in 网页搜索 provider（作者声明就职于 Parallel），**#11076** 为 Antigravity CLI 增加 `agy_cli` 工具，理由为 Gemini CLI 已停止服务多数账号。链接：zeroclaw-labs/zeroclaw PR #12406、zeroclaw-labs/zeroclaw PR #11076

## 7. 用户反馈摘要

基于 Issue 描述与评论量提炼：

- **自托管 provider 用户的痛点**：#11296 反映非 localhost 的 llama.cpp / 自定义 endpoint 无法正确取模型，直接影响私有化部署场景，且被标记为高风险安全域。
- **运维/守护进程可靠性**：#12570 的触发条件是"数百万泄漏临时文件"，说明存在长期运行后突然启动失败的现场，用户对日志子系统的健壮性预期未满足。
- **多渠道一致性落差**：#12557 直言 Telegram 在非 CLI 通道的工具审批体验上"更优"，Discord/Matrix 用户感到被降级对待；#12558 进一步显示 Matrix 线程化会话下审批提示错位。
- **发布体积焦虑**：#11580 显示二进制距上限仅约 1%，维护者与贡献者在为是否放宽闸门或瘦身争论，反映分发形态约束已成为常态议题。
- **依赖升级压力**：#12551 指出 SMTP 安全公告要求 lettre >=0.11.24，但该版本与工作区现有消费者分属 base64 0.23.1 / 0.22.1 两条线，被迫接受受控的重复依赖。

## 8. 待处理积压

以下条目创建时间久、标签显示需要动作，建议维护者优先关注：

- **#9345**（创建 2026-07-24，`status:in-progress`，7 条评论）PR 风险与体积标签重算，已停滞近 4 个月。链接：zeroclaw-labs/zeroclaw Issue #9345
- **#10391**（创建 2026-08-26，`needs-author-action`，size:XL）委托代理的工作区、工具上限与命令策略越出单轮次后失效的修复，需作者响应。链接：zeroclaw-labs/zeroclaw PR #10391
- **#11580**（创建 2026-10-06，`priority:p1`、`needs-maintainer-review`、`release:v0.9.1`）发布体积闸门决策，直接卡住下一版本。链接：zeroclaw-labs/zeroclaw Issue #11580
- **#12450 / #12453 / #12452**（创建 2026-11-15，均标记 `needs-author-action`、size:XL）V5 注册表系列互相依赖且需作者动作，是当前评审队列中最重的一簇。链接：zeroclaw-labs/zeroclaw PR #12450、zeroclaw-labs/zeroclaw PR #12453、zeroclaw-labs/zeroclaw PR #12452
- **#11403**（创建 2026-10-01，`risk:manual`、`domain:security`）Codex 提示缓存亲和性绑定到会话，需人工安全评审。链接：zeroclaw-labs/zeroclaw PR #11403

**健康度提示：** 今日输入 65 条（15 Issue + 50 PR）对应 3 条闭环，关闭率明显低于流入速率；叠加 49 条待合并 PR 中多条 XL 级且标注 `needs-author-action`，建议本周集中清理"作者动作"与"维护者评审"两类阻塞，避免 V0.9.1 发布被 #11580 与 V5 注册表链条持续延迟。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*