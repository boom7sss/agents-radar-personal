# OpenClaw 生态日报 2026-08-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-27 20:41 UTC

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

# OpenClaw 项目动态日报 — 2026-08-28

---

## 1. 今日速览

OpenClaw 项目在 2026-08-28 保持高强度社区活性，过去 24 小时产生 500 条 Issue 更新（新开/活跃 405 条）与 500 条 PR 更新（342 条待合并）。值得注意的是，过去 24 小时没有新的版本发布，但多个标记为 "Beta release blocker" 的严重 Bug（如 #126821 SQLite 持续损坏、#130954 更新器死锁）正在积极推进修复。社区讨论热度集中在会话状态一致性、消息丢失与持久化可靠性三大核心痛点上，此外多条 P1/P2 级 Issue 长期滞留需要维护者决策。当日有多个 PR 已合并关闭（158 条），但大部分高优先级的 "needs proof" 状态 PR 仍在等待验证。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（关键推进）

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | ✅ 已合并 | Control UI 支持管理员审查插件安装策略警告并有意识地继续安装，加强了安全边界 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | ✅ 已合并 | 修复 Gateway 重启后 Claude CLI OAuth 因 legacy 认证配置而丢失刷新所有权的问题 |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings | ✅ 已合并 | 修复会话消息跨 agent 绑定投递的问题，涉及 Discord/iMessage/Matrix/Slack/Telegram/Feishu 等多通道 |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | fix(ui): avoid session catalog refresh storms | ✅ 已合并 | 侧边栏会话目录在窗口聚焦/存在状态变化时的冗余刷新问题修复 |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | fix(release): authorize focused beta evidence | ✅ 已合并 | 解决 beta.3 发布阻断——精简候选包更改后无需跑全量验证 |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | fix(cli): resolve alias targets from the write snapshot | ✅ 已合并 | CLI 别名解析一致性修复（关闭 #127618） |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | feat: make full session actions available from chat header | ✅ 已合并 | 聊天头部菜单新增 pin、标记未读、设置分组、复制会话 ID 等操作 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | ✅ 已合并 | 安装策略警告必须经授权操作者确认才能继续安装插件 |
| [#131154](https://github.com/openclaw/openclaw/pull/131154) | fix(ui): make composer text sizing consistent | ✅ 已合并 | Control UI 聊天撰写器字号统一 |
| [#130954](https://github.com/openclaw/openclaw/issues/130954) | [Bug]: post-core updater deadlocks its Doctor child | ✅ 已关闭 | 更新器死锁问题已解决，恢复 main 分支的 dev 更新路径 |

**总体评估**：项目的安全边界（插件安装策略确认）、认证修复（Claude CLI OAuth）、多通道消息投递一致性、Control UI 体验均有实质推进。但当前（4）个被标记为 "Beta release blocker" 的 Issue（#130954 已关闭）中仍有 #126821（SQLite 损坏持续复发）在推进中。

---

## 4. 社区热点

### 最受关注 Issues（按评论数排序）

| Issue | 标题 | 评论数 | 热度标签 | 诉求分析 |
|---|---|---|---|---|
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection reconcile 在持续写负载下死循环，阻塞主线程 | 14 💬 | 🦞 Diamond Lobster, P1, impact: session-state/crash-loop | 会话转录投影重建在持续写入时可能不收敛，阻塞 Node 主线程并影响所有通道传输。这是核心可靠性问题，用户期望会话状态一致性得到保障 |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM 嵌入运行中止 memory_search 调用，被归类为超时 | 14 💬 👍3 | P2, 🦪 Silver Shellfish | memory_search 在 AM 嵌入运行中总被中止并错误归类为超时，影响核心记忆检索功能 |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash 不完整轮次（2026.5.27/28）| 11 💬 | P1, Diamond Lobster, impact: message-loss | 模型升级后产生不完整回复且有消息丢失风险，用户反馈升级前正常 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite 无界增长（memory_index_chunks + memory_embedding_cache）| 10 💬 | P2, Diamond Lobster | 记忆索引与 embedding 缓存表无保留策略，长期运行会填满磁盘 |
| [#74704](https://github.com/openclaw/openclaw/issues/74704) | SDK: 稳定 app-client happy path | 10 💬 👍1 | P2, Maintainer 标记 | 社区希望 SDK 的 agent/sessions/runs 标准路径完整稳定，是生态发展的关键 |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | Hook: before_route_inbound_message — 路由前拦截 | 8 💬 👍3 | P2 | 用户需求最强的新功能——插件系统缺少消息路由前的拦截点，对通道桥接/代理场景至关重要 |

### 趋势解读
社区当前最大的关注集中在**会话状态的正确性**（#115908、#74586、#88657），以及**存储层可持续性**（#114612）。高赞需求（#81061、👍3）表明用户对插件生态的扩展性有明确诉求。

---

## 5. Bug 与稳定性

### 🔴 P0 / Beta Release Blocker

| Issue | 描述 | 严重程度 | Fix PR 状态 |
|---|---|---|---|
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 损坏在重建的 DB 上 15–24 小时内复发（2026.8.1-beta.2, WSL2）— 5 天内 5 次，含 "paralyzed gateway" 模式拒绝一切服务且不退出 | `P0`，Diamond Lobster | ❌ 无已关联 fix PR |
| [#130954](https://github.com/openclaw/openclaw/issues/130954) | post-core 更新器与 Doctor 子进程在插件生命周期租约上死锁 | `P1` Blocker | ✅ 已关闭/已解决 |

### 🟠 P1 严重回归

| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash 不完整轮次（payloads=0, tools=2）| ❌ 已关闭（状态不明），无 fix PR |
| [#99586](https://github.com/openclaw/openclaw/issues/99586) | 运行时工具集在 gateway 操作后返回空白 body；容器重启仅短暂清除 | ❌ 无 fix PR |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见入站通道消息可被零负载派发静默丢弃，无重试/死信/用户可见失败 | ❌ 无 fix PR |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 通过 `tools.deny` 拒绝 write 工具会静默禁用记忆持久化，agent 仍谎报成功 | ❌ 无 fix PR |
| [#116691](https://github.com/openclaw/openclaw/issues/116691) | 火山引擎（openai-responses）长对话缺少 `input.status` 参数 | ❌ 无 fix PR |
| [#79293](https://github.com/openclaw/openclaw/issues/79293) | openclaw-weixin 主动发送返回成功但用户收到 "请稍后再试" | ❌ 无 fix PR |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) | 过期的子代理完成可被投递到被替换的请求者生命周期 | ❌ 无 fix PR |
| [#128385](https://github.com/openclaw/openclaw/issues/128385) | no-op write/edit 终结者的终端展示永远无法呈现（replay-safety 门被工具自身污染） | ❌ 无 fix PR |

### 🟡 P2/P3 活跃问题

| Issue | 描述 | Fix PR 状态 |
|---|---|---|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | memory_index_chunks + memory_embedding_cache 无保留策略，无限增长 | ❌ 无 fix PR |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM 嵌入运行中止 memory_search，误归类超时 | ❌ 无 fix PR |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | AgentSelectionRequiredError 洪泛日志（显式多 agent 所有权下） | ❌ 无 fix PR |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | sessions_yield 恢复回复已记录但未投递 → 用户收到子代理原始摘要 | ❌ 无 fix PR |
| [#117209](https://github.com/openclaw/openclaw/issues/117209) | AuthProfileStoreUnreadable 在运行时快照发布失败后卡死 | ✅ 已关闭（有 linked PR） |

**稳定性评估**：当前最紧迫的问题是 SQLite 损坏复发（#126821）及多个与 memory/session 持久化相关的无 fix PR 问题。当日无新版本发布，修复进度整体偏慢——多数 P1 级问题仍处于 "needs-maintainer-review" 状态，尚未出现已提交的修复 PR。

---

## 6. 功能请求与路线图信号

### 高热度功能需求

| Issue/PR | 请求 | 信号 | 可能的下一版本走向 |
|---|---|---|---|
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | `before_route_inbound_message` 路由前拦截 Hook | 👍3，已关闭 | 社区呼声最高、关闭但可能已纳入内部规划；对插件生态/通道桥接价值重大 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | 引导向导（`openclaw setup`）添加 Memory/Embedding 配置为强制步骤 | 👍1 | 记忆是 OpenClaw 核心差异点，若用户不配置 embedding 会缺口 API 配置，强烈建议纳入 |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) | `session.resetPrompt` — 可配置会话启动消息 | 👍1 | 当前 `/new` `/reset` 注入硬编码提示，可配置化需求合理且易实现 |
| [#45564](https://github.com/openclaw/openclaw/issues/45564) | `/new` 和 `/reset` 添加确认步骤 | 👍1 | 防止误触擦除对话历史，低成本高回报的 UX 改进 |
| [#82450](https://github.com/openclaw/openclaw/issues/82450) | 无障碍：为视障用户提供线性持久工作区模式 | 👍1 | 用户明确表示 OpenClaw 是其日常工作流核心，无障碍改进的隐性价值 |
| [#79589](https://github.com/openclaw/openclaw/issues/79589) | 命令队列支持优先级（当前 FIFO 阻塞敏感任务）| 👍1 | 对交互式体验影响较大，后台维护任务不应阻塞实时回复 |
| [#74704](https://github.com/openclaw/openclaw/issues/74704) | SDK 稳定 app-client happy path | Maintainer 标记 | OpenMeow 作为内部验证工具，外部 app 开发者依赖此稳定性 |

### 路线图信号

- 安全与审计是明确趋势：两个关于安装策略确认的 PR（#116489 和 #120900）均已合并，说明团队重视供应链安全
- 多通道投递一致性也在持续修复（如 #126424 已合并）
- Control UI 的编辑器体验在持续打磨中，多个 UI 相关 PR（#131154、#130935、#131118、#128685）表明团队在投入资源

---

## 7. 用户反馈摘要

### 积极反馈亮点

- **愿力贡献**：用户 xiaopinpin-music（视障）在 #82450 中表示 "OpenClaw has become one of the most powerful AI work interfaces I have ever used"，用于每日视频推广工作流、浏览器自动化、社媒发布等工作
- **功能有效性**：#116489（安装策略警告确认）和 #120900（Control UI 审查安装策略）收到用户反馈认可安全边界的加强

### 用户痛点（来自 Issues 评论）

| 痛点 | 来源 Issue | 场景描述 |
|---|---|---|
| **静默消息丢失** | #112259 | 通过 iMessage 等通道的可见消息被接受后静默丢弃，无 agent 运行、无错误提示——用户无法感知消息被吞 |
| **配置失败无感知** | #126906 | 用 `tools.deny` 拒绝 write 后，记忆持久化静默关闭，agent 在每次保存时仍报告成功，用户在无预防下丢失长期记忆 |
| **无确认即擦除历史** | #45564 | 用户反映 `/new` 和 `/reset` 立即擦除会话无确认，有误触丢失对话历史的风险 |
| **记忆配置门槛** | #16670 | 引导向导未提及 embedding 配置，未配置时记忆功能不可用，用户长期未意识到自己的 bot "失忆" 了 |
| **macOS 上系统记忆检测缺失** | #47273 | 内存/总内存从未上报给 agent（平台检查硬编码为 linux），影响 macOS 用户的系统感知能力 |
| **大量长时间未解决的回归** | #99586, #90944, #79293 等 | 多条在 2026 年初创建的 P1/P2 回归至今仍处于 review 阶段，用户等待周期较长 |

---

## 8. 待处理积压

### 需要维护者重点关注（长期未响应 / PoC 级别）

| 编号 | 描述 | 创建时间→最后更新 | 当前状态 | 建议 |
|---|---|---|---|---|
| [#44134](https://github.com/openclaw/openclaw/issues/44134) | 频繁工具 schema 重载导致 Google Antigravity 误判滥用并封号 | 2026-03-12 → 2026-08-27（173 天未解决）| needs-live-repro | 影响真实用户账号安全，应尽快提供复现指引或临时规避方案 |
| [#56653](https://github.com/openclaw/openclaw/issues/56653) | Slack Socket Mode 中 reaction_added/removed 事件从不投递（3 月创建）| 2026-03-28 → 2026-08-27（152 天未解决）| needs-info | 多账号、多命令场景的核心 Slack 功能缺失，需优先响应 |
| [#47273](https://github.com/openclaw/openclaw/issues/47273) | macOS 上 memory 检测被平台检查跳过 | 2026-03-15 → 2026-08-27（166 天未解决）| has open PR | 已有 PR 关联，需推动合并 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | 引导向导未强制 Memory/Embedding 配置 | 2026-02-15 → 2026-08-27（194 天未解决）| needs-product-decision | 影响新用户记忆功能的有效性认知 |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) | session.resetPrompt 可配置启动词 | 2026-03-13 → 2026-08-27（168 天未解决）| needs-product-decision | 已有关闭历史，如需采纳应明确决策时间 |
| [#45564](https://github.com/openclaw/openclaw/issues/45564) | /new /reset 添加确认步骤 | 2026-03-14 → 2026-08-27（166 天未解决）| needs-product-decision | 低成本高回报的 UX 改进，建议评估优先级 |
| [#79589](https://github.com/openclaw/openclaw/issues/79589) | 命令队列无优先级支持 | 2026-05-09 → 2026-08-27（110 天未解决）| needs-product-decision | 交互式体验与后台任务冲突 |

### 待合并 PR 队列风险

当前 342 个 PR 待合并，其中多个标记为 "merge-risk: security-boundary" 或 "merge-risk: compatibility"，例如：

- [#128289](https://github.com/openclaw/openclaw/pull/128289)（修复 Browser Session Credential Steward MVP，涉及安全边界）
- [#113611](https://github.com/openclaw/openclaw/pull/113611)（飞书大写 HTTPS 域名支持，涉及兼容性）
- [#130196](https://github.com/openclaw/openclaw/pull/130196)（修复重启恢复的 tombstone 逻辑，涉及会话状态）

这些 PR 若长时间不合并，将增加后续冲突成本并延迟用户获得相关修复。

---

*报告生成时间：2026-08-28 | 数据来源：OpenClaw GitHub 仓库（openclaw/openclaw）*

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-28**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**共识收敛与架构重构并行的快速扩张期**。项目普遍进入高活跃迭代阶段（当日 10 个活跃项目中 7 个产生 30+ 条 PR 更新），但**持久化可靠性与消息一致性**成为全生态最集中的技术痛点（OpenClaw、NanoBot、Hermes Agent、NanoClaw、IronClaw 均有对应严重级问题）。生态正从"功能堆叠"转向"架构标准化"——多项目同时向记忆解耦（NanoBot #5571、ZeroClaw #6850）、渠道适配器接口规范化（NanoClaw #3581/#3584）、上下文压缩与工具输出投影（IronClaw #7891、CoPaw #7331）方向投入。与此同时，安全边界（插件安装确认、OAuth 凭据保护、路径穿越修复）与多租户/团队协作能力（CoPaw Hub、ZeroClaw v0.9.0）构成第二增长曲线，安装体验（Hermes Debian 损坏、LobsterAI 数据丢失）则是威胁新用户转化的共性短板。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 待合并 PR | 今日发布 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（活跃 405） | 500（待合并 342） | 342 | 无 | ⚠️ 活跃度极高，但 4 个 Beta blocker（1 个 P0 无 fix）与 342 条 PR 积压构成风险 |
| **Hermes Agent** | 50 | 50 | 46 | ✅ v0.20.6 | ⚠️ 发布节奏快但 P0 问题（安装脚本、前缀缓存）无修复 PR，Windows 启动三重复 Bug |
| **IronClaw** | 45 | 50 | 13 | ✅ 1.4.0-rc.1（8/26） | ✅ 健康度最佳：PR 合并率 74%，发布候选已进入 QA，问题关闭率 35.6% |
| **CoPaw** | 61* | 45 | 27 | ✅ v2.2.0-beta.1 | ⚠️ 预发布引入多个回归（memory_search 失效、事件循环阻塞），需优先确认回归范围 |
| **NanoClaw** | 12 | 30 | 25 | 无 | ⚠️ PR 合并速度（5 条/日）不匹配提交速度，渠道适配器缺陷集中 |
| **NanoBot** | 2（新增） | 37 | 18 | 无 | ✅ 合并率 51%，记忆重构与并发控制有实质推进，路径穿越安全漏洞需 48h 内响应 |
| **ZeroClaw** | 32 | 50 | 47 | 无 | ⚠️ 架构级 RFC 密集推进但维护者决策速度成瓶颈（47 条 PR 积压） |
| **LobsterAI** | 2（新增） | 12 合并/关闭 | — | ✅ 2026.8.26 | ✅ 稳定迭代，工程质量意识强，但新报告安装器数据丢失需紧急处理 |
| **PicoClaw** | 2 | 3 | 1 | 无 | ✅ 中等活跃，合并流程收尾完成；RKLLM 异常回复需跟进 |
| **Moltis** | 0 | 1 | 0 | ✅ v20260827.01 | ✅ 平稳维护期，单一关键兼容性修复已发布 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | — | 无 | 💤 无活动 |

*\*CoPaw Issues/PR 更新为合并计数*

---

## 3. OpenClaw 在生态中的定位

**社区规模绝对领先**：OpenClaw 当日 Issue 更新量（500）是第二大项目（Hermes/IronClaw 各 50 条）的 10 倍，PR 待合并量（342）亦为生态最大。这种规模优势带来更快的 Bug 发现速度，但也伴随更长的修复等待周期。

**技术路线差异**：OpenClaw 是唯一在多通道投递（Discord/iMessage/Matrix/Slack/Telegram/Feishu 六通道）层面做系统性一致性修复的项目（PR #126424 当日合并），且安全边界建设（安装策略双重确认 PR #116489/#120900）在生态中最为体系化。但存储层可靠性（SQLite 反复损坏 #126821）是当前最大技术债——这是在数据规模领先暴露出的独有挑战。

**对照其他项目**：IronClaw（Near AI）走 "RC 驱动 + 严格 QA" 路线，合并率 74% 与系统性发布流程明显优于 OpenClaw 的"高吞吐但积压"模式；CoPaw（阿里）在多租户 Hub 演进上领先（v2.2.0-beta.1），这是 OpenClaw 尚未涉足的团队协作方向；NanoBot（HKUDS）在记忆解耦架构（explicit recall）上走得比 OpenClaw 更激进。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **记忆/持久化可靠性** | OpenClaw（#126821 SQLite 损坏、#114612 无界增长）、NanoBot（#5571 显式召回）、IronClaw（#7276 跨会话记忆）、ZeroClaw（#6850 记忆策略解耦）、CoPaw（#7133 向量空间一致性） | 记忆存储需要可插拔后端、保留策略与显式召回机制；存储层的损坏自愈与边界控制是共性问题 |
| **消息/会话状态一致性** | OpenClaw（#115908 转录死循环、#126424 跨绑定投递）、Hermes（#96570 系统提示词 null 致缓存失效）、NanoClaw（#3568 静默停止响应）、NanoBot（#5483 已删会话重建）、CoPaw（#7324 推送丢失） | "消息被静默吞掉"是跨项目的高频用户痛点，且常伴随"agent 谎报成功"（OpenClaw #126906）的信任损伤 |
| **渠道适配器标准化** | NanoClaw（#3581/#3584 provider 契约重构）、OpenClaw（#81061 路由前 Hook）、ZeroClaw（#9488 统一附件架构）、PicoClaw（#3287 IRC 长消息）、CoPaw（#7302 钉钉空消息） | 渠道适配正在从"接口混乱"走向契约化；附件传递、长消息、空消息/错误散播是渠道层的三大痛点 |
| **工具输出/上下文压缩** | IronClaw（#7891 投影截断、#7824 压缩屏障）、CoPaw（#7331 超大工具结果裁剪）、OpenClaw（#128385 no-op 终结者）、ZeroClaw（#9535 压缩锚定窗口比例） | 工具输出必须做**结构感知投影**而非盲目截断；上下文压缩逐渐成为标配能力并锚定模型窗口 |
| **安全边界与供应链** | OpenClaw（安装策略确认）、NanoBot（#5564 路径穿越、#5338 OAuth 凭据）、CoPaw（#7362 文件保护绕过）、Hermes（#95609 PKCE 静默降级）、ZeroClaw（#10381 workspace cwd 篡改） | 安全修复跨项目同步推进，OAuth 凭据保护、沙箱逃逸、静默安全降级是三大焦点 |
| **长对话 UX** | Hermes（#90473 分页 UX）、CoPaw（#7361 虚拟滚动）、OpenClaw（#123535 刷新风暴修复） | 长对话性能与分页体验成为用户抱怨的集中点，虚拟化渲染是共同解法方向 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人助手（六通道）+ 插件生态 | 追求最强集成度的个人用户 | 高吞吐多通道网关 + 插件系统 + Control UI（当前生态功能面最广） |
| **Hermes Agent** | 桌面优先 + 开发工作流（Webhook/技能/网关） | 开发者/技术用户（Windows 桌面端重点） | 高度模块化核心 + 引擎级重载 + 大量异步能力（525 PR 滚动发布） |
| **IronClaw** | 自主运行可靠性 + 上下文效率 | 自动化重度用户（成本敏感） | RC 驱动发布 + 严格 QA + 上下文压缩屏障 + 结构化工具投影（生态中工程质量最高） |
| **ZeroClaw** | 运行时/会话架构标准化 | 架构敏感型开发者 | RFC 驱动的破坏性变更窗口 + WASM 插件 + A2A 边界（当前处于架构重构前沿） |
| **CoPaw** | 多租户 Hub + 多渠道接入（钉钉/QQ） | 政企/团队协作场景 | 零停机重载 + Streamable-HTTP MCP + 多租户（v2.2.0-beta.1，团队协作路线领先） |
| **NanoBot** | 记忆架构创新 + 并发控制 | 研究型开发者（HKUDS 背书） | 显式召回记忆（#5571）+ 可插拔记忆后端 + 默认无限制并发 |
| **NanoClaw** | 渠道适配器可靠性 | 多渠道个人用户 | 专注修复 Discord/Telegram/WhatsApp 适配缺陷 + provider 契约重构中 |
| **LobsterAI** | AI 资料库/知识管理 + 安装器体验 | 知识工作者（深度词典场景） | 前后端完整产品化 + 多模型管理 UI 重构中 |
| **PicoClaw** | 嵌入式/边缘部署（ARM/RKLLM） | 嵌入式开发者 | 低资源模型推理 + IRC 支持（边缘部署定位独特） |
| **Moltis** | OpenAI/Codex 工具链兼容性 | OpenAI 生态系统开发者 | 专注严格工具 schema 兼容（niche 清晰但覆盖面窄） |

---

## 6. 社区热度与成熟度

**Tier 1 — 超大规模/高活跃（日 100+ 更新）**
- **OpenClaw**：唯一达到 500 条/日更新的项目。处于功能广度快速拓展期，但 PR 积压（342）与 P0 Bug 无 fix 并存，属于"规模驱动的粗放迭代"。
- **Hermes Agent**：50 条/日 + 高频版本发布（v0.20.6 汇总 525 PR）。活跃度高但基础设施（安装脚本、Skills Index CI）跟不上迭代速度。

**Tier 2 — 高活跃/质量驱动（日 30-60 更新）**
- **IronClaw**：45 Issues/50 PRs，合并率 74%，RC 流程完善——生态中唯一做到"速度与质量平衡"的项目。
- **CoPaw**：61 条更新 + 预发布节奏，但 beta 引入回归表明测试覆盖尚需加强。
- **ZeroClaw**：32 Issues/50 PRs，RFC 驱动但决策瓶颈明显（47 PR 积压）。
- **NanoBot**：37 PRs，合并率 51%，记忆重构方向明确，处于"精进型"迭代。

**Tier 3 — 中低活跃/巩固期（日 < 15 更新）**
- **NanoClaw**（30 PRs 但合并慢）、**LobsterAI**（稳定维护 + 针对性修复）、**PicoClaw / Moltis**（低频但每次更新质量高，Moltis 单一 PR 即修复关键兼容性问题）。

**整体判断**：生态处于"规模扩张（OpenClaw/Hermes）— 质量沉淀（IronClaw/LobsterAI）— 架构突破（ZeroClaw/NanoBot）"三阶段并存的局面。值得关注的是，OpenClaw 虽体量最大，但其工程质量信号（P0 无 fix、PR 积压、SQLite 反复损坏）已不如 IronClaw 的健康指标，体量与管理能力之间的张力正在显现。

---

## 7. 值得关注的趋势信号

**① 记忆正在从"隐式注入"走向"显式召回"（架构级转向）**
NanoBot #5571（默认不注入记忆、按需召回）与 ZeroClaw #6850（记忆策略与存储后端解耦）同时指向同一方向：记忆不再是"塞进系统提示词"的隐式行为，而是成为可插拔、可审计、可配置的独立服务。OpenClaw 的"用户不知道自己 bot 失忆"（#16670）正是这一转变的痛点来源。**开发者启示：新项目应将记忆模块视为一等公民设计，而非事后补充。**

**② 工具输出从"盲目截断"走向"结构感知投影"（成本主线）**
IronClaw #7891（49KB 未投影载荷 → 19.2s 推理损失）与 #7896（结构感知单一路径替代字节切片）、CoPaw #7331（超大工具结果沉淀为工件）共同定义了下一代工具输出处理范式：保留完整可检索的工件，只向模型投影有界结构化预览。**开发者启示：工具输出的"投影预算"应成为上下文管理的核心度量。**

**③ "静默失败"成为用户信任的头号杀手（跨项目一致信号）**
OpenClaw #112259（消息静默丢弃）、#126906（记忆保存谎报成功）、NanoClaw #3568（Agent 静默停止响应）、Hermes #79625（配置项静默失效）——多个项目的用户反馈高度一致：**用户宁可收到错误，也不能接受无声的失败**。这指向一个产品设计原则：Agent 系统必须建立显式的故障指示与自愈通知机制。**开发者启示：为每一项关键操作设计"可感知的失败路径"。**

**④ 长会话 UX 从"能用"走向"必须流畅"（体验分水岭）**
Hermes #90473 用户直斥分页设计、CoPaw #7361 虚拟滚动 PR、OpenClaw #123535 刷新风暴修复——随着会话长度增长成为常态，分页/虚拟化/自动跟随滚动已是标准诉求而非锦上添花。**开发者启示：从第一天起就将长对话性能作为核心指标，而非后期优化项。**

**⑤ 安全修复呈现"全生态同步"特征（合规前置）**
同一天内，OpenClaw（安装策略确认）、NanoBot（路径穿越 + OAuth 凭据）、CoPaw（文件保护绕过）、Hermes（PKCE 静默降级）、ZeroClaw（workspace cwd 篡改）五个项目同时推进安全修复。安全不再是单个项目的差异化竞争点，而是**生态参与的基础门槛**。**开发者启示：安全审查应嵌入 CI 流程而非事件驱动。**

**⑥ 安装/升级体验是生态共性的"转化漏斗"短板**
Hermes Debian 安装脚本损坏（P0，12 天未修）、LobsterAI 安装器清除用户数据（紧急）、NanoClaw 更新流程覆盖自定义适配器、CoPaw Playwright 阻塞 60 秒——新用户第一体验普遍受损。**开发者启示：安装/升级路径的自动化测试应与功能测试同等重要。**

---

*数据来源：各项目 GitHub 公开仓库 2026-08-27 至 2026-08-28 动态 | 报告生成：2026-08-28*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 (2026-08-28)

## 1. 今日速览

NanoBot 项目在 8 月 27 日处于高强度迭代期：过去 24 小时 PR 活动达 37 条，其中 19 条已合并/关闭，18 条仍待处理，合并率约 51%，整体协作节奏较快。核心维护者 chengyongru 集中提交了多条高优先级 PR（含标注 p1 的记忆重构与并发控制修复），围绕 memory 架构、provider 路由、OAuth 刷新等关键路径进行重构。当天 2 条新 Issue 分别涉及飞书渠道消息整合（功能请求）和 session 路径穿越安全漏洞（bug，且已有对应修复方向）。项目当前健康度良好，开发和社区活跃度均处于高位。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日合并/关闭了 19 个 PR，较突出的是：

- **[#5572] fix(agent): default request concurrency to unlimited**（p1，已合并）— 将默认入站请求并发改为无限制，保留环境变量作为显式上限，并补充回归测试与文档。作者 chengyongru 同一批提交中还有多个（#5568、#5570、#5574 等）已进入待合并队列，显示对核心链路的系统性整理正在进行。
- **[#5565] refactor(memory): decouple archival from provider state**（已合并）— 抽出 `MemoryArchiver`，使记忆归档写入不再依赖 `SessionManager`，同时保留 provider 续接状态，为后续记忆后端可插拔化铺路。
- 此外，多个 memory 相关 PR（#5379、#5537、#5571）均于今日更新，说明记忆模块正在经历一轮集中重构，目标是形成"显式召回 + 可插拔后端"的架构。

整体上，项目今日在记忆管理、provider 失败恢复、并发控制三条主线均有实质推进。

## 4. 社区热点

- **[Issue #5567]**（飞书渠道单流式卡片消息）— 当日新开即获得 2 条评论，用户明确提出了"用户发一条消息 → agent 回复一条消息"的对齐诉求，反映了多渠道场景下消息收敛体验的一致性问题。链接：[HKUDS/nanobot Issue #5567](https://github.com/HKUDS/nanobot/issues/5567)
- **[PR #5571] feat(memory): require explicit recall by default**（p1，冲突标记）— 涉及默认系统提示词中移除自动注入记忆内容的重大行为变更，讨论层面虽无评论计数，但其 p1 优先级与 conflict 标记表明维护者正在推动默认记忆策略的收紧。链接：[HKUDS/nanobot PR #5571](https://github.com/HKUDS/nanobot/pull/5571)

## 5. Bug 与稳定性

- **高危 - 路径穿越（Path Traversal）**：[Issue #5564](https://github.com/HKUDS/nanobot/issues/5564) 由自动化 agent 报告，`session/manager.py` 中 session ID 未经验证直接拼接文件路径，恶意 ID（如 `../../etc/passwd`）可能导致越权文件访问。目前暂无对应明确修复 PR，但鉴于该仓库对安全修复的响应速度（参见 #5573 OAuth 修复），预计将较快跟进。
- **中危 - OAuth 凭据保护**：此前遗留的 [PR #5338](https://github.com/HKUDS/nanobot/pull/5338)（OAuth 存储读取失败时可能覆盖现有凭据）今日仍在更新，并已有新提交 [#5573](https://github.com/HKUDS/nanobot/pull/5573) 实现过期 token 自动刷新并持久化 issuer 信息，两者形成互补修复。
- **中危 - 已删除会话被延迟消息重建**：[PR #5483](https://github.com/HKUDS/nanobot/pull/5483) 修复了跨会话延迟消息在会话删除后仍可能触发重建的问题，今日有更新，待合入。
- **低危 - WebUI 临时会话竞态**：[PR #5339](https://github.com/HKUDS/nanobot/pull/5339) 处理用户在等待期间丢弃临时聊天后仍可能被送达消息的问题。
- **[PR #5504](https://github.com/HKUDS/nanobot/pull/5504)** 为 UI 层增加模型重试状态展示，帮助用户在重试期间获得可见反馈，减少重复操作。

## 6. 功能请求与路线图信号

- **飞书/渠道消息收敛**（Issue #5567）：将多轮回复整合为单条流式卡片，属渠道体验优化，短期内可能以渠道适配形式实现。
- **记忆默认收敛为显式召回**（PR #5571、#5570）：记忆默认不注入系统提示词，改为后端可插拔 + 按需召回，是记忆模块的架构级调整，预计是 0.x 系列重要变更。
- **per-spawn 模型预设白名单**（[PR #5561](https://github.com/HKUDS/nanobot/pull/5561)）：在 `spawnPresets` 白名单内支持按 spawn 实例配置独立模型，回应 #4231 需求，社区设计方向已基本确立。
- **会话级持久 focus 字段**（[PR #5537](https://github.com/HKUDS/nanobot/pull/5537)）：为 `my` 工具添加跨轮次会话焦点，满足 agent 短期连续性需求，已进入 review 阶段。

## 7. 用户反馈摘要

- **飞书用户**反映多消息回复体验割裂，期望一对一消息对应（Issue #5567）。该用户同时认可已有 CardKit 流式卡片基础，说明基础架构方向正确，但整合策略需调整。
- **开发侧反馈**集中在代码质量改进：Pyright 抑制范围收窄（PR #5396）、文件级重构（PR #5565）等表明贡献者对类型安全与模块边界有较高要求。
- 部分未经评论的 PR 通过标签传达信息：多个 PR 标注 `conflict`（#5504、#5561、#5571、#5396、#5379 等），表明社区存在活跃并行开发，合并冲突需维护者分配时间处理。

## 8. 待处理积压

- **[PR #5338] fix(mcp): preserve credentials when OAuth store read fails** — 已存在 17 天（8 月 11 日创建），为数据安全性修复（凭据丢失风险），虽仍标记为 draft 但今日有更新，建议尽快推进合入；配合 #5573 一并验证。
- **[PR #5339] fix(webui): reject discarded temporary chat messages** — 同样 17 天未合并，涉及 WebUI 端竞态修复。
- **[Issue #5564] 路径穿越安全漏洞** — 安全敏感，建议 48 小时内给出修复方案或至少确认修复归属。
- 另有多条 p2 优先级 PR 标注 `conflict`（#5379、#5396 等），建议维护者对冲突 PR 进行批量排查，避免进一步漂移。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-08-28

---

## 一、今日速览

Hermes Agent 过去 24 小时保持高速迭代节奏：50 条 Issue 更新（42 条活跃/新开，8 条关闭）与 50 条 PR 更新（46 条待合并，4 条已合并/关闭）并行推进，同时发布了 v0.20.6 补丁版本，一次性汇总约 525 个自 v0.20.5 以来的合并 PR。值得关注的是，**Windows 桌面端启动超时问题**成为今日最集中的 Bug 簇（至少 3 个独立 Issue 指向同一根因），且已有重复标记但尚未见修复 PR；此外**群聊会话系统提示词空值导致前缀缓存失效**（P0）与 **Debian 安装脚本损坏**（P0）构成当前最高优先级风险。项目整体活跃度极高，但积压 P0/P1 问题与合并积压（46 条 PR 待合并）需维护者重点关注。

---

## 二、版本发布

### v2026.8.27 — Hermes Agent v0.20.6

- **发布日期**：2026 年 8 月 27 日
- **性质**：补丁版本（Patch Release）
- **核心内容**：将自 v0.20.5（v2026.8.x）以来合并的约 525 个 PR 汇总为稳定的 tagged release，供下游消费者（Docker 镜像、托管部署、新安装）使用。
- **破坏性变更**：发布说明中未标注破坏性变更或迁移注意事项。
- **备注**：发布说明文本在数据中截断，未见更详细的功能列表。

🔗 [查看 Release](https://github.com/NousResearch/hermes-agent/releases)

---

## 三、项目进展（今日合并/关闭 PR）

今日关闭/合并的 PR 共 4 条，最值得注意的是：

| PR | 内容 | 价值 |
|---|---|---|
| [#70006](https://github.com/NousResearch/hermes-agent/pull/70006) **已合并** | **Webhook 支持 provider contracts 与安全路由技能**：接受 Ashby `Ashby-Signature` HMAC 头与顶层 `action` 事件名；为无显式 delivery ID 的 provider 派生稳定的 body-digest ID；所有 webhook 路由技能通过既有 stacked-skill 脚手架加载 | 显著扩展 webhook 生态兼容性（Ashby 等 ATS 平台），同时弥补消息投递 ID 缺失的隐患，涉及会话状态、消息投递、安全边界等多个风险域 |
| [#77191](https://github.com/NousResearch/hermes-agent/issues/77191) **已关闭** | WS 重连竞态回归测试从未覆盖其声称的代码路径（RAH-05） | 揭示测试有效性问题，属于质量保障层面的修正 |

**整体判断**：525 个 PR 滚动进入 v0.20.6 意味着项目在桌面端、压缩、Cron、网关等模块有大量累积改进，但今日合并的 PR 占比极低（4/50），大量功能修复尚积压待审。

---

## 四、社区热点

### 🔥 热度最高 Issue

1. **[#66616 Skills Index 陈旧/降级](https://github.com/NousResearch/hermes-agent/issues/66616)（107 条评论）**
   - 自动化新鲜度探针失败：Skills Hub 索引已 29.8 小时未更新（阈值 26h），状态 `degraded`。
   - 评论数远超其他 Issue，说明社区对文档/技能索引的可靠性的持续关注，可能涉及 CI 工作流 `skills-index.yaml` 的稳定性问题。

2. **[#87093 Debian 安装损坏](https://github.com/NousResearch/hermes-agent/issues/87093)（22 条评论，👍4）**
   - Debian 13.6 上 `curl | bash` 安装失败，`uv.lock` 与 `npm install` 报错。P0 严重级别，直接影响新用户上手。

3. **[#90473 “显示更早消息”分页 UX 极差](https://github.com/NousResearch/hermes-agent/issues/90473)（15 条评论）**
   - Windows 11 用户直斥"这是哪个傻逼的设计？"，长会话中分页加载体验割裂。已关闭，但用户情绪强烈，值得产品侧反思。

**社区诉求分析**：三大热点分别指向 **基础设施可靠性**（索引/CI）、**安装体验**（新用户转化）与**长会话 UX**（核心使用场景）。三者共同说明：项目的功能迭代速度已远超其基础设施与体验打磨的节奏。

---

## 五、Bug 与稳定性

### 🔴 P0 — 最严重

| Issue | 概要 | 修复 PR |
|---|---|---|
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian 安装脚本损坏（uv.lock & npm install 失败） | ❌ 无 |
| [#96570](https://github.com/NousResearch/hermes-agent/issues/96570) | **群聊会话系统提示词每轮均为 null**，每次重建导致前缀缓存始终 miss（token 浪费） | ❌ 无 |

### 🟠 P1 — 高优（Windows 桌面启动失败簇）

| Issue | 概要 | 备注 |
|---|---|---|
| [#96413](https://github.com/NousResearch/hermes-agent/issues/96413) | `HERMES_BACKEND_READY` 哨兵输出到 stderr 而非 stdout，Windows 桌面端启动必超时 | 已标记 duplicate |
| [#96548](https://github.com/NousResearch/hermes-agent/issues/96548) | 同上：Electron 等待 90s 后超时，后端端口从未被宣布 | 已标记 duplicate |
| [#96611](https://github.com/NousResearch/hermes-agent/issues/96611) | 同上：启动卡 86% "Starting backend" | duplicate，中文 locale（GBK 代码页）环境复现 |

**分析**：三者指向同一根因——`hermes serve` 将 `HERMES_BACKEND_READY` 写入 stderr，而 `waitForDashboardPort` 仅监听 stdout。v0.20.5 引入该问题，v0.20.6 是否已修复存疑（三个 Issue 均在昨日创建且尚未关闭）。⚠️ **强烈建议维护者立即确认 v0.20.6 是否包含此修复。**

### 🟡 P2 — 值得注意

| Issue | 概要 | 修复 PR |
|---|---|---|
| [#95514](https://github.com/NousResearch/hermes-agent/issues/95514) | Shift+Tab 打断渲染导致最终助手消息永久丢失（未持久化） | ❌ 无 |
| [#95609](https://github.com/NousResearch/hermes-agent/issues/95609) | 原生 PKCE 失败时静默降级为嵌入式 cookie 登录（安全隐患） | ❌ 无 |
| [#79625](https://github.com/NousResearch/hermes-agent/issues/79625) | 桌面端会话忽略 `checkpoints.enabled`，文件系统检查点被静默禁用 | ❌ 无 |
| [#88275](https://github.com/NousResearch/hermes-agent/issues/88275) | 桌面端渲染进程空闲时 CPU 占用 40-70%，macOS Intel 热降频 | ❌ 无（GPU 禁用可部分缓解） |

### 🟢 其他
- [#67358](https://github.com/NousResearch/hermes-agent/issues/67358)：飞书（Lark）WebSocket 正常断开导致整个 gateway 进程退出（status 75/TEMPFAIL）。
- [#87731](https://github.com/NousResearch/hermes-agent/issues/87731)：Desktop Review 面板 "Create PR" 在 gh 正常时仍报错"is gh installed?"。

**总结**：今日无修复 PR 针对上述任何 P0/P1 Bug，稳定性风险正在累积。

---

## 六、功能请求与路线图信号

| Issue/PR | 类型 | 内容 | 纳入下一版可能性 |
|---|---|---|---|
| [#95281](https://github.com/NousResearch/hermes-agent/pull/95281) | PR（feature） | **统一包管理器（`pm`）**：所有依赖纳入单一依赖树，三文件分工（定义/布局/平台缺口） | ⭐ 高 — 架构级改进，但带 `needs-decision` 标签，需要维护者决策 |
| [#96504](https://github.com/NousResearch/hermes-agent/pull/96504) | PR（feature） | 自定义 provider 路线级 `reasoning_replay_field` 显式开关（`reasoning`/`reasoning_content`），保留非空推理历史 | 中 — 涉及推理回放，对多 provider 用户有实际价值 |
| [#55287](https://github.com/NousResearch/hermes-agent/issues/55287) | Issue（feature，👍3） | 桌面端外观设置增加可配置聊天宽度（`--composer-width`） | 中 — 用户呼声较高，改动范围小 |
| [#48313](https://github.com/NousResearch/hermes-agent/issues/48313) | Issue（feature） | 聊天中文件路径渲染为可点击链接（对标 Claude Code/Codex CLI） | 中 — 竞品已有，提升桌面端体验 |
| [#21889](https://github.com/NousResearch/hermes-agent/issues/21889) | Issue（feature，👍3） | Discord 网关支持 `delete_message` 以清理 tool-progress 指示消息 | 中低 — 特定平台体验优化 |
| [#17071](https://github.com/NousResearch/hermes-agent/issues/17071) | Issue（feature） | Cron 任务阶段持久化 + 部分重试机制（用户案例：因推送失败浪费 200 万 tokens） | 低 — 已挂起数月，`needs-decision` |

**路线图信号**：`pm` 统一包管理器是最具架构意义的提案；用户对桌​​面端体验细节（宽度、文件路径链接）需求集中，实现成本低、收益直观。

---

## 七、用户反馈摘要

1. **安装体验是最大痛点**（#87093）：Debian 官方安装脚本直接失败，用户按文档操作即碰壁，P0 级别且持续 12 天未修复。

2. **长会话 UX 引发强烈不满**（#90473）：用户原话 *"显示更多消息是哪个傻逼的设计？"*——分页加载在长会话中体验割裂；该 Issue 已关闭但未见替代方案。

3. **token 浪费是核心焦虑**：
   - #96570：群聊系统提示词每轮重建 → 前缀缓存永远 miss，直接推高成本；
   - #17071：Cron 推送失败导致 **200 万 tokens 被白白消耗**（4 月即提出，至今仍为 `needs-decision`）。

4. **配置项静默失效**（#79625）：`checkpoints.enabled` 在桌面端完全不生效且无提示——用户信任配置却被静默忽略，属于信任损伤类问题。

5. **安全降级引发担忧**（#95609）：PKCE 认证失败时静默回退到嵌入式 cookie 登录，用户感知不到安全等级变化。

6. **正面信号**：贡献者在持续提交高质量修复（压缩去重、Cron 删除恢复、Telegram 插件重连等），社区自组织维护能力较强。

---

## 八、待处理积压（需维护者关注）

### 长期未响应的关键问题

| Issue | 创建时间 | 搁置天数 | 严重度 | 状态 |
|---|---|---|---|---|
| [#17071](https://github.com/NousResearch/hermes-agent/issues/17071) Cron 阶段持久化 + 部分重试 | 2026-04-28 | **~4 个月** | P2（token 浪费 200 万） | `needs-decision`，零维护者回应 |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills Index 持续降级 | 2026-07-18 | ~6 周 | P3（自动化探针失败） | 107 条评论，仍 `degraded` |
| [#21889](https://github.com/NousResearch/hermes-agent/issues/21889) Discord `delete_message` 支持 | 2026-05-08 | ~3.5 个月 | P3（消息清理） | 有 👍3，无回应 |
| [#67358](https://github.com/NousResearch/hermes-agent/issues/67358) 飞书 WS 断开致 gateway 崩溃 | 2026-07-19 | ~6 周 | P3 | 无维护者介入记录 |
| [#68399](https://github.com/NousResearch/hermes-agent/pull/68499) 委托生命周期与任务结果分离 | 2026-07-21 | ~5 周 | P2（涉及会话状态） | 38 天未合并，`blast-broad` 风险域 |

### 特别提醒

1. **Windows 桌面启动超时**（#96413/#96548/#96611）——三个重复报告在 24 小时内集中涌入，根因明确（stderr vs stdout），应作为 P1 立即修复。
2. **#68499 委托生命周期重构**——搁置 38 天，涉及 fail-closed 语义与异步完成路径传播，安全相关，建议优先审阅。
3. **PR 合并积压 46 条**——大量修复（含压缩兜底重试 #96634、Cron 删除恢复 #96637、Telegram 插件重塑 #96627 等）等待审阅，积压时间越长，与 main 分支冲突风险越高。

---

*报告生成时间：2026-08-28 ｜ 数据来源：NousResearch/hermes-agent GitHub 仓库*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-28

## 1. 今日速览

过去 24 小时内，PicoClaw 项目保持中等活跃度：共更新 2 条 Issue（全部为开放状态）和 3 条 PR（1 条待合并、2 条已关闭）。其中，2 条已有较长历史的 PR（#1555、#1549）在本日被正式关闭，说明长期挂起的合并请求链条得到了收尾；新提交的 PR #3347 针对 Web UI 卡顿问题提供了修复，值得重点关注。此外，新增 Issue #3346 报告了 RKLLM 模型在 ARM 开发板上的异常回复问题，涉及模型推理稳定性，建议优先跟进。项目目前无新版本发布。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 共 2 条（均为已关闭状态）：

- **[PR #1555] [CLOSED] fix: merge PR #1390 #1389 #1383 #1381** — 作者: xuwei-xy（2026-03-14 创建，2026-08-27 关闭）  
  汇总合并了 4 个此前开放 PR（#1390、#1389、#1383、#1381）中的修复内容。该 PR 从创建到关闭历时 5 个多月，表明项目在合入积压修复方面可能存在一定的流程延迟，但好在本日已成功收尾。  
  [查看链接](https://github.com/sipeed/picoclaw/pull/1555)

- **[PR #1549] [CLOSED] fix: merge PR #1448 #1447 #1446 #1444** — 作者: xuwei-xy（2026-03-14 创建，2026-08-27 关闭）  
  同样为汇总合并类 PR，整合了 4 个开放 PR（#1448、#1447、#1446、#1444）的修复。与 #1555 同期关闭，说明一批历史遗留修复已合入主分支。  
  [查看链接](https://github.com/sipeed/picoclaw/pull/1549)

**项目整体评估**：两条合并类 PR 的关闭意味着一批分散在多个 PR 中的修复（涵盖此前 8 个独立 PR 的内容）已统一进入主分支，项目的代码整合度有所提升。但考虑到这些 PR 均创建于 2026 年 3 月，今日关闭可能更多是流程上的收尾，实际功能推进幅度中等。

---

## 4. 社区热点

今日社区讨论最活跃的条目为：

- **[Issue #3287] [Feature] Better support long messages in IRC** — 作者: superuser-does，创建于 2026-07-22，最后更新 2026-08-26，评论 8 条（今日更新，说明仍在讨论中）  
  [查看链接](https://github.com/sipeed/picoclaw/issues/3287)

  该 Issue 请求 PicoClaw 支持将 IRCv3 中超过 512 字节限制的长消息视为单一连贯消息处理。目前 IRC 协议默认限制单条消息为 512 字节，换行符表示新消息，但 IRCv3 的 `message-tags` 等扩展允许更长的消息。该 Issue 已开放超过一个月且持续获得讨论，反映了社区对 IRC 长消息处理能力的真实需求。👍 数为 0，说明属于讨论热度高但关注度尚未爆发的功能请求。

---

## 5. Bug 与稳定性

今日报告 1 条新 Bug：

- **[Issue #3346] [BUG] about RKLLM reply** — 作者: crazysarah，创建于 2026-08-27，无评论，暂无 fix PR  
  **严重程度：高（涉及模型推理正确性）**  
  摘要：用户在 ARM 开发板上运行 PicoClaw V0.3.1 时，遇到 RKLLM 模型返回异常回复的问题（附截图）。涉及 Go 版本环境信息（细节被截断）。  
  该问题直接影响核心 LLM 推理功能在 ARM 平台的可用性，建议尽快复现并定位。目前尚未有对应的 PR 提交修复。  
  [查看链接](https://github.com/sipeed/picoclaw/issues/3346)

---

## 6. 功能请求与路线图信号

今日出现的功能相关信号：

- **[Issue #3287] Better support long messages in IRC** — 对 IRCv3 长消息（超过 512 字节）的完整支持。该请求涉及消息分片与重组逻辑，属于协议层面增强，若实现将显著改善 IRC 渠道下的长文本体验。考虑到已有 8 条评论仍在活跃讨论，且 PicoClaw 定位为个人 AI 助手，IRC 是其重要接入渠道，该功能被纳入后续版本的可能性较大。  
  [查看链接](https://github.com/sipeed/picoclaw/issues/3287)

- **[PR #3347] fix laggy interface** — 虽然本质是性能修复，但它暗示了"大量文本渲染导致 UI 卡顿"是一个用户可见的体验痛点，修复该问题能提升 Web UI 在大对话上下文下的可用性。该 PR 目前待合并，若合入将直接影响下一版本的用户体验。  
  [查看链接](https://github.com/sipeed/picoclaw/pull/3347)

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论及相关内容中提取的用户反馈：

- **IR

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-08-28

## 1. 今日速览

NanoClaw 在过去 24 小时内保持高度活跃：共产生 12 条 Issue 更新和 30 条 PR 更新，但尚无新版本发布。当前**待合并 PR 达 25 条**，积压压力明显，尤其是 Agi-Asi 提交的 7 条 setup/fix 系列 PR（#3560–#3567）和 zvi-fried 的 provider 契约重构 PR（#3581、#3584）值得重点关注。社区讨论高度集中在**渠道适配器缺陷**（Discord 附件丢失、Telegram 消息送达失败）和**安装/更新流程可靠性**两大主题。新增 Issue 中约半数由同一批核心贡献者提出，项目正处于集中攻坚期，但 PR 合并速度（24 小时仅 5 条）需提升以匹配提交速度。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日共 5 条 PR 被合并/关闭，主要进展集中在工具安装流程修复：

| PR | 标题 | 类型 | 状态 |
|---|---|---|---|
| [#3578](https://github.com/nanocoai/nanoclaw/pull/3578) | 首次安装时立即安装 Dial 工具（即使尚无 agent） | Fix | 已关闭 |
| [#3580](https://github.com/nanocoai/nanoclaw/pull/3580) | 将 dial-status.test.ts 加入 nc:copy 列表 | Fix | 已关闭 |
| [#3582](https://github.com/nanocoai/nanoclaw/pull/3582) | 同上（重复 PR） | Fix | 已关闭 |
| [#3506](https://github.com/nanocoai/nanoclaw/pull/3506) | 修复 macOS 上 update-nanoclaw 事务控制器（6 项修复） | Fix | 已关闭 |

值得注意的进展信号：**PR #3578 修复了首次安装时序缺陷**——用户先安装 Dial 工具、随后创建 agent，导致 agent 拿不到 dial 命令。核心问题在于安装过程中的依赖顺序，修复后工具安装会延迟到 agent 创建完成之后。此外，**#3580/#3582 为同一修复提交了两次**，虽已关闭但合并状态不清晰，建议维护者核实实际合并的是哪一个。

另值得注意的是 **zvi-fried 提交的 provider 契约声明（#3581）与实现（#3584）两个 Refactor PR 今日同步打开**，标志着项目正从渠道适配器的"接口混乱"阶段（多个 Issue 指向 url/fetchData 契约不一致）走向标准化重构，这可能是未来几周最重要的架构改进。

## 4. 社区热点

今日讨论最集中的 Issue/PR：

- **[Issue #3456 "冗余 Button value 参数损坏 Discord 审批卡片"](https://github.com/nanocoai/nanoclaw/issues/3456)**（评论 5，创建于 08-23，持续活跃 4 天）
  - 这是今日讨论热度的核心。Discord 审批/提问卡片**每次点击都解析为错误选项**，且伴有静默拒绝 + 重复重发的双重问题。同主题的修复 PR [#3458](https://github.com/nanocoai/nanoclaw/pull/3458) 已存在但尚未合并，社区对合并速度可能有一定焦虑。该 Bug 影响的是 ask_question 的核心交互链路，严重等级为 high。

- **[Issue #574 "容器缺少 jq"](https://github.com/nanocoai/nanoclaw/issues/574)**（评论 3，👍 1，创建于 2026-02-28）
  - 这是积压 6 个月的老 Issue 今日重新活跃。用户指出容器内没有 jq，导致自动化解析 API 响应只能使用 `node -e`，带来 **eval 注入安全风险**。该诉求在 #3575（WhatsApp 图片导致的会话卡死）等新 Issue 中也间接体现——那些 Agent 无法可靠处理非文本内容的问题，本质上是工具链残缺的延续。

- **Agi-Asi 的 setup 修复 PR 系列（#3560–#3567）**：7 条 PR 全部在等待合并，覆盖 PATH 配置、容器唤醒、apt 超时、launchd plist 引导、fork 用户保留本地适配器等多个方面。虽然没有大量评论，但这组 PR 集中回应了 #3529（更新流程破坏本地适配器）等用户痛点，是社区关注的实际诉求。

## 5. Bug 与稳定性

按严重程度排列：

**高严重度：**

- **[#3456 冗余 Button 参数损坏 Discord 审批 custom_id](https://github.com/nanocoai/nanoclaw/issues/3456)** — Discord 审批/提问卡片完全不可用，每次点击解析到错误选项，且产生静默拒绝 + 重复重发。**已有 fix PR #3458**（08-23 提交，仍未合并）。

- **[#3568 Pending system 行饿死入站队列，Agent 静默停止响应](https://github.com/nanocoai/nanoclaw/issues/3568)** — 系统消息达到 `maxMessagesPerPrompt`（默认 10）后，Agent 静默不响应且无任何提示。**暂无对应 PR**。

- **[#3575 WhatsApp 超大图片导致会话永久卡死](https://github.com/nanocoai/nanoclaw/issues/3575)** — 单张超过 2000px 的图片可让整个会话数小时不可用，直到手动 `/clear`。作者提交了降采样修复建议（Issue 本身为 fix 类型）。**暂无对应 PR**。

- **[#3569 Telegram 奇数个下划线消息永久无法送达](https://github.com/nanocoai/nanoclaw/issues/3569)** — 所有安装被钉在 `@chat-adapter/telegram@4.29.0`，该版本存在 MarkdownV2 转义 bug（整条消息中未转义的 `_ * ~ \`` 数量为奇数时送达失败）。上游已修复但 NanoClaw 一直未升级依赖。**暂无对应 PR**。

**中高严重度：**

- **[#2888 Discord 等仅 URL 的 chat-sdk 适配器丢弃图片/文件附件](https://github.com/nanocoai/nanoclaw/issues/2888)** — Agent 只能看到 `{type, name, mimeType, size}` 元数据，永远拿不到文件内容；Telegram 正常。**关联 #3572（已关闭）**——#3572 在 08-27 当天被关闭，建议核查是否已有底层修复，以及 #2888 是否可随之关闭。

**中严重度：**

- **[#3576 限流轮次向频道刷屏重复错误通知，无退避/去重](https://github.com/nanocoai/nanoclaw/issues/3576)** — `deliverErrorResult` 无限重发，每次限流重试都再发一条错误消息。**暂无对应 PR**。

- **[#3532 工具按 Agent 作用域设置遗漏后续创建的 Agent](https://github.com/nanocoai/nanoclaw/issues/3532)** — 新 agent 组默认获得工具访问权限，绕过一 CLI 网关的权限控制。

- **[#3529 更新流程的 skill 刷新误伤本地适配器，无退出选项](https://github.com/nanocoai/nanoclaw/issues/3529)** — 用户自定义适配器在 `/update-nanoclaw` 时被覆盖或导致验证失败。**已有对应 PR #3565**（让 fork 用户在 skill 刷新时保留本地适配器）。

## 6. 功能请求与路线图信号

- **[#3577 自动接线唯一合格的 agent 组，而非每次弹 "Choose an agent" 选择器](https://github.com/nanocoai/nanoclaw/issues/3577)**（DawoudIO，08-27 创建）— 当频道只有一个合格 agent 组时，自动接线而非要求手动选择。作者为多日活跃贡献者且同时提交了 #3458 修复 PR，此请求很可能在下个版本中实现——自动接线逻辑与现有提示卡流程是天然互补的。

- **[#3579 注册表技能：防止 nc:copy 列表从 channels/providers 漂移](https://github.com/nanocoai/nanoclaw/issues/3579)**（glifocat，08-27 创建）— 提出将技能副本与长期分支进行一致性校验。**已有强关联 PR #3580/#3582**（将 dial-status.test.ts 加入 nc:copy 列表，今日已合并），说明维护者已开始处理此类问题，但系统级方案尚未出现。

- **[#3575 WhatsApp 图片降采样至 2000px](https://github.com/nanocoai/nanoclaw/issues/3575)** — 虽是 bug 报告，但降采样方案本身就是明确的功能建议，实施成本低、收益明确。

- **zvi-fried 的 provider 契约重构（PR #3581/#3584）** — 将 provider 接口显式声明并实现，直接回应了 #2888/#3572 中 url/fetchData 契约混乱的根因。这是当前最重要的路线图信号：**项目正在标准化渠道适配器接口**。

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实用户反馈：

- **"Agent 看起来死了，而且会死数小时，直到有人运行 /clear"**（#3575）— WhatsApp 超大图片卡死会话的场景描述，暴露了一个关键体验问题：**Agent 卡死时没有任何自动恢复或错误通知机制**，用户只能被动发现并通过手动命令恢复。与 #3568（静默停止响应）、#3569（Telegram 消息静默丢失）共同指向同一个系统性短板：**Agent 面对异常输入时缺乏故障指示与自愈能力**。

- **"每个选项按钮实际上都在点击时解析到错误选项"**（#3456）— Discord 审批卡片不可用，这也是多日来的高频问题。

- **"用户发送图片后，Agent 只看到文件名"**（#2888）— 用户预期 Agent 能"看到"图片内容，但实际只能拿到元数据，功能感知与实际的差距非常明显。

- **"更新后我的自定义适配器被覆盖了"**（#3529）— fork 用户的更新焦虑，让用户对更新产生抗拒，PR #3565 指向的正是让 fork 用户保住本地适配器。

- 正面信号：**#574（容器缺 jq）在创建 6 个月后获得 +1**，说明社区用户仍然认可该方向、愿意为此投票。这也侧面印证了容器内工具链完整性与 Agent 可靠性的直接关联。

## 8. 待处理积压

需要维护者关注的长周期未响应问题：

- **[Issue #574 "容器缺乏 jq"](https://github.com/nanocoai/nanoclaw/issues/574)** — 创建于 2026-02-28，累积 👍 1，今日重新活跃。安全隐患（`node -e` eval 注入风险）+ 社区长期呼声 + 6 个月未处理，优先级建议上调。

- **PR #3458（修复 #3456 的 Discord 审批按钮）** — 08-23 提交，已等待 4 天，对应的是 24 小时内评论最活跃的 high 严重度 Bug，建议优先合并。

- **Telegram 依赖钉死问题（#3569）** — 所有安装被锁在 `@chat-adapter/telegram@4.29.0`，上游已有修复但 NanoClaw 一直未升级，需要尽快处理依赖更新策略。

- **PR [#3560](https://github.com/nanocoai/nanoclaw/pull/3560)–[#3567](https://github.com/nanocoai/nanoclaw/pull/3567)（Agi-Asi 的 7 条 setup/fix 系列）** — 全部创建于 08-26，覆盖 macOS/Linux 安装和更新流程的多处可靠性问题，等待合并超过 48 小时。其中 #3565 直接修复 #3529（本地适配器被覆盖）的用户痛点，建议优先评审。

- **zvi-fried 的 provider 契约声明（#3581）与实现（#3584）** — 今日新开的大型 Refactor，直接回应渠道适配器接口混乱的根因（#2888、#3572），但 30 条待合并 PR 中尚未包含这两条，需要维护者尽快安排评审以免后续 PR 基于旧接口冲突。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-08-28）

## 1. 今日速览

IronClaw 项目今日活跃度极高，24小时内处理了 45 条 Issue 和 50 条 PR，呈现快速的开发迭代节奏。核心方向集中在上下文压缩与工具输出优化（Issue #7891、#7824）、MCP 工具名大小写与 OAuth 支持（PR #7945、#7946）、Gmail 语义输出（PR #7944）以及技能学习配置（PR #7935/Issue #7920）等关键领域。最新 RC 版本 `1.4.0-rc.1` 已发布进入 QA 验证阶段（PR #7957 正推进其转正），同时有 13 条 PR 待合并，包括若干标为 `size: XL` 的大型功能改动。项目健康度良好，问题关闭率 35.6%，PR 合并率 74%。

---

## 2. 版本发布

- **[1.4.0-rc.1]**(https://github.com/nearai/ironclaw/releases) — 2026-08-26 发布，涵盖自 1.3.0 以来的 81 个提交。核心新增：持久化通知收件箱（runs 发布权威结果与操作门禁至 WebUI 通知中心，支持审批与认证提示）。
- 发布候选已进入 QA 验证，**PR #7957**（[链接](https://github.com/nearai/ironclaw/pull/7957)）正申请将 RC 提升为稳定版 1.4.0，仅更新版本元数据和变更日志标题，不含产品代码变更。**无已知破坏性变更。**

---

## 3. 项目进展

今日合并的部分重要 PR 与相关进展：

| PR | 内容 | 意义 |
|---|---|---|
| [#7904](https://github.com/nearai/ironclaw/pull/7904) [M] | 重落地 OMP 分支（已关闭 PR #7491）中可移植的工具可靠性修复 | 不带入 OMP 代码，仅保留经证据验证的可靠修复，价值高 |
| [#7935](https://github.com/nearai/ironclaw/pull/7935) [XL] | 技能学习提取可在 Settings → Inference 配置 | 移除隐藏的 `IRONCLAW_SKILL_LEARNING_MODEL` 环境变量，管理员可从当前提供商选择学习模型 |
| [#7942](https://github.com/nearai/ironclaw/pull/7942) [S] | 线程产物存储上限 16→64 MiB，序列化响应上限 20→80 MiB | 修复 573 条消息约 25 MiB 轨迹的回归，附调用方级测试 |
| [#7896](https://github.com/nearai/ironclaw/pull/7896) [XL] | 限制模型可见的工具结果预览 | 用有界、结构感知的单一路径替代盲目字节切片，完整产物保持可持久化可翻页 |

相关 Issue 一并关闭：#4162/#4163/#4165/#4167（压缩编排重构）、#4425（builtin.http 上下文炸弹）、#4796（LLM 时间感知）、#4828（通道状态运行时上下文）、#2597（E2E 浏览器测试跟踪）、#567（主动工具输出截断）、#6686（移除废弃 Docker 沙箱后端）、#7920（技能学习配置）等共 16 条。

整体来看，项目在上下文压缩管线（转为"累积式上下文屏障"见 PR #7954）、Gmail 语义输出（PR #7944）、MCP 兼容性（大小写保持 + OAuth CIMD）与通知系统（PR #7900/#7899 持久化资源块与自动化预运行失败）多线并进。

---

## 4. 社区热点

- **[Issue #7891](https://github.com/nearai/ironclaw/issues/7891)**（评论 6 条，Open）— `perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference on two emails`。热度最高。两次 Gmail 调用（274/290 ms）造成整轮 19.7 秒，其中 19.2 秒为模型推理——根因在于 49,152 字节未投影的载荷直接喂给模型。**社区诉求：工具输出必须做结构感知投影，而非盲目截断。** 对应修复 PR #7896 今日已合并，应能缓解。
- **[Issue #7824](https://github.com/nearai/ironclaw/issues/7824)**（评论 3 条，Open）— 上下文投影：Pi 风格压缩屏障 + 结构化摘要 + 溢出恢复。PinchBench（147 任务、DeepSeek-V4-Flash）实测单次运行 2.277 亿输入 token、$10.31。**诉求：降低 token 成本。** 对应 PR #7954（累积式压缩屏障）已提出。
- **[Issue #6986](https://github.com/nearai/ironclaw/issues/6986)**（评论 3 条，Open，P0）— 缓存须保持工具数组字节级一致，用 defer_loading/tool_reference 替代运行中提升。属 pi-harness 采用计划（P0 #3），关注度高。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 状态 | 对应修复 |
|---|---|---|---|
| **P0** | [#6986](https://github.com/nearai/ironclaw/issues/6986) 缓存工具数组中途被变更，破坏字节一致性 | Open | 暂无对应 PR，仍在讨论 |
| **High** | [#7891](https://github.com/nearai/ironclaw/issues/7891) 未投影的工具载荷导致单轮 19.7 秒（其中 19.2 秒推理） | Open | **PR #7896 已合并**（结构感知预览截断），建议跟进验证 |
| **Medium** | [#2950](https://github.com/nearai/ironclaw/issues/2950) `normalize_schema_strict()` 耦合两种行为，致 provider 400 | Open（P3） | 暂无 |
| **Low** | [#7941](https://github.com/nearai/ironclaw/pull/7941) Slack `thread_broadcast` 子类型被误拒（"Also send to channel" 回复的 `app_mention` 被忽略） | Open PR | 修复已提交，待合并 |
| **Low** | [#6686](https://github.com/nearai/ironclaw/issues/6686) 发现已废弃的 `DockerProcessSandboxBackend` 死代码 | Closed | 已清理 |

---

## 6. 功能请求与路线图信号

- **自学习写管线（Issue #7864，epic）** — 决定轮次活动何时转化为持久长期记忆，覆盖显式记忆请求、用户纠正、上下文投影观察。与 PR #7907（拒绝过期全文重写）、#7935（技能学习配置）相互呼应，是"记忆"主题主线的延续。
- **跨会话持久记忆（Issue #7276，epic）** — 将日常对话中的有效事实自动提升为跨会话记忆，直接回应 #7185 反馈。
- **WebUI 语音输入（Issue #7867，feature-request）** — 对齐 Slack/Telegram 已有的语音能力，当前 composer 仅键盘操作。
- **MCP 增强**：PR #7945（保留大小写敏感工具名 + 能力别名绑定）与 #7946（MCP OAuth CIMD + 资源绑定，RFC 8707/7591）——建议重点跟进，前者若不合并将损害 CamelCase 工具兼容性。
- **通知系统完善**：PR #7900（持久化资源块）/ #7899（自动化预运行失败通知）扩展通知中心覆盖面，已通过 `1.4.0-rc.1` 首次引入的通知收件箱将承接这些能力。

---

## 7. 用户反馈摘要

- 用户明确期望**对话中提供的信息可在后续会话被使用**（#7185 反馈 → #7276），当前实现只记录交互转录，不提取事实。
- 存在 **Gmail 工具调用开销巨大**的痛点：两封邮件触发 49 KB 未投影载荷，导致近 20 秒响应，直接影响日常使用体验（#7891）。
- 自动化任务**每次从零开始运行**，无法沉淀操作经验（如"某扩展第三步安装失败，可如此绕过"）——用户希望有自动化级 lessons 文件（#7893，今日已合并）。
- **内置 HTTP 工具存在"上下文炸弹"**：单次请求返回 10 MB 以上原始 HTML 且不引导模型使用 `.save`（#4425，今日已关闭）。
- LLM **不具备当前日期时间感知**，除非显式调用时间工具（#4796，今日已关闭）。
- 模型对**已连接渠道和投递目标无环境感知**，两名测试者（6/11、6/12）均遇到该问题（#4828，今日已关闭）。

---

## 8. 待处理积压

| 项目 | 创建时间 | 天数 | 最后更新 | 备注 |
|---|---|---|---|---|
| [#2950](https://github.com/nearai/ironclaw/issues/2950) P3 schema 清理与可选字段重写拆分 | 2026-04-24 | ~126 天 | 08-27 有更新 | 已有重构方向，但长期未落地 |
| [#6986](https://github.com/nearai/ironclaw/issues/6986) **P0** 工具数组缓存一致性 | 2026-08-01 | ~27 天 | 08-27 有更新 | 属 pi-harness 计划 P0 #3，已提 3 周无对应修复 PR，**建议优先排期** |
| [#7276](https://github.com/nearai/ironclaw/issues/7276) 跨会话持久记忆（epic） | 2026-08-06 | ~22 天 | 08-27 有更新 | 与 #7864 记忆写管线协作推进，无明确时间表 |
| [#4425](https://github.com/nearai/ironclaw/issues/4425) builtin.http 上下文炸弹 | 2026-06-03 | 今日已关闭 | — | 已解决 |
| [#2597](https://github.com/nearai/ironclaw/issues/2597) E2E 浏览器失败跟踪 | 2026-04-17 | 今日已关闭 | — | 已解决 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-08-28**

---

## 1. 今日速览

LobsterAI 今日活动活跃，24 小时内合并/关闭 12 个 PR、关闭 5 个 Issue、新开 2 个 Issue，并发布 2026.8.26 版本。值得关注的是，旧 Issue 批量关闭（5 个标记为 stale）优化了积压管理，但新报告的 2 个 Issue 涉及安装器数据丢失和计费异常，需优先跟进。项目整体处于稳定迭代节奏，重点聚焦资料库渲染、安装器体验与数据安全。

---

## 2. 版本发布

### LobsterAI 2026.8.26（2026-08-26 发布）

**更新内容：**
- fix(installer): 支持静默上传优先的网页构建（PR #2511）
- fix(installer): 隐藏 dictbind 静默包的横幅（PR #2512）
- 其他修复（详见发布说明）

**破坏性变更：** 无明确标注。

**迁移注意事项：** 暂无特殊迁移要求。建议 Windows 用户关注静默安装行为的变更。

---

## 3. 项目进展

今日共合并/关闭 12 个 PR，主要集中在以下方向：

**🎨 渲染层与资料库优化（核心推进）**
- **PR #2565** — `fix(library): 优化列表查询切换与重新加载状态`：分离本地/云端查询快照，防止旧结果污染当前列表，消除列表闪烁
- **PR #2559** — `fix: 修复资料库缩略图渲染并完善发布资源管理提示`：优化 PPTX 首张幻灯片缩略图渲染、增加渲染失败重试、完善分享文件/站点删除额度提示
- **PR #2558** — `feat(auth): add rainbow animation to sidebar login CTA`：为侧边栏登录按钮添加彩虹动画及故障日志

**📊 分析链路完善**
- **PR #2555** — `feat(analytics): 完善发布与部署分析链路`：新增分享、部署、复制链接等事件跟踪，补充异步部署终态与重试队列

**🖥️ 安装器修复（Windows）**
- **PR #2560** — `fix(installer): remove silent-install progress banner for all channels`：静默安装（/S）完全隐藏安装器窗口，遵守零 UI 契约

**🧪 测试补全**
- **PR #1165** — 为 `openclawMemoryFile` 和 `openclawLocalTimeContextPrompt` 新增 75 个 Vitest 单元测试，填补两个核心模块零测试覆盖的空白

**🐛 其他修复**
- **PR #1166** — 防止自定义 agent 重名提交
- **PR #1163** — 定时任务"立即运行"增加乐观更新与 Gateway 状态同步

**整体评估：** 项目在资料库可靠性、渲染稳定性、安装器合规性和测试覆盖方面均有实质进展，工程质量意识较强。

---

## 4. 社区热点

今日最受关注的 Issue 为新开的 **#2561** 和 **#2562**，均由用户 `dreamsdesign` 提交：

### 🔴 Issue #2561 — [OPEN] installer（高热度）
> 链接：[#2561](https://github.com/netease-youdao/LobsterAI/issues/2561)

**内容：** 升级时如果项目文件夹位于安装目录内，安装程序会**清除整个项目文件夹**，用户称损失约 2000 credits。

**分析：** 这是严重的数据丢失问题，涉及安装器的目录清理逻辑。考虑到今日刚合并的 PR #2560（安装器静默安装优化），该 Issue 的真实性和影响范围需要维护者立即核实。

### 🔴 Issue #2562 — [OPEN] use the f words carefully drains 200 credits（高关注）
> 链接：[#2562](https://github.com/netease-youdao/LobsterAI/issues/2562)

**内容：** 用户声称在对话中输出脏话，每次被扣 200 credits，总计损失约 800 credits，质疑计费系统是否与 DeepSeek 相关。

**分析：** 该 Issue 涉及计费/风控逻辑的争议，用户情绪明显不满。可能是内容审核或 API 异常导致的意外扣费，需要核查计费链路。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | Fix 状态 |
|---------|----------|------|---------|
| 🔴 严重 | [#2561](https://github.com/netease-youdao/LobsterAI/issues/2561) | 安装器升级时清除项目文件夹，造成数据丢失 | ❌ 无 fix PR |
| 🟠 高 | [#2562](https://github.com/netease-youdao/LobsterAI/issues/2562) | 输出特定词汇被扣 200 credits/次 | ❌ 无 fix PR |
| 🟡 中 | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改自建 agent 图标触发网关反复重启（已关闭，stale） | ✅ 已关闭（状态未知） |
| 🟢 低 | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 卸载后程序仍可运行（用户怀疑后门，官方已关闭） | ✅ 已关闭 |

**今日修复的 Bug（通过 PR）：**
- 列表查询切换时旧结果污染当前列表（PR #2565）
- 资料库缩略图渲染失败/串图（PR #2559）
- 定时任务"立即运行"无反馈（PR #1163）
- 自定义 agent 名称可重复（PR #1166）

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 判断 |
|-------|------|------|
| [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174)（closed/stale） | 支持**多个**自定义模型提供商（当前仅 1 个） | 已被关闭但需求仍具价值。结合今日 PR #2564 "Feat/more models collapse"（模型折叠展示），**多模型管理或已在开发中**，可关注后续版本 |
| [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162)（closed/stale） | 为记忆文件模块补测试 | ✅ 已由 PR #1165 完成（75 个测试） |

**路线图信号：** PR #2564（Feat/more models collapse）暗示模型管理 UI 正在重构，多模型提供商支持或为下一版本方向。

---

## 7. 用户反馈摘要

**正面反馈：**
- 无明确正面评价记录

**负面/痛点反馈：**

1. **数据安全担忧（最严重）** — "升级时整个 projects 文件夹被清除，损失 2000 credits"（[#2561](https://github.com/netease-youdao/LobsterAI/issues/2561)）
2. **计费透明度质疑** — "骂了几句被扣 800 credits，和 DeepSeek 有关系吗？"（[#2562](https://github.com/netease-youdao/LobsterAI/issues/2562)）
3. **卸载残留疑虑** — "卸载后程序还能运行发消息，你们是不是留后门？"（[#1173](https://github.com/netease-youdao/LobsterAI/issues/1173)）→ 说明卸载/进程管理体验需优化，官方应加强说明与清理逻辑
4. **沙箱策略不满** — "3.31 强制沙箱找不到关闭按钮"（[#1179](https://github.com/netease-youdao/LobsterAI/issues/1179)）→ 安全策略需提供更明显的配置入口
5. **自定义模型限制** — "希望保留多个自定义模型提供商而不是只能替换"（[#1174](https://github.com/netease-youdao/LobsterAI/issues/1174)）

---

## 8. 待处理积压

| 条目 | 状态 | 创建时间 | 提醒 |
|------|------|---------|------|
| [#2561](https://github.com/netease-youdao/LobsterAI/issues/2561) — 安装器清除项目文件夹 | OPEN | 2026-08-27 | ⚠️ **紧急**：数据丢失问题，需立即排查安装器逻辑中与升级清理相关的代码路径，并回滚相关变更 |
| [#2562](https://github.com/netease-youdao/LobsterAI/issues/2562) — 扣费异常 | OPEN | 2026-08-27 | ⚠️ 需核查计费/内容审核链路，避免用户流失 |
| [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) — 沙箱关闭入口缺失 | CLOSED (stale) | 2026-03-31 | 已关闭但用户反馈真实存在，建议重新开启或评估是否已在后续版本解决 |
| [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) — 多自定义模型提供商 | CLOSED (stale) | 2026-03-31 | 已关闭但功能可能已在 PR #2564 中部分实现，建议维护者确认后回应用户 |

---

*本日报基于 GitHub 公开数据生成，数据截止 2026-08-28。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-08-28

## 1. 今日速览

Moltis 项目在过去 24 小时整体活跃度较低：**无新 Issue 或 Issue 更新**，仅有 **1 条 PR 动态（已关闭）**，同时发布了 **1 个新版本（20260827.01）**。值得关注的是，唯一的 PR #1232 修复了 OpenAI 严格模式下工具 schema 因 `additionalProperties=false` 导致 Codex 发送空值的关键兼容性问题，并已随最新版本发布。项目当前处于相对平稳的维护期，核心工作集中在工具链兼容性打磨上。

---

## 2. 版本发布

### v20260827.01
- **发布链接**: moltis-org/moltis Releases v20260827.01
- **核心内容**: 包含 PR #1232 的修复（详见下文项目进展）
- **破坏性变更**: 无明确标注
- **迁移注意事项**: 由于涉及工具 schema 声明变化，使用 OpenAI/Codex 工具调用的用户建议升级后重新验证 webhook patch 字段的传输行为

---

## 3. 项目进展

### PR #1232 — fix(tools): make object schemas OpenAI-safe [已关闭/已合并]
- **链接**: moltis-org/moltis PR #1232
- **作者**: IlyaBizyaev（创建于 2026-08-22，更新于 2026-08-27）
- **解决的问题**: OpenAI 严格工具模式（strict tool schemas）会将对象以 `additionalProperties=false` 闭合。此前未明确的 patch 和 map schemas 导致 Codex 在调用时发送 `null` 或空值，而非实际请求的数据。
- **修复方式**: 显式声明 webhook patch 字段，使 schema 在 OpenAI 严格模式下正确传递数据。
- **项目意义**: 这是对 AI 工具调用链的一次关键兼容性修复，直接消除了 Moltis 在 OpenAI/Codex 生态下数据丢失的隐患。按版本时间线推断该修复已合入 v20260827.01。

---

## 4. 社区热点

过去 24 小时无活跃讨论的 Issues/PRs（评论数据为 `undefined`，无点赞）。PR #1232 是今日唯一动态的 PR，讨论热度有限。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 |
|---------|------|------|
| 高 | OpenAI 严格工具模式下，patch/map 对象 schemas 被 `additionalProperties=false` 闭合，导致 Codex 发送 `null` 或空值，请求数据丢失 | **已有修复**: PR #1232 已关闭，随 v20260827.01 发布 |

无其他新报告 Bug、崩溃或回归问题。

---

## 6. 功能请求与路线图信号

- **PR #1232 的信号**: 该修复并非新功能，但对 `patch` 字段的显式 schema 声明意味着 Moltis 正在系统性地适配 OpenAI 系列模型的严格工具调用规范。可预期后续版本将持续针对 Codex 等 AI 工具的 schema 兼容性进行补齐（例如 map 类型的相关处理）。
- **当前无用户新提的功能需求**进入 backlog。

---

## 7. 用户反馈摘要

从 PR #1232 的实现内容可推断：真实用户场景中，开发者通过 Codex（OpenAI 编程代理）调用 Moltis 的 webhook patch 能力时，遭遇了请求数据被静默置空的问题（表现为工具只收到 null/空对象）。该问题直接影响 AI 驱动的自动化流程可靠性。目前无其他公开的用户评论数据可供进一步分析。

---

## 8. 待处理积压

过去 24 小时**无新增积压事项**。当前仓库无长期未响应的 Issue 或 PR 提示（Issues 池为空，PR 池仅含今日已关闭的 #1232）。

---
*数据来源: moltis-org/moltis GitHub 仓库 | 报告生成时间: 2026-08-28*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-08-28**

---

## 1. 今日速览

CoPaw 项目昨日活跃度极高，共产生 61 条 Issues/PR 更新，其中 PR 更新达 45 条（待合并 27 条），显示开发节奏明显加快。项目发布了 v2.2.0-beta.1 预发布版本，标志着多租户 Hub 功能进入验证阶段，但随之而来的是多个稳定性回归报告（零停机重载导致 memory_search 失效、同步调用阻塞事件循环等）。与此同时，贡献者提交的 PR 质量较高，已覆盖网页端滚动锁定、工具调用可见性切换、流式 HTTP 双协议客户端等多项用户呼声较高的功能，社区参与度与项目演进速度均处于健康水平。

---

## 2. 版本发布

### v2.2.0-beta.1（预发布）

**发布链接：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.1

**主要更新内容：**
- 文档更新：滚动上下文管理器博客（PR #7300）
- 修复 DashScope 工具 schema 兼容性问题，适配严格模式模型（PR #7284）
- 新增集成测试覆盖（详情见发布说明）

**⚠️ 已知稳定性问题（请 beta 测试者重点关注）：**
- Issue #7364 报告：**零停机重载后 memory_manager 复用已关闭实例**，导致 memory_search 永久失效（版本 2.2.0b1）
- Issue #7360 报告：**桌面端启动耗时异常**（约 247.53 秒），远超正常范围（版本 V2.2.0.b1）

**迁移/测试建议：** 2.2.0-beta.1 重点验证多租户 Hub 与 DashScope 严格模型工具调用；执行 agent 重载后请确认 memory_search 功能是否正常；记录首次启动耗时以便对比回归。

---

## 3. 项目进展

昨日无重大功能合并（18 条 PR 关闭，多数为功能完成或弃置），但待合并队列中有多项高价值 PR 值得关注：

| PR | 内容 | 状态 |
|---|---|---|
| [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | 新增 Streamable-HTTP 双协议 MCP 客户端（支持 2026-07-28 新版协议，并向后兼容 2025 年旧版） | 待合并 |
| [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | 限制超大单行工具结果进入上下文，完整结果保留为工作区工件，附带恢复元数据 | 待合并 |
| [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | ReMe 内存依赖升级至 0.4.1.9，适配插件化发布，修复 embedding 配置热更新与向量空间切换的数据一致性 | 待合并 |
| [#7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) | 长对话历史分页加载 + 会话记录虚拟化渲染（针对 #7049 被关闭后重新实现） | 待合并 |
| [#7337](https://github.com/agentscope-ai/QwenPaw/pull/7337) | 将模型输出能力元数据与用户请求预算分离，防止自动发现的输出上限静默变为 max_tokens 限制 | 待合并 |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 防止 HookContext.inject_context() 注入的上下文被持久化为可见用户聊天记录 | 待合并（已进入人工审查） |

以上 PR 合并后将显著改善：上下文管理、MCP 兼容性、长对话体验、内存系统可靠性与多租户安全边界。

---

## 4. 社区热点

### 🔥 Issue #7318 — QwenPaw Hub 多租户版路线图讨论（评论区 9 条）
**[链接](https://github.com/agentscope-ai/QwenPaw/issues/7318)**

QwenPaw 团队发布多租户 Hub 将于 2.2.0 推出的公告，公开征集社区对后续功能方向的建议。该议题关联早期 #2324（多用户访问与管理权限），反映出社区从"个人助理"向"团队协作"演进的强烈诉求。9 条评论为目前最高热度，是观察 2.3+ 路线图的重要窗口。

### 🔥 Issue #7298 — OpenSSL 3.0.x TLS 栈导致运营商 DPI 重置握手（评论区 7 条）
**[链接](https://github.com/agentscope-ai/QwenPaw/issues/7298)**

桌面端和 Docker 镜像均打包 Python 3.11 时代的 OpenSSL 3.0.x，在部分网络环境下触发运营商深度包检测（DPI）重置 TLS 握手，且桌面端无变通方案。7 条评论反映出该问题影响面较广、用户对网络兼容性的关注度高。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 🔴 严重（功能失效/核心功能不可用）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 同步调用阻塞事件循环 118-135 秒、timeout 不生效（Windows 桌面 2.1.1b1） | 待修复 |
| [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) | 零停机重载复用已关闭的 memory_manager，memory_search 永久失效（2.2.0b1） | 待修复 |

### 🟠 中等等（功能异常/体验严重受损）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7312](https://github.com/agentscope-ai/QwenPaw/issues/7312) | Windows 下 execute_shell_command 因继承 stdin 管道而挂起（缺少 stdin=DEVNULL） | 待修复 |
| [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324)（已关闭） | 定时任务执行成功后部分推送消息丢失（3 条任务仅收到 2 条通知） | 已关闭（需确认修复方式） |
| [#7302](https://github.com/agentscope-ai/QwenPaw/issues/7302) | 关闭工具/思考过程显示后，钉钉渠道仍发送空消息并触发未读提醒 | 待修复 |
| [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) | 文件保护未生效，可读取 /etc/passwd（2.1.0） | 待修复 |

### 🟡 轻微（性能/体验优化）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7360](https://github.com/agentscope-ai/QwenPaw/issues/7360) | 桌面端启动耗时约 247.53 秒（V2.2.0.b1） | 待排查 |
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | 启动时强制安装 Playwright Chromium 阻塞约 60 秒，无跳过选项 | 已持续 14 天，待处理 |

### ♻️ 回归信号

- #7364（零停机重载）与 #7363（事件循环阻塞）均为近期新引入问题，疑似与 2.2.0-beta.1 中的重载调度改动相关，建议维护者优先确认回归范围。

---

## 6. 功能请求与路线图信号

| 用户诉求 | 对应 Issue | 已有 PR/进展 | 纳入下版本可能性 |
|---|---|---|---|
| 聊天界面滚动锁定（streaming 时自动跟随） | [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) | [PR #7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) 已提交 | 高 |
| 工具调用卡片显示开关 | 社区多项提及 | [PR #7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) 已提交 | 高 |
| 长对话历史分页/虚拟滚动 | #7049 关闭后社区持续反馈 | [PR #7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) 已提交 | 高 |
| React 循环中无用工具返回的裁剪/简化 | [#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316) | [PR #7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) 方案可对口（限制超大单行工具结果） | 中 |
| Prompt cache 命中率观测与优化（81.68% vs OpenCode 96%） | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | 暂无对应 PR | 中（good first issue） |
| 移动端浏览器输入框换行支持（安卓 Chrome） | [#7355](https://github.com/agentscope-ai/QwenPaw/issues/7355)（已关闭） | 暂无 | 低（已按 Close-and-review-later 处理） |

---

## 7. 用户反馈摘要

**核心痛点：**
- **启动耗时集中爆发**：多个用户报告启动时间异常（#7360 约 4 分钟、#7023 阻塞 60 秒安装 Playwright），严重影响桌面端使用意愿
- **消息渠道稳定性**：钉钉渠道出现空消息推送并触发未读提醒（#7302），对政企用户构成干扰
- **重载机制不可靠**：零停机重载后 memory_search 静默失效（#7364），用户对 2.2.0 beta 稳定性信心受影响

**积极信号：**
- 社区对多租户 Hub 讨论热烈，团队向协作场景演进的路线获得认可（#7318）
- 用户主动提交 Prompt cache hit rate 对比数据（81.68% vs 96%），表明开发者用户群体活跃且具备工程能力

**典型使用场景：**
- 定时任务自动化（agent 打包备份到本地目录发推送通知，见 #7324）
- QQ/钉钉多渠道接入，期望跨端记忆一致性（#7297）

---

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 备注 |
|---|---|---|---|
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) Desktop 启动时 Playwright Chromium 安装阻塞 60 秒 | Bug | 2026-08-14 | 已积压 14 天，影响每次启动体验，建议评估"首次安装 + 后续跳过"策略 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) ReMeLightMemoryCard reranker UI 配置面板 | PR | 2026-07-23 | 已待审查超 36 天，功能已完整（含 UI + 后端配套），建议维护者尽快安排 review |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) OpenSSL 3.0.x TLS 栈触发运营商 DPI 重置 | Bug | 2026-08-25 | 影响企业网络环境下的部署，建议评估升级 Python/OpenSSL 运行时或提供 TLS 指纹混淆选项 |

---

*本日报数据截至 2026-08-27 24:00 UTC，基于 CoPaw (github.com/agentscope-ai/CoPaw) GitHub 仓库公开数据生成。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-08-28

## 1. 今日速览

ZeroClaw 项目保持高活跃度：过去 24 小时新增/更新 Issue 32 条（25 活跃，7 关闭），PR 50 条（47 待合并，3 已合并/关闭）。当前主线聚焦于三份大型 RFC 的推进——会话持久化契约（#9600 跟踪器）、统一附件架构（#9488）以及运行时会话与传输适配层（#9487），体现架构层重构正在密集进行。安全与沙箱策略（#6996、#10381）、WASM 插件运行时（#10076、#7822）亦是重点。同时，Telegram/WhatsApp 等渠道功能增强（#9997、#8561）持续提交。无新版本发布，但主分支已有 47 个待合并 PR，合并积压需关注。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日关闭 PR 3 条（数据层面），以下为值得关注的已合并/关闭项与接近就绪的高价值 PR：

| PR | 标题 | 状态与意义 |
|---|---|---|
| [#9591](https://github.com/zeroclaw-labs/zeroclaw/issues/9591) | fix(channels): clear delivery registry when reload removes all channels | S1 级 Bug 已关闭，修复了渠道全部移除时交付注册表残留问题 |
| [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) | ZeroCode Health 状态值在法语/西语下对齐错位 | 已关闭，修复多语言 TUI 面板文本对齐 |
| [#9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651) | 迁移后的裸 vision_model_provider 无法解析 keyed 凭据 | 已关闭，修复视觉模型提供商凭据解析 |

**高价值待合并 PR（距可合并状态最近的几项）：**

- **[#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)** feat(sessions): 持久化会话提示附件（2026-08-27 创建，与 RFC #9998 对应，SQLite 支撑、最多 4 个附件/会话，含配套 tool）
- **[#10418](https://github.com/zeroclaw-labs/zeroclaw/pull/10418)** fix(channels/telegram): 修复回复线程混入主聊天历史的语义冲突（区分 forum topic 与普通 reply-thread）
- **[#10417](https://github.com/zeroclaw-labs/zeroclaw/pull/10417)** fix(runtime): 通过生产 live-delivery 通道实时下发终端 fallback
- **[#10415](https://github.com/zeroclaw-labs/zeroclaw/pull/10415)** fix(providers): 将 reliable 流式错误归因到实际服务的模型

> 注：今日数据中未展示显式标为 "merged" 的 PR 条目，上述关闭项以 Issue 关闭记录为准。

## 4. 社区热点

| 议题 | 评论数 | 热度原因 |
|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: 运行时拥有的会话与传输适配层（[RFC] 4 次修订，涉及 #9487/#9488/#9600 协同） | 26 | 牵动会话持久化、附件、与传输层的架构归属，影响面最大 |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) RFC: Gemini Live 实时语音通道（v2 改 broker 契约） | 21 | 语音实时通道是高频需求，v2 重写后讨论持续 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Web 聊天与渠道统一附件架构（第 9 版） | 20 | 附件能力跨 web/channel 统一，涉及面广 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: 解耦记忆生命周期策略与存储后端 | 20 | 记忆层抽象边界，叠加 #9600 会话持久化跟踪器讨论 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [Tracker]: 维护者 RFC 决策队列 | 14 | 社区对高优先级 RFC 审批节奏的关注集中于此 |

**热点诉求分析：** 讨论集中于**架构层 RFC**（会话所有权、附件架构、记忆生命周期、实时语音），当前社区正处于 v0.9.0 破坏性变更窗口（跟踪器 #7432），大量设计文档处于 final review 阶段，维护者决策速度是当前核心瓶颈（#8692 跟踪器即为此设立）。

## 5. Bug 与稳定性

**S1 — 工作流阻断（已有修复或讨论中）：**

- [#9591](https://github.com/zeroclaw-labs/zeroclaw/issues/9591) channel reload 移除所有渠道时交付注册表未清理 → **已关闭修复**（分发 `CRON_CHANNEL_REGISTRY` 条件缺失）
- [#9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651) 迁移后裸 `vision_model_provider` 无法解析 keyed 凭证 → **已关闭**（如 openrouter 等需 API key 的提供商）

**S3 — 轻微问题（已关闭）：**

- [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) ZeroCode Health 状态值法语/西语对齐错位 → 已关闭

**安全相关（高优先级 PR 待审）：**

- [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) fix(security): 在应用工作区 cwd 之前解析 host launcher → 修复 workspace cwd 篡改导致执行非预期可执行文件的问题（Bubblewrap/Docker/Firejail 均受影响）
- [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) fix(delegate): 有界 delegate 文件系统工具现在尊重目标自身工作区（#9872）
- [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) fix(config): 风险分类器中 git 子命令解析在全局选项之后（`git -C <path> <verb>` 场景误判）

## 6. 功能请求与路线图信号

**最可能进入下一版本的功能（已有对应 PR）：**

| 功能需求 | RFC/Issue | 对应 PR | 信号强度 |
|---|---|---|---|
| 会话级持久化提示附件（session-scoped prompt attachments） | [#9998](https://github.com/zeroclaw-labs/zeroclaw/issues/9998)（accepted） | [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)（XL，8/27 提交） | 高 |
| 实时语音通道（VoiceHost WebSocket bridge，FunASR/SenseVoice） | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) 关联 | [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | 高 |
| 运行时会话所有权与传输适配层 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 待实施 | 高（架构级） |
| Telegram 安全模型选择器（provider-grouped 分页键盘） | — | [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)（XL，blocked） | 中 |
| 上下文压缩锚定到模型窗口比例 | — | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)（XL，含 ACP） | 中 |
| Telegram multi_message 流式模式 | — | [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)（XL） | 中 |

**路线图参考：** v0.9.0 跟踪器 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（auth、安全加固、网关边界、A2A/多智能体边界、工具策略、breaking-change 队列）为当前版本路线图的公开协调面。

## 7. 用户反馈摘要

从今日活跃讨论中提炼的社区声音：

- **架构决策关注度高：** 社区对会话状态所有权（#9600 四个并行工作流触碰同一契约）表示忧虑，明确要求契约有指定 owner（tracker 即此而生）。
- **安全策略粒度诉求：** 文件系统/网络沙箱策略在应用层与 OS 层（Bubblewrap/Landlock/Seatbelt）长期漂移（#6996），用户急需统一且可细分的策略面。
- **桌面端真实需求：** Computer-use 桌面屏幕交互与输入控制 RFC（#6909）有真实使用场景诉求，maintainer 已接管推进并在安全边界上加了明确约束。
- **AI 辅助 PR 评审受期待：** 社区对 AI-assisted PR pre-review/re-review（#9330）有正面反馈，要求明确"AI 只做建议、人做决策"的边界。
- **渠道配置摩擦：** Telegram/Discord/Matrix/WhatsApp Web 开箱即用体验不足（#10138 反馈多渠道默认未配置），Docker 镜像中渠道支持完整性需要改善。

## 8. 待处理积压

以下为横跨时间较长、需要维护者关注的未决项目：

| 项目 | 类型 | 等待时长 | 建议 |
|---|---|---|---|
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: 桌面 Computer-use 支持 | RFC（maintainer 已接管，Rev 2） | 自 2026-05-25，近 3 个月 | 已进入维护者接管阶段，需确认合并路径 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: 细粒度沙箱策略（FS+网络） | RFC（in-progress，需维护者评审） | 自 2026-05-28，3 个月 | 安全基础能力，建议纳入 v0.9.0 决策队列 |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) RFC: WASM 插件生命周期观察者订阅 | RFC（需维护者评审） | 自 2026-06-17，2 个月+ | Rev 2 已明确用现有 `PluginCapability::Observer`，评审门槛降低 |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) 上下文压缩锚定模型窗口比例 | PR（XL，需作者响应） | 自 2026-07-29，1 个月 | 功能价值明确（解决历史剪裁误判），需作者更新后评审 |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) 历史剪裁事件的 token 核算暴露 | PR（XL，需作者响应） | 自 2026-08-03 | 与 #9535 相关，可合并评审批次处理 |
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) Telegram 安全模型选择器 | PR（XL，blocked，do-not-merge） | 自 2026-08-14 | 涉及 TLS 与渠道安全边界，需 security review |

---

*数据来源：[ZeroClaw GitHub 仓库](https://github.com/zeroclaw-labs/zeroclaw)，统计窗口为 2026-08-27 至 2026-08-28。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*