# OpenClaw 生态日报 2026-09-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-17 12:05 UTC

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

# OpenClaw 项目日报 · 2026-09-17

> 数据来源：OpenClaw GitHub 仓库（github.com/openclaw/openclaw）过去 24 小时的 Issues / PR 更新。所有信息均基于所提供数据，未做外部补充。

---

## 1. 今日速览

- **活跃度极高**：过去 24 小时共更新 500 条 Issues（新开/活跃 355，已关闭 145）与 500 条 PR（待合并 295，已合并/关闭 205），属于典型的高吞吐维护日。
- **无新版本发布**，但代码与诊断工具链持续迭代，大量 PR 集中在 CI、Doctor、发布验证与测试夹具。
- **稳定性压力显著**：今日活跃讨论中，崩溃/会话状态丢失/消息丢失类 P0–P1 问题密集，涉及 Gateway 事件循环饥饿、MCP 初始化超时拖垮网关、hook 子进程僵尸累积等。
- **修复节奏健康**：多条问题被标注 `clawsweeper:queueable-fix`（可排队修复）且 `source-repro`（含复现源），说明报告质量较高、具备快速修复条件。
- **整体判断**：项目处于「高活跃 + 高回归压力」并存的阶段，维护重心正向可靠性与发布验证倾斜。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

> 今日合并/关闭 PR 共 205 条。以下为所展示数据中可见、且对项目方向有代表性的 PR（多为 `OPEN` 且 `ready for maintainer look`，代表即将推进的重点）。

