# OpenClaw 生态日报 2026-09-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-06 11:20 UTC

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

# OpenClaw 开源项目动态日报 — 2026-09-06

## 1. 今日速览

过去24小时OpenClaw项目保持高活跃度：累计更新Issues与PR各500条，其中新开/活跃Issue 372条、待合并PR 262条。今日发布v2026.9.2补丁版本，重点优化对话延迟与Gateway事件循环性能。多个高严重度回归问题（P0/P1）处于"待维护者决策"状态，包括Windows网关启动失败、Billing冷却机制缺陷等。自动化机器人clawsweeper持续贡献PR，但仍有多条存在兼容性与安全边界风险。整体来看，项目处于快速迭代期，社区反馈量大但维护者响应存在积压。

---

## 2. 版本发布

### v2026.9.2
**核心改进**：大幅提升聊天响应速度与交互流畅性。长对话记录与磁盘占用处理不再阻塞聊天、仪表盘和会话操作；支持仪表盘直接查询，减少冷启动加载负担；持久化历史读取移出Gateway事件循环（[#136862](https://github.com/openclaw/openclaw/pull/136862)、[#138](https://github.com/openclaw/openclaw/issues/138)）。

**兼容性**：改动了Gateway内部读取链路，建议用户升级后重点验证长会话与历史记录的加载表现。

---

## 3. 项目进展

今日无大规模PR合并记录，整体推进以审查中PR的持续更新与机器人自动修复为主：

- **性能优化**：`perf(browser)` 系列PR将浏览器配置文件默认值合并为单一map，减少重复内存分配（[#135648](https://github.com/openclaw/openclaw/pull/135648)）；Gateway模块清理未使用的响应schema代码（[#140061](https://github.com/openclaw/openclaw/pull/140061)），降低维护成本。

- **安全修复**：`fix(exec)` 阻止通过shell行续接符（反斜杠换行）绕过 `/approve` 安全检查（[#140064](https://github.com/openclaw/openclaw/pull/140064)）。`fix(security)` 修正GPT-6模型在审计中被误判为"低于GPT-5家族"的问题（[#140012](https://github.com/openclaw/openclaw/pull/140012)）。

- **测试与基础设施**：`refactor(browser)` 将可执行文件探测与浏览器类型分类逻辑解耦（[#140068](https://github.com/openclaw/openclaw/pull/140068)）；`fix(test)` 修复Bun环境下跨平台文件访问测试的假阳性失败（[#140047](https://github.com/openclaw/openclaw/pull/140047)）。

- **功能扩展**：`feat` 新增Team Reports插件，支持生成GitHub组织与Discord社区的日报/周报/月报，由可复用的维护活动站点代码提炼（[#139850](https://github.com/openclaw/openclaw/pull/139850)）；多Agent共享内存数据库方案提出以解决重复建库与搜索不一致问题（[#140042](https://github.com/openclaw/openclaw/pull/140042)）。

---

## 4. 社区热点

### 讨论最活跃的Issues（各12条评论）

1. **[#96975](https://github.com/openclaw/openclaw/issues/96975) — 子Agent完成内容隔离（P2）**：子Agent完成任务后将大量内容（报告、工具输出）注入父级上下文，导致主对话输入路径过载。用户期望默认只返回状态和子会话链接。

2. **[#132762](https://github.com/openclaw/openclaw/issues/132762) — overflow重试后消息丢失（P1）**：多阶段文档工作流中，overflow重试以工具结果结束且标记成功，但最终消息未交付给用户。

3. **[#113306](https://github.com/openclaw/openclaw/issues/113306) — SQLite快照恢复缺少崩溃与身份保证（P2）**：快照恢复在创建父目录后未持久化链接即报告成功，存在数据一致性风险。

4. **[#53408](https://github.com/openclaw/openclaw/issues/53408) — 长对话后工具参数静默丢失（P2, 👍2）**：超过15轮对话后，`write` 和 `exec` 工具开始静默丢弃所有参数，用户已多次遇到。

**特点分析**：今日讨论热度集中在"消息丢失/上下文污染"类问题上，12条评论的Issue中有3条直指会话状态与消息传递缺陷，且多为长期存在的问题（创建于3月至8月），社区耐心正在消耗。

---

## 5. Bug 与稳定性

### P0（发布阻断）

| Issue | 问题描述 | 状态 |
|---|---|---|
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | Windows升级2026.9.1后网关无法启动：新 `--task-supervisor` 标志静默退出（exit 0）但子进程未生成 | 🟡 待维护者审查 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 在线文档领先于发行版：`IsolatedSessions` 配置已在文档中但版本2026.3.13不支持（👍4） | 🟡 待产品决策 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing冷却远超故障时长：provider禁用窗口固定约5小时，期间所有请求立即失败，无探针恢复机制 | 🟡 待产品决策 |

### P1（高严重度）

| Issue | 问题描述 | 修复PR |
|---|---|---|
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | v2026.8.1上间歇性报"Provider工具调用JSON参数格式错误"（claude-sonnet-5），非特定文件/工具触发 | 无 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | 运行时上下文载体（~15K字符）置于用户消息之后，导致模型严重困惑和token浪费 | [修复讨论中](https://github.com/openclaw/openclaw/pull/137381) |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | 会话通道饥饿：followup消息队列独占会话通道，阻断入站消息20-30分钟 | 无 |
| [#132765](https://github.com/openclaw/openclaw/issues/132765) | `agents_wait` 忽略 `timeoutSeconds` 参数，约60秒后作为工具错误终止而非返回pending | 无 |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 入站通道消息零负载分发时被静默丢弃，无重试、无死信、无用户可见错误 | 无 |
| [#92241](https://github.com/openclaw/openclaw/issues/92241) | Gateway在更新/回滚后持有旧模块导入路径，入站消息因ERR_MODULE_NOT_FOUND被静默丢弃 | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/工具执行泄漏未回收的子进程，累积为僵尸进程导致运行时性能劣化 | 无 |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | 上下文溢出预估超出实际用量2.3-2.6倍，工具结果密集型轮次被误触发截断恢复 | 无 |

### P2（关注中）

- [#41201](https://github.com/openclaw/openclaw/issues/41201) — Control UI头像不显示（回归），外部URL返回404（👍1）
- [#95610](https://github.com/openclaw/openclaw/issues/95610) — OpenAI模型路径下prompt-cache因逐轮动态注入而完全失效（👍2）
- [#53408](https://github.com/openclaw/openclaw/issues/53408) — 长对话后工具参数静默丢失（👍2）
- [#90378](https://github.com/openclaw/openclaw/issues/90378) — cron存储从JSON迁移至SQLite时存在兼容性回归

---

## 6. 功能请求与路线图信号

### 明确的功能建议

- **[#99583](https://github.com/openclaw/openclaw/issues/99583) — 智能会话自动命名（P3, 👍2）**：懒生成、低成本模型、主题感知重命名。多条评论来自有会话管理需求的重度用户。
- **[#71058](https://github.com/openclaw/openclaw/issues/71058) — 单网关支持多个Azure/Teams机器人（P2）**：企业多团队部署场景的关键缺失。
- **[#58057](https://github.com/openclaw/openclaw/issues/58057) — 动态身份解析用于allowlist（P2）**：当前allowlist需硬编码用户ID+重启网关，多用户部署不友好。

### 可能被纳入下版本

- **[PR #140042](https://github.com/openclaw/openclaw/pull/140042) — 多Agent共享内存数据库**：解决多Agent各自建库导致的磁盘浪费与搜索结果不一致，是当前P1内存相关bug（如#137056）的系统性解决方案。
- **[PR #139850](https://github.com/openclaw/openclaw/pull/139850) — Team Reports插件**：满足团队级使用场景，与社区日益增长的多人在线协作需求一致。

---

## 7. 用户反馈摘要

- **长对话体验问题突出**：用户在超过15+轮的对话后遭遇工具参数静默丢失（[#53408](https://github.com/openclaw/openclaw/issues/53408)），且上下文溢出预估系统频繁误判导致对话被截断。社区对token计费与实际消耗偏差大表示困惑。

- **Windows平台用户受挫**：v2026.9.1升级后Windows请求故障导致用户回退到旧版，且Gateway以计划任务方式运行时诊断困难（[#137813](https://github.com/openclaw/openclaw/issues/137813)）。

- **文档与版本不同步引起信任问题**：多位用户反映在线文档包含尚未发行版本的配置项，期望文档与版本明确对应（[#48920](https://github.com/openclaw/openclaw/issues/48920), 👍4 为今日最高）。

- **认证与账单错误后的恢复路径不透明**：5小时冷却窗口太长且没有手动重置命令，用户在报价错误后无法继续使用，影响生产依赖（[#115642](https://github.com/openclaw/openclaw/issues/115642)）。

- **配置变更无安全保障**：配置写入失败可导致整个网关宕机，无自动回滚机制，用户被迫依赖命令行手动恢复（[#79164](https://github.com/openclaw/openclaw/issues/79164)）。

---

## 8. 待处理积压

### 长期未响应（Issue）

| Issue | 创建日期 | 关键程度 |
|---|---|---|
| [#53408](https://github.com/openclaw/openclaw/issues/53408) — 工具参数静默丢失 | 2026-03-24 | P2，👍2，持续5个月+ |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) — 文档领先版本 | 2026-03-17 | P0，用户信任度关键 |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) — UI头像不显示 | 2026-03-09 | P2 回归，基本功能 |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) — 会话通道饥饿 | 2026-03-25 | P1，消息入站受阻 |
| [#92241](https://github.com/openclaw/openclaw/issues/92241) — 模块路径陈旧 | 2026-06-11 | P1，消息静默丢弃 |

### 长期未合并（PR）

| PR | 创建日期 | 状态与风险 |
|---|---|---|
| [#92230](https://github.com/openclaw/openclaw/pull/92230) — /model 添加模型切换选项 | 2026-06-11 | 跨Discord/Slack/Telegram，已有截图+Telegram E2E证据，具备合并条件 |
| [#119735](https://github.com/openclaw/openclaw/pull/119735) — WhatsApp活动刷新修复（clawsweeper自动生成） | 2026-08-05 | P1合并风险含可用性，等待作者响应已超1个月 |
| [#117370](https://github.com/openclaw/openclaw/pull/117370) — 插件setup条目加载前校验 | 2026-08-01 | XL规模，安全边界与兼容性风险高，等待作者回复 |
| [#137381](https://github.com/openclaw/openclaw/pull/137381) — sessions_yield长会话历史保持 | 2026-09-03 | 涉及#110190等核心会话链路，需维护者尽快review |

### 维护建议

1. **优先处理Windows网关启动阻断问题**（[#137813](https://github.com/openclaw/openclaw/issues/137813)），该P0直接阻断用户升级路径。
2. **对创建超过3个月且仍处开放状态的P1/P2 Issue进行系统性梳理**，逐条给出明确决策（修复/延后/关闭）。
3. **将文档版本与发行版绑定**，避免在线文档指向未来版本的配置项导致用户信任流失。
4. **为长期高评论数Issue补充维护者响应承诺**，明确时间窗口，降低社区恐慌情绪。

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态 — 横向对比分析报告

**日期：2026-09-06**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**快速迭代与架构演进并行的关键阶段**。以 OpenClaw 为头部参照，日均 500 条 Issue/PR 流动、单日发版的高强度节奏已经成为常态，但同时大量 P0/P1 缺陷（消息丢�失、通道饥饿、上下文污染）积压待处置，凸显出"功能推进先于稳定性收敛"的行业通病。生态内各项目在核心方向呈现高度共识——会话状态持久化、跨端/多端一致性、子 Agent 编排可观测性、MCP 生态深化与安全边界收敛是普遍的投入焦点。与此同时，社区对长对话可靠性、消息传递完整性与"运行时诚实报告"（不静默失败、不误报成功）的诉求正在超越单一功能层面，成为影响用户信任度的关键指标。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 合并/关闭 PR | 健康度评估 | 活跃阶段 |
|------|------------|---------|---------|------------|-----------|---------|
| **OpenClaw** | 372 新开/活跃 | 500 累计；262 待合并 | ✅ v2026.9.2 | 未披露（大量） | ⚠️ 高活跃但 P0/P1 积压明显，维护者响应滞后 | 快速迭代 |
| **ZeroClaw** | 40（31 新开/活跃） | 50（41 待合并） | ❌ | 9 | ⚠️ 高讨论度但合入率低（9/50），维护带宽不足 | 快速迭代（RFC 密集） |
| **Hermes Agent** | 50（37 新开/活跃） | 50（48 待合并） | ❌ | 2 | ⚠️ 提交密度高但合并率极低（2/50），PR 积压成为瓶颈 | 高速迭代（合并滞后） |
| **CoPaw** | 13（10 新开/活跃） | 6（5 待合并） | ❌ | 1 | ✅ 社区自驱修复循环良好，新贡献者活跃 | 健康迭代 |
| **NanoBot** | 1 新开 | 31（23 待处理） | ❌ | 8 | ✅ 响应速度快（Issue 当日即有修复 PR），合并正常 | 质量加固+功能演进 |
| **NanoClaw** | 1 新开 | 16 | ❌ | 1 | ⚠️ 大批量重构系列待合入，合并节奏未跟上 | 架构重构期 |
| **ZeptoClaw** | 14（10 新开） | 8 | ❌ | 3 合并 + 3 关闭 | ✅ P0 安全缺陷 1 日内修复并合入，响应极佳 | 安全加固冲刺→架构治理 |
| **PicoClaw** | 2（1 新开/活跃） | 1（已关闭） | ❌ | 1（批量合并） | ✅ 清理积压中，稳定 | 小幅整理期 |
| **NullClaw** | 0 | 1 待合并 | ❌ | 0 | ✅ 低活跃但稳定，MCP 修复待合入 | 质量巩固 |
| **IronClaw** | 0 | 2 新提交 | ❌ | 0 | ✅ 平稳 | 常规开发 |
| **Moltis** | 0 | 1 待合并 | ❌ | 0 | ✅ 平稳 | 质量打磨 |
| **LobsterAI** | 1（既有 Issue 活跃） | 0 | ❌ | 0 | ⚠️ 长期 Issue 超 5 个月未修复，响应缓慢 | 低活跃/维护迟缓 |
| **TinyClaw** | — | — | — | — | （无活动） | 静默 |

---

## 3. OpenClaw 在生态中的定位

**生态参照基准**：OpenClaw 以单日 500 条 Issue/PR 的流动量级位居生态绝对头部（对比第二梯队 ZeroClaw/Hermes 的 50 条量级，差一个数量级），其发版节奏（v2026.9.2 补丁版）与自动化机器人（clawsweeper）辅助 PR 贡献的运作模式在当前生态中独树一帜。

**技术路线差异**：OpenClaw 的核心技术重心集中在 Gateway 事件循环架构优化、持久化读取链路解耦（#136862）、Shell 安全检查加固（#140064）以及多 Agent 共享内存方案（#140042），呈现出"以 Gateway 为中心、兼顾运行时安全与数据层一致"的工程化路线。相比之下，ZeptoClaw 更侧重声明式安全承诺的代码可验证性（环境变量清理、agent_mode fail-closed），ZeroClaw 则在运行时会话所有权与事件溯源架构上进行更深层重构（#9487/#10526），NanoClaw/Hermes 则分别聚焦 provider 契约去硬编码化与 Bot 群聊跨端一致性。

**社区规模与结构**：OpenClaw 面对的问题域更广（P0 含 Windows 网关启动失败、Billing 冷却机制、文档-版本脱节等多元议题），社区反馈量大但维护者响应存在积压；ZeptoClaw 的 Issues 主要由维护者自身基于架构评审驱动开出，社区外声较少但闭环速度快（P0 安全修复 1 日内完成）；Hermes 的 PR 积压（48 待合并 vs 2 合并）暗示其可能面临维护带宽的天花板。

**综合判断**：OpenClaw 是该生态的"基础设施级"项目——其问题清单覆盖了其他项目也会遇到的通病（长会话上下文污染、入站消息静默丢弃、子进程泄漏），其修复方案对全生态有溢出参考价值；但其庞大的问题积压（5 个月未响应的 P2、文档领先发行版导致的信任危机）也提示核心项目在高速扩张后需补上治理与响应速度的短板。

---

## 4. 共同关注的技术方向

### 方向一：会话状态持久化与跨端/多端一致性

| 项目 | 具体诉求 | 载体 |
|------|---------|------|
| Hermes Agent | Bot 群聊应跨 Desktop/Web/移动端/远程 gateway 持续可用，无需 Desktop 保持在线 | #97681（24 评论）、#89995、PR #98307 |
| Hermes Agent | 可插拔 SessionDB Provider（PostgreSQL/MySQL），解决 hot-update 与内存会话管理 | #23717（RFC，👍 8，21 评论） |
| ZeroClaw | Runtime-owned conversation sessions：将传输层与会话生命周期解耦 | #9487（33 评论，Rev 5） |
| ZeroClaw | Append-only session event history + deterministic state replay + derived agent streams | #10526（被多 RFC 依赖引用） |
| ZeroClaw | Gateway WebSocket 生命周期与 Agent 回合解耦，断线后续跑 | #7759（已 accepted/in-progress） |
| OpenClaw | SQLite 快照恢复缺少崩溃与身份保证 | #113306（P2） |

### 方向二：子 Agent / 委派执行的可观测性与生命周期管理

| 项目 | 具体诉求 | 载体 |
|------|---------|------|
| OpenClaw | 子 Agent 完成任务后大量内容注入父级上下文，应默认只返回状态和子会话链接 | #96975（12 评论，P2） |
| OpenClaw | overflow 重试后消息丢失；agents_wait 忽略 timeoutSeconds | #132762（P1）、#132765（P1） |
| ZeroClaw | 向父级暴露委托子代理进度；前台阻塞无中间产物可见 | #10531 |
| ZeroClaw | 不完整终态响应被误报为成功（信任链问题） | #9421（P1，risk:high） |
| CoPaw | 主 Agent 不主动查子 Agent 状态；需阻塞式 wait_agent_task 工具替代轮询 | #7450（8 评论）、#7580 |
| Hermes Agent | fan-out 委派子任务即刻投递 + 不可路由 origin 收敛为终态 | PR #104233 / #104235 |
| NanoBot | Fallback provider 在超时后无机会接管 | Issue #5674 / PR #5675 |

### 方向三：上下文管理——丢失预防、成本控制与 token 可观测性

| 项目 | 具体诉求 | 载体 |
|------|---------|------|
| OpenClaw | 15 轮以上对话工具参数静默丢失；上下文溢出预估超出实际 2.3-2.6 倍 | #53408（5 个月+）、#101929 |
| CoPaw | 早期上下文"彻底丢失"（160 页文档 + 1M 上下文场景）；模型看不到自己刚说的话 | #7447（已关闭）、#7579 |
| CoPaw | 上下文压力下折叠已消费的 thinking 内容，避免耗尽上下文窗口 | PR #7521 |
| Hermes Agent | Hindsight 记忆 bank 的 chat 级模板（`{chat}` 占位符） | PR #104205 |
| ZeptoClaw | Byte-stable Prompt Envelope：系统提示词每次轮转含实时时间等易变内容，"对 prompt cache 怀有敌意" | #661（RFC，最大架构性能缺口） |
| ZeroClaw | 在 history-trim 事件上暴露 token 计量 | PR #9713 |
| NanoBot | TUI 显示上下文窗口占用百分比而非聚合 token | PR #5679 |

### 方向四：安全边界收紧

| 项目 | 具体诉求 | 载体 |
|------|---------|------|
| ZeptoClaw | 子进程环境变量泄漏（API 密钥/令牌）；无效 agent_mode 静默回退至最高权限 | #660/#659（P0，均已修复合入） |
| NanoBot | 会话 key 路径穿越（`../../etc/passwd` 可访问目录外文件）；SSRF 防护测试覆盖 | PR #5633、PR #5678 |
| OpenClaw | Shell 行续接符绕过 /approve 安全检查 | PR #140064 |
| ZeroClaw | WASM 插件 TLS 只信任内置根证书；沙箱策略粒度化 + 文件系统变更限定 workspace | #9653（已修复）、#6996（RFC）、PR #9977 |

### 方向五：MCP 生态深化

| 项目 | 具体诉求 | 载体 |
|------|---------|------|
| NanoBot | MCP 工具 schema 字节预算控制；保留 MCP Apps 工具元数据与调用结果结构 | PR #5388 / #5386 |
| NullClaw | MCP stdio 通信超时限制 + 进程组清理 | PR #996 |
| NanoClaw | MCP server 跨容器连通性（NO_PROXY for host.docker.internal） | PR #3654 |
| OpenClaw | 插件/MCP 启动点的环境继承清理 | （同 ZeptoClaw #660 问题域） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | NanoBot | CoPaw | ZeptoClaw | NanoClaw |
|------|----------|--------------|----------|---------|-------|-----------|----------|
| **功能侧重** | 全能型 Gateway 中枢：多通道、多 Provider、浏览器自动化、Billing | 跨端 Bot 群聊 + SSH 远程生态 + 记忆管理（Hindsight） | 深度架构重构：事件溯源会话、WASM 插件运行时、沙箱策略 | MCP 生态 + Skills 市场 + 心跳自主运行 + Provider 容灾 | 个人 AI 助手 → 多租户 Hub（QwenPaw 2.2.0）+ 多 Agent 编排（gpt-sol） | Rust 实现的安全优先助手：可验证安全承诺 + 审计链 + Prompt cache 友好 | Provider 契约声明式架构 + Group 配置（speed/model/effort） |
| **目标用户** | 自托管个人/团队通用助手 | 跨设备多端重度用户、开发者 | 对会话架构与事件溯源有高要求的开发团队 | 开发者 + MCP 生态贡献者 | 中文长文档处理 + 企业多租户 + 插件开发者 | 安全敏感型用户/企业（Rust 技术栈） | 多 Provider 切换与成本/延迟分层的进阶用户 |
| **技术架构差异** | Gateway 事件循环 + 持久化读链解耦 | 桌面端 + SSH 远端后端 + Bot 多端分发 | Runtime-owned 会话 + Append-only 事件历史 + 沙箱策略层 | Skills/MCP 双生态 + Runner 超时与 Fallback 链 | PyInstaller 桌面版 + 平台版双轨 | Rust + 进程环境收敛 + fail-closed 模式 | Provider 契约由核心持有 + 类型化声明 + 安装 skill |
| **当前阶段** | 快速迭代（P0/P1 积压） | 提交密集但合并滞后 | 核心架构 RFC 讨论期 | 质量加固 + 功能演进并进 | 2.2.0 大版本前夜 | 安全清理完成 → 架构治理启动 | Providers 契约重构进行中 |

---

## 6. 社区热度与成熟度分层

### 第一层：头部高活跃项目（单日 Issue+PR 合计 ≥50）
- **OpenClaw**（~872 条流动）：生态绝对头部，但 ⚠️ P0/P1 积压 + 长期 Issue（5 个月+）未响应 + 文档-版本脱节正在消耗社区信任。
- **ZeroClaw**（~90 条流动）：讨论深度极高（RFC 33/26 评论），但合入率偏低（9/50），瓶颈在维护者审查带宽。
- **Hermes Agent**（~100 条流动）：提交密度最高（至少 10 新 PR/日），合并率仅 4%（2/50），PR 积压可能短期恶化。合并节奏慢于提交节奏。

### 第二层：中活跃项目（单日 10-50 条）
- **NanoBot**（32 条流动）：响应速度优异（当日 Issue→当日修复 PR），合并节奏正常，处于"修复+加固"良性循环。
- **NanoClaw**（17 条流动）：大批量重构系列（8 条相关 PR 同日更新）在途，架构方向明确但合并节奏未跟上。
- **ZeptoClaw**（22 条流动）：安全冲刺效果显著（P0 一日闭环），10 条评审驱动 Issue 标志转入系统性架构治理。

### 第三层：低活跃项目（单日 <10 条）
- **CoPaw**（19 条流动，第一贡献者驱动 3 修复 PR）→ 实际社区自驱力良好，处于 2.2.0 发布前夜。
- **PicoClaw / NullClaw / IronClaw / Moltis**（0-3 条流动）：稳定维护，质量打磨或功能小步快走。
- **LobsterAI**（1 条既有 Issue 活跃）：⚠️ 项目维护响应缓慢（5 个月+ 未修复），用户关注持续但进展停滞。

### 成熟度总结
- **快速迭代阶段**：OpenClaw、Hermes、ZeroClaw — 三者共同面临"提交/讨论速度 > 合并/响应速度"的积压型瓶颈。
- **质量巩固阶段**：NanoBot、ZeptoClaw、NullClaw、Moltis、IronClaw — 修复闭环快、测试补充积极。
- **架构重构期**：NanoClaw（provider 契约）、ZeroClaw（会话架构 RFC）— 重构方向明确但未合入前行为存在不确定性。
- **低效/停滞**：LobsterAI — 需警惕用户流失风险。

---

## 7. 值得关注的趋势信号

### 信号一："静默失败"成为全生态信任危机
OpenClaw 的入站消息静默丢弃（#112259）、模块路径陈旧（#92241）、NanoClaw 的 Telegram 通道静默死亡 4 天（#3728，从 v2.1.54 到 v2.3.0 未修复）、ZeroClaw 的不完整终态误报成功（#9421）、CoPaw 的 `_drain()` 吞异常（#7572）——**五个不同项目在同一天呈现出同一模式：系统失败时无日志、无告警、无重试、无死信、用户无感知**。这已不是单一项目的 Bug，而是 AI 代理基础设施层面的系统性设计缺陷。缺乏存活探针、心跳日志和健康检查机制是该类问题的共同根因。**对开发者的启示：将可观测性（成功心跳 + 失败告警 + give-up 机制）作为核心功能而非附加项来设计。**

### 信号二：长上下文管理从"截断"走向"结构化折叠"
CoPaw 的 PR #7521 提出"在上下文压力下折叠已消费的 thinking 内容"而非简单截断；Hermes 引入 Hindsight chat 级模板做记忆隔离；ZeptoClaw 提出 Byte-stable Prompt Envelope（易变内容导致 prompt cache 完全失效——OpenClaw #95610 亦有同问题）；ZeroClaw 设计 Append-only 事件历史 + deterministic replay。**行业正在从"怎么塞更多 token"转向"怎么结构化地管理 token 生命周期"**——折叠、隔离、缓存友好、可重放成为关键词。这对 token 成本敏感的自托管用户尤其重要。

### 信号三：Agent 编排的"可见性鸿沟"亟待填补
从 OpenClaw 子 Agent 内容隔离（#96975）、ZeroClaw 委托进度暴露（#10531）、Hermes fan-out 即刻投递（#104233）、CoPaw 的 wait_agent_task 阻塞工具，到 NanoBot 的 Fallback 透明切换——**父 Agent 无法感知子 Agent 状态、主模型超时后备用模型无法接管、子任务长尾拖死整体**的痛点正在跨项目同时爆发。开发者社区共同认可的方向是：子 Agent 应默认只返回状态与链接而非完整内容；委派应支持结构化事件上报（进度、失败、重试）而非纯文本终态。

### 信号四：安全边界从"文档承诺"走向"代码可验证"
ZeptoClaw 的架构评审暴露了最危险的模式——文档声称环境变量已清理但代码中不可验证、无效配置静默回退到最高权限模式（Autonomous）。ZeroClaw 修复 WASM 插件 TLS 与 Provider 行为不一致的安全缺陷（#9653）。NanoBot 会话路径穿越（#5633）、OpenClaw Shell 行续接符绕过安全检查（#140064）。**AI 代理因持有高权限工具（exec/write/deploy），其安全模型必须经受 fail-closed 策略 + 可验证性审计的双重检验。** 这对设计 Agent 工具调用链的开发者是直接警示。

### 信号五：多端/多设备成为"默认预期"而非"高级功能"
OpenClaw 的 Team Reports 插件与多 Agent 共享内存（#140042）、CoPaw 的 QwenPaw Hub 多租户版（#7318）与多电脑插件管理痛点（#7582）、Hermes 的 Bot 跨设备取回（#97681）、ZeroClaw 的 Telegram 进度展示（#10426）、IronClaw 的共享频道修复（#8076）——**用户正在将 AI Agent 从"单机工具"重新定义为"分布式协作基础设施"**。个人助手走向团队 Hub、云+端+移动多渠道触达是明确的行业方向。早期押注此方向的项目（CoPaw 的 Hub 版本）已在社区获得最高关注度（23 评论）。

---

*本报告基于 2026-09-06 各项目 GitHub 社区动态数据生成，所有引用均可在对应项目仓库中溯源。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-09-06）

## 今日速览

过去24小时 NanoBot 仓库活跃度较高：共有 1 条新 Issue 提交（NVIDIA NIM 超时导致 Agent 停止工作的 Bug），PR 更新 31 条，其中 8 条已合并或关闭、23 条仍在处理中。值得关注的是，多条长期开放的 PR（#5388、#5386、#4551、#4549 等）今日均有更新，说明维护工作正在持续推进。今日新提交的 PR 集中在 CI/CD 并行化、TUI 上下文窗口显示修复、SSRF 安全测试覆盖等领域，整体呈现"修复 + 加固"的节奏。此外，针对今日新 Issue #5674 的修复 PR（#5675）已在同日内提交流，项目响应速度快。无新版本发布。

## 项目进展

今日合并/关闭了 8 条 PR，其中较重要的有：

- **[#5309] [已关闭] fix(skills): allow marketplace skills to shadow builtins** — 修复了 Marketplace 技能覆盖内置（bundled）技能的问题：此前同名技能会导致安装按钮被禁用，且安装状态显示异常。该 PR 修复了技能加载器的一个关键行为缺陷，对 WebUI 用户使用第三方技能体验有直接改善。

其余 7 条被合并/关闭的 PR 数据源未提供详细信息，从仓库活跃度判断整体处于持续合并状态。多个此前开放的 PR（#5388、#5386、#4551、#4549、#5580、#5520）今日均有更新，其中 MCP schema 字节预算优化、heartbeat 会话/模型配置增强等功能性 PR 仍在评审中，远期进入代码库的可能较高。

## 社区热点

今日数据源未提供单条 Issue/PR 的评论数，从 PR 描述和提交节奏推断：

- **Issue #5674（[链接](https://github.com/HKUDS/nanobot/issues/5674)）**：报告 NVIDIA NIM 在返回 300s/600s 超时错误后 Agent 停止工作的问题。虽然仅 1 条且无评论，但该 Issue 直接关联了运行稳定性，且已有修复 PR #5675 在当日提交，社区响应迅速，属于值得关注的热点。

- **PR #5675（[链接](https://github.com/HKUDS/nanobot/pull/5675)）**：该 PR 直指 #5674 根因 —— 主模型挂起耗尽 runner 超时后 `FallbackProvider` 未收到超时响应、fallback 机制整体失效。这暴露出用户在配置了备用模型后仍无法获得容灾的痛点，涉及 provider 容错核心链路。

- 此外，PR #5652（签名直接投递 Webhook）与 PR #5633（会话 key 路径穿越修复）均带有 `conflict` 标签，表明存在合并冲突，可能对社区贡献者构成一定门槛，值得维护者优先解决。

## Bug 与稳定性

| 严重程度 | Bug 描述 | 修复状态 | 链接 |
|---------|---------|---------|------|
| **高（P1）** | NVIDIA NIM 返回超时错误（300s/600s）后 Agent 停止工作 — 根因是 runner 超时后整个调用链被取消，fallback provider 无机会接管 | 已有 PR #5675 于 2026-09-06 提交 | [Issue #5674](https://github.com/HKUDS/nanobot/issues/5674) / [PR #5675](https://github.com/HKUDS/nanobot/pull/5675) |
| **高（P1）** | 会话持久化在事件循环上同步执行，慢存储或文件锁争用可阻塞无关会话与运行时事件 | PR #5580 开放中（2026-08-28 提交，今日更新） | [PR #5580](https://github.com/HKUDS/nanobot/pull/5580) |
| **高（P1）** | 会话 key 未做路径穿越校验，恶意 session id（如 `../../etc/passwd`）可访问 sessions 目录之外的文件 | PR #5633 开放中（2026-09-02 提交，带 conflict 标签） | [PR #5633](https://github.com/HKUDS/nanobot/pull/5633) |
| 中（P2） | SSRF 防护存在两处无测试覆盖的表面：逐跳重定向校验与请求时 DNS 固定（TOCTOU 防御） | 已有 PR #5678 补充测试覆盖 | [PR #5678](https://github.com/HKUDS/nanobot/pull/5678) |
| 中（P2） | 多个测试存在不确定性或在 Windows 上无法运行 | PR #5677 提交测试修复 | [PR #5677](https://github.com/HKUDS/nanobot/pull/5677) |
| 中（P2） | TUI footer 错误展示聚合 token 指标，无法反映当前请求上下文占用 | PR #5679 修复为显示上下文窗口占用百分比 | [PR #5679](https://github.com/HKUDS/nanobot/pull/5679) |

## 功能请求与路线图信号

今日无新功能类型 Issue，但大量 PR 中可以看到项目功能演进的清晰方向：

- **MCP 架构深度优化**：两条 PR 同时指向 MCP（Model Context Protocol）方向 —— #5388（为模型可见的 MCP 工具 schema 添加字节预算控制）与 #5386（保留 MCP Apps 工具元数据及调用结果结构，与模型上下文隔离）。叠加 #5309 的合并（注册 Marketplace 技能可覆盖内置技能），可见 MCP 生态是当前最活跃的开发方向之一。

- **生产级安全能力**：PR #5678（SSRF 防护测试）与 PR #5652（签名直投 Webhook，绕过 Agent 循环发送确定性通知）表明项目正加强安全与企业集成能力。Webhook 功能的设计偏「从可信系统发出确定性通知」，对应运维/自动化诉求。

- **Agent 运行调度增强**：PR #4551（`isolated_session` 配置，允许 heartbeat 在目标会话中共享上下文）与 PR #4549（`model_override` 配置，支持为 heartbeat 指定更经济的模型）虽于 6 月底提交、今日仍在更新，但功能设计直指降低心跳任务成本与增强代理自主运行场景，可能进入下一版本。

- **Provider 可观测性**：PR #5520 为 Codex 接入 Langfuse 追踪（此前仅 OpenAI-compatible provider 支持），回应的是用户对调用链可观测性的需求。

## 用户反馈摘要

今日数据源中 Issue/PR 评论较少，从内容中可提炼以下用户侧信息：

- **NVIDIA NIM 用户面临超时与故障恢复失效**（Issue #5674）：即便配置了 fallback 模型，当主模型无响应时整个链路在 runner 层面被取消，备用模型永远不会被调用。此类用户的诉求是 Agent 能透明完成模型切换，而非整体停摆。从修复 PR 的迅速跟进来看，维护者对此类问题有较高优先级。

- **开源贡献者对测试稳定性存在真实困扰**：PR #5677 列出 Windows 环境下 `test_catalog_bounds_failure_only_keys` 在 5 次运行中失败 3 次等实际问题——该项目贡献流程中 CI 的可复现性问题对贡献者有实际影响。

- **Marketplace 技能使用体验改善**：PR #5309 的合并且描述清晰指向此前用户在使用技能覆盖（如 github 同名技能）时的困惑——安装按钮被禁用同时无法取消安装。该合并是对 WebUI 用户实际困惑的直接回应。

## 待处理积压

值得维护者关注的长时间未响应/未合并事项：

- **PR #4551（[链接](https://github.com/HKUDS/nanobot/pull/4551)）**：`isolated_session` 配置，6 月 26 日提交，今日有更新但仍开放中。该 PR 与 #4549 相互配合，功能设计较为完整，建议维护者评估是否可排入合并队列。

- **PR #4549（[链接](https://github.com/HKUDS/nanobot/pull/4549)）**：`model_override` 配置（heartbeat 使用更经济模型），同样 6 月底提交、一个月以上的评审期，建议尽快给出结论。

- **PR #5388（[链接](https://github.com/HKUDS/nanobot/pull/5388)）与 PR #5386（[链接](https://github.com/HKUDS/nanobot/pull/5386)）**：均为 MCP 方向增强（schema 预算控制与结果元数据保留），8 月 13 日提交，至今超过三周，今日有更新但仍在评审。两者涉及不改变模型上下文的 MCP 元数据/预算体系，是基础性能力，长时间悬置可能阻塞生态贡献者后续工作。

- **PR #5652（[链接](https://github.com/HKUDS/nanobot/pull/5652)）与 PR #5633（[链接](https://github.com/HKUDS/nanobot/pull/5633)）**：均带 `conflict` 标签——前者是签名直投 Webhook 的新功能，后者是会话路径穿越的安全修复。建议维护者优先解决冲突并移入评审队列，尤其 #5633 涉及安全，优先级应提高。

---

*数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 统计区间：2026-09-05 至 2026-09-06*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-06

## 1. 今日速览

过去24小时项目保持较高活跃度：共更新 Issues 50 条（其中新开/活跃 37 条、关闭 13 条），更新 PR 50 条（其中 48 条仍在待合并状态，仅 2 条合并或关闭）。今日合并关闭的 PR 较少，但新提交的 PR 密度很高（至少 10 个为新开 PR），其中包含数个修复关键缺陷（如 OpenRouter OAuth 登录流程 #104236、桌面 SSH fish shell 兼容 #104234、fan-out 委派投递收敛 #104235/#104233）。Issue 方面值得关注：今日新开的 #104217（Kanban 面板更新后 HTTP 500）仍处于 early triage 阶段，截止收盘评论数仅 2 条。综合来看，项目处于**持续高速迭代期**，合并节奏慢于提交节奏（48:2），PR 积压可能成为短期瓶颈。过去 24 小时内没有新版本发布，也没有新的 Release 产生。

## 2. 版本发布

过去 24 小时无新版本发布，无 Release 更新。

---

## 3. 项目进展

过去 24 小时内合并/关闭的 PR 较少（共 2 条），以下为主要进展：

### 已合并/关闭 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#103718](https://github.com/NousResearch/hermes-agent/pull/103718) | 为 Codex OAuth 启用原生 Astra 对话压缩（本地检查点） | 修复了 Astra 对话在 Codex OAuth 订阅下无法启用自动压缩的限制，完善了压缩链路 |
| [#103736](https://github.com/NousResearch/hermes-agent/pull/103736) | 补全 GitHub Actions 上的压缩 fixture 原生检查点 CI 覆盖 | 完善了压缩依赖链路的 CI 验证 |

> 注意：上述两条 PR 状态可能仍为 open（今日未确认合并），由于数据中仅有 2 条合并/关闭记录且未展开明细，以上推断基于标签与数据更新状态。**如需要精确合并列表，建议确认 GitHub 数据源。**

### 值得关注的新提交 PR（待合并）

以下 PR 今日新开或更新，虽尚未合并但方向明确，均可能显著影响下一版本体验：

- [#104236](https://github.com/NousResearch/hermes-agent/pull/104236) — **OpenRouter 浏览器 PKCE 登录**：`hermes auth add openrouter --type oauth` 可直接通过浏览器登录 OpenRouter 并将密钥自动入池，省去手动复制粘贴步骤。Salvage of #102639。
- [#104233](https://github.com/NousResearch/hermes-agent/pull/104233) — **fan-out 委派子任务即刻投递**：detached `delegate_task` 的每个子任务完成时即刻投递结果，不再等待最慢兄弟任务。修复长尾等待问题（salvage #76228/#76229）。
- [#104235](https://github.com/NousResearch/hermes-agent/pull/104235) — **不可路由 origin 的委派完成收敛为终态**：修复委派完成后因 CLI/TUI 退出而无法投递、重启后无限重放的循环问题。
- [#104234](https://github.com/NousResearch/hermes-agent/pull/104234) — **Desktop SSH 登录 shell 为 fish 时不再报错**：修复 `fish: Unsupported use of '='`（#80625）。
- [#104220](https://github.com/NousResearch/hermes-agent/pull/104220) — **Ollama 空 /models 返回防御**：Ollama 返回 `{"data": null}` 时模型选择器不再崩溃。
- [#104211](https://github.com/NousResearch/hermes-agent/pull/104211) — **oneshot 运行失败时保留结构化失败信息**：`hermes -z --usage-file` 在失败时不再丢失 `failure_reason` / `failure_retryable`。

这些 PR 若被合并，将进一步强化 SSH 远程链路、委派任务可靠性、认证易用性等关键体验。

---

## 4. 社区热点

### 最热 Issue（按评论数）

| Issue | 评论 | 摘要 |
|---|---|---|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 70 | **Automated Nous integration is blocked**（Nous→Enterkey 自动合并被 cron 冲突阻塞，dashboard 更新器停留在最后测试版本） |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 24 | **Bot Group Chats 应在 Desktop 关闭后继续工作**：Bot 应能分布在笔记本/家庭服务器/VPS 上跨设备取回 |
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | 21 | **RFC: 可插拔 SessionDB Provider（PostgreSQL / MySQL / 更多）**：解决 hot-update 与内存会话管理问题，目前 👍 8 |
| [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) | 18 | 请求将 Bot Mode group chats 暴露到 Web dashboard 与 gateway（目前仅桌面端可用） |
| [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) | 12 | **TUI (Ink) 在 Ghostty 上 Shift+字母输入被强制小写化**，大写输入丢失 |

### 最热 PR

所有今日 PR 评论数为 `undefined`（即暂无评论），热度更多体现在新 PR 的密集程度与覆盖面上。从 Issue 侧看，**TUI 输入错误（#90663）已积累 P1 标签与 12 条评论**，是最具响应的交互类问题。

**核心诉求分析：**
- **Group Chat 多端一致性**（#97681、#89995、#98307）：大量用户期望群组 Bot 会话跨越 Desktop/Web/移动端/远程 gateway 持续可用。这指向**会话持久化 + 跨端状态同步**是当前最高频需求。
- **Seamless 集成与自动合并**（#88584）：cron 合并流水线受冲突阻塞已持续 20 天且无 fix PR，上游协作稳定性成为信任风险点。
- **可插拔 SessionDB（#23717）**：开发者希望选用 PostgreSQL/MySQL 等外部数据库承载会话状态，与 #97681 的多端诉求形成叠加路线图信号。

---

## 5. Bug 与稳定性

### 🔴 P0 级

| Bug | 状态 | 说明 |
|---|---|---|
| [#103419](https://github.com/NousResearch/hermes-agent/issues/103419) — 后台记忆整理**可静默清空 USER.md** | **已关闭** | 5 条评论，标记为 P0。自动背景 memory review 提交后导致用户配置丢失。修复已合入（关闭状态），但建议用户关注后续版本中持久化一致性验证。 |

### 🟠 P1 级

| Bug | 状态 | 说明 |
|---|---|---|
| [#103590](https://github.com/NousResearch/hermes-agent/issues/103590) — **成功更新误判**：写入了 `stop_reason` 后被 `_receipt_looks_unfinished()` 误读为中断，`pre-update modules` 警告永不消失 | 已关闭 | 更新成功路径反而触发“未完成”警告的逻辑缺陷，修复已提交 |
| [#102486](https://github.com/NousResearch/hermes-agent/issues/102486) — **systemd 249 上 cron worker 因 `OOMPolicy=kill` 被拒而失败关闭** | 已关闭 | 版本升级后所有 gateway cron worker dispatch 失败的回归问题，修复已合入 |
| [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) — **`hermes update` 因陈旧 receipt 永远重复触发 fleet restart** | 已关闭 | #95294 修复引入的回归：update_receipts/latest.json 为陈旧中断 receipt 时无限 fleet 重启 |
| [#90663](https://github.com/NousResearch/hermes-agent/issues/90663) — **TUI 大写输入被强制小写化（Shift+字母失效）** | 打开，P1，needs-decision | macOS Ghostty 上 Ink TUI 的 composer 中 Shift+letter 产生小写。社区 12 条评论，暂无 fix PR |
| [#104217](https://github.com/NousResearch/hermes-agent/issues/104217) — **Kanban 面板更新后 HTTP 500**：分割后的 Kanban 模块找不到 `kanban_db.py` 中的私有 helpers | **打开（今日新开）** | needs-repro 标签，P2。若复现成功将影响所有已更新用户的看板 |

### 🟡 P2/P3 级

| Bug | 状态 | 说明 |
|---|---|---|
| [#96024](https://github.com/NousResearch/hermes-agent/issues/96024) / [#96188](https://github.com/NousResearch/hermes-agent/issues/96188) — **Desktop SSH 远端后端启动失败**（两份报告，第二份标记为 duplicate） | 均打开 | 启动超时 / `remote-lifecycle.ts` 双重 shell 引号问题导致远端后端永远无法启动。已有 PR #104234（fish shell）缓解部分场景，但**根本修复仍未合入** |
| [#83149](https://github.com/NousResearch/hermes-agent/issues/83149) — **Windows：venv 重建失败回退到破坏性 in-place 删除，无回滚** | 已关闭 | 高风险安装器缺陷，需关注发布说明中的修复方式 |
| [#77564](https://github.com/NousResearch/hermes-agent/issues/77564) — **Nous Portal 转发 OpenRouter 专用路由偏好导致 HTTP 400** | 已关闭 | 与 #89430（同根因）标记为重复并关闭 |
| [#89527](https://github.com/NousResearch/hermes-agent/issues/89527) — **computer_use 的 cua-driver 的 per-tool capabilities 被静默丢弃（`element_token` 永不附加）** | 打开，P2 | 涉及 MCP 2.0 兼容，暂无 fix PR |
| [#87025](https://github.com/NousResearch/hermes-agent/issues/87025) — **npm 依赖高危漏洞**（web + ui-tui 共 7 个）；最小修复：nanoid 3.3.18 + vite 8.2.1 | 打开 | 虽非运行时崩溃，但建议优先处理 |

**稳定性整体判断**：P0 级 USER.md 清空问题已关闭，关键 update / cron / desktop 修复均进入合入或已合入状态。但 TUI 大写输入 bug（#90663）和 SSH 远端启动（#96024/#96188）仍处于打开状态，仍是当前版本桌面端/交互体验的核心风险面。

---

## 6. 功能请求与路线图信号

### 高信号新功能

| 需求 | 载体 | 判断依据 |
|---|---|---|
| **Group Chat 跨端持久运行**（#97681） | Issue + PR #98307（feat(bot-mode)：跨 gateway / 消息渠道的群组连续性、控制与文件） | 已有专门 PR 支撑，路线图信号明确；若 PR #98307 合入，是 vNext 的核心 feature |
| **可插拔 SessionDB Provider**（#23717，RFC，👍 8） | Issue 征求设计意见 | RFC 阶段：期待官方决策。若落地可同时解决 hot-update 与跨端会话 |
| **Bot 群聊接入 Web dashboard 与 gateway**（#89995，👍 3） | Feature Issue | 与 #97681 / #98307 强绑定，是同一需求的多端表达 |
| **OpenRouter OAuth 浏览器登录（PKCE）**（#104236） | 新 PR | 已实现，等待合并，将大幅简化认证体验 |
| **Gemini 企业级 gateway 原生支持**（#72958） | PR（needs-decision） | 打开超过 40 天，等待决策 |
| **GPT-6 Astra baseline 支持**（#103057） | PR（needs-decision） | 新模型接入，处于 baseline 阶段 |
| **Hindsight 记忆 bank 的 chat 级模板**（#104205） | 新 PR（已提交） | 新增 `{chat}` 占位符支持会话级记忆库隔离，适合多会话场景 |

### 路线图判断

最集中的路线图信号来自 **Bot 群聊 / session 持久化 / 跨端一致性** 三件套（#97681、#89995、#98307、#23717 相互呼应）。这非常可能是下一迭代周期的主线 feature。

---

## 7. 用户反馈摘要

- **多端/多进程场景是高频痛点**：来自 #97681 评论的典型诉求——"Create a Group Chat, let your Bots work together, and pick up from another device without leaving Desktop running. Each Bot can live on your laptop, home server or VPS with its own…"（Bot 应可运行于笔记本/家庭服务器/VPS，并通过任何设备取回，无需保持 Desktop 在线）。
- **TUI/交互环境适配是当前体验洼地**（#90663）：用户 francip 报告了 Ghostty 下 Ink TUI 大写输入被静默吞掉的问题——"typing uppercase letters (Shift+letter) in the prompt composer inserts the lowercase character instead. Shift+R produces r, Shift+A produces a…"。核心交互无法正常输入大写字母，对日常使用影响明显。
- **升级/更新体验可靠性是信任焦点**：多个重复出现的“升级后 gateway 处于 pre-update modules”警告（#103590、#98588、#98022）表明用户对更新提示的迷惑与疲劳——"false positive 'gateways may still be serving pre-update modules' after launchd respawn"（#98588）。（注意：相关修复已经或接近合并，新版本应缓解。）
- **SSH 远端生态使用门槛高**（#96024、#96188）：桌面端 SSH 远端模式同时出现 boot 失败、timeout、shell 引号三组问题。用户在使用 fish/zsh 等非 bash shell 时更容易触发。
- **来自 Portal/OpenRouter 代理的用户遇到 HTTP 400**（#77564、#89430）：用户配置了 `provider_routing` 后请求直接失败。虽已关闭（根因相同），但反馈说明跨 provider 配置兼容性值得系统化测试。

---

## 8. 待处理积压

### 🟥 长时间未响应/未修复的重要 Issue

| Issue | 创建时间 | 已等待 | 标签 | 说明 |
|---|---|---|---|---|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) — Automated Nous integration is blocked（cron/jobs.py 冲突） | 2026-08-17 | ~20 天 | P3, comp/cron, invalid | 自动化合并流程已阻塞 20 天，dashboard 更新器仍停留在旧版本。虽带 `invalid` 标签，但影响集成健康度，应尽快人工介入 |
| [#42585](https://github.com/NousResearch/hermes-agent/issues/42585) — `web_search` 在 web toolset 被禁用时仍可经由 browser toolset 调用 | 2026-06-09 | ~89 天 | P2, comp/tools | 功能开关语义不清，跨 3 个月未合入 fix |
| [#72250](https://github.com/NousResearch/hermes-agent/pull/72250) — 完整俄语 Desktop 本地化 | 2026-07-26 | ~42 天 | P3, feature, i18n | 实现已就绪但因历史 authorship 问题持续搁置，等待维护者走完交接流程 |
| [#72958](https://github.com/NousResearch/hermes-agent/pull/72958) — Gemini 企业 gateway 支持 | 2026-07-27 | ~41 天 | P2, feature, needs-decision | 代码可工作，主要卡在决策层。该能力对欧洲/企业用户重要 |
| [#83149](https://github.com/NousResearch/hermes-agent/issues/83149) — Windows venv 破坏性回退（已关闭） | 2026-08-10 | — | P1, Windows | 已关闭但若有用户仍在使用受影响版本，建议发布 hotfix 公告 |

### 🟨 需要注意的长期生存信号

- **PR 合并率偏低**：待合并 48 条 vs 合并/关闭 2 条，若持续一周将形成明显积压；建议维护者关注 backlog 中 P1/P2 标签的 PR（如 #91775 Windows 内存 provider 导入死锁修复、#101143 Kanban worker 工具链保留修复）。
- **#104217**（Kanban 面板 HTTP 500）：若该问题被复现，将影响所有已更新用户的 Kanban；已标记 needs-repro，建议优先跟进复现步骤。

---

> 数据来源：Hermes Agent GitHub（NousResearch/hermes-agent），时间窗口 2026-09-06 前 24 小时。所有链接基于 Issue/PR 编号可导航。评论数与标签基于快照数据生成，可能随最新活动变化。本报告不预设任何模型偏见，仅列示数据事实。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-06

## 1. 今日速览

PicoClaw 过去24小时内整体活跃度偏低：共产生 2 条 Issue 更新（1 新开/活跃、1 已关闭）和 1 条 PR 更新（已关闭），无新版本发布。值得关注的是，Issue #3342（"事后转向"模式功能请求）因长期无响应被标记为 stale 并关闭。核心进展来自 PR #1559，该 PR 一次性合并了 4 个待处理修复（#1327 #1319 #1318 #1313），有助于清理积压。社区讨论焦点仍然围绕 IRC 长消息分段处理（#3287）与多轮对话的并发控制（#3342）两方面。

## 2. 版本发布

过去24小时无新版本发布。

## 3. 项目进展

**PR #1559 已关闭**（作者: [xuwei-xy](https://github.com/xuwei-xy)，2026-03-14 创建，2026-09-05 更新）

该 PR 将此前遗留的 4 个开放 PR（#1327、#1319、#1318、#1313）中的修复合并为一个变更集，属于批量清理性质的合并操作。虽然关闭状态未标注为 "merged" 还是 "closed without merge"，但其存在说明维护者正在推进历史积压 PR 的整合收尾。合并后，与之对应的多组分散修复将在单一 PR 中获得统一管理，降低了后续冲突和重复劳动的风险。

📎 [PR #1559](https://github.com/sipeed/picoclaw/pull/1559)

## 4. 社区热点

**Issue #3287 — [Feature] Better support long messages in IRC**（作者: superuser-does）

- 状态: OPEN | 创建: 2026-07-22 | 最后更新: 2026-09-05（昨天刚有更新）
- 评论数: **10**（过去24小时 Issue 更新来源于此）
- 👍: 0

这是当前讨论最活跃的 Issue。用户核心诉求是让 PicoClaw 理解 IRCv3 协议下拆分发送的长消息应被视为一条完整语义的消息。IRC 默认 512 字节限制和换行语义导致长文本被截断或误判为多条消息。该 Issue 创建已超过一个半月、同日有新的讨论进展，说明维护者与用户正在积极探讨实现路径。

📎 [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)

## 5. Bug 与稳定性

过去24小时内未报告新的 Bug、崩溃或回归问题。

关联参考：PR #1559 所合并的 4 个修复（#1327、#1319、#1318、#1313）本身即涵盖此前待处理的修复内容，但在合并信息中未提供具体 bug 描述，无法判定严重程度。

📎 [PR #1559](https://github.com/sipeed/picoclaw/pull/1559)

## 6. 功能请求与路线图信号

**尚未纳入路线图的功能请求：**

1. **IRC 长消息支持（#3287）** — 该请求涉及 IRCv3 消息聚合处理，目前仍处于讨论阶段且昨日有新进展。IRC 作为 PicoClaw 的接入渠道，此改进将直接影响使用 IRC 作为前端的用户体验，有较大概率进入后续迭代。

2. **"事后转向"（after-turn）消息队列模式（#3342）** — 用户希望新增一种可选的转向模式：当 Agent 正在处理第一轮任务时收到新消息，不应中断当前轮次，而是将消息排队到当前轮次结束后再处理。该 Issue 经历长时间无维护者响应后已被标记为 stale 并在昨日自动关闭。但这不代表需求消失——从 Issue 创建到关闭收到的评论内容来看，设计讨论已趋于完整，且该能力对多轮对话场景下的用户体验有实质提升。若社区呼声持续，可能以 reopened 或新 Issue 形式回归并进入规划。

📎 [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) · [Issue #3342](https://github.com/sipeed/picoclaw/issues/3342)

## 7. 用户反馈摘要

- **IRC 通道长消息体验受限（#3287 评论区）** — 多位用户在 Issue 评论区反映了自有 IRC 客户端（如 WeeChat 等遵循 IRCv3 协议的客户端）发送长文本时消息被截断/打散的实际困扰，并有用户提出了基于 IRCv3 `message-tags` 或 `batch` 指令的候选聚合方案。用户对现有 512 字节上限的处理方式表示不满，认为这影响了协作场景下的使用效率。

- **"打断式转向"体验不佳（#3342）** — 用户在评论中描述了实际使用痛点：当发送第二条指令打断正在执行的 Agent 任务时，第一条任务的剩余工具调用被整体丢弃（日志中显示 "Skipped"），导致用户必须手动重新发起不完整的任务。用户期望的默认体验是"不打断当前执行，只排队下一条指令"。

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建时间 | 状态 | 备注 |
|------|------|------|----------|------|------|
| #3287 | Issue | Better support long messages in IRC | 2026-07-22（46 天） | OPEN | 昨日有活跃讨论，已有 10 条评论，但无维护者正式回应或分配里程碑 |
| #3342 | Issue | Opt-in "after-turn" steering mode | 2026-08-21 | CLOSED (stale) | 已因 stale 自动关闭，功能性讨论在评论中成熟但未落地；建议维护者评估重新开启或转入 roadmap |
| #1559 | PR | merge PR #1327 #1319 #1318 #1313 | 2026-03-14 | CLOSED | 合并结果待验证；其覆盖的 4 个源 PR 对应的问题关闭状态需逐一确认，避免遗漏 |

综上，PicoClaw 目前处于小幅整理期 —— 无新功能与版本发布，核心工作是历史 PR 的批量合并与 stale Issue 清理。建议维护者在下一迭代关注 #3287 的实现方案确认，以及 #3342 的需求是否值得以新形式复活。

---

📎 [PicoClaw GitHub 仓库](https://github.com/sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-06

## 1. 今日速览

过去24小时内，NanoClaw 项目活跃度中等偏高，PR 流动明显（16条更新），但合并/关闭数量偏低（仅1条），表明核心团队正在进行大批量的"providers 契约重构"系列工作并持续更新相关 PR，合并节奏尚未完全跟上。Issues 侧仅1条新报告，且涉及严重稳定性问题（Telegram 入站通道静默死亡数天），值得高度关注。今日无新版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭了 1 条 PR。值得注意的是，该项目有两条内容几乎相同的 PR（#3591 与 #3727），标题均为 *refactor(providers): render provider instructions from core-owned canon*，其中 #3591 已关闭（可能被 #3727 取代或为重复提交），建议维护者确认该操作是有意为之还是误操作。

- **PR #3591 [CLOSED]** *refactor(providers): render provider instructions from core-owned canon* — 让代理指令文本由核心层持有，providers 声明类型化事实，由核心渲染规范文本。（作者：zvi-fried） [链接](https://github.com/nanocoai/nanoclaw/pull/3591)

此外，核心成员 zvi-fried 在过去数日连续提交了一条庞大的 providers 契约重构链（#3581、#3584、#3585、#3586、#3588、#3592、#3722、#3727），涉及 runtime、host、codex、opencode、setup 等多个 contract 的声明与实现，目标是将 provider 行为从硬编码和 flags 中解放，变成核心真正调用的可执行契约，辅以独立的 provider 安装 skill。这套系列虽然暂未大量合并，但方向明确——架构去硬编码化，建议关注后续批量合并带来的行为变更。

## 4. 社区热点

今日 discussion 热度整体不高，各 Issues/PR 评论数均为 0，但存在一个明确的信号热点：**core-team 成员 zvi-fried 的 providers 重构系列**（8 条 PR 于同日集中更新）构成社区目前最大的技术关注焦点，其核心诉求是建立"provider 契约声明 + 核心渲染 + 安装验证"的新架构。

此外值得关注的新方向：

- **PR #3726** *feat(channels): add native Proton Mail adapter via Proton Mail Bridge* — 新增 Proton Mail 渠道，解决"无法通过邮件与 agent 通信"的核心痛点（作者：drsmk238）。 [链接](https://github.com/nanocoai/nanoclaw/pull/3726)
- **PR #3355 / #3356** *Cursor Agent SDK provider payload + /add-cursor 安装 skill* — 持续数日未合并但仍在更新，说明社区对新增 Cursor 作为 provider 有持续期待。（作者：zvi-fried） [链接1](https://github.com/nanocoai/nanoclaw/pull/3355) [链接2](https://github.com/nanocoai/nanoclaw/pull/3356)

## 5. Bug 与稳定性

今日报告 1 条严重稳定性 Bug，暂无对应 fix PR：

- **[严重] Issue #3728 [OPEN]** *Telegram inbound can die silently for days: pollingLoop retries forever with no give-up, and logs nothing on success* — 在 v2.1.54 上被观察到（在 v2.3.0 中复验），Telegram 入站通道静默死亡约 4 天，宿主进程保持 active 状态但消息完全无法接收。根因指向轮询循环永不退出且成功时不记录任何日志，使问题无法被察觉，缺乏存活探针和可观测性设计。（作者：ergut） [链接](https://github.com/nanocoai/nanoclaw/issues/3728)

严重程度判断依据：通道长时间静默失败在 AI agent 场景下意味着用户消息完全丢失且无感知，且从 v2.1.54 到 v2.3.0 均未修复。建议优先补充 give-up 机制、成功心跳日志与健康检查。

另外注意 PR #3725 中的间接稳定性线索：*fix(setup): pin Linux signal-cli to 0.14.7* — 指出 v0.14.3 在向无既有会话的联系人发消息时会永久挂起。该问题已被发现并提交修复，但尚未合并。（作者：astraltrekkin） [链接](https://github.com/nanocoai/nanoclaw/pull/3725)

## 6. 功能请求与路线图信号

- **Proton Mail 渠道（PR #3726）**：新增原生 Proton Mail 适配器，通过 Proton Mail Bridge 实现邮件唤醒 agent 和同线程回复。目标用户是有邮件通信需求且使用 Proton Mail 的隐私敏感用户。当前实现需本地 Bridge，建议关注后续是否支持托管 Bridge。 [链接](https://github.com/nanocoai/nanoclaw/pull/3726)
- **Cursor Agent SDK 支持（PR #3356 + #3355）**：新增 Cursor 作为 provider 的完整 SDK payload 和 `/add-cursor` 安装 skill，在 setup wizard 中提供。若合并将补齐 Cursor 生态用户的使用路径。 [链接1](https://github.com/nanocoai/nanoclaw/pull/3356) [链接2](https://github.com/nanocoai/nanoclaw/pull/3355)
- **core-owned speed 推断属性（PR #3592）**：每组 agent 新增 `speed` 推断属性（与 `model`、`effort` 平级），支持 CLI 配置（`ncl groups config update --speed <tier>`），经审批门控。预期服务于不同延迟/成本档位需求的 agent 配置场景。 [链接](https://github.com/nanocoai/nanoclaw/pull/3592)

## 7. 用户反馈摘要

今日 Issues/PR 中直接的用户原声反馈有限，但两条新提交传递了清晰的痛点：

- **Telegram 渠道缺乏可观测性**（Issue #3728）：用户指出通道"静默死亡 4 天"且系统无任何告警，轮询循环永远重试但是否成功从不记录。用户的潜在期望是：失败达到阈值应主动放弃或告警、成功也应有心跳日志、整体应有健康检查机制。这是一条"基础设施可观测性缺失"类反馈，而非简单功能缺陷。
- **signal-cli 版本导致发送永久挂起**（PR #3725）：安装脚本锁定的 signal-cli 0.14.3 在向无会话联系人发消息时会出现永久挂起，影响 Signal 渠道新装用户的实际体验。
- **Proton Mail 用户无 IMAP/SMTP 可用**（PR #3726 的问题背景）：Proton Mail 不暴露 IMAP/SMTP，导致有邮件 agent 需求的用户无法接入，作者选择通过 Proton Mail Bridge 曲线解决。

## 8. 待处理积压

以下为长期未合并/未响应的重要 PR，提醒维护者关注：

- **PR #3356**（8月19日创建，已开放18天）*feat(providers): add Cursor Agent SDK payload* — Cursor provider 核心 payload，持续更新中但未合并。（作者：zvi-fried） [链接](https://github.com/nanocoai/nanoclaw/pull/3356)
- **PR #3355**（8月19日创建，已开放18天）*feat(skills): add /add-cursor provider install skill* — 配套 skill，与 #3356 应一并评估合并。（作者：zvi-fried） [链接](https://github.com/nanocoai/nanoclaw/pull/3355)
- **PR #3654**（8月29日创建，已开放8天）*fix(onecli): NO_PROXY for host.docker.internal so host-side MCP servers are reachable* — 解决容器内外 MCP server 连通性问题。（作者：tchopoorian） [链接](https://github.com/nanocoai/nanoclaw/pull/3654)
- **PR #3464**（8月23日创建，已开放14天）*Remove v1-only session-commands.ts superseded by v2 command gate* — 清理 v1 遗留代码，修复 #2603。（作者：wakqasahmed） [链接](https://github.com/nanocoai/nanoclaw/pull/3464)

**维护者提示**：zvi-fried 的 providers 重构系列（#3581、#3584、#3585、#3586、#3588 等）已开放 10 天且持续活跃，一批 8 条 PR 具有强关联性，建议安排专题 review 防止批量合并冲突与行为回归。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-06

## 1. 今日速览

NullClaw 今日整体活跃度较低：过去 24 小时无新增或关闭的 Issue，无新版本发布，仅有 1 条待合并的 PR。该 PR（#996）针对 MCP stdio 通信超时问题进行修复，涉及进程组清理和初始化失败的资源回收。项目处于小幅迭代期，质量加固优先于功能推进。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

**今日无已合并或已关闭的 PR。** 唯一活跃的 PR 尚处于开放状态：

- **PR #996 [OPEN]** — fix(mcp): bound stdio response waits
  - 作者：be-student | 创建于 2026-09-06 | [查看 PR](https://github.com/nullclaw/nullclaw/pull/996)
  - 内容：修复 Issue #991，为 stdio MCP 响应读取应用 `timeout_ms` 限制，请求超时时终止服务器进程组，初始化失败时清理子进程。
  - 验证状态：`zig build test --summary all`（7,3...，数据截断）
  - 评估：该 PR 属于稳定性修复，解决 MCP 通信中的超时挂起与僵尸进程风险，合并后将提升项目在长时间运行场景下的可靠性。

---

## 4. 社区热点

今日无高讨论量、多评论或多反应的 Issue/PR。唯一活跃 PR **#996** 是修复性工作，引用 issue #991（推测为 stdio MCP 响应超时挂起问题），但该 issue 在本次 24 小时窗口中无状态更新。社区讨论热度整体偏低。

---

## 5. Bug 与稳定性

| 严重程度 | 描述 | 状态 |
|---------|------|------|
| 中 | Issue #991：stdio MCP 响应等待缺少超时限制，可能导致请求挂起；超时后进程组/子进程未清理（据 PR #996 摘要推断） | **已有修复 PR #996**，待合并 |

无崩溃或高危回归被报告。项目当前稳定性风险点集中在 MCP 协议适配层，修复已就绪但尚未合并。

---

## 6. 功能请求与路线图信号

过去 24 小时无新增功能请求。从 PR #996 的修复内容来看，MCP 通信的可靠性是当前迭代重点。项目正在完善 MCP（Model Context Protocol）集成层的工程化质量（超时控制、进程生命周期管理），这通常是功能交付后的成熟度打磨阶段，为后续更复杂 MCP 功能的接入铺路。暂无明确的新功能路线图信号。

---

## 7. 用户反馈摘要

过去 24 小时窗口内无新的 Issue 评论可供分析。有限的反馈信号来自 PR #996 的开发者侧：提交者通过补丁完整修复了超时挂起 + 进程组终止 + 初始化失败清理三条链路，表明实际使用中 MCP 请求超时会导致子进程残留，属真实痛点。更多用户反馈需待 Issue/PR 讨论进一步展开后方可提取。

---

## 8. 待处理积压

- **PR #996**（修复：#991，stdio MCP 响应超时 + 进程清理）自 2026-09-06 起待合并，当前无合并阻塞信号，建议维护者及时 review 推进合入。状态：OPEN | [查看 PR](https://github.com/nullclaw/nullclaw/pull/996)
- 注意：Issue #991 作为 #996 的关联问题，今日无独立更新，请在合入 #996 后确认其关闭。

---

*总结：项目今日属于低活跃维护窗口，唯一动态为一项关键稳定性修复的提交与待审。项目整体健康度良好，无严重回归或社区负面反馈；建议关注 #996 的合并进度，以补齐 MCP 层的稳定性短板。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-06

## 1. 今日速览

项目今日活跃度较平稳，过去24小时内无新 Issue 开启或关闭，也无新版本发布。代码合并方面有2个新提交的 Pull Request 处于待合并状态，范围涉及共享频道逻辑修复与内嵌沙盒启动默认配置。此外，目前没有发现新的 Bug 报告或社区讨论热潮，整体处于常规开发节奏中。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，但有两个新提交的 PR 值得关注：

- **[#8076] fix(assistant): distinguish disconnected shared channels**（[链接](https://github.com/nearai/ironclaw/pull/8076)）— 作者 `be-student` 提交的修复，旨在区分配对用户断开的共享频道与未配对账户的状态，并为用户消息和机器人命令渲染频道特定指引，同时保持产品与适配器层面的拒绝分类一致性。这将改善 assistant 在共享频道场景下的交互体验与错误提示清晰度。

- **[#8075] feat: make the embedded Pi sandbox loop the startup default**（[链接](https://github.com/nearai/ironclaw/pull/8075)）— 作者 `serrrfirat` 提交的功能增强，将固定的 Bun/Pi agent-core worker 添加到沙盒镜像中，并设为全新启动环境的默认选项。该 PR 基于 #7908（`feat/7903-native-loop-sandbox-spike` 分支），标注了 **XL 规模、低风险**，涉及沙盒与文档范围，需等待基础 PR 合并后方可合入。若落地，将显著简化新用户的启动流程。

## 4. 社区热点

今日没有出现讨论特别活跃、评论或反应数最多的 Issues/PRs。当前仅有的2条 PR 均为刚创建一天内的新提交，暂无足够社区反馈。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号

今日无新的 Issue 开启，因此未从社区侧收到新的功能需求信号。从 PR 侧来看：

- **#8075** 将内嵌 Pi 沙盒循环设为启动默认值，呼应了此前 #7908 触发的路线图方向（sandbox 原生启动循环），预计若 #7908 与 #8075 相继合入，下一版本将正式引入该默认行为，值得关注。
- **#8076** 则服务于共享频道下用户配对体验的完善，属于增量修复方向，大概率会随后续 minor 版本发布。

## 7. 用户反馈摘要

今日无 Issues 评论产生，未捕获到新的真实用户痛点、使用场景或满意度反馈。

## 8. 待处理积压

- **PR #7908**（feat/7903-native-loop-sandbox-spike）作为 #8075 的基础分支目前尚未合入，直接阻塞了 #8075 的推进，属于当前依赖链上的关键一环，建议维护者评估其进度。（[#8075 依赖声明](https://github.com/nearai/ironclaw/pull/8075)）

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-06

## 1. 今日速览

今日项目活跃度较低：过去 24 小时仅有 1 条 Issue 更新（新增 0 条，实为长期 Issue #1068 的评论活跃），无 PR 活动，无新版本发布。值得关注的是，Issue #1068（删除 agent 后任务列表不自动刷新）在沉寂数月后今日重新获得评论，该问题自 2026-03-30 提出至今已超 5 个月尚未修复，属于长期积压问题。整体来看，项目当前处于维护节奏平稳但进展缓慢的阶段，主要活跃点集中在既有 Issue 的用户反馈积累上。

## 2. 版本发布

过去 24 小时无新版本发布，相关章节省略。

## 3. 项目进展

过去 24 小时无 PR 被合并或关闭，无实质性的代码推进。项目核心进展需关注此前已合入的 PR，今日无增量更新。

## 4. 社区热点

今日唯一的活跃 Issue 为：

- **[#1068] Bug: 删除当前的 agent，切换到别的 agent 之后需要自动刷新任务列表**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1068)）
  - 作者：OnePieceJoker | 创建于 2026-03-30 | 今日更新 2026-09-06 | 评论数：1
  - 背景：该 Issue 在沉寂约 5 个月后于今日重新获得评论，表明用户仍在关注此问题未被修复的状态。
  - 诉求分析：用户期望在删除当前 agent 并切换到其他 agent（尤其是仅剩 main agent 的情况）时，任务列表能够自动刷新。这反映了多 agent 切换场景下 UI 状态同步的核心痛点——当前实现未能在 agent 变更时触发任务数据的重新拉取，属于交互逻辑缺陷而非底层功能缺失。

## 5. Bug 与稳定性

过去 24 小时内仅报告/活跃了 1 条 Bug，无新增 Bug。

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---------|-------|------|--------------|
| 中等（UI 交互缺陷） | [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) | 删除当前 agent 后切换到其他 agent，任务列表不自动刷新，需手动操作才能看到新 agent 的任务数据 | 无 |

该问题不涉及数据丢失或系统崩溃，但干扰了多 agent 管理的核心工作流效率，且已持续 5 个月以上未获修复，建议维护团队关注。

## 6. 功能请求与路线图信号

今日无新功能请求提交。Issue #1068 虽为 Bug 报告，但其实质包含了产品行为改进信号——agent 切换后自动刷新任务列表可被视为一个用户体验增强点。结合项目当前无 PR 活跃的事实，暂无明确信号表明该改进会被纳入下一版本。若维护者计划优化多 agent 管理的交互流程，建议将 #1068 关联至相关迭代计划。

## 7. 用户反馈摘要

基于 Issue #1068 的讨论内容（含截图佐证）：

- **使用场景**：用户在多 agent 并行工作流中删除不再需要的 agent，并切换到 main agent 继续操作。
- **痛点**：删除 agent 后界面未感知 agent 身份的变更，任务列表仍停留在旧状态，main agent 的任务数据无法自动呈现，用户被迫寻找手动刷新途径，打断工作流。
- **隐式期望**：agent 切换（含删除场景）应作为状态变更事件，触发任务列表的自动化更新，而非依赖用户干预。
- **满意度**：该用户在 3 月提交问题后长时间未见修复进展，今日的评论活跃暗示其关注度仍在，但持续未解决可能影响其对项目维护响应速度的评价。

## 8. 待处理积压

以下 Issue 长期未获响应或修复，建议维护者关注：

- **[#1068] Bug: 删除当前的 agent，切换到别的 agent 之后需要自动刷新任务列表**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1068)）
  - 提出时间：2026-03-30（距今已约 160 天）
  - 最后维护者响应：无（截至本次更新仍为 OPEN 状态且无 assignee 或 fix PR 关联）
  - 优先级建议：中高——该问题影响多 agent 管理的日常操作效率，且用户已表现出持续关注，建议纳入后续 sprint。

---

*数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) GitHub 仓库 | 统计窗口：2026-09-05 至 2026-09-06*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-09-06

## 1. 今日速览

Moltis 项目今日整体活跃度偏低：过去 24 小时内无新 Issue 产生、无 Issue 关闭、无版本发布，仅有一条 PR（#1260）处于待合并状态。从数据面看，项目当前处于社区讨论的平稳期或间歇期，未出现大量用户反馈涌入或紧急缺陷报告。值得关注的是唯一活跃的 PR #1260 针对 shell 缺失场景的错误报告精度进行了修复，属于执行稳定性层面的改进，说明维护方向仍在持续打磨工具链的边界行为。总体而言，项目处于"低输入、低输出"的常规节奏中，无异常信号。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

- **PR [#1260](https://github.com/moltis-org/moltis/pull/1260)「fix(exec): report missing shell accurately」** — 待合并状态（作者：be-student，创建于 2026-09-06）

  该 PR 针对执行子进程时 shell 缺失的场景做了精确化修复：通过对 `spawn` 产生的 `NotFound` 错误结合配置的工作目录进行分类判断，解决了一个实际边界问题——当工作目录本身存在时，`sh` 不在 `PATH` 中的真实原因不再被目录存在性所掩盖，错误报告将准确指向缺失的 shell。该 PR 同时关闭了此前遗留的 issue #279，属于对执行模块错误诊断能力的增强。虽未合并，但若纳入主干，将提升 Moltis 在异常环境下的可诊断性，属于小而实用的稳定性改进。

## 4. 社区热点

过去 24 小时内无新增 Issue 讨论，PR #1260 为唯一活跃条目，评论数与 👍 数均为 0，未形成实质性社区讨论热度。该 PR 的诉求本身隐含了用户在非标准环境下（shell 不在 `PATH`）使用 Moltis 时遇到的困惑：错误信息不够精确，难以快速定位问题根源。当前缺乏社区互动数据，暂无法进一步分析热点趋势。

## 5. Bug 与稳定性

过去 24 小时内无新报告的 Bug。以下为与该 PR 关联的既有问题（来自 PR 描述中的关联信息）：

- **Issue #279（shell 缺失时错误报告不准确）** — 已有修复 PR：[#1260](https://github.com/moltis-org/moltis/pull/1260)（待合并）

  该问题属于中等严重程度的可用性缺陷：当配置的工作目录存在但 `sh` 不在 `PATH` 中时，错误信息会误导用户认为是工作目录的问题而非 shell 缺失。PR #1260 通过错误分类逻辑解决此问题，测试覆盖了默认特性场景并通过，同时 `cargo check -p moltis-tools` 验证通过，建议维护者尽快评审并合并。

## 6. 功能请求与路线图信号

过去 24 小时内无新功能请求 Issue。从 PR #1260 的修复内容推断，错误诊断精确化（区分"目录不存在"与"shell 缺失"）是当前执行模块的一个改进方向，可能在后续版本中继续深化——例如扩展至其他可执行文件缺失场景的精确报错。建议维护者关注 #279 关闭后是否引出用户在 shell 路径配置方面的进一步需求。

## 7. 用户反馈摘要

过去 24 小时内无用户评论反馈。建议维护者在 PR #1260 合并后关注 issue #279 的关闭是否引发用户对相关错误处理路径的后续反馈。

## 8. 待处理积压

- **PR [#1260](https://github.com/moltis-org/moltis/pull/1260)「fix(exec): report missing shell accurately」** — 待合并，作者：be-student

  该 PR 对应 issue #279 的修复，当前处于待评审状态。考虑到其修复的问题影响错误诊断准确性，且作者已完成测试验证，建议维护者优先安排评审。此外，PR 描述中提到测试已通过，但仓库中没有其他长期未响应的 Issue 或 PR 数据可供参考。

---
*数据来源：[Moltis GitHub 仓库](https://github.com/moltis-org/moltis) | 统计窗口：2026-09-05 至 2026-09-06*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-09-06** | **数据来源：github.com/agentscope-ai/CoPaw**

---

## 1. 今日速览

CoPaw 近24小时社区活跃度处于**高位**，共产生 13 条 Issue 更新（其中 10 条新开或处于活跃讨论状态、3 条关闭）和 6 条 PR 更新（5 条待合并、1 条已关闭）。值得关注的是，**一位首次贡献者 kabishou11 今日密集提交了 3 个修复 PR**（涉及飞书渠道队列恢复、频道模块懒加载、工具调用异常日志），且其中 2 个直接对应社区报告的活跃 Bug（#7559、#7572），显示出良好的社区自驱修复循环。项目技术债清理速度（10 条 Bug 相关 Issue 中有 4 条已关闭或有对应修复 PR）与新增功能诉求（4 条新 Feature/Question）基本持平，整体健康度良好。此外，#7318（QwenPaw Hub 多租户版，2.2.0 即将推出）目前累计 23 条评论，是近期最受关注的重大产品路线图话题。

---

## 2. 版本发布

**近24小时内无新版本发布。**

最近可参考的版本状态：Issue #7579 指向 2.2.0 Desktop 版（PyInstaller 后端），#7450/#7447 指向 2.2.0-beta3 平台版。

---

## 3. 项目进展

今日**无新合并的 PR**（唯一的关闭 PR #2134 实际创建于 3 月，今日关闭）。当前最值得关注的待合并 PR 是来自首次贡献者 kabishou11 的三连发，均针对已验证的社区 Bug：

- **[PR #7577](https://github.com/agentscope-ai/CoPaw/pull/7577)** `fix(console): enqueue follow-up messages when chat task is running` — 修复任务执行中发送跟进消息触发 HTTP 409 的问题，改为将消息放入队列（对应 Issue #7559）。**属高优先级**。

- **[PR #7578](https://github.com/agentscope-ai/CoPaw/pull/7578)** `fix(tool_calls): log exceptions in coordinator _drain()` — 在 `_drain()` 中补充 `logger.exception`，解决异常被吞导致无法定位的问题（对应 Issue #7572）。

- **[PR #7546](https://github.com/agentscope-ai/CoPaw/pull/7546)** `fix(channels): lazy-load unused builtin channel modules` — 将频道注册表改为懒加载，避免纯控制台场景仍被强制导入 `lark_oapi` 等沉重 SDK（可减少数十秒启动时间）。同日稍早提交的 PR #7547 修复飞书高优先级句柄卡住导致会话队列消费者死锁的问题。

此外，**[PR #7521](https://github.com/agentscope-ai/CoPaw/pull/7521)**（来自 niceIrene）提出在上下文压力下折叠已消费的思考（thinking）内容，避免长单轮任务耗尽模型上下文窗口，与 #7447/#7579 等上下文丢失类 Bug 直接相关，建议重点 review。

---

## 4. 社区热点

**[Issue #7318 — [Discussion] QwenPaw Hub 多租户版将于 2.2.0 推出](https://github.com/agentscope-ai/CoPaw/issues/7318)** 🔥 23 条评论 · 3 👍
最活跃的热点话题，也是项目的重大路线图公告。QwenPaw 从个人 AI 助手向团队多租户（Hub）演进，是官方对社区长期诉求（多用户访问、管理员控制等，追溯至早期 Issue #2324）的首次正式回应。**社区诉求核心是：从"个人工具"走向"团队协作平台"，需要多用户权限系统、管理员审计能力等**。

**[Issue #7450 — 主 agent+多子 agent 任务中主 agent 不主动查子 agent 状态](https://github.com/agentscope-ai/CoPaw/issues/7450)** 8 条评论（新增于今日）
讨论热度达 8 条，涉及 gpt-sol 场景下的工作流可靠性质疑，用户需要主动追问"进度如何"主 agent 才会查询子 agent 状态，且任务有时长时间无动静。社区正在关注多代理编排框架的可用性。

**[Issue #7559 — 任务执行中发新消息触发 409 报错](https://github.com/agentscope-ai/CoPaw/issues/7559)** 5 条评论
用户对消息队列语义存疑（"不应该直接排队吗？"），今日已有对应修复 PR [#7577](https://github.com/agentscope-ai/CoPaw/pull/7577) 提交，预计短期内可获得解决。

---

## 5. Bug 与稳定性

按严重程度排列：

**高严重度**

- **[Issue #7447](https://github.com/agentscope-ai/CoPaw/issues/7447)（已关闭）** — 上下文较长时早期记录"彻底丢失"，任务无法继续。涉及 160 页中文 Word 文档的 OCR 校对 + 排版场景，1M 上下文，多日操作后历史压缩导致早期上下文丢失（尽管标为已关闭，但存在同源问题仍在 #7579 出现）。该 Bug 对生产可用性影响严重。

- **[Issue #7579](https://github.com/agentscope-ai/CoPaw/issues/7579)**（新增） — 模型回复已持久化但后续请求中缺失，模型"看不到自己刚说的话"。2.2.0 桌面版（PyInstaller 后端）。**目前无对应修复 PR**，疑似与 #7447 存在同源根因（上下文意外截断/丢失），值得优先排查。

- **[Issue #7571](https://github.com/agentscope-ai/CoPaw/issues/7571)** — "总是记不住"，长期记忆/指令遵循双重失败：用户指定 TODO 文件仅产生于 B 路径子目录，两天后 A/B/C 均有；且 agent 会跑错目录开发 + 脚本自动部署覆盖未开发完成代码。反映记忆管理和路径约束执行的根本性缺陷，虽难以完全归因于单一 Bug，但属于高频生产痛点。

**中严重度**

- **[Issue #7559](https://github.com/agentscope-ai/CoPaw/issues/7559)** — 运行中发消息触发 409，已确认行为缺陷（新消息应入队而非拒绝）。**已有修复 PR #7577 待合并**。

- **[Issue #7572](https://github.com/agentscope-ai/CoPaw/issues/7572)** — `_coordinator.py` 的 `_drain()` 用 `except Exception` 吞掉整条链异常，仅返回 `str(exc)` 给模型，既不 `logger.exception` 也不重抛 → **无法定位故障**。**已有修复 PR #7578 待合并**。

- **[Issue #7576](https://github.com/agentscope-ai/CoPaw/issues/7576)** — `RetryChatModel` 硬编码 32768 context_size 回退值，导致所有模型在 >31130 tokens 时触发 CONTEXT_UNFIT 假阳性。v2.1.0 至 v2.2.0 **所有版本均受影响**，无修复 PR。

- **[Issue #7548](https://github.com/agentscope-ai/CoPaw/issues/7548)（已关闭）** — 对话切换/重启后导航记录偶发丢失。数据完整存在于 history.db，但 UI 不可见；疑似由上下文截断导致的显示问题。

**低严重度 / 已在修复**

- **[Issue #6814](https://github.com/agentscope-ai/CoPaw/issues/6814)（已关闭）** — macOS 上 SQLite WAL 模式打开 `history.db` 时 SIGBUS 崩溃，发生在 `sqlite3WalFindFrame` 内部（与会话记录持久化有关，修复已合入）。

---

## 6. 功能请求与路线图信号

**可能被纳入下一版本（2.2.0）的功能信号：**

- **[Issue #7318](https://github.com/agentscope-ai/CoPaw/issues/7318)** — QwenPaw Hub 多租户版（2.2.0 官方路线，非"可能"而是"确定"）。社区期望的能力包括多用户访问、管理员管控等。

- **[PR #7521](https://github.com/agentscope-ai/CoPaw/pull/7521)「在上下文压力下折叠已消费的思考内容」** — 由于 #7447 / #7579 的同类上下文丢失问题热度极高，该 PR 涉及的上下文管理机制改进（而非简单截断）很可能进入下一迭代。

- **[Issue #7580](https://github.com/agentscope-ai/CoPaw/issues/7580)** — 提议新增阻塞式内置 Tool `wait_agent_task`，使主 Agent 在提交长任务后可可靠等待子 Agent 返回，替代反复轮询 `check_agent_task` — 与 #7450 主/子 Agent 编排痛点直接互补，核心团队如果重视多代理架构完善度高概率会接受。

- **[Issue #7577（PR）+ #7583](https://github.com/agentscope-ai/CoPaw/issues/7583)** — 增加 AgentScope 社区登录、信箱与快速反馈功能，借助 QwenPaw 自身 Agent 能力做反馈报告的细化。一旦 Hub 版本落地，社区联动将是自然延伸方向。

**改进型需求（为 UX 提供参考）：**

- **[Issue #7582](https://github.com/agentscope-ai/CoPaw/issues/7582)** — 插件商店操作繁琐（安装后页面回闪、多插件管理无批量能力、缺一键更新与更新通知），与 #7583 一并勾勒出"生态运营"待完善面。

---

## 7. 用户反馈摘要

**高频使用场景与痛点：**

- **长文档 OCR 校对/排版处理**（#7447）：约 160 页中文 Word 文档 + 1M 上下文，多日多轮操作中经历手工压缩后上下文丢失 — 反映长上下文管理的核心瓶颈，用户被迫手工管理上下文，体验脆断。

- **多 Agent 任务编排**（#7450/#7580）：gpt-sol 作为主 agent + 多子 agent 运行复杂任务时，主 agent 无法感知或及时汇报子 agent 状态。单个长时间无动静 + 不主动问就不知道执行情况的模式，严重降低了运营者对任务执行进度的信任感。用户的诉求不是状态查询工具本身，而是主 agent **能够主动调度推进流程**。

- **多电脑部署管理插件**（#7582）："我在多台电脑上安装了 qwenpaw 来作为维护管家" — 说明 CoPaw 已有一批多设备的重度使用者，缺乏批量插件更新能力导致维护成本线性上升。

- **插件开发与部署路径管理**（#7571）：A/B/C 三路径的代码、输出、TODO 文件路径漂移记忆失控问题。长期反复强调仍无法固化为规则，触及记忆系统在路径类约束上的反复遗忘症结。诚如用户所述，这延伸出**部署安全性**诉求："用脚本自动部署插件，把没开发的 A 路径代码...（覆盖）"说明用户期望 CoPaw 在工程敏感操作上具备更严苛的约束力。

---

## 8. 待处理积压

- **[Issue #7576](https://github.com/agentscope-ai/CoPaw/issues/7576)（创建：2026-09-05，1 条评论）** — `RetryChatModel` 硬编码 32768 context_size 回退导致所有模型假阳性 CONTEXT_UNFIT 报错。影响 v2.1.0 → v2.2.0 全部版本，属于配置级别回归，**尚无修复 PR**，建议低优先级安排。

- **[Issue #7583](https://github.com/agentscope-ai/CoPaw/issues/7583) + [#7582](https://github.com/agentscope-ai/CoPaw/issues/7582)（创建：2026-09-06）** — 同日两条来自同一用户的体验改进型诉求（社区联动 + 插件商店批量操作），提出 12 小时内仅各有 1 条评论，暂无维护者回响。

- 另有 **[Issue #7571](https://github.com/agentscope-ai/CoPaw/issues/7571)（创建于 2026-09-05）** — 记忆规则反复失效（路径约束类），目前无解决迹象且在扩展中 → 建议纳入记忆/指令遵循专项池，短期采用缓解方案输出约束规则强化策略。

---

*日报生成时间：2026-09-06 · 数据窗口：过去 24 小时 · 数据来源：CoPaw GitHub 仓库（agentscope-ai/CoPaw）*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 — 2026-09-06

## 1. 今日速览

ZeptoClaw 今日处于**安全加固冲刺的高潮阶段**：两项 P0 级安全缺陷（子进程环境变量泄漏 #660、无效 agent_mode 静默回退至 Autonomous #659）均已关闭，对应修复 PR #672 与 #671 同日均已合并。过去 24 小时共处理了 14 条 Issues 与 8 条 PR，其中 4 个 Issues 与 3 个 PR 已关闭，项目健康度良好。值得关注的是，**10 个新开 Issues 集中指向一份 2026-09-06 的深度架构评审报告**，覆盖配置系统、审计持久化、扩展模型、Agent Pipeline 迁移等中长期路线图，标志着项目正从紧急修复转向系统性架构治理阶段。大量 P2-high 级别 Issues 的集中开立（10 个中的 8 个）表明团队已形成结构化、文档驱动的改进流程。5 个 Dependabot PR 待合并属常规依赖维护积压。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

今日合并/关闭的关键 PR 聚焦于消除两项 P0 级安全缺陷：

| PR | 对应 Issue | 内容 | 影响 |
|---|---|---|---|
| [#672](qhkm/zeptoclaw PR #672) | [#660](qhkm/zeptoclaw Issue #660) | 修复插件与 MCP 启动点的环境变量继承问题 | 此前插件与 MCP 服务器进程**继承完整父环境**，可能泄漏 API 密钥、令牌与数据库 URL。合并后将清理二进制插件与 MCP 传输层两个残余启动点的环境继承 |
| [#671](qhkm/zeptoclaw PR #671) | [#659](qhkm/zeptoclaw Issue #659) | 对无效 agent_mode 采取 fail-closed 策略 | 此前拼写错误或未知的 mode 字符串会静默解析为 `Autonomous`（最大权限），修复后改为回退至 `Assistant` 并附带警告日志，杜绝越权风险 |

此外，[#645](qhkm/zeptoclaw PR #645)（裁剪子进程密钥与超时清理进程树）与 [#644](qhkm/zeptoclaw Issue #644)、[#646](qhkm/zeptoclaw Issue #646) 一同在今日收尾——后者揭示的 Clippy 与 cargo-deny 基线 CI 问题已在 [#646](qhkm/zeptoclaw Issue #646) 中追踪。**值得注意的是这些安全修复的作者均为 qhkm 本人**（即维护者），表明当前安全问题是维护者通过深入架构评审主动发现并推动修复的。

**项目整体推进评估**：P0 安全隐患已清理完毕（详参[评审报告](docs/reviews/2026-09-06-hermes-comparison-review.md)提及的 Security posture 第 2 项与 Quick wins #1），项目安全基线显著提升。

## 4. 社区热点

今日讨论活跃度**偏低**（10 个新 Issues 均无评论），最重要的"讨论"通过维护者自身的深度评审驱动。值得关注的有：

- **评审报告驱动的 P0 Issues（#660/#659 已关闭）**——[#660](qhkm/zeptoclaw Issue #660) 指出文档中描述的"环境变量清理"在代码中**不可验证**（引用 `src/runtime/native.rs`, `src/tools/binary_plugin.rs` 等四处文件），[#659](qhkm/zeptoclaw Issue #659) 则揭露了最危险的行为——无效配置回退到最高权限模式。两者均来自 2026-09-06 的 Hermes 对比评审报告（`docs/reviews/2026-09-06-hermes-comparison-review.md`），诉求核心是**将声明式的安全承诺落实为可验证的代码实现**。
- PR #672 与 #671 紧随 Issue 开立次日即合并，体现了快速的响应-修复闭环。

## 5. Bug 与稳定性

按严重程度排列：

| 严重级别 | Issue | 状态 | 描述 | Fix PR |
|---|---|---|---|---|
| P0 (security) | [#660](qhkm/zeptoclaw Issue #660) | ✅ 已关闭 | 子进程环境变量清理不可验证，插件/MCP 启动点继承完整父环境 | [#672](qhkm/zeptoclaw PR #672) ✅ 已合并 |
| P0 (security) | [#659](qhkm/zeptoclaw Issue #659) | ✅ 已关闭 | 无效 agent_mode 回退至 Autonomous（最高权限），与安全默认值完全相反 | [#671](qhkm/zeptoclaw PR #671) ✅ 已合并 |
| P1-critical | [#646](qhkm/zeptoclaw Issue #646) | ✅ 已关闭 | 基线 CI 失败：Rust 1.97.1 新增 5 个 Clippy 警告 + cargo-deny 拒绝已知漏洞依赖 | —（基线修复类） |
| P1-critical | [#644](qhkm/zeptoclaw Issue #644) | ✅ 已关闭 | 运行时子进程继承完整环境 + timeout 后未终止进程树 | [#645](qhkm/zeptoclaw PR #645) ✅ 已合并 |

**评价**：今日无新增 Bug 报告；所有关闭的问题均为 7 月下旬遗留或 9 月 5 日评审发现并快速修复的安全/基线问题。**两条 P0 安全缺陷从报告到修复合并均仅在 1 天内完成**，修复响应速度值得肯定。

## 6. 功能请求与路线图信号

今日无新用户发起的 Feature Request。10 个新开 Issues 全部来自维护者基于架构评审产出的**路线图规划**，按规模（S/M/L）和实施优先级分布：

- **短期（可纳入下一版本）**：
  - [#670](qhkm/zeptoclaw Issue #670) [S][config] 配置来源透明度——提供"有效值来自何处"视图、环境变量弃用、schema-backed get/set
  - [#669](qhkm/zeptoclaw Issue #669) [M][safety] 审计链跨重启持久化与轮换（当前 SHA-256 链仅对当前进程有效）

- **中期（P2-high）**：
  - [#668](qhkm/zeptoclaw Issue #668) [M] Hermetic 集成测试（真实路径、不使用真实凭据）
  - [#667](qhkm/zeptoclaw Issue #667) [M] Footprint Ladder + Extension Host v2（注册表拥有的扩展元数据）
  - [#666](qhkm/zeptoclaw Issue #666) [M][memory] 跨会话持久记忆 + 事务性写入
  - [#665](qhkm/zeptoclaw Issue #665) [M][RFC] Cron Job v2——完成确认、运行台账、操作控制（协议需达成共识，含 RFC 标签）
  - [#664](qhkm/zeptoclaw Issue #664) [M][safety] 委派代理能力继承——子代理不得超过父代理策略
  - [#662](qhkm/zeptoclaw Issue #662) [L][channels] 完成通道插件协议（当前实质为**仅出站命令 sink**）
  - [#661](qhkm/zeptoclaw Issue #661) [L][perf][RFC] Byte-stable Prompt Envelope 契约（系统提示词对 prompt cache 不友好——每次轮转重建含实时时间等易变内容）

- **大型架构迁移**：
  - [#663](qhkm/zeptoclaw Issue #663) [L] 完成 Agent Pipeline 迁移——生产环境仍运行 5,227 行的 AgentLoop

另有 5 个 Dependabot 依赖升级 PR 待合并：[serde_json 1.0.150](qhkm/zeptoclaw PR #627)、[rpassword 7.5.2](qhkm/zeptoclaw PR #625)、[tokio 1.52.3](qhkm/zeptoclaw PR #623)、[scraper 0.27.0](qhkm/zeptoclaw PR #620)、[tower-http 0.6.11](qhkm/zeptoclaw PR #617)（均 6 月 3 日开立、已超过 3 个月未合并）。鉴于 #646 提及 cargo-deny 基线检查已恢复，维护者应在下一次提交中评估合并这批依赖更新。

## 7. 用户反馈摘要

今日 Issues 评论极少（#646 有 3 条、#644 有 1 条，其余均为 0 条），可提炼的**真实用户反馈有限**。从现有评论与代码引用可推断：

- **安全信任是首要关切**（维护者视角）：评审的核心诉求是"**文档声称的安全措施必须在代码中可验证**"——正是这一不匹配推动了 P0 Issues 的开立与快速关闭。
- **性能痛点明确**：[#661](qhkm/zeptoclaw Issue #661) 明确指出系统提示词每次轮转包含实时时间等易变内容，"对 prompt cache 怀有敌意"，是**最大的架构性能缺口**——这一点对重度使用用户的成本影响值得关注。
- **功能完整性与文档表述存在落差**：[#662](qhkm/zeptoclaw Issue #662) 指出 README 中插件通道被描述为"受支持"，但适配器实际只是出站命令 sink——文档宣称的能力超出实际实现，这一点可能影响下游集成者的预期管理。

## 8. 待处理积压

**提醒维护者注意**：

1. **Dependabot 依赖 PR 积压超过 3 个月**（5 个，6 月 3 日开立）：[#627 serde_json](qhkm/zeptoclaw PR #627)、[#625 rpassword](qhkm/zeptoclaw PR #625)、[#623 tokio](qhkm/zeptoclaw PR #623)、[#620 scraper](qhkm/zeptoclaw PR #620)、[#617 tower-http](qhkm/zeptoclaw PR #617)。因 #646 已恢复 CI 检查，#646 关闭时提示这些 PR 在合并前需通过 Clippy 与 cargo-deny 基线校验，长期搁置会持续产生合并冲突风险。

2. **Agent Pipeline 迁移（#663）是最大的架构债务**：代码注释（`pipeline.rs:18–45`）声明最终将使用 `CoreLoop`，但生产环境仍使用 5,227 行 `AgentLoop`——这是评审中识别的最大的文档-实现偏差。

3. **两个 RFC 标签的 Issues（#665 Cron v2、#661 Prompt Envelope）** 需形成设计决策。后者（缓存友好的系统提示词）被认为是"最大的架构性能缺口"，值得优先推进。

4. 在新修 CI 基线（#646）与安全清理（#672/#671）落地后，建议尽快批量评估上述 Dependabot PR，排除组件版本滞后带来的兼容性风险。

---

*数据来源：[github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)，统计窗口为 2026-09-06 前 24 小时。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-06

---

## 1. 今日速览

过去 24 小时内 ZeroClaw 项目保持高度活跃：共产生 40 条 Issue 更新（其中新开/活跃 31 条，关闭 9 条）和 50 条 PR 更新（待合并 41 条，已合并/关闭 9 条）。讨论焦点集中在两大核心 RFC（#9487 运行时会话架构、#9488 统一文件与附件架构），分别积累了 33 和 26 条评论。值得关注的是，两项 S1 级别（工作流阻塞）Bug（#9421 不完整终态响应误报成功、#10230 守护进程栈溢出）仍在排查中，且多个大型 PR 处于 blocked 或需要作者操作状态，可能拖慢整体合并节奏。无新版本发布。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

过去 24 小时内共合并/关闭 9 个 PR。以下为值得关注的项目进展：

- **（已合并/关闭）PR #9593**（Issue 同步关闭，类型：重构，P1）— *refactor(runtime): make TaskRecord the single lifecycle owner for background delegation*。将后台委托的生命周期状态收敛至 `TaskRecord` 单一所有权，消除了此前控制面与运行时双方各自维护状态导致的一致性问题。这是对 `tool:delegate` 后台执行路径的重要架构清理。
  - 关联 PR：[zeroclaw-labs/zeroclaw PR #9593](https://github.com/zeroclaw-labs/zeroclaw/pull/9593)

- **（已关闭）Issue #7911** — *install.sh selects a generic Linux binary on Android/Termux*。Android/Termux 上安装脚本错误选择通用 Linux 二进制而非匹配构建的问题已被修复，标志着安装覆盖面的进一步扩大。
  - 关联 Issue：[zeroclaw-labs/zeroclaw Issue #7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)

- **（已关闭）Issue #7910** — *Add Windows runtime test coverage for the self-update swap/rollback/sidecar paths*。该跟踪 Issue 旨在为 PR #7853（修复 Windows 自更新二进制交换路径）补充 CI 测试覆盖率，已关闭意味着相关测试工作已落地。
  - 关联 Issue：[zeroclaw-labs/zeroclaw Issue #7910](https://github.com/zeroclaw-labs/zeroclaw/issues/7910)

- **（已关闭）Issue #9653** — *plugin wasi:http trusts only the bundled webpki roots and never reads the OS trust store*。修复了 WASM 插件出站 HTTP 请求在 TLS 信任链上与 Provider 请求不一致（#6528 已修复后者）的安全缺陷，插件路径现在也遵循操作系统信任存储。该标签标注为 security 和 domain:security 的缺陷。
  - 关联 Issue：[zeroclaw-labs/zeroclaw Issue #9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653)

- **（已关闭）Issue #9593** 已在上文 PR 中说明。

综合来看，项目的推进主要集中在后台委托生命周期统一、Windows 自更新与 Android 安装覆盖、WASM 插件 TLS 信任语义对齐三个方面。此外有 9 个 Issue 关闭，项目整体处于健康的收敛状态。

---

## 4. 社区热点

> 以下基于"评论数 Top 20 Issue"与"评论数 Top 15 PR"数据展开。

### 4.1 最活跃讨论

| 排名 | Issue | 标题 | 评论数 | 链接 |
|------|-------|------|--------|------|
| 1 | #9487 | RFC: Runtime-owned conversation sessions and transport surface adapters | 33 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| 2 | #9488 | RFC: Unified file and attachment architecture for conversation surfaces | 26 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| 3 | #6808 | RFC: Work Lanes, Board Automation, and Label Cleanup | 24 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) |
| 4 | #6996 | RFC: Granular sandbox policy - filesystem restrictions | 24 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| 5 | #8692 | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |

### 4.2 热点背后的诉求分析

**第一梯队：核心架构深度讨论（#9487、#9488）**

- **#9487（33 评论）** — 提出 "运⾏时拥有会话（Runtime-owned conversation sessions）"，将传输层（WebSocket 等）与会话生命周期解耦，使其成为可替换的"适配器"。当前已修订至 Rev 5，每次修订都替换上一版投票快照。
- **#9488（26 评论）** — 提议为所有会话表面（聊天、Telegram、Web 等）建立"统一的文件与附件架构"，当前已修订至 Rev 10。

**信号**：社区正在围绕"运行时会话模型"和"文件/附件统一"两条主线进行深度 RFC 辩论，推送方为同一个核心贡献者（NiuBlibing），两个文档各历时近一个半月仍未收敛，说明设计难度大、关切点涉及安全（risk:high）。这可能是 0.9.0 或 1.0 版本最核心的架构演进方向。

**第二梯队：工程治理与安全机制（#6808、#6996）**

- **#6808（24 评论）** — 治理类 RFC：Work Lanes / Board Automation / Label Cleanup，已进入 Ratified / rollout in progress（Rev. 26）。
- **#6996（24 评论）** — 粒度化沙箱策略（文件系统限制），指出应用层路径准入与 OS 沙箱后端（Bubblewrap/Landlock/Seatbelt）之间历史上反复漂移，Agent 场景下需要一个统一、可组合的策略层。

**信号**：两个 RFC 均已达到 Rev. 24-26，处于稳定的"讨论尾声"，后续主要工作将转向落地执行。它们是解决 ZeroClaw 安全模型"碎片化"问题的关键。

### 4.3 值得注意的新热点

- **RFC #10526**（3 评论，创建于 09-01）— "Append-only session event history, deterministic state replay, and derived agent streams"， 这是 #9487/#9488 之外第三条新兴架构讨论线，且被 #10076（WASM 插件运行时 RFC）显式引用为"会话历史的唯一权威（exclusive authority）"。虽然评论数目前不高，但由于其作为其他 RFC 的"依赖项"，后续影响面可能极大。
  - 链接：[zeroclaw-labs/zeroclaw Issue #10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)

---

## 5. Bug 与稳定性

### S1 — 工作流阻塞（High Severity）

| Issue | 标题 | 状态 | 描述摘要 | 是否有 Fix PR |
|-------|------|------|---------|--------------|
| #9421 | [Bug]: Incomplete terminal responses can be reported as successful | OPEN（进行中） | Provider 可能在未给出可信终态回答时结束回合，运行时仍将其报告为成功——影响 `runtime/daemon`，属信任链问题。P1，risk:high。 | 未见直接 PR |
| #10230 | [Bug]: Daemon startup or reload can overflow during agent initialization | OPEN（进行中，r:needs-repro） | 当 ZeroCode 在守护进程运行时应用 Quickstart 配置，可导致 Tokio 运行时 worker 栈溢出并中止。影响 `zerocode/tui`，P1，risk:high。 | 未见直接 PR |

  - #9421：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | #10230：[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)

### 中等级别（P2，risk: high）

- 暂无本次 24h 新增的非安全型中等级别 Bug。

### 已在近期修复并关闭的 Bug（安全相关）

- **Issue #9653（已关闭）** — WASM 插件（wasi:http）出站 TLS 只信任内置 webpki 根证书，不读取系统信任库——与 Provider 自 #6528 的行为不一致（见上文"项目进展"）。该问题已关闭，说明修复已合入。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9653)

### 观察

- **#9421 与 #10230 同属"运行时不诚实报告"这一主题**：前者会误报成功、后者会导致整个 worker 崩溃。如果没有紧急修复 PR，这两项 P1 Bug 值得维护者优先响应，尤其是 #9421 涉及可信终态、与用户对输出正确性的信任直接相关。

---

## 6. 功能请求与路线图信号

### 与现有进行中 PR 对应、极可能进入下一版本的需求

- **功能：#10531 — 向父级暴露委托子代理进度**（P2，risk:high）
  当前默认的 `delegate` 在前台阻塞且只返回最终文本，后台返回 task_id，但 `check_result` 中途无中间产物可见。**建议**：本 Issue 与长期在途的 #10621/PR（coordinated agent lifecycle mutations）以及 PR #9713 存在协同空间——后者恰好引入了 `tool_result_truncation` 等结构化事件输出。若 #10621 或 #9713 被合入，则 #10531 所需的"结构化事件上报"基础设施已经具备，落地难度将显著下降。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)

- **功能：#7759 — 将 Gateway WebSocket 生命周期从 Agent 回合生命周期解耦**（P1）
  客户端断连不应取消正在进行的回合，支持断线后续跑与恢复。**信号：** 该 Issue 的标签包含 `status:accepted` 与 `status:in-progress`，且与 #9487 的 Runtime-owned sessions RFC 高度互补。#9487 若最终获得批准，则 #7759 的解决方案将自然落实在会话模型内。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)

- **功能：#6932 — 将 Gateway WebSocket 会话持久化为完整对话记录**（P2）
  是 #7759 的姊妹需求；二者共同指向"网关 WebSocket 从纯传输通道走向持久会话"的方向。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6932)

- **功能：#9575 — OpenAI 兼容连接使用 /models 预热而非 /chat/completions**（P2）
  属于低风险、局部改进型需求，可能与近期合并的 Provider 相关 PR 直接冲突或衔接；由于 PR #8966（carry live provider identity on usage events）正在调整 provider 行为，两者合入顺序需维护者协调。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9575)

- **功能：#10426 — 在 Telegram 渠道展示用户可见的 Agent 进度**（P2，risk:high）
  由外部贡献者（danieliyahu1）提出。对应 PR #9997（feat(channels/telegram): add secure model picker）同为 Telegram 渠道增强，预示 Telegram 将成为 ZeroClaw 在移动场景体验补齐的优先级渠道。
  - Issue: [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) | PR #9997: [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)

### 策略信号

- **#9487/#9488/#10526 三条 RFC 同时围绕"会话作为一等公民"展开，展现出 ZeroClaw 下一个架构版本的图谱**：从"为每个 Request 创建会话"演进到"运行时长存会话、事件以 append-only 记录、文件与附件统一管理"。这三条设计如果全部落地，将构成一次大版本的能力跃迁。
- **#6996 沙箱策略**与 **#9977（PR，fix(tools): confine filesystem mutations to workspace）** 相互呼应，共同收紧文件系统的策略边界：#9977 将"共享数据目录"变为权威目录，所有运行时路径下的写操作都必须限定在该目录中、由应用层策略做单一裁决。若有版本规划，这两者应打包发布并加入 Breaking Changes 说明。

---

## 7. 用户反馈摘要

> 以下均为从公开 Issues/PRs 描述与评论中提炼的真实用户场景（基于"数据概览"部分所列出的全部 Issue 描述）——因数据不包含逐条评论文本，本文将标注来源 Issue：

- **Android/Termux 安装体验持续改善**（来自 #7911，已关闭）：用户此前在 Android-Termux 上无论是安装预编译二进制还是本机构建，都遭遇通用 Linux 二进制的错误匹配。该问题已修复，但未在此 Issue 中看到"修复后实际验证"的用户回帖，维护者若掌握相关渠道可在下一次发布时鼓励 Termux 用户反馈验证结果。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7911)

- **Telegram 聊天静默期过长（核心诉求）**（来自 #10426，由新贡献者 danieliyahu1 提出）：用户在使用 Telegram 渠道执行长耗时搜索和工具调用时，"对话全程静默直至最终回复"，导致用户对 Agent 内部工作状态没有任何可视性，形成"黑盒体验"。这反映了 ZeroClaw 在 Telegram Channel 上缺少"打字指示器/进度卡"等中间反馈机制。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10426)

- **委托（delegate）子代理可见度不足**（来自 #10531）：在前台阻塞模式中，父 Agent 无法感知子代理的运行状态——该 Issue 由核心贡献者 Audacity88 提出，本质上反映了**开发者（而非最终用户）对可观测性的需求**。它暗示 ZeroClaw 在 `tool:delegate` 这类桥接能力被真实地用于复杂工作流时，缺少对完成时间和失败定位的支持。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)

- **网关 WebSocket 断连导致 in-flight Agent 回合被取消**（来自 #7759）：用户在 Web 聊天界面发起较长回合时，一旦客户端短暂断开，Agent 回合即被终止。这是典型移动网络不稳定场景下的体验痛点，也是"将 WebSocket 视为回合的拥有者而非通道"这一设计债务的典型表现。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7759)

- **Agent 回合完整性与信任感**（来自 #9421）：运行时可能将不完整的终态响应标记为成功——该 Issue 的表象虽是"信任链"（Trustworthiness），但其本质是用户对"Agent 是否有能力告知其尚在思考/尚未完成"的信任危机，属"静默失败"的另一种表现。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)

---

## 8. 待处理积压

### 长期开放、需维护者关注的 Issue

| Issue | 标题 | 创建时间 | 最近活跃 | 评论 | 状态提示 |
|-------|------|---------|---------|------|---------|
| #6808 | RFC: Work Lanes, Board Automation, and Label Cleanup | 2026-05-20 | 09-05 | 24 | `status:accepted`，rollout in progress，Rev. 26；建议维护者更新至发布计划，社区已投入大量心智 |
| #6996 | RFC: Granular sandbox policy - filesystem restrictions | 2026-05-28 | 09-05 | 24 | `status:in-progress` + `needs-maintainer-review`；与其关联的 PR #9977 已具备合入条件，建议优先 review |
| #7759 | [Feature]: Decouple gateway WebSocket lifetime from agent turn lifecycle | 2026-06-16 | 09-06（今日） | 6 | `status:accepted` + `status:in-progress`，P1；需与 #9487 对齐推进节奏 |
| #7759 后续 | #6932: persist gateway WebSocket sessions as full transcripts | 2026-05-25 | 09-06 | 3 | `status:accepted`，无进度信号 3 个月+ |

### 长期未合入的大型 PR（建议维护者给出明确结论）

| PR | 标题 | 创建时间 | 标签重点 | 阻塞原因 |
|----|------|---------|---------|---------|
| #9977 | fix(tools): confine filesystem mutations to workspace | 2026-08-13 | size:XL，needs-maintainer-review，risk:high | 等待维护者审查，时间已超 3 周；牵涉文件系统安全边界（与 #6996 直接相关） |
| #9713 | feat(runtime): expose token accounting on history-trim events | 2026-08-03 | size:XL，status:blocked，do-not-merge | 状态为 blocked + do-not-merge，需要维护者判断是否与 #10526（事件历史重塑）冲突并给出方向 |
| #9997 | feat(channels/telegram): add secure model picker | 2026-08-14 | size:XL，needs-maintainer-review，blocked，do-not-merge | 三周无维护者响应 |
| #10197 | fix(acp): persist interrupted turn progress | 2026-08-20 | size:XL，risk:high，risk:manual | 需安全检查，17 天未合入 |

- 全部链接见上文对应章节的引用。

### 维护者决策队列

- **Issue #8692** — [Tracker]: Maintainer decision queue for RFCs and design issues（15 评论）。该 Tracker 专门为"长期积压的 RFC 和设计决策"提供排队视图。结合今日速览中 41 个待合并 PR 中大量标注 `needs-maintainer-review` 的事实，建议关注此队列以识别瓶颈。
  - [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)

---

> 摘要评级：**项目活跃度★★★★☆（高）**——讨论热度高但合入速率偏低（9/50），主要瓶颈在于维护者对高危/大型 PR 的审查带宽（大量 PR 处于 needs-maintainer-review 或 blocked 状态）。近 24 小时内的修复（#9653、#9593、#7910、#7911）偏向工程治理与安全补全，核心架构演进（3 条活跃 RFC）仍在讨论窗口内，尚未进入实施阶段。健康度呈"高热讨论、温和合入"的积压型状态。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*