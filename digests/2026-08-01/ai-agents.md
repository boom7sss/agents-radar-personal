# OpenClaw 生态日报 2026-08-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-01 03:32 UTC

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

# OpenClaw 项目动态日报 — 2026-08-01

## 今日速览

过去 24 小时仓库活跃度极高：500 条 Issue 更新（新开/活跃 464 条，关闭 36 条）与 500 条 PR 更新（待合并 385 条，合并/关闭 115 条）双双爆满，说明社区反馈量和贡献者投入均处于高峰。但健康度隐忧明显：**P0 级 Gateway 内存泄漏（#91588）仍在无 fix PR 状态**，且大量 Issue 被标记 `clawsweeper:needs-maintainer-review` / `needs-product-decision`，显示维护者审阅环节已成为瓶颈。今日无新版本发布，项目处于"高输入、低输出"的积压状态。

---

## 版本发布

过去 24 小时无新版本发布（Releases: 0）。上一个已知版本为 2026.7.1，社区中仍有针对该版本的多项回归报告（见下文 Bug 章节），建议维护者关注下个补丁版本的排期。

---

## 项目进展

今日共有 **115 条 PR 被合并/关闭、36 个 Issue 被关闭**，部分关键进展如下：

| 条目 | 类型 | 说明 |
|---|---|---|
| [PR #116733](https://github.com/openclaw/openclaw/pull/116733)（已关闭） | 修复 | `fix(gateway): prevent crash loops from state DB schema migration errors` — 修复了 `agent_datab` 旧版共享状态库升级时进入托管 Gateway 重启循环的问题，为 `openclaw doctor --fix` 恢复路径让路。对应 Issue #116239 |
| [Issue #116418](https://github.com/openclaw/openclaw/issues/116418)（已关闭） | 缺陷闭环 | Ollama provider 在 2026.7.1 中永远不被选为主模型、路由总是回退的问题已关闭 |
| [Issue #116409](https://github.com/openclaw/openclaw/issues/116409)（已关闭） | 缺陷闭环 | 所有渠道入站消息被写入 transcript 两次的问题已关闭（曾导致孤儿清理与投影重建） |
| [Issue #116868](https://github.com/openclaw/openclaw/issues/116868)（已关闭） | 缺陷闭环 | SQLite 会话回退到冻结的 legacy JSONL 并复活已完成任务的问题已关闭 |
| [Issue #116391](https://github.com/openclaw/openclaw/issues/116391)（已关闭） | 缺陷闭环 | WebChat 跨天首条消息导致历史记录消失的问题已关闭 |

**架构层面**：vincentkoc 提交的 `refactor(agents): centralize local turn lifecycle ownership`（[PR #116403](https://github.com/openclaw/openclaw/pull/116403)）和 `refactor(sessions): move store ownership out of gateway`（[PR #116437](https://github.com/openclaw/openclaw/pull/116437)）持续推进中，目标是将 session store 与 turn 生命周期管理从 Gateway 包中解耦，为 ACP 协议成为一等适配器铺路。这两项属于大型重构（XL），带有 `merge-risk: 🚨 session-state` / `compatibility` 警告，值得关注。

整体来看，项目今日的"合并节奏"主要停留在缺陷修复与架构重构的准备阶段，尚无新功能落地。

---

## 社区热点

### 🥇 [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) — 116 评论 / 80 👍
**状态**：OPEN · P2 · enhancement · 创建于 2026-01-01
**诉求**：项目已有 macOS、iOS、Android 客户端，唯独缺少 Linux 和 Windows 桌面应用。
**分析**：这是全仓库评论数、点赞数双第一的 Issue，已悬挂 7 个月。80 个 👍 代表强烈的跨平台桌面端需求，但标签仍停留在 `help wanted` + P2，说明项目路线图尚未将其纳入正式规划。考虑到 AI Agent 类产品的用户大量集中于 Linux 开发者群体，此需求的优先级可能被低估。

### 🥈 [#91588 Gateway 内存泄漏导致 OOM 崩溃](https://github.com/openclaw/openclaw/issues/91588) — 23 评论 / 1 👍
**状态**：OPEN · **P0** · bug
**诉求**：Gateway 进程 RSS 从启动时的 ~350MB 在 2-3 天内涨到 15.5GB，被 OS OOM Killer 杀死后陷入 `launchd-handoff` 无限重启循环。
**分析**：P0 级 bug 却只有 1 个 👍，说明受影响用户基数可能不大（或用户已疲惫）。该 Issue 同时被标记 `clawsweeper:needs-maintainer-review`、`needs-product-decision`、`needs-live-repro`，且处于 `clawsweeper-recovery-stuck` 状态——自动修复机器人也卡住了，这是当前项目最严重的稳定性隐患。

### 🥉 [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — 23 评论
**状态**：OPEN · P2 · enhancement
**诉求**：按来源（用户命令 / 网页抓取 / 第三方技能）为 agent 记忆条目打信任标签，防止恶意指令通过不可信内容（网页、消息、第三方集成）实施**记忆投毒攻击**。
**分析**：与 [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)（14 评论 / 4 👍）共同构成社区对 **AI 安全边界** 的关注主线——用户不仅担心密钥泄露，还担心记忆被污染后长期操纵 agent 行为。这类需求在 AI Agent 赛道属于前瞻性设计，建议维护者至少给出产品层面的方向性回应。

---

## Bug 与稳定性

今日报告的 Bug 数量多、覆盖面广，按严重程度排列如下：

### 🔴 P0 / 崩溃级
| Issue | 问题 | 是否有 fix PR |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏：RSS 350MB→15.5GB，OOM 反复崩溃 | ❌ 无 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | macOS 空闲时 heap 涨至 1073MB+，cron 任务在内存压力下静默失败 | ❌ 无（关联 #86613/#86509） |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | Transcript 投影在持续写入下 livelock，阻塞主线程、卡死所有渠道 | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程不回收，zombie 累积导致运行时劣化 | ❌ 无 |

### 🟠 P1 / 功能严重受损
| Issue | 问题 | 是否有 fix PR |
|---|---|---|
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 5.20 更新后 Telegram 重复回复 2-10 次（回归） | ❌ 无 |
| [#114137](https://github.com/openclaw/openclaw/issues/114137) | 回复已生成并持久化但从未投递（7.1-2 回归） | ❌ 无 |
| [#114255](https://github.com/openclaw/openclaw/issues/114255) | 重启后 session 卡在 `running` 状态，Telegram spool 永远重试 | ❌ 无 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音会话无界保留 provider/consult 状态 | ❌ 无 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | LLM API 持续 500 时 cron 任务耗尽全部超时窗口而非快速失败 | ❌ 无 |
| [#70024](https://github.com/openclaw/openclaw/issues/70024) | 渠道停止超时后永久假死（`running: true` + 脏 store） | ✅ 有 linked PR |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | `clearUnboundScopes` 无条件剥离 operator 权限，破坏 token 认证客户端（安全） | ✅ 有 linked PR |
| [#64267](https://github.com/openclaw/openclaw/issues/64267) | 2026.4.9 起 agent 英文内部思考被暴露给用户 | ❌ 无 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 渠道回复 token 过期致消息静默丢失 | ✅ 有 linked PR（但已 stale） |
| [#109017](https://github.com/openclaw/openclaw/issues/109017) | Anthropic provider 从模型选择器消失，静态目录不拉新模型 | ❌ 无 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 大参数 tool call 生成超时导致 "Network connection lost" | ❌ 无（已 stale） |

### 🟡 P2 / 体验受损
- [#51429](https://github.com/openclaw/openclaw/issues/51429)：有人把工作路径 `/Users/wangtao` hardcode 进代码并被合并发布（中文用户报告，情绪强烈）
- [#115001](https://github.com/openclaw/openclaw/issues/115001)：混合记忆搜索经 FTS LIKE 回退路径返回虚假的 1.0 相似度
- [#77930](https://github.com/openclaw/openclaw/issues/77930)：Discord 渠道在 2026.5.4 回归性加载失败（✅ 有 linked PR）
- [#77625](https://github.com/openclaw/openclaw/issues/77625)：`reasoningDefault=stream` 引发无限推理递归
- [#95553](https://github.com/openclaw/openclaw/issues/95553)：预算触发的压缩被硬编码 60s 上限，无法配置

**稳定性研判**：本轮 Bug 的重灾区集中在 **session-state 管理与消息投递可靠性**——多个独立报告（#114137、#114255、#114211、#115476、#96692）指向同一类根因：会话状态在重启/压缩/超时后进入不一致的中间态。这已不是偶发问题，而是系统性的状态机缺陷，建议维护者成立专题排查。

---

## 功能请求与路线图信号

### 高热度需求（可能进入下个版本）
| 需求 | Issue/PR | 热度与状态 |
|---|---|---|
| Linux/Windows 桌面应用 | [#75](https://github.com/openclaw/openclaw/issues/75) | 116 评论 / 80 👍，最强烈需求 |
| 记忆来源信任标签（防投毒） | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 23 评论，安全类头部需求 |
| 密钥掩码（agent 可用不可见） | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 14 评论 / 4 👍 |
| 上下文超限时触发模型回退 | [#9986](https://github.com/openclaw/openclaw/issues/9986) | 已有 `fallbacks` 配置但只对 API 错误生效 |
| 全动态模型发现（OpenRouter） | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 9 评论 / 3 👍，与 #109017 的静态目录问题互相印证 |
| 按模型用量日志（成本追踪） | [#13219](https://github.com/openclaw/openclaw/issues/13219) | 6 评论 / 1 👍 |

### 已在 PR 中体现的路线图信号
- **安全审计增强**：[PR #117034](https://github.com/openclaw/openclaw/pull/117034) `feat(audit): add execution identity inspection`（XL 级，已获契约方批准）
- **新 Provider 接入**：[PR #116016](https://github.com/openclaw/openclaw/pull/116016) 注册 Telnyx 官方外部 Provider；[PR #113578](https://github.com/openclaw/openclaw/pull/113578)/[#113579](https://github.com/openclaw/openclaw/pull/113579) 修正 Qwen Token Plan 目录
- **本地化推进**：[PR #111541](https://github.com/openclaw/openclaw/pull/111541) 增加 locale context 与消息渲染；[PR #86085](https://github.com/openclaw/openclaw/pull/86085) 繁中台湾用语对齐
- **P2P 连接探索**：[PR #113643](https://github.com/openclaw/openclaw/pull/113643) Iroh 框架直连 Gateway（iOS/App，德语提案，说明社区国际化程度高）
- **ACP 架构铺垫**：#116403 + #116437 系列重构

---

## 用户反馈摘要

从今日 Issues 评论中提炼的真实用户声音：

**😤 不满与痛点**
1. **"这 wangtao 是谁？"**（[#51429](https://github.com/openclaw/openclaw/issues/51429)）：中文用户安装最新版后发现代码 hardcode 了某位开发者的个人路径 `/Users/wangtao`，被自动创建目录并设为工作区。这是严重的工程规范事故，用户信任受损。
2. **内存问题反复无解**（[#87109](https://github.com/openclaw/openclaw/issues/87109)）：用户描述 cron 任务在内存压力下"无输出、无推送、无错误上报"三无静默失败，排查成本极高。
3. **消息丢失挫败感强**（[#86012](https://github.com/openclaw/openclaw/issues/86012)、[#96692](https://github.com/openclaw/openclaw/issues/96692)）：LINE/Slack 用户收到"已生成但未投递"的响应，agent 端毫无感知。

**🙏 满意的方向**
1. 社区对**安全类增强**（#7707、#10659）的讨论质量很高，用户愿意参与设计而非单纯抱怨，说明对项目信任度仍在。
2. 多个用户主动提供**复现矩阵**（如 #77930 的版本回归表、#115001 的逐查询得分聚类分析），协助维护者定位问题，社区贡献生态健康。
3. 中文/德语用户均在用母语提交高质量 Issue，国际化社区活跃，但也提示维护者需要多语言 triage 支持。

---

## 待处理积压

### 🚨 需要立即关注
| Issue | 问题 | 积压时长 | 备注 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **P0 内存泄漏**，OOM 崩溃循环 | 自 06-09，已 7 周 | 无 fix PR，clawsweeper 机器人卡死 |
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 应用 | 自 01-01，已 7 个月 | 116 评论 / 80 👍，无明确路线图回应 |

### ⚠️ 长期滞留（stale 标记或超 3 个月无实质进展）
| Issue | 问题 | 创建时间 | 当前状态 |
|---|---|---|---|
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 大参数 tool call 触发断连 | 03-24 | stale，8 评论 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 消息静默丢失 | 05-24 | stale，有 linked PR 但未推进 |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | Topic-session families | 06-06 | stale |
| [#47979](https://github.com/openclaw/openclaw/issues/47979) | Chrome 146 下 UI 完全冻结 | 03-16 | stale，Firefox 正常 |
| [#48238](https://github.com/openclaw/openclaw/issues/48238) | 饱和会话的 loop-aware 压缩守卫 | 03-16 | stale |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) | 压缩重试产生孤儿 parentId 分支 | 03-17 | 6 评论，无 fix |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | `elevated.enabled: true` 破坏 exec 路由（安全） | 03-15 | 7 评论，无 fix |

### 📊 结构性警示
本次 500 条 Issue 中，**绝大多数带有 `clawsweeper:no-new-fix-pr`、`clawsweeper:needs-maintainer-review`、`clawsweeper:needs-product-decision` 标签**，另有 8 个处于 `clawsweeper-recovery-stuck`。这说明自动修复机器人（ClawSweeper）已批量产出"待人工决策"的工单，但维护者审阅吞吐跟不上。**建议：** 优先清理 P0/P1 + security 标签的积压工单，并对 `needs-product-decision` 类需求给出批量路线图回应，避免社区热度过期冷却。

---

*本日报由 AI 基于 OpenClaw 公开 GitHub 数据自动生成，数据窗口为 2026-07-31 至 2026-08-01。*

---

## 横向生态对比

# AI Agent 开源生态横向对比分析报告

**数据日期：2026-08-01｜覆盖项目：13 个｜有活跃动态 11 个，完全静止 2 个**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**"规模繁荣与治理阵痛并存"**的阶段：头部项目（OpenClaw）单日 Issue/PR 更新均达 500 条，但维护者审阅吞吐明显跟不上社区输入，"高输入、低输出"成为普遍现象。横向观察，会话状态一致性与消息投递可靠性已取代基础功能开发，成为全行业最集中的稳定性短板——多个独立项目出现"任务显示成功但实际未送达""重启后状态卡死""单条坏消息永久毒化整个会话"等同类故障。与此同时，安全边界意识显著觉醒，记忆投毒防御、凭据脱敏、权限隔离从"前瞻讨论"变为"正在合入的 PR"。生态整体呈现**从"能用"向"可信、可控、可运维"过渡**的明确信号。

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | Release | 合并/关闭 | 核心数据特征 | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（464 活跃/36 关） | 500（385 待合/115 合关） | 无 | 115 PR / 36 Issue | 体量为生态第一，P0 内存泄漏 7 周无 fix，385 条 PR 积压 | 🟡 繁荣但治理失衡 |
| **IronClaw** | 36（29 活跃/7 关） | 50（21 待合/29 合关） | 无 | 29 PR / 7 Issue | 合并率最高（58%），WS 重构 4 连合，Hosted MCP 落地；但 P0 跨用户内存泄漏无 fix | 🟢 大项目中健康度最佳 |
| **ZeroClaw** | 50（45 活跃/5 关） | 50（41 待合/9 合关） | 无 | 9 PR / 5 Issue | RFC 驱动，7 个 Hindsight 记忆 PR 全部卡在 `needs-author-action` | 🟡 评审流程正常，作者响应成瓶颈 |
| **Hermes Agent** | 50（46 活跃/4 关） | 50（40 待合/10 合关） | 无 | 10 PR / 4 Issue | 80% PR 待合，安全债重（token 外泄、明文凭据）；3 个关键 Bug 已落主干 | 🟡 高活跃，质量与安全待收紧 |
| **CoPaw (QwenPaw)** | 16（11 活跃/5 关） | 34（24 待合/10 合关） | 无 | 10 PR / 5 Issue | 2.0.1 稳定性问题集中爆发，但社区响应极快（严重 Bug 24h 内出修复 PR） | 🟡 快速迭代，稳定性是主要矛盾 |
| **NanoClaw** | 8（全活跃） | 10（6 待合/4 合关） | 无 | 4 PR | iMessage 统一适配器合并；3 个新 PR 被直接关闭（收紧 AI 生成代码准入门槛） | 🟢 良好，多运行时诉求积压 |
| **NanoBot** | 4（2 开/2 关） | 13（7 待合/6 合关） | 无 | 6 PR / 2 Issue | 会话存储迁移 SQLite；Bug 修复效率高（高危问题均有关联 PR） | 🟢 健康，小而快 |
| **Moltis** | 2（1 开/1 关） | 7（5 待合/2 合关） | 无 | 2 PR | 3 个安全修复 PR 待合（zip 任意写、配对签名、特权越权） | 🟡 正常，安全 PR 需优先 |
| **LobsterAI** | 0 新增，4 stale 清理 | 5 PR 关闭 | 无 | 5 PR | 维护者驱动型：DeepSeek 缓存命中率修复极有价值，但外部贡献 PR 被 stale 批量关闭 | 🟡 内部高效，外部贡献流失 |
| **PicoClaw** | 2 | 3（全待合） | 无 | 0 PR / 0 Issue | 3 个 PR 悬置约 30 天，0 合并 | 🔴 维护吞吐不足 |
| **NullClaw** | 0 | 1（待合） | 无 | 0 | grok-cli provider PR 等待响应 | 🟡 低活跃 |
| **TinyClaw** | 0 | 0 | 无 | — | 24h 无任何动态 | ⚪ 静止 |
| **ZeptoClaw** | 0 | 0 | 无 | — | 24h 无任何动态 | ⚪ 静止 |

## 3. OpenClaw 在生态中的定位

**OpenClaw 是生态的绝对基准与"母体"**，单日 Issue/PR 更新量（各 500）是第二名梯队的 10 倍，且已形成显著的生态衍生效应——LobsterAI、TinyClaw、ZeptoClaw 均为直接衍生/参照项目，IronClaw 甚至收到"从 Hermes/OpenClaw 迁移配置与记忆"的功能请求（#6939），侧面印证其社区心智占据率。

**技术路线差异**：OpenClaw 走"Gateway 单体聚合 → 逐步解耦"路线，核心方向是将 session store 与 turn 生命周期管理移出 Gateway 包，为 ACP 协议成为一等适配器铺路（PR #116403/#116437）。相较之下，IronClaw 采用更激进的契约抽取（WS1 波 4 个独立 crate 同日合并），ZeroClaw 则通过 RFC 机制先行确立架构共识再实施。OpenClaw 的 ClawSweeper 自动修复机器人是生态中独有的自动化运维设施，但当前 8 个 `recovery-stuck` 状态说明其自身也需人工兜底。

**社区规模对比**：OpenClaw 的 Issue/PR 绝对值分别是 IronClaw/ZeroClaw/Hermes 的约 14 倍/10 倍/10 倍（Issue 侧），但合并率（23%）显著低于 IronClaw（58%），P0 bug 7 周无修复且无 fix PR——**生态地位与治理能力之间的剪刀差是 OpenClaw 当前最大风险**，也是其他项目争夺"更可靠替代品"定位的机会窗口。

## 4. 共同关注的技术方向

### ① 会话状态一致性与自愈能力（波及面最广）
- **OpenClaw**：多个独立报告指向同一根因——会话状态在重启/压缩/超时后进入不一致中间态（#114137、#114255、#115476、#96692）
- **Hermes Agent**：#69078 单条坏消息永久毒化会话；#71643 "已投递"假象
- **CoPaw**：agent.json 系统性损坏（20+ 字段三种损伤类型）、记忆压缩丢失早期会话
- **NanoBot**：会话存储从 JSONL 迁移 SQLite，本质是对状态层可靠性的架构级回应
- **ZeroClaw**：对话历史与长期记忆架构分离的 RFC 获得全社区最高讨论量（14 评论）

### ② 安全边界与凭据治理
- **Hermes**：#74649 会话 token 可被 @-paths 外泄；#43666 明文密码落盘（单会话 23 处）；#75800 审批卡片提权
- **Moltis**：3 个安全修复 PR 同日待审（zip 任意文件写入、节点配对签名、特权命令越权）
- **OpenClaw** 社区呼声：#7707 记忆来源信任标签（防投毒）、#10659 密钥掩码
- **ZeroClaw**：KeySource trait 抽象（93 个 `#[secret]` 字段）、高危 shell 命令 allow/ask/deny 策略、Linq webhook 别名归属强制
- **IronClaw**：P0 跨用户内存泄漏（#6900）、共享 home 目录隐私问题（#6866）
- **NanoClaw**：#2923 交互卡片可被伪造点击、结构化日志脱敏 PR

### ③ 消息投递真实性——"静默失败"是全生态最伤信任的 Bug 类型
- **OpenClaw**：回复已生成但从未投递（#114137）；LINE 静默丢失（#86012）
- **Hermes**：#71643 截断预览标记为已投递；#74248 Discord 重复投递；#60637 邮件网关可能误发自动回复
- **CoPaw**：微信 cron 推送显示 success 但从未送达、烧毁 44M tokens；飞书音频静默转写失败
- **NanoBot**：Weixin 扫码后进入"永久静默死循环"

### ④ 运行时与部署形态多样化
- **NanoClaw**：K8s runtime、原生模式（绕过 Docker）、Apple Container 三条线并发，社区最强烈诉求是"去 Docker 依赖"
- **Hermes**：macOS/Windows 更新链路自愈、launchd 托管网关
- **OpenClaw**：#75 Linux/Windows 桌面应用（80 👍，全仓库最高）
- **CoPaw**：全局热键悬浮窗、桌面端 UI 适配

### ⑤ 记忆可信化与 token 成本工程化
- **ZeroClaw**：Hindsight 记忆栈 7-PR 系列（共享/系统记忆层级、召回调优、遗忘 API）
- **IronClaw**：pi-harness 采纳计划（提示词前缀稳定性、显式 cache_control 断点、令牌核算），4 个 P0 缓存项直接立项
- **LobsterAI**：修复 DeepSeek 前缀缓存命中率从 ~57% 恢复到近 100%
- **OpenClaw**：#7707 记忆信任标签

### ⑥ 互操作协议收敛
- **OpenClaw**：ACP 协议适配器化
- **ZeroClaw**：A2A 出站客户端 + OpenAI 兼容端点（LangChain/LobeChat/Continue.dev 生态接入）
- **IronClaw**：Hosted MCP 注册（+15k 行）
- **Moltis**：Nostr NIP-29 组聊（接入 Block 系 Buzz）
- **PicoClaw**：Simplex 通道 PR；IRCv3 长消息语义合并

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键架构特征 | 独特标签 |
|---|---|---|---|---|
| **OpenClaw** | 综合型个人 AI 网关 | 深度个人用户/极客 | Gateway 聚合多通道 + 多 Provider，ACP 适配中 | 生态母体、渠道最广 |
| **Hermes Agent** | 桌面优先的本地 Agent | 桌面开发者（macOS/Windows） | CLI/TUI + 桌面 GUI + launchd 网关，多 profile | 更新链路与桌面体验 |
| **IronClaw** | 多租户托管 Agent 平台 | 平台/企业用户 | Rust 多 crate 契约驱动，Hosted MCP，租户隔离 | 架构治理最严格 |
| **ZeroClaw** | 多代理协奏 + 生态互操作 | 平台集成者/高级用户 | RFC 驱动、A2A 出站、OpenAI 兼容端点、Wasm 插件路线 | 架构先行、互操作 |
| **CoPaw (QwenPaw)** | 国内生态整合型桌面+渠道 Agent | 中文用户/多 Provider 用户 | AgentScope 深度绑定，桌面应用 + 飞书/微信，多厂商模型 | 中文社区响应最快 |
| **NanoBot** | 轻量单机个人助手 | 个人极客/HKUDS 生态 | 单二进制、SQLite 会话、WebUI | 小而快、PR 周转效率高 |
| **NanoClaw** | 极简安全 Agent | 苹果生态/容器玩家 | Docker-first、Apple Container 支持、iMessage 通道 | 轻量安全替代品 |
| **PicoClaw** | 多协议通道桥接 | 协议玩家（IRC/DeltaChat） | 通道适配器为核心资产 | IRCv3 长消息语义 |
| **NullClaw** | 本地 CLI Provider 聚合 | CLI 重度用户 | codex-cli/gemini-cli/claude-cli 复用模式 | 去云端 API 依赖 |
| **Moltis** | 安全优先的去中心化 Agent | 隐私敏感用户 | Rust、Nostr 生态、feature-gate 设计 | 外部安全审计驱动 |
| **LobsterAI** | OpenClaw 衍生 + 成本优化 | 成本敏感生产用户 | DeepSeek 缓存稳定性专项 | 前缀缓存工程化 |

## 6. 社区热度与成熟度

**第一梯队 · 快速迭代期（日均 30+ 动态，功能与重构并行）**
OpenClaw、IronClaw、ZeroClaw、Hermes、CoPaw（NanoClaw 以 18 条动态接近梯队下限）。其中 IronClaw 处于"架构收敛 + 性能攻坚"双线推进，ZeroClaw 处于"RFC 治理 + 记忆栈建设"，CoPaw 处于"2.0 稳定性修复冲刺"——后三者即使高活跃也各有明确收敛目标。

**第二梯队 · 质量巩固期（动态量小，修复/打磨为主）**
NanoBot、Moltis、LobsterAI。合并效率高、方向聚焦（NanoBot 存储迁移、Moltis 安全合入、LobsterAI 缓存修复），属于"小步快跑、质量优先"。

**第三梯队 · 维护积压期（贡献有输入、维护无输出）**
PicoClaw（3 PR 悬置 30 天零合并）、NullClaw（1 PR 待响应）。贡献者生态在，但审查吞吐是硬瓶颈，**有贡献流失风险**。

**静止项目**
TinyClaw、ZeptoClaw——24h 完全无动态，建议社区关注其维护者意向。

**成熟度综合排序建议**：IronClaw（合并闭环与架构治理最佳）＞ NanoBot（效率最高）＞ ZeroClaw/Hermes（活跃但积压）＞ OpenClaw（规模最大但治理失衡）＞ CoPaw（响应快但稳定性拖累）＞ Moltis/LobsterAI（稳定）＞ 其余。

## 7. 值得关注的趋势信号

**① 会话状态机正在成为 Agent 可靠性的"最后一公里"**
多个独立项目不约而同撞上同一类缺陷：状态在重启、压缩、超时后进入脏中间态。这不是单个项目的实现失误，而是 **Agent 长时运行 + 状态持久化 + 外部渠道确认**三方交互的系统性难题。对开发者意味着：将 session state 视为一等公民设计（如 NanoBot 迁 SQLite、IronClaw 的契约化抽取），而非附带功能。

**② "静默失败"比崩溃更伤信任**
微信推送 success 但从未送达、Telegram 已投递但回复截断、飞书音频无报错丢失——Agent 自主行动的不可见性放大了错误后果。**可观测性（真实投递确认、显式错误传播）将成为 Agent 框架的标配能力**，Moltis 引入 OTel/Langfuse 基础设施、ZeroClaw 增加 `gen_ai.conversation.id` 跨轮次关联均是此信号。

**③ 记忆安全从"讨论"走向"合入"**
记忆投毒攻击防御（OpenClaw #7707）、密钥可用不可见（#10659）、日志脱敏（NanoClaw #3161）等安全需求已具备明确设计草案与实现 PR。**AI Agent 的记忆层正在获得与数据库同等级的完整性、审计与权限治理要求**——这是智能体从玩具走向生产工具的必经之路。

**④ Docker 依赖开始被系统性质疑**
NanoClaw 社区 4 个月持续追问"能否不用 Docker"，K8s/原生模式/Apple Container 三条线并行；OpenClaw #75 桌面应用是去容器化的另一表达。**"运行时抽象"即将成为 Agent 框架的架构分水岭**，率先提供多运行时支持的玩家将获得企业级部署红利。

**⑤ Prompt 缓存与 token 成本进入工程优化期**
IronClaw 的 pi-harness 计划（前缀稳定性、cache_control 断点、令牌核算）与 LobsterAI 的缓存命中率修复，标志社区已开始用**系统化手段**优化 LLM 调用成本。提示词前缀"字节级稳定"正在成为性能指标，这将反向影响 Agent 框架的消息组装与记忆注入设计。

**⑥ 协议生态走向互操作收敛**
ACP（OpenClaw）、A2A（ZeroClaw）、MCP（IronClaw Hosted）、OpenAI 兼容端点（ZeroClaw）、NIP-29（Moltis）——**Agent 间通信与生态接入正在形成多个事实标准并存的局面**。对开发者而言，接入成本最低的"协议多边形"项目（同时支持 ACP + MCP + OpenAI 兼容）将获得最大的生态杠杆。

**⑦ 多语言社区崛起，维护者需重构 triage 能力**
中文用户报告被 hardcode 的个人路径（OpenClaw #51429）、德语提案（OpenClaw P2P PR）、中文用户的 AI 对话界面 CPU 问题（PicoClaw #3292）——**非英语贡献者正在大规模涌入**，且质量不低（中文用户同样提供复现矩阵）。维护者需建立多语言 triage 机制，这既是包容性议题，也是社区规模化的现实需求。

---

**一句话结论**：个人 AI 助手生态正处于"OpenClaw 领跑但治理承压、第二梯队靠架构与安全差异化突围"的格局重塑期；会话状态可靠性、记忆安全与运行时抽象是决定下一阶段座次的三张关键牌。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-01

## 1. 今日速览

过去24小时项目活跃度高：4条Issue更新（2开2关），13条PR活动（7条待合并、6条已合并/关闭）。今日合并的PR中，包含一次重要的架构级变更——会话存储从JSONL迁移至SQLite（[#5173](https://github.com/HKUDS/nanobot/pull/5173)），以及Weixin、Slack、WebUI多个稳定性修复。三个已报告Bug中，两个已有直接修复PR（[#5195](https://github.com/HKUDS/nanobot/issues/5195)→[#5196](https://github.com/HKUDS/nanobot/pull/5196)、[#5190](https://github.com/HKUDS/nanobot/issues/5190)→[#5191](https://github.com/HKUDS/nanobot/pull/5191)），一个已随PR合并关闭（[#5187](https://github.com/HKUDS/nanobot/issues/5187)→[#5189](https://github.com/HKUDS/nanobot/pull/5189)）。无新版本发布，项目处于快速迭代期，社区贡献活跃。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的6个PR中，以下变化值得重点关注：

- **会话存储架构迁移（[#5173](https://github.com/HKUDS/nanobot/pull/5173)，已合并）**：将 `sessions.db` 设为唯一运行时会话存储，首次启动时事务性导入现有 `<workspace>/sessions/*.jsonl`，并保留JSONL作为回滚备份。同时将WebUI会话列表和Dream修剪均路由到 `SessionManager`。这是会话层走向更可靠、可扩展存储的重要一步。
- **Weixin通道死循环修复（[#5196](https://github.com/HKUDS/nanobot/pull/5196)，已合并）**：修复 #5195。当长时间运行的频道因 `errcode -14` 暂停60分钟时，若期间 `account.json` 被刷新，频道在暂停结束后会重新加载持久化状态，打破“旧token失效→再次errcode -14”的永久静默循环。
- **Slack线程会话作用域修复（[#5192](https://github.com/HKUDS/nanobot/pull/5192)，已合并）**：顶层频道消息打开的新线程不再落入频道级共享会话，每个新线程从第一条消息起即拥有自己的作用域，避免不相关线程互相串扰。
- **WebUI滚动交互修复（[#5193](https://github.com/HKUDS/nanobot/pull/5193)，已合并）**：优化了近底部区域的滚动“所有权”——用户手动上滑后不再被自动跟随抢占，仅在离开阈值再返回或显式跳转时恢复自动跟随。
- **跨平台时区支持（[#5189](https://github.com/HKUDS/nanobot/pull/5189)，已合并）**：所有平台安装 `tzdata` 作为 `zoneinfo` 回退，修复 Termux 等无系统时区数据库环境下的启动失败。同步保留严格无效时区校验。
- **旧Weixin修复PR关闭（[#4223](https://github.com/HKUDS/nanobot/pull/4223)，已关闭）**：该PR于6月6日创建、7月31日关闭，与 #5196 解决的问题高度重合，大概率被后者取代。建议维护者确认关闭原因并在 #5196 中关联说明。

## 4. 社区热点

- **[#5195](https://github.com/HKUDS/nanobot/issues/5195)（2条评论）**：Weixin 重扫二维码后新token被旧token覆盖，导致 `errcode -14` 会话过期及60分钟暂停。该Issue同时关联修复PR [#5196](https://github.com/HKUDS/nanobot/pull/5196) 和早期PR [#4223](https://github.com/HKUDS/nanobot/pull/4223)，是本日讨论最集中的问题，背后诉求是“会话生命周期管理需要自愈能力”。
- **[#5190](https://github.com/HKUDS/nanobot/issues/5190)（0条评论）**：Windows下静态资源以 `text/plain` MIME 返回，导致前端模块脚本加载失败。该问题虽暂无评论，但直接阻断Windows用户的WebUI使用，且已有修复PR [#5191](https://github.com/HKUDS/nanobot/pull/5191) 提交。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题描述 | 状态 |
|---|---|---|---|
| 高 | [#5195](https://github.com/HKUDS/nanobot/issues/5195) | Weixin 重扫二维码登录后，`stop()` 中新token被旧token覆盖，首个 `getupdates` 调用即触发 `errcode -14`，会话被暂停60分钟且无法自愈 | 已关闭，修复PR [#5196](https://github.com/HKUDS/nanobot/pull/5196) 已合并 |
| 高 | [#5190](https://github.com/HKUDS/nanobot/issues/5190) | Windows上JavaScript模块以 `text/plain` MIME 返回，前端无法启动 | 开放中，修复PR [#5191](https://github.com/HKUDS/nanobot/pull/5191) 待审查 |
| 中 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 会话内无法切换模型：点击模型标签无反应，`/model` 命令对ID无效 | 开放中，暂无修复PR |
| 中 | [#5187](https://github.com/HKUDS/nanobot/issues/5187) | Termux因缺少系统时区数据库导致配置加载失败，无法启动 | 已关闭，修复PR [#5189](https://github.com/HKUDS/nanobot/pull/5189) 已合并 |

整体来看，今日Bug修复效率极高：两个高危Bug均已有关联修复，且已完成或进入审查流程。会话存储迁移后，新增的容错PR（[#5201](https://github.com/HKUDS/nanobot/pull/5201)）也针对迁移后的 `_last_summary` 异常数据做了防护。

## 6. 功能请求与路线图信号

- **DeepSeek Responses API 支持（[#5197](https://github.com/HKUDS/nanobot/pull/5197)，开放）**：社区贡献者 chengyongru 提交，将 `deepseek-v4-flash` 路由至 DeepSeek 原生 Responses API，保留明文推理内容，其余模型继续走 Chat Completions。开发者正持续扩展多Provider适配。
- **WebUI Quick Chat 与 Temporary Chat（[#5184](https://github.com/HKUDS/nanobot/pull/5184)，开放）**：新增常驻 Quick Chat 入口（复用完整会话栈）和可选的 Temporary Chat（仅内存历史）。该PR若合入，将显著提升WebUI的轻量对话体验。
- **WebUI 会话列表性能优化（[#5194](https://github.com/HKUDS/nanobot/pull/5194)，开放）**：复用WebUI活动目录、缓存workspace-scope快照，降低 `/api/sessions` 请求开销，属于体验细节的持续优化。
- **会话内切换模型的诉求（[#5198](https://github.com/HKUDS/nanobot/issues/5198)）**：用户明确对比“云SaaS UI点击即切换”的交互，而NanoBot当前界面不提供该能力，`/model` 命令也未生效。结合已有PR来看，这是一条明确的产品化信号，但尚无实现PR，建议纳入后续版本评估。

## 7. 用户反馈摘要

- **“永久静默死循环”痛点（[#5195](https://github.com/HKUDS/nanobot/issues/5195)）**：用户详细描述了Weixin重扫登录后 `stop()` 中状态被覆盖的完整链路，并指出最终结果是“Permanently silent dead loop”。这说明通道自动化用户对“登录态自愈”有极高要求，且有能力提供深度根因分析。
- **“Why not? I was bored”（[#5187](https://github.com/HKUDS/nanobot/issues/5187)）**：用户以轻松口吻在Termux中测试，遭遇时区缺失导致的启动报错。该反馈突出了跨平台兼容性对开源社区覆盖面（尤其是极客用户群体）的重要性。
- **对产品交互的期望（[#5198](https://github.com/HKUDS/nanobot/issues/5198)）**：用户将NanoBot的模型切换交互与云SaaS产品对比，认为“点击模型即可切换”是基本体验，并指出 `/model` 命令行为不符合预期。这属于典型的中度体验不满，需要产品层面的响应。
- **活跃的高质量贡献者**：amkile 同时提交了 [#5195](https://github.com/HKUDS/nanobot/issues/5195) 和 [#5190](https://github.com/HKUDS/nanobot/issues/5190) 两个Bug，均附有技术根因和复现路径，代表了高质量用户/贡献者画像。

## 8. 待处理积压

以下内容需要维护者关注：

- **开放PR等待审查**：
  - 高优先级修复：会话摘要容错（[#5201](https://github.com/HKUDS/nanobot/pull/5201)）、exec `wait_for` 截断边界修复（[#5200](https://github.com/HKUDS/nanobot/pull/5200)），均由 KDB-Wind 提交，标记为 p1，待review。
  - 功能PR：Quick Chat / Temporary Chat（[#5184](https://github.com/HKUDS/nanobot/pull/5184)）已等待2天，建议尽快给出审查意见。
  - Windows MIME修复（[#5191](https://github.com/HKUDS/nanobot/pull/5191)）直接对应 [#5190](https://github.com/HKUDS/nanobot/issues/5190)，建议优先处理以免影响Windows用户。
- **无PR关联的开放Issue**：
  - [#5198](https://github.com/HKUDS/nanobot/issues/5198)（会话内切换模型）暂无实现方案，需要确认是设计局限还是Bug，并考虑是否纳入路线图。
- **已关闭待确认**：
  - Weixin旧PR [#4223](https://github.com/HKUDS/nanobot/pull/4223) 关闭原因未写明，建议维护者补充说明其与 [#5196](https://github.com/HKUDS/nanobot/pull/5196) 的关系，避免社区困惑。

---
*数据来源：GitHub HKUDS/nanobot 仓库，统计窗口为 2026-07-31 至 2026-08-01。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 · 2026-08-01

数据来源：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) GitHub 仓库，统计窗口：2026-07-31 → 2026-08-01。

---

## 1. 今日速览

过去 24 小时项目活跃度处于**高位**：共 50 条 Issue 产生更新（新开/活跃 46 条，关闭 4 条），50 条 PR 产生更新（待合并 40 条，已合并/关闭 10 条），无新版本发布。今日热点集中在三方面：**更新器可靠性**（macOS 更新永久故障、Windows 更新中断恢复）、**消息流式投递正确性**（Telegram 截断、Discord 重复投递、Matrix 无编辑消息）以及**安全加固**（会话凭据外泄、审批权限提升漏洞）。值得肯定的是，3 个 P1/P2 关键 Bug（含 1 个硬编码付费模型问题）已在今日标记为 `implemented-on-main` 关闭，修复已落入主干。需关注的风险是 40 条 PR 处于待合并状态，积压比例偏高（80%），其中近一半集中在会话状态与兼容性风险区域（`sweeper:risk-session-state` / `risk-compatibility`）。

---

## 2. 版本发布

无。过去 24 小时 Hermes Agent 未发布任何新版本（最新 Releases 为空）。当前用户环境以 v0.19.x 为主（如 Issue #75791 报告环境为 v0.19.1），上述大量修复预计将随下一版本统一发布。

---

## 3. 项目进展

今日没有新版本号产出，但代码主干（main）持续吸收修复，可见的已合并/关闭 PR 有 5 条（总量为 10 条）：

**已合并/关闭 PR：**

- **[PR #65669](https://github.com/NousResearch/hermes-agent/pull/65669)（P2，已合并）**：修复工具调用转换中断后 Rich Panel 重复渲染响应内容的问题。`_on_tool_gen_start()` 重置流式状态导致 `already_streamed` 守卫失效，该修复提升了 CLI 交互可靠性。
- **[PR #65234](https://github.com/NousResearch/hermes-agent/pull/65234)（P3，已合并）**：`CustomProfile.build_api_kwargs_extras()` 不再无条件向远程端点发送 `reasoning_effort="none"`——ofox、Volcengine ARK、Doubao 等 OpenAI 兼容 API 会因此返回 HTTP 400。此前已在 Issue #65233、#59660 中追踪。
- **[PR #67157](https://github.com/NousResearch/hermes-agent/pull/67157)（P3，已合并）**：CLI `/profile list` 升级为交互式箭头键选择器，与已有 `/model` 选择器模式统一，支持 Enter 切换、Esc 取消、当前配置标记。
- **[PR #65758](https://github.com/NousResearch/hermes-agent/pull/65758)（P3，以 duplicate 关闭）**：为 launchd plist 增加 `RLIMIT_NOFILE` 文件描述符上限（256→65536），解决 macOS 长驻网关 "Too many open files" 问题。以重复项关闭说明已有修复覆盖。
- **[PR #75799](https://github.com/NousResearch/hermes-agent/pull/75799)（P3，not-planned 关闭）**：提议 `HERMES_OFFLINE` 环境变量以抑制冷启动时的两次无条件外呼请求，支持离线/内网部署。被标记为不计划实施，相关诉求可能需通过配置方式另行满足。

**今日关闭且已在主干实现的关键 Issue（同一批修复落地的直接证据）：**

- **[#75804](https://github.com/NousResearch/hermes-agent/issues/75804)（P1，`implemented-on-main`）**：辅助客户端硬编码付费 OpenRouter 模型 `google/gemini-3.6-flash`，导致压缩、标题生成、会话搜索等辅助任务不可配置且可能产生意外费用——已修复。
- **[#75768](https://github.com/NousResearch/hermes-agent/issues/75768)（P2，`implemented-on-main`）**：v0.19.0 回归——Telegram "typing..." 指示器在多配置文件场景下无限期卡住——已修复。
- **[#75810](https://github.com/NousResearch/hermes-agent/issues/75810)（P2，`implemented-on-main`）**：macOS 桌面 GUI 更新器与 launchd 托管的网关进程死锁（"Hermes is still running" + "Another update is already running" 死循环）——已修复。

**整体判断**：项目今日的净推进方向是**修补发布/更新链路**与**远程 API 兼容性**，同时有一批新 PR 集中在安全加固（见第 5、6 节），说明维护者正在系统性收紧桌面端与网关边界。

---

## 4. 社区热点

**1）[Issue #69078](https://github.com/NousResearch/hermes-agent/issues/69078)："xAI grok-4.5 Invalid PNG image 400" 永久损毁会话 —— 13 条评论（今日最热）**

用户报告了一个极其棘手的会话状态 Bug：一旦历史记录中包含视觉工具结果，网关对该会话的**每一次** xAI API 调用（包括纯文本轮次）都会收到不可重试的 400，重启网关也无法恢复，唯一出路是删除整个会话。报告特别强调"source image verified valid"（用户已验证源图片有效），且此前的所有图片恢复匹配器全部失效，属于 [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) 的 xAI 变体。13 条评论的高热度反映出社区对"会话被单一历史消息永久毒化"这一故障模式的强烈担忧——这直接关系到会话状态层的健壮性。

**2）[Issue #64231](https://github.com/NousResearch/hermes-agent/issues/64231)："插件生命周期事件目录 + Hook 分类学 + 批量处置待定 Hook PR" —— 13 条评论（并列最热）**

由核心维护者 teknium1 发起的治理型议题：要求先建立统一的插件生命周期事件目录和 hook 接受标准，再一次性批量处置挂起的一打 `VALID_HOOKS` 一次性 PR，而不是逐个合并或任其腐烂。这是社区对**插件生态规范化**的明确信号，涉及流程决策（`needs-decision`），预计会影响未来插件系统的演进方向。

**3）[Issue #74836](https://github.com/NousResearch/hermes-agent/issues/74836)："macOS 应用内更新被残留的 ~/.hermes/hermes-setup 永久破坏" —— 9 条评论，1 👍（P1）**

陈旧二进制文件让更新按钮永久失效，`resolveUpdaterBinary()` 仅做存在性检查、无版本门控，`hermes update` 也无法自愈。由于是当前唯一活跃的 P1 级无修复 PR 的 Bug，讨论热度持续攀升。

**4）[Issue #71643](https://github.com/NousResearch/hermes-agent/issues/71643)："Telegram 流式回复携带陈旧预览文本，`content_delivered=True` 抑制完整发送" —— 6 条评论（P1）**

所有 Bot API 调用全部成功，但用户收到的是截断的陈旧预览，且网关据此判定"已投递"，不再发送完整内容。这种"成功假象"类 Bug 对消息可靠性伤害极大。

**背后诉求分析**：今日高热度议题集中在两个深层需求——**① 会话/状态层的自愈能力**（#69078 的永久性损坏、#74836 的更新器无法自愈）；**② 投递确认的真实性**（#71643 的误报成功）。这两点直接决定了生产环境下用户对 Agent 的信任度。

---

## 5. Bug 与稳定性

以下按严重程度排列，标注修复进展。

### P1（严重）

| Issue | 问题 | 修复状态 |
|---|---|---|
| [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) | macOS 应用内更新被陈旧 `~/.hermes/hermes-setup` 永久破坏，无版本门控，`hermes update` 无法修复 | 无对应 fix PR，仍开放 |
| [#71643](https://github.com/NousResearch/hermes-agent/issues/71643) | Telegram 流式回复：finalize 编辑携带陈旧预览文本，`content_delivered=True` 抑制完整消息发送，用户收到截断回复 | 无对应 fix PR，仍开放 |
| ~~[#75804](https://github.com/NousResearch/hermes-agent/issues/75804)~~ | ~~辅助链硬编码付费 OpenRouter 模型，不可配置、不可退出~~ | ✅ 已关闭，`implemented-on-main` |

### P2（中等）

| Issue | 问题 | 修复状态 |
|---|---|---|
| [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) | Windows 更新约一周前开始导致整个程序不稳定；多网关配置冲突，切换 profile 不关闭其他实例 | 关联 fix PR [#75752](https://github.com/NousResearch/hermes-agent/pull/75752) 已提交（恢复中断的 Windows 更新） |
| [#72316](https://github.com/NousResearch/hermes-agent/issues/72316) | Ollama Cloud GLM：`_should_treat_stop_as_truncated` 误判截断 + SSE 流不传播 `partial` 状态，WebUI 丢弃/错渲染回复 | 无 fix PR，仍开放 |
| [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) | `session_search(profile="other")` 静默搜索当前 profile 数据库，命名 profile 参数被忽略 | 无 fix PR，仍开放 |
| [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) | 网关 `/stop` 只丢弃队列头部一条消息，FIFO 溢出消息继续执行 | 无 fix PR，仍开放 |
| [#39829](https://github.com/NousResearch/hermes-agent/issues/39829) | Bedrock Converse 拒绝空白占位符（`{"text": " "}`），恢复助手优先历史时中断 | 无 fix PR，仍开放 |
| [#75761](https://github.com/NousResearch/hermes-agent/issues/75761) | 桌面端同一 profile 的并发会话，同秒生成的图片上传相互覆盖（文件名仅内存内唯一） | 无 fix PR，仍开放 |
| [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) | Windows 11 25H2：`hermes dashboard --status` 误报无进程，实际服务正常 | 无 fix PR，仍开放 |
| ~~[#75768](https://github.com/NousResearch/hermes-agent/issues/75768)~~ | ~~Telegram typing 指示器多 profile 场景无限卡住（v0.19.0 回归）~~ | ✅ 已关闭，`implemented-on-main` |
| ~~[#75810](https://github.com/NousResearch/hermes-agent/issues/75810)~~ | ~~macOS GUI 更新器与 launchd 网关死锁~~ | ✅ 已关闭，`implemented-on-main` |

### P3（较低，但值得关注）

- [#75725](https://github.com/NousResearch/hermes-agent/issues/75725)：MiniMax-M3 交错思考在首次工具调用后停止（/anthropic 端点）。
- [#75766](https://github.com/NousResearch/hermes-agent/issues/75766)：`/hatch` 宠物生成失败——python3.11 服务进程错误解析到 python3.12 的 user-site Pillow（跨版本 user-site 泄漏），每次必现。
- [#74965](https://github.com/NousResearch/hermes-agent/issues/74965)：Telegram 相册在兄弟图片下载完成时间不同时仍被拆分为两轮。
- [#74248](https://github.com/NousResearch/hermes-agent/issues/74248)：Codex app-server 的最终 agentMessage 在 Discord 上重复投递两次。
- [#58728](https://github.com/NousResearch/hermes-agent/issues/58728)：Matrix 网关流式模式只发最终/拆分消息，从不发送 `m.replace` 编辑。
- [#60637](https://github.com/NousResearch/hermes-agent/issues/60637)：Email 网关启动时 UID 裁剪，大收件箱可能重放旧未读邮件，产生非请求的自动回复。

### 安全相关（重点）

- **[#74649](https://github.com/NousResearch/hermes-agent/issues/74649)（P2，安全）**：桌面 API 代理可通过 `@-paths`（如 `@attacker.example`）将实时会话 token/OAuth 凭据发送至攻击者控制的域名。`connection.baseUrl + request.path` 拼接未校验 path 是否以 `/` 开头。**这是今日最严重的安全缺陷**，暂无 fix PR。
- **[#43666](https://github.com/NousResearch/hermes-agent/issues/43666)（P2，安全）**：持久化边界存在脱敏漏洞——工具输出文件转储、压缩块、数据库 URI 中可泄露明文密码（审计发现单次会话 23 处明文命中）。自 6 月 10 日拆分自 #43083 后至今未关闭。
- **[PR #75800](https://github.com/NousResearch/hermes-agent/pull/75800)（P3，安全，待合并）**：修复 Teams 审批卡片 Action.Execute 处理器的提权漏洞——未受信任的 invoke 载荷可伪造 `session_key` 与 `hermes_action`，现已绑定会话并强制渲染权限。
- **[PR #75730](https://github.com/NousResearch/hermes-agent/pull/75730)（P2，待合并）**：TUI/桌面网关的 `config.set` 拒绝写入管理员托管键，与经典 CLI 行为对齐（取代 #71815）。

---

## 6. 功能请求与路线图信号

**新提出的功能需求：**

- **[#75781](https://github.com/NousResearch/hermes-agent/issues/75781)（P3，新开）**：TUI 中围栏代码块与正文视觉区分度不足，请求改进排版。属于体验优化，实现成本低，较可能被接受。
- **[#72896](https://github.com/NousResearch/hermes-agent/issues/72896)（P3）**：Google Workspace 技能——为 `gmail send` 和 `gmail draft create` 增加 `--attach` 附件支持，含明确的验证步骤（`shasum` 一致性校验）。实用性强。
- **[#71853](https://github.com/NousResearch/hermes-agent/issues/71853)（P3）**：技能依赖声明 `depends_on` + 安装时强制校验。当前 `prerequisites` 与 `related_skills` 均不强制执行，可能导致技能安装后不可用。
- **[#64231](https://github.com/NousResearch/hermes-agent/issues/64231)（P3，`needs-decision`）**：插件生命周期事件目录与 hook 标准，属于平台治理性需求，影响插件生态长期健康。
- **[#75786](https://github.com/NousResearch/hermes-agent/issues/75786) / [#75746](https://github.com/NousResearch/hermes-agent/issues/75746)（P3，重构）**：将 `CLICommandsMixin`（3,218 行/54 方法）中的会话导航与 `SessionDB`（6,868 行/153 方法）中的 Telegram topic 集群拆分为独立模块。两位作者同日提交 god-file 分解议题，说明**代码库可维护性正在成为社区关注点**。

**已有 PR 支撑、可能进入下一版本的功能：**

- **[PR #75808](https://github.com/NousResearch/hermes-agent/pull/75808)（P3，新开）**：将 RFC 8252 原生应用登录流（系统浏览器 + loopback + PKCE，源自 #68245）从 OAuth 扩展至密码类 provider，桌面端密码登录改用系统浏览器以利用密码管理器自动填充。安全与体验双收益，纳入可能性高。
- **[PR #75795](https://github.com/NousResearch/hermes-agent/pull/75795)（P3，`needs-decision`，新开）**：危险命令审批提示中增加"目的、影响、风险"上下文，重建 #22363 的意图。对终端工具的可信使用有直接价值。
- **[PR #74202](https://github.com/NousResearch/hermes-agent/pull/74202)（P3，安全，待合并）**：Honcho 插件四通道净化（用户画像、好友卡片、AI 自述、身份卡），防 prompt 注入式伪造。

**被否决的信号**：[#75799](https://github.com/NousResearch/hermes-agent/pull/75799) 的 `HERMES_OFFLINE` 方案被标记 `not-planned` 关闭——离线部署诉求仍存在，但官方可能倾向于通过现有配置项组合解决而非新增环境变量。

---

## 7. 用户反馈摘要

从今日活跃 Issue 的评论中提炼的真实用户声音：

- **"更新即破坏"的挫败感**：[#75598](https://github.com/NousResearch/hermes-agent/issues/75598) 用户描述"大约一周前开始，此前的所有更新都很顺畅，之后整个程序变得不稳定"；[#74836](https://github.com/NousResearch/hermes-agent/issues/74836) 用户表示"任何 `hermes update` 都无法修复"。更新链路缺乏自愈/回滚机制是桌面端用户最集中的不满点。

- **对"成功假象"的警惕**：[#71643](https://github.com/NousResearch/hermes-agent/issues/71643) 中"每一次 Bot API 调用都成功，但回复永久截断"；[#74248](https://github.com/NousResearch/hermes-agent/issues/74248) 中"一条消息产生两条相同回复，间隔约一秒"。用户对投递状态与实际结果不一致非常敏感。

- **会话不可恢复的焦虑**：[#69078](https://github.com/NousResearch/hermes-agent/issues/69078) 用户已自行验证图片有效，排除了自身原因，但会话仍被永久封禁，只能删除。多次重启无效意味着**会话状态缺少降级/隔离机制**——一个坏消息不应毁掉整个会话。

- **Windows/macOS 平台差异痛点**：[#75598](https://github.com/NousResearch/hermes-agent/issues/75598) 多网关配置互相冲突、切换 profile 不彻底；[#75766](https://github.com/NousResearch/hermes-agent/issues/75766) 的跨版本 user-site 泄漏导致 `/hatch` 必现失败；[#75791](https://github.com/NousResearch/hermes-agent/issues/75791) 状态查询误报。平台适配类问题占今日 Bug 总量比重较高。

- **正面反馈**：PR #65234 的合入直接回应了远程 OpenAI 兼容 API 用户的 400 报错；[#67157](https://github.com/NousResearch/hermes-agent/pull/67157) 的 profile 选择器是对 CLI 日常体验的实质改进。用户对"小而准"的修复反馈普遍积极。

---

## 8. 待处理积压

以下为长期未关闭、且对项目健康度有实质影响的重要议题，提醒维护者优先关注：

| Issue/PR | 创建时间 | 级别 | 说明 |
|---|---|---|---|
| [#39829](https://github.com/NousResearch/hermes-agent/issues/39829) | 2026-06-05 | P2 | Bedrock 空白占位符导致恢复会话历史失败，已积压近两个月 |
| [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) | 2026-06-10 | P2/安全 | 持久化脱敏缺口，审计确认真实密码泄露，至今无 fix PR |
| [#45307](https://github.com/NousResearch/hermes-agent/issues/45307) | 2026-06-13 | P3 | `_find_skill()` 不支持 `category/skill` 路径格式，技能查找长期异常 |
| [#58728](https://github.com/NousResearch/hermes-agent/issues/58728) | 2026-07-05 | P2 | Matrix 流式从不发送 `m.replace` 编辑，流式体验不完整 |
| [#60637](https://github.com/NousResearch/hermes-agent/issues/60637) | 2026-07-08 | P3 | Email 网关可能重放历史未读邮件并自动回复，存在误发风险 |
| [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) | 2026-07-08 | P2 | `session_search(profile=...)` 静默忽略命名 profile，破坏多 profile 工作流 |
| [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) | 2026-07-14 | P3/`needs-decision` | 插件生命周期目录：13 条评论但无结论，一批 hook PR 悬置等待裁决 |
| [#69078](https://github.com/NousResearch/hermes-agent/issues/69078) | 2026-07-22 | P2 | 今日最高热度议题（13 评论），xAI 会话永久损毁，仍无修复方案 |

**健康度总结**：项目社区活跃度高、修复达主干速度快（今日 3 个关键 Bug 落地），但存在三个健康度隐患——① **待合并 PR 积压**（40/50，80%）有形成技术债务的风险；② **安全类问题闭环慢**（#43666 已两月、#74649 尚无 fix）；③ **更新链路缺乏自愈机制**是当前桌面端用户满意度最大的短板。建议下一版本优先覆盖 P1 更新器与投递修复，并尽快合入 #75730、#75752、#75800、#75808 等已就绪的安全/平台修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 · 2026-08-01

## 今日速览

过去 24 小时 PicoClaw 仓库共有 2 条 Issue 更新、3 条 PR 更新，无新版本发布。Issue 与 PR 均无关闭/合并记录，项目在协议适配（IRC/Simplex）、模型配置与代码清理方向存在持续提交，但维护端合并节奏明显偏慢。综合看，社区贡献意愿尚可，但审查与合入效率是当前健康度的主要短板。项目活跃度评估：**中等，偏向「贡献活跃、维护积压」**。

---

## 项目进展

**今日无 PR 获得合并或关闭。** 以下 3 个 PR 均处于待合并状态，但在 7/31 有更新，属于正在推进中的候选改进：

- **[#3222] refactor(deltachat): cleanup implementation, documentation -200LOC** — [链接](https://github.com/sipeed/picoclaw/pull/3222)  
  该 PR 清理 DeltaChat 通道实现：移除 legacy 功能与过期测试、改用官方 relay list 而非硬编码副本、废弃基于密码的邮件配置（密钥迁移至 jsonrpc）、重命名 invite 相关 API 并补全 DeltaChat 文档。净删除 200 行代码，属于质量治理类改动。

- **[#3193] Added simplex channel type** — [链接](https://github.com/sipeed/picoclaw/pull/3193)  
  为 PicoClaw 增加 Simplex 协议通道支持，对应「✨ New feature」类型变更。若合入，将扩充 PicoClaw 的 IM/通信协议矩阵，使其不局限于 IRC、DeltaChat 等既有通道。

- **[#3200] feat(models): add configurable default fallback chain** — [链接](https://github.com/sipeed/picoclaw/pull/3200)  
  为 Web UI 增加可配置的模型默认回退链，并持久化到后端 API。用户可设置默认模型、添加替补模型、调整顺序并保存。这对依赖多模型容灾的生产用户有直接价值。

**项目状态判断**：上述 PR 覆盖「清理存量、扩展协议、增强模型可靠性」三个方向，表明项目并非停滞，但 `待合并=3、已合并=0` 的结果说明这几项改进尚未转化为用户可用的功能，合并周期可能已超过 30 天。

---

## 社区热点

今日评论最多的 Issue 为 **#3287「Better support long messages in IRC」**（评论 2 条，链接：[sipeed/picoclaw Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)）。

该 Issue 的核心诉求是：IRC 协议默认单条消息限制为 512 字节，且换行被视作新消息开始，因此超长消息会被 IRC 客户端自动拆分；用户希望 PicoClaw 能利用 IRCv3 能力将拆分后的消息重新识别为**一条完整消息**，供 AI 连贯理解。

分析：对于基于 IRC 桥接的 AI 助手使用场景（如 Matrix/IRC 网关、长代码块、长文本回复），消息被截断会导致 AI 上下文破碎。这一诉求指向**底层协议语义完整性**，而非 UI 或模型层，说明社区用户已在真实部署中遇到消息层面的可用性问题。虽然 👍 数为 0，但作为当前评论最多的 Issue，值得维护者优先回应。

另一条 **#3292**（评论 1 条）也属热点候选，但讨论热度略低，详见下一节。

---

## Bug 与稳定性

当前活跃 Bug 仅 1 条，按严重程度评估如下：

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 中 | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | 聊天界面输入框聚焦时 CPU 占用过高 | 无 |

**#3292** 用户环境为 PicoClaw 0.3.1 + Go 1.26 + deepseek-v4-flash + Debian Linux x64，Firefox 浏览器访问 Web 界面时触发。该问题虽然不直接导致崩溃或数据丢失，但会显著影响日常交互体验，尤其在低配设备上可能造成卡顿。需要关注前端渲染或焦点轮询逻辑是否存在性能缺陷。目前**尚未看到关联的 fix PR**，且该 Issue 已存在约 8 天（创建于 7/24），未见关闭或官方回复记录。

---

## 功能请求与路线图信号

- **IRC 长消息支持（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）**：用户明确希望 PicoClaw 理解「IRCv3 中被拆分的长消息应视为单条完整消息」。这与 PicoClaw 作为多协议个人 AI 助手的定位高度一致。考虑到项目已有 IRC 通道，该需求被纳入下一迭代的可能性较大，具体可能会依赖 IRCv3 `message-tags` 或 `batch` 能力实现。

- **Simplex 协议通道（[PR #3193](https://github.com/sipeed/picoclaw/pull/3193)）**：新增去中心化通信协议支持。若合并，PicoClaw 的多通道策略将从 IRC/DeltaChat 进一步扩展，符合社区对「更多协议接入」的路线图预期。

- **模型默认回退链（[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)）**：可配置 fallback 链是面向 AI 服务稳定性的重要增强。当前 AI 供应商故障频发，该功能若发布，可显著提升 PicoClaw 在真实生产环境中的可用性，属于高价值路线图信号。

- **DeltaChat 清理（[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)）**：移除旧实现与硬编码配置，表明维护者有意控制技术债，为后续 DeltaChat 相关功能迭代铺路。

综合来看，下一版本可能涵盖 **协议扩展 + 模型容灾 + 消息语义优化** 三条主线。

---

## 用户反馈摘要

基于现有 Issue 内容（评论样本较小），提炼如下真实用户反馈：

- **IRC 长消息场景受限**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）：用户实际使用 IRC 作为 AI 对话通道时，超过 512 字节的内容被拆分，PicoClaw 可能将一条消息误认为多条独立消息，影响 AI 理解的连续性。用户侧期望 PicoClaw 对 IRCv3 长消息做合并处理。

- **Web 界面存在性能瓶颈**（[#3292](https://github.com/sipeed/picoclaw/issues/3292)）：用户在使用 Firefox 访问 Web 聊天界面、聚焦输入框时遭遇高 CPU 占用。该反馈来自中文用户（标题中英文双语），说明项目在非英语社区也有实际使用者。结合 0.3.1 版本，此问题大概率仍存在于当前主线。

- **社区倾向**：目前 Issue 评论数据不足以形成广泛满意度结论，但两条新更新均偏「使用体验」而非「功能缺失」，说明项目已越过早期功能搭建阶段，进入体验打磨期。

---

## 待处理积压

以下 PR/Issue 长期处于开放状态，建议 Maintainer 优先关注：

| 类型 | 编号 | 标题 | 等待时长 | 最近更新 | 链接 |
|---|---|---|---|---|---|
| PR | #3193 | Added simplex channel type | 约 35 天 | 7/31 | [链接](https://github.com/sipeed/picoclaw/pull/3193) |
| PR | #3200 | feat(models): add configurable default fallback chain | 约 31 天 | 7/31 | [链接](https://github.com/sipeed/picoclaw/pull/3200) |
| PR | #3222 | refactor(deltachat): cleanup implementation, documentation -200LOC | 约 29 天 | 7/31 | [链接](https://github.com/sipeed/picoclaw/pull/3222) |
| Issue | #3292 | CPU usage too high when focus on input box | 约 8 天 | 7/31 | [链接](https://github.com/sipeed/picoclaw/issues/3292) |
| Issue | #3287 | Better support long messages in IRC | 约 10 天 | 7/31 | [链接](https://github.com/sipeed/picoclaw/issues/3287) |

三个 PR 均在一个月前发起且近期仍有更新，说明贡献者还在积极维护，但迟迟未合并会消耗社区贡献者的耐心；两个 Issue 也超过一周没有关闭动作。建议维护者在审查上提速，至少对每个待合并 PR 给出明确反馈或合入时间预期，避免社区贡献流失。

---

**总结**：PicoClaw 的社区贡献方向明确、质量可观，但项目当前最大的风险是**维护吞吐不足**——3 个 PR 悬置近一个月，2 个 Issue 无关闭记录。若能在未来一周集中处理待合并 PR，项目健康度将显著改善。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

NanoClaw 项目今日维持较高活跃度，过去24小时内共产生 18 条议题/PR 动态（8 Issues + 10 PRs），其中 Issue 全部处于开放/活跃状态，PR 侧 4 条已合并或关闭、6 条待合并。社区讨论重心集中在**容器运行时灵活性**（K8s 部署、原生运行模式、Apple Container）与**通道适配器扩展**（iMessage、Dial、Telegram）两大方向。安全加固类 PR 密集推进，但**已有 3 个新提交的 PR 在本日被直接关闭**（含 1 个 Codex/copilot 自动生成 PR），显示维护者正在收紧贡献质量门槛。版本发布连续处于空窗期，未见新 Release 产出。

- 活跃度：⭐⭐⭐⭐（高）
- 健康度信号：贡献管道通畅，但需关注 6 条待合并 PR 的积压消化速度
- 风险提示：关闭 PR 中有 2 条带 `core-team` 标签，需留意内部协作流程是否存在变动


## 2. 版本发布

今日无新版本发布。


## 3. 项目进展

今日共 4 条 PR 被合并/关闭，值得关注的进展包括：

**🔒 iMessage 通道统一适配器合并（#3076）** — [PR #3076](https://github.com/nanocoai/nanoclaw/pull/3076)
- `feat(imessage): unified local+hosted adapter targeting spectrum-ts v11`
- 由 invisicat 提交，将本地与托管 iMessage 适配器统一为一个实现，对齐 spectrum-ts v11，为后续 Hosted iMessage 方案（#3164）奠定基础
- 结论：**已合并** ✅

**📱 语音转写技能文档更新（#1678）** — [PR #1678](https://github.com/nanocoai/nanoclaw/pull/1678)
- `docs(skills): update voice transcription skills for Telegram + Linux`
- 移除了本地 Whisper 技能的 WhatsApp 限制，使其覆盖 Telegram 与 Linux 平台
- 结论：**已合并** ✅

**🔧 发布路径修复（#3163）** — [PR #3163](https://github.com/nanocoai/nanoclaw/pull/3163)
- `fix(release): restore the v2.1.54 release path`
- 由核心成员 glifocat 提交，修复 v2.1.54 发布管线问题，有助于恢复版本发布节奏
- 结论：**已合并** ✅

**📄 Codex/copilot 自动生成 PR 被关闭（#3165）** — [PR #3165](https://github.com/nanocoai/nanoclaw/pull/3165)
- 提交者 soren5 的 PR 被直接关闭，可能是自动生成内容未通过维护者审核
- 结论：**已关闭** ❌

**项目整体推进评估**：iMessage 通道的合并是今日最大功能进展，配合发布修复，项目正从"功能扩张期"向"平台整合期"过渡。但自动生成 PR 被关闭也值得关注——`[follows-guidelines]` 标签可能不再足以保证合并，维护者正在收紧 AI 生成代码的准入标准。


## 4. 社区热点

今日讨论最活跃的议题集中在容器部署灵活性与苹果生态支持两大主题：

**🐳 #1184 — 受限 K8s 环境部署挑战** — [Issue #1184](https://github.com/nanocoai/nanoclaw/issues/1184)
- 作者 JachinShen 在 Sealos 平台上部署 NanoClaw 时遇到挑战，3 条评论、1 个 👍
- 核心诉求：用户认可 NanoClaw 的极简安全设计，但受限 K8s 环境（无法直接访问 Docker socket）导致部署受阻
- **热度分析**：该 Issue 已持续近 4 个月仍活跃，说明容器运行时抽象是用户的核心痛点

**🖥️ #1732 — 原生运行模式（绕过 Docker）** — [Issue #1732](https://github.com/nanocoai/nanoclaw/issues/1732)
- 作者 stevengonsalvez 提出 `native runner mode` 功能需求，3 条评论
- 明确列出被阻塞的使用场景：tmux 编码、headed 浏览器、macOS API 访问
- **热度分析**：与 #1225（无 Docker 运行）形成呼应，用户对 Docker 依赖的抱怨呈上升趋势

**📱 #2588/#2589 — Apple Container 分支失联与网络解析** — [Issue #2588](https://github.com/nanocoai/nanoclaw/issues/2588) / [Issue #2589](https://github.com/nanocoai/nanoclaw/issues/2589)
- 两条 Issue 来自同一用户 snymanpaul，分别指出 `skill/apple-container` 分支与主分支严重偏离、`host.docker.internal` 在 Apple Container 微虚拟机中无法解析
- **热度分析**：两个问题相互关联，同一条 PR #2809 正在尝试解决，值得持续关注

**🧠 讨论共性**：社区最活跃的讨论指向一个共同诉求——**NanoClaw 需要更灵活的运行时层**，从"仅支持 Docker"走向"多运行时支持"（K8s、原生进程、Apple Container），这是当前社区最强烈的声音。


## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 说明 |
|---------|-------|------|------|
| 🔴 高 | [#3162](https://github.com/nanocoai/nanoclaw/issues/3162) — Telegram 配对在 getMe 失败后静默失效 | **OPEN，无 fix PR** | 启动时单次 HTTP 调用失败将永久锁定配对，用户无感知，影响所有 Telegram 通道用户。已在 `channels` 分支验证，严重性高 |
| 🟡 中 | [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) — Apple Container 中 host.docker.internal 不解析 | **OPEN，相关 PR #2809 待合并** | OneCLI 代理 URL 在微虚拟机内无法连接，`--add-host` 不受支持 |
| 🟡 中 | [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) — skill/apple-container 分支严重不同步 | **OPEN，相关 PR #2809 待合并** | `/convert-to-apple-container` 开箱即失败，引用 API 已不存在，Node+tsc 已被 bun 替代 |
| 🟢 低 | [#2923](https://github.com/nanocoai/nanoclaw/issues/2923) — ask_user_question 卡片可被伪造点击篡改 | **OPEN，修复 PR #2651 待合并** | 显示层完整性欺骗（非代码执行），已有对应修复 PR |

**关键发现**：今日无新增 Bug 报告，但存量 Bug 均未有 fix 合入。值得关注的是 #3162 与 #2923 的安全/可用性问题均有对应 PR（#2651）或应尽快产出修复，建议维护团队优先审视这两项。


## 6. 功能请求与路线图信号

**🚀 高潜力功能请求：**

1. **[#1732] 原生运行模式（Native Runner）** — [Issue #1732](https://github.com/nanocoai/nanoclaw/issues/1732)
   - 用户明确要求绕过 Docker 直接访问宿主机工具（tmux、浏览器、macOS API）
   - 与 [#1225 无 Docker 运行](https://github.com/nanocoai/nanoclaw/issues/1225) 诉求一致
   - 目前无对应 PR，但结合 Kubernetes runtime PR（#2354），**多运行时支持已是大势所趋**

2. **[#2354] Kubernetes 容器运行时** — [Issue #2354](https://github.com/nanocoai/nanoclaw/issues/2354)
   - 将 Agent 容器作为 Pod 部署到用户提供的 K8s 集群
   - 当前 `src/container-runtime.ts` 硬编码 Docker，需抽象运行时层
   - 目前无直接对应 PR

3. **[#3041] Dial 通道适配器（SMS + AI 语音）** — [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)
   - 已在 PR 阶段，待合并状态，功能成熟度较高
   - 若合并将新增一个完整通道，扩宽应用场景

4. **[#3164] Hosted iMessage（Photon）** — [PR #3164](https://github.com/nanocoai/nanoclaw/pull/3164)
   - 核心成员 glifocat 提交，目标取代 #2999
   - 结合已合并的 #3076，iMessage 通道正在快速推进

**路线图预判**：短期看好 iMessage + Dial 两大通道 PR 合入；中期"运行时抽象"（K8s + Native Runner）可能成为下一阶段架构重点，建议维护者考虑成立专门的容器运行时工作小组。


## 7. 用户反馈摘要

**👍 正面反馈：**
- #1184 中用户 JachinShen 表示"非常欣赏极简方法，以及它作为更臃肿 Agent 框架的轻量安全替代品"，认可项目的核心价值定位 —— [Issue #1184](https://github.com/nanocoai/nanoclaw/issues/1184)

**😤 痛点与不满：**

1. **Docker 依赖成为最大阻碍**
   - #1225"Can I run it without Docker?"直接表达诉求，用户希望支持无 Docker 环境
   - #1732 详细列举了 Docker 隔离带来的具体使用场景限制，称其为"硬性阻碍"
   - 以上两个 Issue 均创建于 3-4 月，至今仍开放，用户等待时间较长

2. **Apple Container 路径体验断裂**
   - #2588 用户反馈 `/convert-to-apple-container` 技能"开箱即失败"，分支不同步问题持续时间较长（5 月至今）
   - #2589 进一步指出即使转换完成，容器内网络仍不可用

3. **隐藏的失败模式引发不信任**
   - #3162（Telegram 配对静默失败）描述了"什么都不会告诉用户"的失败模式——用户被锁在外面，且毫无提示。这类"静默损坏"问题最伤害用户信任

**📊 满意度信号**：用户对 NanoClaw 的**理念与架构方向**高度认可，但对**功能完整性与环境适配**有强烈不满。项目需要在"轻量安全"与"环境可移植"之间找到更好的平衡。


## 8. 待处理积压

**⏳ 长期未解决的 Issue（按等待时长排序）：**

| Issue | 创建时间 | 等待天数 | 状态 | 建议 |
|-------|---------|---------|------|------|
| [#1184](https://github.com/nanocoai/nanoclaw/issues/1184) 受限 K8s 环境部署 | 2026-03-17 | ~137 天 | OPEN，3 评论，1 👍 | 建议分类为 roadmap 功能需求，或在文档中提供 workaround |
| [#1225](https://github.com/nanocoai/nanoclaw/issues/1225) 无 Docker 运行 | 2026-03-18 | ~136 天 | OPEN，2 评论 | 与 #1732 合并处理，已有用户等待超 4 个月 |
| [#1732](https://github.com/nanocoai/nanoclaw/issues/1732) 原生运行模式 | 2026-04-10 | ~113 天 | OPEN，3 评论 | 高价值功能请求，建议纳入正式路线图 |
| [#2588](https://github.com/nanocoai/nanoclaw/issues/2588) Apple Container 分支失联 | 2026-05-22 | ~71 天 | OPEN，PR #2809 待合并 | 建议加速 #2809 评审 |
| [#2589](https://github.com/nanocoai/nanoclaw/issues/2589) Apple Container 网络问题 | 2026-05-22 | ~71 天 | OPEN，依赖 #2809 | 与 #2809 绑定处理 |

**📋 待合并 PR 积压（6 条）：**

- [#2809](https://github.com/nanocoai/nanoclaw/pull/2809) Apple Container 运行时 — 创建于 6/18，已等待 ~44 天
- [#2954](https://github.com/nanocoai/nanoclaw/pull/2954) 安全报告与分诊策略文档 — 创建于 7/4
- [#2651](https://github.com/nanocoai/nanoclaw/pull/2651) 交互响应来源校验修复 — 创建于 5/30，已等待 ~63 天
- [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) Dial 通道适配器 — 创建于 7/14
- [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) Hosted iMessage — 创建于 7/31
- [#3161](https://github.com/nanocoai/nanoclaw/pull/3161) 结构化日志敏感信息脱敏 — 创建于 7/31

**⚠️ 维护者提醒**：#2651（安全修复）与 #2809（Apple Container）等待时间最长，建议优先安排评审资源，避免安全修复与重要功能长期滞留在积压队列中。


## 总结

NanoClaw 正处于**功能生态扩张与架构分化的十字路口**。社区对项目的极简理念高度认同，但随着使用场景从"个人实验"走向"生产环境"，容器运行时灵活性已成为最核心的诉求。通道适配器方面 iMessage 进展顺利，Dial 通道有望成为下一个增长点。项目健康度整体良好，但**待合并 PR 积压**与**长期未响应的功能请求**是当前最主要的风险项，建议维护团队在下一阶段重点消化存量 PR，并尽快明确"多运行时"路线图的时间表。

*本日报自动生成于 2026-08-01，数据截止时间以 GitHub API 返回时间为准。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

过去 24 小时内，NullClaw 项目整体活跃度较低：Issues 新增/关闭为 0，PR 仅有 1 条新增更新，无新版本发布。唯一值得关注的是社区贡献者 valonmulolli 提交的 PR #981，为项目新增 `grok-cli` provider，用于对接 xAI Grok CLI。该 PR 目前处于待合并状态，尚未看到维护者明确回复。整体看，项目当前处于低频维护/社区贡献驱动阶段，功能扩展方向仍集中在本地 CLI 工具的接入层。

## 2. 版本发布

今日无新版本发布，本节从略。

## 3. 项目进展

- 今日无 PR 被合并或关闭，项目主分支没有新增代码合并。
- 待合并 PR 1 条：

### #981 [OPEN] feat(provider): add grok-cli provider for xAI Grok CLI
- 作者：valonmulolli
- 创建：2026-07-29
- 更新：2026-07-31
- 链接：https://github.com/nullclaw/nullclaw/pull/981

该 PR 计划新增一个基于本地 CLI 调用的 provider，将请求委托给本地安装的 `grok` CLI（xAI Grok），并复用现有 `codex-cli` / `gemini-cli` / `claude-cli` 的 “每次请求 spawn 一次” 模式。`grok-cli` 被设计为可选 provider，仅当用户本地安装并配置 `grok` CLI 后才可使用。

如果该 PR 被合并，NullClaw 将新增对 xAI Grok 生态的支持，进一步丰富现有 provider 矩阵。不过目前仍处于待审阅状态。

## 4. 社区热点

今日没有 Issues 或 PR 产生评论互动，平台数据中仅有 PR #981 作为唯一活跃 PR，但未提供明确的评论数与点赞数。

当前社区关注点集中在：

- **PR #981**：接入 xAI Grok CLI，让用户可以通过现有 NullClaw 工作流调用本地 `grok` 命令。
- 背后诉求：用户希望 NullClaw 能持续扩展 AI 后端选择，不局限于已有 OpenAI、Anthropic、Google 等官方 API，而是也能覆盖本地 CLI 工具生态。

链接：https://github.com/nullclaw/nullclaw/pull/981

## 5. Bug 与稳定性

今日无新增 Bug 报告，无崩溃、无回归问题，也没有对应的 fix PR。项目稳定性状态未见明显风险信号。

## 6. 功能请求与路线图信号

- 暂无新 Issues 提出功能请求。
- 但 PR #981 本身是一个清晰的功能扩展信号：社区希望支持 `grok-cli` 作为 provider。

如果维护者对该 PR 持正面态度，这一功能有潜力被纳入后续小版本更新。路线图信号可以总结为：

> 继续沿着 “多 provider + 本地 CLI 适配” 方向扩展，降低对单一云端 API 的依赖。

## 7. 用户反馈摘要

由于今日没有新增 Issues，且 PR #981 未产生可用的评论数据，因此无法提炼出更多真实用户反馈。

从 PR 描述本身可以看出，贡献者至少代表了以下一类用户诉求：

- 已经在本地使用或希望使用 xAI Grok CLI 的用户；
- 更倾向于复用现有 CLI 工具，而不是直接接入云端 API 的用户；
- 希望 NullClaw 能保持与已有 `codex-cli` / `gemini-cli` / `claude-cli` provider 一致体验的开发者。

## 8. 待处理积压

当前没有长期未响应的 Issues，但在 PR 层面有以下待办提醒：

- **PR #981**：自 2026-07-29 创建以来已处于待合并状态，最近一次更新为 07-31，目前尚未显示被合并或关闭。建议维护者及时 review，确认是否纳入主线，避免社区贡献长期搁置。

链接：https://github.com/nullclaw/nullclaw/pull/981

---

**总结**：NullClaw 今日活跃度不高，但 PR #981 的存在表明社区仍在积极补充 provider 生态。当前项目健康度中等，主要风险是社区 PR 的响应速度和维护者参与度。建议维护者在下一个工作周期优先处理该 PR 的 review 与合并决策。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

过去 24 小时项目高度活跃：共 36 条 Issue 更新（29 条活跃、7 条关闭）与 50 条 PR 更新（21 条待合并、29 条已合并/关闭），无新版本发布。核心事件是目标架构 WS1 重构波持续推进，WS1.1–WS1.4 四个契约抽取 PR 全部合并，Hosted MCP 注册大功能（+15k 行）落地；同时 ilblackdragon 新提交了 "pi-harness 采纳计划" 的 7 个 Issue（含 4 个 P0 缓存性能项），开启了新一轮性能与令牌成本优化。安全面出现一个 P0 级跨用户内存泄漏（[#6900](https://github.com/nearai/ironclaw/issues/6900)），尚无修复 PR。整体项目健康度良好：架构重构推进果断、用户反馈被快速转化为 Issue，但安全/性能债仍较集中。

---

## 2. 版本发布

今日无新版本发布。

> 注：一个发布 PR [chore: release #5598](https://github.com/nearai/ironclaw/pull/5598) 自 07-03 起已挂起 29 天，涉及 `ironclaw_common` 0.4.2→0.5.0 与 `ironclaw_skills` 0.3.0→0.4.0 的 **API breaking changes**，建议维护者关注（详见第 8 节积压）。

---

## 3. 项目进展

今日合并/关闭 29 条 PR，核心进展集中在三块：

**① 目标架构 WS1 契约抽取波（4/7 已合并）** — BenKurrek 主导的系列重构，将 `ironclaw_host_api` 中的中性契约逐步抽取到独立 crate：

| PR | 工作流 | 内容 |
|---|---|---|
| [PR #6967](https://github.com/nearai/ironclaw/pull/6967) (merged) | WS1.1 | 补全 host_api 回合词汇表，退役 turns shim |
| [PR #6975](https://github.com/nearai/ironclaw/pull/6975) (merged) | WS1.2 | 抽取 `ironclaw_loop_contracts`，翻转 `agent_loop` 依赖 |
| [PR #6977](https://github.com/nearai/ironclaw/pull/6977) (merged) | WS1.3 | 抽取 `ironclaw_extension_contracts`，关闭双导入路径 |
| [PR #6980](https://github.com/nearai/ironclaw/pull/6980) (merged) | WS1.4 | 抽取 `ironclaw_product_contracts`，落地 ChannelAdapter 适配层 |

后续 [PR #6981（WS1.5，witness grants 合并）](https://github.com/nearai/ironclaw/pull/6981) 与 [PR #6982（WS1.6+1.7，收窄 ironclaw_common 与 product→runner 边）](https://github.com/nearai/ironclaw/pull/6982) 已按序堆叠待合并 —— Wave 1 预计即将收官。

**② Hosted MCP 注册功能落地** — [PR #6930](https://github.com/nearai/ironclaw/pull/6930)（merged，153 文件 / +15,002/−1,818）实现租户运行时注册 Hosted MCP 服务器，并自动检测 no-auth / bearer / OAuth 凭证，接入既有扩展生命周期；配套文档同步 [PR #6979](https://github.com/nearai/ironclaw/pull/6979)（merged）。

**③ WebUI 与工具链修复**

- [PR #6908](https://github.com/nearai/ironclaw/pull/6908)（merged，human-verified）：管理端用户列表分页，修复 [#6903](https://github.com/nearai/ironclaw/issues/6903)。
- [PR #4022](https://github.com/nearai/ironclaw/pull/4022)（merged）：修复 #4014 引入的回归 —— HTTP 响应错误应作为**可恢复**的工具错误呈现给模型，而不是中止整个 run。
- [PR #3942](https://github.com/nearai/ironclaw/pull/3942)（merged）：PilotAllowlist 由字符串匹配改为 serde 驱动枚举，补全调用方错误分支测试。

**小结**：WS 重构波单日推进 4 个切片、MCP 大功能合并、WebUI 分页与数据真实性双修复落地，项目在架构治理与功能交付上同步前进。

---

## 4. 社区热点

- **[Issue #6284 — error-recoverability endgame epic（15 评论，最高）](https://github.com/nearai/ironclaw/issues/6284)**：定义"错误可恢复性契约"——每次运行中错误须满足 (a) run 存活 (b) 模型可见 (c) 携带原因与成功条件 (d) 模型获得行动回合 (e) 不报告假失败。诉求非常明确：**让模型对所见错误的恢复率达到 100%**，是当前可靠性讨论的焦点。
- **[Issue #6963 — path-keyed CI gates（5 评论）](https://github.com/nearai/ironclaw/issues/6963)**：#6946 审查中发现 8 个 CI/开发门禁仍依赖字面 `crates/ironclaw_*` 扁平目录形状，要求全部改为 path-keyed。反映核心团队对 CI 治理精度的高要求。
- **[Issue #6524 — Hermetic 能力与旅程测试平台 epic（4 评论）](https://github.com/nearai/ironclaw/issues/6524)**：提出"每个受支持能力与关键用户旅程是否有确定性覆盖"的机械化验证问题，是测试体系升级的路线图级议题。

此外，**[PR #6991 引入的 pi-harness 深度分析文档](https://github.com/nearai/ironclaw/pull/6991)** 及配套 7 个 Issue（[#6984](https://github.com/nearai/ironclaw/issues/6984)–[#6990](https://github.com/nearai/ironclaw/issues/6990)）是今日新热点：基于 badlogic/pi-mono 的同类模型基准（Databricks / nqawhc / openbench / Portkey）表现，将 pi 的提示词前缀稳定性、显式 cache_control 断点、令牌核算等做法引入 IronClaw，目标直指**成本与令牌利用率**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 问题 | Fix PR |
|---|---|---|---|
| 🔴 P0 安全 | [#6900](https://github.com/nearai/ironclaw/issues/6900) | 共享频道默认主语绑定导致**跨用户内存泄漏**：所有用户折叠进操作员记忆命名空间 | 无 |
| 🔴 P0 性能 | [#6984](https://github.com/nearai/ironclaw/issues/6984)／[#6985](https://github.com/nearai/ironclaw/issues/6985)／[#6986](https://github.com/nearai/ironclaw/issues/6986)／[#6987](https://github.com/nearai/ironclaw/issues/6987) | 提示词前缀被变异（nudges/时间戳/逐次记忆检索）、工具数组非字节一致、缺少显式 cache_control 断点 → 缓存命中率受损（pi-harness P0 计划） | 无（新立项） |
| 🟠 P1 逻辑 | [#6988](https://github.com/nearai/ironclaw/issues/6988)／[#6989](https://github.com/nearai/ironclaw/issues/6989)／[#6990](https://github.com/nearai/ironclaw/issues/6990) | Compaction 硬编码 128k 窗口、`ModelWorkRequest` 按引用字符串长度估算 token、压缩推理污染 prompt cache | 无 |
| 🟠 P2 安全 | [#6866](https://github.com/nearai/ironclaw/issues/6866) | 所有用户共享同一 home 目录，工作区互相可见（隐私） | 无 |
| 🟠 P2 安全 | [#6778](https://github.com/nearai/ironclaw/issues/6778) | Hosted-MCP 工具目录按 extension id 发布而非按安装实例，多主体服务器跨用户元数据暴露 | 无 |
| 🟠 P2 功能 | [#6940](https://github.com/nearai/ironclaw/issues/6940) | IronHub 技能 CTA 全量 404 | 无 |
| 🟠 P2 功能 | [#6972](https://github.com/nearai/ironclaw/issues/6972) | 新账号邮箱认证不可用 | 无 |
| 🟠 性能 | [#6974](https://github.com/nearai/ironclaw/issues/6974) | libSQL `thread_store_writes` 病态：工具密集场景 p95 达 37–135s（#6696 后） | 无 |
| 🟡 CI | [#6978](https://github.com/nearai/ironclaw/issues/6978) | `workflow_dispatch` 运行结构性导致 Tests (Reborn) roll-up 必红 | [PR #6992](https://github.com/nearai/ironclaw/pull/6992)（locale 修复，非直接对应） |
| 🟡 CI | [#6947](https://github.com/nearai/ironclaw/issues/6947) | `classify-test-scope.sh` 将 `ironclaw_product` 误归为 legacy-only | 无 |
| 🟡 UI | [#6902](https://github.com/nearai/ironclaw/issues/6902) | Projects 页展示后端不存在的虚构指标（$0.00 spend 等） | [PR #6906](https://github.com/nearai/ironclaw/pull/6906)（open，human-verified） |

今日确认修复：**[#6903 管理端用户分页 → #6908 已合并](https://github.com/nearai/ironclaw/pull/6908)**；**[#4022 工具错误可恢复性回归已合并](https://github.com/nearai/ironclaw/pull/4022)**。

---

## 6. 功能请求与路线图信号

**用户侧新需求：**

- **[#6939 迁移工具](https://github.com/nearai/ironclaw/issues/6939)**（p2, feedback）：将 Hermes/Openclaw 旧代理的配置与记忆迁移到 IronClaw，降低切换成本 —— 多位用户明确表示"不愿从零开始"。
- **[#6971 术语标准化 "Tools" vs "Extensions"](https://github.com/nearai/ironclaw/issues/6971)**（p2, feedback）：用户要求明确产品术语边界。
- **[#6983 `hub` 作为 `ironhub` CLI 别名](https://github.com/nearai/ironclaw/issues/6983)**（p2, feedback）：IronHub 仪表盘兼容性小需求。
- **[#6854 品牌措辞统一 "Reborn" → "Ironclaw 1.0"](https://github.com/nearai/ironclaw/issues/6854)**：外部信息一致性诉求。

**路线图信号：**

- **pi-harness 采纳计划**（[PR #6991 研究文档](https://github.com/nearai/ironclaw/pull/6991) + [#6984–#6990](https://github.com/nearai/ironclaw/issues/6984)）是明确的下一阶段性能/成本主题，P0 项已排入。
- **[#6941 技能史诗](https://github.com/nearai/ironclaw/issues/6941)**：模型可发现、选择、使用技能，且自创技能可量化收益 —— "Reborn" 产品能力主线。
- **[#6578 管理员托管 Agent as UserId Subjects 史诗](https://github.com/nearai/ironclaw/issues/6578)** 与 **[#6524 Hermetic 测试平台史诗](https://github.com/nearai/ironclaw/issues/6524)** 仍在路线图高位。

结合 "Reborn → Ironclaw 1.0" 的品牌收口信号，项目正从代号阶段向 **1.0 GA 化**过渡。

---

## 7. 用户反馈摘要

- **上手即断点**：用户反馈 IronHub 技能 CTA 全部 404（[#6940](https://github.com/nearai/ironclaw/issues/6940)）、新账号邮箱认证失败（[#6972](https://github.com/nearai/ironclaw/issues/6972)）—— 注册→使用链路存在明显断点，影响新用户转化。
- **迁移阻力**：Hermes/Openclaw 存量用户面临高切换成本，若无迁移工具"可能不会迁移"（[#6939](https://github.com/nearai/ironclaw/issues/6939)）。
- **隐私担忧（tobias.holenstein）**：所有用户共享同一 home 目录、彼此可见工作区，"这是一个隐私问题"（[#6866](https://github.com/nearai/ironclaw/issues/6866)）。
- **无人值守部署痛点（kmjayadeep）**：在 Proxmox 上的 Debian VM 中，`ironclaw service install` 未启用 user lingering，导致无人值守场景下服务不可靠（[#6976](https://github.com/nearai/ironclaw/issues/6976)）。
- **术语与品牌困惑**："Tools" 与 "Extensions" 边界不清、扩展页仍用 "Reborn" 旧品牌（[#6971](https://github.com/nearai/ironclaw/issues/6971)、[#6854](https://github.com/nearai/ironclaw/issues/6854)）。

总体画像：用户认可产品方向，但对**认证可靠性、隐私隔离、迁移成本和术语一致性**有明确不满。

---

## 8. 待处理积压

以下重要条目需维护者关注：

| 类别 | 条目 | 搁置时长 | 说明 |
|---|---|---|---|
| ⏳ 发布 | [PR #5598 chore: release](https://github.com/nearai/ironclaw/pull/5598) | 07-03 起，29 天 | 含 `ironclaw_common` 0.5.0 / `ironclaw_skills` 0.4.0 breaking changes，长期未合入 |
| ⏳ 功能 | [PR #5981 Reborn 队列消息 steering](https://github.com/nearai/ironclaw/pull/5981) | 07-11 起，21 天 | XL 级、已 forward-port 到最新 main，待合入 |
| ⏳ 功能 | [PR #5982 预算审批 gate + 用量设置](https://github.com/nearai/ironclaw/pull/5982) | 07-11 起，21 天 | 依赖 #5981，二者串联搁置 |
| ⏳ 史诗 | [Issue #6284 error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284) | 07-19 起 | 社区讨论最高（15 评论），需拆解落地 |
| ⏳ 史诗 | [Issue #6524 Hermetic 测试平台](https://github.com/nearai/ironclaw/issues/6524) | 07-22 起 | 测试体系路线图 |
| ⏳ 史诗 | [Issue #6578 管理员托管 Agents](https://github.com/nearai/ironclaw/issues/6578) | 07-23 起 | 身份体系扩展 |
| ⏳ 功能 | [PR #6831 标准化消息框架](https://github.com/nearai/ironclaw/pull/6831) | 07-28 起 | 16 个核心操作 + 12 码错误分类，XL 级 |
| 🔴 安全 | [Issue #6900 跨用户内存泄漏（P0）](https://github.com/nearai/ironclaw/issues/6900) | 07-30 起 | 尚无 fix PR，建议优先响应 |

---

**整体评估**：IronClaw 处于架构收敛（WS 重构）与性能攻坚（pi-harness 计划）双线并进的高活跃期，社区反馈闭环较快；风险集中在 P0 内存泄漏未修复、发布 PR 长期积压、以及多个史诗级 Issue 尚未拆解。建议优先为 #6900 指派修复，并推动 #5598 发布流程收口。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-01

## 今日速览

过去 24 小时，LobsterAI 无新版本发布、无新开 issues，4 个历史 stale issues 与 6 个历史 stale PRs 被自动清理。实质性工作集中在 7 月 31 日提交的 5 个 PR（#2413–#2417），全部于当天关闭，核心维护者仍在积极合入代码，主线聚焦 **OpenClaw 网关稳定性与 DeepSeek 长会话成本优化**。综合来看，项目处于稳定性/成本优化周期，维护者响应速度快；但社区贡献的 PR 积压后被 stale 批量清理，外部贡献者生态活跃度有所回落。

## 项目进展

24h 内有关键进展的 PR 共 5 个：

| PR | 变更内容 | 状态 |
| --- | --- | --- |
| [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415) | 修复 live prompt 投影中 aggregate cap 重写未变更 tool-result 历史的问题，将 DeepSeek 长会话缓存命中率从 ~57% 恢复至接近 100% | 已关闭 |
| [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) | 同为缓存稳定性修复：live prompt 请求传 `aggregateMaxCharsOverride=null`，保证已缓存历史字节稳定，不再被后续请求重写 | 已关闭 |
| [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414) | Cowork 安全修复：清理 side-chat 结果中的 BTW 工具协议标记，避免泄漏到主上下文；保留错误元数据透传 | 已关闭 |
| [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | 为站点 URL 与分享码的复制操作增加成功反馈，复用会话复制图标与交互模式 | 已关闭 |
| [#2416](https://github.com/netease-youdao/LobsterAI/pull/2416) | Release/2026.7.31 发布流程 PR（模板信息未完整填写） | 已关闭 |

**关键边际**：#2413 + #2415 组合拳解决了 DeepSeek 长会话 + 高频工具调用场景下的缓存命中率崩塌问题，对长会话推理成本有直接正向影响，是今日最有价值的改动。

## 社区热点

今日评论区活跃度不高，技术焦点集中在 **DeepSeek 前缀缓存稳定性** 这条线上——#2413 与 #2415 由同一维护者在一天内连续提交，反映出该问题在内部优先级较高。缓存命中率从 ~100% 降至 57% 意味着约 43% 的 KV cache 成本损失，对深度依赖 DeepSeek 长会话的用户影响显著。

此外，4 个被 stale 关闭的 issues（[#1311](https://github.com/netease-youdao/LobsterAI/issues/1311)、[#1314](https://github.com/netease-youdao/LobsterAI/issues/1314)、[#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)、[#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)）均各有 2 条评论，关闭前有过一定讨论，说明这些功能请求并非无人问津，只是未进入开发主线。

## Bug 与稳定性

| 严重度 | 问题描述 | 状态 |
| --- | --- | --- |
| P1 | DeepSeek 长会话缓存命中率从 ~100% 跌至 ~57%，推理成本显著上升 | 已修复（[#2415](https://github.com/netease-youdao/LobsterAI/pull/2415)、[#2413](https://github.com/netease-youdao/LobsterAI/pull/2413)） |
| P1 | 侧聊（side-chat）结果泄漏 BTW 工具协议标记，可能造成上下文污染 | 已修复（[#2414](https://github.com/netease-youdao/LobsterAI/pull/2414)） |
| P2 | 切换设置页时，记忆编辑器/模型连接测试弹窗遮罩残留，界面看似只读 | 修复 PR 已存在但被 stale 关闭，未合入（[#1321](https://github.com/netease-youdao/LobsterAI/pull/1321)） |
| P2 | 会话列表初始化期间误显示"暂无会话"，空状态闪烁 | 修复 PR 已存在但被 stale 关闭，未合入（[#1320](https://github.com/netease-youdao/LobsterAI/pull/1320)） |

今日无新增崩溃或回归报告。

## 功能请求与路线图信号

今日关闭的 4 个功能请求均指向 UI 体验优化，且全部已有对应实现 PR，但被 stale 机器人关闭：

- **侧边栏拖拽调整宽度**（[#1314](https://github.com/netease-youdao/LobsterAI/issues/1314)）：固定 240px 宽度不适配不同屏幕；实现 PR [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315)，范围 180–480px
- **侧边栏按钮快捷键 kbd 提示**（[#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)）：Ctrl+N/Ctrl+F 发现成本高；实现 PR [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318)，含 macOS 符号自适应
- **会话列表骨架屏**（[#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)）：区分加载中与空状态；实现 PR [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320)
- **表格内容换行与长文本 hover 展示**（[#1311](https://github.com/netease-youdao/LobsterAI/issues/1311)）：换行残留原始标签，截断后无 hover 查看方式

**路线图信号**：已合入的 [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417)（复制成功反馈）说明维护者仍在重视 UI 细节打磨；而 4 个功能增强 PR 被统一 stale 关闭，可能意味着当前版本迭代重心放在 OpenClaw/后端稳定性，而非前端体验。

## 用户反馈摘要

从今日关闭的 issue 描述中可以提炼出以下真实用户诉求：

- **侧边栏宽度不够灵活**：窄屏用户抱怨侧边栏占用比例过大；宽屏用户希望显示更长会话标题；标题过长时固定宽度导致截断，无法判断内容（[#1314](https://github.com/netease-youdao/LobsterAI/issues/1314)）
- **快捷键发现成本高**：用户需要进入设置页才能发现 Ctrl+N/Ctrl+F，建议直接显示 `<kbd>` 徽标，macOS 与 Windows 差异化展示（[#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)）
- **空状态闪烁造成误判**："启动时看到 '暂无历史记录'，误以为历史记录丢失"，实际是 `sessions` 初始空数组导致的加载态缺失（[#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)）
- **表格渲染细节**：换行内容残留原始 HTML 标签，长文本截断后缺少全文查看入口（[#1311](https://github.com/netease-youdao/LobsterAI/issues/1311)）

## 待处理积压

- **[#2234](https://github.com/netease-youdao/LobsterAI/pull/2234) fix(openclaw): cron yield descendant finalization** — 当前唯一 OPEN PR，被标记 stale（6/30 创建，7/31 有更新）。修复 `sessions_yield` 后子 agent 完成事件无法驱动父 agent 继续执行的问题，覆盖普通并行、cron 并行、cron 串行三种场景。功能完整且有测试清单，建议维护者尽快安排 review。
- **[#172](https://github.com/netease-youdao/LobsterAI/pull/172) feat(oauth): add Antigravity OAuth integration** — 大功能 PR 被 stale 关闭。改动涉及主进程 OAuth 子系统、SQLite profile 持久化、OpenAI 兼容代理，未获 reviewer 反馈。若项目有意支持 Antigravity，建议恢复该 PR 或拆分任务重新提交。
- **[#1308](https://github.com/netease-youdao/LobsterAI/pull/1308) feat(cowork): isolate home-screen input draft per agent** — 按 agent 隔离首页输入草稿的 UX 改进，被 stale 关闭，未合入。
- **4 个功能增强 PR（[#1315](https://github.com/netease-youdao/LobsterAI/pull/1315)、[#1318](https://github.com/netease-youdao/LobsterAI/pull/1318)、[#1320](https://github.com/netease-youdao/LobsterAI/pull/1320)、[#1321](https://github.com/netease-youdao/LobsterAI/pull/1321)）**：均有完整实现且对应明确 issue，但从未获得正式 code review 即被 stale 关闭。建议维护者确认是否接受，避免挫伤外部贡献者积极性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-01

## 今日速览

过去 24 小时 Moltis 保持活跃：2 条 Issue 更新（1 条新开、1 条关闭），7 条 PR 更新（5 条待合并、2 条已关闭/合并），无新版本发布。安全加固与功能开发并行推进：Nostr 组聊支持、Markdown 复制/导出相关 PR 收尾，同时出现多个安全修复 PR 待维护者合并。新报告 1 个与 GPT 5.6 Luna 相关的 Bug，尚未有评论或修复 PR。整体迭代节奏正常，但社区讨论热度不高。

## 项目进展

今日关闭/合并的 PR 有两个，分别对应功能补全和渠道能力扩展：

- [PR #1176: feat(web) — Markdown 复制与会话导出](https://github.com/moltis-org/moltis/pull/1176)  
  保留助手回复的原始 Markdown，并新增会话级「Save as Markdown」导出，支持分页历史加载和图片引用。该 PR 直接落地了用户提出的 [Issue #1131「Add copy + export as Markdown」](https://github.com/moltis-org/moltis/issues/1131)。

- [PR #1168: feat(nostr) — Buzz 渠道的 NIP-29 组聊支持](https://github.com/moltis-org/moltis/pull/1168)  
  使 `moltis-nostr` 从仅支持 NIP-* 单聊/订阅，扩展到 Block 开源工作区 Buzz 使用的 NIP-29 组聊协议，并支持 NIP-42 认证连接。

这两个 PR 的关闭意味着 Web 端知识保存/导出体验和 Nostr 渠道能力均向前推进了一步。

## 社区热点

当日没有出现高评论、高 👍 的爆发式讨论。相对值得关注的是：

- [Issue #1181: GPT 5.6 Luna Bug 报告](https://github.com/moltis-org/moltis/issues/1181)  
  新 Bug，目前 0 评论、0 👍。标题指向 GPT 5.6 Luna 模型，可能是新模型兼容问题，后续可能成为热点。

- [Issue #1131: Markdown 复制与导出功能请求](https://github.com/moltis-org/moltis/issues/1131)  
  虽然已经关闭，但拥有 1 个 👍，说明用户对 Markdown 导出存在实际需求，并在今日随 PR #1176 得到回应。

社区讨论量偏低，更多是「用户提交需求/ Bug → 维护者用 PR 落地」的节奏，而非开放性讨论。

## Bug 与稳定性

当日未发现崩溃级回归，但安全相关的修复 PR 密集出现，需要维护者优先关注：

- **高严重度：Zip/模型路径任意文件写入风险**  
  [PR #1180: fix(security) — harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180)  
  恶意 zip 包或 HuggingFace 仓库可导致任意文件写入，覆盖用户信任的 config、credentials、scripts，进而可能形成代码执行。已有修复 PR，等待合入。

- **中高严重度：Node 配对签名未验证**  
  [PR #1179: fix(gateway) — verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179)  
  当前调用者可自行提供 key 或 challenge，缺少对 server-issued pending request 的绑定验证。已有修复 PR。

- **中高严重度：特权命令越权访问**  
  [PR #1170: fix(channels) — 通过 per-account operators list 控制 /sh 等特权工具](https://github.com/moltis-org/moltis/pull/1170)  
  通过 access allowlist 的渠道发送者可能触达特权命令和主机工具，该 PR 将「访问」和「特权」分离。已有修复 PR。

- **待评估：GPT 5.6 Luna 兼容性问题**  
  [Issue #1181](https://github.com/moltis-org/moltis/issues/1181)  
  新 Bug 暂无详情和复现信息，暂无对应 fix PR，需要维护者引导补充上下文。

## 功能请求与路线图信号

- **Markdown 复制/导出已落地**  
  [Issue #1131](https://github.com/moltis-org/moltis/issues/1131) 被 [PR #1176](https://github.com/moltis-org/moltis/pull/1176) 实现，预计进入下一版本。

- **可观测性与反馈收集基础设施**  
  [PR #1174: Add instrumentation and feedback collection infrastructure](https://github.com/moltis-org/moltis/pull/1174)  
  引入与后端无关的 agent instrumentation、Langfuse v4 导出、OTLP 后端和端用户反馈。这是 Moltis 在可观测性方向上的重要信号。

- **Zvec 向量数据库记忆后端**  
  [PR #1158: feat(memory) — 添加 zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)  
  作者以实验性方式实现基于 Zvec + redb 的 memory 后端，并放在 `zvec` cargo feature 后。如果合入，用户将拥有更多记忆后端选择。

- **Nostr 组聊支持已合入**  
  [PR #1168](https://github.com/moltis-org/moltis/pull/1168) 说明 Moltis 对 Block 系生态（Buzz）的接入正在推进。

## 用户反馈摘要

- **安全顾虑是真实采用阻碍**  
  [PR #1179](https://github.com/moltis-org/moltis/pull/1179) 作者明确表示：“我想使用 Moltis，但在使用前需要先把几个安全修复合入。” 这说明外部用户对 Moltis 的安全审计和补丁响应速度有较高期待。

- **开发者愿意在 Moltis 上做实验性探索**  
  [PR #1158](https://github.com/moltis-org/moltis/pull/1158) 作者提到“这只是我的实验性项目，目前作为我的日常配置使用”，并以独立 llama-cpp server 运行 embedding。反映出 Moltis 的 feature-gate 设计允许用户自定义 memory backend，技术型用户接受度较好。

- **需求被快速响应**  
  [Issue #1131](https://github.com/moltis-org/moltis/issues/1131) 从 6 月 17 日提出，到 7 月 31 日通过 PR #1176 关闭。虽然没有评论互动，但功能最终落地，说明维护者会在后台处理长期 backlog。

## 待处理积压

- [PR #1158: zvec memory backend](https://github.com/moltis-org/moltis/pull/1158)  
  创建于 7 月 17 日，已停留约两周，目前仍开放。作为实验性后端，维护者应明确是否合入或关闭，避免长期悬挂。

- [PR #1170: 特权工具权限边界](https://github.com/moltis-org/moltis/pull/1170)  
  创建 7 月 26 日，已更新至 8 月 1 日，仍待 review。

- [PR #1174: instrumentation / 反馈收集](https://github.com/moltis-org/moltis/pull/1174)  
  创建 7 月 27 日，已更新至 8 月 1 日，涉及面较大，建议尽早安排 review。

- [PR #1179](https://github.com/moltis-org/moltis/pull/1179) 与 [PR #1180](https://github.com/moltis-org/moltis/pull/1180)  
  均为安全修复且由外部用户提交，建议维护者优先确认和合入，避免安全窗口扩大。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-01

> 项目名称：CoPaw（产品名 QwenPaw，仓库 agentscope-ai/QwenPaw）｜数据窗口：过去 24 小时

---

## 1. 今日速览

过去 24 小时 CoPaw 保持高活跃：16 条 Issues 更新（活跃 11 条、关闭 5 条），34 条 PR 更新（10 条合并/关闭、24 条待合并），无新版本发布。社区反馈高度集中在 2.0.1 稳定性问题上，其中 agent.json 系统性损坏（[#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520)）、shell 命令挂起与 UI 冻结（[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) / [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)）、与 AgentScope 2.0.4.post1 的兼容性崩溃（[#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)）为最突出痛点。值得肯定的是，社区响应非常迅速——上述问题均已在 24 小时内获得修复 PR（[#6610](https://github.com/agentscope-ai/QwenPaw/pull/6610)、[#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615)、[#6528](https://github.com/agentscope-ai/QwenPaw/pull/6528)），且两项记忆压缩数据丢失问题已通过 [PR #6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) 与 [PR #6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) 合并关闭。整体判断：项目处于快速迭代期，贡献者生态活跃，但稳定性是当前最主要矛盾，静默失败类问题（微信推送、飞书音频、空响应）对用户信任度冲击最大。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

过去 24 小时共 10 条 PR 合并/关闭，本日报覆盖其中 3 条实质性合并：

- **飞书频道音频转写恢复**（[PR #6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) 合并，修复 [#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544)）
  AgentScope 2.0 迁移后，飞书等频道创建的音频消息（`AudioContent`）无法到达转写流程导致静默失败。该 PR 补齐了频道音频消息的处理链路，恢复了音频转写能力。

- **Auto-Memory 滚动淘汰修复**（[PR #6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) 合并，修复 [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555)）
  Scroll 上下文策略在自动压缩时绕过 AgentScope 压缩中间件，导致尚未写入 Auto-Memory 的早期会话被直接淘汰、最终缺失于每日记忆。该 PR 在上下文淘汰前 flush 待处理 markers，并避免手动 `/compact` 重复提交 summarization task。同一问题还有 [PR #6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) 提出替代修复方案，仍处于 Open 状态。

- **read_file 工具接受数值字符串行范围**（[PR #6606](https://github.com/agentscope-ai/QwenPaw/pull/6606) 合并）
  工具现可接受如 `"10-20"` 形式的行范围参数，降低模型调用工具时的解析失败率。

此外，以下新 PR 今日进入待合并队列，反映社区对昨日 Bug 的快速跟进：

- [PR #6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) — 修复与 agentscope 2.0.4.post1 的兼容性问题（对应 [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)）
- [PR #6610](https://github.com/agentscope-ai/QwenPaw/pull/6610) — 修复 shell 命令挂起与 UI 冻结（对应 [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) / [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)）
- [PR #6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) — 修复 `spawn_subagent` 单任务模式 schema（对应 [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)）
- [PR #6618](https://github.com/agentscope-ai/QwenPaw/pull/6618) — 移除控制台会话列表的强制 UTC 时间戳归一化

其他已关闭 Issue 中，[#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529)（ACP `new_session` 响应缺少 `models` 字段）与 [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558)（多会话 UI 数据完整性）也在今日关闭。

---

## 4. 社区热点

今日讨论热度集中在基础设施稳定性议题（按评论数排序）：

- **[#6537] Skill tags 重启后消失（回归）** — 10 条评论
  [https://github.com/agentscope-ai/QwenPaw/issues/6537](https://github.com/agentscope-ai/QwenPaw/issues/6537)
  标签通过 `PUT /skills/pool/{name}/tags` API 正确写入 `skill_pool/skill.json`，但启动时 manifest 重新协调后丢失，是 #3270 的回归。高热度但暂无 fix PR 认领。

- **[#6601] QwenPaw 不报空响应错误** — 5 条评论
  [https://github.com/agentscope-ai/QwenPaw/issues/6601](https://github.com/agentscope-ai/QwenPaw/issues/6601)
  长会话因工具调用累积逼近窗口上限后，模型空响应但 QwenPaw 不报错，导致会话彻底失去响应。用户明确指出这是框架层问题。

- **[#6588] `spawn_subagent` 单任务模式不可用** — 4 条评论
  [https://github.com/agentscope-ai/QwenPaw/issues/6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)
  `batch` 参数在模型工具 schema 中被生成为必填，导致单任务模式（`batch=None`）无法通过校验。已有修复 PR [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609)。

- **[#6520] agent.json 系统性损坏** — 3 条评论
  [https://github.com/agentscope-ai/QwenPaw/issues/6520](https://github.com/agentscope-ai/QwenPaw/issues/6520)
  Windows 环境下 20+ 字段出现 BOM、缺失引号、双重编码三种损坏类型，导致系统完全不可用。

- **[#6589] shell 大输出冻结 UI** 与 **[#6512] shell 大输出截断** — 各 3 条评论
  [https://github.com/agentscope-ai/QwenPaw/issues/6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | [https://github.com/agentscope-ai/QwenPaw/issues/6512](https://github.com/agentscope-ai/QwenPaw/issues/6512)
  超长 stdout（数万行）一次渲染阻塞 UI 主线程；输出超过 ~30KB 被截断甚至触发 Internal error。

**需求侧洞察**：热点议题高度指向三个共同场景——Windows 环境稳定性、长会话/长上下文可靠性、shell 工具类大输出处理。这三点是 2.0.1 用户最集中的痛点区域。

---

## 5. Bug 与稳定性

按严重程度排列，标注是否已有修复 PR：

### 严重

- **agent.json 系统性损坏，导致系统完全不可用**（[#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520)）
  BOM、缺失引号、双重编码三种损伤并存于 20+ 字段。Windows 环境，可能与文本编辑器/同步工具隐式添加 BOM 或写入中断有关。
  已有修复：[PR #6528](https://github.com/agentscope-ai/QwenPaw/pull/6528)（安全 JSON 读取 + 兼容性写入 + 写时原子替换）。

- **微信 cron 定时推送静默失败，烧毁约 44M tokens**（[#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614)）
  自 2026-07-27 配置以来从未真正送达，任务显示 `success` 但微信侧返回 `ret=-2`（context_token 失效）。静默失败 + 巨量 token 消耗，属最伤信任的 Bug 类型。暂无 fix PR。

- **长时 shell 命令绕过超时机制，无限阻塞飞书会话**（[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)）
  一个访问飞书 Bitable API 的去重脚本阻塞会话 1.5 小时，后续消息排队等待；取消后遗留孤儿子进程。且无 per-channel 总超时限制。
  已有修复：[PR #6610](https://github.com/agentscope-ai/QwenPaw/pull/6610)（对超时上限封顶、默认 600s、添加取消清理）。

- **QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容**（[#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)）
  两个独立故障：proactive 子系统崩溃（`Msg.content` 类型变更）与工具权限死锁。由 agentscope API 变更引起。
  已有修复：[PR #6615](https://github.com/agentscope-ai/QwenPaw/pull/6615)。

### 中等

- **`execute_shell_command` 超长输出冻结 UI**（[#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)）
  数万行 stdout 一次性渲染，主线程阻塞，用户只能强制关闭应用。
  已有修复：[PR #6610](https://github.com/agentscope-ai/QwenPaw/pull/6610)（同时覆盖 #6608 与 #6589）。

- **长会话空响应不报错**（[#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601)）
  模型空响应时框架层无检测、无报错，长上下文会话中某些模型彻底失去响应。暂无 fix PR。

- **Skill tags 重启后丢失（回归 #3270）**（[#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537)）
  API 保存正确但启动 manifest 协调时丢失。当前最高热度 issue（10 评论），暂无 fix PR。

- **`spawn_subagent` 单任务模式不可用**（[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588)）
  `Optional[list | str]` 被 schema 生成器误判为必填。
  已有修复：[PR #6609](https://github.com/agentscope-ai/QwenPaw/pull/6609)。

### 已修复/已关闭

- **飞书频道音频消息静默转写失败**（[#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544)）→ 由 [PR #6573](https://github.com/agentscope-ai/QwenPaw/pull/6573) 合并修复
- **Dream/记忆压缩丢失早期会话事件**（[#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555)）→ 由 [PR #6592](https://github.com/agentscope-ai/QwenPaw/pull/6592) 合并修复（另有 [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) 备选方案仍开放）
- **ACP `new_session` 响应缺失 `models` 字段**（[#6529](https://github.com/agentscope-ai/QwenPaw/issues/6529)）→ 已关闭
- **多会话 UI 数据完整性：丢消息/指令漂移/重新渲染**（[#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558)）→ 已关闭
- **Desktop 输入框被遮挡**（[#6549](https://github.com/agentscope-ai/QwenPaw/issues/6549)）→ 已关闭

---

## 6. 功能请求与路线图信号

- **全局热键快速输入窗口** — [PR #6607](https://github.com/agentscope-ai/QwenPaw/pull/6607)（实现 [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568)）
  类豆包风格：全局快捷键（默认 `alt+space`）唤起无边框置顶悬浮窗，快速输入后发送。属桌面端体验增强，可能进入下一桌面版本。

- **NVIDIA NIM Provider 支持** — [PR #6526](https://github.com/agentscope-ai/QwenPaw/pull/6526)
  基于现有 OpenAIProvider 架构接入 NVIDIA 的 OpenAI 兼容端点（`https://integrate.api.nvidia.com/v1`），扩展模型生态覆盖。

- **Provider 发现/路由/模型元数据统一** — [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)（对应 [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167)）
  大型架构重构：统一 provider 发现、模型路由与 Console 模型管理，将"发现候选"与"已配置模型"分离。需额外评审资源。

- **结果呈现优化（折叠思考过程）** — [Issue #6260](https://github.com/agentscope-ai/QwenPaw/issues/6260)（获 👍）
  用户希望默认折叠思考/工具调用过程，直接展示 Agent 交付结果。属 UI 信息架构改进，无 PR 认领。

- **shell 大输出自动写文件或流式读取** — [Issue #6512](https://github.com/agentscope-ai/QwenPaw/issues/6512)
  社区建议对 >30KB 输出自动落盘或提供流式读取机制，与今日合并的 [PR #6606](https://github.com/agentscope-ai/QwenPaw/pull/6606) 同属工具可用性方向。

- **桌面应用改名 "QwenPaw Desktop" → "QwenPaw"** — [Issue #6587](https://github.com/agentscope-ai/QwenPaw/issues/6587)
  低风险 UI 改动，可能随下个小版本顺手合入。

- **Desktop 侧边栏工作区快捷入口** — [PR #6306](https://github.com/agentscope-ai/QwenPaw/pull/6306)（关闭 [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083)）
  在侧边栏工具区增加打开当前 agent 工作目录的入口，方便查看生成文件。

- **AI review bot 增强** — [PR #6550](https://github.com/agentscope-ai/QwenPaw/pull/6550)
  CI review bot 预计算 per-file change map，减少误报、提高 merge-blocker 捕获率。属工程效率方向。

---

## 7. 用户反馈摘要

- **静默失败最伤信任**：[#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614) 中微信 cron 推送"任务显示 success 但从未送达"，且已烧毁约 44M tokens（重试与排查消耗）。用户对"success"状态与真实结果不一致表达了强烈不满。

- **系统级崩溃导致业务中断**：[#6520](https://github.com/agentscope-ai/QwenPaw/issues/6520) 用户报告 agent.json 损坏导致 "complete system failure"，影响 20+ 字段，三种损坏类型（BOM/缺引号/双重编码）并存，Windows 环境是重灾区。

- **UI 卡死只能强杀**：[#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) 用户原话"界面完全卡死，用户只能强制关闭应用"。长 stdout 一次性渲染阻塞主线程，这类体验问题极大影响日常使用信心。

- **长会话可靠性焦虑**：[#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) 用户定位空响应不报错为"框架层问题"；[#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) 用户对早期会话操作"永远不会被写入当天记忆"表示担忧——记忆数据丢失比功能缺失更让用户不安。

- **渠道集成稳定性**：飞书会话被阻塞 1.5 小时（[#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608)）、飞书音频静默失败（[#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544)）——多渠道场景下任一渠道的隐性故障都会放大用户对整体可靠性的质疑。

- **细节体验诉求**：[#6549](https://github.com/agentscope-ai/QwenPaw/issues/6549) 2560x1600/150% 缩放下输入框被遮挡；[#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) 用户评价"Desktop 后缀多此一举且很奇葩"。小问题虽不致命，但影响整体观感。

**整体倾向**：用户认可项目功能覆盖广（多 provider、多渠道、记忆系统），但对 2.0 系列稳定性/回归的容忍度在下降。最满意的部分可能是社区的响应速度（多个严重 bug 在 24 小时内即获得修复 PR），最不满意的是静默失败类问题（微信推送、飞书音频、空响应、UI 卡死）。

---

## 8. 待处理积压

以下 Issue/PR 长时间未获响应或推进，提醒维护者关注：

- **[#6260] 结果呈现提升**（[链接](https://github.com/agentscope-ai/QwenPaw/issues/6260)）
  7/19 创建，已 13 天，👍 1。UI 信息架构改进需求，无 PR 认领。考虑到该问题直接影响新用户的第一印象，建议规划进 UI 迭代。

- **[#6537] Skill tags 重启丢失回归**（[链接](https://github.com/agentscope-ai/QwenPaw/issues/6537)）
  当前评论数最高的 issue（10 条），已确认是 #3270 的回归，但尚无 fix PR 认领。回归类高热度 Bug 建议优先分配。

- **[#6601] 空响应不报错**（[链接](https://github.com/agentscope-ai/QwenPaw/issues/6601)）
  框架层问题，5 条评论，指向长会话场景下的模型失联，暂无 PR。

- **[PR #6203] Windows tasklist 探针超时与隐藏**（[链接](https://github.com/agentscope-ai/QwenPaw/pull/6203)）
  7/16 创建，已 16 天，标注 "Under Review / ready-for-human-review" 后停滞。修复的是 Windows 下 `_is_pid_running()` 无超时导致挂起的问题，与近期 shell 稳定性议题直接相关。

- **[PR #6306] Desktop 工作区快捷入口**（[链接](https://github.com/agentscope-ai/QwenPaw/pull/6306)）
  7/21 创建，已 11 天，功能明确（关闭 #6083），等待评审。

- **[PR #6302] Provider 发现/路由/模型元数据统一**（[链接](https://github.com/agentscope-ai/QwenPaw/pull/6302)）
  7/21 创建，已 11 天，大型架构重构，建议维护者分配专门评审资源，避免长期滞留导致合并冲突累积。

---

*本日报由 AI 自动生成，数据基于 GitHub 公开仓库 agentscope-ai/QwenPaw，仅供项目健康度参考。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-01

## 1. 今日速览

过去 24 小时 ZeroClaw 仓库保持高度活跃：共 50 条 Issue 更新（45 条新开/活跃，5 条关闭）与 50 条 PR 更新（41 条待合并，9 条已合并/关闭），无新版本发布。社区讨论重心集中在架构级 RFC——记忆体系分层、安全边界治理与生态互操作是三大主线；核心贡献者 Audacity88 于今日密集提交了 5 个安全/配置修复 PR（#9603–#9607），显示项目在推进新功能的同时也在同步做防御性加固。整体健康度良好，RFC 评审流程运转正常，但大量 PR 长期停留在 `needs-author-action` 状态，贡献者响应速度正成为合并吞吐的主要瓶颈。

## 2. 版本发布

过去 24 小时无新版本发布，本节省略。

## 3. 项目进展

过去 24 小时有 9 个 PR 合并/关闭，但本次数据概览未展示这些 PR 的具体明细。从当前开放的 PR 池可以观察到以下重要进展方向：

- **Hindsight 记忆栈（7 部分系列）**：[#9063](https://github.com/zeroclaw-labs/zeroclaw/pull/9063)–[#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069) 七连 PR 覆盖新 Hindsight HTTP 记忆后端、共享/系统记忆层级与授权、召回/注入调优、保留/遗忘 invalidate API、异步 retain 及 Dashboard 按代理后端计数。这是近期体量最大的功能切片，若全部合并将显著增强记忆架构的可配置性与多代理隔离能力。
- **OpenAI 兼容端点**：[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) 持续推进，对应 Issue [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)，合并后 Open WebUI、LobeChat、LangChain、Continue.dev 等生态工具可直接接入。
- **安全修复批量提交**：Audacity88 于 8 月 1 日提交 5 个修复 PR——coding CLI 工具运行时路由（[#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607)）、OpenAI Responses 代理配置生效（[#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606)）、Linq webhook 别名所有权强制（[#9604](https://github.com/zeroclaw-labs/zeroclaw/pull/9604)）、Quickstart webhook 必要配置采集（[#9605](https://github.com/zeroclaw-labs/zeroclaw/pull/9605)）、Ollama dev 模板契约迁移（[#9603](https://github.com/zeroclaw-labs/zeroclaw/pull/9603)），均针对真实配置/安全缺陷。
- **Slack 令牌泄漏修复**：[#8918](https://github.com/zeroclaw-labs/zeroclaw/pull/8918) 经维护者修复分支（移除新增 `unwrap()`、收窄轮换令牌匹配范围）后继续评审，补强泄漏检测器对 Slack 令牌的脱敏能力。

## 4. 社区热点

评论数最多的 5 条讨论全部为 RFC，说明社区深度参与架构设计：

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 14 | 对话历史与代理长期记忆的架构分离 |
| 2 | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 11 | 主密钥材料来源抽象 `KeySource` trait |
| 3 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 10 | 高危 shell 命令逐次确认层 + allow/ask/deny 策略 |
| 4 | [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | 9 | OTel 导出增加跨轮次对话关联 `gen_ai.conversation.id` |
| 5 | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | 8 | A2A 出站客户端 A2ATool |

背后的诉求可归纳为三点：**记忆分层**——用户要求会话历史与长期记忆在实现层面彻底解耦（#9048 与 #6850 同源）；**安全可控**——从密钥分类（#9127，涉及 93 个 `#[secret]` 字段）到 shell 命令策略（#7155）都要求更细粒度的治理；**生态互操作**——A2A 出站能力（#9106，源于 #3566 的拆分）与 OpenAI 兼容端点（#8550）共同指向让 ZeroClaw 融入更广泛的 AI 代理网络。

## 5. Bug 与稳定性

**已关闭（过去 24 小时）：**

- [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)（S2 严重度 / P1）：Landlock 沙箱在 Fedora 上阻断 `sh` 访问 `/dev/null`，导致 shell 工具完全不可用——状态 `accepted`，已关闭。
- [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)（P3）：通过 Dashboard 添加 Signal/语音通话频道但未填凭据时（`enabled = false`），channels orchestrator 空转退出、supervisor 每约 2 秒重启的崩溃循环——已关闭。

**待合并修复 PR（按风险排序）：**

- [#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607)（risk:high）：`codex_cli`、`claude_code`、`gemini_cli`、`opencode_cli` 未经过配置的运行时/沙箱包装直接执行，存在绕过风险，修复为统一走 shared coding CLI executor。
- [#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606)（risk:high）：OpenAI Responses API 路径未应用运行时代理配置，可能导致请求绕过企业代理管控。
- [#9604](https://github.com/zeroclaw-labs/zeroclaw/pull/9604)（risk:high）：Linq webhook `/linq/{alias}` 未校验别名归属，未授权/禁用的 alias 可能被错误消费。
- [#8918](https://github.com/zeroclaw-labs/zeroclaw/pull/8918)（risk:high）：泄漏检测器未脱敏 Slack token，且原提交引入 4 个 `unwrap()`，维护者已修复分支。
- [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037)（risk:high）：openrouter → ai21/jamba 流式输出将 `<eom>` 结束标记泄漏到对话历史与频道投递（修复 #9006）。
- [#9449](https://github.com/zeroclaw-labs/zeroclaw/pull/9449)（risk:medium）：JSONL 日志 schema 迁移仅依据首个非空行判断，可能丢行，修复为扫描完整运行时 trace。

## 6. 功能请求与路线图信号

**高概率纳入下一版本：**

- OpenAI 兼容 Chat Completions 端点（[#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)，PR [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) 评审中）——来自 Open WebUI、LobeChat、LangChain、Aider 等客户端的强需求。
- Hindsight 记忆栈 7-PR 系列（[#9063](https://github.com/zeroclaw-labs/zeroclaw/pull/9063)–[#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069)）——含共享/系统记忆层级、配置化召回上限、记忆保留/遗忘 API。
- Skills 紧凑注入默认化（[#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313)）——按需加载技能指令，降低 prompt 上下文占用，保留显式 `full` 模式过渡。
- 频道会话 TTL 清理（[#8139](https://github.com/zeroclaw-labs/zeroclaw/pull/8139)）——防止无界历史增长。

**长期路线图信号：**

- "一切皆插件"统一目录（[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)）——整合 Integrations 与 Plugins/Wasm 概念。
- Wasm-first 插件运行时（[#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135)）+ WASI 硬件访问（[#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187)）+ 插件生命周期 Hook（[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)）。
- A2A 出站客户端（[#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)）与桌面 Computer-use 支持（[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)）。
- Goal mode 有界自主会话（[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)，获 1 👍）——用户对"长程目标 + 预算约束"自治模式的明确需求。

## 7. 用户反馈摘要

- **记忆纠缠是真实痛点**（[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)）：文档虽区分"会话历史"与"长期记忆"两种生命周期，但 runtime/gateway/channel 的自动保存仍将对话轮次写入通用记忆后端（`MemoryCategory::Conversation`），用户期望实现层面彻底分离。
- **配置校验缺失直接导致故障**（[#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724)）：Dashboard UX 允许保存未填凭据的频道块，进而引发 supervisor 崩溃循环——暴露了配置 UX 对空凭据的校验缺口；PR [#9605](https://github.com/zeroclaw-labs/zeroclaw/pull/9605) 正在补上 webhook 的 `port` 与 HMAC `secret` 必填采集。
- **部署环境适配敏感**（[#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)）：Landlock 在 Fedora 上的问题说明 OS 级沙箱与工具链的兼容性直接影响生产可用性，社区对此容忍度低。
- **生态接入意愿强**（[#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)）：Issue 明确提出 LangChain、OpenAI SDK、Continue.dev、Aider 等客户端，用户希望以 OpenAI 协议将 ZeroClaw 作为后端被现有 LLM 工具链直接消费。
- **代理自治边界的双重诉求**：[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) 与 [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) 并存，说明用户既要长程自主目标执行，也要对高危命令保留逐次确认的中间层——"强大但可控"是社区对代理能力的统一期待。

## 8. 待处理积压

- [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) LSP 支持 RFC——创建于 2026-04-19，积压约 3.5 个月，5 条评论，仍无明确结论。
- [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) "一切皆插件"统一目录——2026-05-06 创建，作为长期架构 tracker 需要维护者给出阶段化路线图。
- [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) 安全 UX、运行时凭据边界与隔离默认值——5 月 27 日创建，与 #9127 主题相关，建议合并评审以降低维护者决策负担。
- [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) 细粒度沙箱策略（文件系统/网络）与 [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) Schema-Guided Reasoning 均自 5 月底起等待维护者评审。
- **PR 积压风险**：Hindsight 栈 7 个 PR（[#9063](https://github.com/zeroclaw-labs/zeroclaw/pull/9063)–[#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069)）自 7 月 14 日全部处于 `needs-author-action`，已超两周无 contributor 响应；[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)、[#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985)、[#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037)、[#9449](https://github.com/zeroclaw-labs/zeroclaw/pull/9449) 同样等待作者行动。建议维护者设置明确响应期限或按 [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 决策队列机制接手处理，避免大型功能栈腐烂。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*