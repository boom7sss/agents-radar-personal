# OpenClaw 生态日报 2026-10-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-29 16:56 UTC

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

# OpenClaw 项目日报 · 2026-10-29

> 数据源：github.com/openclaw/openclaw（OpenClaw 用 OpenClaw 管理自身？不，坚持事实）。以下所有条目均基于提供的 GitHub 数据，未使用外部信息。

## 1. 今日速览

- 过去 24 小时 Issues 更新 500 条（新开/活跃 349，关闭 151），PR 更新 500 条（待合并 299，合并/关闭 201），另有 1 个补丁版本发布。吞吐量处于高位，但关闭率（Issues 约 30%、PR 约 40%）表明积压仍在扩大。
- 今日最突出的信号是**稳定性压力集中在 Gateway 会话/存储层**：多个 P0/P1 Issue（#160959、#166634、#158592、#166017）涉及事件循环阻塞、SQLite WAL 检查点停滞、崩溃恢复后 Agent 不可用，且多数尚无 fix PR。
- 版本发布为安全补丁性质（v2026.10.9），无破坏性变更迹象。
- 社区讨论高度集中于「短期记忆/记忆提升」与「会话状态一致性」两类问题，说明用户在实际长期运行中已触达架构边界。

## 2. 版本发布

### v2026.10.9（openclaw 2026.10.9）

- **更新内容（Highlights）**：修补存在漏洞的运行时依赖——
  - `fast-uri` 4.2.3：在 MCP schema 校验中拒绝畸形的 URI scheme 与 host；
  - 超大的 Zod 集合在 A2UI 与 Discord embedded app SDK 中被提前拒绝；
  - IMAP 发件人解析升级至 `nodemailer` 10.1.4，以应对伪造发件人。
- **破坏性变更**：提供材料中未提及。
- **迁移注意事项**：提供材料中未提及明确迁移步骤；从内容看属于依赖层安全加固，升级前建议重点关注使用 A2UI、Discord embedded app 及 IMAP 渠道的部署。

## 3. 项目进展

> 说明：提供的数据未列出今日具体合并/关闭的 PR 标题，仅有 PR 列表状态。以下基于可验证的状态变化。

- **已关闭 PR**：#177888（`fix(ui): offer desktop setup instead of Retry when Host Desktop is off`，P0，关闭于 2026-10-29），改善 Host Desktop 未启用时的 WebChat 恢复体验，并已有后续跟进 PR #178405 处于 OPEN。
- **已关闭 Issue**：#178000（P1，会话状态竞态导致跨 provider 模型回退被标记为 `reason=unknown`，2026.10.5），说明此类「状态竞态被误判为模型故障」的问题已进入收口阶段。
- **整体推进评估**：PR 合并/关闭 201 条，但待合并仍达 299 条，且今日新开 PR 多为 XS–M 规模的修复（如 #187423 知识库显示截断的代理对安全、#187419 设备身份凭据中断写、#187797 记忆索引批大小错误）。项目处于「高频小修 + 大型稳定性问题待攻坚」的状态。

## 4. 社区热点

| 条目 | 状态 | 评论 | 链接 |
|---|---|---|---|
| #160959 Gateway 捕获大型外部插件时阻塞数分钟（2026.9.6 回归，P0） | OPEN | 64 | openclaw/openclaw Issue #160959 |
| #164294 Gateway 状态 DB WAL 自动检查点从未完成 | OPEN | 38 | openclaw/openclaw Issue #164294 |
| #150635 短期召回在 512 条上限后每晚驱逐，dreaming deep 阶段永不提升 | OPEN | 21 | openclaw/openclaw Issue #150635 |
| #120385 Code Mode 工具目录对 cron/memory-flush 轮次构建不完整 | OPEN | 21 | openclaw/openclaw Issue #120385 |
| #164923 同一主机下某工作区短期提升 0/512，兄弟工作区 50–90% | OPEN | 19 | openclaw/openclaw Issue #164923 |
| #166634 延迟回收提交检查点失败导致崩溃恢复后 Agent 不可用（P0） | OPEN | 18 | openclaw/openclaw Issue #166634 |
| #177656 原生 host exec 在 2026.10.5 返回共享状态完整性准入错误（P1，至少 28 次失败） | OPEN | 17 | openclaw/openclaw Issue #177656 |
| #172837 Codex nativeSubagentAssignments 完成后从不移除（P1） | OPEN | 17 | openclaw/openclaw Issue #172837 |

**诉求分析**：

1. **插件规模与启动性能**（#160959）是社区投入讨论最多的单点，评论达 64 条且持续一个月未解决，反映「插件生成捕获」功能在大型依赖树上与 Gateway 单事件循环架构冲突，用户直接感知为启动期数分钟无响应。
2. **记忆子系统**（#150635、#164923）出现「同一配置、不同工作区结果截然不同」的复现，指向短期召回存储的结构性拒收逻辑，而非阈值配置问题。
3. **会话状态一致性**是贯穿多个 P1/P0 的共同根因：WAL 检查点、会话回收、状态竞态被误分类为模型回退。

## 5. Bug 与稳定性

### P0 / 崩溃级

| Issue | 问题 | fix PR |
|---|---|---|
| #160959 | Gateway 捕获大型外部/工作区插件时事件循环阻塞数分钟（2026.9.6 回归） | 无（`clawsweeper:no-new-fix-pr`，需维护者评审） |
| #166634 | 崩溃恢复后延迟回收提交检查点失败，Agent 永久拒绝 `chat.history` 等调用 | 无 |
| #158592 | 主机 sleep/wake 后模型运行时发布超时且不可恢复，所有入站消息失败直至重启 | 无 |
| #160762 | claude-cli + Telegram：轮次中途消息丢失，drained prompt 携带上一条消息正文（含 data-loss/message-loss 标签） | 无（需信息） |

### P1

| Issue | 问题 | fix PR |
|---|---|---|
| #177656 | 原生 host exec 在 2026.10.5 返回完整性准入错误，至少 28 次失败 | 无 |
| #172837 | Codex 子代理分配完成后不清理，导致每次父线程重新钉住并重发 | 无 |
| #166017 | `mcp.sessionIdleTtlMs` 默认值未生效，MCP 运行时从不驱逐，spawn broker 达到 256 上限后所有 exec/read/MCP 启动失败 | 有链接 PR（`clawsweeper:linked-pr-open`） |
| #126950 | Telegram 不透明 callback payload（`tgcb1:`）对非插件调用方被静默丢弃 | 有链接 PR |
| #148789 | 模型回退链在 harness 级会话失败时将故障误归因于最后一个回退模型 | 无 |
| #155396 | 普通 Codex 工具轮次在最终答案恢复时 `provenance_rejected` 失败关闭 | 无（需实机复现） |

### P2 值得关注

- #164294：状态 DB WAL 自动检查点自启动起从未完成（被进程内 reader 钉住），长期运行存在 WAL 膨胀风险。
- #163566：更新修复后每轮 `session-resource-loader` 消耗约 80–150 秒 CPU，单轮约 130 秒事件循环停顿。
- #127195：十六处调用点抛出完全相同的「changed while starting work」错误且无原因码，生产环境无法定位根因。
- #164690：claude-cli 每次运行重复 spawn 所有 stdio MCP server，每个子进程约 144 MB 包装开销且不可配置。

**稳定性判断**：今日高严重度问题多为**长时间运行 + 真实部署形态**（Docker 沙箱、多工作区、macOS 睡眠唤醒、外部插件）下的状态一致性问题，且相当比例尚无 fix PR。建议维护者优先处理 #160959、#166634、#158592 三个 P0 之间的共同根因（会话/存储状态生命周期）。

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 纳入下一版本可能性 |
|---|---|---|
| A2A 单向派发模式（无回复乒乓） | #44309（OPEN，15 评论，1 👍，标记需产品决策） | 中低——已有明确语义诉求，但需产品决策 |
| `tools.exec.notifyOnExit` 增加「仅失败/仅用户请求」模式，并停止将 SIGTERM-at-drain 中继给 owner | #141973（OPEN，需产品决策） | 中——修复形状清晰 |
| 定时自动化应用 `cron.defaultTools` 默认工具 | PR #187798（OPEN，Closes #187767） | 高——已有配套 PR |
| GitHub 发布就绪只读观测动作 | PR #187152（OPEN，需证明） | 中——但标记安全边界风险 |
| QQ 渠道长期支持计划澄清 | #150743（OPEN，生态/支持模式关切） | 低——非代码需求，需维护者表态 |

**信号解读**：新功能提案的评论热度明显低于 Bug（最高 15 条评论），说明当前社区注意力主要被稳定性问题占据，路线图压力更多来自「已有功能的正确性」而非「新能力」。

## 7. 用户反馈摘要

- **痛点：长期运行的可靠性**。多位用户报告睡眠唤醒、崩溃恢复、长时间运行后 Agent 进入不可恢复状态（#158592、#166634、#166017），共同特征是「只能重启网关」。
- **痛点：配置不生效与错误信息不可诊断**。#166017（默认 TTL 未生效）、#112638（`session.maintenance` enforce 模式不限制存储）、#127195（十六处相同错误无原因码）、#167609（guest TypeError 报为 `internal_error`）反映用户对「配置了但没作用」和「报错了但看不出原因」的强烈不满。
- **使用场景**：多工作区同主机部署（#164923）、每 Agent Docker 沙箱 + 约 13 个 stdio MCP server（#166017）、claude-cli 后端 + Telegram 渠道（#160762）、Codex 原生子代理（#172837）。
- **满意之处**：材料中未提供正面评价数据，不做推断。
- **生态关切**：QQ 渠道 Tencent 交接停滞，用户直接质疑长期支持承诺（#150743），这类「渠道存续」问题若长期无回应，可能影响 bot 生态贡献者信心。

## 8. 待处理积压

| 条目 | 创建时间 | 停滞时长 | 标签信号 |
|---|---|---|---|
| #44309 A2A 单向派发功能请求 | 2026-03-12 | 约 7.5 个月 | `stale` + `needs-product-decision` |
| #112638 `session.maintenance` enforce 模式不限制存储 | 2026-07-22 | 约 3 个月 | `stale` + `needs-product-decision` |
| #120385 Code Mode 工具目录不完整 | 2026-08-08 | 约 2.7 个月 | `stale` + 无 fix PR |
| #126950 Telegram callback 静默丢弃 | 2026-08-21 | 约 2.2 个月 | P1 + `linked-pr-open` |
| #127195 十六处无原因码错误 | 2026-08-21 | 约 2.2 个月 | `fix-shape-clear` + `needs-product-decision` |
| #142037 Slack 顶级发送被记为「mute」 | 2026-09-08 | 约 1.7 个月 | `stale` |
| PR #148721（Slack 顶级发送记录） | 2026-09-15 | 约 1.4 个月 | `ready for maintainer look`，已与 main 对齐 |

