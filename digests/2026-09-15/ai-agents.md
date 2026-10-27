# OpenClaw 生态日报 2026-09-15

> Issues: 429 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-15 12:08 UTC

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

# OpenClaw 项目日报 · 2026-09-15

> 数据来源：OpenClaw GitHub 仓库 (github.com/openclaw/openclaw) 当日抓取。本报告仅基于所提供的 Issues/PR 元数据与摘要，未对未列出的条目作出推断。

---

## 1. 今日速览

- 项目维持**极高活跃度**：过去 24 小时 Issues 更新 429 条（新开/活跃 257、已关闭 172），PR 更新 500 条（待合并 289、已合并/关闭 211），无新版本发布。
- 当日讨论重心集中在**稳定性与运行时可靠性**：Gateway 内存泄漏、子进程僵尸堆积、SQLite WAL 膨胀、更新/升级失败等问题占据了评论量最高的位置。
- 关闭面同样可观：172 条 Issue 关闭中包括 Telegram 消息静默丢弃、多智能体 Codex 迁移启动崩溃循环等长期问题，说明积压清理仍在推进。
- 维护者当日密集提交**内部重构与测试精简类 PR**（steipete、vincentkoc、RomneyDa 等为主），多为 P3、无用户可见行为变更，反映一次集中的代码健康度维护。
- 风险信号：多个 **P0 / P1 且带 `needs-maintainer-review` / `no-new-fix-pr` 标签**的条目仍处于开放状态，部分已持续数月（最早创建于 2026-02/03）。

---

## 2. 版本发布

今日**无新版本发布**。但当日存在大量与 2026.9.3 / 2026.9.4 版本升级、更新和回滚可靠性相关的活跃问题（见第 5 节与 #145252 跟踪索引），提示当前发布线仍在消化稳定性问题。

---

## 3. 项目进展

今日合并/关闭的 PR 以内部重构与测试矩阵精简为主，均为**无用户可见行为变更**，主要推进方向是降低维护成本与消除测试脆弱性：

- **#149045** `refactor(xai): compact provider test matrices`（已关闭）— 精简 xAI provider 测试矩阵，57 个用例输入/断言保持不变。
  https://github.com/openclaw/openclaw/pull/149045
- **#149042** `refactor(plugin-sdk): compact SSRF policy matrices`（已关闭）— 压缩 Plugin SDK SSRF 策略测试表，63 个 SSRF/私有网络安全用例覆盖不变。
  https://github.com/openclaw/openclaw/pull/149042

仍在审阅队列中、但推进实质问题的修复类 PR（尚未合并）：

- **#148248** `fix: Side chat times out while searching session history` — 修复 Side chat 在检索会话历史时超时并显示"Side chat cannot answer right now"，状态为 `ready for maintainer look`、`proof: sufficient`，关联 #148240。
  https://github.com/openclaw/openclaw/pull/148248
- **#77891** `fix: clear stale conversation routes after missing-session cleanup` — 修复 `sessions cleanup --fix-missing` 后会话仍指向缺失 session 的问题，Fixes #77871，标签 `merge-risk: 🚨 session-state`、`P1`、`waiting on author`。
  https://github.com/openclaw/openclaw/pull/77891
- **#147949** `fix(ui): keep queued input above composer` — 修正 Control UI 中队列输入被错误投影进会话记录的问题，P2、`ready for maintainer look`。
  https://github.com/openclaw/openclaw/pull/147949
- **#77843（扩展）FaceTime 实时语音桥**：**#119291** `feat(plugins): add experimental FaceTime realtime voice bridge` 仍在开放，XL 规模、`merge-risk: 🚨 compatibility` 与 `🚨 security-boundary`、`needs proof`。
  https://github.com/openclaw/openclaw/pull/119291

**整体推进评估**：当日无影响用户行为的重大合并，项目主要在"打扫房间"——测试与内部实现去重。面向用户的实质修复（Side chat 超时、陈旧路由清理）仍卡在审阅/作者响应阶段。

---

## 4. 社区热点

当日评论量最高的条目几乎全部是**长期运行的稳定性核心问题**，反映用户对运行时可靠性的高度关注：

| 条目 | 状态 | 评论 | 核心诉求 |
|---|---|---|---|
| **#25592** Text between tool calls leaks to messaging channels | OPEN, P1 | 40 | 工具调用之间的文本被当作可见消息发到 Slack/iMessage，涉及 `impact:security` 与 `impact:session-state`，标签含 `needs-product-decision` + `needs-security-review`，属产品级决策问题 |
| **#97616** 未回收的 hook/tool 子进程导致僵尸堆积与运行时退化 | OPEN, P1 | 30 | 明确的回归（regression），长时间运行后主进程下僵尸进程累积 |
| **#91588** Gateway 内存泄漏：RSS 从 350MB 涨到 15.5GB | OPEN, P1, stale | 25 | 2–3 天正常使用后触发 OOM 反复崩溃，`crash-loop` + `message-loss` |
| **#91009** Codex PreToolUse 原生 hook 中继生成 CPU 密集进程并阻塞 Gateway RPC | OPEN, **P0** | 24 | 2026.6.1 + `@openclaw/codex` 下短命 hooks 进程拖垮网关 |
| **#119720** 同步 agent 持久化与 transcript 维护阻塞 Gateway 事件循环 | OPEN, P1 | 20 | 规模化场景下事件循环阻塞，含历史修复的后续状态更新 |

**分析**：前五名热点全部指向同一类结构性痛点——**长时运行下的资源与状态管理**（子进程、内存、事件循环、持久化）。这些问题普遍带 `clawsweeper:no-new-fix-pr` 与 `needs-maintainer-review`，说明社区已充分复现与讨论，但**缺少可合并的修复 PR 或产品决策**，是当前项目健康度的主要瓶颈。

链接：
- #25592 https://github.com/openclaw/openclaw/issues/25592
- #97616 https://github.com/openclaw/openclaw/issues/97616
- #91588 https://github.com/openclaw/openclaw/issues/91588
- #91009 https://github.com/openclaw/openclaw/issues/91009
- #119720 https://github.com/openclaw/openclaw/issues/119720

---

## 5. Bug 与稳定性

按严重程度排列（标注是否有 fix PR）：

### P0
- **#91009** Codex PreToolUse hook 中继生成 CPU 密集进程、阻塞 Gateway RPC（`crash-loop`）— 无新 fix PR。
  https://github.com/openclaw/openclaw/issues/91009
- **#146860** Windows：Gateway 以 Scheduled Task（`LogonType: InteractiveToken`）安装时，托管更新交接无法获取进程启动身份，激活阶段挂起并放弃 — `ux-release-blocker`、`maturity:stable`。
  https://github.com/openclaw/openclaw/issues/146860
- **#143524** Agent SQLite WAL 数天内涨到 1.4–2.8 GB（达 2865 MB），阻断 Gateway 启动（Windows，2026.9.2/9.3）— 无新 fix PR、`needs-info`。
  https://github.com/openclaw/openclaw/issues/143524
- **#145252** [Tracking] 2026.9.3 / 2026.9.4 更新、升级与恢复可靠性 — 维护者跟踪索引。
  https://github.com/openclaw/openclaw/issues/145252
- **#148866**（**已关闭**）`gateway.bind=lan` 下 Gateway 永久重启循环（2026.9.1 + 2026.9.4，Ubuntu/systemd）— 当日关闭。
  https://github.com/openclaw/openclaw/issues/148866
- **#148614**（**已关闭**）更新失败：`runtime-verification-failed`（2026.9.3）。
  https://github.com/openclaw/openclaw/issues/148614
- **#146637** 2026.9.3 → 2026.9.4 npm 全局安装交换失败（Linux Mint），错误被截断。
  https://github.com/openclaw/openclaw/issues/146637

### P1
- **#25592** 工具调用间文本泄漏到消息渠道 — 有 `linked-pr-open`，但需产品与安全评审。
- **#97616** 子进程僵尸堆积（regression）— 无新 fix PR。
- **#91588** Gateway 内存泄漏至 15.5GB 触发 OOM（stale）— 无新 fix PR。
- **#119720** 同步持久化阻塞事件循环 — 无新 fix PR，等待产品决策。
- **#144911** MCP server 初始化超时（30s）导致 Gateway 崩溃，子进程清理上报 `service child cleanup identity lost` — 标签 `fix-shape-clear`、`queueable-fix`、`source-repro`，**具备可排队修复条件**。
  https://github.com/openclaw/openclaw/issues/144911
- **#139847** 回复运行期间到达的消息被丢弃（"Reply operation has no active tool authority snapshot"，2026.9.2 回归）— `queueable-fix`。
  https://github.com/openclaw/openclaw/issues/139847
- **#137332** 混合终止 requester-settle 批次在所有权检查后无限重试 — `queueable-fix`。
  https://github.com/openclaw/openclaw/issues/137332
- **#144809** `claude-cli`：超过 `RUN_STALE_TAKEOVER_MS` 的回合丢失完整生成回复（2026.9.4 复现于 Ubuntu 与 macOS）。
  https://github.com/openclaw/openclaw/issues/144809
- **#137613** CLI 后端禁用预压缩内存 flush，导致长期会话丢失持久笔记 — `impact:data-loss`。
  https://github.com/openclaw/openclaw/issues/137613
- **#125570** Skill Workshop 更新覆盖线上 skill 的 description，静默破坏 skill 路由 — `impact:data-loss`。
  https://github.com/openclaw/openclaw/issues/125570
- **#104719** memory-wiki 补充回退忽略工具截止时间 — 有 `linked-pr-open`。
  https://github.com/openclaw/openclaw/issues/104719

### P2 / 其他
- **#102175** 跨 room-event、策略与 Responses 边界的嵌入式 prompt cache 失效 — 需安全评审与实时复现。
  https://github.com/openclaw/openclaw/issues/102175
- **#146004** 子代理完成触发无渠道的 dashboard 心跳回合（2026.9.3 回归）。
  https://github.com/openclaw/openclaw/issues/146004

**稳定性判断**：当日无新版本发布，但 P0/P1 存量集中，且最紧迫的一批（#97616、#91588、#119720）**缺少新 fix PR**；相对积极的是多条 P1 已带上 `queueable-fix` / `fix-shape-clear` / `source-repro` 标签，具备快速推进条件，只待维护者认领。

---

## 6. 功能请求与路线图信号

- **#119291 FaceTime 实时语音桥**（实验性、默认关闭的 Apple Silicon 插件）— 作者持续推进至 9-15，规模 XL、依赖变更、带 `merge-risk: 🚨 compatibility` 与 `🚨 security-boundary`、`needs proof`。属高价值但高风险，纳入下一版本可能性取决于安全边界评审。
  https://github.com/openclaw/openclaw/pull/119291
- **#51572** 请求在会话 reset/prune 时也触发 `session-memory` hook，而非仅在 auto-compaction 时触发（P2，等待产品决策）。
  https://github.com/openclaw/openclaw/issues/51572
- **#60602**（已关闭）Per-Agent Bedrock requestMetadata 注

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析
**数据日期：2026-09-15**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态呈现出"头部高活跃、长尾分化"的清晰格局：以 OpenClaw、Hermes Agent、ZeroClaw、CoPaw 为代表的活跃项目单日 Issues+PR 更新量普遍在 50–100 条区间，而 ZeptoClaw、NullClaw、IronClaw 等项目则处于准静默或纯自动化状态。**稳定性与运行时可靠性**已取代新功能扩张，成为几乎所有成熟项目共同的讨论重心——Gateway 内存泄漏、子进程僵尸、SQLite/WAL 损坏、容器错误泄漏、凭据脱敏等问题在多项目同日重复出现。与此同时，**通道生态**（Telegram、Mattermost、Matrix、QQ、飞书、XMPP）与**Provider 容错**（超时分类、fallback、CLI 会话复用）构成两条并行的横向竞争轴。整体看，生态正从"能力炫技期"进入"工程可信度比拼期"，能否解决长时运行的资源与状态管理问题，正成为项目能否跨越生产可用门槛的分水岭。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃 / 关闭） | PR 更新（待合并 / 合并·关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 429（257 / 172） | 500（289 / 211） | 无 | 极高活跃，但 P0/P1 存量集中且缺 fix PR，瓶颈在评审 |
| **Hermes Agent** | 50（12 / 38） | 50（23 / 27） | **v2026.9.14（v0.21.3）** | 高频修复 + 集中收敛，关闭率约 76%，依赖安全欠账 |
| **LobsterAI** | 3（1 / 2） | 30（10 / 20） | 无（`Release/2026.9.15` 分支已合并） | 发布前冲刺，OpenClaw 兼容修复密集，作者集中 |
| **ZeroClaw** | 34（16 / 18） | 50（38 / 12） | 无 | 安全与运行时治理并行，XL 堆叠 PR 形成合并瓶颈 |
| **CoPaw (QwenPaw)** | 24（10 / 14） | 50（23 / 27） | 无 | 收敛式迭代，任务取消语义与文件 I/O 阻塞为空白区 |
| **NanoClaw** | 4（2 / 2） | 50（17 / 33） | 无 | 高活跃，新暴露泄漏与 DB 锁问题无 fix PR |
| **NanoBot** | 6（6 / 0） | 20（12 / 8） | 无 | 修复流动快，WebUI 移动端与 Provider 容错积压 |
| **PicoClaw** | 1（1 / 0） | 3（1 / 2） | 无 | 中等偏低，冲刺规划 + 依赖治理，QQ 401 待解 |
| **Moltis** | 0 | 1（1 / 0） | 无 | 低位，仅 CI 时序竞态修复 |
| **NullClaw** | 4（4 / 0） | 0 | 无 | 需求活跃、代码停滞，4:0 失衡 |
| **IronClaw** | 1（1 / 0，机器人） | 0 | 无 | 静默维护期，officeqa 43 项失败无跟进 |
| **ZeptoClaw** | 0 | 18（18 / 0） | 无 | 纯 dependabot 输入，合并率 0%，净积压 |
| **TinyClaw** | — | — | — | 过去 24 小时无活动 |

> 说明：OpenClaw 量级比其余项目高一个数量级；Hermes Agent / ZeroClaw / CoPaw / NanoClaw / LobsterAI 构成第二梯队；其余为长尾。

---

## 3. OpenClaw 在生态中的定位

**社区规模：绝对头部。** OpenClaw 单日 Issues 更新 429 条、PR 更新 500 条，约为第二梯队项目（50 条量级）的 8–10 倍。其热点 Issue 评论量达 24–40 条（如 #25592 达 40 条），远超其他项目（Hermes Agent 最高 102 条但属流程协调线程，技术类热搜仅 9 条）。

**优势：**
- 生态辐射力最强——LobsterAI 当日 20 条合并 PR 中有相当比例是针对 **OpenClaw v2026.8.1 升级兼容性**的修复，说明 OpenClaw 已成为下游产品的事实上游。
- 问题暴露最充分、复现最完整，`queueable-fix` / `fix-shape-clear` / `source-repro` 等标签体系成熟，具备工业化修复条件。

**技术路线差异：**
- OpenClaw 走 **Gateway 中心化架构**，问题也集中于此——Gateway 内存泄漏（RSS 350MB→15.5GB）、事件循环阻塞、MCP 初始化超时崩溃，均为"重网关"架构的典型代价。
- 对比 Hermes Agent 侧重 `state.db`/SessionDB 持久层健壮性、NanoBot 侧重 Provider 层容错、NanoClaw 侧重 credential gateway 契约重构——OpenClaw 的问题面更宽、更深，属"大而全"路线。

