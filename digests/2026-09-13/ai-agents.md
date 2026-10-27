# OpenClaw 生态日报 2026-09-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-13 12:19 UTC

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

# OpenClaw 项目日报 · 2026-09-13

## 1. 今日速览

项目今日维持**极高活跃度**：过去 24 小时 Issues 与 PR 各更新 500 条，新开/活跃 Issue 273 条、关闭 227 条，PR 侧待合并 273 条、已合并/关闭 227 条，处理吞吐与新增量基本持平，积压规模稳定但未见收敛。**稳定性仍是当前主线矛盾**：P0/P1 级 bug 密集出现，集中在子智能体会话状态丢失、Gateway 崩溃循环、SQLite 阻塞事件循环与升级/恢复可靠性四类问题。维护者 steipete 单日提交大量修复 PR，并持续推进 Swarm（子智能体）修复的分批落地。社区讨论热度最高的仍是长期悬而未决的 subagent 完成结果静默丢失问题。**今日无新版本发布**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无新版本发布，进展主要体现在 PR 合并与关闭（227 条已合并/关闭）及 Subagent（Swarm）修复的分批推进：

- **Swarm 修复分批落地** — PR #130741 `fix(agents): reconcile subagents through scoped session owner` 显示“29 项聚焦修复已合并”，并列出自 #146462（修复授权指引）、#146486（插件导入扫描）、#146488 等已合并项，剩余 Swarm 修复仍在继续。这是当前对子智能体可靠性问题最系统性的推进。
  https://github.com/openclaw/openclaw/pull/130741
- **微信渠道回复失效修复** — PR #147001 `fix(channels): keep replies working after hot config reload`（维护者 steipete，标记 `proof: sufficient`、`merge-risk: 🚨 compatibility`，待维护者审阅）针对热配置重载后入站渠道回复因 `PreparedModelCatalogConfigReplacedError` 失败的问题，Fixes #146854、Related #145563——即今日关闭的微信渠道 P0 bug。
  https://github.com/openclaw/openclaw/pull/147001
- **模型配额恢复测试补齐** — PR #146708 `test(models): cover quota recovery during catalog discovery` 已关闭，覆盖账号被封禁期间启动模型目录发现、后续回合恢复配额的回归场景。
  https://github.com/openclaw/openclaw/pull/146708
- **macOS 浏览器登录恢复** — PR #146787 `fix(macos): recover browser sign-in when no browser opens` 已关闭（P0），修复浏览器未弹出时登录等待超时无恢复手段的问题。
  https://github.com/openclaw/openclaw/pull/146787
- **升级/恢复可靠性相关修复入队** — PR #147009 `fix(update): preserve linked plugins during post-core sync`（Fixes #146958）、PR #147011 `fix(cli): keep update canaries on foreground Gateway startup`，直接对应 P0 追踪 Issue #145252。
  https://github.com/openclaw/openclaw/pull/147009 · https://github.com/openclaw/openclaw/pull/147011

整体判断：项目在**修复密度上处于高强度推进状态**，但当日新增与关闭基本持平，说明问题发现速度与修复速度同步高位运行，尚未进入净收敛阶段。

---

## 4. 社区热点

今日讨论最集中的 Issue 集中在**子智能体（subagent）编排与会话状态可靠性**，反映出 swarm/多智能体能力已成为核心使用场景，但其可靠性尚未达到生产级信任。

| 议题 | 状态 | 评论 | 链接 |
|---|---|---|---|
| #97616 泄漏未回收的 hook/tool 子进程，zombie 累积致运行时退化 | OPEN · P1 | 30 | https://github.com/openclaw/openclaw/issues/97616 |
| #135111 v2026.8.1 间歇性 “malformed JSON arguments”（claude-sonnet-5） | CLOSED · P1 | 27 | https://github.com/openclaw/openclaw/issues/135111 |
| #44925 Subagent 完成结果静默丢失——无重试、无通知、超时无自动重启 | OPEN · P1 | 27 · 👍2 | https://github.com/openclaw/openclaw/issues/44925 |
| #67777 Subagent 完成投递在 direct-announce 超时/drain/orphan prune 时丢失 | CLOSED · P1 | 16 | https://github.com/openclaw/openclaw/issues/67777 |

**诉求分析**：这三条 open/closed 的 subagent 相关议题（#44925、#67777）指向同一根因族——完成结果的投递路径在忙碌、超时、重启、孤儿清理等边界条件下缺乏可靠兜底，用户侧表现为“任务静默消失”。#97616 的 30 条评论与“zombie 累积”描述，则指向长时运行场景下的资源回收缺陷（含 🦪 silver shellfish 评级）。这些是影响用户对多智能体能力信任度的关键问题。

---

## 5. Bug 与稳定性

### P0（发布阻断 / 崩溃循环）

- **#145252 [Tracking] 2026.9.3 / 2026.9.4 升级与恢复可靠性**（OPEN，维护者 roboclaw-bot，`impact:crash-loop`、`impact:ux-release-blocker`）
  协调升级、Doctor、迁移、回滚与重启可靠性。已见对应修复 PR #147009、#147011 入队。
  https://github.com/openclaw/openclaw/issues/145252
- **#140162 Windows 网关在 181s 超时后将正常启动的网关当作 stale 进程杀掉**（OPEN，P0，`impact:crash-loop`）
  两个失败模式叠加成完全宕机；暂无 fix PR。
  https://github.com/openclaw/openclaw/issues/140162

### P1（严重功能/数据问题）

- **#97616 未回收子进程导致 zombie 累积**（OPEN，P1，`impact:message-loss, impact:crash-loop`）— 30 条评论，**暂无 fix PR**。
  https://github.com/openclaw/openclaw/issues/97616
- **#144911 MCP server 初始化超时崩溃 Gateway**（OPEN，P1，`clawsweeper:queueable-fix`、`fix-shape-clear`）— stdio MCP 30s 超时触发子进程清理路径未处理拒绝。**已有明确修复形状，可排期**。
  https://github.com/openclaw/openclaw/issues/144911
- **#139847 回复运行中到达的消息被丢弃**（OPEN，P1，2026.9.2 回归，`queueable-fix`）— 报错 “Reply operation has no active tool authority snapshot”。
  https://github.com/openclaw/openclaw/issues/139847
- **#137332 混合终态 requester-settle 批次在所有权检查后永久重试**（OPEN，P1，`queueable-fix`，`impact:session-state`）。
  https://github.com/openclaw/openclaw/issues/137332
- **#136183 命令执行器 spawn ssh 后挂起**（OPEN，P1，2026.8.1 回归、2026.8.2 仍存在）— **暂无 fix PR**。
  https://github.com/openclaw/openclaw/issues/136183
- **#132765 `agents_wait` 忽略 timeoutSeconds**（OPEN，P1）— 约 60s 后以工具错误终止而非返回 pending。
  https://github.com/openclaw/openclaw/issues/132765
- **#141474 Collector 子进程调用 `sessions_yield` 致 `agents_wait` 永久挂起**（OPEN，P1，claude-cli 后端，含 `outputSchema` 静默失效）— **暂无 fix PR**。
  https://github.com/openclaw/openclaw/issues/141474
- **#115367 渠道读取门禁要求 `origin: bundled`，但 slack/discord/matrix/msteams/feishu 均已改为外部插件**（OPEN，P1，`impact:security`）— 导致读取被锁死在当前会话。
  https://github.com/openclaw/openclaw/issues/115367
- **#144502 WhatsApp 移动端无法播放 TTS 语音（48 kHz + Lavf vendor tag）**（OPEN，P1，`linked-pr-open`）。
  https://github.com/openclaw/openclaw/issues/144502

### 今日已关闭的重要 Bug

- **#145563 微信渠道回复分发失败（`PreparedModelCatalogConfigReplacedError`）**（CLOSED，P0）— 修复 PR #147001 已在队列中。
  https://github.com/openclaw/openclaw/issues/145563
- **#137927 内部上下文块泄漏到 Telegram 可见消息文本**（CLOSED，P1，`impact:security`）。
  https://github.com/openclaw/openclaw/issues/137927
- **#142476 2026.9.3 cron session reaper 同步 PRAGMA integrity_check 阻塞事件循环 14–76s/次**（CLOSED，P1）。
  https://github.com/openclaw/openclaw/issues/142476
- **#135111 v2026.8.1 间歇性 malformed JSON arguments**（CLOSED，P1）。
  https://github.com/openclaw/openclaw/issues/135111

### 性能类

- **#118885 大型 SQLite 库在单次启动中执行冗余完整完整性检查**（OPEN，P1）。
  https://github.com/openclaw/openclaw/issues/118885

---

## 6. 功能请求与路线图信号

结合已有 PR，以下需求具备被纳入下一版本的现实可能：

- **浏览器工具增强**（#60381，CLOSED/stale）— 为 click 增加 `force` 参数、暴露 evaluate action，解决 Playwright 严格命中测试导致 React/Vue/Svelte 前端交互失败。相关基础工作见 PR #146973（拆分 browser session tab 跟踪与清理）、#135648（profile 默认值合并为单次 map 分配，减少分配开销）——浏览器扩展模块正在被系统性重构，为后续功能腾出空间。
  https://github.com/openclaw/openclaw/issues/60381 · https://github.com/openclaw/openclaw/pull/146973 · https://github.com/openclaw/openclaw/pull/135648
- **SQLite 会话转录读 API 家族**（#79904、#79903、#79905，均 CLOSED/stale）— 游标式转录读 API、持久化 session lineage/sessionId 发现、类型化转录投影与 companion 重建契约。均围绕 umbrella #79902 与重构 #78595。信号：数据库优先运行时正在为外部 consumer 铺路，但相关 Issue 已被 stale 关闭，重新激活取决于维护者优先级。
  https://github.com/openclaw/openclaw/issues/79904 · https://github.com/openclaw/openclaw/issues/79903 · https://github.com/openclaw/openclaw/issues/79905
- **MCP Apps 控制界面开关**（PR #147012）— `mcp.apps.enabled` 此前仅 CLI 可设，新增 Web UI 开关，让 MCP server 渲染交互式 HTML。属于配置可达性改进，落地概率高。
  https://github.com/openclaw/openclaw/pull/147012
- **iOS 侧边栏切换已保存网关**（PR #146641，`proof: sufficient`，待维护者审阅）。
  https://github.com/openclaw/openclaw/pull/146641
- **memory-core 保留策略诉求**（#114612）— `memory_index_chunks` 与 `memory_embedding_cache` 无保留/淘汰策略，将随时间填满磁盘。属架构级需求，当前标记 `needs-product-decision`。
  https://github.com/openclaw/openclaw/issues/114612

---

## 7. 用户反馈摘要

**核心痛点（高频、跨议题重复出现）**

1. **子智能体结果静默丢失是最集中的不满**。#44925（👍2）描述“无重试、无通知、超时无自动重启”；#101656（👍2）指出 Telegram 侧 detached subagent 会静默运行，无存活状态也无终态通知，用户侧无法区分“仍在跑”和“已死掉”。#67777 补充了 direct-announce 超时、drain、orphan prune 三种丢失路径。
   https://github.com/openclaw/openclaw/issues/44925 · https://github.com/openclaw/openclaw/issues/101656 · https://github.com/openclaw/openclaw/issues/67777
2. **长时运行稳定性**。#97616（👍1，30 条评论）的 zombie 累积与运行时退化，是长时运行实例运维者的直接痛点。
   https://github.com/openclaw/openclaw/issues/97616
3. **上下文溢出的硬重置反复触发**。#63216（👍3，已 stale 关闭）反馈即便 `reserveTokensFloor` 高于推荐值，同一群会话 key 仍反复硬重置，重试循环会重新注入 bootstrap 上下文——反映压缩余量配置与实际行为不一致。
   https://github.com/openclaw/openclaw/issues/63216
4. **大群组规模下的性能退化**。#142476 来自 632-agent 网关配置的真实部署：2026.9.3 可正常启动服务（#139583 的修复生效），但每几分钟阻塞事件循环 14–76 秒。
   https://github.com/openclaw/openclaw/issues/142476

**使用场景特征**
- 大规模多智能体网关（数百 agent）、Telegram forum 模式、WhatsApp/微信个人号渠道、systemd/k8s 部署是反复出现的生产环境画像。
- 跨渠道一致性被反复提及：#26494 指出同一模型在飞书正常、Telegram 异常（已 stale 关闭）。

**满意/不满意**
- 正面信号主要来自修复落地速度：维护者单日大量修复 PR、Swarm 修复已合并 29 项、多个 P1 在报告后数日内关闭（如 #135111、#137927、#145563）。
- 不满意集中在：修复与回归的**赛跑感**——2026.8.1、2026.9.2、2026.9.3 连续多个版本被标注为回归引入点，用户对升级存在明显观望情绪，这也解释了 P0 追踪 Issue #145252 的必要性。

---

## 8. 待处理积压

以下为长期未收敛、且对用户影响明确的重要条目，建议维护者优先分配注意力：

