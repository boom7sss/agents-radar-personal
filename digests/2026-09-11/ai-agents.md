# OpenClaw 生态日报 2026-09-11

> Issues: 455 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-11 11:49 UTC

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

# OpenClaw 项目动态日报 — 2026-09-11

## 1. 今日速览

过去 24 小时项目保持极高活跃度：Issues 更新 455 条（新开/活跃 254，关闭 201），PR 更新 500 条（待合并 318，合并/关闭 182），并发布 1 个新版本 v2026.9.4。今日讨论重心明显集中在**更新/升级可靠性**上——v2026.9.4 的高亮功能正是"从失败的兼容更新中恢复"，而当天新开的 P0 Issue #144712 恰好报告该更新路径在 npm 全局安装下确定性失败，形成"修复与验证同步进行"的态势。同时，事件循环阻塞、子进程泄漏、会话状态一致性等长期稳定性问题继续占据高评论榜。整体看，项目迭代速度快、合并吞吐量大，但升级路径与运行时稳定性仍是当前健康度的主要风险点。

---

## 2. 版本发布

### v2026.9.4

- **唯一高亮：从兼容的失败更新中恢复（Recover from compatible failed updates）**
  - 当 schema 与配置检查证明回滚安全时，保留上一个包版本，并用**先前的配置与服务**将其恢复。
  - 明确边界：**数据库迁移仍要求已验证的更新前备份**。
  - 关联 PR/Issue：#140339

**迁移与升级注意事项：**
- 回滚能力仅覆盖"兼容性失败"场景，不适用于已执行数据库迁移的情况——升级前务必备份数据库。
- 与今日 P0 Issue #144712 相关：`openclaw update` 在用户级 npm 全局安装（2026.9.3 → 2026.9.4）时会卡在 `global install swap`，将完好回滚误报为 "recovery is unverified"。新版本的回滚逻辑在真实环境中仍存在验证缺口，建议升级前确认安装方式（npm 全局 vs 其他）并保留备份。
- 相关更新路径问题另见 #135776（核心已升级但官方 channel 插件被固定在旧版本，造成 core/plugin 版本偏移）。

---

## 3. 项目进展

今日合并/关闭的 PR 与 Issue 共约 383 条（Issues 关闭 201 + PR 合并/关闭 182）。以下为其中与功能演进相关度较高的关闭项：

- **#144880 [CLOSED] fix(channels): honor pinned accounts in Mattermost model menus**（作者 obviyus）
  修复 Mattermost 用户在固定某个已过期账号后，仍会在共享账号下看到已学习模型选项的问题——斜杠菜单与线程选择器均受影响。
  https://github.com/openclaw/openclaw/pull/144880

- **#140971 [CLOSED] 飞书插件工具在消息驱动运行中被静默丢弃**（回归于 2026.7.1-2 → 2026.8.1 之间）
  `feishu_chat` 主机限制阻断整个插件入口，导致 13 个飞书 agent 工具在所有 agent 工具列表中静默缺席。
  https://github.com/openclaw/openclaw/issues/140971

- **#125626 [CLOSED] OpenClaw 2026.8.1 beta feedback**（24 条评论，今日评论数最高）
  2026.8.1 系列的 beta 反馈线程正式关闭，标志着该 beta 验证周期收束。
  https://github.com/openclaw/openclaw/issues/125626

**待合并 PR 侧的重点推进（尚未合并，但形态已清晰）：**
- **#143587 feat(gateway): bind requests to selected profiles** — Gateway profile 绑定，属多 PR 栈（配套 #143610 iOS、macOS 相关 PR），涉及 android/web-ui/gateway/agents 多端，标记 `merge-risk: security-boundary`，状态为 "ready for maintainer look"。
- **#116446 test(qa): run Discord through Crabline** 与 **#118067 feat(discord): support API URL override** — 二者均为 `proof: sufficient` + "ready for maintainer look"，QA 渠道驱动与 Discord 端点覆盖在持续推进。
- **#144890 fix(update): let slow gateway startup use the update readiness budget**（作者 steipete，Fixes #144859）+ **#137008 fix: skip managed gateway stop on no-op openclaw update**（Closes #136997）——直接改善 `openclaw update` 的可用性，与今日版本主题高度呼应。

总体而言，项目向前迈进的增量集中在**更新流程可靠性、多端 profile 绑定、渠道插件(飞书/Discord/Mattermost)修复**三条主线上。

---

## 4. 社区热点

按评论数与反应数排序的今日最活跃讨论：

| 排名 | 条目 | 状态 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | #125626 OpenClaw 2026.8.1 beta feedback | CLOSED | 24 | 0 | https://github.com/openclaw/openclaw/issues/125626 |
| 2 | #91009 Codex PreToolUse hook 中继生成 CPU 密集进程并阻塞 Gateway RPC | OPEN (P0) | 22 | 2 | https://github.com/openclaw/openclaw/issues/91009 |
| 3 | #119720 同步 agent 持久化与 transcript 维护在规模下阻塞 Gateway 事件循环 | OPEN (P1) | 17 | 0 | https://github.com/openclaw/openclaw/issues/119720 |
| 4 | #97616 hook/tool 子进程未被回收，僵尸进程累积 | OPEN (P1) | 15 | 1 | https://github.com/openclaw/openclaw/issues/97616 |
| 5 | #114612 [memory-core] SQLite 无界增长：memory_index_chunks + memory_embedding_cache 无保留策略 | OPEN (P2) | 13 | 0 | https://github.com/openclaw/openclaw/issues/114612 |
| 6 | #49876 Cron 会话在工具调用失败时投递幻觉输出而非干净失败 | CLOSED | 12 | 1 | https://github.com/openclaw/openclaw/issues/49876 |
| 7 | #40786 备份 CLI 增加类 .gitignore 排除模式 | OPEN (P2) | 12 | 1 | https://github.com/openclaw/openclaw/issues/40786 |

**背后的诉求分析：**
- **运行时资源治理是最大公约数**：#91009、#119720、#97616 三条高评论 Issue 指向同一根因族——hook/tool 子进程生命周期、事件循环同步阻塞、僵尸进程回收。用户（多为规模化部署者）诉求的是"可长期运行而不退化"的稳定性，而非单点修复。
- **数据无界增长引发运维焦虑**：#114612 指出 `memory_index_chunks` 与 `memory_embedding_cache` 无保留/淘汰策略，会随时间填满磁盘；#40786 则希望备份 CLI 能排除 `node_modules`、`__pycache__` 等，二者都反映**存储与备份可管理性**的诉求。
- **模型输出可信度**：#49876 虽已关闭，但"Cron 会话投递幻觉输出"触及用户对自动化任务可靠性的核心信任问题。
- **更新体验成热点新焦点**：#144712（今日新开 P0）与 #135776 显示，随着更新机制复杂化，升级路径本身正成为社区最敏感的区域。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否有 fix PR线索）：

### P0（最高优先级）
- **#144712 [OPEN] npm update 在 "global install swap" 失败；完好回滚被误报为 "recovery is unverified"**
  2026.9.3 → 2026.9.4，用户级 npm 全局安装，2/2 次确定性失败。标记 `clawsweeper:source-repro`、`impact:ux-release-blocker`、`maturity:stable`。
  与 v2026.9.4 的回滚恢复高亮功能直接冲突，属当日最需关注项。
  https://github.com/openclaw/openclaw/issues/144712

- **#91009 [OPEN] Codex PreToolUse 原生 hook 中继生成 CPU 密集 openclaw-hooks 进程并阻塞 Gateway RPC**
  影响 2026.6.1 + 内置 `@openclaw/codex` 集成，`impact:crash-loop`。
  https://github.com/openclaw/openclaw/issues/91009

- **#136203 [OPEN] Windows de-DE 2026.8.2 升级后 Doctor 维护被阻塞并遗留旧 workspace 状态**
  `clawsweeper:fix-shape-clear`、`clawsweeper:queueable-fix`、`clawsweeper:source-repro`、`impact:ux-release-blocker`——**已有明确修复形态，可排队修复**。
  https://github.com/openclaw/openclaw/issues/136203

- **#135776 [OPEN] openclaw update 使精确固定版本的官方 channel 插件停留在旧版本（core/plugin 版本偏移）**
  Discord 在新核心上因缺少 `plugin...` 而加载失败，`impact:message-loss`、`impact:ux-release-blocker`，并带 `clawtributor-review` 标签。
  https://github.com/openclaw/openclaw/issues/135776

- **#140620 [OPEN] 就地升级 2026.7.1-2 → 2026.9.2：session-transcript 对账导入 27/~1500 会话后停滞**
  升级前会话无法通过 `sessions_search` 找到，`impact:session-state`、`impact:ux-release-blocker`。
  https://github.com/openclaw/openclaw/issues/140620

### P1
- **#119720 [OPEN] 同步 agent 持久化与 transcript 维护阻塞 Gateway 事件循环** — `clawsweeper:source-repro` + `impact:crash-loop`，并注明 #140231 已移除一次不必要的溢出恢复全量操作。
  https://github.com/openclaw/openclaw/issues/119720
- **#97616 [OPEN] 未回收 hook/tool 子进程导致僵尸累积与运行时退化** — `impact:message-loss`、`impact:crash-loop`。
  https://github.com/openclaw/openclaw/issues/97616
- **#136183 [OPEN] 命令执行器 spawn ssh 时挂起（SIGTERM 等待 server banner）** — 2026.8.1 回归，2026.8.2 仍存在。
  https://github.com/openclaw/openclaw/issues/136183
- **#139847 [OPEN] reply run 活跃期间到达的消息被丢弃** — "Reply operation has no active tool authority snapshot"，2026.9.2 回归，`impact:message-loss`，`clawsweeper:queueable-fix`。
  https://github.com/openclaw/openclaw/issues/139847
- **#137332 [OPEN] mixed terminal requester-settle 批次在所有权检查后永久重试** — `impact:session-state`，`clawsweeper:queueable-fix`。
  https://github.com/openclaw/openclaw/issues/137332
- **#142476 [OPEN] 2026.9.3 cron 会话 reaper 用同步 PRAGMA integrity_check 打开每个 agent 数据库** — 632-agent 网关上每几分钟阻塞事件循环 14-76 秒，`impact:crash-loop`，`clawsweeper:queueable-fix`。
  https://github.com/openclaw/openclaw/issues/142476
- **#79588 [OPEN] 压缩质量守卫未验证摘要中标识符存活** — `clawsweeper:linked-pr-open`，`impact:session-state`。
  https://github.com/openclaw/openclaw/issues/79588
- **#121187 [OPEN] yielded requester 完成重试有意的 NO_REPLY 而非静默 settle** — `impact:message-loss`、`impact:session-state`，`clawsweeper:linked-pr-open`。
  https://github.com/openclaw/openclaw/issues/121187

### P2 / 其他
- **#143752 [OPEN] 激活包被中断可让规范 CLI 搁浅，且无 package-only 重放**（maintainer 标签，`impact:crash-loop`）
  https://github.com/openclaw/openclaw/issues/143752
- **#114612 [OPEN] memory-core SQLite 无界增长**（无保留策略，将随时间填满磁盘）
  https://github.com/openclaw/openclaw/issues/114612
- **#116691 [OPEN] 使用 openai-responses 调用火山引擎，长对话报缺少 `input.status` 参数**
  https://github.com/openclaw/openclaw/issues/116691
- **#124759 [OPEN] iOS app 开启 "show reasoning and tool activity" 后严重卡顿**
  https://github.com/openclaw/openclaw/issues/124759
- **#141747 [OPEN] 运行时脚手架 `<system-reminder>` 每轮注入约 686 tokens 且无法关闭**（`clawsweeper:needs-info`）
  https://github.com/openclaw/openclaw/issues/141747

**已有 fix PR 或修复形态清晰的项**：#136203、#139847、#137332、#142476（均带 `clawsweeper:fix-shape-clear` / `queueable-fix` / `source-repro`）；#135776、#79588、#121187 带 `clawsweeper:linked-pr-open`。

---

## 6. 功能请求与路线图信号

结合已有 PR，以下需求最可能被纳入近期版本：

- **备份 CLI 排除模式（#40786）** — 用户要求为 `openclaw backup create` 增加类 `.gitignore` 的排除规则，避免打包 `node_modules`、`__pycache__`。当前状态 `clawsweeper:linked-pr-open`，距落地较近。https://github.com/openclaw/openclaw/issues/40786
- **内置自动更新（#12855）** — 在已有 `update.checkOnStart`、`update.channel`、`gateway.update.run` 原语之上，增加可配置计划、确认与更新后通知。与今日版本"更新可靠性"主题一致，方向明确但尚无 PR。https://github.com/openclaw/openclaw/issues/12855
- **基于内容的工具输出提示注入扫描（#79168，已关闭）** — 现状仅有 XML 包裹的结构隔离。虽已关闭，但反映安全侧需求。https://github.com/openclaw/openclaw/issues/79168
- **scope-bound gateway auth tokens + per-agent dispatch-lane 原语（#92367，已关闭）** — 两个源自同一安全场景的网关原语请求。https://github.com/openclaw/openclaw/issues/92367
- **失败工具执行写入持久日志（#117703，已关闭）** — 目前失败仅有瞬时聊天提示，无持久记录。https://github.com/openclaw/openclaw/issues/117703
- **Gemini TPM/RPM 限流重试失败（正则误分类，#93120）** — 请求使同模型限流重试次数可配置（如 `auth.cooldowns.max...`）。https://github.com/openclaw/openclaw/issues/93120

**已在路上的实现类 PR（强化"可能纳入下一版本"的判断）：**
- Gateway profile 绑定栈：#143587（gateway）、#143610（iOS）、配套 macOS PR——涉及多端会话与共享聊天。
- 更新流程改进：#144890（Fixes #144859）、#137008（Closes #136997）。
- 渠道扩展：#118067（Discord API URL override）、#116446（Discord 接入 Crabline QA 驱动）、#144891（Ollama 托管子域模型上下文保留，相关 #136257）。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

