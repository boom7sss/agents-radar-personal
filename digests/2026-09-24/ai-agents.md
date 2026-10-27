# OpenClaw 生态日报 2026-09-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-24 12:15 UTC

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

# OpenClaw 项目日报 — 2026-09-24

## 1. 今日速览

项目今日维持**极高活跃度**：24 小时内 Issue 更新 500 条（新开/活跃 465、关闭 35），PR 更新 500 条（待合并 404、已合并且关闭 96），并发布 1 个新版本 v2026.9.6。但活跃度背后是**稳定性压力集中爆发**：P0 级问题横跨 SQLite WAL 失控增长、网关事件循环饥饿、升级回滚失败与 macOS 启动崩溃重建等多条主线。整体看，社区贡献与维护者响应速度快（#157011 当日开当日有讨论），但发布链路的可靠性（update、Doctor、macOS 构建）已成为当前最突出的健康度风险点。

## 2. 版本发布

**v2026.9.6**（openclaw 2026.9.6）

- **关键说明**：原 2026.9.6 macOS 构建在启动时崩溃（#156861），已于 2026-09-24 09:52 UTC 替换为重新构建并完成公证（notarized）的 2026.9.6 构建，包含修复（#156881）。
- **迁移注意事项**：若已安装早期的 2026.9.6 构建，发布说明提示需重新下载 DMG 或从应用内由 2026.9.5 升级。
- 发布说明未列出其他破坏性变更。但需注意与之并行的升级问题 #157011（2026.9.5 → 2026.9.6 托管更新持续回滚），可能与本次发布链路相关，建议关注。
- 链接：见 Release v2026.9.6（openclaw/openclaw）

## 3. 项目进展

今日已合并/关闭 96 条 PR，同时有 404 条 PR 待合并——合并吞吐量相对积压仍偏紧。以下为今日活跃度高、进入审阅或修复关键路径的代表性 PR：

- **#157263 refactor(sqlite): centralize WAL checkpoint execution**（steipete，当日创建）— 集中 WAL checkpoint 执行逻辑，是 #143524 WAL 失控问题的“有界 checkpoint 归属”切片。链接：openclaw/openclaw PR #157263
- **#157230 fix: keep independent database work responsive under load**（steipete）— 修复单一数据库 worker 填满进程级请求队列时，拖垮无关 agent 运行与控制请求的问题。链接：openclaw/openclaw PR #157230
- **#157258 fix(gateway): retain owned suspension status during restart**（steipete）— 修复部署控制器在重启/中断时丢失自身 suspension 状态、进而推迟有效更新。链接：openclaw/openclaw PR #157258
- **#157135 fix: preserve steering across reconnects and show queued input**（steipete）— 修复重连后 steering 静默降级为 follow-up、排队输入显示为普通已发送消息。链接：openclaw/openclaw PR #157135
- **#156541 refactor(state): deslop sessions and state**（steipete，size XL，标记 merge-risk: compatibility）— 整合 session/config/SQLite 状态辅助逻辑的重复遍历与簿记；因涉及兼容性风险，需维护者重点评估。链接：openclaw/openclaw PR #156541
- **#156324 fix(skills): refresh skills after watched directories are replaced**（vincentkoc，size XL）— 修复被监视目录替换后 Skills 内容陈旧（Node Linux/Windows）。链接：openclaw/openclaw PR #156324

**整体推进评估**：今日进展集中在“数据库/WAL 治理”与“网关重启与重连语义”两条主干，均指向近期 P0 稳定性问题；但大型重构 PR（#156541）与升级链路修复尚未合入，向前迈进的幅度属于**修复导向的稳步前进，而非功能扩张**。

## 4. 社区热点

按评论数与反应度排序：

| 排名 | 条目 | 评论 | 状态 | 链接 |
|---|---|---|---|---|
| 1 | #143524 SQLite WAL 增长至 1.4–2.8 GB，阻塞网关启动（Windows） | 64 | OPEN, P0 | openclaw/openclaw Issue #143524 |
| 2 | #149538 main 网关 ready 后不服务，/health 超时、事件循环饥饿（632-agent fleet） | 21 | OPEN, P0 | openclaw/openclaw Issue #149538 |
| 3 | #126360 AgentSelectionRequiredError 日志泛滥（显式多 agent 归属） | 18 | OPEN, P1 | openclaw/openclaw Issue #126360 |
| 4 | #155753 模型目录过期/重建循环占满一核 | 17 | OPEN, P2 | openclaw/openclaw Issue #155753 |
| 5 | #97616 未回收的 hook/tool 子进程导致僵尸进程累积 | 16 | OPEN, P1 | openclaw/openclaw Issue #97616 |
| 6 | #96834 WhatsApp 1:1 入站图片卡住主通道约 3 分钟 | 15 | OPEN, P1 | openclaw/openclaw Issue #96834 |

**诉求分析**：热点高度集中在**规模化运行下的资源与调度问题**——大 fleet（632 agents）、多 agent 显式归属、长生命周期 worker 场景下，内存/CPU/队列/进程回收均出现失控。这类问题不再是个别环境差异，而是架构层面的资源治理诉求，与今日 PR #157263、#157230 的方向一致。

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

**P0 / release-blocker**
- **#143524** SQLite WAL 无界增长阻塞网关启动（Windows，2026.9.2/9.3）— 评论 64，长期未解；相关 PR #157263 提供了 checkpoint 归属切片，**部分修复方向存在，但非完整 fix**。链接：openclaw/openclaw Issue #143524
- **#149538** main 网关 ready 后不服务，/health 全超时、事件循环饥饿（632-agent fleet）— 与 boot 问题不同源。链接：openclaw/openclaw Issue #149538
- **#157011** 2026.9.5 → 2026.9.6 托管更新总是回滚（RangeError: Maximum call stack size exceeded，`doctor --fix` 无效）— 当日新开，与今日发布直接相关，**暂无 fix PR**。链接：openclaw/openclaw Issue #157011
- **#156674** 2026.9.5 macOS 网关在长生命周期 Codex worker 下资源压力过大，停网关后系统恢复。链接：openclaw/openclaw Issue #156674
- **#136203** Windows de-DE 2026.8.2 升级后 Doctor 维护被阻塞、遗留旧 workspace 状态。链接：openclaw/openclaw Issue #136203
- **#144742** 2026.9.4 缺失 #144208，导致保留的 v1 handoff lease 行使每次 config 写入失败（release blocker，maintainer 标记）。链接：openclaw/openclaw Issue #144742
- **#156112** `openclaw update` 在 "global install swap" 阶段确定性失败（npm 全局 2026.9.4 → 2026.9.5）。链接：openclaw/openclaw Issue #156112

**P1**
- **#97616** 子进程僵尸累积致运行时退化 — 跨版本长期存在（6 月提出，今日仍活跃）。
- **#96834** WhatsApp 1:1 图片卡主通道约 3 分钟。
- **#127229** Telegram watchdog 释放的 durable update 在 transport tracker 结算前被误标记 tombstone。
- **#144502** WhatsApp 移动端无法播放 TTS 语音条（48 kHz + Lavf vendor tag）。
- **#110190** runtime context carrier 置于用户消息之后导致模型混淆与推理 token 浪费。
- **#142336** 2026.9.2+ 核心 `/dashboard` 与 Telegram Mini App 启动器命令冲突（回归）。
- **#154572** 2026.9.5 `sessions_spawn` 到 claude-cli-runtime 子 agent 总是 350ms 失败。
- **#53008** 记忆压缩阻塞主处理通道，机器人 10+ 分钟无响应。
- **#139485** 托管升级后网关离线、finalization 非终态（maintainer 标记，not-repro-on-main）。

**P2 / 其他**
- **#155753** 模型目录重建循环占满一核（2026.9.5），识别 worker 见 #154276 / #153422。
- **#146004** 子 agent 完成触发无通道 dashboard heartbeat turn（回归）。
- **#142037** 嵌入式 runtime 将显式路由 message-tool 回复记录为 "mute"（Slack）。
- **#99659** 连接 companion Windows 应用后 OOM 被杀。
- **#143757** Windows 计划任务默认配置无法无人值守运行网关。
- **#91144** Windows 原生 CLI 网关计划任务不能持续运行（前台窗口正常）。
- **#53628** 安装 skill 时 `${XDG_CONFIG_HOME}` 未被处理（有 linked PR open）。

**总体判断**：稳定性问题是今日的绝对主线，且相当一部分（#157011、#156112、#139485、#143757、#91144）集中在**升级、Doctor 与 Windows/macOS 服务托管**这条发布基础设施链路上，反复出现、跨版本未收敛。

## 6. 功能请求与路线图信号

今日可见的功能需求（均为长期 OPEN，暂无明确里程碑）：

- **#56781** 为 compaction 与 LCM summaryModel 增加 fallback 模型链 — 现有实现只接受单一模型，限流时静默失败。与今日多起“压缩阻塞/失败”问题（#53008）诉求一致，**具备被纳入的合理性**。
- **#88154** Slack Modal 支持交互式工作流 — P2，需产品决策。
- **#71452** `message` 的 list chat / list messages 应支持分页（当前硬编码 25 条上限）。
- **#47910**（已关闭）按失败类别做 provider 回退、隔离 auth 失效 provider — 今日关闭，为 provider 弹性方向提供信号。
- **#77700**（Tracking）Prepared runtime resolution migration — 阶段化迁移跟踪 issue，长期推进中。

**判断**：结合今日 PR 方向（数据库/网关资源治理优先），短期路线图更可能优先吸收**稳定性与资源治理类**改动，功能性请求（Slack Modal、分页）预计仍在排队。

## 7. 用户反馈摘要

从高评论 Issue 中提炼的真实痛点与使用场景：

- **规模化多 agent 部署是主流使用场景**，也是痛点集中区：632-agent fleet（#149538）、6 agent 显式归属（#126360）、多 agent Windows 安装（#136203）均出现资源与路由治理问题。
- **升级体验是最大不满来源**：托管更新回滚（#157011）、global install swap 失败（#156112）、升级后网关离线（#139485）、升级遗留状态（#136203）反复出现，用户需手动介入 operator intervention。
- **Windows 平台体验明显滞后**：网关计划任务无法无人值守运行（#143757、#91144）、WAL 增长（#143524）。
- **跨通道消息投递一致性存疑**：WhatsApp 图片卡顿（#96834）、TTS 不可播放（#144502）、Telegram 消息误 tombstone（#127229）与路由串扰（#41165）、Slack 回复被记为 mute（#142037）。
- **模型/运行时上下文处理影响成本**：runtime context carrier 位置导致推理 token 浪费（#110190）、模型目录循环占核（#155753），用户对“无崩溃但持续烧资源”的问题敏感度高。

## 8. 待处理积压

长期未响应、跨版本仍活跃、值得维护者优先关注：

- **#97616**（2026-06-29 创建，P1）僵尸子进程累积 — 跨近三个月仍 OPEN，评论 16，**无 fix PR**。链接：openclaw/openclaw Issue #97616
- **#96834**（2026-06-25，P1）WhatsApp 入站图片卡主通道 — 跨三月未解，含明确复现（2026.6.10）。链接：openclaw/openclaw Issue #96834
- **#53008**（2026-03-23，P1）记忆压缩阻塞主通道 10+ 分钟 — 存在时间最长的高严重度问题之一。链接：openclaw/openclaw Issue #53008
- **#53628**（2026-03-24，P2）`${XDG_CONFIG_HOME}` 未处理 — 有 linked PR open 但长期未合。链接：openclaw/openclaw Issue #53628
- **#41165**（2026-03-09，P2）Telegram DM 仍落入 `agent:main:main` — 点赞 2，有 linked PR open。链接：openclaw/openclaw Issue #41165
- **#91144**（2026-06-07，P1）Windows CLI 网关计划任务不驻留 — 跨版本未收敛。链接：openclaw/openclaw Issue #91144
- **PR 积压**：待合并 PR 达 404 条，其中 **#156541（size XL, merge-risk: compatibility）** 与 **#156324（size XL）** 体量大、影响面广，建议维护者尽快给出审阅结论以避免长期悬置。
  - openclaw/openclaw PR #156541
  - openclaw/openclaw PR #156324

---
*说明：本日报所有条目、链接与描述均严格依据所提供数据生成，未补充外部信息。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析
**数据窗口：2026-09-24（过去 24 小时）｜样本：11 个 Claw 系项目**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**"规模上量、质量承压"的转折点**：昨日样本中 8 个项目有活动，累计产生 100+ Issue 更新、200+ PR 更新，但**只有 3 个项目发布新版本**（OpenClaw、Hermes Agent、NanoClaw），且三个版本发布后均立即伴随修复风暴——OpenClaw 9.6 的 macOS 构建崩溃需当日重建、NanoClaw v2.4.0 的新增 Iron Proxy 当日即报 arm64 安装失败、Hermes 补丁版汇总约 460 个累积 PR。与此同时，**升级链路（update / Doctor / 服务托管）成为跨项目最高频的故障聚集区**，OpenClaw、Hermes、NanoClaw、NullClaw 四家均在此失血。生态的竞争焦点已从"能不能跑"转向"规模化跑不跑得住"——632 agent fleet（OpenClaw）、低资源设备承诺（NullClaw）、多租户 Hub（CoPaw）三类场景同时暴露出资源治理与恢复路径的系统性缺口。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新/关） | PR（待合并/已合并） | Release | 活跃度 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 更新（465/35） | 500 更新（404/96） | ✅ v2026.9.6（重建） | 极高 | ⚠️ **发布链路可靠性告急**，7 条 P0 release-blocker 集中爆发 |
| **ZeroClaw** | 19（17/2） | 50（45/5） | ❌ | 高 | 🟡 大 PR 积压评审期，1 条 S1 Windows 阻塞 + 3 个月未解 p1 安全债 |
| **CoPaw** | 27（13/14） | 31（24/7） | ❌ | 高 | 🟢 关闭/新开≈1:1，首次贡献者活跃，但 24 条 PR 合并瓶颈 |
| **Hermes Agent** | 50（30/20） | 50（44/6） | ✅ v0.21.5（补丁） | 高 | 🟡 评审瓶颈日，待合并:已合并 = 7.3:1，137 评论 issue 积压 5 周 |
| **NanoClaw** | 4（3/1） | 25（13/12） | ✅ v2.4.0 | 高 | 🟡 发布后集中修复期，新网关 arm64 兼容性未打磨 |
| **LobsterAI** | 18（2/16） | 50（4/46） | ✅ 2026.9.23 | 高（清理向） | 🟡 存量清理为主，5 条安全 Issue 以 stale 关闭且无公开修复依据 |
| **NanoBot** | 8（3/5） | 28（9/19） | ❌ | 中高 | 🟢 可靠性收敛窗口，p0 修复当日落地，0.3.5 升级回归待修 |
| **NullClaw** | 21（11/10） | 24（14/10） | ❌ | 中高 | 🟢 修复吞吐良好，4 个崩溃/挂起级问题当日闭环 |
| **PicoClaw** | 1（1/0） | 2（2/0） | ❌ | 低 | 🔴 **picoclaw.io TLS 证书过期 12 天未修**，站点全线不可访问 |
| **IronClaw** | 0 | 3（3/0） | ❌（RC 准备中） | 低 | 🟢 发布候选稳定期，3 条 PR 均 risk: low |
| **Moltis** | 0 | 1（1/0） | ❌ | 低 | 🟡 仅 1 条停滞 8 天的沙箱 PR，零合并零发布 |
| **TinyClaw / ZeptoClaw** | — | — | — | 无活动 | ⚪ 24 小时无活动 |

**关键观察**：
- **PR 待合并/已合并比**是最有效的健康度先行指标：Hermes 7.3:1、ZeroClaw 9:1、CoPaw 3.4:1 均显示评审带宽已成为增长瓶颈；OpenClaw 404:96 的绝对积压量最大。
- **发布 ≠ 健康**：三个发布项目全部进入"发布后修复"模式，说明发布流程的自动化验证（尤其平台矩阵与安装路径）普遍不足。

---

## 3. OpenClaw 在生态中的定位

