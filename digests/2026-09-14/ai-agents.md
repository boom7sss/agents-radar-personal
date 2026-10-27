# OpenClaw 生态日报 2026-09-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-14 14:24 UTC

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

# OpenClaw 项目日报 — 2026-09-14

## 1. 今日速览

过去 24 小时项目维持极高活跃度：500 条 Issue 更新（286 条新开/活跃，214 条关闭）、500 条 PR 更新（331 条待合并，169 条已合并/关闭），但**零版本发布**。今日主线集中在**稳定性收尾**：更新/升级可靠性（2026.9.3 / 2026.9.4）、Gateway 崩溃循环、会话状态与消息丢失三类问题占据讨论榜首。关闭侧有实质进展，包括 Codex turn-completion 回归（#88312）、会话卡死恢复（#76038）、插件版本偏差（#135776）等高关注问题的关闭。待合并 PR 存量（331 条）明显偏高，且多个 P0/P1 修复仍标注 `clawsweeper:needs-maintainer-review`，**合并吞吐已成为当前主要瓶颈**。

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

## 3. 项目进展

今日无新版本，进展主要体现在合并/关闭侧：

- **#88312 [CLOSED]** Codex app-server turn-completion stall 回归（2026.5.27 起）已关闭，该问题为 #84076 的回归，此前由 #85107 修复 — [链接](https://github.com/openclaw/openclaw/issues/88312)
- **#141252 [CLOSED]** 2026.9.2 回复运行报错 "Reply operation has no active tool authority snapshot" 已关闭 — [链接](https://github.com/openclaw/openclaw/issues/141252)
- **#135776 [CLOSED]** `openclaw update` 遗留精确锁定版本官方渠道插件（core/plugin 版本偏差，导致 Discord 加载失败）已关闭 — [链接](https://github.com/openclaw/openclaw/issues/135776)
- **#27445 [CLOSED]** sub-agent 完成公告路由 `announceTarget` 功能请求关闭 — [链接](https://github.com/openclaw/openclaw/issues/27445)
- **#108435 [CLOSED]** 升级至 2026.7.1 后 Gateway 无法启动（P0）已关闭 — [链接](https://github.com/openclaw/openclaw/issues/108435)
- **#76038 [CLOSED]** Stuck Session Recovery 双重失效 + 会话预处理耗时（P1）已关闭 — [链接](https://github.com/openclaw/openclaw/issues/76038)

PR 侧已合并/关闭 169 条，代表性条目：
- **#148181 [CLOSED]** `fix(nodes)`：worker 拒绝终止事件时保留已取消的 turn，避免取消被误记为失败 — [链接](https://github.com/openclaw/openclaw/pull/148181)
- **#127722 [CLOSED]** `chore(release)`：2026.8.1-beta.3 候选版本评审面 — [链接](https://github.com/openclaw/openclaw/pull/127722)

整体判断：项目在**更新/升级链路与崩溃循环类高优问题上明显向前推进**，但当日关闭量（214 Issue / 169 PR）相对新增活跃量仍属消耗存量，净积压未见下降。

## 4. 社区热点

今日讨论最集中的条目：

| 条目 | 状态 | 评论 | 核心诉求 |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用之间的文本泄漏到消息渠道 | OPEN / P1 / 🦞 | 40 | 会话状态 + 安全：Agent 的中间文本（错误处理、确认、叙述）被直接投递到 Slack/iMessage |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) 未回收的 hook/tool 子进程导致僵尸进程累积 | OPEN / P1 / 🦪 | 30 | 崩溃循环 + 消息丢失：长时间运行后运行时性能退化 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent 完成静默丢失 | OPEN / P1 / 🦞 | 28 | 无重试、无通知、超时不自动重启（Telegram forum 场景） |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hook relay 产生 CPU 密集进程并阻塞 Gateway RPC | OPEN / **P0** / 🦪 | 23 | crash-loop：Codex 集成下短生命周期进程风暴 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) Codex turn-completion 停滞回归 | CLOSED / P1 / 🐚 | 22 | 多工具 Agent turn 稳定失败（👍5） |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) 同步 Agent 持久化与 transcript 维护阻塞 Gateway 事件循环 | OPEN / P1 / 🦞 | 20 | 规模下的会话状态与崩溃循环 |

分析：评论区高度集中在**「静默失败」类问题**——消息丢失、完成事件丢失、无重试/无通知。用户诉求已从「功能缺失」转向「可观测性与失败可见性」；#25592 与 #102175 均带 `impact:security` 标签，说明中间态数据泄漏正被当作安全议题对待。

## 5. Bug 与稳定性

按严重程度排列：

