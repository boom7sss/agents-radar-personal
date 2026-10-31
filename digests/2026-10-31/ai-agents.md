# OpenClaw 生态日报 2026-10-31

> Issues: 486 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-31 15:45 UTC

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

# OpenClaw 项目日报 — 2026-10-31

## 1. 今日速览

项目维持高强度运转：过去 24 小时 486 条 Issue 更新（新开/活跃 364、关闭 122）、500 条 PR 更新（待合并 236、已合并/关闭 264），无新版本发布。活跃度评估为**高**，但健康度存在隐忧：P0/P1 稳定性 Issue 占据讨论榜前列，集中在 Windows 启动/更新可靠性、SQLite 状态库协调、消息投递丢失与会话状态损坏四类主题；其中 #170956（Windows）、#166634（崩溃恢复后 agent 不可用）等仍处 OPEN 且无 fix PR。与此同时，当日新开 PR 多为维护者与小体量修复（文档、CI、测试夹具、UI），说明主干在平稳收口，但核心可靠性债务尚未清算。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 264 条 PR，其中值得关注的推进：

- **#154252（CLOSED，P1）** 批次卡在 dispatching 时请求方 settle-wake 重试耗尽不可达的问题已关闭 — https://github.com/openclaw/openclaw/issues/154252
- **#164948（CLOSED）** `doctor --fix` 在 `state/openclaw.sqlite` 上的自死锁（自身读连接阻塞独占维护租约，`busyTimeoutMs=0`）已关闭 — https://github.com/openclaw/openclaw/issues/164948
- **#167270（CLOSED，P1）** Feishu 跨会话发送附加内部 reply anchor（UUID 而非 `om_` id）导致首发 400 的问题已关闭 — https://github.com/openclaw/openclaw/issues/167270
- **#170031（CLOSED，P1）** 2026.9.8/macOS 发布日志绑定拒绝阻塞更新、诊断无法定位失败绑定的问题已关闭 — https://github.com/openclaw/openclaw/issues/170031
- **#184658（CLOSED，P2）** Windows npm 更新在包替换成功后报告缺失模块清理失败的问题已关闭 — https://github.com/openclaw/openclaw/issues/184658
- **PR #189507（OPEN）** 修复 legacy `.tmp-<uuid>` memory reindex 影子文件泄漏，关闭 #136284 — https://github.com/openclaw/openclaw/pull/189507
- **PR #189321（OPEN，P0）** 修复 macOS 拒绝移入废纸篓时 Gateway repair 先停服再失败（EPERM） — https://github.com/openclaw/openclaw/pull/189321

整体判断：关闭量略高于新开（264 对 236 待合并），但关闭集中在诊断工具、渠道修复与清理类问题；发布阻塞级问题尚未出现对应的已合并修复。

## 4. 社区热点

- **#170956 [OPEN, P0]** Windows 启动缓慢、插件关闭不干净、schtasks 权限错误导致重启/更新不可靠（27 条评论，今日讨论最活跃） — https://github.com/openclaw/openclaw/issues/170956
- **#150635 [OPEN, P2]** 短期召回 512 条上限导致每晚驱逐已召回条目，dreaming 深度阶段永不提升（23 条评论） — https://github.com/openclaw/openclaw/issues/150635
- **#177656 [OPEN, P1]** 2026.10.5 原生 host exec 返回共享状态完整性准入错误、无子进程结果，稳定版至少 28 次失败（21 条评论） — https://github.com/openclaw/openclaw/issues/177656
- **#161976 [OPEN, P1]** WhatsApp 私聊回复在重启后 durable registry 交接处反复失败（19 条评论） — https://github.com/openclaw/openclaw/issues/161976
- **#166634 [OPEN, P0]** 崩溃恢复时迟到的回收提交检查点失败，agent 永久拒绝 `chat.history` 等服务（19 条评论） — https://github.com/openclaw/openclaw/issues/166634

诉求分析：讨论热度高度集中于「托管服务生命周期」（Windows 计划任务、macOS LaunchAgent、SQLite 租约）与「消息必达性」（WhatsApp/Telegram/Feishu 投递）。用户并非在要求新能力，而是在要求**升级与重启不损坏状态、回复不丢**。P0 问题多为跨平台安装/更新路径，提示发布验证矩阵对 Windows 与 macOS 托管安装覆盖不足。

## 5. Bug 与稳定性

**P0（发布阻塞 / 崩溃循环）**
- #170956 Windows 启动缓慢 + 插件关闭不干净 + schtasks 权限错误（crash-loop, ux-release-blocker）— 无 fix PR — https://github.com/openclaw/openclaw/issues/170956
- #166634 崩溃恢复后迟到回收检查点失败致 agent 不可用（session-state, message-loss）— 无 fix PR — https://github.com/openclaw/openclaw/issues/166634
- #142821 默认开启的模型可见 transcript 脱敏污染重放上下文，掩码扩散进命令/文件/回复（data-loss, security）— 无新 fix PR — https://github.com/openclaw/openclaw/issues/142821
- #141413 macOS 应用对使用 SecretRef 的本地 Gateway 不携带 token — 无 fix PR — https://github.com/openclaw/openclaw/issues/141413

**P1**
- #177656 原生 host exec 共享状态完整性准入错误（稳定版 2026.10.5）— 无 fix PR — https://github.com/openclaw/openclaw/issues/177656
- #178359 `doctor --fix --non-interactive` 在 plugin-capture 阶段空转 15+ 分钟（macOS, 2026.10.3）— 无 fix PR — https://github.com/openclaw/openclaw/issues/178359
- #187900 `openclaw doctor` 在所有模式下无限挂起（Linux, 2026.10.8）— 无 fix PR — https://github.com/openclaw/openclaw/issues/187900
- #161976 WhatsApp 私聊回复 durable registry 交接失败 — 待安全审查/实机复现 — https://github.com/openclaw/openclaw/issues/161976
- #159094 2026.9.6 状态生命周期租约归属冲突（`StateDatabaseCoordinatorContention`）— 待补信息 — https://github.com/openclaw/openclaw/issues/159094
- #131768 Android Talk 在 agent 使用工具或长等待时掉线 — 无 fix PR — https://github.com/openclaw/openclaw/issues/131768
- #150822 原生 Codex 子进程宣告 OpenClaw 工具但无执行处理器 — 待安全审查 — https://github.com/openclaw/openclaw/issues/150822
- #113701 大工具输出超出上下文窗口、压缩无法恢复、会话进入失败循环 — 无 fix PR — https://github.com/openclaw/openclaw/issues/113701
- #158154 Telegram 子 agent 结果公告 30 分钟后过期未投递 — 待产品决策 — https://github.com/openclaw/openclaw/issues/158154
- #130209 敏感值脱敏遮蔽浏览器 `key` 参数，模型无法自我纠正 — 待安全审查 — https://github.com/openclaw/openclaw/issues/130209

**P2 代表**
- #166526 幂等 `doctor --fix` 在大状态上耗时约 473 秒，超出 60 秒预算 — https://github.com/openclaw/openclaw/issues/166526
- #175926 SQLite 快照回收每轮跳过（"Unrecognized snapshot directory"）— 有联动 PR — https://github.com/openclaw/openclaw/issues/175926

有 fix PR 关联：PR #189507（对应 #136284）、PR #189321（对应 #188563）、PR #182820（打包遗漏 Mistral 许可证与 README，配套 #182279 证明）。

## 6. 功能请求与路线图信号

- **#150238 [Feature]** 为 Skill Workshop Experience Review 增加上下文预算/跳过策略，避免超大会话复用前台上下文 — https://github.com/openclaw/openclaw/issues/150238
- **PR #189395** Google 提供商对 Gemini Flash 改用 Interactions API（已具备 transport，新发现的 Flash 模型仍走 GenerateContent）— 标注兼容性/认证提供商合并风险，可能进入下一版本 — https://github.com/openclaw/openclaw/pull/189395
- **PR #167071** 修复 Azure Responses 在部署拒绝 `prompt_cache_key` 时持续 400，即便已设置 `compat.supportsPromptCacheKey: false` — https://github.com/openclaw/openclaw/pull/167071
- **PR #189111（Draft）** 降低模型目录 worker 内存开销，明确标注尚未通过预声明性能门 — https://github.com/openclaw/openclaw/pull/189111

判断：下一版本更可能包含提供商兼容性修复与内存/磁盘回收类改进；#150238 仍缺产品决策，短期落地可能性低。

## 7. 用户反馈摘要

- **托管安装是最大痛点**：Windows（schtasks、npm-gloal 更新后的清理）、macOS（LaunchAgent 移入废纸篓被拒、SecretRef 不传 token、发布日志绑定拒绝阻塞更新）三处反馈指向同一场景 — 用户以托管服务方式部署后，升级与重启成为高风险操作。
- **状态库协调不可靠**：多位用户报告 SQLite 租约/完整性准入类错误（#177656、#159094、#166634、#175926），在单机多 agent（约 20 个）场景下更明显。
- **消息必达性不满意**：WhatsApp、Telegram（论坛主题/子 agent 公告）、Feishu、iMessage 均有投递失败或回声缓存绕过报告，用户明确描述"答案已生成但发送前失败"。
- **诊断工具本身不可信**：`doctor` 挂起或超时（#178359、#187900、#166526），使用户在故障时失去自助排查手段。
- **满意度信号有限**：点赞数普遍为 0–2，说明社区更倾向提交缺陷而非表达认可；#141413 获 2 赞，为最高。

## 8. 待处理积压

建议维护者优先关注以下长期未响应或反复挂起的条目：

- **#113701**（2026-07-25 创建，P1，上下文溢出导致会话失败循环）— 超过三个月，无 fix PR — https://github.com/openclaw/openclaw/issues/113701
- **#114913**（2026-07-28，stale，内存检索应在工具截止前约束主嵌入并回退 FTS）— 已标 stale 但仍有更新 — https://github.com/openclaw/openclaw/issues/114913
- **#131768**（2026-08-28，P1，Android Talk 掉线）— 移动端唯一高优问题，长期无 fix — https://github.com/openclaw/openclaw/issues/131768
- **#150635**（2026-09-17，P2，dreaming 深度阶段永不提升）— 评论数第二高但缺产品决策 — https://github.com/openclaw/openclaw/issues/150635
- **#142821**（2026-09-09，P0，脱敏污染重放上下文）— P0 却仍待产品与安全双决策 — https://github.com/openclaw/openclaw/issues/142821
- **PR #182847**（2026-10-24，重连后保留会话恢复与管理员权限，标注消息投递与安全边界合并风险）— 等待作者响应 — https://github.com/openclaw/openclaw/pull/182847
- **PR #136476**（2026-09-02 创建，今日关闭，子 agent 崩溃孤儿归属与请求方通知，XL 体量）— 建议确认关闭原因是否已由其他 PR 承接 — https://github.com/openclaw/openclaw/pull/136476

**健康度小结**：吞吐量健康（关闭 ≥ 新开），但 P0/P1 可靠性问题普遍缺 fix PR 且跨平台集中；建议下一迭代将 Windows/macOS 托管安装与状态库协调列为首要清算目标，并为 `doctor` 增加超时与可观测输出，以恢复用户自助排查能力。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据窗口：2026-10-31（单日快照）｜覆盖 11 个项目**

---

## 1. 生态全景

