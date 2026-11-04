# OpenClaw 生态日报 2026-11-04

> Issues: 401 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-04 18:00 UTC

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

# OpenClaw 项目日报 · 2026-11-04

> 数据来源：openclaw/openclaw GitHub 活动（过去 24 小时）。所有条目均基于所提供数据，未提供链接细节的条目沿用原始 Issue/PR 编号。

---

## 1. 今日速览

项目处于**高活跃、高压力**状态：24 小时内 Issues 更新 401 条（新开/活跃 239，关闭 162），PR 更新 500 条（待合并 306，已合并/关闭 194），单日产出一次 beta 发布。合并/关闭率在 PR 侧约 39%、Issue 侧约 40%，积压仍在增长，待合并 PR 数量（306）明显偏高。稳定性方面，多个 P0/P1 级问题集中在 **Windows 安装/更新链路**与**共享状态完整性**，且多数标注 `clawsweeper:no-new-fix-pr`，处于“已确认、无修复 PR”状态。整体判断：**开发吞吐旺盛，但发布阻断类缺陷是当前健康度的主要风险点**。

---

## 2. 版本发布

### v2026.11.5-beta.1

所提供 release notes 仅包含以下内容：

**Highlights**
- **Knowledge Scribes**：在 agents、sessions 与 Control UI 中引入一等公民的知识捕获与可复用 scribe 工作流。关联 PR：#185583、#185637、#185974、#186270、#186455、#187659（致谢 @jalehman）。
- **PostgreSQL data plane**：新增 PostgreSQL 支撑的状态存储（release notes 在此处截断，后续细节未提供）。

**破坏性变更 / 迁移注意事项**：所提供材料中**未包含**明确说明。仅从方向上看，引入 PostgreSQL 状态后端属于数据平面层面的架构变化，升级前建议关注完整 release notes 中的迁移指引（本材料未提供，不做推断）。

---

## 3. 项目进展

以下为今日**已合并/关闭**的、本材料中可见的 PR：

- **#167471（已关闭）** fix(cron)：阻止网关重启消耗任务的自动禁用预算。修复了启动时 `markInterruptedStartupRun` 将中断记为普通失败、进而误清 `lastErrorReason` 的问题。属 cron/heartbeat 可靠性修复。链接：openclaw/openclaw PR #167471
- **#192834（已关闭）** refactor(agents)：将命令数据与执行上下文分离，降低 gateway sampling / tool-choice 消费者与 agent 执行上下文的耦合。无用户可见行为变化。链接：openclaw/openclaw PR #192834
- **#192875（已关闭）** fix(ui)：为浏览器错误摘要提供字符串，修复 `browser-panel-render.tsx` 在 `noUncheckedIndexedAccess` 下的类型检查失败。链接：openclaw/openclaw PR #192875
- **#192905（已关闭）** fix(ci)：清偿主分支剩余 7 行测试预算赤字，将上限恰好设为 6,467,538 LF。链接：openclaw/openclaw PR #192905

**推进评估**：今日可见的合并以**内部工程卫生（CI、类型、重构）** 与 **cron 可靠性**为主，功能性推进主要体现在 beta 版本内的 Knowledge Scribes 与 PostgreSQL 数据平面。整体属于“基础设施加固 + 新能力预发布”阶段，而非大规模功能落地。

---

## 4. 社区热点

按评论数排序的高热度讨论：

1. **#170956（OPEN，28 评论，P0）** Windows：启动缓慢、插件关闭不干净、`schtasks` 权限错误，导致重启/更新极不可靠。链接：openclaw/openclaw Issue #170956
2. **#177656（OPEN，27 评论，P1）** 原生 host exec 在 2026.10.5 上返回共享状态完整性准入错误（`Direct shared-state reader requires current integrity admission`），报告中称至少 28 次失败且“child effects unproved”。链接：openclaw/openclaw Issue #177656
3. **#120385（OPEN，25 评论，P2）** Code Mode 工具目录在 scheduled/cron 与 memory-flush 轮次构建不完整，MCP 工具缺失，仅以“⚠️ 🛠️ Exec failed”呈现；作者已发布更正，推翻了此前“cron allowlist 已排除”的说法。链接：openclaw/openclaw Issue #120385
4. **#166634（OPEN，23 评论）** 崩溃恢复后“late reclamation commit checkpoint”失败，导致 agent 永久拒绝 `chat.history`、`chat.metadata` 等能力（已标注 not-repro-on-main）。链接：openclaw/openclaw Issue #166634
5. **#161921（OPEN，16 评论，P0）** 状态迁移后 `doctor --fix` 与 `plugins update` 互相要求对方先执行，插件卡在旧版本。链接：openclaw/openclaw Issue #161921

**诉求分析**：热点高度集中于**可恢复性**——用户真正关心的是“崩溃/重启/更新之后系统能否自愈”。Windows 服务管理、状态迁移回滚、崩溃后 agent 不可用三类问题构成同一主题的三个侧面。MCP 工具链（#120385、#166133）则反映 Code Mode 与实际工具目录一致性是第二大关切。

---

## 5. Bug 与稳定性

按严重程度排列（“fix PR”依据所提供标签判断）：

| 级别 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| **P0** | #170956 | Windows 启动慢、插件关闭不干净、schtasks 权限错误，重启/更新不可靠（crash-loop，release blocker） | 无（no-new-fix-pr，需维护者评审） |
| **P0** | #161921 | 状态迁移无回滚后，`doctor --fix` 与 `plugins update` 互相阻塞，插件卡旧版（release blocker） | 无 |
| **P0** | #169844 | Windows 上 Control UI 网关更新卡在 “Activating”，Scheduled Task 被禁用、网关停止、包未更新（crash） | 无 |
| **P1** | #177656 | 原生 host exec 共享状态完整性准入错误，2026.10.5 上至少 28 次失败 | 无 |
| **P1** | #150822 | 原生 Codex 子进程广播 OpenClaw 工具但无执行 handler；分离式失败投递亦失败（影响 security / message-loss，需安全评审） | 无 |
| **P1** | #126950 | Telegram 不透明回调载荷（`tgcb1:`）对非插件调用方被静默丢弃 | 有（linked-pr-open） |
| **P1** | #148789 | 模型 fallback 链在 harness 级会话失败时耗尽所有候选，并错误归因于最后一个 fallback 模型 | 无 |
| **P1** | #121558 | Cron 隔离运行将 claude-cli 运行叙述混入对外发布消息 | 有（linked-pr-open） |
| **P1** | #148308（已关闭） | tailscaled 重启后网关静默丢失 Tailscale Serve 声明且不再重认领 | 已关闭 |
| **P2** | #166133 | MCP tool_call 包装器把整数参数强转为字符串，导致 `-32602` 参数错误 | 无 |
| **P2** | #162585 | Windows 插件源捕获将自身包重复物化，npm 树线性膨胀（290 MB → 612 MB+/24 分钟），网关永不健康 | 无 |
| **P2** | #151962 | “幻影用户消息”：内部运行时字符串被当作真实用户提示提交，且未持久化到 transcript_events | 无 |
| **P2** | #166634 | 崩溃恢复后 late reclamation checkpoint 失败，agent 不可用 | 无（not-repro-on-main） |
| **P2** | #191944 | macOS 上 `gateway stop` / `--force` 均因 “Process ancestry could not be fully inspected” 失败 | 无 |
| **P2** | #143640 | memory-core 全量索引发布在单个 IMMEDIATE 事务中执行，耗尽并发写入的 5s busy timeout | 无 |
| **P2** | #136311 | Gateway 每次启动都抢 reindex 锁且不释放，索引无法重建；累积 19 GB 孤儿临时 DB | 无 |
| **P2** | #118793 | Claude CLI “session limit” 错误直接 surface_error，未触发 fallback 链 | 无 |

**趋势判断**：Windows 平台占据全部 3 个 P0 中的 2 个，是当前最薄弱环节；memory-core 的锁与事务问题长期存在且无 fix PR，属于“慢性病”型风险。

---

## 6. 功能请求与路线图信号

- **#192632（P3，enhancement）** 新增 `claude` web_search provider：通过单独 Messages 调用使用 Anthropic 服务端 `web_search`，返回与 Gemini、Perplexity 同形态的带引用答案。今日新建即获 9 评论，方向清晰、实现面小，**进入下一版本的可能性相对较高**。
- **#91676（P2，Feature）** 新增可选 `skills.workshop.allowSandboxedAgents`（默认 false），允许沙箱内 agent 使用 `skill_workshop` 工具；当前该工具对沙箱 agent 硬禁用且无配置开关。涉及安全评审，**推进需谨慎**。
- **#165685（P3）** 为 registry 判定不可续的 collector 在 `agents_wait` 结果中提供机器可读 `reason`，并请求维护者就暂停时长与续跑阶段诊断给出方向。属可观测性增强。
- **#178373（P2）** 指出 agent loop 缺少运行级 turn/token 预算、工具循环检测默认关闭（`evaluateToolLoopCall` 需 `enabled === true` 才生效）、保留历史每轮重复计费。这是成本与稳定性交叉的结构性诉求。

**与已有 PR 的结合判断**：Skill Workshop 相关 UI 修复 PR #192931 已在路上，说明该子系统正在被关注，但 #91676 的沙箱放开属独立安全议题，短期纳入可能性低。web_search provider（#192632）与本轮 release 中已有的 Gemini/Perplexity provider 形成一致性扩展，是最具落地信号的候选。

---

## 7. 用户反馈摘要

- **升级是最大痛点**：多条高评论 Issue 指向同一体验——更新/重启后系统处于半坏状态。用户描述 Windows 下“pas na veel proberen”（只有在多次尝试后才成功）（#170956），Control UI 更新卡在 4/7 阶段（#169844），插件与 doctor 互相等待（#161921）。这直接影响对“可托管服务”形态的信任。
- **上下文与成本敏感**：#67419 指出每轮会话启动即有 20-30% 上下文被 bootstrap 文件占用（MEMORY.md ~1500-2000 tokens，另含 SOUL.md、USER.md、AGENTS.md、IDENTITY.md、TOOLS.md、HEARTBEAT.md、BOOTSTRAP.md）；#178373 指出保留历史每轮重复计费；#161208 指出主会话 heartbeat 从不复用 Anthropic prompt cache。用户对 token 经济性有明确诉求。
- **长会话的可靠性焦虑**：#151962 报告在 13 天、约 310k token 的微信桥接会话中，agent 反复收到用户从未发送的提示；这是长生命周期部署用户的典型担忧。
- **界面显示缺陷被容忍但持续抱怨**：#149153 最终回复重复渲染两次、#165041 会话恢复时内部注入块对用户可见、#142606 原生 app 中 dashboard 链接静默失效。均属 ux-friction，不阻断使用但侵蚀观感。
- **满意信号**：Discord autoPresence 的误报问题（#160610）已关闭，sessions 仪表盘行数不一致（#165391）已关闭，说明外观类与渠道类问题有在收敛。
- **报告质量**：多个 Issue 附带环境、版本号、错误码与失败次数（如 #177656 的“至少 28 次”），并出现自我更正（#120385），反映社区诊断能力较强。

---

## 8. 待处理积压

长期未响应或久悬的重要条目（以创建日期距今日的时长排序）：

| Issue/PR | 创建 | 状态 | 说明 |
|---|---|---|---|
| #67419 | 2026-04-15 | OPEN（stale，15 评论，2 👍） | 会话上下文膨胀 20-30% tokens，需产品决策 + 实时复现。**悬置约 6.5 个月**，是高价值高优先级待决项。 |
| #91676 | 2026-06-09 | OPEN（10 评论，2 👍） | 沙箱 agent 技能工坊开关，需产品 + 安全双评审。**悬置近 5 个月**。 |
| #118793 | 2026-08-03 | OPEN（10 评论，1 👍） | Claude CLI 限流不触发 fallback。悬置约 3 个月，涉及核心容错路径。 |
| #120385 | 2026-08-08 | OPEN（25 评论） | Code Mode 工具目录不完整，热度高但仍在定位。 |
| #121558 | 2026-08-10 | OPEN（linked-pr-open） | Cron 叙述混入发布消息；已有 PR 关联但未合并。 |
| #126950 | 2026-08-21 | OPEN（linked-pr-open） | Telegram 回调载荷丢弃；已有 PR 关联但未合并。 |
| #136311 | 2026-09-02 | OPEN（stale） | reindex 锁不释放 + 19 GB 孤儿 DB。资源泄漏类问题久悬。 |
| #143640 | 2026-09-10 | OPEN（stale） | 全量索引单事务耗尽 busy timeout。 |
| #148789 | 2026-09-15 | OPEN | fallback 链错误归因，无 fix PR。 |
| PR #139620 | 2026-09-06 | OPEN（P1，proof: sufficient，等待作者） | Discord 频道回复的网关委派修复，**已具备充足证明但等待作者响应近 2 个月**，建议维护者主动跟进。 |
| PR #180854 | 2026-10-22 | OPEN（draft） | Slack 父消息删除后停止回复，含生命周期与重试覆盖。 |
| PR #188726 / #191509 | 2026-10-30 / 11-02 | OPEN（占位） | 明确标注为调查占位/空占位，建议清理以减少评审噪声。 |

