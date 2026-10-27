# OpenClaw 生态日报 2026-08-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-04 15:28 UTC

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

# OpenClaw 项目动态日报 — 2026-08-04

## 一、今日速览

过去 24 小时 OpenClaw 仓库保持高强度运转：共 500 条 Issue 更新（新开/活跃 437 条，关闭 63 条，关闭率约 12.6%），500 条 PR 更新（待合并 401 条，合并/关闭 99 条，合并率约 19.8%），并发布 2 个补丁版本（v2026.7.1-1、v2026.7.1-2）。社区讨论集中在实时语音状态管理（57 条评论）、多智能体编排稳定性与 Gateway 主线程阻塞三大方向。今日新出现 1 个 P0 级数据丢失缺陷（#119090，托管媒体清理失败开放删除）。总体判断：项目功能推进速度较快，修复 PR 产出充沛，但大量 PR 处于"等待作者 / 需要证明"状态，合并吞吐受限，稳定性债务（主线程阻塞、内存、媒体丢失类问题）正在累积。

---

## 二、版本发布

### v2026.7.1-2
- **npm 插件更新修复**：接受新版 npm 客户端产生的 singleton-array 元数据，使受跟踪的官方插件能够正常安装并更新到修订版本。[#108336](https://github.com/openclaw/openclaw/issues/108336) · [Release](https://github.com/openclaw/openclaw/releases)

### v2026.7.1-1
- **Codex 进度回复修复**：在交付进度消息后保持 app-server turn 继续运行，使 GPT/Codex 能到达最终的权威终端回复，避免中途停止。[#106961](https://github.com/openclaw/openclaw/issues/106961) / [#108487](https://github.com/openclaw/openclaw/issues/108487)，感谢 @joshavant。
- **Memory Core 启动修复**：恢复派生的 legacy-index 及缓存相关状态（原始发布说明此处截断）。

两个版本均为 7.1 系列的补丁级发布，未见破坏性变更说明，建议 7.1 用户跟进更新。

---

## 三、项目进展

24 小时内合并/关闭 99 条 PR，核心落地成果可通过刚发布的 v2026.7.1-1/2 观察：Codex 回复链路、Memory Core 启动恢复、npm 插件元数据兼容三个方向已修复。以下为今日仍在推进的关键开放 PR：

- **轨迹可观测性系列（今日新开）**：PR [#119267](https://github.com/openclaw/openclaw/pull/119267) 将 session 间委托记录为运行时轨迹中的一等结构化事实，是 #116220 之后的第二部分，直接呼应 #77598 "追踪 dev agent 行为"的诉求。
- **流迭代器饥饿修复**：PR [#112455](https://github.com/openclaw/openclaw/pull/112455) 在模型流处理循环中让出事件循环，防止诊断事件发射与内容捕获阻塞主线程。
- **压缩估算器修正**：PR [#117400](https://github.com/openclaw/openclaw/pull/117400) 改用规范化 session context projection 做 turn 后压缩估算，避免压缩/重置边界被忽略导致 token 高估与误压缩。
- **取消语义保护**：PR [#117352](https://github.com/openclaw/openclaw/pull/117352) 在工具执行边界保留取消信号，防止已取消的 agent 运行继续执行变更型工具。
- **配置安全预检**：PR [#117128](https://github.com/openclaw/openclaw/pull/117128) 在配置接受前预检 exec SecretRef 命令路径（符号链接/缺失/不安全权限），避免"配置校验通过但重启崩溃"的循环；PR [#105323](https://github.com/openclaw/openclaw/pull/105323) 为 base64 图像解码增加预算估算防护。
- **渠道修复批量就绪**：Discord 线程归档重进（[#111148](https://github.com/openclaw/openclaw/pull/111148)）、QQBot abort 信号处理（[#109896](https://github.com/openclaw/openclaw/pull/109896)）、Telegram 降级内联控件上报（[#107105](https://github.com/openclaw/openclaw/pull/107105)）均处于待合并或待证明状态。

---

## 四、社区热点

| 议题 | 评论数 | 状态 | 核心诉求 |
|---|---|---|---|
| [#116201 Realtime voice 状态无界保留](https://github.com/openclaw/openclaw/issues/116201) | 57 | OPEN, P1 | 实时语音会话在慢/停滞/突发 provider 行为下无限保留 superseded consult 工作、大帧、pre-ready 音频；当前仅有条目数/取消信号等软限制，缺少硬所有权边界，需资源治理模型 |
| [#77598 追踪 dev agent 行为](https://github.com/openclaw/openclaw/issues/77598) | 22 | OPEN, maintainer | Pash dev agent 的 24 小时观察记录，社区对 agent 自主行为透明化与行为轨迹的持续关注 |
| [#43367 多智能体编排不稳定](https://github.com/openclaw/openclaw/issues/43367) | 13 | OPEN, P1 | 并发 `agents add` 配置互相覆盖、session-lock 失败、子任务脱离父会话，多 agent 运行在实践中不可靠 |
| [#41744 Feishu 读图媒体丢失](https://github.com/openclaw/openclaw/issues/41744) | 13 | OPEN, P1 | agent 用 `read` 工具读取本地图片后，最终出站回复丢失媒体附件 |
| [#118846 Gateway 主线程启动即饱和](https://github.com/openclaw/openclaw/issues/118846) | 12 | OPEN, P1 | plugin-metadata 快照 + fs statting 从进程启动即占满主线程，本地 RPC 在 ws_upgrade 处以 1006 断连 |

高评论议题集中在两类：**资源与状态治理**（语音、会话、多智能体）与**渠道消息可靠性**（Feishu、Telegram、WebChat）。这说明用户对 OpenClaw 作为多通道网关的稳定性与可观测性要求正在快速上升。

---

## 五、Bug 与稳定性

### P0（数据丢失）
- **[#119090] 托管媒体清理失败开放删除**（今日新开，maturity:stable，bulk-filed）：per-agent session store 不可读时（权限/IO/损坏/数据库锁定），transcript 附件索引解析为 `null`，所有托管媒体被判定为未引用，一次清理即永久删除该会话生成的媒体。**尚无 fix PR**，属典型"失败开放"缺陷，建议最高优先级处理。[Issue #119090](https://github.com/openclaw/openclaw/issues/119090)

### P1（高影响）
- **[#118846] Gateway 主线程被 plugin-metadata 快照占满**：CPU 自进程启动即 100%，accept loop 饿死，RPC 1006 断连；source-repro，无 fix PR。[Issue #118846](https://github.com/openclaw/openclaw/issues/118846)
- **[#115908] Session transcript 投影 reconcile 活锁**：持续写入下主线程同步重建不收敛，事件循环阻塞数十秒，所有渠道传输停摆；source-repro，无 fix PR。[Issue #115908](https://github.com/openclaw/openclaw/issues/115908)
- **[#115424] Gateway V8 堆 OOM → 7 次核心转储循环**：长会话 turn 触发 `FATAL ERROR: Reached heap limit`，main-session-restart-recovery 把一次崩溃放大为 7 次转储循环。[Issue #115424](https://github.com/openclaw/openclaw/issues/115424)
- **[#99910] Memory dreaming 钉死事件循环约 10 分钟**：2026.6.9 起每个 dreaming run 零日志、CLI/RPC 无响应、渠道掉线，直至外部 watchdog 杀死；短时记忆存储永远无法持久化。[Issue #99910](https://github.com/openclaw/openclaw/issues/99910)
- **[#115421] Schema 降级恢复隔离/清空状态 DB**：v6 schema 被仅支持 v1 的旧安装打开后，状态库被隔离为 .bak 并新建空库，cron 任务等状态丢失；已有 linked PR 打开。[Issue #115421](https://github.com/openclaw/openclaw/issues/115421)
- **[#78493] sudo openclaw update 产生混合属主**：root/用户混合所有权导致后续 `doctor` EACCES，且 doctor 在读取失败后覆盖配置（data-loss + crash-loop）。[Issue #78493](https://github.com/openclaw/openclaw/issues/78493)
- **[#40611] 心跳漂移修复引发激进重试**：PR #39182 引入的回归，活跃对话期间心跳重试持续阻塞 Telegram 消息处理。[Issue #40611](https://github.com/openclaw/openclaw/issues/40611)
- **[#72015] active-memory 阻塞回复 + QMD 启动过载**：多 agent gateway 启用 active-memory 后正常回复变慢/不可靠。[Issue #72015](https://github.com/openclaw/openclaw/issues/72015)
- **[#43374] 多 agent 并发时所有 LLM 调用同时超时**：4 个 Telegram agent 并发时全量超时（每 60-90 秒），curl 验证 API 正常，判定为内部瓶颈而非 provider 问题。[Issue #43374](https://github.com/openclaw/openclaw/issues/43374)
- **[#107873] embedded prompt-lock 接管中止可见 WebChat turn**：2026.7.1 回归，工具/提示失败后直接中止而非重试。[Issue #107873](https://github.com/openclaw/openclaw/issues/107873)

### 中低严重度（摘录）
- **[#116010] 所有持久会话被 128k 上下文封顶**：与模型选择或配置的 contextTokens 无关。[Issue #116010](https://github.com/openclaw/openclaw/issues/116010)
- **[#108215] 大工具输出后上下文用量从 57% 跌至 13%**：压缩计数为 0，疑似隐式丢弃上下文。[Issue #108215](https://github.com/openclaw/openclaw/issues/108215)
- **[#117644] Windows/PowerShell 下 agent 输出 Unix 命令**：`head`、`~` 展开等，比 #10868 影响面更广。[Issue #117644](https://github.com/openclaw/openclaw/issues/117644)
- **[#118560] WebChat 主会话重置后画布隐藏早期消息**：转录仍在但 UI 不可见。[Issue #118560](https://github.com/openclaw/openclaw/issues/118560)

---

## 六、功能请求与路线图信号

- **文件系统沙箱（[#7722](https://github.com/openclaw/openclaw/issues/7722)）**：4 👍，2026-02 提出，已有大型 PR [#60981](https://github.com/openclaw/openclaw/pull/60981)（PathGuard）但滞留 4 个月（stale，需真实行为证明）。安全边界诉求明确，是否纳入下一版本取决于维护者对 XL 级 PR 的消化意愿。
- **每 agent dreaming 配置（[#67413](https://github.com/openclaw/openclaw/issues/67413)）**：5 👍，memory-core dreaming 对所有 workspace 同时触发，可超过 MemoryMax（6GB）触发 OOM；需 per-agent 开关与错峰调度。
- **插件熔断器（[#41899](https://github.com/openclaw/openclaw/issues/41899)）**：单个插件劣化拖垮整个 gateway（锁持有超时、重启抖动、队列增长），与今日 P0 #119090 的"失败开放"问题形成呼应，属于可靠性基础设施。
- **降低工具 schema token 开销（[#14785](https://github.com/openclaw/openclaw/issues/14785)）**：每会话固定 ~3,500 token（13,972 字符）的固定税，已列出主要开销工具表，优化空间明确。
- **session-memory hook 扩展到 reset/prune（[#51572](https://github.com/openclaw/openclaw/issues/51572)）**：目前仅在自动压缩时触发，idle 重置/每日重置/维护剪枝后会话上下文静默丢失。
- **限流回退用户可见通知（[#92672](https://github.com/openclaw/openclaw/issues/92672)）**：RFC 提案，primary 模型限流时静默挂起 30 分钟，用户只感到"卡住"；提案约 65 行增量代码，若采纳可显著改善体感。
- **记忆 MVP：审查/编辑/遗忘/冲突解决（[#42650](https://github.com/openclaw/openclaw/issues/42650)）**：为记忆质量提供人工修正工作流。

---

## 七、用户反馈摘要

- **多智能体生产不可用**（[#43367](https://github.com/openclaw/openclaw/issues/43367)）：用户描述"尝试编排小型并行编码批次时命中一连串失败"，并发配置覆盖、锁失败、子任务脱离，使多 agent 运行"在实践中不可靠"。
- **记忆插件持续报错**（[#90414](https://github.com/openclaw/openclaw/issues/90414)）：`memory_search` 持久返回"index metadata is missing"，2 👍，已被标记 `clawsweeper-recovery-stuck`；说明用户对记忆能力有真实依赖但长期受阻。
- **压缩策略配置无效**（[#48579](https://github.com/openclaw/openclaw/issues/48579)）：用户设置 `mode: "off"` + `ttl: "999h"`，一天仍触发约 82 次压缩，且发生在仅 12-16% 上下文占用时，配置信任度受损。
- **WebChat 渲染不一致**（[#77136](https://github.com/openclaw/openclaw/issues/77136) / [#112314](https://github.com/openclaw/openclaw/issues/112314) / [#118560](https://github.com/openclaw/openclaw/issues/118560)）：多条反馈指向 WebChat 偶发"吞消息"或历史消失，但转录数据完整、TUI 正常，用户困惑且不满。
- **Windows 原生体验欠缺**（[#117644](https://github.com/openclaw/openclaw/issues/117644)）：agent 在 PowerShell 中输出 `head`、`~` 等 Unix 语法，错误信息为设备名/FileStream 错误，Windows 用户需要跨平台命令生成修复。
- **限流静默挂起**（[#92672](https://github.com/openclaw/openclaw/issues/92672)）：用户感知"卡住"、看到 `non_deliverable_terminal_turn` 零提示，社区提案要求 fallback 时发送人话通知。
- **微信插件装载失败**（[#115478](https://github.com/openclaw/openclaw/issues/115478)）：`@tencent-weixin/openclaw-weixin@2.4.6` 在 main 分支上因 `plugin-sdk/channel-runtime` exports 缺失无法加载，渠道插件生态与核心版本存在兼容性摩擦。

---

## 八、待处理积压

以下为长期未闭合且影响明确的重要条目，建议维护者优先关注：

- **[#7722] 文件系统沙箱配置**（2026-02-03 开启，`recovery-stuck`，4 👍）：安全功能诉求，对应 PR #60981 已滞留约 4 个月。[Issue #7722](https://github.com/openclaw/openclaw/issues/7722)
- **[#43367] 多智能体编排不稳定**（2026-03-11，P1）：当前社区最高频痛点之一，已有 linked PR 但未见合入。[Issue #43367](https://github.com/openclaw/openclaw/issues/43367)
- **[#41744] Feishu 读图媒体丢失**（2026-03-10，P1）：渠道核心路径缺陷，fix PR 打开中，等待合入。[Issue #41744](https://github.com/openclaw/openclaw/issues/41744)
- **[#90414] agentmemory 元数据缺失**（2026-06-04，`recovery-stuck`）：记忆插件长期不可用，2 👍。[Issue #90414](https://github.com/openclaw/openclaw/issues/90414)
- **[#99910] Memory dreaming 事件循环钉死**（2026-07-04，P1）：周期性稳定性事故，未修复。[Issue #99910](https://github.com/openclaw/openclaw/issues/99910)
- **[#78436] session-history 守卫 PR**（2026-05-06，stale）：部分解决 #69086，长时间未合入，存在合并冲突风险。[PR #78436](https://github.com/openclaw/openclaw/pull/78436)
- **[#69346] 空流配置错误诊断 PR**（2026-04-20，等待作者）：已过三轮机器人评审，亟需人类评审推进。[PR #69346](https://github.com/openclaw/openclaw/pull/69346)

---

**健康度评估**：今日 Issue 关闭率 12.6%（63/500）、PR 合并率 19.8%（99/500），新开 P0 数据丢失缺陷与多个 P1 主线程/内存问题并存，项目处于"功能推进快、稳定性债积累"的阶段。建议下一阶段将**资源治理**（实时语音、会话投影、多智能体）与**渠道消息可靠性**（Feishu、Telegram、WebChat）列为最高优先级，并加速消化处于"等待作者/需要证明"状态的存量 PR。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**数据窗口**：2026-08-03 ~ 2026-08-04 | **覆盖项目**：13 个（含 2 个无活动）


## 一、生态全景

以 OpenClaw 为核心的"Claw 家族"（NanoClaw、PicoClaw、ZeroClaw、IronClaw、NullClaw 等）已形成明显的分叉与专业化演进格局，同一日报周期内头部项目日更新量级从 50 到 500 条不等，生态整体处于**功能快速推进与稳定性债务积累并存的阶段**。多智能体编排、MCP 工具链、记忆管理、密钥安全四大议题在几乎所有活跃项目中同步浮现，说明行业正从"能不能跑"转向"在复杂配置下不崩、不卡、不泄密、不丢记忆"。值得警惕的是，多个项目同时出现**数据丢失类 P0 缺陷**（OpenClaw #119090、IronClaw #6898、ZeroClaw S0 权限隔离）与**安全类长期未闭环 Issue**（NanoBot #4784 已 30 天、LobsterAI #1202 已 125 天），安全治理速度落后于功能迭代速度，是当前生态最普遍的短板。


## 二、各项目活跃度对比

| 项目 | Issue 动态 | PR 动态 | 版本发布 | 合并/关闭效率 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（关 63，12.6%） | 500（合/关 99，19.8%） | 2 个补丁版 | 合并吞吐受限，大量 PR 等待证明 | 🟡 功能推进快，稳定性债累积 |
| **Hermes Agent** | 50（46 活跃） | 50（48 待合） | **v0.20.0 大版本**（3,650 commits） | 里程碑级收敛 | 🟢 良好，节奏快、健康度高 |
| **IronClaw** | 50（关 8） | 50（合/关 20） | 无（发布 PR 搁置 32 天） | 执行力强但质量门失守 | 🟡 进度高、可信度偏低 |
| **ZeroClaw** | 50（关 2） | 50（合 1） | 无 | 合并吞吐极低，49 PR 积压 | 🟡 设计密度高，评审是瓶颈 |
| **CoPaw** | 20（10 开/10 关） | 47（合/关 21） | Beta 验证完成，正式版临近 | 修复链路完整（时区三 PR 闭环） | 🟢 良好 |
| **NanoBot** | 5 | 27（合/关 20） | 无 | Backlog 清理积极 | 🟢 迭代快，安全治理待加强 |
| **LobsterAI** | 1 | 12（合/关 10） | 2026.8.3 并入 main | 发布冲刺效率高 | 🟢 功能面良好，安全积压 |
| **PicoClaw** | 8（关 5） | 6（关 3） | 无 | 存量清理完成，新 PR 等待评审 | 🟡 中等，关键 Bug 修复滞后 |
| **NanoClaw** | 0 | 8（合 2） | 无 | 核心合入稳健 | 🟢 健康，社区贡献活跃 |
| **NullClaw** | 0 | 1 | 无 | — | 🟢 平稳维护期 |
| **Moltis** | 0 | 2 | 无 | — | 🟢 稳定，功能开发期 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | — | ⚪ 无活动 |


## 三、OpenClaw 在生态中的定位

- **规模绝对领先**：单日 500 条 Issue + 500 条 PR 更新，是第二梯队（50 条量级）的 **10 倍**，社区讨论密度与问题覆盖面构成强大飞轮，是生态事实上的核心参照系。
- **技术路线差异**：走"**全能网关**"路线——实时语音、多智能体编排、记忆系统、全渠道接入一体推进，而非如 Hermes 聚焦桌面端、IronClaw 押注 Rust 架构治理、Moltis 深耕 MCP 基础设施。其补丁版本高频发布（同日 2 个）说明主干迭代节奏远快于同类。
- **优势与隐忧并存**：优势在于功能覆盖广、修复 PR 产出充沛（99 条/日）；隐忧在于 **PR 合并率仅 19.8%**、P0 数据丢失缺陷（#119090 托管媒体"失败开放"删除）尚无修复、主线程阻塞类 P1 问题成群（#118846、#115908、#115424、#99910）。这暴露了"功能速度优先于稳定性治理"的路线代价，也解释了为何下游分叉项目普遍将**稳定性、安全、架构简化**作为差异点。


## 四、共同关注的技术方向

| 技术方向 | 涉及项目与具体诉求 |
|---|---|
| **多智能体编排可靠性** | OpenClaw #43367（并发配置覆盖、子任务脱离）；ZeroClaw #9646/#9647（知识图谱与会话工具无 agent 所有权，S0）；CoPaw #6455（多模型并行独立跑批）；PicoClaw #3301（路由会话上下文失效） |
| **MCP 生态成熟度** | Moltis #1183（托管仓库包管理，安装/回滚）；NanoBot #5237（业务错误码被当成功，Agent 静默超时）；PicoClaw #3269（MCP 连接失败导致对话挂起 15 天未修） |
| **记忆与上下文管理** | OpenClaw #99910（Memory dreaming 钉死事件循环）与 #119090（媒体清理数据丢失）；Hermes #10771（Auto Dream 高赞）；CoPaw #6624（自动压缩不触发记忆）；PicoClaw #3301；LobsterAI memory 相关 |
| **密钥与权限安全** | NanoBot #4784（API key 跨 provider 泄露，30 天无修复）；LobsterAI #1202（agent 诱导泄漏 model key，125 天）；IronClaw #6900（跨用户内存泄漏，P0）；ZeroClaw 两个 S0 权限隔离；Hermes #43930（重复变更熔断护栏）；OpenClaw #117128（exec SecretRef 配置预检） |
| **渠道消息可靠性** | OpenClaw（Feishu 媒体丢失 #41744、Telegram 心跳 #40611）；NanoBot（Telegram 轮询静默卡死 #5156、WeCom 写目录 Bug）；Hermes（Telegram 吞回复 #78541、微信语音格式）；NanoClaw（Discord 审批按钮全量失效 #3185）；IronClaw（Telegram Markdown 原样渲染）；CoPaw（OneBot 未授权连接 #6676、Console 审批不可见 #6655） |
| **成本与 token 治理** | CoPaw #6649（GPT-5.6 prompt caching，13 评论领跑）；ZeroClaw #9631（OpenRouter 稳定 session_id 触发缓存）；OpenClaw #117400（压缩估算修正，避免 token 高估）；PicoClaw #3317（prompt cache token 日志） |
| **可观测性** | OpenClaw 轨迹可观测系列（#119267）；IronClaw grep 诊断增强 + tracing target 误用修复（121 处）；PicoClaw prompt cache token 指标输出 |

**共性洞察**：渠道可靠性是网关类项目的"生死线"，每个项目都至少有一个渠道级 Bug 在飞；安全问题的共性不是"没有安全设计"，而是**响应速度远慢于功能节奏**；成本优化不再是可选加分项，而是社区高频刚需。


## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能多通道 AI 网关 | 追求功能覆盖面的开发者/团队 | Node.js 单体网关，插件生态庞大，功能迭代激进 |
| **Hermes Agent** | 桌面端优先 + 本地记忆 | 桌面重度用户、macOS 用户 | 大版本节奏（v0.20.0），桌面端与 CLI/TUI 多端协同 |
| **IronClaw** | 工程质量与大规模重构 | 企业级、对审计与治理敏感 | Rust 重型架构，WS2/WS3/WS4/WS6 多轨重构，CI 执法门体系 |
| **ZeroClaw** | 安全架构与协议兼容 | 安全敏感型部署、多租户场景 | RFC 驱动设计（v0.9.0 安全架构系列），OpenAI 协议兼容 profile |
| **CoPaw** | 多模型并行 + 中文生态 | 中文用户、多模型交叉验证 | 多 provider 并行，Scroll 压缩机制，运营活动系统 |
| **NanoBot** | 轻量 WebUI 优先 | 快速自部署的个人用户 | 简洁权限模型（回归单一 `Tool.enabled()`），插件化起步 |
| **LobsterAI** | 桌面端 + 商业化运营 | 消费级用户、网易生态 | Electron 桌面端，credit 运营体系，依赖现代化推进 |
| **PicoClaw** | 轻量、嵌入式背景 | 资源受限环境、极简部署 | Sipeed 硬件背景，强调小体积与启动可靠性 |
| **NanoClaw** | 稳定性 + 供应链安全 | 核心团队可控的稳定部署 | 镜像硬化、定时任务语义修正 |
| **Moltis** | MCP 基础设施 | MCP 生态开发者 | 托管仓库包管理，vault 凭据集成，向"企业级 MCP 管理平台"演进 |
| **NullClaw** | 多 CLI provider 聚合 | 已有多个本地 CLI 工具的重度用户 | spawn-per-request 架构，适配 grok-cli/codex-cli/gemini-cli 等 |


## 六、社区热度与成熟度分层

**第一梯队 · 快速迭代期**（日更新 50+ 条，功能与修复并行高压）：OpenClaw、Hermes Agent、IronClaw、ZeroClaw、CoPaw。共同特征：Issue/PR 吞吐量大，但合并率分化明显——Hermes/CoPaw 能维持健康的闭环效率，OpenClaw 与 ZeroClaw 则面临 PR 积压（OpenClaw 401 待合、ZeroClaw 49 待合）。

**第二梯队 · 质量巩固期**（日更新 5~30 条，重心在清理 backlog 与安全治理）：NanoBot（清理 4 个滞留数月 PR，但安全 Issue 悬置）、LobsterAI（发布冲刺，安全积压 125 天）、PicoClaw（存量清理完成，新 PR 待评审）、NanoClaw（核心稳健，社区外部贡献开始流入）。

**第三梯队 · 平稳/观望期**：NullClaw（单 PR 推进）、Moltis（功能开发期，无 Issue 压力）。

**无活动**：TinyClaw、ZeptoClaw——分叉生态的自然筛选已开始，缺乏维护者投入的分支正在静默退出。


## 七、值得关注的趋势信号

1. **从"功能竞赛"转向"稳定性债务偿还"**：OpenClaw 的 P0 媒体删除、IronClaw 的"绿 CI 无意义"、ZeroClaw 的 S0 权限隔离，共同指向一个拐点——**数据安全与审计可信度将取代功能数量成为下一阶段选型标准**。ZeroClaw 将"审批超时被记录为显式拒绝"定性为"伪造审计轨迹"，是社区对审计语义准确性要求提高的标志性事件。

2. **MCP 语义完整性是下一个协议级战场**：NanoBot #5237 揭示的"业务错误被包装为成功"问题普遍存在，Moltis 的托管仓库包管理则代表"用包管理器体验管理 MCP 服务器"的方向。**MCP 从"能连上"走向"语义正确、可运维、可回滚"**是明确趋势。

3. **安全设计哲学向"简单可审计"收敛**：NanoBot 主动移除 request-scoped 权限层、回归构建期单一开关（#5238），ZeroClaw 将 shell-only 策略推广为全工具统一 allow/ask/deny 层——两个独立项目不约而同选择**简化权限模型**，暗示细粒度运行时控制在实际维护中成本过高，"默认拒绝 + 显式放行"成为共识方向。

4. **成本感知成为架构内建属性**：CoPaw 的 prompt caching 参数支持、ZeroClaw 的稳定 session_id、PicoClaw 的 cache token 日志、OpenClaw 的压缩估算修正——**token 成本不再只是计费问题，而是被纳入协议参数、会话设计、可观测性指标的架构级考量**。

5. **记忆系统进入"可靠性深水区"**：从 OpenClaw 的 dreaming 事件循环钉死、Hermes 的 Auto Dream 社区请愿、到 CoPaw 的自动压缩不触发记忆——**"记忆"正在从功能特性转变为需要人工审查、编辑、遗忘、冲突解决的基础设施**（OpenClaw #42650 已提出 MVP 方向）。

6. **CI 质量门信任危机**：IronClaw 自曝四个 CI 执法门可绕过、main 分支 clippy 红色且无 PR 触发过该组合、shrink-only 棘轮未跟踪松弛——**"看起来在保护、实际上没保护"的 CI 是多个大型项目的通病**。sabotage-testing（故意引入违规验证门禁）是值得全行业借鉴的纠偏方法。

7. **对开发者的参考价值**：若您在选型，追求功能覆盖面选 OpenClaw、追求桌面体验选 Hermes、追求安全与多租户选 ZeroClaw、追求轻量自部署选 NanoBot/PicoClaw；若您在做 Agent 开发，应优先为工具调用补充**业务错误透传语义**、为敏感操作内置**审计可区分性**（超时 vs 拒绝）、并将 **prompt cache 友好性**纳入会话设计——这三点是当前社区反馈最集中、同时也是缺口最明显的工程领域。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-04

## 1. 今日速览

项目今日保持高位活跃：过去 24 小时内有 **20 个 PR 被合并/关闭、7 个 PR 待合并、5 个 Issue 有更新**，且无新版本发布。工作重心集中在 WebUI 体验打磨（6 个相关 PR）、Anthropic Opus 5 兼容性修复、以及 Telegram/WeCom/Mattermost 渠道的稳定性改进。值得注意的是，一个**高危安全 Issue（#4784，API 密钥跨 Provider 泄露）已持续近 30 天未被处理**，而多个滞留数月的 PR（#1776、#3200、#3211、#1288）今日被合并，显示维护者正在清理 backlog。整体项目迭代节奏快，但安全治理与长尾 PR 的响应速度仍需关注。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 覆盖了多个方向，项目在 **兼容性、安全性、开发者体验、渠道稳定性** 四条线上同时推进：

### 🔧 关键修复与功能合入

- **[P1] 修复 Anthropic Opus 5 兼容性（#5236）** — 以模型家族版本阈值替换硬编码的参数排除列表，使 Opus 5 的 `output_config.effort` 自适应思考正常发送，同时保留旧模型 `budget_tokens` 手动配置。对应关闭 Issue #5235。
  https://github.com/HKUDS/nanobot/pull/5236

- **[P1] WebUI 可信代理引导认证（#5210）** — 为 `/webui/bootstrap` 增加可选的"可信上游代理"认证模式，支持 Cloudflare Tunnel + Access 场景，要求直连 TCP 对端必须匹配显式配置的 IPv4/IPv6 CIDR 且携带非空请求头，为私有部署提供零 token 的安全入口。
  https://github.com/HKUDS/nanobot/pull/5210

- **会话系统功能落地与安全模型迭代（#5211 → #5238）** — **#5211** 合入跨会话搜索与 @ 提及功能，支持 `search_sessions` / `read_session` 有界只读访问；紧接着 **#5238** 提出移除 #5211 引入的 request-scoped 权限层，回归 `Tool.enabled()` 单一构建期开关，删除 `SessionAccessScope` 抽象。这表明项目组在安全模型上正在快速试错与收敛。
  https://github.com/HKUDS/nanobot/pull/5211
  https://github.com/HKUDS/nanobot/pull/5238

- **WebUI 开发者体验：集成 Vite 开发模式（#5239）** — 新增 `nanobot webui --dev` 一键启动 gateway + Vite dev server 并支持前端 HMR，附带 HTTP 就绪检查、受管/外部 gateway 处理和 sidecar 安全清理，降低贡献者门槛。
  https://github.com/HKUDS/nanobot/pull/5239

### 🧹 长期积压 PR 清理

以下滞留数月、带有 `[conflict]` 标记的 PR 今日全部关闭（已合入），说明维护者进行了集中的 backlog 清理：

- **#1776**（3月）Telegram 群组模式配置字段补齐
- **#3200**（4月）consolidator 边界查找失败静默错误修复
- **#3211**（4月）Agent 插件基础设施（`nanobot.agents` entry point）
- **#1288**（2月）claude-code / codex 委托技能

https://github.com/HKUDS/nanobot/pull/1776
https://github.com/HKUDS/nanobot/pull/3200
https://github.com/HKUDS/nanobot/pull/3211
https://github.com/HKUDS/nanobot/pull/1288

### 🧩 WebUI 细节打磨（#5240–#5245）

今日合入 6 个 WebUI 相关 PR，均为低风险体验优化：统一浮动控件语义、内联 token 高亮样式、自动化元数据与时间戳对齐、时间戳 tooltip 样式统一、markdown 渲染 prompt 预览、拒绝畸形斜杠命令并给出最接近的候选项。
https://github.com/HKUDS/nanobot/pull/5240
https://github.com/HKUDS/nanobot/pull/5241
https://github.com/HKUDS/nanobot/pull/5242
https://github.com/HKUDS/nanobot/pull/5243
https://github.com/HKUDS/nanobot/pull/5244
https://github.com/HKUDS/nanobot/pull/5245

### 📡 渠道修复

- **WeCom（#5223）**：文件名清洗后为空字符串时回退，避免写目标变成目录路径
- **Telegram（#5222）**：修复语言标签含特殊字符（`c++`、`objective-c`）时代码块损坏

https://github.com/HKUDS/nanobot/pull/5223
https://github.com/HKUDS/nanobot/pull/5222

---

## 4. 社区热点

### Issue #4784：Provider API 密钥跨 Provider 泄露（安全）

> 创建 2026-07-06 | 更新 2026-08-04 | 2 条评论 | 仍 OPEN

**核心问题**：`OpenAICompatProvider._setup_env()` 将 API key 直接写入进程全局 `os.environ`。gateway 类 provider 使用 `os.environ[spec.env_key] = api_key` 会**覆盖**之前的值；非 gateway provider 使用 `setdefault` 则可能导致密钥残留。多种 provider 共存时密钥存在交叉污染风险。

**分析**：这是当前项目**最严重的安全隐患**，且已存在近一个月。评论数不多但问题性质严重——涉及多 provider 场景下的密钥隔离，可能影响所有使用 gateway 聚合服务的用户。目前无对应修复 PR，建议维护者优先响应。

https://github.com/HKUDS/nanobot/issues/4784

### Issue #5237：MCP 工具返回业务错误但 Agent 静默超时

> 创建 2026-08-04 | 更新 2026-08-04 | 1 条评论 | 仍 OPEN

**核心问题**：MCP server 在 `CallToolResult.content` 内返回业务错误包（如 `{"code":404,"msg":"data not exist"}`）且 `isError = False` 时，Nanobot 将其视为成功。LLM 完全不知道调用失败，不会重新规划工具调用，只能干等到 `tool_timeout` 触发。即使超时后，Agent 也无法识别真正原因。

**分析**：这是 **MCP 协议语义的完整性问题**——外层 `isError` 与内层业务错误码的映射缺失。评论指向设计层面的缺陷而非简单 bug，可能影响所有依赖 MCP 工具链的生产用户。

https://github.com/HKUDS/nanobot/issues/5237

### PR #5211 / #5238：会话权限模型的快速迭代

跨会话搜索/提及功能（#5211）合入仅 3 天，就迎来 #5238 重构——移除 request-scoped 访问授权层。这一来一回说明**会话系统最初的安全设计过于复杂**，开发团队在落地后迅速简化，但中间版本（如有发布）可能存在权限模型不一致的风险，值得关注。

https://github.com/HKUDS/nanobot/pull/5211
https://github.com/HKUDS/nanobot/pull/5238

---

## 5. Bug 与稳定性

### 🔴 严重（P0/P1）

- **[安全] Provider API 密钥跨 Provider 泄露（#4784）** — 进程级 `os.environ` 被多个 provider 共享读写，gateway 密钥覆盖/残留导致多租户密钥串扰。**无修复 PR**，已开放近 30 天。
  https://github.com/HKUDS/nanobot/issues/4784

- **[P1][已修复] Opus 5 配置被 API 拒绝（#5235）** — `omit_temperature` 子串列表未包含 `"opus-5"`，导致仍发送已被废弃的 temperature 参数。**修复 PR #5236 今日合入，Issue 已关闭。**
  https://github.com/HKUDS/nanobot/issues/5235
  https://github.com/HKUDS/nanobot/pull/5236

### 🟠 中（P2）

- **[P2] MCP 业务错误被当作成功（#5237）** — `isError=False` 但内容为业务错误码时，Agent 静默等待直至超时。目前**无修复 PR**。
  https://github.com/HKUDS/nanobot/issues/5237

- **[P2] Matrix 机器人被邀请后不自动加入（#5247）** — `_on_room_invite` 回调未触达，需手动 API 接受邀请。**无修复 PR**。
  https://github.com/HKUDS/nanobot/issues/5247

- **[P2] Telegram 轮询静默卡死（对应 PR #5156）** — 网络抖动后 bot 永久停止接收消息，进程无日志无崩溃。**修复 PR 已存在但 8/29 创建至今未合并**。
  https://github.com/HKUDS/nanobot/pull/5156

### 🟢 已由今日 PR 修复

- Telegram 特殊语言标签代码块损坏 → #5222
- WeCom 文件名清洗后为空导致的写目录 bug → #5223
- 畸形斜杠命令被错误转发给 LLM → #5242
- 消息 consolidation 边界未找到时静默失败 → #3200

---

## 6. 功能请求与路线图信号

### 明确的新功能信号

- **[enhancement] memory 目录 git 追踪优化（#5246）** — `.gitignore` 规则 `!memory/` 和 `!memory/MEMORY.md` 导致 `memory/.cursor` 和 `memory/history.jsonl` 意外"未跟踪"。虽属细节问题，但反映了 workspace 脚手架生成逻辑的完善需求。**无对应 PR。**
  https://github.com/HKUDS/nanobot/issues/5246

- **[feature] Mattermost 线程与主频道独立群组策略（PR #5233）** — 新增 `groupPolicyInThread` 配置字段，允许维护者在线程和主频道设置不同的 @提及要求，并同步暴露到 WebUI。这一 PR 今日开放，说明 Mattermost 渠道集成持续深化。
  https://github.com/HKUDS/nanobot/pull/5233

- **[feature] Quick Chat / Temporary Chat（PR #5184）** — 增加持久化 Quick Chat 会话与可选的内存临时会话。已开放 5 天，带有 `[conflict]` 标记，可能需要 rebase，但代表了 WebUI 会话管理的下一个迭代方向。
  https://github.com/HKUDS/nanobot/pull/5184

### 路线图信号

- **插件化架构成形**：4 月提出的 Agent 插件基础设施（#3211）今日合入，加上早期合入的 claude-code/codex 委托技能（#1288），Nanobot 正从单体向可扩展的"技能 + Agent 插件"生态演进。
- **安全模型从"双轨"走向"单轨"**：#5238 明确放弃 request-scoped 权限层，回到构建期 `Tool.enabled()` 单一切换。这暗示项目在安全性上选择**简单可审计**而非**细粒度运行时控制**的设计哲学。

---

## 7. 用户反馈摘要

基于今日活跃的 Issue/PR 评论，提炼以下真实用户声音：

- **多 Provider 用户的安全焦虑（#4784）**：用户 `hamb1y` 展示了 gateway-type 与非 gateway provider 混用时 `os.environ` 的覆盖/残留问题，本质上是对"多租户密钥隔离"的担忧。这通常来自企业内网多模型网关接入场景，一旦 key 泄露波及范围大。
- **新模型适配的摩擦（#5235）**：用户 `whisperity` 在 Opus 5 发布（2026-07-24）后立即尝试接入，发现 Nanobot 的硬编码模型名列表未及时跟上，导致请求被 API 拒绝。评论中指出 `omit_temperature` 的子串列表还停留在 `"opus-4-7", "opus-4-8", "sonnet-5", "fable"` 等旧模型名——这暴露了**模型兼容策略缺乏前瞻性**，建议改为版本阈值判断而非模型名列举。
- **MCP 工具链的"假成功"陷阱（#5237）**：用户 `Lucky314159` 描述了"工具返回业务错误但 Agent 坚信成功"的完整链路，其核心诉求是 **MCP 服务端业务错误需要透传到 LLM 的推理链路**，而不是简单地由超时机制兜底。
- **Matrix 自助接入体验不佳（#5247）**：用户 `orrinwitt` 反映 NLU 白名单用户邀请 bot 后仍无法自动入群，需要管理员手动 API 干预，降低了私有化部署的自动化程度。

---

## 8. 待处理积压

以下项目长期未获响应或处于停滞状态，提请维护者关注：

- **[高危] #4784 Provider API 密钥泄露** — 创建于 7/6，至今 30 天无修复 PR 且无维护者表态。作为安全相关问题，建议提升优先级并指派负责人。
  https://github.com/HKUDS/nanobot/issues/4784

- **[P2] #5156 Telegram 轮询静默停止修复 PR** — 8/29 创建，已 OPEN 6 天。生产环境会出现"进程存活但 bot 失联"的隐蔽故障，长期不合并会让 Telegram 用户持续暴露在静默失联风险中。
  https://github.com/HKUDS/nanobot/pull/5156

- **[P2] #5184 Quick Chat / Temporary Chat PR** — 8/30 创建，标有 `[conflict]` 且停留在 OPEN 状态。功能价值明确（WebUI 会话管理的下一步），建议维护者协助解决冲突推动合入。
  https://github.com/HKUDS/nanobot/pull/5184

- **[P2] #5237 MCP 业务错误识别** — 今日新开，暂无 assignee 和修复 PR。MCP 是当前 AI Agent 生态的核心协议，该问题影响面可能快速扩大，建议尽早排期。
  https://github.com/HKUDS/nanobot/issues/5237

- **[P2] #5247 Matrix 自动加入房间失败** — 今日新开，暂无响应。Matrix 作为去中心化通信入口，邀请入群是基本功能，建议确认回调注册时机是否受事件循环调度影响。
  https://github.com/HKUDS/nanobot/issues/5247

---

*日报基于 HKUDS/nanobot 公开 GitHub 数据生成，数据截至 2026-08-04 24:00 UTC。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-04

> 数据来源：github.com/nousresearch/hermes-agent · 统计窗口：2026-08-03 ~ 2026-08-04

---

## 1. 今日速览

Hermes Agent 于今日发布 **v0.20.0 (The Herald Release)**，标志着自 v0.19.0 以来约 3,650 次提交、1,400 个 PR、1,200 个 Issue 关闭的里程碑落地。过去 24 小时内 Issue 与 PR 各更新 50 条，其中 46 个 Issue 处于活跃状态、48 个 PR 待合并，社区贡献与问题反馈密度均处于高位。多个高优级 Bug 已快速获得对应 fix PR（如 Telegram 吞回复 #78541 → #78558），但也存在 P1 级问题（macOS FDA 权限丢失 #52010）等待官方介入。整体项目健康度良好，版本节奏快、社区活跃，唯 Bug 报告量与安全类 Issue 需持续关注。

---

## 2. 版本发布

### Hermes Agent v0.20.0 (`v2026.8.3`) — The Herald Release

| 维度 | 数据（自 v0.19.0） |
|------|------|
| Commits | ~3,650 |
| Merged PRs | ~1,400 |
| Files changed | ~5,200 |
| Insertions / Deletions | ~559,000 / ~405,000 |
| Issues closed | ~1,200 |
| Contributors | 650+ |

- 发布代号 **"The Herald Release"**（Hermes 为众神信使，暗示本版本以"传递/消息"能力为主轴）
- 💡 附注：Release notes 在"*Hermes is the herald of the gods, an…*"处截断，未提供结构化更新日志。**建议在升级前查阅完整 Release Notes**，确认是否有破坏性变更与配置迁移要求。

---

## 3. 项目进展

### 今日关闭/合并

| 类型 | 编号 | 标题 | 说明 |
|------|------|------|------|
| PR（已合并） | [#43930](https://github.com/NousResearch/hermes-agent/pull/43930) | feat(guardrails): repeated-mutation halt + destructive-overwrite guard | 新增两个 opt-out 安全护栏：重复变更熔断 + 破坏性覆盖保护，降低小型模型长跑 Agent 的事故风险 |
| Issue（已关闭） | [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) | Desktop Working Directory setting 不生效 | 桌面端工作目录配置被 localStorage 旧值覆盖的问题已关闭 |
| Issue（已关闭） | [#75152](https://github.com/NousResearch/hermes-agent/issues/75152) | Streaming 从自定义 provider 收到 0 chunks | 流式超时问题已关闭（needs-repro，可能与 v0.19.1 相关） |
| Issue（已关闭） | [#78529](https://github.com/NousResearch/hermes-agent/issues/78529) | HermesPilot 移动端丢失 GPT 工具调用时的文本 | 已关闭，修复逻辑待追踪 |

### 整体推进

- 以 v0.20.0 发布为标志，项目在约 3 个月内累计 ~1,400 个 PR 合并、~1,200 个 Issue 关闭，迭代速度处于同类项目前列；
- 截至今日尚有 **48 个 PR 待合并**，其中包含 P1 级修复（#78558）、P2 级修复（#78570、#78572）及多项新功能 PR，下一补丁版本储备充足。

---

## 4. 社区热点

| 排名 | 编号 | 标题 | 评论数 | 热度信号 |
|------|------|------|--------|---------|
| 1 | [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) | Desktop Working Directory 被旧会话覆盖 | 15 | 已关闭，桌面配置一致性诉求高 |
| 2 | [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) | macOS 每次更新后 Full Disk Access 被撤销 | 14 | P1 · 持续讨论中，更新体验痛点 |
| 3 | [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | 功能请求：自动记忆整合（Auto Dream） | 9 + 👍5 | 本周最高赞 Issue，记忆管理需求强烈 |
| 4 | [#62324](https://github.com/NousResearch/hermes-agent/issues/62324) | `stage-native-deps.mjs` 丢失 node-pty 执行位 | 5 | 桌面终端无法启动，回归问题 |
| 5 | [#49689](https://github.com/NousResearch/hermes-agent/issues/49689) | 桌面截图 + 标注叠加（Codex 风格） | 4 | 标记为 duplicate，已有类似能力？ |
| 6 | [#46194](https://github.com/NousResearch/hermes-agent/issues/46194) | 桌面会话切换泄漏 follow-up 状态 | 4 | P2 · 会话隔离性担忧 |

**热点诉求分析：**
- 桌面端配置体验（#38855、#52010）与状态隔离（#46194）是当前用户反馈最集中的领域——用户对"配置必须生效""权限不应被重置""会话必须互不干扰"的期望值很高；
- [#10771](https://github.com/NousResearch/hermes-agent/issues/10771)（Auto Dream）获得 5 个 👍，说明长生命周期用户的记忆文件膨胀问题已具普遍性，值得官方评估纳入路线图。

---

## 5. Bug 与稳定性

### 🔴 P1（严重）

| Issue | 标题 | 状态 / 对应 fix |
|-------|------|----------------|
| [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) | macOS 更新后 Full Disk Access 被撤销（FDA） | 开放中，无 fix PR |
| [#78541](https://github.com/NousResearch/hermes-agent/issues/78541) | Telegram 群组/Forum 会话吞掉完整回复（payload-less split delivery） | **已有 fix PR**：[#78558](https://github.com/NousResearch/hermes-agent/pull/78558) |

### 🟠 P2（高）

| Issue | 标题 | 状态 / 对应 fix |
|-------|------|----------------|
| [#60456](https://github.com/NousResearch/hermes-agent/issues/60456) | `prefill_messages_file` 被桌面版忽略（v0.18.0+） | 开放中 |
| [#46194](https://github.com/NousResearch/hermes-agent/issues/46194) | 桌面会话切换泄漏 queued follow-up 状态 | 开放中 |
| [#78477](https://github.com/NousResearch/hermes-agent/issues/78477) | 流式 TTS 不识别中文标点（。！？），长回复卡死 | 开放中 |
| [#78543](https://github.com/NousResearch/hermes-agent/issues/78543) | `cryptography==48.0.1` 因可选 [dingtalk] extra 被钉在基础依赖，留 2 个 HIGH 安全公告 | 开放中，安全类 |
| [#78498](https://github.com/NousResearch/hermes-agent/issues/78498) | Dashboard 误报 gateway 已停止（macOS PID 复用） | 开放中 |
| [#78519](https://github.com/NousResearch/hermes-agent/issues/78519) | `background_review` pending write 字段名错误（`content` vs `file_content`） | 开放中 |
| [#78535](https://github.com/NousResearch/hermes-agent/issues/78535) | 微信语音以文件形式发送而非语音气泡 | 开放中，duplicate |
| [#8120](https://github.com/NousResearch/hermes-agent/issues/8120) | WSL2 下 `vision_analyze` 图片分析频繁超时 | 开放中（4 月已报告） |
| [#78050](https://github.com/NousResearch/hermes-agent/issues/78050) | A2A 客户端工具在 CLI/TUI 会话中不可见 | 开放中 |

### 🟡 P3（中）

| Issue | 标题 | 状态 / 对应 fix |
|-------|------|----------------|
| [#62324](https://github.com/NousResearch/hermes-agent/issues/62324) | `stage-native-deps.mjs` 丢失 node-pty `spawn-helper` 执行位 → 终端无法启动 | 开放中 |
| [#76153](https://github.com/NousResearch/hermes-agent/issues/76153) | `hermes kanban create` 静默丢数据（#57967 回归，v0.19.1） | 开放中，`--verify-create` 未能根治 |
| [#78512](https://github.com/NousResearch/hermes-agent/issues/78512) | `inline_shell` 在 skill_view 时以无沙箱方式执行 bash（RCE-on-load，config 可关） | 开放中，安全类 |

**稳定性总结：** 今日报告的 Bug 中，**P1 问题 2 个，其中 1 个已有 fix PR**（#78558）；P2 级问题 9 个，安全相关 2 个（#78543、#78512）。值得注意的是 **#62324 与 #76153 均为回归类 Bug**，建议维护者核查相关合并提交。

---

## 6. 功能请求与路线图信号

### 高关注新需求

| Issue | 标题 | 信号 |
|-------|------|------|
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | 自动记忆整合（Auto Dream） | 👍5，4 月提出至今仍开放，官方可考虑立项 |
| [#78563](https://github.com/NousResearch/hermes-agent/issues/78563) | 新增 Claude Code CLI backend provider | 复用现有 OAuth 凭证，可走订阅免额外 API 费用——实质是成本优化需求 |
| [#78502](https://github.com/NousResearch/hermes-agent/issues/78502) | 生成 `config-schema.json` 配置 JSON Schema | 提升配置可维护性与 IDE 支持，低成本高收益 |
| [#74619](https://github.com/NousResearch/hermes-agent/issues/74619) | RFC：会话持久化失败的 lossless fallback spool + 幂等重放 | 架构级改进，值得设计评审 |

### 标记为 duplicate 但呼声不低

- [#49689](https://github.com/NousResearch/hermes-agent/issues/49689) 桌面截图 + 标注叠加（Codex 风格）
- [#31515](https://github.com/NousResearch/hermes-agent/issues/31515) 语言自动纠正（用户自定义语法/拼写标准）
- [#26858](https://github.com/NousResearch/hermes-agent/issues/26858) Telegram Business Connection 支持

### 已有对应 PR、很可能进入下一版本

| PR | 功能 |
|----|------|
| [#78569](https://github.com/NousResearch/hermes-agent/pull/78569) | 本地端点跨进程 FIFO 通道（容量受限场景） |
| [#78112](https://github.com/NousResearch/hermes-agent/pull/78112) | Kanban 快照绑定分页 + 组合目录 |
| [#78564](https://github.com/NousResearch/hermes-agent/pull/78564) | Dashboard 支持 cron 深链接 `?job=<profile>:<id>` |
| [#74654](https://github.com/NousResearch/hermes-agent/pull/74654) | 经典终端标题显示会话状态 |

---

## 7. 用户反馈摘要

- **配置被无视的愤怒**（[#38855](https://github.com/NousResearch/hermes-agent/issues/38855)）：用户在设置中正确配置了工作目录，但新会话仍打开旧目录——"我设置过了，为什么不生效？" 这类配置优先级问题最伤信任感，所幸今日已关闭。
- **macOS 更新恐惧症**（[#52010](https://github.com/NousResearch/hermes-agent/issues/52010)）：每次更新 Desktop 都要重新去系统设置里授予完全磁盘访问权限，用户形容"像罚做作业"。若不能修复，建议至少在更新流程中给出引导提示。
- **WSL2 用户的痛苦**（[#8120](https://github.com/NousResearch/hermes-agent/issues/8120)）：同样的模型在其他 AI 应用里不超时，唯独 Hermes CLI 中 `vision_analyze` 频繁 "Request timed out"，用户已等待 4 个月。
- **语言尊重需求**（[#31515](https://github.com/NousResearch/hermes-agent/issues/31515)）：巴西葡萄牙语用户抱怨模型"擅自纠正"他的语法、丢重音符号——这不是技术问题，是**用户对输出控制权**的诉求。
- **中文用户体验缺口**（[#78477](https://github.com/NousResearch/hermes-agent/issues/78477)、[#78535](https://github.com/NousResearch/hermes-agent/issues/78535)）：TTS 不按中文标点分句导致朗读卡顿、微信语音以文件发送而非语音气泡——本地化细节仍待打磨。
- **移动端可靠性**（[#78529](https://github.com/NousResearch/hermes-agent/issues/78529)）：GPT 带工具调用时助手文本不展示，用户看到的只有工具调用记录——"看起来像是坏了"，今天已关闭，希望修复跟随下个版本发布。

---

## 8. 待处理积压 ⚠️

### 长期未响应的重要 Issue（按等待时长排序）

| Issue | 创建时间 | 标题 | 优先级 | 等待时长 |
|-------|---------|------|--------|---------|
| [#8120](https://github.com/NousResearch/hermes-agent/issues/8120) | 2026-04-12 | WSL2 下 vision_analyze 超时 | P2 | ~4 个月 |
| [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) | 2026-04-16 | 自动记忆整合 Auto Dream（👍5） | P3 | ~4 个月 |
| [#26858](https://github.com/NousResearch/hermes-agent/issues/26858) | 2026-05-16 | Telegram Business Connection | P3 | ~3 个月 |
| [#31515](https://github.com/NousResearch/hermes-agent/issues/31515) | 2026-05-24 | 语言自动纠正 | P3 | ~2.5 个月 |
| [#46194](https://github.com/NousResearch/hermes-agent/issues/46194) | 2026-06-14 | 桌面会话切换泄漏状态 | P2 | ~2 个月 |
| [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) | 2026-06-24 | macOS FDA 权限被撤销 | **P1** | ~1.5 个月 |

### 长期未合并 PR

| PR | 创建时间 | 标题 | 优先级 |
|----|---------|------|--------|
| [#66635](https://github.com/NousResearch/hermes-agent/pull/66635) | 2026-07-18 | fix(auxiliary): 本地压缩超时保持本地化 | P2 |
| [#74864](https://github.com/NousResearch/hermes-agent/pull/74864) | 2026-07-30 | fix(relay): 避免并发 turn scope 损坏 | P2 |
| [#74654](https://github.com/NousResearch/hermes-agent/pull/74654) | 2026-07-30 | feat(cli): 经典终端标题显示会话状态 | P3 |
| [#77934](https://github.com/NousResearch/hermes-agent/pull/77934) | 2026-08-03 | test(install): 证明可从旧版本升级到当前 commit | P2 |

---

*本日报基于公开 GitHub 数据自动生成，部分 Release notes 截断处请以仓库原始内容为准。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-08-04）

> 数据来源：github.com/sipeed/picoclaw · 统计窗口：过去 24 小时

---

## 1. 今日速览

过去 24 小时 PicoClaw 共更新 8 条 Issue（3 条活跃 / 5 条关闭）与 6 条 PR（3 条待合并 / 3 条已关闭），无新版本发布。项目今日处于**存量清理与评审等待**阶段：维护者集中关闭了 5 条 7 月中旬遗留的 stale Issue，但 3 个新提交的 PR（#3315、#3316、#3317）尚未获得合并动作。社区讨论重心集中在三类稳定性问题上：MCP 连接失败导致的对话挂起（#3269）、Web UI 长历史输入卡顿（#3281）、以及 dispatch 路由会话的上下文管理失效（#3301）。整体活跃度中等偏上，Issue 响应及时，但 PR 合并节奏有待加快。

---

## 2. 版本发布

今日无新版本 Release。

---

## 3. 项目进展

今日**无 PR 被合并**。3 个关闭的 PR（#3267、#3273、#3202）均带 `[stale]` 标记，属于按陈旧策略清理的存量项。结合同步关闭的 Issue，确认以下工作已经落地：

- **日语本地化完成** — [#3273 feat(webui): add Japanese (ja) localization](https://github.com/sipeed/picoclaw/pull/3273) 为 WebUI 提供完整的 ja.json 翻译（968 行），并注册 dayjs locale，对应需求 [#3272](https://github.com/sipeed/picoclaw/issues/3272) 已关闭。这填补了文档已有日译但 UI 缺失的空白。
- **Antigravity token 刷新 scope 修复** — [#3267 fix scope bug for refresh agy token](https://github.com/sipeed/picoclaw/pull/3267) 修复了主认证成功后刷新令牌因 scope 传递错误导致 `PERMISSION_DENIED` 的问题。
- **ID 规范化边界修复** — [#3202 fix(routing): strip leading/trailing underscores in ID normalization](https://github.com/sipeed/picoclaw/pull/3202) 修复 `NormalizeAgentID` / `NormalizeAccountID` 未按文档要求去除首尾下划线的问题。

> 整体判断：项目已将从 7 月初到 7 月中的一批历史 PR/Issue 清点完毕，处于**为新一批 PR 让路的状态**，但尚未形成实际的代码合并产出。

---

## 4. 社区热点

| 排名 | 条目 | 类型 | 评论 | 反应 | 热度信号 |
|---|---|---|---|---|---|
| 1 | [#3269 MCP 连接失败导致 agent loop 挂起](https://github.com/sipeed/picoclaw/issues/3269) | BUG | 3 | 👍 1 | 今日（08-04）仍有更新，持续 15 天未解决 |
| 2 | [#3281 Web UI 长历史输入卡顿](https://github.com/sipeed/picoclaw/issues/3281) | BUG | 3 | 👍 1 | stale 但讨论未停，影响核心聊天体验 |
| 3 | [#3301 路由会话 /clear 与自动压缩失效](https://github.com/sipeed/picoclaw/issues/3301) | BUG | 1 | – | 新近反馈，且已有对应修复 PR #3316 |

**诉求分析**：三个热点全部指向**真实生产环境下的可用性**——MCP 故障时的容错、长对话场景的 UI 性能、多 agent 路由下的会话上下文一致性。用户关注的不是新功能，而是"**在复杂配置下不崩、不卡、不丢记忆**"。

---

## 5. Bug 与稳定性

### 🔴 高严重度（未修复，活跃中）

- **[#3269] MCP server 连接失败导致 agent loop 挂起，聊天界面停止响应** — [链接](https://github.com/sipeed/picoclaw/issues/3269)
  用户使用 Qwen3 + nightly 版本复现：MCP 连接异常后整个 agent 循环陷入死等，PicoClaw 聊天界面不再回复任何消息。**无 fix PR**，且已 stale 15 天，建议优先排查。
- **[#3301] /clear 与会话自动压缩在 dispatch 路由会话中失效** — [链接](https://github.com/sipeed/picoclaw/issues/3301)
  通过 dispatch rules 路由到非默认 agent 的聊天（Discord/Telegram），既不记忆历史，也不触发自动压缩。**已有修复 PR #3316 待合并**，属"修复在途"状态。
- **[#3281] Web UI 聊天输入在历史稍长时严重卡顿** — [链接](https://github.com/sipeed/picoclaw/issues/3281)
  0.3.1 版本中单会话历史变长后，输入框出现明显延迟。**无 fix PR**，可能涉及前端渲染性能优化。

### 🟢 已关闭（修复完成）

- **[#3268] exec 工具 action 参数应默认 "run" 而非必填** — [链接](https://github.com/sipeed/picoclaw/issues/3268)（LLM 漏传参数导致调用不可预测地失败）
- **[#3265] Gateway 启动报 `channel deltachat has unknown type deltachat`** — [链接](https://github.com/sipeed/picoclaw/issues/3265)（未配置 deltachat 仍启动失败）
- **[#3264] SplitMessage 因超大 fenced-code info 字符串死循环** — [链接](https://github.com/sipeed/picoclaw/issues/3264)（分块逻辑 fallback 缺陷）

> 稳定性小结：三个阻塞性启动/崩溃类 Bug 已在今日清理周期内关闭；但剩余的**「连接挂起」「长历史卡顿」两个高感知度问题均无修复 PR**，是当前稳定性短板。

---

## 6. 功能请求与路线图信号

今日有 3 个新 PR 待合并，清晰指向下一迭代方向：

| PR | 内容 | 路线图信号 |
|---|---|---|
| [#3317 feat(providers): log prompt cache tokens](https://github.com/sipeed/picoclaw/pull/3317) | 在 LLM 响应 debug 日志中输出 prompt cache 相关 token 数据（针对 DeepSeek / Cloudflare AI Gateway） | **可观测性增强**：开发者对成本/缓存指标的诉求上升 |
| [#3316 fix: routed-agent context management](https://github.com/sipeed/picoclaw/pull/3316) | 修复路由 agent 的历史、摘要、压缩与 seahorse bootstrap 不被遵守的问题 | **多 agent 路由成熟度**：dispatch rules 功能正从"可用"走向"可靠" |
| [#3315 Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315) | Telegram 私有机器人会话的 topic 支持（此前仅 `Chat.IsForum` 生效） | **Telegram 深度集成**：补齐私聊场景的 forum topic 能力 |

另有关闭的 Feature Issue 可视为已处理/已评估：
- [#3276 Launcher 支持 systemd 外部托管的 gateway](https://github.com/sipeed/picoclaw/issues/3276) — 无头服务器部署摩擦，已关闭
- [#3272 WebUI 日语本地化](https://github.com/sipeed/picoclaw/issues/3272) — 已实现并关闭

> 趋势判断：近期合入和待合入内容集中在**agent 路由链路修复 + Telegram 功能补齐 + 可观测性**三条线，未见大的架构级新功能信号。

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼的真实用户声音：

- **"MCP 一挂，整个聊天就死了"**（#3269）：生产环境强依赖 MCP server 的用户遇到连接故障后，Agent 循环无超时/重试逃生路径，界面完全失联，是最紧急的体验痛点。
- **"历史一长，打字都卡"**（#3281）：Web UI 在长会话下输入延迟明显，说明前端渲染/状态管理在数据量增长时存在性能瓶颈，影响日常重度使用。
- **"路由过去的 agent 什么都不记得"**（#3301）：配置 dispatch rules 后，会话不携带历史、不触发自动压缩，导致多 agent 协作场景下"每轮都是新对话"，上下文管理形同虚设。
- **"同样的 exec 调用，模型有时成功有时失败"**（#3268）：LLM 未传 `action` 参数时调用不可预测地报错，暴露出工具定义与模型实际行为之间的兼容性设计不足。
- **"headless 部署时 launcher 和 systemd 打架"**（#3276）：服务器场景用户希望 gateway 生命周期由 systemd 托管，但 launcher 的 Start/Stop 按钮逻辑假设自己独占控制权。

---

## 8. 待处理积压

### ⚠️ 长期未解决的高优 Issue

- **[#3269] MCP 连接失败挂起（OPEN 15 天）** — [链接](https://github.com/sipeed/picoclaw/issues/3269)  
  7 月 20 日创建，今日（08-04）仍被更新，stale 标记下持续无 fix PR。属于会完全阻断聊天的 P0 级稳定性问题，建议维护者优先分配资源。

- **[#3281] Web UI 长历史卡顿（OPEN 14 天）** — [链接](https://github.com/sipeed/picoclaw/issues/3281)  
  7 月 21 日创建，影响所有 Web 端长会话用户，无修复迹象。

- **[#3301] 路由会话上下文失效（OPEN 6 天）** — [链接](https://github.com/sipeed/picoclaw/issues/3301)  
  已有 PR #3316 对应修复，等待评审合并，积压风险较低。

### ⏳ 待评审/待合并 PR（共 3 个）

- [#3317 记录 prompt cache tokens](https://github.com/sipeed/picoclaw/pull/3317) — 今日新提交，尚未有 review
- [#3316 路由 agent 上下文管理修复](https://github.com/sipeed/picoclaw/pull/3316) — 已提交 1 天，需尽快验证
- [#3315 Telegram 私聊 topic 支持](https://github.com/sipeed/picoclaw/pull/3315) — 已提交 1 天，功能增量明确

### 📌 提醒

> 三个待合并 PR 均与用户报告的稳定性问题强相关（尤其 #3316 直接修复 #3301），且当前无其他合并动作。若能在本周内完成评审合入，将显著缓解 backlog 压力，并回应用户对「路由可靠性与会话一致性」的核心诉求。

---

**报告生成时间**：2026-08-04 · **数据窗口**：过去 24 小时 · **项目健康度评估**：🟡 中等（清理效率高，但关键 Bug 修复与新 PR 合入滞后，社区等待反馈周期偏长）

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报（2026-08-04）


## 1. 今日速览

NanoClaw 今日处于**中等偏上活跃度**：过去 24 小时共产生 8 条 PR 更新（2 条已合并/关闭，6 条待合并），无新增 Issue，无新版本发布。核心维护者今日合入了**定时任务时间修复**（#3154）与 **agent 镜像安全加固**（#3182）两条重要 PR，并在同一天收到 3 条针对不同会话生命周期 Bug 的社区修复 PR（#3183/#3184/#3185），说明项目在稳定性方向上正获得持续的外部贡献。值得关注的是，**Dial 渠道集成**相关两条 PR 已挂起 22 天并仍在更新，是当前最明确的功能路线信号。整体呈现"社区提交活跃、核心合入稳健"的健康状态。

## 2. 版本发布

今日无新版本发布。


## 3. 项目进展

今日有 2 条 PR 被合并/关闭：

- **#3154 [core-team] fix(agent-runner): give scheduled tasks current run time**（已合并）
  修复计划任务的时间语义：任务渲染将使用其有效调度发生时间（`process_after`），旧数据回退到创建时间戳；同时为任务增加到达 agent 时的 `current_time`（含星期几，并遵循 agent-group 时区配置）。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3154

- **#3182 [core-team] versions: repin the agent image to hardened-2026-08-02**（已关闭/合并）
  将 agent 镜像重新固定到 `hardened-2026-08-02`（旧：`sha256:4e441375…` 611 MB → 新：`sha256:af60e54f…` 621 MB）。两个构建的 NanoClaw 内容一致，仅基础镜像刷新，属于供应链安全加固。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3182

**小结**：项目在调度系统正确性和镜像供应链安全两个方面各向前推进了一步，同时多条稳定性和功能 PR 已进入待合并队列。


## 4. 社区热点

今日 PR 评论数数据未完整捕获（显示为 undefined），以下基于 PR 内容识别出两个最受关注的议题：

- **#3185 Discord 审批按钮全量失效修复**（2026-08-04 提交）
  该 PR 描述的 Bug 场景极具冲击力：Discord 上 `ask_question` / 审批卡片的所有按钮点击后都会解析为错误选项——**用户即使点击 Approve，审批也一律被拒绝**。此类问题直接影响核心审批流，预计是今日社区关注度最高的 PR。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3185

- **Dial 渠道集成长跑**（#3041 / #3050）
  两条 PR 分别实现 **Dial 通道适配器**（SMS + AI 语音通话）与 **channel picker / wizard 集成**（`runChannelSkill` 模型），自 7 月 14 日创建以来持续更新，至今日仍处于活跃状态，反映社区对新增通信渠道的明确诉求。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3041
  🔗 https://github.com/nanocoai/nanoclaw/pull/3050


## 5. Bug 与稳定性

按严重程度排列：

- **高 — Discord 审批交互被全部拒绝**（#3185）
  根因：Chat SDK bridge 的 webhook 路径在解码 `custom_id` 时按 `:` 分割，未正确处理 `\n` 分隔符，导致任何按钮点击都解析为错误选项。已有修复 PR。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3185

- **高 — 会话 transcript 缺失导致死会话**（#3184）
  当存储的续接会话 transcript 文件不存在时，向该会话发送消息会直接报错 `No conversation found with session ID: <uuid>`，且每次请求都会失败。已有修复 PR（检测到 transcript 缺失时自动轮换新会话）。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3184

- **高 — 静默 30+ 天冷会话被保留清理误杀**（#3183）
  某个频道静默超过 30 天后，用户重新发消息会因会话已被清理而收到 `No conversation found` 错误，无法得到回复。根因是 `cleanupPeriodDays` 未固定住，导致保留清理误伤冷会话。已有修复 PR。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3183

- **中 — 计划任务显示时间与实际调度时间不一致**（#3154）
  已由 core team 合并修复，见上文"项目进展"。


## 6. 功能请求与路线图信号

- **Dial 渠道成为确定的下一版本候选功能**（#3041 + #3050）
  两条配套 PR 分别覆盖底层通道适配（SMS + AI 语音呼叫）和上层 setup 向导（channel picker 集成），整体方案已趋于完整，可能进入后续版本发布。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3041
  🔗 https://github.com/nanocoai/nanoclaw/pull/3050

- **Skill 系统架构演进**（#3186）
  新增重构 PR：*"add host seams for skill-owned capabilities"*，为技能自有能力增加主机接缝，目标是提升 skill 的扩展性和隔离性，属于面向未来的架构改进。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3186


## 7. 用户反馈摘要

说明：今日 Issue 记录为 0、PR 评论数据未捕获，以下用户痛点从 PR 的 Bug 描述中提取：

- **Discord 审批流实际不可用**：用户点击 Approve 后审批结果仍为拒绝，直接导致审批流程无法在 Discord 上正常执行（#3185）。
- **冷频道唤醒失败**：频道静默 30 天后，用户再次发消息收到的是 `No conversation found` 错误而不是正常回复，且会话无法自动恢复（#3183）。
- **续接会话不可自愈**：当续接所需的 transcript 文件丢失后，会话永久卡死，用户后续所有消息均失败（#3184）。

**共性洞察**：三个 Bug 均指向**会话生命周期管理不够健壮**——在文件缺失、静默超时、交互解析出错等边界场景下，系统缺少自动检测与恢复机制。


## 8. 待处理积压

- **#3041 feat(channels): add Dial channel adapter (SMS + AI voice calls)**
  开放 22 天，仍在持续更新，建议维护者评估是否进入合并流程。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3041

- **#3050 feat(setup): add Dial to the channel picker + wizard/skills**
  同样开放 22 天，与 #3041 配套，建议同步处理。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3050

此外，今日新增的 #3185、#3184、#3183 三条稳定性修复 PR 与 #3186 重构 PR 均等待审阅，其中前三条直接关系用户侧稳定体验，建议优先处理。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

### 1. 今日速览

过去 24 小时内，NullClaw 项目无新 Issue、无版本发布，唯一动态为 PR #981 的更新（由第三方贡献者提交，添加 xAI Grok CLI provider）。社区互动极少，整体活跃度处于低位，但项目基础稳定，没有新 Bug 或回归出现。当前项目处于平稳维护期，外部贡献仍在持续推进，但维护者的合并与审查节奏将成为下一阶段关注重点。

### 2. 版本发布

今日无新版本发布，故省略本部分。

### 3. 项目进展

今日无 PR 被合并或关闭，因此没有已落地的功能变更或修复。

值得关注的是 **PR #981** 在今日有更新（最后更新时间为 2026-08-04），说明该 PR 仍有讨论或代码修订在推进中。该 PR 由第三方开发者提交，旨在为 NullClaw 添加一个基于本地 `grok` CLI 的可选 provider，遵循与现有 `codex-cli`、`gemini-cli`、`claude-cli` 相同的逐次生成模式。

- 具体进展：该 PR 尚未被合并，但仍在活跃状态，等待维护者审查或进一步修改。
- 项目整体向前迈进的幅度：本日没有已合并的代码，功能演进速度放缓，但新 provider 的引入正在流程中，属于外部驱动的功能扩展。

链接：[PR #981](https://github.com/nullclaw/nullclaw/pull/981)

### 4. 社区热点

今日唯一公开的动态为 **PR #981**，无 Issue 更新，且该 PR 暂无评论记录，没有形成高互动讨论。

然而，该 PR 本身暗示了社区的一个明确诉求：**用户希望将 xAI 的 Grok CLI 集成到 NullClaw 中**。作者明确说明 `grok-cli` 是一个可选 provider，需要在本地安装并登录 `grok` CLI 后才能使用，这与项目已有的多 CLI provider 集成模式一脉相承。背后的需求逻辑是：用户希望 NullClaw 能适配更多本地 AI CLI 工具，避免绑定单一模型厂商。

链接：[PR #981](https://github.com/nullclaw/nullclaw/pull/981)

### 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

- 严重程度排序：不适用。
- 无相关的 fix PR 需要标注。

项目在稳定性方面表现良好，连续多日无新的缺陷上报。

### 6. 功能请求与路线图信号

今日没有新 Issue 表达功能请求，但 **PR #981** 是功能需求的直接体现：**新增 grok-cli provider**。

该 PR 的核心特性及路线图信号：

- 复用项目中已有的 `spawn-per-request` 架构，与 `codex-cli` 等 provider 保持一致的实现方式，说明其设计符合现有代码库的演进方向。
- `grok-cli` 被定义为 **可选 provider**，不强制安装，体现了 NullClaw 在架构上保持轻量与模块化的特点。
- 如果该 PR 被合并，很可能被纳入下一个版本的功能列表中，因为它不会对现有用户产生破坏性影响，并且扩展了支持的模型范围。

综合判断，下一版本可能的方向是**继续丰富和扩展 AI 后端接入选项**，Grok CLI 是其中之一。

链接：[PR #981](https://github.com/nullclaw/nullclaw/pull/981)

### 7. 用户反馈摘要

今日无 Issue 评论可供提炼。但从 PR #981 的描述中，可以间接获得以下用户侧信息：

- 使用场景：用户手头有本地安装并完成认证的 `grok` CLI（xAI），希望 NullClaw 能直接通过命令行调用该工具来完成任务。
- 用户诉求：希望 NullClaw 不局限于现有 provider 列表，而是能够适配更多第三方 AI CLI 工具，从而成为“多模型统一入口”。
- 满意度信号：由于该 PR 由第三方开发者主动提交，说明贡献者认可 NullClaw 的架构扩展性，并愿意基于现有模式做集成。这也反映出项目在外部开发者中的可参与度较好。

### 8. 待处理积压

当前没有长期未响应的重要 Issue。唯一需要提醒维护者关注的是 **PR #981**：

- 创建时间：2026-07-29
- 最后更新：2026-08-04
- 状态：开放，等待审查或合并

该 PR 已开放约一周，期间仍在更新，说明作者有意推进。建议维护者尽快安排代码审查，避免外部贡献者的积极性因等待而消减。此外，项目没有其他积压的 Issue 或 PR，维护压力较小，目前的待办事项非常集中。

链接：[PR #981](https://github.com/nullclaw/nullclaw/pull/981)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-04

---

## 1. 今日速览

过去 24 小时项目活跃度极高：50 条 Issue 更新（42 条新开/活跃，8 条关闭）、50 条 PR 更新（30 条待合并，20 条已合并/关闭），无新版本发布。核心节奏仍在 WS2/WS3/WS4/WS6 大规模架构重构推进中，多个合并 PR 已落地（WebUI 作用域修复、grep 诊断增强、WS2 四个 row 关闭等）。然而项目健康度受到两方面牵制：`main` 分支 clippy 检查为红色（#7119），以及一批 P0 级安全和数据完整性问题（二进制写损坏、跨用户内存泄漏）仍在开放或刚被关闭。值得注意的是，项目自曝四个 CI 执法门存在可绕过缺陷（#7147/#7151 等），当前绿色 CI 的"可信度"存疑。

---

## 2. 版本发布

今日无新版本发布。但存在一个 **已搁置 32 天的发布 PR** [#5598](https://github.com/nearai/ironclaw/pull/5598)（`ironclaw_common` 0.4.2→0.5.0、`ironclaw_skills` 0.3.0→0.4.0，均含 breaking changes），目前仍处于开放状态，可能阻塞下游版本迭代，建议维护者关注。

---

## 3. 项目进展

今日合并/关闭的 PR 集中在 **WebUI 安全、工具诊断可观测性、WS2 重构收尾、CI 可移植性** 四条线：

- **[#7062](https://github.com/nearai/ironclaw/pull/7062)（XL）— WebUI 工作区与记忆视图作用域修复**：将 Workspace 和 Memory 展示限定到已认证的 tenant/user，未登录/非操作员会话 fail closed，保留本地操作员回退。这是对共享存储路径越权暴露的一次安全加固，对应此前跨用户数据可见性的担忧。
- **[#7132](https://github.com/nearai/ironclaw/pull/7132)（L）— grep 文件系统诊断修复**：根目录 stat/read 失败现在对模型可见、可操作，包括具体的 `file not found` 原因；目录扫描不完整时报告相对路径和规范化操作标签，不再静默吞错。
- **[#7126](https://github.com/nearai/ironclaw/pull/7126)（XS）— WebUI “Reconnecting” 徽章闪烁修复**：SSE 流被代理（如 Railway）分帧关闭导致 event-source 重连，每次 chunk 都触发状态翻转；修复后不再闪烁。
- **[#7134](https://github.com/nearai/ironclaw/pull/7134)（XS）— Windows fixtures 可移植性 + E2E 覆盖率稳定**：使 post-merge Windows clippy 能编译所有测试目标，run-artifact 路由仅对 hermetic tool-gate E2E fixtures 开放。
- **[#7143](https://github.com/nearai/ironclaw/pull/7143)（M）— WS2：host_ingress 重新分层**，删除已退役身份迁移，关闭四个 WS2 row；但 `extension_host → loops` 的关键翻转**不在本 PR**，原因是"文件计数不是真正的约束"（见 #7145 的测量论证）。
- **[#7155](https://github.com/nearai/ironclaw/pull/7155)（XS）— 架构测试增强**：逐项列举 extension_host product 残留 + 八个 doc-truth 修正，无生产 `src/` 变更。

**综合判断**：项目在多个重构轨道（WS2/WS3/WS4/WS6）上并行推进，单日合并 6 个 PR 说明执行力强；但修复大多属于"止血"性质，深层架构债务（见 §5）仍在积累。文档/自动化层面的自省（doc-truth audit、sabotage-testing）是今日的亮点，说明项目在有意收紧质量闭环。

---

## 4. 社区热点

今日讨论热度集中在 **CI 效率、安全缺陷、和质量门可靠性** 三个话题：

- **[#7137](https://github.com/nearai/ironclaw/issues/7137)（6 条评论）— live-canary 工件过大**：每个 shard 工件达 700MB–1.5GB，13 个 bundle 总计超 5GB，拖慢下载、消耗 GitHub Actions 存储配额（14 天保留期）。评论区大概率在讨论哪些路径可排除/重建。诉求是 **CI 成本与效率优化**。
- **[#6898](https://github.com/nearai/ironclaw/issues/6898)（4 条评论，已关闭）— write_file 静默损坏二进制文档**：文本写入覆盖 docx/xlsx/pdf 二进制目标时，读取的是提取文本、写入的是原始字节，read-proof 校验被绕过。suggested_P0，已关闭说明修复方案已定或已合入。
- **[#7119](https://github.com/nearai/ironclaw/issues/7119)（3 条评论）— main 分支 clippy 失效**：`ironclaw` + `ironclaw_reborn_config` 包组合的 clippy 是红的，且没有任何 PR 触发过该组合。**社区对 CI 质量门的空转表达了直接不满**，已有修复 PR [#7154](https://github.com/nearai/ironclaw/pull/7154)。
- **[#6900](https://github.com/nearai/ironclaw/issues/6900)（3 条评论）— 共享频道跨用户内存泄漏（P0/安全）**：无路由的共享会话（如 Slack 多人频道）将所有人的记忆读写折叠进运营者命名空间。**这是安全类问题中讨论度最高的**，目前仍开放、无 fix PR。
- **[#7145](https://github.com/nearai/ironclaw/issues/7145)（3 条评论）— WS2 重新分层方法论之争**：BenKurrek 明确指出"按文件数估算是重复上一层的错误"，主张按四端口残留来衡量。体现重构执行中对**度量方式的反省**。

---

## 5. Bug 与稳定性

按严重程度排列（P0 最高）：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| **P0/安全** | [#6900](https://github.com/nearai/ironclaw/issues/6900) | 共享频道默认主题将所有人折叠进运营者记忆命名空间，跨用户内存泄漏 | 开放，无 fix PR |
| **P0/数据** | [#6898](https://github.com/nearai/ironclaw/issues/6898) | write_file 静默损坏二进制文档（docx），read-proof 校验被绕过 | **已关闭**（修复已定） |
| **P0/性能** | [#6986](https://github.com/nearai/ironclaw/issues/6986) | 工具缓存：advertised tool array 未保持字节一致，mid-run promotion 破坏缓存 | 开放，无 fix PR |
| **P0/交付** | [#6896](https://github.com/nearai/ironclaw/issues/6896) | 定时/触发运行失败从不通知用户 | 开放，**已有 fix PR [#7131](https://github.com/nearai/ironclaw/pull/7131)** |
| **P0/诊断** | [#6899](https://github.com/nearai/ironclaw/issues/6899) | 安装失败时 lifecycle blockers 计算了但不渲染，skill_install 全折叠为 operation_failed | 开放，无 fix PR |
| **高** | [#7119](https://github.com/nearai/ironclaw/issues/7119) | `main` 分支 Code Style clippy 红（package-set 组合未被 CI 覆盖） | 开放，**已有 fix PR [#7154](https://github.com/nearai/ironclaw/pull/7154)** |
| **高** | [#7151](https://github.com/nearai/ironclaw/issues/7151) | composition 质量门基于份额，功能流入使分母膨胀，god crate 重新堆积而门保持绿色 | 开放，**已有 fix PR [#7156](https://github.com/nearai/ironclaw/pull/7156)** |
| **高** | [#7147](https://github.com/nearai/ironclaw/issues/7147) | 两个 shrink-only 架构棘轮在 main 上有未跟踪松弛；三个开放 PR 持有同一基线的三个不同值 | 开放，**已有 fix PR [#7156](https://github.com/nearai/ironclaw/pull/7156)** |
| **中** | [#7146](https://github.com/nearai/ironclaw/issues/7146) | 121 处 `tracing::warn!(target = "…")` 误用（应为 `target: "…"`），事件对过滤器不可见 | 开放，**已有 fix PR [#7154](https://github.com/nearai/ironclaw/pull/7154)** |
| **中** | [#7144](https://github.com/nearai/ironclaw/issues/7144) | 17,470 行 contribution.rs 拆分为 33 个"新"文件，CodeRabbit 审查提出 29 条预存缺陷线程 | 开放，已在 #7154 处理中 |
| **中** | [#7104](https://github.com/nearai/ironclaw/issues/7104) | 提取器把 "no text found" 报为 Failed 而非 Empty，模型收到错误语义 | 开放，无 fix PR |
| **中** | [#7103](https://github.com/nearai/ironclaw/issues/7103) | 延迟追踪字段在关闭时仍计算（coding tool JSON 字节数） | 开放，无 fix PR |
| **中** | [#7087](https://github.com/nearai/ironclaw/issues/7087) | Reborn PR 测试规划器对 `.claude/`、`crates/AGENTS.md` 等路径 fail closed | 开放（#7100 已修复 crates 部分，`.claude/` 未修） |
| **中** | [#7081](https://github.com/nearai/ironclaw/issues/7081) | Docker fail-closed 测试门未接线，`IRONCLAW_REQUIRE_DOCKER_TESTS` 从未设置 | 开放，无 fix PR |
| **中** | [#7083](https://github.com/nearai/ironclaw/issues/7083) | `crates/extensions/` 下 5 个 crate 在覆盖率工具中全部不可见 | 开放，无 fix PR |
| **低** | [#7085](https://github.com/nearai/ironclaw/issues/7085) | check-version-bumps.sh 在 macOS（BSD sed）静默跳过 WIT 版本交叉检查 | 开放，无 fix PR |
| **低** | [#7115](https://github.com/nearai/ironclaw/issues/7115) | entrypoint.sh 的 legacy-Slack 迁移门控变量已死，按文档操作会跳过迁移 | 开放，无 fix PR |
| **低** | [#7072](https://github.com/nearai/ironclaw/issues/7072) | Telegram 消息渲染原始 Markdown（###、** 等显示为纯文本） | 开放，无 fix PR |
| **低** | [#7069](https://github.com/nearai/ironclaw/issues/7069) | Google 服务每次使用都要求重新认证 | **已关闭** |
| **低** | [#7116](https://github.com/nearai/ironclaw/issues/7116) | Live-QA runner 用 `[slack].enabled` 做门控，但该值由 runner 自己写入且二进制忽略 | **已关闭** |

**值得警惕的模式**：多个 CI/质量门（#7119、#7151、#7147、#7081、#7083）都是"看起来在保护、实际上没保护"。正如 [#7156 PR](https://github.com/nearai/ironclaw/pull/7156) 标题所写——"four enforcement defects that make green CI meaningless"。项目正试图用 sabotage-testing（故意引入违规、观察变红）来修复这些门，方向正确，但在这些修复合入前，CI 绿旗的参考价值有限。

---

## 6. 功能请求与路线图信号

- **[#7157](https://github.com/nearai/ironclaw/pull/7157)（XL）— 显式频道传递工具（新功能）**：实现两通道模型——Lane 1 每次运行的最终回复落入自有会话（WebUI 线程等），Lane 2 显式通知通道；删除旧的 delivery heuristics。这是一个较大的用户可见功能变更，设计文档已批准。
- **[#7138](https://github.com/nearai/ironclaw/issues/7138) — 触发式频道失败通知的智能化增强**：#6896 的 follow-up，要求通知从静态摘要升级为模型解释的 turn（与 WebUI 对齐）。`#7131` 合入后此需求会更迫切。
- **[#7133](https://github.com/nearai/ironclaw/pull/7133)（XL）— 有界 JSON 文件查询**：`builtin.json` 支持读取显式提供的文件、解析重复相邻数组索引和根数组路径，并给出有界可操作的诊断——工具能力的实用扩展。
- **[#7135](https://github.com/nearai/ironclaw/pull/7135)（L）— 保留可分页 result_read 连续引用**：修复分页读取的引用语义，确保续读时拿到原始页面引用而非临时 staging 引用。
- **[#7114](https://github.com/nearai/ironclaw/pull/7114)（L）— 手动 QA 用例覆盖补全**：将 UC1–UC11 逐行映射到现有测试并补缺，属质量保障投入。
- **[#7145](https://github.com/nearai/ironclaw/issues/7145) — WS2 收尾**：`extension_host → loops` 重新分层是重构路线图上的明确下一步，已被多次错误定尺，现在有了正确度量（四端口残留）作为依据。
- **[#7107](https://github.com/nearai/ironclaw/issues/7107) / [#7102](https://github.com/nearai/ironclaw/issues/7102) — WS6 测量接力**：为下一个重构切片提供预测量数据（RebornRuntime re-export 墙、typed ChannelExtensionBinding.extension_id、extractors 类型化错误等），降低后续执行者的认知成本。

**路线图判断**：短期（1–2 周）重点大概率是 **(a) 修复 main 的 clippy 并让 CI 执法门真正生效**（#7154、#7156）；(b) 合入 #7131 解决触发运行失败通知的 P0 交付缺口；(c) 继续 WS6/WS2 重构。新功能方面 #7157 的通道传递工具是最大的一块。

---

## 7. 用户反馈摘要

从今日 bug_bash 和长期 Issue 中提炼的真实用户痛点：

- **Telegram 渠道的 Markdown 渲染是实际困扰**（[#7072](https://github.com/nearai/ironclaw/issues/7072)）：用户报告 `###`、`**bold**` 等 Markdown 语法在 Telegram 中原样显示，消息可读性差。来自 Railway 测试实例，说明真实部署环境下渠道格式化未达预期。
- **Google 服务重复认证**（[#7069](https://github.com/nearai/ironclaw/issues/7069)，已关闭）：用户完成一次 Google 授权后，安装或使用多个 Google 服务时每个服务仍需单独认证。反映 OAuth 凭据共享/复用体验不佳。
- **AGENTS.md 编辑不生效**（[#3762](https://github.com/nearai/ironclaw/issues/3762)，5 月 18 日提出，至今开放）：用户在 WebUI 编辑 AGENTS.md 保存成功，但系统提示词不更新，且不影响当前或未来会话。这是 **持续近 3 个月的客户反馈**，涉及身份文件编辑的核心信任链条，建议优先纳入路线图。
- **CI 工件体积影响实际开发体验**（[#7137](https://github.com/nearai/ironclaw/issues/7137)）：13 个 artifact bundle 超 5GB，下载慢、存储配额紧张，triage 也变得不切实际。这是开发者（而非最终用户）的痛点，但直接影响项目迭代效率。
- **共享频道中的身份混乱**（[#6900](https://github.com/nearai/ironclaw/issues/6900)）：多人 Slack 频道中，AI 的记忆和操作默认绑定到运营者身份。用户期待的是"每个人看到自己的上下文"，实际却是"所有人都看到运营者的记忆"——**这是对多用户场景可信度的直接打击**，安全与体验双重问题。

---

## 8. 待处理积压

- **[#5598](https://github.com/nearai/ironclaw/pull/5598) — release PR（7 月 3 日创建，32 天未合并）**：`ironclaw_common` 0.5.0 与 `ironclaw_skills` 0.4.0 均含 breaking changes。长期未合并会阻塞下游 crate 发布与依赖升级，建议维护者明确 disposition（合入 / 打回 / 拆分）。
- **[#3762](https://github.com/nearai/ironclaw/issues/3762) — AGENTS.md 编辑不更新系统提示（5 月 18 日创建）**：已开放近 3 个月，有 customer 标签，至今无 fix PR。属于 WebUI 身份文件编辑的核心功能缺陷。
- **[#6900](https://github.com/nearai/ironclaw/issues/6900) — 跨用户内存泄漏（P0/安全，7 月 30 日创建）**：5 天未关闭且无 fix PR。共享频道是 IronClaw 的重要使用场景，此问题触及多用户数据隔离底线。
- **[#6899](https://github.com/nearai/ironclaw/issues/6899) — 安装失败诊断丢失（P0，7 月 30 日创建）**：skill_install 错误不区分 not-found / already-installed / invalid-skill，用户盲目重试。与 #6896/#6898 同批提出，但后两者已有关注/修复，此条仍无 PR 认领。
- **[#6965](https://github.com/nearai/ironclaw/pull/6965) — IronHub 文档 PR（7 月 31 日创建）**：4 天未合并，包含 3 页新文档 + 侧边栏导航 + ClawHub→IronHub 更名。文档类 PR 长期搁置会导致 docs 与仓库状态漂移。
- **[#7087](https://github.com/nearai/ironclaw/issues/7087) — Reborn PR 测试规划器对 `.claude/` 等路径 fail closed**：虽然 #7100 修复了 `crates/AGENTS.md`，但 `.claude/`、`Dockerfile`、`.githooks/` 等路径仍会导致整个测试工作流失败。任何触碰这些文件的 PR 都会被迫 workaround，影响面广。

---

**总结**：IronClaw 今日处于"高速重构 + 质量门补课"的混合状态。单日 50 条 Issue/PR 更新的活跃度证明项目执行力很强，且已开始用 sabotage-testing、doc-truth audit 等方法自我纠偏；但 P0 安全问题的积压、main 分支红 clippy、以及多个 CI 执法门形同虚设的现实，意味着**项目健康度在"进度"维度高、"可信度"维度偏低**。近一周的当务之急应是让 #7154/#7156 的执法修复合入，并尽快给 #6900 指派修复。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 2026-08-04

## 1. 今日速览

过去24小时项目整体活跃度较高：共 12 条 PR 更新，其中 10 条已合并/关闭，2 条待合并；Issue 侧有 1 条安全相关 Bug 更新（#1202）。今日没有新版本 Release 发布，但 #2430 已将 `release/2026.8.3` 分支合并入 `main`，推进了登录体验优化、credit 奖励活动、Artifact 自动预览控制、模型错误处理与 Windows 安装器可靠性等多项改动。合并集中发生在今日，功能迭代推进明显，项目健康度良好；唯一需要警惕的是 model key 泄漏 Issue 已悬置 4 个月且无修复 PR，应尽快评估处理。

---

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。`release/2026.8.3` 已通过 PR #2430 合并入主分支，正式版本发布预计在后续完成。

---

## 3. 项目进展

今日合并/关闭的 10 个 PR 中，多数集中在发布收尾和功能落地，进展如下：

| PR | 内容 | 类型 |
|---|---|---|
| [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) | **Release: 2026.8.3** — 将发布分支并入 `main`，涵盖原生 credit 奖励活动、首次运行登录体验优化、Artifact 自动预览控制、模型错误处理改进及 Windows 安装器可靠性提升 | Release |
| [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424) | **fix(activity): restore active credits campaign** — 恢复正在进行的 credits 活动，还原订阅 credit 重置入口、活动状态透传及 500-credit 领取流程（IPC/UI/素材） | 功能修复 |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | **feat(activity): bundle startup credit campaign artwork** — 将启动 credit 宣传海报与 CTA 素材随客户端打包，服务端继续控制活动可用性、时机与奖励下发 | 功能 |
| [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) | **fix: complete startup credit campaign analytics fields** — 补全登录重定向 URL、服务端/网络/登录重定向失败错误信息，并通过 auth IPC 返回打开的登录 URL，更新测试覆盖 | 修复 |
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | **feat(settings): add artifact auto-preview toggle** — 新增设置项，允许用户禁用文件自动预览，手动预览不受影响 | 功能 |
| [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | **feat(cowork): classify model capacity overload separately from rate limit** — 将模型过载/容量错误从通用 rate-limit 消息中拆分，新增 `ModelOverloaded` 分类，避免误导用户立即重试 | 功能修复 |
| [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) | **Chore: optimize login page** — 登录页优化 | 体验优化 |
| [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) | chore(deps): bump @headlessui/react 1.7.19 → 2.2.9 | 依赖升级 |
| [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) | chore(deps): bump react 18.3.1 → 19.2.4 | 依赖升级 |
| [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) | chore(deps): bump react-syntax-highlighter 15.6.6 → 16.1.1 | 依赖升级 |

综合来看，项目正处于 2026.8.3 发布的前夜：credit 活动体系已恢复并完成素材打包，用户体验相关（登录、Artifact 预览、模型错误提示）也在持续打磨，整体向前迈进一个发布里程碑。

---

## 4. 社区热点

今日讨论热度集中在安全类 Issue 与发布相关 PR 上：

- **#1202 [OPEN] [stale] agent 泄漏 model key 信息** — 该 Issue 为今日唯一有评论的条目（1 条评论），讨论了 agent 会主动回答 key 配置位置、环境变量等信息，进一步可诱导其泄漏模型 key。
  - [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202)
  - 背后诉求：用户对 AI agent 的安全边界有明确期待——涉及敏感凭据时应当拒绝响应，而不是被动配合。安全类反馈最容易影响开源项目在企业环境中的信任度，建议优先跟进。

其余 PR 评论量均为 0，社区讨论未出现明显热点。

---

## 5. Bug 与稳定性

今日共 1 条 Issue 更新、1 条 Bug 修复 PR 合并，按严重程度排列如下：

| 严重程度 | 条目 | 状态 | 说明 |
|---|---|---|---|
| 🔴 高（安全漏洞） | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — agent 泄漏 model key 配置信息 | OPEN / stale，无修复 PR | 攻击者可诱导 agent 透露 key 环境变量、配置路径等敏感信息，存在实际泄漏风险 |
| 🟡 中（功能缺陷） | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) — 会话重命名失败时静默吞错，用户无提示 | OPEN / stale，等待合并 | 输入框关闭但标题未更新，用户无法感知失败；已有 try-catch + toast 修复方案 |
| 🟢 已修复 | [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) — 模型过载被误报为 rate limit | 今日已合并 | 已拆分 `ModelOverloaded` 独立分类，并覆盖原始错误详情，避免错误的重试引导 |

另注意：#1202 为 4 月 1 日创建，今日被再次更新但仍未分配处理，存在长期化趋势。

---

## 6. 功能请求与路线图信号

- **AI 安全防护能力（强信号）**：Issue #1202 本质上提出 agent 应具备"拒绝泄漏敏感配置"的行为准则，这类能力未来可能沉淀为权限控制或 prompt 防护机制。
- **渲染行为可控性（已被采纳）**：PR #2425 新增 Artifact 自动预览开关，表明"用户可控制桌面端行为"是明确路线方向，设置面板可能继续扩展。
- **运营活动系统（进行中）**：credit campaign 相关 PR 连续合并（#2424、#2427、#2428），显示项目正在完善活动奖励的本地素材管理、服务端控制和数据埋点能力，预计后续版本会持续迭代。
- **依赖现代化（已执行）**：React 18→19、Headless UI 1→2 的升级 PR 已合并，说明技术栈升级按计划推进。

---

## 7. 用户反馈摘要

来自 Issue #1202 的真实反馈：

- **场景**：用户向 agent 询问当前 key 配置信息，agent 不仅回复了配置定义位置，还进一步告知 key 相关环境变量信息；继续追问后可以定位到模型 key。
- **诉求**："agent 应该拒绝透露相关 key 信息"。
- **满意度**：负面。该反馈反映当前 agent 在敏感信息保护方面存在明显短板，属于信任与合规风险，可能影响专业用户和企业的使用信心。

目前 Issue 仅 1 条评论，更多用户声音尚待浮现。

---

## 8. 待处理积压

提醒维护者关注以下长期未闭环或今日仍在推进的条目：

| 条目 | 创建时间 | 积压天数（截至 2026-08-04） | 建议 |
|---|---|---|---|
| [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202)（安全漏洞） | 2026-04-01 | ~125 天 | 高危安全 Issue，建议尽快确认影响范围、分配负责人，并在 agent 行为中增加敏感信息拒绝策略 |
| [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205)（修复 PR） | 2026-04-01 | ~125 天 | 功能修复已就绪但长期未合并，建议恢复 review 流程 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)（依赖升级） | 2026-04-02 | ~124 天 | electron 40.2.1 → 43.2.0、electron-builder 同步升级；跨大版本需关注兼容性，今日有更新但仍未合并 |

---

**项目健康度总结**：PR 合并效率高、功能迭代密集，处于发布冲刺期；安全类 Issue 长期未闭环是当前主要风险点，建议优先处理 #1202。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-04

## 1. 今日速览

过去24小时内，Moltis项目未出现Issue活动（新开/关闭均为0），社区问题反馈处于静默状态；PR侧有2条待合并更新，均为正向的技术演进而非缺陷修复。项目整体活跃度中等偏低，但技术方向清晰：一条为自动化依赖升级（undici），一条为重要的功能特性PR（managed repository bundles），说明项目正处于功能开发期而非问题集中爆发期。无新版本发布，当前最为关键的动作是推动已提出的两条PR尽快完成review与合并。

## 3. 项目进展

今日无合并/关闭的PR，但有待处理PR揭示项目下一步走向，其中一项具有里程碑意义：

- **feat(mcp): add managed repository bundles**（[PR #1183](https://github.com/moltis-org/moltis/pull/1183)）  
  由作者 penso 提出，这是一项面向MCP（Model Context Protocol）生态的重大功能增强：引入托管Git仓库包管理机制，支持MCP服务器的发现、预览、安装、更新、回滚和移除；同时支持HTTPS凭据、固定SSH传输、vault生命周期集成以及导入仓库托管的MCP配置。该PR将显著降低MCP服务器的部署与管理门槛，并简化web onboarding流程。虽然尚未合并，但该功能一旦落地，将极大地提升Moltis作为AI助手框架的可扩展性与生产力价值。

- **chore(deps-dev): bump undici from 7.28.0 to 7.29.0 in /website**（[PR #1184](https://github.com/moltis-org/moltis/pull/1184)）  
  由dependabot自动维护/website目录下npm依赖，undici版本从7.28.0升级至7.29.0。无功能变更风险，属于常规依赖维护。

**项目进展总结**：虽然今日无合并，但#1183所代表的MCP托管管理能力一旦合入，意味着Moltis在MCP服务器生命周期管理方面将从"手动配置"走向"托管化、可回滚"的新阶段，这将是项目基础设施能力的关键拼图。

## 4. 社区热点

今日没有出现评论数或反应数较高的活跃讨论（两条PR评论数均为0，点赞数均为0）。从技术方向看，社区/作者对两件事表现出明确的关注：

- **MCP服务器管理自动化的需求**（PR #1183） —— 该PR本身即是对"如何简化MCP服务器安装与运维"这一痛点的回应。虽然无直接评论，但其覆盖范围的完整性（发现、安装、更新、回滚、移除）表明这是一次对用户需求的系统性梳理与实现。
- **依赖健康度的持续维护**（PR #1184） —— dependabot的自动PR持续运行，说明项目维护者保留了依赖更新通道，有助于维持网站的依赖安全与稳定性。

## 5. Bug 与稳定性

今日没有收到新的Bug报告，也没有崩溃或回归问题被提出。结合Issues总量为0的情况，项目当前处于相对稳定期，未暴露新的功能性缺陷。

## 6. 功能请求与路线图信号

- **MCP托管仓库包管理**（PR #1183）是今日最强烈的路线图信号。该PR涵盖了：
  - 托管Git仓库（managed repositories）的发现与预览
  - MCP服务器的安装/更新/回滚/移除
  - HTTPS凭据和固定SSH传输的安全性设计
  - 与vault生命周期集成（暗示安全凭据管理将作为一等公民）
  - 导入仓库托管的MCP配置（支持配置即代码）

  从功能覆盖度来看，这些能力预计将在下一个minor版本中与用户见面。结合"简化web onboarding"的描述，可以合理推断Moltis正在从"单机MCP客户端"向"企业级MCP服务器管理平台"演进。

- 目前没有来自社区Issue的新的功能请求，上述路线图信号主要来自作者侧的主动开发。

## 7. 用户反馈摘要

今日没有Issue评论可供提炼，用户声音的信息量有限。但从PR #1183的变更内容可以推断出作者对用户痛点的预判：

- **痛点预判**：手动安装、配置、更新MCP服务器成本高，缺少统一的生命周期管理手段。
- **期望场景**：开发者希望像使用包管理器一样使用MCP服务器（安装/回滚）、使用现有vault凭据而非明文配置、通过托管Git仓库轻松发现并试用新的MCP服务，并简化从web或dashboard的引导流程。
- **满意维度**：维护者正优先解决开发者体验（DX）问题，而非仅仅堆叠功能。

## 8. 待处理积压

当前共有2条待合并PR，均处于开启状态且无阻塞性评论：

1. **PR #1183**（feat: managed repository bundles）  
   创建于08-02，最后更新于08-03。作为核心功能PR，已等待约2天。建议维护者在接下来的24-48小时内安排Review，防止该大型PR与后续代码产生更多冲突，也便于尽早收集社区反馈。

2. **PR #1184**（chore: bump undici）  
   创建于今日（08-04），低风险依赖更新。维持常规合并节奏即可。

此外，Issues积压为0，无长期未响应的用户报告，项目维护状态在当前时点表现健康。

---
*数据窗口：2026-08-03 至 2026-08-04 ｜ 来源：moltis-org/moltis GitHub*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-04

## 1. 今日速览

项目今日活跃度较高：过去24小时共产生 20 条 Issue 更新（10 开/10 关）与 47 条 PR 更新（21 条合并/关闭），社区讨论集中在功能增强（prompt caching、多模型并行、频道重试）与稳定性修复（插件安装失败、时间戳时区错误）两大方向。时间戳时区修复（#6301）已通过 #6685/#6309/#6618 三 PR 完成闭环并合并，是今日最完整的修复链路。无正式新版本发布，但 v2.1.0-beta.1 的安装验证任务（#6656）已关闭，表明 Beta 验证流程已按计划完成。整体项目健康度良好，修复效率高，但插件加载失败（#6683）与 OpenRouter 能力探测覆盖（#6687）等新隐患需持续关注。

---

## 2. 版本发布

**无新版本发布。**

今日无新的 Release 输出。值得关注的是，预发布验证任务 #6656（v2.1.0-beta.1 安装验证）已关闭，说明该 Beta 版本的安装检查流程已结束。结合当前待合并 PR 的数量（26 条），v2.1.0 正式版的发布可能正在临近。

---

## 3. 项目进展

今日合并/关闭的 PR 覆盖四个主要方向，反映了项目在稳定性和工程化方面的持续推进：

### 3.1 时间戳时区修复链路（重要）
- **[PR #6685] fix(timestamp): improve timestamp handling in agentscope_msg_to_message**（已关闭）- 修复 #6301，统一处理 naive 时间戳的时区转换。
- **[PR #6618] fix(console): remove forced UTC timestamp normalization in session list**（已关闭）- 配套前端修复，移除强制追加 'Z' 的 UTC 归一化逻辑。
- **[PR #6309] fix(chats): convert session timestamps across timezones**（已关闭）- 后端修复，正确解析并转换会话时间戳。

> 这三项 PR 配合形成完整修复链路，解决了 #6301「naive UTC 时间戳被误判为用户本地时间」的问题，从后端到前端一次性闭环。

### 3.2 CI 与工程基础设施
- **[PR #6678] fix(ci): install Playwright Chromium for the integration suite**（已合并）- 修复集成测试因 Chromium 缺失而全平台失败的问题。
- **[PR #6686] test(integration): fix chrome contract mismatches and add missing p-tier markers**（已合并）- 修复 Chrome 契约不匹配，并为测试补充 p-tier 标记。
- **[PR #6679] test(integration): align import-local with #6487 and widen a flaky poll window**（已合并）- 对齐 `/import-local` 与 #6487 的源路径守卫，扩大不稳定轮询窗口。
- **[PR #6672] fix(ci): modify the permission of the review bot**（已合并）- 分离 AI review 流程中模型驱动的分析与特权 PR 写入权限，降低 prompt injection 风险。

### 3.3 Console / 前端体验
- **[PR #6682] fix(console): sync legacy max_iters when saving iteration limit**（已合并）- 修复 Loop Engineering 迁移后 `max_iters` 字段未同步的问题。
- **[PR #6677] fix(console): prevent long tool commands from overflowing chat**（已合并）- 工具卡片长命令溢出修复，增加回归测试。

### 3.4 发布工件与安全加固
- **[PR #6671] fix(release): correct Computer Use and macOS artifacts**（开放中）- 修正 Computer Use 插件归类（移动至 plugins/bundle/）及 macOS 工件。
- **[PR #6676] fix(onebot): bind loopback by default and require token when exposed**（开放中）- OneBot 反向 WebSocket 默认回环绑定，暴露时强制要求 token，修复任意主机可连接注入事件的安全漏洞。

---

## 4. 社区热点

### 今日最活跃 Issue 排行

| 排名 | Issue | 评论数 | 状态 | 主题 |
|------|-------|--------|------|------|
| 1 | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 13 | 🟢 OPEN | 支持 GPT-5.6 prompt caching 参数 |
| 2 | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | 12 | ⚫ CLOSED | Console 通道安全审批提示不渲染，命令静默超时 |
| 3 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 6 | 🟢 OPEN | 任务产出物应分散到独立目录而非堆积 media 目录 |
| 4 | [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | 5 | 🟢 OPEN | DeepSeek 多轮思考模式 reasoning_content 缺失 |

### 热点分析

- **成本优化是核心诉求**：#6649（GPT-5.6 prompt caching）以 13 条评论领跑，说明社区对降低多轮对话推理成本的强烈关注。该功能若被接受，将直接影响 Agent 循环的 GPU Token 消耗。
- **安全可见性是隐性痛点**：#6655（Console 通道不渲染审批请求）虽已关闭，但 12 条评论反映了一个深层矛盾——安全策略拦截在非 Web UI 通道下的可见性问题，尤其是等待 300 秒后超时被拒，用户全程无感知的体验问题。

---

## 5. Bug 与稳定性

按严重程度排列：

### 高严重度

- **bug: App Center 安装 qwenpaw-creator 失败——插件顶层模块命名冲突**
  [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683)（🟢 OPEN）
  安装官方插件 `qwenpaw-creator@1.0.1` 时，因插件内 `utils` 模块与全局 `utils` 冲突，报 `No module named 'utils.env'`，加载阶段完全失败。
  **已有 fix PR：** [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688)（首贡献者）——通过插件独立命名空间隔离裸的绝对导入。

- **bug: OpenRouter 多模态探测覆盖已文档化的能力为 false**
  [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687)（🟢 OPEN）
  显式多模态探测将 OpenRouter 模型的图片/视频支持报告为 false，即使同一 provider 已从 OpenRouter 读取过该能力。属于能力覆盖覆盖（overwrite）问题。**暂无 fix PR。**

- **bug（安全相关）: Console 通道不渲染安全审批提示，被拦截命令静默超时**
  [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)（⚫ CLOSED）
  已关闭，未显示对应修复 PR，需确认修复是否已合入 main。

### 中严重度

- **bug: DeepSeek thinking mode 多轮失败——reasoning_content 缺失**
  [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667)（🟢 OPEN）
  OpenAI formatter 跳过 ThinkingBlock 后缺少 `reasoning_content`。已有 workaround：`retry_chat_model.py` 的 fallback 机制仅在首次失败时注入 `" "`，多轮偶现仍存在。**暂无 fix PR。**

- **bug: 2.0 新版本自动压缩（Scroll）无法触发记忆流程**
  [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624)（🟢 OPEN）
  自动压缩不触发 `summarize_when_compact`，但手动 `/compact` 可触发。
  **已有 fix PR：** [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)（Under Review）——`on_compress_context()` 未调用 summarize，PR 补充了自动压缩时的记忆流触发逻辑。

- **bug: 免费模型频繁限流（429）导致任务中断**
  [#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674)（🟢 OPEN）
  free tier（deepseek-v4-flash）限流时缺少优雅降级或自动重试策略。**暂无 fix PR。**

- **bug: 防重复功能误触发 Doom loop**
  [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906)（⚫ CLOSED）
  已关闭，历史遗留问题。

### 低严重度

- **bug: 前端会话窗口显示问题**
  [#6673](https://github.com/agentscope-ai/QwenPaw/issues/6673)（⚫ CLOSED）- v2.1.0b1 下的 UI 显示问题，已关闭。

- **bug: Skills/Skill Pool 页面在慢网络下加载失败**
  [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)（⚫ CLOSED）- API 返回 MB 级未压缩内容超过 30s 前端超时，已关闭。

---

## 6. 功能请求与路线图信号

### 高热度需求

- **GPT-5.6 prompt caching 参数支持**（[#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)）
  请求在 Responses API provider 中支持 `prompt_cache_key`、`prompt_cache_options`、`prompt_cache_breakpoint`。这是成本优化方向，若社区讨论热度持续，有望进入较近版本。

- **一个 Agent 同时使用多个模型**（[#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455)）
  「让 ds v4 pro、qwen 3.7 max、kimi k3 各自独立跑一次再汇总结果」的需求已持续 11 天，体现了用户对多模型交叉验证的核心诉求。涉及核心架构设计，预计落地周期较长。

- **任务产出物按任务分目录**（[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)）
  用户明确表达 media 目录堆积混乱的问题。实现相对简单，且与 #6642（直接读取原始路径）互为补充，大概率会被采纳为 UI 增强。

- **对话框拖入文件直接读取原始路径**（[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)）
  已关闭，功能已实现或已有对应方案。

### 已有对应 PR 的请求

| 功能请求 | 对应 PR | 状态 |
|---------|---------|------|
| 频道自动重试/健康检测（[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)） | [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) feat(channels): retry transient startup failures | 🟢 OPEN |
| Scroll 自动压缩触发记忆（[#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624)） | [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) fix(memory): trigger summarize on auto-compression | 🟢 Under Review |
| 插件安装顶层模块冲突（[#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683)） | [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) fix(plugins): isolate bare absolute imports | 🟢 OPEN |
| 上传时保留原始文件名（[#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) PR 本身） | [#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) fix(files): preserve uploaded filenames in hints | 🟢 OPEN |

### 新 Provider 扩展信号

- **添加 Volcengine Agent Plan 与 Xiaomi MiMo Standard API 作为内置 provider**
  [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)
  用户对国内云厂商/设备厂商模型的接入需求在增长，未来可能向更开放的 provider 生态演进。

---

## 7. 用户反馈摘要

### 用户痛点与诉求

- **安全审批的「隐形等待」问题**（#6655）
  「agent 执行 del/rm 时生成审批请求，Console 通道下用户完全看不到有人在等他审批。agent 侧等待 300 秒后超时被拒，整个过程用户无感知。审批请求没有渲染为终端可读的提示。」

- **文件处理的「先上传再读取」流程冗余**（#6642、#6643）
  「对话框拖入文件时，现在有个先上传（复制）再读取的过程，很奇怪，是否有必要。而且会在 media 目录产生一堆额外的文件。」「所有产出物全部堆积在 media 目录下，很混乱。」

- **多模型并行验证的强烈需求**（#6455）
  「在文件修改、事实核验等场景都需要多个模型分别独立跑一遍再汇总，现在做这种事情很麻烦。」

- **免费/自建服务的稳定性焦虑**（#6684、#6674）
  「自建 Matrix 经常出现 QwenPaw 自动快于 Matrix 服务导致失败，没有后续重试或健康检测，每次服务器启动后都需要手动重新保存一次频道才能恢复连接。」
  「免费模型频繁 429 限流，导致任务中断，希望有优雅降级或自动重试。」

### 正向反馈

- #6674 用户开头明确表达了感谢：「Thank you for QwenPaw — it's a great personal AI assistant. We're using it daily with the free deepseek-v4-flash model configured, and overall the experience is excellent.」这说明免费模型的整体使用体验良好，限流处理是锦上添花的需求。

---

## 8. 待处理积压

### 长期未响应的关键 Issue（按等待时间排序）

| Issue | 创建日期 | 等待天数 | 主题 | 备注 |
|-------|---------|---------|------|------|
| [#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) | 2026-06-03 | 62 天 | Playground 多 Agent 看板功能 | ⚫ CLOSED（今日关闭） |
| [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | 2026-07-24 | 11 天 | 一个 Agent 同时使用多个模型 | 用户持续活跃 |
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 2026-07-27 | 8 天 | Volcengine/Xiaomi provider 内置 | 等待维护者响应 |

### 等待时间较长的开放 PR

| PR | 创建日期 | 等待天数 | 主题 | 状态 |
|----|---------|---------|------|------|
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | 2026-07-23 | 12 天 | ReMe 记忆检索增加 reranker 支持 | Under Review |
| [#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) | 2026-07-27 | 8 天 | 保留上传文件原始文件名 | OPEN |
| [#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) | 2026-08-03 | 1 天 | 沙箱约束报告（NoneSandbox 不执行任何约束） | OPEN |

### 维护者提醒

- **#6398（ReMe reranker）** 已等待 12 天仍在 Review 中，涉及记忆检索的架构改动，建议安排专人跟进，避免与 #6629（自动压缩记忆触发）形成需求冲突。
- **#6687（OpenRouter 多模态探测覆盖）** 虽为今日新报，但会直接影响依赖 OpenRouter 多模态模型的生产用户，建议优先确认根因。
- **#6683（插件加载失败）** 已有首贡献者提交修复 PR #6688，此类贡献应予以鼓励并加速审阅，以维持开源社区的贡献积极性。

---

*报告时间：2026-08-04 | 数据来源：github.com/agentscope-ai/CoPaw*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-08-04

**数据速览**

| 指标 | 数值 |
|---|---|
| Issues 更新 | 50（新开/活跃 48，已关闭 2） |
| PR 更新 | 50（待合并 49，已合并/关闭 1） |
| 新版本发布 | 0 |

---

## 1. 今日速览

过去 24 小时仓库活跃度极高，合计产生 100 条 Issue/PR 更新，但无新版本发布。讨论重心明显偏向 RFC 评审与安全架构设计（Chat Completions profile、Goal mode、统一附件架构、全工具审批策略等），48 条活跃 Issues 中超过 20 条处于 RFC/tracker 状态，项目正处于 v0.9.0 安全架构与协议兼容的密集设计期。与此同时合并吞吐量偏低（仅 1 个 PR 合入、2 个 Issue 关闭），49 个待合并 PR 形成积压，评审资源是当前项目健康度的主要关注点。

## 2. 项目进展

过去 24 小时仅有 1 个 PR 被合入（未进入评论数 Top 20，本次数据中无法确认编号）。以下为可见的关闭与推进信号：

- **#8568 [已关闭] RFC: Mixture-of-Agents (MoA) 虚拟模型提供商** — 该提案拟通过聚合/裁判模型组合多个参考模型输出，在不改动客户端的前提下提升硬任务效果。关闭原因未披露。（[Issue #8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)）
- **#9642 [已关闭] Bug: 审批超时被记录为显式操作员拒绝** — 修复审计日志语义，避免“超时”被误记为“人工拒绝”，提升安全审计可信度。（[Issue #9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642)）
- **今日新增 7 个 PR**，集中于安全修复与体验优化：
  - [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737)：在 pipline 中强制执行按 agent 的工具策略
  - [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753)：区分 risk-profile `allowed_tools` 缺省与显式空列表
  - [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740)：新增 VoiceHost WebSocket 语音桥接（关闭 #7943）
  - [#9741](https://github.com/zeroclaw-labs/zeroclaw/pull/9741)：CI 校验 canonical all-features 镜像
  - [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748)：修复 provider 刷新竞态覆盖替换会话
  - [#9749](https://github.com/zeroclaw-labs/zeroclaw/pull/9749)：修复 WebChat 流式回复时自动滚动问题
  - [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743)：为 OpenAI-compatible provider 接入 modalities 解析（vision 能力检测）

其中 #9743 直接为 Chat Completions 兼容能力铺垫基础，与 #8603 的 RFC 讨论形成呼应。

## 3. 社区热点

讨论最活跃的 Issues（按评论数排序）：

1. **#8603 RFC: ZeroClaw Chat Completions profile**（16 评论）
   Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等 OpenAI 协议客户端无法接入，是当前影响面最大的功能诉求。（[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）

2. **#8303 RFC: Goal mode v1**（13 评论）
   希望为跨多轮的有界用户目标提供持久执行机制，并收敛上一版设计膨胀的实现边界。（[Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)）

3. **#7155 RFC: 高风险命令确认层级 + 命令策略**（12 评论）
   今日更新 Revision 2：将 shell-only 策略推广为覆盖所有工具的 allow/ask/deny 统一权限层。（[Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)）

4. **#9488 / #9487 统一附件架构与会话传输适配器**（11/10 评论）
   与 #9600 tracker 联动，收编会话持久化契约所有权，并让迁移后的入口统一提交 `InboundAction`。（[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) / [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)）

背后核心诉求：①接入 OpenAI 协议生态；②统一工具安全审批模型；③收编运行时所有权边界（会话、附件、认证、安全决策管道）。

## 4. Bug 与稳定性

按严重程度排列：

**S0 — 数据丢失/安全风险：**
- **#9647** 知识图谱无按 agent 归属，任何 agent 可读写其他 agent 的知识。状态：accepted，已标记 follow-up。（[Issue #9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)）
- **#9646** session/channel 读写工具无按 agent 所有权范围（`sessions_list/history/send`、`discord_search`）。状态：accepted，已标记 follow-up。（[Issue #9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)）

**S3 — 轻微：**
- **#9697** ZeroCode 无法连接 Windows 任务计划程序启动的 daemon。状态：needs-author-action。（[Issue #9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697)）

**今日提交的关联修复 PR（尚未合入）：**
- [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) 在 pipeline 中强制 agent 工具策略 → 直接缓解 #9646 一类问题
- [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) 防止“显式空列表”被误判为“不限制”的语义反转

这两个 PR 均于今日创建，说明维护者对 S0 级权限隔离问题响应很快，但修复尚未进入 master。

## 5. 功能请求与路线图信号

1. **OpenAI Chat Completions 兼容 profile（#8603）** — 若被接受将直接对接庞大第三方生态，是潜在影响面最大的功能。（[Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）
2. **OpenRouter 稳定 session_id（#9631）** — 触发 prompt cache 以降低长对话成本，用户描述“一轮对话数十次 LLM 请求”的真实场景。（[Issue #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)）
3. **VoiceHost WebSocket 语音桥接（PR #9740）** — 新增 `channel-voicehost`，支持打断取消与审批路由。（[PR #9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740)）
4. **WebSocket keepalive（PR #9701）** — 新增 `[gateway].websocket_ping_interval_secs` 配置。（[PR #9701](https://github.com/zeroclaw-labs/zeroclaw/pull/9701)）
5. **v0.9.0 安全架构系列 RFC（#7141 / #7142 / #7155 / #8398）** — 可插拔入站认证、运行时安全决策管道、全工具审批策略、插件机密模型，共同勾勒下一版本安全主干。（[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) / [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) / [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) / [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)）

## 6. 用户反馈摘要

- **API 成本敏感（#9631）**：用户抱怨 ZeroClaw 通过 OpenRouter 的对话“产生数十次 LLM 请求，system prompt 和 tool schemas 每轮重放”，期望通过稳定 session_id 触发缓存——成本是真实落地的关键因素。（[Issue #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)）
- **审计日志可信度（#9642）**：社区将“超时被记为显式拒绝”定性为“伪造审计轨迹”，说明安全日志语义准确性是信任底线。（[Issue #9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642)）
- **多 agent 数据隔离（#9647/#9646）**：两个连续 S0 报告指向知识图谱与会话工具均无所有权范围，用户已在多 agent 场景中实际遭遇数据泄漏风险。（[#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) / [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)）
- **Web UI 可用性（#9749）**：流式回复期间用户无法上翻历史消息，每次流式更新都会把视口强制拉回底部，是高频易触发的体验缺陷。（[PR #9749](https://github.com/zeroclaw-labs/zeroclaw/pull/9749)）
- **Windows 自动化（#9697）**：任务计划程序环境下 daemon 连接失败，影响生产场景的无人值守运行。（[Issue #9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697)）

## 7. 待处理积压

- **维护者决策队列（#8692）**：专门的 RFC/设计决策 tracker 仍 open，说明有相当数量提案等待裁决。（[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）
- **长期未决的 RFC（均超过一个月）**：
  - [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（06-03 创建，今日仍有更新，needs-maintainer-review）
  - [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（06-03 创建，Rev 7，in-progress）
  - [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)（06-03创建，Rev 6，needs-maintainer-review）
  - [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)（06-05 创建，needs-maintainer-review）
  - [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)（06-17 创建，needs-author-action）
  - [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)（06-27 创建，needs-author-action）
  - [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)（06-28 创建，needs-author-action）
- **高优先级安全 PR 合入等待**：#9410、#9402、#9403、#9447、#9424 自 7/26 起 open 约 9 天仍未合入，建议检查评审/CI 资源是否受限。（[#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) / [#9402](https://github.com/zeroclaw-labs/zeroclaw/pull/9402) / [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) / [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) / [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424)）
- **堆叠 PR 维护提醒**：#9398 当前分支暂时包含 #9660，维护者注明“不要合并此 head”，需等 #9660 合入后重建；#9447 依赖 #9424。这类堆叠关系会放大合并等待时间。（[PR #9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398)）

---

**总结**：ZeroClaw 当前处于“设计密度高、合并吞吐低”的阶段，安全与协议兼容是社区主诉求；S0 级权限隔离 bug 已有修复 PR，但整体合入节奏需要关注，维护者评审队列是近期项目健康度的最大变量。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*