个人 AI 智能体开源生态在 2026 年 10 月底已形成明显的"核心-参照系"结构：OpenClaw 以近千条日级 Issue/PR 流量维持绝对规模优势，其余 10 个"Claw 系"及相邻项目（NanoBot、Hermes、CoPaw、ZeroClaw 等）体量小一到两个数量级，但技术路线高度同构——均围绕**多渠道网关（Telegram/Discord/飞书/WhatsApp/QQ）+ MCP 工具层 + 会话状态存储 + 定时/子 agent 委派**展开。当日生态最强的信号不是新功能，而是**可靠性债务集体爆发**：Windows/macOS 托管安装、SQLite 状态库租约、消息投递必达性、静默失败四类问题在 6 个以上项目中反复出现。同时，安全边界成为新的竞争焦点——ZeroClaw 单日收到 10+ 条 S1/S2 级漏洞报告，CoPaw 暴露外发动作审批盲区，NanoBot 修复了文本被误判为可执行工具调用的漏洞。合并吞吐普遍跟不上社区供给：Hermes（47 待合并 : 3 合并）、ZeroClaw（50 : 0）显示**审阅带宽已成生态级瓶颈**。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 · 关闭） | PR（待合并 · 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 364 · 122 | 236 · 264 | 无 | 高吞吐但 P0/P1 可靠性问题普遍缺 fix PR，跨平台托管安装为最大风险 |
| **ZeroClaw** | 36 · 1 | 50 · **0** | 无 | 极高活跃、零合并；单日 10+ S1/S2 安全漏洞，review 带宽严重不足 |
| **Hermes Agent** | 48 · 2 | 47 · 3 | 无 | 供给旺盛、质量高，但 47:3 合并比显示审阅瓶颈；多入口共享 session 为系统性主题 |
| **LobsterAI** | 0 | 1 · **49** | **2026.10.30** | 发布驱动维护日；两高影响修复（额度消耗、15s 卡顿）已落地，单一维护者集中风险 |
| **CoPaw** | 9 · 0 | 7 · 1 | 无 | 中等偏高；Issue→PR 当日配对频繁，但 0 Issue 关闭、安全护栏缺口待解 |
| **NanoBot** | 0 | 14 · 3 | 无 | 中等偏低、存量清理；修复 PR 大面积 `conflict` 构成回归窗口风险 |
| **PicoClaw** | 0（1 关闭） | 0 · 13 | 无 | 中等偏低；清理为主，崩溃循环 Issue 以 `stale` 关闭但无可见修复记录 |
| **NanoClaw** | 1 · 0 | 3 · 0 | 无 | 偏低；修复排队待评审，#3338 挂起 2.5 个月 |
| **NullClaw** | 0 | 1 · 0 | 无 | 偏低；仅 1 条日语文档 PR，核心零推进 |
| **IronClaw** | — | — | — | 过去 24 小时无活动 |
| **TinyClaw / Moltis / ZeptoClaw** | — | — | — | 过去 24 小时无活动 |

> 注："Claw 系"命名不代表同一代码谱系；表中仅反映各仓库当日数据。LobsterAI 发布说明原文在"会话体验优化"处被截断，本表不做补充。

---

## 3. OpenClaw 在生态中的定位

**社区规模优势是压倒性的。** 以当日 Issue 流量为口径，OpenClaw（486 条更新）约为第二名 Hermes（50 条）的 **9.7 倍**、ZeroClaw（37 条）的 **13 倍**；PR 流量 500 条对第二梯队 50 条量级亦为 10 倍差距。这种规模带来两个结构性后果：

- **问题暴露面更广**：OpenClaw 的 P0 议题（Windows 计划任务、macOS LaunchAgent 废纸篓、SQLite 租约、transcript 脱敏污染）在较小项目中尚未被触及，说明其用户已进入**规模化托管部署**阶段（单机约 20 个 agent 的多实例场景被明确提及）。
- **审阅效率反而成为相对优势**：OpenClaw 当日关闭 264 条 PR，远高于 Hermes 的 3 条与 ZeroClaw 的 0 条，是生态中唯一"关闭量接近甚至超过新开量"的大项目，说明其已具备一定的吞吐闭环能力。

**技术路线差异：** OpenClaw 是当日唯一明确呈现"发布阻塞级问题（P0）与发布验证矩阵脱节"的项目——其 P0 集中在跨平台安装/更新路径，直接指向 Windows 与 macOS 托管安装的验证缺口。相较之下，Hermes 与 CoPaw 的缺陷更多分布在运行时（gateway session、provider 适配），ZeroClaw 则集中在安全沙箱层。**OpenClaw 的差异化不在于功能更全，而在于其问题已从"能不能用"下沉到"升级会不会坏"。**

**社区互动质量的反向信号：** OpenClaw 点赞数普遍为 0–2（最高 #141413 两赞），用户以提交缺陷为主、少有认可表达；而其单条 Issue 评论数可达 27 条（#170956），说明**讨论深度领先但满意度表达缺失**。Hermes 单条 Issue 最高 21 评论 / 13 赞（#143426），社区互动相对更"正向"。

---

## 4. 共同关注的技术方向

以下需求在多个项目中**独立涌现**，构成生态级技术共识：

### ① 消息必达性（Delivery Guarantee）
- **OpenClaw**：WhatsApp 私聊回复 durable registry 交接失败（#161976）、Telegram 子 agent 公告 30 分钟后过期未投递、Feishu/iMessage 均有失败——用户原话"答案已生成但发送前失败"。
- **Hermes**：Discord 线程唤醒 `admission_conflict` 每 60 秒无限重试（#143720，单日志 494 次）、delegate 完成因缺 `parent_chat_id` 永被拒（#144006）。
- **NanoClaw**：Codex WebSocket 卡顿被隐藏至 10 分钟回合超时（#3338）。
- **NanoBot**：#5585 重试事件被 `_dispatch_outbound_loop` 无条件丢弃（两个竞争 PR #6163/#6264）。
- **共同诉求**：失败必须可见、可熔断、可诊断，而非静默等待至超时。

### ② 会话状态库的协调与所有权
- **OpenClaw**：SQLite 租约归属冲突（#159094 `StateDatabaseCoordinatorContention`）、共享状态完整性准入错误（#177656）、快照回收跳过（#175926）。
- **Hermes**：Dashboard 与 Gateway 争夺 `state.db` 导致批量操作 409（#138915）、Gateway 全量重读会话历史吃满 1.5–2.5 核（#146643）。
- **共同诉求**：单机多实例 / 多入口共享存储时的一致性设计，以及规模化（数千会话）下的性能退化控制。

### ③ 诊断工具自身的可信度
- **OpenClaw**：`doctor --fix` 自死锁（#164948，已修）、空转 15+ 分钟（#178359）、无限挂起（#187900）、473 秒超预算（#166526）。
- **NanoBot**：`nanobot doctor` 提案（#3776，挂起 5.5 个月）。
- **Hermes**：numpy 缺失时记忆静默降级（PR #138588/#138604）、失败不留日志（PR #138539）。
- **共同诉求**：健康检查命令需有超时、有可观测输出，否则故障时用户失去自助排查手段。

### ④ 安全边界：工具调用与命令执行
- **ZeroClaw**：MCP stdio 继承 daemon 全部 env（含 provider key、审计密钥，#12143）、`~/.zshenv` 成为绕过 allowlist 的持久化钩子（#12138）、loopback 授权可被脚本清除审批门（#12141）。
- **CoPaw**：AUTO/SMART 模式下 shell 包裹的外发动作无告警无审批（#8513）。
- **NanoBot**：助手文本中的 `<tool_call>` 标记可变成可执行调用（#6147，已修）、Skill 需"manual-only"（#5405）。
- **PicoClaw**：exec 工具环境变量白/黑名单（#1258，已合）。
- **共同诉求**：最小权限、凭据隔离、有副作用操作需人工闸门。

### ⑤ 成本可预测性
- **LobsterAI**：工具载荷被掩码致缓存重放失效，重代码阅读会话仅 15% 提示命中缓存，额度消耗明显变快（#2929，已修）。
- **ZeroClaw**：延迟 MCP 激活改动 system prompt 击穿缓存（#11703）、成本超限只能重启 daemon（#11589）。
- **共同诉求**：prompt 缓存稳定性 = 直接费用，已成为付费用户的硬指标。

### ⑥ 模型/provider 兼容层
- **OpenClaw**：Gemini Flash 改 Interactions API（#189395）、Azure 拒绝 `prompt_cache_key` 仍 400（#167071）、`reasoning` 别名重复 400（Hermes #136486）。
- **CoPaw**：网关裸 APIError 被归为 `unknown` 不重试（#8505，有 fix PR #8512）。
- **PicoClaw**：Gemini 3 工具调用缺 `thought_signature` 致 400（#3428，已合）。
- **共同诉求**：字段拒绝要"学习并记住"，provider 失配不应连带禁用其他能力。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | CoPaw | NanoBot / PicoClaw | LobsterAI |
|---|---|---|---|---|---|---|
| **功能侧重** | 全平台托管 + 多渠道 + 内存/dreaming | Gateway 会话架构 + 主动式助手（`hermes-autonomous` 提案） | 安全沙箱 + 成本治理 + ZeroCode | 多渠道（飞书/QQ/Telegram） + Hub/Docker | 轻量渠道 + MCP/Skill | 桌面体验 + 图像工作室 |
| **目标用户** | 多 agent 规模化部署者 | 中重度个人 + 多 profile 用户 | 安全敏感 / 自托管大模型用户 | 飞书/QQ 生态 + NAS 部署 | 边缘/路由器自托管 | 桌面终端用户 |
| **架构关键差异** | 统一 Gateway + SQLite 状态库 + 计划任务/LaunchAgent 托管 | 多入口共享 `state.db`，session 键解析层（#147197） | 原生 runtime + Seatbelt + 插件 wasm store + MCP | Hub/Docker 运行时 + agent 配置语言 | 轻量 provider 层 + A2A 提案 | Electron 桌面 + Image Studio |
| **当日最凸显的短板** | 跨平台升级/重启破坏状态 | 合并吞吐不足 | 安全漏洞集中爆发、零合并 | 安全审批缺口、Issue 关闭率为 0 | 修复 PR `conflict` 积压 | 单一维护者承接绝大多数提交 |
| **面向部署形态** | Windows/macOS/Linux 原生托管 | 桌面 + Docker | 原生 runtime + Alpine/musl | Docker Hub / fnOS 沙箱 | OpenWrt / 轻量容器 | 桌面安装包 + SVN 发布流 |

**关键判断**：生态尚未出现同质化红海。OpenClaw 主打"全平台托管成熟度"，ZeroClaw 把赌注押在"沙箱与成本治理"，CoPaw 深耕中文 IM 生态（飞书/QQ），LobsterAI 走桌面消费化路线。**技术架构的真正分水岭是"session 状态的单一所有权模型"**——OpenClaw 与 Hermes 都在为多入口共享存储付代价，这提示下一代架构需要在设计期就引入所有权分区，而非事后修补。

---

## 6. 社区热度与成熟度分层

**第一层 · 规模化迭代（同时暴露量与吞吐能力）**
- **OpenClaw**：486 Issue / 500 PR，关闭 264 PR，是唯一具备"进入-消化"平衡的大项目。处于**"规模驱动的成熟度爬坡"**——功能面稳定，可靠性债务待清算。
- **ZeroClaw**：活跃度极高（37 Issue，其中 10+ 条安全报告），但 **0 合并**，且 XL 规模高风险 PR 长期挂起。处于**"安全重估阶段"**，review 带宽是唯一瓶颈。

**第二层 · 快速迭代但吞吐受限**
- **Hermes Agent**：供给质量高（多数 Issue 附复现路径），但 47:3 合并比是明确瓶颈。处于**"高质量贡献 × 低审阅带宽"**的失衡态。
- **CoPaw**：Issue→PR 当日配对频繁（#8505↔#8512、#8517↔#8519），响应快，但 0 Issue 关闭 + 长期挂起 PR（#7211 逾两月）。处于**"修复快、闭环慢"**。