**短板：** 最紧迫的 P0/P1（#97616 僵尸堆积、#91588 内存泄漏、#119720 事件循环阻塞）**均无新 fix PR**，且部分带 `needs-maintainer-review` / `no-new-fix-pr` 标签，已持续数月。维护者当日精力集中在 P3 内部重构与测试精简（steipete、vincentkoc、RomneyDa），呈现"打扫房间但未修屋顶"的状态。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **长时运行资源/状态管理** | OpenClaw、Hermes Agent、NanoClaw、CoPaw | 子进程僵尸堆积（OpenClaw #97616）、Gateway 内存泄漏（#91588）、SQLite WAL 膨胀（#143524）、state.db 损坏（Hermes #110848）、DB 无 busy_timeout（NanoClaw #3811）、NFS 下进程冻结 5–6 分钟（CoPaw #7786） |
| **Provider 容错与降级** | NanoBot、Hermes Agent、ZeroClaw、NullClaw | 超时未触发 fallback（NanoBot #5674 + PR #5769）、provider 400 错误（Hermes #111043/#111231）、会话头缺失致模型不可用（ZeroClaw #10603）、CLI 会话复用降成本（NullClaw #975） |
| **通道安全边界与脱敏** | OpenClaw、NanoClaw、ZeroClaw、PicoClaw | 工具调用间文本泄漏到 Slack/iMessage（OpenClaw #25592）、容器错误投递到公开频道（NanoClaw #3814）、凭据明文持久化（Hermes #110416）、QQ 附件 SSRF（NanoBot #5697）、配对码强度（ZeroClaw #6613） |
| **静默失败 / 误导性报错** | NanoClaw、ZeroClaw、CoPaw、Hermes Agent | 绝对路径静默生成错误路径（NanoClaw #3706）、Telegram reaction 静默 no-op（ZeroClaw #10842）、TTS 配置静默失效（#10488）、daemon 丢失错误链（#10232）、配置被接受但被静默忽略（Hermes #110690） |
| **任务生命周期 / 取消语义** | CoPaw、OpenClaw、NanoBot | 停止后仍执行 + 409 报错（CoPaw #7567）、陈旧路由清理（OpenClaw #77891）、Dream 循环上限失效（NanoBot #5781） |
| **跨智能体记忆 / 上下文** | ZeroClaw、Hermes Agent、NanoBot、OpenClaw | 分类范围记忆授权（ZeroClaw #8983→PR #10252）、可编辑可失效记忆（Hermes #109607/#68206）、工具调用上下文 API（NanoBot #5750）、session-memory hook 触发时机（OpenClaw #51572） |
| **移动端 / PWA 体验** | NanoBot、CoPaw | 冷启动白屏、双击才能开会话（NanoBot #5770–#5773）、小屏侧边栏拥挤（CoPaw #7739/#7700→PR #7788） |

**共识浮现：** 社区对"失败要显式、要安全、要可恢复"的诉求已跨项目趋同，静默 no-op 与误导性报错被一致视为高优先级体验债。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | CoPaw (QwenPaw) | NanoClaw | LobsterAI |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈助手 + Gateway + Plugin SDK | 多平台部署 + 状态存储 | 安全边界 + 通道抽象 + A2A | 多租户 Hub + 多频道 | Credential Gateway 插件化 | OpenClaw 下游封装 + Cowork |
| **目标用户** | 通用开发者 / 集成方 | 生产部署 / 多平台运维 | 隐私 & 自托管 / home-lab | 团队协作 / 云端托管 | 企业自管服务器 | 终端桌面用户 |
| **技术架构** | Gateway 中心化 | SessionDB + WAL 持久层 | Rust + 插件 egress 治理 | QwenPaw Hub 多租户 | 依赖注入式 gateway seam | Electron + OpenClaw 内嵌 |
| **特色机制** | 成熟标签体系（queueable-fix） | fleet/launchd 部署 | RFC 治理 + PR 风险标签 | Console + 多智能体协作 | OneCLI / Iron Proxy | 中文 IM 渠道集成 |
| **语言生态** | TypeScript 为主 | Python 为主 | Rust | Python | TypeScript | TypeScript/Electron |

**关键差异点：**
- **ZeroClaw** 是唯一以 Rust 实现、并将"安全边界"作为第一公民的项目（插件 egress 治理 PR #10750、宿主机 launcher 路径解析 PR #10381），RFC 治理机制也是其独有。
- **CoPaw** 是唯一明确走**多租户 Hub** 路线（#7318，27 条评论），从个人助手转向团队协作，定位与其余项目明显区隔。
- **NanoClaw** 以 **credential gateway 可插拔化**为核心投资（#3815–#3818 四连发），走"能力 seam 化"路线，而非功能堆叠。
- **LobsterAI** 是唯一明确的**下游消费方**定位，其技术路线受 OpenClaw 上游版本节奏直接驱动。

---

## 6. 社区热度与成熟度

**活跃度分层：**

| 层级 | 项目 | 阶段特征 |
|---|---|---|
| **T1 超大规模** | OpenClaw | 高活跃 + 高存量，进入"大项目治理难题"阶段 |
| **T2 快速迭代** | Hermes Agent、ZeroClaw、CoPaw、NanoClaw、NanoBot | 高频修复 + 集中收敛，多数处于功能管线充足期 |
| **T3 发布冲刺** | LobsterAI | 集中合并 + 历史积压清理，明显处于发布节点前 |
| **T4 规划/治理** | PicoClaw | v0.10.0 sprint 文档化，逐 track 兑现，交付空窗 |
| **T5 低位/静默** | Moltis、NullClaw、IronClaw、ZeptoClaw、TinyClaw | CI 维护、需求停滞、纯自动化或零活动 |

**质量巩固阶段项目：** Hermes Agent（依赖安全 + 数据持久层）、ZeroClaw（安全边界 + CI 可信度）、CoPaw（MCP 传输层 + 配置诊断）——这三者的共同特征是**新功能未扩张，修复与治理占比高**，社区焦点从"能力"转向"可信度"。

**快速迭代阶段项目：** NanoClaw（credential gateway 重构）、NanoBot（Provider 容错闭环）——仍处于能力铺轨期。

**风险信号：** OpenClaw 的"高活跃 + 高存量"结构值得警惕——429 条 Issues 更新中 P0/P1 缺 fix PR，关闭的 172 条中包含长期问题，说明积压清理与新增需求赛跑，一旦维护者评审吞吐跟不上，可能从"健康高位"转向"债务累积"。

---

## 7. 值得关注的趋势信号

**信号一：从"功能竞赛"转向"运行时可信度竞赛"。**
多项目同日重复出现长时运行退化问题（OpenClaw 内存/子进程、Hermes state.db、CoPaw 事件循环、NanoClaw DB 锁），且大量修复带 `crash-loop`、`message-loss`、`impact:data-loss` 标签。对智能体开发者的参考：**持久层选型（WAL 跨文件系统兼容性）、子进程生命周期管理、事件循环阻塞检测**已成为生产部署的必修课，早期介入比事后修补成本低一个数量级。

**信号二："失败语义"成为体验竞争新维度。**
静默 no-op（ZeroClaw #10842）、配置被静默忽略（Hermes #110690）、误导性报错（NanoClaw #3811）、内部占位符泄漏给用户（ZeroClaw #10625）在多个项目被独立报告。用户已明确表达"期望失败要显式、要安全、要可恢复"。参考价值：**防御性检查 + 显式错误链 + 优雅降级**应作为架构设计的一等约束，而非补丁。

**信号三：Provider 层走向"可插拔 + 容错 + CLI 复用"三重抽象。**
NullClaw 请求 `grok-cli` provider（复用 `claude-cli`/`codex-cli` 模式实现不计费调用）、NanoBot 构建超时分类 + fallback 闭环、ZeroClaw 引入 Hailo-Ollama 原生支持、NanoBot 接纳 aimlapi.com 聚合网关——Provider 生态正被外部厂商主动适配。开发者参考：**将 Provider 抽象为可注册 seam 并内置超时/错误分类/fallback 策略**，能显著降低接入摩擦与运行风险。

**信号四：Credential Gateway 与安全边界可插拔化。**
NanoClaw 的四连发 PR（契约 / skill / Iron Proxy / setup 选择）是当日最完整的架构投资信号，配合 OpenClaw、Hermes、ZeroClaw 各自的脱敏/SSRF/安全边界议题，指向同一趋势：**凭据治理正从硬编码能力升级为可插拔基础设施**。

**信号五：跨智能体记忆权限需要粒度化。**
ZeroClaw #8983（分类范围授权，已落地）、Hermes #109607（本地优先可检查记忆）、NanoBot #5750（per-invocation 工具上下文）共同指向：**"全有或全无"的共享模型已不可接受**，跨智能体协作需要按类别、按调用、可失效的精细权限。

**信号六：维护者评审吞吐成为生态瓶颈。**
OpenClaw、ZeroClaw（多条 XL 级 `needs-maintainer-review`）、Hermes（PR #70187 挂起两月）、CoPaw（PR #6776 挂起一月）、NanoBot（PR #5666 挂起 11 天）均出现高价值 PR 长期待审。**对下游决策者的提示**：在评估项目生产可用性时，不仅要看活跃度，更要看**合并吞吐比**——高活跃但低合并率意味着修复无法落地。

---

*本报告所有数据、编号、状态与结论均严格基于 2026-09-15 各项目 GitHub 数据摘要，未对未列出的条目作任何推断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-15）

## 1. 今日速览

NanoBot 今日保持高强度开发节奏：过去 24 小时 Issues 更新 6 条（全部为新开/活跃，0 关闭），PR 更新 20 条（12 条待合并、8 条已合并/关闭），无新版本发布。讨论焦点集中在两类问题上：一是 Provider 层错误处理（NVIDIA NIM 超时导致 agent 停止、timeout 未触发 fallback），二是 WebUI 移动端/PWA 体验缺陷（morandot 一人提交 4 条）。今日关闭的 8 条 PR 覆盖安全加固（QQ SSRF、Email 认证）、工具链一致性、记忆归档与流式性能，显示维护者对安全与底层稳健性的响应较为及时。整体健康度良好：修复流动快，但 WebUI 移动端与 Provider 容错领域存在明显积压。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 8 条重要 PR：

- **安全加固：QQ 入站附件下载防 SSRF**（#5697，priority: p2）— 对来自入站消息的 QQ 附件 URL 做校验、规范化 protocol-relative URL 并禁用重定向。链接：HKUDS/nanobot PR #5697
- **Email 发件人验证加固**（#5778）— 在共享入站边界要求显式配置接收服务、结构化解析认证结果并核验认证身份与可见发件人一致性。链接：HKUDS/nanobot PR #5778
- **修复 read_file 去重作用域**（#5775，priority: p2）— 此前 read_file 可能在原始输出被上下文压缩/裁剪后仍返回"文件未变"存根；现在仅在原始读取结果仍完整保留于当前模型请求中时才去重。链接：HKUDS/nanobot PR #5775
- **修复 WebUI 长会话历史搜索**（#5757，priority: p2）— search_sessions 与过滤后的 read_session 此前会静默漏掉旧消息，因 build_webui_thread_response() 只返回最新一页 transcript。链接：HKUDS/nanobot PR #5757
- **飞书扫码登录验证 URL 修复**（#5768，priority: p1）— 在 v0.3.0 上 `nanobot channels login feishu` 因落地页立即拒绝 code 而无法完成，改用 /page/cli 验证 URL。链接：HKUDS/nanobot PR #5768
- **记忆归档工具调用恢复**（#5774，priority: p2）— 对意外发出工具调用的归档请求返回非执行结果并重试一次，复用 ProviderConversationStateController 做原生续接。链接：HKUDS/nanobot PR #5774
- **流式文本处理与 CLI 重绘性能优化**（#5728，priority: p2）— 降低长回复场景下累积文本的控制标签扫描开销，以及经典 Python CLI 对整段 Markdown 的重复解析重绘。链接：HKUDS/nanobot PR #5728
- **edit_file 行边界与成功响应统一**（#5761，priority: p2，regression）— 修复 edit_file 删除内联后缀后换行符导致相邻行合并、内容损坏的问题，并与 apply_patch 统一成功响应。链接：HKUDS/nanobot PR #5761

## 4. 社区热点

- **#5750 feat(tools): 暴露稳定的 per-invocation 工具上下文**（xiexiahao，OPEN，创建 09-12/更新 09-15，Fixes #5749）— 通过基于 ContextVar 的 `ToolInvocationContext` 向工具实现暴露当前逻辑工具调用身份，并在既有 per-call 执行边界 `_execute_tool_call()` 绑定上下文，属于基础设施型改动，可能影响后续工具生态。链接：HKUDS/nanobot PR #5750
- **#5666 新增 aimlapi.com 作为 OpenAI 兼容网关 Provider**（hugoaimlapi，OPEN，创建 09-04/更新 09-15）— 提案方自称 AI 聚合服务，提供 1000+ 模型接入。属外部厂商主动适配，反映 NanoBot 的 provider 生态被外部关注。链接：HKUDS/nanobot PR #5666
- **#5728 流式/CLI 性能优化**（chengyongru，已关闭）— 单日完成从创建到关闭流程（09-11 创建，09-15 更新关闭），评论数未披露。链接：HKUDS/nanobot PR #5728
- **#5769 Provider 超时 failover**（Amiirhosseini，OPEN，更新 09-14）— 与今日 issue #5674 直接对应，见下节。链接：HKUDS/nanobot PR #5769

> 说明：本批数据中 PR 的评论数字段均为 `undefined`，无法据此排序讨论热度，上述热点依据创建/更新时间跨度与议题关联度选取。

## 5. Bug 与稳定性

按严重程度排列：

**高：**
- **#5674 Nvidia NIM 特定错误导致 agent 停止工作**（OPEN，创建 09-05/更新 09-14，评论 1）— 当 provider 返回 "timed out after 300s / 600s" 时 agent 停止工作。已有对应修复 PR **#5769**（将超时分类从 `*Timeout*` 类名扩展为基于异常消息文本识别，并允许 FallbackProvider 在 `error_should_ret...` 时切换模型）。链接：HKUDS/nanobot Issue #5674 / HKUDS/nanobot PR #5769
- **#5781 Dream 定时整合运行 1–2 小时死循环**（OPEN，创建/更新 09-15）— 计划性 Dream consolidation 变成 25–111 分钟、最多约 200 次工具调用的长循环，模型反复重读同两个文件；`dream.maxIterations` 已废弃/被忽略，导致全局 200 次上限生效。**暂无 fix PR**。链接：HKUDS/nanobot Issue #5781

**中（WebUI 移动端/PWA，均为 09-15 新开，暂无 fix PR）：**
- **#5773 PWA 冷启动长时间白屏**（OPEN）— 首次打开或应用被驱逐后重启时，首屏渲染前出现明显白屏。链接：HKUDS/nanobot Issue #5773
- **#5772 iOS PWA standalone 模式顶部渲染发白**（OPEN）— 侧边栏切换与右侧控件所在条带及紧邻消息内容呈半透明/模糊。链接：HKUDS/nanobot Issue #5772
- **#5771 移动端需双击才能打开会话**（OPEN）— 首次点击无可见效果，第二次点击才打开。链接：HKUDS/nanobot Issue #5771
- **#5770 打开移动侧边栏时搜索按钮被聚焦并显示 "Search ⌘K" 提示**（OPEN）— 无 hover 状态的触屏设备上被误读为搜索框。**已有 fix PR #5777**（SheetContent 不再自动聚焦首个可 tab 控件，改为聚焦 dialog 容器）。链接：HKUDS/nanobot Issue #5770 / HKUDS/nanobot PR #5777

