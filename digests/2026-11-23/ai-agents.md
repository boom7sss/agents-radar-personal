# OpenClaw 生态日报 2026-11-23

> Issues: 469 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-23 22:04 UTC

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

# OpenClaw 项目日报 · 2026-11-23

> 数据来源：OpenClaw (github.com/openclaw/openclaw) 当日 GitHub 快照。以下所有标题、编号、作者、日期、指标与摘要均直接取自所提供材料；材料未覆盖的内容不作推断。

---

## 1. 今日速览

- **极高活跃度**：过去 24 小时 Issues 更新 469 条（新开/活跃 305、关闭 164），PR 更新 500 条（待合并 292、已合并/关闭 208），并发布 2 个版本，属于高吞吐开发状态。
- **主线是更新与恢复可靠性**：新版本 Highlights 集中在“更新中断后可继续运行/崩溃或重启后安全完成更新”，以及跨 Gateway 重启的会话恢复。
- **稳定性压力仍集中在 Gateway 与运行时**：本轮高评论 Issue 中，P0/P1 的更新一致性、消息丢失、崩溃循环、内存增长问题占比高，且多数标记为 `clawsweeper:no-new-fix-pr`。
- **维护者分流明显**：大量 stale 议题被关闭，同时 P0 发布阻塞项仍在等待维护者评审，说明“清积压”与“保发布”并行。

---

## 2. 版本发布

### v2026.11.10-beta.2
链接：openclaw/openclaw Release v2026.11.10-beta.2

材料中的 Highlights（原文被截断，仅保留可确认内容）：
- **更新恢复**：当包替换被中断时，保持 OpenClaw 仍可运行，并让下一次更新在崩溃或重启后安全完成（#200273、#200366、#200460、#200550、#200994），致谢 @fuller-stack-dev。
- **可靠的后台工作**：“preserve finishe…”（材料在此截断，无法确认完整表述）。

### v2026.11.7
链接：openclaw/openclaw Release v2026.11.7

材料中的 Highlights（原文被截断）：
- **会话恢复**：跨 Gateway 重启恢复被中断的回复与子结果，不丢失待处理工作（#198905、#201544、#200924、#200967），作者 @steipete，致谢 @RomneyDa、@galiniliev、@vincentkoc。
- **可靠的自动化**：“Let an…”（材料在此截断，无法确认完整表述）。

**破坏性变更 / 迁移注意事项**：材料未披露明确的破坏性变更或迁移步骤。但结合当日 P0 议题（#201468：新版 OpenClaw.app 2026.11.5 的捆绑 CLI 拒绝为旧版 Gateway 2026.11.4 做前向 schema 迁移；#197083：2026.11.1→2026.11.3 升级后 Doctor 的 SQLite WAL 提交发布校验失败并拒绝回滚），可提示用户：**跨版本升级时需关注 app 与 Gateway 版本一致性以及更新/迁移路径**。

---

## 3. 项目进展

材料仅给出了已合并/关闭 PR 中的 4 条（且评论数字段缺失），可确认的推进如下：

| PR | 状态 | 内容 | 链接 |
|---|---|---|---|
| #204219 | CLOSED（P2，rating: 🦐 gold shrimp） | 通过只读预热保持空闲 prompt 缓存热度：避免长 prompt 会话闲置超过 provider 缓存寿命后，下一轮按 cache-write 价格重写整个 prompt | openclaw/openclaw PR #204219 |
| #202175 | CLOSED（P2） | 按“添加该自动化的设备时区”调度 Template 自动化，修正此前使用 Template 声明时区导致的运行时间偏差 | openclaw/openclaw PR #202175 |
| #204230 | CLOSED（P2） | Control UI 显示 provider 插件自定义 label（此前被核心文本覆盖） | openclaw/openclaw PR #204230 |
| #204246 | CLOSED（P3） | 移除 5 个死导出，修复 `pnpm check:changed` 导出扫描失败，恢复本地改动检查 | openclaw/openclaw PR #204246 |

同日还有 #204247（Safari/WebKit 下 Logs 自动跟随恢复）标记为 CLOSED。

**整体判断**：当日关闭/合并方向集中在“成本与体验修复”（缓存预热、时区调度、UI 标签、开发者工具链），属于体验层收尾；尚无材料说明核心架构级改动已完成合并。

---

## 4. 社区热点

### Issues（按评论数）

1. **#197083 [OPEN][P0] Post-install Doctor WAL 发布校验导致 11.3 更新部分定稿** — 35 评论，@Staruy
   https://github.com/openclaw/openclaw/issues/197083
   诉求：受管 npm 升级激活新核心后，Doctor 报 `SQLite WAL commit publication could not be verified`，更新器以 `state-migrated-no-rollback` 拒绝回滚——用户被卡在“部分完成”的状态，需要可恢复路径。

2. **#182891 [OPEN][P1] Prompt 缓存从不复用：每个请求 `cache read dropped N -> 0`** — 27 评论，@croccio
   https://github.com/openclaw/openclaw/issues/182891
   诉求：envelope 重写、runtimeContextCarrier 变化及同一轮内无法解释的丢失，导致缓存命中为 0，直接放大成本。

3. **#157989 [OPEN][P1] 插件源码捕获每条 CLI 命令重写约 1.1–1.4 GB、每次 Gateway 启动约 6.5 GB** — 24 评论，@jeanmonet
   https://github.com/openclaw/openclaw/issues/157989
   诉求：自 2026.9.5 起对每个外部插件做字节拷贝 + SHA-256，无复用且含捆绑原生二进制，造成严重 SSD 磨损。

### PRs（材料未提供评论数，以下为当日更新且受关注度标签较高的条目）

- **#192350 [OPEN][XL, security-review-required] refactor(github): 将仓库集成迁移为插件** — @miguelbranco80
  https://github.com/openclaw/openclaw/pull/192350
  依赖 #192349，涉及账号连接、仓库发现、执行身份、发布与浏览器呈现，是插件化路线的重要一步。
- **#204249 [OPEN][XL, security-sensitive-changed] refactor: 去掉已准入 operator authority 的运行中复查与 lifetime ratchet** — @obviyus
  https://github.com/openclaw/openclaw/pull/204249
  与 AGENTS.md“开工时校验一次”原则对齐，属权限模型收敛。
- **#194376 [OPEN] feat(gateway): 准入 sessions_send 唤醒启动** — @cubefarm-forge
  https://github.com/openclaw/openclaw/pull/194376
  针对并发发送者绕过发送端批处理与限流的问题，引入 Gateway 拥有的准入机制。

**分析**：热点高度集中在“升级不可逆 / 成本失控 / 硬件损耗”三类真实损害，而非功能缺失；用户诉求是**可恢复性与可预期成本**。

---

## 5. Bug 与稳定性

### P0（发布阻塞）
- **#197083** 更新 WAL 校验失败、拒绝回滚（35 评论）。标记 `clawsweeper:no-new-fix-pr`、`needs-maintainer-review`，**无 fix PR**。
  https://github.com/openclaw/openclaw/issues/197083
- **#201468** macOS 启动告警在捆绑 CLI 拒绝为旧 Gateway 做 schema 迁移时给出通用凭据恢复步骤（OpenClaw.app 2026.11.5 vs Gateway 2026.11.4）。标记 `clawsweeper:linked-pr-open`，**有相关 PR 在开**。
  https://github.com/openclaw/openclaw/issues/201468
- **#202518** `claude-cli` 在长会话中 `sessions_spawn` + `sessions_yield` 后运行永不关闭，后续轮次复用已死的 live session（2026.11.6）。**无 fix PR**。
  https://github.com/openclaw/openclaw/issues/202518

### P1（严重）
- **#182891** Prompt 缓存零复用（见上）。无 fix PR。
- **#157989** 插件源码捕获大量写入致 SSD 磨损（回归）。无 fix PR。
- **#196199** 2026.10.10 起原生 Codex helper 完成任务后无法恢复父会话，暂停目标并锁死用户。无 fix PR。
  https://github.com/openclaw/openclaw/issues/196199
- **#154812** Gateway 在 V8 堆外 RSS 失控，导致宿主机 OOM 与关闭超时。无 fix PR。
  https://github.com/openclaw/openclaw/issues/154812
- **#182369** Gateway RSS 每小时约 +0.1 GiB 堆外增长，内部 `rss_threshold` 监控从不触发（2026.9.8 / 2026.10.6）。无 fix PR。
  https://github.com/openclaw/openclaw/issues/182369
- **#193262** 状态目录从 Windows 盘 bind-mount 时 Docker 启动失败（原子写后 ENOENT fstat，回归）。标记 `clawsweeper:not-repro-on-main`，无 fix PR。
  https://github.com/openclaw/openclaw/issues/193262
- **#191476** Matrix 房间在 `image_generate` 完成与新消息竞争后卡在 “Plugin matrix consumer is closed”，后续消息丢失。无 fix PR。
  https://github.com/openclaw/openclaw/issues/191476

### P2（一般）
- **#203876** 浏览器 xAI realtime Talk 反复中断且无后续响应（当日新建，11 评论，`needs-info`）。
  https://github.com/openclaw/openclaw/issues/203876
- **#160494** 绑定持久会话的 cron 在会话轮换时被准入拒绝，且每次调度重试重复同一拒绝。
- **#160719** `sessions.delete` 返回 `ok:true / deleted:false`，当 `session_nodes` 条目无效（`entry_valid=-1`）时静默保留运行中的 `session_windows` 行，无 CLI/doctor/reaper 路径可回收。
- **#177633** Slack huddle `bidi` 会话中，会议双向音频采集拉取在 join 返回后超时，关闭 realtime bridge。
- **#161158** `gateway restart` 在实际成功的重启上报失败且退出码为 0；60s 就绪预算硬编码不可配置。

### 今日关闭的相关项（供参考）
- #187917 更新失败 `updater-runtime-retention`（2026.10.8）— CLOSED（stale）。
- #186326 Windows 受管更新在 npm 布局修复后遇到 handoff SQLite 文件锁超时 — CLOSED。
- #195279 后台 exec 完成唤醒报 “operator execution authority is no longer active” — CLOSED（`needs-security-review`）。
- #157537 claude-cli 重复投递 assistant 消息 — CLOSED。
- #177909 transcript 幂等冲突被当作模型失败并触发跨 provider 回退链 — CLOSED（`linked-pr-open`）。

**稳定性结论**：Gateway 内存（#154812、#182369）与更新流程（#197083、#201468）是当前两大系统性风险，且均缺乏已合并修复；今日关闭的多为 stale 项，不代表根因已解。

---

## 6. 功能请求与路线图信号

| Issue | 内容 | 关联 PR 信号 | 纳入下一版本可能性 |
|---|---|---|---|
| #192632（P2，🦞 diamond lobster） | 新增 `claude` web_search provider，通过独立 Messages 调用使用 Anthropic 服务端 `web_search`，返回与 Gemini/Perplexity 同构的带引用答案 | 材料未见对应 PR | 标记 `needs-product-decision`，短期不确定 |
| #116052（P2） | MCP OAuth 支持预注册客户端（authorization_code），面向无 DCR 的授权服务器 | 材料未见对应 PR | 标记 `needs-security-review` + `needs-product-decision`，需安全评估 |
| #166586（P3） | 订阅 `mcp.servers` 广告的 MCP Events，按事件启动 agent run（类似 `hooks.mappings`） | 材料未见对应 PR | 早期，未排期 |
| #55792（P1） | Gateway 重启后补收停机窗口内丢失的入站消息 | 与本日 v2026.11.7“会话恢复”主题方向一致 | 与版本主线契合，值得关注 |
| #167341（P3） | 允许运维覆盖模型请求失败的用户可见文案（`ASSISTANT_REQUEST_FAILURE_COPY`） | 材料未见对应 PR | 需产品决策 |