**给维护者的提醒**：
1. **已具备 fix PR 的高优先级项**：#126950、#121558、#139620 均有 `linked-pr-open`，推进合并的边际收益最高。
2. **P0 三连（#170956、#161921、#169844）均无 fix PR**，且全部为 release blocker 标签，是下一版本发布前的关键路径。
3. **stale 但不该 stale 的项**：#67419（token 经济性）、#136311（资源泄漏）应被重新激活评审。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据日期：2026-11-04**

---

## 1. 生态全景

当前生态呈现明显的"梯队分化"：以 OpenClaw、Hermes Agent、ZeroClaw、NanoClaw、CoPaw 为代表的头部项目单日 PR 更新量达 19–50 条，处于高强度迭代与发布压力并行状态，而 IronClaw、Moltis、ZeptoClaw 等则近乎静默。横跨所有活跃项目的共同主题已从"功能扩张"转向**运行时可靠性、成本可控性与安全边界贯穿**——崩溃恢复、会话状态一致性、审批门控、token 经济性反复出现在高评论 Issue 中。同时，外部生态（搜索服务商、数据 MCP、iMessage/iOS 渠道）开始主动向这些平台接入，说明部分项目已具备分发渠道价值。整体判断：生态仍处早期，**没有单一项目同时具备高合并吞吐与低缺陷密度**，健康度普遍被"积压增长快于收敛"所拖累。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃·关闭） | PR 更新（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 401（239·162） | 500（306·194） | v2026.11.5-beta.1 | 高吞吐/高风险：3 个 P0 release blocker 均无 fix PR，待合并 PR 306 |
| **Hermes Agent** | 50（49·1） | 50（48·2） | v0.22.7（补丁） | 高产出/低收敛：关闭率 Issue 2%、PR 4%，积压扩大 |
| **NanoClaw** | 3（0·3） | 19（16·3） | 无 | 活跃/中上：当日 Issue 全部闭环，但合并落后于提交 |
| **ZeroClaw** | 18（10·8） | 50（48·2） | 无 | 活跃/中：关闭集中于 v0.9.0 安全阻塞项，评审瓶颈明显 |
| **CoPaw** | 10（7·3） | 50（37·13） | 无 | 活跃/中上：beta 回归修复为主，跨版本遗留 Bug 需关注 |
| **LobsterAI** | 0 | 16（3·13） | 无 | 良好/静默：13 条合入全为性能与稳定性修复，Issue 通道零信号 |
| **NanoBot** | 4（0·3） | 17（6·11） | 无 | 良好：当日 Issue 均同日闭环，4 条长期 PR 带 conflict |
| **PicoClaw** | 4（3·1） | 1（0·1） | 无 | 中低：新增高优安全 Issue #3456，今日无实质推进 |
| **ZeroClaw** | — | — | — | （见上） |
| **ZeptoClaw** | 1（1·0） | 1（1·0） | 无 | 平稳：文档缺陷 + 配套修复 PR，待维护者响应 |
| **Moltis** | 0 | 1（1·0） | 无 | 低：仅 1 条功能 PR，无进展 |
| **IronClaw** | 0 | 2（2·0） | 无 | 低：仅 dependabot 依赖 PR，其中 zip 跨主版本需评审 |
| **NullClaw** | 0 | 0 | 无 | 静默 |
| **TinyClaw** | 0 | 0 | 无 | 静默 |

> 注：ZeroClaw 在原始数据中仅列一次，上表已合并；活跃度数字直接取自各项目日报速览。

---

## 3. OpenClaw 在生态中的定位

**规模优势最明显，但也是压力最集中者。** 单日 401 条 Issue 更新与 500 条 PR 更新，较次高梯队（Hermes、ZeroClaw、CoPaw 的 50 条 PR）高出一个数量级，社区体量与贡献者基数在样本中居于绝对头部。且它是本日**唯一发布正式 beta**（v2026.11.5-beta.1）并同时推进两项架构级能力（Knowledge Scribes 一等公民工作流、PostgreSQL 数据平面）的项目——其他项目的发布要么是补丁汇总（Hermes v0.22.7），要么为零。

**技术路线差异**：OpenClaw 已进入"数据平面 + 一等公民能力"的重构阶段（PostgreSQL 状态后端、scribe 工作流），并同时维护 Code Mode、MCP 工具目录、cron/heartbeat、Windows Scheduled Task 等跨平台运行时——复杂度远超 NanoBot/PicoClaw 等轻量项目，也解释了为何其缺陷面更广。

**风险对比**：OpenClaw 是样本中**唯一出现 3 个 P0 release blocker 且全部无 fix PR** 的项目（#170956、#161921、#169844，其中 2 个在 Windows），而 NanoBot、NanoClaw 等小体量项目当日 Issue 均做到同日闭环。即：**规模带来吞吐，也带来可恢复性债务**，其 Windows 安装/更新链路是被反复验证的最薄弱环节。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **可恢复性 / 崩溃自愈** | OpenClaw（#166634 崩溃后 agent 不可用、#161921 迁移无回滚）、NanoClaw（#4056 outbound.db-journal 滞留、#4258 单次探测超时即杀会话）、Hermes（#148719 旧进程残留、#148742 旧库升级 NULL-id） | "重启/宕机/升级后系统能否自愈"，且多需人工介入才恢复，用户对**静默失败**尤其敏感 |
| **成本 / token 经济性** | OpenClaw（#67419 上下文 20-30% 被 bootstrap 占用、#178373 保留历史重复计费）、LobsterAI（#2988 单条消息 60–130 credits、8,000+ 一夜降至 800）、PicoClaw（#3445 单轮 222 次调用、约 1310 万输入 token） | 上下文膨胀、重复计费、路由/熔断缺失导致成本失控 |
| **安全边界贯穿子代理/工具** | NanoBot（#6554 子代理绕过 `cliApps.enable:false`）、PicoClaw（#3456 reload 后 approval-hook 失效）、OpenClaw（#177656 共享状态完整性准入）、ZeroClaw（#11198 委托记忆丢失 principal 作用域、#12227 审批依赖模型自写值） | 显式关闭/审批策略必须在所有执行路径（含子代理、reload）生效 |
| **会话状态一致性 / 转录完整性** | Hermes（#136160 部分文本未持久化、#137287/#121096 桌面端重复乱序）、OpenClaw（#151962 幻影用户消息）、ZeroClaw（#11921 append-only 事件历史重构）、CoPaw（#7997 消息撤回/编辑+工作区回滚） | UI 呈现与运行时真实状态一致，长会话不丢消息不乱序 |
| **统一网关稳定性** | Hermes（#143547 统一网关合并遗留）、CoPaw（#8579 provider 禁用后配置残留、#8565 Windows Hub Local 启动失败）、ZeroClaw（#9572 WebSocket 栈溢出） | 多子系统并入单进程后的跨子系统后遗症 |
| **MCP / 插件生态扩展** | NanoBot（#6557 Sprouts Data 托管 MCP、#6559 MCP ready 态）、ZeroClaw（#12109 多插件仓库）、OpenClaw（MCP 工具目录一致性 #120385） | 第三方能力接入与插件多源分发 |

---

## 5. 差异化定位分析

- **OpenClaw —— 平台型旗舰**。功能最全（Code Mode、MCP、cron、多平台安装、Data Plane），目标用户为重度/自托管高级用户，架构最重、演进最快，也背负最多历史包袱。
- **Hermes Agent —— 多端统一网关路线**。将 CLI/TUI/桌面/API/编辑器等全纳入单一网关，配 Microsoft Store / Docker / Cloud 分发 + iOS TestFlight，倾向**产品化与跨端体验**；但单供应商记忆限制（#24770，302 评论）与桌面端转录问题是明显短板。
- **NanoClaw —— 轻量 Telegram 优先**，channel/approval 加固密集，团队规模小（合并吞吐压力明显），面向个人/小团队部署。
- **NanoBot —— 学术血统（HKUDS）的 WebUI 与 MCP 扩展导向**，当日以安全边界与发布工程化为主，生态方主动接入（Sprouts Data）显示其 MCP 面具外部吸引力。
- **ZeroClaw —— 安全与身份模型最重**，v0.9.0 收尾聚焦 identity-access（principal 作用域、admin 撤销绕过）、企业 IM（Zulip/Rocket.Chat），面向安全敏感的自托管/企业场景。
- **CoPaw —— AgentScope 生态 + 多通道（DingTalk/Matrix/飞书）+ 记忆插件**，beta 周期回归修复为主，插件主题 token 化显示可扩展性投入。
- **PicoClaw（Sipeed）—— 硬件背景的轻量渠道扩展**（iMessage/SMS 尝试），社区输入稳定但推进慢。
- **LobsterAI —— 桌面陪伴型产品**，当日全为性能/成本/媒体生成修复，绑定 DeepSeek Harness 与 OpenClaw 运行时，产品化色彩最浓。
- **ZeptoClaw / Moltis / IronClaw / NullClaw / TinyClaw** —— 小体量或静默，处于早期打磨或维护间隙。

---

## 6. 社区热度与成熟度

- **快速迭代阶段（高活跃、缺陷与功能并行扩张）**：OpenClaw、Hermes Agent、ZeroClaw、CoPaw。特征是 PR 待合并队列庞大（37–306 条）、架构级重构在途（PostgreSQL 数据平面、统一网关、会话事件历史），但合并吞吐落后于提交。
- **质量巩固阶段（活跃但以修复/加固为主，Issue 闭环快）**：LobsterAI、NanoBot、NanoClaw。LobsterAI 当日 13 条合入全为性能与成本修复；NanoBot 3 条 Issue 全部同日闭环；NanoClaw bug 报告基本伴随同日/同周 fix PR——均显示较强的维护纪律。
- **早期/低频阶段**：PicoClaw（新增高优安全 Issue 待响应）、ZeptoClaw、Moltis、IronClaw、NullClaw、TinyClaw。输入零散，推进依赖个别贡献者。

**成熟度判据**：Issue 同日闭环率（NanoBot/NanoClaw 最优）比绝对活跃量更能反映健康度；OpenClaw 虽吞吐最高，但关闭率仅约 40% 且 P0 无 fix PR，属"高活跃、待止血"。

---

## 7. 值得关注的趋势信号

1. **"可恢复性"成为智能体产品的信任底线**：跨 OpenClaw / NanoClaw / Hermes / ZeroClaw 的多数高优缺陷本质是"一次异常即需人工重启"，且常以静默失败呈现（#12228 打印成功却不生效、#2042 返回成功但无反应）。**对开发者的启示**：状态完整性检查、崩溃后自愈、失败显式化应作为架构一等需求，而非事后补丁。

2. **成本治理从"优化项"升级为"信任级问题"**：LobsterAI 的 credits 一夜蒸发、PicoClaw 的千万级 token 空转、OpenClaw 的 bootstrap 上下文膨胀，均指向**缺少运行级 turn/token 预算、工具循环检测默认关闭、路由中途不重判**。这提示行业需要一个显式的"成本熔断 + 预算"抽象层。

3. **安全边界必须贯穿所有执行路径**：子代理绕过开关（NanoBot）、reload 后审批失效（PicoClaw）、审批依赖模型自写值（ZeroClaw）、principal 作用域丢失（ZeroClaw S0）——信号一致：**策略在委派/重载/多路径下的一致性，是当前最易被忽视的攻击面**。

4. **UI 呈现与运行时真实状态脱节是共性 UX 债**：模型按钮（NanoBot #6550）、MCP Ready 态（#6559）、桌面转录（Hermes #137287）、默认 agent 编辑（CoPaw #8576）——用户要求"看到的就是实际发生的"。

5. **外部生态方开始把项目当分发渠道**：Sprouts Data 提交 MCP 预设、Keenable 提交无密钥搜索 provider、Sendblue 尝试 iMessage 渠道、官方 iOS TestFlight 上线——**渠道与工具集成的多源化**正在成为平台竞争力的新维度。

6. **维护者响应节奏成为隐性分化因素**：长期 `ci-reviewed` 或 `proof: sufficient` 的 PR 悬置 2–3 个月（Hermes #85794/#85775、NanoClaw glifocat 加固 PR 组、ZeroClaw #11076/#11203）比缺陷本身更易流失贡献者。**对开发者的启示**：评审吞吐与问题收敛速度，正成为早期项目存亡的关键变量。

---

**一句话结论**：生态已从"谁能做出功能"过渡到"谁能让智能体在崩溃、升级、委派与成本压力下保持可信"的阶段；OpenClaw 凭规模与发布节奏领跑，但在可恢复性与 Windows 链路上留下明显缺口，而 NanoBot / NanoClaw 式的"小步快修、当日闭环"正在成为健康度的参照系。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-04

## 1. 今日速览

