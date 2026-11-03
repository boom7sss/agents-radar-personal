# OpenClaw 生态日报 2026-11-03

> Issues: 391 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-03 17:53 UTC

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

# OpenClaw 项目动态日报 — 2026-11-03

## 1. 今日速览

项目今日保持高位活跃：过去 24 小时 Issues 更新 391 条（新开/活跃 223、关闭 168），PR 更新 500 条（待合并 282、合并/关闭 218），并发布 1 个新版本 v2026.10.10。合并流量与积压基本持平，说明维护带宽已接近饱和——282 条待合并 PR 是当前最需要消化的压力点。稳定性方面，doctor 命令挂起、更新流程失败、会话崩溃后不可用等问题在多个平台（macOS/Linux/Windows）重复出现，且多个 P0/P1 尚无 fix PR。社区讨论集中在崩溃恢复、会话状态持久化与 CLI 后端（claude-cli）的会话复用问题。整体判断：迭代速度快、贡献者基数健康，但稳定性债务与审查积压同步累积。

## 2. 版本发布

**v2026.10.10**（发布说明标题为 "openclaw 2026.10.10"，标注 `openclaw-release-publication:docs-v1`）

- 版本说明提供两种格式（Release notes 与 Changelog），内容一致；本次数据中说明正文被截断，完整内容需查阅 [发布说明](https://docs.openclaw.ai/releas)。
- 仓库累计规模：4,825 commits · 3,028 pull requests · 454 contributors。
- 破坏性变更、迁移注意事项：**本次提供的材料中未涉及**，不做推断。

## 3. 项目进展

今日关闭/合并的条目中，可明确对应修复方向的有：

- [#175027](https://github.com/openclaw/openclaw/issues/175027) [CLOSED, P1] Android 实时 Talk 复用已归档的 backing session，导致 GPT-Live agent 咨询被拒——标签含 `fix-shape-clear`、`queueable-fix`，修复形态已明确。
- [#162768](https://github.com/openclaw/openclaw/issues/162768) [CLOSED, P2] OpenAI Codex 模型发现硬编码 `client_version=0.158.0`，忽略配置的外部 Codex app-server。
- [#158966](https://github.com/openclaw/openclaw/issues/158966) [CLOSED] 浏览器：带凭证的 CDP WebSocket URL 会进入面向模型的标签页结果（潜在凭证泄露面）。
- [#159740](https://github.com/openclaw/openclaw/issues/159740) [CLOSED, P2] Skill collection review 监控在 2026.9.6 仍因 runtime generation 被取代而失败（#133692 残留）。
- PR [#192121](https://github.com/openclaw/openclaw/pull/192121) [CLOSED] 修复会话详情中折叠区块被重新展开的问题。

**整体推进评估**：今日合并的 218 条属于常规修复节奏，未见足以改变产品形态的大型合并；活跃 PR 侧出现了若干有实质用户收益的改动（见下节）。

## 4. 社区热点

按评论数，今日讨论最集中的是稳定性与运维类问题：

- [#159356](https://github.com/openclaw/openclaw/issues/159356)（30 评论，已关闭，P2）llama.cpp manager 报告 ready 但 embedding 子进程已退出，请求返回 HTTP 500。作者后续更新称主机内存从约 4 GB 增至 8 GB 后语义回忆恢复，内存压力是最有支撑的解释。诉求：就绪状态探测与子进程生命周期需要真实绑定，而非乐观上报。
- [#178359](https://github.com/openclaw/openclaw/issues/178359)（24 评论，OPEN，P1）`doctor --fix --non-interactive` 在 repair preparation 阶段无输出挂起 15 分钟以上，从未到达 agent DB 修复步骤（2026.10.3, macOS）。
- [#166634](https://github.com/openclaw/openclaw/issues/166634)（23 评论，OPEN，P0）Gateway 进程非自愿死亡后，后台 agent 准备失败于 `SQLite session reclamation commit checkpoint expired`，agent 永久拒绝 `chat.history`、`chat.metadata` 等请求。
- [#187900](https://github.com/openclaw/openclaw/issues/187900)（20 评论，OPEN，P1）Linux 上所有模式的 `openclaw doctor`（含 `--lint`、PTY、非交互）在标题帧无限挂起（Ubuntu, kernel 6.8.0-147-generic, Node v24.22.2, 2026.10.8）。
- PR [#191669](https://github.com/openclaw/openclaw/pull/191669)（OPEN，P2）observer fallback 模型在主模型超时后应获得剩余时间；已被评为 "ready for maintainer look"。

**背后诉求**：热点几乎全部指向"恢复路径不可靠"——诊断工具自身挂起、崩溃后会话永久不可用、健康检查显示绿色但实际不可执行。用户不要求新功能，而要求故障可诊断、可自愈。

## 5. Bug 与稳定性

**P0 / 崩溃循环或无 fix PR：**
- [#169844](https://github.com/openclaw/openclaw/issues/169844) [OPEN, P0] Windows 上从 Control UI 更新 Gateway 卡在 "Activating"，Scheduled Task 被禁用、Gateway 停止、包未更新。无 fix PR。
- [#166634](https://github.com/openclaw/openclaw/issues/166634) [OPEN, P0] 崩溃恢复后 agent 不可用（session reclamation checkpoint 失败）。标记 `not-repro-on-main`，无 fix PR。

**P1：**
- [#178359](https://github.com/openclaw/openclaw/issues/178359) doctor `--fix` 挂起（macOS）。无 fix PR。
- [#187900](https://github.com/openclaw/openclaw/issues/187900) doctor 全模式挂起（Linux）。无 fix PR。
- [#167557](https://github.com/openclaw/openclaw/issues/167557) 插件数据/设置迁移永不收敛，报 "managed handoff lease database identity changed"。`fix-shape-clear`，有望进入修复队列。
- [#144336](https://github.com/openclaw/openclaw/issues/144336) 延迟配置重载（SIGUSR1）关闭步骤失败："Failed to reset global singleton lifecycle state"。无 fix PR。
- [#186684](https://github.com/openclaw/openclaw/issues/186684) claude-cli 工具列表变更使原生会话失效，历史重播种被拒（auth-unknown），agent 无历史重启。无 fix PR。

**P2 及回归类：**
- [#162585](https://github.com/openclaw/openclaw/issues/162585) [OPEN] Windows 插件 source-capture 暂存把插件自身包重新物化，npm 树线性膨胀（290 MB → 612 MB / 24 分钟），Gateway 永不变健康。
- [#154104](https://github.com/openclaw/openclaw/issues/154104) [OPEN, 回归] 4 个 Matrix E2EE 账号时空闲 Gateway 约 50% CPU、约 52 MB/分钟写入；禁用 Matrix 或回退 2026.7.1 时不复现。
- [#151962](https://github.com/openclaw/openclaw/issues/151962) [OPEN] "幽灵用户消息"：心跳轮询/异步命令完成等内部运行时字符串被当作 user prompt 提交，且未持久化到 transcript_events（13 天约 310k token 的微信桥接会话）。
- [#141172](https://github.com/openclaw/openclaw/issues/141172) [OPEN] 首次 session commit 前死亡的 run 永久泄漏 `agent.run.started`，trajectory flush 外键失败。
- [#112313](https://github.com/openclaw/openclaw/issues/112313) [OPEN] 死信出站队列条目永久不可清除（所有访问器过滤 `status='pending'`，无 CLI/RPC/TTL）。

**已有修复向 PR 的稳定性问题：**
- PR [#191915](https://github.com/openclaw/openclaw/pull/191915) doctor 在原生 child reaping 不可用时未如实报告受监督启动风险。
- PR [#192134](https://github.com/openclaw/openclaw/pull/192134) 使用 exec secret provider 的启动密钥会让 `openclaw update` 在 `candidate-gateway-startup` 阶段失败（标注 security-fix；标注 AI-assisted）。
- PR [#192131](https://github.com/openclaw/openclaw/pull/192131) / [#192132](https://github.com/openclaw/openclaw/pull/192132) CI fixture 使用了非选定 Node 运行时。

## 6. 功能请求与路线图信号

- **Databricks Unity Gateway 作为官方模型提供商** [#155633](https://github.com/openclaw/openclaw/issues/155633)（已关闭，实现 PR #155634）——面向强制模型流量经 Databricks 网关的企业部署，减少手工编写通用 provider 配置。
- **渲染 Markdown 预览用于 Review 文件** [#128090](https://github.com/openclaw/openclaw/issues/128090)（OPEN, P3, 👍4，今日列表中点赞最高）——需产品决策，短期可能性低。
- **Linux aarch64 伴生构建（deb + AppImage）** [#138279](https://github.com/openclaw/openclaw/issues/138279)（已关闭）——Windows 已有 ARM 桌面伴生包，Linux 仍仅 amd64。
- **Swarm `agents.run` 有界启动契约** [#156632](https://github.com/openclaw/openclaw/issues/156632)（已关闭，实现 #155442）与 **自适应 test-time compute** [#158068](https://github.com/openclaw/openclaw/issues/158068)（已关闭）——后者已作为独立后续策略面拆分，不随 #155442 交付。
- **PR 侧潜在纳入项**：[#192075](https://github.com/openclaw/openclaw/pull/192075) Sessions/Cron 首访延迟降低（100 ms RTT 下 Sessions 就绪从 948.35 ms 降至 878.10 ms）；[#192147](https://github.com/openclaw/openclaw/pull/192147) 让 ClawRouter 调用方可显式续写并保留原请求与凭据绑定；[#188229](https://github.com/openclaw/openclaw/pull/188229, P1) 原生 Codex 子任务完成握手识别。

## 7. 用户反馈摘要

- **资源约束下的真实部署**：多份报告来自小型主机（约 4 GB RAM）和长期运行会话（13 天、~310k token），说明 OpenClaw 被用于常驻个人助理形态，而非短会话工具。
- **运维可诊断性是最大不满**：doctor 在 macOS 与 Linux 上分别独立报告挂起，且 `doctor --fix` 挂起使"修复命令本身不可用"，用户失去自救手段。
- **健康状态与实际状态脱节**：多份报告强调 `health` 显示正常但 agent 实际不可执行（#159789 已关闭；#159356 就绪误报）。
- **CLI 后端（claude-cli）体验受损**：会话复用保留已删除的 `--mcp-config` 导致 `mcp__openclaw__*` 工具中途 401（#144797）；工具列表变更导致会话失效无历史重启（#186684）；预压缩 memory flush 在 CLI 后端被显式关闭（#137613）。
- **自学习机制未达预期**：后台经验复盘连续 50 次失败、完成率 0%（#164279，自 2026-09-27 起）。
- **正面信号**：Issue 回复中常见作者自行复现、补充 trace 与版本对比（如 #159356、#141172 的复发核查），反馈质量高，有助于收敛。

## 8. 待处理积压

- [#112313](https://github.com/openclaw/openclaw/issues/112313)（2026-07-21 创建，OPEN，11 评论）出站死信队列条目永久不可清除——积压最久，需产品决策。
- [#128090](https://github.com/openclaw/openclaw/issues/128090)（2026-08-23 创建，OPEN，👍4）Markdown 预览——社区点赞最高但长期无决策。
- [#137613](https://github.com/openclaw/openclaw/issues/137613)（2026-09-03 创建，OPEN）CLI 后端预压缩 memory flush 被关闭，且直接修复会撞上 `compactionCount` 陷阱——需产品决策。
- [#138561](https://github.com/openclaw/openclaw/issues/138561)（2026-09-04 创建，OPEN）`active-memory` 插件升级后停止回忆，info 日志级别无任何信号，等待补充信息。
- [#144336](https://github.com/openclaw/openclaw/issues/144336)（2026-09-10 创建，OPEN，P1）配置重载重启关闭失败，等待 live repro。
- [#186684](https://github.com/openclaw/openclaw/issues/186684)（2026-10-28 创建，P1）需安全审查与 live repro，尚无 fix PR。
- **PR 侧积压**：282 条待合并 PR 为今日最大结构性风险；其中 [#188229](https://github.com/openclaw/openclaw/pull/188229)（P1，platinum hermit，已具备 sufficient proof）已等待维护者关注 4 天。

---

*说明：以上内容仅基于所提供的 GitHub 数据；版本说明正文被截断，未能覆盖完整更新条目。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析（2026-11-03）

## 1. 生态全景

今日生态整体处于**高活跃度但以稳定性收敛为主**的阶段：OpenClaw、ZeroClaw、CoPaw、Hermes Agent 四个项目构成第一梯队，日更新量在 50–500 条之间，但主旋律是"修故障、清积压"而非发布新能力。一个跨项目的共性信号极其突出——**多个项目的诊断/恢复路径本身不可靠**（OpenClaw 的 doctor 挂起、ZeroClaw 的 distroless 部署失败、Hermes 的 "No reply" 黑洞），用户诉求已从"要功能"转向"要可诊断、可自愈、失败可解释"。同时几乎所有头部项目都面临**待合并 PR 积压超过或接近当日合并量**的审查瓶颈（OpenClaw 282 条待合并、Hermes 44 条、ZeroClaw 44 条、CoPaw 27 条），说明贡献者增速已超过维护带宽。第二梯队（NanoClaw、LobsterAI、NanoBot）在单一痛点上做深（多渠道消息可达性、打包/桌面体验、通道稳定性），第三梯队（NullClaw、IronClaw 及三个零活动项目）则几乎静默或仅剩自动化依赖维护。

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PR（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 391 更新（223/168） | 500 更新（282/218） | v2026.10.10 | 高活跃、高积压；稳定性债务累积，审查带宽饱和 |
| **ZeroClaw** | 18（16/2） | 50（44/6） | 无 | 高活跃、收口期（v0.9.0 标记密集）；PR 积压严重，P1 安全项无 fix |
| **CoPaw** | 18（13/5） | 36（27/9） | 无 | 高活跃但审查滞后；2.3.0 beta 回归集中，存 1 项无 fix 的安全缺口 |
| **Hermes Agent** | 50（45/5） | 50（44/6） | 无 | 高活跃；P2 Bug 集中累积，多数无 fix PR |
| **NanoBot** | 7（2/5） | 14（6/8） | 无 | 中活跃、修复效率高；2 条 conflict PR 滞留 |
| **NanoClaw** | 0 | 25（11/14） | 无 | 低互动、高自动化；Issues 通道静默，WhatsApp 媒体问题未闭环 |
| **LobsterAI** | 1 活跃 | 12（3/9） | 无 | 中活跃、修复吞吐高；维护者负载集中（9/12 同作者） |
| **NullClaw** | 0 | 1（1/0） | 无 | 低活跃、平稳；唯一在途 PR 待评审 |
| **IronClaw** | 0 | 4（2/2，全为 dependabot） | 无 | 低频维护；零人类贡献 |
| **PicoClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | 静默 |

## 3. OpenClaw 在生态中的定位

**规模优势是数量级的**：仓库累计 4,825 commits、3,028 PR、454 contributors，单日 Issues 更新量（391）超过其他所有项目之和（约 95 条）。在社区体量上，OpenClaw 是生态的事实参照系——其他项目的多数 bug 类型（会话状态、渠道复用、健康检查误报）都能在 OpenClaw 找到对应条目，说明它承担了"先把坑踩完"的角色。

**技术路线差异**：OpenClaw 是**平台化 + 多后端适配**路线——同时支持原生 agent、claude-cli 等 CLI 后端、Databricks Unity Gateway 等企业 provider，并维护 Gateway/doctor/Scheduled Task 等运维子系统，功能面最宽。这带来一个结构性代价：它的故障面也最宽（Windows 更新卡死、Linux doctor 挂起、macOS doctor 挂起各自独立成 P1/P0）。相比之下 ZeroClaw 更偏 Rust 单体 + 可重放会话事件架构，CoPaw 更偏桌面打包 + 插件/渠道注册表，Hermes 更偏 Bot Mode 多机协作——架构选择更窄，故障面也更收敛。

**相对劣势**：282 条待合并 PR 是全部项目中最大的结构性风险，且 P0（#169844、#166634）均无 fix PR，审查带宽已成规模扩张的瓶颈。但反馈质量高（用户自行复现、补 trace、版本对比），是其社区成熟的正面证据。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **失败路径可诊断性** | OpenClaw、Hermes、CoPaw、NanoBot、ZeroClaw | 静默失效是共同敌人：OpenClaw doctor 自身挂起；Hermes turn 销毁仅显示 "No reply"、Kanban 统一报 "execution unknown"；CoPaw Visual Compact 静默 no-op、provider 静默消失；NanoBot 状态行堆叠失败提示；ZeroClaw 特性被 cfg 静默剔除无告警 |
| **健康状态与真实状态脱节** | OpenClaw、ZeroClaw、NanoBot | OpenClaw llama.cpp "ready" 但子进程已退出；NanoBot WebUI 模型按钮不随 `turn_model_updated` 更新；ZeroClaw `zerocode --agent` 参数被解析却从不生效 |
| **会话生命周期与崩溃恢复** | OpenClaw、ZeroClaw、Hermes、NanoClaw | 会话崩溃后永久不可用（OpenClaw #166634）、断连取消进行中 turn（ZeroClaw #7759）、gateway 每次变更重读全部历史（Hermes #146643）、跨容器文件路径语义不一致（NanoClaw WhatsApp 媒体） |
| **长任务 / 目标持续执行** | NanoBot、ZeroClaw、CoPaw | NanoBot Goal 单次 ReAct 突破 `max_tool_iterations`；CoPaw Jev 完成判定（防"口头承诺却提前结束"）；ZeroClaw turn 与 WebSocket 解耦 |
| **上下文窗口 / 预算管理** | ZeroClaw、LobsterAI、OpenClaw | ZeroClaw 32k 硬编码回退（两处独立报告）；LobsterAI 压缩本身超限致任务中断；OpenClaw CLI 后端预压缩 memory flush 被关闭 |
| **多渠道消息可达性** | NanoClaw、ZeroClaw、CoPaw、NanoBot | 消息必须可靠送达 agent：NanoClaw Discord @mention 丢失 / WhatsApp 媒体读不到；ZeroClaw Telegram caption 丢失、语音无 @ 被丢弃；CoPaw 飞书/QQ 渠道激活失败；NanoBot WhatsApp 405 过期 |
| **凭据/配置隐式覆盖与安全边界** | Hermes、CoPaw、OpenClaw | Hermes `ANTHROPIC_API_KEY` 覆盖 OAuth 凭据、extra_body 跨 fallback 泄漏、memory-context 被当权威输入；CoPaw 出站动作绕过审批审计；OpenClaw CDP 凭证进入模型上下文 |
| **自托管 / 私有化部署** | NanoBot、NanoClaw、ZeroClaw、CoPaw | NanoBot Telegram 自定义 Bot API 地址；NanoClaw Proton Mail 本地 Bridge + 多架构；ZeroClaw distroless/Docker 构建问题；CoPaw Hub Docker 非 root 权限 |

**最强共性信号**：失败可诊断性（7 个方向中最普遍）。用户反复表达的不是"加功能"，而是"故障能定位、能自愈、失败信息能说明真实原因"——健康检查显示绿色但实际不可执行，被视为最伤信任的体验。

## 5. 差异化定位分析

- **OpenClaw**：功能最全的个人 AI 助手平台，面向需要长期常驻、多后端、多 provider 的个人/企业部署者；架构上平台化 + 运维子系统齐备。代价是故障面宽、审查积压重。
- **ZeroClaw**：Rust 实现、面向生产的自主智能体，重心在**可重放会话事件（append-only）**、多通道网关、安全配对；用户群偏向容器化生产部署，正处 v0.9.0 收口期。
- **CoPaw**：**桌面优先 + 插件/渠道生态**，玩家明显集中在 Windows + 中文环境 + 飞书/QQ 渠道 + Creator 插件（TTS/内容创作）；对中文环境适配（GBK、中文路径）是独特关切。
- **Hermes Agent**：**Bot Mode 多机协作 + 团队网关 + 移动端**；用户场景突出多 bot 群聊、Hermes Cloud Telegram 接入、iOS/Android beta 试用，移动端与语音是第一期待。
- **NanoBot**：轻量、修复驱动，通道稳定性（WhatsApp）与 WebUI 体验为主线；创始自 HKUDS，用户对"子代理→真正多智能体"有明确架构期待（#5000，讨论超三个月）。
- **NanoClaw**：**多渠道消息可靠性 + 隐私自托管**（Proton Mail、WhatsApp、Discord）；自动化程度高（bot 镜像刷新），Issues 通道今日静默。
- **LobsterAI**：**打包分发 + 桌面伴侣（macOS orb/工具栏）+ 中文环境**（Windows + 360 安全卫士场景）；当前以技术债收敛和安装体积优化为主。
- **NullClaw / IronClaw**：前者 Zig 实现、探索免密钥搜索 provider；后者 Rust 基础组件（latency harness），当前仅依赖维护。
- **PicoClaw / TinyClaw / Moltis / ZeptoClaw**：今日无信号，定位无法从数据判断。

## 6. 社区热度与成熟度

**第一梯队（快速迭代 + 快速累积债务）**：OpenClaw、ZeroClaw、CoPaw、Hermes Agent。共同特征是日更新 50–500 条、待合并 PR 数十条，功能推进与稳定性债务同步增长。OpenClaw 是"规模最大、债务也最大"的典型；ZeroClaw、CoPaw 同处 v0.9.0 / 2.3.0 的版本收口压力期。

**第二梯队（质量巩固阶段）**：NanoBot、LobsterAI、NanoClaw。日更新有限但方向明确——NanoBot 报告当日即修（4 个 Bug 同日关闭）、LobsterAI 9 条修复型 PR 集中落地（含 42 MB 体积缩减）、NanoClaw 集中关闭重复修复尝试。这一层已从"扩张"转向"收敛与打磨"。

**第三梯队（低活跃 / 静默）**：NullClaw（1 PR 待评审）、IronClaw（仅 dependabot）、PicoClaw / TinyClaw / Moltis / ZeptoClaw（零活动）。需注意 NanoClaw 的 Issues 全天零活动与 IronClaw 的零人类贡献，可能意味着反馈入口迁移或社区冷启动尚未完成。

**成熟度判断**：OpenClaw 社区最成熟（454 contributors、高质量复现反馈），但工程吞吐受审查带宽制约；ZeroClaw、CoPaw、Hermes 处"活跃但收敛不足"的成长中期；NanoBot、LobsterAI 显示良好的响应速度但维护者集中度过高（LobsterAI 12 条 PR 中 9 条同作者）是隐性风险。

## 7. 值得关注的趋势信号

1. **"可诊断性"正成为智能体产品的第一性需求**。跨 5+ 项目的共同诉求表明：失败路径设计（错误分类、状态真实反映、自愈能力）的重要性已与主功能持平。对开发者的直接参考——任何"静默回退/默认值/乐观上报"的设计都会在真实部署中反噬（ZeroClaw 32k 硬编码、OpenClaw 乐观 ready 上报均是教科书案例）。

2. **"常驻个人助理"场景正在压低硬件与稳定性假设**。OpenClaw 出现 4 GB RAM 主机、13 天 / 310k token 长会话的报告，说明用户把智能体当作长期运行的常驻服务而非短会话工具。这要求内存压力、健康探测、会话持久化按"常驻"标准设计。

3. **多智能体/长任务是 B 端与重度用户的下一站，但尚无成熟实现**。NanoBot #5000（子代理仅回传最终结果）、ZeroClaw 会话事件可重放、CoPaw 完成判定、NanoBot Goal 长 ReAct 分别从不同角度逼近，但均无已落地方案——是当前最开放的架构机会点。

4. **自托管、隐私敏感、多架构部署形成稳定细分市场**。NanoClaw 的 Proton Mail（Docker 内源码构建 Bridge、arm64+x86）、NanoBot 的自定义 Telegram API、ZeroClaw 的 distroless 部署，共同指向一批不愿依赖云服务、需要私有端点的用户。容器化路径的验证不足（镜像缺 `sh`、构建全挂）是这一市场的主要摩擦点。

5. **渠道适配是"长尾工程"，但决定真实可用性**。Discord @mention、Telegram caption、WhatsApp 媒体路径、QQ/飞书依赖审计——这些细节单看微小，但都是"消息能否到达 agent"的阻断级问题。多渠道生态的竞争已从"支持多少渠道"转向"每个渠道的边角语义是否可靠"。

6. **审查带宽正成为开源智能体项目的规模天花板**。头部项目待合并 PR 普遍超过当日合并量，贡献者响应速度（同人当日配套 PR）与合并速度明显脱节。对维护者的参考：在功能扩张期就应建立 reviewer 分工（LobsterAI、CoPaw 已出现集中度风险），否则贡献者流失与主干演进放缓会同时发生。

---

*说明：本报告严格基于所提供各项目 2026-11-03 动态，未引入外部事实；PicoClaw、TinyClaw、Moltis、ZeptoClaw 因"过去 24 小时无活动"，不参与差异化定位判断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-03

## 1. 今日速览

今日项目保持较高活跃度：24 小时内 7 条 Issue 更新（2 条新开/活跃、5 条关闭）、14 条 PR 更新（6 条待合并、8 条已合并/关闭），无新版本发布。合并/关闭的主导者是 chengyongru，一日内推动 8 条 PR 落地，集中在 WebUI 体验、Provider 压缩重试与 WhatsApp 通道稳定性三条主线。两个新开的活跃 Issue 分别指向子代理系统向多智能体协作演进（#5000）和 WebUI 模型按钮状态不同步（#6550），前者代表路线图层面的架构诉求。整体看，修复效率高、积压清理明显，但 PR #6497、#6100 带有 `conflict` 标记长期未合，合并冲突积压值得维护者注意。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 8 条 PR 推进情况：

- **#6548 fix(providers)**：修复图片重试绕过 Codex 必需的请求前压缩问题，并保留其他调用上下文字段。直接回应 Issue #6541。
- **#6549 fix(providers)**：压缩重试改为原地更新状态行，避免多次失败在成功提示上方堆叠多条失败通知。
- **#6546 fix(whatsapp)**：区分 native `libmagic` 加载失败与 Python 依赖缺失，改善网关状态与 WebUI 扫码流程中的报错信息。对应 Issue #6543。
- **#6545 fix(whatsapp)**：更新 Neonize 版本约束，解决 WhatsApp 客户端被判为过期（405）以及启动时覆盖手动安装的新版本问题。对应 Issue #6544。
- **#6547 fix(webui)**：Markdown 表格内长行内公式不再溢出并覆盖相邻列，改为按内容自适应列宽。
- **#6552 fix(webui)**：工具目录在设置页导航间缓存，避免每次返回 Tools 页都重新拉取 CLI Apps 与 MCP 目录。
- **#6538 refactor(goal)**：活动 Goal 现在可持续运行一个 ReAct 执行，突破常规 `max_tool_iterations` 限制（关联 NAN-392）。
- **#6536 refactor(sessions)**：归档状态持久化到现有 SQLite 会话库，兼容 JSON 显示偏好与既有 HTTP/WebSocket 载荷，并一次性导入历史归档记录。

整体来看，本日净推进以“稳定性修复 + 交互体验优化”为主，同时开始触及 Goal 长任务执行与会话存储这类结构性重构。四个当日报告的 Bug（#6541、#6543、#6544 相关修复，及 WebUI 压缩状态展示）在报告当日即被关闭，响应速度良好。

## 4. 社区热点

- **[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)**（7 条评论，今日全站讨论最活跃）：提出当前 subagent 更接近后台任务委派，而非真正的多智能体系统——子代理独立执行并只回传最终结果。这是今日唯一持续多轮讨论的议题，反映核心用户对架构演进有明确期待。
- **[Issue #6526](https://github.com/HKUDS/nanobot/issues/6526)**：用户对 4.0 更新表达强烈不满，称 “no earlier messages” 提示阻挡原生滚动、字号与样式异常。虽仅 1 条评论且被标记 stale 后关闭，但情绪表达直接，属于更新体验类负面反馈。
- **[Issue #6514](https://github.com/HKUDS/nanobot/issues/6514)**（2 条评论）：Windows 下重写 `~/.nanobot/run/gateway.clients.json` 间歇性出现 `PermissionError [WinError 5]`，已关闭。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — [Issue #6497](https://github.com/HKUDS/nanobot/pull/6497)（OPEN，`priority: p1`，`conflict`）**：`/status` 在 `AgentLoop.run()` 内联执行，位于会话 worker 异常处理之外，未捕获异常会逃逸并终止消费者。修复 PR 已存在但存在合并冲突，尚未合入。
2. **中 — [Issue #6541](https://github.com/HKUDS/nanobot/issues/6541)（已关闭）**：含图片请求时，必需的 Codex 压缩失败后，图片移除重试会清除原生会话状态并以普通生成继续。已有修复 [PR #6548](https://github.com/HKUDS/nanobot/pull/6548) 合并。
3. **中 — [Issue #6100](https://github.com/HKUDS/nanobot/pull/6100)（OPEN，`regression`，`conflict`）**：provider 返回 `refusal` / `content_filter` 时，Dream 仍推进历史游标并丢弃本批次。回归问题，修复 PR 因冲突滞留。
4. **中 — [Issue #6514](https://github.com/HKUDS/nanobot/issues/6514)（已关闭）**：Windows 网关客户端租约文件重写权限错误。未见对应 fix PR。
5. **中 — [Issue #6550](https://github.com/HKUDS/nanobot/issues/6550)（OPEN，今日新开）**：WebUI 输入框模型按钮显示配置的预设，而非跟随网关 `turn_model_updated` 事件反映实际处理请求的主/回退模型。尚无 fix PR。
6. **中低 — [Issue #6544](https://github.com/HKUDS/nanobot/issues/6544)（已关闭）**：Neonize 版本约束导致 WhatsApp 报客户端过期 405。修复 [PR #6545](https://github.com/HKUDS/nanobot/pull/6545) 已合并。
7. **低 — [Issue #6543](https://github.com/HKUDS/nanobot/issues/6543)（已关闭）**：缺失 native libmagic 被误报为插件 Python 依赖缺失。修复 [PR #6546](https://github.com/HKUDS/nanobot/pull/6546) 已合并。

## 6. 功能请求与路线图信号

- **[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000) 多智能体协作**：增强请求，今日持续讨论中，尚无对应实现 PR。属于方向性提案，短期纳入下一版本的可能性有限，但可能影响后续架构规划。
- **[PR #4919](https://github.com/HKUDS/nanobot/pull/4919) Telegram 自定义 Bot API 地址与额外请求头**（7 月提交，仍 OPEN）：支持自托管 Bot API 服务器或企业网关，实现 Issue #4702。功能完整度较高，具备纳入下一版本的条件。
- **[PR #6014](https://github.com/HKUDS/nanobot/pull/6014) Keenable MCP 预设**（10 月提交，仍 OPEN）：以可选 MCP 预设接入托管端点，仅暴露 `search_web_pages` 与 `fetch_page_content`，无需 API key。属于低风险增量功能。
- **[PR #6538](https://github.com/HKUDS/nanobot/pull/6538) Goal 单次 ReAct 持续运行**：已关闭，关联 NAN-392，显示团队正在推进长任务目标执行的内部路线图。

## 7. 用户反馈摘要

- **更新体验是主要负面来源**：#6526 用户对 4.0 更新的消息提示与样式改动明显不满，认为 “no earlier messages” 破坏了原生滚动，字号样式也不协调。建议在后续版本中审视该提示的交互方式。
- **Windows 平台稳定性**：#6514 反映网关租约文件写入存在平台相关竞态，影响 Windows 用户日常启动。
- **状态可观测性诉求**：从 #6550 与 #6549 可看出，用户关注界面状态是否真实反映当前正在处理请求的模型；压缩重试产生多条失败提示也被视为噪音。
- **通道可用性**：#6543、#6544 集中在 WhatsApp 通道，说明该通道用户基数不小，依赖与报错信息的准确性直接影响接入成功率。
- **自托管/企业场景需求**：#4919 反映部分用户需要在非官方 Telegram API 端点下使用，指向私有化部署场景。

## 8. 待处理积压

- **[PR #4919](https://github.com/HKUDS/nanobot/pull/4919)**：2026-07-14 创建，已近 4 个月未合并，Telegram 自托管 API 支持，可能因审查资源不足滞留。
- **[PR #6100](https://github.com/HKUDS/nanobot/pull/6100)**：2026-10-08 创建，标记 `regression` 且带 `conflict`，涉及 Dream 批次数据丢失，影响数据正确性，建议优先解决冲突。
- **[PR #6497](https://github.com/HKUDS/nanobot/pull/6497)**：2026-10-27 创建，`priority: p1` 且带 `conflict`，内联命令异常可终止消费者，属较高风险问题。
- **[PR #6014](https://github.com/HKUDS/nanobot/pull/6014)**、**[PR #6480](https://github.com/HKUDS/nanobot/pull/6480)**：分别自 10-03、10-26 起处于 OPEN 状态，其中 #6480 为测试稳定性改进（等待 goal-followup worker 完成），改动小、风险低。
- **[Issue #5000](https://github.com/HKUDS/nanobot/issues/5000)**：自 2026-07-20 创建，讨论跨度超过三个月，建议维护者给出明确的路线图表态，避免核心用户预期悬空。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-03

## 1. 今日速览

项目今日维持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 45、关闭 5），PR 更新 50 条（待合并 44、已合并/关闭 6），无新版本发布。关闭/合并的主要是 Bot Mode 与团队网关相关修复，以及一组测试去抖动 PR，说明维护重心正从功能开发转向稳定性收敛。同时，Kanban 调度器与 gateway 会话权威相关的多个 P2 Bug 仍在集中累积，需关注积压风险。移动端 App 相关讨论热度最高，表明用户对官方 iOS 和 Android 端的期待强烈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 6 个 PR，主要推进方向如下：

- **Bot Mode 稳定性**：PR #148418（CLOSED）修复 Bot 群聊无法再容纳来自不同机器的 bot；PR #148436（CLOSED）修复重新打开 Desktop 后 Bots 面板永久显示“Hermes gateway is not connected”。两者直接改善多机 Bot 协作体验。`NousResearch/hermes-agent/pull/148418`、`/pull/148436`
- **团队网关/Telegram 配置对齐**：PR #148393（CLOSED）让 Hermes Cloud Telegram 卡片指向在 Team Gateway 上真正可用的配置路径（托管 Agent 走 Portal 链接，否则用 `/link` 码），并承接 #142601。`/pull/148393`
- **渠道被静默关闭的可解释性**：PR #142601（CLOSED）修复 Team Gateway relay 关闭直连渠道时 dashboard 无任何提示的问题。`/pull/142601`

整体看，今日合并量有限（6 条），但方向集中在用户可感知的 UX 缺陷修复上；同时队列中 44 条待合并 PR 表明代码吞吐压力较大。

## 4. 社区热点

按讨论热度排序：

- **#11911 [Feature] 官方 iOS & Android 移动 App 与语音通话** — 22 条评论、15 👍，为今日互动最高。用户希望与 Hermes 进行实时语音通话，诉求明确且长期存在（创建于 2026-04）。`NousResearch/hermes-agent/issues/11911`
- **#146643 [Bug] Gateway 每次变更都重读全部会话历史** — 15 条评论。数千会话规模下占用 1.5–2.5 核 CPU，`session.resume`、`prompt.submit` 30 秒超时。这是典型的规模化性能痛点。`/issues/146643`
- **#31584 [Bug] 将 memory-context 视为背景上下文而非权威用户消息** — 12 条评论。用户担心记忆内容被当作权威输入，构成潜在威胁面。`/issues/31584`
- **#147556 [Bug] 官方 iOS beta 邀请返回“Beta Not Found”** — 7 条评论、2 👍。官方移动页面的 TestFlight 链接失效，与 #11911 的高期待形成落差。`/issues/147556`

**背后诉求**：移动端与语音交互是第一优先级；大规模会话下的 gateway 性能与 Desktop 超时是第二；记忆机制的安全边界是第三。

## 5. Bug 与稳定性

按严重程度排列（P2 为主）：

| 严重度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| P2 性能 | #146643 | Gateway 全量重读会话历史，CPU 与 Desktop 超时随存量增长 | 未见 |
| P2 稳定性 | #147839 | 单次 20s worker_receipt_timeout 污染存储并摧毁整个 turn，用户仅见“No reply” | 未见 |
| P2 调度 | #147629 / #147409 / #147366 | Kanban 托管 worker 失败统一被报为“execution unknown；review 状态卡片被反复 re-claim；网关关闭消耗失败预算 | 未见 |
| P2 安全/状态 | #31584 | memory-context 被当作权威用户消息 | 未见 |
| P2 配置 | #124289 | 自定义 provider 的 extra_body 在 `/model --provider` 与 fallback 中被丢弃并泄漏到下一 fallback | 未见 |
| P2 回归 | #143215 | profiles.list 返回空白描述，Desktop Bots 页丢失名称/描述/头像（疑为 #140417 修复引入） | 未见 |
| P2 认证 | #140998 | 环境变量 ANTHROPIC_API_KEY 覆盖池选 OAuth 凭据，导致紧循环 400 | 未见 |
| P2 渠道 | #138101 / #141546 | Hermes Cloud Telegram 401 / 连接后 routes=0 | #148393 部分缓解 |
| P2 死锁 | #105405 | `_CONFIG_LOCK` 与 `_SECRET_SOURCE_CACHE_LOCK` 锁序死锁冻结事件循环 | 未见 |

今日关闭的 #141175、#141546、#142406 均为渠道配置与 Desktop MCP 健康巡检相关，属正向修复。但多数 P2 仍缺少对应 fix PR。

## 6. 功能请求与路线图信号

- **官方移动 App 与语音通话（#11911）**：互动最高，但受 #147556（iOS beta 链接失效）与 #147573（Beta 应用将 cron 投递渲染为用户消息）牵连，短期更可能先修 beta 链路而非正式发布。
- **简化版 Agent 侧栏与设置概览（PR #148153 / #148247）**：Desktop 端引入可选“Simplified agent mode”，含嵌套会话与 Agent 设置总览，已进入评审，有望进入下一版本。
- **跨网关 Bot 群聊（PR #148466 / #148422）**：让群聊中的远端网关 bot 无需 Desktop 即可持续运行，Bot Mode 群聊界面向原生聊天靠拢，功能演进信号明确。
- **插件目录更新（PR #148583）**：`klipper-print-watch` 升至 0.2.2，属生态维护性变更。

**判断**：下一版本最可能落地的是 Desktop 简化模式与 Bot Mode 群聊增强；移动 App 更可能停留在 beta 修修补补阶段。

## 7. 用户反馈摘要

- **满意点**：Bot Mode 多机群聊、Dashboard 渠道可见性等 UX 修复被快速跟进（#148418、#148436、#142601），说明维护者对可感知问题响应积极。
- **核心痛点**：① 规模化的会话存储导致 gateway CPU 与 Desktop 超时（#146643）；② 失败路径信息不透明——turn 被销毁只显示“No reply”（#147839），Kanban 失败统一显示“execution unknown”（#147629），用户难以定位真实原因；③ 凭据与配置的隐式覆盖（#140998、#124289）造成难以理解的重复 400。
- **使用场景**：多机、多 bot 群聊协作（#148418、#148466）、Hermes Cloud 上的 Telegram/Team Gateway 接入（#138101、#141546）、移动端 beta 试用（#147556、#147573）。
- **不满意点**：官方移动入口的 TestFlight 链接失效，与高期待形成明显落差；记忆上下文被当作权威输入引发安全顾虑（#31584）。

## 8. 待处理积压

以下 Issue 创建已久、仍为 OPEN，建议维护者优先分诊：

- **#31584**（创建 2026-05-24，12 条评论）— memory-context 权威性问题，涉及安全面，长期未决。`/issues/31584`
- **#89576**（创建 2026-08-19）— Desktop MCP 健康探测打开第二个 HTTP 会话并驱逐活跃会话（Slack MCP）。`/issues/89576`
- **#99760**（创建 2026-08-31）— `gateway_state.json` 残留平台条目导致 Dashboard 幽灵“retrying”状态。`/issues/99760`
- **#105405**（创建 2026-09-07）— 锁序死锁冻结 gateway 事件循环，watchdog exit 75，标有 `needs-repro` 但风险高。`/issues/105405`
- **#124289**（创建 2026-09-26）— 自定义 provider extra_body 丢弃与泄漏，影响模型切换可靠性。`/issues/124289`

**PR 积压**：待合并 44 条，其中 PR #145224（2026-10-26）涉及 Desktop 网关切换时误删排队提示，P3 但影响数据持久性，值得优先评审。`/pull/145224`

---

*注：以上内容均基于所提供的 GitHub 数据，未对未展示的 30 条 Issues 与 35 条 PR 作推断。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-03

> 数据来源：NanoClaw (github.com/qwibitai/nanoclaw) GitHub 公开数据。以下所有条目均基于所提供的数据，未提供评论数/点赞数的条目记为「未披露」。

---

## 1. 今日速览

- 过去 24 小时 **Issues 零更新**（新开/活跃 0，关闭 0），PR 端则出现 **25 条更新**（待合并 11，已合并/关闭 14），活跃度高度集中在 PR 侧。
- 今日关闭的 PR 中，**8 条为 `agent-images` 机器人镜像刷新**（v2026.10.0 的硬化镜像同步），1 条为 Discord @mention 修复，其余为 WhatsApp 媒体路由相关旧 PR 的关闭。
- **零新版本发布**，但镜像刷新 PR 持续滚动，说明基础镜像供应链仍在推进。
- 唯一与「社区讨论」直接相关的信号缺失：所提供数据中所有 PR 的评论数与点赞数均为 `undefined`，**无法判定今日讨论热度**，本期「社区热点」仅按更新量与主题集中度推断。
- 整体健康度评估：**低互动、高自动化**。维护活动以 bots 与少数贡献者为主，Issues 通道今日静默，需关注是否存在用户反馈入口失效或分流到其他渠道的可能（数据不足以确认）。

---

## 2. 版本发布

无（过去 24 小时新版本发布 0 个，Releases 列表为空）。

---

## 3. 项目进展

今日合并/关闭中，按重要性排序：

| PR | 状态 | 内容 | 链接 |
|---|---|---|---|
| #4251 | CLOSED · Fix/Skill | `fix(add-discord)`：`/add-discord` 安装的 adapter 4.41.1 会丢弃所有 @mention 了某人的服务器消息；该 skill 现通过 pnpm patch 应用上游修复 | https://github.com/nanocoai/nanoclaw/pull/4251 |
| #4252 | CLOSED · Fix/Skill | `fix(discord)`：同一问题的网关快照回溯（backport），以 pnpm patch 形式加入回归测试；PR 中标注了合并顺序约束（需先合入上游修复） | https://github.com/nanocoai/nanoclaw/pull/4252 |
| #4250 | CLOSED · bot | agent-images：v2026.10.0 → v2026.10.0-20261103T0246 | https://github.com/nanocoai/nanoclaw/pull/4250 |
| #4246 / #4242 / #4240 / #4237 / #4236 / #4233 | CLOSED · bot | agent-images 镜像刷新（2026-10-26 至 11-01 批次）陆续关闭 | 见各 PR |
| #2778 / #2429 / #1998 | CLOSED · Fix | 三个同主题的 WhatsApp 入站媒体路由 PR 于今日关闭（标记 `triage/needs-author` 等） | https://github.com/nanocoai/nanoclaw/pull/2778 · https://github.com/nanocoai/nanoclaw/pull/2429 · https://github.com/nanocoai/nanoclaw/pull/1998 |

**推进幅度判断**：实质进展集中在 **Discord 频道可用性修复**（消息投递中断属于阻断类缺陷，修复价值高）。WhatsApp 侧今日无合入，而是关闭了三个重复/停滞的修复尝试（#2429、#1998、#2778 均针对"入站媒体写 host 路径导致 agent 容器读不到"），说明该问题仍**未闭环**——同主题仍有 #3113 处于 OPEN。镜像刷新属例行供应链维护，非功能进展。

---

## 4. 社区热点

> 说明：所提供数据中所有条目的评论数与点赞数均为 `undefined`，**无法按真实互动量排序**。以下按「主题集中度 + 跨日期持续更新」推断关注点。

1. **WhatsApp 入站媒体问题（4 个 PR 同题）** — #3113（OPEN，2026-07-21 创建，2026-11-03 更新）、#2778、#2429、#1998（均 CLOSED）。同一 bug 被四位不同作者反复提交，说明痛点真实且修复方案存在分歧（"shared session inbox" / "session attachment pipeline" / "容器可读路径"）。
   https://github.com/nanocoai/nanoclaw/pull/3113
2. **Proton Mail 频道接入（#3726 OPEN + #4218 OPEN）** — 同一贡献者 drsmk238 按 review 意见拆分实现：技能留在 `main`，adapter 移到 `channels` 注册表分支。反映出社区对**邮件类个人助手入口**有明确需求。
   https://github.com/nanocoai/nanoclaw/pull/3726 · https://github.com/nanocoai/nanoclaw/pull/4218
3. **Discord @mention 回归（#4251、#4252）** — 同日提交、同日关闭的一对修复/回溯 PR，属"快速响应型"修复。

**背后诉求**：社区的注意力明确集中在**多渠道消息可达性**——Discord 的 @mention、WhatsApp 的媒体文件、邮件通道的接入，三者共同指向"agent 必须可靠地收到用户发来的任何形态消息"这一核心使用场景。

---

## 5. Bug 与稳定性

按严重程度排列（严重度依据影响面判断，数据未提供官方分级）：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **高（阻断）** | Discord：adapter 4.41.1 下 bot 收不到任何 @mention 了某人的服务器消息，即 @mention 触达完全失效 | 已有修复 | ✅ #4251（skill 侧 patch，#4252 回溯）均已 CLOSED |
| **高（阻断）** | WhatsApp：入站媒体（图片/视频/音频/文档）从未送达 agent——媒体被写到宿主 `data/attachments/` 并标记 `localPath=attachments/<file>`，但 agent 容器无法读取该路径 | **未闭环** | ⚠️ 三个修复尝试已关闭（#2429、#1998、#2778），#3113 仍 OPEN |

**回归风险提示**：Discord 修复以 **pnpm patch + 回溯** 方式落地，依赖 upstream fix 的合并顺序（PR 摘要中明确要求"先合入上游修复"）。此类 patch 在 adapter 升级时存在失效风险，建议关注后续 adapter 版本变更时的回归测试是否覆盖。

---

## 6. 功能请求与路线图信号

| 需求 | 载体 | 状态 | 纳入下一版本的可能性 |
|---|---|---|---|
| **Proton Mail 原生频道**（通过本地 Proton Mail Bridge，Docker 内置源码构建，arm64 + x86） | #3726（skill）+ #4218（adapter） | 均 OPEN，2026-11-03 仍在更新 | **中等偏高**。已通过 review 意见完成职责拆分（skill / adapter 分仓），说明维护者在积极引导而非拒绝；剩 adapter 与测试需跟进 |
| **WhatsApp 入站媒体可靠投递** | #3113 | OPEN，长期挂起 | **中等**。属 bug 修复而非新功能，但唯一存活方案自 7 月创建至今仍未合入 |

> 数据中未提供里程碑、roadmap 或 label 层面的版本规划信息，上述判断仅基于 PR 状态与 review 互动推断。

---

## 7. 用户反馈摘要

> 数据中未包含任何 Issue 正文或 PR 评论内容，以下仅从 PR 摘要中可辨识的使用场景与痛点归纳。

- **真实痛点 1｜"@我的人，bot 收不到"**：Discord 用户在服务器中 @mention 任何人时，整条消息被 adapter 丢弃。这是**群聊场景下的核心可用性问题**，直接影响多人群协作时 agent 的在场性。
- **真实痛点 2｜"发了图，agent 看不见"**：WhatsApp 用户发送媒体后 agent 无法访问。根因是宿主与容器间的**文件路径/挂载语义不一致**，属于自托管架构下的典型坑。
- **使用场景显现**：Proton Mail 适配器需在 Docker 中**源码构建 Bridge** 并同时支持 arm64 与 x86，表明用户群里存在**自托管、隐私敏感、多架构（含 Apple Silicon）** 的个人 AI 助手部署者。
- **满意度信号**：多位独立作者针对同一 WhatsApp 问题提交修复，说明用户愿意贡献；但方案反复被关闭，可能带来挫败感（**无评论数据，无法直接验证**）。

---

## 8. 待处理积压

需维护者关注的长期未闭环项：

1. **#3113 `fix(whatsapp): stage inbound media where the container can read it`** — OPEN 自 2026-07-21，已挂起约 **3.5 个月**，是该 bug 目前唯一存活的修复方案。同期三个同题 PR 已关闭，若此 PR 也不推进，问题将无归宿。
   https://github.com/nanocoai/nanoclaw/pull/3113
2. **#3726 `feat(channels): add native Proton Mail adapter`** — OPEN 自 2026-09-06，近 **2 个月**，但今日（11-03）仍有更新，属"活跃但未落地"。
   https://github.com/nanocoai/nanoclaw/pull/3726
3. **#4218 Proton Mail adapter（adapter 半边）** — OPEN 自 2026-10-24，需与 #3726 协同推进，注意两者的分支归属（`channels` registry vs `main`）。
   https://github.com/nanocoai/nanoclaw/pull/4218
4. **治理观察**：今日 14 条关闭中 8 条为 bot 镜像 PR，Issues 全天零活动——建议核查 **Issue 通道是否被有意关闭或用户反馈已迁移至 Discord/其他渠道**，否则将影响项目健康度指标的真实性。

---

### 数据完整性声明
本日报中「评论数」与「点赞数」在所有条目中均为 `undefined`，故未做热度排名或情绪量化；所有涉及社区反应、满意度、版本规划的判断均已标注为推断。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-11-03）

## 1. 今日速览

NullClaw 今日处于**低活跃度、平稳运行**状态：过去24小时 Issues 零新增、零关闭、零更新，PR 侧仅有 1 条新开待合并（#1091）。没有任何新版本发布。唯一实质进展是社区贡献者为 `web_search` 工具链路提交了免 API Key 的新搜索 Provider（Keenable），属于能力扩展型提案，而非缺陷修复。整体看项目无回归、无积压突增，健康度良好，但今日没有已合并代码落地，前进幅度有限。

## 2. 版本发布

今日无新版本发布，故省略本节。

## 3. 项目进展

今日**无合并或关闭的 PR**，代码主干未发生变更。

唯一进行中的推进为 PR #1091（OPEN，创建并更新于 2026-11-03）：
- 新增 `web_search` Provider：Keenable，代码位于 `src/tools/web_search_providers/keenable.zig`。
- 关键特性：**无需 API Key**，无 Key 时调用免费公共端点 `POST https://api.keenable.ai/v1/search/public`。
- 链接：nullclaw/nullclaw PR #1091

该 PR 若被合并，将降低 `web_search` 能力的接入门槛（用户零配置即可启用搜索），但今日仍处待评审阶段，尚未转化为项目实际前进量。

## 4. 社区热点

今日讨论活跃度极低：仅 1 条 PR（#1091），且评论数据缺失（评论数为 `undefined`），点赞数 0。无 Issues 可供比对。因此不存在"讨论最活跃"的条目，也暂无可据以分析的社区诉求信号。

值得关注：PR #1091
- 链接：nullclaw/nullclaw PR #1091
- 背后诉求（基于 PR 摘要推断）：社区希望降低搜索能力的接入摩擦——"无 API Key"的免费公共端点方案，反映部分用户不愿为单一工具配置密钥或支付搜索 API 成本。

## 5. Bug 与稳定性

今日**无 Bug、崩溃或回归问题报告**（Issues 更新为 0 条），无 fix PR。稳定性风险面今日为零。

## 6. 功能请求与路线图信号

今日无 Issues 形式的功能请求。唯一路线图信号来自 PR #1091：

- **免密钥 web_search Provider（Keenable）**——已具备代码实现，是最接近进入后续版本的候选项。是否纳入取决于评审对免费公共端点稳定性、速率限制与隐私的评估（这些细节当前数据未提供，无法判断）。
- 链接：nullclaw/nullclaw PR #1091

除此外无可据以判断的其他候选功能。

## 7. 用户反馈摘要

今日无 Issues 评论，PR #1091 的评论数为 `undefined`，**无真实用户反馈可提炼**。唯一可间接读取的用户取向是贡献者选择"无 API Key 的免费公共端点"，暗示对低配置成本的偏好，但这属于提案意图，不等同于已验证的用户反馈。

## 8. 待处理积压

根据所提供数据，**无法识别长期未响应的重要 Issue 或 PR**：Issues 总数为 0，PR 仅 #1091 一条且为当日新建，不存在长期滞留项。

建议维护者优先关注：PR #1091 的评审排期（nullclaw/nullclaw PR #1091）——它是当前唯一在途变更，若长时间无评审即会成为新的积压起点。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-11-03）

> 数据窗口：过去 24 小时。数据来源：IronClaw (github.com/nearai/ironclaw) GitHub 活动。

## 1. 今日速览

- 今日项目活跃度处于**低频维护状态**：无新版本、无 Issue 更新，仅 4 条 PR 变动，全部为依赖自动升级。
- 4 条 PR 均由 dependabot[bot] 发起，围绕 Rust 依赖 `rustls` 的版本升级（0.23.43 → 0.23.46），无人工贡献 PR。
- 2 条新 PR 待合并（#8165、#8166），2 条旧 PR 已关闭（#8151、#8152），属于依赖升级的常规迭代与重开。
- 数据中未出现任何 Bug 报告、功能请求或社区讨论，项目当日健康度平稳，但社区互动信号为零。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无功能性代码合并，所有关闭/合并 PR 均为依赖升级类变更：

- **PR #8152 [CLOSED]**：将 `rustls` 从 0.23.43 升级至 0.23.45（根依赖）。链接：nearai/ironclaw PR #8152
- **PR #8151 [CLOSED]**：将 `/harness/latency/runner` 下的 `rustls` 从 0.23.43 升级至 0.23.45。链接：nearai/ironclaw PR #8151

> 说明：这两条 PR 创建于 2026-10-20，于今日更新为关闭状态；结合同期新开的 #8165/#8166（目标版本更高，为 0.23.46），推测为被更新版本取代后关闭。数据中未提供关闭原因，此推断未获确认。

整体而言，项目在功能层面**当日无明显向前推进**，仅在依赖维护层面保持更新。

## 4. 社区热点

今日无评论数或反应数数据（各 PR 的评论字段为 `undefined`，👍 均为 0），**不存在讨论热点**。所有变动均来自自动化机器人，无人类用户参与讨论。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题上报。数据中唯一涉及稳定性的信号是 `rustls`（TLS 实现库）的补丁级升级（0.23.43 → 0.23.45/0.23.46），通常属于安全与健壮性维护，但数据未提供具体修复内容，故不作断言。

## 6. 功能请求与路线图信号

今日无功能请求类 Issue，也无功能性 PR，**无路线图信号可供分析**。

## 7. 用户反馈摘要

今日 Issues 为 0 条，无用户评论可供提炼，**暂无用户痛点、使用场景或满意度反馈数据**。

## 8. 待处理积压

需维护者关注的是两条待合并的依赖 PR：

- **PR #8165 [OPEN]**：根依赖 `rustls` 0.23.43 → 0.23.46。创建/更新于 2026-11-02。链接：nearai/ironclaw PR #8165
- **PR #8166 [OPEN]**：`/harness/latency/runner` 下 `rustls` 0.23.43 → 0.23.46。创建/更新于 2026-11-02。链接：nearai/ironclaw PR #8166

两条 PR 尚处待合并状态，属于常规依赖维护，处理成本低。数据中未包含长期未响应的 Issue 信息。

---

**健康度小结**：项目当日运行平稳，无故障信号，依赖维护自动化运转正常；但缺乏人类贡献与社区互动，活跃度偏低，建议关注依赖 PR 的及时合并以避免积压。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-11-03）

## 1. 今日速览

今日项目呈现**高强度的修复型开发节奏**：过去 24 小时共 12 条 PR 更新，其中 9 条已合并/关闭，全部集中在 `cowork`、`desktop-companion`、`web-search`、打包构建等稳定性与体验修复方向，无新版本发布。唯一活跃 Issue 为一条账号误封申诉（#2959，#2936 的重提交版本）。社区侧讨论热度低（仅 2 条评论），但维护者主导的修复吞吐量较高，项目健康度在"工程迭代"维度表现良好，在"用户沟通响应"维度存在明显缺口。整体评估：**活跃度中等偏上，功能演进停滞、以技术债与缺陷收敛为主**。

## 2. 版本发布

无新版本发布（Releases 为空），本节略。

## 3. 项目进展

今日已关闭的 9 条 PR 覆盖以下推进方向：

- **聊天历史截断修复**：#2981 修复 OpenClaw `chat.history` 每段文本 8000 字符截断后被错误覆盖写入本地完整文本的问题（新增 `OpenClawTruncatedHistoryRestorer`），并修复输入框弹层裁切。属直接影响用户可见数据正确性的修复。
- **定时任务模型选择失效**：#2986 修复定时任务结果页切换模型回弹、下一条回复仍使用默认 agent 的问题，同时修正分隔线显示原始 id `yd-fast` 的显示缺陷。
- **图片交付与确认恢复**：#2980 修复生图确认约 120 秒后被误判为用户取消、以及工作目录不可写时反复重试无法交付的问题，增加持久恢复目录。
- **桌面伴侣（macOS）两处体验缺陷**：#2984 修复选择工具栏在所有应用中不出现；#2979 修复拖动时 orb 闪烁（约 113 ms 抖动）。
- **Web 搜索稳定性双修复**：#2983 规避 `uv` 安装的 `~/.local/bin/env` 脚本劫持 PATH 导致 `env PREFIX node` 静默失败；#2977 修复打包版每次复制都误判 dist 过期、进而执行必然失败的 `npm install`/`npm run build`，导致 Web Search 桥接服务异常。
- **打包体积优化**：#2985 移除安装包内重复库与运行时无用文件，压缩包减少约 **42 MB**，该分支构建的完整安装包为 **239 MB**。
- **CI 治理**：#2978 调整 Dependabot 策略，只创建可合并的依赖 PR，针对此前 #2968–#2973、#2852、#2857 无法直接合并的情况。

链接：[#2981](https://github.com/netease-youdao/LobsterAI/pull/2981) · [#2986](https://github.com/netease-youdao/LobsterAI/pull/2986) · [#2980](https://github.com/netease-youdao/LobsterAI/pull/2980) · [#2984](https://github.com/netease-youdao/LobsterAI/pull/2984) · [#2979](https://github.com/netease-youdao/LobsterAI/pull/2979) · [#2983](https://github.com/netease-youdao/LobsterAI/pull/2983) · [#2977](https://github.com/netease-youdao/LobsterAI/pull/2977) · [#2985](https://github.com/netease-youdao/LobsterAI/pull/2985) · [#2978](https://github.com/netease-youdao/LobsterAI/pull/2978)

**整体推进评估**：今日成果集中在"可用性修补"而非新能力交付，对安装体积、启动/搜索链路、跨平台伴侣体验有实质改善；但 12 条 PR 中 9 条来自同一作者（fisherdaddy），**维护者负载集中度偏高**，是项目健康度的潜在风险点。

## 4. 社区热点

今日社区讨论极为稀薄，无高评论/高反应条目。相对最受关注的是：

- **[Issue #2959](https://github.com/netease-youdao/LobsterAI/issues/2959)**（OPEN，2 条评论）：账号被误封申诉。用户明确承认原 issue #2936 标题历史中包含个人手机号，正在请维护者清理，因此重新提交并请求在本条跟进。该 issue 创建于 2026-10-29，至 11-03 仍处开放状态，说明**申诉处理链路存在延迟**；同时暴露了公开 issue 标题可能泄露用户隐私、需要维护者介入清理的治理问题。
- **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)**（OPEN，标记 `stale`）：自 2026-07-21 创建至今仍未合入的侧边栏广告横幅永久隐藏设置。虽今日无评论数据，但其长期停滞本身构成了一个值得关注的历史诉求信号。

## 5. Bug 与稳定性

按严重程度排列（今日报告的缺陷均已附 fix PR，且多数已合并）：

| 严重度 | 问题 | 影响 | Fix PR | 状态 |
|---|---|---|---|---|
| 高 | 打包版 Web Search 桥接服务异常：dist 被误判过期，执行必然失败的 npm 命令 | 核心能力（联网搜索）在打包环境不可用 | [#2977](https://github.com/netease-youdao/LobsterAI/pull/2977) | 已关闭 |
| 高 | 聊天历史同步用截断预览覆盖完整本地文本 | 用户历史回复数据丢失（不可逆风险） | [#2981](https://github.com/netease-youdao/LobsterAI/pull/2981) | 已关闭 |
| 高 | 长输入超模型窗口后自动压缩本身亦超限，任务无法继续 | cowork 任务中断、不可恢复 | [#2982](https://github.com/netease-youdao/LobsterAI/pull/2982) | **OPEN，待合并** |
| 中高 | `uv` 的 `env` 脚本劫持 PATH，使 web-search 中 `env PREFIX node` 调用静默失败 | 平台相关（PATH 顺序）的隐蔽故障 | [#2983](https://github.com/netease-youdao/LobsterAI/pull/2983) | 已关闭 |
| 中 | 图片生成确认约 120 秒后误记为取消；目录不可写时反复重试无法交付 | 生图流程失败 | [#2980](https://github.com/netease-youdao/LobsterAI/pull/2980) | 已关闭 |
| 中 | 定时任务会话中切换模型无效，回弹到"快速"并使用 agent 默认 | 功能表面可用实际失效 | [#2986](https://github.com/netease-youdao/LobsterAI/pull/2986) | 已关闭 |
| 中 | macOS 26.6 / Apple Silicon 上伴侣选择工具栏在任何应用中都不出现（权限已授予、hook 已启动、日志无报错） | 桌面伴侣核心交互失效 | [#2984](https://github.com/netease-youdao/LobsterAI/pull/2984) | 已关闭 |
| 低 | 伴侣 orb 拖动时约每 113 ms 闪烁跳动 | 视觉体验 | [#2979](https://github.com/netease-youdao/LobsterAI/pull/2979) | 已关闭 |

**结论**：今日报告的缺陷整体严重度较高但收敛速度快，唯一仍在开放的高严重度问题是 **#2982**，建议优先评审。另需注意：#2982、#2987 为外部贡献者提交，尚未合并，存在评审积压迹象。

## 6. 功能请求与路线图信号

- **侧边栏广告横幅永久隐藏**（[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)，对应 issue #2342）：在 设置 → 常规 中加入开关，替代当前只能临时关闭的行为。该 PR 已挂 `stale` 标签逾三个月，**短期内纳入下一版本的可能性偏低**；但它是今日唯一明确的功能型 PR，若维护者不打算做，宜正式关闭或说明原因。
- **协作文（cowork）上下文超限的有界压缩恢复**（[PR #2982](https://github.com/netease-youdao/LobsterAI/pull/2982)）：以错误驱动分段摘要恢复任务，包含中英文提示与回归用例。这是今日最有可能进入下一版本的准功能项——不仅是修复，还引入了新的恢复机制。
- **OpenClaw 网关启动性能优化**（[PR #2987](https://github.com/netease-youdao/LobsterAI/pull/2987)，OPEN）：针对 Windows + 360 安全卫士环境下网关启动耗时 **170–250 秒**、CPU 剖析显示卡在 jiti 解析器的同步 fs 元数据调用的问题，引入模块解析元数据缓存。性能类改进，方向明确且面向中文用户常见环境，值得优先合入。

## 7. 用户反馈摘要

从今日可见的 Issue/PR 描述中提炼：

- **账号与信任痛点**：#2959 用户强调自己"未恶意使用、未刷接口、未批量调用"，被封禁疑似误判；申诉为**重提交**且需请维护者清理原帖标题中的手机号——反映出账号误判申诉通道不透明、响应慢，以及社区公开区隐私保护不到位。
- **跨平台体验差异**：macOS 26.6 / Apple Silicon 用户的伴侣选择工具栏完全不可用，且权限与日志均正常，属于"无错误报错型"故障，用户难以自助排查；Windows 用户在 360 安全卫士环境下遭遇极慢启动。
- **数据可信度**：聊天历史被截断预览覆盖，属于用户数据完整性问题，易引发不信任。
- **广告干扰**：#2374 背后的诉求是用户希望一次性永久关闭侧边栏广告，而非每次手动临时关闭。
- **满意度方面**：数据中未包含直接的正向评价，无法据此评估满意度水平。

## 8. 待处理积压

- **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)**（OPEN，`stale`）：创建于 2026-07-21，历时逾三个半月未合入，关联 issue #2342。建议给出明确结论。
- **[Issue #2959](https://github.com/netease-youdao/LobsterAI/issues/2959)**（OPEN）：创建于 2026-10-29，已 5 天未闭环；用户明确请求维护者协助清理原 issue #2936 标题中的手机号，涉及隐私，建议优先处理。
- **[PR #2982](https://github.com/netease-youdao/LobsterAI/pull/2982)**（OPEN）：外部贡献者提交，覆盖高严重度上下文超限场景，等待评审。
- **[PR #2987](https://github.com/netease-youdao/LobsterAI/pull/2987)**（OPEN）：外部贡献者提交，针对 Windows 网关启动 170–250 秒的性能问题，等待评审。

**维护者关注建议**：(1) 优先闭环隐私相关申诉与手机号清理；(2) 对两条外部贡献 PR 给出评审结论，避免贡献者流失；(3) 清理或推进 #2374，防止 stale 积压继续扩大；(4) 当前 12 条 PR 中 9 条由单一维护者承担，建议分散评审负载。

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

# CoPaw 项目日报 · 2026-11-03

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 活动。部分 Issue 正文中出现的仓库/产品名为 QwenPaw，按其原文如实标注。

## 1. 今日速览

过去 24 小时共 54 条 Issue/PR 更新（Issues 18 条、PRs 36 条），无新版本发布，社区处于高活跃维护期。Issue 侧新开/活跃 13 条、关闭 5 条，关闭率约 28%，积压仍在增长。PR 侧待合并 27 条，仅 9 条合并/关闭，审查吞吐明显落后于提交速度，是当前项目健康度的主要瓶颈。问题集中在 2.3.0 beta 系列（b1/b2/b3）的桌面端回归与插件/渠道激活失败，需尽快收敛测试版质量。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **#7816 [CLOSED] fix(pack): force-include console channel in PyInstaller bundle** — 修复 PyInstaller 无法跟踪 `registry.py` 中动态 `importlib.import_module(".console", ...)` 导致 console 渠道从桌面打包中静默丢失的问题。直接涉及桌面端渠道可用性，是今日最有价值的合并项。https://github.com/agentscope-ai/CoPaw/pull/7816
- **#8265 [CLOSED]** — 插件热安装因 `importlib.invalidate_caches()` 在发行版补丁版 Python 3.11 上抛错而中断，已关闭，插件装不上这一高频抱怨得到处理。https://github.com/agentscope-ai/CoPaw/issues/8265
- **#8488 [CLOSED]** — 桌面/PyInstaller 构建遗漏 visual_compression 资源，导致 Visual Compact 静默失效（`FileNotFoundError: atlas-gray-native.ts`）。https://github.com/agentscope-ai/CoPaw/issues/8488
- **#4312 [CLOSED]** — `agent.json` 热加载扩展至 MCP、Skills 等配置项（5 月提出，今日关闭）。https://github.com/agentscope-ai/CoPaw/issues/4312
- **#8013 / #8528 [CLOSED]** — 大技能池下载前端 30s 超时、Markdown 预览相对链接被改写为 `/api/files/preview/...` 导致 404，均已关闭。https://github.com/agentscope-ai/CoPaw/issues/8013 ｜ https://github.com/agentscope-ai/CoPaw/issues/8528

整体推进以“清理存量小修 + 桌面打包缺陷”为主，无大型功能落地；27 条待审查 PR 说明增量尚在管道中。

## 4. 社区热点

今日数据中评论数最高的条目均为 5 条以下，讨论规模整体不大，热度相对靠前的是：

- **#8265 [CLOSED] 插件热安装中止**（5 条评论）— 作者自述“我的插件被这个卡了”，反映插件热安装链路的稳定性直接决定插件生态可用性。https://github.com/agentscope-ai/CoPaw/issues/8265
- **#8488 [CLOSED] Visual Compact 静默 no-op**（3 条评论）— 静默失败而非报错的设计让用户难以定位。https://github.com/agentscope-ai/CoPaw/issues/8488
- **#8505 [OPEN] OpenAI 兼容网关 502 被分类为 `unknown`**（3 条评论）— 见 Bug 部分。https://github.com/agentscope-ai/CoPaw/issues/8505
- **#8553 [OPEN] QQ 渠道 DEPENDENCY_PLAN_UNVERIFIED**（2 条评论）— 渠道/插件依赖审计的耦合问题。https://github.com/agentscope-ai/CoPaw/issues/8553

诉求主线：用户最在意的是**失败可诊断**——静默失效、错误分类丢失、依赖审计误伤，比功能缺失更伤体验。

## 5. Bug 与稳定性

**高（安全/数据损坏/核心链路中断）**
- **#8513 [OPEN] Security**：shell 包装的出站动作（SMTP 发送 / HTTP POST / @file-to-network）在 `approval_level: AUTO` 及 SMART 治理下不被检测、无需审批，tool_guard 与治理通道均存在检测缺口。**尚无 fix PR**。https://github.com/agentscope-ai/CoPaw/issues/8513
- **#8414 [OPEN] edit_file 将所有 CRLF 行尾转为 LF**：因经 `read_file_safe` 归一化后原子回写，属于静默文件内容变更。已有 fix PR **#8235**（Under Review）。https://github.com/agentscope-ai/CoPaw/issues/8414 ｜ https://github.com/agentscope-ai/CoPaw/pull/8235
- **#8549 [OPEN] 模型配置写入绕过字段校验**：越界的 `thinking_budget` / `max_input_length` 被持久化，重启后 provider 静默消失。已有 fix PR **#8550**。https://github.com/agentscope-ai/CoPaw/issues/8549 ｜ https://github.com/agentscope-ai/CoPaw/pull/8550

**中（核心功能失效 / 回归）**
- **#8505 [OPEN] 网关 502 被归为 unknown**：`openai.APIError` 的真实状态只写在消息文本中，导致不重试、不切换模型。无 fix PR。https://github.com/agentscope-ai/CoPaw/issues/8505
- **#8560 [OPEN] 2.3.0-beta.2 桌面窗口强制置顶（WS_EX_TOPMOST）**，遮挡全屏应用。**回归，无 fix PR**。https://github.com/agentscope-ai/CoPaw/issues/8560
- **#8553 [OPEN] QQ 渠道因 aliyun-hub 缺少依赖环境而激活失败**（2.3.0b2）。已有相关 PR **#8562**（撤回声明时清理 stale host evidence）与 **#8527**（启动期报告不可用依赖状态根）。https://github.com/agentscope-ai/CoPaw/issues/8553
- **#8511 [OPEN] 飞书渠道间歇性 `ProviderError: No active model configured`**：上一条消息处理中时新消息到达触发（v2.3.0-beta.1，v2.2.2 亦可复现，非 beta 引入）。无 fix PR。https://github.com/agentscope-ai/CoPaw/issues/8511
- **#8533 [OPEN] Codex/Qoder 后端定时任务将非空指令误判为空**（`ValueError: Third-party agent requests require text or attachments`）。无 fix PR。https://github.com/agentscope-ai/CoPaw/issues/8533
- **#8517 [OPEN] Hub Docker 运行时非 root 启动时 `config.json` Permission denied**。无 fix PR。https://github.com/agentscope-ai/CoPaw/issues/8517

**低（体验/局部）**
- **#8555 [OPEN] 新建任务所选工作区未在后续消息中体现**（v2.3.0b3）。https://github.com/agentscope-ai/CoPaw/issues/8555
- **#8502 [OPEN] 桌面端 HTML 预览“在浏览器中打开”失效**：中文路径报找不到文件，工作区外文件无响应（v2.3.0b1）。https://github.com/agentscope-ai/CoPaw/issues/8502
- **#8547 [OPEN] Creator 内置示例 cat-perspective-0803 在 Windows 上仍无法打开**（2.0.4），为 #7291 的回归。https://github.com/agentscope-ai/CoPaw/issues/8547
- **#8534 [OPEN] Creator TTS 无法使用阿里云 Token Plan 密钥**，且模型配置 UI 缺少协议选项。https://github.com/agentscope-ai/CoPaw/issues/8534

**已关闭**：#8265、#8488、#8013、#8528、#4312，另有 #8013（标题为空）同样已关闭。

## 6. 功能请求与路线图信号

- **插件扩展能力**：PR **#8554**（size/XXXL）为插件接入 CLI 命令与扩展点，联动注册表、依赖检查与资源生命周期；配套 **#8562** 修复依赖证据残留。若合入，将显著提升插件生态的开放度。https://github.com/agentscope-ai/CoPaw/pull/8554
- **渠道能力补齐**：PR **#8409** 为 QQ 渠道增加 C2C 流式消息（对齐飞书插件）；#8553 的依赖审计问题需同步解决，否则渠道可用性仍受制。https://github.com/agentscope-ai/CoPaw/pull/8409
- **模型/后端适配**：PR **#8236** 用 `num_ctx` 推导 Ollama 上下文窗口；**#8563** 向 Qoder CLI 透传 `xhigh` 推理强度；**#8234** 在 read/edit/grep 中支持 GBK/CP936 解码——对中国 Windows 用户是实质性改进。https://github.com/agentscope-ai/CoPaw/pull/8236 ｜ https://github.com/agentscope-ai/CoPaw/pull/8563 ｜ https://github.com/agentscope-ai/CoPaw/pull/8234
- **Agent 循环增强**：PR **#8544** 增加可选的 Jev 完成判定（decision model），针对“口头承诺却提前结束”的问题。https://github.com/agentscope-ai/CoPaw/pull/8544
- **资源边界**：PR **#8034** 将内联媒体上限从“按文件”改为“按请求”，防止会话累积多张合规图片撑爆请求体。https://github.com/agentscope-ai/CoPaw/pull/8034
- **互动层小修**：**#8561** 将未识别的 `/` 开头文本按普通提示处理。https://github.com/agentscope-ai/CoPaw/pull/8561

判断：#8550、#8562、#8563、#8564、#8561 属小改动且对应已报告缺陷，较可能进入下一补丁版；#8554、#8234、#8236 体量大，需更长审查周期。

## 7. 用户反馈摘要

- **使用场景**：Windows 桌面端 + 中文环境是主力（Windows 11 / Server 2022、zh-CN 路径、Edge 默认浏览器、GBK 编码记事本文件），飞书、QQ 渠道用于日常消息接入，Creator 插件用于 TTS 与内容创作，Codex/Qoder 作为第三方后端接入。
- **主要痛点**：① 静默失败难以定位（Visual Compact no-op、provider 静默消失、Markdown 链接 404）；② 中文环境适配不足（中文路径、GBK 编码、CRLF 行尾）；③ 插件与渠道的依赖审计过于敏感，一个 hub 插件缺环境即拖垮 QQ 渠道（#8553）；④ 测试版引入明显回归（窗口强制置顶 #8560），削弱升级信心。
- **满意点**：5 月提出的配置热加载诉求（#4312）最终落地，长周期 Issue 得到闭环；插件安装、大技能下载、预览链接等历史问题集中关闭，说明维护者在清理存量。

## 8. 待处理积压

- **#4312**（2026-05-14 创建，约半年）已关闭，但反映的配置热加载范围问题周期过长，建议维护者复盘响应时效。https://github.com/agentscope-ai/CoPaw/issues/4312
- **#8013**（2026-09-29 创建）标题为空、信息缺失，却经历 2 条评论后关闭，建议模板对标题与版本信息做必填校验。https://github.com/agentscope-ai/CoPaw/issues/8013
- **#8513 安全缺口** 与 **#8505 错误分类丢失** 均为 OPEN 且无 fix PR，建议优先排期。#8513 涉及 AUTO 审批下的出站动作，风险最高。https://github.com/agentscope-ai/CoPaw/issues/8513 ｜ https://github.com/agentscope-ai/CoPaw/issues/8505
- **审查积压**：PR #8034、#8234、#8235、#8236 均自 2026-10 中旬起处于 Under Review 状态，仍在更新，占用提交者耐心与主干演进速度，建议指定 reviewer 并给出结论。https://github.com/agentscope-ai/CoPaw/pull/8034 ｜ https://github.com/agentscope-ai/CoPaw/pull/8234 ｜ https://github.com/agentscope-ai/CoPaw/pull/8235 ｜ https://github.com/agentscope-ai/CoPaw/pull/8236

---
*注：PR 列表中的评论数字段在原数据中为空，报告中未据此推断任何热度数值。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-03

## 1. 今日速览

项目维持高强度活跃：过去 24 小时 18 条 Issue 更新（16 条新开/活跃、2 条关闭）、50 条 PR 更新（6 条合并/关闭、44 条待合并），无新版本发布。今日焦点集中在**运行时上下文窗口回退逻辑**（#12014、#12194 两条独立报告指向同一 32k 硬编码回退问题）、**网关/WebChat 会话生命周期**（#7759、#12107）以及**CI/构建阻塞**（#12210 的 Docker 源镜像构建失败、#12196 的 RUSTSEC 依赖告警，后者已关闭）。P1 级问题集中在 gateway/runtime 安全与可靠性（#7759、#9394、#9859、#12210），显示核心链路仍是稳定性攻坚主战场。整体健康度：**贡献量大、响应快，但待合并 PR 积压（44 条）与同源问题重复报告值得关注**。

## 2. 版本发布

今日无新版本发布，此部分省略。

## 3. 项目进展

今日无 PR 合并记录（6 条合并/关闭中，摘要数据未提供合并项详情），但 Issue 关闭体现两条收敛：

- **#11052 [CLOSED]** WhatsApp 出站 Markdown 转换支持主题分隔线与 setext 标题（紧随 PR #10475 的有限转换器之后补全 CommonMark 覆盖）。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11052)
- **#12196 [CLOSED]** CI Security 任务因 RUSTSEC-2026-0433（pulldown-cmark 0.13.5）失败，已关闭，解除对 `release:v0.9.0` 的阻塞（是否已有修复 PR 未在数据中体现）。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12196)

推进中的大型工作以 PR 形式排队，见第 4、6 节；项目整体处于“多条主线并行、尚未合入”的阶段，v0.9.0 相关标记（#9394、#9859、#12196、#12210）密集出现，说明下一版本已进入收口期。

## 4. 社区热点

- **#7759（8 评论，P1，web/gateway/runtime，risk:high）** 网关 WebSocket 生命周期与 agent turn 解耦：客户端断连不应取消进行中的 turn。讨论最活跃，反映 Web 聊天场景对长任务的强需求。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) 相关跟进 #12107 提出重连后应显示已脱离 turn 的答案。[#12107](https://github.com/zeroclaw-labs/zeroclaw/issues/12107)
- **#12014（5 评论，S1 工作流阻塞）** 与 **#9394（5 评论，P1，security:pairing）** 并列第二活跃。#12014 指自定义 OpenAI 兼容 provider 缺少 `context_window` 时静默假定 32,000 并本地拒绝本可容纳的 turn；#9394 指 `gateway.pairing_dashboard` 配置被接受却完全未被读取、配对码永不过期（安全问题）。[#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014) · [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)
- **PR #11921（size:XL，标签覆盖几乎所有子系统）** 追加式（append-only）会话事件历史，意图让版本化事件成为规范会话与执行历史、支持重放而不重复外部副作用——这是今日讨论体量最大的 PR，牵动 gateway/runtime/web 多条链路。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11921)

背后诉求：用户正把 ZeroClaw 推向“长时任务 + 多通道 + 可重放”的生产用法，而当前 turn 生命周期、上下文预算、会话历史三处抽象尚未对齐。

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻塞**
- **#12210**（P1，`release:v0.9.0`）`Dockerfile` / `.debian` / `.alpine` 三种源镜像构建均在依赖预取阶段失败——`tests/fixtures/runtime-composition-consumer` 未被复制。是否已有 fix PR：**数据中未见**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12210)
- **#12014** 自定义 provider 无 `context_window` 时硬编码 32k 回退，本地拒绝合法 turn。**未见 fix PR**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12014)
- **#9859**（P1，网关/API）distroless 发布镜像缺 `sh`，`runtime.shell` 回退失败导致 `/webhook → LLM request failed`。**未见 fix PR**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9859)
- **#12196**（已关闭）RUSTSEC-2026-0433 / pulldown-cmark 0.13.5 导致 Security 任务每次构建失败。**已关闭**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12196)

**S2 — 行为降级**
- **#12211** 经 `delegate` 工具访问的 agent 不加载 `TOOLS.md`（委派提示词使用独立文件列表而非 `PERSONALITY_FILES`）。**未见 fix PR**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12211)
- **#12194** 未知模型静默回退 `UNCONFIGURED_CONTEXT_WINDOW_FALLBACK = 32_000`。#12204 已提交针对 `web_search` 编译输出的修复，但**此条上下文回退本身未见 fix PR**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12194)

**安全 / P1**
- **#9394** `gateway.pairing_dashboard` 被接受但从未读取，配对码永不过期。**未见 fix PR**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)

**P2 / S3 — 次要**
- **#9562** WebChat 流式回复时自动滚动覆盖手动滚动，无法回看历史。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9562)（**有相邻 PR** #12209 处理停止按钮误触与措辞，非同一问题）
- **#12186** `zerocode --agent / -a` 参数被解析但从未生效，TUI 总是打开 Dashboard。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12186)
- **#12205** 空 canvas 永不删除，仍留在可见列表并计入 100 个上限。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12205)
- **#12203** 未启用 `tools-external` 时 `web_search_tool` 被静默编译剔除，无 `TOOL_COMPILED_OUT` 警告——**已有 fix PR #12204**。[#12203](https://github.com/zeroclaw-labs/zeroclaw/issues/12203) · [#12204](https://github.com/zeroclaw-labs/zeroclaw/pull/12204)

> 值得维护者注意的模式：**#12014 与 #12194 是同一 32k 回退问题的两个独立报告**（配置侧与运行时侧），且 #12203/#12204 显示“特性被 cfg 静默剔除却不告警”是一类系统性缺陷。

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有对应 PR | 纳入下一版本可能性 |
|---|---|---|---|
| 网关 turn 与 WebSocket 解耦、断线续跑 | #7759 | 无直接 PR；#11921 会话事件历史为其提供基础 | v0.9.0 后，取决于 #11921 合入 |
| Qdrant 记忆后端混合（dense + BM25）召回 | #12191 | **#12192 已开**，对齐全库 SQLite 后端行为 | 较高——实现已就绪、size:L、risk 低 |
| Web 托管文档上传（#9488 Phase 2 Web 切片） | #12181 | 无 | 中期，明确标注为第一阶段切片 |
| 出站媒体标记携带 caption（文字+图片合并为一条消息） | #12214 | 无 | 中低，跨多通道行为变更 |
| `config validate` 对 `delegation_policy.mode = forbidden` 下的死委派授权告警 | #12199 | 无 | 较高——仅诊断告警、改动面小 |

另有多条 PR 已就绪但未合入，构成事实上的路线图：**#12184** Matrix 一键审批表情反应（✅/🔁/❌）、**#12198** 转写 `default_provider` 回退、**#12201** 仅提及群内免提及的语音转写。

## 7. 用户反馈摘要

- **生产环境部署是主要摩擦点**：distroless 镜像缺 `sh`（#9859）与三种 Dockerfile 构建全挂（#12210）表明容器化路径的验证不足，用户在实际部署中撞墙。
- **自建/第三方模型的用户被硬编码默认值困扰**：使用自定义 OpenAI 兼容 provider（#12014）或未编目模型（#12194）的用户发现有效请求被本地拒绝，配置缺省值应当“按能力推断而非静默假设”。
- **Web 聊天体验是高频抱怨区**：流式回复打断阅读（#9562）、停止按钮误触并持久化 `[interrupted by user]` 记录（见 PR #12209 描述）、断线后丢失进行中的 turn（#7759、#12107），指向同一个体验主题——**会话状态与 UI 状态耦合过紧**。
- **多通道细节需求精细**：Telegram 引用媒体消息时 caption 被丢弃为 `[Photo]` 占位（PR #12197）、群内语音消息因无 @ 提及被丢弃（PR #12201）、WhatsApp 需补全 CommonMark 渲染（#11052 已关闭）。这些来自真实日常使用的高保真反馈。
- **满意度信号**：多条 Issue 由同一批活跃贡献者快速配套 PR（RO-mix 一人今日贡献 #12203/#12204、#12194、#12199 等），显示核心贡献者对问题有较强响应能力。

## 8. 待处理积压

- **#9394**（创建 2026-07-26，已超 100 天，P1 + `domain:security`）配对码永不过期，属安全面缺陷，且标记 `release:v0.9.0` 却无 fix PR。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)
- **#9859**（创建 2026-08-09，P1，S1）distroless 镜像 `sh` 缺失，仅 1 个 👍、2 条评论，关注度与实际严重度不匹配。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9859)
- **#9562**（创建 2026-07-30，已超 3 个月，P2）WebChat 滚动冲突，长期 `status:in-progress` 但无 PR。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9562)
- **PR #11601**（创建 2026-10-07，已近 1 个月，`needs-author-action`，size:XL，risk:manual）Telegram 转写失败分类与重试上界修复，等待作者响应。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11601)
- **PR #12070**（`needs-author-action`，size:L）per-turn skill 刷新后重新施加系统提示长度上限，避免超限。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12070)
- **PR 整体积压**：44 条待合并，其中 #11921（size:XL，创建 2026-10-21）横跨几乎所有子系统，若长期悬置将拖慢其后所有相关修复的落地。

---
*数据来源：github.com/zeroclaw-labs/zeroclaw 的 Issues 与 Pull Requests，统计窗口为 2026-11-02 至 2026-11-03。PR 评论数字段在原始数据中缺失（显示为 undefined），故未纳入热度排序。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*