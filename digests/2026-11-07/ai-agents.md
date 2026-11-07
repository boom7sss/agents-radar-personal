# OpenClaw 生态日报 2026-11-07

> Issues: 493 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-07 16:28 UTC

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

# OpenClaw 项目日报 · 2026-11-07

## 1. 今日速览

项目今日处于**高活跃度**状态：过去 24 小时 Issues 更新 493 条（新开/活跃 344、关闭 149），PR 更新 500 条（待合并 311、合并/关闭 189），无新版本发布。PR 吞吐量显著，合并/关闭量约占更新总量的 38%，但待合并积压仍达 311 条，评审压力持续偏高。Bug 侧呈现明显的**回归集中化**特征：多个 P0/P1 问题指向 2026.9.6 与 2026.10.1~2026.10.5 版本线，涉及 Gateway 事件循环阻塞、启动耗时劣化、共享状态损坏等核心路径。整体看项目迭代快、修复活跃，但发布质量门槛与评审带宽是当前主要健康度风险。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

数据中未提供已合并 PR 的完整清单（PR 列表仅含标题与摘要，且多数为 OPEN）。今日可见的合并/关闭动作主要集中在**缺陷修复与构建性能**方向：

- **#194680 [CLOSED]** `fix(build): avoid compiler setup when copying plugin assets` — 避免插件资源拷贝时加载 UI 编译器与插件元数据机制，降低 CI 开销。链接: openclaw/openclaw PR #194680
- **#194675 [CLOSED]** `perf(chat): reduce retained heap after long session switching` — 修复长会话反复切换后 Chat 保留过大的 WeakMap 底层表问题，降低内存驻留。链接: openclaw/openclaw PR #194675
- **#194653 [CLOSED]** `fix(skills): accept inline frontmatter comments without PyYAML` — 修复 skill-creator 校验器在无 PyYAML 时对合法 frontmatter 的误判。链接: openclaw/openclaw PR #194653
- **#143278 [CLOSED]** `Heartbeat internal output leaks to Telegram user chat (2026.9.3)` — 心跳内部输出泄漏至 Telegram 用户会话的缺陷已关闭。链接: openclaw/openclaw Issue #143278
- **#166017 [CLOSED]** `mcp.sessionIdleTtlMs 默认值未生效导致 MCP 子进程永不回收` — 这一 P1 级 crash-loop 问题已关闭。链接: openclaw/openclaw Issue #166017
- **#178291 [CLOSED]** `2026.10.4→10.5 升级后 Doctor 校验失败`（P0）。链接: openclaw/openclaw Issue #178291
- **#84110 [CLOSED]** `Codex app-server 重写 prompt 导致 OpenAI 缓存命中率骤降（93%→47%）`。链接: openclaw/openclaw Issue #84110

**整体判断**：推进集中在"止血"（升级链、内存、构建开销），尚未见核心架构级新能力落地。修复节奏健康，但关闭项以中小型缺陷为主。

## 4. 社区热点

| 排名 | 条目 | 评论 | 核心诉求 |
|---|---|---|---|
| 1 | **#160959 [OPEN][P0]** Gateway 捕获大型外部插件时阻塞事件循环数分钟（2026.9.6 回归） | 80 | 插件生成/捕获机制在大型依赖树下同步阻塞，属发布级回归，讨论最密集 链接: openclaw/openclaw Issue #160959 |
| 2 | **#177656 [OPEN][P1]** 原生主机 exec 返回 shared-state integrity-admission 错误（2026.10.5） | 31 | 稳定版至少 28 次失败，子进程效果无法证明，无修复方案 链接: openclaw/openclaw Issue #177656 |
| 3 | **#150635 [OPEN][P2]** 短期召回保留策略每晚驱逐已召回条目，dreaming 深度阶段永不晋升 | 26 | 记忆/梦境机制的产品决策缺口 链接: openclaw/openclaw Issue #150635 |
| 4 | **#166634 [OPEN]** 延迟回收提交检查点失败，崩溃恢复后 agent 永久不可用 | 25 | 数据一致性与可恢复性 链接: openclaw/openclaw Issue #166634 |
| 5 | **#191944 [OPEN][P2]** macOS 上 `gateway stop` / `--force` 均因"无法完整检查进程祖先"失败 | 24 | 平台体验断裂，停止服务这一基础操作不可用 链接: openclaw/openclaw Issue #191944 |

**分析**：社区热度高度集中于**稳定性与可运维性**，而非新功能。前五名中四个为运行期故障，反映用户群以自托管/多 agent 生产部署为主，对 Gateway 可用性极为敏感。#160959 以 80 条评论断层领先，说明插件机制是当前最受关注的架构风险点。

## 5. Bug 与稳定性

**P0 / 崩溃级**
- **#160959** Gateway 事件循环阻塞数分钟（2026.9.6 回归）。**无 fix PR**（标签 `no-new-fix-pr`），需维护者评审。链接: openclaw/openclaw Issue #160959
- **#167406** Windows MSIX 2026.9.900.0：启用 Codex 插件导致 Gateway 就绪超时与主线程饥饿。**无 fix PR**。链接: openclaw/openclaw Issue #167406
- **#178291** 2026.10.4→10.5 升级后 Doctor 校验失败。**已关闭**。链接: openclaw/openclaw Issue #178291

**P1 / 严重**
- **#177656** 主机 exec 共享状态完整性错误，稳定版无子结果。**无 fix PR**。链接: openclaw/openclaw Issue #177656
- **#168955** Windows 启动从 ~410s 劣化至 ~1030s（2026.10.1 回归），`sidecars.control-ui-assets` 阻塞 477s。**无 fix PR**。链接: openclaw/openclaw Issue #168955
- **#193262** Docker 状态目录绑定挂载自 Windows 盘时启动失败（原子写后 ENOENT fstat），标记为回归。**无 fix PR**。链接: openclaw/openclaw Issue #193262
- **#182647** 云 worker 会话在推理前失败（"Session capability metadata requires worker preparation"），标签含 `queueable-fix`。链接: openclaw/openclaw Issue #182647
- **#167557** 插件数据/设置延迟迁移永不收敛（Linux/npm），包恢复报"handoff lease 数据库身份变更"。**无 fix PR**。链接: openclaw/openclaw Issue #167557
- **#185656** 大型 zstd transcript 归档超出 Node 字符串上限（#170847 的回归），阻断更新。**无 fix PR**。链接: openclaw/openclaw Issue #185656
- **#126950** Telegram 非插件调用方的不透明 callback 负载被静默丢弃（消息丢失）。链接: openclaw/openclaw Issue #126950
- **#143581** Signal 入站消息卡在 spool 重试循环约 23 小时，回复延迟至重启。链接: openclaw/openclaw Issue #143581
- **#156895** agent 创建的定时任务约 20ms 内失败关闭，提示账户不可用（需安全评审）。链接: openclaw/openclaw Issue #156895
- **#128140** `memory_search` 工具恒定 15s 超时，而 CLI 版本正常。链接: openclaw/openclaw Issue #128140

**P2 / 体验与状态**
- **#191944** macOS `gateway stop` 失败（进程祖先无法检查）。链接: openclaw/openclaw Issue #191944
- **#123792** CLI 后端下助手回复重复渲染（CLI 逐块视图 + 聚合记录）。链接: openclaw/openclaw Issue #123792
- **#143017** 持久会话五种方式改写前缀，实测 21.3M 缓存写入 token。链接: openclaw/openclaw Issue #143017
- **#166634** 崩溃恢复后 agent 永久拒绝 chat.history / metadata 等。链接: openclaw/openclaw Issue #166634
- **#127195** 16 处调用点抛出完全相同的错误字符串且无原因码。链接: openclaw/openclaw Issue #127195
- **#167609** Code Mode 将 guest 脚本 TypeError 报为 `internal_error`，仅能靠 failurePhase 区分。链接: openclaw/openclaw Issue #167609

**观察**：多个 P0/P1 均标注 `no-new-fix-pr`，说明根因复杂或需产品/架构决策，短期难以收敛。2026.9.6 与 2026.10.1~10.5 两条版本线是回归高发区，建议维护者在下一版本前做专项回归审计。

## 6. 功能请求与路线图信号

- **#59149** 按 agent 维度的 `agentToAgent` 与会话可见性作用域（当前全局开关，二选一困境）。有 `linked-pr-open`，**纳入可能性中高**。链接: openclaw/openclaw Issue #59149
- **#150238** 为 Skill Workshop Experience Review 增加上下文预算/跳过策略，防止超大会话耗尽上下文。有 `linked-pr-open`。链接: openclaw/openclaw Issue #150238
- **#163739** 让 Control UI 的 Ctrl+Shift+A（归档）可配置，避免与浏览器快捷键冲突。有 `linked-pr-open`。链接: openclaw/openclaw Issue #163739
- **#114913** 内存检索：在外层工具截止前约束主嵌入调用并回退至 FTS。有 `linked-pr-open`，且 `fix-shape-clear`。链接: openclaw/openclaw Issue #114913
- PR **#189816** WhatsApp 支持编辑机器人自身消息（对齐 Telegram/Discord）。**评审中**。链接: openclaw/openclaw PR #189816
- PR **#141004** 在持久审计中记录运行时技能使用情况。链接: openclaw/openclaw PR #141004
- PR **#180525** 支持从本地构建归档（.tgz）离线添加包。链接: openclaw/openclaw PR #180525

**判断**：带 `linked-pr-open` + `fix-shape-clear` 标签的三项（#59149、#114913、#150238）最具进入下一版本的现实性；通道能力补齐类（WhatsApp 编辑）属渐进式增强。

## 7. 用户反馈摘要

- **生产部署者占主导，痛点在可用性**：用户多在自托管、多 agent、systemd/Docker/LXC 环境中运行（如 #143581 的 Debian LXC + systemd --user、#166017 的 Docker 沙箱每 agent 约 13 个 MCP 服务）。他们对 Gateway 阻塞、启动时长、崩溃后不可恢复的容忍度极低。
- **跨平台体验不一致**：macOS 无法停止网关（#191944）、Windows 启动陡增且绑定挂载失败（#168955、#193262）、Windows MSIX Codex 插件致主线程饥饿（#167406）——平台矩阵是稳定性短板。
- **成本敏感**：用户自行测量 prompt 缓存命中率（#84110 的 93%→47%）与缓存写入 token（#143017 的 21.3M），显示真实账单压力驱动其排查；缺失运行级 turn/token 预算与默认关闭的工具循环检测（#178373）被认为是成本失控来源。链接: openclaw/openclaw Issue #178373
- **可诊断性不足引发不满**：多条反馈指出错误信息完全相同、无原因码（#127195）、guest 错误被伪装为宿主错误（#167609），增加自助排查成本。
- **升级可靠性焦虑**：2026.10.x 系列多次出现升级后 Doctor 失败、迁移不收敛、归档超限阻断更新（#178291、#185656、#167557），用户反复提示"修复已合并但未随版本发布"。

## 8. 待处理积压

- **#59149**（创建 2026-04-01，已 7 个月）多 agent 作用域控制，评论 11、👍2，有 linked PR 但滞留。链接: openclaw/openclaw Issue #59149
- **#84110**（创建 2026-05-19）Codex prompt 缓存击穿，今日刚关闭，但长期未纳入核心修复。链接: openclaw/openclaw Issue #84110
- **#114913**（创建 2026-07-28，已标记 stale）内存检索嵌入截止与 FTS 回退，有 fix-shape-clear 却仍待评审。链接: openclaw/openclaw Issue #114913
- **#123792**（创建 2026-08-14）CLI 后端重复渲染，影响 Control UI、Webchat 与 Android，持续 3 个月未解决。链接: openclaw/openclaw Issue #123792
- **#128140** 与 **#136405**（2026-08 起）`memory_search` 恒定 15s 超时的同类问题，长期仅标 `needs-live-repro`，缺少超时/重试配置。链接: openclaw/openclaw Issue #128140 · openclaw/openclaw Issue #136405
- **PR #141004**（创建 2026-09-07）审计技能使用，XL 规模，涉及 gateway/agents/docs 多模块，评审停滞已两个月。链接: openclaw/openclaw PR #141004

**给维护者的建议**：优先处理 #160959 与 #168955 两条回归主线的根因定位；对 #59149、#114913、#141004 这三个长期滞留项明确"接受/拒绝/延期"的路线图表态，避免社区热度继续沉淀为积压。