**第三层 · 质量巩固 / 存量清理**
- **NanoBot**：无 Issue 压力，集中清理冲突 PR；已完成安全修复（#6147）。
- **PicoClaw**：13 PR 全关闭（含 5 条 Dependabot），以清理为主。
- **NanoClaw**：3 PR 排队待评审，修复方向明确但未落地产出。
- **LobsterAI**：发布后集中关闭 49 PR，属**发布驱动维护**，两高影响修复已落地。

**第四层 · 低活动 / 静默**
- **NullClaw**（仅 1 文档 PR）、**IronClaw / TinyClaw / Moltis / ZeptoClaw**（24 小时无活动）。

**成熟度结论**：以"关闭率"为代理指标，LobsterAI（49/50）与 OpenClaw（264/500）已进入稳定维护节奏；Hermes、CoPaw、ZeroClaw 仍处"高供给、低消化"的成长期；第四层项目则需关注是否进入维护低谷。

---

## 7. 值得关注的趋势信号

### 信号一：可靠性 = 新功能
用户不再要求新能力，而是要求**"升级与重启不损坏状态、回复不丢"**（OpenClaw 用户反馈原话）。跨平台托管安装（Windows schtasks、macOS LaunchAgent、Alpine/musl 自更新 #12156）是共同薄弱面。**对开发者：CI 验证矩阵必须覆盖托管安装路径，而非仅覆盖 CLI 启动。**

### 信号二：安全从"特性"变为"基线"
ZeroClaw 单日 10+ S1/S2 报告（含 MCP 继承全部 env、`.zshenv` 持久化钩子、密钥目录未禁读）、CoPaw 外发动作审批盲区、NanoBot 文本误判为工具调用——**沙箱逃逸、凭据隔离、审批完整性三类问题同时出现**。安全研究者开始以"扫描 + 参考实现"方式贡献（#12158 列出 10 项未修复漏洞并附实现）。**对开发者：最小权限、凭据隔离、副作用操作人工闸门需在设计期内置，而非补丁式加固。**

### 信号三：静默失败是最集中的用户不满
跨 6 个项目反复出现同一主题：重试事件被丢弃（NanoBot #5585）、WebSocket 卡顿被隐藏（NanoClaw #3338）、cron 静默卡死（Hermes #146428）、provider 登录过期只报备用失败（Hermes PR #147213）、记忆无 numpy 静默降级（#138588）。**对开发者：失败必须可见、可诊断、可熔断——"无提示"比"报错"更伤害信任。**

### 信号四：审阅带宽是生态级瓶颈
Hermes 47:3、ZeroClaw 50:0、CoPaw 长期挂起 #7211、NanoBot 大面积 `conflict`——**社区供给能力已超过维护者消化能力**。修复 PR 越晚合入，回归窗口越长（NanoBot 日报原话）。**对开发者：项目治理需引入分诊机制（按风险分层、小 PR 先合），并明确长期挂起项的取舍。**

### 信号五：成本效率成为付费用户硬指标
LobsterAI 缓存失效 → 额度消耗明显变快（#2929）；ZeroClaw 工具激活击穿 prompt 缓存（#11703）、成本超限只能重启 daemon（#11589）。**prompt 缓存稳定性已直接等同于费用**，成为用户可感知的体验指标。

### 信号六：协议与互操作方向初现
NanoBot 的 A2A 协议提案挂起约 9 个月（#216），OpenClaw 的 provider 兼容层持续扩张（Gemini Interaction API、Azure、OpenRouter）。**agent-to-agent 通信尚未形成共识实现，但提案已存在**——这是一个值得持续跟踪的空白地带。

### 信号七：部署环境碎片化倒逼健壮性
fnOS NAS 沙箱（CoPaw #8515）、nginx 反代缓冲（#8516）、代理注入（#8315）、OpenWrt procd（PicoClaw #3439）、Docker `restart: unless-stopped`（NanoBot #3290）、企业 MITM（LobsterAI #2912）——**真实部署边界条件的覆盖度正在成为项目成熟度的隐性标尺**。

---

**总结**：该生态已过"功能竞赛"阶段，进入**可靠性、安全、成本、可维护性四项工程化能力的竞赛**。OpenClaw 以规模和吞吐领先但可靠性债务最重；ZeroClaw 与 CoPaw 在安全与审批面暴露最深；Hermes 贡献质量最高但消化最慢。对技术决策者而言，选型时应优先考察**托管安装的发布验证覆盖、静默失败的可见性设计、以及 session 状态所有权的架构清晰度**——这三项恰是当日全生态最集中的痛点所在。

> 数据口径说明：本报告严格基于 2026-10-31 单日快照；NanoBot、PicoClaw、NanoClaw、NullClaw 等项目的评论/点赞字段在源数据中缺失或为 0，其"热点"判断基于更新时间与影响面，不代表实际讨论热度。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-31）

## 1. 今日速览

今日无 Issues 更新、无新版本发布，活动集中在 PR 队列：过去 24 小时 17 条 PR 有更新，其中 3 条被合并或关闭、14 条仍待合并。活跃度评估为**中等偏低且以存量清理为主**——无新讨论输入，但关闭动作值得关注：一条 p1 级 provider 安全修复（#6147）和一条 MCP 连接可靠性修复（#3290）今日关闭。#4651（WebUI 后台任务通知）也已关闭。当日更新的 PR 中大量带有 `conflict` 标签，说明积压 PR 的代码陈旧问题正在成为合并的主要阻力。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭 3 条 PR：

- **[CLOSED] #6147** `fix(providers): tighten tool calls and compatibility fallbacks`（p1，含 security/regression 标签）：移除 #4662 引入的纯文本 `<tool_call>` 提取逻辑，改为强制要求 API 的结构化 tool-call 字段，防止助手文本（包括引用示例）被当作可执行工具调用。这是当日安全意义上最重要的一项推进。链接：HKUDS/nanobot PR #6147
- **[CLOSED] #3290** `fix(mcp): reconnect on ClosedResourceError for HTTP transports`：解决 MCP server（`streamable-http`/`sse`）重启后 nanobot 持有失效缓存 `ClientSession` 的问题（如 Docker `restart: unless-stopped` 场景）。链接：HKUDS/nanobot PR #3290
- **[CLOSED] #4651** `feat(webui): notify when a background chat finishes`：为 WebUI 增加可选的桌面通知，在非当前聚焦会话的 agent 轮次完成时提醒用户。链接：HKUDS/nanobot PR #4651

整体推进幅度：一条安全性修复和一条影响部署场景的可靠性修复完成收口；功能面上 WebUI 多任务体验有小幅增强。

## 4. 社区热点

数据中所有展示的 PR 均无评论数与点赞数据（`undefined` / 0），因此无法识别今日真实的讨论热点。按更新时间和影响面，值得留意的三条是：

- **#6147**（p1，今日关闭）——tool call 解析收紧，安全相关。链接：HKUDS/nanobot PR #6147
- **#5585 的两个竞争修复**：#6163 与 #6264 均针对同一问题——provider 退避时核心已发布 `RetryWaitEvent`（"Model request failed, retry in {n}s (attempt {k})."），但 `ChannelManager._dispatch_outbound_loop` 将其无条件丢弃，导致用户看不到重试提示。两条 PR 分别采用“opt-in hook”和“走 `sendProgress`”两种方案。背后诉求：**用户在模型限流/失败时缺乏可见反馈，体验上是静默等待**。链接：HKUDS/nanobot PR #6163 、HKUDS/nanobot PR #6264
- **#216 A2A 协议支持**（自 2026-02-06 挂起至今，带 `conflict` 标签）：为 nanobot 增加 A2A Server（`channels/a2a.py`）与 Agent Card，实现 agent-to-agent 通信。这是路线图层面最具野心的提案，但长期未合入。链接：HKUDS/nanobot PR #216

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | PR | 问题 | 状态 |
|---|---|---|---|
| **高（p1，security/regression）** | #6147 | 助手文本中的 `<tool_call>` 标记（含引用示例）可变成可执行工具调用 | 今日已关闭（已修复） |
| 中（p2，bug） | #6194 | API 请求完成后，不同 `session_id` 的锁永久滞留在 registry 中；拟改用 `WeakValueDictionary` 并保持请求期锁 | 待合并，已有 fix PR |
| 中（p2，bug） | #3290 | MCP `streamable-http`/`sse` 传输在 server 重启后连接失效不重连 | 今日已关闭（已修复） |
| 中（p2，bug） | #5360 | `_sanitize_name` 将非 ASCII 名称（如“获取天气”）压成 `_`，多工具注册时静默重名 | 待合并，带 `conflict` |
| 中（p2，bug） | #5605 | IMAP 消息在通过过滤后、实际投递给 agent **之前**就被标记 `\Seen`，被过滤拒收的消息也会被误标已读 | 待合并，带 `conflict` |
| 低（p2） | #5260 | 运行时文件混入 workspace 未跟踪文件列表 | 待合并，带 `conflict` |

稳定性观察：今日无新报告的 Bug（Issues 为 0），所列均为存量修复。但**修复 PR 的 `conflict` 积压本身构成稳定性风险**——修复越晚合入，回归窗口越长。

## 6. 功能请求与路线图信号

结合已有 PR 判断，以下方向最可能在下一版本落地：

- **Provider 中立化与扩展**：#5825 用可复用的结构化决策客户端替换 JEV 专用客户端（OpenRouter + System One 协议为首个实现）；#5718 接入 OpenRouter 原生 Images API；#5845 新增 Opper 作为内置 gateway provider（紧随 Eden AI / OrcaRouter 之后）。三条同向，说明 **provider 层正在系统性地去特化、扩网关**。链接：HKUDS/nanobot PR #5825 、HKUDS/nanobot PR #5718 、HKUDS/nanobot PR #5845
- **Skill 权限模型**：#5405 提出“manual-only”调用模式，让部署、发布等有副作用的 skill 只能由用户显式触发，而非被模型自动发现或通过 `always: true` 预加载。这是 agent 安全边界的重要补强。链接：HKUDS/nanobot PR #5405
- **运维可观测性**：#3776 新增 `nanobot doctor`，一次性执行 10 项健康检查（Python 版本、配置、权限、API key、workspace、可选依赖、记忆系统、网络可达性等）。链接：HKUDS/nanobot PR #3776
- **A2A 互操作**：#216（长期挂起，见下节）。

## 7. 用户反馈摘要

今日无 Issues 更新，也没有评论内容可提炼，因此**无法从 Issues 评论中得到用户痛点、场景或满意度信息**。仅能从 PR 描述中推断出以下用户侧信号（属维护者/贡献者的判断，非终端用户原话）：

- 部署与发布类 skill 需要“仅人工触发”的隔离，说明有用户在**让 agent 执行有副作用操作**，并担心误触发（#5405）。
- 模型请求失败退避时用户“看不到任何提示”，属于**静默失败体验问题**（#5585 / #6163 / #6264）。
- IMAP 邮件被误标已读，意味着**真实收件箱数据可能被 agent 的过滤流程污染**（#5605）。
- MCP server 以 Docker `restart: unless-stopped` 方式运行是实际存在的部署形态（#3290）。

## 8. 待处理积压

需提醒维护者关注的长生命周期 PR（均已带 `conflict` 标签，合并成本随时间的推移上升）：

- **#216** `feat(a2a): Add A2A Protocol support`——创建于 2026-02-06，挂起约 9 个月，是队列中战略价值最高、也最陈旧的提案。链接：HKUDS/nanobot PR #216
- **#3776** `feat(cli): add nanobot doctor diagnostic command`——创建于 2026-05-14，用户体验直接受益的 CLI 增强，挂起约 5.5 个月。链接：HKUDS/nanobot PR #3776
- **#4651** WebUI 后台通知——创建于 2026-07-02，今日已关闭；建议确认是合入还是放弃。链接：HKUDS/nanobot PR #4651
- **#5260**（2026-08-05）、**#5360**（2026-08-12）、**#5405**（2026-08-16）、**#5605**（2026-08-30）——四条 p2 修复/功能均挂起约 2 个月且存在冲突，建议集中做一次 rebase 批次。