**不满与痛点：**
- **升级是最大摩擦点**：多位用户报告 npm 全局安装在更新时失败或误报（#144712）、插件版本与核心不一致导致 Discord 加载失败（#135776）、就地升级后历史会话"消失"（#140620）。用户期望更新是"可回滚、可验证、无残留"的原子操作。
- **规模化部署下的性能退化**：632-agent 网关用户报告事件循环被同步 `PRAGMA integrity_check` 阻塞 14-76 秒（#142476）；另有用户报告 hook/子进程泄漏导致僵尸累积（#97616）、Codex hook 中继占满 CPU（#91009）。诉求是"可长期运行不退化"。
- **数据与磁盘管理焦虑**：#114612 用户担忧 memory 相关 SQLite 表无上限增长最终填满磁盘；#40786 用户抱怨备份体积因依赖目录而膨胀。
- **模型输出可信度**：#49876 用户反馈 cron 会话在工具失败时"编造看似合理的输出"而非干净失败，期望静默或明确报错。

**使用场景画像：**
- 多 agent Windows 安装（#136203）、LXC/Ubuntu 单 main agent（#140620）、远程 gateway via wss + Cloudflare Tunnel（#124759）、iOS + Windows 后端跨端组合——用户部署形态多样，且大量为**生产/长期运行**环境。
- 渠道覆盖广：飞书（#140971）、Discord、Mattermost、LINE（#124517）、Slack、Telegram 均出现在活跃讨论中，说明用户对多渠道一致性有实际依赖。

**满意/积极信号：**
- 2026.8.1 beta 反馈线程累积 24 条评论后关闭（#125626），表明用户愿意深度参与 beta 验证。
- 部分高赞反馈带 👍（如 #91009 有 2、#97616 有 1、#103198 有 3），说明社区对具体稳定性议题有共识性关注。

---

## 8. 待处理积压

以下为创建时间较早、仍处于 OPEN 且标记 `stale` 或长期未推进的重要条目，建议维护者优先关注：

- **#12855 [OPEN, stale 标记相关] 内置自动更新功能请求** — 创建于 2026-02-09，至今 7 个月，评论 8，👍 0。作为基础体验需求长期未落地，与当前更新可靠性痛点高度相关。
  https://github.com/openclaw/openclaw/issues/12855

- **#40786 [OPEN, stale] 备份 CLI 类 .gitignore 排除模式** — 创建于 2026-03-09，评论 12，👍 1，`clawsweeper:linked-pr-open`。讨论充分，等待推进合并。
  https://github.com/openclaw/openclaw/issues/40786

- **#79588 [OPEN] 压缩质量守卫不验证标识符存活** — 创建于 2026-05-09，评论 6，👍 1，`clawsweeper:linked-pr-open`。属 session 状态一致性关键项。
  https://github.com/openclaw/openclaw/issues/79588

- **#92405 [CLOSED, stale] subagent spawn 持久化原始 provider，depth-2 冷启动静默死亡** — 创建于 2026-06-12，评论 6，👍 1。虽已关闭，但摘要指出"两个未修补的 #57326 调用点"及附带修复，值得确认是否已真正解决。
  https://github.com/openclaw/openclaw/issues/92405

- **#114414 [OPEN] Dated TODO sweep** — 机器人维护项，指出 `docs/providers/groq.md:86` 存在**已逾期**待办（provider 关停后移除隐藏的 Groq llama 兼容行，截止 2026-08-16）。
  https://github.com/openclaw/openclaw/issues/114414

- **#93120 [OPEN] Gemini 限流重试正则误分类** — 创建于 2026-06-15，评论 5，👍 1；作者已在评论中更正部分描述，指向具体评论链接，需维护者重新核实。
  https://github.com/openclaw/openclaw/issues/93120

**PR 侧积压关注：**
- **#67421 [OPEN] feat: add per-agent web_fetch ssrf overrides** — 创建于 2026-04-15，`size: L`，带 `merge-risk: compatibility` 与 `merge-risk: security-boundary`，状态 "needs proof"，已开放近 5 个月，涉及安全边界，需专门评审。
  https://github.com/openclaw/openclaw/pull/67421
- **#122981 [OPEN, stale] test(gateway): read the plugin-reload baseline after startup settles** — 创建于 2026-08-13，`proof: sufficient` 且 "ready for maintainer look"，测试侧修复等待合并。
  https://github.com/openclaw/openclaw/pull/122981
- **#123037 [OPEN] fix(ci): artifact verification gh api 请求无 deadline 会挂起** — 创建于 2026-08-13，替代被自动关闭的 #108986，问题在当前 main 仍存在，等待推进。
  https://github.com/openclaw/openclaw/pull/123037

---

*本日报数据来源：OpenClaw 仓库过去 24 小时 GitHub 活动（Issues 455 条、PR 500 条、Release 1 个）。所有链接与描述均基于所提供材料，未作外部补充。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析
**数据窗口：2026-09-11（过去 24 小时）**

---

## 1. 生态全景

个人 AI 助手开源生态已从"功能竞赛"转入**运行可靠性与规模化运维**的深水区：当日 13 个受监控项目中，OpenClaw 以 455 Issues + 500 PR 的体量形成绝对中心，其余项目（ZeroClaw、CoPaw、Hermes Agent、NanoBot、NanoClaw 等）围绕自身差异化场景做局部优化。**升级路径可靠性、长任务不退化、配置持久化**三条主线在至少 6 个项目同日出现，说明这是整个品类的共性技术债而非单一项目问题。生态尚未出现第二极——除 OpenClaw 外，最高活跃项目（ZeroClaw/CoPaw）的 PR 量级约为其 1/10，且普遍呈现"提交旺盛、合并滞后"的评审吞吐瓶颈。同时 5 个项目（NullClaw、TinyClaw、Moltis、ZeptoClaw 及部分项目）当日零活动，显示长尾项目存活率偏低。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新/关） | PR 更新（待合/合关） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 455（254 / 201） | 500（318 / 182） | v2026.9.4 | 极高活跃；升级路径与运行时稳定性为主要风险 |
| **ZeroClaw** | 50（45 / 5） | 50（48 / 2） | 无 | 高活跃；48:2 积压比，审查吞吐为首要瓶颈 |
| **CoPaw** | 16（12 / 4） | 43（26 / 17） | v2.2.1 | 高活跃；桌面端与多智能体路径稳定性风险 |
| **Hermes Agent** | 50（42 / 8） | 50（41 / 9） | 无 | 高活跃；积压比 4.6:1，唯一 P1 无 fix PR |
| **NanoBot** | 4 | 25（15 / 10） | 无 | 中高活跃；WebUI/通道打磨为主，P1 无头登录待修 |
| **NanoClaw** | 5（2 / 3） | 14（10 / 4） | 无 | 中高活跃；多条修复 PR 积压逾 3 周 |
| **IronClaw** | 1 | 8（6 / 2） | 无 | 中等偏弱；依赖升级为主，社区互动空转 |
| **LobsterAI** | 3（3 / 0） | 5（1 / 4） | 无 | 中等偏高；升级回归快速闭环，配置持久化老账未清 |
| **PicoClaw** | 3（2 / 1） | 7（7 / 0） | 无 | 中等偏低；全为待合并，5 条为依赖升级 |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | 当日无活动 |

**注**：CoPaw 的 Release 链接与 PR/Issue 编号在原始材料中指向 `QwenPaw` 仓库路径，此处按材料原样保留。

---

## 3. OpenClaw 在生态中的定位

**规模量级差距悬殊。** OpenClaw 单日 Issues 更新量（455）约为第二名 ZeroClaw/Hermes Agent（各 50）的 **9 倍**，PR 更新量（500）约为其 **10 倍**。当日合并/关闭 182 条 PR，接近其余所有项目当日 PR 更新量之和。这使其成为事实上的**协议与插件生态参照系**——多个项目直接以 OpenClaw 版本（如 v2026.8.1）为兼容目标（LobsterAI 当日 4 条修复 PR 全部针对 OpenClaw v2026.8.1 升级；NanoClaw 沿用 `.claude/skills/` 与 `cli-tools.json` 的 OpenClaw 系约定）。

**技术路线差异：**
- **OpenClaw**：走"核心 + 官方 channel 插件"的分层路线，重度依赖 update/gateway/plugin 三套机制，因此其痛点也高度集中在升级原子性与 core/plugin 版本偏移（#135776、#144712）。
- **ZeroClaw**：以 Rust 实现（出现 `cargo-audit`、`cargo-deny`、wasmtime-wasi），走"多维护者治理 + RFC 投票"路线，强调策略白名单与安全边界（delegate 白名单绕过 S0 #8279）。
- **CoPaw**：以桌面端（Tauri/Windows）与多智能体 Hub 为核心卖点，模型路由是差异能力。
- **Hermes Agent**：由 NousResearch 主导，强调 provider 生态广度（Codex/deepseek/opencode 等）与 cron 调度。

**社区规模对比**：OpenClaw 的讨论热度以评论数计可达 22–24 条/Issue（#91009、#125626），而 NanoClaw、IronClaw 的多数字条目评论数 ≤1，ZeroClaw 单日最热为 19 条。OpenClaw 具备真实的多用户规模化部署反馈（632-agent 网关用户报告事件循环阻塞 14–76 秒）。

---

## 4. 共同关注的技术方向

| 共性方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/安装可靠性** | OpenClaw（#144712 npm swap 失败、#135776 core/plugin 偏移）、LobsterAI（4 条 2026.8.1 升级回归修复）、Hermes Agent（#107402 网关重启警告残留）、NanoClaw（#2355 ncl 符号链接） | 升级应为"可回滚、可验证、无残留"的原子操作 |
| **配置/状态持久化** | LobsterAI（#1006、#2293、#2654 重启后用户文件被模板覆盖）、CoPaw（#7708 模型配置丢失、#7705 工作目录回退）、NanoClaw（#3684 快照可变根）、Hermes Agent（#108021 旧布尔配置迁移） | 用户自定义内容不得被内部模板或重启覆盖 |
| **长任务/会话不中断** | ZeroClaw（#8559 关闭窗口即停、#10701 图片致缓存前缀全失效）、Hermes Agent（#100401 cron >60s 作业被误判中断）、CoPaw（#7567 停止按钮假象、#7693 永久 RUNNING）、OpenClaw（#139847 活跃期间消息被丢弃） | 后台/定时任务需与服务端状态解耦，界面状态必须可信 |
| **子进程/资源回收** | OpenClaw（#97616 僵尸累积）、Hermes Agent（#108084 Windows stdio 孙进程泄漏）、ZeroClaw（#10218 重连子进程所有权） | 长期运行不得退化 |
| **数据无界增长** | OpenClaw（#114612 SQLite 无保留策略、#40786 备份排除模式）、Hermes Agent（#108178 桌面 artifact 4 MiB 预算） | 存储需可管理、可上限 |
| **渠道一致性/鉴权** | PicoClaw（QQ/飞书/deltachat 三渠道配置校验）、NanoBot（Discord/Telegram/Email 通知去重）、Hermes Agent（#108079 Slack message_id 恒空）、ZeroClaw（#6157 Nextcloud Talk API 误用） | 跨渠道语义与 schema 需统一 |
| **第三方能力接入** | NanoBot（AnySearch 搜索+抓取，key-optional）、CoPaw（Atlas Cloud provider）、PicoClaw（opencode-go provider）、Hermes Agent（GPT Image 2.5 tiers） | 降低接入门槛，扩展能力位 |

**最强共识**：**升级可靠性与配置持久化**——这两条在 OpenClaw、LobsterAI、CoPaw、Hermes Agent、NanoClaw 五个独立项目中同日出现，且均属用户信任层问题（非新功能诉求）。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用自主智能体平台 + 插件生态 | 规模化部署者、多 agent 生产环境 | 核心/插件分层，gateway + update + channel 三机制 |
| **ZeroClaw** | 安全边界与多维护者治理 | 企业/自托管、安全敏感场景 | Rust 栈；RFC 投票 + 策略白名单 + 审计 |
| **CoPaw** | 多智能体 + 模型路由 + 多租户 Hub | 团队协作、桌面端用户 | Tauri 桌面 + Hub 多租户；per-Agent 模型配置 |
| **Hermes Agent** | Provider 广度 + cron 调度 | 研究型用户、多模型工作流 | TUI gateway + 丰富 provider 适配 |
| **NanoBot** | WebUI 体验 + 通道一致性 | 轻量自托管、无头服务器 | 通道通知语义统一；第三方搜索集成 |
| **NanoClaw** | 技能（skill）生命周期管理 | 本地模型 + OpenCode 用户 | 容器化技能安装/卸载；agent-runner 准入接缝 |
| **IronClaw** | 渠道命令可发现性 | Near AI 生态用户 | Telegram 命令菜单注册为切入点 |
| **LobsterAI** | OpenClaw 兼容发行版 | 中文桌面用户（网易有道） | 以 OpenClaw 为底座做兼容适配 |
| **PicoClaw** | 轻量硬件/嵌入式（sipeed） | 边缘设备用户 | 渠道 schema 校验与 provider 横向扩展 |

**分野总结**：OpenClaw/ZeroClaw 争夺"平台"位，差异在**治理模式（单一主导 vs RFC 多维护者）与语言栈（Node/TS vs Rust）**；CoPaw 以"桌面 + 多租户"切团队场景；其余项目多为**垂直场景或兼容层**。

---

## 6. 社区热度与成熟度

**第一梯队 — 快速迭代 + 规模验证（OpenClaw）**
单日 900+ 条目更新，具备多平台生产部署反馈（Windows/LXC/iOS/Cloudflare Tunnel）。处于**快速迭代与稳定性修复并行**阶段，升级路径是成熟度短板。

**第二梯队 — 高活跃治理/打磨（ZeroClaw、CoPaw、Hermes Agent）**
共同特征：**产出旺盛、合并滞后**（ZeroClaw 48:2、Hermes 41:9、CoPaw 26:17）。ZeroClaw 与 Hermes 的瓶颈明确在维护者评审吞吐，而非开发能力。CoPaw 已发布 v2.2.1 且社区讨论活跃（#7318 达 26 评论），是三家中最接近"发布节奏稳定"的。

**第三梯队 — 质量巩固 / 清理型（NanoBot、NanoClaw、LobsterAI）**
以修复、文档对齐、界面打磨为主，无破坏性变更。LobsterAI 展现良好的**升级回归当日闭环**能力；NanoClaw 存在多条积压逾 3 周的独立小修复 PR，是维护带宽瓶颈的典型样本。

