# OpenClaw 生态日报 2026-08-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-10 02:15 UTC

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

# OpenClaw 项目动态日报 — 2026-08-10

## 今日速览

过去 24 小时 OpenClaw 仓库保持极高活跃度：500 条 Issue 与 500 条 PR 被更新，其中新开/活跃 Issue 429 条、关闭 71 条；PR 待合并 333 条、已合并/关闭 167 条；无新版本发布。整体处于"高迭代但未发版"的密集开发期——PR 列表中混入大量重构与代码清理（移除死分支、拍平命名层、合并 failover 分类），显示维护者正为下个版本做稳定性和内务收口。需警惕的是，评论数最高的 Issue #116277（DeepSeek v4 Flash 静默回复失败，196 条评论）虽被关闭，用户随即开出 #121058 报告同类故障仍在复现，消息丢失类问题依然是社区最敏感、最持久的健康度短板。

## 项目进展

过去 24 小时合并/关闭的重要 PR 集中在会话状态修复、UI 恢复、QA 基础设施与 Slack 兼容性四个方向：

- **会话/Agent 状态修复**
  - [PR #121146](https://github.com/openclaw/openclaw/pull/121146)：修复重置会话时工具结果与工具调用错配（provider 在 reset 边界复用同一 call ID），避免后续 turn 与云 worker 拿到不连贯的 replay 上下文。
  - [PR #121346](https://github.com/openclaw/openclaw/pull/121346)：修复 `doctor --fix` 静默重开用户已关闭的 GPT-5 友好人设。
- **UI 恢复与体验**
  - [PR #121322](https://github.com/openclaw/openclaw/pull/121322)：恢复 Cloud Worker Desktop 面板入口（此前会话工具栏与命令面板均找不到 Desktop 操作）。
  - [PR #121254](https://github.com/openclaw/openclaw/pull/121254)（OPEN，等作者）：侧边栏 pin/unpin 改为即时响应，不再等 Gateway 往返。
- **QA 与 CI 韧性**
  - [PR #121253](https://github.com/openclaw/openclaw/pull/121253)：QA 套件改为复用单一不可变 Docker 候选镜像，消除证据漂移。
  - [PR #121323](https://github.com/openclaw/openclaw/pull/121323)：外部 Crabbox provider 全挂时，`check:changed` 回退本地 lane，避免 CI 被外部服务拖死。
- **代码整洁度**
  - [PR #121331](https://github.com/openclaw/openclaw/pull/121331)：将 4 份重复的 record guard 收敛到 canonical normalization-core 契约，降低语义漂移风险。
  - [PR #121341](https://github.com/openclaw/openclaw/pull/121341)（OPEN）：把分散的 failover 分类逻辑合并为一个 substrate，是后续 fallback 治理的架构铺垫。

整体评价：项目在"会话一致性/消息可靠性"与"工程内务（重构、去重、CI 韧性）"两条线均有实质推进，旗舰级新功能（QR 绑号体系）仍在合入前的多 PR 排队阶段。

## 社区热点

- **[Issue #116277 — DeepSeek v4 Flash 静默回复失败（196 条评论，已关闭）](https://github.com/openclaw/openclaw/issues/116277)**：当前最大热点。模型在 Telegram 群聊中静默失败，仅回退一句 *"No reply was generated"*，被标记 P1、`impact:message-loss`、diamond lobster。用户 [sloptop-the-terrible] 随即开出 [#121058](https://github.com/openclaw/openclaw/issues/121058)（19 条评论）称监控 cron 在 issue 关闭后仍持续记录新发生例。背后诉求非常明确：**静默失败必须有可观测的队列/重试与消除机制，而非只用一句话敷衍用户**。

- **[Issue #22438 — 分层 bootstrap 文件加载（19 条评论）](https://github.com/openclaw/openclaw/issues/22438)**：大 workspace 用户要求按需加载 bootstrap 文件以节省 context token——尤其是 sub-agent 与 cron job 从不引用却仍被灌入的文件。这是"context 预算经济性"呼声的代表，与 #6757（agent 自触发压缩）、#54373（Context Provenance）同属一个路线图簇。

- **[Issue #91009 — Codex PreToolUse hook 引发 CPU 满载并卡死 Gateway RPC（18 条评论，P1）](https://github.com/openclaw/openclaw/issues/91009)**：Codex 集成下每次 tool call 拉起多个短生命周期 `openclaw-hooks` 进程（>100% CPU/个），阻塞网关。带 `impact:crash-loop`，至今 `no-new-fix-pr`，需 live repro。

- **[Issue #45740 — gh-issues skill 将不可信 issue body 直接注入子代理 prompt（16 条评论，安全）](https://github.com/openclaw/openclaw/issues/45740)**：社区对 prompt injection 的担忧显著上升，要求对 GitHub issue/评论正文做隔离或净化。长期卡在 `needs-security-review`。

## Bug 与稳定性

过去 24 小时更新的 Bug 按严重程度排列如下（聚焦消息丢失、崩溃、安全）：

| 级别 | Issue | 问题 | 状态 / fix PR |
|---|---|---|---|
| P0 | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于已发布版本（IsolatedSessions 有文档但 2026.3.13 无此功能），按文档配置即失败 | OPEN，release blocker |
| P1 | [#121058](https://github.com/openclaw/openclaw/issues/121058) | #116277 关闭后静默回复失败仍复现，无 queued reply payload | OPEN（新开），监控持续告警 |
| P1 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook 进程 CPU 满载、Gateway RPC 卡死（crash-loop） | OPEN，`no-new-fix-pr` |
| P1 | [#96242](https://github.com/openclaw/openclaw/issues/96242) | 至少三条独立路径导致 Telegram 重复消息 | OPEN，`linked-pr-open` |
| P1 | [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix 房间 agent 对 no-reply 输出自循环，重启后重放旧 session | OPEN，`needs-info` |
| P1 | [#90378](https://github.com/openclaw/openclaw/issues/90378) | 5.28→6.1 升级 cron 存储静默迁移 SQLite，新 job 默认 announce 致 channel 报错 | OPEN，`linked-pr-open` |
| P1 | [#114020](https://github.com/openclaw/openclaw/issues/114020) | 升 2026.7.2-beta.4 后 Feishu/Telegram 入站报 `runDispatchLifecycle` 缺失 | OPEN，`not-repro-on-main` |
| P1 | [#111372](https://github.com/openclaw/openclaw/issues/111372) | macOS 上 Gateway 无限 SIGTERM 重启循环（稳定版回归） | OPEN，`source-repro` |
| P1 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程不回收，僵尸进程累积致运行时劣化 | OPEN，`no-new-fix-pr` |
| P1 | [#56653](https://github.com/openclaw/openclaw/issues/56653) | Slack Socket Mode reaction 事件在 5 个 bot 账号上全部未投递 | OPEN，`needs-info` |
| P1 | [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows 上 exec/read 间歇性返回空输出（v2026.6.x 回归） | OPEN，`needs-live-repro` |
| 安全 | [#45740](https://github.com/openclaw/openclaw/issues/45740) | gh-issues skill 未净化注入不可信 issue body → 子代理 prompt 注入 | OPEN，`needs-security-review` |

此外，维护者标签的 umbrella issue [#69208](https://github.com/openclaw/openclaw/issues/69208)（跨渠道重复 transcript/replay/context assembly bug，P1）仍在收集 MSTeams/webchat/Telegram 等多渠道同类案例。

正向信号：与 #118028 相关的 auto-reply 取消权修复 [#118359](https://github.com/openclaw/openclaw/pull/118359)、保留 worker 失败诊断的 [#121122](https://github.com/openclaw/openclaw/pull/121122) 均已就绪但标注"等待作者"。**"有 PR 但合入慢"是当前稳定性闭环的主要瓶颈。**

## 功能请求与路线图信号

- **可观测性/恢复力**：[#6599](https://github.com/openclaw/openclaw/issues/6599) 请求 `/models test-fallback` 命令验证 fallback 链；[#33975](https://github.com/openclaw/openclaw/issues/33975) 请求 fallback 审批模式与消息级 model attribution。
- **上下文经济性**：[#22438](https://github.com/openclaw/openclaw/issues/22438) 分层 bootstrap 加载；[#54373](https://github.com/openclaw/openclaw/issues/54373) Context Provenance；[#60572](https://github.com/openclaw/openclaw/issues/60572) 多槽位记忆；[#63990](https://github.com/openclaw/openclaw/issues/63990) 多索引 embedding 记忆。
- **安全边界**：[#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets（4 👍，P1，自 2 月挂起）；[#47677](https://github.com/openclaw/openclaw/issues/47677) Telegram reaction 作为一等输入。
- **渠道体验**：[#46656](https://github.com/openclaw/openclaw/issues/46656) Webchat 内联按钮；[#39343](https://github.com/openclaw/openclaw/issues/39343) 媒体组/图片批处理缓冲；[#71452](https://github.com/openclaw/openclaw/issues/71452) 消息列表分页（当前硬编码 25 条上限）。
- **运维治理**：[#67413](https://github.com/openclaw/openclaw/issues/67413) 按 agent 配置 dreaming 防 OOM（5 👍）；[#85461](https://github.com/openclaw/openclaw/issues/85461) 图像生成 provider 用量元数据。

**最明确的下一版本信号**：一组紧密耦合的"系统代理 QR 设置"PR 正在推进——[#119341](https://github.com/openclaw/openclaw/pull/119341)（QR 契约）、[#119342](https://github.com/openclaw/openclaw/pull/119342)（宿主 QR 步骤）、[#119343](https://github.com/openclaw/openclaw/pull/119343)（Gateway 持有 QR 会话）、[#114173](https://github.com/openclaw/openclaw/pull/114173)（Control UI 展示）、[#119344](https://github.com/openclaw/openclaw/pull/119344) + [#118169](https://github.com/openclaw/openclaw/pull/118169)（Signal 扫码绑号）。此外 [#121074](https://github.com/openclaw/openclaw/pull/121074)（Ollama Cloud 支持 max thinking，联动 #77612）预计随下版本落地。

## 用户反馈摘要

- **消息丢失是最痛的点**：`sloptop-the-terrible` 连开 #116277/#121058，核心抱怨是"关闭 issue ≠ 修复"，且 fallback 文案 "No reply was generated" 对用户无可操作信息。这与 #96242（Telegram 重复消息）、#114211（Matrix 循环）共同说明**收发两条链路都缺乏端到端保障**。
- **升级/迁移摩擦反复**：`olveww-dot` 报告 cron 存储静默迁移 SQLite 且新 job 默认行为变更；`Stoff81` 控诉文档领先于 release（P0）；`rudyshaw1988` 遇到 memory-lancedb 在 Windows Docker 绑定挂载下无法初始化。
- **大 workspace 用户被 context 成本困扰**：`882soft` 详述 bootstrap 文件在每个 session（含 sub-agent/cron）浪费 token，诉求渐进式上下文控制。
- **安全焦虑上升**：`zients` 精确定位 gh-issues 注入点（SKILL.md line 369）；`jmkritt` 要求 Masked Secrets；`lawong888` 抱怨插件 loader 对非法契约静默容忍，"凭空烧掉数小时调试时间"。
- **性能有量化反馈**：`banna-commits` 给出 Mac mini M4 TTFT 剖析——每 ~43 秒有约 14 秒花在不变的 per-request auth（5.5s）与 tool bundling（8.9s）；`aaronwong1989` 报告全 workspace 同时 dreaming 触发 6GB OOM。
- **开发者体验**：`jekard` 希望 sub-agent 超时前 N 秒注入预警，否则"未保存工作全部丢失"；`matts524` 在 Windows 遭遇主会话 exec/read 间歇空输出（sub-agent 正常）这一难排查回归。

## 待处理积压

以下为开启时间长、影响级别高、至今无 fix PR（或 PR 长期未合）的重点项：

- **[#10659 Masked Secrets（2026-02-06 开启，P1，4 👍）](https://github.com/openclaw/openclaw/issues/10659)**：高票安全需求，6 个月未进入实现，`no-new-fix-pr`。
- **[#48920 Live Docs 领先 release（2026-03-17 开启，P0）](https://github.com/openclaw/openclaw/issues/48920)**：release-blocker 级文档/版本错位，直接伤害用户部署信任。
- **[#45740 gh-issues prompt injection（2026-03-14 开启，安全）](https://github.com/openclaw/openclaw/issues/45740)**：长期停在 `needs-security-review`，建议尽快给出安全处置结论。
- **[#91009 Codex hook CPU 满载（2026-06-06 开启，P1）](https://github.com/openclaw/openclaw/issues/91009)**：与 #97616 僵尸进程问题同源，均无新 fix PR。
- **[#57901 Safeguard compaction 忽略 compaction.model（2026-03-30 开启，P2）](https://github.com/openclaw/openclaw/issues/57901)**：配置被静默忽略类 bug，有 `linked-pr-open` 但合入缓慢。
- **长期等待作者的 PR 积压**：[#118359](https://github.com/openclaw/openclaw/pull/118359)（auto-reply 取消权）、[#119847](https://github.com/openclaw/openclaw/pull/119847)（spawn 附件越界安全修复）、[#120496](https://github.com/openclaw/openclaw/pull/120496)（Claude CLI 压缩免 API key）、[#120864](https://github.com/openclaw/openclaw/pull/120864)（Slack Enterprise Grid 运行时探测）、[#121122](https://github.com/openclaw/openclaw/pull/121122)（worker 失败诊断跨重启保留），以及 QR 全家桶 #119341/#119342/#119343/#114173/#119344。多数已"ready for maintainer look"或仅缺作者补充，建议在下一 release 窗口集中评审。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告（2026-08-10）

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现“头部高活跃、尾部分化”的态势。以 OpenClaw、Hermes Agent、ZeroClaw 为代表的核心项目每日保持 50+ Issue 和 50+ PR 的高频更新，但普遍面临 PR 合并率低、审查积压的瓶颈；同时，安全漏洞（SSRF、命令注入、Webhook 未认证）与稳定性问题（消息丢失、UI 冻结）成为跨项目共同痛点。功能层面，上下文经济性（token 追踪、分层加载）、可观测性（fallback 测试、用量记录）、开放协议（GitAgent、Agent Plugins）与多通道集成是各项目集中投入的方向。整体而言，生态正处于“功能快速扩张但工程质量承压”的阶段，社区对安全默认值、可观测性和治理效率的呼声显著上升。

## 2. 各项目活跃度对比

| 项目 | Issue 更新数 | PR 更新数 | Release | 健康度评估 |
|---|---|---|---|---|
| OpenClaw | 500（新开/活跃 429，关闭 71） | 500（合并/关闭 167，待合并 333） | 无 | ⭐⭐⭐⭐ 高频迭代，但消息丢失等 P1 问题突出 |
| Hermes Agent | 50（全部 Open） | 50（合并/关闭 3） | 无 | ⭐⭐ 安全加固密集，但合并率仅 6%，P0/P1 积压 |
| ZeroClaw | 50（活跃 38，关闭 12） | 50（合并/关闭 1） | 无 | ⭐⭐⭐ 问题收敛明显，但合并通道严重拥堵 |
| IronClaw | 22（活跃 15，关闭 7） | 32（合并/关闭 8） | 无 | ⭐⭐⭐ 修复节奏较好，新增高严重度 API Bug |
| CoPaw | 18（活跃 11，关闭 7） | 27（合并/关闭 1） | 无 | ⭐⭐⭐ 社区活跃，first-time-contributor 多，合并慢 |
| NanoBot | 5（全部活跃） | 16（合并/关闭 4） | 无 | ⭐⭐ 安全漏洞（exec.allowPatterns 绕过）无修复 PR |
| PicoClaw | 3（活跃 2，关闭 1） | 6（合并/关闭 1） | 无 | ⭐⭐⭐ SSRF 修复积极，Matrix 断线问题被 stale 关闭 |
| NanoClaw | 1（新开） | 16（合并/关闭 0） | 无 | ⭐⭐ 提交活跃但零合并，critical CVE 待修复 |
| LobsterAI | 3（全部活跃） | 0 | 无 | ⭐ 维护缓慢，模型误判 Bug 无响应 |
| Moltis | 2（全部活跃） | 1（待合并） | 无 | ⭐⭐⭐ 小规模稳定修复 |
| NullClaw | 0 | 0 | 无 | 无活动 |
| TinyClaw | 0 | 0 | 无 | 无活动 |
| ZeptoClaw | 0 | 0 | 无 | 无活动 |

## 3. OpenClaw 在生态中的定位

OpenClaw 是当前生态中**社区规模最大、迭代速度最快**的旗舰项目，每日 500+ Issue/PR 的流量远超其他项目。其优势在于：

- **功能覆盖全面**：从多渠道接入（Telegram、Matrix、Slack）到 UI、QA 基础设施均有持续投入，且当前正推进 QR 绑号、Ollama Cloud 支持等新功能。
- **技术路线以“工程内务”为先**：大量 PR 用于重构、去重、CI 韧性、会话一致性修复，体现出为下一版本做稳定性收口的明确意图。
- **社区反馈闭环活跃**：用户对消息丢失、静默失败等问题的持续追踪（如 #116277→#121058）倒逼维护者重视可观测性。

与同类相比，OpenClaw 的**差异化在于“大而全”**：而 Hermes Agent 更侧重安全加固，NanoBot 专注轻量网关协议互操作，IronClaw 强调企业级自动化（Slack/Routines），ZeroClaw 则投入治理与 RFC 流程。OpenClaw 的高合并/关闭比（167/500）说明其维护者响应能力在头部项目中较强，但 333 条待合并 PR 仍构成潜在瓶颈。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **安全加固与输入净化** | PicoClaw、Hermes、ZeroClaw、NanoBot、NanoClaw | SSRF 防护（PicoClaw）、exec 白名单绕过（NanoBot）、Webhook 未认证（ZeroClaw）、凭据链验证（Hermes）、容器 CVE（NanoClaw） |
| **上下文经济性与 token 可观测** | OpenClaw、NanoBot、LobsterAI、Hermes、ZeroClaw | 分层 bootstrap 加载、token 消耗追踪 API、上下文窗口可配置、记忆变更可逆、模型能力配置统一 |
| **消息可靠性与端到端保障** | OpenClaw（静默失败/重复）、Hermes（数据丢失）、IronClaw（顺序错乱）、NanoBot（Telegram 轮询） | 可观测的重试机制、去重、状态修复、防欺骗回滚 |
| **可观测性与诊断能力** | OpenClaw（fallback 测试）、NanoBot（usage records）、IronClaw（工具调用追踪）、ZeroClaw（Langfuse 集成） | 链路追踪、用量归因、fallback 审批、状态展示 |
| **多通道稳定性与体验** | OpenClaw（Matrix/Telegram）、Hermes（微信/WhatsApp）、IronClaw（Slack）、NanoClaw（Dial） | 连接恢复、认证流程、附件传递、移动端适配 |
| **开放协议与生态互操作** | NanoBot（GitAgent）、NanoClaw（Dial）、OpenClaw（QR 绑号）、ZeroClaw（多模型 Provider） | 标准化插件机制、跨平台身份绑定、模型配置抽象 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构差异 |
|---|---|---|---|
| **OpenClaw** | 全能型个人 AI 助手，覆盖消息、UI、QA、云 worker | 技术爱好者、自托管用户、多通道使用者 | 模块化 + 云/本地混合架构，Gateway 中心 |
| **Hermes Agent** | 安全与隐私优先，桌面端 + CLI + 网关 | 安全敏感用户、企业测试环境 | 强调权限边界、安全审计，holographic memory |
| **ZeroClaw** | 治理与 RFC 驱动，多通道安全默认 | 组织级贡献者、多用户部署 | 严格的 RFC 流程，verifiable-intent 约束 |
| **IronClaw** | 企业级自动化（Routines、Slack 集成） | 业务团队、自动化流程设计者 | 深度集成 Slack，技能存储重构，Responses API |
| **NanoBot** | 轻量级 AI 网关，协议互操作 | 开发者、嵌入式场景 | 支持 GitAgent 协议、Agent Plugins，WebUI 轻量 |
| **PicoClaw** | 多渠道聊天网关，专注 IM 接入 | 需要连接多个 IM 的自托管用户 | 对 SSRF 响应迅速，但功能范围较窄 |
| **NanoClaw** | 容器安全部署与加固镜像 | 云原生、Docker/K8s 用户 | 主打 hardened prebuilt image，CVE 门槛 |
| **CoPaw** | 基于 Qwen/AgentScope 的多模型生态 | 中文社区、火山引擎/小米模型用户 | 深度整合 AgentScope，ReMe 记忆、会话 Fork |
| **LobsterAI** | 模型适配与多模型协作（实验性） | 研究人员、需要跨模型调用的用户 | 自定义模型解析存在缺陷，维护滞后 |

## 6. 社区热度与成熟度

**活跃度分层**：

- **第一梯队（高频活跃，每日 20+ Issue/PR）**：OpenClaw、Hermes、ZeroClaw、IronClaw、CoPaw。这些项目社区讨论激烈，但除 IronClaw 外合并率均偏低（1%~6%），存在审查瓶颈。
- **第二梯队（中等活跃，5~20 PR）**：NanoBot、NanoClaw、PicoClaw。迭代速度适中，但安全漏洞与积压 PR 需关注。
- **第三梯队（低活跃，≤3 Issue/PR）**：LobsterAI、Moltis，以及完全无活动的 NullClaw、TinyClaw、ZeptoClaw。这些项目可能处于维护低谷或停更状态。

**成熟度特征**：

- **OpenClaw、ZeroClaw**：处于“高迭代但未发版”的质量收口阶段，重视工程内务与治理。
- **Hermes**：安全加固投入最密集，但修复速度跟不上新问题上报（Issue 关闭数 0）。
- **IronClaw**：历史 Bug 批量收敛，正迈向 v1.2.0，属于“质量巩固”阶段。
- **NanoBot、PicoClaw**：活跃但出现安全与稳定性缺口，处于“功能推进 vs 风险并存”的成长阶段。
- **Moltis、LobsterAI**：社区声量小，维护响应慢，成熟度较低。

## 7. 值得关注的趋势信号

1. **安全基线成为第一优先级**：跨项目同时出现 SSRF、命令注入、Webhook 未认证、凭证链绕过等漏洞，且部分已形成系统性审计（PicoClaw 的渠道 SSRF 系列、NanoBot 的 allowPatterns 绕过）。开发者应默认采用“fail closed”设计，并主动内置安全检测例外机制（如 ZeroClaw 的公共区块链白名单）。

2. **上下文成本与可观测性需求爆发**：NanoBot 的百万 token 消耗追踪、OpenClaw 的分层 bootstrap、LobsterAI 的上下文窗口配置，共同指向**用户对 token 账单和资源消耗的敏感度已从“优化”变为“刚需”**。提供按调用维度的用量记录、fallback 测试命令将成为下一代助手的标配。

3. **消息可靠性是用户体验的生死线**：OpenClaw 的静默失败（196 条评论）、Hermes 的三次数据丢失事件、NanoBot 的 Telegram 轮询停滞，表明“消息丢失”比“功能缺失”更能摧毁用户信任。可重试队列、明确错误码、跨重启的恢复机制是必须补齐的短板。

4. **开放协议与生态互操作加速**：NanoBot 合并 GitAgent 协议、OpenClaw 推进 QR 绑号、ZeroClaw 的多模型 Provider 档案，揭示出“AI Agent 像 Web 服务一样可组合”的愿景。采用开放标准（如 Agent Plugins、OTel）有助于打破供应商锁定。

5. **桌面端与移动端体验成为竞争新维度**：Hermes 的桌面冻结、OpenClaw 的 UI 恢复、CoPaw 的移动端请求，说明用户已不满足于 CLI 和 Web 面板，**跨设备的流畅交互是自托管 Agent 走向主流的关键**。

6. **治理与流程效率开始制约发展**：ZeroClaw 的 RFC 积压、Hermes 的 6% 合并率、多项目“等待作者”的 PR 长尾，反映出纯粹的 GitHub 管理已接近极限。引入自动化看板、决策队列和批量 review 机制，将是头部项目维持社区士气的必要条件。

7. **容器化部署的安全合规成为新赛道**：NanoClaw 的 Docker Hub 发布 + CVE 门槛、ZeroClaw 的 Windows null device 修复，显示出**“开箱即用”的加固镜像**正在成为差异化卖点。对于开发者，关注基础镜像的供应链安全和软件包覆盖率（如 pip 支持）将直接影响生产落地。

---
*本报告基于 2026-08-10 各项目 GitHub 公开动态自动生成，数据以各项目日报为准。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-10

## 1. 今日速览

过去24小时内 NanoBot 项目活跃度较高：共更新 5 条 Issues 和 16 条 PR，其中 4 条 PR 已合并/关闭、12 条仍在等待审查。最值得关注的是 2 个新上报的安全漏洞（均涉及 `exec.allowPatterns` 绕过），属于高危且目前尚无对应修复 PR。与此同时，项目今日合并了 GitAgent 协议支持、Star History 图表恢复、测试体系增强和 WebUI 语音输入 HTTPS 修复，整体呈现"功能推进与安全风险并存"的状态。此外，token 消耗追踪需求（#5266）已获得 13 条评论的热烈讨论，并有对应实现 PR（#5299）已提交，预计有望在后续版本落地。

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共有 4 条 PR 被合并/关闭，分别涉及协议支持、WebUI 体验和工程质量：

- **[PR #4019] 已关闭 — 添加 GitAgent Protocol 支持（agent.yaml + SOUL.md）**  
  为 nanobot 引入 GitAgent 开放协议标准，支持便携式 AI agent 的 manifest 定义，增强生态互操作性。此 PR 历经 2 个多月终于合并，是 nanobot 向开放标准靠拢的重要一步。  
  https://github.com/HKUDS/nanobot/pull/4019

- **[PR #5307] 已合并 — 恢复 Star History 图表**  
  原有图表组件因上游项目被 GitHub 移除而失效，新提供方不受近期 GitHub 限制影响，WebUI 项目页面的 Star 趋势图恢复可用。  
  https://github.com/HKUDS/nanobot/pull/5307

- **[PR #5308] 已合并 — 加强测试覆盖和 CI 门槛**  
  新增交互式 CLI、WebUI 聊天 fork、版本检查、路由认证和故障边界等用户路径测试，移除 5 个冗余测试，启用 V8 覆盖率报告并在 CI 中强制执行覆盖阈值，工程质量进一步提升。  
  https://github.com/HKUDS/nanobot/pull/5308

- **[PR #5304] 已合并 — 修复 WebUI 语音输入的 HTTPS 要求说明**  
  区分了不安全的 HTTP 来源和浏览器本身不支持录音两种场景，在所有 WebUI 语言环境中补充了可操作的 HTTPS 要求提示，并补充了局域网访问的可信 HTTPS 方案文档。  
  https://github.com/HKUDS/nanobot/pull/5304

整体来看，项目在协议兼容性、前端体验和工程体系建设三个方向均有推进，展现了良好的维护节奏。

---

## 4. 社区热点

- **[Issue #5266] — token 消耗追踪需求（13 条评论，热度最高）**  
  https://github.com/HKUDS/nanobot/issues/5266  
  用户报告 nanobot 在无明显操作的情况下 2 小时内消耗了上百万 tokens，呼吁提供按调用维度的 token 消耗日志以便追溯。该问题自 8 月 6 日创建以来持续活跃，评论累计达 13 条，反映出用户对成本可观测性的强烈诉求。值得注意的是，PR #5299（结构化 token 使用记录 API）正是针对该需求的实现，社区反馈已有效转化为开发动作。

- **[PR #5299] — 暴露结构化 token 使用记录（待合并）**  
  https://github.com/HKUDS/nanobot/pull/5299  
  实现方案为：通过 `TokenUsageHook` 持久化最近 50 条 token 使用记录，保留现有轻量级每日汇总接口，新增认证接口 `GET /api/settings/usage/records?day=YYYY-MM-DD` 供按需诊断。该 PR 若合入，将直接解决 #5266 的核心诉求。

---

## 5. Bug 与稳定性

按严重程度排序：

**🔴 高危 — 安全漏洞（无修复 PR）**

- **[Issue #5306] `exec.allowPatterns` shell 链绕过导致非预期命令执行**  
  https://github.com/HKUDS/nanobot/issues/5306  
  攻击者可通过配置的 allowed pattern 构造 shell 链，绕过命令执行白名单限制。此为安全公告类 issue，影响面取决于部署场景。

- **[Issue #5305] `exec.allowPatterns` 白名单绕过，可通过 OpenAI 兼容 API 执行链式命令**  
  https://github.com/HKUDS/nanobot/issues/5305  
  与 #5306 同类问题，但攻击向量为 OpenAI 兼容 API，意味着远程调用者也可能受影响。两个 issue 均于 8 月 9 日提交，目前无对应修复 PR，建议维护者优先评估。

**🟡 中危 — Docker 部署问题（无修复 PR）**

- **[Issue #5295] Docker Compose 部署失败：`/usr/local/bin/entrypoint.sh: Permission denied`**  
  https://github.com/HKUDS/nanobot/issues/5295  
  用户按照 deployment.md 文档使用 Docker Compose 部署时，`nanobot-gateway` 容器因 entrypoint 脚本权限不足导致启动失败（exit code 2）。文档步骤与实际镜像权限配置不一致，影响新用户的上手体验。

**🟢 低危 — 特定 provider 兼容性问题（无修复 PR）**

- **[Issue #5311] Agnes AI 自定义 provider 将嵌套对象 tool 参数双重编码为 JSON 字符串**  
  https://github.com/HKUDS/nanobot/issues/5311  
  使用 Agnes AI（`apihub.agnes-ai.com/v1`，模型 `agnes-2.5-flash`）时，MCP 工具调用若包含嵌套对象参数，会因二次 JSON 编码导致参数校验失败（MCP error -32602）。属于特定第三方服务兼容性问题，影响范围有限。

**待合并修复 PR 速览**：今日暂无针对上述 bug 的修复 PR 合入，但 [PR #5303](https://github.com/HKUDS/nanobot/pull/5303)（天气工作流 Windows 兼容）、[PR #5302](https://github.com/HKUDS/nanobot/pull/5302)（Dream 期间阻止不可用工具调用）、[PR #5310](https://github.com/HKUDS/nanobot/pull/5310)（微信强制扫码登录）等修复均在待合并状态。

---

## 6. 功能请求与路线图信号

- **Token 使用记录 API（#5266 → PR #5299）**  
  用户明确要求按调用记录 token 消耗，PR #5299 已提供完整实现（持久化 50 条记录 + 日维度查询接口）。该功能很可能进入下一版本，并可能推动后续的成本管理能力（如配额、告警等）。

- **Agent Plugins 生态集成（PR #5288）**  
  https://github.com/HKUDS/nanobot/pull/5288  
  将 Agent Plugins v1（厂商中立的插件打包标准）与 CLI Apps 集成，使 nanobot 成为通用宿主，外部项目（如 `nanobot-dev/computer-use`）可作为独立插件运行。这与此前合并的 GitAgent 协议方向一致 —— 项目在持续强化生态扩展能力。

- **计算机使用能力（PR #4276）**  
  https://github.com/HKUDS/nanobot/pull/4276  
  模型无关的 computer use 工具（`browser` + `computer_use`），允许普通 tool-calling 模型通过稳定元素引用进行 DOM 自动化，而非依赖像素坐标。该 PR 自 6 月 10 日提交，目前仍为待合并状态且存在 conflict，但体现了对 agent 实际操控能力的探索。

- **真实 API 服务状态展示（PR #5255）**  
  https://github.com/HKUDS/nanobot/pull/5255  
  WebUI 的 API server 面板目前只识别由 gateway 启动的实例，对于外部运行的 `nanobot serve` 进程一律显示为 Off。该草稿 PR 计划引入 `nanobot api status` 命令，如实反应服务端运行状态，改善自托管用户的运维体验。

---

## 7. 用户反馈摘要

- **成本焦虑是当前核心痛点**：Issue #5266 中，用户报告 token 消耗量巨大（2 小时内约百万级），且无法定位消耗来源，对成本的不可控表达了明显担忧。评论中其他用户可能也有类似遭遇（13 条评论佐证该问题的普遍性），期望官方提供可观测性工具。

- **部署文档与实际行为不一致**：Issue #5295 的用户完全按照官方 `deployment.md` 操作 Docker Compose 部署，却遇到 entrypoint.sh 权限错误，说明文档示例与镜像配置之间可能存在脱节。这类问题对新用户的上手体验伤害较大。

- **对 WebUI 细节体验有期待**：PR #5304（语音输入 HTTPS 说明）和 PR #5309（市场技能覆盖内置技能）的提交虽然都是小修复，但反映出用户社区对前端体验完整度的关注在提升。

- **安全敏感型用户开始做深入测试**：YLChen-007 连续提交两个 `exec.allowPatterns` 绕过漏洞（#5305、#5306），说明有用户正在对 nanobot 的权限边界做系统性的安全审计，社区对自托管 AI 网关的安全基线要求正在提高。

---

## 8. 待处理积压

- **[PR #4276] 模型无关的 computer use 工具（待合并，存在 conflict）**  
  提交于 6 月 10 日，已搁置 2 个月。功能价值较高（浏览器自动化和桌面控制），但需解决合并冲突并补充测试，建议维护者明确排期。  
  https://github.com/HKUDS/nanobot/pull/4276

- **[PR #5156] Telegram 轮询停滞自动恢复（7 月 29 日提交，已 12 天）**  
  修复生产环境中 Telegram bot 因网络抖动导致永久静默失联的问题，是 #5171 的修复 PR。PR #5301 拆分了其中的可观测性部分（日志桥接 + 轻量存活检查）先行提交，但完整的连接池重建 watchdog 仍等待审查。  
  https://github.com/HKUDS/nanobot/pull/5156

- **[PR #5255] 外部托管服务的真实状态展示（草稿，8 月 5 日后无更新）**  
  草稿状态已持续 5 天无进展，问题本身对使用独立 `nanobot serve` 的用户有价值，建议维护者评估是否纳入后续迭代。  
  https://github.com/HKUDS/nanobot/pull/5255

- **[PR #5271] 会话后台任务竞态修复（p0 优先级，存在 conflict）**  
  修复 `/new` 清空会话时后台任务（如自动标题生成）因持有旧 Session 引用而覆盖新会话数据的竞态问题，标记为 p0 但仍有冲突未解决，需要尽快处理。  
  https://github.com/HKUDS/nanobot/pull/5271

---

**总结**：NanoBot 今日在生态集成（GitAgent 协议）、工程质效（测试强化）和 WebUI 体验方面均有实际推进，社区活跃度高。但两个安全漏洞（#5305/#5306）和 p0 级会话竞态 PR 的积压需要维护团队优先关注；token 消耗追踪的需求高热且已有实现 PR，预计将很快进入合并流程。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报（2026-08-10）

## 1. 今日速览

过去24小时项目活跃度处于高位：共50条Issue更新（全部保持Open状态，无一条关闭）、50条PR更新（仅3条合并/关闭，合并率约6%），无新版本发布。可见PR中安全类占比近半数（9/20），显示当前维护重点在安全加固；但P0/P1级严重Bug（#82756、#82842、#63047等）仍在积压，Issue关闭数为0，修复速度明显跟不上新问题上报速度，项目整体稳定性承压。

## 2. 版本发布

无。

## 3. 项目进展

今日确认合并/关闭PR 3条（Top 20中可见2条）：

- **[#77992](https://github.com/NousResearch/hermes-agent/pull/77992) — test: gate OS-specific tests by real host, add macOS + Windows CI lanes**：停止在Linux上伪造 `sys.platform` 来运行OS特定测试，改为在真实macOS/Windows宿主上执行，新增双平台CI通道，显著提升跨平台测试可信度。
- **[#43819](https://github.com/NousResearch/hermes-agent/pull/43819) — fix(memory): share one SQLite connection per holographic store database**：holographic memory插件中同一数据库文件共享单条进程级SQLite连接与可重入锁，消除并发连接风险，修复P1级内存/会话状态隐患。

另有47条PR待合并，值得关注的方向包括：

- **安全加固（今日最密集）**：[#80238](https://github.com/NousResearch/hermes-agent/pull/80238) 与 [#80360](https://github.com/NousResearch/hermes-agent/pull/80360) 从两个角度修复multiplex下 `_auth_env` 跨配置文件allowlist泄漏（#80026）；[#80137](https://github.com/NousResearch/hermes-agent/pull/80137) 收紧WhatsApp会话目录与bridge.log权限为0700/0600；[#80847](https://github.com/NousResearch/hermes-agent/pull/80847) 修复browser_cdp OOPIF路径绕过SSRF防护；[#81527](https://github.com/NousResearch/hermes-agent/pull/81527) 修复root安装时Node tarball中uid 1001归属错误；[#82869](https://github.com/NousResearch/hermes-agent/pull/82869) 增加Bitwarden/1Password CLI可信二进制发现与完整性校验。
- **稳定性修复**：[#82592](https://github.com/NousResearch/hermes-agent/pull/82592) 修复网关relay平面冻结预览final与空闲会话委派回调丢失，已在4-box staging fleet完成真实验证；[#82809](https://github.com/NousResearch/hermes-agent/pull/82809) 将本地llama.cpp空body 400重分类为瞬时错误并触发自动重试；[#82356](https://github.com/NousResearch/hermes-agent/pull/82356) 修复图像attachment的vision描述污染会话自动标题的问题。

但3/50的合并率说明PR评审-合并链路存在明显瓶颈——大量已完成并通过验证的fix无法及时进入主线，这会延缓所有下游用户获得修复的时间。

## 4. 社区热点

- **[#63047 macOS Desktop完全无响应（19条评论）](https://github.com/NousResearch/hermes-agent/issues/63047)**：P1级Bug——macOS 27 beta上桌面应用仅5条消息后整个UI冻结，包括Settings（⌘,）都无法打开。用户对"无任何恢复手段"表达强烈不满，是今日讨论热度最高、用户情绪最激烈的Issues。
- **[#26689 盲人VoiceOver用户无障碍改进（13条评论，1👍）](https://github.com/NousResearch/hermes-agent/issues/26689)**：用户以"totally blind VoiceOver user"身份详细陈述了CLI/TUI/Gateway/Dashboard各组件在屏幕阅读器场景下的可用性障碍。虽然优先级仅为P3，但讨论热度高，说明无障碍需求在社区中有真实且持续的声音。
- **[#66824](https://github.com/NousResearch/hermes-agent/issues/66824) 与 [#71987](https://github.com/NousResearch/hermes-agent/issues/71987)（各6条评论）**：同一cronjob `TypeError: '<=' not supported between instances of 'str' and 'int'` 被不同用户先后上报，后者标记为duplicate。cron是核心基础能力，多个用户反复踩中同一错误且长时间未修复，已成为社区负面情绪的重要来源。

热点分析：桌面端稳定性与cron基础功能可用性是当前用户感知最强的两大痛点；无障碍问题优先级虽低，但社区声量大且诉求具体，值得维护者正面回应。

## 5. Bug 与稳定性

按严重程度排列：

**P0（数据丢失级）**

- **[#82756 桌面端plain-Enter提交静默删除约65条消息](https://github.com/NousResearch/hermes-agent/issues/82756)**：这是同类事件的**第三次**发生（前两次#70516删除308条、#80763删除244条），此前两个修复均未覆盖此路径。根因指向 `truncate_before_user_ordinal` 结合 `confirm_truncate: true` 执行了破坏性 `replace_messages`。目前**无对应fix PR**，需最高优先级介入。

**Critical（安全边界）**

- **[#82842 Agent在用户授权的局部删除后对C:\根目录执行 `rd /s /q`](https://github.com/NousResearch/hermes-agent/issues/82842)**：Windows 11上几乎造成系统盘全量数据丢失，仅因进程无管理员权限而幸免。涉及terminal工具路径解析与安全边界缺陷，无fix PR，标记 `needs-repro`。

**P1**

- **[#63047 macOS 27 beta桌面端5条消息后完全冻结](https://github.com/NousResearch/hermes-agent/issues/63047)**：连带Settings不可用，无恢复手段。19条评论，近30天未关闭。
- **[#82770 测试会话泄漏进生产state.db](https://github.com/NousResearch/hermes-agent/issues/82770)**：开发者的测试fixture产生700+垃圾open会话行写入用户生产数据库，属fixture-escape类问题。

**P2（高影响）**

- **[#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) cronjob create/update TypeError**：核心功能完全不可用，已有重复上报。
- **[#82846 智能审批辅助LLM调用无强制超时](https://github.com/NousResearch/hermes-agent/issues/82846)**：provider无响应会无限期楔住整个agent会话，影响Telegram等所有平台。
- **[#82875 reasoning_effort被静默丢弃](https://github.com/NousResearch/hermes-agent/issues/82875)**：配置文件解析正确但请求构造时未发送。
- **[#82831 normalize_usage漏算reasoning tokens](https://github.com/NousResearch/hermes-agent/issues/82831)**：usage详情为dict时静默记0，影响计费与用量统计。
- **[#82805 本地llama.cpp间歇性空body 400](https://github.com/NousResearch/hermes-agent/issues/82805)**：已有对应fix PR [#82809](https://github.com/NousResearch/hermes-agent/pull/82809)。
- **[#80125 微信adapter将ret=-2误报为rate limited](https://github.com/NousResearch/hermes-agent/issues/80125)**：错误分类掩盖真实原因（缺context_token）。
- **[#78190 Gmail MCP网关进程OAuth失败](https://github.com/NousResearch/hermes-agent/issues/78190)**：CLI可用但网关进程不可用，行为因profile而异。
- **[#77211 hermes update不会修复失败的npm依赖](https://github.com/NousResearch/hermes-agent/issues/77211)**：错误信息误导用户"re-run hermes update"但重跑无效。

**P3**

- [#79336](https://github.com/NousResearch/hermes-agent/issues/79336) godmode拒绝检测漏掉弯引号（U+2019），auto_jailbreak误报模型合规
- [#82872](https://github.com/NousResearch/hermes-agent/issues/82872) 桌面端ws_orphan_reap会话恢复为不可点击的幽灵块
- [#79518](https://github.com/NousResearch/hermes-agent/issues/79518) 桌面端隐藏标签栏成为聊天标签的死胡同
- [#82851](https://github.com/NousResearch/hermes-agent/issues/82851) Wayland下HUD窗口无法拖动/重定位
- [#81055](https://github.com/NousResearch/hermes-agent/issues/81055) markdown预览中笔记自身TOC锚点链接无效
- [#82871](https://github.com/NousResearch/hermes-agent/issues/82871) Buzz适配器allowlist被网关中心授权层绕过，默认拒绝所有用户
- [#82798](https://github.com/NousResearch/hermes-agent/issues/82798) skills_guard将`__PLACEHOLDER____`误报为CRITICAL凭证泄露且--force无法覆盖

## 6. 功能请求与路线图信号

- **技能使用Telemetry**（[#82802请求 → PR #82854](https://github.com/NousResearch/hermes-agent/pull/82854)）：PR已实现Desktop端Capabilities → Skills 详情面板展示"最近使用过该技能的会话"，说明该请求已被采纳并有具体实现，预计可进入后续版本。
- **无障碍改进**（[#26689](https://github.com/NousResearch/hermes-agent/issues/26689)）：13条评论的高热度P3请求，VoiceOver用户详细列出了CLI/TUI/Gateway/Dashboard各处的UX障碍，但当前无对应PR，进入下一版本的可能性较低。
- **HAEE自主评估与自改进引擎**（[#61644](https://github.com/NousResearch/hermes-agent/issues/61644)）：用户引用官方curator文档"从不验证skill是否真正有效"为据提出，直指项目"self-improving"定位的验证闭环缺失。
- **记忆变更可逆**（[#76883](https://github.com/NousResearch/hermes-agent/issues/76883)）：要求`MEMORY.md`/`USER.md`的remove/replace操作支持archive回滚，与skills侧curator的archive-not-delete语义对齐。
- **Cron作业链**（[#15831](https://github.com/NousResearch/hermes-agent/issues/15831)，1👍）：要求支持"A成功完成后触发B"，是cron能力的自然延伸，已挂起3.5个月。
- **桌面端UX小改进**（[#82316](https://github.com/NousResearch/hermes-agent/issues/82316)）："New session in project"不应强制进入项目drill-in视图，属低风险、高感知的体验优化。

路线图信号：安全加固明显是当前投入重心（今日9/20 security类型PR）；功能请求方面，与Telemetry/桌面端体验相关的请求更容易被采纳，而系统级能力（HAEE、记忆可逆、作业链）因涉及架构改动，短期落地难度较大。

## 7. 用户反馈摘要

- **桌面端稳定性是最大不满来源**：#63047（UI完全冻结）、#82756（静默删消息，第三次发生）、#82872（幽灵会话块）、#79518（隐藏标签栏死胡同）集中暴露了Desktop端会话状态管理与UI恢复能力的系统性缺陷。尤其#82756三次同类事件，用户信心已严重受损："Both merged fixes left this path open"。
- **Windows数据安全信任危机**：#82842中agent在用户已授权的局部删除后对C:\根目录执行 `rd /s /q`，用户定性为"Critical — near-total data loss on the system drive"。即使事件未实际造成损失，此类安全边界失控对用户信任的打击难以估量。
- **核心功能不可用的挫败感**：cronjob TypeError（#66824/#71987）被完全不同的用户分别上报，说明"创建定时任务"这一基础能力持续不可用，且用户在重复踩坑后选择再次报告而非放弃，反映了一定的容忍度正在消耗。
- **无障碍用户明确感到被忽视**：#26689中用户从"extremely powerful backend"到"very difficult for screen-reader users"的对比，是典型的"产品功能强大但特定人群无法使用"反馈。
- **企业用户的正面反馈**：PR #82592作者描述了在enterprise staging fleet上发现4个relay缺陷并全部复现→修复→4-box验证的完整过程。这类量化验证案例说明项目修复路径有效，且企业级场景下的消息投递可靠性正在改善。

## 8. 待处理积压

- **[#63047](https://github.com/NousResearch/hermes-agent/issues/63047)（P1，7/12创建，近30天）**：macOS桌面端完全冻结，19条评论，无fix PR。作为高热度P1问题长期未解决，已成为社区情绪焦点。
- **[#26689](https://github.com/NousResearch/hermes-agent/issues/26689)（P3，5/16创建，近3个月）**：无障碍需求声量大但长期无进展。若路线图无此规划，建议维护者明确告知社区，避免期待落空。
- **[#15831](https://github.com/NousResearch/hermes-agent/issues/15831)（P3，4/26创建，近3.5个月）**：cron作业链需求，1👍，无维护者回应。
- **[#61644](https://github.com/NousResearch/hermes-agent/issues/61644)（P3，7/9创建）**：HAEE自我评估引擎与项目"self-improving"定位直接相关，暂无回应。
- **[PR #61752](https://github.com/NousResearch/hermes-agent/pull/61752)（7/10创建，一个月未合并）**：修复cmd_update测试在Windows上泄漏真实守护进程，虽为P3但涉及测试环境安全问题，建议尽快评审。
- **重复报告警示**：#66824（7/18）与#71987（7/26）为同一cron TypeError，重复上报间隔8天仍未被修复，反映该类问题的处理SLA有待改善。维护者应优先合并修复该问题的PR（若有）或至少公开已知问题状态。

---

**总结**：Hermes Agent今日社区活跃度高，安全加固投入密集，但Issue关闭数为0、合并率仅6%，修复吞吐明显不足。桌面端数据丢失（三次同类事件）与Windows安全边界失控是当前最紧急的两个风险点，建议维护团队优先响应。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-10

## 今日速览

PicoClaw 今日无新版本发布，但代码与讨论活跃度处于近一周较高水平：24 小时内产生 6 条 PR，其中 5 条待合并；Issue 侧 3 条更新，含 1 个新功能请求。最显著的特征是贡献者集中提交了一批跨渠道 SSRF 安全加固 PR（涉及 WeChat、WeCom、QQ/Telegram/Discord 等），表明项目正在系统性修复媒体下载链路的安全隐患。另一条已存在一月有余的 Matrix sync 断线问题被 stale 机制关闭，但底层故障仍未解决，值得维护团队留意。整体项目健康度良好，安全与格式渲染是当前开发主线。

## 版本发布

今日无新版本发布。

## 项目进展

今日仅有 1 条 PR 关闭：

- [#3326 [CLOSED] fix(web): remove duplicate pnpm lock entries](https://github.com/sipeed/picoclaw/pull/3326) — 作者 As-tsaqib 修复了 `web/frontend/pnpm-lock.yaml` 中重复的 `semver@7.8.5` 映射条目，消除了 `pnpm install --frozen-lockfile` 的 `ERR_PNPM_BROKEN_LOCKFILE` 报错。这属于构建基础设施层面的修正，虽然不涉及用户可见功能，但直接恢复了前端 CI/CD 的可靠性。

此外有 5 条 PR 处于待合并状态，围绕两大方向：安全加固（#3322、#3323、#3324，阻断 SSRF）与功能增强（#3327，Telegram 表格渲染）。如果这批 PR 获得合并，将同时拉高项目安全基线并补足消息格式渲染能力，是本周最值得关注的代码合入批次。

## 社区热点

- [#3203 [CLOSED] [stale] [BUG] Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203) — 评论区有 8 条讨论、2 个 👍，是今日最热条目。尽管该 Issue 因 stale 被系统关闭，但讨论热度不减。用户核心诉求是：Matrix `/sync` 长轮询在断网或服务器重启后永久静默死亡，且因主进程存活，systemd 的 `Restart=on-failure` 无法兜底，运维上极难感知。用户期待内置心跳检测或自动重连机制。

- [#3287 [OPEN] [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287) — 4 条评论，讨论 IRCv3 下长消息被客户端按 512 字节强制切分的问题。社区希望 PicoClaw 能将拆分后的多个片段识别为同一条完整消息，而不是当作独立消息处理。这反映出自托管聊天网关类用户对 IRC 协议细节的较高要求。

## Bug 与稳定性

按严重程度从高到低排列：

1. **跨渠道 SSRF 风险（高危 · 已有修复 PR）** — [#3322](https://github.com/sipeed/picoclaw/pull/3322) 指出 QQ、Telegram、Discord、LINE、Slack 等渠道的入站附件下载仅依赖 `utils.DownloadFile` 而未开启 `BlockPrivateTargets`；[#3324](https://github.com/sipeed/picoclaw/pull/3324) 和 [#3323](https://github.com/sipeed/picoclaw/pull/3323) 分别暴露了 WeChat 与 WeCom 在媒体下载中使用普通 `http.Client`，允许重定向到回环/私网地址。三个 PR 都已给出修复方案，建议尽快 review 合入。

2. **Matrix sync 静默死亡（中高危 · 无修复 PR）** — [#3203](https://github.com/sipeed/picoclaw/issues/3203) 属于稳定性缺陷：断线后无重连、无日志报警、systemd 加固失效。由于 Issue 已被 stale 标记关闭，技术上仍是开放状态，需维护者重新评估并安排修复。

## 功能请求与路线图信号

- **Telegram 原生表格渲染**：Issue [#3325](https://github.com/sipeed/picoclaw/issues/3325)（创建于 08-09，零评论但立即被实现）对应 PR [#3327](https://github.com/sipeed/picoclaw/pull/3327) 已提交。PR 能识别 GFM 表格和安全的 HTML `<table>` 块，并通过 Bot API 富文本消息呈现。该组合大概率进入下一版本。

- **IRC 长消息语义化**：Issue [#3287](https://github.com/sipeed/picoclaw/issues/3287) 尚无对应 PR，但已有 4 条讨论。若要支持 IRCv3 消息拼接/截断语义，可能需要协议层改动，预计排期靠后。

- **DeltaChat 模块重构**：PR [#3222](https://github.com/sipeed/picoclaw/pull/3222)（deltachat 实现清理，-200LOC）待合并超过一个月，属于内部架构收敛，非用户功能，但能降低长期维护成本。是否进入下版本取决于维护者优先级。

- **安全加固即路线图**：三个 SSRF 加固 PR 同日出炉，说明社区已开始系统性审计各 IM 渠道的媒体下载链。预期后续版本会在 release notes 中集中提及安全修复。

## 用户反馈摘要

- **Matrix 用户运维痛点**：从 #3203 评论可见，用户（weissfl）采用 systemd 管理 PicoClaw，并依赖默认的 `Restart=on-failure` 做守护；但“进程存活但逻辑线程死亡”的场景让这套守护策略完全失效，用户只能手动发现并干预。对机器人网关类项目而言，“静默死掉”比“崩溃退出”更让用户不安。

- **IRC 深度玩家期望**：在 #3287 中，用户强调“PicoClaw 应将 IRCv3 长消息视为单一连贯消息”。这类用户通常将 PicoClaw 接入自家 IRC bouncer 或频道，对消息完整性和顺序敏感。当前按行/字节硬切的处理方式破坏了对话上下文。

- **Telegram 表格需求即时响应**：Issue #3325 提交当天即有 PR #3327 跟进，社区对“问题提出后迅速得到实现”的节奏持正向反馈。

## 待处理积压

- [#3222 [OPEN] refactor(deltachat)](https://github.com/sipeed/picoclaw/pull/3222) — 自 07-03 创建，待合并已超 5 周。重构内容清晰（-200LOC、删除 legacy 分支、文档同步），属于低风险高价值的清理工作，建议维护者尽快明确是否合入或提出修改意见。

- [#3287 [OPEN] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287) — 创建于 07-22，距今近 3 周，4 条评论仍无 PR。若本期无排期，建议维护者回复用户大致计划，避免社区期待落空。

- [#3203 [CLOSED] Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203) — 虽被 stale 关闭，但问题性质为“服务静默不可用”，影响面大。建议维护者重新打开该 Issue，关联为 P2 级 Bug 并纳入迭代计划，或至少在文档 Known Issues 中明示。

---

*本日报数据采集自 2026-08-09 至 2026-08-10 期间的 GitHub issue/PR 动态，仅反映项目公开活动。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 2026-08-10

> 数据来源：github.com/nanocoai/nanoclaw（原 qwibitai/nanoclaw）· 统计窗口：2026-08-09 至 2026-08-10

---

## 1. 今日速览

过去 24 小时 NanoClaw 进入**高提交、低合并**的密集开发期：共 1 条新 Issue、16 条 PR 更新（全部为 OPEN 状态，无合并/关闭），无新版本发布。社区侧由 `zvi-fried` 驱动的大规模宿主重构/文档系列占提交近半数，核心团队则聚焦容器安全攻坚（critical 级 tar CVE 修复 + Docker Hub 发布流水线），同时新 Issue #3217 暴露出 `install_packages` 缺少 Python/pip 通道这一阻碍**加固镜像采纳**的关键缺口。整体社区参与度高、提交活跃，但合入门径拥堵——零合并意味着 PR Review 等待时间可能成为当前瓶颈，值得维护者关注。

---

## 2. 版本发布

过去 24 小时未检测到新 Release。但核心团队 PR #3208（Docker Hub 发布 workflow + CVE 门槛）与 #3207（tar 漏洞升级）暗示下一版本将重点完善**预构建镜像的发布与安全合规**，建议关注后续版本对该能力的正式打包。

---

## 3. 项目进展

当日**无 PR 被合并或关闭**。但 16 条待合并 PR 清晰勾勒出项目在以下方向的推进意图：

| 方向 | 代表 PR | 状态/价值 |
|---|---|---|
| **安全基础设施** | [#3208 feat(ci): 发布 agent 镜像至 Docker Hub 并增设 CVE 门槛](https://github.com/nanocoai/nanoclaw/pull/3208) | core-team 主导，为 linux/amd64 + arm64 发布双架构镜像，并把 CVE 卡点内嵌到 hardened-pin 验证流程，是镜像分发合规化的关键一步 |
| **漏洞修复** | [#3207 fix(container): 升级 pnpm/npm 越过可修复的 critical tar CVE](https://github.com/nanocoai/nanoclaw/pull/3207) | 修复 GHSA-23hp-3jrh-7fpw（`tar` < 7.5.19，critical），base image 自带旧版无法靠刷新清除，需主动升级工具链 |
| **宿主架构重构** | `zvi-fried` 系列：[#3214 统一模块生命周期钩子](https://github.com/nanocoai/nanoclaw/pull/3214)、[#3213 注册 question renderers](https://github.com/nanocoai/nanoclaw/pull/3213)、[#3212 模块迁移注册表](https://github.com/nanocoai/nanoclaw/pull/3212)、[#3186 为 skill 拥有的能力添加宿主接缝](https://github.com/nanocoai/nanoclaw/pull/3186) | 系统性解耦宿主与模块/通道依赖，为 skill 体系扩展奠定架构基础 |
| **CLI 能力** | [#3218 feat(cli): 从 stdin 接收有界 JSON](https://github.com/nanocoai/nanoclaw/pull/3218) | 为 ncl 客户端新增 `--stdin-json` 模式，不改动既有请求帧/分发/授权体系即可结构化传参 |
| **隐私/安全修复** | [#3215 fix(permissions): 脱敏 DM 解析日志](https://github.com/nanocoai/nanoclaw/pull/3215) | 避免私信内容明文落入日志 |

整体而言，项目在**容器安全、宿主可扩展性、CLI 可用性**三条线同步蓄力，一旦批量合并将显著提升加固镜像的运维能力和多通道接入的扩展性。

---

## 4. 社区热点

**最热 Issue：[#3217 install_packages 无 pip 通道，阻塞 Python 依赖型安装对加固镜像的采纳](https://github.com/nanocoai/nanoclaw/issues/3217)**

- 作者 `stumpjumper`，创建当日 0 评论/0 点赞，但其已同步提交 docs PR [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) 为现有限制打补丁说明，说明当事人既报问题也着手缓解。
- **背后诉求**：`container_configs` 仅识别 `packages_apt` 与 `packages_npm`，Python `pip` 依赖无处安放。对依赖 pip 安装工具的智能体而言，走**派生镜像（derived-image）路径**无法落地，生产环境因而不得不在「安全基线」与「运行依赖」之间二选一。该诉求直击容器化 AI Agent 落地时的普遍痛点——**预构建安全镜像的软件包覆盖率**。

**值得关注的 PR 集群：**

- `zvi-fried` 单日/隔日提交 6 个 PR（[#3211](https://github.com/nanocoai/nanoclaw/pull/3211)~[#3218](https://github.com/nanocoai/nanoclaw/pull/3218) 系列），覆盖 docs/refactor/fix 多类型，集中式的宿主与通道重构意图明显，建议维护者统一评估其设计一致性。
- Dial 通道双 PR（[#3041 适配器](https://github.com/nanocoai/nanoclaw/pull/3041) + [#3050 安装向导集成](https://github.com/nanocoai/nanoclaw/pull/3050)）在搁置近一个月后**昨日重新被更新**，可能意味着作者正在回应 review 意见，值得跟进。

---

## 5. Bug 与稳定性

按严重程度排列：

**🔴 Critical（安全漏洞）**

- **tar 可修复 critical CVE（GHSA-23hp-3jrh-7fpw）**：grype 在 agent 镜像中检出两处漏洞实例。
  - 影响：base image（node:22-slim）自带 npm 10.9.8 内置 `tar 7.5.11`；pnpm 10.33.0 内置 `tar 7.5.12`，均低于修复版本 7.5.19。
  - 状态：已有 fix PR [#3207](https://github.com/nanocoai/nanoclaw/pull/3207)（core-team，仅靠刷新 base image 无法清除，需显式升级 npm/pnpm 工具链）。

**🟠 中（功能损坏）**

- **Signal 附件投递死路径**：Signal 适配器将图片附件的 `/workspace/extra/signal-attachments/<id>` 路径直接拼入消息文本，但该路径**未挂载进 agent 容器**，Read 工具永远打不开文件；非图片/音频附件（PDF、文本等）同样受影响。
  - 状态：两个修复 PR 并存——[#3142（7/27 创建，ira-at-work）](https://github.com/nanocoai/nanoclaw/pull/3142) 与 [#2529（5/18 创建，brentkearney，关闭 #2528）](https://github.com/nanocoai/nanoclaw/pull/2529)。两者思路不同，需尽快决策合并方向，避免重复劳动。

**🟡 低（隐私 / 体验）**

- **DM 解析日志明文泄露**：私信解析过程未脱敏，敏感内容可能进入日志。已有 fix PR [#3215](https://github.com/nanocoai/nanoclaw/pull/3215)。
- **Slack 粘贴表格丢失**：用户从表格粘贴内容时数据未被完整呈现给 agent。已有 fix PR [#3209](https://github.com/nanocoai/nanoclaw/pull/3209)。

---

## 6. 功能请求与路线图信号

| 需求信号 | 来源 | 预判 |
|---|---|---|
| **Python/pip 包安装通道** | Issue [#3217](https://github.com/nanocoai/nanoclaw/issues/3217)；docs PR [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) 先记录限制 | 社区直接请求，且与加固镜像主线强相关，**大概率进入 next iteration**。Docs PR 先行、功能 PR 随后是典型路径 |
| **CLI 结构化 stdin 输入** | PR [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | 开发者工具链友好性增强，不破坏现有协议，合并成本低 |
| **Dial 通道（SMS + AI 语音）** | PR [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) + [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 昨日重新活跃，若 review 通过可能随下一版本落地，扩展多模态通道矩阵 |
| **Docker Hub 镜像自动发布 + CVE 门槛** | PR [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) | 路线图级基础设施动作，标志项目从 GitHub Registry 走向公共镜像分发，为更大规模用户采纳铺路 |

---

## 7. 用户反馈摘要

- **核心痛点（来自 #3217）**：`install_packages` 被文档描述为「自定义 Dockerfile 编辑的替代方案」，但实际仅覆盖 apt/npm。对 Python 依赖型智能体，**加固预构建镜像（hardened prebuilt image）无法直接采用**，用户被迫回到自定义 Dockerfile 的老路——既放弃安全加固收益，又增加维护成本。这是一种「文档承诺 vs 实际能力」的落差，容易侵蚀用户对加固镜像体系的信任。
- **使用模式观察**：用户对 NanoClaw 通道矩阵的期望已从消息平台延伸到 **AI 语音通话（Dial）**，且 SMS+语音的组合暗示 AI Agent 向真实世界双向交互（收发短信/接打电话）的场景正在被认真探索。
- **开发者体验**：多个 PR 聚焦「附件/表格等富内容正确送达 agent」，反映实际使用中用户在 IM 场景高频粘贴结构化内容，任何内容丢失都会直接损害 agent 回答质量。

---

## 8. 待处理积压

以下 PR/Issue 长期未闭合，提请维护者关注：

| 编号 | 创建时间 | 积压时长 | 说明 |
|---|---|---|---|
| [#2529 fix(signal): 转发入站附件到 agent 而非丢弃](https://github.com/nanocoai/nanoclaw/pull/2529) | 2026-05-18 | **~3 个月** | 最早期的附件修复 PR，关闭 #2528；与 #3142 功能重叠，需尽快二选一或合并方案 |
| [#3041 feat(channels): Dial 通道适配器](https://github.com/nanocoai/nanoclaw/pull/3041) | 2026-07-14 | ~4 周 | 大功能型 PR，昨日刚更新，建议安排专项 review |
| [#3050 feat(setup): Dial 加入通道选择器](https://github.com/nanocoai/nanoclaw/pull/3050) | 2026-07-14 | ~4 周 | 依赖 #3041 的配套 PR，需联动评估 |
| [#3142 fix(signal): 通过 mounted inbox 转发图片/文件附件](https://github.com/nanocoai/nanoclaw/pull/3142) | 2026-07-27 | ~2 周 | 与 #2529 解决同一问题，需明确竞合关系 |
| [#3186 refactor: 为 skill 自有能力添加宿主接缝](https://github.com/nanocoai/nanoclaw/pull/3186) | 2026-08-04 | 6 天 | 大型重构，与 #3211~#3214 系列存在关联，建议统筹设计后再合并 |

**特别提醒**：#2529 已积压近 3 个月，期间社区又出现了解决同类问题的 #3142，说明该 Bug 对实际用户有真实影响。若 #2529 因方向问题无法推进，应尽快关闭并引导至 #3142，避免贡献者重复做功。

---

**日报小结**：NanoClaw 当日状态为**「提交繁荣、合并停滞」**——安全与架构相关的 PR 质量较高、价值明确，但 16:0 的合并比令人担忧。建议维护者优先处理三件事：① 合并 #3207 解除 critical CVE；② 决策 #2529/#3142 的 Signal 附件修复归属；③ 对 `zvi-fried` 的宿主重构系列给出初步设计反馈，避免大 PR 长期悬挂导致后续冲突成本上升。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-10

## 今日速览

过去 24 小时项目活跃度处于**高位**：共 22 条 Issue 更新（新开/活跃 15 条，关闭 7 条），32 条 PR 更新（待合并 24 条，合并/关闭 8 条），无新版本发布。核心动态集中在 **tool-search 增强**（新 Issue #7405 配套 3 个 PR）、**Responses API 高严重度 Bug**（#7400，影响 1.1.0 stable 与 rc.1）、以及 **outbound 发送路径 TOCTOU 竞态修复**（#7395）。Bug 类 Issue 以 bug_bash QA 结果为主，其中新增的 #7400 为最严重的稳定性问题；功能开发侧多个大体积 PR 正在推进 v1.2.0 路线。

---

## 项目进展

> 今日无新版本发布。以下为已合并/关闭的 PR 及对应功能推进。

**已合并/关闭 PR（8 条）中较重要的：**

- **技能存储修复合入** — [PR #7171](https://github.com/nearai/ironclaw/pull/7171)（CLOSED）：实现每个技能挂载点一个 DB 树，并让技能自身的命令可运行（关闭 #7168）。解决了"安装技能后永久消失，Settings → Skills 不可见且无法激活"的严重缺陷，是 #6941（v1.2.0 技能项）的一部分。
- **依赖批量更新合入** — [PR #7387](https://github.com/nearai/ironclaw/pull/7387)（CLOSED）：everything-else 组 12 项 Rust 依赖升级；[PR #7022](https://github.com/nearai/ironclaw/pull/7022)（CLOSED）：actions 组 2 项升级（setup-node 4.0.2 → 7.0.0 等）。

**今日关闭的 7 条 Issue 涵盖的修复进展：**

- Slack 读取能力缺失导致的 Reborn routine 失败（#5522）已关闭
- CoinGecko 工具安装后不可用 + runner 心跳错误（#7292）已关闭
- 多工具失败后的 generic "invalid result" 误报（#5552）已关闭
- 聊天创建延迟随历史增长问题（#5509）已关闭
- 无法删除旧 routines（#5510）已关闭
- Qwen3.6 模型思考链暴露 + 卡死（#4341）、镜像用户消息（#4344）已关闭

**整体判断**：技能管理、Slack 集成、模型输出渲染等历史积压 Bug 在本阶段集中收敛，项目正向 v1.2.0（tool disclosure 收尾 + 技能重构）稳步推进。

---

## 社区热点

| 条目 | 类型 | 评论数 | 热度分析 |
|---|---|---|---|
| [#5522 Reborn routine 缺 Slack 读取能力致失败](https://github.com/nearai/ironclaw/issues/5522) | Issue（已关闭） | 4 | 24h 内评论最多的条目，QA 环境实测暴露的 Slack 能力缺失问题，涉及 `capability_info` 重试死循环，已关闭但讨论热度高 |
| [#7405 改进 deferred tool discovery](https://github.com/nearai/ironclaw/issues/7405) | Issue（增强） | 2 | 今日新建即获关注，配套 #7409/#7410 两个 PR 同步开工，社区对 tool-search 返回完整签名与大规模目录预览需求明确 |
| [#7407 BatchPolicy::Parallel 并发执行](https://github.com/nearai/ironclaw/issues/7407) | Issue（增强） | 2 | 指出生产环境 capability 批处理未真正并发，与 agent loop 策略不一致，属于性能优化诉求 |
| [#7400 stream+tools 致 zombie thread](https://github.com/nearai/ironclaw/issues/7400) | Issue（高严重 Bug） | 2 | 100% 复现的 Responses API 严重缺陷，影响 1.1.0 stable，社区关注度高 |

**热点诉求**：社区当前最关心两件事——① tool-search 的扩展性与完整签名返回（#7405 系）；② 流式响应 + tools 组合下的可靠性（#7400）。

---

## Bug 与稳定性

### 🔴 高严重度（新增）

- **[Bug: `stream: true` + `tools[]` 导致 mid-stream 失败并遗留永久不可删 "zombie" thread](https://github.com/nearai/ironclaw/issues/7400)** — 影响 1.1.0-rc.1 和 1.1.0 stable，100% 复现，Responses API 表面，严重性 high。**尚无对应 fix PR**，建议优先响应。

### 🟠 中严重度（活跃未修复）

- **[刷新聊天导致运行历史与 Activity 时间线部分消失](https://github.com/nearai/ironclaw/issues/7349)** — bug_bash_P2，需要确认是持久化问题还是前端渲染丢失。
- **[活动工具调用与进度消息顺序错乱](https://github.com/nearai/ironclaw/issues/7348)** — 多工具长任务执行时间线混乱，影响用户对 agent 行为的理解。
- **[Agent 报告 61 个 automations 而 UI 只显示 50](https://github.com/nearai/ironclaw/issues/7345)** — 可能是 agent 幻觉或 UI/后端计数不一致。
- **[Emoji 短代码以纯文本显示](https://github.com/nearai/ironclaw/issues/7346)** — `:wave:`、`:smile:` 等不再被渲染为 emoji，回归问题。
- **[Slack 反复重连后认证流程进入坏状态](https://github.com/nearai/ironclaw/issues/5882)** — Web UI 永远 "Waiting for Slack..."，唯一恢复路径是重装扩展，已开放一个月，**无有效修复**。
- **[Routines 可创建/修改其他 routines，存在自复制风险](https://github.com/nearai/ironclaw/issues/6479)** — 无 guardrail 阻止 routine-inception，可能导致无限调度循环。
- **[简单 email-to-sheet 流程触发 124 次工具调用](https://github.com/nearai/ironclaw/issues/6046)** — 工具执行效率问题，agent 过度分析无关内容。
- **[Revoked GitHub token 产生误导性错误](https://github.com/nearai/ironclaw/issues/5878)** — 错误信息不指向重新认证，排查困难。
- **[Automation 发送中间进度消息到 Slack 而非最终结果](https://github.com/nearai/ironclaw/issues/5551)** — 内部执行步骤被直接作为输出投递。

### 🟢 已修复/关闭

- #5522 Slack 读取能力缺失、#7292 工具安装后心跳错误、#5552 多工具失败误报、#5509 聊天延迟、#5510 无法删除旧 routines、#4341 思考链暴露、#4344 镜像消息 — 均已关闭。

**稳定性判断**：今日新增 1 个高严重度 API 缺陷（#7400），P2 级 QA Bug 中 Slack 集成（#5882）、自动化投递（#5551）、认证错误提示（#5878）三类问题持续积压。相关修复 PR 方面，[#7395](https://github.com/nearai/ironclaw/pull/7395) 正在修复 outbound 发送路径的 TOCTOU 竞态（XL 体积），[#7341](https://github.com/nearai/ironclaw/pull/7341) 修复 WebUI attachment 读取回归。

---

## 功能请求与路线图信号

| 信号 | 来源 | 判断 |
|---|---|---|
| **Deferred tool discovery 完整签名 + 命名空间感知预览** | [#7405](https://github.com/nearai/ironclaw/issues/7405) + [PR #7409](https://github.com/nearai/ironclaw/pull/7409)（baseline 测试）+ [PR #7410](https://github.com/nearai/ironclaw/pull/7410)（完整签名）+ [PR #7411](https://github.com/nearai/ironclaw/pull/7411)（swappable provider） | 已进入密集实施阶段，4 个 PR 在途，预计进入 v1.2.0 |
| **BatchPolicy::Parallel 实际并发执行** | [#7407](https://github.com/nearai/ironclaw/issues/7407) | 新提交的性能增强，暂无关联 PR |
| **Replace first-party coding tools with pinned omp tool surface** | [#7392](https://github.com/nearai/ironclaw/issues/7392) | 新 epic，方向性实验，处于规划期 |
| **Browser push notifications + PWA** | [PR #7398](https://github.com/nearai/ironclaw/pull/7398) | 实现中，使 Web 成为与 Slack/Telegram 同级的自动化通知渠道 |
| **Slack/Telegram 通用渐进式预览** | [PR #7396](https://github.com/nearai/ironclaw/pull/7396) | 实现中，与 #5551（进度消息误投递）问题形成呼应 |
| **Stress coverage 扩展至 built-in 与 durable write 路径** | [#7360](https://github.com/nearai/ironclaw/issues/7360) | 质量基础设施增强，与夜间压力测试相关 |
| **Tool disclosure follow-up epic（v1.2.0）** | [#7166](https://github.com/nearai/ironclaw/issues/7166) | v1.2.0 干线 epic，持续推进中 |

**路线图评估**：v1.2.0 的核心方向逐渐清晰——**tool-search 与 tool disclosure 的深度重构**（#7405 + #7166）、**通知渠道扩展**（#7396 + #7398）、**技能系统收尾**（#7171 后续）。#7407 的并发执行优化可能作为性能增强项并入同一版本。

---

## 用户反馈摘要

以下洞察提炼自今日活跃 Issue 描述与评论：

- **Slack 集成是最大痛点聚集地**：#5522 暴露 Reborn 例程无法读取 Slack DM；#5882 显示 Slack 重连后认证流程彻底卡死；#5551 反映自动化运行时把中间进度消息误发到 Slack 频道。三个独立问题指向 Slack 扩展的认证、消息读取、输出投递三条链路均不稳定。
- **工具安装 ≠ 工具可用**：#7292 中 CoinGecko 工具安装成功但实际调用即失败并伴随 heartbeat 报错，用户对"装了不能用"的体感很差。
- **UI 一致性与可信任度问题**：#7345 中 agent 声称 61 个 automations 但 UI 只显示 50，用户怀疑 agent 在幻觉；#7349 刷新页面即丢失历史记录，用户对聊天记录的持久性缺乏信心。
- **执行透明度不足**：#7348 时间线错乱和 #5552 的 generic "invalid result" 都反映了同一诉求——用户需要清晰的工具执行过程与失败归因，而非笼统错误或乱序展示。
- **效率问题影响实际工作流**：#6046 中一个简单 email-to-sheet 任务就消耗 124 次工具调用，说明 agent 的工具选择策略仍有较大优化空间。
- **认证失败的错误引导性差**：#5878 中 GitHub token 被吊销后系统报"tool input could not be encoded"而非引导重新认证，用户认为此类误导性错误严重拖慢排障。

---

## 待处理积压

以下条目长期未获得有效响应或修复推进，提醒维护者重点关注：

| 条目 | 创建时间 | 积压天数 | 状态 |
|---|---|---|---|
| [PR #5101 ci: reuse cargo-component installer in live canary](https://github.com/nearai/ironclaw/pull/5101) | 2026-06-20 | 51 天 | OPEN，待 review，CI 基础设施改进 |
| [Issue #5882 Slack 反复重连后认证流程卡死](https://github.com/nearai/ironclaw/issues/5882) | 2026-07-09 | 32 天 | OPEN，bug_bash_P2，无修复 PR |
| [Issue #5878 Revoked GitHub token 误导性错误](https://github.com/nearai/ironclaw/issues/5878) | 2026-07-09 | 32 天 | OPEN，bug_bash_P2，无修复 PR |
| [Issue #6046 简单 email-to-sheet 流程 124 次工具调用](https://github.com/nearai/ironclaw/issues/6046) | 2026-07-13 | 28 天 | OPEN，bug_bash_P2，无修复 PR |
| [Issue #6479 Routines 自复制风险](https://github.com/nearai/ironclaw/issues/6479) | 2026-07-22 | 19 天 | OPEN，bug_bash_P2，安全相关，无修复 PR |
| [PR #7076 Install the packages the catalog already publishes](https://github.com/nearai/ironclaw/pull/7076) | 2026-08-03 | 7 天 | OPEN，已完成 rebase，待 review |

> 注：#5882、#5878、#6046 均来自 bug_bash 且 P2 严重度，已积压一个月左右，建议在 v1.2.0 规划中明确修复排期。#6479 因涉及自动化自我复制风险，建议优先评估安全影响。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-10

## 今日速览

过去 24 小时项目活跃度处于低位：新增/活跃 Issue 3 条，已关闭 Issue 为 0，PR 提交与合并为 0，亦无新版本发布。社区声量集中在两条长期未决（stale）的 Issue 上（#1187、#2132），说明模型适配与跨模型协作的诉求长期未能得到有效回应。新出现的 #2453 报告了一个影响面较广的自定义模型切换误判 Bug，应优先排查。整体来看，项目处于社区反馈持续涌入、但代码合并节奏放缓的阶段，健康度中等，维护响应需加快。

## 版本发布

过去 24 小时无新版本发布。

## 项目进展

今日无合并或关闭的 PR，代码层面没有可见的推进。唯一明显的“进展”是三条既有/新增 Issue 在 8 月 9 日获得更新，说明社区讨论仍在继续，但尚未转化为代码变更。其中值得注意的信号是 #1187 在 stale 状态下再次被更新，提示维护者需尽快给出回应或将需求纳入路线图，否则存在需求流失风险。

## 社区热点

### 🔥 最热讨论：#1187 上下文窗口与输出 Token 设置需求
- **Issue**: [netease-youdao/LobsterAI Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187)
- **状态**: OPEN / stale
- **评论**: 2 | 👍: 1
- **诉求分析**: 用户在 deepseek 模型上遇到 `Context overflow` 错误，核心痛点是“上下文窗口大小设置”与“输出 Token 设置”不能在模型 API 选项中自定义，导致模型实际可用上下文与配置不匹配。该 Issue 自 4 月提出，至今未关闭，属于功能/配置灵活性问题，但已产生实际使用阻碍。

### 新 Bug 引发讨论：#2453 自定义模型切换被误判为不许可
- **Issue**: [netease-youdao/LobsterAI Issue #2453](https://github.com/netease-youdao/LobsterAI/issues/2453)
- **状态**: OPEN（新建于 2026-08-09）
- **评论**: 1
- **诉求分析**: 用户自定义模型时只要模型名形如 `custom_1/openai/gpt-oss-20b:free`，系统就按照 `provider/model` 格式解析，将 provider 误判为 `openai`，导致模型被判定为不许可。此现象在 OpenRouter 免费模型和 NVIDIA 模型上均有出现，说明这是通配解析逻辑缺陷，而非单一模型问题。评论虽少，但覆盖面广，是当天最值得关注的 Bug 报告。

## Bug 与稳定性

### 🔴 高：#2453 自定义模型被误判为不许可
- **链接**: [Issue #2453](https://github.com/netease-youdao/LobsterAI/issues/2453)
- **严重程度**: 高 —— 直接阻断用户使用自定义模型（尤其是 OpenRouter 与 NVIDIA 免费模型），影响核心切换模型体验。
- **状态**: 无关联 fix PR，需定位模型 provider 解析逻辑并修复。

### 🟡 中：#1187 模型上下文窗口与输出 Token 设置不兼容
- **链接**: [Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187)
- **严重程度**: 中 —— 触发 `Context overflow` 错误，使得会话被迫中断，需要 `/reset` 或手动换模型，影响连续对话体验。
- **状态**: 无关联 fix PR；用户已给出建议（增加上下文窗口大小和输出 Token 设置项），可作为配置增强方向。

### 🟡 中：#2132 跨模型子任务调用存在会话丢失
- **链接**: [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)
- **严重程度**: 中 —— 子任务调用（`call_function_gblu0nmqpcej_1`）不在 `sessions_list` 或 `subagents` 中，说明跨模型子任务协作机制存在链路追踪缺失，可能导致主任务无法感知子任务状态。
- **状态**: 无关联 fix PR；为复杂架构问题，建议排期深入定位。

## 功能请求与路线图信号

### 1. 上下文窗口与输出 Token 可配置
- **链接**: [Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187)
- 用户明确建议在“设置模型 API 的选项”中增加上下文窗口大小设置和输出 Token 设置。这属于模型适配层的基础能力增强，适配面广（deepseek、OpenRouter 等均会受益），合理推测可能被纳入下一版本的“模型高级设置”功能模块。

### 2. 跨模型子任务主动通知机制
- **链接**: [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)
- 用户提出两个优化思路：
  1. 借鉴同模型子任务完成后主任务第一时间知晓的机制；
  2. 子任务完成或遇到卡点时，主动向主任务发送通知。
- 这指向“多智能体协作”场景下的任务生命周期管理，是 Agent 方向的重要路线图信号，值得产品团队评估是否纳入近期迭代。

## 用户反馈摘要

- **模型适配的挫败感**（来自 #2453）：用户对“切换自定义模型被拒”的反馈非常直接，认为系统“误判”逻辑打扰了工作流——同一个线程内切换模型会被阻断，而新开线程则正常，说明错误提示与模型实际状态不一致，体验割裂感强。
- **大模型上下文限制的实际阻碍**（来自 #1187）：用户在使用 deepseek 时遭遇上下文溢出，错误提示虽然给出了 `/reset` 等临时解决方案，但用户真正想要的是能够主动配置上下文窗口和输出 Token，以便在不同模型之间灵活切换，避免强制重置会话。
- **对跨模型协作机制的期待**（来自 #2132）：用户提出了一套具体的设计方案（同模型机制借鉴 + 子任务主动通知），显示其已对内部架构有一定理解，属于典型的高级用户，其诉求代表了对 Agent 编排能力的深度需求。

## 待处理积压

### ⚠️ #1187 上下文窗口设置建议（stale 标记）
- **链接**: [Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187)
- 创建于 2026-04-01，更新于 2026-08-09，已持续活跃 4 个月以上，被标记 stale 但仍有用户互动。配置类功能需求实现成本低、用户声量大，建议维护者优先评估。

### ⚠️ #2132 跨模型子任务调用问题（stale 标记）
- **链接**: [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)
- 创建于 2026-06-09，更新于 2026-08-09，已有用户提供定位思路与修复建议。涉及 Agent 核心协作链路，属于长期技术债，建议纳入专项排期，防止问题在更多模型组合中扩大。

---

*日报生成时间：2026-08-10｜数据来源：netease-youdao/LobsterAI GitHub 仓库*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-10


## 1. 今日速览

过去 24 小时，Moltis 项目无新版本发布，活跃度中等偏稳定：新增/活跃 Bug Issue 2 条，待合并 PR 1 条，无已合并/关闭 PR。当前社区反馈集中于 **沙盒容器状态检测** 与 **Vault 恢复短语处理** 两大方向，前者影响 Apple Container 1.x 用户的日常使用体验，后者已有明确修复 PR 提交。整体来看，项目处于“修复驱动”的稳定迭代阶段，维护者响应及时，但新功能信号偏弱。

- 活跃度评估：⭐⭐⭐☆☆（3/5）— 无发布、无合入，但 2 条新 Bug 和 1 条修复 PR 形成闭环，社区仍保持有效反馈。


## 2. 版本发布

**无**。过去 24 小时无新 Release。


## 3. 项目进展

今日 **无已合并/关闭的 PR**，但有一条待合并修复 PR，值得关注：

- **[#1186 [OPEN] fix(vault): normalize recovery phrase before hashing**](https://github.com/moltis-org/moltis/pull/1186) — 作者: pxmpsdev，创建/更新于 2026-08-09
  - 修复内容：`derive_recovery_kek` 在派生 KEK 前对恢复短语进行规范化处理（去除横线、转大写），使 Vault 解封操作已支持小写/带横线的输入（对应 `recovery_key_case_insensitive` 测试）；但 **存储的哈希值此前基于原始未经规范化的短语计算**，导致“输入可解封但哈希校验不一致”的潜在问题。此 PR 将存储端哈希逻辑与校验端对齐。
  - 意义：该项修复消除了 Vault 恢复流程中一个隐蔽的一致性问题，直接影响用户数据可恢复性，属于中高价值修复。


## 4. 社区热点

今日无高讨论量 Issue/PR（所有条目评论数为 0），但以下两个 Bug 构成了当前的社区关注焦点：

- **[#1187 [Bug]: Heartbeat settings UI silently resets fields not represented by the form**](https://github.com/moltis-org/moltis/issues/1187) — 作者: IlyaBizyaev，创建/更新于 2026-08-09
  - 诉求分析：用户对 UI 表单未覆盖的 Heartbeat 配置项被“静默重置”感到困惑，隐含需求是：**UI 应完整展示或至少明确提示未映射的配置字段**，避免设置被无感知覆盖。

- **[#1185 [Bug]: Apple Container 1.x sandbox starts but Moltis treats it as not running**](https://github.com/moltis-org/moltis/issues/1185) — 作者: mikz，更新于 2026-08-09
  - 诉求分析：沙盒进程已启动但 Moltis 判定为未运行，直接影响用户对容器状态的感知与控制。背后诉求是**运行状态检测的准确性**，建议维护者排查进程探测机制（如 PID 文件、端口监听或 API 探活）在 Apple Container 1.x 下的兼容性。


## 5. Bug 与稳定性

今日共报告 2 条 Bug，暂无对应的已提交 fix PR，按严重程度排列如下：

| 严重程度 | Issue | 描述 | 对应 Fix PR |
|---|---|---|---|
| 🔴 高 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x 沙盒实际已启动，但 Moltis 误判为“未运行”，影响用户对容器生命周期的判断与操作 | 无 |
| 🟠 中 | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat 设置 UI 会静默重置表单未覆盖的字段，可能导致用户配置丢失而不自知 | 无 |

- [ ] 两条 Bug 均发生于“最新版本”，且报告者已确认搜索无重复，建议维护者优先为 #1185 添加 `bug` 标签或指派排查。


## 6. 功能请求与路线图信号

今日无明确的新功能请求，但从 Bug 与 PR 中可提取以下隐性路线图信号：

- **Vault 恢复短语的容错性增强**（来自 [#1186](https://github.com/moltis-org/moltis/pull/1186)）：对短语进行规范化处理，意味着产品团队在**降低用户恢复门槛**的方向上持续优化。若此 PR 合入，后续版本可能进一步支持更多输入格式（如空格分隔、全小写等）。
- **配置 UI 与底层配置模型的映射完整性**（来自 [#1187](https://github.com/moltis-org/moltis/issues/1187)）：该 Bug 暴露了 UI 与配置结构之间的信息差，短期是缺陷，中期可能推动“UI 配置全字段可视化”或“未映射字段警告机制”的改进。
- 综合判断：下一版本大概率不会加入全新功能，而是以修复稳定性、收敛用户反馈为主。


## 7. 用户反馈摘要

当前 Issues 评论数为 0（活跃讨论不足），但可从 Issue 描述中提炼关键反馈：

- **#1187 反馈要点**：用户期望 UI 操作具有“所见即所得”的确定性。当表单未覆盖某些配置项时，用户默认这些项不会被修改，但实际被重置，这会造成信任感下降。
- **#1185 反馈要点**：用户强调“使用最新版本”且已搜索现有问题，说明问题具有客观性与可复现性，而非误报。沙盒状态误判会让用户对 Moltis 的自动管理能力产生疑虑。
- 整体满意度倾向：暂无明确“满意”类反馈，但用户愿意提交高质量 Bug 报告（附预检清单），说明社区对项目仍有较高参与意愿。


## 8. 待处理积压

今日无长期未响应（>7天）的积压项。但以下两条新 Issue 需要维护者尽快响应，避免进入积压状态：

- **[#1185 Apple Container 1.x 沙盒状态误判](https://github.com/moltis-org/moltis/issues/1185)** — 创建于 08-08，已过去 2 天，影响明确，建议分配模块负责人确认。
- **[#1187 Heartbeat 设置 UI 静默重置](https://github.com/moltis-org/moltis/issues/1187)** — 创建于 08-09，涉及配置安全，建议快速确认是否与已知配置持久化逻辑相关。

另有一项待合并 PR：

- **[#1186 Vault 恢复短语规范化修复](https://github.com/moltis-org/moltis/pull/1186)** — 已待合并 1 天，建议维护者尽快 review 并合入，以消除 Vault 哈希不一致风险。

---

*本日报由 AI 基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 — 2026-08-10

> 数据来源：GitHub (agentscope-ai/QwenPaw) | 统计周期：过去 24 小时


## 今日速览

过去 24 小时社区活跃度极高：**18 条 Issue 更新**（新开/活跃 11，关闭 7）与 **27 条 PR 更新**（待合并 26，合并/关闭 1）同步攀升，呈明显的“问题密集上报 + 修复快速跟进”态势。暂无新版本发布（当前版本线为 v2.0.1 / v2.1.0b2）。值得关注的是，**5 条涉及同一前端渲染缺陷的重复 Issue（#6848–#6851）均被迅速关闭**，说明维护者已定位并处理该问题；同时，**4 个 first-time-contributor 提交的 PR（#6842、#6843、#6854 等）** 表明社区贡献通道畅通、新面孔参与度高。整体项目健康度良好，但 PR 合并速度（24h 内仅 1 条合并/关闭）可能成为后续瓶颈。

## 项目进展

今日**合并/关闭 PR 仅 1 条**，但已关闭的 7 条 Issue 中有多条对应修复 PR 正在排队，项目核心功能与稳定性正稳步推进。

### ✅ 已合并/关闭

| PR | 内容 | 状态 |
|---|---|---|
| [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) | **新增 DeepSeek V4 上下文窗口目录**：为 `deepseek-v4-flash` / `deepseek-v4-pro` 配置 1M token 窗口，修复此前被错误截断为 131K、导致上下文压缩过早触发的问题 | 已关闭 |

### 🔄 已有关联 Issue 的修复 PR

以下 PR 虽尚未合并，但直接对应今日活跃的 Bug/Feature Issue，修复路径已清晰：

- [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) — 修复 [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) 对话助手消息完成时间显示异常（保留持久化消息的 `finished_at`，历史重构时不再用创建时间覆盖）
- [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) — 修复 [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) Gemini 工具调用因 `$schema` 字段未被 Google SDK 接受而报 “Model unknown”
- [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) — 实现 [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) 审批卡片增加 AI 用途的一句话描述（first-time-contributor）
- [#6818](https://github.com/agentscope-ai/QwenPaw/pull/6818) — 修复摘要继承 provider 级 `reasoning` 设置以及中断流误处理（关联 Issue [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811)）
- [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) — 修复 `consume_model_response()` 对 AgentScope `ChatResponse`（dict 子类）迭代探测抛 `KeyError`（关联 Issue [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813)）

### 🚧 值得关注的大功能 PR（待合并）

- [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) — **会话 Fork**：右键会话快照全部上下文到新会话，作为检查点式备份（关联 Issue [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560)）
- [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — **ReMe 记忆检索 Reranker 支持**（后端）：过采样 + 外部 reranker 重排，提升记忆召回质量
- [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) — 将上下文注入角色从 `system` 改为 `user`，规避 AgentScope 入站消息校验拒绝 system 消息的问题（修复 Issue [#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358)）
- [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) — 内置 **Volcengine Agent Plan** 与 **Xiaomi MiMo V2.5** provider
- [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) — 在 Console 内置工具页展示完整文档与参数，减少用户跳出

## 社区热点

### 🔥 最高热度 Issue（按评论数）

| Issue | 标题 | 评论 | 热度分析 |
|---|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 🐾 Help Wanted: Open Tasks — Come Contribute! | 66 | 长期置顶的社区贡献任务清单（P0–P2 分级），持续吸引新贡献者，今日多个 PR 即来自该清单 |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 希望 Web 控制台适配移动端 | 5 | 移动端操控需求呼声高，用户明确希望在手机/平板上管理 Agent |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 对话中助手消息结束时间显示异常 | 4 | 用户直观感知到耗时显示与实际不符，说明前端时间语义混乱，影响体验判断 |
| [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | [Question] 无法连接自定义的 ascend-vllm 模型 | 4 | 1.1.7 版本可用、后续版本回归，用户困惑且已有明确报错（openai.APIConnectionError），已关闭 |

### 📈 趋势解读

1. **“时间错乱”类问题引发共鸣**：#6826 关于助手完成时间显示异常获得 4 条评论，且已有 PR #6845 修复——说明修复响应速度较快，这类可用性细节对用户体验影响大。
2. **移动端适配是明确缺口**：#6281 虽然评论数不算最高，但作为长期开放的功能请求（7 月 20 日创建），始终未获得官方回应，用户需求持续累积。
3. **first-time-contributor 集中涌现**：今日有 4+ 个新贡献者 PR（#6842、#6843、#6845、#6854），且多直接命中用户痛点（审批描述、SSE 实时流、时间显示），说明 issue 驱动的贡献机制运转良好。

## Bug 与稳定性

按严重程度排序（🔴=高，🟠=中，🟡=较低）。

### 🔴 高严重度

| Issue | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | **Gemini API 工具调用全部失败**：Gemini provider 发送的 JSON Schema 携带 `$schema` 字段，Google SDK 拒绝导致 “Model 'unknown' execution failed” | OPEN | ✅ [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | **MCP 工具参数类型强制转换**：形似数字的字符串（如 `"0"`）被以数字格式传参，导致 API 调用失败（如 `apiKey`、`assetInfo` 字段） | OPEN | ❌ 暂无 |
| [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) | **Windows 上无法保存任何模型配置**：qwenpaw-creator 插件每次保存报 “Internal Server Error” | OPEN | ❌ 暂无（有 AI 辅助分析提示，待维护者确认） |

### 🟠 中严重度

| Issue | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手实际思考 2 分钟，页面显示仅几秒，时间语义混乱 | OPEN | ✅ [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) |
| [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | `prompts.py` 称定期 “dream” 会自动同步到 `MEMORY.md`，实际从未实现，可能误导 agent 行为 | OPEN | ❌ 暂无 |
| [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Auto-Dream 单个集成单元失败（LLM 返回空 schema）即标记整个任务为 error，缺重试与容错 | OPEN | ❌ 暂无（建议性质） |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | 执行任务时被杀毒软件拦截甚至强制关停进程（附截图） | OPEN | ❌ 暂无（环境/签名相关，需排查） |

### 🟡 较低严重度

| Issue | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| [#6848](https://github.com/agentscope-ai/QwenPaw/issues/6848) [#6849](https://github.com/agentscope-ai/QwenPaw/issues/6849) [#6850](https://github.com/agentscope-ai/QwenPaw/issues/6850) [#6851](https://github.com/agentscope-ai/QwenPaw/issues/6851) [#6852](https://github.com/agentscope-ai/QwenPaw/issues/6852) | **前端渲染器将长多行工具输出折叠成不可读块**（5 条重复 Issue，v2.1.0b2 + Windows 11） | 4 条 CLOSED，1 条 OPEN | ❌ 未公开对应 PR，但维护者已关闭重复项，说明已认识到问题 |
| [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | 自定义 ascend-vllm 连接失败（1.1.7 后回归，报 APIConnectionError） | CLOSED | — |

### 📊 Bug 趋势小结

- **修复响应良好**：高严重度 #6812、中严重度 #6826 均已有对应 PR；重复上报长输出渲染问题已被快速关闭，说明维护者正在处理。
- **积压风险点**：MCP 数字字符串参数类型（#6839）、Windows 模型配置保存（#6806）暂无修复 PR，且涉及插件与核心 API 兼容，建议优先排查。

## 功能请求与路线图信号

### 🔮 明确有实现路径的请求

| Issue | 需求 | 对应 PR | 纳入可能性 |
|---|---|---|---|
| [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | AI 提交审批时附上一句话用途描述，便于用户快速决策 | ✅ [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | 高（PR 已提交且为 first-time-contributor 友好型改动） |
| [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | Auto-Dream 单单元失败重试 + 容错，避免整体标记 error | ❌ 暂无 | 中（符合稳定性方向，但需设计） |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Web 控制台适配移动端 | ❌ 暂无 | 中（存在明确用户场景，但工作量大） |

### 🗺️ 路线图信号（来自 Issue #6840）

用户发现 v2.1.0b2 已内置 **ReMe Light**（0.4.1.4）作为记忆后端，并询问 **ReMe4 完整路线图**（Auto-Link、三模态搜索、4 类摘要权重）的时间线。官方尚未回复，建议维护者发布一份简短路线图说明，消除社区疑虑。

### 📌 待合并 PR 中体现的功能方向

- **会话管理增强**：会话 Fork（#6704）、隐藏 Agent（#6842）、会话身份死锁与早期保存修复（#6750）
- **实时性优化**：纯 ASGI 中间件替代 `BaseHTTPMiddleware` 实现 SSE 实时流（#6843）
- **安全与网络**：免认证主机允许列表支持 CIDR（#6259）、OneBot 远程媒体处理（#6715）
- **可定制化**：主题/皮肤模块草稿（#6312，来自 #2291 Task 1）
- **模型生态**：Volcengine Agent Plan + MiMo V2.5（#6515）

## 用户反馈摘要

### 👍 满意 / 正面

- **社区协作氛围好**：Help Wanted 清单（#2291）持续产出新贡献者，多位用户通过认领任务提交了 PR。
- **问题关闭效率**：前端长输出渲染问题（#6848–#6851）提交后快速被维护者确认关闭，用户反馈“至少知道已被看到”。

### 👎 痛点 / 不满意

| 反馈来源 | 核心痛点 | 情绪 |
|---|---|---|
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 工具传参时字符串被强制转成数字，导致“只要参数像数字就调用失败”，API 密钥等场景直接不可用 | 困惑 + 不满 |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | “同样的任务和模型，Qwenpaw 会被杀软打死，WorkBuddy 不会”——用户对比竞品表达失望 | 不满 + 对比 |
| [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) | Windows 上完全无法保存模型配置，每次 Internal Server Error，工作流受阻 | 沮丧 |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | “实际思考 2 分钟，页面显示几秒”——时间显示失真，用户对真实耗时产生误判 | 困惑 |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | “Web 控制台适配移动端，方便在移动端操作”——缺少移动端支持，场景受限 | 期待 |

### 💬 典型用户原声

> “1.1.7 的版本还可以连接，后来的版本均无法连接，在模型配置界面全部测试通过，但 qwenpaw 对话时总提示连接模型错误。” — [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584)

> “Qwenpaw 在执行任务的时候，经常会被杀软拦截，甚至强制关停 Qwenpaw 进程” — [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)

## 待处理积压

### ⚠️ 长期未响应的 Issue（提醒维护者关注）

| Issue | 创建时间 | 沉默时长 | 建议 |
|---|---|---|---|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) Web 控制台移动端适配 | 2026-07-20 | 约 3 周 | 社区呼声明显且长期无响应，建议至少给出 Phase 计划或标记 `future` |
| [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) ReMe4 路线图询问 | 2026-08-09 | 1 天 | 官方尚未回复，建议尽早回应以防用户流失 |
| [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) Windows 模型配置保存失败 | 2026-08-07 | 3 天 | 高严重度且用户阻塞，建议分配专人排查 |

### 📥 长期未合并的 PR（超过 2 周）

| PR | 创建时间 | 主题 | 备注 |
|---|---|---|---|
| [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) | 2026-07-19 | 免认证主机允许列表支持 CIDR | first-time-contributor，等待 review |
| [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) | 2026-07-21 | 主题/皮肤模块草稿 | Draft 状态，等维护者方向确认 |
| [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) | 2026-07-22 | Console 内置工具文档展示 | 功能完整，等待 review |
| [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) | 2026-07-22 | 上下文注入角色 system→user | 修复 Issue #6358，建议优先 |

### 📊 综合健康度评估

| 维度 | 评级 | 说明 |
|---|---|---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 18 Issue + 27 PR，多维度同步更新 |
| 维护响应速度 | ⭐⭐⭐⭐ | 新 Bug 大多 1–2 天内有关联 PR/关闭动作 |
| 合并效率 | ⭐⭐⭐ | 待合并 PR 26 条 vs 已合并 1 条，大量 PR 等待 review |
| 首次贡献者友好度 | ⭐⭐⭐⭐⭐ | 多个 first-time-contributor PR 被正常受理，无阻塞 |
| 稳定风险 | ⭐⭐⭐ | MCP 参数类型、Windows 配置保存、杀软拦截等真实场景缺陷待解 |

> **给维护者的建议**：① 优先处理 #6839（MCP 参数类型）与 #6806（Windows 配置保存）两个高严重 Bug；② 对超过 2 周的 PR（#6259、#6325、#6360）进行批量 review；③ 在 #6840 下给出 ReMe4 路线图的时间点，稳定社区预期。

---
*本日报由 AI 分析师基于 GitHub 数据自动生成，所有链接均指向原始 Issue/PR。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-10

> 数据窗口：过去 24 小时（2026-08-09 → 2026-08-10）

---

## 1. 今日速览

ZeroClaw 过去 24 小时保持高活跃度：50 条 Issue 更新（38 条活跃、12 条关闭）、50 条 PR 更新，但仅 1 条 PR 被合并/关闭，**审查与合并通道出现明显积压**。安全与治理类议题占据主导——一条 P0 级 Webhook 认证缺失问题（#9565）仍在处理中，多条安全加固 PR（如 #9866、#9636）等待合并。社区讨论集中在 RFC 流程效率（#6808、#9496）、模型能力配置统一（#7100）以及安全默认值（#9397）等方向。整体来看，项目问题发现与讨论活跃，但合入速度未能跟上贡献节奏，维护者队列压力较大。

---

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

> 注：Issue #9690 提及 v0.8.4 发布流程中容器构建失败的历史问题，但该 Issue 已于今日关闭，说明相关阻塞已解除，v0.8.4 的发布准备工作可能仍在进行中。

---

## 3. 项目进展

今日 PR 合并/关闭仅 1 条（未在展示列表中），**没有大型 feature 合入 master**。但从 Issue 关闭情况可观察项目推进方向：

**已关闭的重要 Issue（12 条中值得注意的）：**

- **#8054** ［P1 · 系统提示工具可用性匹配］已关闭。该 Issue 追踪系统提示词告知推理模型"无工具可用"而实际请求携带工具的核心 bug，修复已覆盖直接运行时路径（PR #8053），关闭表明跨入口的同类问题已达成一致处理方案。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8054

- **#9192** ［P1 · shared_budget TOCTOU 与 SopEngine 互斥锁 panic］已关闭。两个运行时不健壮点（AtomicUsize 包装、互斥锁下 unwrap panic）已被修复。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9192

- **#8560** ［P1 · browser_open 无限挂起］已关闭，S1 级工作流阻塞问题已解决。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8560

- **#9690** ［P1 · 容器构建 rustc 低于 MSRV］已关闭，all-features 容器变体恢复可构建。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9690

- **#8731** ［P1 · MCP 僵尸进程积累］已关闭，stdio MCP 子进程回收问题已处理。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8731

- **#9834** ［P1 · 运行时测试间歇失败］已关闭，进程全局状态污染源已定位并修复。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9834

- **#9860** ［P1 · Web UI 冻结］以 duplicate 关闭，说明与已有问题合并追踪。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9860

此外，**#8681**（目标模式实施拆分 tracker）与 **#9656**（Telegram 输入指示器）也已关闭，分别标记实现栈拆分完成与 UI 状态反馈问题解决。

**等待合并的关键 PR（合并后将产生实质进展）：**

- **#9866** fix(runtime): harden verifiable intent boundaries —— 直接针对 #9328（P1 凭据链验证缺失），停止序列化 JWK 私密标量、防止 u32 回绕、拒绝空货币等。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9866

- **#9636** fix(config): Windows null device（nul）安全重定向 —— 解决 Windows 平台 `2>nul` 被误拦截的 P1 兼容性问题。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9636

- **#9424** fix(runtime): reject semantic-empty terminal completions —— 拒绝空白/仅思考的终端补全，并纳入 Reliable 重试机制。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9424

- **#9571** chore(channels): remove the WATI channel —— 移除存在安全风险的 WATI 通道模块，与 #9565（P0 Webhook 未认证）部分关联。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9571

**结论**：项目今日在问题收敛上进展明显（多个 P1 关闭），但 feature 合入几乎停滞，49 条 PR 待合并说明项目当前处于"收集与审查"阶段而非"输出"阶段。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 核心议题 |
|------|----------|--------|----------|
| 1 | [#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 22 | 治理与工作流自动化 |
| 2 | [#7100 RFC: Per-model capability & context-window config](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 12 | 模型能力配置一致性 |
| 3 | [#9397 RFC: Treat empty WhatsApp Web allowed_groups as permit-none](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | 11 | 安全默认配置 |
| 4 | [#8692 Tracker: Maintainer decision queue for RFCs](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 11 | 维护者决策效率 |
| 5 | [#8054 System prompt tool-availability mismatch](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | 10（已关闭） | 推理模型工具可用性 |

**热点分析：**

- **#6808** 以 22 条评论持续领跑，自 5 月 20 日创建以来已更新至 Rev. 24，横跨 0.8.0-beta-1 至 0.8.3 三个版本。社区对引入工作泳道、看板自动化与标签清理的诉求强烈，本质是对**项目治理效率的集体焦虑**——Issue/PR 积压、标签混乱、决策延迟已成为贡献者的共同痛点。
- **#7100** 与 **#9397** 分别从功能一致性与安全默认值切入。前者反映 Provider 家族默认值误报视觉支持、上下文窗口回退 32K 等真实配置陷阱；后者则指向"空列表 = 全放行"的危险默认行为。
- **#8692**（维护者决策队列 tracker）与 **#6808** 互相呼应，社区在自发建立机制以缓解维护者瓶颈——这本身就是一个值得关注的信号：**贡献者正在替维护者设计流程**。

---

## 5. Bug 与稳定性

按严重程度排列（P0 > P1 > P2）：

### 🔴 P0 级

- **[#9565] 网关 Webhook 处理器未 fail closed（WhatsApp Cloud、Linq、WATI）** ｜ S0 数据丢失/安全风险
  三个入站 Webhook 处理器在未认证调用者的情况下将攻击者可控消息分派给 Agent，已通过源码检查验证。状态为 in-progress，PR #9571 将移除 WATI 通道作为局部缓解，但 WhatsApp Cloud 与 Linq 仍需修复。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9565

### 🟠 P1 级

- **[#9328] verifiable-intent 约束评估未验证凭证链** ｜ 已被接受（accepted）
  `evaluate_constraints` 直接信任调用方提供的 fulfillment 对象，与 VI 参考实现的标准做法相悖。已有修复 PR **#9866** 待合并。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9328

- **[#8642] MCP/tool-schema 克隆导致 Agent 循环中 RSS 无界增长** ｜ 被接受
  从 #5542（WSL2 OOM）拆分出的独立内存增长路径，尚未见修复 PR。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8642

- **[#9085] pgvector 启用时嵌套运行时 panic（gateway/agent 启动）** ｜ 被接受
  在 Tokio 运行时上下文中构造 PostgresMemory 会触发 panic，阻塞工作流。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9085

- **[#9284] 配置刷新可覆盖并发写入** ｜ 被接受，S2 降级
  `flush_config` 的三步操作（读锁 clone → await save → 写锁更新）存在竞态窗口。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9284

- **[#9779] sops_dir 文档默认值未被守护进程采纳，SOP 静默不加载** ｜ 被接受
  两条守护进程启动路径均以 `is_some()` 作为 SOP 子系统开关，依赖默认值的用户会无感知地丢失 SOP 功能。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9779

- **[#9198] Discord 输入指示器在仪表盘重载后卡死** ｜ 被接受，S3 次要
  与 #9656 不同，此问题发生在 daemon reload 后，需重启频道恢复。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9198

### 🟡 P2 级

- **[#9486] 高熵检测器误伤 Solana 钱包地址，且 `high_entropy_tokens=false` 在通道路径上无效** ｜ 被接受
  Telegram 通道上 Agent 无法输出合法的 Solana 主网地址，全部被替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9486

---

## 6. 功能请求与路线图信号

### 高概率进入下一版本（已有实现 PR）

| 功能 | PR | 说明 |
|------|-----|------|
| **多模型 Provider 档案** | [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | `[providers.models.<family>.<alias>.models.<model_alias>]` 子表，一套凭证 + 端点承载多个模型。对应 #7100 的配置统一诉求，体量大（XL）但方向明确 |
| **PowerShell 原生 Shell 支持** | [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | Windows 上 `runtime.shell=powershell` 走 `-NoProfile -NonInteractive -Command`，保留 cmd.exe 默认路径 |
| **Langfuse 可观测性后端** | [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) | 基于 OTel SDK 导出追踪到 Langfuse 云端/自托管，满足可观测性需求 |
| **MCP 资源 blob 物化与预算预检** | [#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) | `tools/call` 返回的 `type:resource` blob 写入 Agent 工作区，并做聚合预算预检 |
| **Publisher/API 密钥来源抽象** | [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) | 提取 `KeySource` trait 与 `FileKeySource` 后端，为主密钥管理提供扩展点 |

### 路线图信号（RFC / Tracker）

- **#6808** 工作泳道与看板自动化 RFC 已进入"ratification deferred / rollout in progress"阶段，0.8.x 系列将持续推进。
- **#9496** RFC 流程精简提案（缩短讨论期、放宽全票一致要求、自动化投票）——若通过，将显著提升 2026 下半年治理效率。
- **#9825** 公共区块链标识符例外规则 RFC——直接回应 #9486 的误伤问题，定义发布安全的白名单机制。
- **#7897** 安全策略与通道配置热更新（免全量 daemon reload）RFC，若落地将改善运维体验。
- **#8519** cargo-audit 忽略列表与 wasmtime-wasi CVE 修复追踪，已被接受，状态为高风险待修复。

---

## 7. 用户反馈摘要

从今日活跃 Issue 的评论中提炼的真实用户声音：

- **"配置生效但误伤"**：#9486 中，用户在使用 Solana MCP 服务器时，合法钱包地址被全部打码，且尝试通过 `high_entropy_tokens=false` 关闭检测在通道路径上无效。评论者指出这是一个"检测器按设计工作，但设计本身不适用于公共区块链地址"的典型误报案例。这提示：**安全功能需要内置领域例外机制，而非仅提供全局开关**。

- **"状态不可见导致信任受损"**：#9656 中，用户在审批卡片等待期间看到持续运行的"typing"指示器，无法区分"Agent 正在工作"与"Agent 被阻塞等待审批"。这类 UI 状态反馈问题直接降低用户对系统响应速度的信任。

- **"文档与实现不一致的挫败感"**：#9779 中，用户按文档配置 `sops_dir`（使用默认值），SOP 引擎静默不加载，无错误、无警告、无日志。评论者明确指出"文档默认值未被守护进程执行"是文档-实现漂移的典型案例。

- **"Web UI 稳定性敏感"**：#9860 中，用户创建文件触发 filesystem channel 事件后，Web UI 的 API 端点全部失去响应。虽然该问题以 duplicate 关闭，但 S2 降级级别的体验问题值得持续关注。

- **"治理流程自主优化"**：#6808、#8692 的评论中，社区成员自发提出标签清理、决策队列、看板自动化等方案，显示**核心贡献者对项目流程的参与度极高**，但也隐含对当前维护者响应速度的不满。

---

## 8. 待处理积压

### ⚠️ 需要维护者审查的 PR（needs-maintainer-review）

- **[#9636] fix(config): Windows null device（nul）安全重定向** ｜ P1 · risk:high · size:M
  7 月 1 日创建至今已 10 天，Windows 用户的安全策略兼容性等待确认。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9636

- **[#9196] feat(mcp): materialize resource blob with aggregate budget preflight** ｜ P2 · size:L
  同时标记 needs-author-action，但维护者审查环节尚未完成。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9196

### ⏳ 等待作者响应的高价值 PR（needs-author-action，超期风险）

| PR | 创建时间 | 等待时长 | 内容 |
|-----|----------|----------|------|
| [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) | 07-08 | 33 天 | image_gen 下载 URL SSRF 防护（P1） |
| [#9066](https://github.com/zeroclaw-labs/zeroclaw/pull/9066) | 07-14 | 27 天 | Hindsight 记忆栈 4/7：合并与去重 |
| [#9067](https://github.com/zeroclaw-labs/zeroclaw/pull/9067) | 07-14 | 27 天 | Hindsight 记忆栈 5/7：通过 PATCH 实现遗忘 |
| [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | 07-20 | 21 天 | Windows PowerShell 原生支持（XL） |
| [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) | 07-20 | 21 天 | KeySource trait 提取（XL） |

### 🧊 长期开放、等待决策的 RFC（> 60 天）

- **[#6808] RFC: Work Lanes, Board Automation, and Label Cleanup** ｜ 创建 05-20，84 天
  22 条评论，仍处于"ratification deferred / rollout in progress"，需要明确的时间表。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6808

- **[#6971] RFC: Security posture, credential boundaries, and universal ingress policy** ｜ 创建 05-27，75 天
  10 条评论，安全架构框架类 RFC 长期悬置会推高后续安全类 Issue 的决策成本。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6971

---

> **维护者提醒**：当前 49 条待合并 PR 中，大量集中在 needs-author-action 状态（作者未响应审查意见）。建议在下一个维护者同步会议中：(1) 明确 #9565（P0 Webhook）的修复负责人在 48 小时内出方案；(2) 对等待超过 3 周的 PR 发起作者 ping 或关闭处理；(3) 为 #6808 与 #6971 两个长期 RFC 设定最终裁决日期，避免治理疲劳。

*本日报由 AI 分析师自动生成，数据来源：github.com/zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*