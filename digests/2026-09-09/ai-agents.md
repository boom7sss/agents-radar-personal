# OpenClaw 生态日报 2026-09-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-09 11:51 UTC

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

# OpenClaw 项目日报 — 2026-09-09

## 今日速览

过去24小时项目活跃度处于高位：共收到 500 条 Issue 更新（新开/活跃 283 条、关闭 217 条）和 500 条 PR 更新（待合并 291 条、合并/关闭 209 条），并发布了 v2026.9.3 版本。融合数据中 30 条高热度 Issue 里 16 条仍处于打开状态，其中有 8 条 P0/P1 级别问题集中在 auth-provider（Codex OAuth）与 message-loss 领域；值得关注的是约半数热门 Issue 等待维护者评审（needs-maintainer-review），这可能暗示评审积压风险。今日新出现问题集中在 2026.9.2 回归（如 reply 权限快照丢失、/dashboard 命令冲突），而 v2026.9.3 已验证更安全的更新机制。此外，维护者 vincentkoc 提交了多份大型文档拆分重构 PR，显示项目在系统化治理文档结构方面较为重视。

**活跃度评估：高。** 日均 1000 次 Issue/PR 更新，版本迭代频繁，新问题/修复呈正循环，但维护者评审带宽可能成为瓶颈。


## 版本发布

### v2026.9.3（2026-09-09 发布）

发布说明（节选）：

- **更安全的更新机制**：核心与插件变更在隔离的候选状态中进行预演（rehearse）后再激活；支持 2026.9.2 的合格迁移路径；可在不停止健康匹配的 Gateway 的情况下恢复被遗弃的更新记录（引用 #136997、#138839、#141109、#141175、#1415...）

**解读**：这是针对此前多个更新引发的稳定性问题的直接回应——v2026.8.1 插件固定版本残留（#135776）、v2026.9.2 Windows 更新升级在 de-DE 环境阻塞 Doctor 修复（#136203）、v2026.8.2 与 2026.9.2 出现类回滚/卡死问题（#140231 上游已修）。新机制引入"预演-激活"两阶段模式，显著降低更新中断核心服务的风险，对生产环境用户是重大利好。**破坏性变更未提及**；迁移提示：2026.9.2 用户获得官方迁移路径，建议按官方顺序升级。

### v2026.9.2 遗留问题（无独立版本发布，见社区热点）

结合 #141252（9.2 reply 运行故障）、#142336（dashboard 冲突），该版本存在若干已知问题，9.3 主要针对更新机制本身而非全部回归。


## 项目进展

今日无 PR 合并记录（展示数据仅含打开状态），核心进展体现在 v2026.9.3 发布及以下 20 条高活跃 PR 反映的近期修复管线。

值得关注的近期提交与待合并 PR（链接）：

- **回复机制修复**： #142168 fix(agents): recover final replies after terminated streams（P2，合并 #142149 系列故障）；#143081 fix(codex): recover final answers in long conversations（关闭 #143077）；#142173 fix(talk): 用 followupRunId 替换 acceptingAnyRunId 通配标记，修复队列中咨询被当作空完成问题
- **渠道兼容性**： #142626 fix(imessage): 桥恢复后修复反馈（自动合并）；#143061 fix: 避免回复其他 bot 的消息（覆盖 8 个渠道）
- **开发体验**： #143080 fix(sessions): 保留生成 agent 归属（合并 #139371）；#143010 / #143012 覆盖工具轮转的 prompt-cache 验证
- **文档治理**：#143053 / #143069 / #143080 / #143082 / #143084 / #143085 - 将 41-48KB 超大文档拆分至子阅读作业目录；#143087 将 Docker 指南拆分（41,702 字节，4 个阅读作业）
- **功能扩展**： #143069 feat(fal): 支持 GPT Image 2.5 变体（Fixes #143007）；#143086 删除未用的 SDK 信号测试

**总体趋势**：项目在消息传递可靠性（reply/thread/fallback）、渠道去重和文档结构治理三个方向推进着质量改进。


## 社区热点

### 讨论最多的 Issue

