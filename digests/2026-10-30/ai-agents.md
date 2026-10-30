# OpenClaw 生态日报 2026-10-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-30 16:43 UTC

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

# OpenClaw 项目日报 · 2026-10-30

> 数据来源：OpenClaw (github.com/openclaw/openclaw) 过去 24 小时 GitHub 数据。所有链接均按仓库 `openclaw/openclaw` 与原文编号给出。

---

## 1. 今日速览

项目今日处于**高活跃、高积压**状态：24 小时内 Issues 更新 500 条（新开/活跃 344、关闭 156），PR 更新 500 条（待合并 273、已合并/关闭 227），并发布 2 个版本（前沿 beta 与 extended-stable 线）。讨论重心集中在**状态数据库 / 会话状态一致性**（WAL checkpoint、会话写队列、state lease）、**memory-core dreaming 晋升失效**，以及**升级 / doctor / repair 流程阻塞**三类问题上。P1/P0 级缺陷（如启动阻塞事件循环 40–200 秒、host exec 完整性准入失败、更新 repair 失败）仍在开放中，且多条带有 `clawsweeper:needs-maintainer-review` 标签，说明**维护者评审带宽是当前主要瓶颈**。

---

## 2. 版本发布

### v2026.10.10-beta.5
- **内容（Highlights）**：Node 兼容性修复 — 安装与更新在 Node `>=24.16.0 <25 || >=26.1.0` 上恢复可用；Node 24.22.1 / 26.12.1 由**硬性要求改为安全建议**；Node 26 worker 在 stdin 为文件时不再中止（#186589、#187516）。
- **性质**：前瞻 beta 线，属于兼容性放宽与稳定性修复，未提及破坏性变更。
- **迁移注意**：未提及需要迁移或破坏性变更的说明；但“安全建议替代硬性要求”意味着在更低 Node 版本上运行不再被阻止，请自行评估环境安全性。

### v2026.9.36
- **内容**：`extended-stable` 线的 **gateway-only** 发布，项目称其相当于当前 LTS。基线为 2026 年 9 月底的 OpenClaw，叠加关键安全更新、可靠性与性能修复，以及新模型支持等功能。
- **性质**：稳定通道下发，面向生产网关用户。
- **注意**：仅 gateway 范围的发布，原文未说明是否影响其他组件；原文摘要在此处截断，未提供完整变更清单。

---

## 3. 项目进展

今日关闭/合并的 PR（共 227 条）中，可见的关闭项多为小体量 CI 与清理类改动，整体属于**维护性推进**，而非大功能落地：

- **#188516**（CLOSED）`fix(ci): align Knip entry ownership with maintained scripts` — 修复依赖 CI 因入口注册缺失而误报未使用代码的问题。
- **#188505**（CLOSED）`improve(test): reduce PR main refresh fixture startup` — 减少 PR main-refresh 测试中重复启动完整受监管 wrapper 的开销，无用户可见行为变化。
- **#188478**（CLOSED）`refactor(minimax): read music JSON responses without cloning` — MiniMax 音乐生成不再克隆 JSON 响应，格式与指标保持兼容。
- **#188514**（CLOSED）`fix(queue): let owner messages steer active automation turns` — 修复 `queueMode: "steer"` 的 owner 消息被排在自动化回合之后的问题。

**整体评估**：今日合并侧以 CI/测试/重构类小改动为主，未见大型功能 PR 合入；核心修复能力主要停留在“已开 PR、待评审”阶段（如 #188527、#187795、#188518），项目向前推进的幅度**有限**。

---

## 4. 社区热点

按评论数排序的高热议题，集中在**状态与会话一致性**：