| 条目 | 停滞情况 | 风险 | 链接 |
|---|---|---|---|
| #97616 子进程泄漏 / zombie 累积 | 创建 2026-06-29，至今 OPEN，30 条评论，**无 fix PR** | P1，crash-loop | https://github.com/openclaw/openclaw/issues/97616 |
| #44925 Subagent 完成静默丢失 | 创建 2026-03-13，逾 6 个月 OPEN，`needs-product-decision` | P1，session-state / 数据丢失 | https://github.com/openclaw/openclaw/issues/44925 |
| #136183 ssh spawn 挂起 | 2026-08.1 回归至今未修，**无 fix PR** | P1，功能不可用 | https://github.com/openclaw/openclaw/issues/136183 |
| #141474 agents_wait 永久挂起 + outputSchema 静默失效 | 2026-09-07 至今，`needs-product-decision` | P1，session-state | https://github.com/openclaw/openclaw/issues/141474 |
| #115367 渠道读取门禁与外部插件模型冲突 | 创建 2026-07-28，`needs-product-decision` + `needs-maintainer-review` | P1，安全 / 功能锁死 | https://github.com/openclaw/openclaw/issues/115367 |
| #114612 memory-core SQLite 无界增长 | 创建 2026-07-27，`needs-product-decision`，标记 `dedupe:parent` | P2，磁盘耗尽 | https://github.com/openclaw/openclaw/issues/114612 |
| #86214 Codex app-server 大日志下回合中断 | 创建 2026-05-24，已 stale | P1，message-loss | https://github.com/openclaw/openclaw/issues/86214 |
| #132765 agents_wait 忽略 timeoutSeconds | 创建 2026-08-29，`needs-maintainer-review` | P1，message-loss | https://github.com/openclaw/openclaw/issues/132765 |

**结构性观察**：积压中相当比例的条目卡在 `needs-product-decision` / `needs-maintainer-review` 状态，而非等待技术修复——说明当前瓶颈部分来自**产品决策带宽**，而非工程能力。与之对照，#144911、#139847、#137332 等待处理项已带 `queueable-fix` 标签，具备明确修复形状，属于可快速推进的低阻力队列，建议优先清空以改善净收敛趋势。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析
**统计日期：2026-09-13**

---

## 1. 生态全景

当日生态整体呈现"**高活跃、低发布、修复密集型**"特征：13 个受观测项目中无一发布新版本，但多数项目 Issues/PR 吞吐维持高位，社区注意力高度集中于**稳定性与状态一致性**而非新功能。**子智能体（subagent）编排可靠性、会话状态持久化、多进程共享状态一致性**成为跨项目反复出现的核心矛盾，OpenClaw、Hermes Agent、ZeroClaw、NanoClaw、CoPaw 均报告了相关的 P0/P1 级缺陷。生态正处于从"能力验证"向"生产级信任"过渡的关键阶段——用户已在大规模真实部署（数百 agent 网关、多前端并存、systemd/k8s）中运行这些工具，但可靠性兜底尚未同步到位。与此同时，外部生态方（MemCode 寻求记忆后端集成）与协议层诉求（A2A、MCP）显示互操作性需求正在上升。

---

## 2. 各项目活跃度对比

| 项目 | Issues（开/关） | PR（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 273 / 227（更新 500） | 273 / 227（更新 500） | 无 | 极高活跃，修复与回归"赛跑"，积压未收敛，P0 密集 |
| **NanoBot** | 1 / 1 | 4 / 4 | 无 | 中等偏稳，体验层收敛，安全/回归修复卡在待合并 |
| **Hermes Agent** | 43 / 7（更新 50） | 42 / 8（更新 50） | 无 | 高强度维护，WAL 回归链未闭合，6+ 大型重构同日推进 |
| **PicoClaw** | 4（全活跃） | 5 更新（2 关闭未合并） | 无 | **需关注**：官网 TLS 过期 CRITICAL，功能面零推进 |
| **NanoClaw** | 2 / 0 | 10 / 2 | 无 | 中高，安装回归闭环快，功能 PR 积压 |
| **NullClaw** | 无活动 | 无活动 | 无 | 无 |
| **IronClaw** | 0 | 0 / 0（1 条新增待合并） | 无 | 低活跃维护，唯一动作为测试补强 |
| **LobsterAI** | 3（全 OPEN/stale） | 4 / 3 | 无 | 中等，安全修复积压近半年，风险点突出 |
| **TinyClaw** | 无活动 | 无活动 | 无 | 无 |
| **Moltis** | 0 / 1 | 1 / 3 | 无 | 中低，Bug 1 天内闭环，质量良好 |
| **CoPaw** | 6 / 2 | 1 / 0 | 无 | 平稳，记忆/会话问题重复出现 |
| **ZeptoClaw** | 无活动 | 无活动 | 无 | 无 |
| **ZeroClaw** | 28 / 6（更新 34） | 38 / 12（更新 50） | 无 | 高活跃，评审带宽成瓶颈，多条 XL PR 挂起 |

> 注：OpenClaw 数据为"过去 24 小时 Issues 与 PR 各更新 500 条"下的开/关细分；Hermes Agent 为 50 条 Issue + 50 条 PR 窗口。

---

## 3. OpenClaw 在生态中的定位

**社区规模：绝对头部。** OpenClaw 单日 Issues/PR 各更新 500 条、新开 273 条，量级为第二梯队（Hermes Agent、ZeroClaw 各约 50 条）的 **5–10 倍**，其余项目多在个位数到十余条。这是生态中唯一具备"大规模生产用户群"特征的项目，用户画像明确指向数百 agent 网关、Telegram forum、WhatsApp/微信个人号渠道、systemd/k8s 部署。

**优势：**
- **修复密度与响应速度**：维护者 steipete 单日提交大量修复 PR，多个 P1 在报告后数日内关闭（#135111、#137927、#145563）；Swarm 修复已合并 29 项，形成体系化推进。
- **问题发现带宽**：高流量意味着缺陷暴露充分，问题清单（P0/P1 覆盖崩溃循环、数据丢失、安全、性能）的完整性远超同类。

**技术路线差异：**
- 采用 **SQLite 优先运行时 + 子智能体（Swarm）编排**架构，并在为外部 consumer 铺设转录读 API（游标式、session lineage、类型化投影）。
- 渠道模型正从内置转向**外部插件**（slack/discord/matrix/msteams/feishu），这一迁移已引发 #115367 的门禁冲突——即**架构演进速度快于兼容层收敛速度**。
- 相比 Hermes Agent 的"多前端共享状态"路线与 ZeroClaw 的 Rust/daemon RPC 路线，OpenClaw 更偏向**渠道广度 + 编排深度**。

**相对劣势：** 积压规模大且未见净收敛，问题发现与修复速度同步高位运行；大量条目卡在 `needs-product-decision`，**瓶颈部分来自产品决策带宽而非工程能力**；连续多个版本（2026.8.1/9.2/9.3）被标注为回归引入点，用户升级观望情绪明显。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **子智能体 / 多智能体编排可靠性** | OpenClaw、ZeroClaw、Hermes Agent、NanoClaw | 完成结果静默丢失（OpenClaw #44925/#67777）、委托策略一致性（ZeroClaw #10534）、委派子循环成本追踪断裂（#10645）、多 agent 可观测性（Hermes #91813） |
| **会话状态持久化 / 中断恢复** | OpenClaw、Hermes Agent、CoPaw、ZeroClaw、NanoClaw | 会话写入静默丢弃（Hermes WAL 链）、会话丢失与不可检索（CoPaw #7724）、失败轮次不写历史（ZeroClaw #10788/#10673）、code mode 持久化编码会话（NanoClaw #3783） |
| **跨会话长期记忆** | NanoBot、CoPaw、OpenClaw | 可插拔记忆后端（NanoBot #5721）、反复遗忘规则/指令失效（CoPaw #7571）、memory-core 无界增长（OpenClaw #114612） |
| **MCP / A2A / ACP 协议能力** | PicoClaw、CoPaw、ZeroClaw、OpenClaw | MCP 文档接入（PicoClaw #3367/#3368）、A2A 官方支持时间表（CoPaw #7484）、ACP 权限匹配（CoPaw #7732）、MCP Apps UI 开关（OpenClaw #147012）、MCP OAuth 跨进程损坏（Hermes #71335） |
| **上下文窗口 / 压缩治理** | ZeroClaw、OpenClaw、CoPaw、Hermes | 可配置压缩比例（ZeroClaw #9535）、上下文溢出硬重置（OpenClaw #63216）、Agent 自主上下文管理（CoPaw #7733）、尾部预算超支 6.3 倍（Hermes #108647） |
| **无头 / 远程部署可用性** | NanoBot、NanoClaw、PicoClaw | 无头登录初始密码发现（NanoBot #5726）、无人值守 Codex 登录（NanoClaw #3489）、远程项目路径选择（#5673） |
| **多进程共享状态一致性** | Hermes Agent、NanoClaw、ZeroClaw | 共享 `HERMES_HOME` 下 MCP OAuth 损坏与 WAL 代际解链；跨分支契约漂移（NanoClaw #3785） |
| **权限与安全边界** | LobsterAI、OpenClaw、NanoBot、ZeroClaw、CoPaw | SSRF + 任意文件读取（LobsterAI #1041）、渠道读取门禁（OpenClaw #115367）、会话键路径穿越（NanoBot #5633）、sandbox_policy 强制（ZeroClaw #7821） |

**共性判断**：这些方向高度收敛于一个主题——**"状态在边界条件下不可信"**（并发、超时、重启、失败、跨进程、跨分支）。多智能体能力的价值已被认可，但其可靠性尚未达到生产级信任。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | NanoClaw | NanoBot / PicoClaw / CoPaw |
|---|---|---|---|---|---|
| **功能侧重** | 渠道广度 + Swarm 编排 | 多前端统一（CLI/gateway/TUI/ACP/桌面） | 运行时精确性 + 工作流（SOP） | 持久编码会话 + 语音/远程终端 | 轻量助手 + WebUI + 插件生态 |
| **目标用户** | 大规模生产部署者（数百 agent 网关） | 多前端并存的深度用户 | 长会话/多步工作流工程师 | 平台化/可编码智能体用户 | 无头服务器/远程办公/插件运维 |
| **技术架构** | SQLite 优先 + 外部渠道插件 | TS 共享包收口 + 平台适配器基路径化 | Rust daemon + RPC + wasm 插件 | 容器化 runner + tmux 编码会话 | Python/Go + WebUI + MCP |
| **当前阶段** | 修复密集推进，未见净收敛 | 架构去重复（6+ refactor 同日） | 缺陷发现健康但合并吞吐受限 | 功能扩张（Code Mode / 语音） | 体验打磨与生态接入 |

**关键差异**：OpenClaw 与 Hermes Agent 都在做"去重复化收口"，但路径不同——OpenClaw 是**渠道外部插件化**，Hermes 是**多前端共享核心实现统一**；ZeroClaw 是少数采用 Rust 的系统级实现，关注栈溢出、成本语义等底层精确性；NanoClaw 定位最激进，直接向"可行走的编码智能体平台"演进。

---

## 6. 社区热度与成熟度

**第一梯队 — 快速迭代但质量承压：**
- **OpenClaw**（最高活跃，回归与修复赛跑）、**Hermes Agent**（WAL 回归链 + 大型重构并行）、**ZeroClaw**（高活跃，但 38 待合并 vs 12 合并，评审带宽成瓶颈）

**第二梯队 — 快速迭代、质量收敛较好：**
- **NanoClaw**（安装回归当日闭环，功能扩张中）、**NanoBot**（体验收敛，安全修复待清）、**Moltis**（Bug 1 天内闭环）

**第三梯队 — 质量巩固 / 维护节奏：**
- **CoPaw**（记忆/会话问题重复，平稳）、**LobsterAI**（安全修复积压近半年，风险点）

**低活跃 / 维护状态：**
- **IronClaw**（仅 1 测试 PR）、**PicoClaw**（官网证书过期，功能面零推进）

**静默：**
- **NullClaw、TinyClaw、ZeptoClaw**（24 小时无活动）

**成熟度观察**：活跃度与成熟度并非正相关——OpenClaw 活跃度最高但 regression 密度也最高（多版本被标为回归引入点）；Moltis 活跃度中低但闭环质量最好。**真正的成熟信号是"净收敛"而非"高吞吐"**，目前仅少数项目接近这一状态。

---

## 7. 值得关注的趋势信号

1. **可靠性成为新的竞争维度。** 生态已跨过"功能有无"阶段，用户痛点从"能不能做"转向"做了会不会丢"。子智能体结果静默丢失（OpenClaw 长期榜首议题）、会话写入静默丢弃（Hermes）、失败轮次不持久化（ZeroClaw）均是同一类问题。**对开发者的参考：把"状态边界条件的兜底"作为一等设计目标，而非事后补丁。**

2. **产品决策带宽正在成为比工程能力更稀缺的资源。** OpenClaw、NanoBot、CoPaw、Hermes 均有大量条目卡在 `needs-product-decision` / `needs-maintainer-review` / `needs-author-action`，而非等待技术实现。**参考价值：明确决策 SLA 与分阶段拆分（尤其 ZeroClaw 多条 XL PR）可显著改善积压。**

3. **记忆正从"内置功能"向"可插拔后端"演进。** NanoBot 收到第三方记忆服务商的互操作提案，CoPaw 报告长期记忆不可靠，OpenClaw 有 memory-core 无界增长问题。**参考价值：记忆层的标准化接口与淘汰策略，将是下一阶段架构分化的关键点。**

4. **"无头 / 远程 / 无人值守"是真实主流场景而非边缘用例。** 从初始密码发现、无人值守登录、远程项目路径到远程终端，多项目同时暴露此类短板。**参考价值：安装向导与凭据发现的交互设计需覆盖无浏览器环境。**

5. **协议层（MCP / A2A / ACP）的能力对齐与文档一致性存在系统性落差。** A2A 无明确时间表、ACP 权限匹配错误、MCP OAuth 跨进程损坏、离线回退行为与文档承诺不符。**参考价值：文档即契约，契约漂移会直接转化为信任成本。**

