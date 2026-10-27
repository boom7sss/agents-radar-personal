# OpenClaw 生态日报 2026-08-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-12 02:25 UTC

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

# OpenClaw 项目动态日报 — 2026-08-12

## 1. 今日速览

过去 24 小时项目活跃度极高：共 500 条 Issue 更新（新开/活跃 383，关闭 117），500 条 PR 更新（待合并 279，合并/关闭 221），无新版本发布。社区讨论热度集中在**消息投递可靠性**与**会话状态一致性**上，讨论量最高的 [#121058](https://github.com/openclaw/openclaw/issues/121058) 已达 69 条评论，核心诉求是"已关闭问题仍在复发"，反映出用户对 Issue 关闭流程与实际修复效果之间落差的强烈不满。昨日 P0 级发布事故（[#121675](https://github.com/openclaw/openclaw/issues/121675)，beta 包缺失 companion 插件导致启动循环）已在今日关闭，应急响应速度较快。整体来看，项目迭代节奏快、社区参与度高，但 P1 级待修复问题积压较多且多数尚无 fix PR，维护者评审带宽是当前主要瓶颈。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共 221 个 PR 合并/关闭、117 个 Issue 关闭，以下为代表性的关键推进项：

**已合并/关闭的修复：**
- [#119528](https://github.com/openclaw/openclaw/pull/119528) [CLOSED] `fix(agents): timestamp recovered Claude CLI history` — Claude CLI 会话历史恢复时丢失持久化时间戳的问题，已由 clawsweeper 自动合并
- [#92201](https://github.com/openclaw/openclaw/issues/92201) [CLOSED] 嵌入运行器（Slack 插件）Anthropic thinking 签名重放无效、恢复包装器不触发的问题已关闭
- [#92076](https://github.com/openclaw/openclaw/issues/92076) [CLOSED] 子代理完成投递在请求方会话失效/转写锁定时失败的问题已修复
- [#92460](https://github.com/openclaw/openclaw/issues/92460) [CLOSED] 隔离 cron 完成播报丢弃显式 `delivery.channel` 的问题已解决
- [#96827](https://github.com/openclaw/openclaw/issues/96827) [CLOSED] `message_tool_only` 模式下代理不终止、产生自我回复级联的回归已修复
- [#89315](https://github.com/openclaw/openclaw/issues/89315) [CLOSED] gateway 堆内存无界增长导致 cgroup OOM 的长期问题已处理
- [#121675](https://github.com/openclaw/openclaw/issues/121675) [CLOSED] **P0 发布事故**：2026.8.1-beta.1 未同步发布 companion 插件导致锁步版本解析失败、启动收敛守卫引发不可恢复启动循环 — 已解决

**待合并 PR 中的高价值队列（当前共 279 个待合并）：**
- [#82572](https://github.com/openclaw/openclaw/pull/82572) `feat(queue): persist followup queues across gateway restarts` — 解决 gateway 重启丢失排队消息的问题（XL 规模，含 SQLite 迁移）
- [#122300](https://github.com/openclaw/openclaw/pull/122300) `fix(control-ui): keep usable multi-profile providers ready` — 多认证配置下 provider 被误报 Credentials rejected
- [#118579](https://github.com/openclaw/openclaw/pull/118579) `fix(discord): bind transcript capture to source account` — 多账号下 Discord 语音转写窜号问题
- [#120768](https://github.com/openclaw/openclaw/pull/120768) `feat(pairing): one-paste device pairing via oc-pair setup links` — 一站式设备配对

已就绪等待维护者 review 的 PR 共 8 个（#117321、#122300、#121994、#118579、#119356、#122296、#122355、#122380），另有 9 个处于"⏳ waiting on author"状态。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 核心诉求 |
|---|---|---|---|
| 1 | [#121058](https://github.com/openclaw/openclaw/issues/121058) Silent reply failures still recurring | 69 | 监控 cron 证明 #116277 关闭后故障仍持续发生，用户对"关闭即修复"失去信任 |
| 2 | [#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime voice unbounded state | 64 | 实时语音会话在慢速/突发 provider 行为下可无界保留 superseded consult 状态与 provider 帧 |
| 3 | [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to channels | 46 | 内部处理文本/错误处理叙述被路由到 Slack、iMessage 等渠道，UX 差且涉信息外泄风险 |
| 4 | [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 43 | 记忆投毒攻击防御：要求按来源（用户指令/网页抓取/第三方技能）标记记忆可信度 |
| 5 | [#92201](https://github.com/openclaw/openclaw/issues/92201) Anthropic thinking 签名重放无效 [CLOSED] | 23 | 嵌入运行器间歇性持久化无效 thinking 块，恢复包装器因错误文本泛化而不触发 |
| 6 | [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budget enforcement | 21 | 网关级每日/月成本上限，防止失控花费 |

**趋势判断**：讨论热度最高的议题不再是单纯的功能添加，而是**可靠性、安全边界与成本控制**——消息静默丢失、内部文本外泄、记忆投毒、预算失控，这标志着项目正从"功能扩展期"进入"企业级可信赖期"。

---

## 5. Bug 与稳定性

### 🔴 P0 — 发布事故（已解决）
- [#121675](https://github.com/openclaw/openclaw/issues/121675) [CLOSED] 2026.8.1-beta.1 发布缺少 companion `@openclaw/*` 插件，锁步版本解析使所有插件不可解析，启动收敛守卫导致不可恢复启动循环。**建议发布流程增加插件配套完整性检查**。

### 🟠 P1 — 高优先级（多数尚无 fix PR，风险集中）

**消息投递/丢失类：**
- [#121058](https://github.com/openclaw/openclaw/issues/121058) Silent reply failures 在 #116277 关闭后仍复发，无排队回复负载（69 评论）— **无 fix PR**
- [#84516](https://github.com/openclaw/openclaw/issues/84516) Codex 长回复在 ~1000-1100 字符处静默截断（`aborted:false`、`stopReason:null`）— **无 fix PR**
- [#97983](https://github.com/openclaw/openclaw/issues/97983) iOS/WebChat 消息追加到 transcript 但不触发回复 — **无 fix PR**
- [#87744](https://github.com/openclaw/openclaw/issues/87744) Codex Telegram 回合永不达到 `turn/completed`，群聊失效 — **无 fix PR**
- [#112668](https://github.com/openclaw/openclaw/issues/112668) `sessions_yield` abort-settle 超时仍丢弃子代理 announce — **无 fix PR**
- [#42820](https://github.com/openclaw/openclaw/issues/42820) Feishu 发文件被 poll schema 污染拦截 — **有 linked PR**

**会话状态类：**
- [#116201](https://github.com/openclaw/openclaw/issues/116201) 实时语音会话无界保留 provider/consult 状态（64 评论）— **无 fix PR**
- [#47975](https://github.com/openclaw/openclaw/issues/47975) 子代理会话完成后持久存在，主会话无响应 — **无 fix PR**
- [#74586](https://github.com/openclaw/openclaw/issues/74586) AM 嵌入运行中止 `memory_search` 工具调用，误判为超时 — **无 fix PR**
- [#98435](https://github.com/openclaw/openclaw/issues/98435) MCP loopback 传输在 gateway 重启后不自动重连，`recovered=1` 具误导性 — **无 fix PR**
- [#71689](https://github.com/openclaw/openclaw/issues/71689) tasks registry 因 SQLite 损坏（`database disk image is malformed`）恢复失败 — **无 fix PR**

**渠道/Provider 类：**
- [#114020](https://github.com/openclaw/openclaw/issues/114020) Feishu/Telegram 升级 2026.7.2-beta.4 后全线分发失败：`runChannelInboundEvent requires runDispatchLifecycle` — **无 fix PR**
- [#121953](https://github.com/openclaw/openclaw/issues/121953) DeepSeek 对 `[cron:<jobId>]` 前缀消息降优先级，cron 回合停滞数十秒到分钟 — **有 linked PR**
- [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程未回收，僵尸进程累积导致运行时退化 — **无 fix PR**

### 🟡 P2/P3 — 稳定性与体验
- [#114612](https://github.com/openclaw/openclaw/issues/114612) `memory_index_chunks`/`memory_embedding_cache` 表无保留策略，生产实例磁盘将写满（已有现场证据）— **无 fix PR**
- [#65538](https://github.com/openclaw/openclaw/issues/65538) 屏幕阅读器在流式输出时逐 token 播报，无障碍体验严重受损 — **有 linked PR**
- [#57256](https://github.com/openclaw/openclaw/issues/57256) `openclaw status --deep` 误报 mem0 不可用，与实际运行状态不符 — **有 linked PR**
- [#121953](https://github.com/openclaw/openclaw/issues/121953) 已在上方 P1 列出

---

## 6. 功能请求与路线图信号

**安全与信任（高呼声）：**
- [#7707](https://github.com/openclaw/openclaw/issues/7707) 记忆来源可信度标记（Memory Trust Tagging）— 43 评论，防记忆投毒
- [#72741](https://github.com/openclaw/openclaw/issues/72741) 外部安全/护栏检查标准接口
- [#47910](https://github.com/openclaw/openclaw/issues/47910) 按失败类别隔离 provider（auth 故障隔离/拉黑）

**成本与性能：**
- [#42475](https://github.com/openclaw/openclaw/issues/42475) 网关级 per-agent 成本预算（21 评论）
- [#14785](https://github.com/openclaw/openclaw/issues/14785) 降低工具 schema token 开销（~3,500 tok/session）
- [#80131](https://github.com/openclaw/openclaw/issues/80131) per-request 认证（5.5s）+ 工具打包（8.9s）优化 TTFT

**可靠性配置：**
- [#68596](https://github.com/openclaw/openclaw/issues/68596) 可配置流式 watchdog 超时阈值（15 评论，8👍）
- [#40982](https://github.com/openclaw/openclaw/issues/40982) 提高/移除 CLI 3 分钟无输出 watchdog 上限

**易用性与渠道：**
- [#42840](https://github.com/openclaw/openclaw/issues/42840) Control UI 支持 MathJax/LaTeX（10👍）
- [#16670](https://github.com/openclaw/openclaw/issues/16670) 引导流程强制 Memory/Embedding 配置步骤
- [#55249](https://github.com/openclaw/openclaw/issues/55249) 会话标签/昵称
- [#13700](https://github.com/openclaw/openclaw/issues/13700) 会话快照 save/load
- [#71058](https://github.com/openclaw/openclaw/issues/71058) 单 gateway 多 Teams bot
- [#47597](https://github.com/openclaw/openclaw/issues/47597) subagent runtime 支持 `streamTo="parent"`

**可能进入下一版本的功能（对应开放 PR）：** followup 队列持久化（[#82572](https://github.com/openclaw/openclaw/pull/82572)）、一键设备配对（[#120768](https://github.com/openclaw/openclaw/pull/120768)）、本地化上下文（[#111541](https://github.com/openclaw/openclaw/pull/111541)）、iMessage 有界历史读取（[#117122](https://github.com/openclaw/openclaw/pull/117122)）、Where picker/placement 项目模型（[#120804](https://github.com/openclaw/openclaw/pull/120804)）。

---

## 7. 用户反馈摘要

- **信任危机信号**：[#121058](https://github.com/openclaw/openclaw/issues/121058) 用户附带了监控 cron 的持续日志，明确指出 #116277 关闭后故障仍每日发生。这是典型的"关闭但不修复"案例，用户对 Issue 关闭流程的信任正在流失。**建议：关闭前附回归验证证据，或引入"关闭后观察期"。**
- **Provider 特定问题**：[#121953](https://github.com/openclaw/openclaw/issues/121953) 用户发现 DeepSeek API 边缘服务对 `[cron:` 开头的消息降优先级，直接导致 cron 任务分钟级停滞——这是模型商侧行为，但 OpenClaw 可通过调整消息前缀规避。
- **升级事故代价高**：[#121675](https://github.com/openclaw/openclaw/issues/121675) 用户升级 2026.8.1-beta.1 后遭遇**不可恢复的启动循环**，被迫回滚；[#114020](https://github.com/openclaw/openclaw/issues/114020) 用户升级 2026.7.2-beta.4 后 Feishu 全线不可用。升级路径的兼容性验证需要加强。
- **无障碍用户被忽视**：[#65538](https://github.com/openclaw/openclaw/issues/65538) 屏幕阅读器用户每次流式 token 更新都会被 NVDA 逐字播报，几乎无法使用 Control UI。
- **运维成本焦虑**：[#114612](https://github.com/openclaw/openclaw/issues/114612) 生产实例的 SQLite 内存/嵌入缓存表无保留策略，用户明确指出"磁盘会被写满"；[#42475](https://github.com/openclaw/openclaw/issues/42475) 多位运维用户要求预算护栏。
- **新手引导缺陷**：[#16670](https://github.com/openclaw/openclaw/issues/16670) 用户指出 `openclaw setup` 完全不提 embedding provider 配置，导致新用户以为 Memory 是内置可用的。
- **文档吐槽**：[#91455](https://github.com/openclaw/openclaw/issues/91455) K8s 安装文档被评价为"akward"，且对"为什么不用 Helm"的解释说服力不足。

---

## 8. 待处理积压

**长期未解决的高优 Issue（按积压时长）：**

| Issue | 创建时间 | 等级 | 积压时长 |
|---|---|---|---|
| [#13700](https://github.com/openclaw/openclaw/issues/13700) 会话快照 save/load | 2026-02-10 | P2 | 约 6 个月 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) 工具 schema token 开销 | 2026-02-12 | P2 | 约 6 个月 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) 文本泄漏到消息渠道 | 2026-02-24 | **P1** | 约 6 个月 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) 记忆来源可信度标记 | 2026-02-03 | P2 | 约 6 个月 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) A2A sessions_send 回环重复消息 | 2026-03-08 | **P1** | 约 5 个月 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) per-agent 成本预算 | 2026-03-10 | P2 | 约 5 个月 |

**等待维护者 review 的 PR（8 个）：** [#117321](https://github.com/openclaw/openclaw/pull/117321)、[#122300](https://github.com/openclaw/openclaw/pull/122300)、[#121994](https://github.com/openclaw/openclaw/pull/121994)、[#118579](https://github.com/openclaw/openclaw/pull/118579)、[#119356](https://github.com/openclaw/openclaw/pull/119356)、[#122296](https://github.com/openclaw/openclaw/pull/122296)、[#122355](https://github.com/openclaw/openclaw/pull/122355)、[#122380](https://github.com/openclaw/openclaw/pull/122380)

**等待作者更新/补 proof 的关键 PR：** [#82572](https://github.com/openclaw/openclaw/pull/82572)（队列持久化，XL 规模）、[#122350](https://github.com/openclaw/openclaw/pull/122350)（模型目录读取性能）、[#97295](https://github.com/openclaw/openclaw/pull/97295)（Feishu token 失效重试）、[#120332](https://github.com/openclaw/openclaw/pull/120332)（config validate 误拒插件）

**⚠️ 维护者重点关注建议：**
1. [#121058](https://github.com/openclaw/openclaw/issues/121058) 是目前社区信任的核心引爆点，69 条评论且无 fix PR，建议本周内给出明确修复方案或至少补充"已确认复现"的状态说明；
2. [#114020](https://github.com/openclaw/openclaw/issues/114020) 影响面大（全部 Feishu/Telegram 用户）但评论数不高，属于"没有声音的高危故障"，建议优先排查；
3. 积压 6 个月的 P1 [#25592](https://github.com/openclaw/openclaw/issues/25592) 涉及内部文本外泄，有安全含义且讨论热度高，建议提升优先级。

---

*数据来源：OpenClaw GitHub 仓库（[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)）2026-08-12 快照。本日报基于公开 Issue/PR 元数据与讨论内容生成，仅供项目健康度分析参考。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-12 | 分析范围：12 个开源项目 | 数据窗口：过去 24 小时**


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**从「功能扩张期」向「企业级可信赖期」剧烈转型**的关键节点。以 OpenClaw 为首的项目阵痛最为明显——可靠性、安全边界、成本控制已成为社区讨论的核心议题，而「功能缺失」的抱怨排名下降。与此同时，生态呈现出高度分层：核心项目日 PR 更新达数百条（OpenClaw 500、NanoBot 141），而边缘项目（NullClaw、TinyClaw、ZeptoClaw）已完全停摆。**维护者评审带宽是全生态共同瓶颈**，多个项目（OpenClaw 279 个待合并 PR、ZeroClaw 14 个 needs-author-action、PicoClaw 4 个 stale PR）同时出现合并积压。安全漏洞响应速度正在拉大项目间健康度差距——IronClaw 当日合并 P0 修复，而 NanoBot 的高危 shell-chain 绕过已开放 3 天无人响应。


## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃，关闭） | PR 更新（待合并，合并/关闭） | 版本发布 | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（383，117） | 500（279，221） | 无 | ⭐⭐⭐⭐ 极高活跃但 P1 积压多，评审是瓶颈 |
| **NanoBot** | 6（2，4） | 141（22，119） | 无 | ⭐⭐⭐ 活跃但高危漏洞未响应，PR 大批冲突关闭 |
| **Hermes Agent** | 50（49，1） | 50（42，8） | 无 | ⭐⭐⭐⭐ 高活跃，Windows 回归密集但修复跟进快 |
| **IronClaw** | 19（15，4） | 50（25，25） | 无 | ⭐⭐⭐⭐⭐ 高产出低风险，P0 当日合并 |
| **ZeroClaw** | 50（40，10） | 50（49，1） | 无 | ⭐⭐⭐ 高活跃但合并吞吐低，RFC 评审期 |
| **CoPaw** | 22（9，13） | 49（23，26） | v2.1.0-beta.3 | ⭐⭐⭐⭐ 活跃、发布节奏稳定，正式版在即 |
| **LobsterAI** | 3（3，0） | 9（3，6） | **2026.8.11** | ⭐⭐⭐⭐ 持续发布，但老 Issue 积压 4 个月 |
| **PicoClaw** | 3（2，1） | 6（6，0） | 无 | ⭐⭐⭐ 中等活跃，PR 积压且 stale 率高 |
| **NanoClaw** | 1（1，0） | 7（4，3） | 无 | ⭐⭐⭐ 功能整合期，活跃度偏低 |
| **Moltis** | 0 | 1（1，0） | 无 | ⭐⭐⭐ 低活跃但有实质 PR 推进 |
| **NullClaw** | — | — | — | ⚪ 无活动 |
| **TinyClaw** | — | — | — | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | ⚪ 无活动 |


## 3. OpenClaw 在生态中的定位

**社区规模与活跃度：生态绝对核心。** OpenClaw 单日 500 条 Issue + 500 条 PR 更新是第二梯队（Hermes/ZeroClaw 各 50 条）的 10 倍，讨论热度最高 Issue（#121058，69 评论）接近 Hermes 全项目单日活跃 Issue 总数。其生态位类似于 Kubernetes 之于云原生——其他项目（PicoClaw/NanoClaw/ZeroClaw 等）多围绕其设计理念做垂直延伸或轻量化裁剪。

**技术路线差异：** OpenClaw 的核心竞争力在于**消息投递可靠性与会话状态一致性**的深度基础设施——followup 队列持久化、cron 播报隔离、多渠道（Feishu/Telegram/Discord/Slack）统一分发。这使其成为「多渠道个人 AI 助手」的参照实现，但也带来了显著的架构复杂度——P1 级积压且多数无 fix PR 正是这种复杂度下的副作用。

**优势与隐患并存：** 优势是社区规模带来的生态丰富度（279 个待合并 PR 中不乏高价值功能）和 P0 事故应急能力（发布事故当日关闭）；隐患是**社区信任危机**——#121058 已关闭问题复发导致用户对「关闭即修复」失去信任，P1 积压正持续消耗社区耐心。建议 OpenClaw 采用「关闭前附回归证据 + 关闭后观察期」机制重建信任。


## 4. 共同关注的技术方向

多个项目同日涌现高度相似的需求，形成以下六大技术方向：

### ① 消息/网关投递可靠性（涉及 4 个项目）
- **OpenClaw**：#121058 静默回复失败复发，已关闭问题仍在发生
- **NanoClaw**：#3226 平台复用消息 ID 导致入站消息静默丢弃
- **Hermes**：Windows 更新后网关静默死亡（#84185）
- **LobsterAI**：#1183 网关启动失败循环跳遮罩

核心诉求是**消除静默失败**——用户对「无声无息的消息丢失」的容忍度为零，普遍要求可见的错误反馈或自动恢复机制。

### ② 上下文管理与记忆一致性（涉及 4 个项目）
- **OpenClaw**：实时语音会话无界保留 superseded 状态（#116201）
- **Hermes**：reset 后会话列表不可见（#84109）
- **IronClaw**：128 条消息硬上限静默驱逐任务消息（#7484）；记忆跨会话不生效（#7185）
- **PicoClaw**：路由到非默认 agent 时 `/clear` 与自动压缩失效（#3301）

核心诉求是**上下文窗口的确定性**——超限时应该显式报错而非静默丢弃，状态持久化必须跨会话/跨重启一致。

### ③ 安全边界与权限管控（涉及 5 个项目）
- **NanoBot**：#5306 `exec.allowPatterns` shell-chain 绕过未授权命令执行
- **ZeroClaw**：#9872 bounded delegate 沙箱边界解析错误；#7155 shell 高危命令 allow/ask/deny 确认层
- **OpenClaw**：#7707 记忆来源可信度标记（防记忆投毒）
- **CoPaw**：#6916 插件无确认静默创建 cron 并注入用户可见消息
- **IronClaw**：SSRF 校验缺口（#8713）

核心诉求是**纵深防御 + 显式授权**——不仅是防止外部攻击，更包括对插件、子代理、记忆来源的内部信任边界建模。

### ④ Token 成本控制（涉及 4 个项目）
- **OpenClaw**：#42475 网关级 per-agent 成本预算（21 评论）
- **Hermes**：#6839 Lazy Tool Schema 两阶段注入节省 3.5k-5k token/次（18👍）
- **ZeroClaw**：#2269 Token 消耗与成本管理 RFI 已完成征集
- **IronClaw**：Anthropic cache_control 显式断点（P0 已完成）

核心诉求是**成本可预测 + token 消耗透明化**——个人开发者对 API 账单敏感，企业用户则需要预算护栏。

### ⑤ MCP 集成稳定性与管理（涉及 4 个项目）
- **CoPaw**：#6732 MCP 工具每隔数小时失效，重启 Docker 才恢复
- **NanoClaw**：远程 Streamable HTTP MCP 支持完整落地
- **PicoClaw**：多个 MCP 相关 PR 在途
- **Hermes**：#78149 修复 MCP 工具集前缀识别

核心诉求是 **MCP 连接的生命周期管理**——超时配置、自动重连、多服务器凭据隔离、远程服务器支持。

### ⑥ 桌面端体验（涉及 3 个项目）
- **Hermes**：4 个 P1 集中在 Windows/macOS 桌面端网关进程生命周期管理
- **LobsterAI**：Windows 网关启动失败、Electron 依赖长期未升级
- **CoPaw**：中文输入法 IME compositionEnd 崩溃

核心诉求是**桌面端作为第一等公民**——更新不能破坏现有安装、输入法兼容、进程生命周期不能有平台差异。


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人 AI 助手（11+ 消息平台） | 个人开发者、社区用户 | 单体仓库 + 插件体系；消息投递可靠性为生命线 |
| **Hermes Agent** | 多平台消息桥（微信/QQ/Telegram）+ Desktop App | 日常聊天用户、多渠道运营者 | Nous Research 背景；Windows/macOS 原生桌面与 gateway 进程管理 |
| **NanoBot** | 多 Provider/多模型管理，Agent 工作流 | 多模型对比用户、API 集成开发者 | Python 主导；WebUI 配置管理；shell/exec 工具链 |
| **IronClaw** | 企业级 Agent 基础设施（NEAR AI 生态） | 区块链/AI 开发者、NEAR 生态用户 | Rust 风格工程纪律；kernel/ACP 架构演进；严格缓存与上下文管理 |
| **ZeroClaw** | 安全优先的 AI 助手（Rust 实现） | 安全敏感用户、企业部署 | Rust + daemon 架构；RFC 驱动；SOP 控制平面；OpenAI 兼容层规划 |
| **CoPaw** | Qwen 生态 AI 助手，桌面 + Web | 中文用户、Qwen 模型用户 | 阿里 QwenPaw 衍生；Computer Use 能力；文件工作区 |
| **LobsterAI** | 桌面 AI 协作客户端（Cowork） | Windows/macOS 桌面用户 | Electron 桌面应用；网易有道出品；模型思考等级精细化 |
| **PicoClaw** | 轻量嵌入式 AI 助手 | 树莓派等资源受限设备用户 | 极简依赖；低资源占用；Telegram/Discord 轻量桥接 |
| **NanoClaw** | 开源 AI 助手工具链整合 | 开发者、自托管用户 | 模板/插件体系演进；远程 MCP 支持；升级事务性 |
| **Moltis** | 本地优先 AI 数据助手 | 隐私敏感用户、本地数据管理 | CalDAV 连接器持久化；原子快照；只读 connections 工具 |


## 6. 社区热度与成熟度分层

**第一梯队：快速迭代期（高活跃 + 高频发布 + 功能快速膨胀）**
- **OpenClaw**、**NanoBot**、**Hermes Agent**、**CoPaw**、**ZeroClaw** —— 单日 PR 更新均超 20 条，新功能与修复并行推进。其中 CoPaw 已进入 v2.1.0 发布收敛期；ZeroClaw 处于 v0.9.0 RFC 密集评审期，合并吞吐偏低但方向清晰。

**第二梯队：质量巩固期（活跃度适中 + 发布节奏稳定）**
- **IronClaw** —— 工程纪律最强，P0 当日合并、上下文 bug 批量修复，v1.3.0 里程碑推进，属于「高产出低风险」的典范。
- **LobsterAI** —— 稳定小步迭代（2026.8.11 刚发布），但老 Issue 积压 4 个月说明用户反馈闭环有待加强。

**第三梯队：深耕/蓄力期（低活跃但有实质推进）**
- **PicoClaw**、**NanoClaw**、**Moltis** —— PR 数量少但方向明确（路由修复、MCP 支持、CalDAV 连接器）。PicoClaw 的 4 个 stale PR 提示这类项目维护者带宽极其有限。

**第四梯队：休眠/停摆**
- **NullClaw**、**TinyClaw**、**ZeptoClaw** —— 过去 24 小时无任何活动，社区互动基本停滞。这类小项目在当前生态中难以维持竞争力。

**综合判断：** 生态呈现「一超多强」格局。OpenClaw 的活跃度极端值推高了整个生态的关注度，但真正体现工程成熟度的是 IronClaw 这类「不喧嚣但稳健」的第二梯队项目。对于技术决策者，选择第一梯队项目需要接受其迭代速度带来的不稳定（Hermes Windows 回归、CoPaw beta 崩溃）；选择第二梯队则能得到更可预期的质量保障。建议开发者以 OpenClaw 为生态观察锚点，以 IronClaw/CoPaw 为稳定性参照。


## 7. 值得关注的趋势信号

**趋势一：「可靠性」取代「功能」成为社区第一诉求。** OpenClaw #121058（69 评论）的「关闭即修复」信任危机、Hermes Windows 网关静默死亡的密集回归、NanoClaw 消息 ID 复用静默丢失，都是同一枚硬币的不同侧面——当基础功能已经丰富，用户开始用「是否可依赖」而非「是否有新功能」来投票。**对开发者的启示：** 在 AI Agent 产品中引入「可观测性兜底」——所有静默失败路径必须至少产生一条可见日志；关闭 Issue 时附回归验证证据。

**趋势二：安全边界从「防外部攻击」延伸到「内部信任链条」。** 记忆投毒（OpenClaw #7707）、插件越权（CoPaw #6916）、子代理沙箱逃逸（ZeroClaw #9872）、shell 命令链绕过（NanoBot #5306）——威胁模型正在从「攻击者如何闯入」扩展到「Agent 自身如何被操纵」。多项目不约而同地提出**来源可信度标记、per-execution 确认、权限分层**，这是 AI Agent 走向生产环境的前提条件。**对开发者的启示：** 设计 Agent 系统时，将「信任边界」作为一等架构概念——插件、子代理、记忆来源都应纳入独立的信任域。

**趋势三：Token 成本优化从「优化项」上升为「生存项」。** Hermes 的 Lazy Tool Schema（省 3.5k-5k token/次）、IronClaw 的显式 cache_control 断点、ZeroClaw 的成本管理 RFI、OpenClaw 的 per-agent 预算——全生态同时在为 token 提效。这不是巧合，而是「Agent 完成真实工作」与「API 账单能否持续」之间的必然碰撞。**对开发者的启示：** 工具 schema 按需注入、缓存断点显式化、成本预算闸门应作为 Agent 产品的出厂配置而非后续补丁。

**趋势四：生态互操作性成为新竞争维度。** ZeroClaw 的 Chat Completions profile（18 评论，社区直言「OpenAI 客户端生态是采用壁垒」）、NanoClaw/CoPaw 的远程 MCP 支持、IronClaw 的 ACP executor 扩展——**协议兼容层正在取代功能丰富度成为新的护城河**。谁能无缝接入 Open WebUI/LobeChat/Aider 等既有客户端生态，谁就能获得低成本用户增长。**对开发者的启示：** 在构建 AI Agent 时优先实现 OpenAI Chat Completions / MCP 两个标准协议接口，而非自研协议。

**趋势五：维护者评审带宽成为全生态的系统性瓶颈。** OpenClaw 279 个待合并 PR、ZeroClaw 14 个 needs-author-action、PicoClaw 4 个 stale PR 中的 3 个与高优 Bug 相关（#3316、#3329）、NanoBot 安全漏洞 3 天无响应——这不是个别项目的管理问题，而是生态规模的阶段性瓶颈。**对开发者的启示：** 贡献 PR 时主动附测试用例和复现证据可显著提高合并率；选择依赖项目时，应评估其评审响应速度作为健康度指标。

**趋势六：桌面端体验成为「最后一公里」战场。** Hermes 的 Windows 回归聚集、LobsterAI 的 Electron 升级滞后、CoPaw 的中文 IME 崩溃——当云端能力趋同，客户端稳定性成为用户留存的分水岭。特别是面向非技术用户的 Desktop App，升级兼容性、输入法本地化、屏幕阅读器无障碍，这些「细节工程」正在悄悄拉开体验差距。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-08-12** | **数据来源：GitHub (HKUDS/nanobot)**

---

## 1. 今日速览

NanoBot 项目今日整体活跃度**极高**：过去 24 小时 PR 更新量达 **141 条**（其中 119 条已合并/关闭），Issues 更新 6 条（2 条新开/活跃，4 条关闭）。值得关注的是，两项关于 API 密钥泄露的安全 Issue（#4784、#4783）已在今日被关闭，表明安全响应及时；与此同时，`/goal` 重复回复的已知 bug 已有一份针对性修复 PR（#5257）。但需注意，**大批历史 PR 因冲突被批量关闭**（如小米 MiMo、Tavily 搜索、fallback 模型等），社区贡献的整合通道可能存在瓶颈。此外，一条**新的高危安全绕过漏洞（#5306）**仍处于开放状态，亟待维护者处理。

---

## 2. 版本发布

今日无新版本发布（最新 Releases：无）。

---

## 3. 项目进展

过去 24 小时合并/关闭 PR 共 **119 条**，其中大部分为历史遗留 PR 的批量清理（多标记为 `[conflict]`），但也包括若干功能落地与代码合并。以下为值得关注的进展信号：

### 3.1 功能推进

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#5347](https://github.com/HKUDS/nanobot/pull/5347) | feat(webui): improve provider and model preset management | OPEN | WebUI 支持删除自定义 Provider、保护内置 Provider 被误删，并新增聊天模型预设选择器。 |
| [#5342](https://github.com/HKUDS/nanobot/pull/5342) | feat(webui): redesign apps discovery | OPEN | 重新设计应用发现页面，引入 Featured 推荐批次与离线缓存回退。 |
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) | feat(providers): add OrcaRouter as a named gateway provider | OPEN | 新增 OrcaRouter 网关 Provider，聚合 150+ 模型，提供零信任安全层。 |

### 3.2 关键修复

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#5346](https://github.com/HKUDS/nanobot/pull/5346) | fix(exec): terminate one-shot process trees on cleanup | OPEN | 修复超时/取消时仅杀 root shell、子进程残留的问题。 |
| [#5344](https://github.com/HKUDS/nanobot/pull/5344) | fix(agent): warn instead of silently spiraling on repeated identical tool calls | OPEN | 为工具调用循环增加重复检测，避免 agent 静默空转耗尽预算。 |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) | fix(mcp): preserve credentials when OAuth store read fails | OPEN | MCP OAuth 存储读取失败时不再当作空存储，防止覆盖其他服务器凭据。 |

### 3.3 历史 PR 批量关闭

以下功能 PR 均在今日以 `[conflict]` 标记关闭，相关功能可能通过其他途径实现或已过时：小米 MiMo 支持（[#2181](https://github.com/HKUDS/nanobot/pull/2181)）、kimi-coding 模型映射（[#1367](https://github.com/HKUDS/nanobot/pull/1367)）、Tavily 搜索工具（[#1321](https://github.com/HKUDS/nanobot/pull/1321)）、fallback 模型支持（[#1199](https://github.com/HKUDS/nanobot/pull/1199)）、cron 热重载（[#1114](https://github.com/HKUDS/nanobot/pull/1114)）、Telegram 内联键盘（[#1020](https://github.com/HKUDS/nanobot/pull/1020)）等。**建议维护者审视是否有功能仍需追踪，或应以其他形式重新开放。**

---

## 4. 社区热点

今日讨论最活跃的 Issue 为 [#5327](https://github.com/HKUDS/nanobot/issues/5327)（10 条评论，已关闭），其次是 [#5256](https://github.com/HKUDS/nanobot/issues/5256)（2 条评论，开放中）。二者均指向**同一类用户痛点**：agent 在推理过程中**随机性地重复相同消息**。

- [#5327](https://github.com/HKUDS/nanobot/issues/5327)：用户反馈 agent 在推理时随机重复 "Good points, let me investigate the issue" 之类的短语。
- [#5256](https://github.com/HKUDS/nanobot/issues/5256)：单条 `/goal` 指令在等待用户回复时产生**数十条近乎相同的回复**，直到用户干预或模型最终识别为系统循环。

**诉求分析**：这两个 Issue 反映出用户对 agent 行为可控性的高度关注。重复回复不仅造成消息轰炸，还可能导致上下文混乱与 token 浪费。社区已通过 [#5257](https://github.com/HKUDS/nanobot/pull/5257) 提交修复（为持续目标增加空闲转停止的边界控制），但目前尚未合并，用户仍在等待。

---

## 5. Bug 与稳定性

按严重程度排列：

### 5.1 高危 - 安全漏洞

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell-chain bypass allows unintended command execution | **OPEN** | 暂无 |
| [#4784](https://github.com/HKUDS/nanobot/issues/4784) | Provider API keys leaked between providers via global os.environ mutation | CLOSED | 已关闭，疑已修复 |
| [#4783](https://github.com/HKUDS/nanobot/issues/4783) | CLI apps run with full os.environ — API keys leaked to installed app subprocesses | CLOSED | 已关闭，疑已修复 |

**重点警示**：[#5306](https://github.com/HKUDS/nanobot/issues/5306) 为新增安全漏洞报告，攻击者可通过 shell 链绕过 `exec.allowPatterns` 限制执行未授权命令。该 Issue 当前仅有 1 条评论、无关联修复 PR，且已开放 3 天。**建议维护者优先响应。**

### 5.2 中危 - 功能异常

| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Nanobot repeats multiple times the same message while reasoning | CLOSED | 疑似已修复 |
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) | /goal message produces dozens of repeated replies when waiting for user's answer | **OPEN** | [#5257](https://github.com/HKUDS/nanobot/pull/5257) |

两项重复消息相关 Issue 很可能来自同一根因，[#5257](https://github.com/HKUDS/nanobot/pull/5257) 的修复范围覆盖了"持续目标进入空闲状态时继续循环"的问题，建议尽快合入并发布补丁版本，同时验证 [#5327](https://github.com/HKUDS/nanobot/issues/5327) 的修复是否真正完整。

---

## 6. 功能请求与路线图信号

### 6.1 新提出的需求

| Issue/PR | 内容 | 状态 | 下一版本纳入可能性 |
|---|---|---|---|
| [#5333](https://github.com/HKUDS/nanobot/issues/5333) | [openrouter] 支持 Server Tools（Web Search、Web Fetch、Fusion 等） | CLOSED | 低-中：用户明确表达需求，但 Issue 迅速关闭，需确认是否已在其他 PR 中实现 |
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) | 新增 OrcaRouter 网关 Provider | OPEN | 中：已有完整实现和测试，等待 review |
| [#5342](https://github.com/HKUDS/nanobot/pull/5342) | WebUI 应用发现页面重新设计 | OPEN | 中：增强 WebUI 可发现性，符合项目 UI 优化方向 |
| [#5347](https://github.com/HKUDS/nanobot/pull/5347) | Provider 与模型预设管理改进 | OPEN | 高：直接改善 WebUI 的日常可用性 |

### 6.2 长期开放的需求

- **[#4291](https://github.com/HKUDS/nanobot/pull/4291)（feat(spawn): allow subagents to use configurable model presets）**：创建于 6 月 11 日，至今已两个月未合并。该功能允许子代理使用不同的模型预设，是构建多 Agent 复杂工作流的重要基础设施。建议维护者评估是否纳入 8 月里程碑。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的用户真实反馈：

**满意之处：**
- [#5333](https://github.com/HKUDS/nanobot/issues/5333) 作者表示 "Thank you for creating such an amazing project. I really appreciate it."，反映出新用户对项目整体评价积极。

**痛点与抱怨：**
- **重复消息问题**（[#5327](https://github.com/HKUDS/nanobot/issues/5327)、[#5256](https://github.com/HKUDS/nanobot/issues/5256)）：用户描述 "dozens of near-identical replies"、重复 "Good points, let me investigate..." 等随机行为，严重影响使用体验，需用户干预才能终止。
- **安全担忧**（[#4784](https://github.com/HKUDS/nanobot/issues/4784)、[#4783](https://github.com/HKUDS/nanobot/issues/4783)）：安全研究人员 `hamb1y` 系统性报告了 API 密钥通过 `os.environ` 泄漏的问题，涉及跨 Provider 泄漏和 CLI 子进程继承。虽然已关闭，但用户对密钥安全的关注度较高，建议后续通过测试或文档确认加固效果。

**使用场景特征：**
- 用户常在 **多模型/多 Provider 环境** 下使用 NanoBot，对密钥隔离、模型预设管理、命名 Provider 集成有较高需求（如 [#4784](https://github.com/HKUDS/nanobot/issues/4784)、[#5328](https://github.com/HKUDS/nanobot/pull/5328)、[#5347](https://github.com/HKUDS/nanobot/pull/5347)）。

---

## 8. 待处理积压

### 8.1 需要优先处理

| 类型 | 编号 | 标题 | 已开放时间 | 说明 |
|---|---|---|---|---|
| 安全漏洞 | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell-chain bypass | 3 天 | 高危安全绕过，无修复 PR，需尽快响应 |
| Bug 修复 | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | fix(agent): bound sustained-goal continuation when the turn goes idle | 7 天 | 对应热门 Issue #5256，受社区高度关注，建议优先 review |
| 功能 PR | [#4291](https://github.com/HKUDS/nanobot/pull/4291) | feat(spawn): allow subagents to use configurable model presets | 2 个月 | 长期未 review，涉及子代理模型配置，是 Agent 工作流的重要能力 |

### 8.2 批量关闭 PR 的后续追踪

今日以 `[conflict]` 关闭的 10+ 条 PR 中包含多项高价值功能（如 Tavily 搜索、fallback 模型、Telegram 内联键盘、cron 热重载等）。虽然标记为冲突关闭，但这些功能可能仍是社区的真实需求。**建议维护者：**
1. 确认已合并的同功能 PR 并统一更新文档；
2. 对确实不再需要的功能向对应 PR 作者明确说明原因；
3. 考虑为高价值但冲突的功能（如 fallback model）建立 Separate tracking Issue，避免社区重复提交。

---

## 项目健康度综合评估

| 维度 | 评分（5分制） | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 141 条 PR 更新/24h，社区参与度极高 |
| 合并效率 | ⭐⭐⭐⭐ | 119 条 PR 被处理，但多为冲突关闭，实际合入量需进一步确认 |
| 安全性 | ⭐⭐⭐ | 2 项安全漏洞已关闭，但 1 项新漏洞（#5306）尚未响应 |
| 稳定性 | ⭐⭐⭐ | 重复消息 bug 出现两起报告，修复 PR 尚未合入 |
| 社区满意度 | ⭐⭐⭐⭐ | 整体评价正面，但重复回复和密钥安全事件对信任度有一定影响 |

**总体结论**：NanoBot 正处于高速迭代阶段，社区贡献活跃、功能覆盖面持续扩大。但当前需重点关注**高危安全漏洞的响应速度**和**重复消息 bug 的修复落地**，同时优化 PR 冲突关闭流程，避免社区贡献者的积极性受挫。

---
*本日报由 AI 分析师基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-12

---

## 1. 今日速览

项目活跃度处于**高位**，过去 24 小时产生 50 条 Issue 更新（49 新开/活跃、1 关闭）与 50 条 PR 更新（42 待合并、8 已合并/关闭），无新版本发布。当前最突出的主题是 **Windows 桌面端更新与网关冷启动链路出现密集回归**——今日至少 4 个 P1 Bug（#83683、#83562、#84185、#84200）集中在 Desktop 重启/更新后网关进程被误杀或静默退出，另有 #84109 会话列表可见性回归，社区反馈与修复 PR 均已快速跟进。与此同时，**god-file 重构史诗（#78647）以 67 条评论高居讨论榜首**，多租户内存隔离与 Lazy Tool Schema 两个长期 feature 需求仍在持续发酵。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日已合并/关闭 8 个 PR，其中 3 个可见于活跃列表（全部来自贡献者 `tiammomo`，且均为非破坏性修复）：

| PR | 内容 | 状态 |
|---|---|---|
| [#78149](https://github.com/NousResearch/hermes-agent/pull/78149) | `fix(cli): recognize prefixed MCP toolsets` — 正确识别带 `mcp-` 前缀的工具集名称，同时不扩大 MCP 允许列表，修复 #78102 | CLOSED |
| [#78172](https://github.com/NousResearch/hermes-agent/pull/78172) | `fix(cron): enforce profile cap for review dispatch` — 将 per-profile 并发上限真正应用于 review 分发，修复 #78123 | CLOSED |
| [#78143](https://github.com/NousResearch/hermes-agent/pull/78143) | `fix(kanban): count dry-run spawns toward global cap` — 修复 kanban dry-run 预测的进程占用未计入全局并发上限的问题，修复 #78117 | CLOSED |

**意义评估：** 上述三项分别修复了 MCP 配置兼容性、cron 并发边界与 kanban 任务调度的潜在超限问题，均属于稳定性收敛类改动。另有 42 个 PR 处于待合并状态，其中包含今日新提交的 **Windows 更新冷启动验证修复（#84212）** 与 **post-reset 会话可见性修复（#84198）**——这两个大概率将尽快合入以缓解当前 P1 回归。整体来看，项目正处在「高频产出修复 + 用户侧密集反馈」的循环中。

---

## 4. 社区热点

今日讨论热度最高的议题如下：

### 🔥 #78647 — God-file 重构史诗（67 评论）
[Epic: Shard all 20 god files — repo-wide god-file decomposition](https://github.com/NousResearch/hermes-agent/issues/78647)

> 作者: andrexibiza | 2026-08-04 创建，持续更新至 08-12

仓库级政策（2026-08）：**所有 god file 必须被拆解、不得回退**。该 epic 统领 20 个巨型文件的模块化改造，姊妹 issue #78642（`tools/mcp_tool.py`，7,230 行）也有 12 条评论。**诉求分析：** 社区对代码可维护性的呼声集中表达——单一文件超过 7,000 行已严重阻碍独立贡献者参与，讨论中大量涉及拆分方案、共享接口设计与测试覆盖策略。

### 🔥 #6839 — Lazy Tool Schema 加载（38 评论，👍 18）
[Feature: Lazy Tool Schema Loading — Two-Pass Tool Injection to Reduce Token Overhead](https://github.com/NousResearch/hermes-agent/issues/6839)

> 作者: jarviszomine | 2026-04-09 创建，持续活跃

每次 API 调用注入全部 50+ 工具的完整 schema，消耗 3,500-5,000 token。社区对此讨论已久，👍 18 是当前 Issue 中最高之一。该 issue 已活跃 4 个月，涉及 token 成本、本地模型上下文窗口等核心痛点，是**目前最值得路线图吸收的 feature 信号**。

### 🔥 #34352 — 多租户 Hermes 问题（25 评论）
[Solving the Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352)

> 作者: NimbleCoAI | 2026-05-29 创建

Memory 操作完全绕过 hook 系统，使租户隔离必须 fork 核心才能实现。作者声称已生产运行数月。该 issue 反映**企业级/多智能体部署的核心架构缺口**，与 #67442（跨进程会话续接）、#67440（blast-radius 评审模式）共同构成「多智能体编排」需求簇。

---

## 5. Bug 与稳定性

今日 Bug 类 Issue 呈现显著的**「Windows 桌面端回归聚集」**特征，按严重程度排列：

### P1 — 严重回归

| Issue | 描述 | 修复状态 |
|---|---|---|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | **Desktop 重启后网关被强杀且不重启**，微信/QQ/Telegram 全部静默。Windows 0.20.0 回归 | 待合并 |
| [#84185](https://github.com/NousResearch/hermes-agent/issues/84185) | **Windows 更新后冷启动的网关静默死亡**——无日志、无 PID 残留，离线直至手动重启 | ✅ 已有修复 PR [#84212](https://github.com/NousResearch/hermes-agent/pull/84212) |
| [#84200](https://github.com/NousResearch/hermes-agent/issues/84200) | **macOS Desktop 启动时 SIGTERM 掉 launchd 托管的网关**，与 #83683 同源（`_reap_unsupervised_gateway_orphans()` 误杀） | 待调查 |
| [#83562](https://github.com/NousResearch/hermes-agent/issues/83562) | **Windows Desktop 更新后后端正常但 UI 误报 `backend exited (0)`**，Repair install 亦失败 | 待调查 |
| [#84109](https://github.com/NousResearch/hermes-agent/issues/84109) | **reset 后创建的会话在所有列表中不可见**——d2a4d373eb 持久化 lineage 的回归 | ✅ 已有修复 PR [#84198](https://github.com/NousResearch/hermes-agent/pull/84198) |

### P2 — 功能性 Bug

| Issue | 描述 | 修复状态 |
|---|---|---|
| [#83213](https://github.com/NousResearch/hermes-agent/issues/83213) | 后台进程完成通知在 `/new` 后被错误路由到当前活跃会话 | 待复现 |
| [#73779](https://github.com/NousResearch/hermes-agent/issues/73779) | Feishu multiplex 模式 WebSocket 因 `Future attached to a different loop` 静默死亡 | 待调查 |
| [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) | `browser_exec` 在 Desktop 下因 PYTHONPATH 指向 Hermes venv 导致 `pydantic_core` 模块缺失 | 待调查 |
| [#69672](https://github.com/NousResearch/hermes-agent/issues/69672) | FTS trigram 索引 `\x00json:` 哨兵导致 SQLite 版本相关的「malformed inverted index」+ DB 膨胀 | 待调查 |
| [#83448](https://github.com/NousResearch/hermes-agent/issues/83448) | 文本模式 `kanban show` 在关闭数据库连接后查询任务图，报 `sqlite3.ProgrammingError` | 待调查 |

### P3 — 低危/边缘

- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills 索引 29.8h 未重建（上限 26h），**自动化探针持续告警中**，watchdog 运行不稳定
- [#84102](https://github.com/NousResearch/hermes-agent/issues/84102) — 本地 TTS 提供者将 Ogg/Vorbis 写入 `.ogg` 路径，平台语音气泡静默降级
- [#57540](https://github.com/NousResearch/hermes-agent/issues/57540) — Desktop 将显式 `text`/`plain` 代码围栏语言标识渲染为可见文本

### 关联性观察

今日 P1 Bug 中至少 4 个直接指向 **Desktop 应用对网关进程生命周期管理**的缺陷（Windows 强杀、macOS SIGTERM、更新后静默退出、误报退出）。根因同名函数 `_reap_unsupervised_gateway_orphans` 在多个平台上的行为不一致，建议维护者将其作为**优先修复的架构级问题**统一处理，而不只是逐个平台打补丁。

---

## 6. 功能请求与路线图信号

以下是今日收到新讨论/更新的 feature 类 Issue，以及与已有 PR 的关联判断：

| Issue/PR | 需求 | 被纳入近期版本的可能性 |
|---|---|---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy Tool Schema 两阶段注入 | 减少每次调用的 token 开销（省 3.5k-5k token/次），对本地模型尤其重要 | **高** — 38 评论 + 18 👍，且与 0.20.x 的 token 成本优化方向一致 |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) 多租户内存隔离 | 记忆操作绕过 hook，需支持 hook 链以不 fork 核心实现租户隔离 | **中** — 架构改动大，但作者提供了生产级修复方案，可能作为参考实现 |
| [#84202](https://github.com/NousResearch/hermes-agent/pull/84202) OneBot 11 平台适配器 | 通过 NapCat/Lagrange/LLOneBot 连接 QQ，区别于官方 QQ Bot 的本地桥接方案 | **高** — 社区长期需要，PR 已提交，覆盖 go-cqhttp 等主流桥 |
| [#83244](https://github.com/NousResearch/hermes-agent/issues/83244) 添加 Google Antigravity 为 OAuth provider | 接入 Claude Sonnet 4.6 / Opus 4.6 / Gemini 3.x/3.6 | **中** — 需官方评估，但「新增 OAuth provider」已有 `openai-codex` 先例 |
| [#67440](https://github.com/NousResearch/hermes-agent/issues/67440) blast-radius 评审模式 | 对「看起来小但可能破坏下游」的改动做聚焦风险评估 | **中** — 来自 cursor/plugins 的内部模式，适合工具链扩展 |
| [#72658](https://github.com/NousResearch/hermes-agent/issues/72658) 任务完成前的 vault 验证门 | 多智能体协作场景中，完成 kanban 任务前校验文档仓库是否真正更新 | **低-中** — 特征与现有 kanban/cron 架构契合，但需更多社区认可 |

---

## 7. 用户反馈摘要

从今日 50 条 Issue 的评论中可提炼以下真实用户痛点与情绪：

1. **Windows 更新链路已严重损耗用户信任。** #84185 的用户描述：「updater 打印 '✓ Starting Windows gateway after update (PID <n>)' 但进程立即静默死亡」——用户被迫手动重启，重复出现。#63717 作者记录了三周内同一台机器反复更新失败的「连锁根因链」。#82186 中 Desktop 一键更新按钮完全失效（WinError 5）。**多名 Windows 用户在评论中表达了明显的沮丧情绪。**

2. **会话状态持久化引入的新回归影响日常使用。** #84109 的 reset 后会话不可见，以及 #83213 的后台任务通知串会话，都直接影响用户的日常多会话工作流。desktop、CLI、gateway 三端会话一致性仍是一个脆弱环节。

3. **成本敏感用户对 token 浪费有持续抱怨。** #6839 的讨论表明，50+ 工具全量注入的 token 开销不仅影响 API 账单，更直接影响本地模型的可用性，用户期望「按需注入」而非「全量附带」。

4. **配置项「被静默忽略」是反复出现的失望点。** #52179（Bedrock Guardrails 完全未生效）、#84102（TTS codec 静默降级）、#84034（NeuTTS 在 setup 中缺失）——用户在评论中反复强调「配置了却不生效」比「功能缺失」更令人困扰。

5. **积极信号：** #84202（OneBot）与 #83432（WhatsApp 安全修复）获得社区正面反馈；#81410（单进程 OAuth 刷新问题）的作者明确感谢了排查过程的透明度。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未得到有效响应或解决，建议维护者重点关注：

| 编号 | 内容 | 创建时间 | 等待时长 | 备注 |
|---|---|---|---|---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) | Lazy Tool Schema 加载 | 2026-04-09 | **4 个月** | 👍 18，38 评论，社区明确需要的优化 |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 多租户 Hermes 解决方案 | 2026-05-29 | 2.5 个月 | 作者已提供生产级修复方案，等待官方架构讨论 |
| [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) | Windows 更新失败综合诊断（7 个关联根因） | 2026-07-13 | ~1 个月 | P1 且含完整根因链，未看到 fix PR |
| [#52179](https://github.com/NousResearch/hermes-agent/issues/52179) | Bedrock Guardrails 配置后完全不生效 | 2026-06-24 | 1.5 个月 | 安全相关，v0.17.0 确认存在 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills 索引自动重建持续失效 | 2026-07-18 | 25 天 | 自动化基础设施问题，影响文档站 |
| [#62191](https://github.com/NousResearch/hermes-agent/pull/62191) | 修复 `venv/` 与 `.venv/` 布局识别 | 2026-07-10 | **已 33 天未合并** | 直接关系到 Windows 并发实例安全检查的有效性 |

---

**结论：** Hermes Agent 项目当前处于「高活跃、高并发修复」状态，Issue/PR 数量说明社区参与度旺盛，但 Windows Desktop 更新链路的多个 P1 回归正在加速消耗用户信任，建议官方将**网关进程生命周期管理**与**会话列表持久化**两条回归链作为本周最高优先级修复项。长期来看，Lazy Tool Schema 与多租户支持是社区最期待的两个架构级改进。

> 数据来源：NousResearch/hermes-agent GitHub 仓库（统计窗口：2026-08-11 ~ 2026-08-12）

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-12

## 1. 今日速览

过去 24 小时 PicoClaw 项目保持中等活跃度：3 条 Issue 更新（2 条活跃/新开，1 条关闭），6 条 PR 更新但均未合并或关闭，暂无新版本发布。核心动态集中在围绕路由 agent 上下文管理修复（Issue #3301 / PR #3316）与 LINE webhook 配置失效（Issue #3328 / PR #3329）的快速响应上。值得注意的是，6 个待合并 PR 中已有 4 个被标记为 `[stale]`，合并流程出现明显积压迹象，建议维护者加快审阅节奏。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，但 6 个待合并 PR 清晰展现了项目当前推进方向：

- **路由 agent 上下文管理修复** — PR #3316（j-v）修复了当 dispatch rules 将聊天路由到非默认 agent 时，历史记录、总结、压缩及 seahorse bootstrap 均不生效的问题，是 Issue #3301 的对应修复。
- **Telegram 私有聊天 Topics 支持** — PR #3315（genuss）修复了启用论坛模式的私有 bot 聊天中 Topics 无法被识别的问题，原逻辑仅检查 `Chat.IsForum`，遗漏了 `IsTopicMessage` 场景。
- **LLM 可观测性增强** — PR #3317（vmuliadi-astro）在 gateway 的 "LLM response" 调试日志中增加 prompt cache token 记录，便于追踪 DeepSeek 等提供商的缓存命中情况。
- **安全规则修复** — PR #3314（j-v）修复 `customAllowPatterns` 不生效的问题，此前默认 deny 模式总是优先于用户自定义允许列表，导致 `git push` 等已授权命令仍被拦截。
- **新搜索提供商 Exa** — PR #3299（kesku）添加 Exa 原生 `web_search` 提供商，支持 `d`/`w`/`m`/`y` 时间范围过滤，并通过 `X-Api-Key` 认证。
- **配置静默失效告警** — PR #3329（ex-takashima）针对 LINE 频道 `webhook_host`/`webhook_port` 配置项无消费者的问题，改为启动时显式告警而非静默 seeding，修复 #3328。

此外，Issue #3294（`/list models` 仅显示当前模型）已被标记为 stale 并关闭，属于维护清理动作。

## 4. 社区热点

- **Issue #3301**（3 条评论）：[`/clear` 与会话自动压缩在路由 agent 聊天中失效](https://github.com/sipeed/picoclaw/issues/3301) — 当前讨论最集中的 Issue。用户 j-v 在 Raspberry Pi 上通过 Discord/Telegram 使用 DeepSeek 时复现了该问题，说明在多频道、非默认 agent 的场景下，上下文管理存在明显缺陷。该 Issue 已有关联修复 PR #3316。
- **Issue #3294**（3 条评论，已关闭）：[`/list models` 仅显示当前模型](https://github.com/sipeed/picoclaw/issues/3294) — 用户期望命令列出 `model_list` 中所有配置模型，但实际只显示当前模型和提供商。该 Issue 活跃讨论 17 天后被 stale 关闭，但用户诉求本身并未得到解决或明确回应。
- **Issue #3328**（新开，0 评论）：[LINE `webhook_host`/`webhook_port` 从未被读取](https://github.com/sipeed/picoclaw/issues/3328) — 当日新报告，指出配置项存在结构性缺陷（有定义、有默认值、有文档但无消费者）。同一天 PR #3329 即提出修复方案，社区响应迅速。

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | 相关 Issue/PR | 问题描述 | 修复状态 |
|---------|--------------|---------|---------|
| 高 | [#3301](https://github.com/sipeed/picoclaw/issues/3301) | 路由到非默认 agent 的聊天中，`/clear` 和会话自动压缩失效，影响核心记忆与上下文管理 | PR [#3316](https://github.com/sipeed/picoclaw/pull/3316) 待合并 |
| 中 | PR [#3314](https://github.com/sipeed/picoclaw/pull/3314) | 用户添加到 `customAllowPatterns` 的命令（如 `git push`）仍被默认 deny 规则拦截，自定义允许列表完全不生效 | 修复 PR 已提交待合并 |
| 中 | [#3328](https://github.com/sipeed/picoclaw/issues/3328) | LINE `webhook_host`/`webhook_port` 配置项声明、默认值、文档均存在，但代码中无任何读取点，设置无效且无警告 | PR [#3329](https://github.com/sipeed/picoclaw/pull/3329) 待合并 |
| 低 | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` 命令描述为 "Configured models"，实际仅显示当前模型，与预期不符 | 已 stale 关闭，无修复 PR |

## 6. 功能请求与路线图信号

- **Exa 原生 Web 搜索**（PR #3299）：新增 `tools.web` / `web_search` 提供商，支持 `startPublishedDate` 时间范围过滤，扩展搜索后端选项，功能完整，具备纳入下一版本的条件。
- **Telegram 私有聊天 Topics**（PR #3315）：为启用 forum 模式的私有 bot 聊天提供完整 Topics 支持，属于 Telegram 集成能力补强。
- **Prompt Cache Token 日志**（PR #3317）：在调试日志中输出 `prompt_cache_hit_tokens` 等缓存字段，满足用户对 LLM 调用成本与性能可观测性的需求。
- **`/list models` 完整列出配置模型**（Issue #3294）：虽然已关闭，但用户对命令行为与描述一致性的诉求未变，建议后续版本评估是否纳入。

## 7. 用户反馈摘要

- **路由 agent 的上下文丢失**（j-v，#3301 / #3316）：配置 dispatch rules 将 agent 路由到 Discord 特定频道后，agent 无法记住历史消息，自动压缩从不触发，即使消息数和 token 数持续累积。反映了真实多频道部署中对话连续性的核心痛点。
- **允许列表规则违背预期**（j-v，#3314）：按文档将 `git push` 添加至 `customAllowPatterns` 后，agent 仍无法执行。测试本应通过的场景在实际运行中失败，说明安全规则匹配逻辑存在隐蔽 bug。
- **配置项存在但无效**（qing-wang，#3328）：LINE 的 `webhook_host`/`webhook_port` 在 config struct、默认值和文档中均已体现，但运行时无任何消费代码，容易误导用户以为配置已生效。
- **可观测性诉求**（vmuliadi-astro，#3317）：通过 Cloudflare AI Gateway 使用 DeepSeek 时，usage 对象包含 `prompt_cache_hit_tokens` 等缓存字段，但 gateway 日志仅记录三条基础 token 指标，希望补全缓存相关统计。
- **命令行为与描述不符**（2suige-coder，#3294）：`/list models` 的描述为 "Configured models"，但实际仅输出当前模型，用户期望看到完整的模型配置列表。

## 8. 待处理积压

以下 PR 已标记 `[stale]`，需要维护者尽快处理：

- **PR #3299**（2026-07-26 创建）：[Exa web 搜索提供商](https://github.com/sipeed/picoclaw/pull/3299)，已积压 17 天，功能与配置完整。
- **PR #3316**（2026-08-03 创建）：[路由 agent 上下文管理修复](https://github.com/sipeed/picoclaw/pull/3316)，对应高优 Issue #3301，已积压 9 天。
- **PR #3315**（2026-08-03 创建）：[Telegram Topics 支持](https://github.com/sipeed/picoclaw/pull/3315)，已积压 9 天。
- **PR #3317**（2026-08-04 创建）：[prompt cache token 日志](https://github.com/sipeed/picoclaw/pull/3317)，已积压 8 天。

此外，PR [#3314](https://github.com/sipeed/picoclaw/pull/3314) 与 [#3329](https://github.com/sipeed/picoclaw/pull/3329) 尚未标记 stale，但同样在等待合并。建议优先审阅与高严重度 Bug 直接关联的 PR #3316 和 #3329，避免影响用户核心体验的修复持续积压。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-08-12）

## 今日速览

- 过去 24 小时新增 1 个 Issue（#3226），涉及消息静默丢失问题，暂无关闭记录。
- Pull Request 更新 7 条，其中 3 条已关闭（含远程 Streamable HTTP MCP 支持完整落地），4 条仍待合并。
- 无新版本发布，项目当前处于功能整合与稳定性加固阶段。
- 核心团队围绕 Agent 模板体系升级、MCP 远程服务器支持、升级事务性等方向持续推进，整体活跃度中等偏高。

## 项目进展

今日共有 3 个 PR 被关闭（推断为已合并），项目在以下方面取得实质进展：

- **远程 Streamable HTTP MCP 服务器支持完成**：`#3092` 先为引擎和 Claude provider 增加 `{ type: 'http', url }` 支持，`#3221` 紧随其后补齐 codex 与 opencode provider，标志着该功能已完整覆盖所有主流 provider。  
  [PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) · [PR #3221](https://github.com/nanocoai/nanoclaw/pull/3221)
- **新增 Tavily MCP 工具技能**：`#3190` 以 utility skill 形式加入 Tavily 搜索工具，不涉及核心源码改动，丰富了开箱即用的工具生态。  
  [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)

以上进展表明项目正在加速扩展 MCP 集成能力，并对不同运行端（Claude、Codex、opencode）保持功能一致性。

## 社区热点

**Issue #3226 —— 平台复用消息 ID 导致入站消息被静默丢弃**  
这是今日唯一新增的 Issue，也是当前讨论焦点。用户发现当平台在同一会话中复用已有消息 ID 时，消息会无声丢失，既不到达 Agent，也没有任何可见提示，最终表现与“Agent 无视用户”完全一致。评论数 1，体现了用户对消息可靠性的高度关注。  
[Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226)

该问题直指通信链路中的容错设计，社区用户期望至少能获得明确的错误提示或去重策略，而不是静默失败。

## Bug 与稳定性

按严重程度排列：

1. **严重：入站消息静默丢弃**（#3226）  
   平台复用消息 ID 时消息被丢弃，无任何日志或用户可见提示，直接影响对话体验。当前无对应 fix PR。  
   [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226)
2. **中：NanoClaw 升级不具备事务性**（#3195）  
   PR 提出让升级过程可回滚/原子化，避免升级失败时留下坏状态。该 PR 仍待合并。  
   [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195)
3. **中：已有 wiring 缺少 channel destinations**（#3145）  
   通过数据库迁移 021 为现有 wiring 回填目的地，并保留自定义名称。该修复待合并。  
   [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)
4. **安全加固：stamp-time symlink/caps/secret 加固**（#3220）  
   作为 Agent Plugins 1.0.0 迁移的一部分，包含安全修复，当前待合并。  
   [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220)

## 功能请求与路线图信号

- **Agent 模板 → Agent Plugins 1.0.0 目录结构**（#3220）：这是一次格式迁移，涉及模板功能引擎改造，同时包含安全加固，属于大的版本演进信号。  
  [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220)
- **模板设置流程与 first-agent 创建流程**（#2909）：与 #3220 紧密关联，旨在引导用户快速创建第一个 Agent，推测将出现在下一个功能版本中。  
  [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)
- **远程 Streamable HTTP MCP 支持**：已通过 #3092/#3221 完成，未来可能进一步扩展更多 provider 或认证方式。  
  [PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) · [PR #3221](https://github.com/nanocoai/nanoclaw/pull/3221)
- **Tavily 工具技能**：已合并，说明社区对实用型 MCP 工具技能需求旺盛，后续可能出现更多类似贡献。  
  [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)

## 用户反馈摘要

- 来自 Issue #3226 的用户体验痛点：当消息因 ID 冲突被丢弃时，用户会误认为 Agent 无视自己，这种“静默失败”比错误提示更令人困惑和失望。用户需求是至少保留可见的错误反馈或进行消息 ID 去重处理。  
  [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226)

## 待处理积压

以下事项需维护者重点关注：

- **PR #2909**：已开放 41 天，模板设置流程与首 Agent 创建流程，核心团队开发中，目前仍待合并，是模板体系的关键下半部分。  
  [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)
- **PR #3145**：已开放 15 天，数据库 backfill 修复，影响已有用户的迁移体验，建议尽快合入。  
  [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)
- **PR #3195**：已开放 6 天，升级事务性修复，关系到所有用户的升级安全，值得优先审查。  
  [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195)
- **PR #3220**：虽开放时间短，但涉及 Agent 模板格式迁移和安全加固，建议保持高优先级跟踪。  
  [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-12

> 数据来源：github.com/nearai/ironclaw | 统计窗口：2026-08-11 ~ 2026-08-12

---

## 1. 今日速览

IronClaw 项目当前处于**高活跃开发期**：过去 24 小时共产生 69 条 Issue/PR 动态（19 条 Issue 更新 + 50 条 PR 更新），PR 合并/关闭率达 50%（25/50），核心团队围绕 Reborn 存储架构、上下文窗口管理、工具披露机制三个方向密集提交修复。社区讨论热度适中（无高赞 Issue），但工程推进节奏显著——今日完成 Anthropic 缓存断点（P0）、上下文保留策略、进程租约恢复等多项关键修复，并新增了 ACP 服务命令等外部集成能力。项目整体健康，无发布阻断性问题。

---

## 2. 版本发布

**无新版本发布。** 今日无 Release 产出，但多个已合并 PR 指向 v1.3.0 里程碑（deferred tool discovery 增强、自动化建议卡片、Design System Epic 等），预计下一版本将集中交付。

---

## 3. 项目进展

今日合并/关闭 25 条 PR，其中最具里程碑意义的有：

### 🔴 P0 级完成
- **[#6997] feat(llm): explicit Anthropic cache_control breakpoints on both transports** — [PR 链接](https://github.com/nearai/ironclaw/pull/6997)
  关闭 Issue #6984（pi-harness 采纳计划 P0 #1）。两条 Anthropic 传输通道（rig/API-key 与 OAuth）现在均显式放置 `cache_control` 断点，替代此前依赖自动缓存或完全缺失的行为，预计显著降低长对话的 token 成本与延迟。

### 🛠 核心稳定性修复
- **[#7471] fix(processes): lease expiry recovers safe runs instead of failing them** — [PR 链接](https://github.com/nearai/ironclaw/pull/7471)
  进程日志心跳与数据面 PostgreSQL 流量隔离；在重放安全检查点恢复超时运行，并增加租约 TTL 宽限期与有界回收预算；在 supervisor、心跳层隔离过期执行器。直接提升自动化运行的可靠性。
- **[#7470] fix(threads): restore listability for unprojected thread index rows** — [PR 链接](https://github.com/nearai/ironclaw/pull/7470)
  修复了线程索引行存在但侧边栏不展示的问题——此 bug 会导致部分历史对话"消失"。
- **[#7503] fix(loop): retain accepted task across context eviction** — [PR 链接](https://github.com/nearai/ironclaw/pull/7503)
  在 128 条消息截断和 token 预算裁剪后仍保留用户任务消息；超长任务显式返回 `BudgetExceeded` 而非静默丢弃。与 #7484 对应。

### 🎨 WebUI 体验
- **[#7480] fix(webui): reveal long conversation titles on hover** — [PR 链接](https://github.com/nearai/ironclaw/pull/7480)
  新增 `MarqueeText` 溢出感知组件，悬停时滚动展示超长对话标题（关闭 #7481）。

### ⚙️ 部署与运维
- **[#7514] fix: enable Railway shell for hosted volume profile** — [PR 链接](https://github.com/nearai/ironclaw/pull/7514)
  为 Railway hosted volume 配置启用沙箱 shell，仅 release 环境可用。改善托管环境的可运维性。

---

## 4. 社区热点

今日讨论活跃度中等，评论最多的 Issue 是架构级 Epic：

- **[#7482] Epic: Pluggable agent loops — ACP executor, edge credential injection, kernel architecture**（3 条评论）— [Issue 链接](https://github.com/nearai/ironclaw/issues/7482)
  提出将 IronClaw 从"自带 agent loop + 工具实现"转向纯 **kernel** 架构：调度、租户隔离、能力膜、密钥中介、出站边界、审计、入站通道由内核负责，而 agent loop 交给现成 ACP agents。这是项目架构方向的一次重大提议。
- **[#7405] Improve deferred tool discovery with complete signatures and namespace-aware catalog previews**（2 条评论，已关闭）— [Issue 链接](https://github.com/nearai/ironclaw/issues/7405)
  讨论集中在 `tool_search` 返回签名完整性、目录预览的命名空间感知，目标是减少模型在工具查找上的额外轮次，已随 v1.3.0 关闭。

**社区诉求洞察：** 讨论集中在**工具发现效率**和**agent 架构演进**两个方向，反映出当前用户对长会话 token 开销的敏感，以及社区对 ACP 生态互通的期待（今日另有 PR #7513 新增 ACP serve 命令）。

---

## 5. Bug 与稳定性

今日报告 10 个 bug（含 4 个已关闭），按严重程度排序：

### 🔥 高危（影响核心功能 / 数据一致性）
| Bug | 状态 | 修复 PR |
|---|---|---|
| **[#7484] 上下文窗口静默驱逐任务消息**（128 条硬上限导致任务丢失）— [Issue 链接](https://github.com/nearai/ironclaw/issues/7484) | OPEN | ✅ [#7503](https://github.com/nearai/ironclaw/pull/7503)（已合并）+ [#7504](https://github.com/nearai/ironclaw/pull/7504)（待合并，压缩而非静默驱逐） |
| **[#7485] token 估算器对 ASCII 重复计数，实际上下文窗口减半** — [Issue 链接](https://github.com/nearai/ironclaw/issues/7485) | OPEN | 暂无 |
| **[#7487] `tool_search` 将工具标记为已披露但未返回 schema，使 describe-first 安全网失效**（oneOf 还坍缩为空） | ✅ 已关闭 | 随关闭流程修复 |
| **[#7488] 披露桥接工具硬编码 `Exclusive` 并发，导致序列化处理元数据查询** | ✅ 已关闭 | 随关闭流程修复 |

### 🟡 中危（影响特定场景）
| Bug | 状态 |
|---|---|
| **[#7486] 类型化 no-progress 退出机制在幂等读/轮询上误报**，长任务提前终止 — [Issue 链接](https://github.com/nearai/ironclaw/issues/7486) | OPEN |
| **[#7490] `retry_disposition()` 静默重驱表为死代码**，~25 类瞬态故障分类未被使用 — [Issue 链接](https://github.com/nearai/ironclaw/issues/7490) | OPEN |
| **[#7505] Memory target 别名解析仅在一个 provider 中实现**，mem0 存下字面量 `target: "memory"` — [Issue 链接](https://github.com/nearai/ironclaw/issues/7505) | OPEN，修复 PR [#7512](https://github.com/nearai/ironclaw/pull/7512)（待合并） |
| **[#7508] GitHub MCP 扩展启动提示"endpoint verification"而非直接连接**，用户体验困惑 — [Issue 链接](https://github.com/nearai/ironclaw/issues/7508) | OPEN（QA 标记） |

### 🟢 低危（体验优化）
- **[#7481] 长对话标题在侧边栏截断无法阅读** — 已修复，PR #7480 已合并。
- **[#7483] NEAR AI 连接/模型探测在 API key 为空时双接口失败** — 已关闭，改为使用已认证 runtime 会话。

---

## 6. 功能请求与路线图信号

今日出现 5 个新功能/增强请求，按路线图契合度排序：

| 功能请求 | 来源 | 路线图信号 |
|---|---|---|
| **[#7482] 可插拔 agent loops（ACP executor + kernel 架构）** — [Issue 链接](https://github.com/nearai/ironclaw/issues/7482) | serrrfirat（核心维护者） | 高——重新定义项目边界，配合 [#7513 ACP serve 命令 PR](https://github.com/nearai/ironclaw/pull/7513)，IronClaw 正向 ACP 生态基座演进 |
| **[#7489] `result_read` 24 KiB 预览上限 + 读前编辑全量门槛**（2000 行不可编辑墙）— [Issue 链接](https://github.com/nearai/ironclaw/issues/7489) | serrrfirat | 中——跟踪 issue，预计通过 #7435 OMP cutover 解决 |
| **[#7517] Cloud.near.ai 支持 Google/GitHub 登录后附加 NEAR 钱包进行 staking** — [Issue 链接](https://github.com/nearai/ironclaw/issues/7517) | sergeiest（社区用户） | 中——提升功能可达性的真实用户痛点，涉及支付/钱包 UX |
| **[#7496] IdentyClaw Passport 的主机中介集成**（`builtin.idcp` + practitioner 助手）— [Issue 链接](https://github.com/nearai/ironclaw/issues/7496) | discernible-io（社区） | 低-中——需要宿主侧保管私钥/JWT，与 processless/secure-default 配置存在设计张力 |
| **[#7498] 自动化建议卡片 V1 后端**（对应 #7038 Design System Epic）— [PR 链接](https://github.com/nearai/ironclaw/pull/7498) | henrypark133 | 中——已实现 `GET /api/webchat/v2/suggestions`，前端落地后进入 v1.3.0 |

**趋势判断：** 今日功能请求集中在 **ACP 互操作、上下文窗口经济性、WebUI 可访问性** 三条线索，与 v1.3.0 的 deferred tool discovery、Design System 目标高度吻合。

---

## 7. 用户反馈摘要

- **Staking 路径缺失（#7517）**：Google/GitHub 登录用户无法为推理 stake，只能走 Stripe 信用卡；"Sign in with NEAR"仅作为登录选项而非可附加钱包。属于支付基础设施的 UX 缺口，反馈来自实际用户。
- **GitHub MCP 扩展启动困惑（#7508）**：扩展已经注册安装，却抛出 endpoint verification 的多端点混淆提示，用户预期"直接连接"。暴露了 MCP 扩展集成流程的可用性短板。
- **记忆跨会话不生效（#7185，经 PR #7365 修复）**：此前模型从不调用 `memory.write`，用户陈述的偏好无法在后续会话被召回。今日 #7365 仍在待合并队列，社区期盼已久。
- **工具搜索侧的安全网被击穿（#7487，已修复）**：`tool_search` 返回后工具被认为"已披露"，但缺少 schema，导致 describe-first 保护机制失效。属于内部逻辑一致性问题，已随修复关闭。

---

## 8. 待处理积压

以下项长期未闭环，建议维护者关注：

| 项目 | 等待天数 | 说明 |
|---|---|---|
| **[#6879] Automation runs are hit-or-miss: 无人值守运行退化为普通交互聊天轮次**（Epic）— [Issue 链接](https://github.com/nearai/ironclaw/issues/6879) | 14 天（7/29 创建） | 核心体验问题——自动化触发后未走专用执行路径，小模型下表现不稳定。今日 #7471 合并在进程层改善了恢复，但触发→运行的管道问题仍待系统性解决 |
| **[#5910] fix: hydrate approval gates on notification open** — [PR 链接](https://github.com/nearai/ironclaw/pull/5910) | 33 天（7/10 创建） | 审批门在通知打开时状态不同步，修复已就绪但迟迟未合并，可能与订阅启动时序重构相关 |
| **[#7365] feat(memory): memory-save guidance + always-on MEMORY.md prompt lane** — [PR 链接](https://github.com/nearai/ironclaw/pull/7365) | 5 天 | 修复跨会话记忆丢失的核心 PR，仍在待合并队列中，涉及 prompt 架构变更需谨慎评审 |
| **[#7038] Epic: Storybook + AI-first Design System** — [Issue 链接](https://github.com/nearai/ironclaw/issues/7038) | 9 天（8/3 创建） | 大型 UX 基础设施 Epic，今日 #7498 已提交首块后端拼图，前端工作尚待启动 |

---

**总结：** IronClaw 今日处于**高产出、低风险**状态——P0 缓存优化与多个上下文窗口 bug 修复齐头并进，ACP 支持（#7513）和 kernel 化架构（#7482）为下一个大版本铺垫方向。v1.3.0 的 deferred tool discovery 已关闭，Design System 正在照计划推进，但自动化可靠性（#6879）作为老问题应优先排期。项目整体健康度良好。

*本日报由 AI 自动生成，数据截至 2026-08-12。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-12

## 1. 今日速览

过去 24 小时项目保持活跃：发布新版本 **2026.8.11**（主要增强 Cowork 协作体验），合并 6 条 PR、关闭 3 条 Issue，同时有 3 条新 PR 待评审。此外，一批 4 月创建的旧 Issue 被自动标记为 stale 并关闭，显示项目维护者正在清理积压。整体来看，项目处于持续推进状态，核心方向集中在 **模型选择器体验优化、Cowork 会话管理、以及稳定性修复**。值得关注的是，今日有 2 条与模型 API 受限、网关启动相关的老 Issue 仍在积压，社区对这些问题的反馈较为迫切。

---

## 2. 版本发布

### LobsterAI 2026.8.11（发布于 2026-08-11）

**主要更新内容：**

- **feat(cowork):** 新增 collapse-agent-tasks 快捷键，并允许在输入时使用修饰键快捷键（PR #2469，作者 fisherdaddy）
- **feat(cowork):** 在侧边栏中标记定时任务会话（PR #2466，作者 liuzhq1986）

**说明：** 昨日（8.11）另有 **Release/2026.8.10** 合并入 main（PR #2477），该版本包含：可配置模型思考等级、Cowork 进度可见性增强、定时任务识别、本地文件工作流改进、启动/运行时可靠性提升以及设置交互优化。

**迁移注意事项：** 从 PR #2457 的描述看，新版本引入了 **服务端驱动的思考等级配置**，并支持 OpenClaw 别名映射（产品级 `max` → 运行时 `xhigh`）。如果使用自定义模型配置，建议检查 `agents.thinking_level` 与 `cowork_sessions.thinking_level` 字段是否与旧配置兼容。

---

## 3. 项目进展

今日合并/关闭的 PR 共 6 条，按重要程度排列：

**🎯 核心功能落地：**

- **PR #2457 — feat(models): add configurable thinking levels** （已合并，作者 btc69m979y-dotcom）
  服务端驱动的思考等级配置，支持按 session/agent 持久化选择，并新增版本化模型请求选项。这是 2026.8.10 版本的核心功能。

- **PR #2477 — Release/2026.8.10** （已关闭/合并，作者 fisherdaddy）
  将 2026.8.10 发布分支合并入 main，包含上述所有功能。

**🎨 UI/交互改进：**

- **PR #2476 — feat(ui): dismiss the topmost overlay on Escape** （已合并，作者 fisherdaddy）
  修复了嵌套模态框（Modal）下按 Esc 同时触发多个层关闭的问题，通过注册 layer id 保证只有最上层响应，并兼容 IME 输入。

- **PR #2474 — fix(sidebar): align sites icon stroke weight** （已合并，作者 liuzhq1986）
  侧边栏图标视觉对齐的小修复。

**🐛 功能修复：**

- **PR #1241 — feat(settings): Settings 关闭无确认，API Key 等配置静默丢失**（已关闭/合并，作者 MaoQianTu）
  针对 Issue #1237 的解决方案：新增脏检测机制，在用户修改配置但未保存时关闭弹窗（背景点击、X、Cancel）会弹确认提示。

- **PR #1239 — feat(main): AI 任务完成时闪烁任务栏/Dock 图标提醒用户**（已合并，作者 fhraiwxr）
  跨平台窗口提醒：Windows 闪烁任务栏、macOS 弹跳 Dock 图标，AI 任务完成或出错时提醒用户。

**项目整体向前迈进的评估：** 本次更新使模型配置粒度细化到单个模型/会话，同时增强了任务可感知性（侧边栏标记、系统级通知），项目的“AI 协作”体验更完整。

---

## 4. 社区热点

今日讨论最活跃的 Issue 为 **#1183「一直循环跳出遮罩启动网关」**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1183)），这是唯一仍处于 Open 状态的 Issue，创建于 2026-04-01，至今有 1 条评论。

**用户反馈的场景：** Windows 环境，添加模型并调用后关闭模型开关，回到首页出现“openClaw 网关未能在规定时间内启动成功”提示，且持续弹出遮罩。这属于**阻塞性使用问题**，影响核心功能。

**值得关注的新 PR：** **#2475 — fix(model-selector): give each model its own thinking level**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2475)，Open，作者 fisherdaddy）
修复“思考强度”设置在不同模型之间互斥的问题——两个模型无法同时保持非默认档位。这可能是用户高频遇到的实际痛点，社区对模型控制精细化的需求在增强。

---

## 5. Bug 与稳定性

**🔴 严重（功能不可用/阻塞）：**

- **Issue #1240 [CLOSED/stale] — 现有大模型受限后无法切换到其他大模型，所有对话框任务都会受限**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1240)）
  用户报告 API 请求次数耗尽后，切换到其他模型同样受限，且重启程序报错，还原配置才能启动。虽然被标记 stale 关闭，但问题可能并未真正解决。**未发现对应的 fix PR。**

- **Issue #1183 [OPEN/stale] — 一直循环跳出遮罩启动网关**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1183)）
  网关启动失败导致循环弹窗，Windows 环境，自 4 月起未解决。**未发现对应的 fix PR。**

**🟡 中等：**

- **Issue #2062 [CLOSED/stale] — 任务超过最大时长**（[链接](https://github.com/netease-youdao/LobsterAI/issues/2062)）
  24 小时连续运行任务被自动停止，用户不清楚任务是否还在后台执行。属于**任务调度/超时策略**问题。**未发现对应的 fix PR。**

**🟢 轻微（已有修复）：**

- **Issue #1237 [CLOSED/stale] — Settings 关闭无确认，API Key 等配置静默丢失**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1237)）
  已在 PR #1241 中修复（脏检测 + 未保存确认），并随版本发布。

---

## 6. 功能请求与路线图信号

从今日 PR 和 Issue 中，可以识别出以下路线图信号：

| 信号 | 来源 | 状态 | 可能纳入版本 |
|------|------|------|-------------|
| **每模型独立思考等级配置** | PR #2475（Open） | 已发现缺陷并提交修复 | 下一 patch 版本 |
| **可配置模型思考等级** | PR #2457（已合并） | 已进入 2026.8.10 | ✅ 已发布 |
| **AI 任务完成系统通知** | PR #1239（已合并） | 已进入 main | ✅ 已发布 |
| **设置未保存关闭确认** | PR #1241（已合并） | 已进入 main | ✅ 已发布 |
| **定时任务会话在侧边栏的标识** | PR #2466（在 2026.8.11 Release 中） | 已发布 | ✅ 已发布 |

**趋势判断：** 项目目前的迭代方向是“**让 AI 协作更可控、更可感知**”——从思考强度控制、任务进度可见性、到系统级任务完成提醒，都体现了这一思路。建议社区关注 **#2475** 的合并进展，它可能在 2026.8.12 或 13 的版本中快速落地。

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中，提炼如下用户声音：

- **API 受限导致整机瘫痪（#1240）：** 用户在大模型 API 配额耗尽后，切换到任何其他模型都被提示受限，且重启失败。即使确认“该 API 在其他龙虾上运行畅通”，当前实例仍被禁用。这暴露了**模型级故障隔离**的缺失——单个模型不可用不应拖垮整个应用。用户情绪较为焦虑（“lobsterai 整体陷入瘫痪”），期望是能快速切换模型恢复工作。

- **任务超时语义不清晰（#2062）：** “Task timed out” 出现后，用户不确定任务是被终止还是仍在后台运行。期望能提供更明确的**任务状态指示与续跑机制**。

- **网关启动问题反复出现（#1183）：** 用户操作路径（添加模型→调用→关闭开关→保存）能稳定复现网关启动失败，遮挡 UI 影响操作。该问题已存在 4 个月，当前仍未有官方修复，用户大概率已切换替代方案或忍受该问题。

---

## 8. 待处理积压

以下内容长期未得到响应或合入，建议维护者优先关注：

| 类型 | 编号 | 标题 | 创建时间 | 最后更新 | 备注 |
|------|------|------|----------|----------|------|
| Issue | [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) | 一直循环跳出遮罩启动网关 | 2026-04-01 | 2026-08-11 | 4 个月未解决，阻塞用户核心操作 |
| Issue | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 大模型受限后无法切换模型 | 2026-04-01 | 2026-08-11 | 被标记 stale 关闭，但无修复 PR，有复发风险 |
| PR | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | fix(cowork): hide OpenClaw main agent sessions from session list | 2026-04-01 | 2026-08-11 | 4 个月未合并，标记 stale 但仍 Open |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): bump electron group（2 updates） | 2026-04-02 | 2026-08-11 | 依赖升级 PR，electron 40→43，长期未合并 |

**建议：** 其中 **#1183** 和 **#1240** 的用户反馈都指向“故障隔离”能力不足，涉及网关启动和模型切换的底层机制，建议维护团队排期优先处理，避免同类问题反复出现。PR #1277 的 Electron 升级跨度较大（40→43），建议评估安全性后尽快合入或关闭。

---

*本日报由 AI 生成，数据来源为 GitHub API，统计时间为 2026-08-12。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-08-12

## 1. 今日速览

- 过去 24 小时内，项目无新开或关闭的 Issue（Issue 更新为 0），Issue 讨论活跃度较低。
- 有 1 个新 Pull Request（#1190）处于开放状态，尚未合并，是目前唯一的代码动态。
- 无新版本发布，项目版本线保持平稳。
- 虽然 Issue 与 Release 均无更新，但 PR #1190 从摘要看是一个功能跨度较大的核心增强（CalDAV 连接器、本地数据集访问等），表明项目仍在推进重要能力建设。
- 总体活跃度评估：**中等偏低** — 近期社区互动偏少，但工程侧有实质性功能开发，健康度良好。

---

## 2. 版本发布

今日无新版本 Release，暂无更新内容、破坏性变更或迁移说明可报告。

---

## 3. 项目进展

### 开放中的关键 PR：连接器持久化与 CalDAV 支持

- **[#1190 [OPEN] Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)** — 作者：penso，创建于 2026-08-11，更新于 2026-08-11

该 PR（尚未合并）为项目带来了多项高价值能力：

- **Provider-neutral connector persistence**：连接器状态持久化，不绑定特定服务商，为多服务兼容奠定基础。
- **Atomic CalDAV snapshots**：原子性快照，保证数据一致性与可靠性。
- **Scheduling & projections**：引入调度机制和投影能力，为日历数据同步与展示提供工程支撑。
- **Bounded local full-text search**：受限的本地全文本搜索，提升本地数据检索体验。
- **Prompt-compiled dataset plans**：支持基于 prompt 编译的数据集方案，增强 AI  Agent 对本地数据的利用能力。
- **Trusted read-only `connections` agent tool**：新增只读的本地数据集访问工具，平衡安全性与可用性。
- **Settings > Connectors account/dataset management UI**：用户在设置界面即可管理连接器账户与数据集。

**项目推进判断**：该 PR 一旦合并，将显著扩展 Moltis 作为 AI 助手的数据接入边界，特别是本地日历数据集管理方面，属于 **功能性里程碑**。目前尚未合入，但方向明确；维护者可重点关注审查进度。

---

## 4. 社区热点

今日真正活跃且值得关注的讨论对象为开放中的 PR #1190，尽管暂无评论数据（评论数未显示），但该 PR 涵盖多模块改动，具备较高社区讨论潜力。

- **[#1190 Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)**

**背后的诉求：**  
用户（或贡献者）需要 Moltis 能持久、稳定地接入本地日历数据（CalDAV 协议），并让 AI Agent 可以在可信、只读的边界内访问本地数据集。这反映出社区对 **本地优先 + AI 可操作数据** 的强烈需求——即在保护隐私的同时，使 Agent 具备实际生产力（如读取日程、规划安排）。

---

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归问题报告。  
项目当前无未解决的稳定性隐患信息，也无相关 fix PR 动态。

---

## 6. 功能请求与路线图信号

今日没有来自 Issue 的新功能请求，但 PR #1190 本身透露出较强的路线图信号：

| 信号 | 可能纳入下一版本的功能 |
|------|------------------------|
| CalDAV 连接器持久化 | 日历同步、日程管理、跨设备一致性 |
| 原子性快照 | 数据备份、状态恢复、审计 |
| 调度与投影 | 定时任务、事件预测、智能提醒 |
| 本地全文本搜索 | 本地数据语义检索、RAG 数据源 |
| 只读 `connections` Agent 工具 | AI 安全访问本地数据，明确权限边界 |
| Settings > Connectors 管理界面 | 用户可配置的数据源管理体验 |

若该 PR 被维护者吸收进入主线，则下一版本的核心能力将重点围绕 **本地数据连接与 AI 数据访问基础设施** 展开。

---

## 7. 用户反馈摘要

今日无公开 Issue 评论数据可挖掘。  
但从 PR #1190 的摘要与设计可以看出：

- **用户痛点**：AI 助手缺少对本地日历/数据集的可信、持久访问能力；现有连接器逻辑不够通用且无法保证数据一致性。
- **使用场景**：用户希望在本地环境中，让 AI 通过只读工具查询自己的日程、规划时间，并保持数据同步的可靠性。
- **满意之处**：贡献者主动提出了原子化快照和调度方案，表明社区重视数据一致性与稳定性，这种工程严谨性值得肯定。

---

## 8. 待处理积压

当前明确处于待办状态的重要 PR：

- **[#1190 [OPEN] Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)**  
  状态：开放，等待审查/合并  
  建议维护者关注：该 PR 涉及多个子系统改动，建议安排 review 并明确是否纳入下一个里程碑；若长期搁置，可能阻塞社区后续贡献者围绕该能力的二次开发。

---

> 数据来源：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)  
> 报告日期：2026-08-12  
> 统计窗口：过去 24 小时（截至数据采集时间）

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-12

> 数据来源：GitHub（agentscope-ai/QwenPaw）· 统计窗口：过去 24 小时

---

## 1. 今日速览

过去 24 小时项目保持高活跃度：共更新 22 条 Issue（新开/活跃 9 条，关闭 13 条）和 49 条 PR（待合并 23 条，已合并/关闭 26 条），并发布 v2.1.0-beta.3。Issue 关闭数超过新增数，PR 合并/关闭量与待合并量接近持平，说明维护团队响应及时、合入节奏稳定。值得关注的是，用户侧对**公式渲染、MCP 稳定性、中文输入法兼容性**的呼声集中，而多个对应的修复 PR 已合入或正在推进，v2.1.0-beta.4 的版本号已被占位，正式版 v2.1.0 的发布文档也在准备中。

---

## 2. 版本发布

### v2.1.0-beta.3

- **发布时间**：2026-08-11（Beta 预发布版）
- **Release 页面**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.3

**主要变更：**

- **Feat/files workspace blog**（PR [#6783](https://github.com/agentscope-ai/QwenPaw/pull/6783)，by @zhaozhuang521）——新增文件工作区（workspace）的博客/展示功能支持。
- **fix(provider): expire stale capability cache entries and clear on model switch**（PR [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723)，by @ningblue）——修复 provider 能力缓存过期失效问题，并在切换模型时主动清理缓存，避免模型能力信息错乱。
- **chore: 版本号 bump**，为后续 beta.4 做准备。

**破坏性变更与迁移注意：**

- 该版本为 Beta 预发布，未在 Release Notes 中标注明确破坏性变更。
- 已知风险：Issue [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) 报告了**插件可在无用户确认的情况下静默创建 cron 任务并注入用户可见消息**，此问题在 beta.3 中复现，属于权限模型缺口，升级用户需谨慎安装第三方插件。
- 后续提醒：PR [#6920](https://github.com/agentscope-ai/QwenPaw/pull/6920) 已将版本号 bump 至 `2.1.0b4`，预计下一迭代很快发布。

---

## 3. 项目进展

### 合入的重要 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898) | 修正 `read_file` 工具描述，明确仅支持文本文件 | 减少模型误用二进制文件的概率，提升工具调用准确性 |
| [#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915) | 修复 Unicode PDF/SVG 文件预览失败，并统一暗色主题样式 | 文件工作区在非英文文件名场景下的可用性显著提升 |
| [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) | 统一代码块渲染体验：LaTeX/Mermaid 增加 Preview/Source 标签页 | 直接回应社区长期诉求的公式渲染问题，预计在 beta.4 生效 |
| [#6909](https://github.com/agentscope-ai/QwenPaw/pull/6909) | 渠道配置保存时，若 Bot 已被其他 Agent 使用则弹出冲突警告 | 减少多 Agent 部署时的渠道配置冲突 |
| [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) | 修复压缩前自动记忆待提交 turn 未 flush 的问题（fixes #6555） | 消除上下文压缩与自动记忆之间的数据丢失隐患 |
| [#6891](https://github.com/agentscope-ai/QwenPaw/pull/6891) | 增强 Computer Use 原生输入工作流：新增有界键盘序列操作 | 减少桌面工作流往返开销，提升输入可靠性 |
| [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) | 编写 v2.1.0 中英文发布说明，并同步各语言 README | 正式版 v2.1.0 发布已进入文档准备阶段 |

### 项目整体推进判断

- 今日合入的 PR 集中覆盖 **文件工作区、代码块渲染、渠道冲突检测、记忆生命周期、Computer Use** 五大方向。
- 结合 [#6920（bump to 2.1.0b4）](https://github.com/agentscope-ai/QwenPaw/pull/6920) 与 [#6875（v2.1.0 发布说明）](https://github.com/agentscope-ai/QwenPaw/pull/6875)，项目正处于 **beta.3 → beta.4 → v2.1.0 正式版** 的加速收敛阶段。

---

## 4. 社区热点

### 讨论热度 Top 3

| Issue | 标题 | 评论数 | 状态 |
|---|---|---|---|
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | [Bug] mcp工具规律性失效 | 10 | 已关闭 |
| [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) | [Feature] 公式渲染问题；会话分组管理；活动会话背景 | 7 | 已关闭 |
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | [Bug] Loading animation does not disappear after Agent response completes | 4 | 已关闭 |

### 热点诉求分析

- **#6732（MCP 工具失效）**：用户报告每隔数小时 MCP 工具即无法调用，必须重启 Docker 容器才恢复。10 条评论说明多人遇到同样问题，虽然状态为已关闭，但用户侧对 MCP 长期稳定性仍高度关注。与此相关的超时配置 PR [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) 正在待合并队列中。
- **#6893（公式渲染 / 会话管理）**：用户明确对比 Cherry Studio 的公式渲染能力，指出 QwenPaw 在同一 LaTeX 公式下显示为纯文本，体验尴尬。这一诉求与早期 [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)、[#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756) 一脉相承，而 PR [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) 的合入正是对此的正面回应。
- **#5790（加载动画不消失）**：Agent 已完成回复但 spinner 仍持续显示，属于前端状态同步 bug，已经关闭说明已定位处理。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 高严重度

| Issue | 描述 | 状态 / Fix PR |
|---|---|---|
| [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) | v2.0.1 经常性崩溃：`console process/reply failed`（pip 安装 + 网页端），用户已附完整 Traceback | OPEN，暂无 fix PR，需优先排查 |
| [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | Agent 间消息导致**每条消息生成一个新的 Agent 会话**，并发的"影子会话"造成重复执行 | OPEN，暂无 fix PR，属架构级问题 |
| [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP 工具规律性失效，重启容器才恢复 | CLOSED，需确认关闭原因；关联 PR [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) 尚无定论 |

### 中严重度

| Issue | 描述 | 状态 |
|---|---|---|
| [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | v2.1.0b2 中文输入法（IME）`compositionEnd` 触发消息队列崩溃，输入框不可用 | OPEN，影响中文用户核心输入路径 |
| [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | Console 空闲时因无限 CSS 动画导致 WebKit 渲染器持续重绘，CPU 占用约 18–27% | CLOSED，性能回归已处理 |
| [#6910](https://github.com/agentscope-ai/QwenPaw/issues/6910) | `PUT /api/config/channels/{channel_name}` 对非法单渠道 payload 返回 HTTP 500，而非 Pydantic 校验错误 | OPEN，建议转为正式 fix PR |

### 低严重度

| Issue | 描述 | 状态 |
|---|---|---|
| [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) | 日记页面子文件夹内笔记被错误分组到错误日期下 | OPEN |
| [#6901](https://github.com/agentscope-ai/QwenPaw/issues/6901) | 对话中重复出现 GitHub 链接 | CLOSED |

---

## 6. 功能请求与路线图信号

### 新提出的需求

| Issue | 需求 | 路线图预判 |
|---|---|---|
| [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) | Agent 应能把任意报告/消息主动投递进收件箱（Inbox），不限于 cron/heartbeat/记忆任务 | 较新颖的交互范式，可能进入中长期规划 |
| [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) | 插件静默创建 cron job 并向用户会话注入消息（安全/权限模型缺口） | 中高优先级。涉及插件审批机制，预计下一版本需要增加权限确认流程 |
| [#6882](https://github.com/agentscope-ai/QwenPaw/issues/6882) | 如何集成 CopilotKit，希望提供示例或思路 | 社区集成类问题，官方尚无明确响应 |
| [#6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) | 隔离 Chat 项目目录与 Agent 内部 workspace 目录 | 与架构清晰度相关，且已有对应 PR 在推进（[#6779](https://github.com/agentscope-ai/QwenPaw/pull/6779) 等），大概率进入 2.1.x |
| [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893) | 公式渲染、会话分组管理、活动会话背景 | 公式渲染已通过 [#6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) 解决；会话分组管理尚未见对应 PR |

### 已有 PR 支撑的路线图信号

- **MCP 配置增强**：PR [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) 为 MCP 增加可配置的工具调用超时（默认 120s），对应 Issue #6724，合并可能性高。
- **桌面端体验**：PR [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) 记住窗口位置/大小，属于零风险体验优化。
- **市场统一**：PR [#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880) 将 apps/plugins/skills 统一到一个 `/market` 页面，预示市场产品形态上的一次整合。
- **搜索能力替换**：PR [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) 计划将内置搜索从 Tavily 替换为 AnySearch，附带修复 MCP env-ref 绑定缺陷。
- **上下文架构收敛**：PR [#6830](https://github.com/agentscope-ai/QwenPaw/pull/6830) 与 [#6779](https://github.com/agentscope-ai/QwenPaw/pull/6779) 都在推进 Scroll 与 AgentScope 生命周期的统一，是 2.1.0 的核心重构方向。

---

## 7. 用户反馈摘要

以下提炼自今日活跃 Issue 的真实用户声音：

- **MCP 可靠性是部署用户的头号痛点**（[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)）："每隔一些时间（可能是一个晚上或者几个小时）mcp工具就无效了……重启docker容器后就恢复"——对于生产环境使用者，这种不可预期性非常影响可用性。
- **公式渲染是科学/学术用户的刚需**（[#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893)）：用户用详细对比说明 QwenPaw 与其他工具的差距，"它其实应该有这个能力"。
- **中文输入法用户遭遇功能不可用**（[#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885)）：升级 b2 后消息队列功能在使用中文 IME 时彻底崩溃，属于高影响回归。
- **QQ 机器人场景下有信息过载问题**（[#6897](https://github.com/agentscope-ai/QwenPaw/issues/6897)）：用户不希望把每个工作流步骤都推送到 QQ 群，会触发限流并造成打扰，建议精简推送内容。
- **用户社群建设被多次提及**（[#6895](https://github.com/agentscope-ai/QwenPaw/issues/6895)）："微信用户人群多啊，便于交流"——反映出社区成员对更低门槛交流渠道的期望。
- **桌面端细节体验仍有改进空间**（[#4154](https://github.com/agentscope-ai/QwenPaw/issues/4154)）：字体大小不可调节、文件路径不可点击，长期使用易疲劳。

---

## 8. 待处理积压

### 长期未合并的关键 PR

| PR | 创建时间 | 存活天数 | 说明 |
|---|---|---|---|
| [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) 图片全屏画廊 | 2026-06-24 | ~49 天 | 功能完整但长期搁置，建议维护者明确合入或关闭 |
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) 斜杠命令自动补全 | 2026-07-08 | ~35 天 | 标有 Under Review，横跨 TUI 和 Web 控制台，覆盖广但等待时间长 |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 统一 provider 发现/路由/模型元数据 | 2026-07-21 | ~22 天 | 与 #6167 相关，属于架构级改动，需要充分 review，但长期悬置会阻塞后续 provider 生态开发 |
| [#6779](https://github.com/agentscope-ai/QwenPaw/pull/6779) 上下文对齐 AgentScope 生命周期 | 2026-08-07 | ~5 天 | 重构核心上下文实现，风险较大，需安排专项评审 |
| [#6830](https://github.com/agentscope-ai/QwenPaw/pull/6830) 跨压缩和会话生命周期保持自动记忆状态 | 2026-08-08 | ~4 天 | 直接影响记忆功能正确性，建议优先合并 |

### 长期未解决/需跟进的重要 Issue

| Issue | 创建时间 | 存活天数 | 当前状态 |
|---|---|---|---|
| [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) 加载动画不消失 | 2026-07-05 | ~38 天 | 虽已关闭，但确认修复方案是否同步进入 beta.4 值得跟踪 |
| [#6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) v2.1.0-beta.3 安装验证 Release Duty | 2026-08-11 | 截止时间已过 | **OPEN**，截止到 2026-08-11 15:45 UTC 的验证结果未回填，需提醒 Release Manager 确认 |

### 维护者行动建议

1. **优先响应** [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919)（v2.0.1 崩溃）——这是当前唯一带完整 Traceback 的高严重度崩溃，影响存量稳定版用户。
2. **安排专项评审** [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 与 [#6779](https://github.com/agentscope-ai/QwenPaw/pull/6779)，避免架构级 PR 在队列中腐烂。
3. **确认 Release Duty 闭环**：跟进 [#6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) 的验证结果，保证 beta.3 → beta.4 按节奏推进。

---

*本日报由 AI 自动生成，数据基于 GitHub 公开信息。如有疏漏，以原始 Issue/PR 为准。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-12

## 1. 今日速览

- 过去 24 小时项目保持**高活跃度**：50 条 Issue 更新（40 条活跃/新开、10 条关闭），50 条 PR 更新（49 条待合并、1 条已合并），无新版本发布。
- 项目当前处于 **v0.9.0 安全架构与 RFC 密集评审期**，社区讨论重心集中在 Goal mode、OpenAI Chat Completions 兼容、shell 高危命令管控等方向。
- 唯一合并的 PR [#9936](https://github.com/zeroclaw-labs/zeroclaw/pull/9936) 是一次跨仓库同步，cherry-pick 了 9 个上游安全与正确性修复，说明维护侧正在收口安全欠账。
- 新增 2 个 P1 安全级 Bug：[#9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883)（WebP 无界解码）与 [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)（bounded delegate 工作区越界），均尚无合并的修复 PR。
- **健康度提示**：PR 合并率偏低（1/50）、大量 PR 处于 `needs-author-action`，维护者评审队列（见 [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）是当前最主要的流程瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**唯一合并 PR：**

- **[PR #9936](https://github.com/zeroclaw-labs/zeroclaw/pull/9936) fix(sync): cherry-pick upstream security and correctness fixes**（已合并/关闭）— 自 2026-07-26 的 merge-base 起选择性同步 9 个上游修复（均带 `-x`）；计划中的 #9452、#8936 因已通过 Wave C2 进入本地树而被跳过。此次同步标志着安全修复链条开始向各分支收敛。

**今日关闭的重要 Issue（共 10 条）：**

- [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269)（RFI，13 评论）：Token 消耗与成本管理公开征集结束，进入设计方向决策阶段。
- [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)（RFC）：结构化可观测性增强提案完成评审周期后关闭。
- [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)（Bug）：Docker Compose 网关回环绑定导致端口不可达，**S1 工作流阻塞**，已关闭。
- [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545)（Task）：rustdoc 警告门禁已落地为 PR CI 必检项。
- [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)（Bug）：daemon reload 未绑定 SIGUSR1，且安全警告会误导操作员发送 kill 信号，已关闭。

**今日新开/更新的 PR 亮点（均待合并）：**

- [#9935](https://github.com/zeroclaw-labs/zeroclaw/pull/9935)（新开）：Constraint 支持未知类型保留 + 读取 strictness 模式。
- [#9926](https://github.com/zeroclaw-labs/zeroclaw/pull/9926)：Web Dashboard 增加 PWA manifest 与 apple-touch-icon。
- [#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885)：修复 `[sop] sops_dir` 默认值未在 daemon 生效的问题（对应 #9779）。
- [#9911](https://github.com/zeroclaw-labs/zeroclaw/pull/9911)：Matrix `mention_only` 下回复机器人消息被静默丢弃的修复。
- [#9918](https://github.com/zeroclaw-labs/zeroclaw/pull/9918)：修复 gateway 对完整 `session_key` 处理时产生 `gw_gw_` 双重前缀的 Bug。

**整体判断**：项目处于"安全架构收口 + 多路线图并行"（SOP 控制平面、zerocode SOP pane、身份与访问里程碑）阶段；每日 50+ 条 Issue/PR 更新属于高活跃，但合并吞吐有限，社区产出集中在 RFC 讨论而非合入落地。

## 4. 社区热点

| Issue | 评论数 | 主题 | 诉求分析 |
|---|---|---|---|
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 19 | RFC: Goal mode v1 — bounded foreground Matrix work | 需要跨多轮 agent turn 的持久化有界目标执行；作者 vrurg 在收敛首版范围，避免过早耦合重启交接、渠道准入、Web 与异步子任务 |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 18 | RFC: ZeroClaw Chat Completions profile | **生态互操作是社区最强诉求**：Open WebUI、LobeChat、Continue.dev、Aider、LangChain 与 OpenAI SDK 均讲 Chat Completions 协议，而 ZeroClaw 目前只有 WebSocket/ACP/webhook 入口 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 17 | RFC: 高危 shell 命令 per-execution 确认层 + Claude Code 式 allow/ask/deny 策略 | 用户希望对 shell 类工具有类似 Claude Code 的命令策略管控；修订 3 已按维护者意见收敛范围 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 14 | RFC: 可插拔入站认证与 canonical principals | Identity & Access 里程碑核心提案，已迭代至 Rev 8，覆盖 OIDC 与 provider 抽象 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 13 | Tracker: 维护者决策队列 | 社区自发建立 RFC/设计决策排队机制，侧面反映评审积压已影响交付节奏 |
| [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) | 13 | RFI: Token 消耗与成本管理（已关闭） | 产品化部署中单一大模型成本不可承受，尤其 email 类高频任务；社区输入已收集完毕 |

**共性结论**：社区三大关切依次为——① 生态/协议兼容（OpenAI 客户端接入）；② 安全与可控（shell 确认策略、身份认证、工作区隔离）；③ 运行成本可预测。

## 5. Bug 与稳定性

**新增高危 Bug（无已合并修复 PR）：**

- **[#9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883)** [P1, 安全, 未修复]：`image_payload_for_vision` 在共享图像验证器之前对入站 WebP 附件无界解码，存在内存耗尽/DoS 风险。该路径系从 #9819 中刻意保留，目前无专属修复 PR，但 [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)（像素级图像验证）提供了可复用的修复思路。
- **[#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)** [P1, 安全/S2, 未修复]：`mode = "bounded"` 的 delegate 目标（researcher）在做 file_write/file_edit/shell 时，文件系统被解析到委派者（executive_assistant）的工作区，沙箱边界语义错误。

**今日关闭的 Bug：**

- [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)（S1，已关闭）：Docker Compose 网关回环绑定，端口 `Connection refused`。
- [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)（S2，已关闭）：daemon reload 信号文档/行为不一致，降级安全警告会误导操作员发送 kill 信号。

**在途修复 PR（均未合并、多数待作者行动）：**

- [#9918](https://github.com/zeroclaw-labs/zeroclaw/pull/9918) [P1]：gateway `session_key` 双重 `gw_` 前缀。
- [#9862](https://github.com/zeroclaw-labs/zeroclaw/pull/9862) [P1]：`http_request` 响应体改为按字节限制流式读取；fal.ai 客户端禁用自动重定向，防凭证泄露。
- [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)：`file_download` 增加 `allowed_private_hosts` opt-in，补上 SSRF 校验缺口。
- [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748)：基于 generation counter 阻止 stale provider 刷新污染替换后的会话（#9719）。
- [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)：像素级图像解码验证，防止损坏图片导致 provider 请求失败。
- [#9911](https://github.com/zeroclaw-labs/zeroclaw/pull/9911)：Matrix 群组 `mention_only` 下 bot 回复的后续跟帖被丢弃。

## 6. 功能请求与路线图信号

**最可能进入下一版本：**

- **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) Chat Completions profile**：生态需求最强（18 评论），一旦接受将解锁 Open WebUI/LobeChat/Continue.dev/Aider/LangChain 等客户端；是 v0.9.0 之后最有价值的互操作候选。
- **[#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) 精简 RFC 流程**（已 accepted）：缩短 7 天强制讨论期、调整一致同意门槛——流程改革已被认可，预计提高后续 RFC 吞吐。
- **[#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) 退休 Lucid memory connector**：上游项目在合并 4 天后即休眠，属于明确的技术债清理。

**已在途的功能性 PR：**

- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)：`context_compact_ratio` 按模型窗口比例触发上下文压缩（opt-in，兼容旧绝对预算行为）。
- [#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385)：WhatsApp Web transport 实现 `request_approval`，让 `always_ask` 工具可在聊天内人工决策。
- [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194)：提取 `KeySource` trait + `FileKeySource` 后端，为主密钥管理做抽象。
- [#9935](https://github.com/zeroclaw-labs/zeroclaw/pull/9935)：Constraint 未知类型保留 + strictness 模式读取。
- [#9926](https://github.com/zeroclaw-labs/zeroclaw/pull/9926)：Dashboard PWA 安装图标支持。

**长期未决请求：**

- [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)（04-19 提出）：ZeroCode 编码工作流 opt-in LSP 支持，对标 Claude Code/OpenCode。
- [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)：插件持有的 Kanban 面板，用于代理工作协调。
- [#8321](https://github.com/zeroclaw-labs/zeroclaw/issues/8321)：易失性运行时上下文（时间/记忆/渠道）的响应缓存策略。

## 7. 用户反馈摘要

- **部署体验**（[#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)）：用户按文档执行 `docker compose up -d` 后容器运行正常但端口 `Connection refused`，即使正确配置了 bridge——S1 级工作流阻塞，且此类问题直接影响新用户首跑体验。
- **成本敏感**（[#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269)）：社区明确表示"通过单一高端模型跑真实 agent 负载对终端用户过于昂贵"，尤其 email/高频文本类任务；成本管理被视为产品化前提而非可选优化。
- **操作误导**（[#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)）：降级安全警告要求操作员发送 SIGUSR1 触发 reload，但实际信号会 kill daemon——安全警告反而制造了二次事故风险，用户对此类"文档与行为不一致"容忍度很低。
- **沙箱语义困惑**（[#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)）：用户发现 bounded 模式下子代理的文件写入落到了委派者工作区，对 sandbox 边界的预期与实际行为不符，属于典型的安全心智模型偏差。
- **高危命令管控诉求**（[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)）：用户期望像 Claude Code 一样在 shell 执行前有 allow/ask/deny 的明确交互，而非依赖风险配置自动放行/拒绝。
- **生态接入渴望**（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）：现有客户端生态"只说 OpenAI 协议"，ZeroClaw 缺少 HTTP Chat Completions 入口被视为采用壁垒。

## 8. 待处理积压

**维护者评审队列（RFC，按等待时长排序）：**

- [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)（04-19，p2）Opt-in LSP 支持
- [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653)（05-14，p3）模拟安装的主机架构策略
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（06-03，p1）shell 高危命令确认策略
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（06-03，p1）可插拔入站认证
- [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)（06-03，p2）安全决策流水线
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（06-24，p2）Goal mode v1
- [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)（06-17）免 reload 热更新安全策略
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（07-02，p2）Chat Completions profile
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)（07-28，p2）运行时持有的会话与传输适配层
- [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)（07-24，p2）统一 catalog 契约

**Blocked 状态：** [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598)（SOP 能力权限契约）、[#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367)（派生能力就绪度）。

**`needs-author-action` 积压 PR（作者响应将直接决定合入速度）：**

- 高优先级（p1）：[#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)（像素级图像验证）、[#9862](https://github.com/zeroclaw-labs/zeroclaw/pull/9862)（HTTP 响应限流）、[#9918](https://github.com/zeroclaw-labs/zeroclaw/pull/9918)（session_key 前缀）、[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)（上下文压缩比例）、[#9765](https://github.com/zeroclaw-labs/zeroclaw/pull/9765)（SOP 工作区加载）。
- 等待超过一周： [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)（07-04，SSRF 门禁）、[#8902](https://github.com/zeroclaw-labs/zeroclaw/pull/8902)（07-09，JSON-RPC 双向路由）、[#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385)（07-26，WhatsApp 审批）。
- 可能失活： [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)（06-17，已标 `stale-candidate`）。

**维护者行动建议**：优先处理 [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 决策队列中的 P1 安全类 RFC（#7155/#7141），并针对 2 个新增 P1 安全 Bug（#9883/#9872）尽快指派或推动在途 PR 合入；同时催办 14 个 `needs-author-action` 的 PR 作者，避免修复"在途即积压"。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*