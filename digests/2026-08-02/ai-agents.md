# OpenClaw 生态日报 2026-08-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-02 03:32 UTC

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

# OpenClaw 项目动态日报 — 2026-08-02

---

## 1. 今日速览

OpenClaw 项目保持 **极高活跃度**：过去 24 小时内产生 500 条 Issue 更新（456 条新开/活跃）与 500 条 PR 更新（396 条待合并），并发布 v2026.7.2-beta.6 版本。该版本聚焦**状态安全与恢复**，直接回应近期多起数据丢失/崩溃恢复类问题，是项目健康度的重要补强。社区讨论最热的是 **DeepSeek v4 Flash 静默回复失败**（73 评论）、**Realtime 语音会话状态无界增长**（38 评论）等稳定性问题，且多个 P0/P1 Bug 已有 fix PR 在途。整体来看，项目仍处于密集迭代期，但 Issue/PR 积压量大，**维护者审查与产品决策是当前主要瓶颈**。

---

## 2. 版本发布

### 🚀 v2026.7.2-beta.6 — 状态安全与恢复

> 版本号：v2026.7.2-beta.6 | 发布时间：2026-08-02

**更新重点**（2026.7.2 Highlights）：

- **隔离存储（quarantine store）**：主数据库受损时，持久化数据可隔离保存，避免连带损坏
- **崩溃可恢复 SQLite 快照**：进程崩溃后可恢复最近快照
- **崩溃持久性文件系统发布**：文件发布操作具备崩溃持久性，避免写入丢失
- **Schema 升级数据丢失拒绝**：升级前检测到数据丢失风险时拒绝升级，保护现有数据
- **回滚写入器快照恢复**：支持从快照恢复被回滚的写入

**背景关联**：该版本明显针对近期集中爆发的数据损坏/丢失类问题——如 #115421（schema 降级恢复清空状态数据库）、#94939（6.x 迁移留下 0 字节 SQLite）、#115326（崩溃循环抑制 Discord/WhatsApp 恢复失败）等。

**迁移注意**：版本说明未列出明确的破坏性变更，但涉及 schema 与快照恢复机制变更，建议升级前备份 `~/.openclaw/` 目录。

