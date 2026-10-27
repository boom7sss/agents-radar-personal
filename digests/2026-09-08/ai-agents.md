# OpenClaw 生态日报 2026-09-08

> Issues: 471 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-08 10:05 UTC

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

# OpenClaw 开源项目动态日报 — 2026-09-08

> 数据来源：GitHub OpenClaw/OpenClaw | 统计窗口：过去 24 小时


## 1. 今日速览

过去 24 小时项目持续维持高活跃度：**471 条 Issue 更新**（净新开/活跃 238 条 vs 关闭 233 条，近乎平衡），**500 条 PR 更新**（待合并 279 条 vs 已合并/关闭 221 条），表明修复吞吐与问题上报大体相当。值得关注的是，**P0/P1 级稳定性问题仍密集聚集在会话状态持久化、消息丢失和升级后启动失败三个核心方向**，且大量 P1 问题带有 `needs-maintainer-review` 和 `no-new-fix-pr` 标签，说明维护者评审带宽是当前主要瓶颈。今日无新版本发布；合并/关闭的 PR 集中在 CI 基础设施修复和发布流程修正（如 #141851、#142061），核心功能推进以大 PR 形式的提案为主，尚待评审。

**项目健康度评估**：🔴 **偏紧张** —— 高严重度（P0/P1）问题存量多、涉及数据丢失与会话中断等敏感影响面；上游 PR 中有 `🚨 compatibility/security-boundary` 高合并风险标记（#141913），需严格把关。


## 2. 版本发布

过去 24 小时 **无新版本发布**。

⚠️ 注意：多个活跃 Issue 指向 2026.9.1/2026.9.2 引入的回归缺陷（详见第 5 节），在 2026.9.3 或补丁版本发布前，生产用户需谨慎评估升级风险。


## 3. 项目进展

过去 24 小时无核心功能 PR 被合并。合并/关闭的 PR 集中于工程基础设施与发布流程修复（均为今日动作）：