**当日已提交的相关修复 PR**（尚待合并）：
- #204019 fix(cron)：解耦 command 任务与 agent heartbeat 启动，使 command 任务在 agent 数据库启动准入待定时仍可运行。https://github.com/openclaw/openclaw/pull/204019
- #204149 fix(agents)：将与其他工具调用同批发送的消息视为“进展”（P1，`needs proof`）。https://github.com/openclaw/openclaw/pull/204149
- #204250 fix：允许已登录 Gateway 用户连接个人 MCP 账号（Closes #138113、#188164、#202434）。https://github.com/openclaw/openclaw/pull/204250
- #203364 fix：将已结算的模型 token 计入 Goal 预算（避免上下文不变时预算被绕过）。https://github.com/openclaw/openclaw/pull/203364
- #204251 fix：超限回复附件明示实际大小与限额。https://github.com/openclaw/openclaw/pull/204251
- #204253 fix：更新回滚后移除 Settings → Updates 与 `openclaw update status` 的重复失败详情。https://github.com/openclaw/openclaw/pull/204253

---

## 7. 用户反馈摘要

**主要痛点**
1. **升级体验不可逆**：升级中断后既不能回滚也无法完成（#197083、#187917、#186326），用户明确描述被“卡在部分定稿”状态。
2. **成本不可控**：prompt 缓存零命中（#182891）使每轮按 cache-write 计价；另有用户指出委派 ACP 运行的 token/成本未记账，父轮 $0.04 对子运行 $14.14（#130257）。
3. **资源与硬件损耗**：Gateway 堆外 RSS 持续增长直至 OOM（#154812、#182369），以及插件捕获造成 SSD 磨损（#157989）。
4. **消息与会话丢失**：Matrix 消费者关闭后房间卡死（#191476）、Codex helper 无法恢复父会话（#196199）、重启期间入站消息静默丢弃（#55792）、`sessions.delete` 静默失败（#160719）。
5. **诊断信息不足**：macOS 启动告警只给通用凭据恢复步骤（#201468）；附件超限只报“Too large”不给限制值（#204251 正在修）。

**使用场景**：自托管 Gateway 作为 systemd 用户服务、单用户部署并运行大量 Discord 频道与约 50 个 cron 任务（#182369）；Docker Desktop + WSL2 下把状态目录 bind-mount 自 Windows 盘（#193262）；Slack huddle 实时双向音频（#177633）；Control UI / webchat 长会话（#202518）。

**满意度方面的正向信号**：多个 Issue 中用户详细复现并主动配合验证（如 #160719 用 `VACUUM INTO` 复制库测 schema 与外键、#160494 明确说明“无法从安装中识别准入守卫、不会猜测”），说明用户对项目投入度高、愿意共建。

**不满点**：长期 stale 后关闭但问题仍在（#177909、#157537 等均为 CLOSED 但仍涉及真实行为缺陷），以及多处 `clawsweeper:no-new-fix-pr` 使高严重度议题长期无修复入口。

---

## 8. 待处理积压

以下为创建时间较早、仍 OPEN 且评论活跃、重要性较高的条目（维护者关注建议）：

| Issue | 创建日期 | 严重度 | 积压情况 |
|---|---|---|---|
| #55792 重启后补收丢失的入站消息 | 2026-03-27 | P1，`impact:message-loss` | 近 8 个月未解，标记 stale + `needs-product-decision` |
| #116052 MCP OAuth 预注册客户端 | 2026-07-29 | P2，`impact:security` | 标记 `needs-security-review` + `needs-product-decision` |
| #130257 ACP 委派运行成本不可归属 | 2026-08-26 | P2，🦞 diamond lobster | 自 2026.6.10 起首次观察，标记 `fix-shape-clear` 但仍 `needs-product-decision` |
| #136271 msteams 频道文件上传动态解析 SharePoint 站点 | 2026-09-02 | P2 | 标记 stale + `not-repro-on-main` |
| #154812 Gateway 堆外 RSS OOM | 2026-09-21 | P1，`crash-loop` | 无 fix PR |
| #157989 插件捕获 SSD 磨损 | 2026-09-25 | P1 | 无 fix PR |
| #160494 / #160719 cron 准入拒绝 / sessions.delete 静默失败 | 2026-09-28 | P2 | 均标记 `fix-shape-clear`（#160719）但仍待维护者与产品决策 |
| #161158 `gateway restart` 误报失败且退出 0 | 2026-09-29 | P2 | 标记 stale，硬编码 60s 预算 |
| #182891 prompt 缓存零复用 | 2026-10-24 | P1 | 27 评论，无 fix PR |
| #196199 Codex helper 无法恢复父会话 | 2026-11-09 | P1 | 17 评论，无 fix PR |
| #192632 claude web_search provider | 2026-11-04 | P2，🦞 diamond lobster | 16 评论，`needs-product-decision` |

**PR 侧积压提醒**
- #192350（GitHub 集成插件化，XL，security-review-required）自 2026-11-03 起 OPEN，依赖 #192349 先行合并。https://github.com/openclaw/openclaw/pull/192350
- #194376（gateway 准入 sessions_send 唤醒）自 2026-11-07 起 OPEN。https://github.com/openclaw/openclaw/pull/194376
- #201712（打包 Windows 下保留受管 GitHub exec，P1）自 2026-11-19 起 OPEN。https://github.com/openclaw/openclaw/pull/201712

---

### 编辑说明
- 材料中两处 Release Highlights 与部分 PR 的“Summary/评论数”在原文被截断或缺失（PR 评论数普遍为 `undefined`），本报告仅呈现可确认内容，未作补充推测。
- 本日数据未包含 star 数、贡献者数等生态指标，故未评估社区规模变化。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-11-23）

## 1. 生态全景

当前生态呈"**一超多强、普遍高活跃、稳定性承压**"格局：OpenClaw 以单日 969 条 Issue/PR 更新、2 个版本的吞吐量遥遥领先，其余项目维持在 20–100 条量级。几乎所有项目的主导矛盾都已从"功能缺失"转向"**可靠性、可恢复性与可观测性**"：升级不可逆、消息静默丢失、通道假成功、资金与存储成本失控是跨项目反复出现的痛点。同时，插件化/Provider 可插拔（NanoBot、Hermes、CoPaw、ZeroClaw、LobsterAI、NanoClaw）成为架构演进的主流路径。发布节奏上，多数项目以小步修复和 canary/beta 推进，缺少大型架构变更落地。整体处于"**能力扩张与质量收敛并行**"阶段。

## 2. 各项目活跃度对比

| 项目 | Issues（新开/关闭） | PR（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 305 / 164（共 469） | 292 / 208（共 500） | 2 个（v2026.11.10-beta.2、v2026.11.7） | 高吞吐，但 P0 更新一致性（#197083、#201468）与 Gateway 内存泄漏（#154812、#182369）无已合并修复 |
| **Hermes Agent** | 46 / 4（共 50） | 36 / 14（共 50） | 1 个 canary | 开发活跃、合入率约 28%，3 条 P1 未解（#145022、#148853、#159067），评审是瓶颈 |
| **ZeroClaw** | 16 / 32（共 48） | 45 / 5（共 50） | 无 | 积压清理显著，但 S1 daemon 启动挂起（#12570）无修复，45 条待合并 |
| **CoPaw** | 23 / 3（共 26） | 34 / 4（共 38） | 1 个 beta（v2.3.1-beta.1） | 社区质量高、fix 响应快，但合并吞吐低（4/38），静默失败类 Bug 集中 |
| **NanoClaw** | 3 / 0 | 18 / 5（共 23） | 无（镜像刷新 PR） | 修复导向，18 条待合并存在吞吐压力 |
| **NanoBot** | 3 / 0 | 8 / 12（共 20） | 无 | 高活跃但贡献者高度集中，两条 WebUI Bug 无 fix PR |
| **LobsterAI** | 1 / 0 | 3 / 13（共 16） | 无 | 合并效率高，DSH 迁移接近收尾；Issue 响应面窄 |
| **PicoClaw** | 1 / 0 | 0 / 4 | 无 | 中等偏低，以清理 7–9 个月旧 PR 为主，QQ 依赖回归无修复 |
| **NullClaw** | 0 | 2 / 0 | 无 | 低活跃，2 条修复待合并（含 MCP 引用计数） |
| **IronClaw / TinyClaw / Moltis / ZeptoClaw** | — | — | — | 过去 24 小时无活动 |

## 3. OpenClaw 在生态中的定位

- **规模与吞吐断层领先**：单日 469 条 Issue 更新、500 条 PR 更新、2 个版本发布，量级约为第二梯队（Hermes、ZeroClaw 各约 50 条）的 10–20 倍，已具备"平台型项目"的社区体量。材料中另有多项目以 OpenClaw 为参照系或采用相似命名（Nan oClaw、PicoClaw、NullClaw、ZeroClaw 等 "Claw" 家族），反映其已成为该品类的命名与架构基准。
- **技术路线差异**：OpenClaw 走**重度自托管 Gateway 核心 + 插件化集成**路线（如 #192350 将 GitHub 集成迁移为插件、#194376 引入 Gateway 准入机制），强调会话恢复、更新恢复与 operator authority 权限模型（#204249）。其复杂度更高，也因此更早暴露大规模用户才会遇到的系统性风险（更新不可逆、RSS 泄漏）。
- **优势**：版本迭代最快（更新恢复、跨重启会话恢复已进版本）、功能覆盖面最广（多渠道、cron、MCP、Control UI）、社区共建质量高（用户提供完整复现与验证）。
- **短板**：P0 级更新一致性与 Gateway 内存问题**均无已合并修复**，且多数标记 `clawsweeper:no-new-fix-pr`；高严重度积压（如 #55792 近 8 个月未解）显示维护带宽已被高吞吐稀释，属"规模领先但稳定性债务最重"。
- **社区规模对比说明**：本批材料未提供各项目 star/贡献者数，无法量化规模差，仅能从更新量级与命名衍生关系判断 OpenClaw 处于生态参照位。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **可靠性与可恢复性** | OpenClaw、Hermes、ZeroClaw、CoPaw、NanoBot、NanoClaw | 升级中断可回滚/续跑（OpenClaw #197083）、重启补收丢失消息（#55792）、SIGUSR1 重启挂起（Hermes #159067）、流式回复中途中止不重试（CoPaw #8864）、附件后回答被静默丢弃（NanoBot #6764） |
| **静默失败与可观测性** | Hermes、CoPaw、ZeroClaw、NanoClaw、OpenClaw | 假成功（Hermes #136592、ZeroClaw #11972）、RPC 异常被吞（CoPaw #8818：`-32603` 且丢弃异常对象）、参数静默丢弃（ZeroClaw #12666）、通道静默死亡（CoPaw #8814） |
| **成本与资源可控** | OpenClaw、NanoBot、Hermes | Prompt 缓存零复用放大成本（OpenClaw #182891）、插件捕获致 SSD 磨损（#157989）、Gateway 堆外 RSS OOM（#154812）、token 预算硬编码（NanoBot #6718）、turn-lease 被写锁饿死（Hermes #139959） |
| **Provider/插件可插拔** | OpenClaw、NanoBot、Hermes、CoPaw、LobsterAI、NanoClaw、ZeroClaw | 插件化集成（OpenClaw #192350）、新 provider 接入（NanoBot #6765、LobsterAI #2818、NanoClaw #4129）、插件 SDK 1.2 与 Harness 解耦（CoPaw #8860/#8764）、Easy 迁移到 `hermes_re`（Hermes #159201） |
| **权限与凭据安全** | OpenClaw、ZeroClaw、Hermes、NanoClaw、LobsterAI | operator authority 收敛（OpenClaw #204249）、凭据作用域化 RFC（ZeroClaw #12422）、审批门绕过（Hermes #159303/#159306）、OAuth/DCR 标准接入（LobsterAI #3163、Hermes #103633、OpenClaw #116052） |
| **跨端/跨运行时一致性** | Hermes、NanoClaw、CoPaw、LobsterAI | 跨平台统一会话（Hermes #62780）、运行器去宿主化以支持 K8s/沙箱（NanoClaw #4543）、Telegram topic 级会话隔离（CoPaw #8857）、多端 IM 渠道扩展（LobsterAI POPO #3160） |
| **WebUI 交互与无障碍** | NanoBot、CoPaw、OpenClaw | 会话管理重构（NanoBot #6761）、表格/代码块横向滚动（CoPaw #8823）、键盘可访问性与 iOS 卡死（CoPaw #8844/#8852）、宽屏多窗格布局（NanoBot #6762） |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全能型：多渠道、cron、MCP、Control UI、更新/会话恢复 | 重度自托管用户、单用户多频道部署（Discord、~50 个 cron） | Gateway 核心 + 插件化 + operator authority 权限模型；systemd/Docker 自托管 |
| **Hermes Agent** | Gateway 会话生命周期、Desktop/Webapp、代理工作区 | VPS/Coolify 自托管者、Windows 服务、多进程高负载主机 | Gateway + SessionDB + turn-lease；正在推进审批走 `hermes_re` 重构 |
| **CoPaw (QwenPaw)** | 多 IM 渠道（微信/飞书/钉钉/Telegram/Discord）+ Console 前端 | 长时间生产部署、双端（Windows 桌面+iOS）、定时巡检 | Harness 解耦为可插拔 Execution SDK，插件 SDK 1.2；强调宿主能力（记忆/工具/路由） |
| **ZeroClaw** | 通道可靠性 + TUI/zerocode + ACP 仪表盘 | 运维者、Termux/Android 移动端 | Rust 工具链；服务凭据作用域、Remote Files、ACP 四层堆叠、SimpleX 通道 |
| **NanoBot** | WebUI 与多渠道本地化 | 个人助手、IM 群工作流、无人值守任务 | WebUI 从单会话向多项目/并发 agent 控制台演进 |
| **NanoClaw** | 渠道适配 + 运行器架构解耦 | Kubernetes/托管/OpenShell 沙箱使用者 | Agent 容器 + 宿主路径映射；网络邮箱去宿主化提案 |
| **LobsterAI** | DeepSeek Harness 迁移 + 桌面助手 + IM 渠道 | 桌面端个人助手、企业信息/法律办公生态方 | DSH 架构迁移收尾，companion 从主动提示转按需上下文 |
| **PicoClaw / NullClaw** | 轻量渠道渲染与工具 | 终端渠道（QQ、Telegram）、MCP 集成 | 小体量修复导向，PicoClaw 曾有大规模目录重构 |

