# OpenClaw 生态日报 2026-08-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-06 03:15 UTC

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

# OpenClaw 项目动态日报 — 2026-08-06

---

## 1. 今日速览

OpenClaw 项目今日保持高强度迭代节奏：过去 24 小时共更新 500 条 Issue（新开/活跃 426 条，关闭 74 条），PR 更新同样达 500 条（待合并 435 条，已合并/关闭 65 条），无新版本发布。数据反映出两大特点：一是项目处于 **P0/P1 级稳定性问题集中攻坚期**，数据库迁移失败（#119263）、媒体数据丢失（#119090）、认证冷却时间过长（#70903）等多个高优缺陷正在推进；二是 **自动化和审查体系（clawsweeper、issue-rating 等）运转成熟**，绝大部分 Issue 已被清晰标注优先级、影响域和修复形态，项目治理规范性较高。值得关注的是，大量高优 Issue 处于 `needs-maintainer-review` 状态（如 #116201、#44925、#86519 等），维护者响应带宽或成为当前瓶颈。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时 Releases 数量为 0。上一个已知版本为 2026.7.2（b4f01af），当前项目处于累积修复阶段，建议关注后续 patch 版本以验证 #119263 等 P0 问题的修复效果。

---

## 3. 项目进展

今日合并/关闭的 PR 虽数量有限，但质量较高，主要在脚本可靠性、QMD 内存修复和已关闭 Issue 的验证方面完成闭环：

