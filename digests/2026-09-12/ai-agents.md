# OpenClaw 生态日报 2026-09-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-12 13:09 UTC

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

# OpenClaw 项目日报 — 2026-09-12

## 1. 今日速览

项目今日处于**高强度维护状态**：24 小时内 Issues 更新 500 条（新开/活跃 258、关闭 242），PR 更新 500 条（待合并 289、合并/关闭 211），处理量巨大且关闭率高，说明维护吞吐强劲。但**零新版本发布**，同时当日热点问题高度集中于 2026.9.x 系列的**升级/迁移回归**——Doctor 迁移阻断、handoff lease 兼容性、npm update 失败等问题密集出现，涉及多个 P0 级 `ux-release-blocker` 标签，显示近期版本的升级路径健康度存在明显压力。整体看：维护活跃度优秀，但发布质量与迁移稳定性是本周期最大风险点。

## 2. 版本发布

今日无新版本发布。

需注意：多个 Issue 指出 **2026.9.4 已发布但缺少关键修复**——#145932 相关的 #144742 明确报告 “2026.9.4 ships without #144208”，导致保留的 version-1 handoff lease 行使每次 config write 失败，并被标记为 release blocker（[#144742](https://github.com/openclaw/openclaw/issues/144742)）。建议维护者评估是否需要补丁版本。

## 3. 项目进展

今日已合并/关闭的 PR 共 211 个，主要集中在维护者主导的小型重构、测试修复与文档澄清：

