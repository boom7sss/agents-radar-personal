# OpenClaw 生态日报 2026-11-10

> Issues: 364 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-10 17:53 UTC

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

# OpenClaw 项目日报 · 2026-11-10

## 1. 今日速览

项目维持高强度开发节奏：过去 24 小时共 364 条 Issue 更新（新开/活跃 209，关闭 155）与 500 条 PR 更新（待合并 326，合并/关闭 174），但**无新版本发布**。PR 积压（326 待合并）显著高于当日消化量（174），合并吞吐成为当前主要瓶颈。稳定性讨论集中在会话状态、数据丢失与 SQLite 数据库膨胀三类高危问题上，多条 P0/P1 议题已有对应修复 PR 在途。整体判断：**开发活跃度极高，但发布与评审通道承压，项目健康度呈"高强度、高积压"状态**。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭 174 条 PR，其中数据样本内较具代表性的关闭事项：

- **#193962（已关闭，P0，ux-release-blocker）**：2026.10.10 升级到 2026.11.5-beta.1 时，已安装版 updater 的 10 秒 SQLite header-probe 超时导致 #187197 的修复无法通过 `openclaw update` 抵达。关闭表明更新路径的"自我更新死锁"得到处理。链接:openclaw/openclaw Issue #193962
- **#167506（已关闭，P0，diamond lobster）**：被删除的临时 handoff 数据库阻塞恢复与后续所有升级，已关闭。链接:openclaw/openclaw Issue #167506
- **#168794（已关闭）**：Codex relay 将超过 32 MiB 解码体限制的图片请求转为可重试 502，已关闭。链接:openclaw/openclaw Issue #168794
- **#149631（已关闭，stale）**：preflight 在 121 个 job 时触碰 120 Node matrix 上限导致 CI 红门，已关闭。链接:openclaw/openclaw Issue #149631
- **#172628（已关闭，P1，fix-shape-clear / queueable-fix）**：2026.10.3 冷启动后 main-agent 准入被 superseded，已关闭。链接:openclaw/openclaw Issue #172628

**整体推进评估**：今日关闭集中于"更新链路、启动准入、CI 门禁"三类基础健康问题，属于治理型进展而非功能性突破；尚无新版本把这些修复交付到用户端（见第 5 节风险）。

## 4. 社区热点

按评论数排序的讨论焦点：

| 排名 | 议题 | 评论 | 状态 |
|---|---|---|---|
| 1 | #150635 短期记忆淘汰与 dreaming 深阶段永不晋升 | 27 | OPEN，P2 |
| 2 | #193962 updater 超时阻断升级 | 24 | CLOSED，P0 |
| 3 | #158127 多智能体运行时发布失败 + Codex 启动超时 | 14 | OPEN，P2 |
| 4 | #144336 延迟重启 SIGUSR1 关闭步骤失败 | 14 | OPEN，P1 |
| 5 | #138561 active-memory 插件升级后停止 recall | 13 | OPEN，P2，stale |

- #150635:openclaw/openclaw Issue #150635
- #158127:openclaw/openclaw Issue #158127
- #144336:openclaw/openclaw Issue #144336
- #138561:openclaw/openclaw Issue #138561

**诉求分析**:高评论议题几乎全部围绕**记忆系统与生命周期可靠性**——短期 recall 容量上限（512 条）导致的夜间淘汰、插件 recall 静默失效、重启与关闭状态机损坏。用户的核心担忧不是单点 Bug，而是"记忆/会话这类有状态子系统在多智能体长时间运行下的确定性"。第 1 名议题同时带有 `needs-product-decision` 标签，说明它已超出纯修复范畴，需要产品层对记忆分层策略给出定义。

PR 侧评论数据未提供具体数值，按标签可见焦点：
- **#196760（P1，proof: sufficient，ready for maintainer look）** 要求委托式自动变更必须具备 `exec` 权限——安全边界强化。openclaw/openclaw PR #196760
- **#196773（P1，merge-risk: availability）** 修复 Gateway 启动被两个慢速 schema reader 拖累的问题，与 #181459（大 DB 启动赌博）直接相关。openclaw/openclaw PR #196773
- **#196774（P2，merge-risk: compatibility）** Claude Fable 5.2 上 `/fast` 不生效、新模型缺 fast mode 时 HTTP 400。openclaw/openclaw PR #196774

## 5. Bug 与稳定性

**P0 / 发布阻断级**

1. **#194664 [OPEN] Codex protected continuation 阻塞后续所有轮次，同时 Stop 报告无活动运行（2026.11.1）** — 会话卡死，影响 Control UI 可用性。未见 fix PR 标签。openclaw/openclaw Issue #194664
2. **#193962 [CLOSED] 更新器 header-probe 超时阻断升级** — 已关闭，但需确认是否已进入可分发版本（当前无新 Release）。

**P1 级**

3. **#181459 [OPEN] 3.5 GB agent DB 使启动成为赌博（18s 打开、4–6min 启动、commit checkpoint expired）** — 有在途修复 **PR #196773**。openclaw/openclaw Issue #181459
4. **#166641 [OPEN] web_fetch 冷回退同步捕获无关插件、阻塞 Gateway 主线程** — 标注 `linked-pr-open`，已有 fix PR。openclaw/openclaw Issue #166641
5. **#157255 [OPEN] lane 超时后 turn claim 未释放，会话 wedge 90+ 分钟** — 无 fix PR，需 live repro。openclaw/openclaw Issue #157255
6. **#144336 [OPEN] 延迟重启关闭失败，"service child cleanup identity lost"** — 有在途修复 **PR #196765**（避免 service stdin 关闭后的 shutdown 失败）。openclaw/openclaw Issue #144336
7. **#168101 [OPEN] Rate-limit Retry-After 忽略 maxRetryDelayMs 并占满 session lane** — 无 fix PR。openclaw/openclaw Issue #168101
8. **#91931 [OPEN] 预置 SOUL.md/IDENTITY.md/USER.md 导致 bootstrap 自动完成并删除用户 BOOTSTRAP.md** — 影响首次运行、数据丢失，标注 `fix-shape-clear` 但无新 fix PR。openclaw/openclaw Issue #91931

**P2 / 长期存在**

9. **#150635 [OPEN] 短期 recall 淘汰致 dreaming 深阶段永不晋升** — `needs-product-decision`，无新 fix PR。
10. **#182891 [OPEN] Prompt cache 永不复用（`cache read dropped N -> 0`）** — 成本与性能直接影响，无 fix PR。
11. **#141172 [OPEN] 首轮 session commit 前死亡的 run 永久泄漏 agent.run.started** — `bulk-filed`。
12. **#112313 [OPEN] 死信投递队列条目永久不可清除** — 自 2026-07-21 起存在。
13. **#172986 [OPEN] WebChat 长路径中间截断，且存在间歇性 payload 变更** — 涉及数据保真。

**稳定性小结**:高危问题呈现明显的**"状态机 + SQLite 持久层"聚集特征**；今日数据中，P0/P1 级中有 4 项已出现对应修复 PR（#196773、#196765、#166641 关联 PR 等），修复供给尚可，但多数卡在评审而非编码。

## 6. 功能请求与路线图信号

| Issue | 诉求 | 关联 PR / 信号 | 纳入下一版本可能性 |
|---|---|---|---|
| #138366 | MemoryPluginCapability 增加 `dreaming` provider，由记忆槽所有者驱动 Dreams 页 | 与 #150635 同属记忆子系统重构 | 中（需产品决策） |
| #192009 | 跨供应商 cron fallback 账号显式授权 | 与 #151980（session model pin 继承 fallback 链）同向 | 中—高 |
| #151980 | Session 级模型 pin 应继承 agent fallback 链 | 无明显 PR | 中 |
| #138990 | 前台 WebChat 长任务的可执行检查点与有界让出 | 无 | 低—中 |
| #165685 | 被 yield 的 collector 输出机器可读 reason | 无 | 低 |
| #112372 | `sessions_send` 增加 `wakeOnReply` 延迟完成 | 已 CLOSED（stale） | 低 |

**路线图信号**:`fallback 链路一致性`是跨多条 Issue 的收敛主题——#192009、#151980、#168101、#92473（fallback 通知泄漏到外部渠道）共同指向一个尚未系统化的"模型降级治理"能力。若维护者将其作为整体特性推进，将同时消化多个钻石级议题。记忆子系统（#150635 + #138366）则明确等待产品决策。

## 7. 用户反馈摘要

- **使用场景**:多智能体 macOS Gateway、npm 全局安装、Proxmox/Linux 自托管、约 20 个 agent 共享单网关主机是高频环境画像。
- **不满 1：有状态子系统静默失败。** #138561 报告 recall 完全停止但在 info 日志级别无任何信号；#182891 报告每次请求 cache 都被归零。用户反复强调"没有信号"——可观测性缺失比 Bug 本身更伤信任。
- **不满 2：升级路径脆弱。** #193962、#167506、#175926 均表现为"已装的旧版本无法靠自身修复到达新版本"，用户被迫手工介入。
- **不满 3：规模上不去。** #181459 的 3.5 GB 数据库、"embeddings stored 3×"，#175926 的 snapshot 回收每轮跳过，都说明持久层在真实数据量下缺乏横向可信度。
- **满意点（隐含）**:用户普遍能给出精确的版本号、commit、复现步骤与本地补丁（如 #134918 提供"两个签名 + 本地补丁均修复"），说明社区调试能力强、对项目投入度高；多条议题有维护者往返 10+ 轮，响应态度获认可。
- **决策摩擦**:多个高价值 Issue 停在 `needs-product-decision`，用户已把问题分析到方案层面，等待的是方向裁定而非技术验证。

## 8. 待处理积压

**长期未响应的关键 Issue**

- **#112313**（创建 2026-07-21，OPEN，diamond lobster，12 评论）— 死信队列条目永久不可清除，**已积压约 3.7 个月**，且标注 `fix-shape-clear`，属"可修但未修"。openclaw/openclaw Issue #112313
- **#92473**（创建 2026-06-12）— fallback 通知泄漏至外部渠道，**约 5 个月**未闭环，`needs-product-decision`。openclaw/openclaw Issue #92473
- **#91931**（创建 2026-06-10，P1，data-loss）— BOOTSTRAP.md 被提前删除，**约 5 个月**，影响新用户首次体验。openclaw/openclaw Issue #91931
- **#138561 / #172986 / #165685 / #144594** 均带 `stale` 标签但仍有活跃讨论，说明 stale 规则与真实关注度脱节，建议复核自动 stale 策略。

**积压 PR 需分流**

- **#191324**（2026-11-02）— spawn receipt 暴露 resolvedRuntime/resolvedAuth，状态 `waiting on maintainer`，正文明确提出**需要决策的问题**（是否在 receipt 中暴露凭据来源）。openclaw/openclaw PR #191324
- **#194720**、**#189816**、**#196774** 均为 `waiting on author` 且带 `merge-risk: compatibility`，建议明确兼容性验收口径以加速收敛。
- 待合并 PR 达 **326** 条，已远超当日合并量 174；建议维护者为 `ready for maintainer look` 队列（如 #196760、#193829、#194233）设置每日评审配额。

---

**健康度提示**：编码侧供给充足（P0/P1 多有在途修复），风险集中在**评审吞吐、产品决策停滞、以及修复无法通过发布触达用户**三点。今日零发布叠加两条 P0 更新链路议题关闭，建议关注下一个版本切出时点。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-11-10）

## 1. 生态全景

