# OpenClaw 生态日报 2026-08-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-15 04:39 UTC

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

# OpenClaw 项目日报 — 2026-08-15

## 1. 今日速览

OpenClaw 项目今日保持高活跃度：过去 24 小时内 GitHub 上累计产生 500 条 Issue 更新和 500 条 PR 更新，其中新开或活跃的 Issue 有 419 条，待合并的 PR 达 413 条——活跃度处于高位区间，说明社区参与热情强劲。不过，本次采样窗口内没有新版本发布，项目正处于功能迭代和问题修复的冲刺阶段。值得关注的是，当前大量高调优级（P0/P1）Issue 仍处于"待维护者评审/待产品决策"状态（如 #101290、#40001、#113306 等），且大量核心修复 PR 停留在"等待作者/缺少验证"的状态——社区活跃，但项目维护吞吐存在明显瓶颈。当前开发重点集中在会话状态/数据可靠性、多通道消息投递、CLI 与 Gateway 稳定性、以及 Web UI 交互体验上。

---

## 2. 版本发布

本次数据窗口内无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 数量为 87 条。以下为值得关注的重要合并：

| PR | 标题 | 意义 |
|---|---|---|
| [#124005](https://github.com/openclaw/openclaw/pull/124005) | fix(ui): retire the local model override once the Gateway confirms the patch | 修复了 Web UI 模型切换后本地覆盖状态与服务端不一致的问题，提升模型切换的可靠性 |
| [#123389](https://github.com/openclaw/openclaw/pull/123389) | fix: generate session and thread titles in sentence case | 统一了会话标题的格式规范（从 Title Case 改为 sentence case），改善 UI 一致性和可读性（关闭 #123385） |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | 为插件/技能安装引入交互式确认机制：当外部安全策略返回 `warn` 时，操作者必须先确认才能继续安装，这是一项重要的安全加固 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | 与 #116489 配套：为 Control UI 增加了安装策略警告的审核界面，管理员可直接在 UI 中确认继续安装 |

**总体判断：** 今日合并的 PR 以 UI 修复和安全加固为主，安全审查（install policy）相关的两条 PR 形成了完整的闭环——CLI 和 UI 两条路径都支持安装策略警告的确认流程，这是向更可信的插件生态迈出的实质一步。

---

## 4. 社区热点

今日讨论最活跃的 Issue 集中在以下几个方面：

### Nº1 · 网关级按代理成本预算（#42475，25 条评论）
[Issue #42475](https://github.com/openclaw/openclaw/issues/42475) — 社区强烈希望 OpenClaw 在网关层面提供细粒度的成本控制能力（按代理设定每日/每月预算上限），以便在不依赖外部监控的情况下防止模型调用成本失控。该需求由一个具体痛点驱动：`session-cost-usage.ts` 目前只跟踪单会话成本，无法为多代理部署提供全局管控。**诉求本质上是生产级运维能力的缺失。**

### Nº2 · 集中化文件名编码工具（#48788，20 条评论）
[Issue #48788](https://github.com/openclaw/openclaw/issues/48788) — 飞书中文文件名在跨编码场景下乱码问题已有 PR #48578 修复了最常见的 UTF-8/Latin-1 混淆，但社区希望从架构层面提供统一的文件名字符串编码处理工具，覆盖 Shift-JIS、EUC-KR、GB18030 等多编码场景，应用于所有通道适配器。这是典型的"修了表象→寻求根本方案"演进路径。

### Nº3 · 分层引导文件加载（#22438，18 条评论）
[Issue #22438](https://github.com/openclaw/openclaw/issues/22438) — 引导文件（bootstrap files）在每个会话中都会消耗 LLM Token，对于大型工作区的用户来说，这导致大量上下文预算被浪费在代理从未引用的文件上。社区提议引入分层加载机制，让用户控制不同场景加载哪些文件。**这是关于成本优化和上下文窗口效率的核心诉求。**

### 其他高热度 Issue
- [#102175](https://github.com/openclaw/openclaw/issues/102175)（17 条）— 嵌入式会话 prompt 缓存在房间事件/策略/Responses 边界上失效，说明跨功能边界的缓存一致性是复杂难点
- [#101290](https://github.com/openclaw/openclaw/issues/101290)（15 条，P0）— CLI 启动预检可能在 Gateway 运行时损坏状态数据库，这是一个严重的数据完整性问题

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

### P0（数据完整性风险）

- **[#101290](https://github.com/openclaw/openclaw/issues/101290) CLI 启动预检可损坏运行中的状态数据库** — macOS 上多次出现 "database disk image is malformed"，vanilla SQLite 无法复现。影响面广（Gateway 运行期间执行 CLI 健康检查即可触发），尚未有 fix PR。

### P1（高影响）

| Issue | 标题 | 是否有 Fix PR |
|---|---|---|
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 工具缺少追加模式，隔离 Cron 会话会覆盖共享文件造成静默数据丢失 | ❌ 无 |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite 快照恢复缺乏端到端的崩溃一致性和身份保证 | ❌ 无 |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) | 各通道缺乏最终回退投递语义的明确定义，用户看到"沉默"而非错误 | ❌ 无 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | 子代理完成消息在 announce 转向时被静默丢弃 | ❌ 无 |
| [#111857](https://github.com/openclaw/openclaw/issues/111857) | CLI 预算机制会重新打开已压缩的完整 JSONL，导致提示词估算膨胀并反复压缩低上下文父会话 | ❌ 无 |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | anthropic:claude-cli OAuth 刷新仍使主通道失效（尽管 #73682 声称已修复） | ❌ 无 |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有持久会话被固定在 128k 上下文，无视模型选择或配置 | ❌ 无（有相关 PR 待确认） |
| [#56217](https://github.com/openclaw/openclaw/issues/56217) | 1Password 密钥提供器崩溃循环耗尽服务账户速率限制 | ❌ 无 |

### P2（中等影响，值得关注）

- **[#114612](https://github.com/openclaw/openclaw/issues/114612) SQLite 无界增长** — `memory_index_chunks` 和 `memory_embedding_cache` 表无保留策略，长期运行将填满磁盘。这属于架构层面的设计缺陷。
- **[#108215](https://github.com/openclaw/openclaw/issues/108215) 上下文用量异常跳变** — 会话上下文从 57% 跌到 13% 但压缩计数器为 0，说明存在未被记录的状态变化。
- **[#50490](https://github.com/openclaw/openclaw/issues/50490) 飞书群聊激活模式切换无效** — 这是一个中文本地化用户高频反馈的问题。
- **[#108265](https://github.com/openclaw/openclaw/issues/108265) 飞书流式模式渲染极慢** — v2026.7.1 升级后字符"逐字溢出"。
- **[#41201](https://github.com/openclaw/openclaw/issues/41201) Control UI 头像不显示** — 回归问题，影响用户体验。

### 今日有修复 PR 的 Bug（部分）

- Discord 网关事件循环阻塞后永久失聪（[PR #123414](https://github.com/openclaw/openclaw/pull/123414)，修复 #122950）
- Codex 会话中 final_answer coda 覆盖真实回复（[PR #123993](https://github.com/openclaw/openclaw/pull/123993)，相关 #116604）
- ACP 会话未在请求的工作目录中运行（[PR #123585](https://github.com/openclaw/openclaw/pull/123585)，关闭 #123557）
- Workboard 终态卡片仍占用调度槽位，导致后续卡片被跳过（[PR #123239](https://github.com/openclaw/openclaw/pull/123239)，关闭 #122911）
- Browser 共享标签页在 relay 重连后消失（[PR #122155](https://github.com/openclaw/openclaw/pull/122155)，关闭 #122121）

---

## 6. 功能请求与路线图信号

从今日活跃的 Issues 和 PRs 中可以提炼以下路线图信号：

### 可能与下一版本相关（已有对应 PR 或在积极讨论）

1. **分布式 Agent 运行时（[#42026](https://github.com/openclaw/openclaw/issues/42026)，10 条评论）** — 将 Gateway 拆分为控制平面（Control Plane）和代理运行时（Agent Runtime），实现通道/路由/调度与模型推理的分离。这是一个架构级的大改动，10 条评论 + 3 个 👍 说明社区对其感兴趣，但短期内纳入版本的可能性较小。

2. **远程 Reranker 端点支持（[#64438](https://github.com/openclaw/openclaw/issues/64438)）** — 在记忆搜索中加入外部 reranker 服务支持（如 Qwen3-Reranker、Cohere Rerank），与已有的远程 embedding 支持对齐。此类功能需求通常有明确的用户场景，若实现成本可控可能进入后续迭代。

3. **Telegram 新 bot 功能支持（[#79077](https://github.com/openclaw/openclaw/issues/79077)，11 条评论，8 个 👍）** — 支持 Telegram 2026-05-07 发布的 Guest Bots 和 Bot-to-Bot 通信。这是所有 Telegram 机器人生态项目都会跟进的方向，预计优先级不低。

4. **Telegram Inline Query 支持（[#54794](https://github.com/openclaw/openclaw/issues/54794)，7 条评论，2 个 👍）** — 允许在任意聊天中通过 `@botname query` 调用机器人，无需切换会话。这是 Telegram 用户的高频使用场景。

5. **Per-agent 成本预算（[#42475](https://github.com/openclaw/openclaw/issues/42475)，25 条评论）** — 虽然当前只有 1 个 👍，但评论数极高，说明参与讨论的深度用户很多。网关级别的成本控制对生产部署来说是刚需。

6. **Cron shell 预检查门控（[PR #112375](https://github.com/openclaw/openclaw/pull/112375)）** — 让 Cron 任务先在本机执行 shell 脚本判断是否有工作要做，避免每次 tick 都付一次完整的模型调用。这是针对成本优化和资源浪费的务实方案，PR 状态为"needs proof"。

7. **Buzz 多账号支持（[PR #123266](https://github.com/openclaw/openclaw/pull/123266)）** — 解决一个 Gateway 进程只能运行一个 Buzz 机器人账号的限制。

### 可能被搁置或需要产品决策的需求

- **强制回复到原始渠道（[#54531](https://github.com/openclaw/openclaw/issues/54531)，12 条评论）** — 用户反馈响应在 Gateway UI 可见但未送达 Telegram/Discord/WhatsApp 的情况。这是一个严重的消息丢失问题，但已标记为 stale 且需要安全审查。
- **会话自动标题（[#99583](https://github.com/openclaw/openclaw/issues/99583)，8 条评论，2 个 👍）** — 智能会话自动命名，使用低成本模型惰性生成。这类 UX 优化需求实现成本低、用户感知强，有可能进入近期迭代。

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户痛点：

**可靠性痛点（最常见）：**

> "当消息通道会话被故障的 LLM 请求拥塞时，`openclaw system event --mode now` 会排队等待而不是直接注入，导致系统事件变为不可靠的告警渠道。" — [#50739](https://github.com/openclaw/openclaw/issues/50739)

> "隔离的 Cron 会话使用 `write` 工具会覆盖共享工作区文件（如 memory/QQ-YYYYMMDD.md），导致多个会话之间静默数据丢失。" — [#40001](https://github.com/openclaw/openclaw/issues/40001)

> "当子代理完成时，如果其请求者的运行仍处于活跃状态，完成消息可能被静默丢弃。" — [#92433](https://github.com/openclaw/openclaw/issues/92433)

**成本与效率痛点：**

> "引导文件在每个会话中都消耗 LLM Token，大型工作区的用户将大量上下文预算浪费在代理从未引用的文件上。" — [#22438](https://github.com/openclaw/openclaw/issues/22438)

> "Cron 代理任务在 LLM API 持续返回 HTTP 500 时会耗尽完整的超时窗口而不是快速失败。" — [#45494](https://github.com/openclaw/openclaw/issues/45494)

> "每次 tick 的 Cron 任务即使没有工作也需支付完整的模型调用费用。" — [PR #112375](https://github.com/openclaw/openclaw/pull/112375)

**可用性痛点：**

> "当技能数量超出 Token 预算时，OpenClaw 会静默截断技能列表——系统提示中出现了一行 'Skills truncated: included 68 of 90'，但代理根本不知道有 22 个技能被截断了。" — [#50677](https://github.com/openclaw/openclaw/issues/50677)

> "在会话压缩（flush）期间，`write` 工具被完全阻塞，无法编辑任何文件——即使与记忆无关的 `template.html` 也不行。" — [#63664](https://github.com/openclaw/openclaw/issues/63664)

> "控制 UI 中自动生成的会话标题是 Title Case（'Release Planning Sprint Review'），而所有其他标签都是 sentence case，不一致。" — [PR #123389](https://github.com/openclaw/openclaw/pull/123389)（已修复）

**中文本地化用户反馈（值得特别关注）：**

> "飞书群聊中使用 `/activation mention` 命令切换激活模式后，机器人仍然响应所有消息，未按预期进入'仅当被 @ 时才响应'的模式。" — [#50490](https://github.com/openclaw/openclaw/issues/50490)

> "升级到 v2026.7.1 后，飞书流式模式几乎不可用——字符逐字溢出，前端渲染极慢。" — [#108265](https://github.com/openclaw/openclaw/issues/108265)

---

## 8. 待处理积压

以下 Issue 长期未得到有效响应或解决，建议维护者关注：

| Issue | 创建时间 | 状态 | 为何需要关注 |
|---|---|---|---|
| [#40001](https://github.com/openclaw/openclaw/issues/40001) Write 工具无追加模式 | 2026-03-08 | 无 fix PR，需产品决策 | **已积压 5 个月**，导致用户数据持续损失风险 |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) CLI 预检损坏数据库 | 2026-07-07 | P0，无 fix PR | 数据完整性问题，标记为 P0 但无人认领 |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) claude-cli OAuth 刷新仍失效 | 2026-05-18 | 声称修复但实际未生效 | 影响所有使用 anthropic:claude-cli 的用户，"修复了但没修好"比不修更伤信任 |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) Control UI 头像不显示 | 2026-03-09 | 回归问题，已 5 个月 | 简单的 UI 修复长期搁置，影响用户感知 |
| [#14669](https://github.com/openclaw/openclaw/issues/14747) 车道等待阈值硬编码 | 2026-02-12 | 需产品决策 | 已存在 6 个月，`warnAfterMs` 硬编码为 2 秒，对 60-120s 的 Cron 任务造成噪音 |
| [#48641](https://github.com/openclaw/openclaw/issues/48641) Discord DM 入站消息被静默丢弃 | 2026-03-17 | 需安全审查 | 影响 Discord 用户的核心通信场景 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) Cron 代理 "setup timed out" | 2026-05-16 | 有 source-repro，待维护者评审 | 影响 memory-core 插件的自动 Cron 任务 |

**值得重点强调的模式：** 大量 Issue 被标记为 `clawsweeper:no-new-fix-pr`（无新修复 PR）和 `clawsweeper:needs-maintainer-review`（需维护者评审），说明社区贡献了大量高质量的 bug 报告和可复现环境，但维护者评审和决策环节已成为整个开发流程的核心瓶颈。此外，多条 P1/P2 Issue 带有 `clawsweeper-recovery-stuck` 标签，提示恢复流程本身也存在阻塞。

---

*本报告基于 OpenClaw（github.com/openclaw/openclaw）2026-08-15 的 GitHub 公开数据自动生成。*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-15 | 数据窗口：2026-08-14 ~ 2026-08-15**

---

## 1. 生态全景

个人 AI 助手开源生态整体处于**高活跃度的功能迭代期**：核心项目（OpenClaw、Hermes Agent、ZeroClaw、IronClaw）日均产生数百条 Issue/PR 更新，社区贡献意愿强劲，但**维护者评审吞吐已成为普遍瓶颈**——多个项目出现大量 PR 积压和 `needs-maintainer-review` 标签堆积。技术方向上，各团队不约而同地在**会话状态持久化与可靠性**（压缩、续接、崩溃恢复）、**多渠道消息投递与适配器稳定性**（Telegram、飞书、Discord、微信）、**成本控制**（按代理预算、Token 效率、Cron 预检查）、以及**安全边界**（插件安装确认、密钥不落盘、审批绑定会话）四个领域密集投入。与此同时，**记忆系统**（跨会话感知、持久化检索）和**跨生态互操作**（Chat Completions 兼容层、MCP 标准化）正在成为下一代竞争的关键分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 待合并 PR | 合并/关闭 PR | 新版本 | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（419 活跃） | 500（413 待合并） | 413 | 87 | 无 | ⚠️ 社区极活跃，维护吞吐严重瓶颈 |
| **Hermes Agent** | 50（21 活跃/29 关闭） | 50（26 待合并/24 关闭） | ~26 | 24 | 无 | ✅ 推进节奏强劲，桌面端攻坚中 |
| **ZeroClaw** | 32（29 活跃/3 关闭） | 50（47 待合并/3 合并） | 47 | 3 | 无（v0.8.5 冲刺期） | ⚠️ 高活跃，47 个 PR 积压含多个 risk:high |
| **IronClaw** | 30（21 活跃/9 关闭） | 47（25 待合并/22 合并） | 25 | 22 | 无（v1.3.0 开发期） | ✅ 高强度开发，核心 PR 深度审查中 |
| **CoPaw** | 50（14 活跃/36 关闭） | 32（20 待合并/12 合并） | 20 | 12 | 无 | ✅ 活跃，系统性清理存量积压中 |
| **LobsterAI** | 16 关闭（14 为 stale 批量关闭） | ~13 合并/关闭 | ~5（CI 依赖） | 13 | **2026.8.14** ✅ | ⚠️ 有版本发布但存量清理方式存疑 |
| **NanoBot** | 2（1 新开/1 关闭） | 20（14 待合并/6 合并） | 14 | 6 | 无 | ✅ 稳定推进，合并冲突是瓶颈 |
| **PicoClaw** | 1（+2 关闭） | 9（4 待合并/5 关闭） | 4 | 5 | 无 | ✅ 健康，修复闭环清晰 |
| **NanoClaw** | 2 新开 | 11（8 待合并/3 关闭） | 8 | 3（均为安全测试） | 无 | ✅ 健康，但今日无功能合入 |
| **Moltis** | 0 | 3（全部待合并） | 3 | 0 | 无 | ✅ 无 Bug，PR 滞留需关注 |
| **NullClaw** | 0 | 1 | 0 | 1（#986 已合并） | 无 | ✅ 平稳，活跃度偏低 |
| **TinyClaw** | — | — | — | — | — | 无活动 |
| **ZeptoClaw** | — | — | — | — | — | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**核心参照地位明确。** OpenClaw 以日均 500 条 Issue/PR 更新的量级遥遥领先于生态内其他项目（第二名 IronClaw 为 30/47，差一个数量级），是当前**社区规模最大的个人 AI 助手开源项目**。

**优势：**

- **社区体量与活跃度**：419 条活跃 Issue、413 条待合并 PR，贡献者生态极为庞大，问题反馈和功能建议密度远超同类项目
- **渠道覆盖广度**：飞书、Discord、Telegram、微信等多通道支持，且针对中文用户（飞书）有专门优化反馈闭环
- **功能深度**：已覆盖网关架构、子代理、Cron、Workboard、记忆、浏览器共享等高级能力，功能矩阵在生态内最完整
- **安全加固推进**：install policy 警告确认机制（CLI + UI 双路径闭环）展示了在插件生态安全方面的实质投入

**短板：**

- **维护吞吐瓶颈明显**：413 个待合并 PR、P0/P1 Issue 长期无人认领（如 #101290 数据库损坏已 5 周无 fix），"社区热但维护冷"的矛盾在生态内最突出
- **数据可靠性问题积压**：SQLite 无界增长（#114612）、快照恢复缺乏崩溃一致性（#113306）、CLI 预检可损坏数据库（#101290 P0）等核心数据层问题长期悬而未决
- **成本控制能力落后于需求**：按代理成本预算（#42475）、引导文件 Token 浪费（#22438）等生产级诉求虽讨论热烈但无落地

**与同类对比**：相比 Hermes Agent（桌面端体验优先）和 ZeroClaw（安全与架构治理导向），OpenClaw 走的是**"全功能覆盖 + 社区驱动"**路线，但在维护质量和架构治理上不如后两者收紧。

---

## 4. 共同关注的技术方向

**4.1 会话状态持久化与数据可靠性**（涉及：OpenClaw、Hermes Agent、NanoBot、IronClaw、CoPaw）

- 压缩后上下文丢失/恢复失败：OpenClaw #111857、Hermes #82001/#78981/#84718、CoPaw #6951
- 会话数据无界增长：OpenClaw #114612（SQLite）、Hermes #54189（state.db 659MB/2 周）
- 并发写入导致数据覆盖/损坏：OpenClaw #101290、NanoBot #5271（P0，后台任务覆盖会话）、IronClaw 存储层审查
- **共性结论**：这是全生态最集中的技术债领域，压缩机制、快照恢复、存储架构均未达生产级可靠性。

**4.2 多渠道消息投递可靠性**（涉及：OpenClaw、Hermes Agent、ZeroClaw、IronClaw、CoPaw）

- 消息静默丢失：OpenClaw #87561/#92433/#48641、Hermes #83683（Windows 桌面端重启后 Gateway 静默）、CoPaw #7011（stop 请求误取消飞书会话）
- 通道适配器 Bug：飞书流式渲染极慢（OpenClaw #108265）、Telegram 2FA/MP4 问题（IronClaw #7658/#7662）、Discord 附件丢失（NanoClaw #2752）、微信 socket 泄漏（Hermes #79889）
- **共性结论**：多通道是个人助手的基础能力，但每条通道都是长期维护负担，可靠性问题分散且难以系统性解决。

**4.3 成本控制与 Token 效率**（涉及：OpenClaw、Hermes Agent、IronClaw、ZeroClaw）

- 按代理/会话级预算：OpenClaw #42475（25 条评论）、ZeroClaw 预算记账修复 #9594/#9849
- Cron/定时任务 Token 浪费：OpenClaw PR #112375（shell 预检查）、IronClaw #6879 自动化可靠性 epic
- 引导文件/上下文预算浪费：OpenClaw #22438（分层加载引导文件）
- **共性结论**：随着生产环境采纳加深，"省 Token"已从优化项变成刚需，且与可靠性的交叉问题（预算估算膨胀导致反复压缩）日益突出。

**4.4 安全与信任边界**（涉及：OpenClaw、ZeroClaw、NanoClaw、Hermes Agent、IronClaw）

- 插件/技能安装安全确认：OpenClaw #116489 + #120900（安装策略警告确认）；NanoClaw 签名验证流水线演练（#3242/#3244）
- 密钥存储安全：Hermes #86701（1Password 密钥不落盘）
- 高熵检测误杀与可配置性：ZeroClaw #9486（Solana 钱包地址被替换）
- 审批权限绑定：ZeroClaw #9574（审批绑定到发起会话）
- **共性结论**：供应链安全（签名验证、密钥保护）正在从"加分项"变成"基础设施"，但误杀与可用性之间的平衡仍是难题。

**4.5 模型/Provider 兼容与路由**（涉及：CoPaw、ZeroClaw、LobsterAI、IronClaw）

- 模型配置强制覆盖：LobsterAI #1988（阿里 qwen 被强制替换为网易模型）
- Provider 路由统一：CoPaw #6302（catalog 驱动机制）
- Chat Completions 兼容层：ZeroClaw #8603（接入 OpenAI 生态客户端）
- 自定义 provider 参数未全局生效：Hermes #75738
- **共性结论**：多 Provider 支持已普及，但路由、优先级、兼容性和用户控制权仍处于"能跑但不顺"的阶段。

**4.6 WebUI/交互体验与国际化**（涉及：OpenClaw、NanoBot、CoPaw、LobsterAI）

- UI 统一性与回归：OpenClaw #123389（sentence case 统一）、LobsterAI #2495（字体加大）、CoPaw #7040（拼写错误）
- 多语言支持：NanoBot #5367（10 种语言）
- 中文本地化 Bug：OpenClaw #50490/#108265（飞书）
- **共性结论**：WebUI 已从"可用"进入"体验打磨"阶段，国际化是增量竞争点。

**4.7 记忆系统**（涉及：LobsterAI、OpenClaw、ZeroClaw、IronClaw）

- 记忆缺失是最大用户痛点：LobsterAI #2046/#2040/#2041（跨 session 感知）
- 可插拔记忆（MCP 绑定）：IronClaw #7664
- 记忆检索与上下文预算：OpenClaw #22438、ZeroClaw #9487/#9488
- **共性结论**：记忆正在从"辅助功能"升级为"核心架构组件"，可插拔、可持久化、可检索是下一阶段竞争焦点。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 | 关键差异 |
|---|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手框架 | 开发者/高级用户，多通道重度使用 | Gateway 网关 + 插件生态 + 子代理 + Cron | 功能覆盖最广、社区最大，但维护吞吐不足 |
| **Hermes Agent** | 桌面端优先的个人助手 | 桌面端日常用户（Windows/macOS） | 桌面应用 + Gateway 分离，强调更新与权限体验 | 桌面端体验打磨最深 |
| **ZeroClaw** | 安全与架构治理导向 | 安全敏感的自托管用户 | Rust 基础 + 严格 RFC 治理 + 安全边界强化 | 安全/架构治理最严谨，PR 审查门槛高 |
| **IronClaw** | 企业级自动化与 MCP 深度集成 | 团队/企业（Champions 周会） | 控制面/运行时分离 + 自动化编排 epic + 认证体系 | 企业级自动化（无人在场调度）最成熟 |
| **CoPaw** | 多 Agent 协作与 MCP 兼容性 | 多会话/多代理协作用户 | AgentScope 生态 + 多 UI 会话 + 动态 Skill 加载 | 会话级模型切换 + 子代理分组 |
| **NanoBot** | 轻量级 Web UI 优先 | 追求简洁 Web 体验的用户 | Python gateway + TypeScript/OpenTUI 客户端重构中 | WebUI 拖拽会话管理与协作（mentions） |
| **LobsterAI** | 网易生态·商业模型接入 | 中文用户/网易系产品用户 | 多引擎（含 OpenClaw runtime）接入 + Cowork 协作 | 商业化功能（签到、会员、积分），stale 清理激进 |
| **PicoClaw** | 低成本硬件上的轻量助手 | 嵌入式/低功耗设备用户 | Go 原生 + 极低资源占用（<10MB RAM） | 硬件可移植性是最大卖点 |
| **NanoClaw** | 轻量级安装/部署体验 | 自托管新手/低功耗 NAS 用户 | 向导式安装 + 预构建镜像 + 签名验证 | 部署体验最简 |
| **Moltis** | 个人工作流数据接入 | GitHub 生态开发者 | ClawHub 技能生态 + Slack 原生集成 + 持久化连接器 | 日历/邮件/频道数据接入（CalDAV/Gmail） |
| **NullClaw** | 极简配置/部署灵活性 | 只读/受限环境用户 | SQLite 记忆可配置路径 | 配置灵活性 |
| **TinyClaw / ZeptoClaw** | — | — | — | 当日无活动 |

---

## 6. 社区热度与成熟度

**第一梯队：高活跃·功能迭代期（日均 30+ 条更新）**

- **OpenClaw**（500/500）：社区驱动模式，功能迭代最快，但维护瓶颈最严重，P0/P1 问题积压
- **Hermes Agent**（50/50）：维护者响应积极，桌面端系统性攻坚中，旧 Issue 关闭节奏快
- **ZeroClaw**（32/50）：v0.8.5 冲刺期，RFC 讨论密集，架构治理严格但 PR 合并速度受限于 author-action 阻塞
- **IronClaw**（30/47）：v1.3.0 开发期，核心 PR（#7634）深度审查中，QA 与特性开发并行

**第二梯队：中等活跃·质量巩固期（日均 2-20 条更新）**

- **CoPaw**（50/32）：存量清理与功能开发并行，多 UI 会话可靠性问题需优先解决
- **NanoBot**（2/20）：WebUI 体验快速迭代，合并冲突是当前瓶颈
- **LobsterAI**（16 关闭/~13）：有版本发布，但 14 条 Issue 无 fix 即被 stale 关闭，质量管控方式值得警惕
- **PicoClaw**（1/9）：修复闭环清晰，stale 清理主动，健康度良好
- **NanoClaw**（2/11）：安全流程测试频繁，但今日无面向用户的功能合入
- **Moltis**（0/3）：3 个高质量 PR 滞留，维护节奏偏慢

**第三梯队：低活跃·稳定期（日均 <=1 条更新）**

- **NullClaw**（0/1）：平稳但活跃度低
- **TinyClaw / ZeptoClaw**：无活动

---

## 7. 值得关注的趋势信号

**7.1 记忆系统正在成为核心架构组件，而非辅助功能**

LobsterAI 社区明确喊出"最大的瓶颈不是进化算法，而是记忆系统"（#2046）；IronClaw 已起草 MCP 绑定的可插拔记忆系统（#7664）；OpenClaw 社区围绕引导文件 Token 浪费和上下文压缩效率展开深度讨论（#22438）。**信号**：下一代个人 AI 助手的竞争将从"工具调用能力"转向"跨会话的持续记忆与上下文管理能力"。

**7.2 生产级成本控制从"可选项"变成"刚需"**

OpenClaw #42475（按代理成本预算）25 条评论、IronClaw 自动化可靠性 epic（#6879）、ZeroClaw 预算记账双重计费修复（#9594）——多个项目同时意识到，代理在生产环境中的**成本失控**是采用的最大阻碍之一。**信号**：网关级/代理级/会话级的成本预算、配额和预警机制将成为标准功能。

**7.3 "省 Token"的自动化成为独立技术方向**

Cron 任务预检查（OpenClaw PR #112375）、引导文件分层加载（OpenClaw #22438）、自动化调度前验证（IronClaw #7644）——这些方案在"减少无效模型调用"这一目标下汇聚。**信号**：智能调度（只在有工作时才调用 LLM）正在从优化技巧变成架构设计原则。

**7.4 供应链安全进入"实弹演练"阶段**

NanoClaw 连续两轮签名批准器演练（#3242/#3244）、OpenClaw 安装策略警告确认闭环（#116489/#120900）、Hermes 1Password 密钥不落盘（#86701）——安全措施从"写了代码"推进到"验证流程本身可靠"。**信号**：2026 年下半年，个人 AI 助手的供应链安全将面临更严格审计。

**7.5 跨生态互操作成为增长杠杆**

ZeroClaw Chat Completions 兼容层（#8603）试图直接接入 OpenAI 生态客户端（Open WebUI、Continue.dev 等）；Moltis 新增 CalDAV/Gmail/Himalaya 连接器（#1190）；CoPaw 深度绑定 MCP 生态。**信号**：单打独斗的闭环正在被打破，能与主流协议（OpenAI、MCP、CalDAV）对接的项目将获得显著的生态红利。

**7.6 自动化可靠性呼唤"结构化执行契约"**

IronClaw #6879 指出：自动化任务失败的主因是"触发后以普通交互式聊天轮次执行、信号被后文截断"的结构性管道问题，而非模型噪声。解决方案是显式的 deliver/suppress 交付选择（#7647）和 LLM 模型固定（#7645）。**信号**：抛开"换更大模型"的思维惯性，社区正在用工程手段（确定性抑制机制、执行契约）来驯服自动化的不可靠性。

**7.7 桌面端稳定性是"最后一块拼图"**

Hermes Agent 今日 4 个 P1 级桌面端回归修复（#86674/#86687/#84048/#86658）、OpenClaw 的 Control UI 体验打磨、LobsterAI 的 v2026.8.14 侧边栏发布——桌面端体验决定个人助手能否从"命令行玩具"走向"日常工具"。**信号**：已度过功能丰富度竞赛的项目，正在将精力转向"更新不丢配置、重启不丢通道、权限不反复撤销"这类基础体验。

---

*报告基于 2026-08-15 各项目 GitHub 公开数据生成。所有 Issue/PR 编号、统计数据均来自源材料。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-15

## 1. 今日速览

NanoBot 项目今日活跃度较高：24 小时内共有 2 条 Issue 更新（1 新开、1 关闭）和 20 条 PR 更新（14 条待合并、6 条已合并/关闭）。核心方向集中在 WebUI 体验优化（会话管理、协作、本地化）、类型检查严格化重构、MCP SDK v2 迁移、会话数据一致性与流式超时修复。特别值得关注的是，一项 P0 级会话覆盖 bug 修复（[PR #5271](https://github.com/HKUDS/nanobot/pull/5271)）仍在等待合并，且多条 PR 标记了 `conflict` 标签，合并冲突管理可能是当前维护瓶颈。今日无新版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并的 6 条 PR 集中在以下方向：

- **[PR #5392](https://github.com/HKUDS/nanobot/pull/5392)（已关闭）— Anthropic 流式空闲超时修复**：修复 `NANOBOT_STREAM_IDLE_TIMEOUT_S` 在 no-callback 路径上被误用作总超时、可能导致长时间但活跃的生成长任务被错误杀死的回归问题。对应 Issue [#5391](https://github.com/HKUDS/nanobot/issues/5391)，同日提交、同日修复，响应迅速。
- **[PR #5395](https://github.com/HKUDS/nanobot/pull/5395)（已关闭）— WebUI 会话分组与共享样式优化**：统一分组术语、支持拖拽会话/活跃主题至分组、简化删除确认、引入跨 WebUI 控件的共享形状比例。
- **[PR #5393](https://github.com/HKUDS/nanobot/pull/5393)（已关闭）— WebUI 侧边栏与过渡效果打磨**：从冲突 PR #5358 中拆分出与协作无关的 UI 改进，直接基于 main 分支的干净 UI history 提交，仅含 WebUI 文件。侧边栏层级更清晰、增加连接线、标签扁平化、文件夹呈现优化。
- **[PR #5018](https://github.com/HKUDS/nanobot/pull/5018)（已关闭）— Skills 显式上下文加载**：修复 `ContextBuilder` 的 `skill_names` 入参被忽略的问题，调用方现在可显式预加载指定 skill，而不仅限于 `always: true` 的自动注入。
- **[PR #5390](https://github.com/HKUDS/nanobot/pull/5390)（已关闭）— Agent/知识图谱**：chore 类提交，无详细说明。

此外，[PR #5396](https://github.com/HKUDS/nanobot/pull/5396) 新开并针对 Issue #5161 提交了 Pyright 文件级 suppression 窄化重构，正在推进代码质量基线。

综合来看，项目今日在 WebUI 体验一致性和 Anthropic 流式可靠性上取得了实质推进；合并冲突的 PR 数量（5 条标记 conflict）提示协作密集区可能成为后续合并效率的瓶颈。

## 4. 社区热点

今日讨论热度整体不高，但以下条目值得关注：

- **[PR #4329](https://github.com/HKUDS/nanobot/pull/4329) — 原生 TypeScript 终端 UI（6/13 创建，今日持续更新）**：这是一个跨度两个月的高关注度功能型 PR，将 `nanobot agent` 重建为 TypeScript/OpenTUI 客户端，同时保留 Python gateway 作为 agent loop、会话、工具、记忆和安全策略的唯一实现。涉及两位核心贡献者（@pancacake 与 @chengyongru）的方向整合，背后诉求是终端用户体验的产品级提升，预计将成为长期讨论焦点。
- **[PR #5389](https://github.com/HKUDS/nanobot/pull/5389) — WebUI 拖拽式会话组织（今日新开）**：支持拖拽排序、拖拽建组、跨组移动，直接回应了会话管理效率需求，叠加 PR #5395 的关闭，显示该方向正被快速推进。
- **[Issue #5161](https://github.com/HKUDS/nanobot/issues/5161)（活跃）**：关于窄化 file-level Pyright suppressions 的代码质量提案，今日获得新 PR #5396 跟进。评论 1 条，反映维护者对类型严格化路线的认可。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 状态 | 说明 |
|---|---|---|---|
| **P0** | [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) — 后台任务过期保存覆盖会话数据 | ✅ 已有 fix，待合并 | `/new` 或其他生命周期替换后，过期后台任务可能覆盖当前会话数据；通过 per-session compaction 序列化与无效保存拒绝解决。 |
| **P2** | [Issue #5391](https://github.com/HKUDS/nanobot/issues/5391) — Anthropic 流式空闲超时误作总超时 | ✅ 已修复（PR #5392 同日关闭） | 长但活跃的生成任务可能 90s 后被 `asyncio.wait_for` 强制终止。 |
| **P2** | [PR #5382](https://github.com/HKUDS/nanobot/pull/5382) — Windows `os.replace()` 瞬时 PermissionError 崩溃 | ✅ 已有 fix，待合并 | `heartbeat` cron 任务触发 `JsonlSessionStore.save()` 时遭遇 `[WinError 5]`，导致整个 gateway 崩溃；同一 log 中 2026-08-11 出现两次，需重试机制。 |
| **P1** | [PR #5179](https://github.com/HKUDS/nanobot/pull/5179) — MCP 集成迁移至 SDK v2 | 🔄 迁移中 | 涉及 SSRF 校验、DNS pinning、代理路由等安全属性保持，属高风险重构。 |

无新的崩溃级（P0 bug）报告；上述 P0 为既有待合并项。

## 6. 功能请求与路线图信号

- **会话协作（mentions）** — [PR #5358](https://github.com/HKUDS/nanobot/pull/5358)（含 conflict）：为持久化会话提供服务端持有的 `@name`，支持 composer mention picker 选择对等会话进行协作。结合 #5389 和 #5395，WebUI 会话层正从"单机管理"走向"协作与组织"，极可能进入下一版本。
- **OAuth 状态与过期预警** — [PR #4689](https://github.com/HKUDS/nanobot/pull/4689)：今日被关闭（标记 invalid），可能因冲突或设计调整搁置，但该功能需求（CLI/WebUI/运行时三方可见的 token 状态）仍值得关注。
- **技能市场覆盖内置技能** — [PR #5309](https://github.com/HKUDS/nanobot/pull/5309)：allow marketplace skills to shadow builtins。当前内置技能（如 github）会禁用安装按钮，用户无法覆盖，形成体验断点——若合并，将显著提升技能生态灵活性。
- **WebUI 本地化 Agent 活动标签** — [PR #5367](https://github.com/HKUDS/nanobot/pull/5367)：10 种语言环境支持 + 语言切换即时更新，属于国际化增强信号。
- **交互式粒子背景** — [PR #5340](https://github.com/HKUDS/nanobot/pull/5340)：空线程 hero 区域的 Canvas 粒子背景，属视觉打磨类功能，对核心路线图影响有限。

## 7. 用户反馈摘要

- **[Issue #5391](https://github.com/HKUDS/nanobot/issues/5391)（Anthropic 流式超时）**：用户 @shen0122 明确指出空闲超时被 `asyncio.wait_for` 套在 `get_final_message()` 外层，导致活跃但长时间无事件回调的生成被 90s 硬性终止。问题描述精确到行号（`anthropic_provider.py:842-845`），并已在当日完成修复。示例了高质量 bug 报告——含复现路径与根因推测——对维护效率的直接价值。
- **[PR #5382](https://github.com/HKUDS/nanobot/pull/5382)（Windows 会话保存崩溃）**：贡献者 @albatrossflyon-coder 报告在 `gateway.log` 中两次（2026-08-11 15:44 与 18:45 CDT）确认 `[WinError 5] Access is denied`，说明 Windows 用户在生产环境中确实遭遇了偶发崩溃，且该问题影响核心会话持久化可靠性。

## 8. 待处理积压

需维护者关注的长期未决条目：

- **[PR #4145](https://github.com/HKUDS/nanobot/pull/4145) — Weather Skill（6/1 创建，已 75 天）**：包含新增 weather skill 示例、README 与测试的多文件贡献，至今未合并，可能因缺少维护者回复或设计评审停滞。建议明确反馈其是否纳入示例技能路线。
- **[PR #4329](https://github.com/HKUDS/nanobot/pull/4329) — TypeScript 终端 UI（6/13 创建，已 63 天）**：高影响功能型 PR 持续更新但未接近合并，涉及 gateway 架构边界（Python 唯一实现核心逻辑），建议安排专项评审会议推进决策。
- **[PR #5152](https://github.com/HKUDS/nanobot/pull/5152) — Subagent 部分完成结果标记（7/28 创建）**：修复子代理结果宣布时未标记剩余运行中任务、模型可能误判完成状态的问题，持续更新 17 天未见合并，属可靠性改进，建议优先审查。
- **5 条标记 `conflict` 的 PR**（#5356、#5358、#5340、#5371、#5382、#4689 等）：多条集中在 WebUI 会话管理层，互相之间及与 main 分支存在冲突，建议维护者按功能域分批处理，避免冲突持续累积导致合并成本上升。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-15

## 1. 今日速览

今日 Hermes Agent 仓库保持极高活跃度：24 小时内 50 条 Issue 和 50 条 PR 更新，其中约一半已关闭/合并（29 条 Issue、24 条 PR 关闭），项目推进节奏强劲。无新版本发布，但社区与维护者协同修复了大量历史积压问题——近 20 个 PR 均为对既有 Issue 的修复落地（含多个 salvage/cherry-pick 合并），覆盖 Windows/macOS 桌面端更新、会话状态持久化、压缩（compression）连续性、Gateway 消息投递等核心稳定性领域。**值得关注**：多条涉及桌面端更新与重启后 Gateway 丢失的 P1 级回归问题在今日集中出现修复 PR，表明维护团队正在系统性攻坚桌面端稳定性。仓库当前面临的共性挑战集中在**会话状态管理**（session-state）与 **Windows 平台兼容性**两个风险域。

---

## 2. 版本发布

今日无新版本发布。近期最新版本为 **Hermes 0.20.0**（桌面端，参考 Issue #83683 环境说明）与 **v0.19.1**（2026-08-03，参考 #78069、#79244 环境说明）。

---

## 3. 项目进展

今日合并/关闭的关键 PR 展现了项目在多个维度的推进：

**会话与压缩连续性（核心修复）**
- **[#86666](https://github.com/NousResearch/hermes-agent/pull/86666)（已合并）**：修复压缩后会话交接失败问题（对应 Issue #82001）——压缩关闭会话时，若客户端仍在写入，agent turn 将不再报误导性的 "full disk" 错误，改为采纳实时续接点（live continuation tip）。
- **[#86668](https://github.com/NousResearch/hermes-agent/pull/86668)（已合并）**：Delegate 子代理不再借用父代理的 SessionDB 句柄，改为在父代理 db_path 下打开独立连接（salvage #81605），修复子代理会话数据竞争。

**桌面端与安装更新**
- **[#86674](https://github.com/NousResearch/hermes-agent/pull/86674)（已合并）** / **[#84048](https://github.com/NousResearch/hermes-agent/pull/84048)（已合并）**：修复 Windows 桌面端白屏问题（React error #527，react 19.2.8 与 react-dom 19.2.7 版本不兼容），确保从单一源解析 react/react-dom。
- **[#86687](https://github.com/NousResearch/hermes-agent/pull/86687)（开放）**：Windows/macOS 更新可靠性"诚信列车"——四个修复组合（HEAD 移动门槛、重启中止提示、冷启动验证、自锁防御），整体覆盖了 #63717 中诊断的多个相关根因。

**Gateway 与适配器**
- **[#86664](https://github.com/NousResearch/hermes-agent/pull/86664)（已合并）**：修复 weixin/email 适配器经本地 HTTP 代理（如 Clash）轮询时泄漏 TCP socket 的问题（对应 #79889），macOS 256 软 fd 限制下 216 个 fd 被代理连接占满的极端场景得到解决。
- **[#41761](https://github.com/NousResearch/hermes-agent/pull/41761)（已合并）**：Windows Gateway 崩溃后通过计划任务自动重生，确保 cron 继续触发（对应 #41662）。

**插件与打包**
- **[#86670](https://github.com/NousResearch/hermes-agent/pull/86670)（开放）**：修复发布 wheel/sdist 时丢失插件 manifest（plugin.yaml/plugin.yml）的问题（对应 #82916/#83991）。

**安全边界**
- **[#86701](https://github.com/NousResearch/hermes-agent/pull/86701)（开放）**：1Password 托管的 provider API 密钥将不再落盘到 `~/.hermes`，桌面端与 dashboard 同步感知该状态。

---

## 4. 社区热点

今日讨论最集中的 Issue 揭示了用户对**桌面端会话与会话数据的可靠性**的强烈关注：

- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)（32 评论）**：Skills 索引过期（29.8h 超 26h 上限）——自动化探针持续告警。属于仓库自检系统发现的基础设施健康问题，虽非用户直接反馈，但评论数最多侧面反映维护者对 meta 层面的持续关注。
- **[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)（30 评论，P1）**：Windows 桌面端重启后杀死 Gateway 但不重启（WeChat/QQ/Telegram 全部静默）——**回归问题**，直接影响多平台消息触达。社区反馈强烈，今日已有两个修复 PR 竞争（#86658 与 #86702，#86702 明确对 #86658 提出 critque 并给出差异化方案）。
- **[#63047](https://github.com/NousResearch/hermes-agent/issues/63047)（28 评论，已关闭）**：macOS 27 beta 桌面端约 5 条消息后完全无响应（含设置界面）——在今日关闭，说明修复已合入。
- **[#52010](https://github.com/NousResearch/hermes-agent/issues/52010)（20 评论，P2 开放）**：macOS 每次桌面端更新后 Full Disk Access 被撤销，需手动重新授权。持续 2 个月未解决，用户反复催办。

**分析**：今日讨论热度前三均指向桌面端体验相关的稳定性问题，且其中两件（#83683、#63047）已有关联修复合入或开放（#86658/#86702、#86674）。这显示维护团队正将桌面端作为当前优先攻坚方向，但 #52010 这类权限持久化问题仍需关注。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃/关闭的 Bug：

**P1 级（严重，影响核心功能）**

| Issue | 标题 | 状态 | 是否有修复 PR |
|---|---|---|---|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | 桌面端重启杀死 Gateway 不重启（回归） | 开放 | ✅ #86658（开放）/ #86702（开放） |
| [#85756](https://github.com/NousResearch/hermes-agent/issues/85756) | session_search 发现逻辑屏蔽当前 /new-reset 血缘所有命中（Gateway 召回失明） | 已关闭 | ✅（合入） |
| [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | 压缩后 agent flush 不采纳续接点，误导 "full disk" | 已关闭 | ✅ #86666（已合并） |
| [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) | DeepSeek 500k token 会话反复压缩挂起后永久死亡 | 开放 | ❌ 无明确 PR |
| [#84718](https://github.com/NousResearch/hermes-agent/issues/84718) | 压缩保留命令丢弃策略：skills 中途被剪、todos 逐字注入 | 开放 | ❌ 无明确 PR |
| [#83420](https://github.com/NousResearch/hermes-agent/issues/83420) | Windows 桌面端窗口隐藏/遮挡时静默冻结 | 开放 | ❌ 无明确 PR（#86658 相关） |

**P2 级（中等，功能受限）**

| Issue | 标题 | 状态 | 是否有修复 PR |
|---|---|---|---|
| [#54189](https://github.com/NousResearch/hermes-agent/issues/54189) | state.db 无界增长（2 周 659MB，938 sessions/40K messages），无清理机制 | 开放 | ❌ |
| [#58619](https://github.com/NousResearch/hermes-agent/issues/58619) | 桌面端重连后无限产生 serve 进程，旧进程不清理 | 开放 | ❌ |
| [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) | macOS FDA 权限每次更新后被撤销 | 开放 | ❌ |
| [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) | Windows 更新失败——7 个相关根因综合诊断 | 开放 | ✅ #86687（开放） |
| [#72046](https://github.com/NousResearch/hermes-agent/issues/72046) | state.db 损坏时桌面端静默显示空/部分会话 | 开放 | ❌ |
| [#86664](https://github.com/NousResearch/hermes-agent/pull/86664) 对应 [#79889](https://github.com/NousResearch/hermes-agent/issues/79889) | weixin/email 适配器 socket 泄漏 | 已关闭 | ✅ #86664（已合并） |

**关键观察**：#78981（DeepSeek 长会话永久死亡）、#84718（压缩策略破坏）、#54189（state.db 无界增长）三个涉及会话生命周期管理的开放问题未见明确修复 PR，且均为用户深度使用场景下的痛点，建议维护团队优先安排。

---

## 6. 功能请求与路线图信号

今日开放的功能相关 PR/Issue 释放了以下路线图信号：

- **密钥安全边界（高概率纳入下版本）**：**[#86701](https://github.com/NousResearch/hermes-agent/pull/86701)**（1Password 密钥不落盘）已在今日开放 PR，且标记为 P3 + 安全边界风险域。考虑到安全类特性通常优先级较高，预计可进入 0.21 版本。
- **更新流程透明化**：**[#86699](https://github.com/NousResearch/hermes-agent/pull/86699)**（开放）修复版本升级时静默变更用户配置的问题（对应 #86656）——版本升级中若有 migration 重置了用户设置，更新时将明确提示。这反映了用户对"升级不丢失配置"的强烈诉求。
- **自定义 provider context_length 统一生效**：**[#75738](https://github.com/NousResearch/hermes-agent/pull/75738)**（开放，P2，8/1 创建）——custom_providers 的 context_length 配置在除 agent 启动外的多个调用路径失效。该 PR 已开放 2 周，标记为 blast-moderate，虽非今日新增，但若合入将改善多 provider 场景体验。

---

## 7. 用户反馈摘要

从今日活跃 Issues 评论中提炼的用户声音：

**痛点与挫败感**
- **桌面端重启丢 Gateway 导致消息静默**（#83683）让多名用户在评论中表达了急切："WeChat/QQ 全部失联直到手动重启，这在生产环境不可接受。"（作者 zuowen7）
- **macOS 权限反复撤销**（#52010）评论中用户表示"每次更新后都要去系统设置手动授权，已经成了肌肉记忆，但这本不该由用户承担"。
- **压缩后上下文丢失造成"记忆错乱"**（#84718）暴露了压缩策略的深层矛盾——"agent 仍在执行 todo 中的任务，但已失去了支撑该任务的 skills 指令和推理依据"。
- **误导性错误消息**（#82001）中用户 Al3xand3r1987 指出"明明磁盘健康，却被告知 'often full disk'，这直接误导了排障方向"。

**使用场景与诉求**
- **长会话（500k tokens）场景**（#78981）说明用户在真实业务中已重度使用 DeepSeek 大上下文窗口，"132 tool turns 的会话一旦死亡即全部工作丢失"，对会话恢复能力有强烈需求。
- **Windows 更新质量**（#63717、#80926、#82168）呈现了 Windows 用户群对 1-click 更新体验的密集吐槽，多篇诊断报告详尽列出了根因链，体现社区愿意配合调试的积极性。
- **memory/session 召回**（#85756）中 Gateway 用户（QQ/Telegram 群聊）反馈 `/new` 之后的 session_search 全面失效，说明多平台用户已依赖该功能进行知识回溯。

**积极信号**
- 多个旧 Issue（#63047 28 条评论、#69592 13 条评论、#78069、#64335 等）在今日/近期关闭，修复已合入，用户侧挫败感有望缓解。

---

## 8. 待处理积压

以下为长期未获得明确修复信号的**重要**开放条目，建议维护者优先跟进：

| 条目 | 创建时间 | 持续时间 | 风险等级 | 备注 |
|---|---|---|---|---|
| [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) macOS FDA 权限反复撤销 | 2026-06-24 | ~8 周 | P2 | 20 评论持续催办，无 PR |
| [#54189](https://github.com/NousResearch/hermes-agent/issues/54189) state.db 无界增长 | 2026-06-28 | ~7 周 | P2 | 8 评论，2 👍，无 PR；涉及会话生命周期核心机制 |
| [#58619](https://github.com/NousResearch/hermes-agent/issues/58619) 桌面端 serve 进程无限累积 | 2026-07-05 | ~6 周 | P2 | 9 评论，无 PR |
| [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) DeepSeek 长会话压缩后永久死亡 | 2026-08-05 | 10 天 | P1 | 5 评论，无 PR；高风险场景 |
| [#84718](https://github.com/NousResearch/hermes-agent/issues/84718) 压缩保留命令丢弃策略 | 2026-08-12 | 3 天 | P1 | 新开但语义严重，无 PR |
| [#75738](https://github.com/NousResearch/hermes-agent/pull/75738) custom_providers context_length 未全局生效 | 2026-08-01 | 2 周 | P2 | PR 已开放待 review，持续未合并 |
| [#78063](https://github.com/NousResearch/hermes-agent/pull/78063) 空 tool_calls 导致 DeepSeek HTTP 400 | 2026-08-03 | 12 天 | P2 | PR 开放中，标记 duplicate，需维护者确认方案 |

**风险提示**：关于 #83683 的两个竞争 PR（#86658 与 #86702）均开放且 #86702 明确对 #86658 提出技术批判，维护团队应尽快仲裁合并方案，避免修复延迟导致该回归问题持续影响 Windows 用户。

---

*日报生成时间：2026-08-15 | 数据来源：NousResearch/hermes-agent GitHub 仓库公开数据*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-15

## 1. 今日速览

PicoClaw 项目过去 24 小时活跃度中等偏上：新增/活跃 Issue 1 条、关闭 2 条；PR 侧 4 条待合并、5 条已合并/关闭，合并节奏正常。核心亮点是一个直接针对已上报 Bug（#3269）的修复 PR（#3337）已于今日提交，修复链路清晰。Dependabot 自动升级 PR 与多条早期 PR 被标记为 stale 并关闭，项目维护者正在主动清理长期未合并的贡献。项目健康度整体良好，但需关注 4 条已 open 的 PR（其中 3 条标记 stale）的合并决策。

## 3. 项目进展

今日无新版本发布，主要进展体现在 PR 合并与提交层面：

- **✅ #3337 Fix/mcp failure hangs agent loop**（Open，今日新建）：针对 Issue #3269 的修复 PR，当 MCP 服务器连接失败时，`AgentLoop.Run` 不再因 `ensureMCPInitialized` 错误直接退出，避免聊天界面完全无响应。修复思路正确，可直接回应该 Bug。
- **✅ #3283 fix(dingtalk): support picture/image message inbound**（Closed/stale）：为钉钉渠道新增图片消息接收能力，含 OpenAPI token 缓存、图片下载与优雅降级处理。
- **✅ #3279 fix(seahorse): prevent tool-call format leakage into LLM summaries**（Closed/stale）：修复 seahorse 的 `partsToReadableContent` 将工具调用格式泄漏进用户消息的同类 Bug。
- **✅ #3270 feat: add DashScope TTS provider and WeChat audio file sending**（Closed/stale）：新增阿里云百炼 DashScope TTS 语音合成 Provider，并支持微信公众号/企业微信发送音频文件。
- **✅ #3271 chore(providers): update default model names to 2026-07 latest**（Closed/stale）：刷新 9 家 AI Provider 的默认模型名至 2026 年 7 月最新版本（如 OpenAI gpt-5.6 系列），避免默认模型失效。

> ⚠️ 以上 4 条标记为 stale 的 PR 虽已关闭，但状态为 "Closed [stale]"（非 merged），需确认是合入后标记还是直接关闭，若为后者，上述功能可能未进入主干。

## 4. 社区热点

**🔥 Issue #3269 [OPEN] MCP 连接失败导致 agent 循环挂起**
作者: ruiyigen | 评论: 5 | 👍: 1 | [链接](https://github.com/sipeed/picoclaw/issues/3269)

- **诉求分析**：这是今日社区关注焦点。用户报告当 MCP（Model Context Protocol，模型上下文协议）服务器连接失败时，agent 循环会挂起，导致 Picoclaw 聊天界面完全停止回复。环境为 nightly 版本（git 2cf030d2）+ Go 1.25.11 + Qwen3 模型。该问题直接影响用户体验的可靠性，已获得 5 条评论讨论；社区响应迅速，PR #3337 已于 8 月 14 日提交修复。
- **【今日最热】** 该 Issue 与 PR #3337 形成完整的"发现→修复"闭环，是今日项目健康度的关键信号。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败 → agent 循环挂起 → 聊天界面停止回复 | Open，已有修复 PR #3337（待审查合入） |
| 🟡 中 | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | 代码审查指出 SeaHorse/Channel Manager/Hooks 存在并发隐患、goroutine 泄漏与内存/速度优化空间 | Closed [stale]（非 Bug，审查建议） |

**其他已修复 Bug（PR 侧）**：
- `exec` 工具忽略单次运行 timeout 参数、`background`/`pty` 类型声明错误 —— PR #3319（Open，待合并）
- seahorse 摘要中工具调用格式泄漏进用户消息 —— PR #3279（Closed [stale]）

## 6. 功能请求与路线图信号

**功能请求类 Issue：**

- **Issue #3307 [Closed/stale]**：[请求 Telegram 及其他聊天渠道增加会话列表/切换命令](https://github.com/sipeed/picoclaw/issues/3307)。当前仅 Web UI 提供完整会话管理（历史下拉菜单），Telegram 等渠道用户无法列出或切换会话。该功能与项目多渠道战略直接相关，若被采纳很可能进入下一版本。

**已有功能型 PR（本期提交/合并）：**

- DashScope TTS + 微信语音发送（#3270）——音频能力横向扩展
- 模型默认回退链（#3200，Open）——Web UI 可配置默认模型级联回退
- 钉钉图片消息接收（#3283）——钉钉渠道能力补全

**路线图信号**：项目正在快速补齐多渠道（Telegram/DingTalk/WeChat）能力和 TTS 语音交互，同时通过 stale 清理机制合并/关闭早期 PR，说明维护者正在集中精力推进核心渠道稳定性和音频能力，下一版本可能包含会话管理跨渠道统一与 TTS 能力。

## 7. 用户反馈摘要

- **🌐 #3269（MCP 挂起）**：用户反馈 Picoclaw 在 MCP 连接失败时"完全停止回复"，是直接影响日常使用的可靠性问题。该反馈来源于实际使用 nightly 版本的场景，非理论推测，值得优先修复。
- **💻 #3308（并发审查）**：社区开发者对 PicoClaw 的 SeaHorse、Channel Manager 和 Hooks 模块做了详细 Code Review，肯定了项目"在 $10 硬件上以 <10MB RAM 和亚秒级启动运行原生 Go AI 助手"的工程成就，同时指出并发隐患与 goroutine 泄漏风险，体现社区对项目质量有较高期待。
- **👨‍🔬 #3307（跨渠道会话管理）**：用户明确指出 Web UI 与 Telegram 之间功能不对等——桌面端可轻松管理会话，移动聊天渠道却不行，反映出多端体验一致性是用户的核心诉求之一。

## 8. 待处理积压

> ⚠️ 以下均为 marked as `stale` 且仍 Open 的 PR，未获维护者明确响应，建议尽快处理：

| PR | 标题 | 待处理时长 |
|----|------|-----------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | 自 2026-07-01 起 Open，44 天未合并 |
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | fix(tools): honor exec timeout and boolean run options | 自 2026-08-07 起 Open，已接近 stale 阈值 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation, documentation -200LOC | 自 2026-07-03 起 Open，43 天未合并 |

其中 #3200 与 #3319 直接影响用户体验（模型回退链 & exec 工具正确性），建议维护者在 stale bot 自动关闭前尽快审查；#3222 为纯重构（-200LOC），风险可控，应尽快决策。

---

*数据来源：[sipeed/picoclaw GitHub 仓库](https://github.com/sipeed/picoclaw)，统计窗口 2026-08-14 ~ 2026-08-15。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-08-15

## 1. 今日速览

NanoClaw 项目在过去 24 小时保持较高的开发活跃度，共 2 条新开 Issues 和 11 条 PR 更新（其中 3 条已关闭/合并）。焦点集中在**安装脚本健壮性**（Node 版本检测、Bun AVX2 兼容性）、**容器运行时跨平台问题**（Windows 修复）以及**调度系统容错**。安全团队连续进行了签名验证器的“实弹演练”（PR #3242/#3244），表明供应链安全流程正进入测试验证阶段。无新版本发布，整体项目状态健康，维护节奏正常。

## 3. 项目进展

**今日无常规 PR 被正式合并**，3 条已关闭 PR 均为核心团队的安全流程测试：

- **[#3243] [CLOSED] verify-agent-image: arming auto-merge is not a verdict**（gavrielc）— 修复 CI 作业中 `auto-merge` 作为最后一步失败时误判验证结论的问题，将 `verify` 设为必需检查。这是对签名验证流水线的实质性改进。
- **[#3242] [CLOSED] [core-team] DO NOT MERGE — 签名批准器实弹演练**（gavrielc）— 测试完整验证链：verify → approve-agent-image → 独立 cosign 验证 → 批准审查。按计划关闭未合并。
- **[#3244] [CLOSED] [core-team] DO NOT MERGE — 签名批准器实弹演练（第二轮）**（gavrielc）— 基于 #3243 的修复后重新测试，确认验证流程在 draft PR 上可正常通过。

> 关注点：今日无面向用户的功能/修复 PR 实际合入主干，8 个待合并 PR 的积压值得注意（见第 8 节）。

## 4. 社区热点

今日活跃讨论集中在两类问题上：

1. **旧 Node 版本的安装失败问题**（[Issue #3248](https://nanocoai/nanoclaw Issue #3248)）—— `setup.sh` 对“Node 缺失”和“Node 过旧”两个分支都引导到 `install-node.sh`，但该脚本对已存在的任何 Node 版本都会短路跳过安装，导致过旧 Node 无法被修复。**作者 glifocat 已同步提交修复 PR（#3249）**，问题响应迅速。

2. **预构建镜像的 Bun 二进制 AVX2 依赖问题**（[Issue #3245](https://nanocoai/nanoclaw Issue #3245)）—— 向导推荐的 `NANOCLAW_HARDENED_IMAGE=true` 预构建镜像包含需要 AVX2 指令集的 Bun 二进制，在 Intel Tremont/Elkhart Lake 等无 AVX2 的 Atom 处理器（如 Celeron J6413/N5105）上会触发 SIGILL。这会影响低功耗 NAS/软路由等场景的用户部署。

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 说明 |
|---|---|---|---|
| **高** | [#3245](https://nanocoai/nanoclaw Issue #3245) Bun 二进制需 AVX2 → SIGILL | 待处理，暂无对应 PR | 预构建 agent 镜像在无 AVX2 的 CPU 上直接崩溃，设置向导默认推荐此镜像，影响面较大 |
| **中** | [#3248](https://nanocoai/nanoclaw Issue #3248) 过旧 Node 无法被 `install-node.sh` 修复 | 已有 PR [#3249](https://nanocoai/nanoclaw PR #3249) | 版本检查逻辑与安装脚本行为不一致，导致错误分支无法恢复 |

另有 2 个已提交修复的稳定性 PR（待合并）：

- **[#3247](https://nanocoai/nanoclaw PR #3247) fix(scheduling)**：畸形 cron 字符串（如 `0 21-5 * * *`）导致每次调度扫描重复报错，现改为直接作废该记录。
- **[#3246](https://nanocoai/nanoclaw PR #3246) fix(container-runtime)**：`cleanupOrphans()` 在 Windows 上因 POSIX 单引号被 `cmd.exe` 透传而静默失效，孤儿容器清理在 Windows 上长期未生效。

## 6. 功能请求与路线图信号

- **Dial 渠道支持（SMS + AI 语音通话）**：PR [#3041](https://nanocoai/nanoclaw PR #3041)（渠道适配器）与 [#3050](https://nanocoai/nanoclaw PR #3050)（安装向导集成）均为 7 月 14 日提交、今日仍有更新的 Feature PR。两个 PR 配合实现从渠道适配器到 `runChannelSkill` 模型的完整接入，时间线较长、属于重量级新功能，值得关注是否进入下一版本。
- **入站附件处理改进**：PR [#2427](https://nanocoai/nanoclaw PR #2427)（attachment 修复，5 月提交）与 [#2752](https://nanocoai/nanoclaw PR #2752)（Discord 仅 URL 附件暂存，6 月提交）—— 后者解决了 Discord 附件（粘贴文本转 `message.txt`、图片）永远无法以可读形式到达 agent 的问题。两者均长期未合并，是社区持续关注的功能缺口。

## 7. 用户反馈摘要

- **安装体验痛点**（[#3248](https://nanocoai/nanoclaw Issue #3248)）：用户在使用旧版 Node 环境时，安装脚本给出“Node 过旧”的提示却无法实际修复，形成死循环。反映出 setup 向导在边缘环境（低版本 Node）下的鲁棒性需要加强。
- **低端硬件兼容性顾虑**（[#3245](https://nanocoai/nanoclaw Issue #3245)）：有用户在无 AVX2 的 Intel Atom 平台（J6413/N5105）上部署失败，说明**预构建镜像的 x64 基线未覆盖老旧/低功耗 CPU**，这是自托管用户群体中常见的硬件环境，有一定的普遍性。

## 8. 待处理积压

| 类型 | 编号 | 提交时间 | 备注 |
|---|---|---|---|
| PR | [#2427](https://nanocoai/nanoclaw PR #2427) fix: attachment issues | 2026-05-12 | 等待超 3 个月，今日仍有更新，需维护者关注 |
| PR | [#2752](https://nanocoai/nanoclaw PR #2752) Discord 附件暂存修复 | 2026-06-12 | 等待超 2 个月，功能缺口明确，需维护者关注 |
| PR | [#3041](https://nanocoai/nanoclaw PR #3041) / [#3050](https://nanocoai/nanoclaw PR #3050) Dial 渠道 | 2026-07-14 | 功能完整、跟随指南，等待超 1 个月，建议明确合并计划 |

> 提示：目前 8 个待合并 PR 中，有 4 个提交超过 1 个月且包含明确的功能或修复价值，建议维护者安排审查排期，避免社区贡献者流失。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

NullClaw 项目今日活跃度处于**低水平**：过去 24 小时内无新 Issue 和 Issue 更新，无新版本发布，仅有 1 条 PR 被关闭（#986）。该 PR 为 SQLite 内存数据库路径可配置化的功能改进，已被合并/关闭，属于配置灵活性方面的小步推进。整体而言，项目今日处于平稳状态，社区互动较少，无 Bug 报告和功能请求涌入，健康度良好但活跃度偏低。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**PR #986 已关闭 — GEN-548: make SQLite memory database path configurable**  
[GitHub 链接](https://github.com/nullclaw/nullclaw/pull/986) | 作者: gently-whitesnow | 创建/更新: 2026-08-14

该 PR 为基于 SQLite 的主记忆引擎增加了 `memory.database_path` 配置项，具体改动包括：

- 新增 `memory.database_path` 配置，允许用户自定义 SQLite 记忆数据库的存储路径
- 当该配置为空时，保持原有 `<workspace>/memory.db` 默认位置不变（向后兼容）
- 相对路径从工作区（workspace）目录解析，同时支持绝对路径，以适应只读工作区部署场景
- 已在文档中补充该配置项的说明

**项目意义**：此改动提升了 NullClaw 在受限部署环境（如只读文件系统）中的可用性，使记忆存储位置更加灵活，是配置层面向生产环境友好方向迈出的一小步。

## 4. 社区热点

今日无高互动、高评论的 Issues 或 PRs。唯一的 PR #986 评论数未记录（undefined），点赞数为 0，未形成明显社区讨论。社区整体互动冷淡。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告。

## 6. 功能请求与路线图信号

今日无新的功能请求。结合既有 PR #986 来看，**部署环境适配性**（如只读工作区、路径可配置）是当前正在推进的方向，该功能已合入，未来可能在下一版本（若发布）中与用户见面。建议关注后续是否有更多围绕部署灵活性和配置可扩展性的需求出现。

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼，无真实用户痛点或使用场景反馈。唯一值得注意的信号来自 PR #986 本身——其动机（支持只读工作区部署、允许绝对路径）暗示部分用户运行在受限文件系统环境中，但具体用户声音未在今日数据中体现。

## 8. 待处理积压

今日数据中无长期未响应的 Issue 或 PR 需要提醒关注。当前积压状态良好，无明显的遗留未处理事项。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-15

## 1. 今日速览

IronClaw 过去 24 小时保持高强度开发节奏：共 30 条 Issue 更新（21 条活跃/新增，9 条关闭）、47 条 PR 更新（25 条待合并，22 条已合并/关闭）。核心进展集中在 **unbound-turns 模型切换的收尾工作**（#7634/#7562 系列）、自动化编排的可靠性加固（#6879 epic 下多条子任务）以及 Telegram/Slack 集成层的修复与诊断改进。值得关注的是，大量 Issue 由 PR #7634 的 code review 引出，说明核心 PR 正在接受深度审查。今日无新版本发布。项目整体处于 **v1.3.0 特性开发与 QA 修复并行的冲刺阶段**，社区贡献活跃，健康度良好。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#7562](https://github.com/nearai/ironclaw/pull/7562) | feat(unbound-turns): design + phase 1 — prepared-context accept door, unbound run lane, kernel binding-ref deletion | ✅ 已关闭 | **unbound-turns 基础落地**。该 PR 从两份设计文档扩展为包含完整 phase-1 实现（#7633 squash 合并），为无绑定轮次模型铺平道路。 |
| [#7665](https://github.com/nearai/ironclaw/pull/7665) | fix(auth): support origin-scoped hosted MCP OAuth | ✅ 已关闭 | 支持 MKT1 场景的 hosted-MCP OAuth 形状（HTTPS `/mcp` 端点 + RFC 9728 裸源），并贯穿 DCR、token exchange、refresh 全链路。 |
| [#7668](https://github.com/nearai/ironclaw/pull/7668) | fix(extensions): surface provider auth diagnostics | ✅ 已关闭 | 扩展认证诊断信息全链路透传，运行时 401 不再被折叠为泛化重认证提示。 |
| [#7652](https://github.com/nearai/ironclaw/pull/7652) | perf(stress): measure production DB write workloads | ✅ 已关闭 | 完成生产级 DB 写负载测量（单次 agent turn + 长驻空闲进程两个场景），为 DB 写压力 epic（#7591）提供基线数据。 |
| [#7658](https://github.com/nearai/ironclaw/pull/7658) | fix(telegram): recognize the 2FA gate on migrated DCs and say where login codes arrive | ✅ 已关闭 | 修复 Telegram 链接设备两大致命缺陷：2FA 账户 QR 扫码引导 + 迁移 DC 场景下登录码提示位置。 |
| [#7666](https://github.com/nearai/ironclaw/pull/7666) | fix(extensions): tell the truth on cards and install results (QA #7660 + install guidance) | ✅ 已关闭 | 扩展卡片状态与安装结果真实性修复。 |
| [#7655](https://github.com/nearai/ironclaw/pull/7655) | fix(ci): re-pin slack/telegram integration coverage floors to observed reality | ✅ 已关闭 | 将 CI 覆盖率门槛重新锚定到实际观测值，消除虚假的红灯。 |

### 整体评估

多个核心 PR 的合并标志着 **unbound-turns 模型完成设计→实现的闭环**，同时自动化调度（#6879 epic）的多个子任务（#7447/#7645/#7646/#7651）正在稳定推进。DB 写压力基线测试完成，为后续优化提供了量化依据。

---

## 4. 社区热点

### 最受关注：PR #7634 — unbound-turns 切换收尾

- **链接**: [PR #7634](https://github.com/nearai/ironclaw/pull/7634)
- **状态**: 待合并，24 小时内产生 **9 个新 Issue**（#7671-#7674 等均来自该 PR 的 review threads），是目前项目最大的审查焦点
- **诉求分析**: 社区对该 PR 的深度审查暴露了从架构边界（#7674 符号级依赖白名单）到具体实现缺陷（#7673 BudgetLedger 重复计费、#7672 ToolChoice 类型设计）的多个改进方向，体现了对架构质量的严格追求。

### Issue #6879 — 自动化运行的可靠性问题

- **链接**: [Issue #6879](https://github.com/nearai/ironclaw/issues/6879)（epic，v1.3.0）
- **评论**: 1 条，但作为 epic 已派生出 **至少 8 个跟踪子任务**（#7532、#7644、#7645、#7646、#7647、#7651 等），是当前开发资源最集中的方向
- **诉求分析**: 核心痛点是无人在场调度运行的质量不可控——模型噪声、触发→运行管道结构性问题、缺乏确定性抑制机制。社区通过"结构化执行契约"方案系统性解决，而非简单地换更大的模型。

### 新增 QA Bug（bug_bash_P2）

- **[#7660](https://github.com/nearai/ironclaw/issues/7660)** Slack 连接状态显示错误（已修复，见 PR #7666）
- **[#7662](https://github.com/nearai/ironclaw/issues/7662)** Telegram MP4 附件 MIME 类型错误
- **[#7659](https://github.com/nearai/ironclaw/issues/7659)** 扩展安装状态跨用户泄漏（隐私相关，需优先关注）

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高（数据一致性） | [#7662](https://github.com/nearai/ironclaw/issues/7662) | Telegram MP4 附件上传报 `invalid_value (attachments.mime_type)`，即使文件确认为 `video/mp4` | ❌ 无 |
| 🔴 高（隐私） | [#7659](https://github.com/nearai/ironclaw/issues/7659) | 其他用户安装的扩展对当前用户可见，扩展状态跨用户泄漏 | ❌ 无 |
| 🟠 中 | [#7660](https://github.com/nearai/ironclaw/issues/7660) | Slack 已连接却显示 "Reconnect"/"Finish Setup" | ✅ 已修复（PR [#7666](https://github.com/nearai/ironclaw/pull/7666) 已合并） |
| 🟠 中 | [#7667](https://github.com/nearai/ironclaw/issues/7667) | Telegram 手机模式登录码未送达（`PHONE_MIGRATE_1` 迁移 DC 场景） | ✅ 已修复（PR [#7658](https://github.com/nearai/ironclaw/pull/7658) 已合并） |
| 🟠 中 | [#7675](https://github.com/nearai/ironclaw/issues/7675) | `qa_6c_gmail_to_sheet_live_chat` E2E 测试间歇性资源类能力失败，级联影响整个 provider-contracts 会话 | ❌ 无 |
| 🟡 低 | [#7671](https://github.com/nearai/ironclaw/issues/7671) | Capability dispatch 栈压力：kernel sandbox 路径仍在测试栈上限边缘（`f1f396cd8` 已盒装化部分委托） | 🔄 部分修复 |
| 🟡 低 | [#7673](https://github.com/nearai/ironclaw/issues/7673) | BudgetLedger 截断启动窗口双重计费 | ❌ 无（保守方向，可择期） |

---

## 6. 功能请求与路线图信号

### 高概率进入 v1.3.0 的功能（已有对应 PR 或明确版本标记）

| 功能 | 链接 | 信号强度 |
|---|---|---|
| **可插拔记忆系统（MCP 绑定）** | Issue [#7664](https://github.com/nearai/ironclaw/issues/7664)，PR [#7661](https://github.com/nearai/ironclaw/pull/7661)（draft） | 🔥 强 — 首个消费方 Mnesis Core 已确定，提供方 crate 已起草 |
| **自动化：确定性静默交付** | Issue [#7647](https://github.com/nearai/ironclaw/issues/7647)，PR [#7651](https://github.com/nearai/ironclaw/pull/7651) | 🔥 强 — PR 已提交，要求显式选择 `deliver`/`suppress` |
| **自动化：LLM 模型固定** | Issue [#7645](https://github.com/nearai/ironclaw/issues/7645) | 🔥 强 — v1.3.0 计划内，防止默认模型变更影响调度输出 |
| **自动化：调度前验证** | Issue [#7644](https://github.com/nearai/ironclaw/issues/7644) | 🔥 强 — v1.3.0 计划内，语义判定复用既有评估器 |
| **自动化：预检授权 + 长期审批租约** | Issue [#7646](https://github.com/nearai/ironclaw/issues/7646) | 🔥 强 — v1.3.0 计划内 |
| **WebUI 结构化 Ask User 卡片** | Issue [#7653](https://github.com/nearai/ironclaw/issues/7653) | 🟡 中 — OMP 启发，非阻塞式门控设计 |
| **ACP harness 执行器（v0）** | Issue [#7624](https://github.com/nearai/ironclaw/issues/7624)，PR [#7648](https://github.com/nearai/ironclaw/pull/7648)（experimental） | 🟡 中 — 当前唯一可构建的 pluggable-loops 工作项 |
| **Slack-to-Console 桥接** | Issue [#7656](https://github.com/nearai/ironclaw/issues/7656)（已关闭） | ⚪ 已关闭，后续可能重新开启 |

### 需要关注的新信号

- **Typed ToolChoice（#7672）**：从 #7634 review 沉淀，涉及全部 6 个 provider encoder。属于技术债清理，短期不会单独发布，但为长期架构健康铺路。
- **符号级依赖白名单测试（#7674）**：crate 级边界测试不够细，需要 pin 到 symbol 级别。标志着项目架构治理进入更精细阶段。

---

## 7. 用户反馈摘要

- **DOCX 文件损坏（Issue [#6869](https://github.com/nearai/ironclaw/issues/6869)，已关闭）**：用户 Davin Basi 反馈 IronClaw 生成的批注版 NDA 在 Word 中无法打开（两次尝试均失败，一次为协议违规中断）。ChatGPT 和 Claude 可以轻松完成同样任务。该 Issue 今日已关闭，但关闭原因未注明（需要确认是否已修复或降级处理）。
- **终端用户模型选择诉求（Issue [#7183](https://github.com/nearai/ironclaw/issues/7183)，已关闭）**：来自 IronClaw Champions 周会（营销团队 Jeremy Koch 提出），管理员 Tobias 拥有唯一模型选择权，用户无法自主切换。该问题今日关闭，建议关注是否通过 v1.3.0 的用户级模型选择功能解决。
- **自动化的不可靠性（Issue [#6879](https://github.com/nearai/ironclaw/issues/6879)）**：用户（serrrfirat）指出同一存储的 prompt 有时成功有时什么也不产出，特别是在小模型（DeepSeek V4 Flash）上。审计确认这是**结构性管道问题**而非模型噪声——触发触发后以普通交互式聊天轮次执行，信号被后文截断。这是用户最直观感知到的问题："hit-or-miss"。

---

## 8. 待处理积压

### 长期未响应的重要 Issue/PR

| 项目 | 链接 | 创建时间 | 待处理天数 | 说明 |
|---|---|---|---|---|
| PR #7255 | [docs(governance): evaluate the APDD kit](https://github.com/nearai/ironclaw/pull/7255) | 2026-08-05 | 10 天 | APDD 治理框架评估与集成提案，文档类 PR，无冲突风险，建议尽快 review |
| PR #7379 / #7378 | [release(docs): deploy public docs from docs-live branch](https://github.com/nearai/ironclaw/pull/7379) / [test(docs): doc-fact contract tests](https://github.com/nearai/ironclaw/pull/7378) | 2026-08-07 | 8 天 | doc-truth 系列 5 个 PR 中的第 3/5 和 4/5，解决文档与发布版本错位问题。等待合并顺序确认 |
| Issue #7669 | [Prepared-marker backfill: move sweep off the listing path](https://github.com/nearai/ironclaw/issues/7669) | 2026-08-14 | 1 天 | 一次性扫目录迁移在首次 list 请求时阻塞，高流量场景可能卡顿。建议排入 sprint |
| PR #7456 | [make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456) | 2026-08-10 | 5 天 | 存储层 profile 无关化改造，含安全信封。长时间无 review，需确认是否被 #7634 系列阻塞 |

### 维护者提醒

1. **#7659（扩展状态跨用户泄漏）** 与 **#7662（MP4 MIME 错误）** 两个 P2 级 QA bug 尚无修复 PR，且 #7659 涉及多用户数据隔离，建议优先排期。
2. **#7675（E2E 级联失败）** 是测试基础设施问题，已阻碍 provider-contracts 会话的可靠性验证，建议尽快定位资源类能力间歇性失败根因。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-15

---

## 1. 今日速览

LobsterAI 今日活跃度较高：24 小时内发布 1 个新版本（2026.8.14），合并/关闭 13 个 PR、关闭 16 个 Issue，整体呈现快速迭代节奏。值得注意的是，今日大量旧 Issue 被 stale 机制批量关闭（16 条中 14 条为历史遗留），其中包含安全漏洞、严重 Bug 等未解决议题，项目维护积压问题依然突出。PR 方面，今日合并工作集中在 Cowork 体验优化、账号积分图标样式调整、技能条目修复等，另有一个大型 Release 分支合并（67 commits，±2.9 万行变更）。CI 依赖升级 PR 积压 5 个待合并。

---

## 2. 版本发布

### LobsterAI 2026.8.14（发布于 2026-08-14）

**更新内容（侧边栏相关）：**

- `feat(sidebar): support check-in and banner carousel` — 侧边栏支持签到与横幅轮播（PR #2411，作者：btc69m979y-dotcom）
- `feat(sidebar): add multi-agent task activity filter` — 侧边栏新增多 Agent 任务活动过滤器（PR #2418，作者：liuzhq1986）
- `feat(sidebar): mov...`（内容截断，无法确认完整变更）

**破坏性变更：** 数据中未标注；建议关注侧边栏相关功能的配置项变更。

**迁移注意事项：** 未提供明确的迁移指南。若用户自定义了侧边栏布局或依赖旧的签到/横幅行为，建议查阅对应 PR 详情。

---

## 3. 项目进展

今日合并/关闭的 PR 推进的主要方向：

| 方向 | PR | 说明 |
|------|-----|------|
| **大型 Release 合并** | [#2498](https://github.com/netease-youdao/LobsterAI/pull/2498) | 合并 `release/2026.7.30` 到 main（67 commits，264 文件，+24,736/-4,253），引入 Team Edition 账号与配额流程，刷新 Skills 与 Connectors 体验 |
| **技能条目键修复** | [#2491](https://github.com/netease-youdao/LobsterAI/pull/2491)、[#2483](https://github.com/netease-youdao/LobsterAI/pull/2483) | 将 `skills.entries` 按 frontmatter name 而非目录 ID 键控，修复 UI 技能开关静默无效问题 |
| **Cowork 体验优化** | [#2499](https://github.com/netease-youdao/LobsterAI/pull/2499) | 保持 turn 进程在产生答案前保持展开，避免空时长线条被误读为失败 |
| | [#2496](https://github.com/netease-youdao/LobsterAI/pull/2496) | 修复 badge popover 超出视口、被后续消息遮挡的问题 |
| | [#2490](https://github.com/netease-youdao/LobsterAI/pull/2490) | 浏览器标注截图以编号附件卡片在 artifact 面板中预览 |
| | [#2493](https://github.com/netease-youdao/LobsterAI/pull/2493) | 修复会话导出图片与卡片切换 UI |
| **账户/UI** | [#2494](https://github.com/netease-youdao/LobsterAI/pull/2494)、[#2492](https://github.com/netease-youdao/LobsterAI/pull/2492) | 更新/对齐积分图标样式，深色/浅色模式适配 |
| | [#2495](https://github.com/netease-youdao/LobsterAI/pull/2495) | 默认 UI/代码字体加大，带一次性迁移 |
| | [#2497](https://github.com/netease-youdao/LobsterAI/pull/2497) | Cowork 目标与 steering 文案 i18n 优化 |
| **Cron 子 Agent 修复** | [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) | 修复 `sessions_yield` 后子 agent 完成事件无法驱动父 agent 继续执行的问题 |

---

## 4. 社区热点

今日讨论最活跃的议题：

1. **[#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) [OPEN] Agent 记忆体系产品建议**（更新于 08-15）
   - 用户 X9-laser 提出了系统性的记忆体系改造建议，核心诉求为：当前 Agent 无法跨 session 感知历史对话，信息丢失严重。
   - 关联信号：Issue #2040、#2041 均围绕记忆系统展开深度讨论，社区对记忆能力不满显著。

2. **[#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) [OPEN] 会员登录频繁失败**（更新于 08-15）
   - 用户无法使用网易付费模型，反馈登录不进去。该 Issue 自 5 月 7 日创建至今仍为 OPEN 状态。

3. **[#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) [CLOSED] 阿里百炼 qwen3.6-plus 被强制替换为网易模型**
   - 用户反馈版本更新后第三方模型被强制指向网易自带模型，修改配置无效。该 Issue 今日被 stale 关闭。

**分析：** 社区讨论重心集中在记忆系统（#2046/#2040/#2041）与会员/模型接入（#1903/#1988），前者反映核心产品能力的诉求，后者涉及商业模型接入的信任问题。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 🔴 高 | [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) | 邮箱 SKILL 路径穿越漏洞：附件名称未过滤，直接拼接下载导致路径穿越 | 今日被 stale 关闭，**无对应 fix PR** |
| 🔴 高 | [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) | 模型强制替换：阿里 qwen3.6-plus 被强制改为网易模型，用户无法使用 coding plan | 今日被 stale 关闭，**无对应 fix PR** |
| 🟠 中 | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 追问时无限 NO_REPLY 或输出几个字即停止：任务被提前 complete 但模型仍在输出 | 今日被 stale 关闭，**无对应 fix PR** |
| 🟠 中 | [#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) | 会话页含超长 Mermaid 元素时滚动异常，虚拟滚动高度剧烈变化导致无限重渲染 | 今日被 stale 关闭，**无对应 fix PR** |
| 🟠 中 | [#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) | 本地运行提示未检测到内置 OpenClaw runtime，无法登录使用 | 今日被 stale 关闭，**无对应 fix PR** |
| 🟠 中 | [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) | 桌面端持续提示 "AI engine connection lost"，IM Bot 连接正常 | 今日被 stale 关闭，**无对应 fix PR** |
| 🟡 低 | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | 微信接口扫码后无法输入验证码，客户端无输入界面 | 今日被 stale 关闭，**无对应 fix PR** |
| 🟡 低 | [#2039](https://github.com/netease-youdao/LobsterAI/issues/2039) | Dreaming 开关上游 bug：配置写入 memory-core 不认的路径，Gateway 重启后配置消失 | 今日被 stale 关闭，**无对应 fix PR** |
| 🟡 低 | [#1920](https://github.com/netease-youdao/LobsterAI/issues/1920)、[#1921](https://github.com/netease-youdao/LobsterAI/issues/1921) | Cowork 初始化空白加载、空状态缺图标等 UI 缺陷 | 今日被 stale 关闭，**无对应 fix PR** |

⚠️ **值得警惕：** 上述多为长期未修复的 Bug，今日在无代码修复的情况下批量关闭，建议维护者核实是否真的已解决或有意关闭。

---

## 6. 功能请求与路线图信号

| 反馈 | Issue/PR | 可能纳入下一版本？ |
|------|----------|-------------------|
| **侧边栏隐藏广告横幅** | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — 新增 Settings → General 永久隐藏广告横幅开关 | ✅ 对应 Issue #2342，已在 PR 中实现，待合并 |
| **Agent 记忆体系** | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) — session 标题/元数据持久化到文件系统；Agent 自动感知历史对话 | ❓ 社区呼声高，但未见对应 PR；Issue #2040/#2041 提供对比分析，建议列入路线图 |
| **增加 Hermes Agent** | [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) — 参照 Open WebUI 将 Hermes Agent 与 OpenClaw 作为 Agent 接入 | ❓ 未见对应 PR |
| **增加 openhuman 引擎** | [#2016](https://github.com/netease-youdao/LobsterAI/issues/2016) | ❓ 未见对应 PR |
| **多 Agent 任务活动过滤** | 已随 2026.8.14 Release 发布（PR #2418） | ✅ 已落地 |
| **签到与横幅轮播** | 已随 2026.8.14 Release 发布（PR #2411） | ✅ 已落地 |

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

**满意/正面：**
- IM Bot 场景下连接稳定（[#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) 用户提到 "If I use IM Bot, the connection is stable"），说明 IM 通道在多数场景可靠性尚可。

**不满意/痛点：**

1. **记忆缺失是最大痛点**（[#2046](https://github.com/netease-youdao/LobsterAI/issues/2046)、[#2041](https://github.com/netease-youdao/LobsterAI/issues/2041)）
   - 用户明确表示："Agent 的记忆目前高度依赖用户手动维护。每个新对话 session 独立存在，Agent 无法自动感知、检索、关联历史对话。这在长时间、跨 session 的使用中导致大量信息丢失和重复劳动。"
   - 另一用户提出："最大的瓶颈不是进化算法，而是记忆系统"，并对照系统实际状态指出"轨迹有，声明式/结构化记忆缺失"。

2. **模型接入被强制替换，信任感下降**（[#1988](https://github.com/netease-youdao/LobsterAI/issues/1988)）
   - "修改配置文件也没用，系统会强制改成错误的。" — 用户对修改被覆盖的行为明显不满。

3. **本地部署门槛**（[#2017](https://github.com/netease-youdao/LobsterAI/issues/2017)）
   - "本地运行登录不了啊，输入不了问题，也建不了任务" — 提示需要先执行打包前构建脚本，对非开发者用户不友好。

4. **UI 设计落后于竞品**（[#1836](https://github.com/netease-youdao/LobsterAI/issues/1836)）
   - "相比起其他竞品过于丑了，用起来不太舒服。" — 用户建议找专业设计重新设计。

5. **会员登录失败阻断付费用户**（[#1903](https://github.com/netease-youdao/LobsterAI/issues/1903)）
   - "会员登录不进去，无法使用网易付费的模型" — 付费用户被阻断，属于高优先级问题。

---

## 8. 待处理积压

以下为长期未响应或今日被 stale 批量关闭但仍需关注的重要事项：

| 项目 | 创建时间 | 状态 | 建议 |
|------|---------|------|------|
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) Agent 记忆体系建议 | 2026-05-25 | OPEN，更新于 08-15 | 社区核心诉求，建议纳入路线图并回应 |
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) 会员登录频繁失败 | 2026-05-07 | OPEN，更新于 08-15 | 付费用户阻断问题，急需处理 |
| [#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) 邮箱 SKILL 路径穿越漏洞 | 2026-05-06 | 今日被 stale 关闭，无 fix | 🔴 **安全漏洞被关闭，建议立即重新开启并评估影响** |
| [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) 模型强制替换 | 2026-05-15 | 今日被 stale 关闭，无 fix | 涉及用户模型所有权问题，建议重新开启 |
| [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) 追问无限 NO_REPLY | 2026-04-28 | 今日被 stale 关闭，无 fix | 核心交互 Bug，建议核实后重新开启 |
| [PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879) 保留手动插件加载路径 | 2026-05-02 | CLOSED，未合并 | 修复配置同步丢失手动插件路径的问题，建议评估后合入 |
| CI 依赖升级积压（PR #2164/#2165/#2166/#2167） | 2026-06-15 | OPEN，stale | 建议维护者及时合并以保持 CI 工具链安全 |
| 前端依赖升级（PR #2460 rimraf 6.x / #2465 vite 5→8） | 2026-08-10 | OPEN | vite 跨度较大（5.4→8.2），建议评估兼容性后处理 |

---

*报告生成时间：2026-08-15 | 数据来源：github.com/netease-youdao/LobsterAI*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-15

## 1. 今日速览

Moltis 今日活跃度中等偏上：过去 24 小时无新增 Issue 或版本发布，但收到 3 个待合并的 Pull Request（全部来自维护者 penso），集中在**技能搜索性能优化、Slack 原生任务卡片、以及持久化连接器**三大方向。项目没有出现 Bug 报告或回归问题，整体健康状况良好，正处于功能扩展与集成深化的活跃开发阶段。三项 PR 均已停留数日未合并，建议维护团队尽快安排评审。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日无已合并或关闭的 PR，但有 **3 个高质量 PR 处于待合并状态**，覆盖了三个重要方向：

- **[PR #1196 — Fix ClawHub skill search results](https://github.com/moltis-org/moltis/pull/1196)**：修复技能搜索超时问题——停止逐条向 ClawHub 发起元数据请求（避免超出 RPC 超时限制），改为直接消费搜索元数据，并将 owner 限定的引用贯穿 detail、scan、download、install 全流程；同时补充了外部请求超时上限及 gateway/browser 诊断能力。**推进价值：显著提升技能搜索的稳健性与端到端可用性。**

- **[PR #1195 — Add Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195)**：新增频道无关的工具生命周期更新机制，并以 Slack 原生 plan/task 卡片形式渲染到现有响应流中。通过不透明的 per-run ID 和注册的规范工具名保护卡片隐私（失败流时做终端错误清理），并暴露原生流式接口。**推进价值：将 Moltis 的 AI 任务反馈深度嵌入 Slack 交互体验，是渠道集成能力的重要增强。**

- **[PR #1190 — Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)**：新增 provider 无关的连接器持久化层——原子快照、调度、投影、有界本地全文搜索；引入只读的 CalDAV、Gmail、Himalaya v2 及可复用的频道历史数据集（provider 自有 schema、不复制凭据），并增加 provider 级信任边界。**推进价值：为日历、邮件与频道数据接入奠定持久化与安全基础，是平台扩展性的关键架构升级。**

**整体评估**：三个 PR 分别对应性能修复、UI 渠道体验、数据连接基础设施，形成了"稳定性 + 体验 + 架构"的立体推进。

## 4. 社区热点

今日 3 个 PR 均无评论和 👍（社区反馈尚未涌入），说明讨论热度集中在维护团队内部。从 PR 内容看，最值得关注的是 **[PR #1190](https://github.com/moltis-org/moltis/pull/1190)**——它体量最大（涉及连接器持久化、调度、搜索、多个数据源），隐含的用户诉求是**希望 Moltis 能直接接入个人日历（CalDAV）、邮件（Gmail）与聊天历史（Himalaya v2）**，实现跨数据源的 AI 助手能力，而非局限于 GitHub 生态。

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归问题报告。

参考线索：**[PR #1196](https://github.com/moltis-org/moltis/pull/1196)** 针对的是既有性能缺陷（技能搜索因逐条 RPC 请求而超时），属于已知问题的修复而非新发现的 Bug。严重程度中等（功能可用性受损但不崩溃），该 PR 即为修复方案。

## 6. 功能请求与路线图信号

无用户提交的新功能请求。但结合 3 个待合并 PR 可以推断下一版本的路线图信号：

| 信号 | 来源 | 推测方向 |
|------|------|---------|
| Slack 原生任务卡片 | [PR #1195](https://github.com/moltis-org/moltis/pull/1195) | 渠道体验深化（从"能用"到"好用"），大概率进入下一版本 |
| 日历/邮件/频道持久化连接器 | [PR #1190](https://github.com/moltis-org/moltis/pull/1190) | 平台化基础设施，为后续多数据源 AI 能力铺路，可能成为下个大版本的核心特性 |
| 技能搜索性能修复 | [PR #1196](https://github.com/moltis-org/moltis/pull/1196) | 稳定性修复，预计随下个小版本（patch/minor）发布 |

## 7. 用户反馈摘要

今日无新增 Issue 或 PR 评论，因此没有来自社区的直接反馈可供提炼。

从代码变更间接推断的用户痛点：
- 技能搜索体验受 RPC 超时影响（PR #1196 的修复动机），说明**搜索功能的响应速度是用户真实痛点**；
- Slack 集成目前缺少结构化任务展示（PR #1195 的动机），说明**用户在聊天场景下需要更直观的任务卡片而非纯文本流**；
- 跨平台数据接入的呼声（PR #1190 提供日历/邮件/频道连接器），说明**用户希望 Moltis 不局限于代码仓库场景，向个人工作流延伸**。

## 8. 待处理积压

今日无明显被长期搁置的 Issue/PR。当前需关注的是 **3 个 PR 的合并节奏**——最早创建的 **[PR #1190](https://github.com/moltis-org/moltis/pull/1190)（2026-08-11 创建，已 4 天未合并）** 与今日新提交的两个 PR 同属维护者 penso，建议维护者尽快安排：

- 优先评审 **PR #1196**（修复类，体量小，可快速合并）
- 随后评审 **PR #1195**（功能增强，中等体量）
- **PR #1190** 体量最大，建议安排深度 review 与测试后再合并

若 3 个 PR 持续滞留，将影响后续开发节奏，并可能产生合并冲突风险。


*数据来源：Moltis GitHub 仓库（moltis-org/moltis），统计窗口为 2026-08-14 至 2026-08-15 的公开活动。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**2026-08-15** | 数据来源：GitHub (github.com/agentscope-ai/CoPaw)

---

## 1. 今日速览

过去 24 小时 CoPaw 项目处于高度活跃状态：共产生 50 条 Issue 更新（其中 36 条已关闭）和 32 条 PR 更新（其中 12 条已合并/关闭），无新版本发布。社区讨论热度主要集中在 MCP 工具兼容性（#6405）、后台运行能力缺失（#7010）以及多 UI 会话下的状态串扰（#7011）等问题上。值得关注的是，多条长期积压的 Issue（最早可追溯至 3 月）在今日集中关闭，说明维护团队正在进行系统性的存量清理。PR 侧有多项功能性开发正在进行，包括动态 Skill 加载、会话级模型切换和子代理会话分组等。

---

## 3. 项目进展

今日无 PR 被合并，但以下处于活跃状态的 PR 值得关注，其中多数已进入评审阶段：

| PR | 功能/修复 | 状态 |
|---|---|---|
| [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) | 修复 MCP 返回 `structuredContent` 时 Tool Result 写入重复数据的问题（对应 Issue #6958） | Under Review |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 新增原生 DataPaw 应用运行时与持久化分析工作区 | First-time-contributor, ready-for-human-review |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | 支持按会话覆盖模型配置，同一 Agent 可在不同会话中使用不同 LLM | Under Review |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 统一 Provider 发现、模型元数据、路由与 Agent 模型控制，引入 catalog 驱动机制 | Open |
| [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | 动态 Skill 加载/卸载 + frontmatter 修复 | Open |
| [#7032](https://github.com/agentscope-ai/QwenPaw/pull/7032) | 自动记忆触发的会话标题自动刷新 | Open |
| [#7035](https://github.com/agentscope-ai/QwenPaw/pull/7035) | 控制台将子代理会话分组展示 | Open |
| [#7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) | 聊天中媒体附件统一下载功能 | Open |
| [#7037](https://github.com/agentscope-ai/QwenPaw/pull/7037) | Computer Use 增加对窗口菜单、下拉框等关联界面的观察 | Open |

此外，[#6908](https://github.com/agentscope-ai/QwenPaw/pull/6908) 将 agentscope 依赖升级至 2.0.6，[#6869](https://github.com/agentscope-ai/QwenPaw/pull/6869) 统一了后台任务超时契约。这两项合并后将改善与 AgentScope 生态的兼容性和后台任务的可靠性。

---

## 4. 社区热点

- **[#3045 - 自动获取模型为什么不可用](https://github.com/agentscope-ai/QwenPaw/issues/3045)**（8 条评论，已关闭）：Windows 桌面版 v1.0.1 用户反馈自动获取模型功能不可用。4 月创建、8 月关闭，结合多起模型配置相关 Issue 的集中关闭，可能暗示该问题所指向的配置流程在新版本中已重构。

- **[#7010 - qwenpaw app 只能前台运行，没有真正的后台守护模式](https://github.com/agentscope-ai/QwenPaw/issues/7010)**（6 条评论，已关闭）：服务器运维场景下的典型痛点——通过 SSH 或脚本启动 `qwenpaw app` 时命令一直挂住不返回，缺少 daemon 模式导致自动化部署受阻。

- **[#6405 - 升级 2.0 后 MCP 工具总是提示 Tool not found](https://github.com/agentscope-ai/QwenPaw/issues/6405)**（6 条评论，已关闭）：Docker 版 2.0.0.post3 升级后 MCP 工具无法调用。用户注意到工具名变成了 `[mcp-key]__[tool_name]` 但仍然找不到，属于升级引入的回归问题。

- **[#7011 - Console 停止请求可取消活动中的飞书会话](https://github.com/agentscope-ai/QwenPaw/issues/7011)**（5 条评论，**仍开放**）：2.1.0 版本中，多 UI 会话时 Console 的 stop 请求会误取消正在进行的飞书会话。用户更新了详细调查发现，确认是 session identity 在会话间串扰所致。

- **[#2846 - 桌面端自动更新与任务栏图标](https://github.com/agentscope-ai/QwenPaw/issues/2846)**（6 条评论，已关闭）：Windows 桌面端每次更新需手动卸载重装，且任务栏显示 Python 图标而非 CoPaw 图标。

**分析**：社区核心诉求集中在三方面——① **模型/Provider 兼容性**（MiniMax 404、OpenAI Responses 不兼容、MCP not found）；② **部署与运维体验**（桌面端更新繁琐、缺少守护模式）；③ **会话管理能力**（单条消息删除、会话拆分、虚拟滚动）。这些诉求共同指向用户对产品成熟度的期待已从"能用"转向"好用"。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 关联 PR |
|---|---|---|---|
| **高** | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | 多 UI 会话下 stop 请求误取消飞书通话（会话身份串扰） | 无 |
| **高** | [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll 策略压缩后重进会话，原始聊天记录不可见 | 无 |
| **高** | [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) | 2.0.1 与 agentscope 2.0.4.post1 不兼容，导致 proactive 子系统崩溃及工具权限死锁 | 无 |
| **中** | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 流式会话工具调用 Offload 接口返回 404 `Tool call not found` | 无 |
| **中** | [#7025](https://github.com/agentscope-ai/QwenPaw/issues/7025) | Creator 插件安装后导致所有插件失效 | 无 |
| **中** | [#6197](https://github.com/agentscope-ai/QwenPaw/issues/6197) | 冻结二进制在 `nvidia-smi` 挂起时启动卡死 | 无 |
| **中** | [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) | FastMCP 调用结果文件写入两份重复数据 | [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) 已修复 |
| **低** | [#6972](https://github.com/agentscope-ai/QwenPaw/issues/6972) | Chrome 扩展 WebSocket 握手成功但发送 tab.create 即断开 | 无 |

其中 [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) 对应的修复 PR 已进入评审阶段，其余高/中危问题暂无对应 PR，需要关注。

---

## 6. 功能请求与路线图信号

以下新功能请求今日获得较多讨论，且**已有对应 PR 或代码基础在开发中**：

| Issue | 功能诉求 | 对应进展 |
|---|---|---|
| [#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001) | 对话中手动删除单条消息 | 无直接 PR，但 [#7049](https://github.com/agentscope-ai/QwenPaw/pull/7049) 的聊天分页加载为长会话管理打基础 |
| [#4436](https://github.com/agentscope-ai/QwenPaw/issues/4436) | 会话拆分（部分对话转移至新会话） | 同上有间接关联 |
| [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) | Console WebUI 引入虚拟滚动解决长对话卡顿 | 无 PR，但 [#7049](https://github.com/agentscope-ai/QwenPaw/pull/7049) 的 limit/before 分页正是为此铺路 |
| [#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010) | 后台守护模式 | 无直接 PR，[#6869](https://github.com/agentscope-ai/QwenPaw/pull/6869) 统一了后台任务超时契约，是相关基础设施改进 |
| [#2846](https://github.com/agentscope-ai/QwenPaw/issues/2846) / [#3464](https://github.com/agentscope-ai/QwenPaw/issues/3464) | Windows 桌面端自动更新 | 无 PR |

**信号判断**：会话级模型切换（[#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)）、Provider 路由统一（[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)）和动态 Skill 生命周期（[#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033)）是当前开发的核心方向，预计将于后续版本（可能为 2.1.x 或 2.2）进入主线。

---

## 7. 用户反馈摘要

- **"每次卸载再更新太麻烦"**（#2846、#3464）：多条 Issue 反复提及 Windows 桌面端无法原地更新的痛点，用户对更新体验的不满非常一致。

- **"升级后 MCP 工具找不到"**（#6405）：用户在 Docker 版 2.0.0.post3 中遇到升级回归，工具名前缀变化但实际调用仍然失败，反映了版本升级时的兼容性压力。

- **"为什么没有真正的后台模式"**（#7010）：服务器端用户通过 SSH 部署时命令挂住无法返回，说明项目对无头/服务端场景的支持仍是短板。

- **"压缩后聊天记录没了，只剩 eviction index"**（#6951）：用户对上下文压缩的预期是"只影响模型输入"，而非隐藏用户可见 transcript。产品需要在压缩策略与 UI 呈现之间做出区分。

- **"停用词是 Stopp Running，错别字很多"**（#7040）：有用户指出 UI 文案存在拼写错误（"Stop Running" 写成 "Stopp Running"），属于低优先级但影响观感的问题。

---

## 8. 待处理积压

以下为长期未解决或可能被遗忘的重要 Issue/PR：

- **[#7011 - Console stop 请求误取消飞书会话](https://github.com/agentscope-ai/QwenPaw/issues/7011)**（2026-08-14 创建，仍开放）：多 UI 会话身份串扰问题，属于影响真实用户会话安全的高严重度 Bug，且已有用户详细的根因分析，建议尽快响应。

- **[#6951 - Scroll 压缩后聊天记录不可见](https://github.com/agentscope-ai/QwenPaw/issues/6951)**（2026-08-12 创建）：上下文压缩后用户无法查看完整对话原文，涉及核心交互体验，目前没有对应 PR。

- **[#2105 - Whisper 安装文档 PR 滞留 4 个月](https://github.com/agentscope-ai/QwenPaw/pull/2105)**（2026-03-23 创建，已关闭）：首次贡献者的文档 PR 标注为 Under Review 后长期未合并，对新人贡献者体验有负面影响。（注：今日状态显示为已关闭，可能是被跳过或由其他 PR 取代。）

- **[#6972 - Chrome 扩展 WebSocket 连接中断](https://github.com/agentscope-ai/QwenPaw/issues/6972)**（2026-08-13 创建）：browser 工具存在协议处理 Bug，影响浏览器控制功能的可用性。

---

*报告生成时间：2026-08-15 | 数据区间：2026-08-14 ~ 2026-08-15*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-08-15

## 1. 今日速览

ZeroClaw 今日保持高活跃度：过去 24 小时有 **32 条 Issue 更新（29 活跃/3 关闭）** 和 **50 条 PR 更新（47 待合并/3 已合并或关闭）**。项目处于 **v0.8.5 稳定性冲刺期**（Intake 已冻结至 8 月 4 日），RFC 讨论密集、安全与架构类议题占比高，社区协作热度在持续升温。目前主要风险集中在 **安全和可靠性积压的 PR 待合并（47 个待合并，其中多个 risk:high 且标注 needs-author-action）**，且部分核心 PR 已搁置较久（如 #8443、#9137 等已超过一个月）需要维护者加速推进。今日无新版本发布。

---

## 2. 版本发布

今日无新版本发布。项目当前处于 **v0.8.5** 稳定化冲刺阶段，该里程碑线由 Issue [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) 追踪，Intake 已冻结（8 月 4 日），每周发版，持续到 8 月 30 日。

---

## 3. 项目进展

今日活跃 PR 50 条（47 条待合并），合并/关闭的 3 条 PR 未在此次展示明细中。当前有 47 条待合并 PR 堵塞，核心推进方向集中在以下方面：

- **终端响应正确性（Reliable 提供商链）**：PR [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)（对 #9421 的修复，分类 Anthropic 不完整终端响应）与 PR [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999)（对兼容提供商的 `finish_reason: "length"` 分类）组成 Git-stacked 依赖链，修复"不完整响应被误报成功"的 S1 级问题。
- **安全边界加固（多个 PR 并行推进）**：
  - PR [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) — 将 Telegram/Slack/Lark/Matrix 审批绑定到发起会话，仅允许授权身份响应。
  - PR [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) — 强化内置 HTTP egress 边界，拒绝非全局 IPv4/IPv6 地址，并沉淀共享网络分类原语供插件复用。
  - PR [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) — 修复 `RateLimitedTool` 在并行分发下的非原子预算检查竞态（对应 Issue [#9849](https://github.com/zeroclaw-labs/zeroclaw/issues/9849)）。
  - PR [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) — 阻止不可逆破坏性命令的直接拼写变体。
- **运行时健壮性**：PR [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) 让 WebSocket 从"turn owner"降级为 viewer/controller，避免用户断开导致工作被取消；PR [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) 在历史裁剪事件中暴露 token 记账细节（对应 #9619）；PR [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) 在 `config/set` 失败时事务性回滚自动创建的 map 别名。
- **CI 成本与可移植性优化**：PR [#9962](https://github.com/zeroclaw-labs/zeroclaw/pull/9962) 引入 provider-aware rust-cache composite action（与 Blacksmith 切换配合）；依此堆叠的 PR [#9985](https://github.com/zeroclaw-labs/zeroclaw/pull/9985) 将 Blacksmith 扩展到 msrv、parallel-runtime-test、installer-drift 三个计算密集 job；PR [#10001](https://github.com/zeroclaw-labs/zeroclaw/pull/10001) 将非 UTF-8 浏览器路径 fixture 门控到 Linux（对应 #9955）。

---

## 4. 社区热点

今日讨论最密集的 Issues 多为**长期 RFC 与设计决策**，集中在安全边界与运行时架构：

- **[#8303 RFC: Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — 22 条评论，最热议题。核心诉求：ZeroClaw 需要跨多个 agent turn 持久化追寻有界用户目标，此前提案耦合了重启交接、广播式 channel admissions、Web 与异步子任务，社区正在推进解耦与收敛。这反映了**用户对多轮目标型任务的刚性需求**。
- **[#7155 shell 高危命令确认分层](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** — 20 条评论，已到 Revision 3，范围收敛为 shell-policy 契约。诉求：对高危 shell 命令做 per-execution allow/ask/deny 策略（Claude Code 风格），是安全与可用性的典型张力。
- **[#8603 Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — 19 条评论。诉求：让 OpenAI Chat Completions 协议的客户端（Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK 等）可直接接入 ZeroClaw，降低生态接入门槛，属于显著的**生态扩展信号**。
- **[#7141 Pluggable inbound auth](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — 16 条评论，已到 Rev 8，是 IAM 里程碑的核心设计。

**PR 侧热点**：#8443（Matrix 单条消息进度草稿，XL 级，6 月 28 日已开）和 #9447（Anthropic 不完整终端响应分类，XL 级，依赖 #9424）均为大规模、跨组件的长期分支。

---

## 5. Bug 与稳定性

今日活跃 Bug 按严重程度排列（S1 > S2）：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| **S1** | [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 不完整终端响应被报告为成功（provider 结束 turn 但无可靠终答，runtime/委托仍向调用方展示成功） | PR [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) 已开待合并（XL 级，需优先处理） |
| S2 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 11 上 **74 个测试失败**：Unix-only 测试命令、路径语义、控制台编码（code page 936）。CI 仅在 Linux 跑，未能拦截 | 无对应 fix PR 标记 |
| S2 | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 高熵检测器将 Solana 钱包地址在 Telegram 出站消息中替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，且 `high_entropy_tokens=false` 在 channel 路径上无效 | 无对应 fix PR 标记 |
| S2 | [#9849](https://github.com/zeroclaw-labs/zeroclaw/issues/9849) | `RateLimitedTool` 预算检查非原子（先检查后记录），并行执行下可超发 `max_actions_per_hour` | PR [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) 已开待合并 |
| S2 | [#9594](https://github.com/zeroclaw-labs/zeroclaw/issues/9594) | Coding-agent 工具对一次成功调用**双重计费** action budget | 无对应 fix PR 标记 |

**稳定性相关测试任务**：[#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)（cron 自定义 shell 测试在并行运行时门控下触发 ETXTBSY 竞态，导致无关 PR 失败，P1）与 [#9955](https://github.com/zeroclaw-labs/zeroclaw/issues/9955)（macOS 上非 UTF-8 浏览器路径 fixture 不可移植，PR [#10001](https://github.com/zeroclaw-labs/zeroclaw/pull/10001) 已修复）。此外 [#9991](https://github.com/zeroclaw-labs/zeroclaw/issues/9991)（npm audit：`nanoid` 高危漏洞）今日已由 CI 自动开单并关闭，建议确认 remediation 状态。

---

## 6. 功能请求与路线图信号

**高概率进入 v0.8.x 或下一里程碑的路线图信号**：

- **Chat Completions 兼容层（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）** — 19 条评论的高热 RFC，若能落地将直接接入 OpenAI 生态客户端（Open WebUI、Continue.dev、Aider 等），是重要的增长杠杆。尚无对应 PR。
- **Telegram /model 选择器增强（[#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)）** — 按 provider 分组 + 分页的 inline-keyboard picker，解决移动端多路由选择繁琐的问题，已标记 accepted。
- **Agent 可移植导出（PR [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986)）** — `zeroclaw agents export <alias>` 导出 manifest + config closure + workspace tree，实现跨安装迁移。已待合并（XL 级）。
- **运行时自有会话与传输适配器（[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)）与统一附件架构（[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)）** — 配套的架构级 RFC，重塑会话所有权模型与附件处理，改变面较大，短期并入 v0.8.5 概率低。
- **统一目录契约（[#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346)）** — 呼应 #6489 的产品级 catalog 愿景，落地需依赖插件包模型（#8908/#8909）的推进。

---

## 7. 用户反馈摘要

- **安全与可用性的持续拉锯**（来自 [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)、[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)）：一方面社区要求更强的 shell 高危命令防护（allow/ask/deny），另一方面过度的"高熵检测"已实际伤害正常用户场景——Solana 钱包地址被误杀且无法关闭（Telegram 通道）。**安全策略需要更细粒度的可配置性**。
- **对多轮/有界任务的明确需求**（[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)）：用户希望 agent 能跨 turn 持久化地完成一个有界目标，而不是每轮都重新开始。这一能力直接关系到 ZeroClaw 作为"个人 AI 助手"的生产力上限。
- **生态互联意愿强烈**（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）：用户希望用自己熟悉的 OpenAI 协议客户端接入 ZeroClaw，而不是被锁定在 WebSocket/ACP 等专属通道。**低摩擦接入是社区的高频诉求**。
- **Telegram 移动端体验痛点**（[#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)）：文本式 `/model` 命令在多路由移动场景下操作繁琐，用户期望 provider 分组 + 分页的原生 UI。
- **桌面端 vs 移动端的测试覆盖盲区**（[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)）：Windows 用户仍面临 74 个测试失败，且 CI 只跑 Linux，建议至少让 Test job 覆盖主要平台。

---

## 8. 待处理积压

以下长期未合并/未响应的核心 PR 与 Issue 需要维护者优先关注：

**高风险、长时间未合并的 PR（距今超过 30 天）**：

| PR | 主题 | 创建时间 | 标签 |
|---|---|---|---|
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | feat(matrix): 单条消息进度草稿 | 06-28 | risk:high, size:XL, needs-author-action |
| [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) | feat(plugins): 共享 egress 策略基础（依赖 #9580） | 07-18 | risk:high, size:XL, needs-author-action |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | feat(plugins): 验证类型化实例配置 | 07-18 | risk:high, size:XL, needs-author-action |
| [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) | fix(security): 加固内置 HTTP egress（#9137 的依赖） | 07-31 | risk:high, size:L, needs-author-action |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | fix(anthropic): 分类不完整终端响应（对应 S1 Bug #9421） | 07-27 | risk:high, size:XL, needs-author-action, stacked |
| [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | fix(channels): 授权审批响应者（安全） | 07-31 | risk:high, size:L, needs-author-action |

多个核心 PR 均标有 `needs-author-action`，**需要作者补全后再走 review 流程**，是当前队列堆积的核心原因之一。

**长期未获维护者响应的 Issue（needs-maintainer-review）**：

- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) Chat Completions profile（19 评论，社区热度高、生态价值大）
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) Runtime-owned 会话与传输适配器（15 评论）
- [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 统一附件架构（14 评论）
- [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) 安全姿态与通用入站策略 RFC（11 评论）
- [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) 分阶段可选遥测 RFC（3 评论）

**S1 级 Bug 未合入修复**：Issue [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) 的修复 PR #9447 已开近三周仍未合并，建议作为 v0.8.5 冲刺的优先事项。

---

*数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)，统计窗口：2026-08-14 至 2026-08-15。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*