6. **安全修复的响应滞后是生态级隐患。** LobsterAI 的 P0 SSRF/任意文件读取修复积压近半年、NanoBot 路径穿越修复挂起 11 天、ZeroClaw 沙箱策略 PR 挂起近 3 个月。**参考价值：安全类条目应建立独立的优先级通道，避免被常规队列淹没。**

7. **用户对"上下文可控性"的诉求正在细化。** 从可配置压缩比例、上下文窗口自定义、到 Agent 自主上下文管理，用户不再满足于黑盒式自动截断，而要求**可观测、可配置、可干预**。这也是"多智能体监督"（实时会话记录、turn 状态驱动指示）需求的根源。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-13

## 1. 今日速览

今日 NanoBot 无新版本发布，社区活动集中在 WebUI 体验修复与安全加固方向。过去 24 小时共 2 条 Issue 更新（1 开 1 关）、8 条 PR 更新（4 待合并、4 已合并/关闭），整体活跃度中等偏稳。已关闭的 PR 主要围绕 WebUI 品牌统一、设置目录精简、无头（headless）登录可读性；待合并队列中则积压了会话路径穿越安全修复（#5633）与 cron 调度回归修复（#5751）两项高价值改动。项目健康度良好，但仍存在长期挂起且带 `conflict` 标记的 PR 需维护者介入。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭 4 条 PR，均为 WebUI 与集成稳定性方向：

- **[CLOSED] #5754 fix(webui): unify app logos and brand mentions**（作者 Re-bin）
  统一 Apps 目录中的紧凑圆角全画布 logo，保留加载/错误与首字母回退；在消息与相关界面展示元数据提供的品牌名（如 Linear、iTerm2、Draw.io、Google Drive）。
  https://github.com/HKUDS/nanobot/pull/5754

- **[CLOSED] #5743 fix(webui): simplify settings catalog controls and headings**（作者 Re-bin）
  将 Calendar 设为 Automations 默认视图，Tasks 收纳进同一紧凑工具栏；状态过滤器改为按钮后置，用户视图隐藏系统任务；自动化改由共享入口创建。
  https://github.com/HKUDS/nanobot/pull/5743

- **[CLOSED] #5735 fix(webui): make headless login self-explanatory**（作者 chengyongru）
  在交付 WebUI 前检测 `links`、`lynx`、`w3m` 等纯文本浏览器；当标准启动器无法打开浏览器或使用 `--no-open` 时输出手动接管指引，并从配置推导 SSH 目标。该改动直接回应 #5726 类无头服务器场景。
  https://github.com/HKUDS/nanobot/pull/5735

- **[CLOSED] #5752 Codex/integrations stability upstream**（作者 szymongalka）
  无摘要内容，标题指向集成稳定性上游改动。
  https://github.com/HKUDS/nanobot/pull/5752

**整体推进评估：** 今日进展以体验层收敛为主（品牌一致性、设置导航、无头可用性），属于打磨而非能力扩张；真正影响面较大的安全与调度修复仍停留在待合并状态。

---

## 4. 社区热点

- **Issue #5721 [OPEN] Could nanobot support durable memory across sessions?**（作者 memcodeoff，评论 1）
  诉求方为 MemCode 创始人 Vivek Gupta，主张 NanoBot 已具备 tools、MCP、memory 与多智能体工作流能力，MemCode 可提供可互操作的托管或自托管记忆后端，用于跨会话共享记忆。这是今日唯一活跃的新开 Issue，代表"记忆持久化 + 外部后端互操作"的生态集成诉求。
  https://github.com/HKUDS/nanobot/issues/5721

- **Issue #5726 [CLOSED] Startuo initial password?**（作者 gardiol，评论 2，今日已关闭）
  用户在无头服务器上安装，默认启动链接不支持 JS，只能关闭后从另一台工作站的 Firefox 访问，随后无法获知初始密码。评论数今日最高，情绪为典型的"卡在登录入口"挫败感。
  https://github.com/HKUDS/nanobot/issues/5726

- **PR #5633 [OPEN] fix(session): reject session keys with path traversal components**（安全向，p1）
  虽评论数据未给出，但其"安全 + p1 + 长期挂起"组合值得关注。
  https://github.com/HKUDS/nanobot/pull/5633

---

## 5. Bug 与稳定性

按严重程度排列：

1. **[p1 / 安全] PR #5633 — 会话键路径穿越（已有 fix PR，待合并）**
   Session key 在持久化前会被转成文件路径，形如 `../../etc/passwd` 的不可信 session id 可寻址 sessions 目录之外的文件。修复方式为新增 `JsonlSessionStore.validate_s...`。关联修复 #5564。
   标记：`bug, fix, test, security, priority: p1`
   https://github.com/HKUDS/nanobot/pull/5633

2. **[p2 / 回归] PR #5751 — cron 编辑导致待执行任务丢失（已有 fix PR，待合并）**
   编辑自动化名称或指令时会重算下一次触发时间，即使 schedule 未变：间隔任务被推迟、到期的 cron 触发被跳过、到期的一次性任务 `next_run_at_ms` 被置空。
   标记：`bug, fix, test, priority: p2, conflict`
   https://github.com/HKUDS/nanobot/pull/5751

3. **[p2 / 回归] PR #5673 — 远程项目路径与选择器能力（已有 fix PR，待合并）**
   远程 WebUI 用户无法通过输入 nanobot 服务器上的绝对路径选择项目；UI 未先遵循网关的 folder-picker 能力即调用原生宿主选择器，导致远程会话打开本机选择器。
   标记：`bug, regression, webui, fix, test, priority: p2, conflict`
   https://github.com/HKUDS/nanobot/pull/5673

4. **[p1 / Bug] Issue #5726 — 无头服务器初始密码不可得（已关闭）**
   已由 PR #5735 的 headless 登录改进覆盖并关闭。
   https://github.com/HKUDS/nanobot/issues/5726

---

## 6. 功能请求与路线图信号

- **跨会话持久记忆 + 可插拔记忆后端（Issue #5721）**
  需求来自第三方记忆服务厂商，指向"记忆作为可替换后端、支持托管/自托管、可互操作"的架构方向。当前仓库无对应实现 PR，短期更可能以讨论/集成评估形式存在，而非直接进入下一版本。
  https://github.com/HKUDS/nanobot/issues/5721

- **无头/远程环境可用性（Issue #5726 → PR #5735 已关闭）**
  已落地修复，说明"服务器端无浏览器部署"是真实且被优先处理的场景，后续同类需求（如初始凭据获取、远程 SSH 引导）进入版本的概率较高。

- **远程项目路径选择（PR #5673）**
  与远程 WebUI 使用场景强相关，若解决冲突后合并，将实质性提升远程会话的项目接入体验。

---

## 7. 用户反馈摘要

- **无头部署是主流真实场景，但登录入口体验割裂。** gardiol 在无头服务器安装后，默认链接不支持 JS，只能换机用 Firefox 访问，结果完全不知道初始密码。痛点集中在"初始凭据的发现路径"与"无 JS 环境降级"，已由 #5735 的文本浏览器检测与手动接管指引缓解。（#5726）
- **远程办公/跨机访问是高频使用形态。** #5726 与 #5673 均源于"服务器在远端、浏览器在本地"的部署方式，反映出远程访问路径（监听地址、密码获取、项目路径选择、原生选择器误用）是当前体验短板集中区。
- **生态方主动寻求集成。** MemCode CEO 明确表达提供可互操作记忆后端以支持跨会话共享记忆的意愿，属正向信号，说明 NanoBot 的 tools/MCP/memory/多智能体能力已被外部平台视为集成目标。（#5721）

---

## 8. 待处理积压

两条带 `conflict` 标记的 PR 长期未合并，建议维护者优先排期：

- **PR #5633**（创建 2026-09-02，已挂起约 11 天，p1 安全）
  路径穿越属安全类修复，长期开放存在风险暴露窗口，建议优先解决冲突并合并。
  https://github.com/HKUDS/nanobot/pull/5633

- **PR #5673**（创建 2026-09-05，已挂起约 8 天，p2 回归）
  远程项目路径与 folder-picker 能力修复，影响远程 WebUI 核心可用性。
  https://github.com/HKUDS/nanobot/pull/5673

- **PR #5751**（创建 2026-09-12，p2 回归，`conflict`）
  新近提出但已标记冲突，cron 调度正确性受影响，建议尽快澄清冲突来源。
  https://github.com/HKUDS/nanobot/pull/5751

- **Issue #5721**（创建 2026-09-09，仅 1 条评论）
  记忆后端集成提案尚无官方回应，建议给出明确的路线图态度（接受讨论 / 暂不纳入），避免生态方悬置。
  https://github.com/HKUDS/nanobot/issues/5721

---

*数据来源：HKUDS/nanobot GitHub 公开活动，统计窗口 2026-09-12 至 2026-09-13。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-13

> 数据来源：NousResearch/hermes-agent GitHub 事件流（Issues 50 条、PR 50 条，过去 24 小时）。所有内容仅基于所给摘要，未展示的条目不在分析范围内。

## 1. 今日速览

项目今日处于**高强度维护状态但无新版本产出**：24 小时内 50 条 Issue 更新（43 新开/活跃、7 关闭）与 50 条 PR 更新（42 待合并、8 已合并/关闭），Issue 与 PR 流量比例为 1:1。今日核心矛盾集中在 **`state.db` WAL 代际被短生命周期连接解链（unlink）** 的一系列 P0/P1 回归，直接导致 gateway 静默丢弃会话写入甚至 SIGBUS，且被多位用户在不同环境下独立复现。与此同时，teknium1 集中提交了至少 6 个大型跨端重构 PR（CLI/gateway/TUI/ACP/桌面多端统一），显示项目正在做表面层与适配器的去重复化收口。整体健康度评估：**活跃度高、响应速度快（P0 当日即有 fix PR），但会话存储层的回归密度值得警惕**。

## 2. 版本发布