另需注意：**#6163 与 #6264 是同一问题（#5585）的两个竞争实现**，维护者应尽快择一，避免重复劳动与贡献者挫败。

---

**数据口径说明**：本报告中所有评论数、点赞数在源数据中均缺失或为 0，故“社区热点”仅按更新时间和影响面排序，不代表实际讨论热度。PR 链接按源数据格式给出（`HKUDS/nanobot PR #编号`），未提供完整 URL。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-10-31）

## 1. 今日速览

项目今日维持高活跃度但零交付节奏：过去 24 小时 Issues 更新 50 条（48 条新开/活跃、仅 2 条关闭），PR 更新 50 条（47 条待合并、仅 3 条合并/关闭），无新版本发布。合并吞吐显著低于提交速度，待审 PR 堆积成为当前主要瓶颈。讨论热度集中在桌面端透明度默认值、gateway 会话状态管理与 Discord/Telegram 唤醒投递失败三类问题。多个 Gateway 会话键解析相关的新 Issue（#147197、#147198）与对应 fix PR 同日出现，说明维护者与贡献者对 gateway 状态层缺陷的响应较快。

## 2. 版本发布

今日无新版本发布（Releases 为空），本节省略。

## 3. 项目进展

今日合并/关闭量有限，可确认的关闭项如下：

- **#143426 [CLOSED] Linux 桌面端默认 6% 窗口透明度**（21 评论，👍13）——今日评论与点赞数最高的 Issue，现已关闭。属 `comp/desktop`/`area/config` 问题：`setOpacity` 应用了默认半透明，且设置界面隐藏了该控件。对桌面端可用性影响明确，关闭是正向信号。链接：https://github.com/NousResearch/hermes-agent/issues/143426
- **#104671 [CLOSED] CLI 后台完成积压导致 agent-turn 风暴**——每个过期/死亡进程完成通知被转为独立合成输入，N 个积压触发 N 次完整 agent 轮次。链接：https://github.com/NousResearch/hermes-agent/issues/104671
- **PR #146358 [CLOSED] plugin-catalog 固定条目升级至 v0.1.10**（sha 与版本标签同步更新），为目录维护性变更。链接：https://github.com/NousResearch/hermes-agent/pull/146358

整体评估：今日进展以**清偿存量与维护性升级**为主，未见功能性大合并；47 条待合并 PR 中已有多条针对活跃 Bug 的修复（见第 5 节），下一轮合并窗口可能集中释放。

## 4. 社区热点

| 条目 | 热度 | 核心诉求 |
|---|---|---|
| #143426 Linux 桌面启动 6% 透明度（已关闭） | 21 评论 / 👍13 | 默认外观不应在用户不知情时生效；设置面板隐藏控制项使问题无法自助排查。 |
| #138915 Dashboard 变更被 409 拒绝 | 13 评论 | gateway 独占 `state.db` 时 Dashboard 批量操作必然失败，属会话状态所有权设计冲突。 |
| #146643 Gateway 每次变更全量重读会话历史 | 13 评论 | 数千会话规模下占用 1.5–2.5 CPU 核，`session.resume`/`prompt.submit` 30 秒超时——规模化使用者的性能痛点。 |
| #136486 `reasoning` 别名重复导致 HTTP 400 | 13 评论 / 👍2 | 字段拒绝学习机制未触发，每轮都回退，OpenAI 兼容后端用户持续受损。 |
| #143720 Discord 线程唤醒 `admission_conflict` 每 60 秒无限重试 | 10 评论 | 单条 gateway 日志出现 494 次，6 小时后仍在触发；尝试上限与 `notify-mode=off` 均失效。 |

- #138915：https://github.com/NousResearch/hermes-agent/issues/138915
- #146643：https://github.com/NousResearch/hermes-agent/issues/146643
- #136486：https://github.com/NousResearch/hermes-agent/issues/136486
- #143720：https://github.com/NousResearch/hermes-agent/issues/143720

**分析**：热点高度集中于「多入口共享同一会话存储」引发的一致性与性能矛盾——Dashboard、Gateway、Discord/Telegram 适配器与 cron 都在争夺同一套 session 状态，且缺乏统一的失败熔断。这已构成系统性主题，而非零散个案。

## 5. Bug 与稳定性（按严重程度排列）

**P2 · 已有 fix PR**

- #147198 `tests/tui_gateway/` 在单 pytest 进程下 8 个 fail-closed 测试失败（secret-scope ContextVar 泄漏 + HERMES_PROFILE 未清空）——**有 fix PR #147223**。链接：https://github.com/NousResearch/hermes-agent/issues/147198
- #142636 会话模型 slug 与 provider 失配（`grok-4.7` 发往 `openai-codex`），entitlement 400 后连带禁用 Codex 辅助压缩——**有 fix PR #147222**（provider-less 模型覆盖不应套用默认 provider）。链接：https://github.com/NousResearch/hermes-agent/issues/142636

**P2 · 无明确 fix PR，影响面大**

- #146643 Gateway 全量重读会话历史致 CPU 与超时（性能回归）。链接：https://github.com/NousResearch/hermes-agent/issues/146643
- #138915 Dashboard 变更 409，批量动作必然失败。链接：https://github.com/NousResearch/hermes-agent/issues/138915
- #136486 `reasoning`/`reasoning_content` 重复字段触发 HTTP 400，回退机制失效。链接：https://github.com/NousResearch/hermes-agent/issues/136486
- #143720 Discord 线程唤醒无限重试无熔断。链接：https://github.com/NousResearch/hermes-agent/issues/143720
- #144006 Discord 线程 `delegate_task` 完成因缺少 `parent_chat_id` 永被拒绝。链接：https://github.com/NousResearch/hermes-agent/issues/144006
- #146428 cron 投递解析 home-target 抛 `UnscopedSecretError` 导致运行**静默永久卡死**（多 profile 复用）。链接：https://github.com/NousResearch/hermes-agent/issues/146428
- #140222 带 monitor 的 cron 任务每次无变化 tick 仍创建空 session（canonical 准入后）。链接：https://github.com/NousResearch/hermes-agent/issues/140222
- #96610 schema 约束后端下 tool_call bridge 参数恒为空（缺少 `additionalProperties`）。链接：https://github.com/NousResearch/hermes-agent/issues/96610
- #147197 `_parse_session_key` 丢弃 per-user 槽位，唤醒重建时错误重新映射到共享路由。链接：https://github.com/NousResearch/hermes-agent/issues/147197

**P2/P3 · 平台与兼容性**

- #147179 官方 Docker 镜像 Telegram gateway 空 `ConnectError('')` 循环（OpenSSL 3.5 PQ key share 被重置，依赖 #107519）。链接：https://github.com/NousResearch/hermes-agent/issues/147179
- #135936 Windows 原生桌面控制台闪窗 / 焦点抢占，WT 委派层为根因。链接：https://github.com/NousResearch/hermes-agent/issues/135936
- #143444 粘贴清洗器破坏合法时间区间（`12:00~12:15` → `12:12:15`），Python 与 TS 双端复现。链接：https://github.com/NousResearch/hermes-agent/issues/143444
- #140165 `hermes update --keep-stash` 在已最新时仍提示恢复本地改动。链接：https://github.com/NousResearch/hermes-agent/issues/140165
- #144084 [P3/security] v0.22.5 的 npm audit 最后两项阻塞（undici、zod 4.4.3），受 `.npmrc` `min-release-age=14` 限制而非上游缺修复。链接：https://github.com/NousResearch/hermes-agent/issues/144084

## 6. 功能请求与路线图信号

- **插件来源可追溯（PR #147224，OPEN）**：为归档安装（无 `.git`）的插件提供 artifact 锚定的 provenance，解决「我是什么/如何更新」给出 git-clone 错误指引的问题。属可维护性基础设施，审阅门槛较低，具备近期合入可能。链接：https://github.com/NousResearch/hermes-agent/pull/147224
- **`hermes-autonomous` 目录条目（PR #147225，OPEN）**：事件驱动、非固定调度的主动跟进能力（回顾近期对话、识别值得回访的内容），直指「主动式个人助手」这一核心产品定位。链接：https://github.com/NousResearch/hermes-agent/pull/147225
- **Telegram todo 结果渲染为可编辑清单（PR #31106，OPEN，自 2026-05-23）**：带 `sweeper:risk-message-delivery` 与兼容性标记，长期未合，反映平台渲染层改动风险偏高。链接：https://github.com/NousResearch/hermes-agent/pull/31106
- **MiniMax-M3.1 接入（#134659）**：模型已上线 MiniMax API 但未出现在 `/v1/models` 与官方文档，Hermes 的精选模型列表亦缺失。属上游信息滞后导致的能力缺口，可随模型列表惯例更新纳入。链接：https://github.com/NousResearch/hermes-agent/issues/134659
- **holographic 记忆的 numpy 健康可见性（PR #138588、#138604）**：`is_available()` 在无 numpy 时仍返回 True，HRR 权重被静默降为 0 只剩 FTS；对应在 doctor/memory status 暴露状态并为 Docker 镜像内置 NumPy。链接：https://github.com/NousResearch/hermes-agent/pull/138588 、https://github.com/NousResearch/hermes-agent/pull/138604

## 7. 用户反馈摘要

- **「静默失败」是最集中的不满**：cron 运行卡死无提示（#146428）、写入被拒却不留日志（PR #138539 对应 #136835）、记忆提供方无 numpy 时静默降级（#138588）、主 provider 登录过期而只报备用失败（PR #147213）——用户反复要求**失败必须可见、可诊断**。
- **规模化使用已触达瓶颈**：数千会话的 store 使 gateway 吃满 1.5–2.5 核并让桌面端 30 秒超时（#146643）；Dashboard 批量操作在 gateway 持有时 100% 失败（#138915）。中度以上用户的生产可用性受影响。
- **多平台适配器是缺陷高发区**：Discord 唤醒与 delegate 完成反复 `admission_conflict`（#143720、#144006），Telegram 在官方 Docker 镜像上连接循环（#147179），WeChat/iLink 限流丢推送（PR #140202）。多 profile / 多用户线程场景（`thread_sessions_per_user`）问题尤为突出（#147197）。
- **满意度信号**：桌面透明度问题（#143426）以 21 评论、13 点赞关闭，显示用户对可见外观缺陷的关注度与维护者响应意愿均较高。
- **安装体验摩擦**：`hermes update --keep-stash` 行为与文档不符（#140165）、npm 审计阻塞源于本地发布年龄策略（#144084），属「体验细节不到位」类反馈。

## 8. 待处理积压

- **PR #31106**（Telegram todo 可编辑清单）自 2026-05-23 起 OPEN，逾五个月未合，带双重风险标记，建议维护者给出明确取舍（合入、拆分或关闭）。链接：https://github.com/NousResearch/hermes-agent/pull/31106
- **#96610**（tool_call bridge 参数恒空）自 2026-08-27 起持续活跃更新但无 fix PR，影响所有 schema 约束后端，属长期核心缺陷。链接：https://github.com/NousResearch/hermes-agent/issues/96610
- **#95141**（Kanban review 无独立 reviewer 时自循环、无熔断）自 2026-08-26 悬置，已有真实事故记录。链接：https://github.com/NousResearch/hermes-agent/issues/95141
- **#134659**（MiniMax-M3.1 未列入模型目录）自 2026-10-07 起 8 条评论仍无处理，属低成本的模型列表维护项。链接：https://github.com/NousResearch/hermes-agent/issues/134659
- **PR #134711**（gateway 以最后服务的模型恢复 ambient 会话）创建于 2026-10-07 仍未合并，与今日 #142636 的 provider/model 失配问题同源，建议优先审阅。链接：https://github.com/NousResearch/hermes-agent/pull/134711
- **PR #138539 / #138604 / #138588**（同作者 wweic-code 的一组诊断与打包修复）自 2026-10-14 持续 OPEN，直接对应「静默失败」痛点，建议合并评审。链接：https://github.com/NousResearch/hermes-agent/pull/138539