**社区规模的量级差异**：OpenClaw 单日 Issue+PR 更新量（1000 条）超过其他 10 个项目总和的 3 倍。其最高热度 Issue #143524（SQLite WAL 增长至 1.4–2.8 GB）单条 64 条评论，而 PicoClaw、Moltis、IronClaw 全日最高热度 Issue 评论数为 2–9 条。OpenClaw 已从"生态中的一员"变为**被其他项目参照的基线**——LobsterAI 的 PR #2403 直接涉及 `revert(openclaw)` 路径，PR #2758 在 Cowork 中展示"OpenClaw 原生进度卡片"，说明其运行时契约被下游产品消费。

**优势**：
1. **规模化验证最充分**——唯一有 632-agent fleet 级生产负载报告（#149538）的项目，暴露的问题（事件循环饥饿、队列填满）代表行业前沿。
2. **贡献者响应速度快**——#157011 当日开当日有讨论；核心贡献者 steipete 单日推动 5+ 条关键 fix。
3. **治理动作领先**——已出现专门的 WAL checkpoint 集中化重构（#157263）、数据库 worker 隔离（#157230），是样本中唯一将"资源治理"作为主动重构目标的项目。

**技术路线差异**：OpenClaw 采用 SQLite + WAL 的单体状态存储 + 网关/worker 分层，这一选择在规模化下暴露为 WAL 无界增长与单数据库 worker 阻塞无关 agent 的两难；相比 NullClaw 的 Zig 原生栈、CoPaw 的多 provider 适配层，OpenClaw 的架构债更集中在**状态层**。

**风险对比**：OpenClaw 的 7 条 P0 中，4 条（#157011、#156112、#139485、#143757）集中在升级/Doctor/服务托管链路，与 Hermes（#105108、#105184、#71866）、NanoClaw（#3828 cutover 死锁）、NullClaw（#980 token 落盘时序）构成**跨项目同构缺陷**——这不是单个项目的实现问题，而是这一类产品共有的发布基础设施薄弱。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级 / 更新链路可靠性** | OpenClaw、Hermes、NanoClaw、NullClaw、NullClaw | 托管更新回滚（OpenClaw #157011）、global install swap 失败（#156112）、desktop updater 30s 超时（Hermes #105108）、cutover drain 死锁（NanoClaw #3828）、`/pair` token 未落盘（NullClaw #980/#839） |
| **上下文 / 记忆预算治理** | CoPaw、NanoBot、OpenClaw、LobsterAI、NullClaw | 媒体块 base64 无界累积（CoPaw #7853）、compaction 超预算（CoPaw #7628）、硬编码 32768 回退（CoPaw #7576）、compact 覆盖并发写入 p0（NanoBot #5884）、记忆压缩阻塞主通道 10+ 分钟（OpenClaw #53008）、重复输出烧 token（LobsterAI #2121） |
| **多 agent / 多租户隔离** | OpenClaw、CoPaw、ZeroClaw、Hermes、NanoClaw | 显式多 agent 归属错误泛滥（OpenClaw #126360）、Hub 多租户路线图（CoPaw #7318，33 评论）、主机级准入控制 RFC（ZeroClaw #10970）、provider scopes 多凭证（Hermes #118285）、共享身份下无法区分 agent（NanoClaw #3509/#3510） |
| **通道静默 / 消息投递一致性** | NullClaw、OpenClaw、NanoBot、ZeroClaw | Telegram 空闲后停止响应（NullClaw #972）、WhatsApp 图片卡主通道 3 分钟（OpenClaw #96834）、钉钉真 @ 提及（NanoBot #5899）、WhatsApp 主题分隔线渲染（ZeroClaw #11052） |
| **低资源 / 异构平台可用性** | NullClaw、PicoClaw、NanoClaw、OpenClaw | 低资源设备 web_search 不可用（NullClaw #871，9 评论）、arm64 Iron Control 镜像不兼容（NanoClaw #3888）、Windows 计划任务无法无人值守（OpenClaw #143757/#91144、NullClaw #870 WSL2 busy loop） |
| **可观测性与恢复路径** | Hermes、CoPaw、NullClaw、OpenClaw | deleted-WAL guard 触发后无产品内恢复（Hermes #110054，13 issue + 4 Discord 线程）、/status 端点请求（NullClaw #631）、展示 reasoning/thinking（#886）、进度卡片（LobsterAI #2758） |
| **Provider 协议 / 新模型适配** | NanoBot、PicoClaw、Hermes、ZeroClaw | OpenAI Responses API（NanoBot #5896，good first issue）、opencode-go provider（PicoClaw #3371）、openai/gpt-6-astra 目录缺失（Hermes #108530）、Antigravity CLI 工具（ZeroClaw #11075）、模型目录重建循环占核（OpenClaw #155753） |

**最高共识的三条**：升级链路可靠性、上下文预算治理、多 agent 隔离——均由 5 个以上项目独立提出，属于**行业级未解问题**而非单项目缺陷。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | ZeroClaw | CoPaw | NullClaw | Hermes Agent | NanoClaw | NanoBot | LobsterAI |
|---|---|---|---|---|---|---|---|---|
| **功能侧重** | 大规模自主 agent 编排 + 网关 | Rust 全栈 + 插件/SOP 子系统 | 多 provider 适配 + Console 体验 | 弱设备可跑通 + 多通道 | Desktop + 流式 + MCP | 凭证网关（skills 化）+ 频道 | WebUI + 渠道精细化 | Cowork 交互 + 实验性决策模型 |
| **目标用户** | 规模化 fleet 运维者 | 工程治理敏感的核心贡献者 | 团队 / 多租户（Hub 方向） | 廉价硬件 / 自建用户 | 桌面端个人 + macOS/Linux | 多 agent group 共享通道 | 多实例部署个人用户 | 中文用户 + 长任务场景 |
| **技术架构** | SQLite/WAL 单体状态 + worker 分层 | Rust + Nix 打包 + 插件宿主中介 | Console 前端 + ToolCoordinator 后端 | Zig 原生 + 可配置栈尺寸 | MCP + Desktop + 流式 SSE | skills 化凭证网关（OneCLI/Iron Proxy） | provider registry + WebUI | Electron 桌面 + OpenClaw 运行时 |
| **治理风格** | 高吞吐合并，核心贡献者驱动 | RFC / tracker 驱动，维护者决策队列 | 维护者发起路线图讨论 | 高严重度问题快速修复闭环 | 评审瓶颈但桌面债务快速消化 | 报障-修复闭环（glifocat 主力） | 可靠性收敛窗口 | 批量 stale 清理 |

**关键架构分化**：
- **状态层**：OpenClaw 押注 SQLite/WAL 集中式（代价是 WAL 治理），NullClaw/ZeroClaw 走原生数据库路径（Zig/Rust），CoPaw 引入 ToolCoordinator 显式登记工具调用生命周期。
- **凭证/权限层**：NanoClaw 将凭证网关完全 skills 化（OneCLI 默认 + Iron Proxy 新增），Hermes 走 provider scopes 多命名凭证，代表两种不同的多租户安全抽象。
- **发布形态**：Hermes/NanoClaw/LobsterAI 以 Desktop 为主战场（因此更新流程缺陷直接伤害终端用户），OpenClaw/ZeroClaw 以网关/服务为主（因此托管升级与 systemd/计划任务可靠性成为核心）。

---

## 6. 社区热度与成熟度

**分层判断**：

**第一层 · 极高速迭代（规模领先，稳定性债高）**
- **OpenClaw**：1000 条/日更新，社区规模断层领先，但 P0 密集 + 发布链路不可靠，处于"跑在前面、边跑边修"状态。
- **ZeroClaw / CoPaw / Hermes**：日更新 50–80 条，PR 积压显著（待合并:已合并 ≈ 3–9:1），评审带宽是共同瓶颈。均处于**功能栈评审期**（ZeroClaw 多个 size:XL one-PR-per-stack、CoPaw 24 条待合并、Hermes 44 条待合并）。

**第二层 · 质量巩固阶段（吞吐健康，方向收敛）**
- **NanoBot**：关闭 > 新开，p0 当日修复，明确处于 0.3.5 发布后回归收口。
- **NullClaw**：单日一次性关闭 4 个崩溃/挂起级问题 + 调度器认证缺陷，修复链路通畅。
- **NanoClaw**：发布后 12 条 PR 合并，报障-修复闭环紧密（glifocat 单人驱动）。
- **LobsterAI**：46 条 PR 关闭但以 stale 历史归档为主，净增量有限，属"维护强度高、增量低"的清理型活跃。

**第三层 · 低活跃 / 停摆**
- **IronClaw**：RC 准备期，3 条 risk: low PR，核心团队 + CI 机器人驱动，无社区输入。
- **Moltis**：仅 1 条停滞 8 天的 PR，零合并零发布，健康度数据不足以评估。
- **PicoClaw**：代码停滞 + **TLS 证书过期 12 天未修**，运维响应能力受质疑。
- **TinyClaw / ZeptoClaw**：24 小时无活动。

**成熟度警示信号**：LobsterAI 5 条安全 Issue（#2176、#2181、#2286、#2287、#2288）以 `[stale]` 关闭但**无公开修复依据**，这类"静默归档安全反馈"的做法在成熟项目中不可接受，是治理成熟度的负面样本。

---

## 7. 值得关注的趋势信号

**① 升级链路成为独立的一等工程问题。**
样本中 5 个项目在升级/Doctor/服务托管环节独立失血，且多为跨版本反复。对开发者的参考：**发布自动化必须覆盖平台矩阵（macOS 公证、arm64/amd64、Windows 计划任务）与回滚路径验证**，仅夜间构建不足以支撑规模化用户。OpenClaw 9.6 的"构建崩溃→当日重建→要求用户重下 DMG"是典型反例。

**② 上下文预算从"够不够用"转向"管不管得住"。**
CoPaw 三条独立 Issue 分别指向 base64 无界累积、compaction 超预算、硬编码回退；NanoBot 的 p0 竞态是 compact 覆盖并发写入。这提示**上下文管理需要成为有锁、有配额、有可观测指标的子系统**，而非散落在调用点的启发式逻辑。

**③ 多 agent 从"能并发"到"可隔离、可辨识、可配额"。**
OpenClaw 632-fleet 事件循环饥饿、ZeroClaw 主机级准入控制 RFC、NanoClaw 共享身份标识 PR、Hermes provider scopes——四家从不同角度逼近同一结论：**单机多 agent 需要显式的资源上界与身份语义**，否则延迟问题会退化为稳定性崩溃（ZeroClaw #10970 原话）。

**④ "无产品内恢复路径"是最高转化率的体验缺口。**
Hermes #110054 统计本周 13 个 issue + 4 个 Discord 线程（9 名用户）遭遇同一故障，且用户"重启/问 agent/跑 doctor --fix 越操作越糟"。与之呼应的是 NullClaw 对 /status 端点的持续请求、LobsterAI 对进度可见性的诉求。**为已知失败态提供一键恢复与状态可观测，可能是当前投入产出比最高的打磨方向。**

**⑤ 低资源 / 异构硬件是尚未兑现的承诺。**
NullClaw 定位"弱、廉价、低资源设备"却在 web_search 可用性（#871，9 评论）与 WSL2/aarch64 上失守；NanoClaw Iron Proxy 在 DGX Spark（aarch64）以 `exec format error` 直接退出。**宣称的平台覆盖需要真实硬件回归测试支撑**，否则新功能会因架构不匹配而形同虚设。

**⑥ Provider 适配层是持续的高频摩擦面。**
NanoBot（Responses API、GPT-6 via Copilot、deepseek-flash 400）、PicoClaw（opencode-go）、Hermes（gpt-6-astra 目录陈旧）、CoPaw（Moonshot anyOf schema、file:// 媒体 URL）、ZeroClaw（provider alias 保留）——**多供应商协议差异的适配成本不会随生态成熟而下降**，反而随模型迭代加速。对开发者的参考：将 provider 适配做成可插拔的注册表 + 契约测试矩阵（如 Hermes PR #121408 的 provider-catalog E2E 矩阵），比逐案修复更具规模效益。

**⑦ 评审带宽是生态级稀缺资源。**
Hermes 7.3:1、ZeroClaw 9:1 的待合并:已合并比，叠加 Hermes #88584（137 评论、积压 5 周）与 ZeroClaw #8692 决策队列（15 评论、2.7 个月），说明**维护者注意力已成为比贡献者供给更紧的约束**。CoPaw 的首次贡献者集中提交修复 PR 是正面信号，但若合并管道不畅，这类贡献者极易流失。对项目的建议：对 `good first issue` 类改动（如 NanoBot #5896）与低风险修复（如 NanoClaw #3878）设置快速通道，避免与 size:XL 重构争抢同一评审队列。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-24

## 1. 今日速览

过去 24 小时项目保持高强度活跃：共 28 条 PR 更新（19 条合并/关闭、9 条待合并），8 条 Issue 更新（3 条新开/活跃、5 条关闭），但**无新版本发布**。合并侧集中在稳定性修复——后台任务异常上报、记忆压缩并发覆盖（p0）、provider 历史回填等，说明维护者正在为 0.3.5 发布后的回归问题快速收口。新开 Issue 呈现出两条主线：**渠道行为精细化**（静默上下文压缩、微信轮询日志降噪）与**新模型/协议适配**（GPT-6 系列经 GitHub Copilot、OpenAI Responses API）。整体健康度良好：关闭量大于新开量，且多条高优先级 fix 已落地。

