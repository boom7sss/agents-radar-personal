# OpenClaw 生态日报 2026-11-11

> Issues: 423 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-11 17:55 UTC

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

# OpenClaw 项目日报 — 2026-11-11

## 1. 今日速览

项目保持高强度运转：过去 24 小时 Issues 更新 423 条（新开/活跃 251、关闭 172），PR 更新 500 条（待合并 322、合并/关闭 178），并发布 2 个版本。合并侧有明显产出（172 个 Issue 关闭、178 个 PR 合并/关闭），但待合并 PR 已累积至 322 条，评审吞吐成为当前主要瓶颈。稳定性议题集中在 **Windows 平台启动与重启可靠性**、**SQLite/WAL 与包更新链路**、**claude-cli 与 Codex 会话状态**三大方向，其中多个 P0 标签问题仍处 OPEN 状态。整体看：开发活跃度处于高位，但"高流入、慢评审、旧问题滞留"的结构性压力较明显。

## 2. 版本发布

**v2026.11.3**（openclaw 2026.11.3）
- **Private task results**：私有子智能体（subagent）的完成结果不再进入流式聊天回复，避免隐私内容外泄。#188490（致谢 @fuller-stack-dev）
- **Reliable child-task handoffs**：父任务取消子任务后，可以交接给替代工作，而不会留下被取消的子任务悬挂。发布说明在此处截断，其余条目无法确认。
- **破坏性变更**：发布说明中未提及。
- **迁移注意事项**：未提及。需要说明的是，今日讨论中已出现"从 2026.10.10 无法通过 `openclaw update` 升级到 2026.11.5-beta.1"的 P0 问题（#193962，已关闭），升级路径本身存在风险点，建议升级前先验证。

**v2026.9.37**（gateway-only，`extended-stable` 退役维护线）
- 由维护者明确决定，从已退役的维护线发布，内容为 2026 年 9 月底的 OpenClaw 加上关键安全更新、可靠性与性能修复，以及新模型支持等。
- 该版本仅面向 gateway，属于 `extended-stable` 通道，不是主线功能版本。发布说明末尾被截断，具体条目无法进一步确认。

## 3. 项目进展

今日合并/关闭 178 条 PR、关闭 172 条 Issue，可确认的关键推进如下：

- **claude-cli 转录路径产品决策落地**：#145309（P1，impact:session-state / message-loss）已 CLOSED。该问题指 claude-cli 后端只查 `$HOME/.claude`、忽略 `CLAUDE_CONFIG_DIR`，导致转录缺失时重置与会话切换失败。关闭状态下仍保留 `clawsweeper:linked-pr-open` 与 `needs-product-decision` 标签，说明修复路径与关联 PR 仍需跟进。
- **SQLite header-probe 超时升级链路**：#193962 已 CLOSED。该问题是 `openclaw update` 会运行已安装 updater 的 10 秒探针，使 #187197 的修复无法从 2026.10.10 触达。
- **doctor 迁移阻塞**：#179481 已 CLOSED。`doctor --fix` 在 gateway 运行时拒绝 `transcript-directives`，导致后续所有迁移步骤被阻断、且无在线修复路径。
- **控制台侧栏冷启动为空**：#173095 已 CLOSED，标记 `not-repro-on-main`。
- **会话转录写入竞争**：#154572 已 CLOSED。`sessions_spawn` 到 claude-cli 子会话时稳定报 `SessionTranscriptWriterClaimReboundError`，带有 `fix-shape-clear` 与 `queueable-fix` 标签。

待评审 PR 中有若干已具备 `proof: sufficient` 与"ready for maintainer look"状态，是下一波合入的重点候选：
- #192245：原生 subagent 完成后保留 outcome guidance（codex 扩展）
- #196427：发布前在会话内联审阅 template 包（XL 体量）
- #197308 / #197307 / #197311：knowledge 插件与 skills e2e 脚本的输入校验加固
- #197291：claude-cli 托管轮次默认启用 Claude Code 原生 WebSearch
- #190129 / #190001：PostgreSQL 下 `chat.history` 并发读性能与快照一致性
- #197314：修复 device-worker 轮次报 "plugin generation was superseded"（P1）

整体评价：关闭侧以"会话状态/迁移链路"类修复为主，属质量债偿还；功能侧净新增主要仍停留在评审队列，尚未形成版本级推进。

## 4. 社区热点

讨论最集中的仍是老问题，评论数与热度明显不成比例（多数 👍 为 0–2），说明讨论由少数深度用户推动，而非广泛社区共鸣。

- **#164294**（OPEN，40 评论，P2）：Gateway 状态库 WAL 自动 checkpoint 自启动起从未完成，被进程内 reader 钉住。https://github.com/openclaw/openclaw/issues/164294
- **#170956**（OPEN，31 评论，P0，impact:crash-loop）：Windows 下启动慢、插件关闭不干净、`schtasks` 权限错误，使重启与更新"多次重试才能成功"。https://github.com/openclaw/openclaw/issues/170956
- **#193962**（CLOSED，26 评论，P0，diamond lobster）：升级链路无法触达探针修复。https://github.com/openclaw/openclaw/issues/193962
- **#168955**（OPEN，21 评论，P1）：同一 Windows 主机从 2026.9.9 升到 2026.10.1 后，ready 时间由 ~410s 恶化到 ~1030s，`sidecars.control-ui-assets` 独占 477s。https://github.com/openclaw/openclaw/issues/168955
- **#123792**（OPEN，18 评论，P2）：claude-cli 后端下助手回复在 Control UI 与 Android 端被渲染两次（Telegram 不受影响）。https://github.com/openclaw/openclaw/issues/123792

**诉求分析**：热点几乎完全被"运维可靠性"占据——WAL 卡死、Windows 服务管理、启动耗时、升级失败，都是会影响日常可用性的基础问题；WAL 议题可追溯到 2026-10-03，却仍在 `needs-maintainer-review`，反映出核心维护者注意力被新流入淹没。

## 5. Bug 与稳定性

**P0 / 发布阻断级**

| Issue | 状态 | 问题 | Fix PR |
|---|---|---|---|
| #170956 | OPEN | Windows 启动慢、插件关闭不干净、`schtasks` 权限错误 | 无（`no-new-fix-pr`）|
| #194664 | OPEN | 原生 Codex harness 下受保护的 continuation 阻塞后续所有轮次，而 Stop 报告无活动运行（2026.11.1）| 未见 |
| #146791 | OPEN | App Store iOS 2026.9.2 能配对但从不发布 `push.apns.register`，导致推送与唤醒失效 | 无 |
| #193962 | CLOSED | 升级无法触达 SQLite 探针超时修复 | 修复在 2026.11.5-beta.1（#187197），但升级路径已阻断 |

**P1 / 会话与消息丢失**

- #168955：Windows 启动回归，ready ~1030s（无 fix PR）https://github.com/openclaw/openclaw/issues/168955
- #170928：Windows 2026.10.2 启动需 7–9 分钟且就绪后间歇无响应（regression）https://github.com/openclaw/openclaw/issues/170928
- #125764：Telegram 适配器出站发送一次网络失败即永久死信，无重试、无 `reconcileUnknownSend`（`source-repro`）https://github.com/openclaw/openclaw/issues/125764
- #144809：claude-cli 超出 `RUN_STALE_TAKEOVER_MS` 的轮次丢失全部生成内容（`needs-product-decision`）https://github.com/openclaw/openclaw/issues/144809
- #91931：预置 SOUL.md/IDENTITY.md/USER.md 导致首次运行前自动完成 bootstrap 并删除用户的 BOOTSTRAP.md（P1，fix shape clear）https://github.com/openclaw/openclaw/issues/91931

**P2 / 状态与数据一致性**

- #151962：幽灵用户消息——心跳轮询等内部运行时字符串被当作 user prompt 提交且不落 `transcript_events` https://github.com/openclaw/openclaw/issues/151962
- #101929：上下文溢出预估器高估约 2.3–2.6 倍（tool-result 按 2 字符/token 计未截断转录）https://github.com/openclaw/openclaw/issues/101929
- #112638：`session.maintenance` enforce 模式不约束存储，thread/channel 条目被豁免回收 https://github.com/openclaw/openclaw/issues/112638
- #141172：首会话提交前死亡的运行永久泄漏 `agent.run.started`，trajectory flush 外键失败 https://github.com/openclaw/openclaw/issues/141172
- #172986：WebChat 对特殊目录 `file:` 链接做中间截断，并出现间歇 payload 变异 https://github.com/openclaw/openclaw/issues/172986
- #162585：Windows 插件 source-capture staging 反复物化自身包，npm 树线性膨胀（290MB→612MB+ / 24 分钟）https://github.com/openclaw/openclaw/issues/162585

**已具备修复 PR 的相关项**：PR #197118 在发布前拒绝顶层 union 的工具输入 schema（对应 claude-cli 中途 400 错误）；#197299 修复 Gateway 权限撤销后的重连循环（标记 security-sensitive 与 compatibility 风险）；#195370 修复 cleanup 抛错导致会话重置失败与 rollover 超时误报。

## 6. 功能请求与路线图信号

- **跨提供方 cron 回退授权**（#192009，diamond lobster）：允许显式授权 cron 主模型与回退模型各自绑定的 provider/account（OpenAI 主 + xAI 回退）。属配置模型层改动，尚无对应 PR，进入下一版本的概率较低。
- **memory 逐条分块可配置**（#179954）：让 `MEMORY.md`/`USER.md` 之外的自定义记忆文件也走逐条 chunk 索引；已有 `linked-pr-open`，有较大概率随下个小版本落地。
- **插件进度卡 SDK 与可信插件准入**（#176273）：社区工作流插件向请求会话的原生进度卡贡献进度，并配套可信插件准入。标注 impact:security，需产品决策，短期难纳入。
- **Android 通知体验**（#143387）：会话感知前台行为、agent/会话标签、排除内部 Dreaming、同用户跨设备抑制。
- **Doctor 恢复能力**（#170562）：以受支持方式列出并退休"卡在终态子运行上的 requester settle wake"，避免手改状态库。

**已有 PR 支撑、可判为近期落地的方向**：claude-cli 默认启用原生 WebSearch（#197291）、Advisor 默认开启并移出 Labs（#197029，仍为 Draft）、模板包内联审阅（#196427）、worktree 会话模板预热（#197301）。

## 7. 用户反馈摘要

**真实痛点**
- **Windows 是最大不满来源**：启动耗时从 ~410s 恶化到 ~1030s、7–9 分钟就绪、`schtasks` 权限错误需要"反复重试"。用户用"pas na veel proberen"（多次尝试之后才行）描述升级体验。
- **升级链路不可靠**：已安装的 updater 运行旧探针，导致修复"看得见、够不着"（#193962），用户被迫停在 2026.10.10。
- **静默失败最伤信任**：Telegram 发送失败无重试、无用户可见错误（#125764）；工具驱动的 dashboard 会话在长度终结失败后静默结束（#144876）。
- **内部状态泄漏到 UI**：会话恢复时的系统上下文注入被渲染成可见聊天消息（#165041）；长路径被中间截断。
- **自学习闭环失效**：后台经验复盘 50 次连续失败、完成率 0%（2026-09-27 起，重多智能体/多渠道配置），用户明确感受到"自我学习"能力名不副实（#164279、#177505）。