---

**健康度小结**：社区供给旺盛、问题定位质量高（多数 Issue 附环境、版本、复现路径与代码位置），但**合并侧吞吐不足**——47:3 的待合并/已合并比例显示出审阅带宽瓶颈。建议维护者优先清理同日出现配对的 #147198/#147223 与 #142636/#147222，并对长期悬置的 #31106、#96610 给出明确状态说明。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-10-31）

## 1. 今日速览

今日无新版本发布，项目整体处于"清理与收敛"状态：24 小时内 13 条 PR 全部以关闭（含合并）结束，无新开或活跃 Issue，唯一更新的 Issue 也已关闭。活跃度评估为**中等偏低**，但关闭量为正，说明维护节奏仍在推进。值得注意的是，13 条 PR 中有 5 条为 Dependabot 依赖升级、多条带有 `stale` 标签，表明今日大量动作属于积压清理而非新增开发。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭的 PR 覆盖渠道、安全、构建与兼容性等多个方向：

- **QQ 渠道附件能力增强**（#1349，enhancement/channel）：支持解析 QQ 表情结构，处理语音、图片、视频与文件消息，并支持以上传后回传的方式发送本地附件。渠道能力显著扩展。
  链接: sipeed/picoclaw PR #1349
- **exec 工具环境变量安全加固**（#1258，enhancement/security）：新增可配置的环境变量允许/阻止列表，向子进程传递 `PICOCLAW_*` 变量，并阻止 LLM 覆盖敏感变量。属于安全面实质性提升。
  链接: sipeed/picoclaw PR #1258
- **OpenAI 兼容层修复 Gemini 工具调用**（#3428）：解决通过 OpenAI 兼容端点续接工具调用会话时 Gemini 3 返回 `400 INVALID_ARGUMENT`（缺少 `thought_signature`）的问题，采用回显已捕获签名 + 为无签名工具调用提供哨兵值的方式。
  链接: sipeed/picoclaw PR #3428
- **WhatsApp Native 构建标签修复**（#1569，bug/channel/build）。
  链接: sipeed/picoclaw PR #1569
- **文档**：#1182 将 `AGENTS.md` 调整为更原则化、轻量的 AI 智能体/贡献者指引。
  链接: sipeed/picoclaw PR #1182
- **批量合并型 PR**：#1558、#1545、#1560 均为将多个既有 PR 的修复合并入单一 PR 的操作，涉及编号 #1344/#1342/#1341/#1331、#1500/#1490/#1488/#1487/#1485、#1312/#1311/#1308。这类 PR 反映维护者正在集中收拢历史遗留改动。

整体推进幅度：渠道能力与安全加固较有价值；其余以清理为主，未见架构级变更。

## 4. 社区热点

今日数据中无明显讨论热度：唯一更新的 Issue #3439 仅 1 条评论、0 👍；所有 PR 的 👍 均为 0，评论数据多为缺失。**今日无社区热点**。相对最值得关注的是 #3439，因其描述的是崩溃循环问题，对自托管用户影响直接。
链接: sipeed/picoclaw Issue #3439

## 5. Bug 与稳定性

按严重程度排列：

1. **【高】picoclaw-launcher 参数组合导致崩溃循环 + IPv4 不可达**（Issue #3439，已关闭）
   - 环境：Launcher v0.5.0（arm64 静态二进制）、OpenWrt aarch64（GL-BE6500）、双栈内核（`net.ipv6.bindv6only = 0`）、以 procd 服务常驻并设置 `-host 0.0.0.0`。
   - 症状 A：`-public` 单独使用时只绑定 IPv6，IPv4 客户端无法连接。
   - 症状 B：`-public` 与 `-host` 同时设置时发生自撞并进入 crash loop。
   - 状态：Issue 已标记关闭且带 `stale` 标签；**数据中未见对应 fix PR**，建议维护者确认关闭原因（是否已修复或仅因停滞关闭）。
   链接: sipeed/picoclaw Issue #3439
2. **【中】Gemini 3 工具调用 400 错误**（PR #3428，已关闭）：OpenAI 兼容端点续接工具调用会话时报 `INVALID_ARGUMENT`，已有修复 PR 且已关闭。
   链接: sipeed/picoclaw PR #3428
3. **【中】WhatsApp Native 构建标签损坏**（PR #1569，已关闭）：属构建可用性问题，已有修复。
   链接: sipeed/picoclaw PR #1569

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。从已关闭 PR 可推断的能力方向：

- **多渠道富媒体支持**（#1349 QQ 附件、表情、语音/视频/文件双向传输）——渠道抽象层趋向统一的多模态消息模型，可能延续至其他渠道。
- **智能体执行安全策略**（#1258 环境变量白名单/黑名单、敏感变量保护）——若纳入主线，将成为 exec 工具的标准安全基线，对多租户或公网部署场景尤为关键。
- **AI 贡献者友好度**（#1182 原则化的 `AGENTS.md`）——显示项目有意吸引 AI 智能体参与协作。

上述 PR 均已关闭，是否进入下一版本需以实际发布内容为准。

## 7. 用户反馈摘要

- **使用场景**：OpenWrt 路由器（GL-BE6500 / aarch64）上以 procd 服务方式常驻运行 Launcher，属于典型的低功耗边缘自托管部署。
- **痛点**：双栈环境下的监听地址语义不清晰——`-public` 只绑 IPv6、与 `-host` 组合反而自撞崩溃，对依赖 IPv4 访问的局域网客户端造成直接不可用。这类问题对路由器用户是高阻断性的。
- **满意度信号**：数据中无正面反馈、无 👍、评论量极低，无法据此评估用户满意度。

## 8. 待处理积压

- **Issue #3439**：涉及崩溃循环的高严重度问题，以 `stale` 状态关闭且无可见修复 PR，建议复核关闭理由并补充发布说明，避免同类问题复发。
  链接: sipeed/picoclaw Issue #3439
- **依赖积压批量关闭**：#3432（anthropic-sdk-go 1.55.1→1.80.0）、#3433（golang.org/x/crypto 0.53.0→0.58.0）、#3434（gronx 1.20.0→1.20.5）、#3435（azidentity 1.14.0→1.14.1）、#3436（go.mau.fi/util 0.9.8→0.10.1）均在创建于 2026-10-15 后以 `stale` 关闭。注意其中 crypto 与 SDK 跨多个次版本，若未合并需确认是否另行升级，以免长期落后带来安全与兼容风险。
  链接: sipeed/picoclaw PR #3432 / #3433 / #3434 / #3435 / #3436
- **2026-03 批次长期挂起 PR 集中关闭**：#1558、#1545、#1560、#1182、#1349、#1569 创建于 3 月，均在 10-31 前后关闭，跨度约 7 个月。建议维护者检视其中是否有关闭但未落地的有效修复（尤其 #1558/#1545/#1560 所合并的子 PR 内容），并说明去向，以减少贡献者的重复投入。
  链接: sipeed/picoclaw PR #1558 / #1545 / #1560

---
**健康度速评**：关闭吞吐正常、无新增 Issue 压力，但今日推进以清理为主，且高严重度崩溃问题以 stale 方式关闭而缺少可见修复记录，叠加跨版本依赖升级未落地，建议下一周期优先给出明确的合并/发布结论。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-10-31）

## 1. 今日速览

今日项目活跃度**偏低**：过去 24 小时仅 1 条 Issue 更新（新开/活跃，0 关闭）、3 条 PR 更新（全部待合并，0 合并/关闭），无新版本发布。3 条 PR 均于 10-30 至 10-31 提交，其中 2 条为 bug 修复（安全路径错误处理、Telegram 富文本渲染），1 条为机器人自动刷新的 agent 镜像标签更新。整体看，代码侧有修复推进但尚无合并产出，项目处于"修复排队、等待评审"状态。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日**无合并或关闭的 PR**，项目无已落地的代码推进。3 条待合并 PR 方向如下：

- **#4244** `fix(host)`: 让三处 `AnchoredDir` 调用点将磁盘与权限错误作为运营错误向上传播，而非误判为"不安全路径"拒绝（涉及 security / sessions / skills 区域）。[链接](https://github.com/nanocoai/nanoclaw/pull/4244)
- **#4243** `fix(telegram)`: 修复 Adapter 4.41.1（rc.2 升级）引入的富消息渲染问题——`$` 未转义导致两个金额之间的文本被渲染为数学公式，单换行分隔的列表行被合并成一段。[链接](https://github.com/nanocoai/nanoclaw/pull/4243)
- **#4242**: 机器人自动更新 agent 镜像，将 `v2026.10.0-20261030T1240` 列为 `v2026.10.0` 的加固镜像（含新镜像 digest）。[链接](https://github.com/nanocoai/nanoclaw/pull/4242)

其中 #4243 直接关联近期适配器升级带来的用户可见回归，优先级较高；#4242 为自动化常规更新。

## 4. 社区热点

- **Issue #3338**（4 条评论，今日唯一活跃 Issue）：Codex WebSocket 空闲重试被隐藏，直到 NanoClaw 的 10 分钟回合超时才暴露。作者 ionescu77，创建于 2026-08-18，至今仍在更新。[链接](https://github.com/nanocoai/nanoclaw/issues/3338)

该 Issue 从 8 月持续至今已超两个月，4 条评论说明有持续讨论但尚未闭环，是今日社区关注度最高的条目。背后诉求是**可观测性与超时策略对齐**：用户希望底层 WebSocket 卡顿时能快速感知并自动恢复，而不是静默等待至整轮超时。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 说明 | 是否有 Fix PR |
|---|---|---|---|
| 高 | Issue #3338 | Codex Responses WebSocket 卡住时，简单的 Telegram 请求可静默挂起十分钟。Codex CLI 能自行检测 5 分钟空闲超时并在内部重试，但 `codex app-server` 不会，重试被隐藏至 NanoClaw 10 分钟回合超时才显现。属用户可感知的可用性/回归类问题。 | 未见对应 fix PR |
| 中 | PR #4243 | Telegram 富消息渲染回归：Adapter 4.41.1（rc.2）下含两个金额的回复被误渲染为数学公式，单换行列表行被合并成段。影响回复可读性。 | 是（PR #4243 本身即修复） |
| 中 | PR #4244 | `AnchoredDir` 三处调用点将磁盘/权限错误误报为不安全路径拒绝，掩盖真实运营错误，影响排障。 | 是（PR #4244 本身即修复） |

## 6. 功能请求与路线图信号

今日 Issue 中**未出现明确的新功能请求**。#3338 更偏 bug/稳定性诉求，其潜在路线图信号是：为 `codex app-server` 路径补齐与 Codex CLI 一致的 WebSocket 空闲检测与内部重试机制，或将底层超时状态暴露给上层以缩短用户等待。结合现有 PR 判断，#4243、#4244 属修复类，短期内更可能先行进入下一版本；#3338 对应的能力建设暂无对应 PR，纳入下一版本的确定性较低。

## 7. 用户反馈摘要

- **痛点（Issue #3338）**：用户通过 Telegram 发起简单请求时遭遇长时间静默无响应，根因是 `codex app-server` 未像 Codex CLI 那样处理自身 5 分钟 WebSocket 空闲超时并内部重试，问题被掩盖到 NanoClaw 10 分钟回合超时才浮现。核心不满在于**故障不可见、恢复被动**。
- **使用场景**：Telegram 作为主要交互渠道，依赖富消息展示回复；PR #4243 的修复描述反映出用户回复中常含金额与多行列表内容。
- 今日数据中未包含更多评论原文，暂无可提炼的满意度评价。