其他待合并修复类 PR：**#5780**（停止发送 context compaction 通知，作者同时质疑 #5656 的预期行为）、**#5779**（串行化并发会话文件写入，修复 #4798 的字节交错/更新丢失）。链接：HKUDS/nanobot PR #5780 / HKUDS/nanobot PR #5779

## 6. 功能请求与路线图信号

- **Provider 容错体系（最可能落地）**：issue #5674 + PR #5769 已构成完整闭环（超时消息分类 + fallback 切换模型），且 #5769 已标记 `bug, provider, fix, test, priority: p2`。
- **工具调用上下文 API（#5750）**：明确 Fixes #5749，具备 `feature, test, priority: p2` 标签，属平台能力扩展，落地后将影响所有工具实现。
- **Provider 设置项可搜索（#5776，OPEN）**：为 Settings 中的 provider 选择器增加搜索/过滤输入，"Add your own model provider" 下拉改为带搜索框的 combobox，属体验型增强。
- **新增 Provider 接入（#5666）**：aimlapi.com 作为 OpenAI 兼容网关，含 documentation/new-provider 标签，需维护者评估第三方聚合服务的接入标准。
- **通知行为可配置（#5780 隐含）**：作者请求若后台 compaction 通知为有意设计，应提供可配置项。

## 7. 用户反馈摘要

- **Provider 稳定性是核心痛点**：NIM 超时错误直接让 agent 停摆（#5674）；PR #5769 作者指出超时被包装为 `RuntimeError`，仅靠类名匹配无法识别。
- **长时任务不可控**：#5781 反映定时 Dream 任务的迭代上限配置（`dream.maxIterations`）被废弃且被忽略，用户失去对循环成本的控制，单次运行最长约 111 分钟。
- **移动端体验是集中不满点**：同一用户（morandot）在一日内提交 4 条 WebUI/PWA 缺陷，涵盖冷启动白屏、iOS standalone 顶部发白、双击才能开会话、误触搜索提示，指向移动端打磨不足。
- **企业/集成侧反馈**：PR #5768 指出飞书扫码登录在 v0.3.0 上"从未成功完成"；PR #5778 推进 Email 发件人认证；PR #5697 处理 QQ 附件 SSRF，显示用户在真实企业渠道中遇到安全与可用性门槛。
- **外部生态认可**：aimlapi.com 主动完成技术适配并请求内置，称其服务被 400k+ 用户使用（该数字为提案方自述，未经项目方验证）。

## 8. 待处理积压

- **Issue #5674**（创建 2026-09-05，已 10 天，仅 1 条评论）— NIM 超时致 agent 停止，虽已有 PR #5769，但该 PR 自 09-14 起未再更新，需推动评审。链接：HKUDS/nanobot Issue #5674
- **PR #5666**（创建 2026-09-04，已 11 天，仍 OPEN）— aimlapi.com provider 接入，属本批中创建最早、跨度最长的待合并 PR，需明确第三方 provider 的准入结论。链接：HKUDS/nanobot PR #5666
- **PR #5750**（创建 2026-09-12，3 天未合并）— 工具调用上下文属底层接口变更，建议尽早给出设计反馈以免下游工具实现返工。链接：HKUDS/nanobot PR #5750
- **Issue #5781**（09-15 新开，暂无 fix PR，0 评论）— Dream 迭代上限失效影响资源消耗与可预期性，建议优先确认 `dream.maxIterations` 的废弃状态与替代配置。链接：HKUDS/nanobot Issue #5781

---
*数据来源：HKUDS/nanobot GitHub 公开数据（截至 2026-09-15）。PR 评论数字段在本批数据中缺失，相关排序仅依据时间与议题关联度。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-15

## 1. 今日速览

今日项目活跃度极高：过去 24 小时 Issues 更新 50 条（关闭 38 / 新开或活跃 12），关闭率约 76%，说明维护者清理节奏明显强于新增；PR 更新 50 条（合并/关闭 27 / 待合并 23），合并略多于新增待审。发布了补丁版本 v2026.9.14（v0.21.3），将 v0.21.2 以来的约 338 个 PR 汇总为稳定 tag，主要服务于 Docker 镜像、Hermes Cloud 与托管部署等下游消费方。整体看，项目处于“高频修复 + 集中收敛”的健康状态，但安全类 Issue（#107356）与 session/WAL 状态损坏类问题仍是持续性风险点。

---

## 2. 版本发布

**v2026.9.14 — Hermes Agent v0.21.3**（Release Date: September 14, 2026）

- 性质：补丁版本（Patch release）。
- 内容：将 v0.21.2 之后合并的约 **338 个 PR** 汇总为稳定 tag，供下游消费方（Docker 镜像、Hermes Cloud、托管部署）使用。
- 发布动机：官方说明该 tag 的存在是为承载 remote-gateway 登录修复等内容（release notes 摘要在“sign-in fixes below”处截断，未提供完整破坏性变更与迁移说明）。
- 破坏性变更 / 迁移注意事项：**当前素材未提供**，无法确认。建议下游部署方在升级前查阅该 tag 的完整 release notes。

---

## 3. 项目进展

今日合并/关闭的重要 PR：

- **[CLOSED] PR #111433** — `fix(state): existing WAL state.db on a virtiofs/9p mount now warns at startup and in hermes doctor (#110848)`（作者 teknium1）。针对 #110848 的数据库损坏问题，在启动时对跨 VM bind mount 上的 WAL 模式 `state.db` 记录每进程一次的 ERROR，并由 `hermes doctor` 标记，同时给出两条补救措施，替代此前“静默在不适用的文件系统上跑 WAL”的行为。这是今日对稳定性最有价值的收敛。链接：https://github.com/NousResearch/hermes-agent/pull/111433

- **[CLOSED] PR #107719** — `fix(state): kanban stays available when agent.session_activity is missing (#107661)`（作者 kyssta-exe）。解除 `hermes_state_sessions` 对 `agent.session_activity` 的模块级导入依赖，避免 `agent/` 缺失（陈旧 Docker 层、卷遮蔽、外部 `hermes-webui` PYTHONPATH）时所有 `SessionDB` 导入失败。提升了部署形态的健壮性。链接：https://github.com/NousResearch/hermes-agent/pull/107719

- **[CLOSED] PR #104256** — `fix(kanban): make split modules resilient to missing private helpers via _kb (#104217)`（作者 kyssta-exe）。修复部分 `hermes update` 后 kanban 拆分模块加载到陈旧 `kanban_db` 模块的问题，通过 `_kb` 延迟绑定私有 helper。链接：https://github.com/NousResearch/hermes-agent/pull/104256

- **[CLOSED] PR #111561** — `fix(tools): preserve Linux paths in Docker vision_analyze on Windows host (#111553)`（作者 kyssta-exe）。修复 Windows 11 + Docker 终端后端下 `vision_analyze` 报 `Only base64 data is allowed` 的路径解析问题。链接：https://github.com/NousResearch/hermes-agent/pull/111561

- **[CLOSED] PR #108562 / #108563 / #108570** — 三条由 diegoantony 提交的 PR 均标注 “withdrawn”（作者撤回），涉及 comp/cli、area/config、comp/cron 等 P2 区域，需注意对应问题可能仍未解决。

整体推进评估：今日的合并集中在**状态存储与会话可靠性**（state.db、SessionDB、kanban 模块加载）与**跨平台工具链**（Windows/Docker、macOS launchd）两条主线，属于稳定性与可用性层面的实质推进，而非新功能扩张。

---

## 4. 社区热点

- **Issue #88584** [OPEN][invalid, comp/cron, P3] — 评论 **102** 条，今日讨论最活跃。作者 echokos。内容为自动化 Nous 集成被阻塞：计划中的 Nous-to-Enterkey 合并存在冲突（`cron/jobs.py`），无 release branch 变更，dashboard updater 停留在最后测试的 Enterkey 版本。链接：https://github.com/NousResearch/hermes-agent/issues/88584

- **Issue #107356** [OPEN][type/security, ...] — 评论 **9** 条。作者 eabase。标题直指“Hermes 安全漏洞持续堆积，18 个中已有 12 个为 High”，核心诉求是 npm 依赖长期未更新（帖中附 `npm audit` 报告，涉及 `@vitest/mocker` 等的路径穿越/任意文件类问题）。链接：https://github.com/NousResearch/hermes-agent/issues/107356

- **Issue #110848** [CLOSED][type/bug, comp/agent, area/docker, P1, ...] — 评论 **6** 条。作者 paoloantinori。在受控复现条件下，virtiofs bind mount 上的 `state.db` 在并发 WAL 写入后一分钟内报 “database disk image is malformed”，而同样负载在 ext4 上运行 30 分钟无异常；该问题在 2026-08-13 与 2026-09-13 两度在生产出现。今日已有对应修复 PR #111433 关闭。链接：https://github.com/NousResearch/hermes-agent/issues/110848

热点分析：社区关注焦点从“功能”转向**依赖安全**与**数据持久层可靠性**，同时 #88584 的超长评论线程显示存在与外部集成/发布流程相关的长期协调问题尚未收敛。

---

## 5. Bug 与稳定性

按严重程度排列：

**P1**
- **#110848**（CLOSED）— state.db 在 virtiofs bind mount 下并发 WAL 写入后损坏，有受控复现器；**已有 fix PR #111433（已关闭合并）**。生产已两次命中。链接：https://github.com/NousResearch/hermes-agent/issues/110848

**P2**
- **#110701**（OPEN）— `tests/hermes_cli/test_update_fleet_restart_pending.py::test_run_pending_restart_true_when_no_gateways` 在安装了真实 launchd fleet 的机器上于 `origin/main` 干净检出即失败（测试只 patch 了 gateway PID）。**暂无 fix PR**，但已有相关测试选择修复 PR #111867 处于 OPEN。链接：https://github.com/NousResearch/hermes-agent/issues/110701
- **#111043**（CLOSED）— `bedrock_adapter`：xAI Grok 在 Bedrock Converse 上因 `temperature` 字段返回 400；`_forbids_sampling_params` 守卫仅覆盖 Claude。链接：https://github.com/NousResearch/hermes-agent/issues/111043
- **#110552**（CLOSED）— `reopen_session()` 回填 `_reset_from` 后，reset 血缘来源被误分类。链接：https://github.com/NousResearch/hermes-agent/issues/110552
- **#110530**（CLOSED）— MCP 工具 schema 中参数名为 `properties` 时触发不可重试的 HTTP 400（`_repair_object_shape` 将 properties map 当作节点）。链接：https://github.com/NousResearch/hermes-agent/issues/110530
- **#111231**（CLOSED）— 严格 provider 在重放工具历史时 400：Responses 出现重复 `function_call_output` + NVIDIA 未分类 serde 错误；报告称在 v0.21.1 与 v0.21.3 均存在。链接：https://github.com/NousResearch/hermes-agent/issues/111231
- **#22712**（CLOSED）— 聊天网关在空响应时泄露后端生命周期/错误/状态消息至用户可见渠道。链接：https://github.com/NousResearch/hermes-agent/issues/22712
- **#110690**（CLOSED）— `gateway.allow_all_users` 在 `config.yaml` 中为静默 no-op，运行时只读环境变量，访问控制键被丢弃（安全边界相关）。链接：https://github.com/NousResearch/hermes-agent/issues/110690

**P3**
- **#107098**（OPEN）— `platform_toolsets` 对合法插件平台（`hermes-<platform>`）误报 “unknown toolset”；**暂无 fix PR**。链接：https://github.com/NousResearch/hermes-agent/issues/107098
- **#97233**（CLOSED）— ACP 为命名自定义 provider 广告重复且不可往返的 ID。链接：https://github.com/NousResearch/hermes-agent/issues/97233
- **#110778**（CLOSED）— Slack adapter 对系统消息启动 agent turn，忽略 non_conversational 契约。链接：https://github.com/NousResearch/hermes-agent/issues/110778
- **#111046**（CLOSED）— 尾部 `<|eos|>` 哨兵导致合法 `MEDIA:` 附件指令被丢弃。链接：https://github.com/NousResearch/hermes-agent/issues/111046
- **#110416**（CLOSED）— 会话存储未脱敏持久化凭据（content、tool_calls、reasoning），即便 `security.redact_secrets: true`；审批流程还会再次打印。链接：https://github.com/NousResearch/hermes-agent/issues/110416
- **#110891**（CLOSED，duplicate）— ACP 模型选择器为一个 endpoint 提供两个 id，raw-key id 会向上游发送 `<provider-key>:<model>` 导致 503 model_not_found。链接：https://github.com/NousResearch/hermes-agent/issues/110891
- **#110590 / #105341**（均 CLOSED）— 网关 “possible duplicate send” 误报：前者在 Telegram 每轮均告警（流消费者未交付内容时），后者在 `streaming.enabled: false` 且 `display.interim_assistant_messages: true` 时每轮告警。两条均确认为假阳性。链接：https://github.com/NousResearch/hermes-agent/issues/110590 、 https://github.com/NousResearch/hermes-agent/issues/105341

**待处理的高优先级 PR（修复类，仍 OPEN）**
- **PR #70187** — `fix(cdp): prevent supervisor hang on SPA pages + Chrome 150 setAutoAttach crash`（P2，自 2026-07-23 起开放，已近两月）。链接：https://github.com/NousResearch/hermes-agent/pull/70187
- **PR #111022** — `fix(auth): restore Codex usage after revoked-token 401`（P2，security-boundary）。链接：https://github.com/NousResearch/hermes-agent/pull/111022
- **PR #91645** — `fix(gateway): keep launchd Standard*Path off external volumes`（P2，自 2026-08-21 起开放）。链接：https://github.com/NousResearch/hermes-agent/pull/91645

---

## 6. 功能请求与路线图信号

- **#109607** [OPEN][type/feature, question, comp/plugins, tool/memory, P3] — 社区 provider 发现：LLM-Brain 独立 MemoryProvider（作者 w00ch3a），定位本地优先、可检查的 agent 记忆，以 Markdown/TSV 为事实来源并保留来源自定义信息。与之呼应的是已开放的 **PR #68206**（`feat(hindsight): add invalidate tool — SDK path with HTTP fallback`，P3，area/memory），说明记忆插件的“可编辑/可失效”能力正在被社区推动。链接：https://github.com/NousResearch/hermes-agent/issues/109607 、 https://github.com/NousResearch/hermes-agent/pull/68206

- **#107262** [CLOSED][type/feature, comp/plugins, P3, comp/desktop] — 请求允许 Plugin Catalog 收录独立 Desktop 插件（作者 rchcorp）。今日已关闭，方向被接纳的可能性较高。链接：https://github.com/NousResearch/hermes-agent/issues/107262

- **PR #90677** [OPEN] — `feat(telegram): show live status for running subagents`（P3）。诉求是父轮结束后仍在运行的 detached subagent 在 Telegram 上不可见，用户无法区分活跃的后台工作与空闲状态。链接：https://github.com/NousResearch/hermes-agent/pull/90677

