# OpenClaw 生态日报 2026-11-14

> Issues: 428 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-14 16:37 UTC

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

# OpenClaw 项目动态日报（2026-11-14）

> 数据来源：openclaw/openclaw GitHub 仓库过去 24 小时数据。本期无新版本发布。

---

## 1. 今日速览

过去 24 小时项目维持高活跃度：Issues 更新 428 条（新开/活跃 334，关闭 94），PR 更新 500 条（待合并 320，已合并/关闭 180），但**无新版本发布**。Issue 关闭率约 22%，PR 合并/关闭率约 36%，待合并 PR 积压（320 条）明显高于合入速度。讨论集中在会话/子代理状态一致性、消息投递可靠性、更新与安装修复流程三大主题。多个 P0/P1 级回归问题（如 #194664、#191847、#155119）仍在开放状态，稳定性风险仍需关注。

---

## 2. 版本发布

本期无新版本发布。

---

## 3. 项目进展

今日合并/关闭 180 条 PR，以下为已关闭的代表性变更（依据可见摘要）：

- **#198975 [CLOSED]** `fix(models)`：`--agent` 空值守卫在路由快速路径上暴露具体补救提示，改善 CLI 报错可用性。链接: openclaw/openclaw PR #198975
- **#198965 [CLOSED]** `fix(cli)`：`--account`/`--channel` 空值场景在两条路径上均输出明确原因，而非仅打印通用失败。链接: openclaw/openclaw PR #198965
- **#198883 [CLOSED]** `perf(ci)`：SDK 缓存发布避免重复读取已校验输出，无用户可见变化。链接: openclaw/openclaw PR #198883
- **#198989 [CLOSED]** `improve(ci)`：macOS 发布编译与 Linux 验证并行，缩短非发布手动验证耗时。链接: openclaw/openclaw PR #198989
- **#198990 [CLOSED]** `improve(ci)`：全发布部署测试复用生产 UI 构建产物，不再重建 Control UI。链接: openclaw/openclaw PR #198990

总体看，今日合入以 **CI 效率、CLI 报错质量**为主，属渐进式改善，未见大型功能落地。同时有较高价值 PR 仍待合并（见第 6 节），项目前进幅度中等。

---

## 4. 社区热点