## 8. 待处理积压

- **Issue #3338**：2026-08-18 创建，至 2026-10-31 仍为 OPEN，已积压约两个半月，有 4 条评论但无关联 fix PR，建议维护者明确优先级或给出处理计划。[链接](https://github.com/nanocoai/nanoclaw/issues/3338)
- **PR #4242**：由 `nanoclaw-image-refresh[bot]` 于 10-30 自动提交，截至今日仍待合并，属低风险的自动化更新，可优先快速处理以减少队列占用。[链接](https://github.com/nanocoai/nanoclaw/pull/4242)

---
*说明：以上内容仅基于所提供的 GitHub 数据；评论数缺失的 PR 标注为 undefined，未做推断。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-10-31）

## 1. 今日速览

- 项目今日整体活跃度**偏低**：过去 24 小时无 Issues 更新，无新版本发布，仅有 1 条 PR 活动。
- 唯一动态为 eltociear 提交的文档类 PR #1084（docs: add Japanese documents），状态为 OPEN，尚未合并。
- 代码与功能层面今日**零推进**：无合并/关闭的 PR，无 Issue 新开或关闭，无 Bug 修复进展。
- 项目健康度信号中性：没有出现新 Bug 或回归报告，但同时也缺少实质性开发活动，需关注维护者对贡献的响应速度。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，项目在功能与修复层面无实质性向前推进。

唯一待合并 PR：