| PR 链接 | 内容 | 类型 |
|---|---|---|
| [#141851](https://github.com/openclaw/openclaw/pull/141851) | 修复 macOS CodeQL 扫描在 Swift 构建阶段超时的问题，确保 SARIF 上传完成 | CI 修复，**已合并** |
| [#142061](https://github.com/openclaw/openclaw/pull/142061) | 发布流程：将 corrupt-plugin 更新声明归类为 unsupported，合并 Docker 省略规则 | 发布修复，**已合并** |
| [#142099](https://github.com/openclaw/openclaw/pull/142099) | 将 Muse Spark 1.3 提供器反向移植到 2026.6.35 线（含 1.3 Contributor），新 Meta 用户默认启用 | 功能反向移植，**已关闭** |

值得关注的 **待评审高价值 PR**（公开超过 2 天，评审就绪）：

- [#139542](https://github.com/openclaw/openclaw/pull/139542) — `fix(ai): reject conflicting Responses tool-call argument snapshots`：修复 OpenAI Responses 流式中陈旧参数快照覆盖完整参数的问题。P1，`ready for maintainer look`。
- [#135917](https://github.com/openclaw/openclaw/pull/135917) — `fix: reject invalid bases before starting worktree sessions`：在启动 worktree 会话前拒绝无效 base 引用，杜绝反复 Git 错误。P2，`ready for maintainer look`。
- [#130877](https://github.com/openclaw/openclaw/pull/130877) — `fix(trajectory): bound SQLite export source bytes before parse`：防止大记录导出时 OOM 崩溃。P2，`ready for maintainer look`。

**今日新增大 PR（待评审）**：[#141913](https://github.com/openclaw/openclaw/pull/141913)（local security gateway，涉及兼容性/安全边界/可用性三重高风险）、[#142100](https://github.com/openclaw/openclaw/pull/142100)（模型选择跨重载/回退保持精确身份）、[#142095](https://github.com/openclaw/openclaw/pull/142095)（云会话操作系统选择）。上述均为 XL 级大型变更，需谨慎评审。


## 4. 社区热点

> 按评论数排序（不含 `undefined` 评论的 PR）

| Issue/PR | 评论数 | 👍 | 核心议题 |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost — no retry, no notification, no auto-restart on timeout（🦞 diamond lobster） | 26 | 2 | 子代理任务完成结果**静默丢失**，无重试/通知/超时自动重启。自 2026-03-13 创建至今仍 open，已积压近 6 个月 — 呈现强烈的社区耐性消耗。 |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) — Intermittent "Provider completed tool call with malformed JSON arguments" on v2026.8.1（claude-sonnet-5） | 18 | 0 | 升级 2026.7.1-2 → 2026.8.1 后间歇性 LLM 工具调用 JSON 解析失败，**非特定文件/工具触发** — 社区最关切的"暗雷式"回归。 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) — AgentSelectionRequiredError floods logs under explicit multi-agent ownership | 16 | 0 | 显式多代理所有权（6 个代理）下错误刷屏：日志插件、Control UI RPC、系统代理轮次均缺 agentId。 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) — Session transcript projection reconcile can livelock under sustained writes（🦞 diamond lobster） | 16 | 0 | 持续写入下会话记录投影无限重建循环，**阻塞 Node 主线程**并拖垮所有通道传输。 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) — Leaks unreaped hook/tool child processes, causing zombie accumulation | 15 | 1 | hook/tool 子进程未回收，僵尸进程累积导致运行时性能退化。 |

**趋势解读**：（1）Telegram 通道在多个高热度 Issue 中反复出现（#44925、#127229、#126246、#137927），其投递可靠性和会话恢复问题已成社区最大槽点；（2）"静默丢失/无通知"类行为偏差获得最多情绪性共鸣（👍/长篇讨论），用户对失败可观测性的要求明显上升；（3）SQLite 并发写入热点是底层架构关切（#117262 已有 👍×2）。


## 5. Bug 与稳定性

### 🔴 P0 — 服务不可用 / 数据严重受损

| Issue | 描述 | 状态 |
|---|---|---|
| [#140908](https://github.com/openclaw/openclaw/issues/140908) | `doctor --fix` / `gateway status --deep` 在 systemd --user 服务账户下 EACCES 失败，**阻塞所有升级后迁移** | 🆕 新上报，修复未开始 |
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | Windows 网关自 2026.9.1 起无法启动，`--task-supervisor` 静默退出 0 | ✅ **已关闭**（修复已合并） |

### 🟠 P1 — 高影响稳定性 / 回归

| Issue | 描述 | 是否已有 Fix PR | 积压时长 |
|---|---|---|---|
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | **2026.9.2 回归**：回复运行中到达的新消息被丢弃（"no active tool authority snapshot"） | 🔧 `fix-shape-clear`、`queueable-fix` 已标记，未见 PR | 2 天 |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite 3 个并发写句柄导致 ~33s 事件循环停顿（DEF-61） — **根源级架构缺陷** | ❌ 无 | 38 天 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理结果静默丢失（无重试/通知/重启） | ❌ 无 | **178 天** |
| [#136183](https://github.com/openclaw/openclaw/issues/136183) | 命令执行器 spawn ssh 时挂起 — SIGTERM 等待 server banner（2026.8.1 引入，8.2 未修复） | ❌ 无 | 6 天 |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | claude-sonnet-5 间歇性工具调用 malformed JSON（2026.8.1 升级回归） | ❌ 无 | 7 天 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏导致僵尸累积（回归） | ❌ 无 | 71 天 |
| [#139485](https://github.com/openclaw/openclaw/issues/139485) | 托管升级（2026.9.1 → 9.2）网关离线且 finalizer 不终止 | ❌ 无 | 3 天 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 显式多代理所有权下 AgentSelectionRequiredError 刷屏 | ❌ 无 | 20 天 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步代理持久化与记录维护阻塞 Gateway 事件循环 | 🔧 部分修复已落地（#133925/#134062），残留问题待处理 | 34 天 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话记录投影 reconcile 在持续写入下活锁 | ❌ 无 | 41 天 |

### 🟡 P1 — 消息/会话数据丢失（高影响面）

- [#127229](https://github.com/openclaw/openclaw/issues/127229) — Telegram 看门狗释放的持久更新在 tracker 稳定前被误判 tombstone（13 评论）
- [#126246](https://github.com/openclaw/openclaw/issues/126246) — Telegram 持久出站消息卡在 `send_attempt_started`，重启即丢失（6 评论）
- [#137613](https://github.com/openclaw/openclaw/issues/137613) — CLI 后端预压缩内存刷新被门控禁用（`ownsNativeCompaction`），上下文压缩前从不落盘
- [#139809](https://github.com/openclaw/openclaw/issues/139809) — Telegram 收不到 Codex 的 protected secrets 提示（`fix-shape-clear` 已标记）

### 🔵 其他值得注意

- [#133984](https://github.com/openclaw/openclaw/issues/133984)（已关闭）— 7.1-2 → 8.1 升级致 Gateway 不可启动，`doctor --fix` 无法完成配置迁移 — 该升级路径完整性仍存疑，需关注后续回归
- [#139578](https://github.com/openclaw/openclaw/issues/139578) — llama.cpp managed EmbeddingGemma 使用服务默认 ubatch 512（2026.9.2，可能 #134389 回归）
- [#137927](https://github.com/openclaw/openclaw/issues/137927)（已关闭）— 内部上下文块（`<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>`）泄漏至 Telegram 可见文本 — 安全相关，已修复


## 6. 功能请求与路线图信号

| 功能需求 | 来源 | 信号强度 |
|---|---|---|
| **多代理成本归属**（Per-Agent Bedrock requestMetadata 注入） | [#60602](https://github.com/openclaw/openclaw/issues/60602)（6 评论，👍 1，自 4 月积压） | 弱 — `needs-product-decision`，无对应活跃 PR |
| **所有者签名责任门控**（助手记忆/行动/技能须经用户显式确认方可持久化） | [#96675](https://github.com/openclaw/openclaw/issues/96675)（10 评论，👍 2） | 中 — 与 #141913 安全边界 PR 方向一致，但属不同层面 |
| **云会话操作系统选择**（当前仅可挑选机型） | 对应 PR：[#142095](https://github.com/openclaw/openclaw/pull/142095) | 强 — 今日新提交 XL 大 PR，直接实现该功能 |
| **本地安全网关加固**（工具执行需授权边界） | 对应 PR：[#141913](https://github.com/openclaw/openclaw/pull/141913) | 强 — 今日新提交，🚨 三重合并风险标记 |
| **模型选择跨重载/回退时保持精确身份**（别名与认证配置不丢失） | 对应 PR：[#142100](https://github.com/openclaw/openclaw/pull/142100)（超驰 #134496） | 强 — 今日新提交，XL 级，涉及多个扩展 |
| **audit 记录运行时技能选择/使用元数据** | 对应 PR：[#141004](https://github.com/openclaw/openclaw/pull/141004) | 中 — 昨日提交，`needs proof` |

**预判**：今日四个新增大 PR（#142095、#141913、#142100、#142094）覆盖云会话、安全边界、配置持久化、测试基建四个方向；若评审顺利，9 月中旬版本有望集成其中若干能力。


## 7. 用户反馈摘要

**最集中的痛点（跨 Issue 反复验证）：**

1. **升级即风险** — 从 2026.7.1-2 → 8.1（#135111、#133984）到 8.2 → 9.1/9.2（#137813、#139485、#139578），几乎每次 minor 升级都伴随至少一个 P0/P1 回归。用户 Lendersmark 在 #133984 中描述 "required roughly a dozen manual repair steps across five independent defects" —— 升级疲劳感显著。
2. **静默失败最伤信任** — #44925 中 "results are silently lost"；#126246 中 "Agent runs complete successfully, but Telegram replies can remain in send_attempt_started without any visible outbound"，用户对失败可见性/可观测性的诉求贯穿多个高热度 Issue。
3. **多代理编排不成熟** — #43367 用户报告并行 `agents add` 配置互相覆盖、会话锁失败、子任务脱离管理，judging "multi-agent runs unreliable in practice"。
4. **持久化层瓶颈** — SQLite 锁竞争（#117262）、压缩前不落盘（#137613）、投影活锁（#115908），表明存储层在规模下成为主要瓶颈，直接拖慢主线程。
5. **渠道碎片化** — 除 Telegram 问题群集外，飞书 @ 占位符（#48786，4 月至今未修复）、WebChat 画布重置后丢历史（#118560），第三方渠道质量参差。

**值得肯定的修复（社区反馈正面）：**
- #137813（Windows 网关无法启动）和 #137927（内部上下文泄漏）均在短时间内关闭，说明维护者对 P0 和安全问题的响应速度尚可。


## 8. 待处理积压

***

### 🚨 长期未响应 / 老龄化高严重度问题

> 下表为按"严重度 × 积压时长"加权后最值得关注的存量问题，其中 `#44925` 已积压 178 天。

| Issue | 严重度 | 积压天数 | 标签状态 | 建议 |
|---|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — 子代理完成静默丢失 | P1 | **178 天** | `needs-maintainer-review`, `needs-product-decision`, `source-repro` | 3 个阻塞标签叠加，bug 长期处于"待决策"状态。建议维护者明确给出产品决策或分派责任人 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) — 子进程泄漏/僵尸累积 | P1 | **71 天** | `bug`, `regression` | 回归类型问题，建议确认是否已纳入修复排期 |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) — SQLite 3 并发写句柄致 33s 停顿 | P1 | **38 天** | `source-repro`, `needs-maintainer-review` | 架构级缺陷，DEF-61 内部编号，需架构组介入 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) — 会话记录投影活锁 | P1 | **41 天** | `source-repro` | 可致所有通道传输 stall，建议提升优先级 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) — 同步持久化阻塞事件循环 | P1 | **34 天** | `no-new-fix-pr`, `needs-maintainer-review`, `needs-product-decision` | 部分修复已落地，需确认残余处理方案 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) — 多代理编排不稳定 | P1 | **181 天** | `needs-info` 等 5 标签 | 积压近 6 个月，多代理可靠性是 2026 年核心方向，建议产品侧明确优先级 |
| [#60602](https://github.com/openclaw/openclaw/issues/60602) — Bedrock requestMetadata 成本归属 | P2 | **157 天** | `needs-security-review`, `linked-pr-open` | 功能请求，已有链接 PR 但长期未动 |

### ⚠️ 等待作者回复（可能失活）

- [#131347](https://github.com/openclaw/openclaw/pull/131347) — `fix(telegram): cap rich message media at 20`（P1，`waiting on author`，8 月 28 日起）
- [#48786](https://github.com/openclaw/openclaw/issues/48786) — 飞书 @_user_N 占位符问题（P2，自 3 月 17 日，`linked-pr-open` + `needs-live-repro`）

### 📊 关键观察

- **高严重度积压过半**：上表 10 个 P0/P1 存量问题中，**5 个带 `needs-maintainer-review` 或 `needs-product-decision` 搁置标签** —— 问题已充分复现并等待排期决策，维护者评审带宽已是瓶颈。建议对 `clawsweeper` 机器人标记的积压问题做一次集中清理。
- **升级回归恶性循环**：修复发布后 1-2 周内出现新回归，并伴随用户反复报告。建议引入针对三大高频路径的**回归测试套件**：升级迁移、Telegram 投递、多代理覆盖场景。
- **Telegram 可靠性已成本周黑天鹅**：从 #44925、#127229、#126246、#139847、#139809 到 #137927（安全），Telegram 通道投递与状态恢复存在系统性缺陷群集。建议将该通道的 E2E 测试列为 CI 必选门禁。

---

## 横向生态对比

# 个人 AI 智能体开源生态横向对比分析报告

**报告日期：2026-09-08**


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高活跃、高竞争、质量分化加剧**的密集迭代期。今日 12 个被监测项目中仅 6 个有实质性活动（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、LobsterAI 等），头部项目（OpenClaw 单日 471 Issue + 500 PR 更新）与长尾项目（4 个项目 24 小时零活动）之间的活跃度差距持续拉大。主流项目共同面临**升级回归循环、状态持久化可靠性、消息静默丢失、多代理编排稳定性、渠道碎片化**五大类核心痛点，其中数据一致性与升级平滑性已成社区信任度的决定性因素。与此同时，多项目同步涌现出**上下文/记忆管理架构优化**与**安全边界加固**两大技术演进方向，头部项目 OpenClaw 的维护者评审带宽已明显成为瓶颈，生态整体呈现"功能扩张快于质量收敛"的态势。


## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PR（24h） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 471 更新（238 开 / 233 关） | 500 更新（279 待合并 / 221 合并关闭） | 无 | 🔴 偏紧张 — P0/P1 存量高，多个问题积压超 178 天，维护者评审带宽成瓶颈 |
| **Hermes Agent** | 50 更新（47 开 / 3 关） | 50 更新（45 待合并 / 5 合并关闭） | v2026.9.7 补丁 | 🟡 中等 — WAL 损坏双 PR 快速闭环为亮点，但 Skills 索引降级 52 天（177 评论）为明显短板 |
| **CoPaw** | 73 更新（18 开 / 15 关） | 40 更新（17 待合并 / 23 合并关闭） | 无 | 🟢 良好 — v2.2.0 维护期，系统性清理积压 bug，多个首次贡献者 PR 合入 |
| **ZeroClaw** | 29 更新（24 开 / 5 关） | 50 待合并（**0 合并/关闭**） | 无 | 🟡 偏紧 — 合并通道完全停滞，多个资深贡献者 PR 堆积，S1 级问题存活 6 周无 fix |
| **NanoBot** | 3 更新 | 29 更新（15 待合并 / 14 合并关闭） | 无 | 🟢 良好 — 8 个修复合入含安全修复，两轮回归修复闭环工程纪律良好 |
| **NanoClaw** | 2 更新（1 开 / 1 关） | 15 更新（10 待合并 / 5 合并关闭） | 无 | 🟢 良好 — v1→v2 迁移与渠道扩展并行推进，CI 门槛加固，任务调度引擎 6 个月 PR 终合入 |
| **LobsterAI** | 0 更新 | 9 更新（8 合并 / 1 开放） | 无 | 🟢 良好 — OpenClaw 2026.8.1 升级兼容集中修复脉冲，当日全部 bug 当日闭环 |
| **PicoClaw** | 3 更新 | 7 待合并（0 合并） | 无 | 🟡 中等 — Bug 响应速度快，但 3 个 PR 挂起 8–16 天无审核意见 |
| **IronClaw** | 1 更新 | 0 | 无 | 🟢 常规 — 维护驱动阶段，自动失败分类机制运行中 |
| **ZeptoClaw** | 3 更新（1 开 / 2 关） | 1 合并 | 无 | 🟢 良好 — 安全债务（权限 + 7 个依赖 CVE）8 天闭环清零 |
| **NullClaw** | 0 | 0 | 无 | — 无活动 |
| **TinyClaw** | 0 | 0 | 无 | — 无活动 |
| **Moltis** | 0 | 0 | 无 | — 无活动 |
| **CoPaw** | 73 更新（18 开 / 15 关） | 40 更新（17 待合并 / 23 合并关闭） | 无 | — 见上 |


## 3. OpenClaw 在生态中的定位

**优势：** OpenClaw 是该生态中**规模最大、最活跃**的项目，单日 Issue/PR 更新量（471 + 500）超过其他所有活跃项目之和的一个数量级。其核心优势在于：

1. **生态兼容性**：NanoBot、NanoClaw、LobsterAI、ZeptoClaw 等多个项目均以克隆/衍生方式围绕其构建，已形成事实上的"Claw 系"生态中心，上游 upgrade 直接影响下游多项目稳定性（如 LobsterAI 上游 2026.8.1 升级引发 4 条兼容修复 PR）
2. **场景覆盖面**：横跨 Telegram、飞书、WebChat 等多渠道，多代理、worktree、云会话等先进能力指标均领先于同类
3. **社区规模**：支持 ✅ 大量跨 IM 渠道和插件生态的活跃 Issue，但从 #44925（178 天积压）等可见**维护者带宽不及社区增速**

**技术路线差异：** 采用**统一网关架构**（gateway + 插件系统 + 渠道适配器）整合所有通信渠道，相较 Hermes Agent 的桌面应用 + 本地 gateway + 远程 gateway 更侧重 AI 优先的"聊天即操作"入口；相比 CoPaw 的"浏览器优先多产品整合"路线，OpenClaw 更接近**自托管 CLI/守护进程优先**的开发者工具形态。

**社区规模近况：** 4 个可直接对比的项目（Hermes Agent 今日 100 条更新、CoPaw 113 条更新），OpenClaw 单日更新量约为这两个项目的 5-10 倍，其社区体量处于生态绝对头部。**社区痛点主要集中在升级回归频繁与消息可靠性，且维护者评审带宽是被反复验证的核心瓶颈**。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求与表现 |
|---|---|---|
| **状态持久化与会话一致性** | OpenClaw（SQLite 33s 停顿 38 天、投影活锁 41 天、多条消息丢失）、Hermes Agent（WAL split-brain 双修复 PR 响应）、CoPaw（模型回复"丢失"空响应）、ZeroClaw（ACP 切换会话丢失 turn、历史裁剪破坏 caching） | 底层一致性与可恢复性需求已成为跨项目最集中的技术债务 |
| **升级回归与迁移平滑性** | OpenClaw（2026.9.1/9.2 多个升级回归）、Hermes Agent（update 误报 FAILED 等问题）、LobsterAI（升级后 4 模块兼容修复脉冲）、ZeroClaw（Telegram 语音/媒体回归） | 严重程度从 P0 到 P3 分布广，升级场景为最高频的"信任危机"触发点 |
| **上下文管理 / 记忆压缩策略** | NanoBot（压缩触发统一走 summary checkpoint、WebUI 用量修正）、CoPaw（Scroll 压缩 + 折叠 thinking + 预算感知压缩请求）、ZeptoClaw（跨会话记忆持久化 + 事务性写入设计）、Hermes Agent（skills 索引过期）、ZeroClaw（裁剪破坏 prompt caching）） | "低成本记忆 + 精确上下文预算感知"正成为核心架构演进方向 |
| **安全边界与敏感数据保护** | OpenClaw（本地安全网关 #141913、内部上下文泄漏 #137927）、Hermes Agent（依赖安全 PR）、PicoClaw（敏感缓存 data race + 配置 Key 丢失）、NanoBot（SSRF，待合并）、ZeroClaw（安全 PR 停滞）、ZeptoClaw（权限收紧 + 7 个 RustSec 依赖修复） | 覆盖工具授权边界、SSRF、密钥权限、依赖供应链，安全治理已全面被纳入主动加固 |
| **多代理编排与归属/聚合** | OpenClaw（子代理静默丢失 178 天、AgentSelectionRequiredError 刷屏）、Hermes Agent（非默认 profile 收不到 MCP server）、ZeroClaw（多 agent 并行监控需求 177+ 评论） | 多代理的可靠性、成本归属、profile 路由均不成熟，为生态共性弱项 |
| **渠道消息聚合与流式富文本** | NanoBot（飞书多轮整合请求 → Telegram 富文本流式已合入）、ZeroClaw（Telegram 多图批量请求求 5 个月未解） | 渠道从"分片消息"向"单条流式富文本"演进，但跨 IM 的体验一致性仍参差 |
| **SQLite 并发瓶颈** | OpenClaw（3 句柄 33s 锁停顿）、Hermes Agent（WAL 损坏） | 存储层在规模下为主线程瓶颈，架构级缺陷亟待投入 |
| **CI 基础/工程质量** | OpenClaw（回归测试套件需求、CodeQL 修复）、NanoClaw（gate job 新增 + CI 门禁加固）、LobsterAI（CI 流程完善度提升）、Hermes Agent（main 分支 CI gate） | 多项目已建立/正建立 gate 与回归门禁，质量意识普遍上升并对齐为基础设施需求 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构 | 核心差异化 |
|---|---|---|---|---|
| **OpenClaw** | 通用自主智能体 + 多渠道接入 + 多代理 | 开发者/高级用户/社区驱动 | 统一网关 + 插件系统 + 多 IM 适配，广泛支持远程模式 | 生态中心、功能广度第一、升级节奏快且评审瓶颈显著 |
| **Hermes Agent** | 桌面端优先的轻量个人助手 | 个人桌面用户（macOS/Windows/Linux） | 本地 gateway + 远程 gateway + 桌面 UI + 插件 | 桌面体验与插件生态迭代快、WAL/稳定性问题响应效率高（但 skills index 更新滞后） |
| **CoPaw** | 对话式多产品框架（Chat + Code + Canvas 等） | 桌面 + 云端用户,浏览器入口 | 浏览器优先多产品整合 + MCP/Scroll/ReMe 等 Context 管理 | 多产品整合与 Memory 后端插件化、厂商托管风格统一体验 |
| **ZeroClaw** | 面向聊天开发的无头代理/渠道件 | 开发者/数据工程,以命令行/无 UI 为主 | 无头运行 + async + Rust 依赖（依赖更新频繁） | 与 Codex/ZeroCode 深度集成、合并通道停滞、渠道质量参差 |
| **NanoBot** | 轻量嵌入式 RAG Agent / CLI + WebUI + Python API | 开发者与嵌入式、边缘/教学场景 | 核心 + CLI + WebUI + Python 包 | RAG + 轻量 Agent 引擎、工程纪律良好（修复+测试闭环）、Python 友好 |
| **NanoClaw** | 多渠道助手网关 + Agent 编排 | 团队/个人,注重迁移平滑 | 多 channel adapter（Slack/WhatsApp/...）+ CLI + CI 门禁 | 专注于 v1→v2 迁移工具链与 CI 质量、任务调度（fresh-session）优化 |
| **LobsterAI** | OpenClaw 的桌面壳 + 本地 UI 增强（缩略图/资源管理） | 桌面端用户,亲近 OpenClaw 生态 | OpenClaw 基座 + 本地 UI（桌面对话 + 产物排序/折叠） | 上游同步频率高、渲染/UI 细节打磨（HTML 缩略图/Mermaid） |
| **PicoClaw** | 极简 lightweight 单文件代理 | 低配/边缘设备（如 Orange Pi）/开发者 | 单可执行 Go 应用 + 高效渠道接入 | 体积小、启动快（面向嵌入式）、Bug 响应快、依赖升级频繁 |
| **ZeptoClaw** | Rust 单二进制 + 安全优先特性 | 安全敏感/自托管用户 | Rust 全栈 + 零容忍依赖安全 + 记忆分层 | 最小配置 + 低 token 记忆 + 强安全基线（未发现用户配置数据丢失） |
| **IronClaw** | 基准测试迭代（自动失败分类） | 内部 agent 评估（LLM-OS 团队） | 自动化 benchmark 追踪 + issue 生成 | 维护驱动、无活跃社区互动（面向内部） |


## 6. 社区热度与成熟度

按活跃度分层：

| 分层 | 项目 | 特点 | 代表信号 |
|---|---|---|---|
| **第一梯队（超高频迭代，社区驱动）** | OpenClaw、ZeroClaw、Hermes Agent、CoPaw | 每日 50+ PR 更新；OpenClaw 今日 471/500、ZeroClaw 50 PR 待合并 | 高频发布 + 大量 PR 需审；维护者带宽成瓶颈 |
| **第二梯队（活跃度中等偏高，小团队/核心驱动）** | NanoBot、NanoClaw、LobsterAI、PicoClaw | 每日 5–30 PR 更新；质量与功能迭代并行 | NanoBot "修复+测试" 双 PR、LobsterAI 上游兼容修复脉冲、NanoClaw CI gate 加固 |
| **第三梯队（中低活跃/维护性运营）** | ZeptoClaw、IronClaw | 低频,以内部或安全性驱动为主 | ZeptoClaw 安全闭环 8 天/天、IronClaw 自动失败分类 |
| **停滞梯队** | NullClaw、TinyClaw、Moltis | 24h 无任何活动 | 需评估项目 viability 与社区资源投入产出 |

- **快速迭代期**：OpenClaw（功能与修复吞吐量最大，但存在回归多、评审积压）、ZeroClaw → 快速功能扩张但合并通道停滞、LobsterAI 集中补丁 → 上游升级同步节奏快,产品化中。
- **质量巩固期**：NanoBot、ZeptoClaw、CoPaw → 稳定 维护为主调、安全与工程质量优先、积压问题少；NanoClaw / PicoClaw → 迁移期 / 新方向早期。


## 7. 值得关注的趋势信号

1. **"Claw 系"生态裂变加剧**：LobsterAI、ZeptoClaw、ZeroClaw、NanoClaw 等均依托 OpenClaw（或相近 Claw 理念）构建，但仍处于分裂的"衍生态"状态。任何上游缺陷（如近期 2026.8.1 / 2026.9.1/9.2 回归）都会向下游成倍放大，成为整个家族的升级阵痛源。**对开发者的参考价值**：如果采用 Claw 系衍生方案，需配套建好"上游兼容观测 + 回归测试"体系。

2. **"升级即风险"成为生态公害**：5 个活跃项目均出现与升级相关的回归、误报或缺陷（OpenClaw 2026.9.1/9.2、Hermes 8.31 缺插件包、LobsterAI 上游 8.1 兼容、ZeroClaw 上游 9.1 回归），主流做法从"快速集成上游"转向"建立升级门禁/规避策略"。

3. **"静默丢失"正在摧毁用户信任**：OpenClaw #44925 178 天、#126246、#139847，Hermes Agent #104596（WAL split-brain），CoPaw #7579（模型回复"丢失"），ZeroClaw #9333（ACP turn 消失）— 跨生态"静默丢消息/丢回复"已构成最集中的信任危机。**开发者启示**：成败可观测性（重试/通知/审计/load 到会话历史）不是锦上添花，而是 AI 助手进入生产环境的基础门槛。

4. **上下文/记忆管理成为架构升级主战场**：CoPaw 折叠 thinking + 预算感知压缩、NanoBot 统一 summary checkpoint、ZeptoClaw 跨会话持久化设计、ZeroClaw 裁剪破坏 caching —— 多方同时从"长度/截断限制"走向"token 成本、prompt cache 与语义保留之间的精确预算"。**开发者启示**：token 成本优化不只是一个选项，而是决定个人级 AI 助手能否长期自托管/低成本运行的关键瓶颈。

5. **安全基线已成为新增基建标配**：SSRF（NanoBot）、密钥权限（ZeptoClaw）、依赖 CVE（Hermes、NanoClaw、ZeptoClaw）、工具执行授权边界（OpenClaw #141913、ZeroClaw #9839/#10308）+ 内部上下文泄漏（OpenClaw #137927）同步展开。**开发者启示**：插件与 Provider 扩展越丰富，越需要默认安全（secure-by-default）设计，否则规模增长会同时扩大暴露面。

6. **社区反馈将"回归测试与质量门禁"从期待变为刚需**：OpenClaw 提出回归测试套件、NanoClaw 新增 gate job + 故障加固、LobsterAI 对关键路径补回归测试、ZeroClaw RFC #10366 讨论"expedited merge lane"。**开发者启示**：即使活跃的开源项目也值得先验证其 CI/quality 基础（是否有 gate 与回归覆盖），再做集成投资。

7. **多代理/多渠道是活跃需求但尚未收敛**：从 OpenClaw（子代理静默丢失/AgentSelectionRequiredError）、Hermes Agent（多 profile MCP 饿死）、NanoClaw（并发/线程路由）、ZeroClaw（多 agent 并行监控）可以看到多代理与多 profile 的可观测性、成本归属和路由均未被通用解决。**开发者启示**：在采用多代理方案前，应将"结果可追踪、归属可审计、会话可恢复"列为核心选型标准，而非只比较任务并行能力。

8. **优质社区在维护"贡献者体验"**：NanoBot（奖励 beginner-friendly 标注）、ZeptoClaw（安全修复 PR 快速审核）、CoPaw（首次贡献者 PR 被合入）+ 维护者明确对长期挂起 PR 给出状态反馈，正在与其他产生 contributor 流失风险的项目（ZeroClaw/OpenClaw 大量 `needs-author-action` 无回应）拉开差距，可视为生态长期健康度的先行指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

### NanoBot 项目动态日报 — 2026-09-08

---

#### 1. 今日速览

过去 24 小时 NanoBot 项目保持高活跃度：共产生 29 条 PR 更新（15 条待合并、14 条已合并/关闭），其中 **8 个修复/功能 PR 已合入主分支**，覆盖 WebUI 会话管理、记忆压缩、工具递归 glob 搜索等关键模块。Issues 侧活动相对温和（3 条），但社区讨论质量较高——飞书多轮回复整合诉求持续获得关注。安全修复（QQ 附件 SSRF 防护）与回归修复（会话删除后重建、WebUI 队列跨会话泄漏）已在合并队列中，项目整体健康度良好，无高危遗留问题，新版本未发布。

---

#### 2. 版本发布

今日无新版本发布。近期工作聚焦于 bug 修复与回归测试，尚未形成发布候选。

---

#### 3. 项目进展

**以下 8 个 PR 已合入/关闭，显著推进了项目稳定性与功能完善度：**

| PR | 标题 | 模块 | 影响 |
|---|---|---|---|
| [#5692](https://github.com/HKUDS/nanobot/pull/5692) | fix(tools): support recursive glob filters in file searches | 工具链 | 修复 `**` 在 find_files/grep 中被当单段通配符的缺陷，现在可正确匹配零或多个目录层级，提升文件检索准确性 |
| [#5694](https://github.com/HKUDS/nanobot/pull/5694) | fix: use summary checkpoints for all compaction triggers | 记忆压缩 | 解决空闲/手动压缩保留 8 条存档消息、可能回溯整个 user/tool 回合导致大请求残留的问题；WebUI 上下文使用量显示同步修正 |
| [#5695](https://github.com/HKUDS/nanobot/pull/5695) | fix(agent): keep tool results stable across replay | Agent 核心 | 规范化超大 tool 结果后再次发送给模型，避免重放时结果被二次截断导致上下文不一致 |
| [#5648](https://github.com/HKUDS/nanobot/pull/5648) / [#5658](https://github.com/HKUDS/nanobot/pull/5658) | fix/test(webui): title generation opt-in 系列 | WebUI | 修复 WebSocket envelope 缺失 `webui: true` 时会话标题永不生成的回归（#5647），并新增回归测试 |
| [#5700](https://github.com/HKUDS/nanobot/pull/5700) | fix(webui): keep queued prompts scoped across session switches | WebUI | 修复从会话A（有排队提示词）切换到空闲会话B时，A 的排队提示词被误通过 B 的发送回调触发的回归 |
| [#5701](https://github.com/HKUDS/nanobot/pull/5701) | fix(webui): use styled tooltips for model presets and activity previews | WebUI | 优化预设回退时 tooltip 信息与活动预览的可访问性 |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | feat(tg): add support for streaming rich messages | Telegram 渠道 | 在私聊中实现富文本消息流式发送并持久化终版，群聊仍保持原有 HTML/纯文本路径 |

**整体评估**：项目在 24 小时内完成了两轮回归修复迭代（尤其 WebUI 会话管理方向），并且 `#5648` + `#5658` 配合形成"修复 + 测试"双 PR 闭环，工程纪律良好。

---

#### 4. 社区热点

**热点 Issue：[#5567](https://github.com/HKUDS/nanobot/issues/5567) — 飞书渠道整合多轮回复为单条流式卡片消息**（5 条评论，持续活跃至 9 月 7 日）

- 诉求：希望飞书频道保持 `用户发一条消息 → agent 回复一条消息` 的对应关系，工具提示/进度/终版回复应整合为单条流式卡片，而非拆成 n 条独立消息
- 现状：流式输出阶段已通过 CardKit 支持流式卡片，但工具调用阶段走独立 `send()`，造成消息碎片化
- 分析：该诉求与近期合入的 [#5614](https://github.com/HKUDS/nanobot/pull/5614)（Telegram 富文本流式消息）形成呼应——多 IM 渠道正在经历从"分片消息"向"富文本流式单条"的统一演进。飞书渠道大概率将参照 Telegram 模式进行下一轮改造

其余 Issue（#5696、#5693）均已关闭且评论极少，热度有限。

---

#### 5. Bug 与稳定性

**已合入/已关闭（有 fix PR，风险解除）：**

| 严重度 | 问题 | PR | 状态 |
|---|---|---|---|
| 高 | WebUI 会话切换时排队提示词可能被错误发送到新会话（#5700） | [5700](https://github.com/HKUDS/nanobot/pull/5700) | ✅ 已合入 |
| 中 | WebUI 缺少 `webui: true` 标记时会话标题永不生成（#5647 → #5658） | [5658](https://github.com/HKUDS/nanobot/pull/5658) | ✅ 已合入 |
| 中 | 压缩后可能遗留超大请求，WebUI 上下文用量显示失准 | [5694](https://github.com/HKUDS/nanobot/pull/5694) | ✅ 已合入 |
| 中 | Agent 重放时 tool 结果被二次截断，导致上下文不一致 | [5695](https://github.com/HKUDS/nanobot/pull/5695) | ✅ 已合入 |
| 中 | 递归 glob（`**`）在文件搜索中被错误匹配，漏检文件 | [5692](https://github.com/HKUDS/nanobot/pull/5692) | ✅ 已合入 |

**已修复但仍在待合并队列（请维护者优先关注）：**

| 严重度 | 问题 | PR | 状态 |
|---|---|---|---|
| **高（安全）** | **QQ 渠道附件下载存在 SSRF 风险**：入站消息的 URL 未被校验 | [5697](https://github.com/HKUDS/nanobot/pull/5697) | ⏳ 待合并 |
| 中 | ExecTool 相对 `working_dir` 被错误解析为相对进程 CWD，而非工作区路径 | [5682](https://github.com/HKUDS/nanobot/pull/5682) | ⏳ 待合并 |
| 中 | 已删除的会话可能被跨会话延迟消息自动重建 | [5483](https://github.com/HKUDS/nanobot/pull/5483) | ⏳ 待合并（已悬置 17 天，存在冲突） |

---

#### 6. 功能请求与路线图信号

| 请求 | 来源 | 信号强度 | 分析 |
|---|---|---|---|
| 飞书渠道整合多轮回复为单条流式卡片 | [#5567](https://github.com/HKUDS/nanobot/issues/5567) | 高 | Telegram 已完成同类改造（[#5614](https://github.com/HKUDS/nanobot/pull/5614)），飞书大概率是下一目标；两者共用 `send` / `send_delta` 抽象，可复用度较高 |
| Agent TUI 统一配置引导（onboarding） | [#5498](https://github.com/HKUDS/nanobot/pull/5498) | 中 | 已进入实现阶段（开放 PR，含对齐、未知状态等），但存在 conflict 标记，需要 resolve 后合入 |
| 超轻量/边缘设备部署方案 + 中文文档（无人零售场景） | [#5693](https://github.com/HKUDS/nanobot/issues/5693) | 低 | 已关闭，内容偏推广且超出项目当前定位（RAG + Agent），短期内不太可能纳入路线图 |
| Archive 记忆压缩提示词支持工作区级覆盖 | [#5702](https://github.com/HKUDS/nanobot/pull/5702) | 中 | 功能请求已直接进入 PR 阶段（开放中），与 `dream-prompt` 已有机制对齐，合入概率较高 |
| WebUI 搜索开关切换时保留显式选择的 API 类型 | [#5698](https://github.com/HKUDS/nanobot/pull/5698) | 中 | 已在 PR 阶段，属于交互细节优化，预计后续合入 |

---

#### 7. 用户反馈摘要

- **飞书用户体验痛点**（#5567）：当 agent 触发多个工具时，用户会收到大量碎片化消息（工具提示、进度、终版），破坏"一问一答"的心智模型。**隐含诉求**：渠道层应主动做消息聚合与状态管理，而非依赖上游约束回复链路
- **新贡献者友好信号**（#5696）：新用户明确表示"有 Python/LangChain/RAG 经验，愿意从 beginner-friendly bug 开始"，**期待维护者标注 `good-first-issue` 类标签**以降低参与门槛
- 无人零售场景用户反馈（#5693）：认可项目在边缘智能场景的潜力，提出轻量部署与中文文档需求（Issue 已关闭，反馈未被采纳）

---

#### 8. 待处理积压

**高优先：**

| 项 | 详情 | 滞留时间 | 行动建议 |
|---|---|---|---|
| [#5697](https://github.com/HKUDS/nanobot/pull/5697) SSRF 防护（QQ 渠道） | 安全漏洞修复，待合并 | < 24h | **建议立即合入**，SSRF 属于实战可利用风险，不宜留滞 |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) 防止已删会话被重建 | 已有实现，标记存在 conflict | 已开放 17 天 | 需解决冲突后合入；数据一致性相关，不建议久拖 |

**低优先（长期未更新）：**

| 项 | 详情 | 滞留时间 |
|---|---|---|
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) Agent TUI onboarding 统一 | 开放中，有 conflict 标记，近期无 push | 已开放 16 天 |
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) 飞书流式卡片整合 | 讨论活跃但无实现认领 | Issue 开启 12 天 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-08

## 1. 今日速览

Hermes Agent 过去 24 小时保持高度活跃：共产生 50 条 Issue 更新（47 条新开/活跃，3 条关闭）和 50 条 PR 更新（45 条待合并，5 条已合并/关闭），并发布了补丁版本 v2026.9.7（v0.21.1）。今日核心焦点集中在 **state.db WAL split-brain 会话状态损坏**（P1，已有 2 个修复 PR 在途）、**Windows 平台更新与启动性能问题**、以及 **MCP 服务器在多 profile gateway 下被饿死**等稳定性议题。值得关注的是，围绕 WAL 损坏问题形成了"Issue 报告 → PR 修复"的快速闭环，项目维护响应节奏健康。另有一批 PR 针对桌面端 UI、npm 依赖安全、插件加载性能等做出改进。

## 2. 版本发布

### v2026.9.7 — Hermes Agent v0.21.1（补丁版本）

- **发布日期：** 2026 年 9 月 7 日
- **性质：** Patch release，将 v0.21.0 以来的 main 分支变更滚动打包，供 tagged deployments 和下游消费者使用
- **基准提交：** `6178e9f4eed8d99f4fc550add939d58c7bed6206`
- **未提示破坏性变更或迁移注意事项**（基于现有 release notes 内容）

## 3. 项目进展

今日有 5 个 PR 被合并/关闭，另有大量新 PR 提交待审。值得注意的进展包括：

**已合并/关闭的 PR（均有对应 Issue）：**

| PR | 内容 | 状态 |
|---|---|---|
| [#97901](https://github.com/NousResearch/hermes-agent/pull/97901) | 修复插件有效捆绑状态报告，使 CLI/TUI/Dashboard 与 PluginManager 实际行为一致 | CLOSED |
| [#97902](https://github.com/NousResearch/hermes-agent/pull/97902) | 为图片生成功能新增 `image_gen.openai-codex.host_model` 配置项，支持按 profile 解析 | CLOSED |

**新提交的高价值修复 PR（待审核）：**

- **WAL split-brain 双 PR 修复（P1）：** [#105692](https://github.com/NousResearch/hermes-agent/pull/105692) 守卫关闭时 checkpoint 对已删除/替换 generation 的处理；[#105686](https://github.com/NousResearch/hermes-agent/pull/105686) 在关闭时跳过 stale WAL checkpoint。两者直接回应今日报告的 field issue [#105670](https://github.com/NousResearch/hermes-agent/issues/105670)
- **会话租约容忍时钟跳变：** [#105720](https://github.com/NousResearch/hermes-agent/pull/105720) 与 [#105722](https://github.com/NousResearch/hermes-agent/pull/105722) 修复 NTP 校正/睡眠唤醒/DST 切换导致 live session lease 被误清理的问题（后者修复 Issue #105714，与前两者为同一问题在第三处代码位置的复发）
- **Windows 启动性能修复：** [#105723](https://github.com/NousResearch/hermes-agent/pull/105723) 将 43 个 bundled 插件的全量导入改为按需加载，消除 Windows 上 15-30 秒启动延迟

## 4. 社区热点

| 条目 | 类型 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index 过期/降级 | Issue | **177** | 自动化探针显示 Skills Hub 依赖的索引已 29.8 小时未刷新（阈值 26h），持续降级状态跨度近 2 个月，社区高度关注但长期未解决 |
| [#104596](https://github.com/NousResearch/hermes-agent/issues/104596) — state.db WAL split-brain（单进程内） | Issue（已关闭） | 11 | 用户精确定位到 `apply_wal_with_fallback` 在 journal-mode 探测失败时错误执行 set-pragma，导致关联连接的 -wal/-shm 文件被错误处理 |
| [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) — Windows 桌面端 `hermes update` 误报 FAILED | Issue | 7 | 更新实际成功但 post-update 验证解析了错误的工作目录，每次更新都显示 exit 8 |

**分析：** 社区最集中的呼声是 **状态存储可靠性与会话恢复一致性**。Skills index 降级问题虽评论高达 177 条但长期悬而未决，是明显的维护短板信号。WAL split-brain 问题则呈现"用户现场报告 → 快速 PR 修复"的良性闭环，说明 P1 级数据安全问题的响应通道是畅通的。

## 5. Bug 与稳定性

按严重程度排列：

### P1（严重）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#105670](https://github.com/NousResearch/hermes-agent/issues/105670) | **Field report：** WAL generation split-brain 导致 gateway 只读数天后优雅关闭 checkpoint 损坏主 DB。用户在 #104596 关闭后仍观察到同类问题，说明修复不完整 | ✅ [#105692](https://github.com/NousResearch/hermes-agent/pull/105692)、[#105686](https://github.com/NousResearch/hermes-agent/pull/105686) |
| [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) | Windows 桌面端 `hermes update` 在实际成功更新后总显示 FAILED（exit 8）— 验证逻辑解析了错误的工作目录 | ❌ 无 |
| [#105396](https://github.com/NousResearch/hermes-agent/issues/105396) | 多 profile 复用同一 gateway 时，非默认 profile **收不到任何 MCP server**；`/reload-mcp` 报 "No MCP servers connected"。scope-tagging 与 name-keyed discovery 不匹配 | ❌ 无 |
| [#98588](https://github.com/NousResearch/hermes-agent/issues/98588) | macOS launchd 拉起 gateway 后 `hermes update` 每次误报"gateways 仍在使用旧代码" | ❌ 无 |

### P2（中等）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#105714](https://github.com/NousResearch/hermes-agent/issues/105714)（隐含） | `_pid_liveness` 以 1ms 容忍度比对 process create_time，wall-clock 跳变导致活跃会话被误删 | ✅ [#105722](https://github.com/NousResearch/hermes-agent/pull/105722)、[#105720](https://github.com/NousResearch/hermes-agent/pull/105720) |
| [#86890](https://github.com/NousResearch/hermes-agent/issues/86890) | 桌面端并发 session 时聊天时间线乱序，terminal events 中出现空 session_id | ❌ 无 |
| [#103498](https://github.com/NousResearch/hermes-agent/issues/103498) | 断线重连后 session 以 profile 默认配置而非存储的运行时配置恢复 | ❌ 无 |
| [#105369](https://github.com/NousResearch/hermes-agent/issues/105369) | Astra/Azure Foundry 新鲜 session 在后台 review 后因认证身份冲突失败 | ❌ 无 |
| [#77797](https://github.com/NousResearch/hermes-agent/issues/77797) | API-server wake 重试缺少幂等键，可能重复运行 agent 或把 durable delivery 钉在缓存的 502 上 | ❌ 无 |

### P3（一般）

- [#105145](https://github.com/NousResearch/hermes-agent/issues/105145) 同 P1 条目
- [#101865](https://github.com/NousResearch/hermes-agent/issues/101865) — 稳定版 v2026.8.31 缺少 `plugins/web/tavily` 目录（v2026.8.27 和 main 上都有），Tavily 用户 web_search 不可用（👍 3）
- [#105427](https://github.com/NousResearch/hermes-agent/issues/105427) — gateway lifecycle 守卫误伤正常 Python 目录字面量和解释器二进制
- [#105689](https://github.com/NousResearch/hermes-agent/issues/105689) — 运行时代码中仍引用已合并入 `pdf` skill 的 `ocr-and-documents` skill
- [#105632](https://github.com/NousResearch/hermes-agent/issues/105632) — 远程 gateway OAuth 登录状态每次重启丢失，文档缺失凭据持久化说明及 SSH 备选方案
- [#62774](https://github.com/NousResearch/hermes-agent/issues/62774) — 桌面端流式输出葡萄牙语（带重音符号）时严重截断/乱码（7/11 报告，至今未修复）

## 6. 功能请求与路线图信号

| Issue | 请求内容 | 可能的路线图信号 |
|---|---|---|
| [#105657](https://github.com/NousResearch/hermes-agent/issues/105657) | 出站邮件 `From:` 头支持可配置显示名（`EMAIL_SENDER_NAME`） | 小改动（1 行代码位置），易被纳入下个版本；反映用户对邮件网关专业度的需求 |
| [#105632](https://github.com/NousResearch/hermes-agent/issues/105632) | 文档补充远程 gateway 凭据持久化行为说明和 SSH 替代连接方式 | 文档/UX 改进，无需代码变更，门槛低 |
| [#101199](https://github.com/NousResearch/hermes-agent/issues/101199)（perf） | cron 源 session 排除出 trigram FTS 索引（每分钟 40MB 无搜索价值的机器生成文本写入） | 典型的"大规模部署用户"优化请求，若团队关注扩展性会被排入性能 backlog |
| [#95161](https://github.com/NousResearch/hermes-agent/issues/95161)（perf） | `read_file` 每次调用产生 4-5 个 shell 进程 | 同类性能优化信号 |
| [#93936](https://github.com/NousResearch/hermes-agent/issues/93936)（perf） | inbound media cache 写入保持不在事件循环上 | 前序 PR #93445 的 follow-up，团队已有认知 |

## 7. 用户反馈摘要

- **数据安全焦虑（最强烈的情绪）：** 多条 WAL corruption 相关报告（#104596、#105670、#100896 引用）表明用户在真实环境中反复遭遇 `btreeInitPage() returns error code 11`、gateway 只读持续数天等严重问题。用户提供了非常详细的技术分析，说明社区技术水准高，但也暗示 **文档化已知问题与规避策略** 的需求
- **对 update 流程可靠性的不满：** Windows 上更新成功后误报 FAILED（#105145）和 macOS 上每次 update 都出现 gateway 未重启的 warning（#98588），在"本应无感"的更新环节反复打扰用户，消耗信任
- **多 profile 用户的可发现性痛点：** 默认 profile 在配置文件轨中被隐藏（#48583，6/18 报告仍未解决）、非默认 profile 收不到 MCP server（#105396），多 profile 场景的 UI 与路由逻辑都存在明显疏漏
- **被忽略的语言/区域问题：** 葡萄牙语流式输出截断问题（#62774）自 7/11 提交以来仅有 4 条评论，未见修复迹象，非英语用户可能存在"报而不修"的感知

## 8. 待处理积压

以下为长期存在且未获充分响应的条目，建议维护者优先关注：

| 条目 | 类型 | 创建时间 | 持续天数 | 备注 |
|---|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index 持续降级 | Issue | 2026-07-18 | **~52 天** | **177 条评论**，自动化探针 2 个月未能恢复，可能是 CI/发布管线的系统性缺陷 |
| [#62774](https://github.com/NousResearch/hermes-agent/issues/62774) — 葡萄牙语流式截断 | Issue（P1 标签但未修复） | 2026-07-11 | **~59 天** | P1 严重度 + 2 个月未关闭，字符编码类 bug 影响面可能不限于葡萄牙语 |
| [#48583](https://github.com/NousResearch/hermes-agent/issues/48583) — 默认 profile 在桌面端 UI 被隐藏 | Issue | 2026-06-18 | **~82 天** | 已有 PR [#100098](https://github.com/NousResearch/hermes-agent/pull/100098)（9/1 提交）在审，仍未合并 |
| [#77797](https://github.com/NousResearch/hermes-agent/issues/77797) — API wake 重试重复执行/502 缓存 | Issue | 2026-08-03 | ~36 天 | 消息投递可靠性问题，涉及幂等设计 |
| [#95161](https://github.com/NousResearch/hermes-agent/issues/95161) — `read_file` 每次 4-5 个 shell 进程 | Issue | 2026-08-26 | ~13 天 | 性能问题清晰、修复方向明确（合并命令或原生读取），迟迟未有 PR |
| [#93936](https://github.com/NousResearch/hermes-agent/issues/93936) — 移除事件循环上的 media cache 写 I/O | Issue | 2026-08-24 | ~15 天 | 团队自认的 follow-up，仍无 PR |


</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-08

## 1. 今日速览

过去 24 小时内，PicoClaw 共新增/活跃 3 个 Issue、7 个待合并 PR，无新版本发布。项目今日核心焦点集中在 **配置系统的健壮性** 上：社区成员 sting8k 连续提交了 2 个数据一致性 Bug（敏感数据缓存并发竞态、配置保存丢失 API Key）并均附带修复 PR，另有 1 个 QQ 频道连接 401 认证问题（尚无 PR）。与此同时，功能层面迎来两项新 Provider 接入（opencode-go、Keenable 网页搜索）及一项 IRCv3 多行消息支持建议。整体活跃度中等偏上，**Bug 修复速度快（Bug 与 fix PR 同步提交）** 是今日突出亮点；但需注意 3 个 PR（#3344、#3353、#3354）已挂起超一周未获合并，积压趋势值得关注。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。但 Issue #3365 指出用户在 nightly 构建（版本号报告为 0.3.1）中遇到了 botgo v0.2.1 与 resty >= v2.17 的认证兼容性问题，提示当前 nightly 分支可能存在已知缺陷，建议维护者评估是否需紧急发布修复版本。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，7 条 PR 全部处于待合并状态。以下 PR 若获合并将对项目产生实质推进：

- **PR #3375**（sting8k）：修复 `Config.sensitiveCache` 懒加载无同步导致的 data race。直接回应用 Issue #3374，代码修复已就绪，等待审核。
- **PR #3371**（EMTumariscal）：新增 `opencode-go` Provider，支持 OpenCode Go 专用端点（`https://opencode.ai/zen/go/v1`）并根据模型 ID 自动路由到对应端点家族，同时支持 `x-opencode-*` 会话头。对依赖 OpenCode Go 的用户属关键修复。
- **PR #3372**（sting8k）：修复 `reaction` 工具配置路径失效问题——此前 `ToolsConfig.IsToolEnabled("reaction")` 无独立分支、默认返回 `true`，导致该工具无法被禁用。
- **PR #3370**（ilya-bogin-keenable）：新增 Keenable 网页搜索 Provider，支持开箱即用（无 API key），为 `web_search` 工具链补充了新选项。

**建议**：PR #3375 与 #3372 均附带相应 Issue 且有明确代码修复，应优先安排审核合并，以尽快消除数据安全与配置一致性风险。

---

## 4. 社区热点

今日社区热度整体偏低（评论与反应均较少），其中相对受到关注的有：

- **Issue #3365**（QQ 频道 401 认证失败）——评论 1 条、👍 1 个，是今日唯一有讨论互动的 Issue。用户 crazysarah 已在 Orange Pi 3B（RK3566, aarch64）环境复现，并定位到 root cause 为 botgo v0.2.1 与 resty >= v2.17 的兼容性问题。**分析**：该 Issue 暗示 PicoClaw 所依赖的腾讯 botgo SDK 上游存在回归，短期内可能需要通过依赖版本锁定或适配层绕过解决，社区对此应有较高修复期望。

其余 Issue/PR 均无评论互动。整体讨论热度较低，尚未形成社区层面的广泛关切，当前热点集中于**功能性 Bug 的及时修复**与**新 Provider 的接入**。

---

## 5. Bug 与稳定性

按严重程度排列如下：

**🔴 高 — 数据丢失**

- **Issue #3373**（sting8k，2026-09-08）：`SaveConfig` 在 `model_list` 条目含多个 `api_keys` 时会**静默删除除首个外的全部 Key**，且遗留悬空的 `fallbacks` 引用指向已不存在的模型名。属典型配置数据持久化 Bug，会造成用户 API Key 意外丢失。**已有 fix PR？暂无**。
> 💡 关联提示：PR #3375 修复的是 `security.go` 中敏感缓存（含 api_key）的并发问题，与 #3373 的持久化丢失属不同层面，但均指向**敏感信息管理链路存在系统性缺陷**。

**🔴 高 — 并发安全/潜在的崩溃**

- **Issue #3374**（sting8k，2026-09-08）：`Config.initSensitiveCache` 懒加载无同步，`sync.Once` 被绕过，两个 goroutine 可各自创建独立的 `SensitiveDataCache`，导致 `FilterSensitiveData` 可能拿到 nil replacer 并 panic。**已有 fix PR：#3375**（同日提交，代码已就绪）。

**🟡 中 — 依赖兼容性**

- **Issue #3365**（crazysarah，2026-09-04）：QQ 频道连接返回 401 "Authorization 参数格式错误"，root cause 位于 botgo v0.2.1 + resty >= v2.17 组合。**已有 fix PR？暂无**。

**总结**：今日新报 2 个高严重度 Bug 均由同一社区成员（sting8k）提交且其中 1 个已附修复 PR，响应速度良好；但 **#3373 的配置持久化数据丢失问题尚未有对应修复方案**，建议维护者优先跟进。

---

## 6. 功能请求与路线图信号

今日新增 PR 合计贡献了 3 项明确功能/修复，虽无独立 Feature Request Issue，但其存在本身即是路线图信号：

| PR | 功能 | 路线图信号 |
|---|---|---|
| #3370 | Keenable 网页搜索 Provider（无需 API key） | 持续扩张 `web_search` Provider 生态，降低新用户接入门槛 |
| #3371 | opencode-go Provider + 会话头支持 | 适配 OpenCode Go 专用端点，PicoClaw 与 OpenCode 生态集成加深 |
| #3354 | IRCv3 `draft/multiline` 接收支持（IRC 渠道多行消息合并） | 补齐 IRC 长文本/多行消息体验，属渠道层体验优化 |
| #3344 | Build Remote Agent 手机配对适配器（`gbr/1` 协议） | 探索远程/移动端协作场景，可能属于 "remote agent" 方向的早期布局 |

其中 #3344（Remote Agent phone pairing）提出较早（2026-08-23）且标记为 [stale]，但功能新颖度较高，若项目规划中包含**远程控制/移动端协同**方向，建议维护者不要因 PR 老旧而轻易关闭。

---

## 7. 用户反馈摘要

今日 Issues 评论互动稀少，可提炼的直接用户反馈主要集中于：

- **硬件兼容性**：用户在 Orange Pi 3B（RK3566, aarch64）上运行 nightly 版本时遭遇 QQ 频道 401 问题，无法连接 QQ 频道（Issue #3365）。该用例显示 PicoClaw 存在 **ARM 设备 + 特定 IM 平台** 的真实部署场景，此类组合下的依赖兼容性需纳入回归测试矩阵。
- **配置安全预期**：Issue #3373 与 #3374 的提交者 sting8k 在描述中详细分析了数据丢失与并发竞态的具体代码路径（精确到行号），表明其使用 PicoClaw 存储和管理多 API Key 配置并执行常规 `LoadConfig → SaveConfig` 操作，且对配置的**读改写一致性有较高预期**。

---

## 8. 待处理积压

以下 PR/Issue 长时间未获合并或响应，建议维护者评估处理：

| 编号 | 类型 | 内容 | 创建于 | 已等待 | 建议 |
|---|---|---|---|---|---|
| **#3344** | PR ⚠️ stale | Build Remote Agent 手机配对适配器（gbr/1 协议） | 2026-08-23 | 16 天 | 需求新颖但久未响应。建议明确规划方向：合并、请求修改或关闭并解释理由 |
| **#3354** | PR ⚠️ stale | IRCv3 `draft/multiline` 多行消息组装 | 2026-08-31 | 8 天 | 实现完整（请求 batch/message-tags/multiline 能力）。功能范围清晰，建议排期审核 |
| **#3353** | PR ⚠️ stale | 限制工具反馈动画时长为 5 分钟，防止生命周期泄漏 | 2026-08-31 | 8 天 | 与 Telegram typing 反馈行为对齐，属稳健性小修复，合并成本低 |
| **#3365** | Issue | QQ 频道 401 认证失败（botgo v0.2.1 + resty >= v2.17） | 2026-09-04 | 4 天 | 已定位 root cause，暂无 fix PR。建议维护者确认复现路径并评估依赖版本锁定方案 |

> ⚠️ **维护者提醒**：三条 PR（#3344、#3353、#3354）均已挂起 8–16 天未获任何审核意见，其中两条来自同一贡献者（linhongyu510）。长期无响应易挫伤社区贡献积极性，建议即使暂不合并也给出明确状态反馈。

---

*报告生成时间：2026-09-08 | 数据来源：github.com/sipeed/picoclaw | 本报告基于项目公开 GitHub 活动数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-08

## 1. 今日速览

NanoClaw 今日活跃度较高：24小时内新增/更新 2 个 Issues（1 开 1 关）和 15 个 PR（10 个待合并、5 个已合并/关闭），无新版本发布。项目当前处于 **v1→v2 迁移与渠道扩展并行推进**阶段，社区聚焦于三个方面：v2 安装脚本对旧渠道迁移支持不足（#3744）、对话归档无保留策略导致无限增长（#3735）、以及多个高价值功能与修复等待合并（线程回复路由 #3738、AgentMail 邮件渠道 #3743 等）。维护团队今日完成了 CI 门禁加固（#3736、#3739）和数据库并发测试修复（#3737），整体项目健康度良好，社区参与度高。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭了 5 个 PR，主要成果如下：

- **[#3737] fix(db): 修复嵌套续期并发测试竞态** — [nanocoai/nanoclaw PR #3737](https://github.com/nanocoai/nanoclaw/pull/3737)（作者：gavrielc）：修复共享驱动并发测试在 PostgreSQL 上超时的问题，确保"超时的嵌套 continuation 不能回滚下一个事务"这一约束在 PG 上可以被正确验证。此前 #3739 中提及该 PR 的三个 CI job 曾报红，现已合入。
- **[#3736] ci: 新增 gate job 并在 main 上添加 post-merge 运行** — [nanocoai/nanoclaw PR #3736](https://github.com/nanocoai/nanoclaw/pull/3736)（作者：gavrielc）：在 ci.yml 中新增 gate job，通过 `if: always()` 保证依赖失败时 gate 明确失败而非跳过，并要求它依赖两个 node 版本的测试与既有 ci job。同日 #3739 进一步修复了 Registry skills 工作流在 Docker Hub 5xx 时的构建失败，并说明 #3737 曾导致三个 job 报红但均非必需上下文。
- **[#3441] fix(setup): git show 失败时保留文件** — [nanocoai/nanoclaw PR #3441](https://github.com/nanocoai/nanoclaw/pull/3441)（作者：dawNotPoi，关闭于今日）：安装复制步骤将 `git show` 输出先写入临时文件、成功后再替换到位，避免 Git 中途失败导致原文件丢失，并通过共享 helper 统一处理。这属于 v2 迁移可靠性的重要基础修复。
- **[#1519] fix: 防止任务重复运行、清理孤儿任务、加固 IPC** — [nanocoai/nanoclaw PR #1519](https://github.com/nanocoai/nanoclaw/pull/1519)（作者：kevingoldsmith，关闭于今日）：调度器在入队前预推进 `next_run`，防止慢任务（>60s）在同一轮被再次获取；同时清理孤儿 `once` 任务并加固 IPC。这项修复于 3 月提交，最终在今日合入。

综合来看，今日核心进展是 **v2 安装可靠性（#3441）、CI 质量门槛（#3736/#3739）与任务调度引擎稳定性（#1519）的同步加固**。加上一批待合并 PR（线程回复路由 #3738、`--fresh-session` #3741、AgentMail 渠道 #3743、读写信道 mount #3742），本周预计是 v2 功能完整度的一次集中跃升，同时 #3494 与 #3733 等长期开放 PR 也值得关注。

## 4. 社区热点

过去 24 小时内活跃度最高的议题是 **一个等待 6+ 个月的 CI 修复被维护者撤回（#3739）**，以及 **v2 脚本渠道安装缺口（#3744）**。需要说明的是，Issue/PR 页面中评论数在提供数据里显示均为 undefined（除 2 个 Issue），因此下述结论依据的是 PR 标签、时序关系与内容关联判断，无法直接比对评论热度。

- **[#3739] PR：注册表技能 CI 加固被撤回** — [nanocoai/nanoclaw PR #3739](https://github.com/nanocoai/nanoclaw/pull/3739)（作者：gavrielc，状态：CLOSED）：该 PR 明确指出 #3737 在今天下午自动合并时，Registry skills 工作流有 3 个 job 报红（`old-provider-refresh`、`test (add-codex, true, true)`、`provider-promotion`），虽然这些都非必需上下文、`ci.yml` 中 gate 可以兜底，但为防止"红色 job 混入 main"再次发生，作者同时提交 #3736 添加 gate。围绕该 PR 的讨论实质是对 **CI 门禁策略（跳过 vs 失败 vs 自动合并）** 的争议，反映出团队对主干健康度的高度关注。
- **[#3744] Issue：v1 渠道迁移缺口** — [nanocoai/nanoclaw Issue #3744](https://github.com/nanocoai/nanoclaw/issues/3744)（作者：rsieb，状态：CLOSED）：报告 `migrate-v2.sh` 在 v1→v2 迁移中只认识旧版 `setup/install-<channel>.sh` 脚本，导致选中的 6 个渠道中 5 个（Slack、WhatsApp、iMessage、Resend、Discord）安装失败。该 Issue 一天内从 创建到关闭（1 条评论），是当日最受关注且已快速闭环的问题。
- **[#3735] Issue：conversations 目录无限增长** — [nanocoai/nanoclaw Issue #3735](https://github.com/nanocoai/nanoclaw/issues/3735)（作者：TO-maschenborn，状态：OPEN）：`archiveTranscriptFile()` 每次压缩时都向对话目录写入 Markdown 归档，且没有任何保留、轮换或上限机制。该 Issue 获得 1 条评论，是当前未关闭的存量增长风险。

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug 与稳定性问题：

**高严重度 — 数据无限增长 / 迁移安装失败（已有用户报告，无直接 fix PR）：**

- `conversations/` 目录无限增长 — [Issue #3735](https://github.com/nanocoai/nanoclaw/issues/3735)（作者：TO-maschenborn）：v2.1.53 中每次压缩都会写入归档文件且永不清除，存储无限膨胀。严重度高，生产环境长期运行将导致磁盘耗尽，暂无对应修复 PR，值得优先关注。
- v1 渠道迁移安装中断（已解决）— [Issue #3744](https://github.com/nanocoai/nanoclaw/issues/3744)（作者：rsieb）：`migrate-v2.sh` 无法安装 5/6 个旧渠道，该 Issue 状态为 CLOSED，未在数据中看到对应修复 PR，评审时建议确认其修复是否随其他 PR（如 #3441 相关安装逻辑）合入。

**中严重度 — CLI 参数无效（已有 fix PR 待合并）：**

- `ncl groups config add-mount` 的 `--ro` 参数是空操作，且无法创建读写挂载 — [PR #3742](https://github.com/nanocoai/nanoclaw/pull/3742)（作者：slambert，状态：OPEN）：修复方案是为 `--rw` 增加显式处理，避免 `readonly` 字段被省略造成歧义。该 PR 提到修复了 #3690 及一个后者未提到的问题。

**中严重度 — 线程路由错误（已有 fix PR 待合并）：**

- `send_message`/`send_file`/`<message to>` 回复落错位置 — [PR #3738](https://github.com/nanocoai/nanoclaw/pull/3738)（作者：zvi-fried，状态：OPEN）：`resolveRouting` 未将被回复消息的线程信息传递给路由，导致文件回复到主频道而非所答消息的线程中。

**低严重度 — 定时任务成本线性增长（已有 fix PR 待合并）：**

- 定时任务因单个长会话持续累积，每晚重复读取全部历史消息 — [PR #3741](https://github.com/nanocoai/nanoclaw/pull/3741)（作者：slambert，状态：OPEN）：作者举例某项每晚任务成本每月增长 15%。fix 方案为新增 `--fresh-session` 参数，使定时任务以无状态方式运行。

**低严重度 — 入站路由失败后适配器失去重试资格（已有 fix PR 待合并）：**

- bootstrap 丢弃入站路由的 promise，适配器在入站处理失败时无法保留重试资格 — [PR #3740](https://github.com/nanocoai/nanoclaw/pull/3740)（作者：TheCryptoDonkey，状态：OPEN）。

## 6. 功能请求与路线图信号

- **AgentMail 邮件渠道适配器（新增请求，已有 PR）** — [PR #3743](https://github.com/nanocoai/nanoclaw/pull/3743)（作者：billyshipp）：新增原生 AgentMail 渠道适配器，通过 API 提供托管代理邮件收件箱，用户无需自建 MX 记录、也不会与自有域名邮件产生冲突。这是 NanoClaw 首个邮件渠道（Issue 侧未见对应 feature request，但属于解决"No email"缺口的直接补充），从作者选择托管服务（避免 MX/SPF 配置）来看是低摩擦接入方案。
- **定时任务无状态执行（功能增强，已有 PR）** — [PR #3741](https://github.com/nanocoai/nanoclaw/pull/3741)：`--fresh-session` 让重复定时任务以全新会话运行，"每次只处理当天要做的内容"（作者原话），也附带显著降低 token 成本。该功能同步解决了 #3735 中对话目录无限增长的核心诱因——多数归档源自持续累积的定时任务会话。
- **浏览器端完成宿主与社区 cell 的连接与权益管理（已有 PR，本月合入候选）** — [PR #3729](https://github.com/nanocoai/nanoclaw/pull/3729)（作者：gavrielc）：将 Echo 与 Slack 的设置流程迁移至浏览器门户，支持 WorkOS 单点登录绑定用户与安装源。Activation 保持成功弹窗打开的同时，CLI 设置可并行推进。这是与 #3744（渠道安装缺口）同一方向——将设置流程全面现代化。
- **OpenCode 作为自包含 provider 技能可选安装（功能增强，已有 PR）** — [PR #3733](https://github.com/nanocoai/nanoclaw/pull/3733)（作者：glifocat）：将 OpenCode 纳入常规安装流程可选列表（与已有 add-codex 模式对齐），使宿主可用其做安装恢复、调试、更新——与 #3744 反映的"v2 渠道安装缺失"形成协同（提供额外的宿主侧恢复通道）。
- **Build Remote Agent 手机配对（gbr/1 协议，已在 8 月提交，仍开放）** — [PR #3494](https://github.com/nanocoai/nanoclaw/pull/3494)（作者：LinespottingPrivate）：让手机作为配套设备旁观桌面 agent，通过 QR 码或 8 位码配对。该 PR 已在 8/23 提交，仍处于开放状态，非核心团队成员提交，合入优先级或被延后，但作为多端协同的能力补充具备一定价值。

## 7. 用户反馈摘要

从近 24 小时的 Issue 讨论（#3735、#3744）中可以提炼以下反馈：

- **"迁移脚本对新版渠道支持不完整"**（来源：[#3744](https://github.com/nanocoai/nanoclaw/issues/3744)）：用户 rsieb 明确报告 `migrate-v2.sh` 在 v1→v2 迁移（09-06/07）期间，因只支持旧式 `setup/install-<channel>.sh` 安装脚本，导致 6 个选中渠道中 5 个安装失败，严重阻碍升级路径。反馈当日已闭环，但社区期望看到脚本知识库（而非仅硬编码的每个渠道逐一适配）在后续版本中扩展。
- **"存储无限增长，缺少数据生命周期管理"**（来源：[#3735](https://github.com/nanocoai/nanoclaw/issues/3735)）：用户在 v2.1.53 中观察到每次压缩都会向 `groups/<folder>/conversations/` 追加 Markdown 归档且无任何保留或轮换机制——在模型随任务重复运行（见 #3741 的案例）时会显著放大问题。

两者共同反映出 v2 的运营运行特征正在从"开发工具"转向"长期服务"，用户开始更关注**安装升级路径的完整性**和**运行时的存储与成本治理**。

## 8. 待处理积压

以下为长期未合入/未响应、值得维护者关注的项目：

- **[#3735] conversations 目录无界增长**（2026-09-07 创建，OPEN）：长期运行存在磁盘耗尽风险。该 Issue 尚无对应修复 PR；但建议修复方向可能落在 #3741（fresh-session 无状态执行）上——它从源头减少归档的写入量。是否还需要对归档文件句加上保留窗口/上限，值得维护者在路线图上明确。
- **[#3744] 渠道安装迁移支持不完整 → 已关闭但无直接修复 PR**：该问题虽在 1 条评论内关闭，建议维护者确认修复是否已随同一批 v2 安装重构（如 #3441 的 git show 保存）或 v2 设置流程重构（#3729）合入；若依赖其他 PR，应在相关 Issue 中补充关联。
- **[#3719] fix(a2a): 向消息源报告通信失败**（2026-09-04，OPEN，core-team 标签）：阻塞原因、审批等待、拒绝、发送路径缺失与永久投递失败目前都没有以"系统通知"形式回传给发送代理；当会话具备对应会话 ID/通道时，同一文本也应出现在发起聊天中。等待 review 中。
- **[#3718] fix(a2a): 保留已验证的发送者身份与命令边界**（2026-09-04，OPEN，core-team 标签）：代理消息当前以"自报身份"字段到达，单向边会显示 `from=...` 的歧义来源；修复方向是路由层通过验证的真实发送代理来填 from 字段。与 #3719 配套构成 A2A 通信闭环的完整性。
- **[#3494] Build Remote Agent 手机配对（8 月提交，仍开放，非core-team）**：已超过两周未有维护者 review；若计划支持多端协同，建议尽快给出方向性结论，或将其明确规划到后续里程碑中。
- **[#1519] 已关闭但值得后续关注**：今日关闭，但该项修复从 3 月底至今约 6 个月的跨度才合入主分支，说明 bugfix review 通道可能曾是瓶颈。建议维护者对长期积压 PR（如 #3494、#3718/#3719）做定期的批量 triage 以提升贡献者体验。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-08

## 今日速览

IronClaw 项目今日整体活跃度处于低位：过去 24 小时内仅有 1 条 Issue 更新（#8081），无新 PR、无新版本发布。当前项目处于常规运行阶段，核心工程量集中在自动化的"每日失败分类"工作机制上，由维护者 pranavraja99 持续追踪 benchmark 失败模式。暂未发现紧急回归或社区高热度讨论。

## 项目进展

今日无合并或关闭的 PR，也无新提交的 Pull Request，项目核心代码层面暂无可见的新增功能或修复推进。维持现状。

## 社区热点

**#8081 — Daily ironclaw failure taxonomy — 2026-09-07**（[链接](https://github.com/nearai/ironclaw/issues/8081)）
- 作者：pranavraja99 ｜ 创建于 2026-09-07 ｜ 0 评论 ｜ 0 👍

该 Issue 是维护者发布的自动化每日失败分类报告。今日内容聚焦 **officeqa** 基准套件，该套件存在 42 个非通过用例，报告中提供了详细的运行结果链接。该 Issue 目前尚无社区互动，说明当前主要由维护团队驱动项目的稳定性观察，属于内部可观测性流程的一部分。值得关注的是：officeqa 连续被纳入失败分析，可能暗示该基准套件存在系统性缺陷（而非随机波动），后续值得持续跟踪其失败模式是否收敛。

## Bug 与稳定性

今日仅有 1 条 Issue（#8081），性质为"失败分类报告"而非新 Bug 报告。该报告指向的 officeqa 套件存在 **42 个非通过用例**（非通过数量较多，属于中等偏高的失败密度），具体失败根因需查看报告中嵌套的 benchmark 运行链接进一步确认。由于该 Issue 由维护者自动生成，当前尚未关联任何修复 PR，建议关注后续几天的分类报告中该套件的失败趋势是否持续。

## 功能请求与路线图信号

今日无用户提交新功能需求。从项目当前只读状态来看，短期路线图更偏向稳定性维护与基准失败治理，而非新功能开发。

## 用户反馈摘要

今日无用户评论，暂无真实用户痛点或满意度反馈可供提炼。项目社区互动量低，处于维护驱动阶段。

## 待处理积压

今日无新增积压。唯一活跃 Issue（#8081）为每日自动生成，非长期未响应项。无需要提醒维护者的历史遗留问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-08

> 数据来源: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) | 统计周期: 2026-09-07 ~ 2026-09-08

---

## 1. 今日速览

今日 LobsterAI 处于**高活跃合并节奏、低社区互动**的状态。过去 24 小时内 PR 更新达 9 条，其中 8 条已关闭/合并、1 条仍在开放（依赖机器人维护），但 Issues 侧完全静默（0 条更新）。核心焦点集中在 **OpenClaw v2026.8.1 升级后的兼容性修复**，共 4 条 PR 从插件恢复、提问协议、Provider 预装到迁移与打包启动逐一打补丁，呈现一次典型的"升级后集中修复"脉冲。与此同时，社区开发者贡献的 HTML 缩略图白屏与 Mermaid 渲染竞态修复、任务优先排序与网格分组折叠等功能性 PR 也已合入，产品在成品展示与任务组织上的完成度有明显提升。需注意：今日无新版本发布，且所有合并 PR 均无评论互动，社区讨论热度偏低。

---

## 2. 版本发布

今日无新版本发布（Releases: 0 个）。

---

## 3. 项目进展

今日合入 8 条 PR（1 条仍开放待合并），整体以 **OpenClaw 2026.8.1 升级后稳定性修复**与 **OpenClaw 生态兼容增强**为主线：

### 🔧 OpenClaw 2026.8.1 升级兼容修复（核心工作）

| PR | 内容 | 影响面 |
|---|---|---|
| [#2628](https://github.com/netease-youdao/LobsterAI/pull/2628) | 恢复钉钉与 Lark 插件兼容。修复 Windows Jiti loader 下 `Cannot use 'import.meta' outside a module` 错误及 Lark 失败问题 | 插件层 |
| [#2627](https://github.com/netease-youdao/LobsterAI/pull/2627) | 适配原生 `ask_user` 提问协议——升级后该请求会静默等待而不弹桌面对话框，现将其接入桌面提问 UI，并隐藏推荐后缀 | 交互层 |
| [#2626](https://github.com/netease-youdao/LobsterAI/pull/2626) | 预安装 8 个外部 Provider 插件。升级后添加 Qwen 会因 `requires capability consent` 终止网关，即使主模型未变 | 网关/Provider 层 |
| [#2625](https://github.com/netease-youdao/LobsterAI/pull/2625) | 稳定升级迁移与打包后网关启动：修复旧会话迁移、Agent 配置同步、打包后 SDK 解析问题，防止配置被拒引发无效重启，并缩减 Windows runtime 体积 | 核心运行时 |

### 🎨 渲染与产物展示优化

| PR | 内容 |
|---|---|
| [#2624](https://github.com/netease-youdao/LobsterAI/pull/2624) | 修复 HTML 缩略图白屏与 Mermaid 预览渲染竞态（含父子帧代次校验、CSS 动画有界等待、缓存版本隔离、Mermaid 任务/容器隔离、错误恢复及中英文提示，并补充回归测试与设计文档） |
| [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) | 支持任务优先排序与网格分组折叠（按最近更新时间组织产物、任务组/组内文件独立分页、会话变更通知、滚动位置恢复，协议版本校验，折叠控件样式与无障碍优化；另修复 macOS 开发模式下网关多余 Dock 图标） |

### 🪟 Windows 安装体验

| PR | 内容 |
|---|---|
| [#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) | NSIS 对话框改用现代 CJK UI 字体（覆盖 SimSun/PMingLiU/MS PGothic/Gulim），修复 DPI 感知安装器中文字体锯齿问题 |

**综合判断：** 项目正围绕 OpenClaw 上游升级完成一轮系统性适配（插件、协议、Provider、迁移、分发），同时渲染与产物管理侧的稳定性与产品化能力同步推进。整体项目健康度良好，修复响应集中且快速。

---

## 4. 社区热点

**今日社区互动冷淡**——9 条活跃 PR 与 0 条 Issue 更新中，均无评论与 👍 反应，缺乏可量化的讨论热点。

值得关注的是 [#2628](https://github.com/netease-youdao/LobsterAI/pull/2628)、[#2627](https://github.com/netease-youdao/LobsterAI/pull/2627)、[#2626](https://github.com/netease-youdao/LobsterAI/pull/2626)、[#2625](https://github.com/netease-youdao/LobsterAI/pull/2625) 四条 PR 从数量上构成今日最集中的工作簇，全部指向 **OpenClaw v2026.8.1 升级后各自独立暴露的兼容性缺陷**：钉钉/Lark 插件启动失败、ask_user 提问静默等待、Qwen Provider 添加即网关终止、旧会话迁移阻塞启动。四个问题发生在不同模块，却源于同一次升级，反映用户对**升级平滑性**的潜在诉求——升级不应破坏既有插件、交互与 Agent 配置。此类修复通常在升级报告集中涌出后由维护团队连批处理，社区侧的真实声音更可能在 Issue 中沉淀，而今日 Issue 零更新，暂无直接用户原声可引用。

---

## 5. Bug 与稳定性

今日报告的稳定性问题全部来自合并 PR 的修复描述，无新开 Bug Issue。按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| **高** | **升级后添加 Qwen 即可终止网关**（`requires capability consent`），即使主模型未变 [#2626](https://github.com/netease-youdao/LobsterAI/pull/2626) | 已有 fix PR，已合入 |
| **高** | **旧会话迁移 / Agent 配置同步 / 打包后 SDK 解析可阻止网关启动**，且配置被拒触发无效重启 [#2625](https://github.com/netease-youdao/LobsterAI/pull/2625) | 已有 fix PR，已合入 |
| **中** | **原生 ask_user 请求静默等待，不弹出桌面对话框** [#2627](https://github.com/netease-youdao/LobsterAI/pull/2627) | 已有 fix PR，已合入 |
| **中** | **钉钉在 Windows Jiti loader 下报 `Cannot use 'import.meta' outside a module`，Lark 插件同步失败** [#2628](https://github.com/netease-youdao/LobsterAI/pull/2628) | 已有 fix PR，已合入 |
| **中** | **HTML 缩略图白屏**（截图未完成即裁剪、无限 CSS 动画阻塞、缓存复用旧白图）[#2624](https://github.com/netease-youdao/LobsterAI/pull/2624) | 已有 fix PR，已合入 |
| **中** | **Mermaid 预览渲染竞态**（节点误删、过期结果覆盖、错误恢复缺失）[#2624](https://github.com/netease-youdao/LobsterAI/pull/2624) | 已有 fix PR，已合入 |
| **低** | **Windows 安装程序 CJK 字体锯齿**（NSIS 内置位图字体）[#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) | 已有 fix PR，已合入 |
| **低** | **macOS 开发模式下网关显示多余 Dock 图标** [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) | 已有 fix PR，已合入 |

值得肯定：今日所有已报告的 Bug 均在当日完成修复与合入，无遗留未处理的稳定性问题。

---

## 6. 功能请求与路线图信号

今日无新开 Issue、无新功能请求。但从合并的 PR 中可识别出以下产品方向信号：

| 信号 | 来源 PR | 可能进入下一版本的能力 |
|---|---|---|
| **会话 Fork** | [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) | 用户可从详情页 ⋯ 菜单对任意 cowork 会话创建分支副本，便于在同一会话中探索不同后续方向。该 PR 已由 vdorchan 于 2026-03-31 提出、今日关闭，功能已落地或接近落地 |
| **本地产物管理体系化** | [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) | 按任务最近更新时间组织本地产物、任务组/组内文件独立分页、预览展开/折叠、滚动位置恢复——产物浏览从简单列表走向结构化任务组织 |
| **制品渲染质量工程化** | [#2624](https://github.com/netease-youdao/LobsterAI/pull/2624) | HTML 缩略图缓存版本独立化 + Mermaid 渲染生命周期隔离，表明制品预览从"能用"走向"可靠" |
| **外部 Provider 预制** | [#2626](https://github.com/netease-youdao/LobsterAI/pull/2626) | 随上游将 Provider 改为外部分发，LobsterAI 选择预装 8 家受支持 Provider，降低用户添加模型时的配置摩擦 |
| **多 Agent 配置平滑同步** | [#2625](https://github.com/netease-youdao/LobsterAI/pull/2625) | 显式输出 `agents.entries` 与 ownership、保留各 Agent 的 workspace/系统提示，升级后配置一致性成为一等公民 |

---

## 7. 用户反馈摘要

今日 **Issues 零新增、零评论互动**，PR 评论数均为 undefined（无评论），无法从今日数据中提炼真实的用户痛点原声。合并 PR 的摘要中提到的具体失败场景（钉钉 `import.meta` 报错、ask_user 静默等待、Qwen 添加即终止网关、旧会话迁移阻塞启动、HTML 缩略图白屏）**可间接视为用户实际遭遇问题的浓缩**——它们来自真实使用环境中的复现，而非理论与推测。若需完整的用户情感与诉求分析，建议在 Issue 互动恢复后补采。

---

## 8. 待处理积压

| 项目 | 说明 | 优先级提示 |
|---|---|---|
| **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)（OPEN）** | dependabot 提交的 electron 与 electron-builder 依赖批量升级 PR，创建于 2026-04-02，**已开放 159 天**未合并，最近更新于 2026-09-07 | 版本跨度已超 5 个月，Electron 主版本跳跃可能引入破坏性变更，建议维护者评估升级窗口并合并或关闭，避免依赖长期滞后累积迁移成本 |
| **[#1159](https://github.com/netease-youdao/LobsterAI/pull/1159)（CLOSED）** | vdorchan 提交的 cowork Session Fork 功能 PR，创建于 2026-03-31，**历时 161 天**后于今日关闭。虽然已关闭，但该功能对多方向探索场景有明确价值 | 建议确认功能是否完整合入或以何种形式落地，避免社区贡献者的工作成果悬空 |

> 除上述两项外，今日无长期未响应的新积压 Issue/PR。项目整体 backlog 健康。

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

# CoPaw 项目动态日报（2026-09-08）

## 1. 今日速览

CoPaw 项目今日活跃度中等偏高：24小时内共产生 **73 条 Issue/PR 更新**，其中新开/活跃 Issue 18 条（关闭 15 条），PR 更新 40 条（待合并 17 条，已合并/关闭 23 条）。项目处于 **v2.2.0 稳定版的持续维护期**，没有新版本发布。今日无破坏性变更或风险信号。社区讨论集中在 Gemini 模型兼容性回归、MCP 协议兼容性、上下文压缩策略等 AI Agent 核心工程问题上。值得注意的是，**与 v2.2.0 直接相关的 bug 报告仍占一定比例**，且今日关闭了大量此前积压的 bug（15 个 Issue，23 个 PR），说明维护者正在系统性清理存量问题。

---

## 3. 项目进展

今日合入主分支的重要 PR 约 23 个，主线进展如下：

- **[PR #7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) — Console 侧边栏与设置体验重设计（已合并）**：替换原有侧边栏和设置页面，持续保留插件注册表和扩展槽位。这是 9 月 2 日提交后今日合入的较大用户界面改动。
- **[PR #7521](https://github.com/agentscope-ai/QwenPaw/pull/7521) — 上下文压力下折叠已消费的思维链（已合并）**：在 Scroll 上下文压力下折叠已消费的活跃轮次 thinking，不修改持久化历史，提升长对话稳定性。
- **[PR #7526](https://github.com/agentscope-ai/QwenPaw/pull/7526) — 新增受保护执行契约（已合并）**：为工作区 prompt 文件引入受保护执行、澄清与授权契约，将内置技能与工具指导从动态环境上下文迁移到独立 prompt 模块。
- **[PR #7598](https://github.com/agentscope-ai/QwenPaw/pull/7598) — Shell 子进程分离控制台输入（已合并）**：修复 Windows 上 shell 命令读取 stdin 导致命令管道阻塞的问题（对应 Issue #7554）。
- **[PR #7627](https://github.com/agentscope-ai/QwenPaw/pull/7627) — MCP 传统握手仲裁 401 发现探测（已合并）**：修复仅支持旧协议的 MCP 端点在 2.2.0 上从可用回归为"需要 OAuth"的问题（对应 Issue #7620）。
- **[PR #7482](https://github.com/agentscope-ai/QwenPaw/pull/7482) — Agent Kanban 中英文多语言支持（已合并）**。
- **[PR #7605](https://github.com/agentscope-ai/QwenPaw/pull/7605) — 插件管理器修复（已合并）**：保留插件安装后的浏览上下文、检测官方与社区插件的可用更新、支持单独与批量更新（修复 Issue #7582）。
- **[PR #7578](https://github.com/agentscope-ai/QwenPaw/pull/7578) — _drain() 工具异常日志（已合并）**：首次贡献者 kabishou11 修补工具协调器吞异常栈的 bug（对应 Issue #7572），操作员现可通过 logger.exception 定位故障。
- **[PR #7526](https://github.com/agentscope-ai/QwenPaw/pull/7526) — 受保护执行契约（已合并）**。
- **[PR #7616](https://github.com/agentscope-ai/QwenPaw/pull/7616) — 内存后端 ADBPG 与 PowerContext 插件化迁移（待合并）**。
- **[PR #7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) — 新增 OpenViking 长期记忆后端（待合并，首个贡献者）**。

**总结：** 项目已从 2.2.0 发布后的纯修 bug 转入"修复 + 体验优化 + 插件生态构建"阶段。Console 侧 UI/UX 整合与内存后端插件化迁移是当前的大方向，多个首次贡献者 PR 被合入也说明社区参与门槛在降低。

---

## 4. 社区热点

今日社区最关注的 Issue/PR（按讨论热度排序）：

**[#7579 | [Bug] 模型的回复意外从上下文中丢失](https://github.com/agentscope-ai/QwenPaw/issues/7579)**（评论 6，活跃至 9/8）
- 用户报告模型回复已持久化但后续请求缺失——模型"看不到自己刚说的话"，表现为空响应。涉及 QwenPaw 2.2.0 desktop，经 PYZ 解包验证了版本信息。回应者较多，说明该问题已有不止一个用户遇到。

**[#7363 | 同步调用阻塞事件循环且 timeout 失效](https://github.com/agentscope-ai/QwenPaw/issues/7363)**（评论 5，活跃至 9/8）
- Windows 上 QwenPaw Desktop 无响应 118–135 秒，同步阻塞事件循环且 timeout 不触发。创建于 8/27，仍开放中——**已积压 12 天**。

**[#7597 | Tool 返回的二进制文件以裸 base64 传递触发 400](https://github.com/agentscope-ai/QwenPaw/issues/7597)**（已关闭，评论 5，创建到关闭仅 1 天）
- 工具返回的图片/PDF 二进制以 `"type":"data"` 裸 base64 发送时触发 400 "file must have a file_id or file_data"。**封闭速度快说明维护者响应及时**。该 issue 由 AI agent 代笔——值得关注的一个新趋势。

**[#7469 | ReMe 后台 embedding 任务因 `as_embedding:default accessed before start()` 失败](https://github.com/agentscope-ai/QwenPaw/issues/7469)**（已关闭）
- ReMe 长期记忆在 OpenAI 兼容 embedding 后端下后台任务失败，今日已关闭。

**[#7576 | RetryChatModel 硬编码 32768 context_size 导致 CONTEXT_UNFIT](https://github.com/agentscope-ai/QwenPaw/issues/7576)**（评论 5，仍开放）
- v2.1.0 到 v2.2.0 全版本受影响，硬编码的 32768 context_size fallback 导致 >31130 tokens 即触发 CONTEXT_UNFIT。

**[#7589 | Heartbeat cron session 重复消息堆积反馈循环](https://github.com/agentscope-ai/QwenPaw/issues/7589)**（评论 4）
- 用户报告 QwenPaw 2.0.1 及 main 分支均存在心跳 cron 反馈回路导致重复消息堆积。

**[#6541 | Scroll 上下文压缩在 DeepSeek 上反复触发 MODEL_EXECUTION_ERROR](https://github.com/agentscope-ai/QwenPaw/issues/6541)**（已关闭）
- 压缩块被注入为 `role="user"` 而非 `role="system"`——今日已关闭，说明该回归已修复或已给出绕行方案。


## 5. Bug 与稳定性

### 高严重度

**[#7625 | Gemini 后台工具完成返回 400 "Requests ending with a model turn are not supported"](https://github.com/agentscope-ai/QwenPaw/issues/7625)**（仍开放）
- v2.2.0 中，Gemini 后台工具调用完成后请求立即失败，根因是已完成的离载工具通知被附加为 `assistant` 消息，使 Gemini 收到末尾模型轮次的非法请求。
- **已有对应修复 PR [#7629](https://github.com/agentscope-ai/QwenPaw/pull/7629)（标记 DO NOT MERGE）**

**[#7579 | [截图未提供] 模型"看不到自己刚说的话"（空响应）](https://github.com/agentscope-ai/QwenPaw/issues/7579)**（仍开放，本日评论最多）
- 回复已持久化但后续请求缺失，QwenPaw 2.2.0 Desktop。无 fix PR 关联。

**[#7363 | 同步调用阻塞事件循环且 timeout 失效（Windows 118-135 秒无响应）](https://github.com/agentscope-ai/QwenPaw/issues/7363)**（仍开放，积压 12 天）
- QwenPaw Desktop 2.1.1b1 在 Windows 上冻结 118-135 秒。无 fix PR。

### 中严重度

**[#7619 | Windows 11 下安装 2.2.0 后对话无故结束（qwen-35B-A3B-FP8 模型）](https://github.com/agentscope-ai/QwenPaw/issues/7619)**（仍开放）
- 创建于今日，无后续信息。用户提供了截图协助调查。

**[#7607 | Cursor ACP Runner 违反 JSON-RPC 协议导致 WritableIterable is closed](https://github.com/agentscope-ai/QwenPaw/issues/7607)**（仍开放）
- macOS 上 Cursor ACP 模式扩展方法处理违反 JSON-RPC 导致流崩溃。无 fix PR。

**[#7622 | v2.2.0 后台弹窗背景变透明、遮罩不生效](https://github.com/agentscope-ai/QwenPaw/issues/7622)**（仍开放）
- Linux 上加载页面的弹窗背景全透明、遮罩不生效。已确认与第三方插件无关，是官方版本自身的样式问题。属于 UI 回归（低功能影响，但用户观感明显）。

**[#7576 | RetryChatModel 硬编码 32768 context_size 导致 CONTEXT_UNFIT](https://github.com/agentscope-ai/QwenPaw/issues/7576)**（仍开放）
- 影响所有已发布版本。该 Issue 会长期影响所有上下文窗口 >32k 的模型用户。

### 低严重度（均为已关闭，修复显著）

**[#7597 | 工具返回图片/PDF 二进制以裸 base64 触发 400](https://github.com/agentscope-ai/QwenPaw/issues/7597)**（已关闭）
**[#7620 | MCP HTTP 401 误导用户为"需要 OAuth"](https://github.com/agentscope-ai/QwenPaw/issues/7620)**（已关闭，并合入 PR #7627）
**[#7572 | 工具派发层吞掉异常栈](https://github.com/agentscope-ai/QwenPaw/issues/7572)**（已关闭，合入 PR #7578）
**[#7554 | Windows shell 子进程继承控制台 stdin 导致 cmd 挂死](https://github.com/agentscope-ai/QwenPaw/issues/7554)**（已关闭，合入 PR #7598)


## 6. 功能请求与路线图信号

**[#7628 | 上下文压缩应基于完整 provider 请求做预算感知 + 添加安全的活跃轮次溢出处理](https://github.com/agentscope-ai/QwenPaw/issues/7628)**（新开，评论 2，enhancement）
- 应将触发和最终预算基于实际发送给 provider 的完整请求而非当前可见上下文。**这是对 scroll 压缩的架构性改进请求**，与今日合入的 [PR #7521](https://github.com/agentscope-ai/QwenPaw/pull/7521)（thinking 折叠）和 [PR #7629](https://github.com/agentscope-ai/QwenPaw/pull/7629)（Gemini 尾部模型轮次）方向一致——上下文管理是当前核心迭代领域。

**[#7583 | 增加与 AgentScope 社区的联动功能](https://github.com/agentscope-ai/QwenPaw/issues/7583)**（仍开放）
- 用户建议增加社区登录、邮箱、快速反馈通道，并用 QwenPaw 本身的能力细化 Bug 反馈。QwenPaw 作为 agentscope-ai 组织下的项目，用户希望拉到 AgentScope 社区生态中——**产品向的信号**。

**[#7479 | 频道中拼写错误的命令仍被转发给 agent](https://github.com/agentscope-ai/QwenPaw/issues/7479)**（仍开放）
- QQ（等）频道收到错误拼写命令时仍作为消息发给 agent，用户希望系统丢弃错误命令并告知。属于消息通道稳健性增强。

**[PR #7616](https://github.com/agentscope-ai/QwenPaw/issues/7616) — ADBPG 与 PowerContext 从核心迁移为插件**（待合并）：将两个记忆后端移出 QwenPaw 核心，注册为独立插件。**内存后端插件化是明确路线**。

**[PR #7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) — 新增 OpenViking 长期记忆后端**（待合并, first-time-contributor）：参照 #7252 的 REST 基础范围、实现 BaseMemoryManager 接口与 MemoryMiddleware 生命周期。尚未审查。

**[PR #7631](https://github.com/agentscope-ai/QwenPaw/pull/7631) — Hub CLI 请求认证到当前本地运行时**（待合并）：修复 Hub 沙箱内 `qwenpaw agents list` 等 CLI 命令 HTTP 401。

**路线图判断：** 上下文/记忆管理（#7628、#7521、#7616、#7613）、MCP 兼容层修复（#7627）、以及 Console 移动端体验([PR #7623](https://github.com/agentscope-ai/QwenPaw/pull/7623)）是最可能进入下一版本的三条主线。社区联动（#7583）可能进入产品讨论。

---

## 7. 用户反馈摘要

**满意度信号：**

- 维护者今日关闭了大量 bug（15 个 Issue、23 个 PR），且多为创建于 8 月初至 9 月初的存量问题（#6541、#6885、#7554、#7572 等）。用户侧可见的 bug 修复速度在加快。
- 从 #6885（Console UI 中文输入法崩溃）等多条历史问题到 PR #7598 等合并来看，"Shell/控制台类问题回复后很快有补丁跟进"的用户体验在加强。

**痛点信号：**

- **长对话与上下文管理**（#7579、#7576、#7625）是当前**最棘手的一类**——发生在模型不可用/回复消失，直接影响生产力。部分问题跨 v2.0 起持续多版本。
- **Windows 平台体验**仍然是重灾区：#7363（事件循环冻结）、#7619（Windows 11 对话无故结束）、#7554（cmd stdin 挂死）均与 Windows 相关。说明 Windows 下的进程/线程模型仍有稳定性问题。
- **MCP 老协议兼容**：#7620 显示 2.2.0 相对旧版**出现回归**——用户对回归的容忍度通常远低于新引入的 bug。建议关注升级用户的平滑迁移。
- **新问题浮现**：多位用户提到模型运行时代码层的问题已从前几周的多数被修复，"部署/集成层"bug（如 #7619、#7622、#7607）逐步浮出水面，反馈范围从"底层"转移到"上层"。

---

## 8. 待处理积压

**长期未响应的活跃 Issue：**

- **[#7363 | 同步调用阻塞事件循环且 timeout 失效（Windows，已开放 12 天，5 条评论）](https://github.com/agentscope-ai/QwenPaw/issues/7363)**
  118-135 秒 UI 冻结，属于高影响 bug，至今尚无修复 PR 关联。建议优先分配。

- **[#7479 | 拼写错误的命令仍被转发给 agent（已开放 7 天）](https://github.com/agentscope-ai/QwenPaw/issues/7479)**
  涉及消息频道（QQ 等）的命令路由逻辑，对使用 bot 频道的用户影响有限但行为不符合预期。

- **[#7583 | 社区联动功能（AgentScope 登录/邮箱/反馈）](https://github.com/agentscope-ai/QwenPaw/issues/7583)**
  产品向 feature 请求，非紧急，但涉及跨项目联动，建议在路线图讨论中明确取舍。

**中长期审查中的 PR：**

- **[#6399 | ReMeLightMemoryCard 增加 reranker UI 配置面板（已开放 47 天，仍标记 Under Review）](https://github.com/agentscope-ai/QwenPaw/pull/6399)**
  在 Agent Config 下为 reranker 后端提供可视化配置面板。创建于 7/23，已在审查池中滞留一个多月。考虑 #7616（内存后端插件化）正在推进中，此项是否应等待插件化完成后再合入，需要维护者明确。

**其他注意：**

- **[#7629 | Gemini 后台工具完成修复 PR 被标记 DO NOT MERGE](https://github.com/agentscope-ai/QwenPaw/pull/7629)**
  该 PR 已确认根因且有补丁，但被作者自己标记为 DO NOT MERGE。配套 Issue #7625 仍开放。建议维护者沟通并推动合入或分发修复 —— 这属于影响 Gemini 用户正常使用的回归级 bug。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 — 2026-09-08

## 1. 今日速览

ZeptoClaw 过去 24 小时活跃度中等：3 条 Issue 更新（1 条开放、2 条关闭）、1 条 PR 合并关闭、无新版本发布。项目当日重点集中在安全加固收尾——PR #673 一举合并了 #651（依赖漏洞）与 #652（密钥文件权限）两个安全修复，对应两条 Issue 同日关闭，安全积压清零。目前唯一活跃 Issue #666 是 P2 高优先级的内存系统持久化增强设计，处于方案讨论早期阶段。项目整体处于“安全基线巩固 + 新能力规划启动”的过渡期，健康度良好。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

- **[PR #673 — fix(security): harden secret storage and dependencies（已合并）](https://github.com/qhkm/zeptoclaw/issues/673)**：将 ZeptoClaw 自身目录设为 `0700`、密钥文件（`config.toml`、`panel.token`）写入权限收紧为 `0600`，并引入依赖安全修复（h2、quick-xml、lopdf、bcrypt、quinn-proto、crossbeam-epoch 共 7 个 RustSec 公告）。该 PR 一次性关闭 #671/#672 两条安全 Issue，在「零容忍依赖安全策略」下恢复了 `cargo deny check advisories` 的通过状态。安全基线自 8 月 31 日报告以来耗时一周完成闭环，多用户机器上的本地凭据泄露面已封堵。

## 4. 社区热点

- **[Issue #666 — Durable cross-session recall and transactional memory writes](https://github.com/qhkm/zeptoclaw/issues/666)**（1 条评论，今日唯一活跃 Issue）：围绕记忆系统持久化的设计讨论。核心对比点在于 ZeptoClaw 的选择性检索（固定条目 + 2000 字符预算内 ≤5 条查询匹配）相比 Hermes 的常驻 profile 更省成本，作者认为应予以保留，在此基础上扩展跨会话持久化与事务性写入。虽评论量不大，但涉及记忆架构的演进方向，值得维护者重点关注。

## 5. Bug 与稳定性

今日无新报告 Bug。此前两项安全类缺陷已随 PR #673 关闭：

| 严重程度 | Issue | 状态 |
|---|---|---|
| 高（安全/权限） | [#652 — 密钥文件未设 0600 权限（config.toml、panel.token）](https://github.com/qhkm/zeptoclaw/issues/652)：多用户机器上其他本地用户可读取明文 API 密钥与 bearer token | ✅ 已修复（PR #673） |
| 高（安全/依赖） | [#651 — 7 个 RustSec 已知漏洞告警（h2、quick-xml、lopdf、bcrypt、quinn-proto、crossbeam-epoch）](https://github.com/qhkm/zeptoclaw/issues/651)：导致 `cargo deny` 零容忍策略下 CI 失败 | ✅ 已修复（PR #673） |

两条安全 Issue 均从 8/31 报告到 9/8 修复关闭，历时 8 天，响应及时。

## 6. 功能请求与路线图信号

- **[Issue #666 — 跨会话持久化记忆与事务性内存写入](https://github.com/qhkm/zeptoclaw/issues/666)** 是当前唯一的开放功能需求（P2 高优先级）。Issue 引用了此前多次 exec 与「§2 Memory and learning system」章节，说明这是作者主导的路线图内项目而非外部请求。核心诉求：在保留现有低成本选择性检索的前提下，为记忆系统增加跨会话持久化与事务性写入保障。因作者本人（qhkm）发起且优先级高，**大概率纳入下个版本规划**，当前阶段特征为设计文档先行、实现尚未启动。

## 7. 用户反馈摘要

- **维护者（qhkm）在 Issue #666 中表达了对现有架构的明确设计取向**：认为 ZeptoClaw 的选择性检索机制（pinned entries + ≤5 条查询匹配 + 2,000 字符预算）优于 Hermes 的常驻 profile 方案，因其更节省 token 成本，应当保留——这反映了项目对「低开销记忆」的路线坚持。
- 安全 Issue #651、#652 均来自贡献者 morler（8/31 报告），无用户负面反馈记录。

## 8. 待处理积压

- **当前无长期未响应的高优先级积压**。唯一开放 Issue #666 创建于 9/5、最后更新于 9/8，处于正常活跃节奏，未超期。
- 依赖安全公告（#651）自 9/5 起在 PR #673 中修复后已于今日关闭，债务清零。建议后续持续关注 cargo-audit 定期扫描节奏。

---

**项目健康度速评**：安全债务出清（8 天响应周期）、无 P0 级 Bug 遗留、维护者路线驱动明确（Issue #666 由项目负责人发起规划）；风险点在于 PR #673 涉及 7 个底层依赖升级，建议观察下一个发布周期内是否有回归报告。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-08

## 今日速览

过去 24 小时 ZeroClaw 项目保持高度活跃：共新增或更新 29 条 Issues（其中 24 条活跃、5 条关闭），50 条 Pull Requests 处于待合并状态（今日无合并/关闭）。值得关注的是，**今日没有产生任何被合并或关闭的 PR**，存在合并通道停滞的信号。社区讨论热度集中在 Telegram 多图消息处理（#5514）、ACP 会话切换故障（#9333）、PR 评审流程规范（#10366）等中长期遗留问题上。多个资深贡献者（IftekharUddin、JordanTheJet）的 PR 均标记为 `needs-author-action`，有堆积风险。无新版本发布。

---

## 版本发布

过去 24 小时无新版本发布。

---

## 项目进展

**⚠️ 关键信号：今日 50 条 PR 全部处于待合并状态，0 条被合并或关闭，合并通道完全停滞。**

目前积压中最值得关注的 PR 集群（均来自资深贡献者 IftekharUddin，全部标记 `needs-author-action`）：

- **[#9221] feat(eval): baseline files with paired regression gating and capability tracking** — 引入 Git 版本化的 eval 基线与回归门禁，是整个 eval 重构集群的地基 PR（依赖 #9220），已搁置超过 7 周。
- **[#9223] feat(eval): junit xml report format** — 为 CI 测试报告器增加 `--format junit` 输出，基于 #9221 堆叠。
- **[#9224] feat(eval): seed and grade isolated case memory** — 为 live eval 增加结构化内存种子与精确期望断言，叠堆在 #9221/#9223 之上。
- **[#9225] test(eval): add boundary-backed replay cases** — 边界驱动的回放测试用例，依赖 #9212。

此外，JordanTheJet 的安全加固系列 PR（#10308 共享工作区读权限门禁、#9839 不可逆破坏性命令拦截、#10210 agent-browser 子进程超时）同样处于 `needs-author-action` 停滞状态。以上 PR 若持续得不到作者响应或维护者介入，eval 能力迭代和安全加固两条主线都将被阻塞。

**今日新提交的值得关注的 PR：**

- **[#10679] feat(tools): add Keenable web search provider**（新贡献者 ilya-bogin-keenable）— 新增 Keenable 作为 `web_search_tool` 的第三方搜索提供商，扩展工具生态。
- **[#10680] chore(deps): bump the rust-all group with 44 updates**（dependabot）— 44 个 Rust 依赖批量更新，标记 `needs-maintainer-review`，需维护者及时处理以保持依赖新鲜度。

---

## 社区热点

| 排名 | Issue/PR | 评论数 | 主题 |
|------|----------|--------|------|
| 1 | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) `[Bug]` | 7 | Telegram 批量图片被拆分为多次 LLM 请求 |
| 2 | [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) `[RFC]` | 6 | PR 评审证据、新鲜度警告与作者行为边界澄清 |
| 3 | [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) `[Bug]` | 5 | ACP 会话切换后失败的 turn 消失 |

**热点分析：**

1. **#5514（存活 5 个月）**是社区最持久的痛点：Telegram 渠道将多张图片拆分为多次独立的 LLM 请求，导致 agent 无法将媒体组作为多模态整体理解。该 Issue 已被标记 `status:in-progress` 和 `no-stale`，说明有维护者在推进，但历时 5 个月仍未解决，社区耐心在被消耗。

2. **#10366（RFC）**讨论 PR 评审流程的规范化——包括新增 "expedited merge lane"（快速合并通道）提案，允许在已有非作者 Core 成员批准时加快合并。该 RFC 被标记 `risk:high`，结合今日 50 条 PR 零合并的现状，社区对合并效率的关注有着明确的现实支撑。

3. **#9333（S1 - workflow blocked）**反映的是 ACP 场景下的严重数据丢失问题：provider 报错后已渲染的用户消息和工具活动在切换会话时消失。标记 `status:in-progress` 但已存活超过 6 周。

---

## Bug 与稳定性

按严重程度排列：

### 🔴 S1 — 工作流阻断

| Issue | 描述 | 状态 | Fix PR |
|--------|------|------|--------|
| [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | ACP turn 在 provider 报错后消失（切换会话时已出现的消息和工具活动丢失） | `in-progress`，存活 6 周+ | 无 |
| [#10693](https://github.com/zeroclaw-labs/zeroclaw/issues/10693)（已关闭） | ZeroCode 显示 Connected 时静默忽略 Enter 提交，S1 工作流阻断 | — | 已关闭待验证 |

### 🟠 S2 — 行为降级

| Issue | 描述 | 状态 |
|--------|------|------|
| [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) | ZeroCode 在 prompt 完成先于 TurnComplete 到达时重复渲染同一条回复 | `in-progress` |
| [#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688)（已关闭） | WhatsApp Web 语音消息无法转写：channel 构建时未注入转写 provider | — |
| [#10689](https://github.com/zeroclaw-labs/zeroclaw/issues/10689) | Telegram 语音回复以 `[` 开头（ElevenLabs v3 音频标签）时被静默丢弃 | `accepted` |

### 🟡 S3 — 轻微问题

| Issue | 描述 | 状态 |
|--------|------|------|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Telegram 多图被拆分多次请求 | `in-progress` |
| [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670)（已关闭） | `heartbeat.target` 拒绝 channel 实例复合键（`<type>.<alias>` 格式） | — |
| [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) | Integrations 页面 "Configure" 链接将 display name slug 化而非使用 family key（Z.AI → 404） | `accepted` |
| [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326)（已关闭） | Reliable streaming 报错时显示请求的 model 而非实际服务的 pinned model | — |

### 📊 系统性问题（值得关注）

- **[#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674)（P1, accepted）**：历史裁剪在达到上限即停止，tool-heavy 会话每几轮就重新裁剪一次，**导致 prompt caching 失效**。这是影响性能和成本的核心缺陷。
- **[#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702)（P3）**：与 #10674 同源的 token-budget 裁剪同样存在滞后间隙问题。
- **[#10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660)（已关闭）**：为 Anthropic 缓存增加第三个断点，使 turn 边界 miss 时回退到历史而非 system prompt——说明 #10674 的修复方向已在酝酿中。
- **[#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)**：`costs.jsonl` 中所有记录共享 daemon 生命周期的 session_id，导致无法按会话拆分成本——影响用户成本归因。

---

## 功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 信号强度 |
|----------|------|------|----------|
| [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708) | Feature | OpenAI Responses WebSocket 上支持 active-response steering（用户可实时纠正运行中的 Astra 回复） | 中 — 与运行时架构深度耦合 |
| [#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707) | Feature | 通过 OpenAI Responses 支持有界程序化工具调用（hosted programmatic tool protocol） | 中 |
| [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706) | Feature | 在 OpenAI Responses API-key 和 Codex 订阅适配器间保持一致的不透明推理状态保留与流式回放 | 中 |
| [#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641) | Enhancement | Web 端 Cron 调度字段改为逐个字段输入（客户端校验 + 引导） | 中 — UI 明确改进，落地成本低 |
| [#9727](https://github.com/zeroclaw-labs/zeroclaw/issues/9727) | Epic | 从 zerocode 侧边栏并行运行和监控多个 agent | 高 — 属于产品形态升级 |
| [#10709](https://github.com/zeroclaw-labs/zeroclaw/issues/10709) | Docs | 补充 Astra 的 API-key 和 Codex 订阅 provider 配置文档 | 低 — 文档补齐需求 |
| [#10679](https://github.com/zeroclaw-labs/zeroclaw/pull/10679) | PR | Keenable web search 提供商 | 中 — 新工具 provider PR，已提交待审 |

**下一版本纳入可能性判断：** #10641（cron 字段级输入）由于改动范围明确、不涉及核心架构，最有可能被快速采纳。#10706-#10708 三个 OpenAI Responses 相关增强来自同一作者（IftekharUddin，资深贡献者），可能组成一个 Responses 适配器能力补齐的 PR 集群进入后续版本。#9727 多 agent 并行监控作为 Epic 更可能是中期路线图目标而非下一版本。PR #10679（Keenable）需要维护者对新外部服务进行安全与质量审查。

---

## 用户反馈摘要

- **Telegram 多图场景诉求强烈**（#5514）：用户发送多张图片期望 agent 综合理解，但当前被拆分为多次孤立请求，破坏了多模态上下文。该 Issue 已存活 5 个月且有 7 条评论，是跨渠道体验的核心短板。
- **ACP 会话数据丢失令用户困扰**（#9333）：S1 级问题——失败的 turn 在切换会话后消失，用户无法审查或重试出错的交互，严重影响 Code/ACP 场景下的信任度。
- **PR 合并效率引发社区关注**（#10366）：CRC 明确提出需要澄清评审证据标准与作者/维护者之间的行动边界，并提案增加快速合并通道，反映了贡献者对合并周期过长的焦虑。
- **成本与性能的双重抱怨**（#10674、#10700）：裁剪策略破坏 prompt caching 直接推高 API 成本；成本记录无法按会话拆分则让用户无法做精细的成本归因和优化——这两点可能影响付费用户的留存意愿。
- **新增的多渠道 Bug 集中在语音场景**（#10688/#10689 WhatsApp 与 Telegram）：语音作为 AI 助手的典型交互形态在多个渠道存在缺陷，建议作为渠道层质量优化的重点。
- **依赖更新积压**（#10680）：44 个 Rust 依赖等待维护者审阅，长期不处理将累积技术债与潜在 CVE 风险。

---

## 待处理积压

| 项目 | 类型 | 存活时长 | 状态 | 风险 |
|------|------|----------|------|------|
| [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) feat(eval): baseline + regression gating | PR | 7 周+ | `needs-author-action` | 阻塞整个 eval PR 集群（#9223/#9224/#9225） |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) Telegram 媒体组批量处理 | Issue | 5 个月 | `in-progress`，`no-stale` | 社区持久痛点，需要明确进展更新 |
| [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) ACP 会话切换丢失 turn | Issue | 6 周+ | `in-progress`，`no-stale` | S1 级，长期无 Fix PR |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) feat(anthropic): handle refusals with fallback notices | PR | 6 周+ | `needs-author-action` | XL 级 PR，涉及多模块，需及时跟进 |
| [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) feat(security): block irreversible destructive commands | PR | 4 周+ | `needs-author-action` | 安全增强停滞 |
| [#10308](https://github.com/zeroclaw-labs/zeroclaw/pull/10308) feat(config): gate shared workspace read access | PR | 2 周+ | `needs-author-action` | 安全策略改进停滞 |

---

*数据来源：[ZeroClaw GitHub 仓库](https://github.com/zeroclaw-labs/zeroclaw) · 统计窗口：2026-09-07 至 2026-09-08*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*