链接：[Issue #2152](https://github.com/HKUDS/nanobot/issues/2152) · [Issue #5429](https://github.com/HKUDS/nanobot/issues/5429) · [Issue #5524](https://github.com/HKUDS/nanobot/issues/5524) · [Issue #5881](https://github.com/HKUDS/nanobot/issues/5881) · [Issue #2160](https://github.com/HKUDS/nanobot/issues/2160) · [Issue #5900](https://github.com/HKUDS/nanobot/issues/5900) · [Issue #5898](https://github.com/HKUDS/nanobot/issues/5898) · [Issue #5896](https://github.com/HKUDS/nanobot/issues/5896)

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#5431 fix(agent): report background task failures**（CLOSED）— 将后台任务的 `set.discard` 回调替换为生命周期感知的完成处理器，意外异常只上报一次并附带任务名与 traceback，成功与取消保持静默。直接闭环 Issue #5429 中 AgentLoop 不回收后台任务异常的问题。链接：[PR #5431](https://github.com/HKUDS/nanobot/pull/5431)
- **#5884 fix(memory): prevent history compaction from overwriting concurrent appends**（CLOSED，p0）— 让 `compact_history()` 复用 `_append_lock`，消除读取快照后写入覆盖并发追加记录的竞态。这是本日唯一 p0 级修复，对记忆持久化正确性影响最大。链接：[PR #5884](https://github.com/HKUDS/nanobot/pull/5884)
- **#5894 fix(providers): backfill missing reasoning history for deepseek-flash**（CLOSED）— 修复 `deepseek-flash` 在默认 thinking 模式下收到缺少 `reasoning_content` 的工具调用历史时返回 HTTP 400 的问题，属已有 backfill 行为的扩展。链接：[PR #5894](https://github.com/HKUDS/nanobot/pull/5894)
- **#5824 fix(tools): keep read_file progressing on oversized lines**（CLOSED）— 当首个选中行超过 128,000 字符预算时返回有界前缀并推进续读偏移，避免空结果导致同一偏移被反复重试。链接：[PR #5824](https://github.com/HKUDS/nanobot/pull/5824)
- **#5602 feat(webui): add completion notification sound**（CLOSED）— 闭环 Issue #5524，提供默认关闭的 `notificationSound` 本地偏好，turn 结束后给出可听提示。链接：[PR #5602](https://github.com/HKUDS/nanobot/pull/5602)
- **#5895 feat(webui): invite returning users to star nanobot**（CLOSED）— 为回访 WebUI 用户增加可选 GitHub Star 邀请，并在 Settings → About 底部加入独立 Star 链接，保留原有源码、文档、报障入口。链接：[PR #5895](https://github.com/HKUDS/nanobot/pull/5895)
- **#5897 refactor: remove unused helpers and internal exports**（CLOSED）— 清理四个无调用方的 helper，并将 WebUI/TUI 辅助类型收紧为文件私有。链接：[PR #5897](https://github.com/HKUDS/nanobot/pull/5897)
- **#5848 feat(webui): deliver image results in replies**（CLOSED）— 在回复末尾交付截图与生成图像结果，本次范围聚焦图片交付（实验性 Mermaid 渲染已撤出）。链接：[PR #5848](https://github.com/HKUDS/nanobot/pull/5848)
- **#5901 fix(webui): allow custom context window token budgets**（CLOSED）— 把上下文窗口控件从五个固定值改为文本输入，支持精确数值与十进制 K/M 简写。链接：[PR #5901](https://github.com/HKUDS/nanobot/pull/5901)

总体看，今日推进以**可靠性收敛**为主，辅以 WebUI 体验补齐；未引入新版本，项目处于修复整合窗口。

## 4. 社区热点

在给定数据中，PR 评论数均未提供（`undefined`），故以 Issue 的评论与点赞数据为准：

- **Issue #2152（WhatsApp 语音消息 STT+TTS）** — 2 条评论、2 个 👍，为今日反应最高的条目。作者 felixbk98 已用 Fish Audio 集成实现并可独立分发为 skill，但**每次更新后都需要给 WhatsApp bridge 打补丁**。背后诉求：把已验证的第三方能力收编为原生支持，或提供稳定的 bridge 扩展点。链接：[Issue #2152](https://github.com/HKUDS/nanobot/issues/2152)
- **Issue #5881（0.3.5 要求 `_nanobot` 必须搬到 workspace 外）** — 1 条评论，标注为 bug/regression/p2。多实例用户升级后被新的 `Config.runtime_dat...` 校验规则拒绝启动。背后诉求：workspace 与运行时配置目录的边界设计需要一个可配置或向后兼容的迁移路径。链接：[Issue #5881](https://github.com/HKUDS/nanobot/issues/5881)
- **Issue #5429 / #5524 / #2160** 各有 1 条评论，已关闭，反映出维护者对可复现问题的响应节奏较快。

## 5. Bug 与稳定性

按严重程度排列：

1. **[p0 · 已修复] 记忆压缩覆盖并发写入** — `compact_history()` 未持有 `_append_lock`，可能与 `_append_history_record()` 的追加操作互相覆盖，造成历史记录丢失。已有 fix PR #5884（已关闭）。链接：[PR #5884](https://github.com/HKUDS/nanobot/pull/5884)
2. **[p2 · 回归] 0.3.5 校验规则阻断多实例启动** — Issue #5881：`_nanobot/sessions` 落在 workspace 内时直接拒绝启动，影响升级用户的既有部署；**暂未见对应 fix PR**。链接：[Issue #5881](https://github.com/HKUDS/nanobot/issues/5881)
3. **[未标级别 · 新报告] GPT-6 系列经 GitHub Copilot 不可用** — Issue #5898：v0.3.5 报 "Model provider request failed"，影响通过 Copilot 接入的模型系列；**暂无 fix PR**。链接：[Issue #5898](https://github.com/HKUDS/nanobot/issues/5898)
4. **[p2 · 已修复] deepseek-flash HTTP 400** — 工具调用历史缺少 `reasoning_content`；fix PR #5894 已关闭。链接：[PR #5894](https://github.com/HKUDS/nanobot/pull/5894)
5. **[p2 · 已修复] read_file 超大行停滞** — 偏移不推进导致重复返回空结果；fix PR #5824 已关闭。链接：[PR #5824](https://github.com/HKUDS/nanobot/pull/5824)
6. **[p2 · 待合并] Discord 反应状态清理** — PR #5807（OPEN）跟踪延迟 working-emoji 任务，在回复清理与运行时重置时取消并等待挂起反应工作、释放消息引用。链接：[PR #5807](https://github.com/HKUDS/nanobot/pull/5807)

整体判断：已知高优先级缺陷当日均有修复落地，但 **0.3.5 升级路径上的启动校验回归**仍缺少修复，是当前最需要关注的风险点。

## 6. 功能请求与路线图信号

- **静默上下文压缩 + 微信渠道轮询日志降噪**（Issue #5900，OPEN，今日新开）— 用户设置 `idleCompactAfterMinutes: 15` 时，压缩过程会向渠道发送通知；同时希望降低微信轮询日志的冗长度。**已有对应 PR #5780（OPEN）**：让自动压缩通知不可见，同时为 `/compact` 保留通知。该 PR 作者同时指出不确定 #5656 的通知是否为预期行为，若是有意设计则请求补充说明。两项信号叠加，**该改动进入下一版本的可能性较高**。链接：[Issue #5900](https://github.com/HKUDS/nanobot/issues/5900) · [PR #5780](https://github.com/HKUDS/nanobot/pull/5780)
- **opencode_go 支持 OpenAI Responses API**（Issue #5896，OPEN，good first issue，p2）— `muse-spark-1.3-contributor` / `muse-spark-1.2-contributor` 需要 `/responses` 线格式，当前网关 `/chat/completions` 路由对其返回 500。属明确的新 provider 协议适配需求，被标为 good first issue，**适合新贡献者切入**。链接：[Issue #5896](https://github.com/HKUDS/nanobot/issues/5896)
- **Opper 作为内置 provider**（PR #5845，OPEN）— 参照既有 Eden AI / OrcaRouter 网关条目，在 `nanobot/providers/registry.py` 中新增 `ProviderSpec(name="opper", …)`，位置紧随 Eden AI 之后。属 provider 生态扩张类改动。链接：[PR #5845](https://github.com/HKUDS/nanobot/pull/5845)
- **钉钉群真 @ 提及**（PR #5899，OPEN）— 当前用 `# @name` markdown 头部做视觉伪装，无法触发真实通知；改为通过 sessionWebhook 发送真实 @。链接：[PR #5899](https://github.com/HKUDS/nanobot/pull/5899)
- **Telegram 话题重命名为会话标题**（PR #5902，OPEN）— 抽取会话标题生成为共享的 `nanobot.session.titles` 模块，并在 WebUI 与私聊 Telegram 话题 turn 后持久化、重命名。链接：[PR #5902](https://github.com/HKUDS/nanobot/pull/5902)
- **上下文窗口回退预算保护**（PR #5865，OPEN，p2）— 256K 主预设配置 200K 回退时，较小的回退窗口不再削减主预算。链接：[PR #5865](https://github.com/HKUDS/nanobot/pull/5865)
- **WhatsApp 原生语音消息**（Issue #2152，已关闭）与 **WhatsApp 启动通知**（Issue #2160，已关闭）— 均来自同一作者的独立 skill，附带"需在每次更新后 patch bridge"的结构性痛点，长期看指向 bridge 扩展机制的需求。

## 7. 用户反馈摘要

- **渠道通知噪声困扰多用户**：Issue #5900 明确表示自动压缩通知不应发往渠道；PR #5780 作者也质疑 #5656 的意图，反映渠道内通知粒度缺少用户侧控制。
- **长任务等待缺少反馈**：Issue #5524 描述用户在 WebUI 等待工具调用、文件编辑、shell 命令执行时"页面没有明显提示，需要刷新页面或盯着屏幕才能发现新消息"。该痛点已由 PR #5602 以默认关闭的可选铃声解决。
- **多实例部署体验受损**：Issue #5881 用户质疑"同一个实例 workspace 为啥要把 `_nanobot` 单独放出去"，认为新校验规则破坏了既有目录布局。
- **第三方集成维护成本高**：Issue #2152 作者指出 Fish Audio WhatsApp 集成虽已可用，但"每次更新后都需要 patch WhatsApp bridge"。
- **provider 兼容性预期落差**：Issue #5898 报告 v0.3.5 不支持经 GitHub Copilot 使用 GPT-6 系列；Issue #5896 报告特定模型在网关路由下返回 500，用户对模型/协议覆盖面的期待持续提升。
- **满意信号**：Issue #5848 的图片交付、PR #5895 的 Star 邀请等 WebUI 改进被快速合并，显示社区对体验类小改进的接受度高。

## 8. 待处理积压

- **Issue #5881（0.3.5 启动校验回归，p2）** — 创建于 2026-09-23，今日更新但仍为 CLOSED 且**未在给定数据中看到对应 fix PR**。涉及升级路径与多实例部署，建议优先确认是否需要放宽或可配置化该校验。链接：[Issue #5881](https://github.com/HKUDS/nanobot/issues/5881)
- **Issue #5898（GPT-6 via GitHub Copilot 报错）** — 今日新开、0 评论、无 fix PR，属新模型支持空白。链接：[Issue #5898](https://github.com/HKUDS/nanobot/issues/5898)
- **PR #5807（Discord 反应状态清理，p2，OPEN）** — 创建于 2026-09-18，已跨 6 天待合并，涉及挂起任务取消与消息引用释放。链接：[PR #5807](https://github.com/HKUDS/nanobot/pull/5807)
- **PR #5780（停止发送上下文压缩通知，p2，OPEN）** — 创建于 2026-09-15，是今日新开 Issue #5900 的现成实现，建议尽快给出取舍结论以免重复讨论。链接：[PR #5780](https://github.com/HKUDS/nanobot/pull/5780)
- **PR #5845（Opper 内置 provider，OPEN）** — 创建于 2026-09-21，标签较多（documentation/question/provider/webui/new-provider/feature/test），可能需要维护者就注册规范给出答复。链接：[PR #5845](https://github.com/HKUDS/nanobot/pull/5845)

**维护者行动建议**：优先处理 #5881 的修复 PR 与 #5780、#5807 两个已具备实现但待合并的 p2 改动；对 #5900 与 #5780 的重叠做出明确回应；#5896 已标记 good first issue，可主动招募贡献者。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-24

> 数据来源：NousResearch/hermes-agent GitHub 公开活动（过去 24 小时）。本报告仅基于所提供数据，未含外部推断。

---

## 1. 今日速览

过去 24 小时项目维持高活跃度：Issues 更新 50 条（新开/活跃 30、关闭 20），PR 更新 50 条（待合并 44、已合并/关闭 6），并发布 1 个补丁版本 v0.21.5 (v2026.9.24)。PR 积压明显——待合并占比 88%（44/50），说明贡献涌入速度快于合并速度，评审带宽是当前瓶颈。Issues 侧关闭率达 40%，清理节奏正常但与 PR 积压形成反差。当日讨论集中在会话状态恢复、MCP OAuth、桌面端更新流程三条主线。

---

## 2. 版本发布

### v2026.9.24 — Hermes Agent v0.21.5

- **类型**：补丁版本（Patch release）
- **发布日期**：2026 年 9 月 24 日
- **内容说明**：该 tag 将自 v0.21.4 以来合并的约 **460 个 PR** 汇总为一个稳定发布标签，供下游消费方使用（Docker 镜像、Hermes Cloud、托管部署）。完整逐条整理说明**延期发布**（原文在 "deferred to" 处截断，未给出目标位置）。
- **破坏性变更**：所给数据中未提及。
- **迁移注意事项**：所给数据中未提及。下游消费者可将其视为稳定标签用于镜像与托管部署；具体变更清单待正式 notes 发布后再行核对。

---

## 3. 项目进展

当日已合并/关闭的 PR 共 6 条，其中代表性的有：

- **PR #24125 [CLOSED]** feat: add OpenRouter TTS to setup wizard — 将 OpenRouter TTS 作为原生可选项加入 `hermes setup tts` 向导（含 provider map、提示列表与状态显示）。链接：NousResearch/hermes-agent PR #24125
- **PR #94387 [CLOSED]** fix(wake-word): share mic stream for post-wake capture (Intel Mac AUHAL race) — 修复 Intel Mac / macOS AUHAL 设备上唤醒后语音接管失败的问题（避免在同设备上 120ms 内关闭并重开麦克风流）。链接：NousResearch/hermes-agent PR #94387
- **PR #120790 [CLOSED]** feat(desktop): setting to always open links in the external browser —（标记为 duplicate）新增设备级开关「始终用外部浏览器打开链接」，默认关闭。链接：NousResearch/hermes-agent PR #120790

**整体推进幅度评估**：当日合并量（6）远低于待合并量（44），因此 v0.21.5 所述的「约 460 个 PR」主要来自本日之前的累积窗口。当日实际向前推进有限，属于典型的「评审瓶颈日」——大量修复已提交但尚未进入主干。

---

## 4. 社区热点

按评论数排序，当日最活跃的讨论：

1. **Issue #88584 [OPEN]** Automated Nous integration is blocked — 137 条评论，远超其他条目。`cron/jobs.py` 存在合并冲突，导致计划中的 Nous-to-Enterkey 合并受阻；无发布分支变更，dashboard updater 停留在上一测试版本。链接：NousResearch/hermes-agent Issue #88584
   → **诉求**：自动化集成流水线的阻塞需要人工介入，社区在持续追问进展（137 条评论反映出高关注度与长期未解）。
2. **Issue #89412 [OPEN]** MCP OAuth flow never triggers for servers that don't challenge unauthenticated requests（如 Gmail MCP）— 11 条评论。OAuth 流程仅在 MCP 服务器返回 401/auth-challenge 时反应式触发，对不主动挑战的服务器失效。链接：NousResearch/hermes-agent Issue #89412
3. **Issue #110054 [OPEN]** Pain cluster: deleted-WAL guard 触发后缺乏产品内恢复手段 — 10 条评论。本周 4 个 Discord 线程（9 名用户）+ 13 个 GitHub issue 指向同一故障，用户重启/询问 agent/运行 `doctor --fix` 反而加重问题。链接：NousResearch/hermes-agent Issue #110054
4. **Issue #75801 [CLOSED]** OpenCode Go `gpt-5.6-luna` 缺失 `finish_reason` → 4 次虚假「网络中断」续传，桌面端丢弃流式回答 — 8 条评论，1 👍。链接：NousResearch/hermes-agent Issue #75801

**热点解读**：当日社区注意力集中在**跨系统集成可靠性**（#88584）与**会话状态/流式恢复**（#110054、#75801）两类问题上，均属用户可感知的数据或流程损失类缺陷。

---

## 5. Bug 与稳定性

按影响面与严重度排列（P2 优先）：

| 严重度 | Issue | 摘要 | fix PR |
|---|---|---|---|
| P2 | [#110054](https://github.com/NousResearch/hermes-agent/issues/110054) | deleted-WAL guard 触发后无产品内恢复路径；本周 13 个 issue + 4 个 Discord 线程 | 未在所给数据中见到 |
| P2 | [#89412](https://github.com/NousResearch/hermes-agent/issues/89412) | MCP OAuth 流程对不挑战未认证请求的服务器从不触发（如 Gmail MCP） | 未在所给数据中见到 |
| P2 | [#120014](https://github.com/NousResearch/hermes-agent/issues/120014) | `hermes update`（v0.21.0 → v0.21.4）post-update cleanup 抛 TypeError，并输出虚假 "unknown toolset" 警告 | 未在所给数据中见到 |
| P2 | [#121456](https://github.com/NousResearch/hermes-agent/issues/121456) | TUI 启动期间输入 `/resume <id>` 被启动会话静默撤销 | 未在所给数据中见到 |
| P2 | [#105108](https://github.com/NousResearch/hermes-agent/issues/105108) | Desktop 在托管 SSH 更新完成前启动本地 updater，导致 Linux 上 30 秒退出超时 | 未在所给数据中见到 |
| P3 | [#120310](https://github.com/NousResearch/hermes-agent/issues/120310) | 插件 API 路由 `/api/plugins/<id>/…` 无 profile secret scope，多 profile 托管下凭证读取 fail closed | 未在所给数据中见到 |
| P2 | [#108530](https://github.com/NousResearch/hermes-agent/issues/108530) | 线上文档站 `model-catalog.json` 仍是 8 月 21 日快照，缺 `openai/gpt-6-astra` 等新模型 | 未在所给数据中见到 |

**当日关闭的相关修复**（可视为已消解）：

- [#75801 CLOSED] 流式 `finish_reason` 缺失导致的虚假中断与桌面端丢答案。
- [#100412 CLOSED] 混合插件仓库 agent + desktop 两半同时安装时插件被加载两次。
- [#118944 CLOSED] 桌面端 per-bot「add from catalog」将 catalog id 误传给内置 preset registry，导致必然失败。
- [#71866 CLOSED] 桌面端更新后侧边栏完全空白（history 与 pinned 会话消失，`state.db` 完好）。
- [#105184 CLOSED] 应用内桌面更新静默产出损坏的 renderer bundle → 白屏（`Uncaught SyntaxError`）。

**趋势判断**：桌面端**更新流程**（#105108、#105184、#71866）是明显的故障聚集区，历史问题多已关闭，但 Linux 侧的超时问题仍开放。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 相关 PR / 信号 | 纳入下一版本可能性 |
|---|---|---|---|
| [#31375](https://github.com/NousResearch/hermes-agent/issues/31375) [P3, 3👍] | 工具级（低于 toolset 粒度）的 enable/disable，例如单独关闭 `web_search` 而保留 `web_extract` | 未见于所给 PR 列表 | 中——有明确用户场景且获 3 个 👍，但优先级 P3 |
| [#118285](https://github.com/NousResearch/hermes-agent/issues/118285) [P2, needs-decision] | Provider scopes：同一 provider 下多个命名凭证（个人/工作密钥切换） | **PR [#121408](https://github.com/NousResearch/hermes-agent/pull/121408)** 新增 provider-catalog E2E 矩阵（凭证路由、base URL、dialect turn、usage、listing、switch、fallback、OAuth），覆盖凭证路由与切换，属前置基建 | 较高——已有 P2 + needs-decision 标签且有对应测试基建 PR |
| [#78714](https://github.com/NousResearch/hermes-agent/issues/78714) [P3] | Telegram Bot API 10.2 checklists 支持（`sendChecklist`/`editMessageChecklist`、`InputChecklist`/`ChecklistTask` 类型） | 未见于所给 PR 列表 | 低——纯功能补全，P3 |
| [#75033](https://github.com/NousResearch/hermes-agent/issues/75033) 已关闭 | 流式 TTS provider 资格认证与 Fish 一致性（TTFA、RTF、抖动、欠载等指标） | 归属父规范 #75029 | 已推进（issue 关闭） |
| [#119311](https://github.com/NousResearch/hermes-agent/pull/119311) [OPEN, docs/i18n] | 巴西葡萄牙语文档 locale 起步（注册 `pt-BR`，翻译落地页，未翻译页回退） | 该 PR 本身即实现，源自 #119295 | 中——首片已提交，待合并 |

**信号总结**：`needs-decision` 标签出现在 #118285 与 #110054 上，说明这两项需要维护者做出产品决策而非单纯修复。

---

## 7. 用户反馈摘要

**不满意 / 痛点：**

- **恢复路径缺失是最大痛点**：#110054 统计本周 4 个 Discord 线程（9 名用户）+ 13 个 GitHub issue，用户遇到 deleted-WAL guard 后只能「重启 / 问 agent / 跑 `doctor --fix`」，且**越操作越糟**——这是典型的「无产品内恢复」体验缺口。
- **桌面端更新体验反复出问题**：#105108（更新超时）、#105184（更新后白屏）、#71866（更新后侧边栏清空但 `state.db` 完好）显示用户对更新流程信任度低，且反复验证数据实际仍在、只是 UI 丢失。
- **配置修改的边界情况困扰用户**：#43140（VLLM 允许带引号的空格模型名，Hermes 一律拒绝）、#120014（`hermes update` 自身配置迁移步骤打印虚假 "unknown toolset" 警告）。
- **文档与实际能力脱节**：#108530 指出线上 `model-catalog.json` 停留在 8 月 21 日快照，缺少新模型，用户按文档配置会踩空。

**满意 / 正向信号：**

- [#31375](https://github.com/NousResearch/hermes-agent/issues/31375) 与 [#75801](https://github.com/NousResearch/hermes-agent/issues/75801) 各获 3 个和 1 个 👍，说明细粒度工具配置与流式稳定性是社区愿意背书的改进方向。
- 大量桌面端/流式相关 issue 在当日关闭（#75801、#100412、#118944、#71866、#105184），反映维护者在快速消化历史债务。

**使用场景观察**：多 profile 托管（#120310）、Linux 桌面安装（#105108、#105184）、macOS 过夜运行（PR #121487）、Windows 平台（PR #70855 的 `risk-platform-windows` 标签）、Telegram 自动化（#78714）是当日数据中反复出现的部署形态。

---

## 8. 待处理积压

以下条目创建时间较早、至今仍 OPEN，建议维护者优先分诊：

| 条目 | 创建日期 | 积压时长 | 备注 |
|---|---|---|---|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) Automated Nous integration is blocked | 2026-08-17 | 约 5 周 | **137 条评论**，`cron/jobs.py` 冲突需人工解决；关注度最高但长期未解 |
| [#89412](https://github.com/NousResearch/hermes-agent/issues/89412) MCP OAuth flow never triggers | 2026-08-18 | 约 5 周 | 11 条评论，P2，影响 Gmail 等 MCP 服务器接入 |
| [#31375](https://github.com/NousResearch/hermes-agent/issues/31375) Per-tool enable/disable in config | 2026-05-24 | **约 4 个月** | P3 但已有 3 👍，需求明确，长期未见对应 PR |
| [#78714](https://github.com/NousResearch/hermes-agent/issues/78714) Telegram Bot API 10.2 checklists | 2026-08-04 | 约 7 周 | P3，功能域完全缺失 |
| [#108530](https://github.com/NousResearch/hermes-agent/issues/108530) model-catalog.json 陈旧 | 2026-09-11 | 约 2 周 | 线上文档站数据滞后，修复成本低、影响面广 |
| [PR #80822](https://github.com/NousResearch/hermes-agent/pull/80822) fix: skip None chunks in streaming API responses | 2026-08-07 | 约 7 周 | P2 流式修复，OPEN 未合并 |
| [PR #81426](https://github.com/NousResearch/hermes-agent/pull/81426) fix(cron): name the real cause when no model resolves | 2026-08-08 | 约 7 周 | P2 cron 配置错误诊断，OPEN 未合并 |
| [PR #70855](https://github.com/NousResearch/hermes-agent/pull/70855) fix(arxiv-skill): decouple curl from python parsing | 2026-07-24 | 约 2 个月 | P3，skill 安全扫描合规 |

**维护者提示**：当日 **44 个待合并 PR** 对 **6 个已合并**，比例约 7.3:1；同时 #88584 已积累 137 条评论仍处于 OPEN。建议优先处理 (a) 长期 OPEN 且带 P2 标签的 PR（#80822、#81426），(b) 讨论热度最高的 #88584，(c) 零成本高收益的 #108530。

---

*报告生成时间：2026-09-24 ｜ 数据窗口：过去 24 小时 ｜ 所有链接均指向 NousResearch/hermes-agent 仓库*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-24

## 1. 今日速览

过去 24 小时项目活跃度偏低但方向明确：无新版本发布，无 PR 合并或关闭，仅 1 条 Issue 更新与 2 条 PR 更新，且两条 PR 均处于 OPEN 待合并状态。今日最受关注的是 Issue #3377——项目主页 picoclaw.io 的 TLS 证书已于 2026-09-10 过期，导致网站在所有浏览器中不可访问，这是影响项目对外形象的关键基础设施问题。两项待合并 PR 分别聚焦新增 provider（opencode-go）与新增 web_search 后端（Keenable），显示社区在扩展工具与模型接入生态。整体健康度：代码侧推进停滞，但社区贡献意愿仍在；运维侧存在需立即处理的高优先级故障。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，项目代码主线未向前推进。两条待合并 PR 仍处于 OPEN 状态：

- **PR #3371 [OPEN] [stale]** — `feat(providers): add opencode-go provider with session header support`，作者 EMTumariscal，创建于 2026-09-08，最后更新 2026-09-24。新增专用 `opencode-go` provider（`https://opencode.ai/zen/go/v1`），按模型 ID 自动路由到正确的 endpoint family，并支持 `x-opencode-s...` 会话头。该 PR 已被标记为 stale，需要维护者关注。[链接](sipeed/picoclaw PR #3371)
- **PR #3370 [OPEN]** — `feat(tools): add Keenable web search provider`，作者 ilya-bogin-keenable，创建于 2026-09-07，最后更新 2026-09-23。将 Keenable（`https://keenable.ai`）加入 `web_search` provider，全新安装无需 API key 即可使用：设置 `tools.web.keenable.enabled` 为 `true` 后，工具会调用 Keenable 公共端点。[链接](sipeed/picoclaw PR #3370)

## 4. 社区热点

- **Issue #3377 [OPEN] [CRITICAL]** — `TLS certificate for picoclaw.io expired on 2026-09-10 — site is down for every browser`，作者 dimonb，创建于 2026-09-12，更新于 2026-09-23，评论 2 条，👍 1。摘要指出 https://picoclaw.io（仓库链接的项目主页）提供的 TLS 证书已于 2026-09-10 23:59:59 UTC 过期，所有浏览器与 TLS 客户端均拒绝连接，网站实际处于不可访问状态。[链接](sipeed/picoclaw Issue #3377)

背后的诉求：用户希望项目对外主页保持可用与可信，证书过期直接影响新用户的第一印象与信任度，且从创建（09-12）到更新（09-23）跨越 11 天仍未解决，可能引发对项目维护响应能力的质疑。

## 5. Bug 与稳定性

按严重程度排列：

- **[CRITICAL] picoclaw.io TLS 证书过期，站点对所有浏览器下线** — Issue #3377，证书于 2026-09-10 23:59:59 UTC 过期，所有 TLS 客户端拒绝连接。截至目前数据中未见关联 fix PR。[链接](sipeed/picoclaw Issue #3377)

今日无其他崩溃、回归类 Bug 报告。

## 6. 功能请求与路线图信号

结合今日 PR 判断，以下能力最有可能成为下一版本候选：

- **新增 opencode-go provider（PR #3371）**：让 PicoClaw 可持续使用 OpenCode Go，并按模型 ID 自动路由 endpoint，属于模型接入层的扩展。该 PR 已被标记 stale，若维护者恢复评审，具备较高落地可能。[链接](sipeed/picoclaw PR #3371)
- **新增 Keenable web_search provider（PR #3370）**：主打"零 API key 即可开箱使用"，降低 web 检索功能的接入门槛，是工具生态的增量需求。[链接](sipeed/picoclaw PR #3370)

今日 Issues 中未出现新的独立功能请求。

## 7. 用户反馈摘要

基于今日数据（Issue #3377 的 2 条评论摘要可用，PR 评论数未提供）：

- 真实痛点：项目主页证书过期导致 https://picoclaw.io 在所有浏览器与 TLS 客户端中不可访问，用户直接从仓库点击主页链接会遭遇连接失败。
- 该 Issue 获得 1 个 👍，说明至少部分用户认同其重要性并希望尽快修复。
- 数据中未提供具体的满意度/不满意表述与更多使用场景，故不作推断。

## 8. 待处理积压

提醒维护者关注以下长期未决事项：

- **Issue #3377 [OPEN] [CRITICAL]** — 创建于 2026-09-12，更新至 2026-09-23，已持续约 12 天未关闭，属最高优先级运维故障。[链接](sipeed/picoclaw Issue #3377)
- **PR #3371 [OPEN] [stale]** — 创建于 2026-09-08，已被标记 stale，等待维护者评审或给出结论。[链接](sipeed/picoclaw PR #3371)
- **PR #3370 [OPEN]** — 创建于 2026-09-07，更新至 2026-09-23，尚无合并进展。[链接](sipeed/picoclaw PR #3370)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-24

## 1. 今日速览

项目今日活跃度**高**：24 小时内 Issues 更新 4 条（3 开 1 闭）、PR 更新 25 条（13 待合并、12 已合并/关闭），并发布 **v2.4.0**。`v2.4.0` 引入的技能化凭证网关（Iron Proxy 为新增项）、Mattermost 频道与 OpenCode provider 重构，直接催生了今日多条 Iron Proxy 相关报障与修复 PR。维护者 `glifocat` 是今日绝对主力，同时贡献了多条 issue 报告与 fix PR，形成“报障—修复”闭环。整体状态：**发布后集中修复期，核心团队响应迅速，但新网关（Iron Proxy）的跨平台与安装健壮性仍需观察**。

---

## 2. 版本发布

### v2.4.0
发布 PR：[#3877 chore(release): v2.4.0](https://github.com/nanocoai/nanoclaw/pull/3877)（已合并）

**更新内容**（据 release 说明）：
- **凭证网关通过 skills 安装**：OneCLI 仍为默认；新增 **Iron Proxy**。
- **社区门户（community-portal）配置**：用于 Echo 的加固镜像与托管 Slack app。
- **模型与速度控制**：支持安装级（install-wide）与按组（per-group）两档控制。
- **新增 Mattermost 频道**。
- **重构 OpenCode provider**。

**破坏性变更 / 迁移注意事项**：所提供材料中未说明破坏性变更或迁移步骤，仅有 operator-facing 分类格式的 curated notes 从 `[Unreleased]` 移至 `## [2.4.0]`，因此不对迁移影响作推测。

> 观察信号：v2.4.0 中新增的 Iron Proxy 在发布当日即出现多条安装/运行问题（见第 5 节），升级到该版本并计划使用 Iron Proxy 的用户需留意 arm64 兼容性与重装清理问题。

---

## 3. 项目进展

今日合并/关闭的重要 PR（按领域）：

**核心与 CLI 正确性**
- [#3882 fix(cli): list every approval status and drop reason the host writes](https://github.com/nanocoai/nanoclaw/pull/3882)（已关闭）— 使 `ncl approvals help` 与 `ncl dropped-messages help` 与实际写入的 status/reason 枚举一致。
- [#3885 fix(setup): keep the Claude CLI offer to runs that chose Claude](https://github.com/nanocoai/nanoclaw/pull/3885)（已关闭）— 修正 setup 失败时错误提示安装 Claude CLI 的问题。

**原生依赖健壮性**
- [#3879 fix: detect a broken (not just missing) better-sqlite3 in rebuild-native.mjs](https://github.com/nanocoai/nanoclaw/pull/3879)（已关闭）— 原检查仅用 `require` 判断“缺失”，现可识别“存在但加载失败”的 native addon。

**历史遗留清理**
- [#12 Fix: only update lastAgentTimestamp on agent success](https://github.com/nanocoai/nanoclaw/pull/12)（已关闭，创建于 2026-02-01）— 此前失败也会推进 `lastAgentTimestamp`，导致重试时消息被跳过；现仅在成功时推进。这是一条**存续约 7 个月**的老 PR 落地。

**整体推进度**：今日合并/关闭 12 条 PR，覆盖 CLI 帮助文本一致性、安装流程、native 依赖检测、历史消息重试缺陷等，属于**发布后质量收敛**性质，未引入大型新功能；项目在 v2.4.0 基础上的稳定性有净提升。

---

## 4. 社区热点

⚠️ 说明：所提供数据中所有展示的 Issues 与 PR 的**评论数均为 `undefined` 或 0，👍 均为 0**，因此无法据实判断“讨论最活跃/反应最多”。以下按**主题聚合度**列出今日关注焦点：

**热点一：Iron Proxy 新网关（今日最集中议题）**
- [#3888 Iron Proxy setup fails on arm64 hosts: Iron Control image is amd64-only](https://github.com/nanocoai/nanoclaw/issues/3888)
- [#3881 Iron Proxy: per-host auto-approval rule for tool skills](https://github.com/nanocoai/nanoclaw/issues/3881)
- [#3883 fix(iron-proxy): recover an orphaned Iron Control database on re-install](https://github.com/nanocoai/nanoclaw/pull/3883)

背后诉求：v2.4.0 刚把 Iron Proxy 作为可选凭证网关推出，用户（`glifocat`）在真实环境（NVIDIA DGX Spark，aarch64）验证时立刻撞上**镜像架构不匹配**与**重装残留卷**两类问题，并同时提出**按主机粒度的自动审批规则**以减少“每请求一张审批卡”的操作负担。反映出新网关在**多架构支持和长期可运维性**上尚未打磨完成。

**热点二：Agent 输出可辨识性（跨 agent 共享身份）**
- [#3509 delivery: pass the sending agent's label to channel adapters](https://github.com/nanocoai/nanoclaw/pull/3509)（OPEN，2026-08-25 创建，09-24 更新）
- [#3510 whatsapp: per-agent sender label in shared mode](https://github.com/nanocoai/nanoclaw/pull/3510)（OPEN，同上）

背后诉求：多个 agent group 共用一个消息群/同一 WhatsApp 身份（shared mode）时，所有回复都只显示安装级的 `ASSISTANT_NAME`，读者无法分辨是哪只 agent 在说话。这是一对**存续近一个月、仍未合并**的配套 PR。

**热点三：CI/发布流程治理**
- [#3886 ci: require a release note or the no-change box in PR descriptions](https://github.com/nanocoai/nanoclaw/pull/3886) — 摘要披露“91 个 PR 中有 59 个”缺少可直接入 changelog 的发布说明，试图用 CI 强制约束。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#3888 Iron Proxy setup fails on arm64 hosts](https://github.com/nanocoai/nanoclaw/issues/3888) — aarch64 主机上 Iron Control 的 `web` 容器以 `exec format error` 退出（镜像仅 amd64） | OPEN | 未见对应 fix PR |
| 🔴 高 | [#3828 update: cutover drain can never succeed](https://github.com/nanocoai/nanoclaw/issues/3828) — `/update-nanoclaw` 先停宿主服务、再等待 agent 容器退出；但宿主本身才是停容器的一方，导致更新在有容器运行时**永远无法完成**（死锁式设计缺陷） | **CLOSED**（2026-09-23 更新） | 未在本次材料中列出，但已关闭 |
| 🟠 中 | [#3874 OneCLI gateway: ownership check uses group existence, not installation identity](https://github.com/nanocoai/nanoclaw/issues/3874) — `ensureAgent({ name, identifier: agentGroupId })` 的归属校验依据组是否存在而非安装身份；作者已确认“非可利用漏洞” | OPEN | 未见对应 fix PR |
| 🟠 中 | [#3883 fix(iron-proxy): recover an orphaned Iron Control database on re-install](https://github.com/nanocoai/nanoclaw/pull/3883) — 删除 checkout 后，Iron Control 数据卷 `nanoclaw-iron-control-<slug>_database` 残留，导致重装无法成功 | OPEN（fix） | 本身即 fix |
| 🟡 低 | [#3889 fix(cli): drop unknown_sender_public from the dropped-messages reason list](https://github.com/nanocoai/nanoclaw/pull/3889) — #3882 从 `UNKNOWN_SENDER_POLICIES` 派生的 reason 枚举包含宿主从不写入的 `unknown_sender_public` | OPEN（fix） | 本身即 fix |
| 🟡 低 | [#3878 fix(setup): stop the ping agent's container before deleting its folder](https://github.com/nanocoai/nanoclaw/pull/3878) — setup 的 ping 后清理会先删目录、留下运行中的临时容器 | OPEN（fix） | 本身即 fix |
| 🟡 低（CI 稳定性） | [#3887 fix(setup): never clip a readiness probe to the deadline](https://github.com/nanocoai/nanoclaw/pull/3887) — 高负载 CI 上的两个时序 flake；其中 `restart-readiness.test.ts:147` 被判定为**真实的诊断 bug**（`waitForHost` 把每次探测裁剪到 deadline） | OPEN（fix） | 本身即 fix |
| 🟡 低 | [#3879 fix: detect a broken better-sqlite3](https://github.com/nanocoai/nanoclaw/pull/3879) — native addon 加载失败未被识别 | **CLOSED** | 已合并 |

**小结**：最高优先级且**尚无 fix** 的是 #3888（arm64 上 Iron Proxy 不可用），直接影响新功能的硬件覆盖面；#3828 虽已关闭，但摘要描述的“服务先停、再等容器退出”是逻辑上难以成立的流程，值得在后续版本回归验证。

---

## 6. 功能请求与路线图信号

**可能纳入后续版本（已有实现 PR 支撑）**
- **Iron Proxy 按主机自动审批**：[#3881](https://github.com/nanocoai/nanoclaw/issues/3881) 提出对已允许主机（配合 `NANOCLAW_GATEWAY_READ_ONLY_HOSTS` 等机制）按 host 粒度自动放行工具技能调用，减少逐请求审批卡。属新网关的体验补强，与 #3883 同属 Iron Proxy 迭代线。
- **跨 agent 发送者标识**：[#3509](https://github.com/nanocoai/nanoclaw/pull/3509) + [#3510](https://github.com/nanocoai/nanoclaw/pull/3510) 已给出完整实现（delivery 层传递 label + WhatsApp shared mode 前缀），只待合并。
- **TypeSafe Jev 作为容器工具**：[#3848 feat(skills): add /add-typesafe-tool](https://github.com/nanocoai/nanoclaw/pull/3848)（OPEN，09-17 创建）— 新增 `/add-typesafe-tool` 技能，让 agent 调用分类、路由、排序、yes/no 判定，保留推理与写作。属技能生态扩展。
- **入站消息块语义说明**：[#3890 feat(agent-runner): explain inbound message blocks in the chat system prompt](https://github.com/nanocoai/nanoclaw/pull/3890) — 在 system prompt 中说明 `<message>`、`<dm-history>`/`<channel-history>`、`<cross-session...>` 三类块的权重。

**流程类诉求（不改变用户可见行为）**
- [#3886](https://github.com/nanocoai/nanoclaw/pull/3886) 要求 PR 必须勾选“无用户可见行为变更”或填写 release-note 块，以免 changelog 靠手工重建。

---

## 7. 用户反馈摘要

⚠️ 数据限制说明：本次提供的数据中，**所有 Issues/PR 的评论数均为 0 或 undefined**，因此以下内容完全来自 issue/PR **正文摘要**，而非评论区。

**痛点**
- **多架构部署受阻**：用户在 NVIDIA DGX Spark（aarch64）上通过 OpenCode + Iron Proxy 的 Advanced setup 安装，Iron Control 容器直接 `exec format error` 退出 —— 说明 amd64-only 镜像在 arm64 设备上完全不可用。
- **重装不可恢复**：删除 checkout 目录后，Iron Control 数据卷仍存活，使失败的 Iron Proxy 安装无法干净重试。
- **审批噪音**：Iron Proxy 只自动批准“当前 agent provider 声明的模型域名”和 `NANOCLAW_GATEWAY_READ_ONLY_HOSTS` 中的 GET/HEAD，其余一律需要逐请求审批卡，对工具技能场景过于繁琐。
- **共享身份下无法区分 agent**：多 agent group 接到同一消息群、共用操作者 WhatsApp 号时，回复统一显示 `ASSISTANT_NAME`，读者无法判断来源。
- **更新流程卡死**：`/update-nanoclaw` 在有 agent 容器运行时无法完成（#3828）。

**使用场景**
- 本地/自建硬件（DGX Spark）上跑 OpenCode + Iron Proxy；多 agent group 复用同一消息通道；通过 skills 扩展容器工具能力。

**满意/不满意**
- 材料中**没有任何正面或负面情绪评价、评分或 👍**，故不做满意度判断。

---

## 8. 待处理积压

**存续时间较长、今日仍有更新或仍 OPEN 的条目**：

1. [#3510 whatsapp: per-agent sender label in shared mode](https://github.com/nanocoai/nanoclaw/pull/3510) — 创建于 **2026-08-25**，OPEN，**已约 1 个月**，09-24 仍有更新。
2. [#3509 delivery: pass the sending agent's label to channel adapters](https://github.com/nanocoai/nanoclaw/pull/3509) — 同为 **2026-08-25** 创建、OPEN 约 1 个月，与 #3510 配套；两者长期未合并会持续阻塞“多 agent 可辨识性”体验。
3. [#3848 feat(skills): add /add-typesafe-tool](https://github.com/nanocoai/nanoclaw/pull/3848) — 创建于 **2026-09-17**，OPEN 约 1 周，09-23 有更新。
4. [#3878 fix(setup): stop the ping agent's container before deleting its folder](https://github.com/nanocoai/nanoclaw/pull/3878) — 创建 **2026-09-23**，OPEN，为小体量修复，适合优先合入。
5. [#3874 OneCLI gateway ownership check](https://github.com/nanocoai/nanoclaw/issues/3874) — 创建 **2026-09-23**，OPEN，**当前无 fix PR**，涉及归属校验语义。
6. [#3888 Iron Proxy arm64 失败](https://github.com/nanocoai/nanoclaw/issues/3888) — 今日新开，OPEN，**当前无 fix PR**，为最高优先级待办。

> 另注：#3877（v2.4.0 发布 PR，09-23 创建）与 #3885、#3882、#3879 已于今日关闭，不属积压。

---

*本日报仅基于所提供的 NanoClaw GitHub 数据生成；评论数、👍 数等字段在源数据中缺失或为 0，相关“热度”判断已作显式说明，未作推测。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-24

## 1. 今日速览

过去 24 小时内，NullClaw 共发生 21 条 Issue 更新（11 条新开/活跃、10 条已关闭）与 24 条 PR 更新（14 条待合并、10 条已合并/关闭），无新版本发布。今日的关闭动作高度集中：多个长期悬置的崩溃类 Bug（#976 SIGSEGV、#991 MCP stdio 挂起、#870 网关 busy loop、#871 web_search 低资源可用性）被对应修复 PR 关闭，说明维护者正在系统性清理稳定性积压。活跃面则集中在 Telegram/Matrix 通道静默、scheduler 授权、MCP stdio 超时与内存召回可配置性等运行时问题上。整体健康度判断：**修复吞吐良好、积压收敛中，但通道类与平台兼容性（WSL2、aarch64、Proxmox）问题仍是主要风险来源。**

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 主要围绕"崩溃修复 + 可配置性"两条主线推进：

- **#985 [CLOSED] fix(runtime): give the agent turn path a 16 MiB stack** — 关闭 #976。根因是 `SESSION_TURN_STACK_SIZE` 被别名为 `HEAVY_RUNTIME_STACK_SIZE`（2 MiB），导致 aarch64 上每条入站 Telegram 消息触发 SIGSEGV 并 crash-loop。这是本日最高优先级修复。
  https://github.com/nullclaw/nullclaw/pull/985

- **#996 [CLOSED] fix(mcp): bound stdio response waits** — 关闭 #991。为 stdio MCP 响应读取施加 `timeout_ms`，超时后终止服务进程组，并在初始化失败时清理子进程，解决独立 `nullclaw agent` 在网关持有 MCP 服务时无限挂起的问题。
  https://github.com/nullclaw/nullclaw/pull/996

- **#986 [CLOSED] GEN-548: make SQLite memory database path configurable** — 新增 `memory.database_path`，为空时保持 `<workspace>/memory.db` 默认行为，支持相对/绝对路径。
  https://github.com/nullclaw/nullclaw/pull/986

- **#979 [CLOSED] feat(memory): add configurable auto-recall, recall_limit, max_context_bytes** — 响应 #919，将硬编码的 FTS5/BM25 召回参数（`DEFAULT_RECALL_LIMIT=5`、`MAX_CONTEXT_BYTES=4000` 等）开放为配置项。
  https://github.com/nullclaw/nullclaw/pull/979

- **#980 [CLOSED] fix(scheduler): persist paired token to disk during /pair** — 关闭 #839。修复 `/pair` 仅将 token 哈希存于内存、未落盘，导致 cron/schedule 工具读取 `{config_dir}/paired_token` 认证失败的时序缺陷。
  https://github.com/nullclaw/nullclaw/pull/980

- **#981 [CLOSED] feat(provider): add grok-cli provider for xAI Grok CLI** — 沿用 `codex-cli`/`gemini-cli`/`claude-cli` 的 spawn-per-request 模式，新增可选 provider。
  https://github.com/nullclaw/nullclaw/pull/981

- **#969 [CLOSED] feat(agent): structured approval_request / approval_response flow** — 为 shell 工具（及任何返回 `error.ApprovalRequired` 的工具）实现两轮工具审批流程。
  https://github.com/nullclaw/nullclaw/pull/969

- **#965 [CLOSED] Proposal: structured streaming tool-call support for SSE parser** — 作为流式原生工具调用根修复的配套，处理服务端以 SSE 泄漏结构化 tool-call 的场景。
  https://github.com/nullclaw/nullclaw/pull/965

- **#978 [CLOSED] discord: run typing thread on the heavy runtime stack** — Discord 输入指示线程在 512KB 辅助栈上执行完整 HTTPS/TLS 请求导致栈溢出，改挂重运行时栈（与 #985 同属栈尺寸治理）。
  https://github.com/nullclaw/nullclaw/pull/978

- **#989 [CLOSED] fix: restore broken star history chart** — 将依赖 GitHub stargazer API 的 README 图表切换至免 token 的 star-history.dera.page。
  https://github.com/nullclaw/nullclaw/pull/989

**整体推进度：** 本日一次性关闭了 4 个崩溃/挂起级问题（#976、#991、#870、#871）及调度器认证缺陷（#839），并落地了内存召回、内存库路径、provider 扩展等三项可配置/功能增强，属于质量与能力双线推进的高产出日。

---

## 4. 社区热点

| 条目 | 评论 | 状态 | 链接 |
|---|---|---|---|
| #871 web_search 在低资源设备上不可用 | 9 | CLOSED | https://github.com/nullclaw/nullclaw/issues/871 |
| #972 Telegram 通道空闲后停止响应 | 5 | OPEN | https://github.com/nullclaw/nullclaw/issues/972 |
| #915 scheduler 未授权问题 | 5 | OPEN | https://github.com/nullclaw/nullclaw/issues/915 |
| #190 Subagent spawn | 4 | CLOSED | https://github.com/nullclaw/nullclaw/issues/190 |
| #976 Telegram 消息 SIGSEGV | 4 | CLOSED | https://github.com/nullclaw/nullclaw/issues/976 |
| #865 CLI 方向键显示控制字符 | 4 | OPEN | https://github.com/nullclaw/nullclaw/issues/865 |

**诉求分析：**
- **#871（9 条评论）** 是今日讨论量最高的议题，直指定位矛盾：NullClaw 面向"弱、廉价、低资源设备"，但 `web_search` 实际依赖 Brave 等需要直连的方案，在低资源/受限网络环境下不可用。相关配套请求 #623 明确提议接入 `ddgs` 元搜索库。
- **#972 与 #976 形成同一现象的两面**：通道静默既可能源于栈溢出崩溃（#976，已有 #985 修复），也可能源于轮询线程在空闲一夜后未老化回收（#972，已由 #984 提出修复）。用户反映的现象高度一致——后端 `nullclaw agent -m "ping"` 正常，但通道不再回话，需重启网关恢复。
- **#190 显示用户对多 provider、子智能体间通信的架构性期待**；#915 则暴露 scheduler 与授权链路在实际部署（Ubuntu + 远程 Ollama）中的可用性问题。

---

## 5. Bug 与稳定性

按严重程度排列：

**P0 — 崩溃 / 挂起（均已有修复 PR，部分已关闭）**
- **#976 SIGSEGV on every inbound Telegram message**（aarch64，v2026.5.29）— 入站 worker 线程以约 512KB 栈运行并栈溢出，systemd 下 crash-loop。修复 PR #985 已关闭。
  https://github.com/nullclaw/nullclaw/issues/976
- **#991 MCP stdio 调用在 Proxmox launcher 锁后无限挂起**（2026.8.22）— stdio MCP 服务已被长期网关持有时，独立 agent 调用可无限阻塞。修复 PR #996 已关闭。
  https://github.com/nullclaw/nullclaw/issues/991
- **#978 Discord typing 线程栈溢出** — 与 #976 同源（2 MiB 重栈被误用/未使用）。PR 已关闭。
  https://github.com/nullclaw/nullclaw/pull/978

**P1 — 资源异常 / 服务不可用**
- **#870 Gateway accept4 busy loop（100% CPU）on WSL2** — 空闲时单线程持续占满 CPU，网关功能尚存但资源失控。今日已关闭。
  https://github.com/nullclaw/nullclaw/issues/870
- **#972 Telegram 通道空闲后停止响应** — 有对应修复 PR #984（[OPEN] fix(channels): let poll failures age out a dead polling thread，声明 Closes #972），尚未合并。
  https://github.com/nullclaw/nullclaw/pull/984

**P2 — 功能可用性 / 体验缺陷**
- **#865 CLI 方向键输出控制字符** — 原生键位绑定被破坏，影响交互体验。OPEN，无 fix PR。
  https://github.com/nullclaw/nullclaw/issues/865
- **#915 scheduler unauthorized**（Ubuntu + Ollama + qwen3.6:27b）— 工具调用整体可用但 scheduler 授权失败。相关修复 #980 已关闭，但该 Issue 本身仍为 OPEN，建议确认是否已随 #980 解决。
  https://github.com/nullclaw/nullclaw/issues/915
- **#932 文档中 Zig 版本错误** — 文档要求 Zig 0.15.2，实际构建因缺失符号而失败。OPEN，无 fix PR。
  https://github.com/nullclaw/nullclaw/issues/932
- **#839 bit 无法访问 scheduler** — 已由 #980（token 落盘）关闭。
  https://github.com/nullclaw/nullclaw/issues/839

---

## 6. 功能请求与路线图信号

| 请求 | 状态 | 相关 PR / 信号 |
|---|---|---|
| **多模态视觉管道**：图片/文件直发 agent，自动 base64 编码（#624） | CLOSED | 今日关闭，无明确关联 PR 列出 |
| **GET /status 端点**用于 agent 监控（#631） | CLOSED | 今日关闭 |
| **ddgs 作为 web_search 选项**（#623） | OPEN | 与 #871 诉求一致，建议优先 |
| **关闭自动记忆召回（FTS5）**（#919） | OPEN | **#979 已合并**实现 `auto_recall`/`recall_limit`/`max_context_bytes` |
| **Skills 符号链接支持**（#995） | OPEN | 无 PR，影响技能同步与复用 |
| **Ollama 工具不支持时的提示**（#1000） | OPEN | 目前仅报 adapter error，无描述，用户需用 Wireshark 排查 |
| **展示 reasoning/thinking**（#886） | CLOSED | 长任务无进度反馈，用户称 30 分钟无输出 |
| **完整可用的示例 config.json**（#867） | CLOSED | 👍 3，反映默认配置"残缺到几乎无法跑通" |
| **WeChat 扫码登录**（#817） | OPEN | 通道支持范围询问 |

**判断：** #919 已在今日通过 #979 落地，最可能进入下一版本；#623 因 #871 的高热度与关闭而具备较强推进动力；#995、#1000、#867 属低实现成本、高体验收益项，适合纳入近期迭代。

---

## 7. 用户反馈摘要

- **定位与实现之间的落差**：多个高评论 Issue（#871、#976、#870）聚焦低资源/异构平台（WSL2、aarch64、Cloudflare 隧道场景 #495），说明"在廉价弱设备上跑通"的核心承诺与当前实现仍有明显摩擦。
- **"网关活着但通道哑了"** 是复现率最高的用户痛点（#972、#976）：后端 agent 正常，前端通道静默，用户只能靠重启恢复，缺乏可观测性。
- **可观测性诉求突出**：#631（/status 端点）、#886（展示 reasoning/thinking）均指向同一需求——外部工具与用户都无法看到 agent 当前在做什么、是否卡住。
- **配置与文档门槛偏高**：#867（👍 3）称默认 config.json "crippled so badly"，#932 指出文档给出的 Zig 版本会导致构建失败，直接影响新用户上手。
- **报错信息不友好**：#1000 反映 Ollama 模型不支持工具调用时只写 adapter error，用户不得不动用 Wireshark 定位。
- **正面信号**：多起崩溃在报告后均获得对应修复 PR 并在今日关闭，说明维护者对高严重度问题的响应链路是通畅的。

---

## 8. 待处理积压

以下条目创建时间较早、仍处开放状态，建议维护者优先分诊：

- **#972 Telegram 通道空闲后停止响应** — 创建 2026-06-30，👍 1，5 条评论；修复 PR #984 已提交但未合并（创建于 2026-08-05，已滞留约 7 周）。
  https://github.com/nullclaw/nullclaw/issues/972 ｜ https://github.com/nullclaw/nullclaw/pull/984
- **#915 scheduler unauthorized** — 创建 2026-05-15，👍 1；相关修复 #980 已合并，但本 Issue 未关闭，状态需澄清。
  https://github.com/nullclaw/nullclaw/issues/915
- **#865 CLI 方向键控制字符** — 创建 2026-04-23，已开放约 5 个月，无 fix PR。
  https://github.com/nullclaw/nullclaw/issues/865
- **#817 WeChat 扫码登录** — 创建 2026-04-14，逾 5 个月未给出明确答复（是否支持/是否在计划中）。
  https://github.com/nullclaw/nullclaw/issues/817
- **#776 docs: add MCP, subagents, skills, voice, and hardware documentation** — PR 创建 2026-04-05，已开放近 6 个月；覆盖 5 个有实现无文档的子系统（如 `src/mcp.zig` 约 915 行）。
  https://github.com/nullclaw/nullclaw/pull/776
- **#983 fix(providers): use pinned curl path for proxied requests** 与 **#982 fix(telegram): use curl transport for explicit proxies** — 均创建 2026-08-03，滞留约 7 周，涉及代理场景下的安全 curl 路径复用。
  https://github.com/nullclaw/nullclaw/pull/983 ｜ https://github.com/nullclaw/nullclaw/pull/982
- **#962 docs(providers): document native Anthropic provider** — 创建 2026-06-18，声明 Closes #767，文档类 PR 长期未合并。
  https://github.com/nullclaw/nullclaw/pull/962
- **#932 Invalid Zig version in docs** — 阻塞新用户构建，成本极低但已开放 4 个月。
  https://github.com/nullclaw/nullclaw/issues/932

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-09-24）

## 1. 今日速览

今日 IronClaw 项目处于**低强度维护状态**：过去24小时无 Issues 更新、无新版本发布，仅 3 条 PR 有活动且全部处于待合并状态。三条 PR 分别覆盖知识图谱快照刷新（#7988）、1.4.1-rc.2 发布分支切分（#8110）与技能根目录文档澄清（#8109），均标记为 `risk: low`。整体看，项目正聚焦于发布候选版的稳定性打磨与基础设施自动化维护，无功能性大改动，健康度平稳。

---

## 2. 版本发布

今日无新版本发布，暂无破坏性变更或迁移事项需要关注。相关发布准备工作体现于 PR #8110（详见下节）。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目在代码主线层面零推进。3 条待合并 PR 均处于开放状态：

- **#8110 chore(release): cut 1.4.1-rc.2**（作者 serrrfirat，`size: M, risk: low, scope: docs, scope: dependencies, contributor: core`）
  将带日期的发布分支从 `1.4.1-rc.1` 推进至 `1.4.1-rc.2`，RC2 范围与 RC1 保持一致，仍聚焦于 Google 扩展 OAuth 就绪性修复；同时刷新 lockfile，升级至修补版 `wasmtime 47.0.4` 与 `rustls 0.2…`（摘要截断）。
  → https://github.com/nearai/ironclaw/pull/8110

- **#8109 docs(skills): clarify scoped virtual skill roots**（作者 mmemcormier）
  用作用域虚拟技能根目录（`/skills`、`/system/skills` 及可选的 `/tenant-shared/skills`）替换过时的宿主目录发现指南，并区分运行时发现与独立的旧版磁盘导入。
  → https://github.com/nearai/ironclaw/pull/8109

- **#7988 chore(agents): refresh codebase knowledge graph**（作者 ironclaw-ci[bot]，`size: XS, risk: low, contributor: core`）
  由 nightly `Codebase Graph Refresh` 工作流自动生成，从当前默认分支刷新已提交的 codebase-memory 引导快照。
  → https://github.com/nearai/ironclaw/pull/7988

**整体评估**：项目今日主要在为 1.4.1-rc.2 的发布收尾，并持续维护自动化基础设施与文档准确性，属于发布前的稳定期，向前推进幅度有限但方向清晰。

---

## 4. 社区热点

今日 Issues 与 PR 的评论数、点赞数均未提供有效数据（Issues 为 0 条；PR 评论字段显示 `undefined`，👍 均为 0），**无可识别的讨论热点**。

从内容重要性看，最值得关注的是发布相关 PR：
- **#8110（1.4.1-rc.2 发布候选）** → https://github.com/nearai/ironclaw/pull/8110

其背后诉求是尽快将一个已收敛范围的 Google 扩展 OAuth 修复随 RC 通道交付，同时消化 `wasmtime` / `rustls` 的安全修补版本。建议维护者优先 review 以不阻塞发布节奏。

---

## 5. Bug 与稳定性

今日**无新报告的 Bug、崩溃或回归问题**。需说明的是，PR #8110 中的依赖升级（`wasmtime 47.0.4`、`rustls 0.2…`）在摘要中被标注为“patched”，暗示修复了上游安全或稳定性问题，属于预防性稳定性维护，但摘要未披露具体 CVE 或问题细节，此处不作推断。

---

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求（无 Issues 更新）。

从现有 PR 可观察到的路线图信号：
- **发布节奏**：RC2 沿用 RC1 的同一修复范围，表明团队在 1.4.1 上采取“最小变更、尽快出 RC”的策略，Google 扩展 OAuth 就绪性修复很可能进入 1.4.1 正式版（依据 PR #8110）。→ https://github.com/nearai/ironclaw/pull/8110
- **技能系统抽象**：PR #8109 引入作用域虚拟技能根（`/skills`、`/system/skills`、`/tenant-shared/skills`），暗示技能加载正向多租户/作用域化方向演进。→ https://github.com/nearai/ironclaw/pull/8109

---

## 7. 用户反馈摘要

今日无 Issues 评论可供提炼，**暂无真实用户痛点、使用场景或满意度反馈**。所有 PR 的作者均标注为 `contributor: core` 或 CI 机器人，反映今日活动来自核心团队与自动化流程，而非外部社区输入。

---

## 8. 待处理积压

数据仅提供过去24小时的更新窗口，缺少各条目的累计停留时长信息，因此**无法判定严格意义上的长期积压项**。但以下两点值得维护者留意：

- **#7988** 由机器人于 **2026-08-29** 创建，直至 **2026-09-24** 才更新，已在开放状态停留近一个月，属于自动化生成的常规刷新 PR，建议按流程及时 review 或合并，避免快照持续落后于默认分支。→ https://github.com/nearai/ironclaw/pull/7988
- **#8110 / #8109** 均创建于 2026-09-23，尚属正常 review 窗口，无积压风险。→ https://github.com/nearai/ironclaw/pull/8110 、 https://github.com/nearai/ironclaw/pull/8109

---

**方法说明**：本日报所有结论均基于所提供的 GitHub 数据生成；Issues 数量为 0、PR 评论与点赞字段缺失，故相关章节按“无可分析数据”处理，未作任何外部补充或推断。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-24

## 1. 今日速览

过去 24 小时项目以**大规模清理积压**为主：18 条 Issue 更新中 16 条关闭，50 条 PR 更新中 46 条合并/关闭，并发布 `2026.9.23` 新版本。关停的 Issue 绝大多数带有 `[stale]` 标记且创建于 5–7 月，说明维护者正在对长期挂起的历史反馈做批量定性处置，而非当日新增问题驱动。真正的增量开发集中在 Cowork 交互体验（进度卡片、流式步骤进度）、实验性决策模型工具与新 Provider 接入。整体判断：**维护强度高、积压消化明显，但以存量清理为主，新功能增量有限**。

---

## 2. 版本发布：2026.9.23

Release 名称：`LobsterAI 2026.9.23`（发布日 2026-09-23）

已披露的变更内容：

- **`feat(decision-model)`：新增实验性 Jev decision model 工具**（by @fisherdaddy，[PR #2753](https://github.com/netease-youdao/LobsterAI/pull/2753)）——标记为 experimental，属新增能力而非稳定特性。
- **`feat(cowork)`：流式展示单步 turn 进度与 diff 统计**（by @fisherdaddy，[PR #2749](https://github.com/netease-youdao/LobsterAI/pull/2749)）——提升长任务过程可见性。

**破坏性变更 / 迁移注意事项**：所提供的数据中，Release notes 被截断（第三个条目仅显示 `* f`），因此**无法确认是否存在破坏性变更或需要迁移的配置**。建议维护者在完整 release notes 中明确标注实验性特性的启用方式与回滚路径，尤其是 `decision-model` 这类 experimental 工具。

---

## 3. 项目进展

今日合并/关闭的 PR 共 46 条，其中可识别的重点包括：

| PR | 状态 | 说明 |
|---|---|---|
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) `fix(cowork): show feedback when session rename fails` | CLOSED | 会话重命名失败时给出本地化提示，修复 #670，消除"改了名但没保存且无任何提示"的静默失败 |
| [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) `fix(cowork): sync image attachments with model capability` | CLOSED | 图片附件行为与所选模型视觉能力保持同步，直接对应 Issue #1861 的"supportsImage 状态不同步"问题 |
| [#2403](https://github.com/netease-youdao/LobsterAI/pull/2403) `revert(openclaw): remove run-safety-contract gate` | CLOSED | 撤销 PR #2400 引入的 Run Safety 设计，原因是 review 发现 receipt identity keying、false-success followups、compaction runId 处理、byte-accounting 不匹配等 release-blocking 问题 |

此外，多条历史发布分支 PR（[#2699](https://github.com/netease-youdao/LobsterAI/pull/2699) 2026.9.16、[#2618](https://github.com/netease-youdao/LobsterAI/pull/2618) 2026.9.4、[#2600](https://github.com/netease-youdao/LobsterAI/pull/2600) 2026.8.31、[#2510](https://github.com/netease-youdao/LobsterAI/pull/2510) 2026.8.17、[#2480](https://github.com/netease-youdao/LobsterAI/pull/2480) 2026.8.12、[#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) 2026.8.5）在今日集中关闭，属于发布流程的收尾归档。

**推进程度评估**：今日合入的实质代码修复集中在 Cowork 模块的两个已知缺陷（重命名反馈、图片附件同步），加上一次针对 Run Safety 的回退清理，属于**质量修补与风险回退**，而非功能性跃迁。项目向前推进的净增量主要来自 2026.9.23 版本中的进度可视化与实验性决策模型。

---

## 4. 社区热点

今日数据中评论数较高的条目（多为 2–4 条评论，整体讨论热度偏低，无高互动话题）：

- [Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079)（4 评论）执行结果窗口滚动到顶端假死 — 2026.5.27 版本，可复现。
- [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120)（4 评论）建议：任务预输入 + 延长单次任务运行时长（监控脚本出现 `terminated`）。
- [Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121)（4 评论）怀疑重复输出文字浪费 token。
- [Issue #2131](https://github.com/netease-youdao/LobsterAI/issues/2131)（4 评论）询问是否计划支持 Hermes agent（无正文摘要）。
- [PR #2758](https://github.com/netease-youdao/LobsterAI/pull/2758)（今日新开）在 Cowork 中展示 OpenClaw 原生进度卡片。

**诉求分析**：社区关注点高度集中在**长任务可控性与成本/性能**——任务能跑多久、能不能排队、输出是否重复烧 token、过程是否可见。PR #2758 与版本中的 #2749 正好从"过程可见性"一侧回应了同一诉求，说明维护者与用户对痛点的判断方向一致。

---

## 5. Bug 与稳定性

按严重程度排列（当日更新但多为历史 Issue 被关闭，标注是否有关联 fix PR）：

**高严重度**

- [Issue #2214](https://github.com/netease-youdao/LobsterAI/issues/2214) 桌面端"数据备份"导致主进程卡死 — 报告称 100% 可复现、只能强制结束进程；环境为 2026.6.1 / Windows 11 24H2、数据库 71.6 MB WAL 模式。**未见明确 fix PR**。
- [Issue #2230](https://github.com/netease-youdao/LobsterAI/issues/2230) 同一模型在 LobsterAI 显著慢于 CodeBuddy — 报告对比为 2m24s / 67,610 Token vs 25 分钟 / 60M Token，量级差异极大。**未见明确 fix PR**。
- [Issue #2216](https://github.com/netease-youdao/LobsterAI/issues/2216) Memory Search 无法切换为 local embedding provider，索引重建被 DB 锁阻塞（EBUSY）；OpenAI 配额耗尽（429）时记忆搜索完全不可用。**未见明确 fix PR**。
- [Issue #2215](https://github.com/netease-youdao/LobsterAI/issues/2215) 安装时反复出现 `Resource extraction failed: could not start extractor process`。

**安全类（均为 CLOSED）**

- [Issue #2176](https://github.com/netease-youdao/LobsterAI/issues/2176) 自动 artifact 加载可导致由消息派生的任意本地文件读取。
- [Issue #2181](https://github.com/netease-youdao/LobsterAI/issues/2181) 默认恢复私网浏览器访问，削弱内置 OpenClaw SSRF 防护。
- [Issue #2286](https://github.com/netease-youdao/LobsterAI/issues/2286) 未认证的本地 token 代理允许任意本地进程重放受害者已认证的 server-model API 能力。
- [Issue #2287](https://github.com/netease-youdao/LobsterAI/issues/2287) NIM 出站媒体流可经助手生成的绝对路径外泄主机本地文件。
- [Issue #2288](https://github.com/netease-youdao/LobsterAI/issues/2288) HTML 预览服务器跟随 root 内符号链接泄露任意本地文件。

> 注意：这 5 条安全 Issue 均以 `[stale]` 关闭，数据中**未提供对应的修复 PR 或验证说明**，建议维护者确认关闭理由（是否已修复 / 是否转内部跟踪），避免安全反馈被静默归档。

**回归相关**

- [PR #2403](https://github.com/netease-youdao/LobsterAI/pull/2403) 回退 Run Safety 设计，理由为引入 release-blocking 缺陷（receipt identity keying、false-success followups、compaction runId、byte-accounting）。这是一次主动止损。

**中低严重度**

- [Issue #2079](https://github.com/netease-youdao/LobsterAI/issues/2079) 结果窗口滚动到顶端假死。
- [Issue #2121](https://github.com/netease-youdao/LobsterAI/issues/2121) 疑似重复输出导致 token 浪费。
- [Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861)（仍 OPEN）图片附件不随模型切换重新处理 —— **已有对应修复 [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 并已关闭，建议核实后同步关闭该 Issue**。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 判断 |
|---|---|---|
| 任务预输入/排队、延长单次任务运行时长 | [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 与版本中 #2749 的"流式步骤进度"、PR [#2758](https://github.com/netease-youdao/LobsterAI/pull/2758) 的"原生进度卡片"同向，**长任务体验是当前最明确的路线图方向**，但排队/时长限制本身尚无 PR。 |
| 对话框支持添加文件夹、`@文件` | [Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)（OPEN） | 高频类 agent 交互能力，尚无对应 PR，属可优先纳入的候选。 |
| 永久隐藏侧边栏广告横幅 | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（OPEN） | 已有实现，Settings → General 开关，**具备纳入下一版本的条件**。 |
| 接入 OrcaRouter 作为一等 Provider | [PR #2504](https://github.com/netease-youdao/LobsterAI/pull/2504)（OPEN） | 已有实现，按现有 OpenRouter 接线方式端到端对齐，**可能纳入后续版本**。 |
| 修复含 `/` 的 model id 丢失 provider 前缀 | [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452)（OPEN） | 影响如 `custom_0` + `deepseek-ai/DeepSeek-V4-Flash` 的持久化，属正确性修复，建议优先合入。 |
| 支持 Hermes agent | [Issue #2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | 无正文说明，无对应 PR，路线图信号弱。 |
| 向"AI Collaborator"平台演进（自然语言命令栏、跨模型编排、项目级记忆） | [Issue #2180](https://github.com/netease-youdao/LobsterAI/issues/2180) | 属提案级需求，无对应 PR。 |
| 编程工具链打通与生态联动 | [Issue #2239](https://github.com/netease-youdao/LobsterAI/issues/2239) | 属方向性建议，无对应 PR。 |

---

## 7. 用户反馈摘要

- **性能落差是最强不满**：用户以同模型、同提示词、相近任务做横评，LobsterAI 耗时与 Token 消耗分别为对照工具的约 10 倍与约 890 倍（[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)，具体为 2m24s/67,610 与 25 分钟/60M）。这是可直接量化的体验差距。
- **成本焦虑**：用户怀疑重复输出文字"在大量吃 token"，并询问是否 Claw 自身问题（[#2121](https://github.com/netease-youdao/LobsterAI/issues/2121)）。
- **长任务可靠性**：数据获取脚本监控时出现 `terminated`，脚本仍在跑但监控停止，影响开发（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)）。
- **工作流连续性诉求**：希望借鉴其他产品在任务运行中预输入下一个任务（[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)）。
- **大规模技能库的可扩展性问题**：用户技能库 174 个技能，`skills.load.watch` 打开时每次文件变动（编辑器自动保存、git 操作、IDE 索引）都触发快照刷新，消耗 token 与 I/O；同时存在持久化 bug 与缺少 UI 开关（[#2243](https://github.com/netease-youdao/LobsterAI/issues/2243)）。
- **交互一致性**：无法像其他 agent 一样 `@文件夹`（[#2385](https://github.com/netease-youdao/LobsterAI/issues/2385)）。
- **正面信号**：以上均为问题反馈；数据中未提供明确的满意度陈述。

---

## 8. 待处理积压

**长时间未关闭（OPEN）的重要 Issue**

- [Issue #1861](https://github.com/netease-youdao/LobsterAI/issues/1861)（创建 2026-04-28）图片附件不随模型切换重新处理 — 素材最久，**修复 PR #2373 已关闭**，Issue 状态待同步，建议优先闭环。
- [Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)（创建 2026-07-25）无法添加文件夹 / `@文件` — 交互基础能力缺口，无关联 PR。

**长期挂起的 OPEN PR**

- [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)（创建 2026-07-21）隐藏侧边栏广告横幅开关 — `area: renderer`。
- [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452)（创建 2026-08-07）保留含 `/` 的 model id provider 前缀 — `area: main, stale`，属正确性修复，建议尽快评审。
- [PR #2504](https://github.com/netease-youdao/LobsterAI/pull/2504)（创建 2026-08-17）OrcaRouter Provider 集成 — `area: renderer, area: main, area: openclaw, stale`。
- [PR #2758](https://github.com/netease-youdao/LobsterAI/pull/2758)（创建 2026-09-24）Cowork 原生 OpenClaw 进度卡片 — 今日新开，横跨 renderer/docs/main/cowork。

**流程性提示**：多条 `[stale]` 安全 Issue（#2176、#2181、#2286、#2287、#2288）被关闭但缺少公开的修复依据，建议维护者在关闭时补充结论说明，以防同类问题重复上报或被认为未被处理。

---

*注：本报告全部内容基于所提供的 GitHub 数据快照（截至 2026-09-24）。部分字段（如 PR 评论数、Release notes 完整正文）在源数据中缺失或被截断，报告中已相应标注，未作推测性补充。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报（2026-09-24）

## 1. 今日速览

Moltis 今日处于**低活跃度状态**：过去 24 小时内无新 Issue 更新、无版本发布，仅 1 条 PR 有活动。唯一动态是 PR #1272 于 2026-09-23 发生更新，这是一条自 2026-09-16 起保持 OPEN 状态的沙箱功能增强提案，至今未合并。整体来看，项目今日没有代码净推进，维护者与社区注意力集中在既有的沙箱权限控制讨论上。由于数据中 Issues 总数、评论数均为 0/undefined，社区讨论热度无法从评论维度进一步佐证。

## 2. 版本发布

今日无新版本发布（0 个），本节省略。

## 3. 项目进展

今日**没有合并或关闭任何 PR**，项目功能层面无净推进。

在途工作方面，PR #1272 [OPEN] 于 2026-09-23 更新，为 `[sandbox]` 配置块引入三个 per-agent 控制项：

- `sandbox.mounts`：为该 agent 的沙箱容器追加宿主机 bind mount
- `sandbox.run_as`：指定容器运行所用的 `uid:gid`
- `sandbox.force`：摘要文本在此截断，完整语义未在给定数据中说明

链接：moltis-org/moltis PR #1272

该 PR 自 2026-09-16 创建，已开放约 8 天仍处于待合并状态，属于今日唯一的项目进度信号。

## 4. 社区热点

按现有数据，今日**没有任何 Issue 或 PR 具备可量化的讨论热度**：无 Issues，PR #1272 的评论数在数据中标记为 `undefined`，👍 反应数为 0。

唯一可关注的条目仍是 PR #1272（moltis-org/moltis PR #1272），其诉求指向多 agent 场景下的沙箱隔离与权限细分——即不同 agent 需要不同的挂载视图与执行身份，而不是共用一套全局沙箱配置。这属于典型的"多租户/多 agent 隔离"需求，但由于缺乏评论与反应数据，无法判断社区共鸣强度。

## 5. Bug 与稳定性

今日**未报告任何 Bug、崩溃或回归问题**（Issues 更新 0 条，无相关 PR）。无严重程度排序可列，也无对应 fix PR。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。从在途 PR 判断，**沙箱权限模型细化**是当前最可能进入下一版本的候选方向：

- PR #1272 已在 OPEN 状态推进（创建 2026-09-16，更新 2026-09-23），且实现路径明确（三处 per-agent 配置项），若评审顺利，具备纳入下一版本的技术条件。
- 是否纳入仍取决于维护者评审结论——数据中未提供任何合并意图、里程碑或 maintainer 标签信息。

链接：moltis-org/moltis PR #1272

## 7. 用户反馈摘要

今日**无 Issue 评论可供提炼**（Issues 共 0 条，PR 评论数 undefined）。因此无法从数据中归纳真实用户痛点、使用场景或满意度信号。任何相关结论都将超出所提供数据的范围。

## 8. 待处理积压

- **PR #1272 [OPEN] — 已开放 8 天**（创建 2026-09-16，最近更新 2026-09-23 但未合并），无评论数据、无 👍、无合并迹象。这是当前唯一可见的待处理条目，建议维护者明确评审状态或给出反馈。
  链接：moltis-org/moltis PR #1272
- 其余积压项：数据中未提供长期未响应的 Issue 或其他 PR 信息，无法识别。

---

**项目健康度小结**：今日零合并、零发布、零 Issue 活动，唯一信号是一条已停滞 8 天的功能 PR。数据不足以评估社区参与度；如需判断健康度趋势，建议补充历史活跃度、评论数与里程碑数据。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报（2026-09-24）

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 活动数据
> 注：以下内容中部分 Issue/PR 链接显示为 QwenPaw 仓库归属，为保持与原始数据一致，链接按数据原样保留。

## 1. 今日速览

今日 CoPaw 项目保持**高度活跃**：过去 24 小时 Issues 更新 27 条（新开/活跃 13、已关闭 14），PR 更新 31 条（待合并 24、已合并/关闭 7），无新版本发布。关闭量接近新开量（Issues 关闭 14 / 新开 13），说明维护团队正在有效清理积压，但 **24 条 PR 处于待合并**状态，合并侧存在明显瓶颈。今日话题集中在上下文管理（context compaction / 媒体块裁剪）、多租户 Hub 路线图讨论以及多起 Windows/通道相关的回归 Bug。有 4 条以上来自首次贡献者（`first-time-contributor`）的修复 PR，社区参与度健康。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日已合并/关闭的 PR（数据中明确标注 CLOSED）共 2 条可见：

- **[PR #7972] fix(console): default session list grouping to source** — 作者 zhijianma
  将侧边栏会话列表的默认分组模式从 `date` 切换为 `source`，并同步更新测试以保持 date 模式覆盖。
  https://github.com/agentscope-ai/CoPaw/pull/7972

- **[PR #7971] fix(console): gate tool-call lifecycle queries on execution start** — 作者 zhijianma
  修复控制台在 `plugin_call` 消息完成（模型刚生成完参数）时即开始轮询 `GET /api/tool-calls/{sid}/{tcid}` 的问题——后端此时尚未在 ToolCoordinator 注册该调用，属于查询时机错误。
  https://github.com/agentscope-ai/CoPaw/pull/7971

**整体评估**：今日合并以 Console 前端行为修正为主，方向明确但节奏偏慢；结合 24 条待合并 PR（含多项功能性改动），项目"蓄势"特征明显，建议关注后续批量合并窗口。

## 4. 社区热点

- **[Issue #7318] QwenPaw Hub 多租户版 2.2.0 路线图讨论**（33 评论、👍4，更新至今日）
  维护者 rayrayraykk 发起，征集 Hub 后续建设方向，并关联社区诉求 #2324（多用户访问与管理员管理）。
  https://github.com/agentscope-ai/QwenPaw/issues/7318
  **诉求分析**：项目从个人助手向团队/多租户场景演进是社区最集中的呼声，👍 数与长评论串表明该方向具备高共识，是路线图优先级最高的信号。

- **[Issue #4474] 是否支持 chatgpt-5.5？**（9 评论，已关闭）
  用户配置后无法使用，属模型兼容性咨询。
  https://github.com/agentscope-ai/QwenPaw/issues/4474

- **[Issue #7571] 总是记不住，还是会遗忘**（8 评论，开放）
  用户详述插件开发中 Agent 反复遗忘路径约定（A 源码目录 / B Agent 默认路径 / C 插件运行时路径），TODO 文件与代码被写到错误位置。
  https://github.com/agentscope-ai/QwenPaw/issues/7571
  **诉求分析**：记忆持久化与跨会话约束遵循仍是核心痛点。

- **[PR #7785] feat(voice): add realtime voice chat**（实时语音对话，开放）
  https://github.com/agentscope-ai/CoPaw/pull/7785

- **[PR #7931] feat(chat): add durable paginated transcript history**（SQLite 持久化分页历史，开放）
  https://github.com/agentscope-ai/CoPaw/pull/7931

## 5. Bug 与稳定性

按严重程度排列：

**高 — 可能导致会话不可用或上下文爆炸**

- **[Issue #7966] 切换 provider 后会话永久损坏：历史中的 file:// 媒体 URL 被拒（invalid_parameter_error）**（开放，2 评论）
  环境：QwenPaw Desktop 2.2.2b3 / Windows 10 ARM64，`qwen3.8-max` 与 `qwen3.8-flash` 均复现。
  **已有潜在 fix PR**：[PR #7973] fix(agents): recover from rejected media URLs（开放，今日提交）
  https://github.com/agentscope-ai/QwenPaw/issues/7966 · https://github.com/agentscope-ai/CoPaw/pull/7973

- **[Issue #7853] ToolResultPruner 跳过媒体块（type="data"），view_image 的 base64 无界累积撑爆上下文**（开放，8 评论）
  **已有 fix PR**：[PR #7965] fix(context): reclaim historical media in Scroll and align thinking omission with token counting（开放）
  https://github.com/agentscope-ai/QwenPaw/issues/7853 · https://github.com/agentscope-ai/CoPaw/pull/7965

- **[Issue #7628] Context compaction 仍可能超出 provider 完整请求预算，导致当前轮失败**（开放，7 评论，环境 2.2.0b7）
  https://github.com/agentscope-ai/QwenPaw/issues/7628

**中 — 功能回归或平台特定风险**

- **[Issue #7968] Console 侧边栏改版（v2.2.2b3）导致聊天分组/文件夹功能失效**（已关闭，2 评论）
  https://github.com/agentscope-ai/QwenPaw/issues/7968

- **[Issue #7943] Windows 沙箱 ACL 作用于盘符根工作区时可锁定整个卷**（开放，2 评论，2.2.2b2）
  https://github.com/agentscope-ai/QwenPaw/issues/7943

- **[Issue #7857] ACP shutdown fallback 可能静默跳过会话清理并泄漏事件循环**（开放，3 评论，macOS arm64）
  https://github.com/agentscope-ai/QwenPaw/issues/7857

- **[Issue #7959] Moonshot kimi-k3 拒绝未加类型标注的 anyOf 联合类型 MCP 工具 schema**（开放，2 评论）
  https://github.com/agentscope-ai/QwenPaw/issues/7959

**已关闭（今日确认修复/结案）**

- **[Issue #7576] RetryChatModel 硬编码 32768 context_size 回退导致 CONTEXT_UNFIT**（已关闭，8 评论，影响 v2.1.0–v2.2.0）
  https://github.com/agentscope-ai/QwenPaw/issues/7576
- **[Issue #4244] shell_evasion_checks.newlines=True 静默阻断多行命令**（已关闭，6 评论）
  https://github.com/agentscope-ai/QwenPaw/issues/4244
- **[Issue #4227] stream_http 模式 MCP 返回 401 时整个调用阻塞至超时**（已关闭，6 评论）
  https://github.com/agentscope-ai/QwenPaw/issues/4227
- **[Issue #2967] execute_shell_command 可能绕过 File Guard**（已关闭，4 评论，安全相关）
  https://github.com/agentscope-ai/QwenPaw/issues/2967
- **[Issue #5900] MCP streamable_http 会话终止后无自动重连、客户端被永久跳过**（已关闭，3 评论）
  https://github.com/agentscope-ai/QwenPaw/issues/5900

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 判断 |
|---|---|---|
| 基于 2.x 的 A2A 协议官方支持（MCP/A2A/ACP 统一 Driver 机制） | [Issue #7484](https://github.com/agentscope-ai/QwenPaw/issues/7484)（开放，5 评论） | 用户直接追问时间表，架构文档已承诺，具备纳入下一版本的强信号 |
| 官方移动端 App（至少 Android） | [Issue #7976](https://github.com/agentscope-ai/QwenPaw/issues/7976)（今日新开） | 已有非官方替代客户端出现，官方维护诉求明确 |
| 可手动停用预置模型与通道 | [Issue #7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)（开放） | 界面整洁类需求，实现成本较低 |
| 实时语音对话 | [PR #7785](https://github.com/agentscope-ai/CoPaw/pull/7785)（开放） | 已有实现 PR，若合并将进入下一版本 |
| 独立模型用于 ReMeLight 记忆写入 | [PR #7719](https://github.com/agentscope-ai/CoPaw/pull/7719)（开放） | 与记忆痛点 #7571 呼应 |
| 持久化分页对话历史 | [PR #7931](https://github.com/agentscope-ai/CoPaw/pull/7931)（开放） | 基础设施级改动，影响面大 |

**路线图判断**：A2A 支持（#7484）与记忆能力改进（#7571 + PR #7719）是用户呼声与代码投入同时存在、最可能进入下一版本的方向。

## 7. 用户反馈摘要

- **记忆与约束遵循不足**（#7571）：用户反复强调路径约定仍被遗忘，且 Agent 会跑到错误目录开发，配合自动部署脚本造成损失——反映出跨会话记忆与指令持久化是真实生产痛点。
- **模型/供应商兼容摩擦**：#4474（chatgpt-5.5 配置失败）、#7959（Moonshot 拒绝 anyOf 无类型 schema）、#7966（切换 provider 后 file:// 媒体 URL 被拒）显示多供应商适配层仍是 Bug 高发区。
- **上下文预算管理焦虑**：#7853、#7628、#7576 三条均围绕上下文窗口，尤其图片 base64 无界累积与硬编码 context_size 回退，影响长会话可用性。
- **平台与通道细节体验**：#5558（企业微信上传附件后发送按钮置灰，期望无文字也能发送）、#1452（Docker 部署连接局域网 Ollama 并联网搜索的诉求）体现用户对多通道和本地部署场景的实用期待。
- **正向信号**：首次贡献者集中提交多条修复 PR（#7970、#7974、#7975、#7969、#7967），社区从"提问题"向"提修复"迁移，生态健康度正向。

## 8. 待处理积压

- **[Issue #7318] QwenPaw Hub 多租户路线图讨论** — 创建于 2026-08-26，持续更新且评论数最高（33），但仍是开放的讨论帖，社区期待明确的落地计划。https://github.com/agentscope-ai/QwenPaw/issues/7318
- **[Issue #7484] A2A 支持时间表** — 2026-09-02 创建，5 条评论，尚无官方时间线回应。https://github.com/agentscope-ai/QwenPaw/issues/7484
- **[Issue #7628] Context compaction 预算问题** — 2026-09-08 创建，仍开放，直接影响长会话稳定性。https://github.com/agentscope-ai/QwenPaw/issues/7628
- **PR 合并积压**：24 条 PR 待合并，其中 [PR #7500](https://github.com/agentscope-ai/CoPaw/pull/7500)（OpenAI extra_headers 转发，创建于 2026-09-02）、[PR #7785](https://github.com/agentscope-ai/CoPaw/pull/7785)（实时语音，2026-09-15）、[PR #7719](https://github.com/agentscope-ai/CoPaw/pull/7719)（记忆独立模型，2026-09-12）、[PR #7931](https://github.com/agentscope-ai/CoPaw/pull/7931)（2026-09-22）均已开放多日，建议维护者评估优先级以避免贡献者流失。
- **[Issue #7943] Windows 沙箱可锁定整个卷** — 2026-09-22 创建，属数据安全风险，建议优先响应。https://github.com/agentscope-ai/QwenPaw/issues/7943

---

**健康度小结**：关闭/新开比接近 1:1，首次贡献者活跃，热点讨论聚焦明确的演进方向；主要风险在于 24 条 PR 的合并积压与多起上下文/供应商兼容类 Bug 尚在修复管道中。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-24

## 1. 今日速览

ZeroClaw 今日处于**高活跃、无发布**状态：过去 24 小时 Issues 更新 19 条（新开/活跃 17，关闭 2），PR 更新 50 条（待合并 45，已合并/关闭 5），无新版本发布。讨论重心集中在**安全与依赖治理**（cargo-audit / cargo-deny CVE 协调）、**插件与 SOP 的大型功能栈**（多个 size:XL PR 正在评审），以及 **CI 效率优化**（多条 size:XS 的构建缓存与触发条件调整）三条主线上。当日新开 Issue 以维护者与核心贡献者（Audacity88、JordanTheJet）提出的工程治理类问题为主，表明项目当前阶段的重点是从"功能扩张"转向"发布可靠性与架构收敛"。整体健康度良好，但存在 1 条 S1 级 Windows 阻塞性 Bug 与多条 p1 高风险安全项需要关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日仅 5 条 PR 合并/关闭，且以收尾与替换类为主：

- **[CLOSED] PR #11067** `fix(runtime): distinguish trim targets from model capacity` — 恢复 `max_context_tokens` 与 `history_pruning.max_tokens` 的主动语义，允许受保护的最新轮次在超出裁剪目标但仍在容量内时被发送。属运行时上下文管理的行为修正。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11067)
- **[CLOSED] PR #11041** `feat(nix): build web UI as nix package and wire into module` — 将 Web 仪表盘暴露为 Nix flake 包 `zeroclaw-web` 与 `zeroclaw-openapi-spec`，并接入 module。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11041)
- **[CLOSED] Issue #9899** `[Tracker]: remove the matrix-sdk -> imbl advisory waivers` — 安全类 tracker 关闭，涉及 `RUSTSEC-2026-0247`（bitmaps）与 `RUSTSEC-2026-0292`（imbl-sized-chunks）豁免项的移除。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9899)
- **[CLOSED] Issue #10948** `[Bug]: interruption-scope keys collide across component boundaries` — channel 组件中 `interruption_scope_key` 唯一性编码缺陷（S2）已关闭。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10948)

**整体推进评估**：当日合并量（5）远低于待合并量（45），项目实际处于"大 PR 积压评审期"。值得注意的是多项 XL 级 PR 采用了 **one-PR-per-stack** 策略合并大型功能栈（#11098 插件安装 UX、#11102 SOP 栈、#11081 插件宿主中介 socket/持久化状态），这会在短期内增加评审负担，但若落地将显著推进插件系统与 SOP 子系统的完整性。

## 4. 社区热点

今日评论数最高的条目几乎全部是**维护者主导的架构与流程类 tracker/RFC**，而非用户驱动的功能讨论，反映出项目的决策机制正在密集运转：

| 条目 | 类型 | 评论 | 链接 |
|---|---|---|---|
| #8692 Maintainer decision queue for RFCs and design issues | Tracker (p2) | 15 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #8519 Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs | Bug (p1, risk:high) | 7 | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) |
| #9899 remove matrix-sdk → imbl advisory waivers | Tracker (p1, 已关闭) | 6 | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |
| #10970 RFC: Host-scoped admission control and per-agent resource bounds | RFC (p2, risk:high) | 5 | [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) |
| #11052 Render thematic breaks and setext headings for WhatsApp | Feature | 4 | [#11052](https://github.com/zeroclaw-labs/zeroclaw/issues/11052) |
| #11027 RFC: Agent-to-agent session messaging with receiver discretion | RFC (p2, risk:high) | 3 | [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) |

**诉求分析**：#8692 作为"决策队列"承载了 RFC、设计议题与发布策略问题，评论数最高（15），说明维护者评审带宽已成为当前主要瓶颈。紧随其后的 #8519 与 #9899 均围绕依赖安全审计的豁免清单治理，显示安全合规是社区最实际、最持续的关注点。#10970 与 #11027 两条 RFC 都指向**多智能体并发场景**（主机级准入控制、agent 间会话消息），与项目"一台机器上运行大量 agent"的定位一致。所有热点条目 👍 均为 0，说明社区表达以书面讨论为主，表情反馈机制未被广泛使用。

## 5. Bug 与稳定性

按严重程度排序：

- **[S1 - workflow blocked] Issue #11087** — `Windows — after closing the window the app can be neither reopened nor quit`。关闭主窗口后 `zeroclaw-desktop.exe` 进程存活并占用窗口资源，既无法重开也无法退出。影响组件：`runtime/daemon`。**尚未见关联 fix PR**，为今日最需优先处理的问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11087)
- **[S2 - degraded behavior] Issue #11094** — Apple preflight 测试中 mock 拦截子进程轮询导致失败，因 `time.sleep` 补丁与真实计时子进程冲突。影响 `tooling/ci`。无 fix PR。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11094)
- **[S2 - degraded behavior] Issue #11093** — `promote-stable` 流程变更站点根重定向与版本选择器，但遗漏根目录 `llms.txt` 等文件，导致文档不同步。影响 `tooling/ci`。无 fix PR。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11093)
- **[S3 - minor] Issue #11097** — 插件出网被拒时的补救命令未转义已有授权列表中的单引号（JSON 序列化后单引号包裹）。影响组件：`plugins`。**已有相关积压 PR #11098**（插件安装 UX 栈）涉及同一插件配置面。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11097)

**已关闭**：#10948（interruption-scope key 跨组件边界碰撞，S2）已于今日关闭。

**安全类未决**：Issue #8519（wasmtime-wasi CVE 与 audit.toml/deny.toml 漂移，p1、risk:high）仍有 7 条评论且保持 OPEN，属长期未收敛的安全债务。

## 6. 功能请求与路线图信号

今日新增功能类 Issues：

- **#11100** `Preserve configured provider aliases in cost-rate catalog prefill` — 要求在仪表盘与 Zerocode 从 provider catalog 预填成本费率时，保留完整的 `<family>.<alias>` 标识。**该需求与已开启的 PR #10172**（`fix(runtime): preserve configured provider profile semantics`，同样处理 dotted provider identity）**高度重合**，纳入下一版本的可能性较高。[Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11100) / [PR #10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172)
- **#11075** `Add agy_cli coding-CLI tool for Antigravity CLI` — 请求新增 `agy_cli` 工具以对标现有 `codex_cli` / `claude_code` / `gemini_cli` / `opencode_cli`。属工具层增量扩展，实现路径清晰。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11075)
- **#11074** `RFC: search_routes — hint-based provider routing for web_search_tool` — 仿照现有 `[[model_routes]]` 增加 `[[search_routes]]`，实现按提示匹配的搜索提供商路由。目前处于 RFC 阶段，无对应 PR。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11074)
- **#11052** `Render thematic breaks and setext headings for WhatsApp` — 补全 WhatsApp Web 出站 Markdown 转换对主题分隔线与 setext 标题的支持，是 PR #10475 引入的转换器的后续完善。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11052)
- **#11050** `Pace native polls with other outbound channel messages` — 为原生投票消息套用按接收者的出站节流，弥补 `PacedChannel::send_poll` 直通内部通道的缺口，属 #10984 的后续。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11050)

**路线图信号**：#7432（v0.8.6 Phase 2 runtime / v0.9.0 Phase 3 gateway 分离 tracker）与 #10814（发布效率 tracker）今日均有更新，是下一版本内容的权威来源。两条高影响 RFC（#10970 主机级准入控制、#11027 agent 间会话消息）若被接受，指向多智能体并发与安全边界这一中长期方向。

## 7. 用户反馈摘要

- **多 agent 并发下的稳定性诉求**：#10970 明确指出"一台运行大量 agent 的机器，应当在延迟上退化，而不是在稳定性上崩溃"，反映用户在高密度部署场景下遭遇的实际瓶颈，诉求是主机级并发轮次、工具执行数与单 agent 内存的可配置上界。
- **跨会话协作缺失**：#11027 指出在不同会话中工作的 agent 需要交换发现、问题与协调消息，但又不希望合并会话，说明当前的会话隔离模型未覆盖协作场景。
- **文档可发现性问题**：#11088 反馈多 agent 安装指南被放在 Contributing 目录下，用户认为其位置令人困惑，应移至 Agents 章节——属典型的信息架构反馈。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11088)
- **Windows 桌面端体验受损**：#11087 描述的"关窗后进程残留、无法重开也无法退出"是终端用户可直接感知的严重问题，影响桌面产品可用性。
- **敏感度说明**：今日 Issues 评论数普遍偏低（多数为 0–5 条），且高频评论者集中于维护者与核心贡献者，因此上述反馈更多来自**内部与深度用户**而非广泛终端用户群体；当前数据不足以评估整体用户满意度。

## 8. 待处理积压

以下条目创建时间较早、至今仍为 OPEN，建议维护者优先分配评审带宽：

| 条目 | 创建日期 | 滞留时长 | 关键标签 | 链接 |
|---|---|---|---|---|
| #7432 Runtime and gateway delivery tracker (v0.8.6 / v0.9.0) | 2026-06-09 | ~3.5 个月 | p2, risk:high, tracker | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #8519 Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs | 2026-06-30 | ~3 个月 | p1, risk:high, security | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) |
| #10133 fix(runtime): keep operational paths panic-free | 2026-08-19 | ~5 周 | risk:medium, status:parking-lot | [PR #10133](https://github.com/zeroclaw-labs/zeroclaw/pull/10133) |
| #10172 fix(runtime): preserve configured provider profile semantics | 2026-08-20 | ~5 周 | risk:high, size:XL | [PR #10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) |
| #10551 feat(tools): agent-facing config authoring with policy previews | 2026-09-02 | ~3 周 | risk:high, size:XL | [PR #10551](https://github.com/zeroclaw-labs/zeroclaw/pull/10551) |
| #10814 Release efficiency tracker | 2026-09-13 | ~11 天 | p1, risk:high, ci | [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) |
| #8692 Maintainer decision queue | 2026-07-04 | ~2.7 个月 | p2, tracker | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |

**重点关注**：#8519 是唯一同时满足"p1 优先级 + 高风险 + 已滞留约 3 个月"的安全条目；#10133 带有 `status:parking-lot` 标签，已停放 5 周，若长期不动建议明确关闭或重新排期。此外，45 条待合并 PR 与仅 5 条的当日吞吐量之间的落差，是当前项目最显著的流程健康度信号。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*