- **#1084 [OPEN] docs: add Japanese documents**（作者 eltociear，创建/更新 2026-10-31）
  - 链接: [nullclaw/nullclaw PR #1084](https://github.com/nullclaw/nullclaw/pull/1084)
  - 内容：作者提交了日语文档翻译。
  - 该 PR 属文档与本地化范畴，不涉及代码逻辑变更；若合并，将提升日语用户的上手体验，但不改变产品功能面。

## 4. 社区热点

今日无评论或反应数据可统计的热点讨论。Issues 为 0 条；唯一 PR #1084 的评论数数据缺失（显示为 undefined），👍 为 0，暂无社区互动迹象。

- 链接: [PR #1084](https://github.com/nullclaw/nullclaw/pull/1084)

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题（Issues 更新 0 条）。稳定性方面无负面信号，亦无相关 fix PR。

## 6. 功能请求与路线图信号

今日无新的功能请求 Issue。结合现有 PR 判断：PR #1084 反映的是**多语言文档本地化**方向的需求信号，属于生态与可访问性建设，与核心功能路线图无直接关联。是否被纳入下一版本，取决于维护者对该 PR 的评审与合并进度，当前数据不足以判断。

## 7. 用户反馈摘要

今日无 Issues 评论数据可供提炼用户痛点、使用场景或满意度信息。唯一可见的贡献者行为为社区成员主动提交日语文档翻译，体现了一定的本地化贡献意愿。

## 8. 待处理积压

今日数据未提供长期未响应的 Issue 或 PR 清单，无法识别积压项。当前需关注的即时待办为：

- **PR #1084**（创建与更新均为 2026-10-31，评论数数据缺失）尚处 OPEN 状态，建议维护者及时评审并给出反馈，避免文档类贡献者等待过久。链接: [PR #1084](https://github.com/nullclaw/nullclaw/pull/1084)

---

**数据说明**：本报告仅基于所提供的 2026-10-31 单日数据生成；PR #1084 的评论数字段为 undefined，故未作评论数结论。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-31

## 1. 今日速览

项目今日处于高频收尾状态：过去 24 小时 Issues 零更新，但 PR 侧有 50 条变动（49 条合并/关闭、1 条待合并），并发布 2026.10.30 版本。活跃度集中在维护者驱动的修复与发布工程，说明本周期以稳定性清理为主，而非社区驱动的需求讨论。合并队列中大量 PR 已积压 7–16 天，今日集中关闭表明团队完成了一次发布前的批量清理。整体健康度良好，但积压周转周期偏长值得关注。

## 2. 版本发布

**LobsterAI 2026.10.30**（发布于 2026.10.30）

根据发布说明，本版本包含两大主题：

- **Image Studio 上线**：新增图像创作界面，支持特写擦除与融合（close-up erase-and-blend）、按会话选择媒体模型，以及生成图像的固定分享路径。
- **会话体验优化**：大量粘贴内容会折叠为卡片；历史记录持续加载（原文在此处被截断）。
- 对应发布 PR #2964 说明该版本自上一版本以来含 **53 个 commit**，涵盖图像工作室、媒体生成优化、图像编辑/分享、粘贴文本卡片与行内上下文芯片等改动。

**破坏性变更与迁移注意事项**：所给材料中未提及任何破坏性变更或迁移要求。

链接：https://github.com/netease-youdao/LobsterAI/pull/2964

## 3. 项目进展

今日关闭的 PR 显著推进了多个领域：

- **媒体与主线程性能**：PR #2965 修复了 `media.intents.v2` KV 行内联存储 base64 图像且从不清理的问题，该问题导致输入与侧栏滚动每约 15 秒卡顿一次。这是今日最直接的用户体验修复。
  https://github.com/netease-youdao/LobsterAI/pull/2965
- **OpenClaw 缓存与成本**：PR #2929 修复了工具载荷在转录中被掩码、导致缓存重放失效的问题——重代码阅读会话仅约 15% 的提示来自供应商缓存，用户反馈升级后额度消耗明显变快。
  https://github.com/netease-youdao/LobsterAI/pull/2929
- **OpenClaw 认证链路**：PR #2951 修复了 gateway 代理被忽略导致 ChatGPT/Codex token 刷新失败，以及 Computer Use MCP 认证中内部 bridge-secret 引用被转义为字面文本的问题。
  https://github.com/netease-youdao/LobsterAI/pull/2951
- **MCP 健壮性**：PR #2912 让 stdio MCP 服务器信任系统 CA 存储（绕过 OpenClaw 丢弃 `NODE_OPTIONS` 的限制）；PR #2908 加固远程 MCP OAuth 登录清理与状态刷新。
  https://github.com/netease-youdao/LobsterAI/pull/2912 ・ https://github.com/netease-youdao/LobsterAI/pull/2908
- **桌面端定制**：PR #2894 新增自定义与动态 GIF 桌宠皮肤、截图工具及后续跟进。
  https://github.com/netease-youdao/LobsterAI/pull/2894
- **Windows 平台**：PR #2910 隐藏任务栏中的桌宠窗口；PR #2902 修复含空格的路径导致开机自启状态误报。
  https://github.com/netease-youdao/LobsterAI/pull/2910 ・ https://github.com/netease-youdao/LobsterAI/pull/2902
- **渲染层打磨**：PR #2911 优化侧栏能力菜单样式与开合动画；PR #2937 修复 Cowork 历史消息加载不足视口的问题；PR #2914 修复离线启动后账户数据恢复不完整。
  https://github.com/netease-youdao/LobsterAI/pull/2911 ・ https://github.com/netease-youdao/LobsterAI/pull/2937 ・ https://github.com/netease-youdao/LobsterAI/pull/2914

**整体推进评估**：一次性合并 49 条 PR 是一个发布周期的收尾而非增量迭代，项目在性能、认证可靠性、跨平台细节三个维度上完成了一轮实质性加固。

## 4. 社区热点

今日 Issues 无更新，PR 评论数均为未提供（`undefined`），因此无法按评论量或反应数排序。可观察到的信号是：今日所有高相关 PR 均由维护者 fisherdaddy 提交，社区参与度低。其中讨论价值最高的是 PR #2929（额度消耗变快的用户反馈）与 PR #2965（15 秒周期卡顿），二者均源自真实用户报告的性能问题，反映用户对**成本效率**和**交互流畅度**高度敏感。

链接：https://github.com/netease-youdao/LobsterAI/pull/2929 ・ https://github.com/netease-youdao/LobsterAI/pull/2965

## 5. Bug 与稳定性

按影响面排序：

1. **高 — 额度异常消耗**（PR #2929 已修复并关闭）：升级后缓存命中率骤降，重代码阅读场景仅约 15% 提示命中缓存，直接产生费用。已修复。
   https://github.com/netease-youdao/LobsterAI/pull/2929
2. **高 — 主线程周期性卡顿**（PR #2965 已修复并关闭）：KV 行无限膨胀存储 base64 图像，输入与侧栏滚动约每 15 秒卡顿。已修复。
   https://github.com/netease-youdao/LobsterAI/pull/2965
3. **中 — 认证失败**（PR #2951 已修复并关闭）：ChatGPT/Codex token 刷新失败、Computer Use MCP 认证失败。已修复。
   https://github.com/netease-youdao/LobsterAI/pull/2951
4. **中 — 企业网络下 MCP 连接失败**（PR #2912 已修复并关闭）：MITM 代理/TLS 拦截环境下 Node 型 stdio MCP 无法使用。已修复。
   https://github.com/netease-youdao/LobsterAI/pull/2912
5. **中 — 离线启动账户数据不完整**（PR #2914 已修复并关闭）。
   https://github.com/netease-youdao/LobsterAI/pull/2914
6. **低 — Windows 开机自启误报错误**（PR #2902 已修复并关闭）；**桌宠窗口污染任务栏**（PR #2910 已修复并关闭）。
   https://github.com/netease-youdao/LobsterAI/pull/2902 ・ https://github.com/netease-youdao/LobsterAI/pull/2910

今日无新增未修复 Bug 报告。

## 6. 功能请求与路线图信号

材料中 Issues 为空，无直接的用户功能请求。可从已合并 PR 推断下一版本的延续方向：

- **图像能力深化**：Image Studio 已随 2026.10.30 发布，媒体模型按会话选择与图像分享路径已落地，后续可能继续在编辑能力上扩展。
- **桌面个性化**：PR #2894 的自定义/动态 GIF 皮肤与截图工具已合入，属于用户可感知的定制化方向。
- **发布工程自动化**：唯一待合并 PR #2966 新增 Codown SVN 发布工作流，构建签名安装包并提交至内部 SVN，部署保持手动（脚本打印工单 URL 与公开下载链接，不自动打开浏览器）。该 PR 若合入，将改善发布流程一致性。
  https://github.com/netease-youdao/LobsterAI/pull/2966

## 7. 用户反馈摘要

基于 PR 描述中引用的用户报告：

- **痛点**：升级后额度消耗明显变快（PR #2929）；输入与历史滚动周期性卡顿（PR #2965）；企业 MITM 代理环境下 MCP 服务不可用（PR #2912）；离线启动后账户与模型信息长时间不可用（PR #2914）。
- **使用场景**：重代码阅读会话、企业网络环境、离线启动、桌面桌宠与截图。
- **满意度信号**：无直接正面反馈记录。可间接推断：缓存修复与 OAuth/代理修复针对的是高影响、高复现率的真实阻断问题。

今日 Issues 无评论数据，无法提炼更多原声反馈。

## 8. 待处理积压

- **PR #2966 [OPEN]**（创建与更新均为 2026-10-31）：Codown SVN 发布工作流，是当前唯一待合并项，属构建/发布工具链，需维护者评审。
  https://github.com/netease-youdao/LobsterAI/pull/2966
- **长期滞留后今日关闭的 PR**：PR #2687（Release/2026.9.15，创建于 2026-09-15，挂起约 46 天）、PR #2894（创建于 2026-10-17，挂起 14 天）、PR #2910 / #2902 / #2911 / #2912 / #2908（均创建于 2026-10-19～10-20，挂起 11–12 天）。这些已闭环，但反映出修复 PR 从提交到合并的平均周期偏长，建议维护者关注评审吞吐。
  https://github.com/netease-youdao/LobsterAI/pull/2687

**健康度提示**：零 Issue 更新配合大批量 PR 关闭，说明今日是发布驱动的维护日；建议后续关注 Issue 通道是否因发布而暂时静默，以及单一维护者（fisherdaddy）承担绝大多数提交带来的评审集中风险。

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

# CoPaw 项目动态日报 — 2026-10-31

> 数据来源：agentscope-ai/CoPaw GitHub（注：数据中 Issue/PR 链接域名显示为 `QwenPaw`，以下按原文保留）

---

## 1. 今日速览

今日 CoPaw 活跃度**中等偏高**：过去 24 小时共有 9 条 Issue 更新（全部为新开/活跃，零关闭）、8 条 PR 更新（7 条待合并、1 条关闭），无新版本发布。讨论主要集中在 **飞书渠道连接稳定性**、**受限环境下启动失败** 与 **审批/安全治理绕过** 三类问题。值得注意的是，多个 Bug 当日即已出现对应的修复 PR（如 #8505↔#8512、#8517↔#8519），说明核心维护链路响应迅速；但 9 条 Issue 无一关闭，积压清理速度偏慢。

---

## 2. 版本发布

本周期无新版本发布。

---

## 3. 项目进展

- **PR #8338 [CLOSED] fix(channels): 将 Telegram 引用回复上下文传入 agent** — 唯一关闭/合并项。修复了 Telegram 适配器从不读取 `message.reply_to_message`、导致用户引用回复（如"这个呢？"）时 agent 丢失上下文的缺陷。
  https://github.com/agentscope-ai/CoPaw/pull/8338

- **PR #8519 [OPEN] fix(hub): 保留共享 Docker 运行时数据所有权** — 针对非 root Hub 重启 Docker 运行时出现 `EACCES` 的问题（与 Issue #8517 直接对应），处理容器以 root 初始化配置、原子保存替换 inode 导致的所有权丢失。
  https://github.com/agentscope-ai/CoPaw/pull/8519

- **PR #8512 [OPEN] fix(providers): 从错误文本中读取网关上报的状态码** — 扩展 `extract_status_code()` 解析逻辑，对应 Issue #8505 的 502 误分类问题。
  https://github.com/agentscope-ai/CoPaw/pull/8512

- **PR #7211 [OPEN，长期挂起] fix(runtime): 防止注入上下文持久化** — 自 2026-08-21 创建，今日仍有更新，目标是让 `HookContext.inject_context()` 提供的请求级上下文仅对当前模型调用可见，不落盘为用户轮次或可检索历史（关联 #6360、#6358）。
  https://github.com/agentscope-ai/CoPaw/pull/7211

**整体推进评估**：今日实质闭环仅 1 条 PR，其余均为待合并状态。但修复 PR 与 Issue 的一一配对率较高，若评审提速，短期内可一次性清理多条稳定性问题。

---

## 4. 社区热点

- **Issue #8315（4 条评论，今日最热）[Bug] 飞书渠道在注入 HTTP(S)_PROXY 但 NO_PROXY 未含 feishu.cn 时报 426 Upgrade Required**
  自 2026-10-19 创建、今日仍活跃，WebSocket 长连接反复失败导致飞书渠道完全无法连接。
  https://github.com/agentscope-ai/CoPaw/issues/8315

- **Issue #8511（2 条评论）[Bug] 飞书渠道在上一条消息处理中时收到新消息，间歇性抛出 `ProviderError: No active model configured`**
  已在 v2.2.2 与 v2.3.0-beta.1 复现，说明并非 beta 引入的回归。
  https://github.com/agentscope-ai/CoPaw/issues/8511

- **Issue #8505（2 条评论）[Bug] OpenAI 兼容网关的裸 APIError 被归为 `unknown`，不重试、不切换模型**
  https://github.com/agentscope-ai/CoPaw/issues/8505

- **Issue #8517（2 条评论）[Bug] 非 root 运行 Hub 时 Docker 运行时因 `working/config.json` 权限被拒而无法启动**
  https://github.com/agentscope-ai/CoPaw/issues/8517

**背后诉求**：热点高度集中在"生产部署可用性"——代理环境、并发消息、非 root 容器、第三方网关，均是真实部署中最常见的边界条件，用户期望的是健壮的重试/降级与清晰的错误语义，而非排查源码。

---

## 5. Bug 与稳定性

按严重程度排序：

1. **🔴 Issue #8515 — 受限环境（fnOS 应用沙箱）启动即崩（import 阶段失败）**
   v2.3.0b2（PyPI wheel）。根因：`dependency_maintenance.py` 的 `state_root()` 优先按 pwd home 推导锁根目录，绕过 `$HOME`，且覆盖变量 `QWENPAW_DEPENDENCY_STATE_DIR` 未在文档中说明。**进程无法启动，无 fix PR。**
   https://github.com/agentscope-ai/CoPaw/issues/8515

2. **🔴 Issue #8513 — 安全：shell 包裹的外发动作（SMTP 发送 / HTTP POST / @file-to-network）在 AUTO/SMART 级别下无告警、无审批**
   同时存在 `tool_guard` 与治理两条检测链路的盲区。涉及数据外泄风险，**无 fix PR**。
   https://github.com/agentscope-ai/CoPaw/issues/8513

3. **🟠 Issue #8315 — 飞书渠道代理环境下 426 错误、完全无法连接**
   **无 fix PR。**
   https://github.com/agentscope-ai/CoPaw/issues/8315

4. **🟠 Issue #8517 — 非 root Hub 的 Docker 运行时启动失败（EACCES）**
   **已有 fix PR #8519。**
   https://github.com/agentscope-ai/CoPaw/issues/8517 · https://github.com/agentscope-ai/CoPaw/pull/8519

5. **🟠 Issue #8505 — OpenAI 兼容网关裸 APIError 被误分类为 `unknown`，无重试与模型回退**
   **已有 fix PR #8512。**
   https://github.com/agentscope-ai/CoPaw/issues/8505 · https://github.com/agentscope-ai/CoPaw/pull/8512

6. **🟡 Issue #8511 — 飞书渠道并发消息时 `No active model configured`**
   间歇性，**无 fix PR。**
   https://github.com/agentscope-ai/CoPaw/issues/8511

7. **🟡 Issue #8521 — 对话常出现无答复内容；Ctrl+C 复制需多次按键；新版 UI 反应迟缓**
   v2.2.2.post1，用户不确定是模型问题还是应用问题。**无 fix PR。**
   https://github.com/agentscope-ai/CoPaw/issues/8521

8. **🟡 Issue #8516 — `/api/console/chat` SSE 缺少 `X-Accel-Buffering: no`，nginx 反代下首个事件被缓冲**
   https://github.com/agentscope-ai/CoPaw/issues/8516

---

## 6. 功能请求与路线图信号

- **Issue #8518 — 在 Console 聊天 UI 显示单条回复延迟**
  当前仅有 Token 消耗统计（按日期/模型），无耗时数据。属轻量仪表盘类需求，**尚无对应 PR**，短期纳入概率中等。
  https://github.com/agentscope-ai/CoPaw/issues/8518

- **PR #8409 — 新增 QQ C2C 流式消息支持**（对应 Issue #8307）
  基于官方 `POST /v2/users/{user_openid}/stream_messages` 实现 `on_streaming_start/delta/end` 钩子，受既有 streaming 开关控制。已挂起 7 天，若评审通过，QQ 渠道体验将与其他渠道对齐。
  https://github.com/agentscope-ai/CoPaw/pull/8409

- **PR #8520 — `/approval` 等控制命令按 agent 配置语言回复**
  当前硬编码中文，英文 agent 在 Telegram 上仍收到中文审批提示。小而直接的国际化修复，首次贡献者提交。
  https://github.com/agentscope-ai/CoPaw/pull/8520

- **PR #8514 — desktop 构建打包 `visual_compression` 字形图集资源**
  修复 PyInstaller 冻结版因 `_data_dirs` 未包含该目录而缺失资源的问题，[size/XS]，易于合入。
  https://github.com/agentscope-ai/CoPaw/pull/8514

- **PR #8510 — 进一步加速插件单测**
  测试基础设施改进，[size/XL]，有助于缓解 CI 压力。
  https://github.com/agentscope-ai/CoPaw/pull/8510

**下一版本可能纳入**：#8512、#8514、#8519、#8520 体积小、指向明确，属高概率候选；#8409 视评审进度；#8518 需先有实现。

---

## 7. 用户反馈摘要

- **部署环境碎片化是最大痛点**：用户在 fnOS NAS 应用沙箱（#8515）、nginx 反代（#8516）、代理注入（#8315）、非 root 容器（#8517）四类环境中均遭遇阻塞，且多为"启动即失败"级别。用户对"未文档化的覆盖变量"（`QWENPAW_DEPENDENCY_STATE_DIR`）与构建资源清单缺失（#8514）表达了明确不满——期望配置项有文档、有可发现的错误提示。
- **渠道并发与上下文问题**：飞书用户遇到上一条未处理完时新消息触发模型配置错误（#8511）；Telegram 用户此前遇到引用回复丢失上下文（#8338 已修复）——渠道适配器的边界处理仍是体验短板。
- **交互流畅度抱怨**：Issue #8521 用户明确表示"新版 UI 没有旧版高效、操作反应迟缓"，并主动请求**增加 UI 切换按钮以回到旧版**，同时反映 Ctrl+C 复制在 Chrome 与 Edge 下均需多次按键。
- **安全预期落差**：#8513 报告者在 AUTO 模式下发现外发 shell 动作既无告警也无审批，反映出用户对"自动模式下仍应有外发出口管控"的安全预期未被满足。
- **满意度信号**：多数 Issue 在报告后 1–4 条评论内得到回应，且多处 Bug 当日即有修复 PR，响应及时性获一定认可；但积压 PR（如 #7211 逾两月）与关闭率偏低可能削弱长期信心。

---

## 8. 待处理积压

- **PR #7211（自 2026-08-21 起挂起，逾 2 个月）** — `fix(runtime): prevent injected context from persisting`，标签 `ready-for-human-review`、`Under Review`，首次贡献者。关联 #6360、#6358。今日仍有更新但未见合并，**建议优先安排人工评审**，否则存在贡献者流失风险。
  https://github.com/agentscope-ai/CoPaw/pull/7211

- **Issue #8315（自 2026-10-19 起未解，12 天）** — 飞书代理环境 426 错误，影响面为"完全不可用"，且今日仍有讨论。**建议尽快给出 NO_PROXY 文档说明或自动探测方案。**
  https://github.com/agentscope-ai/CoPaw/issues/8315

- **Issue #8513（安全，自 2026-10-30）** — 治理/工具护栏检测盲区，属安全类高优先级问题，需维护者明确设计取舍。
  https://github.com/agentscope-ai/CoPaw/issues/8513

- **PR #8409（自 2026-10-24，7 天未评审）** — QQ C2C 流式消息支持，功能完整且关联已有 Issue #8307，建议纳入评审队列。
  https://github.com/agentscope-ai/CoPaw/pull/8409

---

**健康度小结**：修复响应速度快（Issue→PR 当日配对多次出现）、社区讨论活跃；主要风险在于**关闭率偏低**（今日 0 Issue 关闭）、**安全护栏缺口**与**长期挂起 PR 的评审瓶颈**。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报（2026-10-31）

## 1. 今日速览

项目今日处于**高强度维护期**，但缺乏收敛信号：过去 24 小时 Issues 更新 37 条（36 条新开/活跃，仅 1 条关闭），PR 更新 50 条且**全部仍处于待合并状态，0 条合并/关闭**，无新版本发布。今日最突出的事件是安全研究员 IftekharUddin 集中提交了 **10+ 条安全类 Bug**（#12138–#12147 区间连续编号），其中多条被标为 S1 级，覆盖沙箱逃逸、凭据泄露、审批绕过等高风险面。同时，Audacity88 维护的多个大型 ZeroCode/Runtime PR（#11589、#11730、#11456 等）仍在长期挂起，部分标记 `needs-author-action` 或 `needs-maintainer-review`。整体活跃度**很高**，但合并吞吐为**零**，review 带宽是当前项目健康度的主要瓶颈。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日**无已合并或已关闭的 PR**，项目在代码主干上未实质向前推进。以下 PR 处于活跃更新状态，但均未合入：

- 运营商可覆盖超限成本限制（XL，`risk:high`）：[PR #11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)，标记 `needs-author-action`
- 前台 delegate 的工具调用在父 turn 中可见（XL）：[PR #11730](https://github.com/zeroclaw-labs/zeroclaw/pull/11730)，标记 `needs-author-action`
- 可选子进程内存看门狗（XL）：[PR #11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)
- ZeroCode 无取消刷新聚焦会话（XL）：[PR #11457](https://github.com/zeroclaw-labs/zeroclaw/pull/11457)
- 针对今日 Bug 的修复 PR 已出现，形成配对：[PR #12163](https://github.com/zeroclaw-labs/zeroclaw/pull/12163) 修复 musl 更新问题（对应 #12156），[PR #12164](https://github.com/zeroclaw-labs/zeroclaw/pull/12164) 修复 PowerShell 缓存竞争（对应 #12152），[PR #12150](https://github.com/zeroclaw-labs/zeroclaw/pull/12150) 修复 Seatbelt 正则转义（关联 #12139 方向）

**评估**：管线充实但出口堵塞，50 个待合并 PR 中多个为 XL 规模且带 `risk:high`/`needs-maintainer-review` 标签，维护者 review 负载显著偏重。

## 4. 社区热点

- **[PR #11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)**（`feat(runtime)` 成本覆盖）：涉及 12 个 channel 子系统与 runtime，`risk:high`、`size:XL`，是今日标签面最广的 PR。诉求指向成本超限后只能重启 daemon 的刚性痛点。
- **[Issue #11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)**（RAG 知识语料检索 RFC，8 条评论）：今日评论数最多的议题，讨论让 agent 基于运营商自有文档、语言/工具文档与 OS 参考作答，触及"能力边界"级新子系统。
- **[Issue #10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)**（Matrix `send_via` 把对端用户身份当房间目的地，6 条评论，`status:accepted`）：已接受但仍在跟进，反映 channel 集成的身份模型不精确。
- **[Issue #11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703)**（3 条评论）：延迟 MCP 工具激活改动 system prompt，导致 prompt 缓存失效，是成本敏感型用户的实际关注点。

**分析**：热点集中在"成本控制"与"能力扩展（RAG/多 agent）"两条主线，与今日成批出现的安全类 Bug 共同构成当前社区关注的三角。

## 5. Bug 与稳定性

按报告严重度排列。多数今日新增安全 Bug **尚无对应 fix PR**。

**S1（工作流阻断）**
- [#12143](https://github.com/zeroclaw-labs/zeroclaw/issues/12143) MCP stdio 服务器继承 daemon 全部环境变量，含 `ZEROCLAW_*` provider key、channel token 与审计签名密钥；其他 spawner 均已清空环境并转发 allowlist。凭据泄露给第三方代码。**无 fix PR**
- [#12142](https://github.com/zeroclaw-labs/zeroclaw/issues/12142) daemon 自身 config/data 目录未对 agent 禁止，`file_read` 在 `level="full"`、`workspace_only=false` 或 home 级 workspace 下可取 `.secret_key`、`config.toml`、`gateway-admin.token`、OTP/WebAuthn 密钥。主密钥泄露。**无 fix PR**
- [#12141](https://github.com/zeroclaw-labs/zeroclaw/issues/12141) `/admin/shutdown`、`/admin/reload`、`/admin/sop/*` 仅凭 loopback 对端地址授权，被 allowlist 解释器执行的 workspace 脚本可清除 `OutOfBandRequired` 审批门并停掉 daemon。**无 fix PR**
- [#12138](https://github.com/zeroclaw-labs/zeroclaw/issues/12138) 原生 runtime 以 `zsh -c` 运行登录 shell，先 source `~/.zshenv`；可写的 `~/.zshenv` 成为绕过命令 allowlist 的持久化执行钩子。**无 fix PR**

**S2（降级行为）**
- [#12146](https://github.com/zeroclaw-labs/zeroclaw/issues/12146) MCP SSE 客户端接受服务器 `endpoint` 事件中的绝对 URL 并携带 secret header 投递，可被重定向到任意源（含 daemon 自身 loopback 管理路由）。**无 fix PR**
- [#12145](https://github.com/zeroclaw-labs/zeroclaw/issues/12145) 插件 store 仅限制单个线性内存与实例数，仍保留 wasmtime 默认的每 store 10,000 memory / 10,000 table 上限，插件可提交数千倍于内存预算的资源。**无 fix PR**
- [#12144](https://github.com/zeroclaw-labs/zeroclaw/issues/12144) `file_upload` / `file_upload_bundle` / `file_edit` 走 write 层授权，仅具 `Write` 权限的兄弟 workspace 可被读取其文件内容。**无 fix PR**
- [#12139](https://github.com/zeroclaw-labs/zeroclaw/issues/12139) `default_forbidden_paths()` 未覆盖 macOS 密钥目录（`~/Library/Keychains` 等）及 `~/.netrc`、`~/.git-credentials`、`~/.npmrc`、`~/.docker/config.json`、`~/.kube/config`、shell history 等凭据点文件。**相关修复方向见 [PR #12150](https://github.com/zeroclaw-labs/zeroclaw/pull/12150)（Seatbelt 正则转义）**
- [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) Matrix `send_via` 把对端用户身份当作房间目的地，`status:accepted`。**无 fix PR**
- [#12156](https://github.com/zeroclaw-labs/zeroclaw/issues/12156) `zeroclaw update` 固定下载 glibc 包，musl 安装（Alpine/musl 预构建）无法自更新。**已有 fix：[PR #12163](https://github.com/zeroclaw-labs/zeroclaw/pull/12163)**
- [#12050](https://github.com/zeroclaw-labs/zeroclaw/issues/12050) OIDC 回调令牌页面无浏览器绑定，存在登录 CSRF。**无 fix PR**

**S3（次要）**
- [#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703) 延迟 MCP 工具激活改动 system prompt、击穿 prompt 缓存（仅 `mcp.deferred_loading=true`），成本类问题。**无 fix PR**
- [#12155](https://github.com/zeroclaw-labs/zeroclaw/issues/12155) 取消 quickstart 提示"No config written"，但 `~/.zeroclaw/config.toml` 实际已生成。**无 fix PR**
- [#12154](https://github.com/zeroclaw-labs/zeroclaw/issues/12154) `install.sh` 摘要行显示构建 commit 而非版本号（显示为 `v(99bd353)`）。**无 fix PR**
- [#12153](https://github.com/zeroclaw-labs/zeroclaw/issues/12153) glibc 主机若装有 musl 包，`install.sh` 误判为 musl 并安装 musl 构建。**无 fix PR**
- [#12147](https://github.com/zeroclaw-labs/zeroclaw/issues/12147) 审计日志以默认权限创建于 0755 config 目录内，且 `agent_alias` 位于哈希链之外，本地其他用户可读工具调用历史，同用户进程可无痕改写归属。**无 fix PR**

**已关闭**
- [#12081](https://github.com/zeroclaw-labs/zeroclaw/issues/12081)（S1）memory_store 工具调用持续失败，环境为 ik_llama.cpp + jinja + Qwen3.6 35B A3B。

另一值得关注的是 [#12158](https://github.com/zeroclaw-labs/zeroclaw/issues/12158)：对 fork 做安全扫描识别出 15 项发现，其中 5 项已在上游修复（带来源归属移植），**10 项仍未修复**，并提供了参考实现。

## 6. 功能请求与路线图信号

- **RAG 知识语料检索**（[Issue #11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)，`type:rfc`、`risk:high`）：面向 operator 自有文档的检索能力，属新子系统/项目级能力边界。目前无实现 PR，仍处 RFC 讨论阶段，短期内进入下一版本的可能性较低。
- **成本限制运行时覆盖**（[PR #11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)）：`cost.allow_override` 已有文档但无实现，本 PR 补上运行时机制。代码已就绪，仅卡 review，是**最可能先落地**的功能项。
- **前台 delegate 工具调用可见性**（[PR #11730](https://github.com/zeroclaw-labs/zeroclaw/pull/11730)）：提升多 agent 委派的可观测性。
- **子进程内存看门狗**（[PR #11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)）：新增 `runtime_profiles.<alias>.shell_max_memory_mb`，默认关闭，面向 shell 与 skill 子进程的资源治理。
- **ZeroCode 体验族**（[#11457](https://github.com/zeroclaw-labs/zeroclaw/pull/11457)、[#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727)、[#11621](https://github.com/zeroclaw-labs/zeroclaw/pull/11621)、[#11633](https://github.com/zeroclaw-labs/zeroclaw/pull/11633)）：会话刷新、重启后恢复开放会话、turn 中插话引导、从 transcript 打开本地文件路径。方向清晰但多为 `needs-author-action`。

## 7. 用户反馈摘要

- **成本焦虑**：prompt 缓存被工具激活动作击穿（#11703）、成本超限后只能重启 daemon（#11589），均指向用户对 token/成本可预测性的强烈需求。
- **本地化模型使用场景**：用户在 ik_llama.cpp + jinja 下运行 Qwen3.6 35B A3B 并遇到 memory 工具失败（#12081），是典型的自托管大模型接入场景，该问题已关闭。
- **安装与升级体验不佳**：musl/glibc 判定错误、版本号显示为 commit、取消 quickstart 仍写配置（#12153/#12154/#12155/#12156），四条同日报告显示安装路径的体验债务集中爆发。
- **安全预期落差显著**：安全研究者以"专业扫描 + 参考实现"的方式提出 10 项未修复漏洞（#12158），叠加 #12138–#12147 的连续 S1/S2 报告，说明用户群体对沙箱、密钥隔离、审批完整性的期望高于当前实现水平。
- **集成细节诉求**：Matrix 身份与房间的语义混淆（#10926）说明多 channel 场景下用户对身份模型精确性的要求。

## 8. 待处理积压

- **[Issue #11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)**（RAG RFC，创建于 2026-09-29，至今 32 天）：评论最多但无推进 PR，`needs-author-action`，需明确是否立项。
- **[Issue #10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)**（Matrix 身份 Bug，创建于 2026-09-17，44 天，`status:accepted`）：已接受却无 fix PR，长期悬置。
- **[PR #11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)** 与 **[PR #11457](https://github.com/zeroclaw-labs/zeroclaw/pull/11457)**（均创建于 2026-10-02，近 30 天）：XL 规模、带 `distinguished contributor` 标签，长期未合入。
- **[PR #11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)**（创建于 2026-10-07，24 天，`risk:high`、`needs-author-action`）：功能性 PR 停滞时间较长。
- **[Issue #12158](https://github.com/zeroclaw-labs/zeroclaw/issues/12158)**（今日新增但需优先响应）：报告 10 项未修复漏洞且附参考实现，应尽快分配责任人，避免与 #12138–#12147 的独立报告重复排查。
- **整体积压风险**：50 个待合并 PR 中多条带 `needs-maintainer-review`，建议维护者明确 review 排期或按风险分层推进小规模 PR（如 #12084、#12164、#12163、#12150），先恢复主干流动。

---
*数据来源：zeroclaw-labs/zeroclaw GitHub Issues 与 Pull Requests，统计窗口 2026-10-30 至 2026-10-31。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*