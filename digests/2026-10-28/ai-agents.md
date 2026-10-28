# OpenClaw 生态日报 2026-10-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-28 06:51 UTC

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

# OpenClaw 项目日报 — 2026-10-28

> 数据来源：OpenClaw GitHub 仓库（github.com/openclaw/openclaw）过去 24 小时活动。以下内容严格基于所提供数据，未做外部补充。

---

## 1. 今日速览

- **活跃度极高但稳定性压力大**：24 小时内 Issues 更新 500 条（新开/活跃 385、关闭 115），PR 更新 500 条（待合并 294、合并/关闭 206），并发布 1 个版本，属于高强度维护节奏。
- **积压结构偏重**：待合并 PR 数（294）显著高于已合并/关闭（206），且高优先级 Bug 多有 `clawsweeper:no-new-fix-pr` 标签，说明"报告多、修复确认少"。
- **核心痛点集中在 Gateway 事件循环阻塞、内存膨胀与更新/重启可靠性**，多个 P0/P1 回归问题横跨 2026.9.x 至 2026.10.x 多个版本仍未闭环。
- **v2026.10.8 主打"更新能完成、能恢复"**，方向与社区反馈高度一致，但 Issues 显示更新链路仍有多处失败场景。

---

## 2. 版本发布

### v2026.10.8（今日发布）

**Highlights（据发布说明）：**
- **更新流程更可靠**：普通 post-update Doctor 失败会重启 Gateway，而不是让它停留在停止状态。
- **孤儿维护进程不再阻塞**：不再阻断所有 CLI 命令与 Gateway 启动。
- **ACL 文件系统兼容**：更新在 ACL 文件系统、Windows 上不再中止（原文在此处被截断）。

**破坏性变更 / 迁移注意事项：**
- 所给发布说明未声明破坏性变更，也未给出具体迁移步骤；仅提示 ACL 文件系统与 Windows 场景的更新行为有变化。
- 需注意：Issues 中 #161921（`state-migrated-no-rollback` 导致 `doctor --fix` 与 `plugins update` 互相阻塞）与 #184658（Windows npm 更新后出现 missing-module 清理失败）显示更新/迁移链路仍存在未解决问题，升级前建议参考这些 Issue。

链接：openclaw/openclaw Release v2026.10.8

---

## 3. 项目进展

**今日合并/关闭 206 条 PR，其中可见的代表性一条：**

- **#185981 [CLOSED]** `fix(test): prepare subscription workers before the watchdog`
  修复 Gateway 订阅分片在冷启动原生 worker 准备前就启动 60 秒无输出看门狗、导致测试被提前终止的问题。属于测试基础设施改进，不影响生产行为。
  链接：openclaw/openclaw PR #185981

**推进中的重点方向（仍待合并）：**
- **更新修复**：#186557 `openclaw update repair` 在 launcher inode 不一致时错误拒绝完好候选（P1，Clawsweeper diamond lobster），与 v2026.10.8 的更新可靠性主题直接呼应。
- **Doctor 历史数据导入**：#186603 让 Doctor 能导入历史 pending-input / worker-placement 存储而不丢失证据。
- **会话权限边界**：#184506 将 session-scoped HTTP 资源限制在当前成员身份内，安全敏感。
- **Goal 恢复**：#186599 修复 Gateway 重启后 Goal 停止推进。
- **推荐提示词**：#186593 为插件 manifest 增加作者提供的推荐起始任务。

**整体判断**：项目在主线程阻塞、更新可靠性、会话安全边界三个方向持续推进，但高优先级修复（尤其 P0）多数仍处于 open 状态，净收敛速度慢于问题新增速度。

---

## 4. 社区热点

按评论数排序的讨论焦点（均为 OPEN）：