*说明：本报告仅基于所提供的 OpenClaw GitHub 数据（2026-11-07 快照）生成，评论数为数据中给定值；PR 评论数在源数据中为 `undefined`，故未作排序依据。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析（2026-11-07）

> 数据来源：各项目 2026-11-07 GitHub 活动摘要。所有数字均为当日快照，未提供的信息不作推断。TinyClaw、ZeptoClaw 当日无活动。

---

## 1. 生态全景

生态整体处于**“高迭代、高摩擦”**阶段：头部项目（OpenClaw）以每日数百条 Issue/PR 的规模狂奔，但回归集中在网关可用性、升级链路与缓存成本等运行期核心路径，质量门槛正在成为主要瓶颈。多项目共同的增量来源已从“加功能”转向**成本控制、可诊断性、provider 生态扩张与安全闸口（审批/沙箱/OIDC）**。长尾项目（NullClaw、IronClaw、Moltis、PicoClaw）暴露出评审吞吐不足与发布工程薄弱，而 Tsubasa、Standard Compute、CloudGPU 等第三方 provider 接入 PR 在五六个仓库中同时出现，显示**OpenAI 兼容层正在成为事实标准接口**。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃·关闭） | PR（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 344 · 149（共 493） | 311 · 189（共 500） | 无 | 高吞吐但评审积压重；P0/P1 回归多标 `no-new-fix-pr`，发布质量是主要风险 |
| **Hermes Agent** | 43 · 7（共 50） | 44 · 6（共 50） | 无 | 活跃但积压明显；桌面 P2 缺陷多条无 fix PR；构建回归已快速关闭 |
| **ZeroClaw** | 17 · 3（共 20） | 29 · 3（共 32） | 无 | 高活跃、评审瓶颈突出；S1 一起、数据丢失类一起；安全边界问题连续暴露 |
| **NanoClaw** | 0 | 25 · 15（共 40） | 无 | PR 侧高活跃、Issue 侧静默；硬化类修复集中，但关键修复（Windows CLI、审批一致性）未合入 |
| **CoPaw** | 2 新开 · 1 关闭 | 8 · 0（含 1 CLOSED） | 无 | 中等偏活跃；“输入多、合入少”，beta 启动回归无 fix PR |
| **NanoBot** | 5 · 1（共 6） | 5 · 2（共 7） | 无 | 良好；问题有闭环、修复有测试，但 `/goal` 修复 PR 冲突滞留 3 个月 |
| **LobsterAI** | 0 | 0 · 2 | 无 | 稳定维护期；认证链路两项修复闭环，社区互动为零 |
| **Moltis** | 1 新开 | 1 · 1 | 无（v0.10.2 零资产事故） | 预警：发布工程是薄弱环节，安装脚本 404 无 fix PR |
| **PicoClaw** | 1 · 1 | 3 · 1 | 无 | 平稳；缺陷次日即有 fix PR，但未合并 |
| **IronClaw** | 1 存量刷新 | 0 · 0 | 无 | 低风险、低动能；开发近乎停滞 |
| **NullClaw** | 0 | 1 · 0 | 无 | 需关注；唯一 PR 滞留超一个月，贡献无输出闭环 |
| **TinyClaw / ZeptoClaw** | 无活动 | 无活动 | 无 | — |

---

## 3. OpenClaw 在生态中的定位

**规模断层领先。** OpenClaw 单日 Issue 更新 493 条、PR 更新 500 条，约为第二梯队（Hermes、ZeroClaw、NanoClaw 各 40–50 条）的 10 倍，是长尾项目（个位数）的两个数量级之上。其社区已形成“生产部署者主导”的结构——用户运行在自托管、多 agent、systemd/Docker/LXC 环境中，会自行测量 prompt 缓存命中率（#84110：93%→47%）与缓存写入 token（#143017：21.3M），对可用性容忍度极低。

**优势：**
- 功能面最宽——网关、通道（Telegram/Signal/WhatsApp/Discord）、记忆/梦境机制、MCP、Code Mode、Control UI 全覆盖，是生态中唯一具备“完整助手栈”形态的项目。
- 架构纵深带来真实生产问题，也因此成为**生态的回归风向标**：2026.9.6 的插件捕获阻塞事件循环（#160959，80 条评论断层第一）与 2026.10.1~10.5 的启动劣化（#168955：410s→1030s）揭示了大规模插件生态与冷启动的固有张力。

**技术路线差异：** 与多数同类“薄封装 + provider 目录”路线不同，OpenClaw 走**重运行时**路线——Gateway 作为核心进程、插件捕获/沙箱/共享状态完整性校验（#177656 的 integrity-admission 错误）均为自研机制，复杂度高、可诊断性诉求也最强（#127195：16 处调用点抛同一错误串、无原因码）。

**风险：** 311 条待合并 PR、多个 P0/P1 标 `no-new-fix-pr`，说明根因复杂或需架构决策；发布质量门槛是当前最大健康度风险，也是同类项目尚未触及该规模时的前车之鉴。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Provider 生态扩张 / OpenAI 兼容层标准化** | NanoBot（#5718 OpenRouter Images、#6199 Standard Compute、#5947 Tsubasa）、PicoClaw（#3397 Tsubasa、#3431 Standard Compute、#3464 CloudGPU）、NullClaw（#1013 Tsubasa）、Moltis（#1288 Tsubasa）、IronClaw（#8115 Tsubasa）、ZeroClaw（#11207 Tsubasa 文档、#11721 Standard Compute） | 第三方模型服务希望被“一等公民”化：具名注册表条目、一键选择、按 provider 配置密钥与上下文窗口，而非手动填 API base 绕行 |
| **成本与上下文预算可控** | OpenClaw（#84110 缓存击穿、#143017 缓存写入、#178373 缺 turn/token 预算）、CoPaw（#8613 压缩预留输出额度、#8614 token 估算偏差、#8615 网关上下文溢出识别）、ZeroClaw（#11696 system prompt 每轮重建击穿缓存） | 显式预算、准确计量、缓存友好，账单压力驱动一线排查 |
| **可诊断性与错误语义** | OpenClaw（#127195、#167609）、Hermes（#127195 同族：列表≠实际加载 #64391、版本日期错误 #148353）、CoPaw（#8612 执行类工具调用可读性） | 原因码、可区分错误类型、用户可自助定位；工具输出需“一句人话” |
| **安全闸口：审批 / 沙箱 / 身份** | NanoClaw（审批卡片四件套 #4147/#4156/#4168/#4171、沙箱自检 #6595）、NanoBot（沙箱探针 #6595）、ZeroClaw（OIDC #12047/#12048/#12280、per-agent 工具所有权 #9746）、Hermes（OIDC 权限 #144156、MCP 环境变量展开 #72338） | 人工确认链路不可被通道抢先裁决；沙箱配置可检查；OIDC/多租户下权限边界可严格判定 |
| **多智能体 / 委托语义** | CoPaw（#2420 协作引导、通信触发、身份混淆）、PicoClaw（#3465 `allow_direct_message` 控制子智能体回话）、ZeroClaw（#12211/#12235 delegate 不加载 TOOLS.md、不遵循原生工具调用）、NanoBot（#5256 `/goal` 续推失控） | 子智能体“回话权限”可开关；委托后不降级；自动续推必须有边界 |
| **记忆 / 会话数据保真** | ZeroClaw（#11420 created_at 被重写 10 评论、#12279 截断丢消息）、NanoClaw（#1644 全局记忆路径与可写挂载）、OpenClaw（#150635 召回驱逐、#166634 崩溃后不可恢复）、Hermes（#150630 previous_message 丢失） | 消息级可追溯、append-only 历史、崩溃可恢复 |
| **跨平台体验一致性** | OpenClaw（macOS `gateway stop` #191944、Windows 启动劣化 #168955、MSIX #167406）、NanoClaw（Windows 命名管道 #4045、Linux/WSL 缺 jq #4202）、Hermes（Windows 卡顿 #146383、iOS 草稿 #150134）、PicoClaw、Moltis | 平台矩阵是稳定性短板，停止服务、安装、启动等基础操作在非主流平台不可用 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈助手（网关+通道+记忆+MCP+Control UI） | 自托管生产部署者、多 agent 运维 | 重运行时：常驻 Gateway、插件捕获、共享状态完整性校验、Code Mode |
| **Hermes Agent** | Desktop 应用 + Bot Mode + 插件目录 | 桌面日常使用者、自托管 OIDC 企业、远端网关场景 | Electron 桌面 + 服务端分离；插件 API 与用量 RPC 为增量主战场 |
| **ZeroClaw** | 多用户/多租户网关 + 安全鉴权 | 反向代理 + OIDC + 多用户 dashboard 的部署方 | SQLite 会话后端、append-only 事件历史、scoped dashboard、per-agent 工具所有权 |
| **NanoClaw** | 通道覆盖 + skill 交付集成 | 消息平台重度用户（Slack/Discord/Teams/iMessage/WhatsApp Cloud） | 以 skill 形式交付集成；审批卡片、网络绑定、跨平台安装为核心硬化面 |
| **NanoBot** | WebUI 体验 + provider 目录 | WebUI 日常用户、第三方 provider 尝鲜者 | 轻量，WebUI 是主要交互面；沙箱可检查性为新增安全方向 |
| **CoPaw** | 上下文/token 工程 + 工具可读性 | 中文 Windows 用户、本地 Ollama 用户 | 模型提供方回退、压缩规划、token 校准等计量层修复密集 |
| **PicoClaw** | 边缘/低强度迭代 + provider 接入 | 轻量部署用户 | 小步迭代，工具参数级增强（`allow_direct_message`） |
| **Moltis** | 发布工程 + provider 扩展 | 安装脚本使用者 | 工具预设控制、setup 与 model registry |
| **LobsterAI** | 认证链路 | 订阅账号用户 | 渲染进程/主进程分离，网关生命周期管理 |
| **NullClaw / IronClaw** | provider 目录（单点） | 小众 | 极低活动，积压为主 |

**关键对比：** OpenClaw 与 ZeroClaw 同走“重运行时 + 多租户”路线，但 ZeroClaw 把安全边界（OIDC、限流、工具所有权）做成显式主题并挂 `release:v0.9.0` 门禁；Hermes/NanoClaw 则以“应用层体验 + 通道广度”取胜，架构更薄但平台摩擦更分散。

---

## 6. 社区热度与成熟度分层

**第一层：规模化快速迭代（但质量巩固滞后）— OpenClaw**
日更 500 条 PR 量级，功能与缺陷同时高速涌入；回归集中在版本线（2026.9.6、2026.10.1~10.5），处于“跑得快、止血也密”的阶段，需专项回归审计。

**第二层：快速迭代 + 质量巩固并行 — ZeroClaw、NanoClaw、Hermes Agent、CoPaw、NanoBot**
- ZeroClaw：`risk:high`/`release-gate` 标签体系成熟，但 29:3 的待合并/已合并比显示瓶颈在评审；安全类问题呈“修一个、暴露一个相邻边界”的连续出现。
- NanoClaw：Issue 侧零活动、PR 侧 40 条，问题通过 PR 流程进入评审，硬化（`kind/hardening`）治理主动；但 4 月创建的 PR 到 11 月才关闭，评审延迟明显。
- Hermes：构建回归快速关闭（响应快），但多条桌面 P2 无 fix PR，44 条待合并积压。
- CoPaw：8 条修复 PR 待评审、beta 启动回归无 fix PR，合并吞吐是明确短板。
- NanoBot：闭环质量最好（报告—修复—关闭完整），但 `/goal` 高危修复 PR 冲突滞留 3 个月。

**第三层：小步迭代 / 缺陷闭环中 — PicoClaw、Moltis、LobsterAI**
- PicoClaw：缺陷次日即有 fix PR，节奏健康。
- Moltis：代码侧正常，但发布工程（零资产 v0.10.2）是单点致命薄弱环节。
- LobsterAI：集中清账认证 bug，社区互动为零。

**第四层：低动能 / 静默 — NullClaw、IronClaw、TinyClaw、ZeptoClaw**
唯一贡献长期悬置（NullClaw #1013 超一个月）、开发近乎停滞（IronClaw PR 为 0）、完全无活动（TinyClaw、ZeptoClaw）。贡献者流失风险是这一层的共性。

---

## 7. 值得关注的趋势信号

1. **OpenAI 兼容层已成“接入底座”，provider 目录是下一版本的标配增量。** Tsubasa 一个 provider 在 NanoBot、PicoClaw、NullClaw、Moltis、IronClaw、ZeroClaw 六个仓库同时被提，Standard Compute 与 CloudGPU 紧随。**启示：** 新项目的 provider 抽象应默认按“具名注册表 + 密钥约定 + 显式上下文窗口”设计，否则会持续收到同类 PR。同时注意厂商自述推广属性（PicoClaw #3431 作者自陈任职），评审需关注中立性。