**维护者提示**：多个长期积压条目都卡在 `needs-product-decision`（#44309、#112638、#141973、#127195 等），这不是工程能力瓶颈，而是产品决策排队；建议集中做一次决策批次，以释放一批已具备修复形状的 Issue。另有 #148721 已标注「ready for maintainer look」且完成 main 对齐，属于可立即推进的合并候选。

---

**健康度小结**：项目活跃度很高（单日 500+ Issue、500+ PR 更新），但**关闭速度跟不上流入速度**，且高严重度稳定性问题集中在会话/存储状态层、修复率偏低。安全补丁发布及时是正面信号；下一阶段的健康度关键指标应是 P0/P1 Issue 的 fix PR 覆盖率与 `needs-product-decision` 积压的清零速度。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-10-29）

> 数据范围：本次 12 个项目日报，所有数字与结论仅来源于所提供材料；无活动的项目（NullClaw、IronClaw、TinyClaw、Moltis）不纳入量化对比，仅在分层中标注。

---

## 1. 生态全景

当前生态呈现「头部高吞吐、长尾静默」的明显分层：OpenClaw、Hermes Agent、ZeroClaw、CoPaw 四个项目单日 Issue/PR 更新量在 15–500 条区间，而 NullClaw、IronClaw、TinyClaw、Moltis 四个项目过去 24 小时零活动，ZeptoClaw 仅有 1 条文档 PR。共性主题高度集中在**会话/存储状态一致性、记忆子系统可靠性、插件安装安全边界**三条主线，且几乎所有高活跃项目的关闭速度都低于流入速度（OpenClaw PR 待合并 299、Hermes 48 待合并对 2 合并、ZeroClaw 合并率仅 4%、CoPaw 25 待合并），说明生态整体已从「功能铺量」进入「长期运行可靠性攻坚」阶段。安全侧信号密集：OpenClaw 发布依赖安全补丁 v2026.10.9，ZeroClaw 存在 S0 级知识图谱跨 agent 越权（#9647）与 S1 配对码永不过期（#9394），CoPaw 有 CLI 明文回显环境变量问题（#8501），NanoClaw 则系统性收紧技能安装权限模型。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 · 关闭） | PR（待合并 · 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（349 · 151） | 500（299 · 201） | v2026.10.9（安全补丁） | 高活跃但积压扩大；P0 多无 fix PR，集中在 Gateway 会话/存储层 |
| **Hermes Agent** | 50（47 · 3） | 50（48 · 2） | 无 | 高流量、低消化率，PR 积压风险上升 |
| **ZeroClaw** | 50（41 · 9） | 50（48 · 2） | 无 | 合并率约 4%，S0/S1 安全项长期悬置 |
| **CoPaw** | 15（5 · 10） | 39（25 · 14） | 无 | Issue 收敛良好，PR 审阅为瓶颈（含 3 条 Under Review） |
| **NanoBot** | 4（1 · 3） | 16（9 · 7） | 无 | 响应及时，缺陷当日闭环；多条待合并 PR 标 `conflict` |
| **NanoClaw** | 1（1 · 0） | 9（1 · 8） | 无 | 高合并、低新增；单一子系统（skills）安全收敛 |
| **LobsterAI** | 3（3 · 0） | 11（1 · 10） | 无 | 代码侧交付密集，Issue 侧互动稀疏；账号误封闭环未完成 |
| **PicoClaw** | 1（0 · 1） | 22（0 · 22） | 无 | 批量清理积压，缺新需求输入与版本节奏 |
| **ZeptoClaw** | 0 | 1（1 · 0） | 无 | 平稳静默，无负面信号但推进为零 |
| **NullClaw / IronClaw / TinyClaw / Moltis** | 无活动 | 无活动 | 无 | — |

**统计口径说明**：OpenClaw 的 500/500 为「过去 24 小时更新」上限口径；其余项目为实际条目数。上表按单日活跃度降序排列。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：OpenClaw 单日 Issue 更新 500 条、PR 更新 500 条，是第二梯队（Hermes、ZeroClaw 各 50 条）的约 10 倍，是 NanoBot / NanoClaw / LobsterAI（个位数至十余条）的数十倍，属于生态内唯一的「超大社区」量级项目。

**优势**：
- **自举与生态吸附力**：LobsterAI 直接将 OpenClaw 作为上游引擎集成（当前固定 v2026.8.1，社区已提出升级至 v2026.10.x 的诉求 #2956），说明 OpenClaw 已成为下游产品的底座。
- **发布纪律**：今日发布 v2026.10.9 安全补丁（`fast-uri` 4.2.3、Zod 集合、`nodemailer` 10.1.4），是本次样本中唯一有版本发布的活跃项目，安全响应及时。
- **议题深度**：单个 Issue 评论量最高 64 条（#160959），讨论深度远超其他项目（次高为 Hermes #105758 的 22 条、ZeroClaw #5982 的 11 条）。

**技术路线差异**：
- OpenClaw 采用 **Gateway 单事件循环 + 插件生成捕获** 架构，其头号痛点 #160959（大型外部插件捕获阻塞数分钟，64 评论，2026.9.6 回归）正是该架构的直接代价；NanoBot / NanoClaw 等更轻量项目未见同类问题。
- 状态层依赖 **SQLite WAL + 检查点机制**，由此衍生 #164294（WAL 检查点从未完成）、#166634（P0，崩溃恢复后 Agent 不可用）等系列问题。
- 记忆子系统以「短期召回 512 条上限 + dreaming deep 阶段提升」为核心，#150635、#164923 显示同一配置下不同工作区结果差异巨大（0/512 vs 50–90%），指向结构性拒收逻辑而非阈值配置。

**风险**：规模优势伴随积压劣势——PR 待合并 299 条、Issue 关闭率约 30%，且三个 P0（#160959、#166634、#158592）均无 fix PR，健康度关键指标应是 P0/P1 的 fix PR 覆盖率而非绝对活跃量。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话/存储状态一致性** | OpenClaw、Hermes、ZeroClaw、NanoBot、CoPaw | OpenClaw #166634（崩溃恢复后 Agent 不可用）、#164294（WAL 检查点停滞）；Hermes #146478（`session.create` 铸造不可恢复会话 `storage_unavailable`）、#141205（SIGKILL 后 `ended_at IS NULL` 永久残留）；ZeroClaw #11432（会话永久停在 `running`）；NanoBot 心跳会话跨频道泄漏（#6512） |
| **记忆子系统可靠性** | OpenClaw、ZeroClaw、CoPaw、Hermes | OpenClaw #150635（永不提升）/ #164923（工作区结果背离）；ZeroClaw #6998（依赖 prompt + `serde_json` 解析，跨模型脆弱，需有界回退）；CoPaw #8500（Auto-Dream 静默丢记忆仍报 `success=True`） |
| **静默失败与可观测性** | CoPaw、Hermes、OpenClaw、ZeroClaw、NanoBot | CoPaw #8150（飞书图文混发静默丢弃）、#8488（Visual Compact 静默 no-op）；Hermes #146428（`UnscopedSecretError` 永久静默卡死）；OpenClaw #127195（十六处相同错误无原因码）；NanoBot #5484 / #6291（MCP 错误被误报为成功） |
| **插件安装的安全边界** | NanoClaw、ZeroClaw、OpenClaw、CoPaw | NanoClaw #3720 / #3721（源码安装默认关闭、显式授权、尊重运维拒绝策略、`needs-setup` 状态）；ZeroClaw #11336（`plugin info` 对拒绝注册的插件报 `[loads]`）、#11562（跨代 manifest 配对）、#11358 / #11360（锁与权限）；OpenClaw #160959（大型插件捕获阻塞） |
| **多租户 / 权限隔离** | ZeroClaw、Hermes、NanoBot | ZeroClaw #5982（按发送者 RBAC，讨论半年，已收敛为窄范围方案）、#9647（S0 知识图谱无 agent 归属）；Hermes #120618（Slack channel-scoped sessions）；NanoBot #6286 / #6287（Matrix 按房间策略覆盖） |
| **跨平台可靠性** | NanoBot、Hermes | NanoBot #6514（Windows `PermissionError WinError 5`）；Hermes #135910（APFS 大小写不敏感卷 `shutil.copytree` Errno 17）、#146481（gateway 服务文件被覆盖致重启循环） |
| **上下文膨胀治理** | NanoBot、Hermes、OpenClaw | NanoBot #6363（MCP Apps 自托管渲染，结构化结果留在模型上下文外）；Hermes #143918（图片附件不驱逐，每次 LLM 调用携带多 MB）；OpenClaw #163566（每轮 `session-resource-loader` 消耗 80–150 秒 CPU） |
| **WebUI 控制面原生化** | NanoBot、Hermes | NanoBot #6519（p1，以显式运行时控制替代斜杠命令与乐观客户端状态）、#6323（同会话内编辑重发）；Hermes #38519（👍31，Desktop 仅装前端直连远端 agent） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 / 场景 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人助手 + 强大插件生态 | 重度个人用户、多工作区同主机部署（#164923）、每 Agent Docker 沙箱 + 约 13 个 stdio MCP server（#166017） | Gateway 单事件循环 + 插件生成捕获 + SQLite WAL；功能最全，稳定性债最重 |
| **Hermes Agent** | Desktop / TUI / 多频道网关 | 多机部署、追求前后端分离的用户（#38519） | 受 PM（依赖管理器）与 gateway service 生命周期约束；桌面端与 agent 可解耦的诉求强 |
| **ZeroClaw** | 多租户、插件运行时、ZeroCode 前端 | 企业/多 agent 隔离部署 | 强调 RBAC、插件 discovery 与配置 schema 迁移（v4）、OIDC 登录（#11965），安全治理导向 |
| **CoPaw** | 记忆系统（Auto-Dream / ReMe）、Console 体验、PawApp SDK | Hub 模式多用户部署、本地模型用户 | 可插拔 provider + 本地小模型（Piccolo 双向候选打分 #8463、本地模型管理抽为插件 #8499）为明确演进方向 |
| **NanoBot** | 轻量网关 + 多 IM 渠道（Matrix / Telegram / Napcat / Slack） | 自托管个人用户（Ollama / vLLM 生产实例）、Windows 用户 | 以稳定性补丁 + 去耦重构为主，WebUI/TUI 控制面重构（#6519）为前置基础设施 |
| **NanoClaw** | Skills 子系统 + 渠道适配（Slack / Signal） | 个人渠道接入（v2 安装 + `/add-signal`） | 技能安装从「隐式触发」转向「默认关闭 + 显式授权 + 运维策略优先」，确定性 apply 指令（#3676） |
| **PicoClaw** | 通道广度（MQTT / iMessage / 微信 / 飞书）+ Provider 扩展 | IoT / 消息总线 / 消费级消息入口 | 走广度路线，今日 22 条 PR 全为积压清理，需确认合并而非放弃 |
| **LobsterAI** | 媒体编辑（图片 Erase、视频）+ OpenClaw 集成 | 内容创作型个人用户 | 应用层产品，直接依赖 OpenClaw 引擎；风控与第三方插件兼容边界待明确 |
| **ZeptoClaw** | 部署入口易用性 | 追求开箱即用 | 无核心功能演进，仅 Light Cloud 部署按钮（#717） |