| Issue | 标题 | 评论 | 状态 | 领域 |
|-------|------|------|------|------|
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | Provider completed tool call with malformed JSON arguments | 23 条 | CLOSED | Claude Sonnet 5 工具格式回归 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收 hook/tool 子进程 → 僵尸进程堆积 | 15 条 | OPEN | 运行时稳定性 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 agent 编排不稳定：并发 add/config/锁冲突 | 14 条 | OPEN | 多 agent |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞 Gateway 事件循环 | 14 条 | OPEN | 扩展性 / 会话 |
| [#137927](https://github.com/openclaw/openclaw/issues/137927) | 上下文内部标签泄漏到 Telegram 可见文本 | 13 | CLOSED | 会话 / 安全 |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex 开跑时报 start 再静默 → 会话等待冻结窗口 | 13 条 | OPEN | 会话状态 |

### 趋势总结

**Issue 侧：**
1. **核心用户关注点集中在消息/会话可靠性**（message-loss、session-state、reply/fallback 层面，共 13 条高活跃 Issue），表现为 reply 无回复、回复已被消费、聊天列表/上下文丢失、跨渠道回复错误识别等。
2. **Codex/OpenAI OAuth 路径是最薄弱环节**：6 条高活跃 Issue 与 Codex 相关；#89278（P0, OAuth 刷新竞态）尤其严重——认证检测正常但实际 cron / 心跳却持续失败。
3. 事件循环也被阻塞 2 次(#119720、#87109)以及内存持续增长（#87109 已关闭）。另外针对多平台/生产部署，升级故障反馈共 3 次（#136203、#135776、#123799），强调对更新安全与迁移指引有较强诉求。

**PR 侧：** 19/20 的高活跃 PR 都处于 OPEN，仅有 1 条获得“自动合并武装”。其中 #143061（避免回复其他机器人，8 渠道、XL）及 #142173（安全问题修复）、#90745（跨渠道长期开放的回复上下文修复，标签 message-delivery + security-boundary 风险）。结论：高流量请求集中在消息投递、对话/回复语义、安全边界三个交集领域。

**综合判断：开发者主要聚焦在生产可用性上——** 消息不能丢、回复不能错、升级不能出事——这些是社区的最大痛点。


## Bug 与稳定性

今日数据缺少数量的具体新开/关闭内容，仅基于活跃更新、已关闭及最新 PR 整理，主要观察如下：

### 严重度分级

| 严重度 | 描述 | 相关 Issue | Fix PR | 状态 |
|------------------|--------------------------------------------------------------------------------------------|-------------------------------------------------|------------------|------------------|
| **P0** | 更新后崩溃/持续失败（#136203，Windows de-DE），再考虑 #136311（索引不可修复）+ #87109 的扩展 | #136203, #136311（无 PR） | 无（已关闭） | 持续监控高度关注 |
| **P0** | 恶意注入检测：存在可执行文件无约束执行（#89278 OAuth 竞态在心跳/调度流程），叠加更新中毒风险 | #89278（有 PR, OAuth 闭环但未修复 full loop c.v. bug） | 未 | 高度关注 |
| **P1** | 多 agent 编排不稳定 (#43367) + 僵尸进程累积 (#97616) | #43367, #97616, #131148 | 部分 (PR 冻结，需要 re-prove) | 运维代表应监控 |
| **P1** | 进程管理：未回收子进程 (zombie) | #97616 | 无 | 需在 2026.9.x 跟进 |
| **P1** | 会话与遥测可见性（Telegram 静默子代理）: #101656 信号缺失 | #101656 | 无 | 边缘滞留 |
| **P1** | agent reply/session 被误判（#141252, 2026.9.2 新回归）| #141252 | 无（#142168 排除，提示另一 bug） | 需新补丁 |
| **P1** | 模块覆盖定义差异（老 user 改会造成意外行为） #125570 (Skill Workshop 覆盖 live description) | #125570 | 无 | 等待 |
| **P1** | 数据、隐私安全 (其他线程注入) #115367 + #$99925 (WebChat 会话盲) | #115367 & #99925 | 无 | 安全委员会应检查 |
| **P1** | /dashboard 核心命令与 TG 插件冲突回归（#142336，9.2 新发生） | #142336 | 无 | 新提交需 fast-follow |

### 趋势分析

热门列表中 30 条包含 21 个唯一 P0/P1 标记问题（其中 16 个仍开放的问题中 8 个 P1/P0，且有 3 个标记 release-blocker： #89278、#142336、#115642）。值得注意的是，多个 P1（#115367、#119720、#85251等 8-10 个）等待维护者评审/产品决策，若进展评估平均停留超过 2 周，则存在“沉默瓶颈”的风险。

若再考虑到多个新回归（#135111、#137927、#141252 已关闭/已开 PR 等等），稳定性焦点主要是一场「由渠道、更新、OAuth 竞态→核心消息路径」的扩散战——2026.9.x 基线相比 2026.8.2 似乎并未降低复杂度。


## 功能请求与路线图信号

今日并无全新功能请求进入热门 Bug 名单，但有以下信号可供参考：

- **Android 聊天优先界面**（讨论 #46058 仍在打开且最近有更新）——若获足够支撑，可做成新 surface，但考量官方对此的分流。
- **跨 bot 回复语义**（PR #143061，涉及 8 个渠道、XL 更新）——若被接受，会改变群聊被误触发的基本行为。
- **系统化文档拆分**：vincentkoc 的 7 份文档 PR 中多数仍未标 rating 或 P3（低优先级），由维护者直接提交，不存在“功能 PR”阻塞。
- **通过 update 预演提升更新可靠性和“自动回滚”路径**：#142626 + #143036 反映对更新可靠性的关注仍在扩展。

总体这些并非用户的“新功能请求”，更多是“长期打开的稳定性/体验类优化”持续走到接近落地的窗口。


## 用户反馈摘要

- **更新与版本节奏痛点**：多位用户在 2026.8.x/9.x 更新中遭遇“升级后损坏”的场景——例如 Windows de-DE 停在维护状态（#136203），插件 pin 在核心更新版本（#135776），或 9.2 引入的新回归（#141252）。v2026.9.3 预演机制代表了社区表达的主要期待。
- **生产环境在超时和静默失败面前缺乏安全感**：cron 到期未被触发（#89278），提交 28 秒超时（#95121），Gateway 空闲内存可达 GB 级且 cron 若失败则完全无提示（#87109）。
- **关于消息真实性 / 安全性**的实质报告，来自真实场景（Telegram 内部上下文泄露 #137927；回应 #142336 中指向 “回复消息给错误的 bot” 的差异化场景）。
- 少量渠道性摩擦（Google Meet 语音崩溃 #140455、SSH 入站媒体不上传 #112160、iMessage 反射绕过去重 #135704）表明用户在多设备 / 多链路集成真实业务。
- 总体情绪：“高风险路径频繁回归”比“简单功能偏差”更能激怒用户；对维护者的观感偏向积极（多个报告会写“已经修了一半”，部分标签为 fix-shape-clear）。


## 待处理积压

**最为隐蔽的 P0/P1，且暂无 fix PR：**
- **Codex OAuth 刷新 10s 超时 + cron/heartbeat 持续失败**（[#89278](https://github.com/openclaw/openclaw/issues/89278)）——P0，release blocker，等待：needs live repro。
- **内存索引锁死无法重建 + 19GB 孤儿数据**（[#136311](https://github.com/openclaw/openclaw/issues/136311)），P1，维护者评审 7 天未动。
- **provider-owned 读取门 + 外部插件 → 读取被锁定**（[#115367](https://github.com/openclaw/openclaw/issues/115367)），P1 安全边界，评审 7 天未动。
- **Codex app-server 运行时“发射 start 后静默”、会话楔住**（[#85251](https://github.com/openclaw/openclaw/issues/85251)）。

**打开时间较长的 P1（维护者评审等待信号）：**
- 多 agent 编排（从 3 月开启，[#43367](https://github.com/openclaw/openclaw/issues/43367)）+ 相关 #101656 已存在 2 个月。理论上 9.3 只解决其子集而非编排整体。
- 僵尸进程（#97616，6 月开启）目前仍处于“需要 info”状态。

**P0/高风险但无活跃关联（新打开）**：dashboard/TG 冲突（#142336，2026-09-08 开）新增 fix 尚无。

**长期打开、最需要“产品决策”标志的：**
- Android surface（#46058，3 月）；WebChat 会话盲（#99925，7 月，needs maintainer + product + security + live-repro）。

**总评**：高危停留集中在 OAuth/Codex 路径（生命周期 2–4 个月）以及 runtime/session 状态恢复（2–3 个月），涉及多 agent 一致性与回滚恢复。建议维护者评估问题按“影响范围×发生频率”排序后小批量拆分推进，避免因大 PR 审核周期而阻碍稳定的补丁通道。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：** 2026-09-09


## 1. 生态全景

个人 AI 助手/自主智能体开源生态当前处于高活跃度、密集迭代期。以 OpenClaw 为参照核心的"Claw 系"项目（NanoBot、PicoClaw、NanoClaw、IronClaw 等）形成生态簇，各自向轻量化（ZeptoClaw）、垂直渠道深度（PicoClaw）、多租户安全隔离（IronClaw）等方向分化。生态共性痛点集中在**消息投递可靠性**（多项目出现丢失、重复、错路由问题）、**会话状态一致性**（上下文丢失、静默失败）与**升级安全**（多处升级后回归/卡死/回滚事故）。同时，架构级 RFC 讨论（ZeroClaw、OpenClaw）与安全审查（LobsterAI 5 项安全 Issue 长期无响应）并存，呈现"功能快速演进与技术债累积并行"的典型开源生态阶段性特征，而从 NanoBot 和 OpenClaw 的高 PR 合入率与短修复周期来看，头部项目已建立相对健康的"开发-回归-修复"循环。


## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 活跃度 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 283，关闭 217） | 500（待合并 291，合并/关闭 209） | ✅ v2026.9.3 | 🔥 极高 | ⚠️ 高活跃但评审积压风险 |
| **NanoBot** | 2（活跃 1，关闭 1） | 24（待合并 16，合并/关闭 8） | — | 高 | ✅ 健康，修复周期极短 |
| **Hermes Agent** | 50（新开/活跃 28，关闭 22） | 50（待合并 35，合并/关闭 15） | — | 🔥 极高（近期新高） | ⚠️ 高价值 PR 积压待合入 |
| **PicoClaw** | 3（新开/活跃 2，关闭 1） | 8（待合入 7，关闭 1） | — | 中上 | ⚠️ stable 策略可能误伤活跃 PR |
| **NanoClaw** | 1 | 11（合并/关闭 3，待合并 8） | — | 中高 | ✅ 交付节奏稳定 |
| **NullClaw** | 0 | 0 | — | 无活动 | — |
| **IronClaw** | 2 | 11（合并/关闭 5，待合并 6） | — | 高 | ✅ 安全修复响应极快 |
| **LobsterAI** | 20（新开/活跃 16，关闭 4） | 14（合并/关闭 11，待合并 3） | — | 高 | ⚠️ 安全 Issue 响应滞后 |
| **TinyClaw** | 0 | 0 | — | 无活动 | — |
| **Moltis** | 0 | 0 | — | 无活动 | — |
| **CoPaw** | 20（新开/活跃 9，关闭 11） | 33（开放 24，合并 9） | — | 中高 | ⚠️ 关键 PR 滞留审阅队列 1 个月+ |
| **ZeptoClaw** | 1（新开 1） | 1（待合并 1） | — | 中低 | ✅ 核心维护节奏健康 |
| **ZeroClaw** | 37（活跃 34，关闭 3） | 50（待合并 49，关闭 1） | — | 极高 | ⚠️ RFC 决策积压，PR 合入停滞 |

> 💡 注意：各项目统计口径与数据源详略存在差异，对比仅供相对参考。


## 3. OpenClaw 在生态中的定位

**生态中心地位明显：** OpenClaw 以日均 1000 次 Issue/PR 更新的量级（是第二名 Hermes Agent 的 10 倍）成为该生态无可争议的核心参照项目，无论是版本发布节奏（高频迭代）、社区规模（30 条高热度 Issue）还是 PR/Issue 生态活跃度都领先一至两个量级。

**但"领先"的代价同样体现在问题复杂度上：** 高热度 Issue 集中在 P0/P1 级别且 8 条候选 release-blocker 的现状，说明其功能范围远超其他项目后正面临"复杂度扩散战"——核心消息链路（auth-provider OAuth 竞态、message-loss）、多渠道兼容、更新机制的稳定性都在同时承压。v2026.9.3 引入的两阶段"预演-激活"更新机制即是其面对自身规模问题的系统性回应，这一机制设计理念上领先于生态内其他项目。

**技术路线的分化：** 对比 NanoBot（WebUI 体验打磨为主）、PicoClaw（渠道垂直深度）、IronClaw（多租户 hosted-MCP 隔离），OpenClaw 走的是**全栈覆盖 + 高频迭代**路线——涵盖多 agent 编排、大模型服务商接入、全渠道消息、Dashboard、插件生态，是这一生态中定位最接近"个人 AI 基础设施"的项目。

**社区规模信号：** PR #143061（避免回复其他 bot，覆盖 8 个渠道）这样的横向改动只有具备全渠道覆盖的项目才有意义，与 PicoClaw/NanoClaw 仅在单一渠道做修复形成鲜明对比。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **消息/回复可靠性** | OpenClaw（13 条高活跃 Issue：reply 无回复、回复错路由）、NanoClaw（#3738 回复线程路由丢失）、Hermes Agent（#96925 Copilot 重复工具调用）、CoPaw（#7579 回复已持久化但后续缺失）、PicoClaw（#3343 无限编辑触发限流）、ZeroClaw（ACP transcript 丢失） | 消息不丢、回复语义正确、跨渠道去重与识别 |
| **升级/更新安全** | OpenClaw（v2026.8.x/9.x 多次升级回归，#135776/#136203/#140231）、LobsterAI（升级 v2026.8.1 后 8 项阻塞性修复）、CoPaw（#7633 llama.cpp 版本号解析失败静默回滚）、Hermes Agent | 升级导致功能回归/卡死/回滚风险；用户高度敏感 |
| **会话状态与上下文一致性** | OpenClaw（#85251 Codex start 后静默、会话等待冻结）、ZeroClaw（#10697 ACP transcript 断失、#10625 内部占位符泄漏）、CoPaw（#7579 模型收不到自己刚说的话）、Hermes Agent（#92837 Heartbeat 触发但未投递）、LobsterAI（#2046 跨 session 记忆割裂） | 状态可恢复、上下文不丢、可观测 |
| **安全与多租户隔离** | IronClaw（#6778 跨用户元数据暴露）、LobsterAI（5 个安全 Issue：token 代理未鉴权、文件泄露等）、OpenClaw（#115367 注入检测）、ZeptoClaw（#674 WebSocket 凭据暴露） | 用户隔离、凭据安全、防注入与文件泄露 |
| **定时任务/调度可靠性** | OpenClaw（#89278 cron 到期未触发）、NanoClaw（#3705 recurrence 更新后不重算）、Hermes Agent（#70050 cron drift 无法 repin） | 调度语义一致性与可自助恢复 |
| **OAuth/认证竞态** | OpenClaw（#89278 P0 OAuth 刷新竞态）、IronClaw（SEP-414 调用方归属） | 认证检测与实际能力不一致 |
| **长对话成本/上下文管理** | ZeroClaw（上下文压缩锚定窗口、成本核算精细化）、IronClaw（附件指针模式）、OpenClaw（#10663 prompt-cache TTL）、LobsterAI（token 浪费质疑、60M vs 67K 异常） | 控制 token 成本，精细化上下文管理 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈个人 AI 基础设施：多 agent、多渠道、Dashboard、插件 | 开发者 / 重度自托管用户 | Node.js 生态、高频版本迭代、插件市场、社区门户 |
| **NanoBot** | WebUI/TUI 双界面体验打磨、unifiedSession、流式渲染 | 终端交互偏好的开发者 | 前端体验投入大、合并节奏密集、修复周期 1-2 天 |
| **Hermes Agent** | 跨项目自动化集成（Nous↔Enterkey 双团队协作）、工具链深度、per-tool-scope 权限 | 多团队协作型组织 | 与 Enterkey 分支协作的"双维护线"模式、批量 salvage PR 机制 |
| **PicoClaw** | 垂直渠道深度（Telegram/飞书/IRC/WhatsApp）、RISC-V 生态（Sipeed） | 嵌入式/边缘硬件用户 | 渠道级精细打磨（回复语义、动画上限）、deltachat 清理 |
| **NanoClaw** | 社区门户一站式安装、OpenCode 技能集成 | 入门到中级自托管用户 | 安装配置集中化到浏览器端、社区 cell 架构 |
| **NullClaw / TinyClaw / Moltis** | — | — | 无活动，处于停滞状态 |
| **IronClaw** | hosted-MCP 多租户安全、agent-market 打包、SEP-414 归属 | 多用户服务器部署方 | 按调用者目录隔离、调用方归属元数据、语境感知上下文预算 |
| **LobsterAI** | 网易系模型深度整合（付费会员）、桌面 IM 客户端（Discord/QQ） | 中文桌面端用户 | 上游 OpenClaw 换壳 + 本地化适配、Windows 桌面生命周期管理 |
| **ZeptoClaw** | 极致轻量（6MB Rust 二进制、50ms 启动） | 边缘部署 / 无容器环境用户 | Rust 实现、容器可选、资源占用极低 |
| **CoPaw** | 技能（Skills）版本管理 + MCP 可配置化、应用市场 | 多项目/多面板组织用户 | 技能版本+依赖校验、MCP timeout 可配置、云端面板管理 |
| **ZeroClaw** | 架构级重构（运行时会话、统一文件附件、WASM 插件运行时） | 架构敏感型组织/贡献者 | 多 RFC 并行治理、社区共识驱动决策 |


## 6. 社区热度与成熟度

**第一梯队 · 全速迭代 / 高活跃：**

- **OpenClaw**：日均 1000+ Issue/PR 活动，版本迭代快（v2026.9.x 三连发），但评审带宽和 P0/P1 积压成为主要瓶颈——典型的"领跑者困境"。
- **ZeroClaw**：架构 RFC（#9487 评论 36 条、#9488 评论 29 条）讨论深度极高，但 49 条 PR 待合入显示出治理节奏与社区讨论需求之间的张力。
- **Hermes Agent**：双团队协作驱动的极高 PR 提交量，salvage PR（打捞关闭 PR）模式成形，但高价值修复积压（35 条待合入）说明合入速度未跟上提交速度。

**第二梯队 · 质量巩固 / 稳定迭代：**

- **NanoBot**：少而精的 PR 密度，8 条合并集中在 WebUI 体验修复；bug 反馈到修复周期约 1 天，工程纪律性优秀。
- **IronClaw**：安全修复响应极快（当日提交修复 PR），但依赖外部工具链（gbr-agent）的新方向有一定风险。
- **LobsterAI**：合入率最高（11/14 PR 合并），修复集中在 v2026.8.1 升级适配，但安全 Issue 长期无响应构成隐患。

**第三梯队 · 中低活跃 / 稳健推进：**

- **PicoClaw / NanoClaw**：活跃度中等偏上，常规修复节奏正常。
- **ZeptoClaw**：维护者个人驱动的稳步迭代，安全加固意识强。
- **CoPaw**：合入节奏尚可但关键 PR（#6969 滞留 27 天、#6776 滞留 33 天）审阅周期长，首次贡献者流失风险值得关注。

**停滞状态：** NullClaw、TinyClaw、Moltis 过去 24 小时零活动——在生态整体高活跃的背景下，可能需要判断是短期沉寂还是项目生命周期的尾声信号。


## 7. 值得关注的趋势信号

**① "升级安全"是普适性信任危机**
OpenClaw（v2026.8.x/9.x 多次回归）、LobsterAI（升级后 8 项阻塞修复）、CoPaw（llama.cpp 版本号解析失败致回滚）在同一个 24h 窗口内集中出现升级引发的安全事故。响应机制上，OpenClaw 的"预演-激活"两阶段更新机制是当前最具系统性的解法，值得生态内其他项目参考。

**② 消息投递可靠性成为生产可用性的核心瓶颈**
从 OpenClaw 的 message-loss（13 条高活跃 Issue）到 PicoClaw 的 22.8 万次重复编辑、NanoClaw 的回复线程路由丢失，多个项目同日暴露"消息/回复语义"问题。对开发者的启示是：**推送/回复基础设施的健壮性（去重、幂等、回复语义正确解析）比新增功能更能决定用户留存**。

**③ 安全边界问题在多个项目同期暴露但响应不均**
IronClaw 当日修复多租户元数据泄露（响应极快），ZeptoClaw 主动加固 WebSocket 凭据（防患于未然），而 LobsterAI 5 个安全 Issue（含未鉴权的 token 代理可重放）已搁置 2 个月以上无回应。对安全研究者的参考价值：**哪些项目的"报告-修复"链路通畅，往往成为安全社区选择贡献方向的依据**。

**④ 边缘/轻量化场景的需求信号在多个方向出现**
NanoBot 收到无人零售 IoT 场景的轻量化部署请求（虽被关闭）、ZeptoClaw 以 6MB Rust 二进制 + 50ms 启动明确主打边缘可用，说明**"无容器环境下的 AI 助手"正在成为真实场景需求**，但主流项目（OpenClaw、NanoBot）对这类需求的承接意愿尚不明确，存在市场空白。

**⑤ 成本核算与透明度成为用户信任的关键维度**
ZeroClaw 集中出现 4+ 条成本核算相关 Issue（$0.00 导致预算上限失效、缓存定价低估），LobsterAI 用户对比"60M vs 67K Token"的性能数据异动，多项目用户对"token 是否被浪费"高度敏感。**成本可观测性（token 流向可视化、预算上限真实生效）正在成为个人 AI 助手的基础功能要求**。

**⑥ 记忆体系与跨会话上下文是共同的路线图空白**
LobsterAI（#2046 跨 session 记忆割裂）、NanoBot（Honcho 长期记忆 PR 开放 6 个月未合入）、Hermes Agent（#92837 agent-cache 唤醒丢失）分别从产品诉求、技术实现和底层机制三个层面暴露了"长期记忆"这一方向的未成熟。对开发者而言，这是一个**既有明确需求、但尚未出现标准解法**的蓝海领域。

**⑦ 治理模式分化：维护者驱动 vs 社区共识驱动**
OpenClaw/LobsterAI 以维护者决策为主，速度快但产生 stale 积压；ZeroClaw 以 RFC + 决策队列（#8692）走社区共识路线，但 49 条 PR 待合入说明决策摩擦已影响推进速度。两种模式在各自的社区规模和项目复杂度下的适用性值得观察——**治理节奏与迭代速度的匹配度，正在成为决定项目长期生命力的关键变量**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-09

## 1. 今日速览

NanoBot 在过去 24 小时内保持了高强度的开发节奏：共产生 24 条 PR 更新，其中 8 条已合并/关闭、16 条仍处于待合并状态，主要贡献集中在 WebUI 的体验优化与缺陷修复上。Issues 侧相对平静（2 条更新），但其中包含一条已被关闭的功能建议和一条与 WebUI 会话标题生成相关的活跃 Bug 报告。项目呈现出"合并密集期 + 存量功能打磨"的健康态势，长期开放的特征 PR（如 Honcho 长期记忆集成）也在持续收到更新。WebUI 和 TUI 两条用户界面线的迭代速度明显领先于其他模块，值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭了 8 条 PR，全部集中在 WebUI 与 TUI 的体验修复和功能补全上，反映了项目在积极消化近期功能开发（如 `unifiedSession` 模式、流式数学渲染）带来的回归问题和体验缺陷。主要亮点：

- **WebUI 性能与渲染边界修复**：[PR #5703](https://github.com/HKUDS/nanobot/pull/5703)（perf） 通过减少对提示词 DOM 节点的重复扫描、限制历史渲染的边界，解决长对话和工具密集响应下的性能问题
- **流式数学公式渲染 Bug 修复**：[PR #5712](https://github.com/HKUDS/nanobot/pull/5712) 修复了 WebUI 流式响应在遇到数学公式中的小于号比较（如 `\prod_{j<i}`）时被截断的问题——该问题会导致 KaTeX 渲染报错且后续内容全部缺失
- **TUI 功能补偿**：[PR #5705](https://github.com/HKUDS/nanobot/pull/5705) 为 TUI 新增 `/usage` 面板和 Token 图表，将 WebUI 已有的上下文占用率与模型轮次用量信息引入终端场景
- **编辑 diff 与推理过程折叠逻辑修正**：[PR #5714](https://github.com/HKUDS/nanobot/pull/5714) 修复了混合推理和文件编辑活动中 diff 被折叠隐藏的问题
- **项目上下文保留修复**：[PR #5717](https://github.com/HKUDS/nanobot/pull/5717) 修复了从项目菜单创建主题时 URL hash 变化导致项目选择被意外清除的问题
- **技能建议刷新、斜体文本截断等细节修复**：[PR #5716](https://github.com/HKUDS/nanobot/pull/5716)、[PR #5713](https://github.com/HKUDS/nanobot/pull/5713)

项目在"功能开发 → 回归修复 → 细节打磨"的循环中运转良好，且修复覆盖了从渲染截断到 UI 布局的各个方面，显示了较高的工程纪律性。

## 4. 社区热点

今日评论热度最高的 Issue 为已被关闭的 [#5693](https://github.com/HKUDS/nanobot/issues/5693)（3 条评论），由用户 `linxingming168` 提出，建议 NanoBot 支持超轻量化自托管部署方案以适配无人零售/IoT 场景。该需求指出 NanoBot 在无人零售门店智能运营中的应用潜力，并请求增加轻量部署方案与中文文档，并附带了其个人在 Gitee 上的"落朵机器人大脑"项目链接。该 Issue 于 2026-09-08 创建后迅速关闭，关闭原因未在数据中标注，但用户诉求中"边缘设备运行能力"与"中文文档"的信号值得关注。

此外，活跃 PR [#5704](https://github.com/HKUDS/nanobot/pull/5704)（WebUI 设置重构 + 自动保存）和 [#5710](https://github.com/HKUDS/nanobot/pull/5710)（项目组织与侧边栏导航简化）虽然均标注有 `conflict`（存在合并冲突），但代表了用户在 WebUI 信息架构层面较强的整理诉求，两条 PR 停留在开放区的时长也说明社区对 WebUI 布局重构有持续兴趣。

## 5. Bug 与稳定性

按严重程度排列：

| 编号 | 问题 | 状态 | 级别 |
|---|---|---|---|
| [PR #5712](https://github.com/HKUDS/nanobot/pull/5712) | 流式响应在数学公式遇 `<` 比较时被截断，KaTeX 报错并致后续内容消失 | ✅ 今日已修复 | 高（内容丢失） |
| [PR #5714](https://github.com/HKUDS/nanobot/pull/5714) | 推理折叠面板包裹编辑 diff，折叠后 diff 与操作控件不可见 | ✅ 已修复 | 中 |
| [Issue #5647](https://github.com/HKUDS/nanobot/issues/5647) | gateWay 重启后前端 Envelope 缺失 `webui` 标志，导致会话标题不生成 | 🔧 活跃中（[PR #5715](https://github.com/HKUDS/nanobot/pull/5715) 已提出修复） | 中 |
| [PR #5717](https://github.com/HKUDS/nanobot/pull/5717) | 从项目菜单创建主题时 project 选择被路由事件清除 | ✅ 已修复 | 中 |
| [PR #5713](https://github.com/HKUDS/nanobot/pull/5713) | 斜体活动标签因 fit-content + overflow hidden 截断末字符 | ✅ 已修复 | 低 |

值得肯定的是，上述问题绝大多数在当日或次日即有对应修复 PR 被提出并合并，bug 反馈周期极短。

## 6. 功能请求与路线图信号

今日的功能请求集中在 Issue [#5693](https://github.com/HKUDS/nanobot/issues/5693)：用户期望 NanoBot 支持无人零售/IoT 边缘设备部署，包含三方面诉求——轻量化部署方案、场景化能力支持与中文文档。

结合现有开放 PR 来看：

- **轻量/边缘化潜力有限**：目前无与此相关的进行中 PR，社区对该诉求的承接意愿尚不明确
- **中文文档需求**：暂无相关 PR 支撑

值得关注的路线图信号来自 [#5704](https://github.com/HKUDS/nanobot/pull/5704)（WebUI 设置项整理 + 自动保存）与 [#5710](https://github.com/HKUDS/nanobot/pull/5710)（项目目录化 + 侧边栏导航简化）：这些由同一核心贡献者提交的 PR 表明项目正在推动 WebUI 从"单一面板工具"走向"多项目多会话的正式工作台"形态，功能布局变化较大的信号明确。

同时，长期开放的两条功能型 PR [#2183](https://github.com/HKUDS/nanobot/pull/2183)（Honcho 长期记忆，开放近 6 个月）和 [#4919](https://github.com/HKUDS/nanobot/pull/4919)（Telegram 自定义 Bot API Base URL）也在今日获得持续更新（更新时间 2026-09-08/09），表明先前积压的功能正在被逐步消化或至少被保持跟进。

## 7. 用户反馈摘要

来自 [#5693](https://github.com/HKUDS/nanobot/issues/5693)的反馈揭示了 NanoBot 在 AI Agent 之外的实际应用探索：用户正在为无人零售门店的智能运营选型技术栈，他们把 NanoBot 放在"如何让边缘设备上的 AI 更好用"这一角度进行评估，核心痛点在于**边缘设备的资源限制**（需要超轻量的部署方式）以及**中国开发者场景的中文文档缺口**。用户还附上了自己和所在组织在 Gitee 上的相关项目，交互动机偏向实际落地而非单纯提意见，遗憾的是该 Issue 已被关闭（关闭原因不明），如果用户确实存在明确的落地意向，关闭可能造成需求线索的中断。

其他 Issues 中无更多用户评论数据，无法提炼更多主观反馈。

## 8. 待处理积压

以下重要 PR/Issue 长期处于开放状态，值得维护者关注：

| 编号 | 内容 | 开放时长 | 备注 |
|---|---|---|---|
| [PR #2183](https://github.com/HKUDS/nanobot/pull/2183) | Honcho 长期记忆（opt-in）集成 | ~6 个月 | 于 2026-09-09 仍在更新，`conflict` 标注；对应 "Long-term memory" 路线图 Item (#39) |
| [PR #4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram 自定义 Bot API Base URL / 额外 headers | ~2 个月 | 于 2026-09-08 更新，覆盖自托管 Bot API 服务器场景 |
| [PR #5498](https://github.com/HKUDS/nanobot/pull/5498) | Agent TUI 配置引导（onboarding）整合 | ~17 天 | 今日仍被更新，但带有 `conflict` 标签，合并风险需评估 |
| [PR #5664](https://github.com/HKUDS/nanobot/pull/5664) | 限制空闲会话摘要缓存（内存无界增长） | ~5 天 | 尚未被合并，涉及内存稳定性问题，建议优先审查 |

总体而言，项目处于高活跃度、高响应率状态；WebUI 相关产出量大且质量稳定，CI 冲突与性能类修复的集中出现意味着近期功能迭代带来的技术债正在被及时处理。长期 PR 的"慢性持续更新"避免了路线图中断，但也提示核心维护者在主要特性发布节奏上可能趋于保守。

---
*数据来源：[NanoBot GitHub Repository](https://github.com/HKUDS/nanobot)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-09

## 今日速览

今日项目空前活跃，24小时内 Issue 与 PR 更新各达 50 条，创近期新高。Issue 侧 28 条新开/活跃、22 条关闭，表现健康；PR 侧 35 条待合并、15 条已合并/关闭，提交流充足。值得关注的是，今日出现多份以 `salvage #...` 命名的新 PR（如 #106528–#106533），疑似系统性地恢复此前被关闭的 PR 内容，该项目中一种 "打捞/复用" 的 PR 提交流模式正在成形。今日无新版本发布，但长期未合并的 #69446（插件目录，自 7 月 22 日起开放）今日仍有更新。

## 项目进展

今日无 PR 被合并/关闭的确认公告（合并/关闭的 15 条 PR 未在 Top 列表中），但大量高价值修复 PR 积压待合并，反映了近几日排队合入的工作有待放行：

- **多项 bug 修复推进**：多个 PR 提案针对实际用户遇见的崩溃与异常：
  - #106528：WSLg 下桌面版改走 Windows GPU（D3D12），不再强制使用软件渲染
  - #106527：修复 `--in DIR` 参数在 shell 已有 `TERMINAL_CWD` 时失效的问题
  - #106522：修复会话被回收过程中的 "压缩冷却回滚" 导致 turn 调度器崩溃（`RuntimeError`）
  - #106525：Codex 图片超预算 400 错误后自动缩小图片并重试
  - #106511：并发 PTY 回收不再抛 `KeyError` 进入终端 websocket
  - #106512：Novita 429 "server overload" 只退避重试，不再误触发凭据轮换
  - #106516：Dashboard 作用域 profile 轮询不再误删他人 gateway 的 pid/lock
  - #106532：cron 从一次性改循环后正确重新推导 `repeat` 默认值
- **协议/平台适配**：#106515（Matrix LaTeX 渲染）、#106523（LINE "Get answer" 按钮）、#106513（剔除已退市的 `ox-alpha-free` 模型）等，覆盖跨平台体验提升。
- **CI/工程化**：#106529 提出新的 CI 策略变更：新引入 `ty` `invalid-method-override` 诊断将导致 lint 失败（其他 `ty` 类别仍仅告警）。

## 社区热点

- **#88584 [OPEN] — "Automated Nous integration is blocked"**（评论 80，遥遥领先）
  链接：https://github.com/NousResearch/hermes-agent/issues/88584
  该项目自 8 月 17 日创建以来持续积累大量讨论。核心争议点在于 `cron/jobs.py` 的合并冲突阻塞了整个 Nous-to-Enterkey 的自动化集成流程。高评论量反映了两个维护团队（Nous 与 Enterkey 分支协作）之间缺少自动化协调机制，社区持续关注跨项目合并的阻塞状态。
- **#70050 [CLOSED] "Cron drift blocks free→free; no supported repin path"**（评论 6）
  链接：https://github.com/NousResearch/hermes-agent/issues/70050
  经 8 周讨论后今日关闭。用户长期无法通过受支持路径重设 cron 的 model/provider（涉及 #68380、#24258、#27530 三个关联 issue），反映 cron 模型漂移保护策略因缺少整体 repin 路径而难以自助处理。
- **#96925 [CLOSED] "Copilot duplicates tool calls after v0.20.6"**（评论 5）
  链接：https://github.com/NousResearch/hermes-agent/issues/96925
  接近 P1 级别的 Copilot Provider 回归问题（重复工具调用）在 v0.20.6 后出现且非个例，引发持续讨论。

## Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 说明 | Fix PR |
|---|---|---|---|
| P1 | #96925 (CLOSED) | Copilot 重复工具调用，v0.20.6 回归 | — |
| P2 | #106179 (OPEN) | Dashboard 取消操作后 worker 与 LLM 请求仍在运行 | — |
| P2 | #92837 (OPEN) | Heartbeat"已触发但从未投递"：`last_fired_at`/`fire_count` 被静默错误累加，agent-cache 空闲回收后唤醒丢失 | — |
| P3 | #106292 (OPEN) | Kanban CLI 完成操作绕过 `pre_tool_call` 钩子，导致过早完成与工作区清理 | — |
| P3 | #106006 (OPEN) | Mistral 自定义 Provider 流式输出因新增 `p` 字段崩溃（`'list' object has no attribute 'strip'`），并引发虚假"网络错误"重试循环 | — |
| P3 | #106441 (CLOSED) | 命令审批守卫不覆盖 terminal 工具的凭据文件读取/外泄 | — |

更多 PR 侧待合并修复：`KeyError` PTY 回收崩溃（#106511）、压缩冷却回滚崩溃（#106522）、本地 cron repeat 推导缺失（#106532）均在送审队列中。

## 功能请求与路线图信号

- **#106267 [Feature] per-tool-scope YOLO 模式**（今日新开，评论 4）
  链接：https://github.com/NousResearch/hermes-agent/issues/106267
  用户希望按工具类别（而非全有或全无的 session YOLO）细粒度放行。这很可能进入下一版本的工具权限增强路线图。
- **#106456 [Feature] 自助升级 `~/.hermes/node` 运行时机制**（今日新开）
  链接：https://github.com/NousResearch/hermes-agent/issues/106456
  请求为自管 Node.js 运行时提供文档化或自动化的升级机制，属安装器维护性增强。
- **#106253 [Feature] "Fast" 开关改为"计费优先通道"**（今日新开）
  链接：https://github.com/NousResearch/hermes-agent/issues/106253
  设计取向的改进诉求——认为 Fast 开关现被误读为廉价速度切换，而非计费优先级。
- **#106261 [Feature] 会话上下文需描述客户端而非后端**（今日新开）
  链接：https://github.com/NousResearch/hermes-agent/issues/106261
  远程桌面架构下，代理上下文中的"the user's browser"含混不清，应为客户端语义改写上下文。
- **#69446 [PR] 插件目录（SHA 固定）**（7/22 创建，今日仍更新）
  链接：https://github.com/NousResearch/hermes-agent/pull/69446
  沉淀近 7 周仍开放的插件目录大型 feature PR，附带 CLI/CI/文档/Dashboard 四件套改动。若今日 PR 批量上线模式开启，该 PR 值得重点跟进。

## 用户反馈摘要

- **Cron 模型漂移造成阻断**（#70050）：用户被模型漂移守卫"卡死"，无受支持的 repin 途径。评论者指出守卫初衷是保护用户，但当前无逃生通道让守卫本身成为最深的坑。
- **dashboard 取消体验错乱**（#106179）：用户明确所见状态（已取消）与真实执行状态（仍在运行）脱节，且会引入"幻觉式"的停止感。
- **Heartbeat 缺失无感知**（#92837）：用户报告长时间 gateway 会话的 heartbeat 唤醒被静默丢弃后，即使 agent 已恢复也无法挽回——"没有 error 可查"让该问题更加困难。
- **CLI 命名会话缺 `cwd` 导致组织混乱**（#106334，CLOSED）：用户期望命名会话归入项目侧栏，但在 `--create-if-missing` 下始终归到 Home，破坏组织语义。
- **功能开关引导不足**（#106253）：桌面端 Fast 开关无解释，用户抱怨该 UI 缺乏价值定位，更像"少想一点，跑得快一点"。

## 待处理积压

- **#88584 (OPEN, 评论 80)**  — 自动集成阻塞（`cron/jobs.py` 冲突）已活跃 3 周以上
  链接：https://github.com/NousResearch/hermes-agent/issues/88584
  高评论量持续无明确关闭动作，建议维护者确认冲突并输出解决计划。
- **#69446 (PR OPEN)** — 插件目录（SHA 固定）已开放 7 周
  链接：https://github.com/NousResearch/hermes-agent/pull/69446
  属重要架构级功能，涉及多组件改动，建议评审者评估分步合并。

- **#92837 (OPEN, P2)** — Heartbeat 触发但未投递（3 周）
  链接：https://github.com/NousResearch/hermes-agent/issues/92837
  高风险（消息递送语义 + 状态回滚）且无 fix PR，建议尽快确认复现路径。

- **#106179 (OPEN, P2)** — Dashboard cancel 不取消（今日新开）
 链接：https://github.com/NousResearch/hermes-agent/issues/106179
  涉及用户对"停止/取消"这一基础交互的信任，建议优先分配修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-09

## 1. 今日速览

项目当前处于平稳推进阶段，过去 24 小时内 Issues 更新 3 条（新开/活跃 2 条，关闭 1 条），PR 更新 8 条（7 条待合入，1 条已关闭）。今日关闭了积压已久的 #3265（Gateway 启动因 deltachat 通道类型报错），另有一项历时半年的 skills CLI 重构 PR #714 于今日关闭（非合并）。值得关注的是，两个持续活跃的 Bug（Telegram 消息无限编辑 #3343、飞书未知字段报错 #3355）仍处于 open 状态但已有对应修复 PR 待合入，整体社区维护节奏稳定，活跃度中上。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无新合并 PR，但有两个重要 PR 状态变更值得关注：

- **[PR #714 — [CLOSED] skills: install/reinstall CLI 重构](https://github.com/sipeed/picoclaw/pull/714)**：历时约 6.5 个月后于今日关闭（非合并）。该 PR 涉及 ParseInstallSpec、InstallFromGitHubEx 等新函数，支持 `repo@branch` 和可选子路径安装，并新增 reinstall 子命令。虽未合入，但意味着该方向的开发可能已通过其他方式落地或重新规划。
- **[Issue #3265 — [CLOSED] Gateway 启动失败：未知通道类型 deltachat](https://github.com/sipeed/picoclaw/issues/3265)**：用户在未配置 deltachat 的情况下 Gateway 启动即报错，今日标记关闭。结合活跃的 deltachat 清理 PR（#3222，已更新至 2026-09-08），可以推断该问题与 deltachat 通道的遗留实现有关，相关清理工作持续推进中。

## 4. 社区热点

- **[Issue #3265 — Gateway 启动失败 deltachat 通道报错](https://github.com/sipeed/picoclaw/issues/3265)**（4 条评论，1 👍）— 今日关闭的积压 Issue，用户核心诉求是"未配置的通道不应阻断服务启动"。此前社区围绕 deltachat 通道的生命周期管理有持续讨论，与 PR #3222 的重构方向一致。
- **[Issue #3343 — Telegram 工具反馈动画无限编辑消息](https://github.com/sipeed/picoclaw/issues/3343)**（3 条评论）— 该 Bug 导致 228,000+ 次无效 editMessageText 调用并触发 Telegram 限流，社区关注度高。已有对应修复 PR #3353 在待合入列表中，预计很快解决。
- **[Issue #3355 — 飞书配置报错未知字段](https://github.com/sipeed/picoclaw/issues/3355)**（1 条评论）— 用户使用 Feishu 通道时 config.json 报 `unknown field(s): channel_list.feishu.app_id`，可能与近期飞书配置格式变更相关，目前仅 1 条评论，尚未引起广泛讨论。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 🔴 高 | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Telegram 工具反馈动画在一轮 agent 回合失败后无限循环调用 `editMessageText`，持续数天产生 22.8 万次编辑请求并触发 Telegram API 限流 | Open，已有修复 PR #3353 待合入 |
| 🟠 中 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | 未配置 deltachat 时 Gateway 仍尝试初始化该通道并报未知类型错误，阻塞服务启动 | ✅ 今日关闭 |
| 🟡 低 | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 飞书通道配置校验报未知字段 `feishu.app_id`，用户无法正常配置飞书连接 | Open，暂无对应修复 PR |

**关联修复 PR：** PR #3353（bound tool feedback animations，将动画上限设为 5 分钟，与 Telegram 打字指示器现有上限一致）直接对应 #3343；PR #3222（deltachat 通道清理重构）为 #3265 的根本性修复。

## 6. 功能请求与路线图信号

- **Telegram 对话连续性增强**：PR #3357（将回复 bot 自身消息视为隐式 mention）和 PR #3356（回复文件消息时重新附加引用文档）均针对 `mention_only: true` 群组场景下的对话断裂问题，属于 Telegram 通道体验的精细打磨，预计会被纳入下一版本。
- **IRCv3 多行消息支持**：PR #3354 增加 IRCv3 `draft/multiline` 接收支持，默认请求 `batch`、`message-tags` 等能力，提升 IRC 通道的可用性。
- **OpenCode Go Provider 接入**：PR #3371（今日新建）增加 `opencode-go` provider（`https://opencode.ai/zen/go/v1`），支持按模型 ID 自动路由到正确的 endpoint 并传递 `x-opencode-session` 等会话头。该 PR 今日刚创建，若无冲突预计合入较快。
- **远程代理手机配对**：PR #3344 提出新增 `gbr/1` 协议的配对设备适配器，允许手机远程查看桌面 agent 状态（需安装外部 `gbr-agent` v0.6.0+）。该 PR 已开放 2 周以上且待合入列表中，方向新颖但依赖外部工具链，是否纳入核心路线图待观察。

## 7. 用户反馈摘要

- **配置校验灵活性不足**（来自 #3355）：用户在配置飞书通道时遭遇严格字段校验报错，反馈中表明对"未知字段直接拒绝启动"的校验策略不满，期望更友好的错误提示或向后兼容处理。
- **资源浪费与 API 限流风险**（来自 #3343）：Telegram 无限编辑动画造成了大量无效 API 调用，不仅浪费资源，还触发了平台侧限流。用户对 PicoClaw 的清理机制（lifecycle cleanup）缺失表示关注。
- **GitHub Action 机器人标记的 stale 问题**：多个活跃 Issue/PR（#3343、#3355、#3353、#3354、#3357 等）被标记为 `[stale]`，说明项目自动化 stale 策略下，部分真实需要关注的 PR/Issue 未能及时得到维护者响应，这可能是社区活跃度与维护带宽不完全匹配的信号。

## 8. 待处理积压

- **[PR #3222 — deltachat 实现清理重构（-200LOC）](https://github.com/sipeed/picoclaw/pull/3222)**（创建 2026-07-03，更新 2026-09-08）：距创建已超 2 个月，涉及删除遗留功能、移除硬编码 relay 列表、弃用密码认证等多项清理，且与已关闭的 #3265 直接关联，建议维护者优先 review。
- **[Issue #3343 — Telegram 工具反馈动画无限循环](https://github.com/sipeed/picoclaw/issues/3343)**（创建 2026-08-22）：严重 Bug，修复 PR #3353 已存在且已更新至 9 月 9 日，但尚未合入，建议加速推进以避免更多用户触发 Telegram 限流。
- **[PR #714 — skills CLI 重构](https://github.com/sipeed/picoclaw/pull/714)**（今日关闭未合并，历时 6.5 个月）：该 PR 包含了完整的技能安装/重装 CLI 能力，关闭原因不明，若功能仍有需求建议维护者明确后续方案，避免社区贡献者重复劳动。

---

*本日报数据来源：github.com/sipeed/picoclaw，统计窗口为 2026-09-08 至 2026-09-09。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-09

## 1. 今日速览

项目今日处于中高活跃度状态，共产生 1 条 Issue 更新和 11 条 PR 更新，其中 3 条 PR 已合并/关闭，8 条等待合并。核心维护团队今日贡献了 2 个高价值修复：一是修复社区门户记录 Echo 镜像与实际落地不一致的问题（#3753），二是修复消息回复线程路由问题（#3738）。社区方面主要围绕 WhatsApp 渠道的多项修复展开，同时大批量功能集中在 OpenCode 技能集成上。整体来看，项目正同时推进多渠道稳定性、线程可靠性以及新 AI 服务商接入三条主线。

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日共 3 条 PR 被合并/关闭，显示出稳定的交付节奏：

**已合并/关闭 PR：**

- **[PR #3753] fix: the community portal records the Echo image that actually landed**（已关闭）— 修复社区门户记录的 Echo 镜像与浏览器实际选择不一致的问题。此前登录时会在浏览器确认前就写入 `NANOCLAW_HARDENED_IMAGE=true`，导致记录与真实情况脱节。该修复提升了安装配置的准确性。
- **[PR #3738] fix(agent-runner): thread replies from the message being answered**（已关闭）— 修复 `send_message`、`send_file` 及 `<message to>` 回复无法正确路由到被回复消息所在线程的问题。此前文件会错误地落入主频道。该修复完善了多线程场景下的消息路由可靠性。
- **[PR #3729] feat(setup): connect the host to its community cell and manage perks in the browser**（已关闭）— 将 Echo 和 Slack 的安装配置迁移到社区门户，用户通过单次浏览器访问即可完成主机与其社区单元的连接，并在浏览器中管理 perks。

**主要方向：** 值得注意的 OpenCode 技能集成系列（#3747、#3733、#3746）虽仍在待合并阶段，但由开发团队成员持续推动，覆盖了 provider 契约、宿主认证、取消传播、失败传递等深度能力。一旦合并，将显著扩展 NanoClaw 的 AI 服务商接入能力。

---

## 4. 社区热点

今日社区热度相对分散，多数 PR 评论较少。最受关注的是：

- **[Issue #3705] ncl tasks update --recurrence doesn't recompute the next scheduled fire (process_after)**（1 条评论，更新于今日）— 有评论指出的定时任务周期更新问题。任务从原周期切换为新周期后，`process_after` 仍保留旧值，导致实际触发时间不符合用户预期。

**分析：** 该 Issue 本质上反映的是用户对**定时任务语义一致性**的期待——当修改任务节奏时，系统应当立即基于新节奏重新计算下一次执行时间，而不是等待旧周期走完。这类问题在处理周期任务调度场景中具有较高的优先级，因为它直接影响用户对任务系统可靠性的体验。目前尚未看到对应的修复 PR，值得关注后续进展。

---

## 5. Bug 与稳定性

按严重程度排列：

**高：**

1. **定时任务更新后触发时间不重算（[Issue #3705]）** — 用户使用 `ncl tasks update --recurrence <new-cron>` 修改任务节奏后，`process_after` 未按新计划重新计算。如果用户将周任务改为每日任务，任务仍按旧的周间隔触发。目前**尚无修复 PR**，且已存在 6 天（2026-09-03 创建）。鉴于该问题可能造成任务丢失或延迟执行，维护者需尽快介入。

**中：**

2. **更新控制器无法加载 `scripts/provider-contract-verifier.ts`（[PR #3750]）— fix(update): extract the whole scripts/ tree for the update controller** — `/update-nanoclaw` 控制器提取的上游 `git archive` 列表中遗漏了被 `scripts/update-skills.ts` 导入的文件，导致更新流程被破坏。已有修复 PR 处于 OPEN 状态。
3. **社区门户 Echo 镜像记录与实际不符（[PR #3753]）** — 登录时提前写入 `NANOCLAW_HARDENED_IMAGE=true`，导致门户记录可能与浏览器实际选择不一致。**该 PR 今日已闭环**，问题已解决。

**低：**

4. **跨线程消息在同一处理窗口下被丢弃（[PR #3749]）** — 触发消息来自不同线程并落在同一处理窗口时，部分线程的回复可能被丢弃。已有修复 PR 提出"每次线程仅处理一次 Agent 调用"的方案，处于 OPEN。
5. **WhatsApp 渠道多项问题（[PR #3752]、[PR #3751]）** — 新增两条 WhatsApp 修复：保持聊天中所有待回答问题的可回答性；在入站边界忽略 `@newsletter` JIDs。两条 PR 均处于 OPEN 待合并。

---

## 6. 功能请求与路线图信号

今日功能需求信号：

- **定时任务周期重算（[Issue #3705]）** — 虽然这是一个 Bug 报告，但其本质涉及对 `tasks update` 命令行为的设计改进，应被纳入后续修复的优先项（详见 Bug 部分）。
- **上下文预览工具复活（[PR #3745]）— feat(context-preview): revive the context-preview tool on main** — 由开发团队主导，尝试在今天的 main 分支上恢复 `scripts/context-preview.ts`（"查看 Agent 看到的内容"可视化工具），使维护者或 e2e 测试能在不启动容器的情况下打印 Agent 读取的确切上下文。尽管该 PR 创建于 2026-09-08，但在 24 小时窗口内仍显活跃条目。如该功能重新可用，对**开发者调试与测试体验**是显著提升。

**对下一版本方向的判断：** OpenCode 技能集成（#3747、#3733、#3746 系列）是最值得关注的可能纳入下一版本的能力。这三条 PR 覆盖了 provider 契约、自包含安装、取消/失败状态传播等全面改造，团队内部持续推进，可能标志着 NanoClaw 在 AI 服务商生态兼容方面的重要扩展。

---

## 7. 用户反馈摘要

从今日 Issue 及 PR 评论中可提取的用户反馈主要包括：

- **[Issue #3705]** — **真实痛点**：修改任务频率后，定时器实际触发节奏未跟上用户预期。案例中"将任务从每周切换为每日"后，系统仍保留旧的执行节奏，用户在调度可靠性方面的体验受损。
- **[PR #3753]** — 用户在社区门户中完成了"选择 Echo 镜像"的操作，但门户记录可能覆盖了用户真实选择之外的条目，反映出安装流程中**操作与结果一致性**对用户体验的影响。
- **[PR #3752][PR #3751]** — 社区成员持续关注 WhatsApp 消息处理的行为一致性：确保每个消息触发的问题都能被回答（而非因处理窗口限制被丢弃），以及入站边界的垃圾/新闻类消息过滤。

整体来看，用户对**渠道消息路由可靠性**、**定时调度正确性**和**安装记录准确性**的关注度较高。

---

## 8. 待处理积压

**高关注度、待响应：**

- **[Issue #3705] ncl tasks update --recurrence doesn't recompute the next scheduled fire (process_after)** — 2026-09-03 创建，已存在 6 天，有 1 条评论，目前尚无修复 PR 或官方回应。此类与调度相关的正确性问题应优于新功能处理，建议维护者尽快评估并安排修复。

**其他尚待合并的功能性 PR（注意非阻塞）：**

- [PR #3751] WhatsApp @newsletter JID 入站过滤（OPEN，2026-09-09）
- [PR #3752] WhatsApp 保持问答可用性（OPEN，2026-09-09）
- [PR #3750] update 控制器提取完整 scripts 树（OPEN，2026-09-08）
- [PR #3749] 每线程一次 Agent 调用，避免回复丢失（OPEN，2026-09-08）
- [PR #3745] 上下文预览工具在 main 上复活（OPEN，2026-09-08）
- [PR #3752] 以及 OpenCode 系列 PR 均待维护者审查

---

> **项目健康度总结：** 合并与关闭比例 3/11 说明部分 PR 因需求明确而快速闭环，但 8 条待合并 PR 中多数由团队核心成员提交（标记为 core-team），积压可能主要由审查节奏决定而非质量因素。暂时缺少版本发布也意味着这些修复尚未对用户产生实际交付价值，建议关注近期发布计划。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-09

## 1. 今日速览

IronClaw 过去 24 小时保持高活跃度：共 2 条 Issue 更新与 11 条 PR 更新，其中 5 条 PR 已合并/关闭，6 条待合并。核心开发主线集中在 hosted-MCP 扩展体系的权限隔离与目录管理问题上——两个已关闭 PR（#8083、#8088）与两个新提交 PR（#8084、#8090）直接回应了昨日报告的跨用户元数据暴露风险，修复节奏快。另有两项基础设施改进：环境变量空值语义区分与提示词上下文上限可配置化。🚀 项目当前处于积极的功能修复与加固周期，适合跟进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭了 5 个 PR，推进了以下方向：

- **Hosted-MCP 目录管理核心修复**：PR #8083（已合并）将 hosted-MCP 发现的目录由"整体替换"改为"合并"语义，修复了多用户场景下后发现的目录会擦除先前用户工具注册的问题。该 PR 与新的开放 PR #8090 形成一条连贯修复链，后者更进一步，将目录键从"按扩展 ID"改为"按调用者"隔离。两者共同指向一个根治方案。
- **环境变量语义准确化**：PR #8088（已合并）引入了"已设置为空"与"未设置"的区分能力，解决了显式覆写为空字符串时静默回退到默认值的问题，对端点上覆写类部署配置尤为重要。
- **agent-market 市场扩展打包落地**：PR #8089（已合并）将 agent.market 提供方以第一方包形式集成进仓库，包含清单、工具输入模式及静态工具声明，作为动态发现前的预发现回退；PR #6760 作为同目标的早期尝试已关闭（标记为形状上被 #8089 取代，意图层面未过时）。
- **SEP-414 归属机制与打包方案**：PR #6759 与 #6760 虽已关闭，但其内容分别被新的开放版 PR #8084（SEP-414 调用方归属）与 #8089（agent-market 打包）以更完善的形态接续推进，体现了迭代式开发节奏。

## 4. 社区热点

- **Issue #6778（2 条评论）**：[Hosted-MCP 跨用户元数据暴露](https://github.com/nearai/ironclaw/issues/6778)（7 月 28 日创建，9 月 8 日更新）长期悬而未决，今日直接触发了 PR #8090 的提交及相关合并，是本轮修复的直接驱动力 ，社区关注度高。
- **Issue #8086（0 条评论）**：[`ironclaw skills list` 不可见运行时技能](https://github.com/nearai/ironclaw/issues/8086) 讨论热度虽低，但暴露了 CLI 与运行时之间明显的技能可见性断裂，是开发流程中的真实摩擦点。
- **PR #8083（已合并）与 PR #8090（开放）**：围绕同一核心缺陷的先后两道修复方案，形成"先止血、再根治"的双步节奏，是当前讨论中心的修复主线，链接见上。

需求端分析：社区目前最集中的诉求是**多租户隔离与数据安全**，集中在 hosted-MCP 供应商在共享服务器上如何按调用者隔离工具注册状态与调用归属；其次是**CLI 工具链与运行时的一致性**，即运维与排障链路中所见应等于实际运行状态。

## 5. Bug 与稳定性

按严重程度排序（高→低，含修复状态）：

| 严重度 | Issue / PR | 问题描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [Issue #6778](https://github.com/nearai/ironclaw/issues/6778) | 跨用户元数据暴露：工具发现按扩展 ID 发布而非按安装隔离，多主体服务器上存在用户 A 的调用信息泄露给用户 B 的风险 | 部分修复：PR #8083 已合并（合并非替换）；根治方案 PR #8090 待合并 |
| 🔴 高 | [PR #8083](https://github.com/nearai/ironclaw/pull/8083)（后随 [PR #8090](https://github.com/nearai/ironclaw/pull/8090)） | 同根因的另一表现：后发现的目录直接替换先前的，导致用户工具互相擦除 | PR #8083 已合并（合并语义）；PR #8090（按调用者键隔离）待合并 |
| 🟡 中 | [Issue #8086](https://github.com/nearai/ironclaw/issues/8086) | CLI 无法看到运行时写入的技能及非配置用户的技能，排障工具返回空列表，误导判断 | 尚无对应 fix PR |
| 🟢 低 | [PR #8088](https://github.com/nearai/ironclaw/pull/8088)（已合并） | 设空与未设置的配置变量被等同对待，显式空覆写静默落入默认分支，为潜在配置错误埋下隐患 | 已修复 |

## 6. 功能请求与路线图信号

结合今日的 PR 与历史提交，以下新功能正在成型：

- **SEP-414 调用方归属**（[PR #8084，开放中](https://github.com/nearai/ironclaw/pull/8084)）：为出站 hosted-MCP 调用添加可选归属元数据，使供应商能区分调用来源对话及识别重试。对需要按会话计费或有会话级状态的供应商是关键能力，若合并将补齐 hosted-MCP 的多租户闭环。
- **托管 MCP 目录按调用者隔离**（[PR #8090，开放中](https://github.com/nearai/ironclaw/pull/8090)）：与上一项相辅相成，一并构成多租户 hosted-MCP 服务所需的完整隔离模型。
- **提示词上下文预算可配置化**（[PR #8087，开放中](https://github.com/nearai/ironclaw/pull/8087)）：128k 硬编码改为可覆写项，适配大上下文模型部署；属低成本高回报配置化改进，大概率进入下一版本。
- **附件的指针模式**（[PR #8082，开放中](https://github.com/nearai/ironclaw/pull/8082)）：避免内联提取的文档文本耗尽上下文窗口（单 PDF 约 25k tokens），改为可选指针模式，"先引后取"的策略对长文档场景明显更友好。
- **Telegram 命令菜单注册**（[PR #8072，开放中](https://github.com/nearai/ironclaw/pull/8072)，作者 thisisjoshford）：在激活时注册 `/model`、`/status` 等命令到 Bot API 菜单，改善端用户体验。
- **操作员安装的包等同宿主内置包**（[PR #8085，开放中](https://github.com/nearai/ironclaw/pull/8085)）：修复构造器与校验函数对 inline 动态描述模式来源的判定不一致问题，使操作员安装的包可被正常构建和使用。

其中 PR #8082、#8084、#8085、#8087、#8090 均为 9 月 8 日新提交且处于开放状态，有望在下个版本批次中统一纳入。

## 7. 用户反馈摘要

- **跨用户隔离诉求明确**：Issue #6778 的讨论指出当前实现"以首个激活用户的凭据执行发现 → 按扩展 ID 全局发布"，在多主体（multi-principal）服务器上会导致用户工具集合互相覆盖甚至越权可见。维护者当日的快速响应（同日提交 PR）表明该问题已被验证并纳入修复优先级。
- **调试链路断裂引发不满**：Issue #8086 的作者（kirikov，亦是多个核心 PR 的提交者）描述了真实的调试困境——当 Agent 提示"看不到技能"时，自然想到用 `ironclaw skills list` 排查，却因 CLI 与运行时视图不一致而得到空列表，反而误导判断方向。这个反馈指向工具链一致性的系统性改进空间。

## 8. 待处理积压

- **Issue #6778 长期未闭环**：[Hosted-MCP 跨用户元数据暴露](https://github.com/nearai/ironclaw/issues/6778) 自 7 月 28 日创建至今已近六周，虽今日有 PR #8090 直接回应，但**该 PR 尚待合并**，当前合并的 #8083 仅是过渡修复。建议维护者跟进 #8090 的评审进度，以确保此安全隐患彻底闭环。
- **Issue #8086 尚无响应**：[`ironclaw skills list` 不可见运行时技能](https://github.com/nearai/ironclaw/issues/8086) 为 9 月 8 日新提交，暂无评论或关联 PR。考虑到作者同时提交了今日多份核心修复 PR，此问题可能因其精力集中于目录安全修复而暂时搁置，但建议尽快确认是否纳入排期（工具链一致性影响日常排障效率）。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：** 2026-09-09
**数据来源：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)


## 1. 今日速览

过去24小时项目活跃度较高：Issue 侧更新 20 条（新开/活跃 16、关闭 4），PR 侧更新 14 条（合并/关闭 11、待合并 3）。核心动态集中在 OpenClaw v2026.8.1 升级的适配修复上——今日合并的 9 个 PR 中有 8 个由同一开发者（@btc69m979y-dotcom）提交，针对升级后暴露的 Gateway 启动、配置同步、Discord/QQ 插件兼容与 Windows 进程退出等问题进行系统性修复。此外，今天有 5 条来自安全研究者的 Issue（编号 #2286–#2288 等，均为 7 月提交）在本日被"stale"标记并更新，涉及本地 token 代理未鉴权、文件泄露、SSRF 防护弱化等安全风险，但均未见对应修复 PR。整体判断：**项目处于上游升级后的密集修复期（健康推进），但安全类报告的响应滞后值得关注。**


## 2. 版本发布

今日无新版本发布。

> 注：今日合并的 PR 集中于 OpenClaw v2026.8.1 升级适配，可关注下一版本（预计为月度 release）将包含这些修复。


## 3. 项目进展

今日合并/关闭的 11 个 PR 中，9 个为实际代码修复（非 Dependabot/文档类），集中围绕 **OpenClaw v2026.8.1 升级后的兼容性与回归问题**，整体向前推进明显：

**🎯 升级适配核心修复（同一主线）：**

- **[PR #2638](https://github.com/netease-youdao/LobsterAI/pull/2638)**（合并）修复升级后"Legacy workspace setup state requires migration"阻塞对话的问题——在网关启动前完成旧 workspace 状态迁移。
- **[PR #2632](https://github.com/netease-youdao/LobsterAI/pull/2632)**（合并）修复退出登录/模型未加载时配置被缩减导致 IM 账号与路由丢失的问题；同时将 Windows 下 `child.kill(SIGTERM)` 改为 IPC 请求正常停止，避免不洁退出。
- **[PR #2633](https://github.com/netease-youdao/LobsterAI/pull/2633)**（合并）适配 Discord 新版 schema：输出账户顶层 `dmPolicy` / `allowFrom`，修复网关启动前配置校验失败。
- **[PR #2635](https://github.com/netease-youdao/LobsterAI/pull/2635)**（合并）修复 `config.get` 返回旧 hash 导致配置下发失败与不必要的 Gateway 重启——加入有界退避重试。
- **[PR #2637](https://github.com/netease-youdao/LobsterAI/pull/2637)**（合并）修复 Discord 插件被 v2026.8.1 拒绝注册（`openKeyedStore is only available for trusted plugins`）——改为 trusted plugin origin 打包。
- **[PR #2634](https://github.com/netease-youdao/LobsterAI/pull/2634)**（合并）修复 QQ 插件收到关闭信号直接退出导致清理收尾失败；同时修复重启后桌面 IM 仅恢复连接未恢复消息同步的问题。
- **[PR #2639](https://github.com/netease-youdao/LobsterAI/pull/2639)**（合并）修复切换模型时 `default_model` 被渲染进所有 system prompt 的问题。
- **[PR #2631](https://github.com/netease-youdao/LobsterAI/pull/2631)**（合并）修复定时任务历史与失败状态在升级后的回归问题（重复导入、持久化失败状态缺失）。

**平台/体验优化：**

- **[PR #2636](https://github.com/netease-youdao/LobsterAI/pull/2636)**（合并）修复切换语言后"关于"页更新按钮仍显示旧语言（如"检查更新"）的问题。

**⏳ 仍待合并（3个）：**

- **[PR #2640](https://github.com/netease-youdao/LobsterAI/pull/2640)**（待合并）延续 #2639 修复，将默认 `modelSelectionScope` 显式设为 `"session"`，避免会话切换影响默认偏好。
- **[PR #2358](https://github.com/netease-youdao/LobsterAI/pull/2358)**（待合并）会话重命名失败时缺少用户提示反馈，修复 Issue [#670](https://github.com/netease-youdao/LobsterAI/issues/670)。（7月提交，stale）
- **[PR #2373](https://github.com/netease-youdao/LobsterAI/pull/2373)**（待合并）图片附件行为与模型视觉能力同步（切换为无视觉模型时清理残留的 `dataU...`）。（7月提交，stale）

**💡 点评：** 升级适配工作今日迎来集中收口，至少解决 7 个用户在升级 v2026.8.1 后可能遇到的阻塞性问题（网关无法启动、IM 掉线、定时任务失效、错误配置下发等）。"IM 启动/停止生命周期"这条修复线（#2632→#2634→#2637→#2633）体现了对 Windows 桌面端用户体验的系统性打磨。


## 4. 社区热点

今日活跃度较高的讨论集中在以下 Issues（多为较早提交但在今日获得更新）：

1. **[Issue #2046：Agent 记忆体系产品建议](https://github.com/netease-youdao/LobsterAI/issues/2046)**（评论 3 条，创建于 05-25，今日关闭标记为 stale）
   用户提出跨 session 记忆割裂的痛点，建议：① 将 Session 标题/元数据持久化到文件系统 ② 自动感知并关联历史对话。背后诉求指向 **Agent 长期记忆能力缺失** 这一核心体验短板。

2. **[Issue #1903：会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903)**（评论 4 条，今日关闭标记为 stale）
   用户付费网易模型却因会员登录失败无法使用，"无法使用网易付费的模型"直接指向**付费转化与信任**问题，属于高优先级体验问题。

3. **[Issue #2079：执行结果窗口滚动到顶端会假死](https://github.com/netease-youdao/LobsterAI/issues/2079)**（3 条评论，"现象能复现"）
   UI 假死类 Bug，用户明确给出复现路径（2026.5.27 版本）。

4. **[Issue #2121：对重复输出消耗 token 的疑问](https://github.com/netease-youdao/LobsterAI/issues/2121)**（3 条评论）
   用户担心重复输出消耗大量 token——反映对 token 成本的敏感，这种诉求在各 AI Agent 产品中最普遍。

5. **[Issue #2230：同一模型 LobsterAI 比 CodeBuddy 慢很多](https://github.com/netease-youdao/LobsterAI/issues/2230)**（对比：25 分钟 vs 2m24s；60M vs 67K Token）
   性能对比尖锐，**数量级差距**很可能成为用户放弃 LobsterAI 转向竞品的理由，值得严肃关注。

> 注：上述 Issue 均被标记为 `stale`，意味着它们虽在今日有更新，但并非全新讨论。今日更新的 20 条 Issue 全为 stale，说明活跃 issue 池有「僵化」倾向。


## 5. Bug 与稳定性

### 🔴 安全漏洞（Severity: Critical——建议尽快处理）

由 @YLChen-007 报告，提交于 6-7 月、今日更新但**均无对应修复 PR**：

- **[Issue #2286](https://github.com/netease-youdao/LobsterAI/issues/2286)**：本地 token 代理未鉴权——任意本地进程可重放受害者已认证的 server-model API 能力（7/07 提交）
- **[Issue #2287](https://github.com/netease-youdao/LobsterAI/issues/2287)**：NIM 出站媒体流可经 assistant 生成的绝对路径实现主机本地文件外泄（7/07 提交）
- **[Issue #2288](https://github.com/netease-youdao/LobsterAI/issues/2288)**：HTML 预览服务器跟随 in-root 符号链接、泄露任意本地文件（7/07 提交）
- **[Issue #2176](https://github.com/netease-youdao/LobsterAI/issues/2176)**：自动 artifact 加载允许消息派生的任意本地文件读取（6/18 提交）
- **[Issue #2181](https://github.com/netease-youdao/LobsterAI/issues/2181)**：默认恢复私网浏览器访问并削弱内置 SSRF 防护（6/21 提交）

### 🟠 高严重度 Bug

- **[Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214)**（6/26 提交，无 PR）：桌面端"数据备份"（71.6 MB SQLite + WAL 模式）点击后 5-10 秒**主进程卡死、100% 可复现**，只能强杀进程。
- **[Issue #2230](https://github.com/netease-youdao/LobsterAI/issues/2230)**（6/30 提交）：同模型任务耗时 25 分钟（对比 CodeBuddy 2m24s），Token 消耗 60M（对比 67K），数量级性能异常。

### 🟡 中低严重度 Bug

- **[Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)**：执行结果窗口滚动到顶端假死（可复现，无 PR）。
- **[Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216)**（6/28）：Memory Search embedding provider 被锁定为 openai，无法切换 local；429 配额耗尽后功能不可用；索引重建被 DB 锁阻塞（EBUSY）。
- **[Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2215)**（6/27）：安装反复出现 `Resource extraction failed: could not start extractor process`，用户排查路径详尽（关闭安全软件、清理残留均无效）。
- **[Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121)**（6/07）：重复输出疑似 Bug 造成 token 浪费。
- **[Issue #1152](https://github.com/netease-youdao/LobsterAI/issues/1152)**（3/31，今日 closed）：v2026.3.30 版本 corp 邮箱 IMAP 连接失败（个人环境，同事正常）。

### ✅ 今日已有修复的 Bug

- 升级 v2026.8.1 的网关启动阻塞（workspace 迁移）、Discord 注册被拒、配置丢失、错误重启、QQ 收尾/同步失败、定时任务回归等——均由今日合并的 PR #2631–#2639 系列覆盖。


## 6. 功能请求与路线图信号

### 讨论热度高 / 与现有 PR 方向一致的需求：

1. **会话级记忆与跨 session 持久化**
   [Issue #2046](https://github.com/netease-youdao/LobsterAI/issues/2046) 诉求为：session 标题/元数据持久化到文件系统、Agent 自动检索历史关联。判断：结合 [#2634/#2632 对 IM 同步与生命周期修复主线的投入](https://github.com/netease-youdao/LobsterAI/pull/2634)，记忆体系应属路线图中期方向，短期落地概率中等。

2. **任务流水线（预输入 + 延长单次运行时长）**
   [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) 建议借鉴 workbuddy 的"任务存储/预输入"机制；同时抗议单次任务运行至 script 持续执行时被 terminated。判断：任务调度时长与队列机制在小版本（如 v2026.9.x）内可能排入；但排期并不确定。

3. **跨模型子任务协作机制**
   [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)（今日关闭）探讨主任务（M3）+ 子任务（DeepSeek）的协作失灵：子任务完成后主任务无法感知，建议子任务完成/卡点时主动通知主任务。机制合理、复用同模型子任务通知逻辑，判断此内容可作为后续版本任务编排模型的参考。

4. **"AI Collaborator"平台构想与模型路由**
   [Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180) 提出升级为"AI Collaborator"平台——自然语言命令栏 + 任务分发控制台。同时 [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) 在询问 hermes agent 支持计划。判断：此类能力属中长期平台演进方向，短期无落地迹象。

5. **技能文件监听的性能与 UI 开关诉求**
   [Issue #2243](https://github.com/netease-youdao/LobsterAI/issues/2243) —— 用户有 174 个技能，watch 机制造成每次文件变动触发快照刷新、浪费大量 token 与 I/O；此外 watch 持久化存在 bug，且缺乏 UI 关闭开关。判断：已提供明确场景与数据支撑，很可能在近期版本中提供 UI 开关或更优的 watch 策略。

6. **编程工具链联动（OpenCode/CodeBuddy）**
   [Issue #2239](https://github.com/netease-youdao/LobsterAI/issues/2239) 分析"编程工具 OpenClaw 化 ↔ OpenClaw 工具编程化"趋势，建议深度打通 CLI/工具链。判断：当前 LobsterAI 主线聚焦 Agent 底座，此项更可能以**插件生态**形式逐步完善。

### 综合预判：
短期（下一版本）最可能看到：**模型选择相关的 session-scoped 修复（#2640）与技能监听 UI 开关**——前者已有合并的前序 PR（#2639）垫底，后者用户数据充分、改动量可控。


## 7. 用户反馈摘要

- **登录即付费门槛（付了钱用不了）**：会员登录失败直接挡在付费模型（网易）之前，是最大的挫败点（[#1903](https://github.com/netease-youdao/LobsterAI/issues/1903)）。
- **性能差距可能导致用户流失**："同样装 DBX、同样提示词，CodeBuddy 2m24s / 67K token，LobsterAI 25 分钟 / 60M token"（[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)）——这种数量级差距会直接推动用户迁移到竞品。
- **token 敏感度高**：有用户看到页面大量重复输出，第一反应是"是不是在大量吃我的 token 造成浪费"（[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)），可见用户对 token 成本非常在意。隐含需求是希望有"token 流向可视化或异常提醒"。
- **长时间任务不可中断**：用 claw 监控数据抓取脚本时，出现任务被 terminated、监控停止但脚本仍在跑（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)）。希望延长单次运行时长 + 支持排队预输入。
- **大量技能用户被 watch 性能困扰**：174 个技能导致启动扫描+文件监听浪费大量 I/O 与 token（[#2243](https://github.com/netease-youdao/LobsterAI/issues/2243)）；移除 167 个后仍未彻底解决——watch 缺少 UI 开关是核心症结。
- **记忆碎片化的真实痛点**：跨 session 手动维护 Agent 记忆，信息丢失、重复劳动（[#2046](https://github.com/netease-youdao/LobsterAI/issues/2046)）。
- **升级适配产生的用户信任成本**：升级 OpenClaw v2026.8.1 后出现的 Discord 拒绝注册、QQ 收不到消息、定时任务异常等问题均由今日 PR 修复，说明升级 QA 流程仍有提升空间，用户对"升级=新问题"的感知会积累。


## 8. 待处理积压

### 🔴 高优先级（安全类，长期无响应）

| Issue | 标题 | 提交时间 | 状态 |
|---|---|---|---|
| [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) | 自动 artifact 加载允许消息派生的任意本地文件读取 | 06-18 | 无 PR |
| [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) | 恢复私网浏览器访问 + 削弱 SSRF 防护 | 06-21 | 无 PR |
| [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) | 本地 token 代理未鉴权（可重放已认证模型 API 能力） | 07-07 | 无 PR |
| [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) | NIM 出站媒体流允许主机本地文件外泄 | 07-07 | 无 PR |
| [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | HTML 预览服务器跟随符号链接泄露本地文件 | 07-07 | 无 PR |

> 5 个安全 Issue 均由 @YLChen-007 在 6-7 月系统性提交，至今均无官方确认或修复 PR，建议维护团队优先响应。

### 🟠 高严重度 Bug（有复现路径但无 PR）

- [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214)：桌面端备份导致主进程 100% 卡死（提交于 06-26，严重程度高）
- [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079)：执行结果窗口滚动到顶端假死（提交于 05-30，可复现）
- [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215)：安装反复失败 `Resource extraction failed`（提交于 06-27）
- [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216)：Memory Search 无法切换 embedding provider + DB 锁阻塞（提交于 06-28）
- [#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)：同模型性能较 CodeBuddy 慢一个数量级（提交于 06-30）

### 🟡 长期排队 PR（2个月+，stale）

- [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)：会话重命名失败无 UI 反馈（fixes #670，07-18 提交）
- [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)：图片附件与模型视觉能力同步（07-21 提交）

> 两个前端小修复已排队近两个月，可能与主开发线集中在 OpenClaw 适配有关，建议在下一迭代窗口及时合入，避免社区贡献者流失。

---

*本报告基于 GitHub 公开数据生成，所有链接均指向 netease-youdao/LobsterAI 仓库。*

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

# CoPaw 项目动态日报 — 2026-09-09

## 1. 今日速览

项目今日活跃度中等偏高：过去 24 小时共产生 53 条 Issue/PR 动态，其中新开或活跃 Issues 9 条、关闭 11 条；PR 侧 33 条更新中 24 条仍在推进（含 6 条 Under Review），9 条已合并关闭。无新版本发布，但 Issue #7635 记录了 v2.2.1-beta.1 的安装验证任务，且多条 PR 与 Bug（如 #7597、#7228、#7622）已关闭，说明修复合入节奏正常。值得关注的是，**大量 Bug 集中在 Console 前端 UI 与桌面端运行时体验**（弹窗遮罩失效、已安装应用仍显示"安装"、Chrome 下流式渲染空白等），而功能侧则呈现两条清晰主线：**MCP 可配置性与技能（Skills）体系升级**，后者对应多天来持续活跃的 Issue #7557 与 PR #7609。

## 2. 版本发布

过去 24 小时内无新版本发布。唯一相关动态为 Issue #7635（已关闭），记录 v2.2.1-beta.1 的安装验证任务，截止时间为 2026-09-08 15:46 UTC。

## 3. 项目进展

今日合并/关闭的 PR 在多条线上推动了项目进展，其中两项尤为关键：

- **修复已安装应用在应用市场的错误显示状态（#7228 → PR #7651）**：PR #7651 将本地 PawApp 条目与市场列表按 App ID 匹配（不再依赖不一致的作者字段），解决已安装应用悬停仍显示"安装"的问题——这条 Issue 自 8/24 创建后搁置了两周多，今日关闭。链接：[PR #7651](https://github.com/agentscope-ai/QwenPaw/pull/7651)
- **MCP HTTP/SSE 客户端超时可配置化（#3997 → PR #7649）**：为 MCPClientConfig 及各 API Schema（MCPClientInfo / Create / Update 请求）增加可选的 http_timeout 字段（秒，gt=0），并贯通到 Driver 层。Issue #3997 是 5 月 2 日创建的长期请求，今日总算闭环。链接：[PR #7649](https://github.com/agentscope-ai/QwenPaw/pull/7649)
- **技能版本与依赖校验落地（#7557 → PR #7609）**：在工作区/技能池 API 与 Console UI 中暴露可选的技能版本号（作者维护），为 env/bin/MCP 声明增加字段级校验，并在技能安装/更新时检查前置依赖。这直接回应了#7557中"同一技能在多个工作区复制却无版本管理"的痛点，是 Skills 体系规范化的重要一步。链接：[PR #7609](https://github.com/agentscope-ai/QwenPaw/pull/7609)
- **应用市场全链路 Bug 修复**：PR #7651（App ID 匹配）与 PR #7650（应用版本不匹配时正确显示"更新"提示）同日合并，基本覆盖了 #7177/#7228 所暴露的应用市场体验问题。链接：[PR #7650](https://github.com/agentscope-ai/QwenPaw/pull/7650)

其余合并项集中在文档与 CI 清理，整体看项目今日完成了 4-5 个用户可感知的体验修复，但无新功能模块落地，属于"消化存量"的一天。

## 4. 社区热点

- **Issue #7177 — deploy 首页操作入口位置优化**（8 条评论，2026-08-20 创建，今日仍在活跃）：虽然 [#7635](https://github.com/agentscope-ai/QwenPaw/issues/7635) 已体现了问题热度，该 Issue 讨论的是手机端操作便捷性——用户希望将操作入口移到页面顶部，并附截图说明当前底部入口在手机上操作不便。这是典型的移动端体验诉求，搁置近三周仍无维护者回应，社区耐心在消耗。链接：[#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177)
- **Issue #7579 — 模型回复"意外从上下文中丢失"**（8 条评论）：用户报告回复已持久化，但后续请求中模型收不到自己刚说的话（空响应症状），已附带详细环境信息（QwenPaw Desktop 2.2.0、qwenpaw-backend.exe、Python 3.11，Pydantic 字段 `_maybe_stamp_fi...`）。这条 Bug 触及对话连续性核心，已有 9/6 至今 3 天未关闭，用户等待答复中。链接：[#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)
- 此外 #7597、#7228 各有 6-7 条评论且均已在今日关闭，反映出这两条深度影响用户操作的 Bug 获得了完整闭环。

整体社区情绪：**应用市场与应用管理相关体验是本周用户抱怨最集中的领域**，而 #7177 已近 3 周未获官方任何回复，堪称最需要关注的长尾 Issue。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| **严重** | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | 模型回复已持久化但后续请求中缺失（模型看不到自己刚说的话，空响应）— 对话连续性核心问题 | 开放中，无 fix PR |
| **严重** | [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) | 工具返回图片/PDF 二进制时以裸 Base64（"type":"data"）发送，触发 400 "file must have a file_id or file_data" | **已关闭**（有修复方案） |
| **中等** | [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | llama.cpp v0.4.0-dev 新版版本号格式（5 位 build 号如 b10853）解析失败，has_update 误判为"有更新"，并**静默回滚**用户已手工升级的运行时 —— 数据安全风险较高 | 开放中，无 fix PR |
| **中等** | [#7622](https://github.com/agentscope-ai/QwenPaw/issues/7622) | v2.2.0 后台弹窗遮罩失效，背景内容透出 — 第三方插件卸载后仍复现，确认是官方样式问题 | **已关闭**（确认修复） |
| **中低** | [#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228) | 应用市场中已安装应用悬停仍显示"安装"按钮 | **已关闭**（PR #7651 修复） |
| **中低** | [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642) | Console 流式渲染在 Chrome 中整轮结束前无任何内容（同一会话 Safari 正常） | 开放中，无 fix PR |
| **低** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | QwenPaw 2.0.1 首页在 Edge+Wayland 下高 CPU，疑似大结果集渲染/WebSocket 推送触发 | **已关闭**（老版本，已解决或过期） |

**社区贡献的自荐修复值得关注**：

- PR [#7647](https://github.com/agentscope-ai/QwenPaw/pull/7647) — 支持出站媒体传 Base64 Data URL（此前被当作本地文件路径处理），与今日 #7597 高度相关，疑似同一问题的另一侧修复，建议维护者合并评估。
- PR [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) — 修复 Playwright 驱动死连接后浏览器后端永久不可用的健壮性问题（"Connection closed while reading from the driver"），首次贡献者提交，8/7 至今待审近 1 个月。
- PR [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) — 修复当工具的响应同时含 content（人类可读文本）与 structuredContent（规范化 JSON）时适配器产生重复结果的问题（#6958），自 8/13 提交至今已 27 天仍待合并。

---

## 6. 功能请求与路线图信号

- **MCP 能力增强方向**：今日合并的 PR #7649（MCP timeout 可配置）与已关闭的 #3997 表明，MCP 生态的可配置性是维护者当下在落实的诉求。仍在开放中的 #7650（QQ 频道请求的顶层 JSON 参数，如 QQ 号、手机号、工号如何透传给 MCP 工具）则为该方向的下一个潜在功能点，值得关注。链接：[#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650)

- **技能（Skills）体系系统性升级正在推进**：PR #7609 已为技能引入版本与依赖校验，而今日另有 PR #7640（修复 clawhub 技能通过 url 下载失败，关联 #7634）在审，且 Issue #7557 中提到的痛点（"同一套技能没有版本号、每次复制到每个工作区"）已初步被 #7609 解决——这条线索上预计还有后续动作。链接：[PR #7640](https://github.com/agentscope-ai/QwenPaw/pull/7640)

- **Console 前端设置项待办**：需求如 #7648（自定义网页标签标题，多面板用户痛点）、#7644（默认 Agent 的必要参数应可编辑，如 email 与模型路由）、#7601（回退手动编辑路径：2.1.0 支持、2.2.0 被移除），以及 #5329（侧边栏简介模式切换 Agent + 新建聊天入口）、#7600（任务运行状态指示器"Traffic Light"）等近两日新增的 UI 增强请求，均属低实现成本、高感知度的改进，可能进入下个 minor 版本的候选池。其中 #7644 提及"最近新增的 email 与模型路由设置"，推测下个版本正在推进默认 Agent 参数可编辑化 — 建议将 #7644 与该路线对齐。

---

## 7. 用户反馈摘要

- **多面板/多项目管理者的核心痛点**（[#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648)）："我有很多个 QwenPaw 面板分属 7、8 个项目，但浏览器网页标题永远是'QwenPaw Console'，在多个 TAB 之间切换找来找去非常浪费时间，偶尔还会点错。"——强烈建议默认 Tab 标题支持自定义。
- **移动端操控的阻碍**（[#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329)）：手机浏览器访问时 UI 布局严重受限，切换 Agent 的按钮被挤出屏幕无法点击。"看聊天历史、新建聊天的按钮如果也能放在左边就好了，如截图所示，上面放不下就被挤出屏幕了。"手机端适配仍是薄弱环节。
- **v2.2.0 回归：目录选择体验倒退**（[#7601](https://github.com/agentscope-ai/QwenPaw/issues/7601)）："2.1.0 可以手动编辑路径，但更新 2.2.0 之后又只能一级一级点进去了，多级目录时非常麻烦。"用户对功能倒退而非演进明显不满。
- **长任务场景下的状态感知缺失**（[#7600](https://github.com/agentscope-ai/QwenPaw/issues/7600)）："处理耗时长时我会切到别的窗口继续工作，但经常忘记当前任务进行到哪一步。希望有个红绿灯指示器让我随时瞥一眼就知道处理状态。"——对话场景之外新增的轻量状态感知需求。
- **技能管理从"能用"到"可治理"的诉求**（[#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557)）："在 9 个 agent 的集群里，同一个技能（如 qwenpaw-docs-zh）在每个工作区都要复制一份，没有版本概念，根本无法管理。"——企业级规模化使用者的治理诉求已获回复并有对应 PR。
- **来自真实场景的 Bug 反馈**：[#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) 的用户做了非常深入的诊断（确认回复已持久化、追踪了 executor 中 `_maybe_stamp_fi...`）才提交报告，这种高质量报告值得维护者优先回应；#7642 的 Chrome 异常（同一会话 Safari 正常）指向浏览器差异导致的渲染 bug。

---

## 8. 待处理积压

以下 Issue/PR 长期未获维护者响应或合并，建议优先关注：

| 类型 | 条目 | 搁置时长 / 状态 | 说明 |
|---|---|---|---|
| **Bug** | [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | 创建于 9/8，次日未修复 | llama.cpp 版本号解析失败致**静默回滚用户升级的运行时**——回滚用户本地二进制是严重信任事故，建议标记 P0 尽快处理 |
| **Bug** | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | 开放 3 天，8 条评论无官方回复 | 对话连续性核心缺陷，附详细诊断，用户等待时间在拉长 |
| **Feature** | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | 创建于 8/20，开放 20 天无回复 | 部署页首页移动端体验优化（入口位置），8 条评论热度高但未见维护者任何回应 |
| **Feature** | [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) | 创建于 6/19，近 3 个月 | 移动端侧边栏简化模式下无法切换 Agent——若未计划移动端适配，建议明确标注"暂不处理" |
| **PR** | [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) | Under Review 27 天 | 修复 MCP structuredContent 重复结果的 Bug（关联 #6958），长期滞留审阅队列 |
| **PR** | [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | 开放 33 天 | 修复 Playwright 死连接后浏览器永久不可用的健壮性问题，**首次贡献者**提交迟迟未获合入，存在流失风险 |
| **PR** | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Under Review 48 天 | ReMeLightMemoryCard 组件增加 reranker UI 配置面板（视觉配置面板），与后端 reranker 功能配套，长期滞留审阅队列。建议维护者与 #6969、#6776 一并清点处理 |

---

> 注：以上内容均基于提供的 GitHub Issue/PR 数据整理，未引入外部事实。Issue #7635 虽为机器人创建，但记录了 v2.2.1-beta.1 的发布验证任务，与"版本发布"部分相关，已在速览中提及。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-09-09

## 1. 今日速览

ZeptoClaw 今日整体活跃度较低但保持正向运转：过去 24 小时内新增 1 条 Issue（#675）、1 条待合并 PR（#674），无新版本发布。值得关注的是 #674 是一项目安全加固修复，由项目主要维护者 qhkm 提交，说明维护者仍在积极推进安全层面优化。社区侧 #675 提出了新的 provider 支持请求，但目前尚无评论与反馈，尚未形成讨论热度。整体而言，项目处于稳步迭代阶段，活跃度中等偏低，但核心维护节奏健康。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无已合并/关闭的 PR。但目前有 1 条待合并 PR 值得关注：

- **[#674] fix(panel): replace websocket bearer URLs with tickets**（作者：qhkm，2026-09-08 创建）
  该 PR 修复了 Panel WebSocket 连接将长期有效的 API token 或 JWT 直接放入 `?auth=` 查询参数的安全隐患——这会导致凭据暴露在访问日志和浏览器历史中。修复方案改为通过经过认证且受 CSRF 保护的接口获取 30 秒一次性 ticket 后再建立 WebSocket 连接。该改动显著提升了 Panel 的凭据安全性，属核心安全加固。

## 4. 社区热点

- **[Issue #675] OrcaRouter provider support for ZeptoClaw**（作者：putraperdana1207-pixel，2026-09-09 创建，评论 0，👍 0）
  当前评论区为空，未形成明显讨论热度。不过该 Issue 的摘要部分对 ZeptoClaw 的核心价值主张做了有意思的概括——"功能通常以体积为代价"，而 ZeptoClaw 在约 6MB 的 Rust 二进制中集成了工具、记忆、渠道、provider 与沙箱自治能力，且启动时间约 50ms，可运行在容器运行时不可用的环境中。这种定位描述本身或许暗示了社区对轻量、边缘可用型 AI 助手的需求方向。

## 5. Bug 与稳定性

今日无新的 Bug、崩溃或回归类 Issues 报告。安全方面修复（#674）虽非 Bug，但属于安全缺陷的主动修复，严重程度较高（凭据暴露风险），已有 PR 在推进中。

## 6. 功能请求与路线图信号

- **[Issue #675] OrcaRouter provider 支持请求**（来自 putraperdana1207-pixel）
  用户在 ZeptoClaw 现有的多 provider 接入能力之上，希望新增 OrcaRouter 作为新的 provider。结合 ZeptoClaw 已有 PR #674（安全优化）与项目本身追求的"工具、记忆、渠道、provider"一体化设计方向来判断，新增 provider 属于项目既有路线图内的自然延伸。# 若 #674 顺利合入，维护者将可能把重心转回功能扩展方向，此类 provider 支持请求有很大概率被纳入后续版本考虑。

## 7. 用户反馈摘要

今日仅 1 条 Issue（#675）且无评论，未产生真实的用户痛点或使用场景反馈。可提取的间接信息来自 #675 的摘要内容——用户对 ZeptoClaw"轻量但功能全面"的定位表示认可，认为其回应了"个人 AI 助手功能&体积不可兼得"的矛盾。具体而言，用户提到了对其在无容器运行时环境下可用性的关注，暗示边缘部署或轻量环境使用是用户关注的真实场景。

## 8. 待处理积压

今日数据中无长期未响应的重要 Issue/PR。目前的主要待办项为：

- **[PR #674]**（待合并）：Panel WebSocket 凭据安全修复，建议优先审查并合入以消除凭据暴露风险。
- **[Issue #675]**（新开未响应，0 评论）：OrcaRouter provider 请求，建议维护者尽快响应并评估可行性。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-09

## 今日速览

过去 24 小时 ZeroClaw 社区活跃度极高：共 37 条 Issue 更新（其中 34 条活跃、3 条关闭），50 条 PR 更新（49 条待合并、1 条已关闭），无新版本发布。讨论重心集中在多个高风险 RFC 的持续修订上——包括运行时会话架构（#9487）、统一文件与附件架构（#9488）、WASM 插件运行时（#10076）及追加式会话事件历史（#10526）——其中前两者的评论数分别达到 36 和 29 条，显示社区对架构方向的深度参与和意见分歧仍在发酵。此外，成本核算相关的 Bug 与修复 PR 形成明显配对趋势（#9816、#10699、#10716），表明项目在精细化成本管控方面正密集迭代。整体项目呈"架构讨论与质量修复并行"的健康活跃态势。

## 项目进展

今日仅 1 条 PR 关闭，另有 49 条处于开放状态。值得关注的进展信号如下：

- **PR #9739 (已关闭)** — [feat(zerocode): multi-session panes with agent sidebar and sidebar-launched quickstart](https://github.com/zeroclaw-labs/zeroclaw/pull/9739)：维护者已完成审查中要求的 bounded reconnect 与多会话生命周期修复，并将当前 master 合入贡献者分支。虽然 PR 本身标记关闭（未合并），但维护者在关闭说明中保留了原始功能范围与贡献者署名，后续可能以新 PR 重新开启。
- **PR #10727 (开放)** — [ci(release): compose the X and Discord announcements from the release notes](https://github.com/zeroclaw-labs/zeroclaw/pull/10727)：修复 v0.8.5 发布公告因按 `feat:` commit 字母序截断而导致内容失真的问题，改为从 release notes 合成公告，属发布流程质量改进。

其余 49 个开放 PR 大多处于 `needs-author-action`（等待作者响应）或 `needs-maintainer-review`（等待维护者审查）状态，包括多个人 contributor 的大规模 PR（如 #9819、#9809、#8966、#10241 等），今日未见实质性的合入推进。

## 社区热点

今日讨论深度最高的议题集中在架构级 RFC，评论数呈明显梯队分布：

1. **Issue #9487 — [RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)**（评论 36 条）
   Revision 5 已提交，取代 Revision 4 投票快照。此 RFC 提议将会话所有权从渠道层移至运行时层，并引入传输面适配器——一旦落地将重塑 ZeroClaw 的多渠道架构基座。

2. **Issue #9488 — [RFC: Unified file and attachment architecture for conversation surfaces](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)**（评论 29 条）
   Revision 10 已提交。统一文件与附件架构的讨论持续迭代至第 10 版，说明该议题复杂度高、各方意见分歧显著，维护者需在社区共识与架构完整性之间取得平衡。

3. **Issue #6996 — [RFC: Granular sandbox policy — filesystem restrictions](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)**（评论 26 条）
   讨论应用层路径准入与操作系统沙箱后端（Bubblewrap/Landlock/Seatbelt）之间的策略漂移问题。虽创建于 5 月底，但仍是社区长期关注的安全基础议题。

4. **Issue #8692 — [Tracker: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（评论 15 条）
   作为维护者决策队列的追踪 Issue，持续汇集待裁决的 RFC 与设计议题，是观察项目治理节奏的核心窗口。

**核心诉求分析**：排名前三的讨论均指向同一深层需求——ZeroClaw 正在经历从"可用"到"架构清晰"的转型期。社区对会话模型、文件处理、沙箱策略等基础能力的定义权争夺激烈，RFC 多轮修订本身也反映出维护者对社区共识程序的严格执行。

## Bug 与稳定性

今日无新增严重（S1）级 Bug。以下按严重程度排列当前活跃的 Bug：

**P1（高优先级）**

- **Issue #9816** — [cost: anthropic provider reports $0.00 spend, so daily/monthly budget caps can never fire](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)（风险: high，已接受/进行中）。Anthropic 直接提供商每条用量记录均写入 `cost_usd: 0.0`，导致预算上限永远无法触发。**已有对应 fix PR #10716 在审**（见下）。
- **Issue #10697** — [ZeroCode ACP transcript drops assistant text emitted before a tool call](https://github.com/zeroclaw-labs/zeroclaw/issues/10697)（风险: high）。ACP 会话中，一次 turn 内工具调用前的助手文本在 transcript 中丢失。尚无对应 PR，但 PR #10197（持久化中断的 turn 进度）可能在机制上部分覆盖此问题。

**P2（中优先级）**

- **Issue #10690** — [Integrations page "Configure" link slugifies provider display name instead of family key](https://github.com/zeroclaw-labs/zeroclaw/issues/10690)（v0.8.5 回归）。Z.AI → `/config/providers.models/z-ai` 导致 path_not_found。**已有对应 fix PR #10714 在审**。
- **Issue #10625** — [Internal `[media attachment]` placeholder delivered to users when non-vision model in use](https://github.com/zeroclaw-labs/zeroclaw/issues/10625)（S2 降级行为）。文本模型处理含媒体标记的历史时，将内部占位符直接暴露给用户。
- **Issue #10699** — [cost ledger prices cache writes at plain input rate](https://github.com/zeroclaw-labs/zeroclaw/issues/10699)。缓存未命中时的写入费用被低估，与 #9816 同属成本准确性议题。**已有对应 fix PR #10716 在审**。
- **Issue #10662** — [OAuth system-prefix cache marker below Anthropic's cache minimum](https://github.com/zeroclaw-labs/zeroclaw/issues/10662)。OAuth 身份块的 cache marker 低于 Anthropic 缓存最小 token 数门槛，且占用四个断点槽位之一。
- **Issue #10548** — [Preserve Mermaid diagram accessibility inside zoom dialog](https://github.com/zeroclaw-labs/zeroclaw/issues/10548)（S2，docs）。文档站 Mermaid 图表放大后丢失无障碍属性。
- **Issue #10700** — [cost records carry daemon-lifetime session id, so per-conversation spend cannot be separated](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)。成本记录中的 session id 在整个 daemon 生命周期内共享，无法按会话拆分支出。
- **Issue #5514** — [Batch Telegram media groups into one multimodal turn](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)（S3）。Telegram 多图发送被拆分为多次 LLM 请求，导致 agent 无法联动理解。

**安全相关（非 Bug 但值得关注）**

- **Issue #10277** — [Pin published zerorelay image base tags by digest](https://github.com/zeroclaw-labs/zeroclaw/issues/10277)：CI 安全跟进，建议将 zerorelay 镜像的可变 base tag 固定为 digest。

**趋势观察**：今日 Issue 与 PR 之间呈现出清晰的"报告—修复"配对链条（#10690↔#10714、#10699/#9816↔#10716），从 Bug 发现到修复 PR 提交间隔仅为 1-2 天，项目对成本核算与配置路由类问题的响应速度值得肯定。

## 功能请求与路线图信号

综合 Issue 讨论与待合并 PR，以下功能方向呈现较高的落地可能：

1. **成本核算精化**：Issue #10663（可配置 Anthropic 1 小时 prompt-cache TTL）与 #10699/#9816（缓存写入定价）共同指向成本系统的精细化改造。PR #10716 已在审查中，PR #10663 尚无对应实现，但若 #10716 合并，TTL 可配置化很可能作为后续增量进入同一模块。

2. **多模型 Provider Profile**：PR #9809（单一凭证/端点下支持多模型子表）规模 XL，标记为 principal contributor，虽待作者响应，但若合并将显著提升 provider 配置灵活性。

3. **运行时上下文压缩与窗口感知**：PR #9535（将上下文压缩锚定到模型窗口比例）与 PR #8966（在 usage 事件中携带实时 provider 身份并从服务 provider 解析上下文窗口）目标互补，共同指向"按实际服务模型动态管理上下文"的能力。

4. **WASM 插件运行时架构**：Issue #10076 的 RFC 已修订至去除竞争性会话历史决策（交由 #10526 独占），若获批将为插件系统奠定架构基础。

5. **ACP 会话可靠性**：PR #10197（持久化中断的 turn 进度，风险:high 且需维护者审查）旨在修复 ACP 会话中断丢失的问题，与 Issue #10697 描述的 transcript 缺失场景有直接关联。

## 用户反馈摘要

- **预算失控的焦虑（Issue #9816 评论）**：`zeroclaw status` 显示 "$0.0000" 的表象之下，用户真正的担忧是预算上限形同虚设——费用在无声累积，而防护机制可能永远不会触发。这是"显示错误"与"保护失效"叠加的双重不信任来源。
- **功能可见性诉求（Issue #8763）**：用户在长对话中只能看到父 agent 的消息和紧凑的工具调用行，无法展开查看子 agent 的活动细节与完整工具返回结果。核心痛点在于"黑盒感"——调试长任务时缺少中间态的可观测性。
- **渠道降级体验不透明（Issue #10625）**：非视觉模型场景下，用户直接收到 `[media attachment]` 内部占位符，暴露了内部实现细节，对终端用户是困惑与不专业的体验。
- **流程繁琐引发效率抱怨（Issue #10549）**：社区对强制 48/72 小时讨论窗口的流程表达了"不必要的摩擦"的不满，建议让 REVISE 直接终止当前快照而非重新计时。这反映了活跃贡献者对治理节奏提速的期待。
- **发布公告失真（PR #10727 背景）**：v0.8.5 的 X 平台公告因机械截断以错误内容开头，侧面说明此前发布流程缺乏对内容质量的把控——这正是 #10727 试图修复的流程缺陷。

## 待处理积压

以下为长期未获得决定性推进但对项目架构有深远影响的议题：

- **Issue #6996** — [RFC: Granular sandbox policy (filesystem restrictions)](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)：创建于 2026-05-28，已持续讨论 3 个半月（评论 26 条），状态为 in-progress 且需维护者审查。文件系统策略双轨漂移（应用层 vs OS 沙箱层）是安全基础问题，长期悬置的风险在累积。
- **Issue #8692** — [Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)：作为决策队列本身已积累 15 条评论，内含多个等待裁决的 RFC。该队列的积压程度本身即是治理瓶颈的信号。
- **PR #9739（已关闭/未合并）** — 多会话面板功能范围较大（size:XL），维护者虽完成了修复工作但 PR 仍以关闭告终。建议维护者明确后续推进方式（重新开启新 PR 或拆分），避免功能失联。
- **PR #9324** — [feat(a2a): outbound client config, shared wire-model, tools](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)：创建于 2026-07-24，A2A 出站客户端的第一阶段实现，等待作者响应已超过一个月。A2A 协议支持是扩展生态互操作性的关键能力，长期停滞值得关注。
- **PR #8966** — [Live provider identity on usage events + context window resolution](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)：创建于 2026-07-11，标记 `needs-author-action` 近两个月。此 PR 修复 TUI/Web 上下文计量表上限错误（使用了 trim budget 而非真实窗口），对用户可见的正确性有直接影响。

---

*数据来源：[ZeroClaw GitHub Repository](https://github.com/zeroclaw-labs/zeroclaw) · 统计窗口：2026-09-08 至 2026-09-09*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*