**关键差异**：OpenClaw/Hermes/ZeroClaw 属"**重核心 + 强集成**"，承担最复杂的运行时与权限问题；NanoBot/NullClaw/PicoClaw 偏"**轻量客户端体验**"；NanoClaw/CoPaw 押注"**运行时可移植性与插件 SDK**"；LobsterAI 处于"**迁移后收敛 + 生态接入**"阶段。

## 6. 社区热度与成熟度分层

- **快速迭代层（高活跃、高债务）**：OpenClaw、CoPaw、Hermes、ZeroClaw、NanoClaw、NanoBot。特征是吞吐大、新议题密集、P0/P1 未解项与待合并队列同时膨胀。其中 OpenClaw 属"规模最大的高速迭代者"，Hermes/CoPaw/ZeroClaw 属"评审带宽受限的迭代者"（合入率均显著低于新增）。
- **质量巩固层（高合并率、低新增）**：LobsterAI（13/16 合并）、PicoClaw（清理 7–9 个月旧 PR）、NullClaw（仅 2 条待合并修复）。特征是功能主线收敛、以修复和迁移收尾为主。
- **低活跃/停滞**：IronClaw、TinyClaw、Moltis、ZeptoClaw 当日无活动。

**成熟度判断**：尚无项目进入"稳定期"。最接近质量巩固的是 LobsterAI（DSH 迁移收尾）与 PicoClaw；OpenClaw 虽规模最大，但 P0 未解使其成熟度受稳定性拖累，呈"大而不稳"。

## 7. 值得关注的趋势信号（对 AI 智能体开发者的参考）

1. **"可恢复性"正在取代"新功能"成为竞争焦点**。更新中断可续跑（OpenClaw）、跨重启会话恢复、drain 期优雅退出（Hermes #159067）、流式中断可重试（CoPaw #8864）——提示开发者应把幂等、可回滚、断点续传设计为运行时的一等公民，而非事后补丁。
2. **静默失败是信任的最大杀手**。多项目用户反复抱怨"假成功、无提示、异常被吞"（CoPaw `-32603`、ZeroClaw #11972/#12666、Hermes #136592）。**失败显式化 + 结构化错误信号 + 可诊断日志**（如 NanoClaw #4151 的结构化 `auth_expired`、CoPaw #8818 保留异常对象）应作为默认工程规范。
3. **成本与资源可控成为生产部署门槛**。Prompt 缓存复用、SSD 磨损、RSS 泄漏、token 预算硬编码、委派运行成本不可归属（OpenClaw #130257）——成本可观测性（per-run 计费、缓存命中监控、资源阈值告警）正在从"nice to have"变为必需能力。
4. **Provider/插件可插拔是架构共识**。几乎所有活跃项目都在做 provider 扩容或 SDK 化（CoPaw Execution SDK、ZeroClaw Remote Files、NanoBot/LobsterAI 新 provider）。**标准化的 MCP + OAuth/DCR 授权**（LobsterAI #3163、Hermes #103633、OpenClaw #116052）正成为第三方生态接入的硬门槛。
5. **凭据"可用不可见"是权限模型的新前线**。ZeroClaw #12422（凭据作用域化，15 条评论居首）与 OpenClaw operator authority 收敛共同指向：agent 应能**使用**凭据完成任务而不**暴露**凭据本身，这是从"工具调用"走向"可信代理"的关键跃迁。
6. **运行器去宿主化支持沙箱/云原生**。NanoClaw #4543 网络邮箱、Hermes 跨平台统一会话、CoPaw topic 级会话隔离——多运行时（K8s/托管/OpenShell）与多端一致正推动 agent 运行时与宿主解耦。
7. **依赖与供应链治理需前置**。PicoClaw #3472（resty 版本漂移致 QQ 通道全挂）、NanoClaw #4552（lockfile 漂移无校验）、ZeroClaw RUSTSEC-2026-0594——**版本锁定 + 依赖升级测试 + cargo audit 门禁**应纳入 CI 标配。
8. **维护带宽是生态规模化后的真正瓶颈**。OpenClaw、Hermes、CoPaw、ZeroClaw 均出现"新增远高于合入"、待合并 PR 含大量 XL/冲突项。建议借鉴分层分流（Dependabot 机械更新与核心修复分离）、限定堆叠 PR 链长度、建立 stale 策略与定期评审窗口。

---

*说明：本报告严格基于所提供各项目日报材料生成；材料未提供 star 数、贡献者数、评论数缺失项等，相关规模与热度判断已据更新量级与内容作出，未作数据外推。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-11-23

## 1. 今日速览

项目今日维持高强度开发节奏：24 小时内 20 条 PR 更新（8 条待合并、12 条已合并/关闭），Issues 端 3 条均为新开/活跃、零关闭。PR 侧几乎全部由同一贡献者（chengyongru）推动，集中在 WebUI 与多渠道本地化，表明当前迭代焦点是客户端体验而非核心运行时。两个新报的 WebUI Bug（#6718、#6764）尚未有对应 fix PR 出现，是本日最值得关注的稳定性缺口。整体活跃度高，但贡献者集中度偏高、Issue 关闭率为零，健康度存在结构性隐忧。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日已合并/关闭的 12 条 PR 以 WebUI、渠道与测试整理为主，均标注 priority: p2：

