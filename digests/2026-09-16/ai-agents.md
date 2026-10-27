# OpenClaw 生态日报 2026-09-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-16 12:07 UTC

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

# OpenClaw 项目日报 · 2026-09-16

## 1. 今日速览

OpenClaw 今日保持极高活跃度：过去 24 小时共 500 条 Issue 更新（新开/活跃 319，关闭 181）、500 条 PR 更新（待合并 233，合并/关闭 267），合并关闭量与新增量基本持平，说明维护团队在高流量下仍保持吞吐。无新版本发布，工作重心集中在 2026.9.x 系列暴露出的稳定性问题（Gateway 内存泄漏、子进程僵尸堆积、更新失败）以及大量 P1/P0 级别的会话状态与消息投递修复。当日最集中的动作来自核心维护者 steipete 的批量 PR（依赖刷新、Gateway 事件循环阻塞修复、Doctor 迁移保留历史等），显示下一版本很可能以「稳定性回归修复」为主题。整体健康度评估：**修复节奏健康，但底层资源管理（内存/子进程/锁）类缺陷密集，稳定版 2026.9.3–2026.9.4 的升级路径仍需关注**。

---

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。需要留意的是，Issue 区多次提到 2026.9.3 与 2026.9.4 的升级/迁移问题（见第 5 节），可作为下一版本发布前的风险清单。

---

## 3. 项目进展

今日更新中含多项已被合并/关闭的 PR，覆盖更新器、会话状态、文档与性能方向：

