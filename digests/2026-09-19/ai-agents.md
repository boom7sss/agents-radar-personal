# OpenClaw 生态日报 2026-09-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-19 13:24 UTC

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

# OpenClaw 项目日报 · 2026-09-19

> 数据来源：OpenClaw GitHub (github.com/openclaw/openclaw) 过去 24 小时公开动态。本报告仅基于所提供数据，未做外部推断。

---

## 1. 今日速览

项目维持极高活跃度：24 小时内 Issues 更新 500 条（新开/活跃 343、已关闭 157），PR 更新 500 条（待合并 282、已合并/关闭 218），并有 2 个新版本发布。发布节奏非常快（v2026.9.2 → .5 数日内连发），但随之而来的是大量升级回归问题，多条 P0/P1 问题集中在更新流程、Gateway 启动与 SQLite 持久化上。维护者侧的修复 PR（多为 `steipete` 提交）密集指向"把阻塞操作移出 Gateway 主线程"，与今日高热度事件循环饥饿类 Issue 高度呼应。整体判断：**开发吞吐旺盛，但稳定性风险显著累积，发布质量与回归控制是当前主要挑战。**

---

## 2. 版本发布

### v2026.9.5（最新）
- 链接：https://github.com/openclaw/openclaw/releases/tag/v2026.9.5
- 规模：64 direct commits · 4,179 pull requests · 503 contributors
- 发布说明与更新日志同源，另提供 [Release notes](https://docs.openclaw.ai/rele) 入口
- Linux 通道同步发布 **linux-stable: OpenClaw Linux update channel**，附：
  - [AppImage](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)
  - [Debian package](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)

**破坏性变更 / 迁移注意（基于社区报告，非官方变更日志）：**
- 本版发布当天即有用户报告 **Codex retained-state 迁移永不收敛**，session-catalog 永久处于 cold 状态（会话列表为空、归档报 "thread not loaded"）：https://github.com/openclaw/openclaw/issues/152744
- 近期版本（2026.9.3 → .4）的更新流程反复出现 "global install swap" 失败与回滚验证失败，升级路径需重点关注：https://github.com/openclaw/openclaw/issues/144712 、 https://github.com/openclaw/openclaw/issues/146637

> 注：所提供数据中该 release 的完整变更条目被截断，无法逐项列出具体破坏性变更，以上为社区同期反馈。

---

## 3. 项目进展

今日 PR 侧以修复类为主，且高度集中在一个主题——**解除 Gateway 主线程阻塞**：

| PR | 内容 | 链接 |
|---|---|---|
| #152745 | `fix(audit)`：将排队的审计持久化与保留清理移出 Gateway 线程（docs/gateway/agents，XL） | https://github.com/openclaw/openclaw/pull/152745 |
| #152892 | `refactor(outbound)`：在非宿主线程完成待处理的投递失败结算 | https://github.com/openclaw/openclaw/pull/152892 |
| #152820 | `fix(codex)`：避免 Codex 子进程启动/退出记账与另一 SQLite writer 争用导致 Gateway 停顿 | https://github.com/openclaw/openclaw/pull/152820 |
| #152466 | `fix`：前台 Gateway 替换运行时文件后更新失败、重启卡死、pinned Git 更新被拒（P1，availability 风险） | https://github.com/openclaw/openclaw/pull/152466 |
| #152645 | `fix`：修复 WebChat 进度附件在 managed-media 清理中被永久删除（Closes #152499） | https://github.com/openclaw/openclaw/pull/152645 |
| #152731 | `perf(tasks)`：按 session key 展示任务时只克隆最新相关任务 | https://github.com/openclaw/openclaw/pull/152731 |
| #152833 | `fix(agents)`：要求 agent 在确认纠正/承诺继续后真正继续工作 | https://github.com/openclaw/openclaw/pull/152833 |
| #152727 | `fix(update)`：为中断更新的 settle probe 加界，并在服务非托管时跳过（Closes #152542） | https://github.com/openclaw/openclaw/pull/152727 |

已关闭/合并的代表性 PR：#147741 `fix(ui)` 保存合法的 disabled Host Desktop 配置（Closes #147722）。

**推进评估**：修复方向明确且聚焦——若这批"off the Gateway thread"补丁合入，将直接缓解今日多条 P0 事件循环饥饿问题；但今日待合并 282 条，积压仍然较大。

---

## 4. 社区热点

按评论数排序的高热度讨论：

1. **#97616（31 评论）僵尸子进程泄漏** — hook/tool 子进程未被回收，zombie 累积导致运行时退化。标签含 `P1`、`impact:crash-loop`、`impact:message-loss`。跨 6 月至 9 月仍在更新，是持续性顽疾。 https://github.com/openclaw/openclaw/issues/97616
2. **#149361（23 评论）WebUI 性能与稳定性 Umbrella** — 维护者发起的桌面/移动端 WebUI 问题索引，小修复分批处理。 https://github.com/openclaw/openclaw/issues/149361
3. **#149538（19 评论）Gateway ready 但不服务** — 632-agent 集群上 `/health` 全部超时、事件循环饥饿、RSS 增长至 OOM，`P0`。 https://github.com/openclaw/openclaw/issues/149538
4. **#144712（13 评论，已关闭）npm update 全局安装交换失败** — 明确标注 `impact:ux-release-blocker`、`issue-rating: 🦞 diamond lobster`，今日关闭，属好消息。 https://github.com/openclaw/openclaw/issues/144712
5. **#40786（13 评论，已关闭）backup CLI 排除模式** — 长期 `stale` 的 3 月老 Issue 今日关闭。 https://github.com/openclaw/openclaw/issues/40786
6. **#143632（12 评论）iMessage 消息重复投递 2–3 次** — 幽灵副本携带内部 context envelope，`message_id` 相同但去重未生效。 https://github.com/openclaw/openclaw/issues/143632

**诉求分析**：热点几乎全部指向**生产环境规模下的可靠性**（大集群、事件循环、持久化、进程生命周期）与**升级体验**。用户群体中已出现明确的大规模部署方（632-agent 集群反复报告），说明 OpenClaw 正从个人工具走向规模化自托管场景。

---

## 5. Bug 与稳定性

**P0（严重）**
- #149538 Gateway ready 但不服务、事件循环饥饿（632-agent 集群）：https://github.com/openclaw/openclaw/issues/149538
- #143524 Agent SQLite WAL 数天膨胀至 1.4–2.8 GB 并阻塞 Gateway 启动（Windows）：https://github.com/openclaw/openclaw/issues/143524
- #146637 npm 更新全局安装交换失败（Linux Mint，P0）：https://github.com/openclaw/openclaw/issues/146637
- #126821 纯净重建 DB 在 15–24h 内反复 SQLite 损坏，含"瘫痪网关"模式：https://github.com/openclaw/openclaw/issues/126821
- #152744 2026.9.5 Codex retained-state 迁移不收敛，session-catalog 永久冷（发布当天报告）：https://github.com/openclaw/openclaw/issues/152744
- #56217 Secret provider 崩溃循环耗尽 1Password 速率限制（3 月至今未解）：https://github.com/openclaw/openclaw/issues/56217
- #151467 自升级死锁与回滚 cron 失败，v6.33 → v9.4 后自动回滚：https://github.com/openclaw/openclaw/issues/151467

**P1（高）**
- #97616 僵尸子进程泄漏（`crash-loop` + `message-loss`）：https://github.com/openclaw/openclaw/issues/97616
- #148529（已关闭）2026.9.4 Gateway 启动需约 12 分钟（2026.7.1-2 仅约 2 秒）：https://github.com/openclaw/openclaw/issues/148529
- #104719 memory-wiki 补全回退忽略工具 deadline：https://github.com/openclaw/openclaw/issues/104719
- #129314 隐藏的 next-turn runtime context 偶尔被当作独立可见轮次派发：https://github.com/openclaw/openclaw/issues/129314
- #84983 原生 cron agent-turn 触发饱和 Gateway 事件循环，聊天传输数分钟无响应：https://github.com/openclaw/openclaw/issues/84983
- #104992 转写脱敏 `***` 在会话恢复时回灌进模型上下文（`data-loss` + `security`）：https://github.com/openclaw/openclaw/issues/104992
- #145070（已关闭）systemd --user 下 `doctor --fix` 最终复验总是失败并留下已停止的 gateway：https://github.com/openclaw/openclaw/issues/145070

**已有 fix PR 关联**
- #152542（settle probe 阻塞 CLI 65 秒以上）→ PR #152727
- #152499（进度附件被清理）→ PR #152645
- #152847（config 嵌套深度）→ PR #152889：https://github.com/openclaw/openclaw/pull/152889
- #152822（Android Talk 约 77 秒后中断长回复）→ PR #152834：https://github.com/openclaw/openclaw/pull/152834
- #152646（Gemini 3.8 Live 用户轮次不 finalize）→ PR #152680：https://github.com/openclaw/openclaw/pull/152680

**稳定性总结**：超过半数高危问题标签为 `clawsweeper:no-new-fix-pr`，即"尚无新修复 PR"，且部分自 3 月、5 月起长期存在。稳定性债务明显重于功能开发速度。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关 PR / 状态判断 |
|---|---|---|
| 全动态模型发现（OpenRouter 及更多 provider） | #10687（9 评论，👍3） | 无直接 PR；点赞最高，属长期高需求 |
| backup CLI 支持 `.gitignore` 式排除模式 | #40786（今日关闭，👍1） | 已关闭，可能已被产品决策覆盖 |
| 受保护配置变更的 owner 审批流 | #77886（👍2，需安全评审） | 安全边界相关，短期落地概率待观察 |
| Anthropic advisor tool（server-side tool）支持 | #63930 | 通用 server-side tool block 处理，方向明确 |
| compaction / LCM summaryModel 的 fallback 模型链 | #56781 | 与稳定性诉求一致，具备较小实现面 |
| 流式重复输出保护（Halt & Confirm） | #44965 | 模型级防护，需求明确无 PR |
| 从 secret target registry 元数据生成 secretref 文档 | #44289 | 文档工程类，低风险易合入 |

**趋势判断**：以当前"稳定性优先"的 PR 分布看，下一版本更可能优先纳入**配置/更新/线程模型类的修复**，而动态模型发现、审批流等较大特性可能继续延后。

---

## 7. 用户反馈摘要

**真实痛点**
- **升级路径脆弱**：多次报告 2026.9.3 → .4 在 "global install swap" 阶段确定性失败，且回滚状态被误报为 "recovery is unverified"（#144712、#146637、#151467）。
- **资源与进程卫生**：僵尸进程累积（#97616）、WAL 无限增长（#143524）、SQLite 损坏（#126821）——用户反复强调"全新重建的 DB 仍会坏"。
- **消息层正确性**：iMessage 重复投递且去重失效（#143632）、隐藏 context 消息被当可见轮次（#129314）、脱敏值被模型复用（#104992）——影响信任而非仅体验。
- **多用户/共享环境缺陷**：`fs-safe` 硬编码 `0o600` 忽略 umask，破坏 NFS/SMB 共享工作区（#114158，今日关闭）。
- **运维一致性**：`openclaw logs` 显示 UTC 而非本地时区（#46748，今日关闭）；`doctor --fix` 在 systemd --user 下反复失败（#145070，今日关闭）。

**使用场景**：自托管大规模 agent 集群（632-agent fleet）、Windows 单 Gateway、macOS LaunchAgent + iMessage 频道、Linux Mint/aarch64 systemd user 服务、NFS/SMB 多用户共享工作区。

**满意度信号**：Upvote 数整体偏低（多数 0–3），说明用户更偏向提交缺陷而非点赞；已关闭多条长期 `stale` Issue（#40786、#46748、#114158、#106730），显示清理与响应节奏在推进。

---

## 8. 待处理积压

以下重要条目长期无修复 PR 且仍活跃，建议维护者优先分流：

- **#97616** 僵尸子进程泄漏，2026-06-29 起，31 评论，P1：https://github.com/openclaw/openclaw/issues/97616
- **#56217** 1Password secret provider 崩溃循环，2026-03-28 起，P0：https://github.com/openclaw/openclaw/issues/56217
- **#10687** 动态模型发现，2026-02-06 起，👍3，最高赞功能请求：https://github.com/openclaw/openclaw/issues/10687
- **#84983** cron 触发饱和事件循环，2026-05-21 起：https://github.com/openclaw/openclaw/issues/84983
- **#83959** Codex app-server 启动重试耗尽，2026-05-19 起：https://github.com/openclaw/openclaw/issues/83959
- **#63930** Anthropic advisor tool 支持，2026-04-09 起：https://github.com/openclaw/openclaw/issues/63930
- **#56781** compaction/summaryModel 回退链，2026-03-29 起：https://github.com/openclaw/openclaw/issues/56781
- **#44965** 流式重复输出保护，2026-03-13 起：https://github.com/openclaw/openclaw/issues/44965
- **PR #67421** per-agent web_fetch SSRF 覆盖，2026-04-15 起，`needs proof` + 安全边界风险：https://github.com/openclaw/openclaw/pull/67421
- **PR #140609** secrets exec proxy 小写别名加固，2026-09-07 起，需安全评审：https://github.com/openclaw/openclaw/pull/140609

**风险提示**：待合并 PR 282 条、无 fix PR 的高危 Issue 存量偏大，若 v2026.9.6 继续快速推进而不消化这些积压，回归问题可能持续在发布后集中爆发。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

> 数据窗口：2026-09-19（各项目过去 24 小时 GitHub 公开动态）
> 样本：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw
> 说明：本报告仅基于所提供摘要，未做外部推断；标注"无活动"的项目不参与统计。

---

## 1. 生态全景

个人 AI 助手赛道已明显分化为"高吞吐的参照级项目"与"聚焦单一问题的挑战者"两层：OpenClaw 单日 500+ Issues/PR 更新、两日连发版本，而多数同类项目单日动辄个位数活动甚至完全静默。今日最一致的信号不是新功能，而是**可靠性债务的集中暴露**——事件循环饥饿、SQLite/WAL 损坏、会话持久化丢写、归档无上限增长等"生产级"问题在两个以上项目中独立出现。与此同时，**"配置了却不生效"** 成为跨项目的复现级抱怨模式（env 覆盖失效、审批静默降级、hooks 重启丢失）。发布节奏普遍快于质量收敛速度，合并吞吐（尤其 XL 级 PR 与带 conflict 的 PR）已成为多数项目共同的第一瓶颈。生态整体处于"从个人工具走向规模化自托管"的临界点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（开/关） | PR 更新（待合并/已合并） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（343/157） | 500（282/218） | ✅ v2026.9.5 + Linux 通道 | 吞吐极旺，但 P0 回归集中爆发，稳定性债务重 |
| **Hermes Agent** | 50（43/7） | 50（48/2） | 无 | 活跃健康；审阅吞吐是瓶颈（2 合并） |
| **ZeroClaw** | 32（20/12） | 50（48/2） | 无 | 高强度开发；48:2 合并比，review 严重积压 |
| **CoPaw** | 15（13/2） | 21（20/1） | 无 | 活跃度高，合并吞吐低（20:1），积压风险 |
| **NanoBot** | 1 | 21（13/8） | 无 | 收敛期；8 条关闭集中于安全加固 |
| **LobsterAI** | 3 | 9（1 待合并/8 关闭） | 无 | "清理日"非"交付日"；高严重度修复被 stale 关闭 |
| **E NanoClaw** | 7（7/0） | 3（3/0） | 无 | 输入多输出少；7 条 Issue 0 条 fix PR |
| **IronClaw** | 0 | 3（3/0） | 无 | 静默；3 条 XL PR 停留 39–40 天 |
| **PicoClaw** | 1（1/0） | 4（3/1） | 无 | 中等偏低；stale 僵持（有活动无推进） |
| **Moltis** | 0 | 1（1/0） | 无 | 低位；单一 PR（Groq 支持）承载推进 |
| **NullClaw / TinyClaw / ZeptoClaw** | 无活动 | 无活动 | 无 | 静默 |

**观察**：Issues:PR 与"待合并:已合并"两个比值共同刻画健康度。OpenClaw 单向吞吐最高且双向均衡；ZeroClaw、CoPaw、Hermes 呈现"提交多、合入少"的共同特征。

---

## 3. OpenClaw 在生态中的定位

**规模**：v2026.9.5 标注 4,179 PR、503 contributors、64 direct commits——这一 contributor 量级在样本内无对标项，属于事实上的生态参照。

**优势**
- 唯一维持"数日连发 + 完整发布通道"（AppImage / Debian / linux-stable）的项目。
- 议题深度领先：用户已出现 **632-agent 集群** 规模的生产部署报告（#149538），样本内其他项目均无此量级的使用场景证据。

**技术路线差异**
- OpenClaw 的修复主线是**线程模型治理**——"把阻塞操作移出 Gateway 主线程"（#152745 / #152892 / #152820 / #152466），针对事件循环饥饿的根因层。
- 相较之下，CoPaw/Hermes 的同类问题更多以**局部补丁或遏制手段**应对（如 Hermes 以 `journal_mode=delete` 遏制 WAL 损坏），OpenClaw 的处理更偏结构性。

**代价**
- 发布速度带来回归集中爆发：v2026.9.5 发布当天即报 Codex retained-state 迁移不收敛（#152744），升级路径（global install swap）反复失败。
- 超过半数高危 Issue 带 `clawsweeper:no-new-fix-pr`，说明诊断能力被提交量稀释。

**一句话定位**：OpenClaw 是样本内唯一进入"规模化生产使用 + 快速迭代"双高压区间的项目，其稳定性问题因此最具代表性，也最值得作为其他项目的前车之鉴。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话/持久化层完整性** | OpenClaw、Hermes、NanoClaw、LobsterAI、NanoBot | SQLite/WAL 损坏与膨胀（OpenClaw #143524 达 1.4–2.8 GB；Hermes 5 周 4 次损坏 #100896、WAL 代际孤儿化 #109687）；NanoClaw 归档目录无上限 OOM（#3716/#3735）；LobsterAI SQLite 三缺陷（#1071/#1072） |
| **事件循环 / 阻塞** | OpenClaw、Hermes、NanoClaw、ZeroClaw | Gateway 主线程阻塞（OpenClaw 多条 off-thread PR）；Hermes 会话构建移出事件循环（#85001）；NanoClaw claim-stuck 看门狗误杀（#3455）；ZeroClaw 事件循环延迟看门狗（#7842） |
| **上下文 / 压缩经济学** | OpenClaw、Hermes、NanoBot、CoPaw、ZeroClaw | 压缩阈值无上限致计费二次增长（Hermes #83450）、预算超支 6.3 倍（#108647）；NanoBot 本地 token 估算低估 30–50% 致压缩永不触发（#5403）；CoPaw 历史太短与驱逐丢轮次（#7884/#7836）；ZeroClaw prompt-cache TTL（#10663） |
| **"配置了却不生效"** | NanoClaw、LobsterAI、ZeroClaw、CoPaw | 操作员 env 无法下发容器（NanoClaw #3714）；CLAUDE.md 被静默覆盖（#3854）；hooks 重启丢失（LobsterAI #2654）；无人值守轮次审批静默失效（ZeroClaw #10968 S0） |
| **子智能体 / 多 agent 编排可观测性** | Hermes、ZeroClaw、OpenClaw | 子 agent 指令被裁剪（Hermes #105574）；父 agent 无子 agent 进度（ZeroClaw #10531）；进程生命周期卫生（OpenClaw #97616 僵尸子进程） |
| **安全边界加固** | NanoBot、NanoClaw、ZeroClaw、OpenClaw | workspace symlink 绕过（NanoBot #4072）；挂载绕过（NanoClaw #3680）；git 全局选项绕过审批（ZeroClaw #9627，今日关闭）；SSRF 覆盖（OpenClaw PR #67421） |
| **升级路径脆弱** | OpenClaw、Hermes、NanoBot、PicoClaw | global install swap 失败（OpenClaw #144712/#146637/#151467）；`hermes update` 崩溃留死标记（#115638）；新增 `nanobot update`（#5817） |

**最强共识**：**会话数据的不可丢失性**与**上下文成本的可控性**——两个方向几乎覆盖全部活跃项目，且均有量化证据（GB 级膨胀、6.3 倍超支、30–50% 低估）。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 / 场景 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人助手 + 多通道 | 大规模自托管 fleet、Windows/macOS/Linux | Gateway 中心化，线程模型是核心议题 |
| **Hermes Agent** | ACP 会话 + 多编辑器集成 + Bot 群聊 | VS Code/Zed/JetBrains、Desktop Projects | session-catalog / state.db 持久化，事件循环 single-flight |
| **NanoBot** | 安全策略执行 + Dream 写入防护 + 上下文压缩 | 关注 AgentLoop 授权与成本的使用者 | AgentLoop + channel 策略钩子；`nanobot update` 自更新（含 Bun runtime） |
| **ZeroClaw** | 多通道（含 WhatsApp/Bluesky/Reddit）+ SOP 审批门 | 无人值守编排、多 agent 单机部署 | Rust；编译期 feature → 运行时可安装 WASM 插件的架构级迁移（#8850） |
| **CoPaw** | scroll 驱逐 + 供应商适配 + 插件治理钩子 | 中文社区、DeepSeek/OpenCode 用户 | pre-tool-call 策略钩子（#7878/#7880）走向插件化治理 |
| **NanoClaw** | 容器化会话 + Slack 直连 | 运维可控性敏感的自托管用户 | 会话容器 + host-sweep 看门狗 |
| **IronClaw** | IdentyClaw Passport 集成 + Reborn 存储 | NEAR 生态、无进程 agent | host seam 替代 shell/可安装扩展；profile 无关存储 |
| **LobsterAI** | OpenClaw 生态集成 + 微信/QQ 渠道 | 国内 IM 场景 | 依赖 OpenClaw 引擎（`McpBridgeServer` 拦截） |
| **PicoClaw** | 渠道扩展（QQ/Feishu/DeltaChat） | 边缘设备 / Go 生态 | Go 实现；`opencode-go` provider 新增 |
| **Moltis** | 提供商适配层 | Groq 用户 | OpenAI-compatible provider 注册 + fallback schema 一致性 |

**关键分野**：
- **中心化 Gateway vs 容器化会话**：OpenClaw/Hermes/ZeroClaw 走前者，NanoClaw 走后者，决定了可靠性问题的形态（线程阻塞 vs 归档无界）。
- **语言栈**：Rust（ZeroClaw）、Go（PicoClaw）、Python（Hermes/NanoBot/CoPaw）各有不同的性能与生态取舍。
- **生态位**：LobsterAI 明确构建在 OpenClaw 之上（"OpenClaw 启动可靠性"是其 PR 主题），说明 OpenClaw 已开始产生下游依赖层。

---

## 6. 社区热度与成熟度

**第一层：快速迭代 / 规模验证期**
- **OpenClaw** — 唯一有 500 级双向吞吐 + 生产 fleet 报告。处于"功能与规模领先、质量追赶"阶段。
- **ZeroClaw** — 48 条待合并、多条 XL、S0 安全今日新开，处于架构扩张期。

**第二层：活跃但审阅积压**
- **Hermes Agent**（48:2）、**CoPaw**（20:1）— 提交旺盛，合并吞吐不足。属于"有产能、缺带宽"。

**第三层：质量巩固 / 收敛期**
- **NanoBot** — 8 条关闭集中于安全加固，13 条待合并，从扩张转向收敛。
- **LobsterAI** — 今日为"存量清理日"，但清理方式（stale 关闭）未解决真实缺陷。
- **NanoClaw** — 输入（7）> 输出（0），问题已定义清楚但尚无修复落地。

**第四层：低活跃 / 静默**
- **IronClaw**（3 条 XL PR 停留 39–40 天）、**PicoClaw**（stale 僵持）、**Moltis**（单一 PR）、**NullClaw / TinyClaw / ZeptoClaw**（无活动）。

**成熟度判断**：样本内尚无项目同时具备"高吞吐 + 高合并率 + 零 P0 回归"。OpenClaw 最接近规模化，但代价是回归控制；其余项目多停留在单一维度的健康。

---

## 7. 值得关注的趋势信号

1. **"可运维契约"成为核心诉求**
   NanoClaw 用户的诉求已从"修 bug"升级为"给归档与压缩机制一套完整契约（保留策略 + 配置生效路径 + 误杀防护）"（#3455/#3714/#3716/#3735 同源）。**对开发者的参考价值**：归档/compaction 不应是隐式副作用，必须暴露 retention/rotation/cap 与生效验证。

2. **静默失败比崩溃更伤信任**
   跨项目反复出现——Hermes "gateway 继续服务却静默丢弃写入"（#109687）、ZeroClaw 审批"配置了但没生效"（#10968）、NanoClaw "CLI 退出码 0 接受任意值"（#3855）。**参考价值**：显式失败优于静默吞掉，尤其在安全与持久化路径。

3. **上下文成本进入量化归因阶段**
   Hermes 用户实测"6.3 倍超支"、NanoBot 用户指出"低估 30–50%"、ZeroClaw 用户关注 cache TTL。**参考价值**：token 预算需要与 API 实际计数对齐，且压缩策略需有上限而非仅下限。

4. **本地 token 估算与实际计费的断层是系统性缺陷**
   NanoBot #5403 揭示 tiktoken 估算与现代模型 prompt 计数偏差达 30–50%，直接导致压缩机制失效。这不是单项目问题，而是所有依赖本地估算的 agent 的共性风险。

5. **编译期 → 运行时可扩展的架构迁移**
   ZeroClaw #8850（Cargo feature → WASM 插件）是样本内最具架构影响的信号，指向"stock binary 无需重编译即可获新通道/工具"的分发模型。

6. **插件化治理钩子浮现为标准模式**
   CoPaw #7878/#7880（pre-tool-call 策略钩子）、ZeroClaw #10891（通道来源可信链路）、OpenClaw 审计/出站策略钩子——治理点正从核心下沉到插件层。

7. **stale 机制存在误伤高严重度修复的风险**
   LobsterAI 今日以 `[stale]` 关闭了 SQLite 完整性（#1072）与 Run History 数据丢失（#1076）两项高严重度修复，问题本身未解决。**参考价值**：清理策略应对高严重度标签设置豁免。

8. **合并吞吐是全生态瓶颈，XL 级 PR 尤甚**
   ZeroClaw 48:2、Hermes 48:2、CoPaw 20:1；IronClaw 两条 XL PR 积压超一个月；ZeroClaw 多个 XL PR 集中在单一作者。**参考价值**：review 带宽（而非作者产能）是当前扩展上限，需要拆分策略或增加 reviewer。

**对开发者的总体建议**：当下生态的竞争焦点已从"功能覆盖"转向"生产可靠性 + 成本可控 + 运维可观测"。新项目若在这三点上给出显式契约（失败可见、预算有界、配置可验证），比堆叠通道与 provider 更能建立信任。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-19

## 1. 今日速览

今日项目无新版本发布，但 PR 流转密集：过去 24 小时共 21 条 PR 更新，其中 13 条待合并、8 条已合并/关闭，Issues 仅 1 条更新。合并/关闭的 PR 集中在安全加固方向（`#4668`、`#4667`、`#4664`），显示维护者正在清理一条长期挂起的 security 分支。同时仍有多个 `conflict` 标记的 PR 处于开放状态，合并冲突积压是当前主要的工程风险。整体活跃度中等偏高，但"关闭多于新开"的 PR 结构说明项目正处于收敛期而非扩张期。

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

## 3. 项目进展

今日合并/关闭的 8 条 PR 中，以下几条推进最为明显：

- **#4668 fix: enforce message outbound policy** [已关闭] — 在 `message` 工具出站分发前增加授权钩子，将 AgentLoop 接入 channel 的 `allow_from` / `group_allow_from` 策略，并将本地媒体附件限制在 workspace/media 根目录内。链接: HKUDS/nanobot PR #4668
- **#4667 fix: protect user skills from dream writes** [已关闭] — 为 workspace skills 增加 Dream 专属写入防护，要求 `dream_managed: true` frontmatter 才允许 Dream 修改既有 skill。关联 Issue #4073。链接: HKUDS/nanobot PR #4667
- **#4664 fix: protect dream history during compaction** [已关闭] — 使历史压缩保留比 Dream cursor 更新的条目。Fixes #4055。链接: HKUDS/nanobot PR #4664
- **#4661 fix: separate file edit progress ids** [已关闭] — 保持 provider tool_call ID 在最终响应解析后不可变，为文件编辑引入独立的 progress_id。链接: HKUDS/nanobot PR #4661
- **#4588 optimization: 压缩工具输出上下文** [已关闭] — 新增命令行输出压缩模块，对 JSON、diff、lint/test/build 诊断、表格等常见命令族进行定向压缩。关联 #4581。链接: HKUDS/nanobot PR #4588
- **#4581 perf(agent): prune low-value context payloads** [已关闭] — 压缩超大的 subagent announcement，按上下文预算调整 tool-result 重放上限。链接: HKUDS/nanobot PR #4581
- **#5816 feat(webui): polish provider setup and unify settings controls** [已关闭] — 统一 provider logo、模型选择器与设置控件样式。链接: HKUDS/nanobot PR #5816

总体看，今日关闭的 PR 覆盖了**安全策略执行、Dream 写入防护、上下文压缩优化、WebUI 体验**四条主线，项目在安全与性能两个方向上有实质推进。

## 4. 社区热点

本次数据中所有 PR 的评论数字段均为 `undefined`，Issues 评论数为 0，因此无法基于评论量识别热点。从更新时间与标记维度看，以下条目值得关注：

- **#5403 fix(memory): use API-reported prompt tokens to trigger consolidation** [OPEN, priority: p1, conflict] — 更新于 2026-09-19，标记为 P1 且带 `conflict`。摘要指出本地 tiktoken 估算持续低估现代模型的 prompt token（比 API 实际计数低 30–50%），导致 token 压缩机制始终无法触发。链接: HKUDS/nanobot PR #5403
- **#5748 fix(recovery): persist partial tool progress at batch boundaries** [OPEN] — 运行时 checkpoint 此前仅在执行前和整批工具调用完成后持久化，中间的进程退出会导致已完成结果丢失。链接: HKUDS/nanobot PR #5748
- **#5257 fix(agent): bound sustained-goal continuation when the turn goes idle** [OPEN] — 处理 sustained goal 生命周期两端的问题，包括无终止条件的循环 cadence 请求被错误登记为 sustained goal。链接: HKUDS/nanobot PR #5257

诉求分析：热点集中于**长会话稳定性与记忆机制正确性**，反映用户在高强度使用场景下对 token 预算控制与状态持久化的真实需求。

## 5. Bug 与稳定性

按严重程度排列：

**高（安全类）**
- **Issue #4072 [OPEN]** Security: ExecTool restricted workspace can be bypassed through relative symlinks — `restrict_to_workspace=True` 时，可通过 workspace 内的相对符号链接读取外部内容；shell guard 仅检查命令文本与绝对路径，未在检查前解析相对 symlink。作者 hamb1y，创建于 2026-05-29，更新于 2026-09-19，评论 0。**目前无对应 fix PR。** 链接: HKUDS/nanobot Issue #4072

**中**
- **#5403** 记忆压缩永不触发（token 估算低估 30–50%）；已有 fix PR，但带 `conflict` 标记，P1。链接: HKUDS/nanobot PR #5403
- **#5748** 批次边界进程退出导致已完成工具结果丢失；已有 fix PR。链接: HKUDS/nanobot PR #5748
- **#5257** sustained goal 无终止条件与 idle 边界处理问题；已有 fix PR。链接: HKUDS/nanobot PR #5257

**低**
- **#5641** iOS PWA 首次点击被吞、状态栏问题；已有 fix PR。链接: HKUDS/nanobot PR #5641
- **#5260** 被跟踪的 workspace 目录内 runtime 文件污染问题；已有 fix PR。链接: HKUDS/nanobot PR #5260
- **#5292** Matrix 房间级回复未关联到触发该轮的用户消息；已有 fix PR。链接: HKUDS/nanobot PR #5292

值得注意：Issue #4072 是一条 **2026-05-29 创建、四个月后仍在更新且零评论** 的安全问题，且今日关闭的 #4667 明确标注 Fixes #4073，说明 #4072/#4073 属于同一批由 hamb1y 报告的安全审计系列，建议优先确认 #4072 是否已有覆盖。

## 6. 功能请求与路线图信号

- **自更新流程** — #5817 [OPEN] 新增 `nanobot update` 拉取最新 stable PyPI 版本，支持显式 `--dev` / `--update-dev` 源码更新（fast-forward-only checkout），并在需要时引导一个固定版本、SHA-256 校验的私有 Bun runtime。这是一个**面向发布基础设施的完整功能包**，且创建与更新均为今日，纳入下一版本的可能性较高。链接: HKUDS/nanobot PR #5817
- **多语言本地化** — #5367 [OPEN] 将 WebUI 自有 Agent activity 标签本地化到全部 10 个受支持的 locale，语言切换时立即更新，并保留路径、命令、URL 等原始工具值。链接: HKUDS/nanobot PR #5367
- **上下文成本优化** — #4581 与 #4588 已关闭，说明"压缩工具输出以降低 token 成本"这条路线已有落地；结合 #5403 的内存压缩修复，可判断 **token 经济性** 是当前路线图的持续主题。

## 7. 用户反馈摘要

本次数据中唯一一条 Issue（#4072）评论数为 0，所有 PR 评论数字段为 `undefined`，因此**无足够的用户评论素材可提炼真实痛点、使用场景或满意度**。仅能从 Issue/PR 摘要文本推断以下已表达诉求：

- 安全审计视角：workspace 隔离在使用相对符号链接时不可靠（#4072）。
- 成本与可靠性视角：本地 token 估算与实际计费口径不一致，导致内存合并行为不符合预期（#5403）。
- 崩溃恢复视角：批次中间退出会丢失已完成的工具结果，影响长任务可靠性（#5748）。
- 移动端体验视角：iOS PWA 上首次点击丢失，影响日常交互（#5641）。

## 8. 待处理积压

以下条目创建时间较早、今日仍在更新，且部分带有 `conflict` 标记，建议维护者优先处理：

- **Issue #4072**（创建 2026-05-29，已积压约 3.7 个月，零评论，无 fix PR，安全类 P1 性质）— 链接: HKUDS/nanobot Issue #4072
- **#4667 / #4664 / #4661**（均创建于 2026-07-02）今日已关闭，属于积压释放；但同一作者 hamb1y 的 #4668 今日同样关闭，说明这批 7 月初的安全 PR 经历了约 2.5 个月才完成合并。
- **#5257**（创建 2026-08-05，已积压约 1.5 个月，P2，带 conflict）— 链接: HKUDS/nanobot PR #5257
- **#5260**（创建 2026-08-05，P2，带 conflict）— 链接: HKUDS/nanobot PR #5260
- **#5292**（创建 2026-08-08，至今未合并）— 链接: HKUDS/nanobot PR #5292
- **#5367**（创建 2026-08-13，P2）— 链接: HKUDS/nanobot PR #5367
- **#5403**（创建 2026-08-16，P1，带 conflict，已积压约 1 个月）— 链接: HKUDS/nanobot PR #5403

**健康度提示**：今日 21 条 PR 更新中有 13 条待合并、多条带 `conflict`，且第 3 节所列已关闭 PR 显示从创建到合并且跨度达 1–2.5 个月，说明**评审吞吐与冲突消解是当前项目的主要瓶颈**。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-19

## 1. 今日速览

项目今日处于**高活跃、修复密集型**状态：过去 24 小时 Issues 更新 50 条（新开/活跃 43，关闭 7），PR 更新 50 条（待合并 48，合并/关闭仅 2），无新版本发布。讨论高度集中在会话状态（`state.db` / WAL / 会话持久化）与压缩器（context compressor）两个主题，P0/P1 级缺陷占比明显。合并侧动作偏少（仅 2 条），说明大量修复仍积压在待合并队列中。整体看，项目活跃度健康，但**审阅与合并吞吐是当前瓶颈**。

## 2. 版本发布

今日无新版本发布，无 Releases 记录。

## 3. 项目进展

今日仅 2 条 PR 被合并/关闭，推进幅度有限：

- **#85001 [CLOSED]** `fix(acp): build sessions off the event loop with async single-flight` — 关闭 #78205，同一机制亦关联 #58083 与 block/buzz#4098，采用异步 single-flight 将会话构建移出事件循环。
  链接: NousResearch/hermes-agent PR #85001

- 待合并队列中体量较大的结构性工作（尚未落地，但体现推进方向）：
  - **#116098** `refactor(profiles): extract the tar.gz profile export/import cluster` — 将 `hermes_cli/profiles.py` 从 2090 行缩至 1865 行，新增 `profiles_export.py`（244 行），属 #79980/#78647 的组成部分。
    链接: NousResearch/hermes-agent PR #116098
  - **#115707** `fix(acp): persist session cwd and git metadata to the sessions table` — 修复 ACP 会话（VS Code、Zed、JetBrains 等）`sessions.cwd` 为 NULL 的问题，影响 Desktop Projects 侧栏与 `hermes sessions list`。
    链接: NousResearch/hermes-agent PR #115707

**结论**：今日净前进幅度小，48 条待合并 PR 构成显著的审阅积压。

## 4. 社区热点

按评论数排序的讨论焦点：

| 条目 | 状态 | 评论 | 主题 |
|---|---|---|---|
| #88584 | OPEN | 118 | 自动化 Nous 集成被阻塞（`cron/jobs.py` 冲突） |
| #97681 | OPEN | 28 | Desktop 关闭后 Bot 群聊应继续工作 |
| #100896 | OPEN | 16 | 5 周内 `state.db` 损坏 4 次（WAL 多写入者） |
| #109687 | CLOSED | 14 | 单次 CLI 调用导致 gateway `state.db` WAL 代际孤儿化 |

- **#88584** 讨论量遥遥领先（118 评论）。摘要显示 scheduled Nous-to-Enterkey merge 在 `cron/jobs.py` 存在冲突，无 release 分支被改动，dashboard updater 停留在最后一个已测试的 Enterkey release。
  链接: NousResearch/hermes-agent Issue #88584
- **#97681**（28 评论，👍 2）诉求是**跨设备、跨 gateway 的持久 Bot 群聊**：创建群聊后不保持 Desktop 开启，也能从另一台设备接入。
  链接: NousResearch/hermes-agent Issue #97681
- **#100896**（16 评论）与 **#109687**（14 评论，已关闭）共同指向**同一类数据完整性问题**：多进程写入 + WAL 模式下的会话数据丢失/损坏。

**背后诉求**：社区最关心的是「会话数据不能丢」以及「集成流水线不能长期卡住」，而非新功能。

## 5. Bug 与稳定性

按严重程度排列：

**P0**
- **#109687 [CLOSED]** 单次普通 CLI 调用使运行中 gateway 的 `state.db` WAL 代际孤儿化（Linux，ext4，v0.21.2 / main @92df11f8，复现于 2026-09-12 main，且在 #102589 修复之后）——**gateway 持续服务但静默丢弃会话写入**。高危静默失败；今日已关闭。
  链接: NousResearch/hermes-agent Issue #109687

**P1**
- **#100896 [OPEN]** `state.db` 5 周内损坏 4 次；gateway + dashboard 多写入者 WAL；「5 live SessionDB handles」警告在故障前 7 分钟触发；以 `journal_mode=delete` 作为遏制手段。**未见 fix PR**。
  链接: NousResearch/hermes-agent Issue #100896
- **#30220 [CLOSED]** 后台自我改进审阅（`_spawn_background_review`，`run_agent.py`）在 memory/skill/user 三个存储间错误分类内容。
  链接: NousResearch/hermes-agent Issue #30220
- **#83450 [CLOSED]** `compression.threshold` 仅有 token 下限无上限：1M 上下文模型上首次压缩在 500K 触发，长会话计费呈二次增长（`agent/context_compressor.py:553`）。
  链接: NousResearch/hermes-agent Issue #83450
- **#108647 [CLOSED]** `_find_tail_cut_by_tokens()`（`context_compressor.py:4231`）尾部消息下限覆盖精简 token 预算且无上限，实测 6.3 倍超支。
  链接: NousResearch/hermes-agent Issue #108647
- **#105574 [OPEN]** `fix(context-compressor): Pass 4 clips pending tool-call args pre-send` —— `delegate_task` 派发的 5 个子智能体收到损坏指令（长字符串被裁剪）。有对应修复 PR/议题本身。
  链接: NousResearch/hermes-agent Issue #105574
- **#55806 [OPEN]** Gateway 排队后续消息在流式投递确认失败时重发上一轮响应（图片 + 后台进程竞态），Discord 出现可见的双重回复。
  链接: NousResearch/hermes-agent Issue #55806
- **#74265 [CLOSED]** `load_dotenv(override=True)` 在第二次 `load_hermes_dotenv` 调用时覆盖 BSM 解析的密钥，gateway 进程拿到 `__BITWARDEN_MANAGED__` 占位符。
  链接: NousResearch/hermes-agent Issue #74265

**P2**
- **#115306 [OPEN]** 更新至 `1e4952ddba` 后 Google AI Studio 的 `AQ.` 开头 Gemini 密钥失效，回退到 `98f758ae7e` 可恢复。**回归，需优先确认**。
  链接: NousResearch/hermes-agent Issue #115306
- **#115638 [OPEN]** `hermes update` 在清理中途崩溃后写入的 `fleet_restart_pending` 标记缺少 `inventory=` 行，导致标记无法解除。
  链接: NousResearch/hermes-agent Issue #115638
- **#75065 [OPEN]** 静默结果失败：空闲会话 `watch_patterns` 通知延迟 14.5 分钟；MEDIA 指令跳过从未上报给 agent。
  链接: NousResearch/hermes-agent Issue #75065
- **#100716 [OPEN]** `is_repetition_dominated` 漏检几乎所有真实重复循环，且仅在 `finish_reason=length` 路径上运行。
  链接: NousResearch/hermes-agent Issue #100716
- **#79295 [OPEN]** `curator.prune_builtins: true` 时，首次 curator 运行前植入的内置 skills 全部被标记为 stale。
  链接: NousResearch/hermes-agent Issue #79295

**P3**
- **#115814 [OPEN]** Windows 上 `OLLAMA_PROVIDER` 批处理适配器跨冷启动被忽略，产生 9+ 个子进程。
  链接: NousResearch/hermes-agent Issue #115814
- **#76795 [OPEN]** `/skills pending` 无分页无上限，12 小时内累积 40 条 / 5558 字符。
  链接: NousResearch/hermes-agent Issue #76795

**修复 PR 线索（尚未合并）**：`#116104`（DeepSeek 压缩禁用 reasoning）、`#116097`（LSP UTF-16 文档替换范围）、`#116100`（browser supervisor 随所属会话停止）、`#116089`（terminal auto 模式修复缺失 HOME）、`#116103`（agent 在可见动作承诺后继续而非接受纯文本停止）、`#106211`（DOCX 样式引用跨 content stories 校验）。

## 6. 功能请求与路线图信号

- **#97681** 跨设备持久 Bot 群聊（👍 2，28 评论）——需求最集中的功能请求。
  链接: NousResearch/hermes-agent Issue #97681
- **#78307** 内置内存（`MEMORY.md` / `USER.md`）生命周期管理：检视、健康、去重、合并、冲突检测、待处理队列卫生、可恢复性。
  链接: NousResearch/hermes-agent Issue #78307
- **#13566** Cron 投递重试机制（`cron/scheduler.py` 目前无重试），应对 Telegram API 超时与移动网络不稳。
  链接: NousResearch/hermes-agent Issue #13566
- **#116019** ADHD 友好的捕获与恢复工作流（Desktop），起始于本地想法捕获。
  链接: NousResearch/hermes-agent Issue #116019

**可能进入下一版本的候选**（已有对应 PR 支撑）：
- **#87047** 模型提供方插件的 profile 钩子点（llamacpp 先行，全部默认关闭）。
  链接: NousResearch/hermes-agent PR #87047
- **#102875** Linux bubblewrap 终端后端（每条命令独立 bwrap 沙箱，宿主文件系统只读）。
  链接: NousResearch/hermes-agent PR #102875
- **#45961** 支持 fallback 专用 reasoning 配置（`fallback_providers` 上的 `reasoning_effort` / `reasoning`）。
  链接: NousResearch/hermes-agent PR #45961
- **#116101** Vault 允许显式指定可注册域来源，默认仍为精确匹配。
  链接: NousResearch/hermes-agent PR #116101

## 7. 用户反馈摘要

- **数据完整性是最大痛点**：#100896 报告 5 周 4 次 `state.db` 损坏，并附上「5 live SessionDB handles」在故障前 7 分钟的预警；#109687 描述 gateway「继续服务却静默丢弃写入」，用户称在 #102589 修复后仍能在 2026-09-12 main 上复现。这类静默失败严重削弱用户对持久化层的信任。
- **长会话成本与压缩行为受质疑**：#83450 指出 1M 上下文模型下压缩阈值无上限、长会话计费二次增长；#108647 实测尾部预算超支 6.3 倍。用户在做量化归因，说明生产环境中长会话已是常态。
- **子智能体指令被裁剪**：#105574 中 `delegate_task` 派发的 5 个子智能体收到损坏指令，影响真实工作流。
- **跨设备协作场景明确**：#97681 的用户希望用另一台设备接手群聊，而不必让 Desktop 常开。
- **升级体验问题**：#115306 用户通过回退 commit（`1e4952ddba` → `98f758ae7e`）定位 Gemini 密钥回归，属可复现的版本级回归；#115638 反映 `hermes update` 中途崩溃会留下不可解除的标记。
- **本地/Windows 支持仍有缺口**：#115814 显示 Windows 冷启动下批处理配置被完全忽略。
- **正面信号有限**：本批数据中 👍 数普遍为 0–2，缺乏明确的满意反馈样本，建议结合后续数据观察。

## 8. 待处理积压

长期未关闭且仍需维护者决策的重要条目：

| 条目 | 创建日期 | 状态 | 积压时长 |
|---|---|---|---|
| #13566 Cron 投递重试 | 2026-04-21 | OPEN, needs-decision | 约 5 个月 |
| #30220 后台审阅错误分类 | 2026-05-22 | CLOSED（今日关闭） | 约 4 个月 |
| #45961 fallback reasoning 配置（PR） | 2026-06-14 | OPEN | 约 3 个月 |
| #55806 Gateway 重发上一响应 | 2026-06-30 | OPEN | 约 2.5 个月 |
| #74265 BSM 密钥被覆盖 | 2026-07-29 | CLOSED（今日关闭） | 约 1.5 个月 |
| #75065 静默结果失败 | 2026-07-30 | OPEN | 约 1.5 个月 |
| #76795 `/skills pending` 无上限 | 2026-08-02 | OPEN | 约 1.5 个月 |
| #78307 内存生命周期管理 | 2026-08-04 | OPEN, needs-decision | 约 1.5 个月 |
| #79295 curator 误标 stale | 2026-08-05 | OPEN | 约 1.5 个月 |
| #87047 provider 插件钩子（PR） | 2026-08-15 | OPEN | 约 1 个月 |
| #88584 Nous 集成阻塞 | 2026-08-17 | OPEN | 约 1 个月（118 评论） |

**重点关注**：
1. **#88584** —— 118 条评论、集成流水线持续阻塞，且被标记为 `invalid`，建议维护者澄清或升级处理。
2. **#100896** —— P1 数据损坏类问题，尚无 fix PR，风险随生产使用持续累积。
3. **#13566** 与 **#78307** —— 均带 `needs-decision` 标签，等待方向性决策而非代码。
4. **PR 审阅吞吐** —— 48 条待合并 PR 中多条为 P2/P3 修复与安全边界相关（如 #116096 依赖公告清理、#102875 bubblewrap 沙箱），建议优先处理安全与回归类。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-19

## 1. 今日速览

过去 24 小时项目活跃度处于**中等偏低**水平：无新版本发布；Issues 仅 1 条更新（新开/活跃 1，关闭 0），PR 更新 4 条（待合并 3，已合并/关闭 1）。当日唯一关闭的动态是长期挂起的 QQ 频道附件支持 PR #1349（创建于 2026-03-11），耗时超过 6 个月才被关闭。开放队列中仍有大量 stale 标记条目（Issue #3355、PR #3371），提示维护者对积压事项的响应节奏偏慢。整体看，项目在渠道能力扩展与 UI 体验修复上仍有推进，但社区互动热度不高，健康度需关注积压清理效率。

## 2. 版本发布

无新版本发布，本部分省略。

## 3. 项目进展

今日唯一合并/关闭的动态为：

- **PR #1349 [CLOSED]** `feat(qq): support parsing and replying to more attachment types`（作者 aishannon，创建 2026-03-11，更新 2026-09-18）
  链接：sipeed/picoclaw PR #1349
  该 PR 涉及四项能力：(1) 解析 QQ 频道 emoji 结构；(2) 处理 QQ 频道传入的语音、图片、视频、文件消息；(3) 支持回复本地语音、图片、视频、文件附件（发送前先上传）；(4) 摘要中列出的 "Prior..." 内容未在提供的数据中完整呈现，故不展开。
  需注意：该 PR 状态为 CLOSED 而非 MERGED，数据中未标明其是否被合并，因此不应假设其功能已进入主干。

其余 3 条 PR（#3347、#3371、#3222）今日仅有更新，仍处于待合并状态，项目整体功能推进今日实际增量有限。

## 4. 社区热点

今日数据中缺乏明确的评论数与 👍 数据（多数 PR 评论显示为 undefined，Issue #3355 为 2 条评论、0 👍），讨论热度整体平淡。相对值得关注的条目：

- **Issue #3355**（2 条评论，今日更新）
  链接：sipeed/picoclaw Issue #3355
  主题为飞书渠道配置报错，且用户**自带解决方案**（提示 `config.json contains unknown field(s): channel_list.feishu.app_id`）。2 条评论使其成为今日唯一有实质讨论的条目，反映渠道配置字段与解析逻辑之间存在不匹配。

- **PR #3347** `fix laggy interface`
  链接：sipeed/picoclaw PR #3347
  作者称在聊天区域文本较多时 Web UI 出现卡顿，已在 `picoclaw-launcher` 上完成构建与测试，桌面与移动浏览器（均为 Brave）均不再卡顿。UI 性能是直接影响用户日常体验的问题，虽无评论数据，但议题本身对用户感知较强。

## 5. Bug 与稳定性

按严重程度排列（依据提供的数据，仅含 1 条明确 Bug）：

1. **[中] 飞书渠道配置报错 — Issue #3355**（OPEN，标记 stale，2 条评论，暂无对应 fix PR）
   链接：sipeed/picoclaw Issue #3355
   现象：配置 `channel_list.feishu.app_id` 时报 "unknown field(s)"。复现环境为 picoclaw nightly-50-gbbf6893c (git: bbf6893c)，Go 1.25.13，渠道为 Feishu。用户已附上解决方案，但截至今日仍为 OPEN 且被标记 stale，**无关联修复 PR**。
   影响面：阻断飞书渠道的正常配置与接入。

2. **[轻/体验类] Web UI 卡顿 — PR #3347**（OPEN，暂无合并）
   链接：sipeed/picoclaw PR #3347
   非崩溃类回归，但影响长文本聊天场景的可用性；已有修复 PR 待合并，建议优先评审。

## 6. 功能请求与路线图信号

今日无用户新提交的功能请求类 Issue。从待合并 PR 可观察到的路线图信号：

- **新增 provider 支持**：PR #3371 新增专用 `opencode-go` provider（`https://opencode.ai/zen/go/v1`），按模型 ID 自动路由到对应端点族，并支持 `x-opencode-session` 头。该 PR 被标记 stale、创建于 2026-09-08。
  链接：sipeed/picoclaw PR #3371
  判断：属于模型/供应商接入扩展，若评审通过，可能进入下一版本；但 stale 标记显示其推进受阻。

- **渠道能力增强**：PR #1349 的 QQ 多渠道附件收发能力（今日关闭状态）。若确已合并，则未来版本可能包含更完整的 QQ 渠道多模态支持；若仅为关闭，则相关需求仍在待办状态。

- **DeltaChat 实现清理**：PR #3222 以重构为主（`-200LOC`），移除遗留特性与回退逻辑、引用官方 relay 列表网站替代硬编码副本、移除基于密码的邮件配置（密钥改由 jsonrpc 承载）、将 `invite_link` 重命名。
  链接：sipeed/picoclaw PR #3222
  判断：属技术债清理类变更，**可能涉及配置字段重命名等兼容性影响**，若合并需关注迁移说明。

## 7. 用户反馈摘要

基于提供的有限评论与摘要数据：

- **痛点（配置层）**：飞书用户遭遇配置字段校验失败（Issue #3355），说明 `channel_list.feishu.app_id` 在版本 bbf6893c 中不被识别，配置结构与代码解析不一致；用户不得不自行研究并提交解决方案，反映出文档或配置校验提示不够清晰。
- **痛点（性能层）**：聊天区文本量大时 Web UI 卡顿（PR #3347），用户在 Brave 桌面与移动端均复现，说明问题跨平台存在。
- **使用场景**：QQ 频道用户存在 emoji、语音、图片、视频、文件等多模态收发需求（PR #1349），是渠道侧的高频实际诉求。
- **满意度信号**：数据中未见明确的正面/负面情绪统计（多数条目 👍 为 0、评论数缺失），无法量化满意度，不臆测。

## 8. 待处理积压

以下条目创建时间早、今日仍有更新但长期未决，建议维护者优先响应：

| 条目 | 类型 | 创建时间 | 距今 | 状态 | 链接 |
|---|---|---|---|---|---|
| PR #1349 | QQ 附件支持 | 2026-03-11 | 约 6 个月 | CLOSED（未标明是否合并） | sipeed/picoclaw PR #1349 |
| PR #3222 | DeltaChat 重构 -200LOC | 2026-07-03 | 约 2.5 个月 | OPEN | sipeed/picoclaw PR #3222 |
| PR #3347 | UI 卡顿修复 | 2026-08-27 | 约 3 周 | OPEN | sipeed/picoclaw PR #3347 |
| Issue #3355 | 飞书配置报错 | 2026-09-01 | 约 2.5 周 | OPEN + stale，无 fix PR | sipeed/picoclaw Issue #3355 |
| PR #3371 | opencode-go provider | 2026-09-08 | 约 1.5 周 | OPEN + stale | sipeed/picoclaw PR #3371 |

**重点关注**：Issue #3355 与 PR #3371 均带 stale 标记但今日仍有更新，说明存在"有活动但未推进"的僵持状态；PR #3347（UI 卡顿修复，作者已自测通过）属于低成本高收益改动，建议优先评审合并。

---

*本日报仅基于所提供的 GitHub 数据生成；未提供的事实（如 PR 是否实际合并、评论具体内容、下载量等）均未做推断，相关处已明确标注。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-19

## 1. 今日速览

今日项目活跃度**中等偏高**，但呈"输入多、输出少"的失衡状态：过去 24 小时共有 7 条 Issue 更新（全部新开或活跃，0 关闭）与 3 条 PR 更新（0 合并/关闭），无新版本发布。讨论焦点高度集中在两个主题——`conversations/` 归档目录无上限增长导致的生产环境 OOM（#3735、#3716）与操作员环境变量无法下发至会话容器（#3714），且多个问题相互关联，指向同一处 compaction/归档机制。今日新开 Issue 由同一批用户提交，涵盖 CLI 参数校验缺失（#3855）、生成文件被静默覆盖（#3854）与文档落后（#3853），反映 2.3.0 版本的用户侧体验问题正在集中暴露。维护者尚无任何合并动作，积压压力上升。

---

## 2. 版本发布

无新版本发布（今日 Releases 为空），故不作展开。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目在代码层面未取得可验证的向前推进。当前 3 条 PR 全部处于待合并状态：

- **PR #3680**（[链接](https://github.com/nanocoai/nanoclaw/pull/3680)）— 安全修复：关闭 `validateSpec` 中 allowlisted-extra 挂载绕过，涉及 containers/credentials/providers/security 多个领域标签。
- **PR #3420**（[链接](https://github.com/nanocoai/nanoclaw/pull/3420)）— 使 macOS 状态栏 Swift 代码与 plist 标签支持 slug 感知，适配 `com.nanoclaw-v2-<installSlug>` 新标签体系（叠加于 #3408 之上）。
- **PR #3852**（[链接](https://github.com/nanocoai/nanoclaw/pull/3852)）— Slack 直连模式 provisioning 前轮换管理令牌，解决 12 小时令牌过期无法续期的问题。

其中 #3420 自 2026-08-20 创建以来已近一个月未合并且有依赖关系（stacked），是当前积压时间最长的核心团队 PR。

---

## 4. 社区热点

今日讨论最集中的三个议题均为高严重度稳定性问题，且彼此关联：

- **Issue #3716**（[链接](https://github.com/nanocoai/nanoclaw/issues/3716)）— 3 条评论，报告者 DawoudIO 指出每次 `PreCompact` 钩子触发都会全量重写整个会话历史为新文件，且无轮转与上限，直指生产 OOM 崩溃循环的"真实原因"。
- **Issue #3735**（[链接](https://github.com/nanocoai/nanoclaw/issues/3735)）— 3 条评论，从另一角度描述同一目录 `groups/<folder>/conversations/` 无保留策略、无上限、无轮转，目录持续增长。
- **Issue #3714**（[链接](https://github.com/nanocoai/nanoclaw/issues/3714)）— 1 条评论，指出三个文档中标注为操作员覆盖项的环境变量（自动压缩窗口、transcript 轮转等）从未被转发进会话容器，用户只能靠打补丁设置。

**背后诉求分析**：这三条（连同 #3455）共同拼出一幅"运维可控性缺失"的图景——归档写入行为不受限（#3716/#3735）、控制手段无法生效（#3714）、看门狗误判忙碌会话为卡死（#3455）。用户诉求已从"修某个 bug"升级为"请给归档与压缩机制一套完整的可运维契约（保留策略 + 配置生效路径 + 误杀防护）"。

---

## 5. Bug 与稳定性

按严重程度排列：

**高严重度**

- **#3455**（[链接](https://github.com/nanocoai/nanoclaw/issues/3455)）— `host-sweep` 的 claim-stuck 看门狗（`CLAIM_STUCK_MS = 60_000`）在 claim 与首个 SDK 事件之间未更新心跳，导致合法忙碌的 turn 被永久误杀，且重试会复现同样失败，无法自恢复。**无 fix PR**。
- **#3716**（[链接](https://github.com/nanocoai/nanoclaw/issues/3716)）— 归档全量重写导致生产 OOM 崩溃循环。**无 fix PR**。
- **#3735**（[链接](https://github.com/nanocoai/nanoclaw/issues/3735)）— conversations 归档无上限增长（版本 2.1.53 观察）。**无 fix PR**。

**中严重度**

- **#3714**（[链接](https://github.com/nanocoai/nanoclaw/issues/3714)）— 操作员环境变量覆盖项无法到达会话容器（#1820 的后续问题）。**无 fix PR**。
- **#3854**（[链接](https://github.com/nanocoai/nanoclaw/issues/3854)）— 对 `groups/<folder>/CLAUDE.md` 的编辑在 spawn 时被静默丢弃，`groups restart` 无任何提示；该文件首行自述为"spawn 时生成，请勿编辑"。**无 fix PR**。
- **#3855**（[链接](https://github.com/nanocoai/nanoclaw/issues/3855)）— `ncl groups config update --model` 接受任意字符串，无校验、无警告、退出码 0，且无发现合法值的途径。**无 fix PR**。

**低严重度**

- **#3853**（[链接](https://github.com/nanocoai/nanoclaw/issues/3853)）— 文档问题：`CLAUDE.md` 中的 `ncl` 表格落后于 `ncl help`，缺 policies、messaging-groups send、sessions history 三项（截至 main @ 7902716b）。**无 fix PR**。

**结论**：今日报告的 7 条问题中 **0 条已有对应 fix PR**，无回归修复落地。

---

## 6. 功能请求与路线图信号

严格来说，今日数据中未出现显式的功能请求型 Issue，信号主要来自 Defect 中隐含的能力缺口：

- **归档保留与轮转机制**（源自 #3735、#3716）— 诉求是引入 retention/rotation/cap。考虑到两条 Issue 独立提出同一根因，**有较大概率进入下一版本**，但目前无对应 PR。
- **操作员配置下发通道**（源自 #3714）— 诉求是让文档化的 env 覆盖项真正生效，属基础设施补全。
- **CLI 参数校验与可发现性**（源自 #3855）— 诉求是 `--model` 校验 + 合法值枚举，此类改动通常改动面小，**较易被快速纳入**。
- **Slack 令牌续期**（对应 PR #3852）— 已提交实现，若合并将成为下一个版本中 Slack 集成方向的可见改进。

需要说明的是，以上均为基于现有 Issue/PR 的推断，数据中**没有任何里程碑、路线图或版本计划信息**可佐证。

---

## 7. 用户反馈摘要

从今日 Issue 摘要与评论数中可提炼的要点：

- **痛点集中在 2.1.53 至 2.3.0 区间**：报告者明确标注受影响版本，用户是在生产环境（"production OOM crash loop"）中遭遇问题并回填 Issue，属真实运维场景而非理论推演。
- **"配置了却不生效"是反复出现的抱怨模式**：#3714 的三个 env 变量"in-source 有文档但无法设置"，#3854 的 CLAUDE.md"写了却被静默覆盖"，#3855 的 `--model`"填了任何值都被接受"。用户期望的是**显式失败**而非静默吞掉。
- **对 CLI 反馈缺失的不满**：#3854 特别指出 `groups restart` "gives no sign of it"，#3855 指出退出码为 0，说明用户在意的是可观测性。
- **文档与实现脱节**：#3853 由用户主动比对 `ncl help` 与 CLAUDE.md 后提出，属于社区自查贡献。
- 数据中未出现明确的满意度表达或正面评价；所有 7 条 Issue 的 👍 数均为 0，未形成投票式热度。

---

## 8. 待处理积压

以下项目长期未获回应或推进，建议维护者优先关注：

- **Issue #3455**（[链接](https://github.com/nanocoai/nanoclaw/issues/3455)）— 创建于 2026-08-23，已约 **27 天**，标记为 high severity、可永久阻塞会话回复且无自恢复，却仅有 1 条评论、无 fix PR。是当前积压中风险最高的一项。
- **PR #3420**（[链接](https://github.com/nanocoai/nanoclaw/pull/3420)）— 创建于 2026-08-20，已约 **30 天**未合并，且为 stacked PR（依赖 #3408），核心团队标签，长期悬挂可能阻塞后续状态栏相关改动。
- **PR #3680**（[链接](https://github.com/nanocoai/nanoclaw/pull/3680)）— 创建于 2026-08-30，已约 **20 天**，属安全类修复（挂载绕过），建议提高优先级。
- **Issue #3716 / #3735 / #3714**（[链接](https://github.com/nanocoai/nanoclaw/issues/3716)、[#3735](https://github.com/nanocoai/nanoclaw/issues/3735)、[#3714](https://github.com/nanocoai/nanoclaw/issues/3714)）— 创建于 2026-09-04 至 09-07，已逾 **11–15 天**，涉及生产 OOM 与配置失效，三条同源但仍在分别讨论，建议合并处理并指派责任人。

---

*本日报所有内容均基于 2026-09-19 提供的 GitHub 数据生成；数据中未包含的版本计划、里程碑或合并结果均未作推测性断言。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-09-19）

## 1. 今日速览
过去24小时内 IronClaw 没有 Issues 更新，也没有新版本发布，仓库的公开讨论面处于完全静默状态。PR 侧有 3 条更新，但全部为 OPEN 待合并状态，无任何合并或关闭动作，说明今日没有代码进入主干。活跃度整体偏低：唯一的动态集中在三个大型（size: XL / XL）待审 PR 的存量刷新上。项目健康度短期无异常信号（无新 Bug、无回归报告），但审阅吞吐为 0 值得关注。

## 2. 版本发布
今日无新版本发布，本部分省略。

## 3. 项目进展
今日无 PR 被合并或关闭，项目主干未向前推进。三条 PR 均处于 OPEN 状态：

- PR #7499（[链接](https://github.com/nearai/ironclaw/pull/7499)）：`feat(identyclaw)`，为无进程 IronClaw agent 增加宿主侧 seam（`builtin.idcp` + policy grant/AskAlways 例外），使其无需 shell 或可安装扩展即可调用 IdentyClaw Passport，并附带 practitioner 主机套件。今日有更新，属存量推进。
- PR #8102（[链接](https://github.com/nearai/ironclaw/pull/8102)）：`fix(extensions)`，修复通过 Web UI（管理员配置）而非环境变量配置 Google OAuth 客户端时，Gmail/Google Calendar 无法激活的问题。
- PR #7456（[链接](https://github.com/nearai/ironclaw/pull/7456)）：`fix(reborn)`，使 Reborn 持久化存储与 profile 无关，统一以 `IRONCLAW_REBORN_HOME` 为根，并持久化类型化安全信封以支持仅重启的持久化。

三条均为跨 `docs`/`dependencies`/`sandbox`/`ci` 等多 scope 的大改动，审阅成本高，可能是合并停滞的原因之一。

## 4. 社区热点
今日所有 Issues/PR 的评论数与 👍 数均为 0 或未定义，无实质讨论热点。从数据本身可观察到的信号：

- 涉及范围最广的是 PR #7499，横跨 `docs`、`dependencies`，并标注 `contributor: new`，值得维护者优先给予新贡献者反馈：https://github.com/nearai/ironclaw/pull/7499
- PR #8102 与 #7456 均为 `contributor: core`（henrypark133），同日更新，构成核心维护者的稳定提交流：https://github.com/nearai/ironclaw/pull/8102 、https://github.com/nearai/ironclaw/pull/7456

需要说明的是，当前数据未包含任何评论内容，因此无法提炼真实用户诉求。

## 5. Bug 与稳定性
今日无新报告的 Bug、崩溃或回归问题（Issues 更新为 0）。存量待修问题全部以 fix PR 形式存在，均尚未合并：

| 严重程度 | 问题 | Fix PR | 状态 |
|---|---|---|---|
| 中 | Web UI 配置 Google OAuth 时 Gmail/Google Calendar 无法激活（OAuth 可走完全流程但激活失败） | [#8102](https://github.com/nearai/ironclaw/pull/8102) | OPEN，未合并 |
| 中 | Reborn 存储与 profile 耦合，重启持久化行为受 profile 影响（PR 标注 risk: medium） | [#7456](https://github.com/nearai/ironclaw/pull/7456) | OPEN，未合并 |

其中 #8102 描述的是可复现的功能性故障（任何通过管理员配置部署的环境都无法激活），影响面较广，建议优先推动合并。

## 6. 功能请求与路线图信号
今日无新功能请求 Issue。从待合并 PR 可推断的路线图方向：

- **无进程 agent 的宿主介导能力**（PR #7499）：通过 host seam 而非扩展让 agent 调用 IdentyClaw Passport，指向更轻量的 agent 集成路径，并涉及策略授权与 AskAlways 豁免机制。
- **存储层解耦**（PR #7456）：把 Reborn 的所有 profile 直接挂在 `IRONCLAW_REBORN_HOME` 下，使用 profile 无关的 `state/`、`system/`、`workspaces/`、`runtime/`、`logs/`、`cache/`、`tmp/` 命名空间，与安全信封持久化配套。

这两条一旦落地，可能进入下一版本；但当前均未合并，无法确认版本归属。

## 7. 用户反馈摘要
今日无 Issue 评论数据可供提炼，无法归纳用户痛点、使用场景或满意度。唯一可视为间接用户反馈的是 PR #8102 所记录的场景：操作者通过 Web UI 完成管理员配置（而非环境变量）是真实存在的部署方式，且在该路径下功能不可用——这是来自实际部署行为的痛点信号。链接：https://github.com/nearai/ironclaw/pull/8102

## 8. 待处理积压
按创建时间排序，以下 PR 已停留较久，建议维护者关注：

- **PR #7456**：创建于 2026-08-10，至今约 40 天未合并，`size: XL`、`risk: medium`，涉及 sandbox、CI、docs、dependencies 多域。https://github.com/nearai/ironclaw/pull/7456
- **PR #7499**：创建于 2026-08-11，至今约 39 天未合并，`size: XL`，且作者标记为 `contributor: new`，长期无合并易影响新贡献者留存。https://github.com/nearai/ironclaw/pull/7499
- **PR #8102**：创建于 2026-09-18，仅 1 天，尚属正常审阅周期。https://github.com/nearai/ironclaw/pull/8102

**风险提示**：两个 XL 规模 PR 积压超过一个月且今日无任何合并动作，审阅吞吐是当前项目健康度的主要瓶颈。所有评论数与 👍 数在数据中为 0 或未定义，若属实，也意味着这些积压 PR 尚未获得社区层面的讨论压力。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-19

## 1. 今日速览

今日共 12 条 Issues/PRs 发生更新（3 条 Issues、9 条 PRs），无新版本发布。表面活跃，实则结构性隐忧：8 条 PR 集中关闭，其中 7 条为 2026-03-30 创建、被标记 `[stale]` 的 5 个月存量积压（#1069、#1070、#1072、#1075、#1076、#1077，以及同步关闭的 Issue #1071），清除方式以陈旧关闭为主，非正常合并节奏。真正反映当前开发状态的是 2026-09-18 提交的 3 条 PR（#2717、#2718、#2719），其中 2 条已关闭、1 条待合并，指向 OpenClaw 启动可靠性、微信/QQ 登录路由、定时任务微信投递等活跃方向。整体健康度：**存量清理进行中，但长期存活 Issue 与 PR 的关闭效率仍是主要观察点。**

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日推进以存量清理为主，缺少实际落地的新功能：

- **[CLOSED] PR #1069** — 拆分 `CoworkSessionDetail.tsx`（原 2100+ 行）为多个文件，含纯函数、自定义 Hook 与子组件抽离，目标是提升可维护性并减少流式输出时的无关重渲染。属长期未合并后关闭（`[stale]`）。
- **[CLOSED] PR #1070** — 新增 per-session MCP 开关，在会话输入框工具栏加入 MCP 控制按钮与 Popover，状态持久化到 DB，并在 OpenClaw 引擎 `McpBridgeServer` 层实现请求拦截。解决"MCP 仅支持全局开关"的局限，最终被关闭而非合并。
- **[CLOSED] PR #1072** — 修复 SQLite 存储层三项完整性缺陷（启用 `PRAGMA foreign_keys`、防御性删除子行等），关联 Issue #1071 标注 Closes，但随 stale 清理一并关闭。
- **[CLOSED] PR #1075** — 修复安装 WSL 的 Windows 上构建失败（强制使用 Git Bash 而非 WSL bash）。
- **[CLOSED] PR #1076** — 修复定时任务 Run History 迁移在 JSONL 写入失败时仍标记完成，导致执行记录永久丢失的问题（`src/scheduled-task/migrate.ts`）。
- **[CLOSED] PR #1077** — 修复删除当前 agent 后左侧任务列表不刷新、仍显示已删除 agent 任务的 UI 状态不一致问题。
- **[CLOSED] PR #2718** — 修复微信 / QQ 扫码登录渠道路由问题（涉及 renderer / main / openclaw / im / docs 多模块）。
- **[CLOSED] PR #2717** — 新增定时任务微信投递回执（scheduled task weixin delivery receipt）。

**净推进评估**：面向用户的新增能力今日为 0 项确认落地，项目主要"向前"体现在清理 5 个月前的技术债队列。

## 4. 社区热点

今日讨论量整体偏低，无高热度话题：

- **[OPEN] Issue #2654**（评论 2）— `fix(user_plugins): persist hooks field in syncToDisk`，描述 hooks 配置在 Gateway 重启后丢失，根因指向 `openclawConfigSync.ts` 中 `getUserPlugins` 未返回 `hooks` 字段。链接：netease-youdao/LobsterAI Issue #2654
- **[CLOSED] Issue #1071**（评论 2）— SQLite 存储层三项缺陷审计，虽被 stale 关闭，但讨论涉及生产环境数据丢失风险。链接：netease-youdao/LobsterAI Issue #1071
- **[OPEN] Issue #1014**（评论 1）— 第三方 Claude Code 运行时 Dispatch 主动联系，希望为 `technology-search` skill 补充描述以提升可发现性，反映生态外延的触达诉求。链接：netease-youdao/LobsterAI Issue #1014
- **[OPEN] PR #2719**（待合并，作者 alison-xx）— 针对旧版本数据残留导致的每次启动失败问题。链接：netease-youdao/LobsterAI PR #2719

**诉求分析**：评论集中在两类议题——插件配置持久化（#2654）与存储层可靠性（#1071），均属"配置/数据在重启或异常后丢失"的信任类问题，而非功能炫技类需求。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 位置 | Fix PR 状态 |
|---|---|---|---|
| **高** | 旧版本数据残留导致**每次启动均失败**（含 Windows 卸载重装保留 `%APPDATA%\LobsterAI` 场景），涉及三种独立成因 | 启动流程 / main + openclaw | ✅ 已有，**[OPEN] PR #2719 待合并** |
| **高** | 定时任务 Run History 迁移写入失败后仍标记完成，**执行数据永久丢失** | `src/scheduled-task/migrate.ts` | ⚠️ 有 PR（#1076）但已 `[stale]` 关闭，修复未落地 |
| **高** | SQLite 层三缺陷：`ON DELETE CASCADE` 失效致孤儿消息累积、`save()` 非原子写致崩溃损坏、`storeInitPromise` 超时后永久故障 | `src/main/sqliteStore.ts`、`coworkStore.ts` | ⚠️ 有 PR（#1072）但已 `[stale]` 关闭，修复未落地 |
| **中** | hooks 配置在 Gateway 重启后丢失 | `openclawConfigSync.ts` | ✅ 已有，**[OPEN] Issue #2654 附建议修复方案，暂无对应 PR** |
| **中** | 微信 / QQ 扫码登录渠道路由异常 | renderer / main / openclaw / im | ✅ 有 PR（#2718），已关闭 |
| **中** | Windows 安装 WSL 后构建失败（`scripts/build-openclaw-runtime.sh: No such file or directory`） | `scripts/run-build-openclaw-runtime.cjs` | ⚠️ 有 PR（#1075）但已 `[stale]` 关闭，修复未落地 |

**特别提示**：表中三项"高"级问题中，两项的修复 PR 已在今日被 stale 关闭，修复代码未进入主线，属于**已识别但未解决的稳定性风险**，建议维护者重新评估。

## 6. 功能请求与路线图信号

- **Per-session MCP 控制**（PR #1070）— 从全局 MCP 开关走向会话级粒度的明确需求，且已实现 DB 持久化与引擎层拦截，方案完整。虽被 stale 关闭，但设计思路具备复用价值，是 MCP 体验升级的强信号。
- **定时任务微信投递回执**（PR #2717，已关闭）— 与 #2718 的微信/QQ 登录路由修复同属 IM 渠道方向，显示微信生态接入是当前实际投入的开发重心。
- **第三方生态发现性**（Issue #1014）— 外部运行时 Dispatch 主动寻求 skill 描述优化，属低成本、高外延收益的请求，具备被快速响应条件。
- **插件 hooks 持久化**（Issue #2654）— 用户已给出三步具体修复路径（加 `hooks TEXT` 列、扩展返回值、syncToDisk 合并），实现成本低，入选下一版本的可能性较高。

**纳入下一版本预判**：#2719（启动修复）优先级最高且已待合并；#2654 类低风险配置持久化修复有较高入选可能；#1070、#2717、#2718 需要作者重新提交以恢复可见度。

## 7. 用户反馈摘要

- **数据安全是最大痛点**：Issue #1071 反映用户在审计代码时发现三处数据完整性缺陷，措辞强调"均可在生产环境下造成数据丢失或功能永久故障"，指向对本地 SQLite 存储层可靠性的深层不信任。
- **配置脆弱性困扰日常使用**：Issue #2654 明确指出 "hooks 配置在 Gateway 重启后丢失"，属反复出现于重启场景的丢失型问题，直接影响插件可用性。
- **多环境构建障碍**：PR #1075 描述 "在安装 WSL 的 Windows 上构建失败"，反映开发者环境的典型配置（Windows + WSL）反而成为陷阱。
- **UI 状态一致性**：PR #1077 描述删除当前 agent 后"左侧边栏任务列表不自动刷新，仍显示已删除 agent 的任务列表"，属可见的交互瑕疵。
- **生态认可信号**：Issue #1014 中第三方项目主动联系并称 "has been discovered by Dispatch"，说明项目 skill 已进入外部运行时视野，是正向反馈。

## 8. 待处理积压

以下为长期未闭环、今日仍在更新或被关闭的重要条目，建议维护者重点处理：

- **[OPEN] Issue #1014** — 创建于 **2026-03-29**，已积压近 6 个月，仅 1 条评论。第三方生态的主动接触长期无回应，存在错失外联机会的风险。链接：netease-youdao/LobsterAI Issue #1014
- **[OPEN] Issue #2654** — 创建于 2026-09-11，已附完整修复方案但尚无对应 PR，属"方案就绪、无人认领"状态。链接：netease-youdao/LobsterAI Issue #2654
- **[CLOSED] Issue #1071 / PR #1072 / PR #1076** — 三项高严重度数据可靠性修复于今日以 `[stale]` 关闭，**问题本身未解决**。链接：netease-youdao/LobsterAI Issue #1071 ｜ PR #1072 ｜ PR #1076
- **[CLOSED] PR #1069 / #1070 / #1075 / #1077** — 创建于 2026-03-30，均在存放约 5 个月后关闭，其中 #1070（per-session MCP）与 #1069（组件拆分）为体量较大的完整实现，建议作者按当前主线 rebase 后重新提交。
- **[OPEN] PR #2719** — 唯一待合并 PR，直接关系到"每次启动失败"的用户可感知问题，建议优先 review 与合入。链接：netease-youdao/LobsterAI PR #2719

---

**健康度结论**：今日数据体现的是"清理日"而非"交付日"。项目待合并队列仅剩 1 条，合并吞吐需关注；更值得警惕的是数据可靠性类高危问题的修复被 stale 机制一并关闭，建议在清理策略中对高严重度标签设置豁免，避免真实缺陷随技术债清理被静默归档。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-19

> 数据来源：github.com/moltis-org/moltis 当日 GitHub 活动数据
> 当日数据窗口：过去 24 小时

## 1. 今日速览

今日项目活跃度处于**低位**：过去 24 小时无新版本发布，无 Issue 新开、活跃或关闭（0 条），社区讨论指标（评论数、赞数）均无记录。唯一的动态是一条待合并 PR #1276，由 Kaboka22 提交，目标是修复 Groq 提供商在 Moltis 中"事实上不可用"的问题。整体看，项目今日没有向前合入任何变更，推进节奏由该单一 PR 承载，健康度信号中性偏静。

## 2. 版本发布

今日无新版本发布，本节略。

## 3. 项目进展

今日**无已合并或已关闭的 PR**，项目主干未发生变更。

唯一在途 PR 为：

- **[PR #1276](https://github.com/moltis-org/moltis/pull/1276)** [OPEN] Add Groq as OpenAI-compatible provider + fix empty-required strict schemas
  - 作者：Kaboka22 | 创建：2026-09-19 | 更新：2026-09-19 | 👍 0

该 PR 尚未合并，因此今日项目"向前迈进"的净增量为零，属于推进中的待评审工作。

## 4. 社区热点

今日唯一可观察到的活动条目为 PR #1276：

- 链接：https://github.com/moltis-org/moltis/pull/1276
- 评论数：数据中标记为 `undefined`（无可用评论数据）；点赞：0

从摘要可读出的诉求：Groq 聊天功能此前"effectively unusable"——原因是 Groq 未列入 `OPENAI_COMPAT_PROVIDERS`，因而落入 genai fallback 路径；该 fallback 仅注册一个模型、丢弃所有工具 schema，并导致 model-id 路由错乱。作者通过将 Groq 注册为 OpenAI 兼容提供商来解决，并附带修复 empty-required 严格 schema 问题。这反映出用户对**主流推理服务商一等公民支持**的明确需求，以及工具调用（tool schemas）在 fallback 路径下被静默丢弃的体验痛点。

## 5. Bug 与稳定性

今日无新开 Issue 报告 Bug。但 PR #1276 描述中隐含了以下稳定性/功能缺陷（均为该 PR 正在修复的对象）：

| 严重程度 | 问题 | 影响 | 是否已有 fix PR |
|---|---|---|---|
| 高 | Groq 未在 `OPENAI_COMPAT_PROVIDERS` 中注册 | Groq 聊天功能"effectively unusable"，整体不可用 | ✅ 是，PR #1276 |
| 高 | 回退到 genai fallback 时丢弃全部工具 schema | 工具调用能力丢失 | ✅ 是，PR #1276 |
| 中 | fallback 仅注册一个模型 | 模型选择受限 | ✅ 是，PR #1276 |
| 中 | fallback 下 model-id 路由错乱 | 请求可能路由到错误模型 | ✅ 是，PR #1276 |
| 中 | empty-required 严格 schema 处理异常 | 严格模式 schema 校验问题 | ✅ 是，PR #1276 |

以上问题均源自 PR #1276 的自述摘要，尚未经合并验证。

## 6. 功能请求与路线图信号

今日无用户以 Issue 形式提出新功能请求。唯一可视为路线图信号的输入来自 PR #1276：**将 Groq 纳入 OpenAI 兼容提供商体系**。若该 PR 被合并，意味着 Moltis 的提供商适配层将新增 Groq 支持，并强化 fallback 路径下对模型注册、工具 schema 与 model-id 路由的处理一致性。是否纳入下一版本，取决于该 PR 的评审与合并结果，当前无其他数据可佐证版本规划。

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼。可间接反映用户痛点的仅有 PR #1276 的作者自述：使用 Groq 时体验为"effectively unusable"，工具 schema 在回退路径被丢弃、模型 id 路由被破坏。这属于贡献者视角的问题陈述，而非 Issue 评论中的终端用户反馈，样本极为有限，不足以概括满意度分布。

## 8. 待处理积压

今日数据未提供长期未响应 Issue 或 PR 的清单，亦无超期时长信息，**无法识别积压项**。当前唯一待处理项为当日的 [PR #1276](https://github.com/moltis-org/moltis/pull/1276)（OPEN，创建与更新均为 2026-09-19，评论数据缺失），建议维护者优先安排评审，以确认 Groq 支持与严格 schema 修复能否进入下一版本。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-19

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 公开数据。注：部分 Issue 链接原文标注为 `agentscope-ai/QwenPaw`，以下按数据原样保留。

---

## 1. 今日速览

过去 24 小时 CoPaw 保持高活跃度：15 条 Issue 更新（13 条新开/活跃，2 条关闭），21 条 PR 更新（20 条待合并，1 条已合并/关闭），但**无新版本发布**。今日无新增 Release，说明当前处于 2.2.1 之后的修复密集型阶段，而非功能交付节点。议题集中在三类硬伤：**上下文/scroll 驱逐机制**、**供应商适配（DeepSeek / OpenCode）**、**工具输出与媒体块序列化**。社区侧对「上下文记忆太短」的体验抱怨（#7884）与多项架构级修复 PR 形成呼应，反映核心痛点已被用户明确感知。整体健康度：**活跃度高，但合并吞吐偏低**（20:1 待合并/已关闭），存在积压风险。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

今日合并/关闭量有限（PR 仅 1 条关闭、Issue 2 条关闭），推进主要体现为**修复方向收敛**而非版本级前进：

- **PR #7223 [CLOSED]** fix(providers): refresh DeepSeek catalog per vendor retirement and docs
  基于厂商实时 API（`GET api.deepseek.com/models`）与官方定价表核对，移除已被厂商退役的 `deepseek-chat` / `deepseek-reasoner`。这是**供应商目录与外部事实对齐**的关键清理，减少用户选择已下线模型导致的失败。
  https://github.com/agentscope-ai/CoPaw/pull/7223

- **Issue #7838 [CLOSED]** `recall_history_python` 在无沙箱（kernel < 5.13，无 Landlock）时静默不注册
  关闭的同时，**PR #7873** 已提交对应修复：在无可用沙箱时给出面向模型的显式提示，而非静默降级。
  https://github.com/agentscope-ai/CoPaw/issues/7838 · https://github.com/agentscope-ai/CoPaw/pull/7873

- **Issue #7837 [CLOSED]** user 行缺少 headline，导致 scroll 驱逐索引需调用模型来标注纯用户片段
  属 scroll 子系统的结构性缺陷，已关闭。

**评估**：项目今日的“前进”是**问题定义清晰化 + 修复挂载完成**，尚无合并落地。20 条待合并 PR 已覆盖今日多数 Bug（见第 5 节），一旦进入合并窗口，稳定性将有可观提升。

---

## 4. 社区热点

按讨论活跃度（评论数/👍）排序：

| 条目 | 类型 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| #7853 ToolResultPruner 跳过媒体块，base64 无界累积 | Bug | 4 | 0 | https://github.com/agentscope-ai/CoPaw/issues/7853 |
| #7878 暴露插件可见的 pre-tool-call 策略钩子 | Feature | 3 | 0 | https://github.com/agentscope-ai/CoPaw/issues/7878 |
| #7836 scroll 驱逐丢弃工具密集跨度内的用户轮次 | Bug | 2 | **1** | https://github.com/agentscope-ai/CoPaw/issues/7836 |
| #7884 聊天记录历史太短，体验太差 | Question | 1 | 0 | https://github.com/agentscope-ai/CoPaw/issues/7884 |

**诉求分析**：
- **#7853** 直指内存/上下文治理的一个真空白：媒体块（`type="data"`）绕过裁剪逻辑，`view_image` 的 base64 会无限累积直至撑爆上下文。这是**可复现、影响所有图像用例的资源泄漏**，讨论最热当之无愧。
- **#7878** 与 **PR #7880** 形成同一主题的双向呼应：社区希望在不 monkey-patch 宿主的前提下，接入外部分类器与组织级检查。这是**平台化/可扩展性**信号，且已有对应实现（escalation-only 钩子）。
- **#7836** 单条 👍 虽少，但为首个获得正面反响的议题，且 **PR #7872** 已针对该编号提交修复，说明维护者已响应。

---

## 5. Bug 与稳定性

按严重程度排列（P0 = 会话/数据受损或会话永久损坏；P1 = 功能失效但有绕行；P2 = UI/体验）：

### P0 — 会话级永久损坏 / 资源泄漏
1. **#7853 [OPEN]** `ToolResultPruner` 跳过 `type="data"` 媒体块，`view_image` 的 base64 无界累积撑爆模型上下文。
   *状态：暂无 fix PR。* 评论 4 条，为今日最热。
   https://github.com/agentscope-ai/CoPaw/issues/7853

2. **#7876 [OPEN]** DeepSeek 拒绝 OpenAI `input_audio` 内容部件（422 "unknown variant"），音频回退分类器从未触发——一次 `send_file_to_user` 的 wav 即**永久摧毁该会话**。
   *状态：暂无可见 fix PR。* 版本 2.2.1 / `agentscope 2.0.7.post1`。
   https://github.com/agentscope-ai/CoPaw/issues/7876

3. **#7883 [OPEN]** 2.2.1 上仍可复现：工具返回的 PDF 被序列化为 OpenAI 风格嵌套 file part，DeepSeek 以 400「file must have a file_id or file_data」拒绝。**明确标注为回归**——#7597 曾以 #7621 关闭为已修复，现再度复现。
   https://github.com/agentscope-ai/CoPaw/issues/7883

### P1 — 安全边界/治理失效
4. **#7881 [OPEN]** kimi-code ACP runner 不均等地绕过边界与破坏性命令检查：Edit 被拦，而 **Write(新文件) 与 Bash 完全失明**。
   *状态：暂无 fix PR。* 涉及安全边界，优先级应高。
   https://github.com/agentscope-ai/CoPaw/issues/7881

5. **#7836 [OPEN]** scroll 驱逐丢弃位于工具密集跨度内的用户轮次——实时窗口丢失该请求，而 `history.db` 仍保留。**已有关联修复 PR #7872**。
   https://github.com/agentscope-ai/CoPaw/issues/7836 · https://github.com/agentscope-ai/CoPaw/pull/7872

6. **#7599 [OPEN]** OpenCode Go 套餐模型持续报 `MissingSessionID`（400）。v2.2.0 起报，今日仍有更新。**已有关联修复 PR #7869**（补发 OpenCode session header）。
   https://github.com/agentscope-ai/CoPaw/issues/7599 · https://github.com/agentscope-ai/CoPaw/pull/7869

7. **#7879 [OPEN]** MCP 配置中「授权」触发 OAuth 握手失败（缺 client_id/resource），**无法接入静态 Bearer Key 类型的 MCP server**（如企查查 QCC 的 11 项服务）。
   https://github.com/agentscope-ai/CoPaw/issues/7879

### P2 — UI/一致性
8. **#7882 [OPEN]** OpenCode 供应商「免费」模型实际 API 调用返回 403 `FreeTierError`（仅限 OpenCode 客户端），但 UI 仍标记为免费。
   https://github.com/agentscope-ai/CoPaw/issues/7882

9. **#7877 [OPEN]** 会话级工作目录面板三处缺陷：浏览目录可视区仅约 3 行、「最近项目」恒为空且无写入入口、选目录后「应用」仍禁用。（#7789 未覆盖此三处）
   https://github.com/agentscope-ai/CoPaw/issues/7877

10. **#7866 [OPEN]** 文件区标签在 agent 重写文件后仍显示编辑前内容（会话卡片已显示新内容）。自 v2.1.1-beta.3 起未变更。**已有关联修复 PR #7867**。
    https://github.com/agentscope-ai/CoPaw/issues/7866 · https://github.com/agentscope-ai/CoPaw/pull/7867

**今日 Bug 修复覆盖情况**：#7836、#7599、#7866、#7838 均有对应待合并 PR；**#7853、#7876、#7883、#7881 尚无 fix PR**，建议优先排期。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 关联 PR | 纳入下一版本的可能性 |
|---|---|---|---|
| Pre-tool-call 策略钩子（治理管线决策预言机） | #7878 | **PR #7880**（escalation-only 工具策略钩子，ready for main） | **高** — 已有可评审实现 |
| Agent 自主上下文管理（驱逐平滑交接） | #7733 | 无 | 中 — 架构级，与 scroll 系列修复同源 |
| 插件/运行时性能与隔离增强 | — | #7868（缓存不可变产物）、#7842（隔离同步钩子 + 事件循环延迟看门狗）、#7864（技能目录防注入删除）、#7854（驱动重载保留并发策略更新） | 中高 — 均为已提交的待合并 PR |
| Creator create-video 控制平面 | — | **PR #7874 + #7875**（实现 + 规范文档成对提交） | 中高 — 实现与文档同步推进 |
| 会话历史长度/可追溯性 | #7884 | 无 | 待评估 — 目前仅为用户诉求 |

**信号解读**：#7878 与 #7880 的“需求-实现”同日成对出现，是今日最强的路线图信号，指向**插件化治理钩子**将成为近期演进方向。同时 #7874/#7875 的实现+规范成对模式，显示 Creator 能力正在被正式化。

---

## 7. 用户反馈摘要

- **上下文窗口是最大痛点**：#7884 用户直白抱怨「聊天记录历史这么短么？讨论过的问题，回头往上翻，看不到了？？？」，并强调「知道这体验多差么？？？」。这与 #7733（按纯 token 阈值触发驱逐、agent 无发言权）、#7836（用户轮次被驱逐丢失）在根因上一致——**上下文管理是当前体验的核心瓶颈**。
- **供应商适配摩擦反复出现**：用户在 OpenCode Go 模型上持续遭遇 `MissingSessionID`（#7599）、被标记「免费」的模型实际 403（#7882），反映**供应商目录与真实可用性脱节**。
- **多模态输入缺乏健壮性**：发送 `.wav`（#7876）或图片（#7853）会分别导致会话永久损坏与上下文无界增长，说明媒体路径的**错误处理与裁剪策略不完整**。
- **企业/受控场景受阻**：QCC 静态 Bearer Key 的 MCP server 无法接入（#7879）。
- **正向反馈**：#7881 作者开头即「Thanks for the update — looking forward to the kimi toolCall parameter support」，显示对近期迭代方向持肯定态度，但仍指出修复可能「half-effective」。

---

## 8. 待处理积压

- **PR #7211 [OPEN]** fix(runtime): prevent injected context from persisting
  作者 AGImentu，创建 **2026-08-21**，最后更新 2026-09-18，标题含 `Under Review, ready-for-human-review`。**已积压近一个月**且处于待人工评审状态，涉及 `HookContext.inject_context()` 被持久化为可见用户聊天历史，属语义正确性问题，建议优先安排评审。
  https://github.com/agentscope-ai/CoPaw/pull/7211

- **Issue #7599 [OPEN]** OpenCode `MissingSessionID`
  创建 **2026-09-07**，跨 12 天仍活跃。虽已有修复 PR #7869，但 Issue 本身尚未关闭，建议验证修复后及时回执用户。
  https://github.com/agentscope-ai/CoPaw/issues/7599

- **Issue #7733 [OPEN]** Agent 自主上下文管理
  创建 **2026-09-13**，为架构级诉求且暂无 PR 承接，若纳入路线图需尽早给定性回复。
  https://github.com/agentscope-ai/CoPaw/issues/7733

**维护者关注建议**：当前 20:1 的待合并/已关闭 PR 比例偏高，叠加 #7211 这类已 ready 却久未合入的 PR，建议设立合并窗口以降低积压、避免修复 PR（如 #7872、#7869、#7867）因长期挂起而失效于新代码库。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-19

## 1. 今日速览

ZeroClaw 今日维持高强度开发节奏：过去 24 小时 Issue 更新 32 条（新开/活跃 20、关闭 12），PR 更新 50 条（待合并 48、合并/关闭 2），无新版本发布。活跃度评估为**高**，但合并吞吐明显偏低——48:2 的待合并/已合并比显示 review 环节已成为主要瓶颈，多个 size:XL 的大型 PR 长期挂在 `needs-author-action` 或 `needs-maintainer-review` 状态。今日关闭的 Issue 集中在安全与稳定性修复（#9627、#10759、#10736、#10962），方向健康；但同日新开两条 S0 级安全问题（#10968、#10970），安全面仍是当前最大风险敞口。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日已合并/关闭条目较少，主要以 Issue 关闭形式体现推进：

- **#9627 [CLOSED]** — git 写操作通过 `-C` / `--git-dir` 等全局选项绕过风险分类器与审批门（S0 级）。关闭意味着该安全绕过路径已处理完毕，是今日安全面上最重要的一项收敛。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9627
- **#10736 [CLOSED]** — Reliable provider 在输出前流式失败时，跳过已声明的非流式回退。修复后 provider 回退链的可靠性提升。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10736
- **#10759 [CLOSED]** — SOP RPC 的 `sops/run-detail` 响应补齐 `SopRun.failure_reason`，运维可观测性补全。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10759
- **#10962 [CLOSED]** — gateway `/ws/chat` 流转发工具结果负载，客户端不再只能看到工具生命周期帧而拿不到结果。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10962
- **#10853 [CLOSED]** — OpenCode session header 的后续项（源自 #10604），不影响默认配置。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10853
- **#10972 / #10973 [CLOSED]** — WhatsApp Web 通道的图片下载与 @ 提及双向失效问题当日开当日关，响应速度值得肯定。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10972 · https://github.com/zeroclaw-labs/zeroclaw/issues/10973

整体推进幅度：中等偏小。突破性进展仍需等待 PR 侧的 review 解堵，而非 Issue 侧的清理。

## 4. 社区热点

- **#8046**（评论 5，👍 1）— Telegram 可选 webhook 模式，替代当前 getUpdates 长轮询。已进入 `status:icebox`，说明维护者认可价值但暂不排期。https://github.com/zeroclaw-labs/zeroclaw/issues/8046
- **#10531**（评论 4）— 向父 agent 暴露 delegate 子 agent 进度（工具回执、部分输出）。当前前台 delegate 阻塞至完成、后台 delegate 中途 `check_result` 无有效信息，这是多 agent 编排的实际痛点。https://github.com/zeroclaw-labs/zeroclaw/issues/10531
- **#8850**（评论 4）— 将可选通道与工具从编译期 Cargo feature 迁移到运行时可安装的 WASM 插件（`zeroclaw-labs/zeroclaw-plugins`）。这是架构级 tracker，若落地将改变分发模型：stock binary 无需重编译即可获得新通道/工具。https://github.com/zeroclaw-labs/zeroclaw/issues/8850
- **#10663**（评论 3）— Anthropic prompt-cache 1 小时 TTL 可配置。当前所有 `cache_control` 标记均为无 ttl 的 `ephemeral`，被强制套用 5 分钟默认值，直接影响长会话成本。https://github.com/zeroclaw-labs/zeroclaw/issues/10663

诉求分析：热点高度集中在**运行时/架构可扩展性**（插件化、agent 可观测性、通道来源可信）与**成本与工程细节**（缓存 TTL）。社区已从"能跑"转向"可运营、可规模化、可控成本"。

## 5. Bug 与稳定性

按严重程度排列：

- **S0 — #10968 [OPEN]**：无人值守 agent 轮次（cron、heartbeat、headless SOP、spawn_subagent）运行时不构建 `ApprovalManager`（`agent::run` 仅在 `interactive == true` 时创建），导致风险配置的工具审批静默失效。已明确定位到代码路径，但**暂无 fix PR**，建议优先处理。https://github.com/zeroclaw-labs/zeroclaw/issues/10968
- **S0 — #9627 [CLOSED]**：git 写操作经全局选项绕过风险分类器与审批门。今日已关闭，风险已收敛。https://github.com/zeroclaw-labs/zeroclaw/issues/9627
- **S3 — #10952 [OPEN]**：`multimodal::sanitize_image_markers`（#10894 引入）与既有 `sanitize_audio_markers` 将历史消息整串重写，破坏了 assistant 工具调用 JSON 信封中的签名推理内容，导致 Anthropic 拒绝重放的 thinking。属 #10894 的回归，**暂无 fix PR**。https://github.com/zeroclaw-labs/zeroclaw/issues/10952
- **S1 — #9627 同源风险面**：`SecurityPolicy::command_risk_level` 仅取 `args.first()` 判读子命令的设计缺陷，已关闭但值得复查同类解析器。https://github.com/zeroclaw-labs/zeroclaw/issues/9627
- **S2/S3 — #10972、#10973 [CLOSED]**：WhatsApp Web 通道入站图片未下载（agent 收到字面量 `[Image]`，vision 不可用）、提及双向失效。均为当日开当日关。https://github.com/zeroclaw-labs/zeroclaw/issues/10972
- **相关修复 PR — #9428 [OPEN]**：Bluesky 与 Reddit 是仅有的两个从不查询 `peer_groups` 的入站通道适配器，补发送者授权。风险标注 `risk:high`，尚未合并。https://github.com/zeroclaw-labs/zeroclaw/pull/9428
- **相关修复 PR — #9819 [OPEN]**：多模态新增像素级图片校验，防止损坏图片导致 provider 请求失败。https://github.com/zeroclaw-labs/zeroclaw/pull/9819

## 6. 功能请求与路线图信号

结合已有 PR 判断可能进入 v0.8.6 / v0.9.0 窗口的条目：

- **通道来源可信链路**：**#10891 [OPEN]** 作为 #6971 契约的首个实现切片（在 #8583 之下），将通道消息的受信来源贯穿运行时准入与回合中转向。已处于 `status:in-progress`，纳入概率高。https://github.com/zeroclaw-labs/zeroclaw/issues/10891
- **运行时与网关交付**：**#7432 [Tracker]** 明确为 v0.8.6 Phase 2 运行时工作与 v0.9.0 Phase 3 网关分离的唯一事实来源（源自 RFC #5574）。路线图锚点已固定。https://github.com/zeroclaw-labs/zeroclaw/issues/7432
- **主机级准入控制**：**#10970 [OPEN]** 为运行大量 agent 的机器提供并发回合、并发工具执行与 per-agent 内存边界，使系统在过载时退化为延迟上升而非稳定性崩塌。属新的容量治理方向，尚无对应 PR。https://github.com/zeroclaw-labs/zeroclaw/issues/10970
- **统一的人类提问原语**：**#10930 [RFC]** 提议复用 SOP 审批门（当前唯一的持久化"agent 问人并存活到回答"实现）作为通用原语。需维护者评审。https://github.com/zeroclaw-labs/zeroclaw/issues/10930
- **出站消息投递回执**：**#10929 [RFC]** 指出 `SendMessage` 无消息标识，无法判断消息是否真正送达用户。https://github.com/zeroclaw-labs/zeroclaw/issues/10929
- **已具备 PR 支撑的功能**：多模型/供应商 profile（#9809）、上下文压缩按模型窗口比例锚定（#9535）、Telegram 多消息流式（#8561）、日志条数轮转与多段查询（#10214）、shell 权限策略 V1（#10610，RFC #7155 Phase 0+1）。预计这些是下一版本的主要内容来源。

## 7. 用户反馈摘要

- **多 agent 编排的可观测性缺口**（#10531）：父 agent 在子 agent 完成前完全无可见性；后台 delegate 仅返回 `task_id`，中途查询无实质内容。用户需要的是过程中的部分输出与工具回执，而非仅最终文本。
- **长会话成本敏感**（#10663）：Anthropic 缓存被固定压缩到 5 分钟 TTL，用户明确希望配置 1 小时 TTL，直接指向 API 账单。
- **无人值守场景的信任赤字**（#10968）：cron、heartbeat、headless SOP 等非交互路径下审批机制静默失效，用户在日常运维中难以察觉，属于典型的"配置了但没生效"类不满。
- **通道质量参差**：WhatsApp Web 的 vision 与提及能力此前实际不可用（#10972、#10973），Bluesky/Reddit 长期缺失发送者授权（#9428），反映非核心通道的成熟度落后于 mainline。
- **部署规模化诉求**（#10970）：一台机器跑多个 agent 的用户希望获得明确的资源边界，当前的失败模式是稳定性下降而非优雅降级。

## 8. 待处理积压

以下条目创建时间较早、已获 `status:accepted` 或进入 tracker，但仍未落地，建议维护者关注：

- **#7432**（创建 2026-06-09，v0.8.6/v0.9.0 交付 tracker）— 路线图核心，已挂 3 个月以上。https://github.com/zeroclaw-labs/zeroclaw/issues/7432
- **#8046**（创建 2026-06-20，Telegram webhook）— 评论最多，但已被置入 icebox，社区期待与实际排期存在落差。https://github.com/zeroclaw-labs/zeroclaw/issues/8046
- **#8561**（PR，创建 2026-06-30，Telegram multi_message 流式，size:XL，`needs-author-action`）— 挂起近 3 个月。https://github.com/zeroclaw-labs/zeroclaw/pull/8561
- **#8850**（创建 2026-07-08，编译期 feature → WASM 运行时插件）— 架构影响大、停滞较久。https://github.com/zeroclaw-labs/zeroclaw/issues/8850
- **#8691**（创建 2026-07-04，ADR 清单与已接受 RFC 决策记录 tracker）— 治理类基础设施，长期 `in-progress`。https://github.com/zeroclaw-labs/zeroclaw/issues/8691
- **#9428**（PR，创建 2026-07-27，Bluesky/Reddit 发送者授权，`risk:high`，`needs-author-action`）— 安全相关且挂起近 2 个月，优先级应上调。https://github.com/zeroclaw-labs/zeroclaw/pull/9428
- **#9535 / #9809 / #9819 / #10214 / #10610**（均为 NiuBlibing 的 size:XL PR，日期跨 2026-07-29 至 2026-09-04，普遍处于 `needs-author-action` 或 `needs-maintainer-review`）— 单一作者承担了多个大型改动，review 带宽瓶颈集中体现在此处，是今日 48:2 合并比的主要成因。
  https://github.com/zeroclaw-labs/zeroclaw/pull/9535 · https://github.com/zeroclaw-labs/zeroclaw/pull/9809 · https://github.com/zeroclaw-labs/zeroclaw/pull/9819 · https://github.com/zeroclaw-labs/zeroclaw/pull/10214 · https://github.com/zeroclaw-labs/zeroclaw/pull/10610

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*