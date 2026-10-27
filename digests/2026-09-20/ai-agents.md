# OpenClaw 生态日报 2026-09-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-20 12:37 UTC

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

# OpenClaw 项目日报 — 2026-09-20

## 1. 今日速览

过去 24 小时项目维持**极高活跃度**：Issues 更新 500 条（新开/活跃 335，关闭 165），PR 更新 500 条（待合并 245，已合并/关闭 255），无新版本发布。今日最显著的特征是**稳定性问题集中爆发**——多条 P0/P1 崩溃、内存泄漏、OOM、更新失败类问题占据评论数榜前列，且多数集中在近期版本（2026.9.x）。同时维护者（steipete 等）提交了大量修复/性能类 PR，覆盖更新流程、SQLite 句柄管理、会话持久化、CI 工具链等方向，显示修复节奏正在跟上。整体判断：**项目健康度承压但响应积极**，核心矛盾是发布质量（更新链路 + 资源泄漏）与快速迭代之间的张力。

---

## 2. 版本发布

无新版本发布（0 个）。但多条 Issue 显示近期版本（2026.9.3 / 2026.9.4 / 2026.9.5）存在较集中的升级与稳定性问题，详见第 5、8 节。

---

## 3. 项目进展

今日无明确标注已合并/关闭的重点 PR 详情（数据中 PR 评论区未提供合并状态明细），但可观察到以下推进方向的高活跃度 PR：

