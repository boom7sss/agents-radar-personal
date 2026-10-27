# OpenClaw 生态日报 2026-09-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-04 11:44 UTC

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

# OpenClaw 项目动态日报 — 2026-09-04

## 今日速览

项目今日热度极高：24小时内更新 Issue 与 PR 各 500 条，均为 GitHub 单仓库单日数据上限，新开/活跃 Issue 374 条，待合并 PR 360 条。今日发布 v2026.9.1 版本，核心亮点是 Mermaid 图表现已在 Control UI 及各原生客户端中渲染。值得警惕的是，Issue 池中 P1 级问题大量积压，多条被标记为 🦞 diamond lobster（高严重度），涉及消息丢失、会话状态损坏、进程僵尸泄漏等稳定性问题。活跃维护者 steipete 今日提交了多条 PR，覆盖 watch 端实时语音、聊天小部件认证等新方向。

---

## 版本发布

### v2026.9.1（2026-09-04 发布）

**核心亮点：**
- **对话内图表渲染**：Mermaid 代码块现已在 Control UI 与 macOS/iOS/Android 原生应用中渲染为图表，支持放大预览；移动端渲染失败时提供重试机制（关联 PR #134913, #135746, #135470, #135342）。
- **安装到对话的简化流程**：从安装到开始聊天距离进一步缩短（Release 说明仅截断于此，完整详情感待后续查看）。

**破坏性变更 / 迁移注意事项：** 数据中未提供明确的破坏性变更清单，建议用户关注 release note 中 "From install to chat" 段落的后续内容。

---

## 项目进展

今日有 140 条 PR 合并/关闭，以下为数据中可见的已关闭 PR：

- **#117244 fix(gateway): prevent mixed content when resuming changed media** — 修复会话恢复时媒体内容出现 mixed content（HTTP/HTTPS 混合）问题，保护加载安全性。*（注意：此 PR 在数据中被标记为 CLOSED，但具体合并时间未知）*

**代表性待合并 PR（可视为接近合并的进展信号）：**

- **#138189（XS, 🐚 platinum hermit, 👀 ready for maintainer look）fix(ci): exit outside cyclic exception handlers**（作者 steipete）— 修复 macOS Python 3.9.6 循环异常上下文导致的 CI 挂起问题，已被标记为等待维护者审查。
- **#138208（XS, 🐚 platinum hermit, 👀 ready for maintainer look）chore(test): pin Vitest 5 config semantics**（作者 vincentkoc）— 锁定 Vitest 5 配置语义，为 web-ui 测试基建做稳定化准备。
- **#138210（XS, 🐚 platinum hermit, 👀 ready for maintainer look）docs(mantis): correct proof publishing and QA dispatch guidance**（roboclaw-bot）— 修正 Mantis 指南中失效的证据清单提交说明。

**重大新功能 PR 等待审查：**

- **#135808 feat(watch): add native standalone realtime voice**（作者 steipete）— 为 Apple Watch 增加原生独立实时语音（"Talk on Watch"），基于 WebRTC/Opus 直连语音提供商，Gateway 负责控制面与工具调用。XL 级规模，标记为 👀 ready for maintainer look，安全边界与可用性风险并存。
- **#138074 fix: load chat widgets behind authenticated gateways**（作者 steipete）— 修复聊天小部件在认证代理后被浏览器拦截的问题，覆盖 Android/web-ui/desktop 等多端。

---

## 社区热点

以下 Issue 讨论最多、反应最热烈：