| PR | 标题 | 推进方向 |
|---|---|---|
| [#150845](openclaw/openclaw/pull/150845) | fix(release): trust packed SDK type proof | 用打包后的 TypeScript 消费者编译证明公共表面，替代对声明入口的字面扫描，提升发布类型验证可信度 |
| [#150844](openclaw/openclaw/pull/150844) | fix(security): review shipped Signal socket probes | 将 Signal socket 清理夹具中的子进程发现纳入 2026.9.4 安全清单，冻结计数供后续版本扫描 |
| [#150847](openclaw/openclaw/pull/150847) | improve(doctor): version the lint JSON envelope | 为 `doctor --lint --json` 增加 `schemaVersion: 1`，稳定 JSON 消费方契约 |
| [#150796](openclaw/openclaw/pull/150796) | fix(plugins): deduplicate registrar failure reporting per process | 去重插件注册器诊断，降低 Doctor/健康报告的噪声 |
| [#150793](openclaw/openclaw/pull/150793) | improve(update): classify partial-clone blob gaps | 将 Git partial-clone 的 blob 缺口与「仓库损坏」区分，改善更新体验 |
| [#150868](openclaw/openclaw/pull/150868) | improve(doctor): correlate foreign installs with duplicate-poller conflicts | 将外来安装检测与重复 poller 通道冲突关联，辅助重复 poller 排障 |
| [#150849](openclaw/openclaw/pull/150849) | fix: report manual cron queue acceptance accurately | 修正手动 Cron 在网关注入被拒时误报 `ok:true, enqueued:true` 的问题（关联 #140978） |
| [#148146](openclaw/openclaw/pull/148146) | fix: restore deferred handoffs from official channel installs | 修复官方通道安装在打包树之外丢失 Gateway 绑定的问题（关联 #140627 / #137710） |
| [#150588](openclaw/openclaw/pull/150588) | fix(google-meet): gateway restart drops active Meet captures | 修复网关重启导致 Google Meet 转录会话丢失、转录永不 finalize（Closes #150143） |
| [#150851](openclaw/openclaw/pull/150851) | fix: Z.AI built-in catalog is empty on China endpoints | 修复使用 `open.bigmodel.cn` 中国端点时 Z.AI 内置目录为空（Closes #150850） |
| [#150790](openclaw/openclaw/pull/150790) | fix(anthropic): report installed claude-cli version on OAuth path | 修正 OAuth 路径下 Anthropic 传输版本被硬编码（`2.1.75`）导致最新模型被门控的问题 |

**整体推进评估**：今日 PR 主线并非新功能，而是**发布可信度与运维可诊断性**——CI 分片（[#150786](openclaw/openclaw/pull/150786)）、Doctor 输出契约、安全清单冻结、更新/克隆异常分类。可见项目正在为下一版本收紧质量闸门。

---

## 4. 社区热点

按评论数与互动排序的焦点议题：

1. **[#97616](openclaw/openclaw/issues/97616)**（30 评论，👍1）— hook/tool 子进程未回收导致僵尸累积与运行时退化。银贝评级，`impact:message-loss` + `impact:crash-loop`，是今日最热议题。
2. **[#144911](openclaw/openclaw/issues/144911)**（24 评论）— MCP server 初始化超时（30s）触发未处理拒绝，直接拖垮整个 Gateway；钻石龙虾评级，`queueable-fix`。
3. **[#42475](openclaw/openclaw/issues/42475)**（23 评论，👍1）— 网关级 per-agent 成本预算强制（日/月上限），P2 且需产品决策。
4. **[#149361](openclaw/openclaw/issues/149361)**（20 评论）— WebUI 持续性能与稳定性研究，要求基于真实 Gateway 证据。
5. **[#126360](openclaw/openclaw/issues/126360)**（17 评论）— 显式多智能体归属下 `AgentSelectionRequiredError` 刷屏日志。
6. **[#150201](openclaw/openclaw/issues/150201)**（14 评论，P0）— Windows 2026.9.3 更新候选快照失败、Gateway SQLite 检查超时。
7. **[#67413](openclaw/openclaw/issues/67413)**（👍5，今日最高点赞）— per-agent dreaming 配置，解决所有工作区同时 dreaming 引发的内存尖峰。

**诉求分析**：热点高度集中在**多智能体正确性（归属、路由、会话状态）** 与**进程/资源生命周期管理（子进程回收、MCP 连接、内存）**。同时出现明显信号：用户在规模化部署（632-agent fleet、6 智能体显式归属）后，开始要求**成本与资源治理能力**（#42475、#67413）。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

### P0
- **[#150201](openclaw/openclaw/issues/150201)** Windows：2026.9.3 更新候选快照失败，Gateway SQLite 检查超时。`fix-shape-clear` + `queueable-fix` + `source-repro` → **已具备修复条件**。
- **[#149538](openclaw/openclaw/issues/149538)** main `1611ca6d`：Gateway 到达 ready 后不再服务，`/health` 全部超时，事件循环饥饿、RSS 持续攀升（632-agent fleet）。`impact:crash-loop` → 尚无可见 fix PR。

### P1
- **[#97616](openclaw/openclaw/issues/97616)** 子进程僵尸累积（今日最热）→ `no-new-fix-pr`。
- **[#144911](openclaw/openclaw/issues/144911)** MCP 初始化超时引发 Gateway 崩溃（未处理拒绝 "service child cleanup identity lost"）→ `queueable-fix`。
- **[#126360](openclaw/openclaw/issues/126360)** `AgentSelectionRequiredError` 日志洪水 → `no-new-fix-pr`。
- **[#137332](openclaw/openclaw/issues/137332)** 混合终态 requester-settle 批次在归属检查后无限重试 → `queueable-fix`。
- **[#110190](openclaw/openclaw/issues/110190)** 运行时上下文载体置于用户消息之后，引发模型严重混淆与推理 token 浪费 → `no-new-fix-pr`。
- **[#105528](openclaw/openclaw/issues/105528)** v2026.6.x 回归：Windows 上 `exec`/`read` 工具静默返回空输出。
- **[#148707](openclaw/openclaw/issues/148707)** 2026.9.4 回归：第二次运行挤占在途 turn，回复丢失（"no active tool authority snapshot"）。
- **[#144809](openclaw/openclaw/issues/144809)** claude-cli：超过 `RUN_STALE_TAKEOVER_MS` 的 turn 丢失整段回复。
- **[#50093](openclaw/openclaw/issues/50093)** WhatsApp 重连后不补投遗漏消息。
- **[#108379](openclaw/openclaw/issues/108379)** 小米 MiMo（openai-completions）重复生成尝试，导致中止前重复叙事文本。
- **[#119411](openclaw/openclaw/issues/119411)** 记忆文件监听器从不重建索引，`memory status` 误报 `Dirty: no`。
- **[#138272](openclaw/openclaw/issues/138272)** Android Talk 在需要执行任务的 turn 上断连（"no live response owner"），跨 2026.7.1–2026.9.1 复现。

### P2（部分）
- **[#139710](openclaw/openclaw/issues/139710)** turn 中途 plugin-generation supersede 杀死 system-agent turn 及其 planner 回退 → `needs-live-repro`。
- **[#146004](openclaw/openclaw/issues/146004)** 2026.9.3 回归：子智能体完成触发无通道 dashboard 心跳 turn。
- **[#143632](openclaw/openclaw/issues/143632)** 入站 iMessage 被 2–3 次重复投递进会话上下文，去重未生效。
- **[#137729](openclaw/openclaw/issues/137729)** transcript 重放与错误分类中未防护的 `.trim()` 调用 → `queueable-fix`。
- **[#116512](openclaw/openclaw/issues/116512)** Telegram progress 模式在 snapshot ID 变化时重复首条 commentary。
- **[#53783](openclaw/openclaw/issues/53783)** Telegram 群组跨智能体 `sessions_list` 可见性不一致，导致单向 `sessions_send` 失败（涉安全评审）。
- **[#110346](openclaw/openclaw/issues/110346)** `message send --media` 的本地媒体白名单在 WhatsApp 与 Telegram 间不一致（同路径同调用）→ `linked-pr-open`。

### 已关闭
- **[#77802](openclaw/openclaw/issues/77802)**（CLOSED）`doctor --fix` 在多个校验错误时原子失败，修复无法持久化。
- **[#146265](openclaw/openclaw/issues/146265)**（CLOSED）网关重启后共享 `AsyncWorkScope` 进程级保持关闭，DB/Fleet 工具全部失效而健康检查仍报 OK。

**稳定性评估**：僵尸评级（🦞 diamond lobster）集中出现在 `source-repro` + `queueable-fix` 的崩溃与消息丢失类问题上，修复路径清晰；但 `no-new-fix-pr` 的长期项（如 #97616、#126360）提示维护带宽仍是瓶颈。

---

## 6. 功能请求与路线图信号

| 需求 | 社区热度 | 与已有 PR 的关系 | 纳入下一版本的可能性 |
|---|---|---|---|
| **per-agent 成本预算强制**（[#42475](openclaw/openclaw/issues/42475)） | 23 评论，P2，需产品决策 | 无直接关联 PR | 中——需求明确，但需产品决策 |
| **per-agent dreaming 配置**（[#67413](openclaw/openclaw/issues/67413)） | 👍5，今日最高 | 无直接关联 PR | 中——直击内存尖峰与限流问题 |
| **WhatsApp 重连消息回填**（[#50093](openclaw/openclaw/issues/50093)） | 13 评论，P1 | 无直接关联 PR | 中——属消息丢失类，与今日主题一致 |
| **MCP loopback 自动重连**（[#98435](openclaw/openclaw/issues/98435)） | 13 评论，P2 | 无直接关联 PR | 中高——与今日 MCP 生命周期议题（#144911）同源 |
| **WebUI 性能与稳定性研究**（[#149361](openclaw/openclaw/issues/149361)） | 20 评论，maintainer 标签 | 相关 UI PR：[#150589](openclaw/openclaw/pull/150589)、[#150586](openclaw/openclaw/pull/150586) | 高——已有维护者介入与配套 UI 修复 |

**路线图信号**：在规模化部署的推动下，「资源治理」（成本上限、dreaming 调度、内存上限）正从边缘需求转为主线；同时 MCP 连接生命周期（初始化、重连、清理）已成为稳定性与体验的交汇点。

---

## 7. 用户反馈摘要

**真实痛点**
- **规模化即暴露**：632-agent fleet 出现事件循环饥饿（#149538）；6 智能体显式归属下错误刷屏（#126360）——单机小规模可用性 ≠ 生产可用性。
- **进程/资源泄漏体感明显**：僵尸子进程累积（#97616）、所有工作区同时 dreaming 撑爆 6GB `MemoryMax` 并限流（#67413）。
- **更新与升级摩擦**：Windows 更新快照失败（#150201）、`doctor --fix` 原子失败导致修复无法持久化（#77802）、partial-clone 误判为损坏（PR #150793 正在修）。
- **回复丢失反复出现**：多条独立报告指向同一症状族——"no active tool authority snapshot"（#148707、#144809），跨 claude-cli 与交互会话。
- **平台一致性缺口**：Windows `exec`/`read` 静默空输出（#105528）；Telegram/WhatsApp 本地媒体白名单不一致（#110346）。

**使用场景**
- 本地 LaunchAgent 方式运行 Gateway（macOS）、DigitalOcean 2vCPU/4GB droplet、Windows 桌面更新通道、Android 实时语音（Talk）、Claude Code 订阅 OAuth、Telegram 群组多智能体协作、Google Meet 转录、iMessage/WhatsApp/Telegram 多通道路由。

**满意 / 不满意**
- **正面信号**：Issue 普遍带有高质量复现信息（`source-repro`）、评级体系（🦞/🦐/🦪 等）与「可排队修复」标签，说明项目对报告的处理流程成熟、反馈闭环清晰。
- **负面信号**：长期 `no-fix-pr` 项占比不低；部分问题跨多个版本未收敛（#138272 跨 2026.7.1→2026.9.1，#50093 自 2026-03 挂起），长期未修复会消耗高级用户信心。一位用户在 #88087 中因长时后台任务体验差与 cron 唤醒静默失败而放弃 droplet 部署——成本与可靠性直接导致用户流失。

---

## 8. 待处理积压

以下为创建时间较早、仍为 OPEN 且缺乏 fix PR 的重要条目，建议维护者优先分配注意力：

| Issue | 创建 | 状态信号 | 积压风险 |
|---|---|---|---|
| [#42475](openclaw/openclaw/issues/42475) per-agent 成本预算 | 2026-03-10 | `stale`，需产品决策 | 高——等待产品决策超 6 个月 |
| [#50093](openclaw/openclaw/issues/50093) WhatsApp 消息回填 | 2026-03-19 | `stale`，P1，`impact:message-loss` | 高——消息丢失长期未解 |
| [#53783](openclaw/openclaw/issues/53783) Telegram 跨智能体权限不一致 | 2026-03-24 | `stale`，需安全评审 | 高——含安全维度 |
| [#45494](openclaw/openclaw/issues/45494) Cron 任务在 LLM 故障期静默超时 | 2026-03-13 | `stale`，回归 | 中高——与 #88087 用户体验痛点同源 |
| [#67413](openclaw/openclaw/issues/67413) per-agent dreaming 配置 | 2026-04-15 | `stale`，👍5 | 中——社区呼声最高 |
| [#77802](openclaw/openclaw/issues/77802) `doctor --fix` 原子失败 | 2026-05-05 | 今日已 CLOSED | 已解除 |
| [#98435](openclaw/openclaw/issues/98435) MCP loopback 不自动重连 | 2026-07-01 | `stale`，`recovered=1` 误导 | 中高——与今日 MCP 议题关联 |
| [#88087](openclaw/openclaw/issues/88087) 后台任务 UX + cron 静默失败 | 2026-05-29 | `stale`，需安全评审 | 中高——已导致用户放弃部署 |

**PR 侧提醒**：待合并 PR 达 295 条，其中多条标记 `status: 👀 ready for maintainer look`（如 [#150786](openclaw/openclaw/pull/150786)、[#150847](openclaw/openclaw/pull/150847)、[#150856](openclaw/openclaw/pull/150856)、[#150844](openclaw/openclaw/pull/150844)、[#150845](openclaw/openclaw/pull/150845) 等），均为 RomneyDa 于今日提交的小体积高确信度改动——**合并队列的维护者评审带宽是当前最直接的吞吐瓶颈**。此外 [#150790](openclaw/openclaw/pull/150790)（P1，`needs proof`）与 [#150588](openclaw/openclaw/pull/150588)（P1，`merge-risk: session-state / availability`）涉及较高影响面，建议优先评审。

---

*本日报基于所提供 GitHub 数据生成，未验证仓库中未提供的链接、指标或事件。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**数据日期：2026-09-17** ｜ 覆盖项目：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw（共 13 个）

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态在 2026-09-17 呈现"高吞吐、低交付"的典型收敛期特征：13 个项目中 10 个有活跃动态，但**全部项目当日均无新版本发布**，所有能量集中在 PR 队列与稳定性修复上。规模最大的 OpenClaw（单日 1000 条 Issues/PR 更新）与 ZeroClaw、Hermes Agent、CoPaw 等共同暴露出同一结构性矛盾——**提交流入速度普遍高于维护者评审吞吐**，多数项目待合并 PR 占比超过 80%。技术焦点已从"功能扩张"整体转向**可靠性与资源治理**：会话隔离、进程/子进程生命周期、上下文压缩、多智能体归属正确性成为跨项目高频缺陷域。同时，规模化部署（632-agent fleet、20+ Profile、多通道路由）正把"成本预算、内存上限、沙箱隔离"等运维能力推入主线需求。生态整体处于"单机可用已验证、生产可用性待补课"的阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃·关闭） | PR 更新（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（355·145） | 500（295·205） | 无 | 高活跃+高回归压力，维护重心转向可靠性与发布验证 |
| **ZeroClaw** | 50（47·3） | 50（47·3） | 无 | 迭代极快，多模态/通道路由不稳定，评审吞吐为主要瓶颈 |
| **Hermes Agent** | 50（46·4） | 50（42·8） | 无 | 活跃但吸收能力偏紧，多 Profile 隔离与平台兼容为高频主题 |
| **CoPaw** | 18（17·1） | 43（24·19） | 无 | 高活跃，Console 前端与上下文/记忆两层缺陷密集，响应速度快 |
| **NanoClaw** | 1（·1 关闭） | 24（20·4） | 无 | 高活跃但合并吞吐偏低，安全类修复审查周期偏长 |
| **LobsterAI** | 5（2·3） | 17（5·12） | 无 | 中高活跃，发布分支收口+网关稳定性，5 条 Issue 全带 stale |
| **NanoBot** | 2（2·0） | 13（12·1） | 无 | 稳定性收敛期，会话隔离为核心痛点，合并节奏偏慢 |
| **PicoClaw** | 1（·1 关闭） | 7（4·3） | 无 | 中等偏低强度，清理历史积压，渠道适配持续收敛 |
| **Moltis** | 1（1·0） | 4（3·1） | 无 | 中等，提交多互动少，Nix 发布通道出现"发布即损坏" |
| **NullClaw / IronClaw / TinyClaw / ZeptoClaw** | 无活动 | 无活动 | 无 | 静默 |

> 注：NanoBot 的"待合并 12 / 合并 1"、NanoClaw 的"待合并 20 / 合并 4"等比例，反映多数项目当日合并吞吐显著低于提交流入。

---

## 3. OpenClaw 在生态中的定位

**社区规模：绝对量级领先。** OpenClaw 单日 Issues/PR 各 500 条，是第二大活跃项目（ZeroClaw、Hermes Agent 各 50 条）的 **10 倍**，是 CoPaw（Issues 18/PR 43）的近 10–27 倍。其热点 Issue 讨论量（#97616，30 评论；#144911，24 评论）也远超其他项目（多数为 0–10 条），说明 OpenClaw 承载着生态中最大规模的用户与集成方。

**技术路线差异：以"网关为中心"的运行时。** OpenClaw 围绕 Gateway 构建了完整运行时（Doctor 诊断、CI 分片、发布验证、插件注册器、MCP 生命周期、多通道投递），今日 PR 主线明确指向"发布可信度与运维可诊断性"——如打包后 TypeScript 类型证明（#150845）、`doctor --lint --json` 的 `schemaVersion` 契约（#150847）、安全清单冻结（#150844）。这与多数同类项目（偏渠道适配、单点功能）形成层次差异：**OpenClaw 已在解决"如何可靠发布与诊断一个复杂系统"，而其他项目多数仍在解决"单个功能是否正确"**。

**优势：** 诊断/评级流程成熟（`source-repro`、`queueable-fix`、🦞/🦐/🦪 分级），反馈闭环清晰；缺陷域覆盖最广（多通道、多平台、多模型供应商）。

**劣势：** 长期 `no-fix-pr` 项占比不低，部分问题跨版本未收敛（#138272 跨 2026.7.1→2026.9.1，#50093 自 2026-03 挂起近半年）；用户流失已在发生（#88087 因后台任务体验与 cron 静默失败放弃 droplet 部署）。**规模既是护城河，也是维护带宽压力的来源。**

---

## 4. 共同关注的技术方向

| 共同方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话隔离与并发正确性** | OpenClaw（#126360 归属错误刷屏、#137332 无限重试）、NanoBot（#5798 跨会话串话、#5792 会话内串行化）、ZeroClaw（#10408 同会话并行运行致重复回复）、LobsterAI（#1089 无重入保护、#1088 跨轮次污染） | 多会话/多智能体并行时，回复投递到错误会话、状态被并发污染、重复执行 |
| **进程/子进程与资源生命周期** | OpenClaw（#97616 僵尸子进程、#149538 事件循环饥饿、#67413 内存尖峰）、Hermes Agent（#82304 后台任务无生命周期、#108327 持锁磁盘 IO 阻塞事件循环）、ZeroClaw（#9708 日志无界） | 子进程回收缺失、内存/RSS 攀升、任务静默失败导致资源与工作丢失 |
| **上下文管理 / 压缩失效** | CoPaw（#7810 设 131k 飙到 271k、#7836 scroll 淘汰丢用户轮次、#7733 agent 自主上下文管理）、NanoBot（自动压缩提示泄漏）、OpenClaw（#110190 上下文载体位置致模型混淆） | 上下文上限"设置不生效"、压缩不触发、淘汰策略丢弃有效工作 |
| **MCP 连接生命周期** | OpenClaw（#144911 初始化超时拖垮网关、#98435 loopback 不自动重连）、CoPaw（#7821 OAuth token 丢弃、#7827 streamable_http 卡不激活）、Hermes Agent（#47851 断路器误判业务错误）、PicoClaw（#3368 MCP 文档）、NanoClaw（#3551/#3552 MCP 策略） | 初始化超时、凭据刷新丢失、错误分类失真、策略未按组强制 |
| **图像/附件溯源与显式声明** | ZeroClaw（#10854/#10908/#10912 字面图像标记被提升为畸形附件）、OpenClaw（#110346 媒体白名单不一致） | 工具输出中的字面标记被误当真实附件，无溯源机制 |
| **部署/安装可复现性** | Moltis（#1273 Nix flake 无法构建已发布 tag）、Hermes Agent（#113670/#114093 Windows 安装残留）、NanoClaw（#3844 发行版 Node 安装失败、#957 Podman 支持，8👍）、ZeroClaw（#5269 `nix run` 路径）、LobsterAI（#1027 内网 registry 卡死） | 发布产物"发布即损坏"、平台安装路径缺乏校验、容器运行时依赖过窄 |
| **成本与资源治理** | OpenClaw（#42475 per-agent 成本预算、#67413 per-agent dreaming）、Hermes Agent（#82304 资源生命周期） | 规模化后要求日/月成本上限、按 agent 调度资源密集型功能 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用网关+多通道+多智能体编排 | 规模化/生产部署团队 | Gateway 为中心的完整运行时，含 Doctor/发布验证/MCP 生命周期 |
| **Hermes Agent** | 多 Profile、评估 harness、桌面+CLI | 多 Profile 重度用户、自改进能力研究者 | 强调 eval 覆盖与自动化管线，桌面端集成深 |
| **ZeroClaw** | 多模态（图像/语音/TTS）+通道扩展 | 多通道/多模态集成方 | Rust 系，模块化（cron 抽离为独立 crate），沙箱/权限收口 |
| **CoPaw** | Console 前端 + Hub 平台治理 + 语音 | 团队/组织级部署、飞书等企业集成 | Hub 模型网关（密钥保险库）、PawApp 生态、Pydantic/DoomLoop 框架 |
| **NanoBot** | 会话串行化、cron、工具正确性 | 自托管多会话用户（QQ 渠道） | 会话 FIFO inbox 准入模型，稳定收敛期 |
| **NanoClaw** | 安全策略、容器隔离、Skill 生态 | 安全敏感/自托管用户 | 每代理组 MCP 策略、OneCLI 网关路由、只读挂载 |
| **LobsterAI** | Cowork 会话 + openclaw 网关封装 | 下游 fork / 合规敏感用户 | 依赖 openclaw 版本，强会话可视化 |
| **Moltis** | 沙箱隔离 + 构建可复现 | 需稳定自建的运维方 | Nix/BuildKit 构建，per-agent 沙箱开关 |
| **PicoClaw** | 渠道适配 + 协议兼容 | 嵌入式/多渠道轻量用户 | 支持 anthropic-messages 原生协议、OpenAI Responses API 迁移 |
| **NullClaw/IronClaw/TinyClaw/ZeptoClaw** | — | — | 当日无活动 |

**关键分野：** 一是**架构层级**——OpenClaw/Hermes/CoPaw 在构建平台级能力（网关、Hub、评估体系），NanoBot/NanoClaw/PicoClaw 更聚焦单点正确性与渠道；二是**语言与运行时**——ZeroClaw（Rust）、CoPaw（Python/全栈）路线不同；三是**隔离模型**——Moltis/NanoClaw/ZeroClaw 把沙箱与权限默认拒绝作为一等公民，OpenClaw 侧重网关级资源治理。

---

## 6. 社区热度与成熟度

**第一梯队（快速迭代，规模领先）**
- **OpenClaw**：1000 条/日更新，绝对规模第一，但"高活跃+高回归压力"并存。

**第二梯队（快速迭代，方向分化）**
- **ZeroClaw、Hermes Agent**（各 100 条/日）、**CoPaw**（61 条/日）：功能与修复并行，均处贡献流入>吸收的高压状态；ZeroClaw 多模态不稳定，Hermes/CoPaw 多 Profile/企业集成快速铺开。

**第三梯队（质量巩固期）**
- **NanoBot、NanoClaw、LobsterAI、PicoClaw、Moltis**：功能扩张放缓，重心转向会话隔离、安全策略、发布收口、协议兼容等稳定性收敛，合并吞吐偏慢是共性问题。

**静默层**
- **NullClaw、IronClaw、TinyClaw、ZeptoClaw**：当日无活动，活跃度/可持续性存疑。

**成熟度信号对比：** 最成熟的信号出现在 OpenClaw（评级体系、复现源、发布类型证明）与 ZeroClaw（多维标签：size/risk/domain/status）；最不成熟的信号是多个项目**同一 bug 出现双 fix PR 需裁定**（NanoBot #5792/#5794）、**同主题 PR 长期并存未收敛**（NanoClaw #2301/#101 GitHub 集成）。

---

## 7. 值得关注的趋势信号

1. **"规模化即暴露"是可靠性分水岭。** OpenClaw 632-agent fleet 出现事件循环饥饿（#149538）、6 智能体归属错误刷屏（#126360）、Hermes 20+ Profile 耗尽后端槽位（#103375）——**单机小规模可用性完全不等于生产可用性**。对智能体开发者的参考：进程级共享假设（全局注册表、共享 env、单事件循环）是最常见的规模化隐患，应在架构早期以 per-session/per-profile 隔离设计。

2. **资源治理从边缘需求转为主线。** per-agent 成本预算（OpenClaw #42475 挂起 6 个月）、dreaming 调度（#67413）、内存上限、后台任务生命周期（Hermes #82304）集中出现。信号明确：**用户开始为"智能体烧钱/烧内存"付费寻求控制手段**，成本与资源治理有望成为下一个竞争性功能面。

3. **自动化内部事件泄漏到用户可见面引发普遍不满。** CoPaw（auto-memory-recall 合成追踪被当前端内容，PR #7835）、NanoBot（自动压缩提示变成 QQ 聊天消息，#5784）、PicoClaw（失败回合后动画持续调用 API 228,000+ 次，#3343）。参考价值：**内部过程的"静默/折叠"机制应作为渠道层一等公民**，而非事后修补。

4. **图像/多模态附件缺乏溯源机制，形成簇状缺陷。** ZeroClaw 一日内爆发 #10854/#10908/#10912 同一根因，系统性修复方案是"显式声明工具附件"而非扫描文本标记（#10938）。参考：**多模态内容传递应采用结构化声明，而非从文本中启发式提取**。

5. **发布可复现性成为信任基线。** Moltis 的 Nix flake 无法构建已发布 tag（#1273）、ZeroClaw 的 `nix run` 路径缺文档（#5269，挂起 5.4 个月，good-first-issue 未被认领）、Hermes Windows 安装残留。参考：**发布流程需覆盖非主流打包路径的校验**，否则"发布即损坏"会直接流失运维型用户。

6. **协议层兼容性是持续的评审瓶颈。** PicoClaw 的 anthropic-messages PR 历时半年才关闭（#1158），OpenAI Responses API 迁移（#3381）新开；OpenClaw OAuth 路径硬编码版本致新模型被门控（#150790）。参考：**跟随各家 LLM 原生 API 演进需要专门的兼容性评审通道**，否则会形成长期积压。

7. **维护者评审带宽成为生态共同瓶颈。** 几乎所有活跃项目待合并 PR 占比 >80%（OpenClaw 295/500、ZeroClaw 47/50、Hermes 42/50、NanoClaw 20/24、NanoBot 12/13），且多条带 `ready for maintainer look`/`needs-maintainer-review` 长期挂起。**对贡献者的启示：小体积、高确信度、带复现的改动最易被合入；对项目方：评审带宽是比功能路线图更紧迫的约束。**

---

*本报告严格基于所提供 2026-09-17 各项目 GitHub 快照数据生成，未验证数据中未提供的链接、指标或事件；评论数与点赞数仅在源数据提供时引用。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-17

> 数据来源：HKUDS/nanobot GitHub 活动（统计窗口：过去 24 小时）

## 1. 今日速览

项目今日处于**高活跃、零发布**的状态：24 小时内 PR 更新 13 条（待合并 12、合并/关闭 1），Issues 更新 2 条且均为新开/活跃，无新版本发布。工作重心集中在**会话隔离与会话内消息串行化**这一核心稳定性问题上——Top 优先级 PR #5792（p1）与新 Issue #5798 指向同一类跨会话/串话缺陷，说明这是当前社区与维护者共同聚焦的痛点。此外，`cron` 工具、`edit_file` 工具、API `stream` 参数校验等一批 p2 修复持续下沉，代码质量类 PR 占比较高。整体看，项目功能面扩张放缓，进入**稳定性收敛期**，健康度良好但合并节奏偏慢（12 条 PR 排队）。

## 2. 版本发布

今日无新版本发布，最新 Releases 为空。

## 3. 项目进展

今日仅有 1 条 PR 被合并/关闭：

- **#2595 [CLOSED] refactor: rename tool progress text variable for clarity**（作者 star-736，创建 2026-03-28，更新 2026-09-16）
  链接: HKUDS/nanobot PR #2595
  将工具进度路径中的局部变量由 `thought` 重命名为 `display_text`，并补充注释以澄清意图（该值实际由 `_strip_think(...)` 产生）。属于**可读性重构**，不带行为变更；该 PR 标签含 `conflict`，从 3 月创建到 9 月才关闭，反映出长期积压 PR 的清理动作。

整体而言，今日项目**净向前推进有限**：1 条低风险重构合并，12 条待合并 PR（含 1 条 p1 会话修复）尚未落地，功能与稳定性收益仍处于"待兑现"状态。

## 4. 社区热点

按今日可见的评论/互动数据（多数 PR 评论数为 `undefined`，无法计入）：

- **Issue #5784 [OPEN] QQ: automatic compaction notices are sent as standalone messages, and the channel has no way to collapse them**（作者 AlfredChaos，更新 2026-09-17，**评论 2**，👍 0）
  链接: HKUDS/nanobot Issue #5784
  今日讨论最活跃的条目。自托管用户在 QQ 渠道下，当闲置自动压缩（auto-compaction）作用于"最后路由为 QQ"的统一会话时，两条生命周期提示（"Compressing context…" / "Cont…"）会作为普通聊天消息发给用户，且渠道侧无法折叠。背后诉求：**自动化内部事件不应污染面向终端用户的消息流**，需要渠道级的静默/折叠机制。

- **PR #5792 [OPEN] [p1] fix(agent): serialize and batch per-session messages**（作者 chengyongru，更新 2026-09-17）
  链接: HKUDS/nanobot PR #5792
  虽然是 p1 高优先级修复，但今日无可见评论数据；其受关注度主要体现在优先级标签与新 Issue #5798 的呼应上。

## 5. Bug 与稳定性

按严重程度排列：

**高（p1，已有 fix PR）**
- **跨会话串话 / 会话隔离失效** — Issue #5798 `[bug] 回复串会话问题`（作者 wowowowowowowowonojieba，创建并更新 2026-09-17，评论 0，nanobot 版本 0.3.5）
  链接: HKUDS/nanobot Issue #5798
  复现路径：一个会话正在运行时，在另一会话中交流，回复会跑到第一个运行中的会话里；用户明确标注"**0.3.0 没有这个问题**"，属**回归**。
  对应 fix：**PR #5792（p1，OPEN）** 链接: HKUDS/nanobot PR #5792 — 在每个 session worker 调度前安装唯一的 FIFO inbox，将渠道输入、自动化轮次与排队的 `/compact` 命令统一走一个准入函数与一个 session worker。
  另有 **PR #5794 [bug, fix]** `fix: cross-session response delivery in agent loop`（作者 adityanurdin，更新 2026-09-16）针对同一问题域：Session A 发送消息后快速切到 Session B 再发消息，A 的响应可能出现在 B 中。
  链接: HKUDS/nanobot PR #5794
  → 同一根因存在**两条并行 fix PR**，建议维护者尽快裁定去重，避免分支漂移。

**中（p2，均有 fix PR）**
- **`cron` 工具接受过去的单次计划并报成功，但任务永不触发** — PR #5762（`_compute_next_run` 对过去的 `at_ms` 返回 `None`）
  链接: HKUDS/nanobot PR #5762
- **`cron` 工具对互斥计划字段静默择一，丢弃其余字段** — PR #5766（`every_seconds` / `cron_expr` / `at` 应互斥）
  链接: HKUDS/nanobot PR #5766
- **OpenAI 兼容端点 `stream` 参数按普通真值判断**，`"stream": "false"` 被当作真值误入 SSE 模式 — PR #5765
  链接: HKUDS/nanobot PR #5765
- **`edit_file` 丢失内联替换的分隔空白**，可能粘连相邻 token 改变语义 — PR #5796
  链接: HKUDS/nanobot PR #5796
- **`edit_file` 在带换行的 fallback 匹配替换中丢失缩进并插入多余空行** — PR #5795
  链接: HKUDS/nanobot PR #5795
- **QQ 渠道自动压缩提示以独立消息发出、无法折叠** — Issue #5784（无对应 fix PR）
  链接: HKUDS/nanobot Issue #5784

**待观察**
- **PR #5152 [regression, fix, test]** `fix(subagent): mark partial completion results`，创建于 2026-07-28，今日仍在更新，标签含 `regression`，属长期未合入的回归修复。链接: HKUDS/nanobot PR #5152

## 6. 功能请求与路线图信号

今日无独立的新功能型 Issue；路线图信号主要来自待合并 PR：

- **模型供应商移除控制（WebUI）** — PR #5352 `Add model provider removal controls`，为内置与自定义 provider 增加删除入口与确认控件，并在模型预设或图像生成仍引用该 provider 时阻止删除；标签含 `conflict`。**可能纳入下一版本**，但需先解冲突。
  链接: HKUDS/nanobot PR #5352
- **OpenRouter 原生图像生成 API 支持** — PR #5718 `feat(provider): support OpenRouter native image generation API`，理由是 OpenRouter 已提供原生 Images API，Nanobot 需适配以保持兼容并暴露更多图像生成能力。属明确的兼容性驱动需求，**较可能被优先考虑**。
  链接: HKUDS/nanobot PR #5718
- **MCP / Parallel 集成可观测性** — PR #5797 `fix(mcp): identify nanobot requests to Parallel`，为请求添加稳定的 `nanobot/<version>` User-Agent，使 Parallel 能统计该集成的聚合用量。属集成方主动提出的运营需求，改动小、风险低。
  链接: HKUDS/nanobot PR #5797
- **记忆整理（memory consolidation）保留完整输入** — PR #5379 `fix(memory): preserve full consolidation input`，在 `last_consolidated` 推进前保留全部公开 raw-fallback 字符，属数据完整性方向。
  链接: HKUDS/nanobot PR #5379

## 7. 用户反馈摘要

- **痛点：自动化内部过程泄漏到用户可见面。** Issue #5784 的自托管用户描述，闲置自动压缩的两条生命周期提示（"Compressing context…" 等）在 QQ 渠道中变成普通聊天消息，且**渠道层没有折叠手段**——用户能接受压缩发生，但不接受它以聊天消息形式打扰终端用户。
- **痛点：会话隔离回归，直接影响可用性。** Issue #5798 用户给出清晰复现：多会话并行时会话串话，回复投递到错误会话，并强调 **0.3.0 无此问题、0.3.5 出现**，说明用户对版本回归敏感且有明确基线认知。
- **使用场景画像：** 两条 Issue 均来自**自托管/多会话重度用户**（QQ 渠道、多会话并行切换），说明该群体的稳定性诉求是当前最主要的声音来源。
- 今日无"满意"类正向反馈；由于数据中仅 2 条 Issue、且评论仅 #5784 有 2 条，**反馈样本量小，不宜过度外推**。

## 8. 待处理积压

以下条目创建时间早、今日仍有更新但尚未合入，建议维护者优先分诊：

- **PR #5152**（创建 2026-07-28 → 今日更新，约 7 周）`fix(subagent): mark partial completion results`，标签含 `regression, fix, test`。回归修复长期挂起。
  链接: HKUDS/nanobot PR #5152
- **PR #5352**（创建 2026-08-12，约 5 周）`Add model provider removal controls`，标签含 `conflict`，需 rebase 才能推进。
  链接: HKUDS/nanobot PR #5352
- **PR #5379**（创建 2026-08-13，约 5 周）`fix(memory): preserve full consolidation input`，摘要显示已 rebase 到当前结构化整理流程，可能已接近可合状态。
  链接: HKUDS/nanobot PR #5379
- **PR #5718**（创建 2026-09-09）OpenRouter 原生图像生成 API 支持，涉及外部服务兼容性，拖延存在失效风险。
  链接: HKUDS/nanobot PR #5718
- **本日新增待分诊：** PR #5794 与 PR #5792 针对同一跨会话投递缺陷，**建议合并前先去重**；Issue #5784（QQ 压缩提示）目前**无对应 fix PR**，属唯一无修复路径的开放缺陷。
  链接: HKUDS/nanobot Issue #5784 | HKUDS/nanobot PR #5794 | HKUDS/nanobot PR #5792

---

**健康度提示：** 今日 13 条 PR 中 12 条待合并、1 条关闭（非功能性重构），合并吞吐低于提交吞吐，队列持续累积；同时出现同一 bug 的双 fix PR 与回归型 Issue，建议维护者将 #5792/#5794 的裁定与 #5784 的归属作为今日最高优先级动作。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-17

## 1. 今日速览

项目今日保持高活跃度：过去24小时内 Issues 更新 50 条（新开/活跃 46，关闭 4），PR 更新 50 条（待合并 42，合并/关闭 8），无新版本发布。合并/关闭量（8 条 PR、4 条 Issue）明显低于待处理量，积压压力继续累积，其中平台兼容性（Windows）、多 Profile 隔离与插件/目录性能是今日高频主题。讨论热度最高的是自动化集成阻塞（#88584，110 条评论），属于基础设施级问题。总体健康度：活跃但吸收能力偏紧，建议关注长时间未响应的 P2 问题。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭的 PR 数量有限（8 条），以下为可确认的代表性条目：

- **PR #58999 [CLOSED] fix(telegram): redact proxy credentials in logs** — 修复 Telegram 代理 URL 凭据在 gateway 启动与独立 `send_message` 日志中的泄露（对应 #58994），同时保持 `HTTPXRequest` 使用完整 URL。安全边界类修复落地。
  https://github.com/NousResearch/hermes-agent/pull/58999
- **PR #114054 [CLOSED] fix(send_message_tool): eligibility gate + safe fallback** — 承接 #46118（`sendRichMessage` 快速路径），处理 sweeper review 提出的问题并整合 #72939 的资格守卫。
  https://github.com/NousResearch/hermes-agent/pull/114054
- **Issue #103375 [CLOSED] Bot tiles 无限重连** — 桌面端 20+ Profile 场景下 bot tiles 反复重启本地后端、耗尽 Warm Bot Backends 槽位的 P1 问题已关闭。
  https://github.com/NousResearch/hermes-agent/issues/103375
- **Issue #112765 [CLOSED] 多路复用 gateway 下 Messaging 页永久显示 "Restart needed"** — 状态键 `<profile>:<platform>` 未解析的问题已关闭。
  https://github.com/NousResearch/hermes-agent/issues/112765

净推进评估：修复集中在安全、消息投递与桌面状态显示；但 42 条 PR 待合并、46 条 Issue 活跃，说明吞吐仍未追上流入速度。

## 4. 社区热点

- **Issue #88584（110 评论，OPEN，invalid/comp/cron）** — Automated Nous integration is blocked。`cron/jobs.py` 冲突导致计划中的 Nous-to-Enterkey 合并受阻，无 release 分支变更，dashboard updater 停留在上一个已测试的 Enterkey 版本。讨论量远超其他条目，反映 CI/集成链路阻塞对发布节奏的实质影响。
  https://github.com/NousResearch/hermes-agent/issues/88584
- **Issue #96704（10 评论，1 👍）** — RFC: 为评估 agent 自写 skills 是否真正有效，新增成对实验（paired-arm）harness，直指 README 宣称的 "self-improving / built-in learning loop" 目前无对应 eval 覆盖。
  https://github.com/NousResearch/hermes-agent/issues/96704
- **Issue #88683（9 评论）** — 架构提案：让 install/update/bootstrap 遵循单一事务性部署计划，消除"机器上应该存在什么部署状态"缺失单一事实源导致的一类运维 Bug。
  https://github.com/NousResearch/hermes-agent/issues/88683

诉求分析：社区关注点正从单点 Bug 转向**可验证的自改进能力**与**部署/集成链路的确定性**，属于成熟度诉求。

## 5. Bug 与稳定性

按严重程度排列（均在 2026-09-17 有更新）：

**P1**
- #103375（已关闭）桌面端 bot tiles 无限重连，耗尽本地后端池。已有结论，无遗留 fix PR 需求。

**P2**
- #82304 无人值守自主任务缺乏资源生命周期、受监督后台作业与持久任务状态，静默失败链导致租用 GPU 与已完成工作丢失（agent 自生成的事后分析）。未见关联 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/82304
- #98330 `skills.write_approval` 缺少审查界面，`/skills` 标记为不可用，待审写入静默堆积。未见 fix PR。
  https://github.com/NousResearch/hermes-agent/issues/98330
- #76393 终端工具持久 env 快照固化错误的 `HERMES_HOME`，破坏多 Profile 会话隔离（多路复用 gateway 场景）。
  https://github.com/NousResearch/hermes-agent/issues/76393
- #113245 桌面内嵌预览回归：`drive_preview` 全部动作超时，无 GUI 窗口响应。
  https://github.com/NousResearch/hermes-agent/issues/113245
- #47851 MCP 断路器将业务错误（`isError`）误判为服务故障，错误计数被错误累加（2 👍）。
  https://github.com/NousResearch/hermes-agent/issues/47851
- #108327 `process_registry._move_to_finished` 持锁执行磁盘 IO，阻塞事件循环（Windows 平台）。
  https://github.com/NousResearch/hermes-agent/issues/108327
- #113670 加固前的 Windows 计划任务永不重注册，缺少 `<RestartOnFailure>`，且 wscript 启动器使重启策略不可达。
  https://github.com/NousResearch/hermes-agent/issues/113670
- #5908 kimi-coding 凭据池 `base_url` 加载时不依据 key 前缀重新解析（2 👍，最早创建于 2026-04-07）。
  https://github.com/NousResearch/hermes-agent/issues/5908

**P3（已有 fix PR 关联）**
- #114093 Windows 启动文件夹安装失败遗留 `.tmp`，登录时被记事本打开 → **PR #114100** 已提交（原子交换失败时丢弃暂存临时文件）。
  https://github.com/NousResearch/hermes-agent/issues/114093 ｜ https://github.com/NousResearch/hermes-agent/pull/114100

## 6. 功能请求与路线图信号

- **#96704 skills 成对实验 harness（innovation/needs-decision）** — 需架构决策，尚无对应 PR，短期内落地可能性取决于 maintainer 对 eval 体系的取舍。
  https://github.com/NousResearch/hermes-agent/issues/96704
- **#88683 事务性部署计划（needs-decision）** — 与今日多条 Windows 安装/更新 Bug（#114093、#113670）问题域重叠，存在被合并处理的信号。
  https://github.com/NousResearch/hermes-agent/issues/88683
- **#114078 per-profile `external_include`/`external_exclude` 模式（已被标记 duplicate）** — 共享 `skills/` 根目录下的按模式裁剪能力，当前仅支持 `skills.disabled` 与 `skills.external_dirs`。
  https://github.com/NousResearch/hermes-agent/issues/114078
- **PR #114116 feat(desktop): Gemini Live 实时语音模式** — 若被接受将引入新的实时语音引擎（`BidiGenerateContent` WebSocket），属显著新能力。
  https://github.com/NousResearch/hermes-agent/pull/114116
- **PR #112759 fix(providers): 按 Profile 隔离插件注册表** — 与多 Profile 隔离方向的多个 Issue 一致，可能成为下一版本的兼容性相关改动。
  https://github.com/NousResearch/hermes-agent/pull/112759

## 7. 用户反馈摘要

- **多 Profile 是主要痛点源**：20+ Profile 场景下后端槽位耗尽（#103375）、`HERMES_HOME` 污染（#76393）、凭据需隔离而非共享（#113995）、插件注册表全局共享（PR #112759）、profile 下拉框遗漏 gateway 默认 profile（#106017）——用户实际在单机上运行多 Profile 已成常态，而实现层仍存在进程级共享假设。
- **文档与实现不一致引发配置困惑**：Bot Mode 文档承诺共享 OAuth/Token 池，实际实现强制隔离 Profile 凭据并忽略 `share_auth`（#113995）。
- **CLI 反馈信息误导**：`kanban complete` 在父依赖未完成时报告"unknown id or terminal state"（#110315）；`config set` 对运行时消费的合法键发出"未识别配置键"警告（PR #96732）。
- **性能体感差**：`hermes plugins list` 在多 Profile Windows 安装上 >300s 无输出，实为每行一次实时目录请求（#114106）；dashboard 插件中心重建导致事件循环停顿（PR #113687）。
- **正向信号**：多个 Issue（#96704、#88584）显示用户高度认可现有四套 eval harness 与自动化管线的建设质量，诉求是补齐覆盖而非推倒重来。

## 8. 待处理积压

以下条目创建时间较早、优先级不低但至今未见 fix PR，建议维护者优先分诊：

- **#5908（P2，创建于 2026-04-07，152 天）** kimi-coding 凭据池 `base_url` 不重新解析，且获 2 👍。长期未闭环。
  https://github.com/NousResearch/hermes-agent/issues/5908
- **#47851（P2，创建于 2026-06-17，92 天，2 👍）** MCP 断路器误判业务错误，影响所有 MCP 工具调用的容错行为。
  https://github.com/NousResearch/hermes-agent/issues/47851
- **#76393（P2，创建于 2026-08-01）** `HERMES_HOME` 环境快照破坏多 Profile 隔离。
  https://github.com/NousResearch/hermes-agent/issues/76393
- **#82304（P2，创建于 2026-08-09）** 无人值守任务的资源生命周期与持久状态缺失，已造成真实资源损失。
  https://github.com/NousResearch/hermes-agent/issues/82304
- **#88683 / #96704（均标记 needs-decision）** 架构级议题需 maintainer 表态，长期悬置会持续吸引重复讨论。
  https://github.com/NousResearch/hermes-agent/issues/88683 ｜ https://github.com/NousResearch/hermes-agent/issues/96704
- **PR #96732（OPEN，创建于 2026-08-27）** config 误报警告修复已提交但未合并超过三周。
  https://github.com/NousResearch/hermes-agent/pull/96732

**健康度提示**：今日关闭/合并（4 Issue + 8 PR）与活跃流入（46 + 42）差距明显，且积压中多条为 P2。建议优先处理已有 fix PR 的条目（如 #114093/#114100）与 needs-decision 议题，以阻止同类 Bug 反复重开。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-17

## 1. 今日速览

过去24小时项目保持中等偏低强度的维护节奏：**7 条 PR 更新**（4 条待合并、3 条已合并/关闭），**1 条 Issue 关闭**，**无新版本发布**。今日关闭的 3 条 PR 中，2 条为 Telegram 渠道的体验修复，1 条为长期悬置的 Anthropic 原生协议支持（#1158，创建于 2026-03-06），说明维护者在清理历史积压。值得注意的是，今日更新的多数条目带有 `[stale]` 标记，反映出积压清理与新鲜贡献并存的状态。整体看，项目活跃度平稳，无重大功能落地，但渠道适配与协议兼容性方向在持续收敛。

---

## 3. 项目进展

**已关闭/合并（3 条）：**

- **#1158 [CLOSED] feat: add anthropic-messages protocol for native Anthropic API format（Fixes #269）** — 作者 hyperwd
  新增 `anthropic-messages` 协议前缀，使仅支持 Anthropic 原生 Messages API（`/v1/messages`）的 LLM 服务可用。该 PR 自 2026-03-06 创建，历时约半年后关闭，是今日推进意义最大的一条，直接解决了 Issue #269 的兼容性缺口。
  链接: sipeed/picoclaw PR #1158

- **#3357 [CLOSED] [stale] fix(telegram): treat replies to the bot's own messages as implicit mentions** — 作者 hugodeco
  修复 `mention_only: true` 群组中，用户直接回复机器人消息却未带 @mention 时被静默忽略的问题，改善了群聊对话连续性。
  链接: sipeed/picoclaw PR #3357

- **#3356 [CLOSED] [stale] fix(telegram): re-attach quoted documents when replying to a file message** — 作者 hugodeco
  修复引用文档消息回复时仅携带 `[file]` 占位符、未重新附上被引用文件的问题（此前 `quotedTelegramMediaRefs()` 只处理语音与音频）。
  链接: sipeed/picoclaw PR #3356

**整体评估：** 今日合并内容以 Telegram 渠道修复为主，加上一条协议层能力补齐，项目在"渠道体验一致性"和"模型服务兼容性"两个方向各前进一小步，无破坏性变更。

---

## 4. 社区热点

今日数据中评论数最高的条目为：

- **Issue #3343 [CLOSED] [stale] [BUG] Telegram 工具反馈动画在失败回合后可无限编辑消息** — 4 条评论，作者 raine
  链接: sipeed/picoclaw Issue #3343

该 Issue 是今日唯一有明确评论互动量的条目，也是讨论焦点。其诉求指向一个资源消耗型缺陷：动画在 agent 回合停止推进后仍持续触发外部 API 调用，用户关注点在于**失败状态下的资源泄漏与自我终止机制缺失**。

其余 PR 的评论数在数据中未提供（`undefined`），无 👍 反应记录，因此不构成可量化的社区热点。

---

## 5. Bug 与稳定性

今日无新报告的 Bug，仅关闭 1 条存量缺陷：

| 严重程度 | 条目 | 状态 | 是否已有 Fix PR |
|---|---|---|---|
| 高 | **#3343** Telegram 工具反馈动画在失败回合后持续调用 `editMessageText`（每 3 秒一次，持续数天，累计 228,000+ 次编辑尝试） | [CLOSED] [stale] | 本次以关闭处理，数据中未列出对应 fix PR 链接 |
| 中 | **#3356** Telegram 引用文档消息回复时丢失文件附件（仅有 `[file]` 占位符） | [CLOSED] | 已由 PR #3356 修复并关闭 |
| 中 | **#3357** Telegram `mention_only` 群组中回复机器人消息被忽略 | [CLOSED] | 已由 PR #3357 修复并关闭 |

**评估：** #3343 属于典型的"状态机未收敛 + 缺少退避/熔断"问题，虽已关闭，但鉴于其为 `[stale]` 关闭且数据未显示针对性 fix PR，建议维护者确认根因是否已被真正修复，避免回归。

---

## 6. 功能请求与路线图信号

结合今日 PR 摘要，可识别的功能方向：

- **模型服务兼容性扩展**：`anthropic-messages` 协议（#1158）已关闭落地；同时 **#3381 [OPEN] feat: Switch Openai to responses API**（作者 XenonR，2026-09-17 新开）提出将 OpenAI provider 切换到 Responses API。两者共同指向"跟进各家 LLM 原生 API 演进"的路线，**#3381 若通过评审，大概率纳入下一版本**。
  链接: sipeed/picoclaw PR #3381

- **渠道接入扩展**：
  - **#3376 [OPEN] fix(deltachat): initialize as custom channel** — 修复启用 deltachat 渠道时的配置校验错误（关联 #3265），属修复型贡献，优先级较高。
    链接: sipeed/picoclaw PR #3376
  - **#3344 [OPEN] [stale] Add Build Remote Agent phone pairing (gbr/1)** — 引入 `gbr/1` 协议的配对设备适配器，让手机可旁观桌面 agent，依赖 MIT 许可的 `gbr-agent` v0.6.0+。属较重的平台级特性，落地不确定性较高。
    链接: sipeed/picoclaw PR #3344

- **文档与生态集成**：**#3368 [OPEN] [stale] docs: add Parallel Search MCP setup example**（作者 georgeatparallel）为 CLI 指南补充 Parallel Search MCP 的免账号、免 API Key 配置示例，并附移除说明。
  链接: sipeed/picoclaw PR #3368

---

## 7. 用户反馈摘要

从今日可见的 Issue/PR 摘要中提炼：

- **痛点一：失败路径缺乏自终止机制。** #3343 中工具反馈动画在回合失败后仍持续数天调用 Telegram API，产生 228,000+ 次编辑尝试并影响性能，用户实际遭遇的是"静默的资源消耗"而非显式报错。
- **痛点二：群聊交互语义不符合直觉。** #3357 指出，当 `mention_only: true` 时，用户"直接回复机器人消息"这一最自然的续接方式被忽略；用户描述为"breaks conversation continuity: users naturally hit 'reply'"。
- **痛点三：多媒体引用丢失上下文。** #3356 显示引用文件消息回复时只剩 `[file]` 占位符，语音/音频已被处理但文档未覆盖，属能力不一致。
- **痛点四：渠道启用配置报错。** #3376 引用 #3265，启用 deltachat 渠道时网关启动失败（`channel "deltachat" has ...`），影响部署可用性。
- **正向信号：** 多个外部贡献者（hugodeco 连续提交两条 Telegram 修复、georgeatparallel 贡献 MCP 文档、luisgdev 修复渠道配置）持续投入，显示社区在渠道与集成层有稳定参与度。

---

## 8. 待处理积压

以下 PR 均处于 OPEN 且带 `[stale]` 标记，创建时间较早，建议维护者优先分诊：

| 条目 | 作者 | 创建 | 最后更新 | 状态 |
|---|---|---|---|---|
| **PR #3368** docs: add Parallel Search MCP setup example | georgeatparallel | 2026-09-05 | 2026-09-17 | [OPEN] [stale] |
| **PR #3344** Add Build Remote Agent phone pairing (gbr/1) | LinespottingPrivate | 2026-08-23 | 2026-09-16 | [OPEN] [stale] |

链接: sipeed/picoclaw PR #3368 · sipeed/picoclaw PR #3344

- **#3368** 为纯文档贡献、变更风险低，却已滞留 12 天且被标记 stale，建议尽快评审合并，以维持外部贡献者积极性。
- **#3344** 引入第三方配对协议与设备适配，涉及 MIT 依赖 `gbr-agent` v0.6.0+ 与新增配对流程，评审成本较高，建议明确给出"接受/拒绝/需要改造"的方向性结论，避免长期悬置。

此外，PR #1158（创建于 2026-03-06，历时约半年）虽于今日关闭，但其超长滞留周期本身提示：**协议层与兼容性类 PR 的评审路径可能存在瓶颈**，值得在流程上复盘。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-17

## 1. 今日速览

过去 24 小时 NanoClaw 无新版本发布，但代码流转显著活跃：24 条 PR 有更新，其中 20 条仍在待合并状态、4 条已合并或关闭，同时 1 条 Issue 被关闭。关闭的 Issue #957 是一个从 2026-03-11 存续至今、累计 11 条评论与 8 个 👍 的 Podman 支持建议，表明长期积压的社区诉求开始得到处理。当日仍有新 PR 开入（如 #3846、#3845，均为 2026-09-17 创建），说明贡献者流入未中断。整体判断：项目处于**高活跃、但合并吞吐偏低**的状态——待合并 PR 数量（20 条）远高于当日关闭量，审查队列压力值得关注。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日确认合并/关闭的 PR 共 4 条，材料中明确列出 2 条：

- **PR #3148 [CLOSED]** `fix: honor WEBHOOK_PORT from .env`（作者 ogarciarevett，创建 2026-07-28）
  https://github.com/nanocoai/nanoclaw/pull/3148
  修复了 `WEBHOOK_PORT` 未遵循 NanoClaw 标准配置优先级的问题（进程环境变量 > `.env` > 默认值），关联关闭 Issue #2901。属于配置层一致性修复，消除了 Webhook 端口在不同部署方式下的行为差异。

- **PR #101 [CLOSED]** `Add GitHub integration skill`（作者 Alakazam03，创建 2026-02-06）
  https://github.com/nanocoai/nanoclaw/pull/101
  该 PR 为代理增加通过 `gh` CLI 访问 GitHub 的能力（创建 Issue、评论 PR 等）。这是一条从 2026-02-06 存续超过 7 个月的老 PR，其关闭可能意味着被更完整的替代方案取代（见下文的 #2301），而非功能被采纳。

**推进幅度评估**：当日推进以修复与清理为主，实质性新能力落地有限。值得注意的是同一主题（GitHub 集成）下仍有 2 条长期开启的 PR（#2301、#101 的后续形态），该方向仍处于未收敛状态。

## 4. 社区热点

- **Issue #957 [CLOSED]** `Suggest supporting Podman as an alternative to Docker`（作者 fuyb）
  https://github.com/nanocoai/nanoclaw/issues/957
  **11 条评论、8 个 👍，为当日互动量最高的条目。** 诉求明确：文档中应将 Podman 作为 Docker 的替代方案加以说明，尤其面向 macOS 与 Linux 用户。8 个 👍 在项目 Issue 中属于较高反应量，说明"去 Docker 依赖"是真实且有一定规模的用户需求。该 Issue 已关闭，但材料未给出关闭原因（是文档已更新，还是仅做了说明性答复），建议维护者在关闭评论中明确结论，避免社区重复提议。

- **PR #3846 [OPEN]** `feat(skills): add /add-typesafe-tool and the maintainer agent template`（作者 glifocat，2026-09-17 新开）
  https://github.com/nanocoai/nanoclaw/pull/3846
  引入 TypeSafe 的 Jev 决策模型作为容器工具，并提供 `maintainer` 代理模板。

- **PR #3845 [OPEN]** `feat(dashboard): add local monitoring dashboard`（作者 Ruttney，2026-09-17 新开）
  https://github.com/nanocoai/nanoclaw/pull/3845
  新增本地监控面板，引入 `@nanoco/nanoclaw-dashboard` 依赖、`startDashboard()` 入口与 `DASHBOARD_SECRET`/`DASHBOARD_PORT` 配置。值得注意的是该 PR 说明中提到由 Claude Code 生成，且引入了新的 npm 包依赖，审查时需关注供应链与配置安全问题。

## 5. Bug 与稳定性

今日无新报告的崩溃或回归问题。开放中的修复类 PR 按潜在影响排序如下：

1. **PR #3551 [OPEN]** `fix(config): enforce per-group MCP policy and OneCLI gateway routing`（作者 wildcard，创建 2026-08-26）
   https://github.com/nanocoai/nanoclaw/pull/3551
   涉及远程 HTTP 场景下按组别强制 MCP 策略与 OneCLI 网关路由。标签覆盖 `area/core`、`area/security`、`area/containers`，属安全边界相关修复，**已有 fix PR，但已开启 22 天未合并**。

2. **PR #3552 [OPEN]** `fix(codex): enforce MCP-only policy behind OneCLI`（作者 wildcard，创建 2026-08-26）
   https://github.com/nanocoai/nanoclaw/pull/3552
   与 #3551 同源，针对 Codex (`gpt-5`) 代理强制 MCP-only 策略。同样已开启 22 天。

3. **PR #3752 [OPEN]** `fix(whatsapp): keep every pending question answerable in a chat`（作者 horsehcj，创建 2026-09-09）
   https://github.com/nanocoai/nanoclaw/pull/3752
   带 `kind/bug` 标签，修复同一聊天中多个待答问题无法全部作答的问题。

4. **PR #3751 [OPEN]** `fix(whatsapp): ignore @newsletter JIDs at the inbound boundary`（作者 horsehcj，创建 2026-09-09）
   https://github.com/nanocoai/nanoclaw/pull/3751
   在入站边界过滤 `@newsletter` JID，属防御性修复。

5. **PR #3844 [OPEN]** `fix(setup): replace broken sudo retry with user-owned npm prefix fallback`（作者 DorZvulun，创建 2026-09-16）
   https://github.com/nanocoai/nanoclaw/pull/3844
   解决发行版包管理器安装 Node（Fedora `dnf`、Debian/Ubuntu `apt`）时 `setup.sh` 的 pnpm 安装回退永久失败的问题（Fedora 4x 复现）。**属安装阻断类问题**，对新用户影响直接。

## 6. 功能请求与路线图信号

- **Podman 支持（Issue #957，已关闭）**
  https://github.com/nanocoai/nanoclaw/issues/957
  8 个 👍 显示存在去 Docker 化的真实需求。尽管该 Issue 已关闭，但考虑到反应量，容器运行时抽象或文档层面的兼容说明仍值得纳入考量。

- **本地监控面板（PR #3845）**
  https://github.com/nanocoai/nanoclaw/pull/3845
  若被采纳，将为运维提供可观测性入口（面板 API + UI），是项目从"能跑"向"可运维"演进的一个信号。需注意其引入了新的外部依赖包。

- **按代理组记录投递模式（PR #3713）与 tools-only 强制投递（PR #3781）**
  https://github.com/nanocoai/nanoclaw/pull/3713 ｜ https://github.com/nanocoai/nanoclaw/pull/3781
  两者均由 glifocat 提出并带 `core-team` 标签，前者记录每个代理组应使用的投递契约，后者让无法可靠产出 final-text envelope 的 provider 仅通过出站工具投递。这两条构成一组连贯的架构演进，**被纳入下一版本的可能性较高**。

- **凭证网关契约集中化（PR #3815，带 `core-team` 标签）**
  https://github.com/nanocoai/nanoclaw/pull/3815
  将网关贡献、provider 所属域、会话租约与审批决策统一到一个 host-owned 契约下。属重构性质，影响面覆盖 12 个 area 标签，落地节奏取决于审查资源。

## 7. 用户反馈摘要

从可获得的 Issue 文本中提炼：

- **满意点**：Issue #957 作者开篇明确表示 "thank you for maintaining this project. It is very useful and well designed."——用户对项目整体设计与实用性评价积极，且以礼貌的建设性建议形式提出需求，社区氛围健康。
- **痛点 1：部署环境假设过窄**。Podman 建议（#957）与 `setup.sh` 在发行版 Node 下失败（#3844）指向同一类问题——项目对 Docker + nvm/Homebrew 的路径依赖较强，使用发行版包管理器或替代容器运行时的用户会遇到摩擦。
- **痛点 2：特定渠道的交互完整性**。WhatsApp 相关两条修复（#3752、#3751）表明多问题并发作答与广播类 JID 的处理存在实际使用中的缺陷。
- **痛点 3：NAT/防火墙后的接入**。PR #2301 提出无需端口的轮询模式，说明部分运营者无法暴露入站端口。

材料中未提供 Issues 评论的具体内容，以上仅基于可见摘要文本。

## 8. 待处理积压

以下条目开启时间较长且仍处于 OPEN 状态，建议维护者优先排期：

| 条目 | 类型 | 创建日期 | 已开启 | 标签要点 |
|---|---|---|---|---|
| [PR #101](https://github.com/nanocoai/nanoclaw/pull/101) | Skill | 2026-02-06 | ~7 个月 | 已于今日关闭，但同主题仍需收敛 |
| [PR #2301](https://github.com/nanocoai/nanoclaw/pull/2301) | Feature | 2026-05-06 | ~4.3 个月 | GitHub 轮询模式、OneCLI 密钥合并 |
| [PR #2634](https://github.com/nanocoai/nanoclaw/pull/2634) | Skill | 2026-05-28 | ~3.7 个月 | `/add-paws4claws` 凭证代理 |
| [PR #3148](https://github.com/nanocoai/nanoclaw/pull/3148) | Fix | 2026-07-28 | ~1.7 个月 | 已于今日关闭 |
| [PR #3196](https://github.com/nanocoai/nanoclaw/pull/3196) | Fix | 2026-08-07 | ~1.4 个月 | 只读挂载、`area/security` |
| [PR #3551](https://github.com/nanocoai/nanoclaw/pull/3551) / [#3552](https://github.com/nanocoai/nanoclaw/pull/3552) | Fix | 2026-08-26 | ~22 天 | MCP 策略与网关路由、安全相关 |

**重点关注**：#3196（只读挂载）与 #3551/#3552（MCP 策略 + 网关路由）均带 `area/security` 标签且长期未合并。安全类修复的审查周期偏长，建议明确标注阻塞原因或指定审查人。

**流程观察**：24 条 PR 更新中 20 条待合并、仅 4 条关闭，且多条核心团队 PR（#3781、#3713、#3815）停留在开放状态多日。合并吞吐与贡献流入之间存在明显落差，建议关注审查带宽是否成为项目瓶颈。

---
*本日报数据来源于 NanoClaw 仓库 2026-09-17 过去 24 小时的 GitHub 活动快照；评论数与点赞数仅在源数据提供时引用，未提供的字段不作推断。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-17

> 数据来源：github.com/netease-youdao/LobsterAI 过去 24 小时动态
> Issues 更新 5 条（新开/活跃 2，已关闭 3）｜PR 更新 17 条（待合并 5，已合并/关闭 12）｜新版本 0 个

---

## 1. 今日速览

今日项目维持**中高活跃度**，PR 侧动作显著（17 条更新，12 条完成合并/关闭），主线围绕 `release/2026.9.16` 发布分支的收口与 openclaw 网关稳定性修复展开；Issues 侧全部 5 条均带 `stale` 标记，其中 3 条被批量关闭、2 条仍开放。合并的 PR 集中在 Cowork 会话体验、网关容错与主进程退出优化，属于稳定性与体验打磨型推进。社区侧无新版本发布，也无高热度讨论（评论数均在 0–2 区间），但存在一批 2026-03-30 提交、今日被 stale 流程处理的长期 Issue/PR，反映出积压清理与核心矛盾并存的健康度特征。

---

## 2. 版本发布

无新版本发布。今日关闭的发布分支 PR [#2699](https://github.com/netease-youdao/LobsterAI/pull/2699)（`Release/2026.9.16`）为发布流程动作，但未产生 Releases 条目，故不作版本内容说明。

---

## 3. 项目进展

今日 12 条 PR 完成合并/关闭，按主题归类如下：

**openclaw 网关稳定性（核心方向）**
- [#2698](https://github.com/netease-youdao/LobsterAI/pull/2698) `fix(openclaw): safely recover stale gateway lock owners` — 在手动修复的维护屏障内先核验锁所有者、恢复可确认的陈旧锁，再执行 Snapshot → Doctor → Recovery → 配置同步 → Plugins → 网关启动流程，解决遗留网关/迁移锁引用存活 PID 时被维护锁阻断的问题。
- [#2695](https://github.com/netease-youdao/LobsterAI/pull/2695) `fix(openclaw): prevent browser DNS failures from restarting gateway` — 将 Playwright 导航中的 DNS 失败限制在工具调用内，失效 iframe 只中止自身请求，避免网关退出打断会话与 IM。
- [#2694](https://github.com/netease-youdao/LobsterAI/pull/2694) `fix(openclaw): guard IM workloads and observe config recovery` — 将有效 IM 生命周期与 active 轮询证据纳入自动配置重启检查，修复配置恢复误判为空闲而重启网关的问题（仅第一阶段，恢复决策只记录观察结果）。

**Cowork 会话体验**
- [#2692](https://github.com/netease-youdao/LobsterAI/pull/2692) `feat(cowork): rotate thinking phases and show finished step count` — 模型静默期轮换 "Thinking" 标签并显示已完成步骤数，解决长等待被误读为卡死的问题。
- [#2697](https://github.com/netease-youdao/LobsterAI/pull/2697)（#2692 的关联 PR）已关闭。

**主进程与退出体验**
- [#2693](https://github.com/netease-youdao/LobsterAI/pull/2693) `fix(main): make app quit hide windows immediately and stop skill services faster` — 退出时立即隐藏窗口提供即时反馈，防止退出期间窗口创建/聚焦/重载，并以轮询替代固定 2 秒等待技能服务退出。

**待合并的重要 PR**
- [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696) `feat(cowork): turn workspace review, inline question dock and Tasks panel`（OPEN）— 引入 Codex 风格会话工作区改进（轮次工作区审阅、内联问题栏、Tasks 面板），已在 LobsterAI 下游 fork 使用后 rebase 至 `release/2026.9.15`。这是今日体量较大的功能型 PR，若合并将实质性提升 Cowork 视图能力。

**评估**：今日推进以"修复开放问题 + 收敛发布分支"为主，未见破坏性变更或架构级重构，项目整体向前迈进的幅度属稳定迭代量级。

---

## 4. 社区热点

今日所有 Issues/PR 的评论数均为 0–2，👍 均为 0，**无显著热点**。相对而言讨论最多的为以下 3 条 Issue（各 2 条评论）且均已关闭：

- [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) `package.json → openclaw.version: v2026.3.2 是否支持新版本`（作者 baleli668）— 诉求指向版本合规与安全更新。
- [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) `Prefetch 异步回调不校验 turnToken，可能跨轮次污染`（作者 xiangliqu）。
- [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) `CoworkRunner startSession/continueSession 无重入保护`（作者 MaoQianTu）。

**分析**：三者均创建于 2026-03-30，今日以 `stale` 状态关闭，评论数仅为 1–2，说明这些技术性较强的报告未获得深度社区互动。背后诉求集中在两点——**外部依赖版本的安全合规**与**并发/异步场景下的状态一致性**，前者来自用户对监管要求（国家互联网应急中心更新要求）的直接引用，后者来自开发者对代码级竞态条件的排查。

---

## 5. Bug 与稳定性

按严重程度排列：

**高 — 可远程触发的安全风险（仍开放）**
- [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) `security: shell:openExternal IPC 接口未校验 URL 协议，存在任意协议调用风险`（OPEN，作者 MaoQianTu）— `src/main/main.ts` 中 handler 直接调用 `shell.openExternal(url)` 且无任何校验，恶意注入的渲染层代码可滥用。**未发现对应 fix PR**。

**中 — 并发导致的崩溃（仍开放）**
- [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026) `stop() 与 sendTeamTextReply 并发时因 v2Client 为 null 导致 TypeError 崩溃`（OPEN，作者 MaoQianTu）— `sendTeamTextReply()` 在异步循环中全程使用非空断言 `this.v2Client!`，`stop()` 置 null 后下一轮迭代即崩溃。
  **已有 fix PR：[#1028](https://github.com/netease-youdao/LobsterAI/pull/1028)**（OPEN，同样为 stale，尚未合并）。

**中 — 并发状态污染（已关闭，修复状态不明）**
- [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) `CoworkRunner 无重入保护` — IPC 层 fire-and-forget 调用导致同一 sessionId 并发进入事件流迭代，并发修改 `ActiveSession` 状态，引发流式消息损坏与消息重复。已关闭但数据中未体现关联 fix PR。
- [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) `Prefetch 异步回调不校验 turnToken` — `openclawRuntimeAdapter.ts:3809-3814` 的 prefetch 恢复时不校验 turn 归属，可能跨轮次污染。已关闭但数据中未体现关联 fix PR。

**低 — 构建与配置健壮性（仍开放）**
- [#1027](https://github.com/netease-youdao/LobsterAI/pull/1027)（OPEN）外部开发者因内网 registry 不可达，`npm install` / `npm run build` 卡死长达 5 分钟，即使插件已标记 `optional: true`。
- [#1029](https://github.com/netease-youdao/LobsterAI/pull/1029)（OPEN）`PLATFORM_TO_CHANNEL_MAP` 由 `Object.fromEntries` 自动反转，遇多对一映射（popo/moltbot-popo、wecom/wecom-openclaw-plugin）会产生错误结果。

**稳定性观察**：今日闭环的修复集中在网关层（#2698/#2695/#2694），与上述 IM 并发类 Bug 属不同子系统。安全类 Issue #1031 开放近半年且无 fix PR，是最应优先关注的稳定性/安全缺口。

---

## 6. 功能请求与路线图信号

- **定时任务失败告警**：PR [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078)（CLOSED，stale）指出 cron job 成功时经 `sendAsyncReply()` 投递 IM、失败时 `handleError()` 仅 reject 不通知，用户须主动打开页面才能发现失败。该不对称性属明确的产品缺口。
- **Cowork 「当前进程」面板**：PR [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079)（CLOSED，stale）新增右侧面板按轮次展示工具执行记录，Write/Edit 支持 diff 红绿高亮（基于 `diffLines`）。
- **Cowork 工作区能力集合**：PR [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696)（OPEN）包含轮次工作区审阅、内联问题栏、Tasks 面板，为今日唯一仍开放的功能型 PR，且已在下游 fork 验证。

**判断**：#2696 与 #1079 主题高度重合（均强化 Cowork 会话侧的工具执行可见性），路线图信号明确的下一版本候选是 **Cowork 会话可视化**；#1078 的 IM 失败告警属低成本高价值改进，但目前仍处 stale 关闭状态，纳入下一版本的前景不确定。

---

## 7. 用户反馈摘要

- **合规驱动的版本更新诉求**（#1082）：用户明确引用"国家互联网应急中心有要求更新到最新版本"，质疑 `package.json` 中 `openclaw.version: v2026.3.2` 是否支持最新 openclaw，认为存在风险。反映企业/合规场景用户对依赖版本滞后的敏感度高。
- **代码级竞态排查的开发者反馈**（#1088、#1089、#1026、#1031）：多条报告由同一批开发者（MaoQianTu、xiangliqu）提交，均定位到具体文件与行号（如 `openclawRuntimeAdapter.ts:3809-3814`、`src/main/main.ts`），并附带根因分析。说明存在具备源码阅读能力的技术型用户群，反馈质量高，但响应链条偏长（3 月底提交，9 月中才由 stale 流程处理）。
- **外部开发者环境痛点**（#1027）：内网 registry 在公网不可达导致构建卡死 5 分钟，直接影响外部贡献者的上手体验。
- 未发现明确的满意度表达或功能表扬类反馈；今日数据中缺乏正向情绪样本。

---

## 8. 待处理积压

以下条目均已带 `stale` 标记且长期未获实质性处理，建议维护者优先关注：

| 条目 | 类型 | 状态 | 风险 | 链接 |
|---|---|---|---|---|
| #1031 shell:openExternal 未校验 URL 协议 | 安全 Issue | OPEN | 高（任意协议调用） | [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) |
| #1026 v2Client null 导致 TypeError 崩溃 | Bug Issue | OPEN | 中（有 fix PR 未合并） | [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026) |
| #1028 guard v2Client null in sendTeamTextReply | Fix PR | OPEN | 中（对应 #1026） | [#1028](https://github.com/netease-youdao/LobsterAI/pull/1028) |
| #1027 跳过不可达 registry 的 optional 插件 | Fix PR | OPEN | 中（构建卡死 5 分钟） | [#1027](https://github.com/netease-youdao/LobsterAI/pull/1027) |
| #1029 显式定义 PLATFORM_TO_CHANNEL_MAP | Fix PR | OPEN | 中（多对一映射错误） | [#1029](https://github.com/netease-youdao/LobsterAI/pull/1029) |
| #2669 bump vite 5.4.21 → 8.3.0 | 依赖 PR | OPEN | 待评估（跨 3 个大版本） | [#2669](https://github.com/netease-youdao/LobsterAI/pull/2669) |

**特别提示**：
1. **#1031（安全类）自 2026-03-30 开放至今，无关联 fix PR**，在今日 5 条 Issue 中风险等级最高，建议脱离 stale 流程优先处理。
2. **#1028 是 #1026 的现成修复**，两者均处开放状态，可直接进入评审合并流程。
3. **#2669 vite 5.4.21 → 8.3.0** 由 dependabot 于 2026-09-14 提交、今日仍开放，跨三个主版本升级需评估破坏性变更。
4. 今日 5 条 Issue 与 12 条 stale PR 的集中关闭虽有助于清理看板，但其中包含尚未修复的安全与并发问题，建议在关闭前确认修复已落地或已转化为跟踪项。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-17

## 1. 今日速览

今日项目无新版本发布，活跃度集中于工程基础设施与沙箱能力：1 条新 Issue（Nix flake 构建失败）、4 条 PR 更新（3 条待合并、1 条已关闭）。Issues 与 PR 的讨论热度都很低，所有条目评论数均为 0 或未提供，说明当前处于"提交多、互动少"的维护节奏。一条长期挂起约 4.5 个月的 PR #926 于 9-16 被关闭，是本日唯一的合并/关闭动作。整体健康度中等：贡献者仍在稳定提交构建与 cron 修复类改动，但打包（Nix）与构建可复现性问题开始显现，需要维护者回应。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日无新合并的功能性 PR。唯一状态变更的是：

- **PR #926 [CLOSED]** `feat: add /btw, /fast, /insights, /steer, /queue commands and auxiliary model config`
  作者 penso，创建于 2026-04-29，2026-09-16 更新并关闭。
  链接: moltis-org/moltis PR #926
  该 PR 提出五个受 "Hermes Agent 功能分析" 启发的斜杠命令（`/btw` 临时侧问、`/fast`、`/insights`、`/steer`、`/queue`）以及辅助模型配置脚手架。数据未说明关闭原因（合并或拒绝均计为 CLOSED），也未提供合并记录，因此**不宜判定该功能已落地**。其价值更多是路线图信号（见第 6 节）。

其余 3 条 PR 仍处于待合并状态，项目今日净前进量有限——主要体现为修复与构建优化的推进，而非新功能交付。

## 4. 社区热点

今日所有 Issue/PR 的评论数均为 0 或 `undefined`，👍 均为 0，**无实质社区讨论热点**。相对而言，更新最密集、涉及面最广的是以下两条（仅代表工程重要性，不代表讨论热度）：

- PR #1272 `feat(sandbox): per-agent mounts, run_as and a forced sandbox`（Bergmann89，9-16 创建，9-17 更新）
  链接: moltis-org/moltis PR #1272
- PR #1270 `feat(build): cache cargo across image builds, and script building the image`（Bergmann89，9-15 创建，9-16 更新）
  链接: moltis-org/moltis PR #1270

**背后诉求判断**：两条 PR 同属构建/隔离基础设施，加上 Issue #1273 的构建失败报告，可看出维护者与贡献者当前的重心是"让 Moltis 可稳定自建、可安全隔离运行"，而非面向终端用户的功能扩张。

## 5. Bug 与稳定性

按严重程度排列：

- **高 · 发布产物不可构建（无 fix PR）**
  Issue #1273 [OPEN] `Nix flake cannot build the published tag: missing vendored-crate hashes and web assets`
  作者 flexiondotorg，创建/更新均为 2026-09-17，评论 0。
  链接: moltis-org/moltis Issue #1273
  报告 tag `20260913.02`（commit 6aa4881）的 `flake.nix` 中 `packages.default` 无法构建，存在两个独立缺口：`cargoLock.outputHashes` 仅固定了 `sqlx-core-0.8.6`，而 lock 中还 vendor 了以其他名称发布的 git crate；同时缺少 web 资源。**影响**：已发布 tag 对 Nix 用户不可用，属于发布通道级的可复现性缺陷。目前**未见对应 fix PR**。

- **中 · cron 活跃时间窗口默认值失效（已有 fix PR 待合并）**
  PR #1262 [OPEN] `fix(cron): treat active_hours end="24:00" as end-of-day`
  作者 atirna，创建于 2026-09-07，更新于 2026-09-17。
  链接: moltis-org/moltis PR #1262
  `is_within_active_hours` 在与自身 "24:00" 特例比较之前就先解析 `end`，而 chrono 的 `%H` 拒绝 24 点，导致文档给出的默认窗口（`start="08:00"`, `end="24:00"`）解析失败并触发 invalid-config 的失败策略。**影响**：使用默认配置的 cron 任务行为异常。该 PR 已存在，但**已挂起 10 天未合并**。

## 6. 功能请求与路线图信号

- **沙箱精细化隔离（较可能进入下一版本）**：PR #1272 为 agent preset 的 `[sandbox]` 块引入三个 per-agent 开关——`sandbox.mounts`（额外宿主机 bind mount）、`sandbox.run_as`（容器运行 uid:gid）、`sandbox.force`（强制该 agent 使用沙箱）。这是明确的多租户/多 agent 安全隔离诉求，且代码已提交、当日仍在更新，属活跃候选。
  链接: moltis-org/moltis PR #1272
- **构建性能与可脚本化（较可能进入下一版本）**：PR #1270 将 cargo target 目录与 crate registry 改为 BuildKit cache mount，使镜像重建只编译变更部分，并提供构建镜像的脚本。此前每次构建都重编整棵依赖树。
  链接: moltis-org/moltis PR #1270
- **命令与辅助模型体系（信号存疑）**：PR #926 的五个斜杠命令与 auxiliary model config 已随 PR 关闭，是否被采纳无数据支持，**不应据此推断已纳入路线图**。
  链接: moltis-org/moltis PR #926

## 7. 用户反馈摘要

今日 Issues/PR 评论数据均为 0 或缺失，**无可提炼的评论级反馈**。仅能从 Issue 正文提取一条报告者视角的痛点：

- 用户 flexiondotorg 的实际使用场景是**通过 Nix flake 消费已发布 tag**，期望 `packages.default` 开箱可构建；实际遇到的阻塞是 vendored git crate 的 outputHashes 缺失与 web 资源缺失。这反映出发布流程对 Nix 打包路径的校验不足，是"发布即损坏"类的体验问题。
  链接: moltis-org/moltis Issue #1273

## 8. 待处理积压

- **PR #1262**（atirna）：创建于 2026-09-07，已约 10 天未合并，且修复的是默认配置下的 cron 行为回归。建议优先 review。
  链接: moltis-org/moltis PR #1262
- **PR #1262 与 #1272、#1270 同属低互动状态**：4 条 PR 全部为 0 评论，维护者响应通道可能拥堵，建议明确 triage 节奏。

---

**数据说明**：本报告严格基于所提供的数据生成；所有评论数、关闭原因、合并状态均以原始数据为准，未提供的字段（如 PR 是否合并、关闭理由）未作推断。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-17

> 数据来源：GitHub `agentscope-ai/CoPaw`（Issues 与 PR 页面的 Issue 链接标注为 `agentscope-ai/QwenPaw`，以下按原文保留）。本日报仅基于提供的快照数据，不包含未列出的信息。

## 1. 今日速览

今日项目处于**高活跃状态**：过去 24 小时 Issues 更新 18 条（新开/活跃 17，关闭 1），PR 更新 43 条（待合并 24，已合并/关闭 19），但**无新版本发布**，改动主要停留在 PR 队列中。讨论集中在三条主线上：**Console 前端健壮性**（SSE 空 payload、懒加载 chunk 失败后无法恢复）、**上下文管理/记忆召回**（scroll 淘汰策略、auto-memory-recall 泄漏）、以及 **MCP / 通道集成**（OAuth token 刷新、DashScope streamable_http、飞书 p2p 发送失败）。今日关闭的 PR 中包含 Hub 模型网关与成员治理（#7779）等重量级功能，说明平台侧能力正在落地；同时多条针对具体 Issue 的 fix PR（#7832、#7834、#7835）当日即被提交，响应速度良好。

## 2. 版本发布

今日无新版本发布（最新 Releases：无）。相关版本背景信息散见于 Issue 报告：用户侧主要运行在 **2.2.0 / 2.2.1**，另有 `main` 分支（MCP Driver 重构后）被用于问题复现。

## 3. 项目进展

今日已合并/关闭的 PR 共 19 条（仅列出数据中给出摘要者）：

- **#7779 [CLOSED] feat(hub): add model gateway, member governance and usage dashboard** — Hub 现可作为组织级模型网关：管理员发布模型并将供应商密钥保存在 Hub 保险库，成员在既有 provider 页面选择 Hub 模型，无需接触密钥。这是平台商业化/团队治理方向的关键一步。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7779)
- **#7802 [CLOSED] feat(telemetry): report daily Runtime activity on Agent execution** — 当内置 Agent 或外部 harness（含定时任务）执行时记录每日一次 Runtime 活跃事件；启动、页面访问、不触发 Agent 执行的命令不计入。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7802)
- **#7751 [CLOSED] fix(docker): align app Python runtime with desktop** — Docker 应用 venv 改用与桌面端一致的固定 Python 3.11 standalone 运行时，替代基于 Debian OpenSSL 3.0 的 Python，保留 Debian Python、Supervisor、系统库与入口点。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7751)
- **#7808 [CLOSED] refactor(loop): pass DoomLoopStageConfig objects from catalog factory** — 将已校验的 stages 交接下沉到 gate catalog 工厂，避免把 `DoomLoopGate` 拓宽为同时接受 dict 与对象；首次贡献者提交。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7808)

**待合并队列（24 条）中包含多个关键改动**，若合入将显著推进功能面：

- **#7785 feat(voice): add realtime voice chat** — 在现有 Chat UI 中加入可配置的 Realtime Voice 对话（语音输入、播放、打断、模型选择），并将语音转交普通 Chat 执行路径以复用历史、工具与长任务能力。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7785)
- **#7833 fix(hub): isolate local Python, authenticate PawApps and preserve model defaults** — 承接 #7779 的修复：本地 runtime 使用每用户持久化 Python 环境、PawApp 浏览器访问鉴权、模型默认值保留。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7833)
- **#7565 feat(plugins): add clean unload and rollback-safe hot reload** — 插件安装/更新/卸载不再重建所有 live workspace，更新失败不会停留在半应用状态。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7565)
- **#7685 feat(feishu): collapsible reasoning panel with opt-in auto-collapse** — 解决飞书端长思考链把最终答案挤到会话底部的问题。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7685)
- **#7829 perf(console): split chat dependencies and lazy-load locales** — 登录页不再下载 chat 渲染依赖与全部 7 种语言的 locale JSON，改善首屏加载。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7829)

整体判断：项目在**平台能力（Hub 治理、插件生命周期、语音）**与**稳定性修复**上并行推进，今日进展主要体现为"关键 PR 到位、等待合入"，而非用户可见的版本交付。

## 4. 社区热点

评论数最高的 Issues：

- **#7678 [OPEN] [bug] spawn subAgent 全部任务失败** — 10 条评论，今日讨论最热。作者 xiaohushi512 报告 win2.2.0 下 spawn subAgent 无一执行成功，全部 timeout，且延长 timeout 无效。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7678)
- **#6318 [OPEN] [Feature]: 支持按 conversation 级别指定模型** — 7 条评论，创建于 2026-07-21，长期活跃。诉求为 agent 设默认模型、新建对话继承，但允许单个对话手动指定不同模型。[链接](https://github.com/agentscope-ai/QwenPaw/issues/6318)
- **#7815 [OPEN] Console 懒加载 chunk 失败后无法恢复** — 4 条评论。页面加载失败后每次导航都停留在错误页，必须整页刷新，且已有重试机制未能生效。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7815)
- **#7810 [CLOSED] [question] 上下文管理与最大上下文输入限制设置** — 3 条评论，已关闭。用户设置 131k 上限却每次提交飙到 271k，压缩不触发。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7810)
- **#7814 [OPEN] Console SSE 健壮性缺陷** — 3 条评论。`_strip_event_headlines` 可序列化出裸 `null` payload；`stream_one` 失败时不发送终止事件。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7814)

**诉求分析**：热点呈现两个明显集群——(1) **长任务与上下文失效**（#7678、#7810、#7733），用户对"设置不生效"和"任务静默失败"容忍度低；(2) **Console 前端容错**（#7815、#7813、#7814，均由同一作者 wjt0321 提出），指向 SSE 与懒加载两条路径缺乏错误恢复语义。值得注意的是，当日已有 #7832（对应 #7810）、#7834、#7835 等 fix PR 被提交，说明热点问题正被快速承接。

## 5. Bug 与稳定性

按严重影响度排序：

**严重（任务无法完成 / 数据可见性丢失）**

- **#7678 spawn subAgent 全部超时失败**（win2.2.0）— 无 fix PR。核心 agent 能力不可用。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7678)
- **#7836 scroll 淘汰丢弃 tool-heavy span 中的用户轮次** — 活跃窗口丢失用户请求而 history.db 仍保留，2.2.x 默认 `strategy=scroll`。无 fix PR。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7836)
- **#7839 session-sync 跳过 86 个孤儿 session 文件未导入，且 retention purge 报 "database disk image is malformed"** — 涉及历史导入缺失与数据库损坏，2.2.x。无 fix PR。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7839)
- **#7818 UI 经常卡死且内存占用特别高** — 2 条评论，附带截图，无 fix PR。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7818)

**中高（功能不可用 / 集成阻断）**

- **#7827 `server/discover` 返回裸 HTTP 500 未被判定为旧协议证据** — DashScope 千问 MCP 商店的 streamable_http 驱动卡永远无法激活，Console 本地报 503；影响 2.2.0/2.2.1。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7827)
- **#7821 MCP driver 丢弃刷新后的 OAuth access_token** — `_guarded_execute` 每次调用都重新 resolve 凭据，但 live client 仍持有连接时的 Authorization。针对当前 `main`。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7821)
- **#7817 飞书/Lark p2p 发消息返回 230101，且文件事件缺失** — Docker 部署自建机器人场景。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7817)
- **#7813 SSE frame payload 为裸 `null` 时 Console 流冻结** — 单个畸形帧即导致整个流式回合失败。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7813)
- **#7814 SSE `_strip_event_headlines` 可产生裸 null payload；`stream_one` 失败时无终止事件** — 与 #7813 同源。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7814)
- **#7815 懒加载页面 chunk 加载失败后 Console 无法恢复** — 已有重试机制但未覆盖该路径。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7815)

**中等**

- **#7812 桌面端启动后立即输入 slash command 作用于 fallback session**（`/compact` 报空内存），2.2.1 Tauri 官方构建。已有对应方向的 PR **#7834**（在当前 chat 上发送 /compact 而非新开会话）。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7812) · [PR](https://github.com/agentscope-ai/QwenPaw/pull/7834)
- **#7838 无 sandbox（kernel < 5.13，无 Landlock）时 `recall_history_python` 静默未注册** — kernel 5.10 环境仅注册结构化 `recall_history` 工具，用户无感知降级。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7838)
- **#7837 `history.db` 中 user 行无 headline** — 观测到单 session 220/220 条 user 行 `headline=None`，导致 scroll 淘汰索引需调用模型为用户专属片段打标。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7837)

**已有明确 fix PR 的稳定性问题**（当日提交）：

- **#7835 fix(memory): stop leaking auto-memory-recall payload to channels** — auto-memory-recall 注入的合成 "I will use the memory_search tool…" 追踪以 `ToolCallBlock` + `ToolResultBlock` 形式实现，被 console 前端当作真实内容展示。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7835)
- **#7832 fix(providers): make the context-window override explicit** — 直接对应 #7810：设置对话框渲染的是原始 `max_input_length`（默认 131072），而运行时通过其他字段解析窗口，导致设置不生效。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7832)
- **#7825 fix(crons): expand numeric DOW steps/ranges to crontab weekday names** — APScheduler 的 `CronTrigger` 使用 ISO 星期（0=Mon）而 crontab 使用 0=Sun，此前 `_crontab_dow_to_name` 就地重写导致 `*/2` 落在 Mon/Wed/Fri/Sun 而非 Sun/Tue/Thu/Sat。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7825)
- **#7831 fix(console): stream background tool output on demand** — 仅在该工具行展开时打开输出流并在折叠时中止，保留取消、会话清理与瞬态错误处理。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7831)
- **#7760 fix(cli): allow memory jobs to drain on shutdown** — 可移植性导入静默后立即停止 workspace，避免 ReMe 记忆排空被无关清理拖延；早停路径给予 12 秒进程宽限期。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7760)

**健康度观察**：今日 18 条 Issue 中约 12 条为 bug 报告，且高度集中在 Console 前端与上下文/记忆两层；好消息是其中 4 条在报告当日或次日即出现对应 fix PR，说明维护者对高频问题域已有针对性响应。但 #7678、#7836、#7839 三条高严重度问题尚无 fix PR，需重点跟进。

## 6. 功能请求与路线图信号

- **#6318 按 conversation 级别指定模型**（7 条评论，已开 2 个月）— 诉求明确：agent 设默认、对话可覆盖。该需求与 Hub 模型网关（#7779 已关闭）在"多模型选择"方向上同源，具备纳入后续版本的基础。[链接](https://github.com/agentscope-ai/QwenPaw/issues/6318)
- **#7733 Agent 自主上下文管理——跨上下文淘汰的平滑交接** — 当前淘汰仅由纯 token 阈值触发，唯一知道"哪部分工作仍然有效"的 agent 既无决定权也无预警。与今日多条 scroll 相关 bug（#7836、#7837）指向同一层，属于架构级信号。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7733)
- **#7830 /os 桌面模式下注册自己应用** — 建议开放 `/os` 桌面模式接口与接口标准，允许注册自定义应用，配截图说明。与 Hub PawApp 方向（#7833 正在处理 PawApp 鉴权）呼应。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7830)
- **#7809 Tool approval cards & notifications 硬编码英文，需 i18n** — Tool Guard 拦截高风险调用（如匹配 `rm`/`del`/`mv` 规则的 `execute_shell_command`）时推送的审批卡及配套通知文案全为英文。与 #7829（locale 懒加载）同属国际化议题。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7809)

**可能进入下一版本的判断**：与已有 PR 直接挂钩的需求最可能落地——#7810/#7812 类问题已有 #7832、#7834；飞书体验改进已有 #7685 待合并；插件生命周期与语音能力（#7565、#7785）若通过评审将构成一次明显的功能版本增量。而 #6318、#7733、#7830 属于跨模块设计变更，短期内更可能停留在讨论与方案阶段。

## 7. 用户反馈摘要

**核心痛点**

- **"设置不生效"的挫败感最强**：#7810 用户明确表示无论在大模型里设置 131k 上限、还是 0.5 阈值压缩，提交两次即飙到 271k，压缩不触发；并且"我问了 QwenPaw 机器人，也问 AI 了，都没有解决"——反映自助排查路径失效带来的体验损伤。
- **平台差异导致的问题认知困难**：#7678 用户自述"技术我不懂，结果你们看看"，并附上与 AI 的调试过程（查 session_id、拉取 15:11:48 附近的 subAgent 调用记录），说明长任务失败时缺乏可读的错误归因。
- **网络中断与上下文压缩耦合**：#7810 提到"经常性网络中断，导致没有上下文压缩选项"，暗示弱网环境下的降级行为不清晰。

**使用场景**

- Windows 桌面端（win2.2.0 / win10desktop 2.2.1、Tauri 官方构建）为主要报告环境之一，另有 pip 安装的 Linux x86_64、kernel 5.10 与 5.13+ 差异场景。
- Docker 部署 + 飞书自建机器人（`agentscope/qwenpaw:latest`）是重要的企业集成路径（#7817）。
- 长工具密集型任务（重复文件读取、diff、日志转储）是用户实际负载特征（#7836）。
- MCP 生态接入真实第三方服务：阿里云 DashScope / 千问 AI 平台 MCP 商店（One Key MCP）的 streamable_http 托管服务（#7827）。

**满意/不满意**

- 不满意集中于：任务静默失败或超时（#7678）、UI 卡死与高内存（#7818）、历史数据未导入与数据库损坏（#7839）、MCP 驱动卡无法激活（#7827）。
- 未见明确的正面反馈条目出现在本次数据中；用户普遍以详细日志与复现步骤配合报告（如 #7839 附启动日志、#7837 给出行级统计 220/220），社区报告质量较高，这是维护者可用的正向资产。

## 8. 待处理积压

需维护者重点关注：

- **#6318 [OPEN] 按 conversation 指定模型** — 创建于 **2026-07-21**，已近两个月，7 条评论，今日仍有更新但无明确结论或关联 PR。属于长期高关注需求。[链接](https://github.com/agentscope-ai/QwenPaw/issues/6318)
- **#7678 [OPEN] spawn subAgent 全部超时失败** — 创建于 2026-09-11，10 条评论为今日最高，影响核心执行能力，至今无 fix PR。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7678)
- **#7565 [OPEN] plugins clean unload 与 rollback-safe 热重载** — PR 创建于 **2026-09-04**，已停留约两周仍在待合并队列，影响插件安装/更新的可靠性。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7565)
- **#7685 [OPEN] 飞书可折叠 reasoning 面板** — PR 创建于 2026-09-11，与今日 #7817 的飞书通道问题同域，可合并考虑以一次性改善飞书体验。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7685)
- **#7760 [OPEN] CLI 关闭时允许 memory jobs 排空** — PR 创建于 2026-09-14，涉及关闭时序与 Windows 桌面后端启动，属于易被忽略但影响数据完整性的路径。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7760)
- **#7785 [OPEN] 实时语音对话** — PR 创建于 2026-09-15，功能面较大（语音输入、播放、打断、模型选择、交接至普通 Chat 路径），评审周期预计较长，建议明确排期以免长期悬置。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7785)
- **#7733 [OPEN] Agent 自主上下文管理** — 创建于 2026-09-13，2 条评论，涉及上下文淘汰机制的设计层讨论，与今日多条 scroll bug 相关，值得在架构层面统一回应。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7733)

**积压特征**：待合并 PR 达 24 条，其中 #7565、#7685、#7760 均已挂起 3 天至 2 周不等；问题侧 #6318 与 #7678 分别代表"长期需求"与"高热度阻塞"，建议优先给出明确的状态回复或路线图归属。

---

*本日报基于 2026-09-17 的 GitHub 快照数据生成；PR 评论数在提供的数据中为 `undefined`，因此热点排序以 Issues 评论数为准。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-17

## 1. 今日速览

过去 24 小时 ZeroClaw 维持高强度活跃：50 条 Issue 更新（47 条新开/活跃、3 条关闭）、50 条 PR 更新（47 条待合并、3 条已合并/关闭），无新版本发布。当日新增 Bug 集中爆发于 2026-09-17，涉及通道语音路由、WhatsApp TTS、流式文本守卫与图像标记处理，显示多模态与通道路由是当前最不稳定的区域。积压侧仍以高风险安全与架构类 PR 为主，多条 XL 级改动（如配置原子修订、well-known 技能安装）长期挂起等待评审。整体看项目迭代速度极快，但待合并 PR 与高优先级 Bug 同步累积，评审吞吐是当前健康度的主要瓶颈。

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

## 3. 项目进展

今日合并/关闭的动态有限，可确认的关闭项为：

- Issue #10883 [CLOSED] Telegram media-group 监听器测试在并行运行时任务下超时（被标记为 duplicate，与本日仍在推进的 #10875 同源）。
- 当日共有 3 条 Issue 关闭、3 条 PR 合并/关闭，但数据中未提供已合并 PR 的具体清单，故不逐一列举。

需注意：下列 PR 仍处于 OPEN 状态，**并非今日已合并**，仅代表推进方向——#10911（配置原子实时修订）、#10944（从固定 well-known 发现索引安装技能）、#10938（显式声明工具附件，替代扫描工具文本中的图像标记）。这些是当日更新最集中、体量最大（多为 size:XL）的改动，代表项目正沿"配置一致性、技能生态接入、多模态附件治理"三条主线推进。

## 4. 社区热点

按评论数排序的高活跃条目：

1. **Issue #4853**（7 评论，自 2026-03-27 挂起至今）— 从 `.well-known` agent-skills 发现索引安装技能，标注 status:parking-lot、risk:high。
   https://github.com/zeroclaw-labs/zeroclaw/issues/4853
2. **Issue #9511**（4 评论）— 将 diff-aware Semgrep 结果作为 PR 咨询性评论展示，而非仅上传 SARIF。
   https://github.com/zeroclaw-labs/zeroclaw/issues/9511
3. **Issue #5269**（4 评论，good first issue）— 校验并文档化 `nix run` 安装路径，反映首次使用体验诉求。
   https://github.com/zeroclaw-labs/zeroclaw/issues/5269
4. **Issue #10408**（4 评论，priority:p1、status:in-progress）— 活跃回合中收到第二条消息会在同一会话启动并行运行，产生重复工作和重复回复。
   https://github.com/zeroclaw-labs/zeroclaw/issues/10408
5. **Issue #9972**（4 评论，type:tracker）— 清理绕过本地化边界的用户可见字面输出。
   https://github.com/zeroclaw-labs/zeroclaw/issues/9972

**诉求分析**：热点呈现两条脉络。其一是"生态与规范对接"——#4853 与对应 PR #10944 表明社区希望技能分发走标准化 `.well-known` 发现机制；其二是"运维可控性"——#9511、#5269、#9972 均指向 CI 可见性、安装可复现性与输出规范化，即工程体验而非功能炫技。会话并发问题 #10408 是唯一直接影响用户正确性感知的高优先级热点。

## 5. Bug 与稳定性

按严重程度排列（今日活跃/新增）：

**S1 - 工作流阻塞**
- Issue #10875 [OPEN, p1] Telegram media-group 测试在无关 PR 上间歇性失败，自 cbd1b0adce（#8955，2026-09-11 合并）起引入。已有对应关闭重复项 #10883，**尚无明显独立 fix PR**。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10875
- Issue #10854 [OPEN, p1] 工具输出中的字面图像标记被提升为畸形的 provider 图像。对应修复方向见 PR #10938（显式声明工具附件），**fix PR 已存在但未合并**。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10854

**S2 - 功能退化（均有对应 PR 或在推进中）**
- Issue #10912 [OPEN, p1] 流式文本守卫在普通文本引用形似工具结果的对象时压制整条回复，重试三次后报通用格式错误。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10912
- Issue #10408 [OPEN, p1] 同一会话活跃回合中并发运行导致重复回复（status:in-progress）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10408
- Issue #10908 [OPEN, p1, status:blocked] 工具结果文本中的图像标记无溯源地被提升为附件。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10908
- Issue #10924 [OPEN, p2] 运行时命令回复进入对话式语音路由（今日新开）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10924
- Issue #10922 [OPEN, p2] WhatsApp Web 在排队自动 TTS 时忽略 `suppress_voice`（今日新开）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10922
- Issue #10889 [OPEN, p2] Anthropic provider 在最后一条消息以图像块结尾时丢失滚动缓存断点。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10889
- Issue #9708、#9332 分别为守护进程日志无界、图像感知预算失真，均在 in-progress。

**S3 - 次要问题**
- Issue #10805 [OPEN, p2] control_plane 存活测试在 Windows 上竞争进程销毁（非必需检查项）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10805

**稳定性判断**：图像标记溯源问题（#10854、#10908、#10912）构成同一类根因的簇状爆发，PR #10938 正是系统性修复，若今日合并将显著降低该区域风险等级。

## 6. 功能请求与路线图信号

- **技能发现标准化**：Issue #4853 + PR #10944（install from pinned well-known discovery indexes，2026-09-17 新建）。二者同日更新，且 PR 要求显式指定技能名以避免全量安装，设计已趋于收敛，**纳入下一版本可能性高**。
- **原子化配置修订**：PR #10911（publish atomic live revisions，size:XL，依赖 #10621），触及 core/config/runtime 全线，属基础设施级改动。
- **新通道扩展**：PR #10768 新增 Sendblue iMessage/SMS 通道（托管式中继，区别于仅 macOS 的 AppleScript 桥），标注 status:parking-lot、risk:high。
- **SOP 能力补全**：PR #10233 增加冲突检查的原子 SOP 重命名流程；Issue #10759 要求 `sops/run-detail` 响应补充 `failure_reason`。
- **安全与权限收口**：PR #10308 将 `<install>/shared/` 读取置于按 agent 的 `can_use_shared_workspace` 默认拒绝标志之后；PR #9584 将出网授权仪式加入插件安装与列表。
- **Web 研究委托**：PR #9833 新增 `web_research` 委托工具，将原始 `web_search` 限定于有界子代理循环（最多 8 次工具调用、180 秒）。
- **cron 模块化**：Issue #10546 将 cron 从 `zeroclaw-runtime` 抽离为独立 `zeroclaw-cron` crate。

## 7. 用户反馈摘要

- **首次使用体验受损**：Issue #5269 作者 izelnakri 直言遇到"严重的 UX/DX 问题"，检索现有 Issue 未发现同类报告，指向 `nix run` 安装路径缺乏校验与文档。
- **正确性与信任问题**：Issue #10408 用户 volodkindv 报告活跃回合中的第二条消息触发同会话并行运行，造成重复工作与重复回复——这是用户可直接感知的语义错误，而非内部质量问题。
- **静默降级困扰**：多条 S2 报告（#10912 整条回复被压制、#10922 忽略 `suppress_voice`、#10908 字面文本被剥离或附加）显示用户面对的是"行为不符合预期但无明确报错"的模糊失败，诊断成本高。
- **平台一致性诉求**：Issue #10805 的 Windows 测试竞态、#10922 的 WhatsApp Web 特有路径，反映跨平台行为对齐仍有缺口。

## 8. 待处理积压

长期未响应且重要度高（按创建时间排序）：

1. **Issue #4853**（创建 2026-03-27，约 5.7 个月，7 评论，status:parking-lot、risk:high）— well-known 技能发现。虽已有 PR #10944 承接，但 Issue 本体仍在停车区。
   https://github.com/zeroclaw-labs/zeroclaw/issues/4853
2. **Issue #5269**（创建 2026-04-04，约 5.4 个月）— nix run 安装路径校验与文档，标注 good first issue 却长期未推进。
   https://github.com/zeroclaw-labs/zeroclaw/issues/5269
3. **PR #9584**（创建 2026-07-31，约 1.6 个月，size:XL、distinguished contributor）— 插件安装与列表的出网授权仪式，未见合并。
   https://github.com/zeroclaw-labs/zeroclaw/pull/9584
4. **PR #9833**（创建 2026-08-07，needs-author-action）— `web_research` 委托工具与 `web_search` 收窄。
   https://github.com/zeroclaw-labs/zeroclaw/pull/9833
5. **PR #9977**（创建 2026-08-13，needs-maintainer-review、risk:high）— 将文件系统写入限制在工作区内。
   https://github.com/zeroclaw-labs/zeroclaw/pull/9977
6. **PR #10197**（创建 2026-08-20，needs-maintainer-review、risk:manual、size:XL）— ACP 中断回合进度持久化。
   https://github.com/zeroclaw-labs/zeroclaw/pull/10197

**提醒**：多条高风险 PR 同时处于 `needs-maintainer-review` 或 `needs-author-action`，且当日 47 条 PR 待合并、仅 3 条被处理，评审带宽与提交速度明显失衡，建议优先分流带 `domain:security` 标签的积压项。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*