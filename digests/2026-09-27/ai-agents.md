# OpenClaw 生态日报 2026-09-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-27 14:18 UTC

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

# OpenClaw 项目日报 · 2026-09-27

## 1. 今日速览

OpenClaw 今日处于**高活跃度、高修复压力**状态：24 小时内 Issues 更新 500 条（新开/活跃 475，关闭 25），PR 更新 500 条（待合并 396，合并/关闭 104），无新版本发布。合并/关闭比例（PR 约 21%、Issue 约 5%）显示 PR 消化速度尚可，但 Issue 关闭率偏低，积压持续膨胀。当日讨论焦点集中在 **Gateway 崩溃/启动失败类 P0**（#143524、#154114、#157160、#158126）、**会话状态一致性**（#111897、#54488、#121187）与 **Windows 平台问题**（#105528、#143524、#157986）。工作区已有多个与热点问题对应的 fix PR 在评审中（如 #159578、#150623），说明维护者对崩溃类问题响应及时，但跨版本升级路径（update/migration）的稳定性问题仍是本周期最大风险面。

---

## 2. 版本发布

无新版本发布（过去 24 小时 Releases 数量为 0）。故本节省略。

---

## 3. 项目进展

今日已合并/关闭的 PR 共 104 条，其中评论热度最高的已关闭 PR 为：

- **#159659 [CLOSED]** `fix(ci): expose bounded Docker survivor failure metadata`
  作者 roboclaw-bot | 更新 2026-09-27
  解决 Docker 失败元数据在 GitHub check 注解中缺失的问题，使日志与诊断产物不可获取时仍能看到可操作的失败信息。标签含 `proof: sufficient`、`status: 👀 ready for maintainer look`。
  链接: openclaw/openclaw PR #159659

- **#144742 [CLOSED]** `2026.9.4 ships without #144208`（P0，issue-rating: 🦪 silver shellfish，maintainer）
  作者 steipete | 更新 2026-09-27 | 评论 10
  该 P0 release blocker 已关闭，标签为 `clawsweeper:not-repro-on-main`，属于已发布版本中缺失修复的追溯问题。
  链接: openclaw/openclaw Issue #144742

**推进评估**：今日可见的合并主要集中在 CI/基础设施与测试维护层面（Docker 失败元数据、测试 fixture 共享 #159677、iOS 死代码清理 #159534），面向终端用户的功能性推进有限。多条高价值修复 PR 仍处待审状态（见第 6 节），项目净前进幅度中等，主要受制于 P0 崩溃类问题尚未闭环。

---

## 4. 社区热点

按评论数排序的今日讨论焦点：