| Issue/PR | 状态 | 评论 | 核心诉求 |
|---|---|---|---|
| [#172837](openclaw/openclaw Issue #172837) Codex 原生子代理分配在完成投递放弃后从不移除 | OPEN | 20 | 父线程反复重钉、重发子代理，造成状态膨胀与重复投递 |
| [#44309](openclaw/openclaw Issue #44309) A2A 单向派发模式 | CLOSED | 18 | 希望 `sessions_send` 支持只投递不回传，避免乒乓往返 |
| [#143017](openclaw/openclaw Issue #143017) 持久会话前缀重写导致缓存失效（实测 21.3M 缓存写 token） | OPEN | 16 | 真实的成本浪费，附线上流量数据 |
| [#162585](openclaw/openclaw Issue #162585) Windows 插件暂存自我复制不收敛 | OPEN | 16 | 290MB → 612MB+/24 分钟，网关无法就绪 |

讨论共性：**会话/子代理生命周期与状态清理**、**成本可观测性**、**平台（Windows/macOS）特定运行问题**。用户普遍具备较强复现能力（附 wire capture、VACUUM INTO 导出），反映社区技术深度高，但也说明这些问题已长期影响生产使用。

---

## 5. Bug 与稳定性

按严重程度排列（均标注是否已有 fix PR，依据可见标签）：

**P0 / 发布阻断**
- **#194664 [P0, ux-release-blocker]** Codex 受保护续写阻塞后续对话，Stop 却报告无活跃运行（2026.11.1）。链接: openclaw/openclaw Issue #194664 — 未见 fix PR。

**P1**
- **#191847 [P1, regression, crash-loop]** 大会话反复触发 512MB SQLite worker OOM（ERR_WORKER_OUT_OF_MEMORY），升级自 2026.9.7 → 2026.10.10 后出现，该会话每轮均失败。链接: openclaw/openclaw Issue #191847 — 未见 fix PR。
- **#155119 [P1]** 子代理完成答案丢失（truncated-by-retention）、重复 settle 事件、`deliveryStatus` 卡在 pending。链接: openclaw/openclaw Issue #155119 — 未见 fix PR。
- **#128140 [P1]** `memory_search` 工具恒定 15s 超时，而 CLI `openclaw memory search` 正常。链接: openclaw/openclaw Issue #128140 — 未见 fix PR。

**P2（回归/状态/消息丢失）**
- **#162585** Windows 插件暂存自我复制不收敛（见上）。未见 fix PR。
- **#160494** 绑定持久会话的 cron 在会话轮换时被准入拒绝，重试反复进入同一拒绝。未见 fix PR。
- **#158817** Windows `openclaw.cmd` shim 截断多行 CLI 参数首个换行后内容。未见 fix PR。
- **#130257** 委托 ACP 运行未记录 token/成本（parent $0.04 vs child $14.14），成本不可归因。未见 fix PR。
- **#197083** 升级 2026.11.1→2026.11.3 后 Doctor WAL 发布校验失败，更新半完成且拒绝回滚。未见 fix PR。
- **#178373** Agent 循环缺少运行级 turn/token 预算，工具循环检测默认关闭，历史每轮重复计费。未见 fix PR。
- **#167622** 受限原生 Codex 下 `config get` 在只读 SQLite worker 报 spawnSync EPERM。未见 fix PR。

**已关闭（本期）**
- #142037 [CLOSED]、#160719 相关讨论等已进入关闭流程；#102961 [CLOSED] 指出 `after_tool_call` 钩子接收扁平化字符串而非结构化 ToolResult，插件无法检测 exec/bash 失败。

整体判断：**稳定性健康度偏低**——P0/P1 问题均无可见 fix PR，且多条涉及消息丢失与成本失控，建议维护者优先排期。

---

## 6. 功能请求与路线图信号

- **#197704 [OPEN] feat(cron): 持久化每任务 Access 选择**（size XL，标注 compatibility / auth-provider 风险）——与已关闭的 #192009（跨供应商 cron 回退账户显式授权）诉求呼应，cron 与账户/供应商绑定仍是路线图重点。链接: openclaw/openclaw PR #197704
- **#199014 [OPEN] feat(clawrouter): Google 语音生成** —— 补齐语音合成路由能力。链接: openclaw/openclaw PR #199014
- **#193222 / #193369 [OPEN]** 通过 CLI 列出/读取会话工作区文件与产物，解决无头主机运维痛点。链接: openclaw/openclaw PR #193222、openclaw/openclaw PR #193369
- **#166678** 从代理选择器隐藏但仍可生成代理；**#137110** Telegram sendDice；**#136271** Teams 动态解析 SharePoint 站点——社区体验类需求，尚在产品决策阶段。

结合 PR 进展，**cron 持久化配置**与**CLI 运维能力**最可能进入下一版本。

---

## 7. 用户反馈摘要

- **痛点是可观测性的具体缺失**：多条 Issue 强调错误信息无区分度（#127195 十六处调用点输出字节相同的 "changed while starting work"，无 reason code），运维无法定位根因。
- **成本焦虑真实**：#143017 用 949 条线上捕获量化缓存写浪费；#130257 展示父子成本 350 倍差异不可归因。
- **平台差异化问题集中**：Windows（#162585、#158817）、macOS（#192667 深色主题输入框不可见、#197531 TTS 截断）、Linux/ARM 容器（#130247、#130257）。
- **正面信号**：CLI 侧 `memory search` 正常可用（#128140），说明核心能力存在、问题是工具封装层超时；社区复现质量高，维护者可与用户协作定位。

---

## 8. 待处理积压

以下为创建时间较早、仍开放、评论活跃但无 fix PR 的条目，建议维护者优先关注：

- **#114913**（2026-07-28 创建，10 评论，P2）memory search 主嵌入需在工具deadline前设界并回退 FTS。链接: openclaw/openclaw Issue #114913
- **#103067**（2026-07-09 创建，9 评论）集中化聊天会话命名，定义子代理会话生命周期与跨渠道持久化。链接: openclaw/openclaw Issue #103067
- **#124306**（2026-08-15 创建，10 评论，data-loss）执行审批卡从未提示目标为挂载点。链接: openclaw/openclaw Issue #124306
- **#127195**（2026-08-21 创建，11 评论，diamond lobster）十六处调用点相同错误无 reason code。链接: openclaw/openclaw Issue #127195

**PR 积压提示**：待合并 PR 达 320 条，其中 #198739（size XL）CI 结果为 FAILURE（45 成功/2 失败/27 跳过），#197704、#198934 标注兼容性与安全边界合并风险，建议维护者分批复核以避免长期停滞。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-11-14）

## 1. 生态全景

个人 AI 助手/自主智能体开源生态呈现"一超多强、梯度分明"格局：OpenClaw 以单日 428 条 Issue + 500 条 PR 的吞吐量稳居核心参照位，其余项目活跃度相差一到两个数量级。整体生态已从"功能竞赛"转入"可靠性与成本治理"阶段——本期几乎所有活跃项目的高优先级问题都集中在会话状态一致性、消息投递可靠性、升级破坏性副作用与 token 成本失控，而非新功能缺失。同时，多项目（Hermes Agent、ZeroClaw、PicoClaw、NanoBot）出现"提供商/插件目录扩张"这一相同的社区贡献路径。值得警惕的是，多个项目的待合并 PR 队列远高于合并速度（OpenClaw 320 待合并、Hermes 42 待合并对 8 处理、ZeroClaw 50 待合并对 0 合流），评审吞吐正成为生态共同瓶颈。样本中 IronClaw、TinyClaw、Moltis、ZeptoClaw 四个项目当日零活动，说明该赛道项目分层剧烈、长尾项目维护不稳定。

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃·关闭） | PR（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 334 活跃 · 94 关闭（共 428） | 320 待合并 · 180 合并/关闭（共 500） | 无 | 高活跃、积压严重；P0/P1 均无可见 fix PR，稳定性健康度偏低 |
| **NanoBot** | 2 活跃 · 1 关闭（共 3） | 2 待合并 · 29 合并/关闭（共 31） | 无 | 良好；清理效率极高，含 1 条破坏性配置变更需关注 |
| **Hermes Agent** | 41 活跃 · 9 关闭（共 50） | 42 待合并 · 8 合并/关闭（共 50） | canary v0.23.1 | 活跃但积压上升；安全加固 PR 集中待审，含 1 条 HOLD |
| **PicoClaw** | 2 活跃 · 0 关闭 | 1 待合并 · 5 合并/关闭（共 6） | 无 | 中等偏低；以清理 3–8 月历史积压为主 |
| **NanoClaw** | 0（无新 Issue） | 14 待合并 · 11 合并/关闭（共 25） | 无（beta.3 PR 未合并） | 中高；PR 深度迭代为主，单作者评审集中 |
| **NullClaw** | 0 | 1 待合并 · 0 合并/关闭 | 无 | 低；维护吞吐为零，需观察是否长期降温 |
| **LobsterAI** | 0 | 3 待合并 · 2 合并/关闭（共 5） | 无 | 低-中等；含 1 条数据丢失修复已闭环，评审通道是短板 |
| **CoPaw** | 10 活跃 · 1 关闭（共 11） | 16 待合并 · 1 合并/关闭（共 17） | 无 | 高活跃、合并吞吐偏低；Issue→fix PR 当日闭环速度好（4 组配对） |
| **ZeroClaw** | 10 全部 OPEN | 50 待合并 · 0 合并/关闭 | 无 | 高活跃、零合流；依赖链阻塞，含 2 条 S1 未解 |
| **IronClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | 过去 24 小时无活动 |

> 注：NanoBot、NanoClaw、LobsterAI 的 PR 评论数在原始材料中为 `undefined`，无法量化讨论热度；NanoClaw 数据源域名显示为 `nanocoai/nanoclaw`，与任务给定仓库路径不一致，需核验归属。

## 3. OpenClaw 在生态中的定位

- **社区规模断层领先**：单日 428 条 Issue 更新、500 条 PR 更新，是第二名 Hermes Agent（各 50 条）的近 9–10 倍，量级上与其余项目不在同一梯队。用户复现质量极高（附 wire capture、VACUUM INTO 导出、21.3M token 缓存写的线上流量实测），表明其用户群技术深度突出。
- **技术路线差异**：OpenClaw 采用"多插件 + 多会话表面 + 子代理编排"的重型架构，问题面也相应最广——会话/子代理生命周期、消息投递、成本可观测性、跨平台（Windows/macOS/Linux-ARM）运行问题同时并发，且多条 P0/P1 涉及消息丢失与成本失控（如父子成本 350 倍差异不可归因 #130257、缓存写浪费 #143017）。
- **相对优势**：核心能力完备（CLI `memory search` 正常，#128140 的问题仅在工具封装层超时）；生态被下游项目作为集成对象——LobsterAI 直接以版本化补丁链（v2026.8.1）维护 OpenClaw 集成，说明其已成为事实上的被集成基座。
- **相对劣势**：稳定性健康度是当前最大短板，P0（#194664）与多条 P1 均无可见 fix PR，320 条待合并 PR 积压，维护带宽与社区规模不匹配。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话/子代理生命周期与状态一致性** | OpenClaw、Hermes Agent、NanoBot、NanoClaw | OpenClaw #172837 子代理完成投递放弃后不移除、#155119 完成答案丢失；Hermes #147631 父 agent 静默终止子任务、#139662 网关重启后会话不可恢复；NanoBot #6628 中断会话未落终态；NanoClaw #4168/#4171 审批卡片在 host 决策前被改写 |
| **token 成本可控与可归因** | OpenClaw、NanoBot、ZeroClaw、LobsterAI | OpenClaw #143017 缓存写浪费 #130257 成本不可归因、#178373 缺 turn/token 预算；NanoBot #6649 记忆压缩仅读前 1000 字符；ZeroClaw #12421 cron 无法享 prompt-cache 亲和性；LobsterAI #3085 精简每次请求携带的 AGENTS.md |
| **升级/更新的破坏性副作用** | Hermes Agent、OpenClaw、NanoBot | Hermes #96180 update 重建 venv 丢失可选依赖致 Telegram cron 静默失效、#46276 PATH 失配；OpenClaw #197083 升级后 WAL 校验失败且拒绝回滚；NanoBot #6615 破坏性退役旧 `apiType` 配置 |
| **配置可信度（写入即生效）** | ZeroClaw、LobsterAI、Hermes Agent、CoPaw | ZeroClaw #10781/#12396 失效配置键无运行时读取者；LobsterAI #3090 `executionMode` 写入后读取被硬编码丢弃；Hermes #154628 配置语义分裂、#123345 布尔参数被校验器拒绝；CoPaw #8718 预设连接即时 502 |
| **提供商/插件目录扩张** | Hermes Agent、PicoClaw、NanoBot、CoPaw、ZeroClaw | Hermes 插件目录（AutoRAG/train-ultra/Magnific MCP）；PicoClaw LLMTR 接入（#3470/#3471）；NanoBot 胜算云 provider（#6647）；CoPaw Olostep web_search（#8740）；ZeroClaw 作用域化凭据（#12373/#12408/#12418） |
| **多消息渠道一致性与渠道完整性** | NanoClaw、ZeroClaw、Hermes Agent、CoPaw、PicoClaw | NanoClaw Slack 12K 分段、Chat SDK 错误静默；ZeroClaw #11713 Telegram 忽略 edited_message；Hermes #61211 WeCom 中文文件名 MAX_PATH；CoPaw #7608 DingTalk 卡片回调；PicoClaw Discord handshake 死锁"假在线" |
| **安全审批的可用性与可信度** | Hermes Agent、NanoClaw、ZeroClaw、OpenClaw | Hermes #101655 审批卡只显示目标不显示内容；NanoClaw #4316 登录链接经 cmd.exe 打开风险；ZeroClaw #12137 沙箱规则转义错误且约束不放行 `~/.ssh` |
| **错误可诊断性（reason code）** | OpenClaw、CoPaw、ZeroClaw | OpenClaw #127195 十六处调用点输出相同错误无 reason code；ZeroClaw #12425 长任务超时后失去流程控制；CoPaw 用户能精确定位到源码行 |

## 5. 差异化定位分析

- **OpenClaw —— 重型编排基座**：功能侧重多会话、子代理、A2A 派发与 cron 持久化；目标用户是技术深度高的自托管玩家与 OS 项目集成的上游基座；架构最重，也因此稳定性债务最重。
- **Hermes Agent —— 桌面 + 多表面 + 安全加固**：提供 canary 桌面分发（macOS DMG）、kanban、profile 体系与大规模 sec-marathon 安全 PR；侧重"企业/桌面环境可信运行"，问题集中在多 surface 一致性与 Windows 企业环境（#72310 WDAC、#61211 MAX_PATH）。
- **NanoBot —— WebUI 体验与运行时精炼**：重心在 WebUI 长会话性能、流式渲染细节与 agent 运行时重构；目标用户偏重图形界面使用者，采用"高强度清理 + 小步合入"节奏。
- **NanoClaw —— 多渠道网关**：以渠道层隔离与可靠性为核心（Slack/WhatsApp/iMessage/Google Chat/Discord/Mattermost/Web），侧重自托管部署与安装生命周期，安全边界收敛认真。
- **ZeroClaw —— 安全模型与凭据管理**：以作用域化凭据、Secrets 面板、沙箱规则、WASM 插件调度为核心议题，走 RFC/ADR 架构流程，安全语义投入最重但合流最慢。
- **CoPaw —— Console 交互 + 插件生态**：侧重 Console 桌面/触屏混合体验、插件主题扩展点与 web_search 供应商生态，中文环境（GBK/CJK）适配是独特关注点。
- **PicoClaw —— 轻量 + 提供商目录**：以清理历史积压和历史 bug 为主，新增动作集中在第三方 OpenAI 兼容网关接入，定位最轻。
- **LobsterAI —— OpenClaw 生态集成方**：以版本化补丁链维护 OpenClaw 集成，重心在集成可靠性与上下文成本治理。
- **NullClaw —— 渠道渲染细节**：单点推进 Telegram Markdown 表格渲染，规模最小。

**关键架构差异**：OpenClaw/ZeroClaw 走"重编排 + 安全边界"路线；NanoBot/NanoClaw 走"WebUI/多渠道网关 + 快速修复"路线；Hermes 走"桌面分发 + 多表面 + 安全马拉松"路线；PicoClaw/LobsterAI 更接近生态集成与轻量适配层。

## 6. 社区热度与成熟度

- **第一层（超大规模、高迭代）**：OpenClaw —— 单日近千条 Issue+PR 更新，功能与债务同步膨胀，处于"高速迭代 + 质量巩固并行"阶段，但积压显示已接近维护带宽上限。
- **快速迭代阶段**：Hermes Agent（安全加固专题集中推进，canary 高频）、CoPaw（v2.3.0 缺陷密集上报，Issue→fix PR 当日闭环）、ZeroClaw（架构 RFC 与凭据链集中提交，但零合流）。
- **质量巩固阶段**：NanoBot（29/31 PR 合并，系统性回收历史 WebUI 回归）、NanoClaw（四类渠道/审批 bug 集中落地，积压数周的跨模块变更终于关闭）、PicoClaw（集中清理 3–8 月历史积压）。
- **低活跃/待观察**：NullClaw（维护吞吐为零）、LobsterAI（评审通道无互动，Issues 零活动）、IronClaw/TinyClaw/Moltis/ZeptoClaw（当日零活动）。
- **成熟度判断**：用户诉求已从"能不能用"上移到"长上下文记忆是否可信"（NanoBot #6649）、"配置是否诚实"（ZeroClaw #10781）、"审批是否可见"（Hermes #101655），这是成熟期产品的精细化信任预期。

## 7. 值得关注的趋势信号

1. **可靠性 > 新功能成为主战场**：本期所有活跃项目的头部问题都是状态一致性、消息丢失、成本失控，而非功能缺口。对开发者的参考：优先投资会话/子代理生命周期状态机、投递幂等与终态收敛，而非继续加功能面。
2. **成本可观测性成为一等公民**：OpenClaw 用线上捕获量化缓存浪费、ZeroClaw 关注 prompt-cache 亲和性、LobsterAI 治理常驻 AGENTS.md 的每次请求开销——"每次请求的固定开销"正在被系统性审计。建议在设计中内置 token 预算、父子成本归因与 run-level turn 预算。
3. **配置可信度是隐性信任债**：ZeroClaw 失效键、LobsterAI 写入即丢弃、Hermes 配置语义分裂——"设置不生效"类问题分散在多个项目，建议引入 schema 与运行时读取者的强一致性校验。
4. **升级幂等性被反复证伪**：Hermes #96180、OpenClaw #197083、NanoBot #6615 说明"升级即破坏已装集成"是跨项目通病，且破坏性配置变更需要明确的版本说明与迁移窗口。
5. **审批门的安全可用性缺口**：审批卡只给目标不给内容（Hermes）、渠道端抢答（NanoClaw）、沙箱规则转义错误（ZeroClaw）——"让用户在不可见内容上授权"正在削弱安全机制的实际效力，应把"可审性"与"安全性"一并设计。
6. **插件/提供商目录成为主要社区贡献路径**：Hermes、PicoClaw、NanoBot、CoPaw、ZeroClaw 均出现目录类 PR，但评审吞吐是共同瓶颈。建议为目录类提交建立轻量、批量的评审通道。
7. **评审带宽是生态级瓶颈**：OpenClaw 320 待合并、Hermes 42 对 8、ZeroClaw 50 对 0——依赖链（如 ZeroClaw #12373→#12402→#12408/#12418）会放大积压。建议集中清理依赖链头部，并对安全加固类 PR 打包成组评审以减少往返。

---

*本报告严格依据 2026-11-14 各项目社区动态摘要生成；PR 评论数为 `undefined` 的条目未做热度推断；部分项目原始链接的仓库路径与任务给定路径不一致，已在对应处标注待核验。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-14

## 1. 今日速览
项目过去 24 小时保持高强度开发节奏：31 条 PR 更新，其中 29 条已合并/关闭、仅 2 条待合并，清理效率极高；合并内容集中于 WebUI 稳定性与性能、agent 运行时重构、配置迁移收尾。
Issues 侧仅 3 条更新（2 新开/活跃、1 已关闭），社区报障量低，但涉及记忆压缩与 WebUI 渲染两类实质缺陷。
无新版本发布，今日以修复与重构为主，属"消化积压、夯实基础"型工作日。
整体健康度良好：修复类 PR 覆盖多条已报告问题路径，但出现 1 条破坏性配置变更（`#6615`），需关注升级影响。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并/关闭的 PR 显示三条主线推进：

**WebUI 稳定性与性能（核心贡献者 chengyongru 主导）**
- [#6628](HKUDS/nanobot/pull/6628)：修复网关重启后中断会话未落终态、后续请求被错误排队的问题。
- [#6586](HKUDS/nanobot/pull/6586)：为超大会话轮次引入记录分页，避免工具活动/推理内容被静默丢弃。
- [#6634](HKUDS/nanobot/pull/6634)：子代理任务历史改为按已加载轮次读取，解决长会话打开时传输 7.3 MB JSON 的性能问题。
- [#6640](HKUDS/nanobot/pull/6640)：修复空流导致的"幻觉推理"展示。
- [#6646](HKUDS/nanobot/pull/6646)：修复单美元数学公式跨越行内代码导致的渲染破坏。
- [#6631](HKUDS/nanobot/pull/6631)：模型预设保存从两次串行设置写入精简为更少往返。
- [#6617](HKUDS/nanobot/pull/6617)：为聊天请求增加关联、取消过期重连。

**Agent 运行时与生成质量**
- [#6627](HKUDS/nanobot/pull/6627)：修复流式续写时换行/缩进在拼接处丢失的问题。
- [#6641](HKUDS/nanobot/pull/6641)：重构 `_run_agent_loop` 中 run-local 输入队列与 checkpoint 的职责归属。
- [#6625](HKUDS/nanobot/pull/6625)：修复停止 systemd 用户服务后被 `Restart=always` 拉起的问题。

**配置/渠道清理**
- [#6615](HKUDS/nanobot/pull/6615)：**破坏性变更**——在 v0.4.0/v0.4.1 两个版本转换窗口结束后，正式退役旧 OpenAI 选择器 `apiType`/`api_type`，显式使用旧配置将被拒绝。
- [#6647](HKUDS/nanobot/pull/6647)：注册胜算云（ShengSuanYun）网关为 `shengsuanyun` provider。
- [#6643](HKUDS/nanobot/pull/6643)、[#6644](HKUDS/nanobot/pull/6644)：Telegram 命令正则改为从别名表派生；清理无引用死代码。
- [#6669](HKUDS/nanobot/pull/6669)：更新微信群 2 二维码及有效期至 2026-11-21。

**评价**：项目向前迈进明显，尤其 WebUI 长会话与重连场景的多点修复形成了较完整的稳定性闭环；同时完成了一次计划内配置迁移收尾。

## 4. 社区热点
- [#6649](HKUDS/nanobot/issues/6649)（2 评论）：记忆压缩后 Dream 只读取每条 checkpoint 前 1000 字符，讨论最集中。
- [#6662](HKUDS/nanobot/issues/6662)（1 评论）：WebUI 行内代码渲染异常。
- PR 评论数为 undefined（数据缺失），无法据此排序 PR 热度；从提交密度看，chengyongru 为今日绝对主力。

**诉求分析**：用户关注点从"能不能用"转向"长上下文记忆是否可信"与"Markdown 渲染细节是否可靠"，属于成熟期产品的精细化体验预期。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 影响 |
|---|---|---|---|
| **高** | [#6649](HKUDS/nanobot/issues/6649) Dream 仅读取每条累计 checkpoint 前 1000 字符 | 新开，暂无 fix PR | 记忆检索被截断，直接影响 AI 助手长期记忆质量与回答准确性 |
| **中** | [#6662](HKUDS/nanobot/issues/6662) WebUI 行内代码变为滚动块或仅显示文件名 | 新开，暂无 fix PR | 纯展示层，不影响数据 |
| **中（已闭环）** | [#6660](HKUDS/nanobot/issues/6660) `gpt-image-1`/`dall-e-3`/`dall-e-2` 已退役仍出现在模型列表 | **已关闭** | 用户选择退役模型会请求失败 |

注：今日多条已合并 PR 修复的是此前已报告问题（流式拼接丢空白、空流幻觉推理、美元符数学扫描越界、systemd 重启环），表明历史上报的 WebUI 回归已被系统性回收。**#6649 目前无对应 fix PR，是最值得优先跟进的一项。**

## 6. 功能请求与路线图信号
- **新 provider 接入**：[#6647](HKUDS/nanobot/pull/6647) 胜算云网关已合并，多模型网关生态继续扩张，预示下一版本将包含新 provider 条目。
- **配置迁移完成**：[#6615](HKUDS/nanobot/pull/6615) 已合并，旧 `apiType` 退役，下一版本说明中应明确升级提示。
- 今日无明确的新功能请求 Issue；问题以 bug 与渲染缺陷为主，路线图信号多来自内部重构（[#6641](HKUDS/nanobot/pull/6641)、[#6644](HKUDS/nanobot/pull/6644)），指向可维护性提升而非新能力。

## 7. 用户反馈摘要
- **记忆可靠性痛点**（#6649）：用户对 compaction 机制改动（#5610）后 prompt 构建未同步更新表示关切，反映出对"累计 checkpoint 是否被完整利用"的信任缺口。
- **渲染细节不满**（#6662）：行内代码在 WebUI 中显示异常，属于高频使用场景中的体验摩擦。
- **模型列表陈旧**（#6660）：用户主动核对 OpenAI 官方弃用公告并发现 nanobot 未同步，体现部分用户对配置准确性的高要求。
- 今日无正面满意度表述样本，反馈以问题报告为主。

## 8. 待处理积压
今日数据显示 Issue 生命周期普遍较短，#6660 当日创建次日即关闭，无明显长期未响应项。**唯需提醒维护者：** [#6649](HKUDS/nanobot/issues/6649) 涉及记忆核心链路且尚无 fix PR，建议尽快指派；同时 PR 待合并仅 2 条，队列健康，无明显积压风险。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-11-14）

## 1. 今日速览

项目今日处于高活跃状态：24 小时内 Issues 更新 50 条（41 条新开/活跃、9 条关闭）、PR 更新 50 条（42 条待合并、8 条合并/关闭），并发布 1 个 canary 版本（v0.23.1+canary.20261114T064334Z）。当日最鲜明的特征是安全加固主题：多条 `sec-marathon-2026-11-13` 标签的 P3 PR 集中更新（审批门绕过、路径规范化、输出脱敏等）。待合并 PR 数量（42）显著高于已处理数量（8），评审压力偏大，其中含标注 HOLD 未就绪的 PR。稳定性方面新增或复现了多个 P2 网关、会话层缺陷，整体项目健康度为"活跃但积压上升"。

---

## 2. 版本发布

**v0.23.1+canary.20261114T064334Z**（发布日期：2026-11-14，canary 通道）

- 性质：canary 构建，面向桌面端分发（含 macOS Apple Silicon 的 DMG 下载条目）。
- 破坏性变更：所给材料中**未披露**。
- 迁移注意事项：所给材料中**未披露**。
- 判断：作为 canary 版本，建议仅在测试环境验证；正式升级前应等待后续稳定版说明。以下 PR 与版本相关的 `install-update`、`area/profiles` 问题（如 #96180、#46276）值得关注。

---

## 3. 项目进展

今日实际合并/关闭的 PR 为 8 条，材料中明确可见的已关闭/已合并 PR：

- **PR #153601 [CLOSED]**：为 Hermes 插件目录新增 **AutoRAG**（本地文档与聊天归档检索）条目，仅改动 `plugin-catalog/autorag.yaml`，代码保留在外部仓库。属插件生态扩展。
  https://github.com/NousResearch/hermes-agent/pull/153601
- **PR #155756 [CLOSED]**：修复 kanban 托管 worker 的两类致死问题——busy owner 在 adopt 阶段杀死 worker、缺失 preload skill 杀死 reviewer。后续以 **PR #155762 [OPEN]** 重新提交修订版（含 ticket TTL 内重试），说明该修复仍待落地。
  https://github.com/NousResearch/hermes-agent/pull/155756
  https://github.com/NousResearch/hermes-agent/pull/155762

**推进程度评估**：当日实质性代码落地的进展有限，主要体现为插件目录扩展与 kanban 稳定性修复的迭代重提；安全加固类 PR（#155352、#155390、#155377、#155208、#155348、#155293）全部仍为 OPEN，尚未计入项目前进量。

---

## 4. 社区热点

按评论数排序的高讨论条目（均为 Issues）：

- **#123345 [OPEN, P2] terminal 工具 `notify=true` 被校验器拒绝** — 12 条评论，今日最高。布尔值 `true` 被 `notify must be true/false ...` 拒绝，属参数校验与文档/实现不一致的长期问题（创建于 2026-09-26）。
  https://github.com/NousResearch/hermes-agent/issues/123345
- **#96180 [CLOSED, P2] `hermes update` 重建 venv 丢失可选消息依赖** — 11 条评论。更新后 Telegram cron 投递静默失败（`python-telegram-bot not installed`）。用户诉求核心是**升级不应破坏已配置的集成**。
  https://github.com/NousResearch/hermes-agent/issues/96180
- **#133739 [OPEN, P2] 0 字节 `kanban.db` 导致所有工作区清理 fail-closed** — 11 条评论。跨板扫描遇 sqlite 错误即返回 "unknown"，错误处理策略过于保守。
  https://github.com/NousResearch/hermes-agent/issues/133739
- **#125702 [OPEN, P2] 插件发现未跳过 `.muse-plugin`** — 7 条评论。obra/superpowers 插件仍持续产生 "unsupported Agent Plugins schema" 警告，为 #101962 的不完整修复。
  https://github.com/NousResearch/hermes-agent/issues/125702
- **#155595 [OPEN, P3] profile 创建与生命周期跟踪单** — 7 条评论，当日新建。汇总 provisioning、Honcho 清理、安全证明与剩余工作，是观察 profile 战役进度的关键入口。
  https://github.com/NousResearch/hermes-agent/issues/155595
- **#46276 [OPEN, P2] 命名 profile 的 systemd user 网关单元因 PATH 不匹配持续过期** — 7 条评论，自 2026-06-14 长期未解。
  https://github.com/NousResearch/hermes-agent/issues/46276
- **#139662 [OPEN, P2] 网关重启后消息平台会话无法从桌面恢复（`session.resume` not_found）** — 7 条评论。
  https://github.com/NousResearch/hermes-agent/issues/139662
- **#5867 [OPEN, P2] Ollama qwen2.5-coder 工具调用置于 content 字段不被执行** — 7 条评论，自 2026-04-07 悬置至今，本地模型用户关注度高。
  https://github.com/NousResearch/hermes-agent/issues/5867

**诉求分析**：热点集中于三类——（a）**升级/更新路径的破坏性副作用**（#96180、#46276）；（b）**多表面、多平台会话一致性**（#139662、#144332、#154628）；（c）**本地模型兼容性**（#5867）。这些均直接指向个人 AI 助手的"长期可用性"体验。

---

## 5. Bug 与稳定性

**P2（高）——今日无对应 fix PR，除非另行注明：**

1. **#147631 [OPEN] 父 agent 在子任务阻塞后静默终止未完成任务**
   https://github.com/NousResearch/hermes-agent/issues/147631
2. **#139662 [OPEN] 消息平台会话在网关重启后不可恢复**
   https://github.com/NousResearch/hermes-agent/issues/139662
3. **#154628 [OPEN] Ink TUI 在 `display.show_reasoning` 未设置时丢失流式推理**（客户端 hydration 强制为 false，服务端默认开启，配置语义分裂）
   https://github.com/NousResearch/hermes-agent/issues/154628
4. **#101655 [OPEN] 受保护指令文件写入审批卡只显示目标标签、不显示将写入的内容**——安全相关可用性缺陷
   https://github.com/NousResearch/hermes-agent/issues/101655
5. **#144332 [OPEN] 从 CLI/TUI/Desktop 提交至消息会话的轮次以 admission id 作回复锚点**（触发 "must be a 64-character hex string"、30 秒重投与 ♻️ 提示）
   https://github.com/NousResearch/hermes-agent/issues/144332
6. **#61211 [OPEN] WeCom 含中文文件名上传失败（百分号编码超出 Windows MAX_PATH）**
   https://github.com/NousResearch/hermes-agent/issues/61211
7. **#145854 [OPEN] `execute_code` 内部派发的工具调用 hook 载荷 `session_id` 为空**
   https://github.com/NousResearch/hermes-agent/issues/145854
8. **#72310 [OPEN] Windows WDAC/Device Guard 拦截未签名 `hermes.exe`**
   https://github.com/NousResearch/hermes-agent/issues/72310

**P3：**

- **#153865 [OPEN] webhook `mirror_to_session`（role=user）与用户下一条 DM 合并为同一轮**
  https://github.com/NousResearch/hermes-agent/issues/153865

**今日关闭/已有修复的稳定性项：**

- **#96180 [CLOSED]** 更新丢失消息依赖。
- **#147995 [CLOSED]** Telegram 照片/语音回合回复延迟数分钟（`_release_media` 内联执行）；1 个 👍。
- **#40885 [CLOSED]** Telegram 消息处理期间视觉跳动。
- **#89477 [CLOSED]** 命名 profile 独立 Telegram bot 网关崩溃/不轮询。
- **#133739** 仍 OPEN，但与 kanban 工作区相关的修复在 **PR #155762 / #155756** 中有同期迭代（busy owner 与 preload skill），可一并复核。

**已存在安全类 fix PR（对应 #38964 等）：** PR #155208（Windows 盘符根路径 rm 规则）、#155348（eval 载荷进入 hardline）、#155293（单段 home 折叠加文件工具审批门）、#155377（审批答案仅接受 once/session/always）、#155352（execute_code 环境变量行脱敏）、#155390（跳过解析到项目外的上下文文件）。以上均为 P3，标注 §3.2 加固而非新安全边界。其中 **#155732（profiles 中断重命名回滚）明确标注 HOLD，不得合并**。
https://github.com/NousResearch/hermes-agent/pull/155208
https://github.com/NousResearch/hermes-agent/pull/155390
https://github.com/NousResearch/hermes-agent/pull/155732

---

## 6. 功能请求与路线图信号

- **#4581 [CLOSED, P3]** 请求 `read_file` 返回不带行号的原始内容（1 个 👍）；对应实现 **PR #42144 [OPEN]** 为 `read_file` 增加 `add_line_numbers` 选项。Issue 已关闭而 PR 仍开放，**有望进入下一版本**。
  https://github.com/NousResearch/hermes-agent/issues/4581
  https://github.com/NousResearch/hermes-agent/pull/42144
- **插件目录扩张**：PR #155763（train-ultra）、#155758（resortlife）、#96961（Magnific MCP）均为 P3 OPEN；#153601（AutoRAG）已关闭。表明社区以 MCP/插件目录提交为主要贡献路径，但同日新提交与历史提交混合，评审吞吐是瓶颈。
- **#155595 [P3] profile 生命周期**：为后续 provisioning、凭据共享、模型继承、clone 安全等工作提供跟踪单，是下一阶段路线图信号的最明确来源。
- **MCP 鉴权体验**：PR #155757 修复 `hermes mcp login` 在 Cloudflare Access 类代理后不发送服务端配置头的问题，指向"企业代理环境可用"需求。
  https://github.com/NousResearch/hermes-agent/pull/155757

---

## 7. 用户反馈摘要

- **升级即破坏（不满）**：`hermes update` 的 runtime-repair 重建 venv 时丢弃可选 extras，导致既有 Telegram cron 静默失效（#96180）。用户期望升级幂等且保留已装集成。
- **配置语义不一致（困惑）**：默认开启项在客户端被强制为关闭（#154628）；布尔参数被校验器拒绝（#123345）。用户面对"文档说开、实际不开"的行为落差。
- **多 surface 一致性痛点**：从 TUI/Desktop/CLI 向消息会话发起的轮次出现回复锚点错误与重投（#144332）；网关闭环后会话不可恢复（#139662）。真实场景是"同一助手跨终端与 IM 混用"。
- **安全审批可用性**：审批卡只给目标标签不给内容（#101655），用户被要求对不可见内容授权——既阻碍使用也削弱信任。
- **平台特定摩擦**：WeCom 中文文件名在 Windows 上失败（#61211）、WDAC 环境 CLI 被拦截（#72310），反映 Windows 企业环境支持不足。
- **正向信号**：Telegram 媒体回合延迟（#147995）与消息跳动（#40885）等体验问题在今日关闭，说明平台层修复在持续交付。

---

## 8. 待处理积压

以下条目创建时间早、今日仍在更新但未见落地 fix PR，建议优先分诊：

| 条目 | 类型 | 创建日期 | 状态 |
|---|---|---|---|
| [#5867](https://github.com/NousResearch/hermes-agent/issues/5867) Ollama 工具调用在 content 字段 | P2 Bug | 2026-04-07 | OPEN，无 fix PR |
| [#4581](https://github.com/NousResearch/hermes-agent/issues/4581) / [PR #42144](https://github.com/NousResearch/hermes-agent/pull/42144) `read_file` 行号开关 | P3 Feature | Issue 2026-04-02 / PR 2026-06-08 | Issue 已关闭，PR 仍 OPEN |
| [#46276](https://github.com/NousResearch/hermes-agent/issues/46276) profile 网关单元 PATH 失配 | P2 Bug | 2026-06-14 | OPEN |
| [#61211](https://github.com/NousResearch/hermes-agent/issues/61211) WeCom 中文文件名 MAX_PATH | P2 Bug | 2026-07-09 | OPEN |
| [#72310](https://github.com/NousResearch/hermes-agent/issues/72310) WDAC 拦截 CLI | P2 Bug | 2026-07-26 | OPEN |
| [#96961](https://github.com/NousResearch/hermes-agent/pull/96961) Magnific MCP 目录条目 | P3 Feature | 2026-08-28 | OPEN |
| [#123345](https://github.com/NousResearch/hermes-agent/issues/123345) `notify=true` 校验器拒绝 | P2 Bug | 2026-09-26 | OPEN，今日最热 |
| [#133739](https://github.com/NousResearch/hermes-agent/issues/133739) 0 字节 kanban.db fail-closed | P2 Bug | 2026-10-06 | OPEN |

**维护者关注建议**：42 条待合并 PR 对 8 条已处理，评审队列显著积压；同时存在标注 HOLD 的 #155732，建议在进入合并前明确状态标记以避免误合。安全加固系列（6 条 sec-marathon PR）建议打包成组评审，减少往返。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-14）

## 1. 今日速览

过去 24 小时内，PicoClaw 仓库没有发布新版本，共更新 2 条 Issue 和 6 条 PR。Issue 方面，有 2 条新开或活跃，没有关闭。PR 方面，有 5 条被合并或关闭，1 条仍待合并。其中 3 条已关闭的 PR 是由同一作者批量合并修复的历史积压。当天唯一的新增开发动作集中在 LLMTR 提供商接入：Issue #3470 与 PR #3471 同时提交。整体活跃度中等偏低，但仍以清理积压和提供商扩展为主，没有版本发布，也没有社区讨论热点。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日关闭或合并的 PR 中，值得关注的有：

- **PR #1559**（CLOSED，作者 xuwei-xy）：批量合并 #1327、#1319、#1318、#1313 中的修复。这是一条长期积压的批量汇总 PR，创建于 2026-03-14，今日更新并关闭。
  https://github.com/sipeed/picoclaw/pull/1559
- **PR #1558**（CLOSED，作者 xuwei-xy）：批量合并 #1344、#1342、#1341、#1331 中的修复，与上一条属于同一类工作。
  https://github.com/sipeed/picoclaw/pull/1558
- **PR #1546**（CLOSED，作者 xuwei-xy）：批量合并 #1480、#1479、#1478、#1473、#1467 中的修复。
  https://github.com/sipeed/picoclaw/pull/1546
- **PR #3452**（CLOSED，[stale]）：将 discordgo fork 升级，越过 gateway handshake 死锁点，修复 Discord 通道“显示已连接但永久失聪”的问题。
  https://github.com/sipeed/picoclaw/pull/3452
- **PR #3318**（CLOSED，[stale]）：修复 `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 重复键导致 `ERR_PNPM_BROKEN_LOCKFILE` 的问题。
  https://github.com/sipeed/picoclaw/pull/3318

**评估**：今日最大的推进来自对 3–8 月历史积压的集中清理，共有 6 条 PR 关闭。其中三条 xwei-xy 的批量合并 PR 只是汇总载体，实际修复规模需以其内部子 PR 为准，仅凭本次数据无法确认。新增功能推进有限，只有 LLMTR 提供商接入 1 条仍在待合并。

## 4. 社区热点

今日社区讨论整体冷清，没有高评论量或高反应的相关讨论：

- **Issue #3461** 是唯一有评论的条目，共 1 条评论，内容为 web UI 无法启动 gateway 的 Bug 跟踪。
  https://github.com/sipeed/picoclaw/issues/3461
- **Issue #3470 与 PR #3471** 由同一作者同步提交，是今日唯一“需求 + 实现”成对的动态，反映外部服务方对提供商目录准入的诉求。
  https://github.com/sipeed/picoclaw/issues/3470
  https://github.com/sipeed/picoclaw/pull/3471

## 5. Bug 与稳定性

按严重程度排列：

1. **[中高] Issue #3461** — `start gateway not available via web ui`（用于无 API-key 的提供商时）。控制台一切正常，但 web UI 无法启动 gateway，属于核心控制路径的功能缺失或回归，并已标记 `stale`，更新于 2026-11-13，已有 1 条评论。目前未见对应 fix PR。
   https://github.com/sipeed/picoclaw/issues/3461
2. **[中] PR #3452（已关闭）** — Discord 通道 gateway handshake 死锁，导致机器人“假在线”：心跳不发送、无日志、收发全断。修复随 PR 关闭，已标记 `stale`，属长期存在的静默故障。
   https://github.com/sipeed/picoclaw/pull/3452
3. **[低] PR #3318（已关闭）** — `pnpm-lock.yaml` 重复键使前端依赖安装直接失败（`ERR_PNPM_BROKEN_LOCKFILE`），影响 web 前端构建环境，不过该问题已关闭。
   https://github.com/sipeed/picoclaw/pull/3318

## 6. 功能请求与路线图信号

- **新增 `llmtr` 命名提供商（Issue #3470 / PR #3471）**：请求将 LLMTR（OpenAI 兼容网关，`https://llmtr.com/v1`）作为模型目录中的具名 provider，使 `model_list` 条目可直接选用，且不覆盖其他提供商的配置。PR 已同步提交，目录默认 API base 为 `https://llmtr.com/v1`，目前为唯一待合并 PR，具备较快进入下一版本的可行性；但今日无审阅或合并动作，推进节奏取决于维护者响应。
  https://github.com/sipeed/picoclaw/issues/3470
  https://github.com/sipeed/picoclaw/pull/3471

## 7. 用户反馈摘要

- **控制台可用、Web UI 不可用（#3461）**：用户配置了多个 `model_list` 条目，其中包括 `provider` 字段为空的条目，其实际使用场景应为无 API-key 的自定义或本地模型端点。用户明确表示“everything works from the console”，痛点是 Web UI 与 CLI 能力不对等，尤其影响以 Web 管理界面为主入口的使用者。
- **提供商目录扩展（#3470）**：用户希望以“一个 key 直达目录内多个模型”的方式接入第三方 OpenAI 兼容网关，目前的临时做法需要覆盖其他提供商配置，说明现有 provider 配置模型在并存多端点时存在不便。

## 8. 待处理积压

- **Issue #3461**：2026-11-06 创建，已标记 `stale`，仍处于 OPEN，无对应 fix PR。这是当前唯一影响核心控制路径的活跃 Bug，建议优先确认是否可复现并分派。
  https://github.com/sipeed/picoclaw/issues/3461
- **PR #3471**：今日新建、尚无审阅记录的待合并提供商功能 PR，建议尽快给出审阅意见，避免积压。
  https://github.com/sipeed/picoclaw/pull/3471
- **PR #3452 / #3318**：均为 `stale` 状态下关闭，而对应的 Discord 死锁与 lockfile 损坏问题本身具有实际影响，建议确认修复是否已真实进入主分支，避免“关闭即解决”的误判。
  https://github.com/sipeed/picoclaw/pull/3452
  https://github.com/sipeed/picoclaw/pull/3318

---

**数据说明**：以上内容完全依据所提供的 GitHub 数据生成。部分 PR 的评论数为空（undefined），未做推断；批量合并 PR 的实际修复内容需以其子 PR 为准。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-11-14

## 1. 今日速览

今日项目无新 Issue、无新版本发布，但 PR 流转活跃：过去 24 小时共 25 条 PR 更新，其中 11 条已合并/关闭、14 条待合并。合并侧以渠道层稳定性修复与技能模板同步为主（Slack 长消息分段、Chat SDK 错误日志、点击式审批卡片单一决策），说明维护重点在"多消息渠道隔离与可靠性"。新开的 6 条 PR 几乎全部来自同一作者 glifocat，且多为对既有合并的评审跟进（stacked follow-up），呈现出核心团队高密度、小步快跑的评审节奏。整体活跃度评估：**中高（以 PR 深度迭代为主，外部用户参与信号偏弱）**。

## 2. 版本发布

无新版本发布。相关信号：PR #4359 已开出一个发布 PR（v2026.11.0-beta.3），但尚未合并，故本日不计入发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **[#4171](https://github.com/nanocoai/nanoclaw/pull/4171) fix(channels)：点击卡片仅在 host 接受后生效**（2026-10-21 创建，今日关闭）— WhatsApp（Baileys）、iMessage 与本地 Web 聊天此前会在本地自行回答待定问题，现改为等待 host 确认。
- **[#4168](https://github.com/nanocoai/nanoclaw/pull/4168) fix(approvals)：审批卡片仅在 host 接受点击后变更**（2026-10-21 创建，今日关闭）— 渠道端此前在 host 决策前就改写卡片（移除按钮、标记"✅ Approved by <name>"），现改为每个请求只被决策一次。
- **[#4322](https://github.com/nanocoai/nanoclaw/pull/4322) fix(slack)：超 12,000 字符回复分段发送**（2026-11-09 创建，今日关闭）— 此前长回复以 `markdown_text` 发送会因 Slack 上限而失败，现改为分片发送。
- **[#4324](https://github.com/nanocoai/nanoclaw/pull/4324) fix(channels)：记录 Chat SDK 警告与错误**（2026-11-09 创建，今日关闭）— 此前 bridge 以 `logger: 'silent'` 初始化 Chat SDK，导致 SDK 捕获的错误被丢弃。
- **[#4323](https://github.com/nanocoai/nanoclaw/pull/4323) / [#4325](https://github.com/nanocoai/nanoclaw/pull/4325) chore：`/add-slack`、`/add-mattermost` 技能模板同步**（2026-11-09 创建，今日关闭）— 分别复制、运行并清理 Slack 长回复测试与 Mattermost 渠道工厂测试。
- **[#4316](https://github.com/nanocoai/nanoclaw/pull/4316) fix(setup)：仅在纯 https 下、不经 shell 打开登录链接**（2026-11-09 创建，今日关闭）— 设备码链接来自登录提供方回复，在无 `xdg` 的 WSL 环境下此前存在经 `cmd.exe` 打开的风险。

**推进度评估**：四个渠道/审批类 bug 修复落地，直接提升多平台一致性与安全性；两条技能模板同步确保渠道插件与新测试保持对齐。属于"修补地基"型进展，而非新功能增量。

## 4. 社区热点

- **[#4171](https://github.com/nanocoai/nanoclaw/pull/4171)** 与 **[#4168](https://github.com/nanocoai/nanoclaw/pull/4168)**：横跨 channels / core / security / sessions 多标签，积压约 3.5 周后于今日关闭，是今日体量最大的两项变更。
- 新开 PR 中 **[#4362](https://github.com/nanocoai/nanoclaw/pull/4362)**（setup 服务名退役，叠加在 #4358 之上）、**[#4361](https://github.com/nanocoai/nanoclaw/pull/4361)**、**[#4360](https://github.com/nanocoai/nanoclaw/pull/4360)**、**[#4357](https://github.com/nanocoai/nanoclaw/pull/4357)**、**[#4356](https://github.com/nanocoai/nanoclaw/pull/4356)** 均为对刚获批 PR 的评审跟进（补测试、修边界），构成本日讨论主线。

**诉求分析**：热点集中在两处——(a) **审批/问答的状态一致性**（谁有权点击、何时生效、重复点击如何幂等）；(b) **安装与自启动的服务生命周期管理**（systemd 单元、nohup 包装、install id 传递）。这些属于"部署与权限可信度"问题，直接影响自托管用户信任。注意：数据中所有 PR 评论数均为 `undefined`、点赞为 0，无法量化真实讨论热度，热点判断仅基于变更标签与关联链。

## 5. Bug 与稳定性

按推断严重程度排列（依据标签与摘要，非官方分级）：

| 级别 | 问题 | 状态 |
|---|---|---|
| 高（安全） | [#4316](https://github.com/nanocoai/nanoclaw/pull/4316)：登录链接可能经 `cmd.exe` 打开，非纯 https 链接未校验 | 已有 fix（今日关闭） |
| 高（权限/一致性） | [#4168](https://github.com/nanocoai/nanoclaw/pull/4168) / [#4171](https://github.com/nanocoai/nanoclaw/pull/4171)：审批卡片与问答在 host 决策前即被渠道端改写/回答，存在重复决策风险 | 已有 fix（今日关闭） |
| 中 | [#4322](https://github.com/nanocoai/nanoclaw/pull/4322)：Slack 超 12,000 字符回复直接发送失败 | 已有 fix（今日关闭） |
| 中（可观测性） | [#4324](https://github.com/nanocoai/nanoclaw/pull/4324)：Chat SDK 错误被静默丢弃 | 已有 fix（今日关闭） |
| 低 | [#4360](https://github.com/nanocoai/nanoclaw/pull/4360)：Google Chat 中 agent 消息行被渲染为粗体标签，易与卡片标签混淆 | fix 待合并 |
| 低 | [#4356](https://github.com/nanocoai/nanoclaw/pull/4356)：Google Chat 卡片标签加粗、Discord 文本转义遗漏 | fix 待合并 |
| 低（架构隐患） | [#4362](https://github.com/nanocoai/nanoclaw/pull/4362)：#4358 会退役任意 `nanoclaw*` 用户服务（含手写单元），并跳过 `/etc/systemd` | fix 待合并 |

## 6. 功能请求与路线图信号

本日无新 Issue，故无直接用户功能请求。从 PR 流向推断下一版本（仅 beta.3 发布 PR [#4359](https://github.com/nanocoai/nanoclaw/pull/4359) 已成形）可能纳入的方向：

- **渠道层加固延续**：Google Chat/Discord 文本渲染修复（#4360、#4356）为纯 UI 正确性，合并概率高。
- **安装生命周期收尾**：`NANOCLAW_INSTALL_ID` 贯穿 nohup 包装与非 systemd 场景（#4358），及其叠加修正 #4362，是 setup 稳定化的关键拼图。
- **镜像刷新**：[#4355](https://github.com/nanocoai/nanoclaw/pull/4355) 由机器人将 `v2026.10.0` 的硬化镜像替换为 `v2026.10.0-20261114T0248`，属例行供应链更新。
- 注：#4359 摘要称 beta.3 含"main 上 8 个 PR + channels 上 3 个面向用户的 PR"，可作为下一版本内容的唯一可量化线索，但具体清单未在材料中给出。

## 7. 用户反馈摘要

本日无 Issue 更新，且所给 PR 评论数均为 `undefined`，**无可提炼的公开用户评论**。仅能从 PR 描述中间接看到使用场景：

- 自托管/WSL 环境（登录链接打开方式，见 #4316）。
- 无 systemd 场景下的进程自启与重启（`start-nanoclaw.sh`、`restart.sh`、更新器，见 #4358）。
- 长回复、多平台共存（Slack 12,000 字符上限；WhatsApp / iMessage / Google Chat / Discord / Mattermost / Web 多渠道）。

满意度与不满意信号：材料未提供，不作推测。

## 8. 待处理积压

- **[#4358](https://github.com/nanocoai/nanoclaw/pull/4358)**（2026-11-14 开，待合并）为 #4362 的父 PR，两者需同时评审以确认服务退役逻辑不会误删用户手写单元。
- **[#4355](https://github.com/nanocoai/nanoclaw/pull/4355)**（机器人镜像刷新，待合并）建议尽快合并，避免硬化镜像落后。
- **[#4359](https://github.com/nanocoai/nanoclaw/pull/4359)** 发布 PR 处于待合并状态，建议与上述 fix 一并整合，避免 beta.3 发布后立即补丁。
- 结构性风险：今日 25 条 PR 中绝大多数由单一作者提交，评审带宽集中；建议维护者关注 #4168/#4171 这类跨多模块、积压数周的大型变更的评审周期，减少长期挂起。

补充说明：数据源链接域名显示为 `nanocoai/nanoclaw`，与任务说明中的 `qwibitai/nanoclaw` 不一致，本文按数据原文引用，请核验仓库归属。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-11-14

## 1. 今日速览

NullClaw 今日整体活跃度偏低：过去 24 小时内 Issues 无任何更新（新开/活跃 0、关闭 0），PR 侧仅有 1 条更新，且为待合并状态，无合并/关闭动作。无新版本发布。项目今日的唯一实质进展是一条针对 Telegram 渲染的 Markdown 表格修复 PR（#1094）。从健康度看，社区讨论静默、维护吞吐为零，需结合后续几日数据判断是短期波动还是长期降温。

## 2. 版本发布

今日无新版本发布，省略该部分。

## 3. 项目进展

今日无 PR 被合并或关闭，项目主线代码未向前推进。唯一存在的是待合并 PR [#1094](nullclaw/nullclaw PR #1094)（feat(telegram): render markdown tables as monospace pre blocks），其评审与合并尚未发生，属于"待办"而非"已完成"进展。

## 4. 社区热点

今日无 Issues 讨论，PR 侧仅 1 条，评论数据未提供（comments 为 undefined），👍 为 0，未形成社区热点。唯一动态为：

- [#1094 OPEN] feat(telegram): render markdown tables as monospace pre blocks（作者 timosha，创建/更新 2026-11-13）

背后诉求可从摘要推断：Telegram 渠道下 Markdown 表格此前被直通为原始管道符"|"，渲染成混乱的单行文本，影响可读性。该 PR 通过在行首检测"含 '|' 的行 + 分隔行（冒号 + 3 个以上短横线）"来识别表格并进行头/数据行转换。

## 5. Bug 与稳定性

今日无 Bug/崩溃/回归 Issue 报告。PR #1094 属渲染正确性改进（修复表格显示错乱），非崩溃类问题，且已附带 fix（待合并），无阻断性风险被记录。

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求 Issue。可纳入下一版本判断的唯一信号来自 #1094：Telegram 渠道的 Markdown 表格转 monospace pre 渲染，若通过评审，可作为渠道渲染体验改进合入后续版本。

## 7. 用户反馈摘要

今日无 Issues 评论可供提炼。PR #1094 的描述侧面反映出一种使用痛点：在 Telegram 端查看含 Markdown 表格内容时，表格被渲染为单行拼接的乱码式文本。除此之外，无满意/不满意反馈数据。

## 8. 待处理积压

今日数据中唯一可见的待处理项：

- [#1094 OPEN] feat(telegram): render markdown tables as monospace pre blocks — 自 2026-11-13 创建，当前仍开放待合并，建议维护者安排评审。

注：本次数据未提供长期未响应 Issue/PR 的完整清单（Issues 共 0 条），完整的积压排查需补充历史未关闭条目数据。

---

**数据完整性提示**：PR #1094 的评论数为 undefined、👍 为 0；今日无 release、无 Issues。以上结论均基于所给材料，未作外推。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-11-14

## 1. 今日速览

今日项目无 Issue 活动、无新版本发布，全部动态集中在 Pull Request 层（5 条更新），活跃度判定为**低-中等**：提交量正常但缺乏社区讨论信号。2 条 PR 当日关闭，其中 #3092 修复了已删除智能体在 OpenClaw 自动维护中的数据库访问与附件误删问题，属实质性稳定性修复。#3085 通过精简每次模型请求都会携带的 `AGENTS.md` 降低冷启动 token 开销。仍有 3 条 PR 待合并，其中 #3090 涉及 `executionMode` 配置读取被硬编码为 `local` 的持久化缺陷，影响 `auto` 与 `sandbox` 模式。整体项目健康度尚可，但 Issues 通道零活动，用户侧声音完全缺席。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

**已关闭/合并（2 条）**

- **#3092 [CLOSED] fix(openclaw): respect deleted agents during maintenance**
  netease-youdao/LobsterAI PR #3092
  修复了“删除智能体但保留文件”场景下的两处故障：OpenClaw 自动维护仍可能打开受删除日志保护的数据库，导致启动迁移或插件清理失败；后台媒体 GC 可能误删保留会话的附件。新增两个 v2026.8.1 补丁，使自动会话维护跳过已删除的逻辑/物理归属，媒体 GC 在清理前及异步操作后校验删除日志与路径保护。验证覆盖 98 个补丁从固定版本干净应用及强校验全部通过。**这是今日对项目可靠性推进最实质的一条。**

- **#3085 [CLOSED] perf(openclaw): slim the managed AGENTS.md sections and pristine template**
  netease-youdao/LobsterAI PR #3085
  工作区 `AGENTS.md` 随每次模型请求下发，重复或未使用的文本在每次冷启动都会产生 token 成本。本次裁剪重复内容与 LobsterAI 中从未使用的段落，并声明不删除任何规则，属纯成本优化、无行为变更。

## 4. 社区热点

今日无高讨论度条目：所有 5 条 PR 的评论数均为 `undefined`（即无评论数据），点赞均为 0，无 Issue 可统计。**社区互动处于静默状态**，PR 全部由两名作者提交（fisherdaddy 3 条、akshathayadav378-boop 2 条），暂无外部维护者评审信号。

从提交内容可读出的潜在诉求：#3093 与 #3090 均围绕 `cowork` 模块的可用性——前者担心无单位的绿色/红色 `+N / -N` 计数器被误读为额度扣费（netease-youdao/LobsterAI PR #3093），后者反映配置写入成功但读取被丢弃（netease-youdao/LobsterAI PR #3090），二者均指向“界面与配置的可预期性”这一用户信任问题。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 · 数据丢失风险 · #3092（已关闭，已修复）**
   后台媒体清理可能误删保留会话的附件；同时自动维护打开受保护数据库导致启动迁移/插件清理失败。netease-youdao/LobsterAI PR #3092
2. **中 · 配置失效 · #3090（OPEN，已有 fix PR）**
   `CoworkStore.getConfig()` 对 `executionMode` 硬编码返回 `'local'`，`setConfig` 虽持久化但后续读取全部丢弃，导致 `auto` 与 `sandbox` 模式无法生效。netease-youdao/LobsterAI PR #3090
3. **低 · 功能异常 · #3091（OPEN，已有 fix PR）**
   重复导入同一本地技能 zip 会生成 `-1` 后缀副本；去重仅比对 `_meta.json` 的 release 元数据，而本地 zip 通常不含该文件，`isSameSkillRelease` 判定失败。netease-youdao/LobsterAI PR #3091
4. **低 · 误导性 UI · #3093（OPEN，已有 fix PR）**
   文件编辑步骤展示无单位的实时 `+N / -N` 计数，易被误解为额度扣费。netease-youdao/LobsterAI PR #3093

今日无崩溃类报告，无 Issues 提交。

## 6. 功能请求与路线图信号

今日无用户提出的功能请求（Issues 为 0）。从 PR 侧可识别的演进方向：

- **OpenClaw 补丁机制持续加固**：#3092 引入 v2026.8.1 补丁并附强校验与补丁清单测试，说明项目采用版本化补丁链维护 OpenClaw，后续同类修复预计沿用该路径。
- **上下文成本治理**：#3085 表明 `AGENTS.md` 已进入 token 预算管理视野，后续可能有更多针对每次请求固定开销的优化。
- **cowork 体验收敛**：#3093（显式 “View changes” 控件）与 #3090（恢复 `executionMode` 读取）若合并，将共同改善 cowork 的可解释性与配置可信度，**是下一版本最可能落地的两项**。

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼，缺少真实用户原声。仅能从 PR 描述间接推断痛点：

- **额度焦虑**：`+N / -N` 无单位计数器被误认为扣费（#3093），反映用户对计费与文件变更的区分存在认知负担。
- **配置不可信**：设置项写入后读取被丢弃（#3090），会让用户认为“设置没生效”，属典型信任损耗场景。
- **技能导入冗余**：本地 zip 重复导入产生副本（#3091），影响技能库整洁度。
- 满意度/不满意信号：本日无直接数据。

## 8. 待处理积压

今日数据未提供长期未响应的 Issue 或 PR（Issues 总数 0，PR 均为 11-13 至 11-14 新建）。需提醒维护者关注的是**待合并队列的评审延迟风险**：

- netease-youdao/LobsterAI PR #3090（OPEN，创建于 2026-11-13，已跨日未合并且零评论）
- netease-youdao/LobsterAI PR #3091（OPEN，2026-11-14，零评论）
- netease-youdao/LobsterAI PR #3093（OPEN，2026-11-14，零评论）

其中 #3090 涉及配置正确性缺陷，建议优先评审；三条 PR 均无任何评论互动，评审通道是当前项目健康度的主要短板。

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

# CoPaw 项目日报 · 2026-11-14

## 1. 今日速览

过去 24 小时项目保持高强度运转：11 条 Issue 更新（新开/活跃 10、关闭 1）、17 条 PR 更新（待合并 16、合并/关闭 1），无新版本发布。当日活动集中在三类工作：v2.3.0 运行时缺陷的密集上报与修复（Hub 网关、空流重试、Chinese Windows 插件加载）、Console 交互细节打磨（拖拽、终端的 dock、触控目标、CJK Markdown），以及插件/主题扩展点与 web_search 供应商生态的扩展诉求。值得注意的是，多条当日 Issue 在数小时内即获得对应 fix PR（#8733→#8734、#8718→#8729、#8711→#8735、#8742→#8743），响应闭环速度良好，但积压区仍有跨月未决的 PR 与 Issue。整体健康度：活跃度**高**，合并吞吐偏低（当日仅 1 条关闭/合并），审查队列是当前主要瓶颈。

## 2. 版本发布

无。

## 3. 项目进展

今日唯一合并/关闭项为关闭的 PR（非新功能落地），整体属于“修复蓄水”日：

- **PR #4411 [CLOSED]**（2026-05-15 创建）`fix: add LLM call timeout and task watchdog to prevent stuck sessions` — 针对 LLM 提供商无响应导致会话永久卡在 `running` 状态的问题，长期挂起后今日关闭。https://github.com/agentscope-ai/QwenPaw/pull/4411
  - 配套 Issue #6125（`outofdate`）同日关闭，属于清理动作而非功能推进。https://github.com/agentscope-ai/QwenPaw/issues/6125

推进幅度评价：当日无功能合入，项目“向前迈进”主要体现为**待审 PR 池的快速补充**——4 组 Issue→PR 的当日配对，若审查顺利可在一个发布周期内转化为 v2.3.x 修复。

## 4. 社区热点

- **Issue #8071 [OPEN]** `Plugin-facing theme extension point` — 13 条评论，今日评论量最高。Console 主题系统（#7741）已让**用户**可选 6 套内置配色并自定义 accent/hover/背景/圆角，但**插件**仍只有单一主题旋钮 `window.QwenPaw.chat.theme.set(...)`。诉求本质是插件生态的视觉一致性：插件方希望获得语义化 token 覆盖层。https://github.com/agentscope-ai/QwenPaw/issues/8071
- **Issue #8711 [OPEN]** `RetryChatModel 在 HTTP 200 空流/仅思考内容 EOF 时自动重试一次` — 3 条评论，当日即由 PR #8735 承接。https://github.com/agentscope-ai/QwenPaw/issues/8711
- **Issue #7608 [OPEN]** DingTalk 渠道 stream 模式交互卡片回调 — 3 条评论、1 个 👍，为当日唯一有正向反应的 Issue，反映企业 IM 渠道的完整闭环需求。https://github.com/agentscope-ai/QwenPaw/issues/7608
- **Issue #8718 [OPEN]** Hub 模型网关对 Anthropic/MiniMax 预设即时失败 — 2 条评论，附修复 PR #8729。https://github.com/agentscope-ai/QwenPaw/issues/8718

分析：热点从“炫功能”转向“生态与可用性”——插件扩展能力、渠道完整性、网关首次可用性。评论集中在少数长期 Issue 上（#8071 已开放一个月余），说明插件开发者对扩展 API 的期待未被满足。

## 5. Bug 与稳定性

按严重程度排列（均标注是否有 fix PR）：

| 严重度 | Issue | 现象 | Fix PR |
|---|---|---|---|
| 高 | [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718) | Hub 中使用内置 `anthropic`/`minimax`/`minimax-cn` 预设的模型连接**立即失败**（HTTP 502 `hub_upstream_error`，请求未离开 Hub 进程）；根因为 `provider_headers()` 调用了不存在的 `request_headers()`；v2.3.0 与 main@19363e6 均存在 | ✅ [#8729](https://github.com/agentscope-ai/QwenPaw/pull/8729)（当日提交） |
| 高 | [#8733](https://github.com/agentscope-ai/QwenPaw/issues/8733) | 中文 Windows（cp936/GBK）下内置 `cloudpaw` 插件**完全无法加载**；`legacy_cloudpaw.py` 读取 JSON 未指定编码；v2.3.0 与 main@f47dd19 均存在 | ✅ [#8734](https://github.com/agentscope-ai/QwenPaw/pull/8734)（当日提交） |
| 中高 | [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) | Responses 续写摘要仍失败：`disable_thinking=True` 在 OpenAI Responses 协议下不生效，模型默认推理吃满 4000 token 输出预算；v2.3.0 / Python 3.11 / Docker | ❌ 无 |
| 中 | [#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) | HTTP 200 流“干净 EOF”但无答案内容（空或仅思考）时无自动重试；v2.3.0 运行时代码与源码核实（AI 辅助起草） | ✅ [#8735](https://github.com/agentscope-ai/QwenPaw/pull/8735)（当日提交） |
| 中 | [#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736) | 子代理完成错误触发“回复完成”桌面通知；v2.3.0 Docker 与 main（2.3.1b1）均复现 | ❌ 无 |
| 低（测试） | [#8742](https://github.com/agentscope-ai/QwenPaw/issues/8742) | 集成测试 `test_providers_get_nonexistent` 向仅注册 PUT 的路由发 GET，得到 405 而非预期结果 | ✅ [#8743](https://github.com/agentscope-ai/QwenPaw/pull/8743)（当日提交） |

观察：v2.3.0 是当前缺陷集中版本，6 条中 4 条明确标注 v2.3.0 复现，且多条确认在 `main` 上未修复，建议维护者评估是否以 v2.3.x 补丁版集中释放。

## 6. 功能请求与路线图信号

- **插件主题扩展点（#8071）** — 开放逾月、13 条评论，讨论成熟度最高；无对应实现 PR。若引入语义 token 覆盖层，需先稳定主题 token 契约。https://github.com/agentscope-ai/QwenPaw/issues/8071
- **Olostep 作为 web_search 供应商（#8740 + PR #8741）** — Issue 与 PR 同日提交，作者即 Olostep 官方开发者；若合入，web_search 生态将由 Tavily/AnySearch/Firecrawl 扩展为四家。https://github.com/agentscope-ai/QwenPaw/issues/8740 · https://github.com/agentscope-ai/QwenPaw/pull/8741
- **Settings Center 新增“外观”页（#8732）** — 欢迎屏头像/问候语/布局位置/背景定制；摘要称底层能力“多数已具备”，落地成本较低，**较可能进入下一版本**。https://github.com/agentscope-ai/QwenPaw/issues/8732
- **DingTalk stream 模式卡片回调（#7608）** — 需订阅 `/v1.0/card/instances/callback`，属渠道完整性缺口。https://github.com/agentscope-ai/QwenPaw/issues/7608
- **空流一次性重试（#8711）** — 已有 PR #8735（重试预算内允许一次、思考/仅空白文本缓冲上限 64），**最可能随 v2.3.x 落地**。https://github.com/agentscope-ai/QwenPaw/pull/8735

## 7. 用户反馈摘要

- **中文环境可用性是真痛点**：GBK 编码导致插件加载失败（#8733）暴露了 Windows 本地化路径缺乏测试覆盖；CJK Markdown 强调边界修复 PR #8133 同属该类。https://github.com/agentscope-ai/QwenPaw/pull/8133
- **网关“首次连接即失败”体验**：Hub 预设连接瞬间 502 且请求未出进程（#8718），用户能精确定位到源码行，说明受众技术能力强、对可诊断性要求高。
- **代理/多密钥部署场景**：PR #4411 指出“尤其是代理/多密钥配置”下会话卡死，是真实的自托管用户场景。
- **桌面级通知噪音**：#8736 显示用户已把 CoPaw 当作常驻桌面助手使用，子代理完成误报“回复完成”会干扰工作流。
- **插件开发者对 API 表达不满**：#8071 明确对比“用户有 6 套主题可选，插件只有一个开关”，是生态侧最具代表性的诉求表达。
- **Console 交互细节被反复打磨**：拖拽会话分组跳动（#8738 修复中）、隐藏终端仍挤压聊天区（#8739）、触控桌面命中区错位（#8737），说明触屏/桌面混合使用已是常见场景。https://github.com/agentscope-ai/QwenPaw/pull/8738 · https://github.com/agentscope-ai/QwenPaw/pull/8739 · https://github.com/agentscope-ai/QwenPaw/pull/8737

## 8. 待处理积压

提醒维护者关注以下长期未决项（按停留时长排序）：

- **PR #4411**（创建 2026-05-15，约 6 个月）今日已关闭——建议确认其为“合并”还是“放弃”，若为后者，会话卡死问题需另立跟踪项。https://github.com/agentscope-ai/QwenPaw/pull/4411
- **PR #7066**（创建 2026-08-16，约 3 个月，`Under Review`）OAuth2 授权码 + 轮换 refresh_token 的持久化修复（Fixes #7053，涉及 XMind 等远程 MCP），长期置于审查中，影响远程 MCP 可靠性。https://github.com/agentscope-ai/QwenPaw/pull/7066
- **PR #6660**（创建 2026-08-03，约 3 个月）`Update .dockerignore to include README.me`——标题与摘要存在 `README.me` / `README.md` 混淆，建议澄清或关闭以减少队列噪音。https://github.com/agentscope-ai/QwenPaw/pull/6660
- **PR #8648**（`size/XL`，2026-11-09）Console 本地引擎/GPU/自动更新三件套，依赖链为 #8649 → #8647 → #8648，需按序合入，是大体量待审项。https://github.com/agentscope-ai/QwenPaw/pull/8648
- **Issue #8071**（创建 2026-10-01，13 条评论）插件主题扩展点持续高热但无实现 PR，建议给出官方立场（纳入/暂缓）以收敛讨论。https://github.com/agentscope-ai/QwenPaw/issues/8071
- **Issue #7608**（创建 2026-09-07）DingTalk 卡片回调缺口逾两月未决。https://github.com/agentscope-ai/QwenPaw/issues/7608

---
*数据来源：CoPaw (github.com/agentscope-ai/CoPaw) 2026-11-14 过去 24 小时 GitHub 活动。注：Issues/PR 链接在原始数据中标注为 `QwenPaw` 仓库路径，本日报按原始链接原样引用。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-11-14

## 1. 今日速览

项目今日处于**高活跃、低合流**状态：过去 24 小时共 50 条 PR 与 10 条 Issue 有更新，但**合并/关闭数为 0、新版本发布为 0**，说明评审吞吐是当前瓶颈，而非开发投入。Issue 侧全部为 OPEN，其中 2 条为当日新报告（#12425、#12422），另有 2 条严重度为 S1 的阻塞性问题持续开放（#12137 于 10-31 开立、#12425 为今日新增）。PR 侧以安全与凭据管理方向为主，形成了 #12373 → #12402 → #12408 / #12418 的依赖链，但因前置 PR 未合入而整体滞留在待合并队列。整体健康度：**开发热度高、方向清晰，但积压与合流延迟需引起维护者注意**。

---

## 2. 版本发布

今日无新版本发布（最新 releases 为空）。

---

## 3. 项目进展

**今日合并/关闭的 PR：0 条**，无实质性代码合入。

需要提示的是，以下 PR 已明确标注"Depends on"另一未合并 PR，当前形成串联阻塞链：

- [PR #12408](https://github.com/zeroclaw-labs/zeroclaw/pull/12408) `feat(web): manage scoped HTTP credentials` — 依赖 #12402，为 Secrets 面板新增 HTTP Basic 与 API Token 独立标签页。标注 `risk:high`、`size:XL`。
- [PR #12418](https://github.com/zeroclaw-labs/zeroclaw/pull/12418) `feat(ssh): use scoped credentials in task-owned transports` — 依赖 #11869 与 #12408，实现任务级 SSH 代理在授权前校验 OpenSSH 有效主机、端口与用户。

结论：项目今日**未向前推进**任何已落地的变更，进展集中在评审排队与依赖梳理。

---

## 4. 社区热点

| 对象 | 评论数 | 链接 |
|---|---|---|
| Issue #10781 移除或实现无效的 context/history 配置键 | 5 | [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) |
| Issue #12137 macOS Seatbelt 规则转义错误 | 2 | [#12137](https://github.com/zeroclaw-labs/zeroclaw/issues/12137) |
| Issue #11713 Telegram 忽略 edited_message | 2 | [#11713](https://github.com/zeroclaw-labs/zeroclaw/issues/11713) |
| Issue #12396 失效的 history_pruning 配置项 | 1 | [#12396](https://github.com/zeroclaw-labs/zeroclaw/issues/12396) |
| Issue #12373 WebUI 凭据管理 | 1 | [#12373](https://github.com/zeroclaw-labs/zeroclaw/issues/12373) |

**诉求分析**：#10781 与 #12396 指向同一根因——配置 schema 中存在**无运行时读取者的失效键**（`history_pruning.keep_recent`、`collapse_tool_results` 自 #8196 移除旧剪枝器后失活），用户以为设置生效却得到相反的 token 行为。这是"配置可信度"问题，而非单点 bug，建议合并处理。凭据管理方向（#12373 / #12422 / #12408 / #12418）由同一贡献者推动，构成了今日最完整的主题线。

---

## 5. Bug 与稳定性

按严重程度排列：

**S1 — workflow blocked**

- [#12137](https://github.com/zeroclaw-labs/zeroclaw/issues/12137)（10-31 开立，今日仍有更新）：macOS Seatbelt 配置文件中"用户主目录 dotfiles"规则被错误转义为 `\\.`，导致 `~/.cargo`、`~/.nvm`、`~/.pyenv`、`~/.local` 下工具链在默认沙箱下报 "Operation not permitted"。**约束明确：修复不得向沙箱开放 `~/.ssh`**。今日未见对应 fix PR。
- [#12425](https://github.com/zeroclaw-labs/zeroclaw/issues/12425)（今日新开）：经 QQ 渠道发起长耗时任务（示例为"通过 bing 搜索 11 月发布了哪些重要模型"）时，出现"等待模型响应超时"并**失去流程控制**，用户期望返回明确的搜索引擎错误而非失控。发生组件为 channel，尚无 fix PR。

**S3 — minor**

- [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781)（配置项失效）与 [#12421](https://github.com/zeroclaw-labs/zeroclaw/issues/12421)（cron 任务运行于 session-key 作用域之外，无法获得 provider 的 prompt-cache 亲和性），二者均无 fix PR。

**功能缺陷（未标严重度）**

- [#11713](https://github.com/zeroclaw-labs/zeroclaw/issues/11713)：Telegram 监听器只读取 `update["message"]`，不处理 `edited_message`，导致用户通过编辑消息补充 @ 提及永远不被识别。

**相关修复 PR（待合并）**：[PR #12140](https://github.com/zeroclaw-labs/zeroclaw/pull/12140) 补全 Windows 默认 forbidden_paths；[PR #12135](https://github.com/zeroclaw-labs/zeroclaw/pull/12135) 向 Windows shell 子进程转发 `APPDATA`/`LOCALAPPDATA`；[PR #12314](https://github.com/zeroclaw-labs/zeroclaw/pull/12314) 修复 Windows cmd.exe 工作目录命令劫持（含破坏性标记）。

---

## 6. 功能请求与路线图信号

| 请求 | 状态 | 已有配套 PR | 判断 |
|---|---|---|---|
| 只写式 WebUI 凭据管理与作用域化密钥引用（[#12373](https://github.com/zeroclaw-labs/zeroclaw/issues/12373)） | 已提 Draft PR #12402，并延伸出 #12408、#12418 | 有 | **最可能落地**，主题线完整 |
| 操作员托管服务凭据的作用域化使用（[#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422)，今日新开 RFC） | 安全模型变更类 RFC | 部分 | 需进入 RFC 评审流程 |
| ADR-016 holding-crate 例外，支持 WASM 插件唤醒调度（[#12416](https://github.com/zeroclaw-labs/zeroclaw/issues/12416)） | 架构流程请求 | [PR #12403](https://github.com/zeroclaw-labs/zeroclaw/pull/12403)、[#12358](https://github.com/zeroclaw-labs/zeroclaw/pull/12358)、[#12315](https://github.com/zeroclaw-labs/zeroclaw/pull/12315) 均为同类例外文档 | 排队中，流程性阻塞 |
| Dashboard 登出支持 OIDC RP-initiated logout（[#12415](https://github.com/zeroclaw-labs/zeroclaw/issues/12415)） | 0 评论 | 无 | 早期，暂无排期信号 |

补充：#12415 指出当前使用 `[oidc.<alias>]` 时，Dashboard 登出仅结束 ZeroClaw 本地会话，用户在 IdP 侧仍保持登录——这是**安全语义缺口**，建议提升优先级评估。

---

## 7. 用户反馈摘要

- **配置诚实性受挫**：用户按文档设置 `context_compression.*`、`history_pruning.keep_recent` 等键以降低 token 消耗，实际无效果（#10781、#12396）。这是信任成本问题。
- **macOS 开发者被阻断**：默认沙箱下 cargo/nvm/pyenv 全部不可用，属于开箱即用的负体验（#12137）。
- **长任务失控**：QQ 渠道用户（liuaifu）反馈超时后流程失去控制，期望得到可诊断的搜索引擎错误（#12425）。
- **渠道编辑语义缺失**：Telegram 用户习惯"发消息后编辑补上 @ 提及"，系统视而不见（#11713）。
- **安全诉求升级**：贡献者希望"授权 agent 执行任务而不暴露底层凭据"（#12422），反映真实生产部署中的密钥分发需求。
- **成本优化诉求**：#12421 指出 cron 任务无法享受 prompt-cache 亲和性，属明确的运营成本痛点。

---

## 8. 待处理积压

按滞留时长排序，建议维护者优先处理：

1. [PR #9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) `feat(providers): support multiple models per provider profile` — 创建于 **2026-08-07**，滞留超 3 个月，标注 `needs-author-action`、`risk:high`、`size:XL`。涉及 schema-v4 连接与回退图重构，影响面大，但长期未决会阻塞 provider 层演进。
2. [PR #11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) `feat(tools): add opt-in task-owned SSH transport reuse` — 创建于 **2026-10-19**，是 #12418 的前置依赖，`needs-author-action`。
3. [PR #11911](https://github.com/zeroclaw-labs/zeroclaw/pull/11911) `fix(channels): preserve completed tool results and reuse bounded recovery` — 创建于 **2026-10-20**，已于 11-10 发布 review 跟进 commit，仍待合并。
4. [Issue #12137](https://github.com/zeroclaw-labs/zeroclaw/issues/12137) — S1 阻塞已开放 **14 天**，无 fix PR，且修复约束（不放行 `~/.ssh`）需要安全侧评审参与。
5. [Issue #12421](https://github.com/zeroclaw-labs/zeroclaw/issues/12421)、[#12416](https://github.com/zeroclaw-labs/zeroclaw/issues/12416) — 当日/昨日新开，尚无响应，需确认归属。

**健康度提示**：50 条待合并 PR 对应 0 条合流，且多条标注 `needs-author-action`。建议维护者本周集中清理依赖链头部（#12402、#11869），否则 #12408 / #12418 等 XL 级 PR 将持续堆积并增加 rebase 成本。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*