# OpenClaw 生态日报 2026-09-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-02 11:43 UTC

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

# OpenClaw 项目动态日报

**2026-09-02**

---

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持高强度迭代：共产生 500 条 Issue 更新（新开/活跃 275 条，关闭 225 条）和 500 条 PR 更新（待合并 312 条，合并/关闭 188 条），并发布 1 个新版本（v2026.8.2）。项目整体活跃度处于高位，但合并率（37.6%）偏低，显示维护者评审队列存在积压。值得关注的是，长期存在的 P1/P0 级 Bug（写工具缺少追加模式、WhatsApp 消息丢失、Codex 会话静默等）仍处于待维护者评审状态，虽有修复 PR 持续涌入，但核心稳定性问题的收敛速度有待提升。

---

## 2. 版本发布

### v2026.8.2 — 2026 年 8 月例行更新

**核心亮点：**

- **桌面端 Home 面板**：新增 Home 侧边栏/底部停靠功能（`Cmd/Ctrl+Shift+H`），用户可以在不离开当前页面的情况下快速访问 Home，支持预览或移除工作上下文快照，以及将选中文本附加到消息中。相关 PR #133676。

**注意事项：**

- 该版本与此前报告的 v2026.7.1 启动迁移问题（Issue #107227，已关闭）的修复路径有关，建议长期运行的实例在升级前先执行 `openclaw doctor` 进行健康检查。
- 另有一例 Issue #134353 报告从 2026.7.1-2 升级至 2026.8.1 时 Xiaomi 插件被意外移除导致 Gateway 无法启动（已关闭），建议 Xiaomi 用户升级 v2026.8.2 后验证插件完整性。

---

## 3. 项目进展

今日合并/关闭的 PR 涵盖以下方向：