无新版本发布（今日 Releases：0 个）。当前用户报告的复现基线为 **v0.21.2 (2026.9.11)**，如 Issue [#109687](https://github.com/NousResearch/hermes-agent/issues/109687) 明确标注 `main @ 92df11f8`。

## 3. 项目进展

今日已合并/关闭 8 条 PR、关闭 7 条 Issue，其中值得关注的关闭项与在途重构如下：

**已关闭的重要 Issue（问题已收敛）：**
- [#109786](https://github.com/NousResearch/hermes-agent/issues/109786)（P0）— 短生命周期「写后关闭」连接解链 `state.db-wal`/`state.db-shm`，导致持有该 WAL 代际的 gateway 句柄失效。已关闭。
- [#109687](https://github.com/NousResearch/hermes-agent/issues/109687)（P0）— Linux 上单次普通 CLI 调用即可孤立运行中 gateway 的 WAL 代际，gateway 继续服务但静默丢弃会话写入。已关闭。
- [#109865](https://github.com/NousResearch/hermes-agent/issues/109865)（P1）— 桌面端为 multiplex gateway 已在服务的 profile 另行拉起本地 `serve` 后端，形成同一 `state.db` 的三个持有者。已关闭。
- [#108311](https://github.com/NousResearch/hermes-agent/issues/108311)（P2）— Z.ai 1210「模型强制思考」错误未被 reasoning-mandatory 模式匹配，恢复流程从不触发，用户直面 provider 报错。已关闭。
- [#96499](https://github.com/NousResearch/hermes-agent/issues/96499)（P2，duplicate）— gateway 在凭证环境变量存在时强制启用被 `enabled: false` 显式禁用的平台。

**在途的大型重构 PR（尚未合并，但代表项目主要推进方向）：**
- [#109610](https://github.com/NousResearch/hermes-agent/pull/109610) — `/undo`+`/retry` 回滚、手动 `/compress`、think 标签、ACP 工具标题在 CLI/gateway/TUI/ACP 四端共用一套核心实现。
- [#109649](https://github.com/NousResearch/hermes-agent/pull/109649) — `/model`、`/status`、`computer_use` 审批门（fail-closed）、kill 谓词与会话 ID 生成统一。
- [#109568](https://github.com/NousResearch/hermes-agent/pull/109568) — 所有平台适配器的文本批处理、exec 审批、错误信封、身份锁与重试走统一基路径。
- [#109602](https://github.com/NousResearch/hermes-agent/pull/109602) — 约 40 处适配器副本合并为单一 scoped-secret 读取器与策略 mixin（覆盖 Telegram/Discord/WhatsApp/Signal/WeCom/QQBot）。
- [#109567](https://github.com/NousResearch/hermes-agent/pull/109567) 与 [#109614](https://github.com/NousResearch/hermes-agent/pull/109614) — 桌面/web/TUI 的 TS 重复实现收口到 `@hermes/shared`，统一 JSON-RPC 核心、重连退避与 `GatewayEventMap`。

**整体推进度量**：项目今日在「架构去重复」维度推进显著（6+ 个 refactor PR 同日出动），但功能增量有限；修复侧主要以关闭会话存储回归为主，未见到影响面较大的新能力落地。

## 4. 社区热点

| 排名 | 条目 | 热度 | 核心诉求 |
|---|---|---|---|
| 1 | [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) `[invalid, comp/cron, P3]` | **95 评论** | Nous→Enterkey 定时合并因 `cron/jobs.py` 冲突被阻塞，dashboard updater 停留在上一个已测试的 Enterkey 版本。诉求：解除集成流水线阻塞、明确 cron 组件归属与发布分支策略。 |
| 2 | [#71335](https://github.com/NousResearch/hermes-agent/issues/71335) `[P1, security, auth]` | 9 评论 / 1 👍 | 并发 agent 进程共享 `HERMES_HOME` 时，破坏轮转中的 MCP OAuth 授权（Notion），`mcp-tokens` 无跨进程锁。诉求与官方「所有前端共享状态」设计直接冲突，需要文件级锁或 token 代理。 |
| 3 | [#109786](https://github.com/NousResearch/hermes-agent/issues/109786) / [#109687](https://github.com/NousResearch/hermes-agent/issues/109687) | 各 9 评论 | WAL 解链导致 gateway 静默丢写，用户要求会话写入的原子性与可观测告警。 |
| 4 | [#91813](https://github.com/NousResearch/hermes-agent/issues/91813) `[feature, desktop]` | 5 评论 / **2 👍** | Bot Mode 群组活动应暴露 bot 级实时会话记录；当前仅有 "X is thinking…" 之类不透明状态，无法监督多 agent 协作。 |
| 5 | [#103353](https://github.com/NousResearch/hermes-agent/pull/103353) `[feature, local-models]` | PR 榜首 | 托管本地模型路径新增 PLE 感知的 GGUF 安装与放置、高级运行时控制与 loopback gateway 发布。 |

**分析**：最高热度的 #88584 是集成/发布流程问题而非产品缺陷，但 95 条评论说明其影响下游自动化；#71335 与今日 WAL 系列共同指向同一底层主题——**多进程共享状态的一致性保障不足**，这是当前社区讨论的主轴。

## 5. Bug 与稳定性

按严重程度排列：

**P0 — 会话存储 WAL 回归链（同一根因的三个表现）**
- [#109786](https://github.com/NousResearch/hermes-agent/issues/109786)（已关闭）— 短生命周期写入连接 unlink `state.db-wal`/`-shm`，持有所失效；`hermes doctor` 可杀死运行中的 gateway。
- [#109687](https://github.com/NousResearch/hermes-agent/issues/109687)（已关闭）— 单次纯 CLI 调用孤立 gateway WAL 代际，gateway 继续服务但静默丢写。环境：Ubuntu / ext4 本地盘（非 NFS/SMB/virtiofs/OpenZFS）、Python 3.11.15、v0.21.2。
- [#109728](https://github.com/NousResearch/hermes-agent/issues/109728)（**仍 OPEN**）— #109509 的 owner-only 权限加固使 `_secure_state_db_files()` 对 live DB 与 WAL/SHM 走 open/fchmod/close 普通描述符，Linux 上丢弃 SQLite 锁，造成 WAL 代际被删与会话中断。**尚无对应 fix PR**。
- [#109825](https://github.com/NousResearch/hermes-agent/issues/109825)（**OPEN**，duplicate，1 👍）— 回归定位到 `337ef8f8`：`_secure_state_db_files()` 经由一次性 fd fchmod `state.db-shm`，丢掉 WAL dead-man-switch 锁 → gateway **SIGBUS**。

> 判断：这四个条目实为同一变更（#109509 权限加固）引出的回归谱系，若 #109728/#109825 未收敛，v0.21.2 用户的会话数据存在静默丢失风险。今日关闭的两条（#109786/#109687）可能仅覆盖了部分触发路径。

**P1 — 其他**
- [#71335](https://github.com/NousResearch/hermes-agent/issues/71335) — MCP OAuth 轮转在并发进程下损坏（未修复）。
- [#109865](https://github.com/NousResearch/hermes-agent/issues/109865)（已关闭）— 桌面端重复拉起 `serve` 后端，三个 `state.db` 持有者。

**P2 — 功能性缺陷（多数已有 fix PR）**
- [#108647](https://github.com/NousResearch/hermes-agent/issues/108647) — `_find_tail_cut_by_tokens()` 中尾部消息下限覆盖精简 token 预算，**实测 6.3 倍超支**（OPEN）。
- [#108729](https://github.com/NousResearch/hermes-agent/issues/108729) — `hermes update` 耗尽完整 1875s drain 预算，尽管 teardown 实际 11.2s 完成（残留平台 ws 线程 + 未静默事件循环）（OPEN）。
- [#93711](https://github.com/NousResearch/hermes-agent/issues/93711) — 单个卡死的 cron agent turn 无限阻塞 graceful restart，drain 永不完成（OPEN）。
- [#109855](https://github.com/NousResearch/hermes-agent/issues/109855) — max-iteration 摘要把历史会话工作归因到当前 turn（OPEN）。
- [#109837](https://github.com/NousResearch/hermes-agent/issues/109837) — `key_cmd` 提供商：元数据探针把 token provider 的 repr 当 Bearer 发送，async aux 客户端不带 key（OPEN）。**已有 fix PR [#109626](https://github.com/NousResearch/hermes-agent/pull/109626)**（保留 key_cmd 凭证与 extra_headers 穿透 async 重建）。
- [#98214](https://github.com/NousResearch/hermes-agent/issues/98214) — 浅克隆含本地提交时 `update --check` 恒报「Update available」（OPEN）。
- [#18473](https://github.com/NousResearch/hermes-agent/issues/18473) — `search_files target='content'` 在路径含隐藏目录（如 `~/.hermes/`）时恒返回 0 结果；自 2026-05-01 起未解决（OPEN）。
- [#81381](https://github.com/NousResearch/hermes-agent/issues/81381) — Kanban dashboard 的 Nudge dispatcher 可突破 `max_in_progress` 上限（OPEN）。
- [#86097](https://github.com/NousResearch/hermes-agent/issues/86097) — `/api/model/info` 对 custom_providers 安装把 256,000 硬回退值报为「Auto-detected」（OPEN）。

**相关 fix PR（待合并）**：[#109879](https://github.com/NousResearch/hermes-agent/pull/109879)（消息切分保留代码围栏内空白）、[#109878](https://github.com/NousResearch/hermes-agent/pull/109878)（单个不可读 ticket 不再卡死 bot live delivery）、[#109877](https://github.com/NousResearch/hermes-agent/pull/109877)（MCP OAuth 回调透传 RFC 9207 `iss`）、[#108270](https://github.com/NousResearch/hermes-agent/pull/108270)（max-iterations 改为三层硬停止）、[#109875](https://github.com/NousResearch/hermes-agent/pull/109875)（platform_toolsets 中的 MCP server 名不再被误判为未知 toolset）、[#98413](https://github.com/NousResearch/hermes-agent/pull/98413)（解码泄漏进 `input()` 的 modifyOtherKeys/Kitty 转义序列）。

## 6. 功能请求与路线图信号

- **[#91813](https://github.com/NousResearch/hermes-agent/issues/91813) Bot Mode 群组实时会话记录（P3，2 👍，今日反应最高）** — 指向多 agent 可观测性。目前 42 个待合并 PR 中未见直接对应实现，纳入可能性中低，但作为「多 agent 监督」这一方向的首个明确诉求值得记录。
- **[#39372](https://github.com/NousResearch/hermes-agent/issues/39372) 后台/集成 agent 运行不应污染用户可见会话列表（P2，needs-decision）** — 自 2026-06-04 悬置，与今日多条会话存储修复同属 session-store 卫生问题，具备被并入相关重构的潜力。
- **[#103353](https://github.com/NousResearch/hermes-agent/pull/103353) 本地模型高级运行时与 gateway 路由（feature，PR 区热度第一）** — 托管本地模型路径新增 PLE 感知 GGUF 安装/放置、高级运行时控制与 loopback gateway 发布。这是今日 PR 侧最接近「新能力上线」的条目，若合并将直接进入下一版本。
- **[#103353](https://github.com/NousResearch/hermes-agent/pull/103353) 之外的路线信号主要来自重构 PR**：#109602、#109563 揭示插件与平台适配器正在向核心原语收口，暗示下一版本的重点是**一致性而非新特性**。

## 7. 用户反馈摘要

**核心痛点（按出现频次）**

1. **多进程共享状态缺乏一致性保障** — 官方文档称各前端「共享状态，可在一个前端开始会话、在另一个恢复」，但用户实测在共享 `HERMES_HOME` 的并发场景下 MCP OAuth 授权被损坏（[#71335](https://github.com/NousResearch/hermes-agent/issues/71335)），同一 `state.db` 出现三个持有者（[#109865](https://github.com/NousResearch/hermes-agent/issues/109865)），CLI 一次调用即可让 gateway 静默丢写（[#109687](https://github.com/NousResearch/hermes-agent/issues/109687)）。这是设计承诺与实现现实之间最明显的落差。
2. **可用性/稳定性退化的可观测性缺失** — gateway「继续服务但静默丢弃会话写入」，用户只在事后发现数据不一致。
3. **成本与资源失控** — 尾部消息下限导致 6.3 倍 token 超支（[#108647](https://github.com/NousResearch/hermes-agent/issues/108647)）；`hermes update` 空转 31 分钟（[#108729](https://github.com/NousResearch/hermes-agent/issues/108729)）；卡死 cron turn 使 restart 无限阻塞（[#93711](https://github.com/NousResearch/hermes-agent/issues/93711)）。
4. **监督多 agent 协作时信息不透明** — 房间只显示 "career-lead is thinking…" 之类的粗粒度状态（[#91813](https://github.com/NousResearch/hermes-agent/issues/91813)）。

**使用场景线索**：多前端并存（桌面 + gateway + CLI + TUI）已是常态用法；自定义提供商（`custom_providers`、`key_cmd`）、浅克隆 + 本地提交的维护分支工作流（`updates.parked_branch_strategy: update_in_place`）、以及 Feishu/钉钉等平台适配器均在真实环境被使用。

**满意点**：所给材料中未包含明确的正向反馈内容；多数条目为缺陷报告。

**不满点**：报告质量普遍较高（含复现环境、内核版本、文件系统类型、commit SHA），反映出用户对项目定位投入较深，同时也说明问题长期未闭环——如 [#18473](https://github.com/NousResearch/hermes-agent/issues/18473) 自 2026-05-01 报告至今仍在 OPEN 状态。

## 8. 待处理积压

按「悬置时长 × 严重度」排序，建议维护者优先关注：

| Issue | 创建 | 悬置 | 标签 | 说明 |
|---|---|---|---|---|
| [#18473](https://github.com/NousResearch/hermes-agent/issues/18473) | 2026-05-01 | **约 4.5 个月** | P2, tool/file | 隐藏目录路径下 `search_files target='content'` 恒返回 0 结果，确定性复现，修复面小但长期未处理。 |
| [#39372](https://github.com/NousResearch/hermes-agent/issues/39372) | 2026-06-04 | **约 3 个月** | P2, **needs-decision** | 后台/集成运行污染用户可见会话列表，横跨 desktop/dashboard/session-store，卡在决策而非实现。 |
| [#71335](https://github.com/NousResearch/hermes-agent/issues/71335) | 2026-07-25 | **约 1.5 个月** | **P1**, auth, sweeper:risk-security-boundary | MCP OAuth 轮转跨进程损坏，涉及安全边界，无 fix PR。 |
| [#81381](https://github.com/NousResearch/hermes-agent/issues/81381) | 2026-08-07 | 约 1 个月 | P2, plugins, dashboard | Nudge dispatcher 突破 `max_in_progress` 上限。 |
| [#86097](https://github.com/NousResearch/hermes-agent/issues/86097) | 2026-08-14 | 约 1 个月 | P3, config, dashboard | `/api/model/info` 误报自动探测上下文长度。 |
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 2026-08-17 | 约 1 个月 | **invalid**, comp/cron | 95 条评论却标记为 invalid，集成阻塞状态未明。建议维护者给出明确结论或关闭理由。 |
| [#93711](https://github.com/NousResearch/hermes-agent/issues/93711) | 2026-08-24 | 约 3 周 | P2, gateway, cron | 卡死 cron turn 无限阻塞 graceul restart。 |

**今日新增但未闭合的高优先级项**：[#109728](https://github.com/NousResearch/hermes-agent/issues/109728)（P0，无 fix PR）、[#109825](https://github.com/NousResearch/hermes-agent/issues/109825)（P1，重复但含 SIGBUS 关键信息）。这两条是 WAL 回归链中唯一仍开放的节点，建议优先给出修复或明确指向已关闭条目的修复 PR。

**PR 侧积压**：42 条待合并中，[#103353](https://github.com/NousResearch/hermes-agent/pull/103353)（local-models 高级运行时）自 2026-09-05 创建、[#98413](https://github.com/NousResearch/hermes-agent/pull/98413)（终端转义序列泄漏）自 2026-08-30 创建，均已超过一周未合并，且前者体量较大、评审成本高，建议尽早排期。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-13

## 1. 今日速览

过去24小时项目维持中等活跃：4 条 Issue 活跃、5 条 PR 更新，但无新版本发布。当日最紧急事件是官网 TLS 证书过期导致 https://picoclaw.io 对全部浏览器不可用（#3377，CRITICAL）。同时有两条长期 stale 的 Issue 因讨论延续而更新（#3287、#3281），显示社区仍在推动 IRC 长消息与 Web UI 性能问题。PR 侧以文档与小修复为主，两个早期积压 PR（#20、#1268）被关闭，积压有所清理但未合入主干。整体健康度：**需关注**——核心阻塞点在外网基础设施与长期未决的 stale Issue。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无 PR 被合并；有 2 条 PR 被关闭（非合并）：

- **PR #20** [CLOSED] Fix typos and update API keys in README — 修正 README 中 OpenRouter `api_base` 示例为 `https://openrouter.ai/api/v1`，并将 JSON 键统一为 snake_case（`api_key`、`allow_from` 等）以匹配实际配置 schema。创建于 2026-02-11，历经约 7 个月后关闭。
  链接: https://github.com/sipeed/picoclaw/pull/20
- **PR #1268** [CLOSED] iMessage support / stop command / logs — 包含 iMessage 支持、LLM API 调用日志、会话日志、stop 命令及隐私清洗器。创建于 2026-03-09，同样长期积压后关闭。
  链接: https://github.com/sipeed/picoclaw/pull/1268

说明：两条 PR 均为长期未合并的历史积压项，今日关闭意味着维护者清理了队列，但其功能（iMessage 支持、README 修正）并未进入主干，**项目功能面今日实际未向前推进**。

## 4. 社区热点

按评论数与反应数排序：

- **Issue #3287** [OPEN][stale] Better support long messages in IRC — 评论 12，👍 0。诉求：让 PicoClaw 将 IRCv3 中超过 512 字节、被换行截断的长消息识别为单条完整消息。讨论最活跃。
  链接: https://github.com/sipeed/picoclaw/issues/3287
- **Issue #3281** [OPEN][stale] Web UI chat input laggy with long history — 评论 11，👍 2（今日 Issue 中反应最高）。用户报告在 Web UI 会话历史变长时输入明显卡顿，环境为 PicoClaw 0.3.1 / Go 1.25.11 / PicoClaw Web 通道。
  链接: https://github.com/sipeed/picoclaw/issues/3281
- **Issue #3377** [OPEN][CRITICAL] TLS 证书过期 — 👍 1，虽评论为 0，但为当日最高优先级事件。
  链接: https://github.com/sipeed/picoclaw/issues/3377

背后信号：社区关注点集中在**通道层健壮性（IRC 长消息）**与**前端性能退化（Web UI）**，两者均为已标记 stale 但仍在被用户持续追问的问题。

## 5. Bug 与稳定性

按严重程度排列：

1. **CRITICAL — Issue #3377**：https://picoclaw.io 的 TLS 证书于 2026-09-10 23:59:59 UTC 过期，所有浏览器与 TLS 客户端拒绝连接，项目主页对所有访问者不可用。**尚无 fix PR**（该问题属域名/部署基础设施，非代码仓库内可修复）。建议维护者优先续期。
   链接: https://github.com/sipeed/picoclaw/issues/3377
2. **中 — Issue #3281**：Web UI 在会话历史较长时聊天输入卡顿（版本 0.3.1）。**尚无 fix PR**，已 stale。
   链接: https://github.com/sipeed/picoclaw/issues/3281
3. **低（功能缺陷）— Issue #3287**：IRC 长消息被拆分为多条而非按单条处理。**尚无 fix PR**，已 stale。
   链接: https://github.com/sipeed/picoclaw/issues/3287

## 6. 功能请求与路线图信号

- **Issue #3366** [OPEN] Add support for OpenAI compatible providers — 用户 ItachiSan 希望新增名为 "OpenAI Compatible" 的自定义 provider，以接入自托管路由（如 9Router）。创建于 2026-09-04，今日更新，评论 2。**判断**：这是低耦合、高通用性的扩展点，且 PR #3378 正在改动 OAuth provider 的 scopes 处理（`RefreshAccessToken`），两者同属 provider/auth 域，具备一并推进的条件。
  链接: https://github.com/sipeed/picoclaw/issues/3366
- **Issue #3287** IRCv3 长消息合并支持（见上）。
  链接: https://github.com/sipeed/picoclaw/issues/3287

相关待合并 PR（文档类，可作为能力接入的引导）：

- **PR #3368** [OPEN][stale] docs: add Parallel Search MCP setup example — 为 CLI 指南加入 Parallel Search MCP 的可复制配置，提供无需账号/API key 的网页搜索与页面提取能力。
  链接: https://github.com/sipeed/picoclaw/pull/3368
- **PR #3367** [OPEN][stale] docs: add Pilot MCP setup example — 在原生 MCP CLI 快速开始中加入 Pilot Protocol 配置命令与健康检查命令，并说明不覆盖既有配置、无需 API key。
  链接: https://github.com/sipeed/picoclaw/pull/3367

**路线图推测**：MCP 生态接入（#3367、#3368）与 OpenAI 兼容 provider（#3366）是当前文档/需求层面最成形的方向，若维护者恢复合并节奏，这批改动最可能进入下一版本。

## 7. 用户反馈摘要

- **性能痛点**：Web UI 用户在长会话下输入卡顿（#3281），影响日常使用体验，且已获得 2 个 👍，是今日用户反应最强的具体抱怨。
- **通道兼容痛点**：IRC 用户受 512 字节限制与换行语义困扰，期望客户端层做消息聚合（#3287）。
- **部署/接入诉求**：希望摆脱对特定云服务的绑定，通过 "OpenAI Compatible" provider 接入自托管路由（#3366）；MCP 文档贡献者（#3367、#3368）强调"无需 API key""不覆盖既有配置"，反映用户对**低门槛、可逆配置**的偏好。
- **信任与可用性问题**：官网证书过期（#3377）可能直接影响新用户对项目维护状态的判断。

## 8. 待处理积压

以下条目长期未决或已 stale，建议维护者优先关注：

| 条目 | 状态 | 积压时长 | 说明 |
|---|---|---|---|
| Issue #3287 | OPEN / stale | 创建 2026-07-22，约 53 天 | IRC 长消息支持，12 条评论仍在延续 |
| Issue #3281 | OPEN / stale | 创建 2026-07-21，约 54 天 | Web UI 性能回归，含明确复现步骤与 👍 |
| PR #3368 | OPEN / stale | 创建 2026-09-05，约 8 天 | Parallel Search MCP 文档 |
| PR #3367 | OPEN / stale | 创建 2026-09-04，约 9 天 | Pilot MCP 文档 |
| Issue #3377 | OPEN / CRITICAL | 创建 2026-09-12 | 官网证书过期，需立即处理而非积压 |

链接汇总：
https://github.com/sipeed/picoclaw/issues/3287 · https://github.com/sipeed/picoclaw/issues/3281 · https://github.com/sipeed/picoclaw/issues/3377 · https://github.com/sipeed/picoclaw/pull/3368 · https://github.com/sipeed/picoclaw/pull/3367

另注：PR #3378（fix(auth): use configured scopes instead of hardcoded default in RefreshAccessToken，作者 sarff）今日新开，修复 token 刷新时硬编码 `"openid profile email"` 覆盖 `OAuthProviderConfig.Scopes` 的问题；**目前待合并，建议优先评审**，因其属认证正确性修复。
链接: https://github.com/sipeed/picoclaw/pull/3378

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-13

> 数据来源：NanoClaw（github.com/qwibitai/nanoclaw）GitHub 公开活动，统计窗口为过去 24 小时。

---

## 1. 今日速览

- 项目今日无新版本发布，活动集中在 Issue 与 PR 的修复迭代上：24 小时内 2 条 Issue 更新（均为新开/活跃，0 关闭）、12 条 PR 更新（10 条待合并，2 条已合并/关闭）。
- 最突出的信号是**全新安装流程回归**：Issue #3787 报告 fresh setup 跳过 provider 选择器、静默选定 Claude，同一问题已在同日出现两个修复 PR（#3788 待合并、#3790 已关闭），显示核心团队响应迅速。
- 另一条开放 Issue #3785 指出 `channels` 分支引用了 main 上不存在的 `ChatSdkBridgeConfig.extractRawText`，属于跨分支不一致导致的可复现问题。
- 待合并 PR 中，多条大型功能 PR（code mode 持久化编码会话 #3783、community portal 远程终端 #3784、语音通道 #3764/#3772）持续推进，说明项目正从纯聊天助手向多通道、可编码的智能体平台扩张。
- 整体活跃度评估：**中高**。修复链路闭环快，但无发布落地，且存在 PR 积压（最早可追溯至 2026-08-23）。

---

## 2. 版本发布

今日无新版本发布，本节省略。

---

## 3. 项目进展

今日有 2 条 PR 被合并或关闭：

- **PR #3790 [CLOSED]** `fix(setup): restore the agent provider picker for fresh installs`（作者 gavrielc，标签：core-team, area/setup-installation）
  修复了 PR #3729（community portal）引入的回归：`setup/auto.ts` 中的 `askAgentProviderChoice` 在 `DEFAULT_AGENT_PROVIDER` 解析为 `claude` 时跳过运行时选择器——而这正是所有全新安装的默认情形，导致首次用户无法选择 provider。
  链接：https://github.com/nanocoai/nanoclaw/pull/3790

- **PR #3782 [CLOSED]** `gateway providers: pass the session's container name in the provider input`（作者 gavrielc，标签：core-team, area/containers, area/credentials）
  `GatewayProviderInput` 新增必填字段 `containerName: string`（与 `key`、`groupName` 并列），并由 `src/container-runner.ts` 中唯一的调用点传入其已计算出的容器名。
  链接：https://github.com/nanocoai/nanoclaw/pull/3782

**整体推进评估**：今日合并/关闭的 2 条 PR 均为关键路径上的修复（安装体验、gateway provider 输入契约），属于「止血型」进展。真正的功能扩张仍停留在待合并队列中，项目向前迈进的幅度有限，健康度更依赖后续 PR 的合并节奏。

---

## 4. 社区热点

按评论数/更新时间排序，今日讨论最集中的条目：

- **Issue #3787 [OPEN]** `[bug] Fresh setup skips the provider picker and silently selects Claude`
  作者 glifocat｜创建/更新 2026-09-12｜评论 1
  这是今日唯一有评论的 Issue，且直接对应两条修复 PR，是当日社区与维护者共同聚焦的核心问题。诉求指向：安装向导的交互逻辑被默认值短路，新用户丧失知情权与选择权。
  链接：https://github.com/nanocoai/nanoclaw/issues/3787

- **PR #3463 [OPEN]** `opencode provider: fall back to message.part.delta text (#2985)`
  作者 wakqasahmed｜创建 2026-08-23｜更新 2026-09-13（今日更新）
  该 PR 修复 #2985 描述的事件循环时序竞态：`OpenCodeProvider` 仅依赖 `message.part.updated` 快照追踪文本，若最终快照未在 `session.idle` 打断读取循环前落地，文本会丢失。作为今日被更新的 PR，说明维护者或作者仍在推动该议题。
  链接：https://github.com/nanocoai/nanoclaw/pull/3463

**背后诉求分析**：热点集中在「provider 生态的可靠性」——无论是安装阶段选不到 provider，还是运行阶段 OpenCode provider 丢文本，用户对多 provider 支持的实际可用性要求正不断提高。

---

## 5. Bug 与稳定性

按严重程度排列：

**高 — 全新安装流程回归（有 fix PR）**
- Issue #3787 `[OPEN] [kind/bug, triage/unresolved]` 全新 `bash nanoclaw.sh` 安装跳过 provider picker，静默选中 Claude。受影响提交 `0399a6dfa98fa8fb27b7b267749ed04d6880379b`（main, 2026-09-12）；报告环境 macOS，但作者明确指出**失败分支是与平台无关的 setup 代码**，即影响面覆盖所有平台的全新安装。
- Fix PR：#3788（OPEN）与 #3790（CLOSED）同日提出，属高优先级、已有修复路径。
  链接：https://github.com/nanocoai/nanoclaw/issues/3787 ｜ https://github.com/nanocoai/nanoclaw/pull/3788

**中 — 跨分支 API 不一致（暂无 fix PR）**
- Issue #3785 `[OPEN]` `channels` 分支（`6d5c1d0893bcd7d6f9eabeaac629d445ab23d154`）的 Slack 适配器引用了 `ChatSdkBridgeConfig.extractRawText`，但对应的 core 文件改动从未合入 main，导致该分支 `src/channe...` 处不可用。影响范围限于 channels 分支与依赖该分支的语音/Slack 适配工作。
  链接：https://github.com/nanocoai/nanoclaw/issues/3785

**关联稳定性修复（PR 层面）**
- PR #3789 [OPEN] `fix(drivers): a watch feed that cannot subscribe must never break arming`——阻止可选、尽力而为的 watch feed 拖垮其本应辅助的功能。
  链接：https://github.com/nanocoai/nanoclaw/pull/3789
- PR #3750 [OPEN] `fix(update): extract the whole scripts/ tree for the update controller`——恢复 `/update-nanoclaw`：skill 中的 `git archive` 列表遗漏 `scripts/provider-contract-verifier.ts`，而 `scripts/update-skills.ts` 会导入它，导致控制器无法加载。
  链接：https://github.com/nanocoai/nanoclaw/pull/3750

---

## 6. 功能请求与路线图信号

今日无用户新提功能请求 Issue，但待合并 PR 队列清晰描绘了路线图方向：

- **Code Mode（持久化编码会话）** — PR #3783 [OPEN]
  为某个 group 的 agent 引入持久编码会话（容器内 tmux 上运行 Claude Code）替代聊天循环，并提供 create/list/attach 等操作动词、沙箱动词、边界审批与会话面核心。标签覆盖 agent-runner、channels、configuration、containers、core、ncl-cli、security、sessions、setup-installation——这是当前范围最大的特性 PR。
  链接：https://github.com/nanocoai/nanoclaw/pull/3783

- **Community Portal 扩展** — PR #3784 [OPEN]
  为已登录 host 的 code mode 增加两项能力：loopback 上的进程内 SSH 远程终端（流经账号链接中继），以及每个编码会话的聊天界面。
  链接：https://github.com/nanocoai/nanoclaw/pull/3784

- **语音通道** — PR #3764 [OPEN] `/add-voice`: 基于 GPT-Live-1 的全双工浏览器通话；PR #3772 [OPEN] voice adapter payload，供 `/add-voice` 从 channels registry 分支拷贝 `src/channels/voice.ts`。注意 #3785 报告的正是 channels 分支与 main 的不一致，可能影响这两条 PR 的落地。
  链接：https://github.com/nanocoai/nanoclaw/pull/3764 ｜ https://github.com/nanocoai/nanoclaw/pull/3772

- **Codex provider 结构化认证** — PR #3489 [OPEN]
  旧 `runCodexAuthStep` 依赖 clack 交互提示并把真实终端交给 `codex login` 子进程，只能在有人坐在终端前时完成登录；该 PR 改为 setup-driver 的结构化认证，指向无人值守/自动化安装场景。
  链接：https://github.com/nanocoai/nanoclaw/pull/3489

- **Runner turn state 驱动的 typing 指示** — PR #3786 [OPEN]
  typing 指示改为跟随 runner 自身的 turn 状态（`ContainerRecord` 新增 `turn: 'worki...`）而非猜测心跳文件，并可携带 runner 发布的短状态文本。
  链接：https://github.com/nanocoai/nanoclaw/pull/3786

**纳入下一版本的可能性判断**：安装/更新类修复（#3788、#3750）优先级最高、最可能先落地；Code Mode（#3783）与语音通道（#3764/#3772）体量大且受跨分支问题牵制，预计需要更长评审周期。

---

## 7. 用户反馈摘要

基于今日可获得的 Issue 内容（评论样本极少，仅 #3787 有 1 条评论，摘要以 Issue 正文陈述为主）：

- **痛点：新用户被默认值剥夺选择权**。#3787 中用户明确指出「fresh setup skips the provider picker and silently selects Claude」，即首次运行 `bash nanoclaw.sh` 时未被询问即进入 Claude 路径。这属于 onboarding 体验问题，直接影响非 Claude 用户的第一印象。
- **痛点：跨分支开发的契约漂移**。#3785 报告者以具体 commit（channels 分支 `6d5c1d08…`）和具体符号（`ChatSdkBridgeConfig.extractRawText`）指出 Slack 适配器依赖的 core 改动「never landed on main」，反映出多分支并行开发中缺乏契约校验的摩擦。
- **使用场景线索**：从 #3750 可见用户实际使用 `/update-nanoclaw` 更新控制器；从 #3489 可见用户希望在无人在终端前的环境下完成 Codex 登录；从 #3783/#3784 可见用户将 NanoClaw 用于持久编码会话与远程终端场景。
- **满意度信号**：同日出现两个针对同一安装 bug 的修复 PR，说明维护者对用户报告的响应是积极的；但 #3787 的 `triage/unresolved` 标签也表明该 Issue 在今日尚未被正式标记为已定位。

---

## 8. 待处理积压

以下条目创建时间较早且仍处于 OPEN 状态，建议维护者优先关注：

- **PR #3463** `opencode provider: fall back to message.part.delta text (#2985)` — 创建于 2026-08-23，至 2026-09-13 已积压约 3 周。该 PR 修复的是会丢文本的时序竞态（功能性问题），长期悬挂会持续影响 OpenCode provider 用户。
  链接：https://github.com/nanocoai/nanoclaw/pull/3463

- **PR #3489** `feat(codex): structured setup-driver authentication for the Codex provider` — 创建于 2026-08-23，同样积压约 3 周，且带 core-team 标签，属于认证/自动化安装的关键改动。
  链接：https://github.com/nanocoai/nanoclaw/pull/3489

- **PR #3750** `fix(update): extract the whole scripts/ tree for the update controller` — 创建于 2026-09-08，更新于 2026-09-12，已积压 5 天。修复的是 `/update-nanoclaw` 完全不可用的问题，影响所有依赖该 skill 更新实例的用户。
  链接：https://github.com/nanocoai/nanoclaw/pull/3750

- **Issue #3785** `channels branch: slack.ts references ChatSdkBridgeConfig.extractRawText which doesn't exist on main` — 今日新开但**评论数为 0**、尚无 fix PR，且直接影响 channels 分支上多条语音/Slack 相关 PR 的可行性，建议尽快分派。
  链接：https://github.com/nanocoai/nanoclaw/issues/3785

---

*说明：本日报所有链接、版本号、提交哈希、作者与统计数字均直接取自所提供 GitHub 数据，未作推算或补充。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-09-13）

## 1. 今日速览

过去 24 小时 IronClaw 活跃度处于低位：**无新 Issue、无版本发布、无合并或关闭的 PR**，仅 1 条待合并 PR（#8098）被创建并更新。唯一进展集中在测试层面——#8098 为 lineage 状态转换补充了反向回归测试，属于稳定性加固而非功能推进。整体来看，项目处于低吞吐的维护节奏，社区参与和功能演进信号均不明显。

## 2. 版本发布

今日无新版本发布，且数据中无历史 Releases 记录，故略。

## 3. 项目进展

今日**无已合并或已关闭的 PR**，项目在功能与修复层面向前推进为 0。唯一处于 OPEN 状态的 PR（#8098）尚未合并，其内容为测试补强：

- [#8098 [OPEN] test(turns): pin state-derived lineage drop](https://github.com/nearai/ironclaw/pull/8098)
  - 作者：huiq777 ｜ 创建/更新：2026-09-12 ｜ 状态：待合并
  - 在既有的 terminal-rewrite lineage 测试旁补充缺失的反向回归测试；验证元数据初始携带 depth、activation provenance 与 descendant cap，并固定（pin）后续 `TurnRunState` 派生行为导致的 lineage 丢弃。

注：摘要文本在“a subsequent `TurnRunState`-der…”处被截断，具体固定的行为细节未能完整获取，建议以 PR 页面原文为准。

## 4. 社区热点

今日 Issues 与 PR 评论数据均缺失（#8098 的评论数为 `undefined`），无讨论活跃的条目，**无社区热点可分析**。唯一有交互痕迹的是 PR #8098，但点赞为 0、无可见讨论，尚不构成热点。

## 5. Bug 与稳定性

今日**无新报告的 Bug、崩溃或回归问题**。相关稳定性工作为预防性质：

- PR [#8098](https://github.com/nearai/ironclaw/pull/8098) 针对 lineage 状态派生导致的 lineage 丢弃建立回归测试锚点，目的是防止未来改动引入回归，而非修复已发生的故障。严重程度：不适用（非线上问题）；已有 fix PR：否（属测试保护，非修复）。

## 6. 功能请求与路线图信号

今日无新功能请求（Issues 为 0）。基于现有 PR 可推断的信号有限：项目近期关注点在 **turn 状态与 lineage（血缘/派生链）相关的测试覆盖与行为稳定性**，若 #8098 合并，可能预示后续会围绕 `TurnRunState` 状态派生逻辑做更严格的契约固定。除此之外，数据不足以支撑对下一版本范围（功能或数量）的判断。

## 7. 用户反馈摘要

今日无 Issue 及 Issue 评论数据，**无法提炼用户痛点、使用场景或满意/不满意反馈**。该项在今日数据下为空。

## 8. 待处理积压

- 数据未提供长期未响应的 Issue 或 PR 列表，无法识别超期积压项。
- 当前唯一待处理项为 PR [#8098](https://github.com/nearai/ironclaw/pull/8098)，创建于 2026-09-12，尚在 1 天内，属于正常待审窗口，建议维护者及时评审以确认该回归测试是否覆盖预期场景（尤其摘要中截断的 `TurnRunState` 派生行为）。

---

**健康度小结**：本日数据反映项目处于低活跃维护状态——零 Issue 流量、零合并、零发布，唯一动作是单条测试 PR。低 Issue/PR 流量既可解读为稳定性良好（无新故障上报），也可能反映社区参与度偏低，需结合更长周期数据判断趋势。所有结论均受限于今日样本量（Issues 0 条、PR 1 条、评论数据缺失），不宜据此推断项目方向变化。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-13）

## 1. 今日速览

过去 24 小时，LobsterAI 无新版本发布，但 Issue 与 PR 通道均保持活跃：3 条 Issue 更新（全部为 OPEN 状态），7 条 PR 更新（4 条待合并、3 条已合并/关闭）。今日的合并动作集中在 `fisherdaddy` 提交的 3 个 PR（#2659、#2658、#2657），覆盖 Markdown 编辑、openclaw 子代理空响应修复以及缩略图渲染与原生依赖构建问题。与此同时，4 条标记 `[stale]` 的待合并 PR（#1038、#1042、#1044、#1045）自 2026-03-30 创建后长期停滞，其中 #1042 是关联 P0 安全漏洞的修复，值得优先关注。整体活跃度中等，代码合并在推进，但安全类修复的积压构成项目健康度的主要风险点。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共有 3 条 PR 被合并/关闭，均由 `fisherdaddy` 提交：

- **PR #2659 [CLOSED] feat: support markdown editing**（创建并更新于 2026-09-13）
  标签涵盖 `area: renderer, area: docs, area: main, area: artifacts`，为项目引入 Markdown 编辑支持，属于功能性推进。
  链接: netease-youdao/LobsterAI PR #2659

- **PR #2658 [CLOSED] fix: openclaw subagent yield empty response**（创建并更新于 2026-09-13）
  标签涵盖 `area: docs, area: main, area: openclaw`，修复 openclaw 子代理返回空响应的问题，涉及智能体执行链路的稳定性。
  链接: netease-youdao/LobsterAI PR #2658

- **PR #2657 [CLOSED] fix: resolve thumbnail rendering and native dependency build issues**（创建 2026-09-11，更新 2026-09-12）
  标签涵盖 `area: renderer, area: build, area: docs, area: main, area: openclaw`，修复缩略图渲染与原生依赖构建问题，横跨渲染层与构建流程。
  链接: netease-youdao/LobsterAI PR #2657

三者的 PR 描述均为空，具体改动细节无法从所给数据中确认，但标签显示今日推进方向覆盖编辑能力、子代理稳定性与构建/渲染修复。

## 4. 社区热点

今日数据中，所有 Issue 与待合并 PR 的评论数均为 1 或未提供（`undefined`），点赞数均为 0，无显著讨论热度峰值。相对而言，围绕 **P0 安全漏洞** 的 Issue #1041 与其修复 PR #1042 形成了唯一的「问题—修复」对应关系，是当日最具实质意义的关联：

- **Issue #1041 [OPEN] [stale] security: api:fetch/stream IPC 可被用于 SSRF 攻击，readFileAsDataUrl 可读取任意本地文件**
  作者: MaoQianTu | 创建: 2026-03-30 | 更新: 2026-09-13 | 评论: 1
  链接: netease-youdao/LobsterAI Issue #1041
- **PR #1042 [OPEN] [stale] fix(security): api:fetch/stream IPC 可被用于 SSRF 攻击，readFileAsDataUrl 可读取任意本地文件**
  作者: MaoQianTu | 创建: 2026-03-30 | 更新: 2026-09-13
  链接: netease-youdao/LobsterAI PR #1042

**背后诉求分析**：报告者明确列出两个 P0 级漏洞——主进程 `api:fetch` / `api:stream` IPC handler 对传入 URL 无校验，可被用于探测内网、攻击 localhost 服务，或请求云 metadata endpoint（169.254.169.254）窃取 IAM 凭证；以及 `dialog:readFileAsDataUrl` 存在任意文件读取风险。修复 PR 已同步提交，但自 3 月创建以来一直未被合并，反映了安全敏感修复的评审响应存在明显滞后。

## 5. Bug 与稳定性

按严重程度排列：

**【高 / P0】Issue #1041 — SSRF + 任意文件读取安全漏洞**
- 类型：安全问题
- 状态：OPEN，`[stale]`，自 2026-03-30 创建至今未关闭
- 位置：`src/main/main.ts` 第 4046、4095 行的 `api:fetch` / `api:stream`
- Fix PR：**已有** — PR #1042，同样处于 OPEN `[stale]` 状态，尚未合并
- 链接: netease-youdao/LobsterAI Issue #1041 / netease-youdao/LobsterAI PR #1042

**【中】Issue #1046 — 模型配置上下文窗口限制问题**
- 类型：配置/文档问题
- 状态：OPEN，`[stale]`
- 现象：上下文窗口被限制为 200K，而非 Qwen3.5-Plus 官方支持的 1M；文档中缺少相关说明，用户不清楚能否本地自定义
- Fix PR：无
- 链接: netease-youdao/LobsterAI Issue #1046

**【中】Issue #1047 — 已清除的技能在切换 Agent 后仍然存在**
- 类型：状态一致性问题（功能回归类）
- 状态：OPEN，`[stale]`
- 现象：预设 Agent 与自定义 Agent 均复现——清除技能后切换到其他 Agent 再切回，技能仍然存在
- Fix PR：无
- 链接: netease-youdao/LobsterAI Issue #1047

**【中】PR #1038 — 流式响应 ReadableStream reader 泄漏**
- 类型：资源泄漏
- 说明：`handleResponsesStreamResponse` 与 `handleChatCompletionsStreamResponse` 中 `reader.cancel()` 被置于 `if (sawDoneMarker)` 条件块内，仅在收到 `[DONE]` 时执行；网络中断/超时、服务端提前关闭连接、上游异常等场景均不会触发 `cancel()`，导致 reader 永久泄漏
- 状态：OPEN，`[stale]`
- 链接: netease-youdao/LobsterAI PR #1038

## 6. 功能请求与路线图信号

- **上下文窗口可配置化**（Issue #1046）：用户希望明确 Qwen3.5-Plus 上下文窗口被限制为 200K 的原因，并期望提供自定义参数或平台侧配置选项。当前无对应 PR，若采纳需产品/配置层决策。
- **Agent 切换时的未保存更改提示**（PR #1045）：作者 `johnnyhwa` 指出「切换其他 Agent 前修改了信息，点击切换后修改信息丢失」，建议增加改动提醒。该 PR 已提交但处于 `[stale]` 待合并状态，属于可直接落地的体验改进。
- **Markdown 编辑支持**（PR #2659）：已于今日合并，说明富文本/文档编辑方向进入代码库。
- **Windows 根驱动器安装路径规范化**（PR #1044）：`leedalei` 提交，针对用户选择盘符根目录（如 `D:\` 或 `D:`）时自动追加 `\LobsterAI`，非根目录自定义路径行为保持不变。处于 `[stale]` 待合并状态。

结合已有 PR 判断，**#1045（未保存提示）** 与 **#1044（安装路径修复）** 均已具备合并条件，是最可能被纳入下一版本的两项。

## 7. 用户反馈摘要

- **安全担忧（Issue #1041）**：报告者以 P0 定性并明确指出攻击面（内网探测、localhost 服务攻击、云 metadata 凭证窃取），并已自行提交修复 PR，诉求是尽快合并。
- **配置透明度不足（Issue #1046）**：用户反映「在官方文档中没有找到」上下文窗口限制的相关信息，体现出对模型参数可控性与文档完整性的不满，并提供了 `providers.lobster.baseUrl` 等配置片段作为讨论基础。
- **状态一致性痛点（Issue #1047）**：用户通过截图复现「已清除技能切换 Agent 后仍存在」，属于日常使用中的确定性困扰。
- **数据丢失风险（PR #1045）**：用户反馈 Agent 设置切换导致未保存修改丢失，属于典型的体验损耗场景，并附有录屏佐证。

## 8. 待处理积压

以下条目自 2026-03-30 创建/更新后长期停滞，且均带 `[stale]` 标记，建议维护者优先处理：

| 条目 | 类型 | 作者 | 创建日期 | 状态 | 链接 |
|------|------|------|----------|------|------|
| Issue #1041 | P0 安全漏洞 | MaoQianTu | 2026-03-30 | OPEN | netease-youdao/LobsterAI Issue #1041 |
| PR #1042 | P0 安全修复（关联 #1041） | MaoQianTu | 2026-03-30 | OPEN | netease-youdao/LobsterAI PR #1042 |
| PR #1038 | 流式 reader 泄漏修复 | choyuenga | 2026-03-30 | OPEN | netease-youdao/LobsterAI PR #1038 |
| PR #1044 | 安装路径修复 | leedalei | 2026-03-30 | OPEN | netease-youdao/LobsterAI PR #1044 |
| PR #1045 | 未保存更改提示 | johnnyhwa | 2026-03-30 | OPEN | netease-youdao/LobsterAI PR #1045 |
| Issue #1046 | 上下文窗口配置 | jiahuikong4-png | 2026-03-30 | OPEN | netease-youdao/LobsterAI Issue #1046 |
| Issue #1047 | 技能清除不生效 | tzhouzhou | 2026-03-30 | OPEN | netease-youdao/LobsterAI Issue #1047 |

**重点关注**：#1041 / #1042 这一组安全漏洞及其修复已积压近半年（自 2026-03-30 至 2026-09-13），是当前积压中风险等级最高的一项，建议优先安排评审与合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-13

## 1. 今日速览

- 今日无新版本发布，项目处于常规迭代节奏。
- 24 小时内 Issues 更新 1 条（已关闭 1 条，无新开或活跃讨论），PR 更新 4 条（待合并 1 条，已合并/关闭 3 条）。
- 核心动作集中在 reasoning effort 配置能力与 Telegram 共享频道工具策略修复，均已有对应 PR 落地或进入合并流程。
- 昨日报告的 Telegram 工具失效 Bug（#1264）已由 PR #1265 修复并关闭，响应速度较快。
- 整体活跃度：中低。当日以"收口"为主（3 条 PR 关闭、1 条 Bug 关闭），仅 PR #1266 为新增待合并项；社区讨论热度极低（Issues/PR 评论数与点赞数均为 0/未定义）。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭 3 条 PR，推进两条主线：

**Telegram 共享频道工具策略修复（#1265，已关闭）**
- 作者：penso；创建 2026-09-12，更新 2026-09-13。
- 修复 #1264：Telegram 此前继承了 gateway 的"默认拒绝全部工具"上限（deny-all tool ceiling），却未暴露 Slack 已支持的相应设置。该 PR 将 `untrusted_audience` 与 `untrusted_tools` 打通到 Telegram 的配置、运行时访问与存储层。
- 链接：moltis-org/moltis PR #1265

**推理强度 max 级别支持（#1253，已关闭）**
- 作者：GTanger；创建 2026-09-02，更新 2026-09-13。
- 在共享 `ReasoningEffort` schema 中新增 `max` 级别，并支持 `@reasoning-max` 模型后缀解析；对 OpenAI Codex Responses API 原样透传 `max`，对不提供独立最高档的供应商做钳制处理。
- 链接：moltis-org/moltis PR #1253

**依赖维护（#1263，已关闭）**
- 作者：dependabot[bot]；创建 2026-09-10，更新 2026-09-13。
- 跨 2 个目录共 4 项更新：`/crates/web/ui` 目录 1 项（`@babel/core`），`/docs` 目录 3 项（含 `astro`）。
- 链接：moltis-org/moltis PR #1263

**整体推进评估**：项目在"工具权限可控性"（Telegram 对齐 Slack）与"推理强度可配置化"两个方向各前进了一步，且依赖保持更新，健康度良好。

## 4. 社区热点

今日无高讨论度条目——所有 Issues/PR 的评论数均为 0（部分显示为 undefined），👍 均为 0。相对最值得关注的是：

- **PR #1266 [OPEN] feat(chat): persist configurable default reasoning effort**（作者 penso，2026-09-13 创建并更新）
  关闭 #1259，新增 `chat.reasoning_default`，用于新建/无模型绑定的聊天会话（含主聊天）；复用共享 effort 枚举：`minimal`、`low`、`medium`、`high`、`xhigh`、`max`，并接受 `extra-high` 作为 `xhigh` 的别名。
  链接：moltis-org/moltis PR #1266
- **PR #1253 关闭**：`max` 级别的加入与 #1266 的默认值持久化形成配套，反映社区/维护者对"推理强度精细化控制"的持续诉求。

## 5. Bug 与稳定性

今日报告并关闭 1 个 Bug：

| 严重程度 | 编号 | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| 高（核心功能失效） | #1264 | [Bug]: Tools stop working in shared Telegram channels | CLOSED | 是，PR #1265 |

- **#1264**：Telegram 共享频道中工具停止工作。作者 stratus-ss，创建 2026-09-12，更新 2026-09-13，评论 0，👍 0。摘要显示用户已确认使用最新版本并已检索现有 issue。
  链接：moltis-org/moltis Issue #1264
- 根因（据 #1265 摘要）：Telegram 继承了 gateway 的 deny-all 工具上限，但未像 Slack 一样暴露 `untrusted_audience`、`untrusted_tools` 设置。修复已随 PR #1265 关闭。
- 无其他崩溃或回归问题报告。

## 6. 功能请求与路线图信号

数据中未出现独立的用户功能请求 Issue。可识别的路线图信号来自 PR：

- **可配置的默认推理强度**（PR #1266，待合并）：`chat.reasoning_default` 面向新建/无模型会话，是 #1259 的落地实现。结合已关闭的 #1253（`max` 级别 + `@reasoning-max` 后缀），推理强度体系已覆盖 minimal → max 全档位及别名，**该能力大概率进入下一版本**。
- **跨平台工具策略一致性**（PR #1265，已关闭）：Telegram 对齐 Slack 的 `untrusted_audience` / `untrusted_tools` 模型，暗示后续其他渠道适配可能沿用同一模式。
- **依赖与文档栈更新**（PR #1263，已关闭）：`astro` 与 `@babel/core` 等升级属维护性动作，不构成新功能信号。

## 7. 用户反馈摘要

今日唯一用户侧输入为 Issue #1264（作者 stratus-ss）。由于该 Issue 评论数为 0，无法从评论中提炼更多反馈。可确认的信息：

- 使用场景：在**共享 Telegram 频道**中调用工具。
- 痛点：工具在该场景下完全停止工作，属阻断性体验问题。
- 满意点：用户 preflight 清单显示其已使用最新版本并检索历史 issue；问题在 1 天内被修复关闭（#1264 创建 09-12 → #1265 关闭 09-13），响应及时。
- 不满意点/信息缺口：Issue 正文在提供的数据中被截断，未包含完整复现步骤与期望行为描述，无法进一步分析。

## 8. 待处理积压

- **PR #1266**（feat(chat): persist configurable default reasoning effort）：2026-09-13 创建、当日更新，仍为 OPEN。为今日唯一待合并项，无长期积压迹象。
- 今日数据中**未发现**长期未响应的重要 Issue 或 PR；唯一 Issue #1264 已在 1 天内关闭。
- 备注：#1266 摘要中评论数在原始数据里为 `undefined`，无法判断是否已有 reviewer 参与，建议维护者优先安排审阅以保持该功能的推进节奏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报（2026-09-13）

## 1. 今日速览

过去 24 小时 CoPaw 共处理 8 条 Issue（新开/活跃 6、关闭 2）与 1 条待合并 PR，无新版本发布。活跃度中等，社区讨论集中在记忆持久化、会话丢失、A2A 支持与插件生态等长期主题。今日唯一的代码动作是 ACP 权限匹配修复 PR #7732，仍处于待合并状态；已关闭的 #7582（插件商店交互）和 #3429（Docker 预装 CLI 工具）显示维护者在清理存量需求。整体健康度平稳，但记忆/会话类问题重复出现，值得优先关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- 今日无已合并/关闭的 PR。
- 唯一待合并 PR：#7732 `fix(acp): select permission options by protocol kind`（作者 axelray-dev，创建 2026-09-12，更新 2026-09-13）。该 PR 指出：受信任的 ACP 会话原先依赖 `optionId` 匹配允许选项，但 ACP 将 option ID 交由各 agent 自定义，导致 `approve_once` 之类的 ID 被漏配，安全的工具调用被迫回退到交互式确认；修复方案改为优先匹配 ACP 稳定的 `kind` 字段。
  链接：https://github.com/agentscope-ai/QwenPaw/pull/7732
- 已关闭 Issue 两例：#7582（插件商店操作复杂、缺少一键更新与更新通知）、#3429（Docker 镜像预装 himalaya 等常用 CLI 工具），均为 enhancement 类，属于积压需求的收敛。

## 4. 社区热点

按今日评论数排序：

1. **#7571 [OPEN][question] 总是记不住，还是会遗忘**（评论 4，👍0）— 用户描述多路径（源码/默认/插件运行时）开发部署场景下，反复强调的规则（TODO 文件生成位置、开发路径）仍被遗忘，Agent 甚至跑到错误路径开发并触发自动部署覆盖未完成代码。反映长期记忆与指令遵循的可靠性问题。
   链接：https://github.com/agentscope-ai/QwenPaw/issues/7571
2. **#7724 [OPEN][bug] 会话丢失**（评论 3，👍0）— Windows 10 / 2.2.1 desktop 用户在一次插件重新部署与 shutdown 后，无法在中断处恢复，recall history 找不到此前会话，控制-会话中完全丢失；同时大模型配置也一并丢失（重启桌面端可恢复模型选择，但对话无法找回）。作者称此前已反复遇到同类问题。
   链接：https://github.com/agentscope-ai/QwenPaw/issues/7724
3. **#7484 [OPEN][enhancement] 基于 qwenpaw 2.x 的 A2A 何时支持**（评论 3，👍0）— 用户援引架构文档中"MCP/A2A/ACP 通过统一 Driver 机制实现"，指出当前代码仅支持 MCP，询问 A2A 是否有官方支持计划与时间表。
   链接：https://github.com/agentscope-ai/QwenPaw/issues/7484
4. **#7582 [CLOSED][enhancement] 插件商店操作复杂**（评论 2，👍0）— 安装/更新后页面整体刷新并跳回已安装列表、缺少一键更新与更新通知，多机多插件场景下逐个搜索更新成本高。
   链接：https://github.com/agentscope-ai/QwenPaw/issues/7582

背后诉求可归纳为三条主线：**状态持久化可信度**（记忆与会话）、**协议层能力对齐**（A2A/ACP）、**插件生态的规模化运维体验**。

## 5. Bug 与稳定性

按严重程度排列：

1. **严重 — 会话数据丢失（#7724，OPEN）**：中断恢复流程中历史会话不可检索，且伴随模型配置丢失，用户称此前多次复现，属于数据可靠性问题。尚无关联 fix PR。
   链接：https://github.com/agentscope-ai/QwenPaw/issues/7724
2. **中高 — 长任务长期记忆失效（#7571，OPEN）**：Agent 无法稳定遵守用户设定的路径/产物规则，并出现跨路径误操作，可能导致未完成代码被自动部署覆盖，具备实际破坏性。尚无关联 fix PR。
   链接：https://github.com/agentscope-ai/QwenPaw/issues/7571
3. **中 — 插件目录读取失败未走离线回退（#7730，OPEN）**：官方插件目录在连接重置或 CDN 响应中断时返回服务端错误，而非文档承诺的"空目录 + error 字段"，现有集成契约被隔离未生效。
   链接：https://github.com/agentscope-ai/QwenPaw/issues/7730
4. **中 — ACP 权限匹配错误（已有 fix PR #7732）**：因按 `optionId` 匹配导致安全工具调用回退为交互确认，属功能可用性缺陷，已有待合并修复。
   链接：https://github.com/agentscope-ai/QwenPaw/pull/7732

## 6. 功能请求与路线图信号

- **Agent 自主上下文管理（#7733，OPEN，MCQSJ，2026-09-13 新开）**：指出上下文驱逐目前仅由纯 token 阈值触发，Agent 本身无预警、无话语权，呼吁实现平滑交接。与 #7571 的记忆痛点在主题上高度呼应，是上下文窗口治理方向的重要信号。
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7733
- **A2A 协议官方支持（#7484，OPEN）**：涉及 Driver 机制的能力补全，属架构级路线图问题，用户明确要求给出计划时间。
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7484
- **Files 面板显示点前缀文件/目录开关（#7731，OPEN）**：默认隐藏合理，但 UI 缺少显式揭示入口，属小颗粒前端增强。
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7731
- **插件商店一键更新与更新通知（#7582，已关闭）**：需求已被关闭处理，其落地情况可结合实际版本变化观察。

结合已有 PR 判断：#7732 属修复类，落地概率高；A2A（#7484）与上下文自主管理（#7733）为架构级议题，短期内更可能停留在讨论与设计阶段。

## 7. 用户反馈摘要

- **多环境工程工作流是真实高频场景**（#7571）：用户在"源码目录开发 → 插件运行时目录部署"的三路径工作流中运行 Agent，规则反复失效直接影响交付正确性。
- **中断恢复体验不可靠**（#7724）：插件重新部署 / shutdown 等中断后，用户期望"从中断处继续开发"，实际遭遇会话不可检索，且已反复发生，信任成本高。
- **插件规模化运维负担重**（#7582）：多台机器、多个插件的安装与更新依赖逐个搜索点击，页面刷新打断浏览上下文。
- **文档与实现存在预期落差**：用户在 #7484 依据架构文档提出 A2A 支持询问，在 #7730 指出离线回退行为与文档承诺不符，说明契约与文档一致性需加强。

## 8. 待处理积压

- **#3429 [CLOSED]**：创建于 2026-04-15，至 2026-09-13 才更新关闭，历时约 5 个月，反映长期 enhancement 的处理周期偏长。
  链接：https://github.com/agentscope-ai/QwenPaw/issues/3429
- **#7484 [OPEN]**：创建于 2026-09-02，至 2026-09-12 仍有讨论但未见官方明确时间表回复，建议维护者就 A2A 计划给出公开结论。
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7484
- **#7571 [OPEN]**：创建于 2026-09-05，持续活跃至今日，涉及记忆可靠性且无关联修复 PR，建议评估优先级。
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7571
- **#7582 [CLOSED]**：创建于 2026-09-06，今日周期内关闭，建议同步披露关闭原因与后续安排，避免需求静默流失。
  链接：https://github.com/agentscope-ai/QwenPaw/issues/7582

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-13

## 1. 今日速览

过去 24 小时项目保持高活跃度：34 条 Issue 更新（新开/活跃 28、关闭 6），50 条 PR 更新（待合并 38、合并/关闭 12），无新版本发布。讨论焦点集中在运行时的稳定性与正确性——栈溢出风险、SOP 步骤推进顺序、失败轮次持久化，以及 provider 重试/回退策略。待合并 PR 数量（38）明显高于已合并数（12），且多条 XL 规模 PR 长期挂起等待作者或维护者响应（`needs-author-action`、`needs-maintainer-review`），评审带宽可能成为当前瓶颈。整体看，项目缺陷发现与修复节奏健康，但合并吞吐与积压消化值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 12 条 PR，但展示列表中未见已合并的高讨论 PR；已关闭 Issue 中以下几条具有明确推进意义：

- **#10534 [CLOSED]** bounded delegates 静默剥离 `delegate` 工具、与 `delegation_policy`/`max_delegation_depth` 配置矛盾的问题已关闭，委托策略配置一致性得到修复。
- **#10689 [CLOSED]** Telegram 语音回复在文本以 `[` 开头（ElevenLabs v3 音频标签）时被静默跳过的问题已关闭，TTS 通道行为恢复正常。
- **#10277 [CLOSED]** 发布用 zerorelay 镜像基础标签按 digest 固定的安全跟进项已完成，供应链可复现性提升。
- **#10731 [CLOSED]** `zeroclaw service logs` 在 macOS/Windows/OpenRC 健康状态下无输出的问题已关闭。

整体推进幅度：以正确性和安全加固为主，未见新功能落地。

参考链接：
- https://github.com/zeroclaw-labs/zeroclaw/issues/10534
- https://github.com/zeroclaw-labs/zeroclaw/issues/10689
- https://github.com/zeroclaw-labs/zeroclaw/issues/10277
- https://github.com/zeroclaw-labs/zeroclaw/issues/10731

## 4. 社区热点

按评论数排序的活跃讨论：

- **#10734**（7 条评论）`RpcDispatcher::process_line` 运行在 2 MB 栈保护线 2% 以内，Windows nextest 触发真实栈溢出。CI + runtime 交叉问题，标记 p1/in-progress。 https://github.com/zeroclaw-labs/zeroclaw/issues/10734
- **#9381**（5 条评论）crates.io 发布、打包与 `cargo-install` 跟进 tracker，自 7 月 26 日持续活跃，其中"crate 内符号链接破坏未开开发者模式的 Windows 检出"被点名为最具用户影响项。 https://github.com/zeroclaw-labs/zeroclaw/issues/9381
- **#10066**（4 条评论）SOP 引擎在记录步骤输出 schema 校验失败前就推进并执行后续步骤，S1 级工作流阻塞，p0。 https://github.com/zeroclaw-labs/zeroclaw/issues/10066
- **#10788**（3 条评论）失败的 Code/ACP 轮次丢弃已接受 prompt 与已完成工具交换，不写入持久历史。 https://github.com/zeroclaw-labs/zeroclaw/issues/10788

诉求解读：热点高度集中于"状态一致性与可恢复性"——历史持久化、步骤顺序、计数口径，说明社区大量使用长会话与多步工作流，对运行时语义精确性要求高。

## 5. Bug 与稳定性

按严重程度排列：

**S1 / p0**
- **#10066**（OPEN, p0）SOP 引擎在校验失败前推进后续步骤，S1 工作流阻塞。尚未见对应 fix PR。 https://github.com/zeroclaw-labs/zeroclaw/issues/10066
- **#10673**（OPEN, p1）daemon RPC 路径上失败 ACP 轮次未持久化（同为 #9333 用户影响，不同代码路径），S1。 https://github.com/zeroclaw-labs/zeroclaw/issues/10673

**S2 / p1**
- **#10734**（OPEN, in-progress）Windows 栈溢出，运行在栈保护线 2% 内，p1。 https://github.com/zeroclaw-labs/zeroclaw/issues/10734
- **#10788**（OPEN, in-progress）失败轮次丢弃持久历史，p1。 https://github.com/zeroclaw-labs/zeroclaw/issues/10788
- **#10785**（OPEN, in-progress）通知延迟导致所有运行中轮次被取消（`begin_notification_resync` → `session/cancel`）。 https://github.com/zeroclaw-labs/zeroclaw/issues/10785
- **#10635**（OPEN, accepted）运行时 profile 成本上限未反映有效的全局日预算（可报 `max_cost_per_day_cents = 4294967295`）。 https://github.com/zeroclaw-labs/zeroclaw/issues/10635
- **#10645**（OPEN, accepted）成本追踪上下文未贯穿委托子循环，p1 follow-up。 https://github.com/zeroclaw-labs/zeroclaw/issues/10645
- **#10736**（OPEN, in-progress）输出前流失败跳过已声明的非流式回退。 https://github.com/zeroclaw-labs/zeroclaw/issues/10736
- **#10787**（OPEN, in-progress）单候选流恢复忽略 `provider_retries`，529 overload 仅一次无退避重试。 https://github.com/zeroclaw-labs/zeroclaw/issues/10787

**S2 / p2–p3**
- **#10721**（OPEN）`knowledge.db_path` 的 `~` 展开为全局替换而非前缀替换，导致 knowledge 工具被静默丢弃。 https://github.com/zeroclaw-labs/zeroclaw/issues/10721
- **#10793**（OPEN, in-progress）三个 Windows-only 测试失败，代码未变更，疑似 flaky。 https://github.com/zeroclaw-labs/zeroclaw/issues/10793
- **#10802**（OPEN, accepted）`session/list-acp` 与 `turn_end` 对同一会话报告不同 `message_count`（统计口径不一致）。 https://github.com/zeroclaw-labs/zeroclaw/issues/10802
- **#10779**（OPEN）OpenCode 配额耗尽 429 被以亚秒级退避重试，而非快速失败。 https://github.com/zeroclaw-labs/zeroclaw/issues/10779
- **#10741**（OPEN, accepted）ZeroCode 在正常完成响应后静默暂停队列工作。 https://github.com/zeroclaw-labs/zeroclaw/issues/10741

**修复进度说明**：以上 Bug 中，展示数据里没有明确标注"修复 PR"的关联条目；#10734、#10788、#10736、#10787、#10793、#10785 标记 `status:in-progress`，属于已在处理中。

## 6. 功能请求与路线图信号

- **#10400**（enhancement, in-progress）可配置的 Telegram 未授权发送者提示，并让内置文案跟随该通道实际使用的授权路径。已有 in-progress 状态，进入下一版本的可能性较高。 https://github.com/zeroclaw-labs/zeroclaw/issues/10400
- **#9535**（PR, OPEN, size:XL）为 context compaction 引入 `runtime_profiles.<name>.context_compact_ratio`，按所选模型窗口比例推导裁剪预算。 https://github.com/zeroclaw-labs/zeroclaw/pull/9535
- **#9809**（PR, OPEN, size:XL）单 provider profile 支持多模型（`[providers.models.<family>.<alias>.models.<model_alias>]`），每模型独立配置。 https://github.com/zeroclaw-labs/zeroclaw/pull/9809
- **#10407**（PR, OPEN）持久化会话 prompt 附件（SQLite，最多 4 条，配套 `session_prompt_list/set/delete` 工具）。 https://github.com/zeroclaw-labs/zeroclaw/pull/10407
- **#10578**（PR, OPEN, size:XS, risk:low）Web 端 `/upload` 斜杠命令调起图片选择器，低风险小改动，合入成本低。 https://github.com/zeroclaw-labs/zeroclaw/pull/10578

路线图信号：多模型 profile、上下文压缩比例、会话级持久附件三项均属"可配置性 + 长会话治理"方向，与第 4 节的热点诉求一致。

## 7. 用户反馈摘要

- **长会话与多步工作流的可靠性是核心痛点**：#10788、#10673、#10785、#10066 共同指向"失败或中断时状态丢失/错序"，用户在 ~200k token 的多会话场景（#10785 描述三个 ACP 会话 + 一个 fable 会话同时流式）中直接遭遇轮次被取消。
- **成本控制语义不透明**：#10635 与 #10645 反映成本上限在 profile 展示与实际拒绝之间存在偏差，用户难以预判何时会被拦截。
- **Windows 开发者体验受挫**：#9381 明确指出 crate 内符号链接使未开启开发者模式的 Windows 检出失败；#10793 报告 Windows-only 测试在无关改动下连带失败。
- **计数口径不一致引发困惑**：#10802 指出同一会话两个 RPC 报告的 `message_count` 含义不同，属于可观测性层面的信任问题。
- **正面信号**：#10534、#10689、#10731 等用户可感知缺陷在今日关闭，说明反馈闭环在运转。

## 8. 待处理积压

以下长期未合并/未响应项建议维护者优先关注：

- **#9381**（创建于 2026-07-26，5 条评论）crates.io 发布与打包 tracker，其中 Windows 符号链接问题具真实用户影响，已挂起约 7 周。 https://github.com/zeroclaw-labs/zeroclaw/issues/9381
- **#9535**（PR，创建于 2026-07-29，size:XL，`needs-author-action`）上下文压缩比例锚定模型窗口，挂起约 6 周。 https://github.com/zeroclaw-labs/zeroclaw/pull/9535
- **#9809**（PR，创建于 2026-08-07，size:XL，`needs-author-action`）多模型 provider profile，挂起约 5 周。 https://github.com/zeroclaw-labs/zeroclaw/pull/9809
- **#7821**（PR，创建于 2026-06-17，size:XL，`needs-author-action`）canonical `sandbox_policy` schema 与应用层强制，已挂起近 3 个月，涉及安全域。 https://github.com/zeroclaw-labs/zeroclaw/pull/7821
- **#9134**（PR，`status:blocked`、`do-not-merge`）插件组件字节准入与 `wasm_sha256` 校验，处于阻塞状态。 https://github.com/zeroclaw-labs/zeroclaw/pull/9134
- **#8966**（PR，创建于 2026-07-11，`needs-maintainer-review`）在 usage 事件上携带实时 provider 身份并解析上下文窗口，挂起约 2 个月。 https://github.com/zeroclaw-labs/zeroclaw/pull/8966
- **#10255 / #10259**（PR，`#8289` 分阶段安全加固：OIDC token 校验 provider、RPC 认证主体）相互依赖，需按顺序评审。 https://github.com/zeroclaw-labs/zeroclaw/pull/10255 ｜ https://github.com/zeroclaw-labs/zeroclaw/pull/10259

**健康度提示**：待合并 PR 中多条为 size:XL 且带 `needs-author-action`，建议通过分阶段拆分或明确评审 SLA 来降低积压风险。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*