**P0 / 崩溃循环**
- [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hook relay 进程风暴阻塞 Gateway RPC — 无 fix PR
- [#146860](https://github.com/openclaw/openclaw/issues/146860) Windows：Scheduled Task 使用 `LogonType: InteractiveToken` 时托管更新交接无法获取进程启动身份，卡在 `activating` — 无 fix PR
- [#145510](https://github.com/openclaw/openclaw/issues/145510) 更新失败 `runtime-verification-failed`（2026.9.3，Windows）— `needs-info`
- [#145192](https://github.com/openclaw/openclaw/issues/145192) 2026.9.2 → 2026.9.4 托管更新在 candidate-Doctor 阶段确定性失败并回滚 — 无 fix PR
- [#145252](https://github.com/openclaw/openclaw/issues/145252) [Tracking] 2026.9.3 / 2026.9.4 更新、升级与恢复可靠性（maintainer 主导协调）

**P1 / 高影响**
- [#144911](https://github.com/openclaw/openclaw/issues/144911) MCP server init 超时（30s）崩溃整个 Gateway，子进程清理路径未处理 rejection — **已有清晰修复形态**（`fix-shape-clear` / `queueable-fix`）
- [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸子进程累积 — 无 fix PR
- [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent 完成静默丢失 — 无 fix PR
- [#25592](https://github.com/openclaw/openclaw/issues/25592) 工具调用间文本泄漏 — 关联 PR 已开
- [#119720](https://github.com/openclaw/openclaw/issues/119720) 同步持久化阻塞事件循环 — 无 fix PR
- [#125764](https://github.com/openclaw/openclaw/issues/125764) Telegram 出站发送单次失败即死信，无重试/无对账 — 无 fix PR

**P2 / 回归**
- [#146004](https://github.com/openclaw/openclaw/issues/146004) Subagent 完成在 2026.9.3 触发无渠道的 dashboard 心跳 turn（回归）— 无 fix PR

**已关闭（今日消除的稳定性风险）**
- [#140162](https://github.com/openclaw/openclaw/issues/140162) Windows gateway restart 在 181s 超时后误杀已就绪 Gateway
- [#99586](https://github.com/openclaw/openclaw/issues/99586) Gateway 相关操作后运行时工具面板返回空白
- [#75767](https://github.com/openclaw/openclaw/issues/75767) macOS SMB 挂载卷导致 `gateway restart` 挂起

总体看，**P0 问题中有 4 条无 fix PR**，且集中在 Windows 平台与更新交接路径，是当前稳定性最大缺口。

## 6. 功能请求与路线图信号

- [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` 选项用于 sub-agent 完成公告路由（👍5）— **今日已关闭**，信号：sub-agent 编排消息流可能进入实现阶段
- [#52640](https://github.com/openclaw/openclaw/issues/52640) 长时渠道 turn 的持久任务状态面板（👍2）— OPEN，与 #25592（中间文本泄漏）诉求互补
- [#74077](https://github.com/openclaw/openclaw/issues/74077) `/stream` 斜杠命令切换预览流模式（👍1）— 已关闭，`linked-pr-open`
- [#48788](https://github.com/openclaw/openclaw/issues/48788) 多编码 Content-Disposition 的集中式文件名编码工具（Feishu 中文文件名场景）— OPEN，`needs-product-decision`

判断：**sub-agent 完成路由与流式输出控制**最可能进入下一版本，因两者都有 open 关联 PR 或已关闭的请求线索；任务状态面板仍停留在产品决策阶段。

## 7. 用户反馈摘要

- **失败不可见是最强痛点**：多个高赞 Issue 一致指向「静默丢失」——#44925（完成丢失）、#125764（Telegram 发送死信）、#146004（错误心跳）。用户反复强调 "no retry, no notification"。
- **升级路径脆弱**：#145252、#145510、#145192 共同描述 2026.9.2 → 2026.9.4 更新在 Windows/macOS 上的失败与回滚，用户报告 Gateway 完全无法启动（#108435，👍3）。
- **平台特定摩擦**：Windows 用户（#146860、#140162）与 macOS SMB 用户（#75767）报告环境相关挂起，说明非 Linux 路径测试覆盖不足。
- **渠道侧细节影响可用性**：Feishu 流式卡片内容无法被搜索（#74767）、Telegram 长格式回复解析耗时（PR #148285 报告解析时间减少 23%）。
- **安全与数据边界敏感**：#25592 与 #102175 显示用户开始关注会话状态与 prompt cache 跨边界泄漏。

## 8. 待处理积压

- [#48788](https://github.com/openclaw/openclaw/issues/48788) 创建于 2026-03-17，标记 `stale` / P3，20 条评论仍无结论，`needs-product-decision` 与 `needs-maintainer-review` 双挂起
- [#69208](https://github.com/openclaw/openclaw/issues/69208) 创建于 2026-04-20，maintainer 主导的「重复 transcript / replay / 上下文组装」umbrella issue，跨渠道问题已挂 15 条评论仍未收敛
- [#102175](https://github.com/openclaw/openclaw/issues/102175) 创建于 2026-07-08，prompt cache 跨边界失效，标记 `stale` + `needs-security-review` + `needs-live-repro`
- [#114414](https://github.com/openclaw/openclaw/issues/114414) 日期化 TODO 清扫机器人报告，列出 `src/plugins/compat/registry-records.ts:360` 等**已逾期**待清理项
- **PR 侧存量压力**：331 条待合并，其中 [#134886](https://github.com/openclaw/openclaw/pull/134886)（XL，Workboard 卡片删除顺序，`waiting on author`）自 2026-09-01 起滞留；#123037（CI artifact 验证 gh api 无超时，自 2026-08-13）仍 `waiting on author`
- [#145192](https://github.com/openclaw/openclaw/issues/145192) 与 [#145510](https://github.com/openclaw/openclaw/issues/145510) 均为 P0 且无 fix PR，建议优先分配维护者资源

---
*数据来源：OpenClaw GitHub 仓库 2026-09-14 过去 24 小时活动快照。所有链接、状态标签与评论数均取自本次供给数据，未作外部补充。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**数据日期：2026-09-14｜样本：12 个项目**

---

## 1. 生态全景

个人 AI 助手与自主智能体生态已从"功能竞赛"整体转入**稳定性与可观测性攻坚期**：头部项目（OpenClaw、CoPaw、ZeroClaw、Hermes Agent）单日 Issue+PR 更新量均在 50–100 条量级，但**当日全部 12 个项目零版本发布**，说明迭代重心在收尾而非扩功能。共同痛点高度收敛于四类：**静默失败**（消息丢失、完成事件丢失、无重试/无通知）、**多写者存储/状态损坏**（WAL 冲突、会话丢失）、**升级与安装路径脆弱**（Windows/SMB/嵌入式环境尤甚）、以及**外部依赖缺乏超时降级**。与此同时，**"待合并 PR 积压"成为跨项目的系统性瓶颈**——OpenClaw（331）、ZeroClaw（41）、CoPaw（39）、NanoClaw（28）、Hermes（34）、LobsterAI（14）无一例外，审查吞吐已取代代码产能成为主要约束。生态呈现"输入旺盛、输出受限"的共性特征，治理流程（RFC、决策队列、审批策略）正同步成为项目自身的吞吐瓶颈。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃·关闭） | PR 更新（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（286·214） | 500（331·169） | 无 | 极高活跃，稳定性收尾；331 条 PR 积压为最大瓶颈，4 条 P0 无 fix PR |
| **CoPaw** | 44（30·14） | 50（39·11） | 无 | 高活跃，审查淤积（3.6:1），内存/OOM 与安全边界缺陷密度偏高 |
| **ZeroClaw** | 26（20·6） | 50（41·9） | 无 | 高活跃，治理/架构议题占榜首；多条 size:XL、risk:high 长尾阻塞 |
| **Hermes Agent** | 50（39·11） | 50（34·16） | 无 | 高强度迭代，state.db/WAL 损坏类未闭环，修复验证流程受质疑 |
| **NanoClaw** | 5（—·2） | 29（28·1） | 无 | 高活跃、低合流；28:1 失衡，Mattermost/Ollama 长堆叠链待清 |
| **LobsterAI** | 1（—·—） | 24（14·10） | 无 | 中等偏高但结构性偏斜，几乎全为依赖升级；核心链路缺陷 stale 半年 |
| **NanoBot** | 1（0·1） | 22（10·12） | 无 | 高活跃维护，集中攻坚 cron 边界校验；社区评论数据缺失 |
| **IronClaw** | 1（—·—） | 6（5·1） | 无 | 中等偏低，仅依赖维护 + MCP 诊断，无功能推进 |
| **Moltis** | 1（0·1） | 2（1·1） | **1（20260913.02）** | 中等偏低，推理等级配置闭环完成；Release Notes 内容缺失 |
| **PicoClaw** | 5（3·2） | 2（0·2，均 stale） | 无 | 中等偏上讨论、代码层零推进；stale 机制吞掉真实问题 |
| **NullClaw** | 4（2·0） | 0（0·0） | 无 | 低，"输入多产出少"；两条新 Issue 带推广性质 |
| **ZeptoClaw** | 1（0·1） | 1（0·1） | 无 | 低产出高闭环；CI 安全审计修复当日闭环 |
| **TinyClaw** | 0 | 0 | 无 | 静默 |

> 注：OpenClaw 数量级为其他项目一个量级以上；括号内为「新开/活跃·关闭」与「待合并·合并/关闭」。

---

## 3. OpenClaw 在生态中的定位

**规模优势。** OpenClaw 单日 1000 条 Issue+PR 更新，是第二梯队（CoPaw、ZeroClaw、Hermes，各 70–100 条）的约 10 倍，第三梯队（NanoClaw、NanoBot、LobsterAI，20–30 条）的数十倍。其生态系统地位类似"参照实现"——其他项目在代码中直接移植其修复（Hermes PR #98954 明确标注"移植自 openclaw#129924"），说明 OpenClaw 的架构与修复实践已成为同类的参考基线。

**技术路线差异。** OpenClaw 强调 **Gateway 中心化架构 + Codex/app-server 集成 + 渠道多路复用（Slack/iMessage/Telegram/Feishu）**，问题面因此集中在 Gateway 崩溃循环、会话状态一致性、跨渠道文本泄漏（#25592 带 `impact:security` 标签）。这与 CoPaw 的桌面端优先（Windows 10/11 为主反馈来源）、ZeroClaw 的 local-first/security-first + 多主机边缘网格、Hermes 的 profile 多路复用 + JIT Context Engine 路线清晰区分。OpenClaw 的复杂度也带来更高的故障表面积：P0 问题中 4 条无 fix PR，集中在 Windows 平台与更新交接路径。

**社区规模与治理。** OpenClaw 是唯一呈现"维护者主导协调"特征的项目——设有 #145252 更新可靠性 tracking issue、#69208 transcript umbrella issue，且 P0/P1 修复普遍带 `clawsweeper:needs-maintainer-review` 标签，说明已有分层审查与自动化清扫机制。但这也使其合并吞吐成为最显著的瓶颈（331 条待合并）。相比之下，ZeroClaw 的治理瓶颈表现为**显式 RFC 流程摩擦**（#10549 要求取消 48/72 小时强制讨论期），Hermes 则表现为**修复验证流程缺口**（#110769 用户按指引更新后问题复现重开）——两者是不同成熟度阶段的治理问题，而 OpenClaw 已进入"审查产能"阶段。

---

## 4. 共同关注的技术方向

以下方向在**多个项目独立涌现**，信号强度最高：

### （1）静默失败与可观测性缺失 —— 跨 6 个项目

| 项目 | 具体诉求 |
|---|---|
| OpenClaw | #44925 subagent 完成静默丢失、"no retry, no notification"；#125764 Telegram 单次失败即死信 |
| CoPaw | #7709 定时任务无输出、结果被折叠进 thinking |
| ZeroClaw | #10721 knowledge 工具被静默丢弃；#10842 Telegram reaction 报成功但不干活 |
| Hermes | 修复验证不被信任（#110769 重开） |
| PicoClaw | #3351 session 原始记录被物理删除，用户质问"为什么没有真正持久化" |
| LobsterAI | #1035 重连去重缓存未清空，正常消息静默丢弃 |

**核心诉求**：报成功但不干活、失败无提示、结果不可见——用户诉求已从"功能缺失"转向"**失败可见性与可观测性**"。

### （2）状态/存储并发写入可靠性 —— 跨 4 个项目

- **Hermes**：#100896（state.db 5 周损坏 4 次）、#110848（virtiofs 受控复现）、#109966（WAL 世代交接）——同一损坏类多点证据聚合，PR #110914 fail-closed 为缓解非根治。
- **CoPaw**：#7722（三条内存增长路径）、#7222（运行 2 天涨至 20.7 GB）。
- **OpenClaw**：#119720（同步持久化阻塞 Gateway 事件循环）、#25592（会话状态跨边界泄漏）。
- **ZeroClaw**：#10320/#10837/#10533（配置写入路径缺少统一校验层）。

### （3）升级/安装路径脆弱 —— 跨 5 个项目

- **OpenClaw**：#145192/#145510 P0 更新失败并回滚（Windows/macOS）。
- **NanoClaw**：#3787 fresh setup 静默错选 provider、#3791 隐式全局依赖、#3801 更新覆盖本地修改。
- **LobsterAI**：依赖升级"关闭—重建"循环（mermaid/vite/react-dom 均重建）。
- **Hermes**：#87503 codex refresh token 写回缺失吊销轮换族。
- **PicoClaw**：#1545 聚合修复 PR 悬挂半年后关闭，关联修复状态不明。

### （4）外部依赖超时/降级 —— 跨 3 个项目

- **NanoBot** #2804：DuckDuckGo `ddgs.text` 无限挂起阻塞整个会话（存续 5 个月）。
- **NullClaw** #871（被引用）：DDG 默认搜索在弱设备上表现问题；#993 自托管 Firecrawl 端点硬编码。
- **OpenClaw** #144911：MCP server init 超时崩溃整个 Gateway。

### （5）本地模型 / 自托管 provider 支持 —— 跨 4 个项目

- **NanoClaw**：Ollama provider payload、单命令安装、provider 引擎接缝（#3546/#3547/#3548，堆叠 19 天）。
- **NullClaw**：#975 复用 grok.com 订阅；#993 自托管 Firecrawl。
- **Hermes**：#73943 自定义 provider 被静默丢弃；#110874 JIT Context Engine（支持本地 7B/9B）。
- **ZeroClaw**：#10826 ZeroCode 会话根目录显式化。

### （6）上下文/Token 成本控制 —— 跨 3 个项目

- **Hermes**：#110868 persona 文件 129 KB 被静默截断、"每一轮都付全额 token 成本"；PR #110874 声称 47% wire token 削减。
- **ZeroClaw**：PR #9535 context_compact_ratio 按模型窗口比例锚定。
- **CoPaw**：PR #7703 Visual Compact 改进。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道助手 + Codex 集成 | 多渠道个人/团队 | Gateway 中心化，插件系统，渠道多路复用 |
| **CoPaw** | 桌面端 Agent + 记忆系统 | Windows 桌面开发者、插件工作流 | 桌面优先，ReMe 记忆后端，ACP 权限协议 |
| **ZeroClaw** | Local-first 安全 Agent | 自托管/多主机运营者 | Rust，Native/Docker/Firejail/Bubblewrap 多运行时，家庭边缘网格 RFC |
| **Hermes Agent** | Profile 多路复用 gateway | 企业/多 profile 场景 | profile 强制迁移，JIT Context Engine，Desktop Electron |
| **NanoClaw** | 渠道接入（Mattermost）+ 本地模型 | 自托管渠道用户 | Skill 化 setup 验证，容器化 agent 组，Ollama 接缝 |
| **NanoBot** | cron/调度 + WebUI | 通用助手用户 | 调度子系统，Dream 记忆写入边界 |
| **LobsterAI** | IM 网关（NimGateway） | IM 集成用户 | Electron + better-sqlite3，依赖现代化 |
| **IronClaw** | MCP 诊断 + 安全 | Rust/MCP 生态 | wasm 依赖，clawbench 基准追踪 |
| **Moltis** | 推理等级配置 | 偏好细粒度控制用户 | 共享 effort 枚举抽象 |
| **PicoClaw** | 嵌入式可运行助手 | 低性能设备/RISC-V 用户 | Go，JSONL 存储，多语言 i18n |
| **NullClaw** | 轻量搜索后端 | 无密钥/自托管用户 | Zig，多 CLI provider 子进程模式 |
| **ZeptoClaw** | 最小实现 | Rust CI/安全实践者 | Rust，RustSec 审计链 |

**关键分化轴**：（a）**部署形态**——桌面端（CoPaw/Hermes Desktop）vs 服务器 Gateway（OpenClaw/Hermes）vs 嵌入式（PicoClaw）vs 边缘网格（ZeroClaw）；（b）**语言栈**——Rust（ZeroClaw/IronClaw/ZeptoClaw）vs Go（PicoClaw/NanoBot）vs Zig（NullClaw）vs Electron/TS（LobsterAI/Hermes）；（c）**依赖哲学**——订阅复用/自托管（NullClaw）vs 云 provider（Hermes/OpenClaw）。

---

## 6. 社区热度与成熟度

**第一层 · 极高活跃（快速迭代）**
- **OpenClaw**：唯一达到"维护者分层治理 + 自动化清扫"阶段，但合并吞吐见顶。
- **CoPaw / ZeroClaw / Hermes**：开发吞吐旺盛，均处"提交快于合并"阶段，缺陷密度高，属**高速迭代 + 稳定性欠债并行**。

**第二层 · 结构性活跃（局部攻坚）**
- **NanoClaw / NanoBot**：单主题集中攻坚（Mattermost 链 / cron 校验群），合流不足。
- **LobsterAI**：活跃度高但**几乎全为依赖维护**，核心链路（#1035）长期 stale，实质迭代停滞。
- **IronClaw**：依赖维护 + 诊断修复，无功能推进，属**低强度维持**。

**第三层 · 质量巩固 / 低产出**
- **Moltis**：单功能闭环 + hook 修复待合并，小步稳定。
- **ZeptoClaw**：**低产出高闭环**，当日唯一问题 4 天内闭环，健康度稳定。
- **PicoClaw**：讨论活跃但**代码层零推进**，`[stale]` 机制吞掉真实问题（#3350/#3351），**积压处理存在隐忧**。
- **NullClaw**：输入多产出少，无 PR 更新，两条新 Issue 带推广性质。

**第四层 · 静默**
- **TinyClaw**：24 小时零活动。

**成熟度判据**：仅 OpenClaw（分层审查 + tracking issue）与 ZeroClaw（RFC 流程 + ADR + 决策队列）表现出**制度化治理特征**；CoPaw/Hermes 处"高吞吐 + 验证流程缺口"中间态；PicoClaw 的 stale 自动关闭与 LobsterAI 的 stale 长期悬挂则暴露**治理机制误伤真实问题**的风险。

---

## 7. 值得关注的趋势信号

**1. "失败可见性"已成为一等公民需求。**
六个项目独立涌现"静默失败"类报告，用户反复强调 "no retry, no notification"。产品意义上的"报成功但不干活"比"明确报错"更损害信任。**对开发者的建议**：将失败分类、重试计数、死信对账、结果可见性纳入核心设计，而非事后补丁。

**2. 修复验证流程存在系统性缺口。**
Hermes #110769 用户按官方指引更新后问题仍复现，被迫重开；OpenClaw 需 214 条关闭来消化存量。**"已修复"判定不可信**正在成为跨项目信任成本。建议引入"复测门槛"与"回归用例绑定"。

**3. 存储层多写者架构是未解难题。**
Hermes 的 WAL 损坏类问题在 fleet 重启、virtiofs、Podman 三种环境下复现，PR #110914 的 fail-closed 被明确定位为"缓解而非根治"。这提示**单机多进程/多写者 SQLite 模式在 agent 场景下已触及架构极限**，长期方案可能需转向 WAL 多写者协调或独立存储进程。

**4. 本地模型 / 自托管 provider 是明确的用户侧动机。**
NanoClaw Ollama 链、NullClaw 订阅复用、Hermes JIT Context Engine（本地 7B/9B）、ZeroClaw 多主机聚合——四条独立路线指向同一诉求：**降低对云端计费 API 的绑定**。同时 OpenAI 兼容接口的边界问题（NanoBot #5765 `"stream": "false"` 真值误判）显示本地 provider 适配层仍不成熟。

**5. 上下文成本控制成为核心竞争力。**
Hermes person 文件 129 KB 被截断、ZeroClaw 按模型窗口锚定压缩比例、CoPaw Visual Compact——**token 经济学正从"优化项"变为"必选项"**。声称 47% wire token 削减的 PR 值得作为路线图信号跟踪。

**6. 治理流程本身成为吞吐瓶颈。**
ZeroClaw RFC 讨论期摩擦、OpenClaw 331 条 PR 积压、CoPaw 3.6:1 失衡、NanoClaw 28:1 堆积——**"提交速度 > 审查速度"是全生态共性**。堆叠 PR（Mattermost 链、Ollama 链）与单作者集中提交（CoPaw zhijianma 6 条）加剧分支冲突累积。对维护者的参考：批量评审、堆叠链按序清空、为高风险长尾 PR 设明确处置结论（采纳 / 拒绝 / 关闭），比逐条讨论更高效。

**7. `[stale]` 自动化关闭存在误伤风险。**
PicoClaw #3350/#3351（数据丢失 + 低端设备卡顿）与 LobsterAI #1035（IM 消息静默丢失）均为**高质量根因报告**却被 stale 吞掉/长期悬挂。建议对"数据持久化""性能回归""安全"类标签设置 stale 豁免。

**8. 安全与数据边界敏感度上升。**
OpenClaw #25592/#102175 带 `impact:security`；CoPaw #7727（越界写入沙箱失效）、#7769（本地 API 匿名暴露 MCP 配置）；ZeroClaw 审批策略 PR #9724。**Agent 的中间态数据、prompt cache、本地 API 边界**正被当作安全议题对待。

---

**总体判断**：该生态已越过"能不能跑"的阶段，进入"**跑得稳不稳、失败能不能看见、成本能不能控、多主机/多写者架构能不能撑住**"的深水区。对技术决策者的核心提示是——**评估此类项目时，PR 合并吞吐、修复验证机制、失败可观测性设计，比功能清单更能预测长期可用性**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-14

## 1. 今日速览

NanoBot 今日处于**高活跃维护状态**：24 小时内产生 22 条 PR 更新（10 条待合并、12 条已合并/关闭），无新版本发布，Issues 侧仅 1 条关闭记录。当日 PR 流呈现出明显的**集中攻坚 cron/调度子系统**的特征——FanouZeng-TT 单人在 09-14 一天内提交了 5 条围绕 cron 与 API 边界校验的修复 PR，同时另一批（#5686、#5751）已被关闭，说明调度相关的正确性问题正被系统性清理。已合并/关闭的改动还覆盖了 provider 流式超时、内存写入权限、WebUI 布局与文档刷新，项目在稳定性与可用性两条线上同时向前推进。整体健康度良好，但**今日无评论数可观测（多数 PR 评论数为 undefined/0）**，社区讨论热度无法从当前数据中确认，且积压中存在跨月未合并的功能型 PR（如 #4919、#5601）。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日已合并/关闭的 12 条 PR 中，以下几条实质性推进了项目能力与稳定性：

**稳定性修复（已关闭）**
- **#5686** `fix(cron): defer timer rearming while jobs execute`（Kuang-xianxin）：修复 cron 回调编辑 job store 时 `_arm_timer()` 取消正在执行该回调的 timer task，导致 turn 收到 `CancelledError` 的问题。关闭了定时任务执行期的一类竞态。
- **#5751** `fix(cron): preserve pending runs when editing automation details`（beemines）：修复仅编辑自动化名称/说明时错误重算下次执行时间，造成 interval 任务被推迟、到期 cron 被跳过、到期一次性任务 `next_run_at_ms=None` 的问题。
- **#5730** `fix: stream internal model calls with idle timeouts`（chengyongru）：Dream 等无 UI stream 回调的内部任务此前选用非流式请求，模型耗时超过 120 秒会反复触发 OpenAI 兼容 HTTP 超时并耗尽 runner。改为流式 + idle 超时，属对长任务可靠性的重要改进。
- **#5760** `fix(webui): adapt chat toolbar to available width`（chengyongru）：宽屏下聊天头部占用对话空间、窄屏悬浮控件遮挡消息；现改为在可用宽度 ≤72rem 时切换为紧凑布局。
- **#5743** `fix(webui): simplify settings catalog controls and headings`（Re-bin）：Automations 默认视图改为 Calendar，状态过滤器收进按钮，用户视图隐藏系统任务。

**文档与语义澄清（已关闭）**
- **#5684** `docs: refresh README with current WebUI feature gallery`（chengyongru）：保留原有安装与快速开始结构，新增 WebUI 与终端能力的可视化导览。
- **#5734** `fix(memory): clarify Dream prompt write permissions`（chengyongru）：Codex 此前会拒绝在 `/dream` 期间更新记忆，因为共享身份提示与内存 skill 禁止编辑 Dream 管理的文件；现在写边界统一在 identity 中定义，仅 Dream 任务可编辑 profile 与长期记忆文件。

整体来看，今日的合并把**调度器正确性**和**长时任务超时韧性**两个高风险区域各推进了一步，同时清理了 WebUI 与文档层面的体验债。

## 4. 社区热点

**今日唯一有明确评论记录的条目是关闭的 Issue #2804**，其余列出的 15 条 PR 评论数均显示为 `undefined` 或 0，因此本节仅能基于现有数据进行有限判断：

- **Issue #2804** [CLOSED] `web_search via DuckDuckGo hangs indefinitely, blocking all messages on session`
  作者 hoaresky｜创建 2026-04-05｜更新 2026-09-14｜评论 4｜👍 0
  链接：HKUDS/nanobot Issue #2804
  这是今日讨论量最高的条目（4 条评论），也是唯一在 5 个月后（4 月创建、9 月关闭）才闭环的问题，说明该缺陷的定位与关闭耗时较长。诉求核心：当 DuckDuckGo 作为 web search 提供方（显式指定或作为 fallback）时，`asyncio.to_thread(ddgs.text, ...)` 可能无限期挂起，阻塞 agent 的消息处理管线并导致 gateway 受影响。由于该调用位于同步线程桥接层，挂起会同时拖垮整个会话的所有消息——这是**单点阻塞式故障**，对多用户 gateway 的影响面较大。评论 4 条但 👍 为 0，说明讨论可能集中在复现与定位，而非广泛共鸣。

其余 PR 虽在 09-14 集中更新，但缺乏评论数据支撑，暂不列为社区热点。

## 5. Bug 与稳定性

按影响面排序今日出现的缺陷与修复：

**高严重度**
1. **web_search 无限挂起阻塞整个会话** — Issue #2804（已关闭）
   `ddgs.text` 在线程中挂起 → 阻塞 agent 消息管线 → 影响 gateway。已关闭，但摘要中未提供关联 fix PR 编号，关闭依据未在数据中说明。
   链接：HKUDS/nanobot Issue #2804

**中严重度（均已有对应 fix PR，今日新开）**
2. **cron 接受互斥调度字段并静默丢弃** — PR #5766（OPEN，FanouZeng-TT）
   `every_seconds` / `cron_expr` / `at` 本应互斥，旧逻辑取首个 truthy 字段，静默丢弃其余设定。可导致任务按非预期频率执行。
   链接：HKUDS/nanobot PR #5766
3. **cron 接受过去时间的一次性调度并报成功** — PR #5762（OPEN，FanouZeng-TT，标注 regression）
   过去的 `at` 值被接受且返回成功，但 `_compute_next_run` 返回 `None`，任务保持 enabled 却永不触发。
   链接：HKUDS/nanobot PR #5762
4. **FallbackProvider 半开探测并发失控** — PR #5764（OPEN，FanouZeng-TT）
   主链路冷却期结束后，可用性检查仅比较冷却时间戳，并发请求可同时穿透，突破「半开仅放行一次探测」的设计。
   链接：HKUDS/nanobot PR #5764
5. **edit_file 删除行边界导致内容损坏** — PR #5761（OPEN，KailBug，标注 regression）
   行内后缀后的换行被删除，相邻行被拼接，破坏合法内容。
   链接：HKUDS/nanobot PR #5761

**中低严重度**
6. **OpenAI 兼容接口 `stream` 真值判断错误** — PR #5765（OPEN，FanouZeng-TT）
   `"stream": "false"` 因字符串真值被判定为流式，错误切换到 SSE 模式。
   链接：HKUDS/nanobot PR #5765
7. **多模态字段类型非法时未返回 400** — PR #5763（OPEN，FanouZeng-TT）
   畸形多模态 JSON 字段类型未被归类为客户端错误，且 413 应仅保留给超大文件上传。
   链接：HKUDS/nanobot PR #5763
8. **WebUI 拒绝消息后残留副作用** — PR #5601（OPEN，KDB-Wind，**标注 conflict**）
   被拒消息可能遗留已保存附件或 WebSocket 订阅，在 admission/dispatch 失败及 `session_mentions` 规范化期间取消时未回滚。
   链接：HKUDS/nanobot PR #5601

**已关闭的相关回归修复**：#5686（cron timer 重入竞态）、#5751（编辑自动化细节丢失待执行运行）、#5730（内部模型调用超时耗尽 runner）。

## 6. 功能请求与路线图信号

今日数据中的功能型输入有限，主要为：

- **Telegram 渠道支持自定义 Bot API 基址与额外请求头** — PR #4919（OPEN，nolanchic，创建 2026-07-14）
  实现 Issue #4702，为 `TelegramConfig` 增加 `api_base` 等可选字段，使 Telegram channel 可指向自建 Bot API 服务器或企业网关，替代硬编码的 `https://api.telegram.org`。标注 `channel, feature, test, priority: p2`，已开放约两个月仍在待合并状态。
  链接：HKUDS/nanobot PR #4919

**纳入下一版本的判断**：从今日集中关闭的 cron/provider/memory 类修复以及同日新开的一批 p2 校验类 PR 看，短期版本重心更可能落在**调度与 API 边界正确性**上，而非新渠道能力。Telegram 自建网关支持（#4919）具备明确的上游 Issue 与测试覆盖，是当前积压中最接近可合并的功能项，但仍受待合并队列与自身时长拖累。需注意：**今日数据未提供任何已公布路线图、里程碑或下一版本号**，上述判断仅为基于 PR 状态与标签的推断。

## 7. 用户反馈摘要

从今日可获得的数据中，可提炼的真实反馈集中在两点：

- **搜索提供方挂起导致整会话不可用（Issue #2804，hoaresky）**：用户痛点不是搜索失败本身，而是失败方式——`asyncio.to_thread(ddgs.text, ...)` 无限挂起会**阻塞该会话的全部消息处理**，并把 gateway 一并拖入异常。这反映出用户在生产/多用户场景下对「外部依赖必须可超时、可降级」的强需求：DuckDuckGo 既可能是显式选择也可能是 fallback，意味着即便主通道正常，回退路径仍可能成为单点。该 Issue 从 4 月持续到 9 月才关闭（4 条评论），侧面反映此类挂起问题定位成本高。
- **Dream 记忆写入被拒（关联 PR #5734）**：Codex 在 `/dream` 期间会拒绝更新记忆，因为共享身份提示与内存 skill 禁止编辑 Dream 管理的文件——属于**规则冲突导致的用户体验摩擦**，而非能力缺失。修复方式是将写边界单点定义在 identity 中，属于典型的多处规约不一致问题。

除上述外，今日数据未包含其他用户评论内容，无法进一步提炼满意度或使用场景。多数 PR 评论数为 undefined，社区互动强度无法确证。

## 8. 待处理积压

以下条目在今日数据中呈现明显滞留特征，建议维护者优先关注：

1. **PR #4919** — `feat(telegram): support custom Bot API base URL and extra headers`
   创建 2026-07-14，至 09-14 已开放**约 2 个月**仍为 OPEN。有明确上游 Issue #4702、含测试、p2 优先级，是积压中最成熟的功能型 PR。
   链接：HKUDS/nanobot PR #4919
2. **PR #5601** — `fix(webui): roll back rejected message side effects`
   创建 2026-08-29，开放**约 2 周**且标注 `[conflict]`。冲突未解决使其无法进入合并流程，涉及附件与 WebSocket 订阅的资源泄漏，建议尽快 rebase。
   链接：HKUDS/nanobot PR #5601
3. **Issue #2804** — 从 2026-04-05 创建到 2026-09-14 关闭，**存续约 5 个月**，是数据中生命周期最长的条目。虽已关闭，但摘要未体现关联 fix PR，建议确认是否已有代码层修复落地，避免仅关闭工单而缺陷仍在。
   链接：HKUDS/nanobot Issue #2804
4. **cron 校验类 PR 集中未合并（#5766、#5765、#5764、#5763、#5762）** — 均为 09-14 当日新开、同一作者、同一 p2 级别，且都涉及边界校验与回归。若合并流程延迟，这些正确性问题将持续存在于主分支，建议批量评审以降低往返成本。
   链接：HKUDS/nanobot PR #5766｜#5765｜#5764｜#5763｜#5762

---

**数据说明**：本报告仅基于所提供的 NanoBot GitHub 数据生成。15 条展示 PR 的评论数均标记为 `undefined`，故第 4 节无法给出可靠的「讨论最活跃」排序；今日无 Releases、无新开/活跃 Issue，相关小节依据数据如实省略或限缩。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-14

## 1. 今日速览

过去 24 小时项目维持高强度迭代：Issues 更新 50 条（新开/活跃 39、关闭 11），PR 更新 50 条（待合并 34、已合并/关闭 16），无新版本发布。当日活跃度集中在 **state.db 多写者 WAL 损坏类问题**（#100896、#109966、#110848 等多条并行讨论与修复）以及 **网关/配置多路复用战役**（#109417 跟踪中）。合并/关闭侧以止损与回归修复为主（如 #107721、#106737、#109964 关闭，#98954 合并）。整体健康度：**响应速度快、修复产出持续，但 P0/P1 存储层与流式问题仍未闭环**，建议关注系统性风险是否随 PR #110914 落地而收敛。

---

## 2. 版本发布

今日无新版本发布，亦无 Releases 记录。

---

## 3. 项目进展

今日合并/关闭侧动作（数据仅提供标题级信息）：

- **[CLOSED] Issue #107721** — Desktop 更新后运行时加载插件全部失败（"Cannot convert undefined or null to object"），以 duplicate 关闭。链接：NousResearch/hermes-agent Issue #107721
- **[CLOSED] Issue #106737** — `heartbeat_fire_claim` 在 `save_jobs` 期间持有 `fire_fence_lock` 导致误判 failed 状态，以 duplicate 关闭。链接：NousResearch/hermes-agent Issue #106737
- **[CLOSED] Issue #87503** — `_save_codex_tokens()` 不回写全局 auth store，导致 profile 级刷新吊销轮换族，已关闭。链接：NousResearch/hermes-agent Issue #87503
- **[CLOSED] Issue #109964** — 同模型后台 review 可能解析出与网关父会话不同的缓存作用域（P0，sweeper:risk-caching），已关闭。链接：NousResearch/hermes-agent Issue #109964
- **[CLOSED] PR #98954** — `computer_use` 屏幕未变化时不再重发图像（性能优化，移植自 openclaw#129924），已合并/关闭。链接：NousResearch/hermes-agent PR #98954

**推进方向判断**：今日关闭项集中于“重复问题收敛 + 缓存/性能/认证写回”三类收尾，属于稳定性维护而非新功能增量。真正的前瞻性推进（如 PR #110914 state.db 维护拒绝活持有者、PR #110874 JIT Context Engine）仍处于待合状态，项目今日向前迈进的幅度为**中等偏维护型**。

---

## 4. 社区热点

按评论数排序的焦点讨论：

| 条目 | 类型 | 评论 | 链接 |
|---|---|---|---|
| #110591 Discord Markdown 表格/状态字段渲染层 | Feature (P3) | 13 | NousResearch/hermes-agent Issue #110591 |
| #109966 fleet 重启时 WAL 世代交接，长活持有者阻塞新 opener 数小时 | Bug (P2) | 10 | NousResearch/hermes-agent Issue #109966 |
| #100896 state.db 5 周内损坏 4 次（gateway+dashboard 多写者 WAL） | Bug (P0) | 9 | NousResearch/hermes-agent Issue #100896 |
| #110769 更新到 upstream main 后流式仍在大上下文挂起（重开 #29418） | Bug (P1) | 6 | NousResearch/hermes-agent Issue #110769 |
| #98503 Desktop clarify 卡片从不渲染，事件在传输路由丢失 | Bug (P1) | 6 | NousResearch/hermes-agent Issue #98503 |

**背后诉求分析**：
- 评论榜首是 **Discord 渲染体验**（#110591），说明 gateway 侧平台适配已进入“呈现质量”阶段，用户不再满足于“能发出消息”。
- 剩余高热度几乎全部指向 **state.db / WAL 并发写入的存储可靠性**（#109966、#100896、#110848），且在多个环境（fleet 重启、virtiofs bind mount、Podman applehv）复现，属于同一损坏类的多点证据聚合。
- #110769 是**已被关闭又重开的回归**（#29418），说明“current main 已修复”的判定未通过复测，用户信任成本在上升。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

**P0**
- **#100896** — state.db 5 周内损坏 4 次，gateway+dashboard 多写者 WAL；"5 live SessionDB handles" 警告在校验发生前 7 分钟触发。**未标注对应 fix PR**。链接：NousResearch/hermes-agent Issue #100896

**P1**
- **#110848** — 受控复现：virtiofs bind mount 上并发 WAL 写者 1 分钟内报 "database disk image is malformed"，同负载 ext4 下 30 分钟无异常。**未标注 fix PR**。链接：NousResearch/hermes-agent Issue #110848
- **#110769** — 更新至 upstream main（5eb99eb2）后大上下文流式仍挂起，重开 #29418。**未标注 fix PR**。链接：NousResearch/hermes-agent Issue #110769
- **#98503** — Desktop clarify 卡片从不渲染，`clarify.request` 事件在传输路由丢失（后端日志显示 tool 执行成功）。**未标注 fix PR**。链接：NousResearch/hermes-agent Issue #98503
- **#98394** — Desktop Electron renderer 空转 30–65% CPU 的永久重渲染循环（👍1）。**未标注 fix PR**。链接：NousResearch/hermes-agent Issue #98394
- **#73943** — 选择自定义 provider 后请求被发往默认云 provider，`providers:` 条目无法通过 model 字符串触达。**未标注 fix PR**。链接：NousResearch/hermes-agent Issue #73943

**P2**
- **#109966** — fleet 重启期间 WAL 世代交接，长期持有者停留在已删除的 `-wal`/`-shm` 上并阻塞所有新 opener 数小时；报告者已在 `743140cd8` 复测。链接：NousResearch/hermes-agent Issue #109966
- **#83903** — `max_tokens=64` 截断导致自动标题返回原始 JSON 片段（如 `{"title"`）。链接：NousResearch/hermes-agent Issue #83903
- **#69031** — Gemini 原生 v1beta 的 401 Auth 与 400 Invalid Argument schema 错误（needs-decision）。链接：NousResearch/hermes-agent Issue #69031
- **#110812** — `file_sync` 硬杀进程会泄漏未压缩全树 temp tar，直至磁盘写满、agent 无法启动。链接：NousResearch/hermes-agent Issue #110812

**已有相关修复 PR（结构维护方向）**
- **PR #110914** — 第二进程对 state.db 的结构维护（`doctor --fix` checkpoint、schema repair）在任何其他进程持有数据库时拒绝执行，未知状态 fail-closed。直接回应存储并发风险族。链接：NousResearch/hermes-agent PR #110914
- **PR #110913** — 长时间本地渲染在关闭 stdout 后不再于 5 秒被误报完成。链接：NousResearch/hermes-agent PR #110913
- **PR #110876** — 归档行释放标题给活动请求者（修复 #110871，Bot Mode canonical chat 归档后 bot 损坏）。链接：NousResearch/hermes-agent PR #110876
- **PR #110852** — Kanban 按 run id 隔离过期预算 finalizer。链接：NousResearch/hermes-agent PR #110852
- **PR #110851** — 主本地描述符无 profile 时恢复 last-used profile（修复 #110819）。链接：NousResearch/hermes-agent PR #110851
- **PR #110470** — 插件 hook 回调按调用身份而非仅工具名做 busy gate（并发同工具调用被折叠）。链接：NousResearch/hermes-agent PR #110470

---

## 6. 功能请求与路线图信号

- **#110591 Discord Markdown 渲染层**（P3，评论 13）— 现状是表格被转成项目符号列表，丢失列对齐且无法突出短状态字段。若采纳，将新建 gateway/discord 渲染层。链接：NousResearch/hermes-agent Issue #110591
- **#110868 用户 AGENTS.md 的触发式模块加载**（P3，cache-safe、pre_llm_call 注入）— 报告者 persona 文件已达 ~129 KB（87k 字符），超出 `context_file_max_chars` 后被静默头尾截断。与 **PR #110874 JIT Context Engine**（声称 47% wire token 削减、支持本地 7B/9B 模型）方向高度一致，可能被合并进同一叙事。链接：NousResearch/hermes-agent Issue #110868 / PR #110874
- **#34786 provider 内推理参数被拒时的自动降级**（P3）— `/reasoning high` 或切换模型触发 HTTP 400。链接：NousResearch/hermes-agent Issue #34786
- **#108875 FUI 界面**（P3，comp/desktop）— 提出者附了设计图，方向尚模糊。链接：NousResearch/hermes-agent Issue #108875
- **#109417 profile 多路复用作为唯一 gateway 模式**（跟踪 issue，teknium1 发起）— 目标为默认 profile 上一条 `hermes gateway run` 服务全部 profile，且用户无法区分；这是强制迁移的门槛。链接：NousResearch/hermes-agent Issue #109417
- 已在 PR 侧的功能落地信号：**PR #110846** hindsight retain 对齐 + 幂等异步 retain（client 0.10.0）；**PR #110296** 桌面端在 agent 工作过程中实时查看工具/子智能体图像；**PR #110843** 连接卡片每行单动作、Continue 是唯一出口（NS-869 leg one）。链接：NousResearch/hermes-agent PR #110846 / PR #110296 / PR #110843
- **i18n 扩张信号**：PR #101305 为 Bot Mode 插件目录新增德语包，指出插件 catalog 无 per-key fallback（要么完整要么缺失）。链接：NousResearch/hermes-agent PR #101305

**下一版本可能纳入的判断**：`#110874` JIT Context Engine 与 `#110868` 触发式 AGENTS.md 加载，因直击上下文成本这一被反复抱怨的痛点，最有可能进入下一版本讨论；`#109417` 因涉及强制迁移与安全边界（sweeper:risk-security-boundary），节奏更可能由维护者主导。

---

## 7. 用户反馈摘要

- **存储可靠性是最大不满来源**：用户在生产环境反复遭遇 state.db 损坏（#100896 单主机 5 周 4 次），并开始提供受控复现器（#110848 virtiofs 对比 ext4）与精确复测 commit（#109966 报告者复测 `743140cd8`）。这是典型“用户已从抱怨转为协助定位”的阶段，但耐心有限。
- **“已修复”判定不被信任**：#110769 用户按 #29418 指引更新到 latest main（5eb99eb2，约 472 commits past v0.21.2）后问题依旧，被迫重开。修复验证流程存在缺口。
- **企业/多 profile 场景痛点明确**：#87503 反映 codex refresh token 单次使用特性下，profile 级刷新会吊销整个轮换族；#73943 反映自定义 provider 选择被静默丢弃、请求发往默认云 provider——属于“配置写了但不生效”的高挫败类问题。
- **上下文与 token 成本是持续抱怨点**：#110868 用户 persona 文件 129 KB 被静默截断，同时抱怨“每一轮都付全额 token 成本”。
- **桌面端体验短板**：渲染器空转 30–65% CPU 且聊天内容闪烁（#98394）、clarify 卡片完全不出（#98503）、插件运行时加载全挂（#107721，已关闭为重复）。
- **平台呈现细节被认真对待**：#110591 得到最高评论数，说明 Discord 用户群已成规模且在意输出可读性。
- **正面信号**：多名用户（如 PR #110878 作者）在 README Community 区推广第三方工具 Calyx（MIT 许可、基于 libghostty 的 macOS 终端，可在并行面板中与其他编码 agent 并排运行 Hermes），说明生态外延在自然生长。链接：NousResearch/hermes-agent PR #110878

---

## 8. 待处理积压

长期未闭环、且今日仍在被触达的重要条目：

| 条目 | 创建日 | 已存续 | 状态与风险 |
|---|---|---|---|
| **#100896** state.db 损坏 ×4（P0） | 2026-09-02 | ~12 天 | P0 且无对应 fix PR，同类问题持续新增证据。链接：NousResearch/hermes-agent Issue #100896 |
| **#98503** Desktop clarify 卡片不渲染（P1） | 2026-08-30 | ~15 天 | 标记 awaiting-reporter，但事件路由丢失已很具体。链接：NousResearch/hermes-agent Issue #98503 |
| **#98394** Desktop 渲染循环（P1） | 2026-08-30 | ~15 天 | 有 👍 但无 fix PR。链接：NousResearch/hermes-agent Issue #98394 |
| **#83903** 自动标题返回 JSON 片段（P2） | 2026-08-11 | ~34 天 | 修复面小、定位明确，长期未处理。链接：NousResearch/hermes-agent Issue #83903 |
| **#73943** 自定义 provider 被丢弃（P1） | 2026-07-29 | ~47 天 | 配置类 P1，影响所有自定义 provider 用户。链接：NousResearch/hermes-agent Issue #73943 |
| **#69031** Gemini v1beta 401/400（P2） | 2026-07-22 | ~54 天 | 标记 needs-decision，报告者已自带修复。链接：NousResearch/hermes-agent Issue #69031 |
| **#34786** 推理参数被拒自动降级（P3） | 2026-05-29 | ~108 天 | 跨模型切换的常见摩擦点。链接：NousResearch/hermes-agent Issue #34786 |

**维护者关注建议**：
1. `#100896` / `#110848` / `#109966` 应被视为*同一损坏类*统一处置，PR #110914 的 fail-closed 策略是缓解而非根治，需明确 WAL 多写者架构的长期方案。
2. `#73943` 与 `#69031` 均已存在超过一个半月且影响面清晰，宜尽快给出取舍决定（needs-decision 不应成为长期状态）。
3. PR 待合并队列达 34 条，其中 #110470（P1 插件 hook busy gate）、#110876（P2 归档标题释放）风险标签明确，建议优先排序以防积压演变为回归。

---

*本日报数据来源：Hermes Agent (github.com/nousresearch/hermes-agent) 于 2026-09-14 的 GitHub 动态摘要；所有条目均以提供的数据为限，未作外部补充。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-14

## 1. 今日速览

今日 PicoClaw 无新版本发布，社区活跃度中等偏上：过去 24 小时共 5 条 Issue 更新（3 条新开/活跃、2 条关闭）与 2 条 PR 关闭，无待合并 PR。讨论热度集中在两个长期存在的老问题上——Web UI 输入卡顿（#3281、#3350）与 IRC 长消息支持（#3287），二者合计占据今日大部分评论量。值得注意的是，两条被关闭的 Issue（#3351、#3350）均带有 `[stale]` 标签，说明它们是在长期无维护者响应后被自动关闭，而非问题真正解决，这暴露出积压处理的隐忧。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日共有 2 个 PR 被关闭，且**均无合并迹象**（待合并 PR 数为 0）：

- **PR #3348** `[CLOSED] [stale] i18n: complete Czech code wrap labels`（作者 KrtCZ，创建 2026-08-29，更新 2026-09-13）——捷克语代码包裹标签的 i18n 补全。该 PR 带有 `[stale]` 标签，属长期未推进后被关闭。
  链接: sipeed/picoclaw PR #3348
- **PR #1545** `[CLOSED] fix: merge PR #1500 #1490 #1488 #1487 #1485`（作者 xuwei-xy，创建 2026-03-14，更新 2026-09-13）——试图合并多个开放 PR 的修复。该 PR 自 2026 年 3 月创建，历经约半年后关闭，说明这批修复最终未能以该聚合方式落地。
  链接: sipeed/picoclaw PR #1545

**整体判断**：今日项目在代码层面没有向前推进——没有 PR 被合并，关闭的两个 PR 均为 stale。项目健康度在代码合入维度上偏弱，积压的修复 PR（尤其 #1545 关联的一批修复）需要维护者重新评估。

## 4. 社区热点

今日讨论最活跃的三个议题（按评论数排序）：

1. **Issue #3287** `[OPEN] [Feature] Better support long messages in IRC`（12 条评论，👍0，作者 superuser-does）
   链接: sipeed/picoclaw Issue #3287
   诉求：让 PicoClaw 理解 IRCv3 上超过 512 字节的长消息应被视为一条完整连贯的消息。IRC 默认 512 字节限制与换行即新消息的规则，导致长消息被错误拆分。这是仍在开放、评论最多的功能请求。

2. **Issue #3281** `[OPEN] [BUG] Web UI chat input is very laggy when history has a little bit long`（11 条评论，👍2，作者 xpader）
   链接: sipeed/picoclaw Issue #3281
   诉求：Web UI 在会话历史稍长时输入框明显卡顿（环境：PicoClaw 0.3.1、Go 1.25.11、PicoClaw Web 频道）。这是今日唯一获得 👍 反应的活跃 Issue，且与另一条关闭的 #3350 指向同一体验痛点。

3. **Issue #3351 / #3350**（各 2 条评论，均已关闭为 stale）
   链接: sipeed/picoclaw Issue #3351 ｜ sipeed/picoclaw Issue #3350
   诉求：分别反映"自动压缩物理删除 session 原始记录导致历史不可找回"与"嵌入式/低性能设备上 Web UI 打字卡顿"。

**背后信号**：用户关注点高度集中在两类问题——(a) 低性能设备与长历史场景下的 Web UI 性能；(b) 数据持久化与可追溯性。同时，两条同类问题（#3281 与 #3350）一条开放、一条被 stale 关闭，说明同类反馈在被拆分后部分被积压机制吞掉，值得维护者合并处理。

## 5. Bug 与稳定性

按严重程度排列：

- **【高】Web UI 长历史输入卡顿** — Issue #3281（OPEN，👍2，11 评论，影响 PicoClaw Web，版本 0.3.1）
  链接: sipeed/picoclaw Issue #3281
  同类问题 Issue #3350（CLOSED/stale）专门指向 RV1106、RISC-V 等低性能嵌入式设备上的 Launcher Web UI 卡顿。
  链接: sipeed/picoclaw Issue #3350
  **是否已有 fix PR：无。** 今日无相关 PR。

- **【中】session 原始记录被自动压缩物理删除** — Issue #3351（CLOSED/stale）
  链接: sipeed/picoclaw Issue #3351
  用户定位到根因疑似在 `pkg/memory/jsonl.go` 的 `JSONLStore` 并非纯 append-only 日志：平时 `AddMessage` 是 append-only，但压缩逻辑会重写并删减 `.jsonl` 文件本身（非前端显示问题）。
  **是否已有 fix PR：无。** 该问题被关闭为 stale，但数据丢失风险实际未解决，建议重新开启评估。

## 6. 功能请求与路线图信号

- **IRC 长消息合并支持**（Issue #3287，OPEN，12 评论）
  链接: sipeed/picoclaw Issue #3287
  需求明确、讨论充分、针对 IRCv3 的 512 字节限制提出消息重组。属于边界清晰的增强请求，具备纳入下一版本的潜力；但由于今日无相关 PR，短期内落地可能性需观察。

- **OpenCode Go 会话头支持**（Issue #3369，OPEN，👍2，1 评论，作者 w33ble）
  链接: sipeed/picoclaw Issue #3369
  需求：OpenCode Go 请求需附带 `x-opencode-session` 头并与当前会话关联（仅适用于 OpenCode Go，不适用于标准 OpenCode Zen）。作者指出 PicoClaw 已跟踪 session ID，说明改造工作量可能较小。**这是今日最有可能被快速采纳的功能请求**——需求具体、已有 session 基础设施、且有 👍 支持，但当前同样无对应 PR。

## 7. 用户反馈摘要

从今日 Issues 提炼的真实痛点：

- **性能痛点集中在低端设备与长会话**：用户 xpader 报告 Web UI 输入框在历史稍长时卡顿（#3281）；用户 chentianxiong123 进一步指出在 RV1106、RISC-V 等嵌入式硬件上"每输入一个字符都有明显延迟"（#3350）。这反映出 PicoClaw 作为可跑在嵌入式设备上的助手，其 Web UI 前端在大历史下的渲染/状态处理未针对低性能硬件优化。
- **数据持久化信任危机**：用户 chentianxiong123 在 #3351 中直接查看 `.jsonl` 文件确认内容"真的变少了"，并明确质问"为什么没有真正持久化存储"。这不仅是功能缺陷，更影响用户对数据安全性的信任。
- **集成兼容诉求**：IRC 用户希望长消息不被错误拆分（#3287），OpenCode Go 用户希望会话头正确传递（#3369），反映用户正在将 PicoClaw 接入更多外部协议与渠道。

**不满意的主要方面**：Web UI 响应性能、历史数据不可恢复。**满意/中性方面**：今日无正面反馈样本可提炼。

## 8. 待处理积压

今日被 stale 关闭但实质未解决的问题，建议维护者优先重新评估：

- **Issue #3351**（CLOSED/stale，2026-08-30 创建）——session 压缩物理删除原始记录，涉及数据丢失。
  链接: sipeed/picoclaw Issue #3351
- **Issue #3350**（CLOSED/stale，2026-08-30 创建）——嵌入式设备 Web UI 卡顿，与开放中的 #3281 同源，建议合并跟踪。
  链接: sipeed/picoclaw Issue #3350
- **PR #3348**（CLOSED/stale，2026-08-29 创建）——捷克语 i18n 补全，改动小、风险低，被关闭较可惜，若仍适用可考虑重新提交。
  链接: sipeed/picoclaw PR #3348
- **PR #1545**（CLOSED，2026-03-14 创建）——聚合合并 #1500 #1490 #1488 #1487 #1485 的修复，悬挂约半年后被关闭。其关联的若干修复 PR 当前状态不明，**这是今日最需要维护者澄清的积压项**：这些修复是否已通过其他途径落地，还是彻底丢失。
  链接: sipeed/picoclaw PR #1545

**健康度提示**：今日最突出的系统性风险是 `[stale]` 自动化关闭机制正在吞掉真实问题（#3350、#3351 均属用户实际痛点而非无效报告）。若维护者未及时复核，可能导致数据丢失类问题被静默掩盖，建议对"数据持久化""性能回归"类标签设置 stale 豁免。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-14

## 1. 今日速览

今日项目处于**高活跃、低合流**的状态：过去 24 小时 Issues 更新 5 条、PR 更新 29 条，但仅 1 条 PR 被合并/关闭，另有 2 条 Issue 关闭。待合并 PR 高达 28 条，且多数集中在 Mattermost 渠道接入与 setup/安装流程修复上，由一位核心贡献者（glifocat）主导的同主题堆叠 PR 占据显著比例。问题侧以安装/升级路径的可靠性缺陷为主：fresh setup 的 provider picker 被跳过（#3787，已关闭）、update 技能提取脚本不完整（#3800，已关闭）、Codex fresh setup 依赖全局 CLI（#3791，仍开放）。当日无新版本发布，核心矛盾在于**大量修复已提交但尚未进入主干**，项目健康度取决于这批积压 PR 的审阅与合流节奏。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日已合并/关闭条目有限，未见高影响的合并 PR：

- 关闭 Issue **#3800** — update-nanoclaw 文档化提取流程遗漏三个被导入脚本，导致 controller 无法加载（作者 foxsky，2 条评论）。该缺陷直接影响升级路径可用性。
- 关闭 Issue **#3787** — Fresh setup 跳过 provider picker 并静默选择 Claude（作者 glifocat，2 条评论）。
- 合并/关闭 PR 共 1 条（标题未在提供的数据中给出）。

**整体评估**：项目向前推进幅度有限。文档化的更新流程缺陷与 setup 缺陷虽被关闭，但对应的实质性代码修复仍大量停留在待合并状态（见第 4、5 节），实际落地进度落后于问题处理速度。

---

## 4. 社区热点

今日评论/关注度最高的条目集中在两条线：

**Mattermost 渠道接入堆叠 PR（glifocat）** — 多条同主题 PR 同日更新，构成一条完整的接入验证链：

- **PR #3780** [kind/bug, delivery/skill, PR: Fix, area/channels, area/setup-installation, area/skills] — 在继续 setup 前验证运行中的 Mattermost 配置与服务器发起的回调投递，绑定真实 listener 到 host 状态，检查实时凭据与双方 DM 成员关系。链接：nanocoai/nanoclaw PR #3780
- **PR #3779** [kind/bug, PR: Fix, area/channels, area/setup-installation] — 重启后要求新进程确认目标安装，检查 manager/launcher PID、新实例与重启请求后的进程启动时间。链接：nanocoai/nanoclaw PR #3779
- **PR #3778** [PR: Fix, PR: Skill, area/channels, area/setup-installation] — 让操作者验证过的 Mattermost 选择在 fresh setup 与重跑时原子化持久化为 host 配置。链接：nanocoai/nanoclaw PR #3778
- **PR #3777** [PR: Refactor, PR: Skill, area/channels, area/setup-installation] — 连接操作者自管的 Mattermost 服务器，保持服务器选择显式，并将评估用服务器移至开发 fixtures。链接：nanocoai/nanoclaw PR #3777
- **PR #3807** [core-team, area/channels] — 暴露 Mattermost setup 验证器所需的运行时证据：报告真实已认证的 WebSocket 存活状态，并处理有界、无害的 setup challenge 而不派发 agent 动作。链接：nanocoai/nanoclaw PR #3807
- **PR #3809** [PR: Fix, PR: Skill, area/channels] — 让 Mattermost setup 在无 jq 的 fresh host 上验证服务器设置并打开 owner DM（公开 bootstrap 不安装 jq，但两条 skill 命令要求它）。链接：nanocoai/nanoclaw PR #3809

**诉求分析**：这一组 PR 反映出渠道接入的真实痛点不在功能本身，而在**可验证性与环境假设**——服务器配置是否真正生效、重启后连的是否是目标实例、依赖工具（jq）是否可用。作者以堆叠方式逐个补齐证据链，说明 Mattermost 的 setup 验证此前缺乏端到端的可信断言。

**安装/超时主线**：

- **Issue #3643** [kind/bug, priority/high, area/containers] — 硬编码的 30 分钟 `ABSOLUTE_CEILING_MS` 会在长本地模型回合中途被 host sweep 冷杀，且无配置入口（作者 glifocat，自 2026-08-28 起持续活跃，今日更新，1 条评论）。链接：nanocoai/nanoclaw Issue #3643

---

## 5. Bug 与稳定性

按严重程度排列：

1. **[高] Issue #3643** — 本地模型后端（OpenCode provider → OpenAI 兼容本地服务器）下，长 agent 回合被 host sweep 在 `ABSOLUTE_CEILING_MS`（30 分钟）处冷杀，日志显示 `WARN Killing container past absolute ceiling`；问题明确标注为**无配置接缝**。自 2026-08-28 开放至今未关闭，今日仍有更新，**未见对应 fix PR**。链接：nanocoai/nanoclaw Issue #3643

2. **[中] Issue #3791** [kind/bug, triage/unresolved] — Fresh Codex setup 要求 host 上全局安装 CLI；影响 commit `0399a6df` 搭配 provider payload `ee0d0a34`，且该 payload 在当前 `providers` 分支上未变。与 #3787（picker 被跳过）相关，picker 本身已被单独处理。**仍开放，0 条评论，未见 fix PR**。链接：nanocoai/nanoclaw Issue #3791

3. **[中] Issue #3801** [OPEN] — `update-nanoclaw validate` 在 host build 与测试前刷新检测到的已安装渠道与 provider，成功刷新后会在 staging 分支以 `ch...` 提交结果，可能覆盖本地 patch 技能所修改的文件（作者 foxsky，今日新开，1 条评论）。与已关闭的 #3800 同属 update 技能可靠性问题，**未见 fix PR**。链接：nanocoai/nanoclaw Issue #3801

4. **[已关闭] Issue #3800** — update-nanoclaw 文档化 controller 提取遗漏三个被导入脚本，导致 controller 无法加载。**已关闭**。链接：nanocoai/nanoclaw Issue #3800

5. **[已关闭] Issue #3787** — Fresh setup 跳过 provider picker 并静默选择 Claude（commit `0399a6df`，macOS，失败分支为平台无关的 setup 代码）。**已关闭**。链接：nanocoai/nanoclaw Issue #3787

**稳定性观察**：今日报告的缺陷高度集中于**安装与升级路径**（setup 静默错选、缺失全局依赖、更新覆盖本地修改、文档与代码不一致），而非运行时核心逻辑。相关修复 PR 已有相当数量处于待合并状态（如 #3779、#3805、#3806、#3809、#3689），但积压导致问题关闭与代码落地不同步。

---

## 6. 功能请求与路线图信号

今日数据中未出现纯功能请求类新 Issue，路线图信号主要来自已提交的 feature PR：

- **本地模型支持（Ollama）** — 三条相关 PR 同日更新，构成完整链路：
  - **PR #3546** — 新增 Ollama provider payload，使 agent 组可运行在本地 Ollama daemon 上，并避免将 Claude Code 的逐调用提醒写入 prompt 前缀。链接：nanocoai/nanoclaw PR #3546
  - **PR #3548** — `ollama launch nanoclaw` 单命令完成本地模型助手的安装、接线与启动。链接：nanocoai/nanoclaw PR #3548
  - **PR #3547** — 为 registry provider 提供引擎接缝，使其可包裹内置 Claude 路径而无需修补引擎文件（首例为 Ollama）。链接：nanocoai/nanoclaw PR #3547
  → 结合 #3643 对本地模型长回合被杀的诉求，本地模型路径的完善具备明确用户侧动机，**具备进入下一版本的条件，但依赖这批 PR 合流**。

- **上下文可视化工具** — **PR #3745** 在今日 main 上复活 `scripts/context-preview.ts`（"see what the agent sees"），让维护者或 e2e 运行无需启动容器即可打印 agent 读取的精确上下文。链接：nanocoai/nanoclaw PR #3745

- **Agent 间通信（A2A）可观测性与身份**：
  - **PR #3719** — 向来源方报告通信失败：阻断、审批等待、拒绝、缺失回复路径与永久投递失败，以系统注记形式发给发送 agent，并在会话开启时于原聊天中呈现相同文本。链接：nanocoai/nanoclaw PR #3719
  - **PR #3718** — 保留已验证的发送者身份与命令边界，使 agent 间消息标识真实发送 agent（含接收方无反向目的地的情况）。链接：nanocoai/nanoclaw PR #3718

- **仓库/更新维护** — **PR #3689** 修复符号链接的可变根目录快照：可变路径在根处为符号链接时，现快照目标内容而非仅链接本身（关闭 #3684）。链接：nanocoai/nanoclaw PR #3689

---

## 7. 用户反馈摘要

从今日 Issues 摘要与评论量提炼：

- **安装首体验存在静默错误**：用户执行全新 `bash nanoclaw.sh` 时，provider picker 被跳过并静默选择 Claude（#3787，commit `0399a6df`，macOS，但失败分支为平台无关代码）。"静默选择"意味着用户可能在不知情的情况下运行了非预期 provider。
- **本地模型用户遭遇回合被杀**：在 OpenCode provider 接本地 OpenAI 兼容服务器时，长回合被 host 的绝对上限中途击杀，且没有配置入口可调（#3643）。这是对**可控性**的直接诉求，而非功能缺失。
- **Codex 用户被隐式环境依赖阻挡**：fresh Codex setup 需要 host 上全局安装 CLI，而该依赖未被 setup 流程桥接（#3791）。
- **升级流程会覆盖本地定制**：`update-nanoclaw validate` 刷新渠道/provider 后的提交可能覆盖用户本地 patch 技能修改的文件（#3801）；同时 #3800 显示文档化的提取步骤与代码实际导入不一致。反映升级路径对"用户在本地做的改动"缺乏保护。
- **环境假设不一致**：公开 bootstrap 不安装 jq，但 Mattermost skill 有两条命令要求 jq（#3809），说明部分 skill 的环境前提未与安装脚本对齐。

整体而言，反馈集中在 **setup/update 的透明性与可预测性**，而非核心 agent 能力。

---

## 8. 待处理积压

**长期未响应的重要 Issue：**

- **Issue #3643**（开放 17 天，2026-08-28 创建，priority/high，area/containers）— 硬编码 30 分钟上限冷杀长本地模型回合，无配置接缝。仅 1 条评论，今日更新但**无 fix PR**。这是当前积压中优先级最高且悬置最久的运行时问题。链接：nanocoai/nanoclaw Issue #3643

**长期未合并的重要 PR：**

- **PR #3546 / #3548 / #3547**（均创建于 2026-08-26，已开放 19 天）— Ollama provider payload、单命令本地模型安装、provider 引擎接缝。三者互相依赖，长期待合并，直接关系到本地模型路线的落地。链接：nanocoai/nanoclaw PR #3546 / PR #3547 / PR #3548
- **PR #3718 / #3719**（均创建于 2026-09-04，已开放 10 天）— A2A 发送者身份保真与通信失败上报。链接：nanocoai/nanoclaw PR #3718 / PR #3719
- **PR #3745**（创建于 2026-09-08，已开放 6 天）— 复活 context-preview 工具。链接：nanocoai/nanoclaw PR #3745
- **PR #3689**（创建于 2026-08-31，已开放 14 天）— 符号链接可变根目录快照修复，关闭 #3684。链接：nanocoai/nanoclaw PR #3689
- **PR #3780 / #3779 / #3778 / #3777**（创建于 2026-09-12）— Mattermost 接入验证链，为堆叠 PR，需按序审阅。链接：nanocoai/nanoclaw PR #3780

**提示**：28 条待合并 PR 相对 1 条合并的失衡比例，以及多个主题（Ollama、A2A、Mattermost）以长堆叠形式并行等待，是本项目当前最主要的流程风险；建议维护者优先清空 Ollama 与 Mattermost 两条堆叠链，并针对 #3643 给出配置接缝的设计结论。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-09-14

## 1. 今日速览

今日 NullClaw 无新版本发布、无 PR 更新，代码合并侧完全静默。Issues 侧有 4 条更新，全部为 OPEN 状态且无一条关闭，其中 2 条为当日新开。活跃度集中在讨论层面而非交付层面，整体属于"输入多、产出少"的一天。值得注意的是，两条当日新开 Issue（#997、#998）均来自同一作者，且都围绕外部付费搜索服务展开，带有明显的产品推广色彩。

## 2. 版本发布

今日无新版本发布（最新 Releases：无），本节省略。

## 3. 项目进展

今日无 PR 更新、无合并或关闭记录（待合并 0，已合并/关闭 0），项目在代码交付层面没有向前推进。所有 4 条 Issue 均维持 OPEN 状态，其中 #993、#975 虽在今日有更新，但状态未变。

## 4. 社区热点

今日讨论最集中的是两条已有评论的 Issue：

- **[#993](nullclaw/nullclaw Issue #993) `[enhancement]` Firecrawl 搜索端点可配置化**（作者 Crymfox，创建 2026-08-24，今日更新，2 条评论）：指出 `src/tools/web_search_providers/firecrawl.zig` 中 API 端点被硬编码为 `https://api.firecrawl.dev/v1/search`，导致自托管 Firecrawl 实例无法接入。
- **[#975](nullclaw/nullclaw Issue #975) 新增 grok-cli provider**（作者 yanggf8，创建 2026-07-11，今日更新，2 条评论）：希望复用项目已有的 `claude-cli`、`codex-cli`、`gemini-cli` 子进程模式，通过本地 `grok` CLI 的登录会话（grok.com 订阅）调用 Grok，从而不额外计费。

**诉求分析**：两条热点都指向同一主题——**降低对外部计费 API 的依赖**。#993 面向自托管基础设施，#975 面向订阅制复用，反映用户希望摆脱按量付费的密钥绑定。

另有两条当日新开 Issue 尚无评论：
- **[#998](nullclaw/nullclaw Issue #998) "Prepaid search hop when keyless DDG isn't enough?"**
- **[#997](nullclaw/nullclaw Issue #997) "Prepaid Brave/Firecrawl vs those keys for NullClaw web_search?"**

两者均引用 #871 的搜索后端讨论，并推广第三方付费搜索服务 apifare（原 apipay）。这两条更接近产品投放而非纯粹的需求反馈，维护者可酌情评估其与项目路线的相关性。

## 5. Bug 与稳定性

今日无崩溃、回归或明确 Bug 报告。#998 提及的 **#871**（DuckDuckGo 默认搜索在弱设备上对比 Brave/SearXNG 的问题）被作者描述为一个 bug 线程，但 #871 本身不在今日更新列表中，且无对应 fix PR。当前数据中未发现今日新增的稳定性风险。

## 6. 功能请求与路线图信号

| Issue | 类型 | 可纳入下一版本的可能性评估 |
|---|---|---|
| [#993](nullclaw/nullclaw Issue #993) | 配置化增强 | **较高**。改动范围局限于单一文件中的硬编码常量，实现成本低，且服务于自托管用户群，是典型的"低风险高收益"改动。 |
| [#975](nullclaw/nullclaw Issue #975) | 新增 provider | **中等**。项目已存在 `claude-cli`/`codex-cli`/`gemini-cli` 的同类子进程模式，具备可复用范式；但依赖上游 grok CLI 的会话行为，需评估维护成本。 |

两条请求均已存在约 1–2 个月且今日仍在活跃讨论，但**今日无任何关联 PR**，因此无法从 PR 侧确认其进入下一版本的确定性。

## 7. 用户反馈摘要

- **痛点一：硬编码阻断自托管。** #993 用户明确指出现有实现无法对接自建 Firecrawl，属于部署灵活性问题。
- **痛点二：重复计费与密钥负担。** #975 希望复用已有 grok.com 订阅，避免为同一能力二次付费；#997 则指出 `web_search` "仍需 Brave 密钥或 SearXNG 跳转"才能让 agent 联网。
- **使用场景：** 本地 CLI 会话复用、自托管搜索、无密钥环境下的联网检索。
- **满意度信号：** 从 #975 引用项目已有 CLI provider 模式、#997 描述现有搜索链路来看，用户对既有架构的扩展性是认可的，诉求主要是补齐覆盖范围，而非重构。
- **需留意：** #997、#998 明确附带外部服务链接并带有推广性质，其代表性需谨慎看待。

## 8. 待处理积压

- **[#975](nullclaw/nullclaw Issue #975)**：创建于 2026-07-11，至今 **65 天**未关闭，今日仍有评论但无 PR 跟进，是本批次中积压最久的功能请求。
- **[#993](nullclaw/nullclaw Issue #993)**：创建于 2026-08-24，至今 **21 天**，讨论持续但无实现动作。

两者合计构成当前 enhancement 类积压的主要部分。鉴于 #993 实现成本较低，建议维护者优先给出明确结论（采纳/拒绝/待排期），以避免长期悬置消耗社区反馈意愿。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-14

## 1. 今日速览

今日 IronClaw 活跃度中等偏低，整体以依赖维护和诊断类修复为主，未见功能性重大推进。过去24小时共 1 条新 Issue、6 条 PR 更新（5 条待合并、1 条已关闭），无新版本发布。唯一的新 Issue 是每日自动生成的故障分类报告（#8100），延续了对 `clawbench` 基准测试非通过项的持续追踪。PR 侧全部为依赖升级（dependabot）和 MCP 诊断修复，无面向最终用户的功能变更。项目健康度平稳，但今日缺乏实质性的功能迭代信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已关闭/合并的 PR：

- **#8097 [CLOSED] chore(deps): bump the everything-else group across 1 directory with 24 updates**（dependabot[bot]，创建 2026-09-10，更新 2026-09-13）
  https://github.com/nearai/ironclaw/pull/8097
  该 PR 合并了 24 项 Rust 依赖更新（含 `uuid` 1.24.0 → 1.26.0、`base64` 等）。其对应后续版本 **#8099** 已于 2026-09-13 新开，将更新数扩展至 25 项（`uuid` 目标版本进一步提升至 1.26.1），表明依赖维护链路在持续滚动。

团队已直接推进当前 issue：疑似转述错误，无相关内容可确证。

总体而言，今日项目向前推进主要体现在依赖生态的持续同步，尚无新功能或核心问题修复落地。

## 4. 社区热点

今日所有 Issues/PR 的评论数与点赞数均无有效数据（PR 评论字段为 `undefined`，#8100 Issue 评论 0、👍 0）。因此**今日无明确的社区讨论热点**。

相对而言，唯一由真人作者提交的条目为：

- **#8100 [OPEN] Daily ironclaw failure taxonomy — 2026-09-14**（作者 pranavraja99）
  https://github.com/nearai/ironclaw/issues/8100
  内容为每日故障分类，分析 `clawbench` 基准的 86 项非通过结果。这是项目自动化质量追踪机制的一部分，反映出对基准测试通过率的持续关注。

## 5. Bug 与稳定性

今日未报告明确的新 Bug、崩溃或回归问题。

唯一与稳定性相关的信号来自 #8100 的 `clawbench` 基准分析，摘要显示该次运行的 86 项非通过“主要集中在 t...”（原文摘要在此截断，无法确认具体失败类型）。由于摘要不完整，无法判断严重程度，暂标注为**待确认**，且未见对应 fix PR。

相关诊断类修复进展：

- **#8077 [OPEN] fix(mcp): classify response leak diagnostics**（作者 linhongyu510，创建 2026-09-06，更新 2026-09-14）
  https://github.com/nearai/ironclaw/pull/8077
  该 PR 关闭 #8009，目标是修复 MCP 出口诊断：在保持主机泄漏阻断安全的同时，保留一个对 MCP 可见的独立原因。具体包含三点改动，其一为将共享的 `response_leak_blocked` 哨兵值集中到 `ironclaw_host_a...`（原文截断）。该 PR 属于诊断与安全可观测性改进，**尚未合并**，其修复效果待确认。

## 6. 功能请求与路线图信号

今日无用户提出的新功能需求。现有 PR 均为维护性质，暂无明确指向下一版本的功能信号。

## 7. 用户反馈摘要

今日 Issue 评论数为 0，无可提炼的真实用户痛点、使用场景或满意/不满意反馈。

## 8. 待处理积压

以下 PR 已开放较长时间且持续更新，建议维护者关注：

- **#7834 [OPEN] chore(deps): bump the wasm group across 1 directory with 4 updates**（dependabot[bot]，创建 2026-08-23，更新 2026-09-13）
  https://github.com/nearai/ironclaw/pull/7834
  已开放约 3 周，涉及 `wasmtime`、`wasmtime-wasi`、`wit-component` 等 4 项 WASM 相关依赖更新。标签为 `size: L, risk: medium`，风险等级中等，可能是其长期未合并的原因，需人工评估。
- **#8077 [OPEN] fix(mcp): classify response leak diagnostics**（创建 2026-09-06，更新 2026-09-14）
  https://github.com/nearai/ironclaw/pull/8077
  已开放 8 天，属安全/诊断类修复，建议优先审阅。
- **#8078 [OPEN] bump the tokio-ecosystem group**（创建 2026-09-06）
  https://github.com/nearai/ironclaw/pull/8078
- **#8079 [OPEN] bump the actions group**（创建 2026-09-06）
  https://github.com/nearai/ironclaw/pull/8079
  上述两个依赖 PR 均已开放 8 天，处于正常等待窗口。

---

*注：本日报所有信息均基于所提供的 GitHub 数据，部分摘要原文存在截断，相关细节以实际页面为准。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-14

## 1. 今日速览

今日项目活跃度**中等偏高**，但结构性偏斜明显：过去 24 小时共 24 条 PR 更新（14 待合并 / 10 已合并或关闭），其中绝大多数为 Dependabot 依赖升级，实际功能推进信号有限。Issues 侧仅 1 条更新，为一条被标记 `stale` 的旧 issue（#1035）重新活跃，反映 IM 网关存在消息静默丢失的稳定性隐患。无新版本发布。整体看，项目今日处于"依赖维护推进期"，核心业务代码变更密度低，维护重心集中在工具链与依赖版本对齐上；#1035 的重新活跃值得作为稳定性风险持续跟踪。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭的 PR 以依赖升级为主，未见功能性 PR 合并记录：

- **#2587 [CLOSED]** `chore(deps): bump mermaid from 10.9.8 to 12.0.0` — 跨主版本升级，关闭后被同日新建的 #2672 重新提交（见第 8 节）。
  https://github.com/netease-youdao/LobsterAI/pull/2587
- **#2586 [CLOSED]** `chore(deps-dev): bump vite from 5.4.21 to 8.3.0` — 构建工具跨多个主版本升级，同样被 #2669 重新提交。
  https://github.com/netease-youdao/LobsterAI/pull/2586
- **#2578 [CLOSED]** `chore(deps): bump better-sqlite3 from 12.11.1 to 13.0.3` — 本地存储层依赖主版本升级。
  https://github.com/netease-youdao/LobsterAI/pull/2578
- **#2583 [CLOSED]** `ci: bump trufflesecurity/trufflehog from 3.88.30 to 3.97.1` — CI 密钥扫描组件升级，被 #2667（升至 3.97.4）接续。
  https://github.com/netease-youdao/LobsterAI/pull/2583
- **#2582 [CLOSED]** `chore(deps-dev): bump @types/react-dom from 18.3.7 to 19.2.5`
  https://github.com/netease-youdao/LobsterAI/pull/2582
- **#2464 [CLOSED][stale]** `chore(deps): bump react-dom from 18.3.1 to 19.2.8` — 被 #2671（升至 19.3.0）接续。
  https://github.com/netease-youdao/LobsterAI/pull/2464

**进展评估**：今日合并动作维持了依赖与 CI 组件的版本新鲜度，但未观察到功能、性能或架构层面的实质推进。依赖升级呈现明显的"关闭—重建"循环（详见第 8 节），说明部分升级因冲突或需重基线而未能一次性落地，实际净推进有限。

## 4. 社区热点

今日数据中所有 PR 的评论数均为 `undefined`（无评论数据），👍 均为 0，**未出现具备社区讨论热度的条目**。唯一有互动的是 Issue #1035（1 条评论）：

- **#1035 [OPEN][stale] fix(im): NimGateway 重连后消息去重缓存未清空，导致正常消息被静默丢弃**
  https://github.com/netease-youdao/LobsterAI/issues/1035

**诉求分析**：该 issue 创建于 2026-03-30，直至 2026-09-14 才再度更新，跨度近半年。从摘要看，作者不仅描述了缺陷（`processedMessages` 为模块级全局变量，被所有 `NimGateway` 实例共享），还给出了根因定位与修复方向（标题以 `fix(im):` 开头），属于高质量的可直接采纳报告。其"重连后正常消息被静默丢弃"的影响面直指 IM 核心链路，却长期停留在 `stale` 状态，反映出维护者对高价值缺陷的响应存在积压。

## 5. Bug 与稳定性

今日仅报告 1 个缺陷，按严重程度排列如下：

**高严重度 — 消息静默丢失（IM 核心链路）**
- **#1035** `NimGateway 重连后消息去重缓存未清空，导致正常消息被静默丢弃`
  https://github.com/netease-youdao/LobsterAI/issues/1035
  - 根因：`src/main/im/nimGateway.ts` 中 `processedMessages` 为**模块级全局 Map**，被所有 `NimGateway` 实例共享；网关因网络抖动触发重连（`stop()` + `start()`）后，上一会话的消息 ID 仍残留缓存。
  - 影响：在 5 分钟 TTL 未到期的情况下，重连后到达的正常消息会被去重逻辑误判并**静默丢弃**——用户侧表现为消息凭空消失，无任何错误提示，属最难排查的一类故障。
  - 严重度评级高的理由：命中 IM 场景最高频的基础能力（消息必达），静默失败导致用户无法感知也无法规避；根因是模块级状态被跨实例共享，属于设计层面的状态隔离缺陷，可能影响其他网关实现。
  - **Fix PR 状态：暂无关联 fix PR。** Issue 当前为 `stale` 标记的 OPEN 状态，尚无 PR 认领。

## 6. 功能请求与路线图信号

今日**无新的功能请求类 Issue**。从 PR 侧可读取的路线图信号主要是技术栈现代化方向：

- **React 生态升级**：#2671（react-dom 18.3.1 → 19.3.0）、#2670（@types/react-dom 18.3.7 → 19.3.0）、#2461（eslint-plugin-react-hooks 5.2.0 → 7.1.1）同时待合并，指向 React 19 迁移意图。其中 #2461 已标记 `stale`（自 2026-08-10 起挂起），说明该迁移路径存在阻塞。
- **构建工具链跃迁**：#2669（vite 5.4.21 → 8.3.0）待合并，跨度较大。
- **CI 与安全**：#2667（trufflehog 3.88.30 → 3.97.4）、#2666（actions/labeler 5 → 7）待合并，反映持续加固供应链与自动化流程的意图。
- **运行时依赖**：#1277（electron 组，含 electron 与 electron-builder，共 2 项更新）自 2026-04-02 挂起至今，是今日数据中创建最早且仍 OPEN 的 PR。

需说明：这些均为依赖升级信号，**不能据此推断具体功能版本规划**；是否存在与上述升级配套的迁移 PR，今日数据未显示。

## 7. 用户反馈摘要

今日可提炼的用户反馈仅来自 Issue #1035 的摘要内容（评论 1 条，未提供评论正文）。

- **痛点**：网络抖动导致 IM 网关重连后，正常消息被静默丢弃，用户无法感知消息丢失，也无从补救。
- **使用场景**：`NimGateway` 在弱网/网络抖动环境下的重连场景——这恰是即时通讯客户端最常见的真实使用环境。
- **满意度信号**：报告者提供了精确到文件与变量名的根因分析（模块级 `processedMessages` 被多实例共享、5 分钟 TTL 残留），技术素养高；但该报告自 2026-03-30 创建后长期未被处理并被打上 `stale`，对报告者体验构成负面信号。

今日数据中**无其他 Issues 评论可供提炼**，故不呈现更多满意/不满意维度的结论。

## 8. 待处理积压

**高优先级（稳定性，需人工介入）**
- **#1035 [OPEN][stale]** — 创建 2026-03-30，更新 2026-09-14，已挂起近半年，无 fix PR。属 IM 核心链路静默失败，建议优先指派。
  https://github.com/netease-youdao/LobsterAI/issues/1035

**长期挂起的依赖升级（"关闭—重建"循环）**
- **#1277 [OPEN]** `chore(deps-dev): bump the electron group across 1 directory with 2 updates` — 创建 2026-04-02，为今日仍在 OPEN 的最老 PR。
  https://github.com/netease-youdao/LobsterAI/pull/1277
- **#2461 [OPEN][stale]** `chore(deps-dev): bump eslint-plugin-react-hooks from 5.2.0 to 7.1.1` — 创建 2026-08-10。
  https://github.com/netease-youdao/LobsterAI/pull/2461

**同日重建的重复 PR（今日新建，均为 2026-09-14 创建与更新）**

同一升级在关闭旧 PR 后立即重建，提示可能存在合并冲突或基线更新需求，维护者需明确处理策略：

| 主题 | 已关闭 | 重建（OPEN） |
|---|---|---|
| mermaid 10.9.8 → 12.0.0 | #2587 | **#2672** |
| react-dom 18.3.1 → 19.x | #2464 | **#2671** |
| @types/react-dom 18.3.7 → 19.x | #2582 | **#2670** |
| vite 5.4.21 → 8.3.0 | #2586 | **#2669** |
| trufflehog 3.88.30 → 3.9x | #2583 | **#2667** |

- #2672 https://github.com/netease-youdao/LobsterAI/pull/2672
- #2671 https://github.com/netease-youdao/LobsterAI/pull/2671
- #2670 https://github.com/netease-youdao/LobsterAI/pull/2670
- #2669 https://github.com/netease-youdao/LobsterAI/pull/2669
- #2667 https://github.com/netease-youdao/LobsterAI/pull/2667

**其他今日新建待审 PR**
- **#2668 [OPEN]** `chore(deps-dev): bump @sinclair/typebox from 0.34.49 to 0.34.52`
  https://github.com/netease-youdao/LobsterAI/pull/2668
- **#2666 [OPEN][area: build]** `ci: bump actions/labeler from 5 to 7`
  https://github.com/netease-youdao/LobsterAI/pull/2666

**健康度提示**：14 条 PR 待合并而今日仅 1 条 Issue 有活动，且唯一活跃 Issue 为长期 stale 的稳定性缺陷——建议在继续推进依赖升级的同时，为 #1035 分配维护资源，以平衡"工具链更新"与"核心链路可靠性"的投入。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-14

## 1. 今日速览

Moltis 今日整体活跃度**中等偏低**：无新开或活跃 Issue，仅有 1 条 Issue 被关闭；PR 侧 1 待合并、1 已关闭；发布 1 个新版本（20260913.02）。当日主线是"可配置默认推理/思考等级"这一功能从需求（Issue #1259）到实现（PR #1266）的闭环完成，同时 PR #1267 对 agent 与出站消息生命周期事件的派发做了修复，处于待合并状态。整体看，项目在"会话级推理配置"方向上向前迈进了一步，但社区讨论热度为零（当日所有条目评论数均为 0），外部参与度有限。

## 2. 版本发布

**20260913.02**（发布说明正文仅重复版本号，未提供进一步内容）

- 更新内容：数据源中该 Release 的正文仅为版本号 "20260913.02"，**未披露具体更新项、破坏性变更或迁移注意事项**。
- 与当日 PR 的关系：无法从所给数据确认该版本是否包含 PR #1266（`chat.reasoning_default`）的变更；该 PR 的合并/关闭状态为 CLOSED，时间同为 2026-09-13，二者可能存在关联，但**现有材料不足以断言**。
- 建议维护者补充 Release Notes，明确版本包含的变更范围与升级注意事项。

## 3. 项目进展

**已关闭 PR #1266 — feat(chat): persist configurable default reasoning effort**
- 链接: moltis-org/moltis PR #1266
- 作者: penso | 创建/更新: 2026-09-13 | 状态: CLOSED
- 摘要要点: Closes #1259。新增 `chat.reasoning_default`，用于新建或未绑定模型的聊天会话（含主聊天）；复用共享 effort 枚举：`minimal`、`low`、`medium`、`high`、`xhigh`、`max`，并接受 `extra-high` 作为 `xhigh` 的别名。
- 意义: 把"推理努力等级"从会话内临时设置提升为可持久化的默认配置，回应了用户希望跨会话保留偏好的诉求。

**待合并 PR #1267 — fix(hooks): dispatch agent and outbound message lifecycle events**
- 链接: moltis-org/moltis PR #1267
- 作者: penso | 创建/更新: 2026-09-13 | 状态: OPEN
- 摘要要点: Fixes #1255。在流式/非流式循环成功完成时派发一次 `AgentEnd`，携带最终文本与实际迭代/工具调用总数；在最终发布前派发 `MessageSending`，并遵循内容重写。
- 意义: 修复生命周期事件缺失/时序问题，对依赖 hook 的集成方（如日志、审计、外发消息改写）具有直接影响，尚待合并。

**整体推进度评估**: 当日完成 1 个用户可见功能（可配置默认推理等级）的闭环，并推进 1 个 hook 事件修复至待合并；属于单点功能推进，非大规模迭代。

## 4. 社区热点

当日**无实质讨论热点**：所有列出的 Issue 与 PR 评论数均为 0（PR 评论数为 undefined，👍 均为 0），不存在高互动条目。

若要指出当日关注度最高的对象，仅能按事项重要性而非互动量排序：

- Issue #1259 [CLOSED] [enhancement] [Feature]: Configurable default reasoning/thinking level (persist across sessions) — moltis-org/moltis Issue #1259
- PR #1266（对应实现）— moltis-org/moltis PR #1266

**诉求分析**: #1259 反映用户希望"推理/思考等级"可配置且跨会话持久化，属于对个性化与稳定行为预期的需求，而非一次性 Bug 报告。

## 5. Bug 与稳定性

当日**无新报告 Bug、崩溃或回归问题**（过去 24 小时 Issues 更新中 0 条为新开/活跃）。

唯一与稳定性相关的工作是 **PR #1267**，其修复目标 #1255 指向 hook 生命周期事件（`AgentEnd`、`MessageSending`）的派发问题：

- 严重程度: 中等（事件缺失/时序错误会影响依赖 hook 的集成与消息链路，但不必然导致崩溃；因未提供 #1255 原文，无法进一步定级）。
- Fix 状态: 已有 fix PR #1267，状态 OPEN（待合并）。链接: moltis-org/moltis PR #1267

## 6. 功能请求与路线图信号

当日用户侧仅提出 1 项功能需求，且已被实现并关闭：

| 需求 | Issue | 实现 PR | 状态 | 纳入下一版本的可能性 |
|---|---|---|---|---|
| 可配置且跨会话持久的默认推理/思考等级 | #1259 | #1266 | Issue CLOSED、PR CLOSED | 高——需求与实现均已闭环，配合 2026-09-13 的版本发布，具备落地条件 |

补充观察: PR #1266 复用共享 effort 枚举并接受 `extra-high` 作为 `xhigh` 的别名，说明项目在推理等级上已有统一枚举抽象，后续同类配置项（如按模型、按场景的默认值）可能沿此路径扩展。

## 7. 用户反馈摘要

- 可提炼的真实反馈仅来自 Issue #1259 正文摘要：作者在提交前执行了 preflight checklist（确认已检索现有 enhancement 请求、确认未被提出过），**未附聊天会话来源问题**（该复选项未勾选）。这表明该请求属于用户主动、经自查后的功能建议，而非从具体会话故障中衍生的缺陷报告。
- 由于当日 Issues 与 PR 评论数均为 0，**无评论级反馈可提炼**：无法给出满意度、使用场景细节或不满点。
- 使用场景推断（限于摘要信息）: 用户希望推理/思考等级设置在新会话（包括无模型绑定的会话与主聊天）中持续生效，避免每次会话重复配置。其余场景信息在所给材料中未提供。

## 8. 待处理积压

- **PR #1267** [OPEN]，创建于 2026-09-13，当日已更新，等待合并评审。链接: moltis-org/moltis PR #1267
  - 作为 #1255 的修复，建议优先评审：它影响 hook 事件契约，长时间未合并会阻塞依赖该事件的集成方。
- **Issue #1259** 已关闭，不构成积压。
- 需要说明的是：本次提供的数据仅覆盖过去 24 小时，**未包含更早期的开放 Issue/PR 清单**，因此无法识别长期未响应的历史积压项；建议维护者单独核查长期无更新的 open 条目。

---

**数据边界说明**: 本报告严格基于上述 GitHub 数据生成。Release 20260913.02 的具体变更内容、Issue #1255 的正文、PR 评论数（数据中为 undefined）等在原始材料中缺失或未说明，报告未作推测性补充。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报（2026-09-14）

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 活动数据
> 注：Issues/PR 链接在原始数据中标注为 `agentscope-ai/QwenPaw` 命名空间，本报告按原文保留。

---

## 1. 今日速览

过去 24 小时项目保持高强度活跃：Issues 更新 44 条（新开/活跃 30、关闭 14），PR 更新 50 条（待合并 39、合并/关闭 11），无新版本发布。当前积压结构明显偏向「待审 PR 堆积」——39 条待合并 PR 中有大量标记为 `Under Review`，其中控制台（console）修复类 PR 由同一作者（zhijianma）集中提交，形成明显的审查瓶颈。Bug 侧今日焦点集中在**内存持续增长/OOM**、**会话与大模型配置丢失**、**ACP 权限回退**与**定时任务无输出**等稳定性问题上。整体健康度评估：**开发吞吐旺盛，但合并节奏落后于提交节奏，安全与稳定性缺陷密度偏高**。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

今日已合并/关闭的 PR 共 11 条（原始数据未列出其明细），Issues 侧关闭 14 条，其中包含若干长期挂起的问题：

- **#4354 [CLOSED]** 读取大型 Excel 文件导致 agent 被强制中断（创建于 2026-05-14）
  https://github.com/agentscope-ai/QwenPaw/issues/4354
- **#4220 [CLOSED]** `auto_memory_interval` 写入记忆文件但不同步向量索引，`/new` 后 `memory_search` 搜不到（创建于 2026-05-11）
  https://github.com/agentscope-ai/QwenPaw/issues/4220
- **#3995 [CLOSED]** 增强记忆管理与召回机制（创建于 2026-05-01）
  https://github.com/agentscope-ai/QwenPaw/issues/3995
- **#7199 [CLOSED]** `daily_paper` 的 `write_atomic` 在含代理对字符（U+D800–U+DFFF）的 PDF 上崩溃
  https://github.com/agentscope-ai/QwenPaw/issues/7199

**解读**：关闭集中出现在**记忆系统**与 **daily_paper 数据处理**两个主题上，说明维护者正在清理约 4 个月前遗留的存量问题。但需注意，今日仍有多条同类新 Issue（如 #7571 记忆遗忘、#7715 daily_paper 静默失败）在活跃，**同类问题存在反复出现的迹象**，建议核实是修复不彻底还是不同根因。

---

## 4. 社区热点

按评论数排序，今日讨论最集中的条目：

| 条目 | 类型 | 评论 | 主题 |
|---|---|---|---|
| #7709 | Issue | 6 | 定时任务经常无输出，结果被折叠进步骤/thinking |
| #7678 | Issue | 6 | spawn subAgent 全部 timeout 失败 |
| #7571 | Issue | 6 | 记忆反复遗忘，跨路径规则无法遵守 |
| #7660 | Issue | 4 | 安装失败 |
| #7722 | Issue | 4 | 内存耗尽的三条叠加路径 |

- **#7709** https://github.com/agentscope-ai/QwenPaw/issues/7709
  诉求本质是**输出可见性/可观测性**：用户无法区分「没有结果」与「结果被埋进 thinking 或折叠步骤」。这是一类会直接摧毁用户信任的体验问题，且作者明确指出正常对话中也会偶发。

- **#7678** https://github.com/agentscope-ai/QwenPaw/issues/7678
  spawn subAgent 全量失败且延长 timeout 无效，说明问题不在超时而在于执行链路本身被阻塞。

- **#7571** https://github.com/agentscope-ai/QwenPaw/issues/7571
  用户描述得非常具体：A 路径开发、C 路径运行、B 路径存放 TODO，反复强调仍无法保持约束。这是**长期记忆在工程工作流场景下的失效案例**，具有较高参考价值。

- **#7722** https://github.com/agentscope-ai/QwenPaw/issues/7722
  带有受控复现与最小修复建议的深度报告，指认三条独立内存增长路径（无界流缓冲、keep-alive 实例堆叠、doom-loop 门控绕过），是今日质量最高的社区贡献之一。

**趋势判断**：社区热点高度集中在「**Agent 运行时可靠性**」（输出、子代理、内存）而非功能缺失，说明项目已进入稳定性攻坚阶段。

---

## 5. Bug 与稳定性

按严重程度排序：

### 严重（可导致服务不可用 / 数据丢失）

1. **#7722 内存耗尽三路径叠加**（v2.2.0 官方镜像，受控复现 + 修复建议）
   https://github.com/agentscope-ai/QwenPaw/issues/7722
   容器以约 1MB/s 填满内存后挂起/OOM。**暂无对应 fix PR 见于今日数据。**

2. **#7222 qwenpaw-backend 内存无界增长至 20GB+**（长期未闭，创建于 2026-08-23）
   https://github.com/agentscope-ai/QwenPaw/issues/7222
   连续运行约 2 天后从数百 MB 涨至 20.7 GB，作者明确区分于启动阶段泄漏——属运行时累积。**与 #7722 可能同源，建议合并调查。**

3. **#7724 会话丢失 + 大模型配置丢失**（win10 2.2.1 desktop）
   https://github.com/agentscope-ai/QwenPaw/issues/7724
   会话在「控制-会话」中完全找不到，丢失前先提示配置大模型。**用户数据不可恢复，属最高优先级。**

4. **#7708 设置好的大模型丢失**（win10 2.2.1 desktop）
   https://github.com/agentscope-ai/QwenPaw/issues/7708
   正常使用中报「未设置大模型」，退出重选后可恢复。与 #7724 高度相关。

### 高（核心功能不可用）

5. **#7678 spawn subAgent 全部失败 timeout**（win 2.2.0）
   https://github.com/agentscope-ai/QwenPaw/issues/7678
   无 PR。

6. **#7709 定时任务无输出 / 结果被折叠**（v2.2.1）
   https://github.com/agentscope-ai/QwenPaw/issues/7709
   **已有对应 PR：#7750**（`feat(console): show send_file_to_user files in response artifact list`）部分缓解「文件被折叠在 Completed N steps 中」的可见性问题。
   https://github.com/agentscope-ai/QwenPaw/pull/7750

7. **#7726 ACP `trusted: true` 静默回退到交互式确认**
   https://github.com/agentscope-ai/QwenPaw/issues/7726
   根因定位到 `src/qwenpaw/acp/client.py` 的 `_pick_allow_option` 仅匹配 `allow_*` optionId。**已有 fix PR #7732**（改为按 ACP 稳定 `kind` 匹配）。
   https://github.com/agentscope-ai/QwenPaw/pull/7732

8. **#7727 越界写入硬拦截对 kimi-code Write 工具失效**
   https://github.com/agentscope-ai/QwenPaw/issues/7727
   `_paths` 提取不识别 kimi toolCall 的路径字段，导致沙箱外写入未被阻断。**属安全边界缺陷，建议优先处理；暂未见对应 PR。**

### 中

9. **#7715 Daily Paper 静默失败**（arxiv.org 不可达时无代理/端点配置，错误信息掩盖真实原因）
   https://github.com/agentscope-ai/QwenPaw/issues/7715
   每日 cron 均报 "completed with no returned content"。无 PR。

10. **#7660 安装失败**
    https://github.com/agentscope-ai/QwenPaw/issues/7660
    仅有截图，信息不足。无 PR。

### 已修复（今日关闭）

- #7199 daily_paper surrogate 字符崩溃 https://github.com/agentscope-ai/QwenPaw/issues/7199
- #4354 大 Excel 读取中断 https://github.com/agentscope-ai/QwenPaw/issues/4354

---

## 6. 功能请求与路线图信号

### 高概率进入下个版本（已有对应 PR）

| 需求 | Issue | 对应 PR | 判断 |
|---|---|---|---|
| 历史对话移至右侧 | #7739 | **#7704** `feat(console): move chat files drawer to the right` | 需求当日提出且 PR 已存在，方向一致，落地概率高 |
| 侧边栏折叠状态跨刷新持久化 | — | **#7681** | PR 已就绪 |
| `send_file_to_user` 文件在产物列表可见 | — | **#7750** | 直接回应 #7709 的可见性诉求 |
| 视觉压缩（Visual Compact）改进 | — | **#7703** | 上下文管理方向的长期投入 |

- #7739 https://github.com/agentscope-ai/QwenPaw/issues/7739
- #7704 https://github.com/agentscope-ai/QwenPaw/pull/7704
- #7681 https://github.com/agentscope-ai/QwenPaw/pull/7681

### 中等概率（需求明确，无直接 PR）

- **#7746 skills 适用 channel 列表不全**：自定义 channel 后无法限定 skill 仅在指定 channel 生效。
  https://github.com/agentscope-ai/QwenPaw/issues/7746
- **模型故障切换配置入口不可发现**（#7749）：用户已升级到 2.2.1，但在模型配置界面找不到该功能。这更像是**文档/UI 可发现性问题**而非功能缺失，修复成本低。
  https://github.com/agentscope-ai/QwenPaw/issues/7749
- **#7571 记忆可靠性**与 **#3995（已关闭）增强记忆管理与召回**：记忆生命周期管理（自动归档、跨会话一致性）仍是长期路线图主题，ReMe/ReMe4 相关讨论（#6840、#6222）显示该方向仍在演进中。
  https://github.com/agentscope-ai/QwenPaw/issues/6840
  https://github.com/agentscope-ai/QwenPaw/issues/6222

---

## 7. 用户反馈摘要

**痛点**

1. **记忆不可靠是最高频的抱怨主题。** #7571 用户描述了三路径（A 开发 / B 存放 / C 运行）规则反复失效的场景；#4220（今日关闭）与 #3995 也指向同一根源。用户期望的是「被强调过的约束应当长期生效」，当前行为与之不符。
   https://github.com/agentscope-ai/QwenPaw/issues/7571

2. **配置与状态丢失缺乏解释。** #7708、#7724 显示大模型配置与会话会在正常使用中无故消失，且两者常同时发生（先丢模型配置，再丢会话）。用户被迫「退出重选」，且丢失的会话无法找回。

3. **错误信息掩盖真实原因。** #7715 的 daily_paper 每天报「completed with no returned content」，用户需自行排查到 arxiv.org 不可达；#7660 的安装失败仅有一张截图，缺乏可操作的诊断信息。

4. **窄屏可用性差。** #7739 反馈在 14 寸笔记本上左侧区域内容被折叠，需滑动才能看全，视觉体验差。

**满意/认可的信号**

- 社区中存在高质量的技术报告（#7722 附带受控复现与最小修复方案；#7726 精确到源码行号与根因说明），说明**深度用户愿意投入精力帮助定位问题**，这是项目的重要资产。
- 用户对 ReMe 记忆后端的架构演进保持关注（#6840 逐行比对代码与 ReMe4 设计文档），说明**技术路线获得了一定程度的社区认同与跟进**。

**使用场景**：桌面端（Windows 10/11 为主，亦有 macOS arm64）是主要反馈来源；典型场景为**插件开发工作流**（源码目录开发 → 插件运行时路径部署）与**定时任务/日报类自动化**。

---

## 8. 待处理积压

以下条目长期未闭环或存在明显审查淤积，建议维护者优先分配注意力：

### 长期未解决（按滞留时长排序）

1. **#7222 内存增长至 20GB+** — 创建于 2026-08-23，已滞留 22 天，今日仍有更新。与 #7722 可能同源，建议合并调查。
   https://github.com/agentscope-ai/QwenPaw/issues/7222

2. **#4354 / #4220 / #3995** — 均创建于 2026 年 5 月，今日方才关闭。**部分问题从提出到关闭耗时超过 4 个月**，建议复盘存量清理流程，避免同类问题再次长期悬挂。

3. **#6840 ReMe4 路线图时间线询问** — 创建于 2026-08-09，今日关闭，但原始诉求（Auto-Link、三模态检索、四类摘要权重的时间表）属于路线图沟通类问题，值得以公开文档形式一次性回答，减少重复提问。

### PR 审查瓶颈

4. **39 条待合并 PR vs 11 条已合并** — 比例接近 3.6:1。其中 **zhijianma 一人提交了至少 6 条 console/hub 修复**（#7704、#7750、#7681、#7682、#7683、#7752），均带 `Under Review` 标记且停留在待合并状态。这种**单作者集中提交 + 审查滞后**的结构容易导致分支冲突累积，建议集中安排一轮 review。
   https://github.com/agentscope-ai/QwenPaw/pull/7681
   https://github.com/agentscope-ai/QwenPaw/pull/7682
   https://github.com/agentscope-ai/QwenPaw/pull/7683
   https://github.com/agentscope-ai/QwenPaw/pull/7752

### 安全相关，建议提速

5. **#7769** `fix(desktop): authenticate local API requests in the native host` — Windows 桌面端在关闭账号登录时，本地后端对匿名调用者暴露 MCP 配置与审批接口。**属安全加固，建议优先审查。**
   https://github.com/agentscope-ai/QwenPaw/pull/7769

6. **#7727** kimi-code 越界写入未被拦截 — 安全边界失效，**当前无对应 PR**，建议尽快跟进。
   https://github.com/agentscope-ai/QwenPaw/issues/7727

---

## 附：今日值得关注的 PR 速览

| PR | 作者 | 标题 |
|---|---|---|
| #7732 | axelray-dev | fix(acp): select permission options by protocol kind |
| #7703 | Leirunlin | feat(context): Improving visual compaction |
| #7729 | kabishou11 | fix(mcp): recognize Java jsonRpcError envelope on discover probe |
| #7753 | Leirunlin | fix(skill): update make-skill to v2.1 for better robustness |
| #7769 | jinglinpeng | fix(desktop): authenticate local API requests in the native host |
| #7770 | Luohh5 | fix(pawport): restore missing PawPort entry in Agent configuration |
| #7751 | jinglinpeng | fix(docker): align app Python runtime with desktop |
| #7735 | lorenzozanee | fix(mcp): preserve decoded HTTP error responses（首次贡献者） |
| #7748 | rayrayraykk | fix: preserve loop warnings and correct budget and overflow recovery |

各 PR 链接：将 `#编号` 拼接至 `https://github.com/agentscope-ai/QwenPaw/pull/` 即可访问。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报（2026-09-14）

## 1. 今日速览

过去 24 小时,ZeptoClaw 项目未产生新的 Issue 或 PR,活动全部来自既有条目的收尾:1 条 Issue(#676)关闭、1 条 PR(#677)关闭合并,均围绕 RustSec 安全审计在 CI 中无法发布检查结果的问题。两个条目在同一天完成闭环,说明维护者对 CI 权限类缺陷的响应链路完整（问题报告 → 修复 PR → 关闭）。整体活跃度评估为**低产出、高闭环**：当日无新增版本、无新讨论,但唯一在办问题已解决,项目健康度稳定。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日关闭 1 条 PR，推进了 CI 安全审计链路的可用性修复：

- **PR #677 [CLOSED] fix(ci): allow rustsec audit check reporting**（作者 qhkm，创建 2026-09-10，更新 2026-09-14）
  链接: qhkm/zeptoclaw PR #677
  摘要显示：main 分支上的安全审计本身未发现漏洞，但 `rustsec/audit-check` 无法发布结果，原因是任务令牌缺少 check-run 访问权限。该 PR 将审计任务的权限收窄为仅 `contents: read` 与 `checks: write`，使 action 能正常上报审计结果。

该修复同时体现了权限最小化取向（只授予必要权限），在恢复审计上报能力的同时未扩大任务权限面。项目在 CI 安全可观测性方向上前进了一步；除此之外，当日无其他功能推进。

## 4. 社区热点

今日无讨论活跃的条目。两条更新(#676、#677)的评论数均为 0（PR #677 评论数为 undefined），反应数为 0，不存在社区热点或集中诉求。唯一可观察的信号是：Issue 与修复 PR 由同一作者 qhkm 在同期提出并完成，属于维护者自发发现并修复，而非外部用户驱动。

## 5. Bug 与稳定性

今日无用户侧 Bug、崩溃或回归报告。唯一与稳定性相关的问题是 CI 基础设施缺陷，按严重程度排列如下：

- **[已修复] CI 安全审计结果无法上报**（Issue #676 [CLOSED]，P2-high，chore/ci 标签）
  链接: qhkm/zeptoclaw Issue #676
  问题描述：`Security audit` 任务将 `secrets.GITHUB_TOKEN` 传给 `rustsec/audit-check`，但 workflow 未授予 `checks: write`。在 `push` 运行中审计本身成功，随后 action 在创建 check run 时失败。严重程度为 P2-high，影响的是审计结果可见性，不影响代码或运行时稳定性。
  已有 fix PR：是，对应 PR #677，且已关闭合并。

## 6. 功能请求与路线图信号

今日无用户提出的新功能需求。可识别的路线图信号仅来自已完成的 CI 修复本身：项目对安全审计的自动化上报有明确要求（漏洞扫描须产出可发布的结果），这一方向已在 PR #677 中落地。基于现有数据，无法判断或推断下一版本将纳入哪些新功能。

## 7. 用户反馈摘要

今日 Issues 与 PR 均无评论，未产生可提炼的真实用户痛点、使用场景或满意度反馈。现有条目由维护者本人提交，反映的是维护侧的 CI 权限配置诉求，而非终端用户诉求。

## 8. 待处理积压

基于本次提供的数据，无长期未响应的重要 Issue 或 PR：今日更新的两条条目(#676、#677)均已关闭，且创建（2026-09-10）至关闭（2026-09-14）间隔仅 4 天，响应及时。当前无需要提醒维护者关注的积压事项。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-14

## 1. 今日速览

项目维持高活跃度：过去 24 小时 26 条 Issue 更新（20 条新开/活跃、6 条关闭）与 50 条 PR 更新（41 条待合并、9 条已合并/关闭），但无新版本发布。当日工作重心明显偏向治理与架构层面——RFC 流程简化、维护者决策队列、ADR 清单等治理类 Issue 持续占据讨论榜首。Bug 面保持稳定输出：6 条关闭项中多条为 config 写入绕过校验类问题，其中 #10837 已修复，#10320 仍在推进。安全相关议题（审批策略、主机启动器解析、健康端点脱敏）在 PR 侧占比较高，说明安全加固仍是主线之一。

## 2. 版本发布

无新版本发布。

v0.8.5 稳定化线由 Tracker #9459 跟踪，规划周期至 2026-08-30，入口已于 2026-08-04 冻结。当日无新发布动作。

## 3. 项目进展

今日合并/关闭 9 条 PR，其中值得关注的是：

- **#10827 [CLOSED]** `fix(channels): keep system notices and the Matrix approval prompt out of TTS` — 修复非对话内容（错误提示、系统告警、Matrix 审批提示）误入 TTS 路径的问题，关闭了与之对应的 Issue #10625 所反映的降级行为类别。
- **#10283 [CLOSED]** `docs(mcp): add Build Remote Agent phone pairing (gbr/1)` — 文档合并，新增 ZeroClaw 通过 stdio `gbr-mcp` 接入宿主 `gbr-agent` 的示例。
- **#10603 [CLOSED]** `[Bug]: OpenCode providers never send x-opencode-session` — 该 S1 级阻断问题已关闭（对应 `provider:openai` / `provider:compatible`，评论 3、👍 3，为当日反应数最高的 Issue）。

Issue 侧同步关闭 6 条，其中 #10837（RPC `config/set` 绕过 `Config::validate()`）、#10721（`knowledge.db_path` 波浪号全局替换导致 knowledge 工具静默失效）、#10580（文档链接门禁未覆盖全仓库）、#10533（`model_routing_config` 拒绝 `custom.*` 合法槽位）均为实质缺陷修复。整体判断：项目在治理流程规范化与配置校验一致性上持续推进，但 41 条 PR 待合并的积压量偏大。

## 4. 社区热点

当日讨论最集中的议题几乎全部来自治理与架构方向：

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** [OPEN] [Tracker] Maintainer decision queue for RFCs and design issues — 评论 15，当日最高。维护者决策队列，承载需维护者/code-owner 介入的 RFC、设计问题与发布策略问题。诉求：治理流程需要单一收敛入口，避免决策散落。
- **[#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549)** [OPEN] RFC: Simplify RFC voting by removing mandatory discussion windows and making REVISE stop the current snapshot — 评论 10。指出普通 RFC 需等待 48 小时、例外全票 RFC 需 72 小时的强制讨论期带来不必要的摩擦。诉求：缩短决策周期。
- **[#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366)** [OPEN] RFC: Clarify PR review evidence, freshness warnings, and author-action boundaries — 评论 8，当日更新。已在 PR #10677 中落地"快速合并通道"切片。诉求：明确审查证据标准与作者行动边界。
- **[#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)** [OPEN] RFC: opt-in household edge mesh with pull workers and signed receipts — 评论 4。提出跨主机算力聚合（利用闲置 PC/笔记本/手机），涉及 daemon、gateway、runtime、security。诉求：突破单主机 CPU/内存/磁盘/加速器边界。
- **[#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603)** [CLOSED] OpenCode providers 缺少 `x-opencode-session` 头 — 👍 3，用户反应最强烈的具体技术问题。

**分析**：高评论议题集中在"如何让项目决策更快、更可审计"，而非功能本身，说明项目已进入流程治理瓶颈期。社区对治理摩擦的容忍度正在下降。

## 5. Bug 与稳定性

按严重程度排列：

**P1 / S1（阻断级）**
- [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) [CLOSED] OpenCode providers 从不发送 `x-opencode-session`，破坏 Go 模型并可能导致账号被标记。**已关闭。**
- [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) [CLOSED] cron 手动触发与运行历史读取在 agent 重命名后仍为 check-then-act，存在跨 agent 边界风险。**已关闭。**
- [#10533](https://github.com/zeroclaw-labs/zeroclaw/issues/10533) [CLOSED] `model_routing_config` 拒绝 `custom.*` 等合法 provider 槽位，工具校验与配置 schema 分叉。**已关闭。**
- [#10828](https://github.com/zeroclaw-labs/zeroclaw/issues/10828) [OPEN] `openai-codex --device-code` 使用过时/错误的 OpenAI 设备认证端点，返回 404（v0.8.5 可复现）。**尚无对应 fix PR。**

**P2 / S2–S3（降级级）**
- [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) [OPEN] 非视觉模型场景下，内部 `[media attachment]` 占位符被下发给用户。**已由 PR #10827 处理相关 TTS 侧问题。**
- [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) [OPEN] 新日志 sink 在默认并行 runner 下与迁移测试产生竞态。**待修复。**
- [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) [OPEN, in-progress] `config set` 与 RPC `config/set` 持久化时未运行校验，越界值可以 exit 0 写入。**修复进行中；同源问题 #10837 已关闭。**
- [#10842](https://github.com/zeroclaw-labs/zeroclaw/issues/10842) [OPEN] Telegram reaction 工具静默 no-op：`TelegramChannel` 未覆写 `add_reaction`/`remove_reaction`，继承默认实现直接返回 `Ok(())`。**今日新报，尚无 fix PR。**
- [#10821](https://github.com/zeroclaw-labs/zeroclaw/issues/10821) [OPEN] `zeroclaw service logs` 将陈旧 stderr 显示为当前输出；未加 `--verbose` 时服务化 daemon 不产生 stderr tracing。**待修复。**
- [#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) [CLOSED] `knowledge.db_path` 的 `~` 展开为全局替换而非前缀替换，导致 knowledge 工具被静默丢弃。**已关闭。**

**观察**：当日 Bug 呈现明显的"配置校验一致性"聚集特征（#10320、#10837、#10533、#10721），提示配置写入路径缺少统一校验层。相关方向已有 [#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822) 提出原子批量写入方案。

## 6. 功能请求与路线图信号

- **[#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822)** [OPEN, in-progress, accepted] `config/set-many` — 原子批量配置变更 RPC（全成或全不成）。针对当前每个 RPC 配置变更为独立提交、缺乏事务性的问题。**已有明确推进状态，纳入下一版本概率较高。**
- **[#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826)** [OPEN, accepted] ZeroCode 会话根目录选择显式化，并在恢复会话时保留已保存的根路径。承接 PR #10565 的后续工作。
- **[#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580)** [CLOSED] 文档链接门禁覆盖全仓库而非仅新增链接。
- **[#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)** [OPEN, in-progress] ADR 清单与已接受 RFC 的决策记录追踪。
- **PR 侧对应实现**：
  - [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) `feat(runtime): coordinate agent lifecycle mutations` — 为 daemon RPC、gateway、channels、ACP 准入与 CLI 变更提供统一实时配置权威。size:XL，覆盖极广。
  - [#10656](https://github.com/zeroclaw-labs/zeroclaw/pull/10656) `feat(ci): execute hardware feature tests` — 在 Linux Test 任务中以非默认 `hardware` feature 运行硬件库测试。
  - [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) `feat(runtime): anchor context compaction to model window ratio` — 新增 `runtime_profiles.<name>.context_compact_ratio`，使裁剪预算基于所选模型窗口而非固定值。
  - [#10622](https://github.com/zeroclaw-labs/zeroclaw/pull/10622) `feat(slack): optionally accept bot and workflow messages` — 可选接受 `subtype = "bot_message"` 的 Slack 消息。

## 7. 用户反馈摘要

- **配置写入缺乏校验是反复出现的痛点**：#10320 与 #10837 描述同一类问题——CLI `zeroclaw config set`、RPC `config/set`、gateway PATCH 三条写入路径行为不一致，"退出码 0 写入越界值"直接损害用户对配置系统的信任。
- **静默失败最难排查**：#10721（knowledge 工具被静默丢弃）、#10842（Telegram reaction 报告成功但无任何网络 I/O）都属于"报成功、不干活"模式，显著增加用户诊断成本。
- **认证流程存在硬伤**：#10828 显示 `openai-codex --device-code` 在 v0.8.5 上立即失败并返回 404，阻断新用户接入。
- **多主机算力诉求真实存在**：#10360 的提出者明确描述"许多运营者已拥有多台大部分时间闲置的 PC、笔记本、手机"，希望在 local-first、security-first 前提下聚合算力——这是一个跨越 daemon/gateway/runtime/security 的大体量需求。
- **治理摩擦成为可感知成本**：#10549 与 #10366 的讨论均指向"流程等待时间"和"审查证据标准不清"，属于贡献者体验层面的不满。

## 8. 待处理积压

以下条目创建时间较早、更新时间较近、长期停留于待审或阻塞状态，建议维护者优先处置：

- **[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** [OPEN] 创建于 2026-07-29，已挂起约 **47 天**，标记 `needs-author-action`、`size:XL`、`principal contributor`。上下文压缩按模型窗口比例锚定的核心改动。
- **[#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724)** [OPEN] 创建于 2026-08-04，已挂起约 **41 天**，`needs-maintainer-review`、`risk:high`、`size:XL`。`always_ask` 在 Full 自主模式下存活的审批策略修复；维护者已刷新分支并修复策略归属与 Rust API 兼容性。
- **[#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)** [OPEN] 创建于 2026-08-03，已挂起约 **42 天**，标记 `status:blocked` 与 `do-not-merge`。为 history-trim 事件暴露 token 计量。存在明确阻塞标记，需维护者给出解阻路径或关闭决策。
- **[#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381)** [OPEN] 创建于 2026-08-26，`needs-maintainer-review`、`risk:high`、`size:XL`。在应用 workspace cwd 前将 Unix 宿主启动器解析为规范绝对路径，涉及 Native/Docker/Firejail/Bubblewrap 多运行时——安全关键且在等多个运行时的审查意见。
- **[#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691)** / **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** [OPEN] 均创建于 2026-07-04，已存续逾 **2 个月**，是治理体系的两大核心 Tracker。其长期开放本身即说明治理收敛尚未完成。
- **[#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)** [OPEN] v0.8.5 稳定化线 Tracker，规划的 stabilization 窗口已于 2026-08-30 结束，但 Tracker 仍处开放状态，建议明确关闭或延期说明。

---

**健康度小结**：输入活跃（24 小时 76 条 Issue/PR 更新），输出偏慢（仅 9 条合并/关闭），41 条 PR 排队等待合并，其中多条为 size:XL、risk:high 的跨模块改动，且 #9713 带有 `do-not-merge` 阻塞标记。治理类 Tracker 占据讨论热度榜首，反映流程本身正成为项目吞吐的约束项。建议下一周期优先清理长尾 PR 审查队列，并明确 #9713 等阻塞项的处置结论。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*