- **PR #111832** [OPEN] — `AGENTS.md states the profile-scope invariant (one process, many profiles)`（type/docs，P3，area/profiles）。这不是终端用户功能，但属于影响所有区域的架构不变式文档化，并附带 advisory CI lint，信号意义较强：维护者正在为“单进程多 profile”这一易踩坑边界建立防护。链接：https://github.com/NousResearch/hermes-agent/pull/111832

**下一版本纳入可能性判断（基于今日数据）**：多 profile 不变式文档与 CI lint（#111832）、Telegram 子智能体状态（#90677）、hindsight invalidate（#68206）均处于 OPEN 状态且作者为活跃贡献者，具备进入后续版本的路径；但因素材未提供里程碑或维护者明确表态，此处不做确定性断言。

---

## 7. 用户反馈摘要

- **不满意 — 依赖安全长期悬置**：#107356 的语气（“When are you going to address the security issues...”）反映出对 npm 包版本滞后、High 级漏洞从 12/18 持续累积的明显挫败感。
- **不满意 — 数据损坏反复出现**：#110848 作者指出同一类 state.db 损坏在 2026-08-13 与 2026-09-13 两度在生产发生，且已提供受控复现器，说明该问题对生产部署方造成了实际中断。
- **痛点 — 部署形态差异导致静默失败**：多名用户报告在容器/外部卷/非标准 PYTHONPATH 环境下出现难以定位的失败（#107719、#104256、#110690），共性是“配置被接受但被静默忽略”或“模块导入即失败”，诊断成本高。
- **痛点 — 凭据处理**：#110416 指出即使开启 `security.redact_secrets: true`，粘贴进对话的凭据（如 Telegram bot token）仍会明文持久化，且审批流程会再次显示，属于用户可直接感知的隐私/安全顾虑。
- **噪音干扰 — 误报日志**：#110590 与 #105341 均描述每轮对话被 “possible duplicate send” 警告刷屏，用户明确说明“实际并未重复发送”，属体验层面的持续干扰。
- **使用场景**：从 Issue 标签与描述可辨识出多平台部署（Telegram、Slack、Docker/Podman、macOS launchd fleet、Windows 11 主机）、多模型 provider（Bedrock/Converse、xAI Grok、OpenAI Codex、NVIDIA）以及 ACP 集成（AionUi 等客户端）等真实使用形态。
- **积极面**：多条 P2/P3 Bug 在报告后当日即被关闭（如 #111043、#110530、#111046、#110590），显示维护者对明确复现的缺陷响应速度较快。

---

## 8. 待处理积压

以下长期开放且今日仍在更新的条目建议维护者优先关注：

- **Issue #88584**（自 2026-08-17 起 OPEN，评论 102，更新至 2026-09-15）— Nous-to-Enterkey 自动化集成持续阻塞于 `cron/jobs.py` 冲突，dashboard updater 停留在旧版 Enterkey release。该线程热度最高且已持续近一个月，属跨仓库流程协调问题。链接：https://github.com/NousResearch/hermes-agent/issues/88584
- **PR #70187**（自 2026-07-23 起 OPEN，P2，needs-decision）— CDP supervisor 在 SPA 页面挂起 + Chrome 150 `setAutoAttach` 崩溃的修复，已近两个月未决。链接：https://github.com/NousResearch/hermes-agent/pull/70187
- **PR #91645**（自 2026-08-21 起 OPEN，P2）— macOS 上 `HERMES_HOME` 位于 `/Volumes` 时 launchd 因 `StandardOutPath/StandardErrorPath` 触发 EPERM 导致 gateway 无法启动。链接：https://github.com/NousResearch/hermes-agent/pull/91645
- **PR #68206**（自 2026-07-20 起 OPEN，P3，area/memory）— Hindsight `invalidate` 工具，与 #109607 的社区记忆插件诉求同向。链接：https://github.com/NousResearch/hermes-agent/pull/68206
- **Issue #107356**（自 2026-09-10 起 OPEN，type/security）— npm 依赖安全堆积，今日仍在更新但无对应 fix PR 出现在本次数据中。链接：https://github.com/NousResearch/hermes-agent/issues/107356

**健康度小结**：今日关闭率与合并率均处于高位，缺陷修复响应迅速；主要风险集中在安全依赖维护的长期欠账（#107356）与一条近两月未决的 P2 修复（#70187），另有一条超长线程的跨仓库协调问题（#88584）需要更上层决策。

---

*说明：本日报所有内容均基于所提供的 GitHub 数据，链接均取自素材中给出的 Issue/PR 编号。release notes 摘要在截断处未提供完整的破坏性变更与迁移指引，故第 2 节未做推断；PR 评论区数据在素材中未提供，相应位置未作评论数标注。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-15

## 1. 今日速览

今日 PicoClaw 活跃度**中等偏低但方向明确**:无新版本发布,过去 24 小时仅 1 条 Issue 更新、3 条 PR 更新。当日实质性动作集中在 PR #3380(mesh 可观测性,已关闭)与 PR #3379(v0.10.0 sprint 设计文档,已关闭),显示 v0.10.0 规划正在收敛为可实施文档。唯一活跃 Issue #3365 暴露了 QQ 渠道 401 鉴权失败的第三方依赖兼容问题,已被标记 `stale`。整体看,项目正处于冲刺规划与依赖治理阶段,而非功能交付高峰。

---

## 2. 版本发布

无新版本发布。

需注意:Issue #3365 中用户报告 nightly build 的 `--version` 显示为 `0.3.1`,而社区 PR 已在讨论 `v0.10.0` sprint 计划,版本号口径存在明显不一致,建议维护者澄清 nightly 与正式版本的版本标识策略。

---

## 3. 项目进展

今日关闭 2 条 PR、1 条仍待合并:

