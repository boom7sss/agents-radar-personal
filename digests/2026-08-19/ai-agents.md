# OpenClaw 生态日报 2026-08-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-19 10:56 UTC

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

# OpenClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持高强度运转：共更新 Issues 500 条（新开/活跃 396，关闭 104），PR 500 条（待合并 360，合并/关闭 140），无新版本发布。值得关注的是，**会话状态（session-state）与会话丢失（message-loss）连续多日成为头号问题域**，多只 "diamond lobster" 级高优先级 Issue 集中暴露了 SQLite 转录存储、事件循环阻塞与会话写锁机制的系统性缺陷。PR 侧虽无今日新增合并，但安全策略（install policy 警告确认）、UI 重构、浏览器截图修复等多个高质量补丁已进入可审查状态，项目整体处于"发现-修复"的高频迭代循环中。维护者需警惕 P0/P1 级回归 Issue（如 #108435 Gateway 启动失败）的持续未闭环。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并或关闭。但以下 **已关闭的 Issues** 表明相关修复可能已合入或正在合入过程中：

- **#88838**（P1，已关闭）— 核心会话/转录 SQLite 迁移跟踪。摘要明确指向实现 PR #96625（`refactor: flip sessions and transcripts to sqlite storage`），说明**存储层 SQLite 化迁移主线仍在推进**。
- **#86538**（P1，已关闭）— 会话写锁超时阻塞子代理交付通道。挂有 `clawsweeper:linked-pr-open` 标签，表明已有对应修复 PR 在跟进。
- **#86684**（P1，已关闭）— `sessions_yield` 子代理唤醒在低上下文使用率下压缩父分支的问题，同样挂有 `linked-pr-open`。
- **#86572**（P1，已关闭）— 将 `withOwnedSessionTranscriptWrites` ALS 作用域提升至 `agent.prompt()` 以修复同一通道的竞态问题，有 `linked-pr-open` 关联。
- **#55334**（P1，已关闭）— `sessions.json` 无界增长导致 Gateway OOM，已被标记为可关闭。
- **#84903**（P1，已关闭）— 单个停滞 agent 会话阻塞整个 Gateway 事件循环的隔离失败问题。
- **#46252**（P2，已关闭）— 成本仪表盘未统计 `.jsonl.reset.<timestamp>` 归档文件，严重低估 `/new` 用户的每日花费。

此外，以下 PR 虽未合并，但已处于 **"👀 ready for maintainer look"** 状态，很可能在近期进入合入流程：PR #126290（控制 UI 路由页面浏览器截图 404 修复）、#123535（避免会话目录刷新风暴）、#125944（聊天代码块复制按钮）、#117569（按执行句柄隔离运行快照）、#123975（tsgo 卡死时 typecheck 挂起修复）。

---

## 4. 社区热点

今日讨论最活跃的 Issues 集中在**实时语音、会话存储和消息丢失**三大主题：