2. **成本可观测性从“运维诉求”升级为“产品功能”。** 用户自测缓存命中率、缓存写入 token、token 估算偏差（CoPaw 指出 UTF-8 字节/4 估算在数字/UUID 密集 prompt 下低估 1.2–4 倍）。**启示：** 运行级 turn/token 预算、按 provider 回报校准计量、压缩时预留 `max_tokens`，应作为一等功能而非事后补丁。

3. **“自动续推必须有边界”成为跨项目共识。** NanoBot `/goal` 单条指令放大成数十条回复（3 个月未修）、ZeroClaw delegate 循环、CoPaw 多智能体协作身份混淆，指向同一问题：**无人值守时 agent 的自主循环缺乏护栏**。**启示：** 续推上限、空闲判定、子智能体回话开关（PicoClaw `allow_direct_message`）应作为编排层默认能力。

4. **安全闸口的“最后一公里”在通道与身份层，而非模型层。** NanoClaw 审批卡片可被 WhatsApp/iMessage/网页聊天抢先裁决、可被注入与截断；ZeroClaw OIDC 限流键可冒用 loopback、redirect_uri 信任 Host 头。**启示：** 审批结果的裁决权必须留在宿主；身份与限流模块宜做成组审计而非逐点修补。

5. **发布与升级工程是被低估的可靠性维度。** Moltis 零资产发布直接阻断全部新安装；OpenClaw 10.x 系列反复出现升级后 Doctor 失败、迁移不收敛、归档超限阻断更新，用户反复提示“修复已合并但未随版本发布”。**启示：** 发布前产物存在性校验、安装脚本对缺失资产的降级提示、升级链回归测试（Hermes #150411 改为从真实发布版本起测是正面样例）应纳入 CI 门禁。

6. **可诊断性直接决定自助排查成本。** 同一错误串出现在 16 处调用点（OpenClaw #127195）、guest 错误被伪装为宿主错误（#167609）、`skills list` 列出的技能与实际加载不一致（Hermes #64391）。**启示：** 原因码、错误分层、列表视图与实际状态的一致性，是低成本高回报的工程投入。

7. **跨平台是长尾痛点而非头部卖点。** macOS 停不了网关、Windows 启动劣化与命名管道崩溃循环、Linux 缺 `jq` 装不上通道、中文 Windows 的 GBK 丢字节——平台矩阵的碎片化问题在多个仓库重复出现。**启示：** 对多数团队而言，优先保证“启动/停止/安装”三条基础路径在主流平台一致，比新增平台更有价值。

8. **评审吞吐正在成为生态级瓶颈。** ZeroClaw 29:3、CoPaw 8:0、Hermes 44:6、OpenClaw 311:189——多个项目的问题不在于“没人提”，而在于“没人合”。**启示：** 为长期 OPEN 的安全类/高风险 PR 设定评审 SLA、对同作者成组 PR 集中评审（CoPaw 建议的 #8613/#8614/#8615）、对接受/拒绝/延期给出明确路线图表态，是维持贡献者留存的关键动作。

---

*说明：本报告仅依据 2026-11-07 各项目提供的 GitHub 活动摘要生成；各项目评论数、PR 合并明细与 Issue 关闭原因在源数据中多处缺失，相关判断已作保守表述。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-11-07）

## 1. 今日速览

今日项目无新版本发布，但 Issues 与 PR 双线活跃：24 小时内 6 条 Issue 更新（5 开/活跃、1 关闭）、7 条 PR 更新（5 待合并、2 已关闭）。当日完成两项收口——WebUI 首次访问语言不再被固定为英文，以及 WebUI 昼夜主题与交互连续性优化；待合并侧新增沙箱自检能力与 OpenRouter 原生图像生成支持，同时多个第三方 provider 接入 PR 持续在队列中迭代。Bug 侧集中在 WebUI 滚动交互与 Feishu 附件丢失，均有明确复现路径。整体健康度良好：问题有闭环、修复有测试覆盖，但 `/goal` 重复回复这一 8 月即存在的 P2 问题（Issue #5257）与其 fix PR #5257 仍未合并，值得优先关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**已合并/关闭：**

- **PR #6594 [CLOSED] feat(webui): refine day-night themes and interaction continuity** — https://github.com/HKUDS/nanobot/pull/6594
  优化 WebUI 昼夜主题：日间保留原有猫咪形象，暗色侧边栏新增“睡帽猫”与配套夜间插画，配 Star 邀请使用蓝灰色表面；入口与对话界面保持中性、去除装饰性元素。属于体验层打磨。
- **PR #6591 [CLOSED] fix(webui): follow browser language on first visit** — https://github.com/HKUDS/nanobot/pull/6591
  修复首次访问时启动页跟随浏览器语言、但应用本体却切换并保存为英文的不一致；保存偏好从此仅保留用户显式选择。对应关闭 Issue #6583，形成“报告—修复—关闭”完整闭环。

**待合并（新动向）：**

- **PR #6595 [OPEN] feat(settings): check sandboxes and configure trusted launchers** — https://github.com/HKUDS/nanobot/pull/6595
  新增由 gateway 持有的显式沙箱检查：用生产级 launcher resolver 与 sandbox wrapper 启动有界探针（含临时文件），在不削弱命令隔离的前提下让沙箱配置可被检查。
- **PR #5718 [OPEN] feat(provider): support OpenRouter native image generation API** — https://github.com/HKUDS/nanobot/pull/5718
  接入 OpenRouter 原生 Images API，使图像生成能力与现有服务保持兼容并暴露更多生成选项。

整体看，项目今日在 WebUI 体验与本地化上完成两项收口，并向“可检查的沙箱安全”与“图像生成能力扩展”两个方向各前进一步。

## 4. 社区热点

- **Issue #5256 [OPEN] [bug] /goal 消息产生大量重复回复** — https://github.com/HKUDS/nanobot/issues/5256
  评论 3 条、👍1，是今日讨论最活跃的 Issue。用户发送单条 `/goal` 后收到数十条近乎相同的回复，且全部发生在等待用户回答期间，直到用户介入或模型“醒悟”才停止。背后诉求明确：**自动续推机制必须有边界**，不能在模型等待用户输入时反复触发 continue。
- **PR #5257 [OPEN] fix(agent): bound sustained-goal continuation when the turn goes idle** — https://github.com/HKUDS/nanobot/pull/5257
  与该 Issue 同作者、同日更新，直接对持续目标的文本续推做上限约束，防止每个最终答案都触发新的自动“continue”提示。二者构成“报告 + 修复”配对，是今日社区关注的核心。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 · Issue #5256 [OPEN] /goal 重复回复风暴** — https://github.com/HKUDS/nanobot/issues/5256
   单条指令引发数十条重复回复，直接影响会话可用性。**已有 fix PR #5257**，但处于冲突（conflict）标记、自 2026-08-05 起长期未合并。
2. **中 · Issue #6584 [OPEN] DeepSeek Chat Completions 图像工具结果使用了不支持的消息角色** — https://github.com/HKUDS/nanobot/issues/6584
   基于 main `3a37269` 核对：DeepSeek 视觉指南规定图像**仅支持在 `user` 消息**中，而当前实现以不支持的角色发送图像工具结果。属 provider 契约不匹配，影响视觉工具链。暂无 fix PR。
3. **中 · Issue #6596 [OPEN] [bug] Feishu 与文本同发的文件附件被静默丢弃** — https://github.com/HKUDS/nanobot/issues/6596
   用户在同一 p2p 会话中同时发送文本与文件时，飞书以单条 `post`（富文本）消息投递、附件放在顶层 `files` 数组，而 Feishu channel 未解析该结构，导致附件丢失且无提示。暂无 fix PR。
4. **低 · Issue #6593 [OPEN] [WebUI] 回到底部按钮闪烁** — https://github.com/HKUDS/nanobot/issues/6593
   点击后按钮消失、在平滑滚动的大部分过程中重新出现、到达后再消失；确认为真实卸载/重挂载与动画问题。暂无 fix PR。
5. **低 · Issue #6592 [OPEN] [WebUI] 中键自动滚动被逐帧拉回底部** — https://github.com/HKUDS/nanobot/issues/6592
   长会话停在底部时，中键自动滚动无法移动页面，视口每帧被吸附回底部并抖动（滚轮正常）。暂无 fix PR。

**已修复：** Issue #6583 WebUI 语言首次访问被固定为英文，已由 PR #6591 关闭。

## 6. 功能请求与路线图信号

- **沙箱可检查性（PR #6595）**：以显式探针方式验证沙箱与可信 launcher 配置，兼顾可观察性与命令隔离，属安全/运维方向的增量改进，落地可能性较高。
- **图像生成能力（PR #5718）**：OpenRouter 原生 Images API 接入，涉及 documentation / provider / feature / test，标签完整，但自 2026-09-09 起仍在队列。
- **Provider 生态扩张（PR #6199、PR #5947）**：分别新增 OpenAI 兼容网关 Standard Compute（作者声明为该平台开发者）与 Tsubasa provider 元数据（支持 `tsubasa-fast` / `tsubasa-pro` 与 `${TSUBASA_API_KEY}`）。两者均复用现有 OpenAI 兼容客户端，属低耦合接入，作为下一版本的 provider 目录扩充具备条件。
- **结合判断**：WebUI 体验（语言、主题、滚动）今日已有实际收口；下一版本较可能吸纳 provider 扩充与沙箱检查，而 `/goal` 续推约束取决于 PR #5257 能否解决冲突并合并。

## 7. 用户反馈摘要

- **自动续推是最大痛点**：Issue #5256 的 3 条评论集中在一个单条指令失控放大成数十条回复的场景，且仅在用户手动介入后才终止，说明用户对“无人值守时 agent 仍持续输出”缺乏信任与控制感。
- **跨平台消息保真度不足**：Issue #6596 反映真实使用场景——用户在飞书 p2p 会话里“边发文件边发文字”，附件却被静默丢弃，无报错也无提示，属静默数据丢失类体验问题。
- **WebUI 细节摩擦被持续上报**：同日由同一用户（ovo-agentx）提交 3 条 WebUI Issue（#6593、#6592、#6583），覆盖滚动按钮、中键自动滚动与语言默认值，说明 WebUI 日常交互已成为活跃反馈面，且该用户反馈质量较高（含复现细节）。
- **provider 契约问题由用户主动核对**：Issue #6584 用户自带 commit 哈希与官方文档链接比对行为差异，体现出社区对多 provider 兼容性的审慎态度。
- 今日未见明确表达满意/赞赏的评论内容。

## 8. 待处理积压

- **PR #5257 [OPEN, conflict] fix(agent): bound sustained-goal continuation** — https://github.com/HKUDS/nanobot/pull/5257
  自 2026-08-05 创建、已 3 个月未合并，且带 conflict 标记；对应的高优 Bug #5256 至今仍在 OPEN。建议优先解决冲突并推进合并，否则重复回复问题将持续暴露给用户。
- **PR #5718 [OPEN] OpenRouter 原生图像生成** — https://github.com/HKUDS/nanobot/pull/5718
  自 2026-09-09 起待合并近 2 个月，期间 OpenRouter 能力已上线，存在继续滞后的兼容风险。
- **PR #5947 [OPEN] Tsubasa provider 元数据** — https://github.com/HKUDS/nanobot/pull/5947（2026-09-28 创建）与 **PR #6199 [OPEN] Standard Compute gateway provider** — https://github.com/HKUDS/nanobot/pull/6199（2026-10-13 创建）
  两个 provider 接入类 PR 均已挂起数周且今日再次更新，建议给出统一的 provider 接入评审结论，避免同类 PR 长期堆积。
- **Issue #5256 [OPEN] /goal 重复回复** — https://github.com/HKUDS/nanobot/issues/5256
  作为今日评论最多的 Issue，其修复依赖上述 #5257，建议在日报周期内明确处理时间表。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-11-07）

> 数据来源：NousResearch/hermes-agent GitHub 过去 24 小时活动。仅基于所提供材料撰写，未提供的信息（如具体评论正文）不作推断。

---

## 1. 今日速览

