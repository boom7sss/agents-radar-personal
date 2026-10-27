# OpenClaw 生态日报 2026-08-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-25 11:00 UTC

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

# OpenClaw 项目动态日报 — 2026-08-25

## 1. 今日速览

OpenClaw 项目今日保持高活跃度，过去 24 小时内有 500 条 Issue 更新和 500 条 PR 更新，其中 Issue 以新开/活跃为主（427 条，占 85.4%），PR 以等待合并为主（306 条，占 61.2%）。值得关注的是，P0 级 SQLite 数据库反复损坏问题（#126821）仍在追踪中，同时多个 P1 级问题（如日志进程泄漏、会话状态丢失）获得了维护者关注。今日共有 5 个 PR 被合并或关闭（含 2 个由 steipete 提交的质量改进），无新版本发布。项目整体处于"高输入、高待办消化"的密集迭代阶段，社区提交热情高，但维护者审核积压较重。

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

以下 PR 于今日关闭/合并，见证了项目的实际推进：

1. 🔴 **steipete** — [PR #129249: fix(voice): fence realtime bridge lifecycle](https://github.com/openclaw/openclaw/pull/129249) (合并)
   - 修复 Google 与 xAI 实时语音会话在关闭/重连边界上残留旧连接的问题，防止旧桥接代影响活动会话。

2. 🔴 **steipete** — [PR #129252: test(wizard): deduplicate setup fixtures](https://github.com/openclaw/openclaw/pull/129252) (合并)
   - 去除向导测试集中重复的 setup 夹具，改善选项与流程覆盖的可维护性。

3. 🟢 **jesse-merhi** — [PR #123975: fix(scripts): clean up tsgo process trees on timeout or signal](https://github.com/openclaw/openclaw/pull/123975) (关闭)
   - 修复 tsgo 包装器在收到信号时留下卡死编译器进程树的问题，并增加受控的超时执行路径。

四项中两项为测试/脚本质量改进，一项修复实时语音生命周期关键问题，整体节奏以稳定性补强为主。

---

## 4. 社区热点

以下话题获得最多讨论与社区互动：

1. ### 🦞 [Issue #40001: Write 工具缺少 append 模式，隔离 cron 会话破坏共享文件（14 评论）](https://github.com/openclaw/openclaw/issues/40001)
   **P1 · 影响：会话状态 / 数据丢失 · 已开放 170 天**
   用户使用隔离 cron 会话中的 `write` 工具覆盖共享工作区文件（如 `memory/YYYY-MM-DD.md`），导致数据丢失。该问题已持续近 6 个月但无 fix PR，社区持续关注。

2. ### 🌊 [Issue #79902: 为 database-first 运行时增加 SQLite 会话/转写接口（14 评论）](https://github.com/openclaw/openclaw/issues/79902)
   **P3 · 功能请求 · 开放 108 天**
   高级用户希望基于新的 database-first 运行时构建规范化的 SQLite 会话转写接口，避免解析不透明二进制块或重新实现内部分支逻辑。

3. ### 🦞 [Issue #50093: WhatsApp 重连后补拉错过的消息（13 评论）](https://github.com/openclaw/openclaw/issues/50093)
   **P1 · 功能请求 · 影响：消息丢失 · 开放 159 天**
   WhatsApp Web 断线（如 503 错误）重连后，中断窗口期间发给监控群组的消息不会补发或记录。网关重连成功但消息丢失。

4. ### 🐚 [Issue #67413: 按 agent 维度配置 dreaming（9 评论，👍 5）](https://github.com/openclaw/openclaw/issues/67413)
   **P2 · 功能请求 · 开放 132 天**
   当前 memory-core dreaming 会同时对**所有** agent 工作区运行，导致内存峰值可超过 MemoryMax（6GB）。这是今日点赞数最高的请求，说明多 agent 用户对资源隔离的诉求强烈。

**趋势分析：** 今日高讨论度的话题集中在**数据安全/持久性**（#40001、#50093）与**多 agent 资源管理**（#67413）两大方向。社区对数据可靠性问题表现出持续、强烈的不满（长期悬而未决加剧了情绪），而新功能需求则聚焦于精细化控制和扩展性。

---

## 5. Bug 与稳定性

按严重程度排列：

### P0（灾难性）

1. 🐚 **[Issue #126821: SQLite 在重建后的干净数据库上 15–24h 内反复损坏（WSL2，5 天 5 次事件，含"瘫痪网关"模式）](https://github.com/openclaw/openclaw/issues/126821)**
   - **状态：** 开放中 · 需维护者审核/产品决策 · 需在线复现 · 无 fix PR
   - **详情：** 通过 VACUUM INTO 重建、PRAGMA integrity_check 全通过的全新数据库仍会在 15-24 小时内出现 freelist miscount。触发后进入"瘫痪网关"模式：拒绝所有服务但进程永不退出。
   - **影响：** 数据丢失 / 崩溃循环。5 天内 5 次，极其严重。

### P1（严重）

2. 🦐 **[Issue #97616: OpenClaw 泄漏未回收的 hook/tool 子进程，僵尸进程累积导致运行时性能退化](https://github.com/openclaw/openclaw/issues/97616)**
   - **状态：** 开放中 · 回归 · 需维护者审核/信息 · 无 fix PR
   - **详情：** hook/tool 执行产生的子进程未被回收，随时间累积为僵尸进程，拖垮运行时。

3. 🦐 **[Issue #85251: Codex app-server 发出 turn/started 后静默，嵌入式 run 卡死整个恢复窗口](https://github.com/openclaw/openclaw/issues/85251)**
   - **状态：** 开放中 · 影响会话状态/消息丢失 · 无 fix PR

4. 🦞 **[Issue #126906: 拒绝 write 工具会静默禁用记忆持久化，且 agent 虚报成功](https://github.com/openclaw/openclaw/issues/126906)**
   - **状态：** 开放中（5 天）· 影响会话状态/数据丢失 · 无 fix PR
   - **详情：** 通过 `tools.deny` 拒绝 write 工具会静默禁用记忆持久化，但没有任何提示（启动时、doctor 或 agent 自身），agent 对根本没发生的保存操作上报成功。

5. 🦞 **[Issue #127948: WhatsApp 群组回复在引用缓存过期后渲染为空白气泡](https://github.com/openclaw/openclaw/issues/127948)**
   - **状态：** 开放中（3 天）· 有开放关联 PR
   - **详情：** 回复超过 CACHE_TTL_MS（10 分钟）后发送带有效引用 key 但正文为空的消息，群组中显示空白气泡。

6. 🌊 **[Issue #128826: doctor --lint/--json 因 externalised codex 插件中止运行](https://github.com/openclaw/openclaw/issues/128826)**
   - **状态：** 开放中（1 天）· 需维护者审核 · 有修复 PR 候选（"queueable-fix"）
   - 交互式 `doctor` 正常，但 `--lint`/`--json` 模式直接报 MissingPublicSurfaceError。

7. 🦐 **[Issue #113093: v2026.7.1-2 + llama.cpp MTP 服务器导致 413/400 工具负载错误](https://github.com/openclaw/openclaw/issues/113093)**
   - **状态：** 开放中（33 天）· 有复现步骤 · 无 fix PR

8. 🦞 **[Issue #127176: Windows 上 CLI 与 Node Host 交替上报设备元数据审批请求](https://github.com/openclaw/openclaw/issues/127176)**
   - **状态：** 开放中（4 天）· 有开放关联 PR

### 已修复（今日关闭）

- ✅ **[Issue #43747: 记忆管理混乱（回归）](https://github.com/openclaw/openclaw/issues/43747) — 以"已修复"关闭**
- ✅ **[Issue #48810: 压缩重试在 parentId 链中产生孤儿分支](https://github.com/openclaw/openclaw/issues/48810) — 以"已修复"关闭**
- ✅ **[Issue #62328: node:sqlite 缺少 FTS5 模块，记忆关键词搜索失效](https://github.com/openclaw/openclaw/issues/62328) — 以"已修复"关闭**
- ✅ **[Issue #108865: 会话归档后飞书等渠道丢弃入站消息](https://github.com/openclaw/openclaw/issues/108865) — 以"主分支无法复现"关闭**

---

## 6. 功能请求与路线图信号

### 高优先级（P1/P2，社区需求强烈）

1. 🦞 **[Issue #67413: 按 agent 配置 dreaming（P2，👍 5）](https://github.com/openclaw/openclaw/issues/67413)**
   - 多 agent 同时 dreaming 造成内存峰值超限。点赞数今日最高，社区需求明确。**建议纳入下一版本 memory-core 重构范围。**

2. 🦞 **[Issue #44395: 标题感知 chunking + 实体提取用于记忆搜索（P2，👍 2）](https://github.com/openclaw/openclaw/issues/44395)**
   - 当前 chunker（`chunkMarkdown`）使用固定字符数累积，无法感知文档结构。有明确实现路径，但无 PR 关联。

3. 🦞 **[Issue #68920: HTTP /v1/chat/completions 10-15s TTFB（已关闭为重复）](https://github.com/openclaw/openclaw/issues/68920)**
   - 延迟过高导致无法用于实时代理（LiveKit、Twilio）。虽以重复关闭，但底层需求（轻量上下文/语音模式）仍在。

### 中低优先级（P2/P3）

4. 🌊 **[Issue #79902: 增加 SQLite 会话/转写接口（P3）](https://github.com/openclaw/openclaw/issues/79902)** — 高级用户的扩展性诉求，与 database-first 运行时方向一致。
5. 🌊 **[Issue #62615: 网关侧熔断器（P3）](https://github.com/openclaw/openclaw/issues/62615)** — 连续失败后停止重试同一会话。与稳定性目标契合，有望纳入。
6. 🌊 **[Issue #66252: 按 agent 覆盖 TTS/STT 配置（P3）](https://github.com/openclaw/openclaw/issues/66252)** — 多语言/多音色场景。
7. 🌊 **[Issue #45758: 支持 YAML 格式配置文件（P3）](https://github.com/openclaw/openclaw/issues/45758)** — 开发者易用性，与 JSON5 并存。
8. 🌊 **[Issue #26037: 阿里云百炼 Code Plan 支持（P2，👍 4）](https://github.com/openclaw/openclaw/issues/26037)** — 需开启 thinking/reasoning，有开放关联 PR。

### 已有对应 PR 的功能请求（可能进入下一版）

- **[Issue #39811: 模型配置接受未验证的模型名](https://github.com/openclaw/openclaw/issues/39811)** — 有开放 PR
- **[Issue #127948: WhatsApp 空白引用气泡](https://github.com/openclaw/openclaw/issues/127948)** — 有开放 PR

---

## 7. 用户反馈摘要

### 主要痛点

1. **数据丢失与静默失败（最突出）**
   - [#40001](https://github.com/openclaw/openclaw/issues/40001)：cron 会话覆盖共享文件，用户原话"Write 工具没有 append 模式——它总是创建或**完全覆盖**目标文件"。
   - [#126906](https://github.com/openclaw/openclaw/issues/126906)：拒绝 write 工具后"**没有人在启动时、doctor 中或 agent 本身收到任何通知**，agent 对从未发生的保存上报成功"——用户对镜像系统"假装成功"的体验非常不满意。

2. **回归问题频发**
   - [#43747](https://github.com/openclaw/openclaw/issues/43747)：3 人团队反馈"我们的记忆从未以相同方式被管理"，每个成员本地状态不一致，造成协作混乱。
   - [#97616](https://github.com/openclaw/openclaw/issues/97616)：hook/tool 子进程泄漏被标记为"回归"。
   - [#126821](https://github.com/openclaw/openclaw/issues/126821)：SQLite 损坏在"干净重建"后仍复发，用户使用 WSL2 环境。

3. **延迟与性能**
   - [#68920](https://github.com/openclaw/openclaw/issues/68920)：HTTP 端点"对简单'你好'提示需要 **10-15 秒 TTFB**"，对比 OpenAI 直连约 400ms，实时语音场景完全不可用。
   - [#67413](https://github.com/openclaw/openclaw/issues/67413)：多 agent dreaming 同时运行导致内存超过 6GB 上限。

4. **多 agent 协作与隔离需求增长**
   - 多个请求（[#67413](https://github.com/openclaw/openclaw/issues/67413)、[#66252](https://github.com/openclaw/openclaw/issues/66252)）表明用户正在运行多 agent 实例，并要求更细粒度的资源/配置控制。

---

## 8. 待处理积压

以下为长期未获得有效响应或推进的重要 Issue/PR，需维护者重点关注：

### 严重 Bug（时间超长）

| Issue | 严重度 | 开放天数 | 状态 |
|-------|--------|---------|------|
| [#40001](https://github.com/openclaw/openclaw/issues/40001) Write 工具无 append 模式导致数据丢失 | P1 | 170 天 | 无 fix PR |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 重连后消息丢失 | P1 | 159 天 | 无 fix PR，无进展 |
| [#37966](https://github.com/openclaw/openclaw/issues/37966) cacheRetention 被 LiteLLM 代理忽略 | P2 | 172 天 | 无 fix PR |
| [#39343](https://github.com/openclaw/openclaw/issues/39343) 网关层图片批量缓冲 | P2 | 170 天 | 无 fix PR |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) A2A 单向分发模式 | P2 | 166 天 | 需产品决策 |

### 高价值 PR 等待维护者审核

| PR | 优先级 | 说明 |
|----|--------|------|
| [#115405](https://github.com/openclaw/openclaw/pull/115405) fallback 委托门控应用到 CLI-backend | P1 (🦞) | 打开 28 天，标记"ready for maintainer look"，合并风险涉及安全边界 |
| [#120005](https://github.com/openclaw/openclaw/pull/120005) 阻止前导 @ 重定向文件工具目标 | P1 | 打开 19 天，需 proof |
| [#122513](https://github.com/openclaw/openclaw/pull/122513) 工具调用修复：停止按候选增量重复解析全响应 | P1 | 打开 13 天，需 proof，涉及安全边界 |
| [#121309](https://github.com/openclaw/openclaw/pull/121309) 保留 delete-cleanup 完成回执 | P1 | 打开 15 天，需 proof |

### 积压趋势

- 500 条 PR 中 306 条待合并（61.2%），其中相当数量标注为"waiting on author"或"needs proof"。
- P1 级 Issue 普遍缺少 fix PR，开放时长从 3 天到 170+ 天不等，**数据可靠性类问题（#40001、#50093、#126821）最为急迫**。
- 今日多个 P1/高优 PR 仍处于"needs proof"或"ready for maintainer look"状态，维护者审核带宽可能是当前瓶颈。

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告

**报告日期：2026-08-25**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**密集迭代与稳定性巩固并存的阶段**。头部项目（OpenClaw、NanoBot、IronClaw、CoPaw、ZeroClaw、Hermes Agent）日均保持 30-500 条 Issue/PR 更新的高活跃度，但普遍面临**维护者审核积压**与**数据可靠性问题持续悬置**的双重压力——"Write 工具覆盖导致数据丢失""SQLite 数据库反复损坏""会话状态静默丢失"等 P0/P1 级问题在多项目间反复出现，表明**长时运行场景下的数据安全与故障恢复尚未成为生态的共同基准**。与此同时，多 agent 资源隔离、Web UI 普及、云厂商非标准端点兼容、订阅 OAuth 认证、沙箱安全隔离等需求已在多个项目中独立涌现，指示生态正从"单实例单用户"向"多代理、生产级、跨平台接入"方向演进。整体判断：生态处于**功能快速扩张与可靠性欠账并存**的成长期。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 合并/关闭 PR | 新版本 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（427 新开/活跃） | 500（306 待合并） | 5 | 无 | ⚠️ 高输入高积压，P0 Bug（SQLite 损坏 5 天 5 次）悬而未决 |
| **NanoBot** | 10 | 31 | 16 | 无 | ✅ 高活跃、修复与用户反馈对齐良好，当日集成新 Provider |
| **Hermes Agent** | 50（46 活跃） | 50（42 待合并） | 8 | 无 | ⚠️ 有 P1 逻辑反转 Bug（MCP stdio 全军覆没），响应快但积压多 |
| **PicoClaw** | 3 | 1 | 0 | 无 | 🔴 活跃度低，核心功能请求搁置 6 个月，外部 PR 无人审核 |
| **NanoClaw** | 1 | 49（44 待合并） | 5 | **v2.3.0** | ⚠️ 核心团队高频提交但评审积压严重（合并率 10%） |
| **NullClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 |
| **IronClaw** | 41（32 活跃） | 34（15 待合并） | 19 | 无 | ✅ 活跃，通知系统重构推进快，2 个 Telegram Bug 同源待修 |
| **LobsterAI** | 1 | 16+ | 14 | 无 | ✅ 开发节奏稳健，资料库模块体验与埋点一体化打磨 |
| **TinyClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 |
| **Moltis** | 4（3 关闭） | 9（6 合并/关闭） | 6 | 无 | ✅ 问题闭环速度快，多方向修复当天完成 |
| **CoPaw** | 29（16 新开） | 50（20 待合并） | 30 | 无 | ⚠️ 大量历史 PR 集中合并（吞吐提升），但内存泄漏/SSE 死循环等严重稳定性短板突出 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 |
| **ZeroClaw** | 50（44 新开） | 50（43 待合并） | 7 | 无 | ✅ 架构治理活跃（RFC 持续推进），但大量 PR 长期 `needs-author-action` |

---

## 3. OpenClaw 在生态中的定位

**社区规模与活跃度生态领先**：OpenClaw 以 500 条 Issue + 500 条 PR 的日更新量稳居生态第一梯队，超过其余活跃项目（50 条量级）一个数量级，社区提交热情与问题反馈规模均属顶尖。

**核心优势**：
- **多通道/多渠道覆盖面广**：WhatsApp、飞书、Telegram 等渠道均有专门 issue 与修复讨论，渠道适配深度在生态内最为完整。
- **实时语音与 database-first 运行时**：今日合并的实时语音生命周期修复（PR #129249）及 database-first 运行时的 SQLite 会话/转写接口讨论（#79902），表明其在**语音交互与存储架构**两个前沿方向均有布局，技术路线领先同类。

**主要短板**：
- **P0 级数据可靠性问题长期悬置**：SQLite 数据库反复损坏（#126821，5 天 5 次"瘫痪网关"模式）与 Write 工具无 append 模式导致数据丢失（#40001，开放 170 天无 fix PR）构成生态内最严重的数据安全欠账。
- **维护者审核积压严重**：306 条 PR 待合并（61.2%），大量标注 "needs proof" 或 "waiting on author"，审核带宽明显不足。

**对比结论**：OpenClaw 在生态中扮演**"规模标杆 + 前沿探索者"**角色——社区规模最大、技术覆盖面最广，但可靠性欠账与审核积压正在侵蚀其领先优势。NanoBot（16 条 PR 当日合并）与 Moltis（6 条 PR 当日闭环）在**问题响应速度**上反而更优。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **多 Agent 资源隔离与权限边界** | OpenClaw（#67413 按 agent 配置 dreaming，内存超 6GB 上限）；ZeroClaw（#9947 cron 工具可越权操作其他 agent 任务，S0 级） | 多 agent 部署已成为实际使用场景，但资源分配（内存/CPU）与权限隔离（cron、工具访问）均未成熟 |
| **数据持久性与静默失败** | OpenClaw（#40001 Write 覆盖、#126906 deny write 静默禁用记忆 + 虚报成功）；NanoBot（#5511 Gateway 重启多步任务进度丢失）；ZeroClaw（#9600 会话持久化契约多线并行冲突） | 数据丢失与"假装成功"的静默失败体验在多项目中反复出现，是用户最强烈的痛点，也是生态级可靠性短板 |
| **MCP 连接/恢复可靠性** | PicoClaw（#3269 MCP 失败挂起 chat）；CoPaw（#6524 MCP 重启后 session-id 失效需手动恢复）；Hermes Agent（#94335/#94637 MCP stdio 存活检测逻辑反转导致全军覆没）；ZeroClaw（#10346 MCP 每次启动重复连接三次） | MCP 生态快速增长，但连接生命周期管理（超时、重连、会话恢复、健康检测）在多个实现中均出现缺陷 |
| **Web UI / 低门槛入口** | PicoClaw（#806 webUI 支持，roadmap 高优）；ZeroClaw（#8132 Rust/WASM 替代 React 评估）；IronClaw（#7867 WebUI 语音输入补齐最后短板） | 终端优先的 CLI/TUI 交互模式正在向浏览器端迁移，降低非技术用户门槛是共同趋势 |
| **非 OpenAI 标准端点兼容** | Hermes Agent（#12220 阿里云百炼不暴露 /v1/models）；CoPaw（#2304 Anthropic 兼容提供商 /models 404 处理） | 云厂商（阿里云百炼/DashScope 等）的多模型接入需求持续增长，但标准兼容层仍不完善 |
| **订阅 OAuth 认证模式** | Moltis（#1240 xAI Grok 订阅 OAuth，沿用 Codex/Copilot 模式） | 用户偏好复用订阅 OAuth 而非为每个服务配置 API Key，认证方式的统一是生态共性需求 |
| **沙箱隔离升级** | Moltis（#1118 Kubernetes 沙箱/Kata/gVisor VM 级隔离）；CoPaw（#6810 Windows 安装进程占用） | 安全敏感场景下 VM 级隔离（超越容器）的需求正在浮现 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人助手（语音、多渠道、记忆、cron、database-first 运行时） | 技术型个人用户与多 agent 部署者 | 单一代码库、全栈集成；正在向 database-first 运行时与 SQLite 会话/转写接口演进，实时语音是差异化亮点 |
| **NanoBot** | 高质量个人助手（运行稳定、多渠道富消息、WebUI） | 个人与生产部署用户 | 事件循环与 worker 线程分工明确（今日将 IO 全部移出事件循环），性能与稳定性导向；社区驱动外部贡献活跃 |
| **Hermes Agent** | 多 profile 网关 + 桌面端 + 多后端（Docker/SSH） | 桌面端重度用户、多 profile 部署 | Docker 共享容器、桌面远程连接（SSH/serve）、MCP 生态集成，Skills Hub 是特色；架构复杂度带来较多回归问题 |
| **PicoClaw** | TUI 为主的轻量级代理（Go 实现） | 终端用户、单片机边缘场景（Sipeed 硬件背景） | Go 语言单二进制、轻量；Web UI 在 roadmap 但推进缓慢 |
| **NanoClaw** | 可编程/可自动化安装的助手（setup driver/preseed） | 需要自动化部署与多渠道分发的团队 | 核心特色是**可编程安装协议**与结构化 host health 接口（区别于其他项目的自动化能力）；v2.3.0 引入 Slack 多 agent 体验 |
| **IronClaw** | 企业级 Agent 平台（通知中心、WebUI 设计系统、子代理后台模式） | 企业/团队协作场景 | 显著侧重**治理与基础设施**（通知收件箱、设计系统 Epic、APDD 评估），架构走"平台化"路线 |
| **CoPaw** | 多 Agent 协作 + 多模型（MiniMax 深度绑定）+ 技能市场 | 中文社区、多 agent 协作开发者 | 网易有道背景，与 MiniMax/Qwen 深度集成；技能引擎（SOP 与规则解耦）与 Webhook 是差异化方向；**多 agent 间通信稳定性和内存管理是当前短板** |
| **ZeroClaw** | 高度治理化的多 agent 平台（RFC 驱动、插件 egress 策略、ZeroRelay 安全传输） | 重视安全与可治理性的组织用户 | **架构治理能力在生态内最强**（ADR 清单、决策追踪器、多个 RFC 并行推进）；插件 wasi:http egress 策略与 mTLS 支持是其安全差异化标签 |
| **LobsterAI** | 桌面应用形态的个人助手（资料库/Artifacts 中心） | 桌面端个人用户 | 偏产品体验打磨方向：登录引导、埋点归因、套餐模型目录；社区侧参与度偏低 |
| **Moltis** | 多沙箱后端 + 多渠道集成 | 安全敏感、多云环境用户 | **沙箱抽象层最丰富**（Apple Container、Docker、Coder、未来 K8s）；订阅 OAuth（Codex/Grok/Copilot）覆盖在生态内最全面 |

---

## 6. 社区热度与成熟度

**第一梯队——快速迭代期（高活跃 + 架构演进中）**：**OpenClaw**（规模最大，但审核积压严重）、**ZeroClaw**（RFC 驱动、治理架构持续重构）、**CoPaw**（历史 PR 集中合并、吞吐提升，但稳定性欠账突出）、**IronClaw**（通知系统重构，设计系统迁移中）。

**第二梯队——高质量巩固期（高合并率 + 问题闭环快）**：**NanoBot**（16 条 PR 当日合并，修复与反馈高度对齐）、**Moltis**（6 条 PR 全部闭环，修复效率生态内最优）、**LobsterAI**（14 条 PR 合并，产品体验打磨节奏稳健）。

**第三梯队——活跃但瓶颈明显**：**Hermes Agent**（响应快但积压多、回归问题频发）、**NanoClaw**（核心团队贡献集中但合并率仅 10%，44 条 PR 待合）。

**第四梯队——低活跃/停滞**：**PicoClaw**（核心功能请求搁置 6 个月、外部 PR 无人审核）、**NullClaw / TinyClaw / ZeptoClaw**（无活动）。

**成熟度判断**：生态内尚无项目达到"稳定成熟"标准——即便最健康的 NanoBot/Moltis 也处于高频 bug 修复阶段。治理与可靠性显然处于成长期，健康的项目（NanoBot、Moltis）展现出两条共性：问题闭环速度快、社区反馈与修复高度对齐。

---

## 7. 值得关注的趋势信号

**信号 1：多 Agent 部署已从试验走向生产，但权限隔离与资源管理是共同短板。**
ZeroClaw 的 cron 越权（S0）与 OpenClaw 的多 agent dreaming 内存超限并非孤例——多实例部署正在成为真实使用场景，而安全与资源管理机制尚未跟上。对开发者而言，在设计多代理系统时**应将 agent 间隔离（权限、资源、文件系统）作为第一优先级架构需求**，而非后期补丁。

**信号 2：数据可靠性是生态级痛点——"静默失败"是用户最不能接受的行为。**
从 OpenClaw"deny write 后 agent 虚报成功"到 NanoBot"Gateway 重启后任务进度丢失"，用户对"没有提示的失败"表达了极强的负面情绪。这与传统软件"fail loudly"的原则高度一致。**对 AI 助手而言，在无法保证操作成功时不假装成功，是最基本的信任建设**——从"假装成功"到"显式失败"应成为行业默认行为标准。

**信号 3：长期运行稳定性（内存泄漏、进程泄漏、僵尸进程）正成为分布式 agent 的核心挑战。**
CoPaw 的 20.7GB 内存累积、OpenClaw 的 hook/tool 子进程泄漏、IronClaw 的桌面远程后端进程泄漏——"跑得越久越不稳定"是多项目共同的模式。这表明**长时间运行的 agent 需要生命周期管理（进程回收、状态持久化、崩溃恢复）作为一等公民设计**，而非事后补救。

**信号 4：交互入口从终端向浏览器迁移的趋势明确，且出现了 WebAssembly 新变量。**
PicoClaw（Web UI roadmap）、IronClaw（WebUI 语音补齐）、ZeroClaw（Rust/WASM 评估）——多项目正在投资浏览器端。更值得关注的是 **ZeroClaw 对 Rust/WASM 替代 React/Vite 的探索**：消除 Node.js 依赖可能成为轻量部署的一个新方向，对嵌入式/边缘场景（如 PicoClaw 的硬件背景）尤其相关。

**信号 5：订阅 OAuth 正在取代 API Key 成为主流认证方式。**
Moltis 将 Codex/Copilot 的 OAuth 模式扩展到 Grok 订阅——用户明确表达"不想为每个服务配置 API Key"。对 provider 生态而言，**统一认证体验可能成为用户选择 agent 平台的关键差异化因素**。

**信号 6：模型接入的"非 OpenAI 标准"兼容性问题持续存在。**
阿里云百炼/DashScope 不暴露 `/v1/models`、Anthropic 兼容提供商 404 处理、自定义 embedding 维度——云厂商端点与 OpenAI 标准的不一致是跨项目反复出现的摩擦点。agent 框架层应**以 OpenAPI 契约测试覆盖非标准端点**，避免在集成层重复踩坑。

**信号 7：治理与架构决策透明度正在成为大型项目的社区关注焦点。**
ZeroClaw 的 RFC 决策队列（#8692）获得持续高评论量，OpenClaw 的测试/脚本 PR 大量合并——社区不仅关心功能，也在关注**项目如何做决策、如何清理技术债**。对项目维护者而言，结构化的决策追踪与明确的路线图沟通，是维持社区信任的隐形基建。

---

*本报告基于 2026-08-25 各项目 GitHub 公开 Issue/PR 数据自动生成，数据来源为各项目仓库公开动态。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-25

## 今日速览

NanoBot 项目今日活跃度极高，24 小时内产生 10 条 Issue 和 31 条 PR 动态，显示出强劲的社区参与度与维护节奏。共 16 条 PR 已合并或关闭，涵盖性能优化（find_files 扫描、事件循环响应性）、Telegram 富消息修复、子代理容错（failOnToolError 移除）等核心稳定性改进；同时有 15 条 PR 仍在待合并状态，其中 mst-python 元搜索集成（PR #5234）和子代理部分完成标注修复（PR #5152）已存在冲突亟待解决。目前无新版本发布。项目处于高频迭代期，修复方向和用户反馈高度对齐，整体健康度良好。

---

## 项目进展

今日合并/关闭的 PR 共 16 条，推进了以下方向：

**核心 Agent 稳定性与容错（重要）**

- **PR #5523** [已合并] — 移除 `failOnToolError` 配置及 fail-fast 路径，将工具异常返回给模型，使子代理可在同一轮次内从工具错误中恢复，显著提升多步任务的容错能力。
- **PR #5529** [已合并] — 仅在回合结束时等待后台子代理结果，避免阻塞主 runner 的常规 pending-message 排空，优化执行效率。
- **PR #5526** [已合并] — 将会话管理工具重命名为 `exec_session`，新增 `until_exit` 与 `timeout_ms` 控制，使代理无需轮询即可等待命令执行完成。

**Gateway 与性能（重要）**

- **PR #5522** [已合并，p1] — 将 gateway 可达的文件系统、会话、持久化、设置、cron、触发器、渠道及媒体工作移出事件循环线程，保持调用方同步契约不变，大幅提升事件循环响应性（NAN-33）。
- **PR #5533** [已合并，p1] — find_files 完整扫描移至 worker 线程，以预算化的 `os.scandir` 替代重复 pathlib 元数据调用，并限制分页预读后的路径排序扫描，解决大目录下工具响应迟钝问题。

**Telegram 与渠道修复**

- **PR #5531** [待合并，p2] — 修复 `rich_messages: true` 与 `streaming: true`（默认）互斥导致富消息永不渲染的问题，在流式结束时将预览原地升级为富消息。
- **PR #5518** [已合并] — 记录每次物理 provider 请求的 TTFT 与生成耗时，在统一 usage 持久化之前附加时序数据，保持重试/回退粒度。

**WebUI 与工具增强**

- **PR #5525** [已合并] — `grep` 工具改为按需内容检索，返回受限的匹配片段（含 5 行上下文）；搜索 PDF/DOCX/XLSX/PPTX 时使用稳定的页码/段落/表格/幻灯片定位。
- **PR #5530** [已合并] — TUI 短对话场景下，将转录区域与编辑器保持顶部对齐，避免高终端窗口中内容空悬。

**新 Provider 集成**

- **PR #5521** [已合并] — 正式集成 **AnySearch** 为 Web 搜索 Provider（key 可选、支持匿名配额），修复了 Issue #5505 的诉求，文档、WebUI 品牌与测试同步更新。

---

## 社区热点

**1. AnySearch 社区集成请求（Issue #5505）→ 当日即被 PR 承接**

- [Issue #5505](https://github.com/HKUDS/nanobot/issues/5505)：AnySearch 团队自荐其统一实时搜索工具，提供 API/MCP/Skill 三种接入方式，提出按键可选、匿名配额的方式集成，3 条评论。
- **对应 PR #5521 当日已合并**，从提交到落地仅约一天，展示了项目对社区新 provider 的高响应速度。

**2. Telegram 富消息 + 流式互斥问题（Issue #5516 → 已有修复 PR #5531）**

- [Issue #5516](https://github.com/HKUDS/nanobot/issues/5516)：用户明确反馈 `rich_messages: true` 与默认开启的 `streaming` 互相排斥，富消息永远不会渲染，最终消息走旧版 HTML editMessageText 路径。这影响了 #4488/#4539 引入的富消息功能的实际可用性。
- **PR #5531 已提交修复**，在流式结束时原地将预览升级为富消息，目前待合并。

**3. unifiedSession 下 WebUI 侧栏标题始终为 "Untitled"（Issue #5527 → 已有修复 PR #5528）**

- [Issue #5527](https://github.com/HKUDS/nanobot/issues/5527)：在 `unifiedSession: true` 模式下，所有轮次路由到共享 `unified:default` 会话，标题生成与持久化发生在这个共享会话上，但 WebUI 侧栏按 `websocket:<id>` 逐会话渲染，导致侧栏永远显示 "Untitled"。
- **PR #5528 当日提交修复**，将生成的标题投射到 unifiedSession 下的各 per-chat 会话上。

---

## Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| **P2** | [#5532](https://github.com/HKUDS/nanobot/issues/5532) | `autocompact.py` 缺少 `mask_session_key` 导入，用户删除资源+清理记忆的中文指令触发崩溃（loop.py 第 1423 行） | ⚠️ 无修复 PR |
| **P2** | [#5512](https://github.com/HKUDS/nanobot/issues/5512) | Gateway 重启后 WebUI 聊天卡在"转圈"状态：前端永远收不到 `goal_status: idle` 推送，`isStreaming` 恒为 true | ⚠️ 无修复 PR |
| **P2** | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram 富消息与流式互斥，`sendRichMessage` 在 streaming 下从不被调用 | ✅ PR #5531 已提交待合并 |

**值得注意的修复 PR（全部已合并）：**

- **PR #5522**（p1）：Gateway 事件循环阻塞问题（NAN-33）——将各类 IO 工作移出事件循环线程，是今日最高优先级的稳定性修复。
- **PR #5533**（p1）：find_files 工具在大目录下响应迟钝——改为 worker 线程 + 预算化遍历。
- **PR #5529**：后台子代理导致主 runner 被非必要阻塞的问题。

---

## 功能请求与路线图信号

以下功能请求均来自 yrxeva 提交，且均无对应 PR 承接，但指向清晰的路线图方向：

**自动化与运维方向：**

1. **[#5510](https://github.com/HKUDS/nanobot/issues/5510) 零 Token 条件触发器** — 以事件驱动替代心跳轮询，避免空转消耗完整 LLM turn。适合"文件到达后通知"等简单场景，是成本敏感用户的直接诉求。
2. **[#5513](https://github.com/HKUDS/nanobot/issues/5513) Cron 结果路由到可配置频道** — 让定时任务（健康检查、日报、巡检）的结果不再混入个人对话，支持批量归档。与持续增长的 cron 用户群高度相关。
3. **[#5511](https://github.com/HKUDS/nanobot/issues/5511) 崩溃安全的任务账本** — Gateway 重启后多步任务丢失内存进度，需要持久化账本以便恢复。与今日合并的 #5523（子代理容错）形成互补，是 Agent 可靠性的重要一环。

**WebUI 方向：**

4. **[#5524](https://github.com/HKUDS/nanobot/issues/5524) 会话结束通知铃声** — 默认关闭，提供设置开关。用户等待长任务时无需盯屏。
5. **[#5509](https://github.com/HKUDS/nanobot/issues/5509) SQLite FTS5 索引加速会话搜索** — `search_sessions` 目前每次全量扫描 JSONL，数百会话后变慢，FTS5 镜像索引是明确的技术方案建议。

**搜索方向：**

6. **[#5505](https://github.com/HKUDS/nanobot/issues/5505) AnySearch Provider** — 已被 PR #5521 合并，短期内不会重复纳入。

**综合判断：** #5531（Telegram）与 #5528（unifiedSession 标题）的修复让 p2 级 bug 基本清空；下阶段最可能被纳入的路线图项是 #5509（FTS5 搜索性能，方案明确且独立）、#5513（cron 路由，影响面大），以及 #5511（崩溃安全账本，与本周 agent 稳定性工作主题一致）。#5510 的零 Token 触发器设计空间较大，预计需要更多讨论后才会落地。

---

## 用户反馈摘要

从 Issue 与评论中提炼的真实用户反馈：

- **Telegram 富消息不可用（#5516）**：用户明确指出 opt-in 功能（#4488/#4539 引入）与默认的 streaming 互斥，导致 `rich_messages: true` 形同虚设。这是"功能已发布但默认配置下无法使用"的典型体验落差，评论中透露出对配置位之间缺乏联动校验的不满。
- **中文指令触发崩溃（#5532）**：用户用中文自然语言指令执行"删除之前创建的所有资源包括本地新建的文件（不得清理技能目录），并清理所有记忆"时，直接触发 `missing import` 异常。表明非英文用户的自然语言路径同样在持续发生，多语言场景下的测试覆盖尚不充分。
- **Gateway 重启后 WebUI 失联（#5512）**：用户描述了明确的复现场景——Gateway 重启后前端永远的 loading 状态——属于基础设施可靠性问题，会直接打击用户对长任务执行的信任感。
- **unifiedSession 标题丢失（#5527）**：配置项开启后 WebUI 侧栏全为 "Untitled"，严重影响多会话导航体验，用户一针见血地指出了"数据写到了共享会话、渲染却按独立会话"的架构错位。
- **多步任务丢失进度（#5511）**：Gateway 重启丢失内存中的多步任务进度，用户必须手动重新描述任务或运行彻底丢失，对 Agent 的可用性构成根本性挑战。

---

## 待处理积压

以下 Issue/PR 已存在较长时间或处于停滞状态，建议维护者优先关注：

| 类型 | 编号 | 描述 | 阻塞时间 | 状态 |
|------|------|------|----------|------|
| PR | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | mst-python 元搜索 provider 集成（p1，已标记 **conflict**） | 已开放 3 周（2026-08-03 创建） | 需解决冲突，来自 goodtiding5 |
| PR | [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 子代理部分完成结果标记（存在冲突） | 已开放近 4 周（2026-07-28 创建） | 需解决冲突，有 regression 标签 |
| PR | [#5504](https://github.com/HKUDS/nanobot/pull/5504) | WebUI 展示模型重试状态（NAN-34，p2） | 2026-08-24 创建，无更新 | 待合并 |

其中 #5234 与 #5152 均已进入冲突状态超过一天，考虑到 #5522/#5523 等底层 refactor 频繁合入，这两个 PR 需要尽快 rebase，否则冲突面将持续扩大。建议维护者在下一批合并前去重并协调冲突解决。

---

*数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库 2026-08-25 动态。本日报基于仓库公开 Issue/PR 数据自动生成，如需引用或转载请注明来源。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-25

## 1. 今日速览

今日 Hermes Agent 项目异常活跃，24小时内产生 50 条 Issue 更新（46 条活跃，4 条关闭）和 50 条 PR 更新（42 条待合并，8 条已合并/关闭），无新版本发布。社区关注焦点集中在 MCP stdio 子进程存活检测逻辑反转（#94335、#94637）导致的系统性快速失败，以及桌面端多项回归（语音对话、Cron 创建、远程后端连接超时）。值得关注的是，议题 #94335 在数小时内即获得了修复 PR #94339 的响应，PR 提交流转效率较高，但大量 P1/P2 级未修复 Bug 仍积压中。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 8 个 PR 中，较重要的有：

- **[#94633] feat(docker): trusted profiles can opt into one shared persistent container**（已关闭）— [链接](https://github.com/NousResearch/hermes-agent/pull/94633) — 恢复 #84775 的 salvage 版本：受信任的 profiles 可通过设置相同的 `terminal.docker_shared_container_key` 共享一个持久化 Docker 容器；默认空键下每个 profile 保持独立容器（与 #94560 确立的行为一致）。该改动为多 profile 场景下 Docker 资源复用提供了灵活性。
- **[#94639] feat(memory): providers can require a durable checkpoint before lossy compaction**（已关闭）— [链接](https://github.com/NousResearch/hermes-agent/pull/94639) — 修复 #93986 并 salvage #93996：外部持久化存储的记忆 provider 现在可以在上下文压缩的有损重写前强制要求存档已完成（opt-in fail-closed 检查点契约），取代原先的 best-effort 行为，增强了记忆数据完整性保障。

## 4. 社区热点

今日讨论热度最高的议题：

- **[#66616] Skills index is stale or degraded**（93 条评论）— [链接](https://github.com/NousResearch/hermes-agent/issues/66616) — 自动新鲜度探测失败，Skills Hub 索引已 29.8 小时未重建（限额 26 小时），状态为 `degraded`。该议题长期悬挂（自 2026-07-18 创建），持续引发社区关注，反映用户对 Skills Hub 可用性的担忧。
- **[#12220] Support Bailian/DashScope endpoints that don't expose /v1/models**（6 条评论）— [链接](https://github.com/NousResearch/hermes-agent/issues/12220) — 阿里云百炼/DashScope 端点（用于 Qwen、GLM、Kimi、MiniMax 模型）未实现标准 OpenAI `/v1/models` 端点，导致交互式切换模型时验证失败。
- **[#91668] Desktop SSH connections and `serve` backends leak on remote gateway after Cmd+Q**（5 条评论）— [链接](https://github.com/NousResearch/hermes-agent/issues/91668) — 桌面端通过 SSH 连接远程 Hermes 网关后，退出应用不清理 `sshd` 会话和 `hermes serve --isolated` 后端进程，持续累积资源泄漏。

**社区诉求分析**：最活跃的议题反映了三类核心诉求：一是基础设施可靠性（Skills Hub 索引持续不可用），二是多平台兼容性（非 OpenAI 标准端点的适配），三是资源生命周期管理（远程后端进程泄漏）。这些均属日常使用中的"慢性痛点"而非新功能需求。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

**P1 级（严重）：**

- **[#94335] `_stdio_children_dead()` inverted liveness check fail-fasts every stdio MCP call in oneshot (-z) sessions** — [链接](https://github.com/NousResearch/hermes-agent/issues/94335) — `tools/mcp_tool.py::_stdio_children_dead` 在子进程存活时错误返回 `True`（"全部子进程死亡"），导致 oneshot 会话中所有 stdio MCP 调用快速失败。已有修复 PR [#94339](https://github.com/NousResearch/hermes-agent/pull/94339) 待合并。
- **[#94637] MCP stdio tool calls always fast-fail with 'subprocess has exited' after #85125** — [链接](https://github.com/NousResearch/hermes-agent/issues/94637) — 与 #94335 高度相关（已标记 duplicate），Windows 11 上所有 stdio MCP 服务器受影响。
- **[#94248] Gateway SIGSEGV 17-72 ms after delegate deadlines with Codex SSL reads (macOS arm64, v0.20.4)** — [链接](https://github.com/NousResearch/hermes-agent/issues/94248) — 长期运行的网关在委派 worker 达到 600 秒截止时间时崩溃，可复现 12 份 Apple 原生崩溃报告。当前无修复 PR。
- **[#92343] Classic CLI: Shift+letter still leaks literal CSI text after #87511** — [链接](https://github.com/NousResearch/hermes-agent/issues/92343) — #87511 的修复未完全生效，Ghostty 终端上 Shift+字母组合键仍会在提示缓冲区中插入字面量 `[27;2;<code>~` 文本。获得 2 个 👍。

**P2 级（中等）：**

- **[#94540] After `hermes update`, launchd-managed gateway services exit 75 and are never respawned** — [链接](https://github.com/NousResearch/hermes-agent/issues/94540) — macOS 上更新后所有 7 个 launchd 管理的网关服务（默认 + 6 profiles）均以 code 75 退出且不再重新拉起。
- **[#91621] large-context Codex TTFB scaling is immediately capped back to 120s** — [链接](https://github.com/NousResearch/hermes-agent/issues/91621) — OpenAI Codex 的大请求首字节时间缩放超时被默认上限立即拉回 120 秒。
- **[#94477] `hermes update` resets instead of fast-forwarding on Windows shallow-clone installs** — [链接](https://github.com/NousResearch/hermes-agent/issues/94477) — Windows 浅克隆安装上执行无深度限制的 `git fetch` 导致更新重置而非快进。
- **[#94609] Bot chat resume fails: /api/sessions/{id} does not fall back across profiles** — [链接](https://github.com/NousResearch/hermes-agent/issues/94609) — 桌面端打开 bot 聊天报 `resume failed. session not found`，会话接口未跨 profile 回退（消息端点则有回退）。
- **[#75460] Windows: Desktop update button always aborts on busy machines** — [链接](https://github.com/NousResearch/hermes-agent/issues/75460) — venv-blocker 预检扫描需超过 15 秒但被 `SCAN_TIMEOUT_MS` 在 15 秒处终止，超时被泛化为探测失败。

**P3 级（较低）：**

- **[#62690] computer_use capture(app='screen') returns empty 0x0 on macOS**（已关闭）— [链接](https://github.com/NousResearch/hermes-agent/issues/62690) — 当 Finder 桌面窗口不在 `list_windows` 中时整屏捕获路径不可达。已关闭，推测已找到解决方案或不再追踪。

**已有对应修复 PR 的：** #94335 → PR #94339、#94642 → PR #94665、#94516 → PR #94670、#94538（未在 Issue 列表中但 PR 引用）→ PR #94666、#94540 暂无。

## 6. 功能请求与路线图信号

今日值得关注的功能请求与实现信号：

- **[#94674] Add skill: hermes-skill-cleaner**（PR，待合并）— [链接](https://github.com/NousResearch/hermes-agent/pull/94674) — 通过 Hermes Skills Hub 提交新技能，已通过 Skills Guard 扫描，反映 Skills Hub 生态正在增长。
- **[#94667] feat(gateway): add pre-model /senv for messenger secret entry**（PR，待合并）— [链接](https://github.com/NousResearch/hermes-agent/pull/94667) — 新增 `/secure-env` 命令，允许在 Telegram、Discord、Slack 等网关聊天中，在消息到达模型前安全的将密钥存入 profile `.env` 或技能 `.env` 中。该功能有安全边界风险标记，需要维护者评审。
- **[#83799] Add official vendor-hosted remote MCP servers to optional-mcps catalog**（Issue，P3）— [链接](https://github.com/NousResearch/hermes-agent/issues/83799) — 建议将 GitHub、X 只读、Google Gmail/Drive/Calendar、Playwright 等官方供应商托管的远程 MCP 服务器加入可选目录。该需求的挖掘背景是 2026-08-11 的 cursor/plugins 摄入发现了 14 个新增第三方插件。
- **[#92885] Give the Desktop preview browser an independent color scheme**（Issue，P3）— [链接](https://github.com/NousResearch/hermes-agent/issues/92885) — 桌面端应用内浏览器应支持独立于系统/Hermes 深色模式的颜色方案，避免预览网页继承 `prefers-color-scheme: dark`。

结合现有 PR 判断，#94667 和 #94674 最可能被纳入下一版本。#83799 已开放两周且为 P3，短期内可能不会优先处理。

## 7. 用户反馈摘要

- **Docker 共享容器的需求**：PR #94633 的提出背景是 #94560 确立了每个 profile 独立 Docker 容器的行为，而部分用户需要"受信任的 profiles 共享一个持久化容器"以节省资源。该 PR 被标记为 salvage（抢救性恢复），说明此前曾有过相关尝试。
- **远端连接超时是桌面端的突出痛点**：Issue #94642 与 PR #94665 表明，在繁忙的远端主机上，池化的 `hermes serve --isolated` 冷启动需要 60-150 秒才能打印 `HERMES_BACKEND_READY`，但桌面端以硬编码预算提前放弃，用户卡在"connecting"覆盖层。提交 PR 的用户给出了详细的超时预算数据，帮助定位问题。
- **Windows HiDPI 坐标点击**：PR #94666 修复了 `computer_use` 在 Windows 缩放显示（如 150%）下截图使用物理像素、输入派发（SendInput）使用逻辑单位导致的坐标偏差，是自动化场景下直接影响用户实际操作的问题。
- **MCP 生态的第三方接入活跃度**：Issue #83799 的提出者引用了 14 个新增的第三方插件包装官方托管远程 MCP 服务器，说明 MCP 生态外延仍在扩展，用户期望官方能直接收录这些服务器以减少中间包装层。

## 8. 待处理积压

以下为值得维护者关注的长尾项：

- **[#66616] Skills index is stale or degraded**（93 条评论，自 2026-07-18）— [链接](https://github.com/NousResearch/hermes-agent/issues/66616) — 高评论数但无修复 PR，Skills Hub 索引持续处于 degraded 状态超一个月，可能影响所有依赖 Skills Hub 的用户。
- **[#12220] Support Bailian/DashScope endpoints that don't expose /v1/models**（自 2026-04-18，4 个月未解决）— [链接](https://github.com/NousResearch/hermes-agent/issues/12220) — 阿里云百炼端点的兼容性问题长期未处理，影响 Qwen、GLM、Kimi、MiniMax 等多模型用户在交互式 CLI 中的模型切换。
- **[#62690] computer_use capture(app='screen') returns empty 0x0 on macOS**（已关闭）— [链接](https://github.com/NousResearch/hermes-agent/issues/62690) — 已关闭但关闭原因未标注，如有修复应确认是否已合入主分支。
- **[#88205] Skills hub always says 'Loading the catalog…'**（3 条评论，自 2026-08-17）— [链接](https://github.com/NousResearch/hermes-agent/issues/88205) — 与 #66616 表现的相关性值得排查，用户报告 Skills Hub 始终停留在加载状态。
- **[#91668] Desktop SSH connections and `serve` backends leak on remote gateway after Cmd+Q**（自 2026-08-21，P1）— [链接](https://github.com/NousResearch/hermes-agent/issues/91668) — P1 级资源泄漏问题，已活跃 4 天但尚无对应 PR。

---

**数据说明**：本日报所有条目均基于提供的 GitHub Issue/PR 数据（截至 2026-08-25），未包含源代码变更、CI 状态等超出数据范围的信息。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-25

## 1. 今日速览

PicoClaw 项目今日活跃度中等偏冷。过去 24 小时共产生 3 条 Issue 更新和 1 条 PR 更新，无新版本发布，无 PR 被合并或关闭。社区讨论重心集中在 Web UI 功能规划（#806，10 评论）、MCP 服务器连接失败导致 chat 界面挂起（#3269，7 评论）以及 Slack 图片附件无法上传（#3338）。值得注意的是，当前所有活跃的 Issue 与 PR 均处于长期未合并/未解决状态，其中 #806 为高优先级的路线图级功能请求，但自 2026-02-26 创建以来已搁置六个月。项目整体活跃度偏低，需要维护者关注积压问题并加速关键功能的推进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去 24 小时内没有 PR 被合并或关闭，项目主线推进停滞。目前唯一活跃的 PR #3299（[Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)）提出将 Exa 作为原生 `tools.web` / `web_search` 提供商接入，使用 Exa 的 `POST /search` API（`type: "auto"` + `contents.highlights`），通过 `X-Api-Key` 头认证，并兼容现有的 `d`/`w`/`m` 参数。该 PR 创建于 2026-07-26，已标记为 stale，至今无评论、无合并，处于停滞状态。若被合并，PicoClaw 的 web 搜索能力将新增一个可用提供商。

## 4. 社区热点

- **[Issue #806: Add webUI support](https://github.com/sipeed/picoclaw/issues/806)** — 10 条评论，👍 8 次。这是当前社区讨论热度最高的话题。作者 Zepan 提议开发浏览器端的 Web UI 以降低入门门槛，认为虽然 TUI 对终端用户友好，但浏览器界面是最直观的入口。该 Issue 同时标记为 `enhancement`、`priority: high` 和 `roadmap`，且作者明确提到目前正在进行重构（"Refactoring now"），暗示 Web UI 是重构后的大方向。
- **[Issue #3269: MCP server 连接失败导致 agent loop 挂起](https://github.com/sipeed/picoclaw/issues/3269)** — 7 条评论，👍 1 次。用户 ruiyigen 报告了一个严重的稳定性问题：当 MCP 服务器连接失败时，agent 循环会挂起，导致 chat 界面完全停止响应。该问题涉及环境为 picoclaw nightly (git: 2cf030d2) + Go。
- 两者分别代表了社区的两大核心诉求：**易用性提升**（Web UI）和**可靠性保障**（MCP 故障恢复）。

## 5. Bug 与稳定性

| 严重程度 | Issue | 状态 | 是否有 Fix PR |
|---------|-------|------|--------------|
| **高** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP 服务器连接失败导致 agent loop 挂起，chat 界面完全停止回复 | OPEN, stale | 无 |
| **中** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) — Slack 图片附件上传失败：`SendMedia` 构造 `slack.UploadFileParameters` 时未设置 `FileSize`，导致 slack-go SDK 在发起网络请求前就拒绝所有上传（`file.upload.v2: file size cannot be 0`） | OPEN, stale | 无 |

两个 Bug 均持续了数周未获修复。其中 #3269 影响聊天核心功能，建议维护者优先处理。

## 6. 功能请求与路线图信号

- **[Issue #806: Web UI 支持](https://github.com/sipeed/picoclaw/issues/806)** — 作者 Zepan（疑似核心维护者）标记为 `roadmap` + `priority: high`，并注明"Refactoring now"，说明 Web UI 已被纳入官方路线图，当前正在进行代码重构为 Web UI 铺路。这是最重要的路线图信号。
- **[PR #3299: 原生 Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — 若被采纳，将扩展 `tools.web` / `web_search` 的提供商生态。目前尚不清楚维护者态度，但该 PR 已 stale，短期内不太可能被合并。

## 7. 用户反馈摘要

- **MCP 故障恢复需求迫切**（来自 #3269 评论）：用户在实际使用中依赖 MCP 服务器，一旦连接失败，整个对话流程即不可用，且没有任何超时或降级机制。这反映了用户对生产级稳定性的期待。
- **Slack 集成存在基础功能缺陷**（来自 #3338）：Slack 媒体上传完全不可用，错误信息指向 `SendMedia` 代码中遗漏了 `FileSize` 字段这一明确缺陷，属于实现层面的低级错误，用户期待快速修复。
- **Web UI 呼声高涨**（来自 #806 评论与 👍 数）：社区对浏览器端界面有强烈需求，用户认为 TUI 对于非技术背景的入门者门槛过高，浏览器界面是扩大用户基础的关键一步。

## 8. 待处理积压

- **[Issue #806: Web UI 支持](https://github.com/sipeed/picoclaw/issues/806)** — **高优先级积压**。标记为 `priority: high` 和 `roadmap`，创建于 2026-02-26，至今已过去 6 个月。虽然作者提到正在重构，但该 Issue 始终未关闭或标注具体进度，社区缺乏可见的推进时间表。
- **[PR #3299: Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — 创建于 2026-07-26，至今无任何维护者回应，已自动标记为 stale。外部贡献者的工作长期无人审核，不仅浪费社区贡献热情，也会削弱外部提交的意愿。
- **[Issue #3269: MCP 连接失败导致挂起](https://github.com/sipeed/picoclaw/issues/3269)** — 创建于 2026-07-20，已 stale，无 fix PR，涉及的却是聊天核心功能的稳定性问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-08-25

---

## 1. 今日速览

项目今日整体处于**高活跃度**状态。过去 24 小时 PR 流量显著（49 条），其中 44 条待合并，5 条已合并/关闭，合并率约 10%，评审积压明显。核心团队贡献集中：amit-shafnir 一人提交了 12+ 条 PR，覆盖 pnpm 配置修复、setup 驱动协议、类型系统增强等方向，且多为 stacked 系列（channels/providers twin），表明底层架构正在系统性加固。新版本 **v2.3.0** 发布，引入 Slack 多 agent 体验（breaking），但保留经典 bot 兼容路径。仅 1 条新 Issue（#3529），社区侧反馈偏少，讨论热度集中在 PR 而非 Issue。

---

## 2. 版本发布

### v2.3.0 —— [Release 链接](https://github.com/qwibitai/nanoclaw/releases)

**核心变更**：Per-agent 独立 Slack App、支持从 Slack 直接 spawn agent，以及 UX 改进，面向经典单 bot Slack 安装开放。

**破坏性变更（BREAKING）**：
- 经典 Slack 单 bot 模式**仍可正常使用**，本次 gate 是征求决策而非强制迁移。
- 新安装和非 Slack 集成不受影响。

**迁移注意事项**：经典安装无需立即操作；选择迁移到 per-agent Slack app 的用户需重新配置 Slack 应用分发与权限。官方未提供自动迁移脚本的说明，建议先行测试再切换。

---

## 3. 项目进展

过去 24 小时合并/关闭 5 条 PR（链接均来自待合并列表之外的更新记录）。结合 PR 主题可判断项目正在以下方向推进：

| 方向 | 代表 PR | 状态 |
|------|---------|------|
| **Setup 可编程驱动** | #3484 [auth secrets 不进 argv](https://github.com/qwibitai/nanoclaw/issues/3484)、#3485 [driver 协议](https://github.com/qwibitai/nanoclaw/issues/3485)、#3486 [preseed 目录暴露](https://github.com/qwibitai/nanoclaw/issues/3486)、#3487 [时区 preseed](https://github.com/qwibitai/nanoclaw/issues/3487) | 待合并（系列性架构升级） |
| **pnpm 发布门禁修复** | #3492 [minimumReleaseAge 修复 + 回归测试](https://github.com/qwibitai/nanoclaw/issues/3492)、#3471/#3470 [providers/channels twin](https://github.com/qwibitai/nanoclaw/issues/3471) | 待合并，修复安全门禁失效 |
| **Typing 指示器生命周期** | #3491 [adapter 自声明](https://github.com/qwibitai/nanoclaw/issues/3491)、#3468 [WhatsApp Cloud 25s](https://github.com/qwibitai/nanoclaw/issues/3468) | 待合并，减少无效请求 |
| **Host 健康检查** | #3482 [结构化 host health](https://github.com/qwibitai/nanoclaw/issues/3482) | 待合并，可编程运维能力 |
| **多 host 单 DB 一致性** | #3530 [leader election](https://github.com/qwibitai/nanoclaw/issues/3530) | 待合并（stacked on #3528） |
| **Chat core 升级** | #3490 [chat core 4.32.0 + SDK 对齐](https://github.com/qwibitai/nanoclaw/issues/3490) | 待合并，修复 Telegram 链接丢消息 |

**整体评估**：项目正从"终端交互优先"向"可编程、可自动化、多后端一致"方向演进，核心是 setup 自动化与 health/typed 接口的结构化暴露。

---

## 4. 社区热点

过去 24 小时 PR 评论数均在 `undefined`（即未提供有效评论统计），Issue #3529 评论为 0。因此无法按评论数排序。按主题关注度与参与范围判断，以下两个话题热度最高：

- **#3529 [update-nanoclaw skill refresh 破坏本地 adapter](https://github.com/qwibitai/nanoclaw/issues/3529)**（新开，0 评论）
  - 用户本地自定义 adapter 在 skill refresh 后被误判为 skill 导入并被改写/覆盖。
  - 诉求：更新流程不应拥有"不可选退出"的副作用。

- **#3507 [Mattermost 安装 skill](https://github.com/qwibitai/nanoclaw/pull/3507)**（PR，Feature+Skill）
  - 新增渠道集成 skill，标志项目对多聊天平台扩展的持续投入，可能成为下一阶段社区采纳重点。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **高** | [#3529](https://github.com/qwibitai/nanoclaw/issues/3529)：`update-nanoclaw` skill refresh 将 `src/channels/index.ts` 中所有 channel import 视为 skill，导致用户本地 adapter 被覆盖且**无 opt-out** | 无 fix PR |
| **中** | [#3490](https://github.com/qwibitai/nanoclaw/issues/3490)：Telegram 静默丢弃含奇数个 `_`/`*`/`~` 的链接（影响 vault 链接下发）；已有 fix PR | 待合并 |
| **中** | [#3492](https://github.com/qwibitai/nanoclaw/issues/3492)/[#3470](https://github.com/qwibitai/nanoclaw/issues/3470)/[#3471](https://github.com/qwibitai/nanoclaw/issues/3471)：pnpm `minimumReleaseAge` 配置被嵌套在 `pnpm:` key 下导致**发布安全门禁实际未生效**，违反 `CLAUDE.md` 声明的 3 天规则 | fix PR 待合并 |
| **低-中** | [#3484](https://github.com/qwibitai/nanoclaw/issues/3484)：setup 中粘贴的 OAuth token / API key 会**明文出现在子进程 argv**（泄露风险） | fix PR 待合并 |
| **低-中** | [#3483](https://github.com/qwibitai/nanoclaw/issues/3483)：`--uninstall` 在扫描与 rm 之间存在 TOCTOU 竞态，unit 文件可能被替换后误删 | fix PR 待合并 |

---

## 6. 功能请求与路线图信号

| 信号来源 | 功能方向 | 路线图判断 |
|----------|----------|------------|
| #3507 [Mattermost 安装 skill](https://github.com/qwibitai/nanoclaw/pull/3507) | 更多聊天渠道支持 | 高概率纳入下一版本（Feature skill 类型，贡献者来自外部） |
| #3482 [结构化 host health](https://github.com/qwibitai/nanoclaw/issues/3482) | 单次只读 API 返回"安装是否正常 + 内容概览" | 高概率（核心团队提交，配套 setup driver 系列） |
| #3485-#3487 [setup driver/preseed](https://github.com/qwibitai/nanoclaw/issues/3485) | 非交互式安装、外部程序驱动 wizard | 高概率（core-team 系列化推进） |
| #3491 [typing 生命周期声明](https://github.com/qwibitai/nanoclaw/issues/3491) | 渠道 adapter 自行声明 typing 刷新周期 | 中概率（w/ #3468 WhatsApp twin） |
| #3530 [host leader election](https://github.com/qwibitai/nanoclaw/issues/3530) | 共享 central DB 下多 host 一致性 | 中概率（依赖网络后端 central DB 落地） |

结合已合并/关闭 PR 的空间，**v2.4.0 方向可能聚焦于**：渠道扩展（Mattermost + WhatsApp 配套）、setup 自动化协议、host 健康检查 API。

---

## 7. 用户反馈摘要

今日 Issue 侧活跃度低，仅 #3529 一条，属于真实用户报告：

- **痛点**：更新流程（skill refresh）会误判本地 channel adapter 为 skill 并覆盖写入，用户**无法选择退出**该行为。该用户拥有自己的 adapter 并依赖其存活，更新被自身 adapter "阻断"。
- **场景**：本地自定义渠道 adapter + 官方 skill 混用场景，更新流程缺乏黑名单/白名单机制。
- **满意点**（隐含）：v2.3.0 明确保留经典 Slack 兼容，用户不会被强制迁移，属于积极的兼容性信号。

PR 侧评论数据不可用（`undefined`），暂无法提取更多用户语音。

---

## 8. 待处理积压

过去 24 小时无长期未响应的 Issue/PR 数据可供判断。基于当前可见信息：

- **#3529** 为今日新建，暂不构成积压；但该 Issue 涉及**用户数据被覆写**且为 skill refresh 的默认行为，建议核心团队尽快回应或指派至维护者，避免用户流失。
- **44 条待合并 PR** 是当前最大的积压点，其中多数来自 amit-shafnir 同一系列（setup/health/pnpm）。建议维护者优先评审 #3484（安全）、#3492（发布门禁）、#3530（一致性）三条，它们分别涉及安全、供应链与多实例正确性。
- **#3507**（Mattermost skill）已开放约 1 天，若希望吸纳外部贡献者，建议尽快标记可评审状态。

---

*数据来源：NanoClaw GitHub 仓库（github.com/qwibitai/nanoclaw），统计窗口 2026-08-24 至 2026-08-25。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-25

---

## 1. 今日速览

今日 IronClaw 项目活跃度较高：过去 24 小时共有 41 条 Issue 更新（32 条活跃、9 条已关闭）和 34 条 PR 更新（15 条待合并、19 条已合并/关闭），无新版本发布。核心进展集中在通知中心（Notification Center）重构与 WebUI 设计系统迁移：legacy 审批回退逻辑已移除（#7846 合并），通知中心加载骨架屏、Admin Users 共享表单控件迁移、Extensions 面板组件替换等一批 PR 正在推进。Telegram 个人账号关联功能出现两个关联 Bug（#7853、#7862），QA 环境问题值得关注。另有两条来自外部贡献者（neo-sky）的大型 PR 仍在等待评审（#7516、#7826），涉及 IronHub 代理链接的 WebUI 运维面与包安装管道的修复。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日共有 19 个 PR 合并/关闭，其中较重要的合并包括：

| PR | 标题 | 影响 |
|---|---|---|
| [#7846](https://github.com/nearai/ironclaw/issues/7846) | refactor(notifications): retire legacy approval fallback | 移除旧的 `threads?needs_approval=true` 查询、审批兼容层与 localStorage seen 状态，使持久化通知收件箱成为唯一通知来源（对应 Issue #7706） |
| [#7817](https://github.com/nearai/ironclaw/issues/7817) | ci: nextest test pipeline, full-failure signal, PR unthrottle (T2) | 削减 Tests (Reborn) 工作流墙钟时间，红色运行将输出全部失败的测试名称而非仅失败任务 |
| [#7818](https://github.com/nearai/ironclaw/issues/7818) | feat(subagent): background mode — receipt spawns, per-child delivery, activation, healing sweeps (slices 2b+2c) | 开启子代理后台模式的 producer 端（#7788 的后续切片） |
| [#7257](https://github.com/nearai/ironclaw/issues/7257) | docs(design-system): proposal, plan & checklist | WebUI Storybook + 设计系统目录的北向提案文档（Epic #7038） |
| [#7255](https://github.com/nearai/ironclaw/issues/7255) | docs(governance): evaluate the APDD kit + propose scoped integration | 评估 APDD 治理框架并提出范围化集成方案 |
| [#5314](https://github.com/nearai/ironclaw/issues/5314) | fix(reborn): running tool activity details in WebUI v2 | 自动展开有活动详情的工具卡片，工具失败/被拒时恢复手动折叠卡片 |

整体来看，通知系统正在从过渡态收敛为持久化收件箱的单一架构，CI 效率得到改善，子代理后台模式继续按切片推进。

---

## 4. 社区热点

**[#7732](https://github.com/nearai/ironclaw/issues/7732) — Epic: Persistent per-user sandbox with iron-proxy（9 条评论，最高）**

v1.4.0 路线图中的核心 Epic，讨论持久化沙箱方案。当前实现每次创建/销毁容器，目标是通过 iron-proxy 实现持久化用户计算环境。该 Epic 反映了社区对"真正的个人计算机"体验的期待，是当前 roadmap 上最受关注的方向之一。

**[#7812](https://github.com/nearai/ironclaw/issues/7812) — Onboarding suggestions: respect user-level tool permissions（已关闭，3 条评论）**

讨论建议生成应连接用户实际数据工具、同时尊重用户权限设置。已关闭，但衍生出 [#7815](https://github.com/nearai/ironclaw/issues/7815) 继续追踪 connect → suggest → thread 流程的收尾工作。

**[#7853](https://github.com/nearai/ironclaw/issues/7853) — Telegram 个人账号关联无法完成（2 条评论）**

QA 环境中的阻塞 Bug：Telegram 设置流程中 bot 关联成功、个人账号关联失败。社区对该问题的关注度高，因为它直接影响多通道体验的完整性。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 说明 |
|---|---|---|---|
| 🔴 高 | [#7853](https://github.com/nearai/ironclaw/issues/7853) Telegram 个人账号关联无法完成 | OPEN | bot 关联正常，个人账号关联缺失工具。关联 PR #7861 已提出修复 |
| 🔴 高 | [#7862](https://github.com/nearai/ironclaw/issues/7862) 设备关联失败但报错信息过于笼统 | OPEN | `telegram_api_id/api_hash` 未配置时仅显示 "Something went wrong"，缺乏引导性。为排查 #7853 时发现 |
| 🟡 中 | [#7297](https://github.com/nearai/ironclaw/issues/7297) 错误消息在 UI 中累积 | OPEN | 每次新 prompt 后旧错误消息残留，影响聊天可用性 |
| 🟡 中 | [#7845](https://github.com/nearai/ironclaw/issues/7845) 激活建议任务后左侧面板不渲染线程条目 | CLOSED | 线程实质运行正常但侧边栏无入口，需刷新才出现 |
| 🟢 低 | [#7880](https://github.com/nearai/ironclaw/issues/7880) 通知中心加载时无骨架屏 | OPEN | Suspense 无 fallback，对应修复 PR #7883 已开放 |

两个 Telegram 关联相关 Bug（#7853、#7862）同源：`telegram_api_id/api_hash` 配置缺失时错误处理不友好，且提示性工具未接入设置流程。修复 PR #7861 正在等待合并。

---

## 6. 功能请求与路线图信号

以下是今日值得关注的路线图信号：

| Issue/PR | 方向 | 判断 |
|---|---|---|
| [#7867](https://github.com/nearai/ironclaw/issues/7867) WebUI composer 语音输入 | 语音交互 | Slack/Telegram 已支持语音，WebUI 成最后短板，可能进入后续版本 |
| [#7732](https://github.com/nearai/ironclaw/issues/7732) 持久化沙箱 + iron-proxy | 核心架构 | v1.4.0 Epic，持续活跃中，是中期最重要的路线图信号 |
| [#7874](https://github.com/nearai/ironclaw/issues/7874) 资源/策略阻止运行的通知 | 通知系统扩展 | 与 #7875（扩展认证失效通知）一起构建完整的生产者通知体系 |
| [#7875](https://github.com/nearai/ironclaw/issues/7875) 扩展认证失效通知 | 通知系统扩展 | 同上，属于通知体系完善的一部分 |
| [#7876](https://github.com/nearai/ironclaw/issues/7876) 通知生产者生命周期与发布安全 | 基础设施 | 定义确定性 ID 与 best-effort 发布要求，显示团队在加固通知基建 |
| [#7878](https://github.com/nearai/ironclaw/issues/7878) / [#7879](https://github.com/nearai/ironclaw/issues/7879) WebUI 组件统一 | 设计系统 | 与 PR #7881/#7882 对应，持续推进 Epic #7038 Phase 1 |

WebUI 语音输入（#7867）是当前唯一直接面向用户的新功能请求，由于 Slack/Telegram 已具备该能力，Web 端补齐的优先级较高。其余多为内部架构改进。

---

## 7. 用户反馈摘要

- **Telegram 设置流程断裂感强**（#7853、#7862）：用户进入设置流程后无法完成个人账号关联，且错误信息未说明根因。两个 Issue 均来自 QA 实例（Railway），反映该流程在真实部署环境中不够稳健。
- **Gmail 等扩展缺少终端设置指引**（#6774，1 条评论）：用户 deepak.jangir 通过 Slack 反馈 Gmail（和其他 Google Apps）需要 CLI 配置但在 Extensions > Registry UI 中无相关文档指引，社区希望更友好的界面内引导。
- **错误消息堆叠影响聊天可用性**（#7297）：用户每次新的失败 prompt 后旧错误信息仍堆积在界面底部，累积效应降低聊天区域可用空间。
- 整体来看，今日用户反馈集中在**多通道（Telegram）接入体验**和**UI 反馈质量**两方面，未见对核心 AI 能力本身的抱怨。

---

## 8. 待处理积压

以下为长期未响应或等待关注的重要项，建议维护者留意：

| 项目 | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#4625](https://github.com/nearai/ironclaw/issues/4625) Slack 渠道路由代理 Epic | 2026-06-09 | OPEN，1 条评论 | 更新于今日，但长期缺乏讨论；与 #7853 的 Telegram 问题同属多通道主题，可能相互影响 |
| [#7516](https://github.com/nearai/ironclaw/issues/7516) IronHub 代理链接 WebUI 运维面（PR） | 2026-08-12 | OPEN（外部贡献者） | 贡献者类型为 `new`，已开放两周仍未合并，需要 core 成员评审 |
| [#7826](https://github.com/nearai/ironclaw/issues/7826) Hub 发布的包安装修复（PR） | 2026-08-23 | OPEN（外部贡献者） | 新贡献者的第二个 PR，涉及四个目录条目安装失败问题，有待评审 |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) 设计系统 Phase 1 Epic | 2026-08-03 | OPEN | 持续更新（今日仍活跃），但涉及 PR #7257 已关闭，后续切片 #7781/#7782 状态需关注 |
| [#6774](https://github.com/nearai/ironclaw/issues/6774) Gmail 终端设置文档 | 2026-07-28 | OPEN，1 条评论 | 已近一个月，目前停留在改进建议阶段，未有负责人认领 |

**特别提醒**：neo-sky 的两个 PR（#7516、#7826）均为外部贡献者提交，已开放数日至两周，建议 core 团队尽快安排评审，避免挫伤外部贡献积极性。

---

*日报生成时间：2026-08-25 | 数据来源：nearai/ironclaw GitHub 仓库 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 2026-08-25

## 1. 今日速览

LobsterAI 今日保持中高活跃度：24小时内合并/关闭 14 个 PR、待合并 2 个，新增 Issue 1 条且无新版本发布。核心开发集中于资料库（Library/Artifacts）体验优化、设置页模型目录、埋点分析与引导界面改进，显示项目正处于功能打磨与体验迭代阶段。社区侧讨论热度偏低，唯一新 Issue 为微信群满员诉求，整体项目健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 可归纳为以下主线：

| 方向 | 代表 PR | 关键改动 |
|------|---------|----------|
| **资料库体验优化** | #2531（fix(library): 修复本地产物后台刷新闪烁） | 拆分首次加载/后台刷新/分页状态避免骨架屏闪烁；合并历史回填与文件监听事件；新增批量查询接口实现定向更新；删除任务时回退分组；补充协调与 IPC 测试 |
| **产物展示细化** | #2533（fix(artifacts): 区分网页与本地服务的预览展示） | HTML 网页与本地服务拆分为独立展示类型，各自使用不同图标与文案；同步目录类型规则；更新设计文档 |
| **埋点与转化归因** | #2529（feat(analytics): 完善资料库埋点与发布转化归因） | 新增曝光/筛选/搜索/预览/收藏/刷新埋点；区间采集避免原始搜索内容；发布 CTA 到付费订阅的七天归因；失败重试机制 |
| **设置页模型目录** | #2530 / #2535（feat(settings): add plan model catalog） | 新增套餐模型目录标签页；加载文本/图像/视频模型定价表；分类卡片渲染；配套诊断能力 |
| **引导与界面微调** | #2532（fix(sidebar): fade out login promo tip）、#2525、#2527、#2528 | 登录提示 5 秒淡出；技能页默认切回市场标签；积分加载设置 UI；登录引导 |
| **CI 与依赖维护** | #1275、#1276（actions/stale、actions/first-interaction 升级）、#1277（electron 依赖组更新） | 持续维护 GitHub Actions 与 Electron 依赖 |

整体而言，项目在资料库模块上完成了从**刷新机制**到**展示区分**再到**数据埋点**的一体化打磨，推进扎实。

## 4. 社区热点

今日社区讨论热度整体偏低，唯一值得关注的是新开 Issue：

- **Issue #2536 [OPEN] "微信群已满人"**（作者: MurrayHubert | 评论: 1 | 链接: [netease-youdao/LobsterAI Issue #2536](https://github.com/netease-youdao/LobsterAI/issues/2536)）
  - 诉求：现有 WeChat 群已满员，请求开设新群。
  - 分析：说明项目社区有一定用户规模且增长仍在继续，但**新 Issue 仅 1 条且零 👍**，侧面反映今日社区参与度并不高，活跃主要集中在维护者侧的开发提交上。

## 5. Bug 与稳定性

今日未发现新的严重 Bug 或崩溃反馈。涉及稳定性改进的 PR 如下：

- **#2531**：修复本地产物后台刷新导致页面骨架屏闪烁（体验级 Bug，已有 fix PR 合并）
- **#2533**：区分网页与本地服务的预览展示（展示逻辑修正）
- **#2532**：登录提示定时器在 auth 状态变化时的清理（潜在内存/状态泄漏修复）

均为中低严重度问题，已随对应 PR 解决，无遗留高危缺陷报告。

## 6. 功能请求与路线图信号

- **Issue #2536** 请求增设 WeChat 群，属于社区基础设施诉求，非产品功能。
- **PR #2530 / #2535**（plan model catalog）已落地，说明**套餐/订阅模型可视化**方向正在推进，与 #2529 中付费转化归因埋点相互呼应，暗示项目正强化商业化路径。
- **PR #1159 [OPEN，stale]**（feat(cowork): add session fork）：早在 2026-03-31 提出的协作会话分支功能仍未合并，已标记为 stale。该功能允许用户从详情菜单分支创建会话副本，具备一定产品价值，建议维护者评估是否纳入后续版本。

## 7. 用户反馈摘要

今日仅有 1 条新 Issue，无新评论内容可提炼：

- **Issue #2536**：唯一用户反馈为 WeChat 群满员，侧面反映用户基数增长但官方社区承载能力不足。无其他功能不满或痛点表达。

社区反馈信号整体偏弱，建议关注后续几日的 Issue 活跃度。

## 8. 待处理积压

以下为长期未响应或存在风险的项目，建议维护者关注：

| 项目 | 状态 | 说明 |
|------|------|------|
| **PR #1159**（feat(cowork): add session fork） | OPEN / stale | 2026-03-31 创建，距今近 5 个月未合并，功能已实现但长期滞留，建议明确决策 |
| **PR #1277**（chore(deps-dev): bump electron group） | OPEN | Dependabot 自动依赖更新，2026-04-02 创建，更新于今日，仍待合并，建议关注是否与当前 Electron 版本冲突 |
| **Issue #2536**（微信群满员） | OPEN | 今日新建，虽非技术问题，但涉及社区维护，建议尽快响应（新建群或给出替代渠道） |

> 整体评价：LobsterAI 今日开发节奏稳健，资料库模块体验升级与埋点补全是主要亮点；但社区侧讨论量偏低、唯一新 Issue 为群满员诉求，社区运营与用户互动方面存在提升空间。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-08-25

## 1. 今日速览

过去24小时项目保持中等活跃度：共更新 4 条 Issue（3 条已关闭）和 9 条 PR（6 条已合并/关闭），无新版本发布。今日重点集中在三块：修复 Apple Container 命名超限导致的沙箱启动故障（#1237 + #1137）、修复 Slack 共享频道中工具失效问题（#1238 + #1224）、新增 xAI Grok 订阅 OAuth 支持（#1240 + #1239），三者均已完成合并闭环。另有 3 条待合并 PR 仍在推进中，其中包括 Coder 远程工作区沙箱后端（#1199）和 OpenAI-safe 工具 Schema 修复（#1232）。项目整体修复效率高、问题闭环速度快，健康度良好。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日共合并/关闭 6 条 PR，推进了以下功能与修复：

| PR | 说明 | 状态 |
|---|---|---|
| [#1240](https://github.com/moltis-org/moltis/pull/1240) | **新增 xAI Grok 订阅 OAuth 支持**（`xai-oauth` provider）：SuperGrok / SuperGrok Heavy / X Premium+ 用户可通过 RFC 8628 设备码登录使用 Grok，无需 `XAI_API_KEY` | 已合并 |
| [#1243](https://github.com/moltis-org/moltis/pull/1243) | **修复定时消息上下文丢失**：Cron 触发的消息（WhatsApp等渠道）发送后，最终文本会追加为助手消息，保留对话上下文 | 已合并 |
| [#1237](https://github.com/moltis-org/moltis/pull/1237) | **修复 Apple Container ID 超限**：将 Apple 容器标识符限制为 64 字符，使用 SHA-256 后缀生成稳定名称 | 已合并 |
| [#1242](https://github.com/moltis-org/moltis/pull/1242) | **修复 TTS 配置误判**：不再将默认 Coqui 视为已配置，消除无 TTS 提供者时的错误告警 | 已合并 |
| [#1241](https://github.com/moltis-org/moltis/pull/1241) | **修复心跳模块 active_hours**：正确解析 `end="24:00"` 为当日结束，并在心跳 agent-turn 中真正执行 active_hours 限制 | 已合并 |
| [#1238](https://github.com/moltis-org/moltis/pull/1238) | **允许 Slack 共享频道使用已配置工具**：持久化 `untrusted_audience` / `untrusted_tools` 设置，保持默认 fail-closed 策略 | 已合并 |

上述修复涉及沙箱稳定性、定时任务可靠性、认证扩展、配置正确性四个维度，项目在"多沙箱后端 + 多渠道集成"方向持续迭代。

## 4. 社区热点

今日讨论最活跃的条目：

- **[Issue #1118](https://github.com/moltis-org/moltis/issues/1118) — Kubernetes 原生沙箱后端（2 条评论，1 👍）**
  提出新增 `kubernetes` 沙箱后端，通过运行时类（`runtimeClassName`）支持 Kata Containers / gVisor 等 VM 级隔离。该 Issue 创建于 6 月 12 日，今日仍在活跃更新，虽已有 Docker 沙箱，但用户对更强隔离级别的需求持续存在。

- **[Issue #1239](https://github.com/moltis-org/moltis/issues/1239) — xAI Grok 订阅 OAuth（2 条评论）**
  与已合并的 PR #1240 相关联，用户希望复用现有 OAuth 模式（OpenAI Codex / GitHub Copilot 已支持）来接入 Grok 订阅，降低使用门槛。今日已由 PR #1240 闭环。

## 5. Bug 与稳定性

今日报告及修复的 Bug，按严重程度排列：

**高严重度 — 功能不可用**

- **Apple Container 容器标识符超限**（[Issue #1137](https://github.com/moltis-org/moltis/issues/1137)）：Apple Container 沙箱在 identity-scoped 前缀 + session UUID 组合超过 64 字符限制时启动失败。**已有对应修复 PR #1237 今日合并**。

- **Slack 共享频道工具失效**（[Issue #1224](https://github.com/moltis-org/moltis/issues/1224)）：在 Slack 共享频道中已配置工具无法工作。**已有对应修复 PR #1238 今日合并**。

**中严重度 — 配置/行为异常**

- **TTS 默认 Coqui 误判为已配置**（PR #1242）：无 TTS 配置时仍产生 `provider 'coqui' not configured` 红色错误告警，已修复。
- **心跳模块 active_hours 未生效**（PR #1241）：`end="24:00"` 被 chrono 拒绝导致视为无效/始终活跃，且实际未在 agent-turn 中执行该限制，已修复。

**关联性说明**：Issue #1137 和 #1224 均为已修复 Bug 的反馈来源，今日完成闭环。

## 6. 功能请求与路线图信号

- **[Issue #1118](https://github.com/moltis-org/moltis/issues/1118) — Kubernetes 沙箱后端（Kata/gVisor 支持）**：用户明确需要 VM 级隔离，当前沙箱后端列表（Apple Container、Docker、Coder）中缺少 Kubernetes 选项。**已有 PR #1199（Coder 远程工作区沙箱）在评审中，可能作为沙箱扩展方向的一部分**。该功能若实现，将大幅扩展企业级隔离场景。

- **[Issue #1239 → PR #1240](https://github.com/moltis-org/moltis/issues/1239)**：xAI Grok 订阅 OAuth 已合并，展示了项目通过订阅 OAuth 模式（Codex、Copilot、Grok）持续覆盖主流 AI 服务的趋势。

## 7. 用户反馈摘要

- 用户在 [#1239](https://github.com/moltis-org/moltis/issues/1239) 中提出希望复用 OAuth 登录方式接入 Grok 订阅，反映出**用户对多提供商统一认证方式的偏好**，即不希望为每个服务单独配置 API Key。
- [PR #1232](https://github.com/moltis-org/moltis/pull/1232) 指出 OpenAI 严格工具 Schema（`additionalProperties: false`）导致 Codex 被迫发送 null/空值而非请求数据，说明 **OpenAI 兼容性仍是工具链的关键痛点**。
- [#1118](https://github.com/moltis-org/moltis/issues/1118) 的持续活跃表明用户对**更强沙箱隔离（VM 级）**有实际需求，尤其是安全敏感场景。
- 多沙箱后端（Docker、Coder、Kubernetes、Apple Container）并行发展，用户对不同基础架构的支持期待较高。

## 8. 待处理积压

需维护者关注的长期未响应条目：

- **[PR #1199 — Coder 远程工作区沙箱支持](https://github.com/moltis-org/moltis/pull/1199)**：创建于 2026-08-15，已过去 10 天仍待评审。功能完整（REST API 创建临时工作区 + PTY WebSockets 执行命令），与 #1118（K8s 沙箱）同为沙箱后端扩展方向，建议优先评审。

- **[PR #1232 — OpenAI-safe 工具 Schema 修复](https://github.com/moltis-org/moltis/pull/1232)**：创建于 2026-08-22，涉及 Codex 集成核心路径的兼容性问题，建议尽快安排 review。

- **[Issue #1118 — Kubernetes 沙箱后端](https://github.com/moltis-org/moltis/issues/1118)**：已开放 2 个月以上（6 月 12 日创建），至今仍在活跃讨论，属于高价值功能请求，建议维护者明确 roadmap 排期。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-25

> 数据来源：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. 今日速览

CoPaw 今日项目活跃度**较高**：过去 24 小时共产生 29 条 Issue 更新（16 条活跃/新开、13 条关闭）和 50 条 PR 更新（20 条待合并、30 条已合并/关闭），且大量历史 PR 在今日获得合并或推进，**整体合并节奏明显提速**。当前最突出的问题是**内存泄漏/无界增长与前端长会话渲染卡顿**，有多个 Issue 从不同角度指向该问题族。功能侧，会话级思考模式控制、Agent 间通信的 SSE 稳定性修复、MCP 会话恢复等 PR 在推进中。无新版本发布。

---

## 3. 项目进展

今日有 30 条 PR 合并/关闭，其中核心进展包括：

| PR | 内容 | 状态 |
|---|---|---|
| [#6248](https://github.com/agentscope-ai/CoPaw/pull/6248) | **修复 deadline offload 与用户取消的语义混淆**，防止子进程在超时卸载时被误杀 | 已合并 |
| [#2304](https://github.com/agentscope-ai/CoPaw/pull/2304) | Anthropic 兼容提供商（如 MiniMax）不支持 `/models` 端点时，将 404 视为连接成功而非失败 | 已合并 |
| [#6243](https://github.com/agentscope-ai/CoPaw/pull/6243) | 暴露 `use_dimensions` 开关，修复 OpenAI 兼容 API 自定义 embedding 维度不生效的问题 | 已合并 |
| [#1552](https://github.com/agentscope-ai/CoPaw/pull/1552) | 为自定义 Provider 增加 `default_headers` 支持 | 已合并 |
| [#1525](https://github.com/agentscope-ai/CoPaw/pull/1525) | **Cron 容错**：启动时跳过无效持久化调度而非中止整个应用 | 已合并 |
| [#1228](https://github.com/agentscope-ai/CoPaw/pull/1228) | 新增 `read_media` 工具，支持图片/视频/音频的读取与自动压缩 | 已合并 |
| [#4881](https://github.com/agentscope-ai/CoPaw/pull/4881) | 内置 MiniMax-M3 旗舰模型（国际版 + 中国版） | 已合并 |
| [#1451](https://github.com/agentscope-ai/CoPaw/pull/1451) | Cron 默认使用本地时区而非硬编码 UTC | 已合并 |
| [#2773](https://github.com/agentscope-ai/CoPaw/pull/2773) | 自进化 Skill 引擎：自动错误捕获 + AI 根因分析 | 已合并 |
| [#5414](https://github.com/agentscope-ai/CoPaw/pull/5414) | **Skill SOP 与判定规则解耦**，规则可独立存储和编辑 | 已合并 |

**今日最值得关注的合并是 #6248**——它修复了 Agent 超时转后台与用户手动取消的语义冲突，这是一类会直接导致任务被意外终止的稳定性问题，与今日多个内存/卡顿报告共同指向"长时运行场景"的稳定性是当前主战场。

---

## 4. 社区热点

今日讨论热度最高的议题集中在以下几个方面：

### 🥇 [#338 — Webhook 功能请求](https://github.com/agentscope-ai/CoPaw/issues/338)（9 评论）
用户希望能从外部软件向 CoPaw 发送消息触发 Agent 回答，并通过 key 轮询结果。该 Issue 创建于 3 月，今日仍保持活跃讨论，说明外部系统集成/API 回调的需求长期未被满足，是社区呼声最高的功能缺口之一。

### 🥈 [#7258 — 微信频道"不显示思考过程"设置无效](https://github.com/agentscope-ai/CoPaw/issues/7258)（6 评论）
用户报告在 2.1 web 版本中，关闭"显示思考过程"后微信频道仍输出推理内容。与 [#7196](https://github.com/agentscope-ai/CoPaw/issues/7196)（推理过程默认折叠）形成呼应——**"思考过程的展示控制"是今日社区最集中的交互体验诉求**。

### 🥉 [#6524 — MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/CoPaw/issues/6524)（6 评论）
HTTP 流式 MCP 服务器重启后，CoPaw 仍复用失效的 `mcp-session-id` 导致工具调用失败，需手动执行 `list mcp` 才能恢复。这是 MCP 集成可靠性的关键缺陷。

### 值得注意
- **#7261**（4 评论）报告 2.1.1b2 在 Agent 间通信后陷入 **SSE 序列化死循环**，导致 100% CPU、内存无界增长、服务完全不可响应——这是一个高危的运行时崩溃缺陷。
- **#7259**（2 评论）是维护者主动发起的 **Help Wanted**，征集 Windows 上"Thinking"状态卡死 + 内存飙升的报告，说明该问题已被官方确认但尚未彻底定位。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（可能导致崩溃/不可用）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7261](https://github.com/agentscope-ai/CoPaw/issues/7261) | **2.1.1b2：Agent 间通信后触发 SSE 序列化死循环**，100% CPU + 内存无界增长 + 服务完全无响应。关联 AgentScope 2.0.6 | 已关闭（x 分钟前），无对应 fix PR 在列表中 |
| [#7222](https://github.com/agentscope-ai/CoPaw/issues/7222) | **运行 2 天后 backend 内存增长至 20.7 GB**（运行时累积型泄漏，区别于启动阶段的 #9）| 待处理 |
| [#5720](https://github.com/agentscope-ai/CoPaw/issues/5720) | v1.1.12.post2 内存泄漏：异步任务未清理 + HTTP 会话不回收，64 分钟从 150MB 涨至 580MB | 已关闭 |

### 🟠 中高（性能严重下降）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7285](https://github.com/agentscope-ai/CoPaw/issues/7285) | 2.1.1b2 长对话后网页端卡顿至鼠标 2s 刷新 1 帧，需刷新页面才能恢复 | 已关闭 |
| [#7129](https://github.com/agentscope-ai/CoPaw/issues/7129) | **Console 长会话（数千轮）+ 流式输出时浏览器渲染掉帧**，已用 WPR 内核追踪定位到 Chrome 渲染主线程阻塞 | 已关闭 |
| [#7218](https://github.com/agentscope-ai/CoPaw/issues/7218) | 长文本/长推理时频繁出现 `peer closed connection without sending complete message body` | 待处理 |

### 🟡 中等（功能异常）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7258](https://github.com/agentscope-ai/CoPaw/issues/7258) | 微信频道"不显示思考过程"设置无效 | 待处理 |
| [#6524](https://github.com/agentscope-ai/CoPaw/issues/6524) | MCP 后端重启后客户端无法自动恢复连接 | 待处理 |
| [#6810](https://github.com/agentscope-ai/CoPaw/issues/6810) | Windows 安装/更新未终止占用安装目录的进程，NSIS 连续弹出文件写入错误 | 待处理 |
| [#7266](https://github.com/agentscope-ai/CoPaw/issues/7266) | subAgent 在目标文件夹 A 中执行时错误地从普通 Agent 默认路径 B 查找资料 | 待处理 |
| [#7291](https://github.com/agentscope-ai/CoPaw/issues/7291) | qwenpaw-creator 在 Windows 11 拉取示例项目报错 | 待处理 |

**关键判断**：多起内存/卡顿报告在今日集中关闭（#5720、#7285、#7129），但**没有对应的修复 PR 在列表中**，关闭原因可能是标记为已处理或合并到其他跟踪 Issue，需要维护者确认是否真正闭环。

---

## 6. 功能请求与路线图信号

| 功能需求 | Issue/PR | 信号强度 |
|---|---|---|
| **Webhook 双向集成**（外部消息触发 Agent + key 拉取结果） | [#338](https://github.com/agentscope-ai/CoPaw/issues/338) | 🔥 高——3 月创建至今仍活跃，生态集成需求迫切 |
| **会话级思考模式**（Off/Low/Medium/High，跨设备同步） | PR [#7163](https://github.com/agentscope-ai/CoPaw/pull/7163) | 🔥 高——已在 PR 中实现，大概率进入下个版本 |
| **推理过程默认折叠/可配置** | [#7196](https://github.com/agentscope-ai/CoPaw/issues/7196) | ⭐ 中——与 #7163 形成呼应，可能被纳入 |
| **Workspace 级 Skill 预加载策略**（特定工作区自动加载高频 Skill） | [#7182](https://github.com/agentscope-ai/CoPaw/issues/7182) | ⭐ 中——减少首轮多余工具调用，需后端支持 |
| **统一工具面板/工作台**（文件 Diff、Web 服务预览、交互式终端） | [#7013](https://github.com/agentscope-ai/CoPaw/issues/7013) | ⭐ 中——形成 Agent 开发协作闭环 |
| **模型目录更新**：Aliyun qwen3.8-max + Kimi 最新目录 | PR [#7277](https://github.com/agentscope-ai/CoPaw/pull/7277) | ✅ 已提交，待合并 |
| **Agent 会话身份冻结**：防止切换会话/标签页时消息路由到错误对话 | PR [#7237](https://github.com/agentscope-ai/CoPaw/pull/7237) | ✅ 已提交，待合并 |
| **Creator 1.1.1**：直播网站 + 桌面操作录制 + Bailian Wan3 视频 + APE-benchmark | PR [#7274](https://github.com/agentscope-ai/CoPaw/pull/7274) | ✅ 已提交，待合并 |

**路线图判断**：会话级思考模式（#7163） + 推理过程折叠设置（#7196）很可能一并进入 2.1.2；Webhook（#338）是目前社区呼声最高但尚未有 PR 承接的功能。

---

## 7. 用户反馈摘要

- **"每次看工作进程时，默认展开的推理过程太干扰了"**（[#7196](https://github.com/agentscope-ai/CoPaw/issues/7196)）——用户希望像 Hermes 一样可配置推理过程默认折叠，只有调试时才展开。
- **"关闭了显示思考过程，但微信频道还是输出了"**（[#7258](https://github.com/agentscope-ai/CoPaw/issues/7258)）——设置项未在渠道侧生效，反馈设置与行为不一致。
- **"qwenpaw-backend 跑了两天内存到 20.7GB"**（[#7222](https://github.com/agentscope-ai/CoPaw/issues/7222)）——用户明确区分了启动阶段泄漏与运行时累积，说明在帮助维护者做精细定位。
- **"侧边菜单整个无响应"** —— 伴随 AI 日志分析显示 Checkpoint 服务失败（[#7262](https://github.com/agentscope-ai/CoPaw/issues/7262)）。
- **"思考过程默认展开是严重的视觉干扰"**（[#7196](https://github.com/agentscope-ai/CoPaw/issues/7196)，👍 1）——与该 Issue 相关的 [#7258](https://github.com/agentscope-ai/CoPaw/issues/7258) 同为 rerbin 提交，该用户今日贡献了 3 条高质量反馈，是值得关注的活跃社区成员。
- **"把左侧菜单的'应用'改名为'市场'不太合理"**（[#7256](https://github.com/agentscope-ai/CoPaw/issues/7256)）——用户对 beta 版本 UI 文案调整提出异议，认为"应用"更准确地表达了入口功能。
- **"我不知道是不是 qwenpaw 也有问题，如果有需要完整的报错文件，我可以私下提供"**（[#7218](https://github.com/agentscope-ai/CoPaw/issues/7218)）——用户主动配合排查，也侧面说明当前诊断信息还不够透明。

---

## 8. 待处理积压

### 长期未响应的关键 Issue

| Issue | 创建时间 | 已持续 | 重要性 |
|---|---|---|---|
| [#338](https://github.com/agentscope-ai/CoPaw/issues/338) — Webhook 功能请求 | 2026-03-02 | ~6 个月 | 🔥 高——社区讨论持续加热，生态集成刚需 |
| [#5720](https://github.com/agentscope-ai/CoPaw/issues/5720) — v1.1.12.post2 内存泄漏 | 2026-07-02 | ~2 个月 | 高——有详细的根因分析（异步任务泄漏 + HTTP 会话不回收），但未见修复 PR |
| [#6524](https://github.com/agentscope-ai/CoPaw/issues/6524) — MCP 后端重启后无法自动恢复 | 2026-07-28 | ~1 个月 | 高——影响所有使用远程 MCP Server 的用户 |

### 长期搁置的 PR（仍在"Under Review"状态）

| PR | 创建时间 | 已持续 | 内容 |
|---|---|---|---|
| [#2773](https://github.com/agentscope-ai/CoPaw/pull/2773) — 自进化 Skill 引擎 | 2026-04-01 | ~5 个月 | 今日已标记为已合并（CLOSED），靴子落地 |
| [#1228](https://github.com/agentscope-ai/CoPaw/pull/1228) — read_media 工具 | 2026-03-11 | ~5 个月 | 今日已关闭（合并） |
| [#5414](https://github.com/agentscope-ai/CoPaw/pull/5414) — Skill SOP 与判定规则解耦 | 2026-06-23 | ~2 个月 | 今日已关闭（合并） |

> 今日有多条长期积压的 PR 获得合并（#2773、#1228、#5414、#4881、#1552、#1451 等），说明维护者在集中清理历史积压，项目吞吐在提升，但 **"今日无新版本发布"意味着这些合并要等下一个发布窗口才能到达用户**。

---

## 总结

CoPaw 今日整体处于**活跃整理期**：大量历史 PR 合并落地（清理积压），但稳定性问题（内存泄漏、渲染卡顿、SSE 死循环）仍是最突出的健康度短板。建议维护者优先跟进 **#7222（20.7GB 内存累积）** 和 **#6524（MCP 会话恢复）**，并确认今日多起关闭的卡顿/内存 Issue 是否有对应的修复提交。功能侧，**会话级思考模式**（#7163）是距离用户最近的下一个版本亮点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-25

## 今日速览

ZeroClaw 今日保持高活跃度：24 小时内有 50 条 Issue 更新和 50 条 PR 更新，其中新开/活跃 Issue 44 条、待合并 PR 43 条，显示项目处于密集迭代期。热点集中在架构治理层面——多条 RFC 与决策追踪器（tracker）持续获得维护者推进，同时安全相关 Bug（cron 越权、频道鉴权缺失）和大型功能 PR（ZeroRelay 安全传输、Microsoft Teams 频道、插件 egress 策略）值得重点关注。今日无新版本发布，当前处于 0.8.x 到 0.9.0 的过渡期，多项 breaking-change 工作正在排队。整体项目健康度良好，但需关注大量 PR 长期处于 `needs-author-action` 状态的积压问题。

---

## 项目进展

今日无 PR 被合并或关闭（共 50 条 PR 更新，其中合并/关闭 7 条，但在展示的评论最多的 15 条中无一关闭）。以下为今日值得关注的重要新建/活跃 PR：

**[#10354] feat(runtime): expose shell profile in status** — 作者 Audacity88，创建于 2026-08-25
新增共享状态线类型，暴露运行时 shell profile（posix / cmd / powershell）到状态接口，为跨组件状态一致性打基础。
🔗 https://github.com/zeroclaw-labs/zeroclaw PR #10354

**[#10345] test(cron): anchor missed-run assertion to reference time** — 作者 sunlit-deng，创建于 2026-08-25（已关闭）
将 cron 的 `skip_missed_run` 回归测试锚定到显式参考时间点，消除测试对墙钟采样的依赖，提升测试确定性。虽然仅是一个小型测试修复，但体现了项目对测试质量的持续打磨。
🔗 https://github.com/zeroclaw-labs/zeroclaw PR #10345

**长期待合并但今日有更新的重要 PR（反映项目整体推进方向）：**

- **[#10142] feat(zerorelay): secure transport with blind relay and native mTLS enrollment**（JordanTheJet，8/19 创建）—— 将远程 WSS 平面升级为强制 mTLS，支持盲中继和原生 mTLS 注册，是 0.9.0 安全加固的核心工作之一。
  🔗 https://github.com/zeroclaw-labs/zeroclaw PR #10142

- **[#9582] feat(plugins): enforce a host-owned egress policy on plugin wasi:http**（JordanTheJet，7/31 创建）—— 插件 egress 策略第 2 阶段（对应 ADR-014），所有插件 `wasi:http` 请求将通过 host 持有的 egress 策略。等待维护者评审。
  🔗 https://github.com/zeroclaw-labs/zeroclaw PR #9582

- **[#9241] feat(channels): add Microsoft Teams (Bot Framework) channel**（wadeling，7/21 创建）—— 新增 Microsoft Teams 频道（Azure Bot Service/Bot Framework Connector API），支持 DM 和 @-mention。已等待超一个月，状态为 `needs-author-action`。
  🔗 https://github.com/zeroclaw-labs/zeroclaw PR #9241

- **[#9109] feat(providers): add native Hailo-Ollama support**（vadelma-agent，7/17 创建）—— 为 Hailo-Ollama 0.5.1 添加原生 provider 支持，覆盖 `/api/tags` 与非流式 `/api/chat`。
  🔗 https://github.com/zeroclaw-labs/zeroclaw PR #9109

---

## 社区热点

🎯 **[#6808] RFC: Work Lanes, Board Automation, and Label Cleanup** — 24 条评论，为今日评论最多的 Issue
由 Audacity88 发起的工作流治理 RFC，当前版本 Rev. 26，状态为 Ratified / rollout in progress。该 RFC 作为治理实验的一部分，旨在改进项目的自动化流程、标签体系与工作分区。持续的高评论量表明社区对项目协作流程本身有强烈关注。
🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #6808

🎯 **[#8692] [Tracker]: Maintainer decision queue for RFCs and design issues** — 14 条评论
维护者决策队列追踪器，作为 RFC、设计问题、发布策略与协调追踪器的决策积压清单。14 条评论反映社区对决策效率与透明度的关注。
🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #8692

🎯 **[#9103] RFC: separate authoritative memory storage from optional enrichment connectors** — 14 条评论（👍 0）
由 yanchenko 发起的存储架构 RFC，经过 2026-08-01 Core REVISE 投票后由维护者接管修订（2026-08-22 更新），将以有界的连接器决策审查替代未获接受的 Lucid-first 方案。社区对记忆存储与增强连接器分离的架构方向关注度高，风险等级为 high。
🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #9103

🎯 **[#9600] [Tracker]: Session-persistence contract ownership and layer ordering** — 11 条评论
四个独立工作流同时修改会话持久化契约且无指定的契约所有者，此 tracker 被建立以协调所有权与层序问题。反映了多线并行开发中的协调痛点。
🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #9600

🎯 **[#8132] Evaluate Rust/WASM web UI prototype before React/Vite migration** — 9 条评论（👍 1）
社区对 WebAssembly-first 路径持续关注，意图消除 Node.js 依赖。是 #7674 拆分的子任务，讨论 Dioxus/Leptos/Yew 等 Rust→Wasm 框架替代 React + Vite 的可行性。
🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #8132

---

## Bug 与稳定性

### 🔴 严重（S0 — 数据丢失/安全风险）

**[#9947] cron 工具未按所属 agent 隔离 — 任何 agent 可按 ID 读取/触发/修改/删除他人的定时任务**
- 状态: OPEN（in-progress / accepted），报告于 2026-08-12，risk: high
- 多 agent 部署下，持有 cron 工具的任意 agent 可越权操作其他 agent 的任务，涉及数据丢失与安全风险。
- **已有对应修复 PR: [#10253] fix(cron): preserve scheduler workspace policy**（jstar0，8/22 创建，状态 `needs-maintainer-review`，size: S）—— 阻止 `run_agent_job` 通过 `SubAgentSpawn::for_agent` 二次解析 SecurityPolicy，由调度器预解析的 owner 策略保持一致。
- 🔗 Issue: https://github.com/zeroclaw-labs/zeroclaw Issue #9947
- 🔗 PR: https://github.com/zeroclaw-labs/zeroclaw PR #10253

**[#9428] Bluesky 和 Reddit 入站频道未校验发送者授权**（对应 PR）
- 状态: OPEN（needs-author-action），PR 创建于 2026-07-27，risk: high，size: XL
- Bluesky 与 Reddit 是仅有的两个未接入 `peer_groups` 鉴权的入站频道适配器，构造函数未接收 `peer_resolver`。修复将补齐这两个频道的发送者授权校验。
- 🔗 https://github.com/zeroclaw-labs/zeroclaw PR #9428

**[#9002] 查看者断开连接后 agent 回合被终止**（对应 PR）
- 状态: OPEN（needs-author-action），PR 创建于 2026-07-11，risk: high，size: XL
- 将仪表盘 WebSocket 视为查看者/控制器而非 agent 回合的拥有者，使浏览器导航、休眠或网络抖动不再中断 agent 回合。
- 🔗 https://github.com/zeroclaw-labs/zeroclaw PR #9002

**[#10297] 结构性配置变更后 agent 工具注册表未刷新**（修复对应 Issue）
- 状态: OPEN，创建于 2026-08-24，risk: high
- ZeroCode 保存配置变更后，内建工具的启用/禁用需要完整 daemon 重启才能生效。建议受影响 agent 的工具注册表在结构变更后自动刷新。
- 🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #10297

### 🟡 中等问题

**[#10346] MCP 服务器每次启动被重复连接三次**
- 状态: OPEN（needs-maintainer-review），创建于 2026-08-25，risk: high
- 单一的 `zeroclaw daemon` 进程中，每个 stdio 传输的 MCP 服务器在每次启动时被连接（stdio 则被 spawn）三次，而非一次。RFC 提出将心跳 worker 的 MCP-registry-caching 模式推广到 gateway 和 channels。
- 🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #10346

**[#10103] ZeroCode Health 状态值在法语与西班牙语下错位**（good first issue）
- 状态: OPEN（in-progress / accepted），severity: S3，risk: low
- Dashboard Health 面板将 Uptime 和 PID 标签填充到固定宽度 11，导致法语的 `Disponibilité` 和西班牙语的 `Tiempo activo` 等本地化标签错位。适合新手贡献者。
- 🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #10103

---

## 功能请求与路线图信号

以下功能请求可能与当前活跃的 PR 形成呼应，有望纳入 0.9.0 版本：

| 功能请求 | Issue | 对应/关联 PR | 信号强度 |
|---------|-------|-------------|---------|
| 会话持久化契约的单一所有权与层序定义 | [#9600](https://github.com/zeroclaw-labs/zeroclaw Issue #9600) | 无直接对应 PR；#9593 将 TaskRecord 设为后台委派的唯一生命周期所有者 | 强 — 多个工作流碰撞推动治理需求 |
| Rust/WASM 替代 React/Vite 的 Web UI 评估 | [#8132](https://github.com/zeroclaw-labs/zeroclaw Issue #8132) | 无直接 PR，仍处评估阶段 | 中 — 社区持续关注，需维护者决策 |
| 更强的配对码（默认非 6 位数字） | [#6613](https://github.com/zeroclaw-labs/zeroclaw Issue #6613) | 无直接 PR | 中 — 安全小组件，P1 优先级 |
| 更安全的共享目录与工作区逃逸能力标志 | [#6729](https://github.com/zeroclaw-labs/zeroclaw Issue #6729) | 无直接 PR | 中 — 作为 0.9.0 安全加固的一部分 |
| 网关 Web UI 多会话支持 | [#7543](https://github.com/zeroclaw-labs/zeroclaw Issue #7543) | 无直接 PR | 中 — P2 已接受 |
| Microsoft Teams 频道 | — | [PR #9241](https://github.com/zeroclaw-labs/zeroclaw PR #9241) | 强 — 已实现，等待作者响应 |
| Hailo-Ollama 原生 provider | — | [PR #9109](https://github.com/zeroclaw-labs/zeroclaw PR #9109) | 强 — 已实现，等待合并 |
| ZeroCode 日志文本可选择/可复制 | — | [PR #10096](https://github.com/zeroclaw-labs/zeroclaw PR #10096) | 强 — 已实现，等待作者响应 |

---

## 用户反馈摘要

- **多 agent 安全问题引发关注（#9947）**：cron 工具越权问题在社区中获得共鸣——在真实多 agent 部署中，不同 agent 之间的权限边界必须清晰，S0 级严重性标记合理。目前已有修复 PR（#10253），社区正在等待维护者审查。

- **配置热更新需求明确（#10297）**：用户反映修改配置后需要完整重启 daemon 才能启用/禁用工具，影响 ZeroCode 所承诺的配置体验。这一诉求暗示项目在配置变更的运行时刷新机制上仍有改进空间。

- **WebAssembly 方向支持者活跃（#8132）**：用户对消除 Node.js 依赖持积极态度，期待 Rust/WASM 方案降低构建链复杂度。该问题在 2026-06-22 创建后持续获得评论与 👍，表明这是社区的长期关注方向。

- **架构决策希望透明化（#6808, #8692, #8691）**：多条 RFC 和 tracker（ADR 清单、维护者决策队列等）的高评论量显示，社区对项目治理和架构决策过程有较高透明度期望，期望通过结构化的追踪器来跟进 RFC 的落地状态。

- **会话持久化多线并行冲突**：来自 #9600——多条工作流同时触碰会话持久化契约而缺乏单一所有者，社区关注多线开发中的协调与冲突解决机制。

---

## 待处理积压

### 需维护者关注的长期未响应 PR（状态 `needs-maintainer-review`）

| PR | 内容 | 等待时间 | 风险 |
|----|------|---------|------|
| [#9582](https://github.com/zeroclaw-labs/zeroclaw PR #9582) | 插件 wasi:http 强制执行 host-owned egress 策略（ADR-014 第 2 阶段） | 自 7/31，25 天 | high |
| [#10253](https://github.com/zeroclaw-labs/zeroclaw PR #10253) | cron 调度器保留工作区安全策略（修复 #9947 的 S0 安全 Bug） | 自 8/22，3 天 | high |
| [#10346](https://github.com/zeroclaw-labs/zeroclaw Issue #10346) | MCP 服务器每次启动重复连接三次（RFC，今日新开） | 1 天 | high |

### 长期 `needs-author-action` 的高价值 PR（等待作者响应，建议维护者跟进）

| PR | 内容 | 创建日期 | 等待时长 |
|----|------|---------|---------|
| [#9002](https://github.com/zeroclaw-labs/zeroclaw PR #9002) | 查看者断开后 agent 回合保持存活（gateway） | 7/11 | 45 天 |
| [#9241](https://github.com/zeroclaw-labs/zeroclaw PR #9241) | Microsoft Teams 频道 | 7/21 | 35 天 |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw PR #9272) | Anthropic refusals 处理与 fallback notices | 7/23 | 33 天 |
| [#9942](https://github.com/zeroclaw-labs/zeroclaw PR #9942) | vi_verify 工具通过配置面报告 | 8/12 | 13 天 |
| [#10142](https://github.com/zeroclaw-labs/zeroclaw PR #10142) | ZeroRelay 安全传输 + 原生 mTLS | 8/19 | 6 天 |
| [#10096](https://github.com/zeroclaw-labs/zeroclaw PR #10096) | ZeroCode 日志文本可选择/可复制 | 8/18 | 7 天 |
| [#9428](https://github.com/zeroclaw-labs/zeroclaw PR #9428) | Bluesky/Reddit 频道发送者鉴权 | 7/27 | 29 天 |
| [#9399](https://github.com/zeroclaw-labs/zeroclaw PR #9399) | Quickstart 清单行终端宽度适配 | 7/26 | 30 天 |

### 长期未解决的重要 Issue

- **[#7432] v0.9.0 auth/security/gateway/breaking-change tracker** — 创建于 6/9，承载 0.9.0 安全加固与破坏性变更的全部协调工作，持续更新但大量工作项待推进。
  🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #7432

- **[#6613] 更强的配对码** — 创建于 5/13（P1，已接受），已等待 3 个月以上，仍无对应 PR。6 位数字配对码的安全短板在社区中有共识，建议尽快推进。
  🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #6613

- **[#7461] CI 扩展到 Windows/macOS** — 创建于 6/10（P2 已接受），社区对跨平台测试有明确需求，但目前仍在等待实施。
  🔗 https://github.com/zeroclaw-labs/zeroclaw Issue #7461

---

*本日报基于 GitHub 数据自动生成，数据截至 2026-08-25。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*