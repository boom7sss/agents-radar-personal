# OpenClaw 生态日报 2026-09-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-01 12:03 UTC

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

# OpenClaw 项目动态日报 — 2026-09-01

## 1. 今日速览

项目日活跃度**极高**：过去 24 小时共产生 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 236 条、关闭 264 条；待合并 PR 288 条、已合并/关闭 212 条。Issue 关闭率（52.8%）与 PR 合并/关闭率（42.4%）均处于健康区间，说明维护团队消化积压的速度正在跟上新增流入。今日无新版本发布。值得关注的是：**2026.8.1 升级导致 Gateway 不可启动**的回归问题（#133813、#133984）仍是当前最高优先级热点，直接影响稳定版用户；同时 **P0 级遗留状态迁移阻塞问题**（#103076）已被标记为发布阻塞项。整体来看，稳定性问题与活跃的社区反馈并存，项目处于高迭代节奏中。

## 3. 项目进展

今日合并/关闭的重要 PR 集中在**安全边界加固、本地模型生命周期、UI 稳定性和认证修复**四个方向：

- **安全：SSRF 目标主机名黑名单** — PR #135097（OPEN，size: M，maintainer 标记）：为现有"仅允许"白名单 SSRF 策略增加了"拒绝指定目标"的配置化黑名单能力，使运营者可以在允许通用互联网访问的同时封锁特定目标，涵盖受保护的抓取、重定向、Webhook 投递等路径。
- **本地模型关闭顺序修复** — PR #134890（CLOSED，rating: 🐚 platinum hermit）：修复 Gateway 在关闭时未先停止 OpenClaw 管理的本地模型服务（如 `llama-server`）的问题——此前的行为可能导致 Gateway 报告干净关闭但下游进程仍在运行。关闭 #134649。
- **macOS 安全：阻止发现的网关继承凭据** — PR #121622（OPEN，size: XL，merge-risk 标记较多）：修复通过 Bonjour/广域 DNS-SD 发现的 macOS Gateway 可能因未认证发现标志而选中直接路由，并将上一端点凭据带到选中网关上的问题。
- **Control UI：会话目录刷新风暴** — PR #123535（CLOSED，rating: 🐚 platinum hermit）：避免窗口聚焦、浏览器/操作者在场状态变化导致的冗余全量刷新。
- **Claude CLI OAuth 在 Control UI 中保持可用** — PR #125471（CLOSED）：修复 Gateway 重启后 Claude CLI OAuth 刷新所有权丢失的问题。
- **安装策略警告需显式确认** — PR #116489（CLOSED）：`security.installPolicy` 现可返回 `warn`，交互式 CLI 安装先展示边界审核信息，经授权操作者确认后再决定是否继续，收紧可疑插件/技能安装流程。
- **测试工程：Vitest 分片计时键稳定化** — PR #120105（CLOSED，rating: 🦞 diamond lobster）：同一组测试文件的重新排序不再分裂计时历史。
- **Feishu 文档 API 结果校验** — PR #135106（OPEN，rating: 🐚 platinum hermit）：HTTP 200 但错误码非零时不再误报成功。
- **Control UI 性能：设置英文文案延迟加载** — PR #135131（OPEN，rating: 🦞 diamond lobster），关联 #121497。

总体而言，安全与认证是今日合并 PR 的核心主线；本地模型生命周期修复为部署运维带来务实改进。

## 4. 社区热点

今日讨论热度最高的条目集中在**安全注入、会话状态丢失和多代理路由**三大痛点上：

1. **#45740（已关闭，17 条评论，platinum hermit 评级）** — `gh-issues` skill 将未清洗的 issue 正文直接注入子代理提示词，构成提示注入攻击面。该 issue 已打上 `needs-security-review`、`needs-live-repro` 标记并关闭。社区对"技能生态自身安全"的关注度高，👍 仅 1 但讨论充分，说明属于专业向安全问题而非大众热点。
2. **#38327（OPEN，15 条评论，👍 3，P1）** — 2026.3.2 起 embedded agent 在 google-vertex/gemini-3.1-pro-preview 上触发 "Cannot convert undefined or null to object"，被标记为回归（regression）。这是长期未修复的 P1 模型兼容性回归，社区持续关注。
3. **#96834（OPEN，14 条评论，platinum hermit）** — WhatsApp 1:1 图片消息导致主通道约 3 分钟阻塞后再处理，多模态请求搁浅 `active_reply_work`。涉及会话状态与消息丢失，是端到端渠道可用性的关键问题。
4. **#85030（OPEN，13 条评论，👍 6，P1）** — MCP 工具未能注入子代理会话：`bundle-mcp`、按工具的 allowlist、按代理的 allowlist 全部被忽略。这是今日评论热度与 👍 数双高条目，反映社区对"工具注入一致性"有强烈诉求。
5. **#53763（OPEN，13 条评论）** — 请求内置无头浏览器作为一等工具，摆脱对外部 Chrome/第三方 API 的依赖。该请求在功能类中热度最高，与正在进行的 `browser` 系列 PR（#126255 等）呼应，说明路线图方向与社区期望一致。

**隐藏信号**：P1 级多代理错误 `AgentSelectionRequiredError` 日志洪泛（#126360）虽评论数中等（10），但其覆盖 logbook 插件、Control UI 全局 RPC 与系统代理回合三个层面，是"explicit ownership"模式下系统性缺口，值得关注。

## 5. Bug 与稳定性

按严重程度排列：

- **[P0 / 发布阻塞] 遗留状态迁移源仍阻塞 Gateway 启动** — #103076（CLOSED，diamond lobster 评级，`impact:ux-release-blocker`）：尽管 #102780 修复了归档冲突和 Codex sidecar 所有权问题，仍有至少五个遗留状态迁移源（Matrix、Memory Core、update-check、Codex sidecar 等）阻塞启动。**已关闭但未见对应修复 PR，后续需确认落地状态。**
- **[P1 / 稳定版回归] 2026.8.1 升级导致 Gateway 不可启动** — #133813（CLOSED，👍 2）与 #133984（OPEN）：升级后 Gateway 崩溃循环，`doctor --fix` 被 `ExecApprovalsMigrationRequiredError` 阻塞（#133813）；#133984 进一步报告五处独立缺陷、约需十余步手动修复，且 `doctor --fix` 非交互跳过配置键迁移。**这是当前对稳定版用户影响最直接的回归。**
- **[P1 / 会话状态] MCP 工具未注入子代理** — #85030（OPEN，👍 6）：`sessions_spawn` 子代理仅获得内置工具，`bundle-mcp`、按工具/按代理 allowlist 均被忽略。**无已关联的 fix PR。**
- **[P1 / 消息丢失] Feishu/Telegram 渠道分发失败** — #114020（OPEN）：`runChannelInboundEvent` 要求 `runDispatchLifecycle`，2026.7.2-beta.4 升级后 Feishu 入站全部失败（Telegram 同路径）。**无已关联的 fix PR。**
- **[P1 / 崩溃循环] Gateway V8 堆 OOM，重启恢复后形成 7 次核心转储循环** — #115424（OPEN，platinum hermit）：重启恢复热续主会话，反而把一个崩溃放大成核心转储循环。**无 fix PR。**
- **[P1 / 消息丢失] Telegram 看门狗释放的持久更新被误判为 tombstone** — #127229（OPEN，diamond lobster，bulk-filed）：连续三条持久化 Telegram DM 在传输追踪器稳定前被误标记。**无 fix PR。**
- **[P1 / 消息丢失] WhatsApp 图片消息楔住主通道约 3 分钟** — #96834（OPEN，platinum hermit）：多模态运行搁浅 `active_reply_work`。**无 fix PR。**
- **[P1 / 进程泄漏] Hook/工具子进程未回收，僵尸进程累积拖慢运行时** — #97616（OPEN）：属回归，需 maintainer 补充信息。**无 fix PR。**
- **[P1 / 认证] 2026.3.2 起 gemini-3.1-pro-preview 报 "Cannot convert undefined or null to object"** — #38327（OPEN，👍 3）：长期未修复的 P1 回归。**无 fix PR。**
- **[P2] Cron 孤立 agentTurn 恢复后仍被误判为致命错误而跳过投递** — #94846（CLOSED）：修复形状已明确（`fix-shape-clear`），等待维护者评审。**属修复中。**
- **[P1 / 会话状态] `AgentSession.this.model` 在 /model 切换后从不刷新** — #92415（CLOSED，stale）：影响 contextWindow、reasoning、thinkingLevelMap 等 8 处后置读取。**已关闭但修复状态未知。**
- **[P2 / DB 性能] agent/session DB 迁移后缺少 ANALYZE 导致查询计划器使用陈旧统计，15s 会话操作 + 30-57s 事件循环饥饿** — #119884（CLOSED）：大存储场景下性能回归，已有关联修复。**已关闭，修复状态需确认。**

**有已关联 fix PR 的活跃 Bug：**

- PR #133390（OPEN）：模型调用终止语义分类为错误（流/结果信号失败时）。
- PR #134987（OPEN，`merge-risk: 🚨 session-state`）：压缩剪枝中已修复消息计数与保留。
- PR #133372（OPEN，`merge-risk: 🚨 session-state`）：保留压缩中聚合引导截断通知。

## 6. 功能请求与路线图信号

- **内置无头浏览器**（#53763，OPEN，13 条评论）：请求将无头 Chromium 作为一等工具打包，摆脱外部依赖。与 PR #126255（OPEN，将代理浏览器默认切换为 Browser Harness，关联 #19289）方向一致，**有望进入后续版本**。
- **动态模型发现（OpenRouter 及更多）**（#10687，OPEN，P3，👍 3）：当前模型选择为静态目录，需动态拉取 OpenRouter 等快速变动目录。信号明确但优先级较低。
- **按模型的用量记录与成本追踪**（#13219，OPEN，P2，👍 1）：当前 JSONL 中有用量数据但无聚合视图。呼声存在但热度不高，暂无明显进展。
- **技能能力清单 RFC v0**（#74594，OPEN，P2）：在使用前可视化技能能力，减少"黑盒"技能带来的信任问题。与 #45740 提示注入事件形成呼应，**社区对技能可见性与安全性的诉求正在汇聚**。
- **ACP 会话技能上下文注入**（#43564，OPEN，P2）：让技能进入 Codex/Pi/OpenCode/Gemini 会话上下文。与 #85030 的 MCP 注入问题本质相关（同一"子代理/会话工具注入"主题），**建议合并考虑优先级**。
- **Webchat/Control UI 内联按钮支持**（#46656，CLOSED，stale）：`buttons` 参数仅 Telegram 生效，Webchat 静默丢弃。已 stale 关闭，但功能缺口仍在。
- **后更新钩子系统**（#79170，CLOSED，stale）：本地补丁与自定义任务在每次 `openclaw update` 后丢失。已 stale 关闭，社区需求仍然存在。
- **外部 HITL 插件审批 API**（#82336，CLOSED，stale）：已 stale 关闭。
- **SSRF 目标黑名单**（PR #135097，OPEN）：今日新增安全能力，方向正确，预计后续会迭代。

**路线图研判**：浏览器能力整合（#126255 + #53763）与控制 UI 命令/JSON 完善（#135131、#123356、#133829）是当前最活跃的两条功能线。

## 7. 用户反馈摘要

- **升级即断裂是最大痛点**：两位用户报告 2026.8.1 升级后 Gateway 崩溃（#133813 称"直接变砖"，#133984 称"需约十几步手动修复"），且 `doctor --fix` 无法恢复。此类"升级灾难"事件直接侵蚀信任，建议将 8.x 迁移路径作为最高优先修复项。运营中已受影响的用户明确要求**安全升级/回滚指引**（#123799，生产环境受 Codex compact 404 影响）。
- **渠道消息丢失令人挫败**：WhatsApp 图片楔入 3 分钟（#96834）、Feishu 全渠道失效（#114020）、Telegram 持久消息被误判（#127229）——多条生命渠道同时出现消息级故障，对依赖 OpenClaw 做日常自动化的用户影响显著。
- **资源泄漏与僵尸进程**：hook/tool 子进程不回收（#97616）、memory-core/Codex app-server 无空闲 TTL 泄漏（#125344）、Gateway 堆 OOM（#115424）——用户在多篇报告中描述"运行数日后缓慢劣化直至崩溃"的模式，整体稳定性信心受挫。
- **推理内容泄露**：2026.6.5 起内部推理/思考被暴露给用户（#91804，P1，安全），用户定性为"重大隐私与安全事件"。
- **多代理场景工具注入不一致**（#85030，👍 6）：`sessions_spawn` 子代理只拿到内置工具，用户已给出清晰的复现路径。高 👍 数说明影响面广。
- **小资源实例体验不佳**：DigitalOcean 2vCPU/4GB 用户反映"成本不低但与体验不匹配、cron 静默失败、后台任务 UX 差，决定弃用"（#88087）——小规模部署的体验差距值得关注。
- **头铁开发者依然热爱**：即便有上述问题，仍有用户持续提交高质量复现（#133984 给出五个独立缺陷分解，#133813 明确标注"macOS LaunchAgent 安装"），社区反馈质量总体较高。

## 8. 待处理积压

以下为长期未获得有效响应或修复的重要条目：

- **#38327（P1，2026-03-06 创建）**：gemini-3.1-pro-preview 在 2026.3.2 起全面报错，已积压近 6 个月，15 条评论、👍 3，**无 fix PR**。模型兼容性问题每拖一天都在扩大受影响用户面。
- **#10687（P3，2026-02-06 创建）**：动态模型发现请求积压近 7 个月，9 条评论、👍 3，无行动。
- **#13219（P2，2026-02-10 创建）**：按模型用量/成本追踪，积压近 7 个月，8 条评论，无行动（但已标记 `linked-pr-open`，或有进行中工作）。
- **#78301（P2，2026-05-06 创建，stale 关闭）**：插件加载器静默失败问题——用户调试 `@tencent-weixin/openclaw-weixin` 耗时数小时，stale 关闭意味着**该问题可能未真正解决**。
- **#46656（P2，2026-03-14 创建，stale 关闭）**：Webchat/Control UI 内联按钮——功能缺口未修复，但被 stale 关闭，建议重新评估。
- **#79170（P3，2026-05-08 创建，stale 关闭）**：后更新钩子系统——用户明确表达了"每次更新丢失本地补丁"的痛点，但被 stale 关闭。
- **#103076（P0，2026-07-09 创建，CLOSED）**：遗留状态迁移源阻塞启动——作为 P0/发布阻塞项被关闭但**未见明确修复 PR 记录**，建议维护者补充关闭原因与修复引用，避免信息断链。