**使用场景**：重度多智能体 + 多渠道（WeChat bridge、Telegram、Matrix、Control UI + Android）；claude-cli 订阅制与 Codex 原生 harness 两条后端路线都被真实生产使用；macOS Apple Silicon 与 Windows 双平台并行。

**满意信号**：问题被关闭时有用户回访确认复现情况（如 #141172 的 recurrence check），说明部分核心用户仍在积极参与验证；但多数高价值 Issue 的 👍 仅 0–2，社区投票信号偏弱。

## 8. 待处理积压

**长期 OPEN 且缺 fix PR 的高价值项**

- #164294（2026-10-03 起，40 评论，P2）：WAL checkpoint 永不完成——已挂 `needs-maintainer-review` 六周。https://github.com/openclaw/openclaw/issues/164294
- #101929（2026-07-08 起，13 评论）：上下文预估高估 2.3–2.6 倍，直接影响成本与截断决策。https://github.com/openclaw/openclaw/issues/101929
- #112638（2026-07-22 起，10 评论）：维护策略不约束存储上限，长期运行必然膨胀。https://github.com/openclaw/openclaw/issues/112638
- #91931（2026-06-10 起，9 评论，P1）：bootstrap 覆盖用户 BOOTSTRAP.md，属首次使用即损坏用户资产，且已标 `fix-shape-clear` 却仍在 `needs-product-decision`。https://github.com/openclaw/openclaw/issues/91931
- #125764（2026-08-18 起，14 评论，P1）：Telegram 死信无重试。https://github.com/openclaw/openclaw/issues/125764
- #123792（2026-08-14 起，18 评论）：回复双重渲染，跨 Control UI 与 Android。https://github.com/openclaw/openclaw/issues/123792

**评审队列压力**：322 条待合并 PR 中，多份标记 `status: 📣 needs proof` 或 `⏳ waiting on author`（#179944 xAI HTTP 426、#197126、#197301 等），其中 #197126 带 `merge-risk: 🚨 security-boundary`，安全评审资源可能成为新瓶颈。

**建议关注**：优先清理"已标 fix-shape-clear / queueable-fix 但缺产品决策"的长期项（#91931、#144809、#165041），以及可复现但无人认领的 Windows 启动族问题（#170956 / #170928 / #168955），三者同源可能性高，合并处理可一次性降低发布阻断风险。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析（2026-11-11）

## 1. 生态全景

个人 AI 助手生态已形成明显的规模断层：OpenClaw 以单日 423 条 Issue、500 条 PR 更新和 2 个版本的体量，成为唯一进入"平台级"量级的项目，其余项目单日 PR 更新普遍在 0–50 条之间。当前生态的主要矛盾已经从"功能是否有"转向"运维是否可靠"——Windows 平台启动、升级链路、消息静默失败、通道插件启动时序成为多个项目共同的痛点，且这些问题的共同特征是"健康检查正常但实际瘫痪"。同时出现了两次清晰的架构性动作：CoPaw 与 NanoBot 分别在推进"能力插件化/退役旧配置模型"，说明头部跟随者正在为下一轮扩展做底层重构，而非功能堆叠。整体看，生态正处于"高流入、慢评审、质量债集中偿还"的阶段，合并吞吐而非提交量是衡量项目健康度的关键指标。

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 / 关闭） | PR（待合并 / 合并·关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 251 / 172（共 423 更新） | 322 / 178 | 2（v2026.11.3、v2026.9.37） | 高活跃，但评审吞吐为瓶颈，多 P0 OPEN |
| **CoPaw** | 6 / 2（共 8 更新） | 25 / 8 | 1（v2.3.0 Stable） | 发布驱动活跃期，合并滞后于提交 |
| **Hermes Agent** | 39 / 11（共 50 更新） | 46 / 4 | 0 | 输入远大于输出，合并吞吐偏低 |
| **ZeroClaw** | 3 / 6（共 9 更新） | 49 / 1 | 0 | PR 高吞吐、合并几近停滞，v0.9.0 蓄力期 |
| **NanoClaw** | 0 | 15 / 11 | 0 | 高吞吐、低外部互动，评审负载集中于单一成员 |
| **LobsterAI** | 1 / 0 | 5 / 8 | 0 | 工程驱动，当日关闭率 8/13，社区互动偏低 |
| **NanoBot** | 数据未完整（Issue 更新 2 条） | 8 / 8 | 0 | 质量收敛阶段，多条待合并 PR 标 `conflict` |
| **Moltis** | 0 | 0 / 2（均 CLOSED） | 0 | 低活跃，仅清理两条挂起约两月的长周期 PR |
| **PicoClaw** | 0 / 1 | 0 | 0 | 极低频维护窗口 |
| **NullClaw / IronClaw / TinyClaw / ZeptoClaw** | 无活动 | 无活动 | 0 | 静默 |

> 说明：NanoBot 的 Issue 总数在材料中未完整给出，表中按可用数据标注；PicoClaw 与 Moltis 的 PR/Issue 明细均按材料原文。

## 3. OpenClaw 在生态中的定位

**优势**：
- **唯一具备发布节奏的项目**：今日两个版本中，v2026.11.3 包含子智能体隐私与子任务交接的实质语义变更，其余项目当日均无发布。
- **问题分类体系成熟**：P0/P1 分级、`impact:session-state`、`fix-shape-clear`、`queueable-fix`、`proof: sufficient` 等标签形成了可操作的 triage 语言，关闭侧 172 个 Issue 说明质量债偿还机制在运转。
- **多后端路线被真实生产使用**：claude-cli 订阅制与原生 Codex harness 两条路线并行，且都有针对性的 session-state 修复（#145309、#194664、#197291）。

**技术路线差异**：OpenClaw 采用"核心 + 扩展"的双通道发布（主线 + `extended-stable` 退役维护线），并已建立明确的产品决策标签体系（`needs-product-decision`），这在生态内尚无同类。

**社区规模对比**：40 评论级 Issue（#164294、#170956）在生态内绝无仅有——Hermes Agent 最热 Issue 为 60 评论，是唯一在讨论热度上接近的项目；其余项目最热条目普遍在 1–4 评论量级。但需注意 OpenClaw 多数高价值 Issue 的 👍 仅 0–2，说明其讨论由少数深度用户驱动，广度共鸣仍弱。

**风险面**：322 条待合并 PR、多份 `merge-risk: security-boundary` 标签、以及"已安装 updater 运行旧探针导致修复够不着"的升级死锁（#193962），构成生态内最复杂的自举风险。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **可观测性失真 / 静默故障** | OpenClaw（#125764 Telegram 死信、#164294 WAL 卡死）、PicoClaw（#3468 `/health` 正常但 agent loop 挂起）、ZeroClaw（#12391 trace 日志断档、#12390 shell 吞 stderr）、Hermes（#151241 ACP 污染 stdout） | 健康检查与日志必须反映真实故障；错误信息必须透传给模型以支持自我纠错 |
| **状态与上下文保真** | OpenClaw（#151962 幽灵用户消息、#141172 `agent.run.started` 泄漏）、ZeroClaw（#8794 停止即清空工具调用与思考）、NanoBot（#6628 中断回合未落定） | 打断/重启/取消不应销毁已完成的工作轨迹；内部运行时字符串不得进入用户上下文 |
| **多通道/多房间路由正确性** | NanoBot（#6619 心跳输出串投到错误房间）、NanoClaw（#4335 sticky follow-up 被误扣、审批卡片跨 Slack/Discord 截断）、Hermes（#153726 WhatsApp BSUID 误匹配）、CoPaw（#8538 Matrix 多工作区仅首个生效） | 消息隔离、精确比对、平台长度约束下的交付一致性 |
| **Windows / 桌面端兼容性** | OpenClaw（#170956、#168955、#170928 启动 7–9 分钟）、CoPaw（#8616、#8669 桌面版 Feishu 原生库加载）、Hermes（#112961 Desktop FAST_FAIL） | 桌面分发是真实使用路径，但启动可靠性与打包链路是集中受害面 |
| **安装与升级链路** | OpenClaw（#193962 升级死锁）、Hermes（#122529 venv 路径缺失）、CoPaw（v2.3.0 通道插件化后启动脆弱）、NanoClaw（#4316/#4317 setup 路径 shell 拼接） | "升级不砸生产"；安装/升级路径本身需具备系统级加固 |
| **凭据与权限边界** | Hermes（sec-marathon：#153722 WSL 注入、#153723 `.skillignore` 绕过、#153713 文件权限）、ZeroClaw（#12387 firejail `--`、#12392 RUSTSEC-2026-0486）、NanoClaw（#4318 CI 只读令牌） | 插件生态扩张同步带来攻击面扩张，安全评审资源可能成为新瓶颈 |
| **共享会话模型的退役与收敛** | NanoBot（#6621/#6626 退役全局共享会话）、ZeroClaw（#9809 多模型 provider profile，schema-v4） | 从"全局共享"向"按会话/显式路由"迁移，属配置模型层重构 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全能型个人助理平台（多智能体 + 多渠道 + 控制台 + 移动端） | 重度自托管用户、多后端并行使用者 | 主线 + extended-stable 双通道；原生 subagent 与 claude-cli/Codex 双后端；SQLite/WAL 状态库 |
| **CoPaw** | 通道插件化 + 本地决策模型 | 企业/集成部署、多工作区多租户 | v2.3.0 引入 Piccolo 4B/9B/27B 本地决策模型（工具审查 + 上下文压缩）；三个 XXXL 插件化重构并行（agent/MCP/provider） |
| **Hermes Agent** | 统一网关 + 插件市场 + 团队云 | 自托管重度用户、Hermes Cloud 团队场景 | 10/14 统一网关将所有本地会话并入单进程；Plugin Hackathon 驱动的第三方目录；sec-marathon 安全专项 |
| **ZeroClaw** | 运行时可靠性 + 沙箱安全 + 语音通道 | 生产环境自托管、需沙箱隔离 | Rust 栈（rustix/firejail）、schema-v4 provider profile、Gemini speech-to-speech broker（parking-lot） |
| **NanoClaw** | 多通道交付质量（Slack/Discord/Mattermost 等） | 团队协作部署 | 单核维护者主导，Mattermost 分片、审批卡片渲染为一等公民 |
| **NanoBot** | WebUI 稳定性 + MCP 生态 | WebUI 重度使用者 | 退役共享会话模式，转向按会话/显式话题路由 |
| **LobsterAI** | Cowork 协作会话 + 商业化运营位 | 桌面端 C 端用户 | renderer 层密集迭代；启动弹窗/侧栏广告投放体系；macOS 打包链路 |
| **PicoClaw / Moltis** | 轻量部署 / 钩子生命周期 | 中小规模自托管 | Moltis 走 hook 生态（`tool_call_id` 贯通、`AgentEnd` 派发）+ 外部 CLI 直连（AGY OAuth） |

**核心分化**：OpenClaw 与 Hermes 在"单一网关 vs 多后端并行"上路径相反；CoPaw 与 ZeroClaw 都选择把智能体内嵌到本地（本地决策模型 / 本地沙箱），而 NanoBot 与 NanoClaw 更聚焦于"交付层正确性"。

## 6. 社区热度与成熟度

**分层结论**：

