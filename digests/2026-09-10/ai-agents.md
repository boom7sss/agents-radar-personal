# OpenClaw 生态日报 2026-09-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-10 10:02 UTC

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

# OpenClaw 项目日报 · 2026-09-10

> 数据来源：OpenClaw GitHub 仓库 (github.com/openclaw/openclaw)。以下内容严格基于所供数据，未作外部补充。

---

## 1. 今日速览

- 项目维持**极高活跃度**：过去 24 小时 Issues 更新 500 条（新开/活跃 311、关闭 189），PR 更新 500 条（待合并 254、已合并/关闭 246），并发布 1 个版本。
- 关停比例健康：Issues 关闭率约 37.8%，PR 合并/关闭率约 49.2%，显示维护流水线仍在持续消化积压。
- 讨论焦点集中在**稳定性与运行时正确性**：事件循环阻塞、SQLite 写争用、子进程泄漏、上下文注入泄漏等 P0/P1 问题占据热度榜。
- 6 月 LTS 收官版本 v2026.6.35 发布，主题为**边界安全加固**（provider/channel 响应体限界）。
- 仍存在多条 P0 回归与迁移阻塞（如 2026.9.x Doctor 拒绝合法旧工作区、Windows 网关启动失败）尚未完全闭环。

---

## 2. 版本发布

### v2026.6.35 — 2026 年 6 月 Extended Stable (LTS) 最终版

- 定位：**June 2026 Extended Stable (LTS) 的最后一个版本**。
- 更新重点（Highlights）：
  - **更安全的 provider 与 channel 边界**：内置 provider 与 channel 适配器现在会
    - 对不可信响应体进行**边界限制（bound untrusted response bodies）**；
    - 在执行昂贵操作前**拒绝超限输入（reject oversized inputs before expensive work）**；
    - 在中断时**保留安全恢复能力（preserve safe recovery when tran…，原文截断）**。
- 破坏性变更 / 迁移注意事项：所供 release 文本中**未明确列出破坏性变更或迁移步骤**，摘要处内容被截断，无法确认完整细节。

> 链接：仓库 Releases 页（原文未提供单版本直链）

---

## 3. 项目进展

今日合并/关闭的 PR 共 246 条，以下为数据中确认已关闭的代表性条目：

| 编号 | 状态 | 说明 |
|---|---|---|
| PR #143895 | **CLOSED** | docs(plugins)：修正过时的 discovery 别名与 Claude bundle 能力描述。作者自述为“两处低置信度审计发现，经源码验证后均为**文档缺陷而非代码缺陷**”。[链接](https://github.com/openclaw/openclaw/pull/143895) |

另有大量**已关闭 Issue**反映问题被推进或收敛（见第 5 节）：

- #135111（claude-sonnet-5 malformed JSON 工具调用，P1 回归）— 已关闭
- #137927（内部上下文块泄漏到 Telegram 可见文本，P1/安全）— 已关闭
- #137813（Windows 网关卡在 2026.9.1 更新后无法启动，P0）— 已关闭
- #132762（overflow retry 以 toolResult 结束但无最终投递，P1）— 已关闭
- #90711（launchd plist 将 stderr 硬编码到 /dev/null）— 已关闭
- #101763（托管 Molty 模型选择器不持久，P0 发布阻塞）— 已关闭
- #109657（在 WhatsApp/Discord/Slack/Signal/iMessage 采用核心持久化 ingress drain，P1）— 已关闭

**整体判断**：项目在“吞吐量”维度表现强劲（500/500 的日更新量），但今日推进以**文档修正与问题收敛**为主，大型功能 PR 仍停留在“等待维护者查看 / 等待作者补证”阶段（见第 8 节），净新增能力有限。

---

## 4. 社区热点

### 讨论最活跃的 Issues