### 🥇 #94518 DeepSeek 缓存未命中（CLOSED, 评论 11, 👍 10）
**链接：** [Issue #94518](https://github.com/openclaw/openclaw/issues/94518)

升级到 6.x 后 DeepSeek 缓存命中率从高位跌至不足 10%，边界感知缓存破坏了前缀匹配。获得 10 个 👍，社区情绪强烈。历时近三个月后于今日关闭，但摘要未说明关闭原因（修复完成或转为其他处理）。

### 🥈 #83959 Codex app-server 启动重试耗尽（OPEN, 评论 11, 👍 1）
**链接：** [Issue #83959](https://github.com/openclaw/openclaw/issues/83959)

在 v2026.5.18 上，Codex 调度的后台任务由于 app-server 启动重试在替代服务器就绪前耗尽而失败，报 "codex app-server client is closed"。已存活近 4 个月仍然 OPEN，标签显示需要维护者审查且缺少实时复现。

### 🥉 #97616 子进程僵尸泄漏（OPEN, 评论 10, 👍 1）
**链接：** [Issue #97616](https://github.com/openclaw/openclaw/issues/97616)

hook/tool 执行的子进程未被回收，随时间累积为僵尸进程导致运行时性能退化。被标记为 P1 + crash-loop + message-loss + 🦐 gold shrimp。用户视角的核心诉求是长跑场景的稳定性保障。

### 其他高反馈条目
- **#106961 Discord/Codex 中 message tool 是终端的，进度更新会静默终结回合**（CLOSED，👍 3）— [链接](https://github.com/openclaw/openclaw/issues/106961)
- **#135347 强制内存重建导致共享数据库膨胀至 35GB**（CLOSED，diamond lobster）— [链接](https://github.com/openclaw/openclaw/issues/135347)

---

## Bug 与稳定性

按严重程度排列（全部为 P1 级，多数标注 platinum hermit 或 diamond lobster 高严重度）。**标注 ⚠️ 表示今日新增（创建于 2026-09-04）。**

### 数据丢失 / 消息丢失类

| Issue | 标题 | 状态 | 关联 PR |
|---|---|---|---|
| [#135347](https://github.com/openclaw/openclaw/issues/135347) | 强制内存重建导致共享代理数据库膨胀至 35GB，删除该数据库以恢复又会销毁会话 | CLOSED | 无 |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | memory_search 工具始终超时（15s），而 CLI `openclaw memory search` 正常 | OPEN | 无 |
| ⚠️[#137750](https://github.com/openclaw/openclaw/issues/137750) | 仅内存搜索即使拥有干净的 623 块索引仍会使 Gateway 停滞 | OPEN（今日新开） | 无 |
| [#136262](https://github.com/openclaw/openclaw/issues/136262) | openai-completions 流式响应偶尔将完整累积文本再次发送，导致消息内容翻倍（n→2n→n 振荡） | OPEN | 有 PR 链接 |
| [#137613](https://github.com/openclaw/openclaw/issues/137613) | CLI 后端上压缩前内存刷新被禁用（ownsNativeCompaction 门控），修复方案又触发 compactionCount 陷阱 | OPEN | 无 |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 通过 tools.deny 拒绝 write 工具会静默禁用内存持久化，而代理仍报告保存成功 | OPEN | 无 |

### 崩溃 / 故障循环类

| Issue | 标题 | 状态 | 关联 PR |
|---|---|---|---|
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server 启动重试在新的替代服务器就绪前耗尽 | OPEN | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏导致僵尸进程累积、运行时退化 | OPEN | 无 |
| [#111372](https://github.com/openclaw/openclaw/issues/111372) | macOS 上 Gateway 无限 SIGTERM 重启循环（2026.7.1-2 回归） | OPEN | 无 |
| [#107694](https://github.com/openclaw/openclaw/issues/107694) | Gateway 因严格 startupMigrationWarnings 守卫拒绝良性迁移跳过而无法启动 | CLOSED（曾为 P0） | 无 |

### 错误输出 / 回归类

- **⚠️[#136183](https://github.com/openclaw/openclaw/issues/136183)** — ssh 在命令行执行器中挂起，SIGTERM 在等待 server banner 时无响应（2026.8.1 回归，2026.8.2 仍存在）
- **[#135111](https://github.com/openclaw/openclaw/issues/135111)** — claude-sonnet-5 间歇性报 "Provider completed tool call with malformed JSON arguments"（2026.8.1 回归）
- **[#132720](https://github.com/openclaw/openclaw/issues/132720)** — claude-cli 410 session_expired（2026.9.1-beta.1，使用有效 paste-token 仍触发）

### 今日有无 fix PR？

新开 Issues 中 #137750 尚无对应 fix PR；#136183 标记无新修复 PR。#138035（音频分类保留）与 #138074（聊天小部件认证）为今日新提交的修复型 PR，可间接改善聊天上传与认证场景。总体而言，今日 140 条合并/关闭 PR 中有相当部分应属于修复类，但数据中未明确列出合并的 PR 明细。

---

## 功能请求与路线图信号

| 功能请求 | 状态 | 影响力信号 | 对应 PR |
|---|---|---|---|
| **Apple Watch 原生实时语音**（#135808） | PR 已提交 XL 级 | "Talk on Watch" 直接 Watch↔语音提供商通信 | 作者 steipete 维护者主导 |
| **按模型使用量日志记录以做成本追踪**（#13219） | OPEN P2 | 8 评论，需求明确：会话 JSONL 包含 usage 但缺乏聚合视图 | 无 |
| **交互式聊天小部件认证接入**（#138074） | PR 已提交 XL 级 | 修复认证代理下小部件被浏览器拦截 | 作者 steipete |
| **fallback 模型链**（#56781） | OPEN P2 | 压缩和 LCM summaryModel 只支持单个模型，被限流时静默失败 | 无 |
| **Operator 发起的代理间委派**（#116473） | CLOSED | 未纳入，最终被标记为 stale 后关闭 | 无 |

**路线图预判：** 维护者 steipete 同时推进多条新功能线（watch 语音、聊天小部件），且这些 PR 均标注为 👀 ready for maintainer look，推测 2026.9.x 后续版本可能快速吸收。成本追踪（#13219）、模型 fallback 链（#56781）是企业用户反复提出的运营能力类需求，已有 P2 状态并等待产品决策 — 若社区呼声不减，有可能进入 2026.10 规划。

---

## 用户反馈摘要

从 Issues/PR 评论中提炼真实痛点：

**生产可靠性是最大痛点。** #128067（beta.7 现场报告）整理出 6 类可靠性缺陷（持久化、消息投递、重启恢复），反映生产级多代理部署用户对长时间无人值守运行稳定性的高要求 — 该报告来自 3 周 6 代理的生产部署。

**Gateway 恢复失败带来的疼痛。** #83959、#111372、#137750 等多条 Issue 均指向同一模式：Gateway 启动/恢复过程中的竞态或错误守卫导致服务不可用或陷入重启循环。macOS 用户在升级后尤其受影响（#111372）。

**静默失败/错误被吞是最不满意的场景。** #126906（拒绝 write 后代理仍报告成功）、#136262（内容翻倍振荡）都让用户对输出的可信度产生疑虑。此外 #94926 提及的内存重建引导动作有破坏性，但用户可能在不知不觉中执行。

**对企业/后台场景的运营能力呼声明显。** #123799 运营团队直接询问生产环境的安全升级/回滚指引，说明版本间兼容性跨越（2026.5.12 → 当前）需要更多官方指引。成本追踪（#13219）和按用途分离 GitHub 认证（#97026）也是运营高频诉求。

---

## 待处理积压

### 重点关注（高严重度、长期未解决）

| 关联 | 标题 | 创建 | 持续天数 | 备注 |
|---|---|---|---|---|
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server 启动重试耗尽 | 2026-05-19 | **108天** | P1 至今无 fix PR，需要 live repro |
| [#44910](https://github.com/openclaw/openclaw/issues/44910) | OpenAI Codex 错误泄漏到用户聊天 | 2026-03-13 | **175天** | CLOSED，但曾在 P2 冻结近半年 |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | memory_search 工具恒定 15s 超时 | 2026-08-23 | 12天 | diamond lobster |
| [#135347](https://github.com/openclaw/openclaw/issues/135347) | 内存重建导致 35GB 膨胀与恢复陷阱 | 2026-09-01 | 3天 | 已关闭 — 但删除恢复库时可能销毁会话的风险值得发布说明明确 |

### 长期未合并的 PR

| PR | 创建 | 持续天数 | 备注 |
|---|---|---|---|
| [#64064](https://github.com/openclaw/openclaw/pull/64064) feat(anthropic): advisor tool support | 2026-04-10 | **147天** | XL 级但仍标注 needs proof + dirty-candidate，AI-assisted 提交 |
| [#82105](https://github.com/openclaw/openclaw/pull/82105) chore(docker): bundle channel voice plugin deps | 2026-05-15 | **112天** | Docker 语音插件依赖，等待 proof |
| [#106414](https://github.com/openclaw/openclaw/pull/106414) fix: models fallbacks --agent 静默编辑全局默认值 | 2026-07-13 | **53天** | CLI 命令行为修复 |

### 其他值得注意

- **⚠️[#137750](https://github.com/openclaw/openclaw/issues/137750)**（今日新开）已获 diamond lobster 标记，且系同一 maintainer（steipete）报告的与 #128140 同域的内存搜索问题，疑似同一根因，建议优先合并处理。

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向分析报告

**分析日期：** 2026-09-04  
**数据窗口：** 过去 24 小时  
**数据来源：** 各项目 GitHub 仓库 Issues/PRs/Releases 动态

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态当前处于**快速迭代期与稳定性巩固期并存的阶段**。头部项目（OpenClaw）以单日 500 条 Issue + 500 条 PR 的上限级活跃度遥遥领先，在规模上已形成事实标准，但同时积压 374 条活跃 Issue 与 360 条待合并 PR，其中多条 P1 级数据丢失、消息丢失问题引发社区强烈关注（#94518 DeepSeek 缓存未命中获 10 👍）。腰部项目（Hermes Agent、CoPaw、NanoClaw、ZeroClaw、PicoClaw 等）呈现差异化竞争态势——有的聚焦企业级可靠性（Hermes Agent 的 state.db 损坏 24 小时内获修复 PR）、有的聚焦多租户与团队形态（CoPaw QwenPaw Hub 获 21 条评论）、有的聚焦 WebUI 可观测性（NanoBot 对标 DeepSeek Harness 的功能请求当日即获 PR 响应）。生态共同痛点集中在：**进程/会话生命周期管理、Gateway 恢复可靠性、静默失败与错误被吞、上下文截断与成本透明化**。值得警惕的是各项目普遍存在"新开快、合并慢"的现象，大量安全与数据完整性相关的修复 PR 待合并时间超过 5 天（NanoClaw #3680 挂载安全绕过已悬置 5 天、CoPaw #7497 安全 PR 悬置 2 天），需引起项目维护者重视。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃） | PR 更新（待合并/合并关闭） | 新 Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（374 活跃） | 500（360 待合并） | ✅ v2026.9.1 | ⚠️ 极高活跃但 P1 大量积压，diamond lobster 级问题频发，稳定性承压 |
| **Hermes Agent** | 50（48 活跃/2 关闭） | 50（44 待合并/6 合并关闭） | ❌ | ⚠️ 高活跃，bug 响应及时（state.db 24h 闭环），但 P1/P2 积压较多，大规模重构 PR 待决策 |
| **CoPaw** | 32（21 活跃/11 关闭） | 39（24 待合并/15 合并关闭） | ❌ | ✅ 高活跃，2.2.x 稳定性修复密集，安全响应快（#7504 MCP 白名单修复已合并），但飞书卡死等核心链路 bug 无 fix |
| **NanoClaw** | 4 | 24（20 待合并/4 合并关闭） | ❌ | ✅ 活跃，集中于消息管道优化，**安全修复 #3680 悬置 5 天需关注** |
| **ZeroClaw** | 17（4 新开） | 50（47 待合并/3 合并关闭） | ❌ | ⚠️ 新开快合并慢（3/50），2 个 S1 级新 Bug，安全议题（#9328 凭据链验证）超 6 周未闭环 |
| **IronClaw** | 6（4 新开 UX 系列） | 13 待合并 + 8 合并关闭 | ❌ | ✅ 稳步迭代，WebUI UX 改进闭环高效，CI 回归当日修复 |
| **NanoBot** | 4（2 新开/2 关闭） | 29（19 待合并/10 合并关闭） | ❌ | ✅ 健康，0.3.0 回归修复密集且及时（time context 当日合入），社区响应快（feature request 当日获 PR） |
| **LobsterAI** | 1（stale 标记） | 39（含 #2618 Release 分支批量关闭 34 条） | ❌（Release PR #2618 已提交） | ✅ 集中发布态，PR 合并效率高（34/39），但 Issue 响应不足（#1071 SQLite 缺陷 stale 5 个月） |
| **PicoClaw** | 6（1 新开） | 9（7 待合并/2 关闭） | ❌ | ⚠️ 中等活跃，QQ 通道 401 无修复 PR 已 5 天，Web UI 卡顿与 Slack 上传修复 PR 待合并超 1 周 |
| **Moltis** | 0 | 1（1 待合并） | ❌ | ✅ 低活跃但有序，AGY 流式集成 PR #1258 值得关注 |
| **NullClaw** | — | — | — | 💤 24 小时无活动 |
| **TinyClaw** | — | — | — | 💤 24 小时无活动 |
| **ZeptoClaw** | — | — | — | 💤 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势

- **生态规模碾压级**：单日 Issue/PR 各 500 条（GitHub 单仓库上限），远超 Hermes Agent（50/50）、CoPaw（32/39）、ZeroClaw（17/50）等同赛道项目，社区贡献者数量与反馈密度不在同一量级。
- **版本迭代速度**：v2026.9.1 已发布，Mermaid 图表渲染落地 Control UI 与全端原生客户端，功能迭代覆盖 watch 端实时语音、聊天小部件认证等新方向，由核心维护者 steipete 直接推进。
- **多端覆盖广度**：macOS/iOS/Android/Web/CLI/watch 全平台覆盖，在同类项目中端侧布局最完整。

### 明显短板

- **稳定性与规模成正比恶化**：374 条活跃 Issue + 多条 diamond lobster 级问题（消息丢失 #136262、会话状态损坏、进程僵尸泄漏 #97616）并存，P1 积压严重超出修复吞吐。
- **长尾问题响应慢**：Codex app-server 启动重试耗尽（#83959）已存活 **108 天** 无 fix PR；DeepSeek 缓存未命中（#94518）历时近三个月才关闭。
- **企业级运营能力缺口**：成本追踪（#13219）、模型 fallback 链（#56781）等企业高频诉求长期停留在 P2 状态。

### 对比结论

OpenClaw 已形成"规模即护城河"的正循环——海量 PR 意味着功能演进速度快，但也导致代码复杂度与稳定性风险同步攀升。同类项目（NanoClaw 的 MCP 去重 #3462、ZeptoClaw 的 32K token 截断修复 #9713、Hermes Agent 的 state.db 自愈序列化 #102859）中大量"小步快跑"式的稳定修复或可被 OpenClaw 借鉴，但短期内 OpenClaw 的社区生态位无实质挑战者。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 代表诉求 | 说明 |
|---------|---------|----------|------|
| **Gateway/进程生命周期管理** | OpenClaw（#83959 108天 P1、#111372 无限重启）、Hermes Agent（#58619 进程无界增长 P1 开放 2 个月、#102827 state.db 损坏）、CoPaw（#7534 飞书会话卡死）、ZeroClaw（#10609 zerocode 目录被强制切换） | 启动/恢复竞态、进程泄漏、状态损坏 | **生态最集中的 P1/P2 根因域**。多个项目的 P1/P2 Issue 指向同一类 root cause：Gateway 启动/恢复过程中的竞态条件与错误守卫导致服务不可用或陷入重启循环。 |
| **静默失败/错误被吞** | OpenClaw（#126906 拒绝 write 仍报告成功、#136262 内容翻倍振荡）、Hermes Agent（#82599 401 报告 completed）、CoPaw（#7559 任务中发消息 409）、ZeroClaw（#9811 /health 误报健康） | 用户对输出可信度的疑虑 | Hermes Agent #82599 中 delegate_task 将错误字符串误判为成功输出、OpenClaw #126906 中代理在持久化被禁用后仍报告保存成功，这类"假成功"比显式报错更具破坏性。 |
| **上下文/成本透明化** | OpenClaw（#13219 按模型 usage 记录做成本追踪 P2）、NanoBot（#5631 WebUI 显示 tokens/s 与上下文用量，当日获 PR #5660 响应）、IronClaw（#8057 prompt 预算只算 transcript 不算 identity/skills/tool schemas，已有修复 PR #8053）、ZeroClaw（#10068 32K 截断忽略 max_context_tokens=131072、PR #9713 token 计量）、Hermes Agent（#102138 压缩永不提交） | 模型速度、上下文用量、成本统计的可视化与聚合 | 项目从不同切入点响应同一需求：NanoBot 提供 UI 级 token/s 实时展示（对标 DeepSeek Harness），OpenClaw 提供会话级 usage 聚合，ZeroClaw/IronClaw 则修复"预算算不准/截断不透明"的核算缺陷。 |
| **渠道适配兼容性** | OpenClaw（#136262 openai-completions 流式内容翻倍）、PicoClaw（#3349/#3365 QQ 频道 401、#3338 Slack 上传失败）、CoPaw（#7505 局域网 LM Studio client disconnect）、Hermes Agent（#83390 DeepSeek 400 20 条评论）、ZeroClaw（#10603 x-opencode-session header 缺失）、NanoClaw（#3712 WhatsApp 媒体下载）、LobsterAI（#2615 Windows Unicode 路径） | 第三方服务 API 变更/兼容、多通道（IM/LLM provider）联通可靠性 | 生态成熟度提升后，渠道联通问题从"能否接入"转向"接入后持续可用"。PicoClaw QQ 频道完全不可用已 5 天无修复 PR、Hermes Agent DeepSeek title_generation 故障获 20 条评论且影响面持续扩大（今日新增重复报告），均指向 provider 适配层需要更系统的兼容性测试。 |
| **安全/权限边界** | ZeroClaw（#9328 凭据链验证缺失 risk:high 超 6 周、#9899 RUSTSEC bitmaps 安全 CI 持续失败）、CoPaw（#7511 沙箱被突破、#7497 OFF 模式敏感路径拒绝 PR 悬置 2 天）、NanoClaw（#3680 mount 安全绕过 PR 悬置 5 天）、Hermes Agent（#102443 Telegram 批准存描述字符串不生效）、OpenClaw（#138074 聊天小部件认证） | 凭据链验证、挂载白名单绕过、审批权限存储缺陷、认证代理拦截 | **安全修复 PR 普遍存在延迟合并问题**：#3680（NanoClaw）作为安全修复已等 5 天、#7497（CoPaw）等 2 天、#9328（ZeroClaw）超 6 周未闭环——安全事件响应速度与社区预期存在明显差距。 |
| **长任务自主执行可靠性** | CoPaw（#6921 多步骤任务无提示中断，12 条评论）、NanoBot（#5656 /compact 命令使压缩用户可控）、OpenClaw（#97616 僵尸进程致运行时退化） | 长时间无人值守运行的稳定性 | 用户对 agent 连续推进而非每步等待确认有明确期待；同时长跑场景的进程泄漏、压缩中断等问题持续破坏体验。 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|-----------------|
| **OpenClaw** | 全功能个人 AI 助手：多端（桌面/移动/watch）+ 渠道（Discord/Slack/Telegram）+ 记忆/技能/网关 | 从开发者到普通消费者，追求全平台覆盖 | 闭源核心 + 开放 SDK/插件生态；Gateway 作为控制面与工具调用的中枢 |
| **Hermes Agent** | 企业级自主代理：cron/kanban/SOP 自动化、多 agent 协作、审批流 | 中大型企业自动化团队 | Agent 循环深度定制（delegate_task、approval、skills 会话化）；状态存储 SQLite state.db；强调子代理委派与审批链路 |
| **NanoClaw** | 消息路由管道 + 渠道桥接（chat-adapter SDK） | 需要使用现成渠道 SDK 的开发者 | 核心价值在 chat-sdk-bridge 层与入站消息延迟解析架构；通过 @chat-adapter/* 包做多 IM 适配 |
| **CoPaw（QwenPaw）** | 从个人向团队演进：QwenPaw Hub 多租户（2.2.0）+ 飞书等企业 IM 深度集成 + Loop 模式 | 企业与团队协作场景（尤其飞书用户） | Python 后端 + 多渠道（web/desktop/telegram/飞书）；强调 workspace 级 Skill 预加载与敏感路径治理 |
| **ZeroClaw** | 安全第一的 agent 基础设施：verifiable-intent 凭据链 + A2A 协议 + SOP 无头执行 | 对安全合规高要求的企业用户 | Rust 实现基调；强调可验证意图（verifiable-intent）模块、ACP 会话记忆连续性、Multi-agent（A2A）协议推进 |
| **NanoBot** | 极速响应的轻量聊天机器人方案，WebUI 可观测性（token/s、上下文 popover） | 追求轻量部署与即时反馈的开发者 | 轻量级核心，社区响应速度最优（feature request 当日获 PR #5660）；当前处于 0.3.0 发布后修复合入期，重点在运行时上下文 provider 机制 |
| **IronClaw** | Subagent 编排与 WebUI 交互打磨 | 开发者/进阶用户 | Reborn 架构演进期：per-user 沙箱执行器探索（#7903）、slash 命令菜单 UX 优化密集；LLM/子代理链路（subagent 审批门控） |
| **PicoClaw** | 嵌入式/边缘设备优先的轻量 agent，RKLLM（Rockchip）端侧推理 | 嵌入式/边缘计算开发者 | ARM 板端直接运行（RK3566 等），使用 Rust 实现、Go botgo 等轻量依赖；上游同步依赖重（1095 commits 同步 PR #2810） |
| **LobsterAI** | 浏览器 MCP 自动化 + 订阅/登录体验完整闭环 | 面向浏览器的 MCP 工具用户 | Electron 桌面端为主 + 浏览器 MCP 启动器；当前迭代重心在订阅恢复与登录态管理 |
| **Moltis** | 外部 agent 编排（AGY/Gemini CLI 等第三方 CLI 接入） | 多 agent 集成场景的用户 | 核心能力在"外接 Agent 适配层"：复用官方 CLI OAuth 会话 + stream-json 输出翻译 |

---

## 6. 社区热度与成熟度

### 快速迭代阶段（热度高、功能演进驱动）
- **OpenClaw** — 版本迭代节奏极快（v2026.9.1），功能与 bug 几乎同步高速流动，但质量呈现出"发布—回归—修复"周期循环，长期可靠性待观察。
- **CoPaw** — 2.2.0 Hub 多租户版本临近发布，社区讨论热情高涨（#7318 21 条评论），同时安全沙箱突破（#7511）与 2.2.x 稳定性修复并行推进，正处于功能爆发与稳定性再平衡的临界点。
- **NanoClaw** — 消息路由去重、延迟解析、WhatsApp 增强等多条功能 PR 在管线中，合并吞吐是主要瓶颈（20 条开放 PR 中大量核心修复尚未合入）。
- **Hermes Agent** — 高频小型 bug fix PR 持续收敛已知问题，同时 #102117 全代码库 −35.6% LOC 重构 PR 待决策——若被接受将显著重塑项目架构与维护方向。

### 质量巩固阶段（活跃度下降、稳定优先）
- **NanoBot** — 0.3.0 发布后进入密集修复合入期：time context 回归（#5654）、WebSocket 慢客户端阻塞（#5655）均当日合入，社区对 feature request 响应速度惊人（#5660 当日提交）。
- **IronClaw** — 稳步迭代状态，WebUI UX 系列 issue→PR 闭环（4 issues → 5 PRs）效率高，CI 回归均当日修复合并。
- **ZeroClaw** — 处于积累与审查阶段：零新版本 + 低合并数（3/50 合并关闭），大量 XL 级重构与功能 PR 在管线上堆积（#9324 A2A outbound config 自 7/24 开放至今），集中合并可能带来版本跳跃。
- **LobsterAI** — Release/2026.9.4 分支集中合并 34 条 PR，收尾特征明确，迭代趋于平稳；Issue 响应不足是主要短板（#1071 stale 5 个月）。

### 低活跃/维护维持
- **PicoClaw** — 处于"修复积压 + 依赖例行升级"阶段，QQ 通道完全不可用 5 天无修复 PR，Web UI 卡顿修复 PR 已等 8 天以上，维护者响应需提速。
- **Moltis** — 今日仅 1 条 PR，处于对新功能提案（AGY 流式集成）的评估期。
- **NullClaw、TinyClaw、ZeptoClaw** — 今日无活动，关注度低。

---

## 7. 值得关注的趋势信号

### 信号一："生产级可靠性"成为下一阶段的分水岭
多项目用户反馈中，**长时间无人值守运行的稳定性**（OpenClaw #97616 僵尸进程、Hermes Agent #58619 进程无界增长、CoPaw #6921 长任务中断）已超过基础功能丰富度，成为用户最核心的痛点。对于 AI 智能体开发者这意味着：在模型能力趋同的背景下，**正确的状态管理与进程生命周期治理将取代提示词工程成为最大差异化竞争点**。建议新项目从第一天就建立：健壮的会话状态机、有界队列、优雅退出、进程回收防泄漏机制。

### 信号二："静默假成功"比显式报错更具信任破坏力
从 OpenClaw #126906（拒绝 write 仍报告保存成功）、Hermes Agent #82599（401 错误报告为 completed）到 ZeroClaw #9811（从未连接的 channel 被 /health 报为健康）——多条高赞 Issue 指向同一模式：**系统犯了错但表现正常，用户无法区分真假成功**。设计原则应变为：拿不准就报错，宁可中断也不要默默降级。

### 信号三：上下文与成本透明化将成标配
NanoBot 的 WebUI token/s 展示（对标 DeepSeek Harness）获得当日 PR 响应、OpenClaw 的 usage 聚合请求获社区持续关注、IronClaw 的 prompt 预算排查与 ZeroClaw 的 token 截断修复——**用户开始要求以 UI 级可读方式理解"模型在想什么、花多少钱"**。下一阶段可作为独立功能优先排期，投资回报高。

### 信号四：安全修复 PR 的延迟合入成为生态通病
NanoClaw #3680（挂载安全绕过，5 天）、CoPaw #7497（OFF 模式敏感路径，2 天）、ZeroClaw #9328（凭据链验证缺缺失，超 6 周）的延宕，暴露了开源项目在**安全修复评审速度**上的制度性短板。建议：（1）设置 security-fix 专用的合入快速通道；（2）对风险已明确的修复设定合入 SLI（如 ≤48 小时）；（3）安全事件（如 CoPaw #7511 沙箱突破）需有公开的 advisory 或与修复链接的追踪记录，以维持社区信任。

### 信号五：产品从"个人工具"向"团队基础设施"演进
IronClaw 的 per-user 沙箱执行器、CoPaw 的 QwenPaw Hub 多租户、OpenClaw 的企业级成本追踪等，都指向**从单机个人助手走向多租户、多用户、有治理边界的团队基础设施**。CoPaw 社区对 Hub 多租户的 21 条评论侧面印证了"个人→团队"的迁移需求在多个项目中同时涌现。对于创业者/新项目而言，"给 agent 加一个团队层"可能是差异化切入机会。

### 信号六：模型侧快速演进对 agent 框架的适配压力
ZeroClaw 今日同时出现 Anthropic adaptive-thinking 适配 PR（#10611）与 thinking display 400 错误（#10617），Hermes Agent 的 DeepSeek response_format 不兼容已有 20+ 条评论且影响面持续扩大。**模型厂商的 API 快速演进正持续冲击 agent 框架的 provider 适配层**——这提示 agent 框架层面需要建设"API 契约测试/供应商集成测试"的基础设施，否则每次模型侧变更都会以用户可见的形式在 Issue 池中爆发。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-04

## 1. 今日速览

NanoBot 今日社区活跃度较高，PR 更新达到 29 条（待合并 19 条、已合并/关闭 10 条），其中 4 条为今日新开 PR，另有 3 条关键 PR 已在今日完成合并/关闭，修复了当前时间上下文缺失（0.3.0 回归）、WebSocket 慢客户端阻塞扇出、以及会话标题生成缺失三个问题。Issues 侧保持平稳，过去 24 小时共 4 条更新（2 条新开/活跃，2 条关闭）。今日无新版本发布。当前 0.3.0 版本存在至少两个已知回归问题（当前时间上下文缺失、WebUI locale 注册竞态），修复均已合入或待合入。整体来看，项目正经历 0.3.0 发布后的密集修复合入期，同时 WebUI 可用性和可观测性增强是当前开发主线，项目健康度良好。

## 2. 版本发布

过去 24 小时内无新版本发布。最新版本仍为 0.3.0。需注意，今日关闭的 Issue #5645 和 PR #5654 确认了 0.3.0 中的一个回归：当前时间（Current Time）运行时上下文不再默认注入。建议升级至包含修复的下一个补丁版本再部署 0.3.0。

## 3. 项目进展

今日 10 条 PR 已合并或关闭，其中最具实质意义的有：

- **修复 0.3.0 回归：恢复当前时间运行时上下文** — PR [#5654](https://github.com/HKUDS/nanobot/pull/5654) 已合并。该修复通过内置 provider 机制恢复 ContextBuilder 的默认当前时间注入，解决了 0.3.0 中运行时上下文重构导致时间块消失的问题。
- **WebSocket 扇出防阻塞** — PR [#5655](https://github.com/HKUDS/nanobot/pull/5655) 已合并（priority: p1）。为每个连接的 socket 写操作引入有界 FIFO 队列，隔离慢客户端，防止个别挂起连接阻塞全部 WebSocket 主题的扇出分发。
- **WebUI 出站编码重构** — PR [#5657](https://github.com/HKUDS/nanobot/pull/5657) 已关闭（重构完成）。提取类型化的 recovery_state 与 turn_end 载荷编码器，统一 send_payload 原语，为后续 WebUI 协议扩展打下基础。

## 4. 社区热点

今日最值得关注的热点集中在 **WebUI 信息可观测性提升** 这一主题上：

- **Issue #5631**（[链接](https://github.com/HKUDS/nanobot/issues/5631)）：请求在 WebUI 中展示模型生成速度和上下文用量信息，作者明确对标 DeepSeek Harness 的展示方式。该 Issue 由 Ying-Zi66 创建于 9 月 2 日，得到 1 条评论，**帖子发布当日即获响应**：社区成员 HaisamAbbas 当天提交了对应 PR [#5660](https://github.com/HKUDS/nanobot/pull/5660)，在现有上下文使用量 popover 中加入模型生成速度（tokens/s）显示，响应速度非常快。
- **Issue #5647**（[链接](https://github.com/HKUDS/nanobot/issues/5647)）：报告 WebUI 前端信封缺少 webui 标志时会话标题不生成的问题。同样在当天获得修复 PR [#5658](https://github.com/HKUDS/nanobot/pull/5658)。

值得关注的是，两个 PR（#5660、#5658）均由 HaisamAbbas 提交，说明该用户同时在功能开发和 bug 修复两端深入参与 WebUI 改进，可视为该方向的活跃贡献者。

## 5. Bug 与稳定性

今日共报告/关闭 4 条 Issues，按严重程度排列如下：

**高 — 0.3.0 功能回归**

- **Issue #5645**（[链接](https://github.com/HKUDS/nanobot/issues/5645)，已关闭）：当前时间运行时上下文在 0.3.0 中默认缺失，与 timezone 文档不一致。0.2.2 下 ContextBuilder.build_messages() 会自动注入 Current Time 块，0.3.0 同一调用只返回原始用户文本。**已由 PR #5654 合入修复**。

**中 — WebUI 启动竞态**

- **Issue #5644**（[链接](https://github.com/HKUDS/nanobot/issues/5644)，已关闭）：WebUI 渠道 locale 注册表在启动时若两个 locale 并发加载，会丢失其中一个（如 `en`）。问题源于 locale-registry.ts 中 loadChannelLocale() 在调用时捕获/创建翻译映射的时序缺陷。该 Issue 关闭状态待确认具体修复 PR。

**低 — WebUI 功能缺陷**

- **Issue #5647**（[链接](https://github.com/HKUDS/nanobot/issues/5647)，开放中）：前端 WebSocket 信封未含 webui 标志时，即使会话已通过 mark_webui_session() 标记，也不会生成会话标题。**已有对应修复 PR #5658 待合并**。

## 6. 功能请求与路线图信号

- **WebUI 展示模型速度与上下文信息**（Issue [#5631](https://github.com/HKUDS/nanobot/issues/5631)）：请求在回答结束后或输入框附近显示生成速度和上下文信息，类似 DeepSeek Harness 界面。**已有对应 PR #5660 于今日提交**，若合并，则此功能将随下个版本发布。
- **上下文压缩（compaction）可见化**（PR [#5656](https://github.com/HKUDS/nanobot/pull/5656)，今日新开）：为渠道新增 /compact 命令（压缩活动会话而不重置对话），并发出结构化 context_compaction 生命周期事件。该 PR 使上下文压缩行为从"静默内部机制"变为"用户可控且可观测"，可作为可观测性增强路线的一个方向性信号。
- **临时运行时上下文块的按需注入**（PR [#5659](https://github.com/HKUDS/nanobot/pull/5659)，今日新开）：为 RuntimeContextBlock 增加 ephemeral 选项，允许运行时上下文 provider 将会话级常驻信息附加到当前请求而不持久化回放。与文件系统工具的增强配套，后续 agent 的上下文处理将更加灵活。

## 7. 用户反馈摘要

- **Issue #5631** 的发起者 Ying-Zi66 表达了明确的使用需求：希望在 WebUI 中直观看到模型速度和上下文信息，类比参考"DeepSeek harness"的界面设计。这类从竞品工具借鉴的功能诉求表明，社区用户对 NanoBot 的 WebUI 期望不只是基本聊天，还包括对模型行为的深度可观测性。
- **Issue #5645** 的发起者 desku24 详细记录了 0.2.2 → 0.3.0 升级后的具体行为变化，说明该用户正在实际依赖运行时上下文功能，是升级后较早起出回归的高敏感度用户。
- **PR #5654** 的摘要揭示了 0.3.0 的一个设计缺口：运行时上下文 provider 重构后，内置的当前时间 provider 未被注册到新机制中。这说明在架构重构中遗漏了默认行为的配置，用户在 Issue 中的反馈对此快速修复起到了关键作用。

## 8. 待处理积压

以下为提交时间较长但仍开放的重要 PR，提醒维护者关注：

- **PR #4549**（[链接](https://github.com/HKUDS/nanobot/pull/4549)，2026-06-26 提交，开放超 70 天）：为心跳添加 model_override 配置支持，允许为心跳执行指定更便宜的模型。与 #4551 同属 heartbeat 功能增强系列，**已出现冲突**，需要维护者协调处理的优先级考量。
- **PR #4551**（[链接](https://github.com/HKUDS/nanobot/pull/4551)，2026-06-26 提交）：为心跳添加 isolated_session 配置实现共享会话，以提供先前的对话上下文。
- **PR #5379**（[链接](https://github.com/HKUDS/nanobot/pull/5379)，2026-08-13 提交）：修复记忆整合（consolidation）保留完整输入，属稳定性和数据完整性关切；rebase 已完成但仍未合入。


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：** 2026-09-04  
**数据窗口：** 过去 24 小时  
**数据来源：** NousResearch/hermes-agent GitHub 仓库

---

## 1. 今日速览

过去 24 小时内，Hermes Agent 项目保持高度活跃：共有 50 条 Issue 更新（48 条新开或活跃、2 条关闭）和 50 条 PR 更新（44 条待合并、6 条已合并或关闭），另有 6 个新 PR 于今日提交。今日无新版本发布。值得关注的动态包括：一项宣称全代码库减少 35.6% LOC 的大规模重构 PR（#102117）仍处于待决策状态；此前报告的 state.db 结构性损坏问题（#102827）已在 24 小时内获得对应修复 PR（#102859）；Slack clarify 提示导致的回合挂起（#102704）、Desktop 服务进程无限增长（#58619）等多项 P1/P2 级问题仍在处理中。整体而言，项目社区活跃度高，Bug 报告与修复响应较为及时，但大量 P1/P2 级问题仍处于开放状态，部分 PR 等待决策时间较长（如 #58230 已开放两个月）。

---

## 2. 版本发布

过去 24 小时内无新版本发布。当前上游版本为 v0.21.0（2026.8.31），commit `593aa74c`。

---

## 3. 项目进展

### 今日新增 PR（合并/关闭状态中值得关注的）

由于数据集中大多数今日新增 PR 仍处于开放待审状态，以下梳理今日提交、标志着项目新动向的 PR：

- **[#102859] fix(state): serialize self-heal reopens per database path** — 针对 Issue #102827（state.db 结构性损坏）的修复 PR，定位到 #99509 自我修复重开路径在多 SessionDB 实例间并发导致的竞争条件，按数据库路径序列化重开操作。Issue 报告与修复 PR 在 24 小时内完成闭环，响应速度优秀。
- **[#102851] feat(skills): refresh sources when resuming sessions** — 在会话恢复边界增加基于检查点的技能源新鲜度检查，解决会话空闲期间技能变更不生效的问题。触及 session-state 和 caching 相关风险面。
- **[#102854] fix(cron): add resnapshot so an agent can clear a drift-guard skip** — 为 cron drift-guard（#44585 引入）增加重新快照能力，使 agent 能自行清除漂移导致的跳过状态。
- **[#102852] fix(matrix): decline unauthorized room invites instead of leaving them pending** — 修复 Matrix 适配器未授权邀请不自动拒绝、重启后残留的问题。
- **[#102856] profiles: protect root gateway pid/lock files during named profile deletion** — 修复删除命名 profile 时误删根网关 pid/lock 文件的问题（对应 Issue #102790）。

### 今日合并/关闭的 PR

数据源中未单独标注今日合并的 PR 清单，6 个合并/关闭的 PR 未在展示列表中单独区分。从整体趋势看，社区通过频繁的小型 bug fix PR（工具调用模糊修复、格式校验、命令注册等）持续收敛已知问题。

### 长期推进

- **[#102117] 全代码库重构（−35.6% LOC）** — teknium1 提出的极大规模简化重构：代码从约 1,063,826 行降至约 676k 行，37 个超过 5k 行的 "god file" 被拆解为 6 个，宣称零行为变更。经过三轮集成验证（cluster sweep → god-file extraction → 38 exhaustive integration rounds）。该 PR 标注了 needs-decision 且涉及几乎所有组件，属于战略性架构变更，其是否被接受将显著影响项目后续维护方向。

---

## 4. 社区热点

### 热度最高 Issue

- **[#88584] Automated Nous integration is blocked**（62 条评论）— 自动化 Nous-to-Enterkey 合并流程被阻塞，`cron/jobs.py` 存在冲突，dashboard updater 停留在最后测试的 Enterkey 版本。评论数量遥遥领先，反映出社区对自动化集成流程可靠性的高度关注。这是跨组织（NousResearch 与 enterkey-io）的自动化协作流程问题，修复难度可能不在于代码本身，而在于跨仓库协调。

- **[#83390] Auxiliary title_generation fails on DeepSeek: HTTP 400**（20 条评论）— DeepSeek API 不支持 `response_format` 类型的报错，已在 Issue 标题中标注为 P2。今日新增了同主题的重复 Issue（#102849），显示该问题影响面在扩大，有更多用户遇到。

- **[#58619] Hermes Desktop spawns unbounded serve processes**（13 条评论）— Desktop 重连逻辑每次启动新 serve 进程但不终止旧进程，在持续 API 错误下进程数无限膨胀。P1 级问题，已开放约两个月，至今无修复 PR 关联。

### 高赞 Issue

- **[#83390]**（👍 3）— DeepSeek 上 title_generation 失败的问题获得最多 👍，反映使用 DeepSeek 作为后端的用户群体对辅助功能兼容性的需求。

### 各 Issue 背后的共同诉求

| 诉求类型 | 代表 Issue | 说明 |
|---------|-----------|------|
| 会话/进程生命周期管理 | #58619、#102618、#102827 | 进程泄漏、孤儿会话、DB 损坏均与状态管理缺陷相关 |
| 平台兼容性 | #83390、#102849、#102842 | DeepSeek 响应格式不兼容、Desktop 缺德文 locale |
| 权限边界安全 | #102443、#102852 | 审批持久化逻辑缺陷、未授权邀请处理 |
| 自动化集成可靠性 | #88584、#101788、#102854 | 合并流程阻塞、kanban reclaim 不检查未提交工作、drift-guard 死锁 |

---

## 5. Bug 与稳定性

### P1 — 严重

- **[#102827] v0.21.0: state.db 结构性损坏（NOTADB/malformed）** — cron 任务在 3 次连续 90 秒超时后被 teardown，self-heal 重开路径与并发写入线程竞争，导致数据库结构性损坏。**已有修复 PR #102859（今日提交）**，序列化各数据库路径的自我修复重开操作。Issue 创建与修复 PR 同日，响应很快。

- **[#58619] Desktop 产生无界 serve 进程** — `hermes_cli.main serve` 缺少 `--replace` 标志，重连逻辑启动新进程后不终止旧进程；在持续 API 错误下进程数无限增长。P1，开放两月，**暂无修复 PR 关联**。

### P2 — 中等

- **[#83390] DeepSeek auxiliary title_generation HTTP 400** — `response_format` 类型 DeepSeek API 当前不支持。20 条评论，今日有重复报告 #102849。设计到 provider 适配层的兼容性问题，**暂无关联修复 PR**。

- **[#82599] delegate_task 对非可重试错误（401）报告 status=completed** — `final_response` 非空即判定为成功，错误字符串被误判为成功输出。影响子任务可靠性判断。**暂无关联修复 PR**。

- **[#102138] Gateway 会话压缩在稳定流量下永远无法提交** — 10 秒 turn-hold 预算比摘要延迟低一个数量级，60 秒 retry-after 被压缩器自身的 rollback 清除。设计到会话压缩机制的两个缺陷叠加。**暂无关联修复 PR**。

- **[#102443] Telegram 'always' 批准存的是描述字符串而非命令模式** — 批准后匹配器永远无法匹配，用户以为已批准的权限实际未生效。安全边界相关。**暂无关联修复 PR**。

- **[#97107] MCP 重连复用启动时展开的 ${ENV} headers** — Token 轮换后 MCP 重连不自动拾取新 Token。**暂无关联修复 PR**。

- **[#102704] Slack clarify 多选提示未清除状态导致回合挂起** — 作者特别声明不是 #92201/#92202 的重复（分别为状态写入竞争和 exec-approval 提示问题），这是 clarify 提示自身的缺陷。**暂无关联修复 PR**。

### P3 — 较低（部分列举）

- **[#102618] Desktop 孤立会话 tile 无法恢复** — owner 无法解析时 dispatcher 路径跳过只读回退，Retry 按钮不可恢复。P3 但阻塞聊天面板打开。
- **[#101788] kanban reclaim 不检查未提交工作** — reclaim 释放任务时未检查 worktree 的未提交更改。

### 关联修复 PR 汇总

| Issue | 严重度 | 关联 PR | PR 状态 |
|-------|--------|---------|---------|
| #102827 state.db 损坏 | P1 | #102859 | 今日提交，待审 |
| #96972 TUI 技能命令被遮蔽 | P2 | #96990 | 开放中 |
| #94506 工具模糊匹配范围不完整 | P3 | #95170 | 开放中 |
| #93122 首页渠道通知跳过无日志 | P3 | #95175 | 开放中 |

---

## 6. 功能请求与路线图信号

### 可能被纳入下一版本的新功能

- **[#85976] file_readonly 工具集** — 将 `read_file` + `search_files` 从原子化的 `file` 工具集中拆出为独立的只读工具集，满足代码审查、研究、文档等只读场景。与现有 Profiles/安全边界设计契合度高、侵入性低，**可能被纳入**。

- **[#102833] GET /v1/plugins API 端点** — 补齐与 `/v1/skills`、`/v1/toolsets` 对等的插件列举端点。改动范围小、明确补全现有 API 面，**大概率被纳入**。

- **[#91230] 任务完成验证作为 Hermes 第六条法则** — 将 "All Gods Must Die: Adversarially Verified Transformation" 中提出的第五法则扩展到任务完成验证。属于架构/设计层面的讨论，需要决策，短期内**不太可能直接落地**。

- **[#102822] Desktop 后端 3 bot 上限提高** — 用户反馈 6 个 bot 中 3 个不可访问。属于配置调整而非架构变更，**可能快速修复**。

- **[#102851] 会话恢复时刷新技能源（PR）** — 已实现为 PR 提交，对应会话恢复时技能过期的问题，**等待审阅合入**。

- **[#102842] Desktop 德文（de）locale** — 标记为 duplicate，可能是已有其他 PR/Issue 在推进。

### 路线图信号

- **大规模简化重构（#102117）** 尽管标为 refactor 且零行为变更，但其规模和跨组件影响面使得合并决策艰难。若被接受，将显著降低后续维护成本和新开发者上手门槛。
- **P1 风险面集中在会话/进程生命周期管理**：多个 P1/P2 Issue 指向同一类 root cause（进程生命周期、状态管理、重连逻辑），项目的下一步稳定版本应优先处理这一主题。

---

## 7. 用户反馈摘要

### 真实用户痛点

- **强制工具集捆绑限制使用场景**（#85976）：用户需要只读文件访问做代码审查和研究，但 `file` 工具集绑定了 `write_file` 和 `patch` 权限，无法在不授予写权限的情况下获得基本的只读能力——对于多租户或多 Profile 场景这是明确的安全风险。

- **"批准了但没生效"的困惑**（#102443）：Telegram 用户点击 'always' 后，系统存储的是描述字符串而非命令模式，匹配器永远无法匹配——用户以为已批准的权限实际从未生效。这类问题侵蚀用户对审批系统的信任。

- **进程堆积导致资源耗尽**（#58619）：模型 API 持续报错时 Desktop 每次重连产生新进程而不清理旧进程，用户必须手动处理。这类问题在重度使用场景下会导致机器卡死。

- **多平台适配遗漏**（#102842）：Desktop 缺少德文 locale，非英语用户的使用体验受影响。

- **会话恢复的死胡同**（#102618）：孤儿会话无法打开且无法通过 Retry 恢复，用户被锁在自己的对话历史外。

### 用户满意度正面信号

- 针对 state.db 损坏的 Issue #102827 在 24 小时内获得了修复 PR #102859，展现出项目对严重稳定性问题的响应速度。
- 多个 PR 作者在描述中明确 "Closes #XXXXX"，Issue 到 PR 的追踪链路清晰。

---

## 8. 待处理积压

### 长期未响应的重点 Issue

| Issue | 严重度 | 开放时长 | 最后活动 | 备注 |
|-------|--------|----------|----------|------|
| [#58619] Desktop serve 进程无界增长 | P1 | 约 2 个月（2026-07-05 创建） | 2026-09-04 有评论 | 仍无 PR 关联 |
| [#53416] MCP 工具绕过 cron enabled_toolsets 过滤 | P2 | 约 2.5 个月（2026-06-27 创建） | 2026-09-04 有评论 | 涉及安全边界 |
| [#88584] Automated Nous integration blocked | 未标优先级 | 约 2.5 周（2026-08-17 创建） | 2026-09-04 活跃 | 62 条评论，需跨组织协调 |

### 长期未合并的重点 PR

| PR | 说明 | 开放时长 | 风险标注 |
|----|------|----------|----------|
| [#58230] fix(kanban): dedupe review lanes and service gates | 已获批准 Phase 2F 实现，6 个文件已获批 | 约 2 个月（2026-07-04 创建） | 标注多个 sweeper risk |
| [#102117] whole-codebase simplification（−35.6% LOC） | 大规模重构，38 轮集成测试通过 | 1 天 + 待决策 | needs-decision |
| [#98894] feat(gateway): add inert specialist candidate discovery | 新功能（gateway 能力缺口发现） | 约 5 天 | needs-decision |

### 关注建议

- #58230 作为已获批准的重构 PR 已搁置两个月，需要维护者明确是推进还是关闭。
- #58619 作为 P1 级进程管理缺陷，开放两个月仍无修复计划，建议维护者明确优先级排期。
- #88584 的 62 条评论说明该问题对自动化发布流程影响严重，跨组织协调应尽快推进。
- #102827 今日刚提交修复 PR #102859，建议尽快完成审查和回归测试——state.db 损坏属于数据丢失级别的事故。

---

*报告生成时间：2026-09-04 | 数据来源：NousResearch/hermes-agent GitHub | 本报告基于过去 24 小时的 Issues/PRs 活动数据生成，版本发布信息基于 Releases 数据。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-04）

> 数据来源：github.com/sipeed/picoclaw | 数据窗口：过去 24 小时

---

## 1. 今日速览

PicoClaw 在过去 24 小时整体活跃度中等偏低：共产生 6 条 Issue 更新和 9 条 PR 更新，无新版本发布。Issue 侧以存量问题持续更新为主，真正新开的仅 #3365 一条（QQ 频道认证 401 问题，与当日 #3349 属同一根因，已有关联分析）。PR 侧 7 条处于待合并状态，其中 5 条为 Dependabot 自动依赖升级，2 条为人工提交的功能修复（#3347 修复 Web UI 卡顿、#3340 修复 Slack 媒体上传）。当日无新合并的实质性功能 PR，仅#3329（LINE 配置警告）和 #2810（大规模上游同步）被关闭——后者属跨月长跑型同步 PR。**项目当日无回归、无新版本，整体处于正常的社区维护节奏，值得关注的是 Slack/QQ 通道 bug 修复 PR 与对应 Issue 的配对情况（详见 Bug 章节）。**

---

## 3. 项目进展

**今日合并/关闭 PR（2 条）均非代码合入主干**，项目代码本身无净新增：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#2810](https://github.com/sipeed/picoclaw/pull/2810) | Sync with upstream/main (1095 commits) + forward-port magicform customizations | CLOSED | 跨度 4 个月的大规模同步（1095 commits），已关闭但未标注 merged——若最终合入，意味着 upstream 的 agent loop 拆分（`agent_*.go`）与工具重组将进入本项目；建议维护者核实该 PR 的最终落点 |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | fix(line): warn on inert webhook_host / webhook_port instead of seeding them | CLOSED | 修复 #3328：LINE 通道的 `webhook_host`/`webhook_port` 配置项声明后从未被读取（挂在共享网关 HTTP handler 上），改为警告而非误导性默认值 |

**关键待合并 PR（人工提交，非机器人）** ，构成下一版本候选增量：

| PR | 标题 | 对应 Issue | 功能/修复 |
|---|---|---|---|
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 修复 Web UI 在长聊天历史下的输入卡顿，作者已自测 launcher/桌面/移动端（Brave）无卡顿 |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | fix(slack): set FileSize on media upload params | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | 修复 Slack 媒体上传必败：`slack.UploadFileParameters` 未设 `FileSize`，SDK 在网络请求前即以 0 字节拒绝 |

综合看，**项目整体处于"修复积压 + 依赖例行升级"阶段**：Web UI 性能与 Slack 通道两个已知 bug 已有修复 PR 待合，QQ 通道问题（#3349/#3365）尚缺修复 PR，属当前最锐利的功能缺口。

---

## 4. 社区热点

今日活跃度最集中的议题是 **QQ 频道通道大面积故障**：

- **[Issue #3365](https://github.com/sipeed/picoclaw/issues/3365)**（新开，9/04）：直接给出根因定位——`botgo v0.2.1` + `resty >= v2.17` 的兼容问题导致 401 `Authorization参数格式错误`，并在构建参数中提及 Orange Pi 3B（RK3566, aarch64）。
- **[Issue #3349](https://github.com/sipeed/picoclaw/issues/3349)**（更新至 9/03，3 条评论）：同一问题更早的现场报告，附完整 gateway 报错日志（`code:401, code:11241, err_code:40011005`），覆盖 Docker 和 Linux x86 两种部署方式。

其次是两个相对独立的热点：

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)**（9 条评论，2 👍）：Web UI 长对话历史下的输入延迟，社区讨论热度最高，且已有修复 PR #3347，属于"高关注 + 已修复"的良性范本。
- **[Issue #3338](https://github.com/sipeed/picoclaw/issues/3338)**（3 条评论）：Slack 图片附件上传必失败（`file size cannot be 0`），同样是 bug 已定位（`SendMedia` 未设置 `FileSize`）+ 修复 PR #3340 在等合并。

**社区诉求分析**：三条热点问题全部指向"通道联通性/可用性"——QQ 频道 (401)、Slack（上传必失败）、Web UI（长文本卡顿）。说明当前用户分布于多条即时通讯/前端入口，任何一条通道的故障都会快速形成集中反馈；QQ 频道尤甚，两份报告（#3349 + #3365）在 24 小时内合并为同一根因，建议维护者优先响应。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题 | 状态 | 修复 PR |
|---|---|---|---|---|
| 🔴 高 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 频道完全不可用：gateway 报 `code:401, code:11241`，Docker 与 Linux x86 均复现 | OPEN，3 评论 | ❌ 无 |
| 🔴 高 | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | 同一 QQ 401 问题的根因定位：`botgo v0.2.1` + `resty >= v2.17` 参数格式冲突（aarch64/nightly build 可复现） | OPEN（今日新开） | ❌ 无，但 Issue 已给出根因线索与版本范围 |
| 🟡 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史对话后输入明显延迟（0.3.1 / Web 通道） | OPEN，9 评论 | ✅ [#3347](https://github.com/sipeed/picoclaw/pull/3347) 待合并（作者自测通过） |
| 🟡 中 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 媒体上传总是失败：`file.upload.v2: file size cannot be 0`（`FileSize` 未赋值） | OPEN，3 评论 | ✅ [#3340](https://github.com/sipeed/picoclaw/pull/3340) 待合并 |
| 🟢 低 | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Google Antigravity 认证/模型发现正常但生成请求一律返回泛化 429 quota 错误 | **CLOSED**（9/03 stale 关闭） | — 已关闭，若问题仍存在建议重新打开 |
| 🟢 低 | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM 模型在 ARM 开发板回复异常（V0.3.1），信息不完整 | OPEN，1 评论 | ❌ 无 |

**小结**：高严重度集中在 QQ 通道且无修复 PR，需维护者重点响应；两项中等问题修复 PR 均已就绪待合并，建议尽快合入以闭环。

---

## 6. 功能请求与路线图信号

当日无显式"新功能请求"类 Issue，释放的功能/增强信号主要来自 PR 合流状态：

- **Slack 媒体上传修复（#3340）**：虽属 bug fix，但"正确走通 `files.upload.v2`"会成为 Slack 通道发送图片/文件的能力基线，构成后续富媒体功能的前提。合并概率较高（对应 Issue #3338 有社区诉求）。
- **Web UI 长会话性能优化（#3347）**：作者承诺"桌面 + 移动端均不再卡顿"，合入后有望覆盖长对话/大量文本场景下更流畅的 Web 交互体验。与 Issue #3281（9 条评论、2 👍）呼应，社区期待值高。
- **LINE webhook 配置去误导化（#3329）**：虽然今日关闭，但"对无效配置警告而非静默"的语义，可能预示后续会对多通道（Slack/Teams/Discord/QQ）统配置做类似"配置即验证"处理——一个值得留意的健康方向。
- **上游 1095 commits 的大规模重构/同步（#2810）**：虽然关闭模式未明示，其承载的 agent loop 拆分（`agent_*.go`）与工具重组，如果随某次版本发布合入，将是一次显著的内部架构演进。

**判断**：下一版本（无发布时间信号）的候选内容大概率是：Web UI 性能修复（#3347）+ Slack 媒体上传修复（#3340）+ LINE webhook 改进（#3329），外加一批 Dependabot 例行升级。

---

## 7. 用户反馈摘要

来自 Issue 评论/描述的真实使用场景：

- **Web UI 是真实主力入口**："在 Web UI 中打开会话、积累一定聊天记录后持续输入"，反馈者 xpader 要求"快速摘要/summary"说明长会话是其常态。修复者 iMilnb 自测覆盖桌面与移动端（Brave），印证 Web 端跨设备使用广泛。
- **QQ 频道部署方式多样**：Issue #3349 报告覆盖 Docker 与 Linux x86 两种部署，说明 QQ 通道在自部署用户中占比很高；伴随报错文本 `请求头Authorization参数格式错误`（code:11241）直接暴露到日志，说明错误信息未做本地化/用户可读化处理——间接反映通道层错误上报对终端用户不友好。
- **Arm 板端运行（incl. RKLLM）是差异化场景**：#3346（RKLLM 回复异常）与 #3365（Orange Pi 3B, aarch64）表明有一批用户将 PicoClaw 跑在 RK3566 等 ARM 开发板上（对应 PicoClaw 的嵌入式/边缘定位），RKLLM 模型的稳定性问题（#3346 仍在 OPEN）值得关注。
- **Slack 用户上传图片是刚需**：#3338 的触发路径明确"每次 SendMedia 都会在上传前打出 'file size cannot be 0'"——所有 Slack 图片内容发送全部失败，属于阻断性体验缺陷。
- **Google Antigravity 使用者对错误语义不满**：#3339 的核心诉求是：OAuth scope 正确、模型发现成功的前提下，收到泛化 429 quota 错误，用户抱怨指向了错误分类与真实可用配额之间的偏差（该 Issue 已被 stale 关闭，若仍复现建议重新打开）。

---

## 8. 待处理积压（维护者重点关注）

| 类型 | 编号 | 标题 | 搁置时长 / 状态 | 建议 |
|---|---|---|---|---|
| 🔴 Issue（高） + 关联新 Issue | [#3349](https://github.com/sipeed/picoclaw/issues/3349) / [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ 频道 401 `Authorization参数格式错误` | #3349 自 8/30 以来 5 天无维护者响应；#3365 今日新开已给出明确根因线索（botgo v0.2.1 + resty≥v2.17） | 立即确认根因并给出修复计划（升级 botgo？锁定 resty 版本？），DDL 前给出回应以避免社区重复开 Issue |
| 🟡 Issue + READY PR | [#3338](https://github.com/sipeed/picoclaw/issues/3338) + PR [#3340](https://github.com/sipeed/picoclaw/pull/3340) | Slack 媒体上传必失败 | Issue 自 8/17 起至今（18 天）；修复 PR 自 8/17 提交后无 merge | 修复 PR 已在等合并，建议尽快 review + merge 形成闭环 |
| 🟡 Issue + READY PR | [#3281](https://github.com/sipeed/picoclaw/issues/3281) + PR [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Web UI 长会话卡顿 | Issue 自 7/21 至今（45 天，9 评论 2 👍，社区高热度）；PR 自 8/27 提交 | 已具备修复与自测证据，评估后合入；这是最老且社区呼声最高的性能问题 |
| 🟢 Issue | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM 在 ARM 开发板回复异常 | 8/27 创建，仅 1 条评论（作者补图），无维护者反馈 | 信息不足（截图搁在图床?），建议向用户索取复现步骤 + 日志后跟进 |
| 🟢 PR | [#2810](https://github.com/sipeed/picoclaw/pull/2810) | Sync with upstream/main (1095 commits) + forward-port 6 个定制 commit | 5/07 创建，今日 CLOSED 但合入状态不明 | 若最终未合入主干，应澄清该 PR 的归宿（closed-as-done? 还是 superseded?），避免社区对 upstream 大量重构（agent 拆分/工具重组）的进度误判 |

**数据窗口外的警告**：#3339（Google Antigravity 泛化 429）在 stale 机制下今日被关闭，但若为误关，建议在本周内开放重新审查通道，避免"valid OAuth scope + 成功模型发现但生成一律 429"这类问题沉淀为悬案。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-04

> 数据来源：NanoClaw GitHub 仓库（链接前缀：https://github.com/nanocoai/nanoclaw）

## 1. 今日速览

过去24小时内，NanoClaw 仓库保持较高的活跃度：共产生 4 条 Issue、24 条 PR 动态，其中 4 条 PR 已合并/关闭（均为存量 PR 收尾），20 条待合并 PR 在持续迭代中。值得关注的是，今日进入活跃期的大量 PR（如 #3715、#3713、#3712、#3711、#3707 等）集中在 **消息路由去重、入站内容延迟解析、WhatsApp 频道增强、配置层新字段** 等功能链路上，说明项目正围绕"核心消息管道优化 + 技能生态扩展"双线推进。今日无新版本发布。整体评估：**活跃度高、社区参与密集、无阻断性问题暴露**。

## 2. 版本发布

过去24小时内无新版本发布（最新 Releases 为空），无需关注破坏性变更或迁移事项。

## 3. 项目进展：重要合并/关闭项

今日有 4 条 PR 进入合并/关闭状态：

| PR | 标题 | 说明 |
|---|---|---|
| [#2231](https://github.com/nanocoai/nanoclaw/pull/2231) **[已关闭]** | feat(chat-sdk-bridge): add sendAsRaw flag to bypass adapter Markdown round-trip | 为 chat SDK 桥接增加 `sendAsRaw` 标志，绕过适配器的 Markdown 往返转换，避免内容被二次转义。 |
| [#2232](https://github.com/nanocoai/nanoclaw/pull/2232) **[已关闭]** | fix(chat-sdk-bridge): fall back to URL fetch for adapters without fetchData | 当适配器缺少 `fetchData` 能力时，回退到 URL 抓取，完善桥接层兼容性。 |
| [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) **[已关闭]** | fix(agent-runner): never deliver silence, never deliver \<internal\> thinking | 修复 agent-runner 投递逻辑——不再投递空内容（silence），也不再投递内部思考块给外部对话。 |
| [#3461](https://github.com/nanocoai/nanoclaw/pull/3461) **[已关闭]** | chore(deps): bump all @chat-adapter/* + chat 4.29.0 → 4.38.1 | 将全部 9 个 `@chat-adapter/*` 包及 `chat` 核心从 4.29.0 提升到 4.38.1，追赶 trunk 依赖基线。 |

**点评**：今日合并项集中在 **chat-sdk-bridge 修复与依赖升级**。其中 #3126 具有实质意义——消除 agent 运行时对外"静默空投"与"泄露内部推理"两类问题，直接关系到渠道消息质量与安全边界。#2231/#2232 则补全了桥接层在无 `fetchData` 适配器场景下的能力缺口。依赖同步 PR #3461 关闭意味着分支依赖基线向前推进了 9 个 minor 版本。

其余 20 条 PR 仍处于开放待合并状态（详见下文各节），大量核心修复尚未合入 trunk，**合并吞吐是当前项目推进速度的主要瓶颈**。

## 4. 社区热点

今日评论数最高的 Issue 为：

- **[Issue #3706](https://github.com/nanocoai/nanoclaw/issues/3706)** — `ncl groups config add-mount` 在 `--container` 传入绝对路径时，静默产生损坏的双层嵌套路径（1 条评论）

其余 Issues/PRs 均为 0 条评论（PR 评论数据缺失，仅能从标签与作者身份推测关注度）。从讨论热度看，#3706 是今日唯一有实质讨论的 Issue。

**分析**：该 Issue 的作者 DawoudIO 同时提交了 #3705（任务周期更新后 `process_after` 不重算）与 #3461（依赖升级），是一位深度使用 CLI 命令行的核心用户。#3706 的痛点在于：**CLI 的 `--help` 文本未说明 `--container` 必须为相对路径，违反直觉的输入未得到显式校验，而是静默产生了错误的嵌套路径**——这是典型的"文档缺失 + 防御性校验不足"组合问题。

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue/PR | 描述 | 是否已有修复 PR |
|---|---|---|---|
| 🔴 高 | [Issue #3714](https://github.com/nanocoai/nanoclaw/issues/3714) | 三个运维覆盖环境变量（自动压缩窗口、会话记录轮转）文档化为可覆盖，但**从未从宿主机注入会话容器**——用户无法在不打补丁的情况下设置它们（#1820 的后续问题） | ❌ 未发现 |
| 🔴 高 | [PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680) | **安全修复**：`validateSpec` 中允许白名单外的额外挂载绕过（allowlisted-extra mount bypass），系 mount 安全漏洞，合入前可被容器逃逸/越权利用 | 该 PR 本身即为此修复，待合并（自 8/30 起已悬置 5 天） |
| 🟡 中 | [Issue #3706](https://github.com/nanocoai/nanoclaw/issues/3706) | `add-mount` 绝对路径导致双层嵌套路径，静默损坏配置 | ❌ 未发现 |
| 🟡 中 | [Issue #3705](https://github.com/nanocoai/nanoclaw/issues/3705) | `ncl tasks update --recurrence` 修改任务节奏后**不重算下一次触发时间**（`process_after` 沿用旧计划），周→日切换后任务仍按周触发 | ❌ 未发现 |
| 🟡 中 | [Issue #3709](https://github.com/nanocoai/nanoclaw/issues/3709) | Mailbox SQLite 测试使用固定 `/tmp` 路径——**并发 vitest 运行互相删除数据库**，CI 并行或本机多实例下不可靠 | ❌ 未发现；[PR #3708](https://github.com/nanocoai/nanoclaw/pull/3708) 仅修复 PRAGMA 顺序问题，不涉及此 Issue |
| 🟢 低 | [PR #3440](https://github.com/nanocoai/nanoclaw/pull/3440) | Docker 驱动三类挂载缺陷：SELinux 阻断挂载、group-writable rw 挂载、游离 NUL 字节 | 该 PR 即修复（待合并） |

**重点关注**：#3680（挂载安全绕过）自 8/30 起已待合并 5 天，属安全修复但迟迟未合入，建议维护者优先处理。#3714 反映了**文档承诺与实际行为不一致**的系统性问题——环境变量文档化为可覆盖却未实现转发链路，用户信任成本较高。

## 6. 功能请求与路线图信号

过去24小时内无新增 Feature Request Issue，但从活跃 PR 可以读出清晰的路线图信号：

| 方向 | PR | 说明 |
|---|---|---|
| **消息管道延迟加载** | [#3711](https://github.com/nanocoai/nanoclaw/pull/3711) | 入站消息内容延迟到 agent 真正需要时才解析（网络抓取/下载等昂贵操作不提前执行）——核心架构优化 |
| **WhatsApp 频道增强** | [#3712](https://github.com/nanocoai/nanoclaw/pull/3712) | 读取文档标题文字、停止下载无人需要的媒体文件 |
| **每-agent-group 投递模式配置** | [#3713](https://github.com/nanocoai/nanoclaw/pull/3713) | 记录 agent group 的投递契约（envelope vs. outbound tools），适配不支持 `<message to>` 信封的模型 |
| **Zapier MCP 技能接入** | [#3715](https://github.com/nanocoai/nanoclaw/pull/3715) | 新增 operator skill，让选定 agent group 通过托管 MCP 服务器访问 Zapier，私密 token 不落入 NanoClaw 配置 |
| **Agent runner 准入控制** | [#3707](https://github.com/nanocoai/nanoclaw/pull/3707) | 新增 `registerAdmissionGate` 轮询缝（poll-loop seam），为外部准入策略（配额、审批等）留出挂载点 |
| **MCP 消息去重** | [#3462](https://github.com/nanocoai/nanoclaw/pull/3462) | `send_message` 防止重复发送中轮阻断门已投递的内容（关联 #2404 同类缺陷） |
| **语音转录 V2** | [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) | 容器端语音转录，默认主权（sovereign by default）——长期未合并的大功能 |

**判断**：#3711 + #3712 构成"入站内容延迟解析"完整链路（#3712 依赖 #3711），预计将一起合入；#3713 与 #3715 都出自 glifocat 之手，服务同一目标——**拓展开源模型对信封契约的适配性与技能生态接入**，这两项可能纳入下一 minor 版本。

## 7. 用户反馈摘要

限于 Issue 评论数据（今日可见 1 条评论），从 Issue 描述中可以提炼以下真实用户场景：

- **CLI 配置的"静默失败"问题仍是最核心的用户痛点**（#3706）。用户 DawoudIO 按照 `--help` 文档传递"container path"时，自然倾向于传入完整路径——文档未标注"必须为相对路径"，工具也未做校验提示。用户期待的是**显式报错或自动规范化**，而非静默生成损坏配置后到运行时才暴露。
- **任务周期更新行为与直觉不符**（#3705）：用户修改 `--recurrence` 的预期是"下一次触发随之重算"，实际 `process_after` 被冻结在旧计划上。周→日切换后任务仍按周触发，属于高影响、低发现难度的日常操作缺陷。
- **运维覆盖机制形同虚设**（#3714）：用户查阅源码才发现三个环境变量"从未被真正转发"，意味着**修改会话压缩窗口或转轮策略必须 fork 或打补丁**，对部署运维造成实质性阻碍。作为 #1820 的后续问题，反映出该链路曾被报告但仍未修复。

## 8. 待处理积压

以下为长期未合入/未响应的条目，建议维护者排期确认：

| 条目 | 悬置时长 | 说明 |
|---|---|---|
| [PR #2003](https://github.com/nanocoai/nanoclaw/pull/2003)（语音转录 V2） | 自 2026-04-25 至今（133 天） | 大功能 PR，容器端实现 + 主权默认。自 resubmission（#1879 应维护者要求关闭后重提）至今仍无实质推进迹象，建议维护者明确表态是否纳入路线图 |
| [PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680)（mount 安全绕过修复） | 自 2026-08-30 至今（5 天） | **安全修复**，建议立即合入或给出明确阻塞原因 |
| [Issue #3714](https://github.com/nanocoai/nanoclaw/issues/3714)（env 覆盖不生效） | 2026-09-04 新开（0 天） | 今日新报，但为 #1820 的长期后续，说明该问题已存在较久，无对应修复 PR |
| [PR #3440](https://github.com/nanocoai/nanoclaw/pull/3440)（Docker 挂载三缺陷修复） | 自 2026-08-22 至今（13 天） | 涉及 SELinux 挂载阻断与安全相关缺陷，待合并时间偏长 |
| [PR #3462](https://github.com/nanocoai/nanoclaw/pull/3462)（MCP send_message 去重修复） | 自 2026-08-23 至今（12 天） | 修补 #2404 同类 bug class，持续开放但无阻塞说明 |

---

*本报告基于 2026-09-04 数据快照生成，所有链接均指向 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-04

## 1. 今日速览

项目今日活跃度较高，WebUI 交互体验改进显著：核心贡献者 italic-jinxin 围绕 slash 命令菜单和结果卡片提交了 4 个配套 Issues（#8063-#8066）及对应 PR（#8067-#8071），形成一轮紧凑的 UX 迭代闭环。LLM/子代理链路亦有实质性推进：henrypark133 提交了 3 个待合并 PR，其中 #8067 为子代理后台投递引入了 boot 启动扫描机制。CI 侧今日修复了架构扫描超时与失败测试两个回归问题，均已被合并关闭。项目整体处于多线并进的稳步迭代状态，当前共有 13 个 PR 待合并，无新版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 8 个 PR 被合并/关闭，核心贡献如下：

- **[#8043] perf(loop-host): 合并流式文本更新**（[链接](https://github.com/nearai/ironclaw/issues/8043)）— 修复此前每次 provider delta 都对全文重新 sanitize 的 O(N·k) 性能问题，是今日最重要的性能改进。
- **[#8046] feat(subagent): 子代理审批/凭据门控到达所有者收件箱（R3 slice 3a）**（[链接](https://github.com/nearai/ironclaw/issues/8046)）— 修复了被阻塞的子代理线程对所有者完全不可见的问题，补齐了审批链路的关键可见性断点。
- **[#8058] test(webui): 使用真实扩展 ID 修复通知边界测试**（[链接](https://github.com/nearai/ironclaw/issues/8058)）— 修复因 #8038 引起的 `Tests (Reborn)` 主分支失败。
- **[#8060] ci(nextest): 为架构扫描测试扩展超时上限**（[链接](https://github.com/nearai/ironclaw/issues/8060)）— 实测单次全树扫描耗时 176.8s，逼近原有超时阈值。

WebUI 贡献者 italic-jinxin 同日关闭了 #8033（清除冗余 `@ts-nocheck` 指令），该 issue 识别出约 41 个文件。

## 4. 社区热点

今日讨论热度集中在与 Reborn 架构演进相关的长时间issue：

- **[#7903] 持久化 per-user 沙箱执行器决策探索**（[链接](https://github.com/nearai/ironclaw/issues/7903)，risk: high, scope: agent/sandbox）— 更新于今日，共 2 条评论。该 issue 讨论是否将 canonical agent loop 持久化到受信任主机内核之后的 per-user Docker 沙箱中。这是架构级议题，涉及权威边界（authority boundary）划分，comment 数虽少但影响面大，值得关注其最终决策方向。

新提交的 UX 系列 issues（#8063-#8066）虽尚无评论，但由同一作者 italic-jinxin 的配套 PR 显示其关注度在持续走高，已形成有效的 issue-to-PR 闭环。

## 5. Bug 与稳定性

今日 webui 相关的 Bug 已由作者自行提交修复 PR，CI 相关的 Bug 则已修复合并：

| 严重程度 | Issue/PR | 描述 | 修复 PR 状态 |
|---------|-------------|------|----------|
| 低 | [#8066](https://github.com/nearai/ironclaw/issues/8066) | 命令结果卡片在累计执行后缩成水平线边框 | [#8071](https://github.com/nearai/ironclaw/issues/8071) 待合并 |
| 低 | [#8064](https://github.com/nearai/ironclaw/issues/8064) | 结果卡片无关闭/消除操作，反复执行不断累积 | [#8069](https://github.com/nearai/ironclaw/issues/8069) 待合并 |
| 低 | [#8065](https://github.com/nearai/ironclaw/issues/8065) | 命令菜单中标题与描述列对齐不一致 | [#8070](https://github.com/nearai/ironclaw/issues/8070) 待合并 |
| 低 | [#8063](https://github.com/nearai/ironclaw/issues/8063) | 命令菜单滚动时活动项移出可视区，键盘导航有同样问题 | [#8068](https://github.com/nearai/ironclaw/issues/8068) 待合并 |
| — | CI 主分支失败 | 由 #8058 修复并合并，已解决 | ✅ 已完成 |
| — | 架构测试超时 | 由 #8060 修复并合并，已解决 | ✅ 已完成 |

另有 [#8057](https://github.com/nearai/ironclaw/issues/8057) 报告 prompt 预算只计算 transcript，未将 identity/skills/tool schemas 纳入核算，可能导致请求超出模型窗口——该问题已有对应修复 PR #8053 待合并。

## 6. 功能请求与路线图信号

- **[#8057] Prompt 预算计入非 transcript 材料（identity、skills、tool schemas）**（[链接](https://github.com/nearai/ironclaw/issues/8057)，enhancement）— 对应的 [#8053](https://github.com/nearai/ironclaw/issues/8053) PR 已实现从模型广告窗口推导预算，正在进行中，大概率随下一版本上线。
- **[#7903] 持久化 per-user 沙箱执行器**（[链接](https://github.com/nearai/ironclaw/issues/7903)，risk: high, scope: agent/sandbox）— 架构级决策 spike，短期内不会进入具体实现排期，需要持续跟踪；涉及 Reborn 架构下权威边界（authority boundary）的重新划分，其决策方向将影响后续 sandbox 相关功能发布节奏。
- **WebUI slash 命令 UX 优化簇** — #8063-#8066 四个 issue 指出的问题均有配套 PR（#8067-#8071，其中 #8067 已合并），且均已标注 scope: docs，预计随下一版本（或紧随下一版本之后的小版本）一同发布。

## 7. 用户反馈摘要

- **[#8066]**（[链接](https://github.com/nearai/ironclaw/issues/8066)）：用户指出 `/model` 多次执行后历史结果卡片被压缩至只剩边框线。该问题源于消息列表 flex 布局允许卡片收缩，用户期待结果卡片保持稳定尺寸——修复 PR #8071 已提交。
- **[#8064]**（[链接](https://github.com/nearai/ironclaw/issues/8064)）：结果卡片被感知为"临时面板"却无关闭按钮，反复执行命令后卡片数量膨胀、侵占会话空间。同类问题在社区中较为常见，建议后续统一规划。
- **[#8065]**（[链接](https://github.com/nearai/ironclaw/issues/8065)）：命令名宽度不一导致描述起始位不对齐，用户使用 slash 菜单时扫描效率受影响。
- **[#8063]**（[链接](https://github.com/nearai/ironclaw/issues/8063)）：鼠标下移和键盘导航时高亮命令会移出可视区，用户被迫盲操作。
- **[#8057]**（[链接](https://github.com/nearai/ironclaw/issues/8057)）：当 identity 内容、技能片段等非 transcript 材料较多时，固定 transcript 预算会导致请求超出模型窗口而触发硬错误——在上下文较长的场景下这是一个值得优先处理的稳定性问题。

## 8. 待处理积压

- **[#7988] 刷新代码库知识图谱**（[链接](https://github.com/nearai/ironclaw/issues/7988)）— 由 ironclaw-ci[bot] 自动生成，已开放超过 6 日，属于常规 CI 产物，等待维护者确认合并，建议按例行流程处理。
- **[#8033] 移除 @ts-nocheck 预检** 已关闭。但审计共识别约 41 处冗余指令，与该 issue 关联的具体移除范围可能不止于此，提醒维护者确认剩余清理是否已排入待办。
- **[#7903]** 已开放 9 日，属于 risk: high 的架构级决策，建议尽快明确决策时间表；相关决策将直接影响后续 sandbox 工作的排期。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-04

## 1. 今日速览

今日项目活跃度**较高**，PR 合并/关闭数量达 34 条，整体呈现集中发布态势。主要动态围绕 **2026.9.4 版本发布 PR（#2618）** 展开，涵盖 renderer、main、build、openclaw、cowork 等多个模块的修复与功能完善。Issue 侧仅 1 条活跃更新，为历史遗留的 SQLite 存储层可靠性缺陷（#1071）——该项已因长期无实质性进展被标记为 stale，值得维护者关注。无新版本 Release 发布。

## 3. 项目进展

今日大量 PR 随 #2618 Release 分支批量合并，主要进展如下：

**Browser（浏览器）模块改进：**
- #2617 [OPEN] 改进应用内登录与标签页控制（登录成功/失败反馈可关闭、凭据设置页保存后不关闭、页面下拉替换等）
- #2615 支持 Windows Unicode 安装路径下的浏览器 MCP 启动器（切换 UTF-8 读取 Electron 路径）
- #2503 为 Electron 文本输入控件添加"剪切/复制/粘贴/全选"右键菜单

**配置与 CI：**
- #2614 修正测试模式服务端 API 地址（从开发内网切回标准内网）
- #2616 限制 CI 中 Skill 审计时长：禁用锁文件安装的隐式审计，每次 Skill 显式审计上限 90 秒

**订阅与发布：**
- #2613 完善订阅恢复引导：支持从分享文件/部署站点恢复订阅、区分自动恢复与重新部署两种模式、补充埋点与测试

**Chat/Cowork（协作聊天）：**
- #2612 登录刷新期间保留模型显示（防止模型元数据短暂为空时界面跳动，且不允许运行过期模型）
- #2573 未认证用户无自定义模型时提交聊天消息，展示欢迎登录弹窗
- #2596 跟踪聊天登录 CTA 点击，完善分析事件

**UI/UX 打磨：**
- #2501 Skill 升级进度遮罩改为渲染在 body 上覆盖全应用
- #2599 多实例 Bot 卡片限制为两列响应式布局
- #2603 语音配额用尽提示改为新免费试用订阅文案
- #2532 侧边栏登录推广提示 5 秒后淡出

**合计评估：** 项目在 2026.9.4 版本分支上完成了一次较全面的质量收尾，重点覆盖浏览器 MCP 稳定性、订阅恢复流程完整度与聊天登录引导，属于 **小步快跑、持续打磨** 型迭代，无重大架构级变化。

## 4. 社区热点

今日唯一有动态的 Issue 为 **#1071**（SQLite 存储层缺陷报告），已标记 `[stale]`，1 条评论，讨论热度一般。完整 PR 列表均无评论数据，社区互动以代码提交为主。

**最值得关注**：PR #2618（Release/2026.9.4）一次性关闭 34 条 PR，属于版本集成分支，非讨论热点。

**社区诉求分析（来自 PR 内容）：** 多条 PR 针对认证/登录场景的用户引导优化（#2573#2617#2612 等），侧面反映**未登录/过期会话场景下的用户体验与状态管理**是当前产品迭代的重点关注方向。

链接：[#1071 Issue](https://github.com/netease-youdao/LobsterAI/issues/1071) | [#2618 PR](https://github.com/netease-youdao/LobsterAI/pull/2618)

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue/PR | 描述 | 是否有 Fix |
|---|---|---|---|
| **高** | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | SQLite 存储层三缺陷：ON DELETE CASCADE 失效致孤儿消息累积、save() 非原子写致崩溃损坏、storeInitPromise 超时后永久故障 | ❌ 无（已 stale） |
| 中 | [#2615](https://github.com/netease-youdao/LobsterAI/pull/2615) | Windows Unicode 安装路径下浏览器 MCP 无法启动 | ✅ 已合并 |
| 中 | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | 应用内登录成功/失败反馈不可清除、凭据页保存后页面误关 | ✅ 部分合并（仍为 OPEN） |
| 低 | [#2614](https://github.com/netease-youdao/LobsterAI/pull/2614) | 测试模式服务端 API 指向错误的开发内网地址 | ✅ 已合并 |
| 低 | [#2612](https://github.com/netease-youdao/LobsterAI/pull/2612) | 登录刷新期间模型显示丢失（不允许运行过期模型） | ✅ 已合并 |
| 低 | [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) | 文本输入控件缺少编辑右键菜单 | ✅ 已合并 |

## 6. 功能请求与路线图信号

今日无新的 Feature Request Issue 提交。从合并/活跃 PR 中识别的产品方向信号：

- **订阅恢复与状态同步**（#2613）：区分自动恢复与重新部署、跨端恢复引导，暗示订阅策略在复杂化（免费试用 → 付费 → 恢复），预计后续将持续完善订阅生命周期管理
- **登录/会话体验优化**（#2573#2617#2612）：未认证用户引导、登录刷新时状态保持、反馈可清除——认证流程正在从"能否登录"向"登录体验完善"演进
- **CI 基建强化**（#2616）：Skill 审计时长限制，说明 Skill 生态规模增长对 CI 耗时已产生压力

以上方向大概率已随 #2618 进入 2026.9.4 版本，或将在下一迭代中继续深化。

## 7. 用户反馈摘要

今日数据中用户反馈有限：

- **痛点（来自 #1071）：** 用户（MaoQianTu）在审计 SQLite 存储层时发现，外键 CASCADE 删除未生效导致孤儿消息随使用无限累积；`save()` 非原子写入在崩溃场景下可能损坏数据库；`storeInitPromise` 一旦超时则进入永久故障态，无法自恢复。**但该 Issue 已 stale**——说明问题自 3 月提出至今约 5 个月未获维护者明确回应或修复，用户诉求可能已搁置。

- 其余 PR 均无用户评论数据，无法进一步提取反馈。

## 8. 待处理积压

| 项目 | 状态 | 说明 |
|---|---|---|
| [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) | OPEN + stale（2026-03-30 创建，最近更新于今日但仅因 stale 标记） | SQLite 存储层三个数据可靠性缺陷，涉及潜在**数据丢失**风险，已 5 个月无实质进展。若确认修复优先级低，建议明确关闭并说明理由；若影响真实用户，应尽快排期 |

**维护建议：** 项目中 PR 合并效率较高（34/39 今日关闭），但 Issue 侧的响应明显不足——建议为 #1071 指定负责人评估 SQLite 层风险等级并给出明确结论，避免关键可靠性反馈长期悬置。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

```markdown
# Moltis 项目动态日报 — 2026-09-04

## 1. 今日速览

今日 Moltis 项目整体活跃度较低。过去 24 小时内无新 Issue 产生或关闭，无新版本发布；仅有 1 条新增 PR（#1258），目前处于待合并状态，尚未有 PR 被合入主干。总体而言，项目今日处于低活跃但有序推进的状态，核心关注点集中在外接 Agent（AGY）的流式集成能力上。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，因此主干分支未发生变更。值得注意的是，新增的 [#1258](https://github.com/moltis-org/moltis/pull/1258) 提出了 AGY 流式传输的一等公民支持方案，若能顺利合入，将显著降低用户在 Moltis 中使用 AGY CLI 的配置门槛，并补齐对外部 Agent 的实时流式输出支持。

## 4. 社区热点

今日仅有一条 PR 更新，尚无用户评论或反应数据。

- [#1258 feat(external-agents): add direct AGY streaming](https://github.com/moltis-org/moltis/pull/1258) — 作者 GTanger（创建/更新于 2026-09-04）

该提案的核心诉求是让 Moltis 能够直接复用 AGY 官方 CLI 的 Google OAuth 会话，省去用户额外配置 Gemini CLI 或 API Key 的步骤，并将 AGY 版本化的 stream-json 输出翻译为 Moltis 内部格式。背后反映了用户对 **减少外部工具链依赖、简化多 Agent 集成流程** 的迫切需求。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue 提出。不过，[#1258](https://github.com/moltis-org/moltis/pull/1258) 中提出的 "直接 AGY 流式传输" 方案释放了强烈的路线图信号——项目正在向 **外接 Agent 生态的深度兼容** 方向演进，尤其是针对 Google 系工具链（OAuth 会话复用）。该 PR 涉及的流式传输适配层（Moltis text/reasoning 格式转换）若被采纳，可能为后续接入更多第三方 Agent 奠定架构基础。根据 PR 当前状态，此能力有望进入下一版本，值得关注。

## 7. 用户反馈摘要

今日无 Issue 评论或讨论，暂无新的用户痛点或满意度反馈可供提炼。

## 8. 待处理积压

今日无长期未响应的重要 Issue 或 PR 需要提醒（当前唯一活跃 PR #1258 仍处于正常时效窗口内）。

```

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-04

---

## 1. 今日速览

项目整体活跃度**高**：24 小时内 32 条 Issue 更新（21 活跃/11 关闭）与 39 条 PR 更新（24 待合并/15 已合并关闭），社区参与热度持续攀升。今日无新版本发布，当前动态集中于 **2.2.x 分支的稳定性修复与功能打磨**。最受关注的话题是 QwenPaw Hub 多租户版（#7318，21 条评论）即将随 2.2.0 推出，社区讨论热情高涨；同时安全沙箱突破（#7511）、会话卡死（#7534）、cron 重复调度（#7476）等稳定性问题的报告密度显著增加。值得关注的是部分 PR（#7497、#7504）涉及安全管控路径的修复，体现了项目组对安全问题的快速响应。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

> 数据说明：PR 列表内 `comments` 字段均标注为 undefined，以下条目基于 PR 摘要信息进行分析。

**核心功能推进（以下 PR 均已合入/关闭）：**

| PR | 内容 | 影响 |
|---|---|---|
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) — [merged] | **workspace 级 Skill 预加载配置**：为可信核心/高频 Skill 增加可选 `preload` 设置 | 减少新会话首轮不必要的工具发现调用，使围绕特定 Skill 构建的 workspace 获得更快响应 |
| [#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) — [merged] | **MCP 工具白名单执行路径修复**：`card.config.tools` 此前仅用于控制台展示，未在真实 agent 执行路径生效 | 修复了已禁用 MCP 工具仍可被模型调用的安全缺陷 |
| [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) — [merged] | **修复 Loop 模式选择状态丢失** | 解决用户在 composer 菜单选择 Goal/Mission 模式但后端实际以默认模式运行的问题 |
| [#7048](https://github.com/agentscope-ai/QwenPaw) 相关 PR 系列 | 桌面端启动路径优化（Playwright Chromium 安装耗时、渠道模块全量导入）对应的 [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023)、[#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) 均已关闭 | 启动阻塞问题得到处理 |

> ⚠️ 说明：今日合并的具体 PR 集合中，部分 Issue/PR 关联关系（如 #7023、#7367、#7545 的关闭原因）在原始数据中未标明对应合入 PR，以上仅标注为"已关闭"，具体关闭方式需以 GitHub 记录为准。

**重大功能储备（以下为重要的待合并 PR）：**

- [#7497](https://github.com/agentscope-ai/QwenPaw/pull/7497) — **Sensitive path 保护升级**：即使治理策略为 `OFF` 模式，涉及敏感路径的工具调用也将被直接拒绝，减少安全配置缺口 — 恰与 #7511 安全沙箱事件形成呼应
- [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) — **Console 侧边栏与设置界面全面重构**
- [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) — **插件热加载与回滚安全**：失败更新不再让用户停留在半应用状态
- [#7538](https://github.com/agentscope-ai/QwenPaw/pull/7538) — **运行时环境变量管理的统一重构**
- [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)（标记 DO NOT MERGE）— **QwenPaw Mobile 移动端原生体验**：基于 Expo/React Native 的 Android/iOS 客户端

---

## 4. 社区热点

### 🔥 最高热度：#7318 — QwenPaw Hub 多租户版（21 条评论，3 👍）
[Issue #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)

QwenPaw 最初是个人 AI 助手，但社区反复提出"如何更好为团队运行"的需求。QwenPaw Hub 正是对这一诉求的首次回应。关联需求包括 #2324（多用户访问与管理员控制等）。这代表了产品从个人向团队/多租户演进的关键信号，社区正在积极参与方向投票。

### 次高热度：
- **[#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505)（12 条评论）— 局域网 LLM Server 客户端频繁断连**：用户报告访问 LM Studio 时 client disconnect 导致频繁重试最终超时。此问题反映了本地/局域网部署场景下的网络健壮性欠缺。
- **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)（12 条评论，已关闭）— 多步骤任务无提示中断**：典型用户抱怨——模型输出如 "Now 2.1, 3.1, 3.2. Let me do all three." 即停止，需要用户手动说"继续"才恢复，影响长任务的自动化体验。
- **[#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)（9 条评论，已关闭）— 安全沙箱被突破**：这是一个安全公告类 Issue，很快被关闭，推测可能转向私下处理或已有热修复方案。**建议维护者确保安全事件处置有公开透明的过程追踪。**

**社区诉求分析**：热点呈现三类需求集群 — ① 从个人走向团队的部署形态（Hub 多租户）；② 本地/局域网部署的网络稳定性；③ 长任务自主执行的可靠性和透明度。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度

| Issue | 描述 | 状态 |
|---|---|---|
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) — 安全沙箱被突破 | 引用了知乎外部文章，属于安全漏洞披露。已关闭 | ❌ 无对应 fix PR 公开可见，需确认修复方式 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) — 飞书会话静默卡死 | queue consumer 高优消息处理后长驻卡死，无 Traceback 无崩溃，新消息无法新建消费者，会话永久失联 | ⚠️ 无 fix PR，已创建 1 天仍 OPEN |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) — 任务中发消息触发 409 | 任务执行期间用户通过对话框提交文件触发 409 错误，用户质疑为何不放入消息队列 | ⚠️ 无 fix PR |

### 🟠 中严重度

| Issue | 描述 | 状态 |
|---|---|---|
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) — 局域网 LLM 频繁 client disconnect | LM Studio Server 场景下重试风暴致超时失败 | ⚠️ 无 fix PR |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) — cron 任务 misfire 窗口内重复调度 | 备份脚本被触发两次生成重复备份 | ⚠️ 无 fix PR |
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) — ReMe 后台 embedding 任务失败 | OpenAI 兼容 embedding 后端报 "Dependency as_embedding:default accessed before start()" | ⚠️ 无 fix PR |
| [#7552](https://github.com/agentscope-ai/QwenPaw/issues/7552) — Loop 模式选择不生效 | composer 选 Goal/Mission 后后端收到裸消息，未带 `/goal` 前缀 | ✅ 已有 [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) merge 修复 |

### 🟡 低严重度

| Issue | 描述 | 状态 |
|---|---|---|
| [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) — 火山引擎 Ark API 400 错误 | 请求 input 以 assistant 文本结尾时被拒（"MissingParameter: partial"） | ⚠️ 无 fix PR |
| [#8023](https://github.com/agentscope-ai/QwenPaw/issues/7023)（已关闭）— Desktop 启动阻塞 | 每次启动同步执行 Playwright Chromium 安装，无跳过/懒加载选项 | ✅ 已关闭 |
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510)（已关闭）— /memory/status 返回 500 | 2.2.0-beta.7 Desktop 端 | ✅ 已关闭 |
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367)（活跃）— console-only 启动仍需 30-45 秒 | `_load_builtin_channels()` 无条件导入全部 18 个渠道模块（lark_oapi 单个包约 18.5 秒） | ⚠️ 无 fix PR |
| [#7545](https://github.com/agentscope-ai/QwenPaw/issues/7545)（已关闭）— 桌面端右键无复制 | Desktop 与 Web 行为不一致 | ✅ 已关闭 |
| [#7555](https://github.com/agentscope-ai/QwenPaw/issues/7555)（已关闭）— Loop 模式切换后显示回"默认" | UI 状态丢失 | ✅ 由 [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) 修复 |

**观察**：约 6 个高/中严重度 Bug 仍无对应 fix PR，其中飞书会话卡死（#7534）和 409 报错（#7559）涉及会话交互核心链路，建议优先处理。启动性能（#7367）和局域网稳定性（#7505）分别折射了架构层的备选优化空间。

---

## 6. 功能请求与路线图信号

### 来自 Issues 的需求信号：

| Issue | 需求 | 可能纳入版本 |
|---|---|---|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **QwenPaw Hub 多租户**：团队级多用户/管理员控制 | **明确 2.2.0**，官方已确认为下一里程碑方向 |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | **简化模型添加流程**：目前需 4+ 步点击往返，作为 good first issue 存在已 4 个月 | 待定 |
| [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182)（已关闭） | **Workspace 级 Skill 预加载** | ✅ 已由 [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) 合入 |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | **Codex 风格的 steer mode**：agent 执行中可补充信息纠正行为（good first issue） | 长期开放（3 月创建） |
| [#7550](https://github.com/agentscope-ai/QwenPaw/issues/7550) | **Docker 镜像预装 codex cli**：或提供一键安装 | 待定，涉及镜像发布策略 |
| [#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541) | **会话按通道隔离的架构反思**：web/desktop/telegram 通道被视为不同会话导致状态分裂 | 待定，属架构级讨论 |

### 来自 PR 的路线图信号：

- **PawPort 迁移子系统**（[#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)，OPEN）— 可从 Codex/Qoder 导入配置、技能、插件、项目与近期工作，标志着从"单 agent"走向"多 agent 生态互操作"
- **移动端原生体验**（[#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)，DO NOT MERGE）— 虽标记勿合，但存在即表明项目组已规划移动端产品形态（Expo/React Native，复用 QwenPaw 后端服务）
- **统一运行时环境管理**（[#7538](https://github.com/agentscope-ai/QwenPaw/pull/7538)，OPEN）— 环境变量集中化，含加密存储与继承覆盖规则
- **MCP 工具调用超时配置**（[#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)，OPEN）— 默认 300 秒，可配置

---

## 7. 用户反馈摘要

### 核心痛点：

1. **长任务自主性不足**：用户在 #6921 中多次报告模型输出阶段性总结后"无提示停止"，需手动说"继续"才恢复。真实使用场景为多步数据核验/批处理任务，期望 agent 能连续推进而非每步等待确认。

2. **会话状态管理缺陷**：用户在 #7555 中反馈 Loop 模式选择状态在导航切换后丢失且无明确指示；#7559 中质疑为何任务执行期间新发消息触发 409 而非入队。综合反映出**会话交互模型在前端状态与后端任务队列之间的衔接存在问题**。

3. **本地/局域网部署的网络健壮性**：用户（yjyz1011）在 #7505 中报告局域网环境中 LM Studio Server 频繁 client disconnect → 重试风暴 → 最终超时。这表明 QwenPaw 与自托管 LLM 服务的连接管理需要更好的重试退避策略。

4. **启动/初始化体验仍待提升**：#7367 反映仅 console 渠道启动仍需 30-45 秒（强制导入 18 个渠道模块）；#7023（已关闭）反映 Playwright Chromium 安装阻塞启动就绪路径。用户对"轻量使用场景不应为全量能力买单"有明确期待。

5. **Desktop UI 一致性问题**：#7545 报告桌面端聊天栏右键无"复制"选项，web 端正常。类似 UI 细节差异影响用户跨端切换的顺畅度。

### 满意的信号：

- Loop 模式选择无效（#7552）和 UI 状态回退（#7555）在 24 小时内即被 [#7560](https://github.com/agentscope-ai/QwenPaw/pull/7560) 修复，社区对响应速度应有正面感知。

---

## 8. 待处理积压

### ⚠️ 长期未响应的开放 Issue（提醒维护者关注）：

| Issue | 创建时间 | 已存活 | 备注 |
|---|---|---|---|
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) — Codex 风格 steer mode | 2026-03-18 | **~170 天** | 标记 good first issue 但长期未获分配 |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) — 简化模型添加流程 | 2026-05-04 | **~123 天** | 同上，good first issue 可作为新贡献者入口的候选 |
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) — 全渠道模块强制导入致启动慢 | 2026-08-28 | 7 天 | 影响所有仅用 console 的部署，且存在明确的架构改进空间 |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) — 局域网 LLM 断连重试风暴 | 2026-09-02 | 2 天 | 高热度（12 评论），但尚无 fix PR 或维护者回复记录 |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) — cron misfire 窗口内重复调度 | 2026-09-01 | 3 天 | 重复执行可能导致数据破坏，优先级应上调 |
| [#7497](https://github.com/agentscope-ai/QwenPaw/pull/7497) — **PR**：OFF 模式下的敏感路径拒绝 | 2026-09-02 | 2 天 | 安全相关 PR 已 OPEN 2 天，建议尽快安排 Review 与合入 |

### 建议关注：

- **安全事件透明度**：#7511 关闭后无公开的跟进说明或 advisory，若已通过非公开渠道修复，建议在后续 release notes 或安全公告中说明处置过程，以维护社区信任。
- **Hub 2.2.0 的发布节奏**：社区对多租户版本期待较高（#7318 已持续讨论数天），建议将其路线图与 #2324 中提及的多用户/管理员能力需求保持同步沟通，明确发布范围。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-04

## 1. 今日速览

ZeroClaw 在过去 24 小时内维持较高的社区活跃度：共产生 17 条 Issue 更新（其中新开 4 条）和 50 条 PR 更新，虽然仅 3 个 PR 被合并/关闭、0 个新版本发布，合并节奏相对放缓，但新 PR 提交量充裕（47 个 PR 处于开放状态）。安全与稳定性类议题持续占据中心位置——credentials chain 验证缺失（#9328）、RUSTSEC 安全公告豁免（#9899）等高危 issue 虽有进展但仍未闭环。今日值得关注的新信号包括：两个针对交互式 agent 会话与 ZeroCode 工作目录的 S1 级（workflow blocked）新 Bug，以及 Anthropic adaptive-thinking 模型适配 PR 的提出（#10611），表明社区对"thinking 模式"与模型演进兼容性的关注正在升温。CI 基础设置（Rust 1.98.0 验证 #10048）与文档域名迁移至 zeroclaw.com（#10616）也在稳步推进中。开源健康度总体良好，但"新开快、合并慢"的现象需留意。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

过去 24 小时无 PR 被合并。以下为今日关闭/合并的 3 个 PR 及整体推进情况：

- **[PR #10614 (已关闭) — fix(runtime): harden bounded recovery and completion]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10614)：面向长 channel turn 的有界安全进度流式推送、限定的工具失败一次性修复与恢复逻辑强化。该 PR 与其后续版本 #10615 为同一工作线，表明该修复已进入新一轮迭代。
- **[PR #10616 (已关闭) — chore(docs): move docs and site links to zeroclaw.com]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10616)：将文档自定义域名及 master 分支上残留的 `zeroclawlabs.ai` 引用全部切换为 `zeroclaw.com`，标志着项目品牌域名统一的工作接近完成。

此外，今日有 3 个 issue 被关闭，其中较为重要的是：

- **[Issue #9811（已关闭）— /health 将从未连接的 channel 报告为健康]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9811)：Telegram channel 配置无效 bot token 时 `GET /health` 仍返回健康状态的误报缺陷已解决。
- **[Issue #10238（已关闭）— ZeroCode 显示过期 Connected 状态]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10238)：daemon 退出后 ZeroCode 仍渲染绿色 Connected 页脚的 UI 状态同步缺陷已关闭。

整体来看，项目主要精力集中在 runtime 恢复机制的加固、CI 基础设置的调优以及对高危安全与可见性缺陷的战役式处理上。

## 4. 社区热点

- **[Issue #9328 — [Bug]: verifiable-intent evaluates constraints without verifying the credential chain]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)，评论 14 条。安全领域的长期焦点。`vi_verify` 的 `evaluate_constraints` 直接信任调用方传入的数据，绕过了链式验证器已建立的信任前提。该 issue 标签集合（security, priority:p2, risk:high, no-stale）显示这是一个已被接受、持续跟进的议题。14 条评论表明参与者对修复路径存在实质性讨论。
- **[Issue #7108 — feat(ci): improve cached Rust builds and CI critical path]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)，评论 7 条。社区对 15-20 分钟 PR CI 时长的持续不满已形成讨论热点，要求通过 Rust 构建缓存与任务调度的优化来缩短关键路径。
- **[Issue #10068 — 交互式 agent 会话上下文被错误限制在 32K tokens]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)，评论 5 条。用户配置的 `max_context_tokens=131072` 被忽略、会话实际按 32,000 tokens 截断的问题引发了围绕 runtime/daemon 相关行为的讨论。

## 5. Bug 与稳定性

按严重程度排列：

**S1 — workflow blocked（2 个，今日新开）**

- **[Issue #10609 — zerocode 忽略启动目录并强制以 agent workspace 作为 cwd]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10609)。本地启动 `zerocode` 会话时工作目录被强制切至 agent 配置的 workspace，阻塞了依赖启动目录的工作流。尚无关联 fix PR。
- **[Issue #10603 — OpenCode providers 从不发送 x-opencode-session header]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)。影响 Go 模型兼容性并可能触发账号风控，已有 1 👍。尚无关联 fix PR。

**S2 — degraded behavior（2 个，今日更新）**

- **[Issue #10068 — Interactive agent session caps context at 32,000 tokens, ignoring max_context_tokens = 131072]** — 更新于今日，见社区热点部分，尚无关联 fix PR。
- **[Issue #9905 — Discord audio transcription manager 从未绑定到活动 agent provider]** — 已关闭。见下方说明。

**高危安全议题（持续跟进中）**

- **[Issue #9328 — verifiable-intent 凭据链验证缺失]** — 见社区热点。
- **[Issue #9899 — RUSTSEC-2026-0247: bitmaps 3.2.1 需分级移除豁免]** — 处于 blocked 状态，security CI 持续失败。此项直接影响发布门禁。

**已关闭的 Bug（修复已在流程中或已完成）**

- **Issue #9811**（从未连接的 Telegram channel 被 /health 误报为健康，P1）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9811)
- **Issue #9905**（Discord 音频转写管理器未绑定活动 provider，P2）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9905)
- **Issue #10238**（ZeroCode 显示过期 Connected 状态，P2）— [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10238)

**今日新报告的 Bug：** 今日新开 4 个 Issue（#10617、#10609 等），S1 级别 Issue 集中在 zerocode TUI（#10609）与 provider 层（#10603），显示工具链使用体验相关 Bug 正在集中暴露。

## 6. 功能请求与路线图信号

- **Anthropic adaptive-thinking 模型适配** — **[PR #10611 (OPEN) — feat(providers): adapt Anthropic and Bedrock to adaptive-thinking Claude models]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10611)，标注了 `provider:anthropic`、`provider:bedrock` 等标签。Fable 5.1/5、Opus 4.7/4.8/Opus 5、Sonnet 5 等新世代 Claude 模型拒绝固定 thinking budget 和采样参数。结合今日新开的 **[Issue #10617（thinking display = "updates" 在 Fable 5.1 上返回 400）** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10617)，可以判断 Adaptive-thinking 模型的支持将是下一版本的关键新能力，且当前实现与 Anthropic API 存在 wire 格式不匹配。相关特性在 [#10529](https://github.com/zeroclaw-labs/zeroclaw/issues/10529)（thinking-display-updates beta 支持）关闭后快速浮出水面。
- **Matrix channel 语音回复支持** — **[PR #10489 — feat(channels/matrix): deliver voice replies as MSC3245 voice notes]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10489)。`TtsManager` 目前仅接入 Telegram 与 WhatsApp Web，此 PR 将语音回复能力拓展至 Matrix（MSC3245 voice notes 格式），属于渠道能力补齐。
- **CI 性能优化** — **[Issue #7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)** 与 **[PR #10607 — perf(ci): route fork PRs to Blacksmith and trim the PR gate]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10607) 共同指向：通过将编译密集的 `ci.yml` 任务路由至 Blacksmith（包括 fork PR）并压缩 PR gate 中已识别的浪费来缩短 CI 时间。
- **ACP (Code-pane) 会话的记忆连续性** — **[Issue #10570 — [Tracker]: Memory continuity for Code-pane (ACP) sessions]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10570)。此 tracker 用于协调 ACP 会话中 memory-like 连续性的阶段性落地计划。
- **安全模型选择器（Telegram）** — PR #9997 处于 blocked + do-not-merge 状态，但已被标为 `needs-author-action`，说明仍在推进中。

## 7. 用户反馈摘要

- **CI 时长是显著痛点** — Issue #7108 指出当前 PR CI 通常耗时 15-20 分钟，即便实际代码改动很小，社区对此"浪费"表达了明确不满，期望通过构建缓存和任务调度优化来缩短关键路径。相关 PR #10607 是对此诉求的直接回应。
- **渠道健康可见性不可信** — Issue #9811 的反馈揭示了观测盲区：Telegram bot token 无效时 daemon 每五秒收到 404 但 `/health` 仍报告健康。用户对基础设施可观测性的信任度因此受影响。该 issue 今日已关闭，说明修复已确认。
- **上下文截断困惑** — Issue #10068 中用户配置 131072 tokens 上限但实际会话在 32K 处截断并触发压缩。这属于 S2 降级行为，影响长对话场景的用户体验，值得关注是否掩盖了更深的配置未传递问题。
- **ZeroCode 本地开发体验受影响** — Issue #10609（S1）显示，本地启动的 `zerocode` 会话无法在启动目录中工作，被强制切到 agent 的 workspace。对本地开发流程的阻塞将被视作高优修复对象。

## 8. 待处理积压

需要维护者重点关注的高危/长期未闭环项：

- **[Issue #9328 — verifiable-intent 凭据链验证缺失（14 条评论，risk:high, status:accepted, no-stale）]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)。从 7-24 开题至今已超过 6 周，安全语义的缺陷跨度较大，处于 in-progress 状态但仍未出现直接修复的 PR（#9423 仅覆盖同一代码路径的另一半问题）。
- **[Issue #9899 — RUSTSEC-2026-0247 bitmaps 安全公告（security CI 持续失败）]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9899)，虽无 stale，但长期处于 blocked 状态，对应 advisory 目前依赖 Matrix SDK dev-dependencies 中的 `imbl` 间接引入。
- **[PR #9841 — fix(sop): headless SOP runs + five defects review（XL 级，13 个标签，needs-author-action）]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)。作为 #9494 的延续，此 PR 从 8-08 至今已近一个月，一直等待作者操作，涉及 headless SOP 核心能力的推进。
- **[PR #9324 — feat(a2a): outbound client config（XL 级，A2A 协议方向核心 PR）]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)。自 7-24 提出后至今保持开放，当前标记 `needs-author-action`，叠加在 4 个 a2a_* 工具之上。如该系列持续停滞，A2A 路线图可能推迟。
- **[Issue #10048 — Rust 1.98.0 local-CI/demo/手动发布前验证]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10048)。已标记 status:in-progress、status:accepted、release-gate，是下一版本发布前的必经关卡。
- **[PR #9713 — feat(runtime): expose token accounting on history-trim events（XL 级，principal contributor）]** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)。自 8-03 起 open 至今超过一个月，标为 needs-author-action。结合 #10068 的 32K 截断问题，此项同一方向（token 消耗透明化）的推进对用户侧排障有直接价值。

---

> ⚠️ 本日报数据来源于 2026-09-04 当日 ZeroClaw GitHub 仓库快照。所有链接均为 zeroclaw-labs/zeroclaw 仓库内对应 Issue/PR 的原始地址。零新版本发布与低 PR 合并数说明当前处于积累与代码审查阶段，但不断累积的 XL 级 PR 若得到集中合并，可能带来较大版本跳跃。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*