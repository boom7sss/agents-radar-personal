# OpenClaw 生态日报 2026-08-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-18 10:57 UTC

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

# OpenClaw 项目动态日报

**日期：2026-08-18**


## 今日速览

OpenClaw 项目在过去 24 小时保持高活跃度：共产生 500 条 Issue 更新（470 条活跃/新开、30 条关闭）和 500 条 PR 更新（341 条待合并、159 条已合并/关闭），当日无新版本发布。讨论热度集中于**消息传递可靠性**（重复/丢失消息、断线回补）与**会话状态管理**（上下文组装、压缩生命周期）两大主题，其中 P1 级问题占比显著，多个“数周至数月未解决”的高评级 Issue 均处于等待维护者评审或产品决策状态，反映出修复管线存在一定瓶颈。当日有 4 个 PR 被合并/关闭（含 1 个安全相关的 XL 级 PR），另有至少 4 个新 PR 在当日创建，项目整体处于"高提交、低合并、无发版"的持续积压状态。


## 项目进展

今日合并/关闭的 PR 数量为 159 条（含自动化机器人提交），其中值得关注的有：

- **[PR #125692 [CLOSED] fix(ui): match fullscreen table presentation](https://github.com/openclaw/openclaw PR #125692)** — 修复 Control UI 中展开 transcript Markdown 表格时全屏克隆渲染为旧版卡片样式的问题（S 级，关联 #125245/#125219）。
- **[PR #125790 [CLOSED] fix(ui): restore tool activity interaction polish](https://github.com/openclaw/openclaw PR #125790)** — 由 clawsweeper 机器人提交，修复 Control UI 工具活动区域的层级结构、图标、disclosure 所有权和助手列对齐问题（M 级，关联 #125754/#125240）。
- **[PR #120900 [CLOSED] feat(ui): review install policy warnings](https://github.com/openclaw/openclaw PR #120900)** — 这是今日合入的最大变更（XL 级、P2、安全边界相关）。为 Control UI 新增安装策略警告的审核流程：经过身份验证的管理员可以在 UI 中查看插件安装策略警告并选择继续安装，`plugins.install` 新增 `acknowledgeInstallPolicyWarning` 可选参数。对运营管理体验和供应链安全有实质改进。

此外，今日无新版本发布，多个高优先级 PR 仍停留在"等待作者回复"或"需要验证"阶段（详见待处理积压）。


## 社区热点

以下 Issue 在今日获得最高讨论热度（以评论数为准），反映了社区当前的核心关切：

- **[Issue #69208 Umbrella: duplicate transcript, replay, and context assembly across channels](https://github.com/openclaw/openclaw Issue #69208)**（评论 14，P1，🦐 gold shrimp，创建于 4 月 20 日）— 这是一个跨 MSTeams / webchat / Telegram 等多渠道的**重复 transcript、重放和上下文组装问题的总括 Issue**。作为 umbrella 问题，其持续活跃表明消息复制并非单一渠道的独立缺陷，而可能是运行时路径中的系统性设计问题。关联标签包括 `impact:session-state` 和 `impact:message-loss`。

- **[Issue #38327 [Bug] "Cannot convert undefined or null to object" in 2026.3.2 with google-vertex/gemini-3.1-pro-preview](https://github.com/openclaw/openclaw Issue #38327)**（评论 14，P1，🐚 platinum hermit，👍 3）— 一个持续了 5 个多月的回归问题：升级到 2026.3.2 后，使用 google-vertex/gemini-3.1-pro-preview 时所有消息都会触发 "Cannot convert undefined or null to object" 错误。当前处于 `clawsweeper:needs-live-repro` 状态，意味着需要实时复现才能推进。

- **[Issue #50093 WhatsApp: Backfill missed messages after reconnection](https://github.com/openclaw/openclaw Issue #50093)**（评论 13，P1，🐚 platinum hermit）— WhatsApp Web 连接断开（如 503 错误）并重连后，中断窗口期间发送到受监控群组的消息**永远不会被投递或记录**。网关成功重连但消息已丢失。5 个月未获修复，已被标记为 `clawsweeper-recovery-stuck`。

- **[Issue #39476 A2A sessions_send: target agent can call sessions_send back, causing duplicate messages](https://github.com/openclaw/openclaw Issue #39476)**（评论 12，P1，🦞 diamond lobster）— Agent A 调用 `sessions_send` 给 Agent B 后，Agent B 可以反向调用 `sessions_send` 回复，导致请求方频道出现重复消息。已有关联 PR 处于打开状态但尚未合并。

- **[Issue #96975 [Feature/Bug]: Isolate subagent completion from parent context](https://github.com/openclaw/openclaw Issue #96975)**（评论 12，P2，👍 1）— 子代理完成时会将过多子会话内容注入父代理输入路径，社区希望默认仅返回状态和子会话链接。

**分析**：社区最迫切的诉求集中在三点：**消息/会话数据完整性**（重复与丢失）、**多代理交互的正确性**（A2A 往返消息去重）、以及**上下文管理与性能**（子代理隔离、提示词缓存）。这些问题的共同特征是"日常使用频繁触发、影响感知明显"，且均未获得明确的修复时间表。


## Bug 与稳定性

### P0

- **[Issue #70903 Persistent file-based provider cooldown blocks user for hours after billing recovery](https://github.com/openclaw/openclaw Issue #70903)**（P0，🦞 diamond lobster，`impact:ux-release-blocker`）— Anthropic（或其他）提供商返回 402 计费错误后，OpenClaw 将 `disabledUntil` 时间戳写入 agent 认证状态文件，**跨网关重启持久生效**。反复失败会不断延长禁用时间，导致用户在账单恢复后仍被锁定数小时。已被标记为 stale。**无已关联的 fix PR。**

### P1

- **[Issue #38327 google-vertex/gemini-3.1-pro-preview 回归崩溃](https://github.com/openclaw/openclaw Issue #38327)**（🐚 platinum hermit）— 2026.3.2 版本引入，"Cannot convert undefined or null to object"。**无 fix PR**。
- **[Issue #50093 WhatsApp 断线消息永久丢失](https://github.com/openclaw/openclaw Issue #50093)**（🐚 platinum hermit）— 断线窗口消息不投递、不记录。**无 fix PR**。
- **[Issue #109490 codex app-server: client-delegated message tool 返回 terminate:true 导致后续工作永远不执行](https://github.com/openclaw/openclaw Issue #109490)**（🐚 platinum hermit）— 自 2026.7.1 起，客户端委托的动态工具返回 `terminate: true`，导致代理发送进度消息后本应继续的工作被中断。影响 Telegram/channel 消息工具。**无 fix PR**。
- **[Issue #89278 Codex OAuth 刷新成功但 cron/heartbeat 10 秒认证超时](https://github.com/openclaw/openclaw Issue #89278)**（🦪 silver shellfish，👍 2）— `models status --probe` 成功但实际运行时认证刷新超时。**已有关联 PR 但未合并**。
- **[Issue #98435 MCP loopback transport 网关重启后不自动重连，recovered=1 具有误导性](https://github.com/openclaw/openclaw Issue #98435)**（🦞 diamond lobster）— 会话恢复报告 `recovered=1` 但 CLI 与网关之间的 MCP transport 实际已断开。**无 fix PR**。
- **[Issue #103231 claude-cli 后端 ownsNativeCompaction 假设错误，会话膨胀至 200% 无压缩](https://github.com/openclaw/openclaw Issue #103231)**（🦞 diamond lobster，👍 2）— 关键设计缺陷：`claude -p` 会话实际上不拥有原生压缩能力，导致会话无限增长、所有恢复路径静默失败。**无 fix PR**。
- **[Issue #123073 dev 更新通道 EUNSUPPORTEDPROTOCOL（npm vs pnpm 不匹配）](https://github.com/openclaw/openclaw Issue #123073)**（🦞 diamond lobster，创建于 8 月 13 日）— 仓库 `package.json` 声明 `pnpm@11`，但 updater 使用 npm，导致 `workspace:*` 协议无法解析。**已有关联 PR 但未合并**。

### P2（重点）

- **[Issue #88657 DeepSeek V4 Flash 不完整回合（5.27/28 回归）](https://github.com/openclaw/openclaw Issue #88657)**（🦪 silver shellfish）— `payloads=0, tools=2, stopReason=stop`，5.26 正常。**无 fix PR**。
- **[Issue #115001 混合记忆搜索 FTS LIKE 回退返回虚假的 1.0 相似度分数](https://github.com/openclaw/openclaw Issue #115001)**（🦞 diamond lobster）— 硬编码 textScore 导致搜索结果排序失真。**已有关联 PR 但未合并**。
- **[Issue #111857 CLI 预算重新打开完整压缩 JSONL 分支，反复压缩低上下文父会话](https://github.com/openclaw/openclaw Issue #111857)**（🦞 diamond lobster，`impact:data-loss`）— 子代理完成通知后，CLI 压缩生命周期重新打开完整会话 JSONL，导致提示词估算膨胀和过度压缩。**无 fix PR**。
- **[Issue #94939 6.x 迁移致频道会话存储 SQLite 为空（0 字节）](https://github.com/openclaw/openclaw Issue #94939)**（🦞 diamond lobster，`impact:data-loss`）— 升级到 2026.6.8 后，per-channel conversation store 迁移将 JSON 重命名为 `.migrated` 但新 SQLite 为空，破坏 MS Teams 主动发送。**已有关联 PR 但未合并**。
- **[Issue #114612 memory-core SQLite 无界增长](https://github.com/openclaw/openclaw Issue #114612)**（🦞 diamond lobster）— `memory_index_chunks` 和 `memory_embedding_cache` 无保留策略，将随时间填满磁盘。**无 fix PR**。
- **[Issue #54409 飞书插件 per-chat 串行队列阻止 collect 模式批处理](https://github.com/openclaw/openclaw Issue #54409)**（🦞 diamond lobster）— 阻塞队列消息到达网关的 followup 批处理路径。**无 fix PR**。
- **[Issue #96692 Slack 线程回复在 origin tuple 丢失后可生成但无法投递](https://github.com/openclaw/openclaw Issue #96692)**（🦞 diamond lobster，`impact:message-loss`）— 会话显示完成但最终回复未投递。**已有关联 PR 但未合并**。
- **[Issue #99586 网关操作后运行时工具表面返回空白 body](https://github.com/openclaw/openclaw Issue #99586)**（🦐 gold shrimp，👍 2，P1）— 容器重启仅能短暂清除。**无 fix PR**。
- **[Issue #75782 嵌入式运行 auth 阶段同步阻塞 10-15 秒](https://github.com/openclaw/openclaw Issue #75782)**（🦪 silver shellfish）— 无论认证状态如何，每次启动都同步阻塞事件循环。**无 fix PR**。
- **[Issue #95610 每轮动态注入破坏 OpenAI 提示词前缀缓存](https://github.com/openclaw/openclaw Issue #95610)**（🦞 diamond lobster）— 消息工具提示和易变系统提示词段导致前缀缓存完全失效。**已被标记为 `fix-shape-clear` + `queueable-fix`**，意味着修复方案已明确、可排队实施。
- **[Issue #97680 Beta 更新后官方外部插件留在 latest 而非指定 beta 标签](https://github.com/openclaw/openclaw Issue #97680)**（🦞 diamond lobster）— 标记为 `fix-shape-clear` + `queueable-fix`，修复方向明确。

### 今日修复的 Bug

- **memory_search 空结果触发全量索引重建**（PR #121044）— 修复零命中查询导致全索引重建的性能问题。
- **memory_search 超时误报 embedding 提供商故障**（PR #121073）— 修复超时被错误归因为提供商故障的问题。


## 功能请求与路线图信号

以下功能请求讨论度较高，结合已有 PR 评估落地可能性：

| 请求 | Issue | 优先级 | 状态信号 | 落地可能性评估 |
|---|---|---|---|---|
| **子代理上下文隔离**（默认仅返回状态 + 子会话链接） | [#96975](https://github.com/openclaw/openclaw Issue #96975) | P2 | 多个相关 Issue（#111857）指向同一根因 | 高。社区呼声强 + 与压缩/上下文管理主线修复方向一致 |
| **/models test-fallback 命令**（主动验证回退链） | [#6599](https://github.com/openclaw/openclaw Issue #6599) | P3 | `needs-product-decision` | 低。无 PR，产品决策未做 |
| **多索引 embedding 记忆**（模型感知故障转移，避免混合向量空间） | [#63990](https://github.com/openclaw/openclaw Issue #63990) | P3 | `needs-product-decision` | 低。架构级变更，短期难落地 |
| **YAML 配置格式支持** | [#45758](https://github.com/openclaw/openclaw Issue #45758) | P3 | `needs-product-decision`，👍 2 | 低。运维便利性需求，但优先级不高 |
| **多 Teams 机器人单网关支持** | [#71058](https://github.com/openclaw/openclaw Issue #71058) | P2 | `needs-product-decision` | 中。企业用户可见需求，但受限于配置架构 |
| **macOS Talk Mode 接入 OpenAI Realtime（语音到语音）** | [#71195](https://github.com/openclaw/openclaw Issue #71195) | P2 | `needs-product-decision` | 中。相比 voice-call 插件存在体验差距 |
| **消息列表分页替代硬编码 25 条限制** | [#71452](https://github.com/openclaw/openclaw Issue #71452) | P2 | `source-repro` | 中。改动范围明确 |
| **智能会话自动命名**（惰性生成 + 主题感知重命名） | [#99583](https://github.com/openclaw/openclaw Issue #99583) | P3 | 👍 2 | 低。体验优化，非刚需 |

**值得关注的已提交 PR 信号（新功能方向）：**

- **[PR #125786 feat(skills): merge execution-dir skills after agent workspace skills](https://github.com/openclaw/openclaw PR #125786)**（今日新开，L 级）— 修复在代理工作区外执行时，访问仓库的 `skills/` 目录不可见的问题，与原生 Codex 会话行为对齐。使 skill 加载更符合直觉。
- **[PR #125781 feat(llama-cpp): support external llama-server](https://github.com/openclaw/openclaw PR #125781)**（今日新开，XL 级）— 允许 OpenClaw 连接用户已运行的 `llama-server` 实例，避免重复管理和手工配置 OpenAI 兼容端点。关闭 #116765。
- **[PR #123356 improve(control-ui): stage slash command arguments in the composer](https://github.com/openclaw/openclaw PR #123356)**（XL 级）— 在 composer 中暂存斜杠命令参数，改善输入体验。


## 用户反馈摘要

**最集中的用户痛点（按出现频率）：**

1. **消息静默丢失（最严重）** — WhatsApp 断线窗口消息不投递（#50093）、Slack 线程回复生成但不投递（#96692）、Codex app-server 中消息工具返回 `terminate:true` 导致后续工作不执行（#109490）。用户可感知的"回复了但没送达"类问题横跨多个渠道，说明问题可能出在通用消息投递抽象层而非具体渠道实现。
2. **会话膨胀与上下文失控** — 子代理完成注入过多内容（#96975）、CLI 预算反复压缩低上下文父会话（#111857）、claude-cli 后端无压缩导致会话超过 200% 上下文（#103231）。社区对上下文管理的理解正在加深，且用户已开始关注成本影响。
3. **配置与升级摩擦** — dev 通道更新失败（#123073）、beta 更新后插件标签不一致（#97680）、6.x 迁移导致频道存储数据丢失（#94939）。升级路径的可靠性影响用户对项目稳定性的信任。
4. **认证与提供商可靠性** — Codex OAuth 刷新超时（#89278）、402 计费错误持久禁用（#70903）、auth 阶段同步阻塞 10-15 秒（#75782）。
5. **记忆/检索质量问题** — FTS 回退虚假相似度分数（#115001）、SQLite 无界增长（#114612）、memory_search 全索引重建（PR #121044）。
6. **多代理/多模型交互正确性** — A2A `sessions_send` 重复消息（#39476）、DeepSeek V4 Flash 不完整回合（#88657）。

**值得注意的子话题**：Issue #95610 对 OpenAI 提示词前缀缓存的深入分析表明，社区用户对成本优化已有相当深的技术理解，且正在主动定位框架层面的缓存破坏因素。


## 待处理积压

以下高优先级 Issue/PR 长期未获得关键进展，建议维护者重点关注：

- **[Issue #69208 跨渠道重复 transcript/重放/上下文组装总括问题](https://github.com/openclaw/openclaw Issue #69208)**（P1，创建于 4 月 20 日，4 个月未推进）— 总括性问题的持续开放意味着其下多个子问题（MSTeams/webchat/Telegram）均未获修复。标记为 `needs-maintainer-review` + `needs-product-decision`，已阻塞在维护者评审环节。
- **[Issue #38327 gemini-3.1-pro-preview 回归崩溃](https://github.com/openclaw/openclaw Issue #38327)**（P1，创建于 3 月 6 日，5 个月未修复）— 阻塞在 `needs-live-repro`。
- **[Issue #70903 402 计费错误持久禁用提供商](https://github.com/openclaw/openclaw Issue #70903)**（P0，创建于 4 月 24 日，UX 发布阻断级别）— **P0 级问题 4 个月未关闭且已标记 stale**，当前处于"无新修复 PR、需产品决策"状态。被用户标记为 stale 可能意味着社区对修复失去信心。
- **[Issue #103231 claude-cli 原生压缩假设错误](https://github.com/openclaw/openclaw Issue #103231)**（P1，7 月 10 日创建）— 设计级缺陷，`ownsNativeCompaction` 假设不成立导致所有恢复路径静默失败，仅 1 个月已积累 8 条评论。**无修复方案**。
- **[Issue #123073 dev 通道更新失败（npm/pnpm 不匹配）](https://github.com/openclaw/openclaw Issue #123073)**（P1，8 月 13 日创建但已有 PR）— 影响开发者体验和 dev 通道可用性，等待 PR 合入。
- **PR #121044 / #121073（memory-core 修复）** — 均为 8 月 9 日提交的 S 级修复，已标记 "ready for maintainer look" 等待 9 天，对应的用户问题（搜索空结果性能、超时误报）仍在影响用户。
- **[PR #125471 fix(models): keep Claude CLI OAuth available in Control UI](https://github.com/openclaw/openclaw PR #125471)**（P1，今日新开）— 处于 `needs proof` 状态，涉及认证边界，需尽快验证。
- **[PR #125753 fix(config): redact plugin secrets and preserve safe mutations](https://github.com/openclaw/openclaw PR #125753)**（XL 级，P1，今日新开）— 涉及认证边界和配置安全性，影响面广，等待作者处理反馈。

---

## 横向生态对比

# 个人 AI 智能体开源生态横向对比分析报告

**报告日期：** 2026-08-18  
**数据窗口：** 2026-08-17 ~ 2026-08-18  
**覆盖范围：** OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw

---

## 1. 生态全景

当前个人 AI 助手开源生态正处于**功能扩张转向稳定性打磨**的关键阶段。核心矛盾高度一致：**消息投递可靠性与会话状态管理**已成为跨项目普遍的瓶颈——OpenClaw 的 P1 级消息重复/丢失问题持续数月未解、Hermes Agent 积累 400+ 超时/挂起相关 issue、CoPaw 遭遇多步骤任务静默中断、NanoBot 出现后台任务异常吞没。与此同时，**上下文管理与成本控制**成为新的技术竞赛焦点：至少 5 个项目（OpenClaw、IronClaw、NanoBot、ZeroClaw、Hermes Agent）围绕上下文压缩、提示词缓存、token 计量展开专项优化，反映生态正在从"能用"迈向"用得起、用得稳"。渠道扩展（Slack、WhatsApp、Matrix、飞书、Teams）与协议兼容（OpenAI Chat Completions、MCP、A2A）构成双轮驱动力，但多项目发布节奏明显放缓，大量 PR 因评审瓶颈积压。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 健康度评估 |
|------|------------|---------|---------|-----------|
| **OpenClaw** | 500（470 活跃/30 关闭） | 500（341 待合并/159 合并） | 无 | ⚠️ **高提交、低合并、无发版**；P0 问题（#70903）4 个月未关闭且已 stale，大量 P1 无 fix PR，修复管线瓶颈明显 |
| **NanoBot** | 9（5 新/4 关闭） | 25（16 待/9 合并） | 无 | ✅ 交付效率高，问题-修复闭环迅速（当日 issue 当日 PR）；但 shell 子进程无资源限制的安全隐患开放 43 天未响应 |
| **Hermes Agent** | 50 | 50（46 待/4 合） | ✅ v0.20.4（聚合 74 PR） | ✅ 快速迭代，定期发版聚合修复；P1 级 Windows 更新失败与数据库损坏问题突出；Sora-bluesky 的 6 个 PR 滞留近 1 月未评审 |
| **PicoClaw** | 3（1 新/2 关闭） | 2（1 待/1 合） | 无（最新 0.3.1） | ✅ 平稳迭代；工具失败循环已修复，Slack 媒体上传回归修复待合并 |
| **NanoClaw** | 5（2 新/2 关闭） | 28（12 待/16 合） | 无 | ✅ 高活跃度，channels 分支大幅推进 Slack 全链路；外部贡献者反馈的 codex 类型错误 10 天无响应 |
| **IronClaw** | 25 | 46 | ✅ 1.3.0-rc.1 | ⚠️ 开发活跃但 **rc 版本从 1.2.x 升级即崩溃**（#7720），且 libSQL 写入饿死（#7714）为发布阻断风险；社区贡献以核心成员为主 |
| **LobsterAI** | 9（全部 stale） | 24（20 合） | 无（发布分支已合并） | ⚠️ 集中清理历史积压（含多笔 4 个月前的 PR），但 **9 条活跃 issue 全部 stale 超 130 天**含 3 条高严重度稳定性问题 |
| **Moltis** | 1（关闭） | 4（2 待/2 合） | 无 | ✅ 中等活跃；Podman 沙箱（2 个月 issue）修复落地，文件管理与连接器生态推进有序 |
| **CoPaw** | 44（28 新/16 关闭） | 50（32 待/18 合） | 无 | ✅ 高活跃、反馈循环顺畅；但 MCP streamable_http 硬编码问题 24 天未解，2 个 PR 停滞超 12 天 |
| **ZeroClaw** | 42 活跃 | 46 待合并 | 无 | ⚠️ 治理流程良好（14 项 RFC 全 accepted）但大量 P1 级 PR 因 `needs-author-action` 停滞 20+ 天，合并效率受限 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | — 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

### 核心优势

- **体量断崖式领先**：单日 500 条 Issue 更新 + 500 条 PR 更新，远超第二名 Hermes Agent（50/50）与 CoPaw（44/50），社区讨论量与贡献者参与度均为生态第一梯队。
- **生态参照标杆**：NanoClaw、PicoClaw、IronClaw 等项目的命名与架构均明显受其启发；LobsterAI 以 OpenClaw 为引擎之一；ZeroClaw 的 Chat Completions 协议提案是对标集成场景的扩展。实际上 OpenClaw 已成为该品类的"参考实现"。
- **功能覆盖最广**：渠道覆盖 MS Teams、WhatsApp、Slack、Telegram、飞书、webchat 等多达 6+ 渠道，多代理协议 A2A 已在生产环境使用。

### 技术路线差异

- **运行时架构**：OpenClaw 采用"网关 + 多渠道适配 + 会话状态管理层"的模块化架构，是其消息路由与上下文管理的核心；NanoBot 走轻量级本地优先路线；Hermes Agent 强调桌面端深度集成；Moltis 独特地以容器沙箱（Docker/Podman）为运行边界。
- **上下文管理深度**：OpenClaw 的压缩生命周期、原生压缩（native compaction）、回放与上下文组装均被社区深度讨论，是该领域技术讨论最密集的项目。
- **生态策略**：OpenClaw 更像是"平台"——其插件与技能体系支撑了 LobsterAI、NanoClaw 等外围项目；而 NanoBot、Hermes Agent 更偏向"独立应用"形态。

### 社区规模对比

| 指标 | OpenClaw | Hermes Agent | CoPaw | ZeroClaw |
|------|----------|---------------|-------|----------|
| 日 Issues 更新 | 500 | 50 | 44 | 42（活跃） |
| 日 PR 更新 | 500 | 50 | 50 | 46（待合并） |
| 高活跃 Issue 评论数 | 14 | 13 | 10 | 23 |
| 长期积压 P0/P1 数 | 8+ | 2 | 2 | 3+ |

### 关键短板

- **消化能力严重不足**：150+ PR 待合并、多个 P1 问题（WhatsApp 消息丢失 #50093、gemini 回归 #38327）5 个月未修复、P0 计费锁死问题被用户标 stale。社区产出远超维护者消化能力的结构性矛盾是当前最大风险——贡献者可能因等待时间过长而流失。相比之下 Hermes Agent 约 5 天内发布 v0.20.4 聚合了 74 个 PR，在交付效率上远超 OpenClaw。

---

## 4. 共同关注的技术方向

### 4.1 消息/会话数据可靠性（最广泛共识）

| 项目 | 具体表现 |
|------|---------|
| **OpenClaw** | WhatsApp 断线消息永久丢失（#50093）、Slack 线程回复生成后不投递（#96692）、跨渠道重复/丢失总括问题（#69208） |
| **Hermes Agent** | Gateway 重启循环致 state.db 损坏（#89034）、Slack 授权不一致（#85614） |
| **CoPaw** | Console 停止请求误取消 Feishu 会话（#7011）、多步骤任务静默中断（#6921） |
| **NanoClaw** | pending 消息轮询积压无界（#3289）、chat 会话任务日志丢失（#3301） |
| **NanoBot** | AgentLoop 后台任务异常被吞（#5429）、Telegram polling 静默停顿（#5171 已修复） |
| **ZeroClaw** | WeChat 入站消息可能丢失（#9313）、cron 任务锁永久不释放（#9320） |

**共性信号**：消息可靠性问题已非单项目缺陷，而是**分布式 agent 网关架构的系统性设计缺口**——断线回补、幂等投递、任务异常可见性是全生态共同的技术债。

### 4.2 上下文管理与压缩生命周期

| 项目 | 具体表现 |
|------|---------|
| **OpenClaw** | claude-cli 原生压缩假设错误致会话膨胀 200%（#103231）、子代理完成注入父上下文（#96975）、压缩 JSONL 反复重开（#111857）、动态注入破坏前缀缓存（#95610） |
| **IronClaw** | Anthropic 提示缓存跨工具提升保持（PR #7274） |
| **NanoBot** | tiktoken 估算与 API 实际计数偏差 30-50% 致 consolidation 永不触发（#5402 → PR #5403） |
| **ZeroClaw** | 交互式会话上下文被硬限 32K 忽略配置（#10068）、上下文压缩比例配置（#9535） |
| **Hermes Agent** | TUI 压缩区块重复渲染（#88906）、messages.token_count 5.4 万条全 NULL（#47201） |

**共性信号**：社区用户开始关注 **token 成本精确计量**与**压缩策略正确性**，从"能完成任务"升级为"以最低成本完成任务"。这将成为下一轮竞争差异化的关键维度。

### 4.3 多代理交互正确性（A2A）

| 项目 | 具体表现 |
|------|---------|
| **OpenClaw** | A2A sessions_send 反向调用致重复消息（#39476） |
| **ZeroClaw** | A2A 出站客户端 RFC #9106 落地（#9324）、Chat Completions 协议层（#8603） |
| **CoPaw** | 智能体协作需同一会话窗口（#6925） |
| **LobsterAI** | 多 Agent 任务活动过滤器已实现（#2418） |

**共性信号**：多智能体协作从"能用"走向"体验正确"——消息去重、会话身份隔离、跨代理上下文传递是三大核心议题。

### 4.4 渠道扩展与协议兼容

| 渠道/协议 | 涉及项目 |
|-----------|---------|
| Slack | OpenClaw（修复投递）、NanoClaw（全链路）、PicoClaw（媒体上传）、Hermes Agent（授权）、IronClaw（连接引导）、NanoBot（工作流） |
| WhatsApp | OpenClaw（断线丢失）、ZeroClaw（allowed_groups 默认安全） |
| Matrix | CoPaw（重试登录）、OpenClaw |
| IRC | PicoClaw（长消息支持） |
| Microsoft Teams | OpenClaw、ZeroClaw（新渠道开发） |
| OpenAI Chat Completions 协议 | ZeroClaw（RFC #8603）、LobsterAI（hermes-agent 引擎） |
| MCP | OpenClaw（loopback 重连）、CoPaw（SSE 硬编码）、IronClaw（认证/传输选项） |

### 4.5 本地模型与多引擎支持

- **LobsterAI**：请求将 hermes-agent 添加为可选引擎（#1614）；引入 opt-in 实验性 DeepSeek（#2510）
- **OpenClaw**：支持外部 llama-server 连接（PR #125781）
- **CoPaw**：用户希望按频道配置不同模型（#7085）、本地 QwenPaw Pro 控制平面
- **NanoBot**：DashScope 原生图像生成客户端（PR #5419）

---

## 5. 差异化定位分析

### 5.1 功能侧重

| 项目 | 功能侧重 | 核心差异化 |
|------|---------|-----------|
| **OpenClaw** | 全渠道消息网关 + 多智能体协作 + 会话管理 | "消息路由器"之王，渠道覆盖最广 |
| **Hermes Agent** | 桌面端深度集成 + 多 profile | 桌面 UI 与本地 agent 体验最完整 |
| **IronClaw** | 自动化运行 + 资源治理 + DB 写入优化 | 面向任务自动化场景的"运行治理"能力 |
| **CoPaw** | 多渠道 + Console UI + 插件体系 | 中文互联网渠道（钉钉/飞书/微信）支持最完善 |
| **NanoBot** | 轻量级本地优先 + webui/TUI | 极速启动、低资源占用，适合个人快速上手 |
| **LobsterAI** | 多引擎桌面客户端 + 会话导出 + skill 管理 | OpenClaw 的桌面 GUI 壳，聚合多引擎 |
| **ZeroClaw** | 协议互通 + 安全治理 + 渠道矩阵 | Chat Completions 兼容 + 高危命令逐次确认 |
| **Moltis** | 容器隔离 + 连接器 + 文件管理 | 安全沙箱为最大卖点 |
| **PicoClaw** | 轻量级多渠道 + 稳定性修复 | 定位"够用就好"，聚焦修复而非扩张 |
| **NanoClaw** | OpenClaw 的轻量派生 + 多频道架构 | 快速跟进的社区分支 |

### 5.2 目标用户

- **个人开发者/极客**：NanoBot（快速上手）、PicoClaw（轻量）、TinyClaw/ZeptoClaw/NullClaw（探索）
- **企业/团队部署**：IronClaw（自动化+治理）、ZeroClaw（安全+合规）、Moltis（容器隔离+内网）、CoPaw（中文企业 IM 集成）
- **重度 AI 用户**：OpenClaw（功能最全）、Hermes Agent（桌面体验）
- **周边工具消费者**：LobsterAI（用 OpenClaw 引擎的 GUI）

### 5.3 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | NanoBot | Moltis | ZeroClaw |
|------|----------|--------------|---------|--------|----------|
| **运行时** | 网关 + 渠道适配 | 本地 gateway + 桌面端 | 轻量本地进程 | 容器沙箱（Docker/Podman） | 网关 + 协议层 |
| **存储** | 会话状态文件 + SQLite 迁移 | state.db (SQLite + FTS5) | 待确认 | 共享快照存储 | 待确认 |
| **认证** | provider OAuth + 持久化状态 | 多 profile 隔离 | bootstrap 凭据刷新 | 连接器认证 | 策略引擎 |
| **扩展方式** | 插件 + skills 体系 | 适配器 + skills | providers + skills | 连接器 | RFC 驱动的功能开发 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高活跃 + 规模效应（快速迭代阶段）

- **OpenClaw**：日更新 1000 条，生态系统核心。社区规模是其护城河，但正面临"增长与消化能力失衡"。
- **CoPaw**：日更新 94 条（44 issue + 50 PR），达到 OpenClaw 的 ~10%，且反馈循环畅通（当日 issue 当日 PR）。
- **Hermes Agent**：日更新 100 条，定期发版（v0.20.4 聚合 74 PR），社区贡献者持续产出，项目健康度出色。

### 🟡 第二梯队：中等活跃 + 定向深耕（质量巩固/功能推进阶段）

- **IronClaw**：日更新 71 条，集中攻坚资源治理与通知系统，但 rc 版本阻断问题需优先解决。
- **ZeroClaw**：日更新 100 条，治理驱动显著（RFC 全 accepted），但 PR 合并效率低是核心瓶颈。
- **NanoClaw**：日更新 33 条，高密度推进 channels 分支建设，核心团队驱动型。
- **LobsterAI**：日更新 33 条，集中清理历史积压，但 stale 化问题严重。

### 🟢 第三梯队：稳定维护 + 垂直突破（单一修复/平台维护阶段）

- **NanoBot**：日更新 34 条，问题响应极快，但与第一梯队规模差距明显。
- **Moltis**：日更新 5 条，小而美路线，沙箱安全与连接器生态是清晰亮点。
- **PicoClaw**：日更新 5 条，聚焦修复（工具失败循环、Slack 回归），无明显扩张计划。
- **NullClaw / TinyClaw / ZeptoClaw**：无活动，项目休眠或低频维护。

---

## 7. 值得关注的趋势信号

### 趋势一：成本治理正在从"可选项"变为"必需品"

IronClaw 投入"DB 写入压力降低 60%"专项、OpenClaw 社区深入分析前缀缓存破坏、NanoBot 修复 token 估算偏差导致合并永不触发、ZeroClaw 新增压缩比例配置——**"token 成本可观测、可预测、可管控"将成为 AI 智能体平台的基础能力**。开发者在设计上下文管理时，应优先考虑以 API 实际计费值而非本地估算为准。

### 趋势二：静默失败是用户信任的最大杀手

从 OpenClaw 的"回复了但没送达"、PicoClaw 的"等了几分钟毫无响应"，到 CoPaw 的"卡死 10 分钟无输出"、NanoBot 的"后台任务异常被吞掉"——**大多数流失用户的场景不是"功能没有"，而是"功能失败且无反馈"**。这指向一个明确的工程要求：Agent 运行时必须具备**完整的任务生命周期可观测性**（提交 → 执行 → 成功/失败/超时），且所有失败必须显式可查。

### 趋势三：标准化协议层是生态分化的分水岭

ZeroClaw 主动推进 OpenAI Chat Completions 兼容（对接 Open WebUI/LobeChat）、CoPaw 在 MCP Streamable HTTP 支持上的困境、Hermes Agent 的 MCP 信任门禁字段 bug（snake_case vs camelCase）——**协议实现的严谨度将直接决定智能体平台能否融入现有 AI 工具生态**。对开发者而言，优先采用成熟协议（MCP、A2A）并适配主流客户端，比自建私有协议更利于生态卡位。

### 趋势四：渠道长尾仍是增长引擎

Slack 是今日所有项目最活跃的渠道战场（6 个项目不同程度涉及），WhatsApp、Matrix、IRC、钉钉/飞书各有对应项目布局。**在渠道覆盖趋于同质化的背景下，"渠道特定 bug 的修复速度"将成为差异化竞争力**——PicoClaw 快速修复 Slack 回归、OpenClaw 数月在 WhatsApp 消息丢失无进展，对比鲜明。开发者应评估各项目渠道修复的历史响应速度作为选型参考。

### 趋势五：Agent 运行时的"自主性与失控"边界正在被重新界定

CoPaw 用户对多步骤任务静默停止产生"明显不信任"、ZeroClaw 用户强烈要求高危命令逐次确认（Claude Code 风格 allow/ask/deny）、OpenClaw 的 `terminate:true` 问题、NanoBot 用户预算失控焦虑（spend firewall）——**"Agent 可以做什么、何时需要人类确认、如何主动上报状态"正在成为独立于模型能力的工程层问题**。这是当前生态中尚未出现领导者、但需求信号最强的方向，存在明确的创新空间。

---

*本报告基于 2026-08-17 至 2026-08-18 各项目 GitHub 仓库公开数据整理，所有数据均参考各项目日报原文。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-18

## 1. 今日速览

今日 NanoBot 项目活跃度较高：过去 24 小时共有 9 条 Issue 更新（5 条新开/活跃，4 条已关闭）和 25 条 PR 更新（16 条待合并，9 条已合并/关闭）。核心关注点集中在 **AgentLoop 后台任务异常处理**、**Windows 平台 gateway 进程兼容性** 以及 **TUI 体验优化** 三个方向。社区贡献者（chengyongru、yu-xin-c）今日提交了多个针对已报告 Bug 的修复 PR，形成"问题-修复"的快速闭环。无新版本发布。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 主要聚焦于 TUI 体验与 Windows 兼容性修复：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#5432](https://github.com/HKUDS/nanobot/pull/5432) | fix(tui): refresh expired API credentials | CLOSED | TUI 在 401 后通过 bootstrap 端点刷新凭据，并发刷新去重，单次重试失败的 API 请求 |
| [#5427](https://github.com/HKUDS/nanobot/pull/5427) | fix(tui): keep composer visible and focused | CLOSED | 点击 TUI 其他区域后恢复输入焦点；区分 composer 视觉层级，优化全屏 diff 查看器焦点保持 |
| [#5424](https://github.com/HKUDS/nanobot/pull/5424) | perf(tui): reduce cold-start and exit latency | CLOSED | TUI 启动不再等待本地 gateway 编排完成，异步 bootstrap 凭据，降低冷启动延迟 |
| [#5418](https://github.com/HKUDS/nanobot/pull/5418) | fix(gateway): allow Windows launcher PID handoff | CLOSED | 允许 Windows 上 managed gateway 接收来自 virtualenv launcher 的 PID handoff，保持后台/按需生命周期 |

**整体评估**：TUI 的启动延迟、凭据刷新、交互焦点三个核心体验问题在今日获得集中修复，Windows 平台 gateway 的 PID handoff 问题也有关闭的 PR 落地。此外 [#5411](https://github.com/HKUDS/nanobot/pull/5411)（隔离 local agent runtime 重构）和 [#5341](https://github.com/HKUDS/nanobot/pull/5341)（Windows 天气 workflow 修复）均标有 `conflict` 标记，仍待处理。

---

## 4. 社区热点

今日最受关注的 Issue 集中在两个方向：

**AgentLoop 后台任务可靠性**（由 yu-xin-c 提交，#5429 和 #5428 相关联）：

- [#5429](https://github.com/HKUDS/nanobot/issues/5429) — `AgentLoop` 后台任务完成后未检索异常，`set.discard` 回调直接丢弃任务引用，异常被静默吞掉。
- [#5428](https://github.com/HKUDS/nanobot/issues/5428) — `_active_tasks` 字典在会话任务完成后保留空的任务组集合，存在内存泄漏。

两个问题均在同日获得对应的修复 PR（[#5431](https://github.com/HKUDS/nanobot/pull/5431)、[#5430](https://github.com/HKUDS/nanobot/pull/5430)），且均处于 OPEN 待合并状态，表明社区维护者对该问题响应非常迅速。

**Windows WebUI 启动失败**（#5417，已关闭）：

- [#5417](https://github.com/HKUDS/nanobot/issues/5417) — 在 Windows 上运行 `nanobot webui --dev` 时，managed gateway 将自身的前台进程误判为竞争 gateway 并拒绝，导致 WebUI 数秒后退出。

该问题已由 [#5415](https://github.com/HKUDS/nanobot/pull/5415)（OPEN）和 [#5418](https://github.com/HKUDS/nanobot/pull/5418)（CLOSED）覆盖修复。**诉求分析**：这两组热点分别反映了用户对 **AgentLoop 任务可靠性**（异常可见性 + 内存清理）和 **Windows 平台一等公民支持**的强烈需求。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

**高严重度：**

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#4797](https://github.com/HKUDS/nanobot/issues/4797) | No resource limits on shell subprocesses | OPEN（自 2026-07-06，持续 43 天，仅 1 条评论） | 无 — 待维护者重点关注 |
| [#5429](https://github.com/HKUDS/nanobot/issues/5429) | AgentLoop 不检索后台任务异常 | OPEN（今日新开） | [#5431](https://github.com/HKUDS/nanobot/pull/5431) 待合并 |
| [#5428](https://github.com/HKUDS/nanobot/issues/5428) | AgentLoop 保留空的活动任务组 | OPEN（今日新开） | [#5430](https://github.com/HKUDS/nanobot/pull/5430) 待合并 |
| [#5425](https://github.com/HKUDS/nanobot/issues/5425) | 不支持 legacy `socks://` 代理 URL | OPEN（今日新开） | [#5426](https://github.com/HKUDS/nanobot/pull/5426) 待合并 |

**中严重度：**

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#5409](https://github.com/HKUDS/nanobot/issues/5409) | Hybrid Spend Firewall 防止 LLM 费用失控 | CLOSED（需求型提案） | — |
| [#5171](https://github.com/HKUDS/nanobot/issues/5171) | Telegram polling 静默停顿不恢复 | CLOSED | 已解决 |

**最值得关注**：`#4797` 已开放超过 6 周未获响应，涉及 shell 子进程无资源限制（无 ulimit/cgroup/CPU/内存上限），LLM 可能触发 fork bomb 或 `yes > /dev/null &` 类命令耗尽系统资源，属于**安全级别**的隐患，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

**新功能 / 增强提议：**

| Issue/PR | 标题 | 类型 | 判断 |
|---|---|---|---|
| [#5358](https://github.com/HKUDS/nanobot/pull/5358) | feat(webui): lightweight cross-session messaging | PR（OPEN） | 增加跨会话消息（`@handle` 机制、`send_session_message`），有一定复杂度，仍待合并 |
| [#5419](https://github.com/HKUDS/nanobot/pull/5419) | feat(providers): native DashScope image generation client | PR（OPEN） | 新增阿里云 DashScope 图像生成支持（`qwen-image-*`、`wan2.7-image`、`z-image-turbo`），扩展 provider 生态，可能纳入下一版本 |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | feat(webui): turn observability and safe recovery | PR（OPEN） | 每轮（turn）细粒度的输入/输出/cache token 聚合展示，增强可观测性 |
| [#5421](https://github.com/HKUDS/nanobot/issues/5421) | 空闲 compaction 是否应保留并发 turn 的 provider 状态？ | Issue（设计问题） | 作者明确"先问再实现"，涉及 `Consolidator.compact_idle_session()` 的并发状态契约，需要维护者确认后再推进 |
| [#5422](https://github.com/HKUDS/nanobot/pull/5422) | fix(providers): retry before falling back | PR（OPEN） | 调整 fallback 路由策略：当前 provider 的 retry 耗尽后才切换 fallback，与现有行为可能不兼容，需评估 |

**路线图信号**：DashScope 原生图像生成客户端（#5419）是今日唯一的新 provider 新增，结合已有的 OpenAI-compatible provider 支持，表明项目的 provider 生态正在向国内云厂商扩展。TUI/WebUI 的可观测性和跨会话能力也是持续投入的方向。

---

## 7. 用户反馈摘要

从今日 Issues 评论中可提炼的用户声音：

- **LLM 成本控制焦虑**：`#5409` 作者（sophieamoure2026-ui）在提案中明确表达了"power users running infinite loops and bankrupting your LLM budget"的担忧，建议增加混合消费防火墙（spend firewall）。此用户同时关注 NanoBot 从开源向商业化转型过程中的成本护栏缺失问题。
- **Windows 用户体验受损**：`#5417`（已关闭）暴露了 Windows 上 WebUI 开发模式直接退出的问题，`#5341`（PR）则指出 Windows PowerShell 中 `curl` 可能被解析为 `Invoke-WebRequest` 别名导致天气 skill 首条命令失败——这些细节反映了 Windows 作为一等平台的支持仍需打磨。
- **代理环境兼容性需求**：`#5425` 指出自定义 OpenAI-compatible provider 在存在 `socks://` 代理配置时请求直接失败，说明部分用户处于需要代理访问 LLM 供应商的网络环境中。
- **对项目质量的认可**：`#5372`（ViBo 集成提案）和 `#5409` 的作者都对 NanoBot 表达正面评价（"impressive"、"Love the work"），说明项目在社区中建立了良好的技术口碑。

---

## 8. 待处理积压

**长期未响应的重要 Issue：**

| Issue | 标题 | 创建时间 | 等待时长 | 严重度 | 建议 |
|---|---|---|---|---|---|
| [#4797](https://github.com/HKUDS/nanobot/issues/4797) | No resource limits on shell subprocesses | 2026-07-06 | 43 天 | 高（安全） | 建议维护者尽快确认是否属于设计取舍，或给出实现计划。涉及 `ExecTool._spawn()` 的系统资源限制，是安全关键问题 |

**待合并的关键 PR：**

| PR | 标题 | 等待时长 | 备注 |
|---|---|---|---|
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | fix(agent): report background task failures | 今日提交 | 对应 #5429，与 #5430 为同一作者的同模块修复，建议合并时一起 review |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | fix(agent): release completed task groups | 今日提交 | 对应 #5428，涉及 `_active_tasks` 内存释放 |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | fix(memory): use API-reported prompt tokens to trigger consolidation（priority: p1） | 2 天 | 修复 #5402：本地 tiktoken 估算比 API 实际计数低 30-50%，导致 consolidation 永远不触发。**p1 优先级**，涉及记忆/上下文管理的正确性，建议优先处理 |
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) | fix(skills): make weather workflow Windows-safe | 7 天 | 标有 `conflict`，需要解决冲突后合并 |
| [#5411](https://github.com/HKUDS/nanobot/pull/5411) | refactor(cli): isolate local agent runtime | 1 天 | 标有 `conflict`，涉及 CLI 重构，建议规划好合并窗口 |

**风险提示**：`#5403` 的长期搁置会持续导致用户上下文超限却无法触发合并的问题，建议维护者在本周内安排处理。

---

*数据来源：HKUDS/nanobot GitHub 仓库，统计时间窗口为 2026-08-17 至 2026-08-18。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-18

## 1. 今日速览

Hermes Agent 项目今日保持高活跃度，24小时内共有50条 Issue 更新和50条 PR 更新，并发布了 v0.20.4 补丁版本（聚合了约74个已合并 PR）。社区讨论集中于 Windows 更新失败、统一超时架构修复、桌面端体验改进等主题。P1 级问题"Gateway 重启循环导致数据库损坏"和"Windows 更新总是失败"值得维护者优先关注。整体来看，项目处于快速迭代阶段，社区贡献者（尤其是 Sora-bluesky 等）持续提交高价值修复，项目健康度良好。

---

## 2. 版本发布

### v2026.8.18 — Hermes Agent v0.20.4（2026年8月18日）

**性质：** Patch release，聚合自 v0.20.3 以来约 **74 个 PR** 至稳定标签，供下游消费者（Docker 镜像、托管部署、新安装）使用。

**影响：** 无重大破坏性变更声明，属于稳定性聚合发布。建议下游用户及时跟进此版本以纳入近两周的修复。

---

## 3. 项目进展

今日合并/关闭的 PR 较少（4条），但多为基础性修复：

| PR | 内容 | 状态 |
|---|---|---|
| [#89103](https://github.com/NousResearch/hermes-agent/pull/89103) | **MCP 信任门禁检查 snake_case 字段**：修复 `read_only_hint` 在 Python SDK 中为 snake_case 而信任门禁只检查 camelCase 导致所有工具被判为不可只读的问题（fixes #88858） | 已关闭 |
| [#88908](https://github.com/NousResearch/hermes-agent/pull/88908) | **测试稳定性**：在断言前先排空 SSE 流，修复中毒行测试的竞态条件（fixes #88907） | 待合并 |
| [#88907](https://github.com/NousResearch/hermes-agent/issues/88907) | 相应测试 Issue 已关闭 | 已关闭 |

合并的 PR 数量有限，但 v0.20.4 的发布本身整合了过去约74个 PR，标志着项目在持续稳定推进。待合并队列中还有 46 个 PR，主要来自 Sora-bluesky（Home Assistant 适配器防卡死、Windows 文件工具修复、Kanban worker 协议修复等），这些修复若合并将显著改善平台兼容性和稳定性。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#85125](https://github.com/NousResearch/hermes-agent/issues/85125) | 13 | **统一 deadline 层架构修复**：消除超时/挂起bug类别，被400+ issue 匹配 |
| 2 | [#86093](https://github.com/NousResearch/hermes-agent/issues/86093) | 10 | **Windows 更新总失败**：hermes.exe 无法重命名，隔离机制失效 |
| 3 | [#76312](https://github.com/NousResearch/hermes-agent/issues/76312) | 7 | **Playwright Chromium 安装挂起**（Node 26, CachyOS） |
| 4 | [#16636](https://github.com/NousResearch/hermes-agent/issues/16636) | 6 | **TUI 可展开工具调用消息**：当前只能看到摘要行，完整上下文被隐藏 |
| 5 | [#19451](https://github.com/NousResearch/hermes-agent/issues/19451) | 4 | **全局 skills 应跨 profile 生效**：术语/行为不匹配造成认知负担 |
| 6 | [#85614](https://github.com/NousResearch/hermes-agent/issues/85614) | 4 | **Slack 机器人授权不一致**：早期检查与最终授权使用不同身份 |

**热点分析：** 评论最多的 #85125（统一 deadline 层）反映了社区对超时/挂起问题积怨已久——400+ 个相关 issue 被归结为7种机制，用户期待结构性修复而非简单补丁。Windows 更新失败（#86093）和 Slack 授权不一致（#85614）均为高影响日常使用问题，获得用户共鸣（👍 较多）。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1（紧急）

1. **[#89034](https://github.com/NousResearch/hermes-agent/issues/89034) Gateway 重启循环 → state.db FTS5 损坏** — Gateway 因陈旧 dashboard 前端重启循环，s6 `finish` 无退避机制，导致数据库"database disk image is malformed"。**⚠️ 尚无 fix PR。** 风险面：session-state, message-delivery。
2. **[#86093](https://github.com/NousResearch/hermes-agent/issues/86093) Windows 更新总是失败** — 活动 hermes.exe 无法重命名，隔离机制假设 Windows 允许重命名，重启后 quarantine 从不释放锁，污染 `PendingFileRenameOperations`。**⚠️ 暂无 fix PR**，标记 P1、风险平台 Windows。

### P2（重要）

3. **[#88617](https://github.com/NousResearch/hermes-agent/issues/88617) dashboard uvicorn ws keepalive 杀死本地 TUI 连接** — 20/20 keepalive 在客户端停顿>20秒时断开健康连接。上游已有修复但尚未采用。
4. **[#88906](https://github.com/NousResearch/hermes-agent/issues/88906) TUI 压缩区块视觉上渲染两次** — SQLite 中仅有一份，但界面重复显示（需复现）。
5. **[#79005](https://github.com/NousResearch/hermes-agent/issues/79005) Desktop profile 切换路由到错误后端** — renderer socket 身份在 profile 交换时混乱，跨 profile 污染 state.db（与已关闭的 #41517 同族不同机制）。
6. **[#88615](https://github.com/NousResearch/hermes-agent/issues/88615) CommandCode provider 显示 0 个模型** — `fetch_models()` 的 `base_url` kwarg TypeError 被静默吞噬。

### P3（一般）

7. **[#47201](https://github.com/NousResearch/hermes-agent/issues/47201) messages.token_count 从未填充** — 54,061 条消息全部为 NULL。
8. **[#86028](https://github.com/NousResearch/hermes-agent/issues/86028) Gateway 启动重复 Slack token 告警**。
9. **[#89078](https://github.com/NousResearch/hermes-agent/issues/89078) 插件 secrets 源在注册前被警告为未知**。

**已有 fix PR 的：** #88778（压缩任务消息资格检查，**PR #89110** 待合并）、#88667（callable api_key 守卫，**PR #89106** 待合并）、#88997（max_output_tokens 保留，**PR #89118** 待合并）。

---

## 6. 功能请求与路线图信号

1. **[#85125](https://github.com/NousResearch/hermes-agent/issues/85125) 统一 deadline 层（4 阶段）** — 这是最值得关注的功能/架构请求。如社区标注 `needs-decision`，若采纳将根本性解决 400+ 超时/挂起 issue。
2. **[#16636](https://github.com/NousResearch/hermes-agent/issues/16636) TUI 可展开工具调用消息** — 用户要求查看完整工具调用上下文，目前只能 hover。该请求 4 月份已提出，评论达 6 条。
3. **[#19451](https://github.com/NousResearch/hermes-agent/issues/19451) 全局 skills 真正跨 profile** — 当前"global skills"实际并不可跨 profile 使用，术语误导。
4. **[#38969](https://github.com/NousResearch/hermes-agent/issues/38969) 桌面端文本缩放/宽度可配置** — 👍 9 个，说明社区呼声较高。
5. **[#89108](https://github.com/NousResearch/hermes-agent/issues/89108) Bot Mode 支持多群组** — 每个群组作为 bot profile 中的独立 session。
6. **[#89079](https://github.com/NousResearch/hermes-agent/issues/89079) 桌面 composer 参考 chips 可编辑** — 粘贴 URL 后无法纠正。

**可能被纳入下一版本的信号：** 若 P2 的 PR #89106、#89110、#89118 合并顺利，将在下一个 patch 版本中出现在 release notes。功能请求方面，#85125 的 `needs-decision` 标签暗示维护者正在讨论架构方向。

---

## 7. 用户反馈摘要

- **Windows 用户痛点突出**（#86093）：`hermes update` 在 Windows 上"总是失败"，隔离机制与 Windows 文件锁定语义不符，社区用户反映强烈（👍2），为 P1 级。
- **社区对超时/挂起问题有集体焦虑**（#85125）：400+ 相关 issue 被归结为7种机制，用户期待结构性修复而非逐案打补丁。
- **TUI/Desktop 可用性诉求上升**：多条 Issue（#16636、#38969、#89079、#89108）表明用户对界面细节（可展开上下文、文本宽度、chips 编辑、多群组）有明确需求，反映产品已进入打磨期。
- **新用户安装体验问题**（#76312）：CachyOS + Node 26 环境下 Playwright Chromium 安装卡在"extracting archive"，4个月前已报告，仍在等待修复，可能影响新用户留存。
- **Slack 集成的两个 bug**（#85614、#86028）均与 bot 授权/告警噪音相关，企业用户在 Slack 上的 bot-to-bot 协作场景可能受阻。

---

## 8. 待处理积压

### 长期未响应的 Issue

| Issue | 创建时间 | 问题 | 备注 |
|---|---|---|---|
| [#76312](https://github.com/NousResearch/hermes-agent/issues/76312) | 2026-08-01 | Playwright Chromium 安装挂起 | 已 17 天无 fix，标记 P2 |
| [#16636](https://github.com/NousResearch/hermes-agent/issues/16636) | 2026-04-27 | TUI 工具调用可展开 | 已 3.5 个月+，评论 6 条 |
| [#45624](https://github.com/NousResearch/hermes-agent/issues/45624) | 2026-06-13 | Profile 显示名称与内部 ID 分离 | 已关闭（可能被拒绝或延后） |
| [#19451](https://github.com/NousResearch/hermes-agent/issues/19451) | 2026-05-04 | 全局 skills 跨 profile | `needs-decision` 3 个月未决 |

### 长期待合并的 PR

| PR | 创建时间 | 主题 | 风险标记 |
|---|---|---|---|
| [#67476](https://github.com/NousResearch/hermes-agent/pull/67476) | 2026-07-19 | CLI 一次性模式尊重 `-w/--worktree` | 兼容性风险 |
| [#68540](https://github.com/NousResearch/hermes-agent/pull/68540) | 2026-07-21 | Home Assistant 适配器防静默失聪 | message-delivery 风险 |
| [#68596](https://github.com/NousResearch/hermes-agent/pull/68596) | 2026-07-21 | 桌面端 Tahoe 上禁用次窗口 vibrancy | 兼容性风险 |
| [#68608](https://github.com/NousResearch/hermes-agent/pull/68608) | 2026-07-21 | Kanban worker 协议按 dispatch 上下文触发 | 兼容性/行为变更 |
| [#68907](https://github.com/NousResearch/hermes-agent/pull/68907) | 2026-07-21 | 备份快速快照失败需显式告警而非静默 | 平台 Windows 兼容性 |
| [#69403](https://github.com/NousResearch/hermes-agent/pull/69403) | 2026-07-22 | Windows 上文件工具设备路径守卫 | 平台 Windows 兼容性 |

**维护者提醒：** 上述 6 个 PR 均来自 Sora-bluesky，已等待近 1 个月未合并，且均带有 `sweeper:risk-*` 标记需要风险评估。若长时间未处理，建议维护者给出明确反馈（合并/关闭/请求修改），避免社区贡献者流失。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：** 2026-08-18  
**数据窗口：** 2026-08-17 ~ 2026-08-18  
**仓库：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

过去 24 小时内 PicoClaw 项目活跃度中等偏上：共有 3 条 Issue 更新（1 条开放、2 条关闭）和 2 条 PR 更新（1 条待合并、1 条已关闭）。值得一提的积极信号是，与工具重复失败导致会话卡死相关的问题（Issue #3311）和对应的修复 PR（#3312）均已关闭，表明该影响 Telegram 生产环境的稳定性问题已获得解决。此外，新提交的 Slack 媒体上传修复 PR（#3340）精准指向一个明确的 API 兼容性缺陷。今日无新版本发布，项目处于持续修 bug 的平稳迭代期，未见异常活跃或停滞迹象。

---

## 2. 版本发布

今日无新版本发布（最新 Release 仍为 0.3.1）。

---

## 3. 项目进展

今日关闭/合并了一笔重要修复 PR，另有 1 笔新 PR 待合并，推进情况如下：

- **PR #3312 — fix(agent): stop turn early on repeated identical tool failure**（已关闭）  
  [链接](https://github.com/sipeed/picoclaw/pull/3312)  
  修复了代理循环在工具每次调用返回**相同错误**时（如 `git` 无凭据、命令被 shell 安全守卫拦截）会静默空转直至 `max_tool_iterations` 的问题。此前用户可能在 Telegram 上等待数分钟而得不到任何答复——该修复让循环在检测到重复失败时提前终止轮次，直接消除了这一"卡死"体验。此 PR 关闭同时对应的 Issue #3311 也已关闭，说明该修复已合入主分支。

- **PR #3340 — fix(slack): set FileSize on media upload params**（待合并）  
  [链接](https://github.com/sipeed/picoclaw/pull/3340)  
  修复了 Slack 媒体上传参数中 `FileSize` 字段为零值的问题。`slack-go v0.23.1` 的 `files.upload.v2` 流程要求预知文件长度，零值会导致任何网络调用发生前就被拒绝。修复补全了该字段以恢复 Slack 媒体上传功能。

综合来看，今日项目实质推进了 **2 个修复方向**：代理工具失败循环的稳定性修复已合入，Slack 集成修复待合并后即可生效。

---

## 4. 社区热点

- **Issue #3287 — [Feature] Better support long messages in IRC**（开放，6 条评论）  
  [链接](https://github.com/sipeed/picoclaw/issues/3287)  
  为今日评论数最高的 Issue。用户希望 PicoClaw 能识别超过 512 字节的 IRCv3 长消息并将其视为一条完整内容（而非按换行切分）。背后诉求是：IRC 协议默认限制单条消息 512 字节，长回复被截断或拆散会严重损害实际使用体验，尤其是当 AI 生成的长文本通过 IRC 网关输出时。该需求虽创建于 7 月 22 日，但仍在持续讨论中，说明社区对多协议适配质量有较高期待。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 描述 | 状态 |
|--------|-----------|------|------|
| **高** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | 工具重复相同错误时静默空转至 `max_tool_iterations`，用户（Telegram 生产环境）得不到任何答复 | ✅ 已修复（PR #3312 已关闭） |
| **中** | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | 聊天界面输入框被选中时 CPU 占用过高（PicoClaw 0.3.1 / Go 1.26 / deepseek-v4-flash） | ✅ 已关闭（今日） |
| **中** | [#3340](https://github.com/sipeed/picoclaw/pull/3340) | Slack 上传媒体时 `FileSize` 缺失导致上传被拒（依赖库升级后的回归） | 🔶 已提交修复，待合并 |

> **关于 #3340 的补充**：该 PR 明确指向 `slack-go v0.23.1` 的行为变更，暗示可能是依赖升级引入的回归问题，建议尽快合并并纳入下一个 patch 版本。

---

## 6. 功能请求与路线图信号

- **Issue #3287 — IRC 长消息支持**（开放）  
  [链接](https://github.com/sipeed/picoclaw/issues/3287)  
  目前尚无关联 PR 提交。考虑到 IRC 适配在 AI 助手场景中有一定受众（如通过 IRC 桥接 Telegram/Discord），且已有 6 条评论的讨论基础，该需求有一定概率被纳入后续版本，但优先级可能低于稳定性修复。

- **没有其他新的功能请求出现**。今日从 Issues/PR 中未观察到明确的下一版本功能规划信号；项目重心仍在 bug 修复与协议兼容性完善上。

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼的用户声音：

- **（Telegram 生产环境）工具失败时"人间蒸发"是最大痛点**：Issue #3311 的用户在真实生产环境（Telegram 机器人）中遇到"问一个问题然后等了好几分钟毫无响应"的情况，根因是工具反复失败却不终止、也不向用户反馈。用户对"静默失败"的容忍度极低——即便最终有超时兜底，数分钟的等待在对话式交互中是不可接受的。该问题已随 PR #3312 修复，但**修复后的行为（提前终止时是否有错误提示给用户）值得关注**，建议在后续版本中确认用户侧能收到明确的失败原因。

- **IRC 长消息处理是真实使用障碍**：Issue #3287 的讨论表明，IRC 协议 512 字节限制直接导致 AI 长回复被截断，影响对话连贯性。这是协议层面的硬约束，需要实现 IRCv3 消息分割/标记（tag）等机制才能解决，属于中等复杂的工程任务。

---

## 8. 待处理积压

- **Issue #3287 — IRC 长消息支持**（创建于 2026-07-22，开放 27 天，6 条评论）  
  [链接](https://github.com/sipeed/picoclaw/issues/3287)  
  截至目前仍开放，无关联 PR。建议维护者评估是否纳入路线图：若短期无法实现，可在 Issue 中明确标注计划或给出暂用方案（如强制截断策略）。

- **PR #3340 — Slack 媒体上传 FileSize 修复**（创建于 2026-08-17，待合并）  
  [链接](https://github.com/sipeed/picoclaw/pull/3340)  
  自提交以来尚未获得合并或评审反馈。考虑到它修复的是 Slack 集成的功能性回归（依赖库升级导致），建议维护者优先安排 review，避免该修复在队列中积压过久。

---

*以上日报基于 2026-08-18 抓取的仓库数据生成，所有链接均指向 GitHub 原始 Issue/PR 页面。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-18

## 1. 今日速览

NanoClaw 项目昨日保持高活跃度：24 小时内产生 28 条 PR 更新（12 条待合并），16 条已合并/关闭，其中 Slack 频道通道层（wave A/B）系列 PR 已全部合入 `channels` 分支，标志着多通道架构的核心推进。5 条 Issue 更新中有 2 条已关闭，并新增 2 条由 glifocat 提交的 bug 报告（chat 会话内任务日志丢失、pending 消息轮询积压）。未发布新版本，社区活跃度集中在核心团队（core-team）的渠道层建设上，整体项目健康度良好，修复链条（issue → fix PR）跟踪紧密。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

今日合并/关闭的 16 条 PR 中，核心贡献集中在双主线：

**主线一：Slack 频道通道层（`channels` 分支）**

| PR | 内容 | 状态 |
|---|---|---|
| [#3305](https://github.com/nanocoai/nanoclaw/pull/3305) | wave A：共享 Slack Web API 客户端 + token 密钥约定 + canvas cluster，含 main 同步 | 已合并 |
| [#3309](https://github.com/nanocoai/nanoclaw/pull/3309) | wave B：默认值工厂、成员管理、引导程序、a2a 防护，全链路 per-thread 会话模式 | 已合并 |
| [#3310](https://github.com/nanocoai/nanoclaw/pull/3310) | 恢复 upstream-main 合并中丢失的 `slack-formatting` 容器技能（字节级一致） | 已合并 |
| [#3312](https://github.com/nanocoai/nanoclaw/pull/3312) | 跨会话上下文：新会话回填从 DM-only 扩展至群组会话 | 已合并 |
| [#3313](https://github.com/nanocoai/nanoclaw/pull/3313) | 频道欢迎附加语：主机侧匹配，缺失时零开销 | 已合并 |
| [#3314](https://github.com/nanocoai/nanoclaw/pull/3314) | setup 向导新增可选 Slack 应用自动部署（opt-in 标志 + `SLACK_MANAGER_TOKEN`） | 已合并 |
| [#3315](https://github.com/nanocoai/nanoclaw/pull/3315) | Slack 适配器：会话解析、原生 `SLACK_INSTANCES`、完整安装技能载荷 | 已合并 |
| [#3316](https://github.com/nanocoai/nanoclaw/pull/3316) | 修复 Telegram 技能复制列表中的过时文件引用 | 已合并 |

**主线二：核心稳定性修复**

| PR | 内容 | 状态 |
|---|---|---|
| [#3195](https://github.com/nanocoai/nanoclaw/pull/3195) | 升级流程事务化（对应 Issue #3194 的 `/update-nanoclaw` 假成功问题） | 已合并 |
| [#3303](https://github.com/nanocoai/nanoclaw/pull/3303) | 修复 chat 会话中任务行的运行日志丢失问题 | 待合并 |
| [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) | 限制 pending 消息轮询的积压上限 | 待合并 |

此外，[#3306](https://github.com/nanocoai/nanoclaw/pull/3306) 和 [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) 引入了会话运行时驱动层（driver seam，Docker 为内置实现）并开始将 host 会话生命周期路由到该层，属纯增量改动，为后续多种运行时（如 Podman/远程容器）铺路。`channels` 分支已在 Slack 适配器层达到"全链路 per-thread"的完整状态。

## 4. 社区热点

今日社区讨论热度分散，活跃度主要来自核心团队而非外部贡献者。值得关注的动态：

- **Issue #3203**（[链接](https://github.com/nanocoai/nanoclaw/issues/3203)）：`codex` provider 发出未声明的 `file` ProviderEvent，导致 `/add-codex` 在 main 分支上类型检查失败、图片生成被丢弃。该 Issue 已存在 10 天但仅 1 条评论，尚未见对应修复 PR，外部用户（mshirel 报告）触发的类型错误值得关注。
- **Issue #2868**（[链接](https://github.com/nanocoai/nanoclaw/issues/2868)）：`/update-skills` 静默跳过已安装频道的代码/依赖刷新，今日关闭。该 Issue 讨论了约 2 个月（6 月 26 日创建，8 月 18 日关闭），波及 CHANGELOG 迁移语义，关闭原因需结合关联 PR 确认。
- **PR #3315**（[链接](https://github.com/nanocoai/nanoclaw/pull/3315)）：在 24 小时内创建并合入，涉及 Slack 会话解析与安装载荷，属于持续高频迭代的一部分，核心团队协作密度较高。

## 5. Bug 与稳定性

按严重程度排列：

**高 — 功能失效/数据丢失风险**

1. **`/update-nanoclaw` 可能"假成功"（Issue #3194，[链接](https://github.com/nanocoai/nanoclaw/issues/3194)）** — 已关闭。更新在通过验证前就切换了运行中的 checkout，回滚点仅保护 Git，不保护 SQLite 数据库、gitignored 配置及外部组件。**对应修复 PR #3195 已合并**（事务化升级）。

2. **Chat 会话内任务"单向"执行（Issue #3301，[链接](https://github.com/nanocoai/nanoclaw/issues/3301)）** — 开放中。自 2.1.48 的 one-door 任务投递（#2988）起，`kind='task'` 行在 chat 会话中触发后整个查询进入任务模式，导致：日志被丢弃、回复被吞掉、会话系列不上架。**修复 PR #3303 已提交待合并**。

3. **pending 消息轮询积压无界（Issue #3289，[链接](https://github.com/nanocoai/nanoclaw/issues/3289)）** — 开放中。`getPendingMessages()` 在 `main` 分支加载未经限制的积压消息，存在内存与性能隐患。**修复 PR #3291 已提交待合并**。

**中 — 类型/兼容性问题**

4. **codex provider 未声明事件（Issue #3203，[链接](https://github.com/nanocoai/nanoclaw/issues/3203)）** — 开放中。在 `providers` 分支上 `file` 事件未纳入 `ProviderEvent` 类型，`/add-codex` 触发类型检查失败且图片生成被丢弃。无对应修复 PR 提及。

**低 — 静默行为异常**

5. **`/update-skills` 静默跳过已安装频道刷新（Issue #2868，[链接](https://github.com/nanocoai/nanoclaw/issues/2868)）** — 已关闭。pre-flight 检查提前跳过代码与依赖刷新，使 `[Unreleased]` CHANGELOG 迁移失效。

## 6. 功能请求与路线图信号

当前高密度且成体系的开发指向明确的路线图方向：

- **多频道通道层大扩军**：Slack 从适配器到安装技能到自动化应用部署已完成闭环（#3305、#3309、#3313、#3314、#3315），下一个可能的频道扩展将借鉴相同模板。`container/skills/welcome/addenda/<channel>.md` 机制（#3313）的引入意味着频道类技能安装将更加模块化、可组合。
- **会话运行时驱动抽象**：[#3306](https://github.com/nanocoai/nanoclaw/pull/3306) 引入 `src/drivers/` 的 SessionDriver 抽象（Docker 实现），[#3307](https://github.com/nanocoai/nanoclaw/pull/3307) 将会话生命周期（创建、领养、监督、重启）全部路由至此。虽然当前 `NANOCLAW_SESSION_DRIVER` 选择机制处于休眠态，这组堆叠 PR 是在为 **非 Docker 运行时** 预留扩展点。
- **更新流程权威化**：事务化升级（#3195）落地后，`/update-nanoclaw` 的失败回滚语义将更加可靠，为后续自动升级策略（夜间/CI 驱动）提供基础。
- **群组会话的跨会话上下文**（#3312）的扩展暗示产品层面正在从"单会话/单用户"走向"群组会话/多参与者"场景，为新版 Slack 频道能力做语义对齐。

## 7. 用户反馈摘要

今日 Issues 评论较少，可从已关闭的长期 Issue 中提取关键用户痛点：

- **升级路径的不信任感**（Issue #2868）：用户对 `/update-skills` 的静默跳过行为表示明确的负面反馈——"pre-flight 跳过了唯一的刷新入口"使得该命令对已安装频道而言成了"no-op"。这反映出用户对升级后代码/依赖状态**可验证性**的刚性诉求，CHANGELOG 迁移语义（`[Unreleased]`）需要可执行落地而非文案存在。
- **更新失败可回滚性是刚需**（Issue #3194）：用户明确区分了"Git 层保护"与"数据库/配置/外部组件层保护"，指出 `/update-nanoclaw` 的 rollback 点在真实环境中覆盖不足。对"先验证再切换"的事务性流程有强烈的安全预期。
- **多会话上下文丢失的挫败感**（Issue #3301）：任务在 chat 会话中触发后"日志丢了、回复被吃了、系列不上架"，用户对 one-door 投递设计与既有行为的兼容性缺乏信心，期望能保留在会话内触发的完整日志链。

## 8. 待处理积压

需维护者关注的长尾事项：

1. **[OPEN] Issue #3203 — codex provider 类型错误**（2026-08-08 创建，[链接](https://github.com/nanocoai/nanoclaw/issues/3203)）：10 天未分配、无修复 PR，涉及 `providers` 分支与 main 的类型兼容，建议评估是否需要回填声明或标记 experimental。
2. **[OPEN] Issue #3289 — pending 消息轮询积压**（2026-08-17 创建，[链接](https://github.com/nanocoai/nanoclaw/issues/3289)）：已有修复 PR #3291 待合并，但后者已停留 1 天未获批准，建议推进合入窗口。
3. **[OPEN] Issue #3301 — chat 会话任务单向执行**（2026-08-17 创建，[链接](https://github.com/nanocoai/nanoclaw/issues/3301)）：对应 PR #3303 已待合并超 1 天，涉及 2.1.48 以来的行为回归，建议尽快合并并安排 2.1.49 热修复发布。
4. **[OPEN] PR #3308 — 禁止在已存在的未清理文件夹上创建 agent group**（2026-08-17，[链接](https://github.com/nanocoai/nanoclaw/pull/3308)）：堆叠在 #3306 之上，属数据丢失防护，需等待驱动层合并后再评估。
5. **[OPEN] PR #3311 — 计划任务错误路由修复**（2026-08-18，[链接](https://github.com/nanocoai/nanoclaw/pull/3311)）：修复 #3223，涉及错误信息路由到 operator 而非批量路由字段，属运行时运维可观测性改进。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### 1. 今日速览

IronClaw 项目在 2026-08-18 处于高度活跃状态，24小时内产生 25 条 Issue 更新和 46 条 PR 更新，并发布了 1.3.0-rc.1 候选版本。当前开发焦点集中于三条主线：**资源治理优化**（史诗 #7591 驱动的数据库写入压降）、**通知系统重构**（可操作运行闸门 + 持久化收件箱）、**自动化运行能力增强**（run-now 手动触发）。风险方面，1.3.0-rc.1 存在从 1.2.x 升级后启动崩溃回归（#7720），且 libSQL 写入通道饥饿问题（#7714）已有修复 PR 待合并，属于发布阻断级风险。社区贡献活跃，核心成员 serrrfirat 主导资源治理与自动化模块，italic-jinxin 推进通知与设计系统改进。

---

### 2. 版本发布

**ironclaw-v1.3.0-rc.1**（2026-08-17 发布）

Release Notes 为空，未提供结构化变更说明。结合 Issue/PR 数据可以推断：该候选版本包含通知系统基础能力、自动化运行时证据判定、Anthropic 提示缓存优化等前序合并内容。

> ⚠️ **迁移警告（重要）**：Issue [#7720](https://github.com/nearai/ironclaw/issues/7720) 报告 `1.3.0-rc.1` 在 **任何从 1.2.x 升级的部署**上启动即崩溃（crash-loop），报错为 `unknown field activation_state in v2 extension installation row`。进程退出码 1，HTTP/SSH 端口不可用，直至重启策略放弃。**建议暂缓从 1.2.x 升级至 1.3.0-rc.1**，等待修复 PR。

---

### 3. 项目进展

今日无新合并 PR 记录，以下为已关闭（CLOSED）状态的重要 PR，说明此前工作已合入主线：

- **[#7274](https://github.com/nearai/ironclaw/pull/7274) `fix(llm): preserve Anthropic prompt cache across tool promotion`**（XL，已关闭）：通过 `defer_loading` + `tool_reference` 机制保持 Anthropic 工具数组稳定，避免工具提升时缓存失效。仅对受支持的 Claude Sonnet 型号启用原生延迟加载。显著降低长会话 token 成本。
- **[#7238](https://github.com/nearai/ironclaw/pull/7238) `feat(llm): stream Anthropic API-key responses`**（XL，已关闭）：API-key 请求改走直接 Messages API 通道，与 Anthropic OAuth 共享同一套 SSE 解析与终态处理逻辑，统一流式行为。
- **[#7722](https://github.com/nearai/ironclaw/pull/7722) `chore(agents): refresh codebase knowledge graph`**（XS，已关闭）：CI 机器人自动刷新代码库记忆快照，维持 agent 对代码结构认知的最新性。

**整体评估**：核心进展集中在 LLM 集成层（缓存保持 + 流式响应），为 1.3.0 候选版本注入了可量化的成本与体验改进。通知系统与自动化 run-now 的大型功能 PR 仍在待合并队列。

---

### 4. 社区热点

今日无高评论量 Issues 的密集讨论，以下为相对活跃的讨论话题：

- **[#7275](https://github.com/nearai/ironclaw/issues/7275) `Reborn: verify explicit persistent memory recall across conversations in production`**（已关闭，4 条评论）：核心诉求是跨对话持久记忆的可靠性——用户在一段对话中明确建立的信息，在后续对话中无法被可靠召回。该 Issue 被标记为 `epic` 并已关闭，但评论区反映了生产环境中记忆一致性的真实痛点。
- **[#7591](https://github.com/nearai/ironclaw/issues/7591) `Epic: reduce durable DB write pressure ~60% while keeping multi-worker safety`**（3 条评论）：资源治理史诗，是对数据库写入压力的系统性优化方案。评论讨论涉及多个子 Issue 的拆分与优先级。

---

### 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| **P0 阻断** | [#7720](https://github.com/nearai/ironclaw/issues/7720) | 1.3.0-rc.1 从 1.2.x 升级后启动崩溃：`unknown field activation_state in v2 extension installation row` | **无 fix PR**，发布阻断 |
| **P0 阻断** | [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL 单共享写连接在压测下饿死资源治理日志：权限级联失效 + 永久预留泄漏 | **有 fix PR [#7717](https://github.com/nearai/ironclaw/pull/7717)** 待合并 |
| **P1 高** | [#7716](https://github.com/nearai/ironclaw/issues/7716) | 添加 MCP 服务器流程缺少 Bearer Key 认证和 STDIO/HTTP 传输选项 | 无 fix PR |
| **P1 高** | [#7715](https://github.com/nearai/ironclaw/issues/7715) | Telegram 连接流程缺少 bot/个人账号的选择确认 | 无 fix PR |
| **P2 中** | [#7727](https://github.com/nearai/ironclaw/issues/7727) | Catalog `capabilities` 工件为必填但从未被读取（含 manifest v3 工具） | 无 fix PR |
| **P2 中** | [#7726](https://github.com/nearai/ironclaw/issues/7726) | `IRONHUB_MANIFEST_URL` 可配置但实际硬编码为 `hub.ironclaw.com`，自托管 catalog 不可用 | 无 fix PR |

---

### 6. 功能请求与路线图信号

- **[#7719](https://github.com/nearai/ironclaw/issues/7719) 请求 GitHub Projects v2 字段操作能力**：当前 IronClaw 可更新 issue 级元数据（labels），但无法操作 Projects v2 的自定义字段（如 Main backlog priority）。该请求直接阻塞了维护者对项目排期的自动化。预估会进入 GitHub 工具链的下一次扩展。
- **[#7681](https://github.com/nearai/ironclaw/issues/7681) Slack 未关联用户的连接引导应私有化**：公开频道中 bot 回复的关联提示整个频道可见，且需要手动多步操作。**已有对应 PR [#7682](https://github.com/nearai/ironclaw/pull/7682)** 实现私密定向推送 + 一键连接链接，具备快速合入条件。
- **[#7673](https://github.com/nearai/ironclaw/issues/7673) BudgetLedger 账务细化**：截断启动窗口双重计费 + 计费持久性缺口，属于资源治理精细化的一部分。

**路线图信号**：通知系统（#7697/#7698/#7699 三件套）与自动化 run-now（#7708/#7729 双 PR）是当前最大功能集群，预计将随 1.3.0 正式版或 1.4.0 落地。

---

### 7. 用户反馈摘要

- **持久记忆不可靠（#7275）**：用户反馈"明确在一段对话中建立的信息，在后续对话中无法被可靠召回"。这是对 agent 长期记忆能力的核心质疑，涉及生产环境信任度。
- **数据库压力与任务执行卡顿（#7714）**：PinchBench 压测中 libSQL 写入饿死导致任务执行短暂中断，反映在负载场景下系统的弹性不足。
- **Slack 连接引导体验差（#7681）**：未关联用户在公开频道收到可见的连接提示，且引导链路断裂——需要手动多步操作，体验割裂。该反馈已驱动 PR #7682 改进。
- **升级阻断（#7720）**：1.3.0-rc.1 升级后无法启动，直接影响采用 rc 版本用户的部署稳定性。

---

### 8. 待处理积压

以下为长期未响应或可能被忽视的重要 Issue/PR，建议维护者关注：

- **[#7577](https://github.com/nearai/ironclaw/pull/7577) `docs(design): define web-app run notifications`**（8 月 13 日创建，已活跃 5 天）：Web 应用运行完成通知的设计文档，涉及事件驱动架构 + 跨浏览器意图仲裁。与当前通知系统实现（#7697-#7699）配套，建议尽快评审合入以对齐实现方向。
- **[#7647](https://github.com/nearai/ironclaw/issues/7647) 自动化调度无投递结果的确定性抑制**：`[SILENT]` 响应模式缺少底层确定性消费机制，属功能缺口，已关闭但无对应实现 PR。
- **[#7637](https://github.com/nearai/ironclaw/issues/7637) 设计系统组件边界类型化**：已关闭，但涉及组件重构，建议跟踪是否有后续回归测试覆盖。

> 注意：以上积压判断基于现有 Issue/PR 的创建时间与活跃度，未发现超过 1 周且完全无响应的"僵尸"议题——项目维护响应速度整体良好。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-18

## 1. 今日速览

LobsterAI 今日整体活跃度较高，24小时内收到 9 条 Issue 与 24 条 PR 更新，其中 20 条 PR 已合并/关闭，核心维护者（fisherdaddy、liuzhq1986）持续高频提交。今日完成 `2026.8.17` 版本发布分支合并至 main（23 个 commit，57 个文件，+7,004/-39），包含 opt-in 实验性 DeepSeek 功能与多项稳定性修复。值得关注的是，9 条活跃 Issue 全部带有 `stale` 标记（大部分创建于 4 月上旬至今无实质进展），项目需要关注长期积压问题。

## 2. 版本发布

今日无新版本 Release 发布（0 个）。

> 注：PR #2510 将 `release/2026.8.17` 分支合并至 main，包含 23 个 commit、57 个文件变更（+7,004/-39），引入 opt-in 实验性 DeepSeek 功能，但对应版本发布尚未正式打 tag。

## 3. 项目进展

**今日合并/关闭的重要 PR（按领域归纳）：**

| 领域 | PR | 内容 |
|------|-----|------|
| **版本发布** | [#2510](https://github.com/netease-youdao/LobsterAI/pull/2510) | 合并 2026.8.17 发布分支至 main，包含 23 commits，引入 opt-in 实验性 DeepSeek 功能 |
| **依赖更新** | [#2509](https://github.com/netease-youdao/LobsterAI/pull/2509) | 更新 dsh 至 rc.7 |
| **侧边栏 UX** | [#2481](https://github.com/netease-youdao/LobsterAI/pull/2481) | 任务搜索移至 header 图标操作，统一 macOS/Windows 外观并补充诊断与回归覆盖 |
| **设置** | [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | 新增 artifact 自动预览开关，允许用户禁用自动预览，保留手动预览 |
| **侧边栏** | [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | 新增多 Agent 任务活动过滤器（Codex 风格），便于跨 Agent 查找待处理任务 |
| **页面样式** | [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) | Sites 页面布局与 Skills/MCP 管理视图对齐 |
| **交互反馈** | [#2417](https://github.com/netease-youdao/LobsterAI/pull/2417) | Sites 复制成功反馈复用会话复制图标交互 |
| **稳定性** | [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508) | 修复 Auth 模块 server model 加载瞬时失败后因无重试导致整个会话期间模型列表为空的问题 |
| **稳定性** | [#2507](https://github.com/netease-youdao/LobsterAI/pull/2507) | 修复定时任务历史加载超过 OpenClaw 网关最大 limit 的问题，改为内部自动分页 |
| **技能管理** | [#1583](https://github.com/netease-youdao/LobsterAI/pull/1583) | 技能"最近使用"Tab + 使用频次统计，解决 auto-routing 用户看不到技能使用情况的问题 |
| **数据层** | [#1597](https://github.com/netease-youdao/LobsterAI/pull/1597) | SQLite 启用外键约束，修复 `cowork_messages` / `user_memory_sources` 级联删除失效导致孤儿数据的问题 |
| **会话导出** | [#1615](https://github.com/netease-youdao/LobsterAI/pull/1615) | 改进会话导出：中文角色标题、补充元信息（Agent 名称/更新时间/消息数）、消息时间戳、取消 tool_result 截断、新增复制到剪贴板 |
| **定时任务** | [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) | 定时任务完成后推送 OS 原生通知（默认关闭），并修复 `pollOnce()` 首次执行不触发回调的 bug（Closes #1620） |
| **OpenClaw 网关** | [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626) | 修复网关因非法配置字段（`skipMissedJobs`）无法启动的 P0 Blocker 问题，及弹框闪烁 |

**整体评估：** 今日合并了 4 个多月前提交的多项 stale 功能 PR（技能最近使用、会话导出增强、定时任务通知、SQLite 外键等），说明项目正在集中清理历史积压，同时有新功能（DeepSeek、多 Agent 筛选器、artifact 自动预览）持续推进。

## 4. 社区热点

今日评论/活跃度最高的是以下 3 条 Issue（均有 2 条评论，标注 `stale`，最后更新均为 2026-08-18）：

1. **[#1614] 建议将 hermes-agent 添加为 AI 引擎选项** — [链接](https://github.com/netease-youdao/LobsterAI/issues/1614)

   用户希望添加 hermes-agent 作为可选的 AI agent 引擎（类似现有 OpenClaw）。反映社区对多引擎支持的需求。

2. **[#1622] 无法添加自定义模型（测试失败）** — [链接](https://github.com/netease-youdao/LobsterAI/issues/1622)

   用户添加自定义模型后测试失败（附截图）。属于功能性 Bug，已存在 4 个月无修复进展，可能与模型接入层配置有关。

3. **[#1627] 复杂任务客户端崩溃** — [链接](https://github.com/netease-youdao/LobsterAI/issues/1627)

   用户反馈执行较复杂任务时客户端崩溃，日志显示 OpenClaw WebSocket 事件处理异常。属于稳定性问题，值得关注。

**诉求分析：** 社区热点集中在 AI 引擎扩展（hermes-agent）、自定义模型接入和复杂任务稳定性三个方面，反映用户对 LobsterAI 作为多引擎 AI 助手平台的深度使用需求。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | Fix PR 状态 |
|----------|-------|------|------------|
| **高** | [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) | 复杂任务导致客户端崩溃（OpenClaw ws 事件处理异常） | 无对应 PR |
| **高** | [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) | 会话功能、定时任务均无法正常执行（macOS，版本 2026.04.08） | 无直接对应 PR，但 [#2507](https://github.com/netease-youdao/LobsterAI/pull/2507) 修复了定时任务历史分页相关问题 |
| **高** | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) | 更新至最新版本后首次启动崩溃/闪退（附日志） | 无对应 PR |
| **中** | [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) | 技能删除后前端列表不同步，重启后仍显示已删除技能（"Skill not found"提示，后端已删除但 UI 未刷新） | 无对应 PR |
| **中** | [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) | 切换英文后部分内容未国际化（"条款"页、"工具风格"设置） | 无对应 PR |
| **中** | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) | 自定义模型添加后测试失败 | 无对应 PR |
| **低** | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) | 切换本地模型后已装 skill 不可用，无法安装新 skill | 无对应 PR |

> 今日合并的 [#2508](https://github.com/netease-youdao/LobsterAI/pull/2508)（server 模型加载重试）、[#2507](https://github.com/netease-youdao/LobsterAI/pull/2507)（cron 历史分页）和 [#1626](https://github.com/netease-youdao/LobsterAI/pull/1626)（网关配置修复 P0）属于稳定性相关修复，但均未直接对应上述 open Issues。

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 信号 |
|------|----------|------|
| **hermes-agent 作为可选 AI 引擎** | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) | 社区提出，暂无对应 PR。考虑 LobsterAI 已集成 OpenClaw，多引擎支持可能是后续方向 |
| **定时任务系统通知** | [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) → 已由 [#1621](https://github.com/netease-youdao/LobsterAI/pull/1621) 实现（今日合并） | 已落地，属于 **2026.8.17 版本**的一部分 |
| **技能管理增强（最近使用/频次）** | 由 [#1583](https://github.com/netease-youdao/LobsterAI/pull/1583) 实现（今日合并） | 已落地，解决 auto-routing 用户技能可见性问题 |
| **多 Agent 任务过滤** | [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418)（今日合并） | 已落地，侧边栏新增 Codex 风格活动过滤器 |
| **DeepSeek 实验性功能** | 由 [#2510](https://github.com/netease-youdao/LobsterAI/pull/2510) 引入 | 已合并至 main，为 opt-in 实验性特性，**下一版本重点方向** |

## 7. 用户反馈摘要

- **本地模型切换痛点（#1632）**：切换到本地模型后原 skill 全部不可用，用户对模型与 skill 的耦合关系存在困惑，说明文档/UX 引导不足。
- **技能删除状态不同步（#1617）**：用户对前端 UI 状态与后端不同步表示困惑，是明显的 UX 一致性问题。
- **中文用户国际化诉求（#1586）**：英文模式切换不彻底，用户明确指出了两个未翻译位置。
- **定时任务通知需求（#1620）**：用户希望任务完成有系统通知，当前需手动打开 App 查看。已由今日合并的 PR #1621 解决，默认关闭需用户手动开启。
- **OpenClaw 升级导致的 P0 网关崩溃（#1626 背景）**：升级后所有用户无法启动，是近期最严重的回归问题，今日已修复。

## 8. 待处理积压

以下 Issue 自创建后已超过 4 个月未获实质解决方案（均有 `stale` 标记），建议维护者优先排查：

| Issue | 创建时间 | 积压天数 | 说明 |
|-------|----------|---------|------|
| [#1586](https://github.com/netease-youdao/LobsterAI/issues/1586) 国际化不完整 | 2026-04-09 | ~131 天 | 明确可复现，影响英文用户体验 |
| [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) 更新后启动崩溃 | 2026-04-09 | ~131 天 | 附完整日志，P0 严重度 |
| [#1589](https://github.com/netease-youdao/LobsterAI/issues/1589) 会话/定时任务不可用 | 2026-04-09 | ~131 天 | macOS 用户，核心功能受影响 |
| [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) hermes-agent 引擎 | 2026-04-10 | ~130 天 | 功能请求，可能排期较后但应回应 |
| [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) 自定义模型失败 | 2026-04-10 | ~130 天 | 附截图，影响自定义模型工作流 |
| [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) 复杂任务崩溃 | 2026-04-10 | ~130 天 | 核心稳定性问题 |
| [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) 本地模型 skill 不可用 | 2026-04-11 | ~129 天 | 与本地模型策略相关，建议至少补充文档 |
| [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) 定时任务通知 | 2026-04-10 | ~130 天 | ✅ 已由 PR #1621 关闭 |
| [#1617](https://github.com/netease-youdao/LobsterAI/issues/1617) 技能删除不刷新 | 2026-04-10 | ~130 天 | 前端状态同步问题，建议排查渲染层 |
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) electron 依赖更新 | 2026-04-02 | ~138 天 | Dependabot 自动 PR，待维护者 review |

**积压风险提示：** 9 条 active Issue 全部标为 `stale` 且已有 4 个月未获解决方案，其中 3 条为高严重度稳定性问题（启动崩溃、核心功能不可用、复杂任务崩溃）。建议维护团队对 stale 标记的 PR（#1583、#1597、#1615、#1621、#1626 等）也一并核查——今日虽然集中清理了一批，但用户的 issue 侧积压仍需系统性处理。

---

*报告生成时间：2026-08-18 | 数据来源：LobsterAI GitHub 仓库动态*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-18

## 1. 今日速览

过去 24 小时内，Moltis 项目保持中等活跃度：共处理 1 条 Issue（旧 bug 关闭）和 4 条 PR（2 条待合并，2 条已合并/关闭）。值得注意的是，三条与核心基础设施相关的 PR——Podman 沙箱修复（#1106）、托管文件库与设置浏览器（#1206）、Tesla 连接器（#1210）——均由维护者 penso 提交，显示项目在容器安全与连接器生态扩展上持续推进。截至目前无新版本发布，当前工作流处于"下一版本前冲刺"阶段。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

| PR | 状态 | 内容 | 影响 |
|---|---|---|---|
| [#1206](https://github.com/moltis-org/moltis/pull/1206) | **已合并** | 新增数据目录支撑的托管文件库（支持鉴权流式列表、上传、下载、创建、移动、删除），并引入 Finder 风格的设置浏览器，集成 `MOLTIS_FILES_DIR` 发现与只读默认权限 | 显著增强文件管理能力与配置可见性，是面向用户体验的重要一步 |
| [#1106](https://github.com/moltis-org/moltis/pull/1106) | **已合并** | 支持 Podman 沙箱逃逸通道：互斥的主机 socket 直通与特权嵌套 Podman 模式；沙箱重建时在未授权变更下失败关闭 | 解决了自 6 月初以来的 #1095 报障根因，提升了 Linux 宿主场景的可用性与安全性 |
| [#1210](https://github.com/moltis-org/moltis/pull/1210) | 待合并 | 新增 Tesla Fleet API 只读连接器，在共享快照存储中保留车辆数据副本，不发送指令、不唤醒休眠车辆 | 连接器生态向物联网/车辆数据同步扩展，验证了连接器抽象的可插拔性 |
| [#1209](https://github.com/moltis-org/moltis/pull/1209) | 待合并 | 将 `heartbeat.update` 参数从整体替换改为部分 patch 语义，修复配置被意外覆盖的问题（关闭 #1187） | 修复网关配置管理的隐蔽缺陷，纳入下一版本可能性高 |

**整体评估**：文件管理功能、Podman 兼容性与配置语义修正三线并进，项目本阶段在"沙箱安全 + 数据管理 + 连接器抽象"三个方向均有实质推进。结合已关闭的 #1095，本月核心 bug 面正在快速收敛。

## 4. 社区热点

**#1095 — Podman 无法通过 Moltis 工作**（[已关闭](https://github.com/moltis-org/moltis/issues/1095)）
- 创建于 2026-06-03，今日关闭，2 条评论
- 关注点：Podman 运行时与 Moltis 沙箱的兼容性问题。该 issue 存在超过 2 个月，社区用户（主要使用 Linux 原生容器环境）持续关注 Podman 支持状态。
- **诉求分析**：用户期望 Moltis 在非 Docker 容器环境（尤其企业内网场景）下具备同等功能；修复 PR（#1106）提及"显式互斥逃逸通道"与"失败关闭"策略，说明项目在满足功能需求与维持安全边界之间采取了保守路线。

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 处置 |
|---|---|---|---|
| **高** | [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman 运行时无法正常工作，影响 Linux 用户核心使用路径 | ✅ 已由 PR #1106 修复并关闭 |
| **中** | #1187（由 PR #1209 引用） | `heartbeat.update` 将参数整体覆盖配置，导致未传字段被重置为默认值 | 🔧 #1209 待合并，尚未关闭 |

无新增崩溃类或数据丢失类 bug 报告。整体稳定性趋势向好。

## 6. 功能请求与路线图信号

- **Tesla 车辆数据连接器**（PR #1210）：新增只读适配器，表明连接器框架已具备"快照存储 + 只读策略"的通用范式，未来或有更多第三方连接器（车辆、IoT、可穿戴设备）以此模式接入。
- **托管文件库与浏览器**（PR #1206 已合并）：`MOLTIS_FILES_DIR` 环境变量 + 默认只读权限的设定，暗示后续版本可能开放更多插件/数据目录管理能力。
- **Sandbox 逃逸策略迭代**（PR #1106）：提供了"互斥模式 + 失败关闭"的安全基线，为将来更多沙箱运行时（如 gVisor、Kata）的支持预留了清晰的扩展点。

## 7. 用户反馈摘要

基于 #1095 的评论（2 条）与 PR #1106 的讨论走向：
- **真实痛点**：使用 Podman 的用户在 sandbox 启停、socket 透传等环节遭遇不可用，且缺少明确的配置项提示。
- **期望方向**：用户希望 Moltis 在容器运行时抽象层上提供等价的显式配置选项（如 socket 直通），并保证失败时行为可预测（fail closed）。
- **满意信号**：Patch 语义修复（#1209）及时回应了配置覆盖类问题；#1095 的修复虽耗时 2 个月，但最终以安全优先的方式落地，社区接受度较高。

## 8. 待处理积压

- **PR #1209**（[链接](https://github.com/moltis-org/moltis/pull/1209)）：`heartbeat.update` patch 语义修复已创建 2 天，仍待合并。该修复直接关联已关闭的 #1187，建议维护者尽快完成 review，避免该 bug 在下个版本中持续存在。
- **PR #1210**（[链接](https://github.com/moltis-org/moltis/pull/1210)）：Tesla 连接器同日创建，建议在合并 #1206（文件库基础设施）之后对连接器快照存储接口做一次兼容性验证再合入，避免破坏性变更。

> 数据来源：[Moltis GitHub 仓库](https://github.com/moltis-org/moltis)（采集时间窗口：2026-08-17 ~ 2026-08-18）

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-08-18）

> 数据来源：agentscope-ai/CoPaw GitHub 仓库（数据统计周期：过去 24 小时）

---

## 1. 今日速览

过去 24 小时 CoPaw 项目保持高度活跃：**Issues 更新 44 条**（新开/活跃 28 条，关闭 16 条），**PR 更新 50 条**（待合并 32 条，已合并/关闭 18 条），无新版本发布。值得关注的是，今日新开的 PR 集中于**工具层能力增强**（事务性补丁、托管 PTY 会话）、**异步配置加载重构**，以及**本地 QwenPaw Pro 控制平面的引入**。社区热点集中在 Matrix 频道稳定性问题（[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)）和多步骤任务自动中断问题（[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)），两者均获得大量讨论且已有对应的修复 PR 在推进中。整体健康度良好，社区活跃和问题反馈循环顺畅。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下几条对项目核心体验有实质推进：

- **[PR #6617](https://github.com/agentscope-ai/QwenPaw/pull/6617)（已合并）**：修复流式重试路径上 `Retry-After` 上限未被执行的问题，统一了 `RetryChatModel` 中速率限制策略的三条分支行为，此前该上限绕过可能导致过度重试或退避不足。
- **[PR #7111](https://github.com/agentscope-ai/QwenPaw/pull/7111)（已合并）**：修复 Console 暗色模式下会话搜索、分组创建和粘性组头部的对比度问题，同时对齐拖拽目标/遮罩颜色与品牌强调色。
- **[PR #6767](https://github.com/agentscope-ai/QwenPaw/pull/6767)（已合并）**：强化共享文件系统上的 agent 持久化——改用原子 JSON 写入器、在目标持久化失败时保留旧源字段、并以设备号+inode+文件大小+纳秒级 mtime 替代仅 mtime 的缓存键，降低多节点并发场景下的配置丢失风险。

整体而言，项目在稳定性和健壮性上继续收敛，特别是对基础设施层（重试策略、持久化、共享文件系统）的加固表明项目正在从功能扩张阶段过渡到稳定性打磨阶段。

---

## 4. 社区热点

今日讨论最活跃的 Issues/PRs：

| 议题 | 标题 | 评论数 | 状态 |
|------|------|--------|------|
| [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | 增加频道的重试功能 | 10 | OPEN |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步骤任务无提示自动停止 | 8 | OPEN |
| [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) | 卡死超过 10 分钟（glm 5.3） | 7 | OPEN |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console 停止请求误取消 Feishu 会话（2.1.0） | 7 | OPEN |
| [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver 硬编码 SSE 客户端，忽略 streamable_http 配置 | 5 | OPEN |

**诉求分析：**

- **稳定性与可靠性是当前社区最大关注点**。`#6684`（Matrix 频道自建服务器场景下启动竞态导致连接失败且无自动恢复）、`#6921`（多步骤任务中途静默停止）和 `#7102`（长时卡死无输出）共同指向一个核心诉求：**Agent 运行时的故障恢复能力和可观测性不足**。这些问题直接伤害用户对 Agent 自动完成任务的信赖。
- **多会话管理下的状态冲突**（`#7011`）暴露了 2.1.0 版本中 Console 与渠道会话（如 Feishu）在会话身份管理上的耦合问题，这在多 UI 会话场景下成为实际痛点。

---

## 5. Bug 与稳定性

按严重程度排列：

**高严重度**

- **[#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)（OPEN）**：调用 glm 5.3 模型时冻结超过 10 分钟，无任何 token 输出，thinking 过程也无响应。目前无直接 fix PR，需要维护者排查模型流式链路的超时/卡死问题。
- **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)（OPEN）**：多步骤任务执行中静默停止，需用户说"继续"才能恢复。**已有关联修复 PR 在推进中**——[PR #6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) 针对 ACP 传输层 notification 与 prompt response 竞态导致的最终文本丢失问题提供了修复方案，可能部分解决此问题。
- **[#7110](https://github.com/agentscope-ai/QwenPaw/issues/7110)（OPEN，今日新开）**：对话上下文中包含无法下载的图片链接时，整个会话不可用，只有 `/clear` 才能恢复。属于高影响可用性缺陷——单个资源失败即拖垮整个会话。

**中严重度**

- **[#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)（OPEN）**：Console 停止请求会误取消正在活跃的 Feishu 会话（2.1.0 回归），会话身份值交叉后触发取消传播。
- **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)（OPEN）**：MCP driver 硬编码 `sse_client`，完全忽略 `transport: streamable_http` 配置，导致 Streamable HTTP MCP 服务器全部无法连接。根因在 `mcp_stateful_c...` 相关代码。
- **[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)（OPEN）**：Windows 桌面版被 Malware Bytes 检测为 Trojan Loader。用户表示在等待官方答复前已卸载。此问题涉及信任危机，建议维护者优先响应。

**低严重度**

- **[#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065)（已关闭）**：多轮对话后无法查看早期历史消息（仅显示最近 3-4 条），已有关联 PR 修复。
- **[#7039](https://github.com/agentscope-ai/QwenPaw/issues/7039)（已关闭）**：2.1.0 版本会莫名其妙新建会话；用户建议增加关闭文件预览的选项。

---

## 6. 功能请求与路线图信号

今日用户提出的新功能需求中，以下几个值得关注：

- **[#7085](https://github.com/agentscope-ai/QwenPaw/issues/7085)（OPEN）**：按频道独立配置模型。用户明确提出了经典场景：钉钉用 `gpt-4o`、微信用 `qwen-max`、Console 用本地 `llama.cpp`。目前模型配置是全局或智能体级别的。这是一个**清晰的产品化信号**——随着多渠道接入的普及，按渠道（频道）配置模型是自然演进方向，建议维护者评估纳入下一版本。
- **[#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052)（OPEN）**：插件 API 增加 `system_prompt` 权限——企业的插件交互界面有自定义提示词，不希望用户在使用会话界面时看到它。涉及插件隔离和安全边界设计。
- **[#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925)（OPEN）**：智能体协作希望在**同一个会话窗口**内完成，而不是每次协作都新建会话并要求用户手动切换智能体查看内容。这是对多智能体协作体验的重要改进信号。
- **[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)（OPEN）**：频道重试功能——**已有对应的直接修复 PR**：[PR #7109](https://github.com/agentscope-ai/QwenPaw/pull/7109)（feat(matrix): retry login on transient homeserver failures）即为 Matrix 登录/连接在 homeserver 暂时不可用时的重试补丁，预计可解决此问题。
- **[#4001](https://github.com/agentscope-ai/QwenPaw/issues/4001)（已关闭）**：对话中手动删除单条消息——该需求今日被关闭，说明可能已通过其他 PR 实现或已被排期处理。

---

## 7. 用户反馈摘要

来自 Issues 评论中的真实用户声音：

- **自建服务部署的痛点**（[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)）：用户在自建 Matrix 服务器场景下，QwenPaw 启动速度经常快于 Matrix 服务，导致连接失败。**"每次服务器启动后都需要手动重新保存一次频道才能恢复连接"**——这是部署稳定性带来的日常操作负担。
- **任务中断的挫败感**（[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)）：用户详细描述了多步骤任务执行时模型输出"Now 2.1, 3.1, 3.2. Let me do all three." 后便无提示停止，需手动说"继续"才能恢复。用户在这种情况下对 Agent 的自主性产生了明显不信任。
- **安全意识与信任问题**（[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)）：英文用户因 Malware Bytes 检出 Trojan 而卸载应用，**"I'm uninstalling until I hear back from your team"**——安全检测误报如果不及时澄清，会直接造成用户流失。
- **对 2.1.0 的正面反馈**（[#7039](https://github.com/agentscope-ai/QwenPaw/issues/7039)）也值得注意：用户明确表示"更新到 2.1.0 版本后，确实发现很多改善，比如公式显示正常了"，但随即反馈了自动新建会话的新问题。说明 2.1.0 在局部体验上获得了认可，但仍有回归问题。
- **结果呈现诉求**（[#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260)）：用户希望思考和工具调用过程可折叠，**"结果却被淹没在执行的过程中"**——Agent 过程展示与结果呈现之间需要更好的平衡，这是 UI/UX 层的重要信号。

---

## 8. 待处理积压

以下为长期未获响应或推进缓慢的重要 Issue/PR，提醒维护者关注：

- **[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)（OPEN，2026-07-26 创建）**：MCP driver 硬编码 SSE 客户端导致 streamable_http 服务器全部无法连接。已存在 **24 天**，涉及 MCP 协议支持的完整性，且今天仍有新讨论（更新于 08-18），建议优先处理。
- **[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)（OPEN，2026-08-07 创建）**：Windows 桌面版被 Malware Bytes 误报 Trojan。用户已明确表示"uninstalling until I hear back"，**这属于信任危机级别的待处理项**，建议维护者以官方声明或签章说明尽快响应。
- **[#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053)（OPEN，2026-08-15 创建）**：OAuth2 refresh token 轮换后不持久化新 token、无主动刷新机制——远程 MCP 服务器（如 XMind）在使用 OAuth2 授权码模式时永久降级为手动重新认证。涉及 MCP 生态长期可用性，值得排期。
- **[PR #6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)（OPEN，2026-08-01 创建，Under Review）**：ACP 传输层 notification 与 prompt response 竞态修复，直接关联 [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)（多步骤任务文本丢失）的根因。已处于 Under Review 状态 **17 天**，建议加速评审流程。
- **[PR #6764](https://github.com/agentscope-ai/QwenPaw/pull/6764)（OPEN，2026-08-06 创建）**：为 `main` 分支配置测试门禁（required checks）。目前 `main` 无测试卡关，存在代码全红仍可合入的风险。该 PR 已存在 **12 天**，建议尽快合入以保护主干稳定性。

---

*日报生成时间：2026-08-18 | 数据源：CoPaw GitHub 仓库 (github.com/agentscope-ai/CoPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-08-18

## 1. 今日速览

过去 24 小时 ZeroClaw 仓库保持高度活跃：共产生 100 条 Issue/PR 更新，其中新开及活跃 Issue 42 条、待合并 PR 46 条。当前所有技术 RFC（共 14 项）均处于 accepted 状态且持续更新，反映出治理流程运转良好，但大量 PR 因 `needs-author-action` 标签停滞，合并效率受限。值得关注的高优先级信号包括：#10068（交互式会话上下文被错误限制在 32K）与 #10080（Windows Common Controls v6 修复 PR），以及 46 项依赖批量升级的积压 PR #9808。未发布新版本。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去 24 小时合并/关闭 4 个 PR，以下为最值得关注的 1 个：

- **#9594 [已关闭] 修复 Coding-agent 工具双重扣费 action budget** — S2 降级级 Bug，CLI 工具单次成功调用会通过 `SecurityPolicy::enforce_tool_operation` 被计费两次。已修复并关闭，直接消除一类计划外消耗问题。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9594)

此外，多个 PR 正在接近合并但仍被 `needs-author-action` 阻塞，实际落地速度低于预期。

## 4. 社区热点

**#6808 RFC: Work Lanes、Board 自动化与标签清理**（评论 23，P2）— 该治理型 RFC 已修订至第 26 版，涵盖工作流分区和自动化的系列变更，自 5 月起持续滚动推进，是当前流程类讨论的核心。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)

**#8603 RFC: ZeroClaw Chat Completions profile**（评论 23，P2）— 讨论热度最高的技术 RFC。核心诉求：暴露 OpenAI Chat Completions 协议接口，使 Open WebUI、LobeChat 等现有 OpenAI 客户端可直接接入 ZeroClaw，而不仅限于 WebSocket、ACP 和 webhooks。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)

**#7155 RFC: 高危 shell 命令逐次确认 + Claude Code 风格策略**（评论 21，P1）— 用户对"高危操作需显式确认"的需求强烈，修订第 3 版已收窄至 shell 策略契约范围。[查看 Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)

三条热点都集中于安全和协议兼容性——社区对 ZeroClaw 的平台化（协议互通）与安全治理（高危操作管控）预期正在快速上升，这是 roadmap 的信号，也是潜在竞争压力所在。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| S2 | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | 交互式 agent 会话上下文被硬性限制在 32,000 tokens，忽略 `max_context_tokens = 131072` 配置 | 新建（2026-08-18），无修复 PR |
| S2 | [#10080 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10080) | Windows 桌面版缺少 Common Controls v6 激活上下文，`TaskDialogIndirect` 无法工作 | fix PR 已提交（P1, XS） |
| S2 | [#9594](https://github.com/zeroclaw-labs/zeroclaw/issues/9594) | Coding-agent 工具对 action budget 重复扣费 | 已关闭（已修复） |

**稳定性观察**：大量 P1 级修复 PR（#9283 web_fetch 压缩响应为乱码、#9281 配置回滚、#9313 WeChat 游标持久化时序）停滞在 `needs-author-action` 状态，如长期不处理，社区对维护响应速度的信心可能受影响。

## 6. 功能请求与路线图信号

**高确定性信号（已有实施中 PR）：**

- **上下文压缩比例配置**（#9535）— 新增 `runtime_profiles.<name>.context_compact_ratio` 设置，将压缩策略从绝对预算切换到基于模型窗口的比例模式。对应配置文件分配与 UI 显示的能力需求（#7100 已 accepted）。
- **Microsoft Teams 渠道**（#9241）— 基于 Bot Framework 的新渠道支持，扩展通道覆盖面。
- **A2A 出站客户端**（#9324）— RFC #9106 第一阶段落地，含 `a2a_*` 工具与共享 wire model。

**中度信号（RFC 已 accepted，有待实施 PR）：**

- **Chat Completions 协议层**（#8603）— 与 Open WebUI/LobeChat 生态对接，若落地将显著降低接入门槛，属平台化关键步骤。
- **目标模式（Goal mode）**（#8303）— 跨多轮 agent turn 的持久化目标执行，P2 风险高，需继续观察。
- **统一附件架构**（#9488）— Web 聊天与各渠道的附件处理统一化，P2 且需要 maintainer 审阅。

## 7. 用户反馈摘要

从 Issues/PR 中可以清晰提炼出以下用户诉求：

**协议兼容性成为核心期望**：#8603 表明用户希望 ZeroClaw 能直接接入 OpenAI 生态工具，而不是依赖自有的 WebSocket/ACP 协议；#6808 的治理讨论也反映出社区对工程流程顺畅度的关注。

**上下文管理是高频痛点**：#10068 是典型的"配置不生效"类反馈，用户显式设置了 131K 上下文却被运行时硬限制在 32K，且 UI 和实际行为不一致，导致困惑和不满。

**安全管控需求强烈且具体**：#7155 中用户要求 Claude Code 风格的高危命令分级确认（allow/ask/deny），#9397 要求 WhatsApp `allowed_groups` 空列表默认拒绝所有群。两者都是"默认安全"的诉求，说明用户正在生产环境中部署 ZeroClaw，对最小权限原则有明确预期。

**社区贡献者活跃但受阻**：多位 distinguished contributor（IftekharUddin、minato32）的 P1/P2 PR 普遍挂 `needs-author-action`，侧面反映审阅节奏跟不上提交量。

## 8. 待处理积压

**高优先级——PR 长时间等待处理（均超 20 天）：**

- **#9320** `fix(cron): 为 agent 任务添加墙钟超时并释放锁` — P1，cron 任务挂起会导致锁永久不释放，影响面大。[查看 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)
- **#9313** `fix(wechat): 入队完成后才持久化同步游标` — P1，当前实现可能丢失入站消息。[查看 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9313)
- **#9283** `fix(tools): web_fetch 解压 gzip/brotli/deflate` — P1，`finance.yahoo.com` 等压缩响应目前显示为乱码字节。[查看 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9283)

**依赖升级积压：**

- **#9808** `deps: rust-all 组 46 项依赖升级` — 创建于 2026-08-07，已搁置 11 天，长期不合并将积累技术债并增加未来升级风险。[查看 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9808)

**STALE 标记即将生效：**

- **#9427** `fix(channels): LINE 群消息需发送方授权` — P1，已标记 `stale-candidate`，依赖 #9428，存在被自动关闭的风险。[查看 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9427)

---

*数据来源：[ZeroClaw GitHub 仓库](https://github.com/zeroclaw-labs/zeroclaw)，统计窗口：2026-08-17 至 2026-08-18。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*