**关键分野**：OpenClaw / LobsterAI / NanoBot / NanoClaw 面向**个人自托管**；ZeroClaw / CoPaw 面向**多租户与企业隔离**；PicoClaw 面向**渠道广度与 IoT**。架构上，OpenClaw 的「单事件循环 + 重插件」与 NanoClaw 的「最小权限技能安装」代表两种相反的复杂度取舍。

---

## 6. 社区热度与成熟度

**第一层 · 超大规模快速迭代（OpenClaw）**
单日 500+500 条更新、有版本发布，但关闭率约 30%/40%、P0 修复率偏低。处于**「功能成熟、稳定性债集中暴露」**阶段，健康度取决于 P0/P1 fix PR 覆盖率与 `needs-product-decision` 积压清零速度（#44309 已挂 7.5 个月、#112638 约 3 个月）。

**第二层 · 高活跃但消化受阻（Hermes、ZeroClaw、CoPaw）**
三者均为「高流入、低合并」：Hermes 48 待合并对 2 合并、ZeroClaw 合并率 4%、CoPaw 25 待合并含 3 条 Under Review（其中两条为 first-time-contributor 的 XS/S 级修复）。处于**「快速迭代被审阅带宽卡住」**阶段，瓶颈是评审而非工程能力。

**第三层 · 质量巩固与维护型（NanoBot、NanoClaw、PicoClaw）**
NanoBot 缺陷当日闭环（#6514→#6516、#6513→#6515），NanoClaw 8 条合并集中在 skills 安全收敛，PicoClaw 单日清 22 条积压但零新增。处于**「以稳定性补丁与架构去耦为主」**阶段，特征是合并率高、新增输入少。

**第四层 · 产品化交付型（LobsterAI）**
10 条 PR 合并覆盖媒体、性能、CI、OpenClaw 集成，但 Issue 侧仅 3 条且账号误封 6 天未闭环。处于**「工程交付密集、社区运营滞后」**状态。

**第五层 · 静默（ZeptoClaw、NullClaw、IronClaw、TinyClaw、Moltis）**
ZeptoClaw 仅 1 条无评论的文档 PR；其余四项零活动。需观察是否进入休眠。

---

## 7. 值得关注的趋势信号

1. **「静默失败」已成为最强的负面反馈来源。** CoPaw（#8500 丢记忆仍报成功、#8150 丢图片无警告、#8488 静默 no-op）、Hermes（#146428 明确对比「其他调用点大声失败，此例永久静默卡死」）、OpenClaw（#127195 十六处无原因码）、NanoBot（MCP 错误 `isError=false`）四项目独立出现同一模式。对开发者的参考：**失败必须带原因码、必须可重试、状态字段不得与实际不符**，这比新增能力更影响用户信任。

2. **长期运行（sleep/wake、崩溃恢复、SIGKILL）是架构边界的真实压力测试。** OpenClaw #158592 / #166634、Hermes #146478 / #141205、ZeroClaw #11432 的共同特征是「只能重启网关」。设计会话生命周期时，**恢复路径与过期清理（stale-open sweep）应与创建路径同等对待**。

3. **插件/技能的权限模型正在从「便利优先」转向「显式授权优先」。** NanoClaw #3720 / #3721（默认关闭、需运维启用）、ZeroClaw #11336 / #11562（拒绝注册的插件不得报 `[loads]`）、CoPaw #8501（CLI 明文回显环境变量）指向同一方向：**安装即执行**的隐式模型正在被审计化、可复现化的 apply 流程取代。

4. **记忆系统从「加一个向量库」转向「可验证的整合与提升」。** ZeroClaw #6998 要求 schema 校验 + 有界回退（拒绝 prompt + 解析的脆弱链路），CoPaw 有 `save_decision()` 持久化诉求（#6189），OpenClaw #150635 / #164923 暴露「永不提升」与工作区结果背离。**「记忆是否真的被写入、能否被验证、失败是否可见」将成为记忆子系统的核心评测维度。**

5. **上下文与成本的耦合被明确量化。** Hermes #143918（每次 LLM 调用携带多 MB 图片）、OpenClaw #163566（单轮约 130 秒事件循环停顿）、NanoBot #6363（MCP 结果移出模型上下文）。开发者应把**「单次调用载荷大小」与「事件循环占用」作为一等性能指标**，而非事后优化项。

6. **WebUI/TUI 控制面正在从「伪装成聊天消息」走向显式协议。** NanoBot #6519（p1，替代斜杠命令与乐观客户端状态）与 Hermes #38519（👍31，前端/后端分离部署）表明用户不再满足于「在聊天框里敲命令控制运行时」，**控制面协议化是下一轮交互竞争的前置条件**。

7. **产品决策而非工程能力正在成为积压主因。** OpenClaw 多个长期条目卡在 `needs-product-decision`（#44309、#112638、#141973、#127195），ZeroClaw #6998 处于 `parking-lot`。对维护者的参考：**集中做一次决策批次**的成本远低于逐条拖延，且能直接释放一批已具备修复形状的 Issue。

8. **上游引擎依赖带来版本滞后风险。** LobsterAI 固定 OpenClaw v2026.8.1 而最新稳定版为 v2026.10.7（#2956），期间已错过 Skills 自动发现、侧边栏 MCP Apps 等能力。**下游集成方应把上游版本跟进纳入固定节奏**，否则功能差距会随上游快速迭代持续放大。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-29

## 1. 今日速览

过去 24 小时项目共产生 20 条 Issue/PR 更新，无新版本发布。Issues 侧 4 条更新、3 条关闭，其中 2 条关闭集中在 Matrix 频道问题；PR 侧 16 条更新，7 条合并/关闭、9 条待合并，维护者 chengyongru 单日处理了多条关闭项，处置效率较高。今日推进方向集中在矩阵频道策略、网关文件 I/O 稳定性、重试机制与运行时控制重构。整体活跃度中高，缺陷修复与重构并行，但多条待合并 PR 标注 `conflict`，合并链路存在积压风险。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 推动了几条主线：

- **网关稳定性**：PR #6516（已关闭）针对网关租约 JSON 在无变化时仍重写的问题，减少不必要的文件同步与原子替换，并改用 Windows 安全 I/O，直接对应 Issue #6514 的报错场景。[#6516](https://github.com/HKUDS/nanobot/pull/6516)
- **重试机制修复**：PR #6367（已关闭，p1）解决嵌套重试导致物理请求放大、Telegram 已投递前缀被重放、故障目标占用全部发送槽位的问题。[#6367](https://github.com/HKUDS/nanobot/pull/6367)
- **Matrix 回复引用**：PR #6515（已关闭）新增关闭非线程回复引用的通道选项，回应 Issue #6513 的引用噪声问题。[#6515](https://github.com/HKUDS/nanobot/pull/6515)
- **Matrix 分组策略**：PR #6287（已关闭）引入 `groupPolicyOverrides` 按房间覆盖策略，与 Napcat 对齐，回应 Issue #6286。[#6287](https://github.com/HKUDS/nanobot/pull/6287)
- **架构清理**：PR #6518 移除旧 JSONL 历史导入器与按功能代理迁移；PR #6498 将工具提示渲染移出核心；PR #6315 重构会话句柄发现（通过搜索获取标题与摘要）。三者为持续性架构收敛。[#6518](https://github.com/HKUDS/nanobot/pull/6518) [#6498](https://github.com/HKUDS/nanobot/pull/6498) [#6315](https://github.com/HKUDS/nanobot/pull/6315)

总体看，今日以"稳定性补丁 + 去耦重构"为主，无新功能大规模落地。

## 4. 社区热点

数据中未提供有效评论数与点赞数，以下按问题影响面判断：

- **Issue #6514**（Windows 下重写网关客户端租约报 `PermissionError [WinError 5]`）：Windows 部署用户的高频阻断性问题，已有对应修复 PR #6516 关闭。[#6514](https://github.com/HKUDS/nanobot/issues/6514)
- **PR #6323**（WebUI 同会话内编辑并重发消息）：解决"修正已发消息需另开侧边栏话题"的体验痛点，属用户可感知的核心交互改进；但标注 `conflict`。[#6323](https://github.com/HKUDS/nanobot/pull/6323)
- **PR #6519**（运行时模型/停止/重启控制结构化，p1）：指出 WebUI 与 TUI 控件目前以聊天消息形式伪装、依赖隐藏斜杠命令或客户端乐观状态，是控制面设计层面的关键重构。[#6519](https://github.com/HKUDS/nanobot/pull/6519)
- **PR #6363**（MCP Apps 自托管渲染）：让结构化结果留在模型上下文之外，反映社区对 MCP 结果上下文膨胀的关注。[#6363](https://github.com/HKUDS/nanobot/pull/6363)