- **[#6762] fix(webui): adapt message actions to the chat pane width**（已关闭）— 修复消息操作控件依据浏览器宽度而非会话面板可用宽度布局的问题，解决宽屏多窗格下操作按钮挤入侧边栏。
  https://github.com/HKUDS/nanobot/pull/6762
- **[#6758] fix(webui): honor the /model result before displaying or using a preset**（已关闭）— 修复 WebUI 选择器在 gateway 返回错误时仍视作切换成功、导致显示错误预设或首条 prompt 使用旧预设的问题。
  https://github.com/HKUDS/nanobot/pull/6758
- **[#6757] fix(commands): deliver deferred receipts in order to the original session**（已关闭）— 推迟的 Dream 任务改为在确认回执之后启动，增加存储错误重试与会话代际校验，结构化负载超限时回退为文本。
  https://github.com/HKUDS/nanobot/pull/6757
- **[#6760] feat(channels): localize native Telegram, Discord and Feishu command feedback**（已关闭）— 使用 Telegram/Discord 的 locale 信息本地化原生菜单与命令回复。
  https://github.com/HKUDS/nanobot/pull/6760
- **[#6759] feat(clients): localize slash menus and preserve command reply text**（已关闭）— 命令菜单按请求语言本地化，回放/搜索/复制使用保存的原文，移除客户端英文文本匹配。
  https://github.com/HKUDS/nanobot/pull/6759
- **[#6763] test: consolidate overlapping coverage across runtime and clients**（已关闭）— 不改变生产代码与覆盖率阈值，跨 86 个测试文件移除/替换 166 个旧测试标识，新增 10 个归组标识。
  https://github.com/HKUDS/nanobot/pull/6763
- **[#6747] Localize built-in slash command results across chat clients**（已关闭）— 作为原始聚合 diff 保留讨论，实际由上述拆分 PR 合入。
  https://github.com/HKUDS/nanobot/pull/6747

**推进幅度评估**：本地化工作（#6747 拆分系列）已基本落地，覆盖 WebUI、Telegram、Discord、Feishu 四端；WebUI 两个 p2 缺陷修复完成。但合并内容均为中小粒度改进，无核心架构变更，项目今日属"稳步前进"而非"显著跃迁"。

## 4. 社区热点

- **#6718 [bug] WebUI title generation fails with Kimi K3.1 Pro because the 96-token budget is exhausted**（2 条评论，本日唯一有讨论的 Issue）
  https://github.com/HKUDS/nanobot/issues/6718
  诉求核心：通过 OpenAI 兼容 provider 接入第三方模型时，标题生成固定 96 token 预算过紧，主回复成功但话题标题停在 "Untitled"。反映用户对**非官方模型接入路径的兼容韧性**有较强预期，且该 Issue 自 11-18 创建、今日仍在更新，说明问题未被快速收敛。

- **PR #6323 [webui] edit and resend messages in the same session**（自 10-20 持续活跃，作者称 20 项 CI 全通过）
  https://github.com/HKUDS/nanobot/pull/6323
  长期开放的 WebUI 核心交互增强，是当前待合并队列中生命周期最长的功能类 PR 之一。

- **PR #6761 [webui] redesign session management with Mission Control, Live Pulse bar, and Active Drawer**（今日新建）
  https://github.com/HKUDS/nanobot/pull/6761
  纯前端重构，针对 272px 侧边栏在多项目、并发 agent 场景下的空间不足，是今日社区中信号最强的方向性提案。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — #6764 [bug] WebUI drops a streamed answer after an attachment in the same turn**（新开，0 评论，无 fix PR）
   https://github.com/HKUDS/nanobot/issues/6764
   同一轮对话中发送附件+说明后再流式输出独立回答时，WebUI 丢弃整段后续回答，但该轮仍标记完成。属**内容静默丢失**，用户可能无感知地错过回复，数据完整性问题优先级应高于一般 UI 缺陷。

2. **中 — #6718 [bug] WebUI title generation fails with Kimi K3.1 Pro**（11-18 创建，今日仍活跃，0 👍，无 fix PR）
   https://github.com/HKUDS/nanobot/issues/6718
   影响范围限于标题生成，不阻断主对话流程，但暴露 token 预算硬编码对第三方模型的适配脆弱性。

3. **已收敛 — /model 误判成功与消息操作布局问题**：分别由 #6758、#6762 修复并关闭，今日无新增回归报告。

**稳定性判断**：今日无崩溃或回归类报告；但两条 OPEN Bug 均无对应 fix PR，且均集中在 WebUI 层，提示 WebUI 是当前缺陷密度较高的模块。

## 6. 功能请求与路线图信号

- **#6765 [feat] add bf16.ai built-in uncensored LLM gateway provider**（今日新开，0 评论）
  https://github.com/HKUDS/nanobot/issues/6765
  面向无人值守 agent 例行任务、多步工具链、安全/日志分诊与 IM 群工作流，诉求是减少主流托管 API 的"误报式拒答"。属 provider 层新增，需评估合规与滥用风险，短期内更可能以可插拔 provider 形式讨论而非直接合入。

- **#6761 WebUI 会话管理重构**（PR 今日新建，待合并）
  https://github.com/HKUDS/nanobot/pull/6761
  与 #6323（同会话内编辑重发）、#6240（模型预设使用说明）共同指向同一方向：**WebUI 从单会话聊天框演进为多项目/并发 agent 控制台**。若 #6761 与 #6323 合并，将是下一版本最可能的用户可见变化。

- **#6240 modelPresets 描述字段**（待合并，含 conflict 标签）
  https://github.com/HKUDS/nanobot/pull/6240
  纯持久化元数据、不影响生成与路由，落地成本低，但冲突状态使其排期不确定。

## 7. 用户反馈摘要

- **真实痛点（#6718）**：用户通过 OpenAI 兼容层接入 Kimi K3.1 Pro，主链路可用而附属能力（标题生成）失效——痛点不在"能不能用"，而在"接入第三方模型后功能是否整体一致"。
- **真实痛点（#6764）**：附件与流式回答混合的同一轮对话中，回答被静默丢弃且轮次仍判定完成，属于信任类问题：用户无法从界面判断内容是否缺失。
- **使用场景（#6765）**：无人值守 `nanobot` 个人助手例行任务、多步工具链、安全/日志分诊、IM 群工作流——说明用户已将项目用于长时无人监管场景，对模型拒答的容忍度低。
- **满意度信号**：PR #6323 作者主动披露 20 项 CI 全通过并标注 head commit 与 base 快照，反映贡献者对合并质量的自我要求较高。
- **不满意信号**：本日 3 条 Issue 中 2 条为 Bug 且评论稀少（#6765、#6764 均为 0 评论），维护者响应尚未在数据中体现。

## 8. 待处理积压

以下 PR 长期开放且今日仍在更新，建议维护者优先分流：

- **#4618 [security] fix(mcp): prevent enabledTools name collisions** — 创建于 2026-07-01，已积压约 4.7 个月，带 `security` 与 `conflict` 标签。涉及 MCP 工具身份混淆（如 `demo.read` 类原始名经有损清洗后可能授权到不同工具），属能力边界硬化，安全议题不应长期滞留。
  https://github.com/HKUDS/nanobot/pull/4618
- **#6163 [fix] deliver provider retry waits through an opt-in hook** — 创建于 2026-10-11，修复 #5585：`RetryWaitEvent` 在 `ChannelManager._dispatch_outbound_loop` 中被无条件丢弃。带 `conflict` 标签。
  https://github.com/HKUDS/nanobot/pull/6163
- **#6240 feat(models): add preset usage descriptions** — 创建于 2026-10-16，带 `conflict` 标签，实现成本低但长期未合。
  https://github.com/HKUDS/nanobot/pull/6240
- **#6497 [p1] fix(agent): isolate inline command failures** — 创建于 2026-10-27，标注 priority: p1：`/status` 在 `AgentLoop.run()` 中内联执行，绕过 session worker 的异常处理，未捕获异常会逃逸命令处理器并终止消费者。**p1 标签与近一个月的开放时长不匹配，是最应优先处理的积压项**。
  https://github.com/HKUDS/nanobot/pull/6497
- **#6680 [fix] isolate server startup and retries from chat** — 创建于 2026-11-16，带 `conflict` 标签：慢速 MCP server 不再阻塞普通对话，10 秒报告慢启动、60 秒取消未完成启动。
  https://github.com/HKUDS/nanobot/pull/6680

**结构性提醒**：待合并队列中 4 条带 `conflict` 标签，且多条生命周期超过一个月；同时今日 3 条 Issue 零关闭。建议安排一次集中 rebase 与 Issue 分诊，避免冲突累积进一步抬高合并成本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-11-23

## 1. 今日速览

过去24小时项目保持高强度运转：Issues 更新 50 条（新开/活跃 46、关闭 4），PR 更新 50 条（待合并 36、已合并/关闭 14），并发布 1 个 canary 版本（v0.23.3+canary.20261123T065600Z）。**合入率偏低（约 28%）**，待合并队列持续膨胀，评审带宽是当前最明显的瓶颈。活跃度集中在 gateway/session 生命周期与二进制大版本遗留问题上，P1 级故障仍有 3 条处于开启状态。整体健康度：**开发侧高活跃、稳定性侧承压**。

## 2. 版本发布

**canary.20261123T065600Z-v0.23.3**（发布于 2026-11-23）
- 属 canary 预发布通道，release note 主体为构建产物下载表（Hermes Desktop macOS Apple Silicon DMG 等），未列出具体功能变更或破坏性变更说明。
- **迁移注意事项**：该条目未声明破坏性变更；建议仅限尝鲜用户使用，生产环境等待稳定版。
- ⚠️ 关联缺陷：同日 Issue #159217 报告 `hermes --version` 与启动横幅仍显示旧发布日期 2026.9.24，原因是 `__release_date__` 未被更新；该问题在 v0.23.3 上可复现。
- 链接：Releases 页（canary.20261123T065600Z-v0.23.3）

## 3. 项目进展

> 说明：以下“已合并/关闭”条目源于今日统计（14 条 PR 完成），但明细未提供；可见的关闭项为 Issue #150712。

- **Issue #150712 [CLOSED]**（P3，install-update）：VPS + Coolify 下基础部署无法跑通的问题已关闭，缓解了新手自托管入口的摩擦。链接：NousResearch/hermes-agent Issue #150712
- **PR 侧推进方向**（均为 OPEN，尚未落地）：代理工作区重设计集成分支 #152168、profile 异地托管 #156725、会话历史分页 #125197、审批表迁移至 `hermes_re` #159201——显示架构层（会话、审批、插件运行时）重构正在分栈推进。
- 整体判断：今日**净前进量有限**，更多是问题收敛与评审排队；36 条待合并 PR 中有多条属于堆叠 PR 链（如 #152168 依赖 #157276–#157536 系列），合并节奏受链式依赖牵制。

## 4. 社区热点

| 排名 | 条目 | 评论 | 诉求分析 |
|---|---|---|---|
| 1 | **#145022** [P1] Kanban worker 崩溃：“Kanban execution unknown; retained by owner” | 29 | 多 worker 并发 + gateway 卡顿导致在途工作丢失，是**调度可靠性**的核心痛点。链接：Issue #145022 |
| 2 | **#155595** profile 生命周期跟踪帖 | 23 | 集中式 handoff tracker，反映 profile 供给/Honcho 清理等**大型战役需要跨团队协调**。链接：Issue #155595 |
| 3 | **#94018** Desktop `@bot` 交接回归（👍2） | 8 | 机器人交接链路断裂，属**能力回归**而非新需求。链接：Issue #94018 |
| 4 | **#62780** 跨平台统一会话（👍1） | 8 | 用户希望任一客户端可接续同一会话，是**多端一致性**的长线愿景。链接：Issue #62780 |
| 5 | **#156129** Webapp localStorage 满导致发送中止 | 8 | 浏览器客户端存储策略缺陷，影响 Webapp 日常可用性。链接：Issue #156129 |
| 6 | **#159067** Gateway SIGUSR1 重启在 draining 挂起 | 6 | 当日新开，异常被吞、看门狗被解除，**运维可观测性**问题。链接：Issue #159067 |

**结论**：讨论热度高度集中于 gateway/session 状态机，社区对“会话不丢、交接不断、重启不挂”的诉求最强烈。

## 5. Bug 与稳定性（按严重度）

**P1（严重）**
- **#145022** Kanban worker 崩溃致在途工作丢失（29 评论，长期未解）。**未见 fix PR**。
- **#148853** gateway liveness 看门狗硬退出仍可能被 stderr 堆栈转储或前台清理锁阻塞。**未见 fix PR**（此前 #148851 的遗留）。
- **#159067** SIGUSR1 重启时 `stop()` 抛异常导致 draining 挂起、异常不记录。当日新报，**未见 fix PR**。

**P2（中高）**
- **#139959** 多 worker 下 turn-lease 续租被 SessionDB 写锁饿死，长会话被硬中断（`session_turn_lease_lost`）。无 fix PR。
- **#144932** Windows `pythonw` 服务下 gateway 崩溃循环（`sys.stdout=None`）。无 fix PR。
- **#148937** 显式 `hermes auth reset` 被陈旧写入者回并模型级冷却覆盖。无 fix PR。
- **#156129** Webapp localStorage 满导致发送中止。无 fix PR。
- **#128641** SQLite 3.45 下 `hermes doctor --fix` 误判 FTS-only 损坏。无 fix PR。
- **#136592** `browser_vault_fill` 报告成功但 DOM 未变（安全边界标注）。无 fix PR。
- **#159217** 版本号/横幅发布日期陈旧。无 fix PR。

**P3 / 其他**
- **#133361** fallback 链耗尽时应退出 75（rate_limited）而非计为崩溃退出 1。
- **#137284** `-desktop` 镜像缺 AT-SPI 总线，computer_use 可访问树为空。
- **#103633** MCP OAuth 带路径的服务器 code→token 交换失败。

**有 fix PR 对应的项**（PR 均 OPEN，未合并）：
- 存储 flock 陈旧破锁误删后继活锁 → **#159356**
- 压缩结构空转在上下文增长后不重试 → **#137509**
- 启动 git 探针未限制孤儿后代进程 → **#145055**
- gateway 有界控制读被串行队列阻塞 → **#144701**
- `browser_exec` 代码执行未过审批门 → **#159303**（安全）
- 文件写入/删除可触达 `/dev`、`/proc`、`/sys` → **#159306**（安全）
- Windows TTS 尾部被截断 → **#159361**

## 6. 功能请求与路线图信号

| 需求 | 条目 | 关联 PR / 判断 |
|---|---|---|
| 跨平台统一会话 | #62780 | 有 #125197（会话历史按最新消息截断）作为配套基础，**中期有望推进** |
| Desktop `@bot` 交接恢复 | #94018 | 标 `needs-decision`，需产品决策，短期难落地 |
| Ruby 工具调用 💎 图标 | #156660 | 低风险小改动，**易合入** |
| profile 生命周期完善 | #155595 | #156725（插件异地托管 profile）、#159075（messaging turn origin API）为其铺路，**下一版本重点候选** |
| 插件安装链接分享 | #159347 | 当日新 PR，配套生态分享原语，**候选小特性** |
| 代理工作区重设计 | — | #152168 集成分支 + 9 段堆叠链，**大版本级变更，节奏取决于评审** |
| 审批走 `hermes_re` 重构 | — | #159201 明确“需含 S0 的版本先发布 + musl/Termux 轮子就绪”，**排期靠后** |

## 7. 用户反馈摘要

- **真实使用场景**：VPS + Coolify/Docker 自托管（#150712）；NSSM Windows 服务以 `pythonw` 运行 gateway（#144932）；Windows CPython 3.12 自带 SQLite 环境（#128641）；macOS arm64 源码安装（#148937）；多进程共享 `state.db` 的高负载主机（#139959）；Centaur 之外的浏览器 Webapp 客户端（#156129）。
- **满意点**：早期版本可用（#103633 提到 v0.18 可用）；Desktop 客户端渲染窗口与工具图标等细节体验获正面关注（#156660 语气轻松）。
- **不满意点**：
  1. **静默失败与假成功**：#136592 报告成功但实际未填；#159067 异常从不记录——用户核心不满是“看不见的故障”。
  2. **工作丢失**：#145022 重试但丢失在途进度，#139959 打断健康长会话。
  3. **发布卫生**：#159217 版本元数据陈旧，影响用户判断版本新旧。
  4. **平台覆盖**：Windows 与容器（AT-SPI）路径问题反复出现。

## 8. 待处理积压（提醒维护者）

| 条目 | 类型 | 首次创建 | 状态 |
|---|---|---|---|
| **#62780** 跨平台统一会话 | P3 路线级 | 2026-07-11 | 开启，标 `needs-decision`，累计 4 个月 |
| **#94018** Desktop `@bot` 交接回归 | P2 功能 | 2026-08-24 | 开启，`needs-decision`，3 个月 |
| **#103633** MCP OAuth 路径服务器失败 | P2 auth | 2026-09-05 | 开启，跨多个版本未解 |
| **#128641** SQLite 3.45 误判损坏 | P2 | 2026-09-29 | 开启，Windows 平台风险标签 |
| **#133361** Kanban 退出码语义错误 | P3 | 2026-10-05 | 开启，与 #145022 同属调度语义 |
| **#136592** browser_vault_fill 假成功 | P2 安全边界 | 2026-10-11 | 开启 |
| **#142712** 双 home 插件破坏 `uv lock` | P2 profile | 2026-10-21 | 开启 |
| **#145022** Kanban worker 崩溃 | **P1** | 2026-10-26 | 评论最多（29）却近一月未解决，**优先级最高** |
| **#152168** 代理工作区重设计集成分支 | 大特性 | 2026-11-09 | 堆叠链长，评审带宽风险 |

**维护者建议**：优先为两条 P1（#145022、#148853）指定负责人并给出里程碑；对 `needs-decision` 的 #62780、#94018 明确取舍；控制堆叠 PR 链长度以避免待合并队列继续膨胀。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-23）

## 1. 今日速览

今日项目活跃度**中等偏低**，以清理历史积压为主。24 小时内无新版本发布，Issues 仅有 1 条新开，无关闭；PR 侧共 4 条被关闭/合并，但均非当日新建，而是长期挂起的旧 PR 在今日完成处置。值得注意的是，今日唯一的新 Issue（#3472）是一个影响 QQ 频道启动的依赖版本回归缺陷，尚无修复 PR。整体来看，项目今日表现为“维护型”状态：处理存量、暴露新问题，缺少功能层面的实质性推进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日关闭/合并的 4 条 PR 全部为存量积压处置，**无当日新建并合入的改动**：

- **#2810（CLOSED）** — 下游分支 `nuestraai/magicform` 与上游 `upstream/main` 同步约 1095 个提交，并将其 6 个定制提交前向移植到上游重构后的目录结构（agent loop 拆分为 `agent_*.go`、工具重新组织）。这是体量最大的一条，表明项目在此期间经历了大规模内部重构。链接：https://github.com/sipeed/picoclaw/pull/2810
- **#1546（CLOSED）** — 批量合并 #1480、#1479、#1478、#1473、#1467 五个修复型 PR。链接：https://github.com/sipeed/picoclaw/pull/1546
- **#423（CLOSED）** — 多智能体协作框架 WIP（共享上下文池、agent handoff、发现工具），基于已合并的 #213（provider 协议重构）与 #131（模型 fallback 链）构建。链接：https://github.com/sipeed/picoclaw/pull/423
- **#2516（CLOSED）** — CI 维护：移除 sync-rebase workflow 的每日 `0 0 * * *` 定时触发，保留 `workflow_dispatch` 手动运行。链接：https://github.com/sipeed/picoclaw/pull/2516

**推进评估**：今日进展主要体现为存量清理与 CI 精简。由于数据未提供各 PR 是“合并”还是“关闭未合并”的最终状态，无法确认其中实际进入主干的代码量；从标题看，#423 标注为 WIP，其完成度存疑。

## 4. 社区热点

今日**无高热度讨论**：唯一新 Issue #3472 评论数为 0、👍 为 0；4 条 PR 的评论数据缺失且反应数均为 0。无明显社区讨论焦点。

唯一值得关注的入口是 #3472（见下节），它反映的是 QQ 渠道用户对开箱可用性的诉求：
https://github.com/sipeed/picoclaw/issues/3472

## 5. Bug 与稳定性

按严重程度排列：

- **【高】#3472 QQ 频道启动失败，error 11241 “Authorization header format error”**
  作者 redbrotherchen，2026-11-23 创建并更新，0 评论。
  根因定位为依赖版本回归：botgo v0.2.1 预期 resty v2.6.0，实际解析到 resty v2.17.1，导致鉴权头格式错误，QQ 频道无法启动。
  **修复状态：暂无 fix PR**，建议优先处理依赖锁定（pin resty 版本或升级 botgo）。
  链接：https://github.com/sipeed/picoclaw/pull/3472 → 实际为 https://github.com/sipeed/picoclaw/issues/3472

## 6. 功能请求与路线图信号

今日**无新增功能请求**。存量信号方面，PR #423 涉及的多智能体协作框架（共享上下文池、agent handoff、发现工具）属于路线图级别的能力，可作为下一版本方向的参考依据。但由于该 PR 为 WIP 且今日已关闭，是否重新进入开发议程需维护者明确。链接：https://github.com/sipeed/picoclaw/pull/423

## 7. 用户反馈摘要

可提炼的信息有限（#3472 无评论）：

- **痛点**：依赖版本漂移导致 QQ 渠道开箱即失败，属典型的传递依赖未锁定问题，对终端用户表现为“鉴权头格式错误”，排查门槛较高。
- **使用场景**：QQ 频道作为消息接入渠道的实际部署。
- **满意/不满意**：数据中无正面反馈记录；#3472 代表一次明确的负面开箱体验。

## 8. 待处理积压

- **#3472（OPEN，0 评论，0 👍）** — 今日新开但无任何响应，属影响渠道可用性的高优缺陷，建议尽快分派。https://github.com/sipeed/picoclaw/issues/3472
- **长期挂起的 PR 已集中关闭**：#2810（创建于 2026-05-07）、#423（创建于 2026-02-18）、#1546（创建于 2026-03-14）、#2516（创建于 2026-04-14），均在今日（2026-11-23）才被处置，跨度 7–9 个月，反映 PR 评审周期偏长。其中 #423 为 WIP 状态关闭，若该方向仍有价值，建议维护者给出明确结论或重开路径。https://github.com/sipeed/picoclaw/pull/423

---

**健康度提示**：今日数据指向两个结构性信号——(1) 依赖管理需引入版本锁定与依赖升级测试，避免 #3472 类回归；(2) 存量 PR 平均滞留时间过长，建议建立 stale 策略或定期评审窗口。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-23

## 1. 今日速览

项目今日无新版本发布，但开发活动集中在 Pull Request 环节：过去 24 小时共 23 条 PR 更新，其中 18 条待合并、5 条已合并或关闭，另有 3 条 Issue 更新（均为新开，无关闭）。今日活跃议题主要集中在**渠道适配层**（Signal 附件可达性、channels 依赖版本漂移）和**运行器架构解耦**（网络邮箱、宿主 sweep 收尾）两个方向。整体看，项目处于持续修复与基础设施加固阶段，社区提交的贡献占比较高，但待合并 PR 数量（18 条）相对偏高，存在合并吞吐压力。

---

## 2. 版本发布

今日无新版本发布，Agent 镜像仅有常规刷新：

- **#4551** 将 `v2026.11.0` 的加固镜像指向 `v2026.11.0-20261123T0325`（由 `nanoclaw-image-refresh[bot]` 自动创建，待合并）
  https://github.com/nanocoai/nanoclaw/pull/4551

---

## 3. 项目进展

今日合并或关闭的 5 条 PR 中，明确体现推进的工作包括：

- **#2500** `feat: add /add-early-compact-nudge feature skill`（已关闭）：新增功能技能，当有效上下文超过阈值时，向当前 SDK 查询注入一次性的 `<system-reminder>`，推进上下文压缩管理能力。
  https://github.com/nanocoai/nanoclaw/pull/2500
- **#4151** `fix: propagate structured Codex auth failures`（已关闭）：使 Codex 鉴权过期能以结构化信号（`provider: "codex", kind: "auth_expired"`）传递，供 Argus 做账户故障转移，提升多账户运行的鲁棒性。
  https://github.com/nanocoai/nanoclaw/pull/4151

其余 3 条已关闭项均为依赖升级（如 **#4310** `@clack/prompts` 1.2.0 → 1.8.1），属例行维护。
https://github.com/nanocoai/nanoclaw/pull/4310

整体推进以**缺陷修复与依赖维护**为主，未见大型功能落地；项目在稳定性维度前进一小步，核心架构演进仍滞留在待合并队列。

---

## 4. 社区热点

今日评论数（按数据）较高的议题如下：

- **Issue #2528**（2 条评论）Signal 渠道图片/PDF 附件在 agent 容器内无法读取
  https://github.com/nanocoai/nanoclaw/Issue/2528
- **Issue #4543**（1 条评论）网络邮箱提案：让 session runner 无需挂载共享 session 目录
  https://github.com/nanocoai/nanoclaw/Issue/4543

**诉求分析**：
- #2528 反映的是**容器权限与宿主路径映射**的经典矛盾：signal-cli 将附件保存到宿主目录，但适配器把宿主路径直接交给容器内 agent，导致读不到。#4544 已给出 fix（将入站附件内联），说明社区对该问题响应迅速。
- #4543 指向更宏大的**运行器去宿主化**需求：远程 / 托管 / Kubernetes / OpenShell 等沙箱运行时无法访问宿主路径，因此需要网络邮箱替代共享 DB 与出站队列。这是架构层面的诉求，而非修补。

（注：数据中 PR 的评论数均为 `undefined`，无法按评论量排序，故以 Issue 讨论为主。）

---

## 5. Bug 与稳定性

按严重程度排列：

**中等 — 已有 fix PR**
- **#2528** Signal 渠道图片/PDF 附件无法从 agent 容器访问（`kind/bug`）
  https://github.com/nanocoai/nanoclaw/Issue/2528
  → 已有修复 **#4544**：将入站附件内联，使 agent 容器可直接读取（待合并）
  https://github.com/nanocoai/nanoclaw/pull/4544

**低-中 — 无 fix PR，属维护性风险**
- **#4552** `channels` 分支的 `package.json` 与 lockfile 可能与 skill 锁定的版本漂移，且无检查能捕获（`kind/bug, triage/unresolved`）
  https://github.com/nanocoai/nanoclaw/Issue/4552
  该问题不直接导致崩溃，但可能引发渠道适配器版本不一致的隐性故障，属供应链一致性风险。

**安全隐患（已在修复中）**
- **#4553** AnyDoc CLI 从 0.1.6 升至 0.2.5：旧版依赖的 `zip` crate 存在严重 CVE，影响 docx/xlsx/pptx 等 ZIP 格式解析
  https://github.com/nanocoai/nanoclaw/pull/4553

---

## 6. 功能请求与路线图信号

- **#4543 网络邮箱**（capability）：让 session runner 摆脱对宿主 session 目录的依赖（两个 session DB、心跳、outbox），支持远程/托管/沙箱运行时。**判断**：属架构级能力，当前仅有 Issue、无对应 PR，短期内落地概率较低，但方向与容器化/多运行时趋势一致，值得纳入路线图讨论。
  https://github.com/nanocoai/nanoclaw/Issue/4543
- **#4129 新增 pi agent provider**（`/add-pi` payload skill，feature skill，待合并）：扩展 provider 生态。
  https://github.com/nanocoai/nanoclaw/pull/4129
- **#4084 安装流程跟随克隆分支**（feature，待合并）：新安装自动沿用克隆分支的更新通道，不再询问、不移动 checkout，改善安装体验。
  https://github.com/nanocoai/nanoclaw/pull/4084

**可能纳入下一版本**：#4129、#4084 均已具备完整技能/实现与模板合规标签（`follows-guidelines`、`core-team`），是较现实的候选；#4543 更可能作为中长期规划。

---

## 7. 用户反馈摘要

- **容器可见性痛点**（#2528，brentkearney）：在 v2 安装通过 `/add-signal` 接入 Signal 后，手机上发送的带图 DM 在宿主侧可见，但容器内 agent 打不开——典型「宿主能拿到、容器拿不到」的路径隔离问题，影响真实文件处理场景。
- **部署灵活性诉求**（#4543，chiptoe-svg）：使用者希望在 Kubernetes、托管环境或 OpenShell 等沙箱中运行 runner，但当前强制挂载宿主路径成为硬性门槛，限制了部署形态。
- **版本一致性担忧**（#4552，glifocat）：`channels` 分支自带独立 `package.json` 与 lockfile，与 skill 固定版本之间可能漂移且无校验，反映维护者对多渠道发布一致性的不满。
- **安全升级**（#4553）：AnyDoc 旧版 `zip` crate 存在严重 CVE，属主动安全加固反馈。
- 满意度/不满数据不足：所给材料未包含 👍 反应与完整评论内容，暂无正面评价可提炼。

---

## 8. 待处理积压

以下 PR 创建时间较早、至今仍待合并，建议维护者优先关注：

- **#4084**（2026-10-13 创建）安装流程跟随克隆分支，core-team 提交，已积压约 6 周
  https://github.com/nanocoai/nanoclaw/pull/4084
- **#3755**（2026-09-09 创建）`fix(agent-runner): sweep processing_ack rows whose message no longer exists`——`sqliteGetPendingMessages` 对 `processing_ack` 全表过滤且无时间界，可能随表增长拖慢消息查询，属性能隐患，积压已超 2 个月
  https://github.com/nanocoai/nanoclaw/pull/3755
- **#4129**（2026-10-19 创建）pi agent provider 功能技能，待合并
  https://github.com/nanocoai/nanoclaw/pull/4129
- **#4166**（2026-10-21 创建）`fix(add-codex)`：Codex 在 `willRetry: true` 的自动重试期间不再让回复失败，属用户可感知的稳定性修复
  https://github.com/nanocoai/nanoclaw/pull/4166

**健康度提示**：待合并 PR 18 条、多条超 30 天未合入，而今日仅关闭 5 条，合并吞吐低于新增速度。建议在依赖类 PR（Dependabot 多条，如 #4532、#4274、#4549）与功能/修复类 PR 之间建立分流策略，避免核心修复被机械性更新淹没。

---

*说明：本报告所有内容均严格基于所提供的 GitHub 数据生成；PR 评论数在原数据中为 `undefined`，故热点部分以 Issue 讨论为依据。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-11-23

## 1. 今日速览

NullClaw 今日活跃度偏低但方向明确：过去 24 小时无 Issues 更新、无新版本发布，仅 2 条 PR 处于待合并状态。两条待合并 PR 均由 timosha 提交，分别指向 Telegram 消息渲染（#1094）与 MCP 工具包装器的引用计数修复（#1095），均为修复类改动，而非新功能。今日无任何 PR 被合并或关闭，代码主线未发生推进，因此项目整体前进幅度可视为接近停滞，但待处理队列中有潜在稳定性修复积累。项目健康度观察：无新增 Bug 报告是正面信号，但 2 条修复持续待合并，积压风险需关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无已合并或已关闭的 PR，代码主线无实质推进。

待合并队列（2 条，均未合并）：

- **PR #1094** `feat(telegram): render markdown tables as monospace pre blocks` — 作者 timosha，创建于 2026-11-13，更新于 2026-11-23。修复 `markdownToTelegramHtml` 将 Markdown 表格以原始竖线透传、导致 Telegram 渲染成混乱单行的问题；新逻辑在行首检测含 `|` 且后跟分隔行（冒号 + 3 个以上短横）的模式，处理表头/数据行。链接：nullclaw/nullclaw PR #1094
- **PR #1095** `fix(mcp): refcount shared McpServer across tool wrappers` — 作者 timosha，创建于 2026-11-23。针对 `applyToolCustomizations` 对被禁用工具包装器执行 deinit 的行为：旧所有权模型下仅首个包装器（`owns_server = idx == 0`）持有 MCP server，移除被禁用工具时会释放共享 server，新方案改为跨包装器引用计数。链接：nullclaw/nullclaw PR #1095

## 4. 社区热点

今日无 Issues 更新；两条 PR 的评论数与点赞数在数据中均未提供（`undefined` / 0），无法据此判断讨论热度。从内容看，两处改动均集中于消息渲染与 MCP 工具生命周期，反映当前社区投入集中在**渠道输出正确性**与**MCP 集成稳定性**两个方向。链接：nullclaw/nullclaw PR #1094 、nullclaw/nullclaw PR #1095 。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归 Issue。待合并 PR 中涉及一处稳定性问题：

- **严重程度：中高** — 共享 `McpServer` 被过早释放（PR #1095 描述）。当通过 `tool_customizations` 禁用工具时，旧所有权模型下移除被禁用工具的包装器会连带释放被多个包装器共享的 MCP server。已有 fix PR：#1095（待合并）。链接：nullclaw/nullclaw PR #1095
- **严重程度：低** — Telegram Markdown 表格渲染为混乱单行（PR #1094 描述）。已有 fix PR：#1094（待合并）。链接：nullclaw/nullclaw PR #1094

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求。结合待合并 PR 判断，下一版本可能纳入的能力点包括：Telegram 渠道的 Markdown 表格渲染支持（#1094），以及 MCP 工具包装器的共享 server 引用计数模型（#1095）。两者分别属于渲染体验改进与内部稳定性重构。

## 7. 用户反馈摘要

今日无 Issues 评论可供提炼，无法从用户评论中提取痛点、使用场景或满意度信息。

## 8. 待处理积压

- **PR #1094** — 创建于 2026-11-13，截至 2026-11-23 已 10 天未合并，仅于今日有更新。属较早提交且仍未合入的 PR，建议维护者优先评审以免长期滞留。链接：nullclaw/nullclaw PR #1094
- **PR #1095** — 创建与更新均为 2026-11-23，尚属新提交，暂不构成积压，但涉及共享资源生命周期，建议尽快评审。链接：nullclaw/nullclaw PR #1095

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-11-23）

## 1. 今日速览

项目今日处于高活跃维护窗口：24 小时内 16 条 PR 更新，其中 13 条已合并或关闭，并以 `fisherdaddy` 为主力的 renderer/main/cowork 系列改动集中落地，方向围绕 DeepSeek Harness（DSH）架构迁移收尾、启动性能与 UI 打磨。Issues 侧仅 1 条新增，来自百度爱企查团队的 MCP 合作接入请求，零关闭。整体健康度良好：合并效率高、方向清晰，但 Issue 响应面较窄、待合并依赖升级与专家贡献类 PR 存在积压。

## 2. 版本发布

今日无新版本发布（0 个 Release），以下 PR 变更尚未标记版本。重点合并内容归入第 3 节。

## 3. 项目进展

今日 13 条已关闭/合并 PR 明显推进了 DSH 架构迁移与桌面端体验两条主线：

- **启动性能与架构**：PR #3157 `perf(startup)` 将 DSH 启动与主界面解耦，主 UI 可直接进入交互、DSH 后台完成启动，同时不回退启动广告与早期 prompt 提交能力。这是今日对终端用户感知最大的改动。[#3157](https://github.com/netease-youdao/LobsterAI/pull/3157)
- **DSH 原生工具路由统一**：PR #3155 在 `@lobsterai/dsh-bundle` 中新增 `lobster-web-search-bridge`，统一 `web_search` 路由，停用内置 `web-search-deepseek`/`web-deepseek-api` 并限制 `tool-web.searchMaxQueries` 为 4，同时下线旧 web-search 服务。[#3155](https://github.com/netease-youdao/LobsterAI/pull/3155)
- **DSH 工具输出契约修复**：PR #3153 修正 `lobster_enable_tools` 的 `output.render` 返回值，由原始 `string` 改为 DSH 要求的 `ContentBlock[]`，并保留隐藏的 web-search 视图。[#3153](https://github.com/netease-youdao/LobsterAI/pull/3153)
- **IM 渠道扩展**：PR #3160 为应用自有 DSH channels 新增 POPO 驱动（Mercury STOMP、签名 webhook 回调、文本投递、按 bot 的访问策略与配对），并在 Electron IM 设置中启用 POPO 与实时连接状态。[#3160](https://github.com/netease-youdao/LobsterAI/pull/3160)
- **桌面助手行为调整**：PR #3156 以按需上下文动作替代主动式 companion 提示（移除 `companionHints.ts`、`hintPolicy.ts`），仅在打开快捷面板或悬停启动器时采集上下文，并新增 `CompanionContextInspector`。[#3156](https://github.com/netease-youdao/LobsterAI/pull/3156)
- **Cowork 体验清理**：PR #3159 移除延迟 3 秒的“AI 引擎正在启动网关...”浮层与非错误的 `ready` 琥珀色提示卡，由 `shouldShowCoworkEngineNotice()` 统一判断。[#3159](https://github.com/netease-youdao/LobsterAI/pull/3159)
- **UI/交互打磨**：PR #3164 重设首页 composer 布局与默认权限设置（统一顶部外壳、抽出 `AgentPickerPopover`、权限模式选择器内移）；PR #3165 引入侧边栏专用 CSS 变量并新增全访问确认弹窗；PR #3166 调整侧边栏字号层级与对比度（含 Windows 半像素模糊规避）。[#3164](https://github.com/netease-youdao/LobsterAI/pull/3164) [#3165](https://github.com/netease-youdao/LobsterAI/pull/3165) [#3166](https://github.com/netease-youdao/LobsterAI/pull/3166)
- **文档同步**：PR #3158 与 PR #3154 分别更新中英 README、贡献指南与范围化 `AGENTS.md`，反映 DSH 架构、迁移流程与多平台打包流水线。[#3158](https://github.com/netease-youdao/LobsterAI/pull/3158) [#3154](https://github.com/netease-youdao/LobsterAI/pull/3154)

总体判断：项目已从“迁移 DSH”进入“迁移后收敛”阶段——性能、工具路由、文档三者同步收口，说明迁移主线接近完成。

## 4. 社区热点

今日公开数据中评论数与点赞数均未给出有效数值（多为 `undefined`/0），无法据此排序讨论热度，仅能从内容判断关注点：

- **#3163 百度爱企查 MCP 集成（OAuth）** — 唯一有评论（1 条）的 Issue，来自合作方团队的主动接触，提出希望以 OAuth（含 DCR）鉴权方式将企业信息查询与法律办公两类 MCP/Skill 能力开放给 LobsterAI 用户，并询问合作意愿与流程。背后诉求是：第三方生态方希望以标准 MCP 身份接入，而非定制集成；OAuth/DCR 支持是门槛条件。[#3163](https://github.com/netease-youdao/LobsterAI/issues/3163)
- **#2818 Atlas Cloud provider（stale）** — 社区持续以 PR 形式提交新模型服务商接入（Global 区，与 OpenRouter 并列，5 文件 +38/-4），反映用户对聚合式 provider 选择的稳定需求。[#2818](https://github.com/netease-youdao/LobsterAI/pull/2818)

## 5. Bug 与稳定性

今日无 Issue 形式的 Bug、崩溃或回归报告。合并的修复类 PR 均为内部已定位问题，严重程度为中低：

- **中等**：#3153 `lobster_enable_tools` 输出契约错误（返回 `string` 而非 `ContentBlock[]`），可能导致工具启用结果渲染异常——已合并修复。
- **低**：#3159 冷启动时误导性的“网关正在启动”浮层与 `ready` 提示，属体验型缺陷而非功能故障——已合并修复。
- **低**：#3166 针对 Windows 下非整数 px 字号导致半像素模糊的问题做了规避——已合并。

## 6. 功能请求与路线图信号

- **MCP 生态接入 + OAuth/DCR 鉴权（#3163）**：目前仓库内无对应实现 PR，但该请求指向通用能力（标准化 MCP 授权流程）而非单一集成，具备被纳入路线图的合理性；判断为“需维护者表态”，暂不能确认进入下一版本。
- **DSH 原生 web_search 统一（#3155，已合并）**：可作为下一版本“工具层重构”的明确信号，发布说明中应提示旧 web-search 服务下线。
- **POPO 成为内置 IM 渠道（#3160，已合并）**：IM 渠道矩阵继续扩张，与既有渠道并列，预计进入下一版本。
- **Companion 从主动提示转为按需上下文动作（#3156，已合并）**：涉及默认交互行为变更，用户可感知，建议在发布说明中明确。
- **新 provider 接入（#2818 Atlas Cloud，OPEN/stale）**：社区驱动的 provider 扩容，仍待评审。

## 7. 用户反馈摘要

今日仅有 Issue #3163 一条用户/合作方反馈，可提炼：

- **使用场景**：企业信息查询、法律办公两类垂直场景希望通过 LobsterAI 触达用户。
- **核心痛点**：现有接入方式缺乏标准化 OAuth（含 DCR）鉴权支持，阻碍第三方以 MCP/Skill 形式自助接入。
- **满意度**：反馈方对平台用户覆盖持积极态度，属主动寻求合作，非抱怨型反馈。
- **未覆盖**：今日无终端用户的功能吐槽或稳定性投诉，无法评估终端满意度。

## 8. 待处理积压

需维护者关注的三项：

- **#2938（OPEN / stale，创建 2026-10-24，更新 2026-11-23）**：贡献 Lynxce（灵策智算）专家资源，规模较大——43 个桌面预设、53 个专家团队（328 个成员/负责人角色）、783 个 WorkBuddy 专家，合计 879 项内容，含头像与品牌署名。已挂 stale 近一个月，评审成本高但价值明确，建议给出明确处理结论（分批合入或关闭说明）。[#2938](https://github.com/netease-youdao/LobsterAI/pull/2938)
- **#2818（OPEN / stale，创建 2026-10-09）**：Atlas Cloud provider 接入，改动量小（5 文件），自 10 月起未合并，建议快速裁决以免社区贡献者流失。[#2818](https://github.com/netease-youdao/LobsterAI/pull/2818)
- **#3162 / #3161（OPEN，dependabot）**：CI 依赖升级 `actions/setup-node` 4→7、`softprops/action-gh-release` 1→3，均为大跨度版本跳跃，需人工确认兼容性后合并。[#3162](https://github.com/netease-youdao/LobsterAI/pull/3162) [#3161](https://github.com/netease-youdao/LobsterAI/pull/3161)

---

*说明：本报告仅基于所提供的 GitHub 数据生成。部分字段（PR 评论数、点赞数）在源数据中缺失或为 0，相关热度判断已相应标注，未作推测性补充。*

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

# CoPaw 项目动态日报 — 2026-11-23

## 1. 今日速览

项目今日维持高强度活跃：过去 24 小时 Issues 更新 26 条（新开/活跃 23、关闭 3）、PR 更新 38 条（待合并 34、合并/关闭 4），并发布 v2.3.1-beta.1 预发布版本。合并/关闭量（4 条 PR + 3 条 Issue）明显低于新增与待处理量，待合并 PR 积压至 34 条，合并吞吐是当前主要瓶颈。讨论焦点高度集中于 Console 前端渲染缺陷（窄屏剪裁、表格溢出、键盘可访问性）与插件/通道边界问题（RPC 错误吞没、Discord 代码块切分、cron 星期解析）。多个 Bug 已有对应的 fix PR 紧随报告提交，说明维护者响应链路通畅，但审核环节需要提速。

## 2. 版本发布

**v2.3.1-beta.1**（预发布）

- Release 说明中列出的变更包括：禁用 chat 与 tool-call SSE 流上的代理缓冲（PR #8730，作者 @pcbeingused333）；版本号提升至 2.3.1b1（PR #8809，作者 @cuiyuebing）；loop 中 tool call 的记录逻辑（说明文本在数据中被截断，无法确认完整内容）。
- 数据中**未提供**破坏性变更或迁移注意事项信息，此处不做推断。作为 beta 预发布，建议等待后续稳定版发布说明再做升级决策。配套文档更新 PR #8869（docs: update docs for v2.3.1，size/XL）仍在开放状态，尚未合入。
- 链接：https://github.com/agentscope-ai/QwenPaw/pull/8730 、https://github.com/agentscope-ai/QwenPaw/pull/8809 、https://github.com/agentscope-ai/QwenPaw/pull/8869

## 3. 项目进展

今日合并/关闭 4 条 PR、关闭 3 条 Issue，数据中仅可见以下已关闭条目：

- Issue #8681（[release-duty, stable] QwenPaw v2.3.0 安装验证）已关闭 —— 稳定版 v2.3.0 的安装验证流程完成，属于发布质量门禁的正常收尾。https://github.com/agentscope-ai/QwenPaw/issues/8681
- Issue #8868（记忆后端在启动竞态下静默回退 ReMeLight）已关闭，但其内容与仍开放的 Issue #8867 描述一致，疑似重复项被关闭，实际修复状态需确认。#8867 仍为 OPEN。https://github.com/agentscope-ai/QwenPaw/issues/8868 、https://github.com/agentscope-ai/QwenPaw/issues/8867

其余 2 条合并/关闭 PR 未在数据中列出。整体判断：今日**净前进幅度有限**，价值主要积累在待合并队列中——CLI 命令提示修正（#8873）、Discord 代码块修复（#8871）、心跳 cron 星期列表支持（#8866）、Console 工具配置刷新死循环修复（#8862）、Console 宽表格横向滚动（#8823）等多条 size/XS–S 的修复已就绪，属于可快速消化的低风险增量。

## 4. 社区热点

按评论数排序的讨论焦点：

- **#8811 窄屏消息文字被剪裁，超宽内容无法横向滚动**（5 条评论，最高）—— 从 v2.3.0 升级到 v2.3.0.post1 后出现，用户给出完整环境与复现步骤（桌面 1903px / 移动 375px）。https://github.com/agentscope-ai/QwenPaw/issues/8811
- **#8844 Console 消息列表无法键盘聚焦，方向键/PageUp/PageDown 无法滚动会话**（3 条评论）—— 无障碍（a11y）缺陷。https://github.com/agentscope-ai/QwenPaw/issues/8844
- **#8845 Markdown 表格溢出气泡且无法横向滚动**（3 条评论）—— 与 #8811 同源。https://github.com/agentscope-ai/QwenPaw/issues/8845
- **#8864 流式回复中途 RemoteProtocolError 中止，已输出部分内容后不再重试**（3 条评论）—— 用户明确记录 `last_prompt_tokens: 82682`、上下文仅约 9% 时发生，排除了上下文超限假设。https://github.com/agentscope-ai/QwenPaw/issues/8864
- **#8852 iOS WebKit 长会话下 Console 卡死**（3 条评论）—— 定位到 `UserMessageAnchors` 布局抖动与 `column-reverse` 列表中的 `content-visibility:auto`。https://github.com/agentscope-ai/QwenPaw/issues/8852
- **#8762 定时任务第二次模型调用 APIConnectionError，手动执行同一任务却成功**（3 条评论，自 11-16 起持续活跃）。https://github.com/agentscope-ai/QwenPaw/issues/8762

**背后的诉求**：前端渲染层是当前用户感知最集中的痛点——三条独立 Issue（#8811、#8845、#8856）指向同一个缺失的 `overflow-x-auto` 容器问题，且已有 fix PR #8823（size/XS）待合并。用户正在以相当专业的方式提交带环境、提交哈希、前端 bundle grep 结果的报告，说明核心用户群偏技术型，但也意味着这些问题被反复报告本身在消耗社区信任。

## 5. Bug 与稳定性

按严重程度排列：

**严重（静默失效 / 数据或功能丧失）**

- **#8814 RESPONSE_SCOPE_LIMIT：活跃响应路由从不被驱逐，通道在 128 条时静默死亡** —— 微信通道双向停止工作，无用户可见错误，日志仅 `-32603 internal error`。长期运行部署受影响。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8814
- **#8867 / #8868 记忆后端在启动竞态下静默回退到 ReMeLight 且永不自愈** —— 配置 `openviking` 的 Agent 整个进程生命周期跑在内置后端上。#8868 已关闭，#8867 仍 OPEN，**未见 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8867
- **#8863 Windows 上 ReMe 标签索引永久失败**（Invalid workspace-relative tag-index path）—— 两台独立 Windows 机器、v2.3.0 与 v2.3.0.post1、内置 reme-ai 0.4.2.0 均复现，属平台级回归。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8863

**中高（功能中断）**

- **#8864 流式回复中途中止且不重试**（`deepseek` / `deepseek-v4-flash`，上下文仅 ~9%）。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8864
- **#8762 定时任务第二次模型调用连接失败**（11-13 至 11-16 连续 4 次计划运行全部失败，手动执行成功）。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8762
- **#8852 iOS WebKit 长会话卡死**（布局抖动）。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8852
- **#8851 import map 将入口 chunk 重映射为 `?v=…`，bundle 加载两次，插件路由始终不注册**（`PawApp <id> did not register its app route`）。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8851

**中（已有 fix PR 跟进）**

- **#8811 / #8845 / #8856 Console 剪裁与无横向滚动** → fix PR **#8823**（size/XS，fix(console): keep wide tables and code blocks scrollable in bubbles）待合并。https://github.com/agentscope-ai/QwenPaw/pull/8823
- **#8870 Discord `chunk_text` 在分块边界复制代码围栏** → fix PR **#8871**（size/XS）待合并。https://github.com/agentscope-ai/QwenPaw/pull/8871
- **#8865 心跳 cron 命名星期列表回退为 30 分钟间隔** → fix PR **#8866**（size/XS，first-time-contributor）待合并。https://github.com/agentscope-ai/QwenPaw/pull/8866
- **#8872 / #8874 CLI 建议不可用的模型下载命令、文档化 pre-commit 环境与 CI 不一致** → fix PR **#8873**（size/XS）待合并；#8874 未见 fix PR。https://github.com/agentscope-ai/QwenPaw/pull/8873

**低（文档与提示误导）**

- **#8843 配置文档仅列 GET/PUT/DELETE /envs，导致 QA Agent 建议会让用户删除其他环境变量的 PUT 操作** —— 有真实数据损失风险，但根因在文档。#8848 压缩失败提示建议 `/clear`，易误导用户清空上下文。二者均**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8843 、https://github.com/agentscope-ai/QwenPaw/issues/8848

**相关基础设施修复**：PR #8818 指出 `RpcPeer._dispatch_request` 捕获异常后以 `-32603` 回复并丢弃异常对象（`_ = exc`），导致上述多个静默故障不可诊断——该 PR 若合入将显著改善此类问题的可观测性。https://github.com/agentscope-ai/QwenPaw/pull/8818

## 6. 功能请求与路线图信号

- **#8860 进一步将 Harness 解耦为可插拔 Execution SDK，同时保留 QwenPaw 宿主能力（记忆、内置工具、模型路由）** —— 明确承接 #8808 的模块化方向与 v2.3.0 中发布的 `qwenpaw-harness-codex` v1.0.0。**纳入下一版本可能性高**：已有 PR **#8764**（size/XXXL，feat(sdk): expand plugin SDK 1.2 APIs, lifecycle management, and developer tooling）在推进插件 SDK 1.2，方向一致。https://github.com/agentscope-ai/QwenPaw/issues/8860 、https://github.com/agentscope-ai/QwenPaw/pull/8764
- **#8857 Telegram 论坛 topic 级会话隔离**（first-time-contributor）—— 现状所有 topic 共享一个 agent session、一份记忆和一个 Console 会话。**已有 PR 待合并**，属小范围高价值改进。https://github.com/agentscope-ai/QwenPaw/pull/8857
- **#8781 qwenpawmail-mcp 新增 `save_draft` 工具**（IMAP APPEND + `\Draft` 标记，不经 SMTP 发送）—— 关闭 #8780，已有 PR 待合并。https://github.com/agentscope-ai/QwenPaw/pull/8781

## 7. 用户反馈摘要

**不满意 / 痛点**

- **升级引入回归**：#8811 用户明确记录"升级前 v2.3.0 正常，升级到 v2.3.0.post1 后出现窄屏剪裁"，补丁版本引入 UI 回归对用户信心影响较大。
- **静默失败不可诊断**：微信通道死亡（#8814）、记忆后端回退（#8867）、定时任务失败（#8762）共同特征是**没有用户可见错误**，日志信息贫乏（仅 `-32603 internal error`）。用户不得不自行深挖源码定位根因（#8814 作者直接给到 `src/qwenpaw/cha...` 源码位置）。
- **移动端与无障碍可用性不足**：iOS WebKit 长会话卡死（#8852）、纯键盘用户无法滚动会话（#8844）。
- **文档与实际实现脱节**：#8843 的文档误导会让 Agent 建议删除全部其他环境变量；#8874 本地 pre-commit 环境与 CI 依赖不一致，增加贡献者摩擦。

**满意 / 正面信号**

- 多条 Bug 报告在**同一天**即出现对应 fix PR（#8870→#8871、#8865→#8866、#8872→#8873），说明维护与贡献闭环高效。
- 首次贡献者持续进入（#8857、#8866、#8781 均标注 first-time-contributor），生态健康度良好。

**使用场景**：长时间运行的生产部署（微信/飞书/钉钉/Telegram/Discord 多渠道）、Windows 桌面端 + iOS 移动端的双端使用、定时巡检类任务（`daily-web-patrol`）、通过插件扩展记忆后端（`memory-openviking`）与本地模型（llama-server）。

## 8. 待处理积压

需维护者重点关注：

- **超大规模开放 PR 审核**：**#8764**（size/XXXL，插件 SDK 1.2，自 11-16 起开放 7 天）、**#8785**（size/XXL，媒体内联预算与降采样修复，自 11-17 起开放）、**#8869**（size/XL，v2.3.1 文档更新，与已发布的 beta 版本配套但尚未合入）。三者均标注 Under Review 或长期未决。https://github.com/agentscope-ai/QwenPaw/pull/8764 、https://github.com/agentscope-ai/QwenPaw/pull/8785 、https://github.com/agentscope-ai/QwenPaw/pull/8869
- **#8762 定时任务连接失败**（自 11-16 起，4 次计划运行全部失败，无 fix PR）—— 影响定时任务这一核心自动化能力。https://github.com/agentscope-ai/QwenPaw/issues/8762
- **#8814 通道静默死亡**（自 11-19 起，无 fix PR）—— 长期运行部署下可导致微信通道完全失联。https://github.com/agentscope-ai/QwenPaw/issues/8814
- **#8843 文档误导可致环境变量丢失**（自 11-20 起，无 fix PR）—— 影响面广且修复成本低。https://github.com/agentscope-ai/QwenPaw/issues/8843
- **#8867 记忆后端静默回退仍开放**，尽管同内容的 #8868 已关闭，需明确是否为重复项及修复计划。https://github.com/agentscope-ai/QwenPaw/issues/8867

**健康度小结**：社区输入质量高、贡献者活跃、fix 响应快；风险集中在**合并吞吐（34 条待合并 vs 今日 4 条合并/关闭）** 与**静默失败类 Bug 缺乏可观测性**两点。建议优先合入 #8818（RPC 异常日志）与 #8823（Console 剪裁修复），前者可提升后续静默故障的定位效率，后者可一次性消解三条重复报告的社区热点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-11-23）

## 1. 今日速览

过去24小时，ZeroClaw 处理了 48 条 Issue（关闭 32 条、新开或仍活跃 16 条）和 50 条 PR（待合并 45 条、合并或关闭 5 条），**关闭量与待合并 PR 同时处于高位**，说明项目侧重点在于集中清理早期积压，而非引入新内容。今日无新版本发布。关闭的 Issue 涵盖 WhatsApp、Mattermost、Matrix 等通道的多个 S1/S2 级损坏，以及 shell 工具在 Android 上的阻断性故障。与此同时，新的架构级提案（服务凭据作用域、Remote Files、ACP 会话迁移、SimpleX 通道）正在密集讨论中，显示**稳定性收敛与功能扩张并行**的状态。

## 2. 版本发布

今日无新版本发布，略。

## 3. 项目进展

今日合并或关闭的 PR 数量为 5 条，列表中可见的关闭 PR 为：

- **#12495 [CLOSED] fix(matrix): restore auto-accept of room invites**（作者 adept，size:L，risk:high）
  链接: zeroclaw-labs/zeroclaw PR #12495
  Matrix 通道此前完全不会接受房间或 DM 邀请，导致机器人无法被加入任何房间。该修复恢复了邀请自动接受逻辑，属于通道可用性的关键补齐。

Issue 侧同日关闭了多个已推进的缺陷修复（对应修复 PR，但未在本次数据中给出 PR 编号），包括 WhatsApp Web 的入站媒体标题丢失（#11257）、Mattermost 自动发现 DM 丢弃首条消息（#10901）、Android 上 shell 工具因 `/system/bin/sh` 无法规范化而全部失败（#12075）、memory recall 在 embedder 失败时无返回，以及卡死（#11896）、shell 工具非零退出时吞掉 stderr（#12390）、web_search_tool 被静默编译剔除（#12203）。整体上，今天的进展集中在**通道可靠性、移动端与工具链的边界条件**，而非新能力交付。

## 4. 社区热点

- **#12422 [OPEN] RFC: Scoped use of operator-managed service credentials**（15 条评论，今日最高）
  链接: zeroclaw-labs/zeroclaw Issue #12422
  诉求：运维者需要授权 agent 对某服务执行任务，但**不愿向 agent 暴露服务凭据本身**。这触及权限模型的核心矛盾，评论数远超其他条目，是当前社区最关注的架构议题。

- **#11418 [CLOSED] "Copy" 一键功能失效**（8 条评论）
  链接: zeroclaw-labs/zeroclaw Issue #11418
  zerocode/tui 中 Copy 按钮对剪贴板完全无效，标记为 S1 工作流阻断。缺陷本身被关闭，但其评论热度反映 TUI 基础交互质量仍是用户敏感点。

- **#12666 [OPEN] `delegate` 接受未知参数并静默丢弃**（6 条评论）
  链接: zeroclaw-labs/zeroclaw Issue #12666
  `delegate` 声明了封闭 schema（`additionalProperties: false`），但带未声明键的调用仍会执行并丢弃该键。该问题已被 PR #12679 覆盖，属于当日话题中反馈最快的条目。

- **PR 侧讨论集中**：PR #12695、#12691、#12694、#12679 均为 2026-11-23 新建或更新，其中 #12695（Remote Files 工具契约）与 #12694（RUSTSEC-2026-0594 依赖修复）反映架构设计与安全供应链两条并行主线。

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻断**
- **#12570 [OPEN] Daemon 启动挂起**：日志目录积累海量泄漏的 `runtime-trace.tmp.*` 文件，源于滚动裁剪在任意错误时泄漏临时文件（`trim_to_last_entries`）；两个缺陷叠加导致启动卡死。**未见 fix PR**，需优先关注。
  链接: zeroclaw-labs/zeroclaw Issue #12570

- **#11418 [CLOSED] TUI Copy 失效**（S1），已关闭。
- **#12075 [CLOSED] Android shell 工具全部失败**（S1），已关闭。
- **#10901 [CLOSED] Mattermost 丢弃新 DM 首条消息**（S1），已关闭。

**S2 — 行为降级**
- **#10924 [CLOSED] 运行时命令回复进入对话语音路由**（Telegram，`stop_reply_message` 缺少必要标记）。
- **#11257 [CLOSED] WhatsApp Web 丢弃入站媒体标题**（p1）。
- **#11896 [CLOSED] memory recall 在 embedder 失败时无返回、卡死时挂起**。
- **#11894 [CLOSED] Codex 额度耗尽后每次调用都重试，直至其声明的重置时间**（provider 层未处理 429 中的窗口信息）。
- **#12330 [CLOSED] zerocode 配置解析失败时丢弃远程连接并回落到本地 daemon**。

**S3 — 轻微问题**
- **#12666 [OPEN] `delegate` 静默丢弃未知参数** — **已有 fix PR #12679**。
  链接: zeroclaw-labs/zeroclaw Issue #12666
- #11818 [CLOSED] 长配置目录触发裸 SUN_LEN 报错（good first issue）。
- #11972 [CLOSED] `get-paircode` 失败时仍退出码 0。
- #11916 [CLOSED] 静默 NO_REPLY 的 cron 结果仍出现在 Web 聊天。
- #11758 [CLOSED] WhatsApp Web 停止后仍打印配对二维码。

**供应链安全**：RUSTSEC-2026-0594 于今日发布，`cookie` 私有 cookie 的 AES-GCM nonce 在 `fork()` 后可能重复，导致 `cargo audit` 失败；PR #12694 跟进处理。

## 6. 功能请求与路线图信号

- **服务凭据作用域化（#12422 / RFC）**：若收敛，将改变 agent 对第三方服务的认证方式，是权限模型的重要演进。
- **Remote Files 原生工具契约（PR #12695）**：新增操作矩阵、平台后端、vault 授予范围、任务会话与传输语义；当前为草案契约，尚属设计阶段。
- **OIDC 作用域可配置（PR #12497，标记 release:v0.9.1）**：为每个 provider 提供 `scopes` 与 `service_scopes`，覆盖设备授权、浏览器授权码与服务凭据流程。**带发布标签，是下一版本的最强信号。**
- **SimpleX 通道（PR #12316）**：支持文本、语音消息与加密来电，使手机无需号码即可与 agent 对话。
- **ACP 仪表盘迁移（PR #12651 / #12652 / #12653 / #12654 四层堆叠）**：覆盖 WebChat 策略与用量统计、持久会话与旧 `gw_*` 导入、OIDC 鉴权与重连回放、前端传输切换。属于中长线架构工程。
- **Qwen MP4 视频输入（PR #12578）**：以 `video_url` 形式发送 `data:video/mp4;base64,...`，覆盖流式/非流式场景。
- **Codex 订阅用量可见性（PR #12691）**：Web 聊天中展示订阅使用情况，与 #11894 的重试问题形成配套。

## 7. 用户反馈摘要

- **TUI 基础交互不可靠**：#11418 用户明确表示 Copy 按钮“完全不做事”，剪贴板无任何响应，属于直接影响日常操作的体验问题。
- **移动端可用性缺口**：#12075 的 Termux 用户在所有 `shell` 调用上于 shell 启动前即失败，说明 Android 场景未纳入常规验证。
- **通道语义细节易失**：WhatsApp 标题丢失、Mattermost 首条 DM 丢失、Matrix 不收邀请，反映出**各通道的边界语义（媒体元数据、DM 发现、邀请接收）缺少一致的回归覆盖**。
- **错误静默不可接受**：`delegate` 丢参数（#12666）、shell 吞 stderr（#12390）、`web_search_tool` 被编译剔除无警告（#12203）、`get-paircode` 假成功（#11972），用户反复抱怨“失败但无提示”，**可观测性与失败显式化是高频诉求**。
- **凭据安全诉求明确**：#12422 的讨论基础是运维者希望 agent 能用凭据完成任务却不看到凭据本身。

## 8. 待处理积压

- **#12422 RFC（OPEN，创建于 2026-11-14）**：15 条评论仍在推进，尚无对应实现 PR，需明确收敛结论。
  链接: zeroclaw-labs/zeroclaw Issue #12422
- **#12570（OPEN，创建于 2026-11-19）**：S1 级 daemon 启动挂起，涉及两个叠加缺陷，今日仍无 fix PR，是当前**最高优先级未解决稳定性问题**。
  链接: zeroclaw-labs/zeroclaw Issue #12570
- **PR #12275（OPEN，创建于 2026-11-06）**：MCP 本地配置控制，标记 `needs-author-action`、risk:high、size:XL，已积压约两周半。
  链接: zeroclaw-labs/zeroclaw PR #12275
- **PR #12459（OPEN，创建于 2026-11-15）**：OIDC 会话启用浏览器语音，标记 `status:blocked`、`do-not-merge`，需要解除阻塞。
  链接: zeroclaw-labs/zeroclaw PR #12459
- **PR #12231（OPEN，创建于 2026-11-04）**：防止父 prompt 泄漏进嵌套 turn 循环（task-local 随 await 传播问题），已积压近三周。
  链接: zeroclaw-labs/zeroclaw PR #12231

---

**健康度小结**：单日关闭 32 条 Issue、关闭或合并 5 条 PR，积压清理力度可观，通道与工具链的 S1/S2 缺陷明显收敛；但 45 条待合并 PR 与多个 XL 级堆叠改动（ACP 四层、SimpleX、MCP）并存，审查带宽可能成为瓶颈。需重点关注 #12570 这一尚无修复的 S1 daemon 问题，以及 #12422 RFC 的结论落地，后者将决定下一阶段的权限模型走向。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*