---

*数据来源：OpenClaw（github.com/openclaw/openclaw）截至 2026-09-01 的 GitHub 数据。所有链接均指向对应 Issue/PR 页面。*

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-09-01**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高迭代、强分化**的发展阶段。头部项目（OpenClaw、Hermes Agent、ZeroClaw、IronClaw）日活极高，但各自走向不同方向——或聚焦稳定性与安全加固、或加速架构级重构、或推进版本里程碑。共性诉求在多个项目中反复涌现：**MCP 工具注入一致性、会话状态持久性、多通道消息可靠性、本地模型生命周期管理与成本控制**。与此同时，安全事件（提示注入、token 泄露、数据覆盖）在不同项目中接连浮现，说明生态在规模扩张后面临**"信任赤字"**的共同挑战。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 236，关闭 264） | 500（待合并 288，合并/关闭 212） | 无 | ⚠️ 高迭代但 P0 发布阻塞 + P1 升级回归并存 |
| **Hermes Agent** | 50（活跃 41，关闭 9） | 50（待合并 48，合并/关闭 2） | ✅ v0.21.0 "Pantheon" | ⚠️ 里程碑发布后 PR 积压严重（48 待合并） |
| **ZeroClaw** | 33（活跃 29） | 50（待合并 48，合并/关闭 2） | 无 | ⚠️ 架构定型期，讨论多落地少，P0 数据丢失 Bug |
| **CoPaw (QwenPaw)** | 31（新开 17，关闭 14） | 39（待合并 23，合并/关闭 16） | ✅ v2.2.0-beta.4 / beta.5 | ✅ 高频迭代 + 快速响应，beta 阶段稳定性待观察 |
| **IronClaw** | 17（活跃 14，关闭 3） | 25（待合并 19，合并 6） | 无 | ✅ 设计系统重构 + MCP 稳定性双线推进 |
| **NanoClaw** | 8（活跃 7，关闭 1） | 26（待合并 19，合并/关闭 7） | 无 | ✅ 核心团队驱动 providers 契约重构，修复响应快 |
| **NanoBot** | 4 | 15（合并/关闭 8） | 无 | ✅ 运行时重构 + 多通道稳定性，节奏健康 |
| **LobsterAI** | 13（9 个陈旧 Issue 自动关闭） | 11 | 无 | ⚠️ 长期积压 Bug 被 stale 关闭而非修复，闭环缺失 |
| **ZeptoClaw** | 8（7 条安全审计提交） | 3（合并/关闭 2） | 无 | ⚠️ 安全基线待加固，两条 P1-critical 积压 40 天 |
| **Moltis** | 3（新开 1，关闭 2） | 5（合并 4，待合并 1） | ✅ 20260831.01 | ✅ 存量问题收敛，安全与稳定性投入明显 |
| **PicoClaw** | 1（新开 1） | 3（1 条 stale 关闭） | 无 | ⚠️ 稳定维护期，Telegram 无限编辑 Bug 十日无修复 |
| **TinyClaw** | — | — | — | 无活动 |
| **NullClaw** | — | — | — | 无活动 |

---

## 3. OpenClaw 在生态中的定位

- **优势**：生态**规模最大**（单日 500+ Issue 与 500+ PR 更新，远超 Hermes Agent 的 50+50），社区反馈质量高（用户提供多缺陷分解与精确复现路径）。维护团队消化积压能力健康（Issue 关闭率 52.8%）。安全能力推进务实（SSRF 黑名单、macOS 凭据继承修复、安装策略警告）。
- **技术路线差异**：OpenClaw 的路线图重心在**技能生态安全**（提示注入 #45740、技能可见性 RFC #74594）、**多代理工具注入一致性**（#85030）与**浏览器能力整合**（#53763 + #126255）。与 Hermes Agent 的"Bot 模式与桌面解耦"、ZeroClaw 的"架构级 RFC 重构"相比，OpenClaw 更偏向在现有架构上做**稳定性加固与功能补齐**，而非大规模重构。
- **社区规模对比**：OpenClaw 的社区体量约为 Hermes Agent 的 10 倍（按日活 Issue/PR 计），约为 ZeroClaw 的 15 倍。但这也意味着**问题暴露面更大**——升级即断裂（#133813/#133984）与消息丢失类事件（WhatsApp 楔住 3 分钟、Feishu 全渠道失效）的负面影响更广。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **MCP 工具注入一致性** | OpenClaw（#85030）、CoPaw（#7470）、Hermes Agent（#78642 等） | 子代理/会话中 MCP 工具的 allowlist 与 bundle 配置被忽略，配置与执行不一致 |
| **MCP 安全加固** | LobsterAI（#908、#2590）、Moltis（#1250/#1251） | MCP stdio 命令注入漏洞、streamable-http 传输验证缺失 |
| **会话/上下文持久性与压缩** | OpenClaw（#92415、#134987）、Hermes Agent（#8457）、CoPaw（#7447） | 长上下文丢失、压缩后记录丢失、跨会话记忆缺失 |
| **多通道消息可靠性与渠道匹配** | OpenClaw（#96834、#114020、#127229）、PicoClaw（#3343）、NanoClaw（#3085） | WhatsApp/Feishu/Telegram 消息丢失、无限重试、mention 不触发 |
| **本地模型生命周期管理** | OpenClaw（#134890）、NanoClaw（#3643） | 本地模型服务关闭顺序、硬编码超时冷杀长任务 |
| **Cron/定时任务结果投递** | NanoBot（#5620/#5513）、NanoClaw（#3696）、LobsterAI（#1107/#1108） | 运维任务结果混入个人聊天、错过运行周期的策略缺失 |
| **后台/长驻运行** | Hermes Agent（#38007、#97681）、OpenClaw | 系统托盘驻留、Agent 任务与桌面 UI 解耦 |
| **浏览器能力内建** | OpenClaw（#53763）、CoPaw（#7397） | 摆脱外部 Chrome 依赖，内置无头浏览器作为一等工具 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手，技能生态 + 多渠道（Telegram/Feishu/WhatsApp/Webchat） | 个人开发者、重度自动化用户 | 技能市场 + 插件化安装策略，Gateway 统一入口，多代理（sessions_spawn） |
| **Hermes Agent** | 桌面端优先的自主 Agent，Bot 模式 + 跨平台桌面（Windows/macOS/Linux） | 桌面用户、Bot 群聊场景 | Electron 桌面壳 + 本地后端，Bot 模式与 UI 解耦正在推进 |
| **ZeroClaw** | 架构级插件/沙箱体系（WASI），面向运行时的安全边界 | 安全敏感型部署、企业级 | WASI 插件运行时 + 细粒度沙箱策略 + 配置/内存/附件的架构 RFC 驱动 |
| **IronClaw** | 设计系统驱动的 WebUI + GitHub 工具链 + MCP 目录 | GitHub 重度用户、Web 开发者 | NEAR AI 生态集成，WebUI 设计系统重构（Epic #7781），GitHub API 优化 |
| **CoPaw (QwenPaw)** | 中文友好、记忆系统（ReMe/Embedding）+ 多租户 Hub 方向 | 中文用户、团队/企业 | DashScope/通义生态深度集成，记忆系统为核心差异化，移动端（React Native）探索中 |
| **NanoBot** | 轻量 Agent 运行时，Cron + 多通道 + MCP 客户端 | 轻量自动化用户、MCP 深度用户 | HKUDS 学术背景，Agent 运行时解耦（tools.execution 边界），ephemeral 上下文生命周期 |
| **NanoClaw** | 核心团队驱动的 providers 契约统一 + Slack/WhatsApp 渠道 | 渠道集成用户、多协议部署 | providers 契约声明与重构（#3581–#3592），CI 标签模板合规体系 |
| **ZeptoClaw** | Rust 实现的高性能轻量 Agent，安全审计驱动 | 安全敏感 Rust 开发者 | Rust 技术栈（Rust 1.97/1.98 Docker 镜像），零容忍依赖安全策略 |
| **Moltis** | 运维诊断工具链 + 沙箱执行 + 安全加固 | 自托管/容器化部署用户 | Docker 优先的本地认证判定，供应链安全固定扫描版本，doctor 诊断工具 |
| **LobsterAI** | 网易有道背景的桌面客户端，onboarding 体验优化 | 中文桌面用户 | 视频分享能力、首次运行分析埋点，钉钉定时任务集成 |
| **PicoClaw** | 轻量级代码精简为主（DeltaChat 清理），功能扩展接纳度低 | 小型部署、核心链路用户 | 刻意收敛功能广度，聚焦核心链路健壮性 |

---

## 6. 社区热度与成熟度

**第一梯队 — 快速迭代期（高活跃、高风险）：**
- **OpenClaw**：日活极高，功能迭代与稳定性问题并存，维护团队消化能力健康，但升级回归与消息丢失正在侵蚀用户信任。
- **Hermes Agent**：v0.21.0 里程碑发布后 PR 积压严重（48 条待合并），Windows 回归响应快（今日 3 个专项 PR），处于"发布后消化期"。
- **ZeroClaw**：架构 RFC 驱动，讨论热度高但合并吞吐低（48 待合并 / 2 合并），P0 数据丢失 Bug 刚被标记，处于"架构定型 + 安全补强"的密集讨论期。
- **CoPaw (QwenPaw)**：beta 快速迭代（同日双 beta 发布），Bug 与修复 PR 一一对应率高，处于"发布前冲刺期"。

**第二梯队 — 质量巩固期（中高活跃、方向明确）：**
- **IronClaw**：设计系统 Epic 驱动，修复响应好（list_repos 优化当日关闭），MCP 目录健壮性是明确短板。
- **NanoClaw**：核心团队驱动重构，修复响应快（高优先级 Bug 均有对应 PR），CI 与协作流程规范化推进中。
- **NanoBot**：运行时解耦与上下文生命周期管理推进，修复节奏高效，无遗留高危问题。

**第三梯队 — 稳定维护期（低活跃、风险积聚）：**
- **Moltis**：活跃度中等但方向清晰（4 合并 + 1 发布），安全与稳定性投入持续，无长期积压。
- **PicoClaw**：稳定维护期但功能扩展接纳度低，Telegram 无限编辑 Bug 十日内无修复。
- **LobsterAI**：迭代方向明确（onboarding、视频分享）但**积压闭环严重缺失**——5 个月前的启动崩溃 Bug 被 stale 关闭而非修复，MCP 安全 PR 搁置 159 天。
- **ZeptoClaw**：安全审计驱动但两条 P1-critical 积压 40 天，供应链安全已推进（RustSec 批量修复）但安全设计缺陷大量敞口。

---

## 7. 值得关注的趋势信号

**信号 1：技能/工具生态成为安全博弈的主战场。**
OpenClaw 的提示注入事件（#45740，17 条评论）、技能能力清单 RFC（#74594）、ZeptoClaw 的 token 明文打印/非恒定时间比较/WebSocket token 入查询参数（#653/#655/#656）、LobsterAI 的 MCP 命令注入（#908 搁置 159 天）——安全加固从"运行时边界"转向"工具与技能本体"。技能/插件的**可见性、可审计性、权限边界**将决定下一代 Agent 生态的信任基础。

**信号 2：多通道消息可靠性是规模化部署的第一道门槛。**
OpenClaw（WhatsApp 图片楔住 3 分钟、Feishu 全渠道失效、Telegram 误判 tombstone）、PicoClaw（Telegram 22.8 万次无限编辑）、NanoClaw（WhatsApp mention 不触发）——消息级故障横跨多个项目，直接冲击"Agent 作为日常自动化基础设施"的信任基础。渠道适配层（channel abstraction）的健壮性将是区分"玩具"与"生产级"的分水岭。

**信号 3：本地模型与成本控制成为真实部署诉求。**
NanoClaw（硬编码 30 分钟超时冷杀本地模型长任务）、OpenClaw（本地模型关闭顺序修复）、CoPaw（plan mode 消耗 200 credits 投诉）——本地模型生命周期管理与计费透明度已进入用户日常痛点清单。随着小资源部署（如 DigitalOcean 2vCPU/4GB 用户弃用反馈 #88087）增多，**资源效率和成本可预期性**将成为竞争要素。

**信号 4：会话持久性与工具注入一致性是两个"未完成的承诺"。**
多个项目同时暴露出：跨会话记忆缺失（Hermes #8457，评论 19 条积压 5 个月）、长上下文早期记录丢失（CoPaw #7447）、子代理工具注入不一致（OpenClaw #85030，👍 6；CoPaw #7470）、MCP 工具 seek 失败（IronClaw #8012，47,337 个工具"不可达"）。这些是 Agent 从"单轮对话"走向"持续协作伙伴"的核心能力缺口，也是生态下一阶段的**价值洼地**。

**信号 5：架构级重构与"边界划定"是头部项目的共同节奏。**
ZeroClaw 的会话传输面/附件架构/内存生命周期解耦（#9487/#9488/#6850）、Hermes Agent 的 Bot 模式与桌面解耦（#94697/#97681）、NanoBot 的 Agent 运行时解耦、NanoClaw 的 providers 契约统一——头部项目正在**为下一阶段的规模化和多场景扩展提前铺设架构基础**。对于开发者而言，选择与"边界清晰、架构演进方向明确"的项目同行，将降低长期维护成本。

**信号 6：升级即断裂正在系统性侵蚀生态信任。**
OpenClaw（2026.8.1 升级 Gateway 不可启动，#133813/#133984）、CoPaw（2.1.0→2.2.0-beta 工具结果丢失）、Hermes Agent（v0.21.0 Windows 回归）、LobsterAI（升级后首次启动崩溃，5 个月未修复即被 stale 关闭）——升级路径的健壮性成为多项目共同弱项。提供**安全降级/回滚指引**与**迁移路径测试**，将成为稳定版用户留存的关键抓手。

---

*本报告基于 2026-09-01 各项目 GitHub 公开数据生成，所有数据与结论均来自所提供材料。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-01

## 1. 今日速览

NanoBot 今日项目活跃度极高：24小时内产生 4 条 Issue 更新和 15 条 PR 更新（其中 8 条已合并或关闭），代码合并节奏明显加快，但无新版本发布。核心推进集中在 Agent 运行时重构（上下文压缩、工具执行边界提取、任务组清理）、Cron 结果投递增强、运行时上下文持久化机制（ephemeral 生命周期）以及 Telegram/WebSocket 通道稳定性修复。社区讨论热度集中在 MCP Apps 集成、Cron 结果路由和文档预览功能上，整体项目处于高频迭代、健康向上的状态。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日共有 8 个 PR 被合并或关闭，涵盖多项功能性推进：

