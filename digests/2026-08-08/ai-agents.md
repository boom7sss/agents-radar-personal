# OpenClaw 生态日报 2026-08-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-08 02:01 UTC

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

# OpenClaw 项目动态日报 — 2026-08-08

## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持极高活跃度：**500 条 Issue 更新**（新开/活跃 467 条，关闭 33 条）与 **500 条 PR 更新**（待合并 408 条，合并/关闭 92 条）。合并/关闭率达 18.4%，说明维护流程运转正常，但 408 条待合并 PR 暗示合并通道存在积压。**今日无新版本发布**，发布节奏处于暂停窗口。值得警惕的是，多个 P0 级稳定性问题（Gateway 内存泄漏 #91588、状态 DB 损坏 #101290、过早压缩数据丢失 #118772）仍在开放状态且无直接 fix PR，是当前项目健康度的主要风险点。社区讨论热度最高的议题集中在**模型静默失败**与**会话状态管理**两大方向。

---

## 2. 版本发布

今日无新版本发布。上一次版本线停留在 2026.7.2 系列（beta.7）。鉴于仓库内已合并多项针对 CI 可靠性、插件生命周期、会话队列顺序的修复 PR，预计下一版本将包含这些稳定性改进。

---

## 3. 项目进展

今日有 92 个 PR 被合并或关闭。除常规维护外，以下合并/关闭的 PR 具有显著价值（按影响面排序）：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#120420](https://github.com/openclaw/openclaw/pull/120420) | fix(queue): deliver queued steers in arrival order across turn boundaries | CLOSED | 修复了 mid-turn 期间排队 steer 消息被后发消息"插队"的问题，严格保证了消息到达顺序，消除了用户感知的消息乱序。 |
| [#120362](https://github.com/openclaw/openclaw/pull/120362) | test(qa): cover session and Workboard managed-worktree lifecycles; fix symlinked state-dir lock blindness | CLOSED | 补齐了会话所有权与 Workboard 所有权工作树生命周期的 QA 覆盖，同时修复了 symlink 状态目录下的锁盲区，提升多环境可靠性。 |
| [#120365](https://github.com/openclaw/openclaw/pull/120365) | fix(ci): harden hydrated dead-export scans | CLOSED | 修复了 AWS-hydrated Crabbox 环境下 dead-export 扫描的误报问题（此前导致 3 个独立分支同时失败），疏通 CI 通道。 |
| [#120372](https://github.com/openclaw/openclaw/pull/120372) | fix(ui): hide connection form during initial auth | CLOSED | 消除了通过 trusted-proxy / Tailscale 登录时连接表单闪现的 UX 瑕疵。 |
| [#120395](https://github.com/openclaw/openclaw/pull/120395) | fix(ci): honor env- and config-selected Windows targets | CLOSED | 修复 CI 中 Windows 测试目标未按 env/config 选择执行的问题。 |
| [#120381](https://github.com/openclaw/openclaw/pull/120381) | fix(gateway): refresh attributed message avatars | CLOSED | 修复了消息发送者头像不刷新的问题，改善多用户会话的展示准确性。 |
| [#120418](https://github.com/openclaw/openclaw/pull/120418) | test(qa): derive UX producer aggregate status | CLOSED | QA 基础设施持续完善，UX 矩阵现在可从生产者状态派生聚合结果。 |

**总体判断**：今日合并集中在 CI 可靠性、QA 基础设施和队列语义修正，属于"夯实基础"型进展，没有引入新的面向用户的功能特性。值得肯定的是 ClawSweeper 自动化流程（如 [#119778](https://github.com/openclaw/openclaw/pull/119778)）仍在持续产出修复 PR。

---

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 评论数 | 状态 | 链接 |
|---|---|---|---|---|---|
| 1 | #116277 | DeepSeek v4 Flash silent reply failure — no reply generated, generic fallback | 129 | CLOSED | [查看](https://github.com/openclaw/openclaw/issues/116277) |
| 2 | #116201 | Realtime voice work can retain unbounded provider and consult state | 59 | OPEN | [查看](https://github.com/openclaw/openclaw/issues/116201) |
| 3 | #7707 | Feature Request: Memory Trust Tagging by Source | 29 | OPEN | [查看](https://github.com/openclaw/openclaw/issues/7707) |
| 4 | #77598 | Track live dev agent behavior and trajectory | 23 | OPEN | [查看](https://github.com/openclaw/openclaw/issues/77598) |
| 5 | #91588 | Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB | 22 | OPEN | [查看](https://github.com/openclaw/openclaw/issues/91588) |

**热点分析**：

- **#116277（129 条评论）** 是绝对热点：DeepSeek v4 Flash 对 Telegram 群消息静默无响应，只输出通用 fallback。该 Issue 已关闭，但 129 条评论说明大量用户受到影响。背后诉求是**模型失败时需要有明确的可观测性与降级策略**，而非静默失败。
- **#116201（59 条评论）** 由 maintainer vincentkoc 提交，指出 Realtime voice 会话在慢/停滞/突发 provider 行为下会无界保留 provider 帧、pre-ready audio 等状态，缺少硬性所有权边界。这属于**架构级资源治理**问题，已标记 diamond lobster 级别。
- **#7707（29 条评论）** 是社区长期关注的功能请求——按来源对记忆条目做信任标记，防止网页/第三方技能中的恶意指令污染记忆（即记忆投毒防御）。该议题自 2 月 3 日创建至今已半年，仍处于 needs-product-decision 状态，社区诉求持续累积。

---

## 5. Bug 与稳定性

### P0 — 严重（数据丢失 / 崩溃 / 阻断启动）

| Issue | 标题 | 创建时间 | 有无 fix PR | 链接 |
|---|---|---|---|---|
| #91588 | Gateway 内存泄漏：RSS 从 350MB 涨至 15.5GB，反复 OOM 崩溃 | 2026-06-09 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/91588) |
| #101290 | CLI 启动预检在 gateway 运行中损坏状态 DB（"database disk image is malformed"） | 2026-07-07 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/101290) |
| #118772 | 2026.7.1+ embedded-agent-runner 的 sessionEntry.totalTokens 膨胀导致上下文窗口 4–8% 即触发过早压缩（数据丢失） | 2026-08-03 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/118772) |
| #119263 | Agent DB v14→v15 迁移失败：'no such column: entry_valid'，gateway 拒绝启动 | 2026-08-04 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/119263) |

**⚠️ 四个 P0 全部开放且无直接 fix PR**，是当前项目最大的稳定性隐患。其中 #91588 已存在一个月，涉及 OOM 崩溃，应优先处理。

### P1 — 高（影响核心功能）

| Issue | 标题 | 有无 fix PR | 链接 |
|---|---|---|---|
| #116201 | Realtime voice 无界保留 provider/consult 状态 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/116201) |
| #119087 | Gateway 冷启动较 2026.7.1-beta.1 回归 ~2.5x | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/119087) |
| #45494 | Cron agent 在 LLM API 持续故障时静默超时而非快速失败 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/45494) |
| #86684 | sessions_yield 子代理唤醒可在低上下文使用时压缩父分支 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/86684) |
| #115700 | chat.send 被错误拒绝 "thread switched branches"（stale expectedLeafEntryId） | ✅ [#116382](https://github.com/openclaw/openclaw/pull/116382) | [查看](https://github.com/openclaw/openclaw/issues/115700) |
| #94939 | 6.x 状态迁移导致 channel 会话存储 SQLite 为 0 字节 | ✅ linked-pr-open | [查看](https://github.com/openclaw/openclaw/issues/94939) |
| #117209 | AuthProfileStoreUnreadable 在快照发布失败后粘滞 | ✅ linked-pr-open | [查看](https://github.com/openclaw/openclaw/issues/117209) |
| #49876 | Cron 会话在工具失败时输出幻觉结果 | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/49876) |
| #98435 | MCP loopback 在 gateway 重启后不自动重连（recovered=1 误导） | ❌ 无 | [查看](https://github.com/openclaw/openclaw/issues/98435) |

### 今日修复确认

- **PR #120075**（由 [#120074](https://github.com/openclaw/openclaw/issues/120074) 驱动）：修复多 agent 网关每轮结束后卡顿数十秒的问题，诊断来自线上 CPU profile。
- **PR #120104**：修复 turn 在 adoption 前失败时 ingress claim 悬挂直至 300s 超时的问题（关 #119979）。
- **PR #120419**：修复 pre-adoption claim→adoption 停滞静默销毁入站消息的问题，改为重新排队而非 dead-letter。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 评论 | 👍 | 状态信号 | 链接 |
|---|---|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source（记忆源信任标记） | 29 | — | 半年未决，needs-product-decision | [查看](https://github.com/openclaw/openclaw/issues/7707) |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | Bootstrap 文件每轮重复注入，浪费 20–30% tokens | 11 | 2 | 与 2/21 创建的 #22438（tiered bootstrap）形成互补需求 | [查看](https://github.com/openclaw/openclaw/issues/67419) |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP 工具未注入 sessions_spawn 子代理（bundle-mcp + allowlist 均无效） | 10 | 6 | 社区高赞 bug，实质是功能缺失 | [查看](https://github.com/openclaw/openclaw/issues/85030) |
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | /new 与 daily reset 前应执行 agentic memory flush | 11 | 4 | 高支持度功能改进 | [查看](https://github.com/openclaw/openclaw/issues/45608) |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | MCP 工具调用的 channel-mediated 审批（consent envelope） | 16 | 1 | 涉及安全边界，需 security-review | [查看](https://github.com/openclaw/openclaw/issues/78308) |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | before_route_inbound_message 预路由拦截 hook | 7 | 3 | 插件体系架构级扩展 | [查看](https://github.com/openclaw/openclaw/issues/81061) |
| [#99583](https://github.com/openclaw/openclaw/issues/99583) | 智能会话自动标题（廉价模型 + 懒生成） | 7 | 2 | 代码库已有 llm-slug-generator，实现成本低 | [查看](https://github.com/openclaw/openclaw/issues/99583) |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) | 注入上下文的来源/波动性元数据（Context Provenance） | 7 | 1 | 有 linked-pr-open，可能在推进 | [查看](https://github.com/openclaw/openclaw/issues/54373) |

**路线图信号判断**：社区最集中的诉求是 **记忆/上下文管理**（#7707、#67419、#22438、#45608、#95724、#44395），其次是 **MCP 工具链路完善**（#85030、#78308）。结合今日 PR #120423（子代理结果冻结）与 #120187（yield 子代理父进程唤醒）来看，**子代理生命周期与上下文治理**是当前版本的隐含主线，预计下个 minor 版本会重点覆盖。

---

## 7. 用户反馈摘要

- **模型静默失败引发信任危机**：#116277 中用户报告 DeepSeek v4 Flash 在 Telegram 群聊中完全无响应，只输出通用 fallback，没有任何日志线索。129 条评论表明这是广泛性问题。用户反复强调"**宁可明确报错，也不接受静默失败**"。
- **中文用户直接点名代码质量问题**：#51429 中用户发现 OpenClaw 在工作目录下创建了 `/Users/wangtao` 文件夹，疑似某位开发者将个人工作路径 hardcode 进代码并被合并发布。该 Issue 标题为"看起来有人把工作路径hardcode进代码里而且居然被合并发布了"，情绪强烈。这属于**代码审查流程漏洞**的信号，建议 maintainer 排查。
- **上下文 token 浪费被广泛感知**：#67419 用户指出 MEMORY.md、SOUL.md、USER.md 等 7 个 bootstrap 文件每轮重复注入，多轮对话中浪费 20–30% 的 token 预算（2 个 👍）。这是**成本敏感型用户的直接诉求**。
- **Cron 会话幻觉输出威胁信任安全**：#49876 报告 cron 会话在工具失败后编造看似合理的输出并发送给用户，而非按 instruction 静默或报错。用户称这是"trust and safety issue"。
- **子代理 MCP 工具的缺失造成工作流断裂**：#85030（6 个 👍）详细描述了 sessions_spawn 子代理拿不到任何 MCP 工具 schema，即便配置了 bundle-mcp、per-tool allowlist、per-agent allowlist 全部无效，导致依赖 MCP 的多 agent 工作流完全不可用。
- **正向信号**：多个修复 PR（如 #120075 网关卡顿、"thread switched branches" 误报 #115700）在 issue 反馈后数天内即产出修复，社区对 **响应速度认可度较高**。

---

## 8. 待处理积压

### 高风险长期未决（建议优先关注）

| 类型 | 编号 | 标题 | 创建 | 时长 | 备注 | 链接 |
|---|---|---|---|---|---|---|
| P0 Bug | #91588 | Gateway 内存泄漏（350MB→15.5GB，OOM 崩溃） | 2026-06-09 | 2 个月 | 无 fix PR，影响面覆盖所有长时间运行的 gateway | [查看](https://github.com/openclaw/openclaw/issues/91588) |
| P0 Bug | #101290 | CLI 预检损坏状态 DB | 2026-07-07 | 1 个月 | 无 fix PR，数据损坏级事故 | [查看](https://github.com/openclaw/openclaw/issues/101290) |
| P1 Bug | #67419 | Bootstrap 重复注入浪费 20–30% tokens | 2026-04-15 | 近 4 个月 | 社区持续关注，与 #22438 可合并设计 | [查看](https://github.com/openclaw/openclaw/issues/67419) |
| P1 Bug | #85030 | MCP 工具不注入子代理 | 2026-05-21 | 2.5 个月 | 6 个 👍，社区高赞 | [查看](https://github.com/openclaw/openclaw/issues/85030) |
| 功能 | #7707 | Memory Trust Tagging by Source | 2026-02-03 | 半年 | 长期 needs-product-decision，社区呼声高 | [查看](https://github.com/openclaw/openclaw/issues/7707) |
| PR | [#80396](https://github.com/openclaw/openclaw/pull/80396) | MEDIA: token 在代码块内被跳过时无警告 | 2026-05-10 | 3 个月 | 待合并，社区等待时间过长 | [查看](https://github.com/openclaw/openclaw/pull/80396) |
| PR | [#113902](https://github.com/openclaw/openclaw/pull/113902) | 防止已卸载 npm 插件复活 | 2026-07-25 | 2 周 | 维护者 steipete 提交，状态 ready | [查看](https://github.com/openclaw/openclaw/pull/113902) |

---

**总结**：OpenClaw 项目在 2026-08-08 展现出高强度的社区活跃度与持续的 PR 合入节奏，CI/QA 基础设施稳步加固。但**四个 P0 级稳定性问题全部悬而未决**（内存泄漏、DB 损坏、过早压缩、迁移失败），且 #91588 已持续两个月，正在消耗社区信任。建议维护团队下一阶段将重心从功能迭代转向 P0/P1 稳定性攻坚，同时尽快对 408 条待合并 PR 做一次存量清理与批量合并。

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告（2026-08-08）

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**高速扩张与分化并存的阶段**：以 OpenClaw 为绝对核心（单日 500 Issue + 500 PR）的头部项目已形成规模化的社区协作与自动化维护流水线，而 Hermes、IronClaw、ZeroClaw 等第二梯队项目也维持着 50+ 量级的高活跃度。生态整体从"功能堆叠"转向**稳定性攻坚与架构治理**——多个项目同时出现模型静默失败、记忆/上下文管理、安全隔离、MCP 工具链标准化等共性痛点。与此同时，分化出桌面工作台（CoPaw、LobsterAI）、边缘低功耗（PicoClaw）、企业级沙箱（IronClaw）等差异化路线。值得警惕的是，**大量 P0/P1 级缺陷（内存泄漏、密钥泄漏、沙箱绕过）在多项目中同时积压**，说明生态在快速迭代中正付出稳定性代价。另有 4 个项目（NullClaw、TinyClaw、Moltis、ZeptoClaw）处于停滞状态，显示出生态的淘汰与洗牌已在发生。

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（467/33） | 500（408/92） | 无 | 活跃度断层第一，合并率 18.4% 正常；但 4 个 P0 无 fix PR，风险高 |
| **Hermes Agent** | 50（46/4） | 50（45/5） | 无 | 架构重构期（god-file 分解），3 个 P1 长期无修复 |
| **IronClaw** | 50（36/14） | 50（38/12） | 无 | 高活跃+质量护栏强（doc-truth/沙箱/压测），P1 集中于基础设施 |
| **ZeroClaw** | 50（43/7） | 50（48/2） | 无 | 高活跃但安全风险偏高：密钥泄漏、forbidden_paths 绕过 |
| **CoPaw** | 31（20/11） | 47（26/21） | ✅ v2.1.0-beta.2 | 快速迭代，社区贡献活跃；MCP 失效/doom loop 待解 |
| **NanoBot** | 9（7/2） | 21（10/11） | 无 | 健康度良好，合并节奏平衡；token 可观测性诉求突出 |
| **LobsterAI** | 6（3/3） | 7（1/6） | ✅ 2026.8.7 | 最稳健：发布流顺畅、Bug 闭环快，中等活跃 |
| **PicoClaw** | 4（3/1） | 14（12/2） | 无 | 核心维护在推进，但 PR 积压（含 37 天未合并功能 PR）明显 |
| **NanoClaw** | 1（1/0） | 10（8/2） | 无 | 中等活跃，有一项 3 个月未合入的关键修复 |
| NullClaw / TinyClaw / Moltis / ZeptoClaw | 0 | 0 | 无 | 无活动，实质停滞 |

## 3. OpenClaw 在生态中的定位

- **社区规模碾压级领先**：单日 Issue/PR 更新量为第二梯队（Hermes/IronClaw/ZeroClaw）的 **10 倍**，是当之无愧的生态参照系。408 条待合并 PR 的绝对积压虽大，但相对规模其合并吞吐（92 条/日）仍是全生态最高。
- **技术路线差异**：并非单一 Agent 框架，而是**完整的个人 AI 助手运行时**——Gateway 网关、Workboard 工作台、队列语义、插件体系、ClawSweeper 自动化修复流水线，覆盖从消息路由到会话状态管理的全链路。
- **独特优势**：① 基础设施持续沉淀（CI 可靠性、QA 覆盖、Windows 目标支持）；② 社区响应速度快，热点 Issue（如网关卡顿 #120075）数天内即有修复；③ 自动化维护（ClawSweeper）已能持续产出修复 PR。
- **核心风险**：P0 问题积累时间过长（内存泄漏 #91588 已 2 个月、DB 损坏、迁移失败），且模型静默失败类问题（#116277，129 评论）正在消耗用户信任，这与其生态领导地位不相匹配。

## 4. 共同关注的技术方向

| 方向 | 涉及项目与具体诉求 |
|---|---|
| **失败可观测性与防静默失败** | OpenClaw #116277（DeepSeek 静默失败）、IronClaw #7247/#7246（虚构"GitHub 已连接""自动化运行中"）、ZeroClaw #9786（SOP 配置静默丢弃）、LobsterAI #2447（无结果无错误）、Hermes #81440（授权拒绝误报为成功）、NanoBot #5266（百万 token 消耗无日志）。共识：**宁可明确报错，拒绝静默失败** |
| **记忆与上下文治理** | OpenClaw #7707（记忆源信任标记）、#67419（bootstrap 重复注入浪费 20-30% token）；IronClaw #7185（跨会话记忆丢失，已有 PR #7365）；CoPaw #6772（ReMe 长期记忆）；Hermes #47349（可配置记忆后端）；NanoBot #5272（会话保留裁剪） |
| **安全边界与隔离** | ZeroClaw #9815（forbidden_paths 绕过）、#9386/#9813（API Key 泄漏）；NanoBot #5276/#5278（会话级沙箱、历史移出 workspace）；Hermes #81407（cron SSRF 防护）；IronClaw #7214（用户级沙箱）；OpenClaw #7707（记忆投毒防御）；CoPaw #6786（ACL 被重置） |
| **MCP 生态与工具链** | OpenClaw #85030（MCP 工具不注入子代理）；CoPaw #6732（MCP 周期性失效）；PicoClaw #3302（MCP OAuth 2.1）；ZeroClaw #9810（Agent Plugins 1.0 标准）；Hermes #80794（MCP 热重载 diff 误报）；NanoClaw #3190（Tavily MCP） |
| **多通道覆盖与一致性** | PicoClaw WhatsApp 405（#3320）、SimpleX/Tox 诉求（#3093）；NanoBot WhatsApp 音频（#5149）、Telegram 轮询失联（#5156）；NanoClaw Mattermost（#3199）与 Dial（#3050）；Hermes Telegram 10.1 消息被丢弃（#63485/#81368）；IronClaw Telegram/Slack bug 批量修复 |
| **Agent 循环与子代理生命周期** | CoPaw #6116/#6768（doom loop 无限循环）；OpenClaw 排队语义/子代理上下文治理；Hermes #79278（压缩导致非幂等重放）；ZeroClaw #9805（SOP 卡死占用并发槽位） |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构特征 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手 + 插件/工作台生态 | 开发者、重度自托管用户 | 大规模单体仓库，Gateway+Workboard，自动化维护流水线 |
| **Hermes Agent** | 研究型 Agent，多通道 + 桌面端（TUI） | 研究者、技术社区 | 巨型 god-file 集中式架构，正进行激进拆分重构 |
| **IronClaw** | 企业级 AI 工作负载，沙箱隔离/可观测性 | 企业、QA/测试环境 | Rust，Docker/Railway 沙箱，渐进式工具披露，doc-truth 文档管线 |
| **ZeroClaw** | 高自动化、安全敏感 Agent 平台 | 安全/自动化用户，树莓派玩家 | Rust，SOP 引擎，硬件能力（aardvark），严格安全边界 |
| **CoPaw** | 桌面级 AI 工作台 + 国内模型生态 | 国内桌面用户 | 桌面应用 + ReMe 记忆 + 邮件/审批流 + OneBot/微信渠道 |
| **PicoClaw** | 超低功耗边缘 AI 助手 | 嵌入式、低成本硬件玩家 | Go，$10 硬件、<10MB RAM、亚秒级启动 |
| **NanoBot** | 轻量多通道个人助手 | 个人用户 | 轻量部署，会话归档（Dream 记忆）、多通道适配 |
| **LobsterAI** | 企业 IM/桌面集成助手 | 网易系/企业用户 | 桌面应用 + Cowork，与 OpenClaw 配置体系兼容 |

## 6. 社区热度与成熟度

- **快速迭代期**：**OpenClaw**（功能与基础设施并进但 P0 积压）、**Hermes**（架构重构优先，插件接口标准化中）、**CoPaw**（beta 快速发版，首次贡献者活跃）、**ZeroClaw**（井喷式提交但安全债累积）。
- **质量巩固期**：**IronClaw** 最为典型——doc-truth 文档管线、沙箱配置、压测补强、bug_bash 批量关闭，工程护栏意识领先；**LobsterAI** 发布节奏稳定、Bug 闭环快；**NanoBot** 合并/关闭比例均衡（11/21），无明显积压。
- **跟进/承压期**：**PicoClaw** 与 **NanoClaw** 有实质贡献但 PR 长期搁置，维护者吞吐不足，若不清理积压恐打击贡献者积极性。
- **停滞期**：NullClaw、TinyClaw、Moltis、ZeptoClaw 无任何活动，生态已开始分化淘汰。

## 7. 值得关注的趋势信号

1. **"防静默失败"成为产品底线**：从 OpenClaw 的 DeepSeek 事件到 IronClaw 的"虚假确认"系列，用户对模型/Agent 的可观测性要求已从"功能需求"上升为"信任前提"。对开发者：**为所有失败路径设计显式反馈机制，是下一阶段 AI 应用的基本盘**。

2. **记忆/上下文成本治理是下一竞争焦点**：多个项目同时指向 token 浪费（OpenClaw 20-30% bootstrap 开销）、记忆不可靠（IronClaw）、成本不可见（NanoBot 百万 token）。记忆分层、信任标记、按需注入将取代简单 RAG 成为新的技术分水岭。

3. **安全左移已不可避免**：ZeroClaw 的密钥泄漏与沙箱绕过、NanoBot 的会话隔离、IronClaw 的用户级沙箱——**安全不再只是加固项，而是架构必选项**。Agent 具备文件读写和工具调用能力后，多租户隔离与密钥脱敏的优先级应高于新功能开发。

4. **Agent 自循环治理是普遍盲区**：CoPaw 的 doom loop、ZeroClaw 的 SOP 卡死、Hermes 的压缩重放，说明**运行时对 Agent 执行的可终止性、幂等性和资源上限缺乏硬约束**，这是所有面向生产环境的 Agent 平台需要补的课。

5. **渠道层正在成为标配但一致性难做**：WhatsApp/Telegram/Mattermost/钉钉/OneBot 等渠道接入在多个项目并行发生，但**渠道间能力不对等**（Telegram 有会话管理而 Web 有；WhatsApp 不能发音频）成为普遍用户痛点。渠道抽象层的标准化仍有大空间。

6. **架构重构信号密集**：Hermes 的 god-file 强制拆分、ZeroClaw 的统一 provider 架构、IronClaw 的 doc-truth 管线，均指向同一趋势——**随着 Agent 项目体量膨胀，工程成熟度（文档-行为一致性、模块边界、状态兼容性验证）正取代功能数量成为项目健康度的核心指标**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-08

## 1. 今日速览

过去 24 小时 NanoBot 项目保持活跃：共产生 9 条 Issue 更新（其中 7 条新开/活跃，2 条已关闭）和 21 条 PR 更新（其中 11 条已合并/关闭，10 条仍在待审）。无新版本发布。Issue 侧的主要讨论集中在 token 消耗追踪（#5266）、音频消息发送（#5149）及会话安全隔离（#5276/#5278）；PR 侧则围绕 WebUI 修复、WeChat/Matrix 通道加固、会话保留策略与文件隔离等方向密集推进，整体项目健康度良好，社区参与度较高。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日有 11 条 PR 被合并/关闭，覆盖通道稳定性、WebUI、会话保留、内存归档、依赖文档等多个方向：

- **会话保留与 Dream 记忆归档**：
  - [PR #5272](https://github.com/HKUDS/nanobot/pull/5272) 修复会话保留裁剪时误删 `_channel_delivery` 主动投递消息的问题（关闭 #5273）。
  - [PR #5280](https://github.com/HKUDS/nanobot/pull/5280) 与 [PR #5231](https://github.com/HKUDS/nanobot/pull/5231) 完成短空闲会话向 Dream 的归档链路，使 `history.jsonl` 能覆盖更完整的会话输入源。
- **WebUI 体验及路由**：
  - [PR #5268](https://github.com/HKUDS/nanobot/pull/5268) 在历史消息读取时将 media root 之外的附件 staging 为签名 URL，修复刷新后 `media_urls` 丢失的问题（关闭 #5264）。
  - [PR #5285](https://github.com/HKUDS/nanobot/pull/5285) 修复新建 topic 后路由被乐观更新踩掉的问题；[PR #5284](https://github.com/HKUDS/nanobot/pull/5284) 删除不再被调用的旧 session messages 路由。
  - [PR #5281](https://github.com/HKUDS/nanobot/pull/5281) 优化活动列表的淡入淡出边缘效果；[PR #5277](https://github.com/HKUDS/nanobot/pull/5277) 支持在模型预设列表中内联展开编辑器。
- **Web/WeChat 通道**：
  - [PR #5263](https://github.com/HKUDS/nanobot/pull/5263) 对齐 Weixin 协议头、QR 验证、生命周期通知，并加固出站投递与登录流程。
  - [PR #5287](https://github.com/HKUDS/nanobot/pull/5287) 保留全局 `sendProgress`/`sendToolHints` 默认值，防止通道级覆盖。
- **依赖与文档**：[PR #5282](https://github.com/HKUDS/nanobot/pull/5282) 将 Langfuse/Olostep/WeChat 等依赖修复指南统一为 `nanobot plugins enable ...` 命令，并更新相关文档。

整体来看，项目在会话生命周期管理、WebUI 健壮性和多通道兼容性上均有实质推进。

## 4. 社区热点

- **[Issue #5266 — Logs about token consumption](https://github.com/HKUDS/nanobot/issues/5266)**（评论 10 条）  
  用户反馈在无明显操作的情况下，2 小时内消耗了约百万级 token，要求记录每个调用/时间点的 token 用量以便追踪。这是当日讨论热度最高的话题，反映用户对 token 成本可观测性的强烈需求。

- **[Issue #5149 — no audio ?](https://github.com/HKUDS/nanobot/issues/5149)**（评论 5 条）  
  WhatsApp 通道无法发送音频文件（可接收不可发送），已持续多日未关闭，用户等待修复。

- **[Issue #5276 — Allow enforcing session-level temporary file isolation](https://github.com/HKUDS/nanobot/issues/5276)**（评论 2 条）  
  提出即使开启 `restrictToWorkspace` 和 bwrap 沙箱，`~/.nanobot/workspace` 仍是所有会话共享的全局目录，无法满足多会话/多租户隔离需求。

这些热点共同指向：**成本可观测性、通道能力完整度、会话级安全隔离**是当前社区最关心的三个方向。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue/PR | 描述 | 状态 |
| --- | --- | --- | --- |
| 高 | [#5256](https://github.com/HKUDS/nanobot/issues/5256) | 单个 `/goal` 消息触发数十条近似重复回复，直到用户干预或模型自我终止 | OPEN，暂无 fix PR |
| 中 | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 无法发送音频消息，涉及 ffmpeg 链路 | OPEN，暂无 fix PR |
| 中 | [#5273](https://github.com/HKUDS/nanobot/issues/5273) | 会话保留裁剪会丢弃主动投递消息 | CLOSED，[PR #5272](https://github.com/HKUDS/nanobot/pull/5272) 已修复 |
| 中 | [#5264](https://github.com/HKUDS/nanobot/issues/5264) | 历史消息接口不返回 media root 之外文件的 `media_urls` | CLOSED，[PR #5268](https://github.com/HKUDS/nanobot/pull/5268) 已修复 |
| 中 | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | Telegram 轮询在瞬时网络故障后静默失联，进程存活但不再接收消息 | OPEN，待合并 |

另有安全类 Issue [#5278](https://github.com/HKUDS/nanobot/issues/5278) 指出会话历史存放在 agent workspace 内，存在被 agent 自身读取/泄露的风险，已由 [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) 提出修复方案（将历史移出 workspace），当前待审。

## 6. 功能请求与路线图信号

- **Token 消耗日志**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）  
  用户核心诉求是成本可控与可观测性。结合近期对话类项目普遍的成本治理趋势，该功能有较大概率被纳入后续版本。

- **Telegram Sticker 与主动消息反应**（[#5289](https://github.com/HKUDS/nanobot/issues/5289)）  
  由 bot 账号提出，要求支持发送 sticker 及 agent 主动添加消息反应。属于 Telegram 通道体验补齐，方向明确，可能被纳入通道完善路线。

- **会话级沙箱隔离**（[#5276](https://github.com/HKUDS/nanobot/issues/5276)）  
  已有对应实现 [PR #5283](https://github.com/HKUDS/nanobot/pull/5283)（per-session sandbox mode），若合并将极大增强多会话安全边界，看后续审查进度。

- **会话历史移出 workspace**（[#5278](https://github.com/HKUDS/nanobot/issues/5278)）  
  [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) 已提出将 session 历史从 `<workspace>/sessions/` 迁出，这是一个安全增强的方向性决策，预计会在近期合入。

## 7. 用户反馈摘要

- **成本敏感度**：用户在 [#5266](https://github.com/HKUDS/nanobot/issues/5266) 中明确表示 token 消耗“巨大”，且与用户可见活动不匹配。这说明在真实使用中，后台 agent 循环、重试或工具调用可能正在造成隐性成本，用户需要更细粒度的计费/日志能力来审计。
- **通道完整性**：语音/音频在 WhatsApp（[#5149](https://github.com/HKUDS/nanobot/issues/5149)）无法发送，且 Telegram 轮询静默失联（[#5156](https://github.com/HKUDS/nanobot/pull/5156)）影响生产可用性。用户对多通道的能力一致性有较高期待。
- **交互异常**：`/goal` 消息的重复回复（[#5256](https://github.com/HKUDS/nanobot/issues/5256)）严重干扰对话，用户需要介入干预才能终止，说明 agent 循环检测与终止机制仍需加强。
- **安全与隔离**：多会话/多用户场景下，用户对 workspace 共享状态表示担忧（[#5276](https://github.com/HKUDS/nanobot/issues/5276)、[#5278](https://github.com/HKUDS/nanobot/issues/5278)），希望有更强的隔离边界，尤其是当 agent 具有文件读写能力时。

## 8. 待处理积压

- **[PR #4276 — model-agnostic computer use](https://github.com/HKUDS/nanobot/pull/4276)**（创建 2026-06-10，已近 2 个月未合并）  
  这是功能量级较大的一项 PR（computer_use + browser 工具），涉及 PyAutoGUI/Playwright 后端，长期停留 OPEN，建议维护者明确其路线图位置，避免社区贡献者等待过久。

- **[PR #5156 — fix(telegram) recover from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156)**（创建 2026-07-29，10 天未合并）  
  修复生产环境中 Telegram 轮询静默失联的问题，直接影响稳定性，建议优先审查。

- **[Issue #5149 — no audio ?](https://github.com/HKUDS/nanobot/issues/5149)**（创建 2026-07-28，10 天未关闭）  
  WhatsApp 音频发送问题长期未获修复，影响通道完整性，建议尽快安排处理。

- **[Issue #5256 — /goal duplicate replies](https://github.com/HKUDS/nanobot/issues/5256)**（创建 2026-08-05，3 天未关闭）  
  涉及 agent 循环控制的核心交互体验，需评估是否需要紧急修复或快速定位根因。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-08

数据来源：github.com/nousresearch/hermes-agent | 统计窗口：2026-08-07 至 2026-08-08

---

## 1. 今日速览

过去 24 小时项目保持**高活跃度**：共 50 条 Issue 更新（新开/活跃 46、关闭 4）与 50 条 PR 更新（待合并 45、合并/关闭 5），无新版本发布。今日最受关注的话题是 `#78647` god-file 分解 Epic（单日累计 60 条评论）与 `#64182` 插件接口扩展计划（30 条评论），两者均指向项目正在经历一次**架构级重构**。与此同时，3 个 P1 级 Bug 仍在跟踪中（上下文压缩丢失工具链、OAuth HTTP 400、重启时压缩崩溃），尚无对应修复 PR，需关注。整体判断：社区贡献活跃、维护者响应较快，但高优先级缺陷的修复速度与架构重构的推进节奏需要平衡。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日关闭 4 个 Issue、5 个 PR（可见数据中）。虽然展示的 PR 列表中仅 `#81441` 被关闭（且标记为重复，说明已有同功能 PR 在途），但仍可从关闭的 Issue 与密集提交的新 PR 中看出项目推进方向：

**已关闭的 Issue（实际完成）：**
- **#11349** [类型: docs] Discord 集成文档六处与代码行为不一致，以及 `/voice join` 未出现在斜杠命令 UI 中的问题已解决 → [Issue #11349](https://github.com/NousResearch/hermes-agent/issues/11349)
- **#79331** [类型: bug] Telegram Rich Message 代码块缺少标准复制按钮，已通过回退到 MarkdownV2 路径修复 → [Issue #79331](https://github.com/NousResearch/hermes-agent/issues/79331)

**今日提交的重要 PR（待合并状态，体现当前开发重心）：**

| 领域 | PR | 说明 |
|---|---|---|
| 上下文压缩 | [#81444](https://github.com/NousResearch/hermes-agent/pull/81444) | 修复 #80449：拆分超长活动轮次，按工具组对齐边界截断，不再保留整个超限轮次 |
| cron 安全 | [#81407](https://github.com/NousResearch/hermes-agent/pull/81407) | 监控型 cron 任务增加 SSRF 防护（每一跳 URL）、保留源字节身份、防止并发编辑静默丢失变更 |
| cron 可靠性 | [#81443](https://github.com/NousResearch/hermes-agent/pull/81443) | 持久化区分投递成功/静默/失败/配置阻断等结果，连续 3 次失败自动暂停并告警 |
| MCP 热重载 | [#80794](https://github.com/NousResearch/hermes-agent/pull/80794) | `/reload-mcp` 的 diff 改为基于配置而非实时 socket，避免误报 removed/reconnected |
| 网关消息发送 | [#80743](https://github.com/NousResearch/hermes-agent/pull/80743) | 显式指定但无法解析的发送目标不再静默回退到 home 频道，而是拒绝执行 |
| 桌面端 | [#80806](https://github.com/NousResearch/hermes-agent/pull/80806) | Desktop 会话 pin 按 gateway + profile 隔离，防止不同网关间的写入互相污染 |
| 上下文文件 | [#80781](https://github.com/NousResearch/hermes-agent/pull/80781) | 支持 git 根目录到 cwd 的 AGENTS.md 目录链合并（移植自 grok-cli），monorepo 场景受益 |
| 记忆/客户端 | [#81401](https://github.com/NousResearch/hermes-agent/pull/81401) | Honcho SDK 客户端替换时关闭旧 HTTP 连接池，防止资源泄漏 |
| 文件工具 | [#80744](https://github.com/NousResearch/hermes-agent/pull/80744) | 为 file_tools.py 增加 docker_env、docker_extra_args、docker_persist_across_processes 三个沙箱配置项 |

> 另有关闭的 PR #81441 为 Windows 搜索路径修复（ripgrep 原生路径/原始正则），因重复被关闭，说明同主题修复已被其他 PR 覆盖 → [PR #81441](https://github.com/NousResearch/hermes-agent/pull/81441)

**总体判断**：项目正从“功能扩张”转向“架构治理+稳定性加固”——god-file 分解、插件接口标准化、cron 安全加固、压缩器边界情况修复是当前四条主线；45 个待合并 PR 也表明贡献者积极性很高，但合并吞吐可能成为瓶颈。

---

## 4. 社区热点

**#78647 — Epic: Shard all 20 god files（60 条评论，P3, refactor）**
> 链接：[Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647)

绝对热度最高的议题，自 8 月 4 日创建以来已积累 60 条评论。Issue 明确“all god files are sharded, never reverted”的 2026-08 强制政策。社区对 god-file 拆分的具体边界、共享接口设计、迁移顺序有大量讨论。这是项目架构演进的重要信号——20 个巨型文件的拆分将影响所有后续 PR 的代码布局。

**#64182 — Plugin Interface Expansion tracking（30 条评论，P3, needs-decision）**
> 链接：[Issue #64182](https://github.com/NousResearch/hermes-agent/issues/64182)

由 teknium1 发起的插件接口扩展参考计划，源于 Discord 社区 7 月 4 日的 #plugins-interface-ideas 讨论。诉求核心是让积压已久的插件类 PR 能基于稳定接口落地。该 Issue 与今日大量插件相关 PR（#81435 composer bridge、#81018 email 会话隔离、#49157 图像生成插件等）形成呼应——社区在等待接口规范定型。

**#17565 — 可配置 Temperature 参数（11 条评论，👍 13）**
> 链接：[Issue #17565](https://github.com/NousResearch/hermes-agent/issues/17565)

今日虽无新评论，但 13 个 👍 在展示的 30 条 Issue 中最高，说明该问题在社区中有广泛共鸣。用户反映硬编码 `_fixed_temperature_for_model()` 导致严重幻觉。这是一个“小额改动、大范围受益”的典型需求，已持续 3 个多月仍未解决，值得维护者优先评估。

**#13332 — Hybrid Tool Pre-Selection（9 条评论，👍 4）**
> 链接：[Issue #13332](https://github.com/NousResearch/hermes-agent/issues/13332)

针对“每次 API 调用注入全部工具 schema 约 14,000 token”的 token 开销问题，提出语义+关键词混合预选方案。与 #6839（懒加载两段式）形成竞争方案。在长上下文和成本敏感场景下，这是社区关注度持续走高的方向。

---

## 5. Bug 与稳定性

按严重程度排列，并标注是否有对应修复 PR：

### P1（严重，需优先响应）

| Issue | 问题描述 | Fix PR 状态 |
|---|---|---|
| [#79278](https://github.com/NousResearch/hermes-agent/issues/79278) | 预压缩在工具链执行中触发，导致工具结果丢失、智能体误判失败并重放侧效应——对非幂等操作不安全 | ❌ 无专门 PR（#81444 仅覆盖同族问题 #80449，未涉及 in-flight 场景） |
| [#65365](https://github.com/NousResearch/hermes-agent/issues/65365) | Anthropic OAuth（Claude Pro/Max）连接下，暴露 `memory` 或 `session_search` 工具 schema 会确定性触发 HTTP 400 “out of extra usage” | ❌ 无 PR |
| [#79624](https://github.com/NousResearch/hermes-agent/issues/79624) | Gateway 重启时若会话超过 98,304 token 预压缩阈值，preflight 压缩直接 exit(1) 崩溃 | ❌ 无 PR |

### P2（中等严重）

| Issue | 问题描述 | Fix PR 状态 |
|---|---|---|
| [#80449](https://github.com/NousResearch/hermes-agent/issues/80449) | 单个超长工具调用轮次被完整保留在受保护尾部，预算被击穿且无轮中摘要 | ✅ [#81444](https://github.com/NousResearch/hermes-agent/pull/81444)（8 月 8 日提交） |
| [#81440](https://github.com/NousResearch/hermes-agent/issues/81440) | Discord 机器人对未授权消息回 👀 再换 ✅，授权拒绝被记录为成功轮次，误导用户 | ❌ 新 Issue（8 月 8 日），无 PR |
| [#80968](https://github.com/NousResearch/hermes-agent/issues/80968) | Windows 下 `hermes --tui` 输入命令后 gateway 退出崩溃（Windows Terminal/ConPTY） | ⚠️ 标记为 duplicate，说明已有跟踪 |
| [#54523](https://github.com/NousResearch/hermes-agent/issues/54523) | Tailscale 远程桌面场景下异步路由阻塞 asyncio 循环 10-25s，WS 饥饿，叠加 Chromium/Electron 网络问题 | ❌ 无 PR（Issue 含详细服务器端修复建议） |
| [#22418](https://github.com/NousResearch/hermes-agent/issues/22418) | macOS Atomic Hermes 桌面 gateway 与 CLI `--replace` 冲突，Discord token 锁被占用 | ❌ 无 PR |
| [#81290](https://github.com/NousResearch/hermes-agent/issues/81290) | Windows 上第二个 Desktop 窗口完全黑屏，无生命周期诊断，同日复发两次 | ❌ 无 PR（needs-repro） |

### 其他今日 PR 修复的 Bug（待合并状态）

- **#80794** — `/reload-mcp` 基于实时 socket diff 导致误报 removed/reconnected → [PR #80794](https://github.com/NousResearch/hermes-agent/pull/80794)
- **#81436** — 自定义 OpenAI-compatible 端点返回 dict/str 时 `vars(response)` 崩溃 → [PR #81436](https://github.com/NousResearch/hermes-agent/pull/81436)
- **#80743** — 显式发送目标无法解析时静默回退到 home 频道 → [PR #80743](https://github.com/NousResearch/hermes-agent/pull/80743)
- **#79031** — DingTalk Stream 约 3 分钟无消息后 WebSocket 静默假死（TCP 保持 ESTABLISHED）→ [PR #79031](https://github.com/NousResearch/hermes-agent/pull/79031)
- **#81441** — Windows 下 `search_files` ripgrep 路径转写失败 + 反斜杠正则 0 匹配（已关闭，重复）→ [PR #81441](https://github.com/NousResearch/hermes-agent/pull/81441)

**观察**：3 个 P1 Bug 均无对应修复 PR，且其中两个已存活超过 3 天（#79278 创建于 8/5，#79624 创建于 8/5，#65365 创建于 7/16 已近一个月）。压缩子系统（#79278/#79624/#80449）是当前稳定性短板，今日 #81444 的提交说明维护者已在该区域发力，但 in-flight 工具链安全与重启崩溃两个问题仍悬而未决。

---

## 6. 功能请求与路线图信号

### 高潜力需求（P2 + needs-decision / 高赞）

- **#47349** — 可配置记忆后端：停用 memory.md，改用 honcho/fact_store（P2, needs-decision, 15 条评论）→ [Issue #47349](https://github.com/NousResearch/hermes-agent/issues/47349)。结合今日 #81401（Honcho 客户端资源修复），记忆后端正在成为活跃开发方向。
- **#17565** — 可配置 temperature（👍 13 为全站最高）→ [Issue #17565](https://github.com/NousResearch/hermes-agent/issues/17565)。虽然是 P3，但用户呼声极高，且改动范围小（暴露配置文件 + 移除硬编码），**建议下一版本优先纳入**。

### 新提交的功能请求（8 月 7-8 日）

- **#81438** — 可中断的每工具执行租约/看门狗：绝对截止时间、心跳、结构化超时结果 → [Issue #81438](https://github.com/NousResearch/hermes-agent/issues/81438)
- **#81405** — First-class Teams：持久化多 profile 团队，含 Quick Chat、Managed Work、频道、共享能力（P3, needs-decision）→ [Issue #81405](https://github.com/NousResearch/hermes-agent/issues/81405)（与现有 Kanban/Profiles 原语形成互补，路线图价值高）

### 路线图信号（结合今日 PR 看）

- **插件接口标准化**：社区在 #64182 明确诉求“稳定公开接口，让积压 PR 落地”，今日 #81435（composer render/edit bridge）、#81018（email 会话隔离）、#49157（OpenAI 兼容图像生成）均为插件生态扩展类 PR → 说明插件接口扩大已进入实质实施阶段。
- **上下文/工具链可靠性**：#81444（超长轮次拆分）+ 社区对 #79278 的持续讨论表明，压缩器正在从“保预算”转向“保语义完整性”，这是下一迭代的重要方向。
- **AGENTS.md 目录链**：#80781 合并 git 根到 cwd 的目录链后，monorepo 用户将获得更完整的上下文；若合并，将是“与 grok-cli 对齐”的一次实质功能增强。
- **显示层可配置性**：#81439（CLI/TUI/Desktop 统一时间戳格式）为后续 UI 定制化打开入口。

---

## 7. 用户反馈摘要

以下反馈从今日活跃的 Issue 评论中提炼：

**痛点 1：模型行为不可控**
> #17565 用户明确表示硬编码 temperature 导致“严重幻觉”（severe hallucinations），13 人点赞认同。→ 用户期望至少能通过配置文件覆盖默认值。

**痛点 2：调试模式下系统规则失效**
> #40662 用户描述进入深度调试模式（连续终端/读/写调用）后，智能体“持续无视系统提示中的调试纪律”，无论规则放在 SOUL.md、persona.md 还是 AGENTS.md 中均无效。→ 用户提出 PreToolUse 强制钩子的需求，本质上需要**工具调用前的硬性拦截机制**。

**痛点 3：压缩导致的不安全重放**
> #79278 用户指出压缩触发时工具副作用已完成但结果丢失，智能体重放步骤对非幂等操作有安全风险。→ 用户期待“面向语义安全”的压缩策略，而非纯 token 预算驱动。

**痛点 4：授权拒绝的误导性反馈**
> #81440 用户反馈 Discord 机器人对未授权者回 ✅，让人误以为“已收到但没回应”，实际是授权拒绝被计为成功。→ 用户希望授权失败有显式、清晰的错误反馈。

**痛点 5：Telegram 10.1 兼容性缺口**
> #63485/#81368 两个 Issue 指向同一问题：Bot API 10.1 顶级 `rich_message` 更新被 PTB 过滤器静默丢弃（用户发消息后智能体毫无反应，且无日志）。该问题已有重复提交，说明 Telegram 用户群体受影响较广。

**痛点 6：Windows 桌面端体验粗糙**
> #81290（二次窗口黑屏）、#80946（本地路径 C:\... 无法打开）、#80968（TUI 崩溃）三个 Windows 专属问题同日活跃，反映出**桌面端在 Windows 平台的质量欠账**在累积。

**肯定方面**：#31584 等长尾 Issue 虽未解决，但用户“让 AI 代笔写 Issue”的行为本身说明工具链的价值被认可；#54523 的用户提供了非常详尽的诊断（含 asyncio 阻塞点定位与修复建议），属于高质量的社区协作信号。

---

## 8. 待处理积压（需维护者关注）

以下为长期未响应或状态模糊的重要 Issue/PR，建议优先排期：

| 编号 | 创建时间 | 类型 | 说明 |
|---|---|---|---|
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | 2026-04-29 | 功能请求 | temperature 配置，👍 13，3 个多月未解决，仍停在 needs-decision |
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | 2026-04-21 | 功能请求 | 混合工具预选（语义+关键词）以削减 14k token 开销，近 4 个月未响应 |
| [#22418](https://github.com/NousResearch/hermes-agent/issues/22418) | 2026-05-09 | Bug（P2） | macOS 桌面 gateway 与 CLI `--replace` 的 Discord token 锁冲突，3 个月未解决 |
| [#509](https://github.com/NousResearch/hermes-agent/issues/509) | 2026-03-06 | 功能请求 | 认知记忆操作（LLM 驱动编码/整合/自适应召回），5 个月未动，P3 + 4 👍 |
| [#49157](https://github.com/NousResearch/hermes-agent/pull/49157) | 2026-06-19 | PR（功能） | OpenAI 兼容图像生成插件，已近 2 个月仍标记 duplicate 但未关闭，状态模糊，建议明确处理 |
| [#76257](https://github.com/NousResearch/hermes-agent/pull/76257) | 2026-08-01 | PR（Bug fix） | dashboard 死键/IME 输入不转发到 PTY，一周未获得 review，Windows/非英文输入法用户受影响 |
| [#57364](https://github.com/NousResearch/hermes-agent/issues/57364) | 2026-07-02 | 功能请求 | pre_llm_message 插件钩子（隐私/脱敏中间件），涉及 fail-closed 路径，1 个多月未响应 |

**重点提醒**：P1 Bug #65365（OAuth HTTP 400）自 7 月 16 日创建、已有 8 条评论，涉及 Claude Pro/Max 订阅用户核心体验，目前仍无维护者明确表态或指派，建议本周内至少给出初步回应。

---

*本日报由数据自动分析生成，链接均指向 GitHub 原始 Issue/PR。统计范围为 2026-08-07 至 2026-08-08 快照数据，部分被截断的条目未纳入展示。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-08

## 1. 今日速览

PicoClaw 在过去 24 小时整体活跃度中等偏稳定：共产生 4 条 Issue 更新（3 条活跃、1 条关闭）和 14 条 PR 更新（12 条待合并、2 条关闭），无新版本发布。值得关注的是，项目迎来了 3 个高质量的实质性修复 PR（WhatsApp 连接修复、exec 工具超时修复、prefix caching 优化），表明核心维护仍在推进；但与此同时，12 条待合并 PR 中包括 6 条 Dependabot 自动依赖升级以及多条已标记 stale 的功能 PR，合并积压问题日益明显，需要维护者及时处理。社区讨论热度主要集中在第三方通信网关需求（#3093）和代码质量审查（#3308）上，反映出用户对多平台接入和工程健壮性的双重关注。

## 2. 版本发布

过去 24 小时无新版本发布（最新 Releases 为空）。

## 3. 项目进展

过去 24 小时有 2 个 PR 被关闭，均为 Dependabot 自动依赖升级：

- **PR #3291** — `build(deps): bump github.com/github/copilot-sdk/go from 0.2.0 to 1.0.8` [链接](https://github.com/sipeed/picoclaw/pull/3291)（已关闭）
- **PR #3289** — `build(deps): bump github.com/pion/rtp from 1.10.2 to 1.10.5` [链接](https://github.com/sipeed/picoclaw/pull/3289)（已关闭）

这 2 个依赖更新保持了项目对 GitHub Copilot SDK 和 Pion RTP 库的跟随，但均非核心功能变更。**整体来看，过去 24 小时没有核心功能 PR 被合并，项目功能进展主要体现在待合并队列的推进上。**

值得注意的待合并实质性 PR（尚未合并）包括：

- **PR #3321** — `fix(agent): move dynamic context after history to preserve prefix caching` [链接](https://github.com/sipeed/picoclaw/pull/3321)：将动态上下文块移到对话历史之后以保留前缀缓存，直接优化 LLM 推理成本与延迟。
- **PR #3320** — `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"` [链接](https://github.com/sipeed/picoclaw/pull/3320)：升级 whatsmeow 依赖，修复 WhatsApp 信道因客户端版本过旧而被拒绝连接的问题。
- **PR #3319** — `fix(tools): honor exec timeout and boolean run options` [链接](https://github.com/sipeed/picoclaw/pull/3319)：修复 exec 工具忽略每次运行 timeout 参数以及 `background`/`pty` 布尔选项被声明为字符串的问题。

> ⚠️ 注意：这 3 个 PR 均为昨日（8 月 7 日）新提交，尚未获得 review/merge，项目进展受限于维护者的审查速度。

---

## 4. 社区热点

### 🔥 Issue #3093 — SimpleX/Tox 网关请求（评论最多，6 条）

- 作者：Damian-o2 | 创建于 2026-06-10 | 已于 2026-08-07 关闭 | 👍 1 [链接](https://github.com/sipeed/picoclaw/issues/3093)
- 内容：用户希望 PicoClaw 增加对 SimpleX、Wire 或 Tox 通信协议网关的支持。
- 分析：这是过去 24 小时中评论数最多的 Issue（6 条），虽已被关闭（可能因 stale 自动关闭），但仍反映出部分用户对**去中心化/隐私优先通信渠道**的明确需求。结合 Telegram 会话管理需求（#3307）和 WhatsApp 修复（#3320），可以看出**多聊天渠道接入**是当前社区最强烈的诉求方向之一。

### 📌 Issue #3308 — 代码审查：并发危险、goroutine 泄漏与优化建议

- 作者：Rehanasharmin | 创建于 2026-07-30 | 更新于 2026-08-07 [链接](https://github.com/sipeed/picoclaw/issues/3308)
- 内容：用户对 SeaHorse、Channel Manager 和 Hooks 模块提交了详细的代码审查报告，指出存在并发安全隐患、goroutine 泄漏风险，并给出了内存/速度优化建议；同时表达了"能在 $10 硬件、<10MB RAM、亚秒级启动的 Go AI 助手上运行是令人敬畏的"这一正面评价。
- 分析：高质量的社区代码审查是项目健康度的重要正向信号。该 Issue 已存在 9 天且标记为 stale，建议维护者积极响应——这类深度技术反馈对提升项目工程质量非常有价值。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高 — WhatsApp 信道无法连接（已有修复 PR）

- **症状**：WhatsApp 官方拒绝当前 whatsmeow 库所通告的客户端版本，socket 连接后约 5 秒被断开，错误码为 `Client outdated (405)`，且不会自动重连，导致原生 WhatsApp 信道完全不可用。
- **对应 PR**：#3320 `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"` [链接](https://github.com/sipeed/picoclaw/pull/3320)（8 月 7 日提交，待合并）
- **影响面**：所有使用 WhatsApp 信道的 PicoClaw 用户。

### 🟠 中 — exec 工具超时与布尔参数失效（已有修复 PR）

- **症状**：`exec` 工具声明支持单次运行的 `timeout` 参数，但同步执行时始终使用全局超时配置，静默忽略用户传入值；同时 `background` 和 `pty` 在工具 schema 中被错误声明为字符串（实际为布尔类型），导致执行逻辑异常。
- **对应 PR**：#3319 `fix(tools): honor exec timeout and boolean run options` [链接](https://github.com/sipeed/picoclaw/pull/3319)（8 月 7 日提交，待合并）

### 🟡 中 — 工具调用格式泄漏至 LLM 摘要（已有修复 PR，但已 stale）

- **症状**：在 seahorse 的 `partsToReadableContent` 路径中，工具调用的内部格式会泄漏到发送给 LLM 的用户消息摘要中，污染模型上下文。
- **对应 PR**：#3279 `fix(seahorse): prevent tool-call format leakage into LLM summaries` [链接](https://github.com/sipeed/picoclaw/pull/3279)（7 月 21 日创建，已标记 stale，待合并）

### 🟡 中 — 代码审查发现的潜在并发与资源泄漏问题（无对应修复 PR）

- **症状**：社区成员在 #3308 [链接](https://github.com/sipeed/picoclaw/issues/3308) 中指出 SeaHorse、Channel Manager 和 Hooks 中存在并发危险（concurrency hazards）、goroutine 泄漏风险，以及内存/速度优化空间。
- **状态**：目前无关联的修复 PR，需维护者确认并决定是否采纳。

---

## 6. 功能请求与路线图信号

### ✨ 高潜力需求 — 多通信渠道扩展

- **Issue #3307** — Telegram 会话列表/切换命令 [链接](https://github.com/sipeed/picoclaw/issues/3307)：Web UI 已有完整的会话管理（历史下拉菜单），但 Telegram 等其他聊天渠道缺少等价的会话列表、切换、删除能力。用户希望增加 `/sessions` 等斜杠命令。
- **Issue #3093** — SimpleX/tox 网关 [链接](https://github.com/sipeed/picoclaw/issues/3093)（已关闭，但评论活跃）：用户希望接入 SimpleX、Wire、Tox 等去中心化通信协议。

> **判断**：结合正在等待合并的 WhatsApp 修复 PR（#3320）和已合并的 DingTalk 图片支持（见 PR #3283，待合并），可以判断**渠道层功能（Telegram/WhatsApp/钉钉等）是当前社区的关注重点**，未来版本很可能继续加强多平台接入能力。

### ✨ 增强项 — OAuth 2.1 支持

- **Issue #3302** — 为 MCP server 支持 OAuth 2.1（与 #2546 相同需求）[链接](https://github.com/sipeed/picoclaw/issues/3302)：用户明确要求为 MCP 服务器添加 OAuth 2.1 认证支持。标记为 "Nice-to-Have / Enhancement"，而非核心功能。

### ✨ 已有实现/PR 支撑的功能

- **PR #3200** — 可配置默认模型回退链 [链接](https://github.com/sipeed/picoclaw/pull/3200)：在 Web UI 中增加默认模型+回退链的配置能力，可设置、排序并持久化完整的 fallback 链。
- **PR #3270** — 阿里云 DashScope TTS + 微信语音发送 [链接](https://github.com/sipeed/picoclaw/pull/3270)：新增 DashScope TTS provider，并支持在微信渠道中发送音频文件。
- **PR #3271** — 更新 9 家 provider 的默认模型名为 2026-07 最新版 [链接](https://github.com/sipeed/picoclaw/pull/3271)（如 OpenAI `gpt-5.6-terra/luna/sol` 系列）。

---

## 7. 用户反馈摘要

| 用户声音 | 来源 | 分析 |
|---------|------|------|
| "在 $10 硬件、<10MB RAM、亚秒级启动上运行原生 Go AI 助手，真的令人敬畏" | Issue #3308 [链接](https://github.com/sipeed/picoclaw/issues/3308) | 正面评价，确认了 PicoClaw 的核心价值主张（低成本边缘 AI）被用户认可。 |
| WhatsApp 信道完全不可用（`Client outdated (405)`），没有自动重连 | PR #3320 [链接](https://github.com/sipeed/picoclaw/pull/3320) | 真实用户痛点，说明聊天渠道稳定性直接影响用户的使用体验。 |
| `exec` 工具声明的 timeout 参数无效，后台/PTY 选项被当作字符串处理 | PR #3319 [链接](https://github.com/sipeed/picoclaw/pull/3319) | 用户依赖 `exec` 工具做自动化任务，参数行为与文档不一致会造成实际困扰。 |
| Web UI 有完整会话管理，但 Telegram 用户完全无法列出/切换会话 | Issue #3307 [链接](https://github.com/sipeed/picoclaw/issues/3307) | 不同渠道功能不对等，暴露了多平台体验一致性问题。 |
| 需要 SimpleX 或 Tox 网关，希望接入更多去中心化通信协议 | Issue #3093 [链接](https://github.com/sipeed/picoclaw/issues/3093) | 隐私敏感用户群体的潜在需求，目前 PicoClaw 对去中心化渠道覆盖不足。 |
| Concrete 代码审查：指出 goroutine 泄漏和并发安全隐患，同时表达对项目的赞赏 | Issue #3308 [链接](https://github.com/sipeed/picoclaw/issues/3308) | 资深 Go 开发者愿意花时间做深度 review，说明社区技术氛围良好。 |

---

## 8. 待处理积压

### ⚠️ 长期未响应的 Issue

| Issue | 创建时间 | 已标记 stale | 说明 |
|-------|---------|------------|------|
| [#3308](https://github.com/sipeed/picoclaw/issues/3308) 并发/goroutine 泄漏审查 | 2026-07-30 | ✅ | 已 9 天无维护者回应，高质量代码审查不应被忽略 |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) OAuth 2.1 支持 | 2026-07-30 | ✅ | 已 9 天无回应，与 #2546 重复，建议合并讨论 |
| [#3307](https://github.com/sipeed/picoclaw/issues/3307) Telegram 会话管理 | 2026-07-30 | ✅ | 已 9 天无回应 |
| [#3093](https://github.com/sipeed/picoclaw/issues/3093) SimpleX/tox 网关 | 2026-06-10 | ✅（已关闭） | 曾在近 2 个月保持 6 条评论的讨论热度后关闭，建议考虑重新开放或标记为 "future roadmap" |

### ⚠️ 长期未合并的 PR（stale）

| PR | 创建时间 | 天数 | 内容 |
|----|---------|------|------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) 可配置默认模型回退链 | 2026-07-01 | 37 天 | 完整功能实现，长期搁置风险高 |
| [#3279](https://github.com/sipeed/picoclaw/pull/3279) seahorse 工具调用格式泄漏修复 | 2026-07-21 | 17 天 | Bug 修复，影响 LLM 对话质量 |
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) 钉钉图片消息支持 | 2026-07-22 | 16 天 | 功能增强，渠道完善 |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) DashScope TTS + 微信语音 | 2026-07-20 | 18 天 | 功能增强 |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) 更新 9 家 provider 默认模型名 | 2026-07-20 | 18 天 | 时效性需求，越拖越容易过期 |

### 📊 积压点评

当前待合并 PR 总数达 12 条，其中 6 条为 Dependabot 自动升级，6 条为人工提交的实质功能/修复。**Dependabot PR 与实质性 PR 的堆积会影响项目迭代效率**——特别是 #3271（更新默认模型名）这类时效性较强的 PR，若不及时合并，很快会因模型版本再次更新而失效。建议维护者安排一次集中 review/merge 周期，优先处理 Bug 修复类（#3319、#3320、#3279）和时效性 PR（#3271），其次评估功能类 PR（#3200、#3270、#3283）。

---

**项目健康度总评**：核心代码仍在积极演进（3 个新修复 PR 昨日提交），社区贡献质量较高（详细代码审查、多语言 PR 说明），但 PR 积压与 stale 问题需引起重视，建议在下一迭代周期中优先清理队列、回应长期未处理的 Issue，以维持社区的积极性与项目的健康发展。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## 1. 今日速览

过去 24 小时 NanoClaw 整体处于功能开发与社区贡献双轮驱动的中高活跃状态：共产生 1 条新 Issue、10 条 PR 更新（其中 2 条关闭/合并）、无新版本发布。Mattermost 渠道集成在旧 PR #546 被否决后，以 v2 ChannelAdapter 为基础重新实现并提交（#3199），表明项目正稳步向新渠道架构迁移；另一条已关闭的 PR #3197 落地了失败状态展示优化，提升了 agent-runner 的可观测性。功能类 PR 集中于新增工具链与渠道接入（Tavily MCP、AnyDoc、Dial），修复类 PR 则覆盖数据库迁移、命令解析与挂载安全，整体健康度良好，但 Issue 讨论相对冷清，存在一定维护积压。

## 2. 版本发布

过去 24 小时内无新版本 Release。

## 3. 项目进展

今日关闭/合并的 PR 共 2 条，核心进展如下：

- **失败状态展示优化落地（#3197）**：修复了 agent-runner 中过程卡失败标题只展示工具动作、不展示具体原因的问题。现在会从失败摘要中提取首条有效原因，格式化为「动作失败：具体原因」，并复用脱敏逻辑、限制单行 38 字符。该 PR 包含 reducer 单测和飞书卡片 JSON 跨层测试，验证通过（定向测试 274 passed、全量测试 1427 passed），核心代码质量有保障。
  [PR #3197](https://github.com/nanocoai/nanoclaw/pull/3197)

- **旧 Mattermost 渠道方案正式关闭（#546）**：该 PR 针对 pre-v2 的 `Channel`/`registry.ts` 架构实现，因 `main` 分支已迁移到 `ChannelAdapter`/`channel-registry.ts` 而被关闭。这标志着旧渠道架构下的集成尝试正式退出，由新实现 #3199 接力，渠道扩展正在向统一的新架构收敛。
  [PR #546](https://github.com/nanocoai/nanoclaw/pull/546)

## 4. 社区热点

- **[Issue #3200] "The Cartographer"——外部认知处理架构讨论**：今日唯一的新 Issue，作者 cyserman 提出将 AI 助手视为用户的外部模块化认知框架——「地图绘制员」，用于排序、审查和保护用户快速多线程的思维，防止外部利用与内部散落。该 Issue 目前有 1 条评论、0 个赞，但它不像典型的 Bug 或 Feature Request，更像是对 AI 助手角色定位的深度探讨：用户希望助手以高度透明、一致的人格运作，承担「外部大脑」的功能。这一讨论背后反映出用户对 AI 助手个性化透明度与认知支持维度的期待，值得核心团队关注。
  [Issue #3200](https://github.com/nanocoai/nanoclaw/issues/3200)

- **[PR #3199] Mattermost 渠道集成重启**：作为 #546 的继任者，该 PR 基于新 `ChannelAdapter` 架构从零实现 Mattermost 集成，更新动作发生在昨日，是当前最核心的渠道扩展讨论点。Mattermost 作为开源协作平台，对应的集成请求从 2 月延续至今，说明这一功能在社区中有持续需求。
  [PR #3199](https://github.com/nanocoai/nanoclaw/pull/3199)

## 5. Bug 与稳定性

今日出现的 Bug 修复相关 PR 共 4 条，按严重程度排序如下：

- **高 —— 未知斜杠命令导致回复被静默丢弃（#2346）**：未知 slash 命令被归类为 `passthrough`，使 Agent SDK 将其错误解析为 Claude Code 命令，产生无 `<message>` 块的输出，最终响应被静默丢弃。该 PR 已提交修复，将未知命令回退到 `category: 'none'`。此问题直接影响用户对话体验，且已存在约 3 个月，建议尽快安排合入。
  [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)

- **中 —— 数据库目的地缺失回填（#3145）**：现有 messaging-group wirings 缺少 channel destinations，通过新增迁移 021 为已有 wirings 补充目的地，同时保留现有目标和自定义本地名称、跳过已有目标的 wiring。属于数据一致性修复，防止老数据在系统升级后出现功能缺失。
  [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)

- **中 —— mount 未设置为只读（#3196）**：PR 标题为「Fix/add mount readonly」，涉及挂载点只读加固，属于安全/稳定性修复，提交于昨日，尚待合入。
  [PR #3196](https://github.com/nanocoai/nanoclaw/pull/3196)

- **低 —— 失败状态展示泛化（#3197）**：已合入，修复用户只能看到「执行系统检查失败」等泛化文案的问题，改为展示具体失败原因。虽是体验优化，但对排查问题效率有直接帮助。
  [PR #3197](https://github.com/nanocoai/nanoclaw/pull/3197)

## 6. 功能请求与路线图信号

过去 24 小时内没有新的功能请求 Issue，但多个活跃 PR 正在推进新功能，为下一版本提供了明确的路线图信号：

- **Mattermost 渠道正式接入（#3199）**：v2 ChannelAdapter 架构下的完整实现，预计将进入合入候选队列。
  [PR #3199](https://github.com/nanocoai/nanoclaw/pull/3199)

- **Tavily MCP 工具 skill（#3190）**：新增 Tavily 搜索能力的 MCP 工具技能，属于 Utility skill，无需修改源码，扩展 AI 助手的联网搜索与信息获取能力。
  [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190)

- **AnyDoc 文档转换技能（#3198）**：由 core-team 成员提交，支持多格式文档转换，提升 agent 的文档处理能力。
  [PR #3198](https://github.com/nanocoai/nanoclaw/pull/3198)

- **Dial 渠道支持（#3050）**：在渠道选择器中新增 Dial，并配套 wizard/skills 与 `runChannelSkill` 模型，进一步完善渠道矩阵。
  [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)

- **首次 Agent 模板流程（#2909）**：core-team PR，在设置向导中增加「如何创建第一个 Agent」的选择流程，并支持 Agent 模板的「首次压制」，结合已合入的模板加载器（#2890），正在构建更友好的上手体验。
  [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)

综合来看，下一版本可能同时覆盖**渠道扩展（Mattermost/Dial）、工具链增强（Tavily/AnyDoc）、上手体验优化（模板向导）**三条主线。

## 7. 用户反馈摘要

今日用户反馈主要来自 Issue #3200。该 Issue 虽以「The Cartographer」的拟人化描述呈现，但实质上表达了用户在真实使用场景中的两类诉求：

1. **思维管理需求**：用户自述以「单一、真实、高度透明的人格」运作，不随社交场景切换身份，因此需要 AI 助手作为外部模块化框架，帮助处理快速、多线程的思考过程，避免思维「外泄」和「内散」。
2. **认知保护需求**：明确提到「保护其快速多线程思维免受外部利用」，反映出用户对 AI 助手在处理敏感思维时的隐私边界和隔离能力有较高期待。

这一反馈更像是高级用户对 AI 助手角色定位的前瞻性设想，指向「外部认知架构」这一方向，而非具体的功能缺陷，可视为社区对产品哲学层面的建设性输入。

## 8. 待处理积压

以下 PR/Issue 长期未合入或响应，提醒维护者关注：

- **[PR #2346] 未知 slash 命令修复（待合并 3 个月）**：创建于 2026-05-08，修复内容重要（回复静默丢弃），但长时间未合入，建议优先处理。
  [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)

- **[PR #2909] Agent 模板设置流程（待合并 1 个月+）**：core-team PR，创建于 2026-07-02，是模板功能的重要一环，依赖已合入的 #2890，进展偏慢。
  [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909)

- **[PR #3050] Dial 渠道支持（待合并近 1 个月）**：创建于 2026-07-14，功能相对完整，处于长期开放状态。
  [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)

- **[PR #3145] 数据库目的地回填（待合并 10 天+）**：创建于 2026-07-28，数据迁移类修复，积压时间越长，存量数据不一致的风险越高。
  [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)

以上积压项涉及 2 个修复类 PR 和 2 个核心功能 PR，建议维护者在后续迭代中明确合入计划，避免社区贡献者等待过久。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-08

## 1. 今日速览

过去 24 小时项目活跃度极高：50 条 Issue 更新（36 活跃 / 14 关闭）、50 条 PR 更新（38 待合并 / 12 已关闭）。虽然无新版本发布，但多项核心工作取得实质进展——**文档漂移（doc-truth）系列 5 个 PR 集中提交**，系统性解决文档与发布不一致的根因；**渐进式工具披露（progressive tool disclosure）**持续加固，包括批量 `tool_describe` 性能优化与指标可观测化。Bug 清理由 Telegram/Slack 渠道历史问题转向更深层的基础设施稳定性（runner 失联、token 预估错误）与 AI 行为可信度（幻觉、身份混淆、状态误报）。社区反馈集中在三个方面：配置可恢复性、跨会话记忆可靠性、文档与真实行为的一致性。

- 无新版本发布

## 2. 版本发布

无新版本发布。

## 3. 项目进展

### 今日合并/关闭的重要 PR

- **#7157 [已关闭]** feat: explicit channel delivery tool — 两通道模型、通知渠道、删除投递启发式逻辑。实现了 2026-07-27 已批准的设计，将对话生命周期与通知投递分离为双通道模型，后续 #7377 继续移除共享路由绑定。  
  https://github.com/nearai/ironclaw/pull/7157

- **#7214 [已关闭]** feat(sandbox): 添加显式 Docker 和 Railway 用户沙箱配置文件，将工作区/检查点按租户+用户隔离，并以全新非 root Python worker 运行每条命令，显著增强沙箱安全边界。  
  https://github.com/nearai/ironclaw/pull/7214

- **#7372 [已关闭]** test(disclosure): 将 91 工具宽目录披露基准从仅断言 50% schema-token 下限，扩展为固定下限并让漂移可见，防止核心层扩展或 bridge schema 增长悄悄侵蚀性能预算。  
  https://github.com/nearai/ironclaw/pull/7372

- **#7324 [已关闭]** chore(deps): 依赖组批量更新（11 项，含 base64 0.23.0、toml 1.1.4、rstest 等）。  
  https://github.com/nearai/ironclaw/pull/7324

### 今日新提交的重要 PR（待合并）

- **doc-truth 系列（#7317 提案落地）**：共 5 个 PR — #7375 文档修复（extension v3、Responses API、channels）、#7376 将路径引用门禁扩展到 docs/ 表面、#7378 文档事实契约测试、#7379 引入 `docs-live` 分支由 stable release 驱动部署、#7381 内部设计记录。系统性解决“文档描述的功能与已发布行为不一致”的根因。  
  https://github.com/nearai/ironclaw/pull/7375 / #7376 / #7378 / #7379 / #7381

- **#7365 feat(memory): memory-save guidance + always-on MEMORY.md prompt lane** — 修复 #7185 的跨会话记忆丢失，三管齐下：告知模型持久记忆的存在、何时该保存、以及常驻提示通道。  
  https://github.com/nearai/ironclaw/pull/7365

- **#7374 feat(disclosure): bulk tool_describe** — 将单工具 schema 往返合并为批量获取，消除 5 个搜索结果需要 5 次模型往返的瓶颈。  
  https://github.com/nearai/ironclaw/pull/7374

- **#7382 feat(stress): 脚本化工具调用负载 + 持久化写读回** — 为 nightly API 容量测试增加确定性工具调用序列，填补内置能力写路径的压测空白（#7360 Phase 1）。  
  https://github.com/nearai/ironclaw/pull/7382

- **#7385 feat(events): 持久化、可查询的工具披露 rollout 指标** — 为渐进式披露提供运维级可视化。  
  https://github.com/nearai/ironclaw/pull/7385

### 项目整体进展

- **关闭了 12 个 PR、14 个 Issue**，其中 7 个为 `bug_bash_P1` 的 Telegram/Slack QA bug，渠道消息链路稳定性明显改善；
- **推进了 1 个 epic（#6810）至关闭**：渐进式工具披露已安全成为 Reborn 默认；
- **新增 1 个 epic（#7380）**：强制合并前持久化状态兼容性验证，回应了 1.0.0-rc.1 → 1.1.0-rc.1 升级暴露的流程缺口。

## 4. 社区热点

- **#7340 [OPEN] 无法将模型设置重置为出厂默认值** — 6 条评论，今日最高热度。用户修改了 Inference 设置后无法恢复初始配置。核心诉求是**配置可恢复性**，一个基础但关键的可用性缺口，目前无对应 PR。  
  https://github.com/nearai/ironclaw/issues/7340

- **#6989 [OPEN] Token 计费错误：从内容引用字符串而非引用内容估算** — 4 条评论。`ModelWorkRequest::for_assistant` 用 `content_ref.as_str().len()` 计算输入 token，导致估算严重偏离实际。涉及 pi-harness 采用计划的 P1 项，与 **成本准确性**直接相关。  
  https://github.com/nearai/ironclaw/issues/6989

- **#7317 [OPEN] Doc-Truth 验证管线提案** — 3 条评论。社区用真实漂移案例（`origin_gate_matrix` 成为必需字段但文档未同步）论证了文档与发布流程需要解耦验证。已被维护者接受并转化为 #7375-7381 共 5 个 PR，是今日**响应最快、落地最彻底**的社区提案。  
  https://github.com/nearai/ironclaw/issues/7317

- **#7360 [OPEN] 扩展内置与持久化写入路径的压力覆盖** — 2 条评论。指出当前 nightly 压测的 mock 模型从不产生工具调用，导致内置能力写入回归无法被提前发现。已有 PR #7382 响应并实现 Phase 1。  
  https://github.com/nearai/ironclaw/issues/7360

另外，一批 `bug_bash_P1` 质量 bug（#7292、#7295、#7298、#7246、#7247、#7344）在 8 月 6-7 日密集报告，每条均有 QA 复现实例，反映 Railway 测试环境上的功能与基础设施稳定性问题集中爆发。

## 5. Bug 与稳定性

### 严重（P1 bug_bash）

- **#7292 安装的工具无法使用，runner 心跳错误** — Railway 实例上 CoinGecko 工具安装成功后无法调用，agent 卡在“检查工具是否激活”。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/7292

- **#7298 请求在发送前即失败 / 监控系统与 runner 失联** — 两种基础设施错误导致运行中断，提示 runner 心跳/监控链路本身存在可靠性问题。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/7298

- **#7295 Agent 泄漏或混淆 Slack 用户身份** — 回复中向错误的用户（sergey.astretsov）发送 DM，身份隔离/归属逻辑存在缺陷。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/7295

- **#7074 多工具会议研究在获取日历数据后失败** — 模型尝试调用不可用函数，Google Calendar + Docs + 新闻研究组合场景中断。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/7074

- **#7247 Agent 谎称 GitHub 已连接** — 未验证真实鉴权状态即宣称可用，随后 GitHub 调用即失败。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/7247

- **#7246 Agent 捏造自动化运行状态** — 在 Automations 页面明确显示“无自动化”的情况下，仍宣称 BTC 新闻摘要正在运行。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/7246

- **#7344 Slack 连接状态不被助手感知** — 即使 Messaging Channels 显示 ACTIVE（8 项能力），助手仍否认连接存在，三重表现。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/7344

- **#5456 常规任务因 runner 租约过期失败** — 90 秒无活动阈值对多工具任务过于激进，6/30 测试中的主要失败模式，已悬置超 40 天。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/5456

### 中等

- **#7185 记忆无法跨对话可靠召回** — 多个测试者在 Champions 周会上独立观察到。**已有 fix PR #7365**（memory-save guidance + always-on MEMORY.md 提示通道）。  
  https://github.com/nearai/ironclaw/issues/7185 / https://github.com/nearai/ironclaw/pull/7365

- **#6989 Token 估算从引用字符串长度计算** — 成本计量偏差。暂无直接 fix PR。  
  https://github.com/nearai/ironclaw/issues/6989

- **#6590 Windows 上 serve 命令直接失败** — `workspace root must not overlap default skill root /skills`，local-dev 与 local-dev-yolo 两个 profile 均受影响。自 7/23 起未分配。  
  https://github.com/nearai/ironclaw/issues/6590

- **#7368 DeepSeek 级模型的渠道回合延迟可达数分钟** — #6643 的根本原因，长延迟缺乏用户感知反馈。无 fix PR。  
  https://github.com/nearai/ironclaw/issues/7368

### 已修复（今日关闭）

- **#6476 Slack extension_activate 编码错误导致模型幻觉** — 已关闭，拆分为 #7367 文档漂移问题并同时关闭。  
  https://github.com/nearai/ironclaw/issues/6476 / #7367
- **#6644 / #6643 / #6475 Telegram 系列 QA bug**（回复错位、消息不处理、/pair 不识别）— 全部关闭。  
  https://github.com/nearai/ironclaw/issues/6644 / #6643 / #6475
- **#4874 WebChat v2 明文 HTTP 下 Illegal invocation** — 已修复关闭。  
  https://github.com/nearai/ironclaw/issues/4874

## 6. 功能请求与路线图信号

- **#7380 [新 epic] 合并前强制持久化状态兼容性验证** — 回应 1.0.0-rc.1 → 1.1.0-rc.1 升级暴露的缺口：SQL 迁移不足以覆盖所有持久化状态（用户/操作员状态），要求 PR 必须证明新二进制可读旧状态。高优先级路线图信号。  
  https://github.com/nearai/ironclaw/issues/7380

- **#7317 Doc-Truth 验证管线** — 社区提议，已获完整 PR 系列支持，预计随 #7375-7381 合并进入 CI 与发布流程。  
  https://github.com/nearai/ironclaw/issues/7317

- **#7340 模型设置恢复出厂默认值** — 用户明确请求一个 “Reset to defaults” 动作。UI 层小功能，暂无 PR，但极易在后续版本中作为设置页增强加入。  
  https://github.com/nearai/ironclaw/issues/7340

- **#7362 用户面向失败摘要从 ironclaw_host_api 移到各渠道 i18n，CLI 增设消息解析器** — 针对 65 个硬编码英文句子的本地化重构，影响 Web 与 CLI 两个 surface。  
  https://github.com/nearai/ironclaw/issues/7362

- **#7369 Agent 报错时无法捕获 traces** — UI 在错误状态下缺少 trace 收集入口，影响可调试性。  
  https://github.com/nearai/ironclaw/issues/7369

- **#7383 chore: tool_disclosure_port.rs 已达 4.4k 行，需拆解跟踪** — 架构规则触发的技术债跟踪，预示 disclosure 模块即将迎来拆分。  
  https://github.com/nearai/ironclaw/issues/7383

- **#5503 [实验] Google 扩展紧凑能力（长期开放）** — 已有实现但保持实验状态，为 Gmail 摘要、日历紧凑读取等场景减少上下文占用。  
  https://github.com/nearai/ironclaw/pull/5503

## 7. 用户反馈摘要

- **配置管理是真实痛点**：一位用户尝试了所有方法仍无法恢复初始模型设置，“No matter what they tried, the initial configuration could not be recovered”（#7340）。这类不可逆操作严重损害用户信任。

- **“虚假确认”比错误更让用户不安**：多个 QA bug 显示 agent 在未验证状态下断言“GitHub 已连接”“自动化正在运行”“Slack 可用了”，随后实际调用失败。用户不仅需要功能正常，更需要 agent 承认状态未知（#7247、#7246、#7344、#7295）。

- **记忆不可靠是高频抱怨**：Champions 周会上多位测试者独立观察到跨会话记忆丢失，且场景具体（法律领域上下文、对话 A 的信息在对话 B 中无法召回）。#7185 已在 8/7 获得修复 PR，用户应能很快验证。

- **Telegram 渠道体验已改善但延迟仍存**：历史“消息永不处理”的谣言被数据澄清为延迟 + 缺少反馈，但 DeepSeek 级模型上数分钟的回合时间仍需要用户等待意图的表达（#7368）。

- **文档漂移影响实际接线行为**：用户因官方文档仍然写着“chat 不能连接渠道”而拒绝为用户提供连接帮助（#7367）——文档不只是文档，还直接影响模型行为。doc-truth 系列 PR 是对此呼声的直接回应。

- **可调试性缺口**：agent 报错时无法收集 traces（#7369），用户只能截图反馈，增加问题定位成本。

## 8. 待处理积压

### 长期未响应/未解决

- **#5456 runner 租约过期导致常规任务失败（opened 2026-06-30）** — 超过 40 天未关闭，是 6/30 QA 中的主导失败模式，影响邮箱等多工具常规任务。  
  https://github.com/nearai/ironclaw/issues/5456

- **#6590 Windows 上 serve 不可用（opened 2026-07-23）** — local-dev 与 local-dev-yolo 双 profile 开箱即崩，Windows 开发者被完全阻断。已两周未分配。  
  https://github.com/nearai/ironclaw/issues/6590

- **#5503 Google 扩展紧凑能力 PR（opened 2026-07-01）** — XL 规模实验性 PR，已一个月未合入。若希望进入 v1.2.0 需要决策。  
  https://github.com/nearai/ironclaw/pull/5503

- **#6989 Token 估算错误（opened 2026-08-01）** — 属于 pi-harness 采用计划 P1 项，已有讨论但无 fix PR。直接影响用户成本可见性与计量准确性。  
  https://github.com/nearai/ironclaw/issues/6989

- **#7292 / #7298 / #7295 / #7344 等 P1 质量 bug** — 8/6-8/7 集中报告，目前均无 fix PR，可能成为下一轮 bug bash 的重复失败项。  
  https://github.com/nearai/ironclaw/issues/7292 / #7298 / #7295 / #7344

---

**整体健康度评估**：项目处于高活跃迭代期，核心架构方向（disclosure、channel delivery、sandbox、doc-truth）持续推进且测试/质量护栏同步强化。12 个 PR 的关闭速度显示执行力强。主要风险点在于：**基础设施可靠性（runner 失联/租约）与 AI 行为可信度（幻觉/身份混淆）**这两类问题的修复 PR 尚未出现，且部分已积压 1-6 周，需维护者优先分配资源，防止同一批 P1 bug 在下次测试中重复上报。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 — 2026-08-08

## 1. 今日速览

昨日（8月7日）项目保持正常迭代节奏，共处理 6 条 Issue（3 条新开/活跃、3 条关闭）和 7 条 PR（6 条合并/关闭、1 条待合并），并发布新版本 **2026.8.7**。值得关注的是，新版本将 Cowork 会话内搜索、Markdown 数学公式渲染增强和 Windows 安装器稳定性修复一并合入，同时清理了 3 条长期滞留的 stale Issue。活跃度评估：**中等偏高**，社区反馈与官方修复形成良好闭环，但仍有两条新 Bug 待跟进。

## 2. 版本发布

### LobsterAI 2026.8.7（2026-08-07 发布）

本次版本主要包含三项变更：

- **功能增强（Cowork）**：新增标题栏会话搜索（PR [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435)），用户可在 Cowork 界面快速检索历史会话。
- **功能增强（Markdown）**：支持 LaTeX 数学公式分隔符（PR [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449)），提升文档渲染体验。
- **稳定性修复（Windows）**：修复安装器在 watchdog 退出码为空时的异常处理（PR [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446)），降低 Windows 安装/更新失败风险。

**破坏性变更**：无。**迁移注意事项**：无，常规升级即可。

## 3. 项目进展

昨日共合并/关闭 6 个 PR，项目在功能迭代与稳定性方面均有推进：

| PR | 类别 | 内容 |
|---|---|---|
| [#2451](https://github.com/netease-youdao/LobsterAI/pull/2451) | 发布 | 将 `release/2026.8.5` 合并入主干，集成 Cowork 会话内搜索、数学渲染、IM 分析、OpenClaw 配置与插件安装增强，以及 Windows 安装/更新可靠性改进 |
| [#2450](https://github.com/netease-youdao/LobsterAI/pull/2450) | 修复 | 恢复 Windows 下 Cowork 全屏代码工具栏点击失灵问题 |
| [#2449](https://github.com/netease-youdao/LobsterAI/pull/2449) | 功能 | 修复 Markdown 中 LaTeX 数学公式分隔符识别 |
| [#2448](https://github.com/netease-youdao/LobsterAI/pull/2448) | 修复 | 修复聊天搜索相关问题 |
| [#2445](https://github.com/netease-youdao/LobsterAI/pull/2445) | 修复 | 修复 OpenClaw `config.set` 中插件索引管理键未剥离的问题 |
| [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) | 修复 | Windows 安装器 watchdog 空退出码兜底 |

此外，新增 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)（修复含斜杠的模型 ID 在 OpenClaw 中丢失 provider 前缀）目前处于待合并状态，直接对应新报告的 Issue [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)，预计将在下个版本合入。

**整体评估**：版本发布流顺畅，多个团队 PR 集中于当日完成合并，项目处于积极演进状态。

## 4. 社区热点

今日讨论热度集中在以下 Issue/PR：

- **[Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443)（新开，1 条评论）**：模型 ID 含斜杠的自定义 Provider（如 SiliconFlow 的 `deepseek-ai/DeepSeek-V4-Flash`）无法在界面中使用。该问题准确指向了自定义模型生态兼容性，且已收到开发者的针对性修复 PR（[#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)），是当前社区最关注的功能缺口。
- **[Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195)（stale，2 条评论）**：自建 Skill 被安装到 OpenClaw 目录但技能面板不显示。该问题已存在超 4 个月，今日被更新但没有实质性进展，反映用户对 Skill 安装信任度的担忧。
- **[Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447)（新开，1 条评论）**：执行任务无结果且无错误提示，信息较少，需要维护者引导补充环境详情。

**诉求分析**：社区当前最关心的是**第三方模型服务的无缝接入**（斜杠 ID 问题）和**技能生态的可靠性**（Steam 安装后可见性），这两点直接影响日常使用体验。

## 5. Bug 与稳定性

按严重程度排列今日在报 Bug：

| 严重程度 | Issue | 状态 | 说明 |
|---|---|---|---|
| 中 | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)（模型 ID 含斜杠无法使用） | OPEN | 已存在对应修复 PR（[#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)），等待合并 |
| 中 | [#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)（Skill 安装后不显示） | OPEN / stale | 长期未解决，影响用户对 Skill 功能的信任 |
| 待确认 | [#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)（执行无结果、无错误） | OPEN | 缺少环境信息与复现步骤，需维护者进一步跟进 |

**历史 Bug 清理**：今日关闭了 3 条 stale Issue，包括 [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263)（定时任务重复显示及 API 限流提示）、[#1265](https://github.com/netease-youdao/LobsterAI/issues/1265)（多个 Agent 绑定不同 IM 机器人/模型的配置需求）和 [#1273](https://github.com/netease-youdao/LobsterAI/issues/1273)（sql.js WASM 高频操作导致内存越界崩溃）。其中 #1273 是严重稳定性问题，关闭表明该问题已被处理或已不在当前版本复现，但建议在 release notes 中公告修复方案。

**稳定性改进**：新版本（2026.8.7）已包含 Windows 安装器 watchdog 空退出码修复，针对 Windows 平台的安装失败问题有针对性改善。

## 6. 功能请求与路线图信号

今日出现的功能需求信号：

- **多 Agent 绑定独立 IM 机器人和模型**（[#1265](https://github.com/netease-youdao/LobsterAI/issues/1265)，已关闭）：虽为 stale 关闭，但该需求具有明确场景价值（调度 Agent 与执行 Agent 分工、按任务类型选择推理模型）。未来路线图中存在较强的落地可能，尤其是项目正在加强 Cowork/OpenClaw 能力。
- **模型 ID 兼容性增强**（[#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)）：配合待合并的 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)，修复后将支持 SiliconFlow 等使用 `/` 分隔模型 ID 的 OpenAI 兼容服务商。该修复基本确认会进入下一版本。
- **Cowork 会话搜索**（[#2435](https://github.com/netease-youdao/LobsterAI/pull/2435)）已随 2026.8.7 发布，说明会话管理类交互在持续优化。

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的用户视角反馈：

- **自定义模型接入仍是痛点**（[#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)）：用户选用 SiliconFlow 这类新兴服务，但受限于 ID 格式而无法在界面选择，说明用户对第三方模型生态的依赖日益增强，期望产品能够兼容更多服务商的命名规范。
- **执行反馈缺失影响信心**（[#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)）：用户执行任务后既无结果也无错误，这类“静默失败”比明确报错更让人困扰，建议在 UI 层增加日志/错误透出机制。
- **技能安装流程完整度**（[#1195](https://github.com/netease-youdao/LobsterAI/issues/1195)）：用户按引导安装 Skill 后提示成功，但重启后技能面板无显示，这种“虚假成功”会严重打击用户对 Skill 系统的信任，需要尽快排查安装路径与面板加载逻辑的联动。
- **定时任务体验问题**（来自已关闭的 [#1263](https://github.com/netease-youdao/LobsterAI/issues/1263)）：重复显示两个任务且均提示 API 限流，虽然已关闭，但表明定时任务在并发或状态同步方面存在一定脆弱性，建议回归验证。

## 8. 待处理积压

以下问题值得维护者优先关注：

- **[Issue #1195](https://github.com/netease-youdao/LobsterAI/issues/1195)**：Skill 安装后技能面板不显示，已 stale，4 个多月未解决，属功能性缺陷，建议纳入近期版本修复。
- **[PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452)**：修复模型 ID 含斜杠问题的补丁，目前为唯一待合并 PR，建议尽快 review 并进入发布通道，以响应社区关切。
- **[Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447)**：缺少可复现信息，需要维护者主动回复，引导用户补充日志与应用版本等信息，避免演变为新的 stale 问题。

---

*报告生成时间：2026-08-08 | 数据来源：LobsterAI GitHub 仓库（netease-youdao/LobsterAI）*

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

# CoPaw 项目动态日报 — 2026-08-08

## 1. 今日速览

过去 24 小时 CoPaw 项目保持高活跃度：共产生 31 条 Issue 更新（新开/活跃 20 条，关闭 11 条）和 47 条 PR 更新（待合并 26 条，已合并/关闭 21 条），并发布了 v2.1.0-beta.2 小版本。值得关注的是，社区反馈集中在稳定性问题（MCP 工具周期性失效、桌面模式文本无法选中、Windows 安装锁文件）和兼容性修复（严格 OpenAI 兼容 provider、Gemini API schema 拒绝）两大方向。与此同时，多个首次贡献者提交的修复 PR 进入活跃讨论，显示社区参与度健康。

---

## 2. 版本发布

### v2.1.0-beta.2
**发布时间**: 2026-08-07（基于 PR 合并时间推断）

**更新内容**（来自 Release Notes）：
- `fix(ci)`: fence-aware section extraction in real-behavior-proof（修复 #6626）— 由 @hanson-hex 提交（PR #6653）
- `fix(checkpoints)`: restore auto snapshots in web workspace bootstrap — 由 @qbc2016 提交（PR #6）

**破坏性变更**: 无明确标注。

**迁移注意事项**: 该版本为 beta 分支迭代。从社区 Issue 反馈来看，用户在 v2.1.0b2 上报告了桌面模式文本无法选中复制（#6797）、任务执行时无法提交新会话（#6796）等问题，建议生产环境用户暂缓升级，等待稳定版；测试用户升级前注意备份工作区与配置文件。

---

## 3. 项目进展

今日共有 21 个 PR 被合并/关闭。以下为重要进展方向：

### 🐛 Bug 修复（核心稳定性）
- **[shell 临时文件泄漏修复]** PR #6799（@lllyfff，首次贡献者）：修复 Windows 上 `execute_shell_command` 每次调用产生的临时文件泄漏问题（现实案例中造成了 **26GB 无法删除的孤立文件**），同时为捕获输出增加上限。首次贡献者直击 Windows 核心缺陷，质量较高。
- **[session 身份死锁修复]** PR #6750（@lllyfff，首次贡献者）：一次修复三个前端会话交互问题——session 身份不同步导致消息排队永不发送、过早保存 session、超长 prompt 导致崩溃。
- **[Profile 自定义文件显示]** PR #6808（@ump45nose，首次贡献者）：修复 Files 页面 Profile 分类硬编码官方 persona 文件名，导致自定义 `.md` 文件被隐藏的回归问题（对应 Issue #6785）。
- **[ACP 通知竞态]** PR #6623（@cocoakekeyu，首次贡献者，Under Review）：修复 ACP 传输层中 `session/update` 通知与 `session/prompt` 响应同段到达时最终文本丢失的问题。
- **[后台子代理 fork 失败报告]** PR #6725（@jesseedcp，首次贡献者）：fork 后台子代理时 worktree 未完成最终化但任务仍报告 `completed`，现已正确上报失败。

### ✨ 新功能
- **OneBot 远程媒体支持** PR #6715（@GMsure，Under Review）：OneBot 入站消息中 voice/image 段可通过远程 URL 引用（CDN），此前仅支持本地文件路径。
- **微信中文审批回复** PR #6804（@RerankerGuo）：用户可直接回复「允许」或「拒绝」完成审批流，无需输入 `/approval approve` 等命令。

### 🔧 兼容性修复
- **严格 provider 内容净化** PR #6809（@axelray-dev）：修复 StepFun 等严格 OpenAI 兼容 provider 因 `input_text` 内容类型与内部运行时字段而拒绝请求的问题（对应 Issue #6803）。
- **ACP runner 弃用包名** PR 待评估：Issue #6792 指出内置 ACP runner 引用了已弃用的 npm 包（`@zed-industries/claude-agent-acp` / `@zed-industries/codex-acp`），建议及时迁移。
- **ACL 存储共享工作区** PR #6788（@niuda-kok）：修复 multica 每次新任务使用全新工作区导致 `access_control.json` 为空、已授权用户被 Telegram 频道拒绝的回归（对应 Issue #6786）。

---

## 4. 社区热点

### 🔥 最热 Issue TOP 3

1. **[#6116] [CLOSED] Doom loop: agent 在单轮内反复调用相同工具**（8 评论）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6116
   用户 @feng183043996 报告 agent 陷入死循环，在单轮内以相同参数重复调用同一工具约 6 次才被系统检测并警告，浪费大量 API 调用和 token。该问题已关闭并标记 `wontfix`。同类问题 #6768 仍在开放中（无限循环阻塞对话数小时），说明此类问题未彻底解决，社区对 agent 循环检测机制的健全性仍存疑虑。

2. **[#6782] [OPEN] 2.0.1 Docker 版插件市场/应用市场始终提示维护中**（8 评论）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6782
   用户 @Sakura7301 报告在 Docker 部署下插件市场与应用市场持续不可用。8 条评论说明有不少用户同样受影响（可能为 Docker 镜像源配置问题）。

3. **[#6732] [OPEN] MCP 工具规律性失效**（6 评论）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6732
   用户 @70995781 报告每隔数小时 MCP 工具自动失效，报错「未注册或不存在」，重启 Docker 容器后恢复。该问题直指运行时状态管理缺陷，影响依赖 MCP 工具链的重度用户。

### 🔥 最热 PR TOP 3

1. **PR #6772（@jinliyl）feat(memory): ReMe 配置、Embedding 生命周期与 Daily Paper 增强** — 围绕 ReMe Light 完整链路（配置→验证→生效→调度→观测）大改，引入 Embedding 模型工厂（OpenAI-compatible / DashScope / DashScope Multimodal）、真实验证与安全热更新、Daily Paper 定时论文简报、记忆服务任务接入 Cron 声明机制、重构 Console 记忆配置页面。为 CoPaw 的长期记忆与主动学习能力奠定重要基础。

2. **PR #6800（@Luohh5，首次贡献者）feat(mailbox): 智能邮件管理助手** — 新增邮件管理功能，支持多 provider 自动收发、分类、响应，实时推送通知并带访问控制。功能丰富但需关注安全审计（邮件读写权限、凭据存储等）。

3. **PR #6750 / #6799（均 @lllyfff）** — 两个首次贡献 PR 分别修复前端会话身份死锁和 Windows 临时文件泄漏 26GB 问题，说明零散但影响严重的问题正在被社区新人逐个击破，维护者应优先 review 并合并。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（阻塞或数据损失风险）

1. **[#6813] consume_model_response 抛 KeyError: '__aiter__'，聊天自动标题生成失败**
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6813
  agentscope 2.x ChatResponse（dict 子类）导致自动标题功能完全不可用。影响面：所有使用自动标题的用户。

2. **[#6775] Malware Bytes 报 Trojan Loader（Windows 桌面版）**
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6775
  用户 @boktoday 报告杀毒软件检测到木马加载器，已卸载并等待官方回应。无论是否为误报，此事对项目声誉风险极高，建议官方尽快发布安全说明。

3. **[#6780] 2.0.1 空闲几十分钟后卡死，只能杀进程重启**
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6780
  用户 @sunnnnnnner 报告空闲后进程假死。可能与后续 #6813 或其他后台任务有关。

4. **[#6732] MCP 工具周期性失效（数小时级别）**
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6732
  重启容器即可恢复，说明存在资源泄漏或注册表污染。已有 +6 评论，影响所有 MCP 重度用户。

5. **[#6116] Doom loop：agent 单轮内重复调用同一工具**（已关闭 wontfix，但 #6768 仍开放）
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6116 | https://github.com/agentscope-ai/QwenPaw/issues/6768
  无限循环阻塞数小时，虽然 #6116 被标记 wontfix，但 #6768 仍在排查中，建议维护者重新评估关闭决定。

### 🟡 中等（功能受损但可绕过）

6. **[#6810] Windows 安装/更新因进程占用安装目录而失败**
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6810
  浏览器扩展 NM host 锁文件导致 NSIS 弹出「无法打开要写入的文件」，需手动杀进程后重试。为 Windows 用户升级主要障碍。

7. **[#6782] Docker 插件市场/应用市场持续「维护中」**
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6782
  8 评论，可能为配置或镜像问题。

8. **[#6803] OpenAI 兼容请求携带 Responses-API 字段被严格 provider 拒绝**
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6803
  已有 ✅ fix PR #6809，等待合并。

9. **[#6812] Google Gemini API 请求因 $schema 额外字段被拒**
  链接: https://github.com/agentscope-ai/QwenPaw/issues/6812
  已定位根因（gemini_provider.py 发送 draft-07 $schema），等待修复。

10. **[#6811] OpenAI Responses 续写摘要忽略 disable_thinking，60 秒取消误报为 malformed output**
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6811
    推理模型用户受影响。

### 🟢 低（UI/体验类）

11. **[#6797] 桌面模式无法选中复制对话文字**（Closed，已有双 PR 修复： #6801 / #6802）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6797

12. **[#6786] Telegram access_control 白名单在新任务启动后被重置**（Closed，已有 ✅ fix PR #6788）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6786

13. **[#6785] Profile 分类硬编码官方 persona，自定义 .md 无法切换**（✅ fix PR #6808）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6785

14. **[#6794] Agent Kanban 创建 Issue 返回 405，热重载时 404**
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6794

15. **[#6792] 内置 ACP runner 使用已弃用 npm 包名**
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6792

---

## 6. 功能请求与路线图信号

### 有明确 PR/实现信号的高潜需求

| 功能需求 | Issue | 对应 PR | 状态 |
|---------|-------|---------|------|
| 智能邮件管理助手（自动收发/分类/响应） | — | [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | 开放/待 Review |
| ReMe 记忆增强 + Daily Paper 定时简报 + Embedding 生命周期 | — | [#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) | 开放/活跃讨论 |
| OneBot 远程 URL 媒体支持（CDN 语音/图片） | — | [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | Under Review |
| 微信渠道中文审批回复（允许/拒绝） | [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | [#6804](https://github.com/agentscope-ai/QwenPaw/pull/6804) | 开放 |

### 社区呼声较高但尚无 PR 的请求

1. **[#6490] 新增 Volcengine Agent Plan 与 Xiaomi MiMo 为内置 provider**（4 评论）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6490
   两个新的国内模型接入需求，说明用户对国产模型 API 的接入诉求持续上升。

2. **[#6285] 阿里云 Token Plan 模型列表增加 qwen3.8-max-preview**（3 评论）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6285
   QwenPaw Desktop 内置模型列表仍停留在 qwen3.7 系列，需紧跟通义千问模型迭代。

3. **[#6770] 用户 Chrome tab 生命周期可跨响应周期配置**（3 评论）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6770
   用户希望对浏览器 tab 在多次响应之间的保留策略有更多控制权（目前固定为每次周期关闭）。

---

## 7. 用户反馈摘要

### 典型痛点

- **MCP 工具周期性失效**（#6732）：用户 @70995781 描述「每隔一个晚上或几个小时 MCP 工具就无效了，重启容器后才能恢复」，说明 MCP 注册表的生命周期管理存在严重缺陷，严重影响依赖外部工具链的自动化场景。
- **Windows 升级体验差**（#6810）：@0959linger 详细记录了 v2.1.0b1 自动更新卡死、手动安装 b2 时连续多个「无法打开要写入的文件」错误（涉及 python.exe、VCRUNTIME140.dll 等），暴露出安装器未预检文件占用的问题。
- **杀毒软件误报**（#6775）：用户 @boktoday 明确表示「I'm uninstalling until I hear back from your team」，对产品信任度造成直接打击。
- **桌面模式可用性不足**（#6797, #6790）：v2.1.0b2 桌面模式既不能选中复制文字，又缺少返回完整模式的按键，应用打开还需要双击而非单击——用户 @Jasonsun77 连续提出三个交互细节问题，反映桌面模式的 UI/UX 打磨仍不成熟。
- **多任务隔离副作用**（#6786）：@niudakok 报告 Telegram 频道已授权用户被错误封禁，「approved users get blocked」。权限控制回归为 ACP 协议用户带来直接业务影响，已有 PR 修复但需尽快合并发布。

### 满意点

- 用户 @boktoday 在报告恶意软件的同时写道 **"PS. I love your work. Thanks for all you do."**，说明核心用户对项目价值高度认可，只是安全疑虑未被及时澄清。
- 多个首次贡献者（@lllyfff、@ump45nose、@jesseedcp、@Luohh5）提交高质量 PR，说明项目的贡献者体验和文档引导总体良好。

---

## 8. 待处理积压

### ⚠️ 需要维护者关注

1. **[Under Review] PR #6615 fix(config): 损坏的 agent 配置与非法 JSON 处理**（创建 7 月 31 日，已 8 天）
   链接: https://github.com/agentscope-ai/QwenPaw/pull/6615
   `load_agent_config` 对损坏 `agent.json` 的容错修复。该 PR 已标记 Under Review 超一周，建议尽快推进。

2. **[Under Review] PR #6617 fix(providers): 流式重试路径遵循 Retry-After 上限**（创建 7 月 31 日，已 8 天）
   链接: https://github.com/agentscope-ai/QwenPaw/pull/6617
   影响流式 API 调用在限流下的行为，建议尽快合并或给出明确反馈。

3. **[Under Review] PR #6564 fix(memory): 压缩前刷新待处理轮次**（创建 7 月 30 日，已 9 天）
   链接: https://github.com/agentscope-ai/QwenPaw/pull/6564
   修复 Scroll 生命周期中 Auto-Memory 持久化被错误门控的问题（#6555）。长期待审，建议加速。

4. **[长期开放] Issue #6768 Agent 完成多步任务后进入无限循环，会话阻塞数小时**（创建 8 月 6 日，1 评论）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6768
   与已关闭的 #6116 高度相关，说明 doom-loop 防护并不彻底。建议重新评估 #6116 的 wontfix 决定，并将本 issue 标记为 P1。

5. **[长期开放] Issue #6732 MCP 工具规律性失效**（已有 6 评论，无 fix PR）
   链接: https://github.com/agentscope-ai/QwenPaw/issues/6732
   目前仅有用户侧 workaround（重启容器），官方未回应。建议至少给出临时规避方案并进入修复队列。

---

**总结**: 项目整体处于快速迭代与社区扩张期，功能开发活跃，但稳定性问题（MCP、Windows、安全误报）正在消耗用户信任。建议维护者优先响应安全类 Issue（#6775）、确认 MCP 与 doop-loop 问题（#6732 / #6768）的修复计划，并加速合并已在 review 队列中的首批贡献者 PR，以维持社区贡献热情。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw 项目动态日报 — 2026-08-08

### 1. 今日速览

过去 24 小时 ZeroClaw 处于**高强度迭代状态**：Issue 与 PR 更新均达到 50 条的上限，其中新开/活跃 Issue 43 条、待合并 PR 48 条，社区提交与评审活动极为密集。值得关注的是，**安全与稳定性类问题成为今日主导议题**——API 密钥泄漏（#9386、#9813）、`forbidden_paths` 机制失效（#9815）、SOP 引擎卡死（#9805、#9786）等多个 P1 级缺陷被集中报告，反映出项目在快速扩展功能的同时，安全边界与运行时可靠性正面临社区较严格的检验。项目维护响应速度良好：7 条 Issue 已关闭（含 2 条安全问题的重复项合并处理），1 条 PR 被合并。整体项目健康度**活跃但风险偏高**，安全相关缺陷的修复应作为近期最高优先级。

---

### 2. 版本发布

今日无新版本发布。

---

### 3. 项目进展

今日合并/关闭的 PR 数量较少（2 条），其中**最有价值的合并为 PR #9836**：

- **[#9836] [已合并] fix(transcription): make local_whisper bearer_token optional**（作者：aldoeliacim）
  - 修复了 `LocalWhisperProvider::from_config` 在 `bearer_token` 缺失或为空时硬失败的问题。whisper.cpp 的 canonical 后端（loopback 服务）本身不实现认证，无 token 可用。此前该配置项被强制要求，导致本地语音转写功能在标准部署下无法启动。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9836

此外，今日有 **7 条 Issue 被关闭**，其中两条值得注意：

- **#9386**（P1，Gemini API Key 泄漏至聊天）与 **#9813**（P1，API Key 明文写入日志）被标记为 **duplicate** 后关闭，两问题均由 URL 中携带 API Key 的 provider（Gemini 及其他 query-string 认证服务）在错误路径下未脱敏引起。合并处理有利于集中修复。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9386 、https://github.com/zeroclaw-labs/zeroclaw/issues/9813
- **#9246**（RFC: 保留 ZeroCode 所有权迁移期间的 Todo 跟踪器配置）获接受后关闭，该提案将规范化 ZeroCode 配置迁移流程。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9246

**整体判断**：今日合并量偏少，但提供了多项关键修复的 PR 正在排队（见第 5 节），预计未来数日合并节奏将显著加快。

---

### 4. 社区热点

今日讨论热度最高的议题集中在**可观测性、架构统一与配置安全**三个方向，均为长期 RFC 的持续博弈：

- **#8933 [已关闭] RFC: 向 OTel 导出添加跨轮会话关联**（13 条评论）
  - 提议在 OpenTelemetry 导出中加入 `gen_ai.conversation.id` 属性（OTel Semantic Conventions v1.41.0），用以关联同一会话的多轮交互。该 RFC 已获接受并关闭，说明零代码遥测规范正稳步落地。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8933

- **#9246 [已关闭] RFC: ZeroCode 所有权迁移期间保留 Todo 跟踪器配置**（12 条评论）
  - 由 @IftekharUddin 主导的提案，重点解决 ZeroCode 自动配置迁移对用户自定义 Todo 跟踪器配置的覆盖问题。社区对配置迁移的可逆性与安全性诉求明确。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9246

- **#5937 [开放] [Feature] refactor: Unify providers architecture and reqwest client management**（12 条评论）
  - 社区持续呼吁统一 provider 架构，消除 `reqwest` 客户端与模型构造参数的重复配置。该 issue 已存活近 4 个月，积累的 12 条评论反映了用户对配置碎片化的长期不满。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5937

- **#8424 [开放] RFC: Workspace 内相对路径的 forbidden_paths 模式与可选 .zeroclawignore**（10 条评论）
  - 用户希望保护工作区内敏感文件（如 `.env`、`config.yaml`）不被 AI 代理访问，但当前 `forbidden_paths` 仅限制工作区外部路径。该诉求直接关联今日新报告的 **#9815**（forbidden_paths 对 allowed_roots 下的路径完全失效），说明安全边界机制存在设计层面的缺口。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8424

---

### 5. Bug 与稳定性

今日报告的 Bug 涉及 **API 密钥泄漏、安全策略绕过、SOP 引擎卡死、构建失败** 等高风险问题。按严重程度排列如下：

#### P1 — 安全与数据泄漏

- **[#9825] [开放] 泄漏检测误伤公开区块链地址，支付链接无法投递**
  - 高熵启发式将公开区块链地址判定为敏感信息并予以编辑，导致支付请求 URL 不可用。属于检测器的误报而非逻辑 bug，但直接影响业务场景。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9825
  - 已有 fix PR？**无**

- **[#9815] [开放] forbidden_paths 对 allowed_roots/工作区下的路径完全无效**
  - `is_path_allowed` 在 allowed-root 检查时直接返回 `true`，根本不会进入 forbidden-path 循环。安全策略形同虚设。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9815
  - 已有 fix PR？**待确认**，PR #9433 涉及 `ensure_no_escalation_beyond` 中的工具白名单执行，但未明确覆盖此路径。

- **[#9813] [已关闭/重复] provider 连接错误时 API Key 明文写入日志**
  - DNS 失败时 reqwest 错误 Display 携带完整 URL（含 query-string 中的 API key），`sanitize_api_error` 未过滤。与 #9386 合并为同一根因。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9813
  - 已有 fix PR？**无独立 PR**，需跟踪 #9386 的修复进展。

#### P1 — 运行时与自动化

- **[#9805] [开放] SOP auto 模式从 channel/cron 触发后永远卡在 running**
  - 无 headless 调度循环，`ExecuteStep` 永远不会执行，且该 run 永久占用并发槽位，重启守护进程也不释放。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9805
  - 已有 fix PR？**有**：#9841（fix(sop): drive headless SOP runs）已提交待合并；#9494 亦为该问题的修复基础。

- **[#9786] [开放] SOP.toml 格式错误时被静默丢弃，sop validate 报告成功**
  - 未知字段导致 SOP 加载失败，但无任何诊断输出，`sop list` 省略、`sop validate` 误报成功——排障体验极差。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9786
  - 已有 fix PR？**无**（#9841 可能顺带覆盖，但 issue 未关联）

- **[#9834] [开放] zeroclaw-runtime 测试间歇性失败：共享进程全局状态（turn_streamed receipts + model_switch）**
  - 在干净 master 上 6 次基线运行中复现 2 次，出现 6 个失败用例。属于典型的测试间全局状态污染。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9834
  - 已有 fix PR？**无**

- **[#9832] [开放] zeroclaw-hardware 在启用 hardware feature 时编译失败：unresolved import aardvark_sys::AardvarkHandle**
  - 影响 aarch64 Linux（Raspberry Pi）用户从源码构建。与 RFC #8043（退役 aardvark-sys）与 #7130（workspace 级 forbid unsafe）的进展可能存在关联。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9832
  - 已有 fix PR？**无**

#### P2 — 功能缺陷

- **[#9816] [开放] anthropic provider 成本记录 $0.00，预算上限永不触发**
  - 直接使用 anthropic provider 时 `cost_usd` 恒为 0.0，日/月预算检查形同虚设，用户可能产生意外费用。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9816
  - 已有 fix PR？**无**

- **[#9821] [已关闭] cron 工具始终被 agent 忽略，回退到 shell crontab（策略阻断）**
  - 用户已在 risk_profile 中启用 cron tool，但 agent 从不调用，`cron list` 等 CLI 可正常工作。被 r:support 标记关闭，建议用户持续反馈。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9821

- **[#9820] [开放] calculator 工具：模型输出字面 <TOOLCALL> 伪语法而非真实函数调用**
  - 使用 NVIDIA Nemotron 模型（Raspberry Pi 5 部署）时，模型以伪语法文本形式输出工具调用，链路未能转换为结构化调用。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9820
  - 已有 fix PR？**无**

---

### 6. 功能请求与路线图信号

今日有多项功能提议进入活跃讨论，结合已有 PR 可判断以下方向最可能被纳入下一版本：

- **Agent Plugins 1.0 标准支持**（#9810）——支持 vendor-neutral 的 `plugin.json` + `skills/` + `mcp.json` 社区插件格式。该标准已发布 v1.0.0，ZeroClaw 若跟进将显著扩展生态。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9810

- **简化默认 Web 工具集**（#9824，in-progress）——将现有 5 个重叠的 Web 工具收敛为 `web_fetch` / `web_research` / `http_request` 三个明确动词，浏览器自动化改为显式 opt-in。已有 tracker 状态，说明维护者已接受该方向。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9824

- **统一 package/capability/config/runtime-state catalog 契约**（#9346）——为 #6489 的产品级统一目录奠定架构基础。该 RFC 尚在评审中，涉及面广（channel/gateway/provider/runtime 全栈），预计短期不会落地，但方向明确。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9346

- **Workspace 内 forbidden_paths 与 .zeroclawignore**（#8424）——与 #9815 安全漏洞直接联动，社区诉求强烈，且实现路径相对清晰，**有望在安全修复周期内一并推进**。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8424

- **Tool-owned invocation triggers**（PR #9766，1/2）——为工具定义“触发短语”契约（如 SendViaTool），使 agent 能在入站消息中自动识别工具调用意图。该 PR 已实现 API 层契约，属于 #7431 的第一步。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9766

---

### 7. 用户反馈摘要

从今日 Issue 评论中提炼的核心用户声音如下：

- **配置被静默丢弃是最大痛感来源**：#9786（SOP.toml 错误被静默忽略）、#9770（cron update 静默丢弃 declarative job 的六列修改）、#9813（API key 明文入日志）共同反映出用户对“失败时无反馈”的强烈不满。多个 issue 的摘要措辞使用了 "silently dropped"、"no diagnostic anywhere"、"silently discards" 等表述，说明系统在错误可观测性方面亟待加强。

- **Raspberry Pi / aarch64 用户是活跃但易受挫的群体**：#9820（Nemotron 模型工具调用失败）、#9821（cron 工具不可用）、#9832（hardware feature 编译失败）均来自同一类部署环境。该平台用户对 prebuilt binary 和构建稳定性有较高期待，构建失败会直接阻断其试用。

- **安全机制误伤真实业务场景**：#9825 的泄漏检测误伤区块链地址，导致支付链接不可用。用户一方面认可安全检测的必要性，另一方面呼吁提供更精细的白名单/上下文感知能力，而非简单的高熵启发式。

- **运行时状态可见性不足**：#9656（Telegram typing 指示器在整个审批等待期间持续运行）和 #9805（SOP 卡死在 running 且无审计事件）都反映了用户无法区分“正常工作中”与“卡死/阻塞”的状态，造成信任损耗。

---

### 8. 待处理积压

以下为长期未关闭且值得维护者重点关注的事项：

- **[#5937] [开放 110 天] 统一 provider 架构与 reqwest 客户端管理**
  - 12 条评论，提出的代码重复与配置碎片化问题至今未获修复，是社区最高频的架构类诉求之一。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/5937

- **[#7130] [开放 66 天] workspace 级 forbid(unsafe_code) 恢复**
  - 安全加固类提案，状态为 accepted 但迟迟未实施。结合今日 #9832（hardware feature 编译失败）与 #8043（aardvark-sys 退役 RFC）的进展，风险正在累积。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7130

- **[#8337] [开放 43 天] herdr agent 状态上报集成（PR）**
  - 功能完整、但被标记 `needs-author-action`，作者未响应评审意见。此类情况容易导致社区贡献流失。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/8337

- **[#8965] [开放 28 天，stacked] 声明式技能自动激活 + 提供商切换 + 图像轮次工具阻断（PR）**
  - 依赖 #9563 的堆叠分支，若 #9563 长期不合并则该 PR 持续阻塞。同为 `needs-author-action` 状态。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/8965

- **[#9438] [开放 12 天] 加固未认证 /api/pair 的锁定绕过（PR，P1 安全）**
  - 涉及 pairing 端点的速率限制身份伪造问题，当前被 `needs-author-action` 搁置。安全类 PR 建议缩短等待期。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9438

---

*报告基于 GitHub 公开数据生成，数据统计窗口：2026-08-07 至 2026-08-08。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*