| PR | 说明 | 状态 |
|---|---|---|
| [#119146](https://github.com/openclaw/openclaw/pull/119146) | `fix(scripts): bound gh-read gh CLI child process` — 为 `gh-read.ts` 的 `spawnSync` 调用增加可配置超时，防止 CI 作业因 gh CLI 挂起而无限阻塞 | 已关闭 |
| [#110601](https://github.com/openclaw/openclaw/pull/110601) | `fix(scripts): bound ci-run-timings git and GitHub CLI operations` — 修复 `git ls-remote` 等网络操作在远端不可达时无限挂起问题 | 已关闭 |
| [#113515](https://github.com/openclaw/openclaw/pull/113515) | `fix(memory): keep QMD file hints after stale docid misses (issue #113041)` — 修复 QMD 返回过期的 `docid` 时 `memory_search` 错误丢弃命中的问题，回退到 `qmd://` 文件提示归一化解析 | 已关闭 |
| [#92369](https://github.com/openclaw/openclaw/issues/92369) | `Subagent orchestration in cron isolated sessions`（Issue）— 标记为 `already-fixed` 关闭 | 已关闭 |
| [#91564](https://github.com/openclaw/openclaw/issues/91564) | `Telegram forum topic becomes permanent inbound black hole`（Issue）— 标记为 `already-fixed` 关闭 | 已关闭 |
| [#38076](https://github.com/openclaw/openclaw/issues/38076) | `skill-creator: init_skill --resources 大小写敏感`（Issue）— 标记 `not-repro-on-main` 关闭 | 已关闭 |

**项目整体推进评估：**
- 今日合并内容以 **脚本/测试基础设施加固** 为主（防止 CI 挂起、测试幂等性），说明项目在稳定化基础设施以支撑更大规模的自动化验证；
- **QMD 内存检索修复**（#113515）是一个实质性功能修复，解决了 `memory_search` 空结果问题，得益于 [qingminglong](https://github.com/qingminglong) 的贡献；
- 两个旧的 P1 Issue 被验证已修复（#92369、#91564），表明此前一轮修复在**子代理编排**和 **Telegram 入站黑洞**两条线上已生效；
- 待合并 PR 中，[#119221](https://github.com/openclaw/openclaw/pull/119221)（拒绝 session id 轮转期间的转录写入）和 [#119326](https://github.com/openclaw/openclaw/pull/119326)（修复账号级 historyLimit 被忽略）等会话一致性修复仍在等待审查/作者更新，尚未进入主线。

---

## 4. 社区热点

今日讨论最活跃的 Issue 反映了社区对**会话状态可靠性**和**安全防御**的深切关注：

### 🔥 #116201 — Realtime voice 无界状态保留（58 评论）
[Issue #116201](https://github.com/openclaw/openclaw/issues/116201) | 作者: [vincentkoc](https://github.com/vincentkoc) | P1 | 🦞 diamond lobster

**核心诉求：** Realtime voice 会话的资源限制以条目数/取消信号而非硬性所有权边界表达，在慢速、停滞或突发性 provider/client 行为下会保留过期的 consult 工作、大型 provider 帧、pre-ready 音频等，导致无界状态积累。

**分析：** 这是今日评论数最高的 Issue（58 条），被标记为 `diamond lobster`（最高社区影响力等级）。社区关注点不仅在于资源泄漏本身，更在于其对会话状态（`impact:session-state`）的长期影响。该 Issue 同时被标记为 `needs-maintainer-review` 和 `needs-product-decision`，说明修复方向需要维护者拍板。此类问题通常涉及架构层面 — 如何定义资源所有权边界而非仅依赖计数启发式。

### 🔥 #7707 — Memory Trust Tagging by Source（27 评论）
[Issue #7707](https://github.com/openclaw/openclaw/issues/7707) | 作者: [LumenLantern](https://github.com/LumenLantern) | P2 | 🌊 off-meta tidepool

**核心诉求：** 允许按来源（用户命令、网页抓取、第三方技能）为代理记忆条目添加信任级别标签，防止恶意指令隐藏在不可信内容中被记忆并在后续影响行为。

**分析：** 这是一个延续了 6 个月的长期安全需求（创建于 2026-02-03），至今仍在活跃讨论。社区对 **prompt injection 攻击面** 的担忧已从运行时注入转向**持久化记忆投毒**（memory poisoning），这标志着 AI 代理安全威胁模型的进化。该 Issue 同时被标记 `needs-security-review`，但 **27 条评论中无一条显示明确进展**，维护者需要给出方向性回应。

### 🔥 #44925 — Subagent 完成静默丢失（25 评论）
[Issue #44925](https://github.com/openclaw/openclaw/issues/44925) | 作者: [IIIyban](https://github.com/IIIyban) | P1 | 🦞 diamond lobster | 👍 2

**核心诉求：** 子代理任务编排存在多种静默丢失结果的失败模式：(1) 完成通知失败（E31/E42/E45）；(2) 超时后无自动重启；(3) 失败后无重试且不通知。

**分析：** 这是社区对 **LLM 任务编排可靠性** 不满情绪的集中体现。用户无法区分"任务还在执行"和"任务已静默死亡"是最大痛点。该 Issue 已存在近 5 个月，且评论持续攀升 — 结合今日新增 PR [#118806](https://github.com/openclaw/openclaw/pull/118806)（移除叶子子代理的 yield 能力），可见项目正在围绕子代理的行为边界做手术，但**完整修复路径仍不明确**。

---

## 5. Bug 与稳定性

今日活跃 Bug 数量多、覆盖面广，以下按严重程度分级：

### 🔴 P0 — 发布阻断级

| Issue | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | **Agent DB v14→v15 迁移失败**：`no such column: entry_valid`，导致 `openclaw doctor --fix` 无法完成迁移，网关拒绝启动。影响所有从 2026.7.1 升级到 2026.7.2 的用户 | 开放中 | [PR 已关联](https://github.com/openclaw/openclaw/issues/119263) |
| [#119090](https://github.com/openclaw/openclaw/issues/119090) | **托管媒体清理失败开放（fail-open）**：当会话存储不可读时（权限/IO/损坏），附件索引解析为 null，所有媒体记录被误判为未引用并被永久删除 — **数据丢失** | 已关闭 | 暂无公开 PR |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | **持久化 provider 冷却阻断用户数小时**：付费恢复后仍被 `disabledUntil` 时间戳阻断，且反复失败会不断延长窗口 | 开放中（标记 stale） | 无 |

### 🟠 P1 — 高优先级

| Issue | 问题 | 状态 | Fix PR |
|---|---|---|---|
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 网关主线程从启动起被 plugin-metadata 快照和 fs statting 打满，导致本地 RPC 在 ws_upgrade 时 1006 死掉 | ✅ 已关闭 | 已修复 |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | **Telegram 消息重复回复 2-10 次**（回归），5.20 更新后出现，5.22 部分缓解 | 开放中，`needs-live-repro` | 无 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 内嵌 runner 在工具调用参数生成延迟超过请求超时时报 "Network connection lost." — **大参数工具调用必现失败** | 开放中 | 无 |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | Control UI 大附件上传溢出浏览器/网关栈（`RangeError: Maximum call stack`），完整字符串正则解析 data URL 导致 | 开放中，[PR 已关联](https://github.com/openclaw/openclaw/issues/90098) | 待合并 |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | 循环检测能识别 exec 循环并阻止工具，但**代理会话仍无限继续运行**，资源持续燃烧数小时 | 开放中，[PR 已关联](https://github.com/openclaw/openclaw/issues/106231) | 待合并 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite 转录清理在网关线程上执行完整物化/压缩/读回，**阻塞事件循环** | 开放中 | 无 |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | codex app-server：客户端委托的 message 工具结果导致 turn 被中断（`terminate:true`），承诺的工作永远不会执行 | 开放中 | 无 |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex app-server 发出 `turn/started` 后静默无响应，内嵌 run 一直挂到 stuck-session 恢复窗口（默认 360s） | 开放中 | 无 |
| [#106786](https://github.com/openclaw/openclaw/issues/106786) | **gpt-5.6-\* 在 ChatGPT-OAuth 路由上被广告宣传，provider 拒绝后静默回退到备选模型，用户完全不知情** | 开放中 | 无 |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 自动更新后运行中的网关继续使用旧的 hashed bundle 导入（内存模块图与新文件不匹配） | 开放中，需实时复现 | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/工具执行泄漏未收割子进程，僵尸进程累积导致运行时退化 | 开放中 | 无 |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 瞬时 LLM/socket 错误在 channel/一次性任务上有重试，但 **embedded-assistant 阶段不重试**，长时间多步 turn 因单次瞬时错误整体死亡 | 开放中 | 无 |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) | Slack 线程回复在 origin tuple 丢失后可以"生成但无法投递"，会话看似成功实为静默失败 | 开放中 | 无 |

### 🟡 P2 — 中优先级（部分摘选）

| Issue | 问题 | 状态 |
|---|---|---|
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | **硬编码路径进入生产代码**：安装后创建 `/Users/wangtao` 目录并设置工作区，疑似开发者路径被合并发布 | 开放中，12 评论 |
| [#77306](https://github.com/openclaw/openclaw/issues/77306) | QQBot 渠道消息重复发送：`message_sending` hook 在 WebChat 历史回放时被触发，回复被反复重发至 QQ API | 开放中 |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite 快照恢复缺少端到端崩溃与身份保证，可能报成功但未持久化父目录链接 | 开放中 |
| [#117471](https://github.com/openclaw/openclaw/issues/117471) | `openclaw cron remove` 成功删除任务但 CLI 仍报错 "invalid cron.remove params: id not found"，退出码非零 | 开放中 |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) | Embedded prompt-lock 会话接管在工具失败后中止可见 WebChat turn，而非重试 | 开放中 |
| [#116512](https://github.com/openclaw/openclaw/issues/116512) | Telegram 进度模式下第一条评论性文案在快照 ID 变化时重复出现 | 开放中，需实时复现 |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) | **DM/直聊中的 `NO_REPLY` 抑制是无条件的**，`silentReply` 策略无法强制小模型可见回复 | 开放中，新提交 |

**观察：**
- 今日最值得警惕的是 **#119263（DB 迁移阻断）**和 **#119090（媒体永久删除）**两个 P0，均直接触及用户数据安全；
- **消息静默丢失/重复发送** 类问题（#86519、#109490、#96692、#97616、#53540）在 P1 中占比极高，是当前稳定性短板；
- 多项高优 Issue 已存在超 2 个月（#53540 自 3-24，#86519 自 5-25），但**缺少 fix PR 和维护者明确响应**，修复周期需引起关注。

---

## 6. 功能请求与路线图信号

以下需求在今日活跃讨论中呈现较高社区呼声，值得纳入后续版本规划：

### 🌟 #42840 — Control UI 支持 MathJax/LaTeX 渲染（👍 10）
[Issue #42840](https://github.com/openclaw/openclaw/issues/42840) | P2 | 9 评论

**需求：** 控制界面支持 LaTeX 公式渲染，以便代理向用户展示数学/科学内容。目前公式以纯文本展示。
**信号：** 👍 数在今日所有功能请求中最高（10），说明学术/技术用户群体对此有强烈需求。UI 类功能通常实现成本可控，有望被采纳。

### 🌟 #6615 — exec-approvals 支持 denylist（👍 8）
[Issue #6615](https://github.com/openclaw/openclaw/issues/6615) | P2 | 11 评论

**需求：** 现有 allowlist 之外增加 denylist，支持"全部允许但屏蔽 X"策略，如：允许所有命令但阻止 `gog gmail send`。
**信号：** 已存在 6 个月，有 8 个 👍，且标记 `linked-pr-open` — **有一个 PR 已挂起**。社区对代理安全边界控制的精细化需求明确，denylist 是补全策略体系的重要拼图。

### 🌟 #16555 — 投递队列消息支持 TTL/过期（👍 0，6 评论）
[Issue #16555](https://github.com/openclaw/openclaw/issues/16555) | P2 | 6 评论

**需求：** 为持久化投递队列增加可配置 TTL，防止网关重启时旧消息"洪水式"补发。
**信号：** 与今日 PR [#82572](https://github.com/openclaw/openclaw/pull/82572)（跨网关重启持久化 followup 队列）形成互补 — 持久化会放大旧消息问题，TTL 是必要的配套机制。

### 🌟 #13597 — 完整 AWS 部署指南（EC2/ECS/Lambda）（👍 4）
[Issue #13597](https://github.com/openclaw/openclaw/issues/13597) | P2 | 7 评论

**需求：** 补充云部署文档，降低 AWS 用户的采纳门槛。包含 systemd 服务配置、容器化部署、无服务器部署等。
**信号：** 文档类需求实现门槛低、社区价值高。结合 PR [#119802](https://github.com/openclaw/openclaw/pull/119802)（将 Release & CI 文档提升至顶级导航）来看，项目正在系统性改进文档可发现性。

### 🌟 #53654 — Discord 消息编辑/删除事件支持（👍 3）
[Issue #53654](https://github.com/openclaw/openclaw/issues/53654) | P2 | 6 评论

**需求：** 支持 `messageUpdate`（编辑后重新处理）和 `messageDelete`（删除后取消/停止）事件，提升 Discord 渠道交互体验。
**信号：** 与 #45475（Slack 消息编辑/删除抑制）诉求同源 — 社区对**渠道事件语义的精确控制**有持续需求，一个方向的实现（如 Slack）可为 Discord 提供范式参考。

### 路线图综合判断
结合今日活跃的 PR 趋势，以下方向可能是下一版本的候选内容：
1. **会话一致性与恢复**（#119221、#119326、#117305 等多个 PR 在飞行中）
2. **安全策略完善**：install policy 警告确认（[#116489](https://github.com/openclaw/openclaw/pull/116489)）、exec denylist（#6615）
3. **可观测性提升**：durable Activity run inspector（[#119810](https://github.com/openclaw/openclaw/pull/119810)）、审计解释（[#119815](https://github.com/openclaw/openclaw/pull/119815)）
4. **网关弹性**：systemd dotenv 热加载（[#119441](https://github.com/openclaw/openclaw/pull/119441)）、失败更新恢复（[#119516](https://github.com/openclaw/openclaw/pull/119516)）

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼的真实用户声音：

### 😠 最强烈的负面反馈

**1. "生产代码里混进了开发者的硬编码路径"**
> "20260321，今天刚安装的，最新版，结果 openclaw 建了一个 /Users/wangtao 的文件夹，并且把工作区设成了这个目录。这位 wangtao 是谁？Apparently some wangtao hardcode his working space path into the code and somebody merged his code and published。"
>
> — [buggiant-coder](https://github.com/buggiant-coder) 在 [#51429](https://github.com/openclaw/openclaw/issues/51429) 中

这反映出社区对 **CI 审查流程信任度下降**的风险信号 — 一个如此明显的硬编码路径被合并发布，让用户对项目的工程质量产生了根本性质疑。

**2. "更新后 Telegram 疯狂重复回复"**
> "After updating from 2026.5.12 to 2026.5.20, the agent sends duplicate identical replies on Telegram (2-10x per user message)."
>
> — [w3-design1](https://github.com/w3-design1) 在 [#86519](https://github.com/openclaw/openclaw/issues/86519) 中

渠道层的重复消息问题已持续 2 个多月未完全解决，对 Telegram 重度用户是严重体验损害。

### 😕 深层使用痛点

**3. "每次对话都在烧钱喂 bootstrap 文件"**
> "Every new session starts with 20-30% of context already consumed by bootstrap files (MEMORY.md ~1500-2000 tokens...). On multi-turn conversations, these files are re-injected on every follow-up message."
>
> — [Ekko-2xko](https://github.com/Ekko-2xko) 在 [#67419](https://github.com/openclaw/openclaw/issues/67419) 中

**成本敏感性用户在抗议 token 浪费** — 长时间对话中 20-30% 的 token 被重复注入的系统文件消耗，直接转化为费用。

**4. "工作做到一半，结果静默消失——没有重试，没有通知"**
> "Subagent completion announce fails (E31, E42, E45) ... no retry, no notification, no auto-restart on timeout."
>
> — [IIIyban](https://github.com/IIIyban) 在 [#44925](https://github.com/openclaw/openclaw/issues/44925) 中

**任务编排黑盒** 是高级用户的最大焦虑点 — 无法区分"还在工作"和"已经死了"。

**5. "被 ban 了才知道是因为频繁重载 tool schema"**
> "When using Google Antigravity as the primary model provider, the account was banned due to 'violation of Terms of Service'. The Google Cloud Code Assist API was triggered multiple times in a short period..."
>
> — [caimao9539](https://github.com/caimao9539) 在 [#44134](https://github.com/openclaw/openclaw/issues/44134) 中

**用户因代理行为被第三方服务封号** — 这是代理框架的连带风险，需要框架层控制 API 调用频率。

### 😊 积极反馈

- 👀 多个 Issue（如 #106779、#118846、#92369、#91564）被验证修复后关闭，说明**社区反馈→修复→验证的环路在运转**；
- 👍 #6615 有 8 个赞表明用户认可 allowlist 机制，希望扩展而非推翻。

---

## 8. 待处理积压

以下 Issue/PR 已长期未获维护者响应或缺少明确进展，建议重点关注：

### ⚠️ 长期未解决的高优 Issue

| Issue | 创建时间 | 已存活 | 最后更新 | 当前状态 |
|---|---|---|---|---|
| [#70903](https://github.com/openclaw/openclaw/issues/70903) — 持久化冷却阻断 | 2026-04-24 | **> 3.5 个月** | 08-05 | P0，但标记 `stale` |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) — 子代理完成静默丢失 | 2026-03-13 | **> 4.5 个月** | 08-05 | P1，25 评论，无 fix PR |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) — 大参工具调用必现失败 | 2026-03-24 | **> 4 个月** | 08-06 | P1，7 评论，无 fix PR |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) — Telegram 重复回复 | 2026-05-25 | **> 2 个月** | 08-06 | P1，需实时复现，无 fix PR |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) — Bootstrap 重复注入耗 token | 2026-04-15 | **> 3.5 个月** | 08-05 | P2，👍 2 |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) — exec denylist 功能 | 2026-02-01 | **> 6 个月** | 08-06 | P2，👍 8，有 linked PR 但未合并 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory 信任标签 | 2026-02-03 | **> 6 个月** | 08-06 | P2，27 评论，无方向性回应 |
| [#13597](https://github.com/openclaw/openclaw/issues/13597) — AWS 部署指南 | 2026-02-10 | **> 5.5 个月** | 08-05 | P2，👍 4 |

### ⚠️ 长期未合并的重要 PR

| PR | 主题 | 创建时间 | 状态 |
|---|---|---|---|
| [#82572](https://github.com/openclaw/openclaw/pull/82572) | 跨网关重启持久化 followup 队列 | 2026-05-16 | P1，`waiting on author`，**> 2.5 个月** |
| [#112896](https://github.com/openclaw/openclaw/pull/112896) | 快照恢复接纳恢复点（feature showcase） | 2026-07-23 | P2，`waiting on author` |
| [#104006](https://github.com/openclaw/openclaw/pull/104006) | ClickClack REST 客户端超时 | 2026-07-11 | P2，`waiting on author` |
| [#104820](https://github.com/openclaw/openclaw/pull/104820) | SearXNG 未解析 baseUrl 引用时 fail closed | 2026-07-12 | P2，`waiting on author` |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | 安装策略警告需用户确认 | 2026-07-30 | P1，`waiting on author` |

### 📋 维护者行动建议

1. **立即响应 #119263**（DB 迁移 P0）— 这直接阻断用户升级路径，应优先确认 fix PR 并安排紧急发布；
2. **梳理 `needs-maintainer-review` 队列** — 今日 500 条 Issue 中大量高优问题挂在该标签下（#116201、#86519、#44925、#106231 等），建议排期集中 review；
3. **对 4 个 `stale` 高优 Issue（#70903、#53562、#49205 等）进行复活或关闭决策** — 这些多为 3-5 个月前提出的真实痛点，过度延迟会损害社区信任；
4. **跟进 #82572**：该 PR 自 5-16 创建至今仍在等待作者，涉及跨重启队列持久化 — 若方向正确应加速合并窗口，若需改动应明确反馈。

---

*本日报由 AI 分析师自动生成，基于 2026-08-06 的 OpenClaw GitHub 公开数据。数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**分析日期**：2026-08-06  
**数据来源**：各项目 GitHub 公开仓库 24 小时动态

---

## 1. 生态全景

当前开源个人 AI 助手/自主智能体生态正处于「高速迭代、工程治理补位」阶段：头部项目（OpenClaw、IronClaw、ZeroClaw）日活 Issue/PR 均达 50 条以上，且不约而同将重心从「模型推理能力」转向「会话状态可靠性、工具调用可观测性、权限与安全边界」。生态已出现清晰分层——通用全栈框架、桌面端个人助手、轻量自托管网关、企业级平台各占其位。安全威胁模型同步升级，已从单纯的 prompt injection 扩展到记忆投毒、凭据泄漏、Agent 状态幻觉等新领域。整体判断：项目间差异化大于同质化，但都面临同一批「生产可用性」共性难题。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | PR 更新 | Release | 关键特征 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（426/74） | 500（435 待合并/65 合并关闭） | 无 | P0/P1 攻坚、治理成熟、维护者审查成瓶颈 | ⚠️ 高活跃但响应积压 |
| **IronClaw** | 44（34/10） | 50（33 待合并/17 合并） | 1.1.0-rc.1 | v1.1 冲刺、QA 问题密集、MCP 生态扩展 | ✅ 健康，RC 阶段 |
| **ZeroClaw** | 50（40/10） | 50（49 新开/1 关闭） | 无 | RFC 治理活跃、决策积压、S1 安全 Bug | ⚠️ 活跃但合并效率低 |
| **Hermes Agent** | 50（45/5） | 50（46 待合并/4 合并） | 无 | 桌面端回归、god-file 重构、Telegram 对齐 | ⚠️ 重构期，回归突出 |
| **CoPaw** | 22（14/8） | 50（28 待合并/22 合并） | 无 | MCP 稳定性问题、Windows 桌面、微信/DingTalk 渠道 | ✅ 中等健康，迭代快 |
| **NanoBot** | 4（4/0） | 14（9 待合并/5 合并） | 无 | 反馈闭环快、Temporary Chat 重构、安全修复 | ✅ 健康，节奏快 |
| **LobsterAI** | 3（3/0） | 11（10 合并/1 待合并） | 2026.8.5 | 桌面端稳定、企业版隔离、配置一致性问题 | ✅ 健康，维护响应及时 |
| **PicoClaw** | 0 | 4（3 开放/1 关闭） | 无 | OAuth 认证落地、锁文件 Bug、构建体验 | 🟡 中低活跃，评审积压 |
| **NanoClaw** | 2（2/0） | 12（10 待合并/2 关闭） | 无 | 容器自托管、WhatsApp/Signal、Agent 间通信 | 🟡 修复密集但老 Bug 积压 100+ 天 |
| **NullClaw** | 0 | 2（2 待合并/0 合并） | 无 | 两个稳定性修复就绪未合并 | 🟡 低活跃，等待评审 |
| **TinyClaw** | 0 | 0 | 无 | 无活动 | ⚪ 静默 |
| **Moltis** | 0 | 0 | 无 | 无活动 | ⚪ 静默 |
| **ZeptoClaw** | 0 | 0 | 无 | 无活动 | ⚪ 静默 |

---

## 3. OpenClaw 在生态中的定位

OpenClaw 是该生态的**核心参照系与基础设施级项目**，其优势主要体现在三方面：

- **社区规模断层领先**：单日 Issue/PR 各 500 条，是中型活跃项目（如 Hermes、ZeroClaw）的 10 倍，说明其用户基数、贡献者网络和问题反馈量级均为生态最大。
- **自动化治理最成熟**：clawsweeper、issue-rating 等机制已将 Issue 完整标注优先级/影响域/修复形态，这在其他项目中仅有部分雏形（如 ZeroClaw 的 RFC 流程、Hermes 的 sweeper 标签）。
- **技术路线为全功能单体框架**：覆盖渠道接入、记忆、子代理编排、DB 迁移、网关运行等全链路，功能广度领先；而 NanoBot/PicoClaw 走轻量路线，IronClaw/ZeroClaw 偏平台化/安全治理。

**主要短板**：维护者带宽严重不足。大量高优 Issue 处于 `needs-maintainer-review`，P0 级 DB 迁移阻断问题（#119263）仍在等待修复合并，可能影响其版本迭代信誉。这恰好给了 IronClaw、ZeroClaw 等在特定场景（企业级部署、安全策略）建立差异化优势的空间。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话状态可靠性与消息投递** | OpenClaw（#116201 无界状态、#44925 子代理静默丢失、#86519 Telegram 重复回复）、NanoBot（#5256 /goal 循环轰炸）、Hermes（#79407 桌面操作面板消失、#79853 串话）、CoPaw（#6726 长会话 400）、ZeroClaw（#6350 LID 消息丢弃）、NullClaw（#972 渠道假死） | 消除静默失败、重复投递、会话状态泄漏；需要可观测的投递确认与自动恢复机制 |
| **安全边界与权限治理** | OpenClaw（#7707 记忆信任标签、#6615 exec denylist）、NanoBot（#5258 凭据 URL 泄漏）、Hermes（#79562 微信审批失效、#71941 子上下文泄漏）、CoPaw（#6728 中文审批标签）、ZeroClaw（#7155 高危 shell 确认、#9776 forbidden_paths、#9328 凭据链验证） | 从「工具级 allowlist」向「内容级信任分级 + 上下文隔离 + 审批精确化」演进 |
| **MCP/工具生态与错误处理** | NanoBot（#5237 业务错误被当成功）、CoPaw（#6732 MCP 周期性失效）、IronClaw（#7248 无效端点被接受、#7250 认证误导）、ZeroClaw（#8642 内存增长） | MCP 工具调用的失败语义需标准化，不能将业务错误当作成功或让 Agent 盲猜 |
| **模型路由与降级** | CoPaw（#6436 自动路由、PR #6302 统一模型元数据）、NanoBot（#5254 Provider 原生请求开关）、Hermes（PR #61326 集中化模型降级）、ZeroClaw（#8603 Chat Completions 兼容层） | 多模型环境下按任务/成本/可用性自动路由，并对静默模型降级向用户透明 |
| **记忆系统增强与成本控制** | OpenClaw（#113515 QMD 检索修复）、Hermes（#78307 记忆生命周期、#73644 检索计数）、LobsterAI（#2440 系统提示重复注入）、ZeroClaw（#9631 稳定 session_id 节省 prompt-cache） | 记忆去重、信任分级、生命周期管理，降低 token 浪费 |
| **桌面端/WebUI 体验** | Hermes（#79407/#79856/#79858 桌面回归与个性化）、CoPaw（#6734/#6736/#6737 标题与任务命名）、LobsterAI（#2440/#2441 配置一致性）、NanoBot（PR #5249 WebUI 重构、#5253 共享终端） | 从「聊天界面」走向「Agent 工作台」，配置系统需透明可控 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能自主智能体框架（多渠道、子代理、记忆、自动化） | 开发者/深度自托管用户 | 「内核+网关」一体、自动化治理体系、大规模 Issue 驱动 |
| **IronClaw** | 企业级投放/协作平台、MCP 生态、配置即代码 | 团队/组织、生产级部署 | 平台化 + QA 流程 + 显式投递工具；1.1.0-rc 体现「生态触达」战略 |
| **ZeroClaw** | 安全优先的生产级 Agent（WebAuthn、SSRF 防护、RFC 治理） | 安全敏感用户、企业 | 强治理的 RFC 流程、安全能力下沉到运行时 |
| **Hermes Agent** | 桌面端个人助手 + 多渠道（Telegram/微信/飞书） | 桌面端用户、IM 深度用户 | 桌面壳（Electron 类）+ 网关解耦；Telegram Bot API 10.2 对齐战役 |
| **CoPaw** | 中文场景多渠道（微信/DingTalk）+ Windows 桌面 + 模型路由 | 中文用户、Windows 用户 | 多渠道适配器丰富、模型路由层在途、Windows 集成测试补强 |
| **NanoBot** | 轻量快速、WebUI 体验优先（Temporary Chat、MCP UI host） | 个人用户、快速部署 | 单体轻架构、PR 合并节奏快、MCP 工具链演进 |
| **LobsterAI** | 桌面端 + 企业版（学术/企业用户）、签到/活动 | 中文桌面用户、企业 | 基于 OpenClaw 但做产品化封装（活动中心、企业认证隔离） |
| **NanoClaw** | 容器化自托管、信号渠道、Agent 间通信 | 自托管/容器玩家 | 容器边界语义严格（host/container 文件与 DB 隔离） |
| **PicoClaw** | 轻量 API 客户端、OAuth 便利 | CLI 用户、轻量接入 | 认证方式多样（API Key + OAuth setup-token） |
| **NullClaw** | 极简、长稳运行网关 | 常驻部署用户 | 修复导向，渠道自愈机制（poll failures age out） |

---

## 6. 社区热度与成熟度

**快速迭代阶段（功能扩张 + 稳定性并行）**

- **OpenClaw**：体量最大，处于 P0/P1 集中攻坚期，但自动化治理成熟，由大量 Issue/PR 驱动。
- **IronClaw**：v1.1.0-rc.1 已发布，QA 流程闭环，功能面与平台化同步推进，处于发布前冲刺。
- **ZeroClaw**：RFC 讨论与功能 PR 数据活跃，但合并节奏慢，社区深度参与治理，属于「高讨论、低落地」的决策瓶颈期。
- **NanoBot**：Issue→PR 转化率高，Temporary Chat、MCP UI host 等新功能快速推进，社区反馈闭环健康。
- **CoPaw**：Bug 报告与修复 PR 同步增长，Windows 桌面体验修复节奏快，处于中等健康快迭代。

**质量巩固阶段（重构/回归修复为主）**

- **Hermes Agent**：god-file 重构 + Telegram 功能对齐 + v0.20.0 回归修复，属重构阵痛期。
- **LobsterAI**：日常迭代稳定，依赖大版本升级安全合入，但配置一致性问题开始被用户关注。
- **NanoClaw / NullClaw / PicoClaw**：修复/功能 PR 就绪但长期未合并，反映维护者带宽有限，属于「等待型」阶段。

---

## 7. 值得关注的趋势信号

1. **「会话状态可靠性」取代「模型能力」成为第一工程挑战**  
   OpenClaw、NanoBot、CoPaw、NullClaw 等 6+ 项目同时出现消息重复、静默丢失、会话假死类 P0/P1 Bug。对开发者启示：设计 Agent 系统时，应将投递确认、超时恢复、会话幂等视为一等公民，而非事后补救。

2. **Agent 状态幻觉成为新的信任危机**  
   IronClaw QA 系列报告（#7246/#7247）显示 Agent 会虚构「GitHub 已连接」「自动化正在运行」等外部状态。行业方向正在转向 **host 层强制注入真实状态**，而非依赖模型记忆。这是可落地的架构模式，值得借鉴。

3. **安全威胁模型从「运行时注入」扩展到「记忆投毒 + 凭据泄漏 + 供应链」**  
   OpenClaw #7707（记忆信任标签）、NanoBot #5258（带凭据 URL 转发）、ZeroClaw #9328（凭据链绕过验证）表明：攻击面已覆盖持久化记忆、远程服务调用和认证链验证。Agent 框架需要在数据进入记忆前做信任分级。

4. **MCP 工具生态快速膨胀，但错误处理范式尚未成熟**  
   多个项目撞上同一问题：MCP server 返回业务错误（`isError=false`）时，Agent 误认为成功并空转重试。建议社区推动「工具调用结果语义标准化」，区分技术错误/业务错误/可重试错误。

5. **模型路由与 fallback 从「隐藏机制」变成「用户可见配置」**  
   CoPaw、NanoBot、ZeroClaw 均将此作为显式功能推进，且要求模型切换对用户透明。对开发者：静默模型降级会破坏信任，必须提供可观测的模型选择日志和配置入口。

6. **开源治理效率直接影响社区信任**  
   ZeroClaw 的 78 天未定论 RFC、OpenClaw 的 `needs-maintainer-review` 积压、NanoClaw 100+ 天未修复老 Issue，都在消耗贡献者积极性。建议头部项目引入「维护者 SLA」或机器人辅助分流，防止治理成为增长瓶颈。

---

*报告基于 2026-08-06 各项目 GitHub 公开动态生成，数据截止时间为当日统计窗口结束。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-06

## 1. 今日速览

过去 24 小时 NanoBot 项目保持**高活跃度**：共新增/更新 4 条 Issue（全部开放中），提交 14 条 PR（9 条待合并，5 条已关闭/合并），无新版本发布。最值得关注的是，本周出现了多个**由用户报障后迅速转化为修复 PR** 的健康信号——例如 Issue #5256（/goal 重复回复）在当天即获得作者本人的修复 PR #5257；同时，Temporary Chat（临时聊天）相关设计在关闭旧 PR #5184 后重新拆分、迭代为 #5252 与 #5259，显示团队对功能设计质量的把控。合并的 5 个 PR 覆盖了搜索 provider 扩展、WebUI 功能开关、WhatsApp 媒体修复、WebUI 视觉重构，项目整体处于快速迭代、社区反馈响应及时的健康状态。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

过去 24 小时共 5 个 PR 被合并/关闭，其中 4 个合并、1 个因冲突关闭（其功能已拆分重建），主要集中在以下几个方向：

- **新增 Meta-Search Tool（mst）搜索 Provider** ｜ PR #5234 `[provider, feature, priority: p1]`
  将 MST 聚合搜索（DuckDuckGo、Google、Brave、Bing 等多源 + RRF 融合）作为新的 Web 搜索 provider 集成进 agent，扩展了搜索结果的覆盖广度。已合并。
  https://github.com/HKUDS/nanobot/pull/5234

- **WebUI 增加 Provider 原生请求开关** ｜ PR #5254 `[provider, webui, feature]`
  支持在 WebUI 中直接编辑 provider 原始请求字段，包括 OpenAI Codex Fast 模式（`service_tier: "priority"`）、OpenAI/DeepSeek Web 搜索、xAI Grok X Search 等开关，增强了多 provider 场景下的可控性。已合并。
  https://github.com/HKUDS/nanobot/pull/5254

- **修复 WhatsApp 出站媒体内容检测** ｜ PR #5203 `[bug, channel, fix, priority: p2]`
  改为基于文件内容（而非扩展名）判断出站媒体类型，避免 M4A/AAC 等音频走错分发路径，不支持或有歧义的格式降级为文档发送。这是一项直接影响 WhatsApp 用户实际体验的稳定性修复。已合并。
  https://github.com/HKUDS/nanobot/pull/5203

- **WebUI 视觉一致性重构** ｜ PR #5249 `[webui, refactor, priority: p2]`
  统一菜单/弹窗/对话框的两级 Elevation 表面系统、扁平化 Skills 与 Channels 布局、移除持久化消息的回放动画，并增加自动时区检测。已合并。
  https://github.com/HKUDS/nanobot/pull/5249

- **Quick Chat / Temporary Chat 旧 PR 关闭、功能拆分重建** ｜ PR #5184 `[conflict]`
  该 PR 因实现冲突被关闭，但其功能方向被保留并拆分重构为 #5252（WebUI Temporary Chat 模式）与 #5259（memory-only 临时会话），目前均处于开放待合并状态。这说明了项目在合并策略上宁可关闭重做也不带病合并的审慎态度。
  https://github.com/HKUDS/nanobot/pull/5184

此外，#5252 与 #5259 形成了功能叠加关系（#5259 「Stacked on #5252」），预计会依次合并，为 WebUI 引入「会话结束即销毁」的临时聊天能力。

## 4. 社区热点

- **#5149 [Bug] WhatsApp 无法发送音频** ｜ 4 条评论，已开放 9 天
  这是当前评论数最高的 Issue。用户报告 nanobot 能接收 WhatsApp 音频消息，但无法发送任何音频文件（日志显示 ffmpeg 告警）。高评论数说明该问题影响面较广，且社区在持续补充信息。
  https://github.com/HKUDS/nanobot/issues/5149

- **#5237 [Bug] MCP 工具业务错误包被当作成功调用，agent 空等超时** ｜ 2 条评论
  讨论热度高，因为它触及 MCP 工具链的错误处理范式：当 MCP server 返回 `isError=false` 但 content 中携带业务错误信封（如 `{"code":404,...}`）时，nanobot 视为成功，LLM 无法感知失败而反复尝试直至 `tool_timeout`。这反映了工具调用链对「业务错误 vs 技术错误」区分的真实需求。
  https://github.com/HKUDS/nanobot/issues/5237

PR 侧评论数据未提供，但 #5256 与 #5257 的同作者同日「报告-修复」组合在社区中也是值得注意的信号：用户在提交了 0 评论的 bug 报告后，直接附上了自己的修复实现，这类自驱贡献值得维护者优先跟进。

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue / PR | 描述 | 已有修复 PR |
|---|---|---|---|
| 🔴 高 | #5237 `[bug]` | MCP 工具返回业务错误信封时 agent 误认为成功，持续重试直至超时，且无法识别真实原因，影响自动化任务可靠性 | 无（待维护者确认方案） |
| 🔴 高 | #5256 `[bug]` | `/goal` 消息在等待用户回复期间产生几十条近似重复回复，直到用户介入或模型自行终止，消耗大量 token 且输出噪音严重 | ✅ 是（#5257，作者 shakewingo 同人提交） |
| 🔴 高（安全） | PR #5258 `[security, priority: p1]` | 带凭据的 URL（含 `user:pass@`、token、签名参数）可能被转发给远程 Jina Reader，存在凭据泄露风险。该 PR 改为走本地 readability 路径 | ✅ 待合并 |
| 🟠 中 | #5149 `[bug]` | WhatsApp 无法发送音频文件，但可正常接收；日志指向 ffmpeg 告警，兼容性问题 | 无 |
| 🟠 中 | PR #5248 `[bug, priority: p2]` | Matrix `join()` 发送空 POST body，导致 Continuwuity 等 homeserver 拒绝入房（`M_BAD_JSON`） | ✅ 待合并 |
| 🟠 中 | PR #5260 `[bug, priority: p2]` | MemoryStore 会把工作区内的运行时临时文件（如 `.dream_cursor`）误当作记忆文件，该 PR 通过排除规则 + 存量回填解决 | ✅ 待合并 |

其中 #5258 是当前唯一的安全相关修复，且已标记 `priority: p1`，建议维护者优先审查合并。

## 6. 功能请求与路线图信号

- **Temporary Chat（临时聊天）** ｜ Issue #5251 之外最重要的路线图信号。#5184 关闭后拆分出的 #5252 与 #5259 已就绪，功能设计较旧 PR 更为收敛（会话状态仅存内存、不写入历史/记忆、默认可限定 workspace 权限）。若合并，WebUI 将同时具备快速对话与隐私隔离两种轻量聊天形态。
  https://github.com/HKUDS/nanobot/pull/5252
  https://github.com/HKUDS/nanobot/pull/5259

- **共享交互式项目终端** ｜ PR #5253 `[feature, priority: p2]`
  为 WebUI 增加 project-scoped 的持久 PTY 终端，支持 xterm.js 停靠、重连、重启、主动终止及自动打开偏好。这是一个偏基础设施型的功能，一旦合入将为后续「agent 操作终端」类交互提供统一入口。
  https://github.com/HKUDS/nanobot/pull/5253

- **拖拽会话到 composer 生成 @mention** ｜ PR #5261 `[feature]`
  新增交互细节：将侧边栏中不活跃的会话拖入输入框即自动生成结构化会话提及，且不影响已有文件附件、队列提示词的拖拽行为。属于提升多会话管理效率的小而美改进。
  https://github.com/HKUDS/nanobot/pull/5261

- **MCP Apps host 支持** ｜ Issue #5251 `[enhancement]`
  社区请求将 MCP 的官方 `io.modelcontextprotocol/ui` 扩展集成到 WebUI 中，使 MCP server 可以挂载交互式 UI 应用。这与当前 MCP client 方向（工具/资源/prompts）互补，若采纳将使 nanobot 的 MCP 支持从「文本/图像产物」扩展为「交互式应用宿主」。
  https://github.com/HKUDS/nanobot/issues/5251

- **外部管理的 API 服务状态真实上报** ｜ PR #5255 `[draft]`
  提出让 WebUI 的 API 状态面板区分「gateway 自启服务」与「外部 `nanobot serve` 实例」，并新增 `nanobot api status` 子命令。目前为 Draft 状态，方向获得关注，但设计尚未定型。
  https://github.com/HKUDS/nanobot/pull/5255

综合来看，Temporary Chat 是最接近落地的功能，MCP UI host 与共享终端体现了 WebUI 从「聊天界面」走向「agent 工作台」的长期路线。

## 7. 用户反馈摘要

从过去 24 小时的 Issue 讨论中提炼的用户真实反馈：

- **WhatsApp 音频发送缺失**（#5149）：用户明确表达「能收到但发不出」的困惑，期待的是「发送任何音频文件都能被对方收到」这一基础能力。日志中 ffmpeg 告警提示问题可能出在媒体格式探测或转码链路，而不是 nanobot 的消息发送逻辑本身。该类问题对渠道可用性感知影响较大，因为音频属于即时通讯中的核心消息类型。

- **MCP 工具错误不可见**（#5237）：用户（Lucky314159）详细描述了「业务错误被静默吞掉 → agent 空转 → 超时」的全过程，说明当 MCP server 本身用 `isError=false` 包裹业务失败时，nanobot 缺少对 content 内容语义的判断机制。用户希望的是「LLM 能收到失败信号并据此重新规划」，这是工具调用可靠性层面的核心诉求。

- **/goal 循环轰炸**（#5256）：用户报告「一个 /goal 消息产生几十条近乎相同的回复」，并描述了「直到用户干预或模型自主判断循环才终止」的失控过程。从使用场景看，用户并非反对持续目标，而是反对**在等待用户输入时仍被持续注入续作提示**的空转行为，背后的诉求是「目标循坏需要感知会话是否处于空闲/等待态」。

## 8. 待处理积压

- **#5149 WhatsApp 音频发送失败** ｜ 创建于 2026-07-28，至今已开放 9 天，4 条评论，仍无修复 PR。作为一条持续有讨论的渠道功能性 bug，建议维护者优先排查 ffmpeg/neonize 链路。
  https://github.com/HKUDS/nanobot/issues/5149

- **#5237 MCP 业务错误识别** ｜ 创建于 2026-08-04，2 条评论，尚无对应 fix PR。该问题影响所有使用 MCP 工具的自动化场景，且错误表现隐蔽（不报错、空等超时），建议在协议层或工具调用层增加对 content 语义的兜底判断。
  https://github.com/HKUDS/nanobot/issues/5237

- **PR #5248 Matrix 入房兼容修复** ｜ 2026-08-04 提交，已等待约 2 天。修复逻辑清晰、影响面小（仅补非空 body），且对应外部 homeserver 的兼容问题，不阻塞主流程但拖久了会积累渠道侧的兼容债。
  https://github.com/HKUDS/nanobot/pull/5248

- **PR #5258 凭据 URL 安全修复** ｜ `priority: p1` 但尚未合并，建议排在最短周期的审查队列。涉及远程服务（Jina Reader）的凭据泄露风险，合并优先级不应低于新功能开发。
  https://github.com/HKUDS/nanobot/pull/5258

---

**总结**：NanoBot 项目处于功能扩张与稳定性加固并行的快节奏阶段，社区 Bug 反馈转化为修复 PR 的转化率较高（本周 4 个 bug 中有 2 个已有对应修复）。需要重点关注的是 MCP 错误处理范式（#5237）与凭据 URL 安全修复（#5258）两件事，前者影响自动化可靠性，后者影响安全合规，建议优先处理。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-06

## 1. 今日速览

过去 24 小时项目保持高活跃度：共更新 Issues 50 条（45 条新开/活跃，5 条关闭）与 PR 50 条（46 条待合并，4 条合并/关闭），无新版本发布。社区焦点集中在两大长期战役上：「全仓 god-file 分解重构」Epic（[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)，17 条评论）与「Telegram Bot API 10.2 功能对齐」meta-issue（[#78791](https://github.com/NousResearch/hermes-agent/issues/78791)，5 条评论），两者由社区贡献者以 5×2×3 方法论持续驱动。稳定性方面，v0.20.0 桌面端出现两起 P1 级回归（底部操作面板消失 [#79407](https://github.com/NousResearch/hermes-agent/issues/79407)、Linux 网关更新后 ImportError [#78574](https://github.com/NousResearch/hermes-agent/issues/78574)），另有 macOS 资源占用与串话（[#79853](https://github.com/NousResearch/hermes-agent/issues/79853)）等中优先级问题上报。整体看，项目重构与功能推进节奏快，但 0.20.0 引入的桌面端回归和网关稳定性问题需要优先响应。

## 2. 版本发布

今日无新版本发布。当前公开问题集中于 v0.20.0（"The Herald Release"，2026-08-03），桌面端与网关存在多处回归，详见第 5 节。

## 3. 项目进展

今日共 4 条 PR 合并/关闭、5 条 Issue 关闭，可见的重要变更如下：

- **fix(gateway): preserve rebound ws sessions during teardown**（[PR #53525](https://github.com/NousResearch/hermes-agent/pull/53525)）已合并：修复 #50005 背后的 WebSocket 重连竞态。旧 WS 断开时 `_close_sessions_for_transport()` 不再盲目 detach 已被桌面端重新绑定的会话，降低消息投递丢失风险。该 PR 自 6 月 27 日提出，今日关闭，是长周期打磨的网关稳定性修复。
- **fix(agent): centralize bounded model fallback**（[PR #61326](https://github.com/NousResearch/hermes-agent/pull/61326)）已合并：主 Agent 的模型降级逻辑统一走集中式错误分类器，无效模型 ID、配额/会话限制失败在 foreground 与 worker 场景下行为一致，是模型可靠性治理的关键收口。
- **Issue #74560（桌面端 double-render）** 已关闭：此前 #63679 的修复（`finalContinuesInterim`）被证明不完整，本次关闭说明 `interimBoundaryPending` 标志重置的根因已获处理。
- **Issue #79820（DeepSeek 服务端原生 web_search）** 以 duplicate 关闭，说明该能力已有更早的追踪项，避免重复建设。

**值得关注的在途 PR**（反映项目前进方向）：
- [PR #77236](https://github.com/NousResearch/hermes-agent/pull/77236)：AIDE² 自评估系统 5 个阶段全部完成（CI 修复 + 信号生产者 + 评估闭环），31 项测试通过。
- [PR #76661](https://github.com/NousResearch/hermes-agent/pull/76661)：P2P 联邦集群安全加固，优先落地 4 个 CRITICAL 与 1 个 HIGH 审计发现。
- [PR #79778](https://github.com/NousResearch/hermes-agent/pull/79778)：web_server.py 的 Shard S5 字节级抽取（console/spa-mount/ws-auth 三组 mixin），零行为变更。

## 4. 社区热点

- **[#78647 — Epic: Shard all 20 god files（17 条评论）](https://github.com/NousResearch/hermes-agent/issues/78647)**：全仓 god-file 分解的史诗级任务，确立 "all god files are sharded, never reverted" 的仓库政策。该 Epic 串联了 [#78631](https://github.com/NousResearch/hermes-agent/issues/78631)（hermes_cli/main.py，12,571 行）、[#54962](https://github.com/NousResearch/hermes-agent/issues/54962)（gateway/run.py，858KB）等多个分解任务，是当前社区规模最大的重构共识。
- **[#77780 — lifecycle_guard 崩溃致全部终端命令不可用（12 条评论）](https://github.com/NousResearch/hermes-agent/issues/77780)**：P2 级网关生命周期守卫在扫描 heredoc/`-c` payload 路径时，因 `os.open` 抛出 `ValueError: embedded null byte` 未捕获而崩溃，并向上传播至 `contains_gateway_lifecycle_command_or_referenced_script`。评论活跃说明影响面广（涉及 tool/terminal 与 cron），且目前未见 fix PR。
- **[#54962 — 从 gateway/run.py 抽取平台路由（11 条评论）](https://github.com/NousResearch/hermes-agent/issues/54962)**：858KB god file 集中了事件循环与 payload 解析逻辑，社区呼吁按平台拆分。该 Issue 自 6 月 29 日开启，讨论热度持续，与 #78647 Epic 形成呼应。
- **[#78791 — Telegram Feature Parity & Alignment Campaign（5 条评论）](https://github.com/NousResearch/hermes-agent/issues/78791)**：Telegram Bot API 10.2 对齐战役的 meta-issue，衍生出至少 7 个功能子任务（#78689–#78693、#78788、#78790），显示社区对 IM 平台能力完整性的强烈需求。

## 5. Bug 与稳定性

### P1（严重回归，建议立即处理）
- **[#79407 — Desktop 0.20.0 底部操作面板完全消失](https://github.com/NousResearch/hermes-agent/issues/79407)**：更新后桌面应用退化为「仅查看外壳」，Command Center、网关控制、子 Agent 状态等入口全部丢失。平台 Windows，sweeper 标记 risk-platform-windows。暂未见对应 fix PR。
- **[#78574 — Linux 默认网关更新后残留旧代码，触发 ImportError](https://github.com/NousResearch/hermes-agent/issues/78574)**：`hermes update` 未重启运行中的 systemd user 网关，导致旧内存模块与新源码混用，Telegram 轮次直接 ImportError。同时命中 message-delivery 与 compatibility 风险，获得 1 个 👍。暂未见对应 fix PR。

### P2（中优先级）
- **[#77780 — lifecycle_guard 崩溃致所有终端命令失败](https://github.com/NousResearch/hermes-agent/issues/77780)**：见社区热点，12 条评论，未标注 fix PR。
- **[#79853 — macOS 0.20.0 高资源占用 + 跨会话消息混入](https://github.com/NousResearch/hermes-agent/issues/79853)**：渲染进程 CPU 峰值约 400%，负载下出现「跨会话消息混入」，sweeper 标记 risk-session-state，标注 needs-repro。
- **[#71941 — 委派子上下文通过共享终端快照泄漏](https://github.com/NousResearch/hermes-agent/issues/71941)**：`HERMES_DELEGATED_CHILD_CONTEXT` 在终端环境缓存共享后，后续普通 Agent 调用仍能看到委派子进程的环境变量，破坏会话隔离。
- **[#79562 — 微信 /approve 纯文本回退首次后失效](https://github.com/NousResearch/hermes-agent/issues/79562)**：同一次会话中首次审批成功后，后续 approve 被当作普通消息进入 Agent，属审批时序竞态，安全关键。
- **[#79459 — 本地 TTS 忽略配置 voice（Piper/KittenTTS）](https://github.com/NousResearch/hermes-agent/issues/79459)**：静默使用默认音色，无任何报错，用户难以察觉配置失效。
- **[#79220 — 成本标签在 2dp 下显示 $0.00](https://github.com/NousResearch/hermes-agent/issues/79220)**：低价模型单轮成本不足 1 美分，显示为 $0.00，属观感误导（非计算错误）。
- **[#79101 — API server 将虚拟模型别名持久化为真实模型](https://github.com/NousResearch/hermes-agent/issues/79101)**：`POST /api/sessions` 未显式传 model 时，虚拟别名（如 "hermes-agent"）被存为会话的 model，后续 chat 调用将该别名当作真实模型 ID 使用。
- **[#79841 — 飞书 DM Allow 按钮被群组策略错误控制](https://github.com/NousResearch/hermes-agent/issues/79841)**：v0.20.0 用 `default_group_policy` 而非管理员名单控制私聊审批，触及安全边界。

### P3（低优先级 / 已关闭）
- [#71866 桌面端更新后侧边栏清空（state.db 完好）](https://github.com/NousResearch/hermes-agent/issues/71866)
- [#78788 Telegram 未知/无数据 callback query 永不回执，客户端 spinner 卡死](https://github.com/NousResearch/hermes-agent/issues/78788)
- [#79843 桌面端本地仓库发现泄漏到远程后端 projects.db](https://github.com/NousResearch/hermes-agent/issues/79843)
- [#74560 桌面端 double-render（已关闭）](https://github.com/NousResearch/hermes-agent/issues/74560)

### 关联修复 PR（今日在途）
今日活跃的修复 PR 可形成以下对应关系：
- 渠道稳定性：[#79857](https://github.com/NousResearch/hermes-agent/pull/79857)（客户渠道屏蔽 provider 内部错误，Twilio SMS 支持显式禁用）、[#79851](https://github.com/NousResearch/hermes-agent/pull/79851)（微信/企业微信媒体发送错误上浮，`ret=-2` 限频不再静默）、[#79799](https://github.com/NousResearch/hermes-agent/pull/79799)（Slack 自由回复频道 ack）。
- 记忆系统：[#79861](https://github.com/NousResearch/hermes-agent/pull/79861)（Hindsight 预取等待可配置）、[#73644](https://github.com/NousResearch/hermes-agent/pull/73644)（holographic memory 检索计数写入真实读路径）。
- 模型能力：[#79862](https://github.com/NousResearch/hermes-agent/pull/79862)（kimi-coding 按模型启用视觉输入，修复 kimi-k3 被误判 text-only）。
- 桌面端：[#77900](https://github.com/NousResearch/hermes-agent/pull/77900)（Win/Linux 注册重载/DevTools 快捷键）、[#79803](https://github.com/NousResearch/hermes-agent/pull/79803)（关闭时最小化到托盘，默认关闭）。
- 其他：[#74275](https://github.com/NousResearch/hermes-agent/pull/74275)（dashboard `/api/model/options` 锁竞争冻结）、[#75566](https://github.com/NousResearch/hermes-agent/pull/75566)（Docker ddgs 持久化）、[#73744](https://github.com/NousResearch/hermes-agent/pull/73744)（WhatsApp 出站 @提及）、[#40124](https://github.com/NousResearch/hermes-agent/pull/40124)（session_search 剥离 ANSI）。

## 6. 功能请求与路线图信号

- **桌面端个性化是明确的下版本方向**：[#79856](https://github.com/NousResearch/hermes-agent/issues/79856)（对话宽度可配置）与 [#79858](https://github.com/NousResearch/hermes-agent/issues/79858)（独立字号设置）均标记 duplicate（说明已有内部追踪），叠加今日新增 [PR #79803（最小化到托盘）](https://github.com/NousResearch/hermes-agent/pull/79803) 与 [#77900（快捷键）](https://github.com/NousResearch/hermes-agent/pull/77900)，桌面端 UX 定制化将进入 0.21 迭代。
- **Telegram Bot API 10.2 对齐战役**（[#78791](https://github.com/NousResearch/hermes-agent/issues/78791)）：涵盖付费广播（#78689）、LinkPreviewOptions（#78690）、自定义 emoji 反应（#78691）、批量转发/复制（#78692）、批量删除（#78693）、默认管理员权限（#78790）、callback query 回执（#78788）。若按计划推进，这些能力将随战役合并进入下一版本。
- **内置记忆生命周期管理**（[#78307](https://github.com/NousResearch/hermes-agent/issues/78307)）：MEMORY.md/USER.md 的检查、去重、合并、冲突检测、待处理队列清理，与 [PR #73644](https://github.com/NousResearch/hermes-agent/pull/73644)、[PR #79861](https://github.com/NousResearch/hermes-agent/pull/79861) 共同构成记忆系统增强集群，属本地优先的数据治理方向。
- **DeepSeek 服务端原生 web_search**（[#79820](https://github.com/NousResearch/hermes-agent/issues/79820)，已以 duplicate 关闭）：说明该能力已有更早追踪项，服务端搜索进入路线图的确定性较高。
- **Agent 自评估与联邦能力**：[PR #77236](https://github.com/NousResearch/hermes-agent/pull/77236)（AIDE² 自评估 5 阶段）与 [PR #76661](https://github.com/NousResearch/hermes-agent/pull/76661)（P2P 联邦心跳 + 安全加固）是两个大体量在途功能，代表 Agent 自主性与多设备协同的前沿探索。
- **桌面端预览体验持续积累需求**：[#71985](https://github.com/NousResearch/hermes-agent/issues/71985)（预览面板独立成窗）与 [#41736](https://github.com/NousResearch/hermes-agent/issues/41736)（Preview 链接路由到文件标签页），可与宽度/字号自定义合并为「桌面端工作台增强」批次。

## 7. 用户反馈摘要

- **升级阵痛明显，但用户排查质量高**：v0.20.0 桌面端底部面板消失（#79407）、macOS 资源飙升与串话（#79853），以及 v0.19.0 侧边栏清空（[#71866](https://github.com/NousResearch/hermes-agent/issues/71866)）——该用户明确验证了 `state.db` 中 227 个活跃会话数据完好，将问题定位到 UI 层读取/渲染，这类「数据没丢但界面不显示」的反馈对排查极具价值。
- **成本透明性困扰**：[#79220](https://github.com/NousResearch/hermes-agent/issues/79220) 指出低价模型每轮花费显示 $0.00，「用户知道算了但看不到数」，虽非计算错误，但影响对账单的信任感。
- **TTS 配置「静默失效」**：[#79459](https://github.com/NousResearch/hermes-agent/issues/79459) 中 Piper/KittenTTS 无视 voice 配置且无报错，用户难以区分是配置写错还是产品缺陷——静默失败比显式报错更伤信任。
- **审批流可用性**：[#79562](https://github.com/NousResearch/hermes-agent/issues/79562) 微信平台首次审批成功后即失效。危险命令审批处于安全关键路径，用户对该类问题容忍度低。
- **远程连接语义混淆**：[#79843](https://github.com/NousResearch/hermes-agent/issues/79843) 桌面端连远程后端时 Projects 列表混入本机仓库，用户期望「连谁就显示谁」的清晰边界。
- **积极信号**：[#78574](https://github.com/NousResearch/hermes-agent/issues/78574) 获 👍 说明用户认可复现质量；Telegram 对齐战役的子任务均附带官方 API 文档锚点（core.telegram.org），用户参与专业度高，降低了维护者的信息核对成本。

## 8. 待处理积压

- **[#54962 — 从 gateway/run.py（858KB）抽取平台路由](https://github.com/NousResearch/hermes-agent/issues/54962)**：2026-06-29 开启，11 条评论，已活跃超 5 周。作为 god-file Epic 的核心子任务，建议明确排期。同类还有 [#78631（hermes_cli/main.py，12,571 行）](https://github.com/NousResearch/hermes-agent/issues/78631)。
- **[#40124 — session_search 结果剥离 ANSI（PR 已就绪）](https://github.com/NousResearch/hermes-agent/pull/40124)**：2026-06-05 开启的 P2 bug，PR 已存在两个多月仍未合并。ANSI 转义序列进入模型上下文属于数据卫生问题，建议维护者优先 review。
- **[#41736 — Preview 链接经文件标签页路由](https://github.com/NousResearch/hermes-agent/issues/41736)**：2026-06-08 开启的 P3 桌面端工作流改进，长期未响应；可与 #71985 合并规划。
- **[#71941 — 委派子上下文经终端快照泄漏](https://github.com/NousResearch/hermes-agent/issues/71941)**：2026-07-26 开启的 P2 会话状态风险，已打标 sweeper:risk-session-state，一周无修复进展。
- **[#71866 — 桌面端侧边栏更新后清空](https://github.com/NousResearch/hermes-agent/issues/71866)**：2026-07-26 开启，用户已提供详尽排查（state.db 完好）。同类症状 #71857 仍开放，疑似同一根因，建议合并排查。
- **[#71985 — 预览面板独立成窗](https://github.com/NousResearch/hermes-agent/issues/71985)**：2026-07-26 开启，与 #41736 同属桌面端预览体验，建议与文件标签页路由一并纳入同一迭代。

---

*数据来源：NousResearch/hermes-agent GitHub 仓库 2026-08-06 24 小时动态。本日报基于 Issues/PRs 元数据自动生成，供项目健康度评估与维护排期参考。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-08-06

## 今日速览

截至 2026-08-06，PicoClaw 项目在过去 24 小时内无新 Issue 产生，无新版本发布，但有 4 条 PR 发生状态更新，其中 1 条合并/关闭、3 条仍处于 Open 状态。整体活跃度处于**中等偏上**水平：PR 提交频率正常，但 Issue 侧完全静默，社区反馈入口接近零。项目当前处于**稳步迭代**阶段，重点在模型配置灵活性（#3200）、构建体验（#1951）与基础设施修复（#3318）三条线上推进。


## 项目进展

今日共有 1 条 PR 关闭、3 条 PR 保持开放并持续更新。核心进展集中在 OAuth 认证能力的落地，以及构建工具链的修复与改进。

| PR | 状态 | 内容 | 影响 |
|---|---|---|---|
| [#926](https://github.com/sipeed/picoclaw/pull/926) | **CLOSED** | 新增 Anthropic OAuth setup-token 登录支持（`sk-ant-oat01-*`），提供 `--setup-token` 命令行参数及交互式登录菜单，支持用量统计查询和流式响应 | 显著拓宽了认证渠道，降低非 API Key 用户的接入门槛 |
| [#3318](https://github.com/sipeed/picoclaw/pull/3318) | OPEN | 修复 `web/frontend/pnpm-lock.yaml` 重复映射键导致的锁文件不可解析问题 | 解决上游依赖安装直接报错的问题，影响所有 Web 前端开发者 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | OPEN | 为 Web UI 增加可配置的默认模型 fallback chain，支持后端 API 持久化 | 提升模型切换的容错能力，属用户体验增强型改动 |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | OPEN | 将安装脚本从 docs 仓库迁移至主仓库 | 简化发布流程，降低文档与代码不同步的风险 |

整体来看，项目在今日完成了 **1 项认证能力的收尾**，同时有 3 项功能性/修复性 PR 等待评审，属于正常推进节奏，尚未形成大版本级别的跃迁。


## 社区热点

今日 4 条 PR 均无公开评论计数数据（备注为 undefined），无法精确统计讨论热度。但从更新时间和内容特征来看，以下两个话题最受关注：

- **[#3318 修复 pnpm-lock.yaml 损坏问题](https://github.com/sipeed/picoclaw/pull/3318)**（创建 08-05，当日更新）——锁文件无法解析会直接阻断所有开发者的安装流程，属于“广而急”的问题，任何 npm/pnpm 使用者都会第一时间感知，预计维护者会优先处理。
- **[#926 Anthropic OAuth 登录](https://github.com/sipeed/picoclaw/pull/926)**（已关闭）——OAuth 认证是 AI 工具链中频繁被社区要求的特性，尤其是 `sk-ant-oat01-*` 这类 setup token 的接入，直接对应 Anthropic 用户的实际使用场景。该 PR 的关闭意味着该功能已进入主分支或等待合并。

社区诉求的核心在于**降低使用门槛**（认证方式多样化）与**保障基础工程可用**（构建工具链不出错）。


## Bug 与稳定性

今日报告了 **1 个明确 Bug**，暂无崩溃或严重回归事件。

| 严重度 | 描述 | 状态 | 关联 PR |
|---|---|---|---|
| **高** | `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 被重复声明（`packages:` 与 `snapshots:` 下各一次），YAML 规范禁止重复映射键，导致 `ERR_PNPM_BROKEN_LOCKFILE` 且 pnpm 拒绝一切安装操作 | ✅ 已有修复 PR [#3318](https://github.com/sipeed/picoclaw/pull/3318) 处于 Open 状态 | [#3318](https://github.com/sipeed/picoclaw/pull/3318) |

该问题直接影响所有 Web 前端开发者与 CI/CD 流程，修复 PR 已提交，但尚未合并，需维护者重点关注。


## 功能请求与路线图信号

今日无新 Issue 产生，但从 PR 内容中可以提炼出以下功能方向信号：

1. **多认证方式支持**（来自 [#926](https://github.com/sipeed/picoclaw/pull/926)）——Anthropic OAuth setup-token 的落地表明项目正在向**企业级 / 托管式使用场景**靠拢。考虑到 OAuth 与 API Key 并存是大模型平台的标准演路径，这表明 PicoClaw 在认证层面正逐步对齐 Claude 生态主流用法。

2. **可配置默认模型 fallback chain**（来自 [#3200](https://github.com/sipeed/picoclaw/pull/3200)）——允许用户自定义默认模型和后备模型链，并在页面端拖拽排序。这响应了多模型调度场景下“主模型不可用时自动切换”的刚需，预计将为后续的智能路由或负载均衡功能打基础。

3. **安装脚本仓库整合**（来自 [#1951](https://github.com/sipeed/picoclaw/pull/1951)）——将安装脚本从 docs 仓库迁入主仓库，是**发布流程规范化**的前置动作，往往意味着项目即将进入更高频的版本发布周期。

以上三条中，**#3200 和 #3318 最可能被纳入下一版本**——前者是用户可见的核心功能，后者是阻断性 Bug 修复。

> 注：由于今日暂无新版本发布，以上信号均为预告性质，下一版（如 v1.x 或 v2.x）的实际收录情况需以 Release Notes 为准。


## 用户反馈摘要

由于今日无新 Issue、无 PR 评论数据，无法直接引用社区用户的原始反馈。但可基于 PR 描述提炼潜在用户痛点：

- **构建体验受阻**（数据来源：[#3318](https://github.com/sipeed/picoclaw/pull/3318)）：`pnpm-lock.yaml` 损坏导致 `ERR_PNPM_BROKEN_LOCKFILE`，说明“仓库克隆即可运行”的开发者体验承诺尚未完全兑现，锁定文件质量需要纳入 CI 检查。
- **认证流程冗余**（数据来源：[#926](https://github.com/sipeed/picoclaw/pull/926)）：用户需要在 CLI 中显式处理 API Key 注册，操作链路较长，OAuth setup-token 的加入将显著缩短配置时间。
- **模型切换不够灵活**（数据来源：[#3200](https://github.com/sipeed/picoclaw/pull/3200)）：当前 Web UI 只能指定单一模型，缺少“按优先级回退”的机制，在服务不稳定或限流场景下容易打断工作流。

以上均为 PR 提交者的主动诉求，可视为间接用户信号。


## 待处理积压

以下 PR 长期未得到合并，建议维护团队确认其状态与优先级：

- **[#1951](https://github.com/sipeed/picoclaw/pull/1951)** —— 创建于 2026-03-24，Open 状态持续 **135+ 天**，对于“移动安装脚本”这类低成本基建改动而言等待时间偏长，可能存在与 docs 仓库的协调问题。
- **[#3200](https://github.com/sipeed/picoclaw/pull/3200)** —— 创建于 2026-07-01，Open 状态 **36 天**，功能价值明确但涉及前端页面与后端 API 的双端改动，Review 成本较高，建议拆分或指定专人跟进。

以上两项若均非有意搁置，将影响社区对维护响应速度的信心。建议在下一轮维护者例会中明确处置方案（合并 / 关闭 / 打回重做）。

---

**项目健康度总评**：⚡ 7/10 —— 代码生产活动正常，认证特性已落地；但 Issue 零反馈 + 单个高优先级 Bug 待修复 + 两条长期积压 PR 是当前需要解决的薄弱环节。建议优先合并 #3318 阻止安装问题蔓延，并对 #1951 做出明确处置，避免文档与代码脱节继续发酵。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-06

> 数据来源：GitHub（Nanoclaw 仓库）｜统计窗口：2026-08-05 至 2026-08-06

## 1. 今日速览

过去 24 小时项目整体保持较高活跃度：共 12 条 PR 更新（10 条待合并、2 条关闭），2 条 Issue 更新（均为长期未关闭的 Bug），无新版本发布。开发侧呈现「修复密集提交」特征，涉及 WhatsApp 启动挂起、MCP 环境变量透传、outbound.db 单写者违规、Agent 间通信等多个模块；同一修复（#3175 → #3192）在同一天被关闭并重新提交，说明维护者正在快速迭代方案。值得警惕的是，#2006 与 #2528 两个核心 Bug 已分别积压 103 天和 80 天，对项目健康度构成长期隐忧。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共关闭 2 个 PR，另有 6 个新 PR 提交，主分支功能推进主要集中在消息路由与 Agent 通信链路：

- **[#3187] fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works**（作者：dim0627，已关闭）
  禁止 agent-runner 内置的 SendMessage，消除了对 Agent SDK 默认行为的依赖，为 Agent 间消息通信打通路径。这是近期「Agent 互联」方向上的关键一步。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3187

- **[#3175] fix: route command-gate denials through the delivery adapter, not outbound.db**（作者：Joi，已关闭）
  该 PR 被同日重新提交的 [#3192](https://github.com/nanocoai/nanoclaw/pull/3192) 取代（开放中）。新 PR 改进了宿主进程对容器自有 `outbound.db` 的写入设计，消除违反单写者不变量带来的数据损坏风险，值得继续跟进。
  🔗 https://github.com/nanocoai/nanoclaw/pull/3175

- 新增待合并 PR 6 个：#3192（命令门拒绝路由）、#3191（WhatsApp 启动超时）、#3190（Tavily MCP skill）、#3189（add-why skill）、#3188（MCP 环境变量透传）、#3186（skill 宿主 seams 重构）。

整体评价：项目正处于「稳定性加固 + 生态外扩」双线并行的阶段，但没有 release 落地意味着上述进展尚未形成用户可感知的版本收益。

---

## 4. 社区热点

今日讨论热度整体不高，2 条活跃 Issue 各有 1 条评论，PR 无评论。相对热点如下：

- **Issue #2528 — Signal 渠道附件不可达**（[链接](https://github.com/nanocoai/nanoclaw/issues/2528)）：创建于 5 月 18 日，直至今日仍被更新，说明「宿主收到附件但容器内 Agent 打不开」的问题持续困扰用户。关联修复 PR #3156 已存在但未合并，社区正在等待修复落地。

- **Issue #2006 — Debian 12 LXC 安装权限失败**（[链接](https://github.com/nanocoai/nanoclaw/issues/2006)）：4 月 25 日创建，是当前存活最久的 Issue，阻塞 Proxmox/LXC 场景下的新用户安装，属于「新手第一印象」痛点。

- **PR #3175 / #3192 同日更替**：同一位作者在同一天关闭旧 PR、提交新 PR，是今日最值得关注的事件信号 — 说明维护团队对该修复（避免 host 写入容器自有数据库）有明确优先级，但尚未收敛到最终合并版本。

两处热点背后的共同诉求是：**让自托管部署在各种环境（LXC、容器、多渠道）下开箱即用**，且容器边界的文件/数据库访问语义需要更清晰的契约。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 问题摘要 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | Signal 渠道图片/PDF 附件到达 host 但 Agent 容器内无法访问（已 80 天） | OPEN | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) 待合并 |
| 🔴 高 | [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | Debian 12 LXC 全新安装 docker 套接字权限拒绝，恢复路径不触发（已 103 天） | OPEN | 无 |
| 🟡 中 | [#3191](https://github.com/nanocoai/nanoclaw/pull/3191) | WhatsApp `setup()` 无超时等待 Baileys 首连事件，登出会话会挂起 host 启动 | Fix PR OPEN | 同号 PR |
| 🟡 中 | [#3188](https://github.com/nanocoai/nanoclaw/pull/3188) | 容器内 MCP stdio 子进程缺少 HTTPS_PROXY/CA 信任等环境变量，网关环境无法透传 | Fix PR OPEN | 同号 PR |
| 🟡 中 | [#3192](https://github.com/nanocoai/nanoclaw/pull/3192) | command-gate 拒绝通知直接写入容器 `outbound.db`，违反单写者不变量，有损坏风险 | Fix PR OPEN | 同号 PR |

今日无新崩溃或回归报告。但 #2006、#2528 两个高危问题的「Issue 存活时间」远超健康阈值，且 #2006 尚无任何 Fix PR，建议维护者优先排期。

---

## 6. 功能请求与路线图信号

- **渠道扩展**：[#3050](https://github.com/nanocoai/nanoclaw/pull/3050) 为安装向导新增 Dial 渠道（含 `runChannelSkill` 模型），已开放 23 天。若合并，将进一步扩大渠道覆盖面。
- **Skills 生态扩充**：
  - [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) 新增 Tavily MCP 工具 skill；
  - [#3189](https://github.com/nanocoai/nanoclaw/pull/3189) 新增 add-why skill（解释单条消息的处理结果）；
  - [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) 提议清理过期的 qodo/Google MCP skills，体现对 skill 仓库质量的治理意识。
- **架构演进**：[#3186](https://github.com/nanocoai/nanoclaw/pull/3186) 为 skill 拥有的能力添加 host seams，属于基础设施层重构，可能成为后续 skill 系统插件化的铺垫。
- **Agent 间通信**：随 #3187 合并，Agent-to-Agent 消息通信是当前明确的路线图方向。

综合判断：下一版本候选特性大概率包含 WhatsApp 启动稳定性修复、MCP 环境变量透传、outbound.db 写入重构，以及至少 1–2 个新 skill。Dial 渠道由于等待时间较长，可能进入下一里程碑。

---

## 7. 用户反馈摘要

- **brentkearney（#2528）**：通过 Signal 发送的 `archetype.png` 等图片/PDF 已到达宿主机器，但容器内的 Agent 无法打开文件。反馈核心诉求是「渠道附件应完整、可解析地传递给 Agent」，同时暴露了宿主与容器之间文件共享边界的实现缺口。

- **dooha333（#2006）**：在 Proxmox VE 的 Debian 12 LXC 中执行 `bash nanoclaw.sh`，安装脚本已通过 `usermod -aG docker` 将用户加入 docker 组，但同一安装流程的后续步骤仍然报权限拒绝，且预期中的恢复路径没有触发。反馈指出 **LXC/嵌套容器环境下组权限生效时序** 是安装脚本的盲区。

- 整体满意度信号：用户愿意在 fresh install 和日常使用中反馈细节，说明项目具备真实用户基础；但两个老 Issue 长期无修复进展，可能削弱社区信任度。

---

## 8. 待处理积压

| 类型 | 编号 | 创建时间 | 已搁置 | 说明 |
|---|---|---|---|---|
| Issue | [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) | 2026-04-25 | 103 天 | Debian 12 LXC 安装 docker 权限问题，阻塞新用户，**无 Fix PR** |
| PR | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 2026-05-08 | 90 天 | 未知斜杠命令应视为普通聊天而非 passthrough，长期未合并 |
| Issue | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) | 2026-05-18 | 80 天 | Signal 附件容器内不可达，关联 PR #3156 未合并 |
| PR | [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | 2026-07-14 | 23 天 | Dial 渠道集成，含安装向导与 skill 模型改动 |
| PR | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) | 2026-07-30 | 7 天 | 渠道附件作为结构化 parts 传给 provider，可能直接修复 #2528 |

**维护者提醒**：
1. #3175 关闭后 #3192 需要明确合并计划，避免同题 PR 反复空转；
2. #2006 作为阻塞新用户安装的「准入门级」Issue，建议至少给出临时 workaround 或脚本修复；
3. #3156 与 #2528 属同一链条，优先合并可同时消化一个 PR 和一个 80 天老 Issue。

---

*报告生成时间：2026-08-06｜数据窗口：过去 24 小时｜仓库：github.com/qwibitai/nanoclaw（Issue/PR 数据源为 nanocoai/nanoclaw）*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-08-06

**数据来源**: github.com/nullclaw/nullclaw | 统计窗口: 2026-08-05 ~ 2026-08-06

---

## 1. 今日速览

过去 24 小时内，NullClaw 项目整体活跃度处于低位：无新 Issue 开启、无已关闭 Issue、无新版本发布，全部动态集中在两条待合并的 Pull Request 上。两条 PR 均来自同一贡献者（raskevichai），且都指向具体的稳定性缺陷——一个是 Agent 会话线程栈空间不足的根因修复，另一个是门控渠道（Telegram/Matrix）轮询线程老化后永久沉默的修复机制。可以判断项目当前处于"维护窗口期"：开发重心从新功能转向运行健壮性与边界场景补齐，但合并流程出现了停滞，两条修复均未在今天完成合并，需关注后续动向。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并或关闭，代码库实质未发生变更，但值得关注的是两条处于待合并状态的修复已就绪，标志着以下两个方向的进展：

### 🔧 修复就绪（待合并）

| PR | 标题 | 目标问题 | 进展 |
|----|------|----------|------|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | fix(runtime): give the agent turn path a 16 MiB stack | 关闭 #976 | ✅ 已提交，待 reviewer 审核 |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | fix(channels): let poll failures age out a dead polling thread | 关闭 #972 | ✅ 已提交，待 reviewer 审核 |

**项目意义**：这两项修复分别覆盖了运行时稳定性与渠道连接可靠性两条主线。`#985` 针对 Agent 对话轮次（turn path）的栈空间不足问题——原配置将 `SESSION_TURN_STACK_SIZE` 错误地别名为 2 MiB 的 `HEAVY_RUNTIME_STACK_SIZE`，导致每个处理 `SessionManager.processMessage*()` / `Agent.turn()` 的线程可能因栈空间不足而崩溃；`#984` 则修复了 Telegram/Matrix 渠道在长时间空闲后彻底无响应、且监督循环（supervisionLoop）结构性地无法感知该故障的问题。若两者合并，将显著提升多轮对话场景与常驻网关场景的稳定性。

**今日进度评估**：0 个 PR 合并意味着项目状态与昨日持平，但两条修复都已越过代码编写阶段，进入验收环节。提交后 24 小时未合并可能反映维护者响应节奏偏慢，或正在对修复做额外验证。

---

## 4. 社区热点

今日社区讨论热度极低：过去 24 小时无新增或活跃 Issue，两条 PR 的评论数均未披露（undefined），点赞数均为 0。说明外部贡献者尚未投入讨论，项目社区互动处于静默状态。

值得注意的潜在热点是两条 PR 背后的 **Issue #976 与 #972**。虽然它们不在今日更新列表中，但对应修复的提交说明揭示了用户实际遇到的问题（详见下文 Bug 与稳定性），这些是用户群正在遭遇的直接影响。建议维护者跟进这些原始 Issue 的话题标签与订阅者反馈。

| 链接 | 说明 |
|------|------|
| [PR #985](https://github.com/nullclaw/nullclaw/pull/985) | 暂无评论互动 |
| [PR #984](https://github.com/nullclaw/nullclaw/pull/984) | 暂无评论互动 |

---

## 5. Bug 与稳定性

今日无新 Bug 报告。但结合待合并 PR 指向的底层问题，实际存在两个已知未修复/未合入的稳定性缺陷，按严重程度排列如下：

### 高危：Agent 会话线程栈空间不足（Stack Overflow 风险）
- **现象**：`SESSION_TURN_STACK_SIZE` 与 `HEAVY_RUNTIME_STACK_SIZE` 被设置成同一数值（2 MiB），导致运行 Agent 对话轮次的线程在复杂对话或深度调用链下可能触发栈溢出。
- **影响范围**：所有调用 `Agent.turn()` 或 `SessionManager.processMessage*()` 的路径，即核心对话引擎全链路。
- **修复状态**：PR [#985](https://github.com/nullclaw/nullclaw/pull/985) 已提供修复方案（增大至 16 MiB），**尚未合并**。
- **关联 Issue**：[#976](https://github.com/nullclaw/nullclaw/issues/976)

### 中危：渠道轮询线程"假死"导致永久沉默
- **现象**：Telegram 和 Matrix 渠道在经历一整夜空闲后静默失效，`nullclaw agent` 仍能正常应答，但所有渠道消息都无法送达/接收；重启网关可临时恢复。
- **根因**：监督循环（supervisionLoop）在结构上无法探测到轮询线程已死——即使线程因轮询失败退出，监督者也不知情。
- **影响范围**：Telegram / Matrix 渠道的长时间运行场景（常驻部署受影响最大）。
- **修复状态**：PR [#984](https://github.com/nullclaw/nullclaw/pull/984) 通过让失败的轮询在监督循环中逐步老化（age out）并触发重建线程，**尚未合并**。
- **关联 Issue**：[#972](https://github.com/nullclaw/nullclaw/issues/972)

> 稳定性评估：当前两个已知问题均已有精确修复方案覆盖，项目把控方向明确，但由于 PR 尚未合并，线上版本仍暴露在上述风险中。建议尽快安排 code review 与合并发布。

---

## 6. 功能请求与路线图信号

今日无新功能请求提出。从现有 PR 的技术选型可以推断未来版本的方向性信号：

- **运行时安全加固**：#985 将对话轮次线程栈从 2 MiB 增至 16 MiB，说明项目在追求更深层、更复杂的 Agent 推理链路。这一改动可能与未来的单轮多步 Agent 循环、工具调用链深度扩展有关，属于为下一阶段功能提前做的运行时储备。
- **长连接渠道自愈能力**：#984 不再依赖监督者的"监控能力"，而是让故障本身成为触发重建的信号（failures age out），这是一种更实用的自愈哲学。该模式可能推广到其他渠道适配器（如 Discord、Slack 等）。

若这两项修复按预期合并，NullClaw 的下一代版本可能在"长时间无人值守的 Agent 网关"和"重负载多轮对话"两个场景上提供更可靠的服务承诺。

---

## 7. 用户反馈摘要

今日无新增 Issue 评论，但 PR 描述与关联 Issue 中透露出真实的用户痛点，归纳如下：

| 用户痛点 | 场景描述 | 来源 |
|----------|----------|------|
| 对话在长时间运行后消失 | Agent 在深夜或长时间运行后，无法向 Telegram/Matrix 渠道发送消息，但服务并非崩溃 | 来自 [#984](https://github.com/nullclaw/nullclaw/pull/984) 关联的 [#972](https://github.com/nullclaw/nullclaw/issues/972) |
| 消息渠道"假死"难察觉 | 负责人直到用户主动询问"为什么没回消息"才发现，排查成本高 | 同上 |
| 复杂对话可能触发崩溃 | 深入对话路径时存在潜在栈溢出风险，表现为会话终止或进程异常 | 来自 [#985](https://github.com/nullclaw/nullclaw/pull/985) 关联的 [#976](https://github.com/nullclaw/nullclaw/issues/976) |

**满意度倾向**：中性偏负——用户遇到的问题属于"部署后才会暴露"的边界场景，说明项目核心功能稳定，但长时间运行场景仍需打磨。修复方案获得贡献者关注说明社区具备自驱修复能力。

---

## 8. 待处理积压

今日没有长期未响应（跨多日）的遗留 Issue/PR。当前最需要关注的是两条已就绪但未合并的 PR 积压——既是技术债，也是维护者响应速度的体现：

| 类型 | 编号 | 标题 | 等待时长 | 建议 |
|------|------|------|----------|------|
| PR（待合并） | [#985](https://github.com/nullclaw/nullclaw/pull/985) | fix(runtime): give the agent turn path a 16 MiB stack | 创建于 2026-08-05，至今 ≥1 天 | 尽快 review，涉及核心运行时路径，建议同时补充单元测试覆盖栈边界场景 |
| PR（待合并） | [#984](https://github.com/nullclaw/nullclaw/pull/984) | fix(channels): let poll failures age out a dead polling thread | 创建于 2026-08-05，至今 ≥1 天 | 建议安排跨渠道测试（Telegram/Matrix），验证空闲重建机制在真实网关环境下的表现 |

**长期观察项**：#976 与 #972 两个 Issue 作为这两条 PR 的"前置触发点"，在修复合并并发布后应关闭，否则会造成"已修复但 Issue 仍开放"的社区认知偏差。

---

## 项目健康度总评

| 维度 | 评分（5★） | 说明 |
|------|------------|------|
| 代码活动 | ★★☆☆☆ | 1 天仅 2 条新 PR，无合并动作 |
| 维护响应 | ★★★☆☆ | 问题有修复方案，但 24h 未合并 |
| Issue 管理 | ★★★☆☆ | 无新增、无活跃，处于等待状态 |
| 社区参与 | ★☆☆☆☆ | 0 评论、0 点赞、0 新 Issue |
| 稳定性趋势 | ★★★★☆ | 两个明确 bug 均已定位根因并有 PR |

**结论**：NullClaw 正处于开发节奏放缓期，但拥有清晰的技术修复规划。下一步关键观察点是这两条 PR 能否在 48 小时内被合并，以及是否有 micro-release 随之发布。若合并顺利，项目将在渠道可靠性上收获重大提升。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-06

## 1. 今日速览

过去 24 小时项目活跃度极高：共 44 条 Issue 更新（新开/活跃 34，关闭 10）、50 条 PR 更新（待合并 33，已合并/关闭 17），并伴随 1.1.0-rc.1 候选版本发布。整体项目处于 **v1.1.0 发布前的重要冲刺期**：一方面技能系统重构 PR 栈、显式通道投递工具、Web Debug Inspector 等功能持续推进；另一方面 QA 团队（joe-rlo）密集提交了多起 P1/P2 级 agent 状态感知与 MCP 接入问题，显示生态扩展后稳定性与模型行为准确性成为当前主要风险点。多个历史 Dogfooding/QA Epic 关闭，说明项目整体在向收敛方向前进。

---

## 2. 版本发布

### ironclaw-v1.1.0-rc.1（2026-08-03）
[查看 Release](https://github.com/nearai/ironclaw/releases)

- **定位**：1.0.0 以来首个候选版本，核心主题是 **"extension reach"（生态触达）**。
- **主要亮点**：
  - 支持注册任意托管的 MCP 服务器；
  - 支持通过 IronHub 深度链接安装扩展；
  - 引入跨渠道的持久化文件附件；
  - 新增 Slack `/ironclaw` 斜杠命令；
  - 对失败场景的可读性做了系统性改进（release notes 在 "making failures legibl…" 处截断）。
- **破坏性变更 / 迁移注意事项**：当前提供的 release notes 不完整，未披露破坏性变更或迁移说明，建议维护者补齐后另行公告。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR
- **[#7261 fix(ci): resolve release canary temp path](https://github.com/nearai/ironclaw/pull/7261)** — 修复 tag-only 发布流程中 canary 证据目录路径解析导致的零任务失败问题，并扩展了工作流 sabatoge 契约。
- **[#7196 chore(deps): bump the wasm group with 3 updates](https://github.com/nearai/ironclaw/pull/7196)** — wasmtime-wasi / wit-component / wit-parser 依赖更新。

### 随 Issues 关闭体现的里程碑
- **[#741 feat: add Bedrock streaming support via converse_stream()](https://github.com/nearai/ironclaw/issues/741)** — 已关闭，Bedrock 流式支持落地。
- **[#7053 Close Critical E2E Coverage Gaps](https://github.com/nearai/ironclaw/issues/7053)** 与 **[#4632 Epic: Close remaining Reborn WebUI end-to-end gaps](https://github.com/nearai/ironclaw/issues/4632)** — 关键 E2E 覆盖缺口补齐，覆盖 first-run 引导、项目生命周期/成员隔离、自动化暂停/恢复/删除三条主线。
- **[#6394](https://github.com/nearai/ironclaw/issues/6394) / [#6892](https://github.com/nearai/ironclaw/issues/6892) Dogfooding & QA Epic** — 两周 QA 周期正式关闭。

### 正在推进中的核心 PR（未合并，信号较强）
- **[#7263 Program closure: the defect train, the await-edge ruling, and the WS12 100% gate](https://github.com/nearai/ironclaw/pull/7263)** — Reborn 目标架构重构收官，所有 WS12 行项已逐项销号。
- **[#7264 Guidance layer: family AGENTS.md + crate README + stale sweep](https://github.com/nearai/ironclaw/pull/7264)** — 文档层体系补齐（stacked on #7263）。
- **[#7157 feat: explicit channel delivery tool — two lanes, notification channels](https://github.com/nearai/ironclaw/pull/7157)** — 显式通道投递工具，实现双车道模型（会话生命周期 + 通知频道），并删除旧的投递启发式逻辑。
- **技能系统重构栈**：[#6745](https://github.com/nearai/ironclaw/pull/6745)（技能可选/可装/完整）→ [#6938](https://github.com/nearai/ironclaw/pull/6938)（模型选择技能而非关键词打分）→ [#7171](https://github.com/nearai/ironclaw/pull/7171)（DB 树 + 技能命令可执行），对应 Epic #6941。
- **[#7230 feat(inspector): add bounded diagnostic session storage](https://github.com/nearai/ironclaw/pull/7230)** — 为 Web Debug Inspector 提供进程内诊断存储与 LRU 淘汰。

整体看，项目在"架构收尾 + 技能/通道核心能力 + 可观测性基建"三条线上并行推进，1.1.0 功能面基本成型。

---

## 4. 社区热点

- **[#3036 [EPIC] Configuration-as-Code for IronClaw Reborn: tenant blueprints and use-case harnesses](https://github.com/nearai/ironclaw/issues/3036)** — 评论 7，👍 1，热度最高。自 4 月创建至今持续活跃，诉求是让两类运维人员用声明式配置替代手改 `.env` / workspace docs / settings JSON / 运行时 flags，且当前缺少 schema、diff、审计追踪。这一需求指向平台化/多租户运维的深层痛点。
- **[#7194 feat(outbound): make an admin-allowed shared channel addressable as an outbound delivery target](https://github.com/nearai/ironclaw/issues/7194)** — 评论 3。Agent 能枚举 Slack 频道并 `send_message`，却无法将其设为 outbound 投递目标——说明用户希望 agent 的最终回复能「点对点」路由到共享频道，而非仅限会话内回复。
- **[#6257 [bug] "Invalid value (attachments.mime_type)" error when sending/generating PDF files](https://github.com/nearai/ironclaw/issues/6257)** — 评论 2，由外部用户 Michael Kelly 在 Slack 反馈渠道上报，PDF 附件发送/生成直接报错，已持续 2 周多仍未修复，社区关注度较高。

背后共性是：**社区和用户开始把 IronClaw 当作真正的生产级投放/协作基础设施使用**，而不仅是聊天玩具——集中体现在投递语义、附件可靠性和声明式配置上。

---

## 5. Bug 与稳定性

按严重程度排列（全部来自 QA 实例 ironclaw-qa-testing-libsql.up.railway.app）：

| 级别 | Issue | 问题 | 是否有 fix PR |
|---|---|---|---|
| P1 | [#7247 Agent falsely claims GitHub is already connected](https://github.com/nearai/ironclaw/issues/7247) | Agent 未验证真实认证状态即声称 GitHub 已连接可用 | 无 |
| P1 | [#7246 Agent hallucinates automation status instead of checking actual state](https://github.com/nearai/ironclaw/issues/7246) | 自动化页面显示 "No automations yet"，Agent 却虚构"正在运行并发送到 Telegram" | 无 |
| P2 | [#7249 Slack DM execution result is delivered to Telegram](https://github.com/nearai/ironclaw/issues/7249) | Slack 触发的运行把执行摘要投递到 Telegram，且带 Slack 专属元数据 | 无 |
| P2 | [#7251 Agent guesses MCP authentication type instead of discovering or initiating auth](https://github.com/nearai/ironclaw/issues/7251) | Agent 不探测/不发起认证，反而让用户猜测认证方式 | 无 |
| P2 | [#7250 DeepWiki MCP reports misleading authentication guidance for network failures](https://github.com/nearai/ironclaw/issues/7250) | 网络错误被 Agent 推测为认证/URL/不可达，而非报告真实网络失败 | 无 |
| P2 | [#7248 Invalid custom MCP endpoint is accepted, then causes the model run to fail](https://github.com/nearai/ironclaw/issues/7248) | 无效 MCP 端点被当作安装成功，工具发现失败导致运行崩溃 | 无 |
| 常规 | [#6257 PDF attachments mime_type invalid](https://github.com/nearai/ironclaw/issues/6257) | PDF 附件 mime_type 校验失败 | 无 |
| 常规 | [#7254 IronClaw cannot access files attached to Slack feedback threads](https://github.com/nearai/ironclaw/issues/7254) | 无法下载/读取 Slack 反馈线程中的附件 | 无 |
| 常规 | [#7209 fix(ci): regression gate cannot see node:assert style](https://github.com/nearai/ironclaw/issues/7209) | CI 回归门禁无法识别 99% 前端测试使用的断言风格，误杀合规 PR | 无 |
| 流程 | [#7231 Review comments saying "verdict: APPROVE" never submit a real GitHub approval](https://github.com/nearai/ironclaw/issues/7231) | 文本 APPROVE 不触发真实 GitHub approval，PR 被卡在合并队列外 | 无 |

**稳定性判断**：QA 集中反馈的 P1 问题根因一致——**Agent 在外部状态感知（GitHub 连接、自动化状态）上存在幻觉**，需要 host 层强制注入真实状态而非依赖模型记忆。MCP 接入验真也是明显缺口（#7248/#7250/#7251）。这些目前都无 direct fix PR，但 [#7028](https://github.com/nearai/ironclaw/pull/7028)（投递恢复 CAS 保护）和 [#7029](https://github.com/nearai/ironclaw/pull/7029)（durable delivery claim）从旁加固了投递链路可靠性。

---

## 6. 功能请求与路线图信号

**大概率进入 v1.1.0 的既有方向**（已有对应 PR/Epic 标注）：
- **IronHub 集成**：[#6731 Epic: Integrate IronHub into IronClaw](https://github.com/nearai/ironclaw/issues/6731)（v1.1.0）——1.1.0-rc.1 已包含 IronHub 深链安装，该 Epic 仍在跟进。
- **模型主导的技能系统**：[#6941 Epic: skills the model can self-create](https://github.com/nearai/ironclaw/issues/6941)（v1.1.0）——技能选择权从 host 关键字打分移交模型，配套 PR #6938/#6745/#7171 均已 XL 级提交。

**新方向 / 路线图信号**：
- **[#7218 Epic: Web Debug Inspector](https://github.com/nearai/ironclaw/issues/7218)** — operator-only 调试器，通过 `?debug=true` 查看 prompt 构建、实时 agent 活动、模型用量与工具执行，配套存储 PR #7230 已提交，属可观测性投资。
- **[#7038 Epic: Storybook + AI-first Design System](https://github.com/nearai/ironclaw/issues/7038)**（suggested_P0）— 设计系统提案包已就绪（PR #7257 / #6918），但 Issue 本身 0 评论，尚未见维护者表态。
- **[#6578 Epic: Admin-Managed Agents as UserId Subjects](https://github.com/nearai/ironclaw/issues/6578)** — 非人类主体身份体系，面向租户管理员创建自动化/集成账号。
- **[#7203 Skill files reach a process by copying, not by mounting](https://github.com/nearai/ironclaw/issues/7203)** — 把虚拟文件系统暴露为真实 mount，使技能脚本可执行（从 #7171 backlog 拆分而来）。
- **[#7265 Design proposal: type-level way for ChannelAdapter to prove "vendor never received this"](https://github.com/nearai/ironclaw/issues/7265)** — 用类型系统证明投递从未到达供应商侧，follow-up PR #7029。

---

## 7. 用户反馈摘要

- **PDF 附件不可用（付费用户直接反馈）**：[#6257](https://github.com/nearai/ironclaw/issues/6257) 中 Michael Kelly 在 #x-ai-product-feedback 渠道报告发送/生成 PDF 直接报错，已 18 天未修复，可能影响文档类工作流。
- **Slack 反馈链路断裂**：[#7254](https://github.com/nearai/ironclaw/issues/7254) 用户按要求把复现报告作为附件贴进 Slack 线程，IronClaw 却读不到——"triage workflow 要求共享文件，但工具自己拿不到文件"，体验割裂。
- **对 Agent 状态感知的不信任（QA 核心负面反馈）**：joe-rlo 的系列报告（#7246/#7247/#7248/#7250/#7251）集中在 **agent 在关键事实（GitHub 连接是否建立、自动化是否在跑、MCP 认证方式和有效性）上表现得过于自信且错误**。用户期望是：不知道就说不知道，或者主动去探测/发起认证，而不是编造状态或让用户猜。
- **合流程摩擦**：theredspoon 在 [#7231](https://github.com/nearai/ironclaw/issues/7231) 指出评审文本写 "APPROVE" 却从未提交真实 approval，导致 PR 无法进入合并队列——对"看着 approved 实际 blocked"的流程提出了改进诉求。

总体印象：用户在真实使用中开始依赖 IronClaw 做跨渠道（Slack/Telegram/WebUI）交付和文件交换，但当前在这条主链路上的稳定性和状态真实性尚未达到生产级期望。

---

## 8. 待处理积压

### 长期未关闭/未响应的重要 Issue
- **[#3036 Config-as-Code Epic](https://github.com/nearai/ironclaw/issues/3036)** — 创建于 04-28，持续获得更新和讨论（7 评论），是租户级声明式配置的基础需求，建议维护者明确版本归属。
- **[#6257 PDF mime_type bug](https://github.com/nearai/ironclaw/issues/6257)** — 自 07-19 上报至今无 fix，外部用户直接受影响，建议尽快确认是否为类型映射/校验的白名单缺失问题。
- **[#6578 Admin-Managed Agents Epic](https://github.com/nearai/ironclaw/issues/6578)** — 07-23 创建，14 天仅 1 条评论，未看到维护者评估表态。
- **[#7038 Storybook + Design System Epic（suggested_P0）](https://github.com/nearai/ironclaw/issues/7038)** — P0 级建议却 0 评论、0 回复，提案包已较完整，需至少确认排期与否。

### 长期未合并的 PR
- **[#5101 ci: reuse cargo-component installer in live canary](https://github.com/nearai/ironclaw/pull/5101)** — 创建于 06-20，已积压 47 天，属 CI 可靠性改进，长期未合入可能有阻塞原因，建议 triage。

### 值得关注的流程问题
- **[#7231 APPROVE 文本不产生真实 approval](https://github.com/nearai/ironclaw/issues/7231)** — 刚创建即被标记，直接卡合并流程，建议优先修复或以机器人/自动化方式校验 approval 真实性。

---

**整体健康度评估**：功能推进速度可观（release candidate 出炉 + 多 Epic 关闭），但 QA 反馈的 agent 状态幻觉率偏高，且部分用户可见 bug（PDF、Slack 附件）滞留超过两周。建议在 v1.1.0 正式发布前，优先解决 MCP 接入验真与外部状态注入两处系统性问题。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-06

> 数据窗口：2026-08-05 至 2026-08-06 | 来源：GitHub（netease-youdao/LobsterAI）

---

## 1. 今日速览

过去 24 小时项目维持高活跃度：新增/活跃 Issues 3 条，PR 更新 11 条（其中 10 条已合并/关闭），并发布了 2026.8.5 版。合并的 PR 集中在窗口生命周期防挂起、OpenClaw 网关锁竞态修复、标题栏对话搜索等功能与稳定性改进；新提交的 Issue 则指向系统提示词重复注入与技能开关静默失效两个配置一致性问题，反映用户对「可持久自定义系统提示词」的诉求开始浮出水面。一个长期搁置的 NIM 群名 Bug（#1200）今日被再次评论，对应的修复 PR（#1201）仍在待合并队列。整体来看，项目迭代节奏稳定，维护者响应及时，健康度良好。

---

## 2. 版本发布

**LobsterAI 2026.8.5**（2026-08-05 发布）

包含以下主要变更：

- **活动中心**：新增原生每日签到体验（[PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408)，作者 btc69m979y-dotcom）
- **企业版**：隔离账号级认证与服务流（[PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)，作者 liuzhq1986）
- **样式**：若干样式调整（release 中未给出具体内容）

**破坏性变更 / 迁移注意**：版本说明中未标注 Breaking Changes。但「隔离账号级认证与服务流」属于企业版架构层面的调整，若你使用多账号或企业 SSO 集成，建议关注自身账号体系是否与新的认证隔离逻辑兼容。

---

## 3. 项目进展

今日合并/关闭的 PR 共 10 条，按价值可归为四类：

**稳定性加固（main / openclaw）**
- [PR #2437](https://github.com/netease-youdao/LobsterAI/pull/2437)：为 OpenAI-compat 代理和 HTML 预览服务器关闭流程增加 drain timer 与硬性截止时间，解决 keep-alive 连接导致应用退出卡死的问题；同时主窗口激活改为等待首次渲染完成，避免 focus/二次实例的窗口显示竞态。
- [PR #2436](https://github.com/netease-youdao/LobsterAI/pull/2436)：修复两个独立竞态导致的 OpenClaw 单实例锁文件被污染，防止网关每次重启失败后最多卡 30 秒。

**新功能（cowork）**
- [PR #2435](https://github.com/netease-youdao/LobsterAI/pull/2435)：在标题栏新增对话搜索按钮，复用侧边栏搜索逻辑，并优化了响应式样式和查询感知导航，属于副驾（cowork）体验的小幅补强。

**活动/引导（renderer / activity）**
- [PR #2439](https://github.com/netease-youdao/LobsterAI/pull/2439) 与 [PR #2438](https://github.com/netease-youdao/LobsterAI/pull/2438)：替换启动页 credit 活动海报，新增右上角关闭图标，均为纯资源替换，无行为变更。

**其他**
- [PR #2431](https://github.com/netease-youdao/LobsterAI/pull/2431) 与 [PR #2434](https://github.com/netease-youdao/LobsterAI/pull/2434)：由 liuzhq1986 提交的 rlog 相关修复，PR 标题未提供摘要，暂无法评估具体内容。
- 依赖更新：[cross-env 7.0.3 → 10.1.0](https://github.com/netease-youdao/LobsterAI/pull/1279)、[react-dom 18.3.1 → 19.2.4](https://github.com/netease-youdao/LobsterAI/pull/1280)、[vite 5.4.21 → 8.0.9](https://github.com/netease-youdao/LobsterAI/pull/1281)，均为 dependabot 发起并已关闭。

**待合并**：NIM 群名修复 PR（[#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)）仍处于 Open 状态，等待维护者 review/merge（详见下文积压部分）。

整体来看，项目在桌面端稳定性（退出流程、网关锁、窗口调度）和副驾可用性上均有实质推进；依赖的大版本更新（React 19、Vite 8）也已安全合入，技术栈保持现代化。

---

## 4. 社区热点

今日讨论热度集中在以下条目：

- [Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200)：**NIM 超大群 teamTypeNum 硬编码错误**。这条 4 月 1 日创建的老 Issue 今天被重新评论（评论数 1），且对应的修复 PR #1201 依然挂起。虽然绝对评论量不高，但它作为长期未闭环的 Bug，被社区再次关注，说明用户仍在受群名显示异常影响。
- [Issue #2441](https://github.com/netease-youdao/LobsterAI/issues/2441) 与 [Issue #2440](https://github.com/netease-youdao/LobsterAI/issues/2440)：同一作者 fujingzhai 今日连开两条，分别指出「技能开关按目录名写入导致静默失效」和「桌面端系统提示词重复注入」。虽然暂无人评论，但问题描述详实（含复现路径、版本号、轨迹文件证据），指向一个共同的深层诉求：**用户希望拥有持久、可控、精简的系统提示词入口**。这类配置一致性问题容易引发社区共鸣，值得重点关注。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复状态 |
|--------|-------|------|----------|
| 高 | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 技能开关写入目录名而 OpenClaw 按 frontmatter name 匹配，导致开关静默失效；且 openclaw.json 被整文件覆盖，用户无持久精简入口 | 无 fix PR，设计层面缺口 |
| 高 | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 桌面端每个新会话注入的 `[LobsterAI system instructions]` 块有 78% 内容与 AGENTS.md 托管区逐字重复，同一套指令让模型读两遍，浪费 token 且可能干扰模型行为 | 无 fix PR |
| 中 | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM 超大群/普通群消息中 teamTypeNum 硬编码与 V2NIM SDK 枚举不一致，导致 @机器人时群名显示为原始 ID | 已有修复 PR [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)，待合并 |

另有两个稳定性修复今日已合入：窗口退出防挂死（[#2437](https://github.com/netease-youdao/LobsterAI/pull/2437)）与网关锁污染（[#2436](https://github.com/netease-youdao/LobsterAI/pull/2436)），均属于对用户可感知故障的直接修复。

---

## 6. 功能请求与路线图信号

- **标题栏对话搜索**（[PR #2435](https://github.com/netease-youdao/LobsterAI/pull/2435)）今日合入，属于副驾体验的增量功能，预计随下一版本（2026.8.6+）面向用户。
- **原生每日签到**（[PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408)）随 2026.8.5 发布，信号：产品开始重视用户活跃与留存类功能。
- **企业级账号隔离**（[PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)）随 2026.8.5 发布，信号：企业版多账号场景进入架构升级阶段。
- Issue [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) 中提出的「用户无持久精简系统提示词的入口」虽以 Bug 形式上报，但本质是一个**功能缺口**。鉴于作者给出了具体的设计分析和复现路径，且与 AGENTS.md 托管机制直接相关，建议维护者评估是否在后续版本中提供类似「用户提示词覆盖/精简」的官方入口——这也是当前 AI 助手类产品的常见需求。

---

## 7. 用户反馈摘要

- 用户 fujingzhai 在 [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) 和 [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) 中给出了非常具体的数据（如 4,425 字符重复、目录名 vs frontmatter name 不一致），反映出用户对**配置系统透明度和可控性**有较高期待，并且愿意花费时间做详细的实测和分析。这类反馈对项目长期质量有很高价值。
- 从 [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) 的评论动作判断，社区用户仍然希望这个群名显示 Bug 能尽快修复。该 Issue 已存在 4 个月且修复 PR 只改一行，迟迟未合并可能让用户对维护响应速度产生疑虑。

---

## 8. 待处理积压

| 类型 | 编号 | 创建时间 | 说明 | 建议 |
|------|------|----------|------|------|
| Bug + Fix PR | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) / [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) | 2026-04-01 | NIM 群名获取错误，修复 PR 仅一行改动（对齐 SDK 枚举映射），已存活 4 个月 | 尽快 review 并合并 #1201，关闭这条 stale Issue，减少社区顾虑 |
| Bug（设计缺口） | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 2026-08-05 | 技能开关配置项静默失效，且 openclaw.json 缺乏用户持久精简入口 | 作为配置系统一致性的重要反馈，建议纳入下一迭代规划，至少给出官方回应 |

---

**总体结论**：LobsterAI 过去 24 小时保持高迭代速度，稳定性修复与功能改进均衡推进，维护者对 PR 的处理效率较高（10/11 已合并）。主要风险点在于两个**配置一致性问题**（#2440/#2441）尚未进入修复流程，以及一个 4 个月的陈旧修复 PR（#1201）迟迟未合并。建议维护者优先处理上述两项，以维持社区信任与项目健康度。

*日报生成时间：2026-08-06 | 数据来源：GitHub Public API*

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

# CoPaw 项目日报 · 2026-08-06

## 1. 今日速览

- 过去 24 小时项目活跃度较高：22 条 Issue 更新（新开/活跃 14 条，关闭 8 条），50 条 PR 更新（合并/关闭 22 条，待合并 28 条），无新版本发布。
- 稳定性问题构成今日主线：MCP 工具周期性失效（[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)）、长会话工具调用 400 错误（[#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726)）、SSE 流内 503 未重试（[#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708)）等生产可用性问题集中浮现，且已有多条对应修复 PR 进入队列。
- 功能推进同步进行：LLM fallback 配置 UI（[#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598)）、Windows 桌面修复（[#6669](https://github.com/agentscope-ai/QwenPaw/pull/6669)）、Creator 功能批次（[#6738](https://github.com/agentscope-ai/QwenPaw/pull/6738)）等关键 PR 关闭；模型路由大 PR（[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)）与项目目录统一（[#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504)）仍在积累中。
- 社区参与度上升：用户 rerbin 一日内提交 3 条桌面端 UX 建议（[#6734](https://github.com/agentscope-ai/QwenPaw/issues/6734)、[#6736](https://github.com/agentscope-ai/QwenPaw/issues/6736)、[#6737](https://github.com/agentscope-ai/QwenPaw/issues/6737)），其中 #6736 当日关闭；另新增 2 条首次贡献者 PR（[#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723)、[#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725)）。
- 整体健康度判断：中等偏健康。Bug 报告密度较高，但多数已有对应修复 PR 或正在排查；桌面端 UI/UX 的反馈闭环速度尤其快。

## 2. 版本发布

无。

---

## 3. 项目进展

过去 24 小时共有 **22 个 PR 被合并/关闭**。在可见的重点 PR 中，以下几条值得关注：

- **#5598 feat(console): LLM fallback 配置 UI**（[链接](https://github.com/agentscope-ai/QwenPaw/pull/5598)）—— 自 6 月 29 日起的长线 PR 今日关闭。为 Agent 与全局模型页新增 LLM 回退候选列表、开关、排序等配置入口，提升模型可用性。
- **#6669 fix(desktop): 稳定 Chrome 原生消息传递与 Windows 恢复锁定**（[链接](https://github.com/agentscope-ai/QwenPaw/pull/6669)）—— 修复两个 Windows 端启动失败问题：Chrome 扩展 Native Messaging 通信异常，以及恢复流程中的文件锁语义问题。
- **#6738 feat(creator): grounding search、时间线工作台、YOLO reviews、i18n、ASR、可靠性加固**（[链接](https://github.com/agentscope-ai/QwenPaw/pull/6738)）—— Creator（PawApp）功能批次今日关闭，随后由同题的 [PR #6740](https://github.com/agentscope-ai/QwenPaw/pull/6740) 接管继续推进。
- **#6670 docs(checkpoint): 命令页集成 checkpoint 使用文档**（[链接](https://github.com/agentscope-ai/QwenPaw/pull/6670)）—— 将 checkpoint 的自动快照、时间线、恢复、GC、配置等说明收入 Magic Commands 页，完善文档体系。
- **#6701 fix(website): 官网新增博客**（[链接](https://github.com/agentscope-ai/QwenPaw/pull/6701)）—— 填补社区站点内容建设空白。

此外，以下开放 PR 正在推进，值得持续跟踪：**#6714**（SSE 错误重试，ready-for-human-review）、**#6721**（reasoning-content 重试）、**#6729**（集成测试修复）、**#6723/#6725**（首次贡献者 PR）。项目整体在 **稳定性修复 + 模型/路由层架构演进 + Windows 体验修复 + 文档建设** 四个方向并行推进。

---

## 4. 社区热点

今日讨论热度最高的条目如下（按评论活跃度排序，全部 Issue 👍 数暂为 0）：

1. **#6436 [enhancement] 自动模型路由**（[链接](https://github.com/agentscope-ai/QwenPaw/issues/6436)）—— 3 条评论，自 7 月 24 日起持续讨论，8 月 5 日仍有更新。诉求：按需自动路由请求到最合适的模型（简单对话走本地小模型、图片走视觉模型、复杂推理走大模型），而非将每个 Agent 固定绑定单一模型。与 [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)（统一 provider 发现/模型元数据/路由/Agent 控制）构成强呼应，是明确的路线图级信号。
2. **#6732 [bug] MCP 工具规律性失效**（[链接](https://github.com/agentscope-ai/QwenPaw/issues/6732)）—— 8 月 6 日新开，2 条评论。用户报告 Docker 容器内 MCP 工具每隔数小时或一晚后失效，自动调用时报“未注册或不存在”，重启容器恢复。该问题直接冲击自动化工作流，社区共鸣度预计较高。
3. **#6726 [bug] 长控制台会话超量工具调用后 400**（[链接](https://github.com/agentscope-ai/QwenPaw/issues/6726)）—— 2 条评论，8 月 6 日更新。长会话积累 20–30+ 个 `tool_call`/`tool_result` 对后，后端报 “Messages with role 'tool' must be a response to a preceding message with 'tool_calls'”，影响高密度工具调用场景。
4. **#6728 [enhancement] 微信审批支持中文 approve/deny**（[链接](https://github.com/agentscope-ai/QwenPaw/issues/6728)）—— 1 条评论，8 月 6 日更新。要求微信渠道审批交互使用“批准/拒绝”等中文标签，是 #6695 修复后的本地化延续。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | Issue / PR | 描述 | 关联修复 |
|---|---|---|---|
| 🔴 严重 | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP 工具周期性失效，须重启 Docker 容器恢复 | ❌ 尚无 fix PR |
| 🔴 严重 | [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | SSE 流内 503（HTTP 200 但消息体内带 503）未被捕获，请求直接失败 | ✅ [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714)（ready-for-human-review） |
| 🔴 严重 | [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | thinking-mode 上游 + 含工具调用的会话历史 → 400 `reasoning_content` 转发失败 | ✅ [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) |
| 🟠 高 | [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | 长会话 20–30+ 工具调用对后 400 tool/tool_calls 错误 | ⚠️ 疑与 #6707 同源，可观察 #6721 的进展 |
| 🟠 高 | [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | `execute_shell_command` 在模型传入 `sandbox_config` 时崩溃：`replace() should be called on dataclass instances` | ❌ 尚无 fix PR |
| 🟡 中 | [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | 后台 fork 子 Agent 在工作树 finalization 失败时误报 completed | ✅ [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725)（first-time-contributor） |
| 🟡 中 | [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | `nohup`/`&` 启动的子进程导致 Agent 永不 idle（DingTalk channel） | ❌ 尚无 fix PR |
| ⚪ 低 | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | `cron pause/resume` 不持久化 enabled 状态，重启后丢失 | ✅ 已关闭，疑似已修复 |

**测试/CI 相关**：

- [#6716](https://github.com/agentscope-ai/QwenPaw/issues/6716) 已关闭（invalid）：`test_auto_update_persists_targets` 确定性失败的 KeyError 被判定为无效；但同作者的 [PR #6729](https://github.com/agentscope-ai/QwenPaw/pull/6729) 已改为通过 pool detail 端点验证 auto-update targets。
- [PR #6727](https://github.com/agentscope-ai/QwenPaw/pull/6727) 修复 Windows 上因路径分隔符导致 66 个集成测试被静默跳过的问题，将显著提升 Windows 端 CI 置信度。

---

## 6. 功能请求与路线图信号

| 功能请求 | 信号强度 | 对应 / 潜在 PR |
|---|---|---|
| 自动模型路由 / 统一 provider 发现（[#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436)） | 🟢 强 | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)（开放中，自 7/21） |
| MCP 工具调用超时可配置（[#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724)） | 🟡 中 | 无对应 PR，但与 #6732 的 MCP 稳定性诉求直接相关，预计会进入 2.0.x 补丁 |
| 微信渠道审批中文 labels（[#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728)） | 🟡 中 | 需在 #6695 修复基础上延展 |
| 实时 artifact canvas — 侧栏渲染 HTML（[#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730)） | 🟡 中 | 无对应 PR，属于新的产品概念 |
| 桌面端 UX：取消会话标题 / “新任务”命名 / 历史标题可读性（[#6736](https://github.com/agentscope-ai/QwenPaw/issues/6736)、[#6734](https://github.com/agentscope-ai/QwenPaw/issues/6734)、[#6737](https://github.com/agentscope-ai/QwenPaw/issues/6737)） | 🟢 强 | 同类 UX issue（[#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454)、[#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587)）已快速关闭，预计会被优先处理 |
| Agent 级 token 统计（[#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392)） | ⚪ 已关闭 | 已关闭但功能诉求仍在，建议维护者评估是否进入路线图 |

---

## 7. 用户反馈摘要

- **MCP 工具可靠性是当前最大痛点**：[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) 用户表示“每隔一段时间 MCP 工具失效，必须重启 Docker 容器才恢复”，直接阻断自动化流程；叠加 [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724)（超时不可配置）和 [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731)（sandbox_config 崩溃），说明工具层健壮性仍有较大改进空间。
- **长会话/工具密集场景稳定性影响真实工作流**：[#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) 中超 20–30 对工具调用即 400，限制复杂多步任务执行；[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) 中 `nohup`/`&` 是真实部署运维中的常见操作，Agent 卡死会导致线上任务悬挂。
- **中文桌面用户对 UI 细节敏感度高**：rerbin 连续提交多条 UX 反馈——应用名带 “Desktop” 多此一举（[#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587)，已关闭）、复制只能 Ctrl+C 太痛苦（[#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454)，已关闭）、多模态提示“太粗暴碍眼”（[#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452)，已关闭）——“会话标题无实际价值”（[#6736](https://github.com/agentscope-ai/QwenPaw/issues/6736)）、“新建聊天改称新任务更合适”（[#6734](https://github.com/agentscope-ai/QwenPaw/issues/6734)）等仍开放，反映 Windows 客户端 2.1 beta 的体验打磨压力不小。
- **本地化需求仍在上升**：除桌面 UI 外，微信渠道的审批操作也要求中文标签（[#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728)），中国用户对全链路中文体验的预期在提高。
- **正面信号**：多个 UI/UX issue 在数日至两周内被关闭，且 #6734 等新反馈当天即得到维护者响应；说明桌面端体验修复的迭代速度快于功能开发节奏。

---

## 8. 待处理积压

以下 Issue/PR 已有较长时间未获得明确推进，建议维护者优先关注：

| 类型 | 编号 | 标题 | 创建时间 | 持续天数 | 备注 |
|---|---|---|---|---|---|
| Issue | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | 自动模型路由 | 2026-07-24 | 13 天 | 3 条评论，仍开放；已有 #6302 大 PR 关联 |
| Issue | [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | nohup 命令执行卡住 | 2026-07-26 | 11 天 | 无 fix PR，影响 DingTalk 用户 |
| PR | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 统一 provider 发现/模型元数据/路由/Agent 控制 | 2026-07-21 | 16 天 | 大型功能 PR，需 review 资源 |
| PR | [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) | 统一项目目录并加固文件工作区 | 2026-07-27 | 10 天 | 大 PR，涉及 Agent 运行时上下文 |
| PR | [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) | 用户上下文透明穿透（Chat API → Agent → Tool → MCP → SKILL CLI） | 2026-07-28 | 9 天 | 功能性强，设计影响面广 |

**额外提醒**：两条 first-time-contributor PR（[#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723)、[#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725)）正在等待审查，建议及时回应以激励新贡献者持续参与。当前 #6723 修复的能力缓存永不过期问题，与 #6707/#6708 的稳定性议题同属一类技术债，具有合并价值。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-06

## 1. 今日速览

过去 24 小时，ZeroClaw 仓库保持了非常高的活跃度：Issues 与 PR 更新均为 50 条，其中新开/活跃 Issue 40 个、关闭 10 个，新开 PR 49 个、关闭/合并 1 个。核心活动集中在 **RFC 治理与评审**——评论数最高的 5 个 Issue 全部是需要维护者评审的 RFC（如 #6808、#8303、#8603、#7155、#7141），社区讨论意愿很强但不少提案已等待数周甚至数月，决策瓶颈是当前项目健康度的最主要风险。代码合并方面今日较少（1 个 PR 关闭），但有多个重量级 PR 处于开放状态（A2A 客户端、工具调用解析器、SSRF 加固等），显示下一波功能落地正在密集准备中。此外，今日新开的一系列 SOP（标准操作程序）相关 Bug（#9780、#9779）揭示了文档与实现之间的不一致，值得维护者重视。

---

## 2. 版本发布

**今日无新版本发布。**

不过路线图层面有明确信号：多个 RFC 与 tracker 以 **v0.9.0** 为里程碑目标，包括 #7432（v0.9.0 auth/security/gateway 队列）、#6808（发布流程与 governance）、#8692（维护者决策队列）等。目前仓库处于 `0.8.x`（0.8.3 为最新引用版本）向 `0.9.0` 过渡的阶段，破坏性变更预计集中在该版本落地。

---

## 3. 项目进展

今日合并/关闭的 PR 仅 1 个，但意义较大：

- **[#9750](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) fix(service): bound launcher-owned daemon logs（已关闭）**
  将不受限制的守护进程日志重定向改为共享服务监督器，将每个 launcher 持有的捕获文件限制在 8 MiB 以内并保留近期输出。该 PR 被关闭后，同一目标的替代方案 **[#9773](https://github.com/zeroclaw-labs/zeroclaw/pull/9773)**（针对 macOS launchd 的日志上限）仍处于开放状态，说明维护者可能调整了实现路径，改为分平台逐个处理。

另外有 10 个 Issue 今日关闭，表明以下功能/修复已完成并合入：

- **[#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)** — WhatsApp Web 中 LID 联系人的 `allowed-numbers` 绕过问题（消息静默丢弃，S2）已关闭
- **[#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335)** — 支持 OpenAI 兼容端点返回 data-wrapped 的 chat completion 响应
- **[#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652)** — `config set` 拒绝带连字符的 cron key，而 `config list/get` 可正常读取的不一致 bug
- **[#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462)** — CI 中从未执行的 `plugins-wasmtime` 单元测试问题已修复
- **[#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467)** — ZeroCode 字符串编辑支持光标导航

综合来看，今天代码合并不多，但关闭的 Issue 类型覆盖了 bug 修复、CI 可靠性、配置一致性和功能完成，项目在多条线上稳步推进。

---

## 4. 社区热点

今日讨论最活跃的 Issue 集中在 **RFC 评审与架构设计**，以下是评论数最高的话题：

| Issue | 标题 | 评论数 | 核心诉求 |
|---|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 18 | 优化项目内工作流路由与标签治理，减少维护者负担，已推进至 Rev. 24，但仍处于 "Ratification deferred" 状态 |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — bounded foreground Matrix work | 18 | 需要一种可持久化的有界用户目标机制，跨多个 agent turn 执行任务（👍 1） |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | 16 | 使 ZeroClaw 适配 OpenAI Chat Completions 协议，从而接入 Open WebUI、LobeChat、Aider、LangChain 等工具 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Per-execution confirmation tier for high-risk shell commands | 16 | 为高危 shell 命令引入 allow/ask/deny 三类策略，类似 Claude Code 的命令策略 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC: Pluggable inbound authentication and canonical principals | 12 | 可插拔的入站认证体系，统一身份主体（已更新至 Rev. 8） |

**背后诉求分析：** 这五个话题共同反映了社区对 ZeroClaw 从"可用"走向"生产可用"的期待——Chat Completions 兼容层意味着用户希望使用既有的 AI 客户端生态；Goal mode 和 shell 策略解决的是真实使用中的自主性与安全边界问题；认证插拔则是企业级部署的基础。值得注意的是，这些 RFC 全部标记了 **`needs-maintainer-review`**，说明社区的推进意图明确但决定权仍然集中在维护者手中。**评审积压是当前最大的社区摩擦点**——#6808 从 5 月 20 日开始，至今已 78 天仍未定论。

---

## 5. Bug 与稳定性

### 严重（S1 / 高风险）

- **[#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) [Bug]: OpenRouter streaming requests drop provider_extra（今日新开，S1 工作流受阻）**
  `stream_chat` 路径未调用 `merge_extra_body`，导致所有通过 provider_extra 的配置丢失。对于依赖 OpenRouter 的自定义参数的开发者属于硬阻断。该 Bug 由 Audacity88 报告，目前 **尚无 fix PR**。

- **[#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) [Bug]: verifiable-intent evaluates constraints without verifying the credential chain**
  安全缺陷：`vi_verify` 的约束检查绕过了凭据链的密码学验证。参考实现中,约束检查仅在链验证之后执行。目前 **尚无 fix PR**,但该议题已被标记 `accepted`,确认了问题的有效性。

### 中等（S2 / 中风险）

- **[#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) [Bug]: daemon reload 并非 SIGUSR1 触发，且降级安全警告提示用户发送会杀死 daemon 的信号（今日新开）**
  文档与实现不一致,警告信息产生了实际危害风险。报告者给出了具体 commit（`3cedd6a`）与复现环境。**尚无 fix PR**。

- **[#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) [Bug]: cron-triggered SOPs cannot do network work（今日新开）**
  SOP 能力集中缺少 HTTP 成员，`shell.exec`/`notify.channel` 无法解析。文档宣称的 "Watch-loops" 用例实际不可行。**尚无 fix PR**。

- **[#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) [Bug]: sops_dir documented default is not honoured by the daemon（今日新开）**
  SOP 子系统默认值未生效，依赖文档默认值的用户会遭遇静默不加载。**尚无 fix PR**。

- **[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) [Bug]: MCP/tool-schema cloning drives unbounded RSS growth**
  由 #5542（WSL2 OOM）分离出的独立问题。重启风暴已由 #8633 修复，此问题追踪的是另一条内存增长路径。讨论较少，**尚无 fix PR**。

### 轻微（S3）

- **[#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) [Bug]: ZeroCode cannot connect to daemon launched by Windows Task Scheduler**
  用户 klonuo 报告，Windows 计划任务启动的 daemon 无法被 ZeroCode 连接,与 #9117 相关。**尚无 fix PR**。

### 今日已关闭的 Bug

- **#6350**（WhatsApp LID 联系人绕过 allowed-numbers）— 已关闭，问题解决
- **#9652**（config set 与 config list/get 行为不一致）— 已关闭，问题解决
- **#9462**（CI 中 wasmtime feature 的单元测试未执行）— 已关闭，实际修复

**总体评估**：今日新报告的 Bug 中有多个指向 **文档承诺与代码现实之间的差距**（#9780、#9779、#9768），这类问题不影响存量用户，但会严重削弱新用户的信任感。S1 的 OpenRouter 问题如果影响面大,预计很快会出现 fix PR。

---

## 6. 功能请求与路线图信号

### 今日新开的实现 PR（直接对应功能落地）

- **[#9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) fix(runtime): validate WebAuthn assertion data**
  对 WebAuthn 断言的 37 字节头部、`rpIdHash` 和 User Present 标志进行校验，并绑定配置的 relying-party ID。这是一项安全加固,提升 WebAuthn 认证的完整性。

- **[#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) feat(security): extend forbidden_paths with workspace-relative glob patterns**
  实现了 RFC #8424 中提出的工作区相对禁止路径模式,支持 glob、精确相对路径、目录前缀与 basename 分类。**这标志着 #8424 从 RFC 走向落地。**

- **[#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) fix(channels): accept Signal source UUID senders**
  支持 `sourceUuid`,使手机号隐私保护的 Signal 发件人保留可用身份。属实际反馈驱动的通道适配。

### 处于开放状态、大概率进入下一版本的功能型 PR

- **[#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) feat(a2a): outbound client config, shared wire-model, tools (#9106)** — A2A 外发客户端的第一阶段,实现 4 个 `a2a_*` 工具，是 v0.9.0 多智能体方向的核心组件
- **[#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) fix(tool-call-parser): parse DeepSeek DSML and `<|tool_call|>` envelopes** — 适配 DeepSeek 的工具调用格式
- **[#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate**
- **[#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) fix(tools): enforce agent policy in pipelines** — 将工具策略强制应用到 pipeline 执行链

### 值得关注的新功能需求（暂无实现）

- **[#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) 为 OpenRouter 传递稳定 session_id 以节省 prompt-cache 成本**
  用户报告单次对话产生数十次 LLM 请求,成本压力明显。这是一个既有明确使用场景、又有简单解决路径的需求，很可能被采纳。
- **[#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) 为 SOP 增加 HTTP 能力** — 是 cron watch-loop 场景的刚需，需要能力系统扩展
- **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) Chat Completions 兼容层** — 评论数高且无替代方案，可能成为下一步的集成重点

---

## 7. 用户反馈摘要

从今日活跃的 Issue 与评论中可以提炼出以下真实用户声音：

- **文档与实现的不一致是最大的信任杀手。** 用户 Pratiikpy 连续提交了两个 issue（#9780、#9779），指出文档中宣称的 SOP watch-loop 用例无法工作、`sops_dir` 默认值不被尊重。其语气表明这是实际尝试后的困惑，而非单纯阅读体验问题。

- **配置 CLI 的行为不一致影响日常操作。** [#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) 的提交者 ZiBibro 在调试时发现 `config set` 拒绝的 key 却被 `config list` 显示，这类一致性问题会直接破坏用户对工具链的信心。

- **Windows 平台体验仍需加强。** klonuo 在 #9697 中报告的 ZeroCode 与任务计划程序启动的 daemon 的连接问题,与其在 #9117 中遇到的情况一致，连续两个版本未解决，用户明确表达了对回归的失望。

- **成本是真实痛点。** #9631 中 OskarSwierad 指出 OpenRouter 场景下系统提示与工具 schema 被反复重放导致账单膨胀。这类经济性反馈在 RFC 中比较少见,说明用户已在深度生产使用。

- **社区的深度参与者正在用 RFC 推动治理结构。** Audacity88 维护的 #6808（已更新至 Rev.24）、#8692（决策队列 tracker）体现了一部分用户对项目治理效率的关注——不是功能的缺失，而是"决策如何更快做出"的问题。

---

## 8. 待处理积压

以下 Issue/PR 长期处于未定状态，需要维护者重点关注：

| 项目 | 状态 | 等待时长 | 说明 |
|---|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) RFC: Work Lanes, Board Automation, and Label Cleanup | 开放,needs-maintainer-review | 78 天 | Rev. 24 已非常成熟,但仍未定论。这是社区治理效率的风向标 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) 高危 shell 命令确认策略 | 开放,needs-maintainer-review | 64 天 | 已收窄至规范化范围，等待维护者确认 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) 可插拔入站认证 | 开放,needs-maintainer-review | 64 天 | Rev. 8,涉及身份与访问管理,属 v0.9.0 里程碑 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) 桌面 computer-use 支持 | 开放,needs-author-action | 73 天 | 作者需先响应评审意见 |
| [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) Anthropic OAuth alias 契约 | 开放,needs-author-action | 10 天 | 等待作者按评审意见更新 |
| [#6331](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 维护者决策队列（Tracker） | 开放,status:accepted | 33 天 | 该 tracker 本身就是待处理积压的指示器——队列本身也在排队 |

**给维护者的信号：** 多个 5 月底 6 月初发布的 RFC 已经过 3–5 轮修订（#6808 修改 24 次，#7141 修改 8 次），社区贡献者投入了大量精力。如果长期缺乏明确裁定（Accept / Reject / Defer with reason），这些深度参与者的积极性将逐渐流失，并可能形成对项目决策效率的负面共识。

---

*本日报数据来自 ZeroClaw GitHub 仓库 2026-08-06 实时抓取，覆盖过去 24 小时的活动窗口。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*