- **[PR #153655](https://github.com/openclaw/openclaw/pull/153655)** `fix(doctor): recover session imports with missing legacy indexes` — 修复 Doctor 在 legacy index 缺失时拒绝已完成会话导入的问题（关联 #152884），已标注 `proof: sufficient`、`P0`、ready for maintainer look。
- **[PR #153510](https://github.com/openclaw/openclaw/pull/153510)** `fix(gateway): refuse recovered restarts without a verified service command` — 修复恢复重启时的不安全行为。
- **[PR #153601](https://github.com/openclaw/openclaw/pull/153601)** `perf(state): retain SQLite handles for 30 minutes of inactivity` — 直指频繁重开 SQLite 及 64-agent 句柄上限导致的性能问题。
- **[PR #153216](https://github.com/openclaw/openclaw/pull/153216)** `refactor(sessions): await model and thinking persistence` — 会话模型/thinking 变更此前在调用线程上进行转写写入，此 PR 修正。
- **[PR #153683](https://github.com/openclaw/openclaw/pull/153683)** `refactor: compact agent storage and index full-text maintenance` — 降低大型 agent store 的存储与全文检索开销。
- **[PR #153513](https://github.com/openclaw/openclaw/pull/153513)** `fix: keep delegated work visible after parent replies` — 修复委派任务在父任务回复后不可见的问题。

**推进评估**：今日 PR 密集指向"资源泄漏/句柄管理/启动与更新正确性"三大技术债，属结构性修补，对降低长期 crash-loop 有实质意义，但多数仍处 `needs proof` / `waiting on author`，尚未落地。

---

## 4. 社区热点

按评论数排序的高热讨论：

| 排名 | 条目 | 评论 | 核心诉求 |
|---|---|---|---|
| 1 | [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸子进程泄漏 | 31 | 钩子/工具子进程未回收，长期运行退化 |
| 2 | [#144911](https://github.com/openclaw/openclaw/issues/144911) MCP 初始化超时崩溃 Gateway | 31 | 30s 超时导致整个 Gateway 进程宕机 |
| 3 | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏 350MB→15.5GB | 28 | 数天内 OOM 反复崩溃 |
| 4 | [#115908](https://github.com/openclaw/openclaw/issues/115908) 会话转写投影 livelock | 21 | 持续写入下阻塞主线程、拖垮所有通道 |
| 5 | [#152759](https://github.com/openclaw/openclaw/issues/152759)（已关闭）更新 9.4→9.5 静默失败 | 19 | `doctor-failed` 后静默回滚、无 actionable 提示 |

**诉求分析**：社区焦点高度集中于**"长时间运行的稳定性"与"更新链路可靠性"**。多条问题带有 `clawsweeper:source-repro`、`impact:crash-loop` 标签，说明问题可复现且影响面大。用户对"静默失败"类体验尤为不满（#152759、#146887），反映出对可观测更新过程的强需求。

---

## 5. Bug 与稳定性

按严重程度排列：

### P0 / 崩溃 / 发布阻断
- **[#153257](https://github.com/openclaw/openclaw/issues/153257)** [OPEN] `2026.9.5` 将稳定环境变成 8 小时故障恢复——崩溃类，`P0`，`impact:session-state`。**暂无 fix PR 标注**。
- **[#143524](https://github.com/openclaw/openclaw/issues/143524)** [OPEN] Agent SQLite WAL 数天增至 1.4–2.8 GB，阻断 Gateway 启动（Windows, 2026.9.2/9.3），`P0`。`clawsweeper:no-new-fix-pr`，**暂无 fix PR**。
- **[#152884](https://github.com/openclaw/openclaw/issues/152884)** [OPEN] 更新 OpenClaw 时死锁，`P0`。已有关联修复 PR **[#153655](https://github.com/openclaw/openclaw/pull/153655)**。
- **[#146887](https://github.com/openclaw/openclaw/issues/146887)** [OPEN] 更新 9.3→9.4 四阶段失败（stdio MCP 超时 → lint 硬门 → service-handoff-restore-failed），`P0`。**暂无 fix PR**。
- **[#144742](https://github.com/openclaw/openclaw/issues/144742)** [OPEN] 2026.9.4 未包含 #144208，导致每次配置写入失败（release blocker，maintainer 报告），`P0`。`clawsweeper:not-repro-on-main`。
- **[#153246](https://github.com/openclaw/openclaw/issues/153246)** [CLOSED] 插件构建临时目录不清理，约 7.5 GB/天。
- **[#153067](https://github.com/openclaw/openclaw/issues/153067)** [CLOSED] Gateway 稳态下每 ~5s 重拷整个 state DB（~5.9 TB/天 staging 写入）。

### P1 / 回归 / 崩溃循环
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** 僵尸进程累积（见社区热点）。`P1`，`impact:message-loss, crash-loop`。
- **[#144911](https://github.com/openclaw/openclaw/issues/144911)** MCP init 超时崩溃 Gateway。`P1`，`clawsweeper:queueable-fix`（**有可排队修复**）。
- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** Gateway 内存泄漏 OOM。`P1`，`clawsweeper:no-new-fix-pr`。
- **[#115908](https://github.com/openclaw/openclaw/issues/115908)** 会话投影 livelock。`P1`，`clawsweeper:source-repro`。
- **[#139847](https://github.com/openclaw/openclaw/issues/139847)** 回复运行中消息被丢弃（2026.9.2 回归），`P1`，`clawsweeper:queueable-fix`（**有可排队修复**）。
- **[#152981](https://github.com/openclaw/openclaw/issues/152981)** Gateway 启动在 `sidecars.model-runtime` 挂起约 17 分钟（2026.9.5），`P0`，**暂无 fix PR**。
- **[#119760](https://github.com/openclaw/openclaw/issues/119760)** [CLOSED] 通道停止超时泄漏 MCP 子进程集群。
- **[#38327](https://github.com/openclaw/openclaw/issues/38327)** `"Cannot convert undefined or null to object"`（google-vertex/gemini-3.1-pro-preview），`P0`，长期 stale。

**稳定性小结**：今日问题以**资源泄漏（进程/SQLite/内存）**与**更新链路失败**两大类为主，多数无现成 fix PR；仅 #144911、#139847 标注 `queueable-fix`，#152884 有对应修复 PR。

---

## 6. 功能请求与路线图信号

| Issue | 诉求 | 相关 PR / 信号 | 判断 |
|---|---|---|---|
| [#110950](https://github.com/openclaw/openclaw/issues/110950)（已关闭，maintainer） | "一切都是 cron"——统一 heartbeat / watchers / 定时自动化 | — | 设计层面讨论，方向性信号 |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 面向 companion 的 SQLite transcript/session seams | 与 #153683、#153601 存储重构方向一致 | 有一定契合度 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) 👍8 | 可配置的 streaming watchdog 超时阈值 | — | 长尾功能，👍数最高 |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) 👍2 | 为发布添加"生产就绪"稳定性标签 | 与近期发布质量争议呼应 | 可能纳入流程改进 |
| [#131457](https://github.com/openclaw/openclaw/issues/131457) | Feishu 通道进度流式模式 | 与 #153513 委派可见性方向相近 | 通道一致性需求 |
| [#119992](https://github.com/openclaw/openclaw/issues/119992) | message 工具的每轮发送预算（防止重复答复风暴） | `clawsweeper:linked-pr-open` | 有 PR 关联 |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) | 让 `silentReply` 策略可强制可见回复 | — | 小模型用户需求 |

**路线图判断**：最可能被近期版本吸收的是**存储/会话重构相关**（已有多个 PR 在途）与**更新/Doctor 流程修复**；功能类需求多为 stale，短期落地概率较低。

---

## 7. 用户反馈摘要

- **更新体验差**：多条 Issue（#152759、#146887、#152884、#153257）反映升级过程"静默失败""死锁""8 小时恢复"，用户对升级风险高度敏感。
- **长期运行不可靠**：内存泄漏（#91588）、僵尸进程（#97616）、WAL 膨胀（#143524）、磁盘写入爆炸（#153067）等长时间运行场景问题，直接影响自托管网关用户的日常使用。
- **真实使用场景**：有家庭/商业助手用户（#73537）通过 Telegram 集成、自动化、cron、Home Assistant 控制使用 OpenClaw；也有 Windows、Linux systemd、macOS 多平台部署反馈。
- **token 浪费关切**：#67419 抱怨 bootstrap 文件每轮重注入浪费 20–30% token。
- **正向反馈**：#73537 中用户明确致谢项目已成为日常流程一部分，说明产品价值被认可，但稳定性是留存主要障碍。

---

## 8. 待处理积压

长期未响应或长期 stale 的重要条目：

- **[#38327](https://github.com/openclaw/openclaw/issues/38327)**（2026-03-06 创建，`P0`，`stale`）— gemini-3.1-pro-preview 崩溃，已拖延逾半年，👍3。
- **[#51429](https://github.com/openclaw/openclaw/issues/51429)**（2026-03-21，`stale`）— 疑似工作路径硬编码进代码并发布，引发隐私/质量问题，需产品决策。
- **[#67419](https://github.com/openclaw/openclaw/issues/67419)**（2026-04-15，`stale`）— bootstrap 文件重复注入浪费 token。
- **[#68596](https://github.com/openclaw/openclaw/issues/68596)**（2026-04-18，`stale`，👍8）— streaming watchdog 阈值可配置，👍数高但长期未决。
- **[#73537](https://github.com/openclaw/openclaw/issues/73537)**（2026-04-28，`stale`）— 发布稳定性标签建议。
- **[#79902](https://github.com/openclaw/openclaw/issues/79902)**（2026-05-09，`stale`）— SQLite transcript/session seams。
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)**（2026-06-29 创建，今日评论数榜首）— 僵尸进程问题虽高活跃但编号较老，需关注修复排期。
- **[#91588](https://github.com/openclaw/openclaw/issues/91588)**（2026-06-09，`P1`）— Gateway 内存泄漏，长期存在且标注 `needs-info`，修复推进受阻。

**提醒**：多条 stale 高 👍 功能请求（#68596、#73537）与长期 P0（#38327）建议维护者明确处置（采纳 / 关闭 / 排期），以避免社区期望长期悬空。

---

*数据来源：OpenClaw GitHub 仓库（github.com/openclaw/openclaw），统计窗口 2026-09-20 前 24 小时。所有链接均指向对应 Issue/PR 编号。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**统计窗口：2026-09-20（前 24 小时）** | 数据来源：各项目 GitHub 公开动态



## 1. 生态全景

个人 AI 助手与自主智能体开源生态已从"能否跑通"进入"能否长期可靠运行"的阶段。头部项目（OpenClaw、Hermes Agent、ZeroClaw、CoPaw）在极高吞吐下共同暴露出**资源泄漏、会话持久化、上下文膨胀、更新/重启链路正确性**四类结构性技术债，中小项目则在稳定性收敛与功能收敛之间分化。生态格局呈现明显的**金字塔分层**：少数高活跃核心项目承担架构探索与生态定义，大量衍生项目围绕通道集成、技能生态与插件协议做纵深补充。与此同时，多租户/团队化协作、provider 一等公民化、执行安全门禁成为跨项目同步涌现的路线图信号。



## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 活跃度 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（活跃335/关闭165） | 500（待合并245/合并255） | 无 | 极高 | 承压但响应积极；P0/P1 崩溃与更新失败集中爆发 |
| **CoPaw** | 23（活跃17/关闭6） | 38（待合并25/合并13） | **v2.2.2-beta.3** | 高 | 良好；响应快但待合并积压 + Beta 回归风险偏高 |
| **Hermes Agent** | 50（活跃29/关闭21） | 50（待合并32/合并18） | 无 | 高 | 良好；修复吞吐高于新增，但 cron/session 高危积压累积 |
| **ZeroClaw** | 43（活跃35/关闭8） | 50（待合并41/合并9） | 无 | 高 | 良好；架构 RFC 收敛，评审吞吐是瓶颈 |
| **NanoBot** | 3（活跃2/关闭1） | 57（待合并24/合并33） | 无 | 极高（PR侧） | 良好；长期分支 `conflict` 摩擦明显 |
| **NanoClaw** | 0 | 41（待合并3/合并38） | 无 | 中（PR侧） | 良好但"零沉淀"；贡献者集中度偏高 |
| **LobsterAI** | 3（全 stale） | 10（合并5） | 无 | 中高 | 存疑；发布线收敛但社区反馈积压 6 个月 |
| **Moltis** | 4（活跃3/关闭1） | 1（待合并） | 无 | 中偏上 | 存疑；heartbeat 模块集中性缺陷未解 |
| **PicoClaw** | 3（活跃2/关闭1） | 0 | 无 | 低 | 差；官网证书过期 + panic 复现，修复未验证 |
| **NullClaw** | 1（新开1） | 0 | 无 | 极低 | 静默期；零代码流动 |
| **IronClaw / TinyClaw / ZeptoClaw** | — | — | — | 无活动 | 无数据 |

**关键读数**：OpenClaw 的更新量（Issues+PR 各 500，疑似采集上限截断）比第二梯队高出一个数量级，规模效应显著。六大活跃项目中 **4 个报告了 30–50 条量级的待合并 PR**，共同指向"评审吞吐跟不上提交速度"这一生态级瓶颈。



## 3. OpenClaw 在生态中的定位

**规模优势**：OpenClaw 单日 Issues/PR 更新各达 500 条，社区规模约为 CoPaw（23+38）、Hermes（50+50）、ZeroClaw（43+50）的 5–10 倍，是本生态的事实核心参照。

**技术路线差异**：
- **OpenClaw** 走"全通道 + 巨型 agent store + 自托管 Gateway"路线，架构复杂度最高，今日技术债集中在 SQLite 句柄管理、会话转写投影、更新链路（Doctor/service-handoff）。
- **CoPaw** 依托 AgentScope 生态，走"内置供应商 + Hub 多租户"路线，今日落地 `AgentScope Platform` 内置 provider 与多租户 Hub 路线图。
- **Hermes Agent** 走"Desktop + Gateway + 多端协作"路线，今日关闭大量 cron 死锁/gateway 事件循环阻塞类修复，靠**可靠性工程**建立壁垒。
- **ZeroClaw** 走"RFC 驱动 + WASM 插件运行时"路线，架构治理最规范（append-only 会话历史、ADR inventory），但实现落地滞后。

**定位判断**：OpenClaw 是生态中**功能面最宽、用户底盘最大**的项目，其价值主张被用户明确认可（#73537 致谢其为日常工作流一部分），但当前处于"规模扩张速度快于质量收敛速度"的紧张期——这是龙头项目在快速迭代期的典型状态，也是其留存承压的主要风险点。



## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文 / token 管理** | OpenClaw（#67419、#143524）、NanoBot（#5403、#4608）、Hermes（#60103、#76806、#67253）、CoPaw（#7853、#7832）、Moltis（#1277） | prompt token 低估致压缩失效、媒体块/工具结果无界累积、子 agent 巨型 toolset、bootstrap 重复注入浪费 token |
| **更新 / 重启 / 恢复链路** | OpenClaw（#152759、#153257、#152884）、Hermes（cron/gateway 恢复）、NanoClaw（#3346、#700）、CoPaw（#7890） | 升级静默失败、死锁、重启后状态丢失、reload 与重启语义不等价 |
| **进程 / 资源泄漏** | OpenClaw（#97616 僵尸、#91588 OOM）、Hermes（#53415 ~1GB RSS、#58694 内存回归）、PicoClaw（#3382）、NanoBot（#700） | 子进程未回收、内存持续增长、SQLite WAL 膨胀 |
| **执行安全 / 权限门禁** | ZeroClaw（#10643、#7155、#10259）、NanoBot（#5815 exec guard）、CoPaw（#7859 提示注入）、OpenClaw（#153510） | fail-closed 审批、shell 权限策略、RPC 认证主体、提示注入防御 |
| **持久化会话 / 可观测性** | OpenClaw（#115908）、ZeroClaw（#10526 append-only）、Hermes（#10929 类投递回执）、CoPaw（#7724 会话丢失）、Moltis（#1205） | 会话状态投递回执、投影 livelock、文档承诺与实现一致性 |
| **Provider 生态扩展** | CoPaw（#7843 AgentScope Platform）、NanoBot（#5832 Unifically、#5830 Baizhi）、Moltis（#1276 Groq）、Hermes（本地模型） | 一等公民化 provider、模型发现、多 provider 一致性 |
| **多租户 / 团队协作** | CoPaw（#7318 Hub）、Hermes（#97681 跨 gateway Bot 协作）、NanoClaw（多群组路由） | 从个人助手向团队化、多设备、多 gateway 迁移 |
| **垃圾回收 / 积压治理** | Hermes（cron dead-owner）、OpenClaw（stale P0）、NanoBot/NanoClaw（conflict PR） | 长时运行健康检查、决策队列、stale 清理机制 |

**共性根因**：以上问题本质是同一命题的不同侧面——**智能体在长时运行、大规模会话、多工具调用场景下的资源与状态守恒**。这是 agent 类项目区别于传统聊天机器人的核心工程挑战。



## 5. 差异化定位分析

| 维度 | OpenClaw | CoPaw | Hermes Agent | ZeroClaw | NanoBot / NanoClaw | PicoClaw | Moltis |
|---|---|---|---|---|---|---|---|
| **功能侧重** | 全通道 + 巨型 agent 平台 | Console + Hub 多租户 | Desktop + 多端协作 | 协议/架构治理 + WASM 插件 | WebUI + provider 生态 | 硬件/IoT 通道（QQ/钉钉） | heartbeat / cron 调度 |
| **目标用户** | 自托管重度用户 / 家庭商业助手 | 个人 → 团队 | 多设备个人用户 | 架构敏感型贡献者 | WebUI 深度使用者 | 嵌入式/物联网用户 | agent 调度开发者 |
| **技术架构** | 复杂单体 + 多进程 Gateway | AgentScope 生态集成 | 守护线程 + 事件循环治理 | RFC 驱动 + append-only 事件 | 轻量 WebUI + FTS5 | 极轻量通道桥接 | Rust（crates 分层） |
| **核心壁垒** | 规模 + 生态位 | 商业化闭环 + Skill 生态 | 可靠性工程 | 架构规范 + 决策记录 | UI/UX 打磨 | 硬件项目集成 | 配置契约精确性 |
| **当前短板** | 发布质量 | 会话持久化信任缺口 | cron/session 积压 | 实现落地滞后 | 贡献者集中度 | 稳定性 + 维护响应 | 文档与实现脱节 |

**关键分化**：**OpenClaw/CoPaw** 是"平台型"项目，功能面宽但技术债重；**Hermes/ZeroClaw** 是"工程型"项目，靠可靠性或架构纪律立身；**NanoBot/NanoClaw/PicoClaw/Moltis** 是"垂直型"项目，聚焦 WebUI、通道或调度单点。用户选择逻辑正从"功能全不全"转向"长期跑稳不稳"。



## 6. 社区热度与成熟度

**活跃度分层：**

- **第一梯队（极高活跃，快速迭代期）**：**OpenClaw**（规模断层领先）
- **第二梯队（高活跃，质量巩固期）**：**CoPaw、Hermes Agent、ZeroClaw、NanoBot**
- **第三梯队（中等活跃，收敛/观察期）**：**NanoClaw、LobsterAI、Moltis**
- **第四梯队（低活跃至静默）**：**PicoClaw、NullClaw、IronClaw、TinyClaw、ZeptoClaw**

**成熟度判断：**

| 阶段 | 项目 | 特征 |
|---|---|---|
| **快速迭代期** | OpenClaw、NanoBot | 高吞吐、新功能/新 provider 持续涌入，但稳定性问题同步增长 |
| **质量巩固期** | Hermes、ZeroClaw、NanoClaw、CoPaw | 集中在存量修复、架构收敛、发布流程加固，功能净增量相对有限 |
| **分化风险期** | LobsterAI、Moltis | 社区反馈积压 6 个月 / 同源缺陷跨月未解，存在贡献者流失风险 |
| **维护静默期** | PicoClaw（证书过期）、NullClaw | 无代码流动或关键基础设施失修 |

**值得警惕的信号**：PicoClaw 官网证书过期（#3377）已 10 天并被标 stale，NullClaw 零代码流动——低活跃项目若叠加基础设施失修，极易进入不可逆衰退。LobsterAI 的外部贡献者 4 个 PR 停滞近 6 个月，是贡献者流失的典型前兆。



## 7. 值得关注的趋势信号

**1. "稳定性即产品力"成为用户共识**
用户反馈已从功能诉求主导转向稳定性主导。OpenClaw 用户对"静默失败"更新（#152759）、Hermes 用户对"重启即失效"（#95459）、CoPaw 用户对"聊天记录这么短么？？？"（#7884）的情绪化表达，均说明**长时运行可靠性已成为留存的决定性变量**。对开发者的参考：新项目应从一开始就投资进程回收、状态持久化与可观测更新链路，而非事后补丁。

**2. 上下文管理是 agent 的核心工程瓶颈**
至少 5 个项目报告了 token 记账不准、媒体块无界累积、压缩策略失效类问题。NanoBot（#5403 低估 30–50%）、Hermes（#60103 Ollama 静默钳制）、CoPaw（#7853 base64 累积）指向同一根因：**上下文窗口的整个生命周期（估算→压缩→裁剪→持久化）缺乏统一契约**。这是行业级开放问题，也是差异化的技术制高点。

**3. RFC / 决策记录成为成熟项目的治理基建**
ZeroClaw 同日关闭 4 条架构 RFC，并维护 ADR inventory（#8691）与决策队列（#8692）；OpenClaw/Hermes 则更多以 inline fix 推进。**规范化架构治理 vs. 快速 inline 迭代**是两种路线，前者利于长期可维护性，后者利于短期响应速度——项目需根据自身阶段权衡。

**4. 执行安全进入默认关切的视野**
ZeroClaw 的 fail-closed 审批门禁（#10643）、NanoBot 的 exec guard（#5815）、CoPaw 的提示注入（#7859）同日并现。随着 agent 获得 shell/文件/网络权限，**"权限默认值应该 fail-closed 还是 fail-open"**正成为设计决策而非实现细节。对开发者：安全默认值需在架构层明确，`nil`/`None`/`[]` 的语义必须显式定义。

**5. Provider 一等公民化与生态吸引力**
CoPaw 内置 AgentScope Platform、NanoBot 涌入 3 个新 provider、Moltis 提升 Groq——**多 provider 支持广度正成为生态吸引力指标**。签约于单一 provider 的项目在竞争中被动，一等公民化（工具支持、模型发现、定价统一）是当前生态扩张的主旋律。

**6. 从个人助手到多租户协作的定位迁移**
CoPaw Hub（#7318，31 条评论）、Hermes 跨 gateway Bot 协作（#97681）、NanoClaw 多群组路由——**个人 AI 助手正在团队化**。这不仅是功能扩展，更是商业模式（订阅/试用/优惠）与架构（多用户隔离、会话可迁移）的双重升级信号。

**7. 评审吞吐成为生态级瓶颈**
六大活跃项目**全部**报告了 24–41 条量级的待合并 PR，OpenClaw 待合并 245 条、ZeroClaw 积压占比 82%。当提交速度超过评审能力，积累的不仅是数量，更是**贡献者信心损耗**（NanoClaw 单作者包揽全部 PR、LobsterAI 外部 PR 停滞）。对维护者的参考：建立 stale PR 巡检与优先级排期机制，已从"nice to have"变为"必要基建"。



**总体判断**：本生态正处在**从数量扩张到质量收敛的关键转折期**。能否在长时运行可靠性、上下文管理、评审吞吐三条主线上建立体系化能力，将决定各项目在下一阶段的分化——**规模领先者需警惕质量追赶不及，工程精耕者有望凭可靠性实现反超**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-20）

## 1. 今日速览

项目今日活跃度**极高**：过去24小时 PR 更新达 57 条，其中 33 条已合并/关闭，24 条待合并，高于典型的社区迭代节奏。Issues 更新相对平缓（3 条，2 活跃 / 1 已关闭），无新版本发布。今日工作重心集中在 WebUI 事件协议迁移与交互打磨、会话搜索性能优化（FTS5），以及多个新 provider 与执行安全（exec guard）方向。值得注意的是，待合并队列中出现多条标注 `conflict` 的 PR，且不少 PR 为 6–8 月创建、今日仍在活跃更新，提示部分长期分支正在与主干产生合并摩擦。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 33 条，其中具有代表性的方向性推进包括：

- **WebUI 架构收敛**：`#5823 [CLOSED] refactor(webui): remove legacy message projection`（https://github.com/HKUDS/nanobot/pull/5823）作为 #5819 的后续，删除了 `replay_transcript_to_ui_messages` 及 Python 侧 UI 折叠规则，完成 WebUI 事件协议迁移，移除运行时遗留消息投影路径。属于结构性清理，降低了后续 UI 改动的心智负担。
- **交互可观测性统一**：`#5486 [CLOSED] feat(webui): unify turn observability`（https://github.com/HKUDS/nanobot/pull/5486）将每个用户 turn 投影为单一答案面板，保留有序的推理、工具、文件编辑与中间助手片段，并在完成后折叠实时活动区。
- **WebUI 缺陷关闭**：Issue `#5808 [CLOSED]`（https://github.com/HKUDS/nanobot/issues/5808）修复了 `/stop` 后恢复日志残留导致的 follow-up 重放问题。

**整体推进评估**：今日以"清理 + 打磨"为主基调——移除遗留代码路径、统一 UI 事件模型、补齐 provider 生态。项目在可维护性维度前进明显，但核心 agent 逻辑（如 subagent 执行模型、上下文溢出防护）仍在 PR 阶段，尚未落地。

## 4. 社区热点

今日数据中**评论数普遍缺失（显示为 undefined）**，无法据此判断真实讨论热度，仅能依据更新频率与标签识别关注焦点：

- **Issue #5524 [OPEN] WebUI 会话结束通知铃声**（https://github.com/HKUDS/nanobot/issues/5524）— 作者 yrxeva，8 月创建、9 月 20 日仍活跃，评论 1，标签含 `good first issue`。诉求明确：长任务完成后需页面级提醒。
- **Issue #5509 [OPEN] session search 使用 FTS5 索引**（https://github.com/HKUDS/nanobot/issues/5509）— 同样由 yrxeva 提出并在今日保持活跃，且已有对应实现 PR（见下）。
- **Issue 到 PR 的快速闭环信号**：Issue #5509 当日即有 `#5826 [OPEN] feat(webui): add FTS5 index for session search`（https://github.com/HKUDS/nanobot/pull/5826）提交实现，是今日社区协作中质量最高的响应链条。

**诉求分析**：三个热点全部围绕**大规模会话下的可用性与性能**——历史检索慢、长任务无反馈、恢复语义不确定。这说明用户群体已从尝鲜阶段进入日常重度使用阶段，痛点从"能不能用"转向"用得顺不顺手"。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 高（P1） | `#5403` 本地 tiktoken 估算持续低估 prompt token（低于 API 实际值 30–50%），导致 token 压缩/consolidation 永不触发，长会话存在上下文溢出风险 | 已有 fix PR，标注 `conflict` | https://github.com/HKUDS/nanobot/pull/5403 |
| 高（P1） | `#4608` 单 turn 内多工具调用（如 4 次 web_search）累积结果超出上下文预算，现有 `snip_history` 丢弃最旧内容，策略不足 | 已有 fix PR，标注 `conflict` | https://github.com/HKUDS/nanobot/pull/4608 |
| 中 | `#5808` WebUI 中 `/stop` 取消 turn 后，持久化恢复日志仍保留被取消的 follow-up，网关重启后被 `RecoveryCoordinator` 重新入队 | **已关闭** | https://github.com/HKUDS/nanobot/issues/5808 |
| 中 | `#5605` IMAP 消息在通过过滤器后、实际投递给 agent **之前**即被标记 `\Seen`，被过滤拒收的消息也丢失未读状态 | 已有 fix PR | https://github.com/HKUDS/nanobot/pull/5605 |
| 低 | `#5829` TUI 中 Markdown 链接不可点击 | 已有 fix PR（升级 `@opentui/core` 0.5.10→0.5.11） | https://github.com/HKUDS/nanobot/pull/5829 |

**风险提示**：两条 P1 问题均与上下文窗口管理直接相关，且 fix PR 长期挂起并处于冲突状态。这是当前项目最需要维护者介入的技术债。

## 6. 功能请求与路线图信号

- **WebUI 通知铃声（#5524）**：默认关闭 + Settings 开关的设计已写在需求中，实现成本低且带 `good first issue` 标签，属于高概率被新贡献者接手的入门项。纳入下一版本可能性：中高。
- **会话搜索 FTS5 索引（#5509 / #5826）**：需求与实现同日到位，采用 per-workspace SQLite FTS5 镜像索引，替代全量 JSONL 扫描。方案边界清晰，纳入可能性：高。
- **新 Provider 扩展**：`#5832` 新增 Unifically（OpenAI 兼容路径，类比 #3927 的 Novita）、`#5830` 新增 Baizhi Agent Toolkit MCP 预设、`#5825` 新增可复用 OpenRouter JEV client。多 provider 并行涌入，反映生态吸引力上升。
- **执行安全（exec guard）**：`#5815` 引入可选 `tools.exec.jevGuard` 预检，基于 OpenRouter Decisions API，默认关闭且复用现有凭据。属于安全增强方向的新信号，但当前处于 `conflict` 状态。
- **邮箱渠道现代化**：`#5609` 为 Office365/Outlook 增加 Microsoft 委托 OAuth（授权码模式），回应基础认证被强制弃用的外部压力；配套 `#5605` 修复 `\Seen` 语义。此项具有**外部时效性**，优先级实际高于其标签所示。
- **子智能体重构**：`#5811` 将委派工作改为通过共享 `AgentLoop` 上下文与压缩路径运行私有内存子会话，移除独立 runner。属于架构级改动，影响面大。

## 7. 用户反馈摘要

从 Issues 摘要与 PR 描述中可提炼的真实痛点与场景：

- **等待焦虑**：用户在 WebUI 中等待 agent 执行长任务（工具调用、文件编辑、shell 命令）时，"页面没有明显提示，用户不知道已经回复完毕"，需要刷新页面或持续盯屏才能发现新消息（#5524）。这是典型的**长任务可观测性缺口**。
- **性能退化感知**：会话历史增长后，`SessionManager.search_sessions` 每次查询全量扫描 JSONL，"数百个会话时变慢"（#5509）。用户已积累到足以触发性能问题的历史规模。
- **语义一致性不满**：取消操作（`/stop`）与持久化恢复日志之间状态不一致，造成网关重启后消息被意外重放（#5808）。
- **邮件集成可靠性**：被过滤拒收的消息被错误标记为已读，用户可能在无感知情况下漏读邮件（#5605）。
- **交互噪音**：贡献者反馈"persistent assistant footer chrome"冗余，需改为悬停/聚焦上下文控件（#5831），侧面反映用户对界面信息密度的不满。
- **成本/计费准确性**：token 计数与 API 实际值偏差 30–50%（#5403），影响压缩策略可靠性——这对按量计费用户尤为敏感。

## 8. 待处理积压

以下 PR 创建时间较早、今日仍有更新，且多条标注 `conflict`，建议维护者优先排期：

| 编号 | 标题 | 创建日期 | 标签 | 链接 |
|---|---|---|---|---|
| #4608 | fix(agent): 紧急工具结果截断防上下文溢出 | 2026-06-30 | `fix, priority: p1, conflict` | https://github.com/HKUDS/nanobot/pull/4608 |
| #5367 | feat(webui): 本地化 agent activity（10 种语言） | 2026-08-13 | `webui, feature, conflict` | https://github.com/HKUDS/nanobot/pull/5367 |
| #5403 | fix(memory): 用 API 上报的 prompt token 触发 consolidation | 2026-08-16 | `bug, fix, p1, conflict` | https://github.com/HKUDS/nanobot/pull/5403 |
| #5609 | feat(email): Microsoft 委托 OAuth | 2026-08-30 | `security, channel` | https://github.com/HKUDS/nanobot/pull/5609 |
| #5605 | fix(email): 仅在真正投递后标记 `\Seen` | 2026-08-30 | `bug, fix` | https://github.com/HKUDS/nanobot/pull/5605 |
| #5811 | refactor(agent): 通过私有会话执行子智能体 | 2026-09-18 | `refactor, conflict` | https://github.com/HKUDS/nanobot/pull/5811 |
| #5815 | feat(exec): 可选 Jev shell 安全防护 | 2026-09-18 | `conflict` | https://github.com/HKUDS/nanobot/pull/5815 |

**维护者关注点**：`conflict` 标签在待合并队列中反复出现，且横跨 P1 缺陷修复与架构重构，说明主干演进速度已超过部分长期分支的跟进能力。建议对 #4608、#5403 两条 P1 缺陷明确取舍或指派负责人，避免上下文管理相关的稳定性问题长期悬置；#5609 受外部认证策略变更驱动，具有时间窗口约束，宜优先评估。

---

*本日报基于 NanoBot 仓库 2026-09-20 的 GitHub 公开数据生成，评论数等字段在源数据中缺失，相关热度判断已作出相应说明。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-20

## 1. 今日速览

项目今日保持高强度维护节奏：过去24小时共处理 50 条 Issue 更新（新开/活跃 29 条、关闭 21 条）与 50 条 PR 更新（待合并 32 条、合并/关闭 18 条），无新版本发布。关闭侧集中在 P1/P2 级稳定性修复，其中 cron 死锁恢复、gateway 事件循环阻塞、压缩（compression）活锁三条主线均有独立 PR 落地，显示维护者正在系统性清理"卡死类"故障。活跃侧则以 gateway/Desktop 协作能力（#97681）和多项性能回归讨论为主，社区对本地模型、内存占用、token 膨胀的敏感度持续偏高。整体判断：项目健康度良好，修复吞吐显著高于新问题增速，但 cron 与 session 状态相关的高危积压仍在累积。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的重要 PR 集中于稳定性与安全边界修复：

- **压缩活锁修复** — PR #112515（`fix(compression): admit candidates unless a later summarizer started`，P1，comp/agent）已关闭。修复大 session 下 `compress_context()` 空操作条目抢占单调压缩器 generation、导致已完成的摘要被 `_candidate_rejected()` 丢弃的问题。
  https://github.com/NousResearch/hermes-agent/pull/112515
- **Gateway 运行时状态持久化移出事件循环** — PR #116289（P1）已关闭。改为单一守护写入线程串行化并合并突发快照，避免 gateway/adapter/recovery/watchdog 热路径阻塞事件循环。
  https://github.com/NousResearch/hermes-agent/pull/116289
- **Cron 死锁 worker 回收** — PR #116253 与 #116549 均已关闭，针对 #115692。前者引入持久化 progress-lease 追踪并仅终止身份校验通过的陈旧 worker；后者补充基于挂钟时间的 stale-claim 守卫，覆盖"进程存活但永久死锁（`wchan=futex_wait`）"场景。
  https://github.com/NousResearch/hermes-agent/pull/116253 · https://github.com/NousResearch/hermes-agent/pull/116549
- **Cron 告警投递不丢失** — PR #115977（P1）已关闭，修复 bot-chat 投递超时后消息仅存 job output、Bot Chat 消费者不可见的问题。
  https://github.com/NousResearch/hermes-agent/pull/115977
- **Matrix 邀请白名单修复** — PR #87258（P1，安全边界）已关闭，将 inviter allowlist 覆盖到重启后的 reconcile pending invites 路径。
  https://github.com/NousResearch/hermes-agent/pull/87258
- **macOS launchd 退出超时对齐** — PR #82669、#28530、#116493 三条相关 PR 均关闭，围绕 launchd `ExitTimeOut` 与 gateway drain 窗口的一致性，并纳入 gui 域下 `ExitTimeOut` 被钳制的实测结论。
  https://github.com/NousResearch/hermes-agent/pull/82669 · https://github.com/NousResearch/hermes-agent/pull/28530 · https://github.com/NousResearch/hermes-agent/pull/116493

**推进幅度评估**：今日关闭的 PR 高度集中于"进程被卡住 → 无法恢复"这一类高破坏性问题，属于可靠性地基修复而非新功能交付；对多用户/长时间运行部署的稳定性提升明显。

---

## 4. 社区热点

- **#88584 [OPEN] Automated Nous integration is blocked** — 评论 122，今日讨论量最高。`cron/jobs.py` 存在合并冲突，导致定时 Nous-to-Enterkey 合并受阻，release 分支未变更、dashboard updater 停留在上一个已测试 Enterkey 版本；报告者标注为 invalid/P3。
  https://github.com/NousResearch/hermes-agent/issues/88584
  背后诉求：自动化集成流水线的冲突处理缺乏自愈机制，长期挂起会冻结整条 dashboard 发布链路。
- **#97681 [OPEN] Let Bots collaborate across gateways, independently of Desktop** — 评论 28，👍2。要求支持跨 gateway 的 Bot 群聊协作，且不依赖 Desktop 常驻、可跨设备接管，Bots 保留各自模型/工具/上下文。
  https://github.com/NousResearch/hermes-agent/issues/97681
  背后诉求：多端、多 gateway 场景下的会话可迁移性是当前最受期待的产品级能力。
- **#95459 [OPEN] Desktop: in-app browser rejects agent actions after restart** — 评论 11，P2。重启 Desktop 后即使只有一个预览标签，内嵌浏览器仍以 "only takes actions in the session the user is looking at" 拒绝全部 agent 浏览器操作（`isActiveEvent` 为 false）。
  https://github.com/NousResearch/hermes-agent/issues/95459
- **#13983 [CLOSED] 16K Tokens consumption by default** — 评论 7，👍1。默认安装下 "who u?" 简单提问消耗超 16K token，用户对默认 prompt 膨胀提出质疑；今日关闭。
  https://github.com/NousResearch/hermes-agent/issues/13983
- **#103746 [CLOSED] MCP servers break ~60-90s after connection** — 评论 7，最终标记 `cannot-reproduce`。MCP 连接成功后约 60-90 秒因"revival"逻辑失效而中断。
  https://github.com/NousResearch/hermes-agent/issues/103746

---

## 5. Bug 与稳定性

**P1（最高优先级）**

| Issue | 描述 | 状态 |
|---|---|---|
| #115692 | cron dead-owner 回收无法清除"进程存活但永久死锁（futex_wait）"持有的 claim，阻塞后续所有运行 | 已 CLOSED，fix PR #116253 / #116549（另 #115696 补充告警不加回收） |

https://github.com/NousResearch/hermes-agent/issues/115692

**P2（重要）**

- **#60103 [OPEN]** 本地模型（Ollama）静默钳制 `num_ctx` 导致压缩不可达，形成死区，引发永久 context-shift 与数分钟级延迟。涉及 comp/agent、comp/gateway、area/compression、area/local-models。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/60103
- **#100716 [OPEN]** `is_repetition_dominated` 几乎漏检所有真实重复循环，且仅挂在 `finish_reason=length` 路径上。涉及 area/streaming。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/100716
- **#95459 [OPEN]** 上述 Desktop 内嵌浏览器重启后拒绝 agent 操作。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/95459
- **#58694 [OPEN]** v0.17.0 dashboard 内存回归，较 v0.15.x 增加约 300-400MB；用户请求轻量模式选项。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/58694
- **#11431 [OPEN]** 多轮 subagent 运行缓慢：子 agent 继承超大 toolset、delegation 等待卡住子进程、session 持久化过度增长。👍3。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/11431
- **#81162 [OPEN]** 自动语音回复同步阻塞文本响应，慢速 TTS 后端下整轮延迟。**暂无 fix PR**。
  https://github.com/NousResearch/hermes-agent/issues/81162

**其他已关闭的回归/性能问题**：Dashboard 事件循环 83.9s 卡死致 N100 主机失联（#83208）、v0.19.1 多轮会话输入 token 指数膨胀（#76806）、Desktop 渲染进程 90-120% CPU 热循环（#88288）、composer 输入框 backdrop-blur 导致打字卡顿（#69130）、TUI Gateway 启动常驻内存约 1GB（#53415）、Windows CLI 单次查询 30s+ 非模型开销（#48204）。这些关闭说明维护者在同时压缩性能类债务。

---

## 6. 功能请求与路线图信号

- **跨 gateway Bot 协作（#97681）**：若实现，将把 Hermes 从单机助手推进到多设备/多 gateway 的 agent 协作层。目前仍为 feature 请求，尚无对应 PR，短期入版本概率偏低。
  https://github.com/NousResearch/hermes-agent/issues/97681
- **Dashboard 轻量模式（#58694）**：与今日关闭的 #53415（~1GB RSS）方向一致，内存控制主题已有多条线索汇集，具备纳入下一版本的信号。
  https://github.com/NousResearch/hermes-agent/issues/58694
- **父+子 agent 聚合工具预算（#67253）**：报告称一次 Desktop catch-up turn 在首次响应前执行了 322 次工具调用；请求引入聚合预算，标记 `needs-decision` / area/billing。
  https://github.com/NousResearch/hermes-agent/issues/67253
- **Skills Hub 扩展（PR #115106，OPEN）**：为 `GitHubSource.DEFAULT_TAPS` 增加 hermesbook tap（面向 AI agents 的公开交流广场）。
  https://github.com/NousResearch/hermes-agent/pull/115106
- **`hermes skills check` 性能优化（PR #117200，OPEN）**：上游 revision 未变时不再下载全部已安装 bundle（关联 #101454、致谢 #101457）。
  https://github.com/NousResearch/hermes-agent/pull/117200
- **`hermes dashboard` 启动不再预拉全部 stdio MCP server（PR #117201，OPEN）**：修复独立启动时零客户端也 eager 拉起所有 MCP server 的 idle 磁盘写入源（关联 #58733、#60602）。
  https://github.com/NousResearch/hermes-agent/pull/117201

---

## 7. 用户反馈摘要

- **资源占用是最大痛点**：dashboard 内存回归 300-400MB（#58694）、TUI Gateway 启动 ~1GB（#53415）在资源受限服务器（与 SenseVoiceSmall ASR 共享 RAM 的场景）上尤为突出。
- **默认 token 开销引发质疑**：默认安装简单提问消耗 16K+ token（#13983），用户直接询问"这是否正常、由什么构成"。
- **本地模型体验存在结构性缺陷**：Ollama 静默钳制 `num_ctx` 导致压缩机制完全触达不到（#60103），用户遭遇多分钟级延迟与永久上下文漂移。
- **多端一致性诉求强烈**：#97681 反映用户希望脱离 Desktop 常驻，在手机上接续 bot 会话；#95459 则反映 Desktop 重启后 agent 浏览器操作全线失效的挫败感。
- **长会话成本失控**：v0.19.1 输入 token 指数膨胀（#76806）与 subagent 巨型 toolset（#11431，👍3）共同指向"agentic 工作流下上下文与工具规模缺乏约束"。
- **正面信号**：MCP 断连问题（#103746）以 `cannot-reproduce` 关闭，Mac launchd 退出超时系列经多轮迭代（#82669/#28530/#116493）形成一致的实测结论，体现维护质量。

---

## 8. 待处理积压

**长期未合入的 OPEN PR**

- **#115106**（创建 2026-09-18）hermesbook tap，P3，待合并。
  https://github.com/NousResearch/hermes-agent/pull/115106
- **#117200 / #117201**（创建 2026-09-20）skills check 与 dashboard MCP 启动优化，均为当日新提交的 P2/P3 待合并项，建议优先 review #117201（P2、涉及启动期磁盘写入）。
  https://github.com/NousResearch/hermes-agent/pull/117200 · https://github.com/NousResearch/hermes-agent/pull/117201

**长期未解决的 OPEN Issue（按创建时间排序）**

| Issue | 创建日期 | 标题要点 | 优先级 |
|---|---|---|---|
| #11431 | 2026-04-17 | subagent 巨型 toolset / delegation 阻塞 / session 持久化膨胀（👍3） | P2 |
| #67253 | 2026-07-19 | 缺少父+子聚合工具预算，322 次工具调用（`needs-decision`） | P2 |
| #81162 | 2026-08-07 | 慢速 TTS 阻塞文本响应 | P2 |
| #83208 | 2026-08-10（已关闭） | 见上文，已收敛 | P2 |
| #58694 | 2026-07-05 | dashboard 内存回归 + 轻量模式需求 | P2 |
| #60103 | 2026-07-07 | Ollama 上下文钳制导致压缩死区 | P2 |
| #95459 | 2026-08-26 | Desktop 内嵌浏览器重启后拒绝 agent 操作 | P2 |
| #97681 | 2026-08-29 | 跨 gateway Bot 协作 | P2 |
| #100716 | 2026-09-01 | 重复循环检测失效 | P2 |

**维护者关注建议**：#60103（本地模型压缩死区）与 #100716（重复循环漏检）均已挂起逾 1-2 个月且无 fix PR，二者直接影响输出质量与延迟，建议优先排期；#95459 为"重启即失效"型回归，用户可复现成本低，亦宜尽快定位。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-20

## 1. 今日速览

今日项目活跃度偏低：过去 24 小时无新版本发布，无 PR 更新，仅 3 条 Issue 有动态（2 条新开/活跃、1 条关闭）。然而低活跃度并不代表低风险——今日一半以上的 Issue 动态围绕**稳定性与可用性**展开：一条指向官网 TLS 证书过期导致站点全面不可访问的 CRITICAL 问题 [#3377]，一条是旧 DingTalk panic（#973）在 v0.3.1 上的复现 [#3382]。唯一的好消息是 #973 已被关闭。整体看，项目当前处于"无功能推进、稳定性问题积压"的状态，短期内需优先处理证书与 panic 两类问题。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 PR 合并或关闭（PR 更新数：0）。

- 唯一被关闭的条目是 Issue #973（[sipeed/picoclaw#973](https://github.com/sipeed/picoclaw/issues/973)），标记为 `type: bug, domain: channel`。但其修复效果受到质疑——同日在 v0.3.1 上出现了同样的 panic 复现报告（见下）。因此本日项目在功能演进上**没有实质向前推进**。

---

## 4. 社区热点

按更新与讨论热度排序：

| Issue | 状态 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| #973 QQ/DingTalk 长时在线后 PANIC | CLOSED | 3 | 0 | [链接](https://github.com/sipeed/picoclaw/issues/973) |
| #3377 官网 TLS 证书过期 | OPEN `stale` | 1 | 1 | [链接](https://github.com/sipeed/picoclaw/issues/3377) |
| #3382 v0.3.1 DingTalk 网关重连 panic | OPEN | 0 | 0 | [链接](https://github.com/sipeed/picoclaw/issues/3382) |

**诉求分析**：讨论最集中的是 #973 及其延续 #3382，核心诉求是**长连接场景下的进程稳定性**。用户在 QQ 与钉钉通道上保持整夜在线后遭遇 panic 退出，说明问题出现在 WebSocket/流式 SDK 的断线与重连路径上，而非首次连接。#3377 则由社区用户主动发现并上报（获 1 个 👍），反映外部对项目对外形象的关注；该 Issue 已被标记 `stale`，意味着它在一段时间内未获维护者实质响应，用户诉求与维护节奏之间存在落差。

---

## 5. Bug 与稳定性

按严重程度排列：

**① CRITICAL — 官网 TLS 证书过期**
- [#3377](https://github.com/sipeed/picoclaw/issues/3377)：`https://picoclaw.io`（仓库链接的项目主页）TLS 证书于 **2026-09-10 23:59:59 UTC** 过期，所有浏览器与 TLS 客户端均拒绝连接，站点实际不可用。
- 报告者：dimonb | 创建 2026-09-12 | 更新 2026-09-19 | 状态：OPEN，标记 `stale`
- **是否已有 fix PR**：无。

**② HIGH — DingTalk 网关流 SDK 重连 panic（回归/未修复）**
- [#3382](https://github.com/sipeed/picoclaw/issues/3382)：在 **picoclaw v0.3.1（commit 2cf030d2）**、`dingtalk-stream-sdk-go` v0.9.1 依赖固定下，仍可复现 #973 报告的同类 panic，表现为 `send on closed channel`，位置 `client.go:161`。
- 复现时间：2026-09-20 10:46:26 CST
- 报告者：HenryLoveMiller | 创建 2026-09-20 | 状态：OPEN
- **是否已有 fix PR**：无。该条直接质疑了 #973 的关闭，说明原修复未覆盖真实触发路径。

**③ 已关闭 — QQ/DingTalk 长时在线 panic**
- [#973](https://github.com/sipeed/picoclaw/issues/973)：2026-03-02 日志显示 `message queue is closed` 后重连 QQ WebSocket。状态：CLOSED，但存在复现争议（见 ②）。

---

## 6. 功能请求与路线图信号

今日无新功能请求提出。三条 Issue 全部为缺陷报告，不涉及新特性诉求。

由于过去 24 小时 PR 更新为 0，**没有可据以判断下一版本纳入范围的合并动作或候选 PR**。唯一可确认的路线图信号来自缺陷侧：DingTalk/QQ 通道的重连健壮性（#3382、#973）已被社区反复提出，且跨版本未解决，属于需要进入下一版本修复计划的事项。

---

## 7. 用户反馈摘要

- **痛点一：长时在线不稳定。** 用户将 QQ 与钉钉同时接入并保持整夜在线，进程最终 PANIC 退出（#973）。这是真实生产使用场景下的可用性问题，而非边界测试。
- **痛点二：修复未被验证。** #973 已于今日关闭，但用户在最新版 v0.3.1 上给出具体 commit、依赖版本与复现时间戳，证明同一 panic 路径仍然存在（#3382）。这反映出用户对"关闭即修复"的处理方式存在不满。
- **痛点三：项目对外可用性。** 有用户主动检查并上报官网证书过期（#3377），说明社区愿意为项目健康度出力；但该 Issue 被标记 `stale` 且仅 1 条评论，用户可能感到反馈未被及时跟进。
- 今日未见针对已发布功能的正面反馈或满意评价。

---

## 8. 待处理积压

建议维护者优先关注以下长期或高频条目：

1. **[#3377](https://github.com/sipeed/picoclaw/issues/3377)（CRITICAL + `stale`）** — 证书已于 2026-09-10 过期，至今（2026-09-19 仍有更新）未见解决迹象，且已被自动标记 stale。首页不可访问会直接影响新用户获取与项目可信度，建议立即续期证书并移出 stale。
2. **[#3382](https://github.com/sipeed/picoclaw/issues/3382)** — v0.3.1 上的 panic 复现，是 #973 的实质延续。若无对应修复 PR，该问题将随版本继续存在。
3. **[#973](https://github.com/sipeed/picoclaw/issues/973)（已关闭但存在复现）** — 建议重开或关联至 #3382，以保留完整的问题追踪链路；否则后续用户排查时容易遗漏历史上下文。

> 数据说明：本日报全部内容基于所提供的 PicoClaw GitHub 数据（统计窗口：过去 24 小时），未引入外部信息。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报（2026-09-20）

## 1. 今日速览

今日 NanoClaw 项目呈现出典型的"高吞吐、零沉淀"状态：过去 24 小时内 41 条 PR 被更新，其中 38 条已合并或关闭，待合并仅 3 条，Issue 侧则完全静默（0 条新增/活跃/关闭）。没有新版本发布，工作重心集中在存量 PR 的批量清理上。从数据看，项目积压的长期 PR（最早可追溯至 2026-03-04）正在被集中处理，维护节奏明显加快，健康度良好。但需要留意的是，Issue 零活动与 PR 高频关闭并存，可能意味着问题跟踪渠道的入口活跃度偏低，或社区讨论正更多转移到 PR 环节进行。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日 38 条 PR 合并/关闭，覆盖渠道修复、CLI 工具、技能包与 CI 四个方向，属于一次集中的存量清理。代表性条目：

- **[#2328](https://github.com/nanocoai/nanoclaw/pull/2328)（已关闭）** — 修复多目标群组中默认回复目标，改为回到消息来源方，直接改善多群组场景下的回复错乱问题。
- **[#2327](https://github.com/nanocoai/nanoclaw/pull/2327)（已关闭）** — 在 SDK 自动压缩（auto-compaction）后重新注入目标提醒，避免上下文压缩导致 agent 丢失目的地信息。
- **[#2402](https://github.com/nanocoai/nanoclaw/pull/2402)（已关闭）** — 修复仓库改名后 CI workflow 空转问题，更新 repository guards，属于基础设施层面的必要修补。
- **[#2416](https://github.com/nanocoai/nanoclaw/pull/2416)（已关闭）** — `ncl groups create` 与 `ncl wirings create` 现在会创建配套行（companion rows），补齐 CLI 创建流程的完整性。
- **[#3346](https://github.com/nanocoai/nanoclaw/pull/3346)（已关闭，core-team）** — 修复 opencode resumed session 空闲无产出时的恢复逻辑。
- **[#2356](https://github.com/nanocoai/nanoclaw/pull/2356)（已关闭）** — 升级时安装 `~/.local/bin/ncl` 符号链接，解决升级后命令不可达的问题。

整体看，项目在渠道健壮性（WhatsApp、Chat SDK）、会话生命周期（session 压缩、超时、恢复）和 CLI 一致性三条主线上都有实质推进，属于稳定性收敛阶段而非功能扩张阶段。

## 4. 社区热点

本次数据中所有 PR 的评论数均显示为 `undefined`，👍 计数均为 0，因此**无法依据评论或反应数据识别真正的讨论热点**。仅从元数据看，以下条目参与度信息最值得关注（均为同一作者 glifocat 提交、同日更新）：

- [#3346](https://github.com/nanocoai/nanoclaw/pull/3346) — 带有 `core-team` 标签，是唯一明确标注核心团队属性、且创建日期（2026-08-19）较近的条目，可能代表更近期的维护优先级。
- [#2152](https://github.com/nanocoai/nanoclaw/pull/2152) — opencode 服务进程组终止与可配置 `IDLE_TIMEOUT_MS`，涉及资源管理与稳定性，潜在影响面较广。

**分析**：单一作者（glifocat）包揽了今日全部可见 PR，这既说明该贡献者是当前主力维护者，也提示项目存在**贡献者集中度偏高的风险**——一旦该贡献者节奏变化，项目吞吐可能显著波动。建议维护者关注贡献者多样性。

## 5. Bug 与稳定性

今日无新报告的 Bug（Issue 更新为 0）。以下为今日关闭的、按潜在影响面排序的稳定性修复：

| 严重程度 | PR | 问题 | 状态 |
|---|---|---|---|
| 高 | [#746](https://github.com/nanocoai/nanoclaw/pull/746) | WhatsApp 鉴权失败时服务反复重启（restart hammering），曾标记 `Status: Blocked` | 已关闭 |
| 高 | [#700](https://github.com/nanocoai/nanoclaw/pull/700) | 超大 JSONL session 导致容器超时，已加入体积检查与轮转 | 已关闭 |
| 中 | [#2265](https://github.com/nanocoai/nanoclaw/pull/2265) | `send_card` 在 Chat SDK bridge 中静默失效（silent no-op） | 已关闭 |
| 中 | [#2309](https://github.com/nanocoai/nanoclaw/pull/2309) | 用内置 better-sqlite3 wrapper 替换 sqlite3 CLI 依赖 | 已关闭 |
| 中 | [#2565](https://github.com/nanocoai/nanoclaw/pull/2565) | WhatsApp 群组 @ 提及检测（基于 `contextInfo.mentionedJid`） | 已关闭 |
| 中 | [#3346](https://github.com/nanocoai/nanoclaw/pull/3346) | opencode resumed session 空闲无产出 | 已关闭 |
| 中 | [#2402](https://github.com/nanocoai/nanoclaw/pull/2402) | 仓库改名后 CI 空转 | 已关闭 |
| 低 | [#701](https://github.com/nanocoai/nanoclaw/pull/701) | 向所有 agent prompt 注入日期/时间上下文 | 已关闭 |

上述条目**均已关闭**，即修复已落地或被判定处理完毕。需注意 #746、#700、#701 此前均带有 `Status: Blocked` 标记，今日集中关闭，建议维护者确认其关闭原因（已合并还是放弃）以免遗漏真实修复。

## 6. 功能请求与路线图信号

今日无 Issue（故无用户直接提出的功能需求）。从 PR 内容可推断出以下能力方向正在被补齐，**可能构成下一版本的隐含路线图**：

- **技能生态扩展**：[#706](https://github.com/nanocoai/nanoclaw/pull/706) 新增 `icloud-tools` 技能包（CalDAV/CardDAV/IMAP/SMTP），将个人数据源接入 agent，是典型的"个人 AI 助手"能力补强。
- **技能可维护性**：[#2322](https://github.com/nanocoai/nanoclaw/pull/2322) 为 `add-karpathy-llm-wiki` 做 v2 兼容（改用 `schedule_task` MCP、移除构建步骤），显示技能包正在统一到新架构。
- **多目标消息路由**：[#2328](https://github.com/nanocoai/nanoclaw/pull/2328)、[#2327](https://github.com/nanocoai/nanoclaw/pull/2327) 均围绕"目的地"语义，暗示多群组/多渠道并行是当前重点场景。

由于这些 PR 今日均被关闭且无版本发布，**无法确认其是否已进入正式发布分支**，不宜将其视为已交付功能。

## 7. 用户反馈摘要

今日数据中**没有任何 Issue 或 PR 评论内容可供提炼**（评论数均为 `undefined`）。因此无法提供用户痛点、使用场景或满意度方面的可靠摘要。所有 PR 摘要均为作者自述的模板化技术说明，不含用户原声。建议后续日报在数据源中补充评论正文，否则该栏目无法产生有效信息。

## 8. 待处理积压

- **待合并 PR：3 条**（未在展示的 15 条中列出编号），建议维护者优先确认其阻塞原因。
- **长期滞留后集中关闭的 PR**：以下条目创建于 2026 年 3 月，直至 2026-09-20 才被处理，滞留时间超过 6 个月，反映历史积压较重：
  - [#746](https://github.com/nanocoai/nanoclaw/pull/746)（创建于 2026-03-05，曾标记 Blocked）
  - [#706](https://github.com/nanocoai/nanoclaw/pull/706)（创建于 2026-03-04，曾标记 Needs Review）
  - [#701](https://github.com/nanocoai/nanoclaw/pull/701)（创建于 2026-03-04，曾标记 Blocked、Pending Closure）
  - [#700](https://github.com/nanocoai/nanoclaw/pull/700)（创建于 2026-03-04，曾标记 Blocked）

**提醒**：这三个月的存量集中释放虽是好信号，但也说明此前存在审查瓶颈。建议维护者建立超期 PR 的定期巡检机制，避免再次出现 6 个月量级的积压。

---

**数据说明**：本报告仅基于所提供的 GitHub 元数据生成。评论数、发布日期、版本内容等字段在源数据中缺失或为 `undefined`，相关栏位已如实标注为不可用，未做任何推断性填充。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-09-20）

## 1. 今日速览

今日 NullClaw 整体活跃度**极低**，处于典型的维护静默期。过去 24 小时内仅有 1 条 Issue 更新（新开 1 条，关闭 0 条），无任何 PR 活动，无新版本发布。唯一的社区输入是一条关于 Ollama 兼容性提示的增强请求（Issue #1000），尚无评论与点赞互动。项目核心开发流（PR 合并、版本迭代）今日无任何推进。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日无合并或关闭的 PR，项目功能与修复层面**零推进**。无代码库变更记录可分析。

## 4. 社区热点

今日唯一活跃条目：

- **[#1000 [OPEN] [enhancement] ollama incompatibility notification](nullclaw/nullclaw Issue #1000)**
  - 作者：aaafgcfg｜创建/更新：2026-09-20｜评论：0｜👍：0

该 Issue 虽为今日唯一讨论点，但尚无评论互动，未形成实际讨论热度。背后诉求清晰：用户希望当 Ollama 模型不支持工具调用（tools）时，系统能给出明确的兼容性提示，而非仅输出无描述的 adapter error。

## 5. Bug 与稳定性

今日无崩溃、回归或 Bug 类报告。唯一相关条目本质为**可用性/错误提示缺陷**（非功能性 Bug）：

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 低（影响排障体验） | Ollama 模型不支持 tools 时仅返回无描述的 adapter error，用户难以定位原因（Issue #1000） | OPEN | 无 |

链接：nullclaw/nullclaw Issue #1000

## 6. 功能请求与路线图信号

今日提出 1 项功能请求：

- **Ollama 不兼容通知**（Issue #1000）：当 Ollama 模型不支持工具调用时，增加明确的提示/通知机制，替代当前无描述的 adapter error。

由于今日无任何关联 PR 或维护者回复，**无法从现有 PR 判断其是否会被纳入下一版本**。该请求实现成本较低（错误信息增强），属于典型的易落地增强项，但缺乏维护者响应信号。

## 7. 用户反馈摘要

从 Issue #1000 中可提炼的真实反馈：

- **痛点**：Ollama 与工具调用能力不兼容时，系统报错信息缺乏描述，用户无法直接理解失败原因。
- **使用场景**：用户在本地通过 Ollama 运行模型并期望使用工具（tools）能力。
- **排障成本**：用户不得不借助 Wireshark 抓包才定位到问题，反映错误可观测性不足。
- 今日无正面/负面满意度类评论可供归纳。

## 8. 待处理积压

今日数据中仅有 1 条 Issue，且为当日新开，**不存在长期未响应的重要 Issue 或 PR**。该 Issue（#1000）当前评论数为 0、无维护者回应，建议维护者尽快确认并回复，以避免新增请求进入积压。

---

**健康度小结**：今日无代码流动（0 PR、0 版本），社区输入仅 1 条且无互动。项目处于低活跃状态，唯一需关注事项为 Issue #1000 的响应时效。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-20）

## 1. 今日速览

今日项目活跃度**中等偏高**：过去 24 小时共产生 13 条 Issues/PRs 更新（3 条 Issues、10 条 PRs），但无新版本发布。合并/关闭侧动作明显——5 条 PR 被合并或关闭，其中包括一个覆盖 renderer/build/main/macos/artifacts 等多模块的发布分支 PR（#2725），表明 2026.9.18 版本线正在收敛。值得警惕的是，3 条今日更新的 Issues 全部带有 `[stale]` 标签，且均创建于 2026-03-28/29/30，说明社区反馈存在**长期积压、久未闭环**的结构性问题。新提交的 PR 集中在浏览器能力（WebAuthn/passkey）、IM 配置热更新、订阅商业化三个方向，项目主线正从功能扩张转向体验完善与变现闭环。

## 2. 版本发布

今日无新版本发布（0 个），无破坏性变更或迁移事项需说明。

## 3. 项目进展

今日 5 条 PR 被合并/关闭，推进方向如下：

- **#2725 Release/2026.9.18**（CLOSED）— 覆盖 renderer、build、docs、main、openclaw、cowork、im、macos、artifacts 全模块的发布分支，是今日最高权重的合并动作，标志 9.18 版本线完成集成。链接：netease-youdao/LobsterAI PR #2725
- **#2723 feat(browser): 为内置智能体浏览器新增 passkey/WebAuthn 支持**（CLOSED）— 新增 `browserPasskeys` 模块（含 passkey service、page observer、preload bridge），并配套 macOS WebAuthn 集成与打包所需 entitlements，同时在应用内浏览器面板通过新 notice 组件暴露 passkey 提示。这是智能体浏览器登录能力的实质性补强。链接：netease-youdao/LobsterAI PR #2723
- **#2724 refactor(cowork): 移除 background jobs 功能**（CLOSED）— 删除了 background job store、OpenClaw 的 `tasks.list`/`tasks.cancel` gateway 调用、`cowork:backgroundJob:*` IPC 通道，以及相关 renderer hook、任务面板区、类型与 i18n 文案。这是一次**功能收缩式重构**，暗示该能力被判定为冗余或成本高于收益。链接：netease-youdao/LobsterAI PR #2724
- **#2722 fix(scheduled-task): 保留微信目标大小写并解释重发拒绝**（CLOSED）— 修复定时任务在归一化投递目标时丢失微信直聊 peer id 原生大小写的问题，并在微信因上下文过期或额度耗尽拒绝发送时给出会话过期提示。链接：netease-youdao/LobsterAI PR #2722
- **#2720 feat(subscription): 新增一分钱试用与低额度购买优惠**（CLOSED）— 引入 ¥0.01 标准版订阅试用（按隐私授权、账号类型、订阅状态、活动有效期控制展示，客户端实现每周一次、累计关闭三次后不再弹出的频控），完成 Portal 结算跳转、中英文案与埋点，并接入低余额场景的首购/限时优惠展示（含倒计时与优惠 token）。链接：netease-youdao/LobsterAI PR #2720

**综合评估**：今日进展呈"一收一放"格局——收缩 cowork 后台任务等边缘能力，同时扩张浏览器认证与商业化基建，项目整体在功能纵深上向前推进约一个发版周期（9.18 线收口）。

## 4. 社区热点

今日社区互动整体偏冷，无高热度讨论，评论数最高者仅 2 条：

- **Issue #1068**（2 条评论）— "删除当前 agent 后切换到别的 agent 需自动刷新任务列表"。链接：netease-youdao/LobsterAI Issue #1068
- **Issue #1003**（1 条评论）— Notion MCP 环境变量未传递问题。链接：netease-youdao/LobsterAI Issue #1003
- **Issue #1007**（1 条评论）— agent engine 无限重启求助。链接：netease-youdao/LobsterAI Issue #1007

所有条目 👍 均为 0。**诉求分析**：讨论虽分散，但共同指向同一根因——**运行时状态同步与进程生命周期管理不透明**。任务列表不刷新、MCP 子进程读不到环境变量、Engine 反复重启，本质都是"配置/状态写入后运行时未正确同步"。今日新开的 PR #2721 正是同一类问题的正面回应（IM 配置无需重启 gateway 即可生效），说明维护者已识别该模式。

## 5. Bug 与稳定性

按严重程度排列：

1. **【高】Agent Engine 无限重启** — Issue #1007（OPEN，`[stale]`）。用户反馈"现在还是经常遇到"，属持续性稳定性故障，直接影响可用性。用户主动询问如何改配置文件规避，说明缺少官方排障路径。**暂无 fix PR**。链接：netease-youdao/LobsterAI Issue #1007
2. **【中】Notion MCP Bridge 未传递环境变量** — Issue #1003（OPEN，`[stale]`）。`child_process.spawn` 的 `env` 对象疑似未设置、key 名不匹配或未被子进程读取，导致 Notion 侧收到无 Token 请求。用户已多次尝试修改环境变量名仍无法解决。**暂无 fix PR**。链接：netease-youdao/LobsterAI Issue #1003
3. **【中】删除 agent 后任务列表不自动刷新** — Issue #1068（CLOSED，`[stale]`）。删除当前 agent 并切换后，main agent 的任务列表无法刷新显示。今日已关闭，**但数据中未见对应 fix PR 编号**，建议确认闭环方式（修复、重复关闭或 stale 自动关闭）。链接：netease-youdao/LobsterAI Issue #1068
4. **【中】微信定时任务投递大小写与重发失败** — 已由 PR #2722 修复（CLOSED），属已解决问题。链接：netease-youdao/LobsterAI PR #2722

**健康度提示**：今日 1 条 Issue 关闭、2 条高危/中危 Bug 仍开放且均超 5 个月未解（创建于 3 月底），稳定性债务集中且未消化。

## 6. 功能请求与路线图信号

**已被合并、已进入主线的信号：**

- 内置浏览器 passkey/WebAuthn 支持（#2723 已 CLOSED）→ 智能体浏览器正从"能看"走向"能登录"，为需要身份认证的自动化场景铺路。
- 订阅试用与低额度优惠（#2720 已 CLOSED）→ 商业化闭环明确落地，下一版本大概率继续补强付费转化路径。
- IM 配置免重启生效（#2721，OPEN）→ 若合入，将显著改善多 IM 场景下的配置体验。链接：netease-youdao/LobsterAI PR #2721

**仍待评估的老 PR（均为 `[stale]`，创建于 2026-03-29）：**

- **#1008** 新增 6 个预设 Agent 模板 — 现有预设仅覆盖股票、内容创作、备课、内容总结、医疗健康、宠物 6 个场景，提案扩展覆盖面。链接：netease-youdao/LobsterAI PR #1008
- **#1009** Prompt 模板库（变量填充 + 复制）— 针对高频 Prompt（代码审查、需求拆解、文档生成、问题排查）无法沉淀复用、变量替换易错的痛点。链接：netease-youdao/LobsterAI PR #1009
- **#1011** 可扩展 artifacts 预览管线 — 让 HTML、React、Mermaid 等"运行后再看"的内容直接渲染，降低用户脑内翻译源码的成本。链接：netease-youdao/LobsterAI PR #1011
- **#1013** Cowork 输入框 slash 触发技能选择器 — 解决必须跳转技能页、无法行内临时引用技能的问题。链接：netease-youdao/LobsterAI PR #1013

**判断**：#1009、#1011、#1013 三者共同指向"Cowork 会话内的输入与产出体验"，且 #1011 与今日合并的 #2725 中已含 `area: artifacts` 标签方向一致，是相对最有可能被纳入后续版本的一组。但四者均停滞近 6 个月，短期内进入下一版本的可能性偏低，除非维护者集中做一次 stale PR 清理。

## 7. 用户反馈摘要

- **配置与进程管理不透明**是最集中的不满：用户面对 Engine 无限重启只能"请教解决的方法"，试图自行修改配置文件（#1007）；面对 MCP 环境变量问题反复调整 key 名仍失败（#1003）。反映出**缺少可视化的运行时诊断与配置校验**。
- **状态同步期望落空**：用户删除 agent 后的心理预期是任务列表自动跟随切换，实际需手动刷新甚至无法刷出（#1068），属"操作完成但界面未反馈"的典型体验断点。
- **高频操作路径偏长**：用户明确指出每次引用技能都要跳转技能页、高频 Prompt 需重复手写（#1013、#1009），说明**效率型用户**是活跃反馈群体。
- **满意面**：微信定时任务的投递问题（#2722）得到及时修复响应，且修复同时附带会话过期提示，体现了对失败原因可解释性的重视。

今日数据中未出现对近期功能的明确正向评价反馈。

## 8. 待处理积压

以下条目均已停滞约 6 个月且带 `[stale]` 标签，建议维护者优先分级处理：

**Issues（2 条，均为高优先级稳定性问题）：**
- Issue #1007 — Agent Engine 无限重启（创建 2026-03-29，仅 1 条评论，无维护者结论）。链接：netease-youdao/LobsterAI Issue #1007
- Issue #1003 — Notion MCP 环境变量未传递（创建 2026-03-28，仅 1 条评论）。链接：netease-youdao/LobsterAI Issue #1003

**PRs（4 条社区功能提案，均为外部贡献者提交）：**
- PR #1008（BucleLiu）、PR #1009（febugcoder）、PR #1011（febugcoder）、PR #1013（BucleLiu）— 均创建于 2026-03-29，今日仅被动更新。链接：netease-youdao/LobsterAI PR #1008 / #1009 / #1011 / #1013

**风险提示**：外部贡献者的 4 个 PR 长期无合并或明确反馈，叠加 2 个高危 Issue 悬置，存在**贡献者流失与用户信任损耗**的双重风险。建议明确回复处理结论（合入、要求修改或说明暂不纳入），避免 stale 状态长期累积。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-20

## 1. 今日速览

今日 Moltis 无新版本发布，社区活动集中在 Issue 层：过去 24 小时共 4 条 Issue 更新（3 条新开/活跃、1 条关闭），另有 1 条 PR 处于待合并状态。活跃度属于中等偏上——没有代码合并落地，但问题报告集中于同一子系统（heartbeat / agent 工具控制），显示出明确的主题性。项目健康度信号呈两面性：一方面用户持续提交高质量、带源码定位的 Bug 报告（含文件行号引用），说明用户深入使用并愿意贡献细节；另一方面 `heartbeat.active_hours` 相关缺陷从 8 月 16 日（#1205）延续至 9 月 19 日（#1278）才关闭，#1278 虽已关闭但同源问题仍在，提示该模块存在设计层面的欠账。今日无合并/关闭 PR，项目代码向前推进为 0。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无已合并或已关闭的 PR，代码侧无实际推进。

唯一动态为 PR #1276（[OPEN]，作者 Kaboka22）："Groq as a first-class provider, strict zero-parameter tool schemas, and mutation results that parse"。据 PR 摘要，该 PR 将 Groq 从 genai fallback 路径（单模型、无工具支持、`openai/...` id 被路由到 OpenAI）提升为真正的 OpenAI 兼容 provider，使所有已配置的 Groq 模型可注册工具与模型发现；同时涉及零参数工具 schema 的严格化与 mutation 结果解析。该 PR 尚未合并，今日对主线无影响，但其内容若落地将同时触及 provider 接入与工具调用正确性两条主线。

## 4. 社区热点

今日讨论热度整体偏低：所有 Issue 与 PR 的 👍 均为 0，评论数最高为 1。

- **#1205** [OPEN] [bug] Heartbeat ignores configured active hours and runs continuously — 创建于 2026-08-16，今日（09-19）仍有更新，1 条评论。是今日时间跨度最长、持续被关注的议题。链接: moltis-org/moltis Issue #1205
- **#1278** [CLOSED] heartbeat.active_hours is documented as enforced but never evaluated — 1 条评论，今日关闭。链接: moltis-org/moltis Issue #1278

诉求分析：两条最受关注的条目指向同一根因——heartbeat 的 `active_hours` 配置在文档中被描述为"heartbeats only run during this window"，但实际无代码求值。用户的核心诉求不是新功能，而是**文档承诺与实际行为的一致性**，属于可信度层面的问题。#1278 的关闭与 #1205 的仍开放并列出现，值得维护者确认二者是否为同一问题的不同表述。

## 5. Bug 与稳定性

按严重程度排列（依据摘要中对功能影响范围的描述）：

1. **#1277** [OPEN] [bug] `spawn_agent` 将 `active_tools: []` 视为空白名单，子智能体获得零工具 — 作者 letsrock85，创建及更新均为 2026-09-19，0 评论。**严重度：高**。空数组被当作"白名单为空"而非"未限制"，导致子智能体功能完全不可用，属于语义歧义引发的功能性失效。**无 fix PR**。链接: moltis-org/moltis Issue #1277

2. **#1205** [OPEN] [bug] Heartbeat 忽略已配置的 active hours，持续运行 — 作者 IlyaBizyaev，创建 2026-08-16，更新 2026-09-19，1 条评论。**严重度：中高**。配置项失效导致本应受时间窗限制的 heartbeat 持续执行，可能带来非预期的资源消耗或调用。**已积压超过一个月，无 fix PR**。链接: moltis-org/moltis Issue #1205

3. **#1279** [OPEN] [heartbeat] 无法设置 `tool_controls`，heartbeat 注册处硬编码 `Default::default()` — 作者 jbutler1980，创建及更新 2026-09-19，0 评论。**严重度：中**。摘要指出 `CronPayload::AgentTurn` 携带 `tool_controls` 且 cron 执行路径确实会遵循它（引用 `crates/cron/src/types.rs:43-59`），但 heartbeat 注册路径硬编码默认值，导致该配置在 heartbeat 场景下无法生效。**无 fix PR**。链接: moltis-org/moltis Issue #1279

4. **#1278** [CLOSED] `heartbeat.active_hours` 文档称已强制执行但从未被求值，`is_within_active_hours` 无调用方 — 作者 jbutler1980，创建及更新 2026-09-19，1 条评论。**状态：已关闭**。摘要明确指出该函数"除自身测试模块外无调用方"。链接: moltis-org/moltis Issue #1278

**共性提示**：三条 open 的 Bug 中有两条集中在 heartbeat 模块，加上已关闭的 #1278，今日 4 条 Issue 中有 3 条指向 heartbeat 的配置未生效问题，构成明显的集中性风险区。

## 6. 功能请求与路线图信号

今日数据中未出现明确以"功能请求"形式提交的新 Issue。可识别的路线图信号主要来自 PR #1276：

- **Groq 一等公民化**：摘要称 Groq 此前走 genai fallback，仅支持单模型、无工具、且 `openai/...` id 被错误路由到 OpenAI；该 PR 使所有已配置 Groq 模型注册工具能力与模型发现。若合并，将直接扩展多 provider 覆盖面。
- **严格零参数工具 schema 与可解析的 mutation 结果**：属于工具调用链路的正确性改进，#1277（`active_tools: []` 语义）与 #1279（`tool_controls` 硬编码）反映的正是同一领域的配置/工具传递问题。若 #1276 合并，将说明维护方向正在向工具契约的严格化收敛，但仍不能替代上述两个独立 Bug 的修复。

需强调：以上均为对 PR #1276 摘要内容的转述，是否纳入下一版本无公开信息支撑。

## 7. 用户反馈摘要

- **文档与实现脱节是最突出的不满**：#1278 用户 jbutler1980 以 `docs/src/configuration-reference.md` 的原文引用作为依据，指出文档写明"heartbeats only run during this window"却无任何求值代码，"Nothing evaluates it"。这类反馈表明用户是按文档进行配置并据此建立预期的。
- **同一用户连续提交同源问题**：jbutler1980 今日同时提交 #1278（文档/求值缺失）与 #1279（`tool_controls` 硬编码），指向 heartbeat 从配置到执行链路的系统性缺陷。
- **高信息密度是今日反馈的显著特征**：两份报告均附具体文件路径与行号（如 `crates/cron/src/types.rs:43-59`），说明用户已深入源码层排查，不是浅层使用反馈。
- **长期未解带来的挫败风险**：#1205 自 2026-08-16 创建至 2026-09-19 更新，跨月仍未解决，期间由 #1278 从文档角度再次印证同一问题。
- **使用场景**：从报告内容推断，受影响场景包括 heartbeat 的时间窗调度、子智能体（spawn_agent）的工具授予，以及 cron AgentTurn 的工具控制配置传递。

今日数据中未出现对已有功能的正面评价或满意反馈。

## 8. 待处理积压

- **#1205** [OPEN] [bug] Heartbeat ignores configured active hours and runs continuously — 创建于 2026-08-16，至 2026-09-19 已超过一个月仍未关闭，仅 1 条评论，无 fix PR。与今日关闭的 #1278 指向同一根因，建议维护者明确二者关系并给出修复计划。链接: moltis-org/moltis Issue #1205
- **PR #1276** [OPEN] — 创建及更新均为 2026-09-19，评论数未知（字段缺失），👍 0。该 PR 同时涉及 provider 接入、工具 schema 严格化与结果解析三处改动，Review 面较广，建议尽早安排评审以避免长期悬置。链接: moltis-org/moltis PR #1276

---

*备注：本报告严格基于所提供的数据片段，Issue 摘要为截断内容，故未对未展示部分做任何推断。各项 👍 均为 0，评论数多为 0–1，社区互动强度整体偏低。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-20

> 数据来源：CoPaw GitHub 仓库（github.com/agentscope-ai/CoPaw）过去 24 小时动态
> 统计口径：Issues 更新 23 条（新开/活跃 17，已关闭 6）；PR 更新 38 条（待合并 25，已合并/关闭 13）；新版本发布 1 个

---

## 1. 今日速览

过去 24 小时 CoPaw 保持高活跃度：Issues 与 PR 合计更新 61 条，其中 PR 侧 38 条（待合并 25 条）显示社区贡献意愿强烈、但合并吞吐相对滞后。项目发布了 `v2.2.2-beta.3`，主要以 Console 与 E2E 修复为主，包含一处因 #7502 重设计导致的回归修复。社区讨论集中在多租户 Hub 路线图（#7318，31 条评论）以及一系列上下文/会话管理类 Bug。值得注意的是，今日多个严重 Bug（媒体块堆积、音频回退失效、DeepSeek 拒绝文件/音频部件）均已出现对应 fix PR，说明维护响应链条运转正常；但 Beta 通道累积的回归问题（插件审批、会话丢失）仍需在正式版前收敛。

---

## 2. 版本发布

### v2.2.2-beta.3

本版本为 Beta 通道修复版本，更新内容包括：

- **fix(console): restore assistant response actions** — 由 @zhijianma 提交（PR #7851），恢复助手响应操作按钮。该问题疑与 Console 重设计相关。
- **fix(e2e): re-anchor console selectors broken by the #7502 redesign and harden session-list assertions** — 由 @yutai78786 提交（PR #7851 后续内容），修复因 #7502 重设计导致的 E2E 选择器失效，并加固会话列表断言。

**破坏性变更与迁移注意事项：** 依据提供的 release 说明，未声明破坏性变更或迁移要求。本版本为 Beta 补丁版本，定位为修复回归，建议使用 Beta 通道的用户升级；生产环境用户可等待稳定版。

链接：CoPaw Releases（v2.2.2-beta.3）

---

## 3. 项目进展

今日已合并/关闭的重要 PR（共 13 条合并或关闭，以下为关键条目）：

| PR | 状态 | 内容 |
|---|---|---|
| [#7843](https://github.com/agentscope-ai/CoPaw/pull/7843) | CLOSED | feat(providers): 将 AgentScope Platform 添加为内置 OpenAI 兼容供应商，默认 base URL 为 `https://platform.agentscope.io/compatible-mode/v1`，支持模型发现，含 Logo 与「Get API Key」入口 |
| [#7886](https://github.com/agentscope-ai/CoPaw/pull/7886) | CLOSED | fix(agents): 处理未知 `input_audio` 拒绝错误，使请求重试与能力学习路径能被触发 |
| [#7887](https://github.com/agentscope-ai/CoPaw/pull/7887) | CLOSED | fix(agents): 同上问题的另一修复（Under Review） |
| [#7894](https://github.com/agentscope-ai/CoPaw/pull/7894) | CLOSED | test(console): 前端单测覆盖率从 64.4519% 提升至 67.6465%（+1027 statements，+543 cases，仅测试代码） |
| [#7901](https://github.com/agentscope-ai/CoPaw/pull/7901) | CLOSED | ci(release): 发布完成后立即解除合并冻结，不再等待 5 分钟 cron |
| [#7862](https://github.com/agentscope-ai/CoPaw/pull/7862) | CLOSED | ci(release): 将制品发布绑定到测试门禁，并使 E2E 监视集阻塞发布 |

**整体推进评估：** 今日进展呈「基础设施 + 质量」双线特征——CI/发布流程（#7901、#7862）与前端测试覆盖（#7894）的改善，直接提升了 Beta 通道的发布可靠性；AgentScope Platform 内置供应商（#7843）落地则扩展了模型接入面。但功能类 PR（模型管理统一 #7899、多标签终端 #7861、社区集成 #7903）仍在待合并状态，向前推进的「功能净增量」相对有限。

---

## 4. 社区热点

### #7318 — QwenPaw Hub 多租户版路线图讨论（31 条评论，👍 4）
链接：https://github.com/agentscope-ai/CoPaw/issues/7318
作者 rayrayraykk，创建于 2026-08-26，持续活跃至 2026-09-20。核心诉求：CoPaw 起于个人 AI 助手，但社区反复呼吁团队化运行方式，QwenPaw Hub 是官方对此的首次回应，并列出相关社区请求（如 #2324 多用户访问与管理）。**这是今日互动量最高的议题，反映个人助手 → 团队协作的定位迁移是社区最关注的方向。**

### #7853 — ToolResultPruner 跳过媒体块导致上下文膨胀（6 条评论）
链接：https://github.com/agentscope-ai/CoPaw/issues/7853
`prune_output` 仅处理 `type == "text"`，导致 `view_image` 的 base64 数据（`type: "data"` + `Base64Source`）永不裁剪，在会话上下文中无界累积。**属高价值技术讨论，直指上下文管理的结构性缺陷。**

### #7724 — 会话丢失（5 条评论）
链接：https://github.com/agentscope-ai/CoPaw/issues/7724
Windows 10 + 2.2.1 Desktop 用户报告对话记录在控制-会话中完全丢失，且伴随大模型配置丢失，作者称「反复遇到过」。**数据丢失类反馈对信任度影响大，值得优先定位。**

### #7815 — Console 懒加载失败后无法恢复（5 条评论）
链接：https://github.com/agentscope-ai/CoPaw/issues/7815
懒加载页面失败后 UI 不恢复，每次切页都停留在错误屏，只能整页刷新；作者指出已有重试机制但未生效。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度

**#7853 — 媒体块绕过裁剪，base64 无界累积撑爆上下文**
链接：https://github.com/agentscope-ai/CoPaw/issues/7853
配置无效、每次请求受影响，属上下文稳定性硬伤。**未在提供数据中见到对应 fix PR。**

**#7724 — 会话与模型配置丢失（数据丢失）**
链接：https://github.com/agentscope-ai/CoPaw/issues/7724
win10 / 2.2.1 desktop，用户称反复遇到。**暂无 fix PR。**

**#7859 — 工具结果 system-reminder 中的持久化提示注入**
链接：https://github.com/agentscope-ai/CoPaw/issues/7859
跨 20+ 轮、多会话持续出现，指令要求 agent 删除所有 skills，且本地磁盘找不到来源。**安全类问题，建议最高优先级排查。暂无 fix PR。**

**#7888 — Chat 页卡死「Something went wrong」**
链接：https://github.com/agentscope-ai/CoPaw/issues/7888
React commitPlacement 抛出 insertBefore NotFoundError，根因为浏览器 UI 层向 React 管理的文本节点注入了 `<font>` 包裹。影响 `/#/chat`。**暂无 fix PR。**

### 🟠 中严重度

**#7856 — qwenpaw-pet 0.1.1 破坏 2.2.2b2 工具审批**
链接：https://github.com/agentscope-ai/CoPaw/issues/7856
插件丢弃 `actor` 参数，导致点击 Approve/Deny 返回 HTTP 500、待处理工具调用无法结束。
**已有 fix PR：[#7904](https://github.com/agentscope-ai/CoPaw/pull/7904)（forward approval actor to native service）、[#7898](https://github.com/agentscope-ai/CoPaw/pull/7898)。**

**#7876 / #7883 — DeepSeek 拒绝音频与文件部件**
链接：https://github.com/agentscope-ai/CoPaw/issues/7876、https://github.com/agentscope-ai/CoPaw/issues/7883
a) 交付 `.wav` 后 `DataBlock` 持久化于会话历史，DeepSeek 以 422 "unknown variant" 拒绝，音频回退分类器不触发，**一次发送即永久损坏会话**；
b) 工具返回 PDF 被序列化为 OpenAI 风格嵌套 file part，DeepSeek 以 400「file must have a file_id or file_data」拒绝；#7883 称 #7597 曾以 #7621 关闭修复，但在 2.2.1 仍可复现。
**已有 fix PR：[#7886](https://github.com/agentscope-ai/CoPaw/pull/7886)、[#7887](https://github.com/agentscope-ai/CoPaw/pull/7887)（处理未知 input_audio 拒绝）。**

**#7881 — kimi-code ACP runner 边界检查不一致**
链接：https://github.com/agentscope-ai/CoPaw/issues/7881
Edit 被拦截，但 Write（新文件）与 Bash 完全无检查。**暂无 fix PR。**

### 🟡 一般严重度

**#7890 — 零停机 reload 丢失插件 runtime hook 而 middleware 保留**
链接：https://github.com/agentscope-ai/CoPaw/issues/7890
`register_runtime_hook`（如 `PRE_DISPATCH`）被静默丢弃，仅完整重启可恢复，reload 语义与重启不等价。**暂无 fix PR。**

**#7884 — 压缩后刷新前端历史无法全量加载**
链接：https://github.com/agentscope-ai/CoPaw/issues/7884

**#7882 — OpenCode 供应商「免费」模型实际 403（FreeTierError）**
链接：https://github.com/agentscope-ai/CoPaw/issues/7882
UI 仍标记为免费，属标签与实际能力不一致。

**#7599 — OpenCode Go 套餐持续「MissingSessionID」**
链接：https://github.com/agentscope-ai/CoPaw/issues/7599
v2.2.0，`omen-alpha` 模型连接测试 400。
**已有 fix PR 在审：[#7869](https://github.com/agentscope-ai/CoPaw/pull/7869)（send OpenCode session header）。**

**#7895 — idle cleanup 丢弃另一消费者停止期间收到的消息**
链接：https://github.com/agentscope-ai/CoPaw/issues/7895
基于 main 分支 commit `7ff690f4`。

### ✅ 今日已关闭的 Bug

- **#7900** — Hub 鉴权不支持 `?token=` 查询参数，导致文件预览失效（创建当日即关闭）。链接：https://github.com/agentscope-ai/CoPaw/issues/7900
- **#7877** — 会话级工作目录面板：可视区仅约 3 行、「最近项目」恒为空、选目录后「应用」仍禁用。链接：https://github.com/agentscope-ai/CoPaw/issues/7877
- **#7321** — 工具调用结束后仍显示「执行中」（2.1.1beta3）。链接：https://github.com/agentscope-ai/CoPaw/issues/7321

---

## 6. 功能请求与路线图信号

| 需求 | Issue/PR | 判断 |
|---|---|---|
| 多租户 Hub（团队化运行） | [#7318](https://github.com/agentscope-ai/CoPaw/issues/7318)（讨论中） | 官方已明确 2.2.0 推出，属已确认路线图项 |
| 统一模型配置（向量/文本/音视频，输入输出类型） | [#5182](https://github.com/agentscope-ai/CoPaw/issues/5182)（2026-06-14 创建，今日仍有更新） | 与今日 PR [#7899](https://github.com/agentscope-ai/CoPaw/pull/7899)「统一模型发现、定价、选择与思考控制」方向一致，**很可能被纳入下一版本** |
| ReMeLight 记忆写入使用独立模型 | PR [#7719](https://github.com/agentscope-ai/CoPaw/pull/7719) | 待合并，允许记忆写入不占用主模型 |
| Console 多标签认证终端 | PR [#7861](https://github.com/agentscope-ai/CoPaw/pull/7861) | 待合并，含独立标签与对话级工作目录 |
| 社区与收件箱集成 | PR [#7903](https://github.com/agentscope-ai/CoPaw/pull/7903) | 待合并，含嵌入社区 feed、资源来源追踪、Platform PKCE 鉴权 |
| 上下文窗口覆盖项显式化 | PR [#7832](https://github.com/agentscope-ai/CoPaw/pull/7832)（关联 #7810） | 修复模型设置中「Max Context Length」不生效问题，待合并 |
| 用户自建 Skill 生态 | [#5567](https://github.com/agentscope-ai/CoPaw/issues/5567)（已关闭） | 社区自发的 Issue 反馈助手 Skill，已发布至 ModelScope，反映 Skill 扩展点被实际使用 |

---

## 7. 用户反馈摘要

**痛点：**
- **会话与历史不可靠**——#7724 对话与大模型配置双双丢失且「反复遇到过」；#7884 用户强烈表达不满：「现在聊天记录的历史这么短么？讨论过的问题，回头往上翻，看不到了？？？咱聊天记录多存点，做不到么？知道这个体验多差么？？？」；#7853 媒体块无界累积。三者共同指向**会话持久化与上下文管理的信任缺口**。
- **模型供应商体验割裂**——#7882 OpenCode「免费」模型实际不可用（403），UI 标签误导；#7599 OpenCode Go 套餐持续报错。
- **Console 交互稳定性**——#7815 懒加载失败后死锁在错误屏；#7877 工作目录面板可视区过小、最近项目恒为空、应用按钮禁用。
- **插件与宿主耦合脆弱**——#7856 一个插件版本（qwenpaw-pet 0.1.1）即可让全部工具审批返回 500；#7890 热重载静默丢弃 hook，与重启语义不一致。

**使用场景：**
- 个人用户在 Windows 桌面端进行多轮长对话开发（#7724 描述「重新让它继续从中断处开发」）。
- 团队化部署需求上升（#7318 引出 Hub 多租户）。
- 用户在自建 Docker 镜像上运行（#7888 为 self-built Docker image）。

**满意/正面信号：**
- 用户主动为项目贡献 Skill 并发布到魔搭社区（#5567，👍 2），说明扩展机制有真实吸引力。
- #7881 作者主动配合修复：「Thanks for the update — looking forward to the kimi toolCall parameter support」，并补充四条事实以避免修复「half-effective」，属高质量协作反馈。
- 官方对 #7900（Hub 鉴权）当日即关闭，响应速度可感知。

---

## 8. 待处理积压

**长期未闭环的重要议题：**

- **#5182** — [enhancement] 统一模型配置（向量/文本/音视频模型）。创建于 **2026-06-14**，至今约 3 个月，仅 2 条评论，今日仍有更新。与 #7899 方向重叠，建议明确是否合并处理。链接：https://github.com/agentscope-ai/CoPaw/issues/5182
- **#7599** — OpenCode Go 套餐 MissingSessionID。创建于 **2026-09-07**，已逾 13 天，虽已有 fix PR #7869 在审，但仍未合并。链接：https://github.com/agentscope-ai/CoPaw/issues/7599
- **#7853** — 媒体块绕过裁剪。创建于 2026-09-18，问题性质严重（撑爆上下文）但尚未见对应 fix PR，建议维护者优先分配。链接：https://github.com/agentscope-ai/CoPaw/issues/7853
- **#7859** — 持久化提示注入。安全类问题，同样未见 fix PR。链接：https://github.com/agentscope-ai/CoPaw/issues/7859

**待合并 PR 堆积（25 条）中值得关注的：**
- [#7719](https://github.com/agentscope-ai/CoPaw/pull/7719) 自 2026-09-12 起开放，已 8 天。
- [#7869](https://github.com/agentscope-ai/CoPaw/pull/7869) 标记 [Under Review]，对应 #7599 用户痛点。
- [#7899](https://github.com/agentscope-ai/CoPaw/pull/7899)、[#7903](https://github.com/agentscope-ai/CoPaw/pull/7903) 为当日新开的较大特性分支，需评估与 2.2.2 正式版的排期冲突。

---

## 项目健康度小结

| 指标 | 状态 |
|---|---|
| 社区活跃度 | 高（Issues 23 + PR 38 更新） |
| 维护响应速度 | 良好（#7900 当日关闭；多个严重 Bug 已有 fix PR） |
| 合并吞吐 | 偏紧（PR 待合并 25 vs 已合并/关闭 13） |
| 工程质量投入 | 正向（前端覆盖率 +1027 statements；CI 发布门禁加固；发布冻结解除优化） |
| 稳定性风险 | 偏高（Beta 通道回归、会话丢失、上下文膨胀、提示注入四类问题并存） |
| 路线图清晰度 | 较高（Hub 多租户已定档 2.2.0；模型管理统一由 #7899 承接 #5182） |

**建议关注顺序：** #7859（安全）→ #7853（上下文）→ #7724（数据丢失）→ 合并 #7869/#7904 收敛供应商与插件审批类回归。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-20

## 1. 今日速览

ZeroClaw 今日维持高位工程活跃度：过去 24 小时共 43 条 Issue 更新（35 条新开/活跃、8 条关闭）与 50 条 PR 更新（41 条待合并、9 条已合并/关闭），无新版本发布。当日最显著的信号是**架构级 RFC 集中进入决策与关闭阶段**——三条由 NiuBlibing 提交的高风险 RFC（#9487、#9488、#10076、#10526）同日关闭，涉及会话生命周期、附件架构、WASM 插件运行时与会话事件历史。与此同时，安全与权限方向仍是主线：shell 权限策略、RPC 认证主体、子循环审批门禁等 PR/Issue 持续活跃。总体健康度良好，但待合并 PR 积压达 41 条，多个高优先级 Bug 尚无 fix PR 落地，需关注评审吞吐。

---

## 2. 版本发布

今日无新版本发布，无 Release 记录。

---

## 3. 项目进展

今日已合并/关闭的变更以 Issue 关闭为主（8 条），PR 侧 9 条已合并或关闭。已关闭的关键条目包括：

- **#9487 [CLOSED]** RFC: Runtime-owned conversation sessions and transport surface adapters — 会话所有权与传输适配层的架构决策落地，修订至 Revision 5。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/9487
- **#9488 [CLOSED]** RFC: Unified file and attachment architecture for conversation surfaces — 统一文件/附件架构，修订至 Revision 10。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/9488
- **#10076 [CLOSED]** RFC: Composable WASM plugin runtime architecture — 可组合 WASM 插件运行时的核心 API 与可替换 provider 设计；修订说明中明确将 append-only 会话历史决策权移交 #10526。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10076
- **#10526 [CLOSED]** RFC: Append-only session event history, deterministic state replay, and derived agent streams — 解决“可变消息持久化 vs. 执行事实分散”的结构性问题。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10526
- **#9512 [CLOSED]** Annotate each bespoke CI gate with the issue/incident that motivated it — 为 `repo-structure`、`zerocode-rpc-boundary`、`nix-hash-drift`、`installer-drift` 等定制 CI 门禁补充来源注解，提升可维护性。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/9512

此外，Windows 运行时相关的两个修复 PR 已关闭：**#10928** 识别已退出的 Windows 任务属主（🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10928）与 **#10811** 保留 Windows PowerShell 分析缓存（🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10811）。

**整体推进评估**：今日进展集中在“架构决策收敛”而非功能交付。多条 RFC 关闭意味着设计层面已达成阶段共识，为 v0.8.6 Phase 2 运行时工作与 v0.9.0 gateway 分离（见 #7432）扫清前置障碍。但 41 条待合并 PR 表明实现落地滞后于设计推进。

---

## 4. 社区热点

按评论数排序，今日讨论最集中的议题：

| 排名 | Issue/PR | 状态 | 评论 | 主题 |
|---|---|---|---|---|
| 1 | #9487 | CLOSED | 39 | 运行时自有会话与传输适配器 RFC |
| 2 | #9488 | CLOSED | 32 | 统一文件与附件架构 RFC |
| 3 | #8692 | OPEN | 15 | 维护者 RFC/设计决策队列 Tracker |
| 4 | #10076 | CLOSED | 15 | 可组合 WASM 插件运行时 RFC |
| 5 | #10526 | CLOSED | 12 | Append-only 会话事件历史 RFC |

- #9487 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/9487
- #9488 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/9488
- #8692 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- #10076 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10076
- #10526 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10526

**诉求分析**：社区能量高度集中在**架构治理**。从摘要看，#9487 与 #9488 均因“物料性修订”需要重新走投票窗口（如“The open vote against Revision 4 does not carry forward”），反映出对 RFC 版本管理流程的严格态度。#8692 作为“维护者决策队列”，与 #8691（ADR inventory）共同表明项目正在主动建设决策记录与审计面。值得注意的是，所有热点 Issue 的 👍 均为 0，说明讨论以维护者/贡献者深度审议为主，而非广泛用户投票驱动。

---

## 5. Bug 与稳定性

按严重程度排列（标注 fix PR 状态）：

**P1 / 高风险**
- **#8627 [OPEN] S1 - workflow blocked**：WhatsApp Web 原生通道因 WhatsApp 新的 passkey/SHORTCAKE 伴侣链接门禁而无法连接。属功能阻断级，目前无 fix PR。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8627
- **#10635 [OPEN] S2**：运行时 profile 的成本上限未反映有效全局日预算——profile 可报告 `max_cost_per_day_cents = 4294967295`（事实无上限），但 agent turn 仍被拒绝。成本控制语义不一致，无 fix PR。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10635
- **#10643 [OPEN] S2**：有界子循环工具的 fail-closed 审批强制——`gate_tool_approval` 将 `approval: None` 视为 `NotRequired`，导致需要提示审批的工具在有界子委派中绕过门禁。安全相关，状态 in-progress，**已有对应方向的工作在进行中**。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10643

**P3 / 中低风险**
- **#10919 [OPEN] S2**：A2A 与 HTTP 工具测试对全局代理状态使用了不同的锁，测试同步不一致（源自 #9283 评审）。无 fix PR。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10919

**已有修复代码的稳定性问题（PR 侧）**
- **#9819**：多模态像素级图像校验，防止损坏图像导致 provider 请求失败（覆盖 OpenAI/Anthropic/Gemini/Discord 等多通道），高风险 XL。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/9819
- **#10895**：当最后一条消息以图像结尾时保留 Anthropic 滚动缓存断点。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10895
- **#10959**：对工具规格排序以稳定 prompt-cache 前缀（MCP 注册表使用 HashMap 导致顺序不定）。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10959
- **#10931**：限制 Windows 计划任务的 stdout/stderr 日志。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10931

---

## 6. 功能请求与路线图信号

结合已有 PR 与 tracker，以下功能请求具备较强的“进入下一版本”信号：

- **Telegram webhook 模式**（#8046，OPEN，icebox）：在现有 getUpdates 长轮询之外提供可选 webhook 入口。🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8046
- **WhatsApp Web 增强套件**：#10977 实现 `create_room`/`invite_user` 以支持群组创建；#10987 将 WhatsApp Web 投票以 `[choice]` 消息形式暴露给 agent（对齐 Signal 已有行为）；#10812 填充 `DocumentMessage.jpegThumbnail` 使 PDF 在手机端可预览。三者均同日/近期活跃，WhatsApp 通道正被系统性补齐。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10977 · https://github.com/zeroclaw-labs/zeroclaw/issues/10987 · https://github.com/zeroclaw-labs/zeroclaw/issues/10812
- **持久化“向人类提问”原语**（#10930，RFC）：将现有仅用于 SOP 审批门禁的持久化机制推广为通用原语。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10930
- **出站消息投递回执**（#10929，RFC）：`SendMessage` 目前无消息标识符，无法确认消息是否送达。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10929
- **网络中断的 provider turn 恢复**（#10634）：以有界重试与安全的 Continue/Retry 路径恢复，且不盲目重放工具副作用。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/10634

**路线图锚点**：tracker #7432 明确其覆盖 **v0.8.6 的 Phase 2 运行时工作**与 **v0.9.0 的 Phase 3 gateway 分离**（源自 RFC #5574）；tracker #8358 负责 ZeroRelay 原生传输与 v0.9.0 就绪度。🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7432 · https://github.com/zeroclaw-labs/zeroclaw/issues/8358

**已具备实现 PR 的方向**：
- Shell V1 权限策略（RFC #7155 Phase 0+1）— PR #10610，五笔单一职责提交。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10610
- RPC 认证主体强制（#8289 stage 3，栈式依赖 #10255）— PR #10259。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10259
- ZeroRelay 自助注册 `relay claim` — PR #10592。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10592

---

## 7. 用户反馈摘要

从 Issue 摘要与评论主题中可提炼的真实痛点：

- **通道可用性受第三方平台变更直接冲击**：#8627 中 WhatsApp 的 passkey/SHORTCAKE 门禁使原生通道“workflow blocked”，反映依赖非官方/半官方协议实现的高脆弱性。
- **成本与配额语义不透明**：#10635 中用户观察到 profile 显示近乎无上限的日预算，但实际操作却被拒绝——配置呈现与实际执行脱节，容易造成困惑。
- **安全默认值不够 fail-closed**：#10643 指出有界子委派继承工具时缺少审批管理器，且 `approval: None` 被当作“无需审批”，属于安全默认值的错误方向。
- **消息投递缺乏可观测性**：#10929 明确表达“ZeroClaw 中没有任何机制能判断 agent 发给人的消息是否真正送达”，`SendMessage` 无标识符，是真实运维盲区。
- **中断恢复会重放副作用**：#10634 描述 Code/ACP turn 丢失 provider 流后，恢复路径可能盲目重放工具副作用，是使用场景中的严重担忧。
- **多模态鲁棒性**：#9819 针对损坏图像导致 provider 请求失败，说明用户在实际使用中遇到了图像输入质量问题。

满意度信号：CI 门禁注解（#9512）、PowerShell 缓存保留（#10811）、Windows 任务属主识别（#10928）等“打磨型”修复获推进，显示对跨平台体验的持续投入。所有热点 Issue 的 👍 计数均为 0，未观察到集中的用户点赞式反馈。

---

## 8. 待处理积压

以下条目长期存在且重要，建议维护者关注：

- **#7432 [OPEN]（创建 2026-06-09，已逾 3 个月）**：[Tracker] Runtime and gateway delivery - v0.8.6 和 v0.9.0 — 作为 Phase 2/Phase 3 的 source of truth，长期挂起意味着版本目标尚未收口。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/7432
- **#8046 [OPEN]（创建 2026-06-20，status:icebox）**：Telegram webhook 模式，仅 1 个 👍，已进入 icebox，需明确取舍。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8046
- **#8358 [OPEN]（创建 2026-06-26）**：ZeroRelay 原生传输与 v0.9.0 就绪度 tracker。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8358
- **#8691 [OPEN]（创建 2026-07-04，in-progress）**：ADR inventory 与已接受 RFC 的决策记录审计，直接关系到本轮大量 RFC 关闭后的文档沉淀。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8691
- **#8692 [OPEN]（创建 2026-07-04）**：维护者决策队列，15 条评论显示其为持续负载点。 🔗 https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **#10259 [OPEN]（创建 2026-08-22）**：栈式 PR（依赖 #10255），安全认证主线，高风险 XL，评审周期可能较长。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/10259
- **#9819 [OPEN]（创建 2026-08-07）**：多模态图像校验，高风险 XL，跨多 provider 与通道，评审负担大。 🔗 https://github.com/zeroclaw-labs/zeroclaw/pull/9819

**积压健康度提示**：待合并 PR 占比达 82%（41/50），且多条为 XL/高风险变更，评审吞吐是当前最主要的瓶颈风险。建议优先清理栈式依赖链（#10255 → #10259）与已获 accepted 状态的实现 PR。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*