**第四梯队 — 低活跃（IronClaw、PicoClaw）**
IronClaw 当日社区互动为零（评论/点赞全为 0），活动以 dependabot 为主；PicoClaw 全周无合并，多条 `stale` 标记未闭环。均处于**维护节奏维持、缺乏里程碑**的状态。

**长尾 — 停滞（NullClaw、TinyClaw、Moltis、ZeptoClaw）**：当日零活动。

---

## 7. 值得关注的趋势信号

**信号 1：智能体的"第一天体验"正成为竞争焦点。**
用户摩擦已从功能缺失前移到安装/登录/首次配置。NanoBot #5726（无头服务器不知密码）、OpenClaw #144712（npm 全局安装确定性失败）、Hermes Agent #108165（Windows 解析到 WSL bash 致终端工具全挂）——**安装即阻断**类问题在多项目出现。对开发者的参考：**安装与首次启动路径的可靠性，其优先级应等同于核心推理能力。**

**信号 2："界面说的"与"系统做的"不一致正在侵蚀用户信任。**
CoPaw #7567（点停止后仍后台执行）、#7693（任务永久卡 RUNNING）、Hermes #100401（cron 作业被误判中断）、OpenClaw #49876（失败时投递幻觉输出）。用户诉求一致：**宁可干净失败，不要虚假成功。** 这对 agent 状态机设计是强约束信号。

**信号 3：配置持久化是与多智能体能力冲突的结构性矛盾。**
LobsterAI #2293 揭示核心矛盾：**多 agent 场景要求配置隔离，但内部模板同步机制将其统一覆盖。** 同类问题在 CoPaw（#7708）出现。对开发者参考：多智能体产品必须显式设计"用户内容 vs 系统生成内容"的边界与合并策略，否则隔离性承诺无法兑现。

**信号 4：Windows 是全生态的平台洼地。**
ZeroClaw（测试失败 74 项、栈溢出 3 天内由绿转红）、Hermes Agent（WSL bash、stdio 孙进程泄漏）、CoPaw（配置丢失、工作目录回退）、LobsterAI（Electron 递归删除穿透 junction）——**至少 4 个项目的当日最高优先级 Bug 集中在 Windows。** 这是对企业部署（大量 Windows 终端）的实际阻碍。

**信号 5：第三方集成方开始主动定义生态接口。**
NanoBot 的 AnySearch 团队三次强调 "key-optional + anonymous quota"，并成对提交"搜索 + 抓取"能力位。这是**外部服务方主动适配 agent 平台**的信号，与过去"平台方自行接入 provider"的路径相反。对开发者参考：预留低成本的能力接入位（MCP/Skill/API 三选一）正在成为生态吸引力的一部分。

**信号 6：安全边界问题开始出现在积压中。**
ZeroClaw #8279（delegate 绕过父级工具白名单，S0，已挂 2.5 个月无 fix PR）、#8519（wasmtime-wasi CVE 漂移 2.5 个月）。在插件/子智能体架构普及后，**权限继承与工具白名单的正确性**将成为下一个系统性风险面，建议开发者在设计委托（delegate）机制时即建立白名单传播的测试覆盖。

---

*本报告全部内容基于所提供的 2026-09-11 各项目 GitHub 动态材料，未作外部事实补充。部分项目 Release 摘要存在截断，相关判断以材料可见部分为限。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报（2026-09-11）

## 1. 今日速览

项目今日处于**高强度维护状态**：24 小时内 25 条 PR 更新（15 待合并、10 已合并/关闭），Issues 更新 4 条，无新版本发布。合并/关闭的 PR 集中在 **WebUI 性能优化、通道（Channel）行为修复、Dream 记忆写入权限澄清** 三条主线，其中 8 条来自同一贡献者 chengyongru，显示核心维护者对 WebUI 与通道体验的集中打磨。社区侧最受关注的是 AnySearch 团队连续提交的搜索/抓取集成请求（#5505 已关闭、#5731 新开），以及无人值守服务器部署的登录密码问题（#5726，P1）。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 10 条 PR 可归为四类推进：

**通道消息体验统一（跨平台一致化）**
- PR #5720 [CLOSED] `fix(discord)`：修复 #5719，自动压缩通知改为原地更新而非发送第二条消息 — HKUDS/nanobot PR #5720
- PR #5706 [CLOSED] `feat(tg)`：将 Telegram 的上下文压缩两条通知合并为一条可编辑消息 — HKUDS/nanobot PR #5706
- PR #5737 [CLOSED] `fix(email)`：禁用邮件通道的中间进度投递，避免生成传输层无法承载的事件 — HKUDS/nanobot PR #5737

> 这三条共同收敛了不同通道对"进度/压缩通知"的处理语义，指向同一目标：**通知去重与通道能力对齐**。

**WebUI 性能与可维护性**
- PR #5732 [CLOSED]：长文本流式刷新降频（最小 50ms 间隔），限制可见推演预览为 512 UTF-16 码元且不拆分代理对 — HKUDS/nanobot PR #5732
- PR #5736 [CLOSED]：service worker 缓存公共 favicon 请求，上限 128 条 — HKUDS/nanobot PR #5736
- PR #5733 [CLOSED]：拆分通道设置模块职责（目录行行为 / 凭证分组 / 校验展示）— HKUDS/nanobot PR #5733

**功能大项落地**
- PR #5356 [CLOSED] `feat(webui)` (NAN-112)：通道目录改为分组双列行布局、分离依赖安装与通道激活、串行化安装流程，并完成全量本地化 — 该 PR 自 2026-08-12 创建，历时约一个月关闭，属于本日**体量最大的合入** — HKUDS/nanobot PR #5356

**稳定性修复**
- PR #5734 [CLOSED] `fix(memory)`：澄清 Dream 提示的写入边界，解决 `/dream` 期间 Codex 拒绝更新记忆的问题 — HKUDS/nanobot PR #5734
- PR #5730 [CLOSED]：内部模型调用（Dream 等）改用流式请求并设置空闲超时，避免超过 120s 的 OpenAI 兼容 HTTP 超时反复触发并耗尽 runner — HKUDS/nanobot PR #5730

**整体推进幅度评估**：今日无破坏性变更，属于典型的"清理 + 打磨"型推进日。真正的结构性进展是 #5356 的落地与 #5732 引出的 WebUI 流式刷新优化（已由 #5738 继续跟进）。

---

## 4. 社区热点

| 条目 | 类型 | 评论数 | 链接 |
|---|---|---|---|
| #5505 Add AnySearch as a web search provider | Issue (CLOSED) | 8 | HKUDS/nanobot Issue #5505 |
| #5726 Startup initial password? | Issue (OPEN, p1) | 2 | HKUDS/nanobot Issue #5726 |
| #5731 Add AnySearch extract as web_fetch backend | Issue (OPEN) | 0 | HKUDS/nanobot Issue #5731 |

**诉求分析：**

- **#5505 / #5731 是最明确的生态集成信号。** AnySearch 团队（作者 cleverLucky）主动提出以 API、MCP、Skill 三种方式接入，并强调"key-optional + 匿名配额"——即**不强制用户配置 API Key**。他们先提交搜索 provider（#5505，8 条评论后关闭，摘要显示"Plan: Submit a PR to int..."，即已转为 PR 流程），随即又为 `web_fetch` 后端提交了同构请求（#5731）。这说明需求方希望成对覆盖 **搜索 + 抓取** 两个能力位，且推进节奏紧凑。

- **#5726 反映一类真实部署摩擦**（详见下节）。

---

## 5. Bug 与稳定性

按严重程度排列：

**P1 — #5726 [OPEN] 无头服务器启动后无法获知初始密码**
- 现象：在无头服务器安装 nanobot，默认启动给出的链接指向不支持 JS 的终端浏览器，用户被迫关闭并从另一台机器用 Firefox 访问，但不知道该用哪个密码。
- 影响：**安装后即阻塞**，属首次使用路径上的硬性阻断。
- Fix 状态：无。但今日已有相关 PR 在评审/待合并：**PR #5735 [OPEN] `fix(webui): make headless login self-explanatory`** —— 检测 `links`/`lynx`/`w3m` 等纯文本浏览器，输出包含安全本地 URL、精确的 WebUI 密码来源、SSH 隧道命令的完整手动指引。

**P2 — Discord 压缩通知未受 `sendProgress: false` 抑制（#5719，已关闭）**
- 现象：`channels.sendProgress: false` 时，自动空闲压缩仍发送 `Compressing context…` 与 `Context compacted.` 两条独立消息；普通进度消息则被正确抑制。
- Fix 状态：**已有 fix PR 并已合并** — PR #5720。

**P2 — 内部任务非流式请求触发超时（由 PR #5730 修复）**
- 现象：无 UI 流回调时，Dream 等内部任务选择非流式请求；耗时超 120 秒的模型会反复命中 OpenAI 兼容 HTTP 超时，进而耗尽 runner。
- Fix 状态：**已修复并关闭** — PR #5730。

**P2 — Responses API 重放失败（#5613，OPEN）**
- 现象：重放 Chat 历史中由 provider 生成的 item ID、以及会话状态里的不支持字段，导致 Responses API 失败。
- Fix 状态：**已有 PR #5613 待合并**（创建于 2026-08-30，今日仍有更新）。 — HKUDS/nanobot PR #5613

**P2 — wecom/weixin 媒体回退文件名使用非确定性 `hash()`（#5729，OPEN）**
- 现象：两个通道的媒体下载器用 Python 内置 `hash()` 构造回退文件名，跨进程不稳定。
- Fix 状态：**已有 PR #5729 待合并**（今日新建）。 — HKUDS/nanobot PR #5729

---

## 6. 功能请求与路线图信号

| 需求 | 条目 | 判断 |
|---|---|---|
| 将 AnySearch 接入为 web search provider | #5505（已关闭，转 PR 流程） | 已有明确 PR 路径，作者声明将提交 PR。若 PR 落地，可能进入下一版本 |
| 将 AnySearch extract 接入为 `web_fetch` 后端 | #5731（新开） | 与 #5505 同构，属配对需求。能否纳入取决于 #5505 的评审结果 |
| 无头环境登录流程自解释化 | #5726 + PR #5735 | **已有现成 PR，本轮最可能被纳入的高优先级改进** |
| WebUI 自动化管理界面精简（用轻量任务列表 + 按需详情弹窗替换密集队列/详情工作区，减少重复控件与元数据） | PR #5740（OPEN） | 今日新建，方向与 #5733/#5356 的"降低设置界面复杂度"一脉相承 |
| WebUI 长文本流式刷新开销进一步降低 | PR #5738（OPEN） | 从 #5732 中抽取 WebUI 部分独立推进，关联 NAN-113 |

**信号总结**：路线图当前明显偏向 **WebUI 交互简化 + 通道一致性**，而非新增大模型/provider 能力。第三方搜索集成是唯一的外部能力扩展方向。

---

## 7. 用户反馈摘要

- **部署场景：无头服务器 / 远程工作站。** 用户 gardiol（#5726）的典型路径是：服务器安装 → 终端浏览器无法渲染 → 切换到另一台机器的 Firefox 访问 → 卡在密码未知。这类场景对"零配置图形界面"的假设构成直接挑战，用户不仅需要能访问，还需要**明确被告知密码从何而来**。

- **不满意点 —— 配置开关未被完全尊重。** #5719 中用户关闭了 `channels.sendProgress`，普通进度消息确实被抑制，但压缩通知仍照发两条。这属于**配置语义不一致**而非单纯多消息问题，容易削弱用户对配置项的信任。该问题已通过 #5720 修复，且同类问题在 Telegram（#5706）与 Email（#5737）上被一并清理。