项目今日处于**高活跃维护状态**：24 小时内 17 条 PR 更新（11 条合并/关闭、6 条待合并）、4 条 Issue 更新（3 条已关闭），无新版本发布。合并工作集中在 **WebUI 稳定性修复**、**子代理安全边界**与**发布流程简化**三条主线上，由 chengyongru 主导的批量修复占当日关闭 PR 的多数。已关闭的 3 条 Issue 均在同日得到对应修复 PR，问题响应闭环速度良好。积压侧仍有 4 条长期开放的 PR（最早可追溯至 2026-03），且多条标注 `conflict`，合并成本在上升。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的重要 PR：

- **[#6563] fix(security): enforce TLS, shell and workspace boundaries（已关闭）**
  作者：Re-bin。整合三项运行时边界修复：为 HTTP、WebSocket 及 HTTP fallback 保持 Codex 证书与主机名校验（保留显式 CA 信任与代理路由），并收紧 shell 与 workspace 边界。属于安全加固类改动。
  https://github.com/HKUDS/nanobot/pull/6563

- **[#6561] fix(subagent): inherit parent tool configuration（已关闭）**
  作者：chengyongru。修复子代理仅从有限的父级字段重建工具配置、导致 `cliApps.enable` 被重置为默认值的问题，同时修复 CLI App 超时配置丢失。直接对应 Issue #6554。
  https://github.com/HKUDS/nanobot/pull/6561

- **[#6558] fix(compaction): retain native state across retry and recovery（已关闭）**
  作者：chengyongru。修复 Codex 成功压缩会话后生成失败时，重试仍使用原始续接内容、且中断会丢失压缩状态的问题。
  https://github.com/HKUDS/nanobot/pull/6558

- **[#6553] fix(webui): update usage and tool progress during active turns（已关闭）**
  作者：chengyongru。对应 NAN-401，使长时间运行的目标在任务完成前即持续刷新上下文用量与最近轮次图表。
  https://github.com/HKUDS/nanobot/pull/6553

- **[#6559] fix(webui): preserve MCP ready state after plugin toggles（已关闭）**
  作者：chengyongru。修复启停 Agent Plugin 后，已连接的 MCP（如 Linear）从 Apps → Ready 中消失的问题。
  https://github.com/HKUDS/nanobot/pull/6559

- **[#6560] fix(webui): allow closing image settings without valid credentials（已关闭）**
  作者：chengyongru。修复未配置图像生成 provider 时设置弹窗无法关闭的死锁（源于 #6384 的保存门控逻辑）。直接对应 Issue #6555。
  https://github.com/HKUDS/nanobot/pull/6560

- **[#6556] ci(release): share manual and opt-in daily candidate preparation（已关闭）**
  作者：Re-bin。在不引入第二套构建系统的前提下简化发布流程：保留单一 Stable 准备路径，补丁发布仅需生成变更说明与受影响文档，不再需要完整 wiki 与 promo 流程。
  https://github.com/HKUDS/nanobot/pull/6556

- **[#6538] refactor(goal): sustain one ReAct run until the goal closes（已关闭）**
  作者：chengyongru。贡献于 NAN-392：活跃 Goal 可突破常规 `max_tool_iterations` 限制持续单次 ReAct 执行。
  https://github.com/HKUDS/nanobot/pull/6538

- **[#2116] feat: support dynamic custom providers via extras config（已关闭）**
  作者：WormW。在 `ProvidersConfig` 中增加 `extras` 字典，无需改代码即可动态添加 LLM provider，并声明可选模型能力（`supportsImage`、`contextWindow`、`maxTokens`）。该 PR 自 2026-03-16 提出，历经约 7.5 个月后关闭。
  https://github.com/HKUDS/nanobot/pull/2116

**整体评估**：今日推进以「稳定性 + 安全边界 + 发布工程化」为主，无重大新功能落地；WebUI 与子代理两个问题面被系统性清理，项目健康度提升较明显。

---

## 4. 社区热点

今日数据中评论与反应均较低（各条 👍 均为 0，最多 1 条评论），缺乏典型热点，以下按讨论价值排序：

- **Issue #6550 [OPEN] WebUI: model button does not reflect the active primary or fallback model**（1 条评论，今日唯一仍开放的 Issue）
  反馈 WebUI 输入框旁的模型按钮显示的是「已配置/已选预设」，而非真实处理当前请求的模型，且不跟随网关的 `turn_model_updated` 事件。这是**状态呈现与真实执行不一致**类问题，在支持主/备模型切换的场景下容易误导用户。
  https://github.com/HKUDS/nanobot/issues/6550

- **Issue #6557 [CLOSED] Add Sprouts Data MCP preset**（1 条评论）
  Sprouts Data 官方提交托管型 Streamable HTTP MCP 预设（企业与人脉数据检索）。属于**生态方主动接入**信号，反映第三方数据服务商开始将 NanoBot 视为分发渠道。
  https://github.com/HKUDS/nanobot/issues/6557

- **待合并 PR #6562 feat(webui): inspect file context in a live graph sidebar**（今日新开，标记 p2）
  在宽屏下提供常驻图侧栏、窄屏下提供可拖拽抽屉，可检视保留的 prompt 来源、打开文件，并回放从最近一次成功压缩到当前运行的图增长过程。是今日体量最大的前端能力提案。
  https://github.com/HKUDS/nanobot/pull/6562

---

## 5. Bug 与稳定性

按严重程度排列：

**高｜子代理绕过安全开关（已有 fix PR，已关闭）**
Issue #6554：设置 `tools.cliApps.enable: false` 后主代理正确禁用 `run_cli_app`，但子代理仍注册该工具。影响版本 nanobot-ai 0.4.0，且 `main` 分支（commit 8632940）仍复现。属**安全策略未贯穿子代理**问题，已由 PR #6561 修复。
https://github.com/HKUDS/nanobot/issues/6554

**中｜压缩状态在重试/恢复路径中丢失（已有 fix PR，已关闭）**
PR #6558 描述 Codex 压缩成功后若生成答案失败，重试使用原始续接内容，且提前停止会丢失压缩态，可能导致重复压缩。已修复。
https://github.com/HKUDS/nanobot/pull/6558

**中｜WebUI 图像设置弹窗无法关闭（已有 fix PR，已关闭）**
Issue #6555（标记 p2）：`/#/settings?section=image` 页面开启图像生成后，右上角「×」无法关闭弹窗。根因是 #6384 引入的保存门控——关闭需等待保存成功，而非法草稿无法保存。已由 PR #6560 修复。
https://github.com/HKUDS/nanobot/issues/6555

**中｜并发工具取消后运行未正确收尾（fix PR 待合并，存在冲突）**
PR #6468（p2，`conflict`，自 2026-10-26）：取消并行工具批次时，`AgentRunner` 可能在同级工具仍在清理时即结束；单个工具取消或工具钩子失败也会留下仍在运行的兄弟工具。该问题可能影响回合终结状态的一致性，已挂起多日且存在合并冲突，建议优先处理。
https://github.com/HKUDS/nanobot/pull/6468

**低｜WebUI 模型按钮状态失真（无 fix PR）**
Issue #6550，见「社区热点」。目前无对应修复 PR。
https://github.com/HKUDS/nanobot/issues/6550

---

## 6. 功能请求与路线图信号

- **托管型 MCP 预设（Issue #6557，已关闭）**：Sprouts Data 申请将托管 Streamable HTTP + API key 的 MCP 加入预设。Issue 已关闭但数据中未见对应合并 PR，是否以其他形式落地需维护者确认。
  https://github.com/HKUDS/nanobot/issues/6557

- **Telegram 自定义 Bot API 地址（PR #4919，待合并）**：为 `TelegramConfig` 增加可选 `api_base` 与额外请求头字段，支持自建 Bot API 服务器或企业网关，替代硬编码的 `https://api.telegram.org`。实现 Issue #4702，自 2026-07-14 开放至今。对**私有化/合规部署**用户价值明确，具备进入下一版本的条件。
  https://github.com/HKUDS/nanobot/pull/4919

- **动态自定义 provider（PR #2116，已关闭）**：通过 `extras` 配置免代码接入新 provider 并声明能力元数据，与「多模型/主备切换」方向一致，可能为后续模型路由能力打基础。
  https://github.com/HKUDS/nanobot/pull/2116

- **WebUI 上下文可视化（PR #6562，待合并）**：图侧栏 + 压缩过程回放，属于可观测性增强，与今日已合并的 #6553（实时用量刷新）、#6538（长任务持续执行）形成同一方向的功能簇。
  https://github.com/HKUDS/nanobot/pull/6562

- **中途用户消息优先响应（PR #4397，待合并，标记 invalid + conflict）**：中文提案，主张在工具链执行期间插入独立 user 消息，迫使 LLM 中断工具调用优先响应用户。诉求合理但状态标记为 invalid，短期纳入可能性低。
  https://github.com/HKUDS/nanobot/pull/4397

---

## 7. 用户反馈摘要

基于今日 Issues 评论与描述可提炼：

- **状态可信度是核心痛点**：用户期望 UI 呈现与运行时真实状态一致（Issue #6550 的模型按钮、#6559 的 MCP Ready 状态），当前多处显示「配置值」而非「实际值」，在主备模型、插件切换等动态场景下尤为明显。
- **配置语义需贯穿全局**：`cliApps.enable: false` 这类显式关闭意图被子代理忽略（#6554），用户对「关闭即关闭」的一致性与安全性有明确预期。
- **弹窗/设置交互的健壮性不足**：配置未完成即进入的功能入口可能造成无法退出的模态死锁（#6555），影响首次使用体验。
- **长任务需要过程可见**：由 #6553、#6538、#6562 集中出现可推断，用户在高耗时 Agent 任务中强烈需要实时进度与上下文用量反馈，而非仅等待最终结果。
- **生态接入意愿明确**：第三方数据服务商主动提交 MCP 预设（#6557），说明 NanoBot 的 MCP 扩展面已具备外部吸引力。
- **维护响应获得正向印证**：今日 3 条 Issue 全部在同日关闭并附带修复 PR，反映出维护者对用户报障的高响应度（评论中未包含直接满意度表述，此判断仅基于关闭时效）。

---

## 8. 待处理积压

以下 PR 长期开放且带冲突/无效标记，建议维护者明确处置（推进、重基或关闭）：

- **PR #2116**（2026-03-16 创建，约 7.5 个月，`conflict`）——动态 provider extras 配置。今日已关闭，此处仅作历史积压记录。
  https://github.com/HKUDS/nanobot/pull/2116

- **PR #4397**（2026-06-18 创建，约 4.5 个月，`invalid` + `conflict`）——中途用户消息优先响应。状态标记与提案价值不匹配，建议给出明确结论。
  https://github.com/HKUDS/nanobot/pull/4397

- **PR #4919**（2026-07-14 创建，约 3.5 个月，p2）——Telegram 自定义 Bot API 地址。无冲突标记但长期未合并，是私有化部署用户的实际阻塞项。
  https://github.com/HKUDS/nanobot/pull/4919

- **PR #5946**（2026-09-28 创建，`conflict`）与 **PR #6262**（2026-10-16 创建，p2，`conflict`）——两者解决同一问题（在多工具执行批次边界持久化已完成工具结果，#6262 声称 Closes #5747），属**重复方案竞争**。建议择一推进并关闭另一条，避免持续合并冲突。
  https://github.com/HKUDS/nanobot/pull/5946
  https://github.com/HKUDS/nanobot/pull/6262

- **PR #6468**（2026-10-26 创建，p2，`conflict`）——并行工具取消后的收尾问题，属运行时正确性问题，且已开放 9 天，建议优先于纯功能类 PR 处理。
  https://github.com/HKUDS/nanobot/pull/6468

> 说明：上述时长均按数据中给出的创建日期与 2026-11-04 计算，为近似值。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-11-04

## 1. 今日速览

项目维持高强度运转：24 小时内 50 条 Issue 更新（49 条新开/活跃、仅 1 条关闭）、50 条 PR 更新（48 条待合并、2 条合并/关闭），并发布补丁版 v0.22.7，将自 v0.22.6 以来约 174 个 PR 汇总为稳定版本。表面看吞吐量很高，但结构上存在明显失衡：关闭率极低（Issue 2%、PR 4%），大批长期未合并的 PR（如 8 月中旬的 #85794、#85775）仍在滚动更新，说明"活跃"更多来自评论与维护性触碰，而非实际收敛。P1 级会话状态问题 #136160 与 P2 级桌面端转录错乱（#137287、#121096）持续活跃，会话/流式状态管理仍是最大的质量风险区。用户诉求高度集中在统一网关稳定性、桌面端 UI 可靠性与多端扩展（移动端、控制台 UI）。**活跃度评估：高（产出活跃），健康度：中等（关闭效率偏低，积压扩大）。**

## 2. 版本发布

**v0.22.7**（Patch release，2026-11-03）

- **性质**：补丁版，将 v0.22.6 之后合并的约 174 个 PR 汇总为稳定发布，覆盖 GitHub Release（CLI 与安装器）、Microsoft Store 应用、Docker 及 Hermes Cloud。
- **完整说明**：该窗口的完整精选变更说明将随 v0.23.0 一同发布，因此本次无逐条变更清单。
- **破坏性变更**：发布说明中未提及，无法确认。
- **迁移注意事项**：发布说明中未提供，建议以 v0.23.0 的完整说明为准。数据中已出现针对 v0.22.7 的现场报告（#148719），可作为升级后的观察样例。

链接：v0.22.7 Release（仓库 Releases 页）

## 3. 项目进展

今日数据中仅显示 2 个 PR 已合并/关闭，且列出的 15 个 PR 中只有以下一个明确的关闭项：

- **#148801 [CLOSED] fix(bedrock): 按 AWS 卡片为缺失模型设定上下文窗口，并标记 fallback 窗口** —— 为未收录于 Bedrock 上下文表的模型（如 GPT-6.1 Terra、GPT-5.4）补全真实窗口，并在所有展示位置把仅使用默认值的窗口标注为 `fallback`，提升多供应商模型配置的透明度。链接：NousResearch/hermes-agent PR #148801

同日重大进展主要体现在"接近合并"的高质量修复上（均仍为 OPEN）：

- **#148874** VS Code 终端在启用图像支持时渲染全分辨率图片（已过 CI 评审）。链接：#148874
- **#149008** 网关恢复读回重试，避免已提交回复被丢弃。链接：#149008
- **#148960** cron 保护退化投递输出并遵守单任务运行上限，对应"失控重复消息"事故形态。链接：#148960

**整体推进度评价**：实质合并量低（1 个已确认关闭 PR），但合并候选池质量在提升，多个修复直指已知事故形态。项目向前推进的力度集中在"止血"而非"新能力交付"。

## 4. 社区热点

| 条目 | 评论 | 👍 | 状态 |
|---|---|---|---|
| **#24770** 原生多供应商记忆路由（单供应商限制） | 302 | 2 | OPEN, wontfix |
| **#143547** 统一网关（#106742）合并后遗留问题追踪 | 47 | 1 | OPEN |
| **#11911** 原生移动端 App（iOS/Android）含语音通话 | 21 | 15 | OPEN |
| #137287 桌面端转录重复/乱序/丢消息 | 9 | 0 | OPEN |
| #95074 Bot Mode `message_agent` 双回复路径 | 8 | 2 | CLOSED |

- **#24770** 是今日绝对热点，302 条评论显示围绕"单外部供应商限制是有意设计还是临时权宜"已形成长期拉锯；维护者此前已在 #17119 明确该限制为"有意为之，非过渡方案"，但社区仍在持续要求原生多供应商记忆路由。**诉求本质**：跨供应商记忆可移植性与成本/隐私分域。
- **#143547** 反映统一网关合并（10 月 14 日）把 CLI、TUI、桌面、API、编辑器、消息机器人、cron、看板等全部纳入单一进程后，出现的跨子系统后遗症——这是当前架构层面最需要盯的追踪单。
- **#11911** 以 15 个 👍 成为点赞最高的诉求，且今日 #147556 报告官方 iOS TestFlight 邀请返回"Beta Not Found"，说明移动端已进入测试阶段但入口失效，用户期待与实际可用性存在落差。

链接：#24770 / #143547 / #11911 / #137287 / #95074

## 5. Bug 与稳定性

**P1**
- **#136160** 中断回合的部分助手文本未持久化进会话转录（`state.db`）。涉及 `sweeper:risk-session-state`、`sweeper:risk-message-delivery`。**未见对应 fix PR**。链接：#136160

**P2（会话/流式状态，同类风险集中）**
- **#137287** 桌面端转录随机重复、散乱乱序、丢消息（`needs-repro`）。同日有相关 PR **#147413**（重开时丢弃已完成回合的 journal 而非重放），可视为部分方向上的修复。链接：#137287 / #147413
- **#121096** 桌面端切换会话渲染陈旧助手片段（重复块 + 顺序错乱）。链接：#121096
- **#144116** 上游"Clean EOF"流中断被误标为输出截断，残留 stub 消息使会话陷入重放死循环。链接：#144116
- **#145499** 删除本地会话后遗留 `gateway.local_policy.v1:<sid>` 回执，每次恢复都误报"stored identity mismatch"。链接：#145499
- **#148742** 旧版 `state.db`（无 INTEGER PRIMARY KEY）升级后累积 NULL-id 行，压缩时 `int(None)` 失败、`attempts_exhausted`。链接：#148742
- **#129884** 一个 Telegram bot 的重启标记压制另一个 bot 的重启。链接：#129884

**P2（网关/工具/安装）**
- **#148719** 网关旧进程残留无法自动清理；附带 `hermes doctor` IPv6 诊断误判（v0.22.7, macOS）。链接：#148719
- **#122827** 桌面 SSH 运行时标记导致 `hermes pm doctor` 误报受管 Python 摘要损坏。链接：#122827
- **#147556** 官方 iOS TestFlight 邀请"Beta Not Found"（标注 `cause/upstream`）。链接：#147556

**新开（今日报告）**
- **#148958** 看板：网关属主 stall 导致 worker 以 1 退出并被计为普通崩溃，连续两次即阻塞卡片。链接：#148958

**已关闭**：#95074 Bot Mode 双回复路径（有明确结论）。链接：#95074

**小结**：今日 Bug 无明显崩溃类新增，但会话状态/流式/桌面渲染三类问题占据 P1–P2 主体，且 #136160 尚无 fix PR，应优先处理。

## 6. 功能请求与路线图信号

- **多供应商记忆路由（#24770）**：当前标记 `wontfix`，但 302 条评论的持续压力意味着该决策可能被重新审视；短期内纳入下一版本的可能性低。
- **原生移动端 App + 语音通话（#11911）**：官方已有 iOS TestFlight 链路（#147556），说明移动端已在推进，但 #11911 本身仍是功能请求，完整 App 与语音通话无对应落地 PR。
- **Agent 审计日志（#1155）**：完整记录工具调用动作，源自社区反馈，属安全/合规向需求，无对应 PR。
- **线程为中心的 Web/桌面控制台 UI（#105257）**：与今日 PR **#148153**（可选代理侧边栏、嵌套会话）方向一致，后者已 OPEN，可作为该需求的首个落地信号。
- **CLI/TUI 会话恢复选择器与斜杠补全（#143113）**：无对应 PR。
- **桌面浏览器导入浏览器配置/Cookie（#91057）**：无对应 PR。

**值得关注的新 PR 信号**：**#147293** 在 CLI/TUI 内联绘制图片、**#85794** 插件自动更新（含目录插件）、**#85775** MCP 授权卡展示将要执行的命令或访问的 URL、**#148979** 新增 sandbox-cluster（k3s 上的 gVisor 沙箱）目录插件。这些更可能出现在 v0.23.0 的完整说明中。

链接：#24770 / #11911 / #1155 / #105257 / #143113 / #91057 / #148153 / #147293 / #85794 / #85775 / #148979

## 7. 用户反馈摘要

- **单供应商限制引发长期不满**（#24770）：社区反复以"重新验证 main 分支"的方式推动决策复核，说明用户对记忆数据被锁定在单一外部供应商有真实顾虑。
- **桌面端信任受损**（#137287、#121096）：消息重复、乱序、丢失直接影响用户对会话记录的信任；此类问题反复出现且部分带 `needs-repro`，用户复现成本高。
- **自托管/本机运维痛点**（#148719、#122827、#145499）：用户实际在 macOS + launchd/SSH 场景下运行，诊断工具（`hermes doctor`、`hermes pm doctor`）误报会误导排障方向。
- **升级路径脆弱**（#148742）：从旧构建原地升级的用户遭遇数据库 schema 兼容问题，提示升级迁移需更强校验。
- **移动端期待落空**（#11911、#147556）：用户既要求完整 App，又已遇到测试入口失效。
- **正面信号**：#148801 关闭说明维护者对多供应商模型的窗口准确性有响应；#95074 关闭显示 Bot Mode 语义模糊问题得到定论。

## 8. 待处理积压

- **#85794**（2026-08-14 起，插件自动更新，`ci-reviewed`）——近 3 个月未合并。链接：#85794
- **#85775**（2026-08-14 起，MCP 授权卡，`ci-reviewed`）——同上。链接：#85775
- **#1155**（2026-03-13 起，Agent 审计日志）——最老的重要功能请求之一。链接：#1155
- **#11911**（2026-04-18 起，移动端 App）——高赞但无落地 PR。链接：#11911
- **#24770**（2026-05-13 起，多供应商记忆）——302 条评论、标记 `wontfix` 但仍在增长，建议给出正式的路线图回应以收敛讨论。链接：#24770

**维护建议**：①优先为 #136160 指定修复；②推动两个 8 月 `ci-reviewed` PR（#85794、#85775）进入合并流程，避免评审通过后长期悬置；③对 #24770 给出明确的长期定位声明，减少重复讨论消耗。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-11-04）

## 1. 今日速览

过去 24 小时项目活跃度处于**中低水平**：无新版本发布，PR 侧仅有 1 条已关闭的 stale PR，无待合并 PR；Issue 侧共 4 条更新（3 条开放/活跃、1 条关闭）。值得关注的是今日新增一条**安全类 Issue #3456**，涉及 reload 过程审批钩子（approval-hook）失效导致工具调用脱离门控，应优先评估。其余 3 条更新项均带有 `stale` 标记，说明积压问题在持续被系统/维护者清理触达，但尚未实际解决。整体看，社区输入稳定存在，但今日无实质代码合并推进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #3416 [CLOSED] [stale]**：新增 Sendblue 渠道，支持通过 iMessage/SMS 与 PicoClaw agent 对话。
  链接: sipeed/picoclaw PR #3416
  该 PR 旨在扩展消息渠道能力，让用户可通过手机短信/苹果 iMessage 与 agent 交互，附带免费账号配置、人工手机/联系人验证及模型前置条件等指南。但该 PR 带有 `stale` 标记并被关闭，**未合入主干**，因此 iMessage/SMS 渠道能力尚未进入项目。今日项目在功能层面**无实质向前推进**。

## 4. 社区热点

今日各 Issue/PR 互动量普遍很低（最高 2 条评论，👍 均为 0），不存在明显的讨论热点。相对而言：

- **Issue #3445 [CLOSED] [stale]**（2 条评论）：智能路由下轻量模型单轮空转 222 次 LLM 调用、约 9 分钟消耗约 1310 万输入 token 的事故。虽已关闭，但其暴露的**成本失控风险**是当前社区最实质的关切。
  链接: sipeed/picoclaw Issue #3445
- **Issue #3450 [OPEN] [stale]**（1 条评论）：Web UI 会话历史需要文件夹归档能力。
  链接: sipeed/picoclaw Issue #3450
- **Issue #3449 [OPEN] [stale]**（1 条评论）：缺陷报告，但摘要中仅有模板占位内容，缺少有效信息。
  链接: sipeed/picoclaw Issue #3449

背后诉求：用户关注点集中在**成本可控性（路由/熔断）**、**会话管理可用性**与**渠道扩展**三方面。

## 5. Bug 与稳定性

按严重程度排列：

1. **【高·安全】Issue #3456 [OPEN]**：reload 过程中 approval-hook 重新初始化失败时，gateway 继续运行且工具调用**不再经过审批门控**。属安全边界失效，且为今日新建、尚无 fix PR、无评论。
   链接: sipeed/picoclaw Issue #3456
2. **【中·成本/稳定性】Issue #3445 [CLOSED] [stale]**：智能路由缺少 turn 中途重判与重复调用熔断，轻量模型可空转烧掉千万级 token。已关闭，但数据中未体现修复 PR，关闭原因不明。
   链接: sipeed/picoclaw Issue #3445
3. **【低·信息不足】Issue #3449 [OPEN] [stale]**：标题仅 "[BUG]"，摘要为模板占位，无法判断实际影响；无 fix PR。
   链接: sipeed/picoclaw Issue #3449

## 6. 功能请求与路线图信号

- **Web UI 会话文件夹归档（Issue #3450）**：请求将 `GET /api/sessions` 返回的扁平 `[]sessionListItem` 列表改为可归档的文件夹结构，解决 launcher 会话历史单列表过长的问题。该需求指向明确的 API/前端改动点，**具备被纳入后续版本的技术条件**，但目前无对应 PR。
  链接: sipeed/picoclaw Issue #3450
- **Sendblue iMessage/SMS 渠道（PR #3416）**：相关能力已由社区实现但 PR 被关闭，是否以其他形式重新提交不明，暂不宜视为路线图承诺。
  链接: sipeed/picoclaw PR #3416

## 7. 用户反馈摘要

- **成本焦虑**：Issue #3445 提供了真实事故 trace（09:00:27–09:09:48，单轮 222 次调用，约 13,098,285 输入 token），反映用户在启用智能路由后对**轻量模型无进展空转**缺乏防护手段的不满。
- **长会话管理痛点**：Issue #3450 指出 Web UI 把所有会话放在一个按时间排序的扁平列表中，随使用量增长难以检索。
- **提交质量参差**：Issue #3449 仅填写了模板标题与占位符，反映部分报告者缺少有效反馈习惯，给维护者分流带来额外成本。
- **渠道扩展意愿**：PR #3416 表明有用户希望以手机原生短信/iMessage 作为 agent 入口。
- 今日无正面评价类反馈。

## 8. 待处理积压

- **Issue #3456**（2026-11-04 新建，安全类，0 评论，无 fix PR）：虽为新开，但因涉及工具调用门控失效，**建议优先响应**。
  链接: sipeed/picoclaw Issue #3456
- **Issue #3450**（2026-10-27 创建，已 8 天，`stale`，1 评论）：明确的功能需求，长期无维护者实质回应。
  链接: sipeed/picoclaw Issue #3450
- **Issue #3449**（2026-10-26 创建，已 9 天，`stale`）：信息不完整的 bug 报告，建议请求补充复现信息或关闭。
  链接: sipeed/picoclaw Issue #3449
- **PR #3416**（2026-10-05 创建，`stale` 后关闭）：若社区仍有 iMessage/SMS 渠道需求，关闭原因未在数据中体现，建议维护者明确说明以引导后续提交。
  链接: sipeed/picoclaw PR #3416

---
*说明：以上内容均基于提供的 GitHub 数据；Issue #3445 与 PR #3416 的关闭原因、以及是否存在关联修复 PR，数据中未体现。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-04

## 1. 今日速览

项目今日保持高强度开发节奏：24 小时内 PR 更新 19 条（16 条待合并、3 条已合并/关闭），Issues 更新仅 3 条，呈现"开发产出远大于问题反馈"的形态。合并侧体量有限，但关闭的 3 条 PR 中有两条直接针对长期存在的 Telegram 交互缺陷（reply 引用与 reaction 失败），属实质性修复。待合并队列中，核心团队成员 glifocat 集中提交的一组 channel/approval 加固补丁（#4147、#4156、#4168、#4171、#4192）已持续一周以上未合入，构成当前最主要的积压风险。整体活跃度高、健康度中等偏上，主要隐患是合并吞吐落后于提交速度。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 3 条 PR：

- **#3970 [CLOSED] fix(delivery): strip the agent-group suffix from reaction/edit target ids** — 修复 agent 反应与入站消息编辑时使用会话行 ID 而非平台消息 ID 的问题，是 Issue #2042（Telegram `setMessageReaction` 静默失败）的直接修复。两个问题的根因一致：内部 ID 被污染为三段的 `chat_id:msg_id:agent_group` 格式。
  链接：nanocoai/nanoclaw PR #3970 / Issue #2042
- **#4260 [CLOSED] Fix Telegram native reply quoting** — 保留复合 Telegram 回复目标并透传给 adapter 的原生第三参数，复用既有回复选择与首段规则；作者自述 focused bridge 测试 121 通过、host typecheck 通过。
  链接：nanocoai/nanoclaw PR #4260
- **#4261 [OPEN, bot] agent-images 刷新** — 将 `v2026.10.0` 的硬化镜像指向 `v2026.10.0-20261103T2105`（新 digest 前缀 `sha256:b5864b79…`），属常规供应链更新，尚待合并。
  链接：nanocoai/nanoclaw PR #4261

评估：今日实际"向前迈进"集中在 Telegram 通道的 ID 传递与回复引用两块基石性修复，对依赖 Telegram 群聊的用户是可见改善；但整体进展量相较于 16 条待合并队列偏低。

## 4. 社区热点

- **Issue #4056 [OPEN] 重启后 outbound.db-journal 永久滞留** — 1 条评论、1 个 👍，是今日唯一有互动量的 Issue。诉求明确：主机或 VM 在容器写入 `outbound.db` 中途宕机后，无人以读写方式重新打开该 DB，导致只读轮询每 tick 都失败且永不恢复。
  链接：nanocoai/nanoclaw Issue #4056
- **PR 集群 #4147 / #4156 / #4168 / #4171 / #4192** — 均由 glifocat 提交，同属 approval card 与 channel 发送路径的加固，更新时间集中在 11-04，是今日 PR 侧最集中的讨论面。背后诉求是审批卡片"要么完整展示、要么在 host 确认后再变更状态"，以及单条通道发送卡住不应拖垮整个 session。
  链接：PR #4147、PR #4156、PR #4168、PR #4171、PR #4192

注：数据中所有 PR 的评论数字段均为 `undefined`，无法按评论数判断真实热度，以上依据更新时间密度与标签推定。

## 5. Bug 与稳定性

按严重程度排序：

**高 — Issue #4056：outbound.db-journal 滞留导致只读轮询永久失败**
影响跨主机重启后的会话恢复；问题长期存在（创建于 2026-10-08，已近一个月）。已有修复 PR **#4264**（fix(sweep): clear a stranded outbound journal so the session can wake again），同日由 Issue 作者 drsmk238 提交，逻辑是让 sweep 清理残留 journal。状态：已开 PR，未合并。
链接：Issue #4056 / PR #4264

**高 — Issue #4258：OneCLI 单次慢健康探测终止所有运行中会话**
`probeHealth` 在首次 `/v1/health` 失败（5 秒超时）即判定网关不可用。受影响版本 2026.10.1-rc.2，main 分支（8797ad37）代码未变。已有修复 PR **#4263**，改为连续 3 次探测失败后才结束会话。状态：已开 PR，未合并。
链接：Issue #4258 / PR #4263

**中 — PR #4262：XML 实体未解码即投递**
入站消息经 `escapeXml` 后交模型，导致回声内容把实体转义原样带回聊天窗口。已有 fix PR。
链接：PR #4262

**已关闭 — Issue #2042：Telegram 群聊 `add_reaction` 静默失败**
工具返回成功但无反应出现，根因为三段式 platformId。已由 #3970 关闭。
链接：Issue #2042 / PR #3970

## 6. 功能请求与路线图信号

- **Proton Mail 原生通道（PR #3726）** — 通过 `/add-proton-mail` skill，以 Docker 内从源码构建的 Proton Mail Bridge 接入（arm64 与 x86）。作者自述经评审后本 PR 仅保留 skill，adapter 与测试另议。创建已近两个月，若合并将拓宽通道矩阵，但属大型外部集成，短期内纳入正式版本的概率低于同批修复类 PR。
  链接：PR #3726
- **Mattermost 启动重试（PR #4265）** — 服务器或前置代理短暂不可用时，让 Mattermost 复用 host 的 setup 重试；现状是 registry 仅对 `Network…` 类错误重试。属通道健壮性补齐，并入下一版本的可能性较高。
  链接：PR #4265
- 今日数据中无新增独立 Issue 形式的功能请求，需求信号主要来自 PR。

## 7. 用户反馈摘要

- **会话"假死"是最集中的痛点**：#4056 与 #4258 从不同根因指向同一体验——一次异常就让 session 永久或长时间卡住，且需人工重启才能恢复（#4056 需新容器拉起，#4258 需重启进程）。用户对"静默失败"尤其敏感（#2042 亦是"返回成功但无效果"）。
- **平台适配细节破坏体验**：Telegram 的回复引用与 reaction 都因内部复合 ID 处理不当而失效，集中在群聊场景（#2042、#4260）。
- **部署环境多样性带来稳定性差异**：#4258 报告来自 Linux / Raspberry Pi 环境，提示低性能设备上健康探测超时更易触发。
- 今日 Issues 评论量极低（#4056 仅 1 条，其余为 0），无法提炼更细的正/负面评价；未发现明确表达满意度的反馈。

## 8. 待处理积压

- **PR #3726（Proton Mail 适配器 skill）** — 创建于 2026-09-06，近两个月未合入，需明确是"等 adapter 补齐"还是"先落 skill"。
  链接：nanocoai/nanoclaw PR #3726
- **PR #3970 虽已于今日关闭，但同根因链路需确认闭环**——建议核对 Issue #2042 关闭后 Telegram 反应在群聊中的实际表现，避免只修 ID 未验端到端。
- **glifocat 的加固 PR 队列已积压 1–2 周**：#4147（创建 10-19）、#4156（10-20）、#4168 / #4171（10-21）、#4192（10-22）、#4213（10-23）。这批 PR 相互关联（approval 卡片 + channel 发送超时 + provider-auth 后重启 host），建议维护者成组评审以免长期腐烂冲突。
  链接：PR #4147、PR #4156、PR #4168、PR #4171、PR #4192、PR #4213
- **Issue #4056 已开放近一个月**，虽有 #4264 跟进，仍需维护者给出合并时间预期，避免同样被搁置。
  链接：Issue #4056

---
**健康度小结**：提交端活跃、修复端质量尚可（bug 报告基本都伴随同日或同周的 fix PR，属正向信号），但合并侧吞吐不足，16 条待合并对一个小团队而言压力明显。建议优先清空 glifocat 的关联 PR 组与两条高危 bug 的修复 PR。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-11-04

> 数据来源：nearai/ironclaw GitHub 公开数据（过去 24 小时窗口）。以下内容仅基于所提供数据，未作外部补充。

## 1. 今日速览

今日 IronClaw 处于低活跃状态：过去 24 小时无 Issues 更新、无新版本发布，仅有 2 条依赖类 PR 处于待合并状态。两条 PR 均由 dependabot[bot] 提交，分别是 Rust 侧 `zip` 依赖大版本升级与文档目录下 JavaScript 依赖批量更新。今日无任何已合并/关闭的 PR，也没有对应 Issue 或版本发布记录，因此尚无代码变更进入主干。从健康度看，项目今日没有报告 Bug 或回归，但功能性推进为零，维护者需关注待合并的依赖 PR（尤其是跨主版本升级）的评审与合并节奏。

## 2. 版本发布

今日无新版本发布，该部分省略。

## 3. 项目进展

今日无已合并/关闭的 PR，主干代码未取得功能性推进。待合并 PR 情况如下：

- **PR #8168** [OPEN] `chore(deps): bump zip from 8.6.0 to 9.0.5`（标签：dependencies, rust）
  链接：nearai/ironclaw PR #8168
  说明：将 Rust 依赖 `zip` 从 8.6.0 升级至 9.0.5，属跨主版本升级，PR 摘要包含上游 v9.0.5 的发布说明（内容截断）。
- **PR #8167** [OPEN] `chore(deps): bump zod, @remotion/cli and @remotion/tailwind-v4 in /docs/internal/architecture-video`（标签：dependencies, javascript）
  链接：nearai/ironclaw PR #8167
  说明：文档目录 `/docs/internal/architecture-video` 下的 JS 依赖更新，`zod` 升级至 4.6.7，并同步更新祖先依赖 `zod`、`@remotion/cli`、`@remotion/tailwind-v4`。

## 4. 社区热点

今日无 Issues 更新，两条 PR 的评论数与点赞数均为 0（评论字段为 `undefined`），不存在讨论热度。综合来看，社区今日无互动热点。

## 5. Bug 与稳定性

今日未报告任何 Bug、崩溃或回归问题（Issues 更新 0 条）。需人工关注的风险点：

- **PR #8168（建议重点评审）**：`zip` 由 8.6.0 → 9.0.5 为跨主版本跳跃，上游发布说明中可能包含 API 变更，建议维护者在合并前确认调用方兼容性。该信息依据 PR 摘要标注的主版本跳跃，上游具体变更内容在所给数据中被截断，无法进一步确认。

## 6. 功能请求与路线图信号

今日无用户提出的功能需求（Issues 0 条），亦无功能性 PR。结合现有 PR 无法推断任何下一版本的功能纳入信号。

## 7. 用户反馈摘要

今日无 Issues 评论数据，无法提炼用户痛点、使用场景或满意度信息。该部分无内容。

## 8. 待处理积压

基于所给数据无法判断 PR 的历史等待时长，但仍需提醒维护者关注以下两条待合并依赖 PR：

- **PR #8168**（创建 2026-11-04，当日新建，待合并）
  链接：nearai/ironclaw PR #8168
- **PR #8167**（创建 2026-11-03，已跨日仍待合并）
  链接：nearai/ironclaw PR #8167

说明：数据未提供更早的 Issue/PR 列表，因此无法识别长期未响应的积压项。

---
**健康度小结**：今日项目无 Bug、无版本变动，活跃度低；主要待办为 2 条自动依赖 PR，其中 `zip` 主版本升级需重点评审。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-11-04

## 1. 今日速览

今日项目无新版本发布，Issues 通道零更新（0 新开/活跃/关闭），社区讨论侧处于静默期。活跃度全部集中在代码侧：24 小时内 16 条 PR 更新，其中 13 条合并/关闭、3 条仍待合并，由少数核心贡献者（fisherdaddy、alison-xx、btc69m979y-dotcom）驱动。本轮合入重点集中在**启动性能优化**（skill 白名单化、数据库完整性检查、历史压缩）与**媒体/子智能体能力修复**，同时也清理了两条自 2026-09-20 起挂起约 6 周的 stale PR。整体判断：项目健康度良好、交付节奏稳定，但“0 Issue 交互”意味着用户侧反馈渠道本日未产生可观测信号，需持续观察是否为异常静默。

## 2. 版本发布

本日无新版本发布。

## 3. 项目进展

今日合并/关闭的 13 条 PR 可分为三条推进主线：

**启动与运行时性能（最集中的收益）**
- [#2996](https://github.com/netease-youdao/LobsterAI/pull/2996) perf(openclaw): ship only allowlisted bundled skills — 针对 Windows 上 OpenClaw gateway 从 `starting channels and sidecars` 到 `ready` 耗时 6–7s 的问题；CPU profile 显示约 75% 花在同步 `fs.access`，原因是每次启动都会检查 runtime 自带的 51 个 skill 与 4 个 custodian skill。改为仅加载白名单内的 bundled skills。
- [#2990](https://github.com/netease-youdao/LobsterAI/pull/2990) fix(openclaw): skip integrity checks for cleanly closed agent databases — 大型 profile 启动慢，因 OpenClaw v2026.8.1 每次打开物理 agent 数据库都跑全文件 `PRAGMA integrity_check`；引入“干净关闭”标记以跳过检查。
- [#2988](https://github.com/netease-youdao/LobsterAI/pull/2988) fix(openclaw): compact byte-bounded history instead of sliding it — 修复上下文按字节滑动截断导致的高额计费问题（详见第 5 节）。

**媒体生成与子智能体**
- [#2994](https://github.com/netease-youdao/LobsterAI/pull/2994) / [#2993](https://github.com/netease-youdao/LobsterAI/pull/2993) fix(media): let visible subagents generate images — 主智能体通过 `sessions_spawn`（visible 模式）委派图像任务时，子会话运行在 `agent:<id>:dashboard:<uuid>` 下，`lobsterai_image_generate` 因“Media tool has no authenticate...”而全部失败。两条 PR 为同一问题的平行提交。
- [#2995](https://github.com/netease-youdao/LobsterAI/pull/2995) feat(media): let one confirmation approve the rest of a turn's images — 当图像模型为系统默认时，一轮内首张图免确认、后续每张都要确认，16 张图任务需点击 15 次，且卡片等待会阻塞智能体。

**桌面端交互与稳定性**
- [#2992](https://github.com/netease-youdao/LobsterAI/pull/2992) fix(desktop-companion): show selections the hook skips in AppKit apps — 修复 macOS 划词悬浮窗时有时无（备忘录中重复划同一词 10 次仅出 1 次）。
- [#2991](https://github.com/netease-youdao/LobsterAI/pull/2991) fix(account): open account menu without waiting on daily check-in — 侧边栏“我的”按钮点击卡顿，因其在打开菜单前串行 await 两个无缓存、无超时的签到请求。
- [#2982](https://github.com/netease-youdao/LobsterAI/pull/2982) fix(cowork): recover oversized context and show compaction progress — 长输入超出模型窗口后，自动压缩请求本身也可能超限导致任务中断；改为端侧分段缩小并逐段更新摘要，已同步 `release/2026.11.2`（`dab403e8`）。
- [#2989](https://github.com/netease-youdao/LobsterAI/pull/2989) feat(dsh): bump DeepSeek Harness runtime to 0.2.1-rc.5 — 捆绑运行时从 0.1.5-rc.3 升级，并修复 dsh 0.2 引入的集成问题；覆盖 mac-arm64、mac-x64、win-x64。

**集中清理的 stale PR**
- [#2721](https://github.com/netease-youdao/LobsterAI/pull/2721) fix(openclaw): apply IM configuration without restarting the gateway — 保存 IM 配置不再强制整网关重启，避免打断无关工作与配置监听竞态。
- [#2726](https://github.com/netease-youdao/LobsterAI/pull/2726) feat: add digital employees, expert teams and capability markets — 引入能力市场工作流：发现技能、创建数字员工、安装专家团队、浏览专家套件与工具插件、配置 MCP 工具暴露。

**推进幅度评估**：今日合并量（13 条）在单日尺度上属高位，但收益以“性能与稳定性修复”为主，功能面新增主要集中在两条 stale PR 的落地（能力市场、IM 热配置）。启动链路连续三项优化（#2996、#2990、#2988）叠加，对 Windows 与大 profile 用户的首次可用时间与 token 成本有直接改善。

## 4. 社区热点

今日 16 条 PR 的评论数字段均为 `undefined`，无 👍 反应数据，因此**不存在可量化的讨论热度**。从提交内容看，最值得关注的是同一问题的复现频次：

- **性能类话题最集中**：[#2996](https://github.com/netease-youdao/LobsterAI/pull/2996)、[#2990](https://github.com/netease-youdao/LobsterAI/pull/2990)、[#2988](https://github.com/netease-youdao/LobsterAI/pull/2988) 三条均由 fisherdaddy 在同日提交并关闭，覆盖启动耗时、数据库打开、上下文计费三个不同瓶颈，反映维护方已系统性地对 OpenClaw 运行时做性能审计。
- **媒体工具鉴权是重复出现的痛点**：[#2993](https://github.com/netease-youdao/LobsterAI/pull/2993) 与 [#2994](https://github.com/netease-youdao/LobsterAI/pull/2994) 描述完全相同的 `sessions_spawn` 子会话鉴权失败，说明该路径在可见子智能体场景下长期未被覆盖。

**诉求分析**：当前提交者高度集中于少数作者，缺乏外部社区参与信号；建议维护方在合并性能类 PR 时补充基准数据（启动耗时前后对比、token 消耗对比），以便将内部优化转化为可对外沟通的可信指标。

## 5. Bug 与稳定性

按影响严重程度排序（均已附 fix PR）：

| 严重度 | 问题 | 影响 | Fix PR |
|---|---|---|---|
| **高（成本）** | 上下文历史按字节滑动截断，导致单条消息计费约 60–130 credits，用户 8,000+ credits 一夜降至约 800；涉及微信 DM 会话（DeepSeek-V4.1-Flash，1M 窗口） | 直接资金损失 | [#2988](https://github.com/netease-youdao/LobsterAI/pull/2988) 已关闭 |
| **高（功能中断）** | visible 子智能体调用 `lobsterai_image_generate` 全部失败（Media tool 无鉴权） | 委派式图像任务完全不可用 | [#2993](https://github.com/netease-youdao/LobsterAI/pull/2993)、[#2994](https://github.com/netease-youdao/LobsterAI/pull/2994) 已关闭 |
| **中（任务中断）** | 长输入超出模型窗口后，自动压缩请求自身超限，任务无法继续 | 长上下文任务卡死 | [#2982](https://github.com/netease-youdao/LobsterAI/pull/2982) 已关闭 |
| **中（性能）** | Windows 上 OpenClaw gateway 启动 6–7s，约 75% 耗在同步 `fs.access` | 启动体验差 | [#2996](https://github.com/netease-youdao/LobsterAI/pull/2996) 已关闭 |
| **中（性能）** | 大型 profile 启动因每次打开数据库执行全文件 `PRAGMA integrity_check` 而变慢；退出时网关未干净关闭加剧问题 | 启动延迟 | [#2990](https://github.com/netease-youdao/LobsterAI/pull/2990) 已关闭 |
| **低（交互）** | macOS 划词悬浮窗在 AppKit 应用（如备忘录）中时有时无，重复划同一词命中率约 1/10 | 桌面助手可用性 | [#2992](https://github.com/netease-youdao/LobsterAI/pull/2992) 已关闭 |
| **低（交互）** | 侧边栏“我的”点击卡顿（同步等待两次串行签到请求） | 感知延迟 | [#2991](https://github.com/netease-youdao/LobsterAI/pull/2991) 已关闭 |

注意：本日 Issues 数为 0，以上 Bug 均从 PR 描述中还原，用户侧原始报告无法在本次数据中核验。

## 6. 功能请求与路线图信号

本日无 Issue 形态的功能请求，路线图信号来自 PR 内容：

- **能力市场 / 数字员工 / 专家团队**（[#2726](https://github.com/netease-youdao/LobsterAI/pull/2726)，已关闭）：涵盖技能发现、数字员工创建、专家团队安装、专家套件与工具插件浏览、MCP 工具暴露配置，是一整套产品化能力。该 PR 自 2026-09-20 挂起至今日关闭，是否已进入发布分支需以 release 记录确认（本日无发布数据）。
- **模型目录与对话加载优化**（[#2790](https://github.com/netease-youdao/LobsterAI/pull/2790)，待合并）：模型按家族折叠分组、重名显示原始 route、搜索可命中组内模型，并修复历史加载卡住。属大模型目录规模化后的必要 UX，**有望纳入下一版本**。
- **媒体批准确认合并**（[#2995](https://github.com/netease-youdao/LobsterAI/pull/2995)，已关闭）：一轮内一次确认覆盖后续图像生成，直接针对多图任务的点击疲劳。
- **IM 配置热应用**（[#2721](https://github.com/netease-youdao/LobsterAI/pull/2721)，已关闭）：免重启应用 IM 配置，减少对无关任务的打断。

## 7. 用户反馈摘要

本日 Issues 评论数据为空，以下痛点均从 PR 描述中引述的用户反馈提炼：

- **成本失控最刺眼**：有用户报告 credits 从 8,000+ 一晚掉到约 800，单条微信 DM 消息计费 60–130 credits（[#2988](https://github.com/netease-youdao/LobsterAI/pull/2988)）。这是本日唯一带明确量化损失的用户场景，属信任级问题。
- **多图任务点击负担**：16 张图需 15 次确认，且等待中的卡片会阻塞智能体（[#2995](https://github.com/netease-youdao/LobsterAI/pull/2995)）。
- **桌面划词不可靠**：备忘录里重复划同一词 10 次只出 1 次，划不同词约 5/10，浏览器内表现明显更好（[#2992](https://github.com/netease-youdao/LobsterAI/pull/2992)）。
- **启动慢**：Windows gateway 启动 6–7s（[#2996](https://github.com/netease-youdao/LobsterAI/pull/2996)）；大型 profile 因完整性检查进一步拖慢（[#2990](https://github.com/netease-youdao/LobsterAI/pull/2990)）。
- **长任务易断**：超窗输入后压缩自身失败，任务无法继续，用户需要“保留输入并给出明确提示”而非静默失败（[#2982](https://github.com/netease-youdao/LobsterAI/pull/2982)）。

未观察到满意度类正向反馈数据（无评论、无 👍 计数）。

## 8. 待处理积压

3 条仍处于 OPEN 状态的 PR，均已标记 `stale`，创建于 2026-10-04，至今约一个月未合并：

- [#2790](https://github.com/netease-youdao/LobsterAI/pull/2790) feat(renderer): group model choices and improve conversation loading（area: renderer, cowork, stale）— 涉及模型目录分组与历史加载卡死修复，用户可感收益明确，建议优先评审。
- [#2791](https://github.com/netease-youdao/LobsterAI/pull/2791) fix(artifacts): ignore abbreviated paths in inferred file cards（area: renderer, stale, artifacts）— 修复 `render -o "…/demo.mp4"` 这类缩写路径被误推断为产物卡片的问题；范围小、风险低，适合快速合入。
- [#2792](https://github.com/netease-youdao/LobsterAI/pull/2792) fix(cowork): keep long question prompts and context tooltips readable（area: renderer, cowork, stale）— 长问题文本撑满 dock 标题并把选项挤到输入框下方，属布局类回归。

**提醒**：这三条均出自同一作者 alison-xx，且今日已关闭其另两条长期 stale PR（#2721、#2726），说明该批提交正在被分批处理。建议维护者明确剩余三条的取舍（合入或关闭），避免 stale 标记长期悬挂、削弱贡献者预期。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-11-04

## 1. 今日速览

- 项目今日处于**低活跃度**状态：过去24小时无 Issues 更新、无新版本发布，仅有 1 条新开 PR（#1321）。
- 唯一动态为社区贡献的功能型 PR，为 `web_search` 工具新增 Keenable 作为可选搜索提供方，属于增量能力扩展。
- 未发生任何合并、关闭或 Bug 报告，项目主线代码今日无变化。
- 维护者今日无可见响应动作；PR #1321 仍处于待合并状态，需关注后续评审进展。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，主线未发生代码推进。唯一在途 PR 如下：

- **#1321 [OPEN] feat(tools): add Keenable as a web search provider**
  https://github.com/moltis-org/moltis/pull/1321
  - 作者：ilya-bogin-keenable｜创建并更新于 2026-11-04
  - 内容：在 `[tools.web.search]` 下新增 `provider = "keenable"` 作为**可选（opt-in）**的 `web_search` 提供方。据摘要，Keenable 无需 API key，可作为不依赖 DuckDuckGo 兜底的**无密钥搜索选项**。
  - 状态：待评审/待合并。若合入，将提升搜索工具的提供方多样性与配置灵活性。

> 说明：该 PR 今日未合并，因此尚不构成已落地的项目进展。

## 4. 社区热点

今日数据中评论数与点赞数均无有效记录（PR #1321 的评论字段为 `undefined`，👍 为 0），**不存在讨论活跃的热点条目**。

可关注的唯一候选：
- #1321 https://github.com/moltis-org/moltis/pull/1321 —— 由搜索服务方（Keenable）作者提交的集成 PR，反映外部服务商主动接入 Moltis 生态的意愿；建议维护者评估其无密钥搜索定位与现有 DuckDuckGo 兜底逻辑的关系。

## 5. Bug 与稳定性

今日**无 Bug、崩溃或回归问题报告**（Issues 更新为 0）。稳定性方面无新增风险信号。

## 6. 功能请求与路线图信号

今日无用户提交的功能请求（Issues 为 0）。路线图相关信号仅来自 PR #1321：

- **无密钥 Web 搜索提供方扩展**（#1321）：该 PR 直接指向“降低搜索工具对单一兜底方案（DuckDuckGo）的依赖”。作为 opt-in 设计，合入门槛相对可控，**具备纳入下一版本的可能性**，但取决于维护者对新增第三方提供方的评审与维护成本判断。

## 7. 用户反馈摘要

今日无 Issues 评论可供提炼，**无法给出真实用户痛点、使用场景或满意度反馈**。

唯一可间接观察到的信号：PR #1321 的作者来自 Keenable，说明外部搜索服务方希望以“无 API key”方式接入 Moltis，侧面反映**免密钥/低配置门槛的搜索集成**存在外部供给动力。

## 8. 待处理积压

今日数据仅覆盖过去24小时窗口，**未提供长期未响应 Issue/PR 的清单**，无法据此判断积压情况。

可提醒维护者关注的在途项：
- #1321 https://github.com/moltis-org/moltis/pull/1321 —— 当日新开、尚无评审互动，建议尽快给出合并/修改/关闭的明确结论，避免首日 PR 进入静默积压。

---

**健康度小结**：今日数据整体平稳、无故障与负面反馈，但也**缺乏实质性推进**（0 合并、0 发布）。项目当前健康度的主要观察点集中在 PR #1321 的评审响应速度上。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-11-04

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) 过去 24 小时 GitHub 活动。注：原始数据中的 Issue/PR 链接显示为 `agentscope-ai/QwenPaw`，本报告按原样保留。

## 1. 今日速览

今日项目仍处于高强度迭代期：10 条 Issue 更新（7 条新开/活跃、3 条关闭）与 50 条 PR 更新（37 条待合并、13 条已合并/关闭），无新版本发布。Bug 类 Issue 占据当日新增主体，且集中于 2.3.0b2 前端与通道侧回归（Desktop 窗口置顶、Provider 禁用后配置残留、Matrix 插件多工作区激活），说明 beta 周期内的回归修复是当前主战场。PR 侧以 fix 为主，覆盖 Ollama 上下文长度、GBK 编码、插件依赖注册表、Desktop 自动更新渠道等细节，质量补强明显。整体健康度：活跃度高、合并吞吐可观，但 37 条待合并 PR 积压与多条跨版本遗留 Bug 需关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭的重要 PR：

- **#8575 [CLOSED] fix(desktop): 自动更新清单仅限稳定版** — 将共享的 Desktop 自动更新清单限制为 stable 与 post 版本，与浏览器端 console 的 stable-only 策略对齐；预发布安装包仍可手动获取。链接：agentscope-ai/QwenPaw PR #8575
- **#8422 [CLOSED] feat(console): 面向插件的主题 token 覆盖** — 插件此前只能通过 `chat.theme.set({ colorPrimary })` 改主色，无法表达明暗配对或 surface/border/text 等布局角色；该 PR 扩展了主题 token 覆盖能力。链接：agentscope-ai/QwenPaw PR #8422
- **#7613 [CLOSED] feat(memory): OpenViking 记忆插件** — 新增 OpenViking 记忆后端，支持自动召回、完整轮次持久化及显式 `memory_search` 工具（通过 OpenViking REST API）。链接：agentscope-ai/QwenPaw PR #7613
- Issue 侧关闭：#8278（DingTalk 超 3500 字符整条降级为纯文本，未复用 `split_text` 分片）、#8515（受限环境下 `dependency_maintenance` 锁根目录优先按 pwd home 推导、绕过 `$HOME` 导致启动崩溃）、#8460（审批消息的浏览器/OS 级通知推送需求）。链接：Issue #8278 / Issue #8515 / Issue #8460

**推进评价**：关闭的三条 Issue 分别覆盖通道降级、沙箱启动崩溃与通知体验，属于"用户可感知"的修复；合并 PR 则以基础设施与可扩展性（主题 token、记忆插件、发布渠道纪律）为主。整体是稳定性与可扩展性并行推进的一天，但尚无版本发布，成果待下一版兑现。

## 4. 社区热点

- **#7997 [OPEN] WebUI 消息撤回/编辑与工作区回滚**（评论 9，创建 2026-09-27，更新 11-04）— 当日讨论最久的 Issue。诉求是编辑/撤回已发消息时自动截断后续对话历史，并可选回滚文件快照以保证一致性。背后是用户对"对话即工作区状态"一致性的强需求。链接：agentscope-ai/QwenPaw Issue #7997
- **#8278 [CLOSED] DingTalk 长消息降级**（评论 6）— 已在今日关闭，讨论量次高，反映通道侧长消息分片是真实高频痛点。链接：agentscope-ai/QwenPaw Issue #8278
- **#8565 [OPEN] Windows 上 Hub Local runtime 无法启动**（评论 4）— AppContainer skill staging、CPU 架构缺失、反向隧道就绪超时三重问题叠加，讨论持续升温。链接：agentscope-ai/QwenPaw Issue #8565

**分析**：热点集中在"WebUI 会话状态管理"与"Windows/受限环境下的启动可靠性"两条主线，前者偏产品能力，后者偏部署稳定性，二者均非单点修补可解决。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 问题 | 是否有 fix PR |
|---|---|---|---|
| 高 | #8565 [OPEN] | Windows 上 Hub Local runtime 无法启动（AppContainer staging、缺 CPU 架构、反向隧道超时） | 部分相关：#8577（AppContainer bridge token 作为单个 argv 项）链接：Issue #8565 / PR #8577 |
| 高 | #8515 [CLOSED] | 受限环境（fnOS 沙箱）启动即崩：`state_root()` 绕过 `$HOME`，`QWENPAW_DEPENDENCY_STATE_DIR` 未文档化 | 已关闭，链接：Issue #8515 |
| 中高 | #8579 [OPEN] | 禁用 provider 后 agent run-config 残留旧模型，通道报 `ProviderError: Provider is disabled`，飞书仅显示"Internal error" | 未见直接 fix PR；#8550 为写路径范围校验，非同一问题。链接：Issue #8579 |
| 中 | #8538 [OPEN] | 多工作区启用 Matrix 时插件激活失败（10s 共享启动窗口仅覆盖第一个） | 有：#8558（简化 legacy 状态迁移与设备锁定）链接：Issue #8538 / PR #8558 |
| 中 | #8580 [OPEN] | 记忆标签索引不再重建，`/memory/tags` 返回 503，标签生成但不可读 | 未见 fix PR。链接：Issue #8580 |
| 中 | #8560 [OPEN] | 2.3.0-beta.2 Desktop 窗口被强制置顶，覆盖全屏应用 | 未见 fix PR。链接：Issue #8560 |
| 低 | #8576 [OPEN] | Console 中默认 agent 编辑按钮被禁用，但 PUT API 实际允许编辑 | 未见 fix PR。链接：Issue #8576 |
| 已修复 | #8278 [CLOSED] | DingTalk >3500 字符整条降级为纯文本，Markdown/GFM 表格失效且静默 | 已关闭。链接：Issue #8278 |

**小结**：2.3.0b2 相关回归占了当日 Bug 的近半（#8538、#8560、#8576、#8579、#8580 均涉及），建议维护者在下一 beta 前做一次集中回归排查。

## 6. 功能请求与路线图信号

- **消息撤回/编辑 + 工作区回滚（#7997）**：讨论最充分，但涉及会话截断与文件快照回滚，属于架构级改动，短期内更可能以设计讨论形式推进而非落地。链接：agentscope-ai/QwenPaw Issue #7997
- **本地模型运行时扩展（PR #8573）**：新增 Piccolo runtime 安装与模型源选择，打通现有 Install/Update 流程，与 Local 模型方向直接相关，具备进入下一版本的条件。链接：agentscope-ai/QwenPaw PR #8573
- **Cron 任务按次独立会话（PR #8557）**：解决 cron 历史在单一 per-job 会话中无限增长的问题，属可维护性改进，落地面较大。链接：agentscope-ai/QwenPaw PR #8557
- **Shell 命令可选内存保护（PR #8574）**：针对 `execute_shell_command` 进程树与沙箱输出无界捕获，带 Console 实时设置，具安全价值。链接：agentscope-ai/QwenPaw PR #8574
- **过期日记转为去重 Inbox 提醒（PR #8578）**：配合 ReMe v4 记忆，让未被处理的日记浮出水面。链接：agentscope-ai/QwenPaw PR #8578

## 7. 用户反馈摘要

- **通道体验**：DingTalk 长消息静默降级且 Agent 无法感知，用户只能"人肉记住别超 3500 字符"（#8278）；飞书在 provider 禁用后仅显示无信息量的"Internal error"（#8579）。
- **受限/自托管部署**：fnOS NAS 应用沙箱、Windows Hub Local 等非标准环境是启动故障集中区，涉及 home 目录推导、token 解析、隧道就绪等底层细节（#8515、#8565）。
- **桌面端干扰**：窗口强制置顶覆盖全屏视频/演示/游戏，属明确体验倒退（#8560）。
- **前后端权限不一致**：Console 禁用编辑按钮而 API 允许，用户感到困惑（#8576）。
- **记忆子系统**：标签能生成却读不到（503），削弱了用户对自动记忆的信任（#8580）。

## 8. 待处理积压

- **#7997**（创建 2026-09-27，持续近 6 周，9 条评论仍未定论）链接：agentscope-ai/QwenPaw Issue #7997
- **#8234**（创建 2026-10-14，Under Review，size/XXL）GBK/CP936 解码修复，影响中文 Windows 用户读写笔记链接：agentscope-ai/QwenPaw PR #8234
- **#8236**（创建 2026-10-14，Under Review）Ollama 按 `num_ctx` 推算上下文窗口，替代 128k 默认值链接：agentscope-ai/QwenPaw PR #8236
- **#8034**（创建 2026-09-29，Under Review，size/XXL）按请求而非按文件限制内联媒体体积，防止 token 驱逐失效链接：agentscope-ai/QwenPaw PR #8034
- **#8308**（创建 2026-10-18）缺失 provider 查询返回 404 的测试修正链接：agentscope-ai/QwenPaw PR #8308

**提醒**：上述 PR 均为 7 天以上、Under Review 或未审状态，其中 #8234、#8236 同属一位贡献者对中文 Windows / 本地模型场景的系统性修复，建议优先分配评审资源，避免外部贡献者流失。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-11-04

## 1. 今日速览

今日项目活跃度较低，仅有一条新 Issue 和一条配套 PR，且均来自同一位社区贡献者（MarchBeta2087）。动态集中在文档准确性问题上：README 仍记录已被移除的 `--stream` 参数，导致用户按文档操作时报错。该用户随即提交了修复文档的 PR（#723）。无新版本发布，无 PR 合并或关闭，项目今日在代码层面无实质推进。整体健康度平稳，但维护者响应速度尚待观察。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目主线未发生变更。

新增待合并 PR 一条：

- **PR #723 [OPEN] Fix documentation for --no-stream option** — 作者 MarchBeta2087，创建于 2026-11-04
  https://github.com/qhkm/zeptoclaw/pull/723
  该 PR 修改 `--no-stream` 选项的文档描述，关联 Issue #722。作者在提交清单中确认从 `upstream/main` 分支创建、改动范围收敛。此 PR 尚未合并，需维护者审阅。

## 4. 社区热点

今日讨论量整体极小，无评论数集中的条目。反应最多的是：

- **Issue #722 [OPEN] [bug] Update README.md** — 获 1 个 👍，0 条评论
  https://github.com/qhkm/zeptoclaw/issues/722
  背后诉求明确：用户期望文档与 CLI 实际行为一致。该用户不仅报告问题，还主动提交修复 PR，说明其有较强参与意愿，是潜在的高价值贡献者。

## 5. Bug 与稳定性

- **【中】README 文档与 CLI 实际行为不一致（Issue #722）**
  https://github.com/qhkm/zeptoclaw/issues/722
  用户执行 `zeptoclaw agent --stream` 时报错，推断 `--stream` 参数已被移除，但 README 中仍保留该参数说明。属于文档滞后导致的可用性问题，非运行时崩溃或回归。
  **修复状态**：已有配套 PR #723（待合并），但注意该 PR 标题指向 `--no-stream` 选项，与 Issue 中报告的 `--stream` 是否完全对应需维护者核对。

## 6. 功能请求与路线图信号

今日无新功能请求。Issue #722 与 PR #723 均属文档修正，不涉及功能路线图。当前无证据表明有需求会被纳入下一版本。

## 7. 用户反馈摘要

- **痛点**：文档未跟随 CLI 参数变更同步更新，用户按官方文档执行命令即报错，增加上手成本与困惑（Issue #722）。
- **使用场景**：用户在本地桌面环境通过 `zeptoclaw agent` 调用智能体，尝试使用流式输出相关参数。
- **态度**：用户未表达强烈不满，而是以建设性方式报告问题并主动提交修复，社区氛围偏正向。

## 8. 待处理积压

本日数据仅覆盖最近 24 小时，未提供历史积压信息，故无法基于现有材料识别长期未响应的重要 Issue 或 PR。建议维护者优先处理当前两项待办：

- Issue #722（待确认与关闭）https://github.com/qhkm/zeptoclaw/issues/722
- PR #723（待审阅与合并）https://github.com/qhkm/zeptoclaw/pull/723

> 说明：本报告严格基于所提供的 GitHub 数据生成，未包含数据中未出现的版本、指标或历史记录。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-04

## 1. 今日速览

项目今日维持高速运转：过去 24 小时 18 条 Issue 更新（10 条新开/活跃、8 条关闭），50 条 PR 更新（48 条待合并、2 条已合并/关闭），无新版本发布。关闭的 Issue 多为 v0.9.0 里程碑内的安全与运行时缺陷（委托记忆越权、配置 schema 迁移、TLS WebSocket 升级失败、Docker 构建失败），显示 v0.9.0 收尾工作正在推进。PR 队列依然庞大，且大量集中在通道（channels）、会话历史、安全策略三个方向，说明下一阶段的开发重心。活跃度评估：**高**；但合并吞吐（2/50）与积压规模之间存在明显失衡，需关注评审瓶颈。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭记录中未提供单条 PR 的合并明细（数据仅列 2 条已合并/关闭 PR，未给出编号），因此以已关闭 Issue 作为推进信号：

- **[#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) 已关闭 — 委托记忆工具丢失 principal 作用域**（S0，安全/数据丢失，v0.9.0）。代理式 delegate 构造替代记忆工具时未继承 owner 私有平面，属高危身份隔离缺陷，现已关闭，是今日最重要的安全推进。
- **[#11961](https://github.com/zeroclaw-labs/zeroclaw/issues/11961) 已关闭 — Dashboard OIDC 登录**（v0.9.0）。为 Web 控制台增加可选 OIDC 登录，默认关闭、不影响原有配对方式。
- **[#11951](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) 已关闭 — 内置 TLS 监听下 WebSocket 升级失败**。
- **[#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) 已关闭 — `save_dirty` 在未迁移 V1/V2 配置上写入 `schema_version = 3`，导致下次加载跳过迁移、agent 消失**。
- **[#12210](https://github.com/zeroclaw-labs/zeroclaw/issues/12210) 已关闭 — Docker 源码镜像构建在依赖预取阶段失败**（S1，阻塞 CI/发布工作流）。
- 另有关闭：[#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126)（撤销管理员所有权绕过）、[#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)（ZeroCode `ask_user` 无回复超时）、[#12218](https://github.com/zeroclaw-labs/zeroclaw/issues/12218)（Windows Clippy 检测器超时）。

整体判断：今日关闭集中在**安全加固（identity-access 主题）+ v0.9.0 阻塞项**，项目在发布稳定性方向上明显前进一步；但 48 条待合并 PR 表明功能侧推进尚未转化为合入。

---

## 4. 社区热点

按评论数排序：

1. **[#6437 Zulip 通道（long-poll 事件 MVP）](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)** — 5 条评论，OPEN。自托管 Zulip 用户希望在 stream（含 topic 线程）与 DM 中与 agent 对话。值得注意的是，[PR #12230](https://github.com/zeroclaw-labs/zeroclaw/pull/12230) 已于今日提出原生 Zulip 通道实现（事件队列长轮询入站、REST 出站），说明需求已进入实现阶段。诉求本质：**企业内自托管 IM 接入**。
2. **[#11198 委托记忆工具丢失 principal 作用域](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)** — 5 条评论，已关闭。S0 级安全缺陷，社区关注度高。
3. **[#11126 队列会话操作保留已撤销管理员所有权绕过](https://github.com/zeroclaw-labs/zeroclaw/issues/11126)** — 3 条评论，已关闭。反映身份/权限模型在多路径下的收敛难度。
4. **[#9572 debug gateway WebSocket 回合溢出默认 Tokio worker 栈](https://github.com/zeroclaw-labs/zeroclaw/issues/9572)** — 2 条评论，OPEN。自 2026-07-31 创建，仍在讨论。
5. **[#12109 多插件仓库](https://github.com/zeroclaw-labs/zeroclaw/issues/12109)** — 2 条评论，OPEN。当前 `ZEROCLAW_PLUGIN_REGISTRY_URL` 仅支持单一仓库，用户希望支持逗号分隔的多个 registry URL。

其他同日开启、评论较少但值得注意的新议题见下文第 6、8 节。

---

## 5. Bug 与稳定性

按严重程度排列（今日数据中出现的问题）：

**S0 / 高危（已关闭）**
- [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) 委托记忆工具丢失 principal 作用域（数据丢失/安全风险）。已关闭，未见对应 fix PR 编号。
- [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) FAQ 所述：队列会话操作保留已撤销管理员所有权绕过（P1，security:policy）。已关闭；#10412 被描述为该问题的部分实现。

**S1 / 工作流阻塞（已关闭）**
- [#12210](https://github.com/zeroclaw-labs/zeroclaw/issues/12210) Docker 源码镜像构建失败（`Dockerfile`、`Dockerfile.debian`、`Dockerfile.alpine`）。

**S2 / 降级行为**
- [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) **OPEN** — debug 模式下 gateway WebSocket 处理 agent 回合时可间歇性中止（Tokio worker 栈溢出）。**未见 fix PR**。自 7 月末积压至今。
- [#11951](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) **已关闭** — 内置 TLS 监听下所有 HTTP/1.1 upgrade 失败（返回 101 后断开）。
- [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) **已关闭** — ZeroCode 丢弃待处理的 `ask_user` 提示，工具 600 秒超时且问题无记录。
- [#12228](https://github.com/zeroclaw-labs/zeroclaw/issues/12228) **OPEN（新）** — `cron update --agent` 报告成功但从不真正改派任务 agent。**未见 fix PR**。⚠ 静默失败语义，建议优先。
- [#12227](https://github.com/zeroclaw-labs/zeroclaw/issues/12227) **OPEN（新）** — shell 审批取决于模型自己写入的 `approved` 值，导致审批提示出现不一致。涉及安全语义，需评估是否构成绕过面。**未见 fix PR**。
- [#12225](https://github.com/zeroclaw-labs/zeroclaw/issues/12225) **OPEN（新）** — `glob_search` 从不列出工作区之外（但属允许根目录下）的文件；预检通过但匹配被丢弃。**未见 fix PR**。
- [#12218](https://github.com/zeroclaw-labs/zeroclaw/issues/12218) **已关闭** — Windows Clippy 变更检测器全历史 fetch 超时。
- [#12119](https://github.com/zeroclaw-labs/zeroclaw/issues/12119) **OPEN** — Windows 上 shell / skill / coding-CLI 超时只终止解释器进程，后代进程继续运行（Unix 端已用 `setsid` + 进程组处理，Windows 缺失对等机制）。**未见 fix PR**。

**修复 PR（待合并）**
- [PR #11203](https://github.com/zeroclaw-labs/zeroclaw/pull/11203)：畸形的 tool protocol 重试耗尽时返回 fallback 文本并被包装为 `StreamedTurnSuccess`，修复为显式失败。
- [PR #12073](https://github.com/zeroclaw-labs/zeroclaw/pull/12073)：Codex 流式解码失败后以非流式重试，但默认端点只接受流式请求——改为仍以流式重试。
- [PR #12065](https://github.com/zeroclaw-labs/zeroclaw/pull/12065)：允许列表内的 Discord 机器人可回复审批——现一律 `Rejected`。
- [PR #11934](https://github.com/zeroclaw-labs/zeroclaw/pull/11934)：恢复 cron/gateway 触发 agent 运行的 `agent_alias` 归因。
- [PR #12056](https://github.com/zeroclaw-labs/zeroclaw/pull/12056)：统一直接路径 system prompt 的 identity 段顺序。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 对应 PR | 纳入判断 |
|---|---|---|---|
| Zulip 通道 | [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | [PR #12230](https://github.com/zeroclaw-labs/zeroclaw/pull/12230)（今日提出） | **高**——已有实现 PR，且与刚合并的 Rocket.Chat 通道同形 |
| 多插件仓库 | [#12109](https://github.com/zeroclaw-labs/zeroclaw/issues/12109) | 无 | 中——改动面小，但涉及插件供应链，需设计评审 |
| 长时 shell 任务（异步/同步模式 + 交互终端） | [#11954](https://github.com/zeroclaw-labs/zeroclaw/issues/11954) | 无（与 #12119 Windows 进程树问题相关） | 中——需与 Windows 超时修复协同 |
| shell 策略拒绝给原因与补救提示 | — | [PR #11983](https://github.com/zeroclaw-labs/zeroclaw/pull/11983) | 高——提升 agent 自纠错能力，风险 medium |
| `config migrate` 显示已退役环境变量警告 | [#12221](https://github.com/zeroclaw-labs/zeroclaw/issues/12221) | 无（源自 #11218 schema V4 评审） | 高——跟随 V4 迁移工作 |
| `agy_cli`（Antigravity CLI）工具 | — | [PR #11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | 中——依赖 holding-crate 例外决议（[PR #12229](https://github.com/zeroclaw-labs/zeroclaw/pull/12229) 正在提议） |
| 语音转写 `default_provider` 回退 / mention-only 群组免提及转写 | — | [PR #12198](https://github.com/zeroclaw-labs/zeroclaw/pull/12198)、[PR #12201](https://github.com/zeroclaw-labs/zeroclaw/pull/12201) | 中——均在 `needs-author-action` 状态 |

**重大架构信号**：[PR #11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) 提出用统一的 append-only 会话事件历史替换多个 transcript writer，打满几乎全部标签（risk:high、size:XL）。这是今日队列中影响面最大的变更，值得维护者优先投入评审资源。

---

## 7. 用户反馈摘要

- **自托管与企业 IM 是主诉求**：Zulip 需求强调自托管工作区、stream + topic 线程与 DM，与 Rocket.Chat 通道形成同类需求簇。
- **权限/身份模型是最大信任缺口**：今日两条 S0/P1 安全 Issue（#11198、#11126）均集中于 principal 作用域与已撤销管理员权限在队列路径上的残留，评论区反复出现“partial implementation”这类表述，说明修复是分片推进的。
- **静默失败最伤体验**：#12228（`cron update --agent` 打印成功但不生效）、#11623（提示被静默丢弃、600 秒后超时且无记录）、#12210（构建失败）共同指向“成功报文与实际状态不一致”这一问题类别。
- **Windows 与平台的差异性处理不足**：#12119 指出 Unix 有 `setsid` + 进程组清理，Windows 无对等机制；#12218 显示 Windows CI 检测器自身超时。
- **插件生态希望多源化**：#12109 反映单 registry URL 限制了第三方插件分发。
- **模型自述状态污染审批逻辑**：#12227 指出审批依赖模型自己写的 `approved` 值，用户观察到提示时有时无——这是对安全边界可预测性的直接质疑。
- 满意度信号：数据中未包含正面评价类评论，故不作推断。

---

## 8. 待处理积压

**长期未收敛的 Issue**
- [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572)（创建 2026-07-31，P1，status:accepted，no-stale）gateway WebSocket 栈溢出，已积压约 3 个月且无 fix PR，是当前最久的 P1 稳定性问题。
- [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)（创建 2026-05-06）Zulip 通道长期处于 `status:parking-lot`，今日 PR #12230 出现，建议明确是否解除 parking-lot。

**评审瓶颈**
- [PR #11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076)（创建 2026-09-23，size:XL）`agy_cli` 工具，已滞留 6 周，且被 [PR #12229](https://github.com/zeroclaw-labs/zeroclaw/pull/12229) 的 holding-crate 例外提案阻塞。
- [PR #11203](https://github.com/zeroclaw-labs/zeroclaw/pull/11203)（创建 2026-09-27，size:XS）体积最小却滞留 5 周以上，修复的是“把 protocol 耗尽当成功返回”的正确性问题，建议优先合入。
- [PR #11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921)（创建 2026-10-21，size:XL，risk:high）会话事件历史重构，需排入专项评审窗口，避免长期悬挂。

**需作者响应**
- [PR #12197](https://github.com/zeroclaw-labs/zeroclaw/pull/12197)、[PR #12198](https://github.com/zeroclaw-labs/zeroclaw/pull/12198)、[PR #12201](https://github.com/zeroclaw-labs/zeroclaw/pull/12201) 均标记 `needs-author-action`（Telegram 回复上下文、语音转写回退），其中 #12197 为 risk:high，建议设置响应时限。

**配置/文档类小项**
- [#12221](https://github.com/zeroclaw-labs/zeroclaw/issues/12221) `config migrate` 警告缺失；[#12217](https://github.com/zeroclaw-labs/zeroclaw/issues/12217) 邮件 tools-only 文档未说明审批路由也会启动 IMAP 监听。二者均为低成本高收益项，适合新贡献者。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*