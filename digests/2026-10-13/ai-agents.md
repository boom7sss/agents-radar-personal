# OpenClaw 生态日报 2026-10-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-13 12:10 UTC

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

# OpenClaw 项目日报 · 2026-10-13

---

## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持高位运转：Issues 更新 500 条（新开/活跃 285、关闭 215），PR 更新 500 条（待合并 294、已合并/关闭 206），并连续发布 2 个 beta 版本（v2026.10.5-beta.2 / beta.3），主题集中在"更新流程的收敛与恢复"。关闭率约为 43%（Issues）与 41%（PR 已合并/关闭），说明维护力量在积极消化积压，但待合并 PR 仍有 294 条，队列压力不减。稳定性议题依旧是主旋律：内存泄漏、SQLite 膨胀/损坏、Gateway 启动与重启卡顿、更新交接失败等多条 P0/P1 长跑问题今日持续活跃。整体判断：**项目活跃度极高、迭代节奏快，但平台层稳定性与更新管线的成熟度仍是当前最大风险面。**

---

## 2. 版本发布

今日发布 2 个 beta 版本，均为更新管线（update pipeline）相关修复，未标注破坏性变更。

### v2026.10.5-beta.3
链接：openclaw/openclaw Release v2026.10.5-beta.3
- **更新后 Gateway 保持运行**：pnpm 12 安装场景下，Gateway 服务与 `openclaw` 启动器保留在持久化安装路径上。
- Windows 更新可接受限定范围的 Scheduled Task 账户及其自有验证驱动。
- macOS 可接受受保护的 Bun 服务配置（release note 在此处被截断，完整细节需查阅仓库原文）。

### v2026.10.5-beta.2
链接：openclaw/openclaw Release v2026.10.5-beta.2
- **更新可完成、可恢复**：`openclaw update` 会收敛滞留的 handoff lease、已完成回执（completed receipts）与遗留的 2026.9.8 恢复记录，不再卡在 `update-recovery-pending`。
- 保留服务堆内存上限与 webhook 监听器。
- 处理 Windows 短路径相关场景（release note 文字被截断）。

**迁移注意事项（基于现有材料）**：两个版本均围绕"更新失败后如何恢复/不再卡死"设计，说明 2026.9.x → 2026.10.x 的升级路径此前存在较多失败模式（见第 5 节 #156112、#170331、#168750 等）。建议升级前确认 Gateway 服务账户类型、Bun/pnpm 安装方式与平台（Windows Scheduled Task、macOS app）匹配，并在升级前保留可回滚的数据库快照。beta 版本的具体破坏性变更在提供的数据中未披露，请以官方 release 说明为准。

---

## 3. 项目进展

今日已合并/关闭的 PR 体现为"清理与收口"型工作，而非新功能落地：

- **#171007 [CLOSED] test(codex): retire fixture validation before deleting databases** — 作者 steipete。修复 Codex mirror/projector fixture 在删除数据库目录时仍保留验证回执与原生文件系统 watcher 的问题（与间歇性 `freezes receipt occ…` 相关）。
- **#170955 [CLOSED] fix(update): keep schema inspection running under progress backpressure** — 作者 steipete。修复 update schema inspection 在进度管道临时写满时失败的问题，是 #168493 元数据清单修复的候选侧姊妹补丁。

同时，一批由 steipete 主导的修复（#171008、#171015、#171011、#171014、#171023、#171025、#170877、#170950、#170685）在今日提交并处于 OPEN 状态，方向集中在：会话创建准备路径简化、更新与 Doctor 状态保留、手动 `/compact` 重放、TUI busy 状态释放、Codex Ultrafast 压缩上限、插件状态快照去同步化。**整体推进方向：以性能与更新/恢复可靠性为主的"内部工程化"阶段，尚未见重大新能力交付。**

---

## 4. 社区热点

讨论最活跃的议题（按评论数排序）：