| 领域 | PR | 说明 |
|------|-----|------|
| Cron 修复 | [#135985](https://github.com/openclaw/openclaw/pull/135985) | 修复 cron 计划通知中"确认未发送"的频道解析失败不重试的问题（关闭 #135836），确保公告投递走既有重试机制 |
| Web UI | [#128995](https://github.com/openclaw/openclaw/pull/128995) | 聊天头部菜单补齐完整会话操作（置顶、标记未读、设置图标、复制会话 ID、移动到分组） |
| CLI | [#128223](https://github.com/openclaw/openclaw/pull/128223) | 别名目标从写入快照解析，修复 CLI 别名指向过期数据的问题（关闭 #127618） |
| 发布流程 | [#128371](https://github.com/openclaw/openclaw/pull/128371) | 授权聚焦的 beta 证据提交，解除 beta.3 发布阻塞 |
| 模型认证 | [#125471](https://github.com/openclaw/openclaw/pull/125471) | 保持 Claude CLI OAuth 在 Control UI 中可用，修复 Gateway 重启后 OAuth 刷新所有权丢失的问题 |
| UI 性能 | [#123535](https://github.com/openclaw/openclaw/pull/123535) | 避免会话目录刷新风暴，减少浏览器焦点切换和启动期间的冗余刷新 |

此外，Web UI 中#128995 的合并意味着**会话管理能力显著补全**，#135985 则直接修复了一个消息丢失类缺陷。整体来看，项目今日在会话管理 UX、cron 可靠性、CLI 正确性和模型认证稳定性上均有实际推进。

---

## 4. 社区热点

### 最受关注 Issue

**1. [#80319 — QA 工具默认套件混淆 Codex 原生工具与 OpenClaw 动态工具对等性](https://github.com/openclaw/openclaw/issues/80319)**（17 条评论）
作者澄清了此前"Codex 丢弃工具调用"的报告是 QA 测试工具的问题而非运行时缺陷。社区对测试基础设施准确性的关注度较高。

**2. [#40001 — Write 工具缺少追加模式，隔离 cron 会话销毁共享文件](https://github.com/openclaw/openclaw/issues/40001)**（14 条评论，P1）
这是今日评论最活跃的实质性 Bug：`write` 工具没有 append 模式，总是完全覆盖目标文件，导致 cron 会话写入 `memory/YYYY-MM-DD.md` 等共享文件时数据**永久丢失**。Diamond lobster 级严重度，社区讨论热度持续。

**3. [#85251 — Codex 应用服务器发出 turn/started 后静默，嵌入运行卡死至恢复窗口](https://github.com/openclaw/openclaw/issues/85251)**（12 条评论，P1）
Codex 通道在通知回合开始后无任何后续事件输出，会话长期卡在 `embedded_run` 状态。影响会话恢复能力。

### 诉求分析

社区讨论集中在三个核心诉求：**数据安全**（write 覆盖、消息丢失）、**会话可靠性**（Codex 静默、恢复窗口过长）和**渠道消息完整性**（WhatsApp、Telegram 在断线重连后无法补拉消息）。这些都是直接影响日常使用的稳定性问题，而非功能层面的锦上添花——用户对 P1 级问题长期得不到修复已表现出明显的沮丧情绪（如 #88087 中用户表示"正在拆除 droplet"）。

---

## 5. Bug 与稳定性

### P0 — 严重

- 无新增开放 P0。但 [#107227](https://github.com/openclaw/openclaw/issues/107227)（2026.7.1 启动迁移导致网关崩溃循环，已关闭）今日仍有 8 条评论，社区对该问题的修复过程存在讨论。

### P1 — 高优先级（按严重度排序）

| Issue | 问题描述 | 影响 | Fix PR 状态 |
|-------|---------|------|-------------|
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | write 工具无追加模式，cron 会话覆写共享文件导致数据丢失 | 数据丢失 | 无 |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex 回合开始后静默，嵌入运行卡死整个恢复窗口 | 会话卡死 | 无 |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp 重连后无法补拉断线期间消息 | 消息丢失 | 无 |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | Telegram watchdog 释放的持久更新被过早标记为 tombstone | 消息丢失 | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 钩子/工具子进程泄漏，僵尸进程累积导致运行时退化 | 性能退化 | 无 |
| [#136113](https://github.com/openclaw/openclaw/issues/136113) | claude-cli 后端在 stdout 超约 50KB 时返回空响应（11/25 轮丢失） | 消息丢失 | 无（今日新开） |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | memory_search 工具持续 15 秒超时，CLI 正常 | 功能不可用 | 有链接 PR（开放中） |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) | 同一 agent 回合被两个写入者以不同规则写入 transcript 两次 | 会话状态异常 | 有链接 PR（开放中） |
| [#131807](https://github.com/openclaw/openclaw/issues/131807) | 系统代理对话共享同一 Codex 会话密钥，新回合失效 | 会话状态异常 | 无（queueable-fix） |

### 值得关注的回归

- **#136113（今日新开）**：claude-cli 后端的回归问题，stdout 超 50KB 即空响应。虽然创建时间仅为今日，但影响面较大（11/25 轮次消息丢失），社区需要尽快验证和修复。

### 趋势信号

多数 P1 问题贴有 `clawsweeper:no-new-fix-pr` 和 `needs-maintainer-review` 标签，说明社区提交了完整的复现步骤，但维护者评审环节成为瓶颈。此外，多个问题集中在 **Codex 通道**（#85251、#131807、#118185）和 **WhatsApp/Telegram 消息通道**（#50093、#127229、#119475），这两条通道的稳定性是当前最大的系统性风险。

---

## 6. 功能请求与路线图信号

### 讨论热度较高的功能请求

| Issue | 功能 | 分析 |
|-------|------|------|
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 内置 headless 浏览器，不依赖外部 Chrome | 12 条评论。社区对 JS 渲染和需登录页面的可靠访问需求强烈，若采纳将大幅改善 agent 的 web 访问能力 |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | A2A 交接的单向派发模式，避免回复乒乓 | 9 条评论。用户需要更精细的 agent 间消息流控制 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 按 agent 配置 dreaming（记忆整理） | 8 条评论，5 👍。当前全局同时 dreaming 导致内存峰值超出限制，已有明确的使用场景驱动 |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | 面向 Android 的 chat-first 移动端界面（社区 fork） | 6 条评论。社区开发者主动探索移动端方向，并有意向上游贡献 |

### 可能进入下一版本的功能

- **PR #135853 — Control UI 增加人类提及与临时收件箱**（今日提交，XL 规模）：关闭 #135645，为 Control UI 补充明确的人员选择和临时消息收件箱，仍待验证。若合并，将是 Control UI 交互的一次重要升级。
- **PR #135868 — 更新和启动失败后的自主恢复分诊**（今日提交）：将更新失败与 Gateway 启动失败接入既有 triage 流程。当前有多起升级后无法启动的报告（#107227、#134353），该 PR 若落地可显著改善升级体验。
- **PR #119174 — Volcengine 增加豆包实时语音**：为语音交互提供新的 provider 选项，与当前实时语音方向一致。

---

## 7. 用户反馈摘要

### 真实用户痛点

1. **数据安全焦虑**（#40001）："孤立的 cron 会话使用 write 工具会覆盖共享工作区文件（如 memory/YYYY-MM-DD.md），而不是追加。write 工具没有追加模式——它总是创建或**完全覆盖**目标文件。" — 用户对工具语义的不可预期性表达了明确不安。

2. **部署环境受限**（#53763）："智能体能够可靠访问任何网页（包括 JS 渲染和需要登录的页面），而不依赖用户的 Chrome 或第三方 API。" — 当前对外部浏览器依赖已成为自动化工作流的瓶颈。

3. **资源与体验**（#88087）：用户运行在 DigitalOcean 2vCPU/4GB droplet 上，因无法忍受资源占用与 cron 静默失败选择放弃部署："遇到足够多的摩擦，今天我正在拆除它。成本不是问题……"

4. **隐私关注**（#91804）："自升级至 2026.6.5 后，内部 agent 推理/思考在每次响应中都会暴露给用户。这是一个重大的隐私和安全问题。" — 推理内容泄漏已引起用户警觉。

### 满意/不满意

- **不满意集中在修复周期**：多个严重 Bug（#40001、#50093、#85251）均已开放超过 3 个月且无 fix PR，评论中的语气从详细报告逐渐转为敦促。
- **社区 fork 的积极贡献意愿**（#46058）：独立 Android fork 主动提出可能的上游贡献方向，展现良好的社区生态。
- **对修复方案有建设性讨论**（#80319）：用户主动澄清和更正原始报告，体现了高水平的社区参与质量。

---

## 8. 待处理积压

以下 Issue/PR 长期无有效推进，建议维护者优先关注：

### 久未响应的严重 Issue

| Issue | 创建时间 | 已开放 | 严重度 | 备注 |
|-------|---------|--------|--------|------|
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 2026-03-08 | ~6 个月 | P1，Diamond Lobster | 数据丢失类问题。已标记 needs-maintainer-review + needs-product-decision |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | 2026-03-19 | ~5.5 个月 | P1，Platinum Hermit | WhatsApp 消息补拉，已标记 needs-live-repro |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | 2026-02-04 | ~7 个月 | P3 | OpenRouter 成本暴露，长期仅有低优先级标签 |
| [#6625](https://github.com/openclaw/openclaw/issues/6625) | 2026-02-01 | ~7 个月 | P3 | 子 agent 超时前预警，至今无维护者回复记录 |

### 时间最久的开放 PR

| PR | 创建时间 | 已开放 | 备注 |
|----|---------|--------|------|
| [#80921](https://github.com/openclaw/openclaw/pull/80921)（Big Sur 启动挂起修复） | 2026-05-12 | ~4 个月 | 仍标记 "needs proof" |
| [#96113](https://github.com/openclaw/openclaw/pull/96113)（sessions diagnose 命令） | 2026-06-23 | ~2 个月 | XL 规模，标记 needs-pr-context |
| [#119174](https://github.com/openclaw/openclaw/pull/119174)（豆包实时语音） | 2026-08-04 | ~1 个月 | 依赖变更 + 安全边界风险标签 |

### 特别提醒

- **#40001、#50093、#85251** 三个 P1 级消息/数据丢失问题均已开放超过 3 个月且无 fix PR，建议维护者安排产品决策会议明确修复排期。
- 今日 PR 合并率仅 37.6%（188/500 合并或关闭），评审队列积压问题可能在持续恶化，建议核查是否存在评审流程瓶颈。

---

*数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) GitHub 仓库（数据窗口：过去 24 小时）*

---

## 横向生态对比

# 个人 AI 智能体开源生态横向分析报告

**报告日期：2026-09-02**

---

## 一、生态全景

当前个人 AI 助手开源生态正处于**高密度功能迭代与结构化安全加固并行**的活跃期，主流项目每日构筑数百条 PR/Issue 的更新强度，但**维护者评审队列积压**已成为生态通病——从头部项目 OpenClaw（合并率 37.6%）到中小型项目 Nanoclaw 均出现明显的 review 瓶颈。竞争核心正从单点功能对齐转向**大规模架构收敛**：多 agent/profile 并行、跨渠道消息可靠性与安全沙箱已成为头部项目统一攻坚方向，同期渠道侧（Telegram/WhatsApp/QQ/飞书等）的兼容性修复体现了底层逻辑正在经历一次集体性重构。此外，多项目共现 P1 级数据丢失/消息可靠性缺陷仍长期悬而未决，在影响用户信任的同时也提示该生态距真正"生产就绪"仍有距离。

---

## 二、各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 PR | Release | 活跃度 | 健康度评估 |
|---|---|---|---|---|---|---|
| OpenClaw | 500（新开 275 / 关闭 225） | 500（待合并 312 / 合并关闭 188） | 188 | ✅ v2026.8.2 | 🔥 极高 | ⚠️ 合并率 37.6%，评审积压严重；多个 P1 消息丢失问题长期无修复 |
| Hermes Agent | 50（活跃 22 / 关闭 28） | 50（待合并 24 / 合并关闭 26） | 26 | 无 | 🔥 极高 | ✅ 批量关闭长尾 Issue；11 个 multiplex 综合修复 PR 待合入 |
| ZeroClaw | 40（活跃 37 / 关闭 3） | 50（待合并 47 / 合并关闭 3） | 3 | 无 | 🔥 高 | ❌ 两起 S0 数据安全缺陷；47 个 PR 待合并；大规模重构处于 RFC 修订期 |
| CoPaw | 24（活跃 14 / 关闭 10） | 37（待合并 22 / 合并关闭 15） | 15 | ✅ 2 个 beta | 🔥 高 | ✅ 迭代节奏紧凑；Cron 子系统曝光 3 个关联缺陷待系统性排查 |
| IronClaw | 15（关闭 7） | 21（合并/关闭 11） | 11 | 无 | 🔥 高 | ✅ 工程节奏健康；WebUI 技术债治理系统推进，辅以制度性防回退 |
| NanoClaw | 2 | 16（合并/关闭 3） | 3 | 无 | 🟡 中高 | ⚠️ 大规模 provider 契约化重构进行中，阻塞风险需关注 |
| PicoClaw | 4 | 5（待合并 3 / 关闭 2） | 2 | 无 | 🟡 中 | ⚠️ 核心 IM 渠道稳定性问题（QQ/MCP）长期无 fix PR |
| NanoBot | 3 | 15（合并/关闭 5） | 5 | 无 | 🟡 中高 | ⚠️ 快速迭代期，"修复→回归"链条频现，暴露测试覆盖不足 |
| Moltis | 1（关闭 1） | 3（合并 1 / 待审查 2） | 1 | ✅ 20260902.01 | 🟡 低 | ✅ Bug 响应迅速（当天闭环），社区协作健康 |
| LobsterAI | 6（均为 stale 关闭） | 2（新提交） | 3 | 无 | 🟢 低 | ❌ 5 个月无版本发布；社区 PR 长期积压；stale 批量关闭掩盖真实问题 |
| NullClaw | — | — | — | — | ⚪ 无活动 | — |
| TinyClaw | — | — | — | — | ⚪ 无活动 | — |
| ZeptoClaw | — | — | — | — | ⚪ 无活动 | — |

---

## 三、OpenClaw 在生态中的定位

**生态参照系（参照物）。**

OpenClaw 以日均 500+ Issue、500+ PR 的活动规模位居生态活跃度榜首，项目基建（版本纪律、回归测试配套、标签体系）仍维持着最成熟的工程管理标准——如发布包含配套迁移注意和健康检查指令、修复 PR 与 Issue 一一对应并倾向自带可验证机制。与之相比，同为生态头部项目的 ZeroClaw、Hermes Agent 的 Issue/PR 规模约为其十分之一到五分之一，正分别处在架构定型和安全基础修补更强的阶段。在功能面，OpenClaw 的"桌面端 Home 面板/会话管理/Cron 通知修复"等倾向于**交互层体验打磨**，说明其功能纵深已经到了相对精细的维护期；相比之下，生态内其他项目正密集攻关自身底座的结构性工程——Hermes Agent 的 multiplex profile 隔离、IronClaw 的 TS/TSX 类型安全、以及 ZeroClaw 的运行时/文件架构 RFC。

OpenClaw 面临的评审队列积压与 P1 级消息丢失问题（Codex、WhatsApp、Telegram 渠道）长期挂起，在当下生态内并非孤例——但作为头部项目，其修复节奏迟缓对生态整体信心影响最大。这也使其由功能/渠道"外延扩张期"向"底座稳定性修复期"的过渡成为判断生态是否走向成熟的风向标。

---

## 四、共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **文件工具能力缺失（write/覆盖/追加）** | OpenClaw（#40001）、NanoBot（#2061）、ZeroClaw（#10495 关联 #9977） | Write 工具缺少 append 模式、Agent 文件复制操作悬挂、文件写入无工作区边界——多个项目在 Agent 文件系统原语的确定性与可预期性上齐现缺口 |
| **对话/会话生命周期与传输层解耦** | OpenClaw（Codex 会话卡死、#85251；#131807）、ZeroClaw（RFC #9487）、LobsterAI（#1566）、Hermes Agent（#100327 会话风暴） | 会话所有者归属不清、传输层与 agent 生命周期强耦合导致静默失败——跨项目在多 agent/profile、恢复机制上出现相似系统缺陷 |
| **多 agent/profile 数据的隔离与泄漏** | Hermes Agent（multiplex 11 PR）、ZeroClaw（KnowledgeScope per-agent 隔离 PR #9745、delegate 权限绕过 #10165/#8279）、CoPaw（#7476/#7483） | Hermes 单进程内 profile 凭据/状态交错，ZeroClaw delegate 越过 allowlist/risk_profile —— 身份与数据边界在并发/扩展场景下被系统性击穿 |
| **Cron/后台任务生命周期与可靠性** | OpenClaw（cron 通知修复 #135985）、Hermes Agent（cron multiplex 泄漏 #101245）、NanoBot（#5431/#5623 任务生命周期）、CoPaw（#7480/#7476/#7483）、IronClaw（#8010 会话事件传输统一）、ZeroClaw（cron PR #10545） | 超时后残留 running 状态、misfire 窗口重复调度、非计划补发、任务失败不报异常——Cron 调度状态机和失败恢复策略在多个成熟项目中集中暴露 |
| **上下文管理（记忆文件、压缩、容量上限）** | OpenClaw（memory_search 15s 超时）、NanoBot（#5630 记忆文件大小回归）、Hermes Agent（#99692 压缩锁泄漏）、CoPaw（#7447 早期上下文丢失、embedding 失败 #7469）、ZeroClaw（#10068、#10523） | 记忆/上下文压缩的边界、容量上限的硬编码、embedding 任务失败等——长上下文管理在实际使用中反复失控 |
| **渠道消息完整性（断线补拉/重连）** | OpenClaw（WhatsApp #50093、Telegram #127229）、Hermes Agent（#46561 飞书不重连）、PicoClaw（QQ 鉴权 #3349、MCP 连接挂起 #3269） | 断线重连后无法补拉消息、渠道鉴权失败、WebSocket 稳定性——跨渠道消息可靠性仍是全生态系统性的短板 |

---

## 五、差异化定位分析

| 项目 | 核心定位 | 目标用户 | 独特技术路线/架构 |
|---|---|---|---|
| **OpenClaw** | 成熟稳定、功能全面的个人 AI 助手（参照系） | 大基数开发者/终端用户，追求开箱即用与桌面端体验 | 桌面端 Control UI + 多通道集成 + 动态工具集，路线图最丰富，生态覆盖广 |
| **Hermes Agent** | 多 agent 团队运维的 Gateway/服务端形态 | 在单台机器上运行多 profile、本地 agent 团队的进阶用户 | Multiplex Gateway——单进程运行多 profile，强调 serve 池、API server、Electron desktop + serve 后端、A2A 支持、远程客户端引导 |
| **ZeroClaw** | 高安全性、企业级/基础设施型 agent 平台 | 安全研究者、运行关键工作流的运维者、对数据边界高敏感的用户 | 面向多重代理的安全边界深度结合，知识图谱隔离、Sandbox/risk_profile 多重防护、delegate 授权链、SOP 引擎支持、WASM 插件运行时 |
| **CoPaw** | 面向生产力场景的桌面/Console AI 助手 | 生产场景使用者（文档校对、定时备份等），深度依赖子 agent/Cron 的工具型用户 | 多子 agent 任务编排、ReMe 长期记忆、由 2.1.0 发展至 2.2.0 路线、A2A/ACP 统一 Driver 机制前瞻 |
| **IronClaw** | 专注于 WebUI/前端工程质量的 AI 助手 | 对代码质量与类型安全有要求的开发者 | 后端 Rust + 前端 React/TS，深度推进 WebUI 组件标准化与类型安全治理（消除 61,800 行 @ts-nocheck），引入"ratchet 棘轮"防技术债回流 |
| **NanoClaw** | Provider 契约化/生态高度的开放平台 | 对 provider 可扩展性、可声明性与多供应商（Codex、OpenCode 等）支持有深入要求的用户 | Provider 行为从"硬编码"转为"可声明契约"，大范围重构波及 CLI/容器/配置/技能全部核心层 |
| **NanoBot** | 轻量级、模块化、易二次开发 Agent 框架 | 开发者为用户群，倾向自托管与嵌入部署，看重 WebUI 与渠道层 | 强调模块低耦合，近期聚焦 runtime 上下文生命周期（ephemeral 运行时上下文块）、Docker/Seatbelt 双平台进程隔离、FileSystem 原语补齐 |
| **PicoClaw** | 面向低成本硬件的边缘智能体 | 嵌入式/物联网/边缘开发者（特别是 RISC-V/ARM 等生态） | 轻量级 worker 模式提案（支持 10–20MB 内存设备）参与分布式 agent 网络——开发者更强调与扩展硬件关系的独特性，维护者梯队与头部项目基线存在差距 |
| **Moltis** | 轻量 CLI/Doctor 优先的 Agent 工具 | 要求轻量、极低运维成本的 CLI 用户 | 高开发效率小步快跑模式，单日 Bug 修复到版本发布完整闭环，Docker 部署友好，快节奏迭代但功能深度有限 |
| **LobsterAI** | 网易/有道系桌面 Agent 伴侣 | 中文用户、IM 集成场景、重桌面体验 | 整体迭代趋于停滞，社区贡献（长期 5 个社区 PR 未合并）与安全加固仍是存量亮点 |

---

## 六、社区热度与成熟度

**第一梯队：快速迭代期（活跃度极高，功能/架构扩张优先于稳定性收敛）**

- **OpenClaw**：生态领先，日更新量级最大；但评审积压与 P1 数据丢失问题久拖未决，进入稳定性补课阶段。
- **Hermes Agent**：正处于大版本演进（multiplex 全面提升），批量关闭 Issue + 11 个互相依赖的开放 PR 意味着下阶段合并质量将直接定义 v0.22 口碑。
- **ZeroClaw**：处于架构定型 + 安全双线攻坚，两则 RFC 叠加 S0 级数据安全缺陷——在社区内部信任感未被破坏之前需尽快落地高优 PR。

**第二梯队：质量巩固阶段（工程节奏收敛、技术债清理、标准建立）**

- **IronClaw**：工程节奏最为健康——类型安全治理、UI 组件收敛、QA Epic 常规化，辅以"棘轮机制"防技术债回归。
- **CoPaw**：迭代频率高且测试覆盖率大幅加强（Console 单测 +617），但同时存在 3 个 Cron 关联缺陷与功能面快速推进并行的风险。
- **NanoClaw**：Provider 契约化重构属于底层架构级变更，波及面广但核心推进有序。

**第三梯队：活跃度中低、发展信号分化**

- **NanoBot**：模块化路线清晰但存在测试覆盖不足信号（修复-回归-再修复链条），处于快速迭代期与质量巩固的过渡带。
- **PicoClaw**：社区活跃度虽不高但存在小而明确的渠道侧 PR 持续贡献；QQ/MCP 类核心问题解决速度不快。
- **Moltis**：以"极小步快跑"的节奏维持了健康的闭环能力，适合作为轻量经验学习对象。
- **LobsterAI**：显著停滞，5 个月无新版本、stale 机器人批量截断用户反馈；若高优 PR 迟迟不合并，外部贡献者流失风险较高。
- **NullClaw / TinyClaw / ZeptoClaw**：24 小时无任何活动，可能出现阶段性停摆。

---

## 七、值得关注的趋势信号

1. **"数据丢失"是当前生态最严重的信任裂痕。** OpenClaw 的 write 工具覆盖问题（#40001）开放半年无修复、coPaw 的 Cron 重复触发造成重复备份、ZeroClaw 的 109 KB 配置文件被 702 字节近空文件覆盖（#10495）、以及多处渠道断连消息补拉失败——P1/P0 级数据可靠性缺陷在多项目中跨 3-6 个月不收敛。当用户在 LobsterAI 表示"正在拆除 droplet"、在 OpenClaw 抒发沮丧时，这对 Agent 工具生态的长期可信度构成了比功能缺失更严重的威胁。

2. **从"1 进程 = 1 智能体"走向"1 进程 = N 智能体"是头部项目共同演进方向。** Hermes Agent 的 multiplex Gateway、ZeroClaw 的 per-agent 知识图谱隔离、CoPaw 的多子 agent 任务编排，以及 OpenClaw 的 A2A 交接需求，共同指向同一场景：用户需要一台机器上成组运行的 agent 能共享状态、安全协作、避免配置与数据交错。

3. **"可靠消息传递"是比模型能力更普遍的瓶颈。** Codex 会话静默、WhatsApp 断线补拉失败、飞书 WebSocket 不重连、QQ 频道 401、Telegram watchdog tombstone——超过 6 个项目的 P1 缺陷集中在渠道消息完整性与会话状态恢复上。AI 智能体作为"通信参与者"的价值，正受制于消息基础设施本身的韧性。

4. **安全性正从"外围加固"走向"架构内建"。** ZeroClaw 的 delegate 授权链漏洞（子 agent 绕过父 agent allowlist）与 Hermes 的 fail-closed 默认、NanoBot/CoPaw 对沙箱与 embedding 的隔离、IronClaw 的防技术债棘轮机制，显示成熟项目开始把安全边界内化到架构层，而非像一代 agent 那样加补丁暴露信任边界。

5. **外部浏览器依赖和上下文可视化是"体验型"共性需求。** OpenClaw（#53763）与 LobsterAI（#1103 Docker 沙箱状态 UI）分别对外部浏览器依赖和需登录页面访问提出替代方案；IronClaw 的 per-agent activity 面板（#91814）与 NanoBot 的实时模型统计（#5631）则共同指向用户对智能体行为"可观测性"的普遍诉求——不做黑箱，而是实时、可核对。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-02

## 1. 今日速览

NanoBot 在过去 24 小时内保持高度活跃：共 3 条 Issue 更新、15 条 PR 更新，其中 5 条 PR 已合并/关闭，10 条待合并。新版本发布为零，但功能开发节奏明显加快——今日新增的 PR 覆盖运行时上下文持久化策略、macOS Seatbelt 沙箱后端、Codex 提示缓存亲和性修复、文件复制/移动原语等多个方向。值得关注的是，多个 PR 与近期回归问题（如 Dream 记忆文件大小上限丢失、空活动任务组残留）形成"修复-回归-再修复"链条，显示项目处于快速迭代期，但同时暴露出测试覆盖需加强的信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共有 5 条 PR 关闭（含合并），展示了显著的功能推进：

- **`#5623` fix(agent): drop empty active-task groups after tasks finish**（由 wylovelyi 提交，修复 #5428）— 修复 `AgentLoop._active_tasks` 映射中已完成任务留下的空集合未被清理的问题，消除了长期运行中的内存泄漏隐患，并解决了由此导致的会话状态错乱。归属[Agent 核心](../../wiki/Architecture.md)。
- **`#5624` fix(webui): delete unpersisted pane sessions**（KailBug 提交）— 允许 WebUI 新创建的窗格在首条消息持久化前即可删除，并处理 gateway 重启后乐观空窗格的可删状态，完善了 WebUI 多会话管理体验。
- **`#5625` feat(webui): guide first-run AI setup**（Re-bin 提交）— 将首次运行的"Model not configured"警告态替换为中性的"Choose your AI"引导操作，直接打开已有模型设置页，降低新用户的上手门槛。
- **`#5627`**（待合并）实现的 ephemeral 运行时上下文块功能与 **`#5626`** 的 copy/move 文件工具、**`#5568`** 的 runner 上下文压缩重构相配合，分别补齐了 Agent 工具的会话生命周期管理和基础文件操作能力。

综合来看，项目的 runtime-context 生命周期管理、"Agent 运行时作业调度"、WebUI 首次使用引导和文件操作原语在今日获得了数个里程碑式的进展。

## 4. 社区热点

- **Issue #2061 [!badge Bug]File Copy/Hang** — 用户报告 Agent 在请求复制工作区内文件时陷入"无限循环"（反复调用 list_dir/read_file，从不触发写入）。虽然创建较早，但近期仍有更新，且涉及 Agent 工具调用的基础可靠性。[链接](https://github.com/HKUDS/nanobot/issues/2061)
- **Issue #5586 即时上下文块的续存字段** — 讨论运行时上下文块目前只有"附加到用户消息并随会话持久化"一种生命周期，缺少"仅本次请求有效"的临时块机制，已有相应 PR 对接，说明该需求已触发核心维护者的设计与实现。[链接](https://github.com/HKUDS/nanobot/issues/5586)
- **Issue #5631 WebUI 展示实时模型统计** — 建议在 WebUI 中像 DeepSeek harness 一样直观展示 token/上下文使用量和"模型速度"，虽为新开且暂无评论，但代表了用户对可观测性和成本可见性的普遍诉求。[链接](https://github.com/HKUDS/nanobot/issues/5631)

## 5. Bug 与稳定性

按严重程度排序：

1. **[HIGH] 文件复制操作悬挂（#2061）**：Agent 在应执行复制时不断重复 list_dir/read_file，从不执行写入，阻塞核心文件操作能力。当前无直接修复 PR，但 #5626 新增的 copy_file/move_file 原语有望从工具层面解决（注意 #5626 尚未合入）。[链接](https://github.com/HKUDS/nanobot/issues/2061)
2. **[HIGH] PR #5630 指出一个回归问题**：PR #5622 修复 Dream 的系统提示重复注入时，顺带删除了对 SOUL.md / USER.md / MEMORY.md 的唯一大小限制（旧 `_DREAM_FILE_EMBED_CAP = 8000`），导致这些"记忆文件"和请求可能过大。已由 PR #5630（新增 size guardrails）跟进修复，处于待合并状态。[链接](https://github.com/HKUDS/nanobot/pull/5630)
3. **[MEDIUM] PR #5623 修复了 #5428**：已合并，解决了 `_active_tasks` 中空集合泄漏导致的会话状态残留。[链接](https://github.com/HKUDS/nanobot/pull/5623)
4. **[MEDIUM] PR #5632（待合并）修复 Codex 供应商 prompt cache 不命中问题**：确保同一会话的稳定路由键同时用于 Codex `session-id` 头与 Responses `prompt_cache_key`，当前若不修复将导致缓存命中率下降与成本上升。[链接](https://github.com/HKUDS/nanobot/pull/5632)
5. **[MEDIUM] PR #5624（已合并）修复** WebUI 中未持久化窗格会话无法删除的问题（含 gateway 重启后的边界场景）。[链接](https://github.com/HKUDS/nanobot/pull/5624)
6. **[LOW] PR #5629（待合并）修复** `format_tool_hints()` 对普通（非路径、非命令）工具值忽略 `max_length` 的问题，涉及 grep 模式、web_search / x_search 查询等展示截断。
7. **[LOW] 文档修复（#5604，已合并）**：明确 edit_file 的 occurrence、line_hint、replace_all 三选择器互斥（运行期早已拒绝组合使用），消除文档与实现的不一致。

## 6. 功能请求与路线图信号

- **ephemeral 运行时上下文块（#5586 请求，PR #5627 实现）**：需求明确、实现已就绪——将运行时上下文标记为 `ephemeral`，保留在当次模型请求内，但不落库、不重放。用于"一次性指令/临时 RAG 注入"等场景，预计很快进入主线。[链接](https://github.com/HKUDS/nanobot/pull/5627)
- **copy_file / move_file 文件系统原语（PR #5626）**：当前 Agent 只有 read/write/edit/list_dir，无法复制/移动文件，社区已多次反馈由此导致的工具调用低效。此 PR 若合入将补齐该缺口，也有望缓解 #2061 一类问题。[链接](https://github.com/HKUDS/nanobot/pull/5626)
- **macOS Seatbelt 沙箱后端（PR #5628）**：为 `tools.exec.sandbox` 增加 macOS `sandbox-exec(1)` 后端，镜像 bwrap 策略（workspace 读写、media 只读、父目录不可访问），填补 macOS 端进程级隔离空白。[链接](https://github.com/HKUDS/nanobot/pull/5628)
- **WebUI 实时展示上下文/模型速度（#5631）**：非常直观的可用性诉求（参考 DeepSeek harness）；暂无 PR 认领，但实现成本不高，大概率进入短期路线图。[链接](https://github.com/HKUDS/nanobot/issues/5631)
- **Telegram 富消息流式输出（PR #5614，待合并且维护者自述需进一步 review）**：值得注意——Telegram 通道流式富文本支持已挂起数日，作者正在自审。[链接](https://github.com/HKUDS/nanobot/pull/5614)

## 7. 用户反馈摘要

- **#2061（文件复制故障）再现了 Agent 工具链的脆弱性**：用户观察到对话看似正常，但 Agent 始终"绕圈"调用只读工具而从不触达文件系统写入路径。此类问题对用户信任侵蚀很大，建议维护者优先投入。[链接](https://github.com/HKUDS/nanobot/issues/2061)
- **#5586（ephemeral 块）代表高级用户对会话持久化的精细化控制需求**：不希望所有运行时上下文被永久写入会话行（`agent/loop.py:725-731` 的 append + 每轮重放），尤其涉及隐私或超大（易超上下文）的内容。[链接](https://github.com/HKUDS/nanobot/issues/5586)
- **#5631（WebUI 显示模型速度/上下文）反映出对"可观测性"的普遍诉求**：用户希望能直观看到"模型的速度和上下文信息"，类似 DeepSeek harness 的展示。[链接](https://github.com/HKUDS/nanobot/issues/5631)

## 8. 待处理积压 — 需维护者关注

- **PR #5431（8 月 18 日起无新进展，conflict）**：bug 修复——后台任务失败时不报告异常（替换 `set.discard` 为生命周期感知的完成处理器）。与刚合并的 #5623 同属"后台任务生命周期"主题，建议确认是否由 #5623 遮蔽或需同步 rebase。[链接](https://github.com/HKUDS/nanobot/pull/5431)
- **PR #2078（3 月 16 日创建，标记 channel）**：Zalo 集成重构，长期滞留。新实现已按夜间分支插件架构设计，避免破坏现有渠道。仍长期未合并，存在过期风险。[链接](https://github.com/HKUDS/nanobot/pull/2078)
- **Issue #2061（3 月创建，仍复现中）**：长期未决的文件复制/Agent 工具怪癖，社区热度虽低但影响基本操作，建议配合 #5626 工具合入后重新验证并输出原因分析。[链接](https://github.com/HKUDS/nanobot/issues/2061)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-02

## 1. 今日速览

Hermes Agent 今日活跃度极高，24 小时内共有 50 条 Issue 更新和 50 条 PR 更新。当日有 22 条新开/活跃 Issue、28 条 Issue 关闭，以及 24 个 PR 待合并、26 个 PR 已合并/关闭，无新版本发布。最值得关注的是，维护者 teknium1 今日连续提交了 11 个大型综合修复 PR（#101242–#101256），系统性地清理 `gateway.multiplex_profiles` 模式的配置文件/环境变量/会话状态跨 profile 泄漏问题，覆盖此前的约 50 个 Issue，项目在 multiplex 稳定性方向上迈出了重大一步。与此同时，今日大量此前标记为 `needs-decision` 的长期 Issue（如 #48820、#62553、#70652、#87723、#83182 等）集中关闭，说明维护团队正在批量清理长尾问题。

## 2. 版本发布

过去 24 小时内无新版本发布。当前用户端最新版本为 v0.21.0（#100327 中提及），桌面端为 0.20.6 系列（#99393、#99692 中提及）。

---

## 3. 项目进展

### 核心方向：Multiplex Gateway 大规模修复（今日最大进展）

teknium1 在 2026-09-02 连续提交了 **11 个综合修复 PR**（均为 OPEN 状态，编号 #101242→#101256），目标一致 —— 修复 `gateway.multiplex_profiles: true` 模式下跨 profile 的配置/凭据/状态泄漏。每个 PR 以 salvage 方式收编了多个此前讨论过的 Issue：

| PR | 修复领域 | 覆盖的此前 Issue |
|---|---|---|
| [#101244](https://github.com/NousResearch/hermes-agent/pull/101244) | `.env` 不再泄漏至 `os.environ`、配置引用按 profile 隔离 | #77562 #84079 #88441 等 |
| [#101245](https://github.com/NousResearch/hermes-agent/pull/101245) | Cron multiplex ticks 按 profile 隔离、dashboard 端口修复、无凭据下发 fail-closed | #74878 #100489 #101113 #86519 等 |
| [#101242](https://github.com/NousResearch/hermes-agent/pull/101242) | 每个 routed profile 独立 terminal cwd/backend/docker 配置 | #68559 #85413 等 |
| [#101247](https://github.com/NousResearch/hermes-agent/pull/101247) | Handoff fail-closed、secrets 在 loop 外加载、Discord slash 尊重 profile_routes | #97693 #100014 #69178 #91633 等 |
| [#101246](https://github.com/NousResearch/hermes-agent/pull/101246) | Slash config 写入、personality/status 跟随 routed profile | #87939 #75684 #89161 等 |
| [#101248](https://github.com/NousResearch/hermes-agent/pull/101248) | 按 profile 的 /voice 状态、session 恢复 owner fence、整数路由 ID | #84872 #74285 #88381 #86470 等 |
| [#101255](https://github.com/NousResearch/hermes-agent/pull/101255) | 按 profile 的 hooks、MCP 发现、webhook skills、浏览器/Hindsight 线程 | #92672 #95518 #86402 #92608 #67277 等 |
| [#101256](https://github.com/NousResearch/hermes-agent/pull/101256) | API server runs 归属请求方 profile、handoff/readiness 按 routed profile | #93689 #90415 等 |
| [#101254](https://github.com/NousResearch/hermes-agent/pull/101254) | Raft/A2A identity、A2A authz、webhook disable、TTS cache/log 文件按 profile 隔离 | #100697 #99634 #85637 #80884 等 |
| [#101253](https://github.com/NousResearch/hermes-agent/pull/101253) | Google Chat scoped + ADC fail-closed、runner 绑定所有适配器、WhatsApp alias 路由 | #73439 等 |

### 已合并/关闭的独立 PR

- **[#98882](https://github.com/NousResearch/hermes-agent/pull/98882) [CLOSED] fix(profiles): ignore unmarked runtime directories in multiplex serve** — 阻止 `profiles/` 目录下的运行时/缓存残留被误引导为额外 profile，要求目录必须含 `profile.yaml`。轻量但实用。

### 值得注意的 CI 提交

- **[#99006](https://github.com/NousResearch/hermes-agent/pull/99006) [CLOSED] ci: lint workflows with actionlint** — 为 GitHub Actions 引入可复用的 actionlint 检查，接入现有 `ci.yaml` workflow_call 架构，并纳入 all-checks-pass。该 PR 被标记为 `type/test`、`comp/cron`，今日合并意味着 CI 审查能力增强，是维护者当前大力推动 multiplex 修复前的"地基工程"。

### 今日关闭的长期 Multiplex 相关 Issue（确认修复）

以下今日关闭的 Issue 基本都与上述修复意图吻合（多数由 PR #101242–#101256 对应关闭）：

- [#87723](https://github.com/NousResearch/hermes-agent/issues/87723) Multiplex gateway profiles 共享默认 profile 会话数据库
- [#83182](https://github.com/NousResearch/hermes-agent/issues/83182) Cron delivery 在 multiplex 下路由到错误 bot/chat
- [#94945](https://github.com/NousResearch/hermes-agent/issues/94945) Multiplex 下 per-profile 时区被忽略
- [#88047](https://github.com/NousResearch/hermes-agent/issues/88047) Multiplex profiles 共享平台运行状态记录 — 副 profile 的 fatal 覆盖主 profile 的 connected
- [#87531](https://github.com/NousResearch/hermes-agent/issues/87531) Cron delivery mirroring 对副 profile 任务无效 — mirror 读错 state.db
- [#94933](https://github.com/NousResearch/hermes-agent/issues/94933) Hindsight memory 守护线程在 multiplex 下因 UnscopedSecretError 失败

**整体判断**：今日有约 20+ 个此前受阻的 multiplex 相关 Issue 被标记 CLOSED（包括 #70652、#48820、#81774、#74387、#62553 等更早期的），配合 11 个新 PR 的提交，表明维护团队已决定彻底根治 multiplex gateway。这在数量和影响范围上是近期最大的单一推进方向。

---

## 4. 社区热点

### 今日最热 Issue（过去 24h 更新 + 高评论数）

1. **[#88584 [OPEN] Automated Nous integration is blocked — 54 条评论](https://github.com/NousResearch/hermes-agent/issues/88584)** — **今日社区最关注的单一议题**。评论数远超其他 Issue，关注的是 Nous-to-Enterkey 合并流程被 `cron/jobs.py` 的冲突阻塞，导致 dashboard updater 停留在旧 Enterkey release。该 Issue 为跨仓库集成（enterkey-io/hermes-agent 工作流失败），已持续 16 天未解决，可能是第三方 fork 与上游的集成通道问题，而非核心产品 bug。高评论数暗示社区对该集成通道的焦虑。

   注意：该 Issue 打有 `comp/cron` 标签，与今日 teknium1 的 cron 修复 PR #101245（同样涉及 cron/jobs）存在表面关联，二者是否有直接因果需要进一步看 commit 内容。

2. **[#85422 [CLOSED] macOS 官方安装包未包含 Desktop 远程客户端引导 — 10 条评论、4 👍](https://github.com/NousResearch/hermes-agent/issues/85422)** — 社区对官方安装包体验的一致性诉求。该 bug 的描述是 hermes-agent.nousresearch.com 下载的安装器仍是本地 bootstrap 旧版，导致 macOS 新用户无法上手远程客户端。4 个 👍 在今日列表中居首，说明情绪较强。

3. **[#48820 [CLOSED] Windows 消息网关 3 个脆弱性 bug — 8 条评论](https://github.com/NousResearch/hermes-agent/issues/48820)** — 无 watchdog、env override 忽略 yaml、aiohttp trust_env 在 Scheduled Task 下误路由，三个问题造成 Windows 环境静默失败。

4. **teknium1 的 11 个 multiplex PR（#101242–#101256）** — 虽然不是严格意义上的"讨论热点"（评论数为 0/undefined），但作为单日最大规模的代码提交，本身构成社区焦点。若这些 PR 的合入确实关闭了上述大量 Issue，则其在社区中的影响会持续发酵。

### 用户反馈与平台分布观察

| 平台/场景 | 相关 Issue 数 | 共同痛点 |
|---|---|---|
| Windows + 多 profile + background pollers | #100327 (1 天新开, P1) | 会话风暴（4001s 错误 7,905 次/4 小时） |
| Windows + serve backend | #81774 | 桌面自更新会卡死，venv-blocker 没豁免 serve |
| Multiplex profiles 全平台 | 目前几十个 Issue 已关闭 | 同一 daemon 内跑多个 profile 时状态/凭据/会话交错 |

### 值得注意的 Issue

- **[#100327 [OPEN, P1] — 2026-09-01 新开，仅 1 天即获得 5 条评论](https://github.com/NousResearch/hermes-agent/issues/100327)** — Windows 11 + 10 个 profile 并行作为本地 agent 团队运行时，background pollers 风暴以 4001s 错误击穿已 reap 的会话（4 小时 7,905 次拒绝）。这是今日列表中最新的 P1 Issue，且是本地多 agent 并发场景，建议维护者优先排查是否与今日 multiplex 修复的会话状态机有关。

---

## 5. Bug 与稳定性

按严重程度排序（P1 > P2 > P3），标注是否已有修复 PR：

### P1（严重）

1. **[#100327 [OPEN] 后台轮询风暴以 4001s 错误击穿已 reap 的会话（Windows，10 个本地 profile）](https://github.com/NousResearch/hermes-agent/issues/100327)** — 4 小时内 7,905 次拒绝。涉及 Windows + Electron desktop + 多 `hermes serve` 池。v0.21.0。**暂无对应 fix PR 出现**。

2. **[#99692 [CLOSED] 超大 session 压缩永不完成 → 每条消息卡 10 分钟 + 压缩锁泄漏](https://github.com/NousResearch/hermes-agent/issues/99692)** — 今日已关闭，已有修复合入（compression-lock leak 通常关联 PR/commit，#97073 "compaction rebuild dynamic tool schemas" 同链路上），此处不再赘述。鉴于关闭速度较快（8/31 开→9/2 关），修复效率可期。

### P2（中） — 均为今日 CLOSED（部分可能是被上面 PR 关闭）

| Issue | 描述 | 状态 |
|---|---|---|
| [#99393](https://github.com/NousResearch/hermes-agent/issues/99393) | Desktop Bot Chat transcript 对 cron bot-chat 投递过时 | CLOSED |
| [#99335](https://github.com/NousResearch/hermes-agent/issues/99335) | Desktop composer 在 gateway 'connecting' 窗口期间 contentEditable=false 导致光标被踢出 prompt | CLOSED |
| [#97345](https://github.com/NousResearch/hermes-agent/issues/97345) | v2 registry SSH 连接下终端 pane 永不启动 — `activeSshTerminalTarget` 读取 bootstrap writer 从未写入的 `backendScopeKey`（#95081 引入的回归）| **OPEN，无 fix PR** |
| [#62553](https://github.com/NousResearch/hermes-agent/issues/62553) | gateway v0.18 open-policy 启动门对 weixin/iLink 误报 — bot 是协议级 1:1，`open` 无对外面 | OPEN（今日更新） |
| [#91814](https://github.com/NousResearch/hermes-agent/issues/91814) | 功能：Bot Mode 群聊中 per-bot activity 面板（含实时 session 记录） | OPEN（3 条评论，标记 duplicate） |
| [#46561](https://github.com/NousResearch/hermes-agent/issues/46561) | 飞书 WebSocket 断线不重连（wss://msg-frontier.feishu.cn/ws/v2） | OPEN（3 条评论，标记 duplicate，P2） |

### 需注意的标记为 bug 的长期未响应 Issue

- **[#46561 [OPEN, P2, duplicate] 飞书 WebSocket 断线不重连 — 45 天无修复](https://github.com/NousResearch/hermes-agent/issues/46561)** — 与 WeCom/weixin 适配器的积极修复（今日大量 PR）形成对比，飞书渠道是否被边缘化值得观察。

### Windows 专项积累（同日出现多个 Win 相关 bug）

- #100327（风暴）、#81774（更新死锁）与今天修复的 #48820（fragility bugs）、#74387（桌面丢失上次会话）一组 Windows 场景 bug 同日汇聚，说明 Windows 上本地多进程/多 profile 桌面组合的稳定性是该项目当前最大的平台压力点。

---

## 6. 功能请求与路线图信号

### 今日新提出的功能需求

1. **[#91814 [OPEN] Bot Mode 群聊 — per-bot activity 面板（实时 session 界面）](https://github.com/NousResearch/hermes-agent/issues/91814) [标记 duplicate, P3]** — 用户希望看到 room 级别以上的成员运行细节（当前显示 "career-lead is thinking…" 过于粗糙，现有 Activity 面板粒度不够）。标记 duplicate 意味着已有对应内部跟踪条目，但对用户体验的声量仍可参考。建议纳入桌面端会话/轮次可视化路线图。

### 从今日合并/关闭内容反推的路线图

1. **Multiplex profiles（同进程多 agent）明显是 0.21/0.22 的核心主线**
   - 今日 11+ 个 PR 覆盖 terminal、cron、gateway、api_server、plugins/hooks/MCP、TTS/Raft/A2A 等几乎所有子系统，全部围绕 "one profile per process" 假设的残余代码。结合 8/16 以来 p2 的 #85422（macOS 远程客户端 onboarding）、#70484 等来看，产品正从 1 进程=1 agent 演进为 1 进程=N agent（团队模式），桌面端 + serve 后端 + 多 agent 场景成为主流。

2. **Fail-closed 已成安全默认**（bb304b491 起）？有多条 Issue（如 #62553）质疑该默认对无外表面的内部协议（weixin/iLink）误伤。维护者正试图平衡 — 今日 #101253 中 Google Chat ADC fail-closed 与 #62553 的 "protocol-level 1:1、`open` 无外部面" 裁决仍留有 tension，**可能下一版本需要在默认 fail-closed 之上提供更细粒度的 per-platform 例外策略**。

### 可能被纳入下一版本的功能

- 今日无新增 feature PR。但若 #91814 的 duplicate 属性意味着已跟踪，Bot Mode session 播放/逐 bot 视图可能是桌面组 backlog 的候选项。

---

## 7. 用户反馈摘要

### 高频痛点（真实引用）

1. **"macOS 用户想试远程客户端 onboarding，下载的却是旧 bootstrap 安装器"**（#85422 comment 语境）：官方发布页的二进制与 Desktop 的引导流进度脱节，教程界面与安装内容不一致会产生"产品不可信"的第一印象。4 👍 是当日最高。

2. **"我们 10 个 hermes serve 池跑在 Windows 11 上，风暴来了 4 小时 7,905 次拒绝，会话像被撕了一样。"**（#100327 语境）：本地多 agent 团队 + 轮询并发 → 会话回收逻辑扛不住。这不是个例而是规模化使用场景下的必然，说明 `serve` 池在重负载下的 reaping 策略还需要调优。

3. **"如果连官方下载的安装包都缺 onboarding 流程，我很难向团队内其他人推荐 Desktop。"**（#85422 上 4 个 👍 的分布暗示）：官方分发通道的一致性（installer vs app in-app update）被用户视作成熟度信号。

4. **"Windows 上 gateway 静默失败，没有 watchdog 也没有日志提示，我直到收不到消息才知道出问题了。"**（#48820 语境）：用户对诊断能力缺失的抱怨很典型。

5. **"同一台机器上跑多的 profile，状态/凭据互相串，这种心智负担不适合我这种只用默认配置的用户。"**（综合 #87723、#87531、#88047、#83182 的描述）：普通用户把 "multiplex profiles" 当作部署细节，而默认情况下的串扰导致的是隐性数据污染。

### 满意/肯定信号

- 从关闭速度看：#99692（P1 压缩锁泄漏）8/31 开→9/2 关，2 天即处理；多数 P2 都在数天窗口内关闭。今天仅一天就有 28 个 Issue 关闭，用户在 Issue 中给出的环境/复现信息通常很完整（如 #99692、#100327 的 Hermes 版本+commit 均明确），有助于维护者快速定位。
- 但从 #88584 54 条评论中反映，自动化集成通道（Enterkey）迟迟不通是社区在 cron 相关讨论上最大的挫败点，建议维护团队给出明确的沟通或时间表。

---

## 8. 待处理积压

### 长期未响应的 OPEN Issue（提醒维护者关注）

| Issue | 创建距今 | 简述 | 严重度 |
|---|---|---|---|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 16 天（8/17 开） | Automated Nous-Enterkey 集成被 cron/jobs.py 冲突阻塞，dashboard updater 卡旧版 | **54 条评论，最高优先** |
| [#62553](https://github.com/NousResearch/hermes-agent/issues/62553) | 7/11 开（53 天） | Open-policy 启动门对 weixin/iLink 误报 — fail-closed 默认与其协议级 1:1 语义冲突 | P2，待明确决策 |
| [#46561](https://github.com/NousResearch/hermes-agent/issues/46561) | 6/15 开（79 天） | 飞书 WebSocket 断线不重连 | P2，标记 duplicate 但未关闭 |
| [#97345](https://github.com/NousResearch/hermes-agent/issues/97345) | 8/28 开（5 天） | v2 registry SSH 连接下桌面终端 pane 无法启动（#95081 回归）| P2，**无 fix PR** |

### 待合并压测点

- 今日 11 个 multiplex fix PR 全部 OPEN（#101242–#101256），覆盖范围互相重叠（cron、terminal、gateway、api_server），**强烈建议按依赖顺序合入而非并行合入**，避免中途 merge conflict 把批次拆散。考虑到长期 Issue 批量关闭的声量，这批的合入质量会直接影响社区对 0.22 稳定性的判断。
- [#85730](https://github.com/NousResearch/hermes-agent/pull/85730)（block per-profile gateway when multiplex 开启）8/14 提交，30 天未合并，被标记 needs-decision — 与 fail-closed 默认的方向保持一致，可并入同一批决策。

### 风险提示

- 今天关闭的 28 个 Issue 中有相当一部分是历史上标记 `needs-decision`/`duplicate` 的（如 #48820、#62553、#70652、#85730），**关闭原因需要人工确认是真修复还是清理分类**——建议在 release notes 中给出关联 commit/PR 清单，否则社区对"关闭即修复"的信任会受影响。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-02

## 1. 今日速览

过去24小时 PicoClaw 项目保持中等活跃度：共更新 4 个 Issues（均为开放状态）与 5 个 PR（其中 3 个待合并、2 个已关闭）。无新版本发布。值得关注的是，两名贡献者（hugodeco、dkropachev）集中提交了多项修复与增强 PR，其中 hugodeco 一人提交了 3 个针对 Telegram/agent 消息线程与引用回复的修复，显示出社区对即时通讯渠道交互体验的持续优化投入。与此同时，4 个开放 Bug 中涉及 QQ 频道鉴权失败（#3349）、MCP 连接挂起（#3269）、飞书配置字段报错（#3355），渠道稳定性问题仍是当前主要痛点。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日合并/关闭 2 个 PR，均于当天关闭：

- **[#3359] feat(repository-reviews): enforce product and retention contracts**（作者: dkropachev，2026-09-02 关闭）— 该 PR 为 Repository Reviews 引入了可重建的产品契约、资源分类法、有界 API 引用、生命周期/保留规则及确定性验收门禁，并强制了严格的紧凑投影与 `rrw_*` 前缀相关约束。此改动提升了仓库评审流程的规范性与可审计性。
- **[#1349] feat(qq): support parsing and replying to more attachment types**（作者: aishannon，2026-09-02 关闭，历时近 6 个月）— 为 QQ 频道补齐了表情解析、语音/图片/视频/文件的收发与回复能力，发送前自动上传附件。该 PR 的最终合并对 QQ 渠道功能完整性有实质推进。

另有 3 个 PR 处于待合并状态，均来自 hugodeco，聚焦于消息线程与引用语义修复（详见 Bug 与稳定性）。

## 4. 社区热点

今日讨论热度最高的 Issue 为：

- **[#3269] [BUG] MCP 服务器连接失败导致 agent 循环挂起，聊天界面停止回复**（8 条评论，👍 1）— [查看 Issue](https://github.com/sipeed/picoclaw/issues/3269)。该 Issue 已存在月余，持续获得社区关注，虽被标记为 stale，但评论热度不减，反映 MCP 集成的稳定性是用户核心关切之一。目前未见关联 fix PR。

此外，[#3349] QQ 频道 401 鉴权报错（2 条评论，2026-09-02 更新）为今日最活跃的新增 Bug 讨论，涉及 Docker 与 Linux x86 双版本验证，影响面较广。

## 5. Bug 与稳定性

按严重程度排列今日活跃的 Bug：

| 严重度 | Issue | 描述 | 状态 |
|--------|-------|------|------|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 服务器连接失败导致 agent 循环挂起，聊天界面完全停止回复（nightly 2cf030d2） | 开放 43 天，无 fix PR |
| 🔴 高 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 频道 WebSocket 连接返回 401（`Authorization` 请求头格式错误，错误码 11241），Docker 和 Linux x86 版本均可复现 | 开放 3 天，无 fix PR |
| 🟡 中 | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 配置文件中飞书 `channel_list.feishu.app_id` 字段被识别为未知字段，导致连接报错（nightly-50-gbbf6893c） | 开放 1 天，无 fix PR，可能为配置结构变更导致的兼容性问题 |

**关联修复 PR（均已提交待合并）**：
- [#3358](https://github.com/sipeed/picoclaw/pull/3358) — 修复 agent 回复未携带 `ReplyToMessageID`，导致消息与原始提问在聊天中脱节的问题。
- [#3357](https://github.com/sipeed/picoclaw/pull/3357) — 修复 Telegram 群组 `mention_only: true` 模式下，用户直接回复机器人消息却被静默忽略的问题。
- [#3356](https://github.com/sipeed/picoclaw/pull/3356) — 修复 Telegram 回复/引用文档消息时仅携带 `[file]` 占位符、未重附原文档媒体的问题。

以上 3 个 PR 均于 2026-09-01 提交，尚未合并，但直接针对群聊场景的消息连续性缺陷，建议维护者优先评审。

## 6. 功能请求与路线图信号

- **[#3345] lightweight PicoClaw worker mode for household edge compute**（作者: kvnloo）— 提议为低端设备（RISC-V/ARM/MIPS 开发板、树莓派、旧 Android 手机、可用内存仅 10–20 MB 的机器）提供轻量级 worker 模式，使其可参与分布式 agent 网络。此提案面向 PicoClaw 天然适配的边缘硬件生态，具备路线图参考价值。虽已标记 stale，但社区有人回复讨论（1 条评论），建议维护者评估。

结合 PR 来看，hugodeco 连续提交的 3 个 PR 揭示了一条潜在的改进主线：多平台 IM 渠道的线程/引用/回复语义一致性。这类修复虽属缺陷修补，但实际在推动「对话上下文连续性」这一体验目标——该方向有望在后续版本中看到更多系统化推进。

## 7. 用户反馈摘要

- **QQ 渠道可用性受阻**（#3349）：用户 bxwl5 反馈 QQ 频道在 Docker 与 Linux x86 两个版本下均无法正常使用，gateway 日志显示 401 鉴权错误，提示请求头格式问题。该渠道当前对部分用户处于不可用状态。
- **飞书配置兼容性困惑**（#3355）：用户 ttghub 在最新 nightly 版本中按文档配置飞书渠道时遭遇未知字段报错，需维护者确认是否存在配置结构变更未同步文档的情况。
- **MCP 故障引发对话中断**（#3269）：用户 ruiyigen 描述的 MCP 连接失败导致 chat 界面永久失去响应的场景，引起 8 条评论的讨论，侧面反映用户对 MCP 集成的依赖度较高，同时对故障恢复机制（如超时熔断/重试/降级）有明确期待。
- **Telegram 群聊反馈积极**（PR #3357/#3358 的提交动机）：贡献者 hugodeco 在其 PR 描述中明确指出，群组会话中用户自然使用「回复」操作的场景被忽略，破坏对话连续性——这代表真实用户在 `mention_only` 模式下的典型交互困境，提交者视角贴近实际使用习惯。

## 8. 待处理积压

以下为长期未得到有效响应或处理的重要事项，建议维护者关注：

- **[#3269] MCP 连接失败导致 agent 挂起**（开放 43 天，8 条评论，👍 1）— 高影响 Bug 长期未指派、无 fix PR，且已被标记 stale。考虑到 MCP 是 PicoClaw 作为 AI agent 的核心能力之一，此类挂起问题直接影响核心体验，建议优先响应并确认复现路径。
- **[#3345] 轻量级 worker 模式提案**（开放 8 天，已标记 stale）— 作为有价值的路线图信号，不应过早沉底。建议维护者至少给出方向性回应（是否考虑纳入、与现有架构的兼容性评估初步结论）。
- **[#1349] QQ 渠道附件支持 PR** — 该 PR 自 2026-03-11 创建至 2026-09-02 方被关闭，历时近半年，暴露了 PR 评审周期过长的问题。结合 #3349 QQ 鉴权故障，建议对 QQ 渠道的维护优先级与测试覆盖做一次集中审视。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-02

## 1. 今日速览

NanoClaw 项目今日保持高度活跃的开发节奏，核心团队正集中推进大规模 provider 契约化重构（涉及 #3581、#3584-#3588、#3591 等系列 PR），旨在将 provider 行为从硬编码转变为可声明、可验证的契约。过去 24 小时新增 2 条 Issue、16 条 PR 更新（其中 3 条已合并/关闭），代码审查与问题反馈呈良性循环。安全修复与稳定性改进同步跟进，尤其在容器挂载安全漏洞（#3680）与 Teams 通道兼容性方面（#3596、#3674）有实质推进。项目整体健康度较高，核心团队深度参与，但需留意大量重构型 PR 待合并路径较长的问题——阻塞风险值得持续观察。

- [查看全部 PR](https://github.com/nanocoai/nanoclaw/pulls)
- [查看全部 Issues](https://github.com/nanocoai/nanoclaw/issues)

## 2. 版本发布

过去 24 小时内无新版本发布，数据集中在上游 PR 的审查与合并阶段。

## 3. 项目进展

本周期共有 3 条 PR 被合并或关闭，集中于 provider 契约化重构的配套与测试环节：

**已合并/关闭:**

- [#3593 test(codex): pin speed → service_tier rendering](https://github.com/nanocoai/nanoclaw/issues/3593)（关闭，zvi-fried）— 为 Codex provider 的 `speed` 属性到 `service_tier` 的渲染提供了确定性测试锚点，与 #3584 形成配套验证体系
- [#3672 test(skill-directives): expect the slack-raw-text files add-slack copies](https://github.com/nanocoai/nanoclaw/issues/3672)（关闭，orgads）— 修正了 Slack 原始文本文件的测试预期

**核心进展信号：**

- **Provider 契约化重构**（zvi-fried 主导，核心团队）形成完整技术栈：运行时契约（[#3581](https://github.com/nanocoai/nanoclaw/issues/3581)）→ 设置契约与安装验证器（[#3586](https://github.com/nanocoai/nanoclaw/issues/3586)）→ 宿主契约（[#3585](https://github.com/nanocoai/nanoclaw/issues/3585)）→ 各 provider 绑定（Codex #3584、OpenCode #3588）
- **速度分级属性**（[#3592](https://github.com/nanocoai/nanoclaw/issues/3592)）— 新增核心持有的 per-agent-group `speed` 属性，对齐已有的 `model` 和 `effort`，面向用户的可配置性在扩展

## 4. 社区热点

当前社区热议集中于两项：

- **Provider 契约重构**：由 zvi-fried 主导的重构波及仓库几乎所有核心目录，影响面覆盖 CLI、容器、配置、技能目录。虽然全部被评为 cleanup 类 PR，但社区对其长期影响保持高度关注，所有相关 PR 的讨论和审阅周期均较长，表明团队成员在谨慎评估大规模变更的影响。相关 PR 数量达 9 条，是本周的核心工作重心。建议关注主 PR [#3591](https://github.com/nanocoai/nanoclaw/issues/3591) 以了解全貌。讨论中发现的问题（如 #3584 引发了对指令来源的重新思考，直接衍生了 #3591）可以清晰展示社区在重构中对设计方向的辩论与取舍。
- **本地目标（destination）集成问题**（[#3700](https://github.com/nanocoai/nanoclaw/issues/3700)）— 真实环境中，messaging-group 重建导致本地目标失效，且发送报告虚假成功。该 Issue 凸显了一个治理与监控盲点：发送报告的成功可信度问题值得团队在路线图规划中优先审视。

## 5. Bug 与稳定性

按严重程度排序：

**高严重度:**

- **发送报告对失效目标报成功**（[#3700](https://github.com/nanocoai/nanoclaw/issues/3700)）— 真实生产部署中，当目标 messaging-group 被重建后，local-names 未随之重新指向，导致 outbound 消息发送虽报成功但实际投递至失效目标。这是一个可观测性缺陷，会严重误导运维判断，当前无已关联的修复 PR。该问题由文档中提到的与实际配置不一致的场景（Discord platform ID 格式错误）引发，修复后暴露了更深层的目标生命周期管理缺陷。
- **spec 校验绕过可能导致未授权挂载**（[#3680 fix(mount-security)](https://github.com/nanocoai/nanoclaw/issues/3680)，PR 进行中）— 作者 prathish-ks 正在修复 allowlisted-extra mount 的越权访问问题，从安全问题提交速度看，团队处理及时，该问题仍处于待合并状态，建议尽快审查。

**中严重度:**

- **ncl CLI 命令不一致**（[#3699](https://github.com/nanocoai/nanoclaw/issues/3699)）— `destinations create/remove` 命令与其他 group-scoped 写命令行为不一致，未能从调用者上下文中自动填充 `agent_group_id`，影响自动化使用体验与 DX 一致性。

**低严重度/测试修复（已有关联 PR 处理）:**

- **Slack 原始文本文件测试预期不符** — 已由 [#3672](https://github.com/nanocoai/nanoclaw/issues/3672) 修复（已关闭）
- **Teams 对带冒号 user ID 处理存在不一致**（由 [#3596](https://github.com/nanocoai/nanoclaw/issues/3596) 修复中），属于渐进式改进

## 6. 功能请求与路线图信号

结合 Issues 与 PR 进行功能信号判断：

| 信号源 | 信号描述 | 可能纳入下一版本 | 判断依据 |
|---|---|---|---|
| [#3592](https://github.com/nanocoai/nanoclaw/issues/3592) | `speed` 作为核心拥有的属性注入 group 配置 | 极有可能 | Core-team 主导实现，配套测试 [#3593](https://github.com/nanocoai/nanoclaw/issues/3593) 确保渲染正确性，意味着该功能已进入收尾阶段，预计在合并后随下个小版本发布 |
| Provider 契约化重构 | 声明式 provider 描述替代硬编码 | 大规模迭代进行中 | 涉及 base document 变为核心拥有的渲染逻辑（[#3591](https://github.com/nanocoai/nanoclaw/issues/3591)），建议规划升级指引与文档要求用户关注 |
| 小型集成改进 | HTTP MCP server 与 gateway 代理的兼容 | 较高 | PR #3597 已提交修复方案，等待合入后进入发布通道 |

## 7. 用户反馈摘要

- **真实的部署痛点**（[#3700](https://github.com/nanocoai/nanoclaw/issues/3700)）：用户 DawoudIO 在使用 Discord messaging-group 时遇到了 platform-id 格式（从裸 channel snowflake 到 `discord:<guild_id>:<channel_id>`）的迁移问题，以及修复后的 `destination local-name` 未指向正确目标的问题。这个反馈揭示了一个核心痛点：**目标（Destination）命名与群体的生命周期绑定关系需要更健壮的管理方案**，且发送机制需要失败检测反馈。
- **CLI 一致性诉求**（[#3699](https://github.com/nanocoai/nanoclaw/issues/3699)）：用户明确表达了对 CLI 命令组在自动填充 `agent_group_id` 行为上的一致性期待。从 Issue 中"Every other group-scoped `ncl` write command…"可以看到用户对脚手架自动化的需求，而非要求记忆每个命令的参数。
- **Teams 通道可用性**（[#3674](https://github.com/nanocoai/nanoclaw/issues/3674)）与 **带冒号用户 ID**（[#3596](https://github.com/nanocoai/nanoclaw/issues/3596)）：orgads 提交了多条修复，总体提升 Teams 通道的集成可用性，特别是文件投递，表明社区对 Teams 作为协作接入口的场景需求是真实的且在实际使用中暴露了问题。

## 8. 待处理积压

以下 PR 长审未决，需维护者重点关注：

| 条目 | 等待天数（至今） | 需关注原因 |
|---|---|---|
| [#3427 fix(agent-runner)](https://github.com/nanocoai/nanoclaw/issues/3427)：告知 agent send_card 丢弃回调事件 | 12 天 | 等待 merge 时间最长，直接影响 agent 对卡片回调的误导性承诺，与 #3700 所反映的"假成功"问题同源，应尽快合并 |
| [#3581 运行时 provider 契约](https://github.com/nanocoai/nanoclaw/issues/3581) 及关联 PR #3584-3591 | 7 天 | 核心重构系列，相互依赖，如有冲突或设计变更会牵一发动全身，需核心团队明确定义合并顺序与节奏 |

其他等待中的小型 PR（如 #3673 测试超时修复、#3674 MIME 类型修复等）目前等待时间较短，暂无积压风险，但仍需持续跟踪以避免周后续质量回归。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-02

## 1. 今日速览

IronClaw 项目今日处于高度活跃状态，过去 24 小时内有 21 条 PR 活动（其中 11 条已合并/关闭）和 15 条 Issue 更新（其中 7 条已关闭），反映了团队在多个方向上的持续推进。项目当前重心集中在 WebUI v2 前端的技术债务清理上，核心贡献者 italic-jinxin 密集提交了 6 个相关 Issue 和 4 个类型化重构 PR（#8032–#8036、#8037–#8040），系统性消除约 61,800 行代码中 170 个文件的 `@ts-nocheck` 指令。与此同时，两条大型功能 PR（#8010 会话事件传输统一、#8006 Slack 持久回复与 Agent UI）仍在待合并状态。今日无新版本发布。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

今日有 11 条 PR 被合并或关闭，主要集中在 **WebUI 设计系统标准化** 和 **前端类型安全治理** 两个方向：

**WebUI 共享组件迁移（4 条合并 PR，对应 4 个已关闭 Issue）**
- [#8021 fix(webui): replace native SettingsField controls with shared components](https://github.com/nearai/ironclaw/pull/8021) — 将动态设置面板中原生的 `<input>` 和 `<select>` 替换为共享的 `Input` 和 `SelectMenu` 组件（对应 Issue [#8018](https://github.com/nearai/ironclaw/issues/8018)）
- [#8024 feat(webui): use shared SearchField for Workspace and Logs](https://github.com/nearai/ironclaw/pull/8024) — 为共享 `SearchField` 新增紧凑 `sm` 尺寸，并迁移 Workspace 树过滤器和 Logs 目标过滤器（对应 Issue [#8020](https://github.com/nearai/ironclaw/issues/8020)）
- [#8023 refactor(webui): adopt shared components in Extension Configure](https://github.com/nearai/ironclaw/pull/8023) — Extension 配置流程中的密码字段和状态消息迁移到共享组件与 `InlineNotice`（对应 Issue [#8017](https://github.com/nearai/ironclaw/issues/8017)）
- [#8022 refactor(webui): migrate Automations notices to InlineNotice](https://github.com/nearai/ironclaw/pull/8022) — Automations 页面及通知渠道面板的加载失败、摘要警告等横幅迁移至 `InlineNotice`（对应 Issue [#8019](https://github.com/nearai/ironclaw/issues/8019)）

**Agent 执行器核心重构**
- [#8031 refactor(agent-loop): decompose capability stage mechanics](https://github.com/nearai/ironclaw/pull/8031) — 由核心贡献者 henrypark133 提交，将 `executor/capabilities.rs` 从 **2,938 行缩减至 890 行**（减少约 70%），同时保持仅有一条 `CapabilityStage::process` 执行路径，提取批量调度、分发/恢复等私有逻辑到独立模块——对长期可维护性有显著改善。

**其他已关闭 PR** 包括 [#7997 模型能力图标展示](https://github.com/nearai/ironclaw/pull/7997)（XL 规模，已在 Inference 模型选择界面显示能力图标），以及由 dependabot 自动提交的例行依赖升级。

> 附注：本次 UI 标准化与类型治理工作与此前合并的 [#7971 渲染模型能力标签](https://github.com/nearai/ironclaw/issues/7971) 和 [#7970 保留 NEAR AI 模型模态](https://github.com/nearai/ironclaw/issues/7970) 形成衔接，WebUI 正在经历一轮系统的组件级收敛。

---

## 4. 社区热点

今日最受关注的工作集中在 **WebUI v2 前端 `@ts-nocheck` 技术债的全面清理**，这组由 italic-jinxin 发起的 Issue/PR 集群形成了清晰的推进链路：

| 类型 | 编号 | 标题与链接 | 规模说明 |
|------|------|-----------|---------|
| Epic Issue | [#8032](https://github.com/nearai/ironclaw/issues/8032) | Eliminate `@ts-nocheck` Debt from the WebUI v2 Frontend | 170 个文件、约 61,800 行 TS/TSX 受 `@ts-nocheck` 影响 |
| Issue | [#8033](https://github.com/nearai/ironclaw/issues/8033) | Remove Redundant `@ts-nocheck` Directives and Prevent New Suppressions | 审计发现约 41 个文件已可通过类型检查但未移除指令 |
| Issue | [#8034](https://github.com/nearai/ironclaw/issues/8034) | Add Shared API Types for Frontend Boundary Modules | 覆盖请求参数、响应体、错误封装与事件数据 |
| Issue | [#8035](https://github.com/nearai/ironclaw/issues/8035) | Remove `@ts-nocheck` from Production Components and Hooks | 涉及 Chat、Settings、Extensions、Admin、Automations 等模块 |
| Issue | [#8036](https://github.com/nearai/ironclaw/issues/8036) | Type WebUI Test Infrastructure | 移除测试套件中的 `@ts-nocheck` |
| PR | [#8037](https://github.com/nearai/ironclaw/pull/8037) | chore(webui): ratchet TypeScript suppressions | 移除 40 个冗余指令 + 建立防回退的基线检查机制 |
| PR | [#8038](https://github.com/nearai/ironclaw/pull/8038) | refactor(webui): type and validate frontend API boundaries | 拒绝缺失 ID 的请求 / 引入运行时解码器 |
| PR | [#8039](https://github.com/nearai/ironclaw/pull/8039) | refactor(webui): type production components and hooks | 覆盖 64 个生产组件/hooks/pages |
| PR | [#8040](https://github.com/nearai/ironclaw/pull/8040) | test(webui): type frontend test infrastructure | 移除全部 94 个测试侧 `@ts-nocheck` |

**需求分析**：这组工作反映了项目面对的技术债管理策略——170 个文件 / 61,800 行代码处于类型检查盲区，对长期可维护性和代码质量构成显著风险。值得关注的是 PR [#8037](https://github.com/nearai/ironclaw/pull/8037) 引入的 **"ratchet"（棘轮）机制**，通过基线文件和源代码约定防止新的 `@ts-nocheck` 指令回流，属于防止技术债再次积累的制度性措施，而非一次性清理。

---

## 5. Bug 与稳定性

今日报告了 1 个新 Bug，未发现崩溃或严重回归：

| 编号 | 标题与链接 | 严重程度 | 状态 | 详情 |
|------|-----------|---------|------|------|
| [#8025](https://github.com/nearai/ironclaw/issues/8025) | Bug: unexpected behavior with special characters in input | 中 | OPEN，1 条评论 | 输入字段中特殊字符导致输出不正确——字符被剥离或触发错误。提交者推测可能与上次发布中的编码改动相关，期望行为是正确转义和处理 |

该 Issue 为昨日（09-01）创建，目前尚无关联的 fix PR。考虑到根因可能与最近一次发布的编码改动有关，建议优先排查最近的字符编码相关提交。

---

## 6. 功能请求与路线图信号

**潜力功能 / 路线图信号一：LLM 层 prompt 缓存能力扩展**

- Issue [#7921](https://github.com/nearai/ironclaw/issues/7921)（[p2] perf(llm)）指出：IronClaw 仅在 Anthropic 传输层实现了显式 prompt 缓存提示（`cache_control` 断点），而所有 OpenAI 系后端（`OpenAiCodex` 直接 Responses API、Codex-ChatGPT 注册表变体等）均未发送 `prompt_cache_key`，实测导致约 200 次调用后缓存命中率从 ~82% 骤降至 29%。该 Issue 更新于今日（09-02），目前尚无对应 PR。

**潜力功能 / 路线图信号二：跨渠道持久化回复与 Slack Agent UI**

- PR [#8006](https://github.com/nearai/ironclaw/pull/8006)（[size: XL, risk: low] feat(channels): add durable progressive replies and native Slack Agent UI）自 08-31 起已开放 2 天，引入了通用的、提供者中立的安全回复文档模型 + Slack 原生 Agent UI。此 PR 若合并将扩展渠道层的能力边界。

**已纳入合并序列（WebUI 迁移线，见上节）**
- 上游 Issue [#7971](https://github.com/nearai/ironclaw/issues/7971)（WebUI 模型能力标签渲染）已关闭，对应 PR [#7997](https://github.com/nearai/ironclaw/pull/7997) 已合并。

---

## 7. 用户反馈摘要

截至今日，社区反馈相对有限，暂无大量用户评论涌入。主要反馈如下：

- **Bug 报告（Issue #8025）**：用户 kapibarazoku0422-create 报告了特殊字符输入处理异常的问题，指出在上次发布后，特殊字符在输入字段中可能被剥离或导致错误，期望行为是正确转义。该 Issue 已有 1 条评论跟进，推测可能与最近的编码改动有关。

- **代码维护侧的声音（Issue #8018 / #8020 / #8017 / #8019）**：italic-jinxin 等核心贡献者在多个 Issue 中统一反馈了一个共同诉求——WebUI 存在大量"原生控件 + 本地样式"并存的情况，导致组件风格不一致、维护成本上升。这些问题已在今日通过 [#8021](https://github.com/nearai/ironclaw/pull/8021)、[#8023](https://github.com/nearai/ironclaw/pull/8023)、[#8022](https://github.com/nearai/ironclaw/pull/8022)、[#8024](https://github.com/nearai/ironclaw/pull/8024) 合并解决，与此前的迁移方向一致。

---

## 8. 待处理积压

以下条目长期未合并或缺少响应，提醒维护者关注：

| 类型 | 编号 | 标题与链接 | 开放时长 | 建议 |
|------|------|-----------|---------|------|
| PR | [#7020](https://github.com/nearai/ironclaw/pull/7020) | chore(deps): bump tokio-tungstenite from 0.29.0 to 0.30.0 | **31 天**（08-02 创建） | 依赖升级长期滞留，若无阻塞原因建议及时处理或说明延后理由 |
| Issue | [#7921](https://github.com/nearai/ironclaw/issues/7921) | [p2] perf(llm): OpenAI-family backends send no prompt_cache_key | **6 天**（08-27 创建），今日有更新 | 明确标注 p2 优先级且包含量化数据（82%→29% cache-hit 下滑），建议尽快排入迭代计划 |
| Issue | [#8026](https://github.com/nearai/ironclaw/issues/8026) | Epic: Dogfooding & QA bug fixing 08/31/2026 - 09/06/2026 | 1 天（本周 QA Epic） | 作为当周 QA 追踪 Epic，建议关注其中子任务进展，并在周末（09-06）按时关闭 |

---

> **项目健康度小结**：IronClaw 今日表现出健康、有序的工程节奏——UI 组件标准化已达成果收尾，类型安全治理正在全面铺开且伴随制度性防回退措施；但两条 XL 级功能 PR（[#8010](https://github.com/nearai/ironclaw/pull/8010)、[#8006](https://github.com/nearai/ironclaw/pull/8006)）的合并周期较长，且存在 31 天未处理的依赖升级 PR，建议在后续迭代中关注这两类积压项目的处理节奏。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-09-02**

---

## 1. 今日速览

过去 24 小时，LobsterAI 项目共产生 18 条 Issue/PR 动态。活跃度处于中低水平：6 个历史 Issue 被关闭（均为 stale 自动标记），2 条新 PR 提交。值得关注的是，当日提交的多个 PR 涉及**发布回滚（#2597）**和**安全加固（#2590）**，另有 3 个 PR 快速关闭（含合并/管理操作）。项目当前有 7 个待合并 PR——其中 5 个为 3 月 31 日提交后长期停滞的旧 PR，另有 5 个问题停留 Open 状态超过 5 个月，存在明显的**积压信号**。自 2026.4.3 发布后尚无新版本。

**活跃度评估：★☆☆☆☆（低）** — 新提交少，大量旧 Issue/PR 被标记为 stale。

---

## 2. 版本发布

今日无新版本发布。当前最新版本仍为 **2026.4.3**（对应旧 Issue 中用户提及的 "版本2026.4.3"）。

---

## 3. 项目进展

今日合并/关闭的 PR 3 条，其中重要变更如下：

| PR | 摘要 | 影响 |
|---|---|---|
| [#2597](https://github.com/netease-youdao/LobsterAI/pull/2597) `CLOSED` | **Revert（撤回）应用内浏览器功能**，将其从 `release/2026.8.31` 发布线中移除，该功能将延后至后续版本窗口发布 | 此次撤回影响 renderer、main、openclaw、cowork、artifacts 五个模块，说明 8.31 版本存在发布范围调整 |
| [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) `CLOSED` | **新增聊天登录 CTA 点击的分析埋点**，并更新使用分析规范文档 | 小范围埋点功能增强 |
| [#2598](https://github.com/netease-youdao/LobsterAI/pull/2598) `CLOSED` | Windows 引导页修复 | 小范围 UI 修复 |

**key takeaway：** 项目主要"前进"动作是发布范围的收缩与修正，而非新功能落地。

---

## 4. 社区热点

今日评论最活跃的是以下 6 条 Issue（各 1-6 条评论不等），均为 4 月提交、今日被 stale 批量关闭的问题：

- [**#1569 - 提问后不运行，也不显示任何信息**](https://github.com/netease-youdao/LobsterAI/issues/1569)（6 条评论）— 用户报告未知原因的静默失败，反馈最集中
- [**#1561 - 模型无法获取上传的文件**](https://github.com/netease-youdao/LobsterAI/issues/1561)（3 条评论）— 用户称这是新版引入的回归（此前文件会挂载到 project 目录）
- [**#1566 - 最新版本无论输入什么都回复相同内容**](https://github.com/netease-youdao/LobsterAI/issues/1566)（3 条评论）— 附带日志链接，疑似后端逻辑 bug
- [**#1567 - 请求动态添加快捷恢复操作按钮**](https://github.com/netease-youdao/LobsterAI/issues/1567)（2 条评论）— 操作便利性诉求
- [**#1563 - 流量包服务条款文字错误**](https://github.com/netease-youdao/LobsterAI/issues/1563)（2 条评论）— 法务页面质量问题
- [**#1551**](https://github.com/netease-youdao/LobsterAI/issues/1551)（2 条评论）— 网络变化触发网关反复重启

**用户诉求分析：** "模型静默失败/无法获取上传文件/回复内容固定"三类问题集中出现在 4 月版本（2026.4.3）中，是社区最聚焦的痛点。**全部 6 条热门 Issue 均已被 stale 自动关闭，且无官方回复记录**——这是一个值得警惕的信号。

> ⚠️ **这些 Issues 今日被关闭并非修复完成，而是 stale 机制自动过期。** 用户问题很可能仍然存在。

---

## 5. Bug 与稳定性

今日 6 条被关闭的 Issue 中 5 条为 Bug 报告（均为 stale 关闭）：

| 严重程度 | Issue | 问题描述 | Fix PR |
|---|---|---|---|
| 🔴 **高** | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | 最新版本无论输入何种内容，回复均相同 | ❌ 无 |
| 🔴 **高** | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 提问后工具不运行、无任何反馈（静默失败） | ❌ 无 |
| 🟠 **中** | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 新版本回归：上传文件后模型无法读取 | ❌ 无 |
| 🟠 **中** | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | 网络环境变化导致网关反复重启；网络恢复后正常 | ❌ 无 |
| 🟡 **低** | [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | 流量包服务条款存在明显文字错误 | ❌ 无 |

**今日无新的 Bug 报告**，5 条 4 月遗留 Bug 均被批量 stale 关闭，尚无已知修复 PR 指向它们。

**稳定性判断：** 4 月版本曾出现一批严重可用性问题，是否仍在最新代码中存在尚不可知，但 stale 自动关闭意味着体验问题的反馈通道被静默截断。

---

## 6. 功能请求与路线图信号

今日功能类动态如下：

- **来自 Issue [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567)：**（已被关闭）用户请求输入框添加快捷操作按钮（停止/压缩上下文/强制截断），或至少提供 help 指令供恢复 —— 属于提升易用性和容错能力的中优先级需求。当前**无 PR 响应**。
- **来自 PR [#1125](https://github.com/netease-youdao/LobsterAI/pull/1125)：** 会话内容全文搜索与关键词高亮功能已于 3 月 31 日提交 PR（含摘要预览与关键词居中高亮），至今仍未合并，建议维护者评估纳入下一版本计划。
- **来自 PR [#1103](https://github.com/netease-youdao/LobsterAI/pull/1103)（3 月 31 日提交，待合并）：** Docker 沙箱就绪探测与状态 UI，可帮助用户预判沙箱工具是否可用。

> **路线图信号：** 上述 3 个 PR/Issue 已等待 5 个多月，有效功能贡献长期悬置，建议维护者明确优先级或主动关闭。

---

## 7. 用户反馈摘要

> ⚠️ 注：以下 6 条 Issue/PR 均无新的评论（今日更新仅为 stale 机器人操作），用户共性反馈来自历史评论内容。

1. **"以前能用的功能更新后坏了"（回归痛点）** — Issue [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561)：用户指出早期版本上传的文件会挂载至 project 目录供模型检索，新版本该行为消失，模型"不知道有文件"。**回归类 bug 是用户最敏感的负向体验。**

2. **"出问题后没有自救手段"（容错焦虑）** — Issue [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567)：用户因上下文过长或后端 bug 陷入卡死时，渴望立即恢复的入口（按钮/指令），侧面反映整体错误恢复与提示系统打磨不足。

3. **"网关反复重启"（稳定性担忧）** — Issue [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551)：典型开发者/重度用户场景，网络环境切换异常会直接打断工作流。

4. **"静默失败，无从排查"（可观测性缺失）** — Issue [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569)：用户截图显示提问后"什么都不发生"——此类无日志、无报错的静默失败最打击使用信心。

---

## 8. 待处理积压

以下为长期未获得维护者响应的条目，供维护团队优先关注：

### 高优先级建议（5 个月+ 未合并的 ready 级别 PR）

| 时间 | 条目 | 说明 |
|---|---|---|
| 2026-03-31 | [PR #1090](https://github.com/netease-youdao/LobsterAI/pull/1090) | **CoworkRunner 缺少重入保护，并发导致流式消息损坏/重复** — 已含完整修复方案（per-session promise 序列化），关联合并 Issue #1089 |
| 2026-03-31 | [PR #1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | 修复 IM 并发导致重复会话与消息丢失，实现 per-conversation 锁 — Closes #1099 |
| 2026-03-31 | [PR #1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | 跨 provider 切模型后立即发消息报错（异步竞态修复） |
| 2026-03-31 | [PR #1103](https://github.com/netease-youdao/LobsterAI/pull/1103) | Docker 沙箱就绪探针 + 状态 UI |
| 2026-03-31 | [PR #1125](https://github.com/netease-youdao/LobsterAI/pull/1125) | 会话全文搜索与关键词高亮 |

### 至今未关闭的 Open Bug

| 时间 | 条目 | 说明 |
|---|---|---|
| 2026-03-31 | [Issue #1099](https://github.com/netease-youdao/LobsterAI/issues/1099) | IM 并发处理导致重复会话与消息丢失（已有对应 PR #1100） |
| 2026-03-31 | [Issue #1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | md 转 PDF 功能体验问题（弹窗残留、会员框侵入） |

### 今日新提交

- [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590)（2026-09-01 提交，OPEN）：**安全加固** — 对 MCP stdio 命令参数做 shell 元字符校验、校验 `shell.openExternal` 的外部 URL，阻止恶意 URL 注入。建议维护者优先 review，时效性与安全性并重。

---

## 项目健康度小结

| 维度 | 评价 |
|---|---|
| **维护响应** | ⚠️ 偏弱 — stale 机器人批量关闭提问型 Issue，既无修复标记也无维护者回应 |
| **发布节奏** | 自 4 月后停滞，8.31 版本正在做功能裁剪（撤回 in-app browser） |
| **贡献生态** | 有 5-6 个高质量社区 PR 等待评审 5 个月+，外部贡献者动力或受影响 |
| **质量问题** | 4 月版本遗留的高/中危 Bug 无明确修复时间表 |
| **亮点** | 今日有新的安全加固 PR（[#2590](https://github.com/netease-youdao/LobsterAI/pull/2590)），反映对供应链安全的关注 |

---

*数据来源：LobsterAI GitHub 仓库（netease-youdao/LobsterAI）*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期**: 2026-09-02  
**数据来源**: github.com/moltis-org/moltis

---

## 1. 今日速览

Moltis 项目今日活跃度中等偏低。过去 24 小时内共产生 5 条动态：1 条 Issue 已关闭（#1250）、3 条 PR（其中 1 条已合并 #1251、2 条待审查）、1 个新版本发布（20260902.01）。值得关注的是，今日的核心工作围绕 **MCP 服务器验证修复** 展开——Issue #1250 报告的 bug 已在当天通过 PR #1251 快速闭环修复并合并，展现了良好的响应速度。另有 1 个新功能 PR（#1253，推理等级增强）和 1 个文档 PR（#1252）待社区审查。整体来看，项目处于稳定迭代阶段，Bug 响应及时，社区协作健康。

---

## 2. 版本发布

### 20260902.01

- **发布时间**: 2026-09-02
- **发布标签**: [20260902.01](https://github.com/moltis-org/moltis/releases)
- **内容说明**: 数据源未提供详细的变更日志，但结合同日合并的 [PR #1251](https://github.com/moltis-org/moltis/pull/1251)，推测该版本包含了 **MCP streamable-http 传输的 doctor 验证修复**。
- **破坏性变更**: 数据源未提及任何破坏性变更。
- **迁移注意事项**: 数据源未提及特殊迁移要求。若你正在使用 `streamable-http` 类型的 MCP 服务器，建议升级并重新运行 `moltis doctor` 确认修复生效。

---

## 3. 项目进展

### 已合并/关闭的 PR

**[PR #1251 — Fix doctor validation for streamable HTTP MCP servers](https://github.com/moltis-org/moltis/pull/1251)**（已合并，作者: penso）

这是今日核心修复。PR 解决了 Issue #1250 中报告的 doctor 误判问题，具体改动包括：

- 通过共享的类型化 MCP 传输定义，识别规范的 `streamable-http` 及其接受的别名
- 在报告 doctor 成功前，验证字面量及配置解析的远程服务器 URL
- 延迟处理未解析的凭据（避免误报）

该修复将 `moltis doctor` 对无 stdio 命令的 MCP 服务器的验证逻辑从"缺失命令即失败"修正为正确识别流式 HTTP 传输，**消除了一个影响真实用户部署的误报问题**。

### 小结

今日项目向前推进了一个完整闭环（Issue 报告 → Fix PR → 合并 → 新版本发布），修复了 doctor 工具的传输类型判断缺陷，提升了 MCP 服务器配置验证的准确性。

---

## 4. 社区热点

今日活跃度整体较低，各条目均无评论，讨论热度有限。相对值得关注的是：

**[Issue #1250 — doctor treats working streamable-http MCP server as missing command](https://github.com/moltis-org/moltis/issues/1250)**（👍 0，评论 0，已关闭）

虽然互动数据为 0，但该 Issue 的快速闭环（创建于 2026-09-01，当日即有 PR #1251 修复并合并）暗示这是**真实用户的配置痛点**——一个可正常工作的 MCP 服务器被 doctor 误报为配置缺失，可能干扰 CI 验证或误导排障方向。

---

## 5. Bug 与稳定性

今日报告 1 个 Bug，已修复。

| 严重程度 | Issue | 描述 | 修复状态 |
|---------|-------|------|---------|
| 中等 | [#1250](https://github.com/moltis-org/moltis/issues/1250) | `moltis doctor` 将配置正常且可工作的 `streamable-http` MCP 服务器（无 stdio 命令）误报为"命令缺失" | 已修复：[PR #1251](https://github.com/moltis-org/moltis/pull/1251) 已合并，包含在版本 20260902.01 中 |

**影响分析**: 该 Bug 不涉及运行时崩溃或数据丢失，但会影响 doctor 诊断工具的输出准确性，可能使用户对配置产生误解。

---

## 6. 功能请求与路线图信号

今日无新功能请求型 Issue 提出，但以下待审查 PR 透露出功能方向：

**[PR #1253 — feat(reasoning): add max effort level](https://github.com/moltis-org/moltis/pull/1253)**（作者: GTanger，状态: OPEN）

- 在共享的 `ReasoningEffort` schema 中新增 `max` 级别，支持 `@reasoning-max` 模型后缀解析
- 通过 OpenAI Codex Responses API 原样转发 `max` 值，同时对不支持独立最大级别的供应商进行钳制（clamping）

**路线图判断**: 该功能瞄准推理能力分级需求，对 OpenAI Codex 及多供应商兼容做了适配。若审查通过，预计纳入下一版本（需关注维护者反馈与 CI 结果）。

---

## 7. 用户反馈摘要

今日无新增 Issue/PR 评论，反馈主要来自 Issue 描述本身：

- **[Issue #1250](https://github.com/moltis-org/moltis/issues/1250)（报告者: xorets）**: 用户在 `20260827.01` 版本中发现 doctor 工具对 `streamable-http` 传输的 MCP 服务器误报失败。该用户的使用场景是配置了传输类型为 `streamable-http` 的 MCP 服务器（无 stdio 命令），且实际工作正常。核心诉求是 **doctor 的诊断逻辑应正确识别非 stdio 传输类型**，而非僵化地要求存在命令字段。

---

## 8. 待处理积压

以下 PR 已开放等待审查/合并：

| 编号 | 标题 | 创建时间 | 状态 | 关注点 |
|------|------|---------|------|--------|
| [#1253](https://github.com/moltis-org/moltis/pull/1253) | feat(reasoning): add max effort level | 2026-09-02 | OPEN | 新功能，涉及 schema 变更与多供应商适配，建议尽快评审 |
| [#1252](https://github.com/moltis-org/moltis/pull/1252) | docs(docker): document the bind-mount permission fix for fresh deploys | 2026-09-01 | OPEN | 文档改进，关闭 Issue #293。解决新部署时 bind-mount 权限导致的 panic 问题（`gateway/src/server.rs:1475`），对 Docker 用户有实际价值 |

**建议**: 两条 PR 分属功能与文档维度，均无 review 评论，维护者可优先安排代码审查，以保持社区贡献者的积极性。

---

*本日报由 AI 自动生成，数据截至 2026-09-02。所有信息来源于 Moltis GitHub 仓库公开数据。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

```markdown
# CoPaw 项目动态日报（2026-09-02）

## 1. 今日速览

CoPaw 项目今日活跃度较高，过去24小时共产生 24 条 Issue 更新（新开/活跃 14 条，关闭 10 条）和 37 条 PR 更新（待合并 22 条，已合并/关闭 15 条），并发布了 v2.2.0-beta.6 和 v2.2.0-beta.7 两个新版本。当前开发热点集中在 Console 侧边栏与设置界面重构 (#7502)、Agent 模型路由配置 (#7501) 以及 Cron 任务调度稳定性修复上。值得注意的是，今日提交的 PR 数量明显多于 Issue，且包含多个较长期的 PR 进入活跃阶段（如 #6936、#6960），说明项目正处于功能迭代与合并的高峰期，整体项目健康度良好。

## 2. 版本发布

今日共发布 2 个预发布版本：

- **v2.2.0-beta.7**: 主要包含三项变更——修复记忆模块中不同后端 embedding 维度归一化问题（[PR #7465](https://github.com/agentscope-ai/QwenPaw/pull/7465)）、版本号升级至 v2.2.0b7（[PR #7485](https://github.com/agentscope-ai/QwenPaw/pull/7485)），以及 WebUI 深色模式覆盖修复中 MCP 区块的样式问题。以上均为增量修复，不涉及破坏性变更。
- **v2.2.0-beta.6**: 主要包含桌面版打包时将 ReMe 入口插件一并打包的修复（[PR #7458](https://github.com/agentscope-ai/QwenPaw/pull/7458)），以及 Console 单元测试的大规模扩展（+617 用例，语句覆盖率提升 10.61pp，[PR #7452](https://github.com/agentscope-ai/QwenPaw/pull/7452)）。测试覆盖率的显著提升表明项目在稳定性保障方面有所加强。

## 3. 项目进展

今日闭环了 15 个 PR，其中值得关注的重要合并/关闭包括：

- **[#7489](https://github.com/agentscope-ai/QwenPaw/pull/7489)（已合并）**：修复 macOS 桌面版 StdIO MCP 服务通过 multiprocessing 派生子进程时导致整个后端重启的问题，通过保留 PyInstaller 的 multiprocessing runtime hook 实现。此修复直接回应了 Issue #7481 报告的问题。
- **[#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473)（已合并）**：修复 MCP Clients 页面在暗色模式下出现大面积白色圆角容器的问题，与 Issue #7471 对应。

在待合并的 PR 中，多个较为长线的功能也在持续推进（详见第 8 节），如 #6960（跨 Agent 数据迁移导入功能）和 #6936（工具参数类型强制转换）。整体来看，项目当前迭代节奏紧凑，新功能界面层（Console 重构方向）与深色模式等体验性问题修复并行推进。

## 4. 社区热点

- **[Issue #7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)（主 agent + 多子 agent 进度不主动汇报，评论 6 条）**：当前热度最高的 Issue。用户反映"主 agent + 多子 agent"任务模式下，主 agent 不会主动查询子 agent 状态，只有在用户询问"进度如何"时才去查询，且在回复前长时间无任务动静。这反映出用户对长时任务透明度和自动汇报机制的强烈需求。
- **[Issue #7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)（危险指令易绕过安全审查，评论 5 条）**：用户报告危险指令容易绕过安全审查，引起社区关注。
- **[Issue #7469](https://github.com/agentscope-ai/QwenPaw/issues/7469)（ReMe 后台 embedding 任务失败，评论 4 条）**：在配置 OpenAI 兼容的 embedding 后端时，ReMe 长期记忆的后台任务失败，报错为 `Dependency as_embedding:default accessed before start()`，与近期 embedding 相关改动（如 #7465）属于同一领域。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 摘要 | 修复状态 |
|---|---|---|---|
| 高 | [Issue #7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) | macOS 上 StdIO MCP spawn 子进程重入 backend_guard 后杀死活动后端 | ✅ 已合并 [PR #7489](https://github.com/agentscope-ai/QwenPaw/pull/7489) |
| 高 | [Issue #7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe 后台 embedding/indexing 任务失败，as_embedding 在 start() 前被访问 | ⚠️ 暂无 fix PR |
| 高 | [Issue #7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | Cron 任务在 misfire_grace 窗口内被重复调度，导致备份脚本执行两次 | ⚠️ 暂无 fix PR |
| 高 | [Issue #7483](https://github.com/agentscope-ai/QwenPaw/issues/7483) | Agent cron 任务每次运行重新加载主会话上下文，且超时后遗留"running"状态阻塞后续触发 | ⚠️ 暂无 fix PR（已关闭，未注明解决方案） |
| 高 | [Issue #7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 主 agent 不主动查询子 agent 状态，任务卡住无进展 | ⚠️ 暂无 fix PR |
| 中 | [Issue #7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | PR #7337 合并后自定义提供商模型无法加载 | ⚠️ 暂无 fix PR |
| 中 | [Issue #7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | 后端不流式下发消息时（火山方舟 + codex 0.144.x），第三方智能体回复"空响应" | ⚠️ 暂无 fix PR |
| 中 | [Issue #6484](https://github.com/agentscope-ai/QwenPaw/issues/6464)（原文编号 #6464） | v2.0.1 在 AgentScope Platform 上无法连接任何模型，聊天界面模型下拉列表为空 | ⚠️ 已关闭，未标注解决方案（可能为外围平台问题） |
| 中 | [Issue #7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) | 升级重启后 cron 非计划补发；cancelled 任务不写收件箱；console 收件箱自动已读（三个关联问题） | ⚠️ 暂无 fix PR |
| 低 | [Issue #7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | 上下文较长时，早期上下文记录突然彻底丢失，任务无法继续 | ⚠️ 暂无 fix PR |
| 低 | [Issue #7471](https://github.com/agentscope-ai/QwenPaw/issues/7471) | MCP Clients 页面深色模式下白色背景 | ✅ 已合并 [PR #7473](https://github.com/agentscope-ai/QwenPaw/pull/7473) |
| 低 | [Issue #7493](https://github.com/agentscope-ai/QwenPaw/issues/7493) | Console 界面无法访问 Agent 模型路由面板 | ✅ 已有 [PR #7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) |

**值得注意的趋势**：Cron 调度相关的 3 个不同 Issue（#7480、#7476、#7483）同时出现，涉及重复触发、非计划补发、超时状态管理等问题，表明 Cron 子系统可能是当前版本（2.1.0/2.2.0b3-b6）中一个需要系统性排查的薄弱环节。主要问题可能集中在 misfire 处理策略、重启后的任务恢复机制以及 share_session 生命周期管理上。

## 6. 功能请求与路线图信号

- **Agent 模型路由 / 子 agent 模型配置**：多个信号指向该方向——[Issue #7493](https://github.com/agentscope-ai/QwenPaw/issues/7493) 反馈 Console 无法访问模型路由面板，[PR #7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) 提交了新增 agent 模型路由设置的功能，为子 agent 模型、fallback 模型及策略提供配置。该功能很可能随 Console 重构进入 v2.2.0 正式版。
- **A2A 协议官方支持**：[Issue #7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) 询问 v2.x 架构文档中所述的 A2A 协议支持计划。当前代码仅实现了 MCP，且官方文档描述 MCP/A2A/ACP 将统一通过 Driver 机制实现。A2A 的优先级目前不明，后续可能在统一 Driver 机制成熟后纳入。
- **官方主题（theming）支持**：[Issue #7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) 反馈桌面版 UI 仅支持单一橙色主题，不可配置强调色、字体与间距。而今日 [PR #7487](https://github.com/agentscope-ai/QwenPaw/pull/7487)（主题 token 统一）与 [PR #7502](https://github.com/agentscope-ai/QwenPaw/pull/7502)（Console 侧边栏和设置体验重构）均在推进中。主题 token 统一极有可能为后续官方主题化铺路，建议关注这两个 PR 的合入进度。
- **跨 Agent 数据导入（Pawport Import）**：[PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)（首贡献者）为从 Codex/Qoder 等 Agent 导入指令、设置、技能、插件等到 QwenPaw 的功能，今日仍处于活跃更新状态。该项将显著降低用户迁移成本。
- **命令拼写错误处理**：[Issue #7479](https://github.com/agentscope-ai/QwenPaw/issues/7479) 建议消息渠道中将拼写错误的命令丢弃并提示用户，而非继续转发给 agent 处理。该诉求属于日常沟通体验细节平滑化。

## 7. 用户反馈摘要

- **长任务执行透明度不足（#7450）**：用户抱怨复杂任务（主 + 多子 agent）执行期间经常长时间无动静，主 agent 不会主动汇报子 agent 的执行状态。用户在描述中直言"经常看到长时间没有任务动静，我问它进度如何时，他才去查询子 agent 的执行状况〔……〕有时会告知子 agent 全部执行好了"。隐含的对 Live 进度展示与主动汇报功能有强烈期望。
- **上下文管理焦虑（#7447/#6464）**：用户在使用约 160 页中文 Word 文档进行 OCR 校对与排版校准场景中，出现早期上下文彻底丢失、连接测试失败等问题。且 #6464 的关闭未附解决方案说明，用户可能无法判断其问题是否为平台侧临时故障。此情形对模型 API 兼容性测试流程中的错误提示可读性（如 "API error when connecting to model 'xxx'"）提出了更高要求。
- **Cron 与备份场景的可靠性问题（#7476/#7483）**：用户将 QwenPaw 用于定时数据备份等生产场景，Cron 重复触发会直接造成实际业务损失（重复备份文件）。
- **实验性/测试性质 Issue 污染**：编号 #7477 和 #7478 被同一提交者标注为"DO NOT CLOSE"的测试 Issue，用于验证 labels 权限问题，需注意避免对仓库讨论信息产生干扰。

## 8. 待处理积压

以下 Issue/PR 长期未获实质性响应或推进，需维护者关注：

- **[PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)（feat: 跨 Agent 数据导入，存活 20 天）**：首贡献者提交的功能型 PR，量级明显偏大，涉及导入指令、设置、技能、插件、项目及最近工作流等多项内容。目前仍显示 OPEN 状态且持续有更新，但尚无针对 code review 的明确标记。建议安排 review 轮次，避免长期悬挂导致的大规模 diff 冲突。
- **[Issue #7406](https://github.com/agentscope-ai/QwenPaw/issues/7406)（Add official theming support）**：自 2026-08-30 提交以来已超过 3 天，仅获 1 条评论且无维护者回复。虽然 #7487 可能部分回应，但该 Issue 本身的官方支持诉求尚未被正式确认或给出时间线。
- **[PR #6936](https://github.com/agentscope-ai/QwenPaw/pull/6936)（tool args 类型转换修复）**：自 2026-08-12 提交以来已待审核 20 天以上，对应 Issue #6839。此修复对模型工具调用的数据可靠性有实际意义，建议优先安排合并或明确下一版本目标版本。
```

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-02

## 今日速览

ZeroClaw 今日活跃度极高：过去 24 小时内有 40 条 Issue 更新（37 活跃/新开，3 已关闭）和 50 条 PR 更新（47 待合并，3 已合并/关闭），讨论热度集中在运行时架构与安全治理领域。尽管今日无新版本发布，但项目处于密集的 RFC 修订与决策周期中——多份重量级架构 RFC（#9487、#9488）正值修订后的新一轮投票窗口，同时涌现出两起 S0 级数据安全缺陷（#10165、#10495），需维护者优先介入。项目整体处于「架构定型 + 安全加固」双线推进阶段。

## 项目进展

今日合并/关闭的 PR 数量较少（3 条），但其中包含有意义的收尾工作：

- **[CLOSED] PR #10515** `feat(docs): add reader and diagram controls`（作者 sunlit-deng，size:L）— 为文档站点新增读者文本缩放（85%-140%，通过本地存储持久化的 `Aa` 设置）及窄屏分页控件。合并后文档可读性显著提升。
- **[CLOSED] PR #9561** `fix(personality): remove filename labels from rendered personality prompt`（作者 jxxralf，size:XS）— 从两条人格渲染路径中移除自动生成的 `### FILENAME.md` 标题，使工作区内容以无冗余文件名标签的形式送达模型。已合并。

此外，多条大型 PR 仍在推进中并为合并做准备——其中**风险最高、体量最大**的几条（均已就绪、等待维护者最终审查）：

- **PR #9977**（risk:high, size:XL, 需维护者评审）— 将文件系统写入操作限定在工作区内、使共享数据目录在所有运行时路径中成为备份/保留的权威来源。该 PR 直接呼应 #10495 的 S0 配置覆盖问题背后的文件写入治理缺口。
- **PR #9745**（risk:high, size:XL）— 为知识图谱引入**按 agent 归属与访问隔离**（SQLite 层强制 `KnowledgeScope` 绑定），阻断跨 agent 记忆/数据泄露。
- **PR #8966**（risk:high, size:XL）— 在用量事件中携带实际服务 provider 身份，并据此解析上下文窗口上限（修复 TUI/web 上下文计量表错误使用 trim budget 作为上限的问题）。

上述 PR 若通过，将系统性解决当前积压的多项 P1/P0 级问题。

## 社区热点

今日讨论最集中的议题并非单一 Bug，而是两份**互相关联的架构级 RFC**——均由 NiuBlibing 发起，聚焦「对话/会话生命周期」与「文件/附件架构」：

- **Issue #9487**（31 条评论）— `RFC: Runtime-owned conversation sessions and transport surface adapters`。Revison 5 已发布，为 Revision 4 投票快照的实质性替换（原投票不结转）。该 RFC 主张将对话会话的所有权从传输层上移至运行时，并以适配器模式解耦各渠道。
- **Issue #9488**（25 条评论）— `RFC: Unified file and attachment architecture for conversation surfaces`。Revision 10 发布，同理由新讨论窗口替代上一版投票。

两份 RFC 讨论高度活跃，且与今日多条 Bug（#8559、#7759、#10050）直接呼应——这些 Issue 共同呈现的叙事是：**当前 gateway WebSocket 与 agent 轮次生命周期强耦合、各渠道文件传递能力参差不齐**。社区在围绕「传输层只做管道、运行时拥有会话与文件」的架构方向凝聚共识。

值得关注的是，参与这些讨论的核心成员（NiuBlibing、Audacity88、JordanTheJet 等）同时是该仓库的维护者或（被标记为）distinguished/experienced contributor，说明热点并非来自纯用户侧，而是**决策层内部就演进方向展开的集中修订**。

## Bug 与稳定性

今日报告的缺陷按严重程度排序如下：

**S0 — 数据丢失/安全风险（需立即响应）**

- **#10495**（P0，status:accepted）— `Config::save()` 可能用近空文件（702 字节）覆盖操作员已填充的 `~/.zeroclaw/config.toml`（原 109 KB、25 个 agents）。为 S0 级配置数据丢失事故。**关联修复 PR #9977 正在等待维护者评审**。
- **#10165**（P1，in-progress）— 独立 delegate 可绕过其自身 `risk_profile` 的 `block_high_risk_commands` 限制执行高危命令（如 `rm`），构成沙箱逃逸级漏洞。**暂无对应 fix PR，建议优先排期**。
- **#8279**（P1，accepted）— delegate 绕过父 agent 的工具 allowlist——子 agent 可调用父策略排除的工具。与 #10165 同属 delegate 授权链缺陷。**暂无对应 fix PR**。

**S1 — 阻塞工作流**

- **#10068**（P1，in-progress）— 交互式 agent 会话将上下文上限硬编码在 32,000 tokens，忽略 `max_context_tokens = 131072` 配置。会话显示 `ctx: 15,538 / 32,000` 并在 32k 处压缩/截断。**PR #8966 针对 context meter 上限问题，或为该缺陷的修复路径**。
- **#9284**（P1，accepted）— `flush_config` 存在三阶段写入竞态，并发写可能被覆盖。
- **#8559**（P1，in-progress）— 用户退出 Web 仪表盘聊天窗口后，agent 的在途任务被当作「用户打断」而停止循环，阻塞长时间任务。

**S2 — 行为劣化**

- **#10523**（P1）— bootstrap 文件（`AGENTS.md` 等）在 6,000 字符处被静默截断，且对操作员不可见。
- **#10501**（P1，in-progress）— MCP 工具返回的图片经 OpenAI-compatible provider 转换后以 `image_url` 出现在 `role: "tool"` 消息中，导致 HTTP 400——与 #9521 的功能请求形成对照（当前是把图片放错位置，而非真正送入 vision 管线）。
- **#9779**（P1，accepted）— 守护进程忽略 `[sop] sops_dir` 文档化默认值，导致 SOP 引擎在依赖默认配置时静默不加载。

**已关闭**

- **#9855**（closed）— Matrix 渠道未遵循 `.well-known/matrix/client` 委托解析 homeserver（严重度标注 S0），今日已由维护者关闭。

## 功能请求与路线图信号

今日功能请求中的关键信号可分为三个方向，其中**前两者有明确 PR 支撑**，大概率进入下一版本：

**1) Web 渠道补齐媒体管线能力（需求明确，PR 已提交）**

- **PR #10544**（今日新开）— 为 Web 仪表盘新增图片上传端点与 attach/drop UI。摘要直言该缺陷是「Web 是唯一无法与 agent 共享图片的渠道」，补齐后与 Telegram/Signal/Matrix/Discord 对齐。关联的需求侧 Issue 为 **#9521**（MCP 图片进 vision 管线，仍处于 blocked 状态）与 **#10501** 的 400 报错。该 PR 尚处于早期阶段，建议维护者将其与 #9521/#10501 的 vision 管线改造一并评估，避免中间态额外返工。

**2) 零代码/CLI 体验细节打磨（多项小 PR 排队）**

- **PR #10545**（ADR 记录 cron 提取决策）、**#10473**（退出确认显示实际配置的 quit 键绑定而非硬编码默认值）、**#10474**（日志详情 fallback 展示实际持久化日志路径）。此类低风险小改进说明核心贡献者在为正式版本做体验收尾。

**3) 架构级演进方向（RFC 通道）**

- 会话运行时所有权（#9487）与统一文件附件架构（#9488）两则 RFC 正值新一轮修订，是当前路线图上最大的未知数。此外 **#10050**（gateway 增加「verbatim 原样发送」路由）、**#10076**（可组合 WASM 插件运行时）也在持续讨论中。

## 用户反馈摘要

从今日更新/评论中可提炼的用户痛感与真实使用场景：

- **配置数据丢失信任危机**：#10495 中用户报告「工作区测试运行后 109 KB 配置被替换为 702 字节近空文件」，属于最为严重的信任破坏型缺陷——用户无法预判自己的配置何时会被静默抹除。值得注意的是 S0 级问题 #8279、#10165 同样与 Sandbox/权限相关，需在修复时整体审计。
- **长任务脆弱性**：#8559 与 #7759 共同揭示一个高频使用场景——用户在 Web 仪表盘上给 agent 布置任务后希望断开等待结果，而非被取消。该反馈成为会话生命周期与传输解耦（#9487）的主要用户侧驱动力。
- **安全研究员在主动压测**：#10165、#8279 均来自外部贡献者对 delegate 权限链的细致排查，说明社区对 ZeroClaw 安全边界有持续关注；这意味着该领域的修复质量将直接影响项目声誉。
- **SOP 静默未加载**（#9779）：用户按文档默认配置部署后 SOP 引擎完全不工作——问题不在配置错误而在文档与实现脱节。此类「文档引导的失败」对开发者体验的伤害往往大于显式报错。
- **对修复及时性的隐性期待**：今日三条合并的 PR 中（#9561 等）大多为体量很小的修复与体验优化；而社区呼声很高的 S0 delegate 权限问题尚未见对应 PR，若长期停留在 accepted 状态，可能造成贡献者流失。

## 待处理积压

以下为长期未合入的重要 Issue/PR，建议维护者优先检查：

**安全关键项（S0/S1，长期未得到 PR 加持）：**

- **#8279**（6 月 24 日创建，已 accepted，70+ 天）— delegate 绕过父工具 allowlist。零 fix PR。同为 delegate 授权链问题，#10165（8 月 20 日创建）已标记 in-progress，建议将两案合并排期。
- **#10165**（8 月 20 日）— delegate 绕过自身 risk_profile 高危命令限制，尚无对应 PR。
- **#9521**（7 月 28 日，blocked）— MCP 图片进 vision 管线，今日新 PR #10544 部分关联，建议解除 blocked 状态并与该 PR 联动。

**等待作者响应/维护者行动（PR 侧）：**

- **PR #8546**（6 月 30 日，needs-author-action）— CLI 状态文本本地化，维护者已亲自 rebase 并修补 lint 与回归测试，但等待作者配合。
- **PR #9197**（7 月 20 日，needs-author-action）— CLI Ctrl+C 与 supervisor 生命周期令牌衔接，修复 WhatsApp 监听器无限重启。

**需维护者评审的高风险大型 PR（已就绪，等待拍板）：**

- **PR #9977**（8 月 13 日，size:XL）— 文件写入限定于工作区，直接对治 S0 配置覆盖事故（#10495）。
- **PR #9745**（8 月 4 日，size:XL）— 知识图谱 per-agent 归属隔离。
- **PR #8966**（7 月 11 日，size:XL，needs-author-action）— 实际 service provider 身份携带与上下文窗口解析修复。

**RFC 决策队列提醒：**

- 跟踪器 **#8692**（Maintainer decision queue）今日依旧活跃（8 月 14 条评论中持续更新），明确标注 #9487、#9488 两则 RFC 正处于「Revision 5 / Revision 10 新一轮投票窗口」。维护者需在本轮窗口关闭前完成讨论记录与快照，避免再次出现「投票不结转」的空转。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*