- **平台级（快速迭代 + 质量债并行）**：OpenClaw。开发活跃度无可争议第一，但"高流入、慢评审、旧问题滞留"结构明显，WAL 议题挂 `needs-maintainer-review` 六周、#91931 自 6 月 10 日起仍待产品决策，说明核心维护者注意力被新流入淹没。
- **发布驱动型（快速迭代）**：CoPaw（v2.3.0 Stable + 4 小时安装验证窗口 #8681）、LobsterAI（当日关闭率 8/13）。两者均有明确版本节奏或高频日清。
- **架构重构型（蓄力期）**：Hermes（46 待合并 / 4 合并）、ZeroClaw（49 待合并 / 1 合并）、NanoBot（退役共享会话）。三者待合并队列显著高于合并量，处于 v0.9.0 或架构级插件化的整合前夜。
- **质量巩固阶段**：NanoClaw（3 条实质合入均为加固类，无新功能）、NanoBot（打磨 WebUI 稳定性而非扩张能力）、Moltis（清理两条挂起约两月 PR）。
- **低频/静默**：PicoClaw（单 Issue 日清）、NullClaw、IronClaw、TinyClaw、ZeptoClaw。

**成熟度警示信号**：NanoClaw 15 条待合并 PR 中 12 条来自同一核心成员、Issues 通道当日完全静默；ZeroClaw 多个 `needs-author-action` PR 长期停留；Hermes 三个 XXXL 插件化 PR 相互架构耦合。评审资源单点化是生态内普遍风险，OpenClaw 的 `merge-risk: security-boundary` 积压正是这一风险的放大版。

## 7. 值得关注的趋势信号

1. **"静默故障"成为信任杀手，超过功能缺失**。PicoClaw 的 `/health` 报正常但 agent 挂起、ZeroClaw 的 trace 日志断档、OpenClaw 的 Telegram 死信无重试——用户在多个项目中反复表达同一诉求：宁可显式失败，不可静默瘫痪。对开发者的参考价值：健康检查应覆盖依赖连接状态，错误必须透传给模型（ZeroClaw #12390 的"模型只知道失败了"是最直接的反例）。

2. **打断/取消路径是当前最被低估的可靠性缺口**。ZeroClaw #8794（停止即清空工具调用与思考）、NanoBot #6468（取消并行工具批次残留运行）、OpenClaw #144809（超时轮次丢失全部内容）分属三个项目但指向同一设计缺陷：取消语义未与状态持久化对齐。这是 agent 自主性提升后的必然代价，值得作为架构设计的一等约束。

3. **插件化扩张与安全评审资源形成剪刀差**。CoPaw 三个 XXXL 插件化重构、Hermes Plugin Hackathon 目录扩张、ZeroClaw 沙箱加固 PR 集群，同时伴随 OpenClaw `security-boundary` 积压与 Hermes sec-marathon。趋势判断：下一阶段瓶颈将从"功能开发"转向"安全评审吞吐"，具备自动化安全门禁（如 NanoClaw #4318 的 CI 只读令牌与 SHA 校验）的项目将获得结构性优势。

4. **本地小模型内嵌进入产品化阶段**。CoPaw v2.3.0 将 Piccolo 4B/9B/27B 用于工具审查与上下文压缩，并给出 BF16/Q8_0 量化推荐与 HF/ModelScope 双下载源——这是生态内首次把"本地决策模型"作为稳定版特性交付，而非实验特性。配合 ZeroClaw 的本地沙箱（firejail）与 Moltis 的免 API key 外部直连，反映"降低对远端 API 依赖"正在从成本考量升级为架构选择。

5. **共享会话模型正在被系统性放弃**。NanoBot 明确退役全局共享会话（#6621 + 文档 #6626 同步），ZeroClaw 推进 schema-v4 多 provider profile。共同信号：单会话全局状态的隔离性问题在多租户/多房间场景下不可调和，显式路由正在成为默认设计。

