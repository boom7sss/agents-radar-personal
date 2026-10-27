# OpenClaw 生态日报 2026-09-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-21 11:06 UTC

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

# OpenClaw 项目日报 · 2026-09-21

## 1. 今日速览

项目今日处于**高活跃、高负载**状态：过去 24 小时 Issues 更新 500 条（新开/活跃 331、关闭 169），PR 更新 500 条（待合并 286、合并/关闭 214），无新版本发布。讨论热度集中在**存储与内存资源泄漏**类 P0/P1 崩溃问题上——WAL 无限增长、网关 RSS 膨胀、僵尸子进程、插件构建临时目录堆积，均指向长时间运行场景下的稳定性缺陷。维护者侧今日提交了大量性能与修复类 PR（多数来自 steipete），涵盖会话游标批处理、容器迁移、Codex 目录重试、状态显示等，说明团队正并行推进"止血"与"降耗"两条线。整体看，**积压压力显著（286 个待合并 PR）**，但关单/合并节奏仍在持续，项目健康度处于"问题密集但响应活跃"的区间。

---

## 2. 版本发布

今日无新版本发布，无变更日志可梳理。需注意：多个高优先级 Issue 针对 **2026.9.5 / 2026.9.4 / 2026.9.3** 报告了升级后回归（见第 5 节），在下一个补丁版本发布前，升级风险需要用户自行评估。

---

## 3. 项目进展

今日合并/关闭 214 个 PR，以下为评论数最高、已关闭的代表性条目：

- **#154691 [CLOSED] test(release): isolate Ultra wire assertions**（RomneyDa）
  修复 Ultra 测试夹具将并发同模型子代理请求误归因于已准入 Ultra 运行的问题，恢复了 Full Validation 的 OpenAI 网关 live lane。链接：openclaw/openclaw PR #154691

- **#153246 [CLOSED] Plugin build temp dirs 泄漏**（Issue）
  插件构建临时目录 `openclaw-plugin-build-*` 从不清理、约 7.5 GB/天 的问题已被关闭，说明相关修复或处置已落地。链接：openclaw/openclaw Issue #153246

- **#123360 [CLOSED] memory-core dreaming 多阶段竞争**（Issue）
  多阶段 dreaming 夜间流程中"首个完成者清理"与兄弟阶段竞态、已完成叙事被丢弃的问题得到处置。链接：openclaw/openclaw Issue #123360

- **#152884 [CLOSED] Updating Openclaw — Deadlock**（Issue）
  用户升级过程中的死锁问题已关闭。链接：openclaw/openclaw Issue #152884

- **#145995 [CLOSED] Plugin inspection 间歇失败（SQLite 状态未稳定）**（Issue）
  Linux 上 2026.9.4 插件巡检间歇失败问题已关闭。链接：openclaw/openclaw Issue #145995

**推进方向判断**：今日关闭项偏向"资源泄漏 / 升级阻塞 / 测试可靠性"三类，属于维护性推进；功能侧未见大型合并。项目向前迈进的幅度体现为**存量故障收敛**，而非新增能力。

---

## 4. 社区热点

按评论数排序，今日讨论最集中的条目：

| 排名 | 条目 | 类型 | 评论 | 状态 | 链接 |
|---|---|---|---|---|---|
| 1 | Agent SQLite WAL 增长至 2.8 GB，阻断网关启动 | Issue #143524 | 47 | OPEN / P0 | openclaw/openclaw Issue #143524 |
| 2 | 工具调用之间的文本泄漏到消息通道 | Issue #25592 | 40 | CLOSED / P1 | openclaw/openclaw Issue #25592 |
| 3 | 未回收的 hook/tool 子进程导致僵尸堆积 | Issue #97616 | 31 | OPEN / P1 | openclaw/openclaw Issue #97616 |
| 4 | 网关内存泄漏 RSS 350MB→15.5GB 致 OOM | Issue #91588 | 30 | OPEN / P1 | openclaw/openclaw Issue #91588 |

**诉求分析**：热点高度同质化——四席中三席为**长期运行的资源不收敛**问题（磁盘 WAL、进程、内存）。这类 Issue 的评论数远超普通 bug，说明影响面广、复现普遍且持续时间长（#91588 自 6 月 9 日、#97616 自 6 月 29 日持续至今）。用户真正的诉求不是单点修复，而是**希望有资源上限与自愈机制**（如 checkpoint 强制、子进程回收、内存水位告警）。#25592（工具间文本外泄）虽已关闭，但涉及安全与消息外发，值得关注其修复是否覆盖全部通道。

---

## 5. Bug 与稳定性

按严重程度排列，标注 fix PR 状态（依据标签判断）：

**P0 / 崩溃或发布阻断**
- **#143524** WAL 增长至 1.4–2.8 GB 且从不 checkpoint，阻断网关启动（Windows，2026.9.2/9.3）。标签 `clawsweeper:no-new-fix-pr`、`needs-info` → **尚无新 fix PR**。链接：openclaw/openclaw Issue #143524
- **#153257** 2026.9.5 使稳定环境陷入 8 小时故障恢复。标签 `needs-info` → **尚无 fix PR**。链接：openclaw/openclaw Issue #153257
- **#152981** 网关启动在 sidecars.model-runtime 处挂起约 17 分钟并失败（2026.9.5，Windows 11）。→ **尚无 fix PR**。链接：openclaw/openclaw Issue #152981
- **#38327** 2026.3.2 起 google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined or null to object"（回归，👍3）。→ **尚无 fix PR**。链接：openclaw/openclaw Issue #38327
- **#48920** Live Docs 超前于发布版本（Heartbeat IsolatedSessions 文档存在但 2026.3.13 未实现，回归，👍4）。链接：openclaw/openclaw Issue #48920
- **#152884** 升级死锁（已关闭）。链接：openclaw/openclaw Issue #152884
- **#145995** 插件巡检 SQLite 状态未稳定（已关闭）。链接：openclaw/openclaw Issue #145995

**P1 / 高影响**
- **#91588** 网关内存泄漏 350MB→15.5GB，反复 OOM。→ **尚无 fix PR**。链接：openclaw/openclaw Issue #91588
- **#97616** 未回收子进程 / 僵尸堆积（回归）。→ **尚无 fix PR**。链接：openclaw/openclaw Issue #97616
- **#137332** 混合终态 requester-settle 批次在所有权检查后无限重试。标签 `fix-shape-clear`、`queueable-fix` → **具备可排队修复条件**。链接：openclaw/openclaw Issue #137332
- **#114211** Matrix 房间代理在可见"无回复"输出上循环、重启后重放陈旧会话。→ **尚无 fix PR**。链接：openclaw/openclaw Issue #114211
- **#138272** Android Talk（gateway-relay）在需执行任务的轮次报 "no live response owner"。→ **尚无 fix PR**。链接：openclaw/openclaw Issue #138272
- **#119992** `message` 工具缺乏每轮发送预算，导致同一轮内重复答案风暴。标签 `clawsweeper:linked-pr-open` → **已有 PR 关联**。链接：openclaw/openclaw Issue #119992
- **#112259** 可见入站轮次可能被静默丢弃（零负载分发无重试/死信）。→ 标签 `needs-info`。链接：openclaw/openclaw Issue #112259
- **#135858** opencode-go 本地目录快照未投射 provider.npm→api 覆盖。→ **尚无 fix PR**。链接：openclaw/openclaw Issue #135858

**P2 / P3**
- **#53408** 长对话（15+ 轮）后 `write`/`exec` 参数被静默丢弃。链接：openclaw/openclaw Issue #53408
- **#87299** 大型 Telegram 直连会话中 Codex app-server 失败（已关闭）。链接：openclaw/openclaw Issue #87299
- **#51429** 疑似硬编码工作路径 `/Users/wangtao` 并被合并发布。链接：openclaw/openclaw Issue #51429
- **#89147** 原生 hook relay 在长思考间隙后中途饥饿（已关闭）。链接：openclaw/openclaw Issue #89147
- **#82662** 隔离 cron agentTurn 报 "setup timed out before runner start"（回归）。链接：openclaw/openclaw Issue #82662

**总体判断**：今日高严重度 Bug **多数仍处于 `no-new-fix-pr` 状态**，仅 #137332、#119992 明确具备修复条件或已关联 PR。稳定性健康度偏弱。

---

## 6. 功能请求与路线图信号

结合今日开放 PR，以下需求存在被纳入下一版本的现实信号：

- **浏览器引擎统一（高概率）**
  PR #154508 `refactor(browser): share engine adapters for Chromium and Lightpanda` 与 #154607 `improve(browser): default managed Chromium to efficient headless launches` 构成 8 连栈（stack 6/8、7/8，基座 #154396），标记 `maintainer`、`size: L/XL`。这是今日最成体系的功能推进。链接：openclaw/openclaw PR #154508 · openclaw/openclaw PR #154607

- **自托管 STT/TTS（中低概率）**
  Issue #45508 要求 webchat 的朗读/语音输入走网关而非浏览器 Web Speech API（👍2），目前无对应 PR，仍属需求池。链接：openclaw/openclaw Issue #45508

- **子代理完成隔离（中概率）**
  Issue #96975 建议子代理完成仅返回状态 + 子会话链接，避免大量子会话内容注入父上下文。属架构级改动，与当前 `impact:session-state` 类问题方向一致。链接：openclaw/openclaw Issue #96975

- **会话智能自动命名（低概率）**
  Issue #99583 提议懒生成、廉价模型、话题感知重命名（👍2）。链接：openclaw/openclaw Issue #99583

- **通道任务状态常驻面板（低概率）**
  Issue #52640 提议为长时通道轮次提供持久任务状态面（Discord 优先），该 Issue 今日已关闭。链接：openclaw/openclaw Issue #52640

- **性能与治理类 PR（正在推进）**
  #154714 批处理 watcher 游标读取、#154590 减少会话列表重复分配、#154662 回收 worker 复用原生校验、#154625 降低插件回调开销——这批 `perf` PR 直指第 4 节所述资源问题，**是缓解当前稳定性压力的最直接路径**。链接：openclaw/openclaw PR #154714 · openclaw/openclaw PR #154590

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中提炼的真实反馈：

- **升级恐惧情绪明显**：#153257 作者直言 "I genuinely regret upgrading to OpenClaw 2026.9.5"，并描述升级后经历 8 小时故障恢复；#152884 用户升级遭遇死锁。反映**版本升级路径缺乏安全网**，用户对升级持谨慎甚至后悔态度。
- **长期运行可靠性是核心痛点**：WAL 膨胀、内存增长到 15.5GB、僵尸进程堆积、临时目录 7.5GB/天——四类问题共同指向"跑久了就会崩"，对自托管/单网关用户尤其致命。
- **消息通道行为不受控**：工具调用间文本外泄到 Slack/iMessage（#25592）、同一轮重复发送多个改写版本答案（#119992）、入站消息被静默丢弃（#112259）、Matrix 房间代理自循环（#114211）。用户期待**可预期的通道输出与失败可见性**。
- **参数静默丢失难以排查**：#53408 描述 15+ 轮重工具使用后 `write`/`exec` 参数全部丢失，属"无崩溃但错误结果"，用户排查成本高。
- **发布纪律受质疑**：#48920 指出 Live Docs 领先于发布版本（👍4）；#51429 用户发现疑似硬编码路径 `/Users/wangtao` 被合并发布，直言"这位 wangtao 是谁？"——**文档与代码的发布一致性问题引发信任讨论**。
- **平台覆盖诉求**：Android Talk 语音在需执行任务时掉线（#138272）、webchat 忽略 TTS/STT 配置（#45508），用户希望移动端与自托管语音能力完整。

---

## 8. 待处理积压

以下条目存在时间长、影响大或标记为陈旧（stale）却仍在更新，建议维护者优先关注：

**长期开放的高严重度 Bug**
- **#91588**（P1，创建于 2026-06-09，评论 30）网关内存泄漏，已开放超 3 个月。链接：openclaw/openclaw Issue #91588
- **#97616**（P1，创建于 2026-06-29，评论 31）子进程泄漏，已开放近 3 个月。链接：openclaw/openclaw Issue #97616
- **#38327**（P0，创建于 2026-03-06，👍3）google-vertex 回归，已开放超 6 个月。链接：openclaw/openclaw Issue #38327
- **#143524**（P0，创建于 2026-09-09，评论 47）WAL 增长阻断网关启动，标签 `needs-info`。链接：openclaw/openclaw Issue #143524
- **#48920**（P0，创建于 2026-03-17，👍4）Live Docs 超前于发布。链接：openclaw/openclaw Issue #48920

**标记 stale 但仍活跃的需求/缺陷**
- **#96975**（P2，stale，2026-06-26）子代理完成隔离。链接：openclaw/openclaw Issue #96975
- **#53408**（P2，stale，2026-03-24，👍2）长对话后工具参数丢失。链接：openclaw/openclaw Issue #53408
- **#99583**（P3，stale，2026-07-03，👍2）会话自动命名提案。链接：openclaw/openclaw Issue #99583
- **#82662**（P2，stale，2026-05-16，👍2）隔离 cron agentTurn 超时。链接：openclaw/openclaw Issue #82662
- **#45508**（P2，2026-03-13，👍2）自托管 STT/TTS 支持。链接：openclaw/openclaw Issue #45508

**维护者负担提示**：今日待合并 PR 达 **286 个**，其中大量为 `size: XL/L` 且标记 `maintainer`、`status: 👀 ready for maintainer look`（如 #154136、#153096、#154655、#154489）。其中 **#153096**（P0、`merge-risk: compatibility`，容器迁移在 FUSE 卷上卡死）与 **#154136**（P0，允许保留数据库的已删除代理继续更新）为高优先级待审项，建议优先排期。链接：openclaw/openclaw PR #153096 · openclaw/openclaw PR #154136

**自动化提示**：Issue #114414「Dated TODO sweep」列出多条**已逾期**的待办（如 pnpm-workspace.yaml:32 的 zod 依赖冷却排除项，截止 2026-09-17），属于低成本可清理项。链接：openclaw/openclaw Issue #114414

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**统计区间：2026-09-20 至 2026-09-21｜样本：13 个项目**

---

## 1. 生态全景

