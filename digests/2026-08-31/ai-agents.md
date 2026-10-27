# OpenClaw 生态日报 2026-08-31

> Issues: 463 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-31 15:00 UTC

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

# OpenClaw 项目日报 — 2026-08-31

## 今日速览

OpenClaw 项目今日活跃度处于高位：过去 24 小时处理 Issues 463 条（新开/活跃 219 条、关闭 244 条），PR 更新 500 条（待合并 362 条、已合并/关闭 138 条），并发布 v2026.8.1 版本。值得关注的是，该版本引入了一项**已知迁移回归**（[#133347](https://github.com/openclaw/openclaw/issues/133347)：合法 cron 作业被误隔离），社区反馈活跃，多条 P1 级问题正在等待维护者审查。项目整体处于"高吞吐、高关注"状态，但稳定性问题（内存泄漏、进程僵尸、迁移回归）需要优先响应。

---

## 版本发布

### [v2026.8.1](https://github.com/openclaw/openclaw/releases)

- **更新提示**：若自动更新失败，官方建议使用本地编码工具链（local coding harness）辅助完成更新、诊断迁移错误，并确认 Gateway 正常启动后再恢复服务。
- **已知迁移问题（社区报告）**：[Issue #133347](https://github.com/openclaw/openclaw/issues/133347) —— 2026.8.1 的 scheduler 迁移会将**合法的存量 cron 作业**误判为 `invalid-schedule` 并隔离，同时静默丢弃活跃 inventory。已关闭（标记 `fix-shape-clear`），但有 7 条评论，建议升级用户检查 cron 任务是否受影响。
- **相关跟进**：[PR #134045](https://github.com/openclaw/openclaw/pull/134045) 提交了"retain 2026.8.1 release fixes on main"的修复，防止从已发布版本切换到 main 分支时回归（涉及插件 SDK 回调/导出、Windows 短路径 skill 监听等）。

---

## 项目进展

今日已关闭的关键 PR（代表项目推进会）：

- **[PR #128371](https://github.com/openclaw/openclaw/pull/128371)（已合并，release 相关）**：修复 beta.3 发布阻塞问题，使 canonical publisher 接受聚焦的 beta 验证清单。
- **[PR #128223](https://github.com/openclaw/openclaw/pull/128223)（已合并，CLI 修复）**：`openclaw` 别名目标现在从写入快照解析，修复了 [#127618](https://github.com/openclaw/openclaw/issues/127618) 相关的别名解析不一致问题。
- **[PR #123975](https://github.com/openclaw/openclaw/pull/123975)（已合并，基础设施）**：tsgo 包装器在超时/信号时清理进程树，避免 wedged 编译进程残留。
- **[PR #133291](https://github.com/openclaw/openclaw/pull/133291)（已关闭，重复）**：HTML 清理时保留带属性标签的块边界，后被标记为重复。
- **[PR #134102](https://github.com/openclaw/openclaw/pull/134102)（已合并，测试加固）**：为并发启动测试增加失败时间上限。

此外，**[PR #134045](https://github.com/openclaw/openclaw/pull/134045)**（待合并）将 2026.8.1 的修复保留在 main 分支上，避免版本切换引入回归，属关键维护性工作。

---

## 社区热点

| 议题 | 热度 | 诉求分析 |
|---|---|---|
| [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏（RSS 从 350MB 涨至 15.5GB → OOM 崩溃） | 23 评论 / P1 | 稳定性核心诉求，长跑进程可靠性 |
| [Issue #102175](https://github.com/openclaw/openclaw/issues/102175) 嵌入式 prompt cache 跨边界失效 | 18 评论 / P2 + 安全审查标记 | 成本与延迟优化受阻 |
| [Issue #22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon stop() 竞态条件（SIGUSR1 重启时孤儿进程） | 17 评论 / P1，已关闭 | 重启可靠性，与多个 crash-loop 报告关联 |
| [Issue #96834](https://github.com/openclaw/openclaw/issues/96834) WhatsApp 图片消息阻塞主通道 ~3 分钟 | 14 评论 / P1 | 多模态消息处理路径缺陷 |
| [Issue #79077](https://github.com/openclaw/openclaw/issues/79077) Telegram Guest Bots / Bot-to-Bot 支持 | 13 评论 / 8 👍 | 最高👍数的功能请求，对接 Telegram 新平台能力 |

**社区整体情绪**：重点关注**长时间运行稳定性**（内存泄漏、僵尸进程、crash-loop）与**通道能力对齐**（Telegram 新特性、WhatsApp 多媒体路径）。Telegram Guest Bots 的 8 个 👍 是本期最高，说明用户对平台新特性的跟进有明确预期。

---

## Bug 与稳定性

以下按严重程度排列（P1 优先），标注修复状态：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| **P1 / 崩溃** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏至 15.5GB → OOM 反复崩溃 | 开放，待维护者审查 | ❌ 无 |
| **P1 / 崩溃** | [#115424](https://github.com/openclaw/openclaw/issues/115424) V8 堆 OOM；恢复后一次崩溃变 7 次 core dump | 开放，待维护者审查 | ❌ 无 |
| **P1 / 数据丢失** | [#133347](https://github.com/openclaw/openclaw/issues/133347) 2026.8.1 迁移隔离合法 cron 作业 ↗ 静默丢弃 inventory | **已关闭** | ✅ 已修复 |
| **P1 / 消息丢失** | [#127229](https://github.com/openclaw/openclaw/issues/127229) Telegram 持久化更新被误 tombstone | 开放，有待复现 | ❌ 无 |
| **P1 / 进程僵尸** | [#97616](https://github.com/openclaw/openclaw/issues/97616) hook/tool 子进程不被回收 → 僵尸累积 | 开放，待维护者审查 | ❌ 无 |
| **P1 / 回归** | [#102006](https://github.com/openclaw/openclaw/issues/102006) exec 工具中止后阻塞同会话后续调用（PR #94412 回归） | **已关闭** | ✅ 已修复 |
| **P1 / 会话状态** | [#119884](https://github.com/openclaw/openclaw/issues/119884) 迁移后未 ANALYZE → 15s 会话操作 + 30-57s 事件循环饥饿 | 开放 | ❌ 无 |
| **P1 / 更新回滚** | [#134177 → PR [#134193](https://github.com/openclaw/openclaw/pull/134193)（待合并）npm-hardened 全局更新不再回滚 | Fix PR 已提交 | ✅ 待合并 |
| **P1 / 重启竞态** | [#22676](https://github.com/openclaw/openclaw/issues/22676) Signal daemon 重启竞态 → 孤儿进程 | **已关闭** | ✅ 已修复 |

**趋势判断**：内存类问题（#91588、#115424）均为长会话/多日运行场景触发，指向 Gateway 进程生命周期管理存在系统性缺陷。迁移质量（#133347、#119884）是本次发布的核心风险点，官方更新说明中提及的"本地编码工具链辅助迁移"侧面印证了复杂度。

---

## 功能请求与路线图信号

| 请求 | 热度 | 可能纳入下一版本？ |
|---|---|---|
| [Telegram Guest Bots / Bot-to-Bot 模式](https://github.com/openclaw/openclaw/issues/79077) | 8 👍 / 13 评论（P2，待产品决策） | ⚠️ 待产品决策，平台能力对齐需求明确 |
| [Topic-session families：一个 assistant 多个命名上下文通道](https://github.com/openclaw/openclaw/issues/90916) | 2 👍 / 10 评论（已关闭） | ➖ 已关闭，短期不会推进 |
| [内置 headless 浏览器](https://github.com/openclaw/openclaw/issues/53763) | 0 👍 / 7 评论（P3，待产品决策） | 🔻 优先级低 |
| [WhatsApp listen-only / hooks-only 模式](https://github.com/openclaw/openclaw/issues/78963) | 1 👍 / 6 评论（P2，待产品决策+安全审查） | ❓ 安全审查未通过前不会纳入 |

**今日新增功能 PR**：
- **[PR #134032](https://github.com/openclaw/openclaw/pull/134032)**：Slack 通道新增书签管理（bookmarks.add/list/edit/remove），补全 pins 之外的内容管理能力。
- **[PR #132454](https://github.com/openclaw/openclaw/pull/132454)**：Web UI 在账户行内展示 provider 用量（配额、重置时间、余额等），提升可观测性。

---

## 用户反馈摘要

- **升级阵痛（最强信号）**：多个用户报告 2026.8.1 升级后出现功能性回退——cron 作业被隔离（[#133347](https://github.com/openclaw/openclaw/issues/133347)）、`doctor --fix` 死循环建议自身（[#133999](https://github.com/openclaw/openclaw/issues/133999)）、QQBot 迁移后插件未受信任（[#124166](https://github.com/openclaw/openclaw/issues/124166)）。**"升级即冒险"的感知正在形成。**
- **长跑稳定性**：用户明确反馈 Gateway 在 2-3 天连续运行后内存膨胀至 15.5GB 直至 OOM（[#91588](https://github.com/openclaw/openclaw/issues/91588)），hook/tool 子进程僵尸化导致运行质量退化（[#97616](https://github.com/openclaw/openclaw/issues/97616)）。
- **困惑的恢复语义**：MCP loopback 在 Gateway 重启后不自动重连，`recovered=1` 具有误导性（[#98435](https://github.com/openclaw/openclaw/issues/98435)），用户被"假成功"信号误导。
- **通道不一致**：同一本地媒体路径在不同通道（WhatsApp vs Telegram）的 allowlist 行为不一致（[#110346](https://github.com/openclaw/openclaw/issues/110346)），影响 CLI 工具的可预测性。
- **被忽略的身份隔离**：dreaming 系统将多 agent 的会话片段混入共享语料，污染 agent 身份（[#65374](https://github.com/openclaw/openclaw/issues/65374)），已获 2 👍，属"场景正确但未获重视"。

---

## 待处理积压

以下为长期未解决、但影响面较大的问题，建议维护者优先关注：

| 问题 | 创建时间 | 持续时间 | 备注 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏 → OOM | 2026-06-09 | **83 天** | P1，23 评论，无 fix PR，社区关注度最高 |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) dreaming 污染多 agent 身份 | 2026-04-12 | **141 天** | P1，安全+数据污染，无 fix PR |
| [#51245](https://github.com/openclaw/openclaw/issues/51245) Telegram 斜杠会话 channel=unknown | 2026-03-20 | **164 天** | P2，稳定版本仍受影响，有 open PR |
| [#53783](https://github.com/openclaw/openclaw/issues/53783) Telegram 群组跨 agent 会话可见性不一致 | 2026-03-24 | **160 天** | P2，安全+消息丢失 |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) Telegram Guest Bots 支持 | 2026-05-07 | **116 天** | P2，8 👍，待产品决策 |
| [#119884](https://github.com/openclaw/openclaw/issues/119884) 迁移后缺 ANALYZE → 15s 会话操作 | 2026-08-06 | 25 天 | P1，直接影响大存储用户 |

---

**总结**：OpenClaw 今日发布 2026.8.1 并保持高活跃度，但**升级迁移质量与长跑稳定性**是当前社区最关切的两大主题。建议维护者优先处理 #91588（内存泄漏）与 #119884（迁移统计信息），并跟进 #134193（npm 更新回滚）与 #134045（保留发布修复）两个关键 PR 的合并。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-31**


## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高速扩张与稳定性承压并存的阶段**。以 OpenClaw 为首的核心项目保持每日数百条 Issue/PR 的高吞吐，但"升级即冒险"的用户感知正在形成——迁移回归（OpenClaw #133347）、内存泄漏（#91588 持续 83 天）等系统性问题成为社区最集中的痛点。与此同时，生态呈现明显的**方向分化**：主流项目（OpenClaw、NanoBot、Hermes）聚焦多 Profile 隔离、记忆系统重构与通道体验统一；安全敏感项目（ZeptoClaw）进入安全加固冲刺；基建型项目（NullClaw）则进入低活跃维护期。整体而言，生态正处于**从"功能堆叠"向"质量巩固与架构治理"转型**的关键窗口期。

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | Issues（关闭） | PR（待合并） | PR（合并/关闭） | Release | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 219 | 244 | 362 | 138 | ✅ v2026.8.1 | ⚠️ 高吞吐但稳定性承压 |
| **NanoBot** | 1 | 2 | 11 | 7 | ❌ | ✅ 活跃且健康 |
| **Hermes Agent** | 32 | 18 | 43 | 7 | ❌（v0.20.5） | ✅ 高活跃，Profile 隔离问题集中修复 |
| **PicoClaw** | 1 | 0 | 3 | 0 | ❌ | ⚠️ 中等，修复响应快 |
| **NanoClaw** | 9 | 41 | 31 | 10 | ❌ | ✅ 治理基建与功能并行 |
| **NullClaw** | 0 | 0 | 1 | 0 | ❌ | 🔻 低活跃，PR 积压 77 天 |
| **IronClaw** | — | — | 13 | 3 | ❌ | ✅ 优秀，bug 修复闭环快 |
| **LobsterAI** | 4 | 6 | 15 | 12 | ❌ | ✅ 活跃，安全 PR 积压 5 个月 |
| **TinyClaw** | — | — | — | — | — | 🔻 无活动 |
| **Moltis** | 2 | 0 | 1 | 1 | ✅ 20260830.01 | ✅ 稳定，arm64 修复落地 |
| **CoPaw** | — | — | 21（总） | — | ✅ v2.2.0-beta.5 | ⚠️ beta 冲刺，升级回归敏感 |
| **ZeptoClaw** | 8 | 0 | 1 | 0 | ❌ | ⚠️ 安全加固冲刺，安全债大 |
| **ZeroClaw** | 45 | 1 | 47 | 3 | ❌ | ✅ 高活跃，但审批积压成瓶颈 |

## 3. OpenClaw 在生态中的定位

**优势：**
- **社区规模断层领先**：单日 463 条 Issue + 500 条 PR 更新，远超其他项目（多数为个位数到数十条），是生态的绝对核心参照系
- **生态辐射力强**：PicoClaw、NanoClaw、ZeroClaw 等命名延续"Claw"家族，明显受 OpenClaw 架构范式启发

**技术路线差异：**
- **全功能一体化**：覆盖通道（Telegram/WhatsApp/Slack）、调度（cron）、记忆（dreaming）、插件系统，走"大而全"路线
- **高频率发布**：v2026.8.1 的发布节奏远超多数竞品，但也因此承受迁移回归风险

**核心软肋：**
- **长跑稳定性系统性缺陷**：#91588 内存泄漏（83 天未修复）、#97616 进程僵尸、#115424 V8 堆 OOM 指向 Gateway 生命周期管理存在架构级问题
- **升级信任危机**：cron 误隔离、`doctor --fix` 死循环、插件信任失效等多重升级回退，正在侵蚀用户信任

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **多 Profile / 多 Agent 隔离** | OpenClaw、Hermes Agent、ZeroClaw、NanoClaw | Hermes #99028（Profile 级 Gateway 错发 Cron）、#97909（17 个 Profile 共存）、ZeroClaw RFC #9487（会话所有权迁移）、NanoClaw #3001（旧 group 保留过期 skill） |
| **记忆 / 历史管理重构** | NanoBot、Hermes Agent、CoPaw、ZeroClaw | NanoBot 累计摘要重构（#5610）、Hermes PR #84374（记忆索引化）、CoPaw #7133（显式 reindex）、ZeroClaw RFC #6850（记忆生命周期与存储解耦） |
| **通道消息体验统一** | OpenClaw、NanoBot、PicoClaw、CoPaw | NanoBot #5567（飞书多轮回复整合）、PicoClaw #3343（Telegram 无限编辑）、OpenClaw #96834（WhatsApp 阻塞）、CoPaw #7408（飞书配置清空） |
| **长期运行稳定性** | OpenClaw、CoPaw、PicoClaw | OpenClaw #91588（内存泄漏→OOM）、#22676（重启竞态）、CoPaw #6608（长时 shell 阻塞）、PicoClaw #3343（无限 API 调用） |
| **安全加固与依赖漏洞** | ZeptoClaw、ZeroClaw、LobsterAI、Moltis | ZeptoClaw 单日 7 条安全 Issue（token 泄漏、时序攻击）、ZeroClaw #9678（Git shell 加固）、LobsterAI #908（MCP 注入，积压 5 个月）、Moltis K8s 沙箱隔离 |
| **第三方 harness / 工具集成** | CoPaw、LobsterAI、NanoClaw | CoPaw #7224/#7396（Aider/Claude Code 接入）、LobsterAI #1644（多 agent 编排）、NanoClaw #2317（免费语音转写，积压 4 个月） |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手（多通道 + 调度 + 插件） | 大众开发者、重度自动化用户 | 多通道适配层 + cron 调度 + 插件 SDK，一体化架构 |
| **NanoBot** | 轻量级多 IM 渠道 agent | 中小团队、IM 集成开发者 | Agent 运行时重构中（累计记忆、转录延迟组装），核心重构集中在内部团队 |
| **Hermes Agent** | 多 Profile 桌面 + CLI + Bot 群聊 | 多 Profile 重型用户、桌面端优先 | 多 Profile 架构 + Desktop/CLI/Gateway 三端协同 |
| **PicoClaw** | 轻量多通道（Telegram/IRC/DeltaChat） | 长尾 IM 用户 | 通道适配层为核心，IRCv3 multiline 跟进协议演进 |
| **NanoClaw** | 治理自动化 + 多通道 | 社区驱动型项目 | 开源治理基建（Issue 表单/PR 模板/自动标签/changelog）为特色 |
| **IronClaw** | WebUI + 设计系统 + NEAR AI 集成 | NEAR 生态开发者 | 五阶段设计系统重构 + 每日 benchmark 失败分类，工程文化强 |
| **LobsterAI** | 桌面端 AI 编码助手（网易有道） | 编码场景用户 | Electron 桌面 + Cowork 模式，依赖升级激进（vite 8.x/React 19） |
| **CoPaw** | 多 agent 编排 + 控制台 | 复杂工作流用户 | 2.2.0 beta 冲刺，harness 集成（Codex/Qoder/Claude Code 规划中） |
| **ZeptoClaw** | 安全优先的轻量 agent | 安全敏感部署 | 安全加固为当前主线，cargo-deny 零容忍 CI |
| **ZeroClaw** | 架构治理驱动的现代 agent | 架构敏感型用户 | RFC 驱动开发（多个活跃 RFC：会话管理、附件、WASM 插件运行时） |
| **Moltis** | 沙箱/远程执行引擎 | 多运行时隔离需求用户 | Docker/K8s 沙箱后端 + 分布式执行节点 |

## 6. 社区热度与成熟度

**第一梯队 — 快速迭代期（高活跃 + 功能推进为主）：**
- **OpenClaw**：单日 463 Issues / 500 PRs，发布节奏高频，但稳定性问题累积
- **Hermes Agent**：50 Issues / 50 PRs，多 Profile 隔离问题集中清理中
- **ZeroClaw**：46 Issues / 50 PRs，RFC 驱动下架构讨论活跃，但审批积压成为瓶颈
- **LobsterAI**：10 Issues / 27 PRs，依赖现代化推进快，但安全修复积压 5 个月

**第二梯队 — 质量巩固期（中等活跃 + 稳定性优先）：**
- **NanoBot**：3 Issues / 18 PRs，Agent 运行时重构密集但方向清晰
- **NanoClaw**：9 新开 / 41 关闭，治理基建与 Signal/WhatsApp 修复并行
- **CoPaw**：2.2.0-beta.5 发布，修复稳定性为主，功能范围锁定
- **IronClaw**：8 Issues / 16 PRs，设计系统重构 + 社区 bug 闭环出色

**第三梯队 — 低活跃/维护期：**
- **NullClaw**：仅 1 条 Dependabot PR 积压 77 天，维护节奏明显放缓
- **TinyClaw**：24 小时无任何活动
- **Moltis**：2 Issues / 2 PRs，稳定迭代但社区规模小

**关键观察**：三个"Claw"家族项目（OpenClaw、NanoClaw、PicoClaw、ZeroClaw）占据了生态的活跃度主体，而"Agent"命名项目（Hermes）和编码助手类（LobsterAI、CoPaw）则分别代表了桌面端与工作流编排两个细分方向。

## 7. 值得关注的趋势信号

1. **"升级即冒险"的用户信任危机正在成为行业性问题**：OpenClaw v2026.8.1 的 cron 迁移回归（#133347）、CoPaw 2.2.0-beta.1 的工具链回归（#7420）、Hermes 的错误升级建议导致 crash-loop（#97120）——三个项目同时出现升级回退，表明快速迭代策略正在与稳定性需求产生冲突。**对开发者的启示**：发布前应加强迁移路径测试（特别是数据迁移与配置兼容性）。

2. **多 Profile / 多 Agent 隔离是下一轮架构竞争的制高点**：Hermes 的 17-Profile 场景、OpenClaw 的 dreaming 身份污染（#65374）、ZeroClaw 的会话所有权 RFC（#9487）共同指向同一问题——当 agent 从"单实例工具"变为"多实例协作网络"时，身份边界、数据隔离与路由语义需要全新的架构支撑。**对开发者的启示**：在设计初期就将 Profile 作为一等公民，而非后置兼容层。

3. **记忆系统正在经历从"会话缓存"到"可插拔基础设施"的升级**：NanoBot 的累计摘要重构（#5610）、Hermes 的记忆索引化（#84374）、CoPaw 的显式 reindex（#7133）、ZeroClaw 的记忆生命周期与存储解耦（#6850）——四个项目不约而同地将记忆从隐式行为转为显式可配置、可插拔的模块。**对开发者的启示**：记忆的"召回质量"与"存储方式解耦"将成为标配，显式召回 API 是趋势。

4. **安全基线从"可选加固"变为"发布阻断项"**：ZeptoClaw 的 cargo-deny 零容忍 + 单日 7 条安全 Issue、ZeroClaw 的 Git shell 加固与配对码熵提升、LobsterAI 积压 5 个月的 MCP 注入修复——安全债的堆积速度已超过修复速度。**对开发者的启示**：自动化依赖漏洞扫描（如 cargo-deny、Dependabot）应成为 CI 硬门禁，而非可跳过的检查。

5. **第三方 harness / CLI 工具集成成为"agent 生态"的桥头堡**：CoPaw 用户定位到源码中已有的 Codex/Qoder 适配并追问 Claude Code 进度（#7396）、LobsterAI 用户期望 main agent 编排多个专职 agent（#1644）、NanoClaw 的 provider 契约重构（6 个 PR）——"我的 agent 应该能调用其他 agent/CLI 工具"成为高频需求。**对开发者的启示**：提供稳定的 harness/provider 抽象层，让外部工具可以以声明式方式接入，将是生态位竞争的关键。

6. **通道消息体验的"单响应一致性"成为用户满意度分水岭**：NanoBot 飞书用户要求"一条用户消息 → 一条 agent 回复"（#5567）、PicoClaw 的 Telegram 无限编辑 bug（#3343，持续数天 22.8 万次 API 调用）引发限流风险、OpenClaw 的 WhatsApp 多模态路径阻塞 3 分钟（#96834）——流式渲染、多轮回复整合、生命周期管理是 IM 渠道体验的三座大山。**对开发者的启示**：渠道适配层应内置统一的"消息反馈生命周期管理"，而非依赖各通道各自的超时逻辑。

7. **开源治理自动化开始成为活跃项目的标配**：NanoClaw 的 Issue 表单 + 自动标签 + PR 模板 v2 + changelog 自动生成（6 个 PR 同日推进）、IronClaw 的每日 clawbench 失败分类（#8004）——头部项目正在将"社区协作流程"本身工程化。**对开发者的启示**：治理自动化是降低维护者负担、提升社区吞吐的有效杠杆，值得在项目早期投入。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-31

## 1. 今日速览

NanoBot 今日维持高活跃度：24 小时内共更新 3 条 Issue（1 新开、2 关闭）与 18 条 PR（11 条待合并、7 条已合并/关闭），无新版本发布。核心维护者 chengyongru 主导了一系列 Agent 运行时架构重构（上下文化、转录组装、请求适配、记忆累积），标志着历史管理与记忆系统正处于密集重构期。Telegram 富消息流式渲染问题（[#5516](https://github.com/HKUDS/nanobot/issues/5516)）今日正式关闭，相关修复 PR 已合入；同时新增飞书渠道多轮回复整合需求（[#5567](https://github.com/HKUDS/nanobot/issues/5567)），显示社区对 IM 渠道消息体验的关注持续升温。整体项目健康度良好，P1 级 WebSocket 回归问题已有对应修复 PR（[#5617](https://github.com/HKUDS/nanobot/pull/5617)）待合入，另有两项 PR 存在合并冲突需维护者介入。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并的 7 条 PR 中，值得关注的关键推进包括：

- **[#5531](https://github.com/HKUDS/nanobot/pull/5531) — fix(telegram): upgrade streaming preview to rich in place at stream end（已合并）**：修复了 `rich_messages: true` 与 `streaming: true` 互斥导致富消息无法渲染的问题，流式结束时将预览就地升级为富消息。此修复直接关闭了 [#5516](https://github.com/HKUDS/nanobot/issues/5516)，填补了 Telegram 渠道体验的重要空白。
- **[#5612](https://github.com/HKUDS/nanobot/pull/5612) — refactor(agent): unify runner request fitting（已合并，P1）**：统一了 `AgentRunner` 在每次逻辑请求（含重试与无工具收尾）前的消息/工具适配与压力检查，并复用 provider 报告的 token 用量。
- **[#5610](https://github.com/HKUDS/nanobot/pull/5610) — refactor(agent): make memory summaries cumulative（已合并）**：使会话摘要成为基于上一检查点累积生成的替换型检查点，保留代表性上下文供后续 consolidation 使用。
- **[#5608](https://github.com/HKUDS/nanobot/pull/5608) — refactor(agent): defer transcript assembly to runner（已合并）**：将持久化历史与当前轮次显式区分为 `TranscriptInput`，由 `AgentRunner` 在模型执行前请求组装转录。
- **[#5618](https://github.com/HKUDS/nanobot/pull/5618) — style(tui): simplify the runtime header（已合并）**：简化 TUI 运行时头部信息展示。
- 文档修复两条：[#5598](https://github.com/HKUDS/nanobot/pull/5598) 与 [#5604](https://github.com/HKUDS/nanobot/pull/5604) 均明确了 `edit_file` 的 `occurrence`、`line_hint`、`replace_all=true` 互斥关系，关闭了 [#5592](https://github.com/HKUDS/nanobot/issues/5592)。

综合来看，Agent 运行时的历史管理相关重构（#5608 → #5612 → #5610 → #5568）正在系统推进，这条主线完成后将为记忆功能（[#5571](https://github.com/HKUDS/nanobot/pull/5571)、[#5570](https://github.com/HKUDS/nanobot/pull/5570)）铺平道路。此外，已合并的 PR 中 4 条来自同一维护者，社区贡献者的 PR 多处于文档层面，核心重构仍集中在内部维护团队，项目凝聚力强。

## 4. 社区热点

今日最受关注的讨论集中在两条：

- **[#5567 [OPEN] — Feat: 飞书渠道应整合多轮回复为单条流式卡片消息](https://github.com/HKUDS/nanobot/issues/5567)**（创建 2026-08-27，今日仍活跃，3 条评论）：用户要求飞书渠道将 agent 的多条回复（工具提示、进度消息、最终回复）整合为单条流式卡片消息，保持"一条用户消息 → 一条 agent 回复"的对应关系。该诉求与 Telegram 渠道刚修复的富消息流式问题（[#5516](https://github.com/HKUDS/nanobot/issues/5516)）高度同源，反映了多 IM 渠道对统一消息体验的共性需求。
- **[#5516 [CLOSED] — Telegram: rich messages never render when streaming is enabled](https://github.com/HKUDS/nanobot/issues/5516)**（今日关闭）：该 Issue 自 8 月 24 日提出以来仅 1 条评论即被修复关闭，说明项目对渠道核心缺陷响应速度较快。

## 5. Bug 与稳定性

今日按严重程度排列：

| 严重度 | 问题 | 状态 |
|--------|------|------|
| **P1** | **[#5617 [OPEN] WebSocket 监听健康检查将 SO_ACCEPTCONN 视为可移植](https://github.com/HKUDS/nanobot/pull/5617)**：`_listener_is_serving()` 依赖 `SO_ACCEPTCONN` 探测 socket 状态，但该 socket 选项并非跨平台可移植，可能导致健康检查误判。 | 已有对应 fix PR [#5617](https://github.com/HKUDS/nanobot/pull/5617) 待合入 |
| **P2** | **[#5592 [CLOSED] edit_file 文档未说明 match 选择器互斥](https://github.com/HKUDS/nanobot/issues/5592)**：文档误导用户可同时使用 `occurrence`/`line_hint`/`replace_all`，实际运行时会拒绝组合使用。 | 已通过 [#5598](https://github.com/HKUDS/nanobot/pull/5598)、[#5604](https://github.com/HKUDS/nanobot/pull/5604) 修复文档 |

今日无崩溃级或数据安全类 Bug 报告。需关注的是，[#5617](https://github.com/HKUDS/nanobot/pull/5617)（P1 回归）今天刚提交尚未合入，维护者应优先 review。

## 6. 功能请求与路线图信号

- **飞书多轮回复整合（[#5567](https://github.com/HKUDS/nanobot/issues/5567)）**：新开的功能请求。结合 Telegram 富消息流式刚落地（[#5531](https://github.com/HKUDS/nanobot/pull/5531)），可以判断"统一 IM 渠道消息模型"将成为下一阶段渠道层重点。飞书渠道目前已有 CardKit 流式卡片（`send_delta()`）基础，与 Telegram 修复路径高度相似，预计短期内会有对应 PR 出现。
- **Telegram 自定义 Bot API 地址（[#4919](https://github.com/HKUDS/nanobot/pull/4919)）**：支持自托管 Bot API server 或企业网关，社区等待已超一个月，当前存在合并冲突，值得维护者尽快处理。
- **Memory 显式召回（[#5571](https://github.com/HKUDS/nanobot/pull/5571)）** 与 **可插拔召回后端（[#5570](https://github.com/HKUDS/nanobot/pull/5570)）**：记忆系统两项功能 PR 均标为 P1/P2 且带冲突标记，结合今日合入的累积摘要重构（[#5610](https://github.com/HKUDS/nanobot/pull/5610)），记忆模块正在经历一次系统性升级，预计将进入 1.0 前的功能收尾阶段。
- **MST 元搜索集成（[#5234](https://github.com/HKUDS/nanobot/pull/5234)）**：新增 metasearch provider，已开放近一个月，今日仍有更新，处于待合并状态。

## 7. 用户反馈摘要

- **[#5567](https://github.com/HKUDS/nanobot/issues/5567)（飞书）**：用户明确指出当前飞书渠道"一条用户消息 → agent 回复 n 条消息"的体验痛点，要求整合为单条流式卡片。说明 IM 渠道消息组织方式直接影响用户对 agent 响应质量的感知。
- **[#5516](https://github.com/HKUDS/nanobot/issues/5516)（Telegram）**：用户反馈 `rich_messages: true` 与 `streaming: true`（默认开启）互斥导致富消息完全不渲染，最终回复总是走纯 HTML 路径。该问题从提出到关闭仅 7 天，用户感知良好。
- **[#5592](https://github.com/HKUDS/nanobot/issues/5592)（edit_file）**：用户发现文档误导导致工具调用参数组合被运行时拒绝，属于典型"文档与实现不一致"类反馈，对自动化 agent 用户影响较大。

整体来看，用户主要集中在渠道消息体验的一致性、文档准确性，以及 agent 运行时配置的灵活性上，未出现对核心功能的负面评价。

## 8. 待处理积压

需要维护者重点关注的长期未响应/搁置项：

- **[#4919 — Telegram 自定义 Bot API base URL（P2，创建于 2026-07-14，开放 48 天）](https://github.com/HKUDS/nanobot/pull/4919)**：社区功能请求已等待超一个月，当前带 `conflict` 标记，处于无法直接合并的状态。企业用户自托管 Telegram Bot API 是明确需求，建议尽快解决冲突。
- **[#5234 — MST 元搜索集成（P1，创建于 2026-08-03，开放 28 天）](https://github.com/HKUDS/nanobot/pull/5234)**：作为新的 provider 类型，标记为 P1 但已有近一个月未合入，今日仍有更新活动。若功能稳定应尽快安排合并或明确延后原因。
- **[#5571 — Memory 显式召回（P1，带 conflict 标记）](https://github.com/HKUDS/nanobot/pull/5571)** 与 **[#5570 — 可插拔召回后端（P2，带 conflict 标记）](https://github.com/HKUDS/nanobot/pull/5570)**：记忆系统核心 PR，均存在合并冲突。鉴于今日记忆累积重构（[#5610](https://github.com/HKUDS/nanobot/pull/5610)）已合入，这两条 PR 的冲突解决应同步推进，避免记忆系统分化出多个变体。

---

*数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库，统计窗口为 2026-08-31 前 24 小时。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-31

## 今日速览

项目今日维持高度活跃状态，过去24小时内 Issues 与 PR 更新各50条，其中 Issues 新开/活跃32条、关闭18条，PR 待合并43条、合并/关闭7条，整体协作节奏稳定。今日无新版本发布（当前为 v0.20.5）。值得关注的是，多个与**多 Profile 架构下的 Gateway/Cron 路由隔离**相关的严重 Bug（#99028、#97909、#98790）在今日集中被验证并关闭，同时出现了配套的修复 PR（#99463、#99465）。此外，Bot 群聊文件交接功能（PR #99159）作为重要的新特性进入评审阶段。

## 版本发布

今日无新版本发布。

---

## 项目进展

今日有 7 个 PR 被合并/关闭，其中最重要的合并且仍在活跃开发中的包括：

- **[PR #98016 → #99469] docs(memory-providers): 新增 PLUR 社区记忆提供器文档** — PLUR 是一个本地优先、零云端的持久记忆系统，采用 BM25 + BGE-small 嵌入混合检索与 Reciprocal Rank Fusion 重排序。原 PR #98016 因作者分支历史重写被 GitHub 自动关闭，作者以干净的单提交重新提交为 #99469（含英文与简体中文文档），当前处于开放状态等待审核。
  

- **[PR #99466] test(buzz): thread-topology 测试桩兼容 auth_tag 参数** — 修复了 main 分支的测试回归：`test_buzz_thread_topology.py` 中的两个 standalone-send 测试桩未接受新增的 `auth_tag` 参数（源于 #99427 auth 集群的变更），导致 main 分支测试失败。该 PR 为测试修复，使 main 恢复绿色。

其他合并/关闭的 PR 多数为文档类或重复提交的清理。

**值得关注的新提交（开放中）** ：

- **[PR #99159] feat(bot-mode): 允许 Bot 在托管群聊中交接真实文件** — 当前 Bot 可以声称已产出文件，但字节仍留在其私有工作区内，下一个 Bot 只能看到文字描述而无法获取实际文件。该 PR 让 Bot 可将真实文件传递给用户或其他 Bot，涉及 CLI、Gateway、Tools、TUI、Docker 等多个组件，并带有多个 sweeper 风险标注（会话状态、消息投递、安全边界、兼容性），属于复合型大改，值得持续关注。

- **[PR #99450] fix(update): 在变更代码仓库之前先暂停运行中的 fleet** — 解决了 `hermes update` 直接修改共享 checkout 而运行时仍在从中导入模块的问题：延迟导入可能导致新模块被加载进旧的模块图中。该 PR 涉及 CLI、Gateway、Cron、Dashboard、安装更新等多个组件，属 P2 优先级。

---

## 社区热点

今日讨论最集中的议题围绕 **多 Profile 隔离下的 Gateway/Cron/消息路由混乱**，这是一个持续发酵了一周以上的主题：

1. **Issue #99028（已关闭）** — [Profile 级 Gateway 执行默认 Profile 的 Cron 作业并通过自己的机器人令牌投递](https://github.com/NousResearch/hermes-agent/issues/99028) （3条评论） — 报告了最严重的路由失控场景：profile 级 gateway 不仅执行了错误 profile 的 cron 作业，还用自己的 bot token 投递了这些消息。标志着问题从"误报状态"升级为"实际错发"。

2. **Issue #97909（已关闭，标记为重复）** — [Desktop cron 触发辅助 Profile 作业但以主后端身份投递（飞书 230002）](https://github.com/NousResearch/hermes-agent/issues/97909) — 与 #99028 属同一根因的不同表现，已被标记为重复。

3. **Issue #98790（已关闭）** — [`cron status` 将另一个 Profile 的 Gateway 误报为本 Profile 作业可正常触发](https://github.com/NousResearch/hermes-agent/issues/98790) — 报告中指出"绿灯亮了但作业静默不执行"，这类**假阳性状态提示**比直接报错更具误导性。

4. **Issue #97120（今日关闭）** — [Cron 警告推荐 `hermes gateway install`，但 Gateway 随后拒绝启动并循环崩溃](https://github.com/NousResearch/hermes-agent/issues/97120) — 在 multiplex 模式下，辅助 profile 中创建 cron 作业时给出的修复建议本身是错误的，按建议执行后会导致网关 crash-loop。

**分析** ：这些问题共同指向一个架构层面的缺陷——多个 profile 共享同一主机时，Cron 调度器与 Gateway 之间的绑定关系过于模糊，导致"数据投递到错误目的地"和"状态误报"两类问题反复出现。好消息是已经有针对性修复 PR（#99463 修复 peer dm 在非默认 profile 下的解析问题、#99465 修复 /fast 路由解析），说明团队正在系统性清理这一领域。

其他高活跃 Issue：

5. **Issue #88584（开放）** — [Automated Nous 集成被阻塞](https://github.com/NousResearch/hermes-agent/issues/88584) — 47条评论，今日最高。`cron/jobs.py` 存在合并冲突，Nous-to-Enterkey 合并流程受阻，dashboard 更新器停留在最后测试的 Enterkey 版本。

6. **Issue #97681（开放）** — [Bot 群聊应在 Desktop 关闭后继续工作](https://github.com/NousResearch/hermes-agent/issues/97681) — 8条评论。Gateway 所有的权威性、同 gateway runner 和跨 gateway 传输已在 main 上，用户要求桌面端关闭后群聊继续运行。

---

## Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 严重

- **Issue #98790（已关闭）** ：[`cron status` 报告其他 Profile 的 Gateway 作为本 Profile 作业可触发的证明](https://github.com/NousResearch/hermes-agent/issues/98790) — 跨 profile 误报，作业静默不执行，已关闭（预期已有修复或标记为重复）。

### 🟠 P2 — 高优先级

- **[PR #99463]（开放）fix(bot-mode): 为 peer dm 固定默认 profile** — 修复非默认 profile 下 `message_agent` peer 投递报 "No peer named X" 的问题（因 `hermes peer dm` 未带 `-p` 参数时从当前 profile 的空配置解析注册表）。与 #99028 等属于同一根因链条。

- **[PR #99465]（开放）feat(fast): 按完整路由而非仅模型 ID 解析 `/fast`** — `/fast` 一个命令对应三种不同厂商能力（OpenAI Priority Processing、Codex 等），当前按模型 ID 单独解析会导致路由错误（涉及消息投递风险）。

- **[PR #99462]（开放）fix(gemini): 内联本地 schema 引用** — 修复 Gemini 工具 schema 翻译时 `$defs`/`definitions` 本地引用未展开导致的问题（修复 #99438）。

- **[PR #99467]（开放）fix(desktop): 跨压缩 tip 轮转重新安置会话磁贴** — 防止会话在压缩轮转后同时出现在主工作区和会话磁贴中。

- **[PR #99468]（开放）fix(desktop): 新轮次重置流状态** — 防止丢弃的终端帧之后输出合并到先前的助手气泡中（修复 #99416）。

- **Issue #86516（开放）** ：[四个读路径绕过自旋锁直接读取共享写连接](https://github.com/NousResearch/hermes-agent/issues/86516) — 存在未提交事务的脏读风险，涉及会话状态完整性。

- **Issue #96105（开放）** ：[`message_agent` 注入器报告成功但未恢复 executor 允许列表](https://github.com/NousResearch/hermes-agent/issues/96105) — 工具调用后可用的工具集未正确恢复。

### 🟡 P3 — 一般

- **[PR #99470]（开放）fix(cron): Windows 上 WSL bash 与 MSYS 脚本 argv 的 fail-closed 处理** — 修复 Windows cron `.sh` 执行路径产生 exit 127 的问题。

- **[PR #99461]（开放）fix(gateway): 忽略未加载的 systemd unit 默认值** — 修复系统服务诊断查询加载了未加载的 unit 导致误判。

- **[PR #99466]（已合并）test(buzz): 测试桩兼容 auth_tag** — 修复 main 分支测试回归。

- **Issue #99335（开放）** ：[Desktop Composer 在 gateway 连接窗口期间 contentEditable 被禁用导致光标丢失](https://github.com/NousResearch/hermes-agent/issues/99335) — 输入体验问题。

- **[PR #99450]（开放）fix(update): 暂停 fleet 后修改 checkout** — 防止运行时导入新模块到旧模块图中（P2）。

---

## 功能请求与路线图信号

今日值得关注的社区功能请求：

1. **[Issue #99459]（开放）[Feature]: 在模型选择字段中添加书签/收藏图标** — 用户希望对常用模型进行收藏，使其显示在独立分区。这是一个低成本、高收益的 TUI 易用性改进，很可能被纳入后续版本。

2. **[Issue #97681]（开放）Bot 群聊在 Desktop 关闭后继续运行** — 用户期望 Bot 的群聊运行与桌面端生命周期解耦。考虑到 Gateway 相关基础已合并到 main，此功能可能依赖后续的 Gateway 稳定性完善而非全新架构。

3. **[Issue #16988]（开放）备份排除目录可配置化** — 用户希望 `_EXCLUDED_DIRS` 从硬编码改为可配置，以支持按项目排除 `.venv` 等目录。该请求已存在4个月，实现成本低。

4. **[Issue #64978]（开放）澄清 `hermes insights` 中的 token 计量口径** — 用户审计代码后对 token 统计方式提出疑问，涉及计费透明度，建议维护者明确文档或调整计算逻辑。

**已被 PR 覆盖的路线图信号** ：

- **[PR #84374]（开放）memory-extension 可选 skill** — 将 Hermes 记忆（MEMORY.md / USER.md）扩展为"索引 + 详情文件"架构。已开放约3周，仍在评审中，未来可能成为内置能力而非可选技能。

- **[PR #99159]（开放）Bot 群聊文件交接** — 今日最值得关注的特性 PR，涉及 Bot 间文件传递，社区已有明确需求（Issue #97681 为同一方向）。

- **[PR #99465]（开放）/fast 命令按完整路由解析** — 统一 OpenAI/Codex 等多厂商快速通道，属于性能优化路线图的一部分。

---

## 用户反馈摘要

从今日 Issue 评论中提炼的真实用户声音：

1. **配置多 Profile 规模庞大且路径复杂** — Issue #97909 用户描述了"17 个 profile 共存于一台机器"的场景，依赖 launchd 管理各自 gateway。这类用户在 profile 隔离出现漏洞时承受的风险最高。

2. **状态误报比错误本身更有害** — Issue #98790 用户指出 "jobs created in that profile then never fire — silently"。`cron status` 显示绿色但任务不执行，这种静默失败对自动化工作流用户是灾难性的。同理，Issue #97120 中错误建议导致用户按推荐操作后网关崩溃。

3. **桌面端输入体验问题** — Issue #99335 用户描述了 composer 输入时光标周期性被抛出输入框的烦人体验，虽然影响轻微但直接影响日常使用频率最高的操作。

4. **对文档与可配置性的持续需求** — #16988（备份排除项可配置）已开放4个月有余仍无进展，用户明确表达了"我有明确的策略和想排除的目录"。类似地，#64978 用户对 token 计量的取证式审计说明高级用户对计费透明度的重视。

5. **Buzz 平台用户的持续性信任问题** — 多条已关闭的 Buzz 相关问题（#76243、#75082、#78026）今日仍有评论涌入，涉及凭证剥离、回复线程化错误等。虽然均已标记关闭，用户👍数（#75082 有3个👍）表明这些修复被认可的广泛程度。

---

## 待处理积压

需要维护者关注的长期未响应或阻塞项：

1. **Issue #16988（开放）** ：[备份排除目录可配置化](https://github.com/NousResearch/hermes-agent/issues/16988) — 创建于 2026-04-28，已开放4个月，5条评论，P3。用户需求明确且实现成本低，建议排期。

2. **[PR #90234]（开放，标记为 blocked）** ：[fix(desktop): 将技能发现限定到调用会话的项目](https://github.com/NousResearch/hermes-agent/pull/90234) — 创建于 2026-08-19，因某种原因被阻塞，涉及 Desktop `/` 斜杠命令的范围隔离，直接影响多项目用户的体验。

3. **[PR #84374]（开放）** ：[feat(skills): memory-extension 可选技能](https://github.com/NousResearch/hermes-agent/pull/84374) — 创建于 2026-08-12，已开放近3周，涉及记忆架构演化方向，建议加速评审。

4. **Issue #88584（开放）** ：[Automated Nous 集成被阻塞](https://github.com/NousResearch/hermes-agent/issues/88584) — 47条评论为今日最多，`cron/jobs.py` 合并冲突已存在2周，阻塞了 Nous-to-Enterkey 的自动合并流水线。该问题影响的是项目自身的自动化运维而非用户功能，但高评论数反映了社区对其修复的期待。

5. **Issue #86516（开放）** ：[四个读路径绕过自旋锁产生脏读风险](https://github.com/NousResearch/hermes-agent/issues/86516) — 创建于 2026-08-14，涉及会话状态读取的一致性，带 P2 优先级与 `sweeper:risk-session-state` 标签，建议跟进修复。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-31

## 1. 今日速览

项目今日活跃度中等偏上。过去 24 小时内处理了 1 条 Issue（全部为活跃状态）和 3 条 PR（均为待合并），其中 2 条 PR 由同一贡献者（linhongyu510）提交，一条修复了今日新增的高严重度 Telegram 消息无限编辑 bug，另一条为 IRC 多行消息支持。此外，一条滞留一个多月的 DeltaChat 重构 PR（#3222）仍未有维护者响应。无新版本发布，项目整体处于功能开发与 bug 修复并行的阶段。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，3 条 PR 均处于待合并状态，但其中 2 条值得关注：

- **#3353 fix(channels): bound tool feedback animations**（[链接](https://github.com/sipeed/picoclaw/pull/3353)）— 直接针对今日报告的严重 bug（见第 5 节），为 tool feedback 动画增加 5 分钟超时上限，与 Telegram 打字反馈的既有生命周期上限保持一致。该 PR 若合并，将彻底解决消息无限编辑的问题。
- **#3354 feat(irc): assemble IRCv3 multiline messages**（[链接](https://github.com/sipeed/picoclaw/pull/3354)）— 为 IRC 渠道增加 IRCv3 `draft/multiline` 接收支持，使长文本和多行 IRC 消息能作为单条完整消息进入 PicoClaw。两条 PR 均提交于今日，评审效率将直接影响修复落地速度。

## 4. 社区热点

今日讨论最活跃的是 **Issue #3343**（[链接](https://github.com/sipeed/picoclaw/issues/3343)，评论 2 条）— 一条 8 月 22 日创建的 bug 报告，报告称 tool feedback 动画在 agent turn 停止推进后仍每 3 秒调用一次 Telegram `editMessageText`，持续数天累计超过 228,000 次编辑尝试。该问题同时触发了 Telegram API 限流的风险。值得注意是，该 Issue 创建 9 天后才被标记活跃，社区关注度上升的直接推动力来自今日提交的修复 PR #3353。

## 5. Bug 与稳定性

按严重程度排列：

- **[严重] Tool feedback 动画无限编辑 Telegram 消息**（Issue #3343，[链接](https://github.com/sipeed/picoclaw/issues/3343)）— 动画在 agent turn 失败后未停止，每 3 秒调用一次 `editMessageText`，持续数天、超过 228,000 次 API 调用。已定位为生命周期清理遗漏问题。**已有对应修复 PR #3353**（[链接](https://github.com/sipeed/picoclaw/pull/3353)），方案为 5 分钟超时上限，与 Telegram 打字指示器现有行为一致。

## 6. 功能请求与路线图信号

Issue #3343 暴露的设计缺陷也暗示了路线图方向：**渠道消息反馈机制需要统一的、可配置的生命周期管理**，而非依赖各渠道各自的超时逻辑。此外，PR #3354 表明 IRC 渠道正在跟进 IRCv3 协议演进（multiline 支持），该特性属于 IRCv3 后继标准的一部分，未来可能成为 IRC 渠道的基础能力而非可选增强。

## 7. 用户反馈摘要

从 Issue #3343 的评论中可提炼以下用户痛点和反馈：

- **真实使用场景**：用户在长时间运行 agent 任务时，Telegram 消息编辑动画在任务失败后仍持续运行数天，且无用户可见的停止机制。
- **核心痛点**：大量无效 API 调用可能导致 Telegram 限流，影响后续正常消息收发；同时编辑动画可能干扰用户在 Telegram 界面中的其他操作。
- **用户预期**：动画应在任务结束或明确失败后自动停止，而非静默持续运行。

## 8. 待处理积压

- **PR #3222 refactor(deltachat): cleanup implementation, documentation -200LOC**（[链接](https://github.com/sipeed/picoclaw/pull/3222)）— 创建于 2026-07-03，已滞留近两个月（最后更新 8 月 30 日），删除约 200 行代码的 DeltaChat 渠道清理重构。涉及移除 legacy 特性、删除密码邮箱配置（改用 jsonrpc secrets）、重命名 `invite_link` → `join_invite_link` 等破坏性变更。长期未获维护者评审，建议优先处理。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-31

## 1. 今日速览

NanoClaw 今日社区活跃度处于**中高水平**。过去 24 小时内共更新 50 条 Issues（新开/活跃 9 条，关闭 41 条）和 41 条 PR（31 条待合并，10 条已合并/关闭），无新版本发布。今日核心动向集中在**通道适配层（Signal、WhatsApp）的可靠性修复**和**开源治理基础设施的自动化（Issue 表单、PR 模板、标签自动分类、changelog 自动生成）**两大方向。值得注意的是，Signal 适配器的修复 PR（#3693）是在今日新提交的，而维护者 glifocat 正在系统性推进仓库的 issue/PR 元数据治理工作。项目整体处于**功能迭代与治理基建并行推进**的阶段，大量旧 skill 分支 merge-forward 失败的历史 issue 在今日被批量清理关闭。

## 2. 版本发布

过去 24 小时内无新版本发布。提供数据中无最新 Releases。

## 3. 项目进展

今日合并或关闭的 PR 共计 10 条，活跃 PR 中值得关注的进展包括：

**Infrastructure / 开源治理（维护者 glifocat 主导）**

- **PR #3644 [已合并]** — `chore(github): add issue forms`：为仓库添加了四类 Issue 表单（bug 报告、能力/skill 请求、文档修正、安全加固），是新的 issue 摄入分类体系的基础设施部分。📎 https://github.com/nanocoai/nanoclaw/pull/3644
- **PR #3647 [待合并]** — `ci(labels): automatic area/* from changed paths and kind/* from PR type`：使标签（16 个 `area/*`、`kind/*`、`delivery/skill`）可自动从变更路径和 PR 类型中生成，无需人工打标。📎 https://github.com/nanocoai/nanoclaw/pull/3647
- **PR #3648 [待合并]** — `ci(labels): PR template v2 with token parsing and managed-kind reconcile`：新的 PR 模板 v2（标记 `nanoclaw-pr-template:v2`），内置结构化段落（Summary / Related work 等），为自动化解析提供基础。📎 https://github.com/nanocoai/nanoclaw/pull/3648
- **PR #3650 [待合并]** — `feat(release): harvest PR release-note blocks into a draft changelog`：自动从 PR 的 `release-note` 代码块中提取变更摘要，生成草稿 changelog，旨在解决开发者不知道"哪些改动值得进入 changelog"的痛点。📎 https://github.com/nanocoai/nanoclaw/pull/3650
- **PR #3651 [待合并]** — `docs(contributing): add the issue-side intake section`：在 CONTRIBUTING.md 中新增 "Issues" 部分，明确四种 Issue 表单对应的标签规范，并为安全漏洞报告提供根级入口。📎 https://github.com/nanocoai/nanoclaw/pull/3651

**Provider 层重构（contributor zvi-fried）**

- **PR #3581/#3584/#3585/#3586/** #3588/#3591 (全部待合并) — 一组以 `refactor(providers)` 为主题的系列 PR，声明并落地 runtime、codex、host、setup 及 opencode 各 provider 的契约/验证器/指令渲染，把 provdier 说明文字改为从核心库统一渲染。这是对 provider 架构的一次系统性收敛，但尚待合并与审查。📎 https://github.com/nanocoai/nanoclaw/pull/3581 | https://github.com/nanocoai/nanoclaw/pull/3584 | https://github.com/nanocoai/nanoclaw/pull/3585 | https://github.com/nanocoai/nanoclaw/pull/3586 | https://github.com/nanocoai/nanoclaw/pull/3588 | https://github.com/nanocoai/nanoclaw/pull/3591

**Skill 层新能力（contributor ira-at-work）**

- **PR #2317 [待合并]** — `feat(skills): add /add-voice-transcription-free-whisper skill`：新增本地免费语音转文字 skill，支持 **openai-whisper** 与 **whisper.cpp** 两个后端，可 GPU 加速，旨在为 NanoClaw 通道提供免费、本地、隐私友好的语音转录方案。该 PR 自 5 月 7 日创建以来已近 4 个月，仍在等待合并。📎 https://github.com/nanocoai/nanoclaw/pull/2317

**Signal 适配器修复（contributor ira-at-work，今日新提交）**

- **PR #3693 [今日新建]** — `fix(signal): queue outbound sends while disconnected; forward voice audio without transcription`：修复了 Signal 适配器在 TCP 连接断开时静默丢弃出站消息的问题，新逻辑改为自动排队并在重连后冲刷；同时转发语音音频时不再强制先做转写。该项目当前没有重连循环机制，因此该修复对使用 Signal 通道的用户影响显著。📎 https://github.com/nanocoai/nanoclaw/pull/3693

**Bug 修复（来自 glifocat）**

- **PR #3427 [待合并]** — `fix(agent-runner): tell the agent send_card drops callback actions`：让 agent 明确感知 `send_card` 中存在**无 URL 的按钮动作会被桥接层丢弃**这一行为，避免 agent 误将责任归咎于外部平台。对应 Issue #3426。📎 https://github.com/nanocoai/nanoclaw/pull/3427

## 4. 社区热点

今日讨论热点主要由**维护者驱动的治理类 PR** 和 **Signal 修复 PR** 构成，社区讨论热度整体不高（评论数为 0 或 1），暂无大规模用户讨论：

- **PR #3648（PR 模板 v2）** — 虽然评论为 0，但该 PR 的影响面最大：它改变了所有贡献者提交 PR 时必须填写的模板格式，并且要求新的 token 解析机制，这意味着**每一个潜在贡献者都需适配新模板**，属于协作契约变化，值得社区关注。📎 https://github.com/nanocoai/nanoclaw/pull/3648
- **PR #3693（Signal 修复）** — 针对真实用户痛点（消息静默丢失），且是今日新提交、当日即被纳入日报，说明维护者对该通道适配稳定性给予了高度关注，社区潜在响应度值得跟踪。📎 https://github.com/nanocoai/nanoclaw/pull/3693

## 5. Bug 与稳定性

今日活跃的 Bug 按严重程度排列如下：

**高优先级（均有对应活跃 Issue，其中 #3643 尚无修复 PR）**

1. **#3643（OPEN）—— 硬编码 30 分钟 ABSOLUTE_CEILING_MS 强杀本地长模型推理回合**（priority/high, area/containers）：使用本地模型（OpenCode provider + OpenAI-compatible local server）时，host 的清理逻辑会在约 30 分钟上限处强制杀掉容器，即使模型仍在推理中；同时该上限没有配置入口。对使用本地模型的用户影响大。**尚无 fix PR**。📎 https://github.com/nanocoai/nanoclaw/issues/3643
2. **#3085（OPEN）—— WhatsApp mention 模式只响应自动补全"药丸"，手打 @ 文本不触发**（priority/high, area/channels）：即使用户输入 `@name` 但未选择自动补全项时，`engage_mode='mention'` 不会触发接线，且日志被掩盖，难以排查。**尚无 fix PR**。📎 https://github.com/nanocoai/nanoclaw/issues/3085
3. **#3105（OPEN）—— whatsapp-cloud 升级无迁移，遗留 messaging_groups 数据行**（priority/high, area/channels）：此前 #2913 将 whatsapp-cloud 桥注册为独立实例，解决了 #2911 的注册冲突，但现有安装升级后旧行的实例 key 不匹配，导致 `/update-skills` 失效。**尚无 fix PR**。📎 https://github.com/nanocoai/nanoclaw/issues/3105
4. **#2997（OPEN）—— 固定文案的定期提醒只发送首次**（priority/high, area/scheduled-tasks）：`hasIdenticalSend` 把上一次触发的发送也当作"相同"，导致文本不变的固定提醒从此不再送达，且日志无报错或提示，仅有一行 `Dropping turn-final echo` 痕迹。**尚无 fix PR**。📎 https://github.com/nanocoai/nanoclaw/issues/2997

**中优先级**

5. **#3248（OPEN）—— setup.sh 的 Node 版本检查分支逻辑失效**（priority/medium, area/setup-installation）：`install-node.sh` 在任何 Node 已存在时直接短路，导致 `setup.sh`"Node 太旧"分支实际上无法进入，用户无法通过安装流程升级到满足要求的 Node。**尚无 fix PR**。📎 https://github.com/nanocoai/nanoclaw/issues/3248
6. **#2464（OPEN）—— ncl CLI 静默忽略用户显式传入的参数**（priority/medium, area/ncl-cli）：在 group 作用域下，用户显式传 `--agent-group-id` 且与锁定值不同时，CLI 静默覆盖为锁定值，无 stderr、无退出码、无提示。**尚无 fix PR**。📎 https://github.com/nanocoai/nanoclaw/issues/2464
7. **#3001（OPEN）—— 共享 skills 重构前创建的 groups 保留过期 skill 副本**（area/skills）：2026-04-21 重构（8a12fa61）之前创建的 agent group 仍运行创建时复制进 `.claude-shared/skills/` 的旧 skill 内容，后续 `container/skills/` 的更新无法传播到这些组，且无自动化检测或迁移。**尚无 fix PR**。📎 https://github.com/nanocoai/nanoclaw/issues/3001

**低优先级**

8. **#3426（OPEN）—— send_card 文档承诺回调按钮但桥接层丢弃无 URL 动作**（priority/low, area/tools）：agent 认为按钮已发送，实际被丢弃，并只看到诸如 `fallbackText` 等误导提示。**已有对应修复 PR #3427 待合并**。📎 https://github.com/nanocoai/nanoclaw/issues/3426

**批量关闭的旧 Bug**

今日大量关闭的 Issue（#892、#893、#895–#898、#1066、#1073、#1074 等）为 skill 分支 merge-forward 自动化失败的历史记录，多为 2026-03 生成、今日统一清理关闭，无新影响。此类自动化噪音的清理本身有助于改善仓库可维护性。

## 6. 功能请求与路线图信号

- **开源治理自动化是当前清晰路线图方向**：glifocat 在 8 月 29 日集中提交了 Issue 表单（#3644）、自动标签（#3647）、PR 模板 v2（#3648）、changelog 自动生成（#3650）、CONTRIBUTING 文档（#3651）、模板合规报批（#3657）共 6 个 PR。这一整套"PR/Issue 摄入分类 → 标签自动应用 → changelog 自动汇总"的流程一旦全部合入，将显著降低 NanoClaw 的社区协作门槛与维护负担。预计在近期即可观察到 1–2 个 PR 被合并（#3644 已合并）。
- **pr: #2317 的本地免费语音转写 skill**（openai-whisper / whisper.cpp 双后端）自 5 月提交至今近 4 个月仍未合并，结合同日新提交的 PR #3693（Signal 语音免转写直接转发），「语音转写体验」可能是下一版本的重点改进方向。若两者都进入里程碑，用户将同时获得"免费本地转写"与"不强制转写的原始语音转发"两个能力。📎 https://github.com/nanocoai/nanoclaw/pull/2317 | https://github.com/nanocoai/nanoclaw/pull/3693
- **Provider 契约重构**（zvi-fried 的 #3581/3584/3585/3586/3588/3591）属于对内部 provider 扩展机制的一次系统性规范，短期内对外部用户无用户可见功能变化，但它为后续新增 provider 提供了更稳定的扩展点，是值得关注的架构演进信号。

## 7. 用户反馈摘要

- **Signal 通道消息静默丢失**（来源：PR #3693 摘要）：作者明确指出 `sendText`/`sendAttachments` 在 TCP 到 `signal-cli` 的连接断开时会静默丢弃出站消息，且该适配器**没有重连循环**。这属于直接影响消息可靠性的真实痛点，且用户往往无法察觉丢失发生。
- **本地模型被强杀**（来源：#3643）：本地模型推理耗时通常远高于远程 API，作者提交的报告显示容器在 heartbeatAgeMs 超过硬编码上限后直接被 WARN 级别日志杀死，**没有配置开关可调整**。这对本地部署与离线场景是严重限制。
- **WhatsApp 触发方式反直觉**（来源：#3085）：用户以手打 `@` 文本方式与 agent 交互是常见行为，但仅自动补全选择项能触发 mention 行为，且失败被"掩盖"，作者使用"never engages"表述，反映该行为极其隐蔽且难以自行排查。
- **send_card 导致 agent 归因错位**（来源：#3426）：因为桥接层丢弃无 URL 按钮，agent 只看到"按钮消失"而**只能根据缺失的 hint 推断是平台不支持**，实际是自身的工具能力与文档不符，造成 agent 行为误判。
- **升级后 whatsapp-cloud 注册状态失效**（来源：#3105）：用户在已有安装上升级后（#2913 曾解决注册冲突），旧的 `messaging_groups` 行没有迁移，首次 `/update-skills` 即触发异常。此类升级路径数据迁移问题会让老用户在升级时"踩坑"，反馈中带有明确的不满情绪。

## 8. 待处理积压

- **PR #2317（skill：free-whisper 本地语音转写）**：自 2026-05-07 创建至今近 4 个月，仍未合入也未见关闭，是最"高龄"的活跃功能 PR。社区对其响应需求明确（语音转写免费与本地化），希望维护者尽快给出合并、修改或关闭的明确决定。📎 https://github.com/nanocoai/nanoclaw/pull/2317
- **Issue #2868（/update-skills 为已安装 channels 静默无操作）**：2026-06-26 创建，今日虽有更新但**状态仍为已关闭**，摘要中明确指出该 Bug 使 `[Unreleased]` CHANGELOG 中相应迁移声明失效，属于影响升级路径的关键流程缺陷，请维护者确认关闭理由或补充验证结果。📎 https://github.com/nanocoai/nanoclaw/issues/2868
- **PR #3427（send_card 丢弃回调按钮，对应 #3426 修复）**：该 PR 自 2026-08-21 提交后 10 天未合入，而对应 issue 的优先级为 low；考虑到该问题对 agent 行为误导的影响，建议维护者评估提前合入的优先级。📎 https://github.com/nanocoai/nanoclaw/pull/3427
- **Issue #2463/#2464（CLI 文档与静默覆盖行为）**：均为 2026-05-13 创建，至今已超过 3 个月，其中 #2464 是一个明确的"软件应给出警告而未给出"的问题，与 #2463 的文档问题配对出现，建议一并处理。📎 https://github.com/nanocoai/nanoclaw/issues/2463 | https://github.com/nanocoai/nanoclaw/issues/2464
- **zvi-fried 的 6 个 provider 重构 PR（#3581/3584/3585/3586/3588/3591）**：自 8 月 27 日起已 4 天未合入，属于批量重构，建议维护者安排统一的 code review 时间窗口，避免长期分叉。📎 https://github.com/nanocoai/nanoclaw/pull/3581

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-31

## 今日速览

项目今日活跃度极低。过去 24 小时内无新增或关闭 Issues，无新版本发布，仅有 1 条由 Dependabot 提交的依赖更新 PR 处于待合并状态，且该 PR 创建于 6 月中旬，已积压两个半月。整体来看，项目当前处于低活跃期，维护节奏明显放缓，社区讨论几乎停滞，需关注是否为核心维护者暂时缺位或项目进入稳定维护阶段。

## 项目进展

今日无 PR 被合并或关闭，无代码变更合入主干。唯一动态是 **PR #956**（依赖更新，待合并）：

- **PR #956**：ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group — 由 `dependabot[bot]` 于 2026-06-15 提交，将 Docker 基础镜像 Alpine 从 3.23 升级至 3.24。该 PR 已闲置 77 天未获处理，属于常规依赖维护，不涉及功能变更。若合入，仅影响 Docker 镜像构建环境。
链接：[PR #956](https://github.com/nullclaw/nullclaw/pull/956)

## 待处理积压

- **PR #956**（依赖更新，待合并）：Alpine 3.23 → 3.24 升级，创建于 2026-06-15，截至今日已搁置 77 天。该 PR 为自动化依赖维护，长期未处理可能意味着维护者未关注 PR 队列，建议尽快审核或明确关闭策略，避免积压进一步扩大。
链接：[PR #956](https://github.com/nullclaw/nullclaw/pull/956)

---

*说明：由于今日无新 Issues、新版本发布、无合入 PR、无讨论热点，本日报中「版本发布」「社区热点」「Bug 与稳定性」「功能请求与路线图信号」「用户反馈摘要」五个章节无数据支撑，故省略。以上内容均严格基于今日提供的 GitHub 数据生成。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-31

---

## 1. 今日速览

IronClaw 今日保持高度活跃，24小时内产生8条 Issue 更新和16条 PR 更新，核心开发集中在 WebUI 设计系统五阶段计划（Epic #7038/#7781/#7782）的推进以及 LLM 工具链的稳定性修复上。设计系统第二阶段（DESIGN.md 治理 + Storybook 指南）与第三阶段（Gemini 主题重绘）的 PR 已提交，并有一条"预览专用"集成分支（#8005）供整体评估。与此同时，两个社区报告的性能/正确性 Bug（#7986 GitHub 负载膨胀、#7987 schema 约束丢失）均在当日获得对应修复 PR（#7996、#7999），响应速度出色。维护者 italic-jinxin 当日完成了主分支 CI 稳定化修复（#7995 已合并），并在 Issue #8004 中发布了当日的 clawbench 失败分类分析。**健康度评估：优秀 — 功能迭代与稳定性修复并进，社区反馈响应迅速。**

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 已合并/关闭（3条）

| PR | 内容 | 影响 |
|---|---|---|
| **#7995** [CLOSED] | [fix(ci): stabilize main branch coverage checks](https://github.com/nearai/ironclaw/pull/7995) — italic-jinxin | 修复了后台运行达到终态时残留 `approval_required` 收件箱通知的问题；隔离了 Railway 沙箱测试与网络白名单环境覆盖的相互干扰；补充了回归覆盖。**主分支 CI 稳定性显著提升** |
| **#7993** [CLOSED] | [chore(deps): bump the everything-else group with 16 updates](https://github.com/nearai/ironclaw/pull/7993) — dependabot[bot] | 16项 Rust 依赖批量升级（uuid 1.24→1.26、base64 等） |
| **#7959** [CLOSED] | [chore(deps): bump the everything-else group with 15 updates](https://github.com/nearai/ironclaw/pull/7959) — dependabot[bot] | 15项依赖升级（uuid 1.24→1.25 等） |

### 待合并的重要 PR（13条待合并中值得关注）

- **#8005**（预览专用）：Epic #7781 阶段2–3 的集成分支，将三个 PR 合并为一个可运行的应用供整体评估，不携带独立提交 — 标志着设计系统阶段性里程碑已接近可验收状态
- **#7994**（阶段2）：新增 `DESIGN.md` 作为 M3 Expressive 设计语言的书面事实来源，并附 IronClaw 实施治理附录
- **#8000**（阶段3）：将 `--v2-*` 颜色令牌重新映射至 Gemini 调色板（Draft，待设计评审）
- **#7997** / **#7998**：在 Inference 模型选择界面展示能力图标；新增 provider-neutral 模型目录以保留 NEAR AI 模型能力信息，同时保持 `list_models()` API 兼容

---

## 4. 社区热点

今日讨论集中于设计系统重构线。Epic **#7038**（3条评论）、**#7781** 与 **#7042**（各2条评论）构成完整的五阶段设计系统路线图叙事：

- **[#7038](https://github.com/nearai/ironclaw/issues/7038)**（已关闭）：Epic 范围重新划定 — 仅保留第一阶段（Storybook 集成 + 设计系统目录），阶段2–3 移交 **#7781**，阶段4–5 移交 **#7782**
- **[#7781](https://github.com/nearai/ironclaw/issues/7781)**：现统领阶段2–3（DESIGN.md 治理 + 主题更新/UI 重绘），取代已关闭的 Epic #7733
- **[#7782](https://github.com/nearai/ironclaw/issues/7782)**：统领阶段4–5（agentic 交互、组件与信息架构）

**背后诉求**：项目正在经历一次从"临时迭代"到"系统化设计治理"的转型 — 通过将设计系统拆分为可独立评审/合并的阶段、引入 Storybook + Chromatic 视觉回归通道（PR #7831）、并以书面 DESIGN.md 沉淀设计语言，为后续 Agent 交互界面的大规模 UI 重构建立制度化基础。社区（以 rdisandro 为核心）正在推动这一过程并持续同步进展。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 状态 | Fix PR |
|---|---|---|---|
| **高（数据正确性）** | [#7987](https://github.com/nearai/ironclaw/issues/7987) `flatten_top_level` 从固定白名单重建 tool schema，静默丢弃所有非禁止的顶层约束（如 `dependentRequired`、`$defs`、`minProperties`、`title`）— 无警告、无测试、无诊断 | OPEN | ✅ **[#7999](https://github.com/nearai/ironclaw/pull/7999)** — 改为仅移除五个被禁止的顶层关键字，保留合法约束 |
| **中（性能/成本）** | [#7986](https://github.com/nearai/ironclaw/issues/7986) `github.list_repos` 原样返回 GitHub REST 响应 — 每个仓库81个字段/5,517字节；生产运行中出现单次 **519 KB / 98 仓库** 的传输，且未使用包自身的投影机制 | OPEN | ✅ **[#7996](https://github.com/nearai/ironclaw/pull/7996)** — 投影至模型有用字段，并同步用于 `search_repositories` |
| **中（CI 稳定性）** | Issue [#8002](https://github.com/nearai/ironclaw/issues/8002) 修复 main 分支 CI 失败（当日已关闭） | CLOSED | ✅ **PR #7995** 已合并 |

**值得注意**：Bug #7987 本身是一个 `flatten_top_level` 从白名单重建 schema 的设计缺陷，与 PR #7999 的修复方案高度吻合；分类为 `scope: llm`，影响 tool calling 约束的正确传递。#7986 标记为 `suggested_P2`。

---

## 6. 功能请求与路线图信号

- **Issue #8004**（pranavraja99）：每日 clawbench 失败分类报告 — 81 个非通过用例由两类主导（摘要中未展开标注）。该项目正在制度化"每日失败分类"流程，反映出对 benchmark 回归的高度重视。相关数据可参考 [clawbench 运行](https://nearai.github.io/benchmarks/#/runs/ironclaw/clawbench/d5167170-2906-4ebd-9a30-d21d47c14c93)
- **PR #7997 / #7998**（italic-jinxin）：在 Inference 界面展示模型能力图标（文本/图像输入/图像输出），并新增 `list_model_catalog()` API 保留能力信息 — 指向 **v1.4.0** 的功能集
- **设计系统路线图**：Epic #7781（阶段2–3，标记 `v1.4.0`）+ #7782（阶段4–5）是主要的产品演进信号。阶段4–5（agentic 交互、组件与信息架构）预告了下一波 UI 能力

---

## 7. 用户反馈摘要

今日可用评论数据有限（多数 Issue/PR 评论数为 0–3），主要信号来自设计系统 Epic 的重新划定过程和相关 Bug 报告：

- **对静默数据丢失的不满**（#7987）："Every other top-level keyword is discarded silently — no warning, no test, no diagnostic" — 用户在缺少诊断信息的情况下排障受阻，反映了对工具链可观测性的诉求
- **对性能问题的量化意识增强**（#7986）：用户以精确数据（81字段/仓库、519 KB/98仓库）指出响应体膨胀，且"with the package's own projection seam unused" — 已有内部机制却未使用，暴露了实现与设计脱节的问题
- **设计系统社区贡献者（rdisandro）的治理诉求**：通过不断重构 Epic 边界（#7038 re-scoped、#7781 supersedes #7733）、提供集成预览分支（#8005）、引入视觉回归通道（#7831），体现了"在设计落地前先建立评审基础设施"的工程文化
- **新贡献者积极修复社区报告的问题**：linhongyu510（contributor: new）一人同时提交 #7999 和 #7996，分别直击 #7987 与 #7986 — 社区驱动的 bug 修复闭环在 24 小时内完成，反馈链路健康

---

## 8. 待处理积压

| 项目 | 类型 | 状态 | 备注 |
|---|---|---|---|
| **PR #7020**（[tokio-tungstenite 0.29→0.30](https://github.com/nearai/ironclaw/pull/7020)） | 依赖升级 | OPEN，**已29天**未合并（2026-08-02创建） | tokio 生态组的依赖升级长期滞留，需确认是否存在兼容性问题 |
| **PR #7834**（[wasm 组4项更新](https://github.com/nearai/ironclaw/pull/7834)） | 依赖升级 | OPEN，**已8天**未合并 | wasmtime 相关升级，风险标记为 medium，建议关注 |
| **PR #7831**（[Design System Phase 3a 基础 — Chromatic 通道](https://github.com/nearai/ironclaw/pull/7831)） | 功能/CI | OPEN，**已8天**未合并 | 作为 #8000（阶段3重绘）的基座 PR，其滞留可能阻塞后续依赖链，建议优先推进评审 |
| **PR #7988**（[代码库知识图谱刷新](https://github.com/nearai/ironclaw/pull/7988)） | CI/基础设施 | OPEN，**已2天** | 机器人生成的内容，等待人工审查合并 |

---

*本日报基于 2026-08-31 IronClaw 仓库 GitHub 数据生成，所有链接指向对应 Issue/PR。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-08-31）

> 数据来源：github.com/netease-youdao/LobsterAI

## 1. 今日速览

今日 LobsterAI 项目活跃度中等偏高。共收到 10 条 Issue 更新（新开/活跃 4 个，关闭 6 个）和 27 条 PR 更新（待合并 15 个，已合并/关闭 12 个）。值得关注的是：核心安全修复 PR #908（MCP stdio 命令注入漏洞）更新但尚未合并；新上线的 DSH 集成相关 Issue #2577 与修复 PR #2585 同日完成配对，修复响应迅速；Dependabot 批量提交了 7+ 个依赖更新 PR（mermaid、vite、@types/react-dom、trufflehog 等）。当日无新版本发布，项目处于持续迭代状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭了 12 个 PR，主要包括：

- **#2588**：用户使用指南更新（`liuzhq/user-guide`，涉及 renderer/main/cowork 区域）[链接](https://github.com/netease-youdao/LobsterAI/pull/2588)
- **#2462**：`mermaid` 依赖从 10.9.8 升级至 11.16.1（支持更丰富的图表渲染能力）[链接](https://github.com/netease-youdao/LobsterAI/pull/2462)
- **#2465**：`vite` 从 5.4.21 升级至 8.2.1（构建工具大版本升级）[链接](https://github.com/netease-youdao/LobsterAI/pull/2465)
- **#2463**：`@vitejs/plugin-react` 从 4.7.0 升级至 6.0.5 [链接](https://github.com/netease-youdao/LobsterAI/pull/2463)
- **#2458**：`@types/react-dom` 从 18.3.7 升级至 19.2.4（补齐 React 19 类型支持）[链接](https://github.com/netease-youdao/LobsterAI/pull/2458)
- **#2164**：CI 安全扫描工具 `trufflehog` 升级至 3.95.5 [链接](https://github.com/netease-youdao/LobsterAI/pull/2164)

**整体评估**：当日合入以依赖升级为主（vite 8.x、React 19 类型完成对齐），构建链现代化推进显著；安全修复 PR #908 虽未合入但今日仍在更新，值得继续保持关注。

## 4. 社区热点

今日讨论最集中、社区反馈最聚焦的是：

- **#2577（新开，1 条评论）**：内置 DSH 工作台无法调整 LobsterAI 提供模型的思考强度。当日即被接受并提交了对应修复 PR #2585，说明团队对 DSH 集成体验的响应速度很快。[链接](https://github.com/netease-youdao/LobsterAI/issues/2577)

- **#908（开放中，安全相关持续关注）**：MCP stdio 命令注入漏洞修复 PR。虽然评论数不多，但涉及渲染进程被攻陷后可执行任意命令的危害面，安全等级高，长时间未合并（4 月底创建）值得社区关注。[链接](https://github.com/netease-youdao/LobsterAI/pull/908)

- 今日集中关闭了 6 个 4 月中旬的 stale 问题（#1653、#1635、#1643、#1644、#1662、#1671），均为 3-4 个月前的用户反馈，说明维护者正在执行 stale 清理流程。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---------|-------|------|------|
| 🔴 高 | [#908](https://github.com/netease-youdao/LobsterAI/pull/908) | MCP stdio command 字段无校验，存在任意命令注入风险（需渲染进程被攻陷为前提） | fix PR 待合入 |
| 🟡 中 | [#2577](https://github.com/netease-youdao/LobsterAI/issues/2577) | DSH 工作台缺少 reasoning-effort 控件，影响思考强度调节 | fix PR #2585 已提交 |
| 🟡 中 | [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) | 已退出登录后安装新版本仍弹出"Lobster AI 无法关闭" | 开放中，4 月即报告 |
| 🟢 低 | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | ollama 本地模型（qwen3/gemma4）无法调用，cherrystudio 可正常使用 | 已关闭（stale） |
| 🟢 低 | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | md→word 转换中途提示 `sse response finish reason: full` | 已关闭（stale） |
| 🟢 低 | [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) | 定时任务保存成功但误提示"还有内容未保存" | 已关闭（stale） |
| 🟢 低 | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | 除 SSE 外其他 MCP 引擎无法使用 | 已关闭（stale） |

**注意**：今日关闭的 6 个 Issue 均被自动化打上 stale 标记后关闭，建议维护者核对这些 issue 中的问题在最新版本是否确已修复，避免误关。

## 6. 功能请求与路线图信号

- **[#1117] 工具权限弹窗键盘快捷键**（Enter 确认 / Escape 拒绝）：针对 CoworkPermissionModal 频繁弹出打断编码流的问题，在 Bash/file 操作场景下体验提升明显。属于典型的键盘驱动工作流优化，与 Claude Code 等竞争产品对齐。[链接](https://github.com/netease-youdao/LobsterAI/issues/1117)
- **[#1120] 会话出错后一键 Retry**：目前 error 状态会话无恢复路径，需新建会话重新粘贴 Prompt，恢复成本高。该功能对 Agent 日常使用可靠性影响大，建议优先排期。[链接](https://github.com/netease-youdao/LobsterAI/issues/1120)
- **[#1644] 基于 Markdown 的工作流编排**：让 main agent 感知并调度其他 agent 完成复杂任务。当前 main agent 无法感知已创建的其他 agent（如"写文章分析 agent"），sub-agent 生态尚未打通，属于架构级别的 roadmap 信号。[链接](https://github.com/netease-youdao/LobsterAI/issues/1644)
- **DSH 思考强度支持**（#2577 → PR #2585）：修复定位为 `dshConfigSync.ts` 中未声明 reasoning-effort 元数据，极小改动，预计在下一版本即可合入。

## 7. 用户反馈摘要

- **MCP 生态兼容不畅**（#1635）：用户反馈 ollama 本地模型从 qwen3 到 gemma4 均无法在 LobsterAI 中正常调用，但在 cherrystudio 客户端中可正常使用且能调用 MCP，说明问题大概率在 LobsterAI 侧的模型适配或 MCP 桥接层，而非 ollama 本身。该 issue 今日被 stale 关闭，建议核实最新版本是否已修复。
- **Agent 间协作缺失**（#1644）：用户通过 `agents_list` 查询发现 main agent 无法感知其他已创建的 agent，sub-agent 仅限 main 自己 spawn 出来的 openclaw subagent。用户期望 main agent 能组织多个专职 agent 完成复杂任务（如写作分析与资料搜集并存），这是个人 AI 助手走向多智能体编排的重要方向。
- **破坏性安全行为**（#1662）：用户反馈除 SSE 外的 MCP 传输方式均无法被发现/使用，MCP 传输协议支持面有限。
- **Mermaid 升级**（#2462 合并）：用户侧将获得 Mermaid v11 的图表渲染增强，但需留意编辑器兼容性可能受影响。

## 8. 待处理积压

| 项目 | 创建时间 | 状态 | 备注 |
|------|---------|------|------|
| [#908 MCP 命令注入修复](https://github.com/netease-youdao/LobsterAI/pull/908) | 2026-03-26 | 待合并（5 个月+） | 安全修复长期搁置，建议尽快处理合入或明确关闭原因 |
| [#1277 electron/electron-builder 升级](https://github.com/netease-youdao/LobsterAI/pull/1277) | 2026-04-02 | 待合并（近 5 个月） | Electron 大版本依赖长期未合入，影响底层安全性与稳定性 |
| [#1117 权限弹窗键盘快捷键](https://github.com/netease-youdao/LobsterAI/issues/1117) | 2026-03-31 | 开放（5 个月） | 体验型功能请求，等待实现 |
| [#1120 会话出错一键 Retry](https://github.com/netease-youdao/LobsterAI/issues/1120) | 2026-03-31 | 开放（5 个月） | 恢复路径缺失，建议优先排期 |
| [#1124 安装时"Lobster AI 无法关闭"弹窗](https://github.com/netease-youdao/LobsterAI/issues/1124) | 2026-03-31 | 开放（5 个月） | 安装流程 bug，长时间未响应 |

---

**日报小结**：项目整体活跃度健康，今日以依赖升级和 stale 清理为主，功能开发向"DSH 集成"方向倾斜。需重点关注两点：一是 #908 安全修复 PR 搁置时间过长（5 个月+），建议尽快处理；二是今日 stale 批量关闭可能掩盖未实修的旧问题，建议维护者对照确认。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-31

> 数据来源：github.com/moltis-org/moltis | 统计窗口：2026-08-30 ~ 2026-08-31

---

## 1. 今日速览

Moltis 今日活跃度中等偏低：24 小时内共 2 条 Issue 更新、2 条 PR 更新、1 个新版本发布。值得关注的是，围绕 **arm64 Docker 沙箱 DMI sysfs 挂载失败** 的长期问题（Issue #1085，已悬置 3 个月）今日终于被 PR #1247 修复并合并关闭，这是本周最重要的稳定性进展。另一条主线是 **Kubernetes 原生沙箱后端**（Issue #1118）持续获得社区关注（3 条评论），表明用户对多云/多运行时隔离的需求逐渐升温。此外，新提交的 PR #1248 修复了执行引擎中 `node: null` 显式选择本地执行路径时的语义歧义，属于日常质量加固。总体判断：项目处于稳定的迭代节奏中，Bug 修复速度良好，功能演进方向清晰。

---

## 2. 版本发布

**发布版本：`20260830.01`**（2026-08-30 发布）

- **链接**：[Releases](https://github.com/moltis-org/moltis/releases)（Moltis 采用日期号版本，具体 release 页面见仓库 Releases 标签）
- **更新内容**：本日报数据源未提供该版本的详细 changelog，建议维护者在 Release 描述中补充变更明细。结合同日合并的 PR #1247（DMI sysfs 修复），推测该版本可能包含此修复，但需以官方发布说明为准。
- **破坏性变更**：未知，暂无迹象表明存在破坏性变更。
- **迁移注意事项**：arm64（Apple Silicon）用户若此前受 Issue #1085 影响，升级后应验证 Docker 沙箱是否恢复正常启动。

---

## 3. 项目进展

**今日合并/关闭的 PR：1 个**

| PR | 标题 | 状态 | 影响 |
|----|------|------|------|
| [#1247](https://github.com/moltis-org/moltis/pull/1247) | fix(sandbox): drop DMI sysfs masks on arm64 Docker daemons | ✅ 已合并/关闭 | 修复 arm64 Docker Desktop 环境下的沙箱挂载失败问题，直接关闭 Issue #1085 |

**项目推进评估**：PR #1247 修复了 `sysfs_paths_to_mask_from()` 在 macOS（无宿主 `/sys`）环境下的逻辑缺陷——此前将"宿主无 /sys"误判为"Docker Desktop VM 拥有完整 sysfs"，导致在 arm64 上错误屏蔽 `/sys/class/dmi` 和 `/sys/devices/virtual/dmi`。该修复直接解决了自 2026-05-29 以来累计 3 个月的 arm64 用户阻塞问题，消除了 Moltis 在 Apple Silicon 上的关键短板，对开发者生态扩展（Mac 用户占比高）有明确价值。

**待合并 PR：1 个**（详见第 6 部分）

---

## 4. 社区热点

**今日最受关注的讨论：**

- **[Issue #1118 — Add Kubernetes-native sandbox backend with runtimeClassName support](https://github.com/moltis-org/moltis/issues/1118)**（👍 1 | 💬 3 条评论）
  - **诉求分析**：用户请求新增 `kubernetes` 沙箱后端，通过动态生成临时 Pod 来执行 agent 命令，并支持 `runtimeClassName` 以启用 Kata Containers、gVisor 等 OCI 兼容运行时实现 VM 级隔离。这反映了企业级用户对 **更强隔离边界** 的需求——Docker 容器隔离已不足以满足多租户/不可信代码执行场景。3 条评论的讨论热度说明该需求获得了一定的社区共鸣，可能成为下一版本的功能候选。

> 注：此外 Issue #1085 的关闭也带动了一波关注，其作者 karlmdavis 报告的 arm64 问题在 3 个月后终于迎来修复，属于高价值反馈得到响应的积极案例。

---

## 5. Bug 与稳定性

**今日报告的 Bug 与回归问题（按严重程度排列）：**

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| 🟠 中 | [Issue #1085](https://github.com/moltis-org/moltis/issues/1085) | Docker 沙箱在 arm64 上启动失败：`/sys/class/dmi` 挂载报错（只读 sysfs）。影响所有 Apple Silicon 用户。 | ✅ 已有修复 PR（[#1247](https://github.com/moltis-org/moltis/pull/1247)）今日合并关闭 |
| 🟡 低 | [PR #1248](https://github.com/moltis-org/moltis/pull/1248) | 执行引擎对显式 `node: null` 的处理不符合语义——应走本地执行路径，而非忽略或使用默认节点。属逻辑歧义，不崩溃但可能造成用户困惑。 | 🔵 待合并/审查中 |

**稳定性评估**：今日无新增 Bug 报告，唯一的活跃 Bug（#1085）已被修复关闭。项目整体稳定性良好，无崩溃性/数据丢失类严重问题。

---

## 6. 功能请求与路线图信号

**待合并 PR（可能进入下一版本）：**

- **[PR #1248 — fix(exec): honor explicit null node selection](https://github.com/moltis-org/moltis/pull/1248)**
  - **内容**：让 `node: null` 显式触发本地执行路径，同时在 `node` 字段省略时保留配置或 provider 选择的默认值；新增回归测试（覆盖已连接 node provider 且配置了默认值的情况）。
  - **判断**：属于行为语义修正而非新功能，但完善了执行引擎的节点选择契约，合并概率高，预计进入 `20260831.xx` 或下一迭代版本。

**开放功能请求（路线图信号）：**

- **[Issue #1118 — Kubernetes 原生沙箱后端](https://github.com/moltis-org/moltis/issues/1118)**（创建于 2026-06-12，今日仍有讨论）
  - **路线图判断**：该请求已开放近 3 个月且有持续讨论（3 条评论），表明社区有一定需求基础但优先级可能不高（无 assignee、无里程碑标记）。考虑到 Moltis 正逐步扩展沙箱后端生态（已有 Docker 后端），Kubernetes 后端是合理的下一步方向，但短期（1-2 个版本）内纳入的可能性中等偏低。若社区投票或 👍 数继续增长，可能提升优先级。

---

## 7. 用户反馈摘要

基于今日活跃的 Issue 评论提炼的真实用户声音：

**正面反馈/场景：**
- Issue #1085 的解决（PR #1247）回应了 arm64 用户的长期痛点。该问题自 5 月底报告，修复方案（在 arm64 Docker daemon 上跳过 DMI sysfs 屏蔽）简洁且在逻辑上根因清晰，说明维护者对 macOS 开发场景的重视。

**痛点与改进诉求：**
- Issue #1118 的作者与评论者表达了对 **隔离强度不足** 的顾虑：当前 Docker 沙箱依赖容器级隔离，在运行不可信 Agent 代码时存在逃逸风险；希望引入 Kata Containers / gVisor 等 VM 级隔离方案，并期望 Moltis 能像运行时插件一样灵活切换沙箱后端。语义上，`runtimeClassName` 的引入意味着用户希望**以声明式方式指定隔离级别**，而非修改配置后重启。

**总体满意度**：今日无直接的"不满意"反馈；arm64 修复的落地预计将显著改善 Mac 用户的使用体验。

---

## 8. 待处理积压

**值得维护者关注的长期未响应条目：**

| 条目 | 类型 | 创建时间 | 当前状态 | 提醒原因 |
|------|------|---------|---------|---------|
| [Issue #1118](https://github.com/moltis-org/moltis/issues/1118) — Kubernetes 沙箱后端 | 功能请求 | 2026-06-12（80 天+） | OPEN，3 条评论 | 长时间无 assignee/里程碑标记；社区讨论仍在持续，建议维护者回应：或确认纳入路线图、或说明暂缓原因，以避免用户等待失去耐心 |

> 说明：今日数据窗口内的 Issue/PR 数量有限（各 2 条），未发现其他明显积压项。建议维护者关注 #1118 的 triage 状态，及时与社区对齐期望。

---

*报告生成时间：2026-08-31 | 数据窗口：2026-08-30 ~ 2026-08-31 | 数据来源：[Moltis GitHub 仓库](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-31

## 1. 今日速览

CoPaw 项目近期保持高强度迭代节奏：今日活跃 PR 41 条（含昨日 39 条更新）、活跃 Issue 34 条，v2.2.0-beta.5 已发布，标志着 2.2.0 稳定版进入最终冲刺阶段。当前积压了 21 个待合并 PR 与 21 个待处理 Issue，涉及渠道契约校验、内存系统重构、Windows ACP 引导挂起等关键模块，其中 v2.2.0-beta.5 的发布记录显示项目已转向"修复稳定性、锁定功能范围"阶段。社区讨论热度集中在 AI 编码工具的第三方 harness 集成、侧边问题命令（/btw）等围绕"AI 助手嵌入 Agent 开发流程"的高频诉求上。维护者响应及时，大部分 Issue 在 48 小时内获得维护者回复。

## 2. 版本发布

### v2.2.0-beta.5（最新）

- **修复内容**：
  - `fix(channels): make contract checks portable and complete` — 渠道契约校验在 Windows 非 UTF-8 代码页环境下不再误报，所有内置渠道现在都有可运行的契约测试保障（#7267）
  - `fix(memory): make embedding reindex explicit and scoped` — 保存配置时不再自动全量重建向量空间，改为显式触发 reindex，失败时自动降级为 BM25 检索（#7133）
- **迁移注意事项**：
  - 使用 embedding 检索的用户需要在配置变更后手动执行一次 reindex 才能恢复向量检索（此前是保存配置即自动重建）

### v2.2.0-beta.4

- **修复内容**：
  - `fix(context): bound oversized single-line tool results` — 超长单行工具结果不再撑爆上下文窗口（#7331）
  - `fix(desktop): unif...`（发布说明截断，前半部分已包含上述两项修复）

## 3. 项目进展

### 已完成合并（计入 v2.2.0-beta.5）

- **#7267 `fix(channels): make contract checks portable and complete`**（[PR](https://github.com/agentscope-ai/QwenPaw/issues/7267)）— 全面修复渠道契约测试的跨平台兼容性问题，Windows 非 UTF-8 环境中渠道注册不再被误判失败
- **#7133 `fix(memory): make embedding reindex explicit and scoped`**（[PR](https://github.com/agentscope-ai/QwenPaw/issues/7133)）— 内存系统升级至 `reme-ai==0.4.1.10` 并重做向量空间切换流程，规避了自动重建导致的服务中断风险

### 今日合并的其他关键 PR

- **#7220 `fix(media): reject oversized image dimensions`**（[PR](https://github.com/agentscope-ai/QwenPaw/issues/7220)）— 修复高度压缩图片像素超限但字节数低于 2 MiB 限制时导致的视觉模型调用失败问题
- **#7438 `chore: bump the version to 2.2.0b5`**（[PR](https://github.com/agentscope-ai/QwenPaw/issues/7438)）— 版本号升迁至 v2.2.0b5

**整体推进**：2.2.0 beta 系列已发布至第 5 个版本，修复重点从功能开发转向稳定性与边界场景打磨，预计 2.2.0 正式版临近发布。

## 4. 社区热点

- **#7420 [OPEN] 工具执行结果丢失 + 写文件后命令重复派发（触发死循环保护）**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7420)，7 评论，24h 内）— 用户在 2.1.0 → 2.2.0-beta.1 升级后首次出现，目前仅复现于 beta 版。诉求核心："升级后行为退化"是最敏感的信号。
- **#7298 [CLOSED] 桌面端/Docker 镜像携带 OpenSSL 3.0.x 时代 TLS 栈**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7298)，9 评论）— 已关闭（可能已修复或标记为已知限制）。企业用户对 TLS 版本敏感度高，建议在 release notes中明确说明最小 TLS 版本。
- **#7224 [CLOSED] 如何将 Aider CLI 接入 QwenPaw 作为 agent**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7224)，6 评论）— 俄语提问，已关闭。社区对"外部 CLI 工具作为 agent harness"的需求持续升温，与 #7396 同源。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) [OPEN] | 工具结果丢失 + write_file 后同命令重复派发，触发死循环保护；仅 2.2.0-beta.1 出现（升级后新增） | 暂无 |
| 🔴 高 | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) [CLOSED] | 桌面端/Docker 内 Python 3.11 时代 TLS 栈致运营商 DPI 重置握手，桌面端无变通方案 | 已关闭，未在 release notes 中标注修复方案 |
| 🟠 中 | [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) [OPEN] | v2.1.0 控制台 Agent Loop mode 配置在任务完成后回退为默认值 | 暂无 |
| 🟠 中 | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) [OPEN] | 控制台流式输出中途出现大段重复文本（2.2.0b3） | 暂无 |
| 🟠 中 | [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) [OPEN] | 空 assistant `output_text` 块进入会话历史后毒化后续所有请求（Ark Responses API 400） | 暂无 |
| 🟠 中 | [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) [CLOSED] | 零停机重载复用已关闭的 memory_manager，永久破坏 memory_search | 已关闭 |
| 🟡 低 | [#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) [OPEN] | Feishu 渠道配置被意外清空（app_id 为空），cron 投递报 KeyError | 暂无 |
| 🟡 低 | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) [OPEN] | 同步调用阻塞事件循环 118–135 秒，timeout 失效 | 有相关 PR #7401 部分覆盖（ACP 场景） |

## 6. 功能请求与路线图信号

- **#7398 [Feature] 新增 `/btw` 侧边问题命令**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7398)）— 类似 Claude Code 的 `/btw`，不写入主对话历史即可快速提问。需求动机明确（避免污染上下文窗口），但当前无对应 PR，可能需要协调 Console/API/上下文管理层多处改动。
- **#7405 [Question] Plan Mode 复活**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7405)）— 用户在 2.2.0 的 goal/mission mode 之外仍怀念 plan mode 的计划预览能力。这是功能迭代回归问题，建议维护者评估 plan mode 的取舍或用 snapshots 替代的可行性。
- **#7396 [Question] Claude Code harness 落地时间线**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7396)）— 用户已在源码 `harnesses/` 目录定位到 Codex/Qoder 的适配代码，Claude Code 仍标注 "Coming soon"。这可能是 2.2.0 正式版之后的优先路线图项。
- **#7397 [OPEN] Browser SDK 每个 `present()/open()` 都新建 tab-group**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7397)）— 多页面无法共享同一 tab-group，属于 SDK 使用体验缺陷。

## 7. 用户反馈摘要

- **升级回归敏感度高**（#7420）：用户在 2.1.0 → 2.2.0-beta.1 升级后遇到工具执行链路回归，稳定性信心受到影响。beta 版本升级需格外谨慎。
- **企业 TLS 合规诉求**（#7298）：企业客户对 TLS 版本有合规边界，Python 3.11 时代 OpenSSL 无法满足 DPI 穿透场景，建议内置新版运行时。
- **第三方 harness 集成是刚需**（#7224、#7396）：俄语用户询问 Aider CLI 接入、用户询问 Claude Code 支持进度。结论：2.2.0 的第三方 harness 功能已被认可，但覆盖范围仍不足。
- **显式 reindex 的体验代价**（#7133 合并后的副作用）：保存配置后需手动 reindex 才能恢复向量检索，对新用户不友好，建议在 UI 上做引导。
- **负面信号**：#7377（Agent 配置不持久化）与 #7402（空文本块毒化会话）均出现在普通用户高频使用的主路径上，是拖累 2.1.0/2.2.0-beta 口碑的核心问题。

## 8. 待处理积压

### 长期未响应/未处理的 Issue

- **#6608 [OPEN，31天]**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6608)）— 长时 shell 命令绕过 `shell_command_timeout` 导致飞书会话无限阻塞，取消后产生孤儿子进程。7月31日提出，已超 30 天无 fix PR，涉及执行沙箱和渠道超时机制两个模块。
- **#7396 [OPEN，3天]**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7396)）— Claude Code harness 的官方回复缺失。

### 长期未合并的 PR

- **#7183 [OPEN，11天，Under Review]**（[PR](https://github.com/agentscope-ai/QwenPaw/issues/7183)）— workspace 级 Skill preload 配置（first-time-contributor），已进入 11 天无进展，建议维护者尽快给出合并意见。
- **#7163 [OPEN，11天]**（[PR](https://github.com/agentscope-ai/QwenPaw/issues/7163)）— 会话思考链与模型管理 UI 优化，涉及前端交互重构，等待 review 时间较长。
- **#7348 [OPEN，4天]**（[PR](https://github.com/agentscope-ai/QwenPaw/issues/7348)）— v2.2.0 正式版 release notes 草稿，与 beta.5 发布同步推进中，建议优先审阅。

### 说明

- 数据来源：仅基于用户提供的 CoPaw（`agentscope-ai/CoPaw`）GitHub 数据，未引入外部信息。
- 链接均基于原始数据中的 Issue/PR 编号，如需完整链接请拼接 `https://github.com/agentscope-ai/QwenPaw/` 前缀。
- 部分 PR 描述字段被截断（如 #7331、#7433），相关表述以原始数据为限。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-08-31

## 今日速览

ZeptoClaw 今日活跃度较高：24小时内新增/更新 8 条 Issues、1 条待合并 PR，无新版本发布。安全（safety）主题成为绝对主线——今日集中涌入 7 条安全相关 Issues（#651–#656），覆盖依赖漏洞、令牌泄漏、文件权限、时序攻击面等多个维度，加上此前积压的 2 条 P1-critical 安全 Issue（#644、#646），项目当前共有 9 条活跃安全议题。社区贡献者 morler 今日一次性提交了 1 条关联修复 PR（#657），主动响应依赖漏洞问题。项目整体处于"安全加固冲刺"阶段，活跃度健康，但安全债规模值得关注。

## 版本发布

今日无新版本发布。

## 项目进展

今日无 PR 被合并或关闭。唯一的活跃 PR 为：

- **[PR #657] chore(deps): fix 8 RustSec advisories（待合并）** — 由 morler 提交，直接关联 Issue #651。通过 `cargo update` 升级 7 个已知漏洞 crate 及 1 个额外依赖：h2 0.4.13→0.4.19（RUSTSEC-2026-0258）、bcrypt 0.19.1→0.19.3（RUSTSEC-2026-0199）、quinn-proto 0.11.14→0.11.17（RUSTSEC-2026-0185）、crossbeam-epoch 0.9.18→0.9.20（RUSTSEC-2026-0204）、anyhow 1.0.102→1.0.x 等。该 PR 一旦合并将直接解除 cargo-deny 零容忍策略下的 CI 阻断状态。链接: https://github.com/qhkm/zeptoclaw/pull/657

## 社区热点

今日讨论最集中的是两条 P1-critical 积压 Issue，均由维护者 qhkm 于 2026-07-23 创建，8月31日仍在活跃更新：

- **[Issue #646] chore(ci): restore Clippy and cargo-deny checks（3条评论）** — 由 PR #645 暴露的仓库基线 CI 失败：Rust 1.97.1 在现有 channel/provider/binary-plugin 代码中报告 5 个新 Clippy 警告；cargo-deny 拒绝现有漏洞依赖。维持 38 天未解决，反映 CI 安全门禁长期处于"已知失败"状态。链接: https://github.com/qhkm/zeptoclaw/issues/646
- **[Issue #644] bug(safety): scrub subprocess environments and terminate process trees on timeout（1条评论）** — 子进程继承完整环境变量（可能暴露无关凭据），且超时机制未确保终止进程树。同样是 38 天未闭合的 P1 安全缺陷。链接: https://github.com/qhkm/zeptoclaw/issues/644

**诉求分析**：社区（尤其是贡献者 morler）对项目安全基线有明确期待——CI 安全门禁不应长期"带病运行"，且运行时安全问题（环境变量泄漏、超时进程残留）需要系统性修复而非单点补丁。

## Bug 与稳定性

今日 8 条新 Issues 全部为安全相关，无功能性回归或崩溃类报告。按严重程度排列：

| 严重度 | Issue | 描述 | 修复 PR |
|--------|-------|------|--------|
| **P1-critical（积压）** | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | CI 中 Clippy 与 cargo-deny 检查被阻断 | 无 |
| **P1-critical（积压）** | [#644](https://github.com/qhkm/zeptoclaw/issues/644) | 子进程环境变量泄漏 + 超时未终止进程树 | 无 |
| 高 | [#656](https://github.com/qhkm/zeptoclaw/issues/656) | `panel start` 在 stdout 打印完整 API token，落入终端滚动缓冲、CI 日志和截图 | 无 |
| 高 | [#655](https://github.com/qhkm/zeptoclaw/issues/655) | Bearer token 在 3 处用 `==` 非恒定时间比较，存在时序侧信道风险 | 无 |
| 高 | [#653](https://github.com/qhkm/zeptoclaw/issues/653) | Panel WebSocket 认证 token 通过 `?auth=` 查询参数传递，泄漏至代理日志/浏览器历史 | 无 |
| 高 | [#652](https://github.com/qhkm/zeptoclaw/issues/652) | 含密钥文件（config.toml、panel.token）以默认 umask 权限写入，多用户机器上可被其他本地用户读取 | 无 |
| 中 | [#651](https://github.com/qhkm/zeptoclaw/issues/651) | 7 个 RustSec 已知漏洞 crate（h2、quick-xml、lopdf、bcrypt、quinn-proto、crossbeam-epoch 等），cargo-deny 零容忍策略下已 FAILED | **[#657](https://github.com/qhkm/zeptoclaw/pull/657) 已提交待合并** |
| 中 | [#654](https://github.com/qhkm/zeptoclaw/issues/654) | POST /api/auth/login 无速率限制/锁定机制，bcrypt cost 12（~250ms/次）是唯一制动；现有 SlidingWindowRateLimiter 未在 src/api 中使用 | 无 |

## 功能请求与路线图信号

今日无新功能请求。值得注意的信号是 **Issue #654 隐含的安全功能需求**：提议将已有的 SlidingWindowRateLimiter（当前仅用于 channel-messages）扩展到 API 认证入口，并提及可考虑基于 IP/账号维度的限流与锁定策略。此外 #655 提到 `verify_bearer_token` 的 doc 注释已隐含对恒定时间比较的要求（"whose doc comment..."），说明该改进已在设计预期内。

结合 PR #657 已覆盖的依赖修复，**下一小版本（如 0.x 补丁版）大概率包含：依赖漏洞修复（随 #657 合并）+ 安全文件权限修正 + token 泄漏修补**，而 #644/#646 这类需要架构级改动的 P1 项可能进入下一个 minor 版本的路线图。

## 用户反馈摘要

今日活跃评论集中在 #646（3条）与 #644（1条），均为维护者与贡献者之间的技术讨论。可从 Issues 描述提炼的"用户痛点"（由贡献者 morler 系统性提出）：

- **令牌暴露面过大**：API token 同时出现在 stdout 打印、query 参数、非恒定时间比较三个场景（#656、#653、#655），侧面反映当前 token 生命周期设计（静态 token + 明文持久化）在真实部署中存在被日志采集系统捕获的实际风险。
- **多用户机器上密钥可读**（#652）：普通文件写入权限问题在高性能共享开发机/CI runner 场景下会直接导致密钥泄露。
- **登录接口无防护**（#654）：公网部署场景下暴力破解风险明确，bcrypt cost 12 仅能减缓速度，无法阻止分布式攻击。
- **依赖安全基线失守**（#651/#646）：cargo-deny 零容忍策略与"CI 已失败但仍持续提交"之间的冲突，表明安全策略执行需要配套的自动化修复通道。

## 待处理积压

以下为长期未闭合、需要维护者优先关注的事项：

1. **[Issue #646]（P1-critical，38 天未闭合）** — CI 安全门禁恢复。PR #657 合并后可部分缓解（依赖层面），但 Clippy 5 个新警告的清理仍需单独处理。链接: https://github.com/qhkm/zeptoclaw/issues/646
2. **[Issue #644]（P1-critical，38 天未闭合）** — 子进程环境变量清理与进程树终止。该问题涉及多个 runtime 模块，改动面较大，需要架构级方案（如 env 白名单 + process group kill）。链接: https://github.com/qhkm/zeptoclaw/issues/644

**维护者行动建议**：优先评审合并 PR #657（解除依赖层 CI 阻断），随后将 #644/#646 列入下一迭代的必须项。今日 7 条新安全 Issues 均由单一贡献者批量提交，建议维护者在修复时与 morler 保持沟通以确认修复方案与预期一致。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-31

## 1. 今日速览

ZeroClaw 在过去 24 小时内保持了非常高的活跃度：共有 46 条 Issue 更新（45 条活跃/新开，1 条关闭）和 50 条 PR 更新（47 条待合并，3 条已合并/关闭）。RFC 讨论仍是最主要的社区活动，大量架构级提案（会话管理、附件架构、WASM 插件运行时、沙箱策略等）正在等待维护者审批，多条处于 needs-maintainer-review 状态。无新版本发布，但值得关注的是 dependabot 提交了包含 48 个 Rust 依赖更新的批量 PR，以及多条高风险安全修复 PR（配对码策略、Git shell 策略、配置写入不变量）处于待审查状态。整体项目健康度良好，但维护者的审批积压正在成为潜在的瓶颈。

## 3. 项目进展

以下 PR 在今日被合并或关闭（共 3 条）：

| PR | 类型 | 摘要 | 状态 |
|---|---|---|---|
| [#10496](https://github.com/zeroclaw-labs/zeroclaw/pull/10496) | dependencies | dependabot 批量更新 rust-all 组 49 个依赖（clap 4.6.1→4.6.6、clap_complete 4.6.5→4.6.9 等） | 已关闭 |

该 PR 被关闭后立即以 48 个更新的版本重新提交为 [#10512](https://github.com/zeroclaw-labs/zeroclaw/pull/10512)，推测可能存在合并冲突或需要拆分处理。除依赖更新外，今日没有功能性 PR 被合并，大量高风险功能 PR 仍在等待维护者审查。

## 4. 社区热点

**#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)）
- 评论数 28，为今日讨论最活跃的 Issue，已进入第三版修订
- 涉及 gateway、agent、channel 和 security 多个领域，风险等级为 high
- 社区关注点在于会话所有权从 channel 层向 runtime 层迁移的架构决策，配套提案 #9488（附件架构）和 #9600 形成提案集

**#6850 — RFC: Decouple memory lifecycle policy from storage backends**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)）
- 评论数 23，讨论持久化存储与记忆生命周期策略的职责边界
- 与 #9103（分离权威存储与可选增强连接器）形成呼应，社区对记忆架构的分层重构诉求明显

**#9488 — RFC: Unified attachment architecture for web chat and channels**（[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)）
- 评论数 22，已修订至第 9 版
- 提案统一 Web 聊天与各 channel 的附件处理架构，涉及 gateway、runtime、security

社区热点高度集中在"架构治理"与"职责边界划分"两个主题上，反映出项目在快速扩展功能面后，社区成员对规范化模块边界的强烈需求。

## 5. Bug 与稳定性

按严重程度排列：

**严重/高优先级（p1）**

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | 并行 runtime 门控下，测试线程化后写入并在之后派生的可执行 shim 测试夹具需要加固 | 进行中 |
| [#9654](https://github.com/zeroclaw-labs/zeroclaw/issues/9654) | 操作者的真实拒绝被传递给模型时变成了三个无语义单词，模型因此自行编造了拒绝原因（安全域，与 #9642 同代码路径） | [#9423](https://github.com/zeroclaw-labs/zeroclaw/pull/9423) 修复了一半场景，另一半本 Issue 覆盖，目前尚无独立 fix PR |

**中高优先级（安全相关）**

| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | 加固 Git shell 策略参数：规范化命令字，改进可执行文件 allowlist、Git 风险分类、环境变量赋值检查等 | 待维护者审查 |
| [#10307](https://github.com/zeroclaw-labs/zeroclaw/pull/10307) | 修复配对码生成器硬编码为 6 位数字（10^6 空间）的问题，统一为单一共享策略并强化默认值 | 等待作者响应 |
| [#10455](https://github.com/zeroclaw-labs/zeroclaw/pull/10455) | 修复 gateway JSON Patch 对 secret 字段的写不变量：拒绝被掩码和空值 | 新提交，待审查 |
| [#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | Telegram/Slack/Lark/Matrix 渠道的会话审批响应者授权修复 | 等待作者响应 |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | 多模态图像像素级校验，防止损坏图片导致 provider 请求失败 | 等待作者响应 |

## 6. 功能请求与路线图信号

以下需求在新版中的纳入可能性较高（均有对应 PR 在推进）：

| 功能请求 | 参考 Issue | 对应 PR | 信号强度 |
|---|---|---|---|
| runtime 历史裁剪时暴露 token 计量 | [#9619](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | 强 — 已实现，待合并 |
| 上下文压缩锚定到模型窗口比例 | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | 同上 | 强 — 已实现，待合并 |
| VoiceHost WebSocket 桥（FunASR/SenseVoice 外部音频宿主） | — | [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | 中 — 已实现，等待作者响应 |
| 插件 wasi:http 出口策略（ADR-014 第 2 阶段） | [#10169](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) | [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) | 中 — 已实现但被标记为 do-not-merge，状态 blocked |
| ZeroCode 多会话面板 + 侧边栏 | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | 同上 | 中 |

此外，一批新提交的 RFC（#10366 AI 辅助 PR 预审/re-review、#10222 单工具 provider 回合、#9975 web_dist_dir 兼容性契约、#10076 可组合 WASM 插件运行时架构）仍处于提案/讨论阶段，应在后续版本中持续跟踪。

## 7. 用户反馈摘要

从 Issue 讨论中提炼的用户痛点：

- **安全与信任**（#9654）：用户对"模型在拒绝场景下自行编造原因"的行为表达了明确担忧，属于安全域的高优问题，影响操作者与 Agent 之间的信任闭环。
- **架构复杂度**：多个 RFC（#9487、#9488、#6850、#9103）的持续修订表明，社区成员认为当前模块边界不够清晰，跨层依赖（如 zeroclaw-channels → zeroclaw-runtime 的层级倒置，#6864）增加了维护成本。
- **本地模型场景**（#5287，获 2 个 👍 为今日最高）：有用户明确提出需要一种紧凑型本地模型模式，要求减少 prompt 膨胀、禁用宽松的回退解析、防止内部工具/系统指令泄露到用户可见输出。这表明部分用户有明确的本地/离线部署需求。
- **审批响应体验**（#10393）：ZeroCode 中切换非活跃 Chat 面板时会阻塞导航，用户需要后台异步刷新。

## 8. 待处理积压

以下 Issue/PR 长期未得到维护者响应，建议优先处理：

| 编号 | 标题 | 创建时间 | 备注 |
|---|---|---|---|
| [PR #9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) | feat(plugins): enforce a host-owned egress policy on plugin wasi:http | 2026-07-31 | 已标记为 blocked + do-not-merge，阻塞超过 30 天 |
| [Issue #5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | [Feature]: define a compact local_small runtime profile | 2026-04-04 | 已开启近 5 个月，获得社区 +1，仍在 in-progress |
| [Issue #6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy — filesystem and network restrictions | 2026-05-28 | 已存在 3 个月，涉及安全核心，仍待 maintainer review |
| [PR #9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | fix(config): harden Git shell policy arguments | 2026-08-02 | 安全加固类 PR，等待维护者审查已近 30 天 |
| [PR #9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) | fix(sop): drive headless SOP runs, close five defects | 2026-08-08 | 大尺寸修复 PR（5 个缺陷），等待作者响应 |

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*