生态整体处于"高开发强度、低发布吞吐"阶段：多数头部项目今日零发布，但 Issue/PR 流量维持高位，评审与合并成为共同瓶颈。技术焦点已从"能跑起来"转向**有状态子系统的确定性**——会话隔离、消息路由、记忆/上下文生命周期是跨项目最集中的缺陷来源。与此同时，Provider/工具接入的边际成本因 OpenAI 兼容抽象与表驱动配置而显著下降，外部贡献者正以插件与网关 PR 的形式涌入。OpenClaw 以数百级日流量稳居规模顶端，但其"修复供给充足却无法通过发布触达用户"的困境，是当前生态成熟度的典型缩影。

## 2. 各项目活跃度对比

| 项目 | Issue 更新（活跃/关闭） | PR 更新（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 364（209/155） | 500（326/174） | 无 | 高强度、高积压；PR 积压远超消化量，零发布叠加 P0 更新链路议题 |
| **Hermes Agent** | 50（49/1） | 50（29/21） | **v0.23.1** | 活跃度高、健康良好；集中清理安全债，P2 会话/鉴权 Bug 滞留 |
| **CoPaw** | 12（8/4） | 39（21/18） | **v2.3.0-beta.4** | 高活跃、中等风险；beta 阶段存在阻断级附件路径回归 |
| **NanoBot** | 5（5/0） | 27（8/19） | 无（0.4.1 准备已合并） | 合并吞吐高；跨会话串台为核心风险，修复 PR 在途 |
| **NanoClaw** | 0 | 15（7/8） | 无 | 中等偏低、质量导向；修复密集，外部 MCP PR 挂起约 70 天 |
| **ZeroClaw** | 16（9/7） | 50（48/2） | 无 | CI 阻塞级风险；RUSTSEC 导致 Security 与合并门禁全红，48 PR 积压 |
| **LobsterAI** | 0 | 5（1/4） | 无 | 稳定迭代日；4 条修复覆盖网络兼容、macOS 全屏、数据丢失 |
| **PicoClaw** | 0 | 3（2/1） | 无 | 稳定但低活跃；stale PR 清理中，贡献转化效率偏低 |
| **NullClaw** | 0 | 3（3/0） | 无 | 偏低；Provider/搜索源接入 PR 全部未获评论，评审吞吐为瓶颈 |
| **Moltis** | 0 | 1（1/0） | 无 | 低活跃无异常；表驱动 Provider 架构带动外部贡献 |
| **IronClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 过去 24 小时无活动 |

> 注：PR 评论数在多数数据源中缺失，社区热度以创建时长、体量标签与更新活跃度替代判断。

## 3. OpenClaw 在生态中的定位

**规模优势**：OpenClaw 单日 Issue 更新 364 条、PR 更新 500 条，量级为第二梯队（Hermes、ZeroClaw，均约 50 条）的 7–10 倍，社区规模与调试深度显著领先——用户能提供精确版本号、commit、复现步骤乃至本地补丁。

**技术路线差异**：
- 采用"多智能体 + 单网关主机"的生产级部署模型（约 20 个 agent 共享网关为高频画像），复杂度高于 NanoBot/NanoClaw 的多会话单体形态。
- 记忆子系统自带分层设计（短期 recall、dreaming 深阶段、MemoryPluginCapability），但 #150635 显示分层策略尚未定型，已进入 `needs-product-decision`。
- 持久层依赖单一 SQLite agent DB，3.5 GB 库导致"启动成为赌博"（#181459），暴露横向扩展短板。

**社区规模对比**：OpenClaw 的讨论深度（单议题 27 条评论、维护者往返 10+ 轮）与议题复杂度（钻石级、P0/P1 分级体系）均为生态内最高，但代价是评审通道承压——326 条待合并 PR 已远超当日合并量 174，且零发布使 P0 修复无法触达用户。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话/消息路由正确性** | NanoBot、NanoClaw、OpenClaw | 跨会话串台（NanoBot #5798 回归自 0.3.0）、heartbeat 投递到错误房间（#6619）、Mattermost 过度响应（NanoClaw #3797）、mention-sticky 误唤醒（#3802）、会话 wedge 90+ 分钟（OpenClaw #157255） |
| **上下文/压缩成本治理** | Hermes Agent、OpenClaw、ZeroClaw | 技能懒加载节省上下文（Hermes #2045，8 个月未决）、压缩链路重构为后台执行（#117886/#97390）、prompt cache 永不复用（OpenClaw #182891）、成本可见性（ZeroClaw #12353） |
| **Provider 接入摩擦降低** | NullClaw、Moltis、PicoClaw、CoPaw、ZeroClaw | 表驱动 OpenAI 兼容抽象（Moltis #1323）、单 key 聚合 260 模型（NullClaw #1092）、免 API key 搜索（#1091）、Runcrate 接入（PicoClaw #3448 已关闭、Moltis #1323）、模型目录元数据对齐（CoPaw #7990） |
| **模型兼容层参数协商** | ZeroClaw、OpenClaw、CoPaw | 硬编码 temperature 被拒（ZeroClaw #12362/#12366）、缺 `reasoning_content` 字段（#12361）、fast mode 缺失返回 400（OpenClaw #196774）、thinking_param_style 未声明（CoPaw #7990） |
| **升级/安装路径脆弱** | OpenClaw、NanoClaw、Hermes | updater 自锁无法自愈（OpenClaw #193962）、缺 jq 致渠道配置失败（NanoClaw #4202）、首次更新 lockfile 冲突（#4312）、`hermes update` 误报（#126362） |
| **凭据安全与最小暴露** | ZeroClaw、NanoClaw、OpenClaw | 配对凭据移出 URL（ZeroClaw #12335）、只写式凭据管理（#12373）、Dial auth 文件权限（NanoClaw #4315）、委托式变更需 exec 权限（OpenClaw #196760） |

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | NanoBot / NanoClaw | ZeroClaw | CoPaw | NullClaw / Moltis / PicoClaw |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈多智能体 + 记忆分层 + Control UI | 技能/插件生态 + 跨平台 Desktop | 多会话/多房间消息路由 | 运行时/网关/dashboard，Rust 原生 | 通道插件（QQ/飞书/微信）+ Console | 轻量 Provider/搜索工具接入 |
| **目标用户** | 生产级自托管多 agent 运营者 | 插件作者与 Desktop 用户 | 繁忙多会话部署方 | 强调安全/CI 严谨的运维方 | 国内通道与企业凭据用户 | 轻量/嵌入式/移动部署 |
| **技术架构** | 多 agent 共享网关 + SQLite 持久层 | 插件目录 + prompt 缓存 + 后台压缩方向 | 全局共享会话正被退役（#6621 破坏性） | Rust + Zig 生态关联，CI 门禁严格 | Desktop + 插件依赖管理 | Zig 实现（NullClaw `keenable.zig`）、表驱动 Provider |
| **发布节奏** | 高强度开发、发布停滞 | 补丁版规律交付（v0.23.1 汇总 618 PR） | 0.4.1 收尾中 | v0.9.0 范围规划中但 CI 阻塞 | beta.4 冲刺，正式版号 PR 已开 | 低活跃、PR 待评审 |

**关键差异**：Hermes 用"补丁版打包 618 PR"的方式解决发布吞吐，与 OpenClaw 的零发布形成对照；NanoBot 通过移除全局共享会话（破坏性重构）从架构层根治路由问题，是"以重构换正确性"的路线；ZeroClaw 的 CI 门禁严格性是其质量保障也是当前合并瓶颈。

## 6. 社区热度与成熟度

**第一层·高强度迭代（OpenClaw、CoPaw、ZeroClaw）**：日流量数百至数十级，处于功能扩张与发布冲刺并行阶段。风险共性是**评审/CI 吞吐不足**——OpenClaw 326 待合并、ZeroClaw 48 待合并且门禁全红、CoPaw beta 回归未清。

**第二层·质量巩固（Hermes Agent、NanoBot、NanoClaw）**：Hermes 集中清理安全债、NanoBot 与 NanoClaw 以修复型 PR 为主（NanoBot 19/27 已合并、NanoClaw 8/15 关闭多为 Fix），处于"修地基"而非"加功能"阶段，健康度良好。

**第三层·低活跃观察（PicoClaw、NullClaw、Moltis）**：PR 个位数、无 Issue 流量，瓶颈在维护者响应而非需求端。NullClaw 3 条 PR 全部零评论、PicoClaw stale PR 挂起 9 天，存在贡献者流失风险。

**静默（IronClaw、TinyClaw、ZeptoClaw）**：24 小时无活动。

## 7. 值得关注的趋势信号

1. **"有状态子系统确定性"成为智能体工程主战场**：记忆淘汰、会话归属、重启状态机损坏在 OpenClaw（#150635、#144336）、NanoBot（#5798）、Hermes（#146217 压缩后护栏误判）同时出现，提示开发者在设计期就应把会话/记忆建模为可观测、可恢复的状态机，而非事后补丁。

2. **可观测性缺失比 Bug 本身更伤信任**：OpenClaw 用户反复强调"recall 完全停止但 info 级别无任何信号"（#138561）、NanoBot 被抑制发送返回成功 ack（#6620）、ZeroClaw 受限账户误判致命错误（#12357）——**静默失败与错误语义失真**是跨项目一致的用户不满。

3. **产品决策停滞成为独立瓶颈**：OpenClaw 多个高价值议题停在 `needs-product-decision`（#150635、#92473 积压 5 个月）、Hermes #2045 挂起近 8 个月、CoPaw #7990 近 7 周——用户已把问题分析到方案层面，等待的是方向裁定。开发者应建立"决策 SLA"而非仅评审 SLA。

4. **Provider 抽象红利正在兑现**：Moltis 表驱动"一条 `OpenAiCompatDef` 即可接入"、NullClaw 复用 `OpenAiCompatibleProvider`、NanoBot 迁移 MCP 工具，证明**协议兼容层做薄**能显著降低生态扩展成本；反之 ZeroClaw 的硬编码 temperature 类缺陷说明参数协商层仍需统一。

5. **发布链路是修复价值的最后一公里**：OpenClaw 两条 P0 更新链路议题（#193962、#167506）均为"旧版本无法靠自身到达新版本"，Hermes 用补丁版集中打包 618 PR 是对同一问题的另一种解法。**修复能合并 ≠ 修复能触达用户**，应纳入项目健康度核心指标。

6. **CI 门禁需与合并吞吐平衡**：ZeroClaw #12320 因安全公告导致全部 PR 无法合并，说明安全门禁的严格性与可用性需分层设计（如区分阻断级与告警级），否则会形成"越安全越难交付"的反向激励。

---

*说明：本报告严格基于所提供各项目 2026-11-10 动态摘要生成；部分项目 PR 评论数与点赞数据缺失，相关判断已改用创建时长、体量标签与更新活跃度替代，未作推断性补充。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-11-10）

## 1. 今日速览

今日 NanoBot 维持高强度开发节奏：27 条 PR 更新中 19 条已合并/关闭、8 条待合并，Issues 端有 5 条新开或活跃、0 关闭。PR 侧覆盖会话隔离、进程生命周期、沙箱配置、WebUI 主题与性能优化等多个模块，属于集中整理与修复日。Issues 端问题高度聚焦：**跨会话消息串台/串房**成为最突出主题（#5798、#6619、#6620），且已有对应修复 PR（#6613）。今日无新版本发布，但 0.4.1 发布准备 PR #6570 已合并落地。

---

## 2. 版本发布

今日无新 Release。不过 `chore(release): prepare 0.4.1`（PR #6570）已关闭并合并，说明 0.4.1 的发布准备已进入收尾阶段，正式版本可能临近。该 PR 摘要未包含具体变更清单，此处不推测内容。

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下几项对项目健康度影响较大：