当前生态呈现"**头部高负载、长尾静默**"的两极分布：OpenClaw、ZeroClaw、Hermes Agent、CoPaw 四个项目单日 Issues/PR 更新量均达 50 条量级，而 TinyClaw、ZeptoClaw 完全静默、NullClaw 仅 1 条 Issue。**"资源不收敛"是跨项目的共性顽疾**——OpenClaw 的 WAL/内存/子进程泄漏、ZeroClaw 的 daemon 栈溢出与紧急停止失效、PicoClaw 的长会话输入卡顿，本质都是长时间运行场景下的稳定性缺陷。**评审带宽已成为系统性瓶颈**：OpenClaw 待合并 PR 286 条、ZeroClaw 48 条、Hermes 42 条、NanoBot 14 条，多数项目"提交侧响应迅速、决策侧明显滞后"。与此同时，安全与信任边界问题开始集中浮现（CoPaw prompt injection、ZeroClaw 身份治理栈、NanoBot SSE 推理文本丢失），标志着生态正从"能用"迈向"可信"的转折点。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/关闭） | PR（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（331/169） | 500（286/214） | 无 | 问题密集但响应活跃；高严重度 Bug 多为 `no-new-fix-pr`，稳定性偏弱 |
| **ZeroClaw** | 50（46/4） | 50（48/2） | 无 | 活跃度极高但吞吐受评审限制；≥5 条 P1/S1 无 fix PR |
| **Hermes Agent** | 50（43/7） | 50（42/8） | 无（v0.21.3 为既有） | 新 Issue 数小时内出 PR，响应链路短；评审侧滞后 |
| **CoPaw** | 13（9/4） | 25（14/11） | 无 | 活跃且响应及时；CI fail-closed + 覆盖率 +3.28pp，工程质量向好 |
| **NanoClaw** | 1（1/0） | 44（6/38） | 无 | 合并吞吐强劲，集中清理 3–5 月老 PR；新 Bug 待分诊 |
| **LobsterAI** | 2（2/0） | 19（3/16） | **4 个**（9.14/9.15/9.17/9.20） | 高强度维护，OpenClaw 升级收尾；启动链路为薄弱点 |
| **NanoBot** | 3（3/0） | 22（14/8） | 无 | 质量导向稳定推进；多条 PR 带 `conflict`，合并摩擦偏高 |
| **IronClaw** | 0 | 8（4/4） | 无（1.4.1-rc.1 切分中） | 维护性节奏；积压全为 dependabot 依赖更新 |
| **PicoClaw** | 4（3/1） | 6（3/3） | 无 | 活跃度中等偏低；核心问题长期打 `stale` 却无修复 |
| **Moltis** | 2（1/1） | 2（2/0） | 无 | 社区主动贡献、维护者待响应；存在重复工单 |
| **NullClaw** | 1（1/0） | 0 | 无 | 维护静默期，仅 1 条可观测性改进请求 |
| **TinyClaw** | 0 | 0 | 无 | 过去 24 小时无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 过去 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

**社区规模：绝对头部。** OpenClaw 单日 Issues/PR 更新各 500 条，是第二名（ZeroClaw/Hermes，各 50 条）的 **10 倍**，待合并 PR 数（286）超过其余 12 个项目待合并 PR 总和（约 122 条）。单条 Issue 评论量峰值 47（#143524），远超其他项目（ZeroClaw 最高 15、Hermes 最高 8、CoPaw 最高 5）。

**优势：**
- **生态位参照地位**——LobsterAI 明确以 OpenClaw 为上游（升级至 v2026.8.1，围绕其兼容性发布 4 个版本），说明 OpenClaw 已成为事实上的基础设施层。
- **响应节奏**——维护者（steipete）单日并行推进大量性能与修复 PR，覆盖会话游标批处理、容器迁移、Codex 目录重试等，"止血"与"降耗"双线并进。
- **功能纵深**——浏览器引擎统一栈（8 连栈，Chromium/Lightpanda 共享 adapter）是今日样本中体系化程度最高的功能推进。

**技术路线差异：**
- OpenClaw 采用**插件构建 + Ultra 测试夹具 + 多阶段 dreaming** 等复杂运行机制，能力丰富但故障面宽（临时目录 7.5 GB/天、WAL 2.8 GB、RSS 15.5 GB）。
- 对比 ZeroClaw 的**身份治理栈**（OIDC device grant、principal consumption）与 Hermes 的 **multiplex-only 网关架构**，OpenClaw 的架构演进更偏向"运行时能力扩展"而非"治理边界收敛"。

**主要风险：** 高严重度 Bug 多数处于 `no-new-fix-pr` 状态，长期开放项（#91588 内存泄漏逾 3 个月、#38327 vertex 回归逾 6 个月）持续未闭环；用户出现"升级恐惧"情绪（#153257 直言后悔升级），发布纪律受质疑（Live Docs 超前发布、硬编码路径 `/Users/wangtao` 被合并）。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **长时间运行资源不收敛** | OpenClaw、ZeroClaw、PicoClaw、CoPaw | OpenClaw：WAL 永不 checkpoint、RSS 350MB→15.5GB、僵尸子进程、临时目录 7.5GB/天；ZeroClaw：daemon 栈溢出中止、cron 无 wall-clock 超时；PicoClaw：长会话 Web UI 输入卡顿；CoPaw：上下文压缩超预算打断回合。**共性诉求：资源上限 + 自愈机制 + 水位告警** |
| **会话状态与上下文正确性** | OpenClaw、Hermes、ZeroClaw、PicoClaw | OpenClaw：15+ 轮后 `write`/`exec` 参数静默丢失；Hermes：父智能体对已完成子智能体重试循环、`desktop/interrupted_turns.json` 清理致退出码 1；ZeroClaw：同一 session 并发消息触发重复运行；PicoClaw：Web UI 历史越长越卡 |
| **通道输出可控性与失败可见性** | OpenClaw、NanoClaw、ZeroClaw、Hermes | OpenClaw：工具间文本外泄到 Slack/iMessage、同轮重复答案风暴、入站消息静默丢弃；NanoClaw：WhatsApp 仅传 JID 不传显示名；ZeroClaw：WhatsApp 二维码/提及双向损坏、出站消息无投递回执；Hermes：Telegram `base_url` 被忽略 |
| **安全与信任边界** | CoPaw、ZeroClaw、OpenClaw、NanoBot | CoPaw：#7859 持久 prompt injection 指令要求删除所有 skills，跨会话复现、来源未定位；ZeroClaw：Bluesky/Reddit 缺乏发送者授权、紧急停止仅状态文件无运行时读取；OpenClaw：#25592 工具间文本泄漏到消息通道；NanoBot：API 请求均以 `chat_id="default"` 运行导致路由错误 |
| **多智能体 / 多租户资源隔离** | ZeroClaw、Hermes、OpenClaw、NanoClaw | ZeroClaw：RFC #10970 宿主级准入控制与每智能体资源边界（并发 turn/工具/跨进程内存）；Hermes：FLEET 多 profile 路由、单宿主唯一 multiplexer；OpenClaw：子代理完成隔离（#96975）；NanoClaw：定时任务错误路由给运维方 |
| **配置项"声称支持但实际无效"** | Hermes、ZeroClaw、CoPaw、Moltis | Hermes：`reasoning_effort` 的 `minimal`/`max` 静默回退、自定义 provider 丢 `max_tokens`；ZeroClaw：`max_context_tokens=131072` 被忽略；CoPaw：nullable 被清洗导致可选参数无法省略；Moltis：空 `active_tools` 数组清空预设工具 |
| **移动端 / 跨平台一致性** | OpenClaw、NanoBot、Hermes、PicoClaw | OpenClaw：Android Talk 掉线；NanoBot：iOS Safari 首击被 `:hover` 吞、侧边栏误弹搜索 tooltip（多条独立反馈指向同一根因）；Hermes：Windows 终端面板不启动、TTS 反复重载 ~2s；PicoClaw：长会话移动端退化 |
| **Provider 生态扩展** | NanoBot、PicoClaw、Moltis、CoPaw | NanoBot：Opper 网关 provider、aimlapi.com 官方主动贡献；PicoClaw：OpenAI 兼容 provider（自托管 9Router）；Moltis：VoxCPM 本地 TTS；CoPaw：统一模型发现/定价/选择 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈个人助手平台，浏览器/插件/子代理/dreaming 全能力覆盖 | 自托管重度用户、单网关部署者 | 插件构建体系 + Ultra 测试夹具 + 多阶段 dreaming；能力最全、故障面最宽 |
| **ZeroClaw** | 安全治理 + 多智能体宿主 | 需要审计与隔离的团队/多 agent 场景 | **身份治理栈**（OIDC device grant、路由层鉴权、退役 iam_policy）；RFC 驱动的架构演进 |
| **Hermes Agent** | 多租户网关（fleet/multiplex） | 多 profile / 多租户运营者 | **multiplex-only 架构**（每主机唯一 multiplexer，attach-or-rescan-or-refuse）；FLEET 单次重启语义 |
| **CoPaw** | 代理运行时可信度 + 工程质量 | 长会话重度用户、非标准 provider 接入者 | patch 级严格 CI（p0/p1/p2 分片 fail-closed）+ 高测试覆盖率（73.79%） |
| **NanoClaw** | 通道适配（WhatsApp 为核心） | 群聊/多目标场景用户 | Chat SDK 桥接层 + MCP 工具；skills 包（iCloud CalDAV/CardDAV/IMAP/SMTP） |
| **LobsterAI** | OpenClaw 下游发行版 + 桌面集成 | 桌面端用户、国内 IM（飞书/微信）用户 | Electron 桌面 + OpenClaw 网关；围绕上游升级做兼容迁移 |
| **NanoBot** | WebUI 交互 + 多 Provider 接入 | Web/MCP 用户、移动端用户 | Provider 网关聚合（Eden AI/OrcaRouter/Opper/aimlapi）+ Bun 运行时自更新 |
| **PicoClaw** | 轻量多渠道接入 | IRC/自托管路由用户 | v0.11.0 冲刺（排序 DAG、module trust、ACP/mesh depth） |
| **Moltis** | 本地语音（TTS）能力 | 本地模型/语音人格用户 | vLLM-Omni OpenAI 兼容接口接入本地 TTS |
| **IronClaw** | Rust 扩展沙箱 + OAuth 集成 | Rust 生态、Google Workspace 用户 | wasm 沙箱运行时 + 严格依赖治理（dependabot 分组） |

**关键差异总结：** OpenClaw 与 LobsterAI 构成"上游—发行版"关系；ZeroClaw 与 Hermes 都以"多 agent/多租户治理"为核心但路径不同（ZeroClaw 重身份鉴权，Hermes 重路由语义）；CoPaw 以工程质量为差异化护城河；NanoBot 与 PicoClaw 则以 Provider 开放生态争取增量。

---

## 6. 社区热度与成熟度

**第一层｜高负载快速迭代（活跃度 50+ 条/日）**
- **OpenClaw、ZeroClaw、HermesAgent**——处于高强度提交与修复期，架构演进活跃（OpenClaw 浏览器栈、ZeroClaw 身份治理栈、Hermes multiplex-only），但评审带宽明显滞后，高严重度 Bug 未闭环。属"**快速迭代但稳定性债务累积**"阶段。
- **CoPaw**——同为高活跃，但方向不同：今日动作集中在 CI fail-closed、覆盖率 +3.28pp、测试分片，属"**迭代中同步巩固质量基线**"，是样本中工程纪律最突出的项目。

**第二层｜质量巩固期（中活跃度）**
- **NanoClaw**——38 条 PR 集中合并，清理 6 个月前的老 PR（#746、#706），合并吞吐强劲，属"**存量债务集中偿还**"。
- **LobsterAI**——单日 4 个版本发布，全部围绕 OpenClaw 升级兼容收尾，属"**被动跟随上游的稳定性修复期**"，健康度良好但说明上游引入的回归面较宽。
- **NanoBot**——8 条合并/关闭聚焦隐私合规、日志可观测性、移动端可用性，属"**质量导向稳定推进**"，但多条 PR 带 `conflict` 反映合并摩擦。

**第三层｜低速维护 / 静默**
- **PicoClaw**——中日仅 1 条设计文档 PR 与 1 条 Issue 关闭，核心问题（Web UI 卡顿、IRC 长消息）打 `stale` 却无修复。
- **IronClaw**——活跃度集中在 dependabot 依赖更新，无人工 Issue，属"例行维护"。
- **Moltis**——2 条 PR 待评审，社区主动贡献但维护者未响应。
- **NullClaw、TinyClaw、ZeptoClaw**——静默或近静默。

**成熟度判断：** 尚无项目进入"稳定期"。即便是最成熟的 OpenClaw，也因资源泄漏类长期 Bug 而处于"**能力成熟但可靠性未成熟**"的错配状态。

---

## 7. 值得关注的趋势信号

**① 从"功能竞赛"转向"可靠性竞赛"。** 今日样本中，功能请求类议题（Moltis TTS、PicoClaw provider、CoPaw 网页标题）占比明显低于稳定性/正确性议题。OpenClaw 用户的核心诉求已从"加功能"变为"**希望有资源上限与自愈机制**"。对开发者的启示：**长时运行场景的 checkpoint 强制、子进程回收、内存水位告警应作为一等公民设计，而非事后补丁。**

**② Prompt Injection 与信任边界成为 P0 议题。** CoPaw #7859 的 prompt injection 指令（要求删除所有 skills）跨会话持久复现且来源未定位，是样本中最严重的安全信号。**system-reminder 与工具结果的信任边界设计**应被列为高优先级架构议题，而非内容过滤问题。

**③ "配置项声称支持但实际静默降级"正在系统性侵蚀信任。** 至少 4 个项目（Hermes、ZeroClaw、CoPaw、Moltis）出现此类问题——`reasoning_effort` 静默回退、`max_context_tokens` 被忽略、nullable 被清洗。**对成本敏感或部署受控的用户伤害直接，且排查成本极高。** 建议对配置项做启动期校验与显式失败。

**④ 多智能体规模化运行已从设想变为现网需求。** ZeroClaw RFC #10970（宿主级准入控制）明确以"使多智能体机器延迟退化而非稳定性崩溃"为目标；#9727 显示用户已在单机运行多个 agent 并需要并排监控。**资源隔离、并发 turn 限制、跨进程内存边界将成为下一阶段架构竞争点。**

**⑤ 评审带宽是生态级瓶颈，而非单项目问题。** OpenClaw（286）、ZeroClaw（48）、Hermes（42）、NanoBot（14）四项目待合并 PR 合计近 400 条；Hermes 多条 `needs-decision` 卡在决策；ZeroClaw #8289 堆叠 8 层 XL。**"提交侧快、决策侧慢"的剪刀差**若持续扩大，将导致高价值 PR 因陈旧冲突反复返工（NanoBot 已见此象），并可能挫伤外部贡献者意愿（NanoClaw #5666 aimlapi.com 官方贡献已挂起 17 天）。

**⑥ 移动端与非英语体验是被低估的差异化战场。** NanoBot 多条独立反馈指向同一 iOS Safari 首击根因（`:hover` 吞事件）；Hermes 用户单独提出 zh-CN 界面体验（#92760）；Windows 在多项目（Hermes、ZeroClaw、OpenClaw、CoPaw #7908 宿主进程可被子进程终止）连续受挫。**平台完整性正在成为用户留存的实际门槛。**

**⑦ 发布纪律与文档一致性开始引发信任讨论。** OpenClaw 的 Live Docs 超前于发布版本（👍4）、疑似硬编码路径被合并发布；LobsterAI 单日 4 个版本说明升级回归面宽但发布说明未标注破坏性变更。**在自托管场景下，用户对"可预期的升级路径"的需求，其权重正在追平功能本身。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-21）

## 1. 今日速览