- **第三方集成方的主动诉求。** AnySearch 团队 (#5505/#5731) 三次强调 "key-optional, anonymous quota"，说明他们预期 nanobot 用户不愿为搜索能力额外配置凭证——这既是对接入门槛的诉求，也暗示希望获得默认位的曝光。

- **满意/正向信号：** #5505 在 8 条评论后关闭并于同日转入后续动作，#5731 于次日立即跟进，说明集成讨论过程顺畅、维护者响应及时。

---

## 8. 待处理积压

**需重点关注的长期未决项：**

- **PR #5613 [OPEN] `fix(provider): clean up replayed items before sending them to providers`** — 创建于 2026-08-30，至今日已**约 12 天未合并**，今日仍有更新。属 P2 provider 正确性修复，阻塞 Responses API 稳定性，建议优先评审。 — HKUDS/nanobot PR #5613

- **PR #5356 [CLOSED]** — 已于今日关闭，此前从 2026-08-12 滞留近一个月，提示**大体积 WebUI PR 的评审周期偏长**，可作为流程观察点。

**今日新增但需持续跟踪的待合并 PR（15 条中的代表）：**

- **PR #5740 [OPEN]** WebUI 自动化管理简化（今日新建） — HKUDS/nanobot PR #5740
- **PR #5738 [OPEN]** WebUI 长文本流式刷新优化（今日新建） — HKUDS/nanobot PR #5738
- **PR #5735 [OPEN]** 无头登录自解释化（直接回应 P1 #5726） — HKUDS/nanobot PR #5735
- **PR #5729 [OPEN]** wecom/weixin 媒体回退名确定性哈希（今日新建） — HKUDS/nanobot PR #5729

**状态说明：** PR #5739（[CI/CD, priority: p2]，作者 starwithcoder，今日新建）摘要为空，无法评估内容，建议维护者补充描述后再行评审。 — HKUDS/nanobot PR #5739

---

*本日报全部信息来源于所提供 GitHub 数据，未包含外部推断。数据缺口：15 条待合并 PR 中仅展示了评论数最多的 15 条摘要，且 PR 评论数字段为 `undefined`，无法据此判断 PR 讨论热度。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-11

## 1. 今日速览

过去 24 小时项目保持高位活跃：Issues 更新 50 条（新开/活跃 42，关闭 8），PR 更新 50 条（待合并 41，合并/关闭 9），无新版本发布。合并/关闭的 PR 数量（9）明显低于待合并积压（41），评审吞吐是当前主要瓶颈。今日缺陷报告集中在跨平台（Windows 终端与 MCP 进程回收、macOS 桌面标题栏回归）与多 provider/插件集成路径上，多数已有对应 fix PR 在审。讨论热度高度集中在一个长期挂起的 CI 集成阻塞 Issue（87 条评论），而该项目同时又长期缺少响应者（见"待处理积压"）。

## 2. 版本发布

今日无新版本发布。

（注：Issue #108165 与数据中提及的运行环境显示用户侧版本为 Hermes 0.20.0。）

## 3. 项目进展

- **PR #108179** — feat(kanban): 在看板页头部新增 BoardSwitcher，并支持 SidebarNavItem dropdownContent，将此前仅存在于其他入口的看板切换/创建/删除/重命名/归档操作前置到页面级。
  链接: NousResearch/hermes-agent PR #108179
- **PR #108159** — fix(gateway): 将 auto-reset 会话连续性提示从 Slack/Discord 扩展到全部人类聊天平台，减少自动重置后的上下文丢失。
  链接: NousResearch/hermes-agent PR #108159
- **PR #108173** — fix(tui_gateway): 按 `display.show_reasoning` 配置门控 reasoning 事件发射（对应 #107094），修复关闭显示推理后仍推送 `reasoning.delta` / `reasoning.available` 的问题。
  链接: NousResearch/hermes-agent PR #108173
- **PR #107809** — fix(replay): 改为按外层 `exit_code` 分类结构化工具结果，避免已完成结果被误判为中断。
  链接: NousResearch/hermes-agent PR #107809
- **PR #108174** — fix(image_gen): openai-codex 图片生成返回实际宽高与不匹配标记（Closes #108171）。
  链接: NousResearch/hermes-agent PR #108174
- **PR #108178** — fix(desktop): 为桌面 artifact registry 增加 4 Mi UTF-16 预算与逐版本淘汰策略，限制内存增长。
  链接: NousResearch/hermes-agent PR #108178

**整体推进评估**：今日进展以"修漏补缺"为主——门控配置一致性、会话连续性提示覆盖面、结果分类正确性、内存上界。无架构级推进；关键 Issue #17476（统一 live-time 运行时上下文路径）仍在 `needs-decision` 状态停滞，同日关闭的 #26832（cron 前置条件检查）标记为 `sweeper:implemented-on-main`，已由主线实现承接。

## 4. 社区热点

| 条目 | 评论数 | 链接 |
|---|---|---|
| #88584 [OPEN] Automated Nous integration is blocked | 87 | NousResearch/hermes-agent Issue #88584 |
| #100401 [OPEN] cron fire-claim heartbeat deadlock | 15 | NousResearch/hermes-agent Issue #100401 |
| #84361 [OPEN] Desktop MEDIA: 文件链接失效 | 9 | NousResearch/hermes-agent Issue #84361 |
| #65094 [CLOSED] Custom Codex-compatible provider 缺会话头 | 6 | NousResearch/hermes-agent Issue #65094 |
| #17476 [OPEN] 统一 live-time 运行时上下文路径 | 6 | NousResearch/hermes-agent Issue #17476 |
| #107402 [OPEN] `hermes update` 遗留网关重启警告 | 5 | NousResearch/hermes-agent Issue #107402 |
| #92758 [OPEN] MCP OAuth 丢失 RFC 9207 iss 参数 | 5 | NousResearch/hermes-agent Issue #92758 |

**诉求分析**：
- #88584 的高评论量并非功能争议，而是 CI 集成长期阻塞（`cron/jobs.py` 合并冲突导致发布分支与 dashboard 更新器停在最后一次已测试的 Enterkey 版本）。这是**发布流水线健康问题**，其标记为 `invalid`，但评论量说明社区在持续追问。
- #100401 是当日最严重的运行时缺陷（P1）：fire-claim heartbeat 与自身 run 的 fence 死锁，导致所有运行超过 60 秒的 job 被记为"Interrupted by shutdown"，直接击中 cron 的可靠性承诺。
- #84361 与 #92758 反映桌面端集成链路（文件打开、OAuth 回调）仍有跨组件缝隙。

## 5. Bug 与稳定性

**P1**
- **#100401** cron 死锁：fire-claim heartbeat 与自身 run fence 冲突，>60s 的 job 全部被杀并记为 shutdown 中断。状态：OPEN，未见 fix PR。
  链接: NousResearch/hermes-agent Issue #100401

**P2**
- **#107402** `hermes update` 在网关延迟重启时留下永久"did not restart running gateways"警告（验证时机与延迟重启语义不一致，#77184 相关）。
  链接: NousResearch/hermes-agent Issue #107402
- **#92758** 桌面端 MCP OAuth 失败：dashboard 回调丢弃 RFC 9207 `iss` 参数，影响声明 `authorization_response_iss_parameter_supported: true` 的授权服务器（已在 Resend 复现）。
  链接: NousResearch/hermes-agent Issue #92758
- **#108165** Windows：`shutil.which("bash")` 解析到 WSL bash，终端工具调用全部失败（exit 126）；标记 `duplicate`、`platform/windows`。
  链接: NousResearch/hermes-agent Issue #108165
- **#108084** Windows：MCP 重连泄漏 stdio 孙进程，POSIX killpg 无法触达 cmd.exe/npx 链（实测 12 个 `node.exe` 残留）。
  链接: NousResearch/hermes-agent Issue #108084
- **#108163** smart approvals：guardian 以 `max_tokens=16` 调用推理模型返回空答案，导致每条被标记命令都升级到用户。
  链接: NousResearch/hermes-agent Issue #108163
- **#94455** `notify_on_complete` 在 poll 结果已内联处理后仍发出过期合成 turn。
  链接: NousResearch/hermes-agent Issue #94455
- **#84361** 桌面 `MEDIA:` 文件链接点击无效：tag 正则吞掉尾部 markdown，`file://` URL 由字符串拼接产生。
  链接: NousResearch/hermes-agent Issue #84361

**P3**
- **#108079** Slack `SessionSource` 从不填充 message_id，`HERMES_SESSION_MESSAGE_ID` 恒为空。
  链接: NousResearch/hermes-agent Issue #108079
- **#108171** openai-codex 图片生成忽略 `aspect_ratio`（portrait 请求返回 landscape）且模型 id 未校验 —— **已有 fix PR #108174**。
  链接: NousResearch/hermes-agent Issue #108171
- **#78597** DingTalk 适配器：导入与懒加载 SDK 安装竞态导致入站消息永久丢弃（`handler base frozen to object`）。
  链接: NousResearch/hermes-agent Issue #78597
- **#108126**（已关闭，duplicate）原生 deepseek provider 丢失 deepseek-flash 的 `thinking`/`reasoning_effort`。
  链接: NousResearch/hermes-agent Issue #108126

**已关闭的回归**
- **#107196**、**#107774** 均为 macOS 桌面标题栏回归：面板标签被裁切、覆盖 titlebar 控件簇并遮挡侧栏按钮。两者已于今日关闭。
  链接: NousResearch/hermes-agent Issue #107196 | NousResearch/hermes-agent Issue #107774

**fix PR 覆盖情况**：#108171 有对应 PR #108174；#107094 有对应 PR #108173；#107398 有对应 PR #108170；#100401、#107402、#92758、#108084、#108163 暂未见明确 fix PR。

## 6. 功能请求与路线图信号

- **#108046** feat(cli): `-z --done-when` — 为 oneshot 模式提供确定性完成门控，面向 cron/CI 中"产物可机械校验"的场景。诉求明确、范围可控，具备近期纳入的可能。
  链接: NousResearch/hermes-agent PR #108046
- **#108175** feat(image-gen): 为 Codex OAuth provider 补齐 GPT Image 2.5 tiers（Flare/Sunburst），与 API-key `openai` provider 对齐。同作者当日连带提交了 #108171 的修复，落地意愿强。
  链接: NousResearch/hermes-agent PR #108175
- **#89385** 引入 session-start hook，使 memory provider 可自动恢复（Memory Lane 为已验证消费方，MIT、零依赖、local-first）。状态 `needs-decision`，属于插件扩展面设计决策。
  链接: NousResearch/hermes-agent Issue #89385
- **#17476** 将分散的 timestamp/timezone PR 收敛到单一 runtime 上下文路径（避免把易变的当前时间放进缓存 system prompt）。长期 `needs-decision`，是路线图上的结构性议题。
  链接: NousResearch/hermes-agent Issue #17476
- **#26832**（已关闭，`sweeper:implemented-on-main`）cron 任务前置条件检查（如工作日判定，含中国节假日/调休规则）——已由主线实现承接。
  链接: NousResearch/hermes-agent Issue #26832
- **#107413** fix(cron): multiplexed dispatch 中的 passthrough secrets 处理，涉及安全边界与 profiles，建议关注评审结论。
  链接: NousResearch/hermes-agent PR #107413

## 7. 用户反馈摘要

- **Cron 可靠性是最大信任痛点**：#100401 描述作业被系统性误判为"Interrupted by shutdown"，直接影响用户对定时任务的依赖；#26832 则显示用户需要按真实工作日（含中国节假日与调休）调度，而非简单星期判断。
- **桌面端可用性问题密集**：MEDIA 链接点击无反应且路径不入日志（#84361，调试信息缺失本身即体验问题）；macOS 标题栏回归一度使侧栏与标签不可用（#107196、#107774）。
- **Windows 是明显的平台洼地**：终端工具因 WSL bash 解析而全面失败（#108165），MCP 重连导致进程泄漏（#108084），两者均带 `platform/windows` 标签，指向平台上未覆盖的进程管理与路径解析路径。
- **Provider 集成质量参差**：Codex 兼容 provider 缺失会话头（#65094）、deepseek-flash 丢失推理参数（#108126）、opencode go 无法连接（#106619）、openai-codex 图片几何不匹配（#108171）。
- **升级与运维体验**：`hermes update` 遗留误导性警告（#107402），以及 `updates.pre_update_backup` 旧布尔形式需被 `hermes doctor` 识别（#108021），显示配置迁移与状态校验仍有摩擦。
- **正向信号**：插件生态已有第三方主动构建并验证（#89385 的 Memory Lane），说明插件接口具备实际可用性。

## 8. 待处理积压

- **#88584**（创建于 2026-08-17，今日仍 OPEN，87 条评论）：CI 集成阻塞已近一个月，且被标记 `invalid`，但持续产生讨论。建议维护者明确状态与处置路径，否则会持续消耗社区注意力。
  链接: NousResearch/hermes-agent Issue #88584
- **#17476**（创建于 2026-04-29，`needs-decision`）：跨 comp/agent 与 comp/gateway 的运行时上下文统一议题，已挂起约四个半月，阻塞其下若干 timestamp/timezone PR 的收敛。
  链接: NousResearch/hermes-agent Issue #17476
- **#84361**（创建于 2026-08-12，P2，9 条评论）：桌面 MEDIA 链接失效已持续一个月，且因路径未记录而难以自主诊断。
  链接: NousResearch/hermes-agent Issue #84361
- **#78597**（创建于 2026-08-04，P3）：DingTalk 适配器竞态导致入站消息永久丢失，属静默数据丢失类问题，优先级标注偏低，建议复核。
  链接: NousResearch/hermes-agent Issue #78597
- **#89385**（创建于 2026-08-18，`needs-decision`）：第三方已验证的 memory provider 自动恢复能力等待设计决策。
  链接: NousResearch/hermes-agent Issue #89385
- **评审吞吐**：待合并 PR 41 条对今日合并/关闭 9 条，积压比约 4.6:1。若维持当前节奏，PR 队列将继续拉长，建议关注评审分配而非仅关注提交量。
- **P1 未响应**：**#100401** 为当日唯一 P1 且未见 fix PR，建议优先排期。
  链接: NousResearch/hermes-agent Issue #100401

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-09-11）

## 1. 今日速览

过去 24 小时项目**无新版本发布**，Issues 与 PR 合计更新 10 条，整体活跃度**中等偏低**。新增/活跃 Issue 2 条、关闭 1 条；7 条 PR 全部处于待合并状态，且其中 5 条为 Dependabot 依赖升级，仅有 2 条为功能/修复类 PR（#3371、#3376）。值得注意的是，今日所有更新的 Issues 与多条 PR 均带有 `stale` 标记，说明积压清理压力正在上升。社区讨论集中在渠道（Channel）配置与连接类问题上，尤其是 deltachat、Feishu、QQ 三个渠道。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目主线代码未向前推进。

- PR #3376（fix(deltachat)，作者 luisgdev，2026-09-10 创建）针对已关闭 Issue #3265 的配置校验错误提出修复方案：将 deltachat 初始化为自定义 channel，以解决 `channel "deltachat" has unknown type` 的启动失败问题。该 PR 目前待合并，是今日唯一与运行稳定性直接相关的代码变更。
  链接：sipeed/picoclaw PR #3376

- PR #3371（feat(providers)，作者 EMTumariscal）新增 `opencode-go` provider（`https://opencode.ai/zen/go/v1`），按模型 ID 自动路由到对应端点族，并支持 `x-opencode-...` 会话头，属于功能性扩展，仍待合并。
  链接：sipeed/picoclaw PR #3371

总体来看，今日项目处于“有输入、无产出”状态，修复与功能均停留在待审查队列。

## 4. 社区热点

按评论数与更新时间，今日讨论最集中的是：

- **Issue #3265**（CLOSED，[stale]，6 条评论，👍 1）：deltachat 未配置却导致 Gateway 启动失败，是今日互动量最高的条目，且已有对应修复 PR #3376，形成“Issue 关闭 → PR 待合”的闭环。
  链接：sipeed/picoclaw Issue #3265

- **Issue #3349**（OPEN，[stale]，[BUG]，4 条评论）：QQ 频道无法使用，gateway 日志显示获取 websocket 信息失败（code:401，提示 Authorization 请求头格式错误，err_code 40011005），用户在 docker 与 Linux x86 两个版本上均复现。
  链接：sipeed/picoclaw Issue #3349

- **Issue #3355**（OPEN，[stale]，[BUG]，1 条评论）：连接飞书报错，报 `config.json contains unknown field(s): channel_list.feishu.app_id`，用户同时附带了解决方案，属于“问题+修复建议”型反馈。
  链接：sipeed/picoclaw Issue #3355

诉求背后反映的是同一类问题：**渠道配置 schema 与校验逻辑不一致**，导致即使配置看起来正确，Gateway 仍会在启动或连接阶段失败。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — QQ 频道完全不可用（Issue #3349，OPEN）**
   现象：docker 版与 Linux x86 版均无法使用 QQ 频道，gateway 报 websocket 鉴权失败（code:401，`Authorization` 参数格式错误 / err_code 40011005）。
   状态：**无对应 fix PR**，且已被标记 `stale`，风险较高。
   链接：sipeed/picoclaw Issue #3349

2. **中 — 飞书连接报错（Issue #3355，OPEN）**
   现象：`config.json` 中 `channel_list.feishu.app_id` 被判定为 unknown field，导致飞书渠道不可用；用户已自行给出解决方案。
   状态：**无对应 fix PR**，但修复路径明确。
   链接：sipeed/picoclaw Issue #3355

3. **中 — deltachat 配置校验导致 Gateway 启动失败（Issue #3265，CLOSED）**
   现象：未配置 deltachat 时仍报 `channel "deltachat" has unknown type deltachat`，Gateway 无法启动。
   状态：Issue 已关闭，**已有 fix PR #3376 待合并**，但尚未落地，风险仍未实际解除。
   链接：sipeed/picoclaw Issue #3265 ｜ sipeed/picoclaw PR #3376

## 6. 功能请求与路线图信号

今日无明确的新功能请求类 Issue，主要信号来自代码侧：

- **新增 provider 支持（PR #3371）**：`opencode-go` provider 及其会话头支持，若合并将扩展模型接入能力，属于 provider 层的横向扩充。
  链接：sipeed/picoclaw PR #3371

- **渠道自初始化机制（PR #3376）**：将 deltachat 作为 custom channel 初始化，实质上是为渠道注册与配置校验提供一种更通用的处理范式，可能影响后续其他渠道的接入方式。
  链接：sipeed/picoclaw PR #3376

结合现有 PR 判断，短期内更可能被纳入下一版本的是上述两项；而 Issue #3355 中用户提出的飞书配置字段修复方案，尚无对应 PR，存在被采纳的可能但未被排期。

## 7. 用户反馈摘要

- **渠道兼容性是核心痛点**：三条 Issue 分别覆盖 deltachat、QQ、飞书三个不同渠道，均表现为配置或连接失败，说明跨渠道的配置校验与鉴权逻辑是当前用户最集中的受挫点。
- **使用场景**：用户在多环境部署（docker 版本、Linux x86 版本）下进行测试，说明 PicoClaw 的实际使用已进入自托管/多平台部署阶段。
- **用户参与度高**：Issue #3355 的用户在报告问题的同时附带了解决方案；Issue #3265 获得 1 个 👍，并有社区成员（luisgdev）主动提交修复 PR。
- **不满之处**：错误信息可读性不足（如“unknown type”“unknown field(s)”指向的根因与用户实际配置无关），以及多处问题被标记为 `stale` 却未实际解决。
- 今日数据中未出现明确的正面评价或满意度反馈。

## 8. 待处理积压

以下条目均带有 `stale` 标记且长期未闭环，建议维护者优先关注：

- **Issue #3349**（2026-08-30 创建，已 12 天，4 条评论）：QQ 频道不可用，无 fix PR，用户体验受损且仍在复现。
  链接：sipeed/picoclaw Issue #3349

- **Issue #3355**（2026-09-01 创建，10 天，含解决方案）：飞书连接报错，方案未被转化为 PR。
  链接：sipeed/picoclaw Issue #3355

- **PR #3364、#3363、#3362、#3361、#3360**（均为 2026-09-03 创建，已 8 天，`dependencies, go, stale`）：5 条 Dependabot 依赖升级（aws-sdk-go-v2 1.42.0→1.45.1、irc-go 0.6.0→0.7.0、golang.org/x/term 0.44.0→0.45.0、protobuf 1.36.11→1.36.12、larksuite/oapi-sdk-go/v3 3.9.4→3.11.0）全部待合并。其中 larksuite SDK 升级与飞书渠道问题（Issue #3355）可能存在关联，建议一并评估。

- **Issue #3265 与 PR #3376**：Issue 已关闭但修复 PR 尚未合并，存在“问题看似解决、实际未修复”的落差，建议尽快推进合并或明确关闭原因。

整体健康度评价：项目维护侧响应偏慢，积压以依赖升级和渠道类 Bug 为主；社区侧仍有主动贡献（#3376、#3371）与自助修复意愿，是当前项目活力的主要来源。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报（2026-09-11）

## 1. 今日速览

过去24小时项目保持中等偏高的维护活跃度：14 条 PR 更新（10 条待合并、4 条已合并/关闭），5 条 Issue 更新（2 条新开/活跃、3 条关闭），无新版本发布。今日主线集中于 `add-opencode` 技能的历史遗留清理——Issue #3204 关闭、PR #3274 关闭、修复 PR #3763 新开，形成闭环。高优先级容器问题 #3643（30 分钟硬性冷杀长回合）持续活跃，尚无对应 fix PR，是当前最值得关注的未解决稳定性风险。整体看，项目在偿还技术债与修复细节上推进扎实，但积压中存在多条积压近一个月、由同一贡献者提交且长期未被合并的 PR，维护带宽可能是瓶颈。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭 4 条 PR：

- **PR #3274 [CLOSED]** `docs(skills): update add-opencode to cli-tools.json pattern` —— 将 `.claude/skills/add-opencode/SKILL.md` 从旧的 `ARG` + `RUN pnpm install -g` 指令更新为 `cli-tools.json` 模式，并移除断言旧 Dockerfile 形态的守卫测试。同步关闭 Issue #3204，标志该文档/技能与重构后代码库正式对齐。
  https://github.com/nanocoai/nanoclaw/pull/3274
- **PR #3760 [CLOSED]** `fix(setup): verify sees a nohup-started host when systemd has no user instance` —— 修复 `verify` 在 systemd 用户实例不可达、host 由 nohup 包装启动时误报的问题，对应关闭 Issue #3759。
  https://github.com/nanocoai/nanoclaw/pull/3760
- **PR #3708 [CLOSED]** `fix(agent-runner): set busy_timeout before journal_mode on outbound open` —— 调整 `getOutboundDb()` 中两条 PRAGMA 的执行顺序，避免设置 `journal_mode` 时因独占锁冲突失败。
  https://github.com/nanocoai/nanoclaw/pull/3708
- **PR #3707 [CLOSED]** `feat(agent-runner): add registerAdmissionGate poll-loop seam` —— 新增 `admission-gate.ts`，在外层轮询循环的 abort 检查之后接入准入判定钩子，为后续流控/准入策略提供可插拔接缝。
  https://github.com/nanocoai/nanoclaw/pull/3707

整体推进评估：今日进展以"清理与对齐"为主——修复了 setup/verify 与 agent-runner 的两个具体缺陷，并让 add-opencode 技能文档追平 `cli-tools.json` 重构；新增的 admission gate 接缝属于面向未来的基础设施性改动，短期内不直接产生用户可见功能。

## 4. 社区热点

今日数据中所有 Issue/PR 的评论数均不超过 1，点赞数均为 0，无显著讨论热度。相对而言，以下条目值得关注：

- **Issue #3643 [OPEN, priority/high]** —— 唯一的高优先级开放问题，涉及容器生命周期，1 条评论。链接：https://github.com/nanocoai/nanoclaw/issues/3643
- **PR #3287 / #3311 / #3275 / #3276 / #3281 / #3286** —— 同一作者 wakqasahmed 的六条修复 PR 于同一天（2026-09-11）被更新，均处于 OPEN 状态，构成今日 PR 活动的主体。

背后诉求：当前社区互动信号薄弱，讨论集中在维护者与少数高频贡献者之间；大量由同一贡献者提交、彼此独立的修复 PR 长期挂起，反映的不是需求分歧，而是评审吞吐不足。

## 5. Bug 与稳定性

按严重程度排列：

1. **[HIGH] Issue #3643 [OPEN]** —— `ABSOLUTE_CEILING_MS` 被硬编码为 30 分钟，host sweep 会在长回合中途杀死容器（日志：`WARN Killing container past absolute ceiling`），影响 OpenCode provider 对接的本地 OpenAI 兼容服务器上的长 agent 回合，且没有配置缝（config seam）可供调整。本地模型场景下这是可直接导致任务失败的问题。**尚无对应 fix PR（今日数据中未见）。**
   https://github.com/nanocoai/nanoclaw/issues/3643
2. **[LOW] Issue #3762 [OPEN]** —— `add-opencode` 在 `remove` 与 `upgrade` 路径上遗留 8772ec97 之前的 Dockerfile 守卫测试文件 `src/opencode-dockerfile.test.ts`，该文件断言已被移除的 `ARG OPENCODE_VERSION` 与 `pnpm install -g` 行。**已有 fix PR #3763（今日新开，OPEN）。**
   https://github.com/nanocoai/nanoclaw/issues/3762 · https://github.com/nanocoai/nanoclaw/pull/3763
3. **[已关闭] Issue #3204** —— `add-opencode` 文档仍指导已被 `cli-tools.json` 重构移除的 Dockerfile 编辑方式，守卫测试断言旧形态。已由 PR #3274 关闭。
   https://github.com/nanocoai/nanoclaw/issues/3204
4. **[已关闭] Issue #3759** —— `verify` 在 systemd 无用户实例、host 经 nohup 启动的主机上误报 `SERVICE: not_found` → `STATUS: failed`（Linux，版本 2.3.0）。已由 PR #3760 关闭。
   https://github.com/nanocoai/nanoclaw/issues/3759

另有 Issue #3761（`[probe-permission-test-do-not-merge]`，作者 sun-yryr）为权限探测用途的测试条目，已于当日关闭，不构成实际缺陷。

## 6. 功能请求与路线图信号

今日无明确的新功能请求类 Issue。从已挂起的 PR 可观察路线图信号：

- **PR #3707（已关闭）引入的 `registerAdmissionGate` / `evaluateAdmission` 轮询循环接缝**，表明 agent-runner 正在为准入控制/流控能力预留扩展点，但今日数据未说明后续具体功能规划。
- **Issue #3643 提出的"无 config seam"**，隐含一项配置化需求：将冷杀上限从硬编码常量改为可配置项。若被接受，可能以配置项形式进入后续版本；当前无对应 PR。

## 7. 用户反馈摘要

从今日 Issues/PR 摘要中可提炼的真实痛点：

- **本地模型用户体验受损**：Issue #3643 中，使用 OpenCode provider + 本地 OpenAI 兼容服务器的用户，其长回合被 host sweep 在 30 分钟处强制终止，且无配置手段规避，属于明确的负面体验。
- **升级/卸载路径的洁净度问题**：Issue #3762 显示早期安装（8772ec97 之前）的用户在 `remove`/`upgrade` 后仍会残留过期守卫测试，说明技能的生命周期管理（安装、刷新、卸载）对历史版本兼容性处理不足。
- **平台差异导致的误判**：Issue #3759 反映 Linux 上以 nohup 方式启动 host（无 systemd 用户实例）时，`verify` 步骤误报服务不存在，影响此类部署方式的可用性判断。
- **部署环境细节敏感**：PR #3276 指出 Google Chat 的消息 ID 为资源路径形式（`spaces/...`），被 `isSafeAttachmentName` 拒绝，导致附件暂存失败——跨平台 ID 形态差异是反复出现的适配痛点。
- **Telegram 频道贴文黑洞**：PR #3449 指出 Telegram 服务端按 bot token 持久化 `allowed_updates`，省略参数会沿用旧设置，导致频道贴文被静默丢弃。

## 8. 待处理积压

以下条目创建于 2026-08-16 至 2026-08-31，至今日（2026-09-11）仍处于 OPEN 且无合并迹象，建议维护者优先安排评审：

- **PR #3274 之后的同批 PR 持续挂起**（均为 wakqasahmed 提交，均于今日被 touch 但未合并）：
  - https://github.com/nanocoai/nanoclaw/pull #3287 `Fix: strip agent-group suffix from inbound platform message id`（创建 08-17，Fixes #3153）
  - https://github.com/nanocoai/nanoclaw/pull #3311 `fix(agent-runner): route scheduled-task errors to the operator`（创建 08-18，Fixes #3223）
  - https://github.com/nanocoai/nanoclaw/pull #3275 `fix(setup): install ncl symlink on upgrade path`（创建 08-16，Fixes #2355；作者注明是 #2356 被关闭后的重试）
  - https://github.com/nanocoai/nanoclaw/pull #3276 `Sanitize path-separator message IDs for attachment staging`（创建 08-16，Fixes #3206）
  - https://github.com/nanocoai/nanoclaw/pull #3281 `Fix agent-scoped ncl tasks blind to pre-2.1.54 legacy sessions`（创建 08-16，Fixes #3233）
  - https://github.com/nanocoai/nanoclaw/pull #3286 `Skip image rebuild in restart when no packages configured`（创建 08-17，Fixes #2701）
- **PR #3449** `fix(telegram): pin explicit allowedUpdates to stop channel-post blackholing`（创建 08-22，仍 OPEN）：https://github.com/nanocoai/nanoclaw/pull/3449
- **PR #3689** `fix(update): snapshot symlinked mutable roots`（创建 08-31，Closes #3684，仍 OPEN）：https://github.com/nanocoai/nanoclaw/pull/3689
- **Issue #3643 [HIGH]** 自 08-28 创建至今无 fix PR，是积压中优先级最高的未解决缺陷：https://github.com/nanocoai/nanoclaw/issues/3643

健康度提示：待合并 PR 数（10）显著高于今日合并数（4），且多条修复类 PR 已积压逾三周。建议维护者集中处理这批已关联明确 Issue、且多为独立小改动的 PR，以降低积压对贡献者积极性的影响。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-11

> 数据来源：github.com/nearai/ironclaw 过去 24 小时活动（Issues、PR、Releases）

## 1. 今日速览

今日项目活跃度**中等偏高，但结构性偏弱**：过去 24 小时共有 1 条 Issue 更新与 8 条 PR 更新，无新版本发布。PR 更新中有 6 条待合并、2 条已合并/关闭，其中 5 条为 dependabot 自动依赖升级，人工贡献仅集中于少数修复类 PR。当日唯一活跃 Issue（#8093）为自动生成的 benchmark 失败分类日报，互动为零；社区讨论与用户反馈环节今日基本空转。整体看，项目维持了持续的维护节奏，但缺少重量级功能推进与社区互动信号。

## 2. 版本发布

今日无新版本发布（0 个）。

## 3. 项目进展

今日已合并/关闭 2 条 PR：

- **#8072 [CLOSED] feat(telegram): register the Bot API command menu at activation**
  作者：thisisjoshford | 创建：2026-09-04 | 更新：2026-09-10
  标签：size: L, risk: low, scope: docs, scope: dependencies, contributor: experienced
  链接：nearai/ironclaw PR #8072
  要点：Telegram 聊天菜单按钮（输入框旁的"汉堡"菜单）现在会列出频道声明的命令——`/model`、`/status`、`/new`、`/stop`、`/interrupt`，并在扩展激活时通过 Bot API 的 `setMyCommands` 注册。这是一次面向用户可发现性的体验改进，降低了命令使用门槛，属于低风险、文档与依赖同步更新的中型变更。

- **#8080 [CLOSED] chore(deps): bump the everything-else group across 1 directory with 21 updates**
  作者：dependabot[bot] | 创建：2026-09-06 | 更新：2026-09-10
  链接：nearai/ironclaw PR #8080
  要点：Rust 依赖批量升级（21 项），包含 `uuid` 1.24.0 → 1.26.0、`base64` 等。该 PR 随后被 #8097（24 项更新的新版批量升级）取代，属常规依赖维护。

**整体判断**：今日项目向前推进幅度较小，主要成就是 Telegram 命令菜单的用户体验落地，以及依赖基线的持续滚动更新。

## 4. 社区热点

今日**无明显社区热点**：唯一更新的 Issue #8093 评论数为 0、👍 为 0；PR 侧所有条目的评论数均为 `undefined`、👍 均为 0，无一条形成讨论。

- **#8093 [OPEN] Daily ironclaw failure taxonomy — 2026-09-10**
  作者：pranavraja99 | 创建：2026-09-10 | 更新：2026-09-10 | 评论：0 | 👍：0
  链接：nearai/ironclaw Issue #8093
  摘要显示：分析对象包含 `officeqa`（42 个 non-pass 任务），该运行的非通过任务存在"ove..."（摘要被截断）。该 Issue 属自动化 benchmark 失败分类报告，尚无人工回应，其潜在诉求是**对 benchmark 失败模式进行归类与跟踪**，但目前缺乏社区参与。

## 5. Bug 与稳定性

今日无用户报告的崩溃或回归类 Bug Issue。以 PR 形式提交的稳定性/兼容性修复如下（按影响面排序）：

- **中：IME 输入法组合被打断（WebUI 聊天输入框）**
  PR **#8092 [OPEN] fix(webui): preserve IME composition in the chat composer**
  作者：huiq777 | 创建：2026-09-10 | 链接：nearai/ironclaw PR #8092
  内容：在命令菜单处理与 Enter 发送逻辑之前，将原生 IME 组合键交还浏览器处理；针对 Safari 在 `isComposing` 为 false 时报告 keyCode 229 的情况，处理确认用的 Enter，并保留紧随其后的正常 Enter（不借助计时器）。**已有 fix PR**。该问题对中日韩等使用 IME 的用户影响直接。

- **低：配对用户的共享频道断连状态无法区分**
  PR **#8076 [OPEN] fix(assistant): distinguish disconnected shared channels**
  作者：be-student | 创建：2026-09-06 | 更新：2026-09-11 | 链接：nearai/ironclaw PR #8076
  内容：区分"已配对用户的共享频道断连"与"未配对账户"两种状态；为两种用户消息与 bot 命令渲染频道专属指引；在产品、adapter 等层面保持一致拒绝分类。**已有 fix PR**，且为今日唯一跨日持续更新的人工 PR（09-06 创建、09-11 更新），提示仍在打磨中。

## 6. 功能请求与路线图信号

今日数据中**没有用户直接提出的新功能请求 Issue**。可纳入下一版本判断的信号来自已有 PR：

- **命令可发现性（很可能纳入）**：PR #8072 已将 Telegram 命令菜单通过 `setMyCommands` 注册并在激活时同步（`/model`、`/status`、`/new`、`/stop`、`/interrupt`）。该模式若推广到其他渠道，将成为面向用户的标准化能力。
- **多渠道指令一致性（观察中）**：PR #8076 对"产品 / adapter"层拒绝分类的一致性要求，暗示团队正在收敛跨渠道行为语义，可能带来后续渠道侧的配套改动。
- **前端输入体验（观察中）**：PR #8092 的 IME 修复表明 WebUI 中文本地化输入是被认可的改进方向。

## 7. 用户反馈摘要

今日 Issues 评论数为 0，**无真实用户反馈可供提炼**。唯一内容来自自动生成的 benchmark 分类报告 #8093，其信息指向 `officeqa` 套件存在 42 个 non-pass 任务且失败模式已被归入分类体系（摘要截断，未能获取具体分类明细）。因此今日无法就用户痛点、使用场景或满意度给出结论。

## 8. 待处理积压

今日**未出现长期未响应的重要 Issue 或 PR**；在列条目创建时间均在 2026-09-04 至 2026-09-10 之间，最长滞留约 7 天。值得维护者留意的是：

- **PR #8076**（创建 2026-09-06，已跨 5 天更新，仍为 OPEN）——今日少数人工修复之一，长时间未合并可能影响配对/断连状态提示的准确性。
- **依赖批量升级的迭代节奏**：PR #8080（21 项）被关闭后由 PR #8097（24 项）接续，同时并行存在 #8094、#8095、#8096 等前端依赖升级，建议集中批处理以减少 review 噪音。
- **Issue #8093** 系自动化日报型 Issue，若无后续人工跟进，可能持续累积为低价值噪音，建议明确其归档或聚合策略。

---
**健康度小结**：今日无发布、无社区互动、无用户反馈，工程活动以依赖维护 + 3 个修复类 PR 为主。项目维护节奏稳定，但当日缺乏功能级里程碑与社区声量。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-11）

## 1. 今日速览

今日项目活跃度中等偏高，核心驱动力来自围绕 OpenClaw v2026.8.1 升级的兼容性与稳定性修复。过去 24 小时内 Issues 更新 3 条（全部为新开/活跃，0 关闭），PR 更新 5 条（1 待合并、4 已合并/关闭），无新版本发布。值得注意的是，4 条已关闭 PR 中有 4 条由同一位贡献者（btc69m979y-dotcom）在同日提交，集中修复 Gateway 启动与插件清理相关问题，显示出针对升级回归的快速响应。与此同时，两个长期存在的用户配置持久化问题（#1006、#2293）在今日被重新激活，值得关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日共关闭/合并 4 个 PR，全部聚焦于 OpenClaw v2026.8.1 升级后的稳定性与兼容性修复，方向集中且互补：

- **PR #2653 [CLOSED]** fix(openclaw): preserve host runtime during plugin cleanup — 修复 Windows 上 Electron 递归 `fs.rmSync` 可能穿越托管插件的 `node_modules/openclaw` junction 并删除宿主运行时的严重问题，避免 Gateway 重试因 dist worker 实现缺失而失败。
  [netease-youdao/LobsterAI PR #2653](https://github.com/netease-youdao/LobsterAI/pull/2653)

- **PR #2652 [CLOSED]** fix(plugins): patch nsp-clawguard native require compatibility — 解决启用 `nsp-clawguard 2.5.0` 在 OpenClaw v2026.8.1 升级后可能破坏网关启动的问题（其内置 `graceful-fs` 收到无法读取符号队列的 interop proxy）。
  [netease-youdao/LobsterAI PR #2652](https://github.com/netease-youdao/LobsterAI/pull/2652)

- **PR #2651 [CLOSED]** fix(openclaw): prevent stale desktop sessions from resuming — 修复 OpenClaw v2026.8.1 启动时孤儿扫描将历史桌面会话的陈旧 `running` 状态误判为中断并自动重跑的问题，改为要求存在中断标记才恢复。
  [netease-youdao/LobsterAI PR #2651](https://github.com/netease-youdao/LobsterAI/pull/2651)

- **PR #2650 [CLOSED]** fix(openclaw): recover memory sidecar archive collisions — 修复旧版内存索引与早前 `.migrated` 备份共存时，Gateway 在 OpenClaw v2026.8.1 上反复启动失败的问题。
  [netease-youdao/LobsterAI PR #2650](https://github.com/netease-youdao/LobsterAI/pull/2650)

**整体判断**：今日项目向前推进主要体现为“升级后遗症的集中清理”，而非新功能交付。四个修复覆盖插件清理、插件加载、会话恢复、内存迁移四条关键启动路径，对提升升级用户的开箱可用性有直接价值。

## 4. 社区热点

今日讨论最活跃的是 **Issue #2293**（重启后多个 agent 下 USER.md 被覆盖替换），创建于 2026-07-07，今日更新，累计 5 条评论，为今日评论数最多的条目。用户 yepcn 详细描述了多 agent 场景下 USER.md 被 main agent 内容覆盖的复现过程。
[netease-youdao/LobsterAI Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)

**背后的诉求**：多 agent 用户希望为不同 agent 建立独立的人格/需求设定，但当前配置同步机制会将其统一覆盖，实质上破坏了多 agent 的隔离性——这是产品的核心使用场景之一。

此外，**PR #2654**（今日新开，1 条评论）指出的 hooks 配置在 Gateway 重启后丢失，与 #2293、#1006 在“重启即丢失用户自定义”这一主题上形成呼应，说明“配置持久化”是当前社区最集中的痛点簇。
[netease-youdao/LobsterAI Issue #2654](https://github.com/netease-youdao/LobsterAI/issues/2654)

## 5. Bug 与稳定性

按严重程度排列：

**高 — 用户配置与工作空间文件被重置（数据/配置丢失类）**
- **Issue #1006 [OPEN]** 配置文件和工作空间文件在重启后被重置。`openclaw.json`（如 `channels.feishu.streaming`）与 `AGENTS.md` 每次重启被内部模板覆盖，用户只能用定时任务 workaround。创建于 2026-03-28，今日仍活跃。
  [netease-youdao/LobsterAI Issue #1006](https://github.com/netease-youdao/LobsterAI/issues/1006)
- **Issue #2293 [OPEN]** 多 agent USER.md 被 main agent 覆盖，跨 agent 隔离失效。创建于 2026-07-07，今日仍活跃。
  [netease-youdao/LobsterAI Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)
- **Issue #2654 [OPEN]** hooks 配置在 Gateway 重启后丢失，根因定位为 `getUserPlugins` 未返回 hooks 字段导致 `syncToDisk` 丢弃。**今日新开，同时附带了修复建议，尚待对应 fix PR 落地。**
  [netease-youdao/LobsterAI Issue #2654](https://github.com/netease-youdao/LobsterAI/issues/2654)

**中 — 均已有关闭的 fix PR（今日已处理）**
- Windows 插件清理误删宿主运行时（PR #2653 已闭合）
- `nsp-clawguard` 破坏网关启动（PR #2652 已闭合）
- 陈旧桌面会话被误恢复重跑（PR #2651 已闭合）
- 内存 sidecar 归档冲突导致启动失败（PR #2650 已闭合）

**观察**：上述三个 OPEN 问题共同指向“LobsterAI 启动时从内部模板重新生成用户文件”这一机制，且均无关联 fix PR，属于当前项目健康度的主要风险点。

## 6. 功能请求与路线图信号

- **配置/工作空间持久化**（来自 #1006、#2293、#2654）：用户明确建议“提供官方方式持久化用户配置，或允许用户自定义的文件在重启后保留”。结合 #2654 已给出具体技术方案（为 `user_plugins` 表增加 hooks TEXT 列、`getUserPlugins` 返回 hooks、`syncToDisk` 合并 hooks），若维护者采纳，此项最有可能在下一版本中率先落地。
- **多 agent 独立配置**（来自 #2293）：需求为不同 agent 拥有互不覆盖的 USER.md，属于多 agent 场景的隔离性增强。
- **会话列表净化**（来自 PR #1181）：为 OpenClaw main agent 会话（用于心跳/cron 路由）增加 `hidden` 字段，避免其出现在面向用户的 Cowork 会话列表中造成困惑。该 PR 自 2026-04-01 起长期 OPEN，若被合并将改善 Cowork 使用体验。
  [netease-youdao/LobsterAI PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)

## 7. 用户反馈摘要

- **痛点（最集中）**：重启后用户自定义内容被系统覆盖。用户 yepcn 测试发现，即使关闭软件单独修改 `workspace-*` 下的 USER.md，重启后所有 agent 的 USER.md 仍会被 main agent 的内容替换，导致无法为不同 agent 建立独立需求。用户 1323588848 指出保护机制“过于激进”，影响正常自定义需求，并强调目前只有定时任务这一 workaround。
- **使用场景**：多 agent 并行使用；对 `openclaw.json` 中 `channels.feishu.streaming` 等渠道配置做个性化调整；通过 hooks 扩展插件行为。
- **不满意点**：缺乏官方持久化手段，用户需以非预期方式（定时任务）绕过；跨 agent 配置隔离缺失。
- **满意/正向信号**：维护侧对 OpenClaw v2026.8.1 升级引发的启动类问题响应迅速，同日即关闭 4 个针对性修复 PR。#2654 中用户不仅报告问题还给出根因与修复步骤，反映社区参与度与技术水平较高。

## 8. 待处理积压

- **Issue #1006 [OPEN][stale]** 创建于 2026-03-28，至今约 5.5 个月未解决，仅 2 条评论，今日被重新激活。作为影响所有用户的自定义配置持久化问题，建议优先评估。
  [netease-youdao/LobsterAI Issue #1006](https://github.com/netease-youdao/LobsterAI/issues/1006)
- **PR #1181 [OPEN][stale]** 创建于 2026-04-01，标记 stale，至今约 5.5 个月未合并，0 条评论。修复的是用户可见的会话列表困惑问题，建议维护者给出明确处理结论（合并或关闭）。
  [netease-youdao/LobsterAI PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181)
- **Issue #2293 [OPEN][stale]** 创建于 2026-07-07，标记 stale 但今日仍有更新，5 条评论为今日最活跃条目，说明用户关切未消退。虽创建时间较短，但因涉及多 agent 核心场景，建议避免因 stale 标记而降低优先级。
  [netease-youdao/LobsterAI Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)

---

**项目健康度小结**：响应速度良好（升级回归当日修复闭环），但“配置持久化”类问题横跨 #1006、#2293、#2654 三个条目且跨越 5 个月以上未闭环，是当前最值得维护者集中投入的方向；同时 #1006 与 #1181 的 stale 状态提示需要一次积压清理。

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

# CoPaw 项目日报 — 2026-09-11

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 公开动态
> 统计窗口：过去 24 小时

---

## 1. 今日速览

CoPaw 今日处于**高活跃状态**：24 小时内产生 16 条 Issue 更新（新开/活跃 12、关闭 4）与 43 条 PR 更新（待合并 26、已合并/关闭 17），并发布稳定版 **v2.2.1**。讨论热度集中在多租户 Hub 路线图（#7318，26 条评论）与一批准入期稳定性问题（子智能体超时、会话索引不同步、模型配置丢失）。同日出现两处值得注意的信号：一是 `subagent_model` 配置项被报告完全失效（#7676），二是与本次发布直接相关的模型路由按 Agent 独立配置能力已落地。整体看，**迭代节奏快、社区参与度高，但桌面端与多智能体路径的稳定性仍是当前主要风险面**。

---

## 2. 版本发布

### v2.2.1（Stable）
- 发布页：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1
- 安装验证跟踪：[#7692](https://github.com/agentscope-ai/QwenPaw/issues/7692)（Release Duty，Stable，验证截止 2026-09-11 08:19 UTC）

**本次更新内容（据 Release Notes 摘要）：**

*Models, Agents & Memory*
- 支持为**每个 Agent 单独配置模型路由**，包括 provider 偏好与回退（fallback）行为（关联 [#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501)）。
- 新增 Auto Fin 主动记忆回顾（proactive memory review），并对 ReMe 进行升级。

> 说明：提供的 Release 摘要在 "upgrade ReMe for more" 处被截断，**其余新增项、破坏性变更与迁移注意事项无法从现有材料确认**，建议以官方 Release 页面完整内容为准。

**关联版本动态：**
- 上一预发布版 v2.2.1-beta.2 的安装验证 Issue [#7674](https://github.com/agentscope-ai/QwenPaw/issues/7674) 已于今日关闭，稳定版随之跟进。

---

## 3. 项目进展

今日已合并/关闭 17 条 PR，以下为可确认的重要推进项：

| PR | 状态 | 说明 |
|---|---|---|
| [#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677) `fix(api): return 422 for non-finite validation inputs` | 已关闭 | 注册应用级 `RequestValidationError` 处理，保留 FastAPI 结构化 422 响应的同时，将非有限（non-finite）错误输入替换为 JSON 安全字符串，避免序列化失败。 |
| [#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688) `fix(console): simplify grouped session pagination` | 已关闭 | 移除分组会话列表的 "Collapse List"，改为 "Load More" 分页，并在用户选中靠后会话后保留分页状态 —— 直接改善长会话列表的可用性。 |
| [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652) `fix(models): preserve provider-resolved context windows` | 已关闭 | 修复部分模型实例 `context_size` 无效或仍保留 AgentScope 默认值 `32768` 导致**过早触发上下文压缩**的问题。 |

**整体判断：** 今日合并项以**基础正确性与可用性修复**为主（API 校验、分页交互、上下文窗口），配合 v2.2.1 的模型路由能力，项目在「Agent 级模型治理」与「前端会话管理」两个方向上有实质前进。值得注意的是，多智能体相关的修复仍主要停留在 Issue 阶段（见第 5 节），尚未见合并 PR。

---

## 4. 社区热点

**① [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub 多租户版将于 2.2.0 推出：你希望我们接下来做什么？**
- 类型：`question` `Discussion` · 状态：OPEN · 创建 2026-08-26 · 更新 2026-09-11 · **26 条评论 · 👍 4**
- 今日**评论数与反应数双高**，是社区参与度最高的议题。诉求本质：CoPaw 起于个人 AI 助手，但社区反复要求更好的**团队运行方式**，Hub 是官方对此的第一个回应。讨论中引用了社区请求 [#2324](https://github.com/agentscope-ai/QwenPaw/issues/2324)（多用户访问与管理员管理）。
- **信号**：多租户 / 团队协作是当前最强的路线图拉力，官方已在同日提交配套 PR（见第 6 节 #7696）。

**② [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) — 优化 platform.agentscope.io/deploy 首页**
- 类型：`enhancement` · 状态：**CLOSED** · 更新 2026-09-11 · 10 条评论
- 用户指出部署入口位置过靠下、移动端操作不便。讨论了 10 轮后关闭，说明交互细节已被纳入处理。

**③ PR 侧关注点**
- [#7704](https://github.com/agentscope-ai/QwenPaw/pull/7704) `feat(console): move chat files drawer to the right` 与 [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700)（请求将文档预览移到右侧、会话列表保持左侧）形成呼应，反映出**控制台布局重构正在同时从 Issue 与 PR 两端推进**。
- [#7703](https://github.com/agentscope-ai/QwenPaw/pull/7703) `feat(context): Improving visual compaction` 与 #7679 的 `/compact` 需求方向一致，上下文压缩是当日反复出现的主题。

---

## 5. Bug 与稳定性

按严重程度排列。**注意：除特别标注外，以下 Issue 均未见关联 fix PR。**

### 🔴 严重

**[#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) — spawn subAgent 任务全部失败/超时**
- 版本：win2.2.0 · OPEN · 3 条评论
- 用户报告：**只要任务进入 spawn subAgent 处理即无一执行成功，全部 timeout**，且大幅延长 timeout 设置无效。属于功能性阻断级缺陷，直接影响多智能体核心能力。
- ⚠️ 是否已有 fix PR：**未标注**

**[#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) — `subagent_model` 配置完全无效**
- 影响版本：`2.2.1-beta.1`、`2.2.1-beta.2`（Desktop / Windows 10，两个版本均复现）· OPEN
- 组件：Core / Backend（agents, config, providers）— `spawn_subagent`
- 子智能体始终继承父级的 `active_model`，`subagent_model` 设置无任何效果。关联长期未决的 [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901)（按任务选择模型）。
- **该问题与 v2.2.1 主打「按 Agent 独立配置模型路由」形成直接矛盾，建议优先处理。**
- ⚠️ 是否已有 fix PR：**未标注**

### 🟠 高

**[#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) — 「停止」按钮假象：UI 已停止、后台仍在执行**
- 版本：2.2 web · OPEN · 4 条评论
- 用户点击停止后，界面状态正确切换（执行中方框消失、恢复为 ↑），但刷新页面发现**错误指令仍在后台执行**，且尝试提交修正指令时报 409。
- 影响：用户对任务控制权失去信任，且可能产生错误输出。
- ⚠️ 是否已有 fix PR：**未标注**

**[#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698) — 幽灵会话：索引与磁盘 session 文件不同步、历史丢失**
- 版本：Windows Tauri v2.2.1 · OPEN · 2 条评论
- 侧边栏存在 9/10 的会话条目，点击后加载出 9/9 的内容，仅保留一轮对话，其余历史全部消失；磁盘上**不存在**对应 session 文件。
- 影响：**数据完整性问题**，涉及用户会话资产丢失。
- ⚠️ 是否已有 fix PR：**未标注**（Issue 中 Related PR 字段为空）

**[#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) — Creator 多图生成：审核通过中断执行且不重调度，任务永久卡 RUNNING**
- 类型：`[Creator]` · OPEN · 1 条评论
- 多图项目严格串行生成图片，用户在生成期间点「审核通过」会中断正在执行的图片任务且**不重新调度**，任务永久停在 RUNNING。
- ⚠️ 是否已有 fix PR：**未标注**

**[#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) — 已设置的大模型配置丢失**
- 版本：win10 / 2.2.1 desktop · OPEN
- 正常使用过程中报错称「未设置大模型」，实际配置存在但界面显示为空，需重新选择；用户反馈**已多次复现**。
- ⚠️ 是否已有 fix PR：**未标注**

**[#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) — Agent 工作目录设置不生效**
- 版本：win10 / 2.2.1 desktop · OPEN
- 已设置默认 Agent 工作目录为 `D:\Program Files\QwenPawData\workspaces\default`，但新建任务仍使用旧路径；删除旧目录后退出重启**又变回旧路径**。
- ⚠️ 是否已有 fix PR：**未标注**

### 🟡 中

**[#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) — PDF document blocks 在多模态路径下仍未修复**
- OPEN · 2 条评论
- [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) **仅修复了 `supports_multimodal=False` 的模型**；对于 OpenAI 兼容 `/chat/completions` 端点上的多模态模型，tool 返回的 PDF blocks 仍被序列化进请求。
- 属于**修复不完整（partial fix）回归**，建议跟进 #7621 的后续补丁。

**[#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687) — 切换 Agent 后发消息被静默切到新对话**
- 版本：Desktop 2.2.1-beta.2（console bundle 构建于 2026-09-10 17:48:28）· **已 CLOSED**
- 用户明确标注为「console 2026-09-10 构建回归」，2 条评论后关闭，属**快速响应修复**的正面案例。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 关联 PR | 纳入下一版本的可能性 |
|---|---|---|---|
| **Hub 多租户 / 团队管理** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)（26 评论） | [#7696](https://github.com/agentscope-ai/QwenPaw/pull/7696) `feat(hub): support local administrator bootstrap` — 新增 `qwenpaw hub --init-admin USERNAME`，支持远程服务器无浏览器/无 SSH 端口转发初始化首个管理员 | **高**。Issue 与 PR 同日活跃，官方主导，路线图明确 |
| **上下文压缩命令 /compact** | [#7679](https://github.com/agentscope-ai/QwenPaw/issues/7679) | [#7703](https://github.com/agentscope-ai/QwenPaw/pull/7703) `feat(context): Improving visual compaction`（稳定图像批次、源文本召回、更可读的压缩预设） | **中高**。长任务 token 消耗是明确痛点，且已有方向一致的 PR |
| **控制台布局：会话列表居左 / 文件抽屉居右** | [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) | [#7704](https://github.com/agentscope-ai/QwenPaw/pull/7704) | **高**。代码改动已提交 |
| **多通道 Bot 统一管理** | — | [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) `feat(plugins): add bot-manager`（首贡献者）| **中**。解决微信/钉钉等各渠道各自为政的碎片化问题，多 Agent × 多通道场景缺统一视图 |
| **Telegram 中间消息清理** | [#7586](https://github.com/agentscope-ai/QwenPaw/issues/7586)（由 PR 引用） | [#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592)，默认关闭（`cleanup_intermediate: false`）以保持 2.x 兼容 | **中**。请求级可选、向后兼容设计良好 |
| **安卓移动端输入换行** | [#7707](https://github.com/agentscope-ai/QwenPaw/issues/7707) | 无 | **中低**。已 CLOSED（标记 `Close-and-review-later`），待后续复议 |
| **Android/移动端网页体验优化** | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | 无 | 已闭环 |

**其他可能的下一版本内容（来自 PR 池）：**
- [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) 新增 Atlas Cloud 内置 provider（OpenAI chat.completions 兼容，`https://api.atlascloud.ai/v1`，预置三个已验证文本模型）—— 该 PR 自 2026-07-27 创建，已悬置较久。
- [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) 浏览器后端自愈：修复 Playwright node driver 死亡后浏览器永久不可用（`Connection closed while reading from the driver`），已标记 `ready-for-human-review`。
- [#7684](https://github.com/agentscope-ai/QwenPaw/pull/7684) 修复自定义 OpenAI 兼容 provider 的模型发现：此前所有 HTTP 失败都被错误归类为 `provider_unavailable`，现读取真实状态码并识别 bot-challenge 页面。

---

## 7. 用户反馈摘要

**核心痛点（按出现频次）**

1. **多智能体路径不可用** — #7678 与 #7676 从两个角度指向同一问题：子智能体既跑不起来（timeout），配置项也形同虚设。用户 xiaohushi512 单日提交多条 Issue（#7678 / #7679 / #7705 / #7708），反映其在 Windows 桌面端的密集使用场景中连续受挫。
2. **控制权与状态可信度** — #7567（停止无效）与 #7693（审核中断后永久 RUNNING）都属于「界面说的和实际做的不一致」，是交互信任层面的系统性问题。
3. **桌面端配置持久化不可靠** — #7708（模型配置丢失）、#7705（工作目录回退）均为 Windows 桌面端，且用户明确表示「正常使用，没有特殊流程」，属高频静默失败。
4. **数据丢失焦虑** — #7698 会话索引与磁盘文件不同步、历史被吞，是最触及用户资产安全的反馈。

**使用场景观察**
- 长任务 / 长上下文场景消耗大量 token，#7679 提出希望 loop 模式支持 `/compact`（建议在上下文达到阈值时自动压缩后再继续）。
- 移动端（安卓浏览器）已被实际使用，用户 rerbin 评价「2.2.1 web 移动端使用的体验已经比较好了」，但仍卡在输入法只有换行键、点击换行即提交的细节上。
- 团队化部署需求真实存在，用户主动在 #7318 讨论中引用历史 Issue 表达诉求。

**满意信号**
- #7177（部署首页优化）经 10 轮讨论后关闭。
- #7687（切换 Agent 静默跳新对话的构建回归）报告当日即关闭，**响应速度值得肯定**。
- 移动端体验获用户正面评价。

**不满意信号**
- 同一位用户在一天内对桌面版提交 4 条独立问题 Issue，且均**无关联 fix PR**，存在流失风险。

---

## 8. 待处理积压

**长期未决、建议维护者优先响应的项：**

| 项目 | 创建时间 | 悬置时长 | 状态/说明 |
|---|---|---|---|
| [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) `feat(models): add Atlas Cloud provider` | 2026-07-27 | **约 6.5 周** | OPEN · 首贡献者 PR · 今日仍有更新但未合并。内容为纯粹的 provider 预设新增、无 provider 专属逻辑，合并成本低。**长期悬置首贡献者 PR 对社区贡献意愿有负面影响** |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) `fix(browser): self-heal dead Playwright driver connections` | 2026-08-07 | **约 5 周** | OPEN · 已 `ready-for-human-review` · 修复的是「driver 一旦死亡浏览器后端永久损坏」的确认性 bug。已就绪待人工评审，**瓶颈在人不在码** |
| [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901) 按任务选择模型 | —（由 #7676 引用为「仍 open」） | 长期 | 与今日的 #7676（`subagent_model` 失效）同源，是模型治理链路上的老账 |
| [#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592) `feat(telegram): optional cleanup of intermediate messages` | 2026-09-06 | 5 天 | OPEN · 首贡献者 · 已 Closes #7586，默认关闭保兼容，评审路径清晰 |
| [#2324](https://github.com/agentscope-ai/QwenPaw/issues/2324) 多用户访问与管理员管理 | —（由 #7318 引用） | 长期 | 已被 Hub 计划实际承接，建议在 #7318 中明确关联与关闭策略 |

**积压健康度提示：** 当前 26 条 PR 待合并，其中至少 3 条来自首贡献者（#6499、#7592、#7702），且均已通过基本自述与测试说明。#6499 悬置超 6 周是**最应被清理的一项**——它既是低成本合并项，也是社区信任的信号资产。同时，#7676 与 #4901 构成的模型选择问题链条，与刚发布的「按 Agent 配置模型路由」卖点直接冲突，建议在下一版发布前排期。

---

*本报告仅基于所提供的 GitHub 数据生成，Release 摘要存在截断，部分 PR 评论数在原始数据中未提供（显示为 undefined），相关信息未作推断。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-11

## 1. 今日速览

ZeroClaw 今日维持高活跃度：过去 24 小时共有 50 条 Issue 更新（新开/活跃 45，关闭 5）与 50 条 PR 更新（待合并 48，合并/关闭 2），无新版本发布。活动重心明显偏向**跨平台稳定性**（Windows 栈溢出、测试套件失败、`service logs` 跨平台缺失）与**流程治理**（RFC 投票机制、PR 审查证据、维护者决策队列）。待合并 PR 积压高达 48 条，其中多张 XL 规模 PR 长期停留并带 `needs-author-action` / `needs-maintainer-review` 标签，说明审查吞吐是当前主要瓶颈，而非开发产出。整体健康度：**产出旺盛、合并滞后**。

## 2. 版本发布

今日无新版本发布（0 个）。

## 3. 项目进展

今日合并/关闭的内容有限，仅 2 条 PR 关闭、5 条 Issue 关闭：

- **PR #8955 [CLOSED]** `fix(telegram): batch media group attachments` — 将 Telegram 相册（photo/document album）按 `(chat_id, media_group_id)` 在 listener 本地缓冲，解决跨 `getUpdates` 响应被拆分的多媒体组无法合并为一轮的问题。对应 Issue #5514 [CLOSED] 一并关闭。这是今日最实质的功能性推进。
  https://github.com/zeroclaw-labs/zeroclaw/pull/8955
- **Issue #10532 [CLOSED]** 降级配置修复可能调用与运行中 daemon 不同的二进制文件。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10532
- **Issue #9521 [CLOSED]** 将 MCP `tools/call` 的 `type: "image"` 内容块映射进 vision 流水线（此前状态为 `blocked`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9521

**推进幅度评估**：今日合并侧进展偏小；大量工作停留在已提交但未合并状态（48 条待合并），项目前进动能主要积压在 PR 队列而非主分支。

## 4. 社区热点

- **Issue #7462**（19 条评论，今日最热）— Windows 11 简体中文（代码页 936）下工作区测试套件 **74 个测试失败**，涉及 Unix-only 测试命令、路径语义与控制台编码。标签 `priority:p1`、`risk:high`、`status:in-progress`。这是今日讨论最集中的议题，并与 #7461、#10734、#10753 形成同一问题簇。
  https://github.com/zeroclaw-labs/zeroclaw/issues/7462
- **Issue #8692**（15 条评论）— RFC 与设计 Issue 的**维护者决策队列 tracker**，持续更新，反映治理流程本身成为社区关注焦点。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **Issue #10549**（9 条评论）— RFC：取消强制讨论窗口、让 REVISE 中止当前快照。诉求是**降低 RFC 流程摩擦**（现行普通 RFC 需等 48 小时、例外一致同意类需 72 小时）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10549
- **Issue #5514**（8 条评论，已关闭）— Telegram 多媒体组合并为单次多模态轮次，今日由 PR #8955 落地。
  https://github.com/zeroclaw-labs/zeroclaw/issues/5514
- **Issue #6157**（8 条评论）— Nextcloud Talk 使用了错误的 bot message API，状态 `blocked`，`risk:high`。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6157

**背后诉求**：社区精力正集中在两处——（a）平台覆盖不足带来的 Windows/macOS 真实可用性问题；（b）贡献流程（RFC 投票、PR 审查证据）的摩擦成本。二者都指向"从单人主导走向多维护者协作"的成长阵痛。

## 5. Bug 与稳定性

按严重程度排列（S0 最高）：

| 严重度 | Issue | 说明 | 是否有 fix PR |
|---|---|---|---|
| **S0 / security** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | `delegate` 绕过父级工具白名单——子智能体可调用父策略排除的工具（`parent_tools` 填充的是**未过滤**列表）。`priority:p1`、`risk:high` | 未见对应 PR |
| **S1 / workflow blocked** | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | 退出 web dashboard 聊天窗口后智能体停止工作（被当作"用户中断"），完全阻断长任务。`status:in-progress` | **有：#9002**（保持 viewer 断开后 agent 轮次继续运行） |
| **S2 / 高影响** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 74 个测试失败（Unix-only 命令、路径语义、代码页 936）。`priority:p1`、`status:in-progress` | 相关工作见 #7461（CI 平台矩阵） |
| **S2** | [#10753](https://github.com/zeroclaw-labs/zeroclaw/issues/10753) | `session/new` 在 Windows 上溢出 2 MB 栈；同一守卫测试 2026-09-07 通过、2026-09-10 中止——**疑似回归** | 相关：#10734 |
| **S2** | [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | `process_line` 在受限 Windows 线程栈上栈溢出（`0xc00000fd`），Advisory Windows nextest 任务中止。`priority:p1`、`status:in-progress` | 无 |
| **S2** | [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | `zeroclaw service logs` 在 macOS、Windows、OpenRC 上 daemon 正常时**无任何输出**（仅 systemd 下走 `journalctl` 可用）。`priority:p1`、`status:in-progress` | 无 |
| **S2** | [#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) | 带图片附件的用户消息使**整个历史缓存前缀失效**（compatible-provider + `cache_passthrough = true`），而非仅失效新消息 | 无 |
| **S2** | [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) | OpenAI STT provider 忽略基于环境变量的凭据，仅读 `[transcription.openai].api_key` | 无 |
| **S2** | [#10532](https://github.com/zeroclaw-labs/zeroclaw/issues/10532) | 降级配置修复可能调用与运行中 daemon 不同的二进制 | ✅ 今日已关闭 |
| **S3** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk 使用错误 bot message API，响应失败。`status:blocked` | 无 |
| **S3** | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram 多媒体组被拆成多次 LLM 请求 | ✅ PR #8955 已合并，今日关闭 |

**安全/依赖类**：
- [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) `cargo-audit` 与 `cargo-deny` 忽略列表漂移，需修复 wasmtime-wasi CVE（`priority:p1`、`risk:high`）。
- [#10759](https://github.com/zeroclaw-labs/zeroclaw/issues/10759) `sops/run-detail` 响应丢失 `SopRun.failure_reason`（源自 PR #9930）。
- [#10757](https://github.com/zeroclaw-labs/zeroclaw/issues/10757) 需区分 agent-browser 可用性探测超时与 CLI 缺失错误（#9946 遗留）。

**总体判断**：Windows 平台是今日稳定性风险最集中的区域（#7462 / #10734 / #10753 / #10731 四条并行），且已有"同一测试 3 天内由绿转红"的回归证据。安全侧 #8279（delegate 白名单绕过）为最高优先级且尚无 fix PR。

## 6. 功能请求与路线图信号

与已有 PR 对照，判断纳入下一版本的可能性：

**高可能（已有实质 PR 在审）**
- **Web 研究能力分层**：PR [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) 新增 `web_research` 工具，将原始 `web_search` 收窄给受限子智能体（最多 8 次工具调用 / 180 秒墙钟），执行 search→fetch→distill。`size:XL`、`risk:high`、`needs-author-action`。
- **大响应落盘而非截断**：PR [#9829](https://github.com/zeroclaw-labs/zeroclaw/pull/9829) 将 `web_fetch` 超过 50 KB 的文本写入 `<workspace>/tmp/web_fetch/<host>-<hash>.<ext>`。与 [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283)（gzip/brotli/deflate 解压）配套，构成 web_fetch 可靠性组合。
- **智能体参与的配置编写**：PR [#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) 让 agent 面向配置编写，并带**运维审批的策略预览**，将 JSON Patch 解析、类型强制、密钥处理下沉到 `zeroclaw-config`。
- **提供方身份与上下文窗口**：PR [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)（usage 事件携带实时 provider 身份）+ [#9854](https://github.com/zeroclaw-labs/zeroclaw/pull/9854)（从家族注册表推导 context-window 发现，替代硬编码八家名单）。
- **跨平台 CI 测试矩阵**：Issue [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) 请求将 Quality Gate 从仅 `ubuntu-latest` 扩展到 ubuntu/macos/windows。
- **CI 缓存与关键路径优化**：Issue [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) 称当前 PR CI 常需 15–20 分钟。

**需要治理决策**
- PR [#9341](https://github.com/zeroclaw-labs/zeroclaw/pull/9341) 明确 ZeroCode Code 面板的"会话历史 vs 持久记忆"边界。
- PR [#10218](https://github.com/zeroclaw-labs/zeroclaw/pull/10218) 修复重连派生的 daemon 子进程所有权丢失；PR [#10216](https://github.com/zeroclaw-labs/zeroclaw/pull/10216) 让 socket 所有权冲突错误可操作。

**低可能（仍处 RFC/blocked）**
- Issue [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)（取消 RFC 强制讨论窗口）与 Issue [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)（PR 审查证据、新鲜度警告、作者行动边界）均属流程类 RFC，需维护者裁决，短期内难进版本。

## 7. 用户反馈摘要

从 Issue 评论与正文提炼：

- **跨平台体验是最大不满来源**。Windows 用户（NiuBlibing、JordanTheJet、Project516）连续报告测试失败、栈溢出与诊断不可用；#10753 特别指出"守卫测试 2026-09-07 还是绿的，2026-09-10 就中止了"，表达对**回归速度**的担忧。macOS/OpenRC 用户（rifuki）则指出 `service logs` 在 daemon 健康时静默无输出，运维可观测性缺失。
- **长任务可靠性**。#8559 反映用户给出任务后一旦关闭聊天窗口，"循环就被当作被用户打断而停止"，直接阻断后台工作流——这是使用场景与产品语义之间的错配。
- **成本与性能敏感**。#10701 指出带图消息使整个缓存前缀失效，直接影响 API 缓存命中率与费用；#7108 指出 CI 15–20 分钟影响贡献者体验。
- **企业/自托管集成**。#6157（Nextcloud Talk）与 #7899（OpenAI STT 环境变量凭据）显示用户在实际部署中依赖标准化的凭据注入与第三方 API 正确对接。
- **满意点**：PR #9283 的维护者注记显示维护者主动接手社区分支、修复解码器输入预算与代理测试隔离；PR #8966 亦有维护者刷新验证记录。这种"维护者接管并共同署名"的做法对贡献者较为友好。

## 8. 待处理积压

**长期未合并的高风险 XL PR（均更新至今日但长期停留）**

| PR | 创建 | 停留 | 阻塞标签 | 主题 |
|---|---|---|---|---|
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 2026-07-11 | ~2 个月 | `needs-author-action`、`risk:high` | viewer 断开后保持 agent 轮次存活（修 #8559） |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | 2026-07-11 | ~2 个月 | `needs-maintainer-review`、`risk:high` | usage 事件携带 live provider 身份 |
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) | 2026-07-21 | ~7 周 | `status:blocked` | 交互式 Ctrl+C 状态感知 |
| [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283) | 2026-07-23 | ~7 周 | `needs-maintainer-review`、`risk:high` | web_fetch gzip/brotli/deflate 解压 |
| [#9341](https://github.com/zeroclaw-labs/zeroclaw/pull/9341) | 2026-07-24 | ~7 周 | `needs-author-action`、`risk:manual` | ZeroCode 会话历史 vs 持久记忆隔离 |
| [#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) | 2026-08-07 | ~5 周 | `needs-author-action`、`risk:high` | agent 面向配置编写 + 策略预览 |
| [#9829](https://github.com/zeroclaw-labs/zeroclaw/pull/9829) | 2026-08-07 | ~5 周 | `needs-author-action`、`risk:high` | web_fetch 大响应落盘 |
| [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) | 2026-08-07 | ~5 周 | `needs-author-action`、`risk:high` | web_research delegate |
| [#9854](https://github.com/zeroclaw-labs/zeroclaw/pull/9854) | 2026-08-08 | ~5 周 | `needs-author-action` | context-window 从家族注册表推导 |
| [#10216](https://github.com/zeroclaw-labs/zeroclaw/pull/10216) / [#10218](https://github.com/zeroclaw-labs/zeroclaw/pull/10218) | 2026-08-21 | ~3 周 | `needs-author-action` | daemon socket 冲突错误、重连子进程所有权 |

**长期未决的高优先级 Issue**

- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)（2026-06-10 创建，今天仍在 `in-progress`）与配套 [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)（2026-06-10）——Windows 支持问题悬挂 **3 个月**，是积压中时间最长的高优先级项。
- [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)（2026-06-30，`priority:p1`、`risk:high`）wasmtime-wasi CVE 与 audit/deny 配置漂移，已挂 **2.5 个月**，属安全类。
- [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)（2026-06-24，**S0 安全**）delegate 白名单绕过，已挂 **2.5 个月且无 fix PR**——建议维护者优先排期。
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（2026-07-04）维护者决策队列 tracker 持续活跃，说明治理类待办本身也在累积。

**给维护者的建议**：当前 48:2 的待合并/已合并比例显示审查吞吐是首要约束。建议优先清理带 `needs-maintainer-review` 的安全相关 PR（#9283、#8966），并对 #8279 这类 S0 无 PR 项指定负责人。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*