**会话隔离（核心修复）**
- PR #6613 `fix(sessions): preserve cross-session input ownership and history`（OPEN）——修复跨会话输入消息的所有权与历史归属问题，解决 busy/idle 路径工作区范围不一致、历史路径导致输入重复或回复错配。这是对今日多个串台 Issue 的直接回应，尚待合并。

**进程与运维稳定性**
- PR #6625 `fix(gateway): avoid restarting stopped systemd services`（CLOSED）——修复 systemd `Restart=always` 导致 `gateway stop` 后进程被自动拉起的问题，直接对应 Issue #6624。
- PR #6623 `refactor(exec): centralize process-tree lifecycle`（OPEN）——将进程树启动、终止、清理集中到 `nanobot/execution/processes.py`，减少执行会话管理器对 shell 工具私有方法的依赖。

**架构收敛**
- PR #6621 `refactor(sessions)!: retire the global shared session`（OPEN）——移除全局共享会话模式（含配置、gateway 路由、WebUI 设置与翻译），保留按会话与显式主题路由。**注意：标题带 `!`，属破坏性变更**，需关注合并后的迁移影响。
- PR #6616 `refactor(tools): centralize scoped file operations`（OPEN）——将内置文件读写、编辑、patch、目录列举与 Python 搜索统一走带作用域的文件操作，并复用同一授权写入目标做编辑预览。

**WebUI 与性能**
- PR #6595（CLOSED）`feat(settings): check sandboxes and configure trusted launchers`——新增网关侧沙箱检查，使用临时文件与生产启动器解析/包装，不调用模型、不削弱命令隔离。
- PR #6581（CLOSED）`perf: reduce memory copies across files, sessions, and model requests`——在大文件读取、会话搜索与模型请求中按范围/增量返回，降低内存峰值且不截断可搜索历史与返回区间。
- PR #6412（CLOSED）`refactor(webui): unify code and diff highlighting`——统一代码与 diff 高亮路径，保留阅读与文件变更工作流。
- PR #6594（CLOSED）`feat(webui): refine day-night themes`、#6590、#6591（CLOSED）分别完善昼夜主题、新会话时关闭上下文侧栏、首次访问跟随浏览器语言。

**CI 稳定性**
- PR #6622（CLOSED）隔离易 flaky 场景并保留失败诊断；#6588、#6600（CLOSED）分别放宽图页面长任务预算与主题交叉淡入测试采样。

整体看，项目在**会话正确性、进程安全、架构收敛、WebUI 打磨**四条线上同步推进，19 条关闭 PR 显示合并吞吐处于高位。

---

## 4. 社区热点

- **Issue #5798 [bug] 回复串会话问题**（评论 3，最高）——用户在会话 A 运行中于会话 B 交流，回复却落到会话 A。用户明确指出 **0.3.0 无此问题，0.3.5 出现**，构成回归信号。链接：HKUDS/nanobot Issue #5798
- **Issue #5749 [enhancement] Expose stable tool invocation context for idempotent side effects**（评论 1）——指出 AgentRunner 已持有稳定的 provider tool-call ID 用于 checkpoint，但工具实现侧拿不到，阻碍幂等副作用。链接：HKUDS/nanobot Issue #5749
- **PR #6613**——作为 #5798 类问题的修复载体，是今日最受关注的技术落点。链接：HKUDS/nanobot PR #6613

**诉求分析**：社区焦点集中在**多会话/多房间场景下的消息路由正确性**。随着 NanoBot 被用于繁忙多会话与多房间部署，"哪条回复属于哪个会话"已从边缘问题升级为核心体验问题。

---

## 5. Bug 与稳定性

按影响程度排序：

**高：跨会话/跨房间消息错投（数据与体验双重影响）**
- **Issue #5798**（0.3.5，回归自 0.3.0）——回复串入不相干会话。**已有 fix PR：#6613**（OPEN，未合并）。
- **Issue #6619**（作者 orrinwitt）——多房间部署下，heartbeat 回合输出被投递到 session store 中"最近更新"的房间，而非与该工作关联的路由，导致无关房间泄漏。**暂无明确 fix PR**，但与 #6613 属同一问题域。
- **Issue #6620**（作者 orrinwitt）——内部回合（heartbeat）中 `message` 工具发送被抑制时，返回的是"成功措辞"的 ack 而非错误，调用方会被误导。**暂无 fix PR**。

**中：运维语义错误**
- **Issue #6624**（作者 IndigoC，今日新开）——`nanobot gateway install-service` 生成的 systemd 单元以 `--foreground` 启动且 `Restart=always`，`gateway stop` 报告已停止但进程被拉起。**已有 fix PR：#6625（CLOSED，已合并/关闭）**。此外，前台冲突提示错误地假定进程属于终端。

**健康度判断**：三个严重问题集中在"消息投递语义"，说明近期改动可能触及路由/会话状态管理；#6613 的存在是积极信号，但 #6619、#6620 尚缺对应修复，值得维护者优先排期。

---

## 6. 功能请求与路线图信号

- **Issue #5749（tool invocation context 暴露，开启于 2026-09-12，今日仍有更新）**：诉求是让工具实现拿到稳定的 provider tool-call ID，以实现幂等副作用。该需求与现有 checkpoint 机制天然衔接，属于"补齐已有能力"的低摩擦增强。目前未见直接对应 PR，但 PR #6623（进程生命周期集中化）、#6616（文件操作集中化）显示项目正在做执行层抽象，为此类改动提供了更好的落点，**中期被纳入的可能性较高**。
- **PR #6621（移除全局共享会话，破坏性）**：与 #6619/#6620 的"路由归属"问题方向一致——减少全局共享状态。若合并，可能从根本上收紧多会话行为，属于路线图层面的强信号。
- **PR #6595（沙箱检查 + 可信启动器）**：指向更可观测、更安全的命令隔离，是部署侧增强的延续。

---

## 7. 用户反馈摘要

- **回归敏感度高**：用户（#5798）主动对比 0.3.0 与 0.3.5，并用复现步骤精确描述，说明用户群体在认真跟进版本行为变化。
- **多会话/多房间是主要使用场景**："一个会话正在运行，在另一个会话交流"（#5798）、"多房间部署"（#6619）均来自真实部署形态，用户期望**回复固定在应回复的位置**。
- **对错误语义较真**：#6620 指出被抑制的发送返回成功 ack 而非 error，反映用户（尤其接入自动化的部署方）需要可靠的失败反馈。
- **运维场景细节到位**：#6624 精确指出 systemd 单元 `Restart=always` 与 `--foreground` 的组合后果，并附日志/工具路径，属高质量反馈。
- 未见明显满意度正面评价或点赞（各条 👍 均为 0），社区情绪以"报障与改进"为主。

---

## 8. 待处理积压

- **Issue #5749**（创建 2026-09-12，近两个月仍在更新，评论仅 1）——幂等工具调用上下文需求长期悬置，建议明确是否纳入路线图或给出暂缓理由。链接：HKUDS/nanobot Issue #5749
- **Issue #5798**（创建 2026-09-17，今日仍活跃）——串会话回归问题跨度近两个月；虽有 PR #6613，但尚未合并，建议推动落地并补充回归测试。
- **Issue #6619 / #6620**（均 2026-11-09 创建，0 评论）——尚无维护者回应，作为与 #5798 同域的严重问题，建议尽快确认是否由 #6613 一并覆盖。
- **PR #6621（破坏性重构）、#6623、#6616**（均 OPEN）——三项由 Re-bin 提出的重构 PR 需及时评审，尤其 #6621 涉及破坏性变更，拖久会加大与后续 PR 的冲突成本。

---

*说明：本日报严格基于所提供 GitHub 数据生成，PR 评论数在数据源中为 `undefined`，故未作解读；未提及的 Release 内容、指标与链接均不在数据范围内。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-10

## 1. 今日速览

项目维持高强度运转：过去 24 小时 Issues 更新 50 条（新开/活跃 49，关闭 1），PR 更新 50 条（待合并 29，已合并/关闭 21），并发布 v0.23.1 补丁版。合并活动集中在依赖安全修复（certifi、filelock、httpx2、undici、setuptools 等多项安全公告），说明维护者正在集中清理安全债。同时插件目录（plugin-catalog）提交明显升温，多条 PR 来自外部插件作者，社区生态扩展迹象明显。整体判断：活跃度高、健康度良好，但少量 P2 级会话/鉴权类 Bug 长期滞留，需关注。

## 2. 版本发布