今日项目保持高活跃度：24 小时内 PR 更新 22 条、Issues 更新 3 条，无新版本发布。合并/关闭队列推进明显，**8 条 PR 已合并或关闭**（含 3 条今日创建即关闭的 WebUI 修复），同时仍有 **14 条 PR 待合并**。工作重心集中在 WebUI 交互体验修复、日志可靠性与渠道（Telegram）细节打磨，以及网关类 Provider 的持续接入。值得注意的是一条关于 BUILD 阶段延迟的疑似性能回归 Issue（#5843）今日新开且尚无回应。整体健康度良好，但待合并队列偏长，且多条 PR 带有 `conflict` 标记，存在合并摩擦风险。

## 2. 版本发布

今日无新版本发布，故不展开。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#5841 [CLOSED] fix(agent): 工具执行中遵守临时聊天隐私策略**
  在工具进度、Web/MCP 诊断、runner/worker 恢复（含重连与 session 丢弃后的异常回溯）中统一遵循会话的内容记录策略。
  https://github.com/HKUDS/nanobot/pull/5841

- **#5840 [CLOSED] fix: 提升日志可靠性与请求关联性**
  统一 CLI 日志时间戳，引入 request/turn/session 关联字段与结构化生命周期字段、单行消息渲染，并修复 13 处 Loguru 调用点丢失真实异常回溯的问题。
  https://github.com/HKUDS/nanobot/pull/5840

- **#5839 [CLOSED] fix(webui): 修复移动端侧边栏 tooltip 与双击导航**
  对应关闭 Issue #5770，解决打开移动端侧边栏误弹出 `Search ⌘K` 提示、以及选择话题需二次点击的问题。
  https://github.com/HKUDS/nanobot/pull/5839

- **#5837 [CLOSED] fix(webui): 临时会话跨导航保留**
  修复切换会话后临时聊天丢失消息、回退到新会话欢迎页的问题，并保留进行中的回复状态。
  https://github.com/HKUDS/nanobot/pull/5837

**净推进评估**：今日在“隐私合规（临时聊天）”“可观测性（日志关联）”“移动端 WebUI 可用性”三条线上均有实质修复落地，且均为用户可感知的体验/正确性问题，属于质量导向的稳定推进。新增能力型 PR（如 Provider 接入）尚未合并，功能面增量有限。

## 4. 社区热点

今日数据中 PR 的评论数字段均缺失，无法据此判断讨论热度；按更新频率与议题覆盖度看，以下值得关注：

- **#5831 [OPEN] feat(webui): 精简上下文消息控件**（更新 2026-09-21）
  将每条用户消息与已完成的助手消息视为独立视觉块，仅在悬停/键盘聚焦/触摸选中时显示上下文控件。直接呼应近期多条移动端交互类 Issue 的共同诉求。
  https://github.com/HKUDS/nanobot/pull/5831

- **#5641 [OPEN] fix(webui): iOS PWA 点击与状态栏修复**（创建 2026-09-03，更新 2026-09-21，已挂起 18 天）
  涉及 iOS Safari 首次点击被祖先链 `:hover` 吞掉的问题，与 #5805、#5839、#5770 构成同一类移动端痛点簇。
  https://github.com/HKUDS/nanobot/pull/5641

- **#5843 [OPEN] BUILD 阶段延迟**（今日新开，0 评论）
  长会话每轮在 BUILD 阶段等待 10 秒至数十秒，且发生在 nanobot 内部、Provider 请求之前。属于潜在性能回归，若无跟进可能演化为高热议题。
  https://github.com/HKUDS/nanobot/issues/5843

**背后诉求**：移动端/触屏交互的一致性与首击可用性，是当前社区反馈最集中的方向；同时开始出现对内部执行延迟的可观测性与性能预期澄清诉求。

## 5. Bug 与稳定性

按严重程度排列：

1. **[高] #5843 BUILD 阶段延迟（长会话每轮 10s–数十秒）** — 今日新开，OPEN，**暂无 fix PR**
   发生在 LLM 调用之前、完全位于 nanobot 内部，直接影响长会话可用性；报告者亦指出“不确定是否为预期行为”，需维护者先定性。
   https://github.com/HKUDS/nanobot/issues/5843

2. **[高] #5833 SSE Responses 消费者丢弃 `response.reasoning_text.*` 事件** — OPEN，**暂无 fix PR**
   同一文件 `nanobot/providers/openai_responses/parsing.py` 中两个 Responses API 流式消费者存在传输不对称：`consume_sdk_stream` 处理 reasoning_text delta/done，而 SSE 消费者未处理，导致推理文本在 SSE 路径下丢失。
   https://github.com/HKUDS/nanobot/issues/5833

3. **[中] #5770 移动端侧边栏自动聚焦搜索按钮并显示 `Search ⌘K` tooltip** — 已 CLOSED，**已有 fix PR #5839 并已关闭**
   https://github.com/HKUDS/nanobot/issues/5770
   https://github.com/HKUDS/nanobot/pull/5839

4. **[中] #5838 API 请求 session 路由错误** — 每条 OpenAI 兼容 API 请求都以 `chat_id="default"` 运行，导致请求上下文、turn 路由、cron 绑定、subagent 来源与消息工具目标均指向错误会话。**已有 fix PR #5838**（OPEN）。
   https://github.com/HKUDS/nanobot/pull/5838

5. **[中] #5842 渠道状态未展示不可用插件** — 当渠道的可选运行时依赖无法导入时，`channels status` 不列出该渠道；PR 增加 `Available` 列以区分可用、缺依赖、运行时无效。**已有 fix PR #5842**。
   https://github.com/HKUDS/nanobot/pull/5842

6. **[低] #5803 Telegram 细节问题** — 富文本换行需两个空格、`topic_id` 未在 `my` 工具暴露、输入状态未遵循相关设置；**已有 PR #5803**（标记 conflict）。
   https://github.com/HKUDS/nanobot/pull/5803

## 6. 功能请求与路线图信号

- **新 Provider 接入（网关类）** — #5845 新增 Opper 为内置网关 Provider，对齐既有 Eden AI / OrcaRouter 条目；#5666 由 aimlapi.com 官方提交，新增 OpenAI 兼容网关 Provider。两者均带 `new-provider` 标签，属于低风险、可增量合并的生态扩展，较可能进入下一版本。
  https://github.com/HKUDS/nanobot/pull/5845
  https://github.com/HKUDS/nanobot/pull/5666

- **自更新流程** — #5817 引入 `nanobot update`（稳定版 PyPI）与 `--dev`/`--update-dev` 源码更新（仅快进 checkout），并按需引导固定、经 SHA-256 校验的私有 Bun 运行时。带 `conflict` 标记，需先解决冲突，落地价值较高。
  https://github.com/HKUDS/nanobot/pull/5817

- **工具调用上下文** — #5750 通过 ContextVar 暴露稳定的单次调用 `ToolInvocationContext`（修复 #5749），为工具实现提供逻辑调用身份，属基础能力铺垫。
  https://github.com/HKUDS/nanobot/pull/5750

- **WebUI 引导队列语义澄清** — #5844 明确排队引导“等待发送”状态，将含混的 Guide 动作在所有语言中更名为 Send now，并说明自动发送行为。
  https://github.com/HKUDS/nanobot/pull/5844

## 7. 用户反馈摘要

- **移动端触屏体验是最大痛点**：iOS Safari 首次点击被吞（#5641）、隐藏操作区遮挡会话行导致首击失效（#5805）、侧边栏自动聚焦并弹出搜索 tooltip（#5770）。多条独立反馈指向同一根因模式，说明移动端交互尚未系统化验收。
- **长会话性能体感明显**：用户明确描述“长会话中每一轮都要在 BUILD 阶段等约 10 秒，有时数十秒”，并强调等待发生在 nanobot 内部而非上游 Provider，同时请求澄清是否为预期行为（#5843）。
- **多路径行为不一致引发困惑**：同为 Responses API 消费者，SDK 路径能处理 reasoning_text，SSE 路径却丢弃，用户通过代码对比主动报告（#5833），反映对“两条路径应当等价”的合理预期。
- **生态方主动贡献**：aimlapi.com 官方主动完成技术工作以争取成为内置 Provider（#5666），显示项目在 Provider 生态中具备吸引力。
- **今日 3 条 Issue 评论数均为 0**，暂无维护者或社区回应记录，反馈闭环有待观察。

## 8. 待处理积压

- **#5641 [OPEN] iOS PWA 点击与状态栏修复** — 创建于 2026-09-03，已挂起 **18 天**，期间同类问题由其他 PR（#5839、#5805）重复处理，存在工作重叠与重复修复风险，建议尽快裁决或合并。
  https://github.com/HKUDS/nanobot/pull/5641

- **#5750 [OPEN] 暴露稳定的单次工具调用上下文** — 创建于 2026-09-12，已挂起 **9 天**，且带 `conflict` 标记，作为基础能力类改动值得优先排期。
  https://github.com/HKUDS/nanobot/pull/5750

- **#5666 [OPEN] aimlapi.com Provider 接入** — 创建于 2026-09-04，已挂起 **17 天**，属外部贡献者（生态伙伴）提交，长期无响应可能影响后续外部贡献意愿。
  https://github.com/HKUDS/nanobot/pull/5666

- **#5803 [OPEN] Telegram 改进与修复** — 创建于 2026-09-17，带 `conflict` 标记，渠道细节问题长期悬置会持续产生零散 Issue。
  https://github.com/HKUDS/nanobot/pull/5803

- **#5817 [OPEN] 自更新流程** — 带 `conflict` 标记，涉及运行时引导与校验逻辑，建议尽早解决冲突以进入评审。
  https://github.com/HKUDS/nanobot/pull/5817

- **待合并队列整体**：14 条 PR 待合并，其中多条标注 `conflict`，建议维护者安排一次集中冲突消解与优先级排序，避免高价值 PR 因陈旧冲突而反复返工。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-21

## 1. 今日速览

项目今日维持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 43，关闭 7），PR 更新 50 条（待合并 42，已合并/关闭 8），无新版本发布。今日新开 Issue 集中在 **桌面端会话状态**、**多租户网关（fleet/multiplex）profile 路由** 与 **Windows 平台** 三条主线，且多条新 Issue 在数小时内即出现对应 fix PR，响应链路较短。与此同时，待合并 PR 积压达 42 条，评审带宽明显落后于提交速度。长期积压问题（如 #51223 自 6 月、#60089 自 7 月）今日仍在被更新，说明存量 Bug 清理节奏偏慢。

---

## 2. 版本发布

今日无新版本发布。数据中提及的当前版本为 **Hermes Agent v0.21.3 (2026.9.14)**，upstream commit `3917c7dd6a`（见 Issue #118067）。

---

## 3. 项目进展

今日已合并/关闭条目共 15 条（Issues 关闭 7 + PR 合并/关闭 8），但所给样本中仅有一条明确的已关闭 Issue 及若干 open 状态的 PR，难以完整还原合并清单。可见的推进如下：

- **PR #118097 [OPEN]** — gateway 生命周期语义统一为"每主机唯一 multiplexer"（attach-or-rescan-or-refuse），属于架构指令 **multiplex-only** 的一部分（关联 #100896）。这是网关架构收敛的关键一步。
  https://github.com/NousResearch/hermes-agent/pull/118097
- **PR #118108 [OPEN]** — FLEET 场景下改为"每主机一次重启"：`hermes -p coder update` 与 `hermes -p writer update` 之间只重启一次宿主网关，且重启通知触达所有被服务 profile 的 home channel。
  https://github.com/NousResearch/hermes-agent/pull/118108
- **PR #118096 [OPEN]** — 修复 #118076：将保留 handle `hermes` 别名到 `default` profile 的 `/p/<profile>/` 镜像路径。
  https://github.com/NousResearch/hermes-agent/pull/118096
- **PR #118104 [OPEN]** — 为子智能体提供友好显示名（Fixes #118081），保留 `sa-{task_index}-{hex}` 作为路由键。
  https://github.com/NousResearch/hermes-agent/pull/118104
- **PR #118106 [OPEN]** — 修复 #118105：网关观测路径改用 epoch float 时间戳，解决 `_coerce_timestamp` 解析问题。
  https://github.com/NousResearch/hermes-agent/pull/118106

**整体判断**：项目正处于网关多路复用架构收敛期（#100896 系列），今日多数改动服务于"单宿主、多 profile"的语义一致性；功能增量有限，属结构性修复推进。

---

## 4. 社区热点

**#110054 [OPEN]（评论 8，👍0）— 本日讨论最热**
"Pain cluster: after the deleted-WAL guard fires there is no in-product recovery"
作者 teknium1，创建 2026-09-13，更新 2026-09-21，标签含 `needs-decision`、`from-pain-miner`、`P1`。
摘要显示：过去一周 4 个 Discord 线程（9 名不同用户）+ 13 个 GitHub Issue 指向同一用户可见失败——`DeletedWalGenerationError` 触发后产品内无恢复路径，Desktop 用户选择重启 / 询问 agent / 运行 `doctor --fix`，反而使状况恶化。
链接：https://github.com/NousResearch/hermes-agent/issues/110054
**诉求分析**：这是典型的"错误可见但无自愈路径"问题，且 `P1` + `needs-decision` 说明维护者已识别但尚未定调恢复策略。文档/引导层面的缺口正在放大真实故障的破坏面。

**#92760 [OPEN]（评论 6）— Bot Mode 群聊响应慢与桌面 UI 打磨**
作者 1515744558-jpg，创建 2026-08-23，更新 2026-09-21，`P2`，标签含 `comp/desktop`、`area/profiles`。
摘要指出根因是**群回复由轮询驱动（poll-driven）**，导致回复缓慢甚至静默停滞；同时非英语（zh-CN）用户界面体验待打磨。
链接：https://github.com/NousResearch/hermes-agent/issues/92760
**诉求分析**：非英语用户的可用性问题被单独提出，值得在路线图中作为独立议题跟踪。

**#61334 [OPEN]（评论 6）— `reasoning_effort` 取值静默降级**
作者 bbasketballer75，创建 2026-07-09，更新 2026-09-21，`P3`、`needs-decision`。
`hermes_cli/hermes_constants.py` 声明 6 个合法值，但 `minimal`/`max` 在 Anthropic-Messages 兼容 provider 上静默回退到与 `medium` 相同的 thinking budget。
链接：https://github.com/NousResearch/hermes-agent/issues/61334
**诉求分析**：配置项"声称支持但实际无效"的静默行为，对成本与效果调优用户影响直接。

**#118004 [OPEN]（评论 5，创建当日）— Desktop 终端面板无法启动**
Windows + SSH 远程后端场景下，右侧终端面板空白，无 pty、无 ssh、无日志。`P2`、`platform/windows`。
链接：https://github.com/NousResearch/hermes-agent/issues/118004

---

## 5. Bug 与稳定性

按严重程度排列（仅列出样本中标注严重级别或影响面较大的条目）：

### P1
- **#110054** 删除 WAL 守卫触发后无产品内恢复路径，用户自救行为加剧故障；一周内 13 个 Issue、4 个 Discord 线程。**尚无 fix PR**，状态 `needs-decision`。
  https://github.com/NousResearch/hermes-agent/issues/110054