背后诉求可归纳为三点：跨平台（尤其 Windows）可靠性、WebUI 交互原生化、MCP 结果上下文治理。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — Windows 网关租约写入失败**：Issue #6514，`PermissionError [WinError 5]` 间歇性出现，影响 Windows 上网关客户端续租。**已有 fix PR #6516（已关闭）**。[#6514](https://github.com/HKUDS/nanobot/issues/6514)
2. **中 — 心跳会话自动压缩消息外泄**：Issue #6512，每次心跳后向用户最近使用的频道打开会话，将"context compacted"通知误发到该频道。**已关闭，数据中未见对应 PR 链接**。[#6512](https://github.com/HKUDS/nanobot/issues/6512)
3. **中 — Matrix v0.4.0 引用回归**：Issue #6513，v0.4.0（Docker 部署）起所有非线程机器人回复均附加 `m.in_reply_to`，Element 中出现引用噪声且无可配置开关。**已由 PR #6515 提供开关（已关闭）**。[#6513](https://github.com/HKUDS/nanobot/issues/6513)
4. **中 — MCP 错误被误报为成功**：PR #5484 指出部分 MCP 服务以 `isError=false` 返回业务错误信封（如 `{"code":404,...}`）；PR #6291 指出资源读取与 prompt 调用失败被当作成功工具执行返回。**两者均待合并且标注 `conflict`**。[#5484](https://github.com/HKUDS/nanobot/pull/5484) [#6291](https://github.com/HKUDS/nanobot/pull/6291)
5. **中 — 本地后端重试/回退缺陷**：PR #6452，Ollama/vLLM 拥塞时未按预期回退而原地重试。**待合并，`conflict`**。[#6452](https://github.com/HKUDS/nanobot/pull/6452)
6. **低 — 测试断言失效**：PR #6351，原生 Seatbelt 测试仍按旧 exec 输出格式断言，尾部 `Elapsed` 行使成功断言失败、旧的 `endswith` 负向检查失效。**待合并**。[#6351](https://github.com/HKUDS/nanobot/pull/6351)

## 6. 功能请求与路线图信号

- **Matrix 按房间策略覆盖**（Issue #6286 → PR #6287）：`groupPolicy` 在 Matrix 上为频道级，仅 DM 可绕过，多房间部署缺少细粒度控制。已有对齐 Napcat 的实现，落地概率高。[#6286](https://github.com/HKUDS/nanobot/issues/6286)
- **WebUI 消息原位编辑重发**（PR #6323）：保留选中消息前缀、替换该消息及其后全部内容并重新生成。属已批准设计，但存在冲突，需先解冲突。[#6323](https://github.com/HKUDS/nanobot/pull/6323)
- **Langfuse 追踪配置**（PR #6517）：在「设置 → 系统 → 追踪」下提供开关、密钥对与服务 URL（高级项折叠），涉及依赖安装。[#6517](https://github.com/HKUDS/nanobot/pull/6517)
- **MCP Apps 宿主**（PR #6363）：自包含 HTML 应用在 WebUI 渲染，应用专属工具不再暴露给模型。[#6363](https://github.com/HKUDS/nanobot/pull/6363)
- **运行时控制重构**（PR #6519，p1，NAN-289）：以显式运行时控制替代斜杠命令与乐观客户端状态，是后续 WebUI/TUI 功能的前置基础设施。[#6519](https://github.com/HKUDS/nanobot/pull/6519)

判断：Matrix 相关（#6287、#6515）已于今日关闭，最可能进入下一版本；#6519 为 p1 重构，若解冲突顺利亦有望纳入；#6323、#6363、#6517 因冲突或范围较大，节奏偏慢。

## 7. 用户反馈摘要

- **跨平台痛点明确**：Windows 用户遭遇文件访问拒绝（#6514），说明网关租约写入路径此前未充分适配 Windows 语义。
- **通知纪律不足**：心跳机制会主动向用户最近频道推送内部状态（#6512），用户对"内部消息泄漏到对话频道"敏感。
- **客户端体验细节受重视**：Element Web 与 Element X 用户抱怨每条回复都带引用块（#6513），属升级引入的可见回归，已有可配置开关。
- **生产环境自托管需求真实**：PR #6452 作者明确表示缺陷是在生产环境中对本地 Ollama 实例运行 nanobot 时发现，说明 Ollama/vLLM 自托管是实际使用场景。
- **大规模部署诉求**：Issue #6286 描述频道级统一策略无法满足多房间差异化管控，指向多租户/多群部署场景。

## 8. 待处理积压

- **PR #5484**（MCP 业务错误信封，2026-08-22 创建，已挂起约 2 个月，`conflict`）：MCP 错误静默成功属正确性问题，建议优先解冲突。[#5484](https://github.com/HKUDS/nanobot/pull/5484)
- **PR #6291**（MCP 资源/prompt 失败结构化，2026-10-18，`conflict`）：与 #5484 同属 MCP 错误语义治理，可合并评估。[#6291](https://github.com/HKUDS/nanobot/pull/6291)
- **PR #6287 / Issue #6286**（2026-10-18 创建）：已关闭，确认处置完成，无需跟进。
- **PR #6323**（2026-10-20，`conflict`）、**PR #6351**（2026-10-20）、**PR #6363**（2026-10-21，`conflict`）、**PR #6452**（2026-10-25，`conflict`）：四条均在 4–9 天窗口内且状态为冲突，建议维护者集中安排 rebase，避免与 #6519 等新重构产生进一步冲突叠加。

---

**健康度小结**：今日关闭率可观（Issues 3/4、PR 7/16），维护者响应及时，缺陷从报告到修复的闭环在同日内完成（#6514→#6516、#6513→#6515）。主要风险在于 9 条待合并 PR 中多条标注 `conflict`，尤其 MCP 错误处理两条已积压较久，建议作为下一阶段优先级。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-10-29）

## 1. 今日速览

今日项目维持高强度社区活动：过去24小时 50 条 Issue 更新（47 条新开/活跃、仅 3 条关闭）与 50 条 PR 更新（48 条待合并、仅 2 条已合并/关闭）。活跃度评估为**高流量、低消化率**——新增贡献速度显著高于合并与关闭速度，PR 积压风险上升。当前积压集中在 gateway/session 状态一致性、插件依赖解析（android 标记）与桌面端会话展示三类问题。无新版本发布，今日主线为缺陷报告与修补型 PR。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭量有限，推进主要体现在修复型 PR 的提交与两处 Issue 关闭：

- **#143305 [CLOSED]** 插件准入因 core `uv.lock` 无法在 `sys_platform == 'android'` 拆分下重解析而失败（如依赖 `aiohttp` 的 homeassistant 插件）。同日 **#146547** 报告了同族残留问题——PM workspace-member extras 仍缺 android 标记，导致 v0.22.5 上 `mnemosyne` 安装失败。该类问题尚未完全收敛。
- **#146535 [CLOSED]** Desktop Messaging 在 multiplex 服务的次级 profile 上"Restart needed"徽标无法清除。
- **PR #122702 [CLOSED]** 桌面 composer 的 Markdown 列表编辑（未合并）。
- 待合并 PR 中值得关注：#146552 修复 Kanban 混合 assignee+标量编辑的原子性；#146222 修复 `-Q` 静默模式下 inline diff 泄漏到 stdout；#134111 处理超长纯推理最终响应；#146560 修复 TUI 会话选择器 null model 崩溃。

整体看，项目在缺陷收敛上有所推进，但 48 条待合并 PR 对 2 条合并的比例显示合并吞吐是当前瓶颈。

## 4. 社区热点

- **#105758**（22 评论）终端生命周期守卫因 9 月 3 日 scan-budget 提交后误判，阻断 `obsidian-headless` 等 Node.js CLI 调用。链接：NousResearch/hermes-agent Issue #105758。诉求：守卫的误报边界需与合法 CLI 调用解耦。
- **#38519**（21 评论，👍31）请求 Hermes Desktop 仅安装前端并直连远端已部署的 agent。链接：NousResearch/hermes-agent Issue #38519。高赞说明"前端/后端分离部署"是明确需求。
- **#11911**（16 评论，👍14）官方 iOS/Android 移动端 + 语音通话。链接：NousResearch/hermes-agent Issue #11911。
- **#131743**（14 评论）Codex 长任务出现 300 秒首个实质进度停滞，早期上下文压缩与改善相关。链接：NousResearch/hermes-agent Issue #131743。
- **#145022**（9 评论，P1）Kanban worker 在 gateway 停顿期间以 "Kanban execution unknown; retained by owner" 崩溃，进行中的工作丢失。链接：NousResearch/hermes-agent Issue #145022。

热点分布显示：终端/工具边界、部署形态、移动端与会话状态一致性是社区讨论的四大焦点。

## 5. Bug 与稳定性

按严重程度排列：

- **P1 · #145022** Kanban worker 批量运行在 gateway 停顿后崩溃，WIP 丢失。尚无 fix PR。
- **P2 · #146478**（今日新报）`session.create` 在 config 无 `model:` 时铸造不可恢复会话，表现为 `storage_unavailable`，且无法通过清空 state.db 恢复。尚无 fix PR。
- **P2 · #146428**（今日新报）cron run 在 delivery lane 抛出 `UnscopedSecretError` 时永久静默卡死（multiplexed profiles）。尚无 fix PR。
- **P2 · #146481**（今日新报）gateway 将 `hermes-gateway.service` 重写为 PM launcher，无已提交依赖环境时拒绝启动 → 重启循环，手工修复被覆盖。同族见 #135910（大小写不敏感文件系统上 `shutil.copytree` Errno 17）。
- **P2 · #139909** 桌面端将 stored cwd 为裸 home 目录的会话在 Sessions 侧栏完全隐藏（10-15 canary 引入）。尚无 fix PR。
- **P2 · #143918** 图片附件从不驱逐且全尺寸附着，图像密集会话每次 LLM 调用携带多 MB relay body。
- **P2 · #141205** 一次性 run 被 SIGKILL 后 `ended_at IS NULL` 永久残留，无 stale-open sweep 覆盖。
- **P2 · #131743** Codex 300 秒首进度停滞（见社区热点）。
- **P2 · #135910** macOS/APFS 大小写不敏感卷上 PM 无法提交依赖环境（v0.21.6 Docker）。

已有 fix PR 的对应缺陷：TUI null model（#146560）、`-Q` diff 泄漏（#146222）、`hermes update` 误报 state.db 损坏（#122990）、MCP YAML 引号 args（#85360）、SSH 输出跨块 UTF-8 撕裂（#100593）。

## 6. 功能请求与路线图信号

- **#38519** Desktop 纯前端安装（👍31，21 评论）：需求信号最强，但尚无对应 PR，落地优先级不明确。
- **#120618** Slack Code channel-scoped agent sessions（8 评论）：对接 Slack 2026-08-20 新特性，属生态集成类需求。
- **#11911** 原生移动端 + 语音（👍14）：体量较大，无 PR 迹象，短期难纳入。
- **#88209** Desktop Project 创建后列出/管理文件夹（当前仅可添加）。
- **#3226** `hermes model` 应只显示已配置凭证的 provider。

插件生态方面已有落地 PR：#146365（agents-hub）、#146563（dj-hermes）加入社区插件目录；#146562 优化 skills catalog 扫描性能；#101116 新增瑞典语 i18n。综合判断，**插件目录扩展与 CLI/桌面细节修复**更可能进入下一版本，前端分离部署与移动端仍处需求收集阶段。