### 🥇 Issue #116201 — Realtime voice work 可保留无界 provider 和 consult 状态（60 评论）
[链接](https://github.com/openclaw/openclaw/issues/116201) | 作者: vincentkoc | P1 | 🦞 diamond lobster
  
实时语音会话的资源限制以条目计数或取消信号表达，而非硬所有权边界。在慢速、停滞或突发性的 provider/客户端行为下，该机制可能**无限保留 supersede（被取代的）状态**。60 条评论的高热度表明实时语音功能涉及大量用户，且对资源边界定义存在明显分歧。

### 🥈 Issue #88838 — 会话/转录 SQLite 迁移跟踪（37 评论，已关闭）
[链接](https://github.com/openclaw/openclaw/issues/88838) | 作者: jalehman | P1 | 🌊 off-meta tidepool

虽然已关闭，但作为存储层迁移的核心跟踪 Issue，37 条评论体现了社区对 SQLite 迁移路径的高度关注，尤其是对 3.1b/3.2 栈合并为单一存储翻转线的讨论。

### 🥉 Issue #86538 — 会话写锁超时阻塞子代理交付通道（19 评论，已关闭）
[链接](https://github.com/openclaw/openclaw/issues/86538) | 作者: galiniliev | P1 | 🦞 diamond lobster

会话 JSONL 写锁超时阻塞主通道、cron 嵌套及子代理通道，且缺乏足够错误信息。用户对**错误诊断可见性不足**的抱怨集中体现了可观测性仍是社区焦点。

---

## 5. Bug 与稳定性

按严重程度排列（P0 > P1 > P2），今日活跃的 Bug 类 Issue：

### 🔴 P0 级

- **[#108435] [Bug] update to openclaw 2026.7.1: gateway fails to start w/ error** — `[链接](https://github.com/openclaw/openclaw/issues/108435)` | 作者: leder11011 | 14 评论 | 🦞 diamond lobster | `clawsweeper:source-repro`
  - 升级至 2026.7.1 后 Gateway 在 systemd/ol 环境下无法启动。**P0 + crash-loop + ux-release-blocker** 标签，目前**无关联 fix PR**，属发布阻断级问题。

### 🟠 P1 级（无 fix PR，重点关注）

- **[#112423] Large SQLite transcript cleanup blocks the gateway event loop** — `[链接](https://github.com/openclaw/openclaw/issues/112423)` | 作者: HermanZeng | 16 评论
  - 大型 SQLite 转录归档时执行完整物化+压缩+持久化同步操作，阻塞事件循环。`source-repro` 标签，无 fix PR。
- **[#62505] Coding Agent never completes anything（2026.4.2 回归）** — `[链接](https://github.com/openclaw/openclaw/issues/62505)` | 作者: drpau | 15 评论
  - 持续数月的回归，Coding Agent 完全停止工作。`no-stale` + `regression` 标签，`fix-shape-clear` + `queueable-fix` 表明修复方案已明确但未落地。
- **[#115908] Session transcript projection reconcile 在持续写入下活锁** — `[链接](https://github.com/openclaw/openclaw/issues/115908)` | 作者: CanadaOrNaw | 15 评论
  - 转录投影重建循环不收敛，占用 Node 主线程并阻塞所有通道传输。

### 🟠 P1 级（已有关联修复方向）

- **[#125679] Matrix 频道初始同步无限重启循环（回归，bisected 至 #125302）** — `[链接](https://github.com/openclaw/openclaw/issues/125679)` | 作者: hartmark | 9 评论 | 创建于 2026-08-18
  - 全新账号/房间无法完成初始同步，已被二分定位到 #125302。`clawsweeper-recovery-stuck`，维护者应优先回溯该提交。
- **[#119760] 超时通道停止导致 MCP 子进程舰队泄漏 → 主机内存耗尽** — `[链接](https://github.com/openclaw/openclaw/issues/119760)` | 作者: michaeljgood71 | 7 评论 | 已关闭
  - 2026.6.11 → 2026.7.1-2 回归：每个通道重启周期都会产生一套全新的 MCP stdio 子进程且不回收。`fix-shape-clear`，修复方案已明确。
- **[#97616] 未回收的 hook/tool 子进程导致僵尸进程累积** — `[链接](https://github.com/openclaw/openclaw/issues/97616)` | 作者: avp717 | 8 评论
- **[#99586] 运行时工具表面在 gateway 操作后返回空白 body，容器重启仅短暂缓解** — `[链接](https://github.com/openclaw/openclaw/issues/99586)` | 作者: hobieslr | 8 评论

### 🟡 P2 级

- **[#88657] DeepSeek V4 Flash 不完整回合（2026.5.27/28 回归）** — `[链接](https://github.com/openclaw/openclaw/issues/88657)` | 作者: mikefaierberg-byte | 11 评论
- **[#116512] Telegram 进度模式下快照 ID 变更导致首个评论重复** — `[链接](https://github.com/openclaw/openclaw/issues/116512)` | 作者: Cuttingwater | 9 评论

---

## 6. 功能请求与路线图信号

以下 Issue 代表社区明确的功能诉求，结合已有 PR 判断推进可能性：

| 功能诉求 | Issue | PR 支持 | 判断 |
|---|---|---|---|
| **YAML 配置文件支持**（替代/补充 JSON5） | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 无 | 8 评论，2 👍；DevOps 用户强烈需求，但未见实现迹象 |
| **Per-Agent TTS/STT 配置覆盖**（多语言支持） | [#66252](https://github.com/openclaw/openclaw/issues/66252) | 无 | 多代理单实例场景的合理诉求，暂无实现 |
| **A2A 单向派发模式**（避免 reply-back ping-pong） | [#44309](https://github.com/openclaw/openclaw/issues/44309) | 无 | 8 评论，`needs-product-decision`，需产品决策 |
| **SQLite 转录/会话友好 seams**（供高级消费者使用） | [#79902](https://github.com/openclaw/openclaw/issues/79902) | 与 #96625 方向一致 | 随 SQLite 迁移推进可能自动解决 |
| **WhatsApp 重连后消息回填** | [#50093](https://github.com/openclaw/openclaw/issues/50093) | 无 | 12 评论，消息丢失场景，`needs-product-decision` |
| **Control UI 斜杠命令参数编排** | [#123306](https://github.com/openclaw/openclaw/issues/123306) | PR #123356（composer/UI 阶段） | **很可能进入下一版本**，仅剩命令传递方式的决策待定 |

---

## 7. 用户反馈摘要

从 Issue 评论和描述中提炼的真实用户痛点：

- **"升级即毁灭"风险高**：多位用户反映升级到 2026.7.x 后出现 Gateway 无法启动（#108435）、MCP 进程泄漏导致主机内存耗尽（#119760）等严重问题。**用户对升级路径的安全性存在明显不信任**。
- **回归问题长期得不到解决**：#62505（Coding Agent 完全不工作）自 2026-04-07 提出以来持续数月无修复，用户 drpau 描述为 "now just doesnt do _anything_"，对其工作流产生了直接且持续的影响。
- **事件循环阻塞是最大痛点**：#112423、#115908、#84903、#75782 等多条 Issue 共同指向一个核心问题——**单个会话/任务的停滞可以拖垮整个 Gateway**。用户对会话隔离机制的有效性提出了根本性质疑。
- **可观测性不足**：#86538 用户反馈写锁超时"surface as delivery/lifecycle failures without enough diagnostic info"；手动排查成本高。
- **成本可视化失真**：#46252 指出使用 `/new` 或 `/reset` 后，成本仪表盘严重低估实际花费，影响用户对模型支出预算的掌控。
- **AI 辅助维护需求**：`clawsweeper` 系列标签（needs-maintainer-review、needs-product-decision、source-repro 等）表明项目已引入自动化问题分类和复现辅助流程，但大量 Issue 长期停留在 `needs-product-decision` 状态，产品决策成为瓶颈。

---

## 8. 待处理积压

以下为长期未闭环、但影响面广或严重程度高的重要 Issue / PR：

| 项目 | 创建/更新 | 严重度 | 状态 |
|---|---|---|---|
| **#108435** Gateway 2026.7.1 启动失败（P0） | [链接](https://github.com/openclaw/openclaw/issues/108435) | P0 | 创建 07-15，持续 35 天+，无 fix PR |
| **#62505** Coding Agent 完全不工作（回归） | [链接](https://github.com/openclaw/openclaw/issues/62505) | P1 | 创建 04-07，持续 **134 天**，`queueable-fix` 但未落地 |
| **#50093** WhatsApp 重连消息回填 | [链接](https://github.com/openclaw/openclaw/issues/50093) | P1 | 创建 03-19，持续 153 天，`needs-product-decision` |
| **#38327** google-vertex/gemini 回归"undefined or null" | [链接](https://github.com/openclaw/openclaw/issues/38327) | P1 | 创建 03-06，持续 **166 天**，`needs-live-repro` |
| **#112423** SQLite 清理阻塞事件循环 | [链接](https://github.com/openclaw/openclaw/issues/112423) | P1 | 创建 07-21，26 天无修复进展 |
| **#115908** 转录投影活锁 | [链接](https://github.com/openclaw/openclaw/issues/115908) | P1 | 创建 07-29，`recovery-stuck` |
| **PR #93247** 空闲 ownerless 状态诊断修复 | [链接](https://github.com/openclaw/openclaw/pull/93247) | P1 | 创建 06-15，**65 天**，标记 `stale` + `needs-real-behavior-proof`，等待真实行为证明 |
| **PR #117571** NVIDIA featured 模型目录不可用时的恢复 | [链接](https://github.com/openclaw/openclaw/pull/117571) | P1 | 创建 08-01，18 天，`⏳ waiting on author` |
| **PR #117567** 远程 Gateway 不可用时 skills 命令 fail-closed | [链接](https://github.com/openclaw/openclaw/pull/117567) | P1 | 创建 08-01，18 天，`⏳ waiting on author` |

**给维护者的提醒**：P0 级 #108435 和持续 134 天的 #62505 均为用户直接可见的严重回归，建议优先分配资源；`needs-product-decision` 状态的 Issues 长期积压（#50093、#44309、#66252 等），建议设置定期产品评审机制以疏通瓶颈。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**报告日期：2026-08-19**


## 1. 生态全景

个人 AI 助手 / 自主智能体开源生态正处于**高频迭代与稳定性承压并存的阶段**。核心项目（OpenClaw、Hermes Agent、ZeroClaw、CoPaw 等）日更 Issue/PR 均在 50 条量级，但普遍面临 P0/P1 级回归（升级后 Gateway 启动失败、会话丢失、消息丢失）长期未闭环的困境。**会话状态管理（session-state）是当前生态的头号技术债务**——SQLite 转录存储迁移、写锁机制、事件循环阻塞、多 profile 会话隔离等问题在多个项目中同时涌现。生态的分化日益明显：以 OpenClaw 为代表的核心项目在规模上遥遥领先，新兴项目（NanoClaw、Moltis、IronClaw）则在架构重构（异步化、驱动层抽象、沙箱能力）上更为激进。用户侧的核心诉求集中在可观测性、长任务稳定性、多平台一致体验与数据安全信任。


## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PR（24h） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 396，关闭 104） | 500（待合并 360，合并/关闭 140） | 无 | ⚠️ **高活跃 + 高压**。会话状态/消息丢失成系统性缺陷，P0（#108435 Gateway 启动失败）35 天无 fix PR，Coding Agent 回归 #62505 持续 134 天。 |
| **Hermes Agent** | 50（新开/活跃 46） | 50（待合并约 45，合并/关闭 5） | 无 | ⚠️ **高活跃 + 稳定性承压**。P0：Anthropic-format 缓存兼容性故障（#89886）导致所有工具会话首轮崩溃，暂无 fix PR。桌面端多 profile 会话加载失败（#89675）等 3 个桌面端问题集中爆发。 |
| **CoPaw** | 50（4 新开/活跃，46 关闭） | 50（32 待合并，18 合并/关闭） | 无 | ✅ **稳定迭代**。当日合并 18 个 PR，覆盖稳定性修复与功能增强。但 #2884（用户目录被清空）虽 CLOSED 仍待根因确认，属潜在信任危机。 |
| **ZeroClaw** | 50（32 活跃，18 关闭） | 50（47 待合并，3 合并/关闭） | 无 | ⚠️ **合并消化期**。技术债清理 PR 集中提交（#10122–#10126），P0（#10066 SOP 引擎推进顺序错误）新增无修复。Windows 74 个测试失败（#7462）持续 2 个月。 |
| **NanoClaw** | 1（新增） | 37（23 合并/关闭） | 无 | ✅ **核心团队高强度推进**。数据库异步化重构系列 PR（#3332–#3337）全部合并，含 BREAKING 变更。Issue 侧反馈量少但质量高。 |
| **IronClaw** | 18（6 关闭） | 33（11 合并/关闭） | ✅ **1.3.0-rc.2** | ✅ **高活跃 + 版本推进**。修复 1.2 升级崩溃，性能优化（检查点批处理、租赁围栏缓存）与通知中心 4 连 PR 同步推进。 |
| **Moltis** | 4 关闭 | 7 全部合并 | ✅ **2 个日构建** | ✅ **健康**。Apple Container 后端 3 个修复合并，所有 Bug 闭环。仅 1 个 PR（#1208）待 review。 |
| **PicoClaw** | 6（5 活跃，1 关闭） | 5（2 待合并，3 合并/关闭） | 无 | ✅ **中等活跃**。Anthropic 原生 Messages API 协议（#1158）合并，属 5 个月积压后的重要落地。Web UI（#806）长期需求仍无可见交付物。 |
| **LobsterAI** | 6（全部重激活） | 7（全部合并） | ✅ **2026.8.18** | ⚠️ **PR 强劲，Issue 积压堪忧**。DSH 引擎集成。但 6 条活跃 Issue 全部为 4 月创建的老 Issue（标记 stale 后重激活），高严重度静默失败问题（#1569、#1566）4 个月无 fix PR。 |
| **NanoBot** | 4（全部开启） | 24（15 待合并，9 合并/关闭） | 无 | ✅ **迭代节奏正常偏快**。Dream 游标阻塞（#5441）当日获修复 PR（#5442）。但 #2493（LANGSMITH 集成失效）持续 5 个月无解。 |
| **NullClaw / TinyClaw / ZeptoClaw** | 无活动 | 无活动 | 无 | 💤 休眠 |

**活跃度分层**：第一梯队（OpenClaw、Hermes Agent、CoPaw、ZeroClaw）日更新 50+；第二梯队（NanoClaw、IronClaw、NanoBot）10-40 条但节奏快；第三梯队（Moltis、PicoClaw、LobsterAI）10 条以下；休眠项目 3 个。


## 3. OpenClaw 在生态中的定位

**社区规模**：OpenClaw 日 Issue/PR 更新均在 500 条量级（远超第二位项目的 50 条/日），一骑绝尘。其"diamond lobster"高优先级标签体系、`clawsweeper` 自动化问题分类系统（needs-maintainer-review、source-repro、needs-product-decision 等）表明项目已建立大规模社区的运维基础设施，生态位相当于"AI 智能体领域的 VS Code"。

**技术路线差异**：
- **存储层 SQLite 化**：OpenClaw 正在推进核心会话/转录从 JSONL 向 SQLite 迁移（PR #96625），这一主线已持续多日且引发大量连带问题（写锁阻塞、事件循环冻结、转录投影活锁等），说明其存储架构正在经历根本性重构。类似重构在 NanoClaw（数据库异步化）和 Hermes Agent（多路复用 Gateway 会话恢复）中亦有体现，但 OpenClaw 的规模和波及面最大。
- **事件循环单线程模型 vs 隔离性**：多条 P0/P1 Issue（#112423、#115908、#84903）共同指向一个核心架构问题：单个会话/任务的停滞可拖垮整个 Gateway 事件循环。这一"单点故障"设计在社区引起根本性质疑。
- **升级路径信任危机**：P0 级 #108435（升级 2026.7.1 后 Gateway 无法启动）35 天无修复，#62505（Coding Agent 完全不工作）持续 134 天，叠加用户反馈"升级即毁灭"的普遍情绪，OpenClaw 的发布安全性和回归管理能力正面临社区信任考验。

**优势**：社区规模与生态丰富度（频道适配、工具生态、UI 方案）远超同类；自动化运维体系（clawsweeper 标签体系 + 产品决策分诊）是其他项目不具备的基础设施；存储层 SQLite 化完成后的架构优势值得期待。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话状态管理 / SQLite 存储迁移** | OpenClaw（#88838 SQLite 迁移跟踪、#112423 SQLite 清理阻塞事件循环）、Hermes Agent（#81295 多路复用 Gateway 会话恢复串号）、ZeroClaw（#9600 会话持久化契约归属权） | SQLite 转录存储迁移、会话写锁机制、事件循环阻塞、多 profile/多会话隔离。四个独立工作流同时改动同一契约但无人负责，暴露了大规模项目的治理挑战。 |
| **事件循环阻塞 / 进程隔离失败** | OpenClaw（#112423、#115908、#84903）、CoPaw（#7102 冻结 10 分钟）、LobsterAI（#1569 静默失败） | 单会话/单任务停滞拖垮整个 Gateway/进程。事件循环阻塞、流式响应静默丢失、LLM 流停滞检测缺失。 |
| **升级回归与发布安全** | OpenClaw（#108435 升级后 Gateway 失败、#62505 Coding Agent 回归 134 天）、Hermes Agent（#89886 Anthropic-format 缓存 P0）、LobsterAI（#1561 文件上传回归）、NanoBot（#2493 litellm 移除致 LANGSMITH 断裂） | 用户普遍反映"升级即毁灭"。回归问题长期不修复（#62505 持续 134 天、#2493 持续 5 个月、LobsterAI 老 Issue 4 个月重激活）。发布安全性和回归管理体系（自动化回归测试、已知问题清单）是生态共同短板。 |
| **多平台 / 多通道一致性** | Hermes Agent（桌面端切换失效、macOS 休眠后窗口无响应）、CoPaw（多智能体 Bot 绑定、多客户端互通）、PicoClaw（IRC 512 字节长消息）、NanoBot（Socks 代理、WhatsApp 音频）、ZeroClaw（Windows 74 个测试失败） | 桌面端、Telegram、WhatsApp、IRC、LINE、Mattermost、Discord 等平台的体验一致性与协议适配。Windows 与中文环境（代码页 936）支持不足。 |
| **MCP 子进程泄漏与资源管理** | OpenClaw（#119760 MCP 进程舰队泄漏 OOM、#97616 僵尸进程）、Hermes Agent（#76468 OmniRoute 503 中止多 Agent 轮次）、ZeroClaw（#8642 MCP schema 克隆致 RSS 无界增长） | MCP 子进程生命周期管理、资源回收、schema 克隆导致的内存增长。单 Agent 的异常行为可耗尽宿主机资源。 |
| **可观测性与诊断可见性** | OpenClaw（#86538 写锁超时"表面为交付/生命周期失败且信息不足"、#46252 成本仪表盘失真）、NanoClaw（#3338 WebSocket 失速静默等待 10 分钟）、LobsterAI（#1569 提问后无任何输出）、IronClaw（#7735 可下载运行耗时证据） | 错误信息不足、静默失败无日志、成本统计失真。IronClaw 的"运行耗时证据"（timings 块）与"证据驱动的自动化结果"（#7650）是值得全生态参考的可观测性范式。 |
| **配置项"幽灵化"与诊断误报** | PicoClaw（#3328 webhook_host/port 有文档有默认值但代码从未读取）、Hermes Agent（#85695 注释行被误判为弃用配置） | 配置项有文档无实现、检测逻辑误报，反映配置诊断的精确度问题。 |
| **Web UI / 低门槛入口** | PicoClaw（#806 Web UI 8 👍 持续 6 个月）、CoPaw（#2301 一键更新、/approve 按钮化）、NanoBot（#4282 设置视图文件管理已实现） | 终端用户友好界面是社区对产品易用性的核心期待。 |
| **安全默认值** | ZeroClaw（#9397 WhatsApp 空列表改为 permit-none）、Hermes Agent（#49167 MCP 工具审批门控）、CoPaw（#6847 杀软拦截）、IronClaw（#7732 生产级沙箱 shell） | 默认拒绝 (fail-closed)、工具级审批、沙箱化是安全共识方向。 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手/自主智能体，多渠道（Telegram、Discord、Matrix、WhatsApp 等）+ 实时语音 + 子代理 | 个人开发者、高级用户、大规模社区 | 单体 Gateway + SQLite 存储迁移中 + 单线程事件循环 + clawsweeper 自动化运维 |
| **Hermes Agent** | 多 profile/多路复用 Gateway、桌面端应用（macOS/Windows）、PLAN/BUILD 交互模式、kanban worker | 桌面端重度用户、多 profile/多机器人部署 | 多路复用 Gateway + ACP 协议 + 桌面端插件 SDK 演进 + session-state.db |
| **CoPaw** | 本地部署 + IM 渠道（QQ/微信/Telegram 等）+ 邮件管理助手 + 多智能体愿景 | 中文用户为主，本地/云端双形态 | 沙箱 + IM 集成 + 斜杠命令扩展 + 控制平面（Hub）演进 |
| **ZeroClaw** | 自主智能体（SOP 引擎、工具链、多渠道）+ WASM 插件架构方向 | 关注自主工作流与安全边界的开发者 | SOP 引擎 + WASM 沙箱 + 代理轮转引擎 + Rust 代码质量标准 |
| **NanoClaw** | 轻量级 Claw 生态，Codex 集成 + 运行时驱动抽象（Docker/非 Docker） | 自托管用户、偏好极简部署的开发者 | 数据库异步化重构 + SessionDriver seam + 破坏性变更频繁 |
| **IronClaw** | 企业级自主智能体自动化的可靠性验证（PinchBench 基准）、自动化结果证据化 | 关注自动化可靠性、基准性能的工程团队 | Agent loop 优化 + Reborn 运行时 + 存储解耦 |
| **Moltis** | 多渠道/多后端适配 + 路由优化 | 多渠道部署用户 | OpenAI Responses API 路由 + Apple Container 沙箱后端 |
| **PicoClaw** | 轻量级 Claw 生态、Anthropic 原生协议支持 | 终端用户、Raspberry Pi 等低功耗设备用户 | TUI 优先 + 协议层扩展 |
| **LobsterAI** | IM 渠道 + 定时任务 + 权限审批 + DSH 引擎 | 中文用户、IM 场景重度用户 | DSH 引擎 + 渠道斜杠命令 + SSE 竞态修复 |
| **NanoBot** | 轻量级 Agent、多渠道、WebUI/设置界面、内存 Dream | 轻量部署与 WebUI 偏好用户 | 内存压缩优化 + 代理标准化 + turn observability（WebUI 单回答面） |

**共性识别**：OpenClaw 的"全功能参考实现"定位最为明确；Hermes Agent 是"多 profile 与桌面端"细分场景的领军者；CoPaw 与 LobsterAI 聚焦中文 IM 场景；NanoClaw 在架构现代化（异步化、驱动抽象）上最为激进；IronClaw 则代表"自动化可靠性验证"这一差异化方向。各项目在功能重叠度上偏高（渠道支持、工具调用、会话管理为标配），差异化主要来自部署形态（本地/云端/桌面端）、目标用户（个人/团队/企业）与架构演进路线。


## 6. 社区热度与成熟度

**快速迭代阶段（功能扩张为主）**：
- **CoPaw**：功能增强（邮件管理助手、多项目目录、控制平面）与稳定性修复并重，合并效率高（18 PR/日），社区活跃度高但问题反馈老积压并存。
- **NanoClaw**：核心团队主导的架构演进（数据库异步化、SessionDriver），合并优先（23 PR 合并），Issue 反馈量少但质量高。
- **IronClaw**：版本推进（1.3.0-rc.2）+ 性能优化 + 通知中心子系统搭建，外部贡献者开始进入（Slack 文档修复），呈健康扩张态势。
- **Moltis**：稳定性修复为主，日构建发布频密（2 个版本/日），Bug 闭环率高。

**质量问题阶段（稳定性与治理为主）**：
- **OpenClaw**：社区规模最大但处于"发现-修复"高频迭代循环，P0/P1 回归积压严重（#108435 35 天无 fix、#62505 134 天），自动化运维体系（clawsweeper）在规模压力下已显瓶颈（大量 Issue 长时间停留在 needs-product-decision）。**是生态中 "规模 vs 质量" 张力最突出的项目**。
- **Hermes Agent**：桌面端稳定性问题集中爆发（3 个桌面端 Issue 同日活跃），多 profile 可靠性存疑，但针对固定问题（profile 切换、TTS 重复）的修复 PR 已齐备，处于"问题识别→修复"的密集期。
- **ZeroClaw**：技术债清理期（代码质量标准、unsafe 审计、发布工具链），长期 Issue 消化能力提升（关闭多个老 Issue），但新增 P0（#10066）与长期积压（#7462、#8642）并存。
- **LobsterAI**：PR 合并效率高但 Issue 侧 4 个月无实质进展（6 条老 Issue 被重激活后仍无 fix PR），暴露"合并快、排查慢"的失衡。

**爬坡阶段 / 风险预警**：
- **PicoClaw**：Web UI 长期诉求 6 个月无可见交付物，stale 标记堆积；同时安全相关 PR（#3314 customAllowPatterns 权限绕过风险）16 天未合入。
- **NanoBot**：迭代节奏正常但 #2493（LANGSMITH 失效）5 个月无解，反映 litellm 移除后的迁移路径对用户不友好。
- **休眠项目**：NullClaw、TinyClaw、ZeptoClaw 无活动。

**成熟度综合排序**：OpenClaw（规模领先但治理承压）≈ IronClaw（企业级可靠性验证）> CoPaw（功能+稳定性均衡）> Hermes Agent（多 profile 场景领先但桌面端承压）> ZeroClaw（技术债清理中）> NanoClaw（架构现代化激进但用户反馈匮乏）> Moltis > PicoClaw > LobsterAI > NanoBot。


## 7. 值得关注的趋势信号

**1. 会话状态管理成为生态"头号技术债"（OpenClaw、Hermes Agent、ZeroClaw、NanoClaw 同步涌现）**。SQLite 迁移、写锁机制、多 profile 隔离、事件循环阻塞——四个不同规模的项目在同期遭遇同类问题，说明这是 AI 智能体从原型走向生产环境的必经之坎。启示：**会话状态存储的架构选择（SQLite vs JSONL、同步 vs 异步）直接决定系统的可扩展性与容错性；采用"单写者 + 异步持久化 + 会话级隔离"的架构模式有望显著降低事件循环阻塞风险**。OpenClaw 的 SQLite 迁移虽阵痛期长，但完成后可能成为生态的参考范式。

**2. "升级即毁灭"的信任危机正在蔓延（OpenClaw、Hermes Agent、LobsterAI、NanoBot）**。多项目用户反馈升级后出现 Gateway 启动失败、文件上传回归、Function API 兼容性崩溃等严重问题，且回归问题长期不修复。启示：**发布前自动化回归测试（尤其是跨版本升级路径）与已知问题清单的透明化是重建用户信任的基础；对长期未修复的回归（134 天的 #62505、5 个月的 #2493），维护者应明确标记"已知问题"并给出临时规避方案**。

**3. 可观测性成为用户最迫切的隐性需求（OpenClaw、IronClaw、NanoClaw、LobsterAI）**。用户普遍反映"无错误信息""静默失败""等待 10 分钟无反馈""成本统计失真"。IronClaw 的"运行耗时证据"（timings 块）、NanoBot 的 WebUI turn observability、OpenClaw 社区对"写锁超时诊断信息不足"的抱怨，共同指向一个趋势：**AI 智能体系统需要"可审计性设计"——不仅记录最终答案，还要记录每一步推理耗时、工具调用、错误恢复路径，作为可独立下载的证据**。对开发者而言，在系统设计初始就引入 tracing/证据链机制，将大幅降低后期排查成本。

**4. 安全默认值（fail-closed/permit-none）成为社区共识（ZeroClaw #9397、Hermes Agent #49167、PicoClaw #3314、IronClaw #7732）**。从 WhatsApp 空列表默认拒绝、MCP 工具审批门控、exec allow list 修复到生产级沙箱 shell，安全边界控制从"功能"上升为"默认原则"。启示：**AI 智能体开发者应默认采用最小权限 + fail-closed 模式——宁可功能受限也不可放任风险；对工具调用、文件系统写入等高风险操作，审批流 + 操作预览（如 CoPaw Bash 语法高亮）应作为标配**。

**5. 架构现代化在两极分化（NanoClaw vs OpenClaw）**。NanoClaw 的数据库异步化（BREAKING 变更）+ SessionDriver 驱动抽象代表了"从底层重新设计"的激进路线，而 OpenClaw 的 SQLite 迁移是"渐进替换"。启示：**对新项目而言，异步化、驱动层抽象（将"会话是什么"与"如何运行"解耦）是值得前置的架构决策；对已有大规模社区的项目，渐进式替换 + 兼容层是现实选择，但需警惕兼容层积累导致的长期技术债**。

**6. 自动化运维与 AI 辅助协作进入实践期（OpenClaw clawsweeper、ZeroClaw AI 起草 PR 审核 + 社区审核模式）**。OpenClaw 的 clawsweeper 标签体系（needs-maintainer-review、source-repro、queueable-fix）已证明大规模项目可用；ZeroClaw #9397 的 RFC 采取 AI 起草 + 社区审核模式。启示：**AI 辅助的 Issue 分类、复现辅助、PR 预审将在 1-2 年内成为大型开源项目的标配基础设施，但"产品决策"环节仍是瓶颈（OpenClaw 大量 Issue 长时间停留在 needs-product-decision），需要引入定期产品评审机制疏通**。

**7. Web UI 与低门槛入口是社区持续诉求，但项目响应速度分化**。PicoClaw #806 持续 6 个月仍无可见交付物，而 NanoBot 已实现设置视图文件管理、CoPaw 的模型选择器正在推进。启示：**面向非终端用户的 Web UI 是扩大用户基数的关键杠杆，但需匹配合理的迭代节奏与社区沟通（如阶段性计划同步）以避免"画饼"伤害社区信任**。

---

*报告基于 OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw 共 13 个项目的 2026-08-19 社区动态生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-19

---

## 1. 今日速览

NanoBot 今日整体活跃度较高，主要精力集中在 **WebUI 观测能力增强、Dream 游标推进逻辑修复、以及 SOCKS 代理兼容性** 三条主线上。过去 24 小时产生 4 条新 Issue（全部处于开启状态）、24 条 PR 活动（15 条待合并，9 条已合并/关闭），无新版本发布。值得注意的是，**Dream 游标阻塞问题（#5441）当天即获修复 PR（#5442）**，代理回归问题（#5425）也迎来多个候选修复，但存在方案分歧。社区讨论焦点集中在工具错误恢复后的记忆推进逻辑与代理方案标准化上，整体项目迭代节奏正常偏快。

---

## 3. 项目进展

今日共 9 条 PR 关闭/合并，以下为关键合并内容：

| PR | 主题 | 影响 |
|---|---|---|
| [#5438](https://github.com/HKUDS/nanobot/pull/5438) | fix(webui): Ctrl-C 后即时退出 | 修复 WebUI 退出路径阻塞问题，释放客户端租约，Dev 模式下 Vite 清理正常执行 |
| [#5434](https://github.com/HKUDS/nanobot/pull/5434) | fix(mattermost): 忽略系统消息 | Mattermost 渠道不再将入/退群等系统事件当作用户消息处理，降低误触发 |
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) | fix(skills): weather 工作流 Windows 兼容 | 避免 PowerShell 下 `curl` 别名解析为 `Invoke-WebRequest` 导致的天气命令失败 |
| [#5440](https://github.com/HKUDS/nanobot/pull/5440) | perf(memory): 复用对话前缀做本地压缩 | 内存压缩路径复用模型面 system/history 前缀，减少重复构造开销 |
| [#5435](https://github.com/HKUDS/nanobot/pull/5435) | 支持 legacy socks:// 代理（已关闭） | 修复 #5425 的候选方案，但被标记为 duplicate（见 #5439 方向） |
| [#4282](https://github.com/HKUDS/nanobot/pull/4282) | feat: 设置视图文件管理 | 用户可在 WebUI 设置中直接浏览/管理 Agent 生成的文件，免去登录宿主机手动拷贝 |
| [#4527](https://github.com/HKUDS/nanobot/pull/4527) | feat: 内置 ask_clarification 工具 | Agent 可在信息不足时主动向用户提问澄清，支持类型/选项等参数，短路当前轮次 |

此外 `feat(webui): add turn observability`（#5420）与 `fix(agent): release completed task groups`（#5430）等相关 PR 仍处于待合并状态。

---

## 4. 社区热点

**#2493 — LANGSMITH 集成在最新更新后失效**（[链接](https://github.com/HKUDS/nanobot/issues/2493)）
- 7 条评论、1 👍，创建于 3 月但今日仍有更新，是当前最长寿的活跃 Issue
- 核心诉求：移除 `litellm_provider.py` 后 langchain.com 集成断裂，用户寻求替代方案
- 分析：该 Issue 已持续近 5 个月仍未解决，说明 litellm 移除后的迁移路径对部分用户不够平滑

**#5149 — WhatsApp 无法发送音频消息**（[链接](https://github.com/HKUDS/nanobot/issues/5149)）
- 6 条评论，创建于 7 月底，今日有更新
- 核心诉求：nanoBot 能接收但不能发送 WhatsApp 音频文件，可能涉及媒体上传通道问题

**#5425 — legacy socks:// 代理 URL 导致请求失败**（[链接](https://github.com/HKUDS/nanobot/issues/5425)）
- 创建于 8 月 18 日，1 条评论，24 小时内产生 3 个关联 PR（#5435、#5439、#5442 不相关但同批），反馈速度极快
- 诉求：兼容旧版 `socks://` 前缀的代理配置，避免迁移成本

---

## 5. Bug 与稳定性

按严重程度从高到低排序：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#5441](https://github.com/HKUDS/nanobot/issues/5441) | **Dream 游标永久阻塞**：单次工具错误（如 edit_file 重试成功）导致整个运行被判为"未完成"，`memory/.dream_cursor` 不推进，后续每次 Dream 运行都重复处理同一批历史 | 同日已有修复 PR [#5442](https://github.com/HKUDS/nanobot/pull/5442)：工具错误被模型恢复后仍推进游标，并输出未完成原因 |
| 🟠 中 | [#2493](https://github.com/HKUDS/nanobot/issues/2493) | **回归**：litellm_provider.py 移除后 LANGSMITH 集成失效 | 无修复 PR，已持续 5 个月 |
| 🟠 中 | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 音频消息无法发送（可接收） | 无修复 PR |
| 🟡 低 | [#5425](https://github.com/HKUDS/nanobot/issues/5425) | 自定义 OpenAI 兼容 provider 配 `socks://` 代理时请求未达 provider 即失败 | #5435 已关闭（标 duplicate），[#5439](https://github.com/HKUDS/nanobot/pull/5439) 在审：仅支持标准 `socks5://`，有意不支持 legacy scheme |
| 🟡 低 | [#5434](https://github.com/HKUDS/nanobot/pull/5434) | Mattermost 系统消息被当作用户消息处理 | 已合并 |

---

## 6. 功能请求与路线图信号

**可能进入下一版本：**

- **WebUI 回合观测与安全恢复**（[#5420](https://github.com/HKUDS/nanobot/pull/5420)）：将一次用户回合投射为单一回答面，保留推理/工具/文件编辑的有序活动记录，聚合 provider 用量估算。该 PR 带 `conflict` 标签，需解决冲突后合入
- **WebUI 追问建议**（[#5408](https://github.com/HKUDS/nanobot/pull/5408)）：回合成功后生成聊天上下文的后续追问建议，provider 中立、单请求实现，交互对齐 DeerFlow
- **TUI 暴露 /exit 命令**（[#5443](https://github.com/HKUDS/nanobot/pull/5443)）：在斜杠命令菜单中注册并发现 `/exit`，提升 TUI 可发现性
- **ask_clarification 内置工具**（[#4527](https://github.com/HKUDS/nanobot/pull/4527)）：Agent 可主动提问澄清，已在今日关闭（含 conflict 标签），预计合入后 Agent 交互将更智能

**用户明确提出的新需求：**

- **文件管理进设置视图**（[#4282](https://github.com/HKUDS/nanobot/pull/4282)）：用户不想每次 SSH 登录宿主机拷贝 Agent 生成的文件，该项已实现并关闭

---

## 7. 用户反馈摘要

- **litellm 移除带来的迁移阵痛**（#2493）：用户明确表示"最新更新后 LANGSMITH 不可用，不知道怎么修"，说明平台集成变更需要更清晰的迁移文档或兼容层
- **代理配置兼容性诉求**（#5425）：用户期望"provider 配置或环境变量中的代理 URL 能正常工作"而不关心 scheme 细节，而维护者方案（#5439）刻意只支持标准 `socks5://`，两者存在预期差
- **Dream 用户体验受损**（#5441）："有效提交的内存编辑被拒绝为未完成"，导致每次 Dream 运行重复处理同一批历史，用户对游标推进逻辑的确定性有较高期待
- **音频媒体通道不完整**（#5149）：WhatsApp 场景"能收不能发"，说明媒体上传管线存在半边功能缺失

---

## 8. 待处理积压

| 项目 | 创建时间 | 持续时间 | 说明 |
|---|---|---|---|
| [#2493](https://github.com/HKUDS/nanobot/issues/2493) LANGSMITH 失效 | 2026-03-25 | **~5 个月** | 最长的未解决回归，社区仍有人关注，建议维护者明确 litellm 替代方案或给出迁移指南 |
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) WhatsApp 无音频发送 | 2026-07-28 | 3 周+ | 媒体发送管线缺陷，无关联 PR，建议排查 WhatsApp 媒体上传实现 |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) 持续目标空闲时中止逻辑 | 2026-08-05 | 2 周 | 修复持续目标"接受无终止条件的重复诉求"和空闲回退两个边界问题，仍待合并 |
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) 天气技能 Windows 修复 | 2026-08-11 | 1 周+ | 已关闭（今日），确认合并状态即可 |

---

*日报数据来源：HKUDS/nanobot GitHub 仓库，统计窗口为 2026-08-18 至 2026-08-19。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-08-19**
**数据来源：github.com/nousresearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 项目今日维持高活跃度，过去 24 小时共计 50 条 Issue 与 50 条 PR 更新，新开/活跃 Issue 达 46 条。核心关注点集中在桌面端（Desktop）配置文件切换回归（#89675、#89622、#89586）、Anthropic 格式 API 的 P0 级缓存兼容性故障（#89886）以及 DeepSeek 提供商的 title_generation 兼容问题（#83390）。社区讨论热度集中在 Skills 索引过期告警（#66616，56 条评论）及 Gateway 启动时的误报弃用警告（#85695）。今日无新版本发布，但已有多个针对 P0/P1 问题的修复 PR 提交，整体健康度中等偏上。

---

## 2. 版本发布

过去 24 小时无新版本发布，最新版本仍为 v2026.8.18 及 v0.20.4（具体发布时间以官方 Releases 页为准）。

---

## 3. 项目进展

今日合并/关闭的 PR 共 5 条，其中值得关注的有：

- **[Closed] fix(cli): stop stacked prompt_toolkit status frames (mid-turn chrome + Windows orphans)**（[#87278](https://github.com/NousResearch/hermes-agent/pull/87278)）— 由 iap 提交，修复了 #70031 重新打开的问题，整合了 #71502 与 #73241 的方案并添加了第三种机制，解决 CLI 中 prompt_toolkit 状态帧叠加导致的 Windows 孤儿进程问题。

此外，以下新提交的 PR 虽未合并，但代表了明确的问题定位与修复方向：

- **fix(acp): surface a failed turn instead of reporting it as an answer**（[#89949](https://github.com/NousResearch/hermes-agent/pull/89949)）— 直接对应 Issue #89948，将失败轮次显式报告给 ACP 客户端而非伪装为正常回答。
- **fix(signal): send TTS audio as a native voice note**（[#89951](https://github.com/NousResearch/hermes-agent/pull/89951)）— 修复 Signal 平台 TTS 回复以普通 .ogg 附件发送、无法以语音气泡播放的问题。
- **fix(gateway): stop provider-switch chatter from stealing the reply token**（[#89952](https://github.com/NousResearch/hermes-agent/pull/89952)）— 修复 fallback 模型切换时状态消息占用用户可见对话气泡的问题。

项目整体虽无大版本推进，但在 ACP 错误报告、Signal 集成、CLI 稳定性等多个方面均有针对性的修复动作。

---

## 4. 社区热点

| Issue/PR | 评论数 | 核心诉求 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index is stale or degraded | 56 | Skills Hub 依赖的 `skills-index.json` 已过期 29.8 小时（阈值 26 小时），自动化探针持续告警，社区讨论热度居首，反映对 Skills 索引构建管道的稳定性质疑。 |
| [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) DeepSeek title_generation HTTP 400 | 15（👍 2） | 配置 `auxiliary.title_generation` 且 provider 路由到 DeepSeek 时，返回 `response_format` 不可用的 400 错误，影响多提供商的正常使用。 |
| [#85695](https://github.com/NousResearch/hermes-agent/issues/85695) TERMINAL_CWD 误报弃用警告 | 11（👍 3） | 用户从未设置 `TERMINAL_CWD`，但每次 Gateway 启动均显示弃用警告（环境变量检测逻辑将注释行误判为实际配置），属误报但影响感知体验。 |

| PR | 评论数 | 核心诉求 |
|---|---|---|
| [#81295](https://github.com/NousResearch/hermes-agent/pull/81295) fix(gateway): scope multiplex session recovery | — | 多路复用 Gateway 在多个 profile 共享同一 `state.db` 且 peer tuple 相同时（如 Telegram DM 场景），可能将一个 profile 的会话错误恢复到另一个 profile，需限定恢复范围。 |
| [#88377](https://github.com/NousResearch/hermes-agent/pull/88377) feat(desktop): extract SessionSurface from session tiles | — | 将 SessionSurface 从会话卡片中抽离并导出至 plugin-sdk（#87795 重新打开），Draft 状态，已确认无冲突，推动桌面端插件 API 演进。 |

**趋势判断**：社区讨论高度集中于**会话状态管理（session state）**与**多 profile 共存**场景。多个热门 Issue 与 PR 直接指向桌面端 profile 切换失败、Gateway 会话恢复串号等问题，表明用户对多 profile 工作的可靠性有强烈预期，且当前实现在该场景下存在系统性缺陷。

---

## 5. Bug 与稳定性

### P0（严重）

- **[#89886](https://github.com/NousResearch/hermes-agent/issues/89886) — v2026.8.18: Anthropic-format API 拒绝 cache_control on tool_result.content[]（非重试 400，任何工具使用会话均失败）** — 导致所有涉及工具调用的会话在首轮即崩溃，影响范围极广。**目前暂无已提交的 fix PR。**

### P1（高）

- **[#89675](https://github.com/NousResearch/hermes-agent/issues/89675) — Desktop: 更新后所有 agent profile 均无法加载会话（后端未携带 --profile 启动）** — macOS 桌面端更新后完全不可用。暂无直接 fix PR。
- **[#89622](https://github.com/NousResearch/hermes-agent/issues/89622) — Desktop: Profile 切换失效（已关闭）** — 点击后显示 "waking up" 但实际不切换。今日已关闭，修复方案或已合入。
- **[#89586](https://github.com/NousResearch/hermes-agent/issues/89586) — Desktop: Windows 上 profile 切换静默挂起（已关闭）** — 与 Gateway switch refactor 相关。今日已关闭，修复方案或已合入。
- **[#84423](https://github.comNousResearch/hermes-agent/issues/84423) — 后台审查取消为 fire-and-forget，存在同会话轮次竞态** — 取消操作未等待完成即进入下一轮，可能导致状态竞争。暂无直接 fix PR。

### P2（中）

- **[#89477](https://github.com/NousResearch/hermes-agent/issues/89477) — Gateway 在命名 profile 的独立 Telegram bot 下崩溃/无法轮询** — 多 profile 场景 Telegram 集成不可用。暂无 fix PR。
- **[#80989](https://github.com/NousResearch/hermes-agent/issues/80989) — v0.20.0: terminal/clarify 工具结果被 content-block 结构包裹且偶发返回错误文件内容** — 需复现确认。暂无 fix PR。
- **[#89083](https://github.com/NousResearch/hermes-agent/issues/89083) — Desktop: macOS 休眠/唤醒后聊天窗口永久无响应** — WebSocket 半开连接未被检测，重连逻辑被 `gatewayOpen()` 阻塞。暂无 fix PR。
- **[#89878](https://github.com/NousResearch/hermes-agent/issues/89878) — Windows 下 _schtasks_encoding() 在 Python UTF-8 模式下返回错误编码** — CJK locale 主机上 schtasks 输出解码错误。暂无 fix PR。
- **[#72310](https://github.com/NousResearch/hermes-agent/issues/72310) — Windows WDAC/Device Guard 拦截未签名的 venv/Scripts/hermes.exe** — 安全策略环境下的兼容性问题。暂无 fix PR。
- **[#76468](https://github.com/NousResearch/hermes-agent/issues/76468) — OmniRoute chat_admission_busy 503 中止多 Agent 轮次而非等待容量** — 结构化响应被误判为通用过载。暂无 fix PR。

### P3（低）

- **[#89948](https://github.com/NousResearch/hermes-agent/issues/89948) — ACP: 失败轮次被报告为正常回答** — **已有对应 fix PR #89949**。
- **[#86601](https://github.com/NousResearch/hermes-agent/issues/86601) — Desktop: 自动 TTS 在播放结束后重复朗读同一回复（已关闭）**

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本

- **原生 PLAN/BUILD 交互模式切换与增强版 Agent 委托系统**（[PR #88261](https://github.com/NousResearch/hermes-agent/pull/88261)）— 新增 `Shift+Tab` 切换 PLAN 模式（只读安全）与 BUILD 模式，同时引入增强的 agent 委托系统。标签含 `needs-decision`，涉及 comp/agent、comp/cli、comp/tools、comp/tui、comp/skills 等多个组件，是横切面较大的功能演进。若获批准，将显著重塑交互体验。
- **可休眠的 R0 重试账本试点**（[PR #89943](https://github.com/NousResearch/hermes-agent/pull/89943)）— 为 SessionDB 增加重试账本 schema 与 R0 合成试点原语，含指纹归一化、预算、决策策略等。标签含 `needs-decision`，为会话恢复能力提供基础设施。

### 中概率 / 待决策

- **Kanban 直接命令 Worker**（[PR #89947](https://github.com/NousResearch/hermes-agent/pull/89947)）— 允许命名 profile 通过 `worker.command` 声明固定 argv 作为 kanban worker，支持自定义 pipeline 接入。
- **多路复用 Gateway 设计文档**（[PR #89950](https://github.com/NousResearch/hermes-agent/pull/89950)）— 补齐 `secret_scope.py` 引用的设计文档，作为 fail-closed 安全机制的依据，反映项目对安全边界的重视。

### 用户侧新需求

- **MCP 工具级别审批门控**（[#49167](https://github.com/NousResearch/hermes-agent/issues/49167)，标记 duplicate）— 用户期望将终端命令审批模式扩展至 MCP 工具的外部写入操作，反映对工具安全边界的控制诉求。
- **macOS 桌面端可选替代应用图标**（[#82176](https://github.com/NousResearch/hermes-agent/issues/82176)，标记 duplicate）— 用户希望自定义 Dock/Finder 图标，非默认字符标识。

### 长期未决

- **持久目标在明确报告未完成时应保持活跃**（[#26986](https://github.com/NousResearch/hermes-agent/issues/26986)）— 自 2026-05-16 开放，3 个月未得到明确处理，涉及 persistent goal continuation 的终止条件判断。

---

## 7. 用户反馈摘要

- **多 profile 场景是用户部署的常态，但稳定性不足**：从 [#89675](https://github.com/NousResearch/hermes-agent/issues/89675)、[#89586](https://github.com/NousResearch/hermes-agent/issues/89586)、[#89477](https://github.com/NousResearch/hermes-agent/issues/89477) 三起问题可看出，命名 profile + 独立 Telegram bot、多 profile 切换后会话不加载等场景频繁出现。用户 mykemetzger 描述"更新后任何 profile 的会话均无法加载"，且连接到了"未携带 --profile 参数的远端后端"，说明 profile 标识传递链路存在缺陷。
- **桌面端体验问题突出**：macOS 休眠唤醒后聊天窗口永久无响应（[#89083](https://github.com/NousResearch/hermes-agent/issues/89083)）、TTS 重复朗读（[#86601](https://github.com/NousResearch/hermes-agent/issues/86601)）等均属直接影响日常使用的体验问题。用户 lusc0529-collab 指出"唯一恢复方式是打开新窗口或重启应用"，可用性受损严重。
- **配置弃用警告误报影响信任感**：[#85695](https://github.com/NousResearch/hermes-agent/issues/85695) 中用户从未设置 `TERMINAL_CWD`，但每次启动均收到弃用警告。用户 orlandocalvin 明确指出"唯一的出现是注释行 `# TERMINAL_CWD=.`"，检测逻辑误将环境变量来源与 .env 文件配置混淆，反映了配置诊断的精确度问题。
- **多提供商兼容性仍是痛点**：DeepSeek（[#83390](https://github.com/NousResearch/hermes-agent/issues/83390)）与 Anthropic-format（[#89886](https://github.com/NousResearch/hermes-agent/issues/89886)）的兼容问题说明 provider 适配层仍需加固；[#76468](https://github.com/NousResearch/hermes-agent/issues/76468) 则指向 OmniRoute 的容量等待策略不符合预期。

---

## 8. 待处理积压

### 长期未响应的 Issue

- **[#26986](https://github.com/NousResearch/hermes-agent/issues/26986) — 持久目标在明确报告未完成时应保持活跃**（开放自 2026-05-16，约 3 个月，仅 4 条评论）— 描述明确且复现逻辑清晰（当 assistant 明确说明目标未完成时，persistent goal 不应被终止），建议维护者确认是否纳入路线图。

### 长期未合并的 PR

- **[#61882](https://github.com/NousResearch/hermes-agent/pull/61882) — fix(security): fail closed when terminal config bridge is unavailable**（开放自 2026-07-10，逾一个月）— 安全边界相关修复：冷启动时 terminal 工具调用可能使用过期环境变量（如旧镜像），导致在宿主上静默运行。标签含 `sweeper:risk-security-boundary`，安全影响明确，值得加速审阅。
- **[#76896](https://github.com/NousResearch/hermes-agent/pull/76896) — fix(vision): reject truncated images before embedding**（开放自 2026-08-02）— 图像验证增强，防止截断/损坏的图像进入 tool-result 历史，降低幻觉或错误分析风险。
- **[#74758](https://github.com/NousResearch/hermes-agent/pull/74758) — fix(telegram): retain long bursts across delivery jitter**（开放自 2026-07-30）— Telegram 长文本（>1024 字符）需 1.5 秒静默期以避免抖动导致的拆分，已含回归测试覆盖。

### 特别关注

- **[#81295](https://github.com/NousResearch/hermes-agent/pull/81295) — fix(gateway): scope multiplex session recovery**（开放自 2026-08-07）— 修复多路复用 Gateway 在不同 profile 间错恢复会话的问题（Telegram DM 场景，chat.id 为用户自身 ID，peer tuple 相同），属会话隔离的关键安全修复，建议优先合入。

---

**总结**：Hermes Agent 项目今日处于高活跃但稳定性承压的状态。桌面端多 profile 与会话恢复问题、Anthropic-format 缓存兼容性 P0 故障是当前最紧要的修复目标；社区对多 profile 可靠性的期待显著上升，建议维护团队在下一版本中优先解决会话隔离与状态恢复问题，并补齐多路复用 Gateway 设计文档（PR #89950 已提交）以增强透明度。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-19

---

## 1. 今日速览

PicoClaw 项目今日保持中等活跃度：过去 24 小时内有 6 条 Issue 更新（5 条活跃、1 条关闭）、5 条 PR 更新（3 条合并/关闭、2 条待合并），无新版本发布。值得关注的是 PR #1158（Anthropic 原生 Messages API 协议支持）在提交约 5 个月后终于被合并，是该协议长期积压后的重要落地。同时，Web UI 支持（Issue #806）仍是最热门的长期路线图需求，获得 8 个 👍 和 9 条评论，但重构工作仍在进行中。项目整体健康度良好，但存在少量标记为 stale 的待处理 PR 和 Issue 需维护者关注。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日有 2 个 PR 被合并/关闭，项目有实质性推进：

| PR | 说明 | 状态 |
|---|---|---|
| [#1158 — feat: add anthropic-messages protocol for native Anthropic API format, Fixes #269](https://github.com/sipeed/picoclaw/pull/1158) | 新增 `anthropic-messages` 协议前缀，支持 Anthropic 原生 Messages API 格式（`/v1/messages` 端点）。解决了只支持 Anthropic 原生 API 格式的 LLM 服务无法使用的问题，补齐了此前协议覆盖的空缺。该 PR 提交于 3 月 6 日，历经 5 个多月终于合入，是长期积压功能的一次关键落地。 | ✅ 合并 |
| [#3200 — feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200) | 为 models 页面添加可配置的默认 fallback 链，并支持通过后端 API 持久化。用户在 Web UI 中可设置默认模型及回退顺序，API 与前端已打通。 | ✅ 已关闭 |

此外，PR [#3317 — feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/pull/3317) 也已关闭，它为网关的 LLM 响应调试日志增加了 prompt cache token 记录，对使用 DeepSeek/Cloudflare AI Gateway 等提供缓存指标的服务的用户具有调试价值。

**总体评估**：今日合入的代码主要是协议层扩展和配置能力增强，没有破坏性变更。Anthropic 原生协议的支持将显著扩大可用模型池，是功能覆盖面的重要提升。

---

## 4. 社区热点

**最热 Issue：[#806 — [Feature]: Add webUI support (Refactoring now)](https://github.com/sipeed/picoclaw/issues/806)**

- 评论 9 条，👍 8 个，优先级为 high 并挂在 roadmap 上
- 作者 Zepan 提出：TUI 对终端用户友好，但浏览器界面是最直观的入门方式，建议开发专门的 Web UI 以降低初学者的使用门槛。该 Issue 创建于 2026-02-26，至今持续活跃，说明社区对 Web UI 的呼声长期居高不下。值得注意的是，PR #3200（models fallback chain）即是为 Web UI 服务的，说明 Web UI 开发可能正在分阶段推进中。

**次热 Issue：[#3287 — Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**

- 评论 6 条，创建于 7 月 22 日，今日仍有更新
- 诉求：IRCv3 协议限定单条消息 512 字节，换行即新消息。用户希望 PicoClaw 能识别并聚合超长消息为一条完整语义消息。这反映了 IRC 渠道真实用户在使用 PicoClaw 传输长文本时的切肤之痛。

**趋势分析**：社区当前两大热词是 **Web UI** 和 **多渠道长文本适配**。前者是产品形态层面的诉求，后者是 IRC 协议特性带来的实际使用痛点。

---

## 5. Bug 与稳定性

今日有 4 条 Bug 类 Issue 处于活跃状态，1 条已关闭：

**已修复：**

| Issue | 严重程度 | 说明 |
|---|---|---|
| [#1305 — new banner print to STDOUT, break completion flow（已关闭）](https://github.com/sipeed/picoclaw/issues/1305) | 中 | Banner 输出到 STDOUT 导致 shell 补全流程被破坏，由 PR #1008 引入。今日已关闭，回归问题已解决。 |

**待处理（按严重程度排序）：**

| Issue | 严重程度 | 说明 | Fix PR |
|---|---|---|---|
| [#3339 — Antigravity generation returns generic 429 despite valid OAuth scopes](https://github.com/sipeed/picoclaw/issues/3339) | 高 | Google Antigravity 认证和模型发现均正常，但所有生成请求均返回 429 "Resource has been exhausted"。用户无法区分是配额真正耗尽还是 API 映射问题。8 月 17 日新建，暂无 fix PR。 | 无 |
| [#3301 — /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules](https://github.com/sipeed/picoclaw/issues/3301) | 中 | 通过 dispatch rules 路由到非默认 agent 的聊天中，`/clear` 命令和会话自动压缩均失效。环境：Raspberry Pi，DeepSeek 模型，Discord/Telegram 渠道。 | 无 |
| [#3328 — line.settings.webhook_host / webhook_port are never read](https://github.com/sipeed/picoclaw/issues/3328) | 低 | `webhook_host` 和 `webhook_port` 配置项在结构体中有定义、有默认值、有文档，但代码中没有任何地方读取它们，设置后无效果也无警告。**已有对应 PR**：[#3329](https://github.com/sipeed/picoclaw/pull/3329) 提交了修复方案（改为警告而非静默生效），目前待合并。 | [`#3329`](https://github.com/sipeed/picoclaw/pull/3329) |

**稳定性提示**：Issue #3339 涉及 Google Antigravity 全量请求失败，如影响面较大，建议尽快排查。其他 Bug 均为局部功能问题，暂无崩溃或数据丢失类严重报告。

---

## 6. 功能请求与路线图信号

**今日活跃的功能相关 Issue：**

| Issue | 需求 | 信号强度 |
|---|---|---|
| [#806 — Web UI 支持](https://github.com/sipeed/picoclaw/issues/806) | 开发浏览器端 Web UI，降低入门门槛 | 强 — 8 👍、9 评论、high 优先级、已在 roadmap；PR #3200（fallback chain 持久化）即为 Web UI 铺路，暗示 Web UI 后端 API 正在搭建 |
| [#3287 — IRC 长消息支持](https://github.com/sipeed/picoclaw/issues/3287) | IRCv3 超 512 字节消息应被视为单条完整消息 | 中 — 6 条评论，但无对应 PR，需社区或维护者推动协议层解析改进 |

**与 PR 联动判断：**

- PR [#3329](https://github.com/sipeed/picoclaw/pull/3329) 直接修复 Issue #3328，预计将在近期合入（当前待合并状态）
- PR [#3314 — Fix: agent not able to execute shell command added to customAllowPatterns](https://github.com/sipeed/picoclaw/pull/3314) 目前待合并，修复 `customAllowPatterns` 不生效的 Bug（默认 deny 模式优先级覆盖了用户自定义 allow 规则），如合入将影响所有依赖 exec allow list 做权限控制的用户

**大概率进入下一版本的功能：**
1. Web UI 基础框架（分阶段推进中）
2. LINE 渠道 webhook 配置的行为修正（改为警告提示，PR #3329）
3. Anthropic 原生 Messages API 协议（今日已合入）

---

## 7. 用户反馈摘要

从今日活跃的 Issue 和评论中可以提炼出以下用户真实声音：

- **Web UI 需求迫切**：Issue #806 作者 Zepan 指出，"TUI 对终端用户友好，但浏览器界面是最直观的入门方式"。8 个 👍 和持续的讨论表明 Web UI 不是少数人的诉求，而是社区对产品易用性的核心期待。
- **IRC 长消息是真实工作流痛点**：Issue #3287 用户指出 IRC 512 字节限制意味着 PicoClaw 发送的消息过长的会被截断或拆开，在 IRCv3 下应该支持聚合为单条消息。这是终端用户在日常使用中实际遇到的问题。
- **配置项"幽灵化"引起困惑**：Issue #3328 用户 qing-wang 发现 `webhook_host` 和 `webhook_port` 有默认值、有文档，但代码中从未读取。用户原话："Setting either has no effect, and there is no warning to the user"——这反映了配置项有文档却无实现时对用户的困扰。
- **Google Antigravity 生成全面失败**：Issue #3339 用户报告认证和模型发现都成功但生成全返回 429，用户已经排除了 OAuth scope 问题，需要项目方进一步排查。
- **Dispatch 路由场景下的功能失效**：Issue #3301 用户报告 `/clear` 和会话自动压缩在非默认 agent 路由下失效，说明配置了对多 agent 分发规则的进阶用户正在遭遇一致性体验问题。
- **开发者对新协议合入的期待**：PR #1158 的提交者 hyperwd 在描述中明确写道"解决了只支持 Anthropic 原生 API 格式的服务无法使用的问题"，此类真实痛点驱动的 PR 通常有较高的社区价值。

---

## 8. 待处理积压

以下 Issue/PR 活跃度低或长期未合入，需要维护者关注：

| 项目 | 状态 | 积压时长 | 说明 |
|---|---|---|---|
| [#806 — Web UI 支持](https://github.com/sipeed/picoclaw/issues/806) | OPEN，high 优先级 | 约 6 个月（2026-02-26 创建） | 社区呼声最高的单一功能请求，已标记 roadmap 且声称正在重构，但长期无可见交付物，建议维护者周期性同步进展以避免社区失望 |
| [#3314 — customAllowPatterns 修复](https://github.com/sipeed/picoclaw/pull/3314) | OPEN，待合并，标记 stale | 16 天（2026-08-03 创建） | 修复安全相关功能（exec allow list 失效），涉及权限控制，长时间不合并可能导致用户暴露在权限绕过风险中。已 stale 标记，建议尽快 Co-maintainer review |
| [#3329 — webhook_host 配置修复](https://github.com/sipeed/picoclaw/pull/3329) | OPEN，待合并，标记 stale | 8 天（2026-08-11 创建） | 直接修复 #3328，改动小、价值明确，但已被标记 stale，建议尽快合入防止继续积压 |
| [#3287 — IRC 长消息支持](https://github.com/sipeed/picoclaw/issues/3287) | OPEN | 约 1 个月（2026-07-22 创建） | 6 条评论的热门 Issue，但无任何 PR 或维护者响应记录，需确认是否已纳入规划 |
| [#3301 — dispatch rules 下 /clear 失效](https://github.com/sipeed/picoclaw/issues/3301) | OPEN，标记 stale | 约 3 周（2026-07-29 创建） | 已 stale 但无 fix PR，涉及非默认 agent 路由的会话管理缺陷，对多 agent 用户影响面较大 |

**维护者行动建议**：

1. **优先处理** PR #3314（权限相关 Bug 修复）和 PR #3329（小改动快修）
2. 对 #806（Web UI）建立阶段性计划并向社区同步进度，避免长期"画饼"
3. 清理 stale 标记：要么明确时间表，要么关闭/标记 wontfix

---

*本日报基于 PicoClaw GitHub 仓库 2026-08-19 当日数据生成。所有链接均指向 sipeed/picoclaw 仓库对应 Issue/PR。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

NanoClaw 今日活跃度较高，过去 24 小时内有 37 条 PR 更新，其中 23 条已合并/关闭，显示出核心团队持续高强度推进。数据库层正在经历一轮大规模异步重构（涉及 #3319、#3332-#3337 等多条连锁 PR），并新增了会话运行时驱动层（`SessionDriver` seam，PR #3306 系列），架构演进方向明确。Issues 侧仅 1 条新增，为 Codex WebSocket 空闲重试被上层 10 分钟超时遮蔽的问题，反馈质量高但量少。无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 主要集中在两个方向：**数据库层异步化重构**与**会话运行时驱动抽象**。

**数据库异步化重构（核心团队，已全部合并）**

| PR | 内容 | 说明 |
|---|---|---|
| [#3332](https://github.com/nanocoai/nanoclaw/pull/3332) | 为中央数据库引入可移植驱动层做准备 | 重构基础 |
| [#3333](https://github.com/nanocoai/nanoclaw/pull/3333) | 新增异步中央数据库 seam | 逐步迁移 |
| [#3334](https://github.com/nanocoai/nanoclaw/pull/3334) | [BREAKING] 安全采用异步中央数据库 | 破坏性变更 |
| [#3335](https://github.com/nanocoai/nanoclaw/pull/3335) | 后端组合 + 可移植测试 | 测试基础设施 |
| [#3337](https://github.com/nanocoai/nanoclaw/pull/3337) | 修复 codex 模块等待中央数据库操作 | 配套修复 |
| [#3319](https://github.com/nanocoai/nanoclaw/pull/3319) | 修复 channels 模块等待中央数据库操作 | 配套修复 |

其中 [#3334](https://github.com/nanocoai/nanoclaw/pull/3334) 标记为破坏性变更（BREAKING），采用异步中央数据库意味着调用方需适配异步 API，这是从同步数据库访问向完全异步化迁移的关键一步。

**会话运行时驱动抽象（核心团队，已合并）**

- [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) — 新增 `src/drivers/`，建立"会话是什么"与"如何运行"之间的 seam，以内置 Docker 实现为起点。纯增量变更，无调用点修改。
- [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) — 宿主（host）的会话生命周期（创建、收养、监督、停止、重启/重建）全部改经 `SessionDriver` seam 路由。
- [#3308](https://github.com/nanocoai/nanoclaw/pull/3308) — 数据安全加固：拒绝在已存在的未清理文件夹上创建新的 agent group，防止数据丢失。

**其他合并：**
- [#3346](https://github.com/nanocoai/nanoclaw/pull/3346) — 修复 opencode 恢复会话空闲无工作时不恢复的问题。
- [#3348](https://github.com/nanocoai/nanoclaw/pull/3348) — CI 更新：将 zvi-fried 加入核心团队 roster。

**整体评估：** 数据库异步化系列 PR 从 #3332 到 #3337 呈现清晰的渐进式重构路径（seam → 异步化 → 消费方适配 → 测试），显示核心团队对大规模重构有良好规划。驱动层抽象为未来支持非 Docker 运行时（如本地进程）铺路。

## 4. 社区热点

今日 Issue/PR 评论量整体偏低（评论数显示为 undefined 或 2），社区讨论热度一般。最受关注的是新开的 Issue [#3338](https://github.com/nanocoai/nanoclaw/issues/3338)（2 条评论），涉及 Codex WebSocket 空闲重试机制在 NanoClaw 10 分钟轮询超时下不可见的问题。该问题触及自托管 Codex 集成场景下的可靠性痛点，值得核心团队关注。

## 5. Bug 与稳定性

**中等严重度：**

- **Codex WebSocket 空闲超时遮蔽**（[Issue #3338](https://github.com/nanocoai/nanoclaw/issues/3338)）— 当 Codex Responses WebSocket 失速时，简单 Telegram 请求可能静默等待 10 分钟。Codex CLI 自身有 5 分钟 WebSocket 空闲超时并内部重试，但 `codex app-server` 不具备此行为。**尚无 fix PR**。影响 Telegram 等渠道的响应实时性与用户体验。

**其他稳定性提升（已合并）：**

- [#3346](https://github.com/nanocoai/nanoclaw/pull/3346) — opencode 恢复会话空闲无工作时挂起问题，已修复。
- [#3308](https://github.com/nanocoai/nanoclaw/pull/3308) — 防止 group 创建覆盖未清理文件夹导致的数据丢失，已修复。

## 6. 功能请求与路线图信号

- **会话运行时驱动抽象**（[#3306](https://github.com/nanocoai/nanoclaw/pull/3306)）— 已合并，为未来支持非 Docker 运行时（本地进程、远端主机等）奠定基础。可能成为后续扩展的核心架构。
- **Slack 预置请求属性字段**（[#3345](https://github.com/nanocoai/nanoclaw/pull/3345) 与 [#3344](https://github.com/nanocoai/nanoclaw/pull/3344)，均 OPEN）— 为 Slack 自动预置请求附加 client_version 和 requested_by 字段，供运维/车队分析使用。属增量功能，待合并中。
- **LiteLLM 模型路由 skill**（[#2949](https://github.com/nanocoai/nanoclaw/pull/2949)，已关闭/合并）— 新增 `/add-litellm` 技能，支持本地服务器加可选远程模型的极简模型路由。已合并，但注意 PR 创建于 7 月 4 日、今日才关闭，耗时较长。
- **Agent SDK 输出 token 上限提升**（[#3025](https://github.com/nanocoai/nanoclaw/pull/3025)，OPEN）— 将 agent SDK 的 32000 输出 token 上限提高。创建于 7 月 12 日，至今仍未合并，已积压超过一个月，建议维护者评估。

## 7. 用户反馈摘要

基于 [#3338](https://github.com/nanocoai/nanoclaw/issues/3338) 的评论（2 条）：

- **痛点：** 用户（ionescu77）报告 Telegram 请求在 Codex WebSocket 失速时可静默等待长达 10 分钟，期间无任何反馈。这对于依赖 Telegram 作为交互入口的用户而言，体验严重受损。
- **使用场景：** 通过 Codex Responses API 驱动的 Telegram 渠道，用户期望 Codex CLI 的 5 分钟空闲重试机制在 `codex app-server` 中同样生效。
- **诉求本质：** 用户希望 WebSocket 空闲重试行为在服务端与 CLI 端一致，且上层超时机制应能感知底层重试进展，而非盲目等待。

## 8. 待处理积压

- **[PR #3025](https://github.com/nanocoai/nanoclaw/pull/3025)**（OPEN）— agent SDK 输出 token 上限从 32000 提升。创建于 2026-07-12，已积压超 38 天。涉及 LLM 输出长度限制，可能影响长文本生成任务。标注了 `follows-guidelines`，作者 javexed 也贡献了已合并的 #2949，建议维护者安排 review。
- **数据库异步化 BREAKING 变更（[#3334](https://github.com/nanocoai/nanoclaw/pull/3334)）** — 虽已合并，但作为破坏性变更，需关注下游插件/扩展的兼容性适配进度，建议在下一版本 changelog 中明确迁移注意事项。

---

*数据统计窗口：2026-08-18 至 2026-08-19 | 来源：github.com/nanocoai/nanoclaw*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-19

## 1. 今日速览

IronClaw 项目今日保持高活跃度：过去 24 小时内有 33 条 PR 更新（其中 11 条已合并/关闭）和 18 条 Issue 更新（6 条关闭）。项目发布了 1.3.0-rc.2 候选版本，重点修复了 1.2 升级后 activation_state 字段导致的启动崩溃问题，并恢复了 Reborn 运行时可选的工作节点 SSH 能力。性能优化持续落地，包括 BeforeModel 检查点批处理（#7712）和租赁围栏读取缓存（#7709）两个 PR 已合并。值得关注的是，以 italic-jinxin 为核心的团队正围绕"通知中心"推送了 4 个原创 PR（#7697-#7700），且均处于开放待合并状态。

## 2. 版本发布

**ironclaw-v1.3.0-rc.2**（2026-08-18 发布，[发布页](https://github.com/nearai/ironclaw/releases)）

更新内容：
- **修复升级崩溃**：从 1.2 升级时，现在可正确接受并保留已发布的扩展 `activation_state` 字段，此前会导致启动时反复崩溃循环。
- **恢复 Reborn 运行时 SSH**：官方 Reborn 运行时镜像重新支持可选的、仅公钥认证的工作节点 SSH（端口 2222）。

迁移注意事项：
- 本次为 RC 候选版，升级路径已打通，1.2 用户可直接升级。无破坏性变更声明。

## 3. 项目进展

今日合并/关闭的重要 PR 共 11 个，核心推进如下：

**性能优化（已合并）**
- [#7712 perf(agent-loop): BeforeModel 检查点批处理可选项且副作用安全](https://github.com/nearai/ironclaw/pull/7712)：新增 `CheckpointPolicy` 可配置 flush 间隔（默认保持逐轮写入不变），跳过逻辑受前序持久检查点类型约束，对应 Issue #7603（Tier 3，预计每轮省 7 次检查点写入）。
- [#7709 perf(loop-host): 租赁围栏读取按租赁期内存缓存](https://github.com/nearai/ironclaw/pull/7709)：复用已观测到的租约确认结果，避免每条 transcript 写入前重复读 journal，对应 Issue #7602（Tier 2，预计每轮省 11+ 次 journal 读取）。

**CI 稳定性（已合并）**
- [#7725 fix(ci): 稳定主分支的 Windows、E2E 和压力测试](https://github.com/nearai/ironclaw/pull/7725)：修复 Windows Clippy 失败、对齐 WebUI/管理端/Slack 扩展 E2E 断言、取消过期 CI 任务。

**可观测性（已合并）**
- [#7735 feat(artifact): 可下载对话产物中新增运行耗时证据](https://github.com/nearai/ironclaw/pull/7735)：下载的 run/thread artifact JSON 新增 `timings` 块（逐轮推理耗时、逐工具耗时、工具调用计数、汇总），bug 报告不再依赖用户口述。
- [#7739 chore(agents): 刷新代码库知识图谱](https://github.com/nearai/ironclaw/pull/7739)：CI 机器人自动同步 agent 的代码库记忆快照。

**待合并（今日 22 个开放 PR 中值得关注）**
- 通知中心 4 连 PR（#7697 持久化用户收件箱 + API、#7698 WebUI 通知中心通用化、#7699 可操作运行门控通知、#7700 权威运行结果发布）——均来自 italic-jinxin，共同构成完整的通知子系统。
- [#7650 feat(automations): 从运行时证据推导运行结果](https://github.com/nearai/ironclaw/pull/7650)：用确定性、证据驱动的评估替代仅靠答案语义判断。
- [#7456 fix(reborn): 持久化存储与部署 profile 解耦](https://github.com/nearai/ironclaw/pull/7456)：将所有 Reborn profile 直接挂载到 `IRONCLAW_REBORN_HOME` 下，使用 profile 无关的 `state/`、`system/`、`workspaces/` 等命名空间，对应 Epic #7467。

## 4. 社区热点

**Issue #7736 [OPEN] Daily ironclaw failure taxonomy — 2026-08-19**（[链接](https://github.com/nearai/ironclaw/issues/7736)） — 新建当日
- 作者 pranavraja99 发布每日失败分类报告，pinchbench 有 169 个非通过用例（健康轨迹运行但分数下降）。这是当日唯一的"报告型"Issue，属于持续性的质量监控机制而非一次性求助，反映了团队对基准性能的日常化追踪。

**Issue #7732 [OPEN] Epic: Production sandboxed shell with iron-proxy**（[链接](https://github.com/nearai/ironclaw/issues/7732)） — 新建当日，2 条评论
- v1.4.0 的史诗级路线图条目：将 Reborn 的 Docker 沙箱能力从显式用户沙箱扩展为通用 CLI 生产环境 shell 沙箱。当前本地 Docker 传输每次启动全新环境——这是"每次对话上下文丢失"抱怨的底层原因之一。

**PR #7491 [OPEN] feat(coding): omp 核心工具契约 + 引擎 + 基准测试臂（对应 #7392，切面 1-4）**（[链接](https://github.com/nearai/ironclaw/pull/7491)）
- 将模型可见的编码工具面收敛为 6 个精确名称：`read`、`write`、`edit`、`glob`、`grep`、`bash`。删除了旧的文件工具、独立结果读取器和派生 `builtin__*` 拼写——这是对 #7447（agent 调用太多工具后卡死）的一次结构性回应。

## 5. Bug 与稳定性

**高优先级**
- **[CLOSED] Issue #7714**（[链接](https://github.com/nearai/ironclaw/issues/7714)）：libSQL 后端共享写连接饥饿导致资源治理器 journal 在基准负载下反复停滞约 40 秒，引发级联的 authority 失效、journal 替换和永久性租约泄漏（PinchBench 147 任务中发现）。严重程度高，昨日已关闭，修复已合入。

**中优先级**
- **[CLOSED] Issue #7185**（[链接](https://github.com/nearai/ironclaw/issues/7185)）：跨对话记忆召回不可靠——2026-07-23 Champions 周会上多位测试者独立报告，一个对话中的上下文在后续对话中无法稳定召回。已关闭（修复合入），与该问题配套的存储解耦 PR #7456 仍在开放。

**低优先级 / 观察中**
- **Issue #7736**（[链接](https://github.com/nearai/ironclaw/issues/7736)）：pinchbench 169 个非通过用例，但被归类为"健康轨迹运行分数下降"，非回归，需进一步分析。

## 6. 功能请求与路线图信号

**新功能请求（今日新增）**
- **Issue #7731 Mnesis Spike**（[链接](https://github.com/nearai/ironclaw/issues/7731)）：将 Mnesis 集成为内存提供者。与 #7185（记忆召回不可靠）直接相关，v1.4.0 路线图上里程碑式的记忆架构升级。
- **Issue #7733 DESIGN.md 治理与主题换肤阶段 2-3**（[链接](https://github.com/nearai/ironclaw/issues/7733)）：起草 DESIGN.md，覆盖 agentic-first 设计原则、token 分类与命名、primitive/composite/component 边界、故事编写规则、主题化与 `data-*` 规范。
- **Issue #7732 生产级沙箱 shell（iron-proxy）**（[链接](https://github.com/nearai/ironclaw/issues/7732)）：面向 v1.4.0 的史诗——扩展 Docker 沙箱为通用 CLI 生产环境，并引入 iron-proxy 代理。

**可能进入 v1.4.0 的信号**
- 通知中心 4 个 PR（#7697-#7700）或由 [#7650](https://github.com/nearai/ironclaw/pull/7650)（自动化结果证据化）驱动，v1.4.0 呈现明显的"自动化可靠性"主题。
- 记忆架构（#7731 + #7185 修复）与 Reborn 状态解耦（#7467 + #7456）共同构成 v1.4.0 的"持久化"主题。
- PR #7737 和 #7738（Slack 配置文档修复与逐字段帮助文本）均来自外部贡献者 thisisjoshford，表明社区已开始关注配置层的易用性——若合入，对 Slack 渠道用户体验有明显改善。

## 7. 用户反馈摘要（来自 Issues 评论）

- **跨对话记忆（来自 #7185 评论）**：多为专业用户（法律、运营等角色）在不同对话中无法复用先前积累的上下文，被迫重复输入背景信息，影响多会话协作效率。该 Issue 已关闭，修复合入。
- **自动化的不可靠性（来自 #6879 评论）**：相同存储的 prompt 有时成功、有时无产出，在小模型（DeepSeek V4 Flash）上尤为明显。触发→运行管线审计已定位问题，但 #6879 仍处于开放状态，与 [#7650 PR](https://github.com/nearai/ironclaw/pull/7650) 直接相关。
- **工具调用循环卡死（来自 #7447）**：agent 在冗余 fetch-retry 循环中卡死（4 组近重复的 GitHub 查询、不断缩小 limit），而非通过 result 分页正确截断。暴露了模型可见工具面和工具结果读取器的设计缺陷——PR #7491（omp 工具契约）正是该问题的结构性修复。

## 8. 待处理积压

**长期未响应 / 停滞风险 Issue**
- **Issue #6879**（[链接](https://github.com/nearai/ironclaw/issues/6879)）：自动化运行不稳定（开放 21 天仅 1 条评论）。与 #7650（自动化结果证据化）直接相关，但 #7650 已开放 5 天尚未合并，建议维护者确认关联性并推动合入。
- **Issue #7038**（[链接](https://github.com/nearai/ironclaw/issues/7038)）：Storybook + AI-first 设计系统史诗，开放 16 天无评论。已有完整提案包（PR #7257），但未见到进展更新，存在被搁置风险。
- **Issue #7354**（[链接](https://github.com/nearai/ironclaw/issues/7354)）：Extensions vNext（统一渠道、富消息、Signal），开放 12 天无评论。Web push 和 Telegram delegated-device 已分化，需确认是否仍按原计划推进。

**待合并 PR（开放超过 5 天）**
- **PR #7491**（[链接](https://github.com/nearai/ironclaw/pull/7491)）：omp 编码工具契约（开放 8 天），涉及 API 面变更，建议从速评审。
- **PR #7456**（[链接](https://github.com/nearai/ironclaw/pull/7456)）：Reborn 持久化存储与 profile 解耦（开放 9 天），XL 规模，涉及数据迁移，需充分测试。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-19

## 1. 今日速览

项目今日整体活跃度中等偏上：过去 24 小时内有 6 条 Issue 更新、7 条 PR 更新（全部已合并/关闭，无待处理 PR），并发布了 1 个新版本（2026.8.18）。新版本包含 DSH 引擎集成等核心功能推进。值得关注的是，今日更新的 6 条 Issue 全部为 4 月 8 日创建的老 Issue（均标记为 stale），已被重新激活参与讨论，表明部分早期反馈问题至今仍未完全解决。PR 侧表现强劲，7 条全部关闭（多为 4 月创建后今日合并），涵盖定时任务、SSE 竞态条件、权限审批弹窗、输入框附件预览等多项修复与功能改进。

---

## 2. 版本发布

### LobsterAI 2026.8.18（发布于 2026-08-18）

**主要更新内容：**

- **feat: dsh engine integration** — 集成 DSH 引擎（PR #2502，作者 @fisherdaddy）
- **feat: update dsh to rc.7** — 将 DSH 依赖更新至 rc.7 版本（PR #2509，作者 @fisherdaddy）
- **feat: dsh process launcher** — 新增 DSH 进程启动器（PR 内容在 Release Notes 中被截断）

**破坏性变更与迁移注意：**

Release Notes 未明确标注破坏性变更。DSH 引擎的集成可能涉及新的配置项或启动方式调整，建议用户查阅完整 Release Notes 确认是否需要对现有工作流进行适配。DSH 从 rc 版本升级至 rc.7，属于预发布版本迭代，建议关注后续稳定性表现。

---

## 3. 项目进展

今日 7 条 PR 全部关闭（合并），项目在多条线上同步推进：

| PR | 关注点 | 说明 |
|---|---|---|
| [#2511](https://github.com/netease-youdao/LobsterAI/pull/2511) | 构建/安装器 | Windows 安装器支持"先上传后网页构建"的无界面流程，新增 SHA-256 校验 |
| [#1570](https://github.com/netease-youdao/LobsterAI/pull/1570) | 定时任务 | 修复编辑已禁用任务时被强制重新开启的 bug |
| [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573) | IM 渠道 | 为 Telegram/钉钉/飞书/Discord/QQ/微信等 IM 渠道新增斜杠命令（/help、/status 等） |
| [#1576](https://github.com/netease-youdao/LobsterAI/pull/1576) | API/SSE | 修复 SSE 流监听器被旧请求 abort 回调错误清理的竞态条件 |
| [#1578](https://github.com/netease-youdao/LobsterAI/pull/1578) | 权限审批 | 审批弹窗中 Bash 命令增加语法高亮，提升风险识别效率 |
| [#1580](https://github.com/netease-youdao/LobsterAI/pull/1580) | 输入框 | 图片附件改为 64×64 缩略图卡片预览 |
| [#1582](https://github.com/netease-youdao/LobsterAI/pull/1582) | Windows/pip | 修复旧版本残留文件导致 pip 无法使用的问题 |

**整体判断：** 今日合并的 PR 覆盖面广——从安装器流程优化、IM 渠道功能扩展，到多项稳定性修复（SSE 竞态、定时任务状态、pip 兼容性）和用户体验改进（缩略图预览、语法高亮）。尤其值得关注的是 PR #1573 为 IM 渠道引入斜杠命令体系，这是面向多端用户的重要能力扩展，可能标志着项目正在加强 IM 场景下的 Agent 控制能力。

---

## 4. 社区热点

今日 Issue/PR 评论数量整体偏低（每条 1-5 条评论），活跃度相对温和。相对讨论较多的条目：

**[Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569) — "提问后不运行，也不显示任何信息"（评论 5 条）**

- **诉求分析：** 用户遇到提问后无响应的问题，且无任何错误信息输出，排查困难。5 条评论说明维护者或社区成员参与度较高。这类"静默失败"问题往往比明确的报错更难定位，是影响用户体验的关键痛点。
- **关联判断：** 结合今日合并的 PR #1576（SSE 竞态条件修复），该问题可能与流式响应丢失有关，值得维护者交叉确认。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 提问后不运行也不显示任何信息，静默失败 | 无，但 PR #1576（SSE 竞态）可能部分相关 |
| 🔴 高 | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | 最新版本无论输入什么都回复相同内容（版本 2026.4.3） | 无 |
| 🟡 中 | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 模型无法获取上传的文件，新版本回归（旧版本可正常读取 project 目录） | 无，PR #1580（缩略图预览）仅改善展示层，未解决模型读取问题 |
| 🟡 中 | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | 网络环境变化导致网关反复重启，恢复原网络后正常 | 无 |

**今日已合并的 Bug 修复：**

- **PR #1570**：定时任务编辑后 enabled 状态被强制重置为 true（根因：`handleSubmit` 中 enabled 硬编码）
- **PR #1576**：SSE 流监听器竞态条件——快速停止后立即发送新消息时，旧请求的 abort 回调会误删新请求的监听器，导致流式数据静默丢失
- **PR #1582**：Windows 下旧版 `__main__.py` 残留导致 pip 递归调用错误

---

## 6. 功能请求与路线图信号

**今日新增/活跃的功能请求：**

- **[Issue #1567](https://github.com/netease-youdao/LobsterAI/issues/1567) — 输入框添加快捷操作按钮**：用户建议提供"停止当前话题""压缩上下文"等快捷操作按钮，或至少提供 `/help` 指令用于快速恢复。**这一需求与今日合并的 PR #1573（IM 斜杠命令）理念高度一致**，说明维护者可能已在布局此类控制能力，后续桌面端也可能纳入类似设计。

**结合已有 PR 预判可能纳入下一版本的功能：**

- **IM 斜杠命令扩展（PR #1573）**：已支持 /help、/status 等命令，后续可能继续扩充命令集（如 /stop、/compress）
- **Bash 语法高亮（PR #1578）**：表明项目正在强化权限审批环节的安全可视化，未来可能延伸到更多命令展示场景

---

## 7. 用户反馈摘要

- **[Issue #1561](https://github.com/netease-youdao/LobsterAI/issues/1561) — 文件上传回归**：用户明确表示"以前传文件之后，文件会放到 project 目录下，模型知道从该目录搜索"，新版本破坏了这一工作流。这是典型的回归性问题，暴露出新版本上传链路的重构引入了兼容性缺口，且已存在 4 个月余仍未解决，用户有较强的不满情绪。
- **[Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566) — 固定回复内容**：用户遇到模型无视输入内容、始终回复相同信息的异常，已附带日志文件，便于排查。
- **[Issue #1567](https://github.com/netease-youdao/LobsterAI/issues/1567) — 缺乏恢复手段**：用户反映上下文过长或后端 bug 导致出问题时，没有快捷恢复的方式，体现对"可操作性和容错能力"的诉求。
- **[Issue #1563](https://github.com/netease-youdao/LobsterAI/issues/1563) — 服务条款文字错误**：流量包服务条款页面存在明显文字错误，虽非功能性 bug，但反映对官方页面质量的关注。

**整体用户情绪：** 以问题报告为主，核心痛点集中在三个方向——①静默失败（无任何提示不运行）；②回归性问题（文件上传）；③缺乏恢复控制手段。无明显的正面或负面情绪爆发，属于常规的 bug 反馈节奏。

---

## 8. 待处理积压

| 条目 | 状态 | 积压时长 | 备注 |
|---|---|---|---|
| [Issue #1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | OPEN | 约 4.3 个月 | 高严重度静默失败问题，今日仍有更新（5 条评论），但无 fix PR 关联 |
| [Issue #1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | OPEN | 约 4.3 个月 | 同一版本（2026.4.3）出现固定回复问题，用户已附日志 |
| [Issue #1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | OPEN | 约 4.3 个月 | 文件上传回归问题，影响核心使用场景 |
| [Issue #1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | OPEN | 约 4.3 个月 | 网络环境变化导致网关反复重启 |
| [Issue #1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | OPEN | 约 4.3 个月 | 服务条款文字错误（低优先级但易修复） |
| [Issue #1567](https://github.com/netease-youdao/LobsterAI/issues/1567) | OPEN | 约 4.3 个月 | 功能请求，已被部分满足（IM 斜杠命令） |

**⚠️ 值得警惕的信号：** 今日更新的 6 条 Issue 全部创建于 2026-04-08，距今已超 4 个月且均标记为 stale 后今日被重新激活。其中包含多个高严重度问题（如 #1569 静默失败、#1566 固定回复），若这些问题至今仍未被复现或定位，建议维护者优先投入排查资源。同时建议在版本发布说明中明确标注已知问题清单，降低用户的困惑成本。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 (2026-08-19)

## 1. 今日速览

今日 Moltis 项目整体活跃度较高，24小时内关闭 4 个 Issue、合并 7 个 PR、发布 2 个新版本。 **Apple Container 后端是今日开发焦点**，3 个相关 PR（#1215、#1214）分别修复了资源限制、状态解析问题，并已全部合并；另有 GPT-5.6 Luna 模型支持和 OpenAI Responses API 路由改进落地。项目在修复质量与功能拓展上均取得明显推进，社区讨论较平稳，无重大回归风险信号。

## 2. 版本发布

今日发布 2 个新版本（**20260818.08**、**20260818.06**），均为日构建版本，未附带独立更新说明。结合今日合并的 PR 推断，版本主要包含 Apple Container 后端修复（#1214、#1215）和 OpenAI 路由优化（#1198、#1212）等变更。未观察到明确的破坏性变更或迁移注意事项。

## 3. 项目进展

今日合并的核心变更集中在 **Apple Container 后端稳定性**和 **OpenAI/模型路由** 两大方向：

| PR | 变更内容 | 影响 |
|---|---|---|
| [#1215](https://github.com/moltis-org/moltis/pull/1215) | 修复 Apple Container sandbox 资源限制：传递 `--memory`/`--cpus` 参数，支持 `--ulimit nproc` 实现 pids 限制 | 修复 `resource limits not applied`（关闭 #1188） |
| [#1214](https://github.com/moltis-org/moltis/pull/1214) | 使用类型化解析器读取 Apple Container 状态，兼容 1.x 新旧两种 status 字段格式 | 修复 sandbox "running" 状态误判（关闭 #1185） |
| [#1213](https://github.com/moltis-org/moltis/pull/1213) | 为 GPT-5.6 Sol/Terra/Luna 增加 Responses 路由测试覆盖 | 修复 #1181 GPT-5.6 Luna 问题 |
| [#1212](https://github.com/moltis-org/moltis/pull/1212) | 按规范化 URL 识别 OpenAI 内置端点，显式提供 base URL 时仍保留 Responses 路由 | 保证自定义配置下推理链路稳定 |
| [#1198](https://github.com/moltis-org/moltis/pull/1198) | 含 function tools + reasoning_effort 的 OpenAI 请求统一走 Responses API | 一致性提升，兼容 provider 仍走 Chat Completions |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) | 修复 heartbeat.update 参数被整体覆盖问题，改为补丁合并 | 修复 #1187 UI 静默重置字段 |
| [#1211](https://github.com/moltis-org/moltis/pull/1211) | 修复 README 中 star 历史图表因 GitHub API 无 token 失效的问题 | 文档恢复可用 |

**未合并待跟进**：[#1208](https://github.com/moltis-org/moltis/pull/1208) 修复 `heartbeat.active_hours` 从未生效的 bug（cron 调度时未调用 `is_within_active_hours`），已实现并有测试，等待维护者 review。

## 4. 社区热点

今日无高讨论量 Issue/PR（评论数均为 0-3）。最受关注的是 [#1185](https://github.com/moltis-org/moltis/issues/1185)（3 条评论），反馈 Apple Container 1.x sandbox 启动后状态被误判为未运行。这是一类"状态同步/解析"问题，用户在真实环境中的异常感知与后端版本升级直接相关，诉求是兼容不同版本的状态表达，**已在 #1214 中修复并通过关闭 Issue 获得闭环**。

## 5. Bug 与稳定性

今日关闭 4 个 Bug，全部已有对应修复并随版本发布：

| 严重度 | Issue | 问题描述 | 修复 PR |
|---|---|---|---|
| 高 | [#1188](https://github.com/moltis-org/moltis/issues/1188) | Apple Container 后端资源限制（内存/CPU/pids）未生效 | [#1215](https://github.com/moltis-org/moltis/pull/1215) ✅ |
| 高 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x sandbox 已运行但被判定为未运行 | [#1214](https://github.com/moltis-org/moltis/pull/1214) ✅ |
| 中 | [#1181](https://github.com/moltis-org/moltis/issues/1181) | GPT-5.6 Luna 模型存在问题 | [#1213](https://github.com/moltis-org/moltis/pull/1213) ✅ |
| 中 | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat 设置 UI 静默重置未在表单中的字段 | [#1209](https://github.com/moltis-org/moltis/pull/1209) ✅ |

所有 Bug 已有对应修复 PR 且已合并，无遗留回归风险。

## 6. 功能请求与路线图信号

今日无新增明确的 Feature Request Issue。结合已合并 PR 来看，项目当前更侧重**后端兼容性加固**（Apple Container 多版本状态解析、硬件限制传递）以及**OpenAI 模型路由演进**（GPT-5.6 系列全覆盖与 Responses API 统一入口）。社区对 README 等文档体验也有修补贡献（[#1211](https://github.com/moltis-org/moltis/pull/1211)），其中 **star 图表修复**回应了用户对项目流行度可视化的实际关注。

## 7. 用户反馈摘要

今日 Issue 评论量较少，可提炼的反馈有限。从 #1185 的讨论氛围与提交信息来看，真实用户在升级到 Apple Container 1.x 后能快速感知到 sandbox 状态误判，说明**状态上报链路是用户关注的第一直观体验**。同时 #1188 反馈资源限制未生效，体现了用户对容器隔离下资源可控性的明确期望。两处反馈均已快速闭环修复，整体用户满意度预期良好。Heartbeat UI 配置被静默覆盖（#1187）则暴露了配置写入策略的易错点，已有补丁式更新方案配合修复。

## 8. 待处理积压

- **[#1208](https://github.com/moltis-org/moltis/pull/1208)（OPEN，已 2 天未合）**：修复 `heartbeat.active_hours` 从未生效的关键 bug。该 PR 有实现、有测试、明确指向 #1205，建议维护者优先 review，避免该配置长期"形同虚设"影响用户定时任务编排体验。
- 今日关闭的 4 个 Issue 均为近期（8 月 8 日之后）创建，无长期未响应问题。历史积压需结合更长时间窗口数据进一步评估。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-19

## 1. 今日速览

过去24小时 CoPaw 项目保持较高活跃度：共 50 条 Issue 更新（其中 4 条新开/活跃、46 条已关闭）和 50 条 PR 更新（32 条待合并、18 条已合并/关闭）。同日新开 PR 密度较高（#7135–#7150 区间），涵盖模型选择器、流式响应恢复、环境文件原子写入等多个修复方向。社区侧，#2884（用户目录被清空）以 27 条评论成为今日焦点，虽标记为 CLOSED 但用户汇报的"个人目录被清空 + 软件被卸载"现象严重程度极高，值得持续关注。同日无新版本发布，项目处于迭代开发阶段。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 已合并/关闭 PR（推进的功能与修复）

| PR | 内容 | 影响 |
|---|---|---|
| [#7137 fix(console): polish model selector styles](https://github.com/agentscope-ai/QwenPaw/pull/7137) | 模型选择器样式打磨 | Console 交互体验小幅提升，属收尾型改动 |
| [#6986 fix(sandbox): fix antivirus software blocking issues](https://github.com/agentscope-ai/QwenPaw/pull/6986) | 修复杀毒软件拦截问题（沙箱层） | 直接回应 Issue #6847（QwenPaw 被杀软强制关停），属稳定性关键修复 |
| [#6800 feat(mailbox): intelligent email management assistant](https://github.com/agentscope-ai/QwenPaw/pull/6800) | 新增邮件管理助手（实时监控 + 访问控制），支持多邮箱自动收发与分类 | first-time contributor 提交，功能面扩展；已合并，下一版本预计可体验 |

### 待合并关键 PR（值得关注）

- [#7112 feat: add an isolated local QwenPaw Hub control plane](https://github.com/agentscope-ai/QwenPaw/pull/7112) — 引入 `qwenpaw app --pro` 本地多用户控制平面，架构级变动
- [#6976 feat: session-scoped multi project directories](https://github.com/agentscope-ai/QwenPaw/pull/6976) — 多项目目录绑定至会话，文件工具主目录语义升级

**整体评价**：项目保持稳定迭代节奏，合并内容以稳定性修复和功能增强并重，多项目目录与会话管理是当前主线方向之一。

---

## 4. 社区热点

### #2884 — [Question]: Ubuntu 22.04 下个人目录被清空、软件被卸载（27 评论）

> 链接：https://github.com/agentscope-ai/QwenPaw/issues/2884

**状态**：CLOSED（创建于 2026-04-03，更新于今日）

用户反馈在 Ubuntu 22.04 安装 coPaw 后数小时内个人目录几乎被清空且软件被删除。虽然问题标记为已关闭，但评论数（27）远超其他 Issue，且涉及数据毁灭级事故。用户描述中同时包含"漏洞被别人黑"的猜测，需确认是否已定位根因。该 Issue 的"关闭"状态并不意味着社区疑虑已消除，建议维护者在后续 release 中明确说明风险归因（如用户误操作 vs 产品缺陷）。

### #2301 — [Enhancement]: 一键更新/approve 按钮化/模型自动切换/自我进化（10 评论）

> 链接：https://github.com/agentscope-ai/QwenPaw/issues/2301

**状态**：CLOSED

用户提出 5 项产品建议：一键更新、/approve 按钮化、模型自动切换（含顺序天梯）、内置自我反思与自我进化、浏览器消息与 QQ/微信同步。覆盖安装体验、交互范式、模型调度策略、长期学习机制四个维度，反映出用户对"越用越懂你"的强需求。

### #2035 — [Question]: 多智能体调用 Bot 与多智能体协同（10 评论）

> 链接：https://github.com/agentscope-ai/QwenPaw/issues/2035

**状态**：CLOSED

用户询问如何为每个智能体绑定独立 Bot 以及多智能体协作对话能力。当前每种渠道只能绑定一个 Bot 是功能限制，多智能体协作仍属路线图范畴。

### #7102 — [Bug]: Freeze more than 10 minutes（9 评论，OPEN）

> 链接：https://github.com/agentscope-ai/QwenPaw/issues/7102

**状态**：OPEN — 今日唯一高活跃新 Bug

QwenPaw Desktop 2.1.0 + GLM 5.3 下运行超过 5 分钟无任何响应（无 token、无思考输出）。已有对应修复 PR [#7150](https://github.com/agentscope-ai/QwenPaw/pull/7150)（检测并恢复停滞的 LLM 流）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | 对应修复 PR |
|---|---|---|---|
| **严重（数据安全）** | [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) | 用户目录被清空、软件被卸载（CLOSED，但待确认根因） | — |
| **严重（核心功能卡死）** | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | GLM 5.3 下冻结 10 分钟以上无响应 | [#7150](https://github.com/agentscope-ai/QwenPaw/pull/7150) 已提交 |
| **中等（任务中断）** | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | 读取 1500 个文件仅处理几个即罢工（CLOSED） | — |
| **中等（杀软拦截）** | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | QwenPaw 被杀软强制关停（CLOSED） | [#6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) 已合并 |
| **中等（升级后无法启动）** | [#3005](https://github.com/agentscope-ai/QwenPaw/issues/3005) | pip 升级失败后安装脚本导致无法启动（CLOSED） | — |
| **轻微（状态丢失/未持久化）** | [#2663](https://github.com/agentscope-ai/QwenPaw/issues/2663) | 任务卡住无法暂停；中英文/深浅色设置重启后还原（CLOSED） | — |
| **轻微（DashScope 连接）** | [#2705](https://github.com/agentscope-ai/QwenPaw/issues/2705) | 无法连接 DashScope 模型（CLOSED） | — |

---

## 6. 功能请求与路线图信号

- **多智能体协作**（#2035）：用户强烈需求"多智能体调用 Bot + 协同完成任务"，社区当前无对应 PR，属于路线图空白
- **文件操作回滚**（#2590）：已有专门讨论 Issue，支持撤销 AI 对工作区文件的变更（如误删恢复），设计已展开，但暂无对应合并 PR
- **本地大模型升级**（#2856）：用户请求 CoPaw Local 增加 14B/27B/32B 量化版本，并指出 9B 多模态模型无法解析图片内容（仅描述颜色）——两者都是产品能力提升信号
- **多平台协同/多客户端互通**（#2493）：用户询问云端 CoPaw 与 Windows 端互通方式，参考 OpenClaw 的 gateway 节点方案
- **工具层优化**（#2201）：用户建议工具不应擅自接收错误又擅自调用 token 处理，属于 Agent 工具调用策略的深度优化
- **模型自动切换**（#2301）：用户建议增加自动切换功能并做"模型天梯"，模型选择器相关 PR（#7124）已在进行，可能会部分回应此诉求

**将被纳入下一版本的可能性**：

- 高：#7102 对应 PR #7150 已同日提交，预计近期合并
- 中：本地大模型参数量扩展、工具层错误处理优化
- 低：多智能体 Bot 绑定、自我进化机制（需产品层面决策）

---

## 7. 用户反馈摘要

- **数据安全焦虑**：#2884 用户表示"要疯了"，安装数小时内个人目录被清空。无论根因如何，该事件已造成用户对 coPaw 的数据安全信任危机
- **长任务稳定性不足**：#2377 用户设置了分批处理、断电续传、定时任务等机制，但 AI 仍只处理几个文件就"罢工"——长任务可靠性是核心痛点
- **本地模型资源占用**：#2776 用户报告 RTX 3080 10G + copaw-flash-4b + Ollama 128k 上下文，显存占用 9.2/10GB。说明 4B 量化模型已接近 10G 显存上限，并主动询问 16GB 以上方案
- **浅层图像理解**：#2856 用户指出 CoPaw Local 9B 模型对图片只能描述颜色、无法解析内容——多模态能力与宣传不符，是直接影响体验的短板
- **配置持久化问题**：#2663 用户选择中文和深色模式后重启自动还原为英文和浅色——设置项未持久化虽是小事，但反复出现说明默认配置管理仍需打磨
- **多模型兼容性**：#2598 用户询问 Qwen3-235B-A22B-Instruct-2507 支持情况，非思考模型在 Skill 推理中效果较差
- **安装体验**：#3005 用户在 pip 升级失败后改用安装脚本，结果应用完全无法启动——升级路径的健壮性需要加强

---

## 8. 待处理积压

### 长期未关闭的开放 PR

| PR | 创建时间 | 等待时长 | 备注 |
|---|---|---|---|
| [#5930 feat: add structured run outcome to SSE response](https://github.com/agentscope-ai/QwenPaw/pull/5930) | 2026-07-10 | 40 天 | API 自动化增强，Java 服务驱动场景，等待评审/测试 |
| [#6325 feat(tools): show built-in tool docs in Console](https://github.com/agentscope-ai/QwenPaw/pull/6325) | 2026-07-22 | 28 天 | 内置工具文档可视化，提升 Console 可发现性 |
| [#6569 fix(console): suppress EIO/EPIPE after TTY detach](https://github.com/agentscope-ai/QwenPaw/pull/6569) | 2026-07-30 | 20 天 | 终端关闭后 qwenpaw app 持续运行时的 stdout 报错噪音 |

### 长期未闭合的 Issue

| Issue | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) | 2026-04-03 | CLOSED（但未确认根因） | 目录清空事件跨 4 个月仍有 27 条评论，建议官方给出明确事故说明 |
| [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301) | 2026-03-25 | CLOSED | 5 项功能建议，虽关闭但内容仍具路线图价值 |

**维护者关注建议**：

- 明确 #2884 的根因结论（产品缺陷 / 环境问题 / 外部攻击），必要时发布安全公告
- 推动 #5930、#6325 等已成熟的等待合并 PR，避免长尾积累
- 对 #6800 新增的邮件管理功能，注意新功能的稳定性回归风险

---

> 数据来源：[github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（Issue/PR #1881–#7150），统计窗口 2026-08-18 至 2026-08-19。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-19

## 今日速览
ZeroClaw 今日社区活跃度维持高位：过去 24 小时共 50 条 Issue 更新（32 条活跃、18 条已关闭）与 50 条 PR 更新，其中 47 条待合并、3 条已合并/关闭，无新版本发布。值得关注的是，多名核心维护者（JordanTheJet、NiuBlibing、Audacity88）今日集中提交了一批"代码质量与安全边界"类 PR（#10122–#10126），覆盖面涉及 dead_code 清理、unsafe 平台边界审计、环境敏感测试隔离、发布工具链优化等，表明项目在功能扩张后正进入一轮系统性技术债清理阶段。高风险 P1/P0 Bug 仍有多项处于 accepted 状态待修复，但部分老 Issue（如 #8563、#3542、#5833）已关闭，积压消化能力尚可。

---

## 版本发布
过去 24 小时无新版本发布。近期版本为 v0.8.4（由 #9376 发布，见 Issue #9381 的后续追踪）。

---

## 项目进展

今日无 PR 被标记为"已合并"（3 条已合并/关闭的 PR 未出现在评论数 Top 15 列表中，故无法展开细节）。但从 Issue 关闭情况可推断出以下进展已落地：

| 关闭 Issue | 标题 | 意义 |
|---|---|---|
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | [Bug]: SOPs 通过 Web 仪表盘会话不可用 | S1 级工作流阻断 Bug 已修复（5 条评论） |
| [#7415](https://github.com/zeroclaw-labs/zeroclaw/issues/7415) | RFC: 统一三个代理轮转引擎 | 架构级重构完成，RFC 已按维护者指示以单一合并 PR 落地（5 条评论） |
| [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) | tool-result 截断为固定 50,000 字符且对操作者不可见 | 已重新界定范围并关闭（4 条评论） |
| [#3542](https://github.com/zeroclaw-labs/zeroclaw/issues/3542) | Webhook 端点支持 agent 模式 | 需求已实现（4 条评论，👍 1） |
| [#5833](https://github.com/zeroclaw-labs/zeroclaw/issues/5833) | 会话所有权模型（破坏性操作） | 安全增强已实现（4 条评论） |
| [#7069](https://github.com/zeroclaw-labs/zeroclaw/issues/7069) | Twitter/X 频道在预编译二进制中不可用 | 已解决（3 条评论） |

**整体判断**：项目今日处于"合并消化期"——功能落地速度放缓，但大量老 Issue 被关闭，积压率有所改善。同时维护者正通过一系列低风险 PR 加固代码基础，为后续更高风险的功能合并做准备。

---

## 社区热点

评论数 Top 3 的 Issue 反映了社区当前最关注的方向：

**1. Windows 兼容性之痛（18 条评论）**
- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)：Windows 11 上 74 个测试失败，涉及 Unix-only 命令、路径语义和控制台编码（代码页 936 / 简体中文环境）。Issue 自 6 月 10 日创建至今已两个月，期间持续有新评论，是当前社区最关注的兼容性问题。P1 且标记 risk:high、no-stale。

**2. WhatsApp 空列表的安全语义（13 条评论）**
- [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)：RFC 提案将 WhatsApp Web 频道的空 `allowed_groups` 语义从"允许所有群"改为"不允许任何群"（permit-none），即默认拒绝原则。该提案由 Claude 起草并由 @belumume 发起，属于安全默认值方向的改进，获得社区较多讨论，已标记 accepted + in-progress。

**3. 两个方向并行（各 5–6 条评论）**
- [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)：CI 缓存与关键路径优化，直指 PR CI 平均 15–20 分钟的痛点。
- [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)：会话持久化契约的归属权与分层顺序——四个独立工作流同时改动同一契约但无人负责，反映项目规模扩大后的治理挑战。

---

## Bug 与稳定性

按严重程度排列今日活跃 Bug（含未标记 P0 但风险为 high 或影响 S1 的项）：

| 严重度 | Issue | 标题 | 状态 | 是否有修复 PR |
|---|---|---|---|---|
| P0 | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP 引擎在记录输出 schema 拒绝前推进并运行后续步骤 | accepted | 未见 |
| P1 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 11 上 74 个测试失败 | accepted, no-stale | 未见 |
| P1 | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/工具 schema 克隆导致 agent 循环中 RSS 无界增长（源自 #5542 OOM 拆分） | accepted, no-stale | 未见 |
| P1 | [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) | tool-result 截断固定 50,000 字符、对操作者不可见、结构化输出按字节截断 | 已关闭 | 已解决（重新界定范围） |
| P2 | [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) | SECURITY.md 引用的 CI 任务已在四月移除，文档与实际不符 | needs-maintainer-review | 未见 |

**值得注意**：#10066 为今日新出现的高危 Bug（S1 - 工作流阻断），涉及 SOP 引擎在输出 schema 校验失败时仍推进后续步骤的执行顺序问题，目前尚无修复 PR，需要重点关注。#8642 的内存增长问题已持续一个半月，虽然 #5542 的重启风暴已通过 #8633 解决，但 RSS 无界增长这一独立根因仍未消除。

---

## 功能请求与路线图信号

今日活跃的功能请求/增强类 Issue 与对应 PR 的匹配情况：

| 请求 | 标题 | 对应 PR / 状态 |
|---|---|---|
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | 全面 WASM 插件架构（hook/backend/capability 三层） | 无直接对应 PR，RFC 草案阶段，仅 2 条评论，尚待社区反馈 |
| [#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059) | ZeroCode 文本输入支持 Option-Backspace 前向词删除 | good first issue，P3，低风险；无对应 PR |
| [#8584](https://github.com/zeroclaw-labs/zeroclaw/issues/8584) | Web 仪表板本地化迁移至 Fluent 翻译流 | 已 accepted + follow-up，无对应 PR |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | AI 辅助 PR 预审与复审 | needs-author-action；方向与今日 #10102（[do-not-merge 标签文档化](https://github.com/zeroclaw-labs/zeroclaw/pull/10102)）形成呼应，二者共同指向"人机协作的 PR 治理流程" |
| — | 在线 PR 中多个功能亮点 | [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) Telegram 安全模型选择器（XL 大小、needs-maintainer-review）、[#9971](https://github.com/zeroclaw-labs/zeroclaw/pull/9971) Discord 基于角色授权（非仅用户 ID）、[#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) agent 面向配置编写 + operator 审批预览（XL 大小） |

**路线图信号**：#10076 的 WASM 插件架构若获社区支持，将把现有"工具/频道/内存/技能"的 WASM 沙箱运行方式提升为统一插件体系，是架构级方向。而 #9600 追踪的会话持久化契约归属问题若不尽快落实负责人，可能成为后续功能迭代的阻塞点。

---

## 用户反馈摘要

从今日活跃 Issue 评论中提炼的用户痛点和需求：

**1. Windows 与中文环境支持仍是最大痛点**
- #7462 的发起者 NiuBlibing 在简体中文 Windows 11（代码页 936）上运行测试套件即遭遇 74 个失败，说明 CI 缺少对非 UTF-8 控制台编码和非 POSIX 路径的覆盖。此处评论的持续热度（18 条）反映了真实用户对 Windows 一等公民支持的期待。

**2. 核心维护者 JordanTheJet 连续提交质量问题与外部贡献者形成协作**
- 今日 JordanTheJet 连提 5 个 PR（#10122–#10126），覆盖 dead_code 清理、unsafe 审计、测试隔离、发布工具链等，全部为低风险/中风险且 size 为 S/M。这一行为与 Issue #10118（Rust anti-slop 政策债务清理追踪，30+ 违规模式）配合推进，说明项目正在向"更严格的 Rust 生产代码标准"过渡。

**3. 安全默认值受到社区关注**
- #9397（WhatsApp 空列表 permit-none）和 #10074（SECURITY.md 文档失效）两条 security 相关 Issue 均获得关注，说明用户对安全语义的一致性有较高预期。#9397 的 RFC 由 AI 起草 + 社区审核模式（基于 RFC #5615 流程）也体现了项目正在探索高效协作方式。

---

## 待处理积压

以下 Issue/PR 长期未获得关键推进，需维护者关注：

| 类型 | 编号 | 标题 | 创建时间 | 风险 | 备注 |
|---|---|---|---|---|---|
| Issue | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 74 个测试失败 | 2026-06-10（已超 2 个月） | P1, high | 18 条评论仍无修复 PR 出现 |
| Issue | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP 工具 schema 克隆导致 RSS 无界增长 | 2026-07-03（已超 1.5 个月） | P1, high | 已标记 no-stale，但仍无修复 PR |
| PR | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | 网关新增 OpenAI chat completions 端点 | 2026-06-29（已超 1.5 个月） | high | status:blocked，XL 大小；该 PR 将直接对接 OpenAI SDK / LangChain 等生态，社区需求明确（关闭 #8550） |
| PR | [#8033](https://github.com/zeroclaw-labs/zeroclaw/pull/8033) | 规范驱动的引导流程（CLI + 引导 LLM 传输） | 2026-06-20（已近 2 个月） | high | status:blocked，XL 大小；新增 onboarding crate，涉及核心流程 |
| Issue | [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) | crates.io 发布/打包/cargo-install 后续事项 | 2026-07-26 | high | 追踪在 v0.8.4 中推迟的 3 项工作，首要为 Windows 符号链接问题（无开发者模式时检出仓库失败） |

**特别提醒**：PR #8486 与 #9808（46 个 Rust 依赖批量升级，dependabot 提交）是当前积压中直接影响用户体验的两个方向——前者接入 OpenAI 生态，后者涉及依赖安全。此外，#10118（Rust anti-slop 政策债务）作为新开的追踪 Issue，将指导未来数周的代码质量清理工作，建议社区关注其后续更新节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*