### P2
- **#118076** Bot Mode 无法访问对端 primary profile：handle `hermes` 被寻址为 `/p/hermes/...` → HTTP 404（profile 名为 `default`）。**已有 fix PR #118096**。
  https://github.com/NousResearch/hermes-agent/issues/118076 ｜ https://github.com/NousResearch/hermes-agent/pull/118096
- **#118004** Windows Desktop 终端面板不启动（空白、无 pty/ssh/日志）。**未见对应 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/118004
- **#118067** `profiles.list` 每次调用违反 wire contract（每 profile 1 个校验错误）：`ProfileRow` 缺 `previous_names`；影响 Desktop（Electron）与 TUI。标记为 `duplicate`。
  https://github.com/NousResearch/hermes-agent/issues/118067
- **#118062** `hermes backup` 在归档中途清理 `desktop/interrupted_turns.json` 时退出码 1（turn 标记未列入 `_EXCLUDED_NAMES`）。**风险标记 `sweeper:risk-session-state`**。
  https://github.com/NousResearch/hermes-agent/issues/118062
- **#118066** 自定义 provider 的 `_custom_provider_request_overrides` 丢弃 `max_tokens`，cron 任务在端点默认上限处截断。
  https://github.com/NousResearch/hermes-agent/issues/118066
- **#103969** 工具调用载荷不完整：非流式路径硬停，而流式路径会重试；合法 JSON 但不完整的代码会抵达 kernel。
  https://github.com/NousResearch/hermes-agent/issues/103969
- **#94858** 父智能体在子智能体已完成的情况下陷入重试循环。
  https://github.com/NousResearch/hermes-agent/issues/94858
- **#118037** TTS 租约抖动：每次唤醒词激活都完整重载 Piper 语音（约 2s），23ms 后即卸载。`platform/windows`。
  https://github.com/NousResearch/hermes-agent/issues/118037
- **#51223** `send_message` 工具忽略 Telegram `base_url`，主动/cron 发送绕过自建 Bot API 服务器。创建于 2026-06-23，**积压约 3 个月**。
  https://github.com/NousResearch/hermes-agent/issues/51223

### P3
- **#61334** `reasoning_effort` 静默降级（详见社区热点）。
- **#60089** memory replace 报 "Multiple entries matched" 后回退 add，静默产生重复条目。创建 2026-07-07。
  https://github.com/NousResearch/hermes-agent/issues/60089
- **#118047** Telegram 基础平台提示禁止使用表格，而 `rich_messages` 提示要求使用表格，二者矛盾。
  https://github.com/NousResearch/hermes-agent/issues/118047
- **#118061** Desktop "All sessions" 侧栏点击活跃会话显示 "session not found"。
  https://github.com/NousResearch/hermes-agent/issues/118061
- **#109808** `skill_manage` create/edit 在正文置于 `file_content` 时返回泛化错误 "content is required"，诱发逐字重试循环。
  https://github.com/NousResearch/hermes-agent/issues/109808
- **#106017** Desktop fleet + 精简 profile 下拉框遗漏活跃网关的 `default` profile。
  https://github.com/NousResearch/hermes-agent/issues/106017

**稳定性小结**：今日最集中的风险主题是 **profile 命名/handle 与 wire contract 不一致**（#118067、#118076、#106017）与 **会话状态标记**（#118062、#118061、#110054）。前者已有 PR #118096 覆盖，后者只有部分修复。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 关联 PR | 纳入下一版本的可能性 |
|---|---|---|---|
| #118081 | 子智能体在活动与 steering UI 中使用友好显示名 | **#118104 已开** | 高——PR 已就绪并直接 Fixes 该 Issue |
| #118029 | Desktop：为受管 SSH 安装提供统一、可验证的 rollout 控制平面（pin 版本、canary、回滚） | 无直接 PR，但与 #118108 / #118097 的 fleet 更新语义相关 | 中——与网关架构收敛方向一致，但标记 `needs-decision` |
| #118054（#110054 系列） | 删除 WAL 守卫触发后的产品内恢复流程 | 无 | 取决于 `needs-decision` 结论，短期不确定性高 |

此外，今日新开的 Teams 相关 PR 构成一条独立功能线：
- **PR #118102** Teams 入站/出站 emoji 反应（含处理生命周期 👀✅❌）。
  https://github.com/NousResearch/hermes-agent/pull/118102
- **PR #118103** Teams FileConsent 与 Graph SharePoint 频道文件收发，**stacked 在 #118102 之上**。
  https://github.com/NousResearch/hermes-agent/pull/118103

---

## 7. 用户反馈摘要

- **恢复路径缺失是最大痛点**（#110054）：用户在守卫触发后没有产品内出路，被迫使用 `doctor --fix` 等偏门手段，且"越修越糟"。这不是单点 Bug，而是引导与恢复设计的系统性缺口。
- **非英语用户界面体验**（#92760）：明确点名 zh-CN 场景，反馈 Bot Mode 群聊回复缓慢、偶发静默；根因定位为 poll-driven 回复。
- **Windows 平台连续受挫**：#118004（终端面板不启动）、#118037（TTS 语音反复重载 ~2s）、PR #118040（`fcntl` shim 缺 POSIX 锁常量导致启动崩溃）共同指向 Windows 仍属相对薄弱平台。
  https://github.com/NousResearch/hermes-agent/pull/118040
- **配置项可信度**（#61334、#118066、#51223）：多处出现"配置了但不生效"的静默行为——`reasoning_effort`、自定义 provider 的 `max_tokens`、Telegram `base_url`。此类问题对依赖成本与部署控制的用户伤害较大。
- **多 profile/fleet 用户的路由混乱**（#118076、#118067、#106017）：`handle` 与 `name` 语义混用（`hermes` vs `default`）正在实际产生 404 与会话不可达。

---

## 8. 待处理积压

以下条目创建时间较早、今日仍有更新但长期未闭环，建议维护者优先分配注意力：

| 条目 | 创建日期 | 积压时长 | 状态 | 备注 |
|---|---|---|---|---|
| **#51223** send_message 忽略 Telegram base_url | 2026-06-23 | ~3 个月 | OPEN, P2 | 影响自建 Bot API server 用户，无 fix PR |
| **#60089** memory replace 歧义后静默产生重复条目 | 2026-07-07 | ~2.5 个月 | OPEN, P3 | 标记 `area/memory`，无 fix PR |
| **#61334** reasoning_effort 静默降级 | 2026-07-09 | ~2.4 个月 | OPEN, P3, `needs-decision` | 卡在决策 |
| **#92760** Bot Mode 群聊慢 + 桌面 UI 打磨 | 2026-08-23 | ~1 个月 | OPEN, P2 | 评论活跃但无 fix PR |
| **PR #92122** 为 .desktop Exec 解析可用的 Hermes 解释器 | 2026-08-22 | ~1 个月 | OPEN, P3, `needs-decision` | Linux 启动器静默失败 |
| **#94858** 父智能体对已完成子智能体重试循环 | 2026-08-25 | ~1 个月 | OPEN, P2 | 无 fix PR |
| **#103969** 不完整工具调用载荷的两处可靠性缺口 | 2026-09-06 | ~2 周 | OPEN, P2 | 涉及非流式/流式路径不对称 |

**积压综述**：待合并 PR 高达 42 条，而今日新开 Issue 中多条在数小时内即获得对应 PR，说明"提交侧"反应迅速；瓶颈在**评审与决策侧**（多条 `needs-decision`）。建议对 `needs-decision` 标签条目设定决策时限，避免修复就绪但无人拍板的情况持续扩大。

---

*数据来源：Hermes Agent (github.com/nousresearch/hermes-agent) GitHub 公开数据，统计区间 2026-09-20 至 2026-09-21。所有条目信息均来自所提供数据，未作外部补充。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-09-21）

## 1. 今日速览

过去 24 小时项目无新版本发布，共更新 4 条 Issue（3 条新开/活跃、1 条关闭）与 6 条 PR（3 条待合并、3 条已合并/关闭），整体活跃度中等偏低。今日可见的活动以 stale 标记的长期 Issue/PR 为主，新增实质推进有限：关闭的 Issue #3369 与合并的 PR #3383 是仅有的两项确认进展。值得注意的信号是出现了一条由 AI 智能体误提交到错误仓库的 PR（#3384），当天即被关闭。核心稳定性话题（Web UI 输入卡顿、IRC 长消息）仍处于开放状态，未见对应修复 PR。

## 2. 版本发布

今日无新版本发布，无破坏性变更或迁移事项。

## 3. 项目进展

今日合并/关闭 3 条 PR，实际推进如下：

- **PR #3383 [CLOSED]** docs: v0.11.0 sprint plan — agentic web3, module trust, ACP/mesh depth
  新增 `docs/design/v0.11.0-sprint.md`，作为 v0.11.0 冲刺（Tracks 67–75）的持久设计记录，内容涵盖排序 DAG、决策、各 track 的文件映射、实现期验证清单与风险登记；同时更新 `.todo.md` 记录 v0.11.0 进行中事项。该 PR 已于 2026-09-20 关闭。
  链接: sipeed/picoclaw PR #3383
- **Issue #3369 [CLOSED]** [Feature] Add OpenCode Go session header support
  该功能请求于 2026-09-20 关闭，作者 w33ble，👍 2。请求内容为 OpenCode Go 请求需要携带与当前会话关联的 `x-opencode-session` 头（仅适用于 OpenCode Go，不适用于标准 OpenCode Zen），且指出 PicoClaw 已跟踪 session ID。关闭的具体方式（实现或拒绝）在所给数据中未说明。
  链接: sipeed/picoclaw Issue #3369
- **PR #3384 [CLOSED]** Misplaced PR, please ignore.
  当天创建当天关闭，作者自述为 AI 智能体误发到错误仓库，无代码价值。
  链接: sipeed/picoclaw PR #3384

整体来看，今日项目向前推进幅度较小：一条设计文档类 PR 落地，一条功能请求关闭，尚无面向用户的运行时功能变更。

## 4. 社区热点

按评论数与反应数排序，今日讨论集中在以下条目：

- **Issue #3281 [OPEN] [stale] [BUG] Web UI chat input is very laggy when history has a little bit long** — 评论 13，👍 2，作者 xpader
  链接: sipeed/picoclaw Issue #3281
- **Issue #3287 [OPEN] [stale] [Feature] Better support long messages in IRC** — 评论 13，作者 superuser-does
  链接: sipeed/picoclaw Issue #3287
- **Issue #3366 [OPEN] [stale] [Feature] Add support for OpenAI compatible providers** — 评论 4，作者 ItachiSan
  链接: sipeed/picoclaw Issue #3366

诉求分析：讨论热度最高的两条分别指向**前端性能体验**（Web UI 会话历史变长后输入卡顿）与**协议边界处理**（IRC 512 字节限制与换行导致的单条消息被拆散）。两者都属于「日常使用中持续摩擦」的问题，因此能积累较多评论；#3366 则反映用户希望接入自托管路由（如 9Router）以摆脱对固定供应商的依赖。值得注意的是，#3281 与 #3287 均已被打上 stale 标记，说明长期缺乏维护响应，但社区讨论并未完全停止。

## 5. Bug 与稳定性

今日未见崩溃或回归类新报，唯一明确 Bug 如下：

- **[中高] Web UI 输入卡顿（Issue #3281，OPEN，stale）**
  影响版本 0.3.1，环境 Go 1.25.11，渠道为 PicoClaw Web。复现路径：打开 Web UI 会话 → 在单个会话中累积较多聊天历史 → 持续输入时出现明显延迟。该问题已有 13 条评论、2 个赞，用户关注度较高。
  是否已有 fix PR：**否**，所给数据中未见对应修复 PR。
  链接: sipeed/picoclaw Issue #3281

其余今日更新条目均为功能请求类，不构成稳定性风险。

## 6. 功能请求与路线图信号

- **OpenAI 兼容 provider（Issue #3366，OPEN，stale，评论 4）**
  请求新增名为 "OpenAI Compatible" 的自定义 provider，以接入自托管路由（如 9Router）。目前**无对应 PR**，短期内纳入下一版本的可能性取决于维护者对自定义 provider 架构的取舍。
  链接: sipeed/picoclaw Issue #3366
- **IRC 长消息合并（Issue #3287，OPEN，stale，评论 13）**
  已有对应实现 PR：**#3354 [OPEN] feat(irc): assemble IRCv3 multiline messages**（作者 linhongyu510，2026-08-31 创建，2026-09-21 更新）。该 PR 默认请求 `batch`、`message-tags`、`draft/multiline`，使长消息或多行 IRC 消息以单条完整入站消息的形式到达 PicoClaw。Issue 与 PR 同步存在，是当前**最接近落地**的功能项。
  链接: sipeed/picoclaw Issue #3287 ｜ sipeed/picoclaw PR #3354
- **OpenCode Go session header（Issue #3369，已关闭，👍 2）**
  该请求已关闭，不再处于路线图候选状态。
  链接: sipeed/picoclaw Issue #3369

## 7. 用户反馈摘要

- **痛点一：长会话下 Web UI 响应退化。** 用户 xpader 在 Issue #3281 中给出可稳定复现的步骤（打开会话 → 累积历史 → 持续输入），说明问题与历史长度正相关，属于随使用时间增长而恶化的体验缺陷。
- **痛点二：IRC 协议限制破坏消息完整性。** 用户 superuser-does 在 Issue #3287 中指出 IRC 默认 512 字节上限且换行即代表新消息，超过限制的内容会被拆分，期望 PicoClaw 将 IRCv3 长消息视为单一的、连贯的消息。这是典型的多渠道接入场景需求。
- **痛点三：供应商锁定与自托管诉求。** 用户 ItachiSan 在 Issue #3366 中明确希望添加自定义 OpenAI 兼容 provider，以便接入 9Router 等自托管路由器。
- **满意度信号：** Issue #3281 与 #3369 各自获得 2 个 👍，说明这两项诉求并非孤例，存在一定规模的共鸣用户。

## 8. 待处理积压

以下条目已带 stale 标记且长期未闭环，建议维护者优先关注：

- **Issue #3281**（创建 2026-07-21，更新 2026-09-21，已积压约 2 个月，13 条评论）：Web UI 输入卡顿，用户可复现、关注度高，但**无 fix PR**，是当前最应优先排期的体验类问题。
  链接: sipeed/picoclaw Issue #3281
- **Issue #3287 + PR #3354**（Issue 创建 2026-07-22；PR 创建 2026-08-31，更新 2026-09-21）：IRC 多行长消息支持，已有实现 PR 但仍在待合并状态，建议尽快评审以避免 PR 长期挂起。
  链接: sipeed/picoclaw Issue #3287 ｜ sipeed/picoclaw PR #3354
- **PR #3378**（创建 2026-09-12，更新 2026-09-20，stale，OPEN）：fix(auth): RefreshAccessToken 中改用已配置 scopes，替换硬编码的 `"openid profile email"`，避免覆盖 `OAuthProviderConfig.Scopes` 中的 provider 专属 scope。属认证正确性修复，建议优先评审。
  链接: sipeed/picoclaw PR #3378