## 7. 用户反馈摘要

- **部署形态痛点**：多机用户希望前端与 agent 解耦；另一方面 #146481/#135910 显示 PM 依赖环境在重启与跨文件系统场景下反复出错，用户被迫手工修复服务文件，且修改会被覆盖。
- **稳定性焦虑**：会话/运行状态残留（#139909、#141205、#146478）与 Kanban 崩溃（#145022）让用户对"工作是否被保存"缺乏信任，多次反馈"静默丢失"。
- **静默失败是最强负反馈**：#146428 明确指出同类 multiplex 问题中"其他在调用点大声失败，此例永久静默卡死"，用户对可观测性要求明确。
- **平台集成期望**：Slack Code、Windows 通知（#55179，👍3，声音过轻、无任务栏标记）等日常使用体验仍有缺口。
- **性能敏感**：#143918 指出每次 LLM 调用携带多 MB 图片数据，成本与时延双重影响。

## 8. 待处理积压

- **#3226**（2026-03-26 创建，2026-10-29 仍在更新）`hermes model` 显示未配置凭证的 provider，长期未落地。
- **#11911**（2026-04-18）移动端应用请求，持续更新但无对应 PR。
- **#38519**（2026-06-03，👍31）Desktop 纯前端安装，高赞需求长期无 PR。
- **#55179**（2026-06-29）Windows 桌面通知可发现性。
- **#85360 / #88195**（2026-08-13 / 08-17）MCP YAML args 修复与桌面侧栏滚轮修复，均已开放逾两月，仍待合并。
- **#145022**（P1）Kanban worker 崩溃至今无 fix PR，建议优先回应。

**维护者提示**：待合并 PR 与开放 Issue 的积累速度已明显超过消化速度，建议优先处理 P1 缺陷与积压超过 60 天的修复型 PR，以降低社区等待成本。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-10-29）

## 1. 今日速览
今日 PicoClaw 呈现“高清理、零新增”的维护性节奏：过去 24 小时关闭 1 条 Issue、关闭/合并 22 条 PR，无新版本发布，也无人新开或活跃中的 Issue。整体活跃度可评估为**中等偏维护型**——讨论端趋于平静，但合并端集中清理了大量长期积压的 PR（含 2026-02 至 04 提交的条目）。需注意大部分为 stale 或积压项的批量关闭，尚不能视为功能集中落地。项目健康度信号混合：清理效率高，但缺少新需求输入与版本节奏。

## 2. 版本发布
今日无新版本发布，本节省略。

## 3. 项目进展
今日 22 条 PR 全部为“已合并/关闭”，无待合并项，推进方向集中在通道扩展、Provider 支持与安全加固：

- **通道能力**：MQTT 通道支持（#2653）、微信通道多实例与配置增强（#2606）、iMessage 支持及 stop 命令/日志（#1268）、飞书工具进度反馈（#873）。
- **Provider 与模型兼容**：新增 Z.AI Provider（#177）、修复自定义模型协议报错（如 `zai-org/GLM-4.7`）（#664）。
- **安全与稳定性**：exec 工具环境变量白名单/黑名单（#1258）、通道 DoS 加固与媒体临时目录（#1541）。
- **协作框架**：多智能体协作与共享上下文 WIP（#423，标记为 WIP）。
- **文档**：Antigravity Provider 账号封禁风险告警（#1205）。

另有多条 `xuwei-xy` 的批量合并 PR（#1559、#1555、#1552、#1545、#1542、#1541），内容为汇总多个修复（如 SpawnStatusTool、Skills 助手、凭据加密、网关口令等）。**判断**：项目在通道广度与安全面上有实质推进，但多数条目为积压清理，需维护者确认实际落地范围。

## 4. 社区热点
今日讨论数据整体偏低：唯一 Issue #3427 仅 2 条评论；所列 PR 的评论数均显示为 `undefined`，👍 均为 0，无法据评论量排序。可关注：

- Issue #3427（CLOSED，stale）— 提议低依赖的 Plazmi MCP/CLI 持久化会话示例：https://github.com/sipeed/picoclaw/issues/3427
  诉求：社区希望 MCP CLI 与 heartbeat 能力承载“持久世界”类示例，结合真实 UTC 时间与 `pulse`/`digest` 实现回归式智能体交互。该 Issue 被 stale 关闭，但背后反映出对**持久会话与示例文档**的期待。

## 5. Bug 与稳定性
今日无新报告的 Bug、崩溃或回归 Issue。相关修复类 PR（均已关闭）：

- #664 自定义模型协议报错（`unknown protocol`）：https://github.com/sipeed/picoclaw/pull/664
- #1258 exec 工具敏感环境变量可被 LLM 覆盖的安全风险：https://github.com/sipeed/picoclaw/pull/1258
- #1541 通道 DoS 加固：https://github.com/sipeed/picoclaw/pull/1541
- #1559 / #1555 / #1552 / #1545 / #1542 批量修复合并：https://github.com/sipeed/picoclaw/pull/1559

严重程度：以上均为已关闭的历史项，今日无新增高危问题；#1258 与 #1541 属安全相关，建议在下次发版说明中明确。

## 6. 功能请求与路线图信号
- **MQTT 通道**（#2653）：面向 IoT/消息总线场景，可能纳入通道矩阵。
- **iMessage 支持**（#1268）：扩展消费级消息入口。
- **微信多实例**（#2606）：多账号/多实例运营诉求。
- **Z.AI Provider**（#177）：Provider 生态继续扩张。
- **多智能体协作框架**（#423，WIP）：路线图级能力，但状态为 WIP，短期难判定。
- **MCP/CLI 持久会话示例**（#3427，已 stale 关闭）：若维护者回应，可能转化为文档/示例任务。

## 7. 用户反馈摘要
可用评论素材有限（仅 Issue #3427 有 2 条评论，且未提供正文）。从 Issue 摘要可提炼：用户认可 PicoClaw 的 **MCP CLI 与 heartbeat** 能力，希望有轻依赖、可运行的持久化示例来演示“按真实时间推进”的智能体场景。其余 PR 均为功能性提交，未体现明确的正/负面用户评价。建议后续补充评论原文以形成有效反馈画像。

## 8. 待处理积压
- **stale 关闭的 #3427**：虽已关闭，但属社区示例诉求，若未纳入文档可能再次被提出：https://github.com/sipeed/picoclaw/issues/3427
- **#423 多智能体协作 WIP**：长期挂起后关闭，若路线图仍需要该能力，需重新立项评估。
- **批量合并 PR（#1559、#1555、#1552、#1545、#1542、#1541）**：创建于 2026-03 且长期滞留，反映 PR 流转周期偏长，建议维护者关注评审瓶颈。
- **#2653 MQTT、#2606 微信、#1268 iMessage**：均为 2026-02~04 提交的增强项，今日才关闭，需确认是合并还是放弃，避免功能预期落空。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-29

## 1. 今日速览

今日项目呈现"高合并、低新增"的维护型活跃状态：过去 24 小时合并/关闭 8 条 PR、仅 1 条 PR 待合并、1 条 Bug 新开、0 个新版本发布。当日合并内容高度集中于技能（skills）安装机制的安全加固与测试覆盖，由单一贡献者 zvi-fried 主导，显示核心团队正在系统性地收敛技能安装路径的权限边界。唯一活跃 Bug（#2528）为 Signal 渠道附件无法从容器内访问，已悬置约 5 个月未修复，属需关注的长期稳定性缺口。整体活跃度评估：**中等偏高（以合并消化为主，新增输入偏少）**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 8 条 PR 合并/关闭，均围绕**技能（skills）安装与渠道修复**两条主线：

**技能安装安全加固（主线）**
- **#3721** `fix(skills): require explicit installation and respect operator policy` — 使能力安装类技能必须显式调用，并将安装请求路由至受保护的 CLI，要求尊重部署拒绝与 `needs-setup` 状态、不得绕过拒绝策略。
- **#3720** `feat(skills): add opt-in source installation with guarded recovery` — 新增 `ncl skills list`、`plan` 及运维方启用的 `apply`；源码安装默认关闭，需显式启用 Git 源。
- **#3676** `feat(skills): add deterministic apply directives` — 引入确定性的 apply 指令。
- **#3678** `ci(skills): parallelize composition checks` — 并行化技能组合检查。
- **#3677** `test(skills): cover main and companion skills` — 补充主技能与伴随技能的测试覆盖。

**渠道与运行时修复**
- **#3686** `fix(slack): preserve human authorship for delegated uploads` — 修复 Slack 代理上传时人类作者归属丢失问题。
- **#3675** `fix(slack): make agent-flow tests executable` — 使 Slack agent-flow 测试可执行。
- **#3379** `fix(runner): skip wrap-nudge when the turn already sent via tools` — 当本轮已通过工具发送消息时跳过 wrap-nudge，避免重复提醒。

**推进程度评估**：技能安装从"可被隐式触发"转向"默认关闭 + 显式授权 + 运维策略优先"的模型，是本日最具分量的架构性收敛，同时配以 CI 并行化与测试补强，整体推进幅度较大但集中在单一子系统（skills）。Slack 与 runner 的修复属局部稳健性提升。

## 4. 社区热点

今日讨论热度整体偏低，无高评论或高反应条目：

- **Issue #2528**（1 条评论）— [链接](https://github.com/nanocoai/nanoclaw/issues/2528)：唯一有评论的活跃条目，反映 Signal 渠道附件互通问题。
- **PR #3721**（技能安装显式化）与 **PR #3720**（opt-in 源码安装）为当日标签最密集、涉及面最广的变更（覆盖 security、agent-runner、ncl-cli、setup-installation 等多个 area），虽无评论数据，但为当日实质焦点。

**诉求分析**：用户侧诉求集中于"渠道附件可用性"（#2528）；维护侧则体现为对"技能安装可控性/可审计性"的主动收紧，属于安全治理驱动的内部热点，而非外部用户讨论热点。

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 说明 |
|---|---|---|---|
| 中 | **Issue #2528** `[kind/bug] Signal channel: image/PDF attachments unreachable from agent container` | **OPEN，无 fix PR** | 通过 Signal 发送的图片/PDF 到达宿主机，但容器内 agent 无法打开。复现路径：v2 安装后通过 `/add-signal` 启用 Signal，从手机发送带图 DM 即可触发。 |

- 该 Bug 创建于 2026-05-18，更新于 2026-10-28，跨约 5 个月仍未关闭，评论仅 1 条，属"长期悬置、低讨论"的稳定性缺口。
- 今日无崩溃、回归或新开其他 Bug。