- **Agent 运行时重构**：PR [#5569](https://github.com/HKUDS/nanobot/pull/5569)（合并）将工具调用准备、执行、批处理与安全分类逻辑从 `AgentRunner` 中提取至 `nanobot.agent.tools.execution` 边界；PR [#5430](https://github.com/HKUDS/nanobot/pull/5430)（合并）修复 `_active_tasks` 中已完成任务组未释放的问题，与今日新开 PR [#5623](https://github.com/HKUDS/nanobot/pull/5623) 形成闭环（后者为 #5428 的独立修复方案）。
- **Dream 上下文中重复注入 Bug 修复**：PR [#5622](https://github.com/HKUDS/nanobot/pull/5622)（合并）修复 Dream 合并时 `SOUL.md`、`USER.md`、`memory/MEMORY.md` 内容被重复发送两次的问题，显著降低模型请求冗余开销。
- **TUI 输入状态修复**：PR [#5621](https://github.com/HKUDS/nanobot/pull/5621)（合并）修复提交后即时输入被清空或合并的问题，保留延迟 IME 提交行为，改善 TUI 编辑体验。
- **跨通道稳定性与基础设施**：PR [#5617](https://github.com/HKUDS/nanobot/pull/5617)（合并，P1）修复 WebSocket 通道健康检查中 `SO_ACCEPTCONN` 非可移植调用问题；PR [#5615](https://github.com/HKUDS/nanobot/pull/5615)（合并）与 [#5619](https://github.com/HKUDS/nanobot/pull/5619)（合并）为 `RuntimeContextBlock` 增加 ephemeral 生命周期，支持调试上下文在请求结束后不写入持久化历史，为隐私场景铺路。
- **Cron 功能前瞻**：PR [#5620](https://github.com/HKUDS/nanobot/pull/5620)（开启）引入配置化结果投递目标与批量归档生命周期，与 Issue #5513 需求对应，尚未合并。

综合来看，今日合并集中在**运行时稳定性与架构解耦**，为后续 Agent 工具生态和上下文管理能力奠定了更清晰的边界。

## 4. 社区热点

- **Issue [#5251](https://github.com/HKUDS/nanobot/issues/5251)**（[OPEN] 3 评论）：MCP Apps 主机支持需求。该 Issue 创建近一个月仍活跃，核心诉求是为 WebUI 增加 MCP Apps 托管能力，将 MCP 调用结果从纯模型侧文本/图像产物升级为可交互应用形态，代表用户对 MCP 生态深度集成的期待。
- **Issue [#5513](https://github.com/HKUDS/nanobot/issues/5513)**（[CLOSED] 1 评论）：Cron 结果投递至可配置通道的诉求，主打将运维类任务（健康检查、日报、巡检）从个人聊天噪音中剥离。虽已关闭，但同主题 PR [#5620](https://github.com/HKUDS/nanobot/pull/5620) 仍在合并路上，可见该功能已进入实质实现阶段。
- **PR [#2078](https://github.com/HKUDS/nanobot/pull/2078)**：Zalo 通道重构 PR 已存在近 6 个月（3月16日创建），今日仍被更新，表明社区对第三方通道的持续维护意愿，但也反映该项目长期未获维护者响应。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 描述 | 状态 |
|---|---|---|---|
| P1（已修复） | PR [#5617](https://github.com/HKUDS/nanobot/pull/5617) | WebSocket 通道监听器健康检查使用 `SO_ACCEPTCONN` 在非 Linux 平台不可移植，可能导致服务误判可用性 | ✅ 已合并 |
| P1（候选回归） | Issue [#5428](https://github.com/HKUDS/nanobot/issues/5428) | `AgentLoop` 在会话任务结束后保留空 active-task 组，造成内存泄漏与状态残留 | ✅ 已有关闭的 PR [#5430](https://github.com/HKUDS/nanobot/pull/5430)，另新开 PR [#5623](https://github.com/HKUDS/nanobot/pull/5623) 提供独立修复方案 |
| P2（已修复） | PR [#5622](https://github.com/HKUDS/nanobot/pull/5622) | Dream 合并时 SOUL/USER/MEMORY 内容重复发送，导致冗余 Token 与上下文污染 | ✅ 已合并 |
| P2（已修复） | PR [#5621](https://github.com/HKUDS/nanobot/pull/5621) | TUI 提交后继续输入的文本被清空或错误合并 | ✅ 已合并 |
| P2（检测增强） | PR [#5603](https://github.com/HKUDS/nanobot/pull/5603)（已关闭） | 检测模型虚假宣称操作但实际未调用工具的行为（对应 #1697 案例） | ⚠️ 已关闭，原因未注明 |

今日修复节奏高效，无遗留的高危未修复问题。

## 6. 功能请求与路线图信号

- **MCP Apps 支持**（Issue [#5251](https://github.com/HKUDS/nanobot/issues/5251)）：需求明确、讨论活跃，是 MCP 客户端能力从"工具调用"走向"应用托管"的关键一步，大概率进入下一版本规划。
- **文档预览（HTML/.txt/.md）**（Issue [#5493](https://github.com/HKUDS/nanobot/issues/5493)）：提出者建议使用原生 iframe + `srcdoc` 实现安全沙箱预览，方案清晰、零依赖，结合现有 WebUI 基础，落地难度低，有望在短期迭代中被纳入。
- **Cron 结果可配置投递**（Issue [#5513](https://github.com/HKUDS/nanobot/issues/5513) 已关闭 + PR [#5620](https://github.com/HKUDS/nanobot/pull/5620) 进行中）：功能已开发且生命周期设计完整（含批归档），合并窗口临近。
- **Telegram 流式富文本消息**（PR [#5614](https://github.com/HKUDS/nanobot/pull/5614)）：作者已注明将尽快补充 review，功能型增强明确。
- **每会话沙箱隔离**（PR [#5283](https://github.com/HKUDS/nanobot/pull/5283)）：面向非 WebUI 通道的 opt-in 文件系统隔离方案，安全价值明确，仍在等待合并。

路线图信号：短期重点在 **Cron 生态完善 + 上下文生命周期管理**；中期看 **MCP 深度集成与通道隔离安全**。

## 7. 用户反馈摘要

- **Cron 噪音诉求**（Issue [#5513](https://github.com/HKUDS/nanobot/issues/5513)）：用户明确反应运维类自动任务（健康检查、日报、巡检）的结果混入个人聊天会话，影响体验，希望实现"自动化结果与个人会话分离"。
- **模型行为可靠性担忧**（PR [#5603](https://github.com/HKUDS/nanobot/pull/5603)）：社区报告了模型重复宣称"正在查询"但实际未发起任何工具调用的案例，用户在多次等待后仅获回应"根本还没有开始执行查询"。这表明用户对 Agent 承诺-执行一致性的要求较高，期望系统能自动识别并标记此类"空转轮次"。
- **文档预览需求**（Issue [#5493](https://github.com/HKUDS/nanobot/issues/5493)）：用户希望在聊天通道内直接预览 HTML/文本/Markdown 文档，减少切换成本，且关注安全（iframe 沙箱）。
- **MCP 扩展方向**（Issue [#5251](https://github.com/HKUDS/nanobot/issues/5251)）：社区认为 NanoBot 的 MCP 客户端能力（工具、资源、提示词）已较好，但对**调用结果交互形态**不满意——目前为模型侧文本/图像，期望 WebUI 中可直接渲染为 MCP Apps 应用。

整体评价：用户对项目功能深度和多通道一致性有较高期待，同时对运行时稳定性与 Token 效率问题反馈积极，社区整体满意度较高的同时提出明确改进方向。

## 8. 待处理积压

| 类型 | 项目 | 创建时间 | 备注 |
|---|---|---|---|
| PR（长期未合并） | [feat(telegram): support custom Bot API base URL and extra headers #4919](https://github.com/HKUDS/nanobot/pull/4919) | 2026-07-14 | 已实现自托管 Bot API 与自定义请求头能力（对应 Issue #4702），至今约 48 天未合并，可能是通道配置层面的冲突或被搁置。 |
| PR（长期未合并） | [Fix/zalo integration refactor #2078](https://github.com/HKUDS/nanobot/pull/2078) | 2026-03-16 | 存在约 5.5 个月，曾因冲突被要求重构（基于 nightly 分支模块化插件架构），今日仍有更新。若维护方无明确拒绝理由，建议给出回复或关闭策略。 |
| Issue（待响应） | [Feature: Add MCP Apps host support to the WebUI #5251](https://github.com/HKUDS/nanobot/issues/5251) | 2026-08-05 | 高价值需求，评论持续增加，暂无维护者明确规划态度，建议回应评估结论。 |
| Issue（待响应） | [增加html，.txt .md 文档等预览 #5493](https://github.com/HKUDS/nanobot/issues/5493) | 2026-08-23 | 方案已给出、零评论，说明用户意愿明确但未获维护者关注，建议确认是否纳入 roadmap。 |

长期未响应项目集中在 **Telegram/Zalo 通道配置拓展** 与 **MCP/文档交互增强**，属于社区主动提交的功能型需求，建议维护者逐一给出明确回应或转至 roadmap 管理，避免社区贡献意愿流失。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-01

## 1. 今日速览

Hermes Agent 在过去 24 小时保持极高活跃度：50 条 Issue 更新（41 条活跃、9 条已关闭）、50 条 PR 更新（48 条待合并、2 条已合并/关闭），并发布了里程碑版本 **v0.21.0 "The Pantheon Release"**（自 v0.20.0 以来约 5,800 次提交、约 2,100 个 Issue 关闭、760+ 贡献者）。今日新增 Issue 呈现明显的平台适配与稳定性修复趋势（Windows/macOS 桌面端、Docker 网络、MCP 工具链），同时功能请求聚焦持久会话记忆、时间感知层与跨平台后台运行。项目整体健康度良好，但 PR 积压（48 条待合并）值得关注。

## 2. 版本发布

**v0.21.0 (v2026.8.31) — "The Pantheon Release"**（[Release 链接](https://github.com/NousResearch/hermes-agent/releases)）

- **发布时间：** 2026 年 8 月 31 日
- **规模：** 自 v0.20.0 以来约 5,800 次提交、约 2,475 个 PR 合并、约 5,680 个文件变更、约 86.9 万行新增、约 13.5 万行删除、约 2,100 个 Issue 关闭、760+ 贡献者
- **定位：** 官方描述为 "v0.20.0 made Hermes the herald" —— 该版本在上一版基础上完成了大规模功能扩展与生态整合
- **已知问题：** 今日新增 Issue 已报告 v0.21.0 在 Windows 上的回归（见下文 Bug 与稳定性章节 #99895）

## 3. 项目进展

今日合并/关闭的 PR 数量有限（2 条），但 v0.21.0 的发布本身代表了项目自 v0.20.0 以来的巨大跨越。值得注意的进展信号包括：

- **Bot 模式持续性改进（进行中）：** PR [#94697](https://github.com/NousResearch/hermes-agent/pull/94697)（fix(bot-mode): keep active turns running after viewer detach）与 Issue [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)（Bot Group Chats should keep working after Desktop closes）相互呼应，表明项目正系统性地推进"Agent 任务与桌面 UI 解耦"的能力
- **MCP 工具链密集修复：** 多个 MCP 相关 PR 处于待合并状态（[#64216](https://github.com/NousResearch/hermes-agent/pull/64216)、[#98762](https://github.com/NousResearch/hermes-agent/pull/98762)），加上 Issue [#78642](https://github.com/NousResearch/hermes-agent/issues/78642)（mcp_tool.py god-file 分解）的推进，MCP 栈正在经历稳定性与架构双重加固
- **Windows 平台适配加速：** 今日新增 3 个 Windows 专项 PR（[#100253](https://github.com/NousResearch/hermes-agent/pull/100253)、[#100252](https://github.com/NousResearch/hermes-agent/pull/100252)、[#99895](https://github.com/NousResearch/hermes-agent/issues/99895)），表明 v0.21.0 发布后团队正快速响应 Windows 用户的回归反馈

## 4. 社区热点

**🔥 最热 Issue：**
- [#88584](https://github.com/NousResearch/hermes-agent/issues/88584)（评论 50 条）— "Automated Nous integration is blocked"：Nous 到 Enterkey 的自动合并因 `cron/jobs.py` 冲突受阻，持续两周未解决，dashboard 更新器停留在旧版本。该 Issue 评论量远超其他，反映社区对集成管线稳定性的高度关注
- [#8457](https://github.com/NousResearch/hermes-agent/issues/8457)（评论 19 条）— 持久会话记忆与跨会话搜索/自动压缩功能请求：自 4 月提出以来持续获得关注，是社区呼声最高的功能需求之一
- [#51327](https://github.com/NousResearch/hermes-agent/issues/51327)（评论 16 条，已关闭）— Linux 桌面端 Electron sandbox setuid 静默启动失败

**👍 最高赞 Issue：**
- [#38007](https://github.com/NousResearch/hermes-agent/issues/38007)（👍 12）— Windows/Linux 系统托盘后台运行支持：用户强烈希望桌面端支持关闭窗口后驻留后台，避免冷启动延迟。该需求与 Bot 模式持续运行（#97681）背后的诉求一致 —— **用户希望 Hermes 成为常驻的"个人 AI 助手"而非每次手动启动的应用**

**社区诉求分析：** 热点集中在三个方向：(1) 自动化管线（Nous 集成）的可靠性；(2) 会话与任务的持久性/后台运行；(3) 桌面端平台适配体验。

## 5. Bug 与稳定性

**P1 级：**
- [#51327](https://github.com/NousResearch/hermes-agent/issues/51327)（已关闭）— Linux 桌面端 Electron chrome-sandbox 缺少 setuid 4755 权限导致从 .desktop 启动器静默失败
- [#60323](https://github.com/NousResearch/hermes-agent/issues/60323)（开放中）— macOS 桌面端本地后端可能错过 HERMES_BACKEND_READY 信号导致启动超时（90 秒）

**P2 级（已有修复 PR 的）：**
- [#99895](https://github.com/NousResearch/hermes-agent/issues/99895) — **v0.21.0 Windows 回归：** `asyncio.start_unix_server` 在 Windows 上不可用，导致 shutdown watchdog 初始化失败（标记为 duplicate，建议关注是否已有修复）
- [#100248](https://github.com/NousResearch/hermes-agent/issues/100248) — `docker_network: false` 与 `docker_extra_args` 中 --network 组合导致每次容器启动失败（exit 125）
- [#100253](https://github.com/NousResearch/hermes-agent/pull/100253)（修复 PR 已提交）— Windows 下 `os.getppid()` 不可靠导致 false-orphan 检测

**P3 级：**
- [#99988](https://github.com/NousResearch/hermes-agent/issues/99988) — Cron 失败摘要器通过子串匹配将非认证错误误标为 "provider authentication error"
- [#61589](https://github.com/NousResearch/hermes-agent/issues/61589) — Gateway stderr 处理器向 launchd 的 StandardErrorPath 重复写入 WARNING+ 日志，导致 gateway.error.log 无界增长（已观察到 208MB）

**其他值得关注的 Bug：**
- [#94769](https://github.com/NousResearch/hermes-agent/issues/94769) — 桌面 UI 每 2–5 秒 WS 重连导致持续闪烁（多 profile 场景）
- [#99398](https://github.com/NousResearch/hermes-agent/issues/99398) — Preflight 估算器对 `reasoning` 字段双重计费，导致上下文膨胀约 42% 并引发压缩循环
- [#97029](https://github.com/NousResearch/hermes-agent/issues/97029)（已关闭）— `MCPServerTask._stdio_children_dead()` 返回值反转，导致 `hermes cron run` 下所有 stdio MCP 调用立即失败

## 6. 功能请求与路线图信号

**高潜力纳入下一版本的需求：**

- **持久会话记忆（[#8457](https://github.com/NousResearch/hermes-agent/issues/8457)）：** 跨会话搜索与自动压缩，评论 19 条，4 月提出至今持续活跃。结合 PR [#100263](https://github.com/NousResearch/hermes-agent/pull/100263)（FTS 索引健康探测）的推进，会话层正在经历基础设施加固，该功能有落地基础
- **Bot 任务与桌面解耦（[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) + PR [#94697](https://github.com/NousResearch/hermes-agent/pull/94697)）：** Gateway 持有权限 + 同 gateway runner + 跨 gateway 传输已在 main 分支，配套 PR 待合并，预计近期落地
- **系统托盘后台运行（[#38007](https://github.com/NousResearch/hermes-agent/issues/38007)，👍 12）：** 与上述 Bot 解耦需求互补，但 P3 且 needs-decision，可能需更多社区推动
- **时间感知层 RFC（[#99942](https://github.com/NousResearch/hermes-agent/issues/99942)）：** 今日新提出，为长时陪伴式会话提供确定性物理时间感知，早期阶段，值得关注
- **多语言技能发现（PR [#100264](https://github.com/NousResearch/hermes-agent/pull/100264)）：** 为 CJK 等多语言请求增加技能发现触发词，今日新提交，方向明确

## 7. 用户反馈摘要

- **桌面端启动体验是痛点高发区：** 多个 Issue（[#51327](https://github.com/NousResearch/hermes-agent/issues/51327)、[#60323](https://github.com/NousResearch/hermes-agent/issues/60323)、[#94769](https://github.com/NousResearch/hermes-agent/issues/94769)）指向 Linux/macOS 桌面端启动失败、超时、界面闪烁等问题。用户在 #94769 中详细记录了 4-profile 配置下的复现环境，反馈质量高
- **Windows 用户对 v0.21.0 升级持谨慎态度：** #99895 的提交者明确提及 "After upgrading to v0.21.0"，暗示升级后立即遇到阻塞性问题
- **对自动化集成的可靠性有较高期待：** #88584（50 条评论）持续两周未解决，社区通过大量讨论表达了对合并管线稳定性的关切
- **安全意识提升：** 用户 yotamleo 在 [#92478](https://github.com/NousResearch/hermes-agent/issues/92478) 中报告了一个"讽刺性"场景——技能因自身 denylist 中包含敏感路径关键词而被安全扫描器误判为后门，反映了安全机制的误报问题

## 8. 待处理积压

**⚠️ 长期未响应的关键 Issue：**

- **[#88584](https://github.com/NousResearch/hermes-agent/issues/88584)（8/17 提出，评论 50 条，持续 2 周）：** Nous-to-Enterkey 自动合并被 `cron/jobs.py` 冲突阻塞，dashboard 更新器停留在旧版本。社区关注度最高，建议优先解决
- **[#8457](https://github.com/NousResearch/hermes-agent/issues/8457)（4/12 提出，评论 19 条，持续近 5 个月）：** 持久会话记忆功能需求长期未获明确决策（标记 needs-decision），社区持续关注
- **[#61589](https://github.com/NousResearch/hermes-agent/issues/61589)（7/9 提出）：** gateway.error.log 无界增长（208MB），磁盘空间隐患，长时间未修复

**长期未合并的 PR：**

- **[#18348](https://github.com/NousResearch/hermes-agent/pull/18348)（5/1 提出，P4，标记 needs-decision）：** E2B 云沙箱终端后端，涉及安全边界与兼容性评估，已搁置 4 个月
- **[#68715](https://github.com/NousResearch/hermes-agent/pull/68715)（7/21 提出）：** WhatsApp 部分投递后停止重试，防止消息重复
- **[#58264](https://github.com/NousResearch/hermes-agent/pull/58264)（7/4 提出）：** Langfuse OpenTelemetry 服务身份配置，涉及 telemetry 与兼容性

---

*报告生成时间：2026-09-01 | 数据来源：Hermes Agent GitHub 仓库 (github.com/NousResearch/hermes-agent)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-01

## 1. 今日速览

PicoClaw 项目过去 24 小时保持中等活跃度：新增 1 条 Bug Issue，3 条 PR 进入状态更新流程，其中 1 条 PR 被关闭（stale），无新版本发布。整体来看，项目处于**稳定维护期**，社区活跃度温和，问题响应节奏正常。值得重点关注的是 #3343 报告的 Telegram 消息无限编辑 Bug，涉及 22.8 万次重复 API 调用，属于较严重的稳定性问题，尚未有对应修复 PR。另一条 Exa 搜索集成 PR 被标记为 stale 后关闭，暗示项目对"功能广度扩展"的接纳度偏低，重心更偏向核心链路的健壮性。

## 2. 版本发布

过去 24 小时无新版本发布，暂无更新内容可披露。

## 3. 项目进展

今日无 PR 被正式合并。唯一状态变更的 PR 为 #3299（Add native Exa web search provider），在长达月余的开放后被标记 stale 并关闭，说明项目未采纳此类搜索提供方扩展。值得注意的是，该项目 PR 合并节奏整体偏慢（#3222 自 7 月初开放至今仍未合并），建议关注后续合并动态以评估核心功能推进速度。

## 4. 社区热点

今日最受关注的条目为 **Issue #3343**（[链接](https://github.com/sipeed/picoclaw/issues/3343)）：[BUG] Tool feedback animation can edit a Telegram message indefinitely after a failed turn。该 Issue 已获 2 条评论，描述了工具反馈动画在 agent 回合失败后，仍以每 3 秒一次的频率持续调用 Telegram 的 `editMessageText` 接口，持续数天累计产生超过 22.8 万次编辑请求。社区关注点集中在**错误处理不彻底**与**循环终止条件缺失**上，推测用户期望的解决方向是：失败回合后应终止所有相关的异步动画/轮询任务，而非仅中断主流程。

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 修复状态 |
|---------|----------|------|---------|
| **高** | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | 工具反馈动画在 Agent 回合失败后无限循环调用 Telegram `editMessageText`，产生 22.8 万+次无效 API 请求，持续数天 | ❌ 无对应 fix PR |
| **中** | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | gbr/1 电话配对方案中安全性依赖 gbr-agent 版本 ≥ v0.6.0，未说明低版本设备的降级行为 | ⚠️ 待合并，需补充迁移说明 |

高严重度 Bug #3343 当下无修复 PR，建议维护者优先排查动画任务的生命周期管理逻辑。

## 6. 功能请求与路线图信号

- **Exa 搜索提供方**（[#3299](https://github.com/sipeed/picoclaw/pull/3299)）：已关闭，标注 stale，短期内纳入 v1 的可能性极低。若需 web search 扩展能力，建议以后另起新 PR 并调整实现方向。
- **Build Remote Agent 手机配对**（[#3344](https://github.com/sipeed/picoclaw/pull/3344)）：新增 gbr/1 协议适配器，支持手机通过 QR/8 位码配对视窗 Agent，目前待合并。若合入，将显著提升桌面 agent 的远程遥控体验，预计可进入 v0.6.x 或 v0.7 路线。
- **DeltaChat 清理与重构**（[#3222](https://github.com/sipeed/picoclaw/pull/3222)）：约 -200LOC 的瘦身，涉及移除遗留特性、废弃密码邮箱配置等，反映核心团队对**依赖收敛与代码瘦身**的取向。

综合以上信号，下一版本更可能围绕**稳定性加固**（对应 Bug #3343）和**存量模块整理**（对应 #3222），功能扩展类（Exa、phone pairing）将按社区热度与维护成本取舍。

## 7. 用户反馈摘要

- **Issue #3343 评论反映的真实痛点**：异步任务缺少全局取消机制，失败后残留的轮询/动画任务会持续消耗 API 配额，后续用户可能面临 Telegram 限流甚至封禁风险。使用场景为长时间无人值守的 agent 任务（跨天运行），期望在失败时能快速回滚所有副作用（包括 UI 动画与外部 API 调用）。
- **PR #3299 关闭后无相关后续评论**：说明该功能需求并非社区刚需，对 road map 的牵引力有限。
- **PR #3222 的变更方向**（删除密码配置、收敛到 jsonrpc secret）与 #3344 的 "无第四配对协议" 声明，共同指向**简化部署与减少协议分支**的用户诉求——降低多设备/多协议场景下的配置负担是隐性痛点。

## 8. 待处理积压

| 条目 | 创建时间 | 最后活跃 | 状态与风险 |
|------|---------|---------|-----------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) refactor(deltachat) 清理 | 2026-07-03 | 2026-08-31 | ⚠️ 开放近 2 个月，DeltaChat 模块积攒的遗留代码与文档问题长期未清理，可能阻碍后续 DeltaChat 相关迭代 |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) Build Remote Agent 手机配对 | 2026-08-23 | 2026-08-31 | ⚠️ 已 1 周无维护者响应，若持续无反馈将面临 stale 风险 |
| [#3343](https://github.com/sipeed/picoclaw/issues/3343) Telegram 消息无限编辑 Bug | 2026-08-22 | 2026-08-31 | 🔴 已报告 10 天无 fix PR，属于"失败后未清理异步任务"的系统性问题，建议优先分配人力 |

---

*本日报基于 sipeed/picoclaw 仓库 2026-09-01 公开数据生成，链接均指向 GitHub 原始条目。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-01

## 1. 今日速览

NanoClaw 项目当日活跃度较高：过去 24 小时共 8 条 Issue 更新（7 条活跃、1 条关闭）和 26 条 PR 更新（19 条待合并、7 条已合并/关闭），无新版本发布。核心团队（core-team）近期围绕 providers 契约声明与重构提交了系列 PR（#3581–#3592），同时 CI 标签体系与 Slack 技能树内化已完成合并，显示项目正在系统性地推进基础设施重构与质量加固。值得关注的是，本周多条高优先级 Bug（WhatsApp mention 触发、定时任务去重误判、WhatsApp Cloud 迁移缺口）均已由 glifocat 提交修复 PR，项目整体健康度良好，修复响应较快。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日合并/关闭的 7 条 PR 中，值得关注的有：

- **[PR #3695 — Slack agents 配套技能迁入主仓（已关闭）](https://github.com/nanocoai/nanoclaw/pull/3695)**：将 Slack agents 的 companion skills 以 `main` 分支为规范来源，消费者直接从 checkout 读取而非拉取分支，简化了安装流程。注意 Issue #3694 指出该技能在干净 v2.3.0 安装上存在构建/检查失败问题，需配合修复。
- **[PR #3657 — CI 标签模板合规报告（已关闭）](https://github.com/nanocoai/nanoclaw/pull/3657)**：CI-04 分类检查改为 report-only 模式，以单一修复评论呈现模板合规状态，降低对贡献者的噪音。
- **[PR #3648 — PR 模板 v2 与标签自动调和（已关闭）](https://github.com/nanocoai/nanoclaw/pull/3648)**：将 `PULL_REQUEST_TEMPLATE.md` 升级为紧凑的 v2 契约（marker: `nanoclaw-pr-template:v2`），新增 token 解析与 managed-kind 自动调和，配合 #3657 形成完整的模板合规闭环。

综合来看，项目当日完成了 CI/协作流程的规范落地，并有多个核心 providers 重构 PR（#3581–#3592）等待合并，为后续统一 provider 契约与安装验证打下基础。

## 4. 社区热点

当日最活跃的讨论集中在以下条目：

- **[Issue #3085 — WhatsApp mention 模式仅响应自动补全 pill（高优先级）](https://github.com/nanocoai/nanoclaw/issues/3085)**：用户 glifocat 报告在 WhatsApp 群组中，当 `engage_mode='mention'` 时，用户手动输入 `@<agent name>` 而不选择自动补全建议，则代理不会被触发。该 Issue 有 1 条评论，且同作者已提交修复 PR，说明讨论与修复并行推进。
- **[Issue #3694 — Slack skills 应用后构建失败（已关闭）](https://github.com/nanocoai/nanoclaw/issues/3694)**：用户在干净 v2.3.0 安装上按文档应用 Slack skills 后，出现 4 个问题导致构建失败。该 Issue 当日被关闭，可能与发展 #3695 的内化变更相关。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 摘要 | 是否有 Fix PR |
|---------|-------|------|--------------|
| 高 | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | 硬编码 30 分钟 `ABSOLUTE_CEILING_MS` 会冷杀本地模型长任务，且无配置入口 | ✅ [#3646](https://github.com/nanocoai/nanoclaw/pull/3646)（使 idle 超时可配置并应用于两个 kill 路径） |
| 高 | [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) | WhatsApp mention 模式仅响应自动补全 pill；手动输入 `@name` 不触发 | ✅ 同作者已提交修复 PR（待合并列表中标为 OPEN） |
| 高 | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) | 升级现有安装时 whatsapp-cloud 的 `messaging_groups` 行被孤立，缺少 #2913 的迁移 | ❌ 未见对应 PR |
| 中 | [#2997](https://github.com/nanocoai/nanoclaw/issues/2997) | `hasIdenticalSend` 误匹配历史发送，固定文案的定时提醒只送达一次 | ❌ 未见对应 PR，但 [#3696](https://github.com/nanocoai/nanoclaw/pull/3696) 为定时任务新增 missed-run 策略，可能部分缓解 |
| 中 | [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) | `setup.sh` 的 "Node missing or too old" 分支实际无法处理 too old 场景（install-node.sh 对任意 node 短路） | ❌ 未见对应 PR |
| 低 | [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) | `send_card` 文档承诺 callback 按钮，但桥接层自 #2265 起丢弃无 URL 的 action，agent 误归咎于平台 | ❌ 未见对应 PR |
| — | [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) | 共享技能重构前创建的群组持有过期技能副本，静默阻断受管符号链接 | ❌ 未见对应 PR |
| 安全 | [PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680)（待合并） | 修复 `validateSpec` 中 allowlisted-extra mount 的绕过漏洞 | ✅ 本身即修复 PR |

## 6. 功能请求与路线图信号

- **[PR #3696 — 定时任务逐任务 missed-run 策略](https://github.com/nanocoai/nanoclaw/pull/3696)**：为循环任务新增"错过运行周期后如何处理"的显式策略（替代总是延迟补跑），关闭 Issue #2398。这是对调度系统行为的重要增强，可能纳入下一版本。
- **[PR #3697 — Keenable MCP 工具技能](https://github.com/nanocoai/nanoclaw/pull/3697)**：新增 `/add-keenable-tool` 技能，将 Keenable 网页搜索与页面抓取注册为远程 MCP 工具，扩展了外部工具集成面。
- **[PR #3592 — core 拥有的速度推断属性](https://github.com/nanocoai/nanoclaw/pull/3592)**：在 groups 中新增 core-owned 的速度推断属性，配合 #3581–#3591 的 providers 契约重构，说明项目正在建立统一的 provider 运行时配置体系。
- **[PR #3646 — 可配置 idle 超时](https://github.com/nanocoai/nanoclaw/pull/3646)**：将 30 分钟硬编码 kill 阈值改为可配置，并同时对两条 kill 路径生效，直接回应 Issue #3643。

## 7. 用户反馈摘要

- **本地模型长任务被无预警杀掉（#3643）**：用户在本地模型后端（OpenCode → 本地 OpenAI 兼容服务器）运行长任务时，任务半途被 host sweep 终止，仅留下 `WARN Killing container past absolute ceiling` 日志。核心诉求是：对于仍产生心跳的活跃任务，不应有任何硬性时间上限，且必须提供配置入口。
- **WhatsApp mention 行为与预期不符（#3085）**：用户手动输入 `@<agent name>` 并直接发送（不选自动补全）时，代理从不触发，而 `engage_mode='mention'` 的语义应当覆盖两种 mention 方式。用户强调累积的静默掩盖了失败，难以排查。
- **Slack 技能开箱即坏（#3694）**：用户严格按仓库文档在干净 v2.3.0 上应用 Slack skills，结果构建、lint、容器测试全部失败。这类"文档即承诺"被打破的问题会显著损害新用户信任。
- **升级路径被忽略（#3105）**：用户在 #2913 修复注册表冲突后，发现现有安装升级时 `messaging_groups` 行被孤立，无迁移脚本。用户明确表达了"fresh install fine, existing install broken"的不满。

## 8. 待处理积压

以下 Issue 长期未获响应或缺少对应修复 PR，建议维护者优先关注：

- **[Issue #3105（高优先级，创建于 2026-07-20）](https://github.com/nanocoai/nanoclaw/issues/3105)**：whatsapp-cloud 升级路径缺少迁移，已积压 43 天且无 PR。
- **[Issue #2997（高优先级，创建于 2026-07-09）](https://github.com/nanocoai/nanoclaw/issues/2997)**：定时任务固定文案重复提醒静默失效，已积压 54 天无对应修复。
- **[Issue #3001（创建于 2026-07-10）](https://github.com/nanocoai/nanoclaw/issues/3001)**：共享技能重构前的旧群组保留过期技能副本，静默阻断受管链接，已积压 53 天。
- **[Issue #3248（中优先级，创建于 2026-08-14）](https://github.com/nanocoai/nanoclaw/issues/3248)**：setup.sh 无法处理 node 版本过旧场景，已积压 18 天。
- **[Issue #3426（低优先级，创建于 2026-08-21）](https://github.com/nanocoai/nanoclaw/issues/3426)**：send_card 文档与真实行为不一致，已积压 11 天，影响用户体验与错误归因。

---

*本日报基于 2026-09-01 当日 GitHub 数据生成，所有条目均附原始链接以便溯源。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-01

## 1. 今日速览

IronClaw 今日活跃度处于高位：过去 24 小时内有 17 条 Issue 更新（14 条活跃/新开，3 条关闭）和 25 条 PR 更新（19 条待合并，6 条合并/关闭），无新版本发布。项目当前的核心工作集中在 WebUI 设计系统重构（Epic #7781 的 Phase 2–3）与 MCP 相关稳定性修复两大方向。值得一提的积极信号是，`perf(github): list_repos` 数据膨胀问题（Issue #7986）已被对应 PR #7996 关闭，`reborn` 代理循环重复调用问题（Issue #7892）也已修复关闭。但今日新开的多个 MCP 目录摄入后工具不可搜索、错误信息扁平化等 Issue（#8012、#8009、#8008）表明 MCP 生态的健壮性仍是短板，需要维护者优先关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共有 6 个 PR 合并或关闭，值得关注的进展包括：

- **[[CLOSED] perf(github): compact repository list responses (#7996)](https://github.com/nearai/ironclaw/pull/7996)** — 来自新贡献者 `linhongyu510` 的 PR，将 `github.list_repos` 的响应从逐字透传 GitHub REST 对象（81 个字段/仓库，单次列出 98 个仓库即消耗 519 KB）优化为仅投影模型有用的字段，同时为 `github.search_repositories` 复用同一投影。对应 Issue #7986 随 PR 关闭。这是一个对 token 消耗和延迟均有显著收益的优化。
- **[[CLOSED] bug(agent-loop): deferred tool found 15x, never invoked (#7892)](https://github.com/nearai/ironclaw/issues/7892)** — 该高风险 bug 已关闭：代理循环在 123 秒内发出 31 次能力调用却仅包含 4 个不同 (capability, arguments) 对，且无终止守卫。修复后代理执行效率将显著改善。
- **[[CLOSED] Fix main branch CI failures 20260831 (#8002)](https://github.com/nearai/ironclaw/issues/8002)** — 主分支 CI 失败已修复。

此外，以下重要 PR 仍处于待合并状态，反映项目正在推进的方向：

- **会话事件传输统一与 Web 应用运行完成通知（#8010）** — 端到端实现 `2026-08-13-webapp-run-notifications.md` 设计文档，将 WebUI 会话事件统一为类型化流并通过单一 ticket 认证多路复用 WebSocket 传输。
- **持久化渐进式回复与 Slack 原生 Agent UI（#8006）** — 引入 provider-neutral 回复契约和 Slack 适配层，是渠道消息能力的一次架构升级。
- **NEAR AI 模型能力发现与展示（#7998、#7997）** — 保留 `list_models()` 的同时新增 `list_model_catalog()`，并在 Inference 界面展示模型能力图标。

## 4. 社区热点

- **[Issue #7781 — Epic: Design System Phases 2–3（评论 2 条）](https://github.com/nearai/ironclaw/issues/7781)** — 这是当前最受关注的 Epic，涵盖 DESIGN.md 治理与主题重设计两个阶段。它合并了原 Epic #7038/#7042 的治理阶段，并取代了 Epic #7733。设计系统升级对整个 WebUI 的代码质量和后续开发效率有深远影响，社区关注度高在预期之中。
- **[Issue #7986 — `list_repos` 81 raw fields per repo（评论 1 条）](https://github.com/nearai/ironclaw/issues/7986)** — 以 519 KB/98 仓库的实测数据引发了维护团队对 GitHub 扩展 token 消耗的重视，已有对应的 PR #7996 合并关闭。
- **[Issue #8025 — 特殊字符输入导致输出异常（评论 1 条）](https://github.com/nearai/ironclaw/issues/8025)** — 用户报告特殊字符在输入字段中被剥离或导致错误，怀疑与上个版本的编码变更有关，需要尽快确认是否为回归。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 摘要 | 状态 |
|---------|-------|------|------|
| 🔴 高 | [#8012](https://github.com/nearai/ironclaw/issues/8012) | 47,337 个工具的 hosted-MCP 目录完整摄入，但 `tool_search` 中任何一个工具都不可达；截断至 2,000 个工具时正常 | 新开，无 PR |
| 🔴 高 | [#8008](https://github.com/nearai/ironclaw/issues/8008) | 被 egress leak detector 阻止的单个 `tools/list` 页面导致整个发现过程中止，发布零工具 | 新开，无 PR |
| 🟠 中 | [#8015](https://github.com/nearai/ironclaw/issues/8015) | Rootless Docker 沙箱因 UID/GID 命名空间不匹配导致工作区不可写（QA bug，commit: `4cb47cf`） | 新开，无 PR |
| 🟠 中 | [#8016](https://github.com/nearai/ironclaw/issues/8016) | `lock-free turn-state root` 测试在 CI 中间歇性超时（5 秒预算） | 新开，无 PR |
| 🟡 低 | [#8009](https://github.com/nearai/ironclaw/issues/8009) | MCP egress 错误被扁平化为单一 `"response_error"` token，发现失败无法诊断 | 新开，无 PR |
| 🟡 低 | [#8025](https://github.com/nearai/ironclaw/issues/8025) | 特殊字符输入被剥离或导致错误，疑似上个版本编码变更的回归 | 新开，无 PR |
| ✅ 已修复 | [#7892](https://github.com/nearai/ironclaw/issues/7892) | 代理循环重复调用、无终止守卫（123 秒浪费） | 已关闭 |
| ✅ 已修复 | [#7986](https://github.com/nearai/ironclaw/issues/7986) | `list_repos` 返回 81 个原始字段，单次 519 KB | 已关闭（PR #7996） |

> ⚠️ MCP 相关三个 bug（#8012、#8008、#8009）相互关联且暂无对应 PR，建议维护者优先响应。

## 6. 功能请求与路线图信号

- **WebUI 设计系统统一（明确路线图）**：`italic-jinxin` 今日同时提交了 4 个相关的 refactor PR — 扩展配置共享组件（[#8023](https://github.com/nearai/ironclaw/pull/8023)）、Workspace/Logs 共享 SearchField（[#8024](https://github.com/nearai/ironclaw/pull/8024)）、Automations 迁移 InlineNotice（[#8022](https://github.com/nearai/ironclaw/pull/8022)）、SettingsField 替换共享控件（[#8021](https://github.com/nearai/ironclaw/pull/8021)）— 与 Epic #7781 Phase 2–3 和 PR #7994（DESIGN.md 治理）高度同步。这 4 个 PR 全部为 `size: M, risk: low`，预计将在 WS3b reskin 之前全部合入。
- **CI 并行化**：[PR #8013](https://github.com/nearai/ironclaw/pull/8013) 引入 nextest 以 4 个测试进程并行运行受影响的 crate 测试，属于 CI 基础设施改进。
- **模型能力图标展示**：PR #7997、#7998 为 Inference 界面引入模型能力图标（Text/Image 输入输出），属于用户体验增强。

## 7. 用户反馈摘要

- **社区贡献者参与积极**：新贡献者 `linhongyu510` 提交了 `github.list_repos` 压缩 PR（#7996），修了一条有价值的性能问题，展示了良好的 onboarding 路径。
- **MCP 相关投诉集中**：`pranavraja99` 连续提交 3 条 MCP 相关问题（#8008、#8009、#8012），核心诉求是"大规模 MCP 目录下工具不可用"和"错误信息不可诊断"。这可能是影响真实用户的关键场景。
- **沙箱权限问题来自 QA**：#8015 来自 QA 测试（日期 2026-08-31，commit 4cb47cf），非社区用户，但 Dcoker rootless 工作区不可写属于开发体验的核心问题。
- **评论区热度不高**：除 Epic #7781（2 条评论）外，大部分 Issue 和 PR 的评论数均为 0 或 1，社区讨论活跃度整体偏低，这可能与项目处于早期阶段或讨论已迁移到其他渠道有关。

## 8. 待处理积压

以下 Issue/PR 已持续多日未获响应或推进，建议维护者关注：

- **[Issue #8007 — 渐进式回复发布的分解与聚合跟进（2026-08-31 创建，0 评论）](https://github.com/nearai/ironclaw/issues/8007)** — 追踪渐进式回复发布工作引入的 5 个 `arch-exempt` 豁免，需要推动闭环。
- **[Issue #8008 — Hosted-MCP discovery 单页失败丢弃整个目录（2026-08-31 创建，0 评论）](https://github.com/nearai/ironclaw/issues/8008)** — 高风险且无 PR，与 #8012 同源。
- **[PR #7988 — 刷新代码库知识图谱（bot 自动生成，2026-08-29 创建）](https://github.com/nearai/ironclaw/pull/7988)** — 属于夜间 CI 自动生成的常规 PR，应尽快审阅合并。
- **[PR #7831 — Chromatic Storybook 非阻塞发布（2026-08-23 创建，8-31 已 rescope）](https://github.com/nearai/ironclaw/pull/7831)** — 已搁置一周以上，等待评审。
- **[Issue #7890 — 在 WS3b reskin 前移除 app.css Tailwind 兼容层（2026-08-25 创建）](https://github.com/nearai/ironclaw/issues/7890)** — 与设计系统 Epic 直接相关，需要排期。

---

*本日报基于 IronClaw (github.com/nearai/ironclaw) 2026-09-01 的 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-01

---

## 1. 今日速览

LobsterAI 今日保持中等偏高的社区活跃度：过去 24 小时共产生 13 条 Issues 更新和 11 条 PR 更新。其中值得关注的是，9 个陈旧 Issues 被自动关闭（多为 2026-03-31 至 04-11 期间报告的 Bug，距今约 5 个月未获解决）；同时今日新开 1 个高优先级 Issue（#2589，plan mode 消耗 200 credits 的投诉）。PR 方面，今日有 6 个 PR 被合并/关闭，其中包括 2 个 onboarding/用户引导相关改进和 1 个视频分享功能合入；另有 5 个 PR 待合并，其中 1 个为 MCP 安全加固 PR（#2590）值得重点关注。整体看，项目在功能迭代上仍有持续投入，但长期积压的 Bug 处理效率偏低。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 主要推进了以下方向：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#2593](https://github.com/netease-youdao/LobsterAI/pull/2593) | feat(artifacts): 支持模型生成视频分享 | ✅ 已合并 | 新增模型生成视频的分享能力，保留任务 ID 与输出序号溯源，禁止本地视频绕过来源校验，支持 URL 哈希解析旧会话视频任务，并完善远程预览与本地化错误提示 |
| [#2594](https://github.com/netease-youdao/LobsterAI/pull/2594) | fix(onboarding): polish guide transitions and CTAs | ✅ 已合并 | 优化新用户引导体验：缩小引导光标、加速结果弹层展示、平滑入场动画、复用登录 CTA 彩虹风格、修复布局闪烁 |
| [#2591](https://github.com/netease-youdao/LobsterAI/pull/2591) | feat(onboarding): add first-run analytics | ✅ 已合并 | 新增首次运行分析埋点，追踪引导漏斗、登录交接、欢迎任务创建与欢迎流生命周期 |
| [#2595](https://github.com/netease-youdao/LobsterAI/pull/2595) | fix: nsis web staging drive preflight | ✅ 已合并 | Windows 平台 NSIS 安装器暂存驱动器预检修复 |
| [#2588](https://github.com/netease-youdao/LobsterAI/pull/2588) | Liuzhq/user guide | ✅ 已合并 | 用户引导相关改动（细节未提供） |

从今日合入内容来看，项目当前的迭代重心明显偏向**新用户体验优化**（onboarding 引导、首次运行分析）和**内容分享能力扩展**（视频分享），这两条线在今日均有实质进展。安全加固方向的 PR（#2590）尚在审查中。

---

## 4. 社区热点

今日最值得关注的 Issue：

**🔥 [#2589](https://github.com/netease-youdao/LobsterAI/issues/2589) — "plan mode drains 200 credits !?"**
- 作者: dreamsdesign | 创建: 2026-09-01 | 评论: 0 | 👍: 0
- 内容: 用户抱怨 plan mode 消耗了 200 credits，并直言 "you guys don't expect a repeat customer!" — 这是今日唯一新开的 Issue，且直接涉及**计费/额度消耗**，属于对用户留存有直接影响的反馈。虽然目前尚无讨论，但作者语气强烈，建议维护者尽快关注并回应。该 Issue 创建于今日，暂无评论，热度尚未发酵，但潜在的社区影响不容低估。

其余 Issues 均为陈旧自动关闭或长期未响应的存量问题，评论区活跃度不高。

---

## 5. Bug 与稳定性

今日报告/更新的 Bug 主要来自陈旧 Issue 的自动关闭（无新增修复），汇总如下：

### 中高优先级

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#2589](https://github.com/netease-youdao/LobsterAI/issues/2589) | plan mode drains 200 credits | 🆕 OPEN（今日新开） | 无 |
| [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) | 定时任务 pollOnce() 无重入保护且 stopPolling() 后继续发送幽灵事件 | OPEN（陈旧） | [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) 待合并 |
| [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) | 钉钉定时任务 IM 通知路由因含前缀的 conversationId 始终无法送达 | OPEN（陈旧） | [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) 待合并 |

### 低优先级/已关闭（今日自动关闭的陈旧 Bug）

| Issue | 标题 | 严重度 | 备注 |
|---|---|---|---|
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | 更新最新版本首次启动崩溃 | 高（但已关闭） | 2026-04-09 报告，今日 [stale] 自动关闭，无修复记录 |
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | 会话功能、定时任务功能均无法正常进行（macOS） | 高（但已关闭） | 2026-04-09 报告，今日 [stale] 自动关闭，无修复记录 |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | 一个稍微复杂的任务，客户端就崩了 | 中高（但已关闭） | 2026-04-10 报告，今日 [stale] 自动关闭 |
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | 无法添加自定义模型 | 中（但已关闭） | 2026-04-10 报告，今日 [stale] 自动关闭 |
| [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | 技能删除后列表未同步更新 | 中（但已关闭） | 2026-04-10 报告，今日 [stale] 自动关闭，已确认后端成功但前端 UI 未刷新 |
| [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | 切换本地模型后 skill 不可用，如何安装 | 中（但已关闭） | 2026-04-11 报告 |
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | 切换语言后部分内容未实现本地化 | 低（但已关闭） | 条款页、工具风格未翻译 |

> ⚠️ **值得警惕的**：多个 2026-04 月报告的高严重度 Bug（启动崩溃 #1587、功能不可用 #1589）在 5 个月后由 stale 机器人自动关闭，而非由修复解决。这反映了**长期积压问题缺乏处理闭环**，可能影响用户信任。

---

## 6. 功能请求与路线图信号

今日无明显的新功能请求（新 Issue 仅 #2589 为计费投诉），但以下信号值得关注：

- **定时任务系统通知**（[#1620](https://github.com/netease-youdao/LobsterAI/issues/1620)，已 stale 关闭）：用户请求在定时任务完成后通过系统原生通知推送结果，默认关闭，需在设置中开启。该需求切中真实使用场景，虽然已 stale 关闭，但可作为功能路线图候选。
- **多 AI 引擎接入**（[#1614](https://github.com/netease-youdao/LobsterAI/issues/1614)，已 stale 关闭）：请求将 hermes-agent 作为可选的 AI agent 引擎，类似 openclaw。扩展 AI 引擎生态对项目的长期竞争力有意义。

结合今日合入的 PR 来看，**onboarding 体验优化**（#2591、#2594）和**视频分享**（#2593）已明确进入落地阶段，是当前版本迭代的主线。

---

## 7. 用户反馈摘要

今日 Issues 评论区活跃度整体偏低（多数为 stale 自动关闭带来的系统评论），但可以提炼以下用户声音：

- **计费敏感度极高**（[#2589](https://github.com/netease-youdao/LobsterAI/issues/2589)）：用户对 plan mode 消耗 200 credits 表示强烈不满，直接表达"不会成为回头客"。这暗示**定价模型或功能计费策略可能存在用户感知上的问题**，需要产品侧审视 plan mode 的明确告知机制或额度消耗透明度。
- **功能性 Bug 伤害核心体验**：从多个已关闭的陈旧 Issue（如 #1617 技能删除后 UI 不同步、#1622 自定义模型测试失败、#1627 复杂任务崩溃）来看，用户在日常使用中仍会遇到阻断性问题，且长期未获修复，可能导致用户流失。
- **主动提交 PR 的社区贡献者**：noransu（#1620，定时任务系统通知功能提案）、MaoQianTu（#1105/#1107 及对应修复 PR #1106/#1108）等用户不仅报告问题，还主动提交修复方案，体现社区一定的活跃度，但这些 PR 长期未合并。

---

## 8. 待处理积压

以下为长期未获响应的关键 Issue/PR，建议维护者优先关注：

| 类型 | 编号 | 标题 | 等待时长 | 说明 |
|---|---|---|---|---|
| PR | [#908](https://github.com/netease-youdao/LobsterAI/pull/908) | fix(mcp): validate stdio command to prevent command injection | 🕐 159 天（2026-03-26 创建） | **安全漏洞修复**，修复 MCP stdio command 任意命令注入漏洞，至今未合并 |
| PR | [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | fix(security): harden MCP stdio command and external URL boundaries | 🕐 今日新开 | 与 #908 同方向的**安全加固 PR**，待合并，建议优先审查 |
| PR | [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | [Bug] 钉钉定时任务 IM 通知路由修复 | 🕐 154 天（2026-03-31） | 对应 Issue #1105，附带完整修复方案 |
| PR | [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | [Bug] 定时任务 pollOnce() 重入保护修复 | 🕐 154 天（2026-03-31） | 对应 Issue #1107，附带完整修复方案 |
| PR | [#1113](https://github.com/netease-youdao/LobsterAI/pull/1113) | feat(openclaw): flush deferred config sync when gateway workloads drain | 🕐 154 天（2026-03-31） | OpenClaw 配置同步时机优化 |
| Issue | [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) | 钉钉定时任务 IM 通知无法送达 | 🕐 154 天 | 已有完整修复 PR #1106 待合并 |
| Issue | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) | 定时任务 pollOnce() 幽灵事件 | 🕐 154 天 | 已有完整修复 PR #1108 待合并 |
| Issue | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) | 表格 Table 顶部/底部不明留白 | 🕐 154 天 | UI 细节问题，仍 OPEN |

> ⚠️ **重点关注**：MCP 安全加固相关有两个 PR（#908 已 5 个月未合，今日新提交 #2590 是同一方向），涉及任意命令注入风险，建议维护者优先处理安全类 PR。此外，定时任务相关的两个修复 PR（#1106、#1108）携完整修复方案等待合并超 5 个月，对应的 Bug 直接影响钉钉用户的核心功能，积压时间过长。

---

*日报生成时间：2026-09-01 | 数据来源：[LobsterAI GitHub 仓库](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-01

## 1. 今日速览

Moltis 今日活跃度中等偏高：过去 24 小时内有 3 条 Issue 更新（1 开 2 关）、5 条 PR 更新（4 合 1 待）、1 个新版本发布，项目保持稳定的迭代节奏。今日修复集中在三个方向：Docker 环回地址认证判定（#1249）、sandbox 节点显式空选择逻辑（#1248）与供应链安全加固（#1221/#1222），均为存量问题的收敛而非新功能铺开。值得注意的是，一条新的开放 Issue（#1250）与一条待合并 PR（#1251）同日出现，提示 `moltis doctor` 对 `streamable-http` 传输类型的支持存在用户可感知的缺陷，是目前最需要关注的热点。整体来看，项目健康状况良好，安全与稳定性投入明显。

## 2. 版本发布

- **20260831.01**（2026-08-31 发布）
  官方未附带独立变更日志，需结合当日合并的 PR 推断，主要包含以下改动：
  - **修复 Docker 环回地址认证判定**（#1249）：`is_local_connection()` 此前仅接受原始 TCP 源 IP 为严格环回地址，Docker 默认 bridge 网络会重写源地址，导致容器部署中禁用认证（`auth_disabled`）等 Tier 2 本地便利功能失效。此版本修复后，Docker 回环部署将被正确视为本地连接（详见第 3 节）。
  - **修复显式 `node: null` 执行路径**（#1248）：`fix(exec)` 使客户端显式传入 `node: null` 时正确走本地执行路径，而非忽略该字段导致行为与配置不一致（详见第 3 节）。
  - **安全加固**（#1221/#1222）：技能安全扫描固定为 Snyk Agent Scan 0.5.17，并移除了独立的 mcp-scan 回退路径；Web 端对沙箱镜像引用与包名增加校验，并将镜像构建操作限制为操作员管理员（详见第 3 节）。

  **迁移注意事项**：
  - 若自建技能扫描依赖旧的 `mcp-scan` 独立回退，此版本后必须使用 `uv`（Snyk Agent Scan 通过 `uvx` 调用），需提前确认 CI 环境已安装 `uv`。
  - 沙箱镜像构建与包检查权限收紧为操作员管理员（operator administrators）专属，权限不足的用户需联系管理员开通，密码、口令及可信环回路径的管理员权限不受影响。

## 3. 项目进展

今日合并 4 个 PR、新增待合并 1 个 PR，涉及认证、执行引擎、供应链安全与 Web 安全四条线：

- **[#1249] `fix(auth)`: Docker loopback-only deployments count as local（已合并）**
  - 🔗 https://github.com/moltis-org/moltis/pull/1249
  - 功能影响：修复 Docker 部署中禁用认证（`auth_disabled`）等 Tier 2 本地开发便利功能失效的问题，是 20260606 开启的 Issue #1112 的正式修复。Docker bridge 网络导致容器内 `127.0.0.1` 识别失效的根因被解决。
  - 意义：消除容器部署与裸机部署间的认证行为差异，降低 Docker 本地开发调试门槛。

- **[#1248] `fix(exec)`: honor explicit null node selection（已合并）**
  - 🔗 https://github.com/moltis-org/moltis/pull/1248
  - 功能影响：此前客户端显式传 `node: null` 时可能被忽略或覆盖，导致无法强制走本地执行路径；此 PR 使显式 `null` 正确走本地执行，并保留配置/provider 默认值在省略时生效，同时添加了回归测试，覆盖"已连接节点 provider + 配置默认值"的场景。

- **[#1221] `fix(gateway)`: pin Snyk Agent Scan（已合并）**
  - 🔗 https://github.com/moltis-org/moltis/pull/1221
  - 功能影响：技能安全扫描固定为 Snyk Agent Scan 0.5.17（通过 `uvx`），移除独立的 `mcp-scan` 回退并强制要求 `uv`，防止供应链攻击，属安全加固。

- **[#1222] `fix(web)`: validate sandbox image requests（已合并）**
  - 🔗 https://github.com/moltis-org/moltis/pull/1222
  - 功能影响：对 Web 端沙箱镜像引用与包含名在容器/Dockerfile 使用前进行校验，并将镜像构建与包检查操作限制为操作员管理员，同时保留密码、口令和可信环回路径的完整管理权限，减少 Web 暴露面的风险。

项目整体在认证正确性、执行语义、供应链安全和 Web 安全四个方向各前进一步，且有配套回归测试，维护节奏良好。

## 4. 社区热点

- **[#1250] `doctor` treats working streamable-http MCP server as missing command（开放，今日新建）**
  - 🔗 https://github.com/moltis-org/moltis/issues/1250
  - 反应：当前 0 评论，但因其为今日新开且已触发对应 PR（#1251），成为当前最值得关注的讨论。作者提供了最小复现配置（`[mcp.servers.example] transport = "streamable-http"`），指出在 `20260827.01` 版本中 `moltis doctor` 将无 stdio 命令的、工作正常的 streamable-http MCP 服务器误报为缺失命令。
  - 诉求分析：用户期望 `doctor` 能正确识别、校验 `streamable-http` 传输类型的 MCP 服务器，而不是用 stdio 的标准去判断。这直指工具链对非 stdio 传输的支持完整性问题，是 MCP 生态多样化的自然反馈。

## 5. Bug 与稳定性

按严重程度从高到低排列：

- **[中等] `moltis doctor` 误报 streamable-http MCP 服务器为缺失命令（Issue #1250，开放）**
  - 🔗 https://github.com/moltis-org/moltis/issues/1250
  - 影响范围：使用 `streamable-http` 传输的 MCP 服务器用户在运行诊断时得到错误结果，影响排查效率，但不会导致服务不可用。
  - Fix PR：已有 **[#1251]**（开放，待合并），引入共享的 MCP 传输类型定义，识别规范的 `streamable-http` 传输别名，并在报告 success 前校验字面量与配置解析后的远端服务器 URL；同时延迟解析未解析的认证凭据。

- **[已解决] Disabling auth doesn't seem to disable auth (Docker)（Issue #1112，已关闭）**
  - 🔗 https://github.com/moltis-org/moltis/issues/1112
  - 详情：2026-06-06 创建，今日由 PR #1249 合并后关闭。Docker bridge 网络重写源 IP 导致本地判定失败，认证禁用不生效。修复已进入版本 20260831.01。

- **[已解决] can't run on sandbox after a node is added（Issue #1246，已关闭）**
  - 🔗 https://github.com/moltis-org/moltis/issues/1246
  - 详情：2026-08-28 创建，2026-08-31 关闭（无评论），未关联独立 PR，推测与 #1248 对节点选择的修复相关，但官方未明示。

## 6. 功能请求与路线图信号

- **`moltis doctor` 对非 stdio 传输类型的支持（信号强）**
  - Issue #1250 在今日提出，伴生 PR #1251 已合入预备状态，几乎可确认纳入下一版本。PR 中的共享类型化 MCP 传输定义将不止修复 bug，还会统一传输类型的解析逻辑（含别名识别、URL 校验），为未来支持更多传输变体奠定基础，属于架构层面的前瞻性修复。

- **Docker 本地化部署认证体验（信号中）**
  - Issue #1112 持续近三个月后今日闭合，反映容器部署场景是真实用户场景且痛点显著。修复方向是"回环部署视为本地"，意味着项目愿意为容器化便利性调整安全判定边界，后续可能持续优化容器部署体验。

## 7. 用户反馈摘要

- **Docker 认证禁用的困惑（Issue #1112）**：用户按文档禁用认证后仍被要求认证，问题持续三个月才修复，期间可能导致用户误以为文档/配置无效，体验受损。修复方案（回环部署视为本地）符合直觉，预计会得到正面反馈。
- **`doctor` 诊断与真实状态脱节（Issue #1250）**：配置并运行正常的 streamable-http MCP 服务器被诊断为"缺失命令"，用户明显表达了"明明在工作却被判失败"的困惑，说明诊断工具的输出需要与其校验逻辑的适用范围保持一致，否则会动摇用户对 `doctor` 的信任。
- 两条已关闭 Issue（#1112、#1246）均无用户回复评论，暂无法评估满意度确认。

## 8. 待处理积压

- **[#1251] Fix doctor validation for streamable HTTP MCP servers（开放，待合并）**
  - 🔗 https://github.com/moltis-org/moltis/pull/1251
  - 状态：2026-09-01 创建并更新，目前 0 评论。该 PR 直接对应 Issue #1250，建议尽快 review 合并，以避免 doctor 误报问题在用户端持续发酵。
  - 另注意：Issue #1250 无评论、PR #1251 无评论，两者之间尚未有维护者的`沟通/确认记录`，建议维护者尽快在 Issue 中同步处理计划，减少用户不确定性。

- **无长期未响应的重大 Issue 或 PR 提醒**：当前公开数据中未见超过 30 天未被响应的活跃 Issue/PR，积压情况良好。唯一值得留意的是 #1112 从创建到修复经历了约三个月、#1246 从创建到关闭约三天（无评论），维护响应节奏总体健康。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-01

## 1. 今日速览

CoPaw（QwenPaw）项目今日活跃度极高：过去 24 小时共产生 31 条 Issue 更新（新开/活跃 17 条，关闭 14 条）和 39 条 PR 更新（待合并 23 条，已合并/关闭 16 条），并发布了 2 个 beta 版本（v2.2.0-beta.4 / v2.2.0-beta.5）。项目正处于 v2.2.0 发布前的密集迭代期，核心工作集中在记忆（ReMe/Embedding）系统修复、MCP 客户端治理与安全加固、以及多租户 Hub 与移动端等新方向探索。值得关注的是，多起 Bug 与合并的修复 PR 一一对应（如 #7446/#7464 与 #7465/#7468），表明项目对反馈的处理速度较快。当前版本处于 beta 阶段，存在若干已知稳定性问题，但整体修复节奏健康。

## 2. 版本发布

**v2.2.0-beta.5**（最新）— [Release 链接](https://github.com/agentscope-ai/QwenPaw/releases)

**更新内容：**
- fix(channels): 使合约检查可移植且完整（[#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267)）
- fix(memory): 使 Embedding 重建索引显式化并限定作用域（[#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133)）

**v2.2.0-beta.4**

**更新内容：**
- fix(context): 限制超大单行工具结果的上下文占用（[#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331)）
- test(agent-stats): 使 TC-AGT-06 测试与当前 agent 作用域对齐（[#7021](https://github.com/agentscope-ai/QwenPaw/pull/7021)）
- fix(desktop): 部分桌面端修复（内容不完整）

**破坏性变更与迁移注意事项：** 两个版本均为 beta 修复版，未标注破坏性变更；但 Embedding 索引相关逻辑有调整（显式化重建），使用 DashScope Embedding 的用户在升级后建议重新保存一次配置（相关背景见 Issue [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464)）。

## 3. 项目进展

今日合并/关闭的 PR 数量为 16 条，主要集中在以下方向：

- **记忆系统可用性修复**：#7466（[PR 链接](https://github.com/agentscope-ai/QwenPaw/pull/7466)）将 Console 中 Daily Paper 的文档链接从上游 ReMe cookbook 改为 QwenPaw 自家 Memory 文档，改善用户引导一致性。
- **Embedding 配置兼容性**：#7465（[PR 链接](https://github.com/agentscope-ai/QwenPaw/pull/7465)）修复了 Console 对所有 Embedding 后端误用 `use_dimensions` 导致 DashScope 配置被误判为未保存的问题，直接对应 Issue #7464；并已合入 v2.2.0-beta.5。
- **治理与安全**：#7472（[PR 链接](https://github.com/agentscope-ai/QwenPaw/pull/7472)，待合并）修复 POSIX shell 反斜杠换行绕过安全检查的漏洞。

项目整体在 beta 阶段中展现出"高频迭代 + 快速响应"的节奏，核心方向从功能开发逐步转向稳定性和安全性收尾。

## 4. 社区热点

1. **[#7318 — QwenPaw Hub 多租户版路线图讨论](https://github.com/agentscope-ai/QwenPaw/issues/7318)**（15 条评论，3 👍）
   社区最热话题。QwenPaw 作为个人 AI 助手起步，但社区反复要求支持团队运行。Hub 是官方首次正面回应，评论区在讨论下一步应优先构建什么能力（关联早期多用户/管理员需求 #2324）。这标志着项目从单用户向团队/企业场景延伸的重要信号。

2. **[#7420 — 工具结果丢失 + 触发 doom-loop 保护](https://github.com/agentscope-ai/QwenPaw/issues/7420)**（8 条评论）
   v2.2.0-beta.1 上工具结果未传回 agent、write_file 后同一命令被重复派发（触发死循环保护）。用户从 2.1.0 升级后首次观察到，属于升级回归类问题，需要优先排查。

3. **[#7450 — 主 agent + 多子 agent 任务中主 agent 不主动查询子 agent 状态](https://github.com/agentscope-ai/QwenPaw/issues/7450)**（5 条评论）
   中文用户报告，多子 agent 编排场景下主 agent 不主动汇报进度——用户需要手动询问"进度如何"才会触发状态同步。这直接关系到复杂任务的可用性和用户信任度，且该用户已遭遇长时间无动态的情况。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 高 | [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) — 危险指令可绕过安全防护 | 用户引用知乎文章指出 2.1.0 存在安全规避风险，涉及治理/安全边界 | 未标注 | 
| 🔴 高 | [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) — MCP per-tool 白名单未在运行时生效 | 配置中设置的工具白名单（`card.config.tools`）实际未作用于 agent runtime 路径 | 未标注 |
| 🟠 中 | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) — 工具结果丢失 + 写文件后重复派发 | 2.2.0-beta.1 升级后出现，疑似回归 | 未标注 |
| 🟠 中 | [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) — 长上下文早期记录彻底丢失 | 约 160 页中文 Word 文档处理场景，压缩后早期上下文丢失导致任务中断 | 未标注 |
| 🟠 中 | [#7467](https://github.com/agentscope-ai/QwenPaw/issues/7467) — 强制确认轮次 + 控制台自动折叠 | beta.3 中首个实质响应被折叠，用户需要额外点击才能查看 | 未标注 |
| 🟡 低 | [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) — 重建记忆索引 500 错误 | [已修复](https://github.com/agentscope-ai/QwenPaw/pull/7468) — 修复 ReMe 启动顺序，已关闭 |
| 🟡 低 | [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) — DashScope Embedding 配置总被判定为未保存 | [已修复](https://github.com/agentscope-ai/QwenPaw/pull/7465) — 已随 beta.5 发布 |
| 🟡 低 | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) — ReMe 后台 Embedding 任务失败 | [#7468](https://github.com/agentscope-ai/QwenPaw/pull/7468) 待合并（同一根因） |
| 🟡 低 | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) — Console 流式输出中途出现大段重复文本 | 未标注 |
| 🟢 更低 | [#7463](https://github.com/agentscope-ai/QwenPaw/issues/7463) — 无法加载 Spark-X2.5 GGUF 模型（已关闭） | 模型架构不受支持 |

## 6. 功能请求与路线图信号

- **多租户 Hub**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)）：官方确认 2.2.0 推出，社区正在投票决定后续优先级，是下一阶段最大功能方向。
- **QwenPaw 原生移动端**（[#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)，Draft / DO NOT MERGE）：基于 Expo/React Native 的 Android/iOS 客户端，复用现有后端服务。尚处早期，但方向明确。
- **Pawport 导入流程**（[#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)，first-time-contributor）：支持从 Codex 和 Qoder 导入指令、设置、技能、插件、项目等。对迁移用户有吸引力。
- **按会话模型覆盖**（[#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)，first-time-contributor，Under Review）：单个 Agent 可为不同会话指定不同 LLM，默认关闭不影响现有行为。
- **ReMe 记忆增强**（[#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)，已关闭）：提案主张用 ViBo 方法节省 97.5% token，虽已关闭但反映社区对记忆成本的高度关注。
- **DingTalk 卡片自动布局**（[#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404)，已关闭）：`card_auto_layout` 早已实现但从未在 Console 暴露，已修复。
- **Reranker 配置面板**（[#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)）：为 ReMeLightMemoryCard 增加 reranker UI，等待合入。
- **会话滚动锁定**（[#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356)）与富输入框光标可见性（[#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347)）：改善流式输出和长输入时的交互体验，均待合并。
- **Auto Fin 长期记忆源**（[#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441)）：新增定时长期记忆源并将 ReMe 升级至 0.4.1.11。

## 7. 用户反馈摘要

- **多 agent 编排体验是关键痛点**（[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)）：用户期待主 agent 主动跟踪子 agent 的执行状态，不需要用户反复询问。长时间无动态会被视为系统停滞。
- **升级后行为变化引发信任问题**（[#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420)）：从 2.1.0 升到 2.2.0-beta 后出现 stall 和工具结果丢失，用户已在 2.1.x 验证未复现。
- **长文档处理场景中上下文丢失是硬伤**（[#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)）：用户反复手工压缩上下文后，早期记录"彻底丢失"，任务无法继续，对生产场景影响大。
- **侧边栏细节体验改进**（[#7125](https://github.com/agentscope-ai/QwenPaw/issues/7125)，已关闭）：用户希望收起侧边栏时会话图标固定置顶，减少调试插件的来回滚动成本。
- **中文字符文件名触发错误**（[#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379)，已关闭）：十几个中文字符的 PDF 文件名导致 `No connection adapters were found`，已解决。
- **暗色模式 UI 回归**（[#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471)）：MCP clients 页面在暗色模式下渲染色块异常，已提交修复 PR（[#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473)）。

## 8. 待处理积压

**长期未响应的重要 Issue / PR：**

- [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420)（工具结果丢失 + 重复派发 + doom-loop，8 条评论）——升级回归类严重 Bug，从 08-31 起活跃至今，尚无 fix PR 关联。
- [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)（长上下文早期记录丢失，2 条评论）——影响真实生产场景，严重度高，需优先定位。
- [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)（危险指令可绕过）——安全类问题，严重度高，当前无维护者回应。
- [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470)（MCP per-tool 白名单运行时未生效）——配置与执行不一致，涉及安全边界，需尽快确认是否为设计缺陷。
- [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)（Reranker UI 配置面板，自 07-23 起待合入）——功能已完成等待 review 超过一个月。
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)（按会话模型覆盖，自 07-12 起待合入）——社区呼声较高的功能（[#7094](https://github.com/agentscope-ai/QwenPaw/issues/7094) 对应），长期未合并。
- [#7397](https://github.com/agentscope-ai/QwenPaw/issues/7397)（Browser SDK 每次 present()/open() 新开 tab-group，自 08-28 起）——影响浏览器 SDK 多页面共存体验，无维护者响应。
- [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)（移动端原生体验，Draft + DO NOT MERGE）—— 需明确时间规划，社区期待度高。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-09-01

**数据窗口**：2026-08-31 至 2026-09-01 | 数据来源：GitHub (github.com/qhkm/zeptoclaw)

---

## 1. 今日速览

过去 24 小时项目活跃度显著上升：8 条 Issue 更新、3 条 PR 更新，其中 7 条新 Issue 均由社区贡献者 morler 集中提交，全部聚焦**安全加固**方向。今日核心事件：PR #657 修复 8 项 RustSec 安全通告依赖漏洞（已关闭，解决 Issue #651），同时 PR #658 将 Docker 基础镜像升级至 Rust 1.98。值得关注的是，新提交的 7 条安全 Issue 指出的均为实际存在的安全设计缺陷（token 明文打印、非恒定时间比较、无速率限制等），暂无一对应 fix PR，项目维护者需要及时响应。整体判断：项目处于**活跃维护、安全基线待加固**阶段。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

### 已合并/关闭 PR（2 条）

| PR | 标题 | 状态 | 推进内容 |
|---|---|---|---|
| [#649](https://github.com/qhkm/zeptoclaw/pull/649) | chore(deps): bump rust from 1.95-slim-trixie to 1.97-slim-trixie | 已关闭 | Dependabot 自动升级 Docker 基础镜像至 Rust 1.97；该升级触发了 #646 中报告的 Clippy 与 cargo-deny CI 基线失败 |
| [#657](https://github.com/qhkm/zeptoclaw/pull/657) | chore(deps): fix 8 RustSec advisories (h2, quick-xml, lopdf, bcrypt, quinn-proto, crossbeam-epoch, anyhow) | 已关闭 | 修复 8 项已知漏洞依赖：h2 0.4.13→0.4.19 (RUSTSEC-2026-0258)、bcrypt 0.19.1→0.19.3 (RUSTSEC-2026-0199)、quinn-proto 0.11.14→0.11.17 (RUSTSEC-2026-0185)、crossbeam-epoch 0.9.18→0.9.20 (RUSTSEC-2026-0204)、anyhow 1.0.102→…（关闭 Issue #651） |

> ⚠️ 注意：PR #657 关闭时称修复 8 项，但 Issue #651 中列出 7 项已知漏洞 crate（含 quick-xml、lopdf），建议核对 cargo-audit 确认是否全部覆盖。

### 待合并 PR（1 条）

- [#658](https://github.com/qhkm/zeptoclaw/pull/658)：Dependabot 提交，Docker 基础镜像 rust 1.95-slim-trixie → 1.98-slim-trixie（2026-09-01 创建，暂无评论）。提示：延续 #649 的升级路径，需注意 #646 中报告的 Rust 1.97 Clippy 基线问题可能在 1.98 上同样存在。

**整体评估**：今日项目在**供应链安全**上前进了一步（RustSec 批量修复），但安全加固仍有大量工作待完成。

---

## 4. 社区热点

今日讨论最集中的话题是 **Issue #646**（CI 恢复 Clippy 和 cargo-deny 检查），评论 3 条，为当前最高讨论量 Issue。

- [#646](https://github.com/qhkm/zeptoclaw/issues/646) [P1-critical] chore(ci): restore Clippy and cargo-deny checks on current toolchain — Rust 1.97.1 在现有 channel、provider 和 binary-plugin 代码中发现 5 个新 Clippy 警告；同时 cargo-deny 拒绝现有漏洞。该 Issue 反映了 PR #649 升级工具链后的 CI 基线问题，**阻塞后续所有工具链升级**（包括新 PR #658）。

其余 7 条新 Issue（#651-#656、#658 为 PR）均为周一集中提交，评论数为 0，虽无讨论热度，但作为安全审计批量提交，诉求清晰：**系统性修复 ZeptoClaw 的安全设计缺陷**。

---

## 5. Bug 与稳定性

以下按严重程度排列（均无对应 fix PR，除 PR #657 已解决 #651 外）：

| 严重度 | Issue | 问题描述 | 是否有 fix PR |
|---|---|---|---|
| **P1-critical** | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | CI 基线失败：Rust 1.97.1 导致 5 个新 Clippy 警告 + cargo-deny 拒绝现有漏洞，阻断工具链升级路径 | ❌ 无 |
| **P1-critical** | [#644](https://github.com/qhkm/zeptoclaw/issues/644) | 子进程继承完整父环境，可能暴露无关凭据；多个 runtime 的 `Command::output()` 超时未保证终止进程树 | ❌ 无 |
| **High** | [#656](https://github.com/qhkm/zeptoclaw/issues/656) | `zeptoclaw panel start` 将完整 API token 打印到 stdout（src/cli/panel.rs:221），进入终端滚动缓冲/CI 日志 | ❌ 无 |
| **High** | [#655](https://github.com/qhkm/zeptoclaw/issues/655) | Bearer token 在 3 处使用非恒定时间 `==` 比较（middleware、ws.rs、auth.rs），存在时序侧信道风险 | ❌ 无 |
| **High** | [#653](https://github.com/qhkm/zeptoclaw/issues/653) | Panel WebSocket 认证 token 作为 `?auth=` 查询参数传递（api/routes/ws.rs:28），泄露至反向代理/访问日志、浏览器历史 | ❌ 无 |
| **Medium** | [#652](https://github.com/qhkm/zeptoclaw/issues/652) | 密钥文件（config.toml、panel.token）以默认 umask 权限写入，多用户机器上其他本地用户可读（src/config/mod.rs:1572 等） | ❌ 无 |
| **Low** | [#651](https://github.com/qhkm/zeptoclaw/issues/651) | 7 个 RustSec 已知漏洞依赖，cargo deny 在零容忍策略下失败 | ✅ 已由 [#657](https://github.com/qhkm/zeptoclaw/pull/657) 修复（关闭） |

---

## 6. 功能请求与路线图信号

- **速率限制（#654）**：社区建议对 `POST /api/auth/login` 增加速率限制/账户锁定——目前 bcrypt cost 12（约 250ms/次）是唯一制动机制。项目已有 `SlidingWindowRateLimiter`（gateway/rate_limit.rs，当前仅用于 channel-messages），**复用现有组件即可实现**，很可能纳入下一版本。

- **CI 安全门禁恢复（#646）**：恢复 Clippy 和 cargo-deny 检查是供应链安全的前提，属于基础设施级需求，预计维护者会优先处理以解除工具链升级阻塞。

- **子进程环境隔离 + 进程树终止（#644）**：涉及多个 runtime 的架构性修改，短期排期可能性较低，但属于长期安全路线图方向。

其余安全修复（#652、#653、#655、#656）均为明确的缺陷修复而非新功能，不属于版本路线图的功能项。

---

## 7. 用户反馈摘要

今日 Issues 评论区活跃度低，但可从内容中提炼以下信息：

- **安全审计质量高（正面）**：贡献者 morler 在 24 小时内集中提交 7 条深度安全审计 Issue，每条均附有精确的源码文件/行号引用（如 src/cli/panel.rs:221、src/api/middleware.rs:138、src/config/mod.rs:1572 等），且 7 条中有 6 条标记了 `area:safety` 标签，反映出社区对 ZeptoClaw 安全基线的关注度上升。
- **CVE/依赖安全痛点（#651）**：Issue #651 中补充了完整扫描细节（cargo-audit 0.22.2、707 个依赖、deny.toml 零容忍策略 `ignore = []`），体现维护者对供应链安全的严格态度；该 Issue 已在当日被 PR #657 关闭，响应迅速。
- **工具链升级引发回归担忧（#646）**：Rust 1.97 升级暴露了 5 个 Clippy 新警告和漏洞拒绝，这与 PR #658（升级至 1.98）形成矛盾——用户可能因 CI 失败而推迟使用新工具链版本。

---

## 8. 待处理积压

以下 Issue/PR 需要维护者重点关注：

| 项目 | 创建时间 | 最后更新 | 等待天数 | 说明 |
|---|---|---|---|---|
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) [P1-critical] | 2026-07-23 | 2026-08-31 | **40 天** | CI Clippy/cargo-deny 恢复，标记 critical 但 40 天未处理，阻塞工具链升级路径（包括新的 #658） |
| [#644](https://github.com/qhkm/zeptoclaw/issues/644) [P1-critical] | 2026-07-23 | 2026-08-31 | **40 天** | 子进程环境/进程树安全，P1-critical 同样搁置 40 天 |
| [#651](https://github.com/qhkm/zeptoclaw/issues/651) | 2026-08-31 | 2026-08-31 | 0 天 | 已由 PR #657 当日修复并关闭 ✅ |

**维护建议**：两条 P1-critical Issue（#646、#644）已长达 40 天未响应，建议维护者优先响应并给出计划；同时建议审核 PR #657 是否完整覆盖 #651 中全部 7 个漏洞（quick-xml、lopdf 是否有对应升级）。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-01

## 1. 今日速览

项目过去 24 小时保持高活跃度：共 33 条 Issue 更新（29 条活跃）、50 条 PR 更新（48 条待合并），但今日无新版本发布，且合并/关闭的 PR 仅 2 条，显示讨论与评审工作量大而落地节奏偏慢。社区讨论高度集中在架构级 RFC 上——会话传输面、附件架构、内存策略解耦等设计提案持续获得维护者接管修订，说明项目正处于架构定型期。值得警惕的是，一条 **P0 数据丢失级 Bug（#10495）** 刚刚被报告并已被标记 accepted，需要优先响应。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共 2 条，其中一条为实质功能合并：

| PR | 内容 | 状态 |
|---|---|---|
| [#9582](https://github.com/zeroclaw-labs/zeroclaw/issues/9582) | **feat(plugins): 强制插件 wasi:http 主机持有出口策略** — 插件全部 `wasi:http` 请求现须通过主机拥有出口策略（对应 ADR-014，filed as proposed in #10169，Stage 2） | ✅ 已合并 |
| [#10500](https://github.com/zeroclaw-labs/zeroclaw/pull/10500) | chore(deps): bump anchore/sbom-action 0.24.0 → 0.24.2 | ✅ 已合并 |

**关键信号**：PR #9582 的合并直接回应了此前 Issue #9395 指出的"插件 wasi:http 出口无目的策略、无配置开关"的安全缺陷，是插件安全模型的重要补强。但对比 48 条待合并 PR 的存量，今日合并吞吐偏低。

---

## 4. 社区热点

今日评论最活跃的议题集中在架构 RFC，均为长期讨论被持续推进的提案：

| Issue/PR | 评论数 | 核心诉求 |
|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) **RFC: 运行时拥有的会话与传输面适配器** | 29 | 重构会话所有权模型，统一各入口的 typed ingress envelope——涉及 gateway/agent/channel 的架构级变更，风险标记 high |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) **RFC: 将内存生命周期策略与存储后端解耦** | 24 | `Memory` trait 不应同时承担存储操作与整合/治理决策，需在存储后端与生命周期策略之间建立清晰边界 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) **RFC: Web 聊天与频道的统一附件架构** | 23 | 为多通道附件处理建立统一架构（Revision 9，持续修订中） |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) **RFC: 细粒度沙箱策略——文件系统与网络限制** | 18 | 解决应用层路径准入与 OS 沙箱后端（Bubblewrap/Landlock/Seatbelt）之间的策略漂移 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) **RFC: 让 wire protocol 在 provider 构造与 onboarding 中成为一等公民** | 17 | 将 wire protocol 提升为 provider 接入的一等抽象 |

**分析**：社区讨论的重心集中在"边界划定"——内存生命周期、附件处理、沙箱策略、会话所有权，均是在规模扩大后厘清模块边界的架构演进。多条 RFC 已进入 maintainer takeover 修订阶段（如 #9487、#6909、#7822），说明维护者正在积极推动提案收敛。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 是否有 fix PR |
|---|---|---|---|
| **P0 — 数据丢失** | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) **Config::save() 可能用近空文件覆盖 operator 已填充的 config.toml** — 实测将 109 KB/25 agents 的配置文件替换为 702 字节（S0 数据丢失/安全风险），刚报告即被标记 accepted | OPEN / accepted | 暂无 |
| **P1 — 安全** | [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395) **插件 wasi:http 出口无目标策略且无配置开关** — 审计发现 `component.rs:172/214-225` 与 `wasm_memory.rs:42-43` 存在缺陷 | CLOSED | ✅ 已由 PR #9582 修复并合入 |

**新增 Bug 与回归**：今日无其他新增 Bug 报告。值得关注的是，PR #9582 的合并已闭环 #9395 的安全缺陷，但 #10495 作为刚报告的 P0 数据丢失问题，尚无可用的修复 PR，需最高优先级响应。

---

## 6. 功能请求与路线图信号

今日无新版本，以下为当前 PR 积压中可能进入下一版本的功能信号：

| 信号来源 | 功能 | 状态 |
|---|---|---|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | **配置保存安全** — Config::save() 需防止覆盖 operator 配置 | 已 accepted，无 fix PR |
| PR [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | **relay 终止的浏览器注册 frontdoor（phase 1）** — 追踪 #10315，仅 enrollment 且明示信任模型（今日新开） | OPEN |
| PR [#10233](https://github.com/zeroclaw-labs/zeroclaw/pull/10233) | **SOP 原子重命名流程（碰撞检查）** — SOP authoring 遗留能力 | OPEN |
| PR [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | **多模态像素级图像验证** — 防止损坏图片导致 provider 请求失败 | OPEN |
| PR [#10512](https://github.com/zeroclaw-labs/zeroclaw/pull/10512) | **rust-all 依赖批量升级（48 项更新）** — 含 clap 4.6.1→4.6.6 等 | OPEN |

**路线图观察**：#10050 提出"网关 verbatim 通道发送（无 agent turn）"，直指网关 47 个 `/api/*` 路径中缺失的能力，配合 #9487/#9488 的会话与附件架构演进，网关层正在经历系统性重构。SOP 相关的 PR（#10233、#9841）持续推进"daemon-owned SOP 控制平面 5/5"里程碑（#8288 tracker）。

---

## 7. 用户反馈摘要

从今日活跃 Issue 讨论中提炼的社区声音：

- **配置安全是当下最大痛点**：operator 的 109 KB/25 agents 配置文件被测试运行近乎清空（#10495），用户明确标注为"S0 - data loss / security risk"，反映出配置写入路径缺乏保护机制是真实事故而非理论风险。
- **内存架构需要更清晰的边界**：社区普遍认为 `Memory` trait 承担的职责过重（#6850、#9103），存储与生命周期治理应分离；#9103 在 Core REVISE 投票后已转向 bounded connector 决策评审。
- **插件出口安全是共识需求**：#9395 的审计发现被迅速以 PR #9582 闭环，说明社区对 wasi:http 出口策略缺失高度关注；#10076 进一步提出可组合的 WASM 插件运行时架构。
- **沙箱策略漂移影响实际使用**：#6996 指出应用层准入与 OS 沙箱后端存在历史性漂移，agent 行为在不同后端下表现不一致。

---

## 8. 待处理积压

以下长期活跃但未收敛的重要提案，提醒维护者关注：

| 项目 | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: 运行时拥有的会话与传输面适配器 | 2026-07-28 | OPEN / 29 评论 | 高热度架构提案，Revision 2 已发布，等待 maintainer 决策 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: 内存生命周期策略与存储后端解耦 | 2026-05-22 | OPEN / 24 评论 | 已讨论 3 个月+，尚无合并的对应实现 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: 统一附件架构 | 2026-07-28 | OPEN / 23 评论 | Revision 9，长期修订中 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: 细粒度沙箱策略 | 2026-05-28 | OPEN / 18 评论 | status: in-progress，需 maintainer review |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) **Tracker**: 可选频道/工具从编译期迁移到运行时插件 | 2026-07-08 | OPEN / accepted | 影响面大，协调多 PR 的 rollout tracker |

**优先级建议**：#10495（P0 配置数据丢失）应排在最前；其次关注 #9487/#9488 等高热度 RFC 的收敛决策，避免长期悬而未决；#8850 tracker 涉及的编译期→运行时插件迁移是架构演进的长期主线，建议保持推进节奏。

---

*数据来源：zeroclaw-labs/zeroclaw GitHub（2026-09-01 抓取）*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*