- **修复旧版更新器提前报告成功**：`fix(update): finish deferred migrations from older updaters`（[PR #149913](openclaw/openclaw/pull/149913)），针对经 2026.9.2 及更早版本发起的更新在候选版本尚未完成延迟 Doctor 迁移时就报成功的问题。
- **Doctor 迁移保留会话历史**：`fix: retain session history through Doctor migrations`（[PR #149741](openclaw/openclaw/pull/149741)），修复保留历史丢失、旧式 byte-only 导入导航损坏及 legacy main-agent 会话修复被拒绝的问题；标签含 `merge-risk: compatibility` 与 `merge-risk: session-state`。
- **阻止会话列表读取阻塞 Gateway**：`fix: keep conversation list reads from blocking the gateway`（[PR #149971](openclaw/openclaw/pull/149971)），解决冷启动/失效会话列表同步加载完整会话清单拖慢 Gateway 请求与流式事件的问题，直接对应 #119720 类事件循环阻塞诉求。
- **不完整回复流拒绝**：`fix(ai): reject incomplete compatible reply streams`（[PR #149842](openclaw/openclaw/pull/149842)，Closes #149854），避免被中断的回复被当作完整文本呈现或留下未使用的 sealed tool calls。
- **PDF 部分抽取显式暴露**：`fix(pdf): surface partial document extraction`（[PR #131922](openclaw/openclaw/pull/131922)，Closes #131910），修复预算截断后内容被误显示为完整、以及后续页被错误拒绝的问题。
- **Windows 状态根保留**：`fix(state): preserve Windows roots when opening agent workers`（[PR #150035](openclaw/openclaw/pull/150035)）。
- **CLI 防误操作**：`fix(cron): reject ambiguous exact-name lookups`（[PR #149958](openclaw/openclaw/pull/149958)）、`fix(cli): reject unknown proxy query presets`（[PR #136158](openclaw/openclaw/pull/136158)）。

**推进评估**：今日变化偏「修复与打磨」而非新功能扩张，方向集中在更新可靠性、会话状态一致性与 Gateway 响应性——这与当前 P0/P1 Issue 的分布高度吻合。

---

## 4. 社区热点

今日讨论最活跃的条目集中在**运行时资源泄漏与事件循环阻塞**，评论区普遍要求明确修复时间线：

| 条目 | 热度 | 诉求 |
|---|---|---|
| [#97616](openclaw/openclaw/issues/97616) 未回收的 hook/tool 子进程导致僵尸堆积与运行时退化 | 30 评论 | 回归问题，P1，`impact:crash-loop`、`impact:message-loss`，长期未闭环 |
| [#91588](openclaw/openclaw/issues/91588) Gateway 内存泄漏 RSS 350MB→15.5GB | 25 评论 | 反复 OOM 崩溃，P1，作者已在 6 月报告、至今仍在更新 |
| [#119720](openclaw/openclaw/issues/119720) 同步 agent 持久化与 transcript 维护阻塞 Gateway 事件循环 | 20 评论 | 规模化场景下的调度阻塞，已被评为 🦞 diamond lobster，且提到 #140231 已移除不必要的 overflow-recovery 全量操作 |
| [#111897](openclaw/openclaw/issues/111897) 同一 session lane 两个并发 run 均完成并投递重复回复 | 19 评论 | 负载下的重复/冗余投递，与 #54488 lane starvation 关联 |
| [#144911](openclaw/openclaw/issues/144911) MCP server 初始化超时导致 Gateway 崩溃 | 18 评论 | 已获 `clawsweeper:queueable-fix`、`fix-shape-clear`，是最接近可修复状态的崩溃类问题 |

**分析**：热门话题并非功能之争，而是「稳定性债务」——资源回收（子进程、内存、临时 DB）与调度并发（session lane、事件循环）构成核心矛盾；同时多条热点已被标注可排队修复（`queueable-fix`），说明它们已具备清晰修复路径。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否已有可推进的修复信号）：

**P0 / 发布阻断**
- [#146394](openclaw/openclaw/issues/146394) 更新失败：`global-install-failed`（2026.9.3），标签 `impact:ux-release-blocker`、`maturity:stable`，11 评论，仍 OPEN。
- [#144739](openclaw/openclaw/issues/144739) 2026.9.3 → 2026.9.4 npm 更新时以 2026.9.3 运行于 schema-17 候选状态，`clawsweeper:no-new-fix-pr`，7 评论，仍 OPEN。
- [#115642](openclaw/openclaw/issues/115642) 订阅认证的计费冷却期长于实际故障时长，建议基于探针恢复、缩短 usage-limit TTL、增加手动重置命令，仍 OPEN。

**P1 / 崩溃与消息丢失/会话状态**
- [#97616](openclaw/openclaw/issues/97616) 僵尸进程堆积（回归，30 评论，最高热度）。
- [#91588](openclaw/openclaw/issues/91588) Gateway 内存泄漏至重复 OOM（25 评论）。
- [#119720](openclaw/openclaw/issues/119720) 事件循环阻塞（20 评论）。
- [#111897](openclaw/openclaw/issues/111897) 同 lane 并发重复投递（19 评论）。
- [#144911](openclaw/openclaw/issues/144911) MCP 初始化超时崩溃 —— **已有 `queueable-fix` / `fix-shape-clear`，最接近合入**。
- [#139847](openclaw/openclaw/issues/139847) 回复运行中到达的消息被丢弃，报 `Reply operation has no active tool authority snapshot`（2026.9.2 回归）—— **同样具备 `queueable-fix` / `fix-shape-clear`**。
- [#136311](openclaw/openclaw/issues/136311) memory-core 每次启动重新获取 reindex 锁，索引无法重建，累积 19GB `memory-reindex-*` 临时库。
- [#128140](openclaw/openclaw/issues/128140) `memory_search` 工具固定 15s 超时而 CLI `openclaw memory search` 正常。
- [#134925](openclaw/openclaw/issues/134925) ARM64/Pi 上每轮 agent turn 主线程 ~100% CPU。
- [#146004](openclaw/openclaw/issues/146004) 子代理完成后触发无频道 dashboard heartbeat turn（2026.9.3 回归）。

**已关闭（正向信号）**
- [#148866](openclaw/openclaw/issues/148866) `gateway.bind=lan` 下 Gateway 永久重启循环（2026.9.1 + 2026.9.4，Ubuntu/systemd，P0）——**CLOSED**。
- [#145929](openclaw/openclaw/issues/145929) 中断自更新后 auth profile 注销/写入永久失败于 `lock-may-be-busy`（P0）——**CLOSED**。
- [#145152](openclaw/openclaw/issues/145152) 卡死会话恢复将 force-clear 报为 abort、未命名 run/owner、按 session id 释放回复 lane（2026.7.1）——**CLOSED**。
- [#118018](openclaw/openclaw/issues/118018) 过期子代理完成被投递到已被替换的请求方生命周期 ——**CLOSED**。
- [#31331](openclaw/openclaw/issues/31331) Docker + Sandbox 无法 workspaceAccess（👍 4）——**CLOSED**。

---

## 6. 功能请求与路线图信号

今日活跃的功能类 Issue：

- [#44309](openclaw/openclaw/issues/44309) 为 A2A 交接增加单向 dispatch 模式，避免 reply-back ping-pong（👍 1，P2，stale，`needs-product-decision`）。
- [#51441](openclaw/openclaw/issues/51441) 在 `session_status` 与 agent runtime 中暴露解析后的后端模型（LiteLLM 场景只看到 alias 而非真实模型，👍 1，`clawsweeper:no-new-fix-pr`）。
- [#86881](openclaw/openclaw/issues/86881) 无 AI harness 的 Gateway-lite 模式（确定性部署，涉及 `needs-security-review`）——**今日已 CLOSED**。
- [#49259](openclaw/openclaw/issues/49259) Dashboard Sessions 中清理陈旧孤儿会话（可配置年龄 + 频道已删除，P3）。

**纳入下一版本的可能性判断**：以上功能类请求均停留在 `needs-product-decision` 或 `no-new-fix-pr` 状态，**未见配套实现 PR**；结合当前 P0/P1 稳定性债务的高密度，短期内更可能优先合入 #144911、#139847 这类已带 `queueable-fix` / `fix-shape-clear` 标签的修复，而非新功能。

今日 PR 侧可视为"准落地信号"的能力改进：
- [PR #149882](openclaw/openclaw/pull/149882) 支持 root-owned 前台 FreeBSD 更新路径（含 `merge-risk: security-boundary`，仍 `needs proof`）。
- [PR #150028](openclaw/openclaw/pull/150028) 修复 Telegram typed slash command 回复照片时丢失被回复消息与照片。
- [PR #147886](openclaw/openclaw/pull/147886) 让 Feishu 接受文档所述的 `markdown.tables` 配置（当前会阻断 gateway 启动，`merge-risk: message-delivery`，等待作者）。
- [PR #149973](openclaw/openclaw/pull/149973) 路由导航间保留 incognito 草稿与附件。
- [PR #149181](openclaw/openclaw/pull/149181) exec approvals 目标切换前对 dirty 状态做确认（Closes #127500）。

---

## 7. 用户反馈摘要

从 Issue 与评论中提炼的真实痛点：

- **长时间运行的稳定性是最大不满来源**：用户提供精确量化（RSS 350MB→15.5GB / 2–3 天、19GB 孤儿临时 DB、80+ 分钟 lane 阻塞），显示这是生产部署而非实验室问题。
- **升级路径缺乏安全感**：多位用户在 2026.9.3/2026.9.4 之间反复遇到 npm 全局更新失败与迁移未完成即报成功；#123799 反映受影响生产部署在 #123706 关闭后**需要明确的安全升级/回移指南**。
- **平台差异明显**：ARM64/Raspberry Pi 用户报告每轮 turn 主线程 ~100% CPU；Ubuntu/systemd 用户报告 `gateway.bind=lan` 重启循环；Docker + Sandbox 用户长期无法 workspaceAccess。
- **渠道与模型桥接摩擦**：iMessage 消息被重复投递 2–3 次且去重未生效（[#143632](openclaw/openclaw/issues/143632)）；LiteLLM 用户看不到真实后端模型；Codex 原生订阅出现每周仅 2% 用量却被拒的多日封锁（[#123009](openclaw/openclaw/issues/123009)）。
- **小摩擦但高可见**：iOS/macOS CLLocationManager 每秒重建导致 TCC 权限疯狂弹窗（[#94147](openclaw/openclaw/issues/94147)，已 CLOSED，👍 0 但 8 评论，中文报告）。
- **正向信号**：多个长期悬而未决的高赞问题今日关闭（#31331 👍4、#148866 P0 重启循环、#145929 P0 auth 锁），说明维护者在集中清理历史顽疾。

---

## 8. 待处理积压

长期未响应或反复延期的重要条目（按陈旧度与严重度）：

| 条目 | 创建 | 状态与关注点 |
|---|---|---|
| [#31331](openclaw/openclaw/issues/31331) Docker 安装 + Sandbox 无法 workspaceAccess | 2026-03-02 | 跨约 6 个月，👍 4（本批最高），今日刚 CLOSED，但同类环境问题值得跟踪是否真正修复 |
| [#44309](openclaw/openclaw/issues/44309) A2A 单向 dispatch 模式 | 2026-03-12 | `stale` + `needs-product-decision`，近半年无产品结论 |
| [#49259](openclaw/openclaw/issues/49259) 清理陈旧孤儿会话 | 2026-03-17 | `stale`，P3 |
| [#51441](openclaw/openclaw/issues/51441) 暴露解析后的后端模型 | 2026-03-21 | `stale` + `needs-product-decision`，LiteLLM 用户长期受影响 |
| [#53628](openclaw/openclaw/issues/53628) 安装 skill 时 `${XDG_CONFIG_HOME}` 未被解析 | 2026-03-24 | `clawsweeper:linked-pr-open`，但仍在 OPEN |
| [#86881](openclaw/openclaw/issues/86881) Gateway-lite 模式（无 AI harness） | 2026-05-26 | 今日 CLOSED，但曾是 `needs-security-review` + `needs-product-decision` 的路线图议题 |
| [#91588](openclaw/openclaw/issues/91588) Gateway 内存泄漏 350MB→15.5GB | 2026-06-09 | 已近 3 个月，25 评论，`no-new-fix-pr` + `needs-maintainer-review`——**建议最高优先级排期** |
| [#97616](openclaw/openclaw/issues/97616) 子进程僵尸堆积 | 2026-06-29 | 同上，`no-new-fix-pr` + `needs-info`，30 评论却仍缺修复 PR |
| [#123799](openclaw/openclaw/issues/123799) Codex compact 404 的安全升级/回移指南 | 2026-08-14 | 生产部署在等运维指引，属文档/流程类低成本可闭环项 |

**给维护者的提示**：#91588 与 #97616 合计 55 条评论、跨越 2.5 个月以上，且直接导致崩溃循环与消息丢失，目前已具备清晰复现描述，是当前性价比最高的两项投入；同时 #136311（reindex 锁）与 #128140（memory_search 超时）构成同一条 memory 子系统问题线，建议合并评估。

---

*数据来源：github.com/openclaw/openclaw，统计窗口 2026-09-15 至 2026-09-16。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**统计窗口**：2026-09-15 至 2026-09-16
**样本**：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw（共 13 个）

---

## 1. 生态全景

个人 AI 助手开源生态已明显分化为**核心参照项目**与**派生/平行实现**两层结构：OpenClaw 以每日 1000 条 Issue+PR 更新的体量独占第一梯队，其余项目多在 1–50 条区间内运行，量级相差约 1–2 个数量级。今日生态的**主线不是功能扩张，而是稳定性债务清算**——Gateway 内存泄漏、子进程僵尸、事件循环阻塞、配置竞态、静默失败等资源与一致性问题横跨几乎所有活跃项目。同时，**"零配置接入"与"可插拔网关/凭证集中化"成为两组并行的架构演进方向**（NanoClaw、Hermes Agent、CoPaw 均有对应落地）。整体判断：生态已越过"能不能跑"的阶段，进入"能不能在生产环境长期稳定跑"的工程化门槛期。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃 / 关闭） | PR 更新（待合并 / 合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（319 / 181） | 500（233 / 267） | 无 | 修复节奏健康，但 P0/P1 资源管理缺陷密集，升级路径有风险 |
| **NanoBot** | 6（5 / 1） | 18（10 / 8） | **v0.3.5** | 版本收尾顺利，缺陷当日闭环，响应链路健康 |
| **Hermes Agent** | 50（38 / 12） | 50（36 / 14） | 无 | 高活跃但"输入远大于输出"，净积压压力大 |
| **NanoClaw** | 7（4 / 3） | 42（27 / 15） | 无 | 功能推进快于缺陷收敛，27 条待合并为瓶颈 |
| **ZeroClaw** | 39（34 / 5） | 50（44 / 6） | 无 | 活跃度高、方向清晰，审查吞吐与并行测试稳定性是风险点 |
| **CoPaw** | 20（7 / 13） | 35（25 / 10） | 无 | 清理快、合并慢，多条高危 Bug 尚无 fix PR |
| **LobsterAI** | 9（0 / 9） | 19（1 / 18） | 无 | 积压集中清理日，健康度良好但缺新功能 |
| **PicoClaw** | 2（2 / 0） | 4（3 / 1） | 无 | 中等偏低，多条带 `stale`，高危缺陷关注度不足 |
| **Moltis** | 3（2 / 1） | 1（1 / 0） | 无 | 低活跃但结构健康，交付节奏偏慢 |
| **NullClaw** | 1（0 / 1） | 0 | 无 | 低吞吐日，当日创建当日关闭 |
| **IronClaw** | 0 | 0 | 无 | 无活动 |
| **TinyClaw** | 0 | 0 | 无 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 无 | 无活动 |

**解读**：OpenClaw 一家的 PR 吞吐（500）等于其余全部活跃项目之和的约 4 倍。第二梯队中，NanoClaw、ZeroClaw、Hermes Agent 的"待合并/已合并"比均超过 2:1，说明**审查带宽是生态性的结构性瓶颈**，而非单一项目问题。

---

## 3. OpenClaw 在生态中的定位

**规模与吞吐**：OpenClaw 单日 1000 条 Issue+PR 更新，是唯一具备"平台级社区体量"的项目——Hermes Agent、ZeroClaw、NanoClaw 合计约 188 条，仍不足其五分之一。其余项目（NanoBot、PicoClaw、Moltis、NullClaw）处于个位数至数十条量级。

**技术路线差异**：

- OpenClaw 的债务特征指向**长期运行的多进程/多会话架构**——Gateway 事件循环、session lane、子进程回收、hook/tool 生命周期、memory reindex 锁。这类问题只在**生产级长时间运行**下暴露，说明其部署形态最接近真实生产。
- NanoClaw、ZeroClaw、Hermes Agent 当前的重点是**架构抽象层重构**（可插拔网关、WASI 插件、凭证目录契约），仍处于"能力边界定义"阶段。
- LobsterAI 则呈现**下游集成与状态迁移**特征——当日多条 PR 直接涉及 OpenClaw SQLite state schema 备份与迁移（#2689、#2690），印证 OpenClaw 已成为生态的**上游状态格式参照**。

**社区规模对比**：OpenClaw 的热点 Issue 单条最高 30 条评论（#97616），而多数第二梯队项目单条热点评论数在 1–16 条之间（ZeroClaw 最高 16、NanoClaw 最高 3、PicoClaw 全部为 1）。**OpenClaw 的社区讨论深度已进入"量化复现 + 精确归因"阶段**（如 RSS 350MB→15.5GB、19GB 孤儿临时库、80+ 分钟 lane 阻塞），这是成熟用户群的特征信号。

**结论**：OpenClaw 在生态中扮演"**事实标准 + 问题先行者**"双重角色——它承受的稳定性债务，大概率将成为其余项目在规模化后遇到的同类问题，其修复方案（如 #144911 MCP 超时崩溃、#139847 消息权威快照）具有跨项目参考价值。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **资源回收与内存/进程泄漏** | OpenClaw、CoPaw、LobsterAI、ZeroClaw | OpenClaw RSS 350MB→15.5GB 与子进程僵尸堆积；CoPaw 三条路径叠加导致 OOM；LobsterAI 尝试引入执行序列化与互斥锁 |
| **并发会话状态一致性** | OpenClaw、LobsterAI、NanoBot、PicoClaw | OpenClaw 同 lane 并发重复投递（#111897）；LobsterAI per-session 序列化与 per-conversation 锁；NanoBot P1 会话消息串行化（#5792）；PicoClaw 配置缓存竞态 panic |
| **Provider 容错与故障转移** | NanoBot、ZeroClaw、Hermes Agent、Moltis | NanoBot NIM 超时未触发转移、半开探测未串行化；ZeroClaw 非流式回退未执行；Hermes Agent provider 模型传播致 HTTP 400 |
| **可插拔网关 / 凭证集中化** | NanoClaw、Hermes Agent、CoPaw | NanoClaw #3815→#3825 全套 gateway 抽象栈；Hermes `gateway.multiplex_profiles` 默认开启；CoPaw Hub 多租户（#7779） |
| **静默失败必须可见** | NanoClaw、Hermes Agent、PicoClaw、OpenClaw | NanoClaw "静默十分钟"（#3338）、快照报告成功实为符号链接（#3684）；Hermes 升级末尾打印失败（#112522）；PicoClaw SaveConfig 静默删 key（#3373） |
| **配置持久化正确性** | PicoClaw、Moltis、Hermes Agent | PicoClaw api_key 丢失与敏感缓存竞态；Moltis 自定义 OpenAI 端点 body 参数不可配（#205）；Hermes `mcp_servers.lazy` 永不生效 |
| **移动端 / 跨端入口** | NullClaw、NanoBot | NullClaw 探索 UniFFI 共享 Rust 核心（#999）；NanoBot v0.3.5 主打"终端 + WebUI 跨端续接" |
| **构建与 CI 效率** | Moltis、NanoClaw、ZeroClaw | Moltis cargo BuildKit cache mounts（#1270）；NanoClaw Bun spawnSync 挂死（#3839/#3842）；ZeroClaw 并行测试超时（#10883）与 PostgreSQL CI job blocked（#9318） |

**核心矛盾归纳**：生态共同面对的是**"自治智能体的资源边界"问题**——内存、子进程、会话 lane、缓存前缀、上下文计量，本质都是同一个命题：**当 agent 长时间自主运行时，谁来回收和约束它消耗的一切。**

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能平台（Gateway + 多 channel + memory + A2A + MCP） | 生产部署的大规模自托管用户 | 多进程 Gateway，session lane 调度，memory reindex 子系统 |
| **NanoBot** | 多端统一工作台（终端 TUI + WebUI + 聊天应用） | 需要跨终端一致体验的开发者 | 平台 wheel 打包原生 TUI（去 Bun 依赖），Dream 定时整合，provider 抽象层 |
| **Hermes Agent** | 桌面端 + CLI + dashboard 三端 | 桌面重度用户、多 profile 部署 | launchd/s6 进程管理，profile 隔离，cron 预检，插件 registry |
| **NanoClaw** | 可插拔网关 + 凭证托管 | 需要灵活 provider 组合的部署者 | Bun 运行时，Iron Proxy skill，OneCLI 抽离为可安装 skill |
| **ZeroClaw** | 运行时能力目录 + WASM 插件 + 硬件 host function | 追求架构一致性的高级用户 | Rust workspace（zeroclaw-gateway / providers / runtime），RFC 驱动治理 |
| **CoPaw** | Hub 多租户团队协作 | 团队 / 企业协作场景 | AgentScope 生态，ACP 委派，记忆插件架构，Creator 多图生成 |
| **LobsterAI** | IM 渠道协同 + OpenClaw 状态迁移 | 中文 IM 生态用户 | 网易有道背景，钉钉/IM 适配，cron 轮询服务，代理凭据管理 |
| **PicoClaw** | 轻量嵌入式 / 多协程 | 资源受限环境部署者 | Go 实现，配置安全过滤，QQ 渠道适配 |
| **Moltis** | 远程 MCP over HTTP 基础设施 | MCP 服务集成方 | Rust，McpManager 健康监控，沙箱运行 |
| **NullClaw** | 探索移动端客户端 | 早期探索阶段 | 拟采用 UniFFI 共享 Rust 核心 |

**关键分野**：一是**运行时语言分叉**（Go / Rust / Bun / Python），直接影响并发模型与资源管理策略；二是**是否自持进程管理**（OpenClaw / Hermes 自管 Gateway 与 launchd/s6，NanoBot / PicoClaw 更轻）；三是**治理模式分叉**（ZeroClaw 采用 RFC + tracker 的显式治理，OpenClaw 以高吞吐 PR 驱动）。

---

## 6. 社区热度与成熟度分层

**第一层｜超大规模、修复驱动（1 个）**
- **OpenClaw**：单日 1000 条更新，主题为"稳定性回归修复"，具备量化复现与队列化修复标签（`queueable-fix`）。**特征：规模化债务清算期。**

**第二层｜快速迭代、架构演进中（4 个）**
- **NanoClaw**（gateway 栈 6 PR 全 OPEN）、**ZeroClaw**（3 个 RFC accepted/in-progress + 44 条待合并）、**Hermes Agent**（v0.21.3 回归修复 + i18n 批次）、**CoPaw**（Hub 2.2.0 + 语音/工作台 PR）。**特征：能力边界扩张快于缺陷收敛，审查带宽受限。**

**第三层｜质量巩固、版本收尾（2 个）**
- **NanoBot**（v0.3.5 发布当日缺陷即闭环，Dream 循环与 TUI 响应同日修复）、**LobsterAI**（9 条 stale Issue + 18 条 PR 集中清理，平均挂起 5.5 个月）。**特征：以修复与打磨为主线，无新功能叙事。**

**第四层｜低吞吐、维护响应（4 个）**
- **PicoClaw**（2 Issue + 4 PR 全带 `stale`）、**Moltis**（3 Issue + 1 PR）、**NullClaw**（单条 Issue 当日开当日关）、**IronClaw / TinyClaw / ZeptoClaw**（零活动）。**特征：社区关注度不足，高危缺陷存在被长期搁置风险。**

**风险提示**：PicoClaw 的 #3373（静默删 key）与 #3374（竞态 panic）分别对应密钥丢失与运行时崩溃，但**各仅 1 条评论、0 点赞**，与 OpenClaw 同类问题 25–30 条评论形成鲜明反差——说明**社区规模直接决定缺陷的修复优先级**，这是小项目用户的实际风险。

---

## 7. 值得关注的趋势信号

**信号一：从"功能竞争"转向"运维可信度竞争"**
OpenClaw 的热点榜首均为稳定性债务（#97616、#91588、#119720），而非功能之争；Hermes Agent 用户明确质疑计费面板可信度；NanoClaw 用户对"静默失败"容忍度极低。**对开发者的启示**：在 agent 产品中，**失败可见性与状态可信度的优先级已高于新能力**，日志、可观测性、回退路径的工程投入应有独立预算。

**信号二：成本与算力预算的自动化调节成为共识需求**
NanoBot #4419（自动推理投入升级，讨论 3 个月）、#5781（Dream 迭代上限失控至 200 次工具调用）、ZeroClaw #10659（成本上限触发后进度丢失）、Hermes Agent #110912（订阅折扣路由计费异常）——**四个项目、四类场景、同一个诉求：agent 必须按需分配推理预算且行为可预期**。这是从"被动限流"走向"主动预算编排"的转折点。

**信号三：Provider 抽象层的容错语义正在被系统性补齐**
NanoBot 的"半开探测未串行化""超时未按消息文本分类"、ZeroClaw 的"声明回退未执行"、Hermes Agent 的"provider 模型传播致 400"——这些是**多 provider 架构的典型二阶问题**：第一版实现通常只覆盖 happy path，故障转移的并发与分类语义需要第二轮回填。**建议**：新项目在设计 provider 层时，应将半开探测串行化、异常文本解析、非流式回退验证纳入初始测试矩阵。

**信号四：生态开始出现"上游 / 下游"耦合**
LobsterAI 当日三条 PR 直接处理 OpenClaw SQLite state schema 的备份、迁移与回滚（#2689、#2690），说明 **OpenClaw 的状态格式已成为下游项目的集成契约**。对开发者的参考价值：若计划基于某项目构建下游，**状态 schema 的稳定性与迁移工具链应作为选型核心指标**，而非仅看功能列表。

**信号五：插件/能力分发的标准化竞争已启动**
ZeroClaw 推进 OCI 插件注册表（#7497）、WASI host function 能力门控（#8187）、从编译期 feature 迁移到运行时 WASM；NanoClaw 将 OneCLI 抽离为可安装 skill；CoPaw 有 OpenViking 记忆插件；NanoBot 有第三方主动提交的 AnySearch 集成（#5731）。**这是"接入生态"成为产品竞争力标志的信号**——能否让第三方低成本接入，将决定项目的生态位。

**信号六：CI 与测试基础设施成为隐性瓶颈**
NanoClaw 的 Bun spawnSync 导致测试挂死 6 小时（#3839）、ZeroClaw 并行测试超时与 PostgreSQL CI job blocked（#9318）、PicoClaw 全量条目因 stale 机制被误标、Moltis 构建全量重编译（#1270）——**测试与构建的效率问题正在消耗不成比例的维护者精力**，且会间接拖慢所有功能迭代。

---

**给技术决策者的一句话总结**：生态已进入**"稳定性、成本可控性、生态接入能力"三位一体的工程化竞争阶段**；选型时应优先考察项目的资源回收机制、provider 容错语义完整度、状态 schema 稳定性，而功能清单的边际参考价值正在下降。

*本报告所有数据均来自所提供的 2026-09-16 各项目社区动态摘要，未做外部补充或推断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-16

> 数据来源：HKUDS/nanobot GitHub 公开数据（过去24小时）

---

## 1. 今日速览

NanoBot 今日发布 **v0.3.5**，核心主题为「一个 agent，多端可用」——终端原生客户端与 WebUI 统一工作台。过去24小时共 **6 条 Issue 更新**（5 活跃 / 1 关闭）、**18 条 PR 更新**（10 待合并 / 8 已合并或关闭），活跃度处于高位。合并/关闭侧以发布准备、TUI 打包、WebUI 文档与测试稳定性为主，呈现明显的**版本收尾特征**；待合并侧则集中了多项 P1/P2 修复（会话消息串行化、provider 故障转移、递归目录忽略作用域），说明核心稳定性仍是主线。社区侧出现一个显著热点：**#4419 自动推理投入升级**讨论已持续数月，今日仍有更新。

---

## 2. 版本发布

### v0.3.5
- 链接：https://github.com/HKUDS/nanobot/releases/tag/v0.3.5

**更新内容（基于 release 摘要，未列出部分不做推断）：**
- 将 workbench 带到终端：运行 `nanobot` 启动原生终端客户端，运行 `nanobot webui` 启动浏览器客户端。
- 强调「一个 agent，更多工作场所」，并改善对话在**浏览器、终端与聊天应用之间跨端续接**的体验。

**配套发布工作（已合并）：**
- #5785 `chore(release): prepare v0.3.5` — 将 Python 发行版版本与源码回退版本设为 0.3.5，并新增端到端发布检查清单。https://github.com/HKUDS/nanobot/pull/5785
- #5787 `build: bundle native TUI in platform wheels` — 将原生 TUI 打包进平台 wheel，支持 PyPI 安装后直接启动，无需首次运行时从 GitHub 下载或单独安装 Bun；从已检查的 Python wheel 与匹配的原生产物构建五个平台 wheel。https://github.com/HKUDS/nanobot/pull/5787
- #5789 `docs: refresh README WebUI screenshots` — 更新 README WebUI 图库，覆盖新话题英雄输入框、多面板工作台、上下文用量与缓存复用、MCP 目录、Automations 日历等。https://github.com/HKUDS/nanobot/pull/5789

**破坏性变更与迁移注意事项：**
- 所提供材料中**未声明任何破坏性变更或迁移步骤**。仅可确认两点间接影响：一是 TUI 分发方式变更（改为随平台 wheel 提供，取代首次运行下载/Bun 安装路径）；二是版本号写入发行版与源码回退。建议按发布检查清单验证安装路径，但材料未给出具体迁移命令。

---

## 3. 项目进展

今日合并/关闭的 PR 主要围绕**发布收尾、分发、文档与稳定性**，可视为 v0.3.5 的落地保障：

| PR | 类型 | 推进内容 |
|---|---|---|
| #5785 | 发布准备 | 版本号与发布检查清单就位 → 直接支撑 v0.3.5 发布 |
| #5787 | 构建/分发 | 原生 TUI 随平台 wheel 分发，消除首次运行的外部依赖 |
| #5789 | 文档 | README WebUI 截图与说明对齐当前前端 |
| #5791 | 修复/性能 | TUI 在 agent 输出期间保持输入响应：以有界 FIFO 批次排空网关输出，避免输入回调被饿死；IME 延迟提交读取期间暂停输出排空；保持 FIFO 顺序与会话隔离。https://github.com/HKUDS/nanobot/pull/5791 |
| #5782 | Dream 修复 | 恢复 `agents.defaults.dream.maxIterations`，使 Dream 不再回退到全局 200 次工具调用上限。https://github.com/HKUDS/nanobot/pull/5782 |
| #5783 | Provider 修复 | 停止从含 `tool_calls` 的历史消息中剥离 assistant `content`；并移除拟议的兼容开关（现有 provider schema 允许同时回放两字段）。https://github.com/HKUDS/nanobot/pull/5783 |
| #5756 | 测试/安全 | 使 SSRF/代理测试的代理清除夹具在配置了 OS 级代理的主机（如 Windows 注册表）上仍然封闭可复现。https://github.com/HKUDS/nanobot/pull/5756 |
| #5786 | WebUI 重构 | 分段控件指示器动画：以单一测量指示器替代逐段背景，加入横向过冲过渡、宽度缓动与减弱动效处理。https://github.com/HKUDS/nanobot/pull/5786 |

**整体推进评估：** 今日合并侧完成了「发布 → 分发 → 文档 → 已知缺陷收口」的完整闭环，属于版本落地的关键一天；其中 #5782（Dream 迭代上限）与 #5791（TUI 输入响应）直接回应了同日的用户报告，响应速度良好。

---

## 4. 社区热点

按评论数与讨论持续度排序：

1. **#4419 [OPEN] Feature: Automatic reasoning effort escalation (default + escalated levels)** — 评论 5，作者 orrinwitt，创建于 2026-06-20，今日（09-16）仍有更新。
   https://github.com/HKUDS/nanobot/issues/4419
   诉求：多家 provider 的推理模型已暴露控制「思考深度」的参数，nanobot 已具备相关基础，用户希望实现**自动的推理投入升级**（默认级 + 升级级）。这是一个长期活跃、跨月讨论的功能设计议题。

2. **#5781 [OPEN] Dream 循环 1–2 小时反复读取同一文件；`dream.maxIterations` 被弃用/忽略，导致全局 200 次迭代上限生效** — 评论 3，作者 BrianMwangi21，创建 09-15，更新 09-16。
   https://github.com/HKUDS/nanobot/issues/5781
   诉求：定时 Dream 整合运行退化为超长 agent 循环（单次 25–111 分钟，最多约 200 次工具调用），模型反复重读同两个文件。该问题已有对应修复 PR #5782（已关闭/合并），闭环较快。

3. **#5784 [OPEN] QQ 渠道：自动压缩通知以独立消息发送，渠道无法折叠** — 评论 1，作者 AlfredChaos。
   https://github.com/HKUDS/nanobot/issues/5784
4. **#5731 [OPEN] 新增 AnySearch extract 作为 web_fetch 后端（key 可选，匿名配额）** — 评论 1，作者 cleverLucky（AnySearch 团队）。
   https://github.com/HKUDS/nanobot/issues/5731
5. **#5790 [CLOSED] 代码仓库（请求仓库邀请链接）** — 评论 1，作者 heyang-930。
   https://github.com/HKUDS/nanobot/issues/5790
6. **#5788 [OPEN] Nanobot 0.3.5 released! Let's go!** — 作者 chengyongru，0 评论。
   https://github.com/HKUDS/nanobot/issues/5788（附 v0.3.5 release 链接）

**背后诉求归纳：** 一是**成本/资源可控性**——推理投入自动升降级（#4419）与 Dream 迭代上限（#5781）都指向「避免无谓的算力消耗」；二是**渠道体验一致性**——QQ 压缩通知无法折叠（#5784）反映跨渠道消息语义未完全打平；三是**生态接入**——第三方检索服务主动提交集成（#5731）。

---

## 5. Bug 与稳定性

按严重程度排列（严重度依据 Issue/PR 自带的 priority 标签及影响面判断）：

| 严重度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| **P1（回归）** | 会话消息需串行化与批处理：安装权威 FIFO 收件箱、单 worker 处理每会话、每次模型请求前裁剪有限快照。标签含 bug/regression/fix/test/priority: p1 | PR #5792 **待合并** | 自身即修复：https://github.com/HKUDS/nanobot/pull/5792 |
| **P2（严重功能失效）** | Dream 定时整合退化为 25–111 分钟、最多约 200 次工具调用的循环，反复重读同一文件；`dream.maxIterations` 被弃用/忽略 | Issue #5781 **OPEN** | 已有 PR #5782（已关闭/合并）：https://github.com/HKUDS/nanobot/pull/5782 |
| **P2（工具错误报告）** | 递归 `list_dir` 在请求目录或其父目录名为 `build`、`dist` 等 `_IGNORE_DIRS` 条目时误报为空，例如递归列 `/tmp/build/project` 会隐藏 `README.md` | PR #5793 **待合并** | 自身即修复：https://github.com/HKUDS/nanobot/pull/5793 |
| **P2（provider 容错）** | NIM 风格超时错误未触发故障转移：仅按 `*Timeout*` 类名分类，未解析异常 message 文本（如 `RuntimeError` 包裹的 `timed out after 300s`） | PR #5769 **待合并** | https://github.com/HKUDS/nanobot/pull/5769 |
| **P2（provider 并发）** | `FallbackProvider` 半开探测未串行化：冷却期结束后仅比较时间戳，并发请求可能同时通过 | PR #5764 **待合并** | https://github.com/HKUDS/nanobot/pull/5764 |
| **P2（渠道体验）** | QQ 渠道自动压缩的两条生命周期通知（"Compressing context…" 等）以普通聊天消息发送给用户，且渠道无法折叠 | Issue #5784 **OPEN** | 材料中未见对应 PR |
| **其他（已收口）** | TUI 在 agent 输出期间输入响应受限 | PR #5791 **已关闭/合并** | https://github.com/HKUDS/nanobot/pull/5791 |
| **其他（已收口）** | 含 `tool_calls` 的历史消息被剥离 assistant `content` | PR #5783 **已关闭/合并** | https://github.com/HKUDS/nanobot/pull/5783 |

**稳定性判断：** 今日缺陷集中在 provider 容错/并发（#5769、#5764）与工具/会话层（#5793、#5792），**均已有对应修复 PR 在途**；Dream 循环与 TUI 响应两个已报告问题当天即完成修复闭环，响应链路健康。**唯一尚无 fix PR 的是 #5784（QQ 压缩通知折叠）**，属体验类而非数据风险。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 是否已有实现迹象 | 下一版本可能性判断 |
|---|---|---|---|
| **自动推理投入升级**（默认 + 升级两级） | #4419 https://github.com/HKUDS/nanobot/issues/4419 | 材料中未见对应 PR；Issue 自 2026-06 持续讨论至今 | 讨论周期长、涉及多 provider 抽象，材料不足以判断落地时间 |
| **AnySearch extract 作为 web_fetch 后端**（key 可选、匿名配额，提供 API/MCP/Skill 三种集成方式） | #5731 https://github.com/HKUDS/nanobot/issues/5731 | 未见对应 PR | 由服务方主动提出并自带集成方案，接入成本较低；但材料中无维护者表态 |
| **签名直投 webhook**（认证 webhook 将通知文本直接路由到出站消息总线，绕过 agent 循环与所有模型调用） | PR #5652 https://github.com/HKUDS/nanobot/pull/5652 | **PR 已存在，待合并**，标签含 documentation/feature/test/security | 已有代码就绪且带测试与文档，具备进入后续版本的条件 |
| **Langfuse 追踪支持 Codex** | PR #5520 https://github.com/HKUDS/nanobot/pull/5520 | **PR 已存在，待合并**（标签含 provider/feature/test） | 补齐 Codex 链路可观测性；材料中评论数未提供 |
| **Dream 迭代上限可配置** | #5781 / #5782 | **PR 已合并**，恢复 `agents.defaults.dream.maxIterations` 独立配置 | 已在今日修复流中落地 |

**观察：** 待合并队列中 #5652（签名直投 webhook）与 #5520（Codex Langfuse 追踪）是两项功能型 PR，均自带测试与文档，是当前最接近合并的新能力候选。

---

## 7. 用户反馈摘要

- **Dream 资源消耗与可配置性（#5781）**：自托管用户反映定时 Dream 整合会演变成长时间循环，模型在同两个文件间反复读取数十次，单次运行 25–111 分钟、最高约 200 次工具调用；用户明确指出 `dream.maxIterations` 被弃用/忽略，导致全局上限兜底——痛点在于**定时后台任务不可控地占用算力**。
- **QQ 渠道消息噪音（#5784）**：自托管用户在统一会话（last route 为 QQ）上遇到空闲自动压缩时，两条生命周期提示（"Compressing context…" 等）以普通聊天消息推送给最终用户，且该渠道**无折叠机制**——痛点是内部运维语义泄漏到用户可见面。
- **推理成本调节（#4419）**：用户关注多 provider 推理模型的「思考深度」参数，希望 nanobot 支持默认级与升级级的自动切换——诉求偏向**按需分配推理预算**。
- **生态方主动接入（#5731）**：AnySearch 团队自述其面向 AI agent 的实时搜索工具提供 API/MCP/Skill 三种集成方式，主动请求成为 `web_fetch` 后端并承诺 key 可选与匿名配额——属**供给侧友好信号**。
- **社区情绪（#5788）**：有用户以「Nanobot 0.3.5 released! Let's go!」发帖庆祝发布，反映出对本次终端 workbench 方向的正面期待。
- **入门支持需求（#5790，已关闭）**：用户询问「代码仓库邀请链接」，相关组件归类为 Channel（WeChat、Feishu、Telegram 等）——属非技术性支持请求，已被关闭。

---

## 8. 待处理积压

以下为创建时间较早、今日仍在更新但尚未合并的 PR，建议维护者优先分派评审：

| 项目 | 创建时间 | 已积压 | 状态 | 链接 |
|---|---|---|---|---|
| **#5520** feat(provider): langfuse tracing for codex | 2026-08-24 | 约 3 周 | OPEN，09-16 有更新 | https://github.com/HKUDS/nanobot/pull/5520 |
| **#5652** feat(gateway): add signed direct delivery webhook | 2026-09-04 | 约 12 天 | OPEN，09-16 有更新 | https://github.com/HKUDS/nanobot/pull/5652 |
| **#5748** fix(recovery): persist partial tool progress at batch boundaries（Closes #5747） | 2026-09-12 | 4 天 | OPEN，09-15 更新 | https://github.com/HKUDS/nanobot/pull/5748 |
| **#5769** fix(providers): fail over on NIM-style timeout errors | 2026-09-14 | 2 天 | OPEN，09-16 更新 | https://github.com/HKUDS/nanobot/pull/5769 |
| **#5764** fix(provider): serialize half-open fallback probes | 2026-09-14 | 2 天 | OPEN，09-16 更新 | https://github.com/HKUDS/nanobot/pull/5764 |
| **#5731** Add AnySearch extract as a web_fetch backend | 2026-09-11 | 5 天 | OPEN，09-16 更新 | https://github.com/HKUDS/nanobot/issues/5731 |
| **#4419** Automatic reasoning effort escalation | 2026-06-20 | 约 3 个月 | OPEN，09-16 更新 | https://github.com/HKUDS/nanobot/issues/4419 |

**提醒：** #4419 自 6 月创建以来持续讨论但材料中未见对应实现 PR，是当前**积压时间最长的功能议题**；#5520 同为跨月待合并功能型 PR。二者均建议给出明确的设计结论或排期回应，以避免长期悬置。

---

*注：本日报所有版本号、日期、评论数、标签与链接均来自所提供数据；release 摘要中被截断的内容未做补全或推断。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-16

## 1. 今日速览

项目今日保持高活跃度但无新版本发布：过去 24 小时 Issue 更新 50 条（活跃/新开 38、关闭 12），PR 更新 50 条（待合并 36、已合并/关闭 14），呈"输入远大于输出"的积压形态，合并/关闭比约 28%。当日主题集中在 **v0.21.3 升级后的回归与导入错误**（`file_signature`、`_loaded_launchd_backend_jobs`）、**计费/用量显示准确性**、以及 **MCP 工具集与 cron 预检的配置解析**。社区讨论热度最高的是一条约一个月前创建、至今累计 106 条评论的 cron/Nous 集成阻塞问题（#88584）。未见破坏性变更或新版本，整体健康度可用"高活跃、修复提速、积压待清"概括。

## 2. 版本发布

今日无新版本发布。当前主线上下文为 v0.21.3（2026.9.14），多条 Issue 与 PR 均围绕该版本的升级路径展开。

## 3. 项目进展

今日合并/关闭的 PR 中，以下推进较为明确：

- **#111158 [CLOSED]** `fix(dashboard): scope MCP secrets per profile` — 在多 profile 共用单个 dashboard 进程时，按所选 profile 使用各自的 MCP 凭据，同名 MCP 服务器可按 profile 独立解析，修复了跨 profile 凭据串用问题。
- **#112874 [CLOSED]** `feat(desktop): share the floating composer across focused panes` — 桌面端弹出式编辑器不再每窗一个，而是跟随悬停/聚焦的聊天面板，并保留各会话草稿与光标位置。
- 今日同时关闭了多条 Issue：#110912（Nous Portal 计费按全价计费的折扣路由疑似 bug）、#111942（CLI 启动 `file_signature` NameError 回归）、#112604（升级后校验 AttributeError）、#95906（桌面端压缩会话"Show earlier"失效）、#110585（工作区外 HTML MEDIA 预览失败）、#96094（thinking 块展开吞掉滚轮）、#107199（桌面 Bot Chat 刷新后 profile 回退）、#87133（仿冒 Hermes 的钓鱼活动，标记为 duplicate/invalid）。

从比例看，当日关闭项多集中在桌面端与会话状态类缺陷，说明渲染/会话层修复通道在运转；但 36 条 PR 待合并、38 条 Issue 新开/活跃，净积压压力仍然存在。

## 4. 社区热点

- **#88584 [OPEN] Automated Nous integration is blocked**（106 条评论，2026-08-17 创建，今日仍在更新）
  https://github.com/NousResearch/hermes-agent/issues/88584
  定时 Nous-to-Enterkey 合并在 `cron/jobs.py` 出现冲突，发布分支未变更、dashboard updater 仍停留在上一个已测试的 Enterkey 版本。这是当日唯一评论量破百的议题，反映的是仓库自动化集成流水线的长期阻塞，而非单一功能缺陷。作者 echokos。
- **#110912 [CLOSED] Nous Portal 折扣路由计费异常**（17 条评论，👍1）
  https://github.com/NousResearch/hermes-agent/issues/110912
  用户在 Nous Portal Plus（$20/月、22 credits）下使用 `deepseek/deepseek-v4-flash-0731`（上游 Novita），月度订阅生效后每日计费支出跳涨约 3 倍，用户判断为折扣路由 bug 而非额度耗尽。诉求核心是**订阅期内路由计费的可预期性**。
- **#111942 [CLOSED] CLI 启动崩溃 `NameError: file_signature`**（12 条评论，👍4）
  https://github.com/NousResearch/hermes-agent/issues/111942
  升级到 `main`（24fd22b94d，v0.21.3 / 2026.9.14）后交互式 CLI 启动即崩溃，标记为 #111408 的回归。这是当日反应数最高的缺陷类议题，已关闭。
- **#9842 [OPEN] 新增 `hermes gateway remove <platform>`**（5 条评论，👍8，2026-04-14 创建）
  https://github.com/NousResearch/hermes-agent/issues/9842
  目前移除消息平台只能手工编辑 `~/.hermes/config.yaml` 与 `~/.hermes/.env`。该请求点赞数最高（👍8）且已挂起约 5 个月，属于典型"低成本高共识"的 CLI 补齐项。

## 5. Bug 与稳定性

按严重程度排列（注明是否已有 fix PR）：

- **P0 — #111942** CLI 启动即崩：`NameError: name 'file_signature' is not defined`（`cli_tui_mixin.py`，回归自 #111408）。已关闭。
  https://github.com/NousResearch/hermes-agent/issues/111942
- **P1 — #110912** Nous Portal 在订阅额度生效时对 glm/glm-flash/kimi 等路由按全价计费，疑似折扣路由 bug。已关闭。
  https://github.com/NousResearch/hermes-agent/issues/110912
- **P2 回归链路 — #112522 [OPEN]** `hermes update` 升级至 v0.21.3（`main @ 30b22b54`）时，gateway 重启阶段出现 `ImportError: cannot import file_signature`，且同一异常在 atexit 清理中未捕获再次触发。与 #111942 同源。未见对应 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/112522
- **P2 — #112604 [CLOSED]** 升级后校验失败：`module 'hermes_cli.main_dashboard' has no attribute '_loaded_launchd_backend_jobs'`。已关闭。
  https://github.com/NousResearch/hermes-agent/issues/112604
- **P2 — #101007 [OPEN]** `mcp_servers.<name>.lazy` 永不生效：schema 缓存条目以 `ttl_ms: 0` 写入被判定为已过期。未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/101007
- **P2 — #96731 [OPEN]** `browser_exec`（Browser Use CLI，`local=true` / `use_real_profile: true`）在桌面进程中 420s 超时，而同一路径独立运行约 7s。未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/96731
- **P2 — #102384 [OPEN]** 使用命名自定义 provider 时 api_server 无法恢复自身会话，第二轮起返回 HTTP 500，影响 `hermes peer dm`。
  https://github.com/NousResearch/hermes-agent/issues/102384
- **P2 — #108967 [OPEN]** `GET /v1/skills` 恒返回 HTTP 500：`_handle_skills` 仍传 `include_editorial=True`，但该参数已在 Collective Wisdom 改动中从 `_find_all_skills` 移除。接口级硬失败，建议优先。
  https://github.com/NousResearch/hermes-agent/issues/108967
- **P2 — #98005 [OPEN]** 空闲 db-mtime 抖动（gateway_heartbeats）触发 `sessions.changed` 广播，导致聊天重挂载并打断滚动；#38015 的 renderer 侧修复不完整，gateway 侧仍缺。
  https://github.com/NousResearch/hermes-agent/issues/98005
- **P2 — #105719 [OPEN]** 多用户主机上 `hermes status` 与 cron 的 gateway 检查未做 UID 过滤（/proc 扫描），把其他用户的 gateway 计为本用户的。
  https://github.com/NousResearch/hermes-agent/issues/105719
- **P2 — #58226 [OPEN]** Anthropic OAuth 用量将低使用率窗口错误渲染为 100% 已用（utilization ≤1 被错误 ×100）。
  https://github.com/NousResearch/hermes-agent/issues/58226
- **P3 — #108575 [OPEN]** `hermes profile create --clone` 未继承 `agent.max_turns`，克隆后的 profile 以 4 轮预算运行，导致 Kanban 派发报 "Iteration budget exhausted (4/4)"。
  https://github.com/NousResearch/hermes-agent/issues/108575

相关 fix PR 方面，cron 预检与 MCP 解析方向已有动作：#112872（允许恢复 MCP toolsets）、#109061（拒绝解析到零工具的具名 MCP server）、#102024（`gateway run` 交接给 s6 时解除启动看门狗）。上述三条均仍为 OPEN。

## 6. 功能请求与路线图信号

- **`hermes gateway remove <platform>`（#9842）** — 请求已存在约 5 个月、👍8，为当日最高赞功能请求，实现面窄（CLI 补齐 + 配置/环境文件清理），有较高概率被纳入后续版本。
  https://github.com/NousResearch/hermes-agent/issues/9842
- **桌面端韩语（한국어）UI 支持（#33512）** — 指出 Settings → Appearance → Language 现有语言列表，属 i18n 扩展请求，与今日在审的 i18n 类 PR（#88262 法语 `/context` 诊断翻译）方向一致，可视为 i18n 批次的一部分。
  https://github.com/NousResearch/hermes-agent/issues/33512
- **Dashboard 插件向 Chat 提交文本（PR #112875）** — `SDK.host.chat.submitText(text)`，宿主返回 inactive / disconnected / input-blocked 等结构化状态，属插件能力开放信号。
  https://github.com/NousResearch/hermes-agent/pull/112875
- **`gateway.multiplex_profiles` 默认开启（PR #112854）** — 由启动期 serve guard 兜底，确保既有安装行为不被意外改变。若合入，将改变多 profile 部署的默认语义，值得关注。
  https://github.com/NousResearch/hermes-agent/pull/112854
- **桌面端 Mermaid 复制源码（PR #55798）** — 在渲染图上新增"复制原始 Mermaid 文本"按钮，与既有整图复制并存。
  https://github.com/NousResearch/hermes-agent/pull/55798
- **cron 接受 whatsapp_cloud 作为投递平台（PR #112876）** — 因 `whatsapp_cloud` 为内建适配器、不经插件 `platform_registry`，导致 `_is_known_delivery_platform` 无法识别。
  https://github.com/NousResearch/hermes-agent/pull/112876

## 7. 用户反馈摘要

- **升级体验是当前最大痛点**：v0.21.3 升级出现两条独立异常（启动期 `file_signature` 缺失、升级后 `_loaded_launchd_backend_jobs` 缺失），且用户在 #112522 中明确描述"一次本应成功的升级在末尾打印 gateway 重启失败"，反映升级流程的收尾阶段与 atexit 路径缺乏容错。
- **计费与用量显示可信度受质疑**：订阅生效反而导致日支出约 3 倍跳涨（#110912），以及低用量被显示为 100% 已用（#58226），两者都直接冲击用户对成本面板的信任。
- **多 profile / 多用户场景问题集中**：克隆 profile 不继承 `max_turns`（#108575）、dashboard 跨 profile 凭据串用（#111158，已修）、多用户主机上 gateway 归属误判（#105719）、桌面 Bot Chat 刷新后回退到 default profile（#107199，已关闭）——说明 profile 隔离语义是用户实际部署中最易踩坑的区域。
- **桌面端交互细节敏感**：滚轮在展开 thinking 块后失效（#96094）、压缩会话"Show earlier"失效（#95906）、工作区外 HTML 预览被白名单剥离（#110585），均为已关闭项，反馈集中在"内容渲染与历史回溯"体验。
- **安全侧反馈**：用户主动上报仿冒 Hermes 的钓鱼活动（`hermes-agent.icu` 与 GitHub 大规模 @ 提及 spam，#87133），该议题被标记为 duplicate/invalid 关闭。

## 8. 待处理积压

以下项创建时间较早、今日仍有更新但未见明确 fix PR，建议维护者优先关注：

- **#88584**（2026-08-17 创建，106 条评论，P3，invalid）— 自动化 Nous 集成阻塞已持续近一个月，是当日讨论量最大的未决项，且阻塞的是发布/dashboard 更新链路本身。
  https://github.com/NousResearch/hermes-agent/issues/88584
- **#9842**（2026-04-14 创建，约 5 个月，👍8）— 最高赞功能请求，仍无对应 PR。
  https://github.com/NousResearch/hermes-agent/issues/9842
- **#33512**（2026-05-27 创建，约 3.5 个月）— 桌面端韩语支持，无对应 PR。
  https://github.com/NousResearch/hermes-agent/issues/33512
- **#58226**（2026-07-04 创建，约 2.5 个月，P2）— Anthropic OAuth 用量显示 ×100 错误，长期未修。
  https://github.com/NousResearch/hermes-agent/issues/58226
- **#96731**（2026-08-27 创建，P2）— 桌面端 `browser_exec` 420s 超时，与独立运行 7s 的巨大差异指向进程内资源/会话状态问题，排查成本高但影响显著。
  https://github.com/NousResearch/hermes-agent/issues/96731
- **#9702**（PR，2026-04-14 创建，约 5 个月，P2，sweeper:risk-message-delivery / risk-compatibility）— 跨 gateway 运行时传播自定义 provider 模型，若 `model.default` 为空会导致 provider API 返回 HTTP 400；长期挂起且带兼容性风险标记。
  https://github.com/NousResearch/hermes-agent/pull/9702
- **#102024**（PR，2026-09-03 创建，P2）与 **#109061**（PR，2026-09-12 创建，P2）— 分别针对 s6 启动看门狗与 cron 零工具 MCP server 拒绝，均与今日多处 cron/MCP 报错直接相关，建议尽快推进评审。
  https://github.com/NousResearch/hermes-agent/pull/102024
  https://github.com/NousResearch/hermes-agent/pull/109061

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-16

## 1. 今日速览

过去 24 小时 PicoClaw 无新版本发布，社区活动集中在配置模块的稳定性修复上：2 条 Issue 与 4 条 PR 被更新，其中 3 条 PR 待合并、1 条关闭。活跃度属中等偏低，但方向明确——围绕 `Config` 敏感数据缓存竞态、`SaveConfig` 密钥丢失、`reaction` 工具配置路径等具体缺陷形成了"Issue 报告 + 配套 fix PR"的闭环。整体项目健康度尚可，但多条更新带有 `stale` 标记，说明部分议题已积压超过一周未获维护者响应。

> 说明：今日更新的所有条目均创建于 2026-09-07/08，于 2026-09-15 因 stale 机制被重新标记更新，并非今日新增提交或新开讨论。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日唯一关闭的 PR：

- **#1780 [CLOSED] Qq connection stability**（作者 xiang33）
  https://github.com/sipeed/picoclaw/pull/1780
  标签：`type: enhancement`、`domain: channel`、`domain: config`、`go`
  该 PR 将 QQ 频道的稳定性参数变为可配置项：重连间隔、重试次数与速率限制均可通过配置文件或环境变量自定义，同时保持向后兼容。这是今日唯一确认推进的变更，属于渠道层健壮性增强，未涉及破坏性改动。从 2026-03-19 创建到 2026-09-15 关闭，跨度较长。

其余 3 条 PR（#3375、#3372、#3370）仍处于 OPEN 状态，尚未合并，项目功能面暂未因此向前推进。

## 4. 社区热点

今日整体讨论热度很低，数据表现如下：

- 评论数最高的条目为 Issue #3374 与 #3373，各 1 条评论；4 条 PR 的评论数均未显示。
- 👍 反应数全部为 0，无任何条目获得点赞。

按链接列出今日更新的全部条目：

- Issue #3374 https://github.com/sipeed/picoclaw/issues/3374 （1 评论）
- Issue #3373 https://github.com/sipeed/picoclaw/issues/3373 （1 评论）
- PR #1780 https://github.com/sipeed/picoclaw/pull/1780
- PR #3375 https://github.com/sipeed/picoclaw/pull/3375
- PR #3372 https://github.com/sipeed/picoclaw/pull/3372
- PR #3370 https://github.com/sipeed/picoclaw/pull/3370

可观察到的诉求：更新量集中在配置持久化与安全性（API key 保留、敏感数据缓存并发安全）这一类"数据正确性"问题上，反映用户群中已有一定比例在生产/多协程环境下使用 PicoClaw，对配置读写可靠性的要求高于新功能。需注意，以上结论基于低互动量数据，代表性有限。

## 5. Bug 与稳定性

按严重程度排列：

**高 — 数据竞态可导致 panic**
- **#3374 [OPEN] [stale] [BUG] Data race in Config.initSensitiveCache can return a nil replacer and panic FilterSensitiveData**
  https://github.com/sipeed/picoclaw/issues/3374
  作者 sting8k，创建 2026-09-08，更新 2026-09-15，1 评论。
  摘要指出：`Config.sensitiveCache` 在 `pkg/config/security.go:221-222` 处被惰性创建且无任何同步，导致其内部 `sync.Once` 形同虚设。两个 goroutine 可各自分配自己的 `SensitiveDataCache`，进而可能返回 nil replacer 并使 `FilterSensitiveData` panic。属于并发环境下的崩溃风险，并可能影响敏感数据过滤这一安全功能。
  **已有 fix PR：#3375**（见下）。

**高 — 配置保存静默丢失数据**
- **#3373 [OPEN] [stale] [BUG] SaveConfig silently deletes every api_key after the first and leaves a dangling fallback**
  https://github.com/sipeed/picoclaw/issues/3373
  作者 sting8k，创建 2026-09-08，更新 2026-09-15，1 评论。
  摘要指出：`model_list` 条目中若配置多个 `api_keys`，在普通 `LoadConfig` → `SaveConfig` 往返后，第一个之后的每个 key 都会丢失；幸存的条目还会保留指向已不存在模型名的 `fallbacks` 引用。属静默数据损坏，用户难以察觉。
  **今日未观察到配套 fix PR。**

两条 Issue 均带有 `[stale]` 标记且截至今日仍为 OPEN。

## 6. 功能请求与路线图信号

今日无明确的新功能请求类 Issue。可从 PR 侧观察到的候选方向：

- **Web 搜索新增 provider**：PR #3370 https://github.com/sipeed/picoclaw/pull/3370 为 `web_search` 增加 Keenable（https://keenable.ai）作为 provider，摘要称在全新安装、无需 API key 的情况下即可工作——将 `tools.web.keenable.enabled` 设为 `true` 后调用其公共端点（`POST /v1/search/pub...`）。该 PR 创建于 2026-09-07，今日仍为 OPEN，是否纳入下一版本取决于维护者评审。
- **QQ 渠道可配置化**：PR #1780 已关闭（见第 3 节），属于渠道稳定性参数的配置能力扩展。

需要提醒：上述判断仅基于 PR 标题、标签与摘要，数据中未提供任何版本计划或路线图信息，不应视为已确认的发布内容。

## 7. 用户反馈摘要

今日可提炼的反馈全部来自两名报告者，样本极小：

- **sting8k（Issue #3374 / #3373，PR #3375 / #3372）**：连续提交两条配置模块缺陷及其修复，痛点集中在配置层的并发安全与持久化正确性——即"多 goroutine 下会 panic"和"保存后密钥被删"。这类问题通常出现在把 PicoClaw 用于真实部署、而非仅本地试用的场景中。
- **ilya-bogin-keenable（PR #3370）**：来自 Keenable 侧的贡献者，诉求是让内置 web 搜索支持其服务，并强调零配置（无需 API key）即可使用，指向降低新用户接入门槛。
- **xiang33（PR #1780）**：聚焦 QQ 渠道的连接稳定性，需求是重连间隔、重试次数、速率限制可调，说明默认参数在某些网络环境下不够用。

数据中未提供任何评论正文，因此无法归纳更细的满意/不满意表述。

## 8. 待处理积压

以下条目均带 `[stale]` 标记，创建于 2026-09-07/08，至 2026-09-15 更新时仍未获合并或关闭，建议维护者优先关注：

| 条目 | 类型 | 创建 | 状态 | 备注 |
|---|---|---|---|---|
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) | BUG | 2026-09-08 | OPEN, stale | 高危数据丢失，**无 fix PR** |
| [#3374](https://github.com/sipeed/picoclaw/issues/3374) | BUG | 2026-09-08 | OPEN, stale | 竞态 panic，配套 PR #3375 |
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | fix | 2026-09-08 | OPEN, stale | 守卫敏感缓存并发初始化 |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | fix | 2026-09-08 | OPEN, stale | 使 `reaction` 工具可配置：`ToolsConfig.IsToolEnabled("reaction")` 原无专门分支、回落到默认 `true` |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | feat | 2026-09-07 | OPEN, stale | 新增 Keenable web 搜索 provider |

另需留意 PR #1780 虽已关闭，但从 2026-03-19 创建至 2026-09-15 关闭历时近六个月，长周期 PR 的评审效率值得复盘。

**风险提示**：#3373 与 #3374 均为配置层高危缺陷，且各自仅 1 条评论、0 点赞，尚未形成社区关注度，存在在 stale 状态下被长期搁置的可能，而二者分别对应潜在的密钥丢失与运行时 panic。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-16

## 1. 今日速览

NanoClaw 今日维持**高强度开发节奏**：过去 24 小时 42 条 PR 更新（27 条待合并、15 条合并/关闭）、7 条 Issue 更新（4 条新开/活跃、3 条关闭），无新版本发布。核心动向是 **gateway / 凭证体系重构主线**（#3815 → #3825 系列）持续推进，同时 Iron Proxy 网关从提交到修复形成完整闭环（#3817、#3840、#3843）。稳定性方面，今日暴露了三类新问题：Bun `spawnSync` 导致的 CI 挂死、registry-skills 测试超时、`/update-nanoclaw` cutover 逻辑缺陷。整体看，功能推进速度快于缺陷收敛速度，**待合并 PR 积压达 27 条**，评审带宽是当前主要瓶颈。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日关闭的 PR 集中在 **Signal 频道适配**与 **Iron Proxy 网关修复**两条线：

**Signal 频道（历史 PR 集中清理，共 3 条关闭 + 2 条接续）**
- [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) [CLOSED] docs(signal)：群组 typing 指示、出站 reaction、quote-reply 修复的文档更新。
- [#3693](https://github.com/nanocoai/nanoclaw/pull/3693) [CLOSED] fix(signal)：断连期间出站消息入队、恢复后自动 flush；语音音频直通不做转写。
- [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) [CLOSED] fix(signal)：图片/文件附件改为经挂载 inbox 转发，修复此前指向未挂载 `/workspace/extra/...` 死路径的问题。
- 上述修复已由作者 **seefood** 合并整理为后续 PR [#3837](https://github.com/nanocoai/nanoclaw/pull/3837)（附件/DM 路由/出站队列三合一）与 [#3838](https://github.com/nanocoai/nanoclaw/pull/3838)（文档与排障），说明 Signal 适配层正在完成一轮收敛。

**Iron Proxy 网关（当日提交当日关闭，闭环效率高）**
- [#3843](https://github.com/nanocoai/nanoclaw/pull/3843) [CLOSED] fix(iron-proxy)：补全 WebSocket 握手、在隧道中保留上游 framing。由 glifocat 通过 Codex provider 端到端验证发现，直接折叠进 #3817 所属分支。
- [#3840](https://github.com/nanocoai/nanoclaw/pull/3840) [CLOSED] fix(gateway)：修复 status blocks、OAuth token、cache miss、WebSocket 握手四个网关接缝问题，目标分支为 `feat/gateway-setup-selection`。

**在途主干（尚未合并，构成下一阶段主体）**
- #3815（凭证网关契约集中化）→ #3816（OneCLI 抽离为可安装 skill）→ #3817（新增 Iron Proxy skill）→ #3818（setup 可选网关）→ #3824（provider 凭证连接）→ #3825（OpenCode 经 Iron Proxy 认证），形成一条完整的 gateway 抽象流水线。

**净推进评估**：Signal 与 Iron Proxy 两条线的当日修复均已完成闭环；但主干 gateway 栈 6 个 PR 仍全部 OPEN，功能落地有待评审推进。

---

## 4. 社区热点

今日评论区数据有限（Issues 最多 3 条评论，PR 评论数未提供），按参与度排序如下：

- [#3338](https://github.com/nanocoai/nanoclaw/issues/3338) [OPEN, 3 评论] Codex WebSocket idle retry 被隐藏——最简单的 Telegram 请求在 Codex Responses WebSocket 停滞时可能静默 10 分钟。作者 ionescu77，创建于 08-18，今日仍在更新，为当前**最长活跃且讨论最多**的 Issue。
- [#1981](https://github.com/nanocoai/nanoclaw/issues/1981) [CLOSED, 2 评论] v2 setup 在 headless Linux 上误判 systemd 不存在（Hetzner Ubuntu / Node 22.22.2），今日关闭。
- [#3354](https://github.com/nanocoai/nanoclaw/issues/3354) [CLOSED, 1 评论]、[#3684](https://github.com/nanocoai/nanoclaw/issues/3684) [CLOSED, 1 评论] 各 1 条评论。

**诉求分析**：热点高度集中在**"静默失败"类问题**——#3338 的超时不可见、#3684 的 snapshot 静默捕获符号链接却报告成功、#3354 的 setup 在非登录 shell 下产生 0 字节文件。用户真实诉求不是功能缺失，而是**失败必须可见、状态必须可信**。

---

## 5. Bug 与稳定性

按严重程度排序（均标注是否已有 fix PR）：

**P0 — 可能长期占用 CI 资源 / 阻塞测试**
- [#3839](https://github.com/nanocoai/nanoclaw/issues/3839) [OPEN] registry-skills `add-opencode` reapply pass 在 `bun test` 中挂死至 6 小时取消。根因为 Bun 1.4.0 `spawnSync` 丢失子进程退出码并 100% CPU 空转（oven-sh/bun#34069）。**已有 fix PR**：[#3841](https://github.com/nanocoai/nanoclaw/pull/3841)（改用 async spawn）、[#3836](https://github.com/nanocoai/nanoclaw/pull/3836)（将 registry-skills 测试作业限制在 20 分钟）。
- [#3842](https://github.com/nanocoai/nanoclaw/issues/3842) [OPEN] upload-trace 仍在经 Bun `spawnSync` 调用 curl，可能阻塞 poll loop。基线 `main@65b69ba1`（未受 #3841 影响）。**暂无独立 fix PR**（#3841 仅覆盖 memory hook 路径）。

**P1 — 升级/更新流程功能性缺陷**
- [#3828](https://github.com/nanocoai/nanoclaw/issues/3828) [OPEN] `/update-nanoclaw` cutover drain 永远无法成功：先停 host service，再轮询 agent 容器退出，但 host 正是唯一负责停止空闲容器的组件，形成死锁。**暂无 fix PR**。

**P2 — 数据完整性 / 静默错误**
- [#3684](https://github.com/nanocoai/nanoclaw/issues/3684) [CLOSED] `/update-nanoclaw` mutable-state snapshot 在 `data/`、`groups/` 为符号链接时只捕获链接本身而非内容，事务仍报告成功，rollback 恢复的是链接。
- [#3354](https://github.com/nanocoai/nanoclaw/issues/3354) [CLOSED] 非登录 ssh 安装下：git-show 复制失败留下 0 字节 channel 文件；onecli 检查早于其自身 PATH 修复执行。

**P3 — 已关闭的环境适配问题**
- [#1981](https://github.com/nanocoai/nanoclaw/issues/1981) [CLOSED] headless Linux 上 systemd 误判缺失。

**总体判断**：今日 3 条关闭、1 条新开（#3842 与 #3839 同源），**缺陷修复速度快于发现速度**，但 #3828 与 #3842 仍无对应修复，需重点跟进。

---

## 6. 功能请求与路线图信号

今日 Issues 中无明确的功能请求；路线图信号主要来自 PR 栈本身：

- **可插拔网关（大概率进入下一版本）**：#3817 新增 Iron Proxy gateway（OneCLI 保持首位与默认，现有安装保留已选网关）、#3818 在高级 setup 中暴露网关选择且不影响 provider 登录、#3815 集中化凭证网关契约与人工审批生命周期、#3816 将 OneCLI 抽离为可安装 skill。这一组已具备端到端验证反馈（#3840、#3843 的修复即来自真实安装），**落地概率高**。
- **OpenCode 认证扩展**：#3825 让 OpenCode 经选定 Iron gateway 使用 API key 或原生 ChatGPT 登录，凭证存储与 OAuth 刷新由 Iron Control 托管；#3824 提供共享的 credential-connection 接口。属于同一栈的延伸能力。
- **Signal 能力补强**：#3837 将附件、DM 路由、出站队列三类修复合并为对 `channels` 的单一 patch，是用户侧可感知的功能改善。

**结论**：下一版本的核心叙事是**"网关可插拔化 + 凭证集中管理"**，而非新增用户可见功能。

---

## 7. 用户反馈摘要

从 Issues 摘要与评论中提炼：

**核心痛点**
1. **静默失败不可接受**：#3338 描述"一个简单的 Telegram 请求可能静默十分钟"；#3684 指出事务"报告成功"但实际只保存了符号链接。用户对"无响应"而非"报错"的容忍度极低。
2. **安装环境覆盖不足**：#1981（Hetzner Ubuntu + Node 22.22.2 + systemd 正常但被误判）、#3354（非登录 ssh 会话、`~/.local/bin` 未在 PATH）表明 setup 仍假设交互式登录环境。
3. **更新流程不可靠**：#3828 的 cutover 死锁会让运行中容器的用户无法完成升级。

**使用场景**
- 容器化 agent 运行（Bun 1.4.0 运行时，见 #3842、#3839）。
- 多种消息通道：Telegram、Signal（含群组、DM、图片/语音附件）。
- 主流 provider 组合：Codex、OpenCode、OneCLI / Iron Proxy。

**满意度信号**
- glifocat 与 zvi-fried 之间形成"发现问题 → 当日提交修复 → 折叠进上游分支"的高效协作模式（#3843、#3840 当日开当日关）。
- Signal 相关的多个陈旧 PR 被作者主动整合为当前 patch（#3837、#3838），显示贡献者在积极响应代码库演进。

---

## 8. 待处理积压

**高优先级提醒**

- [#3338](https://github.com/nanocoai/nanoclaw/issues/3338) — 创建于 **2026-08-18**，已开放近一个月，今日仍在更新，3 条评论，**无 fix PR**。涉及 Codex WebSocket 超时不可见，直接损害用户体验，建议优先定位。
- [#3828](https://github.com/nanocoai/nanoclaw/issues/3828) — 创建于 2026-09-15，`/update-nanoclaw` cutover 死锁，**无 fix PR**，影响所有运行中容器的升级路径。
- [#3842](https://github.com/nanocoai/nanoclaw/issues/3842) — 今日新开，与 P0 缺陷 #3839 同源（Bun spawnSync），但 upload-trace 路径未被 #3841 覆盖，需确认修复范围是否完整。

**PR 积压风险**

- 当前 **27 条待合并 PR**，其中 gateway 主栈 #3815、#3816、#3817、#3818、#3824、#3825 全部处于 OPEN 状态且相互依赖，任一环节延迟都会阻塞整条链路合并。
- [#3837](https://github.com/nanocoai/nanoclaw/pull/3837)、[#3838](https://github.com/nanocoai/nanoclaw/pull/3838) 为作者整合陈旧 PR 后的新提交，建议优先评审，避免二次过期。

**建议**：将评审带宽集中于 gateway 栈的依赖顺序推进，同时为 #3338 指定负责人——它是当前开放时间最长、用户感知最直接的未解决项。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-09-16

## 1. 今日速览

今日项目活跃度**偏低**。过去 24 小时内无新版本发布、无 PR 更新，唯一的动态是 1 条 Issue 被关闭（新开/活跃 0，已关闭 1）。该 Issue 是社区成员提出的一项探索性建议：将 litter (0xSero/litter) 的移动端 GUI 形态移植到 human-guard-rail，作为 NullClaw 的客户端。总体来看，今日项目没有代码层面的推进，社区讨论也仅集中在单条已关闭的议题上，属于典型的低吞吐日。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，无代码层面的功能推进或修复。

## 4. 社区热点

今日唯一有讨论的条目为 Issue #999（已关闭），共 1 条评论、0 个 👍：

- **#999 [CLOSED] Explore forking litter's mobile GUI into human-guard-rail as a NullClaw client**
  作者：Azdwarf5Azdwarf | 创建/更新：2026-09-16 | 评论：1
  链接：nullclaw/nullclaw Issue #999

分析：该 Issue 描述了一个具体的技术形态参考——litter (0xSero/litter) 是一个原生 iOS + Android 的 agentic-coding 客户端，采用「Swift/Kotlin 薄 UI + 共享 Rust 核心（UniFFI）」的架构，对接 Codex / Local Studio 服务器。提案者希望调研将同样的架构形态应用到 human-guard-rail（本地路径 `~/dev/human-guard-rail`）上，使之成为 NullClaw 的客户端。该诉求指向社区对**移动端入口**的关注：希望在不重复实现业务逻辑的前提下，通过共享 Rust 核心复用桌面/服务端能力，快速获得原生移动体验。该 Issue 当日即被关闭，说明维护者已给出结论（无论采纳与否），但公开数据中未提供关闭原因或评论内容。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告。

## 6. 功能请求与路线图信号

今日唯一的功能相关信号来自 Issue #999：为 NullClaw 引入基于 **UniFFI 共享 Rust 核心 + 原生移动 UI** 的客户端方案（参考 litter 的实现路径）。

由于该 Issue 已被关闭，且今日无任何相关 PR 或版本发布，**短期内纳入下一版本的可能性缺乏数据支撑**。若维护者后续重启该方向，其关键前置条件应是 human-guard-rail 侧核心接口的稳定化与可跨端复用性验证。

## 7. 用户反馈摘要

基于今日仅有的 1 条 Issue 摘要，可提炼的真实诉求为：

- **痛点/场景**：用户希望获得原生移动端（iOS/Android）的 agentic-coding 使用体验，而非仅依赖桌面或服务端形态。
- **参考方案**：认可 litter 的「薄原生 UI + 共享 Rust 核心 + UniFFI」分层方式，认为该结构可避免多端重复开发。
- **不满意/未满足之处**：现有数据中未包含对 NullClaw 当前功能的具体抱怨，也无评论原文可供进一步提炼满意度信息。

## 8. 待处理积压

今日数据中未提供长期未响应的 Issue 或 PR 列表，**无法据此识别积压项**。建议维护者关注 Issue #999 关闭时是否留下了明确结论或后续跟踪项；若该探索方向仍具价值，可考虑以新 Issue 或设计文档形式重新立项，避免有价值的技术提案随关闭而丢失上下文。

---

**项目健康度提示**：今日零 PR、零发布、单条 Issue 关闭，短期内维护者响应是及时的（当日创建当日关闭），但社区参与度和代码吞吐均处于低位。建议关注后续数日是否出现该移动端议题的延续讨论，以判断这是单日波动还是活跃度下降趋势。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-16）

## 1. 今日速览

今日项目无新版本发布，核心动态集中在存量 Issue 的批量清理与 PR 收口。过去 24 小时共关闭 9 条 Issue、合并/关闭 18 条 PR，仅 1 条 PR 待合并，呈现典型的"清理积压"节奏。值得注意的是，关闭的 9 条 Issue 全部带有 `stale` 标签，且创建时间均为 2026-03-31，说明这是一批长期挂起的旧工单被集中关闭，而非当日新增问题。其中多条 Issue（如 #1099、#1105、#1107、#1117、#1120）均有对应的修复 PR 一并关闭，表明这些历史问题已通过代码变更落地解决。整体健康度良好，但当日缺乏新功能发布，属于维护型工作日。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日 PR 活动以"Issue 修复闭环"为主线，多条历史 `stale` Issue 与其修复 PR 同日关闭：

- **并发可靠性系列修复（MaoQianTu 主导）**：
  - PR #1090（Closes #1089）为 `CoworkRunner` 的 `startSession`/`continueSession` 添加 per-session 执行序列化，通过 `sessionRunPromise` Map 阻止同一 sessionId 并发执行，解决流式消息损坏与重复问题。
  - PR #1100（Closes #1099）为 `IMCoworkHandler` 引入 per-conversation 异步互斥锁 `conversationLocks`，将 `processMessage()` 拆分为加锁入口与 `processMessageUnlocked()`，修复 IM 消息并发导致的重复会话创建与响应丢失。
  - PR #1106（Closes #1105）修正钉钉定时任务通知路由，将 `primeConversationReplyRoute()` 的入参由含前缀的 `rawTo` 改为已剥离前缀的 `delivery.to`。
  - PR #1108（Closes #1107）为 `cronJobService.pollOnce()` 增加 `pollInFlight` 重入标志与 `pollGeneration` 计数，解决轮询重入及 `stopPolling()` 后的幽灵事件。
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/1090 、#1100、#1106、#1108
- **体验优化 PR**：#1119（Closes #1117，权限弹窗键盘快捷键）、#1121（Closes #1120，会话出错一键 Retry）、#1122（表格留白修复）、#1125（会话内容全文搜索与关键词高亮）。链接：https://github.com/netease-youdao/LobsterAI/pull/1119 、#1121、#1122、#1125
- **当日新增 OpenClaw 相关 PR（fisherdaddy、Mind-Hand 提交）**：#2690 增加修复失败按阶段追踪与 pre-repair 快照回滚，并处理 agent media 迁移；#2689 在启动修复前先备份并迁移 OpenClaw SQLite state schema；#2688 绕过 LobsterAI 代理凭据冷却（修复上游模型鉴权/计费失败导致共享代理凭据被锁 5 小时的问题）。链接：https://github.com/netease-youdao/LobsterAI/pull/2690 、#2689、#2688

整体来看，项目在会话并发安全、定时任务可靠性、OpenClaw 状态迁移与修复回滚等基础设施层面向前推进明显。

## 4. 社区热点

今日讨论活跃度整体偏低（Issue 评论数多为 2-3 条，PR 评论数未显示）。相对受关注的是：

- **Issue #1112**（3 条评论，👍 0）：表格 Table 顶部和底部存在无意义留白。链接：https://github.com/netease-youdao/LobsterAI/issues/1112
- 其余 8 条 Issue（#1096、#1099、#1105、#1107、#1117、#1120、#1124、#1139）均为 2 条评论、0 反应。

背后诉求：讨论分散在多个具体缺陷上，无单一高热度议题。用户反馈集中在"渲染/交互细节打磨"（留白、表格样式）与"Agent 会话状态一致性"（重名 Agent、并发会话）两类，反映项目已进入用户体验精细化阶段。

## 5. Bug 与稳定性

按严重程度排列（均已有对应 fix PR 或关闭）：

1. **高 — IM 消息并发导致重复会话创建与响应丢失**（#1099，CLOSED）：涉及 `IMCoworkHandler.processMessage()` 竞态，已有 PR #1100 修复（per-conversation 互斥锁）。链接：https://github.com/netease-youdao/LobsterAI/issues/1099
2. **高 — 定时任务 pollOnce() 无重入保护且产生幽灵事件**（#1107，CLOSED）：已有 PR #1108 修复（`pollInFlight` + `pollGeneration`）。链接：https://github.com/netease-youdao/LobsterAI/issues/1107
3. **中 — 钉钉定时任务 IM 通知路由始终无法送达**（#1105，CLOSED）：`conversationId` 前缀导致，已有 PR #1106 修复。链接：https://github.com/netease-youdao/LobsterAI/issues/1105
4. **中 — 重名 Agent 切换后任务记录未刷新**（#1139，CLOSED）：新建重名 agent 后需切换其他 agent 再切回才能获取记录。链接：https://github.com/netease-youdao/LobsterAI/issues/1139
5. **中 — 已退出登录后安装仍弹"Lobster AI 无法关闭"**（#1124，CLOSED）：安装/卸载流程阻断问题。链接：https://github.com/netease-youdao/LobsterAI/issues/1124
6. **低 — md 转 PDF 使用在线服务出现问题**（#1096，CLOSED）：打开三个浏览器页面未关闭、结果页多出会员框。链接：https://github.com/netease-youdao/LobsterAI/issues/1096
7. **低 — 表格上下留白**（#1112，CLOSED）：已有 PR #1122 移除 Tailwind 表格上下外边距。链接：https://github.com/netease-youdao/LobsterAI/issues/1112

注：以上问题均为 2026-03-31 创建的历史工单，非今日新增回归。

## 6. 功能请求与路线图信号

今日关闭的两条 Feature 请求均已配齐实现 PR，具备纳入下个版本的条件：

- **工具权限弹窗键盘快捷键（Enter 确认 / Escape 拒绝）**（#1117，CLOSED）：诉求是避免在键盘驱动的编码流中频繁切换鼠标；`destructive` 级操作需特殊处理。对应 PR #1119 已实现 `window keydown` 监听，并在 `dangerLevel === 'destructive'` 或选项未填全时禁用 Enter。链接：https://github.com/netease-youdao/LobsterAI/issues/1117
- **会话出错后一键 Retry（重发最后一条消息）**（#1120，CLOSED）：痛点在于 error 状态下用户无恢复路径，只能手动复制 Prompt、新建会话重发。对应 PR #1121 通过 `lastUserMessage` memo + `handleRetry` 调用 `onContinue` 实现。链接：https://github.com/netease-youdao/LobsterAI/issues/1120

此外，PR #1125 提出的"会话内容全文搜索 + 关键词高亮"（原搜索框仅匹配标题）也是明确的用户需求方向，若被接受可能进入后续版本。链接：https://github.com/netease-youdao/LobsterAI/pull/1125

## 7. 用户反馈摘要

- **交互效率痛点**：用户在 Agent 运行过程中频繁遭遇工具权限弹窗，纯鼠标操作"打断了用键盘驱动的编码流"（#1117）；会话出错后缺乏恢复路径，操作成本高（#1120）。两类诉求均指向"减少中断、提升连续操作体验"。
- **状态一致性困惑**：新建重名 Agent 后当前 Agent 实际已切换，但任务记录未同步，需反复切换才能刷新（#1139），暴露会话/Agent 状态管理的边界问题。
- **安装与卸载体验**：即便已关闭并退出登录，安装新版本时仍弹出"Lobster AI 无法关闭"（#1124），影响升级流程。
- **第三方服务体验**：md 转 PDF 依赖在线服务，出现多开浏览器页面未关闭、结果页插入会员框等干扰（#1096）。
- **渲染细节**：表格上下留白被多次反馈（#1112），属于视觉一致性问题。

整体情绪以"具体功能可用但细节待打磨"为主，未见对核心能力的强烈不满。

## 8. 待处理积压

- 今日待合并 PR 共 1 条（数据未列出具体编号），建议维护者优先确认其状态，避免形成新积压。
- 本批关闭的 9 条 Issue、18 条 PR 全部为 2026-03-31 创建、2026-09-16 才被处理，平均挂起时间约 5.5 个月，且均带 `stale` 标签。这提示项目存在"旧工单长期滞留、集中清理"的模式，建议：
  - 建立 stale 工单的定期 triage 机制，缩短从报告到响应的周期；
  - 对已有 fix PR 的 Issue 及时关联并关闭，而非等待 stale 流程统一处理。
- 暂无明确标记为"长期未响应"且仍处于 OPEN 状态的重要 Issue 或 PR。

（注：以上分析均基于所提供数据，未包含的指标如待合并 PR 具体编号、评论内容细节等无法进一步展开。）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-16

## 1. 今日速览

今日项目活跃度**偏低但结构健康**：过去 24 小时共 3 条 Issue 更新（2 条新开/活跃、1 条关闭）、1 条待合并 PR，无新版本发布。关闭的 #1246 消除了一个沙箱运行阻塞类 Bug，说明维护者仍在处理稳定性积压。新开的 #1271 由用户报告远程 MCP 服务器的重试与会话恢复缺陷，属于面向智能体基础设施的核心可靠性问题，值得优先关注。整体看，今日没有破坏性变更或发布风险，但社区侧对 OpenAI 兼容端点定制化与 MCP 健壮性的诉求在持续累积。

## 2. 版本发布

今日无新版本发布，本节略。

## 3. 项目进展

今日**无已合并或已关闭的 PR**，代码主线未发生实质推进。

唯一在途 PR：

- **#1270 [OPEN] feat(build): cache cargo across image builds, and script building the image**（作者 Bergmann89，创建 2026-09-15，更新 2026-09-16）
  链接: moltis-org/moltis PR #1270
  摘要显示：此前每次镜像构建都会重新编译整个依赖树，因为 cargo 的 target 目录和 crate registry 位于任何源码变更都会失效的镜像层中；该 PR 将其改为 BuildKit cache mounts，使重建只编译发生变化的部分，并附带构建镜像的脚本。这是一项**构建效率与开发者体验**改进，不改变运行时行为，属于低风险但收益明确的基础设施优化，适合优先评审合并。

## 4. 社区热点

今日讨论量整体很低，最活跃条目为：

- **Issue #205 [OPEN] [enhancement] [Feature]: Allow setting body parameters for custom OpenAI endpoints (and per-model)** — 2 条评论，为今日评论数最多
  链接: moltis-org/moltis Issue #205
  该 Issue 自 2026-02-22 创建，至 2026-09-15 仍有更新，说明是一个**长期被跟踪、尚未满足**的增强请求，用户希望为自定义 OpenAI 端点（以及按模型维度）设置请求体参数。

- **Issue #1246 [CLOSED] [bug]** — 1 条评论，已关闭
  链接: moltis-org/moltis Issue #1246

其余条目（#1271、#1270）今日评论数为 0 或未提供，暂无讨论热度。点赞数全部为 0，未出现明显社区投票信号。

## 5. Bug 与稳定性

按严重程度排列今日 Bug 相关条目：

**高 — Issue #1271 [OPEN] A remote MCP server that fails at startup is never retried, and a lost session ends every later call**
链接: moltis-org/moltis Issue #1271 | 作者 tomachianura | 创建/更新 2026-09-16 | 评论 0
报告环境为 Moltis 20260913.02，远程 MCP over streamable HTTP。报告描述了两类问题：
1. **启动失败即永久停止**：`McpManager::start_enabled` 记录 `failed to start MCP server` 后即放弃，健康监控未能拉起；
2. **会话丢失后所有后续调用失败**。
严重性判断：直接影响智能体工具链（MCP）的可用性与自愈能力，属于智能体运行时的核心可靠性缺陷；目前**尚无 fix PR**。

**中 — Issue #1246 [CLOSED] [bug]: can't run on sandbox after a node is added**
链接: moltis-org/moltis Issue #1246 | 作者 maop | 创建 2026-08-28 | 更新 2026-09-16 | 评论 1
该问题已关闭（摘要中报告者确认使用最新版本）。由于今日无合并/关闭的 PR，其修复可能来自更早的代码变更或问题澄清，具体以仓库记录为准。此项已不再构成当前阻塞。

## 6. 功能请求与路线图信号

- **Issue #205 [OPEN] [enhancement] 自定义 OpenAI 端点请求体参数（支持按模型配置）**
  链接: moltis-org/moltis Issue #205
  提出时间早（2026-02-22），讨论延续至 9 月，说明需求稳定且未过时。该功能对使用第三方 OpenAI 兼容服务、需要传递服务商专有参数（如特定推理/采样控制字段）的用户价值明显。**今日无相关 PR**，是否纳入下一版本尚无证据支持，仅能标注为长期候选。

- **Issue #1271 所隐含的健壮性增强诉求**（MCP 启动重试 + 会话恢复）
  链接: moltis-org/moltis Issue #1271
  虽然是 Bug 报告，但其性质接近对 MCP 管理器容错策略的功能性要求。**今日无相关 PR**。

结论：今日**没有任何 PR 与上述功能请求直接对应**，无法据此推断下一版本的收录范围。

## 7. 用户反馈摘要

> 说明：今日可获取的评论内容有限（#205 有 2 条评论、#1246 有 1 条评论，正文均未在数据中提供），以下仅基于 Issue 正文与摘要中可确证的信息提炼。

- **使用场景**：用户在生产/开发环境中使用远程 MCP over streamable HTTP（#1271），并使用自定义 OpenAI 兼容端点（#205）；另有用户在沙箱环境中运行并添加节点（#1246）。
- **不满意之处**：
  - MCP 服务启动失败后缺乏重试与健康恢复机制，且会话丢失会连锁导致后续调用全部失败（#1271）；
  - 自定义 OpenAI 端点无法设置请求体参数，配置能力受限（#205）；
  - 曾出现添加节点后无法在沙箱运行的问题（#1246，已关闭）。
- **已确认的正面信号**：报告者在提交前均执行了 preflight checklist（搜索既有 issue、确认使用最新版本），社区报障流程规范；#1246 得以关闭，说明该类问题可被收敛解决。
- 未发现对项目性能、资源占用的抱怨；构建耗时问题由贡献者主动以 PR #1270 形式解决，体现开发者侧的积极投入。

## 8. 待处理积压

- **Issue #205 [OPEN]** — 创建于 2026-02-22，距今约 6.8 个月，仍处于打开状态，且今日仍有活动。
  链接: moltis-org/moltis Issue #205
  建议：这是目前可见**最长期未落地**的增强请求之一，建议维护者明确标注优先级或给出路线图回应。

- **Issue #1271 [OPEN]** — 今日新开、0 评论、0 点赞，尚无维护者响应。
  链接: moltis-org/moltis Issue #1271
  建议：涉及 MCP 自愈能力，建议尽快确认与分级，避免在用户侧积累稳定性疑虑。

- **PR #1270 [OPEN]** — 创建 2026-09-15，已更新至今日，尚无评论记录。
  链接: moltis-org/moltis PR #1270
  建议：改动范围限定于构建缓存与脚本，属低风险高效率改进，建议安排评审。

---

**健康度小结**：今日无发布、无 PR 合并，交付节奏偏慢；但 Issue 流转正常（1 关闭 / 2 新增并保持活跃），报障质量高。主要风险集中在远程 MCP 的启动重试与会话恢复（#1271）以及长期悬置的端点定制需求（#205）。待 PR #1270 合并后，构建效率将获得可感知改善。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 — 2026-09-16

## 1. 今日速览

过去 24 小时项目活跃度处于**高位**：Issues 更新 20 条（新开/活跃 7，已关闭 13），PR 更新 35 条（待合并 25，已合并/关闭 10），无新版本发布。关闭量（13 条 Issue）显著高于新开量（7 条），说明维护者正在积极清理积压，项目健康度良好。合并/关闭的 PR 集中在 ACP 委派体验、终端错误抑制、设置菜单样式等打磨类修复。待合并 PR 中有多条社区首次贡献者提交的安全与稳定性修复，但尚缺维护者评审。整体呈现"清理快、合并慢"的节奏，25 条待合并 PR 是当前主要瓶颈。

## 2. 版本发布

无。过去 24 小时无新版本发布，亦无 GitHub Release 记录。

## 3. 项目进展

今日已合并/关闭的 PR（10 条），推进方向：

- **#7783 [CLOSED] fix(ACP): 改进委派外部 ACP runner 的体验** — 修复 ACP 回复重复/碎片化问题（一轮文本到达 `delegate_external_agent` 两次）及另一项用户可见问题。作者 x1n95c。
  https://github.com/agentscope-ai/QwenPaw/pull/7783
- **#6569 [CLOSED] fix(console): 抑制 detached TTY 后的 EIO/EPIPE 打印错误** — 解决 `qwenpaw app` 在启动终端关闭后仍指向已删除 TTY 导致的打印报错。作者 hehuang139，已通过人工评审。
  https://github.com/agentscope-ai/QwenPaw/pull/6569
- **#7805 [CLOSED] fix: 匹配设置菜单字体粗细** — 前端样式一致性修复。作者 zhaozhuang521。
  https://github.com/agentscope-ai/QwenPaw/pull/7805

配合 13 条 Issue 关闭（涵盖 MCP 注册失败 #7716、PDF 多模态块序列化 #7689、ACP trusted 回退 #7726、插件目录离线回退 #7730、主题化请求 #7406 等），项目在**稳定性与体验打磨**方向稳步推进。但需注意：今日无重大功能性 PR 合入，主要进展仍集中在修复层面。

## 4. 社区热点

- **#7318 [OPEN] [Discussion] QwenPaw Hub 多租户版将于 2.2.0 推出：下一步该做什么？** — 评论 **29 条**，👍 4，为今日讨论最热。作者 rayrayraykk 征集社区对团队协作版的方向意见，关联历史请求 #2324（多用户访问与管理员管理）。这是官方主动进行路线图共创的信号。
  https://github.com/agentscope-ai/QwenPaw/issues/7318
  *配套 PR #7779 [OPEN] feat(hub): 新增模型网关、成员治理与用量看板* 由同一作者提交，说明 Hub 方向已在落地。
  https://github.com/agentscope-ai/QwenPaw/pull/7779

- **#7678 [OPEN] [Bug]: spawn subAgent 全部超时失败** — 评论 9 条。用户 xiaohushi512 报告 win2.2.0 下所有 spawn subAgent 任务均 timeout 失败，即使延长 timeout 也无效。核心执行路径的严重问题，社区关注度高。
  https://github.com/agentscope-ai/QwenPaw/issues/7678

- **#7722 [OPEN] [Bug]: 内存耗尽由三条路径叠加导致** — 评论 5 条。报告者给出受控复现与最小修复建议，指容器内存以约 1MB/s 填满后服务挂起/OOM，涉及无界流缓冲、keep-alive 实例堆叠、doom-loop 门控绕过三个组件性问题。
  https://github.com/agentscope-ai/QwenPaw/issues/7722

## 5. Bug 与稳定性

按严重程度排列：

**严重**
- **#7722 [OPEN] 容器内存耗尽（三路径叠加）** — 无界流缓冲 + keep-alive 实例堆叠 + doom-loop 门控绕过，最终 OOM 挂起。报告者已提供受控复现与最小修复方向。**暂无对应 fix PR**。
  https://github.com/agentscope-ai/QwenPaw/issues/7722
- **#7678 [OPEN] spawn subAgent 全部 timeout 失败** — win2.2.0 环境下子智能体任务无一执行成功。**暂无对应 fix PR**。
  https://github.com/agentscope-ai/QwenPaw/issues/7678
- **#7792 [OPEN] 微信视频/音频附件变成 file:// URL 并原样发送至 OpenAI 兼容 API** — 触发上游 400 "The provided URL does not appear to be valid"。Docker 部署。**暂无对应 fix PR**。
  https://github.com/agentscope-ai/QwenPaw/issues/7792

**中等（已关闭，已修复）**
- **#7799 [CLOSED] v2.2.1 Console 不显示 send_file_to_user 发送的图片** — 流式期间短暂可见后消失，疑似 #5320 复发。
  https://github.com/agentscope-ai/QwenPaw/issues/7799
- **#7716 [CLOSED] 升级 2.2.x 后 MCP 无法连接与注册** — 影响 2.1.x → 2.2.0/2.2.1 升级用户。
  https://github.com/agentscope-ai/QwenPaw/issues/7716
- **#7689 [CLOSED] PDF 文档块在多模态 chat-completions 端点仍被发送** — #7621 仅修复了 `supports_multimodal=False` 场景。
  https://github.com/agentscope-ai/QwenPaw/issues/7689
- **#7726 [CLOSED] ACP `trusted: true` 静默回退到交互式提示** — 根因在 `_pick_allow_option` 仅匹配 `allow_*` optionIds，作者给出源码定位（`src/qwenpaw/acp/client.py:32-38, 113-130`）。
  https://github.com/agentscope-ai/QwenPaw/issues/7726
- **#7693 [CLOSED] [Creator] 多图生成期间审核通过会中断任务且永久卡在 RUNNING**。
  https://github.com/agentscope-ai/QwenPaw/issues/7693

**较低**
- **#7730 [CLOSED] 插件目录读取失败未走文档承诺的离线回退** — 连接重置时返回服务器错误而非空目录。
  https://github.com/agentscope-ai/QwenPaw/issues/7730
- **#6472 [CLOSED] 创空间 qwenpaw 2.0.0→2.0.1 后编程模式 JSON 不显示行号**（7 月报告，今日关闭）。
  https://github.com/agentscope-ai/QwenPaw/issues/6472

**安全相关（长期开放）**
- **#4037 [CLOSED] Tool-enabled HTTP 网关默认未认证** — `qwenpaw app` 暴露可调用 `execute_shell_command` 的 HTTP 网关，登录默认关闭。该 5 月报告的问题今日关闭。
  https://github.com/agentscope-ai/QwenPaw/issues/4037
  相关待合并 PR：**#7120 [OPEN] security: 默认启用 shell 逃逸检查 + 回归测试**（首次贡献者），将 7 项 shell-evasion 检查从 `False` 翻转为 `True`。
  https://github.com/agentscope-ai/QwenPaw/pull/7120

## 6. 功能请求与路线图信号

用户提出的功能需求及对应 PR 状态：

- **Hub 多租户与团队协作**（#7318 讨论 + #7779 PR 已提交）— 极高概率进入 2.2.0，官方已明确版本号并落地模型网关、成员治理、用量看板。
  https://github.com/agentscope-ai/QwenPaw/issues/7318 | https://github.com/agentscope-ai/QwenPaw/pull/7779
- **Chat 模式选择器：Discuss vs Execute**（#7801 [OPEN]）— 用户希望区分"讨论"与"执行"，避免提问即触发文件编辑/shell/部署。属交互范式级需求，暂无 PR。
  https://github.com/agentscope-ai/QwenPaw/issues/7801
- **统一 Chat 工作台外壳**（#7790 [OPEN] PR）— 引入会话级可调整右侧 Workbench，替换固定能力标签为可配置菜单。由 zhijianma 提交。
  https://github.com/agentscope-ai/QwenPaw/pull/7790
- **实时语音对话**（#7785 [OPEN] PR）— 支持可配置 provider 的 Realtime Voice，含语音输入、播放、打断与模型选择，并接入普通 Chat 执行路径。
  https://github.com/agentscope-ai/QwenPaw/pull/7785
- **官方主题化支持**（#7406 [CLOSED]）— 请求 accent color / 字体 / 间距配置，UI 目前锁定橙色 #f07e26。今日关闭，需关注是否以"不实现"结案。
  https://github.com/agentscope-ai/QwenPaw/issues/7406
- **产物纯净输出**（#7797 [CLOSED]）— 希望只输出目标产出物，不输出中间/临时文件。今日关闭。
  https://github.com/agentscope-ai/QwenPaw/issues/7797
- **任务完成提醒**（#7800 [OPEN]）— 底栏标签用橙色高亮任务中断/请求许可/完成状态，避免频繁切窗。
  https://github.com/agentscope-ai/QwenPaw/issues/7800
- **自定义 IMAP/SMTP 服务器**（#7791 [OPEN] PR，首次贡献者）— 允许 provider "custom" 接入自建邮件服务器。
  https://github.com/agentscope-ai/QwenPaw/pull/7791
- **OpenViking 记忆插件**（#7613 [OPEN] PR，首次贡献者，Under Review）— 按 #7616 确立的记忆插件架构重构为可选插件。
  https://github.com/agentscope-ai/QwenPaw/pull/7613

## 7. 用户反馈摘要

- **任务执行可靠性是最大痛点**：spawn subAgent 全部超时（#7678）、内存耗尽 OOM（#7722）直接影响核心可用性，用户即便延长 timeout 也无济于事，"技术我不懂，结果你们看看"反映出排查门槛高。
- **升级兼容性焦虑**：多名用户报告 2.1.x → 2.2.x 升级后 MCP 断连（#7716）、功能回归（#7799 疑似 #5320 复发），版本迁移体验需加强。
- **交互粒度诉求**：用户希望区分"讨论"与"执行"（#7801），以及不需要持续盯窗即可获知任务状态（#7800），指向对 agent 自主性的可控性需求。
- **参数透传的安全顾虑**：用户询问如何将频道 JSON 顶层参数（如电话号码、工号）直接透传给 MCP 工具，明确表示"不让 LLM 来传，因为会有被改写的风险"（#7650，已标记 wontfix）。
  https://github.com/agentscope-ai/QwenPaw/issues/7650
- **文档缺口**：用户反馈云端部署后模型配置、GitHub 账号绑定活跃度要求等说明不清（#7768），建议补充文档。
  https://github.com/agentscope-ai/QwenPaw/issues/7768
- **产物整洁度**：用户对比其他产品，认为当前输出大量中间/临时文件"杂乱无章"（#7797）。

## 8. 待处理积压

长期未合入或需人工评审的重要 PR：

- **#6776 [OPEN] fix(browser): 自愈失效的 Playwright driver 连接**（2026-08-07 创建，已 40 天）— 修复 driver 死亡后浏览器后端永久失效问题，标签含 `ready-for-human-review`，等待维护者评审。
  https://github.com/agentscope-ai/QwenPaw/pull/6776
- **#7057 [OPEN] fix(shell): 向子进程 PATH 添加用户本地 bin 目录**（2026-08-15 创建，已 32 天）— 解决 systemd/Launchd/Docker 下 PATH 被裁剪问题，标签 `ready-for-human-review`。
  https://github.com/agentscope-ai/QwenPaw/pull/7057
- **#7120 [OPEN] security: 默认启用 shell 逃逸检查 + 回归测试**（2026-08-18 创建，已 29 天）— 首次贡献者提交的安全加固，与已关闭的 #4037 网关认证问题高度相关，建议优先评审。
  https://github.com/agentscope-ai/QwenPaw/pull/7120
- **#7613 [OPEN] feat(memory): OpenViking 记忆插件**（2026-09-07 创建，标签 `Under Review`）— 等待维护者就记忆插件架构给出反馈。
  https://github.com/agentscope-ai/QwenPaw/pull/7613
- **#7382 [OPEN] feat(chat): 适配 AgentScopeRuntimeWebUI 1.2 并稳定队列**（2026-08-28 创建，已 19 天）。
  https://github.com/agentscope-ai/QwenPaw/pull/7382
- **#7760 [OPEN] fix(cli): 允许关闭时排空 memory 任务**（2026-09-14）— 涉及 ReMe memory 排空延迟与 Windows 桌面后端启动，时间敏感。
  https://github.com/agentscope-ai/QwenPaw/pull/7760
- **Issue #7650**（2026-09-09，标记 wontfix）— 参数透传需求被标记 wontfix 但用户关切（防 LLM 改写）具有合理性，建议维护者给出替代方案说明。
  https://github.com/agentscope-ai/QwenPaw/issues/7650

---

**健康度小结**：关闭效率高、社区参与活跃（首次贡献者占比可观），但 25 条待合并 PR 与多条高危 Bug（内存耗尽、subAgent 超时）尚无 fix PR，构成近期需重点投入的风险面。建议维护者优先处理 #7120（安全）、#6776/#7057（长期 ready-for-human-review）及 #7722/#7678 两个核心稳定性问题。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-16

## 1. 今日速览

ZeroClaw 今日保持**高强度活跃**：过去 24 小时 39 条 Issue 更新（新开/活跃 34、关闭 5）、50 条 PR 更新（待合并 44、合并/关闭 6），无新版本发布。讨论重心集中在 **RFC 级架构议题**（Computer-use、A2A 出站客户端、统一能力目录）与 **provider/runtime 稳定性缺陷**，多条 P1/P2 Bug 带有 `risk:high` 标记。社区贡献结构健康，但同时暴露明显的**审查吞吐瓶颈**——44 条 PR 排队待合并，其中多条为 XL 体量的长期 PR。整体健康度评估：**活跃度高、方向清晰，但积压与并行测试稳定性是当前主要风险点**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并 PR 的详细摘要数据（名单中展示的 15 条高评论 PR 均为 OPEN 状态），仅能从 Issue 侧观察到关闭动作：

- **#10272 [CLOSED]** [Bug]: correlate Hailo log assertions under parallel tests（provider:ollama）— 并行测试下 Hailo 日志断言不稳定问题已关闭，测试可靠性改善。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10272)
- **#10888 [CLOSED]** [Bug]: stale tool-result image strip rewrites the message on its second request and invalidates the cache prefix（provider:anthropic，zerocode）— 工具返回图片在第二次请求时被重写、导致缓存前缀失效的问题已关闭，与 Anthropic 缓存机制相关。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10888)

> 说明：合并/关闭 PR 共计 6 条，但数据源未提供其标题与摘要，故不作推断。

## 4. 社区热点

按评论数排序的焦点议题：

| 排名 | 议题 | 类型 | 评论 | 链接 |
|---|---|---|---|---|
| 1 | RFC: Computer-use support for desktop screen interaction and input control (#6909) | RFC | 16 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| 2 | RFC: A2A outbound client (A2ATool) (#9106) | RFC | 11 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) |
| 3 | RFC: unified package/capability/config/runtime-state catalog contract (#9346) | RFC | 9 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) |
| 4 | [Tracker]: channel/source shared-boundary cleanup (#8583) | Tracker | 6 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) |
| 5 | security: rumqttc 依赖链 RUSTSEC 集群 (#5869) | 依赖安全 | 5 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) |

**诉求分析：**

- **#6909** 自 2026-05 创建、已历经多轮修订（Revision 2 于 2026-08-24 由维护者接管），状态 `status:accepted` 但带 `risk:high`。讨论围绕"有界审批单元"、可执行文件边界与安全确认边界（#7155），说明**桌面自动化能力的需求真实且已进入安全细化阶段**，但落地仍需解决高风险授权模型。
- **#9106** 指出 A2A 支持被拆为 A2AServer（入站，已在 v0.8.2 落地于 `crates/zeroclaw-gateway/src/a2a.rs`）与 A2ATool（出站，仍未实现），当前 agent 无法主动调用外部 A2A 兼容端点。这是**生态互操作能力的一块明确缺口**。
- **#9346** 反映多个窄口径工作（#8908 插件包视图、#6489 产品级目录）尚未收敛为单一契约，属于**架构一致性问题**。
- **#5869** 为 P1 安全议题，`cargo deny check` 报告 4 条 RUSTSEC 通告（0049/0098/0099/0104/0134）全部溯源到单一传递依赖 `rumqttc v0.25.1`，其余 TLS 栈已在修复版本上，问题被**精确定位但处于 blocked** 状态。

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻塞**
- **#10659** [Bug]: Budget-exceeded Code turn loses visible progress after session restore（zerocode/tui，P1，risk:high）— 长 Code/ACP 轮次在达到每日成本上限后，会话恢复时丢失已流式输出的进度。**未标注 fix PR**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10659)

**S2 — 行为降级 / 工作流显著退化**
- **#10885** [Bug]: tool-returned images disappear after an unrelated tool call within the same turn（provider:anthropic/zerocode，P2）— 工具返回的图片在同轮次内一次无关工具调用后消失，`status:accepted`、`follow-up`。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10885)
- **#9332** [Bug]: image-aware pre-dispatch budgeting and context-meter accounting（zerocode/runtime，P2，in-progress）— 上下文计量器在图片密集型原生工具请求前严重低估、派发后又超出，`status:in-progress` 显示**修复推进中**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9332)
- **#10736** [Bug]: Pre-output stream failure skips advertised non-streaming fallback（provider:reliable，P2，in-progress）— 流式失败后日志声称回退但实际未执行已声明的非流式回退，**修复推进中**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10736)
- **#10883** [Bug]: Telegram media-group listener tests time out under repeated parallel runtime job（channel:telegram，P1）— 并行测试下间歇性超时，反映**并行测试基础设施的稳定性问题**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10883)
- **#10889** [Bug]: native Anthropic provider drops the rolling cache breakpoint when the last message ends with an image block（provider:anthropic，P2）— `apply_cache_to_last_message`（`crates/zeroclaw-providers/src/anthropic.rs` L775-789）仅在末块为特定类型时设置滚动缓存断点，图片结尾时断点丢失。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10889)

**已修复/关闭**
- **#10888**（已关闭）与 **#10272**（已关闭，并行测试日志断言）。

**趋势观察：** 本日 Bug 高度集中于 **zerocode 运行时的图片/上下文计量** 与 **Anthropic provider 缓存序列化** 两条主线，且多为 `follow-up`（延续此前修复的相邻机制），说明相关子系统正处于密集打磨期。

## 6. 功能请求与路线图信号

| 需求 | 状态 | 对应 PR | 纳入下一版本的可能性 |
|---|---|---|---|
| 默认 `stream_mode` 由 `off` 改为 `partial`（#10166） | accepted, P2 | 未见直接 PR | 高——改动小、体验收益明确 |
| Telegram/WhatsApp 外的渠道 Markdown 方言渲染（#10475 WhatsApp PR） | PR 待合并 | #10475 | 中高——已有实现，`needs-author-action` |
| A2A 出站客户端（#9106） | accepted RFC | 未见实现 PR | 中——已接受但无落地 PR |
| 可选渠道/工具从编译期 feature 迁移到运行时 WASM 插件（#8850） | in-progress tracker | 与 #7497、#8187 关联 | 中长期——依赖插件分发体系（OCI registry）先落地 |
| WASI 硬件 host function 能力门控（#8187） | RFC, P2 | #7420 相关 | 中长期 |
| Anthropic 存储式 OAuth profile（#9464 契约） | in-progress, P1 | **#9420（待合并，XL）** | 中高——PR 已存在但 `needs-author-action` |
| 紧急停止对在途/网络操作的完整强制（#9802） | blocked RFC, P1 | 承接 #9440 | 中——安全关键，但 blocked |

## 7. 用户反馈摘要

- **流式体验默认值不合理**（#10166）：`StreamMode::Off` 作为 `#[default]`，所有渠道回复默认变为一次性延迟消息，用户期望渐进式流式输出。
- **成本上限触发后的进度丢失**（#10659）：长任务在触及每日成本限制后，会话恢复丢失已可见进度，属于对**长任务可用性**的实质抱怨。
- **图片处理一致性**：#10885、#9332、#10889、#10888 多条反馈共同指向"图片在多轮请求中的**序列化不一致**"，包括预算低估、缓存前缀失效与图片丢失——这是当前最集中的用户可感知痛点。
- **渠道方言适配需求**（#10475）：模型输出标准 Markdown，而 WhatsApp 使用自有方言，导致星号与链接括号直接暴露给用户；Telegram、微信、邮件已有转换，WhatsApp 缺失，属于**跨渠道体验不一致**反馈。
- **Slack 互操作限制**（#10622）：Workflow Builder 步骤与其他应用消息以 `subtype = "bot_message"` 且无 `user` 字段投递，被两道独立守卫拒绝，用户需要可选接受此类消息。
- **依赖安全顾虑**（#5869）：MQTT 客户端拖累整个 TLS 栈停留在旧版本，社区给出了精确溯源。

## 8. 待处理积压

长期未响应或长期挂起的高风险事项，建议维护者优先关注：

| 议题/PR | 创建日期 | 状态 | 标记 | 链接 |
|---|---|---|---|---|
| #5869 rumqttc RUSTSEC 依赖集群 | 2026-04-18 | **blocked**, P1 | risk:high | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) |
| #6909 Computer-use RFC | 2026-05-25 | accepted | risk:high，历经多轮修订 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) |
| #7497 OCI 插件注册表 RFC | 2026-06-11 | **blocked** | P3, risk:high | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) |
| #9318 CI: PostgreSQL service-container job | 2026-07-23 | **blocked**, P2 | type:ci | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9318) |
| #9802 紧急停止完整强制 RFC | 2026-08-07 | **blocked**, P1 | 安全关键 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9802) |
| #9420 Anthropic 存储 OAuth profile PR | 2026-07-26 | OPEN, XL | `needs-author-action` | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) |
| #9535 上下文压缩锚定模型窗口比例 PR | 2026-07-29 | OPEN, XL | `needs-author-action` | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) |
| #10172 保留已配置 provider profile 语义 PR | 2026-08-20 | OPEN, XL, stacked | 依赖已合并的 #9109 | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) |
| #10485 zerocode 剪贴板临时文件清理 PR | 2026-08-30 | OPEN, XL | `stale-candidate`, `needs-author-action` | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10485) |

**维护者关注建议：**

1. **#5869 与 #9802 均为 P1 安全项且 blocked**，前者有明确修复路径（升级 rumqttc），后者需要网络出口边界的统一改造，建议明确阻塞原因与解除条件。
2. **4 条 XL 体积 PR 带有 `needs-author-action` 或 `stale-candidate`**（#9420、#9535、#10485 等），建议推动作者响应或评估拆分，以缓解 44 条待合并 PR 的审查压力。
3. **三个 blocked RFC（#7497、#9318、#9802）** 占据 P1–P3 关键路径，其中 #9318 的 CI 缺位会影响 PostgreSQL session backend 后续质量保障。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*