| 议题 | 评论 | 看点 |
|---|---|---|
| [#164294](https://github.com/openclaw/openclaw/issues/164294) Gateway state DB WAL auto-checkpoint 从未完成（被进程内 reader 钉住） | 38 | 本轮讨论量最高，直指 gateway 自身 SQLite WAL 检查点被自身读者阻塞 |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) Code Mode 工具目录在 cron / memory-flush 回合构建不完整，MCP 工具缺失 | 23 | 作者已于 10-21 修正早期结论，仍在推进 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) 短期回忆 512 条上限导致 nightly 驱逐，dreaming deep 阶段永不晋升 | 23 | 与 #164923、#121232 构成“dreaming 晋升失效”问题簇 |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) 原生 host exec 在 2026.10.5 上返回共享状态完整性准入错误 | 20 | P1，至少 28 次失败，无子结果证明 |
| [#172837](https://github.com/openclaw/openclaw/issues/172837) Codex nativeSubagentAssignments 完成后从不移除 | 19 | P1，每个新父线程重复钉住并重发，含 message-loss 影响 |
| [#164923](https://github.com/openclaw/openclaw/issues/164923) 同一主机上某 workspace 晋升 0/512，兄弟 workspace 达 50–90% | 19 | 与 #150635 同源，结构性拒绝原始对话片段 |

**诉求分析**：多条高评论议题共享同一根因族——**“状态写入被接受、却永远不会被推动到下一阶段”**（WAL checkpoint 阻塞、dreaming 排名器与晋升器判定不一致、子代理分配泄漏）。用户反复补充时间线、复现环境与生产数据（如 #143017 的 21.3M cache-write token 实测），说明问题已从“报 bug”演化为**跨版本追踪**。部分议题长期带有 `needs-product-decision`，反映出产品决策缺位正在延长缺陷寿命。

---

## 5. Bug 与稳定性

按严重程度排列：

**P0 / 发布阻断**
- [#162211](https://github.com/openclaw/openclaw/issues/162211)（P0）Gateway 启动阻塞事件循环 40–200 秒，健康监控误判为断连并进入重启循环 — **未见 fix PR**（`clawsweeper:no-new-fix-pr`）。
- [#158592](https://github.com/openclaw/openclaw/issues/158592)（P0）macOS 休眠唤醒后某 agent 模型运行时发布超时且不恢复，所有入站消息失败直到重启 — **未见 fix PR**。
- [#70903](https://github.com/openclaw/openclaw/issues/70903)（P0）持久化文件式 provider 冷却在计费恢复后仍封锁用户数小时 — **未见 fix PR**，标记 stale。

**P1 / 崩溃循环与状态损坏**
- [#177656](https://github.com/openclaw/openclaw/issues/177656) host exec 完整性准入错误（2026.10.5）— 无 fix PR。
- [#172837](https://github.com/openclaw/openclaw/issues/172837) Codex 子代理分配泄漏，影响 message-loss — 无 fix PR，需实机复现。
- [#166017](https://github.com/openclaw/openclaw/issues/166017) `mcp.sessionIdleTtlMs` 默认值在未设置时不生效，spawn broker 撑满 256 子进程后所有 exec/read/MCP 启动失败 — 有 linked PR。
- [#182476](https://github.com/openclaw/openclaw/issues/182476) Windows `update repair` 因 `OPENCLAW_STATE_LEASE_LOST` 确定性失败 — 无 fix PR。
- [#157617](https://github.com/openclaw/openclaw/issues/157617) 会话写入队列因 agent DB 完整性/维护工作等待数分钟（2.81 GB SQLite）— 无 fix PR。
- [#148789](https://github.com/openclaw/openclaw/issues/148789) 模型 fallback 链在 harness 级会话失败时耗尽全部候选并归因错误 — 有 source-repro。
- [#163566](https://github.com/openclaw/openclaw/issues/163566) durable context-engine 回合卡在 `session-rebound`，每回合约 100 秒 CPU — 无 fix PR，stale。
- [#65374](https://github.com/openclaw/openclaw/issues/65374) dreaming 系统在多 agent 环境下污染 agent 身份（共享语料无边界），含数据丢失与安全影响 — 无 fix PR，需产品或安全评审。

**P2 / 行为与体验缺陷**
- [#123792](https://github.com/openclaw/openclaw/issues/123792) CLI 后端助手回合重复渲染（Control UI 与 Android，Telegram 不受影响）。
- [#142037](https://github.com/openclaw/openclaw/issues/142037) Slack 顶层入站消息被记为 mute，线程不匹配使救援逻辑不触发。
- [#179481](https://github.com/openclaw/openclaw/issues/179481) `doctor --fix` 在 gateway 运行时拒绝 `transcript-directives` 并阻断后续迁移，无在线修复路径。
- [#178359](https://github.com/openclaw/openclaw/issues/178359) `doctor --fix --non-interactive` 在 plugin-capture 阶段空转 15+ 分钟。

**今日新增修复类 PR（对应上下文）**
- [#188527](https://github.com/openclaw/openclaw/pull/188527) 修复已提交输入重试时报 `Session transcript keyed user is outside the current turn` 并产生重复回合。
- [#187795](https://github.com/openclaw/openclaw/pull/187795) 保留本地最终回复到对话历史（P1）。
- [#188522](https://github.com/openclaw/openclaw/pull/188522) 恢复含 U+2028/U+2029 的 Git 备份。
- [#188521](https://github.com/openclaw/openclaw/pull/188521) 修复 CUA Computer Linux 注册冻结 Gateway 启动（报告耗时 201,369.1 ms）。

---

## 6. 功能请求与路线图信号

- **exec-approvals 支持 denylist**（[#6615](https://github.com/openclaw/openclaw/issues/6615)，👍8，自 2026-02 起长期开放）：支持“除 X 外全部允许”策略。已标记 `needs-security-review` 且 `linked-pr-open`，**有进入下一版本的迹象**，但安全评审是关口。
- **A2A 单向派发模式**（[#44309](https://github.com/openclaw/openclaw/issues/44309)）：让 agent 间消息投递不再回环 ping-pong。标记 `needs-product-decision`，**尚需产品定性**。
- **全动态模型发现**（[#10687](https://github.com/openclaw/openclaw/issues/10687)，👍4）：面向 OpenRouter 等快速变动目录。属于架构性改动，短期落地可能性低。
- **Dream Diary 语言可配置**（[#79223](https://github.com/openclaw/openclaw/issues/79223)，👍2）：日记 prompt 硬编码英文，非英文工作区输出混杂。改动面小，**较易纳入**。
- **`sessions tail` 精简指标展示**（[#125311](https://github.com/openclaw/openclaw/issues/125311)）：轨迹记录器能力部分已由 #125941 合并落地，剩余为展示层。
- **音频转写回声可选静默**（[#187312](https://github.com/openclaw/openclaw/pull/187312)）：已有 PR，Closes #187243，属小型体验优化，但状态为 `needs proof`。
- **认证身份受众边界文档**（[#188494](https://github.com/openclaw/openclaw/pull/188494)）：个人指令选择与上下文准入的边界定义，属安全架构前置设计。

---

## 7. 用户反馈摘要

- **升级与修复流程是最大痛点**：Windows 上 repair 确定性失败（#182476）、`doctor --fix` 两种模式分别被拒绝或空转（#179481、#178359）、durable 回合在 update + repair 后卡死并每回合烧 100 秒 CPU（#163566）。用户反复组合“升级 → doctor → 修复”，但流程本身成为故障源。
- **状态数据库规模成为现实瓶颈**：用户报告 ~1,720 会话、~2.81 GB SQLite 主文件，Doctor 显示完整性 OK，但会话写入队列等待数分钟（#157617）；另有用户观察到 WAL checkpoint 自启动起从未完成（#164294）。
- **记忆与 dreaming 的“看起来在工作、实际不产出”**：#150635、#164923、#121232 从不同角度报告“Ranked N, Promoted 0 永远如此”，用户甚至把所有阈值覆盖为 0 仍零候选。这类“静默失败”比崩溃更消耗信任。
- **成本敏感度真实存在**：#143017 用 949 次生产抓包与 21.3M cache-write token 实测，指出持久会话有五种前缀重写路径——用户在用生产数据推动 prompt-cache 优化。
- **多平台细节仍不齐**：#123792 指出 Control UI 与 Android 重复渲染而 Telegram 正常；#142037 指出 Slack 顶层消息线程不匹配；#182848 试图让 Android 管理员在聊天中管理自动化。用户对**端间行为不一致**的敏感度高。
- **满意信号**：多个议题下用户主动补充“某行已在 2026.10.3 修复、某行需 2026.10.5”（#164972），说明版本迭代确实在解决具体行项，但用户被迫自行维护兼容矩阵。

---

## 8. 待处理积压

长期开放、需要维护者介入的高价值条目：

- [#6615](https://github.com/openclaw/openclaw/issues/6615) exec-approvals denylist — 自 2026-02-01 开放，👍8，安全评审未决。
- [#10687](https://github.com/openclaw/openclaw/issues/10687) 动态模型发现 — 自 2026-02-06 开放，👍4。
- [#44309](https://github.com/openclaw/openclaw/issues/44309) A2A 单向派发 — 自 2026-03-12 开放，等待产品决策。
- [#70903](https://github.com/openclaw/openclaw/issues/70903) provider 冷却封锁（P0）— 自 2026-04-24 开放并已 stale，👍1。
- [#65374](https://github.com/openclaw/openclaw/issues/65374) dreaming 污染多 agent 身份（P1，含数据丢失/安全）— 自 2026-04-12 开放，👍2。
- [#79223](https://github.com/openclaw/openclaw/issues/79223) Dream Diary 语言可配置 — 自 2026-05-08 开放，👍2。
- [#162211](https://github.com/openclaw/openclaw/issues/162211) 启动阻塞事件循环 40–200 秒（P0，发布阻断）— 自 2026-09-30 开放，无 fix PR。
- [#158592](https://github.com/openclaw/openclaw/issues/158592) 休眠唤醒后运行时发布失败（P0，发布阻断）— 自 2026-09-26 开放，需实机复现。
- [#150635](https://github.com/openclaw/openclaw/issues/150635) 短期回忆驱逐导致 dreaming 永不晋升 — 自 2026-09-17 开放，已 stale 且需产品决策。

**维护者提示**：以上条目普遍带有 `clawsweeper:no-new-fix-pr` 与 `needs-maintainer-review`，且有两条 P0 发布阻断问题处于无修复状态。建议优先处理 #162211、#158592 两条 P0，其次清理长期 stale 的安全/数据相关项（#65374、#70903），以缩小“高评论 + 零修复”的堆积面。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析（2026-10-30）

---

## 1. 生态全景

个人 AI 助手开源生态今日整体呈现**“高活跃、低吞吐”**的普遍特征：多数项目 Issues/PR 提交量充足，但合并率普遍偏低，维护者评审带宽成为跨项目共同瓶颈（ZeroClaw 待合并/合入 ≈ 9:1，Hermes 约 46:4，NanoClaw 11:1）。讨论焦点从“功能扩张”转向**状态一致性与静默失败**——OpenClaw 的 WAL checkpoint 阻塞、CoPaw 的 Auto-Dream 静默丢数据、NanoClaw 的投递静默失败构成同一类信任危机。与此同时，安全默认值（ZeptoClaw serve 无认证、NanoBot 工具调用注入、ZeroClaw 配对码永不过期）集中暴露，说明生态正从“能跑通”进入“可交付”阶段。多 Agent 协作（PicoClaw #1584/#423、OpenClaw A2A）仍以 PoC/WIP 形式反复开启又关闭，尚未形成共识架构。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/关闭） | PR 更新（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（344/156） | 500（273/227） | 2（beta.5 + 9.36 稳定线） | 高活跃、高积压；3 条 P0 无 fix PR，维护者评审为瓶颈 |
| **ZeroClaw** | 22（14/8） | 50（45/5） | 无 | 高活跃、低合入（9:1）；P1 安全项积压逾三月 |
| **CoPaw** | 8 | 33（22/11） | 无（v2.3.0-beta.1 验证中） | 贡献密集；3 个高严重度静默失败 Bug 无 fix |
| **Hermes Agent** | 50（49/1） | 50（46/4） | 无 | 积压 > 消化（合并率 ~8%）；3 条 P1 零 fix，Windows 为最大风险面 |
| **NanoBot** | 3 | 59（35/24） | 无 | 高频修复；多条 conflict PR 滞留，社区讨论冷 |
| **NanoClaw** | 2（2/0） | 12（11/1） | 无 | 积压扩大；v2 WhatsApp 媒体 Bug 开放 5 个月无 fix |
| **PicoClaw** | 0 | 14（0/14） | 无 | 队列清空；以聚合 PR 清理积压为主，无新 Issue |
| **LobsterAI** | 3（2/1） | 8（1/7） | 无（release 分支已合，发布待确认） | 交付节奏稳定；风控申诉为体验风险点 |
| **ZeptoClaw** | 5 | 6（5/1） | 无 | 中高活跃；质量取向推进，dependabot 积压 6 周 |
| **IronClaw** | 0 | 3（3/0，全 dependabot） | 无 | 低活跃，仅依赖维护；wasmtime 版本诉求重叠 |
| **NullClaw / TinyClaw / Moltis** | 0 | 0 | 无 | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模优势显著**：OpenClaw 单日 Issues+PR 更新达 1000 条量级，是第二名（ZeroClaw/Hermes 各 72 条）的十余倍，已形成独立的问题分层体系（P0/P1/P2、`clawsweeper:*` 标签、`needs-product-decision` 等），说明其社区治理复杂度远超同类。

**技术路线差异**：
- OpenClaw 是唯一同时维护**双发布通道**（beta 前瞻线 + `extended-stable` gateway-only LTS）的项目，面向生产网关用户，工程成熟度最高。
- 其问题画像集中在**状态数据库规模与一致性**（2.81 GB SQLite、WAL checkpoint 永不完成、会话写队列），这是长期运行、规模化使用后才暴露的深层问题，同类项目尚未触及此阶段。
- 相对地，NanoBot/Hermes 的痛点仍停留在 Provider 错误语义与平台适配层，处于 OpenClaw 更早期的演进阶段。

**社区规模对比**：OpenClaw 拥有成规模的生产用户群（用户提交 21.3M cache-write token 实测、949 次抓包等生产级证据），而 PicoClaw、IronClaw 等仍以维护者自查与 dependabot 为主。OpenClaw 的**优势**是生态体量与问题深度，**短板**是评审带宽被三类根因族（状态写入不推进、dreaming 晋升失效、升级/doctor 阻塞）大量占用，P0 长期无 fix PR 是其当前最大隐患。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **静默失败 / 可观测性** | OpenClaw（dreaming “Ranked N, Promoted 0”）、CoPaw（Auto-Dream 丢记忆仍报 success）、NanoClaw（投递失败不告知 agent、格式解析失败整条丢弃）、NanoBot（DeepSeek 中断被报为完成） | 失败必须显式暴露并重试，而非静默丢弃或假报成功 |
| **状态 / 会话一致性** | OpenClaw（WAL checkpoint、state lease）、ZeroClaw（追加式会话事件历史 RFC #10526）、Hermes（网关重读全量历史 #146643、state.db 409） | 统一事件模型、确定性状态重放、写入后推进到下一阶段 |
| **工具调用安全边界** | NanoBot（`<tool_call>` 注入 p1 #6147）、ZeptoClaw（serve API 无认证 #713/#714）、PicoClaw（exec 环境变量净化 #1258）、ZeroClaw（会话所有权 #11234） | 结构化 tool-call、默认认证、环境变量 allow/deny list |
| **Provider 错误语义与容错** | NanoBot（DeepSeek 限流/中断）、CoPaw（裸 APIError 归 unknown #8505）、Hermes（reasoning 别名 400 #136486）、OpenClaw（fallback 链耗尽） | 从错误文本识别真实状态码，触发重试/降级 |
| **多渠道媒体收发一致性** | NanoClaw（Proton Mail、WhatsApp 媒体不可达）、PicoClaw（QQ/飞书/iMessage 附件）、LobsterAI（微信扫码、OpenClaw IM 热重载）、Hermes（BlueBubbles 去重） | 跨平台行为对齐，统一媒体层与去抖/去重 |
| **记忆 / RAG 能力** | OpenClaw（dreaming 晋升）、NanoClaw（LanceDB 混合检索 #4239）、ZeroClaw（RAG RFC #11235）、CoPaw（ReMe 上下文压缩 #8463） | 向量 + BM25 混合召回、记忆来源可追溯、大小护栏 |
| **本地模型 / 自托管** | NanoClaw（llmman #4210）、CoPaw（本地模型参与决策 #8463）、ZeroClaw（Ollama/MLX-LM 行为） | 本地模型托管与工具调用兼容 |
| **插件 / skill 机制扩展** | NanoClaw（零核心改动 skill 惯例）、CoPaw（第三方 agent 插件化 #8426）、Hermes（插件 API #140199）、OpenClaw（exec-approvals denylist #6615） | 无侵入式扩展、安全评审前置 |
| **多 Agent 协作** | PicoClaw（Sub-turn PoC #1584、协作框架 #423 均关闭）、OpenClaw（A2A 单向派发 #44309）、ZeroClaw | 分层执行、可中断、可信派发 — 尚未收敛 |

---

## 5. 差异化定位分析

| 维度 | 代表项目 | 关键差异 |
|---|---|---|
| **功能侧重** | OpenClaw：全栈生产网关（模型、记忆、多平台、CUA）；PicoClaw：硬件/嵌入式友好 + IM 多渠道（QQ/飞书/iMessage）；LobsterAI：桌面客户端 + 多媒体创作闭环（image studio）；ZeroClaw：可配置性 + 插件生态（多 registry）；ZeptoClaw：轻量 CLI + OpenAI 兼容 serve | OpenClaw 追求广度与稳定线；PicoClaw/ZeptoClaw 追求轻量与硬件适配 |
| **目标用户** | OpenClaw：规模化个人/团队生产用户；LobsterAI：有道生态桌面用户；ZeptoClaw：终端重度用户；NanoBot/CoPaw：中文开发者与 DeepSeek/通义生态 | 生产 vs 极客 vs 生态绑定 |
| **技术架构** | OpenClaw：状态数据库 + 双通道发布；ZeroClaw：Rust + wasmtime + 能力注入构造器；PicoClaw：Go 式 pkg 结构 + skill 体系；IronClaw：Rust + WebUI + wasm harness | 语言/运行时差异明显，Rust 系（ZeroClaw、IronClaw、ZeptoClaw）强调性能与安全，Go/Python 系强调渠道覆盖 |
| **渠道策略** | PicoClaw（QQ/飞书/iMessage）与 NanoClaw（Proton/AgentMail 日历）走“邮件即身份”与国内 IM；OpenClaw/Hermes 覆盖 Telegram/Slack/Discord/Matrix 全矩阵 | 渠道选择映射目标市场与用户场景 |

---

## 6. 社区热度与成熟度

**第一梯队 — 快速迭代 + 治理化（OpenClaw、ZeroClaw、CoPaw、Hermes）**
高提交量、已建立优先级标签与 RFC 流程，但面临评审瓶颈与 P0/P1 积压。处于“功能已成型、可靠性待收敛”阶段。

**第二梯队 — 高频修复 + 质量巩固（NanoBot、NanoClaw、LobsterAI、ZeptoClaw）**
聚焦 Provider 健壮性、渠道去重、安全默认值与发布一致性。交付稳定但社区讨论偏冷（多条目评论/点赞为 0），属于“工程收敛期”。

**第三梯队 — 清理与静默（PicoClaw、IronClaw、NullClaw、TinyClaw、Moltis）**
PicoClaw 以聚合 PR 清空队列、IronClaw 仅 dependabot 维护、其余无活动。处于维护间隙或项目间歇期。

**成熟度判据**：OpenClaw 已出现“用户被迫自维护兼容矩阵”（#164972）与生产数据驱动优化，标志其进入**规模化运营阶段**；而多数同类仍在“报 bug → 修 bug”的早期循环。

---

## 7. 值得关注的趋势信号

1. **“静默失败”取代崩溃成为头号信任杀手**：OpenClaw、CoPaw、NanoClaw、NanoBot 四项目独立出现“报告成功但数据丢失/未送达”。对开发者启示：**失败必须显式化 + 可重试**，checkpoint 前需校验产出有效性。

2. **状态数据库成为规模化瓶颈**：2.81 GB SQLite、WAL 永不 checkpoint、数千会话下 30s 超时（Hermes #146643）——个人助手长期运行后的**状态存储选型与压缩策略**将成核心工程议题。

3. **安全默认值集中补课**：serve 无认证、tool-call 注入、配对码永不过期、exec 环境变量裸奔，说明早期“可用优先”的设计正在偿还安全债，**默认安全（deny-by-default、SRI、认证前置）**将成为下一版本基线。

4. **评审带宽是生态级瓶颈**：几乎每个活跃项目都呈现合并率 < 20%，XL 级 PR 滞留 1–2 月（ZeroClaw #10407、CoPaw #7903）。**自动化评审 / sweeper 机器人 / 分批合入策略**是提升生态吞吐的关键杠杆。

5. **零核心改动的 skill/plugin 模式成为扩展共识**：NanoClaw 明确偏好“零核心改动”的 skill 交付，CoPaw、Hermes 同步推进插件化。对开发者启示：**核心保持稳定，能力以插件下沉**可降低维护负担与冲突。

6. **提示缓存成本进入用户视野**：OpenClaw 用户以 21.3M token 实测推动优化、ZeroClaw #11703 指出工具激活击穿缓存——**提示稳定性（避免动态改写系统提示）**成为成本敏感型运营的硬指标。

7. **本地模型与混合检索落地加速**：llmman、本地 Piccolo 决策、LanceDB 混合召回多点开花，个人助手正从“纯云端”向“本地优先 + 云端补充”演进。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-30）

## 1. 今日速览

NanoBot 今日维持高活跃度：过去24小时共更新 59 条 PR（待合并 35、已合并/关闭 24）与 3 条 Issue，无新版本发布。开发重心明显集中在 **Provider 层健壮性**，尤其是 DeepSeek 系列接口的错误语义修正，主力贡献者 chengyongru 一人提交了 4 条相关 PR/Issue。同时，WebUI 4.0 更新引发了用户对消息滚动与排版样式的负面反馈。整体看，项目处于“高频修复 + 积压清理”阶段，但多个长期 PR 带 `conflict` 标签仍未合入，合并节奏需关注。今日无 Issues/PRs 有显著评论或点赞数据，社区讨论热度偏低，活动主要体现在代码提交量上。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 集中在代码整洁与 DeepSeek 兼容性修正：

- **PR #6529 [CLOSED] refactor(agent): delegate recovery channel eligibility to admission** — 将 `AgentLoop` 中硬编码的 WebSocket 恢复资格判断交由 `RecoveryCoordinator.admit()` 统一管理，消除核心层重复的 channel 知识。属于架构清理，降低后续维护成本。（https://github.com/HKUDS/nanobot/pull/6529）
- **PR #6532 [CLOSED] fix(tools): correct DeepSeek Search rate-limit guidance** — 修正错误提示中过时的 5 QPS 配额（实际文档为 100 QPS），并同步更新配置指南。直接回应了 Issue #6531。（https://github.com/HKUDS/nanobot/pull/6532）
- **Issue #6531 [CLOSED]** 随上述 PR 一并解决。

整体来看，今日推进幅度有限，主要以小范围正确性修复与内部重构为主，未见大型功能落地。

## 4. 社区热点

今日无高评论数或高点赞的讨论，各条目评论/点赞均接近 0，社区互动偏冷。相对值得关注的是 Issue #6526：

- **Issue #6526 [OPEN] “no earlier messages” message** — 用户对 4.0 更新表达强烈不满，称 “no early messages” 提示阻断了原生滚动，且字体大小等样式“非常奇怪”。评论数 1。该条代表了一类体验型反馈，虽热度不高，但情绪信号明确。（https://github.com/HKUDS/nanobot/issues/6526）

背后诉求：WebUI 4.0 的交互改版在消息浏览与视觉排版上可能引入了回归，值得产品侧优先核查。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — PR #6147 [OPEN] fix(providers): tighten tool calls and compatibility fallbacks**（priority: p1，含 security 标签）：助手文本中的 `<tool_call>` 标记（包括被引用的示例）可能被当作可执行工具调用，存在注入/误执行风险。已移除 #4662 引入的明文提取逻辑，要求使用结构化 tool-call 字段。**已有 fix PR，待合并**。（https://github.com/HKUDS/nanobot/pull/6147）
2. **中 — Issue #6530 [OPEN] DeepSeek Chat Completions 中断被报告为完成**：`insufficient_system_resource` / `aborted` 两种中断被当作正常完成，导致部分回答被保存为正式回复。**已有 fix PR #6533**。（Issue: https://github.com/HKUDS/nanobot/issues/6530 ；PR: https://github.com/HKUDS/nanobot/pull/6533）
3. **中 — PR #6296 [OPEN] Gemini 并行工具调用串扰**：Gemini 的 OpenAI 兼容流式 API 不返回 `tool_calls[].index`，导致并行调用被错误合并。**已有 fix PR**。（https://github.com/HKUDS/nanobot/pull/6296）
4. **中 — PR #5764 [OPEN] FallbackProvider 半开探测并发问题**：冷却期后并发请求可绕过单探测约束。**已有 fix PR，带 conflict 标签**。（https://github.com/HKUDS/nanobot/pull/5764）
5. **中 — Issue #6526 [OPEN] 4.0 版 WebUI 消息滚动被阻断、样式异常**（见上）。**暂无对应 fix PR**。
6. **低-中 — PR #5605 [OPEN] 邮件通道过早标记 `\Seen`**：在消息实际投递前即标记已读，导致被过滤拒绝的消息也显示已读。**已有 fix PR，带 conflict 标签**。（https://github.com/HKUDS/nanobot/pull/5605）
7. **低-中 — PR #5630 [OPEN] Dream 记忆文件缺少大小上限**：#5622 修复重复问题的副作用是移除了 `SOUL.md`/`USER.md`/`MEMORY.md` 的唯一大小限制，存在回归风险。**已有 fix PR，带 conflict 标签**。（https://github.com/HKUDS/nanobot/pull/5630）

## 6. 功能请求与路线图信号

- **新增内置 Provider（多条活跃 PR）**：Opper（#5845）、Tsubasa（#5947）、aimlapi.com（#5666），均沿用现有网关注册模式，接入成本低，具备近期合入可能。（https://github.com/HKUDS/nanobot/pull/5845 ；https://github.com/HKUDS/nanobot/pull/5947 ；https://github.com/HKUDS/nanobot/pull/5666）
- **邮件通道能力增强**：Office365/Outlook 委托 OAuth（#5609）、按收件别名过滤（#5606）——前者契合微软弃用基础认证的行业趋势，路线图价值较高，但均带 `conflict` 标签，合入前需解决冲突。（https://github.com/HKUDS/nanobot/pull/5609 ；https://github.com/HKUDS/nanobot/pull/5606）
- **Telegram 细节体验修复**（#5803）：富文本换行、`topic_id` 暴露、输入状态处理。（https://github.com/HKUDS/nanobot/pull/5803）
- **Discord 运行时重置时取消延迟反应任务**（#5864，修复 #5806）。（https://github.com/HKUDS/nanobot/pull/5864）

综合判断：下一版本更可能优先纳入 DeepSeek 错误语义修正与工具调用安全收紧（p1），新增 Provider 类改动则视维护者合并带宽而定。

## 7. 用户反馈摘要

- **对 4.0 更新不满**：Issue #6526 用户明确表示“对新版 4.0 非常失望”，痛点集中在消息滚动被 “no early messages” 阻断、字体尺寸等视觉样式怪异，使用场景为主力使用 WebUI 进行长对话浏览。
- **对接口正确性的深度关注**：Issue #6531/#6530 由同一用户基于具体 commit `7eacc78` 对照 DeepSeek 官方文档提出，体现出社区中存在按官方规范严格核查实现质量的用户，对错误语义（速率限制提示、中断状态）敏感。
- 今日材料中未出现明确的正面评价反馈。

## 8. 待处理积压

以下 PR 创建于 9 月甚至更早，至今仍 OPEN 且带 `conflict` 标签，建议维护者优先安排：

- **PR #5609 / #5606 / #5605**（均创建于 2026-08-30，作者 tilladam）：邮件通道 OAuth、别名过滤、`\Seen` 修复三件套，已滞留约两个月。（https://github.com/HKUDS/nanobot/pull/5609 ；https://github.com/HKUDS/nanobot/pull/5606 ；https://github.com/HKUDS/nanobot/pull/5605）
- **PR #5630**（创建于 2026-09-02）：Dream 记忆文件大小护栏，涉及回归风险。（https://github.com/HKUDS/nanobot/pull/5630）
- **PR #5764**（创建于 2026-09-14）：FallbackProvider 半开探测串行化。（https://github.com/HKUDS/nanobot/pull/5764）
- **PR #6147**（创建于 2026-10-10，p1 + security）：工具调用安全收紧，虽非最老，但优先级最高，不应长期悬置。（https://github.com/HKUDS/nanobot/pull/6147）

待合并总数 35 条，已出现明显的合入积压，冲突处理与评审带宽是当前项目健康度的主要制约因素。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-10-30）

## 1. 今日速览

项目今日活跃度**高**，但以增量维护为主、无新版本发布。过去 24 小时 Issues 更新 50 条（新开/活跃 49、关闭 1），PR 更新 50 条（待合并 46、已合并/关闭 4），合并率仅约 8%，**积压压力明显大于消化能力**。讨论热度集中在长期存在的架构性 RFC（#143379，32 条评论）和一批 P1/P2 稳定性问题（Windows 更新权限、凭据池计费、网关性能）。今日无新 Release，进展主要体现在 4 条已合并/关闭的 PR 上。

## 2. 版本发布

今日无新版本发布，不赘述。

## 3. 项目进展

今日已合并/关闭 PR 共 4 条，推进方向以修复为主：

- **#138426（CLOSED）** `fix(desktop): isolate manual queued sends from automatic queue draining` — 修正桌面端"Send now"误触发整个队列排空、空 Enter 键成为隐藏快捷发送的行为问题。链接: NousResearch/hermes-agent PR #138426
- **#110512（CLOSED）** `fix(memory): strip base64 data URIs before logging, trajectories, and memory sync` — 阻止 base64 data URI 泄漏进日志、轨迹与长期记忆，属于隐私/存储卫生类修复。链接: NousResearch/hermes-agent PR #110512
- **Issue #116774（CLOSED）** `npm audit fix` 无法在 `hermes update` 后持久化的问题已关闭。链接: NousResearch/hermes-agent Issue #116774

整体评估：今日合并集中在桌面端交互与数据卫生，**核心稳定性问题（见第 5 节）尚未进入合并通道**，项目向前推进幅度有限。另有两条新提交的高优先级修复 PR 值得关注：#146929（损坏缓存包不再阻断所有插件安装）、#146931（`/loop` 重复唤醒去重）。

## 4. 社区热点

| 排名 | 条目 | 评论 | 链接 |
|---|---|---|---|
| 1 | #143379 RFC：DOC-CHAIN SUBSTRATE'S NETWORK（安全/压缩） | 32 | NousResearch/hermes-agent Issue #143379 |
| 2 | #79087 Windows 桌面端 runtime probe 超时致健康安装被导向首次引导 | 15 | NousResearch/hermes-agent Issue #79087 |
| 3 | #122935 Windows `hermes update` 留下硬化 DACL 导致非提权进程无法执行 python/node（WinError 5） | 15 | NousResearch/hermes-agent Issue #122935 |
| 4 | #118379 Anthropic 逐请求凭据刷新回退凭据池轮换，两个订阅合并计费 | 12 | NousResearch/hermes-agent Issue #118379 |
| 5 | #146643 网关每次变更重读全量会话历史，CPU 与桌面超时随存储增长 | 12 | NousResearch/hermes-agent Issue #146643 |
| 6 | #138915 网关占用 state.db 时 Dashboard 变更被 409 拒绝 | 12 | NousResearch/hermes-agent Issue #138915 |
| 7 | #123985 就地压缩后桌面重复渲染会话首条消息 | 12 | NousResearch/hermes-agent Issue #123985 |

诉求分析：#143379 反映社区对**持久记录在会话压缩后保持来源可追溯**的架构级关注，讨论跨度长达一周；Windows 相关两条（#79087、#122935）指向**更新与安装链路在 Windows 上的系统性缺陷**，且 #79087 中用户已主动撤回最初"双后端"的判断并自行做 `ParentProcessId` 验证，显示报告者参与度高但根因仍未定论；#118379 则是直接涉及**计费正确性**的信任问题。响应度最高的条目（👍 2）为 #136486（`reasoning` 别名重复字段导致 HTTP 400）。

## 5. Bug 与稳定性

按严重程度排列（P1 优先）：

**P1**
- **#79087** Windows 桌面端 runtime probe 超时 → 健康安装被错误路由至首轮引导并提议重装。无对应 fix PR。链接: NousResearch/hermes-agent Issue #79087
- **#122935** `hermes update` 后 `%HERMES%\tools\*` 继承硬化 DACL，非提权登录进程执行受管 python/node 报 `WinError 5`。无 fix PR；相关方向有 #146657（Windows arm64 CI/测试修复）。链接: NousResearch/hermes-agent Issue #122935
- **#118379** Anthropic 逐请求凭据刷新回退凭据池轮换，两个池化订阅被计为一份账单，回合随后回退至其他 provider。属安全边界/计费类，无 fix PR。链接: NousResearch/hermes-agent Issue #118379

**P2**
- **#146643** 网关每次变更重读全量会话历史，数千会话规模下占用 1.5–2.5 核，桌面请求 30s 超时。无 fix PR。链接: NousResearch/hermes-agent Issue #146643
- **#138915** 网关持有 state.db 时 Dashboard 批量操作恒返回 409。无 fix PR。链接: NousResearch/hermes-agent Issue #138915
- **#123985** 就地压缩后桌面重复显示会话最早消息（非客户端缓存问题）。无 fix PR。链接: NousResearch/hermes-agent Issue #123985
- **#136486** OpenAI 兼容端重放 `reasoning` 别名与 `reasoning_content` 并存 → HTTP 400 `duplicate field`，字段拒绝学习不触发导致每回合回退。👍 2，无 fix PR。链接: NousResearch/hermes-agent Issue #136486
- **#131786** 网关完成通知尾部对长单行 JSON 丢弃全部有效输出。无 fix PR。链接: NousResearch/hermes-agent Issue #131786
- **#142663** Codex Responses 网关缺少安全的自然中间态助手消息（Telegram 仅送达最终回复）。无 fix PR。链接: NousResearch/hermes-agent Issue #142663
- **#141175** 团队网关中继静默禁用直连平台，Dashboard Channels 开关无解释回滚（本周 3 条 Discord 线程）。无 fix PR。链接: NousResearch/hermes-agent Issue #141175

**P3 / 其他**
- **#34372**、**#30708**、**#30989** BlueBubbles 适配器缺少入站去重：同一条 iMessage 被处理两次、产生并行会话、附件作为第二事件打断进行中的回合。链接: NousResearch/hermes-agent Issue #34372 / #30708 / #30989
- **#129305** 桌面语音会话在 hydration 重写实时助手 id 时丢失回复尾部。链接: NousResearch/hermes-agent Issue #129305

**今日已有 fix PR 的项**
- **#146926** 修复 psutil `NoSuchProcess` 测试抖动。链接: NousResearch/hermes-agent PR #146926
- **#146927** 升级存在漏洞的 Zod（4.6.7）与 Undici（6.29.1/7.30.1）锁文件。链接: NousResearch/hermes-agent PR #146927

**小结**：P1 三项均无对应修复 PR，其中两项集中于 Windows 安装/更新链路，**Windows 平台为当前稳定性最大风险面**。

## 6. 功能请求与路线图信号

- **#118570** 原生 WhatsApp 语音通话（Cloud API Calling），入站优先、作为实时语音契约的消费方。P3，`needs-decision`，无 PR。链接: NousResearch/hermes-agent Issue #118570
- **#140199** 插件 API 公开接口：斜杠命令处理器中获取调用会话、从插件创建可见会话。作者正在开发 `spawn-session` 插件（未发布）。链接: NousResearch/hermes-agent Issue #140199
- **#112877** 内联 `::preview` 帧最大宽度可配置（移除硬编码 640px）。链接: NousResearch/hermes-agent Issue #112877
- **#142663** Codex Responses 网关的中间态消息缺口（亦见第 5 节）。链接: NousResearch/hermes-agent Issue #142663

**已有对应 PR、可能进入后续版本的方向**：飞书原生 COT 进度消息 **#107275**（off/brief/detailed 三档，仅发布可见 commentary 与脱敏工具摘要，不暴露隐藏推理）；社区目录新增 Cartograph 仓库分析工具 **#146628**、`hermes-auto-titler` 升级至 v0.3.1 **#146930**。插件 API（#140199）与 WhatsApp 语音通话（#118570）目前无实现 PR，短期内落地概率较低，且后者标注 `needs-decision` 需维护者定调。

## 7. 用户反馈摘要

- **Windows 用户受挫最重**：安装/更新相关 P1 问题持续存在数周至数月（#79087 创建于 2026-08-05，#122935 创建于 2026-09-25），影响面为"非提权登录进程无法启动受管运行时"，属于阻断性体验。#79087 报告者主动撤回错误结论并补做进程测试，体现社区自证意愿强，也说明问题定位成本高。
- **计费信任问题**：#118379 中两个池化订阅被合并计费且回合静默回退至其他 provider，用户对多订阅并用场景的账单可预测性存疑。
- **规模化使用痛点**：#146643 显示在数千会话规模下网关 CPU 占用与桌面 30s 超时，指向重度用户在个人助手长期使用后的性能衰减。
- **消息平台适配一致性**：BlueBubbles 三连问题（#34372/#30708/#30989）反复强调"不像其他平台适配器那样按 GUID 去重"，并与 Telegram 的 debounce/merge 行为对比，诉求是跨平台行为对齐。
- **团队/云端配置困惑**：#141175 来自 pain-miner 聚类，3 条 Discord 支持线程显示用户对"Channels 开关静默回滚"缺乏可解释反馈，属于 UX 与文档双重缺口。
- **正面信号**：#136486 获 2 个 👍，#122935 获 1 个 👍，说明少量高价值问题获得社区认同，但整体反应量偏低（多数为 0），问题更多以讨论而非点赞形式表达关注。

## 8. 待处理积压

维护者应优先关注以下长期未收敛项：

1. **#34372**（创建 2026-05-29）与 **#30708**（2026-05-23）— 两条 BlueBubbles 入站去重问题已积压约 5 个月，#34372 标注 `duplicate`、#30708 标注 `needs-decision`，且今日仍在更新，建议合并处理并定调去重方案。链接: NousResearch/hermes-agent Issue #34372 / #30708
2. **#30989**（2026-05-23）— 同一平台的消息合并/去抖缺口，与上述两条同源。链接: NousResearch/hermes-agent Issue #30989
3. **#79087**（2026-08-05）— P1 Windows 首轮引导误路由，近 3 个月无 fix PR。链接: NousResearch/hermes-agent Issue #79087
4. **#122935**（2026-09-25）— P1 Windows DACL/`WinError 5`，5 周无 fix PR。链接: NousResearch/hermes-agent Issue #122935
5. **#118379**（2026-09-21）— P1 凭据池计费回退，5 周无 fix PR。链接: NousResearch/hermes-agent Issue #118379
6. **#107275**（PR，创建 2026-09-10）— 飞书原生命令 COT 进度消息，已开放 7 周待合并，标注 `sweeper:risk-message-delivery`。链接: NousResearch/hermes-agent PR #107275
7. **#143379**（2026-10-23，32 条评论）— 架构级 RFC，讨论活跃但尚无结论，建议给出明确采纳/否决意见以收敛社区投入。链接: NousResearch/hermes-agent Issue #143379

**健康度小结**：PR 通道拥挤（46 条待合并 vs 今日 4 条合并），且待合并池中包含 #107275 这类跨度 7 周的条目；P1 问题零 fix PR。建议本周优先为 Windows 链路与凭据池两项 P1 分配修复资源，并对积压的 BlueBubbles 系列做合并处理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-10-30）

## 1. 今日速览
过去 24 小时 PicoClaw 呈现“多 PR 集中关闭、没有新 Issue”的状态：Issues 更新为 0 条，PR 更新 14 条且全部为已合并或已关闭，没有待合并项，也没有新版本发布。今日的主要变化来自 PR #1544、#1552、#1545、#1542、#1560、#1555、#1541 这批由 xuwei-xy 提交的批量合并 PR，以及 #1349、#1156、#1258、#1584、#1268、#2516、#423 等功能或修复型 PR 的关闭。整体活跃度中等偏低，工作量集中在清理积压 PR 和整合零散修复，没有新开 Issue，也没有版本产出。

## 2. 版本发布
无新版本发布，本节省略。

## 3. 项目进展
今日关闭的 PR 可以分为两类：

**批量合并整合（作者 xuwei-xy）**
- [#1544](https://github.com/sipeed/picoclaw/pull/1544)：合并 #1514、#1513、#1512、#1510、#1509
- [#1552](https://github.com/sipeed/picoclaw/pull/1552)：合并 #1414、#1409、#1408、#1404
- [#1545](https://github.com/sipeed/picoclaw/pull/1545)：合并 #1500、#1490、#1488、#1487、#1485
- [#1542](https://github.com/sipeed/picoclaw/pull/1542)：合并 #1540（SpawnStatusTool）、#1524（Skills helpers）、#1523（Repo skill examples）、#1522（Credential encryption）、#1521（Passphrase/gateway）
- [#1560](https://github.com/sipeed/picoclaw/pull/1560)：合并 #1312、#1311、#1308
- [#1555](https://github.com/sipeed/picoclaw/pull/1555)：合并 #1390、#1389、#1383、#1381
- [#1541](https://github.com/sipeed/picoclaw/pull/1541)：合并 #1536（媒体临时目录 `pkg/media/tempdir.go`）、#1535（channel DoS 加固）、#1531（DeepWiki badge）

这批 PR 将大量此前挂起的小修复一次性合入 trunk，涉及技能体系（Skills helpers、Repo skill examples）、凭据加密、网关口令、媒体临时目录、channel DoS 加固等方向，是今日项目推进的主要来源。

**功能类 PR**
- [#1349](https://github.com/sipeed/picoclaw/pull/1349)：QQ Channel 附件能力增强，包括解析 emoji 结构、处理语音、图片、视频和文件消息，以及以本地上传方式回复各类附件。
- [#1156](https://github.com/sipeed/picoclaw/pull/1156)：飞书渠道新增 `SendMedia()` 与 `send_file` 工具，使 Agent 能在对话中主动发送图片或文件。
- [#1258](https://github.com/sipeed/picoclaw/pull/1258)：exec 工具环境变量净化，增加可配置的允许和阻止列表，并注入 `PICOCLAW_*` 环境变量；同时阻止 LLM 覆写敏感变量。
- [#1268](https://github.com/sipeed/picoclaw/pull/1268)：新增 iMessage 支持、LLM API 调用日志、对话日志、stop 命令，以及隐私清洗器。
- [#1584](https://github.com/sipeed/picoclaw/pull/1584)：分层 Agent 执行（Sub-turn）PoC，为执行循环中的多 Agent 控制与中断能力打基础。
- [#2516](https://github.com/sipeed/picoclaw/pull/2516)：CI 侧移除 sync-rebase 工作流的每日 cron 触发，仅保留手动 `workflow_dispatch` 运行。

整体来看，今日进展以“清理积压、整合修复”为主，功能层面的实质推进集中在多渠道消息能力、exec 安全、Agent 执行模型预研和 CI 收敛。

## 4. 社区热点
今日数据中所有 PR 的评论数与点赞数均未返回有效值（`undefined` / 0），没有可识别的讨论热度指标。从内容重要性看，值得关注的是两个方向性 PR：

- [#423](https://github.com/sipeed/picoclaw/pull/423)：多 Agent 协作框架与共享上下文池（WIP），包含 agent handoff、发现工具，构建于已合并的 provider 协议重构（#213）与模型回退链（#131）之上。该 PR 创建于 2026-02-18，今日关闭，反映出多 Agent 协作诉求长期存在，但本次未能合入。
- [#1584](https://github.com/sipeed/picoclaw/pull/1584)：Sub-turn 分层执行 PoC，与 #423 同属多 Agent 控制能力方向。

## 5. Bug 与稳定性
今日无新开 Issues，也没有明确标注为 Bug 或回归的 PR。与稳定性相关的关闭项：

- **中**：[#1541](https://github.com/sipeed/picoclaw/pull/1541) 包含 channel DoS 加固（#1535），属于安全与稳定性加固，已合入。
- **中**：[#1541](https://github.com/sipeed/picoclaw/pull/1541) 中的 #1536 统一媒体临时目录（`pkg/media/tempdir.go`），并扩展 Agent 读取允许路径，属于资源管理的稳定性改进，已合入。
- **低**：[#1258](https://github.com/sipeed/picoclaw/pull/1258) 对 exec 工具做环境变量净化，降低敏感变量被 LLM 覆写的风险，已关闭（摘要未体现合并状态）。
- **低**：[#2516](https://github.com/sipeed/picoclaw/pull/2516) 关闭每日同步 rebase 的定时触发，属于 CI 维护性调整。

## 6. 功能请求与路线图信号
今日无新 Issue，功能信号全部来自 PR：

- **多渠道消息能力**：[#1349](https://github.com/sipeed/picoclaw/pull/1349)（QQ 多类型附件收发）与 [#1156](https://github.com/sipeed/picoclaw/pull/1156)（飞书出站媒体，`send_file` 工具）显示项目正在横向扩展 IM 渠道的多媒体交互能力。
- **IM 覆盖面**：[#1268](https://github.com/sipeed/picoclaw/pull/1268) 新增 iMessage 支持，同时附带日志与隐私清洗，属于渠道扩展与可观测性并进。
- **Agent 执行模型**：[#1584](https://github.com/sipeed/picoclaw/pull/1584)（Sub-turn PoC）与 [#423](https://github.com/sipeed/picoclaw/pull/423)（多 Agent 协作框架，WIP）指向同一路线——分层执行、可中断、多 Agent 协同。两者今日均以关闭收尾，后续是否以新 PR 形式重启值得跟踪。
- **技能与凭据体系**：[#1542](https://github.com/sipeed/picoclaw/pull/1542) 合并了 Skills helpers、Repo skill examples、Credential encryption、Passphrase/gateway，预示技能示例库与凭据加密将成为下一版本的组成部分。

## 7. 用户反馈摘要
今日 Issues 更新为 0，PR 评论数据不可用，无法从评论中提炼真实用户痛点或满意度反馈。仅能从 PR 描述间接推断需求方向：用户侧对 QQ、飞书、iMessage 等渠道的富媒体收发有明确诉求（#1349、#1156、#1268）；对 exec 工具的安全边界存在关注（#1258）；对多 Agent 协作与执行可控性有持续期待（#423、#1584）。以上均为 PR 作者视角，非 Issue 评论证据。

## 8. 待处理积压
- **无待合并 PR**：过去 24 小时 PR 待合并数为 0，短期队列已清空。
- **长期滞留后关闭的 PR**：[#423](https://github.com/sipeed/picoclaw/pull/423)（2026-02-18 创建，WIP）与 [#1584](https://github.com/sipeed/picoclaw/pull/1584)（2026-03-15 创建，PoC）均以未完成状态关闭。多 Agent 协作与 Sub-turn 属于架构级能力，建议维护者明确后续承接方案或路线图归属，避免该方向需求反复以 WIP、PoC 形式开启又关闭。
- **批量合并 PR 的替代关系**：[#1544](https://github.com/sipeed/picoclaw/pull/1544)、[#1552](https://github.com/sipeed/picoclaw/pull/1552)、[#1545](https://github.com/sipeed/picoclaw/pull/1545)、[#1542](https://github.com/sipeed/picoclaw/pull/1542)、[#1560](https://github.com/sipeed/picoclaw/pull/1560)、[#1555](https://github.com/sipeed/picoclaw/pull/1555)、[#1541](https://github.com/sipeed/picoclaw/pull/1541) 均为合并其他 PR 的聚合型提交，被引用的原始 PR（如 #1514、#1414、#1500 等）未在本次数据中体现状态，建议核对它们是否已随聚合 PR 一并关闭，否则会形成重复积压。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-30

## 1. 今日速览

项目今日无新版本发布，但活跃度中等偏上：过去 24 小时 2 条 Issue 更新（均为新开/活跃，0 关闭）、12 条 PR 更新（11 条待合并、1 条关闭）。PR 积压明显——今日更新的 12 条 PR 中有 6 条创建于 9 月底至 10 月初，最长已滞留约 30 天，维护者合并节奏偏慢，积压风险在累积。功能侧以通道适配（Proton Mail、Telegram/Discord 修复）和技能扩展（LanceDB 记忆、llmman 本地模型、AgentMail 日历）为主线。稳定性方面，WhatsApp 入站媒体不可达的 Bug 仍在开放且与容器挂载相关，需重点关注。

## 2. 版本发布

今日无新版本发布，无破坏性变更或迁移事项。

## 3. 项目进展

**今日关闭 PR：**

- **#1283 [CLOSED] skill: upgrade memory to memory-lancedb-pro (hybrid BM25+vector retrieval)** — 作者 5queezer，创建于 2026-03-19，今日更新关闭。原 PR 试图用 `memory-lancedb-pro` 直接替换 `memory.ts`。其诉求（基础记忆只有向量余弦检索，缺少关键词召回、rerank、时效加权与噪声过滤）已在同日新开的 **#4239** 中转为“零核心改动”的技能形式延续，说明项目倾向于通过 skill 机制而非核心替换来扩展能力。
  链接：nanocoai/nanoclaw PR #1283

**今日更新的重要待合并 PR（尚未合并，不构成代码进展）：**

- **#4218** feat(channels): 通过 Proton Mail Bridge 新增原生 Proton Mail IMAP/SMTP 适配器，是 #3726 的通道侧部分，按评审要求移至 `channels` 注册表分支。
  链接：nanocoai/nanoclaw PR #4218

整体而言，今日实质推进集中在一条旧 PR 的关闭与方案转向，合并/关闭量（1 条）偏低，项目向前推进幅度有限。

## 4. 社区热点

今日讨论量与反应数整体偏低（所有条目 👍 均为 0，评论数据大多缺失），无明显热点：

- **Issue #2715**（WhatsApp 入站媒体不可达）是唯一有明确评论数（2 条）的活跃条目，且同时是唯一的 Bug 级问题，关注度相对最高。
  链接：nanocoai/nanoclaw Issue #2715
- **PR #4218**（Proton Mail 适配器）标记了 feature/skill/channels 多领域，是今日更新中影响力最大的功能类 PR，但无可见评论数据。
  链接：nanocoai/nanoclaw PR #4218

背后诉求可归纳为两条主线：一是**通道生态扩展与原通道可靠性**（Proton Mail、Telegram、Discord、WhatsApp）；二是**通过 skill 机制无侵入式扩展能力**（记忆、本地模型、日历工具），社区明显偏好“零核心改动”的交付方式。

## 5. Bug 与稳定性

按严重程度排列：

**高 — Issue #2715 [kind/bug] Inbound WhatsApp media (images/docs/audio) is unreachable by the agent.**
作者 jon-ruth，创建 2026-06-08，更新 2026-10-30，评论 2。v2 中入站 WhatsApp 附件被下载到未挂载进 agent 容器的主机目录 `DATA_DIR/attachments`，agent 收到的是容器内不存在的 `/workspace/attachments/...` 路径，导致图像/文档/音频全部不可达。**未见对应 fix PR。**
链接：nanocoai/nanoclaw Issue #2715

**低-中 — Issue #4241 [hardening] Iron front: 允许运维关闭自动加入 allowed_hosts 的 provider 模型域名。**
作者 JohanForngren，今日新建，0 评论。作者确认“非可利用漏洞”，行为符合原生 provider 的现有设计，属于加固建议而非故障。
链接：nanocoai/nanoclaw Issue #4241

**相关待合并修复 PR（均未合并，问题尚未解决）：**

- **#4032** fix(delivery): 消息永久投递失败时告知 agent（当前 `MAX_DELIVERY_ATTEMPTS` 耗尽后仅标记出站状态，agent 误以为已发送）— area/core, area/security
  链接：nanocoai/nanoclaw PR #4032
- **#4031** fix(telegram): 为 getUpdates 长轮询增加客户端截止时间（网络切换后入站可停滞约 15 分钟）
  链接：nanocoai/nanoclaw PR #4031
- **#3973** fix(telegram): Telegram 无法解析 MarkdownV2 实体时改以纯文本重发，而非整条丢弃
  链接：nanocoai/nanoclaw PR #3973
- **#4030** fix(channels): 长 `ask_question` 选项列表按行换行（Telegram 单行最多 8 个按钮，尾部会丢失）
  链接：nanocoai/nanoclaw PR #4030
- **#3970** fix(delivery): 剥离 reaction/edit 目标 id 中的 agent-group 后缀（路由存入的是 `<platform msg id>...` 形式的 session 行 id）
  链接：nanocoai/nanoclaw PR #3970

## 6. 功能请求与路线图信号

- **#4239 /add-lancedb-memory**（5queezer）：按组可选的长时记忆，混合向量 + BM25 召回，以 skill 形式交付、零核心改动。有 #1283 被关闭后的方案承接，纳入可能性较高。
  链接：nanocoai/nanoclaw PR #4239
- **#4210 llmman 本地模型支持**（ericcurtin）：`/add-llmman-provider` 通过 `ANTHROPIC_BASE_URL` 指向 llmman，另加 `/add-llmman-tool`。体现本地模型托管需求。
  链接：nanocoai/nanoclaw PR #4210
- **#4238 /add-agentmail-calendar-tool**（billyshipp）：为 AgentMail 收件箱提供日历 CLI（日程、事件写入、回复邮件邀请、开始时间提醒）。
  链接：nanocoai/nanoclaw PR #4238
- **#4218 Proton Mail 适配器**：与邮件/日历类需求形成一组，指向“邮件即身份”的使用场景。
  链接：nanocoai/nanoclaw PR #4218
- **#4241 Iron front 可配置化**：运维希望对 `allowed_hosts` 中自动注入的 provider 模型域名有开关控制。

结合已有 PR 判断：#4239 有明确的旧 PR 承接路径、且符合“skill 交付”惯例，最可能先落地；#4210、#4238、#4218 均为 skill/通道类增量，落地取决于评审节奏。

## 7. 用户反馈摘要

（注：今日 Issues 评论数据有限，仅 #2715 有 2 条评论且未提供正文，以下均基于 Issue/PR 描述提炼）

- **痛点 — 资源路径与挂载不一致**（#2715）：v2 将 WhatsApp 附件存到主机 `DATA_DIR/attachments` 而非会话 inbox，容器内路径失效。属于配置/挂载层面的可用性缺陷，影响所有通过 WhatsApp 接收媒体的用户。
- **痛点 — 消息静默失败**（#4032、#3973）：投递永久失败时不告知 agent；Telegram 格式解析失败时整条消息被丢弃。用户最不满的是“以为发出去了其实没发”和“无提示丢消息”。
- **痛点 — 网络抖动导致入站长时间停滞**（#4031）：网络切换后 Telegram 入站可停摆约 15 分钟。
- **加固诉求 — 最小化网络暴露面**（#4241）：运维希望可关闭自动加入 `allowed_hosts` 的 provider 域名，作者明确这不是漏洞，而是纵深防御诉求。
- **满意/使用场景信号**：大量 PR 以“零核心改动”的 skill 形式提交（#4239、#4210、#4238），说明社区认可现有 skill 扩展机制，并围绕邮件、日历、本地模型、长期记忆等个人助手场景积极贡献。

## 8. 待处理积压

维护者需关注以下长期滞留的开放 PR（均为今日仍有更新，但创建已久）：

- **#3970**（2026-09-30 创建，已滞留约 30 天）fix(delivery): reaction/edit 目标 id 修复 — area/core
  链接：nanocoai/nanoclaw PR #3970
- **#3973**（2026-09-30 创建，已滞留约 30 天）fix(telegram): 解析失败改纯文本重发 — area/channels
  链接：nanocoai/nanoclaw PR #3973
- **#4030**（2026-10-04 创建，已滞留约 26 天）fix(channels): `ask_question` 长选项卡换行
  链接：nanocoai/nanoclaw PR #4030
- **#4031**（2026-10-04 创建，已滞留约 26 天）fix(telegram): getUpdates 客户端截止时间
  链接：nanocoai/nanoclaw PR #4031
- **#4032**（2026-10-04 创建，已滞留约 26 天）fix(delivery): 投递失败告知 agent — area/core, area/security
  链接：nanocoai/nanoclaw PR #4032
- **#4218**（2026-10-24 创建）feat(channels): Proton Mail 适配器
  链接：nanocoai/nanoclaw PR #4218
- **#2715**（2026-06-08 创建，已开放约 5 个月）WhatsApp 入站媒体不可达，**仍无 fix PR**，建议优先排期
  链接：nanocoai/nanoclaw Issue #2715

**健康度提示**：今日关闭 1 条、新开/待合并 11 条，净积压继续扩大；上述 #3970–#4032 五条修复 PR 已同一作者提交近一个月未合并，若属评审瓶颈而非技术问题，建议维护者集中评审以降低积压。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-10-30）

## 1. 今日速览

今日 IronClaw 无新版本发布，过去 24 小时 Issues 更新为 0 条，无新增 Bug 报告或功能请求。代码侧有 3 条待合并 PR，全部由 dependabot[bot] 自动提交，均未合并或关闭。三条 PR 全部为依赖版本升级（1 条前端 JS 依赖，2 条 Rust 依赖），不涉及业务功能推进。整体活跃度偏低，今日工程活动集中于依赖维护，核心开发与社区讨论处于静默状态。

## 2. 版本发布

今日无新版本发布，本部分省略。

## 3. 项目进展

今日无合并或关闭的 PR，功能与修复层面无实质推进。3 条待合并 PR 均为依赖升级：

- [#8164](https://github.com/nearai/ironclaw/pull/8164) — 升级 `happy-dom` 20.11.1 → 21.0.4（`crates/product/ironclaw_webui/frontend`）。跨大版本升级（20 → 21），建议关注 breaking change 对前端测试环境的影响。
- [#8162](https://github.com/nearai/ironclaw/pull/8162) — 升级 `wasmtime` 47.0.3 → 48.0.7（`/harness/latency/runner`）。
- [#8163](https://github.com/nearai/ironclaw/pull/8163) — 升级 `wasmtime` 47.0.4 → 49.0.5（根路径）。

其中 #8162 与 #8163 目标版本不同（48.0.7 与 49.0.5），且起始版本不一致（47.0.3 与 47.0.4），存在两条 PR 对 `wasmtime` 版本的诉求重叠，合并时可能产生版本冲突，需维护者确认最终统一的目标版本。

## 4. 社区热点

今日无具讨论度的 Issue 或 PR：3 条 PR 评论数均未记录（`undefined`），👍 均为 0，且全部来自 dependabot 自动提交，无人工参与。无社区热点可分析。

## 5. Bug 与稳定性

今日无新增 Bug、崩溃或回归问题报告（Issues 更新 0 条）。无 fix PR。稳定性方面无新增风险信号。

## 6. 功能请求与路线图信号

今日无用户提出的新功能需求。结合现有 PR 判断，下一版本可能的方向仅为依赖生态更新，尤其是 `wasmtime` 的跨版本升级（47 → 48/49），若合并将影响 harness 相关模块的运行时依赖基线。

## 7. 用户反馈摘要

今日 Issues 评论为 0 条，无可提炼的用户痛点、使用场景或满意度反馈。

## 8. 待处理积压

今日数据未提供长期未响应的 Issue 或 PR 清单，无法识别积压项。以下提醒基于现有数据：

- [#8162](https://github.com/nearai/ironclaw/pull/8162) 与 [#8163](https://github.com/nearai/ironclaw/pull/8163) 两条 `wasmtime` 升级 PR 并存，创建于 2026-10-29，截至今日仍未合并，建议维护者优先协调版本目标并处理冲突。
- [#8164](https://github.com/nearai/ironclaw/pull/8164) 为 `happy-dom` 跨大版本升级，需确认前端测试兼容性后再合并。

---
*注：本报告仅基于 2026-10-30 提供的 GitHub 数据生成，未包含的数据项（如长期积压 Issue 列表、评论内容）不作推断。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-30

## 1. 今日速览

今日项目活跃度中高：24 小时内 PR 更新 8 条（7 条合并/关闭、1 条待合并），Issues 更新 3 条（2 条新开/活跃、1 条关闭）。代码侧集中推进了媒体生成与分享、微信二维码流程、OpenClaw IM 热重载等多处修复，并合入 `release/2026.10.26` 分支（自上一版本以来 53 个提交）。但本次数据中没有独立的新版本发布记录。社区侧最集中的现象是**账号封禁申诉**：3 条 Issue 中有 2 条仍开放，均与风控误判有关，且其中一条为其前身 Issue #2936 的重新提交。整体项目健康度良好，代码交付节奏稳定，但账号风控与申诉流程是当前用户体验的主要风险点。

## 2. 版本发布

今日无新版本发布（Releases 为空）。

注：PR #2964 计划将 `release/2026.10.26` 合入 `main`，用于 2026.10.30 发布，但该 PR 状态为 CLOSED，且数据中未出现对应 Release，因此无法确认发布是否实际完成。摘要中列出的内容包括：新增 image studio，改进媒体生成、图片编辑/分享、粘贴文本卡片与行内上下文芯片；其余变更细节未在数据中给出。

- PR #2964: https://github.com/netease-youdao/LobsterAI/pull/2964

## 3. 项目进展

今日合并/关闭的重要 PR（链接前缀 https://github.com/netease-youdao/LobsterAI/pull/ ）：

| PR | 内容 | 意义 |
|---|---|---|
| #2962 | fix(artifacts): 修复新生成图片分享失败。本地图片产物的 `filePath` 有效但 `content` 为空字符串，主进程校验器以 `content is required.` 误拒 | 直接修复 QA 报告的可见功能故障 |
| #2963 | 修复两处问题：超长消息「共 X 行」改为按文本块实际高度/行高统计（不计图片高度，布局变化后更新）；移除微信二维码加载流程中的 gateway 强制重启要求 | 提升界面准确性与扫码稳定性 |
| #2961 | fix(media): 本地 MP3/WAV 参考音频改以 `audio/mpeg`、`audio/wav` 编码（原为 `application/octet-stream`），修复 MiniMax H3 拒绝 data URL | 打通音频参考输入链路 |
| #2960 | fix(openclaw): IM agent 工作目录支持热重载（run cwd 取自实时运行时配置快照），切换工作目录不再重启 gateway；并重置过期的模型覆盖配置 | 减少 agent 配置变更时的中断 |
| #2666 / #2461 | Dependabot 升级 actions/labeler 5→7、eslint-plugin-react-hooks 5.2.0→7.1.1（均为 stale 项收尾） | 依赖维护 |

整体推进幅度：以修复与稳定性为主，覆盖 artifacts、媒体、IM/OpenClaw、渲染层四个方向，并在 release 分支合并中带入 image studio 等新能力。功能增量集中在媒体生成与分享闭环，但发布状态待确认。

## 4. 社区热点

今日讨论最集中的是账号封禁申诉，三条 Issue 中两条仍开放：

1. **#2959 [OPEN] 账号误封申诉（尾号 2020 / 0160）** — 评论 1
   https://github.com/netease-youdao/LobsterAI/issues/2959
   该条为 #2936 的重新提交，原因是原标题历史中含个人手机号，作者请维护者清理原帖并在此条跟进。
2. **#2936 [CLOSED] 同一用户首次申诉** — 评论 7（今日评论最多）
   https://github.com/netease-youdao/LobsterAI/issues/2936
3. **#2940 [OPEN] 账号被禁用，申请解封（133\*\*280）** — 评论 1
   https://github.com/netease-youdao/LobsterAI/issues/2940

诉求分析：两位用户均声明未刷接口、未批量调用、未商业化；#2940 作者自述曾将内置模型接口经本地反向代理转发用于个人本地工具，推测触发风控，并表示已完成整改。共同诉求是：明确封禁判定依据、透明的申诉与复核通道，以及删除 Issue 中残留的个人敏感信息。这属于产品风控与社区运营问题，而非代码缺陷，建议维护者建立统一的申诉模板与隐私清理流程。

## 5. Bug 与稳定性

按严重程度排列（均已有关联修复 PR，且相应 PR 今日已关闭）：

- **高｜图片分享失败（回归/QA 报告）**：新生成图片因主进程校验器拒收空 `content` 而无法分享 —— 已由 #2962 修复。
  https://github.com/netease-youdao/LobsterAI/pull/2962
- **中｜MiniMax H3 参考音频被拒**：本地 MP3/WAV 以 `application/octet-stream` 编码，导致 data URL 被拒，音频功能不可用 —— 已由 #2961 修复。
  https://github.com/netease-youdao/LobsterAI/pull/2961
- **中｜微信二维码加载触发 gateway 强制重启**：配置同步请求与重复加载均会强制重启 —— 已由 #2963 移除该要求，保留插件配置同步与扫码状态管理。
  https://github.com/netease-youdao/LobsterAI/pull/2963
- **中｜IM agent 工作目录变更导致 gateway 重启、模型覆盖配置过期** —— 已由 #2960 修复（热重载 + 重置过期覆盖）。
  https://github.com/netease-youdao/LobsterAI/pull/2960
- **低｜超长用户消息「共 X 行」计数不含自动折行** —— 已由 #2963 修复。
- **低｜Windows Computer Use 审批复用**：同一可执行文件以路径启动后，又以 `process:<path>` 做窗口操作时未复用会话审批 —— 修复 PR #2947 仍为 OPEN，是今日唯一待合并 PR。
  https://github.com/netease-youdao/LobsterAI/pull/2947

说明：数据中未提供崩溃类问题或未修复的开放 Bug。

## 6. 功能请求与路线图信号

今日 Issues 中没有直接的功能请求，均为账号申诉类问题。路线图线索主要来自已合入的 release 分支 PR #2964，其中提及：

- 新增 image studio，并改进媒体生成、图片编辑/分享、粘贴文本卡片、行内上下文芯片；
- 自上一版本以来共 53 个提交。

结合 #2962、#2961 对图片分享与音频参考链路的修复，可以判断下一版本重心在**多媒体创作与分享闭环**。以上仅为数据中提及的内容，无法确认最终纳入范围。另外，#2940 暴露的「本地反代调用内置模型接口」需求，提示用户存在在自有工具中复用模型接口的场景，值得产品侧评估是否需要正规的 API/凭证方案，以替代易触发风控的变通做法。

## 7. 用户反馈摘要

- **痛点 1：风控误判与账号不可用**。两位用户的不同账号均被提示封禁/禁用，影响桌面客户端登录与正常使用（#2936、#2959、#2940）。用户普遍强调「未恶意使用、未刷接口、未批量调用」。
- **痛点 2：风控判定不透明**。#2940 用户仅因个人本地反向代理转发即被封，表明规则边界未对用户说明；该用户已完成整改并请求解封。
- **痛点 3：申诉流程不友好**。#2959 作者不得不重开 Issue，因为原标题含手机号无法自行清理，需要维护者介入；反映缺少私密、可追踪的申诉通道。
- **使用场景**：桌面客户端日常使用；在本地常用工具中调用模型接口；IM 集成（微信扫码、OpenClaw IM agent）与图片/音频内容生成（由相关 PR 推断为活跃使用场景）。
- **满意度信号**：数据中未提供明确的正面反馈或 👍 反应（所有条目 👍 均为 0）。

## 8. 待处理积压

- **#2947 [OPEN] fix(computer-use): 复用 Windows 进程路径审批**（创建 2026-10-27，引用 #2895 的可执行文件路径变体）—— 今日唯一待合并 PR，影响 Windows Computer Use 会话审批的一致性，建议优先评审。
  https://github.com/netease-youdao/LobsterAI/pull/2947
- **#2940 [OPEN] 账号解封申诉**（创建 2026-10-25，仅 1 条评论）—— 已开放 5 天，需风控/运营侧给出明确结论。
  https://github.com/netease-youdao/LobsterAI/issues/2940
- **#2959 [OPEN] 申诉（重新提交）**（创建 2026-10-29）—— 依赖维护者清理 #2936 中的手机号，涉及用户隐私，建议尽快处理。
  https://github.com/netease-youdao/LobsterAI/issues/2959
- **长期 stale 项已收尾**：#2666（依赖升级，2026-09-14 创建）、#2461（2026-08-10 创建）今日关闭，积压有所清理。

**给维护者的两条建议**：一是为申诉类 Issue 建立模板（账号脱敏、问题时间、整改说明）与私密处理渠道，避免手机号等敏感信息进入公开内容；二是对「本地反代调用模型接口」这一常见用法给出明确规则，从源头降低误封率。

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

# CoPaw 项目日报 · 2026-10-30

> 数据来源：agentscope-ai/CoPaw GitHub 活动（注：原数据链接显示为 `agentscope-ai/QwenPaw`，本文按来源原样保留）。

## 1. 今日速览

- 过去 24 小时共 41 条 Issues/PRs 更新（Issues 8 条，PRs 33 条），其中 PR 更新量是 Issues 的 4 倍，贡献者活动密集。
- PR 待合并 22 条、已合并/关闭 11 条，积压压力明显大于合入速度，评审是当前主要瓶颈。
- 无新版本发布；v2.3.0-beta.1 仍处于发布验证阶段，且该 Beta 已暴露出多个桌面端问题。
- 今日 Issue 以 Bug 为主，集中在桌面端构建资产缺失、渠道模型解析、记忆流程静默丢数据等路径。
- 健康度评估：**贡献活跃度高，但稳定性与评审吞吐需关注**——多个竞态/静默失败类 Bug 尚未有对应 fix PR。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#8483 [CLOSED]** `fix(plugins): keep a failing import-cache refresh from taking out the plugin system` — 修复在 CPython 3.11.9+ 且 `importlib.metadata` 较旧的宿主上，`importlib.invalidate_caches()` 抛 `TypeError` 导致所有后端插件无法加载的问题。属于影响面较大的兼容性修复。
  https://github.com/agentscope-ai/QwenPaw/pull/8483
- **#8508 [CLOSED, size/XL]** `fix(workspace): remove legacy workspace ZIP APIs` — 移除旧版工作区 ZIP 下载/上传 API、Console 封装及其专用测试。理由是 ZIP 合并可能覆盖活跃 SQLite 文件，且在 #8482 之后 Windows 上失败。属于带破坏性的清理，需注意依赖旧 ZIP 接口的调用方。
  https://github.com/agentscope-ai/QwenPaw/pull/8508
- **#8379 [CLOSED, size/XS]** `fix(tests): let a full pytest run collect both test_backup modules` — 修复干净 checkout 上完整 `pytest` 在收集阶段中止的问题，对齐 CONTRIBUTING.md 声明的本地门禁。
  https://github.com/agentscope-ai/QwenPaw/pull/8379
- **#7896 [CLOSED, first-time-contributor]** `fix(channels): recheck idle queues after awaiting consumer shutdown` — 修复空闲清理在等待消费者关闭期间候选列表过期、误删新到消息队列的竞态。来自首次贡献者。
  https://github.com/agentscope-ai/QwenPaw/pull/7896

**整体推进**：合并集中在插件系统健壮性、渠道队列竞态、测试门禁与遗留 API 清理，属于「稳定性 + 技术债」方向；未见新功能合入。

## 4. 社区热点

- **#8464 [CLOSED]** `[Bug]: 手动 /compact 无视会话级模型切换，始终使用 agent.json 的 active_model` — 5 条评论，为今日讨论最多。用户将模型从 M1 切到 M2 后手动压缩仍请求 M1；当 M1 对压缩参数严格校验返回 400 时，压缩在任何模型下都失败；复现上下文约 34 万 token。诉求：压缩路径应遵守会话级模型选择，而非 agent 级默认值。
  https://github.com/agentscope-ai/QwenPaw/issues/8464
- **#8488 [OPEN]** 桌面构建遗漏 `visual_compression` 资产 → `FileNotFoundError: atlas-gray-native.ts` — 3 条评论。2.3.0-beta.1 的 Windows PyInstaller 构建未打包 glyph atlas，Visual Compact 静默不执行。
  https://github.com/agentscope-ai/QwenPaw/issues/8488
- **#8500 [OPEN]** `Auto-Dream silently drops memory` — 2 条评论。
  https://github.com/agentscope-ai/QwenPaw/issues/8500
- **#8505 [OPEN]** OpenAI 兼容网关裸 `APIError` 状态码被归类为 `unknown` — 2 条评论。
  https://github.com/agentscope-ai/QwenPaw/issues/8505

**背后诉求**：热点集中在「模型/配置选择未贯穿整个调用链」和「失败被静默吞掉」两类，用户对可观测性与错误归因的要求明显提升。

## 5. Bug 与稳定性

按严重程度排序：

1. **高 · #8500** `Auto-Dream silently drops memory`：extract 步骤无法解析 agent 回复时，整日记忆被静默丢弃，且仍被 checkpoint，文件永不重试，运行仍报 `success=True`。数据丢失 + 静默成功，危害最大。**暂无对应 fix PR。**
   https://github.com/agentscope-ai/QwenPaw/issues/8500
2. **高 · #8488** 桌面构建遗漏 visual_compression 资产：PyInstaller 构建下每次符合条件的模型调用抛 `FileNotFoundError`，Visual Compact 静默失效。**暂无 fix PR。**
   https://github.com/agentscope-ai/QwenPaw/issues/8488
3. **高 · #8464（已关闭）** 手动 `/compact` 忽略会话级模型切换，且在严格校验模型下必然 400 失败。已关闭，但数据中未提供关联 fix PR。
   https://github.com/agentscope-ai/QwenPaw/issues/8464
4. **中 · #8511** 飞书渠道间歇性 `ProviderError: No active model configured`：前一条消息仍在处理时新消息到达触发；Windows 11，v2.3.0-beta.1，v2.2.2 亦可复现（非 Beta 引入）。**暂无 fix PR。**
   https://github.com/agentscope-ai/QwenPaw/issues/8511
5. **中 · #8505** OpenAI 兼容网关中途失败返回裸 `openai.APIError`，状态码仅存在于消息文本（如 `status_code=502`），被归类为 `unknown`，导致不重试、不降级。**已有对应 PR #8512。**
   https://github.com/agentscope-ai/QwenPaw/issues/8505
6. **中 · #8502** 桌面端 HTML 预览「在浏览器中打开」失效：中文路径报「找不到文件」，工作区外文件点击无反应。环境为 v2.3.0b1、Windows 11、中文区域。**暂无 fix PR。**
   https://github.com/agentscope-ai/QwenPaw/issues/8502
7. **低 · #8486（已关闭）** 控制台 tool-call 图标左边缘被裁切（容器缺少水平内边距），大字号/缩放下更明显。
   https://github.com/agentscope-ai/QwenPaw/issues/8486

**稳定性观察**：4 个未关闭 Bug 中有 3 个属于「静默失败/静默无操作」模式，建议作为系统性缺陷类别排查。

## 6. 功能请求与路线图信号

- **支持自托管本地模型参与核心决策**：PR **#8463 [OPEN, size/XL]** 允许下载的 Piccolo 模型为自动工具审查与 ReMe 上下文压缩提供原生 Jev 决策（双向候选打分），可能被纳入后续版本。
  https://github.com/agentscope-ai/QwenPaw/pull/8463
- **Whisper 模型名可配置**：PR **#8052** 暴露 `transcription_model` 设置，解决非 `whisper-1` 模型 ID 的供应商无法使用的问题。
  https://github.com/agentscope-ai/QwenPaw/pull/8052
- **内嵌社区与收件箱**：PR **#7903 [ready-for-human-review, size/XXXL]** 引入社区信息流（排序、分类、评论）、资源来源追踪、关联 Issue 报告与模型辅助编辑，以及 Platform HTTP PKCE 认证。
  https://github.com/agentscope-ai/QwenPaw/pull/7903
- **第三方 agent 插件化**：PR **#8426 [OPEN, size/XXXL]** 将第三方 agent 抽取为插件。
  https://github.com/agentscope-ai/QwenPaw/pull/8426
- **扩展应用安装入口**：PR **#8485** 在扩展应用页新增「Install app」按钮。
  https://github.com/agentscope-ai/QwenPaw/pull/8485

## 7. 用户反馈摘要

- **模型切换语义不清（#8464）**：用户期望会话级选择在整个调用链生效；压缩摘要在 agent 级默认模型上被严格校验拒绝后，用户处于「切哪个模型都无法压缩」的困境。
- **长上下文实际可用性受关注**：#8464 复现上下文约 34 万 token，说明用户在大上下文场景下高频使用手动压缩。
- **Beta 桌面端体验受损（#8488、#8502）**：Windows 构建缺资产、中文路径与工作区外文件打开失败，影响 Beta 用户对桌面版的信心。
- **群协作场景下的并发可靠性（#8511）**：飞书渠道消息在 agent 忙碌时到达会触发「无可用模型」错误，用户已确认非 Beta 引入。
- **对网关类供应商的容错期待（#8505）**：用户希望从错误文本中识别真实状态码并触发重试/降级，而非归为 `unknown`。
- **记忆可靠性（#8500）**：用户不满「报告成功但数据已丢」，并要求提取失败的文件应被重试而非直接 checkpoint。

## 8. 待处理积压

- **#8052 [OPEN]** `feat(transcription): make the Whisper API model name configurable` — 创建于 2026-09-30，已开放约一个月，持续更新但未合入，改动范围中等。
  https://github.com/agentscope-ai/QwenPaw/pull/8052
- **#8067 [OPEN, Under Review, size/L]** `fix(channels): repair CJK emphasis boundaries in rendered Markdown` — 创建于 2026-10-01，处理 CommonMark flanking 规则下 CJK 强调边界问题，处于评审中已近一个月。
  https://github.com/agentscope-ai/QwenPaw/pull/8067
- **#8066 [OPEN]** `fix(agents): drop empty media blocks before formatting requests` — 创建于 2026-10-01，修复空 base64 媒体块被序列化为空 data URI 的问题。
  https://github.com/agentscope-ai/QwenPaw/pull/8066
- **#7903 [OPEN, ready-for-human-review, size/XXXL]** `feat(community): integrate QwenPaw community and inbox` — 创建于 2026-09-20，已标记 ready-for-human-review 但体量 XXXL，评审资源是风险点。
  https://github.com/agentscope-ai/QwenPaw/pull/7903
- **#8400 [OPEN, first-time-contributor, Under Review, size/S]** `fix(skill): avoid scanner false positive in make-skill validator` — 内置 `make-skill` 被自身安全扫描器误判为 CRITICAL，来自首次贡献者、体量小，建议优先处理以鼓励新人。
  https://github.com/agentscope-ai/QwenPaw/pull/8400
- **#8456 [CLOSED, release-duty]** v2.3.0-beta.1 安装验证 Issue 已关闭，但 #8488、#8502、#8511 均指向该 Beta，建议复核验证覆盖范围。
  https://github.com/agentscope-ai/QwenPaw/issues/8456

---

**给维护者的优先级建议**：① 优先分配评审给 #8400（小体量新人贡献）；② 为 #8500 与 #8488 两个未获 fix 的高严重度 Bug 指定负责人；③ 关注 22 条待合并 PR 的评审积压，这是当前最明显的吞吐瓶颈。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 · 2026-10-30

## 1. 今日速览

项目今日以 CLI 体验修复和测试/文档卫生为主轴：交互式 agent UI 的严重显示问题（#721）与 serve API 认证缺失（#713）双双关闭，安全与可用性得到实质提升。同时新增 3 个待办 Issue（#718、#719、#720），全部聚焦于测试隔离、CI 检查覆盖和文档失真，说明维护者在主动排查工程质量债。PR 侧 5 条 dependabot 依赖升级长期挂起（自 9 月中旬创建），叠加 1 条合并/关闭记录，整体活跃度**中等偏高**，但积压的依赖更新是当前最明显的流程瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #714 [CLOSED] fix(serve)：为 OpenAI 兼容 serve API 要求 API Key**（关联 Issue #713）
  https://github.com/qhkm/zeptoclaw/pull/714
  修复了 `zeptoclaw serve` 暴露 `/v1/chat/completions` 和 `/v1/models` 却完全无认证的问题。此前非 loopback 的 `--bind` 允许任何可达端口的人以任意模型、任意速率消耗运营者的 provider 额度。这是今日最具安全价值的合入。
- **Issue #721 [CLOSED] feat(cli)：交互式 agent UI 修复**
  https://github.com/qhkm/zeptoclaw/issues/721
  定位并修复了 `src/cli/agent.rs` / `src/cli/shimmer.rs` 中的卡死 "Thinking..." 行、重复空分隔线和未缩进回复等问题，直接改善终端用户的第一印象。

整体看，项目今日在「安全默认」与「CLI 可用性」两条主线上各前进一步，属于质量取向的推进，而非功能扩张。

## 4. 社区热点

今日 5 条 Issue 和 6 条 PR 的评论数均为 0，无实质讨论互动，因此不存在传统意义上的"热点"。从内容关注度看，以下两项最值得留意：

- **#721 交互式 UI 修复**（P2-high）：涉及 DeepSeek 会话截图中的三类渲染缺陷，是用户体验最直接的痛点。
  https://github.com/qhkm/zeptoclaw/issues/721
- **#713 / #714 serve 认证**（P2-high）：暴露了本地/可信网络假设下的安全缺口，属于安全敏感的默认配置问题。
  https://github.com/qhkm/zeptoclaw/issues/713

背后诉求一致：**项目已具备多入口（CLI 交互、HTTP serve），但周边体验与安全加固尚未跟上核心能力**。

## 5. Bug 与稳定性

按严重程度排列：

1. **[P2-high] #721 CLI 交互输出异常**（已关闭）：卡死 spinner、重复分隔线、回复未缩进，源自 `agent.rs` / `shimmer.rs`。已修复。
   https://github.com/qhkm/zeptoclaw/issues/721
2. **[P2-high] #713 serve API 无认证**（已关闭）：安全缺陷，已有对应修复 #714。
   https://github.com/qhkm/zeptoclaw/issues/713
3. **[P3-normal] #718 cli_smoke 测试未隔离配置**（开放，暂无 fix PR）：`tests/cli_smoke.rs` 通过 `run_cli` 运行真实二进制时会读取开发者本机 `~/.zeptoclaw/config.json`，导致测试结果取决于本地设置，存在误报/漏报风险。
   https://github.com/qhkm/zeptoclaw/issues/718

## 6. 功能请求与路线图信号

今日无典型用户自发功能请求。与路线图相关的信号来自维护者自查：

- **#720 docs：README 的二进制体积、内存占用与工具数量已过时**（开放）：README 多处仍宣称 "~6MB binary"，而 CLAUDE.md / AGENTS.md 中强制预算已为 11MB 级。这暗示**体积预算已放宽但对外叙事未同步**，属于发布前必须清理的对外一致性问题，具备在下一次发布前一并修复的可能。
  https://github.com/qhkm/zeptoclaw/issues/720
- **#719 chore：pre-push 清单从不编译集成测试**（开放）：强制清单仅含 fmt / clippy / nextest --lib / doc test，**未覆盖集成测试编译**，意味着集成测试可能长期处于无法编译状态而不被发现。这是流程性改进，落地成本低、收益高。
  https://github.com/qhkm/zeptoclaw/issues/719

## 7. 用户反馈摘要

所有 Issues 均由维护者 qhkm 本人提交，**今日无外部用户评论可供提炼**。从 Issue 描述中可间接读取的使用场景与不满：

- **使用场景**：通过 `zeptoclaw agent` 进行交互式会话（示例为 DeepSeek 会话）；通过 `zeptoclaw serve` 以 OpenAI 兼容接口对外提供模型访问。
- **不满意点**：终端输出视觉破损（spinner 卡住、分隔线重复、回复未缩进）直接影响可用观感；serve 模式在非 loopback 绑定时缺乏任何认证，运营者额度暴露；对外文档中的体积/内存数字与内部预算脱节，可能误导选型者。

## 8. 待处理积压

以下 dependabot PR 均创建于 **2026-09-15 / 09-22**，今日仅有更新但**仍未合并**，已积压约 6 周，建议维护者批量评审或调整依赖策略：

- **#705** bump mail-parser 0.11.3 → 0.11.9（创建 2026-09-22）
  https://github.com/qhkm/zeptoclaw/pull/705
- **#694** bump base64 0.22.1 → 0.23.1（创建 2026-09-15，跨小版本，需关注兼容性）
  https://github.com/qhkm/zeptoclaw/pull/694
- **#690** bump clap 4.6.1 → 4.6.6（创建 2026-09-15）
  https://github.com/qhkm/zeptoclaw/pull/690
- **#688** bump async-trait 0.1.89 → 0.1.92（创建 2026-09-15）
  https://github.com/qhkm/zeptoclaw/pull/688
- **#685** bump tokio-serial 5.4.5 → 5.5.0（创建 2026-09-15）
  https://github.com/qhkm/zeptoclaw/pull/685

此外，开放 Issue **#718、#719、#720** 均为 P3/P2 级别且暂无对应 PR，建议优先处理 #719（CI 覆盖缺口，影响面最广）。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-30

## 1. 今日速览

项目今日维持高强度协作节奏：过去24小时 Issues 更新 22 条（新开/活跃 14、关闭 8），PR 更新 50 条（待合并 45、合并/关闭 5），无新版本发布。待合并 PR 与合入量之比约为 9:1，积压压力显著，但 #10526（追加式会话事件历史 RFC）、#11562（插件更新期清单错配）、#11484（ZeroCode 重复工具防护失效）等多个高讨论度 Issue 集中关闭，说明架构与可靠性议题在收敛。新提交的 PR 集中在安全加固（#12115 SRI 校验、#12114 XFF 限流、#12112 语音回复抑制）与小范围修复，而非大规模功能合入。**活跃度评估：高活跃、低合入**——社区参与旺盛，维护者审阅吞吐是当前瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 5 条 PR，均为小范围修复：依赖组升级（#12102 rust-all 34 项、#11999 actions-all 9 项）。核心功能类大 PR 仍在队列中，尚未推进：

- PR #11174 `feat(runtime): add capability-taking constructors for turn entry points` — 为 turn 入口引入能力注入构造器，规模 XL，标记 `release:v0.9.0`。
- PR #10407 `feat(sessions): add persistent session prompt attachments` — 为持久 Chat 会话增加可选 SQLite 提示附件集（4 条有界提示），跨重启保留。
- PR #11218 `fix(config): migrate retired keys at schema version 4` — 配置 schema v4 迁移，并基于 #8754 的早期调研，标记 `release:v0.9.0`。

**整体评价**：今日前进幅度有限，主要价值在于清理高优先级 Bug 与推进 v0.9.0 前置工作；合入节奏明显慢于提交节奏。

## 4. 社区热点

| 条目 | 评论 | 状态 | 链接 |
|---|---|---|---|
| #10526 RFC：追加式会话事件历史与确定性状态重放 | 14 | CLOSED | [Issue #10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) |
| #11418 ZeroCode "复制"按钮无响应 | 8 | OPEN（in-progress） | [Issue #11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) |
| #11235 RFC：面向智能体的知识语料（RAG） | 7 | OPEN（待作者响应） | [Issue #11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) |
| #11416 Slack 线程 "is thinking…" 状态自 v0.8.5 消失 | 6 | OPEN（accepted） | [Issue #11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) |
| #10926 Matrix send_via 将用户身份当作房间目标 | 5 | OPEN（accepted） | [Issue #10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) |

**诉求分析**：讨论集中于两类主题——(a) **可观测性与状态一致性**（#10526 关闭后，执行事实仍分散在 TurnEvent、日志、工具回执、成本记录等多处，社区期望统一的事件模型）；(b) **多渠道交互质量回归**（Slack 状态提示、Matrix 投递目标、ZeroCode TUI 基础功能）。#11235 将 RAG 定位为"能力边界级"子系统，反映用户希望智能体直接基于本地文档与工具说明作答，而非依赖模型记忆。

## 5. Bug 与稳定性

按严重程度排序：

**P1 / High risk**
- #9394 `gateway.pairing_dashboard` 配置被接受但从未读取，配对码永不过期 — [Issue #9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)，标记 `release:v0.9.0`，尚无对应 fix PR。
- PR #11234 `fix(rpc): judge queued session ownership by current authority` — 八文件安全补丁，处理排队会话所有权判定 — [PR #11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234)，待合并、`release-gate`。

**P2 / S1–S2**
- #11418 ZeroCode TUI 复制按钮完全无效（S1，工作流阻断）— [Issue #11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)，修复进行中。
- #10926 Matrix `SendViaTool::resolve_target` 取 `external_peers` 首项作为收件人（S2）— [Issue #10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)，相关修复 PR #12116 今日提交，将 Discord 外部 peer 改为返回可操作的错误 — [PR #12116](https://github.com/zeroclaw-labs/zeroclaw/pull/12116)。
- #10294 `file_write` 转录无法区分新建与覆盖（S2，High risk）— [Issue #10294](https://github.com/zeroclaw-labs/zeroclaw/issues/10294)，无 fix PR。

**P3 / S3**
- #11703 激活延迟加载工具会改变系统提示、击穿提示缓存（成本影响）— [Issue #11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703)，无 fix PR。
- #11416 Slack 线程状态提示缺失（S3）— [Issue #11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416)，已 accepted，无 fix PR。

**近日已修复/关闭**：#11562 插件更新期清单错配、#11792 中断安装残留暂存目录、#11708 `model_routing_config` schema 缺参、#11484 ZeroCode 重复工具防护失效。

## 6. 功能请求与路线图信号

- **RAG 知识语料**（#11235，accepted）：能力边界级新子系统，规模大，目前仅 RFC 阶段，预计**不会**进入 v0.9.0。
- **Signal 媒体附件支持**（#7891，已关闭但处于 parking-lot）：关闭不代表实现，outbound/inbound 媒体仍待统一渠道媒体层。
- **统一文件接取/解析/投递跟踪器**（#11013）：承接已接受的 RFC #9488，属实现批次的协调跟踪器，与 PR #10407 的会话附件方向相关。
- **多插件仓库**（#12109，今日新开）：请求支持逗号分隔的 `ZEROCLAW_PLUGIN_REGISTRY_URL`，目前仅支持单一仓库。零评论，尚无 PR。
- **CLI-only 构建安装路径**（PR #12111）：让安装器默认装 CLI-only 构建，按需切换标准构建，标记 `release:v0.9.0`，透明度高、可能较早上游。
- **可按渠道实例排除工具**（PR #11990 / 配套 #12113）：修复 #11989，已进入评审。

**判断**：v0.9.0 更可能聚焦配置迁移（#11218）、安全与所有权（#11234）、CLI 安装（#12111）与渠道工具限制（#11990），而非 RAG 等大子系统。

## 7. 用户反馈摘要

- **基础交互可靠性最伤体验**：ZeroCode TUI 的复制按钮"什么都不做"（#11418），S1 级别阻断日常使用。
- **模型在本地推理栈上的行为退化**：Ollama `qwen3.5:9b` 下反复以错误参数调用 `model_routing_config`（#11708，已修复）；MLX-LM 原生工具调用下重复 `web` 类工具调用绕过防护（#11484，已修复）。
- **提示缓存成本敏感**：用户明确指出延迟加载 MCP 工具会改写系统提示并击穿缓存（#11703），这是运营成本层面的真实痛点。
- **渠道身份语义混淆**：Matrix 中"对端用户"被当作"房间"投递（#10926），Discord 同类问题由 PR #12116 以显式报错处理。
- **文档本地化质量**：#12076 由维护者通读 `fr/ja/es/zh-CN.po` 后发现 v0.8.7 新增页面（尤其 `plugin-release-acceptance.md`）存在翻译错误，已作为 v0.9.0 文档项关闭。
- **插件生态诉求**：第三方插件仓库用户希望配置多个 registry URL（#12109）。
- **运营者可配置性**：Telegram 未授权发送者提示允许自定义并遵循实际授权路径（#10400，已关闭）。

## 8. 待处理积压

需维护者优先关注：

1. **#9394**（P1，`status:no-stale`，创建于 2026-07-26）— 配对码永不过期属于安全缺陷，挂 `release:v0.9.0` 已逾三月无 fix PR。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)
2. **PR #11234**（P1，`release-gate`，创建于 2026-09-29）— 安全补丁反复 rebase 合并 master，等待合入。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11234)
3. **PR #10407**（XL，创建于 2026-08-27，跨全部渠道标签）— 会话提示附件，规模大、跨模块，已滞留两月。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)
4. **PR #11174**（XL，创建于 2026-09-26）— 能力注入构造器，`release:v0.9.0` 关键项。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11174)
5. **#11235**（RFC，`needs-author-action`）— RAG 设计需作者补充，否则讨论将停滞。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11235)
6. **PR #11990**（`needs-author-action`，创建于 2026-10-22）— 按渠道实例排除工具，评审提出异常例外需求，配套 #12113 已提交。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11990)
7. **#7891**（`status:parking-lot`，创建于 2026-06-17）— Signal 媒体支持搁置逾四个月，建议明确取舍。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7891)

**健康度提示**：45 条待合并 PR 对 5 条合入，叠加多个 XL 级 `release:v0.9.0` 条目长期挂起，建议维护者优先推进 `release-gate` 与 P1 安全项，并对两个 XL PR 给出明确的分批合入计划。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*