1. **#135111**（26 评论，已关闭）— v2026.8.1 上 claude-sonnet-5 间歇性报 “Provider completed tool call with malformed JSON arguments”，与具体文件/工具无关。标签含 `regression`、`P1`、`impact:auth-provider`。**诉求**：升级后的 provider 侧稳定性。
   [链接](https://github.com/openclaw/openclaw/issues/135111)
2. **#97616**（15 评论，开放，👍1）— hook/tool 子进程未被回收，僵尸进程累积导致运行时退化。**诉求**：长跑进程的资源治理。
   [链接](https://github.com/openclaw/openclaw/issues/97616)
3. **#119720**（15 评论，开放）— 同步的 agent 持久化与 transcript 维护在规模化时阻塞 Gateway 事件循环。标签 `impact:session-state`、`impact:crash-loop`。
   [链接](https://github.com/openclaw/openclaw/issues/119720)
4. **#137927**（14 评论，已关闭）— `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` 内部上下文块泄漏为 Telegram 可见文本，涉及 `impact:security`。**诉求**：内部脚手架不得外泄到用户频道。
   [链接](https://github.com/openclaw/openclaw/issues/137927)

### 讨论最活跃的 PR（均创建/更新于 2026-09-10）

- **#143587** `feat(gateway): bind requests to selected profiles`（XL，`🐞 diamond lobster`，安全边界风险，待维护者查看）— 跨 gateway/agents/android/web-ui 的草稿栈第一环。[链接](https://github.com/openclaw/openclaw/pull/143587)
- **#143774** `fix(update): reconcile orphaned update runs automatically`（P0，兼容性风险）— 直接修复 #139714。[链接](https://github.com/openclaw/openclaw/pull/143774)
- **#143893** `feat(crabbox): pin, delete, and roll back cloud worker snapshots`（XL）[链接](https://github.com/openclaw/openclaw/pull/143893)
- **#134959** `fix(memory): honor bounded embedding provider cooldowns`（XL，兼容性风险）— 修复 #108893。[链接](https://github.com/openclaw/openclaw/pull/134959)

**背后诉求分析**：社区热度集中于**“运行时不再悄悄降级”**——事件循环不再被阻塞、进程不再泄漏、内部上下文不再外泄、更新状态不再永久卡住。用户不再只关注新功能，而是要求既有链路在规模化与升级场景下可预测。

---

## 5. Bug 与稳定性

按严重程度排列（基于数据中的优先级标签）：

### P0 / 发布阻塞
| Issue | 状态 | 问题 | Fix PR |
|---|---|---|---|
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | OPEN | 2026.9.3 Doctor 在 canonical 行缺失时拒绝合法旧工作区设置与 attestation 导入（2026.7.1-2 → 2026.9.3 升级阻塞） | 未见 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | OPEN | 订阅鉴权的计费冷却期长于故障本身，需探测式恢复与手动重置 | 未见 |
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | CLOSED | Windows 网关 2026.9.1 后永不启动，`--task-supervisor` 静默退出 0 | 已收敛 |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | CLOSED | 托管 Molty 模型选择器不持久，API 收到点号 id | 已收敛 |

### P1
| Issue | 状态 | 问题 | 备注 |
|---|---|---|---|
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | CLOSED | 工具调用 JSON 参数畸形（回归） | `clawsweeper:no-new-fix-pr` |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | OPEN | 同步持久化阻塞事件循环 | 提及 #140231 已移除不必要的 overflow-recovery 全量操作 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OPEN | 子进程僵尸累积 | 未见 |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | OPEN | Windows 睡眠/唤醒后 UI/WebSocket 重连失败 30–60s+ | P1，`impact:crash-loop` |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | OPEN | SQLite 争用：3 个并发写句柄致约 33s 事件循环停滞（DEF-61） | 👍2，`impact:data-loss` |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | OPEN | Codex `sessions.compact` 获取第二个 app-server 触发活跃写者冲突 | 未见 |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | OPEN | Gateway 每次启动重占 reindex 锁，索引不可修复；19 GB 孤立临时 DB 累积 | 未见 |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) | OPEN | provider 读取门要求 `origin: bundled`，但特权频道已改为外部插件 → 读取被锁死 | `impact:security` |
| [#123799](https://github.com/openclaw/openclaw/issues/123799) | OPEN | 受影响生产部署需 Codex compact 404 的安全升级/回迁指引 | 引用已关闭的 #123706 |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | CLOSED | overflow retry 以 toolResult 成功结束但无最终投递 | 已收敛 |

### P2 及以下（代表性）
- [#43367](https://github.com/openclaw/openclaw/issues/43367) 多智能体编排不稳定：并发 `agents add` 覆盖、会话锁失败、分离子任务（`impact:data-loss`）。
- [#114612](https://github.com/openclaw/openclaw/issues/114612) memory-core SQLite 表无保留策略，`memory_index_chunks` 与 `memory_embedding_cache` 无限增长。
- [#95610](https://github.com/openclaw/openclaw/issues/95610) OpenAI 模型前缀缓存被每轮动态注入破坏（👍2）。
- [#139714](https://github.com/openclaw/openclaw/issues/139714) `openclaw status` 永久显示 “update in progress”——**已有对应 PR #143774**。
- [#53628](https://github.com/openclaw/openclaw/issues/53628) 安装 skill 时 `${XDG_CONFIG_HOME}` 未被解析（P2，已挂 6 个月）。
- [#92960](https://github.com/openclaw/openclaw/issues/92960) `sessions.describe` 丢弃请求的 agentId。
- [#101445](https://github.com/openclaw/openclaw/issues/101445) 内嵌 Ollama 报告 payloads=0 tools=0，尽管响应含有效 tool_calls。
- [#123792](https://github.com/openclaw/openclaw/issues/123792) CLI 后端助手轮次渲染两次。

**稳定性总评**：今日无新增 P0 崩溃报告，但**存量 P0/P1 事件循环与存储争用类问题**（#119720、#117262、#136311）均无明确 fix PR，是当前最大健康度风险点。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关 PR 信号 | 纳入下版可能性判断 |
|---|---|---|---|
| `/models test-fallback` 命令以验证回退链 | [#6599](https://github.com/openclaw/openclaw/issues/6599)（P3，自 2026-02 起） | 无 | 低——长期挂起且优先级 P3 |
| 智能体自触发上下文压缩（self-compact tool） | [#6757](https://github.com/openclaw/openclaw/issues/6757)（P2，👍2） | #127148 揭示 `sessions.compact` 尚存写者冲突 | 中——需求明确但依赖 compact 稳定性先解决 |
| Plugin Hooks 补充 trace 上下文（messageId/runId/parentSpanId） | [#50291](https://github.com/openclaw/openclaw/issues/50291)（P2） | 无 | 低-中——观测性诉求，无对应实现 |
| 诊断内存阈值接入配置 | [#87441](https://github.com/openclaw/openclaw/issues/87441)（P2，👍2） | 无 | 中——改动面小 |
| 多频道采用核心持久化 ingress drain | [#109657](https://github.com/openclaw/openclaw/issues/109657)（P1，maintainer） | **今日已关闭** | 高——已在推进中 |
| 运行时 `<system-reminder>` 脚手架提供退出开关（每轮约 686 tokens） | [#141747](https://github.com/openclaw/openclaw/issues/141747)（P2） | 与 #137927 上下文泄漏同源 | 中——成本与安全双重驱动 |
| 云 worker 快照的 pin/删除/回滚 | — | **PR #143893 已开**（XL） | 高——已有实现 |
| Gateway 请求绑定到选定 profile | — | **PR #143587 已开**（XL，安全边界） | 高——草稿栈首环 |

**信号**：路线图重心正从“新增能力”转向**可观测性、配置化阈值、以及更新/升级路径的健壮性**（PR #143774、#143917、#143921 均聚焦 `openclaw update` 的中间态与清理结果保全）。

---

## 7. 用户反馈摘要

**痛点**

1. **升级即故障**：从 2026.7.1-2 升到 2026.8.1 出现畸形工具调用（#135111）；升到 2026.9.1 后 Windows 网关完全无法启动（#137813）；升到 2026.9.3 时 Doctor 拒绝合法旧工作区（#142585）。多位用户描述为“回归（worked before, now fails）”。
2. **规模化退化**：多智能体并发编排不稳定（#43367，作者在 2026.3.8 上复现）；Gateway 启动后每次 reindex 锁不释放，累积 19 GB 临时 DB（#136311）。
3. **隐私与安全焦虑**：内部上下文块泄漏为 Telegram 可见文本（#137927）；provider 读取门因频道插件化而把读取锁死在当前会话（#115367）。
4. **成本敏感**：每轮约 686 tokens 的运行时脚手架注入且无退出选项（#141747）；OpenAI 前缀缓存因动态注入失效（#95610，👍2）。
5. **陈旧小问题长期未决**：skill 安装时 `${XDG_CONFIG_HOME}` 不解析（#53628，自 2026-03-24 起，👍1）。

**使用场景**

- 生产级部署使用 LTS 版本并需要**安全升级/回迁指引**（#123799，2026.5.12 生产环境）。
- 频繁睡眠的 Windows 笔记本用作常驻网关（#140010）。
- 通过 CLI + Control UI + Android 多端访问，使用 `claude-cli` 后端与 `anthropic/claude-opus-5`（#123792 明确指出 Telegram 不受影响）。
- Docker 安装 + ClawHub 安装 skill（#53628）。

**满意 / 不满意**

- **正面**：维护侧响应明显（#135111、#137927、#137813、#101763 等高热 Issue 当日已关闭），并有大体量 PR 在审（#143886、#143910 标记为 “ready for maintainer look”）。
- **负面**：多条 P1 长期开放且带 `clawsweeper:no-new-fix-pr` 标签（#97616、#119720、#117262、#136311、#115367），用户反复补充证据但缺少修复动作，形成“讨论充分、推进不足”的印象。

---

## 8. 待处理积压

### 长期开放、需维护者决策的高价值 Issue

| Issue | 创建日期 | 标签要点 |
|---|---|---|
| [#6599](https://github.com/openclaw/openclaw/issues/6599) `/models test-fallback` | 2026-02-01 | P3，`needs-product-decision`，已逾 7 个月 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) 智能体自触发压缩 | 2026-02-02 | P2，`needs-product-decision` |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) 多智能体编排不稳定 | 2026-03-11 | P2，`impact:data-loss` |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) Hooks 缺 trace 上下文 | 2026-03-19 | 带 `stale` 标签 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) `${XDG_CONFIG_HOME}` 未解析 | 2026-03-24 | P2，已有 linked-pr |
| [#87441](https://github.com/openclaw/openclaw/issues/87441) 内存阈值接入配置 | 2026-05-27 | P2，👍2 |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) OpenAI 前缀缓存churn | 2026-06-21 | P2，👍2 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸子进程 | 2026-06-29 | P1，今日仍在更新 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) SQLite 无限增长 | 2026-07-27 | P2，`dedupe:parent` |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) 读取门锁死 | 2026-07-28 | P1，`impact:security` |

### 需维护者关注的开放 PR

- [#134959](https://github.com/openclaw/openclaw/pull/134959)（创建于 2026-09-01，XL，兼容性风险，`ready for maintainer look`）——修复内存嵌入 provider 冷却期间放弃索引的问题，跨 memory-core/openai/google 扩展，审阅成本高但价值明确。
- [#111964](https://github.com/openclaw/openclaw/pull/111964)（创建于 2026-07-20）——Gemini 新 API key 的 `web_search` 模型未找到问题，状态为 `needs proof`，已滞压约 7 周。
- [#123051](https://github.com/openclaw/openclaw/pull/123051)（创建于 2026-08-13）——Control UI 加载 ClawHub skill 图标的浏览器策略问题，已 `ready for maintainer look` 近一个月。
- [#142693](https://github.com/openclaw/openclaw/pull/142693)（创建于 2026-09-08）——记忆召回在可选触发器查找超时后继续，状态 `needs proof`。

**提醒**：多位用户在自己的 Issue 中已附上源码级根因与复现路径（如 #117262 指出 3 个并发写句柄、#119720 定位到同步持久化），`needs-product-decision` 与 `needs-maintainer-review` 是当前积压增长的主要标签来源，建议按标签批量清理以释放社区信心。

---

*本日报仅基于所提供的 OpenClaw GitHub 数据生成；未提供的版本直链、破坏性变更细节与部分截断文本未作推断。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析报告

> 数据区间：2026-09-10 单日快照 · 数据来源：各项目 GitHub 公开动态（用户所供摘要）
> 说明：本报告仅基于所供材料，不作外部补充；未提供的数据以"未提供/无活动"标注。

---

## 1. 生态全景

当前生态呈现**"一超多强、长尾分化"**格局：OpenClaw 以单日 500 Issues + 500 PR 的吞吐量远超其余项目（次高为 Hermes Agent 与 ZeroClaw 的 50 条量级），并已发布 LTS 版本，进入**规模化运行与边界安全加固**阶段；其余项目多数仍处在"升级兼容排障 + 稳定性收口"的中期。全生态的共同主线鲜明——**从"新增能力"转向"运行时可预测性"**：事件循环阻塞、静默失败、跨会话串扰、上下文/凭据泄露、依赖与配额治理成为跨项目高频议题。与此同时，**外部生态合作与迁移需求开始浮现**（MemCode 提出记忆后端集成、PawPort 支持从 Codex/Qoder 迁入、MCP/AGY/OpenCode 等外部协议适配），说明该品类已具备被第三方基础设施厂商纳入视野的生态位。整体判断：生态已越过"功能验证期"，正进入**稳定性、成本与互操作性**三重考验期。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 · 关闭） | PR（待合并 · 合并/关闭） | Release | 今日特征 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 311 · 189 | 254 · 246 | **v2026.6.35（LTS 收官）** | 极高吞吐；热点集中于 P0/P1 运行时正确性 | 强活跃；存量 P0/P1 无 fix PR 是主要风险 |
| **Hermes Agent** | 46 · 4 | 36 · 14 | 无 | 高报障 + 快速修复；36 条待合并积压 | 高活跃；合并吞吐落后于提交 |
| **ZeroClaw** | 20 · 1 | 48 · 2 | 无 | 架构 RFC 密集辩论 + S1/S2 修复并行 | 活跃；48 条待合并 + 高危安全 PR 积压 |
| **CoPaw** | 15 · 14 | 18 · 13 | 无 | 会话/渠道稳定性修复 + 测试扩张（+2475 用例） | 健康；14/29 关闭，3 项无 fix PR |
| **NanoBot** | 4 · 2 | 10 · 12 | 无 | WebUI 打磨 + 渠道路由修复 | 良好；WebUI 区频繁 conflict |
| **NanoClaw** | 0 | 4 · 2 | 无 | 修复驱动的稳定化；Issues 通道零活动 | 中等偏低；评审带宽见瓶颈 |
| **Moltis** | 0 · 2（存量关闭） | 4 · 3 | 无 | 半年老 Issue 集中闭环 | 中等偏健康；闭环周期约 6 个月 |
| **IronClaw** | 1 · 0 | 4 · 0 | 无 | 修复积累期；MCP 多租户正确性 | 中等偏低；零合并，评审为瓶颈 |
| **LobsterAI** | 0 | 0 · 9 | 无 | 上游 v2026.8.1 升级集中排障 + 降本 | 闭合率高；社区参与为零，贡献者集中 |
| **PicoClaw** | 0（2 条 stale 关闭） | 4 · 1 | 无 | stale 清理为主，非新增开发 | 偏低；审阅吞吐不足 |
| **ZeptoClaw** | 1 · 3 | 1 · 18 | 无 | 维护日；3 条安全 Issue 关闭 + 依赖批量升级 | 中等偏高；以债务清理计 |
| **NullClaw** | — | — | — | **过去 24 小时无活动** | 静默 |
| **TinyClaw** | — | — | — | **过去 24 小时无活动** | 静默 |

**读数要点**：① OpenClaw 单日 Issues 更新量约为其余全部项目总和的 3 倍以上；② 至少 5 个项目（NanoClaw、IronClaw、LobsterAI、PicoClaw、ZeptoClaw）今日**零合并或接近零合并**，评审带宽而非开发产能构成生态级瓶颈；③ 仅 OpenClaw 有版本发布，其余项目均处"无 Release 的连续修复期"。

---

## 3. OpenClaw 在生态中的定位

**规模优势（据所供数据）**
- **吞吐量断层第一**：单日 Issues 更新 500、PR 更新 500，为 Hermes Agent / ZeroClaw（均 50 量级）的 **10 倍**，为多数项目（个位数至十余条）的**数十倍**。
- **唯一具备 LTS 治理的项目**：今日发布 v2026.6.35 作为"2026 年 6 月 Extended Stable (LTS) 最终版"，主题为 provider/channel 边界安全加固，显示其已有版本维护线概念，而非持续滚动主线。
- **Bot 化审查流水线**：出现 `clawsweeper:no-new-fix-pr`、`🐞 diamond lobster`、`ready for maintainer look` 等自动化标签，以及 `clawsweeper` 命名的审查机制，反映工程化程度高于同类。

**技术路线差异**
- 强调**运行时确定性**：事件循环、SQLite 写句柄（#117262 指出 3 个并发写句柄致约 33s 停滞）、子进程生命周期（#97616）、reindex 锁（#136311）等——已是"数据库级/进程级"的工程问题，而非功能缺失。
- 强调**边界安全**：LTS 版本以"限制不可信响应体、拒绝超限输入"为核心主题，与后续 #137927（内部上下文块泄漏到 Telegram）、#115367（provider 读取门锁死）形成同一条安全主线。
- **插件/channel 适配器分层**：channel 已被"插件化"（#115367 提到特权频道改为外部插件），带来新的权限一致性代价。

**社区规模与治理信号**
- 社区参与深度高：Issue #135111 达 26 评论、PR #143587 / #143893 为 XL 级草稿栈，且首次出现跨仓库协作痕迹（crabbox / cloud worker）。
- 但治理压力同步显现：多条 P1 长期开放且带 `clawsweeper:no-new-fix-pr`（#97616、#119720、#117262、#136311、#115367），形成"讨论充分、推进不足"的印象——**这是其相对于小项目"高响应速度"的主要比较劣势**。

---

## 4. 共同关注的技术方向

| 共同方向 | 涉及项目 | 具体诉求（据所供数据） |
|---|---|---|
| **① 会话/上下文状态可靠性** | Hermes、CoPaw、NanoBot、OpenClaw、ZeroClaw | Hermes #106459 超限会话永久不可压缩、#94001 状态栏跨会话污染、#104882 会话模型选择丢失；CoPaw #7579 回复从上下文丢失、#7011/#7231 跨会话串扰；NanoBot #5647 重启后标题丢失；OpenClaw #119720 同步持久化阻塞 |
| **② 静默失败 / 静默降级** | ZeroClaw、NanoBot、CoPaw、PicoClaw、IronClaw | ZeroClaw #10689 Telegram 语音被静默跳过、#10741 ZeroCode 静默暂停队列、#10731 `service logs` 无输出；NanoBot #5429 后台任务异常被静默吞掉；CoPaw #7534 飞书 consumer 卡死静默；PicoClaw #3269 MCP 失败致 agent loop 挂起；IronClaw #8091 IME 误发送 |
| **③ 配置/校验与实际行为不一致** | Hermes、IronClaw、NanoClaw、ZeroClaw、OpenClaw | Hermes #107238 显示"思考：关"但仍发 `thinking: enabled`（浪费 68% tokens）、#107221 向不支持 reasoning 的模型发 reasoning 参数；IronClaw #8085 操作员安装的扩展包"可构建不可用"；NanoClaw #3757 环境变量凭空"发明"渠道、#3753 门户记录与实际落盘不符；ZeroClaw #9440 `estop` 写入状态却**无任何运行时读取**（紧急停止形同虚设） |
| **④ 多租户 / 隔离与归因** | IronClaw、OpenClaw、CoPaw | IronClaw #8090 hosted-MCP 目录按 extension id 单槽位致用户互相覆盖、#8084 出站调用缺调用方标识（无法区分重试→重复计费）；OpenClaw #143587 请求绑定选定 profile；CoPaw #7011 多 UI 会话串扰 |
| **⑤ 外部依赖与协议时效适配** | NanoBot、IronClaw、Moltis、LobsterAI、PicoClaw、ZeroClaw | NanoBot #5661 需在 2026-09-06 后发 `x-opencode-session` 头；Moltis PR #1258 为 `agy` CLI 增一等公民流式；IronClaw MCP SEP-414 调用方归因；LobsterAI 因 OpenClaw v2026.8.1 升级集中排障；ZeroClaw #10346 MCP server 每次启动被连接**三次** |
| **⑥ 成本治理与默认行为回收** | LobsterAI、Hermes、OpenClaw | LobsterAI #2641 自动技能评审改 opt-in、#2643 压缩前记忆保存默认关闭（均以 token 成本为由）；Hermes #107238 量化 68% thinking tokens 浪费；OpenClaw #141747 每轮约 686 tokens 脚手架注入无退出开关、#95610 OpenAI 前缀缓存被动态注入破坏 |
| **⑦ 凭据与安全卫生** | ZeptoClaw、OpenClaw、CoPaw | ZeptoClaw #656 明文 token 打印到 stdout、#655 非恒定时间比较、#653 token 经 `?auth=` 查询串传递；OpenClaw #137927 内部上下文外泄；CoPaw #7658 备份恢复静默降级为 world-readable |

**归纳**：前四项（会话、静默失败、配置一致性、隔离归因）共同指向同一诉求——**"系统不该在用户不知情的情况下偏离承诺"**；后三项（协议适配、成本、凭据）则反映该品类正被推入**真实生产与多用户环境**。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构/路线关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用本地优先 agent 运行时 + 多 channel（含 Telegram/WhatsApp/Discord/Slack/Signal/iMessage）+ 插件生态 + LTS | 生产级部署者、平台团队 | 分层 gateway/agents/channel 适配器；SQLite 持久化 + 事件循环；唯一具备 LTS 与 bot 化审查流水线 |
| **Hermes Agent** | 面向 Slack 等平台的 cron 定时简报、群聊房间、桌面端（Hermes Desktop）、多 provider（DeepSeek/Ollama/vLLM/llama.cpp/Codex） | 团队协作与桌面重度用户 | 有 `hermes-seaeye[bot]` 自动格式化与 squash 合并；Skills 安装与 FTS/trigram 索引；插件 toolset 体系 |
| **ZeroClaw** | 安全/沙箱优先（Bubblewrap、Landlock、Seatbelt）、WASM 插件运行时、A2A 协议、ZeroCode 代码面板 | 安全敏感型开发者、Rust 生态 | RFC 驱动设计（投票/快照/讨论窗口机制）；Rust + nextest；wire protocol 一等公民化 |
| **CoPaw** | 中文多渠道（飞书/企业微信/Telegram）、记忆后端（ReMe/ReMeLight）、桌面 + Web Console、PawPort 迁移 | 中文市场、多端部署用户 | 记忆后端插件化与回退；E2E + vitest 双轨测试；企业 IM 流式节流差异明显 |
| **NanoBot** | WebUI 体验、Telegram 命令路由、MCP OAuth 令牌自动刷新 | 自托管个人用户 | 网关重启后 envelope 标记持久化；跨渠道命令白名单路由 |
| **NanoClaw** | 安装向导（portal/harden/Echo 镜像）与 agent-runner 运行时 | 新装用户 | 跨仓库契约（nanoco-gw / nanoco#534）三件套协作模式 |
| **Moltis** | Docker 部署、exec 工具、推理档位（`ReasoningEffort`）、外部 agent 流式（agy） | 容器化部署者 | Rust（cargo workspace）；多 provider 推理档位统一抽象 + clamp 策略 |
| **IronClaw** | hosted-MCP 多租户、扩展包、Telegram 命令菜单、WebChat v2 | 多用户部署方 | SEP-414 调用方归因（opt-in）；manifest 一致性校验 |
| **LobsterAI** | OpenClaw 下游集成 + UI/成本治理（网易有道） | 中文桌面用户 | 作为 OpenClaw 的**下游消费者**，承担"兼容性垫片"角色（本地执行上游不支持的筛选参数） |
| **PicoClaw** | 低资源硬件（RISC-V/ARM/MIPS、树莓派、旧安卓手机，10–20 MB 内存） | 边缘设备/嵌入式爱好者 | 面向 household edge compute；QQ/IRC/DeltaChat 通道 |
| **ZeptoClaw** | CLI `panel start`、API/WebSocket 认证、供应链审计（rustsec） | 安全审计型用户 | Rust + Docker + Astro 文档站；依赖批量升级节奏化 |

**架构层关键分野**：① **上游 vs 下游**——LobsterAI 明确消费 OpenClaw 并为其打兼容垫片；② **资源定位**——PicoClaw 面向 10–20 MB 内存，与 OpenClaw/ZeroClaw 的生产级定位正交；③ **设计流程**——ZeroClaw 是唯一采用正式 RFC/投票流程的项目，其余多为 Issue/PR 直驱。

---

## 6. 社区热度与成熟度

**第一层 · 高吞吐生产化（快速迭代 + 治理压力并存）**
- **OpenClaw**：500/500 日更新，LTS 化管理，已进入"数据库争用、事件循环阻塞、跨进程锁"级别的工程问题——**成熟度最高，但存量 P0/P1 无 fix PR 是最大健康度敞口**。
- **Hermes Agent**：46/36，当日新报 Bug 当日出 PR（#107149→#107216、#107238→#107260/#107251），响应速度优秀；但 36 条待合并显示**合并吞吐落后**。

**第二层 · 架构收敛期（设计密集型）**
- **ZeroClaw**：RFC 讨论热度最高（#9487 37 评论、#9488 30 评论、#6996 29 评论），Revision 5/10 反复重构；48 条待合并 + `estop` 失效等高风险未决项，**设计领先于落地**。

**第三层 · 质量巩固（修复驱动，无新功能扩张）**
- **CoPaw**（+2475 测试用例，14/29 Issues 关闭）、**NanoBot**（WebUI + 渠道收口）、**NanoClaw**（4 条 `kind/bug`+`PR: Fix`，全部无评论，Issue 通道零活动）、**IronClaw**（4 条 PR 全部 OPEN、零合并）、**LobsterAI**（7 项缺陷当日提当日闭，但 Issues/评论/👍 全为 0）、**Moltis**（半年老 Issue 闭环）、**ZeptoClaw**（18 条依赖 + 3 条安全 Issue 关闭）。

**第四层 · 低活跃 / 静默**
- **PicoClaw**：今日全部互动来自存量条目，2 条 Issue 以 `stale` 关闭且 **#3269（MCP 失败致挂起）无 fix PR**——存在"被沉默的高危缺陷"风险。
- **NullClaw、TinyClaw**：过去 24 小时**无活动**。

**⚠️ 生态级共性风险**：**贡献者集中度**。LobsterAI 今日 9 条合并全部来自单一贡献者；ZeptoClaw 的 Issue/PR 由核心维护者"自报自修"；NanoClaw / IronClaw 评论数全为 0。该类项目虽闭合率高，但**外部社区参与度接近于零**，抗风险能力弱。

---

## 7. 值得关注的趋势信号

**信号一：行业评价标准正从"能做什么"转向"失败时是否可预测"**
跨 8 个以上项目，"静默失败/静默降级"反复出现（ZeroClaw 三条、NanoBot、CoPaw、PicoClaw、IronClaw）。ZeroClaw #9440 最具警示性——`estop` 打印 "Estop engaged" 并显示 `kill_all: active`，**却无任何运行时路径读取它**。
> **对开发者的参考**：安全/治理类开关必须有"被消费"的编译期或测试期证明；否则等同虚假承诺。建议为所有 fail-safe 路径建立"读到即生效"的集成测试。

**信号二：成本进入功能决策的第一梯队**
LobsterAI 因 token 成本主动将 OpenClaw 上游默认开启的**自动技能评审改为 opt-in**、**压缩前记忆保存默认关闭**；Hermes 用户量化"68% thinking tokens 浪费"；OpenClaw #141747 指出每轮约 **686 tokens** 脚手架注入且无退出开关。
> **参考**：默认开启的高消耗行为正成为用户流失点。"默认关闭 + 显式开启 + 成本标注"正在成为新惯例。

**信号三：多租户正确性成为 MCP 时代的必修课**
IronClaw #8090（工具目录按 extension id 单槽位→用户互相覆盖）、#8084（缺调用方标识→重试无法区分，可能导致重复计费）；ZeroClaw #10346（MCP server 每次启动被连接三次）。
> **参考**：MCP 接入必须从"单用户可用"升级为"多会话可归因、可去重、可缓存"。

**信号四：上游协议变更的时效压力传导至下游**
NanoBot 因 OpenCode 要求 **2026-09-06 后**发 `x-opencode-session` 头而被动适配；LobsterAI 在 OpenClaw v2026.8.1 升级后遭遇**两条引擎完全无法启动**的回归（空值/NUL attestation、重复 session header）。
> **参考**：作为下游消费者，升级回归成本高。建议对上游大版本升级建立"启动阻断类"回归清单，并将兼容垫片下沉到客户端本地执行（LobsterAI #2646 已采用此模式）。

**信号五：自动化告警与 stale 清理正在制造"僵尸负债"**
Hermes #66616（Skills index watchdog）**189 条评论、近 8 周未消**；PicoClaw #3269 以 `stale` 关闭但无 fix PR；LobsterAI 三条 dependabot PR 挂 `[stale]` **31 天**；ZeptoClaw 多条 dependabot PR 跨度约 **3 个月**；OpenClaw #6599 逾 7 个月带 `needs-product-decision`。
> **参考**："stale 关闭"不等于"已解决"，反而掩盖真实待决项。建议区分"自动超期关闭"与"已修复关闭"，并对长期告警给出**结论性回复**（修复 / 调阈值 / 关闭并注明原因）。

**信号六：生态互操作性从"接入外部工具"走向"双向迁移与厂商合作"**
- **迁入**：CoPaw PR #6960（PawPort）支持从 Codex、Qoder 等第三方 agent 导入指令/设置/技能/插件/项目。
- **厂商主动集成**：MemCode 创始人向 NanoBot 提出跨会话持久记忆后端（#5721），属外部基础设施厂商的主动靠拢信号。
- **一等公民化外部 CLI**：Moltis PR #1258 为官方 `agy` CLI 增加流式传输，复用其 OAuth 会话、无需 API key。
> **参考**：该品类已具备被第三方基础设施纳入的生态位；"迁移入口"与"记忆后端标准"可能成为下一阶段的竞争焦点。

**信号七：低资源与边缘计算是被主流忽略的差异化赛道**
PicoClaw #3345 明确提出面向 RISC-V/ARM/MIPS、树莓派、旧安卓手机、**10–20 MB 可用内存**的轻量 worker 模式；ZeroClaw #10360 提出由用户闲置 PC/笔记本/手机组成"opt-in household edge mesh with pull workers and signed receipts"。
> **参考**：两个独立项目在同一时期提出边缘/家庭算力网格，值得作为中长期方向观察。

---

*本报告基于 2026-09-10 各项目 GitHub 动态摘要生成；未提供的版本直链、破坏性变更细节与部分截断文本未作推断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-10）

## 1. 今日速览

今日 NanoBot 项目保持高活跃度：24 小时内共处理 22 条 PR（合并/关闭 12 条、待合并 10 条）和 6 条 Issue（关闭 2 条、活跃 4 条），无新版本发布。合并/关闭的 PR 集中在 WebUI 体验打磨、Telegram 命令路由修复、MCP OAuth 令牌自动刷新以及执行输出 UTF-8 解码等方向，均属稳定性与易用性改进。Issue 侧暴露出两个值得关注的信号：后台任务异常被静默吞掉（#5429）、Discord 在关闭进度提示时仍推送压缩通知（#5719），两者均已有对应的 fix PR 提交。整体看项目健康度良好，修复响应速度快，但 WebUI 相关 PR 频繁出现 `conflict` 标记，提示该区域代码迭代密集、合并成本上升。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有 12 条 PR 合并/关闭，推进方向如下：

- **WebUI 体验打磨（多笔）**：#5725 对齐聊天元素并修复 prompt rail 分组；#5722 优化侧边栏层级与选中反馈；#5715 修复网关重启后 envelope 缺失 `webui` 标记时会话标题丢失的问题（对应 Issue #5647）；#5704 扩展并整理设置项并引入自动保存；#5710 重组项目导航与侧边栏结构。WebUI 在标题持久化、导航层级、设置管理三方面均有实质推进。
- **渠道与协议修复**：#5711 适配 Telegram 内命令拼写（连字符 vs 下划线）；#5707 将 `/compact` 与 `/evaluator-prompt` 接入命令路由，此前被 Telegram 渠道静默丢弃。
- **基础设施与可靠性**：#5573 实现 MCP 过期 OAuth 令牌自动刷新，持久化令牌过期时间与授权服务器元数据，使刷新可跨网关重启存活；#5708 修复长时 exec 会话按 4096 字节独立解码导致跨块 UTF-8 字符损坏的问题；#5469 让 TUI 页脚仅展示最近一次 provider 上报的请求上下文用量。

整体评估：项目在稳定性和跨渠道一致性上稳步前进，未出现破坏性变更；主要精力集中于 WebUI 与渠道层缺陷收口。

## 4. 社区热点

今日评论/反应数据整体偏冷，评论数最多的条目有限：

- **Issue #5647 [CLOSED]**（评论 2，WebUI 会话标题生成）— 关联 PR #5528 的 `target_session_key` 投影逻辑，是标题持久化问题的上游讨论。链接：HKUDS/nanobot Issue #5647
- **Issue #5726 [OPEN]**（评论 1，无头服务器初始密码问题）— 用户在无头服务器安装后无法获知默认密码。链接：HKUDS/nanobot Issue #5726
- **Issue #5429 [OPEN]**（评论 1，后台任务异常未被回收）— 长期存在的可靠性议题，今日被重新激活并有 PR #5724 提交。链接：HKUDS/nanobot Issue #5429
- **Issue #5661 [CLOSED]**（👍 1，OpenCode 会话亲和性请求头）— 唯一获得正向反应的条目，反映第三方 provider 兼容性的时效性需求。链接：HKUDS/nanobot Issue #5661

诉求分析：热点集中在三个方向——第三方 provider 协议适配的时效压力（OpenCode）、无头/自托管部署的可用性门槛（#5726）、以及长生命周期进程的可靠性（#5429）。

## 5. Bug 与稳定性

按严重程度排列：

1. **[高] 后台任务异常被静默吞掉 — Issue #5429 [OPEN]**
   `AgentLoop.schedule_background()` 用裸 `set.discard` 回调移除已完成任务且从不取回结果，导致失败的后台任务（回合后整合、会话归档、WebUI 标题生成等）异常丢失。影响可靠性可观且长期存在。
   → 已有 fix PR **#5724 [OPEN]**（检索异常并记录意外失败）。
   链接：HKUDS/nanobot Issue #5429 / HKUDS/nanobot PR #5724

2. **[中] Discord 压缩通知无视 `sendProgress: false` — Issue #5719 [OPEN]**
   在 `channels.sendProgress: false` 时，空闲自动压缩仍发送两条独立消息（`Compressing context…`、`Context compacted.`）。原因是出站分发循环只对 `ProgressEvent` 做了门控。
   → 已有 fix PR **#5720 [OPEN]**（在关闭进度提示的渠道上只投递一次压缩结果）。
   链接：HKUDS/nanobot Issue #5719 / HKUDS/nanobot PR #5720

3. **[中] 无头服务器初始密码不可知 — Issue #5726 [OPEN]**
   用户默认启动仅提供无 JS 支持的链接，切换浏览器后无法获知密码，属部署可用性阻塞。
   → 暂无 fix PR。

4. **[已修复] 长时 exec 输出 UTF-8 损坏 — PR #5708 [CLOSED]**
   跨读取边界的 UTF-8 字符被替换为无效字符标记，已通过增量解码器修复。

5. **[已修复] WebUI 重启后会话标题丢失 — Issue #5647 [CLOSED] / PR #5715 [CLOSED]**
   envelope 缺失瞬时 `webui` 标记时标题不再生成，已改为尊重持久化的会话标记。

6. **[已修复] Telegram 丢弃 `/compact`、`/evaluator-prompt` — PR #5707 [CLOSED]**
   斜杠命令白名单正则未包含这两个命令，已接入命令路由。

## 6. 功能请求与路线图信号

- **跨会话持久记忆（Issue #5721 [OPEN]）**：由 MemCode 创始人提出，建议接入可互操作的托管或自托管记忆后端，支持记忆在用户/会话间共享。属外部厂商主动提案，短期内落地取决于维护者对第三方记忆后端的接受度，今日无相关 PR，纳入下一版本可能性偏低。
- **WebUI 设置与渠道配置流增强（PR #5356 [OPEN]、#5704 [CLOSED]）**：#5356 将渠道字段按 account/credentials/connection 等分组并暴露契约定义的备选需求，仍处 open 且有 `conflict` 标记；#5704 已合并，设置项自动保存能力已落地。该方向持续演进，是较明确的下版本重点。
- **OpenCode 会话亲和性（Issue #5661 [CLOSED]）**：因 OpenCode 官方要求在 2026-09-06 后发送 `x-opencode-session` 头，属被动兼容需求，已关闭。

## 7. 用户反馈摘要

- **部署体验痛点**：无头服务器用户（#5726）反映默认启动链接依赖 JS，切换浏览器后无法获知初始密码，暴露自托管首次启动引导缺失。
- **渠道行为不一致**：Discord 用户（#5719）指出关闭进度提示后仍收到压缩通知，说明按渠道的事件门控存在遗漏；Telegram 用户侧则集中出现命令拼写与路由不一致（#5711、#5707）。
- **第三方 provider 兼容压力**：OpenCode 用户（#5661）反馈缺少 `x-opencode-session` 头会阻碍优化，反映上游协议变更对本地适配的时效要求。
- **生态合作意向**：MemCode 创始人（#5721）主动提出记忆后端集成，属正面信号，表明项目已具备吸引外部基础设施厂商的生态位。

## 8. 待处理积压

- **PR #5356 [OPEN]（创建于 2026-08-12，已挂起约 29 天）** — `feat(webui): improve setup flows across chat channels`，带 `conflict` 与 `priority: p2` 标记，长期未合并且存在冲突，需维护者介入 rebase 或明确取舍。链接：HKUDS/nanobot PR #5356
- **PR #5641 [OPEN]（创建于 2026-09-03）** — `fix(webui): iOS PWA tap and status-bar fixes`，涉及 iOS 首次点击被 `:hover` 吞掉的移动端体验问题，已挂起约 7 天。链接：HKUDS/nanobot PR #5641
- **Issue #5429 [OPEN]（创建于 2026-08-18，已存在约 23 天）** — 后台任务异常丢失，虽已有 PR #5724 对应，但 Issue 本身尚未关闭，建议跟进确认修复覆盖完整。链接：HKUDS/nanobot Issue #5429
- **Issue #5721 [OPEN]** — 跨会话持久记忆提案尚无维护者回应，建议明确表态以管理外部合作方预期。链接：HKUDS/nanobot Issue #5721

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-10

## 1. 今日速览

项目今日保持高强度活跃：过去 24 小时共有 50 条 Issues 更新（新开/活跃 46，关闭 4）与 50 条 PR 更新（待合并 36，已合并/关闭 14），无新版本发布。Issue 侧以 P1/P2 级 Bug 为主，集中在会话状态、压缩、cron 投递、桌面端交互等核心链路；PR 侧则是围绕这些 Bug 的密集修复，多个当日新报 Bug（如 #107149、#107238）当天即出现对应修复 PR。整体看，项目处于"高吞吐报障 + 快速响应修复"的状态，但待合并 PR 积压达 36 条，合并吞吐落后于提交速度，值得关注。长期挂起的自动化告警 Issue #66616（Skills index 陈旧）评论数已累积至 189 条，仍未关闭。

---

## 2. 版本发布

今日无新版本发布（Releases：0 个）。

---

## 3. 项目进展

今日已合并/关闭的 PR 共 14 条，其中可识别的重要项：

- **PR #101819 [CLOSED] — fix(cron): make user-written bare-platform home targets continuable**（作者 victor-kyriazakos）
  修复了由脚本预置、使用 `deliver: "slack"`（无捕获来源）的 managed cron 任务：brief 能投递到 Slack home channel，但 transcript 镜像与 `in_channel` 会话种子从未触发，导致 agent 在后续对话中缺少上下文。该修复随后由 **PR #107257 [OPEN]** 以 salvage 方式重新提交，说明原 PR 虽关闭但工作被延续。
  https://github.com/NousResearch/hermes-agent/pull/101819
  https://github.com/NousResearch/hermes-agent/pull/107257

- **PR #101390 [CLOSED] — fix(tools): treat ttl_ms=0 as no TTL hint in MCP schema cache (#101007)**（作者 RelaxJonh）
  修复 MCP 服务器未提供 TTL 提示时返回 `ttlMs: 0` 被 schema cache 当作"立即过期"的问题，避免 lazy 加载路径反复失效。
  https://github.com/NousResearch/hermes-agent/pull/101390

- **Issue #106459 [CLOSED] — Pain cluster: over-limit sessions become permanently uncompressible**（作者 teknium1，来自 from-pain-miner）
  P1 级"痛苦集群"问题关闭：超出上下文上限的会话变为永久不可压缩（`/compress` 变成 no-op，无恢复路径），关闭意味着该链路已获处理。
  https://github.com/NousResearch/hermes-agent/issues/106459

- **Issue #107206 [CLOSED] — DeepSeek `deepseek-flash` 被静默改写为已退役的 `deepseek-v4-flash`**
  供应商模型 ID 规范化缺陷，当日报告、当日关闭。
  https://github.com/NousResearch/hermes-agent/issues/107206

- **Issue #51263 [CLOSED] — email_platform.adapter STARTTLS 在 OpenSSL 3.5+ 报 WRONG_VERSION_NUMBER**
  自 2026-06-23 挂起约 2.5 个月后关闭。
  https://github.com/NousResearch/hermes-agent/issues/51263

- **PR #107255 [CLOSED] — fmt(js): `npm run fix` 自动格式化**（由 hermes-seaeye[bot] 生成，CI 通过后 squash 自动合并）
  https://github.com/NousResearch/hermes-agent/pull/107255

**整体推进评估**：今日关闭项以"精准修复 + 清理积压"为主，未见大型功能落地；cron 投递与会话压缩两条 P1 链路上的问题获得处理或延续性修复，是当日最具实际价值的方向。

---

## 4. 社区热点

- **Issue #66616（189 条评论，OPEN，P3）— [skills-index-watchdog] Skills index is stale or degraded**
  自动化新鲜度探针报告索引已陈旧 29.8 小时（上限 26 小时），状态 `degraded`。由机器人账号 nousbot-eng 于 2026-07-18 创建，至今持续更新、评论数达 189，是今日绝对热度最高的条目。高评论量反映的是**自动化告警长期未被消除**，而非人工讨论密集——这类"僵尸告警"本身即是维护者需要处理的负债。
  https://github.com/NousResearch/hermes-agent/issues/66616

- **Issue #100401（12 条评论，OPEN，P1）— cron fire-claim 心跳自锁，杀死所有运行超 60s 的任务**
  cron 任务在投递尚未完成时遭遇 fire-claim 心跳（`_RUN_CLAIM_HEARTBEAT_SECONDS` = 60s），30 秒后被杀死并记录为 `Interrupted by shutdown before terminal completion`。这是当日评论数最高的人工讨论 Issue，指向任务调度与投递生命周期之间的死锁，影响面大。
  https://github.com/NousResearch/hermes-agent/issues/100401

- **Issue #71650（9 条评论，OPEN，P2）— Toolset 校验先于插件加载运行**
  `validate_platform_toolsets()` 在 `AgentCLI.__init__()`（cli.py:4108）阶段执行，早于插件注册其 toolsets，导致插件注册的 toolset（如 beads 插件的 `beads`）总是触发误报警告。属于典型的初始化顺序缺陷。
  https://github.com/NousResearch/hermes-agent/issues/71650

- **Issue #19320（7 条评论，👍 5，OPEN，P3）— 请求将 Codex / OpenAI `web.run` 作为搜索 provider**
  当前 `web_search` 仅能依赖 firecrawl 等第三方；OpenAI API 与 Codex 订阅用户可用的原生 `web.run` 工具质量更优。5 个 👍 说明诉求有一定共识基础，是今日正面反应最多的功能请求。
  https://github.com/NousResearch/hermes-agent/issues/19320

**背后诉求分析**：热点呈现两条主线——一是**自动化监控与告警治理**（#66616 长期不消），二是**核心运行时可靠性**（cron 生命周期 #100401、插件加载时序 #71650）。用户对第三方依赖的替代方案（#19320）也有明确兴趣。

---

## 5. Bug 与稳定性

按严重程度排列：

**P1（严重）**
- **#100401 cron fire-claim 心跳死锁**，杀死所有运行 >60s 的任务，记录为 "Interrupted by shutdown"。**暂无对应 fix PR**（今日 PR 列表中未见直接关联项）。
  https://github.com/NousResearch/hermes-agent/issues/100401
- **#78486 Hermes Desktop 聊天视图在助手响应中跳转到历史消息块**，用户丢失当前生成内容视图。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/78486
- **#88667 `key_cmd` 提供的 callable api_key 导致自定义 provider 解析崩溃（AttributeError）**，标签涉及安全边界与兼容性风险。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/88667
- **#106459 超限会话永久不可压缩** — **已关闭**（已处理）。

**P2（中等，多数已有 fix PR）**
- **#107149 被杀死的 git 子进程遗留 `<index>.lock`，导致 checkpoint 永久失败** → **已有 PR #107216** 当日提交修复。
  https://github.com/NousResearch/hermes-agent/issues/107149
  https://github.com/NousResearch/hermes-agent/pull/107216
- **#107156 陈旧的 session cwd 记录使 gateway terminal 崩溃（exit 126），需重启进程**。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/107156
- **#107238 桌面端显示「思考：关」，但请求仍发送 `thinking: enabled`**（浪费 68% thinking tokens，涉及 deepseek 插件）→ **已有 3 个 fix PR：PR #107260、PR #107251**（另有 #107250 修正 `deepseek-v4.1-flash` 的 1M 窗口为误报 128K）。
  https://github.com/NousResearch/hermes-agent/issues/107238
  https://github.com/NousResearch/hermes-agent/pull/107260
  https://github.com/NousResearch/hermes-agent/pull/107251
- **#104882 Bot Chat 切换 Bot 后丢弃已保存的会话模型选择**。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/104882
- **#105176 steer 消息被回显到另一个聊天窗口** → **已有 PR #107253** 修复（拒绝向无活跃 turn 的会话发 steer）。
  https://github.com/NousResearch/hermes-agent/issues/105176
  https://github.com/NousResearch/hermes-agent/pull/107253
- **#105247 群聊 harvest 窗口（5 分钟）< 硬性 turn 上限（20 分钟），晚到回复丢失**。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/105247
- **#107196 macOS 标题栏面板标签被裁剪、折叠箭头误隐侧边栏**（回归自 `bbe212de9b`）。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/107196
- **#107199 桌面 Bot Chat 刷新历史时从正确 profile 切回 default**（标记 needs-repro）。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/107199：
  https://github.com/NousResearch/hermes-agent/issues/107199
- **#94001 桌面状态栏上下文用量在压缩后陈旧、跨会话污染、刷新缓慢**。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/94001
- **#79649 web workspace / agent-browser / ui-tui 存在 npm 漏洞**（`hermes doctor --fix` 仍报告）。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/79649

**P3（较低）**
- **#107221 自定义 provider 向声明 `supports_reasoning:false` 的模型发送不支持的 reasoning 参数**，涉及 Ollama/vLLM/llama.cpp。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/107221
- **#107156、#107196 等桌面/网关回归**已在 P2 列出，回归性质需重点关注。

**已有 fix 但尚未合并的补充项**
- **PR #107249（P2）**：`validate_tool_calls` 在流中断场景把空/空白 tool 参数静默改写为 `"{}"` 并放行，导致执行器不触发解析错误。当日提交，OPEN。
  https://github.com/NousResearch/hermes-agent/pull/107249
- **PR #86062（P2）**：FTS trigram 索引损坏（遗留 schema）时重建失败，改为检测后 drop+recreate。
  https://github.com/NousResearch/hermes-agent/pull/86062

---

## 6. 功能请求与路线图信号

- **#19320 将 Codex / OpenAI `web.run` 作为搜索 provider**（👍 5）。当前 `web_search` 仅支持 firecrawl 等第三方，诉求是接入原生、更高质量的搜索能力。今日**无明显配套 PR**，短期内落地不确定。
  https://github.com/NousResearch/hermes-agent/issues/19320

由当日 PR 反向推断的可能纳入下一版本的方向：
- **DeepSeek 思考开关链路修正**：围绕 #107238 已有 PR #107260、#107251 两条修复路径（均处理 `effort: "none"` 未被识别为 thinking disabled 的问题），并叠加 PR #107250 的模型上下文窗口元数据修正。这组改动聚焦同一 provider，收敛概率高。
  https://github.com/NousResearch/hermes-agent/pull/107260
  https://github.com/NousResearch/hermes-agent/pull/107251
  https://github.com/NousResearch/hermes-agent/pull/107250
- **Skills 安装路径放宽**：PR #107258 允许安装 `SKILL.md` 引用的自身子目录，而非误判为 symlink escape。
  https://github.com/NousResearch/hermes-agent/pull/107258
- **网关 reasoning 流式输出**：PR #93730 将 `AIAgent.reasoning_callback` 接入 API server，使思考内容与回答文本分开流式输出。
  https://github.com/NousResearch/hermes-agent/pull/93730

---

## 7. 用户反馈摘要

**主要痛点**
- **会话状态管理反复出问题**：多个 Issue 带 `sweeper:risk-session-state` 标签，覆盖压缩失效（#106459）、状态栏用量陈旧与跨会话污染（#94001）、Bot Chat 模型选择丢失（#104882）、steer 消息串窗（#105176）、profile 回退（#107199），显示会话是当前最集中的薄弱面。
- **桌面端成为体验短板集中区**：视图跳动（#78486）、标题栏标签裁剪与回归（#107196）、上下文用量显示异常（#94001）、发送配置不生效（#107238）均由桌面端用户报告。
- **"配置不生效"类问题显著**：#107238 用户明确指出桌面显示"思考：关"但请求仍带 `thinking: enabled`，并量化浪费 68% thinking tokens——这类"界面承诺与线上行为不一致"最易损耗用户信任。#107221（自定义 provider 向不支持 reasoning 的模型发 reasoning 参数）本质相同。
- **provider 兼容与模型元数据脆弱**：DeepSeek 模型 ID 被静默改写（#107206）、`deepseek-v4.1-flash` 窗口误报 128K（#107250）、llamacpp 非默认端口被误判不可用（PR #105837）、Ollama/vLLM 参数越界（#107221），构成一整条 provider 适配问题带。
- **部署与依赖维护负担**：#79649 用户使用最新版本 + 最新 npm，`hermes doctor --fix` 仍报出多处 npm 漏洞，反馈语气带有明显困惑（"Why do I still get this?"）。

**使用场景线索**
- Slack 等平台上的 cron 定时简报投递（#101819 / #107257），且用户需要后续对话能带上 brief 上下文。
- 群聊房间（hermes-bots 插件），需要处理轮次超时与迟到的成员回复（#105247）。
- 长会话中途离开再返回的阅读续接（PR #107252 针对 desktop transcript 滚动恢复）。
- 自定义端点 / 本地推理（Ollama、vLLM、llama.cpp）作为一等 provider 使用（#107221、PR #105837）。

---

## 8. 待处理积压

**长期未解决的 Issue**
- **#66616**（创建 2026-07-18，已近 8 周，189 条评论，OPEN）：Skills index watchdog 持续 `degraded`，索引陈旧 29.8h > 26h 上限。自动化告警长期未消除，建议要么修复索引重建工作流，要么调整阈值以停止噪声。
  https://github.com/NousResearch/hermes-agent/issues/66616
- **#19320**（创建 2026-05-03，逾 4 个月，7 条评论，👍 5，OPEN）：Codex / OpenAI `web.run` 搜索 provider 请求，仍无实质进展。
  https://github.com/NousResearch/hermes-agent/issues/19320
- **#71650**（创建 2026-07-26，约 6.5 周，OPEN）：插件 toolset 校验时序缺陷，误报警告持续存在。
  https://github.com/NousResearch/hermes-agent/issues/71650
- **#79649**（创建 2026-08-05，逾 5 周，OPEN）：npm 漏洞问题，`hermes doctor --fix` 无法解决。
  https://github.com/NousResearch/hermes-agent/issues/79649
- **#88667**（创建 2026-08-17，P1，OPEN）：`key_cmd` callable 凭据导致自定义 provider 崩溃，长期无修复 PR。
  https://github.com/NousResearch/hermes-agent/issues/88667
- **#94001**（创建 2026-08-24，OPEN）：桌面状态栏上下文用量多项缺陷，无修复 PR。
  https://github.com/NousResearch/hermes-agent/issues/94001
- **#78486**（创建 2026-08-04，P1，OPEN）：桌面聊天视图跳动，逾 5 周未修。
  https://github.com/NousResearch/hermes-agent/issues/78486

**长期待合并 PR**
- **#86062**（创建 2026-08-14，OPEN，P2）：FTS 索引损坏恢复修复，已挂起近 4 周。
  https://github.com/NousResearch/hermes-agent/pull/86062
- **#93730**（创建 2026-08-24，OPEN，P2）：gateway reasoning 流式输出，挂起逾 2 周。
  https://github.com/NousResearch/hermes-agent/pull/93730
- **#105837**（创建 2026-09-08，OPEN，P2）：llamacpp 非默认端口检测修复。
  https://github.com/NousResearch/hermes-agent/pull/105837

**维护者关注建议**：当前 36 条待合并 PR 与上述长期 Issue 形成双重积压。优先事项建议为——(1) 处置 #66616 长期降级告警以降低噪声；(2) 推进 P1 且无 fix PR 的 #88667、#78486、#100401；(3) 加速 review 队列中的 P2 修复 PR（#86062、#93730、#105837），避免修复因积压而失效。

---

*本日报数据来源于 Hermes Agent (github.com/nousresearch/hermes-agent) 于 2026-09-10 的 GitHub 动态，仅反映所提供材料中的信息。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-09-10）

## 1. 今日速览

过去 24 小时 PicoClaw 仓库无新版本发布，整体活跃度偏低：Issues 侧无新开或活跃讨论，仅关闭 2 条被标记为 `stale` 的条目；PR 侧 5 条更新中 4 条待合并、1 条关闭。值得注意的是，今日所有更新的 Issues 与 PR 均为历史积压项（创建时间跨度从 2026-03-11 到 2026-09-01），今日更新更像是 stale 清理与维护者巡检的结果，而非新增开发活动。项目处于维护节奏为主、新功能推进偏缓的状态。社区互动数据同样清淡：今日更新条目中最高评论数为 9，最高 👍 数为 1。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日关闭/合并 1 条 PR：

- **#1349 [CLOSED] feat(qq): support parsing and replying to more attachment types**（作者 aishannon，创建于 2026-03-11，更新于 2026-09-09）
  - 链接：sipeed/picoclaw PR #1349
  - 内容：支持解析 QQ 频道 emoji 结构；支持处理来自 QQ 频道的语音、图片、视频和文件消息；支持回复本地语音、图片、视频和文件附件（发送前上传）。
  - 意义：这是一条长期挂起的增强 PR，跨越近六个月后关闭，标志着 QQ 频道通道的多媒体消息能力相关工作量完成或被收敛。

今日无新合并的功能性 PR，项目整体向前推进幅度有限，主要体现为存量条目的清理。

## 4. 社区热点

今日讨论最活跃的条目：

- **Issue #3269 [CLOSED] [stale] [BUG] MCP server 连接失败导致 agent loop 挂起**（作者 ruiyigen，创建 2026-07-20，更新 2026-09-09，评论 9，👍 1）
  - 链接：sipeed/picoclaw Issue #3269
  - 现象：当 MCP server 连接失败时，agent loop 会挂起，导致 PicoClaw 聊天界面停止回复用户。
- **Issue #3345 [CLOSED] [stale] Proposal: lightweight PicoClaw worker mode for household edge compute**（作者 kvnloo，创建 2026-08-25，更新 2026-09-09，评论 2，👍 0）
  - 链接：sipeed/picoclaw Issue #3345
  - 诉求：面向低成本 RISC-V/ARM/MIPS 板卡、树莓派、旧安卓手机等设备，以及约 10–20 MB 可用内存的机器，提出轻量级 worker 模式。

**分析**：今日社区关注点集中在两类议题——一是 MCP 集成带来的稳定性风险（外部依赖失败传导为整体不可用），二是 PicoClaw 在低资源边缘设备上的部署形态。前者已有 9 条评论讨论，是今日唯一具备实质讨论深度的条目；后者虽评论数不高，但切中项目面向的硬件定位，具备路线图参考价值。两条均已被 stale 关闭，需注意其中诉求可能未被真正解决。

## 5. Bug 与稳定性

今日无新报告的 Bug，仅有 1 条存量 Bug 被关闭：

- **高严重度 — Issue #3269 [CLOSED] [stale]：MCP server 连接失败导致 agent loop 挂起，聊天界面停止回复**
  - 链接：sipeed/picoclaw Issue #3269
  - 影响：外部 MCP 服务不可用时，整个助手不可响应，属于可用性层面的级联故障；受影响版本为 picoclaw nightly (git: 2cf030d2)。
  - 状态：已关闭（标记 stale）。**未见与之关联的 fix PR**，今日 5 条 PR 中无一条指向该问题。建议维护者确认该挂起是否已在其他改动中间接修复，还是仅因超期而被自动关闭。

## 6. 功能请求与路线图信号

今日无新功能请求提出，以下为存量信号：

- **Issue #3345：household edge compute 的轻量级 worker 模式**（链接：sipeed/picoclaw Issue #3345）
  - 用户指出 PicoClaw 运行在"分布式 agent 系统通常忽略的设备"上，希望支持多设备协同的 worker 形态。
  - 与已有 PR 的关联判断：今日待合并 PR 中无直接对应的实现，短期内纳入下一版本的可能性较低；但其方向与项目"低资源硬件优先"的定位一致，属于值得保留的中长期路线图输入。

- **PR #3354 [OPEN] feat(irc): assemble IRCv3 multiline messages**（作者 linhongyu510，创建 2026-08-31）
  - 链接：sipeed/picoclaw PR #3354
  - 默认请求 `batch`、`message-tags`、`draft/multiline`，将长消息或多行 IRC 消息作为一条完整入站消息送入 PicoClaw。这是通道能力增强，若合并将提升 IRC 场景的输入完整性。

## 7. 用户反馈摘要

从今日更新条目的摘要与评论数据中可提炼：

- **痛点一：外部依赖故障缺乏隔离**。Issue #3269 反映 MCP 连接失败会直接冻结 agent loop，用户侧表现为"聊天界面不再回复"，说明故障边界未被有效截断，用户对静默无响应体验不满（该问题获 1 个 👍、9 条评论，是今日互动最高的条目）。
- **痛点二：低资源设备场景未被充分覆盖**。Issue #3345 的作者明确列举了 RISC-V/ARM/MIPS 板卡、树莓派、旧安卓手机以及 10–20 MB 内存预算，并提到"许多用户拥有多台设备"，暗示现有形态尚未支持多设备协同。
- **使用场景**：QQ 频道多媒体消息（PR #1349）、IRCv3 多行长消息（PR #3354）、DeltaChat 通道重构（PR #3222）、群组 @ 提及时的回复关联（PR #3358）与通道反馈动画（PR #3353），共同勾勒出项目以多即时通讯通道接入为核心的使用图景。
- 今日数据中未见明确的满意度正面反馈。

## 8. 待处理积压

今日仍处 OPEN 状态的 PR 共 4 条，其中多条已明显超期，建议维护者优先分诊：

- **PR #3222 [OPEN] refactor(deltachat): cleanup implementation, documentation -200LOC**（作者 trufae，创建 2026-07-03，更新 2026-09-09）
  - 链接：sipeed/picoclaw PR #3222
  - 内容：删除遗留特性、回退逻辑与过时测试；引用官方 relay 列表网站替代硬编码副本；移除基于密码的邮件配置，密钥改由 jsonrpc 承载；重命名 `invite_link` → `join_invite_li...`。
  - 积压时长：约 2 个月。含配置与命名变更，属需要审慎评审的类型，建议尽快给出明确结论。
- **PR #3353 [OPEN] fix(channels): bound tool feedback animations**（作者 linhongyu510，创建 2026-08-31）
  - 链接：sipeed/picoclaw PR #3353
  - 内容：为工具反馈动画设置上限，避免生命周期清理被遗漏时无限编辑通道消息；五分钟后停止动画，与 Telegram 打字反馈的既有生存期上限保持一致。
- **PR #3354 [OPEN] feat(irc): assemble IRCv3 multiline messages**（作者 linhongyu510，创建 2026-08-31）
  - 链接：sipeed/picoclaw PR #3354
- **PR #3358 [OPEN] [stale] fix(agent): thread responses to the originating question message**（作者 hugodeco，创建 2026-09-01）
  - 链接：sipeed/picoclaw PR #3358
  - 内容：当用户消息触发一轮对话但并非回复（例如群组中的普通 @ 提及）时，出站响应未携带 `ReplyToMessageID`，导致回答与提问在聊天中脱节。

此外，**Issue #3269 的关闭方式值得复核**：该问题被以 stale 关闭但未见修复 PR，若挂起行为仍然存在，属于被沉默的高严重度可用性缺陷。

---

**健康度小结**：无新版本、无新开 Issue、今日互动全部来自存量条目，且关闭动作中至少一项（#3269）可能属于"超期自动清理"而非"已解决"，与 4 条待合并 PR 中 2 条（#3358 标记 stale、#3222 已积压约两个月）共同指向审阅吞吐不足。当前数据不足以支撑活跃度为正的判断。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-10

## 1. 今日速览

NanoClaw 今日处于**中等偏低的活跃窗口**：过去 24 小时无新版本发布，Issues 更新为 0 条，全部动能集中在 Pull Request 通道——6 条 PR 有更新，其中 4 条待合并、2 条已关闭。从标签分布看，今日工作高度聚焦于 **setup/installation（安装配置）与 agent-runner/core（运行时核心）** 两条主线，共有 4 条 PR 涉及安装引导与门户（portal）流程，2 条涉及 agent-runner 的运行时行为。4 条 PR 携带 `kind/bug` + `PR: Fix` 标签，说明今日主要是**修复驱动的稳定化阶段**，而非功能扩张期。Issue 通道零活动，社区讨论热度处于低位，项目健康度体现为"修复在推进、但外部反馈沉寂"。

## 2. 版本发布

今日无新版本发布，最新 Releases 列表为空，无需说明更新内容或迁移注意事项。

## 3. 项目进展

今日合并/关闭的 2 条 PR：

- **#3756 [CLOSED] `fix(agent-runner): a spent usage allowance is said in a sentence`** — 作者 moshe-nanoco，标签 `area/agent-runner, area/core`。该 PR 是一个三件套改动中的最后一环：网关侧（nanoco-gw#152）将用量超限变为 403 以终止回合，跨仓契约（nanoco#534）负责传递该语义，本 PR 决定"用户实际读到什么"。这是一条**面向终端用户体验的错误信息收口**，把冷冰冰的配额拒绝转化为可读句子，提升配额耗尽场景的可解释性。
  链接：nanocoai/nanoclaw PR #3756

- **#3753 [CLOSED] `fix: the community portal records the Echo image that actually landed`** — 作者 Koshkoshinsk，标签 `kind/bug, PR: Fix, follows-guidelines, core-team, area/repository-maintenance, area/setup-installation`。修复社区门户的 Echo 记录与实际落盘镜像不一致的问题：原先在浏览器尚未决定任何结果前就写入了 `NANOCLAW_HARDENED_IMAGE=true`，导致记录的是"被点击的"而非"实际发生的"。这是**状态真实性修复**，对安装记录与后续审计有实际意义。
  链接：nanocoai/nanoclaw PR #3753

**整体推进评估**：今日推进以"减少错误状态与误导性输出"为主（配额提示语义、门户镜像记录），合计关闭 2 条 PR，属于稳步的**质量收敛**，未引入新功能面。

## 4. 社区热点

今日数据中**所有 PR 的评论数均为 `undefined`、👍 均为 0**，Issues 通道完全无活动。因此不存在真正意义上的讨论热点或高反应条目。以下按"最受维护者关注"的可观测信号列出今日新开且待处理的 PR：

- **#3758 [OPEN] `fix(setup): skip portal reminders the operator already answered`** — 作者 Koshkoshinsk，创建/更新均为 2026-09-10，今日唯一新开的 PR。指向安装向导重复提问的问题："沙箱镜像来源"与后续门户提醒会重复询问操作者已回答过的问题。
  链接：nanocoai/nanoclaw PR #3758

- **#3757 [OPEN] `fix(verify): don't let an ambient credential env var invent a channel`** — 作者 javexed，创建/更新均为 2026-09-10，同为今日新开。指向 `verify.ts` 中 `readEnvFile` 读取环境变量后，可能因环境变量残留而凭空"发明"出一个渠道。
  链接：nanocoai/nanoclaw PR #3757

**诉求分析**：虽然缺少评论互动，但从 PR 摘要可读出清晰的用户痛点模式——**安装配置流程存在冗余交互与不可信状态**（重复提问、环境变量导致渠道误判、门户记录与事实不符、harden 链接与 WorkOS 代码混淆）。这是一类"配置向导的信任度"问题，而非功能缺失。

## 5. Bug 与稳定性

按影响面排序，今日数据中所有 Bug 均已有对应 fix PR：

**中高严重度**

1. **环境变量凭空创建渠道** — PR #3757（OPEN，待合并）。`verify.ts` 的 `readEnvFile` 读取环境变量后，若该值被设置，即使对应渠道未真正配置也会被判定存在，属于**校验逻辑的误报**，可能导致用户看到不存在的渠道或跳过必要配置。已有 fix PR。
   链接：nanocoai/nanoclaw PR #3757

2. **processing_ack 表行残留导致消息处理受阻塞** — PR #3755（OPEN，待合并）。`sqliteGetPendingMessages` 用 `processing_ack` 的全表行（无时间界）过滤待处理消息，已确认但对应消息已不存在的行会长期滞留，属于**无界增长的过滤集合**，存在随运行时间累积影响消息处理的风险。已有 fix PR。
   链接：nanocoai/nanoclaw PR #3755

**中等严重度**

3. **门户记录与实际落盘镜像不符** — PR #3753（已关闭/合并）。写入 `NANOCLAW_HARDENED_IMAGE=true` 的时机早于浏览器结果，记录失真。已修复。
   链接：nanocoai/nanoclaw PR #3753

4. **安装向导重复提问** — PR #3758（OPEN，待合并）。门户提醒重复询问操作者已回答的问题，属**交互体验缺陷**，非功能性故障。已有 fix PR。
   链接：nanocoai/nanoclaw PR #3758

5. **未注册门户交接页输出冗余信息** — PR #3754（OPEN，待合并）。交接页除门户链接外还打印了含 WorkOS 代码与页面的"No browser on this machine?"区块，摘要指出该区块"读起来"存在问题。属**信息呈现缺陷**。已有 fix PR。
   链接：nanocoai/nanoclaw PR #3754

**说明**：今日无崩溃类、无回归类报告，Issues 通道零 Bug 提交。

## 6. 功能请求与路线图信号

今日数据中**没有任何 Issue 形式的功能请求**，路线图信号仅可从 PR 的修复方向间接推断：

- **安装配置流程的"一次问清、如实记录"** 是当前最明确的收敛方向。PR #3758（跳过已回答的提醒）与 #3753（记录实际落盘镜像）共同指向同一目标：让向导不重复提问、不虚报状态。若该方向持续推进，下一版本可能围绕 setup/installation 的**幂等性与状态一致性**做整体收口。
- **运行时错误信息的可读化** 由已关闭的 #3756 确立。其对应用量配额场景，若同类"底层拒绝 → 用户可读句子"的模式在 agent-runner 中复制，将形成一条小型的**错误信息体验改进**路线。
- **消息队列清理机制** 由 #3755 提出（清理消息已不存在的 `processing_ack` 行）。这属于运行时数据卫生，若被采纳，暗示后续可能出现更多**后台数据清扫**类改动。

以上均为从已有 PR 推断，不代表项目已公布的路线图。

## 7. 用户反馈摘要

今日数据中 **Issues 为 0 条，所有 PR 的评论数为 `undefined`**，没有可提炼的 Issues 评论内容、用户场景陈述或满意度表达。从 PR 作者对问题的描述方式（"the wizard asks…and, later…"、"That block reads…"、"Makes the community portal's Echo record match what happened on the machine, not what was clicked"）可间接看出操作者在安装引导中遇到的困惑点集中于**重复询问与显示信息与实际不符**，但这些是维护者转述，非终端用户原话，不足以作为用户反馈结论。

**结论**：今日无有效用户反馈样本，社区反馈通道处于静默状态。

## 8. 待处理积压

今日数据的时间窗口仅覆盖 2026-09-09 至 2026-09-10，**无法据此判断任何"长期未响应"的积压项**。在当前可见范围内，需要维护者关注的是 4 条待合并（OPEN）PR 的评审进度：

| PR | 标题 | 创建日 | 状态 |
|---|---|---|---|
| #3758 | fix(setup): skip portal reminders the operator already answered | 2026-09-10 | OPEN，待评审 |
| #3757 | fix(verify): don't let an ambient credential env var invent a channel | 2026-09-10 | OPEN，待评审 |
| #3755 | fix(agent-runner): sweep processing_ack rows whose message no longer exists | 2026-09-09 | OPEN，待评审 |
| #3754 | fix(setup): print one portal link for the not-enrolled browser handoff | 2026-09-09 | OPEN，待评审 |

其中 **#3755 与 #3757 涉及运行时与校验逻辑的正确性**，建议优先评审；#3754 与 #3758 为安装体验类，可由同一维护者批量处理以减少上下文切换。

**数据局限说明**：本报告基于 2026-09-10 单日快照，评论数与 👍 数在源数据中为 `undefined`/0，长期积压项与历史趋势无法从本次数据中得出。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-09-10）

## 1. 今日速览

过去24小时内，IronClaw 项目保持中等偏低的活跃节奏：1 条新 Issue 报出 WebChat v2 的 IME 输入法缺陷，4 条 PR 均处于待合并状态，且今日无任何合并、关闭操作与版本发布。值得关注的是，4 条待合并 PR 中有 3 条来自同一贡献者 kirikov，聚焦 MCP 与扩展机制的正确性问题，形成了较集中的技术主线。整体来看，项目处于"修复积累期"而非"交付期"——积压正在被有序处理，但缺少已落地的产出，建议维护者优先推进 Code Review 以释放积压。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**今日无 PR 被合并或关闭**，项目在代码主干层面没有可见的前进。

不过从待合并队列看，以下方向的技术准备已相对成熟：

- **MCP 调用方隔离与归因**：PR #8090（按调用方而非按扩展划分 hosted-MCP 目录）与 PR #8084（SEP-414 出站调用调用方归因）构成一组互补改动，分别解决"工具列表互相覆盖"与"服务端无法区分会话来源/重试"的问题。两者一旦合并，将显著改善多用户场景下 hosted-MCP 的数据隔离正确性。
- **扩展包生命周期打通**：PR #8085 修复了"操作员安装的包能被构建却无法使用"的一致性问题，属于阻塞性缺陷修复。
- **Telegram 通道体验补齐**：PR #8072（size: L）在扩展激活时通过 Bot API `setMyCommands` 注册命令菜单，暴露 `/model`、`/status`、`/new`、`/stop`、`/interrupt`，是面向终端用户的功能性增强。

推进量评估：4 条待合并、0 条落地，说明项目的**评审吞吐是当前瓶颈**，而非开发产能。

## 4. 社区热点

今日数据中，所有 Issues/PR 的评论数均为 0（部分 PR 评论数未定义）、👍 均为 0，**不存在真正意义上的讨论热点**。相对而言，可关注以下条目：

- [Issue #8091](https://github.com/nearai/ironclaw/issues/8091) — WebChat v2 IME 组合输入误发送，直接影响非英文用户的核心输入体验。
- [PR #8090](https://github.com/nearai/ironclaw/pull/8090) — hosted-MCP 目录按调用方隔离。
- [PR #8084](https://github.com/nearai/ironclaw/pull/8084) — SEP-414 调用方归因（opt-in）。

诉求分析：社区信号集中在 **"多用户 / 多会话场景下的正确性与可追溯性"**，而非新功能扩展。这通常意味着项目已有一定真实部署规模，用户开始遇到共享状态带来的边界问题。

## 5. Bug 与稳定性

按严重程度排序：

**中高 — 输入法组合输入误触发消息发送**
[Issue #8091](https://github.com/nearai/ironclaw/issues/8091) `bug(webchat-v2)`（OPEN，2026-09-09 创建，0 评论）
在 WebChat v2 中，按 Enter 确认 IME 候选词转换时，会同时把聊天消息发送出去，导致未完成的草稿被提前提交。影响所有使用 CJK 等需要输入法组词的用户，属于高频路径上的可用性缺陷。
**当前无对应 fix PR。**

**中 — 操作员安装的扩展包构建后不可用**
[PR #8085](https://github.com/nearai/ironclaw/pull/8085) `fix(extensions)`（OPEN）
`from_host_bundled_manifest_with_inline_dynamic_schemas` 与 `validate_consistency` 对"哪些 manifest 来源可携带内联动态描述符 schema"判断不一致，导致操作员安装的包能通过构建但无法实际使用。**已有 fix PR，待合并。**

**中 — hosted-MCP 工具目录跨用户覆盖**
[PR #8090](https://github.com/nearai/ironclaw/pull/8090) `fix(mcp)`（OPEN）
当 hosted-MCP 服务器的工具列表依赖凭据时，发现结果按 extension id 发布到单一共享槽位，导致最近一次发现直接覆盖前一次，用户之间互相覆盖对方的工具。**已有 fix PR，待合并。**

**低 — 出站 hosted-MCP 调用缺少调用方标识**
[PR #8084](https://github.com/nearai/ironclaw/pull/8084) `feat(mcp)`（OPEN）
服务端仅能看到每用户一个 bearer token，无法判断调用来自哪个会话，也无法识别已处理过的调用是否为重试（可能导致重复计费）。属改进型条目，非崩溃类缺陷。

今日**未发现崩溃或回归问题**。稳定性风险主要来自扩展/MCP 子系统，均已配套修复方案。

## 6. 功能请求与路线图信号

今日没有用户直接提出的新功能请求（唯一 Issue 为 bug 报告）。可从待合并 PR 反推下一版本可能纳入的方向：

| 方向 | 依据 PR | 纳入可能性 |
|---|---|---|
| MCP 多租户正确性与调用方归因 | #8090、#8084 | 较高。两者同作者、同主题，属成组改动；#8084 为 opt-in，落地风险可控。 |
| 扩展包安装链路修复 | #8085 | 较高。修复阻塞性缺陷，`risk` 低。 |
| Telegram 命令菜单 / 通道体验增强 | #8072 | 中等。标注 `size: L, risk: low, scope: docs, scope: dependencies`，规模较大，需更多评审。 |

## 7. 用户反馈摘要

受限于今日数据：所有 Issues/PR 均**无评论**，因此没有可提炼的评论内容。

从 Issue #8091 的正文可提取的真实用户痛点：

- **使用者**：需要输入法组词的用户（CJK 等语言）。
- **场景**：在 WebChat v2 中撰写消息时，用 Enter 确认 IME 候选词。
- **不满意之处**：按键本意是"结束组词"，却被识别为"提交消息"，导致未完成的消息在用户准备好之前就被发出。用户描述为"an unfinished message is sent before I am ready"。

这是产品交互层面的明确缺陷反馈，而非功能诉求。

## 8. 待处理积压

**最需关注 — PR #8072 已开放 6 天**
[PR #8072](https://github.com/nearai/ironclaw/pull/8072) `feat(telegram)`（创建 2026-09-04，最后更新 2026-09-09，仍为 OPEN）
这是当前队列中**停留时间最长的待合并 PR**，规模标记为 L，涉及 docs 与 dependencies 范围。建议维护者优先安排评审，避免大型 PR 长期挂起导致后续 rebase 成本上升。

**次级关注 — #8084、#8085 已开放 2 天**
两条 PR 均创建于 2026-09-08，最后更新停留在 2026-09-09，今日（09-10）无进一步互动。与同样创建于 09-08 的 #8090 相比，#8090 今日已有更新，说明评审注意力尚未覆盖到这两条。

**积压健康度提示**：4 条 PR 全部处于 OPEN 且今日零合并，Issues 侧仅 1 条新增且无历史积压暴露。建议维护者关注 Code Review 吞吐，当前积压主要源于评审带宽而非贡献者供给。

---

*本日报基于 IronClaw 仓库 2026-09-10 的 GitHub 数据生成，所有链接指向 nearai/ironclaw。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-09-10）

## 1. 今日速览

今日项目 Issues 零更新，社区讨论侧完全静默；活跃度全部集中在 PR 通道，24 小时内 12 条 PR 变动、其中 9 条合并/关闭，全部由同一贡献者 btc69m979y-dotcom 主导提交。合并内容高度聚焦于 OpenClaw v2026.8.1 升级后的兼容性修复（网关重复重启、工作区校验阻断、会话迁移、模型选择作用域）与两项默认行为的降本改造（自动技能评审、压缩前记忆保存改为可选）。整体判断：这是一次典型的「上游大版本升级后集中排障 + 成本治理」型推进，维护强度高、闭合率高，但外部社区参与度为零。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 9 条 PR 合并/关闭，按主题可分为三条主线：

**A. OpenClaw v2026.8.1 升级兼容（最高优先级）**
- #2642 [CLOSED] 修复升级后 legacy transcript 存在同 ID 重复 session header 导致网关无法启动的问题（SQLite 保留首个 header，归档校验却重复计数）。
- #2647 [CLOSED] 处理空值或全 NUL 的旧版 workspace attestation 阻塞每次网关启动（`legacy workspace attestation has an invalid header`，观测样本为 Windows 上含 59 个 NUL 字节的文件），改为启动前隔离。
- #2644 [CLOSED] 修复配置同步期间因就绪探针短暂超时而反复弹出引擎启动页，并按迁移需求生成 `agents.defaults.sessionStore`，避免普通配置在两端口间反复增删字段。
- #2640 [CLOSED] 将模型选择显式约束为会话级（`agents.defaults.modelSelectionScope = "session"`），阻止会话内切换污染 agent/共享默认模型，关联 #2639。

**B. 网关重启与热重载优化**
- #2648 [CLOSED] 去除 IM 开关保存时的重复强制重启，MCP 配置改用 OpenClaw 原生热重载，源自 QA「编辑 IM 开关时 gateway 重启两次」的反馈。

**C. 成本与默认行为治理**
- #2641 [CLOSED] 将 OpenClaw v2026.8.1 默认开启的自动 Skill Workshop 评审改为显式 opt-in，长任务后的评审会产生大量额外模型调用。
- #2643 [CLOSED] 新增独立的 `openClawMemoryFlushEnabled` 配置并持久化，压缩前记忆保存默认关闭，中英文说明同步标注 token 成本。

**D. UI 缺陷**
- #2645 [CLOSED] 修复 Windows 上引擎启动失败弹窗折叠后状态胶囊覆盖原生拖拽区、导致「恢复」与「快速修复」按钮点击被吞的问题。
- #2646 [CLOSED] 定时任务历史日期筛选改为本地执行，绕开 OpenClaw `cron.runs` 不支持的 `startMs`/`endMs` 参数。

综合看，今日推进集中在「让升级后的引擎稳定可用」与「把上游默认开启的高消耗行为交还给用户选择」，属于稳定性与成本双线收口，未涉及新功能面的扩张。

## 4. 社区热点

今日无 Issues 评论数据，所有 PR 的 `评论` 字段均为 `undefined`、👍 均为 0，缺乏可量化的讨论热度。相对值得关注的是三条依赖升级 PR 已于 2026-08-10 创建、今日（2026-09-10）仍处 OPEN 且被标记 `[stale]`，说明自动化依赖维护管道已积压整整一个月：

- [#2459 OPEN] [stale] bump @nodesecure/js-x-ray 14.3.0 → 16.0.0（含跨两个大版本的破坏性变更）— https://github.com/netease-youdao/LobsterAI/pull/2459
- [#2461 OPEN] [stale] bump eslint-plugin-react-hooks 5.2.0 → 7.1.1 — https://github.com/netease-youdao/LobsterAI/pull/2461
- [#2464 OPEN] [stale] bump react-dom 18.3.1 → 19.2.8（React 19 主版本跃迁）— https://github.com/netease-youdao/LobsterAI/pull/2464

诉求分析：这三条均涉及主版本跨越，维护者未合并可能是主动规避风险（React 19 与 js-x-ray 16 的升级需要配套改造与回归验证），而非单纯疏忽；但 `[stale]` 标记长期挂着会掩盖真正的待决信号，建议明确给出「计划升级」或「暂不升级」的结论性回复。

## 5. Bug 与稳定性

按严重程度排列（今日均为 CLOSED，已附对应 fix PR）：

| 严重度 | 问题 | 影响 | Fix PR |
|---|---|---|---|
| 严重 | 升级 OpenClaw v2026.8.1 后，空值/全 NUL 的旧 workspace attestation 阻断**每一次**网关启动（Windows 实测含 59 个 NUL 字节） | 引擎完全无法启动 | [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647) 已修复 |
| 严重 | 升级后 legacy transcript 同 ID 重复 session header 导致网关启动失败（SQLite 存 1 条、归档校验计 2 条） | 引擎完全无法启动 | [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642) 已修复 |
| 中 | 配置同步时就绪探针短暂超时，反复弹出引擎启动页 | 误报式中断体验，用户可能误判为崩溃 | [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) 已修复 |
| 中 | 编辑 IM 开关触发 gateway 两次强制重启；MCP 安装/配置更新同样被标记为必须重启 | 操作卡顿、重复重启 | [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) 已修复 |
| 中 | 定时任务历史选择日期时向前端发送不支持的 `startMs`/`endMs`，`cron.runs` 拒绝请求 | 历史筛选功能不可用 | [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646) 已修复 |
| 低 | Windows 上引擎启动失败弹窗折叠后，状态胶囊覆盖原生拖拽区，恢复/快速修复按钮点击被吞 | 故障恢复路径受阻 | [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645) 已修复 |
| 低 | 会话内模型切换被额外写入 agent/共享默认模型，污染默认偏好 | 偏好漂移 | [#2640](https://github.com/netease-youdao/LobsterAI/pull/2640) 已修复 |

值得注意的共性：两条「严重」级问题均为 OpenClaw v2026.8.1 升级带来的回归，且都会导致引擎完全无法启动，说明本次上游升级的回归测试覆盖存在缺口；好在均在当日完成修复闭环。此外 #2645、#2647 均明确指向 Windows 平台，Windows 侧的原生窗口与文件行为是当前稳定性薄弱面。

## 6. 功能请求与路线图信号

今日无用户新建功能请求。但已合并 PR 透露出明确的产品取向信号，可作为下一版本（或后续迭代）的判断依据：

- **高消耗行为默认关闭、由用户显式开启**：#2643 新增 `openClawMemoryFlushEnabled`（默认关闭）、#2641 将自动技能评审改为 opt-in。两者均以「token 成本」为决策理由，预示下一版本将继续沿着「降本 + 用户可控」方向收敛上游默认行为。
- **配置作用域精细化**：#2640 引入 `agents.defaults.modelSelectionScope = "session"`。若该模式验证良好，后续可能扩展到更多「会话级 vs 全局级」的偏好项。
- **本地化处理优先于上游接口**：#2646 选择在 LobsterAI 客户端本地执行日期筛选，而非等待上游支持 `startMs`/`endMs`。这暗示在 LobsterAI 与 OpenClaw 的职责边界上，前端将承担更多兼容性垫片角色。
- **配置同步的幂等性建设**：#2644 明确避免 `sessionStore` 等字段在两端口间反复补入/移除，属于架构级信号，后续版本可能继续清理同类「双向写入抖动」。

依赖侧的 #2459 / #2461 / #2464 若被纳入版本计划，将构成较大范围的技术栈更新（React 19、eslint-plugin-react-hooks 7）。

## 7. 用户反馈摘要

今日无 Issues，无评论数据可提炼。可从 PR 摘要中追溯到两条来自 QA / 用户的直接反馈：

- **IM 开关操作体验**：Agent 编辑 IM 开关时 gateway 重启两次——用户可感知的重复重启，属交互流畅度抱怨（来源 #2648 摘要引用的 QA 反馈）。
- **升级后引擎不可用**：升级至 OpenClaw v2026.8.1 后网关无法启动，且表现为「每次启动都被阻断」，属阻断级不满（来源 #2642、#2647 摘要）。

此外，产品侧的默认行为调整（#2641、#2643）实质上回应的是用户对**模型 token 消耗**的隐性不满——长任务后的自动技能评审与压缩前记忆保存都会产生计划外调用，这两项改动的落地本身即说明该痛点已被确认为普遍问题。

## 8. 待处理积压

- [#2459 OPEN] [stale] bump @nodesecure/js-x-ray 14.3.0 → 16.0.0 — 创建 2026-08-10，已积压 **31 天**，含两个大版本跨越。https://github.com/netease-youdao/LobsterAI/pull/2459
- [#2461 OPEN] [stale] bump eslint-plugin-react-hooks 5.2.0 → 7.1.1 — 创建 2026-08-10，已积压 **31 天**。https://github.com/netease-youdao/LobsterAI/pull/2461
- [#2464 OPEN] [stale] bump react-dom 18.3.1 → 19.2.8 — 创建 2026-08-10，已积压 **31 天**，React 主版本跃迁，潜在影响面最大。https://github.com/netease-youdao/LobsterAI/pull/2464

提醒：三条均为 dependabot 自动提交，今日集中被更新但未被处理。长期挂 `[stale]` 会持续产生噪音并掩盖真实待决项，建议维护者给出明确结论（合并计划 / 关闭并注明原因），尤其是 react-dom 19 的升级需评估渲染器与 cowork 模块的兼容成本。

---

**项目健康度小结**：修复响应速度优秀——7 项缺陷全部当日提出、当日关闭，无遗留未修 Bug；但社区侧（Issues 0 更新、0 评论、0 👍）完全无外部参与，活跃度实际由单一贡献者驱动，存在明显的贡献者集中度风险。同时依赖升级积压 31 天未决，是当前唯一可量化的流程性欠账。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-10

## 1. 今日速览

今日 Moltis 无新版本发布，活动集中在**问题清理与修复合并**：2 条历史 Bug Issue（#293、#279）双双关闭，均由对应修复 PR（#1252、#1260）解决，说明维护者的 Issue→PR 闭环在正常运转。PR 侧共 7 条更新，其中 4 条待合并、3 条已合并/关闭，包含 2 条 dependabot 依赖升级。整体活跃度属**中等偏健康**：无新增 Issue、无新功能发布，但存量缺陷得到实质性收敛。值得注意的是，两条关闭的 Issue 均为 2026 年 3 月初创建、沉寂约半年的老问题，反映出积压清理正在进行。

---

## 3. 项目进展

今日合并/关闭的 3 条 PR 均为**修复型**，项目在稳定性方向前进了一步：

- **[PR #1252] [CLOSED] docs(docker): document the bind-mount permission fix for fresh deploys**
  https://github.com/moltis-org/moltis/pull/1252
  明确声明 `Closes #293`，针对全新 checkout 下 `docker compose up` 或文档示例中的 `docker run` bind mount 场景，补全权限修复的文档说明。属于文档层面的用户上手体验修复。

- **[PR #1260] [CLOSED] fix(exec): report missing shell accurately**
  作者 be-student | https://github.com/moltis-org/moltis/pull/1260
  明确声明 `Closes #279`，通过结合已配置的工作目录对 spawn `NotFound` 错误进行分类，使"目录存在"不再掩盖"`sh` 缺失于 PATH"的真实原因。作者说明聚焦默认特性测试通过、`cargo check -p moltis-tools` 通过。属于错误报告准确性的实质性修复。

- **[PR #1256] [CLOSED] chore(deps-dev): bump browserslist 4.28.2 → 4.28.8**
  https://github.com/moltis-org/moltis/pull/1256
  dependabot 维护性升级，`/crates/web/ui` 目录，无功能影响。

**进度评估**：今日净进展为 2 个已确认缺陷的闭环 + 1 次依赖维护，无新功能落地。

---

## 4. 社区热点

今日数据中**所有 Issue 与 PR 的评论数均为 0、👍 均为 0**，无实际讨论热度可言。从"创建时间早、更新集中在今日"这一模式看，真正引发关注的是**长期问题在今日集中收尾**：

- Issue #293（2026-03-02 创建，2026-09-10 关闭）https://github.com/moltis-org/moltis/issues/293
- Issue #279（2026-03-01 创建，2026-09-10 关闭）https://github.com/moltis-org/moltis/issues/279

**诉求分析**：两条问题分别指向**部署可用性**（Docker 全新部署无 db 文件）与**错误信息误导性**（工作目录报错掩盖 shell 缺失），都是新用户首次接触项目时最易踩到的坑。半年后集中解决，说明维护节奏偏慢但未遗弃。

PR 侧相对活跃的是新功能提案 **[PR #1258] feat(external-agents): add direct AGY streaming**（2026-09-04 创建，2026-09-10 更新）https://github.com/moltis-org/moltis/pull/1258 与 **[PR #1253] feat(reasoning): add max effort level**（2026-09-02 创建）https://github.com/moltis-org/moltis/pull/1253，二者均来自作者 GTanger，仍在 OPEN 状态等待评审。

---

## 5. Bug 与稳定性

按严重程度排列（今日均为**已修复关闭**，无新增 Bug 报告）：

| 严重度 | Issue | 问题 | Fix PR | 状态 |
|---|---|---|---|---|
| 高 | [#293](https://github.com/moltis-org/moltis/issues/293) | 全新 Docker Compose 部署后无 db 文件（[bug] 标签，作者 temobard） | [#1252](https://github.com/moltis-org/moltis/pull/1252) | 均已关闭 |
| 中 | [#279](https://github.com/moltis-org/moltis/issues/279) | `sh` 不在 PATH 时，exec 工具报出误导性的 "working directory does not exist"（作者 elsbrock） | [#1260](https://github.com/moltis-org/moltis/pull/1260) | 均已关闭 |

**稳定性判断**：两条问题均为阻断首次使用/误导排障的类型，且均在今日获得对应修复 PR（PR 描述中显式 `Closes #293` / `Closes #279`），闭环完整。今日**零新增 Bug**，稳定性指标向好。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。从在途 PR 可读出以下方向信号：

- **外部智能体集成**：[PR #1258](https://github.com/moltis-org/moltis/pull/1258) 为官方 `agy` CLI 增加一等公民流式传输，复用其既有 Google OAuth 会话，无需 Gemini CLI 或 API key，并将 AGY 的版本化 `stream-json` 输出翻译为 Moltis 的文本与推理流。属于**扩展外部 agent 接入面**的路线图信号。
- **推理控制粒度**：[PR #1253](https://github.com/moltis-org/moltis/pull/1253) 在共享 `ReasoningEffort` schema 中新增 `max` 级别并支持 `@reasoning-max` 模型后缀解析，对 OpenAI Codex Responses API 原样透传 `max`，对不提供独立最高档的 provider 做 clamp。属于**统一多 provider 推理档位抽象**的信号。
- **定时任务正确性**：[PR #1262](https://github.com/moltis-org/moltis/pull/1262) 修复 `is_within_active_hours` 未先处理 `end="24:00"` 特例导致 chrono `%H` 解析失败、进而触发 invalid-config fail-open 的缺陷。属于**默认配置即可踩中的静默失效**，建议优先纳入。

上述三条均处于 OPEN 待合并状态，是否纳入下一版本取决于评审进度，**当前无版本号或时间表信息可依**。

---

## 7. 用户反馈摘要

今日数据中所有 Issue/PR 评论数均为 0，**无直接用户评论可供提炼**。仅能从 Issue 正文与作者身份推断真实痛点：

- **部署即失败**（#293，作者 temobard）：使用者按官方文档执行全新 Docker Compose 部署，结果缺失 db 文件，印证了文档示例与实际 bind mount 权限行为之间的落差。PR #1252 的正文进一步复现了这一现象（`moltis | I thread 'main' (1) panicked at /build/crates/gateway/src/server.rs:1475:14`）。
- **错误信息把用户引向错误方向**（#279，作者 elsbrock）：用户遇到的是 `sh` 不在 PATH，却收到"工作目录不存在"的提示，而该目录实际存在且可访问——典型的排障误导型痛点。

两条反馈的共同点是**首次/基础使用路径**上的体验问题，而非深层功能缺陷。满意度信号：无点赞、无讨论，样本不足以评估社区情绪。

---

## 8. 待处理积压

按创建时间列出今日仍处 OPEN 状态、等待评审的 PR（均无评论、无 👍）：

- [PR #1253](https://github.com/moltis-org/moltis/pull/1253) feat(reasoning): add max effort level — 创建于 2026-09-02，已 8 天未合并
- [PR #1258](https://github.com/moltis-org/moltis/pull/1258) feat(external-agents): add direct AGY streaming — 创建于 2026-09-04，已 6 天未合并
- [PR #1262](https://github.com/moltis-org/moltis/pull/1262) fix(cron): treat active_hours end="24:00" as end-of-day — 创建于 2026-09-07，已 3 天未合并（默认配置即可触发的静默失效，建议优先）
- [PR #1263](https://github.com/moltis-org/moltis/pull/1263) chore(deps): bump npm_and_yarn group, 4 updates — dependabot，创建于 2026-09-10，常规待处理

**提醒维护者**：今日关闭的两条 Issue 从创建到关闭均历时约 **6 个月**，积压周期偏长；当前 3 条人工提交的 PR 均无任何 review 评论，建议尽快分配评审以缩短合并周期。今日数据中未包含更早的长期未响应 Issue/PR，无法进一步评估。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-10

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 公开数据。注：原始数据中 Issue 链接指向 `agentscope-ai/QwenPaw`，本报告按原文保留。

---

## 1. 今日速览

过去 24 小时 CoPaw 保持高强度维护节奏：Issues 更新 29 条（新开/活跃 15、关闭 14），PR 更新 31 条（待合并 18、已合并/关闭 13），无新版本发布。关闭量接近新增量，说明积压清理与响应速度良好，项目健康度处于活跃区间。今日主线集中在**会话/渠道稳定性修复**（Console 流式渲染、Telegram 轮询、飞书会话卡死）、**记忆后端容错**与**测试覆盖率扩张**（单批 +2475 用例）。社区侧对桌面端与 Web Console 的交互体验反馈密集，多个长期 Enhancement 仍在等待推进。

---

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 内容 | 链接 |
|---|---|---|
| #7658 | **fix(backup)**：恢复备份时保留 `SECRET_DIR`（0o700）与 `.master_key`（0o600）的 Unix 权限位，修复此前静默降级为 world-readable 的安全问题 | https://github.com/agentscope-ai/CoPaw/pull/7658 |
| #7647 | **fix(channels)**：出站媒体支持 Base64 Data URL，修复 agent 返回 `data:<mime>;base64,...` 被当作本地文件路径处理的错误 | https://github.com/agentscope-ai/CoPaw/pull/7647 |
| #7663 | **fix(memory)**：当所选记忆后端插件未注册时，回退到内置 ReMeLight，避免工作区启动失败 | https://github.com/agentscope-ai/CoPaw/pull/7663 |
| #7667 | **fix(files)**：文件上传入口仅在工作区 Tab 显示，Profile/Daily/Digest 恢复为只读 | https://github.com/agentscope-ai/CoPaw/pull/7667 |
| #7641 | **fix(release)**：桌面产物下载增加重试与校验，避免网络超时导致的半写入文件 | https://github.com/agentscope-ai/CoPaw/pull/7641 |
| #7325 | **test(console)**：新增 vitest 单测 +382 用例、语句覆盖率 +5.49pp | https://github.com/agentscope-ai/CoPaw/pull/7325 |
| #7645 | **test(e2e)**：针对统一环境变量页（#7538）重建 Environments E2E 套件 | https://github.com/agentscope-ai/CoPaw/pull/7645 |

**整体推进度评估**：今日合并以稳定性与安全修补为主，无破坏性变更；同时测试基础设施持续扩张，长期可维护性明确改善。

---

## 4. 社区热点（讨论最活跃）

1. **#7579 [CLOSED] 模型回复从上下文中丢失**（10 评论）
   https://github.com/agentscope-ai/CoPaw/issues/7579
   现象为助手回复已持久化但后续请求中缺失，模型"看不到自己刚说的话"，出现空响应。作者提供了 PyInstaller 解包级别的详细环境证据，讨论质量高。该问题已关闭，属于高优先级上下文一致性缺陷。

2. **#7177 [OPEN] 优化 platform.agentscope.io/deploy 首页**（9 评论）
   https://github.com/agentscope-ai/CoPaw/issues/7177
   反馈集中于操作入口位置、移动端操作便捷性等 UI/UX 细节，反映 Web 版使用频率上升后的入口体验诉求。

3. **#7011 [CLOSED] Console stop 请求取消活跃飞书会话**（8 评论）
   https://github.com/agentscope-ai/CoPaw/issues/7011
   多 UI 会话下 session identity 串扰导致跨会话取消，作者更新了原始问题定性。属于会话隔离类严重缺陷。

4. **PR #6960 [OPEN] PawPort 导入流**（长期活跃）
   https://github.com/agentscope-ai/CoPaw/pull/6960
   支持从 Codex、Qoder 等第三方 agent 迁入指令、设置、技能、插件、项目与近期工作，是今日最受关注的架构级特性 PR。

**诉求分析**：热点集中在"会话身份/上下文可靠性"与"跨工具迁移/入口体验"两条主线——用户既要求多会话并行下的正确性，也希望降低从其他 agent 平台迁移的成本。

---

## 5. Bug 与稳定性（按严重程度）

**严重（会话静默无响应 / 数据一致性）**
- **#7579 [CLOSED]** 回复从上下文丢失，模型不可见自身输出 — 已关闭，修复状态待确认（https://github.com/agentscope-ai/CoPaw/issues/7579）
- **#7534 [OPEN]** 飞书 DM 会话 queue consumer 卡死后静默无响应，新消息无法新建消费者；高优先级（priority=10）路径触发 — **暂无 fix PR**，建议优先处理（https://github.com/agentscope-ai/CoPaw/issues/7534）
- **#7596 [CLOSED]** `history.db` FTS 索引损坏未被完整性检查发现，retention purge 静默失败 — 已关闭（https://github.com/agentscope-ai/CoPaw/issues/7596）
- **#7363 [OPEN]** 同步调用阻塞事件循环、timeout 失效，Windows 桌面上无响应 118–135 秒 — **暂无 fix PR**（https://github.com/agentscope-ai/CoPaw/issues/7363）

**中（功能错误 / 平台差异）**
- **#7642 [CLOSED]** Console 在 Chrome 中流式渲染需等整轮结束才显示，Safari 正常 — 已关闭（https://github.com/agentscope-ai/CoPaw/issues/7642）
- **#7662 [CLOSED]** Telegram 轮询在代理黑洞下静默死亡，watchdog 仅检查 `updater.running` 导致不重连 — 已关闭（https://github.com/agentscope-ai/CoPaw/issues/7662）
- **#7597 [CLOSED]** 工具返回图片/PDF 二进制以裸 base64（`"type":"data"`）发送，触发 400 "file must have a file_id or file_data" — 已关闭，与已合并 PR #7647 方向一致（https://github.com/agentscope-ai/CoPaw/issues/7597）
- **#7231 [CLOSED]** 跨会话切换时消息发送到错误 session，伴随消息丢失 — 已关闭（https://github.com/agentscope-ai/CoPaw/issues/7231）
- **#3254 [CLOSED]** `GET /chats` 滞后于会话创建时，后端 chat UUID 可能缺失，影响删除/路由 — 已关闭（https://github.com/agentscope-ai/CoPaw/issues/3254）

**低（体验/功能缺陷）**
- **#7661 [OPEN]** 新建任务后侧边栏重复创建会话，而非延续当前会话（主干 a403b24）— 9-10 新报，暂无 fix PR（https://github.com/agentscope-ai/CoPaw/issues/7661）
- **#7445 [OPEN]** 2.2.0-beta.5 QwenPaw Hub 在部分场景无法连接本地模型服务（`http://127.0.0.1...` 失败，云端 API 正常）（https://github.com/agentscope-ai/CoPaw/issues/7445）
- **#7507 [OPEN]** 企业微信渠道逐字流式（150ms 节流）明显迟钝，微信则整段即显（https://github.com/agentscope-ai/CoPaw/issues/7507）
- **#3113 [OPEN]** 首次"团队协作"指令被忽略，需中断重试才触发多 agent 协作（CoPaw v1.0.1 起持续存在）（https://github.com/agentscope-ai/CoPaw/issues/3113）
- **#7666 [CLOSED]** 本地模型无法从 HF 下载，且无法选择量化模型文件（MiniCPM5-2B-GGUF）— 已关闭并标记 Close-and-review-later（https://github.com/agentscope-ai/CoPaw/issues/7666）
- **#7660 [OPEN]** 安装失败（用户仅提供截图，信息不足）（https://github.com/agentscope-ai/CoPaw/issues/7660）

**修复覆盖情况**：已关闭项占比高（14/29），但上述 **#7534、#7363、#7661** 三项无关联 fix PR，是当前稳定性风险敞口。

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 已有对应 PR | 下版可能性 |
|---|---|---|---|
| MCP 客户端支持 `tls_verify` 与 `ca_file` | #4175（OPEN，2026-05-10 起） https://github.com/agentscope-ai/CoPaw/issues/4175 | 无 | 中，配置类需求实现成本低 |
| MCP 客户端可配置 `timeout`（当前默认 30s 不可改，Pydantic 静默丢字段） | #3997（CLOSED） https://github.com/agentscope-ai/CoPaw/issues/3997 | 无 | 已关闭，需确认是否随其他配置改动落地 |
| 工作目录支持手动编辑路径（2.1.0 可用，2.2.0 退化为逐级点击） | #7601（CLOSED） https://github.com/agentscope-ai/CoPaw/issues/7601 | 无 | 高，属体验回归 |
| 记忆 ReMe 斜杠命令统一 | PR #7444（OPEN） https://github.com/agentscope-ai/CoPaw/pull/7444 | 是 | 高，已完成于当前 main 记忆架构之上 |
| ReMeLight 重排序（reranker）UI 配置面板 | PR #6399（OPEN，Under Review） https://github.com/agentscope-ai/CoPaw/pull/6399 | 是 | 中，与后端 reranker PR 配套 |
| 从第三方 agent 迁移（PawPort，首批 Codex/Qoder） | PR #6960（OPEN） https://github.com/agentscope-ai/CoPaw/pull/6960 | 是 | 中长期，属子系统级特性 |
| 原生移动端体验（Expo/React Native，复用现有服务） | PR #7378（OPEN，[DO NOT MERGE] 草稿） https://github.com/agentscope-ai/CoPaw/pull/7378 | 是 | 长期，仍为草稿 |
| deploy 首页信息架构与移动端优化 | #7177（OPEN） https://github.com/agentscope-ai/CoPaw/issues/7177 | 无 | 中，前端改动 |

**信号判断**：记忆（ReMe）与 MCP 配置是今日路线图最集中的两条线；迁移工具 PawPort 与移动端代表更长期的平台化方向。

---

## 7. 用户反馈摘要

**满意度 / 正向**
- 用户在 #7177 提到"最近网页版用多了"，反映 Web Console 已成为高频入口，社区愿意投入细节反馈。
- 测试侧 PR 由多个化名贡献者（小乔·FEUnit@QPQAT、墨子·BEUnit@QPQAT、李时珍·E2E@QPQAT）系统性提交，说明 QA 力量在持续投入。

**痛点（不满意）**
- **交互退化敏感**：从 2.1.0 升级到 2.2.0 后，工作目录手动编辑路径能力消失（#7601）、文件上传入口出现在不该出现的位置（#7667），用户对版本间体验回退反应明显。
- **多会话不可靠**：#7011、#7231、#7661、#7534、#3254 共同指向会话身份与路由问题——用户在并行会话、切换页面、跨渠道（飞书/企业微信/Telegram）时遭遇串扰、静默卡死与重复建会话。
- **平台差异明显**：同一会话 Chrome 不流式、Safari 正常（#7642）；企业微信逐字流式而微信整段即显（#7507）。
- **本地模型与部署门槛**：HF 下载失败且无法选量化文件（#7666）、Hub 无法连本地 API（#7445）、安装失败（#7660）——新用户首装与本地化仍是摩擦点。
- **长尾未解**：#3113 团队协作指令需重试，自 v1.0.1 起横跨多个版本仍未解决。

**使用场景**：桌面端（Windows 11 为主，含 PyInstaller 打包后端）、Docker/Ubuntu 部署、Web Console 网页版、飞书/企业微信/Telegram 渠道接入、MCP 客户端集成、本地 GGUF 模型与 HuggingFace 下载。

---

## 8. 待处理积压（提醒维护者关注）

| 条目 | 停留时长 | 说明 | 链接 |
|---|---|---|---|
| **#3113** 团队协作指令首次被忽略 | 2026-04-08 起（约 5 个月） | 多 agent 协作核心体验，跨版本未修复 | https://github.com/agentscope-ai/CoPaw/issues/3113 |
| **#4175** MCP `tls_verify` / `ca_file` | 2026-05-10 起（约 4 个月） | 企业内网 HTTPS MCP 场景刚需，仍 OPEN | https://github.com/agentscope-ai/CoPaw/issues/4175 |
| **#7363** 同步调用阻塞事件循环、timeout 失效 | 2026-08-27 起 | Windows 桌面 118–135s 无响应，无 fix PR | https://github.com/agentscope-ai/CoPaw/issues/7363 |
| **#7534** 飞书会话 consumer 卡死静默无响应 | 2026-09-03 起 | 高优先级路径触发，无 fix PR | https://github.com/agentscope-ai/CoPaw/issues/7534 |
| **#6399** ReMeLight reranker UI 面板 | 2026-07-23 起 | 长期 Under Review | https://github.com/agentscope-ai/CoPaw/pull/6399 |
| **#7445** Hub 无法连本地模型服务 | 2026-08-31 起 | 影响本地部署可用性，讨论仅 2 条 | https://github.com/agentscope-ai/CoPaw/issues/7445 |
| **#7378** 移动端（草稿，DO NOT MERGE） | 2026-08-28 起 | 需明确是否推进或归档 | https://github.com/agentscope-ai/CoPaw/pull/7378 |

**健康度小结**：今日关闭 14 Issues / 13 PRs，积压清理有效；但存在 3 项无修复 PR 的稳定性问题与 2 项超 4 个月未响应的 Enhancement，建议维护者优先为 #7534、#7363 指派 owner，并对 #3113、#4175 给出阶段性结论。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报（2026-09-10）

## 1. 今日速览

今日 ZeptoClaw 呈现典型的"维护日"特征：无新版本发布，但 Issue/PR 处理量显著——过去 24 小时内 4 条 Issue 更新（1 条新开、3 条关闭）、19 条 PR 更新（1 条待合并、18 条已合并/关闭）。关闭的 3 条 Issue 全部为安全类 bug，均由同一贡献者 morler 于 2026-08-31 报告，集中在令牌泄露与非恒定时比较问题上。合并/关闭的 18 条 PR 绝大多数由 dependabot 提交，属于依赖批量升级，项目在依赖维护上完成了较大批量的积压清理。唯一新开的 Issue #676 与待合并 PR #677 对应同一件 CI 权限问题，尚待处理。整体活跃度中等偏高，但以维护性工作为主，功能推进有限。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日无重大功能性 PR 合并，进展主要体现在依赖与基础设施维护上：

- **CI 安全审计修复（待合并）**：[PR #677](https://github.com/qhkm/zeptoclaw/pull/677) `fix(ci): allow rustsec audit check reporting`，授予 audit job `contents: read` 与 `checks: write` 权限，使 `rustsec/audit-check` 能正常发布检查结果。对应的 [Issue #676](https://github.com/qhkm/zeptoclaw/issues/676) 仍为 OPEN，等待该 PR 合入后闭环。
- **Rust 依赖升级（已关闭）**：[PR #625](https://github.com/qhkm/zeptoclaw/pull/625) rpassword 7.4.0 → 7.5.4；[PR #617](https://github.com/qhkm/zeptoclaw/pull/617) tower-http 0.6.10 → 0.6.11；[PR #620](https://github.com/qhkm/zeptoclaw/pull/620) scraper 0.26.0 → 0.27.0；[PR #623](https://github.com/qhkm/zeptoclaw/pull/623) tokio 1.52.1 → 1.52.3（注意：标题为 1.52.3，摘要正文写的是 1.52.2，以 PR 标题为准存在不一致，建议合并时核对）；[PR #627](https://github.com/qhkm/zeptoclaw/pull/627) serde_json 1.0.149 → 1.0.150。
- **Docker 与基础镜像（已关闭）**：[PR #658](https://github.com/qhkm/zeptoclaw/pull/658) Rust 镜像 1.95-slim-trixie → 1.98-slim-trixie（该 PR 带有一条关于 registry 缺少发布日期、无法应用 cooldown 的警告）。
- **GitHub Actions 升级（已关闭）**：[PR #618](https://github.com/qhkm/zeptoclaw/pull/618) docker/metadata-action 6.0.0 → 6.1.0；[PR #622](https://github.com/qhkm/zeptoclaw/pull/622) docker/build-push-action 7.1.0 → 7.2.0；[PR #624](https://github.com/qhkm/zeptoclaw/pull/624) codecov/codecov-action 6.0.0 → 6.0.1；[PR #626](https://github.com/qhkm/zeptoclaw/pull/626) taiki-e/install-action 2.78.2 → 2.79.7。
- **前端与文档站依赖（已关闭）**：[PR #621](https://github.com/qhkm/zeptoclaw/pull/621) @types/node 25.3.5 → 25.9.1（/panel）；[PR #619](https://github.com/qhkm/zeptoclaw/pull/619) tailwindcss 4.2.2 → 4.3.0（/panel）；[PR #616](https://github.com/qhkm/zeptoclaw/pull/616) react 与 @types/react 联动升级（/panel）；[PR #615](https://github.com/qhkm/zeptoclaw/pull/615) astro 6.3.1 → 6.3.7（/landing/zeptoclaw/docs）。

评估：今日进展以"债务清理"计，而非功能演进。依赖面覆盖 Rust、Actions、Docker、JS 四条线，项目依赖树保持新鲜度；功能推进量约等于零。

## 4. 社区热点

今日数据未提供任何 PR 或 Issue 的评论内容，所列条目的评论数均为 0 或 undefined，👍 数均为 0。因此**今日不存在实质性的讨论热点**。从互动结构看，唯一值得关注的信号是：

- [Issue #676](https://github.com/qhkm/zeptoclaw/issues/676) 与 [PR #677](https://github.com/qhkm/zeptoclaw/pull/677) 由同一作者 qhkm 在同日创建，形成"自报自修"闭环，反映出当前 issue 发现与修复主要由核心维护者驱动。
- 3 条安全 Issue（#653/#655/#656）由 morler 集中报告并同日关闭，说明外部贡献者具备一定的代码审计能力，且维护者响应及时（报告至关闭约 10 天）。

背后的诉求可归纳为：社区对 **CLI/API 层的令牌处理安全** 有明确关注，而非功能扩张。

## 5. Bug 与稳定性

今日关闭的 3 条 Issue 均为安全类缺陷，按严重程度排列如下，均已关闭（数据未提供对应 fix PR 编号，故无法确认具体修复提交）：

1. **高危 — 完整 API token 打印到 stdout**：[Issue #656](https://github.com/qhkm/zeptoclaw/issues/656)。`src/cli/panel.rs:221` 在每次 `zeptoclaw panel start` 时执行 `println!("API token: {api_token}")`，令牌会进入终端 scrollback、CI 日志与截图；同时该 token 还被持久化在 `~/.ze...`（摘要截断）。属于典型的凭据泄露路径。**已关闭**。
2. **中高危 — bearer token 使用 `==` 非恒定时间比较（3 处）**：[Issue #655](https://github.com/qhkm/zeptoclaw/issues/655)。涉及 `src/api/middleware.rs:138`、`src/api/routes/ws.rs:31`，以及 `src/api/auth.rs` 的 `verify_bearer_token`（摘要提到其文档注释但被截断）。非恒定时间比较理论上可被时序侧信道利用。**已关闭**。
3. **中危 — WebSocket 认证令牌通过 `?auth=` 查询参数传递**：[Issue #653](https://github.com/qhkm/zeptoclaw/issues/653)。`api/routes/ws.rs:28` 通过查询串传递静态 API token 或 JWT，令牌会落入反向代理/访问日志、浏览器历史与中间链路遥测。**已关闭**。

稳定性小结：今日无崩溃或回归类报告，问题集中在安全卫生（credential hygiene）层面。三条问题同日关闭是正向信号，但由于三项均被标记为 `bug(safety)`，建议维护者在 release notes 中明确说明修复方式，避免用户误以为仅靠升级即自动失效旧凭据。

## 6. 功能请求与路线图信号

今日无任何用户提出的新功能请求。全部 4 条 Issue 中，3 条为安全 bug，1 条为 CI chore（[Issue #676](https://github.com/qhkm/zeptoclaw/issues/676)，标签含 `chore, P2-high`）。PR 侧亦无 feature 类提交。

可判断的路线图信号仅有：

- **CI 安全门禁加固**：[Issue #676](https://github.com/qhkm/zeptoclaw/issues/676) + [PR #677](https://github.com/qhkm/zeptoclaw/pull/677) 表明项目在补齐 rustsec 审计的可用性，属于供应链安全方向，**大概率纳入下一次发布**（PR 已就绪，仅待合并）。
- **依赖基线抬升**：Rust 镜像升至 1.98、tokio/scraper 等升级已在今日关闭，下一版本将隐含这些版本基线变化，但均非破坏性 API 变更信号。

无证据支持任何新功能进入下一版本。

## 7. 用户反馈摘要

今日数据中所有条目评论数均为 0 或未定义，**无法从 Issues 评论中提炼用户反馈**。仅能从 Issue 正文（作者自述）推断两点真实痛点：

- **使用场景**：`zeptoclaw panel start` 是用户日常启动路径，而正是这条路径在打印明文 token（[#656](https://github.com/qhkm/zeptoclaw/issues/656)）——意味着安全问题的暴露面是默认使用流程，而非边缘配置。
- **不满意点**：报告者 morler 在三条 Issue 中均使用了较为严厉的定性（"leaks to logs/history"、"lands in terminal scrollback, CI logs, and screenshots"），反映出对凭据处理方式的不满；但摘要未包含任何满意类评价。

## 8. 待处理积压

今日数据的更新时间均为 2026-09-10，未提供超过 24 小时未响应的条目明细，因此**无法从给定数据中识别长期积压项**。可提醒维护者留意的是：

- [Issue #676](https://github.com/qhkm/zeptoclaw/issues/676)（OPEN，P2-high）与 [PR #677](https://github.com/qhkm/zeptoclaw/pull/677)（OPEN，待合并）是当前唯一的未闭环项，且互为依赖关系，建议优先合并以避免 CI 审计长期无法上报结果。
- 今日 19 条 PR 中，多个 dependabot PR 创建于 2026-06-03（如 #615–#627、#625），至 2026-09-10 才关闭，跨度约 3 个月，说明依赖 PR 存在较长的滞留周期；建议后续缩短 dependabot PR 的合并节奏，或调整更新策略以减少批量堆积。

---
*数据来源：github.com/qhkm/zeptoclaw，统计区间 2026-09-10。本报告仅基于所提供数据，未补充外部信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-10

## 1. 今日速览

ZeroClaw 今日维持高强度开发节奏：24 小时内 Issues 更新 21 条（新开/活跃 20、关闭 1），PR 更新 50 条（待合并 48、合并/关闭 2），无新版本发布。当日讨论重心集中在架构级 RFC 与安全/沙箱相关改动上，`NiuBlibing` 主导的三份高风险 RFC（#9487、#9488、#10076）持续获得大量评论，显示会话会话模型与插件运行时正处在设计收敛期。Bug 侧出现 2 条 S1/S2 级别的新报告（ACP 失败轮次持久化、Windows nextest 栈溢出），另有 1 条高危 `npm audit` 依赖告警。整体看，项目处于"设计密集 + 修复并行"的健康推进状态，但待合并 PR 积压已达 48 条，维护者审查带宽值得关注。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭的 PR 与 Issue 数量有限，主要体现在以下两项：

- **PR #8546 [CLOSED]** `fix(cli): localize status fragments`（作者 ConYel）——修复 CLI 状态片段本地化问题。维护者 Audacity88 在合并说明中表示已将该分支刷新至最新 `master`、修复 `embedded-web` lint 警告，并补充了 dashboard 缺失与文件系统包含（filesystem-containment）的回归测试。（https://github.com/zeroclaw-labs/zeroclaw/pull/8546）
- **Issue #10540 [CLOSED]** `[Feature]: Report Web dashboard availability in zeroclaw status`（作者 Audacity88）——要求 `zeroclaw status` 报告 Web dashboard 资源是否可用，已关闭，与上述 CLI 修复方向一致。（https://github.com/zeroclaw-labs/zeroclaw/issues/10540）

此外，两份此前提交的 PR 虽仍处 OPEN，但今日获得维护者实质性处理，可视作推进信号：**PR #9283** 的维护者注记显示已合并 `master` 并修复了解码器输入预算、无 body 响应处理、deflate 完成校验与代理测试隔离；**PR #9324**（A2A 出站客户端 RFC #9106 第一阶段）已实现四项 `a2a_*` 工具、共享 A2A v1.0 Serde 线模型及默认关闭的 `[a2a.client]` 配置块。（https://github.com/zeroclaw-labs/zeroclaw/pull/9283 、https://github.com/zeroclaw-labs/zeroclaw/pull/9324）

整体进度评估：今日属于"审查与小步收口"日，架构 RFC 讨论进展多于代码落地；48 条待合并 PR 中不乏 `size:XL` 的大改动，后续吞吐取决于维护者审查节奏。

## 4. 社区热点

今日讨论热度最高的条目集中于架构类 RFC，均无点赞数据（👍 全为 0），说明讨论以技术辩论而非表态为主：

| 条目 | 标题 | 评论 | 链接 |
|---|---|---|---|
| Issue #9487 | RFC: Runtime-owned conversation sessions and transport surface adapters | 37 | https://github.com/zeroclaw-labs/zeroclaw/issues/9487 |
| Issue #9488 | RFC: Unified file and attachment architecture for conversation surfaces | 30 | https://github.com/zeroclaw-labs/zeroclaw/issues/9488 |
| Issue #6996 | RFC: Granular sandbox policy - filesystem restrictions | 29 | https://github.com/zeroclaw-labs/zeroclaw/issues/6996 |
| Issue #8396 | RFC: Make wire protocol first-class in provider construction and onboarding | 19 | https://github.com/zeroclaw-labs/zeroclaw/issues/8396 |
| Issue #8692 | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | https://github.com/zeroclaw-labs/zeroclaw/issues/8692 |
| Issue #10076 | [RFC]: Composable WASM plugin runtime architecture | 13 | https://github.com/zeroclaw-labs/zeroclaw/issues/10076 |

**诉求分析：** #9487 与 #9488 同日由同一作者推进至 Revision 5 / Revision 10，且摘要明确说明"这是对上一版投票快照的实质性替换，此前针对旧版的反对票不延续，维护者需重新记录讨论窗口与快照后再开启投票"。这反映出会话运行时所有权（runtime-owned sessions vs. 传输层适配）与附件统一架构两项设计正经历反复重构，社区对快照语义和投票流程本身也存在摩擦——#10549 正是为此提出"取消强制讨论窗口、REVISE 即终止当前快照"的流程简化 RFC（https://github.com/zeroclaw-labs/zeroclaw/issues/10549）。#6996 指出应用层路径准入与 OS 沙箱后端（Bubblewrap、Landlock、Seatbelt）历史上存在漂移，直指安全一致性。#8692 作为维护者决策队列 tracker，表明社区已意识到 RFC 排队积压问题。

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻塞**
- **Issue #10673** `[Bug]: Persist failed ACP turns on the daemon RPC path (ZeroCode Code pane) — remaining slice of #9333`（作者 Audacity88，0 评论）。daemon RPC 轮次路径下失败/取消的轮次未持久化，用户影响与 #9333 相同但代码路径不同。标注为 p1、channel:acp。**暂无 fix PR。**（https://github.com/zeroclaw-labs/zeroclaw/issues/10673）

**S2 — 行为降级**
- **Issue #10741** `[Bug]: ZeroCode silently pauses queued work after a normal-looking completed response`（作者 Audacity88，0 评论）。收到 `session/prompt` 完成响应但未观察到对应终止轮次通知时，ZeroCode 保守地静默暂停队列工作。**相关 PR #10672**（`fix(zerocode): avoid duplicate streamed responses`）在 `session/prompt` 响应先于终止通知结算生命周期时保留每轮流式内容与工具调用来源，方向相邻但非直接修复。（https://github.com/zeroclaw-labs/zeroclaw/issues/10741 、https://github.com/zeroclaw-labs/zeroclaw/pull/10672）
- **Issue #10689** `[Bug]: Telegram voice reply silently skipped when the reply starts with ` [``（作者 badbat75）。开启 TTS 且 `output_modality = "mirror"` 或 `"voice"` 时，回复以 `[` 开头（ElevenLabs v3 音频标签）会被静默降级为纯文本。已标记 status:accepted。**暂无 fix PR。**（https://github.com/zeroclaw-labs/zeroclaw/issues/10689）
- **Issue #10734** `[Bug]: process_line stack overflow on constrained Windows thread stack (Advisory Windows nextest)`（作者 Project516）。非必需 CI 任务 `Advisory Windows nextest` 在 `zeroclaw-runtime::rpc::dispatch` 上触发真实 Windows 栈溢出（`0xc00000fd`）而中止。属 tooling/ci 组件。**暂无 fix PR。**（https://github.com/zeroclaw-labs/zeroclaw/issues/10734）
- **Issue #10731** `[Bug]: zeroclaw service logs prints nothing on macOS, Windows and OpenRC when the daemon is healthy`（作者 rifuki）。Linux systemd 下 `service logs` 通过 `journalctl` 合并 stdout/stderr，其余平台在 daemon 健康时无输出。**暂无 fix PR。**（https://github.com/zeroclaw-labs/zeroclaw/issues/10731）
- **Issue #10740** `[Bug]: Align Ctrl+N with additive session creation and remove row close control`（作者 Audacity88）。会话控件对"新会话"存在两种语义：侧边栏 `[+]` 保留当前聚焦会话并新增，Ctrl+N 行为不一致。**暂无 fix PR。**（https://github.com/zeroclaw-labs/zeroclaw/issues/10740）

**依赖安全**
- **Issue #10728** `ci: npm audit failed — 2026-09-09`（由 github-actions[bot] 自动创建）。`js-yaml` 存在 1 项 high/critical 级别漏洞，被标记 risk:high。工作流运行：https://github.com/zeroclaw-labs/zeroclaw/actions/runs/34335256830 （Issue 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10728）

## 6. 功能请求与路线图信号

- **Issue #10360** `RFC: opt-in household edge mesh with pull workers and signed receipts`（作者 kvnloo，priority:p3，needs-author-action）。指出 ZeroClaw 虽定位本地优先、硬件友好、安全优先，但单个运行时仍受限于单机 CPU/内存/磁盘/加速器；提议利用用户已有的多台闲置 PC、笔记本、手机组成可选边缘网格。属路线图级扩展方向，尚需作者补充，短期落地概率低。（https://github.com/zeroclaw-labs/zeroclaw/issues/10360）
- **Issue #10346** `RFC: Gateway and channels don't share the heartbeat worker's MCP-registry-caching pattern`（作者 cheng315ncu，needs-author-action）。指出单个 `zeroclaw daemon` 进程下，每个 stdio 传输的 MCP server 在每次启动时被连接/派生**三次**而非一次，属明确的性能与资源浪费问题，具备较高修复价值。（https://github.com/zeroclaw-labs/zeroclaw/issues/10346）
- **Issue #10738** `cron: persist skipped and ownerless occurrences in run history`（作者 IftekharUddin）。延续 #10594 的历史记录部分，在 PR #10599 关闭更大范围 issue 后单独跟踪。有明确的关联 PR 脉络，落地前景较清晰。（https://github.com/zeroclaw-labs/zeroclaw/issues/10738）
- **Issue #10739** `[Feature]: Extract ZeroCode transcript layout cache ownership`（作者 Audacity88）。将 ZeroCode transcript 布局推导与失效逻辑从 `ChatState` 抽出为单一行为保持的缓存所有者，属内部重构类请求。（https://github.com/zeroclaw-labs/zeroclaw/issues/10739）
- **Issue #10076 / #10526 / #10549** 构成 WASM 插件运行时、append-only 会话事件历史与 RFC 投票流程简化三条设计主线；其中 #10076 的修订说明已将 #10526 确立为 append-only 会话历史的唯一权威（"makes #10526 the exclusive authority"），显示路线图正在收敛而非发散。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10076 、https://github.com/zeroclaw-labs/zeroclaw/issues/10526 、https://github.com/zeroclaw-labs/zeroclaw/issues/10549

## 7. 用户反馈摘要

- **安全一致性是核心痛点**：#6996 明确指出 ZeroClaw 存在两层历史上相互漂移的文件系统策略层（工具与 `SecurityPolicy` 中的应用层路径准入，以及 Bubblewrap、Landlock、Seatbelt 等 OS 沙箱后端），用户期望二者行为一致而非各自演化。（https://github.com/zeroclaw-labs/zeroclaw/issues/6996）
- **RFC 流程摩擦**：#10549 反映当前流程要求所有 RFC 必须等待固定讨论期（普通 RFC 48 小时、例外全体一致 RFC 72 小时）才能投票，作者认为这制造了不必要的摩擦；结合 #9487/#9488 反复提出"实质性替换上一版快照、旧反对票不延续"，说明快照与投票语义对贡献者已构成实际协作成本。（https://github.com/zeroclaw-labs/zeroclaw/issues/10549）
- **跨平台一致性不满**：#10731 用户抱怨 `service logs` 仅在 systemd 下可用，macOS、Windows、OpenRC 在 daemon 健康时无任何输出，属平台体验落差。（https://github.com/zeroclaw-labs/zeroclaw/issues/10731）
- **静默失败令人困扰**：多个 Bug 报告的共性是"静默"——Telegram 语音回复被静默跳过（#10689）、ZeroCode 静默暂停队列工作（#10741）、`service logs` 静默无输出（#10731），用户对无提示的降级行为反馈集中。
- **资源效率关切**：#10346 用户通过实际观测发现 MCP server 每次启动被连接三次，属具体的资源浪费场景反馈。（https://github.com/zeroclaw-labs/zeroclaw/issues/10346）

## 8. 待处理积压

以下条目创建时间较早、标签含 `needs-author-action` / `needs-maintainer-review`，且今日仍在更新，建议维护者优先排期：

| 条目 | 标题 | 创建日期 | 状态标签 | 链接 |
|---|---|---|---|---|
| Issue #6996 | RFC: Granular sandbox policy - filesystem restrictions | 2026-05-28 | status:in-progress, status:accepted, needs 无 | https://github.com/zeroclaw-labs/zeroclaw/issues/6996 |
| PR #9324 | feat(a2a): outbound client config, shared wire-model, tools (#9106) | 2026-07-24 | needs-author-action, size:XL | https://github.com/zeroclaw-labs/zeroclaw/pull/9324 |
| Issue #9487 | RFC: Runtime-owned conversation sessions and transport surface adapters | 2026-07-28 | needs-maintainer-review, Revision 5 | https://github.com/zeroclaw-labs/zeroclaw/issues/9487 |
| Issue #9488 | RFC: Unified file and attachment architecture | 2026-07-28 | needs-maintainer-review, Revision 10 | https://github.com/zeroclaw-labs/zeroclaw/issues/9488 |
| PR #9440 | feat(security): enforce emergency stop before each tool call | 2026-07-27 | needs-author-action, risk:high | https://github.com/zeroclaw-labs/zeroclaw/pull/9440 |
| PR #9283 | fix(tools): decompress gzip/brotli/deflate web_fetch responses | 2026-07-23 | needs-author-action, stale-candidate | https://github.com/zeroclaw-labs/zeroclaw/pull/9283 |
| Issue #8396 | RFC: Make wire protocol first-class in provider construction and onboarding | 2026-06-27 | needs-author-action | https://github.com/zeroclaw-labs/zeroclaw/issues/8396 |
| Issue #10360 | RFC: opt-in household edge mesh with pull workers and signed receipts | 2026-08-25 | needs-author-action | https://github.com/zeroclaw-labs/zeroclaw/issues/10360 |
| Issue #10346 | RFC: Gateway and channels don't share heartbeat worker's MCP-registry-caching pattern | 2026-08-25 | needs-author-action | https://github.com/zeroclaw-labs/zeroclaw/issues/10346 |

**特别提示：** PR #9440 揭示了一个值得警惕的实际缺陷——`zeroclaw estop` 会写入 `estop-state.json`、打印 "Estop engaged" 并显示 `kill_all: active`，但**没有任何运行时路径真正读取它**，即紧急停止形同虚设。该 PR 自 2026-07-27 起处于 `needs-author-action`，安全影响明确，建议优先推动。（https://github.com/zeroclaw-labs/zeroclaw/pull/9440）

整体健康度判断：项目设计讨论活跃、修复与安全加固并行、无阻塞性发布问题；主要风险在于 48 条待合并 PR 与多条 `needs-author-action` 的高危安全条目形成积压，审查带宽可能成为下一阶段瓶颈。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*