| Issue | 评论 | 优先级 | 主题 |
|---|---|---|---|
| [#160959](openclaw/openclaw Issue #160959) | 59 | **P0** | Gateway 捕获大型外部插件时阻塞事件循环数分钟（2026.9.6 回归） |
| [#164294](openclaw/openclaw Issue #164294) | 35 | P2 | 状态 DB WAL 自动 checkpoint 从未完成（被进程内 reader 钉住） |
| [#119720](openclaw/openclaw Issue #119720) | 25 | **P1** | 同步 agent 持久化与 transcript 维护在大规模下阻塞事件循环 |
| [#170956](openclaw/openclaw Issue #170956) | 22 | **P0** | Windows：启动慢、插件关闭不干净、schtasks 权限错误致重启/更新不可靠 |
| [#157325](openclaw/openclaw Issue #157325) | 20 | **P0** | agent-DB 资源卡死导致所有 agent 回复失败，须重启 Gateway |

**背后诉求分析：**
1. **事件循环阻塞是头号系统性问题**——#160959、#119720、#167406、#169797 都指向同一根因族（插件捕获、同步持久化、Codex 插件启动），用户诉求是"不要让单个子系统拖垮整个 Gateway 主线程"。
2. **Windows 平台可靠性被反复点名**——#170956、#167406、#185819、#184658 构成一组 Windows 专项问题，涉及 schtasks 权限、MSIX 启动饥饿、Codex 激活失败、npm 更新清理失败。
3. **更新/迁移链路不闭合**——#161921、#184658 显示部分用户卡在"plugins 等 doctor、doctor 等 plugins"的死循环。
4. **可观测性不足被间接批评**——#164294（WAL 从未完成但无告警）、#143017（21.3M cache-write tokens 实测）、#121232（"Ranked N, Promoted 0" forever）都反映出"系统在悄悄出错"。

---

## 5. Bug 与稳定性

### P0（阻断级，均无新 fix PR 已确认）
- **#160959** Gateway 事件循环阻塞数分钟（大型外部插件捕获，2026.9.6 回归）— `clawsweeper:no-new-fix-pr`
- **#170956** Windows 重启/更新不可靠（schtasks 权限 + 插件关闭不干净）— `no-new-fix-pr`
- **#157325** agent-DB 卡死致全部回复失败，需重启 — `needs-live-repro`
- **#161921** `state-migrated-no-rollback` 后 doctor/plugins 互相依赖，插件卡在旧版本 — `no-new-fix-pr`
- **#167406** Windows MSIX 启用 Codex 插件致主线程饥饿 — 崩溃类
- **#158912** 2026.9.6 起 `MEMORY.md` 不再注入 bootstrap，但文档仍称会加载 — 会话状态 + 安全
- **#185819** Windows 快速上手 Codex 授权完成后激活失败 — `no-new-fix-pr`

### P1
- **#119720** 同步持久化阻塞事件循环（已有部分修复落地，仍有残存）— `fix-shape-clear`
- **#172837** Codex nativeSubagentAssignments 完成后不移除，新父线程反复重发 — `source-repro`
- **#177656** 原生 host exec 返回 shared-state 完整性准入错误（稳定版 2026.10.5 至少 28 次）— `needs-info`
- **#166017** `mcp.sessionIdleTtlMs` 默认值未生效，spawn broker 达 256 上限后所有 exec/MCP 失败 — 已有 `linked-pr-open`
- **#181432** 2026.10.5 基线 RSS 从 ~300 MB 升至 ~1.89 GB + SQLite 事务超时
- **#169797** 单 CPU 主机内存约为 2026.9.4 的 2.5 倍、启动慢 3–5 倍
- **#121953** DeepSeek 上 cron agent turn 因 `[cron:...]` 前缀被降优先级而 stall
- **#181078** 2026.10.5–.8 agent turn 间歇失败 "Canonical session reader continuation is no longer current"
- **#115256** 桌面 App 致 gateway 反复重启（32s–727s）

### P2（体验/数据显示类）
- **#164394** Control UI WebChat 历史滚动时持续微抖动
- **#166133** MCP tool_call 包装器把整数参数强转字符串，破坏整数入参工具
- **#120385** Code Mode 工具目录对 cron/memory-flush turn 构建不完整，MCP 工具缺失
- **#123792** CLI 后端下 assistant turn 渲染两次
- **#143017** prompt-cache 前缀被反复重写（实测 21.3M cache-write tokens）
- **#184658** Windows npm 更新后 missing-module 清理失败
- **#184600** Skill Workshop 未经审查自动变异技能，普通用户难以恢复
- **#177094** 系统通知投递镜像把最后一轮回答挤入折叠工具步骤

**稳定性结论**：P0 项普遍缺 fix PR，且不少是跨版本回归，建议维护者优先收敛 #160959（事件循环）与 #170956（Windows 更新），二者影响面最广。

---

## 6. 功能请求与路线图信号

| 需求 | 状态信号 | 是否可能进下一版本 |
|---|---|---|
| **文件系统沙箱配置** `tools.fileAccess`（#7722，P2，👍4） | `needs-product-decision` + `needs-security-review` | 取决于产品/安全评审，短期难定 |
| **按模型用量日志 / 成本追踪**（#13219，P2） | `linked-pr-open` | 已有 PR 挂接，较可能推进 |
| **TUI 无障碍：禁用 emoji/unicode**（#9637，P2） | `linked-pr-open` | 有 PR，可能纳入 |
| **插件推荐起始提示词**（#186593） | 今日新开 PR，intake:feature | 已进入审阅，方向明确 |
| **知识库跨群组授权**（#186455） | `merge-risk: security-boundary`、`needs proof` | 安全审批是门槛 |

**路线图信号**：v2026.10.8 与 #186557、#186603 共同表明"更新/Doctor/恢复"是当前版本的明确主线；而 #158912（MEMORY.md 不注入）若确认是回归，可能牵动记忆系统的行为契约。文档与实现不一致（#158912、#158912 提到的 /concepts/memory）是需要一并修正的风险点。

---

## 7. 用户反馈摘要

**真实痛点：**
- **"一卡俱卡"**：用户明确报告单个插件/DB 资源问题会拖垮整个 Gateway（#160959、#157325），影响所有人回复。
- **Windows 用户挫败感强**：多名用户描述重启/更新需"多次重试"，schtasks 权限、MSIX、npm 清理问题叠加（#170956、#184658、#185819）。
- **升级的安全性不透明**：#122019 指出 `openclaw update status` 不评估已配置插件兼容性与不可逆迁移风险；#161921 用户实际卡死。
- **后台"静默错误"**：Skill Workshop 自动改技能（#184600）、memory-core dreaming "Ranked N, Promoted 0"（#121232）、WAL 从未 checkpoint（#164294）——用户难以察觉也难以恢复。
- **成本敏感**：#143017 用生产流量实测 cache 写入 21.3M tokens；#13219 要求按模型成本追踪，说明重度用户在意账单。

**使用场景**：Windows Server / 原生 Windows（多台）、Linux ARM64、Docker 沙箱每 agent、systemd / schtasks 托管服务、CLI 后端（claude-cli）、DeepSeek 等第三方 provider、cron 定时任务、MCP 多服务器（约 13 个 stdio MCP/session）。

**满意度信号**：功能面评价多集中在"能力已具备但可靠性不足"；社区通过大量带复现步骤的高质量 Issue（多条 diamond/platinum lobster 评级）体现出较高的参与意愿。

---

## 8. 待处理积压

**长期未响应的高价值 Issue：**
- **#7722** 文件系统沙箱 `tools.fileAccess` — 创建于 2026-02-03，已近 9 个月，👍4，仍在 `needs-product-decision` + `needs-security-review`，是安全能力缺口。链接：openclaw/openclaw Issue #7722
- **#9637** TUI 无障碍（禁用 emoji）— 创建于 2026-02-05，有 `linked-pr-open` 但长期未合。链接：openclaw/openclaw Issue #9637
- **#13219** 按模型成本日志 — 创建于 2026-02-10，`needs-product-decision`。链接：openclaw/openclaw Issue #13219
- **#119720** 同步持久化阻塞事件循环 — 创建于 2026-08-05，历经多次部分修复仍未闭环，P1。链接：openclaw/openclaw Issue #119720
- **#121232** memory-core dreaming ranker 与 applier 永远不一致 — 创建于 2026-08-09，`needs-product-decision`。链接：openclaw/openclaw Issue #121232

**长期开放的待合并 PR：**
- **#165583** `fix(auth): configured primary account blocks CLI fallback` — 创建于 2026-10-05，带三个 merge-risk（compatibility / auth-provider / security-boundary）、`needs proof`、`security-review-required`，是认证回退的重要修复但停滞。链接：openclaw/openclaw PR #165583

**提醒**：待合并 PR 达 294 条，其中多条带 `needs proof` 与安全审批标签，建议维护者按"P0 稳定性 > 更新链路 > 安全边界"排优先级清理，避免修复与新报告同速增长。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-10-28）

> 数据范围：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw 共 13 个项目。所有数字与事实均取自当日各项目日报，未做外部补充。

---

## 1. 生态全景

当日生态呈明显的"头部高负载、中部消化期、尾部静默"三层结构：OpenClaw 以 500 条 Issue + 500 条 PR 的体量单独占据第一梯队，但 P0 稳定性问题（事件循环阻塞、Windows 更新链路）尚未闭环；Hermes Agent、CoPaw、ZeroClaw 处于"大重构合并后消化期"，回归清理速度落后于新增；NanoBot、LobsterAI、Moltis、NanoClaw 以缺陷收敛和发布准备为主；PicoClaw 出现"疑似停止维护、社区另起 fork"的信号，NullClaw / IronClaw / TinyClaw / ZeptoClaw 当日零活动。共性主线清晰：**更新与迁移可靠性、上下文/提示词预算治理、通道（Discord/Slack/Signal/邮件）在真实拓扑下的可用性、成本与状态可观测性**——社区诉求已从"功能有没有"转向"能不能长时间稳定跑"。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃·关闭） | PR 更新（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（385·115） | 500（294·206） | v2026.10.8 | 极高活跃，P0 缺 fix PR，净收敛慢于新增 |
| **CoPaw** | 37（16·21） | 50（34·16） | v2.3.0-beta.1 | 高活跃，Issue 净收敛；多个 XXXL PR 积压 |
| **Hermes Agent** | 50（45·5） | 50（44·6） | 无 | 高活跃，合并吞吐跟不上新增，消化期 |
| **ZeroClaw** | 50（49·1） | 38（37·1） | v0.8.7（安全版） | 输入旺盛、合并吞吐低，评审带宽为瓶颈 |
| **NanoBot** | 2（0·2） | 17（7·10） | 无（0.4.0 准备中） | 稳定性收口，社区讨论信号弱 |
| **LobsterAI** | 1（1·0） | 3（1·2） | 无 | 平稳维护，账号支持工单积压 |
| **NanoClaw** | 0 | 1（1·0） | 无 | 低噪声单点推进 |
| **Moltis** | 0 | 1（1·0） | 无 | 稳定但低活跃，主干零推进 |
| **PicoClaw** | 2（均为 OPEN） | 2（2·0） | 无 | 偏低；零合并零发布 + 维护状态质疑 |
| **NullClaw / IronClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 当日无活动 |

---

## 3. OpenClaw 在生态中的定位

- **规模断层领先**：单日 Issue/PR 各 500 条，是第二梯队（CoPaw、Hermes、ZeroClaw 各 37–50 条）的 10 倍量级；NanoBot、PicoClaw、Moltis、NanoClaw 在个位数区间。OpenClaw 事实上是这一生态的"参照实现"。
- **优势**：问题覆盖面最广——插件捕获、同步持久化、Codex 插件、cron、MCP 多服务器（约 13 个 stdio MCP/session）、Docker 沙箱、systemd/schtasks 托管均有真实生产反馈；社区产出的 Issue 质量高（多条 diamond/platinum lobster 评级、带复现步骤），并已形成 `clawsweeper` 分级治理机制。
- **技术路线差异**：OpenClaw 采用"Gateway 单进程承载全部子系统"的架构，因此单点缺陷（事件循环阻塞 #160959、agent-DB 卡死 #157325）会外溢为全体用户回复失败；这与 Hermes Agent 统一网关（#106742）后出现的同类外溢、CoPaw 正推进的"通道插件化 + 子进程隔离"（#8187）形成对照——**后两者正在用进程隔离解决 OpenClaw 尚未解决的架构性风险**。
- **社区规模对比**：OpenClaw 热点 Issue 评论数达 59 / 35 / 25，Hermes 最高 53（但为上游阻塞类），CoPaw 高讨论 Issue 仅 4–5 条评论且 0 👍，NanoBot 与 Moltis 的评论数多为空缺。**OpenClaw 的讨论深度与参与者密度显著高于同侪**，但代价是积压 294 条待合并 PR、多条带 `needs proof` 与安全审批标签。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **更新 / 迁移链路可靠性** | OpenClaw、Hermes Agent、NanoBot、PicoClaw、ZeroClaw | OpenClaw #161921 doctor/plugins 互相阻塞、#184658 Windows npm 更新清理失败；Hermes #115649 增加脏工作区预检与回滚；NanoBot #6508 移除过时升级向导；ZeroClaw v0.8.7 安全升级需迁移说明 |
| **上下文 / 提示词预算治理** | OpenClaw、CoPaw、ZeroClaw | OpenClaw #143017 cache 前缀重写 21.3M tokens、#164294 WAL 无告警；CoPaw #8312 `CONTEXT UNFIT` 中断、#5856 压缩丢 tool_call；ZeroClaw #11910 提示词上限改 fail-closed、#12044 延迟 bootstrap 段、#12014 硬编码 32,000 拒绝合法轮次 |
| **事件循环 / 主线程阻塞** | OpenClaw、Hermes Agent、PicoClaw | OpenClaw #160959、#119720、#167406；Hermes #144883 事件循环磁盘读触发 liveness 看门狗；PicoClaw #3452 Discord 网关死锁 |
| **通道在真实拓扑下不可用** | PicoClaw、ZeroClaw、NanoClaw、NanoBot、OpenClaw | PicoClaw Discord 永久静默无日志；ZeroClaw #10999 Discord 发布二进制验证 blocked、#11055 通道工具句柄缺失、#11416 Slack 思考状态消失、#11257 WhatsApp 丢失媒体说明；NanoClaw #4218 Proton Mail 原生适配器；NanoBot #6493 Discord 每轮 3–6 次 ping；OpenClaw #185819 Windows Codex 激活失败 |
| **成本与状态可观测性** | OpenClaw、ZeroClaw、CoPaw | OpenClaw #13219 按模型成本日志、#164294 WAL 从未 checkpoint；ZeroClaw #11204 OpenRouter 成本恒为 $0.00（210 万 token）；CoPaw 用户自建插件兜底压缩失败 |
| **MCP 协议与恢复能力** | OpenClaw、CoPaw、ZeroClaw | OpenClaw #166017 spawn broker 达 256 上限；CoPaw #8424 legacy 回退失败（#8047 复发）；ZeroClaw #10807 一次恢复失败即永久中毒、#11872 过期 HTTP 会话重放 |
| **安全边界与审批** | OpenClaw、ZeroClaw、LobsterAI、CoPaw | OpenClaw #7722 `tools.fileAccess` 近 9 个月未决、#184506 会话资源越界；ZeroClaw #10968 未值守轮次审批静默失效（S0）、#11360 包锁权限过宽；LobsterAI #2936 第三方插件触发风控误封；CoPaw #7727 工作区外写入对 kimi-code 失明 |
| **Windows 平台体验洼地** | OpenClaw、Hermes Agent、NanoBot、CoPaw、LobsterAI | OpenClaw #170956/#184658/#185819；Hermes #127261 TMPDIR 被 git-bash 覆盖、#145921 写文件基线；NanoBot #6506 空闲内存泄漏；CoPaw #3281 回复消失；LobsterAI #2947 Computer Use 重复审批 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈个人助手平台（插件、cron、MCP、多 provider、TUI/Control UI） | 重度个人用户、自托管运维者 | 单 Gateway 承载全部子系统，插件能力最广但故障域大 |
| **Hermes Agent** | 统一网关 + 浏览器托管 Desktop Webapp | 桌面 + 第三方客户端集成方 | 已把 CLI/TUI/Desktop/API/cron/机器人收拢进单一进程，回归成本高 |
| **CoPaw** | 插件生态与多通道，含本地模型 | 桌面长会话、Docker 自托管、第三方 runner（kimi-code via ACP） | 正推进通道插件化 + 子进程隔离（#8187）、第三方 Agent 插件化（#8426） |
| **ZeroClaw** | 安全加固的生产部署（Wasm 插件、Firejail 沙箱、声明式 cron、SOP） | 守护进程 + 多通道 + 沙箱的运维型用户 | Rust 技术栈，Wasmtime/Rustls 安全维护，v0.9.0 运行时组合边界 |
| **NanoBot** | WebUI 轻量助手体验 | 长挂机个人用户 | WebUI 触摸交互与流式持久化为当前重点，0.4.0 收口 |
| **LobsterAI** | CoWork 协作 + Computer Use | 桌面协作场景 | 打包多架构隔离、Computer Use 审批复用 |
| **Moltis** | Signal 通道接入 | 隐私通讯用户 | signal-cli SSE 流式解码 |
| **PicoClaw** | 嵌入式 / 老旧 Android 设备 | 存量设备部署者 | 渠道稳定性与低版本 Android 兼容 |
| **NanoClaw** | 原生通道适配器扩展 | 渠道集成分支用户 | 能力下沉至 `channels` 注册表，与 skill/Bridge 容器拆分 |

---

## 6. 社区热度与成熟度

**第一层｜超大规模迭代（问题驱动）**
- **OpenClaw**：处于"能力已具备、可靠性不足"阶段，P0 跨版本回归未闭环，属典型的规模化阵痛期。

**第二层｜快速迭代 + 大重构消化**
- **Hermes Agent**：10 月中旬统一网关与浏览器托管 Webapp 合并后，遗留跟踪（#143547、#144648）仍在推进，P2 新增 4 条仅 2 条当日有 fix PR，会话与网关路径为回归密集区。
- **CoPaw**：Issue 关闭数（21）高于新开（16），呈净收敛；但 34 条待合并 PR 中含多个 XXXL（#7903 已 WIP 38 天、#8187、#8426），评审资源是主要瓶颈。
- **ZeroClaw**：49 条新开 / 1 条关闭，高危与 P1 占比偏高，37 条待合并，合并吞吐显著落后。

**第三层｜质量巩固 / 发布收口**
- **NanoBot**：10 条 PR 关闭全为修复与清理，5 个 Bug 中 4 个已闭环，0.4.0 准备中（#6504），节奏健康。
- **LobsterAI**：2 条工程修复合并，无高危，主要待办是用户支持类工单。
- **Moltis / NanoClaw**：低活跃但无恶化，各 1 条待评审 PR。

**第四层｜维护风险**
- **PicoClaw**：零合并零发布，社区另起 fork 公告（#3417，3 条评论，已持续 20 余天未闭环），维护承诺受质疑。
- **NullClaw / IronClaw / TinyClaw / ZeptoClaw**：当日无活动，无法评估。

---

## 7. 值得关注的趋势信号

1. **"可靠性"已取代"能力"成为主战场。** OpenClaw 用户明确描述"一卡俱卡"（#160959、#157325），ZeroClaw 用户强调"CLI 检查通过但智能体侧不可用"（#11336），CoPaw 用户被迫自写 `keep-context-after-compact-failure` 插件兜底。**对开发者的参考：故障隔离（子进程/插件化）应作为架构前置决策，而非事后补丁。**

2. **提示词与上下文预算正在从"建议值"变为"硬门禁"。** ZeroClaw #11910 将 `max_system_prompt_chars` 改为 fail-closed 并取消无限制默认，CoPaw 多条 Issue 指向压缩链路的系统性脆弱，OpenClaw #143017 实测 21.3M cache-write tokens。**预算治理正在成为与配额、成本并列的一等工程问题。**

3. **"静默错误"是最伤信任的失效形态。** WAL 从未 checkpoint 却无告警（OpenClaw #164294）、Discord 显示已连接但收发全无且无日志（PicoClaw #3452）、成本恒为 $0.00（ZeroClaw #11204）、Skill Workshop 自动改技能难恢复（OpenClaw #184600）。**可观测性不足已被用户间接、反复批评。**

4. **通道是新的兼容性雷区，且直接决定"挂机"体验。** Discord、Slack、WhatsApp、Signal、Proton Mail、Telegram 论坛话题在各项目同时暴露缺陷（PicoClaw、ZeroClaw、NanoClaw、NanoBot、Hermes #145868）。**个人助手的最核心使用模式是"启动—问几句—挂机到第二天"，通道失联即产品失效。**

5. **安全机制误伤正常使用，正在制造负反馈。** Hermes #141960 密钥掩码把 shell 变量引用一并抹掉、CoPaw #7727 工作区外写入对第三方 runner 失明、ZeroClaw #10968 未值守轮次审批静默失效、LobsterAI #2936 第三方插件疑似触发风控误封。**安全的"默认拒绝"必须配合可解释性与误判复核通道。**

6. **平台差异被系统性低估。** Windows 在五个项目中同时成为满意度洼地（OpenClaw、Hermes、NanoBot、CoPaw、LobsterAI），Linux 沙箱（ZeroClaw Firejail 两个 S1）与旧 Android（PicoClaw #3451）各有独立故障面。

7. **外部贡献者带宽是新瓶颈。** OpenClaw 294 条待合并、Hermes 44 条、ZeroClaw 37 条、CoPaw 34 条；ZeroClaw #9900 与他人 PR 重复实现、CoPaw #8034 与 #8312 同域却各自推进。**对维护者的参考：建立"同域问题合并跟踪 + 小型已测修复优先分流"机制，比单纯扩容评审更有效。**

8. **协议协商的复发型缺陷值得警惕。** CoPaw #8424 是 #8047 的变体复发，OpenClaw #166017 与 ZeroClaw #10807/#11872 均指向 MCP 会话恢复。**协议层应做回归用例沉淀，而非逐例修复。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-28

## 1. 今日速览

今日项目活跃度**高**，但全部集中在 PR 层：24 小时内 17 个 PR 更新（7 个待合并、10 个已合并/关闭），Issues 侧仅 2 条且均已关闭，无新开/活跃 Issue，👍 反馈全为 0，外部用户讨论信号偏弱。合并/关闭的 PR 以 WebUI 触摸交互、流式回复持久化、WebSocket 握手异常等稳定性修复为主，另有 `chore(release): prepare 0.4.0`（#6504）仍处于待合并状态，显示 0.4.0 正在收口。0.4.0 发布准备与 Windows 内存泄漏修复形成组合，是今日最值得关注的信号。无新版本发布。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日关闭/合并的 10 个 PR 均为修复类或文档/清理类，未引入新功能面，属于"稳定性收口"阶段：

- **#6507 [CLOSED] fix(runtime): stop Windows identity polling memory leak** — 修复 Windows + Python <3.14 下 ctypes 全局指针缓存导致的进程身份查询内存泄漏，直接对应 Issue #6506；已包含在 0.4.0 候选范围内。
- **#6494 [CLOSED] fix(agent): preserve streamed replies after model failures** — 模型流在终止事件前失败时，不再只持久化错误占位符，避免后续请求看不到已流式输出的文本。
- **#6348 [CLOSED] fix(websocket): abort disconnected HTTP handshakes before sending** — 解决 websockets 15/16 下陈旧响应触发的 `assert not self.eof_sent` 及重复 internal-error 日志。
- **#6500 / #6502 / #6501 [CLOSED]** — 三个 WebUI 交互修复：消息节点替换时保留历史下拉触摸手势、触摸拖拽后 Dock 仍可点击、带行号的代码块保留中文换行。
- **#6508 [CLOSED] chore(skills): remove obsolete update-setup skill** — 移除已过时的升级向导，避免与当前 CLI/WebUI 更新路径形成竞争。
- **#6503 [CLOSED] docs: clarify contribution policy and issue author credit** — 明确当前仅协作者可提交 PR 的政策与 Issue 作者署名方式。

**推进程度评估**：今日进展主要体现为缺陷关闭与技术债清理，而非能力扩张。真正的功能/版本跨越取决于仍待合并的 #6504（0.4.0 发布准备）与多个 OPEN PR（见第 6 节）。

## 4. 社区热点

今日全量数据中评论数字段大多缺失，仅两条 Issue 有明确评论数，热度整体偏低：

- **Issue #6505 [CLOSED]** — 4 条评论，今日讨论最活跃。WebUI 中聊天项目目录只能在空会话时选择，发出第一条消息后目录控件从输入框消失，导致已有会话无法迁移工作目录。链接：HKUDS/nanobot Issue #6505
- **Issue #6506 [CLOSED]** — 2 条评论。Windows 11 上 WebUI 空闲一晚后 Python 进程占用大量内存。链接：HKUDS/nanobot Issue #6506
- **PR #6504 [OPEN] chore(release): prepare 0.4.0** — 0.4.0 发布准备，基于已合并的 main `c758ce8f...`，明确包含 #6507 的 Windows 空闲内存修复；同时注明 Dock 窗口复用 #6377 与 retry 重设计 #6367 仍为独立项，不随本次发布。链接：HKUDS/nanobot PR #6504

**诉求分析**：热点集中在"WebUI 可用性"与"长期运行资源占用"，反映用户已把 NanoBot 当作可长时间挂机的个人助手使用，而非短时试用工具。

## 5. Bug 与稳定性

按严重程度排列：

1. **【高】Windows WebUI 内存泄漏（Issue #6506）** — Windows 11 下 WebUI 启动进程、空闲过夜后内存耗尽；根因定位为 Python <3.14 时 ctypes 全局指针缓存保留 `FileTime` 结构与指针类型，空闲轮询反复触发。**已有 fix PR #6507（已关闭/合并）**，并被纳入 0.4.0 候选。
2. **【中，P1】内联命令异常逃逸（PR #6497，OPEN）** — `/status` 在 `AgentLoop.run()` 内联执行，位于 session worker 异常处理之外，会话加载或运行时解析抛出未处理异常时会直接终止消费者。**fix PR 已提交但尚未合并。** 链接：HKUDS/nanobot PR #6497
3. **【中，P2】模型流失败后回复丢失（#6494）** — 已关闭修复，见第 3 节。
4. **【中，P2】WebSocket 断开握手异常（#6348）** — 已关闭修复，见第 3 节。
5. **【低，P2】WebUI 触摸/换行回归（#6500、#6502、#6501）** — 均已关闭修复。

**健康度判断**：今日报告的 Bug 中 4/5 已闭环，唯一 P1 残留为 #6497，建议优先处理。

## 6. 功能请求与路线图信号

- **WebUI 会话目录可变更（Issue #6505）** — 用户要求允许在已有消息的会话中修改项目目录。该 Issue 已关闭，但数据中未显示对应实现 PR，需确认是否以其他 PR 或文档说明关闭。
- **Discord 步骤更新免打扰（PR #6493，OPEN，P2）** — 开启 `streaming` 后单轮可推送多条中间消息（进度文本、工具提示），普通提问触发 3–6 次通知 ping，答案再 +1。诉求是把中间更新与最终回答的通知行为解耦。链接：HKUDS/nanobot PR #6493
- **`list_sessions` 可选分页（PR #6315，OPEN，P2）** — 增加 offset/limit，保留全量默认与 JSON 数组返回，分页前排除当前会话，Closes #6314。链接：HKUDS/nanobot PR #6315
- **新增 `google-browser-scraper` 作为 web_search provider（PR #6499，OPEN，P2）** — 通过用户自有代理在真实浏览器中执行 Google 搜索，返回 SerpApi 风格 JSON。链接：HKUDS/nanobot PR #6499
- **工具提示渲染移出核心（PR #6498，OPEN）** — 让工具活动只描述"发生了什么"，展示方式交给各渠道决定。链接：HKUDS/nanobot PR #6498

**纳入下一版本的可能性**：#6504 的发布说明已明确把 #6377（Dock 窗口复用）与 #6367（retry 重设计）排除在 0.4.0 之外，上述 OPEN PR 也未被列入 0.4.0 候选，因此更可能落在 0.4.x 或后续版本；#6493 与 #6315 有明确 issue 关联与测试说明，具备较快合入条件。

## 7. 用户反馈摘要

- **真实痛点一：工作目录锁定过早。** 用户 Xiaoyu-hub 指出目录选择器在首条消息后即消失，说明实际使用中会先对话、后才发现需要把会话归入正确项目。
- **真实痛点二：长时间空闲的资源占用。** 用户 snailak 的典型场景是"启动进程—问几个问题—挂机到第二天"，这也是个人助手最核心的使用模式；该问题此前未被覆盖，直到 Windows 专用路径被排查出来。
- **真实痛点三：通知噪音。** Discord 场景下每轮 3–6 次 ping，说明流式中间步骤在移动端渠道体验较差（来自 PR #6493 的问题陈述）。
- **满意度信号**：Issues 无任何 👍，亦无新增活跃 Issue，负面反馈量低；但这也意味着公开社区反馈样本很小，满意度结论不宜过度外推。

## 8. 待处理积压

- **PR #6412 [OPEN] [conflict] refactor(webui): unify code and diff highlighting** — 创建于 2026-10-23，已标记冲突，最后更新 2026-10-27。目标是用共享高亮替换 WebUI 中 Prism 的 code/preview/diff 三条独立路径，并恢复单会话预览布局，属结构性重构，冲突久拖会持续放大合并成本。链接：HKUDS/nanobot PR #6412
- **PR #6315 [OPEN]** — 创建于 2026-10-19，是当前 OPEN PR 中存续最久的一条（分页能力），需维护者给出合入或关闭决定。链接：HKUDS/nanobot PR #6315
- **PR #6497 [OPEN，P1]** — 唯一 P1 级别未合并修复，建议优先于其他 P2 项处理。链接：HKUDS/nanobot PR #6497
- **PR #6504 [OPEN]** — 0.4.0 发布准备，是当前最关键的阻塞项；建议明确其合并条件与剩余检查项。

---

*说明：本日报严格基于所给数据生成。部分 PR 的评论数为空（`undefined`），因此"社区热点"仅按可得的评论数排序；Issue #6505 的解决方案未在数据中体现，相关判断已标注为待确认。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-10-28

> 数据窗口：过去 24 小时。Issues 更新 50 条（新开/活跃 45，关闭 5），PR 更新 50 条（待合并 44，已合并/关闭 6），新版本 0 个。

---

## 1. 今日速览

项目今日处于高活跃、以修复与整合为主的状态：50 条 Issue 与 50 条 PR 同时流转，但仅 5 个 Issue 关闭、6 个 PR 合并/关闭，合并吞吐明显跟不上新增，待合并队列升至 44 条。讨论热度集中在 10 月中旬合并的**统一网关（#106742）**与**浏览器托管 Desktop Webapp（#141864）**两项大型变更的合并后遗留问题，分别由 #143547 与 #144648 两个跟踪 Issue 承载。今日关闭的 Bug 中，#101160（Buzz relay 误判静音为断连）、#144704（Webapp 文件/预览批次）已收敛，另有 #145540 有修复 PR 在途。稳定性方面，P2 级新问题集中在网关会话权威（state.db 符号链接启动失败）、Windows 文件工具写基线、Telegram 论坛话题唤醒投递等路径。整体健康度：**活跃度高、风险中等**，主要风险是大型合并后的回归清理周期拉长、review 带宽承压。

---

## 2. 版本发布

无新版本发布。（今日 Issues 中多处提及产品版本 v0.22.2 / v0.22.4 / v0.22.5 canary，均为存量版本，非今日发布。）

---

## 3. 项目进展

今日合并/关闭 6 条 PR，其中代表性推进：

- **#133748（CLOSED，P0，comp/tui + comp/desktop）** — Desktop 的 regenerate/edit 在会归档多个后续用户轮次前必须先确认，避免误指向的回退静默丢弃会话后续内容；更深的回退需显式确认。此项为会话状态高风险类别修复，已关闭。
  https://github.com/NousResearch/hermes-agent/pull/133748
- **#136572（CLOSED）** — #133748 的后续：Desktop 深层回退在旧后端上仍可工作，刷新后重试的编辑在目标数变化时会再次询问。
  https://github.com/NousResearch/hermes-agent/pull/136572
- **#115649（CLOSED，area/install-update）** — 更新流程增加脏工作区/分叉树预检中止，以及同步后导入冒烟测试与回滚，防止拉取覆盖本地改动。
  https://github.com/NousResearch/hermes-agent/pull/115649
- **Issue #101160（CLOSED）** — Buzz 的 read-idle 看门狗把健康但安静的 relay 每 ~300s 误重连的问题已收敛。
  https://github.com/NousResearch/hermes-agent/issues/101160
- **Issue #144704（CLOSED）** — Webapp 修复包 1（文件、预览、浏览器终端）已关闭；兄弟包 #144705（profiles/登录/纯 HTTP）仍开放。
  https://github.com/NousResearch/hermes-agent/issues/144704

**推进程度评估**：今日关闭集中在会话回退安全与更新流程两条线，属于降低数据丢失风险的高价值修复；但 Webapp 与统一网关两项大变更的遗留清理仅关闭了其中一个子包，整体仍处于"合并后消化期"。

---

## 4. 社区热点

| 条目 | 评论 | 👍 | 看点 |
|---|---|---|---|
| #131859（OPEN，P3，blocked，cause/upstream） | 53 | 0 | 通过 API 创建 PR 报 CreatePullRequest 权限错误，仅影响特定账号；issue 创建与 fork PR 仍可用。高评论量显示多方在复现/排查，且已被标记为上游原因阻塞。 |
| #143547（OPEN，P2） | 25 | 1 | 统一网关 #106742 合并后主分支遗留问题总跟踪，横跨 CLI/TUI/Desktop/API/cron/消息机器人，是当前最重的稳定性主题。 |
| #101160（CLOSED） | 16 | 1 | relay 静音误判断连，今日已关闭。 |
| #144648（OPEN，type/security，P2） | 11 | 0 | 浏览器托管 Desktop 的合并后跟踪，含安全标签。 |
| #49422（OPEN，P3） | 11 | **4** | 请求可自定义 Enter 发送 / Ctrl+Enter 换行，点赞数为今日最高，反映中文输入习惯用户的真实诉求。 |

链接：
- https://github.com/NousResearch/hermes-agent/issues/131859
- https://github.com/NousResearch/hermes-agent/issues/143547
- https://github.com/NousResearch/hermes-agent/issues/101160
- https://github.com/NousResearch/hermes-agent/issues/144648
- https://github.com/NousResearch/hermes-agent/issues/49422

**诉求分析**：讨论重心已从"新功能"转向"大重构的回归成本"——统一网关把 CLI、Desktop、API、cron、消息机器人收拢进单一进程后，任何单点缺陷（事件循环磁盘读、会话权威启动、source 标签校验）都会外溢到多端。与此同时，键盘交互类小需求（#49422）以低评论、高点赞的形态持续累积，属于易实现、高感知的体验项。

---

## 5. Bug 与稳定性

按严重程度排列（均标注是否有 fix PR）：

**P2**
- **#144883** 网关 profile 作用域在事件循环上读 `.env`/`config.yaml`，磁盘读卡顿触发 liveness 看门狗，健康进程以 exit 75 被杀。**无 fix PR（本次数据中未见）。**
  https://github.com/NousResearch/hermes-agent/issues/144883
- **#145847** 网关 `session.create` 拒绝 `source: "desktop"`（返回 4001 invalid_params），尽管网关自身对 GUI 会话存储的标签正是 `desktop`，破坏第三方客户端。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/145847
- **#145891** Desktop：在已被 `/new` 推进的旧消息会话中输入的 prompt 会在更新的会话中执行（上下文丢失），且旧 transcript 的 Restore 被拒绝。版本 v0.22.5 canary。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/145891
- **#141960** `_SECRET_HEADER_RE` 误把 shell 变量引用（`${K}`、`$TOKEN`、`$(…)`）当作密钥值掩码，破坏回显命令。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/141960
- **#127261** `export_scratch_tmp_env()` 导出的 TMPDIR 被 git-bash `/etc/profile` 覆盖，系统提示中"TMPDIR points here"与实际不符（Windows）。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/127261
- **#145347** `hermes completion` 与 `hermes --help` 遗漏所有插件注册的 CLI 命令。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/145347
- **#145917** prompt.submit 深度门限按热历史计数却归档持久后缀；深度截断同意仅为布尔值。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/145917
- **#122135** 手动 `rm -rf` 插件目录后，install-metadata.json 顶层条目残留，导致提示"cannot replace an active plugin"而无法重装。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/122135

**P3**
- **#145868** Telegram 具名论坛话题的异步委派唤醒从未被准入（admission_conflict → 48h 终态丢弃）。**已有 fix PR #145869（route-only 身份准入）。**
  https://github.com/NousResearch/hermes-agent/issues/145868 · https://github.com/NousResearch/hermes-agent/pull/145869
- **#145919** `state.db` 为符号链接时网关启动失败（"session authority database does not belong to the reserved profile"）。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/145919
- **#145883** `computer_use` 工具 schema 硬编码 cua-driver，即使选择了其他 `ComputerUseProvider`。**无 fix PR。**
  https://github.com/NousResearch/hermes-agent/issues/145883

**对应修复 PR（待合并，未关闭）**
- **#145921（P2，Windows）** 修复 `write_file` 对已编辑文件误报"以 offset/limit 分页读取过（部分视图）"而拒绝覆盖。
  https://github.com/NousResearch/hermes-agent/pull/145921
- **#145534（P2）** 被系统生产者中断的重试退避现在记录"谁停止了本轮"。
  https://github.com/NousResearch/hermes-agent/pull/145534
- **#128260（P2）** 流式监控在显示辅助函数失败时仍存活，保持 stale 看门狗处于武装状态。
  https://github.com/NousResearch/hermes-agent/pull/128260
- **#145722（P2）** Discord 提示超时被钳制在 900 秒，已提高至共享平台安全上限。
  https://github.com/NousResearch/hermes-agent/pull/145722

**小结**：今日 P2 新增 4 条、P3 新增 3 条，其中仅 2 条在今日有对应 fix PR；会话与网关路径（#144883、#145847、#145891、#145919）是当前回归密度的中心。

---

## 6. 功能请求与路线图信号

- **#49422** 自定义 Enter 换行 / Ctrl+Enter 发送（P3，11 评论，4 👍）。用户以微信、QQ、飞书为例，指出 Enter 发送极易误触。属高感知、低复杂度交互项，**有较大机会进入后续小版本**。
  https://github.com/NousResearch/hermes-agent/issues/49422
- **#119120** Desktop（Windows）将"最小化到托盘"拆分为独立项：最小化保留任务栏按钮，关闭才进托盘。P3，8 评论。
  https://github.com/NousResearch/hermes-agent/issues/119120
- **#111023（PR，OPEN）** 在文件树与预览栏增加"用系统默认应用打开"。若合并将补齐 Desktop 的文件操作闭环。
  https://github.com/NousResearch/hermes-agent/pull/111023
- **#115670（PR，OPEN）** Desktop 构建在打时间戳前增加 operator post-build 钩子（签名/加固）。面向发行与运维流程，偏向基础设施能力。
  https://github.com/NousResearch/hermes-agent/pull/115670
- **#128763（PR，OPEN）** A2A 适配器补齐 `POST /api/v1/messages/send` REST 发送路由（此前仅有 JSON-RPC）。
  https://github.com/NousResearch/hermes-agent/pull/128763

**判断**：#49422 与 #119120 属低风险 UX 打磨，最可能随下一轮 Desktop 更新纳入；#111023、#128763 已在 PR 队列中，取决于 review 带宽；#115670 涉及构建供应链，落地节奏取决于维护者。

---

## 7. 用户反馈摘要

- **键盘习惯差异是真实痛点**（#49422）：用户明确以国内主流 IM 的自定义发送键作为基准，认为 Enter 发送"极易误触"，并称自定义快捷键是"人性化 UX"。反映桌面端输入区缺少可配置性。
- **第三方客户端与网关契约不一致**（#145847、#144883）：外部客户端按网关自身暴露的 `desktop` source 标签调用却被拒，说明公开 API 与内部常量脱节，伤及集成方信任。
- **Windows 平台体验反复掉队**：#127261（TMPDIR 被 git-bash 覆盖）、#119120（窗口行为）、#145921（写文件基线）三条独立路径同时指向 Windows 环境差异，是当前最集中的满意度洼地。
- **插件生态的可用性摩擦**：#122135（手动清理后无法重装）、#145347（插件命令不出现在 help/completion）、#145540（无头主机上 desktop 半边包不到达）——用户已在主动管理插件目录，说明插件使用深入，但工具链的"脏状态恢复"能力不足。
- **安全/掩码误伤**（#141960）：密钥掩码把 shell 变量引用一并抹掉，导致回显命令被破坏，属于"安全机制伤害正常使用"的典型负反馈。
- **正面信号**：#101160（relay 误重连）与 #144704（Webapp 文件批次）今日关闭，相关提报者的阻塞被解除；#145540 已由 #145549 修复并有 live 验证记录。

---

## 8. 待处理积压

- **#131859**（创建 2026-10-03，53 评论，P3，blocked，cause/upstream）—— 已积压 25 天，标记为上游原因阻塞。虽非本项目可独立解决，但 53 条评论说明影响面广，建议维护者给出明确的上游跟踪结论或替代 workaround，避免讨论持续堆积。
  https://github.com/NousResearch/hermes-agent/issues/131859
- **#49422**（创建 2026-06-20，11 评论，4 👍，P3）—— 积压逾 4 个月且为今日点赞最高条目，长期无实现 PR，建议明确是否纳入路线图。
  https://github.com/NousResearch/hermes-agent/issues/49422
- **#111023**（PR，创建 2026-09-14）、**#113569**（PR，创建 2026-09-16）、**#115670**（PR，创建 2026-09-19）、**#128260**（PR，创建 2026-09-29）—— 多条 9 月中旬起的 PR 至今仍为 OPEN，其中 #128260 对应 P2 流式稳定性、#113569 对应 Windows skill resolver 回退。在 44 条待合并队列下，建议维护者优先分流小型、已含测试的修复型 PR。
  https://github.com/NousResearch/hermes-agent/pull/111023 · https://github.com/NousResearch/hermes-agent/pull/113569 · https://github.com/NousResearch/hermes-agent/pull/115670 · https://github.com/NousResearch/hermes-agent/pull/128260
- **#122135**（创建 2026-09-25，P2）—— 插件元数据残留导致重装失败，存在明确的脏状态复现路径，建议优先安排修复。
  https://github.com/NousResearch/hermes-agent/issues/122135

---

*说明：本日报所有条目、版本号、链接与评论/点赞数据均取自所提供的 GitHub 数据；未在数据中出现的修复 PR 一律标注为"无 fix PR（本次数据中未见）"。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-10-28）

## 1. 今日速览
过去24小时，项目仅有 2 条 Issue 更新和 2 条 PR 更新，均处于活跃/待合并状态，没有版本发布，也没有 PR 被合并或关闭。当日新增工作集中在平台兼容性（Android API 19）和渠道稳定性修复（Discord 网关死锁、Anthropic token 认证）上。值得注意的是，评论最多的 Issue #3417 是社区发起的“该仓库疑似停止维护、另起 fork 继续维护”公告，说明项目维护节奏引发了一定的社区担忧。整体来看，技术工作仍在推进，但库内零合并、零发布是一大信号，活跃度的总体评估为偏低。

## 2. 版本发布
无新版本发布（今日 Releases 为空）。

## 3. 项目进展
今日无已合并或关闭的 PR，项目未出现已落地的功能推进或修复，向前推进幅度为 0。两项待合并 PR（#3447、#3452）均属修复类改动，若后续合入，将分别解决 Anthropic thinking-always 模型的 token 调用失败与 Discord 渠道静默失联两个问题。

## 4. 社区热点
- **Issue #3417 [OPEN] [Notice] Active Fork & Continued Maintenance: afjcjsbx/picoclaw**：有 3 条评论，是今日讨论最活跃的条目。作者声明原仓库“目前看起来无人维护”，同时社区仍有显著兴趣与需求，因此设立并积极维护 fork。该诉求指向社区对持续维护承诺和版本节奏的期待。（sipeed/picoclaw Issue #3417）
- **PR #3452 [OPEN] fix(discord): bump discordgo fork past the gateway handshake deadlock**：当日创建并更新，涉及 Discord 渠道永久“失聪”的严重可用性问题，虽暂无评论，但影响面明显。（sipeed/picoclaw PR #3452）

## 5. Bug 与稳定性
按严重程度排列：
1. **高：Discord 渠道永久静默失联**：机器人仍显示“已连接”，但收发全无、不发送心跳、也无日志，根因为固定版本的 `discordgo` fork 提交存在死锁。状态：已有 fix PR #3452（待合并）。（sipeed/picoclaw PR #3452）
2. **中：Anthropic thinking-always 模型 token 调用 400 失败**：每次基于 token 的 Anthropic 调用返回 `invalid_request_error: "temperature" is deprecated for this model`。状态：已有 fix PR #3447（待合并）。（sipeed/picoclaw PR #3447）

## 6. 功能请求与路线图信号
- **Issue #3451 [OPEN] Add Android API 19 support for x86_32 and x86_64 architectures**：希望将 Android 兼容范围扩展至运行 Android 4.4（API 19）的 x86_32/ x86_64 设备，用例包括众多老旧电视盒子、平板与单板设备。该需求今日新建、无评论、无对应 PR，短期内纳入下一版本的可能性较低，但反映了存量设备部署场景的真实需求。（sipeed/picoclaw Issue #3451）
- 结合已有 PR 看，#3447 与 #3452 均属修复而非新功能，下一版本的候选增量主要体现在模型兼容性与渠道稳定性上。

## 7. 用户反馈摘要
- **维护状态焦虑**：Issue #3417 的提出者表示仓库“看起来无人维护”，同时强调社区“仍有显著兴趣与需求”，这是今日最明确的用户态度信号。（sipeed/picoclaw Issue #3417）
- **老旧 Android 设备部署痛点**：Issue #3451 指出大量旧电视盒子、平板和单板设备运行 Android 4.4（API 19），存在覆盖 x86_32/ x86_64 的兼容诉求。（sipeed/picoclaw Issue #3451）
- **渠道稳定性痛点**：PR #3452 描述 Discord 渠道会“永久静默”，且“无任何日志”，属于难以排查的隐性故障，直接影响日常使用。（sipeed/picoclaw PR #3452）
- **模型接入痛点**：PR #3447 显示 thinking-always 模型在 token 认证路径下必然失败，属于阻断性使用障碍。（sipeed/picoclaw PR #3447）

## 8. 待处理积压
- **Issue #3417**：创建于 2026-10-06，至 2026-10-27 仍有更新，已持续 20 余天未闭环，且直接关联项目维护状态的社区信任问题，建议维护者优先回应。（sipeed/picoclaw Issue #3417）
- **PR #3447**：创建于 2026-10-24，至 2026-10-28 仍处待合并状态（4 天），修复的是明确阻断性 Bug，建议尽快评审。（sipeed/picoclaw PR #3447）
- **PR #3452**：当日新建的待合并修复，需纳入近期评审队列。（sipeed/picoclaw PR #3452）

---

*数据说明：本日报仅依据所给 GitHub 数据生成；PR 评论数字段在原始数据中缺失，故未做评论热度判断。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报（2026-10-28）

## 1. 今日速览

项目今日活跃度**偏低**：过去 24 小时 Issues 更新为 0 条，无新开、无关闭、无活跃讨论；PR 侧仅有 1 条仍处待合并状态的更新。无新版本发布。整体处于"低噪声、单点推进"状态——唯一动态集中在渠道（channels）方向的邮件通道扩展上，短期内没有合并动作，项目向前迈进的增量有限。健康度判断：稳定但推进节奏放缓，需关注积压 PR 的评审周转。

## 2. 版本发布

今日无新版本发布，本节不适用。

## 3. 项目进展

今日**无 PR 被合并或关闭**，因此无明确的代码增量落地。唯一可观察到的进展信号是待合并 PR #4218 在 10-27 有更新（作者 drsmk238），说明该功能仍在评审迭代中，尚未进入主干。

- [PR #4218](https://github.com/nanocoai/nanoclaw/pull/4218) `[OPEN]` feat(channels): add native Proton Mail adapter via Proton Mail Bridge

## 4. 社区热点

今日讨论与互动数据极少。唯一有更新的 PR 为 #4218，但其评论数未提供（显示为 undefined），👍 为 0，无法据此判定讨论热度。

- [PR #4218](https://github.com/nanocoai/nanoclaw/pull/4218)：作者 drsmk238，创建于 2026-10-24，更新于 2026-10-27，标签含 `kind/feature`、`delivery/skill`、`PR: Feature`、`PR: Skill`、`follows-guidelines`、`area/channels`、`area/repository-maintenance`。

**背后诉求分析（基于 PR 摘要）**：该 PR 是 #3726 的"适配器部分"，按评审要求移至 `channels` 注册表分支；#3726 则保留 skill（`/add-proton-mail`）与 Bridge 容器于 `main`。摘要说明其实现为原生 IMAP/SMTP 适配，反映出社区希望把邮件通道以**原生适配器**形式纳入渠道体系，而非依赖 skill 侧承载，体现了"通道能力下沉、职责拆分"的架构诉求。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告（Issues 更新为 0）。无 fix PR。

## 6. 功能请求与路线图信号

今日无新增用户功能请求 Issue。可纳入路线图判断的现有信号为 PR #4218：

- **Proton Mail 原生通道**：该 PR 引入基于 Proton Mail Bridge 的原生 IMAP/SMTP 适配器，并将其放入 `channels` 注册表分支，与 #3726 的 skill/容器部分配合。若评审通过，Proton Mail 有望成为渠道体系的正式成员。当前仍为 OPEN，评论数未知，**是否纳入下一版本尚无数据支撑**，需以实际合并情况为准。

## 7. 用户反馈摘要

今日 Issues 更新为 0，无评论可供提炼用户痛点、使用场景或满意度信息。PR 摘要中仅体现评审层面的结构性反馈（要求将适配器移至 `channels` 注册表分支），不构成终端用户反馈。

## 8. 待处理积压

今日需维护者关注的积压项为 PR #4218：

- [PR #4218](https://github.com/nanocoai/nanoclaw/pull/4218)：创建于 2026-10-24，至 10-27 仍有更新，状态仍为 OPEN。该 PR 与 #3726 存在跨 PR 依赖（适配器部分在 `channels` 分支、skill 与 Bridge 容器在 `main`），建议维护者明确两部分的合并顺序与评审归属，避免长期滞留在待合并状态。

---

**数据说明**：本报告严格基于所提供数据。Issues 更新为 0，PR 评论数缺失（undefined），故未做任何热度或规模推断；#3726 仅在 PR #4218 摘要中被引用，其自身状态未提供。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-10-28）

## 1. 今日速览

项目今日整体活跃度偏低，节奏以维护和修复为主。过去24小时仅 1 条 Issue 更新（新开或活跃 1 条，因此仍处于开放状态），3 条 PR 更新（待合并 1 条，已合并或关闭 2 条），无新版本发布。工程侧推进集中在跨平台打包隔离和 Computer Use 审批逻辑复用，属于稳定性与体验打磨类改动。社区侧唯一热点是一起账号误封申诉，已积累 5 条评论，反映用户对封禁判定透明度的诉求。整体健康度平稳，无崩溃或回归类高危问题报告，但用户支持类工单的处理效率值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭或合并 2 条 PR，均为工程修复类：

- **[CLOSED] PR #2948** `fix(packaging): isolate Mac skill dependencies by target architecture`（作者 liuzhq1986，标签 area: build, platform: macos）
   https://github.com/netease-youdao/LobsterAI/pull/2948
   针对 macOS 打包环节按目标架构隔离 skill 依赖，属于构建正确性修复。若确实合并，将直接改善 Mac 多架构（如 Apple Silicon 与 Intel）分发时的依赖一致性问题，减少安装后 skill 加载失败类故障。
- **[CLOSED] PR #2946** `feat(cowork): collapse large pastes into pasted-text cards`（作者 fisherdaddy，标签 area: renderer, area: main, area: cowork）
   https://github.com/netease-youdao/LobsterAI/pull/2946
   将输入框中的大段粘贴内容折叠为可预览的「粘贴文本」卡片，提交时以带标签块嵌入 prompt；同时适配模型、排队消息、导出、历史、搜索、会话标题与 steer 载荷，并补充 Vitest 单测。这是一项体量较大的协作用户体验改进，涉及渲染层与主进程的多处适配，说明团队在处理长文本输入的可用性问题上已形成端到端方案。

整体看，项目今日在构建可靠性与输入体验两个方向上前进了一步，但无新功能面世，属常规迭代日。

## 4. 社区热点

- **Issue #2936 [OPEN] 账号误封申诉**（作者 7597qqme，创建 2026-10-23，更新 2026-10-27，评论 5 条）
  https://github.com/netease-youdao/LobsterAI/issues/2936
  今日唯一活跃 Issue，也是讨论最集中的条目。用户申诉两个账号被封禁，声明未刷接口、未批量调用，并推测误判可能与本地第三方 DSH 插件有关。5 条评论表明已有维护者或用户参与讨论。背后诉求明确：用户需要的是封禁判定的可解释性，以及对"使用第三方插件是否触发风控"的边界说明。这类支持型工单虽不含技术 Bug，但直接影响付费/活跃用户的留存感知，建议给出明确处理结论。

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归类 Issue。相关修复线索如下：

- **中低严重性（已有 fix PR，待合并）：** PR #2947 `fix(computer-use): reuse approvals for Windows process paths`
  https://github.com/netease-youdao/LobsterAI/pull/2947
  复用 Windows Computer Use 会话审批：当同一可执行文件先后以路径形式启动、再以 `process:<path>` 形式用于窗口操作时，避免重复审批。关联 Refs #2895。该问题本质是审批体验摩擦而非崩溃，但若未修复会造成重复弹窗和流程中断，建议优先合入。

## 6. 功能请求与路线图信号

今日无用户侧新功能请求。结合已有 PR 判断近期路线图信号：

- **大段粘贴内容卡片化（PR #2946）**已关闭并完成端到端适配，预计出现在下一版本中，属于输入体验与协作场景的能力增强。
- **Windows Computer Use 审批复用（PR #2947）**仍在待合并状态，若合入将完善 Windows 端的 Computer Use 自动化流程，是跨平台能力补齐的一部分。
- **macOS 多架构打包隔离（PR #2948）**若被合并，则预示下一版本会提供更可靠的 Mac 分发构建。

上述判断仅基于 PR 状态与描述，不代表官方路线图承诺。

## 7. 用户反馈摘要

今日反馈主要来自 Issue #2936 的申诉讨论：

- **痛点：** 账号被封后无法登录或使用，系统仅提示"封禁或异常"，缺乏具体原因，用户难以自证清白。
- **使用场景：** 用户在本地使用第三方插件（DSH 插件），并怀疑此类外部工具调用可能被风控识别为异常行为。
- **诉求：** 希望获得明确的误判复核渠道，以及对第三方插件兼容性/风控边界的说明。
- **满意度信号：** 该 Issue 已获 5 条评论，说明社区响应尚在；但申诉自 10-23 提出至 10-27 仍在更新，处理周期偏长，是潜在的不满意点。

## 8. 待处理积压

- **PR #2947 [OPEN]** `fix(computer-use): reuse approvals for Windows process paths`
  https://github.com/netease-youdao/LobsterAI/pull/2947
  创建于 2026-10-27，是今日唯一待合并 PR，涉及 Windows 审批体验修复，关联 #2895，建议维护者尽快评审。
- **Issue #2936 [OPEN]** 账号误封申诉
  https://github.com/netease-youdao/LobsterAI/issues/2936
  创建于 2026-10-23，至 10-27 仍在更新，属账号支持类工单，虽非代码问题，但长期悬而未决会影响用户信任，建议给出明确结论或转人工复核通道。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-10-28

> 数据来源：moltis-org/moltis GitHub 仓库。本报告仅基于过去 24 小时提供的 Issues、PR 与 Release 数据，未提供的数据不作推断。

---

## 1. 今日速览

1. 项目今日活跃度**偏低**：过去 24 小时无新版本、无 Issue 更新，仅有 1 条待合并 PR。
2. 唯一动态是 PR #1320（fix(signal)），针对 Signal 事件流的 UTF-8 分块解码缺陷，处于 OPEN 待合并状态。
3. 无合并/关闭的 PR，代码主干今日**零推进**，属于维护间歇期。
4. 社区侧无讨论热度：无 Issues、无评论数据，社区参与信号缺失。
5. 综合判断：项目处于**稳定但低活跃**状态，健康度无恶化迹象，但需关注维护者响应节奏。

---

## 2. 版本发布

今日无新版本发布（新版本数：0），故略去发布说明与迁移事项。

---

## 3. 项目进展

**今日无已合并或已关闭的 PR**，项目代码基线较昨日无变化。

- 待合并 PR #1320 若被合入，将修复 Signal 接入层的流式解码稳定性问题，属于对既有功能（signal-cli SSE 事件流）的健壮性增强，不涉及新功能扩张。项目整体**向前迈进幅度可视为 0（尚未落地）**，预期收益体现在后续信号通道的稳定性上。
- 链接：moltis-org/moltis PR #1320

---

## 4. 社区热点

今日社区互动数据基本空白：

- Issues：0 条，无评论、无反应。
- PR：仅 #1320，评论数为 `undefined`（未提供），👍 为 0，尚无讨论热度。
- 链接：moltis-org/moltis PR #1320

**分析**：当前无任何可识别的社区热点或集中诉求。单条 PR 由作者 fastbytes 于当日创建并更新，属于个人修复型贡献，未形成讨论。建议维护者尽快对 #1320 作出评审回应，避免贡献者等待过久导致参与意愿下降。

---

## 5. Bug 与稳定性

今日无新报告的 Issue 级 Bug/崩溃/回归。唯一与稳定性相关的是 PR #1320 所修复的缺陷，按其摘要可判定如下：

| 严重程度 | 问题 | 影响范围 | 是否有 fix PR |
|---|---|---|---|
| 中（数据完整性 / 静默损坏） | Signal 事件循环在解析前对每个网络分块使用 `String::from_utf8_lossy`，当分块边界切在多字节 UTF-8 字符（如 emoji）中间时，有损解码会破坏内容 | Signal 通道（signal-cli SSE 流）中含有非 ASCII 字符的消息 | 是，PR #1320（OPEN，待合并） |

- 该问题属于**分块边界导致的偶发性内容损坏**，非崩溃类故障，但会造成消息内容失真，隐蔽性较高。
- 链接：moltis-org/moltis PR #1320

---

## 6. 功能请求与路线图信号

今日未收到任何功能请求类 Issue，路线图侧**无新增信号**。

- 唯一 PR #1320 属于缺陷修复而非功能扩展，不构成下一版本的功能候选。
- 无法基于现有数据判断任何需求被纳入下一版本；建议后续补充 Issue 数据后再做路线图评估。

---

## 7. 用户反馈摘要

今日无 Issues 评论数据可供提炼，用户痛点、使用场景与满意度信号**暂缺**。

- 可间接观察到的使用场景：通过 signal-cli 的 SSE 接口接入 Signal 消息流，且实际消息中包含非 ASCII 字符（如 emoji），说明存在真实的中文/表情等多元文本使用环境。
- 除此之外，无可引用的用户反馈，不做推测。

---

## 8. 待处理积压

基于所提供数据，可识别的待处理项如下：

- **PR #1320** [OPEN] fix(signal): decode event stream across chunk boundaries（作者 fastbytes，创建/更新均为 2026-10-28）—— 当日提交，**尚不构成长期积压**，但作为唯一在途变更，建议优先评审并合入。
  链接：moltis-org/moltis PR #1320

- 长期未响应的 Issue 或 PR：**本次数据未提供**，无法识别，故不作列举。建议后续日报补充 open Issue/PR 的历史存量与最久未响应时长，以完整评估积压健康度。

---

**健康度小结**：今日项目无回归、无积压恶化、无破坏性变更，风险可控；主要待办是让 PR #1320 尽快获得评审反馈，以维持外部贡献者的参与节奏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-28

> 数据口径：过去 24 小时 Issues 更新 37 条（新开/活跃 16，已关闭 21）、PR 更新 50 条（待合并 34，已合并/关闭 16）、新版本发布 1 个。以下内容仅基于所给数据，未列明的信息不作推断。

---

## 1. 今日速览

- 项目维持高活跃度：24 小时内 37 条 Issue 更新、50 条 PR 更新，Issue 关闭数（21）高于新开/活跃数（16），积压呈净收敛趋势。
- PR 侧仍以“待合并”为主（34 对 16），且出现多个 `size/XXXL` 的大型重构 PR 持续推进，说明在活跃迭代的同时，合并评审压力正在积累。
- 发布 v2.3.0-beta.1，内容以 bug 修复与小功能增强为主（Console 交互式 HTML 预览、Tavily API Key 可选配置、插件相关修复）。
- 今日关闭的 Issue 覆盖上下文压缩、MCP 协议协商、插件热安装、媒体内容分类等多个长期痛点，稳定性治理成效明显。
- 社区讨论集中在**上下文压缩 / 思考参数兼容性**、**MCP 协议兼容**、**插件与通道架构**三条主线。

---

## 2. 版本发布

### v2.3.0-beta.1（预发布）

发布说明中列出的变更（原文内容被截断，仅列可确认部分）：

| 类型 | 内容 | PR |
|---|---|---|
| fix(console) | 恢复交互式 HTML 预览 | [#8245](https://github.com/agentscope-ai/QwenPaw/pull/8245) |
| feat(tools) | 通过 credential store 支持可选 Tavily API Key（#8174） | [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204) |
| fix(plugin) | 插件相关修复（说明被截断，具体内容不可确认） | — |

- **破坏性变更**：所给材料未提及，无法确认。
- **迁移注意事项**：所给材料未提及，无法确认。建议以正式 Release Note 为准。
- **提示**：该版本为 beta 预发布，说明中的 PR 链接指向仓库 `QwenPaw`，与任务给出的 `CoPaw` 仓库名不一致，建议维护者核对发布流水线与文档命名一致性。

---

## 3. 项目进展

今日合并/关闭的重要 PR：

- **[CLOSED] #8462 `fix(plugins): remove SDK-specific dependency checks and simplify tests`**（size/XXL）
  移除 SDK 专属依赖审计，让 SDK 插件走统一的插件依赖安装流程，避免额外的 SDK 冲突检查在框架正常依赖解析前就拒绝安装。
  👉 https://github.com/agentscope-ai/QwenPaw/pull/8462
- **[CLOSED] #8436 `fix(providers): honor declared thinking disable wire`**（first-time-contributor）
  此前 `disable_thinking=True` 会同时下发两种 OpenAI 兼容的“关闭思考”参数形态，严格端点只认其一，导致压缩摘要失败。该修复直接对应 Issue #8417 的 400 报错场景。
  👉 https://github.com/agentscope-ai/QwenPaw/pull/8436
- **[CLOSED] #8452 `Fix/console browser usability`**（size/XL）
  修复移动端模型入口裁剪、补齐 OS“后台工具策略”设置入口、放大窗口按钮点击区、修正焦点与 Escape 键行为。
  👉 https://github.com/agentscope-ai/QwenPaw/pull/8452
- 随 v2.3.0-beta.1 一并进入的 #8245（Console HTML 预览恢复）与 #8204（Tavily 凭据化配置）。

**整体判断**：今日合并/关闭集中在“体验修复 + 兼容性修复”，属于稳态维护型推进；真正的架构性变化（通道插件化 #8187、第三方 Agent 插件化 #8426）仍在待合并状态，尚未落地。

---

## 4. 社区热点

按评论数排序的高讨论条目：

1. **[CLOSED] #1536 接入模型有办法用 oauth 方式登录 codex 吗**（5 条评论）
   👉 https://github.com/agentscope-ai/QwenPaw/issues/1536
   与 **[CLOSED] #4124 Support OAuth login for OpenAI / Codex**（4 条评论）同属一诉求：
   👉 https://github.com/agentscope-ai/QwenPaw/issues/4124
   **诉求**：用户希望以 OAuth 方式接入 Codex/OpenAI，而非仅靠 API Key。两条同日关闭，暗示该能力已被纳入或已有结论，建议在文档中明确“是否支持、如何配置”。

2. **[CLOSED] #8405 MCP 配置弹窗无法正确关闭**（5 条评论，v2.2.2.post1）
   👉 https://github.com/agentscope-ai/QwenPaw/issues/8405
   **诉求**：http/sse 传输方式下弹窗无法关闭，仅 stdio 正常——MCP 配置 UI 的传输方式分支缺少一致的关闭路径，属于典型的“高频操作路径上的小阻塞”。

3. **[OPEN] #8312 上下文控制失效，导致任务中断**（4 条评论，v2.2.2）
   👉 https://github.com/agentscope-ai/QwenPaw/issues/8312
   **诉求**：`CONTEXT UNFIT` 导致压缩无法把活跃请求塞进模型窗口，任务直接中断。这是当前**仍未关闭**的最高优先级讨论，与 #5856、#8417 共同指向上下文压缩链路的系统性脆弱。

4. **[CLOSED] #7935 LLM `Request timed out` 后永不自动恢复**（4 条评论，v2.2.1）
   👉 https://github.com/agentscope-ai/QwenPaw/issues/7935
   **诉求**：超时后必须手动重启进程，长时运行场景下的可用性硬伤（已标记 Cannot Reproduce 后关闭）。

5. **[CLOSED] #5856 上下文压缩丢失 tool_call 结构导致 400**（4 条评论）
   👉 https://github.com/agentscope-ai/QwenPaw/issues/5856

---

## 5. Bug 与稳定性

按严重程度排列（依据影响面与是否阻断主流程）：

### 严重（阻断任务 / 会话不可用）

| Issue | 描述 | 状态 | 关联 Fix PR |
|---|---|---|---|
| [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312) | 上下文压缩无法适配模型窗口，触发 `CONTEXT UNFIT`，任务中断（v2.2.2） | **OPEN**，4 评论 | 未见直接对应 PR；#8034（按请求限制内联媒体）可缓解同类膨胀问题 |
| [#8290](https://github.com/agentscope-ai/QwenPaw/issues/8290) | 媒体块导致会话永久卡死：“At most 0 video(s)…”“[unsupported_request] text content only” 两种拒绝形态均未被媒体分类器识别 | CLOSED | 与 #8171（音频，仍开放）同族 |
| [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) | 自动记忆搜索开启后同轮重复 `memory_search`，第 4 次被拦截后无法正常回复 | **OPEN** | ✅ [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) `fix(memory): inject automatic recall as reference context` |
| [#8417](https://github.com/agentscope-ai/QwenPaw/issues/8417) | `/compact` 摘要必 400：火山引擎 glm-5.3-flash 不支持 `thinking.type=disabled`，compat 层同时下发两种关思考参数 | CLOSED | ✅ [#8436](https://github.com/agentscope-ai/QwenPaw/pull/8436)（已关闭） |

### 中等（功能失效但有绕行）

- [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) **OPEN** — `server/discover` 返回 404 + JSON-RPC -32601 被当作“现代协议硬失败”，legacy-only MCP 服务器无法回退握手。与已关闭的 #8047（422 纯文本 body 同类问题）构成**同一协议协商缺陷的复发**，建议合并处理。
- [#8265](https://github.com/agentscope-ai/QwenPaw/issues/8265) **OPEN** — 插件热安装在发行版补丁版 Python 3.11 上因 `importlib.invalidate_caches()` 抛错而中止（`loader.py` 三处无条件调用）。
- [#8279](https://github.com/agentscope-ai/QwenPaw/issues/8279) CLOSED — 长驻 ReMe watcher 耗尽 AnyIO 默认线程限制，阻塞同步 HTTP 端点（Docker 部署）。

### 轻微（UI / 展示）

- [#8405](https://github.com/agentscope-ai/QwenPaw/issues/8405) CLOSED — MCP 弹窗在 http/sse 下无法关闭。
- [#2758](https://github.com/agentscope-ai/QwenPaw/issues/2758) CLOSED — 推理与工具调用应显示在最终回复之前（展示顺序颠倒）。
- [#3281](https://github.com/agentscope-ai/QwenPaw/issues/3281) CLOSED — Windows 桌面端回复短暂显示后消失。

### 安全相关

- [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) CLOSED — 工作区外写入硬拦截对 kimi-code 的 Write 工具“失明”，`_paths` 提取未识别 kimi toolCall 路径字段，实测可写出 `/tmp` 探针文件。**建议确认修复已覆盖同类第三方 runner 的路径字段。**

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 判断 |
|---|---|---|
| OAuth 登录 OpenAI / Codex | [#1536](https://github.com/agentscope-ai/QwenPaw/issues/1536)、[#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) | 两条同日关闭 + 讨论度高，**大概率已进入或已定路线图**，建议补文档 |
| Firecrawl 作为第三个 `web_search` provider（作者愿自建自维护） | [#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199) | 零维护成本的外部贡献，且 #8204 刚引入 Tavily 凭据化配置，**provider 插件化方向一致，纳入可能性较高** |
| 可选 PowerContext 长期记忆后端（走 BaseMemoryManager / memory_registry 扩展点） | [#7079](https://github.com/agentscope-ai/QwenPaw/issues/7079) | 契合现有扩展点；同日有 #8457 记忆修复在推进，记忆子系统正处于活跃改造期 |
| 分层（分类）技能目录 `<root>/<category>/<skill>/SKILL.md` | PR [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)（Under Review, size/XL） | 已有实现待评审，向后兼容扁平布局 |
| 本地模型接入原生决策工作流（llama.cpp / Ollama 适配 tool review 与 ReMe 压缩） | PR [#8463](https://github.com/agentscope-ai/QwenPaw/pull/8463) | 今日新开，与 #2839（llama.cpp 部署 qwen3.5 报错）呼应，指向“本地模型一等公民”方向 |

**架构信号**：PR [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)（通道插件化 + 子进程隔离，XXXL）与 [#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)（第三方 Agent 插件化，XXXL）若合并，将显著改变宿主进程的 import 面与故障隔离模型——这是本周期最值得关注的路线图变量。

---

## 7. 用户反馈摘要

**真实痛点**

1. **上下文压缩是当前最大的稳定性负债。** #8312（CONTEXT UNFIT 中断）、#5856（压缩丢 tool_call 结构 → 400）、#8417（压缩摘要必 400）三条独立路径指向同一子系统，用户侧表现为“任务莫名中断”“必须手动重启”。#8417 中用户已自建 `keep-context-after-compact-failure` 插件兜底，说明官方兜底不足。
2. **协议兼容性反复复发。** #8047、#8424 同为 MCP legacy 回退失败，后者是前者的“变体”，用户明确写出 `_negotiate()` 内部逻辑，技术型用户已在替项目做根因定位。
3. **部署环境多样性被低估。** 发行版补丁版 Python 3.11（#8265）、Docker + anyio 4.12.1/starlette 1.7.0（#8279）、Windows 桌面端（#3281、#8455）、macOS arm64 桌面（#7727）——每一类都有独立故障。
4. **本地模型用户被边缘化。** #2839（llama.cpp + qwen3.5 解析失败）与 #8463（本地模型缺决策接口）说明这类用户有明确诉求但在功能面上滞后。

**使用场景**：桌面端长会话、Docker 自托管、第三方 runner（kimi-code via ACP）、MCP 多传输方式接入、本地 llama.cpp/Ollama 部署。

**满意度信号**：0 👍 遍布全部 20 条高评论 Issue，无显式正向反馈样本；但从“用户自写插件兜底”“PR 作者主动认领 provider 实现”看，核心用户粘性与参与意愿较强。

**不满意集中点**：UI 细节（弹窗、按钮、焦点、展示顺序）与大 Bug 混杂上报，说明中小体验问题缺少快速通道。

---

## 8. 待处理积压

**长期开放、需要维护者明确回应的 Issue**

| Issue | 创建 | 已开放 | 说明 |
|---|---|---|---|
| [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312) 上下文控制失效 | 2026-10-18 | 10 天 | 最高优先级，4 条评论但无 fix PR |
| [#8265](https://github.com/agentscope-ai/QwenPaw/issues/8265) 插件热安装中止 | 2026-10-15 | 13 天 | 用户明确表示“我的插件被这个卡了”，阻塞生态贡献 |
| [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) 自动记忆搜索重复调用 | 2026-10-21 | 7 天 | 已有 #8457 修复待合并，建议尽快推进 |
| [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) MCP legacy 回退失败 | 2026-10-26 | 2 天 | 建议与 #8047 合并成一个协议协商跟踪项 |
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) 音频媒体卡死 | — | 材料中标注“仍开放” | 与已关闭的 #8290 同族，**建议同批修复以免再次复发** |

**长期待合并的大型 PR（评审资源瓶颈）**

| PR | 创建 | 已等待 | 规模 |
|---|---|---|---|
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) 社区与 inbox 集成（wip） | 2026-09-20 | 38 天 | XXXL |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) 按请求限制内联媒体 | 2026-09-29 | 29 天 | XL，Under Review |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) 分层技能目录 | 2026-10-11 | 17 天 | XL，Under Review，first-time-contributor |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) 通道插件化 + 子进程隔离 | 2026-10-12 | 16 天 | XXXL |

**提醒**：
- #8034 与 #8312 属同一问题域（请求体膨胀 / 上下文不可控），若能优先评审合并，可同时缓解当前最严重的稳定性问题。
- #7903 已挂 WIP 38 天，建议明确“继续 / 拆分 / 关闭”三选一，避免长期占用社区注意力。
- 两位 first-time-contributor 的 PR（#8436 已关闭合并、#8454 待合并）处理速度良好，建议保持对新贡献者的响应节奏。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报（2026-10-28）

## 1. 今日速览

项目今日维持高活跃度：Issues 更新 50 条（49 条新开/活跃，1 条关闭），PR 更新 38 条（37 条待合并，1 条合并/关闭），并发布安全维护版 v0.8.7。动态以 v0.9.0 里程碑相关的插件系统、运行时安全与通道层缺陷为主，评审队列明显积压。值得注意的信号是：今日重点议题中高危（risk:high）与 P1 缺陷占比偏高，涉及未值守智能体的审批、MCP 会话恢复与 Firejail 沙箱可用性。整体看，社区输入旺盛，但合并吞吐偏低，维护者评审带宽是当前主要瓶颈。

## 2. 版本发布

### v0.8.7（安全与维护版本）

- **定位**：v0.8.6 的安全与维护跟进版本，包含 81 个提交、来自 19 位贡献者。
- **主要内容**：
  - 升级到修补后的 Wasmtime 与 Rustls 证书验证，以及 `tokio`、`ctutils` 版本，用于修复影响 v0.8.6 的安全公告。
  - 使用 C…（发行说明在此处被截断）重新构建容器镜像。
- **破坏性变更**：所给材料中未披露。
- **迁移注意事项**：材料未说明。鉴于其涉及 Wasmtime、Rustls 与依赖公告修复，建议用户优先升级；具体迁移细节需查阅完整发行说明。
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/releases

## 3. 项目进展

今日合并/关闭的 PR 仅 1 条，且所给数据中未列出其标题与内容，故无法评估具体推进项。从整体队列看，项目进展主要体现为**修复类 PR 的密集提交**，尚未进入合并阶段，项目向前推进的幅度有限：

- **上下文窗口语义纠正**：PR #12017 主张“上下文窗口是模型元数据而非运维配置”，直接对应 #12014 中硬编码 32,000 回退容量导致的合法请求被本地拒绝问题。https://github.com/zeroclaw-labs/zeroclaw/pull/12017
- **系统提示词预算治理**：#11910 将 `max_system_prompt_chars` 由建议性改为硬门禁（fail closed）并取消无限制默认；#12070 在每轮技能刷新后重新施加提示词上限；#12056 修正直接路径提示词中身份块的顺序。https://github.com/zeroclaw-labs/zeroclaw/pull/11910
- **MCP 恢复能力**：#12061 针对 #10807 的“一次恢复失败即使连接永久中毒”问题提交修复；#11872 处理过期 HTTP 会话导致的工具调用重放。https://github.com/zeroclaw-labs/zeroclaw/pull/12061
- **较小修复**：#12082 让 `get-paircode` 拉取失败时返回非零退出码；#12080 在 Android 上处理绝对路径 canonicalize 的 EPERM；#12074 在历史裁剪后刷新上下文预算显示；#12079 将文档翻译目录固定到 v0.8.7 对应版本。https://github.com/zeroclaw-labs/zeroclaw/pull/12082

## 4. 社区热点

今日讨论最集中的议题均围绕**插件与通道在真实部署下的可用性**：

1. **#10999 Discord 插件从发布二进制安装的验证**（9 条评论，channel:discord / runtime:wasm / status:blocked）
   已在最终发布的 v0.8.6 归档上验证 Discord 入站投递与出站回复，但仍处于阻塞状态，表明“发布物可用性”仍有未闭环环节。https://github.com/zeroclaw-labs/zeroclaw/issues/10999
2. **#11055 独立通道启动的 SOP 轮次缺少实时通道工具句柄**（8 条评论，priority:p1）
   仅在两个入口之外，通道寻址工具在守护进程部署中不可用，反映通道工具接线架构存在缺口。https://github.com/zeroclaw-labs/zeroclaw/issues/11055
3. **#11416 Slack 线程中“is thinking…”状态自 v0.8.5 起消失**（5 条评论，status:in-progress）
   用户关心的是“智能体是否在工作”的可观测反馈，属体验回归。https://github.com/zeroclaw-labs/zeroclaw/issues/11416
4. **#11204 OpenRouter 花费恒为 $0.00，token 全被归类为“free tok”**（5 条评论，priority:p1）
   约 90 次请求 / 210 万 token 后成本面板仍为零，说明 `usage.cost` 未被采集，直接影响成本治理信任。https://github.com/zeroclaw-labs/zeroclaw/issues/11204

**诉求分析**：热点集中在“发布二进制能否真跑通”“通道工具在真实拓扑下是否可达”“成本与状态是否可信”三类问题上——即用户对**生产可用性与可观测性**的关切高于功能增量。

## 5. Bug 与稳定性

按题目自报严重程度排列：

| 级别 | Issue | 问题 | 是否有 fix PR |
|---|---|---|---|
| S0 | #10968 | 未值守轮次（cron、heartbeat、headless SOP、spawn_subagent）不构建 `ApprovalManager`，风险档位工具审批静默失效 | 未见 |
| S1 | #10807 | 一次失败恢复即使 MCP 连接永久中毒 | 有：#12061（另 #11872 处理过期 HTTP 会话） |
| S1 | #12014 | 自定义 OpenAI 兼容 provider 无 `context_window` 时硬编码 32,000 并本地拒绝合法轮次 | 有：#12017 |
| S1 | #11539 | Firejail 沙箱报 `invalid --nowheel command line option` | 未见 |
| S1 | #11538 | Firejail 沙箱报 `invalid private directory` | 未见 |
| S1 | #11237 | 配置编辑器无法写入声明式 cron 计划（status:in-progress） | 未见 |
| S2 | #11204 | OpenRouter 成本恒为 $0.00，`usage.cost` 未采集 | 未见 |
| S2 | #11332 | 通道、webhook、网关（Web UI）轮次从不运行技能评审与技能创建 | 未见 |
| S2 | #11336 | `plugin info` / `plugin list --verify` 对运行时拒绝注册的插件仍报告 `[loads]` | 未见 |
| S2 | #11257 | WhatsApp Web 丢失入站图片、视频、文档的说明文字 | 未见 |
| S3 | #11416 | Slack 线程中“is thinking…”状态消失（回归） | 未见（已有 in-progress 处理） |
| S3 | #11360 | 包锁文件可被其他本地账户读取，导致安装/删除失败 | 未见 |

**风险提示**：#10968 被标为 S0（数据丢失/安全风险），且属未值守场景，优先级最高但今日未见到对应修复 PR。Firejail 两个 S1 缺陷同时上报（同一作者、同一天），说明 Linux 沙箱路径存在系统性配置问题。

## 6. 功能请求与路线图信号

- **公开运行时组合边界**：#10993 提出完成 #7432 R1 / Phase 2 D1，使智能体运行时能以显式注入能力的方式被嵌入（release:v0.9.0）。https://github.com/zeroclaw-labs/zeroclaw/issues/10993
- **延迟 bootstrap 段**：PR #12044 提出将 AGENTS.md / TOOLS.md 中“按情境需要”的流程性内容改为可寻址、非常驻的知识，以降低每轮上下文开销。https://github.com/zeroclaw-labs/zeroclaw/pull/12044
- **聚焦式工作区（Web）**：PR #11414 在保留 Classic 默认布局的前提下，提供可选（opt-in）的 Focused 布局，属运维体验方向。https://github.com/zeroclaw-labs/zeroclaw/pull/11414
- **仅追加的会话事件历史**：PR #11921 将以带版本的仅追加会话事件作为对话与执行历史的规范来源，使重放可在不重复外部副作用的前提下重建状态（size:XL）。https://github.com/zeroclaw-labs/zeroclaw/pull/11921

**纳入下一版本的可能性判断**：#10993 明确标注 release:v0.9.0，最有望进入下一版本；#12044、#11910、#12056、#12070 构成一组系统提示词预算/结构治理，逻辑上彼此依赖，若被接受宜同批合入；#11921 体量巨大且跨几乎所有组件标签，落地周期预计较长。以上均为基于标签与内容的推断，非官方排期。

## 7. 用户反馈摘要

- **生产可靠性优先**：用户正在把 ZeroClaw 部署为守护进程 + 多通道（Discord、Slack、WhatsApp、Matrix）+ 沙箱（Firejail）形态，痛点集中在“CLI 检查通过但智能体侧不可用”（#11336）与“沙箱直接不可用”（#11538/#11539）。
- **成本与状态可信度受损**：OpenRouter 成本归零（#11204）与 Slack 思考状态消失（#11416）都会削弱用户对面板与运行时状态的信任。
- **技能体系存在观察盲区**：技能放在 `skill_bundles` 中可正常加载，但技能评审 fork 看不到它们（#11333），且通道/Web 轮次根本不触发学习循环（#11332）——用户明确启用了 `skill_improvement` 与 `skill_creation` 却无效果。
- **安全默认值受质疑**：未值守轮次审批静默失效（#10968）与包锁文件权限过宽（#11360）指向“安全机制在非交互路径上不可靠”。
- **正向反馈**：#10999 记录 Discord 真实入站与出站回复已在最终 v0.8.6 归档上完成验证，说明通道能力正被逐项证实。

## 8. 待处理积压

- **#10968（S0，创建于 2026-09-19）**：未值守轮次无 `ApprovalManager`，安全审批静默失效。已持续约 5 周且无 fix PR，建议优先处理。https://github.com/zeroclaw-labs/zeroclaw/issues/10968
- **#10807（S1，创建于 2026-09-12）**：MCP 连接被单次失败恢复永久中毒，已约 6 周；虽已有 #12061，但该 PR 描述仍为模板占位，缺少实质说明，需作者补充。https://github.com/zeroclaw-labs/zeroclaw/issues/10807
- **#9900（PR，创建于 2026-08-10，needs-author-action）**：禁止 Codex 默认端点以非流式重试；与 #12073 处理同一问题，存在重复实现，需维护者裁定其一。https://github.com/zeroclaw-labs/zeroclaw/pull/9900
- **#11910（PR，needs-author-action）**：系统提示词预算 fail-closed 改造，需作者响应后推进，且它是 #12070、#12056 的上游依赖。https://github.com/zeroclaw-labs/zeroclaw/pull/11910
- **#11580（P1，needs-maintainer-review）**：x86_64 Linux 发布二进制距 64 MiB 硬上限仅余约 0.7 MB（约 1%），需维护者确定发布体积门禁策略，否则可能阻塞下一次发布。https://github.com/zeroclaw-labs/zeroclaw/issues/11580
- **#10999（status:blocked）**：Discord 插件安装验证已更新但被阻塞，需解除阻塞条件以闭环发布物可用性验证。https://github.com/zeroclaw-labs/zeroclaw/issues/10999

---
*说明：本报告仅基于所提供的 GitHub 数据生成；发行说明文本存在截断，PR 评论数字段为 `undefined`，相关结论已据此限定。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*