- **测试基础设施修复**：[#145968](https://github.com/openclaw/openclaw/pull/145968) 修复 Vitest 配置推断导致误跑错误项目集的问题；[#145970](https://github.com/openclaw/openclaw/pull/145970) 澄清 pending plugin consent 警告的文档描述（对应 #145946）。
- **心跳调度重构**：[#145830](https://github.com/openclaw/openclaw/pull/145830) 合并了 heartbeat dispatch 中重复选择/规范化最新结构化响应的逻辑，减少冗余计算。

**推进中的重点 PR（尚未合并）**：
- **升级预算修复**：[#145219](https://github.com/openclaw/openclaw/pull/145219)（XL, P1）将 update budgets 从固定字面量改为基于实测状态推导，覆盖 #144758、#144901、#144890、#143292 五个上报缺陷——直接对应今日大量升级失败问题，是最值得关注的待合并项。
- **Control UI 并发设置保护**：[#145939](https://github.com/openclaw/openclaw/pull/145939)（P0）修复 autosave 覆盖并发文件编辑的问题。
- **长上下文回合收尾**：[#143840](https://github.com/openclaw/openclaw/pull/143840) 修复工具辅助长上下文回合在剩余额度耗尽时无最终答案的问题。
- **Wear OS 系列**：[#145004](https://github.com/openclaw/openclaw/pull/145004)、[#144993](https://github.com/openclaw/openclaw/pull/144993)、[#144990](https://github.com/openclaw/openclaw/pull/144990)、[#144987](https://github.com/openclaw/openclaw/pull/144987) 构成一组依赖链，改善小表盘上的语音/聊天可用性。

整体评估：向前推进以**修复与加固**为主，缺乏新功能里程碑，方向符合当前发布稳定性压力。

## 4. 社区热点

按评论数排序的焦点讨论：

1. **[#142585](https://github.com/openclaw/openclaw/issues/142585)（17 评论，OPEN，P0）** — 2026.9.3 Doctor 拒绝有效 legacy workspace setup 与 attestation import（canonical rows 缺失时）。回归 + 迁移阻断，`ux-release-blocker`。
2. **[#97616](https://github.com/openclaw/openclaw/issues/97616)（15 评论，OPEN，P1）** — hook/tool 子进程未回收导致僵尸进程累积与运行时退化。长期未结（创建于 2026-06-29），持续活跃。
3. **[#96834](https://github.com/openclaw/openclaw/issues/96834)（15 评论，OPEN，P1）** — WhatsApp 1:1 收到图片时主 lane 卡住约 3 分钟，multimodal run 遗弃 active_reply_work/queued_work_without_active_run。
4. **[#140620](https://github.com/openclaw/openclaw/issues/140620)（12 评论，CLOSED，P0）** — 2026.7.1-2 → 2026.9.2 session transcript 迁移仅导入 27/~1500 sessions 后停滞，旧会话无法被 sessions_search 找到。
5. **[#144712](https://github.com/openclaw/openclaw/issues/144712)（12 评论，CLOSED，P0，diamond lobster）** — npm update 在 “global install swap” 失败，完好的 rollback 却报 “recovery is unverified”。已关闭，含 source-repro。
6. **[#127148](https://github.com/openclaw/openclaw/issues/127148)（12 评论，OPEN，P1）** — Codex sessions.compact 获取第二个 app-server 并触发 active-writer 冲突。

**诉求分析**：热点几乎全部指向**升级与状态迁移的可靠性**。用户在跨多个大版本升级（2026.7 → 2026.8 → 2026.9）时反复遭遇 Doctor 阻断、会话数据丢失、回滚误报。此外，多平台适配（WhatsApp 图片、Discord 截断、Telegram 投递）与 agent 会话状态一致性构成第二大类痛点。社区情绪偏向“功能能用但升级路径太脆弱”。

## 5. Bug 与稳定性

**P0 / release-blocker 级（需优先处理）**：

| Issue | 问题 | 备注 |
|---|---|---|
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | 2026.9.3 Doctor 拒绝有效 legacy workspace 与 attestation import | OPEN，17 评论，迁移阻断 |
| [#144742](https://github.com/openclaw/openclaw/issues/144742) | 2026.9.4 缺 #144208，保留的 v1 handoff lease 行使所有 config write 失败 | OPEN，maintainer 标注 `not-repro-on-main`，无 fix PR 记录 |
| [#145192](https://github.com/openclaw/openclaw/issues/145192) | 2026.9.2 → 2026.9.4 托管更新在 candidate-Doctor 处失败后回滚到已 9.4 迁移状态 | OPEN，与 #144742 同源升级路径 |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows de-DE 2026.8.2 升级后 Doctor maintenance 受阻，遗留 legacy workspace 状态 | OPEN，含 `clawsweeper:fix-shape-clear`、`queueable-fix`（fix 形状已清晰，可排队） |
| [#140620](https://github.com/openclaw/openclaw/issues/140620) | session-transcript reconciliation 导入 27/~1500 后停滞 | CLOSED |
| [#144712](https://github.com/openclaw/openclaw/issues/144712) | npm update 在 global install swap 失败 | CLOSED |
| [#140908](https://github.com/openclaw/openclaw/issues/140908) | doctor --fix / gateway status --deep 在 systemd --user 下 EACCES，阻断所有升级后迁移 | CLOSED |
| [#112475](https://github.com/openclaw/openclaw/issues/112475) | 设备配对移除后恢复失败 | OPEN，stale |

**P1 级**：

- [#97616](https://github.com/openclaw/openclaw/issues/97616) 子进程僵尸累积，运行时退化 — OPEN，长期未结，无 fix PR 记录。
- [#96834](https://github.com/openclaw/openclaw/issues/96834) WhatsApp 图片卡住主 lane 约 3 分钟 — OPEN。
- [#142476](https://github.com/openclaw/openclaw/issues/142476) 2026.9.3 cron session reaper 用同步 PRAGMA integrity_check 打开每个 agent 数据库，632-agent 网关上每几分钟阻塞事件循环 14–76 秒 — OPEN，含 `fix-shape-clear`、`queueable-fix`。
- [#141252](https://github.com/openclaw/openclaw/issues/141252) / [#139847](https://github.com/openclaw/openclaw/issues/139847) 2026.9.2 回归：reply 运行时收到消息被丢弃，报 “Reply operation has no active tool authority snapshot” — 均 OPEN，含 `fix-shape-clear`、`queueable-fix`。
- [#144911](https://github.com/openclaw/openclaw/issues/144911) 2026.9.4 MCP server init 超时崩溃 Gateway（未处理 rejection “service child cleanup identity lost”）— OPEN，含 `queueable-fix`。
- [#127148](https://github.com/openclaw/openclaw/issues/127148) Codex sessions.compact active-writer 冲突 — OPEN，需 product decision。
- [#140455](https://github.com/openclaw/openclaw/issues/140455) google-meet 2026.9.2 语音会话因 Meet DOM/UI 不兼容中断（circular-JSON 崩溃）— OPEN，含 `queueable-fix`。
- [#126246](https://github.com/openclaw/openclaw/issues/126246) Telegram 持久化出站投递卡在 send_attempt_started，重启后丢失 — OPEN。

**P2 级（部分已关闭）**：[#96007](https://github.com/openclaw/openclaw/issues/96007)（Discord 后续内容被截断，CLOSED）、[#139710](https://github.com/openclaw/openclaw/issues/139710)（mid-turn plugin supersede 杀死 system-agent 回合）、[#145689](https://github.com/openclaw/openclaw/issues/145689)（cron 更新被 tool-policy 迁移与 owner 校验阻断，CLOSED）、[#114158](https://github.com/openclaw/openclaw/issues/114158)（fs-safe 硬编码 0o600 忽略 umask，破坏共享工作区）。

**已有明确 fix PR 倾向的**（带 `clawsweeper:fix-shape-clear` + `queueable-fix`）：#136203、#142476、#141252、#139847、#144911、#140455。这批可在下一轮集中清理。

## 6. 功能请求与路线图信号

- **[#9016](https://github.com/openclaw/openclaw/issues/9016) 向 agent runtime 暴露 OpenRouter 用量成本** — CLOSED，增强类请求（P3），曾获 1 👍。短期内未被纳入的信号。
- **[#132601](https://github.com/openclaw/openclaw/issues/132601) 澄清第三方生成视频 URL-aware 的安全实体化契约** — OPEN，P2，明确表示不要求新增运行时开关，仅要求文档与公开契约澄清。属低风险可快速落地项。
- **[#143944](https://github.com/openclaw/openclaw/pull/143944)（PR）Feishu 可选替换式 public-body 预览** — 已具备 `proof: sufficient`，`ready for maintainer look`，是少数功能性特性 PR，可能进入后续版本。
- **[#144043](https://github.com/openclaw/openclaw/pull/144043)（PR）Control UI 允许配置的远程 Markdown 图片来源** — 关闭了 #144042，但带 `merge-risk: security-boundary` 且 `needs proof`，纳入前需安全审查。
- **[#143823](https://github.com/openclaw/openclaw/pull/143823)（PR）在工具结果与恢复会话中保留 resource identifier** — `proof: sufficient`，对应 #104992，涉及文档/表格协作场景。

综上，路线图信号以**稳定性修复优先**，功能性新增集中在渠道适配（Feishu、Nostr、Control UI）与可观测性/契约澄清。

## 7. 用户反馈摘要

**核心痛点**：

1. **升级路径系统性脆弱**是压倒性主题。用户从 2026.7.1-2 跨版本升级到 2026.9.x 时反复遇到：Doctor 拒绝有效旧状态（[#142585](https://github.com/openclaw/openclaw/issues/142585)）、会话迁移中途停滞且旧会话不可检索（[#140620](https://github.com/openclaw/openclaw/issues/140620)）、npm update 失败但回滚状态被误报（[#144712](https://github.com/openclaw/openclaw/issues/144712)）。用户场景多为**生产/长期运行的多 agent 实例**（如 #136203 的 Windows 多 agent、#142476 的 632-agent 网关、#140620 的约 1500 个 trajectory 文件）。

2. **平台渠道的可靠性问题**：WhatsApp 图片导致 lane 冻结 3 分钟（#96834）、Telegram 出站消息重启后丢失（#126246）、Discord 错误文本截断后续内容（#96007）、google-meet 语音会话中断（#140455）。

3. **会话/消息状态一致性**：回复运行时新消息被丢弃（#141252、#139847）、“无 active tool authority snapshot” 错误对用户仅显示通用报错，fallback 链误触。

4. **运维/权限摩擦**：systemd --user 下 EACCES（#140908）、Windows 上 Doctor --fix 最终重启失败并留下禁用的 Scheduled Task（#137377）、fs-safe 0o600 破坏 NFS/SMB 共享工作区（#114158）。

**满意的信号**：多个问题在 24 小时内被响应并关闭（242 条关闭），#144712、#140620、#145689 等当日关闭，说明维护响应速度获得了一定反馈验证。但重复出现的迁移相关问题也显示用户对版本升级的信任度正在被消耗。

## 8. 待处理积压

**长期未结的高优先级项（提醒维护者关注）**：

- **[#97616](https://github.com/openclaw/openclaw/issues/97616)（2026-06-29 创建，P1，OPEN，15 评论）** — 僵尸子进程累积问题，已存在超过两个月，仍未合并修复，属运行时长期稳定性隐患。
- **[#96834](https://github.com/openclaw/openclaw/issues/96834)（2026-06-25 创建，P1，OPEN，15 评论）** — WhatsApp 图片卡顿，近三个月未解决。
- **[#127148](https://github.com/openclaw/openclaw/issues/127148)（2026-08-21 创建，P1，OPEN）** — Codex compact active-writer 冲突，标注 `needs-product-decision`，卡在产品决策。
- **[#126246](https://github.com/openclaw/openclaw/issues/126246)（2026-08-19 创建，P1，OPEN）** — Telegram 投递丢失。
- **[#112475](https://github.com/openclaw/openclaw/issues/112475)（2026-07-22 创建，P0，OPEN，stale）** — 设备配对恢复失败，安全相关，已标记 stale 但仍 P0。
- **[#114158](https://github.com/openclaw/openclaw/issues/114158)（2026-07-26 创建，P2，OPEN，stale）** — fs-safe 0o600 破坏共享工作区，需安全审查。
- **[#132601](https://github.com/openclaw/openclaw/issues/132601)（2026-08-29 创建，P2，OPEN）** — 生成视频 URL 安全契约澄清，`needs-product-decision` + `needs-security-review`。
- **[#9016](https://github.com/openclaw/openclaw/issues/9016)（2026-02-04 创建，P3，CLOSED）** — 存在超半年的功能请求，已关闭。
- **[#127148](https://github.com/openclaw/openclaw/issues/127148) 与 [#126246](https://github.com/openclaw/openclaw/issues/126246)** 均带 `clawsweeper:needs-product-decision`，是流程瓶颈的集中体现。

**建议**：优先将带 `fix-shape-clear` + `queueable-fix` 的 P0/P1 项（#136203、#142476、#141252、#139847、#144911、#140455）纳入下一轮修复队列；同时就是否发布 2026.9.5 或回补 #144208 至 2026.9.4 做出决策，以解除 #144742/#145192 的升级阻断。

---
*数据来源：github.com/openclaw/openclaw，统计窗口 2026-09-11 至 2026-09-12。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**数据窗口：2026-09-11 至 2026-09-12** ｜ 覆盖 13 个项目

---

## 1. 生态全景

本周期生态整体处于**"高强度维护、低发布节奏"**的常态：13 个项目中仅 Hermes Agent 发布了一个补丁版本（v0.21.2），其余 12 个项目全部零发布，但 Issue/PR 吞吐普遍处于高位（OpenClaw、ZeroClaw、Hermes 单日更新量均达 50 条量级）。**稳定性与可靠性问题压倒性地主导了社区注意力**——升级/迁移回归、进程崩溃一致性、会话状态丢失、并发写入冲突构成了跨项目反复出现的主旋律，而新功能请求的讨论热度普遍偏低。一个显著的结构性信号是：**代码供给与评审吞吐出现系统性错配**，ZeroClaw（49 条待合并）、Hermes（49 条）、NanoClaw（21 条）均积压严重，维护者带宽而非贡献者意愿成为生态健康度的主要瓶颈。整体看，生态正从"功能扩张期"集体转入"加固与治理期"。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃 / 关闭） | PR 更新（待合并 / 合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（258 / 242） | 500（289 / 211） | 无（2026.9.4 缺关键修复） | 维护吞吐强劲，但**升级路径系统性脆弱**为最大风险 |
| **Hermes Agent** | 50（22 / 28） | 50（49 / 1） | **v0.21.2（v2026.9.11）** | 响应快、方向准，但 `state.db`/WAL 多写入者稳定性是短板；评审吞吐瓶颈 |
| **ZeroClaw** | 24（20 / 4） | 50（49 / 1） | 无 | 缺陷披露质量高、士气足，但合入速度显著落后；治理队列积压近 70 天 |
| **NanoClaw** | 5（含当日闭环 3 条） | 40（21 / 19） | 无 | 安装类 Bug 24h 内闭环，健康度良好；21 条待合并偏高 |
| **CoPaw（QwenPaw）** | 19（15 / 4） | 9（8 / 1） | 无 | 2.2.x 回归密度值得关注；多条修复当日提交，审阅带宽为主瓶颈 |
| **NanoBot** | 28（含 Issue/PR 混合） | 26（11 / 15） | 无 | 合并率约 58%，运行时可靠性改动推进顺利；渠道类 PR 长期 conflict |
| **LobsterAI** | 6（全 OPEN，均 stale） | 11（9 / 2） | 无 | 新输入极少，9 条待合并中约 8 条为 3 月历史修复，**评审积压为主要风险** |
| **Moltis** | 1（1 / 0） | 3（2 / 1） | 无 | 单 Issue 当日出 fix PR，闭环效率高；长期 PR #1143 悬置 72 天 |
| **PicoClaw** | 4（2 / 2） | 2（1 / 1） | 无 | 活跃度偏低，当日条目全带 `[stale]`，平稳维护 |
| **NullClaw** | 0 | 1（0 / 1） | 无 | 单点加固（MCP stdio 超时），无风险信号 |
| **IronClaw** | 0 | 1（0 / 1） | 无 | 平稳维护期，社区输入端冷清 |
| **TinyClaw** | 0 | 0 | 无 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 无活动 |

> 注：OpenClaw 数据量级远超其余项目（500 vs ≤50），为统计口径差异或生态体量差异，见第 3 节。

---

## 3. OpenClaw 在生态中的定位

**体量与规模优势显著。** OpenClaw 单日 Issue 更新 500 条、PR 更新 500 条，是其余项目的 10–500 倍量级。其用户场景呈现明确的重度特征：632-agent 网关、约 1500 个 trajectory 文件、跨 2026.7→9 多版本升级的生产实例——这说明 OpenClaw 已进入**大规模、长期运行、多 agent 集群**的生产使用阶段，而非早期尝鲜。

**技术路线的差异点：**
- **Doctor 迁移与 attestation 体系**：OpenClaw 独有的 Doctor 校验 / legacy workspace attestation import 机制，在其它项目中未见对应概念。这是其升级安全性设计的核心，但也成为今日 P0 回归的集中爆发点（#142585、#144742）。
- **handoff lease / version-1 兼容**：v1 handoff lease 行使时 config write 失败的升级阻断（#144742）反映其在状态兼容层上的复杂度远高于同类。
- **发布工程成熟但存在缺口**：2026.9.4 "ships without #144208" 属发布打包疏漏，说明其 CI/发布链路在高节奏下出现质量问题。

**社区规模对比**：OpenClaw 的评论热点最高为 17（#142585），绝对量不高但集中于升级阻断类议题；相比之下 Hermes 的机器人巡检贴达 202 评论、ZeroClaw 的治理 tracker 达 15 评论——说明**不同项目的社区注意力分布差异大**：OpenClaw 社区更倾向"报告生产事故"，Hermes 更受自动化噪音困扰，ZeroClaw 则聚焦治理决策。

**定位总结**：OpenClaw 是本生态中**体量最大、生产化程度最高、工程复杂度最高的参照系**，其今日困境（升级路径脆弱）正是大规模部署的代价；而中小项目（Moltis、NullClaw、IronClaw）则在单点可靠性上做精细化打磨。

---

## 4. 共同关注的技术方向

以下需求在**多个项目中独立涌现**，构成生态级技术方向：

### （1）崩溃一致性与幂等性 —— 最深水区
- **NanoBot**：#5747/#5748 工具结果批边界持久化（进程在 A/B/C 之间退出丢失已完成结果）；#5749/#5750 通过 ContextVar 暴露稳定 tool-call 上下文以支持幂等副作用。
- **ZeroClaw**：#10797（S0）markdown memory 并发 `store()` 静默丢数据；#10788 失败回合丢弃已接受 prompt 与已完成工具交换。
- **OpenClaw**：#97616 子进程僵尸累积导致运行时退化。
- **共同诉求**：多工具/多进程并行下的持久化语义与副作用幂等，是当前 agent runtime 的通用薄弱环节。

### （2）会话 / 状态存储可靠性
- **Hermes**：#100896（P0）`state.db` 五周内四次损坏（gateway+dashboard 多写入者 WAL）。
- **CoPaw**：#7724/#7708 会话与模型配置丢失、#7698 幽灵会话。
- **OpenClaw**：#140620 会话迁移仅导入 27/~1500 即停滞。
- **NanoClaw**：#3766 并发 SQLite 迁移在写锁下重检（已修复）。
- **共同诉求**：多进程/多 profile 写入下的数据库一致性、迁移事务性、状态可检索性。

### （3）限流 / 退避 / 成本可观测性
- **NanoClaw**：#3576 限流回合成对推送错误、无退避去重。
- **ZeroClaw**：#10787 单候选流恢复忽略 `provider_retries`；#10779 429 亚秒级重试而非快速失败；#10782 channel 分类器 usage 从不记录。
- **NanoBot**：#5675 主模型挂起耗尽 runner deadline，健康备选从未被尝试（已修复）。
- **共同诉求**：统一的重试/退避语义 + LLM 调用成本与配额的可观测性。

### （4）多模型 / 子智能体成本治理
- **CoPaw**：#7664 独立记忆写入模型（已有 PR #7719）；#4901 子智能体按任务选模型；#7676 `subagent_model` 无效。
- **ZeroClaw**：#9809 单 provider profile 多模型。
- **Moltis**：#1143 Requesty 作为 OpenAI 兼容 provider。
- **共同诉求**：让廉价模型承担简单任务（grep、记忆写入）、provider 层灵活路由。

### （5）配置静默失效
- **NanoClaw**：#2901 `.env` 中 `WEBHOOK_PORT` 被静默忽略（历时 73 天关闭）。
- **ZeroClaw**：#10781 多个已接受配置键实际失效或名不副实。
- **PicoClaw**：#3355 飞书 `app_id` 被判为未知字段。
- **共同诉求**：配置 schema 与实际行为的契约一致性，配错必须有显式报错。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes | ZeroClaw | NanoClaw | CoPaw | 轻量系（Moltis/NullClaw/IronClaw/PicoClaw） |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈 agent 平台（Doctor/迁移/多 agent 网关） | 稳定性 + 插件/Skills 生态 + 桌面流式 | Rust 系 runtime，RFC 驱动，OIDC 身份 | 多模态（语音）+ code-mode 持久编码会话 | 中文生态 + 多渠道（飞书/Telegram） | MCP 传输、TLS、渠道适配单点 |
| **目标用户** | 大规模生产部署、多 agent 集群 | 重度个人用户 + 插件开发者 | 安全敏感、身份治理需求 | 浏览器语音 + 长驻编码 | 国内办公渠道用户 | 嵌入式/边缘、单一渠道集成 |
| **技术架构** | 核心平台 + Doctor 校验层 + handoff lease | session store + 多 profile multiplexer | RPC + ACP + provider 矩阵 | agent-runner + 容器 + gateway | Python + MCP + Desktop | 单语言（Zig/Go/Rust）轻量 |
| **发布策略** | 高频（2026.9.x 系列） | 补丁响应式（v0.21.2） | RFC 分片落地 | 安装稳定性优先 | beta 迭代验证 | 低频单点加固 |
| **核心痛点** | 升级路径脆弱 | 多写入者 WAL | 评审积压 + 上下文压缩回归 | 限流刷屏 + 首次安装 | 2.2.x 回归 + 配置丢失 | 渠道语义一致性 |

**关键差异判断**：OpenClaw/Hermes/ZeroClaw 代表**平台级**路线（覆盖面广但复杂度高、稳定性风险大）；NanoClaw/CoPaw 代表**场景级**路线（语音、中文办公渠道）；Moltis/NullClaw/IronClaw/PicoClaw 代表**组件级**路线（MCP、TLS、渠道适配的单点打磨）。

---

## 6. 社区热度与成熟度

### 分层

**第一层：大规模生产迭代（OpenClaw）**
体量最大、复杂度最高、升级风险最集中。处于"高吞吐维护 + 发布质量承压"阶段，需在 2026.9.5 补丁或回补 #144208 之间做决策。

**第二层：快速迭代 + 质量巩固并行（Hermes、ZeroClaw、NanoClaw、CoPaw、NanoBot）**
- **快速迭代信号**：NanoClaw 的 `/add-voice` 与 code-mode（架构级新特性）、CoPaw 的多模型成本治理、NanoBot 的 tool-context/崩溃一致性。
- **质量巩固信号**：Hermes 的 `state.db` 补丁、ZeroClaw 的 S0/S1 缺陷密集登记。
- 共性是**评审吞吐成为瓶颈**（Hermes/ZeroClaw 各 49 条待合并）。

**第三层：平稳维护 / 低活跃（LobsterAI、Moltis、PicoClaw、NullClaw、IronClaw）**
- LobsterAI 是**积压典型**：9 条待合并中约 8 条为 3 月历史修复，已挂 `stale` 逾五个月，修复代码就位但卡在评审。
- PicoClaw 当日条目全部 `stale`；Moltis 单 PR 悬置 72 天。
- **风险判断**：这一层的"假活跃"（刷新 stale 条目）掩盖了实际推进停滞。

**第四层：静默（TinyClaw、ZeptoClaw）**
过去 24 小时无任何活动。

---

## 7. 值得关注的趋势信号

### 信号一：单调"升级/迁移"已成为 agent 平台的头号信任消耗源
OpenClaw 的热点几乎全部指向跨大版本升级（Doctor 阻断、会话丢失、回滚误报），Hermes 因 `state.db` 脆弱性被迫当日发补丁。**对开发者的参考价值**：状态存储的迁移与多写入者并发应作为架构早期的一等公民设计，而非事后补丁；建议引入迁移事务 + 写入者身份校验 + 显式回滚验证。

### 信号二：崩溃一致性与幂等在多项目独立涌现，预示 runtime 语义标准化需求
NanoBot 的 tool-call context / 批边界持久化、ZeroClaw 的 S0 数据丢失、OpenClaw 的僵尸进程——**同一问题在三个独立项目中同日出现**。**参考价值**：`ToolInvocationContext`（稳定 ID）与"批边界部分持久化"可能成为 agent runtime 的事实标准模式。

### 信号三：多模型/子智能体成本治理从"优化"升级为"刚需"
CoPaw 用户明确引用 Claude Code 的 Haiku/Opus 分工、要求记忆写入与子任务使用廉价模型；ZeroClaw 要求 provider 级多模型路由。**参考价值**：旗舰模型跑全流程在经济上不可持续，**按任务分级的模型路由 + 成本可观测性**将成为标配。

### 信号四：配置静默失效是跨项目的系统性反模式
NanoClaw（`.env` 被忽略 73 天）、ZeroClaw（配置键名不副实）、PicoClaw（schema 脱节）——**配错必须显式报错**应写入设计原则。**参考价值**：配置加载顺序、schema 校验、失效键检测值得作为通用清单。

### 信号五：评审吞吐而非贡献供给，正成为生态健康度瓶颈
ZeroClaw（49 条 / 治理队列 70 天）、Hermes（49 条）、LobsterAI（8 条 stale 待合并）、Moltis（72 天）、NanoClaw（21 条）共同指向**维护者带宽枯竭**。**参考价值**：`fix-shape-clear` + `queueable-fix` 标签（OpenClaw 已有）等**自动化分诊机制**、RFC 切片合并、长龄 PR 集中分诊，是规模化社区的必修课。

### 信号六：静默失败最伤体验，"后端成功、前端无感"是高频反模式
Hermes #98503（clarify 卡片不渲染）、#107272（`/steer` 被确认但忽略）、CoPaw #7723（SSE 静默结束）、Moltis #1264（策略未暴露用户无从知晓）——**参考价值**：surface 层校验与失败可区分性（failure vs completion）应作为交互设计的硬约束。

### 信号七：安全边界问题开始由用户主动审计
Hermes #74078（approval guard 绕过，用户主动审计）、CoPaw #7727（越界写入绕过 Write 保护）、PicoClaw/OpenClaw 的 fs-safe 权限问题——**参考价值**：随着 agent 获得文件/进程控制权，工具阻断与自终止保护的语义精确性正成为用户评估产品的关键维度。

---

**一句话结论**：2026 年 9 月的个人 AI 智能体生态，竞争焦点已从"功能有无"转向**"升级不坏、崩溃不丢、配错即报、成本可控、评审不堵"**——这五项工程化能力，正在成为区分平台级项目与玩具项目的真正门槛。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-12

## 1. 今日速览

今日项目活跃度处于**高位**：过去24小时共有 28 条 Issue/PR 更新，其中 PR 26 条（合并/关闭 15 条、待合并 11 条），合并率约 58%。无新版本发布。今日核心动向集中在两条主线：一是围绕**运行时检查点与工具调用幂等性/崩溃一致性**的一组 Issue 与配套 PR（#5747/#5748、#5749/#5750），由同一作者 xiexiahao 当日提出并当日提交实现；二是 WebUI 性能与历史回放优化（#5738、#5745）已完成关闭并落地。同时，多条渠道类 PR（Linear、Telegram、Email）标记 `conflict` 长期挂起，积压风险需关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 15 条 PR 中，以下为重点：

- **[CLOSED] #5745 `fix(webui): make large history replay incremental and cached`**（作者 chengyongru，p1）
  https://github.com/HKUDS/nanobot/pull/5745
  对后端历史回放施加消息数、记录数、字节三重预算限制，压缩已完成的流式增量，并将解析、恢复、回放、序列化、gzip 等计算移出 gateway 事件循环；初始页面改为只拉取 40 条消息。这是针对大历史场景的**性能与卡顿修复**，直接改善长会话可用性。

- **[CLOSED] #5738 `perf(webui): reduce long-text streaming refresh overhead`**（作者 chengyongru，p2）
  https://github.com/HKUDS/nanobot/pull/5738
  将可见 reasoning 预览限制为 512 个 UTF-16 码元加省略号，且不拆分代理对（surrogate pair），从 #5732 中提取出 WebUI 部分，降低长文本流式刷新的渲染开销。

- **[CLOSED] #5675 `fix(providers): allow model failover after runner deadlines`**（作者 be-student，p2，regression）
  https://github.com/HKUDS/nanobot/pull/5675
  修复 #5674：主模型挂起会在 `FallbackProvider` 看到超时响应之前耗尽 runner deadline，导致整条链被取消、健康备选模型从未被尝试。属**可靠性回退缺陷修复**。

- **[CLOSED] #5613 `fix(provider): clean up replayed items before sending them to providers`**（作者 kkkhoo，p2）
  https://github.com/HKUDS/nanobot/pull/5613
  修复由 Chat 历史中回放 provider 生成的 item ID、以及会话状态中不受支持的 provider 字段导致的 Responses API 失败，涉及两类回放问题。

- **[CLOSED] #5746 `feat(providers): add DaoXE gateway provider`**（作者 seven7763，p2）
  https://github.com/HKUDS/nanobot/pull/5746
  新增 DaoXE 作为具名 gateway provider（含文档、WebUI、测试）。

- **[CLOSED] #5739 `Dev`**（作者 starwithcoder，CI/CD）
  https://github.com/HKUDS/nanobot/pull/5739
  摘要为空，标记为 CI/CD 类别。

**整体推进判断**：今日主要消化的是**性能与 provider 可靠性存量问题**（WebUI 回放、failover、回放数据清理），并完成一个新增 provider 接入；同时新开的两组 recovery/tool-context 改动尚在待合并状态，预计影响下一阶段运行时稳定性。

---

## 4. 社区热点

数据中所有展示条目的评论数与 👍 均为 0 或未提供（`undefined`），**今日无明显讨论热度集中点**。按更新时间和议题关联度，可关注以下两条当日新建、且形成"Issue + 实现 PR"配对的话题：

- **Issue #5749 ↔ PR #5750：工具调用上下文**
  https://github.com/HKUDS/nanobot/issues/5749 · https://github.com/HKUDS/nanobot/pull/5750
  诉求：`AgentRunner` 在派发工具时已持有稳定的 provider tool-call ID，运行时检查点也用它区分待处理/已完成工作，但**工具实现本身拿不到该上下文**，导致副作用难以幂等。PR #5750 以基于 ContextVar 的 `ToolInvocationContext` 在 `_execute_tool_call()` 处绑定上下文予以实现。

- **Issue #5747 ↔ PR #5748：批边界持久化工具结果**
  https://github.com/HKUDS/nanobot/issues/5747 · https://github.com/HKUDS/nanobot/pull/5748
  诉求：多工具响应存在**崩溃一致性窗口**——工具 A 完成、B 开始、gateway 在 C 执行前崩溃时，持久检查点可能仍记录全部（或丢失已完成结果）。PR #5748 在批次边界持久化部分工具进度。

**背后信号**：这两组议题共同指向同一方向——**多工具并行执行下的崩溃恢复与幂等语义**，属于 agent 运行时可靠性的深水区，值得关注后续演进。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 | 说明 |
|---|---|---|---|
| 高（p1） | **#5745 WebUI 大历史回放** | 已修复（CLOSED） | 大历史回放造成后端压力与事件循环阻塞，已通过预算限制+增量化+缓存修复。 |
| 高（崩溃一致性） | **#5747 多工具响应崩溃窗口** | 有 fix PR（#5748，OPEN） | 进程在 A/B/C 之间退出时，已完成结果可能未被正确持久化或错误标记为全部完成。 |
| 中（p2，regression） | **#5675 模型 failover 失效** | 已修复（CLOSED） | 主模型挂起导致健康备选从未被尝试。 |
| 中（p2） | **#5613 回放数据导致 Responses API 失败** | 已修复（CLOSED） | provider 生成的 item ID 与不支持字段被回放。 |
| 中（p2） | **#5751 cron 编辑丢失待运行任务** | 有 fix PR（PR 本身即修复，OPEN） | 编辑 automation 名称/说明时会重算下次触发时间：间隔任务被推迟、到期 cron 被跳过、一次性到期任务被置为 `next_run_at_ms=None`。 |
| 中（p2） | **#5605 Email `\Seen` 标记时机错误** | 有 fix PR（PR 本身即修复，OPEN，conflict） | 消息仅通过过滤器就被标记 `\Seen`，而非在真正投递给 agent 之后；被过滤拒绝的消息也被误标。 |

说明：#5751 与 #5605 在数据中以 PR 形式呈现，其摘要即为缺陷描述与修复说明，尚无独立 Issue 条目对应展示。

---

## 6. 功能请求与路线图信号

**今日新增功能需求（均来自 Issue）：**

- **#5749 暴露稳定的工具调用上下文以支持幂等副作用** — 已有当日实现 PR #5750，且两者同日更新，**纳入下一版本的确定性较高**。
  https://github.com/HKUDS/nanobot/issues/5749

- **#5747 在执行批边界持久化已完成的工具结果** — 已有当日实现 PR #5748，同样**很可能进入下一版本**。
  https://github.com/HKUDS/nanobot/issues/5747

**待合并功能 PR 中的路线图信号：**

- **#5495 原生 Linear agent channel**（OAuth 授权码 + PKCE、按工作区轮换 token、签名 `AgentSessionEvent` webhook + 去重 SQLite 队列）— 自 2026-08-23 起挂起，标记 `conflict`。
  https://github.com/HKUDS/nanobot/pull/5495
- **#4919 Telegram 支持自定义 Bot API base URL 与额外 header**（对应 Issue #4702，支持自建 Bot API 服务器/企业网关）— 自 2026-07-14 起挂起，标记 `conflict`。
  https://github.com/HKUDS/nanobot/pull/4919
- **#5609 Email 微软委托 OAuth（Office365/Outlook）**、**#5606 Email 按收件人别名过滤** — 均自 2026-08-30 起挂起，标记 `conflict`。
  https://github.com/HKUDS/nanobot/pull/5609 · https://github.com/HKUDS/nanobot/pull/5606
- **#5743 WebUI 设置目录控件与标题简化**（自动化搜索/状态筛选/排序常驻可见、移除任务行箭头）— 当日仍为 OPEN。
  https://github.com/HKUDS/nanobot/pull/5743

**判断**：渠道扩展类功能（Linear/Telegram/Email）虽方向明确，但普遍卡在 `conflict` 状态，短期内落地概率受限；而运行时可靠性类改动（#5748、#5750）与 WebUI 细节打磨（#5743）推进阻力更小。

---

## 7. 用户反馈摘要

今日展示的 Issue 评论数均为 0，**无用户评论可提炼**。以下痛点直接来自 Issue/PR 摘要正文：

- **工具副作用难以幂等**：工具实现无法获知自身对应的 tool-call 身份，作者认为这阻碍了幂等副作用的实现（#5749）。
- **崩溃恢复存在一致性缺口**：多工具响应中，durable checkpoint 仅在执行前与整套工具调用完成后持久化，中途进程退出会丢失已完成结果（#5747、#5748）。
- **大历史会话体验差**：WebUI 历史回放对 gateway 事件循环造成阻塞，初始加载过重（#5745）。
- **模型故障转移不可靠**：主模型挂起会让配置好的健康备选完全不被尝试，属于回归问题（#5675）。
- **自动化编辑副作用**：仅编辑名称或说明（不改调度）也会重算下次运行，导致间隔任务推迟、cron 到期被跳过、一次性任务丢失下次运行时间（#5751）。
- **邮件渠道语义错误**：消息未真正投递即被标记 `\Seen`，被过滤拒绝的消息同样遭误标（#5605）；共享邮箱的别名消息当前被全部处理（#5606）。

整体看，反馈集中于**运行时正确性与恢复语义**，而非界面易用性。

---

## 8. 待处理积压

以下 PR 长期处于 OPEN 且标记 `conflict`，建议维护者优先处理冲突或明确取舍：

| PR | 主题 | 创建日期 | 已挂起 |
|---|---|---|---|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | Telegram 自定义 Bot API base URL 与额外 header | 2026-07-14 | 约 2 个月 |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | 原生 Linear agent channel | 2026-08-23 | 约 3 周 |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | Email `\Seen` 标记时机修复 | 2026-08-30 | 约 2 周 |
| [#5606](https://github.com/HKUDS/nanobot/pull/5606) | Email 按收件人别名过滤 | 2026-08-30 | 约 2 周 |
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) | Email 微软委托 OAuth | 2026-08-30 | 约 2 周 |

其中 Email 相关三条来自同一作者 tilladam，构成一组**完整的邮件渠道现代化改造**（OAuth 强制化适配、别名过滤、投递语义修正），若长期阻塞可能影响 Office365/Outlook 用户的可用性。另有 #5751（cron 编辑丢失待运行任务）、#5743（WebUI 设置简化）为当日新开待合并项，尚属正常评审窗口。

---

**数据来源**：NanoBot (github.com/HKUDS/nanobot) 2026-09-12  GitHub 数据快照。所有链接与摘要均基于所提供的原始材料，未作外部补充。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-12

## 1. 今日速览

过去24小时项目维持高位活跃：50 条 Issue 更新（新开/活跃 22、关闭 28），关闭量高于新开量，积压处理呈净收敛态势；PR 侧 50 条更新中仅 1 条合并/关闭、49 条待合并，合并吞吐明显偏低，评审队列承压。当日发布补丁版本 v0.21.2（v2026.9.11），直接回应 v0.21.0 会话存储重写引入的 `state.db` 脆弱性问题。风险面高度集中于 `state.db`/会话状态：今日最受关注的两条 P0/P1 问题（#100896 数据库损坏、#100401 cron 心跳死锁）均属该类别，且已在 release note 与新 Issue 中形成互相印证的证据链。整体看，项目响应速度快、修复方向明确，但多写入者 WAL 相关稳定性仍是当前健康度的主要短板。

## 2. 版本发布

**v2026.9.11 — Hermes Agent v0.21.2（The state.db Patch Release）**，发布日期 2026-09-11。

- **性质**：补丁版本，非功能性更新。
- **背景**：v0.21.0 对会话存储（session store）的连接处理做了大规模重写，部分安装环境下导致 `state.db` 变得脆弱——出现第二个写入者互相取消锁、健康状态异常的情况。
- **破坏性变更**：release note 中未声明破坏性变更；本次为修复性发布。
- **迁移注意事项**：官方材料仅说明该版本针对 `state.db` 脆弱性做补丁修复，未给出额外迁移步骤。建议 v0.21.0/v0.21.1 用户关注升级，尤其是多进程写入场景（gateway + dashboard）。

> 注：release note 摘要在源数据中被截断，完整修复细节请以 GitHub Release 页面为准。

## 3. 项目进展

今日 PR 侧推进有限：50 条更新中 **49 条待合并、仅 1 条已合并/关闭**。以下为今日更新、值得关注的在途 PR：

- **#109088 [OPEN] fix(desktop): served profiles show running and route lifecycle to the multiplexer from a pooled local backend**（teknium1）
  针对 Discord 反馈“multiplexed profiles 在 Desktop 中不可用”，已在 `main` 上对两种拓扑逐一实测所有 profile 相关界面。
  链接: NousResearch/hermes-agent PR #109088

- **#109084 [OPEN] feat(plugin-catalog): Snyk ships as a standalone plugin with its skill（supersedes #73860）**（teknium1）
  `hermes plugins install snyk` 现在可一次性获得 Snyk 代码/依赖/容器/IaC/SBOM 扫描能力及其配套 skill，来自 Nous 自有独立插件仓库，不再依赖 `optional-mcps` 条目。
  链接: NousResearch/hermes-agent PR #109084

- **#109087 [OPEN] fix(tools): resolve symlinks in binary-document write guard (#108715)**（RelaxJonh）
  修复 `_check_binary_document_write` 仅检查文件名后缀、导致文本后缀软链接（`alias.txt -> document.docx`）绕过写入防护的问题。
  链接: NousResearch/hermes-agent PR #109087

- **#109045 [OPEN] fix(memory): refuse to stage a review batch the budget can never fit**（tahleen）
  后台 review fork 可能堆积记忆预算永远无法容纳的 consolidation batch，此前 `/memory approve` 会原样重放该载荷；此 PR 在入队前增加校验。
  链接: NousResearch/hermes-agent PR #109045

- **#108898 [OPEN] fix(desktop): honour injected path flavor and stop leaking git child handles**（anhtahaylove）
  修复 Windows 暴露的三处运行时缺陷，不触碰测试文件。
  链接: NousResearch/hermes-agent PR #108898

**进展评估**：今日无功能性大规模合并，项目向前推进主要体现为“修复就绪但待评审”状态的堆积，而非实际落地。评审吞吐是当前瓶颈。

## 4. 社区热点

按评论数排序，今日社区注意力集中在自动化巡检机器人与稳定性长贴：

- **#66616 [OPEN] [skills-index-watchdog] Skills index is stale or degraded（degraded）** — 评论 202
  自动化新鲜度探针失败：索引已 29.8 小时未更新（上限 26 小时），Skills Hub `/docs/skills` 依赖 `/docs/api/skills-index.json`，由 `.github/workflows/skills-index.yml` 重建。作者为机器人账号 nousbot-eng，创建于 2026-07-18，持续至今。
  链接: NousResearch/hermes-agent Issue #66616
  诉求：CI/索引流水线存在长期未彻底解决的定时重建失败，需要维护者排查 workflow 侧根因而非反复触发。

- **#100401 [OPEN][P1] cron — fire-claim heartbeat 与自身 run 的 fence 死锁** — 评论 21
  当 cron job 的 **delivery** 仍在飞行中而 fire-claim 心跳（`_RUN_CLAIM_HEARTBEAT_SECONDS`，60s）触发时，任务会在 30s 后被终止，并记录为 “Interrupted by shutdown before terminal completion”。影响所有运行超过 60s 的任务。
  链接: NousResearch/hermes-agent Issue #100401

- **#74078 [OPEN][P2] Approval guard bypass：按数字 PID kill + execute_code 阻塞前缀不匹配** — 评论 12
  指出 `tools/approval.py` 两处缺口：`kill <numeric-PID>` 可绕过自终止保护，以及 blocked-tool 强制存在前缀匹配不一致。属安全边界问题。
  链接: NousResearch/hermes-agent Issue #74078

- **#2825 [CLOSED] [Setup]: Instalación de hermes en entorno proot ubuntu (termux)** — 评论 29
  用户在 Termux/proot Ubuntu 环境重跑 quick install（curl | bash）时终端抛出一系列错误。
  链接: NousResearch/hermes-agent Issue #2825

## 5. Bug 与稳定性

按严重程度排列：

**P0**

- **#100896 [OPEN][P0] state.db 五周内四次损坏（gateway+dashboard 多写入者 WAL）**
  “5 live SessionDB handles” 警告在损坏发生前 7 分钟出现；`journal_mode=delete` 可作为围堵手段。单主机生产 gateway，WAL 模式下多进程写入集合。
  链接: NousResearch/hermes-agent Issue #100896
  **fix 状态**：与今日发布的 v0.21.2 patch release 主题直接对应，但该 Issue 仍为 OPEN。

**P1**

- **#100401 [OPEN][P1] cron fire-claim heartbeat 死锁**（详见社区热点）。
  链接: NousResearch/hermes-agent Issue #100401
  **fix 状态**：暂无对应 PR。

- **#98503 [OPEN][P1] Desktop clarify 卡片永不渲染 — clarify.request 事件在 transport routing 中丢失**
  后端 `tool clarify completed` 已在 agent.log 确认成功，但前端 `clarify.request` 未到达，用户无法看到澄清卡片。
  链接: NousResearch/hermes-agent Issue #98503
  **fix 状态**：暂无对应 PR。

**P2**

- **#74078 [OPEN][P2] Approval guard 绕过（安全）** — 无对应 fix PR。
- **#107296 [OPEN][P2] systemd gateway unit PATH 缺少调用 shell 的 PATH（NixOS 无 coreutils）**
  生成的 systemd unit 从不包含 `/run/current-system/sw/bin`，NixOS 上 gateway 启动后 PATH 中缺少 coreutils。
  链接: NousResearch/hermes-agent Issue #107296 — 无对应 fix PR。
- **#107272 [OPEN][P2] 图像预处理期间发送的 `/steer` 被确认但被忽略**
  经典 CLI 中 `/steer` 可被接受，但消息不影响当前轮次。
  链接: NousResearch/hermes-agent Issue #107272 — 无对应 fix PR。

**P3**

- **#108927 [OPEN][P3] Kanban 断路器在瞬时基础设施故障后永久放弃卡片**，原因消失后无重试机制。
  链接: NousResearch/hermes-agent Issue #108927
- **#108445 [OPEN][P3] skill scanner 在 prompt-size 索引中重复计数相同 SKILL.md 路径**
  报告环境为 v0.21.1 (2026.9.7)，commit `ad03f20d`。
  链接: NousResearch/hermes-agent Issue #108445

**今日已关闭的稳定性相关 Issue**

- **#107485 [CLOSED] SSH 隔离后端中的 cron scheduler：idle-exit 杀死运行中的 cron 执行并静默跳过调度槽位**
  链接: NousResearch/hermes-agent Issue #107485
- **#108867 [CLOSED] Desktop 更新在 Linux 安装根为软链接时不重启（linux_gate 误报偏斜）**
  链接: NousResearch/hermes-agent Issue #108867
- **#107327 [CLOSED] 多路复用 gateway：进程全局路径记忆化导致保护指令门与 config.yaml 硬阻断依赖哪个 profile 先运行**
  链接: NousResearch/hermes-agent Issue #107327
- **#2384 [CLOSED] Anthropic fallback 继承 Codex 的 `model.base_url`，把 Claude 请求发往 chatgpt.com/backend-api/codex**
  链接: NousResearch/hermes-agent Issue #2384

> 观察：今日报告的多个 P1/P2 问题（#100401、#98503、#107296、#107272）均无对应 fix PR，同时待合并 PR 已累积至 49 条，修复供给与合并吞吐之间存在结构性错配。

## 6. 功能请求与路线图信号

- **Bot Screen — 每个 bot 拥有独立 Xfce 桌面并流式投射到 Hermes Desktop**（PR #108914，teknium1，关联 #92524）
  无头 Linux gateway 上的 bot 获得自己的 Xfce 桌面，Desktop 实时串流；用户可接管完成登录/2FA，再交还屏幕让 bot 继续会话。这是把“让用户打开 bot 的浏览器”这一诉求产品化的方案，规模较大且涉及安全边界（sweeper:risk-security-boundary）。
  链接: NousResearch/hermes-agent PR #108914
  **判断**：作为 feature PR 直接提交且由核心维护者发起，具备进入下一版本讨论的条件，但涉及桌面流式传输与安全边界，预计需较长评审周期。

- **Secrets 双系统语义分离**（Issue #107700，kvnloo，P3）
  指出 Hermes 现有两套 secret 系统契约不同（secret sources 用于托管，vs. HTTP 注入包装），文档此前将其混为一谈（#107698 已修正文档）。请求为工具凭据提供 handles、为 HTTP 注入提供 wrap。
  链接: NousResearch/hermes-agent Issue #107700
  **判断**：方向明确、改动面可控，配合 #109084（Snyk 独立插件）看，插件/凭据体系正在被系统性梳理。

- **Hermes Studio 必须声明稳定的群聊会话身份以关闭 #96811**（Issue #99801，andrexibiza，P0 + needs-decision）
  当 host 声明稳定的逻辑会话身份时，Hermes 可在每次响应的物理 session ID 轮换之间维持单一 affinity scope，并在真实会话边界干净轮转。#98811 已修复 agent 侧。
  链接: NousResearch/hermes-agent Issue #99801
  **判断**：标记 needs-decision 与 P0，且已有一半修复落地，属于需要维护者拍板的路线图级议题，与 #100896 的会话状态风险同源。

- **长文本粘贴转为文件附件**（Issue #66622，已关闭，P3，comp/desktop）
  向 Desktop composer 粘贴超长文本会淹没输入框、影响编辑与滚动，且难以区分用户指令与粘贴来源。
  链接: NousResearch/hermes-agent Issue #66622
  **判断**：已关闭，需求方向可能已被纳入或另行处理。

## 7. 用户反馈摘要

- **安装环境摩擦（跨平台/非主流环境）**：#2825 中 Termux + proot Ubuntu 用户重跑 curl | bash 快速安装时遭遇一连串错误，说明官方安装脚本在非标准 Linux 环境下的适配仍是痛点。#107296 则揭示 NixOS 上 systemd unit 的 PATH 生成逻辑未覆盖发行版特有路径（coreutils 仅在 `/run/current-system/sw/bin`），导致 gateway 启动即缺基础工具。此类问题共同指向“安装/部署路径的平台假设过强”。

- **会话与状态可靠性是最高频的不满来源**：#100896 的用户以“五周内四次损坏”的精确计数提交生产事故数据，并给出 7 分钟前的预警信号（“5 live SessionDB handles”）与 `journal_mode=delete` 围堵方案，属于高置信度、可复现的深度反馈，也解释了为何维护者当日即发布 v0.21.2 补丁。同时 #107327（多 profile 下路径记忆化导致门禁行为依赖运行顺序）虽已关闭，但反映多写入者/多 profile 场景下的进程全局状态污染是一个反复出现的模式。

- **静默失败最伤体验**：#98703 类的“后端成功、前端无感知”模式在今日出现两次——#98503（clarify 卡片不渲染，但 agent.log 显示工具已完成）与 #107272（`/steer` 被确认但被忽略）。用户能提供的日志证据完整、定位清晰，但两端都缺乏 surface 层校验。

- **部署与更新的“假成功/假失败”**：已关闭的 #108867（安装根为软链接时 Desktop 更新的 relaunch gate 误判）与在途的 #95401（OMH 临时运行时未被 gitignore，导致更新停在 `fix/mcp-stdio-children-*` 检出上并报 “Hermes update did not finish”）说明更新链路对工作树状态的假设较脆弱。

- **安全预期**：#74078 由用户主动审计 approval guard 并提出两处绕过（数字 PID kill、execute_code 前缀匹配），表明部分用户已在将 Hermes 用于需要明确自终止保护与工具阻断语义的场景。

## 8. 待处理积压

- **#66616 [OPEN] skills-index-watchdog（degraded）** — 创建于 **2026-07-18**，至今日已近两个月，评论数高达 202 且持续由机器人重复触发。
  链接: NousResearch/hermes-agent Issue #66616
  提醒：这是全项目评论数最高的条目，长期未决会持续消耗通知噪音，建议维护者明确是关闭探针、放宽阈值，还是修复 `skills-index.yml` 定时重建失败的根因。

- **#74078 [OPEN][P2][type/security] Approval guard bypass** — 创建于 **2026-07-29**，评论 12，至今无 fix PR。
  链接: NousResearch/hermes-agent Issue #74078
  提醒：安全类问题放置逾六周，且其中一项为自终止保护绕过，优先级评估宜重新确认。

- **#100401 [OPEN][P1] cron heartbeat 死锁** — 创建于 2026-09-01，评论 21，影响所有运行超过 60s 的 cron 任务，无 fix PR。
  链接: NousResearch/hermes-agent Issue #100401

- **PR #95409 [P2] fix(desktop): namespace colliding tool ids when backfilling older transcript pages** — 创建于 **2026-08-26**，仍待合并。该缺陷可导致长会话回溯时整个 workspace 变白，且刷新会重新触发同一 backfill。
  链接: NousResearch/hermes-agent PR #95409

- **PR #78859 fix(docker): recover from dead container rootfs on reuse (#77301)** — 创建于 **2026-08-04**，仍待合并。docker/podman 复用持久容器时若 rootfs 挂载已死，此前每次工具调用都会失败。
  链接: NousResearch/hermes-agent PR #78859

- **PR #75459 [P3] fix(desktop): create sessions in non-git projects** — 创建于 **2026-07-31**，仍待合并。非 git 项目文件夹无法新建会话，且同一文件夹会重复列出会话。
  链接: NousResearch/hermes-agent PR #75459

**积压提示**：49 条待合并 PR 中已包含多条跨越 3–6 周、修复症状明确且用户可感知的补丁（#75459、#78859、#95409）。在每日新增 50 条 Issue/PR 更新的节奏下，评审带宽已成为项目健康度的主要约束，建议对上述长龄 PR 做一次集中分诊。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-09-12）

## 1. 今日速览

过去24小时，PicoClaw 共更新 4 条 Issue 和 2 条 PR，无新版本发布。其中 2 条 Issue（#3338、#3346）和 1 条 PR（#3340）被关闭，净关闭量大于新增，积压有所缓解。需要注意的是，当日活跃的所有 Issue 和 PR 均带有 `[stale]` 标记，说明当前处理的多为长期滞留条目，而非新增讨论。社区方面没有出现高赞或高评论热帖，整体活跃度偏低，项目处于平稳维护状态。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

**已合并/关闭 PR（1 条）：**

- **[CLOSED] #3340 fix(slack): set FileSize on media upload params** — 作者 iMilnb？不，作者为 octavioturra
  - 链接: sipeed/picoclaw PR #3340
  - 该 PR 修复了 `SendMedia` 在构建 `slack.UploadFileParameters` 时未设置 `FileSize` 的问题，导致 slack-go v0.23.1 在任何网络请求前即拒绝上传（`files.getUploadURLExternal` 流程要求预先提供文件长度）。此修复直接对应并关闭了 Issue #3338，解决了 Slack 媒体上传"文件大小不能为 0"的持续失败问题。

**评估：** 今日推进幅度有限，但完成了一个明确的 Bug 闭环（Issue #3338 → PR #3340），属于稳定性修复而非功能性推进。

## 4. 社区热点

今日各条目互动量均较低，无明显热点：

- **Issue #3366** [OPEN] [Feature] Add support for OpenAI compatible providers — 评论 2，作者 ItachiSan
  - 链接: sipeed/picoclaw Issue #3366
  - 诉求：允许接入自定义 OpenAI 兼容提供商（如自托管路由器 9Router），希望新增名为 "OpenAI Compatible" 的 provider。
- **Issue #3338** [CLOSED] [BUG] Slack does not attach image media content — 评论 4（当日最多）
  - 链接: sipeed/picoclaw Issue #3338
  - 讨论集中在 Slack 上传 SDK 的参数缺失问题，最终由 PR #3340 修复关闭。

**分析：** 讨论分散在 Bug 修复与自定义 provider 扩展两个方向，社区未形成集中议题。

## 5. Bug 与稳定性

按严重程度排列：

1. **[CLOSED] #3338 [BUG] Slack does not attach image media content**
   - 链接: sipeed/picoclaw Issue #3338
   - 严重程度：中高（媒体功能完全不可用）。影响：Slack 媒体上传 100% 失败，报错 `file.upload.v2: file size cannot be 0`。
   - **已有 fix PR 并已合并/关闭**：#3340。

2. **[CLOSED] #3346 [BUG] about RKLLM reply**
   - 链接: sipeed/picoclaw Issue #3346
   - 严重程度：中。影响：ARM 开发板上 RKLLM 模型回复异常（PicoClaw V0.3.1）。摘要未提供结论，已关闭。

3. **[OPEN] #3355 [BUG] 连接飞书报错（config.json contains unknown field(s): channel_list.feishu.app_id）**
   - 链接: sipeed/picoclaw Issue #3355
   - 严重程度：中。影响：飞书渠道配置解析报错（nightly-50-gbbf6893c，go1.25.13）。作者已在标题中附上解决方案，尚未见修复 PR。

## 6. 功能请求与路线图信号

- **Issue #3366 [OPEN] Add support for OpenAI compatible providers**
  - 链接: sipeed/picoclaw Issue #3366
  - 用户希望支持自托管、OpenAI 兼容的路由器（举例 9Router），暗示对本地化/私有部署 + 多后端灵活切换的需求。
  - **判断：** 目前**无对应 PR**，暂无证据表明会被纳入下一版本，仅作为路线图信号记录。

## 7. 用户反馈摘要

- **媒体渠道可靠性是真实痛点**：Slack 图片完全无法上传（#3338），说明多 IM 渠道适配存在 SDK 参数层面的疏漏。
- **本地/边缘部署场景活跃**：用户在 ARM 开发板上运行 RKLLM 模型（#3346），并在飞书渠道遇到配置解析问题（#3355），反映嵌入式与国内 IM 集成的使用场景较普遍。
- **配置兼容性问题**：飞书 `app_id` 字段被判定为未知字段（#3355），用户自行给出解决方案，提示文档或配置 schema 与实际版本存在脱节。
- **界面性能反馈**：PR #3347 作者反馈聊天区大量文本时 Web UI 卡顿，已在桌面与移动端 Brave 浏览器测试修复有效（自称"非……"，摘要被截断）。
  - 链接: sipeed/picoclaw PR #3347

## 8. 待处理积压

当日活跃条目**全部带有 `[stale]` 标记**，积压状况值得关注：

- **[OPEN] [stale] #3366 功能请求：OpenAI 兼容 provider** — 创建于 2026-09-04，已有 2 条评论但无 PR 承接。
  - 链接: sipeed/picoclaw Issue #3366
- **[OPEN] [stale] #3355 飞书连接报错** — 创建于 2026-09-01，用户已提供解决方案，等待维护者响应或修复 PR。
  - 链接: sipeed/picoclaw Issue #3355
- **[OPEN] [stale] PR #3347 fix laggy interface** — 创建于 2026-08-27，已构建测试，仍待审查合并。
  - 链接: sipeed/picoclaw PR #3347

**提醒：** 三项目前均处于 open 且 stale 状态，建议维护者优先处理 #3347（已有测试验证）与 #3355（已附带解决方案），以缩短积压周期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-12

## 1. 今日速览

NanoClaw 今日处于**高强度维护与功能扩张并行**的状态：过去 24 小时共 45 条 Issue/PR 更新，其中 PR 更新高达 40 条（待合并 21、已合并/关闭 19），是当日绝对的活动重心。已关闭的 4 条 Issue 中,3 条为安装/启动类 Bug（#2901、#3765、#3769），且均有对应 fix PR 落地，说明维护团队对安装路径的稳定性响应非常及时。功能侧，`/add-voice` 语音通道与 code-mode 持久化编码会话两条新特性 PR 同期推进，项目正从"聊天式个人 AI 助手"向多模态与长驻编码会话扩展。整体健康度良好：Bug 闭环速度快，但 21 条待合并 PR 的积压值得关注。

---

## 2. 版本发布

今日无新版本发布，无破坏性变更或迁移事项。

---

## 3. 项目进展

今日已合并/关闭的 19 条 PR 集中在**安装流程与凭据/配置可靠性**两大方向，项目向前迈进的幅度主要体现在"首次安装成功率"上：

**安装与启动链路修复（集中攻坚）**
- [#3768](https://github.com/nanocoai/nanoclaw/pull/3768) `fix(setup): start and verify the Linux fallback service` — 修复 Linux 选择 nohup fallback 时主机未启动、向导无法到达首个操作界面的问题。
- [#3769 对应 Issue](https://github.com/nanocoai/nanoclaw/issues/3769) 闭源，#3776 修复：`fix(setup): run downloaded installers with the system shell by absolute path` — 解决因 PATH 解析导致安装器执行失败的问题。[PR #3776](https://github.com/nanocoai/nanoclaw/pull/3776)
- [#3767](https://github.com/nanocoai/nanoclaw/pull/3767) `fix(setup): preserve files when registry copies fail` — 避免 `git show` 重定向截断目标文件或留下空文件。
- [#3773](https://github.com/nanocoai/nanoclaw/pull/3773) `fix(setup): fetch explicit registry tracking refs` — 支持单分支克隆场景下的 registry skill 安装。
- [#3758](https://github.com/nanocoai/nanoclaw/pull/3758) `fix(setup): skip portal reminders the operator already answered` — 消除 setup 中重复提问。
- [#3779](https://github.com/nanocoai/nanoclaw/pull/3779)（仍 OPEN）`fix(setup): verify restarted host identity and readiness` — 继续加固重启流程。

**配置与数据层可 **
- [#3770](https://github.com/nanocoai/nanoclaw/pull/3770) `fix(webhook): honor WEBHOOK_PORT from .env` — 修复 `.env` 中配置被静默忽略。
- [#3766](https://github.com/nanocoai/nanoclaw/pull/3766) `fix(db): recheck migrations under SQLite write lock` — 防止 host 与 CLI-agent 初始化器并发应用同一迁移。
- [#3774](https://github.com/nanocoai/nanoclaw/pull/3774) `fix: persist OneCLI gateway files across restarts` — 解决临时 CA 文件被 Docker 重建为 root 属主目录的问题。
- [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) `fix(add-opencode): drop the pre-cli-tools Dockerfile guard on refresh and remove` — 修复旧版 `/add-opencode` 残留的过期测试断言。
- [#3782](https://github.com/nanocoai/nanoclaw/pull/3782) `gateway providers: pass the session's container name in the provider input` — `GatewayProviderInput` 新增必填 `containerName` 字段。

**功能推进（OPEN，尚未合并）**
- [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) `/add-voice` 全双工浏览器语音会话。
- [#3772](https://github.com/nanocoai/nanoclaw/pull/3772) 语音适配器 payload（基于 OpenAI GPT-Live-1 浏览器通话）。
- [#3783](https://github.com/nanocoai/nanoclaw/pull/3783) code-mode 持久化编码会话（agent 容器内 tmux 下运行 Claude Code，含 sandbox verbs、边界审批）。
- [#3784](https://github.com/nanocoai/nanoclaw/pull/3784) community-portal 增加可选远程终端与编码会话聊天面。

---

## 4. 社区热点

今日讨论热度整体偏低，绝大多数 PR 的评论数为 `undefined`（未采集到 / 无评论），👍 均为 0。可见记录中唯一持续活跃的技术讨论是：

- [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) **[OPEN]** `Rate-limited turns flood the channel with duplicate error notices — no backoff/dedup on deliverErrorResult`
  作者 DawoudIO，创建于 2026-08-27，更新于 2026-09-11，评论 1。该 Issue 已跨两周半仍未关闭。诉求核心：`container/agent-runner/src/poll-loop.ts` 中 `deliverErrorResult` 缺少退避、冷却与去重，每次重试命中同一限流都会向用户频道重复推送错误提示，直接造成频道刷屏。这是典型的"用户可感知的体验劣化"，且已有明确代码定位，建议优先给出设计结论。

其余 4 条 Issue（#3762、#2901、#3765、#3769）在今日均已 CLOSED，讨论随之结束。

---

## 5. Bug 与稳定性

按严重程度排列（均基于今日数据）：

| 严重度 | Issue | 状态 | 是否已有 fix PR |
|---|---|---|---|
| **中** | [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) 限流回合重复推送错误通知，无退避/去重 | OPEN，已挂起 16 天 | ❌ 未在今日 PR 列表中见到对应修复 |
| **中** | [#3765](https://github.com/nanocoai/nanoclaw/issues/3765) 并发 SQLite 迁移在全新安装时失败 | CLOSED | ✅ [#3766](https://github.com/nanocoai/nanoclaw/pull/3766) 写锁下重检迁移 |
| **中** | [#3769](https://github.com/nanocoai/nanoclaw/issues/3769) 全新 uvx bootstrap 因 `~/.local/bin` 不在 PATH 而报 `pnpm not found` | CLOSED | ✅ [#3776](https://github.com/nanocoai/nanoclaw/pull/3776) 绝对路径调用系统 shell |
| **低** | [#2901](https://github.com/nanocoai/nanoclaw/issues/2901) `.env` 中 `WEBHOOK_PORT` 被静默忽略 | CLOSED（历时 73 天） | ✅ [#3770](https://github.com/nanocoai/nanoclaw/pull/3770) |
| **低** | [#3762](https://github.com/nanocoai/nanoclaw/issues/3762) `add-opencode` 卸载/升级时残留 pre-8772ec97 Dockerfile guard 测试 | CLOSED | ✅ [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) |

**观察**：今日无崩溃级（critical）问题，3 条安装类 Bug 在 1 天内完成 报告→修复 闭环，响应速度优秀。唯一未闭环的 #3576 属体验类缺陷，非阻断性，但持续时间最长，应提醒维护者。

---

## 6. 功能请求与路线图信号

今日无用户新提的功能请求类 Issue，路线图信号主要来自核心团队自推的 PR：

- **语音通道（多模态输入）**：[#3764](https://github.com/nanocoai/nanoclaw/pull/3764) + [#3772](https://github.com/nanocoai/nanoclaw/pull/3772) 成对出现，`/add-voice` 提供浏览器全双工通话，GPT-Live-1 负责听说，需要记忆/工具/动作的部分委派给 agent session 后再以语音回复。两者均由 core-team 提交、带有 `follows-guidelines` 标签，且 #3772 明确说明是为 #3764 提供可复制的适配器——**很可能是下一版本的重点特性**。
- **code-mode 持久化编码会话**：[#3783](https://github.com/nanocoai/nanoclaw/pull/3783) 覆盖面极广（agent-runner、channels、configuration、containers、core、ncl-cli、security、sessions、setup-installation），引入 sandbox verbs 与边界审批机制，属于架构级改动。
- **community-portal 远程终端**：[#3784](https://github.com/nanocoai/nanoclaw/pull/3784) 为 code mode 提供 loopback 上进程内 SSH 服务的远程终端与聊天面，是 #3783 的配套交互层。

**判断**：语音与 code-mode 是两条清晰的新增能力主线，但均处 OPEN 且互有依赖（#3772→#3764；#3784→#3783），需关注依赖链的合并顺序。

---

## 7. 用户反馈摘要

今日采集到的评论内容有限（#3762、#3576 各 1 条评论，其余为 0），可提炼的真实反馈如下：

**不满意 / 痛点**
- **配置直觉被违背**（[#2901](https://github.com/nanocoai/nanoclaw/issues/2901)，allixsenos）：用户按文档把 `WEBHOOK_PORT` 写进 `.env` 却完全无效，且**没有任何报错**。根因是 `src/config.ts` 的 `.env` 加载顺序问题。这类"静默失败"最伤用户信任，且该 Issue 从 7 月 1 日拖到 9 月 12 日才关闭。
- **安装路径脆弱**（[#3765](https://github.com/nanocoai/nanoclaw/issues/3765)、[#3769](https://github.com/nanocoai/nanoclaw/issues/3769)，均来自 glifocat，macOS/全新 VM 环境）：全新安装在 `scripts/init-cli-agent.ts` 因并发迁移失败；uvx bootstrap 因 PATH 缺 `~/.local/bin` 直接退出。反映**新用户首次安装是当前最脆弱环节**——两位报告者都在真实的全新环境中复现（2026-09-11，fresh VM / macOS）。
- **频道被刷屏**（[#3576](https://github.com/nanocoai/nanoclaw/issues/3576)，DawoudIO）：限流时重复错误通知污染用户频道，属于日常使用中的高频骚扰。

**使用场景**
- 安装/升级/卸载类操作（`/add-opencode` 的 remove 与 upgrade 路径）。
- 限流环境下的长会话运行。
- 浏览器端语音交互（来自新 PR 的设计目标而非用户反馈）。

**无明确满意类反馈**：今日数据中未见正面评价或致谢类评论。

---

## 8. 待处理积压

**需优先关注**
- [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) **[OPEN]** — 创建于 2026-08-27，已 16 天未闭环，是今日唯一仍开放的 Issue，且问题描述清晰、定位到具体文件（`poll-loop.ts`），却暂无对应 fix PR。建议维护者尽快给出退避/去重方案。

**待合并 PR 积压**
- 今日待合并 PR 达 **21 条**，占当日 PR 更新量的 52.5%，比例偏高。其中包含 4 条彼此依赖的架构级新特性（[#3764](https://github.com/nanocoai/nanoclaw/pull/3764)、[#3772](https://github.com/nanocoai/nanoclaw/pull/3772)、[#3783](https://github.com/nanocoai/nanoclaw/pull/3783)、[#3784](https://github.com/nanocoai/nanoclaw/pull/3784)）以及一条 `PR: Fix` 类的 [#3779](https://github.com/nanocoai/nanoclaw/pull/3779)（`fix(setup): verify restarted host identity and readiness`）。#3779 属安装可靠性修复，建议优先合入以避免同类问题再次成为新用户的阻塞点。

**长期未响应**
- [#2901](https://github.com/nanocoai/nanoclaw/issues/2901) 虽已于今日关闭，但从 2026-07-01 到 2026-09-12 历时 73 天、零评论，反映出**配置类静默失败问题长期未被分诊**。建议维护者复核是否还有其他类似的"`.env` 写了但被忽略"的配置项，属于同一类系统性风险。

---

*数据来源：NanoClaw GitHub 仓库（github.com/qwibitai/nanoclaw）2026-09-11 至 2026-09-12 的 Issues 与 Pull Requests 更新记录。本报告仅基于所提供数据，评论数缺失处以数据原样标注。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-09-12）

## 1. 今日速览

过去 24 小时 NullClaw 仓库仅记录 1 条 PR 状态变更（#996 由 OPEN 转为 CLOSED，已合并/关闭），无新版本发布、无 Issue 新开/活跃/关闭。整体活跃度偏低：社区提问与讨论为零，工程侧只有一条收尾的修复型 PR 落地。项目今日的实质性推进集中在 MCP 传输层稳定性，而非新功能或路线图层面。从健康度看，维护节奏正常但吞吐有限，无紧急风险信号。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日唯一且重要的进展为 PR #996 关闭合并：

- **PR #996 [CLOSED] fix(mcp): bound stdio response waits**
  链接: nullclaw/nullclaw PR #996
  作者: be-student | 创建: 2026-09-06 | 更新: 2026-09-12
  摘要: Fixes #991。为 stdio MCP 响应读取应用 `timeout_ms`；请求超时时终止服务器进程组；初始化失败时同样清理已派生的子进程。验证方式包括 `zig build test --summary all`（数据中摘要被截断，未能确认完整测试数）。

**推进评估**：该 PR 直接修复了 stdio 模式下 MCP 响应等待无上界的问题，属资源泄漏/挂起类缺陷的根治性修补，涉及超时控制与子进程生命周期管理两条关键路径。虽不涉及破坏性接口变更，但对长时间运行、依赖本地 MCP 子进程的个人 AI 助手场景稳定性有实质提升。项目今日向前迈进幅度为"单点加固"，未触及新功能面。

## 4. 社区热点

今日 Issues 更新为 0，PR 评论数在数据中标记为 `undefined`、点赞数 0，无任何讨论热度集中的条目。因此无社区热点可供分析。从数据侧面看，用户参与度处于静默期，PR #996 从创建到关闭历时 6 天但未产生公开评论，建议维护者关注评审过程是否缺少外部可见的讨论记录。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题（Issues 新开/活跃为 0）。唯一相关信号是 PR #996 关闭所修复的既有缺陷：

- **问题**：stdio MCP 响应读取缺少超时上界，请求超时时未能终止服务器进程组，初始化失败时子进程未清理（由 Fixes #991 关联）。
- **严重程度**：中高——可能导致进程/资源泄漏与请求挂起，影响长期运行的助手进程稳定性。
- **状态**：已有 fix PR 并已于今日关闭合并（nullclaw/nullclaw PR #996），无遗留未修复项。

## 6. 功能请求与路线图信号

今日无用户提交的新功能需求（Issues 为 0）。结合唯一 PR #996 判断，近期工程投入仍集中在 MCP 集成层的健壮性而非新能力扩张，暂无可确认会被纳入下一版本的功能项。需说明：数据中未提供路线图或里程碑信息，任何版本归属判断均缺乏依据。

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼，无法归纳真实用户痛点、使用场景或满意度。唯一的间接线索来自 PR #996 所修复的缺陷：使用 stdio 方式接入 MCP 服务器的用户可能遭遇超时后进程残留或初始化失败未清理的问题——该痛点现已通过 #996 处理。

## 8. 待处理积压

今日数据未列出任何长期未响应的重要 Issue 或 PR，无法识别积压项。需要提醒的是，数据中 Issues 总更新为 0，本身可能意味着社区侧的问题上报通道活跃度低，建议维护者自行核查仓库中是否存在未被本次数据覆盖的长期开放条目。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-09-12）

## 1. 今日速览

- 项目今日整体活跃度**偏低**：过去 24 小时 Issues 更新 0 条，无新开、无活跃、无关闭。
- PR 侧仅有 1 条状态变更（#8076，已关闭/合并），无待合并 PR 积压，无新版本发布。
- 今日唯一实质推进集中在助手模块的共享频道状态识别修复上，属于边界场景的健壮性改进。
- 由于 Issues 侧完全静默、社区互动数据（评论、点赞）缺失或为零，今日无法从社区维度评估用户诉求变化。
- 综合看，项目处于**平稳维护期**，无阻塞性信号，但社区输入端的冷清值得持续观察。

## 2. 版本发布

今日无新版本发布（0 个），无 Releases 记录，本节不适用。

## 3. 项目进展

今日唯一的 PR 动态：

- **#8076 [CLOSED] fix(assistant): distinguish disconnected shared channels**
  作者：be-student ｜ 创建：2026-09-06 ｜ 更新：2026-09-12 ｜ 状态：已合并/关闭
  链接：nearai/ironclaw PR #8076

该 PR 的摘要显示其推进了三件事：

1. 区分「已配对用户的共享频道断开」与「未配对账号」两种状态，避免将二者混为一谈；
2. 针对用户消息和机器人指令分别渲染频道专属的引导文案；
3. 保持拒绝分类（rejection classification）在产品、适配器等层面的一致性。

**推进幅度评估**：这是一次助手模块交互准确性的修复，解决了用户在共享频道断开时可能收到误导性提示的问题，对核心功能无破坏性影响。从创建（09-06）到关闭（09-12）历时 6 天，属于中等节奏的修复合并。整体而言，项目今日向前迈进一小步，方向是错误提示与状态判定的精确化。

## 4. 社区热点

今日无 Issues 记录，PR 仅 1 条且评论数据缺失（显示为 undefined）、点赞数为 0。**无讨论活跃的议题可分析**，无法识别社区热点或背后诉求。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题（Issues 更新 0 条）。

可关联的稳定性相关信息为 PR #8076 所修复的助手模块状态判定问题：其本质是「共享频道断开」被误判为「未配对账号」的分类缺陷。该问题已有对应 fix PR 且已关闭，严重程度推测为中低（影响提示准确性与指令反馈，非数据或崩溃类问题）。由于原 Issue 未在本次数据中呈现，无法进一步确认严重级别与用户影响范围。

## 6. 功能请求与路线图信号

今日无用户提出的新功能需求（Issues 为 0）。

从 PR #8076 的改动方向可观察到一个隐含信号：项目正在强化助手对**频道配对状态**的细分处理（区分已配对/未配对、断开/连接），并为用户消息与机器人指令提供差异化引导。若后续有相关路线图更新，该方向可能延伸至更细粒度的频道状态管理与用户引导体系。但需说明，这仅为从单条修复 PR 推断的方向，**不代表已确认的下一版本计划**。

## 7. 用户反馈摘要

今日 Issues 评论数据为空，PR #8076 的评论数据同样缺失（undefined），**无法提炼真实用户痛点、使用场景或满意度反馈**。

从该 PR 摘要可间接推断一类使用场景：已配对用户在使用共享频道时遭遇连接断开，此前可能收到与「未配对账号」相同的提示，导致困惑；修复后此类用户将获得频道专属的引导说明。此推断基于 PR 描述文本，并非用户直接反馈。

## 8. 待处理积压

今日无长期未响应的 Issue 或 PR 数据可供识别。当前待合并 PR 数为 0，Issues 积压未见新增，暂无需要提醒维护者关注的积压项。

---

**数据边界说明**：本报告仅基于所提供的 IronClaw GitHub 数据（2026-09-12）。Issues 数量为 0、PR 评论数为 undefined、无 Releases，故第 2、4、5、6、7、8 部分多数内容缺乏数据支撑，已如实标注为「无」或「无法评估」，未作任何推断性补充。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-12

## 1. 今日速览

项目今日无新版本发布，活跃度集中在**存量 PR 合并**与**积压 Issue 批量刷新**。过去 24 小时 Issues 更新 6 条（全部为 OPEN，均标记 `stale`）、PR 更新 11 条（9 条待合并、2 条已关闭）。两条被关闭的 PR（#2655、#2656）是今日唯一实质性推进，均由 fisherdaddy 提交，集中于构建瘦身与 openclaw 网关自愈。值得注意的是，今日所有更新的 Issue 与大部分 PR 均为 2026-03-30 创建的历史存量条目（部分已挂 `stale` 标签数月），仅 #2655–#2657 为 09-11 新提交，反映出当日新输入极少、维护重心偏向清理与收口。

## 2. 版本发布

无新版本发布（过去 24 小时 releases 数量为 0）。

## 3. 项目进展

今日已合并/关闭 2 条 PR，均为构建与运行时稳定性方向的收口：

- **[PR #2656] [CLOSED] fix: openclaw gateway startup selfheal**（作者：fisherdaddy，09-11 创建）— 针对 openclaw 网关启动自愈的修复，覆盖 `area: docs, area: main, area: openclaw`。该方向与今日活跃的 Issue #1051 / PR #1052（网关初始化竞态导致 AI 会话无法启动）属于同一稳定性议题域。
  链接：netease-youdao/LobsterAI PR #2656
- **[PR #2655] [CLOSED] chore: optimize package size**（作者：fisherdaddy，09-11 创建）— 包体积优化，覆盖 `area: build, area: docs, area: openclaw, platform: windows, platform: macos`，属跨平台工程侧改进。
  链接：netease-youdao/LobsterAI PR #2655

此外，**[PR #2657] [OPEN] fix: resolve thumbnail rendering and native dependency build issues**（fisherdaddy，09-11）仍在待合并状态，处理缩略图渲染与原生依赖构建问题，涉及面较广（renderer / build / docs / main / openclaw）。
链接：netease-youdao/LobsterAI PR #2657

整体判断：当日项目推进以**工程健壮性与构建效率**为主轴，未涉及新功能落地；9 条待合并 PR 中约 8 条为 3 月创建的历史修复，收口压力仍在。

## 4. 社区热点

今日讨论量整体偏低，所有条目评论数均为 1、👍 数为 0，无明显高热话题。相对集中的议题是**认证/会话稳定性**与**UI 可用性**两条线索：

- **认证并发缺陷双条目联动**：[Issue #1048](netease-youdao/LobsterAI Issue #1048) 与配套 [PR #1049](netease-youdao/LobsterAI PR #1049)（作者均为 MaoQianTu），聚焦 `fetchWithAuth` 并发 401 时双重消费 refreshToken 导致用户被强制登出。Issue 与 PR 同源、同日更新，是今日唯一「问题—修复」闭环配对。
- **openclaw 会话启动竞态**：[Issue #1051](netease-youdao/LobsterAI Issue #1051) 与配套 [PR #1052](netease-youdao/LobsterAI PR #1052)（作者均为 MaoQianTu），指出两处竞态条件导致 AI 会话永久无法启动。同样构成问题—修复配对。

诉求分析：核心用户与贡献者关注点高度集中在**会话/认证的可靠性**——即"用户被动登出""AI 会话无法启动"这类影响可用性的阻断性问题，而非体验优化类需求。

## 5. Bug 与稳定性

按严重程度排列（均在今日更新，均无已合并的修复）：

**高严重度（阻断核心可用性）**

- **[Issue #1048] fix(auth): fetchWithAuth 并发 401 时双重消费 refreshToken，导致用户被强制登出**
  双套独立 token 刷新逻辑并存，`fetchWithAuth` 内联 401 重试绕过 `refreshOnce()` 去重机制，并发场景下重复消费 rolling refreshToken。**已有 fix PR #1049**（OPEN，引入 `sharedRefreshOnce` 共享槽）。
  链接：netease-youdao/LobsterAI Issue #1048 ｜ netease-youdao/LobsterAI PR #1049

- **[Issue #1051] fix(openclaw): 两处竞态条件导致 AI 会话永久无法启动**
  S-07：`ensureGatewayClientReady` 并发初始化失败后等待者静默 `return`，不校验就绪状态，后续调用永久报错不可恢复；S-08：`ensureActiveTurn` 对已停止 session 仍创建 ActiveTurn，导致下次 `startSession` 失败。**已有 fix PR #1052**（OPEN）。
  链接：netease-youdao/LobsterAI Issue #1051 ｜ netease-youdao/LobsterAI PR #1052

**中严重度（功能异常）**

- **[Issue #1053] BUG: Modal 关闭按钮无反应**
  步骤：添加 agent → 选择技能 → modal 变高 → 关闭按钮失效；作者判断"应该是所有 modal 都有这个问题"。**已有 fix PR #1054**（OPEN，定位为 header `.draggable` 拖拽区拦截鼠标事件）。
  链接：netease-youdao/LobsterAI Issue #1053 ｜ netease-youdao/LobsterAI PR #1054

- **[Issue #1062] [bug] 定时任务修改时间后与标题描述不符**
  win10 / v2026.3.26，必现。**暂无对应 fix PR。**
  链接：netease-youdao/LobsterAI Issue #1062

- **[Issue #1061] 网关端口修改**
  用户反馈无法修改网关端口，与 Openclaw 端口冲突。**暂无对应 fix PR。**
  链接：netease-youdao/LobsterAI Issue #1061

**低严重度（体验）**

- **[Issue #1066] bug：心跳对话未过滤**
  系统性日志/对话未过滤，造成用户困惑。**暂无对应 fix PR。**
  链接：netease-youdao/LobsterAI Issue #1066

## 6. 功能请求与路线图信号

今日明确的功能类输入仅一项：

- **[PR #1065] [OPEN] feat(scheduled-task): allow binding task to existing cowork session**（作者：mmengLong）
  为定时任务创建/编辑表单增加 **session 选择器**（自定义可搜索），允许将任务绑定到已有 cowork session，而非每次运行都新建隔离会话。这是路线图中**定时任务 × 会话复用**方向的明确信号。
  链接：netease-youdao/LobsterAI PR #1065

结合已有 PR 判断：若 #1065 在下一版本前完成评审，**定时任务与会话体系打通**可能成为近期功能性版本的主要卖点；而 #1059（Windows 默认浏览器检测修复，让"龙虾"查询浏览器信息时启动 Chrome 而非 Edge，作者 willliang1991）则属平台兼容性修复，非新功能。
链接：netease-youdao/LobsterAI PR #1059

## 7. 用户反馈摘要

- **认证与登录被动中断**（#1048）：并发场景下用户被强制登出，属高频可用性痛点，且已由贡献者自行定位到具体行号并提交修复，说明高级用户对代码结构的参与度较高。
- **AI 会话无法启动**（#1051）：会话永久性失败且无法自恢复，用户侧表现为"卡死不可用"，是同类产品中最伤体验的故障类型。
- **UI 交互失效**（#1053）：Modal 关闭按钮无法点击，且用户观察到"所有 modal 都有这个问题"，属全局性交互缺陷，易引发挫败感。
- **端口冲突无法自助配置**（#1061）：用户提问"怎么才能修改网关端口，和 Openclaw 端口冲突了"，反映**配置能力缺失 + 文档/引导不足**的组合痛点。
- **定时任务标题与实际时间不一致**（#1062）：win10、v2026.3.26、必现，属状态同步类问题，影响用户对调度可靠性的信任。
- **系统日志/心跳对话未过滤**（#1066）：用户明确表达"会给用户造成困惑"，属信息呈现层的噪音问题。

总体情绪：无正面反馈条目；负面反馈集中在**稳定性（登出、会话启动）**与**可控性（端口配置、任务时间显示）**两个方向。满意/不满意数据本次数据源中未提供可归纳的正面信号。

## 8. 待处理积压

以下条目创建于 2026-03-30、更新于 2026-09-12，距今已积压逾五个月且均带 `stale` 标记，建议维护者优先分诊：

**无 fix PR 承接的 Issue（风险最高）**

- **[Issue #1061] 网关端口修改** — 用户无法修改网关端口，与 Openclaw 冲突；无 PR 承接，且涉及配置能力，长期搁置可能持续产生重复提问。链接：netease-youdao/LobsterAI Issue #1061
- **[Issue #1062] 定时任务修改时间后与标题描述不符** — 必现缺陷，无 PR 承接。链接：netease-youdao/LobsterAI Issue #1062
- **[Issue #1066] 心跳对话未过滤** — 无 PR 承接。链接：netease-youdao/LobsterAI Issue #1066

**有 fix PR 但长期未合入（需评审推动）**

- **PR #1049**（auth 并发登出修复）、**PR #1052**（openclaw 竞态修复）、**PR #1054**（modal 点击修复）、**PR #1056**（清理生产代码 debug console.log）、**PR #1057**（过滤 LLM judge 响应中的 thinking blocks）、**PR #1058**（定时任务 JSONL 写入失败防数据丢失）、**PR #1059**（Windows 默认浏览器检测）— 均为 2026-03-30 创建、09-12 更新，全部处于 OPEN 且带 `stale` 标记。
  链接：netease-youdao/LobsterAI PR #1049 ｜ #1052 ｜ #1054 ｜ #1056 ｜ #1057 ｜ #1058 ｜ #1059

**当日判定**：9 条待合并 PR 中至少 7 条为历史积压且已挂 stale，其中多条直接对应高严重度 Bug 修复。**积压积压已成为当前项目健康度的主要风险点**——修复代码已就位，瓶颈在评审与合入环节。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-12

## 1. 今日速览

今日 Moltis 项目共记录 4 条 Issues/PRs 更新，节奏平稳但指向集中：一个 Telegram 共享频道下工具失效的 Bug（#1264）当日即获得修复 PR（#1265），响应速度良好。另有一项长期悬置的 TLS 协议修复 PR（#1261）被关闭，以及一条运行近两个半月的 OpenAI 兼容 provider 扩展 PR（#1143）出现新活动。今日无新版本发布，活跃度评估为**中等偏低**（1 条新 Issue、3 条 PR 动态），但核心问题闭环效率较高。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**已关闭 PR：**

- **[#1261] fix(tls): restrict ALPN to HTTP/1.1**（作者：be-student，2026-09-06 创建，2026-09-12 关闭）
  - 链接：moltis-org/moltis PR #1261
  - 内容：在支持 RFC 8441 WebSocket 升级前，TLS 层仅通告 HTTP/1.1；在既有 TLS 配置测试中固定 ALPN 列表；并在贡献者指南中记录该协议约束。Fixes #245。
  - 意义：解决了一个可追溯至 Issue #245 的协议层问题，提升 TLS 行为的一致性与可测试性。

进展评估：今日项目在**稳定性修复方向有实质推进**，Telegram 工具策略问题在报告当日即有对应 PR 提交，闭环路径清晰；TLS 修复关闭后消除了一个长期存在的协议约束隐患。

## 4. 社区热点

今日所有 Issues/PRs 的评论数与 👍 数均为 0 或未提供，**无显著讨论热点**。相对而言，以下两条因存在关联关系而值得关注：

- **Issue #1264**（Telegram 工具失效）与 **PR #1265**（修复该问题）——一条 Issue 在创建当日即触发修复 PR，是今日最主要的事件线。
  - Issue：moltis-org/moltis Issue #1264
  - PR：moltis-org/moltis PR #1265

诉求分析：从 PR #1265 的摘要可推断，用户诉求是**在 Telegram 共享频道中获得与 Slack 对等的工具策略配置能力**，而非简单要求“工具可用”。这属于配置一致性问题，而非单纯功能缺陷。

## 5. Bug 与稳定性

**🔴 高优先级（当日已有 fix PR）**

- **[#1264] [Bug]: Tools stop working in shared Telegram channels**
  - 作者：stratus-ss | 创建/更新：2026-09-12 | 评论：0 | 👍：0
  - 链接：moltis-org/moltis Issue #1264
  - 摘要显示作者已确认搜索过既有 bug 列表、使用最新版本（preflight checklist 中“如发生此情况”一项未勾选）。
  - **已有 fix PR：#1265**，摘要明确写明 “Fixes #1264”。

**根因（依据 PR #1265 摘要）**：Telegram 继承了网关的 deny-all 工具上限，但未暴露 Slack 已支持的相应设置。修复方式为将 `untrusted_audience` 与 `untrusted_tools` 通过 Telegram 配置、运行时访问与存储层打通。

今日无崩溃或回归类问题报告。

## 6. 功能请求与路线图信号

今日无明确以“功能请求”形式提交的 Issue。以下 PR 可视为能力扩展信号：

- **[#1143] Add Requesty as an OpenAI-compatible provider**（OPEN，作者：Thibaultjaigu，2026-07-02 创建，2026-09-12 更新）
  - 链接：moltis-org/moltis PR #1143
  - 内容：以表驱动方式将 Requesty（https://requesty.ai，OpenAI 兼容 LLM 路由器，Base URL `https://router.requesty.ai/v1`）接入为 provider，尽可能对齐既有 `openrouter` 的接线方式。
  - 纳入判断（基于现有数据）：该 PR 自 7 月初创建、9 月 12 日仍有更新，说明维护者尚未合并但仍在跟进。其“镜像 openrouter 接线”的低侵入设计使其**具备被纳入后续版本的可能性**，但今日无合并动作，无法确认具体版本归属。

## 7. 用户反馈摘要

今日 Issues 评论数为 0，**无评论内容可供提炼**。仅可从 Issue #1264 的提交信息推断一条用户场景：

- 使用场景：用户在**共享的 Telegram 频道**中依赖 Moltis 的工具能力。
- 痛点：工具在该场景下停止工作；结合 PR #1265 摘要，根因为策略设置未暴露，用户既无法知晓也无法自行调整。
- 该用户已在提交前主动检索既有 Issue 并确认使用最新版本，反馈质量较高。

## 8. 待处理积压

**⚠️ 长期未合并 PR**

- **[#1143] Add Requesty as an OpenAI-compatible provider**
  - 创建于 **2026-07-02**，至 2026-09-12 已悬置约 **72 天**，今日虽有更新但状态仍为 OPEN。
  - 链接：moltis-org/moltis PR #1143
  - 提醒理由：这是一条完整度较高、设计上刻意复用既有 `openrouter` 模式的功能性 PR。长时间未合并可能影响外部贡献者的参与意愿；若存在设计分歧或维护者带宽问题，建议给出明确状态说明。

**待合并 PR 一览**

- #1143（OPEN，见上）
- #1265（OPEN，当日新建，暂无积压风险）

---

*说明：本日报严格基于所提供数据生成；评论数、👍 数及部分字段在源数据中为 0 或未提供，相关部分未作推断。Issue #1264 摘要中 preflight checklist 第三项未勾选，其完整内容因摘要截断无法确认。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-09-12）

## 1. 今日速览

过去 24 小时 CoPaw 保持高活跃度：19 条 Issue 更新（新开/活跃 15、关闭 4）、9 条 PR 更新（待合并 8、合并/关闭 1），无新版本发布。今日新增问题集中在 2.2.x 稳定性（MCP 连接、内存耗尽、会话丢失、工作区文件浏览卡死），同时社区提交了对应的修复 PR，形成当日闭环响应。功能侧出现较集中的"成本/模型可配置"诉求（独立记忆写入模型、子智能体按任务选模型、DeepSeek 能力元数据）。待合并 PR 累积至 8 条，其中多条为首次贡献者提交，维护者审阅带宽是当前主要瓶颈。整体看，项目版本节奏平稳（v2.2.1 Stable 刚于昨日进入安装验证），但 2.2.x 的回归类问题密度值得关注。

## 2. 版本发布

今日无新版本发布，无 Release 记录。相关背景：v2.2.1 (Stable) 的安装验证 Issue #7692 已于 2026-09-11 关闭（https://github.com/agentscope-ai/QwenPaw/issues/7692），但当日仍有用户在 2.2.1 桌面端报告新问题（见第 5 节）。

## 3. 项目进展

今日仅 1 条 PR 合并/关闭：

- **#7590 [CLOSED] fix(telegram): render Markdown tables as `<pre>` instead of raw pipes**（作者 Bruce-Yii，标记 first-time-contributor / Under Review，2026-09-11 更新，修复 #7585）
  https://github.com/agentscope-ai/QwenPaw/pull/7590
  解决了 `markdown_to_telegram_html()` 缺少 GFM 表格处理、导致 `|`、`---` 被 HTML 转义后原样发送、在 Telegram 上呈现为不可读字符的问题。这是 Telegram 渠道输出体验的一系列修复之一（同主题还有待合并的 #7718、#7713）。

整体推进幅度有限：当日 8 条 PR 仍处于待合并状态，实际落地的代码变更较少，项目今日以"问题发现 + 修复提交"为主，尚未进入合入阶段。

## 4. 社区热点

讨论最活跃的条目（按评论数排序）：

- **#7567 [OPEN] [bug] 任务停止后仍实际执行**（评论 6）
  https://github.com/agentscope-ai/QwenPaw/issues/7567
  用户点击停止后 UI 显示已停止（执行中方框恢复为 ↑），但刷新页面发现任务仍在执行错误指令，且再次输入触发 409 报错。涉及停止语义与前后端状态一致性，属于信任度敏感问题，评论最多但尚无对应 fix PR。
- **#7708 [OPEN] [bug] 设置好的大模型丢失**（评论 3，2026-09-12 仍在更新）
  https://github.com/agentscope-ai/QwenPaw/issues/7708
  与 #7724（会话丢失）疑似同源，用户报告正常使用中突然报"未设置大模型"、需退出重选，多次复现。
- **#7715 [OPEN] Daily Paper 在 arxiv.org 不可达时静默失败**（评论 3）
  https://github.com/agentscope-ai/QwenPaw/issues/7715
  错误信息为误导性的 "completed with no returned content"，且缺少代理/自定义端点配置。
- **#7676 [CLOSED] `subagent_model` 无效果，子智能体总是继承父级 `active_model`**（评论 3）
  https://github.com/agentscope-ai/QwenPaw/issues/7676
  已在 2.2.1-beta.1 / beta.2 复现并关闭；关联 PR #7680 提交了诊断日志改进。
- **#4901 [OPEN] spawn_subagent 支持按任务选择模型**（评论 3，2026-06-02 创建）
  https://github.com/agentscope-ai/QwenPaw/issues/4901
  长期开放的多模型协作需求，与 #7676、#7664 共同构成"模型成本可控"这一诉求主线。

背后诉求可归纳为三类：**执行状态可信**（停止是否真的停止）、**配置持久可靠**（模型/会话不丢失）、**多模型成本治理**（记忆写入、子智能体使用廉价模型）。

## 5. Bug 与稳定性

按严重程度排列：

**严重（服务级不可用 / 数据丢失）**

- **#7721 [OPEN] 工作区文件浏览导致整个服务器冻结**
  https://github.com/agentscope-ai/QwenPaw/issues/7721
  2.2.1 Docker 环境；`/api/workspace/watch` SSE 使用 `watchfiles.awatch`，其 RustNotify 在事件循环内做同步递归基线扫描，工作区含大型仓库时 WebUI 及各渠道全部无响应。
  **已有 fix PR：#7725**（替换为线程化轮询，作者 xiaoka76）https://github.com/agentscope-ai/QwenPaw/pull/7725
- **#7722 [OPEN] 内存耗尽三条路径叠加**
  https://github.com/agentscope-ai/QwenPaw/issues/7722
  v2.2.0 官方镜像；无界流缓冲、keep-alive 实例堆叠、doom-loop 门控绕过，容器内存约 1MB/s 增长直至挂起/OOM。报告者称附带受控复现与最小修复，**暂无对应 PR**。
- **#7567 [OPEN] 停止按钮失效，任务继续执行**
  https://github.com/agentscope-ai/QwenPaw/issues/7567
  2.2 web 版；停止后后端仍执行原指令，**暂无 fix PR**。
- **#7724 [OPEN] / #7708 [OPEN] 会话与模型配置丢失**
  https://github.com/agentscope-ai/QwenPaw/issues/7724 、 https://github.com/agentscope-ai/QwenPaw/issues/7708
  2.2.1 desktop (win10)；会话在控制-会话列表中完全消失，同时丢失大模型配置。#7708 报告多次复现，**暂无 fix PR**。
- **#7698 [CLOSED] [invalid] 会话索引与磁盘 session 文件不同步（幽灵会话）**
  https://github.com/agentscope-ai/QwenPaw/issues/7698
  侧栏存在 9/10 会话条目，点击加载出 9/9 内容且仅剩一轮，磁盘无对应 session 文件。被标记 invalid 关闭，但与 #7724 现象相近，建议合并排查。

**高（功能回归）**

- **#7716 [OPEN] 升级 2.2.x 后 MCP 无法连接与注册**
  https://github.com/agentscope-ai/QwenPaw/issues/7716
  2.1 可用、2.2.0 / 2.2.1 失效，属明确版本回归。
- **#7728 [OPEN] `server/discover` 返回 HTTP 500 + 非标准 `jsonRpcError` 信封未被识别为 legacy 协议证据**
  https://github.com/agentscope-ai/QwenPaw/issues/7728
  2.2.0 macOS arm64，指向 Java/Kotlin MCP SDK 服务端时 Driver 构建失败。
  **已有 fix PR：#7729** https://github.com/agentscope-ai/QwenPaw/pull/7729
- **#7727 [OPEN] 越界写入硬阻断对 kimi-code 的 Write 工具失效**
  https://github.com/agentscope-ai/QwenPaw/issues/7727
  `_paths` 提取不识别 kimi toolCall 的路径字段，实测可写入工作区外 `/tmp/kimi_oob_probe.txt`。涉及安全边界，**暂无 fix PR**。
- **#7726 [OPEN] ACP `trusted: true` 静默回退到交互式提示**
  https://github.com/agentscope-ai/QwenPaw/issues/7726
  `_pick_allow_option` 仅匹配 `allow_*` 形式的 optionId（源码位置 `src/qwenpaw/acp/client.py:32-38, 113-130`），2026-09-05 的 main 分支仍存在。
- **#7720 [OPEN] Creator 插件无法从场景图进入分镜生成**
  https://github.com/agentscope-ai/QwenPaw/issues/7720
  Console 2.2.1b1 + Creator 1.2.0，提示同步阻塞被 GATED 隐藏且缺少手动图像确认入口。

**中**

- **#7715 [OPEN] Daily Paper 静默失败**（见第 4 节），无 fix PR。
- **#7723 [OPEN] console `stream_one` 失败时静默结束 SSE 流**，客户端无法区分失败与完成；**已有 fix PR：#7723**（first-time-contributor）https://github.com/agentscope-ai/QwenPaw/pull/7723

小结：今日 10 条 Bug 中 3 条已在当日获得 fix PR（#7721→#7725、#7728→#7729、#7723→#7723），响应速度良好；但服务冻结、内存耗尽、停止失效、会话/模型丢失这四类高风险问题中，仅服务冻结一项有明确修复，其余仍待处理。

## 6. 功能请求与路线图信号

- **记忆写入独立模型**：#7664 [CLOSED] 请求在 `MemoryConfig` 中增加 `memory_model`，避免总结/dream 消耗旗舰模型 Token
  https://github.com/agentscope-ai/QwenPaw/issues/7664
  **已有对应 PR #7719（feat(memory): allow a separate model for ReMeLight memory writing）**
  https://github.com/agentscope-ai/QwenPaw/pull/7719
  Issue 已关闭且 PR 待合并，**纳入下一版本的可能性较高**。
- **子智能体按任务选模型**：#4901（2026-06-02 起开放）
  https://github.com/agentscope-ai/QwenPaw/issues/4901
  与 #7676 的关闭、#7680 的诊断改进（https://github.com/agentscope-ai/QwenPaw/pull/7680）形成递进，属长期方向但尚无直接实现 PR。
- **DeepSeek 原生能力元数据、prompt 前缀稳定性、KV-cache 可观测性**：#7717
  https://github.com/agentscope-ai/QwenPaw/issues/7717
  参考 DeepSeek 官方 harness 设计，属 provider 层增强提案，尚在讨论阶段。
- **自定义默认 Loop 模式**：#7714
  https://github.com/agentscope-ai/QwenPaw/issues/7714
  建议内置"默认"改名为"标准"，并允许将任意模板设为新会话默认；高频使用"目标/任务"模式的用户每次需手动切换。
- **新增 web_search 提供商 Serply**：#7711
  https://github.com/agentscope-ai/QwenPaw/issues/7711
  **已有对应 PR #7712（feat(tools): add Serply as a web_search provider，first-time-contributor）**
  https://github.com/agentscope-ai/QwenPaw/pull/7712
  严格 opt-in / BYOK，对现有用户无行为变更，合入阻力较小。

## 7. 用户反馈摘要

- **成本敏感**：多位用户指出后台记忆写入复用主 LLM 会"造成不必要的经济损失"（#7664）；子智能体简单任务（grep、文件读取）也应使用廉价模型（#4901，明确提到受 Claude Code Haiku/Opus 分工启发）。
- **配置与状态不可信是最大不满**：用户反复遭遇"明明设置了模型却报未设置"（#7708）、"会话在列表里彻底找不到"（#7724），且都是"正常使用，没有什么特殊流程"下的偶发问题，说明非边缘路径。#7567 的停止按钮失效进一步削弱对执行状态的信任。
- **错误信息质量**：用户抱怨 Daily Paper 的 "completed with no returned content" 掩盖真实原因（arxiv.org 不可达），且无代理/端点配置入口（#7715）；#7723 亦指客户端无法区分失败与完成的 SSE 流。
- **国内办公渠道体验**：崩溃时 Feishu 等渠道一并不可用（#7721），反映多渠道部署下的单点风险。
- **桌面端稳定性**：多条反馈集中在 Windows 10 + 2.2.1 desktop（#7708、#7724），伴随"重新部署插件""shutdown"等异常过程描述。

## 8. 待处理积压

- **#4901 [OPEN] spawn_subagent 支持按任务模型选择**：2026-06-02 创建，已开放逾 3 个月，评论 3，👍 0
  https://github.com/agentscope-ai/QwenPaw/issues/4901
  与今日关闭的 #7676 直接相关，建议明确是否纳入近期路线图。
- **#7714 [OPEN] 自定义默认 Loop 模式**：2026-09-11 创建，评论 1，等待维护者定性
  https://github.com/agentscope-ai/QwenPaw/issues/7714
- **#7717 [OPEN] DeepSeek 能力元数据与 KV-cache 可观测性**：2026-09-11 创建，评论 1
  https://github.com/agentscope-ai/QwenPaw/issues/7717
- **#7711 / #7712 Serply web_search 提供商**：Issue 与首个贡献者 PR 同日提交，暂无审阅反馈
  https://github.com/agentscope-ai/QwenPaw/issues/7711 、 https://github.com/agentscope-ai/QwenPaw/pull/7712
- **PR 待合并队列达 8 条**，其中 4 条标记 `first-time-contributor`（#7723、#7718、#7680、#7712）。#7590 从 2026-09-06 创建至 09-11 才关闭，审阅周期约 5 天，建议关注首次贡献者的响应时效以降低流失风险。
  https://github.com/agentscope-ai/QwenPaw/pull/7723 、 https://github.com/agentscope-ai/QwenPaw/pull/7718 、 https://github.com/agentscope-ai/QwenPaw/pull/7680 、 https://github.com/agentscope-ai/QwenPaw/pull/7712 、 https://github.com/agentscope-ai/QwenPaw/pull/7590
- **#7567 停止失效**：2026-09-04 创建、09-11 更新，6 条评论为当日最高，但无 fix PR，属高关注度未闭环项。
  https://github.com/agentscope-ai/QwenPaw/issues/7567

---

**数据说明**：本日报仅基于提供的 GitHub 数据生成，链接均取自所给条目。数据中出现的 QwenPaw / CoPaw 名称与链接 `agentscope-ai/QwenPaw` 保持原样，未做推断性改写。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-12

> 数据窗口：过去 24 小时 | 来源：github.com/zeroclaw-labs/zeroclaw

## 1. 今日速览

项目今日处于**高强度活跃状态**：24 条 Issue 更新（20 条新开/活跃，4 条关闭）、50 条 PR 更新（49 条待合并，仅 1 条合并/关闭），无新版本发布。Issue 侧呈现明显的"高质量缺陷集中披露"特征——单日新增多条 p1 级 runtime/provider 缺陷，且全部由少数深度用户在同一天提交。PR 侧则呈现代码审查瓶颈：待合并 PR 累积至 49 条，多标记 `needs-author-action` 或 `needs-maintainer-review`，说明合入速度显著落后于提交速度。整体健康度判断：**开发士气高、维护吞吐承压**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无重要 PR 合并（50 条 PR 更新中仅 1 条合并/关闭）。Issue 侧关闭 4 条：

- **#10690 [CLOSED]** Integrations 页面 "Configure" 链接错误地 slugify 显示名而非使用 family key（Z.AI → `/config/providers.models/z-ai`，导致 `path_not_found`）。v0.8.5 Web 仪表板缺陷已关闭。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10690
- **#10609 [CLOSED]** `zerocode` 忽略启动目录、强制使用 agent workspace 作为 cwd（S1 工作流阻塞）已关闭。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10609
- **#9047 [CLOSED]** 澄清 Code 会话历史与持久记忆隔离（zerocode 文档/行为说明）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9047
- **#10786 [CLOSED]** Anthropic provider 丢弃前一轮 thinking blocks、在每轮边界重写缓存历史。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10786

整体推进评估：今日净进展有限，能量主要集中在**发现与登记**而非**合入与交付**。

## 4. 社区热点

- **#8692 [OPEN] [Tracker]: Maintainer decision queue for RFCs and design issues**（评论 15，最高）
  维护者决策队列追踪器，用于 RFC、设计议题、发布策略问题的分级排队。15 条评论说明维护者侧存在大量待决事项，是当前 PR 积压的结构性原因之一。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **#10734 [OPEN] [p1] RpcDispatcher::process_line 逼近 2 MB 栈保护线（由 Advisory Windows nextest 暴露）**（评论 6）
  Windows 上真实栈溢出（`0xc00000fd`），S2 降级行为，已有 `status:in-progress`。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10734
- **#8289 [OPEN] [Tracker]: OIDC milestone — canonical principals and inbound authentication**（评论 3，risk:high）
  协调 #7141 的分阶段实现，隶属身份与访问里程碑。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8289
- **PR #10622**（Slack 可选接受 bot 与 workflow 消息，risk:high, size:M）与 **PR #10499**（持久化配置写入校验，size:L）为当前评论/更新较集中、且均卡在 `needs-author-action` 的待审 PR。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10622
  https://github.com/zeroclaw-labs/zeroclaw/pull/10499

**诉求分析**：热点集中在"治理与稳定性"两条主线——维护者需要决策吞吐机制（#8692），而用户在高负载场景（多 ACP 会话、约 200k token 上下文）下遭遇连锁失效。

## 5. Bug 与稳定性

按严重程度排列：

**S0 — 数据丢失**
- **#10797（新，2026-09-12，0 评论）** markdown memory backend 在 `store()` 调用重叠时静默丢失条目：`MarkdownMemory::store` 基于早先读取的快照重写整个文件，路径上无序列化保护。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10797
  *尚无 fix PR。*

**S1 / p1 — 工作流阻塞与高危回归**
- **#10734** RpcDispatcher 栈溢出（Windows），`status:in-progress`，无对应 fix PR 记录。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10734
- **#10788** 失败的 Code/ACP 回合丢弃已接受的 prompt 与已完成的工具交换，durable history 无任何写入（provider 失败、非取消场景），risk:high。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10788
- **#10778** 多模态图像上限驱逐会重写更早历史消息，使该点之后的缓存前缀失效（#10701 的后续），risk:high，`needs-maintainer-review`。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10778
- **#10785** `zerocode` 通知延迟取消所有进行中的回合（`begin_notification_resync` → `session/cancel`）：实例内 3 个约 200k token 的 ACP 会话加 1 个 fable 会话同时流式输出，11:45:45Z 两个运行中的回合在 1 ms 内先后被取消。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10785
- **#10782** channel 回复意图预检丢弃 LLM usage，分类器成本/配额从不记录。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10782

**S2 — 降级行为**
- **#10787** 单候选流恢复忽略 `provider_retries`；Anthropic overload（529）仅获一次即时重试、无退避。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10787
- **#10736** 输出前流失败跳过了已声明的非流式回退（`status:in-progress`，risk:high）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10736
- **#10780** 缺少主动的 token 预算上下文压缩（`context_compression` 已移除，`keep_recent`/`collapse_tool_results` 失效）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10780
- **#10795** `zeroclaw agent` 交互式 REPL 从不启用终端 IUTF8，多字节字符退格异常。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10795

**S3 — 次要**
- **#10796** ZeroCode 聊天输入忽略 Delete 键。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10796
- **#10794** Advisory Windows nextest 失败：`publish_contract::published_crates_never_include_files_outside_their_own_directory`（CI，非必需作业）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10794
- **#10779** OpenCode FreeUsageLimitError（429，配额耗尽）以亚秒级退避重试而非快速失败。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10779
- **#10781** 移除或实现失效的 context/history 配置键（`context_compression.*`、`history_pruning.keep_recent`、`collapse_tool_results`、`keep_tool_context_turns`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10781

**已有相关 fix PR（按摘要推断）**
- 多模态图像校验：**PR #9819** 新增像素级图像校验（完整解码验证），与多模态相关缺陷方向一致。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9819

## 6. 功能请求与路线图信号

- **上下文压缩回归修复（#10780，p1）与失效配置键清理（#10781）** — 同一作者同日提交，属同一主题：v0.8.5 缺少 token 预算驱动的主动压缩。合并可能性高，但标记 `needs-maintainer-review`，需先定架构方向。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10780
  https://github.com/zeroclaw-labs/zeroclaw/issues/10781
- **Shell V1 权限策略（RFC #7155 Phase 0+1）— PR #10610** 已实现并标记 `distinguished contributor`、`size:XL`，但为 `needs-author-action`。若合入，将统一工具权限策略与分级审批。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10610
- **内部主体信封与 cron 运行结果分离（RFC #6954，1/3）— PR #10425**，RFC 切片中的第一片。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10425
- **Gateway webhook 回合 SSE 流式输出 — PR #10450**（opt-in，保留既有 JSON 响应）。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10450
- **单 provider profile 多模型 — PR #9809**（新增 `[providers.models.<family>.<alias>.models.<model_alias>]` 子表），与 #10690 暴露的 provider 命名/路由问题同源。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9809
- **ZeroCode 选区加入聊天 — PR #10553**（Copy / Add to Chat 控件），与 #9047 关闭所澄清的 Code 会话语义配套。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10553
- **OIDC 里程碑（#8289 tracker，risk:high）** 为最高优先级路线图信号之一，协调 #7141 的分阶段落地。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8289

## 7. 用户反馈摘要

- **多会话高负载是主要痛点场景**：用户在同一 `zerocode` 实例中运行 3 个约 200k token 的 ACP 会话 + 1 个 fable 会话，出现回合被秒级连锁取消（#10785）；另一用户观察到同一 ACP 会话历史从 197 条增长到 243 条时缓存前缀被破坏（#10778）。这表明成本/性能敏感的重度使用场景压力最大。
- **配置键的"名不副实"引发不信任**：用户明确指出多个已接受的配置键在 v0.8.5 中**实际失效或行为与名称不符**，用户合理设置后未获得预期的上下文/token 降低效果（#10781）。
- **成本可观测性缺口**：channel 分类器调用的 LLM 用量被丢弃，用户无法核算成本与配额（#10782）。
- **数据安全焦虑**：memory 并发写入静默丢数据被标记为 S0（#10797），由 agent 报告。
- **终端交互细节体验**：Delete 键无效（#10796）、多字节字符退格异常（#10795），均属轻量但高频的日常摩擦。
- **匿名倾向**：全部展示条目 👍 均为 0，说明社区以"提交详尽缺陷报告"而非"点赞表态"参与，反馈质量高但广度受限。

## 8. 待处理积压

**Issue**
- **#8692** 维护者决策队列 tracker，创建于 2026-07-04，已近 **70 天**未结算，15 条评论为全站最高——是 PR 积压的上游根因，建议优先清空队列。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **#8289** OIDC 里程碑 tracker，创建于 2026-06-24，risk:high，已近 **80 天**始终开放的协调项。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8289

**PR（均长期开放且卡在待办标签）**
- **#9819** 多模态像素级图像校验，创建于 2026-08-07（**约 36 天**），`size:XL`、多 provider/channel 标签，`needs-author-action`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9819
- **#9809** 单 provider profile 多模型，创建于 2026-08-07（**约 36 天**），`size:XL`、`needs-author-action`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9809
- **#10214** 日志条目数轮转与多段查询，创建于 2026-08-21（**约 22 天**），`size:XL`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10214
- **#10450** Gateway webhook SSE 流式输出，创建于 2026-08-29（**约 14 天**），`needs-maintainer-review`、`size:XL`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10450
- **#10425** 内部主体信封与 cron 结果分离（RFC #6954，1/3），创建于 2026-08-28，`needs-author-action`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10425

**维护者提示**：待合并 PR 达 49 条，其中多条为 `size:XL` 且创建超过三周；建议结合 #8692 决策队列，按 RFC 切片（#10610、#10425）与高风险安全类（#10449、#10450）分批推进，避免审查带宽被单一大型 PR 长期占用。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*