6. **Windows 桌面端是被验证的真实分发路径，但工程质量最薄弱**。OpenClaw（三起启动回归同源可能性高）、CoPaw（LTSC 启动失败、Feishu 原生库路径含 `\\?\` 与 `..`）、Hermes（Desktop FAST_FAIL、多 profile 失败需重启）共同表明：桌面打包链路（原生库加载、公证、服务管理）缺乏与核心逻辑同等的测试投入，是发布阻断的高发区。

7. **社区投票信号普遍偏弱，深度用户驱动讨论**。OpenClaw 高价值 Issue 的 👍 多为 0–2、NanoClaw 全部 PR 零评论零点赞、PicoClaw 唯一 Issue 零点赞。对维护者的参考：不宜以 👍 数排优先级，应依赖 `fix-shape-clear`、`source-repro`、`proof: sufficient` 等可验证标签；同时说明多数项目的用户反馈入口活跃度低于开发活跃度，是否存在模板或入口摩擦值得自查（NanoClaw 日报已提出该疑问）。

---

*本报告严格基于所提供 2026-11-11 各项目动态生成；材料中标注为 `undefined`/未提供的字段（PR 评论数、NanoBot Issue 总数、Moltis PR 最终合并状态等）未作推断或量化断言。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-11-11）

## 1. 今日速览

项目今日保持高节奏迭代：24 小时内 16 条 PR 更新（8 条待合并、8 条已合并/关闭），无新版本发布。WebUI 稳定性与配置清理是当日主线——多个已关闭 PR 聚焦 WebUI 中断回合、上下文面板、模型预设保存等体验修复，同时"退役共享会话/旧 OpenAI 选择器"的重构方向初现。Issue 侧仅 2 条更新，社区讨论热度偏低的表象需结合评论数据缺失（PR 评论数均为 undefined）谨慎解读。整体健康度良好，但 8 条待合并 PR 中多条标记 `conflict`，合并队列存在积压风险。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日关闭/合并的 8 条 PR 推进了以下方向：

- **WebUI 健壮性集中修复**：#6628 修复网关重启后中断回合未落定、页面仍显示 Stop 的问题；#6629 为展开的上下文面板补上关闭控件；#6631 精简模型预设保存为单次写入，避免中途失败留下半成品预设；#6586 通过记录分页保留超长回合历史，不再静默丢失答案、推理与工具活动。
- **流式输出正确性**：#6627 修复连续流式片段拼接处丢失换行/缩进的问题。
- **配置清理（破坏性）**：#6615 在 v0.4.0/v0.4.1 两版转换窗口后，正式退役旧 OpenAI 选择器 `apiType`/`api_type`，显式旧配置将被拒绝。
- **长期 PR 清理**：#2767（2026-04 创建的工具限制配置化，标记 `conflict`）今日关闭。

整体看，项目当日主要在"打磨已有功能的稳定性"而非扩张新能力，属于质量收敛阶段。

## 4. 社区热点

- [#6619（OPEN）Heartbeat 输出投递到最近更新房间](https://github.com/HKUDS/nanobot/issues/6619) — 1 条评论，是今日唯一活跃 Issue。多房间部署下，心跳回合的结果被投递到 session store 中最近更新的房间，而非与工作本身关联的路由，导致无关房间信息泄漏。涉及多频道场景下的消息隔离与路由正确性，值得优先关注。
- [#6032（OPEN）WebUI 可配置本地受信扩展面](https://github.com/HKUDS/nanobot/pull/6032) / [#6014（OPEN）Keenable MCP 预设](https://github.com/HKUDS/nanobot/pull/6014) — 均为 10 月初创建、持续更新的长期 PR，反映社区对 WebUI 可扩展性与 MCP 生态接入的持续诉求（注：两 PR 评论数在数据中未提供，无法量化讨论热度）。

## 5. Bug 与稳定性

按影响程度排列：

1. **多房间消息串投（高）** — [#6619](https://github.com/HKUDS/nanobot/issues/6619)：心跳回合输出投递到错误房间，可能造成跨房间信息泄漏。目前**未见对应 fix PR**。
2. **取消后并行工具未收尾（中高）** — [#6468](https://github.com/HKUDS/nanobot/pull/6468)：取消并行工具批次时 `AgentRunner` 可能先于兄弟工具清理完成，残留运行；已有 fix PR，但标记 `conflict` 且自 10-26 起待合并。
3. **网关停止不持久（中）** — [#6624](https://github.com/HKUDS/nanobot/issues/6624)：`nanobot gateway stop` 在 systemd `Restart=always` 下无效。**已关闭**，修复详情数据未提供。
4. **WebUI 重连与请求关联（中）** — [#6617](https://github.com/HKUDS/nanobot/pull/6617)：重连期间创建/分叉话题可能打开错误话题，超时排队请求仍可能建会话，令牌刷新时关闭客户端可能被重开或应用过期凭证。已有 fix PR 待合并。
5. **重启后中断回合状态错乱（中）** — [#6628](https://github.com/HKUDS/nanobot/pull/6628)：已关闭修复。
6. **流式续写丢空白（低中）** — [#6627](https://github.com/HKUDS/nanobot/pull/6627)：已关闭修复。

## 6. 功能请求与路线图信号

- **共享会话退役**：[#6621（OPEN）](https://github.com/HKUDS/nanobot/pull/6621) 移除全局共享会话模式（配置、网关路由、WebUI 设置、翻译），保留按会话与显式话题路由；配套文档 PR [#6626](https://github.com/HKUDS/nanobot/pull/6626) 停止向新部署推荐共享会话，并说明过渡期设置仍可用。二者同日出现，方向明确，**大概率进入下一版本**。
- **WebUI 扩展面**：[#6032](https://github.com/HKUDS/nanobot/pull/6032) 引入本地受信浏览器扩展机制（按 `extension.json` 清单校验并经由网关提供）。属安全敏感的大改动，长期未合并，落地时点不确定。
- **MCP 生态接入**：[#6014](https://github.com/HKUDS/nanobot/pull/6014) 新增 Keenable MCP 预设（Streamable HTTP，无需 API Key）。
- **推理回放优化**：[#6265（OPEN）](https://github.com/HKUDS/nanobot/pull/6265) 仅为当前回合回放 reasoning，修复 `Session.get_history` 无限制复制推理内容带来的开销，关联 Issue #5584。

## 7. 用户反馈摘要

（注：本次数据中 Issue/PR 评论正文未提供，以下仅基于 Issue/PR 描述文本提炼。）

- **多房间/多渠道部署的真实痛点**：#6619 的用户场景是多频道同时启用的部署，期望心跳输出与工作来源路由绑定，当前行为破坏房间隔离。
- **运维可控性诉求**：#6624 反映通过 `nanobot gateway install-service` 安装后，`gateway stop` 与 systemd 重启策略冲突，用户需要"停止即停止"的确定性行为；该 Issue 当日即被关闭，响应速度积极。
- **长对话可用性**：#6630/#6586 系列显示用户在长会话中遇到历史任务错位、超长回合记录丢失等困扰，WebUI 会话回放质量是高频不满来源。
- **流式输出细节体验**：#6627 涉及输出限额续写时空白丢失，属影响可读性的细节问题。

## 8. 待处理积压

- [#6032](https://github.com/HKUDS/nanobot/pull/6032)（2026-10-04 创建，WebUI 扩展面，安全相关，仍需评估）
- [#6014](https://github.com/HKUDS/nanobot/pull/6014)（2026-10-03 创建，Keenable MCP 预设）
- [#6468](https://github.com/HKUDS/nanobot/pull/6468)（2026-10-26 创建，`conflict` 标记，取消路径稳定性修复，建议尽快解冲突）
- [#6265](https://github.com/HKUDS/nanobot/pull/6265)（2026-10-16 创建，`conflict` 标记，推理回放性能）
- [#6619](https://github.com/HKUDS/nanobot/issues/6619)（多房间串投，尚无 fix PR，建议排期）
- 另有多条待合并 PR 标记 `conflict`（#6468、#6265），合并队列的冲突积压值得维护者专项清理。

---
*说明：本报告严格基于所提供数据；PR 评论数在数据中均为 undefined，故未对讨论热度做量化断言。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-11-11）

## 1. 今日速览

今日项目维持高强度迭代：过去 24 小时 Issues 更新 50 条（新开/活跃 39、关闭 11），PR 更新 50 条（待合并 46、合并/关闭仅 4），**无新版本发布**。整体呈"输入远大于输出"状态——新增问题与提案持续涌入，合并吞吐偏低，46 个待合并 PR 形成明显积压，维护者评审压力较大。讨论焦点集中在 10 月 14 日合入的统一网关（#106742）带来的合并后问题，以及多个安全修复 PR（sec-marathon 系列）。项目活跃度高，但合并节奏与问题关闭效率是当前健康度的主要观察点。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 PR 侧合并/关闭仅 4 条，其中可确认关闭的重要条目：

- **#153725 [CLOSED] fix(env): support mounted secret environments without blocking gateway** — 修复当 profile 的 `.env` 为命名管道（如挂载的 1Password Environment）时网关连接超时的问题，并将解析内容保留在进程内存而非落盘为明文文件。属稳定性与安全双重改进。链接：https://github.com/NousResearch/hermes-agent/pull/153725

Issues 侧关闭 11 条，代表性条目的关闭如下（据摘要可辨）：

- **#102260 [CLOSED] Telegram gateway 静默轮询死亡** — 报告"已连接"但从不投递入站消息。链接：https://github.com/NousResearch/hermes-agent/issues/102260
- **#151852 [CLOSED] Telegram private-topic 重试回归（源自 #151057）** — 原生 id 步骤静默落到根会话导致死 topic 绑定无法清理。链接：https://github.com/NousResearch/hermes-agent/issues/151852
- **#42620 [CLOSED] terminal 工具误拦截含 'vite' 的 npm 命令** — 长驻进程检测正则过宽。链接：https://github.com/NousResearch/hermes-agent/issues/42620

> 说明：PR 列表中仅展示评论数最多的 15 条，其余 3 条已合并/关闭 PR 未在数据中提供，故不展开。整体看，今日推进以网关与平台连接稳定性修复为主，功能层面增量有限。

## 4. 社区热点

| 条目 | 评论 | 链接 | 诉求分析 |
|---|---|---|---|
| #143547 [OPEN] Unified gateway 合并后遗留问题追踪 | 60 | https://github.com/NousResearch/hermes-agent/issues/143547 | 全场最热。10/14 的统一网关 #106742 将所有本地会话迁入单一网关进程，涉及 CLI、TUI、Desktop、API、编辑器、消息机器人、cron、Kanban 等多路径，遗留问题横跨多个组件，已成为事实上的"元 Issue"。用户核心诉求是统一网关的回归收敛与组件间隔离。 |
| #121095 [OPEN] browser_exec 遗留 browser_harness 守护进程 | 21 | https://github.com/NousResearch/hermes-agent/issues/121095 | 每次浏览器工具调用后残留无超时的守护进程，长期运行会耗尽资源。属资源泄漏类痛点，影响自托管重度用户。 |
| #122529 [OPEN] cron 外部 worker 缺 venv site-packages（P1） | 16 | https://github.com/NousResearch/hermes-agent/issues/122529 | 重启安全的外部 worker 启动时未注入虚拟环境路径，导致 `ModuleNotFoundError: ruamel`。安装/升级场景下的高优先级回归。 |
| #47954 [OPEN] honcho 记忆 provider 启动竞态告警 | 12 | https://github.com/NousResearch/hermes-agent/issues/47954 | 每次会话启动均告警"已加载但无实例"，属长期未清的启动竞态，影响日志信噪比与用户信心。 |
| #153396 [OPEN] Team Gateway：每个 agent 自带 Slack app | 2（👍2） | https://github.com/NousResearch/hermes-agent/issues/153396 | 今日新开且获赞，反映 Hermes Cloud 团队场景下共享 bot 命名前缀、实例自持 token 阻止休眠的真实运营痛点。 |

**结论**：讨论高度集中于统一网关的回归面与自托管资源管理；新需求（Slack 自带 app）虽评论少但获赞，说明团队/云端场景诉求正在浮现。

## 5. Bug 与稳定性

按严重程度排列（P1 > P2 > P3），标注 fix PR 状态：

**P1**
- **#122529** cron 外部 worker `ModuleNotFoundError: ruamel`（安装/升级路径）。数据中未见对应 fix PR。链接：https://github.com/NousResearch/hermes-agent/issues/122529

**P2（有 fix PR）**
- **#153722（PR）** WSL 外部链接经 `cmd.exe /c start` 打开存在命令注入风险 → 改为交由 rundll32。安全类，P1 标注。链接：https://github.com/NousResearch/hermes-agent/pull/153722
- **#153723（PR）** skills-guard 在扫描时信任被扫描包自带的 `.skillignore`（可被 `*` 绕过），改为不再采信。P1 安全类。链接：https://github.com/NousResearch/hermes-agent/pull/153723
- **#153726（PR）** WhatsApp Cloud 白名单按"数字投影"比对导致 BSUID 误匹配，改为精确比对。链接：https://github.com/NousResearch/hermes-agent/pull/153726
- **#153713（PR）** Google Meet 的节点注册表与 OAuth 状态文件按进程 umask 写入（0644），改为仅属主可读写。链接：https://github.com/NousResearch/hermes-agent/pull/153713

**P2（无 fix PR）**
- **#112961** Windows Desktop 主进程在长 WS 会话中 `FAST_FAIL_FATAL_APP_EXIT` 崩溃（awaits-reporter）。链接：https://github.com/NousResearch/hermes-agent/issues/112961
- **#148898** Codex 后端对部分 zstd 压缩 `/responses` 请求返回 HTTP 400（源自 #136916，标记 cause/upstream，👍2）。链接：https://github.com/NousResearch/hermes-agent/issues/148898
- **#151133 / #151677** Desktop 多 profile 与远程连接场景下的 `profile_mismatch`、Bot Chat registry `not_found`（后者需重启应用才恢复）。链接：https://github.com/NousResearch/hermes-agent/issues/151133 、 https://github.com/NousResearch/hermes-agent/issues/151677
- **#151485** 仪表盘 `/api/profiles` 每次调用重复解析网关 bootstrap argv，11 个 profile 下 CPU 达 85–157%，并连带远程存活探测失败。链接：https://github.com/NousResearch/hermes-agent/issues/151485
- **#123194** aux `_build_call_kwargs` 向普通 OpenAI 客户端传入私有 `_reasoning_config`，触发 `TypeError`。链接：https://github.com/NousResearch/hermes-agent/issues/123194
- **#151126** 多路复用网关上 Kanban 钩子无 secret scope，插件取密钥报 `UnscopedSecretError`。链接：https://github.com/NousResearch/hermes-agent/issues/151126
- **#151241** `hermes acp` 将 401 诊断打印到 stdout，污染 JSON-RPC 通道。链接：https://github.com/NousResearch/hermes-agent/issues/151241
- **#150617** Bot Mode 完成通知忽略 `completion_output_chars`，可截断至 0 字符导致 DM 回复为空。链接：https://github.com/NousResearch/hermes-agent/issues/150617

## 6. 功能请求与路线图信号

- **#116452 Kanban 增加 pre-dispatch / pre-create 插件钩子（且返回值被采信）** — 用户已自建 9 条派发守卫，说明 Kanban 无人值守调度需求真实且成熟。已有 PR #152607 走网关创建 profile，另一处调度相关 PR #153385 也涉及子代理，但钩子本身尚无 PR，**中期入版可能性较高**。链接：https://github.com/NousResearch/hermes-agent/issues/116452
- **#153396 Team Gateway 自带 Slack app** — 今日新开、获赞，围绕云实例休眠与品牌一致性；尚无对应 PR，属早期信号。链接：https://github.com/NousResearch/hermes-agent/issues/153396
- **#152607（PR）`hermes profile create` 走运行中的网关** — 复用既有 `profiles.create` RPC，与 Desktop/Dashboard 路径对齐。链接：https://github.com/NousResearch/hermes-agent/pull/152607
- **插件生态扩张**：今日多个 plugin-catalog PR（#153724 roomsmith、#153672 postkitty 1.0.0、#153728 Safehouse、#153721 hermes-shortcuts、#153711 relic-gumi、#149855 creature-workshop），说明 Plugin Hackathon 推动第三方生态活跃；其中 Safehouse（沙箱化运行本地插件）与安全主题呼应。链接：https://github.com/NousResearch/hermes-agent/pull/153728
- **#4786 CLI resume 后上下文窗口状态栏不更新** — 自 2026-04 起的长期小需求，尚无 PR。链接：https://github.com/NousResearch/hermes-agent/issues/4786

## 7. 用户反馈摘要

- **统一网关是当前最大不满来源**（#143547）：会话/配置/平台在多组件间共享单一网关进程后，隔离性与回归成为反复争议点，用户需要更清晰的故障边界。
- **自托管资源管理痛点明确**：`browser_exec` 残留守护进程（#121095）与仪表盘高 CPU（#151485）均指向长期运行场景下缺乏清理与缓存机制。
- **桌面端多 profile/远程连接体验脆弱**：#151133、#151677 显示默认 profile 正常、第二 profile 或切换到远程后失败，且需重启恢复，影响云端/多身份用户。
- **安装与升级链路仍有坑**：#122529 的 venv 路径缺失在重启安全场景下必现，属高频部署痛点。
- **对安全的主动投入获认可**：sec-marathon 系列 PR 覆盖 WSL 命令注入、skills 扫描绕过、WhatsApp 白名单、凭据文件权限，方向与社区对插件生态扩张的安全担忧一致。
- **正向信号**：插件目录 PR 申请者主动注明仓库归属与 pinned SHA，说明贡献者生态在规范化。

## 8. 待处理积压

需维护者优先关注的长期未闭环条目：

- **#47954** honcho 记忆 provider 启动竞态，自 2026-06-17 起开放近 5 个月，12 条评论仍无 fix。链接：https://github.com/NousResearch/hermes-agent/issues/47954
- **#40979** `model.context_length` 在 `/model` 切换后不重读，自 2026-06-07 起开放。链接：https://github.com/NousResearch/hermes-agent/issues/40979
- **#42620** 已于今日关闭，可作为"长期 open 项清理"正面示例。链接：https://github.com/NousResearch/hermes-agent/issues/42620
- **#4786** CLI resume 状态栏问题，自 2026-04-03 起开放，超 7 个月仅 3 评论。链接：https://github.com/NousResearch/hermes-agent/issues/4786
- **#121095 / #122529** 两个 P1/P2 资源与安装类问题开放近 7 周，评论活跃但无 fix PR，建议排期。链接：https://github.com/NousResearch/hermes-agent/issues/121095 、 https://github.com/NousResearch/hermes-agent/issues/122529
- **PR 积压本身**：46 个待合并 PR 对 4 个合并/关闭，建议维护者分批 triage，尤其优先合并已标记 P1 的安全 PR（#153722、#153723）以降低风险敞口。

---
*数据来源：NousResearch/hermes-agent GitHub 数据快照（2026-11-11）。PR 合并明细仅覆盖展示的前 15 条，其余未在数据中提供，故未展开。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-11-11

## 1. 今日速览
今日项目活跃度**极低**：过去 24 小时仅有 1 条 Issue 更新（新开/活跃 0，已关闭 1），PR 更新 0 条，无新版本发布。唯一动态是该 Issue 的关闭，且为当日创建、当日关闭、仅 1 条评论，说明响应及时但社区互动有限。整体看，项目处于**低频维护窗口**，无功能推进，也无合并代码动作。需关注关闭的 Bug 是否已实际修复，否则可能影响用户信任。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无 PR 合并或关闭，项目主干无代码层面推进。唯一状态变更为 Issue #3468 被关闭，但未见对应 fix PR（详见第 5 节）。

## 4. 社区热点
今日唯一更新条目即为讨论焦点：
- **Issue #3468** [CLOSED] [BUG] MCP init failure still hangs the agent loop on 0.5.4 (Windows): chat stops replying, /health stays OK, gateway.log freezes
  链接: sipeed/picoclaw Issue #3468
  作者 eaglecet-dev，创建/更新均为 2026-11-11，评论 1，👍 0。

诉求分析：用户报告在 Windows 上 0.5.4 版本中，任一 MCP server 在网关启动时连接失败，会导致 agent loop 在所有通道上停止处理回合——表现为 "Thinking" 占位符永久停留、`GET /health` 仍返回正常、`gateway.log` 冻结。核心痛点是**故障静默化**：健康检查无法反映真实故障状态，导致排查困难。该问题为"仍存在（still hangs）"，暗示此前版本已有类似问题。

## 5. Bug 与稳定性
按严重程度排列：

- **【高】MCP 初始化失败导致 agent loop 挂起（全通道不可用）** — Issue #3468，已 [CLOSED]。影响 Windows 上 0.5.4 版本；MCP server 连接失败时 chat 完全停止响应，而 `/health` 仍正常、日志冻结，属于典型静默故障，用户难以自诊断。**未见到关联 fix PR**，关闭原因未在提供材料中说明，建议维护者确认是否已有代码修复或为重复/过期关闭。

今日无其他崩溃或回归报告。

## 6. 功能请求与路线图信号
今日无明确的新功能请求。从 #3468 可提炼的隐含改进信号：MCP 初始化失败时应具备**降级与超时保护**，避免阻塞 agent loop；`/health` 应反映 MCP 连接状态；日志应持续输出以保留可观测性。由于无对应 PR，暂无法判断是否纳入下一版本。

## 7. 用户反馈摘要
- **使用场景**：Windows 平台部署，配置了多个 MCP server，通过网关启动并以 `/health` 做运行状态监控。
- **不满意点**：0.5.4 中 MCP 初始化失败会拖垮整个 agent loop，且 `/health` 仍报正常、`gateway.log` 停止写入，形成"看似健康、实际瘫痪"的误导性状态。
- **满意/认可**：材料中无正面反馈记录。
- **互动程度**：仅 1 条评论、0 点赞，社区共鸣度低，可能因问题场景较特定（Windows + MCP 失败）。

## 8. 待处理积压
基于所提供数据（仅含过去 24 小时 1 条 Issue、0 条 PR），**无法识别长期未响应的重要 Issue 或 PR**。建议维护者重点复核 #3468 的关闭依据：若无对应 fix PR，应重新评估并补充修复或说明，避免同类问题在后续版本复现（Issue #3468）。

---
*说明：本日报严格基于所提供的 2026-11-11 GitHub 数据生成；未提供的字段（如 PR 细节、评论全文、历史积压）不做推断。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-11-11

## 1. 今日速览

今日 NanoClaw 没有 Issues 活动，也没有版本发布，但 PR 流水线非常繁忙：过去24小时有 26 条 PR 更新（待合并 15、已合并/关闭 11）。全部 PR 来自两位贡献者——核心团队成员 glifocat 与 dependabot[bot]，说明今天的工作以核心团队的加固/修复清理和依赖维护为主，没有新的外部用户反馈进入。已合并的 3 个实质变更（Mattermost 长消息分片、CI 只读令牌、`/add-resend` 测试补齐）都为中小规模修复，没有破坏性变更。整体判断：项目处于**高吞吐、低外部互动**的健康维护期，核心团队在系统性清理积压的加固类 PR，但社区侧（Issues）今日完全静默。

> 数据口径提示：本次各 PR 均显示无评论、👍 为 0，因此“社区热点”部分实际反映的是核心团队内部推进节奏，而非社区讨论。

## 2. 版本发布

今日无新版本发布，无破坏性变更或迁移事项。

## 3. 项目进展（今日已合并/关闭）

今日已合并/关闭的实质 PR 共 3 条，其余为 PR 重开/替换（见下）与依赖更新（见第 8 节）：

| PR | 类型 | 内容 | 链接 |
|---|---|---|---|
| #4320 | Bug 修复 + Skill | Mattermost 上超过 16,383 字符的 agent 回复此前被 API 以 400 拒绝、完全丢失；现改为分片发送。同时新增 `mattermost.test.ts` | https://github.com/nanocoai/nanoclaw/pull/4320 |
| #4318 | 加固 / CI | `ci.yml` 增加 `permissions:` 并固定只读令牌；release 工作流在执行目标 SHA 前校验该 SHA 位于 `main` 上 | https://github.com/nanocoai/nanoclaw/pull/4318 |
| #4188 | Skill / 加固 | `/add-resend` 技能现在会安装并运行 #4169 引入的 Resend 投递测试，安装后可验证适配器真实投递 | https://github.com/nanocoai/nanoclaw/pull/4188 |

另有一处流程性动作：#4336 为 #4335 的重复项并已关闭，说明同一修复以“关闭—重开”方式重新提交，**路由器 sticky follow-up 修复（#4335）仍在待合并状态**，今日未实际落地。

整体推进幅度：中等偏小的增量。今日落地的三项均属健壮性与安全边界收紧，没有新功能上线；真正的核心逻辑修复（router #4335、审批卡片 #4147/#4156）仍停在待合并队列。

## 4. 社区热点

今日**无 Issues 讨论、无 PR 评论、无点赞反应**，不存在真正意义上的社区热点。按待合并时长与影响面，值得关注的“团队内部热点”为：

- **#4335 / #4336 — 路由器 sticky follow-up 修复**（2026-11-11 创建，最新）：修复自 #3802 引入的回归——某 agent 角色查找中的 `/clear` 会扣住同线程内面向另一个 agent 的后续消息。#4336 为重复提交并已关闭，有效 PR 为 #4335。
  https://github.com/nanocoai/nanoclaw/pull/4335

- **#4156 / #4147 — 审批卡片渲染**（分别创建于 10-20、10-19，挂起 3 周）：卡片正文转义，Slack 150 字符 / Discord 256 字符截断问题，以及无法完整展示卡片的通道改为拒绝而非裁剪。
  https://github.com/nanocoai/nanoclaw/pull/4156 ｜ https://github.com/nanocoai/nanoclaw/pull/4147

**背后诉求解读**：两个挂起 PR 都指向同一类用户可见问题——多通道（Slack / Discord / Google Chat / Telegram / WhatsApp / Mattermost）下审批卡片与消息的展示一致性。结合已合并的 Mattermost 分片修复，可判断近期工作重心正从“核心路由”向“多通道交付质量”迁移。

## 5. Bug 与稳定性

今日无新 Issue 报告 Bug，以下为 PR 中披露的缺陷，按严重程度排序：

1. **【高】Mattermost 长回复静默丢失** — 超过 16,383 字符的 agent 回复被 API 以 400 拒绝，桥接层无 `maxTextLength`，导致消息完全不到达。**已有 fix 并已合并**：#4320。
   https://github.com/nanocoai/nanoclaw/pull/4320
2. **【高】路由器 sticky follow-up 被误扣** — 自 #3802 起，某 agent 的 `/clear` 可阻塞同线程内另一 agent 的后续消息。**有 fix PR，待合并**：#4335（#4336 为其重复项，已关闭）。
   https://github.com/nanocoai/nanoclaw/pull/4335
3. **【中】`ask_user_question` 已回答卡片丢失问题文本** — `pending_questions` 只存标题与选项，点击后卡片被重绘，非 Discord 通道不保留原问题。**待合并**：#4328。
   https://github.com/nanocoai/nanoclaw/pull/4328
4. **【中】审批卡片正文可被注入/被平台截断** — 卡片文本可被当作标记渲染；超长动作在 Slack/Discord 被拒。**待合并**：#4156、#4147。
   https://github.com/nanocoai/nanoclaw/pull/4156
5. **【低–中，安全加固】** 安装流程经 `cmd.exe` 打开登录链接、`docker build`/`pkill` 由 shell 字符串拼接路径。**待合并**：#4316、#4317。
   https://github.com/nanocoai/nanoclaw/pull/4316 ｜ https://github.com/nanocoai/nanoclaw/pull/4317

## 6. 功能请求与路线图信号

今日无用户提出的功能请求（0 条 Issues）。从已有 PR 推断下一版本可能纳入的方向：

- **多通道路由与交付正确性**：`area/channels` + `area/core` 组合占据待合并 PR 的主体（#4328、#4156、#4147、#4335）。若 #4335 与审批卡片两件套合并，可视为一次“多通道一致性”主题小版本。
- **安装与凭据安全**：#4316（仅 https 链接、不经 shell 打开）、#4317（无 shell 构建与清理）、#4318（已合并的 CI 只读令牌）指向 setup/install 路径的系统性加固，具备成批发布的形态。
- **技能体系自测**：#4188 合并、#4325 待合并，说明 `/add-*` 技能正在统一为“复制—运行—清理通道测试”的模式，属于安装体验方向的可预期演进。
- **TypeScript 大版本**：#4284 将 TypeScript 从 5.9.3 升至 7.0.2，若采纳需关注编译链兼容性（当前为待合并 dependabot PR，请维护者评估后再决定是否纳入）。

## 7. 用户反馈摘要

今日 Issues 为 0 条，**无来自用户的新痛点、使用场景或满意度反馈**。可间接反映的仅有 PR 描述中呈现的维护者视角问题：WSL 环境缺少 `xdg-open` 的登录链接打开路径、Mattermost 单帖长度上限、Slack/Discord 卡片字符限制、Telegram/WhatsApp Cloud 无法完整展示卡片。这些均为平台约束驱动的工程问题，非用户诉求记录。

## 8. 待处理积压

**长期挂起的核心 PR（建议优先评审）**

- **#4147、#4156** — 创建于 2026-10-19 / 10-20，已挂起约 3 周，涉及审批卡片安全与展示，影响所有通道。今日仅有更新时间，无评论、无合并。
  https://github.com/nanocoai/nanoclaw/pull/4147 ｜ https://github.com/nanocoai/nanoclaw/pull/4156
- **#4284 — TypeScript 5.9.3 → 7.0.2**（2026-11-06 创建），跨大版本升级，风险较高且已挂起 5 天，建议明确“合并 / 关闭 / 降级到 6.x”的结论。
  https://github.com/nanocoai/nanoclaw/pull/4284
- **#4325 — `/add-mattermost` 通道测试复制**（2026-11-09），依赖已合并的 #4320，处于可合并窗口。
  https://github.com/nanocoai/nanoclaw/pull/4325

**重复/噪音 PR（可清理以减少队列负担）**

- **#4337** 与已关闭的 **#4304** 为同一组 `dev-minor-patch` 5 项依赖升级（@types/node 22.19.17→22.20.5、globals 等），新开于 2026-11-11，本质是旧 PR 的重开。
  https://github.com/nanocoai/nanoclaw/pull/4337
- **#4319** — 移除 OneCLI 升级测试中 `replace('0 converted','0 converted')` 的自替换无效操作，属纯清理，可与依赖批次一同快速处理。
  https://github.com/nanocoai/nanoclaw/pull/4319

**维护者关注点**：待合并 15 条中，12 条来自同一核心成员，评审负载高度集中，缺乏第二评审人参与；同时 Issues 通道今日完全静默，建议关注是否为 issue 模板或反馈入口导致的社区互动偏低。

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

# LobsterAI 项目日报 · 2026-11-11

## 1. 今日速览
今日项目维持高强度的工程推进节奏：13 条 PR 更新中有 8 条完成合并/关闭，5 条仍待合并，且全部来自当日，说明维护响应及时。变更重心集中在前端渲染层（renderer）与 Cowork 协作会话体验：消息内联编辑与版本切换、会话历史滚动稳定性、停止后额度保留等实质改进均已关闭。Issues 侧仅 1 条新开，社区讨论量低，用户参与度明显弱于开发活跃度。无新版本发布，今日成果预计将在后续版本集中释放。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日已关闭 8 条 PR，功能与修复并行推进：

- **#3051 [已关闭] feat(cowork): 支持编辑用户消息与版本切换** — Cowork 会话中可内联编辑已发送的用户消息，并保留消息版本历史、提供版本切换器；同时保存编辑后附件的原图并为模型输入做适配。这是今日最重要的能力增量。
  https://github.com/netease-youdao/LobsterAI/pull/3051
- **#3048 [已关闭] feat(banners): 启动弹窗广告、受众定向、主题感知 HTML 侧边栏广告** — 扩展客户端横幅系统，新增 `desktop_launch_modal` 启动弹窗位、按横幅频次控制等。属商业化/运营能力建设。
  https://github.com/netease-youdao/LobsterAI/pull/3048
- **#3045 [已关闭] feat(cowork): 完成回复的内联朗读** — 在 Fork、Copy 之后新增朗读按钮，未登录用户引导登录。
  https://github.com/netease-youdao/LobsterAI/pull/3045
- **#3046 [已关闭] feat(image-creation): 首页灵感示例货架** — 将首页 `HomeScrollArea` 替换为 `ImageExampleShelf` / `ImageExampleThumbnail`，并新增示例显示/隐藏的持久化偏好（含测试）。
  https://github.com/netease-youdao/LobsterAI/pull/3046
- **#3041 [已关闭] feat(cowork): 可配置的图片创作示例** — 新任务页新增默认展开的「图片创作」作品区，支持编辑提示词、示例素材或自传图片后带入输入框由用户确认发送；首页与专家广场「图像创意搭档」共用同一作品目录。
  https://github.com/netease-youdao/LobsterAI/pull/3041
- **#3047 [已关闭] fix(model): 登录后用首个可访问模型替换锁定占位项** — 修复未登录时公开模型目录全锁、首项被误设为默认且登录后被固定为不可用模型的选型逻辑问题。
  https://github.com/netease-youdao/LobsterAI/pull/3047
- **#3049 [已关闭] fix(desktop-companion): 桌面伴侣球默认居右垂直居中** — 无保存位置时改为工作区右缘垂直居中，替代原右下角默认值，并调整依赖旧默认值的测试。
  https://github.com/netease-youdao/LobsterAI/pull/3049
- **#3050 [已关闭] fix(cowork): 状态行保留单一计时并去重步骤短语** — 移除工具步骤行上的单步计时器（仅保留在展开的命令详情内），由轮次状态行统一计时，并避免状态行重复显示运行中步骤的短语。
  https://github.com/netease-youdao/LobsterAI/pull/3050

整体看，今日主要提升了 Cowork 会话的可编辑性、可读性（朗读、计时一致性）与图片创作入口的发现性，同时对模型选择与桌面伴侣做细节修正。

**待合并 5 条（均为 #3056–#3052，作者 fisherdaddy，当日创建）：**
- **#3056** fix(packaging): 通过设置 `mac.notarize=false` 避免 macOS 打包时继承凭据触发的重复公证与装订。
  https://github.com/netease-youdao/LobsterAI/pull/3056
- **#3055** fix(cowork): 修复点击「Add to chat」后延迟聚焦至下一动画帧，以保留输入光标。
  https://github.com/netease-youdao/LobsterAI/pull/3055
- **#3054** fix(cowork): 修复浏览会话历史时因懒加载轮次展开/旧消息前插导致的滚动跳动。
  https://github.com/netease-youdao/LobsterAI/pull/3054
- **#3053** fix(cowork): 修复停止任务后额度用量丢失，停止的轮次现可拉取并保留用量。
  https://github.com/netease-youdao/LobsterAI/pull/3053
- **#3052** fix(cowork): 修复预取期间空搜索状态导致的布局位移。
  https://github.com/netease-youdao/LobsterAI/pull/3052

## 4. 社区热点
今日唯一 Issue 讨论量有限，无多评论或高反应条目：

- **#3044 [OPEN] 龙虾客户端--实验功能---dsh工作台---会封号？** — 作者 Userluckytian，1 条评论，0 👍，附有截图。标题指向「实验功能 · dsh 工作台」是否会导致账号封禁的担忧。
  https://github.com/netease-youdao/LobsterAI/issues/3044

诉求分析：用户对实验性功能的使用风险（账号安全、封禁政策）高度敏感，属于信任与合规类关切。此类问题若缺乏官方政策说明，易在社区放大负面预期，建议以文档或 FAQ 明确边界。

## 5. Bug 与稳定性
今日无崩溃或回归类问题上报。Issues 中未见明确 Bug 报告。

- **#3044** 属使用风险咨询，非功能缺陷，暂无 fix PR。
- 待合并的修复型 PR 覆盖若干体验级缺陷，均已有对应修复：
  - 会话历史滚动跳动 — #3054
  - 停止后额度用量丢失 — #3053
  - 输入光标丢失 — #3055
  - 预取期间布局位移 — #3052
  - macOS 重复公证（打包/发布链路风险，严重度相对最高）— #3056

严重度评估：上述修复 PR 多为交互一致性与构建链路问题，其中 macOS 重复公证直接影响分发稳定性，建议优先审阅合并。

## 6. 功能请求与路线图信号
- **账号封禁政策澄清**：来自 #3044，用户希望明确实验功能「dsh 工作台」的使用风险。目前无对应 PR，属文档/政策层信号。
- **商业化能力扩展**：已合并的 #3048（启动弹窗广告、受众定向、主题感知 HTML 侧栏广告）显示客户端正在引入运营位体系，后续可能出现更多投放位与频控策略迭代。
- **消息编辑与版本化**：已合并 #3051，推测后续会延伸到附件与多版本对比等深化能力。
- **语音交互**：已合并 #3045（内联朗读），结合未登录引导登录的逻辑，语音/朗读方向可能继续扩展。
- **模型可用性体验**：#3047 的修复表明模型目录与登录态联动是持续关注点，可能影响后续默认模型策略。

## 7. 用户反馈摘要
今日可提炼的用户反馈有限，仅来自 #3044：

- 痛点：担心使用客户端「实验功能 · dsh 工作台」会被封号，反映用户对实验特性合规边界的疑虑。
- 使用场景：在客户端内尝试实验性工作台功能。
- 情绪：以疑虑/不安为主，缺少官方说明时易放大风险感知。
- 满意度信号：暂无正面或负面评价可供归纳。

开发侧合并的 PR 显示团队在主动改善编辑体验、滚动稳定性、额度可见性与图片创作发现性，可视为对用户可用性诉求的间接响应，但今日数据中无对应直接反馈文本。

## 8. 待处理积压
数据中未提供超过 24 小时未响应的 Issue 或 PR 条目（#3041 创建于 2026-11-10，已于次日更新并关闭）。需提醒维护者关注：

- **#3044** 为今日唯一新开 Issue，且涉及账号封禁风险问答，建议尽快回应并考虑补充政策说明。
  https://github.com/netease-youdao/LobsterAI/issues/3044
- 待合并队列 #3052–#3056 均为当日创建，尚无长期积压迹象，但其中 #3056（macOS 打包）影响发布链路，建议优先审阅。
  https://github.com/netease-youdao/LobsterAI/pull/3056

**健康度小结**：开发吞吐高、当日关闭率高（8/13），社区互动偏低（1 条 Issue、评论稀疏），呈现「工程驱动、用户参与待激活」的形态；无版本发布与无崩溃上报是积极信号。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-11-11）

## 1. 今日速览

今日 Moltis 仓库在 Issues 侧完全静默（0 条新开/活跃/关闭），PR 侧有 2 条更新，且均为**已关闭（CLOSED）** 状态（#1257、#1258），无待合并 PR、无新版本发布。从数量看，今日属于“低交互、清理型”状态：没有新增社区讨论，主要动作是把两条自 2026 年 9 月初就挂起的长期 PR 做了关闭处理。需要注意，关闭不等于合并——两条 PR 的最终去向（是否合并进主干、是否被替代）在现有数据中未标注，因此不宜将其计为“功能已落地”。整体健康度评估：仓库维护动作仍在持续（有响应滞后的 PR 被清理），但社区输入端今日无信号，活跃度评级为**低**。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日无明确标注为“已合并（MERGED）”的 PR，仅有 2 条关闭 PR，因此不能确认有代码进入主干。以下按内容记录其推进方向：

- **PR #1257 — fix(hooks): complete lifecycle dispatch**（作者 GTanger，创建 2026-09-02，更新 2026-11-11，已关闭）
  链接: moltis-org/moltis PR #1257
  方向：为 `BeforeToolCall`、`AfterToolCall`、`ToolResultPersist` 增加可选的 `tool_call_id`，在保持旧 JSON payload 兼容的前提下，实现单次工具调用全链路关联；同时补齐此前已声明但未派发的 `AgentEnd` 生命周期事件。属于**钩子/生命周期体系的完整性修复**，对依赖 hook 做可观测性或策略拦截的使用者是实质改进。
- **PR #1258 — feat(external-agents): add direct AGY streaming**（作者 GTanger，创建 2026-09-04，更新 2026-11-11，已关闭）
  链接: moltis-org/moltis PR #1258
  方向：为官方 `agy` CLI 增加一等公民级流式传输，复用其已有的 Google OAuth 会话，从而无需 Gemini CLI 或 API key；并把 AGY 带版本的 `stream-json` 输出翻译为 Moltis 的文本、推理等内容类型。属于**外部智能体接入能力扩展**。

整体向前迈进幅度：两条 PR 均为能力补全型（生命周期完整性 + 外部 agent 接入），但因均以 CLOSED 收尾且无合并标记，今日不宜宣称功能增量落地。

## 4. 社区热点

今日无活跃讨论。两条 PR 的评论数在数据中均显示为 `undefined`（不可用），点赞数均为 0，无 Issues 可参照，因此**无法识别今日讨论热点或社区反应**。结构上值得注意的信号是：两条 PR 均由同一作者（GTanger）在 2026-09-02 / 2026-09-04 创建，直到 2026-11-11（约两个月后）才被更新并关闭，反映出**长周期 PR 的响应时延**这一流程侧问题，而非内容争议。

- PR #1257: moltis-org/moltis PR #1257
- PR #1258: moltis-org/moltis PR #1258

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题（Issues 更新为 0）。唯一与修复相关的是 PR #1257，其性质为 hook 生命周期派发不完整（`AgentEnd` 此前只声明未派发），可视为**中等严重度的功能缺陷修复**，但该 PR 状态为 CLOSED，是否已形成有效修复无法从现有数据确认。

- PR #1257: moltis-org/moltis PR #1257

## 6. 功能请求与路线图信号

今日无用户提交的功能请求（Issues 为 0）。基于已有关闭 PR 判断可能影响后续版本的候选方向：

- **外部智能体直连（AGY 流式）**：PR #1258 展示的方向（复用现有 OAuth 会话、免 API key、`stream-json` 翻译）若被采纳，将扩大 Moltis 可对接的 agent 范围。链接: moltis-org/moltis PR #1258
- **工具调用全链路可关联 + 完整生命周期事件**：PR #1257 的 `tool_call_id` 贯通与 `AgentEnd` 派发，是钩子生态与可观测性的基础能力，具备进入后续版本的价值。链接: moltis-org/moltis PR #1257

说明：两条 PR 均非“用户提出”的需求，而是贡献者主动提交；是否纳入下一版本，现有数据无发布计划或里程碑信息可佐证。

## 7. 用户反馈摘要

今日无 Issues 评论可供提炼，**无法给出真实用户痛点、使用场景或满意度结论**。不作推测。

## 8. 待处理积压

今日无待合并 PR（待合并数为 0），Issues 侧亦无积压记录。但从流程视角需提醒维护者关注：

- **PR #1257**（创建于 2026-09-02，2026-11-11 才更新并关闭）：挂起约两个月，建议在关闭时留下明确结论（合并/替代/放弃）以便贡献者与使用者追溯。链接: moltis-org/moltis PR #1257
- **PR #1258**（创建于 2026-09-04，2026-11-11 更新并关闭）：同上，且涉及外部 CLI 与 OAuth 会话，若放弃宜说明兼容性与安全考量。链接: moltis-org/moltis PR #1258

数据缺口提示：本次数据未提供两条 PR 的最终合并状态、关闭原因及评论内容，建议在后续日报中补全 `merged_at` / `closed_reason` 字段以提升结论可靠性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-11-11

> 数据来源：CoPaw GitHub 仓库过去 24 小时动态。注：所提供 Issues/PRs 的链接域名显示为 `agentscope-ai/QwenPaw`，以下条目按原文引用链接，未作改写。

---

## 1. 今日速览

CoPaw 今日以 v2.3.0 稳定版发布为核心节点，过去 24 小时 PR 更新 33 条（待合并 25、已合并/关闭 8），Issues 更新 8 条（新开/活跃 6、关闭 2），活跃度处于中高水平，但合并速度明显滞后于提交速度。发布同时启动了 v2.3.0 stable 安装验证（4 小时窗口，#8681），说明稳定性验证仍是当前关键路径。Bug 侧集中在 **通道插件启动**（Feishu/Matrix）与 **Windows 桌面端兼容性** 两条主线，其中 Windows Feishu 问题已有对应 fix PR 关闭。整体判断：**版本发布驱动的活跃期，稳定性风险集中于通道插件与桌面端打包**。

---

## 2. 版本发布

### v2.3.0（Stable）
链接：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0

**更新内容（✨ Added）**
- 新增 **Piccolo 本地决策模型**：Piccolo 4B / 9B / 27B，用于 **工具审查（tool review）** 与 **上下文压缩（context compaction）**。
- 提供 **BF16 与 Q8_0** 两种量化推荐配置。
- 支持运行时安装与更新。
- 支持从 **Hugging Face 或 ModelScope** 下载。

**破坏性变更**
- 提供的发布说明中未列出任何破坏性变更。

**迁移注意事项**
- 提供的材料中未包含具体迁移步骤；但结合今日议题，升级到 2.3.x 后 **通道插件（Feishu/Matrix）与 Windows 桌面端** 出现多起启动问题（见第 5 节），建议相关用户升级前关注这些问题的修复状态。
- v2.3.0 稳定性验证工单 #8681 仍在 OPEN，截止时间为发布后 4 小时（2026-11-11 16:41 UTC），验证结果尚未在材料中体现。

---

## 3. 项目进展

今日已合并/关闭 8 条 PR，其中与发布直接相关、值得关注的：

| PR | 状态 | 推进内容 |
|---|---|---|
| [#8542](https://github.com/agentscope-ai/QwenPaw/pull/8542) chore: update the release note for v2.3.0 | CLOSED | 完善 v2.3.0 发布说明，是本次稳定版发布的配套动作 |
| [#8675](https://github.com/agentscope-ai/QwenPaw/pull/8675) fix(channels): diagnose startup failures and fix Windows Feishu native library loading | CLOSED | 修复 Windows 下 Feishu 原生库加载路径问题（PyCryptodome 构造的路径同时含 `\\?\` 前缀与 `..`，导致 `_cpuid_c.pyd` 被误报缺失），并增强通道启动失败诊断 |
| [#8680](https://github.com/agentscope-ai/QwenPaw/pull/8680) fix(desktop): fix feishu import timeout in windows desktop | CLOSED | 修复 Windows 桌面端 Feishu 导入超时 |

**整体推进评估**：今日合并项主要围绕 **v2.3.0 发布收尾与 Windows 桌面端/Feishu 通道的紧急修复**，属于“发布护航”型进展。真正影响产品能力的功能性变更（如通道插件化、MCP 插件化、本地模型管理插件化）仍停留在 25 条待合并 PR 中，**单日可见的前进幅度有限**。

---

## 4. 社区热点

今日讨论最集中于以下 Issue（评论数 3–4 条，均为 OPEN）：

- **[#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)** Channel plugin startup race：`_wait_connected` 把初始 `platform_state="disconnected"` 当作致命错误，导致 Feishu 通道每次启动报 `CHANNEL_NOT_CONNECTED`（Windows 打包桌面版 2.3.0b4，确定性复现）。**4 条评论**。
- **[#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)** Matrix 通道插件在多工作区启用时无法激活：10 秒共享启动窗口只覆盖第一个工作区（2.3.0b2，三个工作区均启用 Matrix）。**4 条评论**。
- **[#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)** 2.3.0-beta.1 在 Windows 11 IoT LTSC 上无法启动（“path not found” 后 AppHang），而 2.2.2 在同机正常。**3 条评论**。

**诉求分析**：三条热点指向同一结构性主题——**2.3.0 将通道改为插件化后，启动时序、共享窗口与原生库加载在真实环境下暴露脆弱性**；Windows 桌面端是集中受害面。用户的核心诉求是“升级不砸生产”，而非新增功能。

---

## 5. Bug 与稳定性

按严重程度排列：

**高（阻断启动，确定性复现）**
- **[#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669)** Feishu 通道每次启动失败（`CHANNEL_NOT_CONNECTED`）。**是否已有 fix PR**：材料中未见针对该 Issue 的直接 fix PR；已关闭的 #8675 涉及 Windows Feishu 原生库加载与启动诊断，但未标注关联 #8669。
- **[#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616)** Windows 11 IoT LTSC 上 2.3.0-beta.1 无法启动并 AppHang（2.2.2 正常）。**是否已有 fix PR**：材料中未见。

**中（功能不可用，环境相关）**
- **[#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)** Matrix 插件在多工作区场景仅首个工作区生效。**是否已有 fix PR**：材料中未见。
- **[#8663](https://github.com/agentscope-ai/QwenPaw/issues/8663)** Safari 下消息队列操作按钮（编辑/中断发送/删除）不渲染，Chrome 正常（2.2.2 pip / macOS 15.3）。**是否已有 fix PR**：材料中未见。

**中低（资源占用，可复现于集成部署）**
- **[#8674](https://github.com/agentscope-ai/QwenPaw/issues/8674)** 查询异常反复生成完整会话 JSON 快照，缺少容量限制与清理策略，持续占用临时目录（WorkMate 集成部署，非全新安装复现；作者已核对源码 Git blob SHA 与官方 main 一致）。**是否已有 fix PR**：**有** — [#8678](https://github.com/agentscope-ai/QwenPaw/pull/8678) `fix(query-error-dump): bound diagnostic dumps and retention`（OPEN，first-time-contributor）。

**已解决**
- **[#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406)** QQ 通道 enabled 标志被静默重置为 false 且无警告 —— 已 CLOSED。

---

## 6. 功能请求与路线图信号

结合已有 PR，可能被纳入下一版本的候选：

- **本地推理与上下文治理**：v2.3.0 刚引入 Piccolo 本地决策模型；PR **[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)**（按 Ollama `num_ctx` 而非 128k 默认值推断上下文窗口）与 **[#8487](https://github.com/agentscope-ai/QwenPaw/pull/8487)**（在工具结果折叠中识别 URL 引用的媒体）延续“本地模型体验与上下文压缩质量”方向。
- **通道能力增强**：**[#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409)** 为 QQ 通道增加流式消息（C2C streaming），对齐 Feishu 插件能力；**[#8601](https://github.com/agentscope-ai/QwenPaw/pull/8601)** 修复钉钉 AI 卡片中 Markdown 表格被当作段落渲染的问题。
- **架构插件化（大型重构，路线图信号强）**：**[#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)**（第三方 agent 抽为插件，XXXL）、**[#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469)**（MCP 抽为插件，XXXL）、**[#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)**（本地模型管理抽为插件 Provider，XXXL）。三者共同指向“宿主瘦身 + 能力插件化”的中期方向，但因体量巨大且长期在审（10 月中下旬创建至今），**短期内落地概率低于小型修复类 PR**。
- **部署与认证**：**[#8679](https://github.com/agentscope-ai/QwenPaw/pull/8679)** 调整社区版密码登录，依赖部署层访问控制，适配 Platform 托管与反代终止 HTTPS 场景。

---

## 7. 用户反馈摘要

- **升级即故障的挫败感**：#8616 作者强调“同一台机器 2.2.2 可用、2.3.0-beta.1 不可用”，体现用户以“回归”视角评价版本质量。
- **打包桌面版的真实使用场景**：#8669 来自 Windows 打包桌面版（2.3.0b4），说明桌面分发是实际使用路径之一，且该场景下 Feishu 集成是刚需。
- **多工作区/多租户使用**：#8538 用户同时运行 A/B/C 三个工作区并均启用 Matrix，反映中高级用户的多环境并行需求；共享 10 秒启动窗口的设计假设与真实用法不匹配。
- **第三方集成的连带暴露**：#8674 来自基于 QwenPaw 的 WorkMate 集成部署，用户主动核对源码版本一致性，说明存在下游产品化使用者；其诉求是“诊断信息要有边界”，而非关闭诊断。
- **浏览器兼容性细节**：#8663 用户明确指出 Chrome 正常、Safari 异常，反馈质量高，指向前端渲染兼容性问题。
- **总体态度**：反馈以具体、可复现的技术报告为主，未见情绪化表达；不满意点高度集中于 **2.3.x 的通道与桌面端稳定性**。

---

## 8. 待处理积压

以下 PR 创建时间较早、体量大、至今仍 OPEN，建议维护者优先给出明确结论或拆分计划：

| PR | 创建 | 体量 | 备注 |
|---|---|---|---|
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) fix(ollama): 按 num_ctx 推断上下文窗口 | 2026-10-14 | XXL | 已挂 Under Review 近 4 周 |
| [#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268) fix(task_tracker): 限制完成回调并保证清理 | 2026-10-16 | M | 关联 #8173 的 run 清理部分 |
| [#8308](https://github.com/agentscope-ai/QwenPaw/pull/8308) test(api): 缺失 provider 返回 404 | 2026-10-18 | XS | 小体量测试修复，长期未合 |
| [#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426) feat(agent): 第三方 agent 插件化 | 2026-10-26 | XXXL | 架构级重构 |
| [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) refactor(mcp): MCP 插件化 | 2026-10-28 | XXXL | 架构级重构 |
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) feat(providers): 本地模型管理插件化 | 2026-10-29 | XXXL | 架构级重构 |

**提醒**：
- 三个 XXXL 插件化 PR（#8426/#8469/#8499）彼此存在架构耦合，建议合并评审节奏或明确排期，避免相互冲突与长期挂起。
- #8308（XS）与 #8268（M）为小体量修复，长期未合会降低贡献者意愿。
- Issue 侧：#8406 已关闭；#8538（2026-11-02 创建）与 #8616（2026-11-07 创建）已持续活跃数日仍无明确修复 PR，建议在 v2.3.x 补丁中给出处置结论。

---

*说明：本日报严格基于所提供的 GitHub 数据生成；评论数、点赞数等缺失字段（如 PR 评论数显示为 undefined）未作推测。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-11-11）

## 1. 今日速览

今日 ZeroClaw 呈现“高 PR 吞吐、低合并效率”的状态：过去 24 小时 PR 更新达 50 条，但仅 1 条被合并/关闭，49 条仍待合并，积压压力明显。Issues 侧 9 条更新中 6 条关闭，多为 docs/CI 类低风险问题，维护者在文档与 SEO 干净度上有明显清理动作。新建 Issue 集中在 runtime/daemon 与工具层的数据丢失、日志断档、错误信息丢失等稳定性问题，其中 #8794 被标记为 `priority:p1`。无新版本发布，但多条 PR 带有 `release:v0.9.0` 标签，说明 v0.9.0 处于发布前整合期。整体健康度：活跃度高，但合并瓶颈与运行时可靠性问题值得警惕。

## 2. 版本发布

无新版本发布（过去 24 小时 Releases 为 0）。

## 3. 项目进展

今日合并/关闭的 PR 仅 1 条，数据中未列出其具体编号与内容，无法说明其推进的功能。可观察到的信号是：多条 PR 标注 `release:v0.9.0`，例如：

- PR #12380 `chore(docs): pin translations to v0.9.0`：将 `docs/book/po` gitlink 从 v0.8.7 目录切换到 v0.9.0 目录，并注明基于 v0.9.0 release candidate（`1a79f89d1e`）。这是发布前的文档本地化收尾动作。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12380

结论：项目整体向前推进有限，今日主要处于“吸纳 PR、准备 v0.9.0”的蓄力阶段，而非合并交付阶段。

## 4. 社区热点

- Issue #8794（4 条评论，今日评论数最多）：`[Bug] web dashboard ui` 停止 agent 会清空其工具调用与思考上下文，标签含 `priority:p1`、`risk:high`、`status:accepted`。这是今日唯一有实质讨论的 Issue，诉求指向“中断可恢复性”——用户希望打断不销毁已完成的工作轨迹。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8794

- PR #9809 `feat(providers): support multiple models per provider profile`：自 2026-08-07 起持续更新至今，标签覆盖 provider/channel/memory/tool 等几乎全部模块，`size:XL`、`risk:high`、`principal contributor`。这是长期悬置的大体量架构级改动，社区关注度高但尚未合并。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9809

- PR #11633 `feat(zerocode): open local file paths from the transcript`：`distinguished contributor`、`risk:high`、`size:XL`，10 月 9 日创建仍在更新。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11633

说明：数据中 PR 的评论数字段为 `undefined`，无法给出精确评论数排序，以上按标签权重与持续活跃度选取。

## 5. Bug 与稳定性

按严重程度排列：

**S1 - workflow blocked**
- Issue #8794 [OPEN] 停止 agent 时工具调用与思考内容从上下文被抹除（runtime/daemon，`priority:p1`，`risk:high`）。未见对应 fix PR。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8794

**S2 - degraded behavior**
- Issue #12391 [OPEN] `runtime-trace.jsonl` 在 daemon 重启后丢失数小时事件（handoff buffer / 队列丢弃 / 静默 writer），发生在生产环境的繁忙 daemon 上，且有 agent 实际持续工作的证据。今日新建，无 fix PR。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12391
- Issue #12325 [CLOSED] docs canonical URL 指向 release 目录，导致每次稳定版发布都会移动所有 canonical 地址（tooling/ci）。已关闭。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12325
- Issue #12366 [CLOSED] heartbeat 第一阶段与 model-routing 探测硬编码 `temperature = 0.0`，拒绝 temperature 参数的模型会报错（runtime/daemon）。已关闭。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12366

**S3 - minor**
- Issue #12390 [OPEN] `shell` 工具在非零退出时返回空错误字符串，stderr 被吞掉，模型只能得知“失败了”而看不到原因。今日新建，无 fix PR。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12390
- Issue #12326 [CLOSED] 被裁剪的文档版本链接落到 GitHub Pages 通用 404（gh-pages 根目录无 `404.html`）。已关闭。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12326
- Issue #12324 [CLOSED] 文档部署使 rustdoc API 树与各 locale 的 404 页可被索引（共 8,742 个 HTML 页面）。已关闭。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12324

**已有安全/稳定性 fix PR（今日新建）**
- PR #12392 `fix(deps): bump rustix to 1.1.6 for RUSTSEC-2026-0486`（`risk:low`）。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12392
- PR #12387 `fix(security): insert '--' before invocation in firejail sandbox wrapper`，防止以 `-` 开头的程序名或参数被当作选项。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12387
- PR #12389 `fix(memory): sanitize ANSI escape sequences and control characters in CLI output`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12389
- PR #12386 `fix(tools): bound Notion API response body and tool output sizes`（2 MiB 上限）。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12386
- PR #12388 `fix(discord): validate custom emoji and percent-encode unsafe chars in reaction URLs`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12388

## 6. 功能请求与路线图信号

- **多模型 provider profile**（PR #9809，`size:XL`，长期未合并）：若纳入，将改变 provider 配置模型的 schema-v4 结构，属高影响改动。是否进入 v0.9.0 存疑，因其仍在 `needs-author-action` 状态。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9809
- **Gemini speech-to-speech broker channel**（PR #10430，`status:parking-lot`，对应已接受 RFC #8780、tracker #10406）：功能门控的实时语音通道，daemon 侧核心已完成 PR1，但被搁置。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10430
- **语音转写默认 fallback**（PR #12198）：当前 agent 未配置 `transcription_provider` 时会直接失败，提案增加 `default_provider` 回退。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12198
- **ZeroCode 逐 pane 会话上限配置**（PR #11731）：当前上限为编译期常量 8，提案改为可配置。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11731
- **未授权入站消息通知 owner**（PR #12346）：目前仅日志可见，群里只会看到公开的“需运营者批准”占位回复，提案主动通知运营者。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12346
- **Telegram 媒体回复上下文补全**（PR #12197，`risk:high`）：回复媒体消息时目前只保留 `[Photo]` 等占位符，丢失承载实际内容的 caption。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12197

判断：v0.9.0 的可见信号集中在文档与依赖（#12380、#12392），上述功能型 PR 大多处于 `needs-author-action` 或 `parking-lot`，短期内被纳入的可能性不高。

## 7. 用户反馈摘要

- **打断即丢失**（#8794）：用户明确描述在对 agent 停止操作后，其工具调用与思考过程不再计入上下文。这是工作流级痛点，而非体验瑕疵。
- **可观测性不可信**（#12391）：用户在生产繁忙 daemon 上观测到 `runtime-trace.jsonl` 出现数小时空洞，而 agent 工作确实在继续——说明故障排查依赖的日志本身会丢数据。
- **错误信息不可用**（#12390）：`shell` 工具吞掉 stderr，模型只知道“失败”，无法自我纠错，直接影响 agent 的自主修复能力。
- **模型兼容性**（#12366）：硬编码 `temperature = 0.0` 与实际配置模型不匹配，导致拒绝该参数的模型路径失败；用户已在 issue 中关闭，但反映内部调用未走模型能力探测。
- **文档/发布工程体验**（#12324、#12325、#12326、#12332、#12340）：集中于 canonical URL 随版本漂移、404 页缺失、rustdoc 被索引、OIDC 设备证书与 PKCE 描述不清等。这类反馈由少数贡献者密集提交（如 JordanTheJet），已全部关闭，说明响应及时。

满意之处：docs/CI 类问题闭合率高；不满意之处：运行时核心路径（上下文保真、日志完整性、错误透传）仍有硬伤。

## 8. 待处理积压

- **PR #9809**（创建 2026-08-07，`status:needs-author-action`，`size:XL`）：跨全模块的 provider profile 重构，已挂起三个月以上，需明确是继续推进还是拆分。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9809
- **PR #10430**（创建 2026-08-28，`status:parking-lot`）：Gemini speech-to-speech 通道 PR1，RFC 已接受但实现被搁置，路线图信号模糊。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10430
- **PR #12197 / #12198 / #12070**（均由 RO-mix 提交，10 月下旬至 11 月初，均标 `needs-author-action`）：分别涉及 Telegram 媒体上下文、转写 fallback、system prompt 上限重应用，长期停留在待作者响应。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12197
  https://github.com/zeroclaw-labs/zeroclaw/pull/12198
  https://github.com/zeroclaw-labs/zeroclaw/pull/12070
- **PR #12215**（dependabot，一次性 36 个 rust-all 依赖升级，创建 2026-11-03）：大范围依赖批量升级长期未处置，可能与 #12392 的安全版本升级形成协调需求。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12215
- **Issue #8794**（创建 2026-07-07，已标记 `status:accepted`、`priority:p1`）：四个月仍未关闭的高优先级上下文丢失问题，建议维护者优先给出修复计划。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8794

---

**数据说明**：PR 列表的评论数字段为 `undefined`，本报告无法按评论数精确排序 PR 热度；今日合并/关闭的单个 PR 具体编号未在数据中给出，故第 3 节未作细节推断。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*