**v0.23.1（2026-11-09）** — [Release 页面](https://github.com/NousResearch/hermes-agent/releases)

- 定位为补丁版本，将自 v0.23.0 以来合并的约 618 个 PR 汇总为稳定发布。
- 覆盖范围：GitHub Release（CLI 与安装器）、Microsoft Store 应用、Docker 与 Hermes Cloud。
- 破坏性变更/迁移注意事项：**材料中未披露**。发布说明明确本窗口的完整整理版说明将随 v0.24.0 一同发布，因此本版本不会有独立的功能性变更清单。

## 3. 项目进展

今日已合并/关闭的 PR 以依赖与安全升级为主，属"修地基"型推进：

- [#143990](https://github.com/NousResearch/hermes-agent/pull/143990) 将 `certifi` 升级至 2026.10.19，应对 CA 包公告 GHSA-6q48-6c7w-9gw2（涉 eMudhra 中间 CA 被入侵）。**已关闭**。
- [#145216](https://github.com/NousResearch/hermes-agent/pull/145216) 将 `filelock` 提升至 ≥4.2.1，清除 1 项 HIGH、2 项 LOW 公告。**已关闭**。
- [#145274](https://github.com/NousResearch/hermes-agent/pull/145274) 将 `setuptools` 升至 84.1.0，处理 GHSA-xmj3-9gf7-h52w 等。**已关闭**。
- [#127820](https://github.com/NousResearch/hermes-agent/pull/127820) 将 `httpx2` 从 2.7.0 升至 2.13.1，并为 MCP / computer-use 依赖栈加回归保护。**已关闭**。
- [#144653](https://github.com/NousResearch/hermes-agent/pull/144653)、[#147028](https://github.com/NousResearch/hermes-agent/pull/147028) 升级 undici / zod / fast-uri，清除 `hermes doctor` 报告的 npm audit 告警。**均已关闭**。
- 另有 dependabot 维护项：[#144453](https://github.com/NousResearch/hermes-agent/pull/144453)（body-parser 1.20.8→1.20.9）、[#144452](https://github.com/NousResearch/hermes-agent/pull/144452)（fast-uri 3.1.8→3.1.9）、[#121985](https://github.com/NousResearch/hermes-agent/pull/121985)（hpack 4.1.0→4.2.0）、[#145781](https://github.com/NousResearch/hermes-agent/pull/145781)（undici 6.29.0→6.29.1）。
- 关闭的 Issue：[#76381](https://github.com/NousResearch/hermes-agent/issues/76381) —— 三个 PluginSlot 名称（sidebar、footer-left、footer-right）已注册并写入文档但从未在 App.tsx 渲染，此问题现已关闭。

评估：今日合并没有带来用户可见的新能力，主要价值在于收敛安全告警、降低审计噪音，为下一版本的功能发布腾出干净基线。

## 4. 社区热点

- [#2045](https://github.com/NousResearch/hermes-agent/issues/2045)（13 评论，👍5，2026-03-19 创建至今仍 OPEN）— **懒加载技能**：当前所有技能名与描述在每次会话启动时都注入系统提示 `<available_skills>`，与是否使用无关。诉求是改为按需工具加载，以节省上下文。这是今日互动最高的议题，也是积压最久的。标签含 `needs-decision`、`P3`。
- [#145183](https://github.com/NousResearch/hermes-agent/issues/145183)（10 评论）— Linux 桌面窗口出现半透明效果，但外观设置中的"窗口半透明"选项在 Linux 上被隐藏，用户无法通过 UI 关闭。
- [#126362](https://github.com/NousResearch/hermes-agent/issues/126362)（9 评论）— `hermes update` 对写在 systemd drop-in 中的 `RestartPreventExitStatus=78` 误报修复警告（假阳性）。
- 插件生态热度上升：今日新提交的插件目录 PR 包括 [atlas](https://github.com/NousResearch/hermes-agent/pull/152746)（跨 Claude Code / Codex / Devin / Hermes 追踪持续性任务）、[docs-drift](https://github.com/NousResearch/hermes-agent/pull/152808)（Plugin Hackathon 参赛）、[nvidia-switchyard](https://github.com/NousResearch/hermes-agent/pull/152256)（本地/远端模型路由）以及 [epoch 0.8.0](https://github.com/NousResearch/hermes-agent/pull/152806)（Desktop 蒙特卡洛图表页）。

分析：热点呈现出"上下文成本"与"平台一致性"两条主线——用户既在意长期会话的 token 开销，也在意 Linux/Windows 等平台上功能是否真正可用。

## 5. Bug 与稳定性

按严重度排列（材料未给出崩溃/数据丢失级问题）：

**P2（需优先）**
- [#147387](https://github.com/NousResearch/hermes-agent/issues/147387) — 受限 dashboard 中间件拒绝 Desktop 的 token 模式凭据（`X-Hermes-Session-Token` / `?token=`），Remote gateway 连接在启用鉴权的 dashboard 上失败。**无 fix PR**。
- [#126229](https://github.com/NousResearch/hermes-agent/issues/126229) — Desktop 在压缩交接链后消息渲染顺序错乱（当前构建已含 #119878）。**无 fix PR**。
- [#139652](https://github.com/NousResearch/hermes-agent/issues/139652) — Desktop GUI 工具被延迟且不可达，`tool_call` 在桌面会话上拒绝 `desktop_preview`，预览面板无法驱动。**无 fix PR**。
- [#105541](https://github.com/NousResearch/hermes-agent/issues/105541) — gateway 轮次取消需等待流刷新，且在刷新进行中取消会被吞掉，返回正常完成响应。**无 fix PR**。
- [#149905](https://github.com/NousResearch/hermes-agent/issues/149905) — Webapp 中 `session_key` 为 NULL、行 id 为铸造键的会话被列出但无法恢复（"Resume failed: not_found"）。**无 fix PR**。
- [#146217](https://github.com/NousResearch/hermes-agent/issues/146217) — 工具循环护栏计数在上下文压缩后仍保留，压缩后合法的 skill/file 重载被误判为无进展并中止长轮次。**无 fix PR**。
- [#130897](https://github.com/NousResearch/hermes-agent/issues/130897) — Matrix 上无法将 cron 简报发到房间本身（`cron_continuable_surface: in_channel`），每个简报都开新线程。**无 fix PR**。
- [#138322](https://github.com/NousResearch/hermes-agent/issues/138322) — Windows 上插件依赖从上一代 `uv.lock` 重新播种，永不再前进（hindsight-embed 卡在 0.10.2，破坏 Hindsight 守护进程）。**无 fix PR**。
- [#144989](https://github.com/NousResearch/hermes-agent/issues/144989) — 迁移 HERMES_HOME 到另一主机后 Bot Mode 规范 Bot Chat 无法恢复（`profile_mismatch` 回执），cron 投递静默失败。**无 fix PR**。

**P3**
- [#152674](https://github.com/NousResearch/hermes-agent/issues/152674) — 安全类：Desktop ws 身份丢失，服务端铸造含身份的 ws ticket，但消息准入被记为 `uid:10000`（双账号复现）。**无 fix PR**。
- [#79030](https://github.com/NousResearch/hermes-agent/issues/79030) — 护栏绕过：`patch` / `write_file` 被拦截时敏感配置仍可被 shell 编辑。**无 fix PR**。
- [#126362](https://github.com/NousResearch/hermes-agent/issues/126362) — systemd drop-in 场景下的误报更新警告。**无 fix PR**。
- [#142944](https://github.com/NousResearch/hermes-agent/issues/142944) — 配置目录为符号链接/junction 时无法对话，自身客户端也无法连接。**无 fix PR**。
- [#130669](https://github.com/NousResearch/hermes-agent/issues/130669) — 失败轮次、截断、中断提示绕过 `agent.i18n`，硬编码英文。**无 fix PR**。
- [#145183](https://github.com/NousResearch/hermes-agent/issues/145183) — Linux 半透明窗口无法关闭（见社区热点）。**无 fix PR**。

已有 fix PR 的：
- [#152805](https://github.com/NousResearch/hermes-agent/pull/152805)（OPEN）— 异步解析后守卫 cron 写入门禁，防止陈旧 scope。

## 6. 功能请求与路线图信号

- **上下文压缩重构为背景执行**：[#117886](https://github.com/NousResearch/hermes-agent/issues/117886) 提出在轮次边界后台压缩，避免摘要 LLM 调用阻塞当轮；[#97390](https://github.com/NousResearch/hermes-agent/issues/97390) 要求 gateway 会话按频道做空闲后台压缩。两者重叠，且多起 Bug（#126229、#146217）的根因都在压缩链路，**被纳入下一版本的信号较强**。
- **懒加载技能**：[#2045](https://github.com/NousResearch/hermes-agent/issues/2045) 是今日互动最高议题，标签含 `needs-decision`，落地下限取决于产品决策。
- **插件 LLM 调用支持 prompt 缓存**：[#152778](https://github.com/NousResearch/hermes-agent/issues/152778) 指出 `complete_structured` 无缓存标记，且一次性规则会将其丢弃；涉及 Anthropic / Bedrock 计费，属新增诉求。
- **插件目录扩面**：atlas、docs-drift、nvidia-switchyard、epoch 0.8.0 四条 PR 今日均在 OPEN 状态，若审核通过，将显著增强插件生态。

## 7. 用户反馈摘要

- **上下文成本焦虑**：多起议题围绕技能列表、压缩开销、护栏误判，用户显然在长会话与多技能场景下承受了可感知的延迟与 token 消耗。
- **平台一致性落差**：Linux 半透明确实无法关闭、Windows 插件依赖不推进、Matrix 无法在频道内发简报，反映跨平台适配仍是短板。
- **升级体验**：`hermes update` 的误报警告让用户困惑是否为真实问题。
- **多环境迁移**：有用户将多配置安装从 Windows 迁至 Linux（`HERMES_HOME` 变化、`state.db` 拷贝），迁移后 Bot Chat 与 cron 投递失效，属真实且高频的企业使用场景。
- **安全边界**：用户主动报告护栏可被 shell 绕过，说明存在有一定安全意识的用户在审视实现。
- **正面信号**：插件作者自发提交目录条目（部分声明仓库所有权、援引 Hackathon 规则），显示生态参与意愿积极。

## 8. 待处理积压

- [#2045](https://github.com/NousResearch/hermes-agent/issues/2045) — 自 2026-03-19 创建，近 8 个月仍 OPEN，今日仍为最高互动议题，`needs-decision` 长期未决。
- [#76381](https://github.com/NousResearch/hermes-agent/issues/76381) — 2026-08-01 创建，今日关闭，属长期积压的良性收尾（此处记录以确认闭环）。
- [#79030](https://github.com/NousResearch/hermes-agent/issues/79030) — 安全类，2026-08-05 创建，仅 2 条评论，无 fix PR，建议提升优先级。
- [#97390](https://github.com/NousResearch/hermes-agent/issues/97390)、[#117886](https://github.com/NousResearch/hermes-agent/issues/117886) — 自 8 月/9 月起持续需要决策，与多条 P2 Bug 共享压缩链路根因。
- [#105541](https://github.com/NousResearch/hermes-agent/issues/105541)、[#126229](https://github.com/NousResearch/hermes-agent/issues/126229)、[#126362](https://github.com/NousResearch/hermes-agent/issues/126362) — 均为 9 月创建、P2/P3 级别、无 fix PR，已滞留约 6 周以上。
- PR 侧 29 条待合并，其中多条插件目录提交（[#152746](https://github.com/NousResearch/hermes-agent/pull/152746)、[#152808](https://github.com/NousResearch/hermes-agent/pull/152808)、[#152256](https://github.com/NousResearch/hermes-agent/pull/152256)、[#152806](https://github.com/NousResearch/hermes-agent/pull/152806)）集中于今日，建议尽快审核以维持外部贡献者动力。

> 注：以上内容均基于所提供材料。PR 评论数在原始数据中未提供（显示为 undefined），因此未作排名判断。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-10

## 1. 今日速览

今日 PicoClaw 活跃度处于低位：Issues 零更新，PR 仅 3 条变动（2 条待合并、1 条已关闭），无新版本发布。已关闭的 #3448（Runcrate 提供商）是今日唯一实质进展，其余两条均为未合并的社区贡献。值得注意的是，当前待合并的 2 条 PR 中有一条被标记为 `stale`（积压超一周），而关闭的 PR 同样带 `stale` 标签，说明项目对长期停滞 PR 存在清理机制，但同时也提示社区贡献转化效率偏低。整体健康度：**稳定但低活跃**，维护者响应节奏偏慢，需关注积压清理与新贡献者的接纳路径。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #3448 [CLOSED] 新增 Runcrate OpenAI 兼容提供商** — 作者 heydryft | 创建 2026-10-25 | 更新 2026-11-09 | 已于今日关闭（未合并）
  链接: sipeed/picoclaw PR #3448
  该 PR 旨在将 Runcrate 作为一等 OpenAI 兼容提供商（`runcrate/` 前缀，base `https://api.runcrate.ai/v1`）接入，属于模型提供商生态扩展。从摘要仅可确认其被关闭，**无法从提供的数据判断是合并还是放弃**，亦无维护者评审意见记录。项目在「多提供商兼容」方向上的推进因此无法确认为正向进展，建议维护者补充关闭原因以保留决策记录。

整体而言，项目今日在功能层面**无明显向前推进**，唯一关闭动作的落地效果未知。

## 4. 社区热点

今日无评论数与👍数据（均为 undefined 或 0），无实质性讨论热点。相对受关注的三条 PR 为：

- PR #3467 [OPEN] 新增法语 UI 本地化 — slashr512 | 2026-11-10 当日创建
  链接: sipeed/picoclaw PR #3467
- PR #3455 [OPEN] [stale] 修复 NVIDIA 模型 ID / Termux shell 问题 — theophillus-imtl
  链接: sipeed/picoclaw PR #3455
- PR #3448 [CLOSED] [stale] Runcrate 提供商 — heydryft
  链接: sipeed/picoclaw PR #3448

**诉求分析**：三条 PR 分别指向「国际化（i18n）」「移动端/终端环境兼容」「模型提供商生态」三个方向，反映出社区关注点集中在**易用性扩展与运行环境多样性**，而非核心架构。由于缺少评论数据，无法评估社区共鸣强度。

## 5. Bug 与稳定性

今日无新 Issue 报告，无崩溃或回归问题记录。

唯一与稳定性相关的线索为 **PR #3455**，标题指向「NVIDIA 模型 ID」与「Termux shell」的修复，可能涉及在 Termux 环境下模型标识处理的问题。但该 PR 摘要正文为空（仅保留模板占位），**无法确认所修复缺陷的具体表现与严重程度**，且该 PR 已 `stale` 超一周，fix 尚未落地。建议维护者要求作者补充描述。

## 6. 功能请求与路线图信号

今日无 Issue 形式的功能请求。从 PR 维度可识别的路线图信号：

- **UI 国际化**：PR #3467 引入完整法语语言包（`fr.json`、i18next 资源注册、dayjs locale），若合并将扩展 Web 启动器的多语言覆盖。属于低风险、可增量合并的增强项，**较可能纳入下一版本**。
- **提供商扩展**：PR #3448 的 Runcrate 接入方向与既有「OpenAI 兼容提供商」模式一致，但该 PR 已关闭，是否以其他形式重新提交未知。
- **终端环境兼容**：PR #3455 指向 Termux 场景，反映轻量级部署需求。

以上判断均基于 PR 标题与摘要，无维护者路线图声明可佐证。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户痛点、使用场景或满意度反馈。可间接观察到的信号仅为贡献者行为：社区成员主动提交本地化、提供商适配、移动端修复，说明存在**多语言用户群与轻量/移动部署场景**的真实需求。此结论为推断，缺乏评论佐证。

## 8. 待处理积压

- **PR #3455 [OPEN] [stale] Fix/nvidia model id termux shell** — 创建于 2026-11-01，已停滞约 9 天
  链接: sipeed/picoclaw PR #3455
  风险：描述缺失且长期未响应，既阻塞相关修复落地，也可能劝退贡献者。建议维护者明确反馈或关闭。
- **PR #3448 [stale]** 已于今日关闭，但其关闭原因未记录，建议补充说明以避免同类 PR 重复提交。
- **PR #3467** 为当日新建，尚在正常响应窗口内，暂不构成积压，但需关注是否复制前两条 PR 的停滞轨迹。

**维护者行动建议**：优先清理 `stale` 标签 PR，建立「关闭即说明原因」的惯例，并对新提交的本地化类 PR 给予快速响应，以维持社区贡献积极性。

---

*说明：本报告严格基于所提供的 GitHub 数据生成。部分字段（评论数、👍、PR 关闭性质）在源数据中缺失或为 undefined，相关结论已作保留表述，未作推断性补充。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-10

## 1. 今日速览

今日 NanoClaw 无 Issue 更新、无新版本发布，唯一的活跃面集中在 PR 流水线：24 小时内 15 条 PR 发生更新，其中 8 条关闭/合并、7 条仍待合并，维护者 glifocat 一人贡献了绝大多数动作。已关闭的 8 条 PR 中 7 条为缺陷修复类（标签含 `PR: Fix`），覆盖安装向导、渠道接入、provider 切换与更新流程，说明项目正处于"打磨安装与多渠道路由稳定性"的阶段。一条容器镜像刷新 PR 与多条依赖/运行时升级 PR 表明基础设施维护同步进行。整体活跃度评估为**中等偏低但质量导向**：无社区噪声、修复密度高，健康度良好（链接：nanocoai/nanoclaw PR #4203、#3797、#4315、#4204、#3802、#4202、#4213、#4312、#4275、#4276、#4332、#4156、#4331、#4147、#3697）。

## 2. 版本发布

今日无新版本发布（数据源 Releases 为空），本节省略。

## 3. 项目进展

今日关闭/合并的 8 条 PR 主要推进两条主线：

**安装与更新体验（4 条）**
- PR #4202（已关闭）：setup 现在会安装 `jq`，使 Slack、Discord、Telegram、Teams、Dial 的渠道配置在 WSL 和精简 Ubuntu 镜像上可用；基于已合并的 #4200 sudo 预检。此前这些 skill 在缺 `jq` 环境下失败。
- PR #4213（已关闭）：`setup --step provider-auth <provider>` 在安装 provider 后重启运行中的 host，修复新 provider 首次对话不可用的问题。
- PR #4312（已关闭）：默认安装后首次执行 `/update-nanoclaw` 不再因 `pnpm-lock.yaml` 冲突而中断（setup 的 `add-onecli` 提交引入 `@onecli-sh/sdk` 与上游 lockfile 行冲突）。
- PR #4332（已关闭）：agent 容器升级至 Claude Code 2.1.321 与 Agent SDK 0.3.321，这是首对识别 `claude-fable-5-2` 的版本；此前 2.1.296 会把该 id 误读为 Fable 5。

**渠道行为与安全（4 条）**
- PR #3797（已关闭）：修复 Mattermost 中一次顶层 @ 提及后机器人回应频道内所有后续顶层消息的问题，对齐 Slack 的线程参与逻辑。
- PR #3802（已关闭）：`mention-sticky` 仅在 agent 实际被唤醒的线程中生效，不再在无人提及的线程里唤醒 agent（涉及默认 `ignored_message_policy='accumulate'` 场景）。
- PR #4315（已关闭）：Dial 默认发送者 pin 在重写 auth 文件时不再以默认 umask 留下其他用户可读的账户 token。
- PR #4276（已关闭）：dependabot 将 `@anthropic-ai/claude-agent-sdk` 从 0.3.296 升至 0.3.316。

整体向前迈进幅度：本轮以"修复型冲刺"为主，消除了安装链路（jq 缺失、provider 重启、lockfile 冲突）和渠道消息路由（Mattermost、mention-sticky）两类高频故障点，对首次安装成功率与多渠道行为一致性有实质提升。

## 4. 社区热点

今日数据中所有 Issues/PR 的评论数均缺失（标记为 `undefined`），点赞数均为 0，没有任何讨论热度的量化证据。按创建时间与更新跨度看，以下几项持续周期最长、最值得关注：

- PR #3697（OPEN，2026-09-01 创建，2026-11-09 更新）：新增 `/add-keenable-tool` skill，将 Keenable 的网页搜索与页面抓取注册为远程 MCP 工具，通过 pinned `mcp-remote` 桥接。由外部贡献者 ilya-bogin-keenable 提交，已挂起超两个月，反映第三方 MCP 集成在评审队列中等待较久（链接：nanocoai/nanoclaw PR #3697）。
- PR #4203（OPEN，2026-10-23 创建）：OneCLI 远程网关把 agent 指向自身机器时的告警，属安装误导类问题（链接：nanocoai/nanoclaw PR #4203）。
- PR #4147 与 #4156（均为 OPEN，10-19/10-20 创建）：审批卡片的展示完整性与转义、渠道无法完整展示时拒绝卡片，同属 `area/credentials`、`area/skills` 的安全类改动，且都在今日/昨日仍有更新（链接：nanocoai/nanoclaw PR #4147、#4156）。

诉求归纳：外部贡献者希望扩展 MCP 工具生态；核心团队在多渠道（Slack/Google Chat/Discord/Telegram/WhatsApp Cloud）下对审批卡片的安全渲染有一致性诉求。

## 5. Bug 与稳定性

今日无新开 Issue，以下为今日有更新的缺陷相关 PR，按影响面排序：

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 高 | Dial 默认发送者 pin 以默认 umask 写 auth 文件，账户 token 可被其他用户读取 | 已关闭（已修复） | PR #4315 |
| 中 | `mention-sticky` 在无人提及的线程中唤醒 agent（默认 accumulate 策略下） | 已关闭（已修复） | PR #3802 |
| 中 | Mattermost 中一次 @ 提及后机器人回应频道内所有后续消息 | 已关闭（已修复） | PR #3797 |
| 中 | Slack 后台安装失败仅保存状态、不说明原因；重跑后 verify 仍失败 | 待合并 | PR #4204 |
| 中 | WSL / 精简镜像缺 `jq` 导致多渠道路配置失败 | 已关闭（已修复） | PR #4202 |
| 中 | 新装 provider 后 host 未重启，首次对话不可用 | 已关闭（已修复） | PR #4213 |
| 低 | 首次 `/update-nanoclaw` 因 `pnpm-lock.yaml` 冲突中断 | 已关闭（已修复） | PR #4312 |
| 低 | Claude Code 2.1.296 无法识别 `claude-fable-5-2` 模型 id | 已关闭（已修复） | PR #4332 |
| 低（安全加固） | 审批卡片文本未转义，且渠道无法完整展示时仍截断展示 | 待合并 | PR #4156、#4147 |
| 低（误导） | OneCLI 远程网关可能把 agent 指向自身机器，setup 无提示 | 待合并 | PR #4203 |

未发现崩溃或回归类新报告。

## 6. 功能请求与路线图信号

今日无新 Issue 形式的功能请求，路线图信号来自待合并 PR：

- **Keenable MCP 工具集成**（PR #3697，`kind/feature`）：新增 `/add-keenable-tool` skill，为选定 agent group 注册远程 MCP 工具。已挂起两个多月，是当前队列中唯一的纯新功能项；若评审通过，将成为外部 MCP 工具接入的样板（链接：nanocoai/nanoclaw PR #3697）。
- **审批卡片展示策略**（PR #4156、#4147，`kind/hardening`）：确立"能完整展示才展示、否则拒绝"的渠道级卡片规则，属安全加固方向，今日仍在推进，纳入下一版本的可能性较高。
- **运行时现代化**（PR #4332 已关闭、#4275 待合并）：Claude Code / Agent SDK 持续跟进，其中 PR #4275 将 `@anthropic-ai/sdk` 从 0.108.0 升至 1.3.0，属大版本跃迁，合并前需关注兼容性（链接：nanocoai/nanoclaw PR #4275）。

## 7. 用户反馈摘要

今日无 Issue 评论数据，PR 摘要中反映的真实痛点如下：

- **安装环境碎片化**：WSL 与精简 Ubuntu 镜像缺 `jq` 导致渠道配置失败，用户实际部署环境比官方假设更"裸"（PR #4202）。
- **更新流程易中断**：默认安装后首次更新即遇 `pnpm-lock.yaml` 冲突，新用户的最初体验受损（PR #4312）。
- **provider 切换后需手动重启**：安装后首次对话不可用，属隐性使用门槛（PR #4213）。
- **渠道行为不一致**：Mattermost 与 Slack 的线程参与逻辑不一致，且 `mention-sticky` 会在未提及场景过度唤醒，用户对"机器人吵闹"敏感（PR #3797、#3802）。
- **凭据暴露风险**：Dial auth 文件权限问题属安全性不满点（PR #4315）；审批卡片在 Slack 150 字符、Discord 256 字符截断限制下丢失动作信息，用户无法看清待批准内容（PR #4147、#4156）。
- **接入配置易误配**：OneCLI 远程网关指向自身机器时无任何提示，用户难以自查（PR #4203）。

满意度信号：修复密集且多为用户可感知的安装/路由问题，但数据中无正向反馈记录，不作推断。

## 8. 待处理积压

- **PR #3697**（OPEN，创建 2026-09-01，已挂起约 70 天）：Keenable MCP 工具 skill，外部贡献者提交，长期无合并动作，存在贡献者流失风险（链接：nanocoai/nanoclaw PR #3697）。
- **PR #4147**（OPEN，创建 2026-10-19）：审批卡片完整展示，已挂起约 3 周，与 #4156 属同一安全主题，建议合并评审（链接：nanocoai/nanoclaw PR #4147）。
- **PR #4156**（OPEN，创建 2026-10-20）：审批卡片转义与渠道拒展示，同上（链接：nanocoai/nanoclaw PR #4156）。
- **PR #4203**（OPEN，创建 2026-10-23）：OneCLI 网关自指告警，约 2.5 周未合并（链接：nanocoai/nanoclaw PR #4203）。
- **PR #4204**（OPEN，创建 2026-10-23）：Slack 安装失败原因展示与重跑后 verify 通过，同批次遗留（链接：nanocoai/nanoclaw PR #4204）。
- **PR #4275**（OPEN，创建 2026-11-06）：`@anthropic-ai/sdk` 0.108.0 → 1.3.0 大版本升级，需兼容性评审（链接：nanocoai/nanoclaw PR #4275）。
- **PR #4331**（OPEN，创建 2026-11-10）：agent 镜像硬化刷新（`v2026.10.0` → `v2026.10.0-20261109T1401`），机器人自动提交，待合并（链接：nanocoai/nanoclaw PR #4331）。

维护者建议：优先清理 10 月下旬积压的 4 条核心团队自有 PR（#4147、#4156、#4203、#4204），并对 #3697 给出明确评审结论。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-11-10

## 1. 今日速览
今日项目整体处于「低讨论、高提交」状态：过去 24 小时无新增或活跃 Issue，也无任何 PR 合并或关闭，但有 3 个 PR 处于待合并状态（其中 2 个为今日新提）。净结果是代码库本身没有推进，但 Provider 层的扩展性成为当天唯一的集中方向——3 个待合并 PR 中有 2 个直接面向 provider 接入，1 个面向 web_search 搜索源接入。社区互动信号极弱（所有 PR 评论数均为 undefined/0，点赞均为 0），说明当前瓶颈不在需求端，而在维护者评审与合并节奏。活跃度评估：**偏低**，建议优先处理积压评审。

## 2. 版本发布
今日无新版本发布，省略。

## 3. 项目进展
今日无合并或关闭的 PR，项目主干代码未向前推进。3 个待合并 PR 均停留在 OPEN 状态：

- PR #1093 `feat(providers): add OpenCode Go support`（作者 ibhagwan，创建/更新 2026-11-10）— 新增内置 `opencode-go` 兼容 provider，指向 `https://opencode.ai/inference/go/openai/v1`，并在每次请求中发送必需的 `x-opencode-session` 头（摘要显示缺少该头会被 OpenCode Go 拒绝）。[链接](nullclaw/nullclaw/pull/1093)
- PR #1092 `feat(providers): add UberLLM as an OpenAI-compatible gateway`（作者 PSA-Team-source，创建/更新 2026-11-10）— 复用现有 `OpenAiCompatibleProvider` 接入 UberLLM，未新增 provider 实现；摘要称单 key 可覆盖约 260 个 chat 模型（Anthropic、OpenAI、DeepSeek、Qwen 等）。[链接](nullclaw/nullclaw/pull/1092)
- PR #1091 `feat(web_search): add Keenable provider (no API key required)`（作者 KGKallasmaa，创建 2026-11-03，更新 2026-11-10）— 新增 `src/tools/web_search_providers/keenable.zig`，无需 API key，默认调用免费公共端点 `POST https://api.keenable.ai/v1/search/public`。[链接](nullclaw/nullclaw/pull/1091)

值得注意的两个结构性信号：其一，PR #1092 明确走 `OpenAiCompatibleProvider` 复用路径，说明项目的 OpenAI 兼容抽象在降低新增网关的边际成本；其二，PR #1091 落在 `keenable.zig`，印证项目采用 Zig 实现。整体推进幅度：**0%**（今日无合并）。

## 4. 社区热点
今日无评论数与反应数据（全部 PR 评论为 undefined、👍 为 0），严格意义上不存在「讨论热点」。若按覆盖能力与影响面排序，最值得关注的是：

1. **PR #1092（UberLLM 网关）** — 单 key 覆盖约 260 个 chat 模型，对多模型用户吸引力最大。[链接](nullclaw/nullclaw/pull/1092)
2. **PR #1091（Keenable，免 API key）** — 直接消除搜索工具的接入门槛，且创建于 11-03、直到 11-10 才更新，已停留一周。[链接](nullclaw/nullclaw/pull/1091)
3. **PR #1093（OpenCode Go）** — 涉及必须的 `x-opencode-session` 请求头处理，属于 provider 适配的细节正确性问题。[链接](nullclaw/nullclaw/pull/1093)

背后诉求分析：三者共同指向同一件事——用户希望减少「接入摩擦」，包括聚合多模型（一个 key 打通多家）、降低搜索工具门槛（免 key），以及适配特定网关的协议细节。当前缺乏讨论并不代表需求弱，更可能是这些 PR 尚未获得维护者回应。

## 5. Bug 与稳定性
今日无新增 Issue，因此**没有用户报告的 Bug、崩溃或回归问题**。与之最接近的稳定性相关信息是 PR #1093 摘要中提到的前提：OpenCode Go 会拒绝缺少 `x-opencode-session` 头的请求——这是外部服务的强制要求，该 PR 本身即为修复性适配，并非项目内既有缺陷。无已知 Bug 需要 fix PR。

## 6. 功能请求与路线图信号
今日无 Issue 形式的功能请求，路线图信号全部来自待合并 PR：

| 信号 | 来源 PR | 纳入下一版本的可能性判断依据 |
|---|---|---|
| 免 API key 的 web_search 后端 | #1091 | 实现路径清晰、已有具体文件落点；但已挂起约一周，需维护者评审 |
| 聚合型 OpenAI 兼容网关（UberLLM） | #1092 | 复用现有抽象、无新实现，评审成本相对较低 |
| 特定网关协议适配（OpenCode Go） | #1093 | 属于兼容性刚需（缺头即被拒），但今日刚提，尚未有评审动作 |

仅凭现有数据无法断定任何一项会被纳入下一版本；可判断的是，provider / tool 接入是最明确的扩展方向。

## 7. 用户反馈摘要
今日无 Issue 评论可供提炼，因此**没有可引用的真实用户痛点、使用场景或满意度反馈**。仅能从 PR 摘要侧面推断使用动机：多模型统一接入（UberLLM 约 260 模型）、搜索能力零配置可用（Keenable 免 key）、对接 OpenCode Go 推理端点。以上均属提交者自述，非社区共识。

## 8. 待处理积压
- **PR #1091（Keenable，免 API key）** — 创建于 2026-11-03，至 2026-11-10 更新，已积压约 7 天且无评论记录，是最需要维护者响应的待评审项。[链接](nullclaw/nullclaw/pull/1091)
- **PR #1092、#1093** — 均为 2026-11-10 当日新提，尚在正常评审窗口内，暂不构成积压，但建议与 #1091 一并安排评审，避免 Provider 层积压扩大。[#1092](nullclaw/nullclaw/pull/1092) · [#1093](nullclaw/nullclaw/pull/1093)

**健康度小结**：Issue 侧零噪声、零积压，稳定性无异常；主要风险集中在 PR 评审吞吐——3 个待合并 PR 全部未获评论，且最早的已等待一周。若能集中完成一轮评审合并，项目在 provider 生态广度上将获得可感知的提升。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-11-10

## 1. 今日速览

今日 LobsterAI 无 Issues 更新、无新版本发布，活动集中在 Pull Request 通道：24 小时内共 5 条 PR 更新，其中 4 条已关闭（均为修复类），1 条待合并。整体属于"修 bug 为主、功能推进为辅"的稳定迭代日，活跃度中等偏低但改动质量扎实。4 条已关闭 PR 覆盖网页搜索链路、智能体设置面板、macOS 桌面伴侣与 OpenClaw 修复流程四个不同模块，显示维护者正在集中收敛跨平台、跨模块的稳定性问题。唯一新功能提案来自社区贡献者，尚未合并，值得关注其后续走向。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日 4 条已关闭 PR 均为缺陷修复，主要推进方向如下：

- **网页搜索架构调整**（#3043，已关闭）：应用内浏览器模式下，网页搜索与页面读取改由带认证的本地桥接在 Electron 隐藏页面执行，复用应用内浏览器会话与代理配置；独立模式仍走 Playwright + Chrome，保持 Google 优先、Bing 回退。同时新增对 Fake-IP DNS 与 TUN 网卡的探测，命中时放行 RFC 2544 基准测试地址段。该 PR 涉及 docs、main、openclaw、skills 多个领域，属于本次 PR 中影响面最大的一项。链接：netease-youdao/LobsterAI PR #3043
- **智能体设置面板数据丢失修复**（#3042，已关闭）：解决可用模型列表刷新时覆盖用户未保存编辑的问题，表单初始化仅在智能体 ID 变更时执行，并单独保留用户的模型选择。链接：netease-youdao/LobsterAI PR #3042
- **macOS 全屏场景菜单不可见修复**（#3040，已关闭）：修复背景应用全屏时双击 orb 无法弹出菜单（打开快捷面板 / 换个形象 / 设置…）的问题，作者定位到 macOS 10.14 以来普通 Dock 应用窗口的显示层级限制。链接：netease-youdao/LobsterAI PR #3040
- **OpenClaw 大快照修复超时修复**（#3039，已关闭）：一键修复在大型状态快照复制期间可能触及 15 分钟命令上限，现根据数据量动态设定等待时间并上报复制进度。链接：netease-youdao/LobsterAI PR #3039

总体看，项目在桌面端体验一致性（macOS 全屏、设置面板）、网络环境兼容性（Fake-IP / TUN）和关键运维流程（OpenClaw 修复）三条线上各前进了一步，属于"补短板"性质的推进，而非新能力扩展。

## 4. 社区热点

今日 5 条 PR 的评论数据均未采集到（显示为 undefined），点赞数均为 0，未形成显著的讨论热度。从改动范围看，跨模块标签最多的 #3043（docs、main、openclaw、skills）与唯一处于 OPEN 状态的 #3041（renderer、docs、main、cowork）最值得关注。

- #3043：netease-youdao/LobsterAI PR #3043
- #3041：netease-youdao/LobsterAI PR #3041

背后的诉求可归纳为：一方面社区关注应用内浏览器与网络代理环境下的搜索可靠性（#3043）；另一方面希望降低新用户发现生图能力的门槛，通过示例化作品引导创作（#3041）。

## 5. Bug 与稳定性

按影响范围排列，今日修复的 Bug 均已附带 fix PR：

1. **macOS 全屏下 orb 菜单失效**（#3040，已关闭，已有 fix）——影响桌面伴侣核心交互入口，仅在全屏背景应用时触发，属平台特定回归类问题。链接：netease-youdao/LobsterAI PR #3040
2. **智能体设置面板未保存编辑被覆盖**（#3042，已关闭，已有 fix）——存在用户配置丢失风险，属数据完整性类问题。链接：netease-youdao/LobsterAI PR #3042
3. **OpenClaw 一键修复超时**（#3039，已关闭，已有 fix）——大型状态快照场景下修复流程中断，影响运维可用性。链接：netease-youdao/LobsterAI PR #3039
4. **网页搜索在特定网络环境下受限**（#3043，已关闭，已有 fix）——Fake-IP DNS / TUN 网卡场景下的地址段限制问题，属兼容性问题。链接：netease-youdao/LobsterAI PR #3043

今日无新增 Issues 报告的崩溃或回归问题，稳定性面表现平稳。

## 6. 功能请求与路线图信号

今日无新开 Issues，功能信号主要来自唯一待合并 PR：

- **#3041 可配置图片创作示例**（OPEN，作者 btc69m979y-dotcom）：在新任务页增加默认展开的「图片创作」作品区，用户可从具体示例发现生图能力，选择作品后可编辑提示词、使用示例素材或上传自有图片，再带入输入框由用户确认发送；首页与专家广场中的「图像创意搭档」共用同一作品目录与创作流程，并配套响应式卡片、作品预览、草稿准备/恢复，以及首页、提示词、专家详情页的细滚动条、边缘渐隐与下翻提示等 UI 细节。链接：netease-youdao/LobsterAI PR #3041

判断：该 PR 为社区外部贡献者提交、尚未合并，且横跨 renderer/docs/main/cowork 多个领域，合入前可能需要维护者较多评审。若纳入下一版本，将显著提升生图能力的可发现性，属于面向新用户的功能引导型改进。

## 7. 用户反馈摘要

今日无 Issues 更新，且 PR 评论数据未采集，无法从评论中提炼真实用户痛点与满意度。仅能从 PR 描述间接观察到两类使用场景诉求：

- 用户在代理、Fake-IP DNS、TUN 等网络环境下对网页搜索可用性的需求（#3043）。
- 用户对"从示例入手"发现生图能力的引导需求（#3041）。

以上均来自提交者的问题描述，非终端用户直接反馈，解读时需谨慎。

## 8. 待处理积压

由于数据仅覆盖过去 24 小时（Issues 0 条、PR 5 条），无法识别长期未响应的重要 Issue 或 PR。当前唯一需维护者关注的待办项为：

- **#3041**（OPEN，创建与更新均为 2026-11-10）：新功能提案，等待评审与合并决策。链接：netease-youdao/LobsterAI PR #3041

建议维护者关注其跨模块改动范围，并明确是否需要拆分或补充测试说明。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-11-10）

## 1. 今日速览

今日项目活跃度偏低：过去 24 小时无新 Issue、无 Issue 关闭、无版本发布。唯一的动向是一条新提交的开放 PR #1323，为项目新增一个 OpenAI 兼容的 Provider 接入，尚未合并。整体上项目处于平稳推进状态，没有风险信号，但也缺少用户侧互动反馈，社区活跃度指标今日接近静默。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目主干没有实际代码变更落地。

唯一在推进的是一条待合并 PR：

- **[PR #1323] feat(providers): add Runcrate provider**（OPEN，作者 heydryft，创建于 2026-11-09）
  https://github.com/moltis-org/moltis/pull/1323
  该 PR 基于项目已有的“表驱动” OpenAI 兼容 Provider 结构，新增 Runcrate Provider：按作者描述，只需新增一条 `OpenAiCompatDef` 条目并加入已知 Provider 列表，实现方式参照了既有的 DeepInfra 与 Fireworks 条目。这说明此前将 OpenAI 兼容 Provider 改为表驱动的重构已经生效，显著降低了新增 Provider 的边际成本。

## 4. 社区热点

今日讨论最集中的对象是 **PR #1323**（评论数数据缺失，👍 0），也是唯一有更新的条目，尚无实质性的评论互动。

https://github.com/moltis-org/moltis/pull/1323

从内容看，其背后的诉求是**扩展模型/推理服务接入范围**：社区贡献者希望把 Runcrate 纳入可用 Provider 列表。该 PR 同时印证了维护者推动的“Provider 配置表驱动化”方向获得了外部贡献者的正面反馈，属于架构决策带动外部贡献的正向信号。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告（Issues 更新为 0）。当前无稳定性风险事项。

## 6. 功能请求与路线图信号

今日无新功能请求类 Issue。结合在途 PR 判断：

- **PR #1323（Runcrate Provider）** 是唯一具备进入下一版本潜力的变更，前提是通过评审并合并。属于增量式 Provider 扩展，不涉及破坏性变更，合入门槛相对较低。
- 该 PR 描述中反映的“表驱动 Provider 注册”机制，可视为后续批量接入 OpenAI 兼容服务的路线图基础设施。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户痛点与使用场景。可参考的唯一社区声音来自 PR #1323 作者的评价：其明确表示 Provider 表驱动化“让新增一个 Provider 只需一条 `OpenAiCompatDef` 条目”，并对既有 DeepInfra、Fireworks 条目作为参考模式表示认可。这属于对开发体验的正面反馈。

## 8. 待处理积压

今日数据未提供长期未响应的 Issue 或 PR 列表，无法识别具体积压项。需提醒维护者关注的是 **PR #1323 目前处于 OPEN 且无评论状态**，建议尽快安排评审或给出反馈，避免外部贡献者的首个 PR 长时间悬置而影响后续贡献意愿。

https://github.com/moltis-org/moltis/pull/1323

---

**健康度小结**：今日数据面较薄（0 Issue、0 发布、1 待合并 PR），项目处于低活跃但无异常的状态。唯一值得跟踪的动作是 Provider 扩展类 PR 的评审进度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-11-10

## 1. 今日速览

CoPaw 今日进入 2.3.0 发布冲刺期：39 条 PR 更新（21 待合并、18 已合并/关闭）、12 条 Issue 更新（8 新开/活跃、4 已关闭），并发布 v2.3.0-beta.4。活跃度处于高位，主要驱动力是 2.3.0 版本线收尾与 Desktop/插件体系稳定性修复。版本线本身仍有回归未清：附件路径截断问题在 beta.3 仍可复现，Console 前端与通道插件的兼容性问题集中出现。整体健康度：**高活跃、中等风险**——发布节奏快，但 beta 阶段回归与平台兼容问题需要优先收敛。

## 2. 版本发布

**v2.3.0-beta.4**（Beta）
链接：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.4

更新内容（据 release notes）：
- `fix(channels)`：跨更新保留插件依赖，并修复通道启动问题（@Luohh5，PR #8653）
- `fix(plugins)`：恢复被中断的增量依赖安装（@Luohh5，对应 PR #8659）

注意事项：
- 两处修复均指向此前的插件安装中断/依赖丢失问题，与 Issue #8644（打包版 Desktop 上通道插件无法激活）方向一致，建议升级后验证通道插件激活与依赖完整性。
- 数据中未提供明确的破坏性变更说明；附件路径截断回归（Issue #8655）在 beta.1–beta.3 均存在，**beta.4 是否修复未在材料中体现，升级后需自行验证**。
- 配套发布验收 Issue #8667 已开出，截止 2026-11-10 18:47 UTC，需完成平台安装验证。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#8659 [CLOSED] fix(plugins): recover interrupted additive dependency installations**（size/L，@Luohh5）
  https://github.com/agentscope-ai/QwenPaw/pull/8659
  解决插件安装写入依赖成功但校验失败后残留修复标记、阻塞后续安装甚至阻止启动的问题。已进入 beta.4。

- **#8664 [CLOSED] feat(community): support remote password login with saved credentials**（size/XL，@Osier-Yi）
  https://github.com/agentscope-ai/QwenPaw/pull/8664
  为远程 Docker 部署等无法走本地回调授权的场景补充账号/密码登录，并支持“保存并连接”。对自托管用户是可感知的可用性提升。

- **#8665 [CLOSED] chore: bump the version to 2.3.0b4**
  https://github.com/agentscope-ai/QwenPaw/pull/8665
  发布版本号推进，配套 **#8666 [OPEN] chore: bump the version to 2.3.0**（https://github.com/agentscope-ai/QwenPaw/pull/8666），显示正式版 2.3.0 已在准备中。

- **#8643 [CLOSED] Release Duty v2.3.0-beta.3 安装验收**
  https://github.com/agentscope-ai/QwenPaw/issues/8643

项目整体推进幅度：**插件生命周期可靠性 + 远程部署接入**两条线有实质前进；正式版号 PR 已开，2.3.0 进入最后阶段。

## 4. 社区热点

- **#8178 [OPEN] feat(skills): support nested (categorised) skill directories**（first-time-contributor，size/XXL，2026-10-11 创建，今日仍在更新）
  https://github.com/agentscope-ai/QwenPaw/pull/8178
  让技能支持 `<root>/<category>/<skill>/SKILL.md` 分层布局，对齐其他 agent 产品的组织方式，同时保持扁平布局兼容。反映用户对技能数量增长后的**分类管理**诉求；体量大、已挂起近一个月，是当前最值得推进的社区 PR 之一。

- **#8651 [CLOSED] QQ 通道静默丢弃纯图片 C2C 消息**
  https://github.com/agentscope-ai/QwenPaw/issues/8651（4 条评论，今日关闭）
  问题发生在模型调用之前，与 provider 无关，说明是通道层消息解析缺陷。

- **#7990 [OPEN] 模型目录未为 Aliyun Token Plan 声明 thinking_param_style**
  https://github.com/agentscope-ai/QwenPaw/issues/7990（2026-09-25 创建，4 条评论，今日仍活跃）
  上游端点实际支持 `reasoning_effort` / `thinking`，但 Console 思考控件被隐藏。背后诉求是**模型目录元数据与实际能力对齐**，属长期未收敛问题。

## 5. Bug 与稳定性

按严重程度排列：

**高 — 发布线回归：附件路径被截断为盘符根目录（“C:\”）**
- Issue #8655（OPEN，beta.1 引入，beta.3 仍复现）
  https://github.com/agentscope-ai/QwenPaw/issues/8655
- 现象：文件保存成功，但传给模型的路径被截断，图片无法加载。Windows 用户受影响，属 2.3.0 阻断级回归。
- **未见到对应 fix PR**，需在正式版 2.3.0 前处理。

**高 — 打包版 Desktop 通道插件全部无法激活**
- Issue #8644（CLOSED，2.3.0b3）
  https://github.com/agentscope-ai/QwenPaw/issues/8644
- 根因：`validate_runtime_identity` 从 `DependencyReadEvidence` 读 `supported_tags` 触发 AttributeError → `WORKER_START_FAILED`；影响 feishu/wechat/yuanbao。今日关闭，且 beta.4 的插件/通道修复 PR #8653、#8659 方向吻合，**疑似已有修复进入 beta.4**。

**中 — mission 切换模型后派发脚本仍用原模型导致任务失败**
- Issue #8652（OPEN）
  https://github.com/agentscope-ai/QwenPaw/issues/8652
- 描述简短，缺少复现细节，建议维护者补充环境信息。未见 fix PR。

**中 — Hub 2.2.2 聊天正文 `/workspace/` 文件下载链接打开 SPA HTML**
- Issue #8661（OPEN）
  https://github.com/agentscope-ai/QwenPaw/issues/8661
  涉及 `internalFileLinks.ts` 与 Chat 页面，2.2.2 与 2.2.2.post1 代码一致。未见 fix PR。

**中 — Safari 下消息队列操作按钮（编辑/中断发送/删除）不渲染**
- Issue #8663（OPEN，macOS Safari；Chrome 正常）
  https://github.com/agentscope-ai/QwenPaw/issues/8663
  浏览器兼容性问题，未见 fix PR。

**低 — 思考块与工具卡片视觉不一致，步骤列表左缘跳动**
- Issue #8650（OPEN，enhancement）
  https://github.com/agentscope-ai/QwenPaw/issues/8650
  纯 UI 问题，已在 PR #8668（Console 性能优化）之外单列，无直接修复。

## 6. 功能请求与路线图信号

| 请求 | Issue/PR | 判断 |
|---|---|---|
| 技能目录支持嵌套分类 | #8178（PR 已开，XXL，first-time-contributor） | 实现完整、方向明确，**有较大概率进入后续版本**，但体量大需 review 资源 |
| Mistral provider 插件收录（reasoning + prompt cache） | #8656（OPEN，请求收录） | 定位为插件而非核心改动，走插件市场路径更可能；短期内不会进主线 |
| Aliyun Token Plan 模型声明 `thinking_param_style` | #7990（OPEN，9/25 起） | 属模型目录数据修正，成本低、影响 Console 可用性，**适合在 2.3.x 小版本纳入** |
| 远程/无浏览器授权场景的账号密码登录 | #8664（已 CLOSED） | 已落地，体现自托管部署场景诉求 |

相关基础设施信号：
- **PR #8647 / #8648 / #8649**（@LXD-8）拆分引入本地模型引擎（llama.cpp GPU、MLX）、GPU 与自动更新控制，是较大的方向性投入，需关注评审与合并顺序（#8649 需先合）。
  https://github.com/agentscope-ai/QwenPaw/pull/8647
- **PR #8668** Console 性能优化（降低空闲合成器开销与流式渲染成本）：
  https://github.com/agentscope-ai/QwenPaw/pull/8668

## 7. 用户反馈摘要

真实痛点与场景：
- **Windows 中文环境文件编码**：PR #8234 反映 GBK/CP936 笔记文件被按 UTF-8 `errors="ignore"` 解码导致丢字节，是中文用户的典型场景（https://github.com/agentscope-ai/QwenPaw/pull/8234）。
- **本地 Ollama 上下文窗口被 128k 默认值误判**：PR #8236 指出应按 `num_ctx` 而非云端窗口计算，影响 `qwen3-coder:30b` 等本地模型（https://github.com/agentscope-ai/QwenPaw/pull/8236）。
- **国内通道依赖**：QQ、飞书、微信、元宝等通道插件被真实使用，其激活失败（#8644）和消息丢失（#8651）直接影响日常使用。
- **企业/团队凭据**：Aliyun Token Plan（`sk-sp-` 前缀）在多处暴露协议差异（#8534、#7990），说明团队版凭据是重要使用形态。
- **部署形态多样**：pip + systemd、Windows Server、macOS、远程 Docker、打包 Desktop 均有用户，兼容性矩阵压力大。

不满意点集中在：beta 版本回归（附件路径）、跨浏览器/跨平台前端不一致、模型能力元数据与 UI 不同步。

## 8. 待处理积压

需维护者关注：

- **#8178**（PR，2026-10-11 开，XXL，first-time-contributor）技能嵌套目录，已近一个月未合。
  https://github.com/agentscope-ai/QwenPaw/pull/8178
- **#8234**（PR，2026-10-14，XXL）GBK/CP936 解码修复。
  https://github.com/agentscope-ai/QwenPaw/pull/8234
- **#8236**（PR，2026-10-14，XXL）Ollama `num_ctx` 上下文窗口修复。
  https://github.com/agentscope-ai/QwenPaw/pull/8236
- **#8426**（PR，2026-10-26，XXXL）将第三方 agent 抽取为插件，属架构级改动。
  https://github.com/agentscope-ai/QwenPaw/pull/8426
- **#7990**（Issue，2026-09-25 起）Aliyun Token Plan `thinking_param_style` 缺失，近 7 周未解决。
  https://github.com/agentscope-ai/QwenPaw/issues/7990
- **#8655**（Issue，今日新报）附件路径截断回归——虽非积压，但属 2.3.0 发布前**必须优先处理**的阻断项。
  https://github.com/agentscope-ai/QwenPaw/issues/8655

---

*说明：本日报仅基于所提供数据生成；PR 评论数在数据中为 `undefined`，社区热点部分改用创建时长、体量标签与更新活跃度作为替代判断依据。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报（2026-11-10）

## 1. 今日速览

项目今日活跃度较高：过去 24 小时共 16 条 Issue 更新（新开/活跃 9、关闭 7）、50 条 PR 更新，其中 48 条待合并、仅 2 条合并/关闭。零新版本发布。**CI 健康度是当前最大风险点**：Issue #12320 显示 `Security` 任务因 RUSTSEC-2026-0459（libsqlite3-sys 0.38.2 捆绑的 SQLite 3.53.2）在每个构建中失败，`CI Required Gate` 随之失败，导致所有 PR 无法合并且合并队列停滞——这与 48 条待合并 PR 的积压直接呼应。此外今日出现多条与模型兼容性相关的运行时缺陷（硬编码 `temperature`、缺少 `reasoning_content` 字段）。

## 2. 版本发布

今日无新版本发布。`release:v0.9.0` 标签已出现在多个 Issue 与 PR 上（#7432、#12320、#11984、#12368），表明 v0.9.0 的发布范围正在规划中。

## 3. 项目进展

今日合并/关闭数量有限（2 条 PR 合并/关闭；7 条 Issue 关闭），但关闭的 Issue 覆盖了若干实际缺陷：

- **#12153 [CLOSED]** `install.sh` 在装有 musl 包的 glibc 主机上误选 musl 构建（S3）。直接影响 Ubuntu 上的首次安装体验。
- **#12362 [CLOSED]** Skill review fork 硬编码 `temperature: Some(0.3)`，在拒绝该参数的模型上返回 HTTP 400（0.8.7 及 master 均存在）。与此相关的 #12366 仍开放，且已有对应修复 PR #12368。
- **#12357 [CLOSED]** 受限（非管理员）账户启动 `zerocode` 时因 config/logs 面板将权限拒绝视为致命错误而退出（S2）。
- **#12354 [CLOSED]** zerorelay 未刷新 TLS 写入，导致 relay 服务的 dashboard 资源挂起至空闲超时（S1）。
- **#12347 [CLOSED]** zerocode 配置写入可能丢失并发的 `zerocode-config.toml` 更新（S3）。
- **#11919 [CLOSED]** Web chat 新增“保持 Thinking 框折叠”开关（#11920 已实现，配套 UI 修复 PR #12374 今日提交）。

整体看，今日关闭集中在 zerocode/TUI 与 web 层面的中小缺陷；网关/运行时路线图（#7432）仍在推进中，尚未进入合并阶段。

## 4. 社区热点

- **#7432 [Tracker] Runtime, dashboard sign-in and gateway delivery**（16 条评论，今日更新）
  https://github.com/zeroclaw-labs/zeroclaw/issues/7432
  承接 RFC #5574 的运行时与网关路线图，负责发布分配、剩余缺口、排序与验收证据。标签含 `risk:high`、`priority:p2`、`release:v0.9.0`，是理解 v0.9.0 范围的关键入口。
- **#12320 [Bug] Security 任务因 RUSTSEC-2026-0459 每次构建失败**（3 条评论，S1）
  https://github.com/zeroclaw-labs/zeroclaw/issues/12320
  讨论焦点是 CI 阻塞：Security 与 CI Required Gate 同时失败，PR 无法合并、合并队列无法落地。这是当前项目健康度最紧迫的问题。
- **#12373 [Feature] 只写式 WebUI 凭据管理与作用域密钥引用**（当日新开，0 评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/12373
  提出在 Storage → Secrets 下提供仅元数据列举、只写创建/替换、禁用/删除与受控凭据引用的运维界面，作者主动征求范围讨论，值得在早期介入设计。
- **PR #11847 原生 Rust XMPP + 可选 legacy OMEMO**（`size:XL`、`risk:high`、`needs-maintainer-review`，今日更新 head 至 1d062fc5，合并 master 6877da56d）
  https://github.com/zeroclaw-labs/zeroclaw/pull/11847
  长期大 PR，今日针对离线 OMEMO 会话重置补了原子化对等设备索引清理，仍待维护者审阅。

## 5. Bug 与稳定性

按严重程度排列：

- **S1 — #12320** Security job 因 RUSTSEC-2026-0459（libsqlite3-sys 0.38.2 / SQLite 3.53.2）在每个构建失败，阻塞全部合并。**暂无对应 fix PR**（数据中未见）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12320
- **S1 — #12354 [CLOSED]** zerorelay 不刷新 TLS 写入，dashboard 资源挂起至空闲超时。今日已关闭。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12354
- **S2 — #12366** Heartbeat phase-1 决策轮与 model-routing 探针硬编码 `temperature = 0.0`，拒绝 temperature 的模型会报错。**已有 fix PR #12368**（`release:v0.9.0`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12366
- **S2 — #12357 [CLOSED]** 受限账户启动 zerocode 时因权限拒绝被当作致命错误而退出。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12357
- **S3 — #12351** `ordinary_failure_then_real_anthropic_server_fallback_keeps_original_request_visible` 在 CI 中间歇失败。**无 fix PR**。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12351
- **S3 — #12350** Telegram 频道测试在 CI 的 Parallel Runtime Test 中挂起至 30 分钟作业超时。**无 fix PR**。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12350
- **无严重度标签 — #12361** 多轮对话在要求 assistant 历史中包含 `reasoning_content` 的提供商（如 Reflection AI / Beam）上失败，`ChatMessage` 结构无该字段。**无 fix PR**。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12361

值得注意的模式：今日三个问题（#12366、#12362、#12361）同属“提供商参数/协议兼容性”类，说明模型兼容层缺少统一的参数协商与历史字段适配。

## 6. 功能请求与路线图信号

- **#11984 [CLOSED]** 非管理员 OIDC 登录账户以自身身份与授权 agent 对话——已关闭，属于 dashboard 登录序列（#11961）的延续。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11984
- **#12373** 只写式 WebUI 凭据管理与作用域密钥引用（安全/运维方向，尚无 PR）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12373
- **#12372** Git 频道 `draft_mode`：progress / placeholder / off 三档，控制进度评论是否流式写入 issue。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12372
- **#12353** 在 ZeroCode 与 web chat 中显示每段对话的累计预估美元成本，复用现有 cost ledger。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12353
- 相关在途 PR 信号：**#12368**（temperature 硬编码修复，打 `release:v0.9.0`，最可能进入下一版本）、**#12374/#12375**（web 键盘与可访问性小修）、**#12335**（WebSocket 配对凭据移出 URL）、**#12269**（配对设备语音设置与聊天控件）、**#11845/#11846**（OpenRouter 余额展示与配置开关）。

## 7. 用户反馈摘要

- **CI 阻塞是全体贡献者的共同痛点**：#12320 明确指出 Security 失败导致“没有 PR 能合并、合并队列无法落地”，与 48 条待合并 PR 的现状互相印证。
- **模型兼容性是真实使用摩擦**：#12362 由用户在官方 0.8.7 二进制上复现，说明发布版本即受影响；#12361 来自使用 Reflection AI/Beam 的用户，反映对非 OpenAI 风格提供商的支持不足。
- **隐私/安全诉求上升**：#12335 移除 URL 中的配对凭据、#12373 要求凭据只写不可读，显示用户对凭据暴露面敏感。
- **受限权限用户场景被忽视**：#12357 揭示非管理员主体在 zerocode 中无法正常工作，与 #11984 的 dashboard 非管理员聊天需求属同一类诉求。
- **成本可见性需求**：#12353 反映用户在预算额度内工作，需要实时看到花费。
- **体验细节**：#12372 显示用户不希望 bot 在 issue 中流式刷进度评论；#11919 显示用户希望推理过程默认折叠。

## 8. 待处理积压

- **#11845**（2026-10-18 创建，`size:L`，OpenRouter 余额展示）与 **#11846**（同批，配置开关）——已挂起 3 周以上，今日仅有更新。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11845 · https://github.com/zeroclaw-labs/zeroclaw/pull/11846
- **#11847**（2026-10-19，`size:XL`、`risk:high`、`needs-maintainer-review`）原生 XMPP/OMEMO——超大 PR，持续占用审阅资源。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11847
- **#11874**（2026-10-19）长回合进度上报；**#11911**（2026-10-20，`size:XL`）保留已完成工具结果；**#11869**（2026-10-19，`size:XL`）任务级 SSH 连接复用；**#11868**（2026-10-19，`risk:high`）重复工具调用前置拦截——均为同一贡献者的长期大 PR。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11874 · https://github.com/zeroclaw-labs/zeroclaw/pull/11911 · https://github.com/zeroclaw-labs/zeroclaw/pull/11869 · https://github.com/zeroclaw-labs/zeroclaw/pull/11868
- **#9447**（2026-07-27 创建，`needs-maintainer-review`、`size:XL`、`trusted contributor`）Anthropic 不完整终端响应分类——积压时间最长的重点 PR。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9447
- **#12269**（2026-11-06，`size:XL`）配对设备语音设置与聊天控件，等待审阅。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12269

**维护者建议**：优先解除 #12320 的 CI 阻塞（它是当前所有合并的前置条件），随后集中审阅 #9447 与 #11847 两个长期 XL PR，避免审阅队列继续堆积。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*