[Issue #2528 链接](https://github.com/nanocoai/nanoclaw/issues/2528)

## 6. 功能请求与路线图信号

今日无用户新提功能请求。结合已合并 PR 判断下一版本可能纳入的方向：

- **技能安装的运维授权模型**（#3720、#3721、#3676）已形成完整链路——`list`/`plan` 为只读，`apply` 需运维方显式开启 Git 源，默认关闭。该组变更很可能构成下一版本 skills 子系统的正式形态。
- **确定性 apply 指令**（#3676）暗示后续向可复现、可审计的安装流程演进。
- 渠道侧（Slack 作者归属修复 #3686）显示多用户/代理场景下的身份语义正在被补齐，可作为渠道能力扩展的前置信号。

## 7. 用户反馈摘要

基于现有材料可提炼的反馈有限：

- **真实痛点**：Signal 渠道的富媒体（图片/PDF）在容器内不可读，用户 brentkearney 按步骤即可稳定复现，说明附件落盘位置与容器可见路径存在隔离问题，影响以手机端为主要输入方式的用户。
- **满意度信号**：无直接正面评价数据。
- **不满意信号**：除 #2528 外无其他负面反馈；该 Issue 长期未修复本身构成体验层面的不满来源（推断，材料未给出用户原话）。
- **使用场景**：v2 安装 + `/add-signal` 技能启用的个人渠道接入场景。

## 8. 待处理积压

- **Issue #2528**（OPEN，2026-05-18 创建，2026-10-28 最后更新，1 条评论，0 👍）— [链接](https://github.com/nanocoai/nanoclaw/issues/2528)：唯一活跃 Bug，且为长期未解决项，建议维护者评估是否分派或标注优先级/复现环境要求。
- **PR #4236**（OPEN，bot 提交，2026-10-28）— [链接](https://github.com/nanocoai/nanoclaw/pull/4236)：`agent-images: v2026.10.0 -> v2026.10.0-20261028T1528`，将 Hardened 镜像指向新 digest（sha256:796588ce…），替换旧镜像。属自动化镜像刷新，建议及时合并以避免镜像漂移，同时核验新 digest 的构建来源。
- 其余 8 条 PR 均已关闭/合并，无其他可见积压项。

---
*数据来源：NanoClaw GitHub 仓库过去 24 小时 Issues/PR 活动。注：PR 评论数字段原始数据为 undefined，故未作讨论热度推断。*

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

# LobsterAI 项目日报 · 2026-10-29

## 1. 今日速览

过去 24 小时项目保持高节奏的工程推进：11 条 PR 有更新，其中 10 条已合并/关闭，1 条仍待合并；核心开发者 fisherdaddy 与 Mind-Hand 集中交付了媒体编辑、OpenClaw 集成、账户菜单、Artifacts 加载、CI 回归测试等多项改动。Issue 侧仅 3 条更新，且全部为 OPEN 状态，其中 2 条为同一用户的账号误封申诉（#2936、#2959），1 条为 OpenClaw 引擎升级路线图询问（#2956）。今日无新版本发布。综合来看，代码侧活跃度高、Issue 侧讨论量偏低，项目处于"交付密集、社区互动稀疏"的状态，整体健康度良好但需关注账号封禁类反馈的处理闭环。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 10 条 PR，覆盖多条产品线：

- **媒体能力（重点）**：PR #2952 新增全屏图片编辑工作室（浮动工具、版本对比、编辑进度），并优化会话内图片/视频工作流，视频确认时校验过期报价；PR #2954 改进图片消除（Erase）质量，改为仅根据蒙版边界裁剪近景并回贴源图，避免小标记被遗漏及未标记区域被重绘；PR #2958 统一技能/套件/计划为行内上下文标签，并将"系统默认/指定模型/不生成"设为互斥选项，稳定图片与视频切换时的面板布局（53 个测试文件、400 项测试通过）。
- **性能与稳定性**：PR #2953 改为从文件而非 data URL 加载图片 Artifacts，消除打开任务时经 IPC 读取全部图片并以 base64 存入 Redux 的内存与耗时开销；PR #2955 修复 ¥0.01 试用状态请求阻塞个人账户菜单打开的问题（改为菜单打开后异步加载，并设 5 秒超时）。
- **OpenClaw 集成修复**：PR #2951 修复 OpenClaw 忽略配置网关代理导致 ChatGPT/Codex token 刷新失败，以及 Computer Use MCP 的 bridge-secret 被转义为字面文本导致鉴权失败（平台标签：macOS）。
- **CI 修复**：PR #2957 确保仅改动打包脚本或回归测试的 PR 不再跳过整个 Vitest 套件。

此外，仍有 1 条待合并 PR（#2960，OpenClaw IM agent 工作目录热重载与过期模型覆盖重置）。整体看，项目在媒体编辑、会话交互、OpenClaw 兼容性三个方向上有实质推进。

- PR #2952: netease-youdao/LobsterAI PR #2952
- PR #2954: netease-youdao/LobsterAI PR #2954
- PR #2958: netease-youdao/LobsterAI PR #2958
- PR #2953: netease-youdao/LobsterAI PR #2953
- PR #2955: netease-youdao/LobsterAI PR #2955
- PR #2951: netease-youdao/LobsterAI PR #2951
- PR #2957: netease-youdao/LobsterAI PR #2957
- PR #2960: netease-youdao/LobsterAI PR #2960

## 4. 社区热点

- **#2936 [OPEN] 账号误封申诉**（评论 5 条，👍 0，创建于 2026-10-23，今日仍有更新）：今日互动最多的 Issue。用户 7597qqme 称两个 LobsterAI（有道龙虾）账号被封禁，声明未恶意使用、未刷接口、未批量调用，并推测误判可能源于本地第三方 DSH 插件。链接: netease-youdao/LobsterAI Issue #2936
- **#2956 [OPEN] OpenClaw 引擎升级至 v2026.10.x 路线图询问**（评论 1 条）：用户 baimeigood 指出项目当前固定使用 OpenClaw v2026.8.1，而最新稳定版为 v2026.10.7，其中包含 Agent 自动发现已安装 Skills、侧边栏交互式 MCP Apps 等改进。链接: netease-youdao/LobsterAI Issue #2956

诉求分析：一条指向**账号风控与第三方插件的兼容边界**（误封判断是否将第三方插件行为纳入考量），一条指向**上游引擎版本滞后带来的功能差距**。两者均涉及产品策略而非单纯技术缺陷，需要维护者给出明确回应。

## 5. Bug 与稳定性

今日报告的缺陷类问题较少，按严重程度排列：

- **中**：账号被系统判定封禁，导致无法登录/使用（Issue #2936、#2959，同一用户重复提交）。属风控误判类问题，**目前无对应 fix PR**，需人工核查。链接: netease-youdao/LobsterAI Issue #2936、netease-youdao/LobsterAI Issue #2959
- **已修复（今日合并 PR，属存量问题修复）**：OpenClaw 忽略网关代理导致 token 刷新失败、Computer Use MCP 鉴权失败（#2951）；¥0.01 试用状态请求阻塞账户菜单（#2955）；图片 Artifacts 全量读取造成的性能损耗（#2953）；CI 在跳过主进程构建时漏跑回归测试（#2957）。

今日未见崩溃或回归类问题的报告。

## 6. 功能请求与路线图信号

- **OpenClaw 升级至 v2026.10.x**（Issue #2956）：用户明确列出期望能力——Agent 自动发现已安装 Skills（v2026.10.1）、侧边栏交互式 MCP Apps 等。今日已合并的 #2951 与待合并的 #2960 均在修补 OpenClaw 集成层（代理路由、MCP 鉴权、IM agent 工作目录热重载），说明团队正在维护当前 OpenClaw 版本，但尚无证据表明已计划整体升级。**判断：升级诉求合理，但需维护者评估兼容成本，暂不能确认纳入下一版本。**
- **第三方插件（DSH 插件）使用边界**（源自 #2936）：用户提到曾在本地使用第三方 DSH 插件，若该行为与封禁判定相关，则涉及是否提供插件白名单或使用规范的说明。**判断：属政策/文档层面需求，尚无对应 PR。**

## 7. 用户反馈摘要

- **真实痛点**：账号被突然封禁且缺乏申诉渠道透明度，同一用户因原 Issue 标题含手机号而不得不重新提交（#2959），反映申诉流程与隐私处理存在不便；原 issue 标题历史中残留个人手机号，用户正请求维护者清理。
- **使用场景**：用户在本地安装第三方 DSH 插件并扩展使用 LobsterAI；部分用户深度依赖 OpenClaw 集成能力（Skills 发现、MCP Apps）。
- **不满意之处**：封禁判定疑似误判（用户自述无恶意调用）；上游引擎版本明显滞后，功能差距可见。
- **满意之处**：本期材料中未见明确的正面评价内容。

## 8. 待处理积压

- **#2936 账号误封申诉**：创建于 2026-10-23，已 6 天仍为 OPEN，评论 5 条但未见解决结论；且已被 #2959 重新提交替代，需维护者明确跟进条目并清理原 Issue 标题中的手机号。链接: netease-youdao/LobsterAI Issue #2936
- **#2959 重复申诉**：#2936 的重提交版本，今日新开、暂无评论，需与 #2936 合并处理。链接: netease-youdao/LobsterAI Issue #2959
- **依赖与 CI 升级 PR 集中关闭**：#2460（rimraf 5.0.10 → 6.1.3，创建于 2026-08-10）、#2667（trufflehog 3.88.30 → 3.97.4）、#2666（actions/labeler 5 → 7，均创建于 2026-09-14）今日以 `stale` 标记关闭，距今已积压 1.5–2.5 个月。建议核实这些升级是否已通过其他途径落地，避免依赖长期落后。链接: netease-youdao/LobsterAI PR #2460、netease-youdao/LobsterAI PR #2667、netease-youdao/LobsterAI PR #2666
- **#2956 OpenClaw 升级询问**：今日新开仅 1 条评论，建议维护者给出明确的版本跟进计划或暂不升级的理由。链接: netease-youdao/LobsterAI Issue #2956
- **#2960 唯一待合并 PR**：OpenClaw IM agent 工作目录热重载修复，今日创建，建议优先评审以避免与其他 OpenClaw 改动冲突。链接: netease-youdao/LobsterAI PR #2960

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

# CoPaw 项目动态日报（2026-10-29）

> 说明：以下内容完全基于所提供的 Issue/PR 数据生成。数据来源标注中部分链接显示为 `QwenPaw` 仓库命名，以下按原始数据保留。

## 1. 今日速览

- 过去 24 小时共 15 条 Issue 更新（新开/活跃 5，关闭 10），39 条 PR 更新（待合并 25，合并/关闭 14），无新版本发布。关闭量显著高于新开量，Issue 侧收敛良好；但 PR 侧仍有 25 条待合并，合并队列存在积压。
- 稳定性是本日主线：2.3.0-beta.1 暴露出插件加载失败（#8473）与桌面构建缺少资源（#8488）等问题，已有对应修复 PR（#8497）进入流程。
- 记忆系统（Auto-Dream、自动召回注入）集中出现多组相关 Issue/PR，是当前研发焦点，也暴露了“静默失败”类设计风险。
- 安全相关信号值得关注：CLI `env list/set` 明文回显环境变量的问题已提交修复 PR（#8501），尚未合并。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR（数据中标注为 CLOSED）：

- **#8497 [CLOSED] fix(plugins): tolerate import cache refresh failures during plugin loading**
  https://github.com/agentscope-ai/QwenPaw/pull/8497
  针对插件加载时 `importlib.invalidate_caches()` 未加保护导致后端插件全部加载失败的问题（对应 Issue #8473）提供容错处理。这是对 beta 版本启动级故障的直接修复。

- **#5490 [CLOSED] feat(console): navigable fullscreen image gallery for chat media**
  https://github.com/agentscope-ai/QwenPaw/pull/5490
  将聊天中工具卡片的单张图片预览改为可翻页的全屏画廊，改善控制台多图查看体验。创建于 2026-06-24，属长期挂起的体验改进终于落地。

- **#8358 [CLOSED] fix(providers): honor thinking defaults and declared wire controls**
  https://github.com/agentscope-ai/QwenPaw/pull/8358
  修复控制台显示的 thinking 设置与 OpenAI 兼容 provider 实际发送参数不一致的问题，涉及声明原生 effort 控制的模型。

整体看，今日推进集中在**插件稳定性、provider 参数一致性、控制台体验**三条线；但由于 PR 合并/关闭总数仅 14 条而待合并 25 条，项目向前推进的净速度受审阅带宽制约。

## 4. 社区热点

按评论数排序的活跃讨论：

- **#6116 [CLOSED] [bug, wontfix] Doom loop: agent repeatedly triggers same tool call in single turn**（9 条评论，本日最活跃）
  https://github.com/agentscope-ai/QwenPaw/issues/6116
  Agent 在单轮内以相同参数重复调用同一工具，约连续 6 次后才被系统检测并告警。该问题自 2026-07-14 挂起至今，最终以 `wontfix` 关闭。背后诉求是：仅“事后检测告警”是否足够，用户期待更早的循环中断机制。

- **#8464 [CLOSED] 手动 /compact 无视会话级模型切换**（4 条评论）
  https://github.com/agentscope-ai/QwenPaw/issues/8464
  会话中切换模型后手动压缩仍走 agent 级默认模型，当默认模型严格校验参数返回 400 时压缩彻底失败（复现上下文约 34 万 token）。反映多模型切换场景下配置一致性问题。

- **#8500 [OPEN] Auto-Dream silently drops memory**（2 条评论）
  https://github.com/agentscope-ai/QwenPaw/issues/8500
  解析失败时仍对文件打 checkpoint，导致整日记忆被丢弃且永不重试，同时 `success=True`。用户对“静默丢数据 + 成功状态误导”不满。

- **#7874 [OPEN] [size/XXXL] feat(pawapp): redesign the SDK and app control plane**（长期开放，2026-09-19 起）
  https://github.com/agentscope-ai/QwenPaw/pull/7874
  重大架构类 PR，涉及 PawApp 的 Host 契约与任务所有权，是当前体量最大的在途改动之一，需重点审阅。

## 5. Bug 与稳定性

按严重程度排列（依据影响面与是否阻断核心流程）：

**高（启动/构建级阻断）**

- **#8473 [CLOSED] 2.3.0-beta.1 所有后端插件启动时加载失败**（12/12 全部失败）
  https://github.com/agentscope-ai/QwenPaw/issues/8473
  根因为 `module_isolation.py:220` 中未加保护的 `importlib.invalidate_caches()`，与 #8265 同源、新调用点。**已有 fix PR #8497（已关闭）**。

- **#8488 [OPEN] 桌面/PyInstaller 构建缺失 visual_compression 资源**，导致 `FileNotFoundError: atlas-gray-native.ts`，Visual Compact 静默失效（Windows，2.3.0-beta.1）
  https://github.com/agentscope-ai/QwenPaw/issues/8488
  数据中未见对应 fix PR。

**中（功能失效/资源异常）**

- **#8500 [OPEN] Auto-Dream 静默丢弃记忆且打 checkpoint 不重试**
  https://github.com/agentscope-ai/QwenPaw/issues/8500
  数据中未见直接 fix PR；相关记忆修复 PR（#8457、#7835）针对的是召回注入方式，非此问题。

- **#8490 [OPEN] 打开语音转写设置页即向服务进程导入 whisper，RSS 约 690 MB 且不释放**
  https://github.com/agentscope-ai/QwenPaw/issues/8490
  状态接口为探测可用性执行真实 `import whisper`。数据中未见 fix PR。

- **#8464 [CLOSED] 手动 /compact 忽略会话级模型，默认模型校验失败时压缩必败**
  https://github.com/agentscope-ai/QwenPaw/issues/8464

- **#8150 [CLOSED] 飞书入站图文混发（post 内嵌图片）被静默丢弃**
  https://github.com/agentscope-ai/QwenPaw/issues/8150
  仅解析文字、不下载图片、无警告；与 #2792 出站方向问题相对应。

**低（UI/小问题）**

- **#8486 [OPEN] 控制台工具调用图标左侧被容器边缘裁切**（容器缺少水平内边距，放大/大字号时更明显）
  https://github.com/agentscope-ai/QwenPaw/issues/8486
  数据中未见 fix PR。

## 6. 功能请求与路线图信号

结合已有 PR 判断纳入下一版本的可能性：

- **`save_decision()` 结构化决策持久化（#6189，已 CLOSED）**
  https://github.com/agentscope-ai/QwenPaw/issues/6189
  诉求为防止上下文压缩驱逐关键决策，指出 agent 级写 MEMORY.md 的 workaround 存在“鸡生蛋”问题。与当前记忆系统改造方向一致，但数据中无对应实现 PR。

- **/rewind 回滚能力（#4129，已 CLOSED）**：希望支持换 prompt、修错字、回滚被 agent 弄乱的文件、保护上下文。
  https://github.com/agentscope-ai/QwenPaw/issues/4129

- **file guard 更细粒度控制（#4356，已 CLOSED）**：当前为全黑名单，期望支持只读目录，并与 tool guard 联动。
  https://github.com/agentscope-ai/QwenPaw/issues/4356

- **Hub 模式下管理员重置用户密码（#7740，已 CLOSED）**：基础运维能力补全。
  https://github.com/agentscope-ai/QwenPaw/issues/7740

- **未读推送消息更易访问（#8459，已 CLOSED，涉及 Console 前端）**
  https://github.com/agentscope-ai/QwenPaw/issues/8459

- **Docker 初始安装默认语言环境变量（#8481，OPEN）**，建议如 `QWENPAW_LANGUAGE`。
  https://github.com/agentscope-ai/QwenPaw/issues/8481

**路线图信号（来自在途 PR）**：本地模型管理抽为插件（#8499，WIP/XXXL）、本地 Piccolo 双向候选打分用于工具审阅与 ReMe 压缩（#8463）、PawApp SDK 与控制面重构（#7874）、Extension apps 增加 Install app 按钮（#8485）。“可插拔 provider + 本地小模型”是明显的演进方向。

## 7. 用户反馈摘要

- **对“静默失败”高度敏感**：多条 Issue（#8500 记忆被丢仍报成功、#8150 图片被丢无警告、#8488 Visual Compact 静默 no-op）指向同一模式——失败不告警、状态与实际不符。用户需要可观测性和重试机制。
- **长上下文的现实压力**：#8464 中用户上下文约 34 万 token，暴露压缩链路与模型切换、参数校验之间的耦合问题。
- **部署与运维诉求**：Hub 管理员重置密码（#7740）、Docker 默认语言（#8481）、安装易用性提问（#8498）反映企业/多用户部署场景的真实缺口。
- **安全感知**：`qwenpaw env list` 明文打印所有变量值、`env set` 回显已存值（#8501）——对运维环境是明显风险点。
- **对 agent 行为的信任问题**：doom loop（#6116）与压缩后回退旧决策（#6189）共同说明用户期待更可靠的 agent 状态管理。

## 8. 待处理积压

以下为创建较早、至今未合并（OPEN）或长期悬挂的条目，建议维护者优先关注：

- **#7874 [OPEN] [size/XXXL] PawApp SDK 与控制面重构**（2026-09-19 创建，已开放 40 天）
  https://github.com/agentscope-ai/QwenPaw/pull/7874
  体量最大、涉及架构契约，长期 open 会拖慢相关生态改动。

- **#8291 [OPEN] [first-time-contributor, Under Review, size/S] fix(memory): ReMe reranker 启用需非空 api_key**（2026-10-17，关联 #8276）
  https://github.com/agentscope-ai/QwenPaw/pull/8291
  小的正确性修复，已标记 Under Review 但 12 天未合入，对新贡献者体验不利。

- **#8400 [OPEN] [first-time-contributor, Under Review, size/XS] fix(skill): 修复 make-skill 校验器误报**（2026-10-23）
  https://github.com/agentscope-ai/QwenPaw/pull/8400
  内置 `make-skill` 被自身安全扫描器拦截，属自噬式缺陷，XS 体量却被阻塞。

- **#7835 [OPEN] [Under Review] fix(memory): 停止向渠道泄漏 auto-memory-recall 载荷**（2026-09-17 创建，超 40 天）
  https://github.com/agentscope-ai/QwenPaw/pull/7835
  与 #8457 同属记忆召回注入问题，两个 PR 并存，需明确收敛方案。

- **#8309 [OPEN] [Under Review] fix(cli): 在激活前发现 Ollama 模型**（2026-10-18）
  https://github.com/agentscope-ai/QwenPaw/pull/8309

- **Issue #6116**（2026-07-14 创建，本日以 `wontfix` 关闭）：doom loop 属核心可靠性问题，建议在关闭时补充后续处理说明或替代机制。
  https://github.com/agentscope-ai/QwenPaw/issues/6116

**健康度小结**：Issue 关闭节奏良好（10 关闭 / 5 新开），但 PR 审阅是当前瓶颈——25 条待合并中含 3 条 `Under Review` 且其中两条为 first-time-contributor 的小体量修复。建议优先清空 XS/S 级审阅队列以维持贡献者活跃度，并对 #7874 等超大 PR 制定拆分或里程碑计划。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

## ZeptoClaw 项目日报 — 2026-10-29

### 1. 今日速览

项目今日活跃度处于低位：过去 24 小时 Issues 更新为 0 条，无新版本发布，PR 侧仅有 1 条新提交的文档类 PR（#717）处于待合并状态。社区讨论、Bug 报告与功能请求均无新增，整体呈平稳静默状态。项目健康度层面无负面信号（无崩溃、无回归、无积压激增），但维护者侧的推进动作同样为零，今日未产生任何合并成果。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日无已合并或已关闭的 PR，项目代码主干未发生推进。唯一动向是新增文档类 PR #717（待合并），不涉及功能或修复。

- PR #717 `docs: add Deploy to Light Cloud button` — 作者 julia-kafarska，创建于 2026-10-28，更新于 2026-10-28，状态 OPEN，👍 0
  - 摘要：在当前已有的部署按钮旁新增“Deploy to Light Cloud”按钮，点击后打开 Light Cloud（https://light-cloud.com），并预先读取本仓库信息（框架、构建设置、取自 `.env.example` 的变量），以便用户直接运行。
  - 链接：https://github.com/qhkm/zeptoclaw/pull/717

**评估**：该 PR 属于部署入口的易用性/分发渠道扩充，对核心能力无影响，推进幅度有限。

### 4. 社区热点

今日无活跃讨论。唯一 PR #717 的评论数为 undefined（数据未返回），点赞数为 0，未形成社区关注度。无 Issues 讨论。

### 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告，稳定性无新增风险项。

### 6. 功能请求与路线图信号

今日无用户提出的新功能请求。现有唯一 PR 指向的方向是**降低部署门槛、拓展托管/一站式部署渠道**（Light Cloud 集成）。结合其仅为文档/按钮层面变更，判断该方向短期内更可能以文档与入口优化的形式落地，而非核心功能演进；是否纳入下一版本取决于维护者对第三方部署渠道的接纳意愿（PR 摘要中未提供更多信息）。

### 7. 用户反馈摘要

今日无 Issues 评论可提炼，暂无新的用户痛点、使用场景或满意度信号。唯一可间接观察的诉求来自 PR #717 的动机表述：希望用户能更省事地“直接运行”项目，即开箱即用与部署便捷性仍是贡献者关注的体验点。

### 8. 待处理积压

今日数据未提供长期未响应的 Issue 或 PR 明细，无法识别积压项。需提醒维护者关注的是 PR #717 目前尚无评论与反应（评论数数据缺失），建议尽快给出评审意见以避免贡献者流失；如后续多日仍无维护者响应，该 PR 将转为新增积压。

---

**数据说明**：本期所有结论均基于上述 GitHub 数据；PR #717 的评论数字段返回为 `undefined`，故不对讨论热度作进一步推断。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-10-29

## 1. 今日速览

项目今日保持高度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 41、关闭 9），PR 更新 50 条（待合并 48、合并/关闭 2），无新版本发布。合并侧明显落后于提交侧，合并率仅 4%，积压压力持续上升。讨论焦点集中在多租户权限隔离（#5982、#9647）、插件系统一致性与安全性（多由 IftekharUddin 提出）、以及 ZeroCode 前端体验（Audacity88 系列 PR）。安全/身份相关高优先级问题（S0/S1）仍在开放状态，是当前项目健康度的主要关注点。

## 2. 版本发布

今日无新版本发布，无相关说明。

## 3. 项目进展

过去 24 小时仅 2 条 PR 合并/关闭（分别为 #11486、#11987 之外的合并项，明细未在数据中展开），整体推进有限。已关闭的重要 Issues 包括：

- [#11432](https://github.com/zeroclaw-labs/zeroclaw/issues/11432) [CLOSED] 守护进程在中途被杀后会话永久停留在 `running` 状态（S2）。
- [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) [CLOSED] Web 聊天中途刷新导致用户提示词在界面与 localStorage 中丢失（S2）。
- [#11486](https://github.com/zeroclaw-labs/zeroclaw/issues/11486) [CLOSED] ZeroCode 配置保存/取消行为可预测性改进。
- [#11987](https://github.com/zeroclaw-labs/zeroclaw/issues/11987) [CLOSED] 内联 `nosemgrep` 注释无法抑制 Semgrep 告警的 CI 问题。

**评估：** 关闭项多为稳定性与开发体验修复，项目在稳健性上小幅前进；但功能层面的实质性合并今日为零，前进幅度有限。

## 4. 社区热点

讨论最活跃的条目（按评论数排序）：

| 条目 | 评论 | 链接 |
|---|---|---|
| #5982 多租户按发送者 RBAC | 11 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| #10999 从发布二进制验证 Discord 插件安装 | 9 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) |
| #6998 Schema 校验的记忆整合与有界回退 | 7 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) |
| #9647 知识图谱无按 agent 归属（S0） | 5 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) |
| #11416 Slack 频道线程中 "is thinking…" 状态消失 | 5 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) |

**诉求分析：**
- **#5982** 已在 2026-09-28 收敛为"在现有机制上构建发送者角色"的窄范围方案，说明社区讨论已从架构理想转向可落地实现，但至今未合并，落地仍是瓶颈。
- **#10999** 已在最终 v0.8.6 归档上验证 Discord 真实收发，属于"验证已通过、流程待收尾"状态，体现社区对发布物可复现性的高度重视。
- **#6998** 反映记忆整合当前依赖 prompt + `serde_json` 解析、跨模型脆弱的问题，是记忆子系统可靠性的核心痛点。

## 5. Bug 与稳定性

按严重程度排列：

**S0 - 数据丢失/安全风险**
- [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) 知识图谱全局共享、无按 agent 归属，任一 agent 可读写他人知识。P1、`risk:high`，尚无 fix PR 关联。

**S1 - 安全**
- [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) `gateway.pairing_dashboard` 配置被接受但完全未被读取，配对码永不过期。已标记 `release:v0.9.0`，尚无 fix PR。
- （#9647 同时属此级别）

**S2 - 功能降级**
- [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) 技能评审与创建在频道/webhook/gateway 轮次中从不运行。
- [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) 技能评审工具看不到通过 `skill_bundles` 分配的技能。
- [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) `plugin info` / `plugin list --verify` 对运行时拒绝注册的插件报告 `[loads]`。
- [#11562](https://github.com/zeroclaw-labs/zeroclaw/issues/11562) 插件更新期间 discovery 可能把某一代的 manifest 与另一代组件配对。
- 相关修复线索：PR [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320)（插件 webhook 经核心 RPC 分发）与 PR [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218)（配置 schema v4 迁移）仍在开放。

**S3 - 次要/可用性**
- [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) Slack 线程中 "is thinking…" 状态缺失（自 v0.8.5），状态 `in-progress`。
- [#11360](https://github.com/zeroclaw-labs/zeroclaw/issues/11360) 包锁文件对其他本地账户可读，可被持有导致安装/卸载失败。
- [#11358](https://github.com/zeroclaw-labs/zeroclaw/issues/11358) `plugin migrate` 未持锁移动包，可能合并进期间创建的目标目录。

**已关闭回归项：** #11432、#11517（见第 3 节）。

## 6. 功能请求与路线图信号

- **#5982 按发送者 RBAC**（enhancement，已 accepted）：范围已收敛，是多租户部署的前置能力，落地概率较高。
- **#6998 Schema 校验记忆整合**（accepted，`status:parking-lot`）：方向认可但被搁置，短期进入下一版本的可能性低。
- **#11890 记忆整合耐久性门控**（`memory.consolidation_evidence_gate`）：与 #6998 同属记忆可靠性主题，可视为后续候选。
- **#10993 完成公共 runtime 组合边界**（accepted，type:refactor）：可嵌入性架构任务，对应 PR #11730 正在推进 delegate 工具调用可见性，属同一方向。
- **#10162 插件安装种子阶段可重试**（in-progress）：部分路径已由 #11098 解决，剩余"已安装同包重播种"待定。

**路线图判断：** 结合开放中的 PR，下一版本（v0.9.0 标签）最可能聚焦：网关安全（PR [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) 可选 OIDC 登录、#9394 配对码）、配置迁移（PR [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218)）、以及频道消息可靠性与推理流式输出（PR #10600、#11744）。

## 7. 用户反馈摘要

- **安全与隔离是最大痛点：** #9647 用户直接以 S0 定性，指出"任何 agent 可读/改他人知识"；#9394 报告者强调"每一处引用都对照 HEAD 核验"，显示高级用户对安全审计要求严格。
- **多租户落地困难：** #5982 讨论长达半年，用户关心的是能在现有机制上真正用起来，而非全新子系统。
- **记忆子系统不可靠：** #6998 反馈跨 provider/model 时输出格式不一导致解析失败，用户希望有界回退而非静默降级。
- **插件开发体验受损：** #11336 描述"插件通过所有 CLI 检查却仍缺失于 agent"，属于典型的信任缺口；#11358、#11360、#11562 集中反映并发与权限边界问题。
- **前端体验细节：** #11486、#11517 反映 ZeroCode/Web 在保存、刷新、会话恢复上的可预测性不足；PR #11727 正是针对"重启后丢失已开会话列表"的用户抱怨。
- **渠道行为一致性：** #11416 用户温和询问 Slack 状态是否"有意移除"，属回归感知类反馈。

## 8. 待处理积压

长期开放、风险高且仍需关注：

- [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) 创建于 2026-04-22，已 6 个多月，多租户 RBAC 仍未落地。
- [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) 创建于 2026-05-29，处于 `parking-lot`，记忆整合可靠性长期悬置。
- [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) 创建于 2026-07-26，S1 安全问题，标 `release:v0.9.0` 但无 fix PR。
- [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) 创建于 2026-08-01，S0 数据隔离问题，已近 3 个月无修复。
- PR [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218)、[#10600](https://github.com/zeroclaw-labs/zeroclaw/pull/10600) 均带 `needs-author-action` 且体积 XL，合并推进受阻。
- PR [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320) 依赖 #11319 与 #11165 链式合并，属关键路径长链。

**健康度提示：** 待合并 PR 达 48 条，其中多条标记 `needs-author-action` 与 `size:XL`，建议维护者优先清理高风险的 S0/S1 安全项（#9647、#9394），并对长期 XL PR 建立分阶段合并策略。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*