- **PR #3353**（创建 2026-08-31，更新 2026-09-20，OPEN）：fix(channels): 限制 tool feedback 动画，超出五分钟即停止，与 Telegram typing feedback 的既有生命周期上限保持一致，防止遗漏的生命周期清理导致频道消息被无限编辑。已积压约 3 周。
  链接: sipeed/picoclaw PR #3353
- **Issue #3366**（创建 2026-09-04，更新 2026-09-20，stale，4 条评论）：OpenAI 兼容 provider 需求，尚无 PR，建议维护者给出明确的采纳或拒绝结论以回应社区。
  链接: sipeed/picoclaw Issue #3366

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-21

## 1. 今日速览

过去 24 小时 NanoClaw 的活跃度集中在代码合并侧：共 38 条 PR 被合并或关闭，另有 6 条待合并，显示维护节奏较高。Issues 侧相对平静，仅 1 条新开且未解决的 Bug（#3858，WhatsApp 适配器无法向 Agent 传递发送者显示名）。今日无新版本发布，说明本轮合并尚未打包为 release。从积压清理角度看，多条自 2026 年 3–5 月开启的老 PR 在今日被集中关闭，是一次明显的积压处理动作。整体健康度判断：合并吞吐强劲，但需关注被关闭 PR 的实际落地效果与新 Bug 的修复跟进。

## 2. 版本发布

今日无新版本发布，最新 Releases 列表为空，暂无破坏性变更或迁移注意事项可报告。

## 3. 项目进展

今日合并/关闭的 38 条 PR 中，以下条目所描述的工作被推进（以下均为已关闭/已合并状态，具体合入形态以仓库为准）：

- **#2328** [CLOSED] `fix: default reply destination to message origin in multi-destination groups` — 修复多目标群组中默认回复目标应回到消息来源的问题。🔗 nanocoai/nanoclaw PR #2328
- **#2327** [CLOSED] `fix: inject destination reminder after SDK auto-compaction` — 在 SDK 自动压缩上下文后重新注入目标提醒，缓解路由信息丢失。🔗 nanocoai/nanoclaw PR #2327
- **#746** [CLOSED] `fix(whatsapp): prevent service restart hammering on auth failure` — 修复 WhatsApp 鉴权失败时服务反复重启的问题（关联 #748）。🔗 nanocoai/nanoclaw PR #746
- **#706** [CLOSED] `feat(skills): add icloud-tools skill (CalDAV/CardDAV/IMAP/SMTP)` — 新增 iCloud 工具技能包，扩展个人助理类集成能力。🔗 nanocoai/nanoclaw PR #706
- **#2565** [CLOSED] `fix(whatsapp): detect group @-mentions via contextInfo.mentionedJid` — 通过 `contextInfo.mentionedJid` 检测群内 @ 提及。🔗 nanocoai/nanoclaw PR #2565
- **#2402** [CLOSED] `fix(ci): workflows no-op after repo rename — update repository guards` — 修复仓库改名后 CI 工作流变为空操作的问题。🔗 nanocoai/nanoclaw PR #2402
- **#2309** [CLOSED] `fix(skills): replace sqlite3 CLI with in-tree better-sqlite3 wrapper` — 用仓库内 `better-sqlite3` 封装替代外部 sqlite3 CLI，降低环境依赖。🔗 nanocoai/nanoclaw PR #2309
- **#2265** [CLOSED] `fix(channels): support display cards (send_card) in Chat SDK bridge` — 让 `send_card` MCP 工具在 Chat SDK 桥接层不再静默失效。🔗 nanocoai/nanoclaw PR #2265
- **#2152** [CLOSED] `fix(opencode): kill server process group + configurable IDLE_TIMEOUT_MS` — 修复 opencode 服务进程组清理，并支持可配置空闲超时。🔗 nanocoai/nanoclaw PR #2152

进度评估：本轮合并覆盖面较广，涉及 WhatsApp 通道健壮性、多目标群组路由、CI 修复、技能与工具链依赖收敛。项目在**通道可靠性与路由正确性**方向上向前迈进了一步，同时完成了一批跨越 6 个月的老 PR 清理。

## 4. 社区热点

今日所提供的 44 条 PR 数据中，所有条目的评论数均显示为 `undefined`（数据缺失），👍 均为 0，因此无法基于评论数/反应数进行真实排序，以下按状态与主题相关性列出值得关注的条目：

- **#3859** [OPEN] `fix(whatsapp): implement resolveChannelName so registration cards can name a group`（作者 IamAdamJowett，创建/更新 2026-09-21）——与今日新 Bug #3858 同属 WhatsApp 群组身份识别主题，说明该痛点在社区中正被多方响应。🔗 nanocoai/nanoclaw PR #3859
- **#3420** [OPEN] [core-team] `fix(add-macos-statusbar): make Swift code and plist labels slug-aware`（作者 gavrielc）——涉及 macOS 状态栏与 install slug 标签迁移，属团队核心范畴。🔗 nanocoai/nanoclaw PR #3420
- **#3311** [OPEN] `fix(agent-runner): route scheduled-task errors to the operator`（关联 #3223）——把定时任务错误上报给运维方，针对错误被误写为 `chat` 消息的问题。🔗 nanocoai/nanoclaw PR #3311

诉求分析：热度信号集中于“**通道身份可辨识性**”与“**错误/状态可见性**”两类基础体验问题，而非新功能扩张。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — Agent 无法识别 WhatsApp 群成员显示名**（#3858，OPEN，triage/unresolved，kind/bug）
   - 现象：在 WhatsApp 群中，Agent 无法按名字区分参与者，每条入站消息只携带 JID 到达模型。
   - 环境：NanoClaw v2.3.0，main `7902716b`，channels `224827b9`，Linux。
   - 报告人：glifocat，创建 2026-09-20，0 评论，0 👍。
   - 修复状态：**已有相关 PR #3859**（implement `resolveChannelName`），但 #3859 描述聚焦于“未知通道注册卡片命名群组”，与 #3858 的发送者显示名问题是否完全覆盖尚不明确，#3858 本身仍为未解决状态。
   - 🔗 nanocoai/nanoclaw Issue #3858

今日无其他新报告 Bug、崩溃或回归。注意：多条已关闭 PR（如 #746、#2565）均属 WhatsApp 稳定性修复，表明该通道历史上是稳定性问题的集中区域。

## 6. 功能请求与路线图信号

今日数据中未出现明确的用户新功能请求类 Issue（唯一 Issue 为 Bug 类）。可从待合并 PR 推断可能进入下一版本的方向：

- **通道名称解析能力**：#3859 若合入，将让注册卡片能正确命名 WhatsApp 群组，属于通道适配器接口（`resolveChannelName`）的能力补齐。🔗 nanocoai/nanoclaw PR #3859
- **安装/环境兼容性**：#3273 `fix(setup): detect package manager in install-node.sh`（Closes #2462）——修复非 Debian Linux（如 Fedora）上的安装失败，扩展支持平台。🔗 nanocoai/nanoclaw PR #3273
- **定时任务错误可见性**：#3311 将定时任务错误路由给运维方。🔗 nanocoai/nanoclaw PR #3311
- **重启构建优化**：#3286 `Skip image rebuild in restart when no packages configured`（Fixes #2701）——避免在无 `packages_apt`/`packages_npm` 配置时无条件重建镜像。🔗 nanocoai/nanoclaw PR #3286
- **provider 稳定性**：#3463 opencode provider 回退到 `message.part.delta` 文本（Fixes #2985），修复时序竞态导致的文本丢失。🔗 nanocoai/nanoclaw PR #3463

以上均为推测性方向，不由数据直接确认是否纳入具体版本。

## 7. 用户反馈摘要

- **WhatsApp 群组场景是核心使用场景，也是痛点最集中处**：#3858 报告人以 Linux + v2.3.0 在真实群聊中反馈“每个入站消息到达模型时都无法按名字区分参与者”，本质是该通道只传 JID 不传显示名。🔗 nanocoai/nanoclaw Issue #3858
- **历史修复印证同一链路问题反复出现**：群内 @ 提及检测（#2565）、多目标群组默认回复目标（#2328）、鉴权失败导致的重启风暴（#746）等已关闭 PR，均指向 WhatsApp 群聊交互的多次打磨。
- **安装体验存在平台差异问题**：#3273 描述 `setup/install-node.sh` 的 Linux 分支无条件使用 Debian 专属 NodeSource 脚本并调用 `apt-get`，在非 Debian 发行版上失败（Closes #2462），属真实用户环境受阻。
- **定时任务异常对用户不可见**：#3311 指出定时任务回合抛错时，错误被写成携带批次路由字段的 `chat` 消息，而任务批次本设计为无路由字段，导致错误去向错误。🔗 nanocoai/nanoclaw PR #3311

满意度信号：Issue #3858 摘要未包含评论，其余条目评论数缺失，无法量化满意度。

## 8. 待处理积压

以下 PR 长期处于 OPEN 状态，且今日仍有更新（2026-09-21 或 2026-09-20），建议维护者优先处理：