| 议题 | 状态 | 评论 | 关注点 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏（350MB→15.5GB，反复 OOM） | OPEN, P0 | 39 | 稳定性头号议题 |
| [#159356](https://github.com/openclaw/openclaw/issues/159356) llama.cpp embedding 子进程退出、HTTP 500 | OPEN, P2 | 26 | 嵌入/语义召回可靠性 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 重连后回补漏收消息 | OPEN, P1 | 20 | 消息丢失 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) Gateway 抓取大型外部插件时阻塞数分钟（2026.9.6 回归） | OPEN, P0 | 20 | 事件循环阻塞 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程僵尸堆积 | **CLOSED** | 18 | 运行时退化（已收口） |

**诉求分析**：热点高度集中在"长时间运行下的可靠性"——内存、子进程、嵌入式模型服务、大插件加载都会在数小时到数天尺度上侵蚀 Gateway。用户并非在追求新功能，而是在要求"跑得久、不死、不丢消息"。值得注意 #159356 的更新中指出，将主机 RAM 从约 4GB 提升到 8GB 后语义召回恢复可用，暗示相当一部分"bug"实为资源压力下的表现，文档与资源预检能力可能是低成本改进点。

---

## 5. Bug 与稳定性

按严重程度排列（仅列今日活跃的崩溃/回归类）：

**P0**
- [#91588](https://github.com/openclaw/openclaw/issues/91588) **Gateway 内存泄漏**，RSS 由 350MB 涨至 15.5GB，反复 OOM（创建于 2026-06-09，跨 4 个月）。标签含 `no-new-fix-pr`、`needs-maintainer-review` → **暂无 fix PR**。
- [#160959](https://github.com/openclaw/openclaw/issues/160959) 大型外部/工作区插件导致 **Gateway 事件循环阻塞数分钟**（2026.9.6 回归，源头 #144252）。`source-repro` → **暂无 fix PR**。
- [#156112](https://github.com/openclaw/openclaw/issues/156112) `openclaw update` 在 "global install swap" 确定性失败，而直接 `npm install -g` 同版本成功。`manual-only` → **暂无自动 fix PR**。
- [#155859](https://github.com/openclaw/openclaw/issues/155859) 2026.9.5 Gateway 启动耗时随启用插件数线性增长（discord/codex/weixin 占满 120s 发布预算）。**暂无 fix PR**。
- [#146860](https://github.com/openclaw/openclaw/issues/146860) Windows Scheduled Task `LogonType: InteractiveToken` 下更新交接无法取得进程启动身份，卡在 `activating`。
- [#126821](https://github.com/openclaw/openclaw/issues/126821) 全新建库 15–24h 内 SQLite 再次损坏，5 天 5 次，含"瘫痪型 Gateway"（拒绝服务但不退出）。
- [#166894](https://github.com/openclaw/openclaw/issues/166894) Windows 多 agent 安装下 Gateway 重启偶发挂起 30 分钟至 2 小时（2026.9.8）。
- [#112475](https://github.com/openclaw/openclaw/issues/112475) 设备配对移除后恢复失败（Gateway 2026.7.1 / CLI 2026.6.9）。
- [#170724](https://github.com/openclaw/openclaw/issues/170724) **CLOSED** — macOS 2026.10.2 更新后 Gateway 更新不完整，Retry setup 无效果（当日创建当日关闭）。
- [#168750](https://github.com/openclaw/openclaw/issues/168750) **CLOSED** — 2026.9.5→2026.10.1 更新激活阶段 Doctor 约 24.5 分钟后失败，进入 `state-migrated-no-rollback`。

**P1**
- [#118839](https://github.com/openclaw/openclaw/issues/118839) `restart recovery claim changed before agent adoption` 回归（WebChat → Telegram 持久会话）。
- [#154891](https://github.com/openclaw/openclaw/issues/154891) 已回滚的配置热重载仍使无关插件报 `PluginInstanceUnavailableError`，直到完全重启。
- [#126950](https://github.com/openclaw/openclaw/issues/126950) Telegram 不透明回调查询（`tgcb1:`）对非插件调用方静默丢弃。
- [#163029](https://github.com/openclaw/openclaw/issues/163029) 2026.9.7 仍在回合中间重载外部插件（40–70s 主线程停顿），尽管已有 #160658。
- [#132303](https://github.com/openclaw/openclaw/issues/132303) `agents.list[].tools.deny` 对 `claude-cli` 后端不生效，原生工具始终可用（**安全相关**）。

**已收口**：#97616（子进程僵尸）、#152839（openat2 ENOSYS 处理）、#158936（macOS 就绪看门狗误杀慢启动 Gateway）、#47910（按失败类别做 provider 隔离）。

**风险判断**：#91588 与 #126821 是最需要维护者资源的两条——前者长期无 fix PR 且影响所有长跑部署，后者指向 SQLite 数据完整性，二者叠加会让"长稳运行"这一核心承诺持续受损。

---

## 6. 功能请求与路线图信号

- **按失败类别做 provider 回退**（[#47910](https://github.com/openclaw/openclaw/issues/47910)，已 CLOSED）：隔离认证损坏的 provider，避免对所有失败统一走回退链。已关闭，可能已被其他机制吸收或已实现。
- **WhatsApp 重连后回补漏收消息**（[#50093](https://github.com/openclaw/openclaw/issues/50093)，P1，`needs-product-decision`）：属消息完整性能力，需产品决策。
- **支持 `mcp.servers[].env` 使用 SecretRef 对象**（[#76493](https://github.com/openclaw/openclaw/issues/76493)，👍4，`needs-security-review`）：当前 schema 仅接受 `string|number|boolean`，阻碍密钥间接引用最佳实践。👍 数较高，**有较大概率被纳入后续版本**。
- **Vault/1Password 状态显示所选 provider 别名**（[#133238](https://github.com/openclaw/openclaw/pull/133238)，OPEN，`proof: sufficient`）：与 #76493 同属密钥管理体验线，已有成熟补丁待审。
- **`openclaw models auth list` 展示活跃订阅阻断状态**（[#133087](https://github.com/openclaw/openclaw/pull/133087)，OPEN，`proof: sufficient`）：可观察性改进，补丁就绪。
- **Kimi for Coding 思考档位支持 low/high/max**（[#158162](https://github.com/openclaw/openclaw/pull/158162)，OPEN）：当前硬编码 off/on，K2.8 Preview 支持三档。

**信号**：密钥管理（Vault/1Password/SecretRef）与模型认证可观察性是两条清晰的需求线，且都有 `proof: sufficient` 的现成 PR（#133238、#133087），**具备进入下一版本的现实条件**，主要瓶颈是 maintainer 审核带宽而非实现。

---

## 7. 用户反馈摘要

- **部署环境高度多样**：Docker Compose on Synology NAS（#152839）、WSL2（#126821）、Kubernetes（#99659，OOM 后被 k8s 杀死）、Windows 11 + Ryzen 7 5700G 多 Gateway 安装（#166894）、macOS app（#170724、#158936）。跨平台更新与服务的差异性是失败主因之一。
- **资源敏感性**：#159356 中用户明确报告"主机 RAM 从约 4GB 增至 8GB 后语义召回恢复可用"，并称内存压力是"最受支持的解释"——说明低配环境下多类症状会集中爆发。
- **更新体验是最集中的不满来源**：多位用户报告 `openclaw update` 确定性失败（#156112）、卡在 activating（#146860）、Doctor 长跑 24 分钟后失败且无法回滚（#168750）、macOS 更新不完整且 Retry 无效（#170724）。今日发布的两个 beta 正是对这一痛点的直接回应。
- **安全诉求**：#132303（`tools.deny` 对 claude-cli 无效）与 #76493（SecretRef 被 schema 拒绝）显示用户在权限收敛与密钥管理上遇到了"配置写了但不生效/不合法"的落差。
- **正向信号**：#97616、#152839、#158936 等长期问题在近期被关闭，说明维护者在持续清理存量。

---

## 8. 待处理积压

**长期未收口的高优先级 Issue**：
- [#91588](https://github.com/openclaw/openclaw/issues/91588) — 创建于 2026-06-09，**已跨 4 个月**，P0，39 条评论，仍是 `no-new-fix-pr` + `needs-maintainer-review`。建议明确责任人并给出阶段性缓解方案（如内存上限/定期重启的临时开关）。
- [#126821](https://github.com/openclaw/openclaw/issues/126821) — 创建于 2026-08-20，P0，SQLite 反复损坏，涉及数据完整性，风险等级高于其当前获得的关注度。
- [#114612](https://github.com/openclaw/openclaw/issues/114612) — 创建于 2026-07-27，P1，`memory_index_chunks` / `memory_embedding_cache` 无保留策略、将持续填满磁盘，`needs-product-decision`，需产品侧拍板保留窗口。
- [#76493](https://github.com/openclaw/openclaw/issues/76493) — 创建于 2026-05-03，👍4，`needs-security-review`，是积压最久的高赞需求之一。
- [#48709](https://github.com/openclaw/openclaw/issues/48709) — 创建于 2026-03-17，已带 `stale` 标签，Gemini 2.5 Pro 的 textSignature 膨胀 + think 标签 + 混合文本/工具导致会话失败，长期未见推进。

**待审核的有价值 PR**：
- [#133238](https://github.com/openclaw/openclaw/pull/133238)、[#133087](https://github.com/openclaw/openclaw/pull/133087) — 均创建于 2026-08-30，`proof: sufficient`，已排队约 6 周。
- [#158162](https://github.com/openclaw/openclaw/pull/158162) — 创建于 2026-09-25，带 `merge-risk: compatibility` 与 `merge-risk: auth-provider` 标记，需谨慎评审。
- [#167827](https://github.com/openclaw/openclaw/pull/167827) — Windows Task Scheduler 字段误报 `serviceDefinition.drift`，带 `merge-risk: compatibility`，与今日 Windows 更新主题直接相关。

**提醒**：当前 294 条待合并 PR 与 285 条新开/活跃 Issue 形成的审阅队列，已明显超过常驻维护者的处理带宽。今日大量由单一维护者（steipete）提交的修复簇（#171008/#171015/#171011/#171014/#171023/#171025/#170877/#170950/#170685）本身就占用评审资源，建议对这批补丁进行批量评审，并同时提升 #133238、#133087 这类"补丁就绪、只差审核"的变更的优先级。

---

*本报告仅基于所提供的 OpenClaw GitHub 数据生成；部分 release note 文本在原始数据中被截断，相关细节请以仓库原文为准。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**统计窗口：2026-10-13（过去 24 小时）**

---

## 1. 生态全景

生态整体处于**高活跃、快迭代但稳定性债务累积**的阶段：头部项目（OpenClaw、CoPaw、ZeroClaw、Hermes Agent）单日 PR/Issue 更新量达 40–500 条，而多个衍生项目（NullClaw、TinyClaw、ZeptoClaw）当日零活动，呈现明显的幂律分布。今日全生态最集中的主题是**长稳运行可靠性**——内存泄漏、SQLite 损坏、会话/检查点恢复、跨平台更新交接失败在至少 5 个项目中同时出现。同时，一个横跨全部项目的**社区化第三方生态**正在形成：cairn-agent 在 NanoBot / PicoClaw / IronClaw 三处同步提出 Plazmi（plazmi.gg）MCP 示例，TheSolai 在 NanoBot 与 NanoClaw 同时提交 Sol AI 收录 PR，说明贡献者正在跨项目复用同一套扩展范式（MCP + 声明式扩展面）。另一条清晰信号是**密钥/凭据安全**（SecretRef、导出加密、Vault/1Password）与**成本可观测性**（token 账本）成为多个项目的共性短板。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开·活跃/关闭） | PR 更新（待合并/已合并·关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（285/215） | 500（294/206） | 2 beta（v2026.10.5-beta.2/3） | 极高活跃，但 P0 长跑问题（内存泄漏 #91588、SQLite 损坏 #126821）无 fix PR，更新管线是最大风险面 |
| **CoPaw** | 21（16/5） | 43（23/20） | 无 | 实质推进日（Console 基础、Hub 插件化、SQLite 加固），但静默失败类 Bug 密集新增 |
| **ZeroClaw** | 40（36/4） | 50（47/3） | 无 | 高位提交但合并吞吐低，成本账本/时间戳保真集群性 Bug，决策队列 #8692 成瓶颈 |
| **Hermes Agent** | 50（46/4） | 50（41/9） | 无 | 活跃度高，Windows 平台兼容债务集中且无 fix PR，`needs-decision` 标签堆积 |
| **NanoBot** | 2（2/0） | 24（17/7） | 无 | 高活跃维护期，但恢复类 PR 4 条并行互带 `conflict`，合并带宽受阻 |
| **LobsterAI** | 2（2/0） | 17（8/9） | 无 | 功能与债务同步消化（Expert Plaza 落地），但新增 P0 级安全 Issue #2851 无响应 |
| **PicoClaw** | 4（3/1） | 7（1/6） | 无 | 中等偏上，集中清理 7 个月存量 PR，新增项响应偏慢（#3394、#3381 带 stale） |
| **NanoClaw** | 0 | 4（3/1） | 无 | 平稳，无用户侧故障上报，2 条 bug fix PR 待合并 |
| **Moltis** | 0 | 2（2/0） | 无 | 低活跃持续开发，2 条编排语义 PR 无评论无合并，落地量 0 |
| **IronClaw** | 2（2/0） | 1（1/0） | 无 | 低位平稳，唯一 PR 为 dependabot，无实质推进 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 当日无活动 |

**结构性观察**：OpenClaw 的单日更新量约为第二名 CoPaw 的 10 倍以上，但其 294 条待合并 PR 与 285 条活跃 Issue 已明显超过常驻维护者带宽；ZeroClaw 的 47/50 待合并比例与 Hermes 的 41/50 同样指向**评审瓶颈而非开发瓶颈**——这是当前生态最普遍的组织性问题。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：OpenClaw 是全生态唯一的"平台级"参照物——单日 PR/Issue 更新量各 500 条，为第二梯队（CoPaw 43、ZeroClaw 50、Hermes 50）的一个数量级以上。多个项目明确以 OpenClaw 为上游或参照：NanoClaw 的 OneCLI 网关固定、NanoBot 的 Sol AI 合作伙伴条目（描述为"基于 OpenClaw 的个人 AI 智能体博客"）、LobsterAI 的 `fix(openclaw)` 修复首条消息 `AGENTS.md` 重复注入，均说明 OpenClaw 已成为该生态的**事实标准接口层与集成目标**。

**优势**：
- 唯一同时具备"更新管线治理 + 插件系统 + 密钥管理 + 多通道"完整栈的项目；
- 拥有真实长跑部署样本（Docker/Synology、WSL2、Kubernetes、Windows 多 Gateway、macOS app），问题暴露面最广；
- 已进入"内部工程化"阶段——当日合并/关闭 PR 以清理收口为主，而非功能扩张。

**技术路线差异**：OpenClaw 走**重平台 + 重更新管线**路线，今日两个 beta 全部围绕 `openclaw update` 的收敛与恢复（handoff lease 收敛、`update-recovery-pending` 卡死、Windows Scheduled Task 账户、macOS Bun 服务配置），这在其他项目中无对应物——其他项目的更新问题多为单点（NanoBot 的 #6168 应用内可恢复更新、Hermes 的 #137646 拒绝 stable 频道），尚未形成独立管线层。

**定位判断**：OpenClaw 的护城河不在功能广度，而在**长期运行的工程成熟度与跨平台部署足迹**；但其最大风险也在于此——#91588 跨 4 个月无 fix PR、#126821 指向 SQLite 数据完整性，二者叠加会直接侵蚀"长稳运行"这一核心承诺，进而动摇其作为生态参照物的可信度。

---

## 4. 共同关注的技术方向

### 4.1 会话/检查点恢复与数据完整性（涉及 NanoBot、ZeroClaw、Hermes、CoPaw、OpenClaw）
- **NanoBot**：4 条并行恢复类 PR（#5943 SQLite 状态所有权、#6082 运行时检查点保留已完成迭代、#5946 与 #5748 批次边界持久化）指向同一真实场景——网关崩溃或多工具调用中途退出后已完成工作丢失。
- **ZeroClaw**：#11420 SQLite 会话后端每轮重写整段 transcript，逐消息时间戳丢失。
- **Hermes**：#137658 修复压缩边界删除被合并的用户消息（P1，`sweeper:risk-session-state`）。
- **CoPaw**：#8202 跨设备消息在整轮结束前不可见（已有 PR #8203）；#6459 加固 SQLite 写入锁与回滚。
- **OpenClaw**：#126821 全新建库 15–24h 内 SQLite 再次损坏，5 天 5 次。

**共性诉求**：持久化权威源（SQLite）的**事务正确性**与**崩溃后证据保留**，是当前最多项目同时投入的方向。

### 4.2 更新/安装管线可靠性（涉及 OpenClaw、NanoBot、Hermes、NanoClaw）
- **OpenClaw**：#156112 `openclaw update` 在 global install swap 确定性失败；#146860 Windows 更新卡 activating；#168750 Doctor 长跑 24.5 分钟后失败无法回滚——今日两个 beta 直接回应。
- **Hermes**：#137090 共享出口下版本解析撞 GitHub rate limit；#137646 `hermes update` 拒绝 stable 频道。
- **NanoBot**：#6165 默认 Docker 镜像无法运行，`nanobot-api` 崩溃循环（已有 fix PR #6171）。
- **NanoClaw**：#4082 OneCLI 1.43+ 返回 410 Gone，安装停留在 1.42.0 stopgap。

### 4.3 密钥管理与权限收敛（涉及 OpenClaw、LobsterAI、Hermes）
- **OpenClaw**：#76493 `mcp.servers[].env` 仅接受 `string|number|boolean`，阻碍 SecretRef 引用（👍4，`needs-security-review`）；#133238 Vault/1Password provider 别名（`proof: sufficient` 现成 PR）；#132303 `tools.deny` 对 `claude-cli` 后端不生效。
- **LobsterAI**：#2851 Provider API Key 导出使用公开硬编码口令派生密钥（PBKDF2 100k + AES-GCM），任何持导出文件者可解密——当日新开、0 评论、无 fix PR。
- **Hermes**：#136634 将 `approvals.deny` 扩展到 `sh`/`bash -c` 与 `env -S` 载荷（安全相关，建议提级）。

**共性诉求**：从"能配置"到"配置生效且不可绕过"的落差，是用户权限模型的实际痛点。

### 4.4 成本/度量可观测性（涉及 ZeroClaw、Hermes、OpenClaw）
- **ZeroClaw**：#11204 OpenRouter 约 2.1M token 后成本仍显示 $0.000000；#11613 丢弃 `total_tokens` 导致推理 token 成本低估；#10950 `cost.warn_at_percent` 被忽略——三条独立 Bug 指向同一子系统，PR #11670 一次性覆盖前两条。
- **Hermes**：#137791 辅助请求从 Anthropic OAuth 静默回退到付费 API 前警告；#137771 后台日志截断 200K 字符仍声称完整。
- **OpenClaw**：#133087 `models auth list` 展示活跃订阅阻断状态（`proof: sufficient`）。

### 4.5 平台兼容与开箱可用（涉及 Hermes、OpenClaw、CoPaw、PicoClaw、NanoBot）
- **Hermes**：Windows 平台问题占突出比例——#122772 GBK 区域 UnicodeDecodeError（约 32 处 `text=True` 未指定 encoding）、#88945 闪烁控制台窗口、#137198/#137194 测试运行器误分类，均无 fix PR。
- **CoPaw**：#8177 Console basename 硬编码 `/console` 阻碍反代子路径；#8206 Windows 项目删除必然失败（WinError 5）。
- **PicoClaw**：#1397 Termux 下 `x509.SystemCertPool()` 返回空池。
- **NanoBot**：#6165 用户明确质疑 Docker 分发价值。

### 4.6 MCP / 扩展生态标准化（涉及 NanoBot、PicoClaw、IronClaw、OpenClaw）
- **cairn-agent 在三个项目同步提出 Plazmi 生态示例**：NanoBot #6182（受限 MCP 工具）、PicoClaw #3427（低依赖 MCP/CLI 持久会话）、IronClaw #8136（hosted-MCP + 声明式 auth + egress）。
- **IronClaw #8136** 明确表达设计取向：复用既有的"hosted-MCP 元数据 + API-key 鉴权 + egress"声明式扩展面，**避免向核心引入厂商逻辑**。
- 多个项目将 MCP 作为统一扩展 seam，是本窗口内最清晰的架构趋同信号。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | CoPaw | ZeroClaw | Hermes Agent | NanoBot | PicoClaw | LobsterAI |
|---|---|---|---|---|---|---|---|
| **功能侧重** | 平台栈完整（插件+更新+密钥+多通道） | Console UI/UX + Skill Hub 插件化 | 成本账本 + 持久记忆 + A2A 协议 | Desktop/gateway + MCP 连接 | 会话状态 + WebUI 组件化 | 通道适配（Telegram/飞书/OneBot） | Expert Plaza + 桌面交互 |
| **目标用户** | 通用长跑部署（NAS/WSL2/K8s/Windows） | 自托管/企业内网 | 多 provider 混合部署运营方 | 单机 Windows + gateway + desktop | 开发者/WebUI 用户 | 国内 IM 平台（QQ/飞书）用户 | 桌面端 Agent 编排用户 |
| **技术架构关键差异** | 重更新管线 + 持久化安装路径 | 插件系统作为统一扩展面（Hub 已插件化） | Rust crate 模块化（`zeroclaw-a2a` 抽取中） | MCP 连接管理 + 多 surface 会话 | SQLite 状态所有权重构中（#5943） | Go + 多通道 provider 抽象 | Electron renderer/main/cowork 分层 |
| **版本锚点** | v2026.10.5-beta | 无 | `release:v0.8.6` / `v0.9.0` 追踪器 | 无 | 无 | 无 | 无 |

**关键差异**：OpenClaw 与 CoPaw 都选择**插件系统作为统一扩展面**，但 OpenClaw 更侧重更新/服务生命周期，CoPaw 更侧重 UI 基础与 Skill 市场；ZeroClaw 是唯一采用 Rust crate 级模块化（A2A 协议独立成 crate）的项目，架构治理思路最接近传统系统工程；PicoClaw 与 LobsterAI 则走**平台适配深度**路线（前者绑定国内 IM、后者绑定桌面与专家编排），不追求通用栈完整度。

---

## 6. 社区热度与成熟度

### 第一层：高速迭代 + 稳定性债务同步累积
- **OpenClaw**、**CoPaw**、**ZeroClaw**、**Hermes Agent**
- 特征：单日更新 40–500 条、有实质合并、同时新增多个 P0/P1 未修复项。属于"边跑边修"，但维护者带宽已成为硬约束（OpenClaw 294 待合并、ZeroClaw 47/50、Hermes 41/50、CoPaw 23 待合并）。

### 第二层：质量巩固 / 存量清理
- **NanoBot**、**PicoClaw**、**LobsterAI**、**NanoClaw**
- 特征：合并/关闭量 ≥ 新开量或结构清理为主。PicoClaw 集中关闭 3 条积压约 7 个月的旧 PR（#1500/#1397/#1509）；LobsterAI 关闭 2 条积压 1–2 个月的依赖升级；NanoBot 关闭架构清理类 #6166。此层项目的问题多为**合并路径不畅**（NanoBot 4 条 `conflict` 恢复 PR 并行）而非开发停滞。

### 第三层：低活跃 / 方向待定
- **Moltis**（2 PR 无评论无合并）、**IronClaw**（唯一 PR 为 dependabot）、**NullClaw / TinyClaw / ZeptoClaw**（零活动）
- 特征：无合并动作、无社区互动，尚处于早期或休眠状态。

**成熟度判断**：整个生态尚无项目进入"冻结期"；第一层与第二层的分界不在代码质量，而在**评审吞吐能力**。值得警惕的是，多个项目的最高共识需求长期挂在决策环节——Hermes #17565（可配置 temperature，👍17，悬挂约 5.5 个月，`needs-decision`）、ZeroClaw #8692（维护者决策队列，15 条评论仍 OPEN）、OpenClaw #91588（P0 内存泄漏，跨 4 个月）——说明**瓶颈已从"修不动"转向"定不下来"**。

---

## 7. 值得关注的趋势信号

**信号 1：持久化权威源正从 JSONL 向 SQLite 事务迁移，但事务正确性尚未跟上。**
NanoBot #5943 明确以 SQLite 事务取代 JSONL 作为权威存储；ZeroClaw #11420、OpenClaw #126821、CoPaw #6459 均在处理 SQLite 层问题。**对开发者的参考价值**：若采用 SQLite 作为会话状态源，需在设计阶段就明确事务边界、逐行时间戳保真（避免整段重写）与崩溃后回滚语义——这三类问题在四个项目中独立出现，属可预见的架构陷阱。

**信号 2：MCP 正成为跨项目的统一扩展 seam，但约束机制（allowlist / grants / deny）正在分化。**
Moltis #1302（preset `spawn.allow` 白名单）、OpenClaw #132303（`tools.deny` 对后端不生效）、Hermes #136634（deny 规则扩展到 shell 载荷）、IronClaw #8136（声明式 auth + egress）、PicoClaw/NanoBot 的 `enabledTools` 受限 MCP 工具——**权限约束的粒度从"工具级"迈向"载荷级与实例级"**。对开发者：扩展面无约束是默认状态，若面向企业部署需自行补齐实例级 grants。

**信号 3：跨项目贡献者复用同一套扩展范式，社区生态开始出现"共享模板"。**
cairn-agent 在三个项目同步提出 Plazmi 示例、TheSolai 在两个项目提交同一合作伙伴条目、Firecrawl 在 CoPaw 主动认领 provider 开发——说明**贡献者正在以 MCP/声明式扩展为标准接口批量落地**。对开发者的参考价值：扩展点设计的一致性（如统一走 MCP + 声明式配置）会直接决定能否吸引跨生态贡献者。

**信号 4：成本与用量可信度成为独立的质量维度。**
ZeroClaw 三条独立 Bug 指向同一成本账本（#11204/#11613/#10950）、Hermes #137791 防止 OAuth 静默回退到付费 API、#137771 要求日志明确标注截断——**用户已从"能否运行"进阶到"账目是否可审计"**。对开发者：provider 成本字段（`provider_cost_usd`、`reasoning_tokens`、`total_tokens`）的完整摄取不应留到后期补丁。

**信号 5：非英语 Windows / 受限网络环境是系统性短板，而非边缘场景。**
Hermes 的 Windows 问题占比突出且全部无 fix PR（GBK 编码、控制台窗口、测试误分类）；CoPaw #8177 反代子路径、ZeroClaw #11659 本地 OpenAI 兼容服务器 snake_case 报错、Hermes #137090 共享出口 rate limit——**"主流用户路径"的定义正在从英语单机扩展到中文 Windows + 企业 NAT/代理 + 反代子路径**。对开发者：`encoding=` 显式指定、`CREATE_NO_WINDOW`、basename 可配置、凭据梯度支持属低成本高回报的预检项。

**信号 6（风险提示）：评测生态开始主动接触项目。**
LobsterAI #2801 收到第三方（Nautilus）harness 榜单的免费 L1 收录邀约，强调"判据 sha 预注册、判分独立于被测方、结果好坏都可引用，不收费"。**这是一个中立的外部质量验证渠道正在成型的信号**，对开发者的参考价值在于：可复现判读可能成为项目可信度的新维度，提前准备复现环境具备战略意义。

---

*本报告严格基于所提供的各项目 2026-10-13 社区动态摘要生成，未引入外部信息；部分 release note 文本在原始数据中被截断，相关细节以各仓库原文为准。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-13

## 1. 今日速览

项目今日处于**高活跃维护期**：过去 24 小时无新版本发布，但 PR 更新达 24 条（待合并 17、已合并/关闭 7），Issues 更新 2 条（均为新开/活跃，无关闭）。开发重心明显集中在**会话状态持久化与运行时检查点恢复**、**Docker/首次安装体验修复**以及 **WebUI 组件化重构**三条主线上。值得注意的是，多条核心 PR 长期处于 OPEN 且带 `conflict` 标记，合并阻力较大，积压风险上升。用户侧反馈以安装可用性问题最为突出。

无新版本发布。

## 3. 项目进展

今日共合并/关闭 7 条 PR，以下为已识别的重要条目：

- **#6166 [CLOSED] refactor: isolate runtime contracts and enforce import boundaries**（chengyongru，创建 10-12，更新 10-13）
  隔离运行时契约并强制导入边界，解决配置通过包初始化器与运行时 Pydantic 重建可达具体工具、会话恢复与核心轮次投递直连 WebUI/通道适配器、客户端组件存在两个初始化循环等问题。属架构清理类工作，降低模块间耦合。
  链接: HKUDS/nanobot PR #6166

- **#6181 [CLOSED] fix(documents): preserve empty PPTX table columns**（maxazure，创建 10-13，更新 10-13）
  修复 PPTX 表格提取时空单元格被丢弃导致列错位的问题（如 `Alice / (空) / 100` 被压成 `Alice\t100`）。当天提出当天关闭，修复效率高。
  链接: HKUDS/nanobot PR #6181

- **#6180 [CLOSED] Add Sol AI to Open Source Partners**（TheSolai，创建 10-12，更新 10-13）
  文档类变更，将 Sol AI（一个基于 OpenClaw 的个人 AI 智能体博客）加入开源合作伙伴章节。
  链接: HKUDS/nanobot PR #6180

**整体推进度评估**：今日合并/关闭以架构清理、文档和单点缺陷修复为主，未出现重量级功能落地。核心的会话状态重构（#5943）与更新流程整合（#6168）仍在待合并队列中，项目向前推进幅度为**中等偏稳健**。

## 4. 社区热点

今日评论/讨论最集中的条目相对有限，数据摘要中多条 PR 的评论数为 `undefined`，可确认的活跃项如下：

- **Issue #6165 [OPEN] Default Docker 镜像无法运行 + 引导文档质量差**（jerkstorecaller）
  更新于今日，评论 2 条，是今日唯一有明确评论数的 Issue。用户按官方三步（clone → cd → `docker compose up`）操作后无法得到可用的 Nanobot，直接质疑 Docker 分发的核心价值。诉求直指**开箱即用体验**。
  链接: HKUDS/nanobot Issue #6165

- **PR #6171 [OPEN] fix(docker): make first-run Compose services usable**（LuckVd）
  直接回应 #6165，已确认并复现：全新 clone 后 `docker compose up` 导致所有已发布端口不可达、`nanobot-api` 崩溃循环。这是今日社区关注度最高的修复项。
  链接: HKUDS/nanobot PR #6171

- **Issue #6182 [OPEN] 提议通过受限 MCP 工具实现可选的 Plazmi 世界追赶示例**（cairn-agent）
  当日新开，0 评论，但方向明确：基于现有 MCP 配置指南（外部服务器与核心分离、推荐 `enabledTools`），贡献一个展示现有智能体重访 Plazmi（plazmi.gg，一个时间与现实世界 UTC 同步的家居世界）的小示例。反映社区正在自发扩展 MCP 生态示例。
  链接: HKUDS/nanobot Issue #6182

## 5. Bug 与稳定性

按严重程度排列：

**严重**
- **#6165 [OPEN] 默认 Docker 镜像无法产出可用应用**（jerkstorecaller）
  全新克隆后 `docker compose up` 无法得到可工作的实例，`nanobot-api` 崩溃循环，所有发布端口不可达。
  ✅ **已有 fix PR：#6171**（LuckVd，优先级 p1，已于代码层面确认并端到端复现）
  链接: HKUDS/nanobot Issue #6165 | HKUDS/nanobot PR #6171

- **#6158 [OPEN] [conflict] fix(webui): 让浏览器通知失败可诊断**（Re-bin，p1）
  浏览器不支持通知、拒绝权限或关闭权限提示时，通知开关失败但无任何解释；任务通知使用 `Notification` 构造函数，在移动浏览器上可能抛错。
  ⚠️ 带 `conflict` 标记，需先解决合并冲突
  链接: HKUDS/nanobot PR #6158

**中等**
- **#6082 [OPEN] [conflict] fix(session): 运行时检查点保留已完成迭代**（KailBug，p2）
  中断轮次恢复时，此前两个成功工具迭代只恢复最近一次，导致 resumed 模型请求丢失前序证据。
  ⚠️ 带 `conflict` 标记
  链接: HKUDS/nanobot PR #6082

- **#5748 [OPEN] [conflict] fix(recovery): 在批次边界持久化部分工具进度**（xiexiahao，p2，关闭 #5747）
  运行时检查点仅在执行前与整个工具调用集完成后写入，进程在两者之间退出会导致已完成结果（含关键结果）丢失。
  ⚠️ 带 `conflict` 标记
  链接: HKUDS/nanobot PR #5748

**已修复**
- **#6181 [CLOSED] PPTX 表格空列错位**（maxazure）— 今日提出、今日关闭
  链接: HKUDS/nanobot PR #6181

**稳定性观察**：会话恢复/检查点方向存在 3 条彼此高度相关的 PR（#6082、#5946、#5748），均带 `conflict` 标记且分别创建于 09-12、09-28、10-06。该区域问题真实且影响数据完整性，但合并路径不畅，建议维护者优先裁决收敛方案。

## 6. 功能请求与路线图信号

- **浏览器通知可诊断性**（#6158）— 已带 p1 和完整修复方案，预计后续版本纳入。
  链接: HKUDS/nanobot PR #6158

- **心跳评估器模型预设**（#6083，dmerkert，p2）— 新增可选 `gateway.heartbeat.evaluatorModelPreset` 配置，令 post-run 心跳通知评估器解析引用的既有 `modelPresets` 条目并使用其 provider。属配置灵活性增强，改动面小，**较易纳入下一版本**。
  链接: HKUDS/nanobot PR #6083

- **应用内可恢复更新**（#6168，Re-bin）— 将托管安装、精确版本更新、恢复与 WebUI 串成一条流程，延续 #5817 的 updater 工作并包含 #6154 的 prepare-only 候选流水线。配合 **#6154 预构建预览候选包**（Re-bin），目标让用户无需前端构建环境。这是一条明确的**分发体验路线图**，但涉及面广，需协调多个 PR。
  链接: HKUDS/nanobot PR #6168 | HKUDS/nanobot PR #6154

- **WebUI 组件画廊**（#6179，chengyongru，p2）— 新增 `bun run gallery`，提供免网关的组件参考，覆盖 202 个源模块中的 159 个，含 120 个实时示例族；所有基础模块与 18 个通道注册均已覆盖。
  链接: HKUDS/nanobot PR #6179

- **CoreWeave Inference 自定义 provider 示例**（#6103，crwvrosenblum，p2）— 在既有 OpenAI 兼容端点章节下新增 CoreWeave 示例，展示 base URL、Forge (W&B) 凭证来源、环境变量引用与显式模型预设。
  链接: HKUDS/nanobot PR #6103

- **Weather Skill**（#4145）与 **MCP Plazmi 示例**（#6182）— 社区贡献的示例/技能扩展，前者带 `conflict` 且创建于 06-01。
  链接: HKUDS/nanobot PR #4145 | HKUDS/nanobot Issue #6182

## 7. 用户反馈摘要

- **安装与引导体验是当前最大痛点**：#6165 用户明确指出"这应该能用，这正是 Docker 的意义所在"，并同时批评 onboarding 文档质量差。该问题已被 #6171 从代码层面复现确认，说明并非个别环境问题。
  链接: HKUDS/nanobot Issue #6165

- **权限与失败反馈缺失**：#6158 反映浏览器通知开关在缺少支持、权限被拒或提示被关闭时静默失败，用户无从判断原因。
  链接: HKUDS/nanobot PR #6158

- **中断恢复的数据完整性诉求**：#6082、#5946、#5748 三条 PR 从不同角度指向同一类真实场景——网关崩溃或多工具调用中途退出后，已完成的工作被丢失。这类反馈来自实际运行时行为而非理论问题。
  链接: HKUDS/nanobot PR #6082 | HKUDS/nanobot PR #5946 | HKUDS/nanobot PR #5748

- **生态扩展意愿积极**：社区成员主动提出贡献 MCP 示例（#6182）、Weather Skill（#4145）、合作伙伴文档（#6180）与 provider 示例（#6103），显示用户满意度的正向一面。

Issue 评论中未观察到明确表达满意或不满的整体性评价数据，摘要仅覆盖至评论条数层面。

## 8. 待处理积压

以下条目创建时间较早、至今仍为 OPEN，建议维护者优先关注：

- **#4145 [OPEN] [conflict] fix: resolve #3958 — Weather Skill**（chinhkrb113）
  创建于 **2026-06-01**，已滞留逾 4 个月，今日仍有更新。含新增 `examples/skills/weather/SKILL.md`、`examples/skills/README.md`、新增测试文件及对 `nanobot/skills/README.md` 的修改。带 `conflict` 标记。
  链接: HKUDS/nanobot PR #4145

- **#5748 [OPEN] [conflict] fix(recovery): 批次边界持久化**（xiexiahao）
  创建于 **2026-09-12**，已逾 1 个月，关联 Issue #5747。与 #6082、#5946 主题重叠，存在方案重复，需裁决。
  链接: HKUDS/nanobot PR #5748

- **#5943 [OPEN] refactor(session): 将状态所有权集中于 SQLite**（chengyongru，p1）
  创建于 **2026-09-27**，今日更新。以 SQLite 事务取代 JSONL 作为权威存储，并将运行时状态操作路由至有界接口。属高优先级架构重构，滞留已超两周，且与上述多条恢复类 PR 存在依赖或冲突关系。
  链接: HKUDS/nanobot PR #5943

- **#5946 [OPEN] [conflict] feat(recovery): 执行批次边界持久化已完成工具结果**（lengcangjue，p2）
  创建于 **2026-09-28**，与 #5748 解决同一问题（多工具调用中途崩溃），存在明显重复劳动。
  链接: HKUDS/nanobot PR #5946

**维护建议**：会话恢复方向（#5943、#6082、#5946、#5748）存在 4 条并行且互带冲突的 PR，建议维护者选定单一权威方案（倾向 p1 的 #5943）后关闭其余重复项，以释放合并带宽。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-10-13

## 1. 今日速览

项目今日保持高频活跃：过去 24 小时 Issues 更新 50 条（46 条新开/活跃、4 条关闭），PR 更新 50 条（41 条待合并、9 条已合并/关闭），无新版本发布。讨论重心集中在 Desktop/gateway 的会话与 MCP 连接重复、Windows 平台兼容性（编码、控制台窗口、测试崩溃）以及安装/更新链路的网络依赖问题。今日有明确的高优先级修复推进（compression 用户轮次丢失 P1 修复、MCP stdio 清理误杀 cron worker），说明核心稳定性仍在被响应。整体健康度：活跃度高，但积压中的长期未决 Issue（最早追溯至 2026-07-28 的 PR 与 2026-04-29 的 Issue）提示 triage 压力在累积。

## 2. 版本发布

今日无新版本发布，无破坏性变更与迁移事项。

## 3. 项目进展

今日已合并/关闭 9 条 PR，其中较有代表性的推进：

- **#137664 [CLOSED] fix(desktop): catalog deep links ask the backend for the entry**（comp/desktop，含 ci-reviewed）— 对应 Issue #136483 的四步计划第 2 步：渲染进程不再自行抓取 catalog，改由后端提供条目，直接解决 Desktop 插件目录 deep link 因 301/CORS 全部失败的问题。链接: https://github.com/NousResearch/hermes-agent/pull/137664
- **#135993 [CLOSED] Create agent-ledger.yaml** — 将 agent-ledger 插件（record-before-act 的先写后执行副作用账本）列入插件目录，插件生态继续扩容。链接: https://github.com/NousResearch/hermes-agent/pull/135993
- **#137789 [CLOSED] fmt(js): `npm run fix` auto-fix** — 由 bot 自动生成的 lint/格式化修复，CI 通过后自动 squash 合并，属常规维护性推进。链接: https://github.com/NousResearch/hermes-agent/pull/137789

此外，Issue #136483 已关闭，与上述 #137664 形成闭环，说明 Desktop 插件安装路径的问题处理链条正在收敛。

整体判断：今日合并量不大，但方向明确——一条 Desktop/插件目录链路被闭合，核心 bug 修复（#137658、#137619）仍在待合并队列，项目处于"修复推进中、尚未落地"的状态。

## 4. 社区热点

- **Issue #17565 — Configurable Temperature Parameter for Model Inference**（评论 12，👍 17，最热）— 用户指出 temperature 被 `_fixed_temperature_for_model()` 硬编码或回退到 provider 默认值，呼吁暴露用户可配置项。该 Issue 创建于 2026-04-29、更新至今日，持续半年以上仍为 `needs-decision`，是当前社区呼声最高但悬而未决的诉求。链接: https://github.com/NousResearch/hermes-agent/issues/17565
- **Issue #91564 — Desktop 在本地 gateway 旁再起一个 loopback serve，重复所有 MCP**（评论 6）— `connections.json` 本地注册表加 `launchMode: "primary"` 在每次启动时强制切到本地，导致 MCP 连接翻倍。涉及 Windows 11 原生 + gateway 定时任务 + desktop 的典型单机组合。链接: https://github.com/NousResearch/hermes-agent/issues/91564
- **Issue #122772 — Windows GBK 区域下 subprocess reader 线程 UnicodeDecodeError**（评论 6）— 约 32 处调用点使用 `text=True` 而未指定 `encoding=`，影响 `hermes update` 与 `--version`。中文 Windows 用户的直接阻塞性痛点。链接: https://github.com/NousResearch/hermes-agent/issues/122772

诉求分析：热度最高的三条分别指向**推理可控性**（temperature）、**本地部署拓扑正确性**（MCP 重复注册）和**非英语 Windows 环境可用性**。三者都不是边缘场景，而是主流用户路径。

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

**P1**
- **Issue #137652 相关修复 PR #137658 [OPEN] fix(compression): keep a user turn merged after a todo snapshot** — 提及 P1、`sweeper:risk-session-state`。根因是 `_fold_todo_snapshot` 在下一个压缩边界删除被合并的用户消息。**已有 fix PR**。链接: https://github.com/NousResearch/hermes-agent/pull/137658

**P2**
- **Issue #91564 Desktop 重复 MCP 连接**（上文）— 尚无 fix PR。
- **Issue #122772 Windows GBK UnicodeDecodeError（约 32 处调用点）** — 尚无 fix PR，影响面广。
- **Issue #112028 多 surface 访问同一 session（desktop + mobile dashboard）** — 尚无 fix PR。
- **Issue #131765 [Desktop/SSH] 池化远端 backend 退役健康 SSH 转发并循环（~26 分钟）**，远端实际持续返回 HTTP 200 — 尚无 fix PR。
- **Issue #88945 [Windows] Python backend shell-out 产生闪烁控制台窗口（缺 CREATE_NO_WINDOW）** — 尚无 fix PR。
- **Issue #137090 更新/发布解析在共享出口后失败** — `source_releases._read()` 匿名请求 api.github.com，忽略凭据梯度，导致 403 rate limit。链接: https://github.com/NousResearch/hermes-agent/issues/137090
- **Issue #137646 `hermes update` 拒绝 stable 频道**（release commit 不在本地时，10 秒 ancestry 探测超时）— 尚无 fix PR，与 #137090 同属更新链路可靠性问题。
- **Issue #137771 后台进程日志静默丢弃 200K 字符后仍声称是完整输出**（`MAX_OUTPUT_CHARS`）— 尚无 fix PR。
- **Issue #137774 Bot Desktop 浏览器因 `--remote-debugging-port` 设置 `navigator.webdriver` 被 Google 登录与 Cloudflare 拒绝** — 尚无 fix PR。
- **Issue #136087 忙时输入默认 "interrupt" 会静默取消已委派的子代理** — 涉及 comp/agent、tool/delegate，用户体验与委托语义冲突。
- **Issue #127911 Desktop v0.21.5+4536 中断长工具密集轮次后重复中间消息与工具活动卡片**（live copy + journal copy 格式不一致）— 尚无 fix PR。
- **Issue #136818 `model.options` 携带重复模型 id**（Azure AI Foundry 482 中 17 个重复），导致校验严格的客户端拒绝整个列表、所有模型对用户不可见 — 尚无 fix PR。
- **PR #137619 [OPEN] fix(tools): MCP stdio cleanup no longer SIGTERMs a cron worker spawned during the connect window**（关联 #134611）— 通过 diff `_snapshot_child_pids()` 识别 stdio server 时误杀连接窗口内启动的 cron worker。**已有 fix PR**。链接: https://github.com/NousResearch/hermes-agent/pull/137619
- **PR #137508 [OPEN] fix(sqlite): keep read-only paths literal and connection tracking fail-closed** — 保留只读 SQLite 连接对字节探测守卫可见，数据库文件名按字面路径处理。**已有 fix PR**。链接: https://github.com/NousResearch/hermes-agent/pull/137508

**P3**
- **Issue #132741 desktop-only 插件每次启动记录 "No __init__.py" 失败（3 个插件 24 小时 58 条警告）** — 尚无 fix PR。
- **Issue #137198 测试运行器把 Windows loader 失败（0xC0000142/0xc000012d）归类为 "no tests ran" 而非 CRASHED** — 尚无 fix PR。
- **Issue #137194 win32 tui_gateway `_ImmediateThread` shim 丢线程参数**，35 个测试在 7 个文件中失败（`TypeError: Popen._readerthread() missing 2 required positional arguments`），问题在测试自身 — 尚无 fix PR。
- **Issue #105207 Desktop 侧栏在 session cwd 位于 repo 时静默强制进入 Project 分组视图，无法保持扁平 Recents** — 尚无 fix PR。

**安全相关**
- **PR #136634 [OPEN] fix(approval): apply deny rules inside eval and unresolvable env -S payloads** — 将 `approvals.deny` 规则扩展到 `sh`/`bash -c` 载荷与字面 `env -S` 字符串内部，属许可绕过面收敛，值得优先关注。链接: https://github.com/NousResearch/hermes-agent/pull/136634

模式提示：Windows 平台问题（#122772、#88945、#137198、#137194、#127911）占比突出，且均无 fix PR，是当前稳定性的系统性短板。

## 6. 功能请求与路线图信号

- **#17565 可配置 temperature**（👍 17，P3，needs-decision，评论 12）— 呼声最高、持续最久。今日无对应 PR，纳入下一版本的可能性取决于是否通过 `needs-decision` 决策；若通过，影响面涉及 CLI 与 config。
- **PR #137790 [OPEN] feat(gateway): per-profile Telegram HTTP read timeout**（默认 20.0 秒，慢链路可设 120 秒，不影响其他 profile）— 今日新开，实现干净、低风险，具备进入下一版本的条件。
- **PR #137791 [OPEN] fix: warn before auxiliary fallback switches to paid Anthropic API** — 在辅助请求从 Anthropic OAuth 静默回退到付费 API key 前，通过现有 CLI/gateway 状态通道每会话警告一次。属成本透明性改进，易落地。
- **PR #135677 [OPEN] feat(skills): append-only、机器可验证的 SKILL.md evidence ledger** — 为 SKILL.md 增加 `evidence:` frontmatter（按名累加的 ok/fail 计数、fail-closed schema 校验）。指向技能质量可审计化，是较有路线图意义的方向。
- **PR #73332 [OPEN] feat(cron): custom response wrappers**（`cron.wrap_template`，占位符 `{task_name}`/`{job_id}`/`{content}`）— 创建于 2026-07-28，长期未合并。
- **Issue #91334 Bot Mode 在群聊中复用标准 Desktop composer**（👍 1）— 消除群聊 composer 的重复实现。
- **PR #137792 [OPEN] fix(agent): 让流式 scrubber 识别 tool-call 标签族**（`<tool_call>`/`<invoke>`/`<parameter>` 及变体）— 阻止工具调用标记泄漏到流式消费端。

判断：短期内最可能纳入下一版本的是低风险、局部化的 #137790、#137791 与 #137619；#17565 需要产品决策，不宜预期快速落地。

## 7. 用户反馈摘要

**满意/正向**
- Issue #91334 提到群聊 composer 通过多个独立修复"已达成功能对齐"（gained parity），说明维护者对 Bot Mode 的分散问题做了持续投入。
- 插件注册能力在运行时可用（见 #136485 描述），插件作者认可 `ctx.register_tts_provider` 等运行时接口的价值。

**痛点（按频次）**
1. **Windows 体验**：GBK 区域下 `hermes update` 直接抛 UnicodeDecodeError；无控制台进程 spawn 外部程序时弹出闪烁窗口；测试运行器把原生崩溃误报为"未收集到测试"。中文 Windows 用户的首次使用路径受阻。
2. **本地部署拓扑不可预测**：desktop 与 gateway 同机时 MCP 被重复注册（#91564），`launchMode: "primary"` 每次启动强制切换，用户无法保持预期配置。
3. **多端会话割裂**：桌面端与移动 dashboard 无法同时访问同一会话（#112028）；桌面侧栏无法固定为扁平 Recents 视图（#105207）。
4. **网络受限环境不可用**：共享出口（办公 NAT、Clash 等代理）下所有版本解析因匿名调用 api.github.com 撞上速率限制而失败（#137090）；`hermes update` 在本地无 release commit 时直接中止（#137646）。
5. **输出完整性的信任问题**：后台进程日志截断到 200,000 字符却各处都声称是完整日志（#137771），用户明确要求"说清楚这是尾部而非全文"。
6. **配置可见性缺口**：Desktop 设置 → Voice 只提供硬编码选项，插件注册的 TTS/STT provider 无法被选择（#136485）；模型列表因重复 id 被客户端整体拒绝，用户看不到任何模型（#136818）。
7. **成本与副作用透明度**：辅助请求可能静默从 OAuth 回退到付费 API（#137791 试图修复）；中断操作会连带取消已委派的子代理（#136087）。

**场景信号**：出现频率最高的部署形态是"单机 Windows + gateway 定时任务 + desktop 应用"（#91564）与"macOS 服务器 + desktop + 移动 dashboard"（#112028），前者暴露了大量平台兼容债务。

## 8. 待处理积压

- **Issue #17565 可配置 temperature**（创建 2026-04-29，已悬挂约 5.5 个月，👍 17，评论 12，标签含 `needs-decision`）— 社区最高共识的功能请求，建议优先完成决策。链接: https://github.com/NousResearch/hermes-agent/issues/17565
- **PR #73332 feat(cron): custom response wrappers**（创建 2026-07-28，已悬挂约 2.5 个月，含 `needs-decision`、`sweeper:blast-moderate`）— 需要维护者给出明确取舍。链接: https://github.com/NousResearch/hermes-agent/pull/73332
- **Issue #88945 Windows 闪烁控制台窗口**（创建 2026-08-18）与 **Issue #91564 Desktop 重复 MCP**（创建 2026-08-21）— 均约 2 个月无 fix PR，且影响日常使用。
- **Issue #105207 Desktop 侧栏强制 Project 分组**（创建 2026-09-07）与 **Issue #112028 多 surface 会话访问**（创建 2026-09-15）— UI/会话模型层面的长期诉求，均无对应 PR。
- **PR #132272 chore(catalog): list secure-env-ingress 0.8.1**（创建 2026-10-03，已 10 天，纯目录更新且已按维护者反馈修改）— 低风险，建议尽快合并以免插件作者重复 rebase。链接: https://github.com/NousResearch/hermes-agent/pull/132272
- **PR #135677 skills evidence ledger**（创建 2026-10-09）与 **#136634 approval deny 规则加固**（创建 2026-10-11，安全相关）— 均待评审，后者建议提级处理。

**待决策标签集中度**：`needs-decision` 出现在今日多条高热度条目上（#17565、#91564、#112028、#73332），表明瓶颈已从"修不动"转向"定不下来"，建议维护者集中清理这批决策项。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-10-13）

## 1. 今日速览

今日 PicoClaw 无新版本发布，但代码库合并/关闭活动显著：过去 24 小时内 7 条 PR 更新（6 条合并/关闭、1 条待合并），4 条 Issue 更新（3 条新开/活跃、1 条关闭）。合并的 PR 集中在通道（channel）与 Provider 层，涉及 Telegram、飞书、OpenAI 兼容层与日志配置，属于稳定性与兼容性改善。社区互动主要集中在长期挂起的 `[stale]` 议题上，新议题 #3427 提出了 Plazmi MCP/CLI 持久化会话示例的方向性建议。整体评估：**维护活跃度中等偏上，以存量问题清理为主，缺乏重大新功能落地**。

## 2. 版本发布

无新版本发布（0 个）。

## 3. 项目进展

今日共 6 条 PR 合并/关闭，覆盖多个模块，项目成熟度有所提升：

- **#1676 [CLOSED]** `feat(feishu): implement thread isolation and reply-in-thread for group topics`
  实现飞书群话题的线程隔离，防止同群不同线程间上下文泄漏，并通过 Lark Reply API 确保机器人回复嵌套在正确线程内。修复了多话题群组场景下的上下文串扰问题。
  链接: sipeed/picoclaw PR #1676
- **#1651 [CLOSED]** `fix(telegram): improve HTML chunking and preserve word boundaries`
  改进 Telegram HTML 分块逻辑，在溢出重试时保留空白/换行断点，避免格式化回退路径切断单词。提升长消息渲染质量。
  链接: sipeed/picoclaw PR #1651
- **#1397 [CLOSED]** `fix(openai_compat): load system CA certs from Termux paths`
  修复 Android/Termux 上 SSL/TLS 证书校验失败问题（Go 的 `x509.SystemCertPool()` 在 Termux 返回空池），影响所有 LLM Provider。
  链接: sipeed/picoclaw PR #1397
- **#1509 [CLOSED]** `fix(openai_compat): strip extra_content from tool calls for non-Google providers`
  修复带 `extra_content`（源自 Google/Gemini 扩展思考）的工具调用在非 Google Provider 上触发的校验错误。
  链接: sipeed/picoclaw PR #1509
- **#1500 [CLOSED]** `feat(logger): make logger time format configurable via config.json`
  支持通过 `config.json` 配置日志时间格式，替代硬编码默认值。
  链接: sipeed/picoclaw PR #1500
- **#3396 [CLOSED]** `feat(channels/onebot): add opt-in toggle for acknowledgement reactions`
  新增 `reaction_enabled` 设置（默认 `false`），使 OneBot 通道的自动表情回应变为可选。
  链接: sipeed/picoclaw PR #3396

**综合评价**：本轮合并以存量修复为主，其中 #1500、#1397、#1397 系创建于 3 月，积压约 7 个月后集中关闭，说明存在一次维护者清理动作。功能层面飞书线程隔离与 OneBot 反应开关是较实用的改进。

## 4. 社区热点

今日讨论量整体偏低（单条最高评论数为 3），无高反应（👍 均为 0）议题。相对受关注的三条均为长期 `[stale]` 议题：

- **Issue #3394** [OPEN] `[BUG] QQ机器人的接口更新了，但QQ聊天通道的接口似乎没有更新` — 3 条评论
  链接: sipeed/picoclaw Issue #3394
- **Issue #3392** [OPEN] `[BUG] CLAassistant does not detect signature` — 3 条评论
  链接: sipeed/picoclaw Issue #3392
- **Issue #3395** [CLOSED] `[Feature] Make OneBot auto-ack reaction configurable` — 2 条评论
  链接: sipeed/picoclaw Issue #3395

**诉求分析**：热点集中在 **QQ/OneBot 通道适配**与**仓库自动化工具（CLAassistant）可靠性**两个方向。前者反映平台侧接口变动带来的被动跟进压力，且已有对应 PR（#3396、#3381 相关），后者属于基础设施问题。值得注意的是，这些均带 `[stale]` 标签且评论数不高，说明社区整体参与度有限。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 议题 | 状态 | 是否已有 fix PR |
|---|---|---|---|
| 高 | **#3394** QQ 机器人接口已更新，但 QQ 聊天通道接口未同步 | OPEN（stale） | 未见明确 PR；相关方向 PR #3396 处理的是 OneBot 反应开关，非接口协议更新 |
| 中 | **#1397** Termux 下 SSL/TLS 证书校验失败 | 已修复（CLOSED） | 是（PR #1397） |
| 中 | **#1509** 非 Google Provider 工具调用 `extra_content` 校验错误 | 已修复（CLOSED） | 是（PR #1509） |
| 中 | **#1651** Telegram HTML 分块切断单词 | 已修复（CLOSED） | 是（PR #1651） |
| 低 | **#3392** CLAassistant 未检测到 CLA 签名 | OPEN（stale） | 否，属 CI/自动化问题 |

链接分别见上文对应条目。整体未出现崩溃类或回归类新报告，稳定性风险集中在 #3394 的通道协议同步滞后。

## 6. 功能请求与路线图信号

- **#3395 / #3396（已关闭）**：OneBot 自动确认反应可配置化。请求与 PR 均已关闭，`reaction_enabled`（默认 `false`）已落地，**预计纳入下一版本**。
  链接: sipeed/picoclaw Issue #3395
- **#3427（新开，2026-10-13）**：`Proposal: low-dependency Plazmi MCP/CLI example for persistent agent sessions`。提出以 PicoClaw 的 MCP CLI 与 heartbeat 能力承载一个小型持久世界示例（Plazmi 提供基于真实 UTC 时间的家园、花园与邻居交互，以及 `pulse`/`digest` 机制）。
  链接: sipeed/picoclaw Issue #3427
  该议题今日新开、0 评论，尚无对应 PR，**属早期方向性建议，是否进入路线图待维护者评估**。
- **#3381（待合并）**：`Switch Openai to responses API`。将 OpenAI Provider 切换至 Responses API，属新功能（非破坏性）。该 PR 自 2026-09-17 创建并带 `[stale]` 标签，**若能推进将成为重要 Provider 层升级**。
  链接: sipeed/picoclaw PR #3381

## 7. 用户反馈摘要

从 Issues 与 PR 描述中提炼的真实用户信息：

- **使用场景**：#3395 用户 `ycsqwan` 使用 OneBot 通道（QQ via NapCat）运行 PicoClaw，关注**每条群消息被自动添加表情回应（`set_msg_emoji_like`，emoji 289）**的行为；该逻辑原硬编码于 `OneBotChannel` 中，属强侵入式默认行为，引发不满。该问题已通过 PR #3396 转为可选。
- **环境痛点**：#3394 用户 `qinglt` 报告 QQ 机器人接口更新而 PicoClaw 通道未跟进，反映**上游平台接口变动与项目适配之间的时滞**。
- **工程化痛点**：#3392 用户 `XenonR` 反馈 CLAassistant 未识别 CLA 签名（关联 PR #3381），影响贡献流程体验。
- **生态诉求**：#3427 用户 `cairn-agent` 认可 MCP CLI 与 heartbeat 能力，希望将其作为持久化 agent 会话的轻依赖示例载体。

整体反馈以**通道行为可配置性**与**平台兼容跟进**为主要诉求，未见对核心架构的强烈不满。

## 8. 待处理积压

以下议题长期未决或长期挂起，建议维护者关注：

- **Issue #3394 [OPEN] [stale]**：QQ 通道接口协议未同步（创建 2026-09-26，更新 2026-10-12，仍开放）。属功能性缺口，建议优先评估。
  链接: sipeed/picoclaw Issue #3394
- **Issue #3392 [OPEN] [stale]**：CLAassistant 签名检测失效（创建 2026-09-25）。影响贡献者流程。
  链接: sipeed/picoclaw Issue #3392
- **PR #3381 [OPEN] [stale]**：OpenAI 切换 Responses API（创建 2026-09-17，已近一个月未合并，且关联的 #3392 阻碍其流程推进）。
  链接: sipeed/picoclaw PR #3381

**健康度小结**：本轮维护者集中关闭了 3 条积压约 7 个月的旧 PR（#1500、#1397、#1509），表明清理机制在运转；但 `[stale]` 标签在多条开放议题上反复出现，说明**新增待处理项的响应速度仍偏慢**，尤其是通道协议同步（#3394）与 Provider 升级（#3381）这两项对实际使用影响较大的事项。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报（2026-10-13）

## 1. 今日速览

过去24小时 NanoClaw 无 Issues 更新，也无新版本发布，但 Pull Request 侧保持活跃：共 4 条 PR 更新（3 条待合并、1 条已关闭）。线程主题集中在技能/安装链路维护（OneCLI 网关版本固定、技能注册表测试隔离）、审批卡片投递位置修复以及社区资源补充。无新开或活跃 Issue，说明当前没有新的用户侧故障上报，项目健康度平稳，工作重心偏向既有 PR 的收敛与合并。

## 2. 版本发布

今日无新版本发布，无 Releases 记录。

## 3. 项目进展

今日唯一合并/关闭的 PR 为：

- **#4080 [CLOSED] [area/security] fix(approvals): approval card joins the requester's thread in their own chat**（作者 amit-shafnir，2026-10-12 创建并更新）
  链接：nanocoai/nanoclaw PR #4080

该修复解决了审批卡片投递位置错误的问题：当 agent 在审批人自己的私聊（DM）中某个线程内请求审批（例如 `ncl destinations-add` 被挂起等待管理员审批）时，卡片原本被投递到 DM 的顶层，而等待审批的人正在线程内查看，因而看不到卡片。修复后审批卡片会加入请求者所在的线程。这直接改善了涉及审批流程（area/security）的场景可用性，属于用户可感知的体验修复。

其余 3 条 PR 仍处于待合并状态，项目整体向前迈进的幅度以单一安全/审批体验修复为主，无功能性大版本推进。

## 4. 社区热点

今日无 Issues 讨论数据（Issues 更新为 0）。在 PR 方面，所有 4 条 PR 均无评论数据（`评论: undefined`），👍 反应数均为 0，因此没有可识别的讨论热点或高反应条目。

从内容主题看，今日 PR 诉求分布为：
- 安装/技能链路维护：#4082、#4081
- 审批体验修复：#4080
- 社区资源扩充：#4083

## 5. Bug 与稳定性

今日报告的含 `kind/bug` 标签 PR 共 2 条，均已附 fix PR：

1. **#4082 [OPEN] [kind/bug, delivery/skill, PR: Fix, area/setup-installation, area/skills, area/tools] fix(add-onecli): use OneCLI agent grants and move the gateway pin to 1.45.0**（作者 chiptoe-svg）
   链接：nanocoai/nanoclaw PR #4082
   问题：OneCLI 1.43+ 对 `onecli agents...` 返回 `410 Gone`，导致 OneCLI 安装停留在 1.42.0 的临时方案上。修复方式为改用 OneCLI 的 agent grants API，并将网关版本固定推进至 1.45.0。影响安装与技能链路，**已有 fix PR（本条即修复）**。

2. **#4081 [OPEN] [kind/bug, PR: Fix, area/skills] test(update-skills): isolate registry-remote env overrides**（作者 bmultini）
   链接：nanocoai/nanoclaw PR #4081
   问题：调用者环境中的 registry-remote 覆盖会破坏 `scripts/update-skills.test.ts`；`resolveRegistryRemote` 读取 `NANOCLAW_REGISTRY_REMOTE` / `NANOCLAW_C...` 环境变量。修复方式为隔离该环境变量覆盖。属测试稳定性问题，**已有 fix PR（本条即修复）**。

两条均为开放状态（OPEN），尚未合并；严重程度从描述看均为工具链/测试层面的阻断，而非运行时崩溃或数据问题。

## 6. 功能请求与路线图信号

今日无 Issues 形式的功能请求。可参考的路线图信号来自以下 PR：

- **#4083 [OPEN] [area/repository-maintenance] Add Sol AI to Community section**（作者 TheSolai）
  链接：nanocoai/nanoclaw PR #4083
  拟将 Sol AI（thesolai.github.io，由 Dross 在 OpenClaw 上运营的个人 AI agent 博客，内容为真实自主工作流与生产级 agent 架构）加入 Community 区。是否纳入取决于维护者对社区区收录标准的判断。

- **#4082** 中提出的 OneCLI 网关 pin 从 1.42.0 stopgap 迁移到 1.45.0，是安装链路版本政策的推进信号，若合并将影响后续安装默认行为。

无足够数据判断这些内容是否会被纳入下一版本。

## 7. 用户反馈摘要

今日 Issues 为 0 条，无可提炼的用户评论、痛点或满意度反馈。PR 摘要中体现的问题均为维护者/贡献者视角的技术问题（OneCLI 410 错误、测试环境变量污染、审批卡片位置），并非来自 Issues 评论的用户直接反馈。

## 8. 待处理积压

今日无长期未响应的 Issue 数据（Issues 总数 0）。从 PR 看，以下 3 条处于 OPEN 待合并状态，建议维护者关注：

- nanocoai/nanoclaw PR #4083（社区资源新增，area/repository-maintenance）
- nanocoai/nanoclaw PR #4082（OneCLI 安装修复，影响安装链路，kind/bug）
- nanocoai/nanoclaw PR #4081（技能测试隔离修复，kind/bug）

其中 #4082 和 #4081 为 bug fix，若长时间挂起可能持续影响安装与测试稳定性。数据中未提供这些 PR 的创建时长以外的积压时长信息，无法进一步判断超期程度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-13

## 1. 今日速览

今日 IronClaw 活跃度处于**低位平稳**状态：过去 24 小时无新版本发布，无 PR 合并或关闭，仅新增 2 条 Issue 更新（均为开启状态、零评论）和 1 条待合并 PR。唯一 PR 为 dependabot 自动发起的依赖升级，不涉及核心代码改动。社区互动指标（评论、👍）全部为零，说明今日无引发讨论的议题。整体判断：项目处于日常维护节奏，无重大推进，也未见明显风险信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日**无合并或关闭的 PR**，项目功能层面无实质向前推进。

唯一处于待合并状态的是依赖维护类 PR，尚未合并，暂不影响主线：

- [#8137 [OPEN] chore(deps): bump brace-expansion in /docs/internal/architecture-video](https://github.com/nearai/ironclaw/pull/8137) — 由 dependabot[bot] 创建，将 `brace-expansion` 从 1.1.18 升级至 1.1.21，属文档/内部架构目录下的间接依赖维护，无功能性影响。

## 4. 社区热点

今日各项互动指标均为 0（Issues 评论均为 0，PR 评论值缺失，👍 均为 0），**无实质性社区讨论热点**。按新开议题数量看，仅有以下两项可视为今日关注点：

- [#8136 Proposal: optional hosted-MCP Plazmi extension using declarative auth and egress](https://github.com/nearai/ironclaw/issues/8136) — 生态扩展提议
- [#8135 Daily ironclaw failure taxonomy — 2026-10-12](https://github.com/nearai/ironclaw/issues/8135) — 基准测试失败分类报告

两者均无评论，尚未形成讨论。

## 5. Bug 与稳定性

今日**无明确报告的 Bug、崩溃或回归问题**。

需注意，[#8135](https://github.com/nearai/ironclaw/issues/8135) 属于基准测试（benchmark）失败分类报告，其中提及 `officeqa` 套件存在 **52 个 non-pass 任务**。该报告性质为评测失败归类，而非可直接定位的产品缺陷报告；摘要中未给出根因结论，**当前无对应 fix PR**。建议维护者视其为稳定性观察项而非已确认 Bug。

## 6. 功能请求与路线图信号

今日唯一显性功能请求为：

- [#8136](https://github.com/nearai/ironclaw/issues/8136) — 提议基于现有 Reborn 扩展机制，增加一个**可选的 hosted-MCP Plazmi 扩展**，复用已有的「hosted-MCP 元数据 + API-key 鉴权 + egress」声明式扩展接口，而非在核心中加入厂商专有逻辑。

**纳入下一版本的可能性判断：低—中。** 该提议属于架构层可选扩展，作者明确希望复用既有 seam，与现有扩展机制兼容度高，理论上实现成本可控；但目前**无对应 PR**，也无维护者回应或评论，尚无纳入排期的证据。

## 7. 用户反馈摘要

今日 Issues 均无评论，无法从评论中提炼真实用户反馈。

从 Issue 正文可读取的诉求仅有一处：`#8136` 作者（cairn-agent）表达了对现有扩展设计取向的认可——即把 hosted-MCP 元数据、API-key 鉴权与 egress 放在声明式扩展面（declarative extension surfaces）上，并希望沿用这一既有接口来承载可选的第三方（Plazmi）对接，避免向核心引入厂商逻辑。此为设计偏好型反馈，非使用痛点或满意度评价。

## 8. 待处理积压

今日列表中的 3 条条目**创建时间都在 1 天以内**（2026-10-12 至 2026-10-13），因此严格意义上**不存在长期未响应的积压项**。

但需提示维护者注意以下**响应缺口**（非长期积压，属即刻待跟进）：

- [#8136](https://github.com/nearai/ironclaw/issues/8136) — 新开的生态扩展提议，0 评论，尚未获维护者表态；鉴于涉及扩展架构决策，建议尽早给出方向性回应。
- [#8137](https://github.com/nearai/ironclaw/pull/8137) — 依赖升级 PR 待合并，可快速处理以保持依赖整洁。

---

**数据来源**：IronClaw (github.com/nearai/ironclaw) GitHub 数据，统计窗口 2026-10-13 前 24 小时。以上内容均基于所提供材料，未包含材料外信息。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-13

## 1. 今日速览

今日项目维持高活跃度：PR 更新 17 条（待合并 8、已合并/关闭 9），Issues 更新 2 条且全部为新开/活跃，无新版本发布。合并/关闭侧集中在工程清理与体验修正——包括 IM 后台累加器销毁修复、首条消息重复注入 AGENTS.md 指令的修复、以及 `feat: open with`、`feat: desktop companion composer` 等功能合并。社区侧出现两条高关注度 Issue：一条是第三方评测组织请求以免费 L1 位收录 LobsterAI 的 harness 榜单邀约，另一条是标注为 Security 的 Provider API Key 导出使用硬编码口令问题。依赖更新（dependabot）在今日 PR 中占比明显，属常规维护节奏。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

**功能类合并**

- **#2848 [CLOSED] feat: open with**（fisherdaddy）
  涉及 renderer / build / main / cowork 及 Windows 平台，新增“open with”能力。
  https://github.com/netease-youdao/LobsterAI/pull/2848

- **#2847 [CLOSED] feat: desktop companion composer**（fisherdaddy）
  涉及 renderer / docs / main / cowork，桌面伴侣式输入组件。
  https://github.com/netease-youdao/LobsterAI/pull/2847

- **#2849 [CLOSED] feat(experts): add configurable expert plaza and first-run deliverables**（btc69m979y-dotcom）
  新增可配置的 Expert Plaza（专家广场），用户可发现任务型 Agent 并将其召入新会话，附带可编辑但未发送的起始问题；同时把 Kits 移入共享的 Kits / Skills / Connectors 目录。跨 renderer / docs / main / skills / cowork 五个 area，是今日体量最大的合并项。
  https://github.com/netease-youdao/LobsterAI/pull/2849

**修复类合并**

- **#2812 [CLOSED] fix(openclaw): stop re-injecting AGENTS.md instructions into the first message**（fisherdaddy）
  桌面会话首条消息携带的 `[LobsterAI system instructions]` 块重复了 OpenClaw 已通过 `AGENTS.md` 写入系统提示的两个段落，该 PR 消除了重复注入。创建于 10-07，今日关闭，从提出到合并约 6 天。
  https://github.com/netease-youdao/LobsterAI/pull/2812

- **#2850 [CLOSED] fix(im): safely destroy background accumulators**（changjing9527）
  避免 `IMCoworkHandler.destroy()` 在清理无 promise rejection 回调的后台投递累加器时抛错，Fixes #926。当日创建当日关闭，响应迅速。
  https://github.com/netease-youdao/LobsterAI/pull/2850

**依赖类合并**

- **#2672 [CLOSED] chore(deps): bump mermaid from 10.9.8 to 12.1.0**（dependabot，创建 2026-09-14，跨约 1 个月后关闭）
  https://github.com/netease-youdao/LobsterAI/pull/2672
- **#2459 [CLOSED] chore(deps): bump @nodesecure/js-x-ray from 14.3.0 to 16.0.0**（dependabot，创建 2026-08-10，积压约 2 个月后关闭）
  https://github.com/netease-youdao/LobsterAI/pull/2459

**整体判断**：今日项目在“Agent 发现与编排”（Expert Plaza）和“桌面交互入口”（open with、companion composer）两个方向明确向前推进，同时清掉了一个存在多日的首条消息注入重复问题，并关闭了两条积压依赖升级，属于功能与债务同步消化的健康推进节奏。

---

## 4. 社区热点

- **#2801 [OPEN] [邀收录] 10/12 agent harness 榜单 · 免费 L1 收录**（作者 chunxiaoxx，评论 2，创建 10-06，更新 10-13）
  来自 Nautilus 组织，称其做独立 agent 评测判分基础设施（判据 sha 预注册、判分独立于被测方、每份判读带复现命令），10/12 上线公开 harness 榜单，为开源 harness 留免费 L1 收录位，提供实测判读卡 + 冻结判据 + 复算命令，且不收费。对方明确将 LobsterAI（6.1k★，官方开源）列为想收录的国产代表位之一。
  链接：https://github.com/netease-youdao/LobsterAI/issues/2801
  **诉求分析**：这是外部评测生态的收录邀约，而非缺陷报告。对该类请求的回应涉及项目对第三方评测结果“可引用、结果好坏都可引用”的态度，以及是否愿意以官方身份提供复现环境。这是今日评论数最多的条目，但绝对量仍仅 2 条，尚未形成大范围社区讨论。

- **#2851 [OPEN] [Security] Provider API Key Exports Use a Public Hardcoded Password**（作者 carfeii，评论 0，当日创建当日更新）
  链接：https://github.com/netease-youdao/LobsterAI/issues/2851
  **诉求分析**：见下节，虽无评论但议题性质决定其需要优先关注。

今日 PR 侧评论数在数据中均为 `undefined`，无可用于排序的讨论热度指标，故不列出热点 PR。

---

## 5. Bug 与稳定性

按严重程度排列：

**高 — 安全问题（无 fix PR）**
- **#2851 [OPEN] [Security] Provider API Key Exports Use a Public Hardcoded Password, Allowing Trivial Decryption by Anyone With the Export File**（作者 carfeii，2026-10-13 创建）
  报告称：受影响版本已对 2026-10-12 的默认分支确认；LobsterAI 的 “Export Providers” 功能使用基于公开硬编码口令派生的密钥（PBKDF2，100000 次迭代）以 AES-GCM 加密各 provider 的 API key，导致任何持有导出文件的人都能轻易解密。目前评论 0，**尚无关联 fix PR**，建议维护者优先确认并给出缓解措施（如改为用户口令派生 / 操作系统密钥链托管）。
  链接：https://github.com/netease-youdao/LobsterAI/issues/2851

**低 — 已修复（当日关闭）**
- **#2850**（关联 Issue #926）：`IMCoworkHandler.destroy()` 清理后台累加器时可能抛错。已由当日合并的 #2850 修复。
  https://github.com/netease-youdao/LobsterAI/pull/2850
- **#2812**：桌面会话首条消息重复注入 `AGENTS.md` 中已有的系统指令段落。已合并关闭。
  https://github.com/netease-youdao/LobsterAI/pull/2812

今日无崩溃或回归类报告。Issues 侧唯一的技术性缺陷即为 #2851，且严重度最高。

---

## 6. 功能请求与路线图信号

今日没有以 Issue 形式提出的新功能请求（两条 Issue 分别为评测收录邀约与安全报告）。路线图信号主要体现在已提交的 PR 上：

- **内置 provider 模型清单刷新（#2859，OPEN，作者 nbjoe）**：按各家官方文档刷新 DeepSeek、Moonshot、Qwen、Zhipu、MiniMax、Xiaomi 共 6 个内置 provider 的默认模型清单，并为已有用户补齐迁移逻辑（删除已下线 id、注入新 id）。涉及 `src/shared/providers/constants.ts`。该 PR 带有明确的存量用户迁移设计，具备进入下一版本的形态。
  https://github.com/netease-youdao/LobsterAI/pull/2859

- **#2849 Expert Plaza 已合并**：可配置专家广场 + 首次运行交付物 + Kits 归入共享目录，已落地，构成近期“Agent 发现/编排”方向的路线图信号。
  https://github.com/netease-youdao/LobsterAI/pull/2849

- **#2847 desktop companion composer / #2848 open with 已合并**：桌面输入与系统集成层面的能力扩展信号。
  https://github.com/netease-youdao/LobsterAI/pull/2847
  https://github.com/netease-youdao/LobsterAI/pull/2848

- **待合并依赖类 PR（8 条 OPEN）**：mermaid→12.1.0（#2858）、js-x-ray→16.2.0（#2857）、katex→0.19.0（#2855）、@univerjs/find-replace→1.0.3（#2856）、@univerjs/sheets-data-validation-ui→1.0.3（#2854）、@univerjs/drawing-ui→1.0.3（#2853）、electron 组 2 项更新（#2852）等，属常规维护队列，不构成功能路线图信号。其中 #2858 与今日已关闭的 #2672 为同一 mermaid 升级目标，存在重复提交。

---

## 7. 用户反馈摘要

今日 Issues 评论数据有限（#2801 有 2 条评论，#2851 为 0 条），可提炼的反馈如下：

- **外部评测方希望收录 LobsterAI**（#2801）：Nautilus 组织强调其判分“独立于被测方”、判据以 sha 预注册、每份判读附复现命令、且“结果好坏都可引用，不收费”，并称 LobsterAI 是“想收录的国产代表位之一”。这是正面认可信号，但也隐含对项目配合提供可复现判读条件的期待。
- **导出功能的安全信任问题**（#2851）：报告者以“Anyone With the Export File”描述风险边界，指向 Provider 配置导出这一实际使用场景——用户在多机/备份场景下导出 provider 配置时，API key 的实际保护强度不足。这是对隐私与凭据安全的直接不满，且尚未得到项目方回应。
- 今日无其他来自用户的使用场景描述、满意度或抱怨类评论可供提炼。

---

## 8. 待处理积压

- **#2801**（创建 2026-10-06，更新 2026-10-13，已挂 7 天）：外部评测收录邀约，仅有 2 条评论，尚无维护者明确表态，建议给出接受/拒绝或延后的结论。
  https://github.com/netease-youdao/LobsterAI/issues/2801
- **#2851**（创建 2026-10-13）：安全类 Issue，0 评论、无 fix PR，虽为当日新开，但按性质应避免进入积压，建议尽快确认与响应。
  https://github.com/netease-youdao/LobsterAI/issues/2851
- **#2459** 已于今日关闭，说明 js-x-ray 自 2026-08-10 起约 2 个月的积压得到清理；但新提交的 **#2857**（js-x-ray→16.2.0）接续进入待合并队列，需注意同类升级反复堆积。
  https://github.com/netease-youdao/LobsterAI/pull/2857
- **#2672 与 #2858 指向同一 mermaid 10.9.8→12.1.0 升级**，前者今日关闭、后者今日新开，建议合并处理以免重复排队。
  https://github.com/netease-youdao/LobsterAI/pull/2858

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-10-13

## 1. 今日速览

过去 24 小时，Moltis 项目处于**低活跃但持续的开发状态**：无新版本发布，Issues 无任何更新（新开/活跃/关闭均为 0），社区讨论侧完全静默。唯一的动态来自 Pull Request 通道——2 条由同一作者 ManuRakh 提交的 PR 均处于 OPEN 待合并状态，且均在 2026-10-13 有更新活动。这两条 PR 主题高度相关，聚焦于**多智能体编排（spawn_agent / preset）与直接聊天路径的能力对齐与权限控制**，显示核心贡献者正在系统性打磨 agent 编排语义。整体健康度：无阻塞性风险信号，但缺乏合并动作与社区互动，项目今日向前推进的实际落地量为 **0（无合并、无发布）**。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目代码主线未有实际推进。

两条待合并 PR 均处于 OPEN 状态，尚未进入主干：

- **PR #1302** — Preset spawn.allow：为 `spawn_agent` 目标引入白名单机制。
- **PR #1301** — Chat ↔ sub-agent 对齐：统一 persona、system_prompt_suffix、delegate_only、preset model。

就"向前迈进了多少"而言，今日进展为**待评审的增量**：若这两条 PR 后续合并，将补齐 Moltis 在编排权限与聊天/子智能体一致性上的两块拼图，但目前仍属未落地状态。

## 4. 社区热点

今日社区讨论热度极低：无 Issues 更新，两条 PR 的评论数在数据中均标记为 `undefined`（无评论数据），👍 反应均为 **0**。因此不存在实质意义上的"讨论热点"。

若以"今日唯一的活动焦点"论，则集中在下列两条 PR：

- [PR #1302 — Preset spawn.allow allowlist for spawn_agent targets](https://github.com/moltis-org/moltis/pull/1302)
- [PR #1301 — Chat ↔ sub-agent parity](https://github.com/moltis-org/moltis/pull/1301)

**诉求分析**：两条 PR 由同一作者连续提交、同日更新，指向一个清晰的工程关切——随着 coordinator/worker（组织架构图式）多智能体用法普及，现有 `spawn_agent` 与直接聊天之间存在**语义分裂**，且缺少对"可派生到哪些 preset"的约束。这属于典型的"能力扩张后收敛治理"阶段，反映出生产级多智能体编排对**一致性**与**权限边界**的真实需求。

## 5. Bug 与稳定性

今日**无 Bug、崩溃或回归问题被报告**（Issues 更新为 0 条，亦无相关 fix PR）。

就 PR #1301 的摘要描述而言，其指出的"preset 字段仅作用于 `spawn_agent` 子运行而不影响直接聊天"可视为一处**行为不一致（discrepancy）**，但数据中未将其标记为 bug，且该 PR 本身即为对齐修复方案。严重程度无法从现有材料判定，此处不作推断。

## 6. 功能请求与路线图信号

今日无来自 Issues 的用户功能请求。路线图信号仅可从两条 PR 反推：

| 信号 | 来源 PR | 可能纳入方向 |
|---|---|---|
| Preset 级 `spawn.allow` 白名单，用于组织架构/协调者图的派生权限控制 | [#1302](https://github.com/moltis-org/moltis/pull/1302) | 多智能体安全与治理能力 |
| 聊天与子智能体路径对齐（persona、system_prompt_suffix、delegate_only、preset model） | [#1301](https://github.com/moltis-org/moltis/pull/1301) | 行为一致性与"以 agent 身份对话"体验 |

两条 PR 相互关联（均围绕 preset / spawn 语义），若评审顺利，较可能作为一组能力在下一版本中一并落地。但数据中**无版本计划或里程碑信息**，是否纳入下一版本无法确认。

## 7. 用户反馈摘要

今日无 Issues 评论数据可供提炼，**无法总结真实用户痛点、使用场景或满意度**。

需要说明的是，数据中两条 PR 的评论字段均为 `undefined`，不能据此判断"零讨论"或"高讨论"，仅能确认无可用评论内容。

## 8. 待处理积压

数据未提供创建时间较早、长期未响应的 Issue 或 PR 信息（今日 Issues 总数为 0，PR 仅 2 条且均为 2026-10-12 新建，次日即更新）。因此**当前无可识别的长期积压项**。

值得维护者留意的即时事项（非积压，仅供评审优先级参考）：

- [PR #1302](https://github.com/moltis-org/moltis/pull/1302) 与 [PR #1301](https://github.com/moltis-org/moltis/pull/1301) 均处于 OPEN 且无评论、无点赞、无合并动作，建议尽快安排评审以避免堆积。
- 项目今日 Issues 通道零活动，若持续多日静默，需关注是否为反馈渠道冷启动问题（当前数据不足以定论）。

---

*说明：本日报严格基于提供的 GitHub 数据生成。评论数标记为 `undefined`、无 Releases、无 Issues 条目等情况均已如实标注，未作任何外部补充或推断。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-13

> 数据来源：github.com/agentscope-ai/CoPaw（Issue/PR 链接域名显示为 agentscope-ai/QwenPaw）
> 统计窗口：过去 24 小时

---

## 1. 今日速览

- 项目维持高强度活跃：过去 24 小时 Issues 更新 **21 条**（新开/活跃 16、关闭 5），PR 更新 **43 条**（待合并 23、已合并/关闭 20），无新版本发布。
- 今日合并/关闭的 PR 覆盖 Console UI/UX 基础、Skill Hub 插件化、SQLite 持久化加固、可观测性修复等多个方向，推进幅度较大。
- 社区讨论集中在 **Console 前端稳定性**、**插件/技能体系** 与 **自托管/内网部署** 三类主题。
- 新增 Bug 报告密度偏高（当日新开多条），涉及 Windows 项目删除、ACP 插件加载、Hub 重启运行时恢复等，稳定性仍是主要风险点。
- 总体健康度：**贡献活跃、迭代节奏快**，但 PR 积压（23 条待合并）与部分长期未响应 Issue 值得维护者关注。

---

## 2. 版本发布

今日无新版本发布，略。

---

## 3. 项目进展

今日已合并/关闭的重要 PR：

- **#8217 [CLOSED] [size/XL] feat(console): establish UIUX foundation**
  建立 Console UI/UX 基础：为 30 个内置路由补充领域/标题/作用域/布局/导航元数据并保持旧插件兼容；Push 轮询改为前台 2.5s、后台 30s、恢复可见立即刷新；新增 Page Shell 与路由文档。
  https://github.com/agentscope-ai/QwenPaw/pull/8217

- **#8128 [CLOSED] [size/XL] feat(skill): Move hub to plugins**
  将硬编码的 Skill Market 源改为可通过插件系统安装/移除的 Hub，新增 `hub` 插件类型，为自定义市场提供扩展点——对应 Issue #8015 的诉求。
  https://github.com/agentscope-ai/QwenPaw/pull/8128

- **#6459 [CLOSED] [Under Review, size/XL] fix(history): harden SQLite persistence, backup, and restore**
  加固历史记录的 SQLite 持久化：显式获取写入锁、失败事务回滚、保持阻塞式持久化，缓解并发写入导致的锁等待耗尽问题。
  https://github.com/agentscope-ai/QwenPaw/pull/6459

- **#7964 [CLOSED] [Under Review, size/L] fix(observability): Langfuse tool observation never records tool output**
  修复 Langfuse `tool.*` observation 从不记录 output 的问题（此前 100% 正常工具调用仅导出 input 和 metadata）。
  https://github.com/agentscope-ai/QwenPaw/pull/7964

- **#8190 [CLOSED] [size/S] fix(agents): resolve model capabilities before filtering history media**
  修复纯文本模型（如 GLM-5.3）因 raw metadata 未设置 `supports_multimodal` 而误接收历史图片的问题。
  https://github.com/agentscope-ai/QwenPaw/pull/8190

- **#8098 [CLOSED] [Under Review, size/S] fix(agents): return a result for foreground chat timeouts**
  前台委派 agent 超时时不再直接把取消传播到父轮次，而是返回显式超时工具结果——对应 Issue #7981。
  https://github.com/agentscope-ai/QwenPaw/pull/8098

- **#8065 [CLOSED] [Under Review, size/S] fix(skills): sanitize skill_name before building staging paths**
  修复 `skill_name` 直接拼接进文件路径导致的路径穿越风险（`../escape`）。
  https://github.com/agentscope-ai/QwenPaw/pull/8065

- **#8212 [CLOSED] [size/XS] fix: finish tool streams without yielding during GeneratorExit**
  修复工具流在 `GeneratorExit` 期间仍 yield 导致的 finalization 异常。
  https://github.com/agentscope-ai/QwenPaw/pull/8212

- **#8221 [CLOSED] [size/XS] fix(console): bound background polling and unblock model picker**
  限制后台轮询堆积，并解除模型选择器阻塞。
  https://github.com/agentscope-ai/QwenPaw/pull/8221

- **#8220 [CLOSED] [size/S] chore(deps): bumping version of agentscope to 2.0.10**
  依赖升级：agentscope → 2.0.10。
  https://github.com/agentscope-ai/QwenPaw/pull/8220

**整体推进评估**：今日在 Console 架构基础、技能/插件生态扩展、数据持久化与安全修复四条线上均有落地，属于**实质性推进日**，而非仅维护性提交。

---

## 4. 社区热点

按评论数排序的高讨论条目：

- **#8071 [OPEN][Feature]: Plugin-facing theme extension point（3 评论）**
  插件目前只有一个主题开关（`window.QwenPaw.chat.theme.set(...)`），无法覆盖语义 token；请求为主题系统增加插件级扩展点。
  https://github.com/agentscope-ai/QwenPaw/issues/8071

- **#8172 [OPEN][Bug]: Console 聊天间歇性静默空完成（3 评论）**
  QwenPaw 2.2.0 Docker/NAS 部署下，Web 控制台聊天回合约 1 秒结束、output 为空、模型从未被调用，前端无任何回复。
  https://github.com/agentscope-ai/QwenPaw/issues/8172

- **#8073 [CLOSED][Bug]: V2.2.2.beta4 无法访问会话页（3 评论，已关闭）**
  从 V2.2.1 升级后 Chat 页面报错无法打开，且仅在特定条件下复现。
  https://github.com/agentscope-ai/QwenPaw/issues/8073

- **#8015 [CLOSED][Feature]: 支持配置自定义 Skill / Plugin 市场源（2 评论，已关闭）**
  面向内网/离线部署，要求可启用/禁用或指向自托管镜像市场源，无需 patch QwenPaw——已由 PR #8128 落地。
  https://github.com/agentscope-ai/QwenPaw/issues/8015

- **#7056 [OPEN][Feature]: Background Task Callback / Notification Mechanism（2 评论）**
  `submit_to_agent` 派发后台任务后只能靠 `check_agent_task` 轮询，缺乏完成时的自动通知/回调。
  https://github.com/agentscope-ai/QwenPaw/issues/7056

- **#8171 [OPEN]: send_file_to_user 音频文件永久卡死会话（2 评论）**
  LM Studio 返回的 `At most 0 audio(s) may be provided in one prompt.` 未被音频回退 / 媒体能力分类器识别，属于 #7015 家族被拒形态，PR #7654 仍开放。
  https://github.com/agentscope-ai/QwenPaw/issues/8171

**诉求分析**：社区关注点明显从"能跑"转向"可控与可扩展"——插件主题扩展、自定义市场源、后台任务回调，均指向 **企业/自托管场景下的可运维性与扩展性**；同时 Console 前端的静默失败类 Bug 引发的讨论热度最高，说明交互可靠性是用户最敏感的痛点。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

**严重 / 高**

- **#8172 [OPEN] Console 聊天间歇性静默空完成**
  回合约 1 秒结束、模型从未被调用、前端无任何回复，用户完全无感知。**暂无对应 fix PR。**
  https://github.com/agentscope-ai/QwenPaw/issues/8172

- **#8171 [OPEN] send_file_to_user 音频文件永久卡死会话**
  错误被判为不可分类，导致会话 wedged。**部分相关：PR #7654 仍开放。**
  https://github.com/agentscope-ai/QwenPaw/issues/8171

- **#8222 [OPEN] `qwenpaw acp` 从不加载已安装插件**
  ACP 服务器未实例化 `PluginLoader`，ACP 会话中插件工具缺失，跨进程任务回调也无法唤醒。**暂无 fix PR。**
  https://github.com/agentscope-ai/QwenPaw/issues/8222

- **#8213 [OPEN] Hub 重启后 desired-running Local 运行时未恢复，cron 任务被静默跳过**
  直到有认证请求才恢复，定时任务静默丢失。**暂无 fix PR。**
  https://github.com/agentscope-ai/QwenPaw/issues/8213

**中**

- **#8206 [OPEN] Windows 下项目删除必然失败（WinError 5）**
  `qwenpaw-creator` v2.0.1，项目自身日志文件 `creator.log` 被占用导致重命名失败。**暂无 fix PR。**
  https://github.com/agentscope-ai/QwenPaw/issues/8206

- **#8179 [OPEN] 从 GitHub 安装 skill 静默损坏二进制文件**
  所有非 UTF-8 字节被替换为 U+FFFD，图片/字体不可读。**暂无 fix PR。**
  https://github.com/agentscope-ai/QwenPaw/issues/8179

- **#8218 [OPEN] 默认 agent 无法修改模型，且默认模型不可用**
  `mimo-v2.5-free` 已弃用导致 `MODEL_EXECUTION_ERROR`。**暂无 fix PR。**
  https://github.com/agentscope-ai/QwenPaw/issues/8218

- **#8177 [OPEN] Console basename 硬编码为 `/console`**
  反代子路径部署（如 `/qwenpaw/`）无法使用。**暂无 fix PR。**
  https://github.com/agentscope-ai/QwenPaw/issues/8177

- **#8202 [OPEN] 跨设备消息在整轮结束前不可见**
  用户消息仅在 run end 才持久化。**已有对应 PR #8203（待合并）。**
  https://github.com/agentscope-ai/QwenPaw/issues/8202

**今日已关闭（稳定性改善）**

- **#8088 [CLOSED]** 图片被路由到 `chat_with_image` 后陷入 Bash+PIL 裁剪循环并被静默取消。
  https://github.com/agentscope-ai/QwenPaw/issues/8088
- **#7981 [CLOSED]** `chat_with_agent` 前台超时误报"被用户中断"（由 PR #8098 修复）。
  https://github.com/agentscope-ai/QwenPaw/issues/7981
- **#8186 [CLOSED]** Console 消息导航跳转覆盖手动滚轮，约 1.6s 内不断回弹。
  https://github.com/agentscope-ai/QwenPaw/issues/8186

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关 PR / 状态 | 纳入可能性判断 |
|---|---|---|---|
| 自定义 Skill/Plugin 市场源（内网/离线） | #8015（已关闭） | PR #8128 已合并 | **已落地** |
| 插件级主题扩展点（语义 token 覆盖） | #8071 | 无 | 中，延续 #7741 主题系统演进 |
| 后台任务回调/通知机制 | #7056（8 月提出，持续活跃） | 无 | 中，但涉及核心 API 设计，周期较长 |
| skill-pool 下载改为可取消后台任务 | #8126 | 承接 #8055 | 较高，范围明确 |
| Console 宿主导航策略（侧边栏与设置共享） | #8223 | 无 | 中，面向策展/受控部署 |
| i18n 覆盖受保护执行契约 prompt | #8211 | 已有 scroll prompt i18n 先例 | 较高，模式可复用 |
| Firecrawl 作为第三个 web_search provider | #8199 | 提出者愿自行实现并维护 | 较高，维护成本低 |
| TypeSafe 作为模型 provider（区分 chat/decision 模型） | #8205（PR 已开，待合并） | PR #8205 | 高，已在推进 |
| 实验性 Python Code Mode | #8224（PR 已开，待合并） | PR #8224 | 高，属实验特性 |

**路线图信号**：插件系统正成为统一扩展面（Hub 已插件化、主题扩展点、导航策略均围绕插件 API 展开）；同时"可取消/可观测的异步任务"是反复出现的主题（#8126、#7056），暗示下一阶段可能补强任务生命周期管理。

---

## 7. 用户反馈摘要

**真实痛点**

- **部署形态多样化带来的适配缺口**：NAS + Docker（#8172）、Windows Server 2022（#8206）、反代子路径（#8177）、内网/离线（#8015）——用户群体明显偏向自托管与企业内网，对"开箱适配"要求高。
- **静默失败最令人不满**：#8172（无回复）、#8179（静默损坏二进制）、#8213（静默跳过 cron）三类问题都表现为"没有报错但结果不对"，用户难以自查。
- **跨端体验不一致**：消息发送后另一端不可见直到整轮结束（#8202），影响多设备使用信心。
- **模型生态兼容**：弃用模型仍为默认（#8218）、多媒体能力判定不一致（#8190 已修、#8171 未修）导致执行失败。

**满意/积极信号**

- 用户愿主动贡献：Firecrawl 团队表示愿意自行开发和维护 provider（#8199）。
- 反馈质量高：多条 Issue 附源码定位（如 #7056 指出 `submit_to_agent` / `check_agent_task` 调用链）、复现环境与版本，降低维护成本。
- 修复响应快：#7981、#8088、#8186 等当日或短期内关闭，正面体感良好。

---

## 8. 待处理积压

提醒维护者关注的长期未响应或高风险条目：

- **#7056 [OPEN] Background Task Callback / Notification Mechanism**
  2026-08-15 提出，已近两个月仍在开放，评论 2、无 👍。涉及核心任务模型设计，建议给出明确表态（接受/推迟/拒绝）。
  https://github.com/agentscope-ai/QwenPaw/issues/7056

- **#7565 [OPEN] [size/XXXL] feat(plugins): clean unload and rollback-safe hot reload**
  2026-09-04 创建，XL 级插件卸载与热重载改造，跨度超一个月仍待合并，是插件生态的关键基础。
  https://github.com/agentscope-ai/QwenPaw/pull/7565

- **#8071 [OPEN] Plugin-facing theme extension point**
  2026-10-01 创建，评论最多（3），但至今无关联 PR。
  https://github.com/agentscope-ai/QwenPaw/issues/8071

- **#8171 相关的 PR #7654**
  音频回退/媒体能力分类器的修复 PR 长期开放，而新的同类拒绝形态（#8171）已出现，建议优先推进合并。
  https://github.com/agentscope-ai/QwenPaw/issues/8171

- **待合并 PR 积压共 23 条**，其中 `#8224`（XXL，实验性 Python Code Mode）、`#8219`（XL，chunk 恢复稳定性）、`#8205`（L，TypeSafe provider）均为大改动，建议明确 review 排期以避免长期滞留。
  https://github.com/agentscope-ai/QwenPaw/pull/8224
  https://github.com/agentscope-ai/QwenPaw/pull/8219
  https://github.com/agentscope-ai/QwenPaw/pull/8205

- **#8223 [OPEN] Optional host navigation policy**
  当日新开、评论 1，涉及导航架构决策，建议尽早回应以避免后续返工。
  https://github.com/agentscope-ai/QwenPaw/issues/8223

---

*本日报仅基于所提供 GitHub 数据生成，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-10-13

## 1. 今日速览

ZeroClaw 今日维持高强度开发节奏：过去 24 小时共有 40 条 Issue 更新（新开/活跃 36，关闭 4）与 50 条 PR 更新（待合并 47，合并/关闭 3），无新版本发布。活跃度评估为**高位但合并吞吐偏低**——讨论与提交量充足，但 47 条待合并 PR 显示评审环节存在积压压力。今日讨论焦点集中在可观测性与成本账本（#11204、#11613、#10950）、持久记忆一致性（#8891、#11655）以及 A2A 协议模块化（#11254 / PR #11712）。稳定性方面存在多条已标注 `priority:p1` 的未修复 Bug，需优先关注。

---

## 2. 版本发布

无新版本发布（最新 Releases 为空）。当前相关工作仍挂靠在 `release:v0.8.6` 与 `release:v0.9.0` 追踪器下（见 #7432、#10999、#10996）。

---

## 3. 项目进展

今日合并/关闭共 3 条 PR，其中 1 条为依赖更新：

- **PR #11537 [CLOSED]** `chore(deps): bump the actions-all group ... with 5 updates`（dependabot，更新 2026-10-13）— GitHub Actions 依赖例行更新，已被更新版本 PR #11707（8 项更新）取代。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11537

今日关闭的 Issue 共 4 条，其中两条与 v0.8.6 插件/频道交付直接相关，构成今日可见的实质推进：

- **Issue #11108 [CLOSED]** `[Bug]: Preserve browser and search tool semantics instead of rewriting calls to shell`（作者 Xscaperrr）— 修复 `map_tool_name_alias()` 将 `browser_open`、`browser`、`web_search` 错误映射为 `shell` 的问题，恢复内置浏览器与搜索工具语义。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11108
- **Issue #10996 [CLOSED]** `[Feature]: Seed channel instance configuration and grants during plugin installation`（作者 JordanTheJet，`release:v0.8.6`）— 关闭说明 #11098 已合并工具插件授权流程，但频道实例的别名/实例配置种子与逐实例访问决策仍需后续工作。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10996
- **Issue #11088 [CLOSED]** `[Docs]: Move multi-agent setup guide from Contributing to Agents`（作者 Xscaperrr，`good first issue`）— 文档归类调整，多智能体设置指南从 Contributing 移出。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11088

**整体判断**：今日关闭项以修复与文档整理为主，无重大功能落地；项目向前推进幅度有限，主要动能仍停留在待合并队列中。

---

## 4. 社区热点

按评论数排序的今日高讨论条目：

| 条目 | 类型 | 评论 | 更新 | 链接 |
|---|---|---|---|---|
| #8692 Maintainer decision queue for RFCs and design issues | tracker | 15 | 2026-10-12 | https://github.com/zeroclaw-labs/zeroclaw/issues/8692 |
| #8891 Persistent memory — curation/relevance/operability parity | tracker (risk:high) | 11 | 2026-10-12 | https://github.com/zeroclaw-labs/zeroclaw/issues/8891 |
| #11254 RFC: A2A protocol crate (zeroclaw-a2a) | rfc (risk:high) | 9 | 2026-10-12 | https://github.com/zeroclaw-labs/zeroclaw/issues/11254 |
| #11420 [Bug]: SQLite session backend rewrites created_at of every message | bug (p1) | 8 | 2026-10-13 | https://github.com/zeroclaw-labs/zeroclaw/issues/11420 |
| #7432 Runtime and gateway delivery — v0.8.6 and v0.9.0 | tracker | 6 | 2026-10-13 | https://github.com/zeroclaw-labs/zeroclaw/issues/7432 |

**诉求分析**：

- **治理与决策瓶颈**（#8692，15 条评论）是评论数最高的条目，本身即为“维护者决策队列”。其高热度说明社区讨论量已超过决策吸收能力，与今日 47 条待合并 PR 的现象相互印证。
- **持久记忆是三线并进的主战场**：#8891（roadmap tracker，注明 7 个开放项 = 4 Issue + 3 PR）、#11235（RAG 知识语料 RFC，6 条评论）、#11655（Core 冲突压制的记忆误隐藏 Bug，3 条评论）同时活跃，反映社区对记忆一致性的高度关注。
- **A2A 模块化获得代码响应**：RFC #11254 于今日（2026-10-13）出现对应实现 PR #11712，设计讨论已转化为可评审代码。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11712

---

## 5. Bug 与稳定性

按严重程度排列（附是否已有对应 fix PR）：

**P1 / 高影响**

1. **#11420 [OPEN] SQLite session backend rewrites `created_at` of every message on each turn**（严重度 S2，risk:medium，8 条评论）— 每次会话轮次后 gateway 整体重写 SQLite transcript，导致所有行被写入相同 `created_at`，逐消息时间戳丢失。尚无 fix PR。
   https://github.com/zeroclaw-labs/zeroclaw/issues/11420
2. **#11204 [OPEN] OpenRouter spend 显示 $0.00，全部 token 被归类为 "free tok"**（S2，provider:openrouter，risk:high）— 约 90 次请求 / 约 2.1M token 后，Dashboard 的 Session/Daily/Monthly 成本均为 `$0.000000`，`usage.cost` 从未被摄取。**已有对应 fix PR #11670**（补充 `provider_cost_usd` 等字段）。
   https://github.com/zeroclaw-labs/zeroclaw/issues/11204 ・ https://github.com/zeroclaw-labs/zeroclaw/pull/11670
3. **#11606 [OPEN] `model_routing_config` 的 `upsert_agent` 重写整个 config**（S 级未标注，`status:in-progress`，risk:high）— 在 v0.8.5 中存在四类破坏：捏造 risk/runtime profile、丢弃字段、重置 agent 限制。已在处理中。
   https://github.com/zeroclaw-labs/zeroclaw/issues/11606
4. **#10777 [OPEN] thinking/effort 请求配置在轮次间翻转并重写整个缓存历史段**（provider:anthropic，`r:needs-repro`，risk:high）— 同一会话相隔 20 秒的连续两轮、同一 197 条消息历史，第二轮读 40,310 缓存 token、写 129,982。尚无 fix PR。
   https://github.com/zeroclaw-labs/zeroclaw/issues/10777

**P2 / 中等影响**

5. **#11613 [OPEN] 成本账本丢弃 provider 的 `total_tokens`**（S 级未标注，provider:compatible，risk:medium）— 对仅在 `total_tokens` 中报告 reasoning token 的 OpenAI 兼容 provider（如 Gemini），每轮成本被低估。**已有对应 fix PR #11670**（新增 `reasoning_tokens`、`provider_total_tokens`）。
   https://github.com/zeroclaw-labs/zeroclaw/issues/11613
6. **#10950 [OPEN] `cost.warn_at_percent` 预算警告被 runtime 忽略**（S2）— 用户配置后 ZeroCode 中看不到预算警告。尚无 fix PR。
   https://github.com/zeroclaw-labs/zeroclaw/issues/10950
7. **#11655 [OPEN] Core conflict supersede 在无向量分数时隐藏无关记忆**（S2，默认 `embedding_provider = "none"` 下触发）— `consolidate_turn` 会软隐藏与新 Core 更新无关的既有 Core 记忆。尚无 fix PR。
   https://github.com/zeroclaw-labs/zeroclaw/issues/11655

**测试稳定性**

8. **#11179 [OPEN] 偶发失败：`sop::engine::pending_park_retry_respects_pending_pool_cap`**（标注 S1 — workflow blocked，risk:low）— 测试跨越秒边界时间歇性失败，导致 `CI Required Gate` 变红。尚无 fix PR。
   https://github.com/zeroclaw-labs/zeroclaw/issues/11179

**已修复关闭**：#11108（工具别名误映射，见第 3 节）。

**成本/可观测性集群信号**：#11204、#11613、#10950 三条独立 Bug 指向同一子系统（成本账本与预算告警）。PR #11670 一次性覆盖前两条，是今日最值得优先评审的稳定修复。
https://github.com/zeroclaw-labs/zeroclaw/pull/11670

---

## 6. 功能请求与路线图信号

**已有 PR 直接对应、纳入可能性高**

- **A2A 协议模块化**：RFC #11254（`status:accepted`，9 条评论）已有实现 PR #11712（同日创建，size:XL），将 A2A 协议核心从 `zeroclaw-api` / `zeroclaw-tools` / `zeroclaw-gateway` 抽取为独立 `zeroclaw-a2a` crate。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11254 ・ https://github.com/zeroclaw-labs/zeroclaw/pull/11712
- **Tsubasa 自定义 provider 文档**：#11207（`type:docs`，priority:p3，明确说明“仅范围讨论，不提交代码或配置”）已由 PR #11674 落地为 OpenAI 兼容 provider 指南中的 Tsubasa (Fast/Pro) recipe。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11207 ・ https://github.com/zeroclaw-labs/zeroclaw/pull/11674
- **工具预提示（tool elicitation）**：#7431 v1 设计的第二片、也是最后一片，由 PR #10325 以默认关闭的 per-agent 运行时标志提供。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10325
- **上下文窗口溢出识别**：PR #11659 为 `is_context_window_exceeded` 增加 snake_case `code` 匹配，回应本地 OpenAI 兼容服务器的实际报错格式。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11659

**已接受、等待排期**

- **Gateway pairing token 绑定 roster 用户**：#10573（`status:accepted`）— v1 决策为将配对 token 绑定到 roster 用户以实现受限远程主体；基础依赖 #10248、#10259 已合并，等待实施。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10573
- **`search_routes` 提示式 provider 路由**：#11074（`status:accepted`）— 为 `web_search_tool` 增加类似 `[[model_routes]]` 的提示匹配路由，使单个 agent 可将需要一手来源的查询与需要独立核实的查询分派至不同 provider。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11074
- **RAG 知识语料**：#11235（RFC，`needs-author-action`）— 让 agent 能基于运营方自有文档、语言与工具文档、OS 参考等回答，属新子系统级能力边界，仍待作者补充。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11235

**路线图版本锚点**：#7432 追踪 v0.8.6 的 Phase 2 runtime 收尾与 v0.9.0 的 Phase 3 gateway 分离；#10999（`status:blocked`，`release:v0.8.6`）的剩余产品门禁是发布兼容的 Discord registry 包并从发布二进制完成端到端验证，其前置传输链已在 #11081 合并。
https://github.com/zeroclaw-labs/zeroclaw/issues/7432 ・ https://github.com/zeroclaw-labs/zeroclaw/issues/10999

---

## 7. 用户反馈摘要

**核心痛点**

- **成本与预算不可信**：用户 alperyilmaz 报告经过约 90 次请求、约 2.1M token 后 Dashboard 仍显示 `$0.000000`（#11204）；用户 Stealinglight 指出隐藏 reasoning token 导致每轮成本被低估（#11613）；用户 Audacity88 配置了 `cost.warn_at_percent` 却看不到预算警告（#10950）。三者共同指向“用户无法信任用量与花费数据”这一具体、可复现的不满。
- **数据保真度**：用户 joalvaradon 报告 SQLite 会话后端每一轮都重写整段 transcript，抹平逐消息时间戳（#11420），影响审计与调试场景。
- **配置写入的安全性**：用户 Audacity88 报告 `upsert_agent` 在 v0.8.5 中会重写整个 `config.toml`，捏造配置并重置 agent 限制（#11606）——这是数据丢失级别的操作风险。
- **缓存行为异常**：用户 Audacity88 报告 Anthropic provider 上 thinking/effort 配置在轮次间翻转，导致缓存历史被整段重写（#10777），直接影响成本与延迟。

**使用场景信号**

- 多 provider 混合部署真实存在：OpenRouter（#11204）、Anthropic 原生（#10777）、OpenAI 兼容本地/第三方服务（#11613、#11659）、Gemini（#11613）、Tsubasa（#11207）、Feishu/Lark 频道（PR #11669 修复扁平 `post` 正文解析）。
- 运营方希望 agent 能回答“自己文档里的问题”，而非仅依赖模型知识（#11235 RAG 请求）。
- 多智能体设置与频道插件安装是真实上手路径，相关文档归类（#11088）与安装种子配置（#10996）都已被处理。

**满意信号**

- 社区活跃度高，Issue 普遍获得多条评论并在同一日持续推进（多条 2026-10-13 更新）。
- 用户对已接受功能会主动跟进状态（如 #10573 记录“基础依赖已落地”，#10999、#10996 均写明“Current status — 2026-09-28”），说明协作流程被认可。

**不满意信号**

- 决策吞吐：维护者决策队列 #8692 累计 15 条评论，且今日仍为 OPEN，是评论数最高条目。
- 修复落地速度：多条 P1 Bug（#11420、#10777、#11204）创建于 9 月下旬至 10 月初，至今仍为 OPEN。

---

## 8. 待处理积压

**长期开放的追踪器与重要议题**

1. **#7432 [OPEN]** — v0.8.6 / v0.9.0 Runtime 与 Gateway 交付追踪器。创建于 **2026-06-09**，已开放逾 4 个月，是版本交付的事实源头。 https://github.com/zeroclaw-labs/zeroclaw/issues/7432
2. **#8692 [OPEN]** — 维护者决策队列，创建于 **2026-07-04**，今日评论数最高却仍未推进决策。 https://github.com/zeroclaw-labs/zeroclaw/issues/8692
3. **#8891 [OPEN]** — 持久记忆一致性追踪器（risk:high），创建于 **2026-07-09**，快照日期为 2026-08-29，已逾一个半月未更新快照。 https://github.com/zeroclaw-labs/zeroclaw/issues/8891
4. **#11204 [OPEN]** — OpenRouter 成本归零，`priority:p1`，创建于 2026-09-27，更新至 2026-10-13 仍无 fix 合并。 https://github.com/zeroclaw-labs/zeroclaw/issues/11204
5. **#10777 [OPEN]** — Anthropic 缓存历史整段重写，`priority:p1` + `r:needs-repro`，创建于 2026-09-11，因缺少复现而停滞。 https://github.com/zeroclaw-labs/zeroclaw/issues/10777
6. **#10999 [OPEN] [status:blocked]** — Discord 插件发布与端到端验证，`release:v0.8.6` 门禁，创建于 2026-09-20，受阻塞于 registry 包发布。 https://github.com/zeroclaw-labs/zeroclaw/issues/10999

**长期开放的 PR**

7. **PR #10430 [OPEN] [status:parking-lot, needs-author-action]** — Gemini speech-to-speech broker channel（PR1: daemon 侧核心），创建于 **2026-08-28**，size:XL，state 为 parking-lot，已停滞约 6 周。 https://github.com/zeroclaw-labs/zeroclaw/pull/10430
8. **PR #10325 [OPEN]** — pre-turn tool-elicitation hints（#7431 v1 第 2/2 片），创建于 **2026-08-24**，已开放约 7 周。 https://github.com/zeroclaw-labs/zeroclaw/pull/10325
9. **PR #11298 [OPEN]** — 取消轮次时同步取消其并行与 agentic delegate 子任务，创建于 2026-09-30，risk:high + risk:manual。 https://github.com/zeroclaw-labs/zeroclaw/pull/11298
10. **PR #11412 [OPEN]** — dashboard chat socket 经核心服务，size:XL，依赖 #11351 及其堆栈（另集成 #11368、#11391、#11392）。 https://github.com/zeroclaw-labs/zeroclaw/pull/11412

**维护者提示**：今日 50 条 PR 中仅 3 条合并/关闭，其中 1 条为依赖更新，而待合并队列达 47 条。叠加 #8692 决策队列的高讨论量，建议本周优先清空 Small/Medium 尺寸且风险可控的 PR（如 #11674、#11669、#11659、#11673、#11690、#11707），并推动 #11670 落地以一次性关闭两条成本类 P1/P2 Bug。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*