| 排名 | 条目 | 状态 | 评论 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#143524](openclaw/openclaw Issue #143524) Agent SQLite WAL 增长至 1.4–2.8 GB 并阻塞 Gateway 启动 | OPEN, P0 | 76 | Windows 单机部署下数据库 WAL 永不 checkpoint，属数据层+可用性双重故障 |
| 2 | [#111897](openclaw/openclaw Issue #111897) 同一 session lane 并发运行产生重复回复 | OPEN, P1 | 20 | 负载下会话隔离失效，消息重复投递 |
| 3 | [#97616](openclaw/openclaw Issue #97616) hook/tool 子进程僵尸累积 | OPEN, P1 | 17 | 长时间运行后运行时退化 |
| 4 | [#50093](openclaw/openclaw Issue #50093) WhatsApp 重连后不回补丢失消息 | OPEN, P1 | 14 | 消息丢失，属长期未决的 `stale` 项 |
| 5 | [#119411](openclaw/openclaw Issue #119411) memory 文件监听不重新索引且状态误报 | OPEN, P1 | 12 | 记忆索引与实际磁盘不一致 |

**趋势分析**：讨论热度高度集中于**可靠性**而非新功能。#143524 以 76 条评论断层领先且同日仍有更新，是当前社区最关注的单点问题（Windows + 数据层）。#111897、#97616、#50093 均带 `clawsweeper-recovery-stuck` 标签，说明这些问题长期停留在“已有诊断、缺修复”的僵局中。PR 侧讨论热度较低（评论数未披露），merge-risk 标签以 `compatibility`、`security-boundary`、`availability` 为主，反映评审者正谨慎对待跨版本兼容与安全边界变更。

---

## 5. Bug 与稳定性

按严重程度排列（仅列今日有更新的条目）：

### P0 / release blocker

1. **[#143524](openclaw/openclaw Issue #143524) OPEN** — Agent SQLite WAL 增长至 2865 MB 且永不 checkpoint，阻塞 Gateway 启动（Windows，2026.9.2/9.3）。标签：`impact:crash-loop`、`impact:ux-release-blocker`。**未发现对应 fix PR**（`clawsweeper:no-new-fix-pr`）。
2. **[#154114](openclaw/openclaw Issue #154114) OPEN** — `openclaw update` 候选迁移预演在“candidate rehearsal”步骤失败，报“No usable, authenticated, tool-capable inference route”，而在线 Gateway 模型鉴权正常（2026.9.4 → 2026.9.5）。标签：`impact:ux-release-blocker`。**无 fix PR**。
3. **[#157160](openclaw/openclaw Issue #157160) OPEN** — Gateway 在 `plugin-doctor-post-session-state` 上崩溃循环，即使用户修复 `busyTimeoutMs=0` 仍复现（Watchtower 自动升级至 2026.9.6 后，schema 17→18 迁移成功）。标签：`impact:crash-loop`、`impact:ux-release-blocker`。**无 fix PR**。
4. **[#158126](openclaw/openclaw Issue #158126) OPEN** — 关闭步骤 `gateway-server-close` 报“Worker environment inventory has closed”导致 exit 1，systemd unit 留在 failed（约 50% 概率）。标签：`impact:crash-loop`。**无 fix PR**。
5. **[#157415](openclaw/openclaw Issue #157415) OPEN** — `Doctor --fix` 拒绝为外部安装的 acpx / codex 执行 post-session 插件迁移（rootless Podman，2026.9.6）。标签：`regression`、`impact:ux-release-blocker`、`clawsweeper:manual-only`。**无 fix PR**。
6. **[#157227](openclaw/openclaw Issue #157227) OPEN** — `git-to-stable` 升级至 2026.9.6 时迁移配置后服务重校验失败，Gateway 处于停止状态。标签：`impact:crash-loop`、`source-repro`、`linked-pr-open`。**已有关联 PR 开启**。

### P1

7. **[#111897](openclaw/openclaw Issue #111897) OPEN** — 同一 session lane 两次并发运行均完成并投递重复回复。`impact:session-state`、`impact:message-loss`。无 fix PR。
8. **[#97616](openclaw/openclaw Issue #97616) OPEN** — hook/tool 子进程未被回收，僵尸累积导致运行时退化（回归）。`impact:message-loss`、`impact:crash-loop`。无 fix PR。
9. **[#119411](openclaw/openclaw Issue #119411) OPEN** — memory 文件监听不触发重索引，`memory status` 误报 `Dirty: no` 而索引数低于磁盘数。`source-repro`、`linked-pr-open`。**已有 PR 开启**。
10. **[#157630](openclaw/openclaw Issue #157630) OPEN** — 显式 `--max-old-space-size` 静默覆盖 worker 的 `resourceLimits`，导致 worker 继承全进程上限。`source-repro`。无 fix PR。
11. **[#129455](openclaw/openclaw Issue #129455) OPEN** — requester-settle 在下一个 subagent 生成前就终结了顺序工作流。`linked-pr-open`。
12. **[#138599](openclaw/openclaw Issue #138599) OPEN** — 会话超出压缩模型上下文窗口时自动压缩死锁（reasoning-only → 重试耗尽 → 停滞），手动压缩可成功。
13. **[#153899](openclaw/openclaw Issue #153899) OPEN** — Gateway drain 需等待完整 `TimeoutStopSec`（本机 5m30s），期间健康刷新与 workboard 定时器持续对已关闭资源触发。`impact:crash-loop`。
14. **[#121187](openclaw/openclaw Issue #121187) OPEN** — 父 agent yield 后显式 `NO_REPLY` 被当作缺失输出重试。`linked-pr-open`。
15. **[#125570](openclaw/openclaw Issue #125570) OPEN** — Skill Workshop update 应用时覆盖 live skill 的 `description`，破坏 skill 路由。`impact:data-loss`。
16. **[#105528](openclaw/openclaw Issue #105528) OPEN** — Windows 上 `exec`/`read` 工具静默返回空输出（v2026.6.x 回归）。`bug, docs`。
17. **[#108379](openclaw/openclaw Issue #108379) OPEN** — Xiaomi MiMo（openai-completions）重复生成尝试，abort 前重复叙述文本。
18. **[#158332](openclaw/openclaw Issue #158332) OPEN** — 无消息体的跨会话投递强制终端输出，两个会话间形成“礼貌循环”。`impact:message-loss`、`clawsweeper:bulk-filed`。
19. **[#54488](openclaw/openclaw Issue #54488) OPEN** — Session lane starvation：followup drain 独占会话通道，阻塞入站分派 20–30 分钟。

### P2

20. **[#154104](openclaw/openclaw Issue #154104) OPEN** — 4 个 Matrix E2EE 账号的闲置 Gateway 占用约 50–55% CPU 与约 52 MB/min 写入（2026.7.1 及禁用 Matrix 时无此问题，属回归）。无 fix PR。
21. **[#84110](openclaw/openclaw Issue #84110) OPEN** — Codex app-server 在工具调用续轮次重写 prompt，击穿 OpenAI prompt cache（缓存命中率 93% → 47%）。获 2 个 👍。
22. **[#110368](openclaw/openclaw Issue #110368) OPEN** — Control UI（webchat）中 ACP 会话每条 prompt 产生两个相同回复气泡。获 2 个 👍。
23. **[#155937](openclaw/openclaw Issue #155937) OPEN** — GPT-6 内嵌支持：尽管 OAuth 发现成功，Sol 仍被拒绝。`impact:auth-provider`。
24. **[#103198](openclaw/openclaw Issue #103198) OPEN** — WebChat 图片附件未映射到 media store 路径，image 工具收到 `image_0` 而非真实路径。获 3 个 👍，标签 `clawsweeper:queueable-fix`、`fix-shape-clear`、`source-repro`——**最接近可立即排队修复的候选**。

**稳定性总结**：当日崩溃/回归类问题以 **Gateway 生命周期（启动、迁移、关闭）** 与 **会话状态一致性** 两个主题为主导。P0 条目多为 `no-new-fix-pr`，仅 #157227、#119411、#129455、#121187 等 4 项标记 `linked-pr-open`，其余缺少对应修复 PR，是当前项目健康度的主要拖累。

---

## 6. 功能请求与路线图信号

**可能纳入下一版本（已有实现 PR）：**

- **Databricks Unity Gateway 作为官方模型提供方** — 需求 [#155633](openclaw/openclaw Issue #155633)（P2，`linked-pr-open`），实现为 PR #155634。面向需将模型流量经由 Databricks Unity Gateway 的企业用户。
- **Skill Workshop Experience Review 的上下文预算/跳过策略** — PR [#159687](openclaw/openclaw PR #159687)（Closes #150238），解决单轮工具输出过大导致 Experience Review 在超大拼装 prompt 上失败的问题。
- **可配置的 worker 放置（worker placement）与原生推理** — 三件套 PR 栈 [#158901](openclaw/openclaw PR #158901)（1/3，原生推理运行于配对 worker）、[#158902](openclaw/openclaw PR #158902)（2/3，UI 会话可用性遵循 worker 推理）、[#158903](openclaw/openclaw PR #158903)（3/3，要求会话配置 worker 放置）。关联 #154390。

**需求已提出、尚无实现 PR：**

- **[#38568](openclaw/openclaw Issue #38568)**（P3，2 👍）— 在 system prompt 的 Runtime 段注入上下文窗口使用百分比（如 `context=49%`）。
- **[#60572](openclaw/openclaw Issue #60572)**（P3，3 👍）— Multi-Slot Memory Architecture，以多个用途专属的 memory slot 取代单一 `plugins.slots.memory`。
- **[#50093](openclaw/openclaw Issue #50093)**（P1，`stale`，`needs-product-decision`）— WhatsApp 重连后回补丢失消息。

**趋势判断**：路线图信号明显偏向**多 worker/分布式推理能力**（#158901–#158903 三件套）与**记忆架构演进**（#60572），而企业集成（Databricks #155633）是唯一有明确实现 PR 的 provider 扩展。多 worker 栈体量大（XL/L 尺寸、含 `compatibility`、`security-boundary`、`session-state` 多重 merge-risk），预计是本周期最重的评审负担。

---

## 7. 用户反馈摘要

**核心痛点：**

- **升级路径不可靠**：#154114、#157227、#157415 三条独立报告均指向 `openclaw update` / Doctor 在不同环境（cron 自动更新、git→stable、rootless Podman 容器）下的迁移失败，并伴随 Gateway 不可用。用户明确描述“在线 Gateway 模型鉴权正常，但候选预演报无可用推理路由”，指向迁移环境与运行时环境的状态不一致。
- **Windows 平台体验受损**：#143524（WAL 不 checkpoint 阻塞启动）、#105528（`echo hello world` / `whoami` 返回空）、#157986（`agentTurn` 全部因 DataCloneError 失败，而 command/script payload 正常）、#151674（Startup 文件夹启动器未被发现）、#123774（隐藏启动器提前退出导致重启孤儿）。用户场景为“Gateway 作为 Windows Scheduled Task 长期运行”。
- **长期运行退化**：#97616 僵尸进程累积、#154104 Matrix E2EE 账号下闲置 CPU 约 50–55% 与约 52 MB/min 写入、#153899 drain 等待完整 5m30s，均属“跑久了就坏”的运维痛点。
- **消息可靠性与重复**：#111897、#110368、#158332、#50093 涉及重复回复、丢失消息、跨会话礼貌循环，直接影响用户对会话转录可信度的判断。
- **成本敏感度**：#84110 用户精确给出 prompt cache 命中率从 93% 降至 47%，是本批反馈中唯一量化 API 成本损失的条目，反映高级用户对 token 经济性的关注。

**满意度侧信号**：#103198（WebChat 图片附件，3 👍）、#84110（2 👍）、#110368（2 👍）、#38568（2 👍）、#60572（3 👍）显示社区对 UI/会话层缺陷与产品级增强的关注度高于底层基础设施，且 👍 集中度低，未出现单一高票诉求。

**不满集中点**：带 `clawsweeper-recovery-stuck` 标签的条目（#111897、#97616、#50093、#154114、#157986、#157160、#157227、#121187、#125570、#157630、#153899、#154104、#110368、#54488 等）数量众多，反映用户对“诊断充分但修复停滞”的不满。

---

## 8. 待处理积压

**长期未决、今日仍有更新且属重要级别：**

- **[#50093](openclaw/openclaw Issue #50093)** — WhatsApp 重连回补消息。创建于 **2026-03-19**，已逾 6 个月，标签 `stale`、`needs-product-decision`、`needs-live-repro`、`🐚 platinum hermit`。属功能请求类长期悬置，需产品决策。
- **[#54488](openclaw/openclaw Issue #54488)** — Session lane starvation。创建于 **2026-03-25**，P1，`needs-live-repro`、`needs-product-decision`、`🐚 platinum hermit`，被 #111897 引用为同源症状。
- **[#60572](openclaw/openclaw Issue #60572)** — Multi-Slot Memory Architecture。创建于 **2026-04-03**，P3，3 👍，`needs-product-decision`。
- **[#38568](openclaw/openclaw Issue #38568)** — 注入上下文窗口百分比。创建于 **2026-03-07**，P3，2 👍，`needs-product-decision`。实现成本看似较低而收益明确，建议优先裁决。
- **[#84110](openclaw/openclaw Issue #84110)** — Codex prompt cache 击穿。创建于 **2026-05-19**，P2，2 👍，无 fix PR，涉成本影响。
- **[#97616](openclaw/openclaw Issue #97616)** — 子进程僵尸累积。创建于 **2026-06-29**，P1，`🐐 gold shrimp`/回归，无 fix PR。
- **[#105528](openclaw/openclaw Issue #105528)** — Windows exec/read 空输出。创建于 **2026-07-12**，P1，含 `docs` 标签但无 fix PR。
- **[#119411](openclaw/openclaw Issue #119411)** — memory 重索引失效。创建于 **2026-08-05**，P1，`🛞 diamond lobster`，**已有 linked PR 开启** —— 建议维护者优先推动该 PR 落地以关闭此积压。

**积压健康度提示**：以上 8 项中，5 项带 `needs-product-decision`，说明积压的主要瓶颈不在工程实现，而在产品决策环节；#143524（76 评论、P0、无 fix PR）虽创建于 2026-09-09 属较新条目，但因影响面大，建议单独立项跟踪。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**数据窗口：2026-09-27（前 24 小时）**

---

## 1. 生态全景

当前生态呈现"**头部高频修复、长尾低速酝酿**"的分化格局：OpenClaw 以单日 500 条 Issue 更新、500 条 PR 更新的量级断层领先，但其 P0 崩溃类问题（Gateway 启动/迁移/关闭）大面积缺乏对应 fix PR，积压持续膨胀。中量级项目（ZeroClaw、NanoClaw、Hermes Agent、NanoBot）活跃度相近，普遍呈现"提交快于合并"的特征——待合并 PR 队列明显深于当日消化速度，审查带宽成为共同瓶颈。跨项目的讨论焦点高度一致地落在**可靠性**（会话状态一致性、消息丢失/重复、升级迁移失败）而非新功能上，同时"内部编排信息泄漏给用户"与"模型能力识别滞后于厂商命名"两类问题在多个项目独立复现，指向行业级共性缺陷。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PR（待合并/已合并） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500 更新（475 活跃 / 25 关闭） | 500 更新（396 待合并 / 104 合并） | 无 | 高活跃、高修复压力；Issue 关闭率约 5%，P0 多为 `no-new-fix-pr`，积压膨胀 |
| **ZeroClaw** | 29（22 活跃 / 7 关闭） | 50（37 待合并 / 13 合并） | 无 | 高活跃、良好；v0.9.0 gateway 拆分密集推进，但 37 条待合并 + stacked PR 依赖链构成评审压力 |
| **Hermes Agent** | 50（45 活跃 / 5 关闭） | 50（44 待合并 / 6 合并） | 无 | 高活跃、吞吐受限；合并率约 12%，安装/更新链路为主要风险点 |
| **NanoClaw** | 4（4 活跃 / 0 关闭） | 36（32 待合并 / 4 合并） | 无 | 高活跃、中等；维护者单点驱动，安全与升级路径为主线，队列深度显著 |
| **LobsterAI** | 5（2 活跃 / 3 关闭） | 10（1 待合并 / 9 合并） | 无 | 中活跃、中等偏上；以 stale 旧事项集中清理为主，安全修复有实质落地 |
| **NanoBot** | 5（全部活跃） | 14（9 待合并 / 5 合并） | 无 | 高活跃、响应快；cron 持久化问题当日形成 issue+fix 闭环，但存在 `conflict` 长期 PR |
| **CoPaw** | 5（3 活跃 / 2 关闭） | 4（全部待合并 / 0 合并） | 无 | 中等活跃、良好；缺陷闭环快（当日报告当日 PR），但今日 0 合并，含 48 天积压 PR |
| **NullClaw** | 18 更新（16 关闭） | 9 更新（8 已合并/关闭） | 无 | 高吞吐清理；审批流安全闭环 + 多通道增强落地，但多为"关闭无 PR"需核实 |
| **Moltis** | 1（1 活跃） | 2（2 待合并 / 0 合并） | 无 | 低活跃、稳定；"用户即修复者"模式，#1280 积压 6 天 |
| **PicoClaw** | 1（1 活跃） | 2（1 待合并 / 1 关闭） | 无 | 低活跃；唯一新增需求 #3395 质量清晰，stale PR #3347 存丢失风险 |
| **IronClaw** | 1（1 活跃） | 1（1 待合并 / 0 合并） | 无 | 低位平稳；提案酝酿 + 基础设施维护，推进量接近零 |
| **TinyClaw** | 无活动 | 无活动 | 无 | 无活动 |
| **ZeptoClaw** | 无活动 | 无活动 | 无 | 无活动 |

> **核心观察**：全部 13 个项目中，**无一发布新版本**；除 LobsterAI、NullClaw 外，多数项目的"待合并/已合并"比值大于 3:1，合并吞吐是生态级瓶颈。

---

## 3. OpenClaw 在生态中的定位

**社区规模：断层第一。** OpenClaw 单日 Issue 更新量（500）约为第二梯队（Hermes 50、PR 侧 ZeroClaw 50）的 10 倍，讨论热度最高的单条 Issue（#143524，76 条评论）远超其他项目全部条目之和。这是生态内唯一具备"平台级问题密度"的项目。

**技术路线差异：**
- **稳定性包袱最重**。OpenClaw 的 P0 集中于 Gateway 生命周期（启动阻塞 #143524、迁移失败 #154114/#157227、关闭报错 #158126）与跨版本升级路径，符合其"长期运行 + 自动更新"的重型部署形态。
- **对比 ZeroClaw**：后者同样在做 v0.9.0 gateway 架构拆分（RPC 平价系列 PR），但以**主动重构**推进；OpenClaw 则是**被动修复**既有 Gateway 的崩溃循环——前者在迁移期，后者在维护期。
- **对比 NanoBot/NanoClaw**：这些中型项目的 provider 层问题以"发现即修复"为主（如 NanoBot #5932→#5933 当日闭环），而 OpenClaw 的同类问题常陷入 `clawsweeper-recovery-stuck`（诊断充分、修复停滞）状态。

**优势与风险并存**：OpenClaw 的 fix PR 响应速度快（工作区已有 #159578、#150623 等对应热点问题的 PR 在评审），标签体系（proof、merge-risk、clawsweeper 系列）精细度领先全生态；但 Issue 关闭率仅约 5%，"诊断-修复"之间的落差是其健康度最大拖累。

---

## 4. 共同关注的技术方向

多项目独立涌现的共性需求，按跨项目一致性排序：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/迁移路径不可靠** | OpenClaw、NanoClaw、Hermes、NanoBot | OpenClaw `openclaw update` 候选预演失败（#154114/#157227/#157415）；NanoClaw v2.3→v2.4 `prepare` 崩溃且 lockfile 被重写（#3943/#3942）；Hermes `uv.lock` 与镜像源注册表不匹配阻断 runtime 供给（#122112/#123943） |
| **会话状态一致性** | OpenClaw、NanoBot、CoPaw | 重复回复/消息重复投递（OpenClaw #111897、#110368；NanoBot 会话持久化阻塞事件循环 #5580）；CoPaw 上下文状态圆环不更新（#7994） |
| **消息丢失与可靠性** | OpenClaw、NanoBot、CoPaw | WhatsApp 重连不回补（OpenClaw #50093）；cron 待处理动作丢失（NanoBot #5932）；消息撤回/历史回滚诉求（CoPaw #7997） |
| **模型能力识别滞后于厂商命名** | Moltis、NanoBot、OpenClaw | Moltis 硬编码 `deepseek-v4*` 无法识别 `deepseek-flash`（#1286/#1287）；NanoBot Codex 模型发现遗漏 GPT-6 Sol/Luna（#5939）、GPT-6 OAuth 发现成功仍被拒（OpenClaw #155937） |
| **内部编排信息泄漏给用户** | NanoBot、NanoClaw | NanoBot Feishu 泄漏 session-checkpoint 标记（#5903）；NanoClaw 日志写入 Signal 密钥材料（#2520） |
| **provider 扩展与 OpenAI 兼容网关** | NullClaw、ZeroClaw、OpenClaw | Eden AI（NullClaw #990）、Cheaper Inference（ZeroClaw #11103）、Databricks Unity（OpenClaw #155633/#155634）、OpenRouter（NanoClaw #3944） |
| **并发/资源泄漏导致长期运行退化** | OpenClaw、NanoClaw、ZeroClaw、NanoBot | 子进程僵尸累积（OpenClaw #97616）；stream reader 泄漏（NanoClaw #1038）、spawnSync 100% CPU 空转（NanoClaw #3841）；并发 file_edit 静默丢写（ZeroClaw #11136） |

**信号**：provider 层已从"接入新厂商"转向"**统一为 OpenAI 兼容网关 + 类型化槽位**"的收敛形态，四个项目独立采用同一抽象。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能个人助手（Gateway + 多通道 + 记忆 + Skill Workshop） | 高级个人用户、Windows 单机部署 | 重型 Gateway，SQLite/WAL 数据层，标签化运维，Watchtower 自动升级 |
| **ZeroClaw** | v0.9.0 gateway 拆分、RPC 平价、知识图谱记忆 | 架构敏感型开发者 | 模块化 Gateway 重构 + SOP/插件 + 向量记忆（Qdrant），stacked PR 流 |
| **Hermes Agent** | 多环境 runtime 供给（PM runtime）、桌面端自动化 | 开发者 + 评测用户 | 锁文件驱动的 runtime 供给，PM runtime 启动器 + 网关身份识别 |
| **NanoBot** | provider 层 + Cron 持久化 + WebUI 远程连接 | 多实例部署用户 | 轻量，provider 发现层为重心，Cron action 文件持久化 |
| **NanoClaw** | 容器化 agent + 多渠道（WhatsApp/Matrix/Teams） | 自托管部署用户 | 容器 + agent SDK，skill 体系，delivery mode 可配置 |
| **NullClaw** | 多渠道（six channels）+ 审批流安全闭环 + A2A | 企业工具链集成用户 | SecurityPolicy + 结构化审批流，A2A 鉴权，OpenAI 兼容 provider 网关 |
| **Moltis** | 模型能力探测 + 预设工具控制 | 推理密集型任务用户 | Rust（crates/providers），硬编码模型 ID 启发式 |
| **CoPaw** | WebUI 交互可控性（撤回/回滚/停用） | 对话体验敏感用户 | Console + 上下文压缩机制 + MCP 可配置超时 |
| **LobsterAI** | 渲染器/编辑器 + 安全加固 | Electron 桌面用户 | electron:dev 热重载，SSRF 防护，会话文件夹 |
| **IronClaw** | 工具选择优化（提案阶段） | 工具规模敏感用户 | BM25F + embeddings 混合检索工具选择 |
| **PicoClaw** | 嵌入式（sipeed）+ OneBot/QQ 接入 | 硬件/QQ 群场景用户 | 轻量，Web UI 卡顿待修 |
| **NullClaw/PicoClaw/TinyClaw/ZeptoClaw** | Claw 系命名分支，定位分散 | 各有细分场景 | 部分项目当日无活动 |

**关键差异**：OpenClaw、ZeroClaw、Hermes、NanoClaw 走**重型平台路线**（Gateway/容器/runtime 治理）；Moltis、CoPaw、IronClaw、PicoClaw 走**单点能力精细化路线**（模型探测、UI 可控性、工具选择、嵌入式）。

---

## 6. 社区热度与成熟度

**分层判断（按当日数据）：**

- **第一层 · 高活跃高压力：OpenClaw** — 唯一平台级问题密度，处于**高强度维护期**，稳定性是核心矛盾（P0 无 fix PR）。
- **第二层 · 高活跃快速迭代：ZeroClaw、Hermes、NanoClaw、NanoBot、NullClaw**
  - **快速迭代**：ZeroClaw（v0.9.0 gateway 拆分密集推进）、NanoBot（provider 层连续加固，当日闭环）、NullClaw（审批流 + 多通道批量落地）
  - **质量巩固**：Hermes（安装链路修复待合入）、NanoClaw（安全修复 + 升级回归修复聚焦）
- **第三层 · 中活跃质量巩固：LobsterAI、CoPaw** — 以 stale 清理、缺陷闭环为主，功能性推进有限（CoPaw 今日 0 合并）。
- **第四层 · 低活跃酝酿：Moltis、PicoClaw、IronClaw** — 单条需求/提案驱动，推进量接近零。
- **第五层 · 停滞：TinyClaw、ZeptoClaw** — 24 小时无活动。

**阶段判断**：生态整体处于**"规模化后的质量巩固期"**——不再是功能扩张期，而是被可靠性、升级路径、provider 兼容性问题主导。OpenClaw 的压力强度表明其已先行进入"平台维护的深水区"。

**成熟度信号**：所有项目均无版本发布，说明生态普遍采用"持续合并主干、低频打版"的开发模型；Health 指标更多体现在**合并吞吐**而非功能增量。

---

## 7. 值得关注的趋势信号

1. **"可靠性赤字"是生态最大公约数痛点。** 跨 6+ 项目独立复现升级失败、消息丢失、状态不一致，说明当前一代智能体框架在**长期运行与跨版本演进**上尚未工程成熟。对开发者：将"升级迁移可回滚 + 状态一致性可验证"作为设计第一天的基础约束，而非事后修复。

2. **provider 抽象正在收敛为"OpenAI 兼容网关 + 类型化槽位"。** NullClaw（Eden AI）、ZeroClaw（Cheaper Inference）、OpenClaw（Databricks Unity）独立采用同一形态，OpenRouter 亦被纳入。对开发者：新增模型厂商时优先复用该抽象，避免每个 provider 单独实现。

3. **模型能力探测的硬编码模式是系统性脆弱点。** Moltis 硬编码 `deepseek-v4*` 在厂商改名后静默失效；NanoBot/OpenClaw 的 GPT-6 发现滞后同源。对开发者：能力探测应基于**运行时能力声明或远程元数据**，而非模型 ID 前缀启发式。

4. **"内部编排信息 vs 用户可见内容"的隔离成为新的信任边界。** NanoBot 的 session-checkpoint 标记泄漏、NanoClaw 的日志密钥泄漏、CoPaw 的状态显示不实，共同指向"**agent 内部状态的可见性控制**"这一新问题域。对开发者：在通道层显式区分内部指令与用户可见消息。

5. **并发安全与资源生命周期管理被反复触碰。** 并发 file_edit 静默丢写（ZeroClaw）、stream reader 泄漏（NanoClaw）、子进程僵尸累积（OpenClaw）、事件循环阻塞（NanoBot #5580）。对开发者：并行工具执行、流式响应、子进程管理的**生命周期契约**需要显式设计。

6. **"诊断充分但修复停滞"是社区不满的主要来源。** OpenClaw 的 `clawsweeper-recovery-stuck`、Hermes/NanoClaw 的 `conflict` 长期 PR、CoPaw 的 `Close-and-review-later` 均显示：**问题定位速度已远快于合并速度**。对项目维护者：审查带宽正在成为生态级瓶颈，去重、批量评审与优先级裁决机制的价值上升。

7. **用户正在从"功能消费者"变为"修复者"。** Moltis #1286/#1287、LobsterAI #1041/#1042、NanoBot #5932/#5933 均出现"同用户当日提交 issue + fix"。对开发者：降低贡献门槛（清晰的 issue 模板、可复现环境）能直接转化为修复速度。

8. **企业集成与多实例部署是下一阶段的需求增长点。** Databricks（OpenClaw）、A2A 鉴权（NullClaw）、远程实例连接 NAN-157（NanoBot）、Teams/Matrix（ZeroClaw、NanoClaw）显示生态正从"单机个人助手"向"企业工具链嵌入 + 多实例协同"延伸。

---

*本报告严格基于所提供各项目 2026-09-27 GitHub 数据快照生成，未补充或推断数据外信息。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-27

## 1. 今日速览

过去 24 小时 NanoBot 保持高强度开发节奏：14 条 PR 更新（9 条待合并、5 条已合并/关闭），5 条 Issue 全部处于开放/活跃状态，无新版本发布。今日活动高度集中在 **provider/模型发现层**（GPT-6 与 GitHub Copilot）和 **cron 持久化回归**两大主题，其中 cron 问题已形成 Issue #5932 与 p0 级 fix PR #5933 的当日闭环。合并侧以 chengyongru 的 provider 修复为主（#5937、#5938），显示出对 Responses 流式处理的连续加固。整体活跃度评估：**高**，问题响应速度快，但存在多条带 `conflict` 标记的长期 PR 积压。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 5 条 PR：

- **#5937 [CLOSED, p1]** `fix(providers): stop Responses streams at terminal events` — 在 `response.completed` / `response.incomplete` 后即停止 SSE 与 SDK 解析器，不再等待 transport EOF，并在 OpenAI 兼容与 Azure 调用方关闭 SDK 流。属于 provider 层稳定性加固。
  https://github.com/HKUDS/nanobot/pull/5937
- **#5938 [CLOSED, p1, regression]** `fix(providers): preserve optional tool parameters in Responses requests` — 修复 Responses 工具转换丢弃显式 `strict` 设置、导致可选 MCP 过滤条件被强制为必填的回归问题。
  https://github.com/HKUDS/nanobot/pull/5938
- **#5934 [CLOSED, p2]** `fix(webui): unblock earlier-history pagination and show retry states` — 修复历史分页在最新页未填满视口时不可达的问题，并补充加载/失败反馈。
  https://github.com/HKUDS/nanobot/pull/5934
- **#5936 [CLOSED, p2]** `fix(weixin): silence polling request logs` — 抑制微信轮询每约 18 秒一次的 INFO 级 httpx 日志（对应 #5900）。
  https://github.com/HKUDS/nanobot/pull/5936
- **#5865 [CLOSED, p2]** `fix: preserve primary context window with smaller fallbacks` — 修复 256K 主预设被 200K fallback 拉低上下文预算的问题。
  https://github.com/HKUDS/nanobot/pull/5865

**推进程度**：今日合并内容集中在"减少后台噪音 + 修复 provider 流式与工具 schema 语义 + WebUI 可用性"三条主线，属于质量与稳定性收敛，而非新功能推进。

## 4. 社区热点

- **#5903 [OPEN] Feishu 隐藏会话检查点标记泄漏给用户**（3 评论，今日 Issue 中讨论最多）
  https://github.com/HKUDS/nanobot/issues/5903
  内部 session-checkpoint 标记 `Continue the active task from the working-memory checkpoint above.` 在空闲压缩后被当作普通消息推送给用户。诉求指向**通道层消息可见性控制**：内部编排指令与用户可见内容必须严格隔离。
- **#5580 [OPEN, p1, conflict]** `fix(session): move persistence off event loop`
  https://github.com/HKUDS/nanobot/pull/5580
  从 2026-08-28 挂起至今仍在更新（今日有活动）。慢速会话存储/file-lock 争用会阻塞事件循环并拖垮无关会话，属于架构级性能问题，值得重点关注。
- **#5941 [OPEN]** `feat(webui): connect to existing remote nanobot instances (NAN-157)`
  https://github.com/HKUDS/nanobot/pull/5941
  让本地应用发现并连接服务器上已运行的 nanobot，是今日唯一明确的功能性新能力，反映远程/多实例部署诉求。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 高 | **#5932 cron 待处理动作丢失**：`_merge_action()` 在 `_save_store()` 之前清空 `action.jsonl`，写入失败（如 ENOSPC）时已接受动作从磁盘消失 | OPEN | ✅ **#5933 [p0]** 同日提交 https://github.com/HKUDS/nanobot/pull/5933 |
| 高 | **#5924 Agent 陷入 sudo 循环**：sudo 仅维持一个回合，授权在命令执行前失效；达到最大迭代后状态异常、不可用 | OPEN | ❌ 暂无 |
| 中 | **#5898 v0.3.5 无法通过 GitHub Copilot 使用 GPT-6 系列**，报 provider 配置/服务错误 | OPEN | ✅ **#5935 [p2]** 将 GPT-6 路由到 Responses API https://github.com/HKUDS/nanobot/pull/5935 |
| 中 | **#5939 Codex 模型发现遗漏 GPT-6 Sol / Luna**（client_version 固定为 0.153.4） | OPEN | ✅ **#5940 [p2]** 升级至 0.158.0 https://github.com/HKUDS/nanobot/pull/5940 |
| 中 | **#5903 Feishu 内部检查点标记泄漏** | OPEN | ⚠️ 相关方向 PR **#5780**（停止发送 context compaction 通知）仍 OPEN 且带 `conflict` https://github.com/HKUDS/nanobot/pull/5780 |

另有已关闭的 p1 回归修复 **#5937 / #5938**（见项目进展），均为 provider 层。

## 6. 功能请求与路线图信号

- **远程实例连接（NAN-157）**：#5941 已提交实现，本地应用可发现服务器上运行的 nanobot。今日唯一新增功能向 PR，纳入下一版本的可能性较高。
- **内部通知静默化**：#5780 主张 autocompaction 通知对用户不可见（仅 `/compact` 保留），与 #5903 的用户痛点直接呼应；但该 PR 带 `conflict` 标记，短期合并存在阻力。
- **Agent 持续目标续跑边界**：#5257 `fix(agent): bound sustained-goal continuation when the turn goes idle` 限制在模型等待输入时的重复"continue"提示，与 #5924 的循环卡死问题同源，属长期待决项。
  https://github.com/HKUDS/nanobot/pull/5257

## 7. 用户反馈摘要

- **内部编排信息污染用户界面**（#5903）：Feishu 用户会直接收到本应隐藏的 session-checkpoint 提示，影响信任感与可用性。
- **模型支持滞后于用户预期**（#5898、#5939）：用户在同一账号下于 Codex 客户端可见全部三个 GPT-6 模型，但 NanoBot 的 WebUI/Codex provider 只列出部分，说明模型发现与提供商实际能力脱节。
- **权限交互打断自动化**（#5924）：sudo 单回合有效使长命令无法完成，用户描述 agent "变得不可用"，并伴随最大迭代后的状态异常——属于典型自动化场景断裂。
- **磁盘写入失败即丢数据**（#5932）：以 ENOSPC 为例，反映出用户对 cron 任务持久化可靠性的担忧，属于数据安全类反馈，维护者响应最快（当日 p0 fix）。

## 8. 待处理积压

- **#5580 [OPEN, p1, conflict]** 会话持久化移出事件循环 — 自 2026-08-28 挂起 **30 天**，仍带冲突标记，影响会话隔离与运行时响应性。
  https://github.com/HKUDS/nanobot/pull/5580
- **#5257 [OPEN, p2]** 限制 sustained-goal 空闲续跑 — 自 2026-08-05 挂起 **53 天**，与 #5924 的循环问题相关。
  https://github.com/HKUDS/nanobot/pull/5257
- **#5780 [OPEN, p2, conflict]** 停止发送 context compaction 通知 — 自 2026-09-15 挂起，是 #5903 的直接相关修复路径。
  https://github.com/HKUDS/nanobot/pull/5780
- **#5864 [OPEN, p2]** Discord 运行时重置时取消延迟反应任务（Fixes #5806）— 自 2026-09-22 待合并。
  https://github.com/HKUDS/nanobot/pull/5864

**提示维护者**：#5580 与 #5780 同时带有 `conflict` 标记且分别挂起 30 天与 12 天，涉及事件循环性能与用户可见性两条主线，建议优先 rebase 或明确取舍。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-27

## 1. 今日速览

项目今日维持高强度社区活跃：过去24小时内 Issues 更新 50 条（新开/活跃 45、关闭 5），PRs 更新 50 条（待合并 44、已合并/关闭仅 6），无新版本发布。合并/关闭比例偏低（约 12%），而新提交的修复 PR 明显多于被合并的数量，积压呈上升趋势。问题高度集中在**安装/更新链路**（PM runtime、uv.lock、pip 镜像、Windows 平台）与**内存提供者/运行时竞态**两个方向，多项已形成「issue + 对应 fix PR」配对，但尚未落地。整体看，社区反馈旺盛、维护端吞吐受限，安装兼容性正成为当前最主要的健康风险点。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭数量有限，未见主线功能合入，可识别到的关闭项为重复提交：

- **PR #125327 [CLOSED]** `fix(kanban): stop re-spawning workers into hard-blocker loops` — 与同日新开的 PR #125333 内容重复，疑为重新提交后关闭。
  https://github.com/NousResearch/hermes-agent/pull/125327

当日新增的拟修复 PR（尚未合并）覆盖了多处关键缺陷，推进方向如下：

- **#125334** `fix(pm): stage the runtime from the lockfile without a re-resolution check` — 针对 Windows bootstrap 在 `python-deps` 阶段的锁文件校验失败。
  https://github.com/NousResearch/hermes-agent/pull/125334
- **#125332** `fix(deps): bump httpx2/httpcore2 2.7.0 -> 2.12.0` — 修复已公开安全公告所涉依赖版本。
  https://github.com/NousResearch/hermes-agent/pull/125332
- **#125324** `fix(gateway): report in-process dependency readiness` — 解决网关 `/health` 通过但实际请求全失败（如 `pydantic_core._pydantic_core` 无法导入）的假健康问题。
  https://github.com/NousResearch/hermes-agent/pull/125324
- **#125308** `fix(botdm): run the delivery wrapper under the child install's venv python` — 修复 DM 投递使用发送方解释器导致投递失败。
  https://github.com/NousResearch/hermes-agent/pull/125308

净推进幅度：当日实质合入接近零，主要进展停留在「修复已就绪、待合入」状态。

## 4. 社区热点

按评论数排序的讨论焦点：

- **Issue #47954**（10 条评论，`memory provider 'honcho'` 启动竞态告警）— 创建于 2026-06-17，今日仍在更新，属跨版本长期未决问题。
  https://github.com/NousResearch/hermes-agent/issues/47954
- **Issue #124029**（10 条评论）— pm-runtime 启动器命令行无法被网关身份匹配器识别，`live_gateway_pid_for_home()` 无法验证 shim 启动的网关。
  https://github.com/NousResearch/hermes-agent/issues/124029
- **Issue #122485**（7 条评论）— Desktop entry 的 `Exec` 可能解析到无法提供 `hermes desktop` 的启动器。
  https://github.com/NousResearch/hermes-agent/issues/122485
- **Issue #121935**（6 条评论）— 请求提供「单次调用跳过外部内存提供者」的开关，明确用于评测/基准测试场景。
  https://github.com/NousResearch/hermes-agent/issues/121935

**诉求分析**：热点集中于「运行时环境与进程身份识别」——用户在多环境（自管理源码安装、托管运行时、Windows）下反复遇到启动器、网关、内存提供者之间的错配。评测场景用户希望获得更细粒度的能力开关，说明项目正被同时用于生产与基准评估两类用途。#47954 持续三个月仍有讨论，反映内存提供者初始化时序问题长期缺乏根治方案。

## 5. Bug 与稳定性

按标注严重程度排列：

**P0**
- **Issue #122774** — Windows 10 `hermes setup desktop` 在 `stage=prerequisites` 提取 pinned git archive 失败，安装直接中断。
  https://github.com/NousResearch/hermes-agent/issues/122774
  *暂无对应修复 PR。*

**P2（含多项已有 fix PR）**
- **Issue #125305 / PR #125308** — DM 投递包装器使用发送方解释器，托管 tools python 缺少仓库依赖，导致所有 DM 在准入阶段失败。（已有 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/125305
- **Issue #125143** — Windows：`hermes update` 在网关发现阶段中止，启动器重启的网关无法通过严格身份识别。
  https://github.com/NousResearch/hermes-agent/issues/125143
- **Issue #123943 / #122112 / #123171** — 三组同源问题：配置 pip 镜像（如清华源）的主机上，`UV_INDEX_URL` 与提交的 `uv.lock` 注册表不匹配，`uv --locked` 拒绝执行，PM runtime 供给硬失败；`hermes pm repair` 因双锁文件（`uv.lock` 与 `pm/uv.lock`）不同步而失败。PR #125334 试图绕过重解析检查。（已有 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/123943
  https://github.com/NousResearch/hermes-agent/issues/122112
  https://github.com/NousResearch/hermes-agent/issues/123171
- **Issue #123238** — 使用不同 `HERMES_HOME` 启动会改写 checkout 的共享启动器指向该 home 的 Python；临时 home 被删除后 `hermes` 不可用。
  https://github.com/NousResearch/hermes-agent/issues/123238
- **Issue #121954** — Linux 桌面版启动即崩溃（SIGTRAP/INT3 与 SIGSEGV），2 天内 4 次，标记 `needs-repro`。
  https://github.com/NousResearch/hermes-agent/issues/121954
- **Issue #103829** — 主模型选择器在凭据池耗尽时整行隐藏提供商（辅助选择器已在 #66624 修复）。
  https://github.com/NousResearch/hermes-agent/issues/103829
- **Issue #97347** — 删除的 profile 目录被 TUI 网关在数秒内重建（仅含 `state.db` 与 `logs/`）。
  https://github.com/NousResearch/hermes-agent/issues/97347
- **Issue #122394** — 免费 Portal Perplexity Fast Search 被通用 Tool Gateway 额度限制阻断，与发布公告描述不符。
  https://github.com/NousResearch/hermes-agent/issues/122394

**P3 / 安全**
- **Issue #108219** — `httpx2==2.7.0` / `httpcore2==2.7.0` 在 `dev`、`mcp`、`computer-use` extras 中被固定，`[all]` 会重新引入，尽管已有公开 GHSA 与可用补丁。PR #125332 已提出升级至 2.12.0。（已有 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/108219

**回归/兼容性信号**：多个 issue 携带 `sweeper:risk-compatibility` 与 `sweeper:risk-platform-windows` 标签，Windows 平台是当前最集中的不稳定来源。

## 6. 功能请求与路线图信号

- **Issue #121935**（6 条评论，`needs-decision`）— 单次调用跳过外部内存提供者（Honcho、Mem0 等），保留 profile 其余能力，服务评测与基准测试。标签表明尚待决策，短期内不一定进入下一版本。
  https://github.com/NousResearch/hermes-agent/issues/121935
- **Issue #92524** — Portal/托管智能体暴露 agent 云浏览器的实时 noVNC 视图，用于人工登录交接（应对反爬拦截）。已有 `comp/dashboard`、`comp/portal` 标签，具备路线图相关性。
  https://github.com/NousResearch/hermes-agent/issues/92524
- **PR #123317** — Kanban 看板可声明默认 workspace 类型（`board.json` 目前仅支持 `default_workdir`）。
  https://github.com/NousResearch/hermes-agent/pull/123317
- **PR #104716 / #105434**（jerrygooch）— Desktop 端从编辑器创建自动化、补全自动化生命周期控件，体现「Desktop GUI-first」的产品方向。
  https://github.com/NousResearch/hermes-agent/pull/104716
  https://github.com/NousResearch/hermes-agent/pull/105434
- **PR #104447** — Desktop 可选面板宽高锁定（#103166 的后续，级联缩放部分已被 #104202 合入）。
  https://github.com/NousResearch/hermes-agent/pull/104447

**判断**：桌面端自动化与布局能力有连续 PR 支撑，具备近期合入条件；内存提供者开关与 noVNC 交接仍处需求讨论阶段。

## 7. 用户反馈摘要

- **安装与更新的挫败感最强**：镜像 pip 源的主机（常见于国内环境）在 `hermes update` 中被 `uv.lock` 注册表校验直接阻断，无法完成 runtime 供给与桌面重建（#122112、#123943）；用户还提到 `hermes pm repair` 无法自愈（#123171）。这类环境在中国用户中普遍存在，影响面较大。
- **平台差异化明显**：Windows 用户遭遇 P0 级安装失败（#122774）与更新中止（#125143）；Linux 桌面用户报告反复崩溃（#121954）。跨平台一致性是明显短板。
- **环境隔离需求真实**：测试框架使用 `TemporaryDirectory` 作为 `HERMES_HOME` 会把 checkout 的共享启动器改写坏（#123238），说明开发者把 Hermes 嵌入自动化测试的场景正在增长。
- **能力开关粒度不足**：评测用户需要保留 profile 全部能力、仅关闭外部内存提供者，目前无此途径（#121935）。
- **期望与实际不符**：公告称免费的 Portal Perplexity Fast Search 被通用额度阻断（#122394），属用户信任层面的负反馈。
- **正面信号**：Issue #121925 提及辅助选择器修复（#66624）已落地，说明历史反馈有被消化；PR 作者普遍会引用原始 issue 并给出验证细节，协作质量较高。

## 8. 待处理积压

- **Issue #47954** — 2026-06-17 创建，`memory.provider: honcho` 启动竞态告警，已持续三个多月、10 条评论，仍为 OPEN，无修复 PR。
  https://github.com/NousResearch/hermes-agent/issues/47954
- **Issue #97347** — 2026-08-28 创建，删除的 profile 目录被 TUI 网关重建，约一个月未解决。
  https://github.com/NousResearch/hermes-agent/issues/97347
- **Issue #103829** — 2026-09-05 创建，主模型选择器在凭据池耗尽时隐藏提供商；辅助选择器已修复而主路径仍未跟进。
  https://github.com/NousResearch/hermes-agent/issues/103829
- **Issue #108219** — 2026-09-11 创建的安全类依赖固定问题，公告与补丁均已存在，PR #125332 已提交但未合并，建议优先处理。
  https://github.com/NousResearch/hermes-agent/issues/108219
- **PR #103433 / #103448**（jerrygooch，2026-09-05 创建）— Desktop 性能类 PR（避免空闲 atom 抖动、输入与面板缩放响应性），已开放三周，含 180 轮测试聊天中 122 次 React 提交的具体度量，建议尽快评审。
  https://github.com/NousResearch/hermes-agent/pull/103433
  https://github.com/NousResearch/hermes-agent/pull/103448
- **PR #104447 / #104716 / #105434** — 同一作者的 Desktop 功能链，开放时间已达 20 天左右，存在评审排队现象。

**维护者提示**：当日待合并 PR 达 44 条而合并仅 6 条，且新提交的 #125333 与已关闭的 #125327 内容重复，建议建立去重与批量评审节奏，优先清理已有 fix PR 的 P0/P2 缺陷与安全升级，以抑制积压继续扩大。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-09-27）

## 1. 今日速览

过去 24 小时项目活跃度**偏低**：仅 1 条 Issue 更新、2 条 PR 更新，无新版本发布。值得注意的是，两条 PR 均为存量项——#3347 自 8 月 27 日创建后已近一个月未合并并被标记 `[stale]`，#3310 则在今日走向关闭。今日唯一的新增内容是一条关于 OneBot 频道的功能请求（#3395），指向一项硬编码行为。整体来看，项目今日没有功能性推进，主要动态集中在需求收集与积压清理上。

## 2. 版本发布
无新版本发布，本节省略。

## 3. 项目进展

今日有 1 条 PR 被关闭：

- **[CLOSED] #3310 Feat/auto pr**（作者 j-v，创建 2026-08-02，更新 2026-09-26）
  链接：sipeed/picoclaw PR #3310
  描述仅一句「picoclanker did this」，未提供具体功能说明。该 PR 从创建到关闭历时近两个月，且无正文或评论记录，难以判断其实际代码贡献，建议维护者确认是正常合并、废弃还是自动化流程产物。**对项目功能推进的净贡献暂无法从现有数据证实。**

总体而言，项目今日向前推进的幅度有限：一条 PR 关闭、一条仍处停滞状态，无新版本。

## 4. 社区热点

今日所有条目的评论数与 👍 数均为 0 或未记录，**无实际讨论热度**。相对最值得关注的是：

- **Issue #3395** [OPEN] [Feature] Make OneBot auto-ack reaction configurable（作者 ycsqwan）
  链接：sipeed/picoclaw Issue #3395
  唯一的新增 Issue，诉求明确：将 OneBot 频道的自动表情回应改为可配置。
- **PR #3347** [OPEN] [stale] fix laggy interface（作者 iMilnb）
  链接：sipeed/picoclaw PR #3347
  虽被标记 stale，但 2026-09-26 仍有更新，说明作者或仍有维护意愿。

## 5. Bug 与稳定性

今日**无新增 Bug、崩溃或回归报告**。

唯一的稳定性相关项为 **PR #3347**（`fix laggy interface`）：
- 严重程度：**中等（体验类，非崩溃）**。描述指出当聊天区域文本量较大时 Web UI 出现卡顿。
- 已有 fix PR：**是**（即 #3347 本身），作者称已在桌面端与移动端浏览器（均为 Brave）构建并测试 `picoclaw-launcher`，卡顿消失。
- 状态：**OPEN 且被标记 `[stale]`**，自 2026-08-27 起未合并。该修复若有效且长期滞留，可能持续影响大文本量场景下的用户体验，建议优先复检。

## 6. 功能请求与路线图信号

今日新增 1 条功能请求：

- **Issue #3395 — OneBot 自动回应可配置化**
  链接：sipeed/picoclaw Issue #3395
  用户 ycsqwan 使用 OneBot 频道（通过 NapCat 接入 QQ），发现**每条**群消息都会触发自动表情确认（`set_msg_emoji_like`，emoji 289），且该行为在 `OneBotChannel...` 中被硬编码。
  诉求本质：将 `reaction_enabled` 暴露为配置项，允许用户关闭或控制自动回应。

**是否可能进入下一版本：** 现有数据中**没有任何关联 PR** 指向该功能，因此无法判断已被采纳；但该需求实现成本较低（将硬编码值改为配置开关），属于典型的高性价比小改动，是否纳入取决于维护者优先级。

## 7. 用户反馈摘要

受限于今日数据（所有条目评论数为 0 或未记录），无法从评论中提炼反馈。可依据 Issue/PR 正文归纳两点真实使用场景与痛点：

1. **不满意点（#3395）**：OneBot/QQ（NapCat）用户在群聊场景中被动接受无法关闭的表情回应，认为这是强加行为（原文强调「**every** group message」）。
2. **不满意点（#3347）**：Web UI 在聊天区文本量大时出现卡顿，影响桌面端与移动端浏览器体验，用户已自行修复并期待合并。

## 8. 待处理积压

以下条目存在明显滞留，建议维护者关注：

| 条目 | 状态 | 停留时长 | 风险提示 |
|---|---|---|---|
| PR #3347 `fix laggy interface` | OPEN，标记 `[stale]` | 创建于 2026-08-27，约 1 个月 | 有效体验修复被 stale 标记，存在被自动关闭而丢失的风险；建议复检并合并或给出反馈 |
| Issue #3395 OneBot 回应可配置 | OPEN，无评论 | 当日新增 | 尚属正常，但需确认是否纳入路线图 |
| PR #3310 `Feat/auto pr` | CLOSED | 创建于 2026-08-02，近 2 个月 | 描述为空（「picoclanker did this」），关闭原因不明，建议核实是否为自动化流程遗留 |

---

**健康度小结：** 今日项目无版本产出、无新合并的功能性 PR，社区讨论热度为零，活跃度处于低位。唯一新增需求（#3395）质量清晰、实现成本低，是潜在的快速改进点；主要风险在于 #3347 这一已验证的 UI 卡顿修复长期处于 stale 状态，若被自动清理将损害贡献者积极性与用户体验。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-27

## 1. 今日速览

项目今日处于**高活跃、中等健康度**状态：过去24小时 36 条 PR 更新（32 条待合并、仅 4 条合并/关闭），4 条 Issue 全部为新开或活跃、零关闭，无新版本发布。活跃度集中在维护者 glifocat 一人身上，其提交覆盖 setup、providers、channels、skills 多个领域，PR 队列深度（32 条待合并）显著高于消化速度。安全与升级路径问题成为今日主线：`channels` 分支持续固定存在消息伪造漏洞的 Baileys 预发布版本，且每次 `/update-nanoclaw` 都会重新固定，两条升级回归 Issue（#3943、#3942）均指向同一版本区间。整体判断：开发投入充沛，但审查带宽与发布节奏是当前瓶颈。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日仅有 4 条 PR 被合并/关闭，推进幅度有限，但方向明确：

- **#3501 [CLOSED]** docs: 在 README 与 changelog 中补充 Dial 渠道说明。此前 Dial 已存在于 setup 选择器并附带 `/add-dial`、`/add-dial-number`、`/add-dial-tool`，但文档缺失，此次补齐用户可见性。
  链接: https://github.com/nanocoai/nanoclaw/pull/3501
- **#3025 [CLOSED]** fix(container): 将 agent SDK 的 32000 输出 token 上限提高。属于能力上限类修复。
  链接: https://github.com/nanocoai/nanoclaw/pull/3025
- **#2949 [CLOSED]** feat(skill): `/add-litellm` — 最小模型路由器（本地服务器 + 可选远程）。作为 utility skill 落地，扩展了模型接入方式。
  链接: https://github.com/nanocoai/nanoclaw/pull/2949
- **#3895 [CLOSED]** fix(agent-runner): 使 `send_card` 的 url pattern 可被 llama.cpp 语法解析。修复了 `LINK_ACTION_SCHEMA.url.pattern` 中的 `\s`/`\S` 被 llama.cpp 的 JSON-schema-to-grammar 转换器拒绝、导致所有请求失败的问题。
  链接: https://github.com/nanocoai/nanoclaw/pull/3895

**净推进评估**：一个可用性修复（llama.cpp 兼容）、一个文档补齐、一个能力上限提升、一个新集成 skill。核心交付机制（delivery mode、tools-only 强制）仍停留在待合并队列中，尚未落地。

---

## 4. 社区热点

需特别说明：**今日所有 Issue/PR 的评论数与反应数均为极低或缺失**，评论数为 0 或 1，👍 均为 0。因此不存在真正意义上的"讨论热点"，以下按议题影响面而非互动量列出：

- **#2520 [OPEN]** `logs/nanoclaw.log` 记录含 `privKey`/`rootKey`/`chainKey` 缓冲区的 libsignal-node `SessionEntry` 转储（1 条评论，唯一有讨论的 Issue）。这是**密钥材料写入日志**的安全问题，且自 2026-05-17 创建、至 2026-09-26 仍在更新，已悬置超过四个月。
  链接: https://github.com/nanocoai/nanoclaw/issues/2520
- **#3941 [OPEN]** `channels` 分支固定 `@whiskeysockets/baileys@7.0.0-rc.9`，受 GHSA-qvv5-jq5g-4cgg（消息伪造）影响，且每次 `/update-nanoclaw` 都会重新固定。
  链接: https://github.com/nanocoai/nanoclaw/issues/3941
- **#3943 [OPEN]** update-nanoclaw 控制器引用 `setup/gateways/` 及 npm 依赖，但文档所述抽取流程并不提供这些内容，`prepare` 以 `MODULE_NOT_FOUND` 崩溃（#3750 后的回归）。
  链接: https://github.com/nanocoai/nanoclaw/issues/3943
- **#3942 [OPEN]** `/update-nanoclaw validate` 期间的 skill refresh 重写 `pnpm-lock.yaml`，丢弃 git 托管依赖的 `integrity` 哈希。
  链接: https://github.com/nanocoai/nanoclaw/issues/3942

**诉求分析**：三条同日提交的 Issue（#3941/#3942/#3943）来自同一用户 bmultini，全部指向 **v2.3.0 → v2.4.0 升级路径的可靠性**与**依赖固定策略**。这构成一个连贯的升级体验投诉簇，而非零散报告。同时 #2520 的日志密钥泄漏表明安全侧存在长期未清理项。

---

## 5. Bug 与稳定性

按严重程度排列：

**严重 — 安全**

- **#3941** `channels` 分支固定受 GHSA-qvv5-jq5g-4cgg（消息伪造）影响的 `baileys@7.0.0-rc.9`，且更新流程会反复重新固定，导致用户无法通过常规升级摆脱。**无 fix PR。**
  链接: https://github.com/nanocoai/nanoclaw/issues/3941
- **#2520** 日志文件累积 Signal Protocol 会话密钥材料（`privKey`/`rootKey`/`chainKey`），来源为传递依赖，在每次 WhatsApp 会话关闭时写入。**无 fix PR，已悬置 4 个月以上。**
  链接: https://github.com/nanocoai/nanoclaw/issues/2520

**高 — 升级回归 / 安装失败**

- **#3943** `prepare` 因 `MODULE_NOT_FOUND` 崩溃，阻断 v2.3.0 → v2.4.0 升级（main `c313d061`，在 `d4ff64f4` 仍复现）。**无 fix PR。**
  链接: https://github.com/nanocoai/nanoclaw/issues/3943
- **#3942** validate 阶段重写锁文件并丢失 git 托管依赖的 `integrity` 哈希，破坏依赖完整性校验。**无 fix PR。**
  链接: https://github.com/nanocoai/nanoclaw/issues/3942

**中 — 已有 fix PR 待合并（从 PR 队列中识别）**

- **#3823** fix(mattermost): 认证回调并隔离 action secret，防止外部按钮集成获取适配器共享密钥。https://github.com/nanocoai/nanoclaw/pull/3823
- **#3191** fix(whatsapp): 为 `setup()` 增加超时边界，避免登出会话挂起宿主启动（自 2026-08-05 起待合并）。https://github.com/nanocoai/nanoclaw/pull/3191
- **#3920** fix(setup): 限制安装期 failure-assist agent 权限，避免其修改或拖垮线上安装。https://github.com/nanocoai/nanoclaw/pull/3920
- **#3915** fix(iron-proxy): 遇到无效 `allowed-hosts.json` 条目时跳过而非中止 setup。https://github.com/nanocoai/nanoclaw/pull/3915
- **#3905** fix(setup): 明确提示 OpenCode 端点未经验证，并记录 ping 结果（此前误报 `auth → success`）。https://github.com/nanocoai/nanoclaw/pull/3905
- **#3803** fix(test): webhook 端口恢复测试改用 fixture 自有端口，避免随机端口被占用导致 `EADDRINUSE`/`ECONNREFUSED`。https://github.com/nanocoai/nanoclaw/pull/3803
- **#3841** fix(opencode): memory hook 改用 async spawn，避免 Bun 1.4.0 `spawnSync` 丢失子进程退出状态、100% CPU 空转六小时卡死 CI。https://github.com/nanocoai/nanoclaw/pull/3841

**安全侧观察**：今日 4 条 Issue 中有 2 条涉及密钥/凭证暴露（#2520 日志密钥、#3941 消息伪造），且均无对应 fix PR，建议优先处理。

---

## 6. 功能请求与路线图信号

今日 Issue 中无明确的新功能请求，全部为 bug/回归报告。路线图信号主要来自待合并 PR 队列：

- **交付模式可配置化** — **#3713** feat(config): 记录每个 agent group 的 delivery mode，使无法稳定产出 final-text envelope 的 provider 可配置为仅通过 outbound tools 投递。
  https://github.com/nanocoai/nanoclaw/pull/3713
- **tools-only 强制投递** — **#3781** feat(agent-runner): 让 tools-only 投递对无法稳定遵守 final-text 契约的 agent group 变得可靠。
  https://github.com/nanocoai/nanoclaw/pull/3781
- **Codex Responses 传输可配置** — **#3851** fix(codex): 使 Responses transport 可配置，解决代理后 Websockets 传输的可靠性问题（关联 issue #3338）。
  https://github.com/nanocoai/nanoclaw/pull/3851
- **TypeSafe 工具接入 OpenRouter** — **#3944** feat(skills): 允许 `/add-typesafe-tool` 通过 OpenRouter 调用 Jev（堆叠在 #3848 之上）。
  https://github.com/nanocoai/nanoclaw/pull/3944

**判断**：#3713 与 #3781 构成一组关联变更（配置层 + 执行层），是当前队列中最具路线图意义的功能，但两者均在 9 月初创建、已挂置三周以上。在审查资源有限的情况下，这组变更可能继续推迟至下一版本。

---

## 7. 用户反馈摘要

今日可提取的真实反馈集中于用户 **bmultini** 的升级体验（#3941/#3942/#3943）：

- **痛点一：升级会破坏既有安装。** 在 v2.3.x 安装上执行 v2.4.0 的更新流程时，`prepare` 阶段直接以 `MODULE_NOT_FOUND` 崩溃，用户无法完成升级。
- **痛点二：安全修复无法生效。** 用户清楚知晓 `baileys@7.0.0-rc.9` 存在已公告的消息伪造漏洞（GHSA-qvv5-jq5g-4cgg），但 `/update-nanoclaw` 每次都将其重新固定，形成"想修却被工具复原"的死循环。
- **痛点三：更新流程副作用不可控。** validate 阶段会重写 `pnpm-lock.yaml` 并丢失 git 托管依赖的 `integrity` 哈希，破坏锁文件的完整性保证。
- **使用场景**：Linux + Node v22.23.2 + pnpm 10.34.5，从 v2.3.0（`d96dde93` + 本地提交）升级，并包含 WhatsApp 渠道（`/add-whatsapp`）。

此外 **participo** 的 #2520 反映：WhatsApp 会话关闭时日志会持续写入 Signal 会话密钥材料，对于将 `logs/` 纳入备份或监控的用户构成实质暴露风险。

**满意度信号**：无正面反馈记录；今日反馈总体为负向，且集中在升级与安全维护流程。

---

## 8. 待处理积压

以下条目等待时间较长，建议维护者优先关注：

- **#2520**（创建 2026-05-17，已 **133 天**）日志泄漏 Signal 会话密钥材料，仅 1 条评论，无 fix PR。安全影响明确，沉默时间最长。
  https://github.com/nanocoai/nanoclaw/issues/2520
- **#3191**（创建 2026-08-05，已 **53 天**）WhatsApp `setup()` 无超时导致宿主启动挂起，fix PR 已存在但长期未合并。
  https://github.com/nanocoai/nanoclaw/pull/3191
- **#2949**（创建 2026-07-04）与 **#3025**（创建 2026-07-12）今日关闭，积压得到清理，但均耗时约两个半月，反映合并延迟是系统性问题。
- **#3713**（创建 2026-09-03）与 **#3781**（创建 2026-09-12）核心交付机制变更，分别挂置 24 天与 15 天，处于本轮 PR 队列的前列但无合并迹象。
  https://github.com/nanocoai/nanoclaw/pull/3713 · https://github.com/nanocoai/nanoclaw/pull/3781
- **PR 队列整体**：32 条待合并 vs 今日 4 条合并，若维持此速率，队列清空需约 8 天且不考虑新增，实际审查带宽可能已成为主要瓶颈。

---

*本报告仅基于所提供的 NanoClaw GitHub 数据生成，所有链接与状态均取自该数据快照。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-27

## 1. 今日速览

今日 NullClaw 处于**高吞吐清理状态**：24 小时内 18 条 Issue 更新中 16 条被关闭，9 条 PR 更新中 8 条已合并/关闭，无新版本发布。核心动作集中在两条线：一是围绕 `approval_request` 审批流的安全闭环（Issue #900 由 PR #1009、#969 双双落地），二是 A2A 鉴权越权问题（Issue #974）已由新提交的 PR #1012 接单，成为唯一待合并 PR。整体活跃度高，但关闭远大于新增，属于积压治理而非功能扩张期；社区提出的 Docker 官方镜像、WhatsApp Web、JIRA 工具等诉求均已在今日被关闭，需留意其中部分是否为"已实现"还是"未采纳"。

## 2. 版本发布

无新版本发布。今日 0 个 Release，所有变更仍以 PR 合并形式积累在主分支，未进入版本标签。

## 3. 项目进展

今日合并/关闭的重要 PR 推进了三条主线：

**安全审批闭环（两条 PR 接力）**
- PR #969 — `feat(agent): structured approval_request / approval_response flow`：实现了 shell 工具（及任何返回 `error.ApprovalRequired` 的工具）的两轮工具审批流，工具抛出 `ApprovalRequired` 后 agent 捕获、存储 `PendingApproval` 并发出 `---approval-...` 信号。链接：nullclaw/nullclaw PR #969
- PR #1009 — `fix(exec): pause for /approve on medium/high-risk commands instead of failing`，直接关闭 Issue #900：修复了监督模式下中高风险命令本应暂停等待 `/approve` 却总是直接失败的问题。链接：nullclaw/nullclaw PR #1009

这两条 PR 合并后，`webchannel_v1` 规范中定义但从未发出的 `approval_request` 正式落地，SecurityPolicy 的设计意图与运行时行为对齐。

**通道能力增强（email / Matrix / Teams）**
- PR #667 — `feat(email): full bidirectional IMAP polling with IDLE and network resilience`：将 email 通道从"仅发送"改造为完整双向轮询，支持 IMAP IDLE 持久连接、推送通知，并具备自动回退到 curl 的网络韧性。链接：nullclaw/nullclaw PR #667
- PR #968 — `fix(matrix): persist next_batch across restart + test env isolation`：修复 Matrix 通道 `/sync` 游标仅存内存导致每次重启触发初始同步的问题。链接：nullclaw/nullclaw PR #968
- PR #958 — `fix(teams): accept lowercase serviceurl JWT claim and raise JWKS fetch cap`：修复 MS Teams 入站消息因 JWT claim 大小写与 JWKS 拉取上限导致 403 的问题。链接：nullclaw/nullclaw PR #958

**Provider 扩展**
- PR #990 — `feat(providers): add Eden AI as an OpenAI-compatible gateway`：以 OpenAI 兼容网关形式接入 Eden AI，沿用 #922（NEAR AI Cloud、Atlas Cloud）的既有形态，无新增 provider 实现。链接：nullclaw/nullclaw PR #990

**基础设施**
- PR #956 — dependabot 将 docker-images 组的 alpine 由 3.23 升至 3.24。链接：nullclaw/nullclaw PR #956

此外，PR #527（自适应智能流水线 + email/WhatsApp Web 通道）作为 3 月开启的大型复合 PR，也在今日被关闭。链接：nullclaw/nullclaw PR #527

## 4. 社区热点

按评论数与反应数排序：

- **Issue #183 [CLOSED] WhatsApp Web support via Baileys (QR Code)** — 5 条评论、2 👍，为今日讨论最活跃条目。诉求是摆脱 Meta Business Cloud API 的账号/Token/号码 ID/Webhook 门槛，改用扫码即用的 Baileys 路径；今日关闭且 PR #527 同时关闭，两者关联值得关注。链接：nullclaw/nullclaw Issue #183
- **Issue #764 [OPEN] Add NullClaw logo to official Agent Skills client list** — 4 条评论，昨日新起今日仍是仅有的两条开放 Issue 之一。起因是 agentskills.io 上线 clients 页面，社区希望 NullClaw 被收录，属于生态曝光类诉求。链接：nullclaw/nullclaw Issue #764
- **Issue #613 [CLOSED] Improve the description of each config.json configuration option** — 4 👍，为今日反应数最高条目，反映 onboard 生成的配置文件中大量选项"看不出实际用途"。链接：nullclaw/nullclaw Issue #613
- **Issue #974 [OPEN] [BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse** — 虽仅 1 条评论，但为今日安全权重最高的话题，直接催生了 PR #1012，是当前唯一待合并 PR 的来源。链接：nullclaw/nullclaw Issue #974

## 5. Bug 与稳定性

按严重程度排列：

**高 — 安全越权**
- Issue #974 [OPEN] A2A 共享 bearer 导致跨调用方任务与上下文复用：`/a2a` 虽校验 bearer，但后续任务与会话权限仅凭裸 task id 和调用方自填的 `contextId` 选择，Bob 与 Alice 共享同一有效 bearer 时，Bob 可读取并列举 Alice 的任务历史。**已有 fix PR：#1012，今日新开、待合并。** 链接：nullclaw/nullclaw Issue #974

**中 — 功能性失效**
- Issue #900 [CLOSED] `approval_request` 在规范中定义但从未发出，导致监督模式对高风险命令直接失败而非提示。**已有 fix PR：#1009（已合并）与 #969（已合并）。** 链接：nullclaw/nullclaw Issue #900
- Issue #477 [CLOSED] 飞书 WS 断开 — 用户贴出 gateway 启动日志与运行环境（gpt-5.2 / openai provider），属通道连接稳定性问题。链接：nullclaw/nullclaw Issue #477
- Issue #408 [CLOSED] 工具调用解析破坏合法 JSON：LLM 生成 `{"name": "memory_recall", ...}` 时，nullclaw 将工具名错误解析为 `":"`（冒号）而非 `memory_recall`。链接：nullclaw/nullclaw Issue #408
- Issue #665 [CLOSED] `error.NoResponseContent` — 用户在 Windows x86_64 版本上触发，日志显示 memory plan 解析为 backend=hybrid、retrieval=keyword、vector=none 等参数。链接：nullclaw/nullclaw Issue #665
- Issue #354 [CLOSED] Homebrew 升级后服务静默停止：根因是 `nullclaw service install` 写入 LaunchAgent plist 时硬编码了带版本号的 Cellar 路径。链接：nullclaw/nullclaw Issue #354
- Issue #427 [CLOSED] 自定义 skill 无法使用：`skills list` / `skills info` 均能识别，但 agent 实际调用时技能不可用。链接：nullclaw/nullclaw Issue #427

**低 — 体验与文档**
- Issue #619 [CLOSED] 错误信息 `error(channel_loop): Agent error: error.ApiError` 过于笼统，缺乏可诊断细节。链接：nullclaw/nullclaw Issue #619
- Issue #861 [CLOSED] headless VPS 上启用 Web UI 的文档晦涩，用户自述"70% 看不懂"。链接：nullclaw/nullclaw Issue #861
- Issue #957 [CLOSED] 纯 runtime 无 memory、输出设為 json 时持续出现"The config reader hit a rate limit."，用户不解 rate limit 配置含义与阈值调整方式。链接：nullclaw/nullclaw Issue #957

## 6. 功能请求与路线图信号

| 请求 | 状态 | 关联 PR | 纳入判断 |
|---|---|---|---|
| WhatsApp Web（Baileys/QR） | #183 已关闭 | #527 今日同关闭 | 需确认是已实现还是未采纳；#527 摘要明确含"WhatsApp Web channels"，倾向已落地 |
| 官方 Docker Hub 镜像 | #449 已关闭 | — | 摘要描述为"register such image"，关闭可能意味着已注册 |
| ddgs 元搜索接入 web_search | #623 已关闭 | — | 无对应 PR，可能未采纳 |
| JIRA 访问工具 | #914 已关闭 | — | 无对应 PR，可能未采纳 |
| 结构化审批流 | #900 已关闭 | #969、#1009 已合并 | **已纳入并实现** |
| Eden AI provider | — | #990 已合并 | **已纳入** |
| config.json 选项说明完善 | #613 已关闭（4👍） | — | 高赞但无 PR，建议跟进 |
| Docker 依赖升级 alpine 3.24 | — | #956 已合并 | **已纳入** |

明确可进入下一版本的信号：审批流（#969/#1009）、Eden AI（#990）、email 双向（#667）、Matrix/Teams 修复（#968/#958）。A2A 鉴权修复（#1012）若今日合并，也将进入同一批次。

## 7. 用户反馈摘要

**痛点集中在"配置与文档的可理解性"**
- 配置困惑：Issue #613（4 👍）与 #957 共同指向 config.json 选项缺乏实用说明，用户无法理解各子项的作用、可选值与默认值，甚至出现"看不出实际用途"的评价。
- 文档门槛：Issue #861 用户直言 Web UI 文档"70% 看不懂"，希望获得非术语化的人话说明；Issue #473 指出 README 的 benchmark 快照表格已过时（二进制体积不再 1MB、内存超过 1MB），担心"将来引发争议"。
- 诊断困难：Issue #619 反映 `error.ApiError` 这类日志无法定位问题根因，用户要求更详细的反馈。

**通道接入是主要使用场景**
用户实际落地场景覆盖 WhatsApp、飞书（WS）、钉钉、MS Teams、Matrix、email 六大通道，其中飞书 #477、钉钉 #376、email #667、Matrix #968、Teams #958 均出现连接/收发问题，说明多通道是最活跃也最脆弱的使用面。

**集成呼声**
JIRA（#914）、Agent Skills 生态收录（#764）、ddgs 搜索（#623）显示用户希望 NullClaw 融入既有企业工具链与生态目录。

**满意点**
Issue #183、#674 等条目获得 👍，Issue #613 获 4 👍 说明社区愿意以建设性方式推动体验改进，而非单纯抱怨。

## 8. 待处理积压

- **Issue #974（2026-07-10 创建，今日更新）**— **OPEN**，A2A 跨调用方任务/上下文复用安全漏洞。已积压约 2.5 个月，今日终获 PR #1012 响应，建议优先评审合入。链接：nullclaw/nullclaw Issue #974
- **PR #1012（2026-09-27 创建）**— **OPEN**，唯一待合并 PR，`fix(a2a): scope tasks and context sessions by bearer principal`，直接关闭 #974。链接：nullclaw/nullclaw PR #1012
- **Issue #764（2026-04-03 创建，今日更新）**— **OPEN**，Agent Skills 官方客户端列表收录请求，已挂起近 6 个月，仅需提交 logo 与信息，投入产出比高。链接：nullclaw/nullclaw Issue #764
- **Issue #613（4 👍，今日关闭但无对应 PR）**— 高共识的配置文档改进请求，若未实际交付建议重新开单跟踪。链接：nullclaw/nullclaw Issue #613
- **Issue #473**— README benchmark 表格过时，社区主动提醒"避免未来争议"，今日关闭但无可见文档 PR。链接：nullclaw/nullclaw Issue #473
- **PR #527**— 3 月 14 日创建的大型复合 PR（自适应智能流水线 + email/WhatsApp Web），历时逾 6 个月于今日关闭，建议在日报后续确认其拆分落地情况。链接：nullclaw/nullclaw PR #527

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报（2026-09-27）

## 1. 今日速览
今日 IronClaw 活跃度处于**低位平稳**状态：过去 24 小时仅有 1 条 Issue 更新（新开，无关闭）和 1 条 PR 更新（待合并，无合并/关闭），无新版本发布。唯一新开 Issue #8113 是一份关于 turn-0 工具选择（BM25F + embeddings 混合检索）的架构提案，属于设计层面的讨论起点，尚未产生评论互动。唯一更新的 PR #7988 是 CI 机器人自动生成的代码库知识图谱快照刷新，属于例行维护而非功能性推进。整体来看，项目今日没有代码合入主分支，处于「提案酝酿 + 基础设施维护」阶段，**无稳定性风险信号，但向前推进量接近于零**。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
- **今日无已合并/关闭的 PR**，主分支无功能性代码推进。
- 唯一有更新的 PR 为待合并状态：
  - [#7988](https://github.com/nearai/ironclaw/pull/7988) `chore(agents): refresh codebase knowledge graph`（作者 ironclaw-ci[bot]，创建于 2026-08-29，更新于 2026-09-27，标签：size: XS / risk: low / contributor: core）。内容为从当前默认分支刷新已提交的 codebase-memory bootstrap 快照，由夜间 `Codebase Graph Refresh` 工作流自动生成，等待人工 review 后正常合并。
  - 说明：该 PR 为 CI/基础设施类例行更新，不涉及用户可见功能或行为变化，但**已开放约一个月仍未合并**，知识图谱快照可能持续滞后于默认分支。

## 4. 社区热点
今日整体讨论冷清，无高评论或高反应条目：

| 条目 | 类型 | 评论 | 👍 | 状态 |
|---|---|---|---|---|
| [#8113](https://github.com/nearai/ironclaw/issues/8113) Proposal: opt-in turn-0 tool selection (BM25F + embeddings) | Issue | 0 | 0 | OPEN |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) chore(agents): refresh codebase knowledge graph | PR | 数据未提供 | 0 | OPEN |

- [#8113](https://github.com/nearai/ironclaw/issues/8113) 是目前唯一具备技术讨论价值的条目：提案在对话开始时用首条用户消息预测所需工具，采用 BM25F + embedding 的混合打分对候选工具排序，并且只向模型暴露预测出的工具，外加四个 discovery bridges。其诉求指向 **工具规模膨胀下的上下文/选择效率问题**——即通过 opt-in 的按需工具暴露，降低无关工具带来的开销。该 Issue 尚无评论，仍处于等待维护者与社区回应的阶段。

## 5. Bug 与稳定性
今日未报告任何 Bug、崩溃或回归问题。唯一 Issue 为功能提案，唯一 PR 为低风险基础设施更新，**无稳定性事件**。

## 6. 功能请求与路线图信号
- **候选功能：[#8113](https://github.com/nearai/ironclaw/issues/8113) opt-in turn-0 工具选择（BM25F + embeddings）**
  - 需求内容：基于首条用户消息预测所需工具集，混合 BM25F 与 embedding 打分排序，仅暴露预测工具 + 四个 discovery bridges。
  - 纳入下一版本的可能性：**暂无法从现有数据判断**。该提案今日刚创建、零评论，且今日无相关实现 PR 或维护者回应，缺乏被纳入下一版本的直接信号；其性质更接近设计讨论（Proposal），需先经过社区/维护者评审。
- 结合现有 PR 判断：#7988 为知识图谱快照刷新，与 #8113 的工具选择提案**无直接关联**，无法据此推断路线图进展。

## 7. 用户反馈摘要
今日 Issue 评论数据未提供（#8113 评论数为 0，无评论内容可提炼）。因此**无真实用户痛点、使用场景或满意度反馈可供汇总**。唯一可观察到的信号来自 #8113 提案本身，其隐含关注点为：对话初期工具选择与暴露范围影响效率，作者倾向于以「opt-in + 预测」方式替代全量暴露。

## 8. 待处理积压
- [#7988](https://github.com/nearai/ironclaw/pull/7988) `chore(agents): refresh codebase knowledge graph`
  - 状态：OPEN，创建于 2026-08-29，最近更新 2026-09-27，已开放约 29 天未合并。
  - 风险等级标注为 low、size: XS，属机械性产物，长时间挂起可能意味着 review 流程存在延迟；建议维护者尽快确认合并或说明阻塞原因。
- [#8113](https://github.com/nearai/ironclaw/issues/8113) Proposal: opt-in turn-0 tool selection (BM25F + embeddings)
  - 状态：OPEN，创建于 2026-09-27，评论 0、👍 0。
  - 目前仅为「当日新开」而非长期积压，但作为架构级提案，若长期无维护者回应，容易沉淀为未决设计债，建议尽早标记 triage 归属或给出方向性反馈。

---
*说明：本日报严格基于所提供数据生成；评论内容、合并详情、迁移注意事项等在原始数据中未提供，故未作推断或补充。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-27）

## 1. 今日速览
今日项目无新版本发布，但 PR 侧活跃度较高：过去 24 小时共 10 条 PR 更新，其中 9 条已合并/关闭、1 条待合并。Issues 侧共 5 条更新，其中 3 条已关闭、2 条仍处于 OPEN 状态。值得注意的是，今日所有更新的 Issues 和多数 PR 均带有 `[stale]` 标记，且创建时间集中在 2026-03-27 至 2026-03-30，说明本日主要活动是**对积压旧事项的集中清理与收尾**，而非新增开发。整体健康度评价：积压清理推进明显，但新开活跃议题偏少，社区新增讨论动力有限。

## 2. 版本发布
今日无新版本发布，亦无 Release 记录，故不展开。

## 3. 项目进展
今日合并/关闭的重要 PR 覆盖安全、稳定性、渲染器开发体验与架构重构多个方向：

- **安全加固（P0）**：PR #1042（`fix(security)`）关闭，修复 `api:fetch`/`api:stream` IPC 的 SSRF 漏洞及 `readFileAsDataUrl` 任意文件读取问题，关联 Issue #1041。
  链接: netease-youdao/LobsterAI PR #1042
- **流式响应资源泄漏修复**：PR #1038 关闭，修复 `handleResponsesStreamResponse` / `handleChatCompletionsStreamResponse` 中 `reader.cancel()` 仅在收到 `[DONE]` 才执行导致的 reader 永久泄漏问题。
  链接: netease-youdao/LobsterAI PR #1038
- **渲染器热重载修复**：PR #2769 关闭，修正 `**/artifacts/**` 排除规则误伤 `src/renderer/components/artifacts/` 导致 electron:dev 无法热重载的问题。
  链接: netease-youdao/LobsterAI PR #2769
- **架构重构**：PR #2767 关闭，将单体 `markdownLivePreview` 拆分为 `markdownLiveStructure` / `markdownEditorCommands` / `markdownLiveWidgets` 三个模块。
  链接: netease-youdao/LobsterAI PR #2767
- **新功能提交**：PR #2770（`Feat: word document editing`）今日创建并关闭，涉及 renderer/build/docs/main/openclaw/skills/artifacts 多个领域，但摘要为空，细节无法从现有数据确认。
  链接: netease-youdao/LobsterAI PR #2770
- **其他**：PR #2768（openclaw gateway 启动超时延长）、PR #1044（Windows 根盘安装路径规范化）、PR #1045（Agent 设置面板未保存更改提示）、PR #979（Skills 选项列表间距修复）均被关闭。
  链接: netease-youdao/LobsterAI PR #2768 / PR #1044 / PR #1045 / PR #979

整体来看，项目在**安全与稳定性**方面有实质推进（SSRF 与流式泄漏两项修复），开发体验与代码结构亦有改善。

## 4. 社区热点
今日评论数最多的条目均为 2 条评论，热度整体偏低，且全部为 stale 议题：

- Issue #1041（安全漏洞，CLOSED）：`api:fetch`/`api:stream` SSRF + 任意文件读取，已有对应修复 PR #1042，讨论集中在漏洞细节描述。
  链接: netease-youdao/LobsterAI Issue #1041
- Issue #1046（模型配置，CLOSED）：质疑上下文窗口被限制为 200K 而非 Qwen3.5-Plus 官方 1M，并询问是否可自定义。
  链接: netease-youdao/LobsterAI Issue #1046
- Issue #1047（技能状态同步，CLOSED）：清除技能后切换 Agent 再切回，技能仍然存在。
  链接: netease-youdao/LobsterAI Issue #1047
- Issue #976（断网提示，OPEN，2 评论）：断网情况下问答出现两个 timeout 提示，交互不规范。
  链接: netease-youdao/LobsterAI Issue #976

背后诉求：安全审计类问题受到重视并被快速修复；用户对**模型能力参数透明度和可配置性**有明确期待；状态一致性（技能、Agent 切换）类交互问题被反复触及。

## 5. Bug 与稳定性
按严重程度排列：

- **高（安全）**：Issue #1041 — SSRF + 任意文件读取，已有 fix PR #1042 并已关闭。
  链接: netease-youdao/LobsterAI Issue #1041
- **高（安全）**：Issue #977 — `handleDeepLink` 未充分校验 deep link URL，存在恶意 `lobsterai://auth/callback` 诱导风险，**当前仍为 OPEN，未在今日 PR 列表中见到对应 fix**。
  链接: netease-youdao/LobsterAI Issue #977
- **中（内存/资源）**：PR #1038 报告的流式 reader 泄漏，已在异常路径修复。
  链接: netease-youdao/LobsterAI PR #1038
- **中（交互缺陷）**：Issue #1047 — 已清除技能在 Agent 切换后仍存在，已关闭。
  链接: netease-youdao/LobsterAI Issue #1047
- **低（体验）**：Issue #976 — 断网下出现两个 timeout 提示，**仍为 OPEN**。
  链接: netease-youdao/LobsterAI Issue #976

## 6. 功能请求与路线图信号
- **任务/会话文件夹分类**：PR #978（OPEN，新增 SQLite 持久化的会话分组功能，涉及 12 个文件）是今日唯一仍待合并的功能性 PR，若通过审核则很可能进入下一版本。
  链接: netease-youdao/LobsterAI PR #978
- **Word 文档编辑**：PR #2770 已提交并关闭，若为功能主线，后续可能需要更完整的跟踪。
  链接: netease-youdao/LobsterAI PR #2770
- **上下文窗口可配置化**：Issue #1046 提出希望将上下文窗口从 200K 提升至模型原生支持的 1M，并询问平台侧配置选项。当前无对应 PR，属尚未落地的高价值诉求。
  链接: netease-youdao/LobsterAI Issue #1046

## 7. 用户反馈摘要
- **安全透明度**：用户（MaoQianTu）以准专业漏洞报告方式提交 SSRF 与任意文件读取问题，期望被严肃对待——实际已获 fix PR 响应，响应路径通畅。
- **参数不透明痛点**：用户（jiahuikong4-png）指出官方文档未说明上下文窗口为何限制为 200K，也难以自定义，反映文档缺口与配置灵活性不足。
- **状态一致性问题**：用户（tzhouzhou）反馈预设与自定义 Agent 的技能清除不彻底，切换后残留，属典型状态管理体验问题。
- **异常交互体验**：用户（gongfen0121）反馈断网时出现重复 timeout 提示，不符合异常场景交互规范。
- **待办与分类需求**：用户（Yang1k）通过 PR 提出会话文件夹分类，反映出任务数量增长后的组织管理诉求。

## 8. 待处理积压
以下重要事项仍需维护者关注：

- **Issue #977（OPEN，stale）**：deep link URL 安全检查缺失，属安全类问题，创建于 2026-03-27，至今未关闭且未在今日 PR 中见到修复。
  链接: netease-youdao/LobsterAI Issue #977
- **Issue #976（OPEN，stale）**：断网双 timeout 提示，创建于 2026-03-27，已积压约半年。
  链接: netease-youdao/LobsterAI Issue #976
- **PR #978（OPEN，stale）**：会话文件夹功能，创建于 2026-03-27，长期待合并，今日为唯一未关闭 PR。
  链接: netease-youdao/LobsterAI PR #978

> 说明：以上内容均基于所提供的 LobsterAI GitHub 数据整理，部分条目（如 PR #2770、#2768 摘要为空）细节无法进一步确认。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-27

## 1. 今日速览

今日项目活跃度**偏低但聚焦**：过去24小时仅 1 条 Issue 与 2 条 PR 更新，无新版本发布，无合并或关闭动作。全部活动集中在同一主题——DeepSeek 模型能力识别问题，由用户 gyje 同时提交 Issue #1286 与修复 PR #1287，形成"报告—修复"闭环。另有 PR #1280 处于长期待合并状态，已开放 6 天。整体健康度稳定，但因今日零合并，代码库未取得实质推进。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

**今日无合并或关闭的 PR，项目代码库无实质向前推进。**

待观察项：
- [PR #1287](https://github.com/moltis-org/moltis/pull/1287)（fix(providers): recognise deepseek-flash as a DeepSeek thinking model）— 当日创建、当日更新，处于待合并状态，尚未获得评审或评论。

## 4. 社区热点

今日讨论热度整体平淡，所有条目评论数与 👍 均为 0，无明确"热点"。

相对最受关注的是同一问题的一对提交：

- [Issue #1286](https://github.com/moltis-org/moltis/issues/1286)：DeepSeek-V4.1-Flash 未被识别为推理模型，Web UI 缺失 Reasoning Effort 开关。作者 gyje。
- [PR #1287](https://github.com/moltis-org/moltis/pull/1287)：同一作者提交的对应修复。

**诉求分析**：核心痛点在于 Moltis 使用**硬编码的模型 ID 启发式判断**（位于 `crates/providers/src/model_capabilities.rs`），当模型厂商更新命名（如从 `deepseek-v4*` 变为 `deepseek-flash`）时，能力识别立即失效，用户界面功能随之缺失。这反映出模型能力探测机制缺乏对新模型 ID 的适应性，是需要系统性关注的可扩展性问题。

## 5. Bug 与稳定性

按严重程度排列：

**中高 — 功能缺失型回归（已有 fix PR）**
- [Issue #1286](https://github.com/moltis-org/moltis/issues/1286)：DeepSeek-V4.1-Flash（`deepseek-flash`）被错误判定为非推理模型，导致 Web UI 的 Reasoning Effort 开关缺失。
  - 根因：`model_capabilities.rs` 中两处硬编码 DeepSeek 启发式规则仅识别旧版 `deepseek-v4*` 命名。
  - 影响：用户无法对当前 DeepSeek 旗舰模型调节推理强度。
  - 修复状态：**[PR #1287](https://github.com/moltis-org/moltis/pull/1287) 已提交，待合并**。

今日无崩溃或数据丢失类问题报告。

## 6. 功能请求与路线图信号

今日无独立的功能请求 Issue。但基于现有 PR 可判断以下改动可能纳入下一版本：

- **DeepSeek 新模型 ID 适配**：[PR #1287](https://github.com/moltis-org/moltis/pull/1287) 修正 `supports_reasoning` 等判断，使其识别 `deepseek-flash`。若合并，将恢复该模型在 UI 中的推理能力开关。
- **预设工具保留逻辑**：[PR #1280](https://github.com/moltis-org/moltis/pull/1280) 将显式空的 `active_tools` 数组视为无逐回合覆盖，保留预设的工具控制；非空列表仍保持逐回合作用域。修复 Issue #1277。

两条 PR 均为小范围修复性质，未见新功能路线图信号。

## 7. 用户反馈摘要

今日 1 条 Issue 无评论，PR 评论数未知/空。从 Issue 正文可提炼的真实用户场景：

- **使用场景**：用户在 Moltis Web UI 中使用 DeepSeek 当前旗舰模型进行推理密集型任务，期望调节 Reasoning Effort。
- **不满意之处**：模型能力识别依赖硬编码 ID 列表，厂商更新命名后功能"静默失效"，用户需自行定位源码文件并报告。
- **行为模式**：报告者 gyje 不仅提交 Issue，还自行提交修复 PR，显示其具备源码级排查能力，属于高投入型贡献者，对项目有正向价值。

## 8. 待处理积压

需提醒维护者关注：

- [PR #1280](https://github.com/moltis-org/moltis/pull/1280)：fix(tools): preserve preset tools for empty active_tools — 由 mikemikimike 于 **2026-09-21** 创建，已开放 **6 天**，今日仅有一次更新，仍处于 OPEN，无合并迹象。该 PR 修复 #1277，长期悬置可能阻塞相关工具行为问题的闭环。
- [PR #1287](https://github.com/moltis-org/moltis/pull/1287)：当日新建，尚属正常周期，但考虑到 Issue #1286 与 PR 同日提交且为唯一当日活动，建议维护者优先响应以维持贡献者积极性。

---

**健康度小结**：今日数据面单薄（Issues 1 / PRs 2 / 合并 0），但呈现出健康的"用户即修复者"模式；主要风险为 PR 合并节奏偏慢（#1280 积压 6 天）以及模型能力探测机制对 ID 变更的脆弱性。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-27

## 1. 今日速览

今日 CoPaw 项目维持中等活跃度：过去 24 小时共 5 条 Issue 更新（3 条新开/活跃、2 条关闭）、4 条 PR 更新（全部处于待合并状态，无合并/关闭）、无新版本发布。讨论焦点集中在**上下文压缩机制**与**WebUI 交互体验**两处，用户 xiaohushi512 单日提交两条相关 Issue（#7998、#7994），并均已以 `Close-and-review-later` 关闭。代码侧今日有一条针对 Files 面板刷新 Bug 的修复 PR #7996，直接响应当日报告的 Issue #7995，响应链条完整。整体看，项目健康度良好，缺陷闭环速度较快，但**积压 PR 缺乏合并动作**（今日 0 合并）值得关注。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目代码主线无实质性推进。当前 4 条 PR 全部处于 Open 状态，其中：

- **[PR #7996](https://github.com/agentscope-ai/CoPaw/pull/7996)** `fix(console): refresh expanded folders in Files panel`（作者 iluv7，2026-09-27 创建/更新）— 直接修复当日 Issue #7995，使其在刷新时重新加载每个已展开的工作区目录（含嵌套目录）并保留展开状态；折叠目录在刷新时丢弃缓存子项。该 PR 创建当日即提交，反馈-修复链路紧密。
- **[PR #7993](https://github.com/agentscope-ai/CoPaw/pull/7993)** `fix(i18n): add two missing error strings used by unguarded call sites`（作者 Bruce-Yii）— 补齐在两个 locale 文件中均不存在的翻译键 `common.operationFailed`（6 处调用）等，此前 i18next 会直接渲染键名而非提示文案。
- **[PR #7956](https://github.com/agentscope-ai/CoPaw/pull/7956)** `feat(console): unify settings UX and smooth conversation transitions`（作者 rayrayraykk，2026-09-23 创建，已跨 4 天未合并）— 统一 Console 设置体验，修复工作区选择器溢出与欢迎页问题。
- **[PR #6874](https://github.com/agentscope-ai/CoPaw/pull/6874)** `feat(mcp): add configurable tool call timeout`（作者 AaronZ345，2026-08-10 创建，标注 `Under Review`）— 新增按客户端配置的 MCP 工具调用超时 `tool_call_timeout`，默认 300 秒，并将 HTTP/SSE 读取预算提升至不低于该配置值。

**推进度评估**：今日功能侧进展为 0，稳定性侧处于"待合并待验证"阶段，实际修复尚未落地。

---

## 4. 社区热点

今日评论互动最集中的条目为：

1. **[Issue #7957](https://github.com/agentscope-ai/CoPaw/issues/7957)** `[enhancement] Feature: Recommendation: It is possible to manually deactivate/disable the existence of pre-made models and channels`（作者 dylanleesky，创建 2026-09-23，更新 2026-09-27，**3 条评论**，今日评论数最高）— 诉求是允许用户手动停用/禁用预置模型与渠道，理由包括"希望界面只保留正在使用的内容"（作者提及强迫症式体验诉求）。**背后信号**：当前预置资源强制展示，缺乏个性化精简能力，属于界面可控性需求。
2. **[Issue #7998](https://github.com/agentscope-ai/CoPaw/issues/7998)** `[question] 上下文什么时候触发压缩？`（作者 xiaohushi512，1 条评论，已关闭）— 询问上下文压缩触发时机。
3. **[Issue #7997](https://github.com/agentscope-ai/CoPaw/issues/7997)** `[enhancement] Support message retraction/editing and workspace rollback in WebUI`（作者 ysf7762-dev，1 条评论）— 请求 WebUI 支持消息撤回/编辑并联动截断后续对话历史、可选回滚文件快照。

---

## 5. Bug 与稳定性

按严重程度排列（今日报告）：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 中 | **[#7994](https://github.com/agentscope-ai/CoPaw/issues/7994)** `[bug, Close-and-review-later] 上下文显示状态信息不及时更新和不压缩`（作者 xiaohushi512，已关闭） | bug1：上下文显示圆环不随对话切换更新，新建对话仍显示旧数据，需重启程序才更新；bug2：显示「91.7K / 131.1K」已超过设定阈值比例 0.5，但点击压缩提示"少于 3 个对话"而不执行压缩。版本：win10 desktop 2.2.3b | 无 |
| 中 | **[#7995](https://github.com/agentscope-ai/CoPaw/issues/7995)** `[bug] Files panel refresh leaves expanded folders stale`（作者 iluv7，OPEN） | Files 面板刷新按钮不更新已展开的文件夹，磁盘（如 agent）新增文件需手动操作后才出现。版本：2.2.2b4（source commit 3822ec71） | 是，[PR #7996](https://github.com/agentscope-ai/CoPaw/pull/7996)（当日提交） |

**稳定性小结**：两条 Bug 均与**状态刷新/同步**相关（上下文状态显示、文件面板缓存），指向前端状态管理在"外部变更后未失效重载"的共性问题；#7995 已具备当日修复，闭环良好；#7994 反映的压缩阈值失效问题被标记 `Close-and-review-later`，实际根因是否解决需维护者后续跟进。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 可能的落地判断 |
|---|---|---|
| 手动停用预置模型与渠道 | [#7957](https://github.com/agentscope-ai/CoPaw/issues/7957)（enhancement，3 条评论） | 今日无对应 PR，属新增配置能力，短期内纳入的可能性取决于维护者对配置化范围的取舍 |
| WebUI 消息撤回/编辑 + 工作区回滚 | [#7997](https://github.com/agentscope-ai/CoPaw/issues/7997)（enhancement） | 与 #7997 相关的"对话历史截断 + 文件快照回滚"涉及状态与快照机制，工程量较大，暂无 PR |
| MCP 工具调用超时可配置 | [PR #6874](https://github.com/agentscope-ai/CoPaw/pull/6874)（`Under Review`，创建已逾 1 个月） | 已具备完整 PR，若通过评审可能进入下一版本 |
| Console 设置体验统一 | [PR #7956](https://github.com/agentscope-ai/CoPaw/pull/7956)（创建 4 天） | 与 design.md 设计语言对齐，属体验类改动，具备近期合并条件 |

**信号判断**：今日新增的两条 enhancement（#7957、#7997）均聚焦于**用户对交互结果的可控性**（可停用、可撤回、可回滚），与已有 PR #6874（可配置超时）方向一致，显示路线图正在向"细粒度控制"倾斜。

---

## 7. 用户反馈摘要

- **上下文压缩行为不透明（#7998、#7994，同作者 xiaohushi512）**：用户设置为 131k 上下文、压缩阈值比例 0.5，但单轮会话常达 100–300 次提交/步骤，仅前约 10 次请求上下文较小，之后长期以满载 131k 提交。用户疑问：是否只有人工提交才会触发压缩，能否改为 Agent 自行提交时超过阈值即触发、并在下次提交前完成压缩。
- **状态显示不可信（#7994）**：上下文圆环不随对话切换更新，必须重启程序；已超阈值点击压缩仍被"少于 3 个对话"拦截而拒绝执行。用户对"显示与实际不符"表达明显不满。
- **文件面板数据陈旧（#7995，作者 iluv7）**：点击刷新后已展开目录不更新，新文件（如 agent 写入的）需其他操作后才出现，影响对工作区真实状态的判断。
- **界面冗余感（#7957，作者 dylanleesky）**：预置模型和渠道无法隐藏，用户希望对未使用项进行停用/隐藏。

**共性痛点**：用户核心不满集中在"**状态不同步 / 行为不按配置生效**"，属于可信度类问题，而非功能缺失。

---

## 8. 待处理积压

- **[PR #6874](https://github.com/agentscope-ai/CoPaw/pull/6874)** `feat(mcp): add configurable tool call timeout` — 创建于 **2026-08-10**，已积压约 **48 天**，标注 `Under Review` 但今日仍为 Open。该 PR 引入 `tool_call_timeout` 配置与 HTTP/SSE 读取预算调整，属功能性改进，长期停留评审态值得维护者优先处理。
- **[PR #7956](https://github.com/agentscope-ai/CoPaw/pull/7956)** `feat(console): unify settings UX` — 创建于 2026-09-23，已跨 4 天无合并动作，涉及设置体验统一，若无阻塞建议推进。
- **[Issue #7957](https://github.com/agentscope-ai/CoPaw/issues/7957)** — 创建 2026-09-23，更新至 2026-09-27 累计 3 条评论，是今日讨论最活跃的 enhancement，但尚无维护者结论或关联 PR，建议明确是否纳入规划。
- **[Issue #7994](https://github.com/agentscope-ai/CoPaw/issues/7994)** — 虽以 `Close-and-review-later` 关闭，但其中"压缩阈值不生效"属功能性缺陷，建议确认根因是否已在后续版本修复，避免关闭即遗忘。

---

*数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 公开动态，统计窗口 2026-09-27 前 24 小时。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-27

## 1. 今日速览

ZeroClaw 今日保持高活跃度：过去 24 小时共 29 条 Issue 更新（22 条新开/活跃、7 条关闭）与 50 条 PR 更新（37 条待合并、13 条已合并/关闭），无新版本发布。讨论重心集中在 v0.9.0 gateway 拆分相关的 RPC 平价系列 PR（P5/P6、turn 与 config 平价等），显示架构迁移正在密集推进。今日关闭了若干带有安全与稳定性标签的问题（如 #10966 Git 审批分类绕过、#10793 Windows 测试失败），同时新报了一个并发文件编辑静默丢写的 Bug（#11136）。整体健康度良好，但待合并 PR 积压达 37 条，且多条 XL 体量 PR 相互堆叠（stacked），合并顺序与评审带宽是当前主要压力点。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭的 PR（13 条）中，值得关注的是：

- **#11007 [CLOSED] feat(matrix): answer a mirror peer's voice message with a voice note** — 实现了 Matrix 上 `output_modality = "mirror"` 此前被标记为未实现的行为，使镜像成员能以语音消息回应语音消息。链接：zeroclaw-labs/zeroclaw PR #11007
- **#11113 [CLOSED] test(runtime): sync RPC, SOP, and plugin CLI fixtures** — 同步 RPC/SOP/插件 CLI 测试夹具，属于测试基础设施维护。链接：zeroclaw-labs/zeroclaw PR #11113
- **#10820 [CLOSED] chore(deps): bump the web-minor-patch group（21 处更新）** — web 目录依赖批量升级，随后由 #11193 接续为 22 处更新的新一轮升级。链接：zeroclaw-labs/zeroclaw PR #10820
- **#9241 [CLOSED] feat(channels): add Microsoft Teams (Bot Framework) channel** — 7 月提交的 Teams 渠道 PR 被关闭（同日 #11194 重新提交了等价改动，仍处 OPEN），说明该功能以重新提交方式继续推进。链接：zeroclaw-labs/zeroclaw PR #9241

Issue 侧关闭了 7 条，其中包含安全与稳定性相关条目（详见第 5 节）。总体看，项目今日的主要推进力来自仍在评审中的 RPC 平价系列（#11169、#11182、#11172、#11164、#11174），而非已合并代码。

## 4. 社区热点

- **#8692 [OPEN] [Tracker]: Maintainer decision queue for RFCs and design issues**（15 条评论，今日 Issue 中最高）——维护者决策队列追踪器，用于 RFC、设计问题与发布策略问题的裁决。持续高讨论度反映社区在等待维护者对多项设计议题表态。链接：zeroclaw-labs/zeroclaw Issue #8692
- **#11036 [OPEN] [bug] OpenCode big-pickle 返回 403 FreeTierError on v0.8.4**（5 条评论）——使用 OpenCode 凭据调用免费层模型 "big-pickle" 失败，报 `All model...` 全模型失败。链接：zeroclaw-labs/zeroclaw Issue #11036
- **#10919 [OPEN] [bug] A2A 与 HTTP 工具测试使用独立的全局代理状态锁**（4 条评论）——测试同步不一致，源自 #9283 评审发现。链接：zeroclaw-labs/zeroclaw Issue #10919
- **#11053 [OPEN] RFC: Knowledge graph as a first-class agent memory layer**（3 条评论）——主张知识图谱目前只是"工具"而非"记忆"，希望其成为一等 agent 记忆层。链接：zeroclaw-labs/zeroclaw Issue #11053
- **#11103 [OPEN] feat(providers): add Cheaper Inference as a typed OpenAI-compatible provider**（3 条评论）——为 OpenAI 兼容网关新增类型化 provider 槽位。链接：zeroclaw-labs/zeroclaw Issue #11103

诉求分析：评论热度集中于"架构级决策与记忆层设计"以及"provider 兼容性"，说明社区关注点正从单点 Bug 转向 v0.9.0 前后的结构性设计与多 provider 支持。

## 5. Bug 与稳定性

按严重程度排列（均标注是否已有 fix PR；今日数据中未见明确关联的 fix PR 字段，故以状态标签判断）：

- **[p1 / risk:high] #10778 [OPEN] 多模态图片上限驱逐会重写更早的历史消息并使该点之后的缓存前缀失效** — 已有 `status:in-progress`、`status:accepted`，机制已定位（#10701 的后续）。链接：zeroclaw-labs/zeroclaw Issue #10778
- **[p1 / risk:high / type:test] #10008 [OPEN] 证明插件 wasi:http hook 拨号到固定地址集** — 变异测试发现的 egress 覆盖缺口，`status:accepted`、`status:no-stale`。链接：zeroclaw-labs/zeroclaw Issue #10008
- **[p2 / risk:high] #11108 [OPEN] 保留 browser 与 search 工具语义，不应改写为 shell 调用** — `map_tool_name_alias()` 将 `browser_open`、`browser`、`web_search` 映射到 `shell`，已有 `status:accepted`。链接：zeroclaw-labs/zeroclaw Issue #11108
- **[p2] #11136 [OPEN] 并发 file_edit/file_write 对同一路径会静默丢弃一次编辑（parallel_tools 下）** — 今日新报（2026-09-26 创建），运行时分发与工具层未同步写入。链接：zeroclaw-labs/zeroclaw Issue #11136
- **[p2] #10921 [OPEN] Qdrant 时间受限向量召回可能漏掉合格结果** — `QdrantMemory::recall` 将调用方 `limit` 直传导致召回不完整。链接：zeroclaw-labs/zeroclaw Issue #10921
- **[p2] #10919 [OPEN] A2A 与 HTTP 测试使用独立锁保护全局代理状态** — 见社区热点。链接：zeroclaw-labs/zeroclaw Issue #10919
- **[p2] #11036 [OPEN] OpenCode big-pickle 403 FreeTierError** — 标记 `r:needs-repro`、`needs-author-action`，等待复现。链接：zeroclaw-labs/zeroclaw Issue #11036
- **[p2] #10795 [OPEN] `zeroclaw agent` 交互式 REPL 从不启用终端 IUTF8** — 多字节字符 Backspace 行为异常。链接：zeroclaw-labs/zeroclaw Issue #10795
- **[无优先级标签] #10757 [OPEN] 区分 agent-browser 可用性探测超时与 CLI 缺失错误** — #9946 之后的诊断性遗留工作。链接：zeroclaw-labs/zeroclaw Issue #10757

今日已关闭的 Bug（稳定性改善）：
- **#10966 [CLOSED][p1 / risk:high] Git `--attr-source` 可隐藏变更型子命令以规避审批分类**（S0 数据丢失/安全风险）——共享 Git 全局选项扫描器未消费 `--attr-source` 的独立取值。链接：zeroclaw-labs/zeroclaw Issue #10966
- **#10793 [CLOSED] 三条仅 Windows 的 advisory job 测试失败**（代码未变更）。链接：zeroclaw-labs/zeroclaw Issue #10793
- **#10826 [CLOSED] 让 ZeroCode 会话根目录选择显式化并保留恢复的根**。链接：zeroclaw-labs/zeroclaw Issue #10826
- **#10812 [CLOSED] WhatsApp PDF 缩略图**（被标记 `status:parking-lot`）。链接：zeroclaw-labs/zeroclaw Issue #10812

## 6. 功能请求与路线图信号

- **知识图谱作为一等记忆层（#11053，RFC）** — 与既有记忆后端议题（#10921 Qdrant、memory 标签）方向一致，属于架构级 RFC，尚需维护者裁决（参见 #8692 决策队列）。
- **默认启用 stall watchdog（#10168）** — 让 `stall_timeout_secs` 有保守的非零默认值，避免 turn 永久挂起；`status:accepted`，较可能被纳入。
- **Cheaper Inference 类型化 provider（#11103）** — `status:in-progress`、`status:accepted`，且今日 PR #11194（Teams 渠道）等显示渠道/provider 扩展是当前活跃方向。
- **ZeroCode 编辑器标准文本编辑（#10909）** — 撤销/重做、键盘选择、全选、剪切，`status:in-progress`。
- **持久化 session prompt attachments（PR #10407）** — 每个 Chat 会话最多四个 SQLite 持久附件，可跨 daemon 重启存活；体量 XL，长期开放。
- **Microsoft Teams 渠道（PR #11194，接替已关闭的 #9241）** — 基于 Azure Bot Service / Bot Framework 的 Teams 渠道，体量 XL。
- **二进制提交戳记（PR #11196）** — `--version` 仅显示包版本（当前 0.8.5 覆盖 332 个提交），改为烧录构建提交号。
- **频道去抖批处理模态归属测试（PR #11195）** — 钉住去抖镜像批次归属首条消息的模态。

路线图信号：v0.9.0 gateway 拆分（Lane P 系列 #11169/P5、#11182/P6、#11172、#11164、#11174、#11185）是当前最明确的版本级方向。

## 7. 用户反馈摘要

- **provider 可用性痛点**：#11036 用户使用 OpenCode 免费层模型报 403 且提示"全部模型失败"，属凭据/免费层接入体验问题，目前仍需复现。
- **工具语义一致性**：#11108 用户指出浏览器与搜索工具被错误改写为 shell 调用，说明内置工具的语义保真度是实际使用中的摩擦点。
- **并发写入数据完整性**：#11136 用户报告 `parallel_tools` 下并发编辑同一文件会静默丢失一次编辑，这是对可靠性的直接不满。
- **终端交互细节**：#10795 用户（由 agent 报告的 issue）反映 REPL 中多字节字符退格异常。
- **文档缺口**：#10212 指出 `switch` 及其路由优先级在 `sop/syntax.md` 中完全缺失文档；#10920 指出生成的 PR 评审 recipe 丢失 fetch 状态。
- **可观测性诉求**：#10757 要求区分浏览器探测超时与 CLI 缺失错误，反映诊断信息粒度不足。
- **正面信号**：矩阵语音镜像（#11007）与 Teams 渠道（#9241→#11194）等渠道功能持续推进，说明多渠道接入需求旺盛。

## 8. 待处理积压

长期未响应或长期开放、需维护者关注的重要条目：

- **#8692**（创建 2026-07-04，已开放约 3 个月）维护者决策队列，15 条评论仍在等待裁决，是多项 RFC 的瓶颈。链接：zeroclaw-labs/zeroclaw Issue #8692
- **#10008**（创建 2026-08-15）p1 安全测试覆盖缺口，`status:no-stale`，需补齐 wasi:http egress 证明。链接：zeroclaw-labs/zeroclaw Issue #10008
- **#10168**（创建 2026-08-20）默认启用 stall watchdog，已 accepted 但未见实现 PR。链接：zeroclaw-labs/zeroclaw Issue #10168
- **#10212**（创建 2026-08-21）SOP `switch` 文档缺失。链接：zeroclaw-labs/zeroclaw Issue #10212
- **#10407**（PR，创建 2026-08-27）持久化 session prompt attachments，XL 体量、`needs-author-action`，长期开放。链接：zeroclaw-labs/zeroclaw PR #10407
- **PR 积压提示**：37 条待合并 PR 中，多条为 JordanTheJet 的 stacked RPC 平价 PR（#11185 明确说明依赖 #11167 与 #11132 先落地），合并顺序受依赖链约束。链接：zeroclaw-labs/zeroclaw PR #11185

---
*本日报仅基于所提供 GitHub 数据生成；评论数为 `undefined` 的 PR 未作推断。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*