| PR | 主题 | 创建日期 | 已开启时长（至 2026-09-21） |
|---|---|---|---|
| [#3286](https://github.com/nanocoai/nanoclaw/pull/3286) | 无包配置时跳过重启镜像重建（Fixes #2701） | 2026-08-17 | 约 5 周 |
| [#3273](https://github.com/nanocoai/nanoclaw/pull/3273) | install-node.sh 包管理器探测（Closes #2462） | 2026-08-16 | 约 5 周 |
| [#3311](https://github.com/nanocoai/nanoclaw/pull/3311) | 定时任务错误路由给运维方（Fixes #3223） | 2026-08-18 | 约 5 周 |
| [#3420](https://github.com/nanocoai/nanoclaw/pull/3420) | macOS 状态栏 Swift/plist 标签 slug 化（Stacked on #3408） | 2026-08-20 | 约 4.5 周 |
| [#3463](https://github.com/nanocoai/nanoclaw/pull/3463) | opencode provider 回退 message.part.delta（Fixes #2985） | 2026-08-23 | 约 4 周 |

更早的积压提示（虽已关闭但曾长期挂起，可作为流程观察）：#746（2026-03-05 创建，约 6.5 个月后关闭）、#706（2026-03-04 创建，约 6.5 个月后关闭）、#2328 / #2327（2026-05-07 创建，约 4.5 个月后关闭）。这些条目在今日集中关闭，说明积压清理机制在运作，但也提示 PR 平均滞留时间偏长。

**另需关注**：新 Issue **#3858**（2026-09-20 创建）目前仍为 `triage/unresolved` 且 0 评论，尚无明确分诊结论，建议尽快确认 #3859 是否为其修复方案并建立关联。🔗 nanocoai/nanoclaw Issue #3858

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-09-21

## 1. 今日速览

NullClaw 今日活跃度处于低位：过去 24 小时仅 1 条 Issue 更新，无 PR 活动、无新版本发布。唯一的动态是 Issue #1000 新开，反馈 Ollama 在不支持工具调用（tools）的模型上仅输出无描述的 adapter error。整体来看，项目今日处于维护静默期，无代码合并或发布推进，社区输入仍以缺陷/体验改进类反馈为主。

## 2. 版本发布

今日无新版本发布，此部分省略。

## 3. 项目进展

今日无合并或关闭的 PR，待合并 PR 数量为 0，项目在代码层面无可见推进。

## 4. 社区热点

今日唯一活跃条目：**[Issue #1000 [OPEN] [enhancement] ollama incompatibility notification](nullclaw/nullclaw Issue #1000)**
- 作者：aaafgcfg｜创建：2026-09-20｜更新：2026-09-20｜评论：1｜👍：0

这是今日评论数与反应数最高的条目（也是唯一一条）。诉求集中在两点：一是当 Ollama 模型不支持 tools 时，应给出明确的提示通知；二是当前仅抛出无描述的 adapter error，用户需要借助 Wireshark 抓包才能定位问题。该 Issue 本质上是可观测性与错误提示的改进请求，反映出用户在与本地模型（Ollama）集成时缺乏足够的诊断信息。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题 | 状态 |
| --- | --- | --- |
| 中 | [Issue #1000](nullclaw/nullclaw Issue #1000)：Ollama 模型不支持 tools 时仅输出无描述的 adapter error，用户难以判断失败原因 | OPEN，无 fix PR |

该问题不涉及崩溃或回归，但属于错误信息缺失导致的可用性下降；今日无对应修复 PR。

## 6. 功能请求与路线图信号

今日提出 1 项功能请求，标记为 `enhancement`：

- **[Issue #1000](nullclaw/nullclaw Issue #1000)**：在 Ollama 模型不支持工具调用时增加不兼容性通知（notification）。

由于今日无任何 PR 活动，无法从现有 PR 判断该请求是否会被纳入下一版本。从实现成本看，该需求聚焦于错误提示文案与能力检测前置，属于较小的改动面，但缺乏维护者回应与关联 PR，暂不宜判定其排期。

## 7. 用户反馈摘要

来自 Issue #1000 的反馈要点：

- **痛点**：Ollama 模型不支持 tools 时，错误输出为 "adapter error"，缺少描述性信息。
- **使用场景**：用户将 NullClaw 与 Ollama 本地模型配合使用，涉及工具调用能力。
- **满意度**：对该失败路径的体验不满意，明确指出"很难理解为什么不工作"。
- **额外信号**：用户通过 Wireshark 抓包自行排查，说明现有日志/报错不足以支撑自助诊断。

今日无其他 Issues 评论可供提炼。

## 8. 待处理积压

今日数据未提供长期未响应的 Issue 或 PR 列表，且 PR 队列为空（待合并 0），无法据此识别积压项。唯一需维护者关注的是 [Issue #1000](nullclaw/nullclaw Issue #1000)，其仅有 1 条评论、尚无关联 PR，建议评估是否补充能力检测与提示文案。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-21

## 1. 今日速览

今日 IronClaw 仓库活跃度集中在**依赖维护与发布流程**，共 8 条 PR 更新（4 条待合并、4 条已合并/关闭），Issues 零变动，无新版本发布。已关闭的 PR 中包含一次 1.4.1-rc.1 的版本切分（#8105）和一项影响扩展激活的修复（#8102），后者指向 Google OAuth 配置路径的真实缺陷。4 条待合并 PR 全部为 dependabot 依赖升级，其中 #8104 单次涉及 29 个 Rust 包，规模较大。整体看，项目今日处于**维护性节奏而非功能推进期**，健康度正常但需关注依赖更新的合并积压。

## 2. 版本发布

今日无新版本发布（Releases 数量为 0）。

需要注意的是，PR #8105 已关闭，其内容为将 `ironclaw` 包版本切分至 **1.4.1-rc.1**，以便 Cut Ironclaw Release 工作流在合并提交上打 `ironclaw-v1.4.1-rc.1` 标签。摘要显示 `cut_ironclaw_release.py` 会拒绝候选 manifest 版本不一致的标签。这表明 **1.4.1-rc.1 的发布流程正在推进中**，但今日尚未产出正式 Release 条目，具体变更内容与破坏性影响暂无法从所给材料中确认。

## 3. 项目进展

今日合并/关闭的 4 条 PR：

- **[CLOSED] #8105** — `chore(release): cut 1.4.1-rc.1`（henrypark133）
  将发布包版本定版为 1.4.1-rc.1，为正式标签打点做准备。
  https://github.com/nearai/ironclaw/pull/8105

- **[CLOSED] #8102** — `fix(extensions): resolve provider-instance readiness live, administrator configuration first`（henrypark133）
  修复 Gmail / Google Calendar 在任何**通过 Web UI（管理员配置）而非环境变量配置 Google OAuth 客户端**的部署上无法激活的问题——OAuth 流程可端到端完成（授权等），但激活环节失败。这是一项面向真实部署场景的可用性修复。
  https://github.com/nearai/ironclaw/pull/8102

- **[CLOSED] #8099** — `chore(deps): bump the everything-else group ... with 25 updates`（dependabot）
  包含 `uuid` 1.24.0 → 1.26.1、`base64` 等 25 项更新。
  https://github.com/nearai/ironclaw/pull/8099

- **[CLOSED] #8079** — `chore(deps): bump the actions group ... with 6 updates`（dependabot）
  包含 `anthropics/claude-code-action` 1.0.183 → 1.0.221、`actions/setup-node` 等 6 项更新。
  https://github.com/nearai/ironclaw/pull/8079

**总体判断**：项目今日的实质推进来自 #8102 的扩展激活修复与 #8105 的发布定版，其余为依赖例行清理。功能层面无新增能力落地。

## 4. 社区热点

今日所有 PR 的评论数与 👍 均为 `undefined` / 0，**无可识别的讨论热点或高反应条目**。Issues 零更新，因此不存在评论活跃的 Issue 线程。

间接值得留意的是 #8102，其摘要描述的故障场景（管理员经 Web UI 配置 Google OAuth 后扩展无法激活）通常是用户会集中反馈的痛点类型，但当前数据中未见对应的 Issue 讨论。
https://github.com/nearai/ironclaw/pull/8102

## 5. Bug 与稳定性

今日无新增 Issue，未报告新的崩溃或回归。已知并已修复的缺陷一项：

| 严重程度 | 问题 | 状态 |
| --- | --- | --- |
| 中（功能不可用，非崩溃） | Gmail / Google Calendar 在通过 Web UI 管理员配置 Google OAuth 客户端的部署上无法激活 | 已有 fix，PR #8102 已关闭 |

https://github.com/nearai/ironclaw/pull/8102

该问题影响特定配置路径下的扩展可用性，不涉及数据安全或服务崩溃，且修复已在今日关闭的 PR 中落地。

## 6. 功能请求与路线图信号

今日**无用户提出的新功能请求**（Issues 为 0）。结合已有 PR，可观察到的路线图信号仅有：

- **发布节奏**：1.4.1-rc.1 的候选版本切分（#8105）已在流程中，暗示下一个补丁版本临近。
- **依赖现代化**：待合并的 #8104（29 项）、#8103（GitHub Actions 8 项，含 `anthropics/claude-code-action` 1.0.183 → 1.0.228）、#8078（tokio 生态 2 项）、#7834（wasm 组 4 项，含 `wasmtime`、`wit-component`）显示维护者持续跟进工具链与运行时依赖，其中 wasm 组的更新可能影响扩展沙箱运行时，但所给材料未提供具体版本号与变更细节。

所给材料不足以判断任何新功能会被纳入下一版本。

## 7. 用户反馈摘要

今日 Issues 为 0 条，**无评论可提炼**，因此没有直接的用户原声、使用场景或满意度表达。

唯一间接反映用户使用路径的信号来自 #8102：存在一类用户/运维者通过 **Web UI 管理员配置**（而非环境变量）设置 Google OAuth 客户端的部署方式，这一路径此前未被正确处理。

## 8. 待处理积压

以下 PR 长期处于 OPEN 状态且今日仍有更新，建议维护者优先处理，避免依赖债累积：

- **#7834 [OPEN]** — `bump the wasm group ... with 4 updates`
  自 **2026-08-23** 创建，已开放约 **29 天**，今日（09-20）有更新。标签为 `size: L, risk: medium, scope: dependencies, contributor: experienced`，涉及 `wasmtime`、`wasmtime-wasi`、`wit-component`，属于风险与体量较高的依赖组，可能因需要兼容性验证而滞留。
  https://github.com/nearai/ironclaw/pull/7834

- **#8078 [OPEN]** — `bump the tokio-ecosystem group ... with 2 updates`
  自 **2026-09-06** 创建，已开放约 **15 天**，今日有更新。涉及 `tower-http` 0.7.0 → 0.7.1、`tokio-tungstenite`。
  https://github.com/nearai/ironclaw/pull/8078

- **#8104 [OPEN]** — `bump the everything-else group ... with 29 updates`
  创建于 2026-09-20，单批 29 项更新，体量偏大，建议尽早评估以避免与后续批次冲突（其前一版 #8099 已关闭，说明同类批次通常可顺利合并）。
  https://github.com/nearai/ironclaw/pull/8104

- **#8103 [OPEN]** — `bump the actions group ... with 8 updates`
  创建于 2026-09-20，含 `anthropics/claude-code-action` 1.0.183 → 1.0.228 与 `actions/setup-node` 等 CI 相关更新。
  https://github.com/nearai/ironclaw/pull/8103

**积压特征小结**：当前积压全部为 dependabot 自动生成的依赖 PR，无人工提出的 Issue 或功能 PR 滞留。主要风险集中在 #7834 的 wasm 依赖组（长期未合并）和 #8104 的批量规模。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-21

## 1. 今日速览

今日项目呈**高强度维护状态**：24 小时内 19 条 PR 更新，其中 16 条已合并/关闭，3 条待合并，净推进力度显著。合并内容主要集中在 OpenClaw 网关启动健壮性修复（遗留凭据/身份冲突/Windows 进程退出）与浏览器凭据安全存储。单日发布 4 个版本（2026.9.14 / 9.15 / 9.17 / 9.20），表明此前积压的兼容性修复正被快速打包出货。Issues 侧仅 2 条更新且均为开启状态，新增 1 条关于"免重启切换工作区"的功能请求，社区压力不大但指向明确。整体健康度良好，风险集中在 OpenClaw 升级后的迁移路径。

## 2. 版本发布

**2026.9.20**（最新）
- 子智能体会话可见性（PR #2703）
- 应用内 agent 浏览器支持 passkey/WebAuthn（PR #2723）
- 定时任务相关更新（描述被截断）

**2026.9.17**
- OpenClaw 启动修复前迁移共享状态 schema（PR #2689）
- 修复快照回滚与 agent 媒体迁移处理（PR #2693 等）

**2026.9.15**
- OpenClaw 兼容性修复（PR #2683）
- xAI 认证凭据迁移至规范的 SQLite 存储（PR #2675）

**2026.9.14**
- 升级 OpenClaw 至 v2026.8.1，改进工件工作流（PR #2665）
- 支持 Markdown 编辑（PR #2659）

**迁移注意事项**：9.14 起的多个版本均围绕 OpenClaw v2026.8.1 的兼容迁移展开，涉及状态 schema、认证凭据存储、遗留凭据文件清理。数据来自旧版本（含 Windows 卸载重装保留 `%APPDATA%\LobsterAI` 的场景）升级时存在启动失败风险，相关修复已在 #2719、#2734、#2735 中处理。发布说明中未明确标注破坏性变更。

## 3. 项目进展

今日合并/关闭的高价值 PR：

- **#2734** 迁移遗留 `credentials/openclaw-weixin[-<account>]-allowFrom.json` 文件，OpenClaw 2026.8.1 在文件未解析时拒绝网关就绪，且重启与一键修复均无法清除。直接解决网关无法启动问题。
- **#2735** 修复 SQLite 设备身份与遗留 `identity/device.json` 冲突导致的启动/一键修复失败，避免启动中断。
- **#2729** 修复 Windows 网关重启与一键修复误报 `did not exit after SIGKILL`，改为等待进程确认终止。
- **#2719** 修复旧版本数据升级后每次启动均失败的问题（三处独立成因），覆盖 Windows 卸载重装场景。
- **#2736** 浏览器凭据存储改为显式请求 OS 安全存储访问，仅在用户选择加入时校验系统钥匙串，并持久化最近可用状态。
- **#2737** 恢复原生定时任务与飞书投递，修复 IM 请求（如"两分钟后提醒我喝水"）无法使用原生调度工具的问题。
- **#2730** 更新器支持可选定向更新候选，在保留既有更新检查的前提下允许登录会话接收更新的候选版本。
- **#2731** 修复 `nsp-clawguard 2.5.0` 原生 ESM 加载崩溃（补齐 `__filename`/`__dirname`），此前网关会在 ready 后退出 1 并反复重启。
- **#2704 / #2733** 解决 macOS 上 `os.tmpdir()` 符号链接（`/var` → `/private/var`）导致 4 个测试文件本地失败、Linux CI 通过的问题。

**整体推进评估**：今日工作量的主体是 OpenClaw v2026.8.1 升级后的"收尾清理"——迁移遗留文件、修复身份冲突、修复跨平台启动失败。属于稳定性债务偿还而非新功能扩张，对项目健康度是正向信号，但连续 4 个版本密集发布也说明升级引入的回归面较宽。

## 4. 社区热点

今日数据中所有 PR 的评论数均为 `undefined`、👍 均为 0，Issues 👍 均为 0，**无高热度讨论项**。相对值得注意的是：

- **[Issue #2738](https://github.com/netease-youdao/LobsterAI/issues/2738)**（OPEN，1 条评论）— 支持不重启网关切换工作区。创建与更新均在今日，是唯一的新增活跃议题。
- **[Issue #989](https://github.com/netease-youdao/LobsterAI/issues/989)**（OPEN，stale，1 条评论）— Tavily MCP 不可用，报 401 未授权，用户称 api-key 已配置。该 Issue 自 2026-03-27 创建，今日被更新，属于 stale 状态下的再次活跃。

**诉求分析**：两条 Issue 分别指向"启动/切换成本"与"第三方集成授权"，都是影响日常使用流畅度的体验类问题，而非核心功能缺失。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | 旧版本数据升级后**每次启动均失败**（含 Windows 卸载重装）— [#2719](https://github.com/netease-youdao/LobsterAI/pull/2719) | 已关闭，含修复 |
| 高 | 遗留 weixin `allowFrom` 文件阻塞网关启动，重启/一键修复均无法清除 — [#2734](https://github.com/netease-youdao/LobsterAI/pull/2734) | 已关闭，含修复 |
| 高 | SQLite 设备身份与遗留 `identity/device.json` 冲突导致启动失败 — [#2735](https://github.com/netease-youdao/LobsterAI/pull/2735) | 已关闭，含修复 |
| 高 | `nsp-clawguard 2.5.0` ESM 启动崩溃，网关 ready 后退出 1 并反复重启 — [#2731](https://github.com/netease-youdao/LobsterAI/pull/2731) | 已关闭，含修复 |
| 中 | Windows 网关重启/一键修复误报 `did not exit after SIGKILL` — [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729) | 已关闭，含修复 |
| 中 | macOS 本地测试因 tmpdir 符号链接失败（4 个文件） — [#2704](https://github.com/netease-youdao/LobsterAI/pull/2704) / [#2733](https://github.com/netease-youdao/LobsterAI/pull/2733) | 已关闭，含修复 |
| 中 | Tavily MCP 401 未授权，api-key 已配置 — [Issue #989](https://github.com/netease-youdao/LobsterAI/issues/989) | **未修复**，仍 OPEN（stale） |
| 低 | OpenClaw 心跳事件自动创建 `[OpenClaw]` Cowork 会话 — [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) | 已关闭 |

今日报告的严重问题**均已附带 fix PR 并关闭**，唯一未解决项是 #989 的第三方 MCP 授权报错。

## 6. 功能请求与路线图信号

- **免重启切换工作区**（[Issue #2738](https://github.com/netease-youdao/LobsterAI/issues/2738)）：用户因本机性能有限，网关启动耗时超 10 秒，频繁切换体验差。这是今日唯一的新功能请求，且直指今日大量 PR 所修复的"网关启动"这一共同瓶颈——启动路径优化已是维护重灾区，该请求与当前技术方向一致。**判断：有较大概率被纳入后续版本讨论**，但需架构层面支持运行时工作区切换，非小改动。
- **浏览器 passkey/WebAuthn 支持**（[PR #2723](https://github.com/netease-youdao/LobsterAI/pull/2723)，已随 9.20 发布）：属能力扩展，非用户请求驱动。
- **子智能体会话可见性**（[PR #2703](https://github.com/netease-youdao/LobsterAI/pull/2703)，已随 9.20 发布）：增强多智能体可观测性。
- **Markdown 编辑**（[PR #2659](https://github.com/netease-youdao/LobsterAI/pull/2659)，已随 9.14 发布）。

## 7. 用户反馈摘要

- **启动性能是核心痛点**：#2738 用户明确指出网关启动超 10 秒，且每次切换工作区都需重启，频繁操作体验差。这与此前多个版本反复修复"启动失败/就绪被拒"的问题形成呼应，说明启动链路既是稳定性薄弱点，也是体验瓶颈。
- **第三方集成配置困惑**：#989 用户已配置 Tavily MCP 的 api-key 但仍报 401，反映授权流程或密钥读取路径可能存在不透明之处，用户难以自行定位。该问题自 3 月挂起至今，今日被更新但无解决迹象。
- 今日数据中未出现对已发布功能的明确满意/不满意评价，PR 评论数均为 `undefined`，缺乏可提炼的定性反馈。

## 8. 待处理积压

维护者应重点关注以下长期未响应项：

- **[Issue #989](https://github.com/netease-youdao/LobsterAI/issues/989)** `[stale]` Tavily MCP 不可用（401）— 创建于 2026-03-27，距今近 6 个月，仍为 OPEN，今日有更新但无修复。属第三方集成类问题，长期挂起影响用户信任。
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** `[OPEN]` dependabot 升级 electron 与 electron-builder — 创建于 2026-04-02，积压近 6 个月，是 3 条待合并 PR 之一。依赖长期未更新可能带来安全与兼容风险。
- **[PR #998](https://github.com/netease-youdao/LobsterAI/pull/998)** `[stale]` 选中文本浮动工具栏 — 创建于 2026-03-28，今日被关闭（stale）。功能提案（复制/引用/解释/翻译的快捷入口）本身有明确用户价值，值得确认是否为有意放弃。
- **[PR #999](https://github.com/netease-youdao/LobsterAI/pull/999)** `[stale]` Cmd+K 命令面板 — 创建于 2026-03-28，今日被关闭（stale）。同样属于体验类增强，键盘用户诉求清晰。
- **[PR #1067](https://github.com/netease-youdao/LobsterAI/pull/1067)** 停止为 main agent 心跳自动创建 `[OpenClaw]` 会话 — 创建于 2026-03-30，今日被关闭（stale）。

**积压提醒**：今日关闭的 stale PR 多为 3 月底创建的社区贡献，其中 #998、#999 是具备完整设计说明的功能提案。若因陈旧而被批量关闭而非评审后决定，建议维护者明确标注取舍理由，避免挫伤贡献者积极性。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-09-21）

## 1. 今日速览

今日 Moltis 项目活跃度中等，全部动态集中在语音（TTS）能力与工具配置两个方向。过去 24 小时内共有 2 条 Issue 更新（1 开 1 关）与 2 条 PR 更新，且 2 条 PR 均处于待合并状态，未产生任何合并或关闭。值得注意的是，新开的 Issue #1282 与已关闭的 Issue #1281 标题、摘要完全一致，且同一作者当日提交了对应实现 PR #1283，形成"重复工单 + 当日提 PR"的闭环模式，维护者需先确认工单去重策略。当日无新版本发布。整体看，项目处于"社区主动贡献、维护者待响应"的状态，健康度取决于这两条 PR 的评审速度。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目主线代码未发生实际推进。两条待合并 PR 分别代表两个潜在进展方向：

- **PR #1283 [OPEN]** feat(voice): add VoxCPM as a local TTS provider（作者 Caldalis）
  链接：moltis-org/moltis PR #1283
  摘要显示其将 VoxCPM（OpenBMB/VoxCPM，Apache-2.0，2B 参数，30 种语言，48 kHz）作为本地 TTS 提供方接入，通过 vLLM-Omni 的 OpenAI 兼容接口提供服务。该 PR 摘要中写有 "Closes #NNNN"，占位符未替换为真实 Issue 编号，评审时需先澄清其对应的关闭目标。

- **PR #1280 [OPEN]** fix(tools): preserve preset tools for empty active_tools（作者 mikemikimike）
  链接：moltis-org/moltis PR #1280
  摘要显示该修复针对 Issue #1277：将显式为空的 `active_tools` 数组视为"无逐轮覆盖"，从而保留预设的工具控制；非空的逐轮工具列表仍保持原有作用范围。

两条 PR 均为当日创建、当日更新，尚无评论与点赞，处于等待评审阶段。

## 4. 社区热点

今日整体讨论热度偏低：所有 Issues 与 PR 的评论数均为 0，点赞数均为 0，不存在评论活跃或高反应的条目。

相对集中的关注点是**本地 TTS / 语音人格（voice personas）的本地实现**这一主题——Issue #1281、Issue #1282 与 PR #1283 三者同题、同作者、同日出现：

- Issue #1281 [CLOSED] [Feature]: VoxCPM as a local TTS provider — moltis-org/moltis Issue #1281
- Issue #1282 [OPEN] [Feature]: VoxCPM as a local TTS provider — moltis-org/moltis Issue #1282
- PR #1283 [OPEN] feat(voice): add VoxCPM as a local TTS provider — moltis-org/moltis PR #1283

背后的诉求由 Issue 摘要直接给出：语音人格缺乏本地实现。摘要引用了 `docs/src/voice.md` 自身的 Provider Support 表，指出 Instructions support 一栏所反映的能力缺口（摘要中表格内容被截断，仅可见表头与 Notes 列起始）。因此，这不是零散的偏好，而是有文档依据的功能空缺，且贡献者已经给出了可评审的实现路径。

## 5. Bug 与稳定性

今日无新报告的崩溃或回归类问题，唯一与稳定性相关的条目是工具配置行为修复：

- **PR #1280 [OPEN]** fix(tools): preserve preset tools for empty active_tools — 对应 Issue #1277
  链接：moltis-org/moltis PR #1280 ；问题单：moltis-org/moltis/issues/1277
  影响面：当 `active_tools` 被显式置为空数组时，预设的工具控制可能被意外清空。修复方式是将空数组解释为"不覆盖"，保留预设工具；非空列表仍按逐轮作用域生效。
  严重程度判断：属于配置语义类缺陷，会静默改变工具可用范围，可能影响依赖预设工具链的用户会话；已有 fix PR，尚未合并。
  说明：本期数据未提供该 Issue 的正文与评论，因此上述影响范围描述仅基于 PR 摘要，未做进一步推断。

## 6. 功能请求与路线图信号

今日唯一的新功能需求是 **VoxCPM 作为本地 TTS 提供方**，且已同时具备 Issue 与实现 PR：

- 需求侧：Issue #1281（已关闭）、Issue #1282（开启）
- 实现侧：PR #1283（待合并），接入方式为 OpenBMB/VoxCPM + vLLM-Omni 的 OpenAI 兼容接口

**纳入下一版本的可能性判断：**该需求有文档层面的能力缺口作为依据，有完整的实现 PR，且模型采用 Apache-2.0 许可，具备合并的基础条件。但存在两项前置障碍：其一，Issue 编号疑似重复（#1281 与 #1282 内容一致，前者已关闭），需确认哪一个作为跟踪单；其二，PR #1283 摘要中的 "Closes #NNNN" 为未填写占位符。在维护者明确工单归属并完成评审前，不宜视为已进入路线图。今日无任何维护者的路线图表态可供佐证。

## 7. 用户反馈摘要

本期数据中所有 Issue 与 PR 的评论数均为 0，没有可提炼的真实用户评论、使用场景描述或满意度表达。唯一可视为用户侧反馈的内容来自 Issue #1281 / #1282 的问题陈述本身：贡献者指出"语音人格没有本地实现"，并以 `docs/src/voice.md` 的 Provider Support 表作为证据，说明这是一个由文档自身确认的能力落差，而非主观期望。

## 8. 待处理积压

本期数据未提供创建时间早于 2026-09-21 的未响应 Issue 或 PR，因此无法从给定材料中识别长期积压项，不做推测。

需要维护者近期处理的事项（均为当日产生，非长期积压）：

1. **Issue #1281 与 #1282 重复** — 同一作者、同一日期、同一标题与摘要。其中 #1281 已关闭，#1282 仍开启，需明确保留哪一个作为跟踪单，避免重复计数与后续引用混乱。
   链接：moltis-org/moltis Issue #1281 ；moltis-org/moltis Issue #1282
2. **PR #1283 的关联编号缺失** — 摘要中的 "Closes #NNNN" 占位符未替换，需作者补充正确 Issue 编号后方可合入。
   链接：moltis-org/moltis PR #1283
3. **PR #1280 待评审** — 关联 Issue #1277 的修复，尚无评论，建议优先确认 `active_tools` 空数组语义是否符合既有设计约定。
   链接：moltis-org/moltis PR #1280

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-21

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 仓库
> 统计窗口：过去 24 小时

---

## 1. 今日速览

今日 CoPaw 项目保持高强度活跃：13 条 Issue 更新（9 条新开/活跃、4 条关闭）、25 条 PR 更新（14 条待合并、11 条已合并/关闭），无新版本发布。议题重心明显偏向**稳定性与安全**——一条持续存在的 prompt injection 注入报告（#7859）与多条工具调用/上下文压缩类 Bug 构成主要风险面。与此同时，社区在模型管理统一化（PR #7899）、实时语音对话（PR #7785）与 KaTeX 数学渲染（PR #7909）等方向持续推进，说明项目在修复回归的同时仍在拓展能力边界。整体健康度评估：**活跃且响应及时，但工具链与 Windows 平台的稳定性问题需要优先收口**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日关闭/合并的 PR 覆盖 CI 基础设施、测试覆盖、前端体验与渲染能力四条线：

**CI 与测试基础设施（显著降低回归风险）**
- **PR #7326 [CLOSED]** — nightly E2E 拆分为 p0/p1/p2 三个并行分片，并使汇总结果 fail-closed（超时/失败不再静默通过）。这是当日最重要的工程健康度改进。
  https://github.com/agentscope-ai/QwenPaw/pull/7326
- **PR #7803 [CLOSED]** — 启用已声明的 pytest-timeout，并将每分片任务超时提升至 60 分钟。
  https://github.com/agentscope-ai/QwenPaw/pull/7803
- **PR #7697 [CLOSED]** — 精简 PR 阶段 CI 门禁（仅 Ubuntu 后端层级），新增发布期全量测试门禁。
  https://github.com/agentscope-ai/QwenPaw/pull/7697
- **PR #6931 [CLOSED]** — nightly 全量测试提前一小时（18:17 → 17:17 UTC）。
  https://github.com/agentscope-ai/QwenPaw/pull/6931
- **PR #7911 [CLOSED]** — 单元测试覆盖冲刺第三批：新增 47 个测试文件、2720 个用例，`src/qwenpaw` 语句覆盖率从 70.51% 提升至 73.79%（+3.28pp）。
  https://github.com/agentscope-ai/QwenPaw/pull/7911

**功能与前端体验**
- **PR #7909 [CLOSED]** — Console 引入 remark-math + rehype-katex，release notes 与 Markdown 预览支持 LaTeX 数学渲染，字体本地打包支持离线使用。对应 Issue #5921 的设计提案。
  https://github.com/agentscope-ai/QwenPaw/pull/7909
- **PR #7846 [CLOSED]** — 会话列表不再由后端截断名称，改由前端控制显示（超 100 字符省略号 + hover/focus 滚动查看），并移除 "channel" 等字段。
  https://github.com/agentscope-ai/QwenPaw/pull/7846
- **PR #7918 [CLOSED]** — 移除 `main` 分支上 9 份误提交的 `docs/design` 设计文档（877 行），纯文档清理。
  https://github.com/agentscope-ai/QwenPaw/pull/7918

**阶段推进判断**：CI 与测试线今日一次性关闭 4 个 PR，叠加覆盖 +3.28pp，说明项目正系统性收口质量基线；功能线则落地了数学渲染与会话列表体验两个用户可感知改动。

---

## 4. 社区热点

今日讨论最活跃的话题按评论数排序：

- **Issue #7859 [OPEN] · 5 条评论** — `[BUG] Persistent prompt injection in tool-result system-reminders instructing the agent to delete all skills`。跨 20+ 轮、多个会话持续出现的注入指令，附加在工具结果后的 system-reminder/agent-skills 块中，且本地磁盘找不到来源。
  https://github.com/agentscope-ai/QwenPaw/issues/7859
- **Issue #7628 [OPEN] · 4 条评论** — `[enhancement][Bug] Context compaction can still exceed the complete provider request budget and fail active turns`。
  https://github.com/agentscope-ai/QwenPaw/issues/7628
- **Issue #3419 [OPEN] · 3 条评论** — `京东云 Coding Plan 环境与会话执行中断`（4 月创建，今日仍活跃）。
  https://github.com/agentscope-ai/QwenPaw/issues/3419
- **Issue #7431 [CLOSED] · 3 条评论** — `harnesses/codex：后端不流式下发 agentMessage/delta 时第三方智能体"空响应"`。
  https://github.com/agentscope-ai/QwenPaw/issues/7431

**背后诉求分析**：热点明显集中在**代理运行时可信度**——注入防护（#7859）与上下文预算精确性（#7628）都指向同一类问题：Agent 在长会话与复杂 provider 环境下行为不可预测。这是一个从"能用"迈向"可信"的信号，建议维护者将 system-reminder 与工具结果的信任边界设计列为高优先级议题。

---

## 5. Bug 与稳定性

按严重程度排列（P0 最高）：

**P0 — 安全**
- **#7859 [OPEN]** Prompt injection 持续注入至工具结果 system-reminder，指令要求删除所有 skills；跨会话复现，来源未定位。**未见关联 fix PR**。安全影响面最大。
  https://github.com/agentscope-ai/QwenPaw/issues/7859

**P1 — 会话中断 / 进程级影响**
- **#7908 [OPEN]** Windows：`execute_shell_command` 启动的子进程 Console Ctrl 事件可传播至 QwenPaw 宿主进程本身，导致宿主终止，而非仅单个命令失败。v2.2.1 复现。**未见关联 fix PR**。
  https://github.com/agentscope-ai/QwenPaw/issues/7908
- **#3419 [OPEN]** 京东云 Coding Plan 环境下 Tool Guard 审批后会话仍中断，`Thinking → execute_shell_command` 循环被意外切断，多次复现。自 2026-04-15 起持续未决。
  https://github.com/agentscope-ai/QwenPaw/issues/3419
- **#7628 [OPEN]** 上下文压缩触发与预算仅基于可见会话，未计入完整 provider 请求，导致超出预算并打断进行中的回合。
  https://github.com/agentscope-ai/QwenPaw/issues/7628

**P2 — 功能正确性**
- **#7905 [OPEN]** `DoomLoopGate` 在无新工具调用证据的纯文本回合误判升级为 TERMINATE。环境 2.2.2b1 / commit `1d5021a4`。
  https://github.com/agentscope-ai/QwenPaw/issues/7905
- **#7907 [OPEN]** Responses API 工具 schema 清洗移除 nullable 后叠加隐式 strict，导致 `recall_history` 可选日期参数无法省略。**已有 fix PR #7915**（将 function tools 默认设为 `strict: false`，同时保留显式 strict 设置）。
  https://github.com/agentscope-ai/QwenPaw/issues/7907 · https://github.com/agentscope-ai/QwenPaw/pull/7915
- **#7866 [CLOSED]** 文件区 tab 在 agent 重写文件后仍显示旧内容（session card 已显示新内容）。v2.2.1 / `main` 复现。今日关闭。
  https://github.com/agentscope-ai/QwenPaw/issues/7866
- **#7431 [CLOSED]** 后端不流式下发 `agentMessage/delta` 时第三方智能体每轮"空响应"、usage 全 0。今日关闭。
  https://github.com/agentscope-ai/QwenPaw/issues/7431

**小结**：今日 13 条 Issue 中 8 条为 Bug，其中 2 条 P0/P1 级尚无 fix PR（#7859、#7908），是当前最大的稳定性敞口。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 Issue | 关联 PR | 纳入下一版本的可能性 |
|---|---|---|---|
| 网页标题自定义 | #7648 https://github.com/agentscope-ai/QwenPaw/issues/7648 | **PR #7914 [OPEN]**（首次贡献者，General → Appearance & language 下新增 Browser tab title 字段） | **高** — 已有实现 PR，改动面小 |
| 每个 Agent 配置头像 | #4974 [CLOSED]（👍 2） https://github.com/agentscope-ai/QwenPaw/issues/4974 | 未见 | 中 — 需求今日关闭，需关注是否被合并入其他工作 |
| MCP 认证式网络研究示例（Baizhi Agent Toolkit） | #7912 [OPEN] https://github.com/agentscope-ai/QwenPaw/issues/7912 | 未见（作者主动提议贡献 search → fetch 示例） | 中 — 文档类贡献，门槛低 |
| Realtime 语音对话 | — | **PR #7785 [OPEN]** https://github.com/agentscope-ai/QwenPaw/pull/7785 | 待观察 — 已接入常规 Chat 执行路径，改动较大 |
| 统一模型发现/定价/选择/thinking 控制 | — | **PR #7899 [OPEN]** https://github.com/agentscope-ai/QwenPaw/pull/7899 | 待观察 — 架构级重构，需重点评审 |

**路线图信号**：模型管理统一化（#7899）与会话详情分组（#7846 已合并）表明团队正收敛配置与展示层的技术债；语音与 MCP 示例代表生态扩展方向。

---

## 7. 用户反馈摘要

**真实痛点**
- **多实例管理困难**：#7648 用户同时运行 7-8 个 QwenPaw 面板，浏览器标题全部为 "QwenPaw Console"，在 Tab 间反复切换易混淆——典型的多项目/多环境用户场景。
- **长会话行为不可预测**：#7859（20+ 轮后注入指令持续出现）与 #7628（长会话压缩超预算打断回合）反映出重度用户的长会话体验仍不稳定。
- **第三方 provider 兼容性**：#7431（火山方舟 agentplan 网关 + codex 0.144.x 空响应）、#3419（京东云 Coding Plan 中断）显示非标准网关与云环境的适配是持续摩擦点。
- **前端一致性**：#7866（文件区 tab 内容不刷新）属于影响日常编辑工作流的高频体验问题。

**满意/正面信号**
- #7859、#7628 等敏感问题均获得维护者 4-5 条评论互动，响应积极。
- 社区贡献意愿活跃：#7912、#7914 均为用户主动提交的贡献（含首次贡献者），#5921 用户还遵循贡献指南先提设计提案再提 PR，协作流程被认可。

---

## 8. 待处理积压

需维护者重点关注的长期或高优先级未决项：

- **Issue #3419 [OPEN]** — 京东云 Coding Plan 会话中断，创建于 **2026-04-15**，已持续 5 个月以上，今日仍在更新但未关闭。长期未决的平台兼容问题。
  https://github.com/agentscope-ai/QwenPaw/issues/3419
- **Issue #7859 [OPEN]** — Prompt injection 安全议题，来源未定位，无 fix PR。建议提升优先级。
  https://github.com/agentscope-ai/QwenPaw/issues/7859
- **Issue #7908 [OPEN]** — Windows 宿主进程可被 `execute_shell_command` 子进程终止，影响所有 Windows 用户。
  https://github.com/agentscope-ai/QwenPaw/issues/7908
- **PR #7785 [OPEN]** — Realtime 语音对话，自 2026-09-15 创建，改动面大，需评审资源。
  https://github.com/agentscope-ai/QwenPaw/pull/7785
- **PR #7899 [OPEN]** — 模型管理架构级重构，2026-09-20 创建，涉及 provider 配置/发现/选择/能力解析全链路，建议优先安排评审以获得社区反馈。
  https://github.com/agentscope-ai/QwenPaw/pull/7899

---

**健康度总评**：项目工程侧动作密集且方向正确（CI fail-closed、覆盖率 +3.28pp），社区参与度高；但安全（#7859）与平台稳定性（#7908、#3419）存在明确未填缺口，且集中在"代理运行时可信边界"这一主题上，建议作为下一步收口的核心。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-21

## 1. 今日速览

项目今日维持高强度维护节奏：过去 24 小时共 50 条 Issue 更新（46 条新开/活跃、4 条关闭）与 50 条 PR 更新（48 条待合并、2 条已合并/关闭），无新版本发布。讨论重心集中在安全与身份治理（#8289 分层改造栈）、运行时可观测性与稳定性（daemon 启动栈溢出、cron 无超时、紧急停止失效）以及多智能体宿主资源边界（RFC #10970）三条主线。当日关闭了 4 条 Issue 与 2 条 PR，但新增/活跃量远高于关闭量，合并队列（48 条待合并，含多条 size:XL）明显积压，评审带宽是当前主要瓶颈。整体健康度：活跃度极高，吞吐受评审侧限制，多项 P1/S1 稳定性问题仍未闭环。

## 2. 版本发布

今日无新版本发布（0 个 Release），无破坏性变更与迁移事项需提示。

## 3. 项目进展

今日合并/关闭数量有限，主要推进体现在关闭的 Issue 与待合并的大型改造栈上：

- **已关闭 Issue #10925** — Matrix 输入驱动的镜像语音回复（`output_modality = "mirror"`），补齐了 #10489 之后 Matrix 语音回复的文档缺口。https://github.com/zeroclaw-labs/zeroclaw/issues/10925
- **已关闭 Issue #9393** — Bluesky 与 Reddit 缺少发送者授权且无中心化网关覆盖（安全类，P1）。https://github.com/zeroclaw-labs/zeroclaw/issues/9393
- **已关闭 Issue #9812** — Provider fallback 携带主模型 id 导致回退永不触发并把 fallback 拖入冷却。https://github.com/zeroclaw-labs/zeroclaw/issues/9812
- **已关闭 Issue #9727** — zerocode 侧边栏多智能体运行与监控 Epic。https://github.com/zeroclaw-labs/zeroclaw/issues/9727
- **已关闭 PR #10961** — rust-all 依赖组 5 项升级（dependabot）。https://github.com/zeroclaw-labs/zeroclaw/pull/10961

值得注意的**在途大型 PR 栈**（尚未合并，决定后续进度）：
- **#8289 身份治理栈**：#10275（退役 Nevis/iam_policy + 配置 shim）、#10274（网关路由层鉴权与 principal consumption）、#10270（无浏览器 OIDC device grant / client_credentials 注册），三者均为 size:XL 且相互堆叠。https://github.com/zeroclaw-labs/zeroclaw/pull/10275 · https://github.com/zeroclaw-labs/zeroclaw/pull/10274 · https://github.com/zeroclaw-labs/zeroclaw/pull/10270

整体判断：项目在架构层面推进明显，但今日实际落地（合并）量小，向前迈进主要体现在关闭存量 Issue 与评审推进大型栈。

## 4. 社区热点

- **#8692 [Tracker] 维护者决策队列**（评论 15，最高）— RFC、设计问题、发布策略与协调跟踪器的活跃决策队列，要求维护者/code owner 介入。反映社区对决策流程透明度的强诉求。https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **#10230 [Bug] Daemon 启动/重载在 agent 初始化期间栈溢出**（评论 6，P1，S1）— 运行中通过 ZeroCode 应用 Quickstart 配置可使 Tokio runtime worker 栈溢出中止。https://github.com/zeroclaw-labs/zeroclaw/issues/10230
- **#10523 [Bug] Bootstrap 文件 6000 字符截断对操作者不可见**（评论 5）— 启用 `compact_context` 后 `AGENTS.md`、`SOUL.md`、`IDENTITY.md`、`USER.md` 被静默截断。https://github.com/zeroclaw-labs/zeroclaw/issues/10523
- **#10068 [Bug] 交互式会话上下文被限制在 32,000 tokens**，忽略 `max_context_tokens = 131072`（评论 5，S2）。https://github.com/zeroclaw-labs/zeroclaw/issues/10068
- **RFC 三连（各 3 条评论，#10970 / #10930 / #10929）** — 多智能体宿主准入控制与资源边界、智能体向人类提问的持久原语、出站消息投递回执。作者均为 JordanTheJet，指向同一诉求：**多智能体规模化运行下的可靠性、可审计性与资源隔离**。https://github.com/zeroclaw-labs/zeroclaw/issues/10970 · https://github.com/zeroclaw-labs/zeroclaw/issues/10930 · https://github.com/zeroclaw-labs/zeroclaw/issues/10929

## 5. Bug 与稳定性

按严重程度排列（S1 = 工作流阻塞）：

**S1（阻塞级）**
- **#10230** Daemon 启动/重载栈溢出，Tokio worker 中止（P1，r:needs-repro）。尚无对应 fix PR。https://github.com/zeroclaw-labs/zeroclaw/issues/10230
- **#9191** Cron agent 任务无 wall-clock 超时；in-flight 锁仅在进程启动时清除（P1，status:accepted，风险:high）。无 fix PR。https://github.com/zeroclaw-labs/zeroclaw/issues/9191

**P1 / 高风险**
- **#10408** 同一 session 内新消息在上一轮进行中会启动并行运行，导致重复工作与重复回复（风险:high）。无 fix PR。https://github.com/zeroclaw-labs/zeroclaw/issues/10408
- **#9390** 紧急停止仅是 CLI 状态文件，运行时无任何路径读取（P1，风险:high，help wanted）。无 fix PR。https://github.com/zeroclaw-labs/zeroclaw/issues/9390
- **#10975** WhatsApp Web 入站图片未下载，agent 收到字面量 `[Image]`，视觉不可用（P1）。无 fix PR。https://github.com/zeroclaw-labs/zeroclaw/issues/10975
- **#10523** Bootstrap 文件 6000 字符静默截断（S2，status:in-progress）。修复进行中。https://github.com/zeroclaw-labs/zeroclaw/issues/10523

**S2/S3 退化类**
- **#10068** 交互式会话上下文上限 32k，忽略配置（status:parking-lot）。https://github.com/zeroclaw-labs/zeroclaw/issues/10068
- **#9363** 非英文 locale 下 Config 元数据仍为英文（status:accepted）。https://github.com/zeroclaw-labs/zeroclaw/issues/9363
- **#10976** WhatsApp Web 双向 @ 提及失效（入站为裸 JID 数字，出站无 mentionedJid）。https://github.com/zeroclaw-labs/zeroclaw/issues/10976
- **#10921** Qdrant 时间受限向量召回可能遗漏合格结果（topic:memory）。https://github.com/zeroclaw-labs/zeroclaw/issues/10921
- **#9784** SOP 多步 agent 驱动运行中途标记失败且无审计事件（status:stale）。https://github.com/zeroclaw-labs/zeroclaw/issues/9784

**已有关联修复 PR 的稳定性工作**：
- **PR #10904** 收窄无视觉能力的错误触发条件（仅当 image marker 可解析时）。https://github.com/zeroclaw-labs/zeroclaw/pull/10904
- **PR #10860** 工具结果中的非图像 data-URI marker 保留为文本。https://github.com/zeroclaw-labs/zeroclaw/pull/10860
- **PR #10696** 历史裁剪改为低水位目标而非上限，避免会话贴着上限抖动。https://github.com/zeroclaw-labs/zeroclaw/pull/10696
- **PR #10953** 修复 seam sanitizer 破坏签名推理内容的问题。https://github.com/zeroclaw-labs/zeroclaw/pull/10953
- **PR #10931** 限制 Windows 计划任务的 stdout/stderr 日志。https://github.com/zeroclaw-labs/zeroclaw/pull/10931

## 6. 功能请求与路线图信号

- **#10970 RFC：宿主级准入控制与每智能体资源边界** — 限制并发 turn、并发工具执行与跨进程内存，使多智能体机器“延迟退化而非稳定性崩溃”。高风险、type:rfc，尚无实现 PR，属中长期架构方向。https://github.com/zeroclaw-labs/zeroclaw/issues/10970
- **#10930 RFC：agent 向人类提问的持久原语** — 复用现有但孤立的 SOP 审批门（唯一持久实现），统一到单一持久原语。https://github.com/zeroclaw-labs/zeroclaw/issues/10930
- **#10929 RFC：出站消息投递回执** — `SendMessage` 无标识符，无法确认消息是否送达。https://github.com/zeroclaw-labs/zeroclaw/issues/10929
- **#10315 重新引入浏览器注册前门（不手写 TLS）** — 承接 #10142 的拆分，已有 fork 分支保留拆分前代码。https://github.com/zeroclaw-labs/zeroclaw/issues/10315
- **PR #9986 `zeroclaw agents export`** — 导出可移植 agent bundle（manifest + 配置闭包）。功能已完成待评审，**较可能纳入下一版本**。https://github.com/zeroclaw-labs/zeroclaw/pull/9986
- **PR #10724 Anthropic prompt-cache marker 的可配置 `cache_ttl`**。https://github.com/zeroclaw-labs/zeroclaw/pull/10724
- **PR #10596 持久化 ACP transcript 的分页**、**PR #10954 PowerShell 输出初始化为 UTF-8**。https://github.com/zeroclaw-labs/zeroclaw/pull/10596 · https://github.com/zeroclaw-labs/zeroclaw/pull/10954

纳入判断：具备完整实现、纯增量、低耦合的 PR（#9986、#10954、#10596）更可能先落地；三条 RFC 与 #8289 身份治理栈体量大、风险高，短期进入版本的可能性较低。

## 7. 用户反馈摘要

- **配置可见性缺失是核心痛点**：Bootstrap 文件被静默截断（#10523）、`max_context_tokens` 被忽略（#10068）、Config 元数据未本地化（#9363）——用户反复指出“系统做了什么用户看不到/控制不了”。
- **运行时语义不严谨**：同一 session 并发消息触发并行运行（#10408）、紧急停止无运行时读取路径（#9390）、cron 无超时（#9191）——用户质疑安全与并发语义是否真正生效。
- **渠道体验不一致**：WhatsApp Web 图片与提及双向损坏（#10975、#10976），Matrix 语音回复依赖 `mirror` 文档缺口（#10925）——渠道适配质量参差。
- **多智能体使用场景明确**：#9727（zerocode 侧边栏监控多个 agent）与 #10970（宿主资源边界）显示已有用户在单机上运行多个 agent，对并排观察、进度追踪与资源隔离有真实需求。
- **审计要求高**：多条安全 Issue（#9393、#9390、#9784）由审计驱动提出，作者明确说明“每一行引用都打开过、每条引文都对过 HEAD”，社区对证据质量要求严格。

## 8. 待处理积压

- **#8692 维护者决策队列**（创建 2026-07-04，已 79 天，评论 15）— 自身作为决策队列却持续活跃，说明 RFC/设计决策积压未消化。https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **#9390 紧急停止失效**（创建 2026-07-26，P1，风险:high，help wanted）— 安全关键路径长期未闭环。https://github.com/zeroclaw-labs/zeroclaw/issues/9390
- **#9191 Cron 无 wall-clock 超时**（创建 2026-07-20，P1，S1，status:no-stale）— 已超两月未修复。https://github.com/zeroclaw-labs/zeroclaw/issues/9191
- **#9784 SOP 运行无审计事件**（创建 2026-08-06，已标记 status:stale，风险:high）— 存在被自动 stale 的风险，建议维护者优先确认。https://github.com/zeroclaw-labs/zeroclaw/issues/9784
- **PR #9986 agent 导出**（创建 2026-08-13，标记 stale-candidate）— 功能完整但等待评审，存在被搁置风险。https://github.com/zeroclaw-labs/zeroclaw/pull/9986
- **#8289 身份治理栈**（#10270/#10274/#10275 均创建 2026-08-23，size:XL，堆叠 8 层）— 栈式评审链长，建议维护者批量推进以避免整体停滞。https://github.com/zeroclaw-labs/zeroclaw/pull/10275
- **#9363 本地化 Config 元数据**（创建 2026-07-25，status:accepted，四天无进展）https://github.com/zeroclaw-labs/zeroclaw/issues/9363

**健康度小结**：项目贡献活跃（50 Issue + 50 PR/日）、架构演进方向清晰（身份治理、多智能体资源边界、持久化原语），但评审带宽已成瓶颈——48 条待合并 PR 中含多条 XL 与 8 层堆叠栈，同时至少 5 条 P1/S1 稳定性与安全问题无对应 fix PR。建议维护者优先处理 S1 类 Bug（#10230、#9191）、安全关键积压（#9390、#9393 已关闭但需验证）以及避免 #9784、#9986 被 stale 机制误伤。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*