- 项目维持高活跃度：24 小时内 Issues 更新 50 条（新开/活跃 43，关闭 7），PR 更新 50 条（待合并 44，合并/关闭 6），无新版本发布。
- 今日工作重心集中在 **Desktop 应用稳定性**：会话切换卡顿、媒体下载失败、工具行标签、草稿恢复等多条 P2 缺陷被集中报告。
- 一个**已关闭的高优先级构建回归**（macOS 桌面构建因 pnpm 切换失败，#149861）表明维护者响应较快，但相关上游问题值得复盘。
- PR 侧以修复类提交为主（用量统计、记忆上下文、委派会话、MCP 环境变量展开等），另有若干插件目录（plugin-catalog）更新，反映插件生态仍在扩张。
- 整体健康度评估：**活跃但积压明显**，44 条 PR 处于待合并状态，且多条长期未响应事项（见第 8 节）需要清理。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

> 注：数据中 PR 的“合并/关闭”共 6 条，但仅列出 1 条已关闭 PR，其余未提供细节，故仅就可见项说明。

- **#150411 [CLOSED] test(upgrade): start from real releases; the next release moves a file**（作者 alt-glitch）
  - 升级测试套件改为从最新真实发布版本（v0.23.0）起测，而非旧的 v2026.9.24；解决了重启等待上限可能导致的挂起问题。属工程基础设施改进，提升发布回归测试的可信度。
  - 链接: https://github.com/NousResearch/hermes-agent/pull/150411
- 另有 **#150156、#150157** 两条“误开即撤回”的 Issue 已关闭，无实质内容，属噪音清理。
- 总体评价：今日无合并的重大功能 PR，面向前的推进主要体现为**测试/升级流程**与**插件目录扩充**（见下），实质功能进展有限。

---

## 4. 社区热点

按评论数与反应排序：

1. **#52554 [OPEN] Desktop 聊天面板选中文本时浮动“Quote”按钮**（评论 12，👍 4，P3）
   - 诉求：当前引用聊天内容仅能靠快捷键（macOS ⌥-drag / 其他 Shift-drag），用户希望有更直观的引用交互。虽为 P3，但评论数最高，说明体验细节关注度高。
   - 链接: https://github.com/NousResearch/hermes-agent/issues/52554
2. **#149861 [CLOSED] macOS 桌面构建因 pnpm 切换失败**（评论 6，P2，cause/upstream）
   - 诉求：npm→pnpm 切换后 pnpm 12.15.0 静默丢弃 `get-windows` 可选依赖，导致构建卡在旧版本、更新横幅持续提示。已关闭，反映构建链脆弱性。
   - 链接: https://github.com/NousResearch/hermes-agent/issues/149861
3. **#137843 [OPEN] 切换会话后工作区文件面板永久 loading**（评论 4，P2）
   - 诉求：Windows 桌面版会话切换导致文件树状态重置且无重新加载路径。
   - 链接: https://github.com/NousResearch/hermes-agent/issues/137843
4. **#64391 [OPEN] `skills list --enabled-only` 可能列出 prompt 不可用技能**（评论 3，P2）
   - 诉求：CLI 列表与系统提示构建器的条件过滤不一致，造成“列出≠实际加载”的认知偏差。
   - 链接: https://github.com/NousResearch/hermes-agent/issues/64391
5. **#144156 [OPEN] OIDC 登录无法删除/重命名/归档/置顶自己创建的 Desktop 会话**（评论 2，👍 2，P2）
   - 诉求：自托管 OIDC（Authentik）场景下权限模型缺陷，企业部署用户受影响。
   - 链接: https://github.com/NousResearch/hermes-agent/issues/144156

**背后诉求分析**：热点集中在 **Desktop 交互可用性**（引用、状态指示、文件面板）与 **部署/权限场景**（OIDC、远端网关），而非新功能。用户已进入日常化使用阶段，对“看得见、点得动、权限对”的基础体验要求上升。

---

## 5. Bug 与稳定性

按严重程度（P2 优先）排列，标注 fix PR 状态：

| Issue | 严重度 | 问题 | Fix PR |
|---|---|---|---|
| #149861 macOS 构建失败（pnpm 丢弃可选依赖） | P2 | 已关闭；构建回归，桌面版无法更新 | 已关闭处理 |
| #137843 切换会话后文件面板永久 loading | P2 | Windows 桌面文件树无重载路径 | 未见对应 PR |
| #146383 Windows 桌面切标签/会话卡顿 4–8s | P2 | 疑似 `prefers-reduced-motion` 下 `*` 的 `transition-duration:.01ms` 约占 1s | 未见对应 PR |
| #144156 OIDC 会话删除等操作 permission_denied | P2 | 权限模型缺陷 | 未见对应 PR |
| #131495 Bot Screen 泄漏 XDG_* 环境变量至所有终端命令 | P2 | 导致 `gh` 未登录、`uv` 看不到工具 | 未见对应 PR |
| #149979 远端网关下 Bot Chat 媒体下载 “Session not found” | P2 | 跨机 gateway 场景 | 未见对应 PR |
| #150086 初始化回退忽略命名 provider 的 transport 与 reasoning effort | P2 | 第三方调用方受影响 | 未见对应 PR |
| #150134 iOS：mid-turn steering 消息残留在输入框 | P2 | 草稿与已提交消息重复 | 未见对应 PR |
| #150135 工具行以截断路径前缀命名，写入看似重复 | P2 | 可读性/误判风险 | 未见对应 PR |
| #149501 消息平台会话 “Move to project” 恒失败 | P2 | runtime_coordination_required，UI 无出路 | 未见对应 PR |
| #149597 Windows `hermes update` 10s 强停 gateway | P2 | 早于失败判定，与 1800s 排空等待冲突 | 未见对应 PR |
| #148353 `__release_date__` 硬编码，版本日期显示错误 | P3 | v0.22.5 显示 2026.9.24 | 未见对应 PR |
| #150634 Windows AI 生成 git commit 恒 30s 超时 | 未标级别 | 模型耗时过长被截断 | 未见对应 PR |

**已有修复 PR 的相关项（在 PR 列表中可见）：**
- **PR #150758**：修正 Anthropic OAuth utilization 按百分比而非分数读取（关联 #149828）。
  - https://github.com/NousResearch/hermes-agent/pull/150758
- **PR #150630**：修复多模态轮次后 `previous_message` 丢失记忆/插件注记的问题。
  - https://github.com/NousResearch/hermes-agent/pull/150630
- **PR #150198**：修复 Desktop 打开父会话却显示被委派子代理转录的问题。
  - https://github.com/NousResearch/hermes-agent/pull/150198
- **PR #150147**：对后加入的记忆工具 schema 做清洗，避免 `["number","null"]` 直达后端。
  - https://github.com/NousResearch/hermes-agent/pull/150147
- **PR #138079**：drain 报告保留空 `active_work` 并校验 `gui/<uid>` 登录。
  - https://github.com/NousResearch/hermes-agent/pull/138079

> 提示：#137843、#146383、#149979、#149501、#149597 等多条 P2 桌面缺陷目前**无可关联的修复 PR**。

---

## 6. 功能请求与路线图信号

| 需求 | 级别 | 关联 PR/进展 | 纳入下一版本可能性判断 |
|---|---|---|---|
| #52554 聊天面板选中文本浮动 Quote 按钮 | P3 | 无关联 PR | 讨论热但级别低，短期难定档 |
| #141119 只读用量/配额 RPC，供插件展示 provider 配额而不读凭据 | P3 | 无关联 PR；与用量修复 #150758 主题相近 | 中：生态插件已自行实现，需求真实但需设计 |
| #149198 用图标替代会话状态色点（无障碍） | P3 | 无关联 PR | 中低：改动小、价值明确 |
| #149732 插件 API：原子 native-idle 栅栏，支持会话级模式切换 | P3 | 无关联 PR | 中：面向插件作者的基础能力 |
| #150154 PR：WhatsApp 可隐藏自动恢复进度 | P3 | 已有 PR | 较高：小型开关，已提交 |
| #150149 PR：对话循环加入 Silero VAD（堆叠于 #103279） | P3 | 已有 PR，依赖 #103279 先落地 | 中：需先合入 #103279 实时语音 |
| #150150 PR：新增 hermes-wallpaper 插件目录 | P3 | 已有 PR | 较高：目录类改动，门槛低 |

**信号解读**：插件生态（目录新增、插件 API、用量 RPC）正成为路线图主要增量来源；核心交互改进（Quote、无障碍）尚处 P3 讨论期。

---

## 7. 用户反馈摘要

> 基于 Issues/PR 摘要，未提供评论正文，以下为可提炼要点。

- **使用场景多样且真实**：桌面端（Windows/macOS/Electron+iOS）、自托管 OIDC 企业部署、远端网关（A 机服务/B 机客户端）、第三方 WebUI（nesquena/hermes-webui）、Bot Mode 多 profile、消息平台（Telegram/WhatsApp）。
- **痛点集中在“可用性摩擦”而非功能缺失**：
  - 会话切换卡顿 4–8s、文件面板卡死、媒体下载报 Session not found——桌面日常操作被反复打断。
  - 权限问题（OIDC 下无法管理自己创建的会话）阻碍团队协作。
  - 环境隔离缺陷（XDG 变量泄漏）让 CLI 工具行为异常，排查困难。
  - 版本/日期显示与列表不一致（#148353、#64391）削弱对工具输出的信任。
- **正向信号**：用户积极提交带复现步骤、标签、甚至自行开发的插件（如 hermes-ai-subscriptions）与 Hackathon 参赛作品（Dexio），说明社区投入度高；#149861 快速被关闭也体现维护响应。

---

## 8. 待处理积压（提醒维护者关注）

| 事项 | 创建时间 | 停留时长（至 2026-11-07） | 说明 |
|---|---|---|---|
| **#52554** Quote 按钮 | 2026-06-25 | ~4.5 个月 | 评论最多（12）仍 OPEN，P3 长期悬置 |
| **#64391** skills 列表过滤不一致 | 2026-07-14 | ~4 个月 | P2，语义正确性问题 |
| **#72338** MCP stdio 延迟环境变量展开 | 2026-07-27 | ~3.5 个月 | 标记 security-boundary/compatibility 风险，PR 长期 OPEN |
| **#85342** Docker 持久复用配置漂移即拒绝 | 2026-08-13 | ~3 个月 | needs-decision + 多风险标签，需产品决策 |
| **#103279** 服务端实时语音 WS `/v1/audio/converse` | 2026-09-04 | ~2 个月 | 大型特性，且阻塞 #150149 |
| **#137843** 文件面板卡 loading | 2026-10-13 | ~25 天 | P2，仍无 fix PR |
| **PR #138079** drain 报告/launchctl 校验 | 2026-10-13 | ~25 天 | P2 修复，长期未合 |

**建议**：优先对 #137843、#146383 等桌面 P2 缺陷指派负责人；对 #72338、#85342 的安全/兼容性标注项尽快给出决策结论，避免 44 条待合并 PR 中的关键修复长期滞留。

---

*本日报仅依据提供的 GitHub 活动数据生成；缺失评论正文、合并细节与版本说明的内容未作补充。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-07）

## 1. 今日速览

过去24小时项目保持低强度活跃：2 条 Issue 更新（1 开 1 关）、4 条 PR 更新（3 待合并、1 已关闭），无新版本发布。今日活跃内容高度集中在**提供商接入**（3 条 PR/Issue 相关）与**skills 安装逻辑缺陷**（1 Issue + 1 修复 PR）两条主线上。社区贡献者响应速度较快——#3462 的缺陷在次日即有对应修复 PR #3463，但修复尚未合并，用户侧问题仍处于未解决状态。整体健康度平稳，属于“小步迭代、缺陷闭环中”的常态节奏。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要变更：