- **PR #3380 [CLOSED] `feat(mesh): observability — peer conns/score/bandwidth, activity feed, SSE events`(Track 63)**
  [sipeed/picoclaw PR #3380](https://github.com/sipeed/picoclaw/pull/3380)
  为 mesh 网络增加了成体系的可观测能力:`PeerStatus` 新增 `conns[]`(remote_multiaddr、direction、transport 识别、stream 数量、opened_at)、`latency_ms`(基于 peerstore `LatencyEWMA`)、`score`(`PeerScoreStore`)、`last_seen`,并涉及 libp2p 侧改动与 activity feed / SSE 事件。这是当日技术含量最高的一条 PR,直接提升 P2P 运维可见性。该 PR 状态为 CLOSED 而非明确 MERGED,是否实际合入主干需维护者确认。

- **PR #3379 [CLOSED] `docs: v0.10.0 sprint plan`**
  [sipeed/picoclaw PR #3379](https://github.com/sipeed/picoclaw/pull/3379)
  将 `.todo.md` 草稿深化为可实施设计文档 `docs/design/v0.10.0-sprint.md`,覆盖 Tracks 60–66,明确排序为 **60 → 65 → 61 → 62 → 63 → 64 → 66**,每条 track 对应一个 PR。这是路线图治理类贡献,价值在于把规划落地为可逐个执行的 PR 序列。

**整体推进评估**:今日推进以"打地基"为主——一条 mesh 可观测性能力 + 一份 sprint 执行蓝图,未触及核心对话/渠道功能。相对项目体量,单日增量属常规水平。

---

## 4. 社区热点

今日社区讨论温度整体偏低,评论数据稀缺:

- **Issue #3365**(2 条评论、👍 1):当日唯一有多条评论与点赞的条目,是最热讨论点。
  [sipeed/picoclaw Issue #3365](https://github.com/sipeed/picoclaw/issues/3365)
  诉求核心是**渠道可用性**:QQ 渠道完全无法使用,用户已完成较深入的依赖栈排查。

- **PR #3380**:当日唯一更新(2026-09-15)的 PR,评论数未提供(undefined)。
  [sipeed/picoclaw PR #3380](https://github.com/sipeed/picoclaw/pull/3380)

**解读**:社区注意力集中在"可用性缺陷"与"基础设施能力"两端,中间层的常规功能讨论缺席。三条 PR/Issue 均无显著互动量,说明当前社区参与度有限。

---

## 5. Bug 与稳定性

**严重程度:高(渠道功能完全不可用)**

- **Issue #3365 [OPEN] [stale] QQ channel fails with 401 "Authorization参数格式错误"**
  [sipeed/picoclaw Issue #3365](https://github.com/sipeed/picoclaw/issues/3365)
  - 作者:crazysarah | 创建 2026-09-04 | 更新 2026-09-14
  - 环境:Orange Pi 3B(RK3566,aarch64)、picoclaw nightly(`--version` 报 `0.3.1`)、`botgo v0.2.1`(当时最新)、resty >= v2.17
  - 现象:QQ 渠道返回 401 "Authorization参数格式错误"
  - 根因定位(据标题):`botgo v0.2.1` 与 `resty >= v2.17` 的兼容性问题
  - **是否已有 fix PR:无。** 今日无任何针对该 Issue 的修复 PR。
  - 次要风险:该 Issue 已被标记 `stale`,但问题描述含完整环境与根因分析,属于高质量报告;若因 stale 机制被自动关闭,可能造成真实用户流失。

其余无新增 Bug、崩溃或回归报告。

---

## 6. 功能请求与路线图信号

**可能纳入下一版本的信号:**

- **Keenable 作为 `web_search` provider(PR #3370,OPEN,待合并)**
  [sipeed/picoclaw PR #3370](https://github.com/sipeed/picoclaw/pull/3370)
  作者 ilya-bogin-keenable,创建 2026-09-07,更新 2026-09-15。亮点是**开箱可用**:设置 `tools.web.keenable.enabled` 为 `true` 即可调用 Keenable 公共端点(`POST /v1/search/pub...`),全新安装无需 API key。该 PR 是当日唯一待合并项,且仍在被更新(09-15),具备近期合入的可能性。若合入,将降低 web 搜索功能的接入门槛。

- **v0.10.0 路线图(Tracks 60–66)**
  依据 PR #3379 的排序 **60 → 65 → 61 → 62 → 63 → 64 → 66**,Track 63(mesh 可观测性)已由 PR #3380 落地,说明路线图正被逐 track 兑现。其余 track 的具体内容在提供的数据中未展开,无法进一步判断。

---

## 7. 用户反馈摘要

可提炼的真实用户信号均来自 Issue #3365:

- **使用场景**:在 Orange Pi 3B(RK3566,aarch64)等 ARM 单板设备上部署 picoclaw nightly,接入 QQ 渠道。属于典型的"轻量硬件 + 国内 IM 渠道"边缘部署场景。
- **痛点**:QQ 渠道 401 鉴权失败导致功能完全不可用,且用户已自行完成从 botgo 到 resty 的依赖版本排查,说明问题对专业用户而言也需要相当的调试成本。
- **不满意点**:依赖上游 `botgo` 与 `resty` 的版本兼容性由用户承担,项目侧未见版本约束(如 pin/patch)说明。
- **满意/正向信号**:该 Issue 获得 1 个 👍,表明有其他用户遇到或认同同一问题。
- 今日无其他评论可提炼。

---

## 8. 待处理积压

提醒维护者关注以下条目:

- **Issue #3365** — `[stale]` 标记 + 高严重度渠道故障 + 已有明确根因 + 无 fix PR,**不建议按 stale 流程关闭**。
  [sipeed/picoclaw Issue #3365](https://github.com/sipeed/picoclaw/issues/3365)
  建议动作:确认 botgo/resty 版本矩阵并给出 pin 方案,或在上游修复前提供 workaround。

- **PR #3370** — `[stale]`,创建已 8 天(09-07 → 09-15),最近仍有更新但评论数未知、👍 0,存在被 stale 机制误伤的风险。
  [sipeed/picoclaw PR #3370](https://github.com/sipeed/picoclaw/pr/3370)
  建议动作:明确是否接受第三方搜索 provider,避免贡献者流失。

- **PR #3380 与 PR #3379** — 均标记 CLOSED 但未明示是否 MERGED。若为未合并关闭,Track 63 与 sprint 文档的产出将无法进入主干,建议澄清状态。
  [PR #3380](https://github.com/sipeed/picoclaw/pull/3380) · [PR #3379](https://github.com/sipeed/picoclaw/pull/3379)

---

**数据说明**:本报告仅基于 2026-09-15 提供的 PicoClaw GitHub 数据生成;PR #3370、#3379、#3380 的评论数为 `undefined`、点赞为 0,故相关互动度判断受限。链接按提供信息保留原仓库路径。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-15

## 1. 今日速览

过去 24 小时 NanoClaw 保持高强度开发节奏：50 条 PR 更新（33 条已合并/关闭、17 条待合并），4 条 Issue 更新（2 新开、2 关闭），无新版本发布。今日主线是 **credential gateway 契约重构**（#3815/#3816/#3817/#3818 系列）与 **Mattermost/Telegram 通道修复**（#3777–#3809、#3820/#3821）两条并行工作流。稳定性方面新增两个高优先级开放 Issue（#3814 错误文本泄漏、#3811 数据库锁竞争），均尚无对应 fix PR。整体判断：**活跃度很高，但新暴露的公开通道泄漏与 DB 健壮性问题需要在下一版本前优先处理**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日关闭/合并的 PR 集中在两个方向：

**Mattermost 通道与 setup 可靠性（glifocat）**
- #3807 [CLOSED] 暴露已认证的 WebSocket liveness 与 setup 回调证据，供 Mattermost 验证器使用 — [链接](https://github.com/nanocoai/nanoclaw/pull/3807)
- #3809 [CLOSED] 让 Mattermost setup 在没有 jq 的环境下也能解析响应、校验服务器设置并打开 owner DM — [链接](https://github.com/nanocoai/nanoclaw/pull/3809)
- #3778 [CLOSED] 对 SiteURL/WebsocketURL/bot identity 校验后做一次原子化设置写入 — [链接](https://github.com/nanocoai/nanoclaw/pull/3778)
- #3779 [CLOSED] 重启后校验替换主机（PID、新实例、启动时间、通道就绪）— [链接](https://github.com/nanocoai/nanoclaw/pull/3779)
- #3777 [CLOSED] 连接由运营方自管的 Mattermost 服务器，并将评估服务器移入开发 fixtures — [链接](https://github.com/nanocoai/nanoclaw/pull/3777)

**setup 一致性与凭据泄漏防护（glifocat）**
- #3805 [CLOSED] 在 skill 执行日志、输出、错误事件与公开结果中脱敏解析后的密钥 — [链接](https://github.com/nanocoai/nanoclaw/pull/3805)
- #3806 [CLOSED] 原子化提交相关环境变量，避免重复或写入失败导致配置不一致 — [链接](https://github.com/nanocoai/nanoclaw/pull/3806)

**Telegram 本地 Bot API 支持（gabi-simons）**
- #3820 [CLOSED] 通道自身的三处 fetch（`getMe`/`sendMessage`/`getChat`）改为遵循 `TELEGRAM_API_BASE_URL`，与 adapter 行为一致 — [链接](https://github.com/nanocoai/nanoclaw/pull/3820)
- #3821 [CLOSED] add-telegram skill 的凭据检查不再硬编码 `https://api.telegram.org` — [链接](https://github.com/nanocoai/nanoclaw/pull/3821)

**进度评估**：通道层（Mattermost、Telegram）的安装/验证链路被系统性加固，尤其是密钥脱敏与原子写入属于可感知的质量提升。凭据网关重构系列已进入 PR 阶段但尚未合并，属于"已铺轨、未通车"状态。

---

## 4. 社区热点

数据中所有 PR/Issue 的 👍 均为 0，评论数未提供（PR 显示 `undefined`），因此以"今日集中推进的主题"作为热点判断依据：

1. **凭据网关重构四连发（zvi-fried，均为 2026-09-15 新开）** — 构成一条完整的技术栈：
   - #3815 集中化凭证网关契约与人工审批生命周期 — [链接](https://github.com/nanocoai/nanoclaw/pull/3815)
   - #3816 将 OneCLI 抽取为可安装 skill — [链接](https://github.com/nanocoai/nanoclaw/pull/3816)
   - #3817 新增 Iron Proxy gateway skill（Iron Control 作为可选网关）— [链接](https://github.com/nanocoai/nanoclaw/pull/3817)
   - #3818 setup 中新增网关选择，且不改变 provider 登录流程 — [链接](https://github.com/nanocoai/nanoclaw/pull/3818)

   **背后诉求**：把"凭据网关"从硬编码能力变成可插拔的 seam，让第三方（如 Iron Proxy）能作为一等公民接入，同时保持 OneCLI 为默认、现有安装的网关选择不被破坏——这是一次明显的扩展性投资。

2. **Mattermost 系列在关闭前持续更新至 09-15**（#3777/#3778/#3779/#3780/#3807/#3809），说明该通道的 setup 验证是被反复打磨的重点，诉求是"企业自管服务器场景下安装即可信"。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | 说明 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#3814 OPEN](https://github.com/nanocoai/nanoclaw/issues/3814) | 新开 09-14 | `deliverErrorResult`（`container/agent-runner/src/poll-loop.ts`）将 SDK 原始错误文本原样投递到触发该轮次的任意通道，未检查目标是否为公开通道，容器错误可能泄漏到公共频道 | 无 |
| 🔴 高 | [#3811 OPEN](https://github.com/nanocoai/nanoclaw/issues/3811) | 新开 09-14 | 中心 DB（`src/db/compose.ts`）以 WAL 模式打开但未设 `busy_timeout`，任何瞬时锁竞争都会直接抛错，被误判为数据库损坏 | 无 |
| 🟠 中 | [#3660 CLOSED](https://github.com/nanocoai/nanoclaw/issues/3660) | 已关闭 09-14 | Session SQLite 数据库变为只读，阻断所有消息投递（Discord 等通道无法发送出站消息） | 已关闭 |
| 🟡 低 | [#3706 CLOSED](https://github.com/nanocoai/nanoclaw/issues/3706) | 已关闭 09-14 | `ncl groups config add-mount --container <绝对路径>` 会静默生成双重嵌套的错误路径（`--help` 未约束必须为相对路径） | 已关闭 |

**稳定性观察**：今日新开的两个高严重度 Issue 都指向"缺乏防御性检查"这一模式——一个是安全边界（公开通道），一个是并发边界（DB 锁）。两者均无 fix PR，建议优先排期。

---

## 6. 功能请求与路线图信号

- **可插拔凭据网关**：由 #3815–#3818 构成。判断该能力**很可能进入下一版本**：四份 PR 同日开出、覆盖契约层、skill 层、setup 层与具体实现（Iron Proxy），且明确承诺"OneCLI 保持默认、现有安装不变"，属于向后兼容的渐进式改动。
- **本地 Bot API 服务器支持**：由 #3820/#3821 落地，已合并/关闭，对应 backlot 的 Telegram façade 场景（引用了 nanocoai/backlot#56），说明多环境（非生产端点）测试是真实需求。
- **运营方自管 Mattermost**：#3777 明确将服务器选择显式化并提供官方部署指引。

---

## 7. 用户反馈摘要

今日可见的 Issue 均由 DawoudIO 提交，反馈信号集中且具体：

- **不满意**：Session DB 变为只读导致"所有消息投递被阻断"，Discord 等通道无法发出站消息，问题在报告中约 12 小时内持续发生（#3660）——属于影响面最大的实际故障。
- **不满意**：CLI 参数缺乏约束与校验，`--container` 传入绝对路径时**静默**产生错误结果，用户需要自行排查（#3706）。
- **担忧**：容器错误的原始文本可能被投递到公开频道，安全边界缺失（#3814）。
- **担忧**：中心 DB 的瞬时锁竞争被当成损坏抛出，用户会收到误导性错误（#3811）。

**共性痛点**：用户期望"失败要显式、要安全、要可恢复"，而非静默错误或误导性报错。

---

## 8. 待处理积压

- [#3780 OPEN](https://github.com/nanocoai/nanoclaw/pull/3780) — Mattermost 运行中 bot 与服务器回调验证。创建于 2026-09-12，更新至 09-15，是 Mattermost 系列中唯一仍未合并的核心 PR。
- [#3689 OPEN](https://github.com/nanocoai/nanoclaw/pull/3689) — `fix(update): snapshot symlinked mutable roots`（linhongyu510，创建于 2026-08-31，更新至 09-15，关闭 #3684）。已积压约 15 天，涉及符号链接根目录的快照行为。
- [#3814](https://github.com/nanocoai/nanoclaw/issues/3814) 与 [#3811](https://github.com/nanocoai/nanoclaw/issues/3811) — 今日新开的高严重度 Issue，尚无 fix PR，应避免其沉入积压。

**提醒**：另有 17 条 PR 处于待合并状态（数据仅展示评论数最多的 15 条），合并队列存在一定堆积，建议维护者关注 review 吞吐。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-15

## 1. 今日速览

过去 24 小时项目活跃度集中在 Issue 侧：共 4 条 Issue 更新，全部为新开/活跃状态，无关闭；Pull Request 通道零活动（0 条更新、0 条合并/关闭），无新版本发布。热点集中在 `web_search` 相关方向——两篇关于 Firecrawl 与 Brave/SearXNG 搜索链路的讨论（#997、#998）同日由同一作者提出，另有一条 Firecrawl 自托管端点可配置的增强请求（#993）和一条新增 `grok-cli` provider 的功能请求（#975）在今日被重新激活。整体来看，项目处于"需求输入活跃、代码产出停滞"的状态：社区在功能扩展和搜索后端抽象上持续输出诉求，但今日无任何 PR 或 Release 落地，维护侧响应节奏值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 Pull Request，代码主线无推进。项目今日在实现层面的向前迈进为零，所有讨论仍停留在需求与方案层面（详见第 6 节）。

## 4. 社区热点

今日评论数最高的两条 Issue 并列（各 2 条评论）：

- **[#993] [enhancement] feat: make Firecrawl search endpoint configurable for self-hosted instances** — 作者 Crymfox，创建于 2026-08-24，更新于 2026-09-14，2 条评论。
  https://github.com/nullclaw/nullclaw/issues/993
  诉求：`src/tools/web_search_providers/firecrawl.zig` 中 endpoint 被硬编码为 `https://api.firecrawl.dev/v1/search`，导致自托管 Firecrawl 实例无法接入。这是一个范围小、改动明确的增强请求。

- **[#975] Add grok-cli provider (run Grok via the grok CLI's login session, unmetered)** — 作者 yanggf8，创建于 2026-07-11，更新于 2026-09-14，2 条评论。
  https://github.com/nullclaw/nullclaw/issues/975
  诉求：新增 `grok-cli` provider kind，复用 nullclaw 已用于 `claude-cli`、`codex-cli`、`gemini-cli` 的 subprocess 模式，通过本地 `grok` CLI 的登录会话（grok.com 订阅）调用 Grok，从而实现不额外计费的使用路径。

另有两条同日新开、暂无评论的 Issue（#997、#998），均由 iamalanlui 提出，围绕 `web_search` 的付费/预付费搜索链路展开，并在正文中推广其自建服务 apifare（原 apipay）。详情见第 7 节。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

需要说明的是，Issue #998 摘要提及 **#871 是一个 bug 线程**（DuckDuckGo 默认搜索在弱设备上与 Brave/SearXNG 的对比问题），但该线程并非今日新报，且本日数据中未包含其状态细节，此处仅作背景标注，不构成今日稳定性事件。

## 6. 功能请求与路线图信号

今日共 4 条开放功能/需求类 Issue，按可落地性排序：

1. **Firecrawl 自托管端点可配置（#993）** — 改动面最小、目标明确（解除硬编码 endpoint），属于典型的 good-first-issue 型增强。尽管创建于 8 月 24 日，今日仍有更新与讨论，可纳入下一版本的优先级较高。
   https://github.com/nullclaw/nullclaw/issues/993

2. **新增 `grok-cli` provider（#975）** — 复用项目已有的 CLI provider 模式，架构上契合现有 `claude-cli`/`codex-cli`/`gemini-cli` 设计，实现路径清晰；该 Issue 自 7 月 11 日创建以来持续活跃，是候选路线图项。
   https://github.com/nullclaw/nullclaw/issues/975

3. **预付费搜索中转（#997、#998）** — 涉及引入第三方付费搜索/MCP 计费链路，方向与项目既有的 web_search provider 体系相关，但提案方带有明确的服务推广动机，需维护者评估中立性与依赖风险。

**判断**：上述四项今日均无对应 PR，能否进入下一版本尚无代码层面证据，仅能依据改动成本与既有架构契合度做推断。

## 7. 用户反馈摘要

- **自托管场景受阻**（#993）：用户希望将 Firecrawl 指向自建实例，当前硬编码 endpoint 直接阻断了这一使用方式。
- **成本敏感的使用诉求**（#975）：用户希望借由本地 CLI 的订阅登录会话调用 Grok，以规避额外的 API 计费——延续了项目中 `*-cli` provider 降低使用成本的一贯模式。
- **web_search 出站依赖与成本**（#997、#998）：用户指出 NullClaw 的 `web_search` 仍需 Brave key 或 SearXNG 中转才能让 agent "离开本机"，并据此推荐其自建服务 apifare（原 apipay，链接 https://apipay.fly.dev/?origin=human-referral ），主张以预付费 MCP 计量 + 单一 bearer 凭据替代现有方案。两篇均标注 0 评论、0 👍，属于尚未获得社区响应的单方提案，且含推广性质，建议维护者谨慎评估。

## 8. 待处理积压

- **[#975] grok-cli provider** — 创建于 2026-07-11，至今已逾两个月仍未落地，且无关联 PR。是本日数据中积压时间最长的重要功能请求，建议维护者明确表态（接受/拒绝/需设计讨论）。
  https://github.com/nullclaw/nullclaw/issues/975
- **[#993] Firecrawl 自托管端点可配置** — 创建于 2026-08-24，已积压约三周，今日更新表明仍有用户关注，改动成本低，适合优先处理。
  https://github.com/nullclaw/nullclaw/issues/993
- **#871（Weak device 上 DDG 默认 vs Brave/SearXNG 的 bug 线程）** — 本日数据中未提供其当前状态与链接细节，仅由 #998 提及，建议维护者核查其是否仍在开放且需要跟进。

**健康度提示**：今日 Issues 与 PR 的活动比为 4:0，社区输入持续而代码输出为零；叠加两条超过三周的未决功能请求，建议关注响应时效，避免低成本的明确增强（如 #993）长期悬置。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-15

## 1. 今日速览

过去 24 小时 IronClaw 活跃度处于低位：无新版本发布，无 PR 更新（待合并 0、已合并/关闭 0），仅 1 条 Issue 更新且为机器人式日常报告（#8100，作者 pranavraja99，0 评论、0 👍）。今日无任何代码推进或社区讨论发生，项目状态可视为「静默维护期」。唯一的信号来自每日失败分类报告，其内容指向 officeqa 基准测试中存在成规模的非通过任务，值得后续跟踪。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，无待合并 PR，项目在代码层面无可见推进。

## 4. 社区热点

今日唯一更新的 Issue 为：

- [#8100 [OPEN] Daily ironclaw failure taxonomy — 2026-09-14](nearai/ironclaw Issue #8100)
  - 作者：pranavraja99｜创建：2026-09-14｜更新：2026-09-14｜评论：0｜👍：0
  - 摘要：对 2026-09-14 的失败任务进行分类，其中提及 officeqa 套件有 43 个非通过（non-pass）任务，并附有对应 benchmark 运行链接。

该 Issue 虽被列为「活跃」，但实际评论数为 0，说明尚无人工讨论参与。其价值在于提供了基准测试失败面的结构化入口，而非社区争议或诉求焦点。

## 5. Bug 与稳定性

今日数据中未包含独立的 Bug、崩溃或回归报告。唯一与稳定性相关的是 #8100 中提到的 officeqa 套件 43 个非通过任务（[Issue #8100](nearai/ironclaw Issue #8100)）。由于摘要被截断，无法确认这些失败的具体类别、严重程度，也无法判断是否已有 fix PR。当前无任何关联修复 PR，建议维护者优先补齐该分类报告的可读信息。

## 6. 功能请求与路线图信号

今日无用户提出的新功能需求，亦无相关 PR 可供判断版本纳入可能性。

## 7. 用户反馈摘要

今日 Issue #8100 无评论，无可提炼的真实用户痛点、使用场景或满意/不满意表达。该条目更接近自动化质量跟踪，而非用户反馈渠道。

## 8. 待处理积压

今日数据未提供长期未响应 Issue 或 PR 的具体清单，无法据此列出积压项。需提示的是，#8100 的失败分类报告若持续以零评论状态堆积，可能形成「有数据、无跟进」的隐性积压，建议维护者建立对 benchmark 失败分类的周期性响应机制。

---

**健康度提示**：今日所有核心指标（版本、PR、评论、反应）均为零，唯一活动为一条自动化风格的失败分类 Issue，且其内容揭示了 officeqa 套件 43 个非通过任务这一未解释信号。项目当前无阻塞性风险证据，但连续静默与基准失败缺少跟进，是后续值得观察的两个方向。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-15

> 数据来源：github.com/netease-youdao/LobsterAI
> 统计窗口：过去 24 小时

---

## 1. 今日速览

今日项目活跃度**极高**，呈现明显的版本发布前冲刺特征。过去 24 小时共 30 条 PR 发生更新，其中 20 条已合并/关闭、10 条待合并，核心工作集中在 OpenClaw 兼容性修复与运行时构建流程。Issues 侧更新 3 条（1 开 2 关），2 条关闭项均为 3 月创建的 stale 议题，说明维护者今日进行了历史积压清理。值得注意的是一批来自 3 月 31 日的旧 Issue/PR 在同一日集中关闭，且当日出现名为 `Release/2026.9.15` 的发布分支 PR，项目很可能正处于一次大版本发布节点。

---

## 2. 版本发布

今日**无新版本发布**（Releases：0）。不过 PR [#2687](https://github.com/netease-youdao/LobsterAI/pull/2687) `Release/2026.9.15` 已合并关闭，覆盖 `area: renderer, build, docs, main, openclaw, cowork` 全部主要模块，可视为下一版本即将落地的信号。

---

## 3. 项目进展

今日合并/关闭的 20 条 PR 中，主line 围绕 **OpenClaw v2026.8.1 升级后的兼容性与稳定性修复** 展开：

**构建与依赖链路**
- [#2686](https://github.com/netease-youdao/LobsterAI/pull/2686) `fix(openclaw): pack and stage local workspace deps in runtime build` — 修复 `pnpm pack` 将 `workspace:*` 依赖重写为registry 版本、导致本地补丁构建丢失的问题，改为从源码打包生产工作区闭包。
- [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685) `fix(openclaw): preserve patched workspace runtime dependencies` — 修复 `npm run electron:dev:openclaw` 因缺失 `prepareReplayMessages` 导出而失败的问题（补丁代码与未打补丁的 npm release 混合所致）。
- [#2683](https://github.com/netease-youdao/LobsterAI/pull/2683) `feat: openclaw compatibility repair` — 兼容性修复整合。

**会话与推理链路**
- [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684) `fix(openclaw): prevent heuristic output budget starvation` — 修复长会话下字符估算将输出 tokens 从 8192 误降至 1、导致推理协议成功但无正文的问题。
- [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682) `fix(openclaw): validate historical transcript replay` — 为历史回放入口增加字段校验，修复旧任务历史内容块缺失 ID / 类型错误导致任务反复无法继续。
- [#2678](https://github.com/netease-youdao/LobsterAI/pull/2678) `fix(openclaw): preserve compaction summary format and audit facts` — 修复长会话压缩摘要模板冲突与标题/标识符丢失。

**启动与状态恢复**
- [#2679](https://github.com/netease-youdao/LobsterAI/pull/2679) `feat(openclaw): add compatibility repair for post-upgrade gateway state` — 升级后备份引擎数据、运行官方 OpenClaw doctor 修复、恢复损坏的记忆索引与内置插件。
- [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681) `fix(openclaw): recover invalid legacy dreaming state at startup` — 修复旧版 Memory Core `memory/.dreams/` JSON 解析失败阻断网关启动的问题。
- [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) `fix(openclaw): avoid POPO SDK loading races` — 修复 POPO 2.1.13 触发的 `ERR_REQUIRE_ESM_RACE_CONDITION` 插件加载竞态。

**仍待合并（OPEN）**
- [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) `fix(openclaw): preserve model policy during config sync` — 保留迁移结果、避免配置反复写入下发。
- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) `chore(deps-dev): bump the electron group` — electron / electron-builder 依赖升级，自 4 月 2 日起长期挂起。

此外，3 月的两条古老功能 PR 于今日关闭：[#1142](https://github.com/netease-youdao/LobsterAI/pull/1142)（技能管理页「创建技能」快捷入口，跳转 Cowork 并预填 skill-creator）与 [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143)（修复创建 Agent 时默认图标未保存导致侧栏 🦞 与「我的 Agent」页 🤖 展示不一致）。

**整体评估**：今日项目在 OpenClaw 兼容性这一关键路径上推进显著，单日修复覆盖构建、推理、会话回放、启动恢复四个层面，健康度向好；但修复高度集中且全部来自少数几位作者，存在知识集中风险。

---

## 4. 社区热点

需客观说明：今日展示的 Issues/PR **评论数普遍缺失或为 undefined**，👍 均为 0，因此无法从数据侧识别出真正的讨论热度峰值。以下为该窗口内**更新最集中**的条目：

1. [#2342 [OPEN] 左下角广告可以彻底关闭吗](https://github.com/netease-youdao/LobsterAI/issues/2342) — 评论 2，唯一仍处 OPEN 的 Issue，且为 `stale`。
2. [#1149 [CLOSED] 为 coworkMemoryExtractor 补充 Vitest 单元测试](https://github.com/netease-youdao/LobsterAI/issues/1149) — 评论 2。
3. [#1151 [CLOSED] 修复 buildOpenAIChatCompletionsURL 处理 Google Gemini /v1 路径时的 URL 拼接错误](https://github.com/netease-youdao/LobsterAI/issues/1151) — 评论 2。
4. [#2679](https://github.com/netease-youdao/LobsterAI/pull/2679) / [#2678](https://github.com/netease-youdao/LobsterAI/pull/2678) 等 OpenClaw 修复 PR — 多个 `area` 标签叠加，均为当日创建当日关闭。

**诉求分析**：今日热点的本质不是社区讨论，而是**维护侧集中清理**——3 月存量 Issue/PR 被打上 `stale` 后统一关闭，同日大量 OpenClaw 修复被快速合并。这提示项目此前的积压周期较长（约 5.5 个月），而今日的批量动作更像是发布前的一次全面收口，而非自然增长的社区互动。

---

## 5. Bug 与稳定性

按影响面排序（今日报告/修复的缺陷）：

| 严重度 | 问题 | 状态 | 关联 |
|---|---|---|---|
| 高 | 长会话输出额度被字符估算误降至 1 token，推理成功但无正文，重复续答无法恢复 | 已有 fix | [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684)（已关闭） |
| 高 | 旧版 Memory Core `memory/.dreams/` JSON 解析失败直接阻断网关启动 | 已有 fix | [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681)（已关闭） |
| 高 | 历史内容块缺失 ID / 字段类型错误 / 为空时，OpenClaw 请求准备阶段抛错，任务反复无法继续 | 已有 fix | [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682)（已关闭） |
| 中 | 升级后 POPO 2.1.13 同步 require SDK 模块触发 `ERR_REQUIRE_ESM_RACE_CONDITION`，插件加载失败 | 已有 fix | [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664)（已关闭） |
| 中 | `electron:dev:openclaw` 因缺失 `prepareReplayMessages` 导出而启动失败 | 已有 fix | [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685)（已关闭） |
| 中 | 运行时构建丢弃本地补丁依赖（`pnpm pack` 重写 workspace 依赖） | 已有 fix | [#2686](https://github.com/netease-youdao/LobsterAI/pull/2686)（已关闭） |
| 中 | 长会话压缩摘要模板冲突、标题与标识符丢失 | 已有 fix | [#2678](https://github.com/netease-youdao/LobsterAI/pull/2678)（已关闭） |
| 中 | 升级后请求失败时「技术详情」丢失异常摘要 | 已有 fix | [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677)（已关闭） |
| 中 | 配置同步删除 `agents.defaults.modelPolicy` 与迁移标记，导致配置反复写入下发 | 待合并 | [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680)（OPEN） |
| 低 | Gemini `/v1` 结尾 baseURL 拼接 off-by-one，生成 URL 缺 `/` 分隔符 | 已修复关闭 | [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151)（CLOSED） |
| 低 | 创建 Agent 未填图标时侧栏与「我的 Agent」页图标不一致 | 已修复关闭 | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143)（CLOSED） |

**共性判断**：今日缺陷几乎全部与 OpenClaw v2026.8.1 升级相关，属于版本迁移引入的回归，而非长期潜伏问题。修复响应速度快（多数当日创建当日关闭），稳定性风险整体可控；唯一未闭环的是 [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) 的配置同步问题。

---

## 6. 功能请求与路线图信号

今日明确的功能请求来自 Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)：用户希望在 `v2026.7.15` 中彻底关闭左下角弹出的广告，并指出设置项中不存在相关开关。该请求**目前仍是 OPEN 状态且被标记 stale**，无对应 PR，纳入下一版本的可能性偏低，但作为体验类诉求（干扰性弹窗 + 缺少开关）值得产品侧评估。

其他功能类 PR 均已关闭：[#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) 的「技能管理页快捷创建技能」属于 UX 增强，虽于今日关闭，但未见其纳入 `Release/2026.9.15` 的证据，暂不能判定已进主线。

路线图层面的明确信号是 `Release/2026.9.15` 本身——由 OpenClaw 兼容修复、构建链路加固、启动恢复三块构成，说明下一版本的主题是**升级可靠性与运行时正确性**，而非新功能扩张。

---

## 7. 用户反馈摘要

从可用的 Issue 正文与 PR 描述中提炼：

- **对升级引入的变化敏感**：用户 PYUDNG 在 [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) 中明确表示「在更新到这个版本之前还没有遇到过这种广告」，说明广告是在某次升级后才出现的，用户对版本更新带来的非预期界面变化较为抵触。
- **弹窗可关闭但不彻底**：用户承认「可以点叉子关掉」，但诉求是「以后就彻底不弹出」，且已主动浏览设置项寻找开关未果——反映产品在可配置性上存在缺口。
- **工程师侧痛点明确**：多个 PR 描述直接引用用户日志（如 [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677)「来自两份用户日志的异常详情展示问题」、[#2681](https://github.com/netease-youdao/LobsterAI/pull/2681)「来自用户网关启动日志排查」、[#2682](https://github.com/netease-youdao/LobsterAI/pull/2682)「来自用户反馈」），表明升级后确有真实用户遭遇网关启动失败、任务中断、错误详情缺失等问题，且这些问题在日志层面可定位。
- **记忆系统是敏感模块**：[#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) 指出 `coworkMemoryExtractor.ts` 作为记忆系统核心「没有任何测试覆盖」，任何正则修改或逻辑调整都有引入回归的风险——这是来自贡献者的结构性担忧，而非终端用户抱怨，但指向长期质量隐患。

整体上，用户满意度数据（👍 全为 0、评论数稀少）不足以支撑量化判断；可观察到的是**痛点集中在升级后的稳定性与界面可配置性**两个方向。

---

## 8. 待处理积压

- **[#2342 [OPEN] [stale] 左下角广告可以彻底关闭吗](https://github.com/netease-youdao/LobsterAI/issues/2342)** — 创建于 2026-07-15，已逾 2 个月仍为 OPEN 且被标记 stale，无关联 PR。这是当前唯一活跃未闭环的 Issue，建议产品侧明确回应（是设计如此、还是提供开关、或计划移除）。
- **[#1277 [OPEN] chore(deps-dev): bump the electron group across 1 directory with 2 updates](https://github.com/netease-youdao/LobsterAI/pull/1277)** — dependabot 自动 PR，创建于 2026-04-02，已挂起超 5 个月，涉及 electron 与 electron-builder 两项核心依赖升级。该 PR 已在 2026-09-15 更新，说明仍有活动，但长期未合并会持续累积安全与兼容性风险。
- **[#2680 [OPEN] fix(openclaw): preserve model policy during config sync](https://github.com/netease-youdao/LobsterAI/pull/2680)** — 今日新开，是当日 OpenClaw 修复批次中唯一未合并项，处理配置反复写入下发的问题。建议随 `Release/2026.9.15` 一并评估，避免发布后再次出现配置抖动。

---

**健康度小结**：今日修复效率高、覆盖全面，主线处于发布收口期；但活动高度集中于少数作者，且存在 Electron 依赖升级长期挂起、唯一活跃 Issue 被 stale 却无回应两项待办，建议维护者在发布后安排一次面向社区诉求的响应窗口。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-15

## 1. 今日速览

Moltis 今日整体活跃度处于低位：过去24小时无新 Issue、无 Issue 关闭、无新版本发布，社区讨论侧无任何新增信号。唯一的仓库动态是一条待合并 PR（#1269），由 penso 提交，针对 OAuth/PKCE 测试的时序竞态进行修复。从项目健康度看，今日没有引入新的回归或用户报告问题，但也缺乏功能推进与社区互动，属于以稳定性维护为主的平静日。

- 变更总量：Issues 0 条，PR 1 条（OPEN），Releases 0 个
- 合并/关闭：无
- 唯一活跃作者：penso

## 2. 版本发布

今日无新版本发布，本节不适用。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目主干代码未发生可见推进。

唯一进行中的工作为 [PR #1269](https://github.com/moltis-org/moltis/pull/1269)（OPEN，创建并更新于 2026-09-15，作者 penso）：

- 标题：`test(oauth): remove success-popup timing race`
- 摘要要点：
  - 修复 `moltis-064r`，该问题在 CI 运行 [actions/runs/32917698826/jobs/98024870973](https://github.com/moltis-org/moltis/actions/runs/32917698826/jobs/98024870973) 中被报告。
  - 在 PKCE 成功与断开连接测试中，改为等待主页面持久的认证状态，而不是依赖页面/关闭事件。
- 影响判断：该 PR 属于测试基础设施的稳定性修复，指向 OAuth/PKCE 流程测试中的时序竞态，若合并将降低 CI 偶发失败率，但不改变产品功能面。

## 4. 社区热点

今日无高讨论量条目。唯一 PR #1269 的评论数据在数据源中标记为 `undefined`，点赞数为 0，无反应或讨论热度。

- 观察：社区互动为零，PR 完全由维护者/贡献者单向推进，尚无可分析的诉求信号。

## 5. Bug 与稳定性

今日无用户报告的 Bug、崩溃或回归 Issue（Issues 更新 0 条）。

与稳定性相关的唯一事项来自 CI 侧：

- **严重程度：中（仅影响测试/CI，不影响生产运行）** — OAuth PKCE 成功弹窗的时序竞态，被记录为 `moltis-064r`，在 [CI job 98024870973](https://github.com/moltis-org/moltis/actions/runs/32917698826/jobs/98024870973) 中暴露。
- 是否已有 fix PR：**已有** — [PR #1269](https://github.com/moltis-org/moltis/pull/1269)（OPEN，待合并）。

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求（Issues 0 条）。

结合现有 PR 判断：PR #1269 不涉及新功能，仅为测试可靠性改进，因此无法从今日数据推断任何下一版本的功能走向。路线图信号今日为空。

## 7. 用户反馈摘要

今日无 Issues，亦无 Issue 评论，无法提炼用户痛点、使用场景或满意度反馈。

唯一的“反馈”来源是 CI 失败报告（`moltis-064r`），其反映的是开发流程层面的问题而非终端用户诉求：OAuth/PKCE 相关测试依赖页面/关闭事件判断成功状态，导致偶发失败。

## 8. 待处理积压

- [PR #1269](https://github.com/moltis-org/moltis/pull/1269)：OPEN，创建与更新均为 2026-09-15，尚无评论与合并动作。属于当日新提交，暂不构成长期积压，建议维护者尽快评审以恢复 CI 稳定性。
- 其余：今日数据源未提供任何长期未响应的 Issue 或 PR 清单，无法识别积压项。

---

**数据说明**：本报告仅基于 Moltis 仓库 2026-09-15 的 GitHub 数据快照生成；其中 PR #1269 的评论数字段在源数据中为 `undefined`，故未做数值解读。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-15

> 数据来源：agentscope-ai/CoPaw (QwenPaw) GitHub 活动。过去 24 小时：Issues 更新 24 条（新开/活跃 10，已关闭 14）、PR 更新 50 条（待合并 23，已合并/关闭 27）、新版本发布 0 个。

---

## 1. 今日速览

- 项目处于**高活跃维护状态**：单日 50 条 PR 更新、27 条合并/关闭，Issue 关闭数（14）明显高于新开数（10），积压正在被消化。
- 合并内容以 **MCP 稳定性、Console 前端修复、Agent 配置诊断** 为主，属于典型的"收敛式迭代"而非新功能扩张。
- 社区注意力集中在 **2.2.x 版本的质量问题**：停止任务后仍在执行、Hub 模式文件预览 401、上下文压缩产生的空白标签等。
- 路线图讨论热度最高的是 **2.2.0 多租户版 QwenPaw Hub**（#7318，27 条评论），官方正公开征集下一阶段方向。
- 整体健康度：**良好但存在若干稳定性缺口**，尤其是长时间运行/云端部署场景下的阻塞问题需要关注。

---

## 2. 版本发布

今日无新版本发布。当前社区讨论集中在 2.1 / 2.2.0 / 2.2.1 三个版本的已知问题上。

---

## 3. 项目进展

今日合并/关闭的重要 PR（按影响面排序）：

| PR | 内容 | 价值 |
|---|---|---|
| [#7736](https://github.com/agentscope-ai/QwenPaw/pull/7736) | 新增 DeepSeek V4 Flash 模型能力（图像输入、1,000,000 token 输入窗口、reasoning effort 取值） | 扩展内置模型目录，首次贡献者提交 |
| [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735) | 修复 MCP：保留已解码的 HTTP 错误响应，过滤过期的 body-framing 头，避免 HTTPX 二次解压 | 直接改善 MCP 错误可诊断性 |
| [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) | 修复 subagent 模型覆盖被静默丢弃：`_build_subagent_request_context` 曾吞掉所有异常 | 消除"配置无效但无报错"的隐性故障 |
| [#7759](https://github.com/agentscope-ai/QwenPaw/pull/7759) | 恢复链接的键盘焦点可见样式（`:focus-visible` + 对比度安全 token） | 无障碍/可访问性回归修复 |
| [#7758](https://github.com/agentscope-ai/QwenPaw/pull/7758) | 对齐 embedding 健康检查超时校验（>0 且 ≤300 秒），用显式校验替代静默钳制 | 前后端一致性 |
| [#7756](https://github.com/agentscope-ai/QwenPaw/pull/7756) | 记忆模块：ReMe 任务返回空错误响应时的失败专用提示（关联 #7715） | 错误语义区分 |
| [#7787](https://github.com/agentscope-ai/QwenPaw/pull/7787) | 避免对 gzip 压缩的 4xx MCP 响应二次解压（Streamable-HTTP 双代握手场景）（关联 #7764） | 修复 MCP 客户端 inactive |
| [#7737](https://github.com/agentscope-ai/QwenPaw/pull/7737) | 扩展多智能体协作技能的触发关键词，使首轮即可识别协作请求 | 提升技能选择准确率 |

**整体推进幅度评估**：本日合并以稳健性修复为主，MCP 传输层和 Agent 配置链路各修复了多项静默失败；前端在可访问性与表单校验上做了小幅收紧。没有引入破坏性变更。

---

## 4. 社区热点

1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub 多租户版将于 2.2.0 推出，下一步做什么？**（27 条评论，👍 4，OPEN，更新于今日）
   官方发起的路线图讨论帖。摘要明确提到社区多次请求"团队运行方式"，Hub 是首个回应，并列出关联请求 #2324（多用户访问与管理）。**背后诉求**：从个人助手走向团队协作，涉及权限、多租户隔离、管理后台。

2. **[#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) — 点停止后 UI 显示已停止，实际仍在执行**（7 条评论，OPEN）
   QwenPaw 2.2 web 版。用户确认停止按钮已恢复为 ↑，但刷新页面后发现仍在执行原指令，且修正指令触发 409 报错。**背后诉求**：任务取消语义不可靠，直接影响用户对系统的信任；409 冲突处理也需明确。

3. **[#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) — Docker 内 browser_use 因 dbus 连接失败导致 Chromium 退出**（6 条评论，已关闭）
   容器环境 CDP 端口无法连接、工具超时。长期挂起的容器化浏览器问题，今日关闭。

4. **[#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) — 历史对话移至右侧**（6 条评论，已关闭）
   14 寸笔记本上左侧区域过度拥挤、内容被折叠需滑动。同一诉求在 [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) 中再次出现，并被 PR [#7788](https://github.com/agentscope-ai/QwenPaw/pull/7788) 以"重新设计侧边栏会话列表"的方式承接（未按原提议移到右侧，而是解决空间瓶颈）。

5. **[#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) — 回复完成后 Agent 无限"Thinking"（SSE 流未正确关闭）**（5 条评论，已关闭）
   自 2026-04-27 创建至今关闭，属于典型的长尾体验缺陷。

**热点解读**：今日社区声量高度集中于"界面空间/布局"与"任务状态可信度"两类体验问题，而非能力缺失。路线图层面则由官方 Hub 讨论帖主导。

---

## 5. Bug 与稳定性

按严重程度排列：

**高 — 影响数据/执行正确性**
- [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567)（OPEN）：停止后任务仍继续执行，违背用户意图；附带 409 报错。**暂无 fix PR。**
- [#7786](https://github.com/agentscope-ai/QwenPaw/issues/7786)（OPEN）：云/NFS 部署下打开工作区文件浏览器导致整个进程冻结 **5–6 分钟**，且事件循环上存在请求路径阻塞式文件 I/O。**暂无 fix PR**，属架构级隐患。
- [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689)（OPEN）：#7621 仅对 `supports_multimodal=False` 的模型剥离 PDF 文档块；OpenAI 兼容 `/chat/completions` 多模态端点仍会外发 PDF 块。**已有对应 PR [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636)（OPEN，Under Review）**，补充"无论是否支持多模态都剥离"。

**中 — 影响可用性**
- [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767)（OPEN）：guardrail-plugin 构建下的多项问题——Console 第二次及以后的图片附件为过期 blob、一次性 cron 误触发丢失、Console tail-drop、`on_acting` 从不触发。环境为 2.2.0 / macOS / Python 3.12.14。**暂无 fix PR**。
- [#7771](https://github.com/agentscope-ai/QwenPaw/issues/7771)（OPEN）：上下文压缩或新对话后，历史列表出现无意义空白标签（如 "Compact Chat Session Title"）。Win10 desktop 2.2.1。**暂无 fix PR**。
- [#7743](https://github.com/agentscope-ai/QwenPaw/issues/7743)（已关闭）：Hub 模式下 Agent 发送文件的预览链接稳定返回 401 `Not authenticated`（参考提交 983b3ce）。
- [#7764](https://github.com/agentscope-ai/QwenPaw/issues/7764)（已关闭）：Dagu MCP 客户端因 `httpx.DecodingError: zlib incorrect header check` 始终 inactive → 已由 PR [#7787](https://github.com/agentscope-ai/QwenPaw/pull/7787) 修复（避免 gzip 4xx 二次解压）。

**低 / 已收束**
- [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193)（已关闭，标记 invalid/need-info）：2.1 网页版记忆搜索错乱，跨会话检索到同一 Agent 其他会话内容。
- [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872)（已关闭）：Docker 内 dbus 导致 Chromium 退出。
- [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871)（已关闭）：SSE 流不关闭导致的无限 Thinking。

**稳定性观察**：本日新报告的高危问题（#7567、#7786）均**尚无 fix PR**；而 MCP 相关故障已有修复落地，说明传输层修复节奏较快，但"任务生命周期/取消语义"与"文件 I/O 阻塞"仍是空白区。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关 PR | 纳入下一版本的可能性 |
|---|---|---|---|
| 小屏（13–14 寸）侧边栏会话列表重设计，回收垂直空间 | [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739)（已关闭）、[#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) | [#7788](https://github.com/agentscope-ai/QwenPaw/pull/7788)（OPEN，今日提交） | **高**——已有专门 PR，且未采纳"移到右侧"方案而改用布局重构 |
| 对话中通过 `//` 模糊搜索并显式调用内置工具或 MCP 工具，解决相似工具误调用 | [#7778](https://github.com/agentscope-ai/QwenPaw/issues/7778)、[#7780](https://github.com/agentscope-ai/QwenPaw/issues/7780)（同日重复提交，均已关闭） | 无 | 中——需求明确、影响 Core+Console，但被关闭且无 PR |
| 技能（skills）按自定义 channel 限定适用范围 | [#7746](https://github.com/agentscope-ai/QwenPaw/issues/7746)（已关闭） | 无 | 中低 |
| `send_file_to_user` 发送的文件直接展示在回复正文（文件卡片），无需展开工具步骤 | [#7744](https://github.com/agentscope-ai/QwenPaw/issues/7744)（已关闭） | 无 | 中——与 #7743 同属文件预览链路，可能一并处理 |
| 频道顶层参数（QQ 号、电话、工号）透传给 MCP 工具 | [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650)（OPEN，标 wontfix） | 无 | 低——已被标记 wontfix，但用户仍在询问 |
| 可配置的多文件夹默认工作区 | — | [#7789](https://github.com/agentscope-ai/QwenPaw/pull/7789)（OPEN，今日提交） | 中高——代码已就位 |
| 多租户 Hub 及配套管理能力 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 无 | 高——官方已宣布 2.2.0 推出，正在征集方向 |

---

## 7. 用户反馈摘要

**痛点**
- **任务控制不可信**：#7567 用户明确描述"确认方块消失、变回 ↑，刷新后仍在执行错误指令"，且修正指令遇到 409——取消与并发控制的状态机需要重新审视。
- **Hub 模式认证割裂**：#7743 显示文件预览链接携带 query 参数仍返回 401，Hub 登录态未覆盖附件端点。
- **云/容器部署性能**：#7786 指出 NFS 场景下文件浏览器让**整个进程**冻结 5–6 分钟，用户同时点出请求路径上存在阻塞式文件 I/O——这已是工程实现层面的质疑。
- **模型接入摩擦**：#7772（已关闭）反映 2.2.0 配置 new-api（v1.0.0-rc.26）代理后测试模型报错。
- **界面空间紧张**：#7739 / #7700 反复出现，"14 寸笔记本上各区域被折叠，需要滑动才能看清全部"，是明确的可用性抱怨。

**使用场景**
- 团队/多用户共享（Hub，2.2.0）
- 容器化与云端托管部署（Docker、NFS、2 vCPU）
- 多频道接入：微信、Console、Telegram、QQ 等
- 自定义插件/中间件（`register_middleware` 注册 gate 插件）
- 多智能体协作与 MCP 工具链集成
- 跨设备：Windows 10 desktop、macOS arm64、网页版

**满意与不满意**
- 满意：社区功能请求响应较快（同日提交的重复 Issue 当天被处理、MCP 解压问题当天有 PR 合并），首次贡献者 PR 通道畅通（#7736、#7737、#7735、#7680 均来自 first-time-contributor）。
- 不满意：2.2.x 的稳定性尚未收敛——停止语义、附件权限、上下文压缩的边角问题集中出现；文档与界面配置指引不足（#7749 用户"在模型配置界面找不到故障切换配置"，要求截图说明）。

---

## 8. 待处理积压

**高优先级（长时间未解决 / 影响面大）**
- [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) — 停止后仍执行（创建 2026-09-04，OPEN 11 天，7 条评论，无 fix PR）。建议优先分派。
- [#7786](https://github.com/agentscope-ai/QwenPaw/issues/7786) — 云端/NFS 文件浏览器导致进程冻结 5–6 分钟 + 事件循环阻塞式 I/O（今日新开，属架构级问题，需尽快定性）。
- [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) — PDF 块在多模态 chat-completions 端点仍外发，对应 PR [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) 自 2026-09-08 起处于 Under Review，建议推动评审。
- [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) — guardrail-plugin 构建下的四项缺陷（cron 误触发丢失、`on_acting` 从不触发属功能性失效）。
- [#7771](https://github.com/agentscope-ai/QwenPaw/issues/7771) — 上下文压缩产生空白标签（2.2.1 桌面版）。

**长期挂起的 PR**
- [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) — 修复 Playwright 驱动连接死亡后浏览器后端永久不可用（创建 2026-08-07，已标记 `first-time-contributor, ready-for-human-review`，OPEN 逾一个月）。该问题与已关闭的 #5872 同属浏览器栈健壮性范畴，建议尽快人工评审。
- [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) — 见上，OPEN 逾一周。

**需要澄清/文档补充**
- [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) — 频道参数透传 MCP（标记 wontfix 但用户仍在追问，建议补充官方说明或替代方案）。
- [#7749](https://github.com/agentscope-ai/QwenPaw/issues/7749) — 2.2.1 模型故障切换配置位置不明，用户请求截图指引，指向文档缺口。

---

*注：本报告中所有数据、版本号、Issue/PR 编号与状态均来自所提供的 GitHub 数据快照，未做任何外部补充。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 · 2026-09-15

## 1. 今日速览

过去 24 小时,ZeptoClaw 无新版本发布、无 Issue 更新(新开/活跃/关闭均为 0 条),社区讨论侧完全静默。唯一活动集中在 Pull Request 通道:共 18 条 PR 更新,全部为 OPEN 状态,合并/关闭数为 0,即今日没有任何代码进入主干。

这 18 条 PR 均由 dependabot[bot] 提交,内容清一色为 `chore(deps)` 依赖版本升级,覆盖 Rust、JavaScript 与 GitHub Actions 三类生态。项目今日呈现"高自动化输入、零人工产出"的状态:依赖维护流水线运转正常,但缺乏维护者的评审与合并动作,PR 队列处于净积压状态。

活跃度评估:**低**。无功能开发、无缺陷修复、无社区互动,健康度信号主要体现为依赖更新机制的持续运行,而非实质推进。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日**无合并或关闭的 PR**,项目功能与缺陷修复层面进展为 0。18 条 PR 全部处于待合并状态,未有任何一条进入主干。

从内容看,这批 PR 若被合并,将推进的是工程基础设施的版本对齐而非产品能力:

- Rust 侧依赖更新:`clap` 4.6.1 → 4.6.6([PR #690](https://github.com/qhkm/zeptoclaw/pull/690))、`base64` 0.22.1 → 0.23.1([PR #694](https://github.com/qhkm/zeptoclaw/pull/694))、`rustls` 0.23.39 → 0.23.43([PR #692](https://github.com/qhkm/zeptoclaw/pull/692))、`tokio-serial` 5.4.5 → 5.5.0([PR #685](https://github.com/qhkm/zeptoclaw/pull/685))、`async-trait` 0.1.89 → 0.1.92([PR #688](https://github.com/qhkm/zeptoclaw/pull/688))
- 文档站前端依赖更新:`astro` 6.3.7 → 7.2.2 与 `@astrojs/starlight` 0.39.2 → 0.41.10,分别作用于 `landing/zeptoclaw/docs`([PR #695](https://github.com/qhkm/zeptoclaw/pull/695)、[PR #696](https://github.com/qhkm/zeptoclaw/pull/696))与 `landing/r8r/docs`([PR #686](https://github.com/qhkm/zeptoclaw/pull/686)、[PR #689](https://github.com/qhkm/zeptoclaw/pull/689));`sharp` 0.34.5 → 0.35.4 同样双站点同步更新([PR #693](https://github.com/qhkm/zeptoclaw/pull/693)、[PR #691](https://github.com/qhkm/zeptoclaw/pull/691))
- CI/CD 工作流依赖更新:GitHub Actions 侧包括 `docker/login-action` 4.2.0 → 4.6.0([PR #687](https://github.com/qhkm/zeptoclaw/pull/687))、`Swatinem/rust-cache` 2.9.1 → 2.9.2([PR #683](https://github.com/qhkm/zeptoclaw/pull/683))、`EmbarkStudios/cargo-deny-action` 2.0.18 → 2.1.1([PR #684](https://github.com/qhkm/zeptoclaw/pull/684))、`softprops/action-gh-release` 3.0.0 → 3.0.3([PR #681](https://github.com/qhkm/zeptoclaw/pull/681))

需要提示的是,`base64` 0.22 → 0.23 属主版本号前一位变更,`astro` 6 → 7 为大版本跨度,这两项在合并时通常需要关注上游 API 变动;但所给材料未包含具体迁移说明,此处不作推断。

---

## 4. 社区热点

今日 18 条 PR 的评论数字段均返回 `undefined`,点赞数均为 0,无 Issue 讨论。因此**不存在真正意义上的社区热点**——所有 PR 均无人类评论、无反应,互动量为零。

从提交主体看,唯一的"参与者"是 dependabot[bot],全部 18 条 PR 作者均为该机器人。这本身构成一个值得注意的信号:项目的对外交互当日完全由自动化承担,缺少人类维护者或贡献者的声音。其中评论数最多者按数据无法区分,故不虚列排名;如需关注,可优先查看跨主版本的 [PR #695](https://github.com/qhkm/zeptoclaw/pull/695)(astro 6→7)与 [PR #694](https://github.com/qhkm/zeptoclaw/pull/694)(base64 0.22→0.23),这两项的升级风险相对更高。

---

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告(Issues 更新数为 0 条),亦无对应修复 PR。

需要区分的是:依赖升级 PR 本身可作为**潜在稳定性风险的前置信号**,而非已发生的故障。其中 `rustls` 涉及 TLS 实现、`sharp` 涉及图像处理原生模块,此类升级在多平台构建环境中偶有兼容性问题,建议合并前确认 CI 全平台通过。当前无任何已确认的稳定性事件。

---

## 6. 功能请求与路线图信号

今日无用户提出的功能请求(Issues 数为 0)。

从 PR 侧可读出的路线图信号有限且间接:双文档站点(`landing/zeptoclaw/docs` 与 `landing/r8r/docs`)的依赖被同步推进,且 `r8r` 目录与 `zeptoclaw` 目录同时出现,提示仓库内可能并行维护着两个面向用户的产品线文档。另需指出,PR 编号跨度中出现 #696、#695、#693、#691、#690 等连续编号,但材料同时列出 #681、#683、#684、#685、#686、#687、#688、#689、#692、#694,编号存在缺号,说明当日更新的 18 条并为完整连续序列。

哪些可能纳入下一版本:依赖升级类变更通常随下一次常规发布一并进入,但**具体版本号与时间表在所给材料中无任何依据**,不作预测。

---

## 7. 用户反馈摘要

今日无 Issue 评论,无可提炼的用户痛点、使用场景或满意度信息。

唯一的"反馈"来自自动化系统:18 条依赖更新提示表明上游生态在持续演进,项目需要跟进以保持构建链与安全基线。这属于维护者视角的输入,不构成真实用户声音。

---

## 8. 待处理积压

严格来说,这 18 条 PR 均为**当日创建、当日更新**,不属于"长期未响应"。但其共同特征构成积压风险:

- **待合并 PR 数量:18 条,合并率 0%**。若这一状态延续,PR 队列将持续膨胀,且旧版本分支上的依赖更新会不断与新提交产生冲突,增加后续合并成本。
- 其中跨大版本升级项建议优先处置:[PR #695](https://github.com/qhkm/zeptoclaw/pull/695) 与 [PR #686](https://github.com/qhkm/zeptoclaw/pull/686)(astro 6→7)、[PR #694](https://github.com/qhkm/zeptoclaw/pull/694)(base64 0.22→0.23)。越晚合并,冲突面越大。
- 材料未提供任何 Issue 的创建时间与滞留时长,因此**无法识别长期未响应的重要 Issue**;此项在本日数据下为空。

**给维护者的建议**:当日 Issue 与 PR 评论均为零,建议至少完成一轮 dependabot PR 的批量评审,对通过 CI 的低风险补丁(如 `rust-cache`、`action-gh-release`)直接合并,对跨主版本项单独验证,以恢复项目"有输入、有产出"的正常节奏。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-15

## 1. 今日速览

ZeroClaw 今日维持高强度开发节奏：过去 24 小时共 34 条 Issue 更新（新开/活跃 16、关闭 18）、50 条 PR 更新（待合并 38、已合并/关闭 12），无新版本发布。关闭量略高于新开量，显示积压清理与新增需求基本持平，项目处于健康的"消化期"。安全与运行时治理是当前主线——多笔高风险的 provider 会话头、RPC 认证、插件 egress 治理工作同时推进。值得注意的是，待合并 PR 中大量为 `distinguished contributor`（JordanTheJet）贡献的 XL 规模堆叠 PR，合并吞吐可能成为瓶颈。评论最活跃的 Issue #9965（12 条评论）揭示了并行运行时测试夹具的稳定性债务。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 中，最值得关注的是：

- **PR #10252 [CLOSED]** feat(memory): add category-scoped cross-agent grants — 实现了跨智能体记忆的分类范围授权，同时保留旧字符串条目的无限制语义。这直接落地了 Issue #8983 提出的"仅共享选定记忆类别"诉求。
  链接: zeroclaw-labs/zeroclaw PR #10252

今日关闭的重点 Issue 同样构成项目推进的一部分：

- **#8983 [CLOSED]** category-scoped `read_memory_from` 提案（由 #10252 实现），消除了跨智能体记忆共享"全有或全无"的架构缺陷。
- **#10603 [CLOSED]** OpenCode provider 缺失 `x-opencode-session` 头导致 Go 模型不可用并有账号风险（S1，👍3）；配套修复 PR #10604 已落地，后续遗留项已拆至 #10853 跟踪。
- **#6613 [CLOSED]** 配对码强度提升（允许配置并默认使用强于 6 位数字的配对码）。
- **#10488 [CLOSED]** Matrix 通道补齐 TTS 支持。
- **#9632 [CLOSED]** 支持 `zeroclaw acp --agent <alias>` 设置独立 ACP 默认智能体。
- **#9293 [CLOSED]** Anthropic 拒绝与安全兜底实现批次 tracker 关闭。
- **#10104 / #10794 / #10585 / #10232** 等一系列 CI/测试/可观测性缺陷修复关闭，主要涉及硬件特性门控测试执行、Windows nextest 契约检查、日志 sink 并行竞争、daemon 错误链丢失。

整体判断：项目在"安全边界收紧 + 通道能力补齐 + CI 可信度修复"三个方向同时向前推进，但新功能合并节奏受大型堆叠 PR 制约。

## 4. 社区热点

- **Issue #9965**（12 条评论，最热）— [Task]: harden runtime-written executable test fixtures under the parallel runtime gate。作者 AngryPacifist。围绕并行运行时门控下写入可执行 shim 的测试夹具加固展开，是测试稳定性讨论的焦点。
  链接: zeroclaw-labs/zeroclaw Issue #9965

- **Issue #10549**（11 条评论）— RFC: Simplify RFC voting by removing mandatory discussion windows and making REVISE stop the current snapshot。作者 Audacity88。直指流程摩擦：普通 RFC 需等 48 小时、例外全票 RFC 需等 72 小时讨论期。属于治理机制自我优化，反映维护者希望提升决策吞吐。
  链接: zeroclaw-labs/zeroclaw Issue #10549

- **Issue #9345**（6 条评论）— Recalculate PR risk and size labels on every update，作者 Audacity88。要求在 PR reviewed diff 变化时重算 `size:*` / `risk:*` 标签，同时保留维护者覆盖且避免执行不可信 PR 代码。
  链接: zeroclaw-labs/zeroclaw Issue #9345

- **Issue #10603**（👍3）— 本日社区点赞最高的条目，S1 工作流阻塞，说明 provider 兼容性与账号安全是用户高度敏感的点。
  链接: zeroclaw-labs/zeroclaw Issue #10603

诉求归纳：社区注意力集中在"流程/CI 可信度"与"安全边界"两类议题，而非单纯功能堆叠，表明项目已进入成熟度打磨阶段。

## 5. Bug 与稳定性

按严重程度排列：

- **[S1] Issue #10603 [CLOSED]** OpenCode provider 从不发送 `x-opencode-session`，破坏 Go 模型并可能导致账号被标记。已由 PR #10604 修复；遗留的三项非阻塞跟进已拆至 **Issue #10853 [OPEN]**。
  链接: zeroclaw-labs/zeroclaw Issue #10603 | zeroclaw-labs/zeroclaw Issue #10853

- **[S1] Issue #10673 [OPEN]** 在 daemon RPC 路径上持久化失败的 ACP 轮次（ZeroCode Code 面板），是 #9333 的剩余切片。尚未见 fix PR。
  链接: zeroclaw-labs/zeroclaw Issue #10673

- **[S2] Issue #10625 [CLOSED]** 使用非视觉模型时，内部 `[media attachment]` 占位符被投递给用户。
  链接: zeroclaw-labs/zeroclaw Issue #10625

- **[S2] Issue #10232 [CLOSED]** daemon 诊断丢失底层错误链（仅记录 `e.to_string()`）。
  链接: zeroclaw-labs/zeroclaw Issue #10232

- **[S2] Issue #10842 [OPEN]** Telegram reaction 工具静默 no-op：`TelegramChannel` 未实现 `add_reaction`/`remove_reaction`，继承的 Channel trait 默认返回 `Ok(())` 而不调用 API。状态 in-progress，尚未见 fix PR。
  链接: zeroclaw-labs/zeroclaw Issue #10842

- **[S3] Issue #10585 [CLOSED]** 新 log sink 回归在默认并行 runner 下与迁移测试竞争。
- **[S3] Issue #10794 [CLOSED]** Advisory Windows nextest 上 `publish_contract::published_crates_never_include_files_outside_their_own_directory` 失败。
- **[S3] Issue #10104 [CLOSED]** `zeroclaw-hardware` 特性门控的 lib 测试在 CI 中从未执行。

趋势提示：#9965、#10585、#10794、#10104 均指向测试并行化与特性门控带来的 CI 稳定性债务，虽多为 S3，但反复出现值得系统性治理。

## 6. 功能请求与路线图信号

- **Issue #9814 [OPEN]** feat(channels): native XMPP / Prosody channel — 请求原生 XMPP 支持以对接自托管 Prosody/ejabberd。已有矩阵/Telegram/Discord 通道先例，需求合理，但尚未见对应 PR，短期内纳入的可能性取决于通道抽象层的可插拔程度。
  链接: zeroclaw-labs/zeroclaw Issue #9814

- **Issue #8763 [OPEN]** 在 ZeroCode 中显示子智能体活动并支持展开工具结果 — 长 Code/Chat 轮次中的可观测性诉求，属 UI/可观测性方向，尚无直接 PR。
  链接: zeroclaw-labs/zeroclaw Issue #8763

- **Issue #9345 [OPEN]** PR 标签自动重算 — 结合大量 XL 规模 PR 的现状，此需求若落地将显著改善评审分流，有较大概率被优先采纳。
  链接: zeroclaw-labs/zeroclaw Issue #9345

- **Issue #10549 [OPEN]** RFC 流程简化 — 属治理类提案，将影响后续所有 RFC 的节奏。
  链接: zeroclaw-labs/zeroclaw Issue #10549

- 已进入实现的路线图信号：
  - **A2A 出站客户端 Phase 1**（PR #9324，实现 RFC #9106；对应 Issue #9106），提供 4 个 `a2a_*` 工具、共享 A2A v1.0 Serde wire model 与默认关闭的 `[a2a.client]` 配置块。
    链接: zeroclaw-labs/zeroclaw PR #9324
  - **上下文压缩按模型窗口比例锚定**（PR #9535），新增 `runtime_profiles.<name>.context_compact_ratio`。
    链接: zeroclaw-labs/zeroclaw PR #9535
  - **原生 Hailo-Ollama provider 支持**（PR #9109），提供 `[providers.models.hailo_ollama.<alias>]`。
    链接: zeroclaw-labs/zeroclaw PR #9109

## 7. 用户反馈摘要

- **媒体与多模态降级体验**：使用纯文本模型时，历史中的媒体标记会被替换为内部占位符 `[media attachment]` 并直接投递给用户（#10625）。这是典型的"内部实现细节泄漏到用户界面"，用户期望优雅降级而非暴露原始标记。
  链接: zeroclaw-labs/zeroclaw Issue #10625

- **配置生效但无诊断的困惑**：Matrix 通道未接入 `TtsManager`，导致 `[providers.tts.<type>.<alias>]` 与 `agents.<alias>.tts_provider` 配置在 Matrix 上完全无效且无任何提示（#10488）。用户痛点不只是功能缺失，更是"静默失效"。
  链接: zeroclaw-labs/zeroclaw Issue #10488

- **静默失败难以排查**：Telegram reaction 工具报成功但无任何网络请求（#10842），daemon 诊断丢失错误链（#10232）——这两条共同反映用户对"静默 no-op / 错误信息不足"的强烈不满。
  链接: zeroclaw-labs/zeroclaw Issue #10842 | zeroclaw-labs/zeroclaw Issue #10232

- **安全默认值诉求**：6 位数字配对码被明确批评"too weak"，用户希望支持任意长度、含数字与字母的配对码并默认更强（#6613，已关闭）。
  链接: zeroclaw-labs/zeroclaw Issue #6613

- **自托管/家庭实验室场景**：XMPP 请求（#9814）来自 home-lab 与注重隐私的用户群，说明自托管通道是真实且稳定的需求来源。
  链接: zeroclaw-labs/zeroclaw Issue #9814

- **跨智能体协作的权限粒度**：用户明确反对 `read_memory_from` 的全有或全无模型，希望按类别共享（#8983，已关闭并落地）。
  链接: zeroclaw-labs/zeroclaw Issue #8983

## 8. 待处理积压

- **PR #9841 [OPEN]**（`needs-author-action`，size:XL，risk:high）— 自 2026-08-08 起持续更新，驱动 headless SOP 运行并修复 review #9494 发现的五个缺陷。规模大、跨模块广，需作者响应以推进。
  链接: zeroclaw-labs/zeroclaw PR #9841

- **PR #10233 [OPEN]**（`needs-author-action`，size:XL）— SOP 原子重命名流程，是 #10527 的堆叠基础。等待作者动作会连带阻塞 #10527。
  链接: zeroclaw-labs/zeroclaw PR #10233

- **PR #9324 [OPEN]**（`needs-author-action`，size:XL）— A2A 出站客户端 Phase 1，自 2026-07-24 起开放，是路线图上明确的功能，长期挂起值得关注。
  链接: zeroclaw-labs/zeroclaw PR #9324

- **PR #10592 [OPEN]**（`needs-maintainer-review`，size:XL）— `relay claim` 自助注册，自 2026-09-03 起等待维护者评审。
  链接: zeroclaw-labs/zeroclaw PR #10592

- **PR #10381 [OPEN]**（`needs-maintainer-review`，size:XL，risk:high）— 安全修复：在应用 workspace cwd 前解析宿主机 launcher 为规范绝对路径，涉及 Native/Docker/Firejail/Bubblewrap 多运行时。安全类 PR 等待评审周期偏长存在风险。
  链接: zeroclaw-labs/zeroclaw PR #10381

- **PR #10750 [OPEN]**（size:L，risk:high）— 通道插件 egress 治理，涉及插件安全边界。
  链接: zeroclaw-labs/zeroclaw PR #10750

- **Issue #9459 [OPEN]**（tracker）— v0.8.5 有限周度稳定线的发布/milestone 跟踪器，覆盖至 2026-08-30，intake 已于 8 月 4 日冻结。当前日期已越过该稳定线终点，建议维护者确认该 tracker 状态是否需要更新或关闭。
  链接: zeroclaw-labs/zeroclaw Issue #9459

- **Issue #8763 [OPEN]** — 自 2026-07-06 开放，ZeroCode 子智能体活动可视化，长期无 PR 承接。
  链接: zeroclaw-labs/zeroclaw Issue #8763

---

**健康度小结**：关闭/合并量（18 Issues、12 PRs）与新增量基本平衡，无版本发布但功能管线充足。主要风险集中在两点——一是大量 XL 规模、标注 `needs-author-action` 或 `needs-maintainer-review` 的高风险 PR 形成评审瓶颈（#9841、#10233、#9324、#10381、#10592、#10750）；二是测试并行化相关的稳定性缺陷反复出现（#9965、#10585、#10794、#10104），建议作为专题系统性治理。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*