🔗 [查看 Release](https://github.com/openclaw/openclaw/releases)

---

## 3. 项目进展

今日合并/关闭 104 条 PR，以下为代表性进展：

### ✅ 已合并/关闭

| PR | 标题 | 说明 |
|---|---|---|
| [#117772](https://github.com/openclaw/openclaw/pull/117772) | 使 MCP tools-list 测试日志确定性 | 修复测试用例的异步竞争问题，提高 CI 稳定性 |
| [#117775](https://github.com/openclaw/openclaw/pull/117775) | 修复模块重载后工具活动重复计数 | 解决 task 摘要报告工具活动翻倍的 bug |
| [#117537](https://github.com/openclaw/openclaw/pull/117537) | 在入站下载前应用 Telegram 群组媒体策略 | 统一群组媒体策略评估逻辑，避免未授权下载 |

### 🔄 关键在途 PR（已合并/关闭以外）

| PR | 优先级 | 说明 |
|---|---|---|
| [#117400](https://github.com/openclaw/openclaw/pull/117400) | P1 | 修复 compaction 估算器使用原始分支消息导致误判、过度压缩的问题 — 涉及会话状态 |
| [#117699](https://github.com/openclaw/openclaw/pull/117699) | P2 | 隐藏已被后续可见内容修复的内部 stream-error 历史行，改善会话体验 |
| [#117074](https://github.com/openclaw/openclaw/pull/117074) | P1 | 清理 cron 密集型 agent 产生的不可达 session store 碎片数据 |
| [#115138](https://github.com/openclaw/openclaw/pull/115138) | P1 | SQLite 启用内存映射读取（mmap），减少事件循环阻塞，改善性能 |

**整体评估**：项目近期推进集中于三大方向——**数据安全与恢复**（v2026.7.2）、**会话状态正确性**（compaction/清理/去重）、**性能优化**（mmap、SQLite）。修复密度高，但 396 条 PR 待合并意味着**合并吞吐量是当前瓶颈**。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue/PR

#### 1. [#116277 — DeepSeek v4 Flash 静默回复失败](https://github.com/openclaw/openclaw/issues/116277)（73 评论）
- **状态**：OPEN，P1，`no-new-fix-pr`，`needs-maintainer-review`
- **标签**：impact:message-loss（消息丢失）、impact:ux-friction
- **描述**：模型静默生成失败，用户只看到 fallback 消息 *"No reply was generated"*，真正的失败原因被隐藏。
- **背后诉求**：用户要求模型失败信息透明化，而非通用兜底消息；同时该问题影响 Telegram 群聊中的真实使用，具有消息丢失风险。

#### 2. [#116201 — Realtime 语音工作保留无界 provider/consult 状态](https://github.com/openclaw/openclaw/issues/116201)（38 评论）
- **状态**：OPEN，P1，`no-new-fix-pr`，`needs-maintainer-review`
- **标签**：impact:session-state，🦪 silver shellfish
- **描述**：Realtime 语音会话的资源限制基于条目数量而非硬性所有权边界，慢速/突发场景下可保留过期的 consult 工作、大帧、预就绪音频等。
- **背后诉求**：语音会话需要更严格的资源回收机制，避免长期运行导致内存膨胀。

#### 3. [#99241 — 工具输出有时渲染为图片附件导致 agent 不可读](https://github.com/openclaw/openclaw/issues/99241)（26 评论，2 👍；已关闭）
- **状态**：CLOSED
- **描述**：长耗时/ANSI-heavy 工作流中，工具结果被折叠为 `(see attached image)`，agent 无法读取原始 stdout/stderr。
- **背后诉求**：工具输出的文本可读性是 agent 正确决策的基础，用户希望有降级机制而非直接转为图片。

#### 4. [#115326 — 崩溃循环抑制器永久禁用 Discord/WhatsApp 且恢复失败](https://github.com/openclaw/openclaw/issues/115326)（24 评论）
- **状态**：OPEN，P1，`needs-live-repro`
- **描述**：Gateway 启动成功但永久抑制 Discord/WhatsApp，`channels.start` 恢复路径报 WebSocket 1006。
- **背后诉求**：崩溃保护机制不应成为"永久封禁"；用户需要可控、可恢复的故障隔离方案。

**分析**：社区热点集中在 **消息丢失、会话状态泄漏、恢复路径失效**。用户对"系统能自动恢复"的期望在提升，对失败信息透明度的要求也在增强。

---

## 5. Bug 与稳定性

### 🔴 P0 — 严重

| Issue | 说明 | Fix 状态 |
|---|---|---|
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | **Live Docs 领先于 release**：文档中的 `IsolatedSessions` 在 2026.3.13 不存在 | OPEN，11 评论，4 👍，`source-repro` — 无直接 fix PR |
| [#115421](https://github.com/openclaw/openclaw/issues/115421) | **Schema 降级恢复清空状态数据库**，导致 cron 任务丢失 | OPEN，`linked-pr-open` — 已有 fix PR |

### 🟠 P1 — 高

| Issue | 说明 | Fix 状态 |
|---|---|---|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话转录投影重建可活锁，占满主线程导致所有通道阻塞 | OPEN，`source-repro` — 无 fix PR |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移留下 0 字节 SQLite，MS Teams 主动发送失败 | OPEN，`linked-pr-open` |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 容器中 PID 复用导致 usage-cost 刷新锁永久冻结 | OPEN，`linked-pr-open` |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | Gateway V8 堆 OOM，重启恢复将一次崩溃转为 7 次 core dump | OPEN，`needs-live-repro` |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有持久会话被硬编码为 128k 上下文，与模型/配置无关 | OPEN，`linked-pr-open` |
| [#98976](https://github.com/openclaw/openclaw/issues/98976) | Provider 拒绝（Anthropic refusal / content_filter）不触发 fallback 链 | OPEN，`linked-pr-open` |
| [#115909](https://github.com/openclaw/openclaw/issues/115909) | 浏览器扩展 Gateway 客户端永远无法配对（auth gate 拒绝） | OPEN，`needs-security-review` |
| [#116488](https://github.com/openclaw/openclaw/issues/116488) | 被取代的 reply 操作未从注册表释放，watchdog 等待 abort 超时 | OPEN，`source-repro` |

### 🟡 P2 — 中

- [#116691](https://github.com/openclaw/openclaw/issues/116691)：火山引擎长对话报 `input.status` 缺失（新增 Bug）
- [#117644](https://github.com/openclaw/openclaw/issues/117644)：agent 在 Windows PowerShell 中发出 Unix 命令（新增）
- [#117762](https://github.com/openclaw/openclaw/issues/117762)：模型有时停止回复，会话显示为卡住（新增）
- [#115152](https://github.com/openclaw/openclaw/issues/115152)：bootstrap max chars 配置每次重启被删除（回归）

**趋势观察**：今日新报 Bug 集中在 **Windows 平台兼容性** 与 **模型静默停止** 两类。已有多个 P0/P1 已获得修复 PR，但 `linked-pr-open` 的 PR 多处于 `waiting on author` 或 `needs proof` 状态，合并仍需时间。

---

## 6. 功能请求与路线图信号

### 📌 社区呼声较高的功能

| Issue | 需求 | 状态 |
|---|---|---|
| [#114146](https://github.com/openclaw/openclaw/issues/114146) | 为 OpenAI Realtime 兼容 providers 添加 `baseUrl` 配置 | OPEN，5 评论 |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | WebChat 文件查看器支持图片查看 | OPEN，10 评论 |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | 为 releases 添加生产就绪稳定性标签 | OPEN，8 评论，2 👍 |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) | memory 按源目录而非 agent 索引，消除同 workspace 重复向量库 | OPEN，1 👍 |

### 🔮 已进入 PR 的信号（可能进入下一版本）

- **Google Gemini `serviceTier`（Flex/Priority）支持**：[PR #117739](https://github.com/openclaw/openclaw/pull/117739) — 直接使用 AI Studio 的开发者可指定 Flex 层级降低成本
- **WebChat 实时思维流渲染**：[PR #117721](https://github.com/openclaw/openclaw/pull/117721) — 修复 #88079，让 Kimi/DeepSeek 的 reasoning 内容可见
- **自动回复后清理空媒体暂存目录**：[PR #117184](https://github.com/openclaw/openclaw/pull/117184)
- **`sessions_yield` 等待状态透出**：[PR #117509](https://github.com/openclaw/openclaw/pull/117509) — 子 agent 的等待消息能通过正常回复路径发送

**路线图判断**：项目近期优先度为**稳定性修复 > 会话正确性 > 可观测性增强**。社区想要的新功能集中在**更多模型/Provider 支持（Gemini Flex、Realtime baseUrl）、WebChat 体验增强（图片查看、思维流可视化）、发布治理（稳定性标签）**三个方面。个别呼声较高的功能尚未见对应 PR，如 Realtime baseUrl。

---

## 7. 用户反馈摘要

### 😟 主要痛点

1. **模型静默失败，缺少透明错误信息** — #116277 中 DeepSeek v4 Flash 失败后仅显示通用 fallback，用户完全无法知晓原因。类似问题还出现在 #117762（模型停止回复）。

2. **会话恢复不可靠** — #115326 崩溃循环抑制器"永久封禁"渠道、#116022 `/new` 无法恢复 retired Codex binding、#115424 一次崩溃变成 7 次 core dump。用户反复表达对"自动恢复"功能失效的沮丧。

3. **Context 管理造成困扰** — #116010 所有模型被硬编码 128k 上下文，#115152 配置项每次重启被删除。用户对上下文大小无法按模型调整表示不解。

4. **Windows 平台体验欠佳** — #74378 CLI 进程残留、#117644 agent 在 PowerShell 中发出 Unix 命令（`head`、`~`）、#93081 Ctrl+C 不工作。Windows 用户的体验问题持续积累。

5. **文档与实现脱节** — #48920 文档功能领先于 release；#115286 中配置项 `mediaLocalRoots` 被拒绝。用户按文档操作却得到错误提示。

### 😊 积极反馈

- #73537 用户感谢 OpenClaw 团队的贡献："It has genuinely become part of our daily workflow" — 真实家庭/商业场景中深度使用（Telegram、automations、Home Assistant）
- #99241 用户提供详细环境信息（ANSI-heavy 工作流），表现出**较高质量的 bug 报告协作精神**

### 📊 整体满意度判断

用户对项目功能本身认可度高，但**稳定性预期在提高**——当功能足够强大后，用户开始要求数据安全、恢复可靠性、失败透明度和平台一致性。这是项目从"功能扩展期"进入"稳定性打磨期"的典型信号。

---

## 8. 待处理积压

### ⏳ 长期未解决的高价值 Issue

| Issue | 创建时间 | 积压天数 | 说明 |
|---|---|---|---|
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | 2026-03-19 | 136 天 | 插件 hooks 缺少 trace context（messageId/runId/parentSpanId），分布式追踪无法实现。P2，9 评论，`needs-product-decision` |
| [#74378](https://github.com/openclaw/openclaw/issues/74378) | 2026-04-29 | 95 天 | Windows 平台 CLI 命令残留 node.exe 进程。P2，6 评论，`needs-maintainer-review` |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | 2026-04-28 | 96 天 | 发布稳定性标签请求。P2，8 评论，2 👍，`needs-product-decision` |
| [#88079](https://github.com/openclaw/openclaw/issues/88079) | 2026-05-29 | 65 天 | WebChat 不渲染 Kimi/DeepSeek 的 reasoning_content。P2，6 评论 — **已有 fix PR #117721** |

### ⚠️ 高优先级但被卡住的 Issue

| Issue | 优先级 | 卡点 |
|---|---|---|
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | P1 | `needs-live-repro` + `needs-product-decision` — 复现与产品决策双重阻塞 |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | P1 | `needs-info` — 等待用户补充信息 |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) | P1 | **内部推理泄漏**（2026.6.5 起）— `no-new-fix-pr`，6 评论，安全影响 |
| [#85042](https://github.com/openclaw/openclaw/issues/85042) | P1 | Google provider 配置缺失时静默路由到 OpenAI — `needs-info`，安全影响 |

### 👀 对维护者的提醒

1. **产品决策积压**：约 15+ 条 Issue 标记为 `needs-product-decision`，涉及功能取舍（如 #73537、#115642、#115914），建议集中评审。
2. **安全相关问题注意**：#115909（浏览器扩展认证）、#98976（provider 拒绝不触发 fallback）、#91804（推理泄漏）、#87763（SSRF guard 超时）均需安全审查。
3. **"no-new-fix-pr" 的 P1 数量偏多**（约 20+ 条），说明修复 PR 的产出速度跟不上 Issue 增速，建议关注从"问题确认"到"修复提交"的转化效率。

---

*本日报基于 GitHub 公开数据自动生成，数据截至 2026-08-02 24:00 UTC。所有链接均指向 openclaw/openclaw 仓库。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期：2026-08-02 | 数据窗口：过去 24 小时**

---

## 1. 生态全景

当前个人 AI 助手开源生态已形成以 OpenClaw 为核心的 **"Claw 系"项目集群**（PicoClaw、NanoClaw、ZeroClaw、CoPaw 等），集群内共享核心架构理念但各自向垂直场景分化。整体生态正处于**从"功能扩展期"向"稳定性打磨期"的关键转折**：各项目不约而同地将资源投向会话状态正确性、数据安全恢复、失败透明化三大方向，而非堆叠新功能。社区对"系统能自动恢复、错误能看得懂、配置语义可预期"的期待显著提升，跨项目同日出现多个安全边界加固（命令审批绕过、路径守卫绕过、通道限流），标志安全左移成为行业共识。同时，**合并吞吐量正在取代代码产出，成为制约社区健康度的首要瓶颈**——OpenClaw 396 条、ZeroClaw 50 条待合并 PR 均出现零合并/低合并的积压信号。值得注意的是，OrcaRouter 供应商聚合层在同日出现在 CoPaw、PicoClaw、IronClaw 三个独立项目中，预示"多 Provider 路由"正从可选能力变为基础设施标配。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 PR | Release | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（456 新开/活跃） | 500（396 待合并） | 104 | ✅ v2026.7.2-beta.6 | 极高活跃，聚焦数据安全；**审查吞吐是瓶颈** |
| **Hermes Agent** | 50（40 活跃/10 关闭） | 50（41 待合并/9 合并） | 9 | 无（v0.19.x） | 高活跃，安全加固与修复流转效率高 |
| **ZeroClaw** | 50（47 活跃/3 关闭） | 50（50 待合并） | **0** | 无（v0.8.4 待发） | 高活跃，记忆架构 RFC 密集；**合并严重积压** |
| **IronClaw** | 12（10 活跃/2 关闭） | 22（15 待合并/7 合并） | 7 | 无 | 高强度架构重构期；性能回归需警惕 |
| **CoPaw** | 9 | 11（10 待合并） | 0（1 被取代） | 无 | 高活跃，严重 Bug 当日即提修复 PR，响应快 |
| **NanoBot** | 5（4 关闭） | 25（13 合并/关闭） | 13 | 无 | **最健康节奏**：高流入+高消化，合并效率突出 |
| **NanoClaw** | 2 | 15 | 5 | ✅ v2.1.54 | 良好；iMessage 统一落地，含破坏性变更 |
| **Moltis** | 0 | 3（1 待合并/2 关闭） | 2 | 无 | 正常迭代，权限模型与可观测性双线推进 |
| **PicoClaw** | 1 | 3（1 关闭/2 待合并） | 1 | 无 | 中等；Matrix 重连 Bug 悬置一个月被顶起 |
| **LobsterAI** | 7（6 条 stale 关闭） | 2（均待合并） | 0 | 无 | 维护期；PR #1224 积压超 4 个月 |
| **NullClaw** | — | — | — | — | 24h 无活动 |
| **TinyClaw** | — | — | — | — | 24h 无活动 |
| **ZeptoClaw** | — | — | — | — | 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

**生态核心与规模绝对领先者**：单日 500 条 Issue + 500 条 PR 更新，是第二名（Hermes/ZeroClaw 各 50 条）的 **10 倍**；最热议题 73 条评论，远超 PicoClaw（7 条）、CoPaw（2 条）等。9 个活跃项目中 8 个采用 `*Claw` 命名体系，可视为围绕 OpenClaw 架构形成的衍生/仿制生态。

**技术路线差异**：OpenClaw 是唯一将**"状态安全与恢复"**作为正式版本主题的项目——v2026.7.2-beta.6 引入隔离存储（quarantine store）、崩溃可恢复 SQLite 快照、Schema 升级数据丢失拒绝，直接回应近期集中爆发的数据损坏类事故（#115421、#94939）。这一"数据安全优先"的路线在同类中尚无对标。

**社区规模与短板并存**：社区讨论质量高（用户提供详细复现环境、ANSI-heavy 工作流等），但 396 条待合并 PR + 20+ 条 `no-new-fix-pr` 的 P1 + 15+ 条 `needs-product-decision`，说明**维护者审查带宽严重落后于社区贡献速度**。对照 NanoBot（13 合并/25 PR，消化率 52%），OpenClaw 当日合并率约 20.8%，审查效率是生态内相对短板。功能覆盖面上，OpenClaw 是唯一同时具备 Telegram/Discord/WhatsApp/MS Teams/Realtime 语音等多通道能力的项目，且已出现浏览器扩展 Gateway、MCP 等前沿集成。

---

## 4. 共同关注的技术方向

### ① 会话状态/记忆生命周期正确性（涉及最广）
- **OpenClaw**：compaction 估算器误判致过度压缩（#117400）、Realtime 语音状态无界增长（#116201）
- **Hermes Agent**：Responses API `function_call_output` 被剥离致跨轮工具结果丢失（#43757，2 个月无修复）
- **CoPaw**：自动压缩不触发记忆流程（#6624）、ACP 通知竞态丢失文本（#6625）
- **ZeroClaw**：三大记忆架构 RFC（#9048/#9103/#6850）——"同一概念存在三套实现"
- **NanoBot**：会话摘要容错（#5201）、cron 状态持久化（#5183）
- **Moltis**：`main` session 无法删除/归档（#1132）

### ② 安全边界加固（同日多项目并发）
- **Hermes**：ANSI-C 引号绕过危险命令审批（#76218）、Windows 路径守卫 fail-open（#76246）
- **ZeroClaw**：WhatsApp 空 `allowed_groups` 实际全开放（#9348）、审批令牌泄漏（#9417）
- **NanoBot**：通道按发送者限流（#5108）
- **Moltis**：访问权限与特权操作解耦（#1170）
- **NanoClaw**：router 不可信输入加固（#2801）

### ③ 模型失败透明化（用户诉求最强烈）
- **OpenClaw**：DeepSeek v4 Flash 静默失败仅显示通用 fallback（#116277，73 评论）
- **CoPaw**：空模型响应静默失败（#6630）
- **NanoBot**：工具调用代码泄漏进回复（#5185）
- 共同诉求：**"失败原因必须可见、可溯源"**，通用兜底消息已不被接受

### ④ Provider 生态扩展（OrcaRouter 三项目同现）
- **CoPaw**：PR #6622 新增 OrcaRouter 内置 provider
- **PicoClaw**：PR #3309 接入 OrcaRouter
- **IronClaw**：Issue #7009 请求添加 OrcaRouter
- 另见 OpenClaw Gemini `serviceTier`（#117739）、ZeroClaw OpenAI Chat Completions 兼容适配器（#8603）

### ⑤ Windows/跨平台体验
- **Hermes**：#63717 汇总 7 个 Windows 更新链路根因
- **OpenClaw**：agent 在 PowerShell 发 Unix 命令（#117644）
- **ZeroClaw**：PR #9182 支持 PowerShell 为原生 shell
- 跨项目共性：Windows 已从"次要平台"升级为"必须一等公民"

### ⑥ 可观测性与评估体系
- **OpenClaw**：插件 hooks 缺 trace context（#50291，积压 136 天）
- **ZeroClaw**：OTel 跨轮会话 ID 导出（#8933）+ 6 个评估体系 PR（#9220–#9248）
- **Moltis**：OTLP/Langfuse v4 可观测性基础设施（#1174）
- **CoPaw**：用户询问 LLM trace 方案（#6627）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|---|---|---|---|
| **OpenClaw** | 全能个人 AI 中枢：多通道消息、Realtime 语音、MCP、浏览器扩展 | 重度个人/家庭用户（Telegram、Home Assistant 真实场景） | 多通道 Gateway + 隔离存储 + 崩溃可恢复快照；生态核心 |
| **Hermes Agent** | 自主 agent 能力：cron、代码审查、Active PR 管理、插件体系 | 开发者/技术运营者 | 自主 agent + 安全命令审批 + 插件生命周期；Nous Research 驱动 |
| **ZeroClaw** | 企业级自托管基础设施：mTLS 中继、密钥源抽象、评估门禁 | 企业/合规敏感的自托管者 | 安全传输平面 + 93 个 `#[secret]` 字段 + RFC 驱动的破坏性变更治理 |
| **IronClaw** | 架构重构与性能容量：依赖反转、pi-harness 优化 | 核心开发者/平台工程 | 契约层抽象（product_contracts）+ 严格 CI 门禁纪律 |
| **NanoBot** | 轻量级多通道助手 + WebUI 体验 | 个人开发者/小团队 | 合并效率最高；WebUI 模型切换、Quick Chat 等体验细节 |
| **NanoClaw** | Apple 生态集成：iMessage（Local/Hosted 双后端） | macOS/iPhone 用户 | 通道收敛（单一 `imessage`）+ Photon 托管后端 |
| **CoPaw（QwenPaw）** | 多智能体协作 + 阿里云生态 | 阿里云用户/多 agent 场景开发者 | agentscope 背景；ACP 外部 agent 委托、OrcaRouter 集成 |
| **Moltis** | 生产级权限与可观测性 | 自托管运维者 | 访问控制/特权操作分离 + per-account operators + OTLP |
| **PicoClaw** | 嵌入式/边缘场景 + Matrix 协议 | 硬件极客/Matrix 用户 | sipeed 背景；轻量部署；搜索 Provider 扩展 |
| **LobsterAI** | 中文/国际化 UX + MCP 工具链 | 中文用户/网易生态 | i18n 细节打磨；OpenClaw 引擎联动；当前维护期 |

---

## 6. 社区热度与成熟度

**第一梯队 · 快速迭代期（功能与稳定性双高节奏）**
- **OpenClaw**：密集 beta 发布（v2026.7.2-beta.6），日均 500+500 更新，处于"数据安全补强"专项阶段
- **ZeroClaw**：50 条 PR 全部待合并，RFC 决策密集，v0.9.0 破坏性变更队列公开治理——典型的"能力扩张快于消化"状态
- **IronClaw**：Wave 2 架构重构进行中，依赖反转按 CHECKLIST 推进，但性能回归（p95 135s）与 CI 可信度是当前硬伤

**第二梯队 · 质量巩固期（高合并消化率）**
- **NanoBot**：13 合并/25 PR 更新，修复密度高，处于"稳定性修复 + WebUI 体验"的收敛节奏，是生态内合并效率标杆
- **Hermes Agent**：24h 内多条 Issue 关闭并标记 `implemented-on-main`，安全加固与修复流转双线并进，项目健康度良好
- **NanoClaw / CoPaw / Moltis**：规模中等但响应快（CoPaw 严重 Bug 当日提 PR），处于各自垂直方向的打磨期

**第三梯队 · 维护/低活跃期**
- **PicoClaw**：日活低，但唯一活跃 Issue（Matrix 重连）持续被社区顶起，属"稳定但关键缺陷未解"
- **LobsterAI**：stale bot 批量关闭 Issue，PR 积压 4 个月，处于典型维护期，贡献者耐心正在消耗
- **NullClaw / TinyClaw / ZeptoClaw**：24h 无活动，实质休眠

---

## 7. 值得关注的趋势信号

1. **"默认安全"成为硬约束**：ZeroClaw 将空 `allowed_groups` 语义从"全部放行"改为"全部拒绝"（#9397）、Hermes 修复命令审批绕过、NanoBot 补通道限流、Moltis 拆分特权操作——**同一时间窗内四个独立项目均在做"默认拒绝"安全收敛**，这是行业从"功能优先"转向"安全默认"的强信号。

2. **记忆/会话生命周期是下一个主战场**：ZeroClaw 三大记忆 RFC + OpenClaw compaction 修复 + Hermes `function_call_output` 丢失 + CoPaw 自动压缩 Bug，说明**"会话历史、长期记忆、生命周期策略"的正确建模仍是全行业未解难题**，且直接影响用户对 agent 的信任度。

3. **模型失败透明化是用户体验分水岭**：OpenClaw #116277（73 评论）与 CoPaw #6630 同日指向"静默失败 + 通用兜底消息"，用户已明确拒绝黑盒。**提供可溯源的失败原因（模型拒绝、超时、格式错误）将成为 AI 助手产品的标配能力**。

4. **Provider 路由层正在商品化**：OrcaRouter 在三个项目同日出现，叠加 OpenClaw Gemini `serviceTier`、ZeroClaw OpenAI 兼容适配器——**"一套协议接入所有模型"正从差异化卖点变为基础设施**，成本优化（提示词缓存、Flex 降本）成为新竞争点。

5. **评估体系从 CI 门禁走向 LLM 裁判**：ZeroClaw 的 6 个评估 PR（可比运行回执、LLM 裁判评分器、JUnit XML）与 IronClaw 的 CI 门禁纪律修复，表明社区开始用**自动化、可量化的方式治理 agent 行为质量**，而非仅靠人工 review。

6. **合并吞吐量与贡献者留存直接挂钩**：LobsterAI PR 积压 4 个月、ZeroClaw 24h 零合并、OpenClaw 396 条待合并——**维护者审查带宽已成为生态瓶颈**。对技术决策者的参考：在扩张贡献者数量的同时，必须同步设计 review 产能与自动化合并流水线，否则将引发贡献者流失与 fork 分化。

7. **Windows 平台体验决定装机量天花板**：Hermes 7 个根因的更新链路问题、OpenClaw PowerShell 兼容性、ZeroClaw PowerShell 原生支持——各项目正在为 Windows 用户补齐一等公民体验，**跨平台一致性是个人 AI 助手走向大众市场的必经关口**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时 NanoBot 社区活跃度较高：PR 更新 25 条（其中 13 条合并/关闭），Issue 更新 5 条（关闭 4 条），处理效率良好。合并的 PR 集中在稳定性修复（cron 状态保持、内存容错、执行响应截断、通道限流）与 WebUI 体验优化，另有若干新功能 PR 处于待合并状态。Issue 侧以 bug 报告为主，其中模型切换问题（#5198）仍开放。项目整体呈现"高贡献流入 + 高合并消化"的健康节奏，无新版本发布属正常迭代间隙。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 13 条，覆盖稳定性、安全与 WebUI 体验，项目在以下方面取得实质推进：

### 稳定性与 Bug 修复

- **通道速率限制落地** — [#5108](https://github.com/HKUDS/nanobot/pull/5108) `fix(channels): add per-sender message rate limiting`（priority: p1）：为所有通道适配器增加按发送者/聊天粒度的限流，填补了此前"配对用户可无限消耗 token、无防抖无冷却"的安全与成本漏洞。
- **cron 手动运行状态保留** — [#5183](https://github.com/HKUDS/nanobot/pull/5183) `fix(cron): preserve manual run completion state`（priority: p1）：修复 WebUI/API 并发读取导致手动触发的 cron 运行完成状态丢失的问题，直接解决 Issue #5163。
- **会话原始归档容错** — [#5153](https://github.com/HKUDS/nanobot/pull/5153) `fix(memory): handle non-string timestamp and missing role in raw_archive`（priority: p1）：修复 `_format_messages` 在遇到 `timestamp: None`、数字时间戳或缺失 `role` 字段时抛异常的问题，对应 Issue #4801。
- **exec wait 目标截断修复** — [#5200](https://github.com/HKUDS/nanobot/pull/5200) `fix(exec): preserve wait targets across response truncation`（priority: p1）：`write_stdin(wait_for=...)` 的目标不再被 `max_output_chars` 截断而丢失。
- **会话摘要容错** — [#5201](https://github.com/HKUDS/nanobot/pull/5201) `fix(session): tolerate malformed persisted session summary`（priority: p1）：自动压缩流程不再因持久化 `_last_summary` 字段异常而崩溃。
- **Dream 游标推进修复** — [#5208](https://github.com/HKUDS/nanobot/pull/5208) `fix(dream): advance cursor when durable changes were made`（priority: p1）：临时 agent 运行成功产生编辑但 stop reason 非 clean 时，历史游标现在会正确前进，避免重复处理。
- **provider 匹配修复** — [#3732](https://github.com/HKUDS/nanobot/pull/3732) `fix(providers): require api_base before local provider wins on keyword match`：本地 provider 不再仅凭 `is_local` 声明就劫持同关键词的云端模型，必须显式配置 `api_base`。

### 功能增强与响应式保持

- **保留 Responses API 推理状态** — [#5172](https://github.com/HKUDS/nanobot/pull/5172) `feat: preserve Responses reasoning state and compact context`：跨工具调用和用户轮次保留并回放完整的 opaque Responses 输出项链，包含加密推理内容与未来项类型，提升长程推理一致性。

### WebUI 与代码质量

- **侧边栏高亮复用** — [#5209](https://github.com/HKUDS/nanobot/pull/5209) `refactor(webui): reuse sidebar selection highlight`：统一主侧边栏与设置导航的选中态，消除闪烁瑕疵。
- **Pyright 抑制收窄** — [#5199](https://github.com/HKUDS/nanobot/pull/5199) `refactor(cli): narrow Pyright suppressions`：将文件级 suppression 替换为行级，提升类型检查覆盖率。

## 4. 社区热点

今日讨论最活跃的是两个已关闭的 Issue，以及一个开放的功能缺陷 Issue：

- **[#5185](https://github.com/HKUDS/nanobot/issues/5185) — Nanobot 开始把工具调用代码混进回复内容**（评论 4，已关闭）：用户反馈突然出现如图所示的 tool calls 代码直接出现在响应中，严重影响输出质量。4 条评论说明该问题引发了一定范围的关注，可能与此前某次 provider 行为变化有关。
- **[#5205](https://github.com/HKUDS/nanobot/issues/5205) — `nanobot plugins enable feishu` 报 "No module named ensurepip"**（评论 2，已关闭）：uv 工具链安装的 Python 缺少 `ensurepip` 模块，导致飞书插件无法启用。
- **[#5198](https://github.com/HKUDS/nanobot/issues/5198) — 特定会话内无法切换模型**（评论 1，仍开放）：用户对比 Cloud SaaS AI 的 UI，指出点击输入框旁的模型徽标无法更换模型，`/model` 命令对非当前模型 ID 无效，只能通过重构整个实例配置解决。

这些热点背后反映了用户对"对话体验稳定"和"运行时配置灵活"的强烈诉求——既要求输出纯净，又要求切换便捷。

## 5. Bug 与稳定性

今日报告并处理的 Bug 按严重程度排列如下：

| 严重程度 | Issue / PR | 问题描述 | 状态 |
| --- | --- | --- | --- |
| 高 | [#5185](https://github.com/HKUDS/nanobot/issues/5185) | 工具调用代码直接泄漏进回复内容，破坏正常对话 | 已关闭（未发现对应 fix PR，建议维护者确认修复来源） |
| 高 | [#5163](https://github.com/HKUDS/nanobot/issues/5163) | 手动触发的 cron 任务执行成功，但 WebUI 与 `jobs.json` 仍显示 Failed | 已关闭，由 [#5183](https://github.com/HKUDS/nanobot/pull/5183) 修复 |
| 中高 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 特定会话内无法切换模型，`/model` 命令对非当前模型无效 | 仍开放，PR [#5202](https://github.com/HKUDS/nanobot/pull/5202) 正尝试改善模型预设切换的可发现性 |
| 中 | [#5205](https://github.com/HKUDS/nanobot/issues/5205) | uv 安装的 Python 缺 `ensurepip`，飞书插件启用失败 | 已关闭 |
| 中 | [#4801](https://github.com/HKUDS/nanobot/issues/4801) | 会话历史中畸形的 message 字典缺失 `role` 键导致 `KeyError` | 已关闭，由 [#5153](https://github.com/HKUDS/nanobot/pull/5153) 修复 |

另有一批 p1 优先级修复 PR 同日合并，进一步加固了稳定性：cron 状态保持（[#5183](https://github.com/HKUDS/nanobot/pull/5183)）、通道限流（[#5108](https://github.com/HKUDS/nanobot/pull/5108)）、exec wait 截断（[#5200](https://github.com/HKUDS/nanobot/pull/5200)）、会话摘要容错（[#5201](https://github.com/HKUDS/nanobot/pull/5201)）。

## 6. 功能请求与路线图信号

今日新增或活跃的功能性 PR 显示以下方向可能进入下一版本：

- **受信代理引导认证** — [#5210](https://github.com/HKUDS/nanobot/pull/5210)：为 WebUI bootstrap 增加 Cloudflare Tunnel + Access 等部署场景的可选受信上游代理认证路径。面向自托管安全需求。
- **跨会话搜索与 @ 提及** — [#5211](https://github.com/HKUDS/nanobot/pull/5211)：新增 `search_sessions` / `read_session` 只读工具，并允许在 WebUI 用 `@` 选择其他会话插入引用。属于"会话互联"体验升级。
- **Quick Chat 与 Temporary Chat** — [#5184](https://github.com/HKUDS/nanobot/pull/5184)：为 WebUI 增加固定身份的快捷会话与内存级临时会话，兼顾便捷与隐私。
- **子代理模型预设** — [#5207](https://github.com/HKUDS/nanobot/pull/5207)：`spawn` 工具新增可选 `preset` 参数，让 subagent 可使用指定命名预设（模型 + temperature）运行。
- **模型预设切换可发现化** — [#5202](https://github.com/HKUDS/nanobot/pull/5202)：将隐藏的长按拖拽手势改为点击弹出模型预设菜单，直接回应 Issue #5198 的诉求。
- **skills.sh 知名源支持** — [#5186](https://github.com/HKUDS/nanobot/pull/5186)：除 `owner/repo` 外，支持知名技能发现主机（如 `uizze.com`），扩大技能搜索覆盖面。
- **会话列表性能优化** — [#5194](https://github.com/HKUDS/nanobot/pull/5194)：缓存 workspace-scope 快照，加速 JSONL 会话列表与线程加载。

其中 #5202 与 #5198 直接关联，显示维护者正积极响应用户对模型切换体验的反馈。

## 7. 用户反馈摘要

- **工具调用泄漏引发困惑**（[#5185](https://github.com/HKUDS/nanobot/issues/5185)）：用户称"突然开始"在响应中看到 tool calls 代码，说明问题可能是间歇性/回归性，而非长期存在。此类问题对聊天类产品的信任度伤害较大，建议团队补充回归测试。
- **插件启用失败阻碍功能落地**（[#5205](https://github.com/HKUDS/nanobot/issues/5205)）：用户在 Debian 服务器上通过 uv 工具链安装，启用飞书通道失败指向 `ensurepip` 缺失。暴露了 uv 安装路径下 Python 环境不完整的问题，值得在安装文档中增加前置条件说明。
- **模型切换诉求对标 SaaS 产品**（[#5198](https://github.com/HKUDS/nanobot/issues/5198)）：用户明确以"Cloud SaaS AIs 的 UI"为参照，认为点击模型徽标应可切换。这是从本地方案走向更成熟产品形态的典型信号。
- **cron 状态显示错误影响信任**（[#5163](https://github.com/HKUDS/nanobot/issues/5163)）：手动运行的 cron 实际成功、界面却显示 Failed，用户对"界面状态与真实状态不一致"的容忍度极低。已由 [#5183](https://github.com/HKUDS/nanobot/pull/5183) 修复。
- **会话数据损坏的容错价值**（[#4801](https://github.com/HKUDS/nanobot/issues/4801)）：用户遇到畸形会话记录导致 KeyError，社区对历史数据损坏持"应优雅降级而非崩溃"的明确预期。

## 8. 待处理积压

以下 PR/Issue 长期未闭合或存在阻塞，建议维护者优先关注：

- **[#5139](https://github.com/HKUDS/nanobot/pull/5139) — Preserve media paths during session consolidation**（priority: p1，带 conflict 标签）：修复会话归档时媒体路径丢失的问题，7 月 28 日创建，已滞留 4 天且存在冲突，需解决冲突后合入。
- **[#3869](https://github.com/HKUDS/nanobot/pull/3869) — DeepSeek 消息加固**（question + conflict 标签）：始于 5 月 16 日，解决 DeepSeek 对 null 内容返回 400、`"(empty)"` 占位符泄漏、assistant 文本被丢弃三类问题。悬置超 2 个月，期间 DeepSeek 用户可能持续受影响。
- **[#5198](https://github.com/HKUDS/nanobot/issues/5198) — 会话内模型切换不可用**：目前仍开放，虽有 [#5202](https://github.com/HKUDS/nanobot/pull/5202) 改善可发现性，但核心的 `/model` 命令行为与 UI 切换逻辑仍需确认修复方案。
- **[#5184](https://github.com/HKUDS/nanobot/pull/5184) / [#5211](https://github.com/HKUDS/nanobot/pull/5211) / [#5210](https://github.com/HKUDS/nanobot/pull/5210) / [#5194](https://github.com/HKUDS/nanobot/pull/5194) / [#5206](https://github.com/HKUDS/nanobot/pull/5206) / [#5207](https://github.com/HKUDS/nanobot/pull/5207)**：多条新功能 PR 处于待合并状态，方向覆盖 WebUI 体验、安全认证、子代理能力与流式日志去重，建议按优先级安排 review 排期。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时项目保持高活跃度：共 50 条 Issue 更新（新开/活跃 40 条、关闭 10 条），50 条 PR 更新（待合并 41 条、已合并/关闭 9 条），无新版本发布。今日既有大量社区贡献者提交针对性修复（cron 生命周期守卫、WhatsApp 桥接降级、watchers 水位线清理等），也有多条 P1/P2 缺陷在报告当日即被关闭并标记 `implemented-on-main`，修复流转效率较高。值得注意的是安全类 Bug 占比上升（Windows 敏感路径守卫绕过、ANSI-C 引号绕过危险命令审批），项目正在安全边界与跨平台兼容性上进行持续加固。整体判定：项目处于高吞吐、快迭代的健康发展期，但 Windows 更新链路与消息投递可靠性仍是用户体感最差的两块短板。

## 2. 版本发布

今日无新版本发布，最新版本线仍为 v0.19.x（v2026.7.30）。

## 3. 项目进展

今日确认合入/关闭的 PR 中，以下两条直接提升了核心链路可靠性：

- **会话压缩数据丢失风险修复**：[PR #76543](https://github.com/NousResearch/hermes-agent/pull/76543)（fix: retry session DB flush during compression rotation）——针对压缩窗口内 DB flush 与压缩轮转竞态导致的 `CompressionSessionBusyError`，增加重试机制，避免进程在压缩窗口内死亡时丢失未持久化的消息尾部。与 [#74568](https://github.com/NousResearch/hermes-agent/issues/74568)（死 PID 压缩锁阻塞写入）同属会话状态可靠性攻坚方向。
- **Dashboard/Desktop 依赖安全升级**：[PR #76546](https://github.com/NousResearch/hermes-agent/pull/76546)（fix: update React Router and audited web dependencies）——升级至 React Router 8.3.0 并刷新 lockfile，修复 PostCSS 与 brace-expansion 的 6 个高危审计项。

此外，多条今日关闭的 Issue 带有 `sweeper:implemented-on-main` 标签，确认修复已落入主干：

- [#76541](https://github.com/NousResearch/hermes-agent/issues/76541)（P1）——v0.19.1 网关在 Telegram 网络不稳定时被 shutdown_watchdog 反复杀死，回归问题已修复。
- [#76511](https://github.com/NousResearch/hermes-agent/issues/76511)（P2）——Copilot token 交换在 `_is_suppressed()` 检查之前执行，导致每次启动白等约 4.5s，已修复。
- [#76533](https://github.com/NousResearch/hermes-agent/issues/76533)（P2）——Ubuntu v0.19.0 更新可能残留混合依赖并隐藏内置 Kanban，已修复。
- [#76528](https://github.com/NousResearch/hermes-agent/issues/76528)（P3）——语言设置无法保存，已修复。

综合来看，项目在会话压缩可靠性、网关注册/重启策略、依赖安全三个方向上有明确的前进。

## 4. 社区热点

今日讨论最集中的 Issue 均在 3 条评论以上，按热度排列：

- **[#67249](https://github.com/NousResearch/hermes-agent/issues/67249)（5 评论）**——`active_pr` respawn guard 既无操作员 override 开关，又会被评论中的非 PR 内容（如普通链接）误触发。自 7/19 起持续发酵，带 `needs-decision` 标签，反映社区对「自动化防护必须有人工干预通道」的强烈诉求。
- **[#63717](https://github.com/NousResearch/hermes-agent/issues/63717)（4 评论）**——Windows 桌面版更新失败综合诊断，3 周内 7 个相互关联的根因（升级链路脆弱、中断恢复缺失、权限问题等），是今日 Windows 更新问题的核心汇总帖。
- **[#76505](https://github.com/NousResearch/hermes-agent/issues/76505)（4 评论）**——`native image_input_mode` 以全分辨率原图直接发送，被 Qwen3VLProcessor 拒绝，而文本模式降级可成功。反映多模态接入缺少预处理/缩放环节。
- **[#60845](https://github.com/NousResearch/hermes-agent/issues/60845)（4 评论）**——Telegram `busy_input_mode: queue` 下排队响应绕过 MEDIA 提取，附件被当作纯文本路径发送，消息投递类问题关注度持续走高。
- **[#76435](https://github.com/NousResearch/hermes-agent/issues/76435)（3 评论）**——Discord 网关 1000+ 次重连导致 token 被重置 + 桌面更新器不可用，已定位到「正常退出也被 s6 重启」的根因（见 [PR #76537](https://github.com/NousResearch/hermes-agent/pull/76537)）。

## 5. Bug 与稳定性

按严重程度排列：

**P1（严重）**

- [#76541](https://github.com/NousResearch/hermes-agent/issues/76541)（已关闭，修复已合入主干）——v0.19.1 网关在 Telegram 网络抖动时被 shutdown_watchdog 反复杀死，v0.17.0 无此问题，属回归；已修复。
- [#76502](https://github.com/NousResearch/hermes-agent/issues/76502)（开放，暂无 fix PR）——`cronjob(action="run")` 同步阻塞调用线程，长时间无工具输出，父 agent 被 1800s 不活动 watchdog 杀死。这是一个「任务自锁」式的严重缺陷，建议维护者优先排期。

**P2（高）**

- 安全边界类：
  - [#76246](https://github.com/NousResearch/hermes-agent/issues/76246)（开放）——Windows 路径规范化将 `/etc/...`、`/var/run/docker.sock` 改写为反斜杠形式，导致敏感路径写入守卫 fail-open。属越权写入风险，建议优先处理。
  - [#76218](https://github.com/NousResearch/hermes-agent/issues/76218)（开放）——bash/zsh ANSI-C 引号（`$'...'`）可绕过危险命令硬性审批，rm -rf / 等命令无需确认即可执行。同族绕过问题（deny 规则仅匹配完整命令变体）已有 [PR #76551](https://github.com/NousResearch/hermes-agent/pull/76551) 提出修复。
- 消息投递/会话状态：
  - [#60845](https://github.com/NousResearch/hermes-agent/issues/60845)（开放）——Telegram 排队响应跳过 MEDIA 提取，附件变成文本路径。
  - [#74568](https://github.com/NousResearch/hermes-agent/issues/74568)（开放）——死 PID 残留压缩锁阻塞 append_message 达整个 TTL，且表面报错误导为磁盘/权限问题；关联修复（[PR #76543](https://github.com/NousResearch/hermes-agent/pull/76543)）已合入。
  - [#43757](https://github.com/NousResearch/hermes-agent/issues/43757)（开放）——Responses API `input` 数组中的 `function_call_output` 被剥离，跨轮工具结果丢失。
- 网关注册与更新链路：
  - [#76435](https://github.com/NousResearch/hermes-agent/issues/76435)（开放）——网关重连循环 + 桌面更新器不可用；根因修复已由 [PR #76537](https://github.com/NousResearch/hermes-agent/pull/76537)（正常退出不再重启受管服务）覆盖。
  - [#75584](https://github.com/NousResearch/hermes-agent/issues/75584)（开放）——Windows 中断安装后 hermes.exe 缺失 + node_modules ENOTEMPTY + 更新器无法恢复。
  - [#76421](https://github.com/NousResearch/hermes-agent/issues/76421)（开放）——`hermes update` 无法自愈失效主启动器，导致 CLI 不可达。
- 兼容性/配置：
  - [#6729](https://github.com/NousResearch/hermes-agent/issues/6729)（开放，积压近 4 个月）——Systemd 网关安装不尊重非标准 `HERMES_HOME`。
  - [#76457](https://github.com/NousResearch/hermes-agent/issues/76457)（开放）——`hermes config set` 将列表值写成 stringified JSON 字符串而非 YAML 列表。

**P3（中低）**

- [#76510](https://github.com/NousResearch/hermes-agent/issues/76510)（已关闭，无法复现）——cron 生命周期守卫对大体积二进制绝对路径误报；同源问题已由 [PR #76507](https://github.com/NousResearch/hermes-agent/pull/76507)（目录误判为脚本）与 [PR #76540](https://github.com/NousResearch/hermes-agent/pull/76540)（`.` 与 `source` 等价识别）连续修复。
- [#76486](https://github.com/NousResearch/hermes-agent/issues/76486)（已关闭）——`package.json` 声明 `npm: >=12.0.0`，阻塞当前稳定版 npm 11.x / Node 22 安装。
- [#76529](https://github.com/NousResearch/hermes-agent/issues/76529)（已关闭，无法复现）——Git diff/review 预览报 ENOENT。

## 6. 功能请求与路线图信号

- **插件体系是当前最明确的演进方向**：
  - [#64229](https://github.com/NousResearch/hermes-agent/issues/64229)（P3，3 评论）提出插件完整生命周期：注册句柄、per-plugin 所有权台账、`on_load/on_ready/on_unload` 回调和受监督后台任务。
  - 配套 PR 集中出现：[#76522](https://github.com/NousResearch/hermes-agent/pull/76522)（Buzz 持久化 ambient observer 模式）、[#76530](https://github.com/NousResearch/hermes-agent/pull/76530)（plugin-LLM 传播 reasoning_effort）。
  - 缺口类 Issue：[#76381](https://github.com/NousResearch/hermes-agent/issues/76381)（sidebar/footer-* PluginSlot 注册但从未渲染）、[#76064](https://github.com/NousResearch/hermes-agent/issues/76064)（demo/dogfood 插件默认启用造成生产环境 UI 杂乱，获 👍）。
  - 综合判断：插件生命周期管理 + 渲染插槽补齐很有可能进入下一版本。
- **计算后端抽象（架构级信号）**：[PR #69086](https://github.com/NousResearch/hermes-agent/pull/69086)（compute provider capability POC）提出将 Modal 终端后端与 computer-use 能力融合到共享沙箱，带 `needs-decision` 标签，是值得关注的长期方向。
- **其他待评估需求**：[#76539](https://github.com/NousResearch/hermes-agent/issues/76539)（macOS 网关进程可识别名称）、[#40950](https://github.com/NousResearch/hermes-agent/issues/40950)（Desktop 分支改用 Hermes 原生会话分叉模型）、[#63583](https://github.com/NousResearch/hermes-agent/issues/63583)（`/model` 选择器实时探测自定义 provider）、[#76207](https://github.com/NousResearch/hermes-agent/issues/76207)（隐藏 Vite 警告并更新 npm）。

## 7. 用户反馈摘要

- **Windows 更新链路是最大痛点**：[#63717](https://github.com/NousResearch/hermes-agent/issues/63717)（7 根因综合诊断）、[#75584](https://github.com/NousResearch/hermes-agent/issues/75584)（中断后无法恢复）、[#76435](https://github.com/NousResearch/hermes-agent/issues/76435)（更新器弹终端显示 "managed outside..."）共同指向：Windows 用户对更新功能的信任度较低，中断恢复与自愈能力亟待加强。
- **消息投递失误直接损害信任**：[#60845](https://github.com/NousResearch/hermes-agent/issues/60845)（附件变文本路径）、[#76541](https://github.com/NousResearch/hermes-agent/issues/76541)（网关被杀导致消息中断）是 bot 类用户最敏感的功能失效场景。
- **配置 CLI 边界情况多**：[#76457](https://github.com/NousResearch/hermes-agent/issues/76457)（列表值被字符串化）与 [#6729](https://github.com/NousResearch/hermes-agent/issues/6729)（HERMES_HOME 不被 Systemd 尊重）说明配置子系统的各种边缘路径尚未收敛。
- **积极信号**：社区对修复响应速度认可——多条 Issue 在 24 小时内关闭并标记 implemented-on-main；贡献者覆盖面广（CLI、cron、WhatsApp、MCP OAuth、Google Chat），且 PR 质量普遍较高（带复现步骤、根因分析），说明项目对社区 PR 的接纳度和协作流程都处于良好状态。

## 8. 待处理积压

- **[#6729](https://github.com/NousResearch/hermes-agent/issues/6729)（2026-04-09 创建，近 4 个月）**——Systemd Gateway 安装忽略非标准 `HERMES_HOME`。长期未解决，影响所有自定义安装路径用户，建议维护者确认优先级。
- **[#43757](https://github.com/NousResearch/hermes-agent/issues/43757)（2026-06-10 创建，2 个月）**——Responses API `function_call_output` 在 `input` 数组中被剥离，跨轮工具结果丢失。会话状态核心缺陷，至今无修复 PR，建议排期。
- **[#40950](https://github.com/NousResearch/hermes-agent/issues/40950)（2026-06-07 创建，近 2 个月）**——Desktop fork 未接入 Hermes 原生会话分叉模型，功能请求积压。
- **[PR #41661](https://github.com/NousResearch/hermes-agent/pull/41661)（2026-06-08 创建，近 2 个月）**——ACP 工具标题渲染分支测试补充，一直未合并，建议维护者确认是否仍有效或需要 rebase。
- **[#60845](https://github.com/NousResearch/hermes-agent/issues/60845)（2026-07-08 创建，接近 1 个月）**——Telegram 排队响应 MEDIA 提取绕过，P2 消息投递缺陷，尚无 fix PR。
- **[#69086](https://github.com/NousResearch/hermes-agent/pull/69086)（2026-07-22 创建，11 天）**——compute provider 能力 POC 带 `needs-decision` 标签，属架构级变更，等待维护者方向性裁决。

---

**数据口径**：以上内容基于 2026-08-02 采集的 GitHub 数据（50 条 Issue / 50 条 PR）生成；仅展示评论数最多的 30 条 Issue 与 20 条 PR，未展示条目可能包含其他已合并 PR。链接格式：`NousResearch/hermes-agent` 仓库 Issue/PR 编号对应链接。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-02

## 1. 今日速览

过去 24 小时项目保持中等活跃度：1 条 Issue 更新（为老 Bug 重新升温），3 条 PR 更新（其中 1 条已关闭、2 条待合并），无新版本发布。社区侧主要围绕 Matrix 同步循环的稳定性问题展开讨论，同时有 2 个新功能 PR 进入待审队列。整体来看，项目维护节奏稳定，外部贡献活跃，但一个长期存在的关键稳定性 Bug 仍悬而未决，值得关注。

---

## 3. 项目进展

**已关闭/合并：**

- **[#3261] Add zh-TW locale and Traditional Chinese translations**（合并/关闭）
  为 WebUI 和文档补充了台湾繁体中文翻译，使本地化体验覆盖到设置与频道引导流程。这是对多语言支持的重要增量，表明项目在本地化方面持续收编社区成果。

**待合并中：**

- **[#3299] Add native Exa web search provider** — 为 `tools.web` / `web_search` 增加 Exa 原生 Provider，支持时间范围过滤等现有参数。
- **[#3309] feat(providers): add OrcaRouter as an OpenAI-compatible provider** — 将 OrcaRouter（多供应商路由服务）作为一等 OpenAI 兼容 Provider 接入。

这两个 PR 若合入，将显著扩展 PicoClaw 的外部搜索与模型供应商生态，使路由层更加开放灵活。

---

## 4. 社区热点

**[[#3203] Matrix sync loop has no reconnection logic — silent death after network/server disruption](https://github.com/sipeed/picoclaw/issues/3203)**
- 评论：7 条 | 👍 2 | 状态：OPEN + stale

这是今日讨论最活跃、也是唯一获得点赞的 Issue。用户指出 Matrix 通道的 `/sync` 长轮询循环在网络中断或 homeserver 重启后会永久死亡，且进程仍存活，导致 systemd 的 `Restart=on-failure` 无法触发。社区诉求集中在两点：

1. **需要自动重连机制**，而非依赖外部进程管理；
2. **主进程存活但功能静默失效**的检测手段需要增强（如健康检查、看门狗）。

该 Issue 已存在一个月且被标记为 stale，但今天仍有新回复，说明社区对该稳定性的需求仍然迫切。

---

## 5. Bug 与稳定性

**当前无新增 Bug，但存在一项持续未修复的高影响问题：**

| 严重程度 | Issue | 描述 | Fix PR? |
|---|---|---|---|
| 🔴 高 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` 长轮询在断网/服务重启后永久终止，无自动重连；主进程存活，systemd 无法检测并重启 | ❌ 无 |

**影响分析：** 这会导致 Matrix 桥接在遭遇网络抖动或服务器维护后静默失联，用户无法感知服务已不可用，对生产环境危害较大。

---

## 6. 功能请求与路线图信号

今日新增/活跃的功能向 PR 有 2 个，均指向**外部服务集成方向的路线图**：

- **[#3299] Exa Web Search Provider** — 增加原生搜索服务支持，完善 `tools.web` 能力
- **[#3309] OrcaRouter Provider** — 增强模型路由层，兼容 OpenAI 协议的多供应商聚合

结合项目现有架构，PicoClaw 正在向 **"多 Provider 插件化"** 演进。社区贡献者正主动补齐搜索供应商与模型网关，这很可能成为下一版本的重要能力增量。

---

## 7. 用户反馈摘要

来自 [#3203](https://github.com/sipeed/picoclaw/issues/3203) 的真实用户场景：

- **痛点：** 网络中断或 homeserver 重启后，Matrix 通道永久卡死，且因为进程不退出，systemd 无法自动拉起；
- **环境：** PicoClaw v0.2.9，使用 systemd 托管；
- **期望：** 内置自动重连与故障恢复逻辑，或至少提供可配置的健康检查/退出策略。

该反馈揭示了一个通用问题：**AI 助手依赖外部长连接服务时，自愈能力比功能丰富度更影响实际可用性**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 备注 |
|---|---|---|---|---|---|
| Issue | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop 无重连逻辑 | 2026-07-02 | OPEN + stale | 高影响稳定性 Bug，已获 2 👍 和 7 评论，缺少 fix PR，建议优先排期 |
| PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | 2026-07-26 | OPEN | 等待 review |
| PR | [#3309](https://github.com/sipeed/picoclaw/pull/3309) | Add OrcaRouter as OpenAI-compatible provider | 2026-08-01 | OPEN | 等待 review |

**提醒维护者：** [#3203](https://github.com/sipeed/picoclaw/issues/3203) 已挂 stale 一个月，但今天仍被社区顶起，需及时回应修复计划；两个新 PR 已进入待审队列，建议尽快 review 以保持贡献者积极性。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-02

## 1. 今日速览

过去 24 小时 NanoClaw 保持高活跃：2 条 Issue 更新、15 条 PR 更新、1 个新版本发布。核心事件是 **v2.1.54 发布**，iMessage 通道完成统一（含破坏性变更）；同时合并了 setup 失败诊断修复、凭证过期主动告警、发布流程安全加固等 5 个 PR。社区反馈与修复高度联动（#3169→#3170、#3171→#3172 均当天提出修复），维护响应速度优秀。整体项目健康度良好，但仍有 10 个 PR 待合并、2 个 PR 已积压超过 45 天，需要维护者关注。

## 2. 版本发布

**v2.1.54**（Rollup 版本）

- **范围**：聚合 v2.1.18 至 v2.1.54 的全部变更，即 v2.1.17 tag 之后合并的所有内容。
- **破坏性变更 ⚠️**：**iMessage 统一为单一 `imessage` 通道**，通过 `/add-imessage` 安装，提供两种后端：
  - **Local**：基于 Chat SDK 桥接本机 Mac 的 `chat.db`
  - **Hosted**：经 spectrum（发布说明此处截断）使用原生 [Photon](https://photon.codes) 的托管后端
- **迁移注意**：旧版独立的 iMessage 通道配置需重新执行 `/add-imessage` 选择后端；托管后端采用全新注册流程（[#3164](https://github.com/nanocoai/nanoclaw/pull/3164)），建议升级后重新走一遍注册流程验证链路。

## 3. 项目进展

今日关闭/合并 5 个 PR，核心推进：

| PR | 类型 | 内容 |
|---|---|---|
| [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | Feature / Skill | Hosted iMessage (Photon) 可用注册流程，取代 #2999，随 v2.1.54 发布 |
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | Feature / Skill | iMessage 统一为单一 `imessage` 通道（双后端），被 #3164 取代后关闭 |
| [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | Fix | setup 失败诊断改派发到用户实际选择的 provider，修复 #3169 |
| [#3168](https://github.com/nanocoai/nanoclaw/pull/3168) | Fix | 关闭发布后合并的安全缺口（post-merge safety gaps） |
| [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | Feature | provider 凭证过期时主动告警，不再只显示难以理解的连接错误 |

项目在通道抽象收敛（iMessage 双后端合一）、可运维性（凭证到期主动告警）、发布流程健壮性三个方向均有实质推进。iMessage 从 7 月 10 日提出到今日正式落地，迭代约三周，是近期最大的功能性演进。

## 4. 社区热点

今日各 Issue/PR 评论量整体为 0，无大规模讨论帖，但以下事件反映了社区核心诉求：

- **[#3169 — setup 总是推销 Claude CLI](https://github.com/nanocoai/nanoclaw/issues/3169)**（已关闭）：用户明确选择 codex 后，失败流程仍引导安装 Claude CLI，且 "Yes" 为预选项。问题当天提交、当天修复，说明 setup 体验是维护团队高优先级。
- **[#3171 — qodo skills 拦截正常编码请求](https://github.com/nanocoai/nanoclaw/issues/3171)**（开放中）：两个内置 skill 依赖仓库中无任何初始化流程的 Qodo SaaS 集成，且会干扰正常请求。配套移除 PR（[#3172](https://github.com/nanocoai/nanoclaw/pull/3172)）当天即提出，社区对"未配置即不应介入"的默认行为有明确期待。
- **iMessage 统一方案迭代**（[#2999](https://github.com/nanocoai/nanoclaw/pull/2999) → [#3164](https://github.com/nanocoai/nanoclaw/pull/3164)）：07-10 首次提议，07-31 以可用注册流程替代，今日双双关闭。这是近期周期最长、关注度最高的功能演进。

## 5. Bug 与稳定性

| 严重度 | 编号 | 问题 | 状态 |
|---|---|---|---|
| 🔴 高 | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | 内置 qodo skills 依赖未配置的集成，并拦截正常编码请求 | 待处理，已有 PR [#3172](https://github.com/nanocoai/nanoclaw/pull/3172)（移除） |
| 🔴 高 | [PR #3166](https://github.com/nanocoai/nanoclaw/pull/3166) | `migrate-v2` 引用已删除的 `insertTask`，静态 ESM import 直接抛 SyntaxError，迁移流程完全不可用 | 修复 PR 待合并 |
| 🟠 中 | [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) | setup 失败后强制推销 Claude CLI，非 Claude 用户被迫进入 Anthropic 登录流程 | 已修复（#3170 合并） |
| 🟠 中 | [PR #3174](https://github.com/nanocoai/nanoclaw/pull/3174) | rootless Docker 下 agent 容器完全不可用，存在两个互相独立的故障 | 修复 PR 待合并 |
| 🟠 中 | [PR #2956](https://github.com/nanocoai/nanoclaw/pull/2956) | agent 同时经工具发送与最终输出重复内容时，消息被投递两次 | 修复 PR 待合并（已 28 天） |
| 🟡 低 | [PR #3167](https://github.com/nanocoai/nanoclaw/pull/3167) 背景 | 凭证过期仅显示 `Read-only file system (os error 30)`，用户无法定位根因 | 已通过过期告警功能缓解 |

## 6. 功能请求与路线图信号

- **凭证主动告警**（[#3167](https://github.com/nanocoai/nanoclaw/pull/3167) 已合并）：标志项目从"被动报错"走向"主动可观测性"，未来可能扩展为到期前预警。
- **Rootless Docker 支持**（[#3174](https://github.com/nanocoai/nanoclaw/pull/3174) 待合并）：呼应 least-privilege 容器部署趋势，扩大部署环境覆盖面。
- **消息防重复投递**（[#2956](https://github.com/nanocoai/nanoclaw/pull/2956)）：提升面向用户的消息可靠性，属体验修复，具备进入下一版本的潜力。
- **Qodo skills 去留**（[#3171](https://github.com/nanocoai/nanoclaw/issues/3171)）：#3172 若合并，默认不再捆绑未配置的 SaaS 集成；另一种路线是补全初始化流程，但移除更符合当前反馈。
- **Egress 策略更新**（[#3173](https://github.com/nanocoai/nanoclaw/pull/3173)）：涉及出站网络配置，可能服务于更严格的网络隔离/合规场景。

## 7. 用户反馈摘要

- **"我选的不是 Claude"**（[#3169](https://github.com/nanocoai/nanoclaw/issues/3169)）：用户选择 codex 后，setup 失败仍强制插入 Claude CLI 安装和登录流程，且 "Yes" 被预选。核心痛点：**安装向导不尊重用户已选 provider，存在误装风险**。
- **"没配置的技能不该拦截我的请求"**（[#3171](https://github.com/nanocoai/nanoclaw/issues/3171)）：qodo skills 在缺少 API key 时仍参与正常编码请求的处理。核心期待：**默认技能应透明、可预期、未配置则不介入**。
- **"凭证过期的报错完全不可读"**（[#3167](https://github.com/nanocoai/nanoclaw/pull/3167) 描述）：WhatsApp 侧仅显示 `Read-only file system (os error 30)`，操作员无法联想到凭证过期。核心需求：**错误信息须具备可操作性**。
- **"不给 docker 组权限就不可用"**（[#3174](https://github.com/nanocoai/nanoclaw/pull/3174)）：用户出于安全考虑未将 agent 账号加入 docker 组，随即触发两个隐藏故障。核心期待：**支持 least-privilege 的部署方式**。

## 8. 待处理积压

以下长期未合并 PR 建议维护者优先 review：

| PR | 创建时间 | 积压天数 | 重要性 |
|---|---|---|---|
| [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) | 2026-06-12 | 51 天 | 修复容器杀死后 outbound.db 陈旧 journal 恢复与热 journal 轮询竞态（fixes #2516、#2640），数据稳定性关键 PR |
| [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) | 2026-06-17 | 46 天 | router 对不可信输入的安全加固（safeParseContent/engage_pattern），涉及安全 |
| [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) | 2026-07-05 | 28 天 | agent 消息重复投递修复，直接影响用户体验 |
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | 2026-07-19 | 14 天 | 模板顶层 context Markdown 处理修复（core-team 标记） |
| [#3046](https://github.com/nanocoai/nanoclaw/pull/3046) | 2026-07-14 | 19 天 | Telegram pairing 文档与当前实现对齐 |
| [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | 2026-07-23 | 10 天 | reaction 投递改为 best-effort，提升通道容错性 |

其中 **#2750 与 #2801** 积压超过 45 天，分别涉及数据库稳定性与安全加固，建议优先处理；#3166（migrate-v2 完全不可用）虽为新提交，但严重程度高，也应尽快合并。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 2026-08-02

## 1. 今日速览

过去 24 小时 IronClaw 保持高强度迭代：12 条 Issue 更新（10 活跃 / 2 关闭），22 条 PR 更新（15 待合并 / 7 已合并关闭）。核心主线是 Wave 2 依赖反转重构（WS2.x/WS5）与 pi-harness 性能优化；Wave 1 全部 PR 已完成合并，Wave 2 的 #6998 和 #7002 也已落地，架构迁移按 CHECKLIST 稳步推进。同时需警惕：libSQL 与 Postgres 容量性能均报回归（p95 最高 135s），并出现 CI 门禁结构性失效问题，显示项目在高速重构期面临可观测性/稳定性挑战。无新版本发布。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#6998（已合并）— WS2.1 契约层重构**  
  `ironclaw_extension_host` 从直接依赖 `ironclaw_product` 改为实现 `ironclaw_product_contracts` 端口定义，行为不变但解除了最大跨层依赖。Wave 2 顺序约束关键前置项。

- **#7002（已合并）— WS5 WebUI/OpenAI 兼容层端口反转**  
  WebUI 与 openai_compat 迁至 `product_contracts`，与 #7000 分支做了 union 合并，确认多 PR 并行栈的自动冲突解决有效。

- **#6995（已合并）— Wave 1 事实审计**  
  `docs/reborn/target-architecture/` 与 merged `main`（`a50ad0638`）逐项核对，确保决策记录与代码现实一致。

- **#6996（已合并，关闭 #6963）— CI 门禁故障闭合**  
  修复 6 个同类 path-keyed CI 门禁缺陷 + 2 个 loud-but-flat-keyed 重定向，并纳入 `reborn_registration_pipeline_boundary.rs` 静默失效。CI 可靠性重要修复。

- **#6761（已合并，新贡献者 ogarciarevett）— 泛型出站注册回归测试**  
  防止 `register_generic_channel_outbound_targets` 退化为 no-op。

当前待合并队列核心栈为 #6998 → #7000 → #7003 → #7004/#7005（WS2.2 / WS2.4 / WS5），预计未来几天将继续批量合入。Wave 1（#6967/#6975/#6977/#6979/#6980/#6981/#6982）已全部完成，项目整体处于架构重构中期，依赖方向正从 `ironclaw_product` 全面迁向 `product_contracts`。

## 4. 社区热点

今日讨论最活跃条目：

- **[#6963（已关闭，7 条评论）Path-keyed CI gates 追踪](https://github.com/nearai/ironclaw/issues/6963)**  
  由 #6946 评审意见衍生的 8 个 CI 门禁缺陷追踪，最终被 #6996 系统性修复并关闭。"评审意见→缺陷清单→集中修复"闭环路径清晰，社区对门禁纪律的重视可见一斑。

- **[#6974（2 条评论）libSQL thread_store_writes 性能病态](https://github.com/nearai/ironclaw/issues/6974)**  
  #6973 修复后 nightly 压测工具密集型场景 p95 仍 37–135s（目标 2.5s），且 `main` 分支在 20 分钟 CI 超时内连 `large-context` prefill 都跑不完。性能问题是当前 hosted 服务最大痛点。

- **[#6978（1 条评论）reborn-tests.yml workflow_dispatch 结构性失败](https://github.com/nearai/ironclaw/issues/6978)**  
  零真实门禁失败但 roll-up 仍红，`critical-mutation` 在手动触发时跳过却被标记为不允行。CI 结果可信度问题引发关注。

社区核心诉求：**门禁必须 fail-closed 而非 fail-open**；性能回归必须有可复现的压测基线和明确责任人。

## 5. Bug 与稳定性

- **[#6974] libSQL 工具密集型场景 p95 37–135s（严重，无独立 fix PR）**  
  #6973 修复后压力测试终于能完整跑完，但 p95 远超 2.5s SLA，属"从不可用到极慢"。

- **[#6973] Hosted Postgres API 容量回归（严重，修复 PR 待合并）**  
  `send_message` p95 从 275ms 恶化至 4.78s，ops/sec 从 6.86 降至 2.57，回归源指向 #6696 的 row-native process journal。[修复 PR #6973](https://github.com/nearai/ironclaw/pull/6973) 已提交，风险 low。

- **[#6978] reborn-tests.yml workflow_dispatch 结构性失败（中，无 fix PR）**  
  手动触发时 roll-up 依赖被跳过的 `critical-mutation`，CI 判定逻辑矛盾。

- **[#6999] reborn_dependency_boundaries 规则未覆盖 WebChat v2 路由（中，无 fix PR）**  
  文档与规则不一致，需架构决策而非简单 gate repoint，作者明确记录以避免静默修复。

- **[#7011] extension_manager 五个存量缺陷（中，无 fix PR）**  
  伪 WriteFilesystem effect、未测试 lock predicate、两个缺失 dispatch 测试、六个 dropped causes，全部来自 WS2.4 split 逐字节搬移代码中暴露的历史债务。

- **[#7006] steering-queue 错误路径无集成故障注入覆盖（低，无 fix PR）**  
  约 180 行 changed-lines 因属 fault-injection 类而无法被 hermetic 集成 harness 执行，需测试策略扩展。

## 6. 功能请求与路线图信号

- **[#7012] 时间感知与 prompt-cache 稳定性**（新开，0 评论）  
  #7001 修复 cache-prefix churn 后进一步要求规范时间事实契约：哪些时间事实进入上下文、如何淘汰、duration evidence 如何生成。与 #7001/#6997/#6991 同属 pi-harness 项目，预计进入下一迭代。

- **[#7009] 添加 OrcaRouter 为内置 LLM 提供商**（新开，0 评论）  
  `providers.json` 已含 OpenRouter、Together、Fireworks 等网关，缺 OrcaRouter 导致只能走通用路径。实现成本低，可能作为小 PR 合入。

- **[#6993] OOBE 自动化任务原型后端接线**（新开，0 评论）  
  前端 UI-only 原型（#6994）已落地，本 issue 要求补真实后端。属 onboarding 体验升级，路线图信号明确。

- **[#6999] 服务生命周期规则与 WebChat v2 路由对齐**  
  架构决策 call，需在改文档和改代码间权衡，影响 WS5 收尾。

## 7. 用户反馈摘要

- **性能痛点**：serrrfirat 在 #6973/#6974 中指出工具密集型场景下 p95 4.78s 的 `send_message` 对实时对话不可接受，且 `main` 分支连压测都跑不完，强烈呼吁恢复容量基线。

- **CI 信任度下降**：BenKurrek 在 #6978 展示"零真实失败但 roll-up 全红"的极端案例；在 #6999 中强调"必须走架构决策流程，不能悄悄塞进 CI-gates PR"，表明维护者对门禁纪律和可审计性的坚持。

- **新贡献者体验**：#6761 由新贡献者 ogarciarevett 完成，测试设计质量高（通过 registry boundary 查询防止 no-op），说明项目的新人引导与评审流程有效。

- **重构纪律评价**：多个 PR（#7000/#7003/#7005）标注"behavior-free"或"行为不变"，社区对核心维护者的可审计性表示认可。

## 8. 待处理积压

- **[#6780] reborn-ironhub 深链注册/安装网关 + 私有 manifest 源**（XL，7 月 28 日创建）  
  重新移植 #5409，涉及 HMAC 注册握手等安全敏感逻辑，风险 medium。受 Wave 2 重构栈挤压，建议安排后续合入窗口。

- **[#5981] Reborn 队列消息 steering**（XL，7 月 11 日创建，28 天未合）  
  已 forward-port 到当前 main 且修复 turn-boundary 竞态，但受 #7006 变更覆盖率门禁影响；作为 pi-harness 之外最老 XL PR，需维护者明确优先级。

- **[#5598] release PR**（7 月 3 日起持续更新）  
  包含 `ironclaw_common` 0.4.2→0.5.0 与 `ironclaw_skills` 0.3.0→0.4.0 的 breaking changes，长期滞留可能阻塞下游依赖方。

- **[#5982] 预算批准门禁 + 用量设置**（XL，7 月 11 日创建）  
  依赖 #5981 先合入，被阻塞约 3 周，若不安排窗口将进一步老化并产生冲突。

**整体判断**：IronClaw 处于架构重构深水区（Wave 2 进行中），提交节奏快、门禁纪律强，但性能回归与 CI 可靠性是需重点投入的两条战线。建议维护者优先合并 #6973（Postgres 回归修复）、#6997/#7001（cache 稳定性），并为 #5981/#5982 安排明确合入窗口，防止积压扩大。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-02

> 数据来源：github.com/netease-youdao/LobsterAI | 统计窗口：过去 24 小时（2026-08-01 至 2026-08-02）


## 1. 今日速览

过去 24 小时内，LobsterAI 项目共产生 7 条 Issue 更新（1 条活跃、6 条关闭）和 2 条 PR 更新（均为待合并状态），无新版本发布。需要特别指出的是，今日所有更新的 Issue 与 PR 均带有 **`[stale]`** 标记，且绝大多数创建于 2026 年 4 月，更新日期集中在 8 月 1 日——这表明 24 小时窗口内**没有实质性的新议题产生**，看到的更新主要来自 stale bot 的自动标记/关闭机制。项目当前处于典型的维护期：新功能开发节奏放缓，社区提交的修复 PR（#1224、#2358）仍在等待合并，整体活跃度偏低。值得一提的是，这些待合并的 PR 直接关联多个已确认的 Bug 修复，合并优先级应当提高。


## 2. 版本发布

过去 24 小时内无新版本发布，此部分省略。


## 3. 项目进展

今日没有 PR 被合并。当前有 2 个待合并的 PR，均为社区贡献：

- **PR #1224 — fix(agent): 修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1224)）
  由 MaoQianTu 于 2026-04-01 提交，关联 Issue #1223。该 PR 修复了三项 UX/i18n 问题：将 `CoworkPromptInput.tsx` 中硬编码的中文「输入文件」标签替换为 i18n 服务调用；为 Agent 创建/设置弹窗添加 Escape 键关闭支持；为删除操作增加防重复点击保护。这是一次针对界面国际化与交互细节的打磨，量级不大但覆盖面明确。

- **PR #2358 — fix(cowork): show feedback when session rename fails**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2358)）
  由 wangxu-dev 于 2026-07-18 提交，关联 Issue #670。该 PR 为会话重命名失败场景增加了本地化的用户反馈提示，解决用户修改标题失败后无任何提示的问题。改动集中在 IPC 错误捕获与前端提示链路。

这两项修复均直接回应了用户提交的稳定性与体验问题。当前 PR 积压时间已较长（#1224 已等待超过 4 个月），建议维护团队尽快 review 合并，以释放社区贡献者积极性。


## 4. 社区热点

虽然今日整体热度有限，但以下两个议题在过去活跃窗口内获得了相对较多的关注：

- **Issue #1293 — 自定义 studio http 的 mcp 无法使用**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1293)）
  评论 2 条，👍 1 个。用户报告通过自定义方式接入的 HTTP 类型 MCP 实际未在 OpenClaw 引擎中更新，导致无法被调用；只有 SSE 类型可正常工作。这是关于 MCP（Model Context Protocol）协议支持不完整的核心功能缺陷，直接影响了自定义工具链的接入能力。由于 MCP 是当前 AI Agent 工具生态的关键集成标准，此问题值得核心维护者重点关注，建议排查 OpenClaw 引擎侧对 MCP 传输层协议的实现覆盖。

- **Issue #1223 — CoworkPromptInput 硬编码中文标签 + Agent 弹窗缺少 Escape 键关闭及删除防重复点击保护**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1223)）
  评论 1 条。该 Issue 汇总了三个 UX/i18n 缺陷，虽然以 Bug 形式提交，但背后反映的是中文用户群体对产品国际化体验的细腻要求——尤其是在英文界面下提示词中不应混入中文的问题。该 Issue 已有对应 PR #1224 修复，等待合并。

**背后诉求分析**：社区用户对 LobsterAI 的期待集中在两处——一是**生态兼容性**（MCP 协议等标准要完整实现），二是**交互细节的工程品质**（国际化字符串、键盘操作、防重复提交等）。这些反馈说明用户已从「能否跑通」进入到「是否好用」的使用阶段。


## 5. Bug 与稳定性

今日共记录 7 条 Issue 更新（其中 6 条已关闭，1 条仍开放），全部带 `[stale]` 标记。按严重程度排列如下：

| 严重度 | Issue | 问题描述 | 状态 | 关联修复 |
|---|---|---|---|---|
| 🔴 高 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 上传 3MB 长图让模型解析时，页面直接报错；新开任务持续报错，**整体不可用** | 已关闭 (stale) | 无 |
| 🔴 高 | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 自定义 HTTP 类型 MCP 在 OpenClaw 引擎中未更新，无法被调用 | 已关闭 (stale) | 无 |
| 🟠 中 | [#1298](https://github.com/netease-youdao/LobsterAI/issues/1298) | 测试模型连接成功，但输入两个字即提示「输入内容过长，超出模型限制」，疑似上下文长度计算错误 | 已关闭 (stale) | 无 |
| 🟠 中 | [#1305](https://github.com/netease-youdao/LobsterAI/issues/1305) | 定时任务运行成功后删除任务，历史记录中标题名称展示错误 | 已关闭 (stale) | 无 |
| 🟡 低 | [#1307](https://github.com/netease-youdao/LobsterAI/issues/1307) | 关闭模型供应商编辑面板后，切换到其他供应商无法再次编辑，右侧面板变为只读 | 已关闭 (stale) | 无 |
| 🟡 低 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | CoworkPromptInput 硬编码中文标签（i18n）；Agent 弹窗缺少 Escape 关闭；删除缺少防重复点击 | **开放中** | ✅ [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) 待合并 |

**需要说明**：上述 Issue 均已被 stale bot 标记并关闭（除 #1223 外），但这**不代表问题已被修复**。Issue 的关闭仅仅意味着议题不再接受自动提醒，底层 Bug 是否仍然存在于当前代码库需要维护者确认。其中 #1296（长图解析后整体不可用）和 #1293（MCP 协议支持不完整）对用户体验影响较大，建议维护者主动跟进，在最新版本中验证是否存在，若有则应重新打开或新建跟踪 Issue。

另外，PR #2358 正在修复的「会话重命名失败无提示」问题（对应 Issue #670）同样属于稳定性范畴，目前仍未合并。


## 6. 功能请求与路线图信号

以下功能/改进请求今日出现在 Issue/PR 更新中，值得纳入路线图讨论：

| 功能请求 | 来源 | 说明 | 纳入可能性判断 |
|---|---|---|---|
| 代码块行号显示切换按钮 | [Issue #1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 为代码块工具栏添加行号开关，提升长代码阅读体验 | 低。该 Issue 已以 stale 状态关闭，且无关联 PR。属于体验优化类需求，在当前维护节奏下可能延后 |
| Agent 弹窗 Escape 键关闭 + 删除防重复点击 | [Issue #1223](https://github.com/netease-youdao/LobsterAI/issues/1223) / [PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | 键盘交互完善 + 防止误操作 | 高。已有完整 PR 实现，等待合并即可合入主线 |
| 会话重命名失败的用户提示 | [PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | 失败时给予本地化反馈 | 高。PR 已提交，改动范围小，review 成本低 |

综合来看，**社区贡献者主动提交 PR 的功能点（#1224、#2358）最有希望进入下一版本**，因为它们已经完成了实现工作，只待维护者审核。其余纯 Issue 形式的功能建议在当前维护期可能沉淀较久。


## 7. 用户反馈摘要

从今日更新的 Issue 评论中，可以提炼出以下真实用户声音：

- **「上传一张图就整个不可用了」**（[#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)）：用户反馈当长图解析失败后，新开任务持续报错、产品整体不可用。这是一个严重的故障恢复问题——单次输入失败不应造成全局性瘫痪。用户对错误的隔离与恢复机制存在明确的期望。

- **「只有 SSE 的可以被 openclaw 引擎使用」**（[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)）：用户对自定义 MCP 协议支持不完整的表述简短但指向明确。说明用户有自定义接入工具链的真实需求，且实际尝试了 HTTP 与 SSE 两种传输方式并定位到问题源头。

- **「输入两个字就提示超出模型限制」**（[#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)）：测试连接时一切正常，实际使用时短文本即被误判超长。用户对模型上下文长度计算逻辑的准确性存疑，这直接影响日常可用性。

- **「定时任务删除后历史标题展示不对」**（[#1305](https://github.com/netease-youdao/LobsterAI/issues/1305)）：用户给出了清晰的复现步骤（新建任务 → 命名 → 运行 → 删除 → 查看历史），说明这是一个可稳定复现的展示层缺陷。

- **「英文用户提示词中混入中文」**（[#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)）：用户敏锐地注意到发送给 AI 的 Prompt 中出现了硬编码的中文字符串，体现了社区用户对产品国际化质量有一定要求。

整体用户情绪以「功能缺失」和「细节粗糙」为主，而非对新方向的否定。用户正在积极使用产品、发现边角问题并主动提交修复，说明产品处于可用的早期阶段，核心价值被认可，但工程打磨仍有提升空间。


## 8. 待处理积压

以下为长期未响应或仍在开放状态的重要议题，建议维护者优先关注：

| 项目 | 创建时间 | 最后更新 | 积压天数* | 重要性说明 |
|---|---|---|---|---|
| [Issue #1223](https://github.com/netease-youdao/LobsterAI/issues/1223)（含 [PR #1224](https://github.com/netease-youdao/LobsterAI/pull/1224)） | 2026-04-01 | 2026-08-01 | 123 天 | 开放状态的 Bug + 待合并修复 PR。PR 已停留超 4 个月，贡献者耐心正在消耗 |
| [PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | 2026-07-18 | 2026-08-01 | 15 天 | 简单明了的体验修复，等待 review |
| [Issue #1296](https://github.com/netease-youdao/LobsterAI/issues/1296)（stale 关闭） | 2026-04-02 | 2026-08-01 | — | 虽然已 stale 关闭，但「上传长图导致整体不可用」的问题性质严重，建议维护者验证是否已修复。若仍存在，建议重新打开跟踪 |

> *积压天数按最后更新至 2026-08-02 估算。

**维护者行动建议**：
1. 优先合并 PR #1224 和 #2358，这两个 PR 分别修复了 5 个以上用户可感知的问题，且 review 成本低；
2. 对已 stale 关闭但性质严重的高优 Bug（尤其 #1296、#1293），建议在当前代码库中回归验证，若仍存在应重新打开或创建新跟踪 Issue，避免问题落入盲区；
3. 整体项目活跃度偏低，建议考虑通过发布周期规划或社区贡献指引来激活贡献者生态。

---

*本日报由 AI 分析师自动生成，数据均来源于 GitHub 公开仓库 `netease-youdao/LobsterAI`，链接可直接访问。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-02

## 1. 今日速览

过去 24 小时 Moltis 仓库无新 Issue、无 Issue 关闭、无新版本 Release；PR 更新 3 条，其中 1 条待合并、2 条已关闭。核心动作集中在会话管理修复与可观测性基础设施收尾，项目处于正常迭代节奏，整体活跃度与健康度良好。

## 2. 版本发布

本周期无新版本发布。

## 3. 项目进展

- **[PR #1182（待合并）](https://github.com/moltis-org/moltis/pull/1182)**：修复 `main` session 无法删除/归档的限制，解决 [Issue #1132](https://github.com/moltis-org/moltis/issues/1132)。合入后 `main` session 将与其他 session 一样支持删除和归档，统一会话管理行为。
- **[PR #1174（已关闭）](https://github.com/moltis-org/moltis/pull/1174)**：合并了 Agent 可观测性与反馈收集基础设施，包含后端无关的插桩、Langfuse v4 导出、OTLP 运维后端、以及最终用户反应式反馈，为生产级运营和反馈闭环铺路。
- **[PR #1170（已关闭）](https://github.com/moltis-org/moltis/pull/1170)**：将“访问权限”与“特权操作”解耦，新增按账户维度的 `operators` 名单，禁止 allowlist 用户越权触达 `/sh` 等特权命令与宿主工具，封堵了跨命令、回调、队列重放等场景的越权路径。

三条 PR 分别从会话管理、可观测性、权限边界三个方向推进，项目向生产可用和权限安全持续收敛。

## 4. 社区热点

本周期无 Issues 评论/点赞活跃度数据。当前唯一开放 PR **[#1182](https://github.com/moltis-org/moltis/pull/1182)** 直接回应用户对 `main` session 管理灵活性的诉求，可能是近期待合并项中最受关注的变化，建议重点跟进 review 进展。

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 |
| --- | --- | --- |
| 高 | 通道发送者可绕过访问 allowlist 触达特权命令与宿主工具 | 已修复，见 [PR #1170](https://github.com/moltis-org/moltis/pull/1170) |
| 中 | `main` session 无法被删除/归档，与其他 session 行为不一致 | 已有 fix PR，待合并，见 [PR #1182](https://github.com/moltis-org/moltis/pull/1182) |
| — | 本周期无新崩溃、回归或严重稳定性报告 | — |

## 6. 功能请求与路线图信号

本周期未捕获到用户新提交的功能请求 Issue。从已关闭的 PR 推断，项目路线图正在向以下方向倾斜：

- **生产级可观测性**：Agent 插桩、OTLP 导出、Langfuse v4 对接（[PR #1174](https://github.com/moltis-org/moltis/pull/1174)）
- **权限模型细化**：访问控制与特权操作分离、per-account operators 名单（[PR #1170](https://github.com/moltis-org/moltis/pull/1170)）
- **会话管理一致性**：统一全部 session 的删除/归档规则（[PR #1182](https://github.com/moltis-org/moltis/pull/1182)）

以上能力很可能会进入下一版本的发布范围。

## 7. 用户反馈摘要

本周期无 Issues 评论数据可供提炼。结合 PR 的动因可看出用户侧存在以下潜在诉求：

- 管理员希望完全掌控 session 生命周期，包括 `main` session 的删除与归档。
- 渠道运维方希望具备更细粒度、更安全的操作者授权机制，避免 allowlist 误用导致特权工具暴露。

待后续 Issue 讨论数据积累后再做更完整的用户反馈分析。

## 8. 待处理积压

- **[PR #1182](https://github.com/moltis-org/moltis/pull/1182)** 为当前唯一 Open PR，尚未有评论与 review 记录，建议维护者优先安排审核。
- 本周期未发现长期未响应的重要 Issue 或 PR。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-02）

> 数据来源：github.com/agentscope-ai/QwenPaw（CoPaw） | 统计窗口：2026-08-01 ~ 2026-08-02

## 今日速览

过去 24 小时 CoPaw 仓库保持高活跃度：共 9 条 Issue 更新、11 条 PR 更新，其中 1 个 PR 被关闭，10 个 PR 处于待合并状态；无新版本发布。社区反馈集中在稳定性问题（自动压缩、ACP 竞态、流式兼容性崩溃）与体验改进诉求（空间清理、全局快捷键、多智能体引导）。值得肯定的是，针对严重 Bug 的修复 PR 基本在当天内提交，维护响应速度较快，项目整体处于密集提交流阶段。

## 版本发布

今日无新版本发布。

## 项目进展

今日唯一的 PR 关闭事件是 [#6598](https://github.com/agentscope-ai/QwenPaw/pull/6598)（fix(skills): preserve plugin-sourced skill tags across reconcile cycles），但从状态看该 PR 并未成功合并，同一问题已由新的 PR [#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632) 重新提交并保持打开，表明旧 PR 很可能被取代。

除关闭事件外，当前有 10 个 PR 正在待合并状态，覆盖多个高价值修复点，标志着项目正在快速聚集下一波更新：

- [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)：修复自动压缩不触发记忆流程的缺陷
- [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)：修复 ACP 通知竞争导致文本丢失
- [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620)：修复 Gemini thought_signature 导致的流式崩溃
- [#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630)：修复空模型响应静默失败问题
- [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622)：新增 OrcaRouter 内置 provider
- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)：统一 provider discovery、模型元数据与路由控制

## 社区热点

以下 Issue 在今日讨论最活跃（评论数均为 2 条），集中呈现了用户当前的核心诉求：

1. **[#6593 [enhancement] 增加统一且专业的 qwenapw 专用清理页面](https://github.com/agentscope-ai/QwenPaw/issues/6593)**  
   用户反馈长期使用后，自动记忆、工具调用、协作数据、备份与历史对话导致空间臃肿，且删除会话无法联动清理工作区目录。希望提供全局的、可手动/自动结合的统一清理页面。

2. **[#6480 [question] 运行 nohup 命令 agent 都会卡住](https://github.com/agentscope-ai/QwenPaw/issues/6480)**  
   用户在执行 `nohup` 或带 `&` 的 shell 命令时，`execute_shell_command` 永远不会返回 idle，导致 agent 一直卡死。该问题影响 shell 工具的可靠性，已持续一周仍无修复 PR。

3. **[#6568 [enhancement] 全局快捷键唤出浮动快速输入框（豆包式）](https://github.com/agentscope-ai/QwenPaw/issues/6568)**  
   用户希望桌面端支持全局快捷键唤出迷你输入框，避免每次都要打开 1280×800 主窗口。诉求本质是降低“随手提问”的交互摩擦。

## Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

| 严重程度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 严重（崩溃） | [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) | `ToolCallBlock` 缺少 `extra_content` 字段，导致 Gemini 流式解析在 `openai_chat_model_compat` 中崩溃 | 有，[#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620) |
| 🟠 高（功能失灵） | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll 自动压缩不触发 `summarize_when_compact` 记忆流程，手动 `/compact` 正常 | 有，[#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) |
| 🟠 高（数据丢失） | [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) | ACP `delegate_external_agent` 在通知与响应同段到达时返回“completed without text output” | 有，[#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) |
| 🟡 中（CI 阻塞） | [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) | `Real behavior proof` 门禁会完全剥离 fenced Evidence 块，导致含代码转录的 PR 被误拒 | 暂无 |
| 🟡 中（功能卡顿） | [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | `nohup`/`&` 后台命令导致 `execute_shell_command` 永不返回 idle | 暂无 |

## 功能请求与路线图信号

今日用户提出多个明确的功能增强诉求，结合已有 PR 可判断以下方向可能进入下一版本：

- **全局空间清理能力**：[#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) 要求统一清理页面，映射出长期使用后的数据治理痛点。
- **轻量快速交互**：[#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) 建议全局快捷键唤起浮动输入框，符合桌面 AI 助手向“随时可用”演进的趋势。
- **多智能体易用性提升**：[#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) 反馈多智能体协作缺乏显式引导，导致大量无效调试，或倒逼文档与产品交互优化。
- **可观测性增强**：[#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) 询问如何用 LoongSuite 进行 LLM trace，表明用户对链路追踪有真实需求。
- **Provider 生态扩展**：PR [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) 新增 OrcaRouter 内置 provider，PR [#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631) 对齐阿里云 coding plan 模型列表，均指向 provider 管理能力的持续完善。

## 用户反馈摘要

从今日 Issue 及评论中提炼的真实用户声音：

- **数据膨胀困扰**：用户 MCQSJ（[#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)）指出“日积月累会越来越臃肿”，手动清理麻烦且容易误删，希望系统级自动清理。
- **多智能体引导缺失**：用户 monicfenga（[#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)）经历了 50+ 轮无效对话后才偶然发现 Default Agent 不会自动调用其他 Agent，认为文档未给出足够的显式提示，造成大量时间损耗。
- **shell 工具可靠性**：用户 focus883（[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)）明确复现了 `nohup` 卡死问题，该场景在服务启动、后台任务中非常常见，影响生产使用。
- **自动压缩行为不一致**：用户 Cederys（[#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624)）对比了自动压缩与手动 `/compact` 的差异，记录得细致，属于高质量反馈。
- **AI 辅助报告的正面案例**：用户 namphamdev（[#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619)）通过 AI coding agent 协助复现、定位根因，并验证了 workaround，环境信息完整，值得推广。

## 待处理积压

以下重要 PR / Issue 已存在较长时间，提醒维护者关注：

- **PR [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490)**（2026-06-24 创建，已 1 个多月）：console 中工具卡片图片内联显示与图集导航增强，长期未合并，可能因改动范围或 review 资源受限。
- **PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)**（2026-07-21 创建，已近 2 周）：统一 provider discovery、模型元数据、路由与 Agent 控制，是体量较大的架构级 PR，需要维护者投入深度 review。
- **Issue [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)**（2026-07-26 创建，已 1 周）：`nohup` 命令卡住问题至今无关联 fix PR，属于影响面较大的稳定性问题，建议优先排期。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-02

> 数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) | 统计窗口：2026-08-01 ~ 2026-08-02

## 1. 今日速览

过去 24 小时项目保持高强度活跃：50 条 Issue 更新（47 条新开/活跃、3 条关闭）、50 条 PR 更新（全部处于待合并状态），无新版本发布。社区讨论集中在**记忆架构重构**（对话历史/长期记忆分离、存储与连接器解耦）、**安全加固**（WhatsApp 通道鉴权漏洞、密钥源抽象）和**生态兼容性**（OpenAI Chat Completions 适配、A2A 出站协作）三大方向。需要关注的风险信号是：**过去 24 小时 PR 合并/关闭数为 0**，50 个待合并 PR 中大量带有 `needs-author-action` 或 `stale-candidate` 标记，合并积压正在成为项目健康度的主要瓶颈。

## 2. 版本发布

**无新版本发布**。当前 master 分支已出现 [PR #9648: chore(release): bump version to v0.8.4](https://github.com/zeroclaw-labs/zeroclaw/pull/9648)，该 PR 将工作区版本升至 `0.8.4` 并重新生成安装器、容器、包、桌面端及文档的发布面，可能预示着一次 patch 版本发布在即，但截至今日尚未合并。

## 3. 项目进展

过去 24 小时**没有 PR 被合并或关闭**，也没有 Issue 对应的修复合入记录。项目进展主要体现在 50 个待合并 PR 的持续推进与状态更新上，值得关注的实质性变更包括：

- **[#9182 feat(runtime): support PowerShell as native shell on Windows](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)**（size: XL）：在 Windows 上支持 `powershell`/`pwsh` 作为原生 shell，保留 `cmd.exe /C` 作为默认路径。
- **[#9091 feat(computer-use): add native macOS, Linux X11, and Windows drivers](https://github.com/zeroclaw-labs/zeroclaw/pull/9091)**（size: XL）：为 `computer_use` 工具补齐三大桌面平台的本地驱动，对应 RFC #6909。
- **[#9080 feat(relay): secure transport and browser enrollment frontdoor](https://github.com/zeroclaw-labs/zeroclaw/pull/9080)**（size: XL）：远程 WSS 强制双向 mTLS，新增 daemon 持有 CA、CSR-only 签发、证书台账/吊销/续期等安全传输平面。
- **[#9571 chore(channels): remove the WATI channel](https://github.com/zeroclaw-labs/zeroclaw/pull/9571)**（priority: p0，size: XL）：整体移除 WATI 通道模块、feature、gateway 路由及 CI/安装器/标签器等关联面。
- **[#9420 fix(anthropic): support stored OAuth profiles](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)**（size: XL）：为 Anthropic 增加显式 `auth_mode = "oauth"`，按命名 profile 解析凭据，保留旧有静态 `api_key` 路径。

**合并瓶颈提示**：50 个待合并 PR 中有约 15 个被标记为 `needs-author-action`，另有 `#8546`、`#8576`、`#8655` 被标记为 `stale-candidate`。如果维护者不介入，这些 PR 将继续堆积。

## 4. 社区热点

最活跃的讨论（按评论数排序）集中在几个深层架构议题上：

- **[#9048 RFC: Separate conversation history from agent-curated long-term memory](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)**（16 评论）：指出运行时、网关、通道自动保存代码仍将对话轮次写入通用记忆后端，与"会话历史"和"长期记忆"两个生命周期概念相违背。这是记忆架构分裂讨论的核心。
- **[#8603 RFC: OpenAI Chat Completions compatibility adapter](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)**（13 评论）：诉求是让 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等 OpenAI 协议客户端可直接接入 ZeroClaw，目前只有 WebSocket/ACP/webhook 面。
- **[#9127 RFC: Abstract a `KeySource` trait](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)**（13 评论）：统一主密钥（master key）的来源与部署形态分类，建立在现有 `enc2:` 密文格式和 93 个 `#[secret]` 字段的基础上。
- **[#8933 RFC: Add cross-turn conversation correlation to OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)**（12 评论）：在 OTel 导出中携带不透明会话 ID，映射到 Semantic Conventions v1.41.0 的 `gen_ai.conversation.id` 实验属性。
- **[#7155 RFC: per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)**（11 评论）：提出在"放行"和"完全禁止"之间增加按次确认档位，并引入 Claude Code 风格的 allow/ask/deny 命令模式策略。
- **[#9103 RFC: separate authoritative memory storage from optional enrichment connectors](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)** 与 **[#9106 RFC: A2A outbound client (A2ATool)](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)**（各 10 评论）：分别指向记忆存储与 Lucid 等 enrichment 连接器的职责混淆问题，以及 ZeroClaw 无法主动调用外部 A2A 智能体的能力缺口。

**诉求分析**：社区的注意力高度集中在**记忆子系统能否正确建模**、**安全边界是否可被运维者理解与信任**、以及**作为 AI 基础设施能否融入现有生态（OpenAI 协议、A2A、OTel）**这三个层面。记忆相关的三个 RFC（#9048、#9103、#6850）形成了互相呼应的重构脉络。

## 5. Bug 与稳定性

过去 24 小时更新中暴露的活跃 Bug 按严重程度排列：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| S1 | [#9348 WhatsApp Web answers every DM and group under mode=business](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | `business` 模式下空 `allowed_groups` 导致机器人回复所有私聊和群聊，配置显示"已锁定"实际完全开放，属安全风险 | P1 / in-progress / accepted |
| S2 | [#9417 WhatsApp Cloud request_approval leaks a live approval token on send failure/cancellation](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | 审批请求在发送失败或取消时泄露实时审批令牌 | P1 / in-progress |
| P1 | [#9340 CLI-created cron jobs cannot deliver output; delivery hardcoded to None](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI 创建的 cron 任务 `delivery.mode` 固定为 `none`，任务记录为 `ok` 但输出被丢弃，无任何提示 | P1 / in-progress / accepted / help wanted |
| S3 | [#6157 Nextcloud Talk use correct bot message API](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | 使用错误的 bot 消息 API URL 构造方式，响应消息发送失败 | P2 / in-progress / accepted |

**修复进度**：`#9348` 的根治方案已作为 **[RFC #9397: Treat an empty WhatsApp Web `allowed_groups` as permit-none](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)** 被提出（5 评论，来自同一 reporter @belumume），目标是将空 `allowed_groups` 语义改为"全部拒绝"而非"全部放行"，目前处于 `needs-maintainer-review`。其余 Bug 尚无对应 fix PR。

## 6. 功能请求与路线图信号

- **OpenRouter 提示词缓存**：[#9631 Send stable session_id to OpenRouter for prompt-cache savings](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)（新增于 08-01，2 评论）：通过对 OpenRouter 传递稳定 `session_id` 可复用系统提示词与工具 schema 的缓存，显著降低多轮对话成本。**判定：低风险、高收益，很可能进入下一版本。**
- **Gemini Live 实时语音通道**：[#8780 RFC: Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)（8 评论）：以模型为"对话大脑"的原生 audio-to-audio 通道，ZeroClaw 负责工具、审批闸门与跨通道记忆，当前等待作者行动。
- **Mixture-of-Agents 虚拟模型供应商**：[#8568 [Feature] MoA virtual model provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)（8 评论）——**今日已关闭**：聚合/裁判模型 + 并行参考模型的多模型协作方案已完成讨论流程，预计拆分为后续实现项。
- **桌面计算机使用能力**：[#6909 RFC: Computer-use support for desktop](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 与 **[PR #9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091)** 配套推进，native macOS/Linux X11/Windows 驱动已就绪，处于 `needs-author-action`。
- **评估体系成型**：@IftekharUddin 提交了一系列 eval 相关 PR（[#9220 可比运行回执](https://github.com/zeroclaw-labs/zeroclaw/pull/9220)、[#9221 基线文件与回归门禁](https://github.com/zeroclaw-labs/zeroclaw/pull/9221)、[#9222 分维度 LLM 裁判评分器（诊断模式）](https://github.com/zeroclaw-labs/zeroclaw/pull/9222)、[#9223 JUnit XML 报告](https://github.com/zeroclaw-labs/zeroclaw/pull/9223)、[#9244 记忆种子与断言](https://github.com/zeroclaw-labs/zeroclaw/pull/9244)、[#9248 只增运行历史回执](https://github.com/zeroclaw-labs/zeroclaw/pull/9248)），这组 PR 是 #7065 评估体系的分片落地，全部处于 `needs-author-action`。
- **其他待合并路线图 PR**：技能压缩注入默认化（[#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313)）、Slack 生命周期进度展示（[#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985)）、引擎工具注册表封装为 `ScopedToolRegistry`（[#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319)）、Telegram 群聊 `mention_only` 鉴权绕过修复（[#9634](https://github.com/zeroclaw-labs/zeroclaw/pull/9634)）。

## 7. 用户反馈摘要

从今日活跃 Issue 与 PR 评论中提炼的真实用户痛点：

- **"看似锁定的配置实际上是全开放的"**：@belumume 在 [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) 中描述了 WhatsApp Web 通道的核心信任问题——运维者按文档配置了允许列表，结果机器人回复了所有无关群聊。这种"配置语义与直觉相反"的安全陷阱极易造成实际事故，社区对 `#9397` 的快速跟进也印证了其严重性。
- **"任务显示成功，但结果去向不明"**：@AngryPacifist 在 [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) 中指出 CLI 创建的 cron 作业被记录为 `ok` 但输出被静默丢弃，用户直到事后检查才发现所有定时任务从未交付任何结果。这反映了可观测性缺口：没有告警、没有状态提示。
- **"同样的概念在代码里有三套实现"**：记忆架构三个 RFC（[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)、[#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)、[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)）的评论反复出现同一类抱怨：会话历史、长期记忆、生命周期策略没有清晰边界，导致每个新集成方都要重复实现一遍。
- **"生态里的标准客户端接入不了"**：@REL-mame 在 [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) 中列举了 Open WebUI、LobeChat、Aider、LangChain 等一众 OpenAI 协议客户端，表达了对互操作性的强烈期望——这是社区对"ZeroClaw 作为 AI 基础设施"定位的直接检验。
- **"成本敏感用户关注提示词缓存"**：@OskarSwierad 在 [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) 中指出单个会话产生数十次 LLM 请求、系统提示与工具 schema 被反复重放，通过 OpenRouter `session_id` 可立即节省可观的 token 成本。

## 8. 待处理积压

需要维护者重点关注的项目：

- **合并积压（最大风险）**：过去 24 小时 50 个 PR 更新、**0 个合并/关闭**。多个 `size:XL` 的大型 PR（如 [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)、[#9080](https://github.com/zeroclaw-labs/zeroclaw/pull/9080)、[#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091)、[#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571)）已停留多日，建议维护者明确逐项处理计划。
- **被作者搁置 / 濒临过期的 PR**：`#8546`、`#8576`、`#8655` 已被标记 `stale-candidate`；`#9634`、`#9319`、`#9220–#9248`、`#9080`、`#9115`、`#9420`、`#9571` 等 15 个 PR 处于 `needs-author-action`，需要维护者反馈或推动作者更新。
- **等待维护者决策的 RFC/Issue**：`needs-maintainer-review` 标记集中在 [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（shell 命令确认层级）、[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)（记忆生命周期策略解耦）、[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（可插拔入站认证与规范主体）、[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)（桌面 computer-use）、[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)（安全 UX 与隔离默认值）、[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)（运行时安全决策管道）、[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)（沙箱文件系统/网络策略）、[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)（per-model 能力与上下文窗口）、[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)（免 reload 应用安全策略/通道配置）、[#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)（统一 slash-command 注册表）、[#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)（WhatsApp 空允许列表语义）、[#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)（OpenRouter session_id）。
- **协调型 Tracker 的进度压力**：维护者决策队列 [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 和 v0.9.0 破坏性变更队列 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 是 RFC 决策与 breaking-change 治理的公开入口，目前已积累超过 20 个待决策 RFC；`#6489`（统一能力目录与插件迁移路线图）的推进也将持续影响插件体系的演进方向。

---

*报告生成时间：2026-08-02 | 数据窗口：最近 24 小时（含 GitHub 存档快照口径）*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*