- **[CLOSED] PR #3465** `feat(spawn): add allow_direct_message parameter to control direct user messaging`
  [sipeed/picoclaw PR #3465](https://github.com/sipeed/picoclaw/pull/3465)
  为 `spawn` 工具新增可选布尔参数 `allow_direct_message`（默认 `true`），用于控制被派生的子智能体在执行期间能否通过 `message` 工具直接向用户发送消息。这是对多智能体编排可控性的一次细化——赋予调用方对子智能体“回话权限”的开关能力，有助于避免子智能体绕过主流程打扰用户。该 PR 当日提交、当日关闭。

- **[CLOSED] Issue #3397** `[Feature] Add Tsubasa to the existing OpenAI-compatible provider catalog`
  [sipeed/picoclaw Issue #3397](https://github.com/sipeed/picoclaw/issues/3397)
  由作者 cenab 提出，标记为 stale，已关闭。诉求是让 Tsubasa 从“可通过自定义 API base 的显式 `openai` 条目手动配置”升级为提供商选择器中的正式选项。

整体推进幅度有限：一个已关闭的 PR 带来一处工具参数级增强，其余进展仍停留在待合并阶段，项目本日未产生结构性功能跃迁。

## 4. 社区热点

今日各条目评论数普遍偏低，热度最高的是：

- **Issue #3397**（2 条评论，已关闭）
  [sipeed/picoclaw Issue #3397](https://github.com/sipeed/picoclaw/issues/3397)
  讨论围绕 OpenAI 兼容提供商目录的扩展。核心诉求是**降低接入摩擦**：当前 Tsubasa 虽可工作，但需要用户手动填写 custom API base，无法在选择器中一键选用。这反映出一类共性期待——用户希望第三方兼容提供商被“一等公民”化，而非依赖手动配置绕行。

其余 3 条 PR 与 1 条 Issue 均无评论数据，社区讨论密度本日较低。

## 5. Bug 与稳定性

按严重程度排列：

- **高 — Issue #3462**（未解决，已有 fix PR 待合并）
  `skills install fails with "registry archive is not a valid skill" when another skill shares the frontmatter name`
  [sipeed/picoclaw Issue #3462](https://github.com/sipeed/picoclaw/issues/3462)
  用户 nelsonrochaa-creator 报告：当已安装的另一个 skill 在 `SKILL` frontmatter 中使用相同 `name` 时，`picoclaw skills install` 命令与智能体的 `install_skill` 工具均会失败并报错 `registry archive is not a valid skill`。这会直接阻断技能安装流程，影响所有存在同名 skill 的环境，属于功能性阻断缺陷。
  **Fix PR：[#3463 OPEN]** 将去重依据从 frontmatter `name` 改为按安装根目录（per root）判定，正在等待合并。

## 6. 功能请求与路线图信号

- **Tsubasa 加入 OpenAI 兼容提供商目录**（Issue #3397，已关闭，stale）
  [sipeed/picoclaw Issue #3397](https://github.com/sipeed/picoclaw/issues/3397)
  虽已关闭，但与今日两条 provider PR 同属一条演进路径，后续可能以新形式重新提出。

- **Standard Compute 提供商接入**（PR #3431，OPEN，stale）
  [sipeed/picoclaw PR #3431](https://github.com/sipeed/picoclaw/pull/3431)
  作者本人即为 Standard Compute 团队成员，将其作为 OpenAI 兼容网关接入（单 key 调用多家实验室模型），并明确沿用 #2917 的既有模式。

- **CloudGPU 提供商接入**（PR #3464，OPEN）
  [sipeed/picoclaw PR #3464](https://github.com/sipeed/picoclaw/pull/3464)
  将 `cloudgpu` 注册为内置 OpenAI 兼容 HTTP provider，支持 `"provider": "cloudgpu"` 或 `cloudgpu/<model>` 写法，仅需 API key。

**路线图判断**：三条 provider 相关线索（#3397、#3431、#3464）共同印证“扩展 OpenAI 兼容提供商目录”是当前最活跃的需求方向。若维护者对这类 PR 保持接受态度，#3464 具备近期合入的可能；#3431 因已 stale 近三周，需维护者明确表态才可能推进。

## 7. 用户反馈摘要

- **提供商选择器的完整性缺口**（Issue #3397）：用户实际已在用 Tsubasa，但只能走 `openai` + 自定义 API base 的迂回方式，说明现有目录覆盖不足会转化为持续的配置负担。
- **技能安装场景的真实阻塞**（Issue #3462）：缺陷出现在日常安装路径上（CLI 命令与 agent 内置工具双入口），用户遇到的是明确的报错失败而非体验瑕疵，直接影响技能生态的可用性。
- **贡献者自述动机**：#3431 作者公开表明“I work on Standard Compute”，提示部分 provider PR 带有厂商推广属性，维护者在评审时或需关注中立性与长期维护归属。

## 8. 待处理积压

- **PR #3431**（stale，创建 2026-10-15，已停滞逾三周）
  [sipeed/picoclaw PR #3431](https://github.com/sipeed/picoclaw/pull/3431)
  新增 Standard Compute provider。本日仍有更新但未见合并动向，建议维护者给出明确的接受/拒绝结论，避免贡献者长期等待。

- **PR #3463**（OPEN，对应 Issue #3462）
  [sipeed/picoclaw PR #3463](https://github.com/sipeed/picoclaw/pull/3463)
  修复技能安装因同名 frontmatter 而失败的问题。虽非长期积压，但因其修复的是高严重度阻断缺陷，建议优先评审合并。

- **PR #3464**（OPEN）
  [sipeed/picoclaw PR #3464](https://github.com/sipeed/picoclaw/pull/3464)
  CloudGPU provider 接入，今日新提，正常待评审。

> 说明：今日所有 Issues/PR 的 👍 均为 0，评论数据多处缺失，社区“反应热度”指标参考价值有限；健康度判断主要依据缺陷闭环速度与贡献流向。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-11-07

> 数据来源：NanoClaw (github.com/qwibitai/nanoclaw) GitHub 数据（PR 链接在数据中显示为 `nanocoai/nanoclaw`）。本日报仅基于所给数据，未提供的信息不作推断。

---

## 1. 今日速览

- 项目今日 Issues 通道**零活动**（0 条新开/活跃/关闭），社区讨论完全转移到 PR 侧。
- PR 侧高度活跃：过去 24 小时 **40 条 PR 更新**，其中 25 条待合并、15 条已合并/关闭，显示维护者与贡献者投入集中在代码评审与合并流程上。
- 无新版本发布（0 个 release），当前处于持续的修复与硬化（hardening）迭代阶段。
- 今日更新中由核心成员 `glifocat` 主导的 PR 占比显著，围绕审批卡片（approval cards）、通道（channels）、凭据与构建稳定性展开，项目治理呈现核心团队集中推进的特征。
- **活跃度评估：高（PR 侧）/ 低（Issue 侧）。** 项目健康度整体良好，但 Issues 无活动可能意味着用户反馈渠道利用率偏低，或反馈已沉淀为 PR。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日已合并/关闭（CLOSED）的 PR 中，可确认推进的方向包括：

- **#1595 [CLOSED] 新增 Contributor Covenant 行为准则** — 完善社区治理基础文件。作者：glifocat。链接：nanocoai/nanoclaw PR #1595
- **#1610 [CLOSED] 文档：Apple Container 与 pino 移除的破坏性变更条目** — 明确迁移路径：Apple Container 用户应运行 `/convert-to-apple-container` 而非 `/init-onecli`；pino 日志器移除后 WhatsApp 用户需重新合并相关 skill。作者：gavrielc。链接：nanocoai/nanoclaw PR #1610
- **#1634 [CLOSED] 迁移技能（Skill/migrate nanoclaw）** — 新增迁移类 skill。作者：gavrielc。链接：nanocoai/nanoclaw PR #1634
- **#1644 [CLOSED] 修复主 agent 全局记忆：修正路径并添加可写挂载** — 修复 `groups/main/CLAUDE.md` 文档中的路径错误与记忆可写性问题。作者：sargunv。链接：nanocoai/nanoclaw PR #1644
- **#1660 [CLOSED] Gmail skill：新增 OneCLI 凭据模式检测**。作者：johnnyfish。链接：nanocoai/nanoclaw PR #1660
- **#4085 [CLOSED] CI：将工作流 runner 固定到 ubuntu-26.04** — 避免 `ubuntu-latest` 于 2026-10-19 至 2026-11-19 滚动切换导致的 runner 漂移；覆盖 6 条工作流、18 个 job。作者：glifocat。链接：nanocoai/nanoclaw PR #4085

**整体推进评估：** 合并内容以「治理补齐 + 文档/迁移说明 + 记忆与凭据类缺陷修复 + CI 稳定性」为主，属于夯实基础、提升可维护性的迭代，未见大型功能特性落地。

---

## 4. 社区热点

> 说明：数据中所有列出的 PR 评论数均显示为 `undefined`、点赞均为 0，无法基于评论/反应量排序。以下按「核心主题聚集度」列出今日更新中最受关注的评审集群。

- **审批/卡片一致性与安全性集群（今日同时活跃的 5 条 PR）**
  - #4168 [OPEN] 修复(approvals)：仅在宿主接受点击后才解析已点击卡片。链接：nanocoai/nanoclaw PR #4168
  - #4171 [OPEN] 修复(channels)：通道侧同样等待宿主确认，覆盖文本命令答复与网页聊天。链接：nanocoai/nanoclaw PR #4171
  - #4156 [OPEN] 修复(channels)：转义审批卡片文本，并拒绝通道无法完整展示的卡片。链接：nanocoai/nanoclaw PR #4156
  - #4147 [OPEN] 修复(approvals)：审批卡片始终展示完整动作，避免被通道截断。链接：nanocoai/nanoclaw PR #4147

  **背后诉求：** 审批（人工确认）是 AI agent 执行动作前的关键安全闸口。这一集群聚焦「防止通道侧抢先显示审批结果」与「卡片文本注入/截断」，指向对**人机确认链路可信度**的强化，属于安全与体验的双重诉求。

- **构建稳定性：** #4290 [OPEN] 显式加载 `@types/node`，使 TypeScript 6 下保留 Node 全局类型，修复 #4284 引入的 add-opencode 检查失败。链接：nanocoai/nanoclaw PR #4290

- **旧的基线类 PR 陆续收口：** #1595、#1610、#1634、#1644、#1660 均创建于 2026-04 初，今日集中关闭，说明存在较长的评审周期。

---

## 5. Bug 与稳定性

按影响面排列（均已标注是否有对应 fix PR；相关 PR 均为 OPEN，尚未合并）：

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 高 | **Windows 下 `ncl` CLI 守护进程崩溃循环**：Node 在 NTFS 上 AF_UNIX 在 Windows 服务账户（NSSM）下报 `EACCES`，守护进程绑定后无法 `chmod data/ncl.sock`，下次启动重绑定失败，导致宿主每次重启都触发熔断循环。 | 有 fix PR #4045（改用命名管道） | nanocoai/nanoclaw PR #4045 |
| 中高 | **审批卡片可被通道抢先裁决**：WhatsApp(Baileys)、iMessage、本地网页聊天在宿主接受前自行回答待确认问题，且同一请求可能被多次决定。 | 有 fix PR #4168 / #4171 | nanocoai/nanoclaw PR #4168 · #4171 |
| 中 | **卡片文本渲染问题**：详情型卡片中动作仅出现在可被通道裁剪的标题里；卡片文本在 2,600 字符处被截断且无提示；文本可能被注入。 | 有 fix PR #4147 / #4156 | nanocoai/nanoclaw PR #4147 · #4156 |
| 中 | **主 agent 全局记忆失效**：路径文档错误 + 缺少可写挂载。 | 已修复（#1644 CLOSED） | nanocoai/nanoclaw PR #1644 |
| 中 | **Linux 裸机下 OneCLI 实例网络暴露面**：管理 API 与 Postgres 原暴露在 Docker 网桥，改为绑定 127.0.0.1。 | 有 fix PR #4199 | nanocoai/nanoclaw PR #4199 |
| 低中 | **Docker 容器 teardown 误报失败**：`--rm` 自动删除尚未完成时，`DockerHandle.stop()` 报告失败。 | 有 fix PR #4057 | nanocoai/nanoclaw PR #4057 |
| 低中 | **标准 Linux/WSL 上通道安装失败**：Slack、Discord、Telegram、Teams、Dial 安装依赖 `jq`，原环境未预装。 | 有 fix PR #4202（沿用已合并的 #4200 的 sudo 预检） | nanocoai/nanoclaw PR #4202 |
| 低 | **TypeScript 6 升级导致构建检查失败**：`types` 默认变为 `[]`，Node 全局类型丢失。 | 有 fix PR #4290 | nanocoai/nanoclaw PR #4290 |

**稳定性总评：** 今日无新报 Issue（0 条），上述问题均通过 PR 提交流程进入评审，体现团队对硬化（`kind/hardening`）类问题的主动治理；但关键修复（尤其 Windows CLI 崩溃循环、审批一致性）尚未合入，仍为待验证风险点。

---

## 6. 功能请求与路线图信号

今日无新的 Issue 型功能请求。从 PR 标签与内容可识别的路线信号：

- **技能（Skill）体系持续扩展**：新增迁移 skill（#1634，已关闭）、Gmail 凭据检测（#1660，已关闭）、`add-onecli` 安全加固（#4199，OPEN），表明「以 skill 形式交付集成」是既定路线。
- **通道覆盖广度优先**：Slack、Google Chat、Discord、Telegram、WhatsApp Cloud、iMessage、Teams、Dial 均在修复/加固范围内（#4156、#4202），下一代版本很可能继续以多通道一致性为主线。
- **平台兼容性补强**：Windows 命名管道（#4045）、标准 Linux/WSL 安装（#4202）、Apple Container 迁移路径（#1610）显示跨平台支持是路线图重点。

**可能纳入下一版本：** 若上述 OPEN 的 fix PR 合并，审批卡片可靠性与 Windows/Linux 安装体验将成为下一版本的主要卖点。

---

## 7. 用户反馈摘要

> 数据中 Issues 为 0 条，且 PR 评论数均为 `undefined`，**无 Issue 评论可直接提炼**。以下为用户痛点从 PR 描述中推导的真实使用场景与不满意点：

- **痛点：记忆不可用** — 主 agent 的全局记忆因 CLAUDE.md 路径写错与缺可写挂载而失效，直接削弱“个人 AI 助手”的长期上下文能力（#1644）。
- **痛点：安全问题** — 审批卡片可能被通道抢先标记为「✅ Approved by …」，且卡片文本可被注入、被截断，影响高风险动作的人工把关（#4168、#4156、#4147）。
- **痛点：平台体验** — Windows 用户遭遇守护进程反复熔断；标准 Ubuntu/WSL 用户因缺 `jq` 无法完成通道安装（#4045、#4202）。
- **痛点：升级迁移成本** — pino 移除要求 WhatsApp 用户手动重新合并 skill，Apple Container 用户需改跑其他命令，说明版本升级存在操作性摩擦（#1610）。
- **满意信号**：无直接数据（无评论/点赞）。

---

## 8. 待处理积压

以下 PR 均创建较早、至今仍为 OPEN，值得维护者优先安排评审：

- **#4045**（创建 2026-10-06，约 1 个月）Windows `ncl` 守护进程崩溃循环修复 — 平台级阻塞问题，影响面大。链接：nanocoai/nanoclaw PR #4045
- **#4057**（创建 2026-10-08）Docker teardown 误报修复。链接：nanocoai/nanoclaw PR #4057
- **#4147 / #4156 / #4168 / #4171**（创建 2026-10-19 ~ 10-21）审批卡片安全与一致性四件套 — 属安全相关，建议成组评审合入。链接：nanocoai/nanoclaw PR #4147 · #4156 · #4168 · #4171
- **#4199 / #4202**（创建 2026-10-23）OneCLI 网络绑定与 `jq` 安装修复 — 后者依赖已合并的 #4200，可较快推进。链接：nanocoai/nanoclaw PR #4199 · #4202

**维护者提示：** 今日关闭的多个 PR（#1595/#1610/#1634/#1644/#1660）从 4 月创建到 11 月才关闭，存在明显评审延迟；建议为长期 OPEN 的安全类 PR 设定评审 SLA，避免审批链路修复长期悬置。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-11-07）

## 1. 今日速览

过去24小时，NullClaw 项目整体活跃度极低，进入明显静默期。Issues 通道零更新（新开0、关闭0、活跃0），新版本发布0个。PR 通道仅有 1 条待合并 PR（#1013），已合并/关闭为0，无任何代码合入主干。唯一动作是这条由社区贡献者提交的 PR 更新了时间戳，属于沉淀积压的增量贡献而非今日新活动。综合评估：**项目健康度需关注，贡献输入存在但无输出闭环，维护侧响应能力是当前关键瓶颈。**

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

**今日无合并或关闭的 PR，项目主线功能零推进。** 唯一的 PR #1013 仍处于 OPEN 状态，未合入：

- **[PR #1013] feat(providers): add Tsubasa chat-completions provider**
  - 作者：cenab ｜ 创建：2026-09-28 ｜ 更新：2026-11-07
  - 链接：nullclaw/nullclaw PR #1013
  - 内容：将 Tsubasa 接入现有 OpenAI 兼容 provider 工厂、onboarding 列表与模型目录；凭据由 `TSUBASA_API_KEY` 选择；两个公开模型均为 32,768 token 上下文窗口，默认输出预算 8,192 token。

该 PR 自 9 月 28 日创建至今已超过一个月未合并，仅今日出现更新，说明项目在第三方模型接入方向上存在未释放的积压贡献。

## 4. 社区热点

今日无 Issues，PR 评论数为 undefined，无明确的讨论热点。就现存数据而言，唯一可关注的条目是上述 **PR #1013**（nullclaw/nullclaw PR #1013）。

背后诉求分析：该 PR 指向**模型接入广度**这一核心诉求——用户希望在不改动现有 OpenAI 兼容架构的前提下，快速新增第三方推理服务。其将新 provider 同时接入工厂、onboarding 与模型目录三处，反映社区对“开箱即用、配置最小化”的接入体验有明确期待。由于缺乏评论数据，无法判断争议点或评审阻塞原因。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题上报（Issues 更新为0），无对应 fix PR。稳定性信号暂无负面信息。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。基于已有 PR 判断：

- **PR #1013（Tsubasa provider）是唯一可能被纳入下一版本的功能性输入。** 若维护者完成评审，下一版本可预期扩展 OpenAI 兼容 provider 生态，并新增 `TSUBASA_API_KEY` 配置项。需注意其 32,768 token 上下文与 8,192 token 默认输出预算的模型参数应同步写入模型目录，避免用户预期偏差。

除该 PR 外，无其他路线图信号可佐证。

## 7. 用户反馈摘要

今日 Issues 评论为0，PR 评论数为 undefined，**无可提炼的真实用户痛点、使用场景或满意度反馈**。避免据此推断用户情绪。

## 8. 待处理积压

- **[PR #1013] Tsubasa chat-completions provider** — 创建于 2026-09-28，已滞留超过一个月，今日仅更新时间戳而无评审结论。
  链接：nullclaw/nullclaw PR #1013
  提醒：该 PR 是当前唯一的待合并贡献，长期悬置会增加贡献者流失风险，并延缓 provider 生态扩展。建议维护者明确给出评审意见（合入、修改或关闭）。

---

**数据说明：** 本报告仅基于所提供的 GitHub 数据生成。Issues 总数为0，PR 仅1条且评论数缺失，因此社区讨论强度、用户满意度与 Bug 趋势均无法做进一步推断。建议后续关注 PR #1013 的评审进展与 Issues 通道恢复情况。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-11-07）

## 1. 今日速览

今日 IronClaw 活跃度**偏低**：过去 24 小时无版本发布、无 PR 更新（合并、关闭、待合并均为 0），Issues 侧仅有 1 条更新且为单条存量 Issue 的活跃刷新（#8115，创建于 2026-09-28，更新于 2026-11-07，评论 0、👍 0）。项目处于稳定维护状态，但开发侧推进近乎停滞，社区互动信号微弱，整体健康度表现为“低风险、低动能”。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，项目功能与修复层面没有可观测的向前推进。待合并 PR 为 0，说明当前没有处于评审流转中的代码变更。

## 4. 社区热点

今日唯一有更新的条目为 Issue #8115（OPEN），但评论 0、👍 0，尚不构成实质讨论热度。该 Issue 提出：IronClaw 已具备 OpenAI 兼容后端，但用户配置 Tsubasa 时需手动填写 endpoint 与 model，希望通过具名的 provider 注册表条目简化配置，并附带显式的 32K 上下文预算路径。其背后诉求是**降低第三方模型提供商的接入摩擦、把上下文预算策略显式化**，属于配置体验与模型路由层面的改进需求。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告。#8115 描述的是配置便利性缺口，不属于稳定性缺陷。

## 6. 功能请求与路线图信号

- **#8115 — 为 Tsubasa 增加具名注册表条目 + 显式 32K 上下文预算路径**：属于 provider 注册与上下文预算管理方向的功能请求。由于今日该 Issue 无评论、无关联 PR，暂无证据表明其已进入排期或将被纳入下一版本，建议维护者明确表态。

## 7. 用户反馈摘要

可提炼的有效反馈仅来自 #8115：用户在使用 Tsubasa 时需手动输入 endpoint 与 model，配置成本偏高；期望以具名 provider 的方式预置配置，并显式声明 32K 上下文预算。今日无其他评论数据，无法形成满意/不满意面的整体判断。

## 8. 待处理积压

- **#8115**（创建于 2026-09-28，更新于 2026-11-07）：已存在约 6 周仍在 OPEN 状态，且 0 评论、0 👍，尚未获得维护者可见回应。尽管今日有更新，但缺乏互动，建议维护者给出处理结论（接受、延期或关闭），避免社区诉求长期悬置。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-11-07）

## 1. 今日速览

今日项目活跃度**偏低**，但结构健康：过去 24 小时无新人 Issues、无新版本发布，唯一动向是 2 个认证（auth）相关 PR 被关闭合并（#3026、#3025）。两项改动均聚焦登录链路可靠性——浏览器登录按钮无响应、登录后网关重复重启，属于面向用户体验的稳定性修复，针对性明确。整体看，今日是"收尾修 bug"而非"开新功能"的一天，项目在登录体验上有实质向前迈进，但社区互动信号为零，值得关注。

## 2. 版本发布

今日无新版本发布（0 个），无破坏性变更需注意。

## 3. 项目进展

今日共 2 个 PR 合并/关闭，全部围绕认证与登录稳定性：

- **PR #3026 [CLOSED]** `fix(auth): keep browser login visible and recoverable`（作者 fisherdaddy，涉及 area: renderer / main / cowork）
  修复用户反映"点击左下角登录按钮无反应"的问题。根因有二，其一为：应用在打开浏览器前向 overmind 查询登录 URL 时未设置超时，网络波动下会阻塞。该改动让浏览器登录保持可见、可恢复。
  🔗 netease-youdao/LobsterAI PR #3026

- **PR #3025 [CLOSED]** `fix(auth): avoid double gateway restart after login`（作者 fisherdaddy，area: main）
  修复使用订阅账号登录后 OpenClaw 网关重复重启的问题（两次相隔约 24s，首次耗时约 20s）。日志显示由 `media-entitlement-changed` 同步触发 `lobsterai-model-compat` 插件重载所致。
  🔗 netease-youdao/LobsterAI PR #3025

**推进评估**：两项均属"消除用户可感知故障"的修复，虽不引入新能力，但直接改善了登录这一核心入口的可用性，对首日用户留存有正向意义。今日合并/关闭量达 2 条而新开为 0，说明维护者处于集中清账状态。

## 4. 社区热点

今日无 Issues，两个已关闭 PR 的评论数据均缺失（`undefined`），👍 均为 0，**不存在讨论活跃的条目**。从诉求背景看，两个 PR 均源于真实用户反馈（"点击登录无反应"），说明认证入口是当前用户最敏感的触点，但反馈渠道未沉淀为公开 Issue 讨论。

## 5. Bug 与稳定性

今日无新报告 Issue，以下为随 PR 一并关闭的已修复问题，按影响严重程度排列：

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 高 | 登录按钮点击无响应（未设超时的 overmind 请求阻塞浏览器打开） | 已有 fix → PR #3026（已关闭） |
| 中 | 订阅账号登录后网关重复重启，首次约 20s | 已有 fix → PR #3025（已关闭） |

两项问题均已闭环，无遗留回归报告。但需注意：这两个问题此前是通过用户口头反馈而非 Issue 渠道暴露的，说明问题上报路径存在盲区。

## 6. 功能请求与路线图信号

今日无用户功能请求（0 条 Issues）。结合 PR #3026 摘要中体现的方向，可推断下一阶段重点仍是**认证链路的健壮性**（超时控制、可恢复性、网关生命周期管理），而非新增功能。暂无足够信号判断新功能是否进入下一版本。

## 7. 用户反馈摘要

基于 PR 摘要中转述的用户反馈：

- **痛点**：左下角登录按钮"点了没反应"，且无提示、不可恢复；网络不稳时问题更明显。
- **使用场景**：订阅账号用户登录后触发 `media-entitlement-changed` 同步，引发网关重启、等待时间长（约 20s 且重复一次）。
- **满意度信号**：今日无公开评论可提炼满意度；两项修复若如期生效，应能显著改善登录首次体验。

## 8. 待处理积压

- 过去 24 小时无待合并 PR（待合并 0）、无未响应 Issue。
- 数据中未提供长期未响应的历史 Issue/PR 清单，**无法据现有材料判断积压**，建议维护者补充查看全量未关闭条目。

---

**健康度小结**：修复闭环及时、无新缺陷涌入、无版本风险，属稳定维护期；但社区互动为零、反馈未走 Issue 渠道，是今日最值得关注的弱信号。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-11-07

## 1. 今日速览

今日 Moltis 活跃度处于**低位**：无新版本发布，Issues 仅 1 条更新（新开），PR 更新 2 条（1 待合并、1 已关闭）。最值得关注的是 Issue #273——v0.10.2 发布约 3 小时后被发现**零资产**，导致官方安装脚本下载返回 404，属直接影响用户安装路径的高优先级回归，目前尚无 fix PR。同时，Provider 扩展类 PR #1288 仍在待合并状态，工具预设相关修复 PR #1280 已关闭。整体看，项目当日以问题暴露为主，修复推进有限，**健康度预警信号集中在发布流程可靠性上**。

## 2. 版本发布

今日无新版本发布。另需注意：Issue #273 指出最新版本 v0.10.2 存在发布资产缺失问题（详见下文）。

## 3. 项目进展

- **PR #1280 [CLOSED] fix(tools): preserve preset tools for empty active_tools**（作者 mikemikimike，创建于 2026-09-21，更新于 2026-11-07）
  声明修复 Issue #1277。核心逻辑：将显式传入的空 `active_tools` 数组视为“无逐轮覆盖”，从而保留预设的工具控制；非空的逐轮工具列表仍按原范围生效。
  链接: moltis-org/moltis PR #1280

- **PR #1288 [OPEN] feat: add Tsubasa provider to setup and model registry**（作者 cenab，创建于 2026-09-28，更新于 2026-11-07）
  尚待合并，进展详见第 6 节。
  链接: moltis-org/moltis PR #1288

> 说明：数据未提供 PR 的具体行数、文件数或合并评审结论，故不对“推进幅度”作量化推断。

## 4. 社区热点

- **Issue #273 [OPEN] Bug: v0.10.2 release has zero assets (breaks install script)**（作者 M2noa，评论 1，👍 3）
  链接: moltis-org/moltis Issue #273
  今日唯一获社区反应（3 个 👍）的条目。诉求明确：发布产物（.deb、.tar.gz）缺失，安装脚本能正确识别新版本号但在下载阶段 404。这反映的是用户对**发行流程自动化与发布前校验**的信任问题，而非单个功能缺陷。

- **PR #1288 [OPEN] Tsubasa provider**（👍 0，评论数量数据未提供）
  链接: moltis-org/moltis PR #1288

> 数据说明：PR 的评论字段为 `undefined`，无法评估其讨论热度，故不作活跃度排名判断。

## 5. Bug 与稳定性

按严重程度排列：

1. **【高 · 影响安装路径】v0.10.2 发布零资产，安装脚本 404** — Issue #273 [OPEN]，👍 3
   影响：所有使用官方安装脚本的新用户/升级用户无法完成安装；脚本版本检测与产物发布之间存在不一致。
   Fix PR：**暂无**。
   链接: moltis-org/moltis Issue #273

2. **【中 · 工具行为】空 `active_tools` 导致预设工具控制丢失** — Issue #1277（由 PR #1280 引用）
   影响：逐轮工具控制逻辑与预设冲突，可能造成工具被意外禁用。
   Fix PR：**已有**，PR #1280，状态 CLOSED。
   链接: moltis-org/moltis PR #1280

> 注：PR #1280 状态为 CLOSED 而非 MERGED，数据未说明是合并还是弃用，建议维护者确认该修复是否真正落地。

## 6. 功能请求与路线图信号

- **新增 Tsubasa Provider（PR #1288，OPEN）**
  内容：接入现有 provider setup 与 OpenAI 兼容 registry；使用 `TSUBASA_API_KEY`，默认端点 `https://api.tsubasa.sh/v1`，提供 `tsubasa-fast` 与 `tsubasa-pro` 两个模型，上下文窗口 32,768 tokens。
  信号：延续项目“多 provider + OpenAI 兼容层”的扩展方向。该 PR 自 2026-09-28 创建、今日仍有更新，**是下一版本纳入候选中最明确的一项**。
  链接: moltis-org/moltis PR #1288

> 数据中未包含用户新提出的功能需求类 Issue，故不作推测性罗列。

## 7. 用户反馈摘要

- **痛点（安装体验）**：Issue #273 用户描述了具体的失败链路——脚本正确识别新版本 → 下载二进制时 404。这是典型的“发布流程断裂”型痛点，用户无法自行绕过，只能回退旧版本或改用手动安装。
- **不满点**：发布 3 小时内即被用户发现零资产，说明发布前缺少产物存在性校验；3 个 👍 表明该问题具有普遍性而非个例。
- **满意点**：数据未提供正面反馈内容，不作推断。

## 8. 待处理积压

- **Issue #273**（创建 2026-03-01，更新 2026-11-07，仍 OPEN，仅 1 条评论）
  链接: moltis-org/moltis Issue #273
  提醒：发布日期与创建日期跨度较大（数据原文如此），且至今无 fix PR，属**需立即响应**项。

- **PR #1288**（创建 2026-09-28，距今约 6 周仍未合并）
  链接: moltis-org/moltis PR #1288
  提醒：Provider 类 PR 涉及配置与密钥约定，长期挂起会增加 rebase 成本与 API 兼容风险，建议给出评审结论。

- **PR #1280 / Issue #1277**
  链接: moltis-org/moltis PR #1280
  提醒：PR 已 CLOSED，需确认修复是否已以其他方式合入，避免 Issue #1277 处于“看似已修、实则未修”的模糊状态。

---

**健康度小结**：代码侧有持续的小步修复与 provider 扩展，方向正常；但**发布工程（release engineering）是当前最薄弱环节**，一次零资产发布即可阻断全部新安装。建议优先补齐发布产物的自动化校验与安装脚本对缺失资产的降级提示。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报（2026-11-07）

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 活动数据。以下所有条目均基于给定材料，未作外部推断。注：材料中部分 Issue/PR 链接字段标注为 `QwenPaw` 仓库，本文按原文保留；若与 CoPaw 仓库实际归属不符，请以仓库实际为准。

---

## 1. 今日速览

今日项目无新版本发布，社区活动以缺陷修复类 PR 为主：过去 24 小时 9 条 PR 更新中 8 条待合并、0 条新合并，1 条已关闭，呈现"输入多、合入少"的积压态势。Issues 侧 3 条更新，其中 2 条新开（1 条 Windows 11 启动崩溃、1 条执行类工具调用可读性反馈），1 条关闭（跨智能体协作体验反馈）。活跃度评估：**中等偏活跃**——新问题与修复提交密集，但待合并 PR 达 8 条，合并吞吐明显滞后，需关注评审产能。

---

## 2. 版本发布

今日无新版本发布（Releases：无）。材料未提供任何版本更新内容。

---

## 3. 项目进展

今日**无已合并 PR**，仅有 1 条 PR 关闭，且材料未提供该 PR 的合并状态与具体讨论内容：

- **#8457 [CLOSED] fix(memory): inject automatic recall as reference context**（作者 wuwenbo0626，创建 2026-10-27，更新 2026-11-06）
  摘要显示：自动记忆召回此前被表示为"助手编写的 thinking/tool-call/tool-result 序列"，模型可能模仿该合成轨迹并在同一轮内再次调用 `memory_search`；该改动改为以"参考上下文"形式注入。
  链接：agentscope-ai/QwenPaw PR #8457

整体而言，今日项目**向前推进有限**：8 条修复类 PR（含上下文溢出、token 估算、Ollama 上下文窗口、GBK 编码、模型提供方回退等）已进入队列但尚未合入，进展停留在"待评审"阶段。

---

## 4. 社区热点

按评论数排序：

1. **#2420 [CLOSED] [enhancement] 体验反馈：跨智能体协作引导 / 通信触发 / 协作连贯性 / 身份混淆**（作者 dangthanhtam529-dev，评论 4 条，0 👍）
   链接：agentscope-ai/QwenPaw Issue #2420
   分析：这是今日讨论最多的条目，聚焦"多智能体协作"的可用性问题——用户被引导理解协作功能、需要明确的通信触发机制，并指出协作连贯性与身份混淆。诉求指向智能体身份与协作流程的显式化设计。

2. **#8616 [OPEN] 2.3.0-beta.1 在 Windows 11 IoT LTSC 上无法启动**（评论 2 条）
   链接：agentscope-ai/QwenPaw Issue #8616
   分析：版本回归类问题，用户提供了可复现的环境对照（2.2.2 可正常运行，2.3.0-beta.1 失败），属于高价值诊断信息。

3. **#8612 [OPEN] [enhancement] 「执行」类工具调用可读性差**（评论 1 条）
   链接：agentscope-ai/QwenPaw Issue #8612
   分析：用户肯定多数工具的"一句人话"描述，但指出执行类工具调用在长任务中难以辨识，属于 UI 可观测性诉求。

> 说明：材料中 PR 条目的评论数均标注为 `undefined`，无法据此排序，故未纳入热点排名。

---

## 5. Bug 与稳定性

按严重程度排列：

**高 — 应用无法启动（回归）**
- **#8616 [OPEN]** Windows 11 IoT Enterprise LTSC（build 10.0.26100, x64）上 2.3.0-beta.1 启动报 "path not found"，随后 AppHang；同一机器上 2.2.2+post.1 正常。涉及二进制版本 2.3.0.0，sha 前缀 `6ae46dfe`。
- 是否已有 fix PR：**材料中未见对应修复 PR**。
- 链接：agentscope-ai/QwenPaw Issue #8616

**中 — 模型提供方被禁用后无法回退**
- **#8617 [OPEN] fix(agents): 保存的模型提供方被禁用时回退**（Fixes #8579）
  原因：`agent.json` 在提供方被关闭后仍保留 `active_model`，`create_model_and_formatter` 触发 `ProviderError`。
- 已有 fix PR：**是（#8617）**。
- 链接：agentscope-ai/QwenPaw PR #8617

**中 — 畸形文件引用导致 HTTP 400**
- **#8292 [OPEN] fix(agents): 清理缺少 file_id / file_data 的文件内容片段（#8280）**
  原因：会话历史中文件引用缺少后端数据时，OpenAI 兼容提供方以 HTTP 400 拒绝请求。
- 已有 fix PR：**是（#8292）**。
- 链接：agentscope-ai/QwenPaw PR #8292

**中 — 网关上下文溢出未被识别**
- **#8615 [OPEN] fix(providers): 识别网关返回的上下文溢出 400**
  材料举例：prompt 83000 tokens + max_tokens 32768 超过 131072 上下文即被拒绝。
- 已有 fix PR：**是（#8615）**。
- 链接：agentscope-ai/QwenPaw PR #8615

**中 — token 估算偏差**
- **#8614 [OPEN] fix(token-usage): 用提供方回报的使用量校准 prompt 估算**
  指出默认 `count_tokens` 以 UTF-8 字节 / 4 估算，数字/UUID/时间戳/标识符密集的 prompt 实际需 1.2–4 倍 token。
- 已有 fix PR：**是（#8614）**。
- 链接：agentscope-ai/QwenPaw PR #8614

**中 — 压缩规划未预留输出额度**
- **#8613 [OPEN] fix(context): 规划压缩时预留配置的输出上限**
  指出原先固定预留 4K（或窗口 5%），但提供方校验的是 `prompt + max_tokens`。
- 已有 fix PR：**是（#8613）**。
- 链接：agentscope-ai/QwenPaw PR #8613

**低 — 中文 Windows 下 GBK/CP936 文件被丢字节**
- **#8234 [OPEN] fix(tools): read/edit/grep 解码 GBK/CP936**（状态 Under Review）
  指出 `read_file_safe` 与 `grep_search` 以 UTF-8 + `errors="ignore"` 解码，导致中文 Windows 记事本/旧版 .txt/.csv/.md 内容丢失。
- 已有 fix PR：**是（#8234）**。
- 链接：agentscope-ai/QwenPaw PR #8234

**低 — Ollama 上下文窗口误用 128k 默认值**
- **#8236 [OPEN] fix(ollama): 按 num_ctx 设定上下文窗口**（状态 Under Review）
  本地 `qwen3-coder:30b` 实际在 `num_ctx` 处截断，而非云端窗口。
- 已有 fix PR：**是（#8236）**。
- 链接：agentscope-ai/QwenPaw PR #8236

---

## 6. 功能请求与路线图信号

1. **执行类工具调用的可视化改进**（#8612，OPEN，评论 1）
   诉求：执行类工具调用在长任务中应能被直观识别为准在做什么。目前已有多种 PR 在修正工具层错误处理与 token 计量，但**材料中未见针对 UI 展示层的 PR**，短期内更可能作为体验优化项排期。
   链接：agentscope-ai/QwenPaw Issue #8612

2. **跨智能体协作的引导、通信触发与身份区分**（#2420，CLOSED，评论 4）
   诉求：协作功能的可发现性、通信触发机制、协作连贯性、身份混淆。已关闭，但材料未说明关闭原因（是否已实现/重复/不修复未知），**不宜判定会进入下一版本**。
   链接：agentscope-ai/QwenPaw Issue #2420

3. **新增 web_search 提供方（SpecStream）**（#8618，OPEN，first-time-contributor，size/M）
   外部贡献者提交将 SpecStream 作为 web_search 提供方；PR 中引用了其自述的基准成绩（WideSearch 60.9、SimpleQA Verified 99，链接 specstream.ai/benchmarks）。该数据为贡献者自述，**未经项目方核验**，采用与否取决于维护者评估。
   链接：agentscope-ai/QwenPaw PR #8618

---

## 7. 用户反馈摘要

- **满意之处**：用户明确肯定多数工具调用已能以"一句人话"呈现（如「获取 当前时间」「阅读 MEMORY.md 预览 16行」「文件匹配 outputs/scripts/*.py 4文件」「文本匹配 trim-cli 16匹配」），说明工具描述层改造已见效。
- **不满意之处**：
  - 执行类工具调用在长任务中信息不足、难以辨识（#8612）。
  - 多智能体协作上手门槛高：缺乏引导、通信触发不明确、协作不连贯、出现身份混淆（#2420）。
- **使用场景**：Windows 11 IoT Enterprise LTSC 桌面端（#8616）；中文 Windows 下的本地笔记/文本处理（#8234）；本地 Ollama 模型（如 qwen3-coder:30b）离线推理（#8236）；长任务与大量工具调用场景（#8612）。
- **版本稳定性感知**：2.2.2 可用而 2.3.0-beta.1 无法启动，构成明确的 beta 回归体验问题（#8616）。

---

## 8. 待处理积压

提醒维护者关注以下长期未合入条目（以创建时间计）：

1. **#8234 [OPEN] [Under Review, size/XXL] GBK/CP936 解码修复** — 创建 2026-10-14，已逾三周，更新 2026-11-06，规模 XXL，评审成本高。
   链接：agentscope-ai/QwenPaw PR #8234
2. **#8236 [OPEN] [Under Review, size/XL] Ollama num_ctx 修复** — 创建 2026-10-14，更新 2026-11-06，规模 XL。
   链接：agentscope-ai/QwenPaw PR #8236
3. **#8292 [OPEN] [size/S] 清理畸形文件内容片段** — 创建 2026-10-17，已逾三周，规模仅 S，属可快速处理项。
   链接：agentscope-ai/QwenPaw PR #8292
4. **#8616 [OPEN] Windows 11 IoT LTSC 启动失败** — 今日新开但为 beta 高严重度回归，**尚无可关联 fix PR**，建议优先定位。
   链接：agentscope-ai/QwenPaw Issue #8616
5. **评审吞吐**：今日 8 条待合并 PR 中，有 3 条来自同一作者 lanjinzhoucode（#8613/#8614/#8615），均为小/中等规模上下文与 token 相关修复，建议集中评审以提升合入效率。
   链接：agentscope-ai/QwenPaw PR #8613 / #8614 / #8615

---

*备注：材料未包含各 PR 的评论数、合并状态详情及 Issue 关闭原因，相关判断已作保守表述。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-07

## 1. 今日速览

过去 24 小时项目保持高位活跃：Issues 更新 20 条（新开/活跃 17、关闭 3），PR 更新 32 条（待合并 29、合并/关闭 3），无新版本发布（无法从给定数据确认具体合并/关闭的是哪些 PR）。新增问题以 S2 级行为退化为主，集中在会话持久化、委托子智能体（delegate）路径、对端（peer）路由与网关身份鉴权四类；其中 #12272（vodozemac 依赖安全告警）与 #12187（缓存轮次归一化污染对话）为 S1，需优先关注。合并侧推进相对滞后，29 个待合并 PR 中含 #12244、#12270、#11921、#9746 等多个高风险 XL 级改动，review 吞吐是当前主要瓶颈。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

给定数据未标注 3 条已合并/关闭 PR 的具体编号，故不对合并内容做推断。从待合并队列可见以下推进方向已进入最终阶段：

- **会话历史重构**：#11921（append-only session event history，替代分离的 transcript writer，记录输入、模型尝试、工具执行、审批等），为 #11420/#11676 的 created_at 丢失问题提供结构性解法。
- **Dashboard/Relay 前端门户**：#12270（通过 relay 以每节点 host 提供 web dashboard，对应 #10315 phase 2）与 #12244（经 core 的 scoped dashboard chat，共享 RPC 客户端）。两者均标记 `release:v0.9.0`、`risk:high`，且 #12244 依赖 #11964、#12232 先合。
- **多模型 Profile**：#9809（每 provider profile 支持多模型，schema v4 下的 connections/models/model_presets/fallback），自 2026-08-07 长期在审。
- **子智能体协作**：#12258 新增 `sessions_prompt`，允许向其他 agent 的活跃 RPC 会话发起完整一轮并取回结果。

此外 #11676 直接修复「替换 transcript 时保留 created_at」，与 #11420 对应，属可较快落地的单点修复。

## 4. 社区热点

- **#11420**（S2，10 评论，今日最活跃）SQLite 后端每轮重写整个 transcript，所有消息 created_at 被统一覆盖。链接：zeroclaw-labs/zeroclaw Issue #11420
- **#10926**（9 评论，#status:accepted）`send_via` 将 peer 用户身份当作房间目标，Matrix 场景发送对象错误。链接：zeroclaw-labs/zeroclaw Issue #10926
- **#10315**（6 评论，`risk:high`）#10142 之后重新引入浏览器注册前门，要求不手写 TLS；进度说明显示 enrollment 页已由 #10525 落地。链接：zeroclaw-labs/zeroclaw Issue #10315
- **#12187**（S1，3 评论）缓存轮次中 `role=tool` 紧邻 `role=user` 时被合并为 tool 信封，在严格 provider 上永久污染对话。链接：zeroclaw-labs/zeroclaw Issue #12187
- **PR #12244**（`do-not-merge`、`status:blocked`、size:XL）dashboard chat 改动，受上游依赖阻塞，是当日最受关注的待合并 PR 之一。链接：zeroclaw-labs/zeroclaw PR #12244

诉求归纳：一是**会话数据保真与可审计**（时间戳、append-only 历史），二是**身份与目标解析正确性**（peer 与 room、原生工具调用），三是**多用户/多租户下的权限边界**（dashboard 访问、per-agent 工具所有权）。

## 5. Bug 与稳定性

**S1 — 工作流阻塞**
- **#12187** 缓存轮次归一化导致对话被永久污染（channel）。未标注 fix PR。
- **#12272**（已关闭）vodozemac 0.11.0 触发 RUSTSEC-2026-0445 / RUSTSEC-2026-0451，Quality Gate Security 作业在 master 与所有 PR 上失败。当日关闭，但数据未说明修复方式，建议确认是否已升级依赖。

**S2 — 行为退化 / 数据风险**
- **#12279** 启动时对长 transcript 的截断覆盖了期间追加的消息，作者提示单条消息可能丢失（数据丢失，triage 或应上调）。无 fix PR 标注。
- **#11420** created_at 被重写；对应 fix PR 为 **#11676**（存在，待合并）。
- **#12228** `cron update --agent` 打印成功但未实际改派任务。无 fix PR。
- **#11696** system prompt 每轮从磁盘重建，修改 personality 文件会击穿所有在线会话的 prompt 缓存（成本问题）。无 fix PR。
- **#12211 / #12235** delegate 路径偏差：委托 agent 不加载 TOOLS.md；delegate 循环未遵循 native tool calling，返回原始文本工具调用。两者同源，均无 fix PR。
- **#12283** `resolve_peer_set` 按组应用 `ignore`，出站消息可触达被忽略的 peer（今日新开，0 评论）。
- **#12227** shell 审批提示取决于模型自填的 “approved” 值，触发不一致。
- **#10926** Matrix 目标解析错误（已 accepted）。

**S3 — 轻微**
- **#12205** 空 canvas 永不清理，占用 100 上限。

**其他（3 条关闭）**：#12047（OIDC bearer 校验无尝试限流）与 #12052（限流键取 X-Forwarded-For 首项，可冒用 loopback 豁免）已关闭；#12280 作为 #12052 的后续仍开放，要求 SOP 取消授权不再把转发的 loopback 视为本地。

## 6. 功能请求与路线图信号

- **#12048**（`risk:high` 同族已 accepted）OIDC 浏览器流 redirect_uri 应校验配置的 dashboard origin，而非信任 Host 头。与 #12280 一起构成网关身份边界的收敛，配合 #9746（session 工具 per-agent 所有权）看，身份访问控制是 v0.9.0 前的明确主题。
- **#11207** 自定义 provider（Tsubasa）配置文档，`priority:p3`、`risk:low`、纯文档，易纳入。
- **#12199** 在 config validate 中对 `delegation_policy.mode = forbidden` 下的无效 delegate 授权告警；#12221 让 `config migrate` 显示退役环境变量告警（#11218 schema V4 的后续）。
- 结合 PR 侧判断：**多模型 provider profile（#9809）**、**session 历史 append-only（#11921）**、**dashboard over relay（#12270）** 三条线具备进入下一版本的形态；**agy_cli（#11076，含 #12229 holding-crate 例外）** 与 **Discord 显式目标路由（#12271/#12116）** 处于次一级。

## 7. 用户反馈摘要

- **会话即产品数据**：#11420 的 10 条评论围绕时间戳丢失展开，用户要求每消息可追溯；#12279 作者主动指出「数据丢失，triage 可考虑 S0」，说明用户在替维护者做严重度评估，也反映启动路径回归被实际使用者先于内部发现。
- **委托是真实用法但语义未对齐**：#12211、#12235 均来自实际使用 delegate 的贡献者，痛点集中在「顶层 agent 正常、委托后降级」，属可感知的质量断层。
- **企业/代理部署场景**：#12047、#12052、#12048、#12280 连续来自同一批网关安全使用者，场景明确为反向代理 + OIDC + 多用户 dashboard，需求是边界可以按配置严格判定。
- **生态接入意愿**：#11721（Standard Compute provider，作者披露任职）与 #11207（Tsubasa 文档）显示第三方 provider 希望被一等公民支持；#11076 基于「Gemini CLI 停止服务多数账号、Google 转向 Antigravity CLI」的外部变化提出跟进，属外部驱动的适配需求。
- **满意度隐含信号**：#status:accepted 与多次 follow-up 显示问题被认可但修复周期偏长（#10926 自 2026-09-17、#10315 自 2026-08-24）。

## 8. 待处理积压

需维护者优先分配 review / 决策：

- **PR #9809**（2026-08-07 创建，`needs-author-action`，覆盖 provider/core/channel/runtime 等几乎全部模块）— 积压 3 个月，XL 高风险。
- **PR #9746**（2026-08-04，`release-gate`、`priority:p1`、`needs-author-action`）— per-agent 工具所有权，是安全主题的关键依赖。
- **PR #10412**（2026-08-27，`breaking-change`、`priority:p1`）— SessionBackend 原子所有权契约。
- **PR #12244 / #12270**（`release:v0.9.0`）— 需先解决 #11964/#12232 依赖与 `do-not-merge` 阻塞。
- **Issue #10315**（2026-08-24，`risk:high`）— 浏览器前门二期，已有多轮进度说明但未收口。
- **Issue #10926**（2026-09-17）— 已 accepted、9 条评论，尚无对应 fix PR。
- **PR #11076 / #12229** — holding-crate 注册例外需架构层面裁决，否则 agy_cli 长期悬置。

**健康度提示**：当日新增问题中 S1 与数据丢失类各 1 起，且安全类问题呈「修复一个、暴露一个相邻边界」的连续出现（#12052→#12280、#12047→#12048），建议对 gateway 的身份/限流模块做一次成组审计；同时 29:3 的待合并与已合并比例表明瓶颈在评审而非开发，v0.9.0 相关 PR 的依赖排序应尽快明确。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*