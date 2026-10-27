# OpenClaw 生态日报 2026-09-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-05 10:55 UTC

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

# OpenClaw 项目动态日报 — 2026-09-05

## 1. 今日速览

过去24小时项目活动密集：**500 条 Issue 更新**（95.6% 处活跃状态）与 **500 条 PR 更新**（78.2% 待合并），社区讨论与提交热情高涨。今日共关闭 22 个 Issue、合并/关闭 109 个 PR，核心维护者（如 steipete、Patrick-Erichsen）提交了多项跨模块大改动，涉及子进程生命周期管理、Control UI 插件发现机制及本地模型能力保留等关键方向。然而，**P0/P1 级别的 Bug 存量仍然较大**（Windows 网关启动失败 #137813、Codex 钩子进程失控 #91009 等），且大量高优 Issue 长期缺乏修复 PR，项目发布质量与维护响应速度面临考验。**今日无新版本发布**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展 — 关键合并/关闭 PR 及推进方向

以下为本日更新的重要 PR（含已合并/关闭状态，推送了实质性修复或功能）：

| PR | 规模/风险 | 内容摘要 | 状态 |
|---|---|---|---|
| [#138976](https://github.com/openclaw/openclaw/pull/138976) fix: preserve progress card ownership across clients | XL / 🚨 兼容性风险 | 修复用户关注非默认 Agent 全局会话时进度卡片归属错乱的问题，确保跨客户端展示正确 | 待维护者审核 |
| [#138850](https://github.com/openclaw/openclaw/pull/138850) fix: preserve local-model capabilities and conversation history | XL / 🚨 兼容性 + 会话状态风险 | 修复为一个 Agent 配置本地模型导致全局进入 lean mode、移除无关 Agent 能力，以及小型模型收到超大工具目录的问题。关闭 #138753，跟进 #138717 | 待维护者审核 |
| [#139020](https://github.com/openclaw/openclaw/pull/139020) fix: fence pending child spawns with parent authority | XL | 修复父进程在 `sessions_spawn` 挂起期间被停止导致子进程失控/孤儿的问题。关闭 #139001 | 待维护者审核 |
| [#139002](https://github.com/openclaw/openclaw/pull/139002) fix(sessions): make input relocation transaction-safe | M | 跟进 #138967，修复用户输入重定位在提交边界上的两个缺口（立即重放失败、活动路径投影不一致） | 待审核 |
| [#138808](https://github.com/openclaw/openclaw/pull/138808) fix(signal): keep prototype-named container styles unstyled | XS | 修复 Signal 容器样式中 `constructor` 等原型链名称被误解析为 truthy 导致样式错乱的问题 | 待审核 |
| [#138755](https://github.com/openclaw/openclaw/pull/138755) feat(control-ui): unify bundled and ClawHub plugin discovery | XL | 统一 Control UI 中内置插件与 ClawHub 目录的发现逻辑，修复未发布插件混入目录、元数据不完整等问题 | 等待作者响应 |
| [#137942](https://github.com/openclaw/openclaw/pull/137942) fix(worker): preserve reconciled files during fast-forward | M | 修复云端 worker 替换时可能覆盖或阻碍先前回合协商的工作区状态的问题。跟进 #137392 | 待维护者审核 |
| [#108574](https://github.com/openclaw/openclaw/pull/108574) fix(signal): derive streamContainerEvents handshakeTimeout from caller timeoutMs | S / 🚨 兼容性 + 可用性风险 | 修复 WebSocket 握手超时忽略调用方 timeoutMs、固定使用 30s 的问题 | 等待作者响应 |
| [#107620](https://github.com/openclaw/openclaw/pull/107620) fix(signal): reject hex/exponent text-style span offsets | M / 🚨 兼容性风险 | 修复 Signal 中 `0x10`、`1e1` 等 JS 特有数字形式被误解析导致样式应用错误的问题 | 待维护者审核 |
| [#137603](https://github.com/openclaw/openclaw/pull/137603) test(firecrawl): consolidate parser coverage | L | 合并 Firecrawl 私有解析器测试矩阵为聚焦契约表，保留安全/响应形态等关键覆盖 | 待审核 |

> 注：今日 109 个 PR 被合并/关闭，但提供的数据中未包含逐条合并记录。已关闭的 Issue 中可见 [#135835](https://github.com/openclaw/openclaw/issues/135835)（API key 耗尽充值后无法恢复）已关闭，属于正向收敛。

**总体判断**：核心维护者 steipete 连续提交多个跨渠道/端的大规模修复（PR #138976、#138850、#139020、#134931），集中在**子进程治理**与**跨端状态一致性**两大方向，说明这两块是当前系统稳定性的主要短板。Control UI 侧（#138755、#137886、#137856）则显著推进了 ClawHub 插件生态的本地化管理能力。

## 4. 社区热点 — 评论最多、讨论最活跃的 Issues/PRs

| 排名 | Issue/PR | 评论数 | 👍 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex PreToolUse hook 派生 CPU 密集 openclaw-hooks 进程致网关 RPC 停滞 | 21 | 2 | **稳定性和资源消耗**。用户希望 hook 机制不会拖垮网关进程。虽已升级 P0，但该问题长期未修（已开约 3 个月）值得警惕 |
| 2 | [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer 模式无法在回合中向主会话注入消息 | 20 | 4 | **核心交互语义缺失**。steer 模式不 steer、只是排队，用户期望的"运行时干预"能力未实现。高赞表明诉求普遍 |
| 3 | [#22438](https://github.com/openclaw/openclaw/issues/22438) — 分层 bootstrap 文件加载需求 | 18 | 0 | **上下文预算管理**。用户希望避免子代理和 cron 任务也加载全套 bootstrap 文件，属长期悬置的产品决策 |
| 4 | [#38327](https://github.com/openclaw/openclaw/issues/38327) — 2026.3.2 中 google-vertex/gemini-3.1-pro-preview "Cannot convert undefined or null to object" | 16 | 3 | **回归 Bug**。更新后任何消息即触发失败，无 workaround，直接影响核心功能。已被标记为 diamond lobster 且持续 6 个月 |
| 5 | [#68596](https://github.com/openclaw/openclaw/issues/68596) — 可配置的流式看门狗超时阈值 | 16 | 8 | **模型兼容性/体验**。kimi-k2.5/DeepSeek-R1 等长思考模型触发频繁的 30s 看门狗误报。👍 8 为今日最高，呼声较强 |
| 6 | [#79902](https://github.com/openclaw/openclaw/issues/79902) — 增加 SQLite transcript 访问层接口 | 14 | 2 | **可扩展性/生态**。高级用户希望基于 database-first runtime 构建自定义分析工具，而不必解析不透明 blob |

**分析**：今日热点集中在三大类诉求：① **稳定性与资源控制**（#91009 的 hook 进程泄漏、#38327 的模型回归、#68596 的看门狗误报）；② **核心交互体验**（#48003 的 steer 模式形同虚设）；③ **面向开发者的可编程性/可观测性**（#79902、#50291 的 trace 上下文缺失）。三者均属长期未解决的"老问题"，社区耐心在被持续消耗。

## 5. Bug 与稳定性

以下按严重程度排列今日最值得关注的 Bug（含仍在讨论、且可能影响面较大的问题）。

### P0（发布阻断级）

| Issue | 摘要 | 状态与修复 PR |
|---|---|---|
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | **Windows 网关在 2026.9.1 更新后彻底无法启动** — 新增 `--task-supervisor` 标志静默退出（exit 0），子进程从未被拉起。影响所有 Windows Scheduled Task 部署用户 | 无 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | **Codex PreToolUse hook 派生大量短生命周期 CPU 密集进程，卡死网关 RPC**（已标记 crash-loop） | 无 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | **Live Docs 超前于发布版本** — `heartbeat.IsolatedSessions` 配置项仅在文档中出现，2026.3.13 未包含。用户按文档配置即报错 | 无，release-blocker |

### P1（高影响）

| Issue | 摘要 | 状态与修复 PR |
|---|---|---|
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | **WhatsApp 1:1 图片消息导致消息通道停滞约 3 分钟**，多模态处理悬挂 `active_reply_work`/`queued_work_without_active_run`。2026.6.10 仍可复现（post-#95039） | 无，需在线复现 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **hook/tool 子进程泄漏导致僵尸进程累积、运行时劣化** | 无，需补充信息 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | **Codex OAuth 刷新表面成功（probe 通过），但 cron/heartbeat 持续 10s 认证超时** | 有对应 PR 在推进 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | **gemini-3.1-pro-preview 任意消息触发 "Cannot convert undefined or null to object"**（2026.3.2 回归） | 无 |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | **Matrix 房间 Agent 可能因可见的"无回复"输出陷入自循环**，重启后重放陈旧会话状态，且绕过 reply-gating | 无 |

### P2（值得关注）

| Issue | 摘要 | 状态与修复 PR |
|---|---|---|
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | **工作路径被硬编码进代码并已随版本发布** — 用户安装后工作区被设为 `/Users/wangtao`，属于安全事故级回归 | 无 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | **macOS 网关空闲时 heap 从 ~558MB 增长至 1073MB+**，内存压力下 cron 任务静默失败 | 无，涉及 #86613/#86509 |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) | **单次 claude-cli 回合被两个 writer 写入 transcript 两次，且组装规则不同**，记录非逐字节一致，造成状态混乱 | 有对应 PR |
| [#88079](https://github.com/openclaw/openclaw/issues/88079) | **WebChat 中 Kimi Code / DeepSeek Reasoner 的 reasoning_content 不流式渲染**（仅 MiniMax 正常） | 有对应 PR |
| [#137856](https://github.com/openclaw/openclaw/pull/137856) | **ClawHub 插件 federation 本地插件发现实现** | 等待作者响应 |

### 与上述 Bug 直接关联的修复 PR（进行中）

- **#97616（僵尸进程）** 与 **#91009（Codex hook CPU 失控）** 的根因相近（子进程生命周期管理），维护者 steipete 的 PR #139020 可部分覆盖（父进程停止时子进程拦截），但仅解决了 **root** 问题的一部分，尚无针对 hook 进程的完整修复。
- **#118185（transcript 双写）** 有 PR #139002（输入重定位事务安全化）跟进，但侧重输入侧而非输出侧双写。

**判断**：当日最严重的 P0 集群（Windows 启动失败、Codex hook 失控、Docs 超前）均无对应修复 PR，且部分问题拖延周期极长（#48920 从 3 月即存在，至今无解），发布质量仍存在明显缺口。

## 6. 功能请求与路线图信号

以下功能请求讨论度较高、或已有较明确实现路径，值得作为下版本候选：

| 功能请求 | 核心诉求与信号 |
|---|---|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout threshold（👍8） | 要求把流式看门狗 30s 阈值改为可配置，以兼容长思考模型。讨论热度高（16 评论），是明确的产品化配置需求 |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) MathJax/LaTeX 支持 Control UI（👍10） | 科研/教学用户高频需求。👍为同批最高，用户粘性场景明确 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap 文件加载 | 规避子代理/cron 全量加载造成 token 浪费。配合 #67419 的语境膨胀报告（每回合重注入浪费 20–30% token），上下文管理已是明显痛点 |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) 内置 headless 浏览器 | 减少对用户 Chrome 的依赖，提升 JS 渲染/需登录页面可达性。重量级功能，短期内实现优先级待产品决策 |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-Slot Memory Architecture（👍3） | 将单一 memory slot 替换为多用途槽位，让不同 memory provider 并行分管不同记忆层。方向性设计提案 |
| [#45771](https://github.com/openclaw/openclaw/issues/45771) 面向自主 Agent 的 pace-aware rate limiting（👍2） | 自主循环（subagent、heartbeat）耗尽 API 额度前预警，运维向诉求 |
| [#101665](https://github.com/openclaw/openclaw/pull/101665) feat: let plugin tools yield turns | 允许插件工具将控制权让渡给外部交互表面后在同一回合内恢复，扩展插件能力边界。PR 为 showcase 标记 |

**信号解读**：功能请求的核心矛盾都指向 ** 上下文窗口管理（#22438/#67419/#60572）** 和 **模型的多样性适配（#68596/#88079）**。前者的多个相关 Issue（#67419、#22438）都停留在 needs-product-decision 阶段，说明官方尚未定调。若继续拖延，很可能被第三方方案（如上下文压缩中间件）抢占生态位。

## 7. 用户反馈摘要

- **对 Windows 支持的批评**："2026.9.1 更新后网关直接不再启动，`--task-supervisor` 静默退 0，没有任何日志提示。这不是 beta 应该出现的状态。"——来自 #137813。反映出近几个版本对 Windows 用户的基本可用性重视不足。
- **对 LangChain/开关式 API 计数的抱怨**："每回合 bootstrap 文件都要重新注入，20-30% 的 token 被无谓消耗，MEEMORY.md 加 SOUL.md 这些动辄几千 token。"——来自 #67419、#22438。高频使用场景下，上下文开销已成为用户最直接的"成本"感知来源。
- **对稳定性反复出现的失望**："我不知道这位 wangtao 是谁，但我刚全新安装就把工作区设到了 `/Users/wangtao` 之下。这种硬编码路径居然被合并发出版本了。"——来自 #51429。安全边界突破加剧不信任。
- **积极信号**：对本地模型配置链路仍有用户在尝试并给出详细复现步骤（#138850 关闭了 #138753），说明本地模型 + OpenClaw 的组合存在稳定的 niche 用户群体，且他们愿意与维护者配合排查问题。
- **对文档同步缺失的不满**："文档里写着 `IsolatedSessions` 可用，但装的最新版根本没有。这已经不是第一次了。"——来自 #48920。文档先行但版本滞后的案例反复出现，削弱了官方文档的公信力。

## 8. 待处理积压 — 长期未响应的重要 Issue/PR

> 以下问题均已被 Issue 自动化标注或讨论长期停滞，但影响面较大，需维护者安排优先级。

### 高危 Issue（长期无 fix PR 且被标记为 recovery-stuck / needs-maintainer-review）

| Issue | 标签 | 摘要 | 持续时间 |
|---|---|---|---|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | P1, platinum hermit, 无修复 PR | Steer 模式不生效，仅排队 | 自 2026-03-16，近 6 个月 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | P1, diamond lobster, 无修复 PR | 2026.3.2 起 google-vertex/gemini 任意消息崩溃 | 自 2026-03-06，6 个月 |
| [#56692](https://github.com/openclaw/openclaw/issues/56692) | platinum hermit, 无修复 PR | 群聊中无法区分消息是发给当前 Agent 还是其他 Agent | 自 2026-03-29 |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | P1, platinum hermit, 无修复 PR | Matrix 房间 Agent 自循环、重启后陈旧会话重放 | 自 2026-07-27，亦被标记需在线复现 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | crash-loop + 内存增长 | 空闲内存膨胀至 1GB+，cron 静默失败 | 自 2026-05-27，涉及 #86613/#86509 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | P0, release-blocker | Live Docs 超前于发布，配置即崩 | 自 2026-03-17，近 6 个月 |

### 积压 PR（等待作者 / 等待维护者决策超过 1 个月）

| PR | 规模 | 摘要 | 停滞原因推测 |
|---|---|---|---|
| [#119975](https://github.com/openclaw/openclaw/pull/119975) fix(gateway): report active unmanaged restart startup accurately（clawsweeper 自动化生成） | M | 修复 SIGUSR1 重启路径误报 60s 健康超时 | 等待作者响应，8 月 6 日至今已近 1 个月 |
| [#120012](https://github.com/openclaw/openclaw/pull/120012) fix(qa): invalidate stale profile evidence before planning | S | 防止 QA 失败后误用陈旧证据文件 | 自动化 QA 流程类 PR，8/6 已标记 stale |
| [#101665](https://github.com/openclaw/openclaw/pull/101665) feat: let plugin tools yield turns（showcase） | XL | 插件工具可在外部交互后于同回合继续 | 需求需产品决策，7/7 至今，缺乏 proof |
| [#119739](https://github.com/openclaw/openclaw/pull/119739) fix(doctor): refresh planner statistics (ANALYZE) after SQLite compaction | S | VACUUM 后不刷新 SQLite 统计信息导致查询计划陈旧 | 需 proof，8/5 提交尚无回应 |

---

**总结**：OpenClaw 社区活跃度高（每日 500+ 条 Issue/PR 更新），控制面（Control UI 插件体验、本地模型能力保留）正持续进步。但稳定性的历史包袱沉重——P0 级问题（Windows 启动失败、Codex hook 进程失控）悬而未决、多个高价值 Issue 积压逾半年无修复 PR，且每次发布都伴随新回归。建议维护团队优先收敛"发布阻断级"问题并建立更严格的发布前回归测试矩阵；同时，对文档（如 #48920）与版本的一致性进行把关，防止生态信任进一步流失。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期**: 2026-09-05
**数据窗口**: 2026-09-04 至 2026-09-05

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态正处于**高活跃度的密集迭代期**，各项目日均产生数百条 Issue/PR 更新，核心维护者持续进行大规模架构重构（如 OpenClaw 的子进程治理、NanoClaw 的 provider 合约化、ZeroClaw 的 Shell V1 权限策略）。稳定性历史包袱沉重——P0/P1 级 Bug 存量在各主流项目中普遍积压，发布伴随新回归（OpenClaw Windows 网关启动失败、Hermes SSH 全 API 401）成为常态。与此同时，**上下文窗口管理、Provider 生态兼容性、子进程/内存边界治理、多通道消息一致性**在多个独立项目中同步涌现为共同的技术瓶颈，表明生态正从"功能扩张期"进入"稳定性与成本治理期"。跨项目共有的信号是：**架构治理（重构、合约化、RFC 流程）已取代单一功能开发成为社区活动的重心**。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | PR 合并/关闭 | 新版本 | 健康度评级 | 关键备注 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（95.6% 活跃） | 500（78.2% 待合并） | 109 | 无 | ⚠️ 中等偏差 | 活跃度最高，但 P0 积压+回归频繁，质量受质疑 |
| **ZeroClaw** | 47（37 活跃/10 关闭） | 50（46 待合并/4 合并） | 4 | **v0.8.5**（454 commits） | ✅ 良好 | 发布稳健、安全修复闭环完整，但 PR 审阅带宽或成瓶颈 |
| **Hermes Agent** | 45 | 37 | 13 | 无 | ⚠️ 中等 | 大规模重构后处于密集修复/复盘阶段，更新机制有缺陷 |
| **NanoClaw** | 1 | 17（16 待合并） | 1 | 无 | ⚠️ 中高风险 | 待合并 PR 积压严重（16 条），P0 OOM 无修复 PR |
| **PicoClaw** | 3 | 23（21 合并） | 21 | 无 | ✅ 良好 | 积压老 PR 批量清仓合并，推进效率高 |
| **CoPaw** | 10（7 新开/3 关闭） | 8（全待合并） | 0 | 无 | ✅ 良好 | 响应迅速（Bug 当日关闭），功能与修复并行 |
| **IronClaw** | 3（1 开/2 关） | 8（5 待合并/3 合并） | 3 | 无 | ✅ 良好 | Telegram 集成密集修复，规模较小但闭环完整 |
| **LobsterAI** | 0 | 4（3 待合并/1 关闭） | 1 | **2026.9.4 + 2026.9.3** | ⚠️ 中等 | 发布节奏密集，但 2 条 PR 积压逾 5 个月 |
| **NanoBot** | 3（2 开） | 10（8 待合并） | 2 | 无 | ✅ 良好 | 外部截止日期驱动修复效率高，PR 队列活跃 |
| **NullClaw** | 1 | 0 | 0 | 无 | ⚠️ 低活跃有隐忧 | Issue #993 开放 12 天无维护者响应 |
| **Moltis** | 1 | 0 | 0 | 无 | ✅ 平稳 | 低活跃但积压良好 |
| **TinyClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 | — |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ 无活动 | — |

---

## 3. OpenClaw 在生态中的定位

### 优势
- **社区规模生态位第一**：日均 500+ Issue/PR 更新，远超其他项目（第二名 ZeroClaw 约 50 条），活跃开发者基数大
- **ClawHub 插件生态**：Control UI 统一内置与 ClawHub 插件发现逻辑（PR #138755），是生态中唯一构建系统化插件市场的项目
- **本地模型能力保留**（PR #138850）与跨端状态一致性修复（PR #138976）显示其在配置复杂度和多渠道场景上的深度

### 技术路线差异
- **核心短板——稳定性债务**：P0 级问题（Windows 网关启动失败 #137813、Codex hook 进程失控 #91009、Docs 超前 #48920）长期无修复 PR；多个高优 Issue 积压逾 6 个月（#48003 steer 模式、#38327 gemini 回归）；每次发布伴随新回归
- **发布质量失控**：文档与版本不一致（#48920 从 3 月至今无解）、硬编码路径随版本发布（#51429）暗示发布前测试矩阵不健全

### 对比结论
| 维度 | OpenClaw | ZeroClaw | Hermes Agent |
|---|---|---|---|
| 社区规模 | 极大（500 条/日） | 大（50 条/日） | 中（45 条/日） |
| 稳定性表现 | **偏差**（P0 无修 + 回归频繁） | **良好**（S1 均有 fix PR 闭环） | **中等**（重构后修复密集但更新机制有缺陷） |
| 架构演进 | 子进程治理+跨端一致性 | Shell V1 权限策略 + RFC 驱动 | 34.4% LOC 大规模削减后复盘 |
| 发布质量 | **差**（发布前测试不足） | **稳健**（v0.8.5 含 454 commits） | **中等**（重构后多处回归） |

**核心判断**：OpenClaw **规模领先但质量治理明显落后于 ZeroClaw 等竞品**。若稳定性问题持续不收敛，庞大的社区规模可能成为双刃剑——用户耐心被消耗时流失速度同样快。生态中的后发项目（如 ZeroClaw 以 RFC 驱动的治理模式）代表了可参考的替代路径。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文/记忆管理** | OpenClaw（#22438 分层 bootstrap、#67419 token 浪费）、NanoBot（PR #5656 压缩可视化）、NanoClaw（#3716 PreCompact OOM）、Hermes（PR #87217 工具参数重放）、CoPaw（#7571 记忆失效）、Moltis（#1259 推理级别持久化） | 上下文预算控制、压缩可见性、持久化有界性、记忆可靠性是最集中的痛点 |
| **Provider/模型兼容性** | OpenClaw（#38327 gemini 回归、#68596 看门狗超时）、NanoBot（#5661 OpenCode session header、PR #5666 aimlapi）、NanoClaw（#3584-#3592 provider 合约化）、PicoClaw（#1683/#1854/#1858/#1860 openai_compat 系列）、ZeroClaw（#10530 thinking 参数透传）、CoPaw（#7474 自定义 provider 回归）、Hermes（#85213 grok-4.5 路由） | 多模型适配、长思考模型兼容、provider 抽象层合约化、配置校验一致性 |
| **子进程/资源边界治理** | OpenClaw（#139020 子进程拦截、#91009 Codex hook 失控、#97616 僵尸进程）、NanoBot（#5663/#5664/#5665 无界缓存、GUTYL 内存修复系列）、Hermes（#60543 /steer 竞态、#103398 Windows terminal 卡死）、ZeroClaw（#10536 macOS Seatbelt 沙箱失效、#10534 delegate 越权） | 无界缓存治理、孤儿进程拦截、沙箱策略一致性、竞态条件修复成为跨项目共同模式 |
| **多渠道/消息一致性** | OpenClaw（#138976 进度卡片跨客户端归属）、NanoBot（#5567 飞书消息整合）、PicoClaw（#1855/#2088/#2090 Telegram/Slack 系列）、IronClaw（#8054/#8073/#8074 Telegram 配对文案）、ZeroClaw（#9348 WhatsApp 配置陷阱、#9487 RFC 会话传输层）、LobsterAI（PR #2617 浏览器标签控制） | 渠道消息格式收敛、配对/连接状态文案精确性、多用户与共享频道场景下的语义区分 |
| **安全/权限边界** | ZeroClaw（RFC #7155 Shell V1 权限、#10533 配置校验不一致）、NanoClaw（#3720/#3721 安装治理）、LobsterAI（#1070 per-session MCP 开关）、OpenClaw（#51429 硬编码路径安全事故） | 权限策略落地、配置校验防错、安装流程供应链安全 |
| **多智能体/团队协作** | CoPaw（#7318 QwenPaw Hub 多租户、#7557 skill 版本管理）、OpenClaw（#48003 steer 模式）、Hermes（#97681 桌面关闭后 Bot 存活）、NanoClaw（#3718/#3719 A2A 通信） | 从个人助手走向团队工具、异构 Agent 间通信身份与可观测性 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 | 核心优势 | 核心风险 |
|---|---|---|---|---|---|
| **OpenClaw** | 全功能个人助手 + 插件生态 | 开发者和高级用户，跨多平台 | 网关-子代理架构，ClawHub 插件市场 | 生态规模最大、功能最全 | 稳定性债务沉重、发布质量失控 |
| **ZeroClaw** | 渠道连接 + 安全治理 | 自托管用户、对安全敏感用户 | RFC 驱动的架构演进、ZeroRelay/ZeroRouter 组件 | 安全治理最正规（策略闭环） | PR 审阅带宽瓶颈（46 条待合并） |
| **Hermes Agent** | 桌面/移动端 + 多 Agent 编排 | 桌面重度用户、并行 Agent 调度 | 巨型重构后（-34.4% LOC）密集修复 | 架构最新、主动复盘（dogfooding） | 重构后功能回归点多、成本失控（$19,303 单次运行） |
| **NanoClaw** | Provider 合约化 + 多 Provider 聚合 | 使用多模型 Provider 的高级用户 | zvi-fried 主导的合约化重构系 | Provider 抽象层理论最完善 | 12+ PR 重构系列积压 9 天未合并，P0 OOM 无响应 |
| **PicoClaw** | 渠道多样性 + OpenAI 兼容供应商 | 渠道集成用户、轻量部署 | 批量合并积压 PR 模式 | 清仓效率高（21 PR 合并） | "合集式合并"导致溯源困难 |
| **CoPaw（QwenPaw）** | 多智能体编排 + 技能生态 | 多 Agent 生产集群用户 | Hub 多租户规划中（2.2.0） | 响应迅速（Bug 当日关闭） | 记忆可靠性差、异常栈被吞 |
| **NanoBot** | 轻量多渠道 Bot + 可观测性 | 个人 Bot 开发者，飞书/Telegram/Slack 用户 | 内存边界修复密集（Shizoqua 系列） | 外部截止日期驱动效率高 | 功能聚合期，合并节奏需把控 |
| **IronClaw** | Telegram 深度集成 + subagent 投递 | Telegram Bot 重度用户 | 小步快跑、闭环修复模式 | 规模小但闭环完整 | 功能面较窄 |
| **LobsterAI** | 应用内浏览器 + Cowork 协作 | 桌面端协作用户 | 高频迭代发布（9.3→9.4 连续两天） | 发布节奏快 | 2100+ 行核心组件技术债、2 PR 积压 5 个月 |
| **NullClaw** | 轻量单文件（Zig）实现 | 自托管轻量部署用户 | 单一工具链（Zig） | 极简 | 低活跃 + 维护响应迟缓（12 天无回应） |
| **Moltis** | 极简助手核心 | 轻量、低复杂度需求的用户 | 单 Issue 工作日 | 积压管理良好 | 活跃度过低，迭代慢 |
| **TinyClaw / ZeptoClaw** | — | — | — | — | 无活动，生态位存疑 |

---

## 6. 社区热度与成熟度分层

### 第一层：核心活跃 — 快速迭代期（每日 50+ Issue/PR 更新）
| 项目 | 阶段特征 | 数据支撑 |
|---|---|---|
| **OpenClaw** | 极高活跃度，但处于"修复追赶"模式 | 500 Issue/500 PR 更新/日，P0 积压，无版本发布 → **活跃度高 ≠ 交付质量高** |
| **ZeroClaw** | 发布驱动 + RFC 治理并行 | 454 commits 版本 + 4 个深入 RFC（最高 32 评论）→ 进入"扩张 + 治理"双轨期 |

### 第二层：中高活跃 — 功能密集聚合期（每日 20-50 条更新）
| 项目 | 阶段特征 | 数据支撑 |
|---|---|---|
| **Hermes Agent** | 重构后质量巩固 + 复盘优化 | 13 PR 合并/关闭，dogfooding 追踪（#103563→13 PR 计划）|
| **NanoClaw** | 架构规范化改造期 | 16 条 PR 待合并，12 条为维护者重构系列（积压 9 天+）|
| **PicoClaw** | 清仓式推进期 | 21 PR 合入，含 3 月/8 月老 PR |

### 第三层：中活跃 — 稳定迭代期（每日 1-20 条更新）
| 项目 | 阶段特征 | 数据支撑 |
|---|---|---|
| **CoPaw** | Bug 响应高效 + 功能并行 | Bug 当日关闭×2，8 PR 待合并（Advisor Mode、MCP 超时等）|
| **NanoBot** | 外部因素驱动的高效节奏 | OpenCode 截止日期驱动 x-opencode-session 修复当日响应 |
| **IronClaw** | 小步快跑、闭环完整 | 3 合并 + 5 待合并，全部围绕 Telegram |

### 第四层：低活跃/间歇期
| 项目 | 阶段特征 | 数据支撑 |
|---|---|---|
| **LobsterAI** | 发布密集但社区交互少 | 连续 2 版本发布，但 0 Issue 更新、2 PR 积压 159 天 |
| **NullClaw** | 代码花园维护间歇期 | 仅 1 Issue，12 天无维护者响应 |
| **Moltis** | 稳定维护 + 偶发需求 | 1 新 Issue，无 PR/版本 |
| **TinyClaw / ZeptoClaw** | **无活动** | 数据窗口内零动态 |

---

## 7. 值得关注的趋势信号

### 信号一：成本控制与上下文治理成为第一优先级（已从"功能需求"升级为"稳定性事故"级）
NanoClaw 的 OOM 崩溃循环（#3716）、OpenClaw 的 token 浪费报告（#67419，每回合 20-30%）、Hermes 的 $19,303 单次运行成本复盘（#103563）共同指向一个事实：**在长会话、自主 loop 场景下，上下文与 API 成本已从可优化项变为事故触发源**。建议开发者优先设计"有界上下文"（轮转/截断/增量写入），将成本治理视为架构需求而非功能锦上添花。

### 信号二：Provider 抽象层进入"合约化"阶段
NanoClaw 的 provider 合约化重构系列（#3584-#3592，12+ PR）与 Hermes 的多 Provider 路由（#103194 将 Hermes 作为外围编码 Agent 的路由中枢）代表两种路线：**语言层面的强制合约**（byte-identical output 验证）与**产品层面的统一路由**。OpenClaw 的本地模型保留修复（#138850）则暗示模型能力差异正在影响核心产品逻辑。行业正在从"能用哪个模型"转向"如何用一套抽象管理所有模型"。

### 信号三：多 Agent / 多租户是明确的下一增长曲线
从个人助手走向团队工具是多个独立项目的同步方向：CoPaw 的 QwenPaw Hub 多租户讨论（22 评论）直接征询社区路线、Hermes 的多机分布式 Bot 连续运行需求（#97681）、ZeroClaw 的会话与传输层重构 RFC（#9487，32 评论）、NanoClaw 的 A2A 通信身份修复（#3718/#3719）。**共享频道中的语义区分（谁在跟谁说话）、多用户协作、跨设备持续运行**是架构层必须提前考虑的设计约束。

### 信号四：渠道 API 的外部演进正在产生真实封锁压力
NanoBot 的 OpenCode `x-opencode-session` header 截止日期（2026-09-06 起报错）是典型案例——外部平台变更驱动了优先级 p1 的当日修复。这意味着 Agent 生态项目对上游 Provider/渠道 API 的依赖正在加深。建议开发者**关注所选框架对外部 API 变更的响应速度**——NanoBot 当日响应是标杆，而 OpenClaw 的 gemini 回归拖了 6 个月则构成实际风险。

### 信号五：发布质量与更新机制成为信任分水岭
OpenClaw 的"文档超前于版本"（#48920）、"硬编码路径发布"（#51429）、Hermes 的"更新成功被误判永久循环"（#103590）反映出**更新机制本身的质量**正在成为用户留存的关键变量。相反，ZeroClaw 的 v0.8.5（454 commits 覆盖安全、连接性、操作体验）显示"大版本 + 完整安全闭环"的发布模式能构建用户信心。建议维护者将"发布前回归测试矩阵"和"文档-版本一致性检查"设为发布阻断级门槛。

### 信号六：第三方轻量项目（如飞书/Lark 渠道的开源实现 NanoBot、PicoClaw）正在通过渠道深度建立差异化壁垒
NanoBot 的飞书多轮消息聚合方案（#5567）指向用户需要"人话"级别的消息体验，而不是原始的工具输出。这意味着**渠道层的 UX 精细化（消息整合、状态提示、权限文案）正在成为新的差异化竞争点**。建议开发者关注轻量级个人助手项目如何在高频渠道场景下，通过消息形态收敛、卡片流式优化等"最后一公里"打磨，建立起对大型项目的竞争优势。

---

*报告生成时间：2026-09-05 | 数据来源：各项目 GitHub 仓库公开 Issue/PR 动态 | 所有数据均来自提供的项目摘要材料，未做任何推断性补充。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-05

## 1. 今日速览

NanoBot 项目整体活跃度较高，24 小时内收到 3 条 Issue 更新（2 条开放）和 10 条 PR 更新（8 条待合并），其中多份来自社区贡献者的内存边界修复 PR 体现了项目对长期稳定性问题的关注。新版本发布为 0，但待合并 PR 队列聚集了来自多个方向的功能增强——OpenCode 会话亲和性支持、上下文压缩可视化、飞书消息整合等。项目正处于密集的功能聚合期，配合 9 月 6 日 OpenCode 官方对缺失 `x-opencode-session` header 请求将开始报错这一外部截止日期，Provider 相关修复进入了较高优先级状态。社区讨论热度集中，Issue #5567（飞书消息整合）以 4 条评论成为当前热点话题。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

过去 24 小时内有 2 条 PR 被合并/关闭，呈现了直接影响用户体验的改进：

- **[PR #5660] feat(webui): show model generation speed in context usage popover (#5631)** — 由 HaisamAbbas 提交后合并（2026-09-04 关闭），回应了 Issue #5631 的诉求（在 webui 中展示上下文与模型速度信息）。该 PR 在作曲器上下文使用弹窗中新增了**模型生成速度（tokens/秒）** 显示，补齐了原有每轮上下文与 token 用量之外的性能指标缺口——尽管该 PR 今日已关闭，用户可以预期后续部署中使用到这一能力。
- **[PR #5639] fix: stabilize session labels, TUI streaming, and pairing prompts** — 由 Re-bin 提交后合并（2026-09-04 关闭）。修复内容涵盖三个方面：居中项目级会话句柄与标题而不改变顶层话题布局；将 OpenTUI 从 0.5.3 升级至 0.5.10 以解决流式代码块在响应完成后仍保持可见的问题；以及应用活动终端前景色到配对提示。该修复提高了 TUI 场景下的终端渲染稳定性和可读性。

值得注意的是，待合并队列中有 4 条来自 Shizoqua 的内存边界修复 PR（#5663、#5664、#5665）以及上下文压缩可视化 PR #5656，若顺利合入将显著改善长期运行场景与渠道间上下文可见性。

## 4. 社区热点

- **[Issue #5567] Feat: 飞书渠道应整合多轮回复为单条流式卡片消息** — 作者 yrxeva，创建于 2026-08-27，4 条评论，今日讨论活跃度最高。核心诉求是 agent 在飞书渠道回复用户时可能产生 n 条消息（工具提示、进度消息、最终回复等），破坏了消息一对一的预期。作者希望整合成一条流式卡片消息，并指出流式输出阶段已有 CardKit 流式卡片实现（`send_delta()`），但工具调用阶段通过独立 `send()` 发送仍是割裂的。该 Issue 已开放 9 天且不断有讨论，反映**多渠道消息聚合**是当前用户端体验的集中痛点。

- **[PR #5662] feat(providers): send x-opencode-session header for OpenCode session** — 作者 GUTYL，待合并，与 Issue #5661 配对（priority: p1）。响应 OpenCode 官方公告：**2026-09-06 起**，缺少 `x-opencode-session` header 的 Zen/Go 请求将丢失 prompt-cache 优化并可能直接报错。由于这是外部平台截止日期驱动的问题，社区关注度高，配套 Issue #5661 在创建当日即获得 PR 响应，体现了快速行动节奏。

值得留意的是上述两处热点的共同信号：**基础设施级协议兼容性（如 header、session affinity）与用户体验打磨（消息形态收敛）构成当前双重演进路径**。

## 5. Bug 与稳定性

按严重程度排列：

**较高优先级（外部时间线驱动）：**

- **[Issue #5661 / PR #5662] OpenCode Zen/Go 缺失 `x-opencode-session` header** — OpenCode 官方公告指出部分使用 OpenCode Go 的工具缺少该 header，导致无法利用 prompt-cache 优化且 **2026-09-06 起相关请求可能报错**。PR #5662（priority: p1）已提交并指向关闭此 Issue，修复已就绪但尚未合并。

**中等优先级（P2，已有 fix PR）：**

- **[PR #5663] fix(mattermost): bound thread context cache** — Mattermost 线程上下文缓存存在无限增长问题：每个被检查的线程都会向进程生命周期的集合添加标识符且从未清理（根因：`_thread...`），已修复待合并。
- **[PR #5664] fix(agent): bound idle summary cache** — 空闲会话摘要缓存无边界：摘要保留至会话重新打开，被抛弃的会话可导致缓存无限增长（根因：`Aut...`），已修复待合并。
- **[PR #5665] fix(mcp): bound browser OAuth flows** — MCP 浏览器 OAuth 流程在内存中无边界保留直至五分钟到期，快速重启可导致流程注册表无限增长，已修复待合并。

**低优先级（无对应 fix PR）：**

- **[Issue #5647（PR #5648 指向）] webui 标题生成前的会话元数据检查缺失** — 待合并的 PR #5648 处理了 PR #5528 引入的 `target_session_key` 支持在特定情况下影响会话标题归因的问题。

以上 3 条 P2 修复共指同一模式：**无边界内存缓存的持续治理**，建议维护者优先审阅合并以避免部署层面的累积风险。

## 6. 功能请求与路线图信号

- **[Issue #5567] 飞书渠道多轮回复整合为单条流式卡片消息** — 用户明确描述了当前流式（已有 CardKit 实现）与工具调用阶段（独立 `send()`）的行为差异，形成完整的需求描述。当前无关联 PR，但该 Issue 已开放 9 天并持续获得讨论，暗示其可能进入下一版本规划。期望的交付形态面向 **消息渠道体验统一**。

- **[Issue #5661 / PR #5662] OpenCode 会话亲和与 `x-opencode-session` header 支持** — 请求已被 PR #5662 完整实现（priority: p1），待合并。此为外部截止日期（2026-09-06）驱动的功能修复，预计将在近一两个版本内发布。

- **[Issue #5631] webui 展示上下文与模型速度信息** — 其诉求大部分已通过 PR #5660 实现（模型生成速度已加入上下文使用弹窗），该需求建议可切换为已解决状态。

- **[PR #5656] 上下文压缩在渠道间可见** — 新增 `/compact` 命令将当前会话整合至 `memory/history.jsonl`、为手动/回合内/空闲后台压缩分别发出结构化生命周期事件，并展示专门的压缩指示。待合并，该功能将把上下文管理从隐式后台行为提升为显式可操作能力。

- **[PR #5666] 内置 aimlapi.com 作为 OpenAI 兼容网关 Provider** — 由 aimlapi.com 成员提交，声称聚合了 1000+ 模型、服务 400k+ 用户，请求作为内置 provider 选项。待合并待审。该 PR 体现了 Provider 生态的持续扩张及第三方主动集成的活跃度。

信号综合：**上下文管理可见性**与 **Provider 兼容性**是两个活跃演进的维度，多份 PR 指向其将成为近期版本的增量。

## 7. 用户反馈摘要

- **飞书用户（yrxeva，Issue #5567）**：对工具调用阶段多条消息分割用户体验表达了明确不满，“用户发一条消息 → agent 回复 n 条消息”的现状是他们希望纠正的核心场景。该反馈同时给出了确切的期望行为（一对一流式卡片消息）与当前实现的细节（`send_delta()` vs `send()` 的分歧），是高质量的可执行问题描述。4 条评论的参与度侧面验证了其他用户对该痛点的共鸣。

- **webui 用户（Ying-Zi66，Issue #5631）**：希望在不离开当前会话的前提下直观看到模型速度与上下文消耗，并明确参考了类似 deepseek harness 的交互方式。该用户的建议迅速转化为实现（PR #5660），是社区反馈转化为交付的高效案例。

**综合感受**：用户对即时性能可视化的需求（webui）、对消息形态收敛的期望（飞书）、以及对上下文可管理性的要求（PR #5656 / #5631）共同指向目标：**把 agent 的中间状态从黑盒转为白盒**——不打断会话自然流动，又将决策可见性与可控性交还给用户。

## 8. 待处理积压

- **[PR #5520] feat(provider): langfuse tracing for codex** — 创建于 2026-08-24，已开放 12 天且持续更新（最近更新 2026-09-04）。该 PR 补充 Codex 的 Langfuse 追踪能力（通过 Langfuse 原生 SDK 为每次生成做追踪），此前仅 OpenAI-compatible provider 经由 SDK client-swap 技巧支持，而该方式不适用于 Codex 的原始 httpx + OAuth 传输。该能力对可观测性建设有方向性价值（每个生成对应一次追踪），建议维护者安排审阅，避免长期搁置。

- **[PR #5648] fix(webui): check session metadata when generating webui titles** — 创建于 2026-09-03，已引用 Issue #5647 并说明了 PR #5528（`a8ffe0f1`）中 `target_session_key` 支持引入回退的行为偏差。该修复对会话标题归因精度有直接影响，且正值 PR #5528 的后续反馈窗口期，宜及早合入以避开回归扩散窗口。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

```markdown
# Hermes Agent 项目动态日报 — 2026-09-05

## 1. 今日速览
- **活跃度：高**。过去24小时内有45个新开或活跃Issue、37个待合并PR，另有13个PR被合并或关闭，另有5个Issue被关闭。
- **无新版本发布**，项目正处在大规模代码库重构（PR #102117，全库削减34.4% LOC）后的密集修复与优化阶段。
- 维护者已开始对重构后的产物进行**自我复盘（dogfooding）**，打开了专门的性能追踪Issue（#103563），计划提交13个效率/准确性改进PR。
- **今日最严重**的是更新机制的两处逻辑缺陷（#103590、#98022）和Desktop SSH模式下全API 401的回归（#102930），后两者已有对应修复PR（#103613、#103501）。
- 大量提交集中在**更新流程、桌面端语音/浏览器生命周期、Windows平台适配、Telegram消息队列**等模块，修复多为针对具体回归的小而精的改动。

## 2. 版本发布
- 无新版本发布。

## 3. 项目进展
今日合并/关闭的重要PR主要涉及**高优先级安全和稳定性修复**：

- **PR #103501（已合并）** — 修复Desktop “Connect via SSH”模式下令牌在导入时被快照、导致每次API调用返回401的问题。改为在请求时读取会话令牌（关联Issue #102930）。这直接解决了一个使远程桌面控制完全不可用、标记P1的安全边界问题。
- **PR #103613（待合并）** — 修复 #103590 更新成功但被误判为未完成、永久跳出"pre-update modules"警告的逻辑缺陷，让"更新完成"判断恢复到正确路径（详见Bug章节）。
- 另有超过10个细分修复合入主分支，覆盖了CLI别名、工具分页、语音回放保真度、Telegram消息锚定等多个模块，体现了重构后对细节的清扫。

## 4. 社区热点
今日最受关注的问题集中在**自动化链路阻塞**和**并行机器人编排**上。

- **[Issue #88584（66条评论）](https://github.com/NousResearch/hermes-agent/issues/88584)**："Automated Nous integration is blocked"。一个长达近三周的自动化合并流程（Nous->Enterkey）因`cron/jobs.py`的冲突而持续受阻，且仪表盘更新卡在旧release上。这表面上是CI/CD问题，但这反映社区对于其底层用Hermes构建的自动化发布流水线的稳定性有很高的期望，长期未解决容易引起对项目本身自动化质量的质疑。
- **[Issue #97681（23条评论）](https://github.com/NousResearch/hermes-agent/issues/97681)**："Bot Group Chats should keep working after Desktop closes"。请求在退出桌面端后，群聊中由Hermes放置的Bots（来自笔记本、HomeLab或VPS）仍能继续运行。这触及多机分布式部署的边界问题（gateway-owned authority, cross-gateway transport），社区对"异地多活"和"常驻Bot服务"的架构需求已经显性化。

## 5. Bug 与稳定性
按严重程度排列：

**P1（高）**
- **[Issue #102930（👎3，9条评论）](https://github.com/NousResearch/hermes-agent/issues/102930)** — Desktop SSH模式全API 401。由于`--ssh-session-token-file`令牌成了导入时快照而非请求时读取导致。**已有Fix PR：** #103501（已合并）。
- **[Issue #98022（7条评论）](https://github.com/NousResearch/hermes-agent/issues/98022)** — `hermes update`的catch-up重启用例在遇到`latest.json`为陈旧中断收据时会无限循环重启。**暂无关联PR。**
- **[Issue #60543（5条评论）](https://github.com/NousResearch/hermes-agent/issues/60543)** — `/steer`指令存在竞态条件：在工具批次排空与下个API调用之间抵达的steer指令会静默丢失。涉及会话状态与消息投递的双重风险标签，属核心控制通道Bug。**暂无关联PR。**
- **[Issue #98682（3条评论）](https://github.com/NousResearch/hermes-agent/issues/98682)** — Nous Portal OAuth流程死锁（PKCE回调约8月27日起丢失、device-flow批准缺口）且客户端零错误提示。属于安全边界问题，且为本周用户之痛挖掘汇总。**暂无关联PR。**

**P2（中）**
- **[Issue #94032（4条评论）](https://github.com/NousResearch/hermes-agent/issues/94032)** — Desktop SSH启动时孤儿进程收割器用profile级HERMES_HOME扫描机器级锁，导致命名profile服务误杀远端隔离服务。**暂无关联PR。**
- **[Issue #87671（3条评论）](https://github.com/NousResearch/hermes-agent/issues/87671)** — Kanban停止nudge在`delegate_task`子进程中误触发，子进程可通过环境变量标记的CLI绕过工具级阻断逃逸并完成父任务（已发生7次生产事故）。**标记 `sweeper:risk-session-state`，暂无关联PR。**
- **[Issue #85213（👍2，2条评论）](https://github.com/NousResearch/hermes-agent/issues/85213)** — Copilot服务商下`grok-4.5`路由到`/chat/completions`导致HTTP 400，需切换到Responses API。**暂无关联PR。**
- **[Issue #103590（2条评论）](https://github.com/NousResearch/hermes-agent/issues/103590)** — 更新成功路径写入`stop_reason`导致`_receipt_looks_unfinished()`永远误判，前期warning永不消除。**已有Fix PR：** #103613。
- **[Issue #103398（3条评论）](https://github.com/NousResearch/hermes-agent/issues/103398)** — Windows平台`terminal`工具卡死数分钟：bash启动探测死锁，且kill后子进程存活。**已有Fix PR（部分）：** PR #103612.

**P3（低）**
- **[Issue #103546（3条评论）](https://github.com/NousResearch/hermes-agent/issues/103546)** — Desktop端裸`$...$`被误判为行内公式，导致CJK文本渲染异常且复制丢失源码。

## 6. 功能请求与路线图信号
- **[Issue #103194（3条评论）](https://github.com/NousResearch/hermes-agent/issues/103194)** — 请求让`/model`命令能定位并切换活动的Codex和OpenCode编码会话类型。这标志着用户已开始把Hermes当作多模型路由中枢来控制外围编码Agent。
- **[Issue #103563（2条评论）](https://github.com/NousResearch/hermes-agent/issues/103563)** — 维护者发起的性能追踪项，针对1,393子代理、$19,303成本的巨型重构运行做**事后复盘**，计划分批提交13个效率/准确度PR（今日PR列表中的多项fix均标记了此上下文）。
- 虽然打开即被标为duplicate，但 **[PR #103604](https://github.com/NousResearch/hermes-agent/pull/103604)** 探索将只读MCP工具以`hermes_tools`存根形式暴露进`execute_code`沙箱，这预示下一步方向可能是让代码执行环境能够安全调用外部MCP生态。

## 7. 用户反馈摘要
- **对远程/隔离场景的关注加深**：#102930、#94032讨论显示用户大量在“跨机器（Desktop <> Linux remote）”场景下使用Desktop SSH模式，对令牌安全边界和进程生命周期隔离的配置细节非常敏感，一旦401或进程被杀会直接影响工作流。
- **自动化流水线的稳定性焦虑**：#88584社区成员基于Hermes自动化的开发流程已运行三周，期间的合并冲突和仪表盘停滞消耗了信任度，评论中流露出希望官方用自身最核心的自动合并逻辑做示范的预期。
- **成本意识抬头**：#103563提及的一次`/goal`运行烧掉 $19,303 模型费用后，社区内部开始复盘工具调用的效率与子代理行为，大量PR（如#103612）倾向于精简重复工具参数与应用回归测试，是一种模型计费压力驱动的“磨刀不误砍柴工”的显性化。
- **桌面端体验细节**：#103546、#103611、#103605反映出用户在Chat UI渲染（数学公式误触）、语音对话连续性和播放控制上的体验正在被精细化，这属于重构后用户体验回归的高频扫描区。

## 8. 待处理积压
以下为长期未闭环、但直接影响关键体验或架构稳定性的事项：

- **[Issue #88584（已3周+）](https://github.com/NousResearch/hermes-agent/issues/88584)** — 自动Nous Integration被阻塞，CI/CD工程治理问题，建议维护者尽快人工仲裁`cron/jobs.py`冲突，恢复流水线健康。
- **[Issue #40456（已3个月+）](https://github.com/NousResearch/hermes-agent/issues/40456)** — Intel Mac用户无法运行Hermes Desktop(DMG仅含arm64)。尽管有8条评论且获赞，但长期无支持Intel的修复建议，平台覆盖策略待回应。
- **[Issue #97681（已1周+）](https://github.com/NousResearch/hermes-agent/issues/97681)** — 桌面关闭后Bot群聊存活问题。新架（`gateway-owned authority` + `scoped cross-gateway transport`）已在main上，但尚未在文档或Deskto层面暴露功能，属架构已就绪但产品化未跟进的典型案例。
- **[PR #87217（已3周+）](https://github.com/NousResearch/hermes-agent/pull/87217)** — 修复压缩上下文时工具参数的丢失与重放问题。被贴上 `needs-decision` 标签达数周，这直接关系到重构后大上下文会话的长期记忆可靠性，应优先决策是否以新方案落地。

```

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-05

## 1. 今日速览

PicoClaw 项目今日保持着较高的开发活跃度：过去 24 小时新增/更新 3 条 Issue、23 条 PR 记录，其中 21 条 PR 已合并/关闭，仅 2 条仍待合并。合并 PR 中包括多件长时间挂起的老 PR（3 月、8 月创建）被"清仓"合并，涵盖 MCP 故障挂起修复、Telegram/Slack 渠道缺陷修复、OpenAI 兼容供应商多项增强等。Issue 侧讨论焦点集中在 Web UI 聊天卡顿与长消息 IRC 支持。今日无新版本发布。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有 21 条 PR 被合并/关闭，大量为历史积压 PR 的批量合并，项目向前推进显著。代表性进展：

- **[MCP 故障挂起修复（#3337，8月提交，今日合并）](https://github.com/sipeed/picoclaw/issues/3337)**：修复 MCP 服务器连接失败（如服务器不可达）时 Agent 循环直接退出并导致挂起的问题；此前 `ensureMCPInitialized` 返回错误时 `AgentLoop.Run` 会传播错误并退出，修复后 agent loop 不再挂起。该 PR 同时被标记为 stale 后在今日合并，属于质量问题修复。
- **多 PR 批量合并（#1545、#1555、#1541，3月创建）**：作者 xuwei-xy 将早期积压的十多个 PicoClaw 修复 PR 合并集成为单条提交合入，涵盖 media tempdir、channel DoS hardening、DeepWiki badge 等。这种模式降低了维护者审阅负担，但也使问题溯源变得困难。
- **OpenAI 兼容供应商系列修复（#1683、#1854、#1858、#1860）**：合并了 4 项针对 `openai_compat` 供应商的改进——严格模式兼容（自动剥离非原生 OpenAI 供应商的 `strict: true`）、重复 tool_call_id 清理、Ollama 推理字段（thinking/reasoning）回退、Azure AI Foundry 端点识别（启用 prompt caching 和原生搜索）。
- **渠道层多项修复（#1855、#2088、#2089、#2090）**：Telegram 群组负数 ID 识别修复、Telegram 流式冗余草稿与路由修复、Slack @提及竞态条件统一 chatID 逻辑，以及针对默认开放机器人（空 `allow_from` 列表）的安全加固。
- **上下文溢出检测增强（#2016）**：优化 Agent 对 Anthropic、ZhipuAI、GLM 等供应商"context exceeded"错误的识别与分类，提升上下文溢出后的恢复能力。

## 4. 社区热点

- **[Issue #3281：Web UI 聊天输入在历史较长时严重卡顿（9 评论，2 👍）](https://github.com/sipeed/picoclaw/issues/3281)**
  这是当前最受关注、评论最活跃的 Issue。用户报告在单会话 Web UI 中输入卡顿，历史越长输入延迟越明显。属于高频基础体验问题，讨论热度较高。该 Issue 已存在约 6 周（7/21 创建），是否已有对应修复尚不明确，需维护者优先跟进。

- **[Issue #3287：IRC 长消息（IRCv3）应视为单一连续消息（10 评论）](https://github.com/sipeed/picoclaw/issues/3287)**
  讨论了 IRC 单条 512 字节限制下，超长消息与新行符的语义处理。虽然 👍 数为 0，但评论数最高，说明有实质讨论。涉及 IRCv3 协议细节，属于小众渠道的深度需求。

- **Issue #3366：OpenAI 兼容供应商接入（刚创建，0 评论）**：创建于昨日，尚无讨论，但结合今天批量合并的 #1683/#1854/#1858/#1860 来看，社区对这一方向的诉求在集中涌现并被逐步响应。

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题描述 | 状态 |
|---------|---------|------|
| 🔴 高 | **Web UI 长历史输入严重卡顿**（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）— 用户报告历史稍长时无法正常输入，直接影响核心使用体验 | Issue 开放中，9 评论，2 👍，无明确 fix PR 关联 |
| 🟡 中 | **MCP 服务器故障致 Agent 循环挂起** — 修复 PR [#3337](https://github.com/sipeed/picoclaw/issues/3337) 已获合并，问题应已解决 | ✅ 已修复（今日合并） |
| 🟢 低 | **IRC 长消息分片语义**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）— 512 字节限制下长消息被截断/拆分 | 功能改进请求，尚在讨论中 |

已合并的渠道缺陷修复（Telegram 流式草稿/路由、Slack 竞态条件）已在今日一并合入，这些渠道的稳定性问题应得到缓解。建议向提交 issue 的用户确认修复是否生效。

## 6. 功能请求与路线图信号

- **OpenAI 兼容供应商（[Issue #3366](https://github.com/sipeed/picoclaw/issues/3366)）**：用户希望添加"OpenAI Compatible"自定义供应商，以便接入自托管路由（如 9Router）。**路线图信号极强**——今日合并的 #1683、#1854、#1858、#1860 均为围绕 `openai_compat` 供应商的修复与增强，说明该项目方向是维护者当前的核心投入地带，新增功能请求大概率可被纳入下一版本。
- **IRC 长消息支持（[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)）**：基于 IRCv3 将长消息视为单一连贯消息。评论讨论已有一定深度（10 条），但 👍 数为 0，说明共鸣有限。优先级可能低于供应商扩展。
- **MCP 文档实用化（PR [#3368](https://github.com/sipeed/picoclaw/issues/3368) & [#3367](https://github.com/sipeed/picoclaw/issues/3367)）**：连续两天收到 MCP 配置文档补充 PR——Parallel Search 无需注册/API Key 的网页搜索与提取配置、Pilot Protocol 快速开始示例。说明社区对内建 MCP 服务的零门槛接入有持续需求，标准化的第三方 MCP 服务文档板块值得形成稳定结构。

## 7. 用户反馈摘要

- **核心痛点是性能**：Web UI 输入延迟（#3281）是当前最受关注且直接影响的反馈，用户@xpader 描述了完整复现步骤（打开会话 → 累积历史 → 输入卡顿），属于真实高频使用场景。从 Issue 的 2 个 👍 来看已有其他用户共鸣。
- **自托管 + 模型供应商兼容性的需求在放大**：从 #3366（OpenAI 兼容自定义供应商）、#1858（Ollama 推理字段）、#1860（Azure AI Foundry）等诉求来看，用户希望 PicoClaw 能适配更多模型来源而不是锁定单一供应商。这与项目近期合并的 PR 方向高度一致。
- **对安全默认值的关注**：PR #2088 说明用户有将 bot 开放给公众渠道的需求，但初始化 `allow_from` 为空时默认"全员放行"存在安全隐患，项目已在文档与代码层面做加固提示。

## 8. 待处理积压

- **[Issue #3281：Web UI 长历史输入卡顿（7/21 创建，已开放 46 天）](https://github.com/sipeed/picoclaw/issues/3281)**：社区讨论最热的技术问题，已有 9 条评论和 2 👍，仍未看到关联 fix PR 或维护者回复。建议维护者优先确认是否为已知性能瓶颈（如消息量过大时全量渲染而非虚拟滚动/增量渲染），并给出时间表或临时规避方案。
- **[Issue #3287：IRC 长消息支持（7/22 创建，已开放 45 天）](https://github.com/sipeed/picoclaw/issues/3287)**：评论最多（10 条）但无维护者明确表态，功能是否被纳入路线图未确认。建议维护者明确是否接受该特性，避免社区持续空转讨论。
- **低优先级批量合并 PR（#1545、#1555、#1541）**：采用"合并 PR 合集"方式将三月以来十余个小修复集中合入，分支粒度粗、单个 fix 的独立可追溯性差。若未来出现回归，问题定位将较困难，建议关注合入后的回归测试结果。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-05

---

## 1. 今日速览

NanoClaw 项目今日保持高活跃度：24小时内新增/活跃 Issue 1 条，新增 PR 17 条（其中16条待合并），暂无新版本发布。核心维护者 zvi-fried 持续推进 providers 合约化重构系列（横跨 #3584–#3592 及 #3722 等多条长期 PR），表明项目正经历一次中等规模的技术架构规范化改造。值得高度关注的是，新提交的 Issue #3716 指向 PreCompact 钩子在生产环境引发 OOM 崩溃循环，涉及完整对话历史的无界全量重写，属 P0 级稳定性风险，目前尚无对应修复 PR。项目整体架构演进活跃，但在关键稳定性问题的响应速度与"核心重构活"与"日常修复流"之间的节奏平衡上仍需关注。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日仅有 1 条 PR 被合并/关闭（#2403，已于 2026-09-05 关闭），该 PR 将 `bump-version` 替换为显式 Release workflow 并加入并发守卫，属于 CI/CD 流程治理范畴的长期改进，于 2026-05-10 提出、今日收尾。

**更为重要的是**，目前有 16 条 PR 处于待合并状态，其中 12 条出自核心维护者 zvi-fried 的 provider 合约化重构系列，构成今日项目进展的核心信号：

| PR | 变更内容 | 核心价值 |
| --- | --- | --- |
| [#3584](链接: nanocoai/nanoclaw PR #3584) | 实现 codex provider 合约 | 让 Codex 载荷绑定强制 provider 合约，同时保持对旧核心向后兼容 |
| [#3586](链接: nanocoai/nanoclaw PR #3586) | 声明 setup provider 合约并安装验证器 | 将安装验证纳入合约体系 |
| [#3588](链接: nanocoai/nanoclaw PR #3588) | 实现 opencode provider 合约 | 绑定 OpenCode 载荷到 provider 合约，输出字节级一致 |
| [#3591](链接: nanocoai/nanoclaw PR #3591) | 由核心渲染 provider 指令文本 | 将 agent 指令文案变为核心所有，消除 provider 自由格式指令段 |
| [#3592](链接: nanocoai/nanoclaw PR #3592) | 新增 `speed` 推理速率为核心所属 per-agent-group 属性 | CLI: `ncl groups config update --speed <tier>`，扩展 agent group 配置维度 |
| [#3355](链接: nanocoai/nanoclaw PR #3355) / [#3356](链接: nanocoai/nanoclaw PR #3356) | Cursor provider 安装 skill 与 SDK payload | 新增 Cursor 作为 agent provider |
| [#3722](链接: nanocoai/nanoclaw PR #3722) | OpenCode 安装 skill 采纳其合约 | providers 重构系列在前端 skill 层的落地 |

**风险评估**：该系列重构涉及 `area/core`、`area/agent-runner`、`area/providers` 等多个核心模块。虽然所有重构 PR 均标注 `byte-identical output` 或注明向后兼容，但如此大规模、长期未合并的合约化改造积压于同一时刻尚属少见，建议维护者尽快明确合并优先级与节奏，避免单次合并引入过多风险面。

---

## 4. 社区热点

今日唯一活跃 Issue **#3716** 是绝对焦点：24小时内唯一的 Issue，涉及生产环境 OOM 崩溃循环，且已有 2 条评论（在该 Issue 时间线上属较高讨论度）。该 Issue 直指 `PreCompact` 钩子的根本性设计缺陷（对**每次触发**执行完整对话历史的**无界全量重写**文件，无轮转、无截断），而非普通使用问题，社区焦点集中在**数据面稳定性**而非功能请求上。

除此之外，PR 评论区整体活跃度较低，zvi-fried 的大规模重构PR普遍缺失评论互动，值得关注的是该系列12条 PR 是否获得了充分的社区审视与 review。

---

## 5. Bug 与稳定性

**P0 — 生产环境 OOM 崩溃循环**（[Issue #3716](链接: nanocoai/nanoclaw Issue #3716)，状态：OPEN，**无对应修复 PR**）

- 触发条件：每次 `PreCompact` 钩子触发即写一个全新文件，包含整个对话历史的完整重序列化，写入 `/workspace/agent/conversations/`（或 `NANOCLAW_CONVERSATIONS_DIR`）
- 无轮转、无大小上限 → 持续增长直至 OOM
- 作者 `DawoudIO` 已确认其为**生产事故的真实根因**（real cause）
- 严重程度：崩溃循环 + 附带持续磁盘增长，属当前最高优先级事项
- 处理建议：应立即给出修复方案（至少需要：限制单次写入大小、轮转策略或增量写入架构调整），并评估是否需要在当前版本中发布 hotfix

**低危 — 嵌入载荷未转义**（[PR #3717](链接: nanocoai/nanoclaw PR #3717)，状态：OPEN，含修复）

- `petrolette` 提交修复：阻止嵌入载荷关闭其所在的组合 prompt 区块
- 已有修复 PR，等待合并评审

**低危 — A2A 通信身份/边界问题**（[PR #3718](链接: nanocoai/nanoclaw PR #3718)、[PR #3719](链接: nanocoai/nanoclaw PR #3719)，状态：OPEN，含修复）

- #3718: agent-to-agent 消息中发送者身份缺失导致合法请求被拒，修复后消息将标识真实发送 agent
- #3719: 通信失败（结构性拒绝、审批延迟、缺失回复路径、永久投递失败）的原因将反馈到发起聊天中，提升可观测性

**过时示例 — Anthropic 退役模型 ID**（[PR #3724](链接: nanocoai/nanoclaw PR #3724)，状态：OPEN，含修复）

- `add-opencode` skill 中使用的 Anthropic 模型 ID 已于 2026-06-15 退役，需更新文档示例。

---

## 6. 功能请求与路线图信号

**能力安装增强**（[PR #3720](链接: nanocoai/nanoclaw PR #3720)、[PR #3721](链接: nanocoai/nanoclaw PR #3721)，均出自 zvi-fried）

- **#3720**: 新增 `ncl skills list`、`plan` 及需 operator 显式启用的 `apply` 命令，支持结构化能力安装。源码安装默认禁用，需显式启用 Git 源 — **重要安全边界设计**
- **#3721**: 要求能力安装 skill **显式调用**，所有安装请求经由受守卫的 CLI 路由，并尊重部署拒绝策略（`needs-setup`、部署 refusal 不可绕过）
- 以上 PR 与今日 Issue #3716 无直接关联，但可视为项目在 **capability 供应链安全与安装治理**方向的布局。结合 #3586（setup provider 合约与安装验证器），"受治理的安装流程"很可能是下一版本的核心主题之一

**新增 `speed` 推理速率属性**（[PR #3592](链接: nanocoai/nanoclaw PR #3592)）

- 在 `model` 与 `effort` 之外新增核心属主的速度档位，配置命令需审批门禁 — 可能纳入 2026 下半年 feature 版

---

## 7. 用户反馈摘要

由于今日 Issue #3716 的 2 条评论内容未被纳入数据快照，无法提取更细粒度的用户反馈文本。但从 Issue 描述本身可提炼的反馈信号包括：

- **真实用户痛点**：对话历史的持久化策略仅做"整段全量写"，在长会话场景直接导致生产环境 OOM。用户不仅需要崩溃修复，更期望存储架构从"重复全量写入"转向"增量/有界写入"。
- **使用场景**：NanoClaw 已承载生产级工作负载，OOM 崩溃说明其在长会话、高频繁 compact 的真实场景下的持久化层不够健壮。
- **不满信号**：该问题长期潜伏至生产事故级别，侧面反映持久化文件管理方向的性能与资源边界测试不足。

---

## 8. 待处理积压

**高危积压**

| 编号 | 问题 | 提出时间 | 状态 | 说明 |
| --- | --- | --- | --- | --- |
| [Issue #3716](链接: nanocoai/nanoclaw Issue #3716) | PreCompact 全量重写致生产 OOM | 2026-09-04 | **无修复 PR** | 严重生产事故，需 24 小时内给出修复方案或至少缓解策略 |

**长期未决 PR（超过 7 天未合并）**

| 编号 | 变更 | 提出时间 | 已存续 | 说明 |
| --- | --- | --- | --- | --- |
| [#3355](链接: nanocoai/nanoclaw PR #3355) | 新增 Cursor `/add-cursor` 安装 skill | 2026-08-19 | 17 天 | 已获 core-team 标记，长时间未合并 |
| [#3356](链接: nanocoai/nanoclaw PR #3356) | Cursor Agent SDK provider payload | 2026-08-19 | 17 天 | 同上 |
| [#3584](链接: nanocoai/nanoclaw PR #3584) | codex provider 合约实现 | 2026-08-27 | 9 天 | 重构系列，待合并 |
| [#3586](链接: nanocoai/nanoclaw PR #3586) | setup provider 合约声明 + 安装验证器 | 2026-08-27 | 9 天 | 重构系列，待合并 |
| [#3588](链接: nanocoai/nanoclaw PR #3588) | opencode provider 合约实现 | 2026-08-27 | 9 天 | 重构系列，待合并 |
| [#3591](链接: nanocoai/nanoclaw PR #3591) | provider 指令核心属主化 | 2026-08-27 | 9 天 | 重构系列，待合并 |
| [#3592](链接: nanocoai/nanoclaw PR #3592) | `speed` 推理速率属性 | 2026-08-28 | 8 天 | feature 待合并 |

**维护建议**：上述超过 7 天的待合并 PR 均出自核心维护者之手且均标有 `core-team`、`follows-guidelines` 标记，建议尽快完成相互之间的冲突消解与系统性评审合并，避免各 PR 分支同步漂移导致合并成本不断上升；同时应优先对 Issue #3716 给出响应方案。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-09-05

## 1. 今日速览

NullClaw 项目在过去 24 小时内活跃度较低：仅有 1 条 Issue 更新，无新 PR 合并或提交，无新版本发布。当前项目处于相对平稳期，社区热度主要集中在功能增强讨论而非 Bug 修复。需关注的是，Issue #993（Firecrawl 端点可配置化）已开放 12 天仍未获得维护者回应，建议优先响应。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 合并或关闭。项目整体无代码层面的推进动作，处于代码花园维护的间歇期。

## 4. 社区热点

**Issue #993 — [enhancement] feat: make Firecrawl search endpoint configurable for self-hosted instances**
- 作者：Crymfox | 创建于 2026-08-24 | 最近更新于 2026-09-04 | 评论 1 条
- 链接：https://github.com/nullclaw/nullclaw/issues/993

该 Issue 是目前唯一活跃的讨论主题，也是社区当前的核心关注点。用户指出 `src/tools/web_search_providers/firecrawl.zig` 中 API 端点被硬编码为 `https://api.firecrawl.dev/v1/search`，导致自托管 Firecrawl 实例无法正常使用内置的搜索提供程序。评论中已产生进一步讨论（1 条），反映出自托管部署用户群体对灵活配置的明确需求。尽管点赞数目前为 0，但该请求直指可部署性问题，值得项目方重视。

## 5. Bug 与稳定性

今日无新建 Bug、崩溃或回归类 Issue 报告。现存 Issue 均为功能增强类，项目稳定性方面今日无明显信号。

## 6. 功能请求与路线图信号

唯一活跃的功能请求为 **Issue #993**：将 Firecrawl 搜索端点从硬编码改为可通过配置覆盖，以支持自托管实例。

**纳入下一版本的判断**：从实现角度评估，该改动仅涉及将常量替换为配置读取逻辑，属于低风险小改动，但由于当前无关联 PR，且 Issue 已开放 12 天无维护者响应，短期纳入下一版本的可能性偏小。建议关注维护者后续回复节奏来判断实际排期。

## 7. 用户反馈摘要

通过对 Issue #993 的评论分析（当前 1 条讨论），可提炼出以下用户信号：

- **真实痛点**：用户正在部署自托管的 Firecrawl 实例（而非依赖官方云服务），但 NullClaw 内置 Web 搜索工具将 API 端点写死为云端地址，导致自托管部署中该搜索功能不可用
- **使用场景**：对数据隐私或成本敏感的自托管部署用户，希望完全脱离 Firecrawl 官方云 API
- **核心诉求**：将硬编码常量改为可配置项，建议参考其他 web_search_providers 的现有配置模式，保持项目内部实现的一致性

## 8. 待处理积压

**⚠️ Issue #993 — Firecrawl 端点可配置化**
- 创建于 2026-08-24，已开放 **12 天**，至今无维护者回复、无标签、无指派
- 链接：https://github.com/nullclaw/nullclaw/issues/993
- **提醒**：该请求为低风险增强且社区已有讨论热度，长时间无响应可能影响自托管用户群体的社区信心。建议维护者明确回应是否接受该改动或给出路线图排期，避免社区贡献者等待过久。

---

*数据窗口：2026-09-04 至 2026-09-05 | 来源：github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-05

## 1. 今日速览

IronClaw 项目今日活跃度处于中高水平：过去 24 小时有 3 条 Issue 更新（1 开 2 关）、8 条 PR 更新（5 待合并、3 已关闭/合并），无新版本发布。核心贡献者（thisisjoshford、henrypark133）持续主导 Telegram 集成修复与 subagent 后台投递功能推进，今日合并的 #8054 和 #8073 分别修复了 Telegram 配对流程中的两个关键用户体验缺陷。项目整体处于"密集修复 + 功能迭代并行"阶段，值得注意的是 LLM 对话缓存 key 通道（#8062）和 subagent 启动扫描机制（#8067）的引入均属于架构级改进，短期内合入节奏值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共有 3 个 PR 被合并或关闭，均围绕 Telegram 集成体验展开：

- **PR #8054（已合并）** — [fix(assistant): check pairing before command admission so first contact gets the connect notice](https://github.com/nearai/ironclaw/pull/8054)：修复了未配对 Telegram 用户首次点击 Start 时收到命令清单而非配对提示的问题。根因是产品工作流在命令准入前未检查配对状态，现已在首次接触前加入配对状态检查。此修复直接对应 Issue #7956。

- **PR #8073（已合并）** — [fix(device-link): say "not configured by administrator" instead of blaming the user's account](https://github.com/nearai/ironclaw/pull/8073)：当管理员未配置 `telegram_api_id`/`telegram_api_hash` 时，错误提示从归咎于用户账号改为说明"管理员未配置"，提升了排障准确性和用户体感。

- **PR #8062（已合并）** — [fix(llm): send conversation cache keys on OpenAI request paths](https://github.com/nearai/ironclaw/pull/8062)：在 loop-host 网关层为每个会话派生稳定、域隔离的伪匿名 prompt-cache key，并在多轮对话和工具循环迭代中保持该 key，随所有受支持的 OpenAI Responses/兼容路径一并发送。该改动涉及 XL 规模改动（henrypark133 提交），对降低长对话的 LLM 调用成本有直接意义。

在功能推进层面，三个待合并 PR 显示了项目下一阶段的方向：(1) Telegram Bot API 命令菜单注册（#8072）、(2) subagent 后台投递的启动扫描与周期间隔清理（#8067）、(3) 并发子代理数量上限 + 审批卡片回放验证（#8061）。这些 PR 完成合入后，IronClaw 在 Telegram 交互入口和 subagent 可靠性上将有显著提升。

## 4. 社区热点

 今日讨论最活跃的 Issue 为 **[#8074](https://github.com/nearai/ironclaw/issues/8074)**（唯一含评论的高频讨论项）：Paired 用户在未连接的共享频道中操作时，错误地收到了为 unpaired 场景撰写的 `connect_required` 提示文案。目前有 1 条评论，背后诉求指向**多用户协作（配对用户 + 共享频道）场景下的错误文案精确性**——即系统需要根据"用户是否已配对 + 频道是否已连接"两个维度分别输出正确的引导文案，而非单一模板覆盖。该 issue 尚无关联 PR，仍是待处理状态。其余两个今日关闭的 Telegram 相关 Issue 评论区均为空。

## 5. Bug 与稳定性

今日共有 3 个 Bug 相关动态：

| 严重程度 | Issue/PR | 描述 | 状态 |
| --- | --- | --- | --- |
| 中 | [#8074（OPEN）](https://github.com/nearai/ironclaw/issues/8074) | 配对用户在未连接共享频道的操作收到错误文案（配对文案替代了频道未连接文案） | 尚无 fix PR |
| 低-中 | [#7956（CLOSED）](https://github.com/nearai/ironclaw/issues/7956) | 未配对 Telegram 用户发送 /start 收到命令清单而非连接/配对提示 | 已由 PR #8054 修复并合并 |
| 低（配置缺失） | [#7955（CLOSED）](https://github.com/nearai/ironclaw/issues/7955) | admin 未配置 telegram api_id/api_hash 时，个人账号关联显示泛化的 "Something went wrong" | 已由 PR #8073 修复并合并（改善错误信息） |

此外，**[PR #8059（OPEN）](https://github.com/nearai/ironclaw/pull/8059)** 指出 `POST /api/v1/responses/{id}/cancel` 在所有状态下均返回 `400 invalid_request`，取消操作实际不生效——属于 API 层功能性缺陷，已有修复 PR 待合并，建议优先跟进。

## 6. 功能请求与路线图信号

今日无用户直接提交的新功能请求。但从 PR 趋势可见以下方向正在推进：

- **Telegram 命令菜单注册（[PR #8072](https://github.com/nearai/ironclaw/pull/8072)）**：在扩展激活时将频道声明的命令（`/model`、`/status`、`/new`、`/stop`、`/interrupt`）通过 `setMyCommands` 注册到聊天菜单按钮。这解决了 Telegram 桌面端用户难以发现可用命令的痛点，预计将随下个版本发布。

- **Subagent 后台投递的启动扫描机制（[PR #8067](https://github.com/nearai/ironclaw/pull/8067)）**：为后台 subagent 投递新增 boot/periodic sweep，覆盖现有"结算时投递"和"父线程下次运行时清扫"两个触发点无法覆盖的边界场景，并补充计数器和端到端复活机制。该 PR 标记为 R4 阶段，属于 subagent 可靠性路线图的一部分。

- **并发子代理上限（[PR #8061](https://github.com/nearai/ironclaw/pull/8061)）**：偿还 R2 阶段技术债务，同时对 R3 3b 段的子代理阻塞审批卡片回放进行了验证。此改动将为子代理执行设置并发上限，防止资源失控。

## 7. 用户反馈摘要

 今日 Issue 评论较少（全项目仅 1 条评论），但可从不完整上下文推测其关注点：

- **[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)（1 条评论）**：反馈集中在"配对用户在未连接的共享频道中操作时，提示文案不区分场景"这一细节。这说明已有用户真实经历过多个互斥状态叠加（已配对 × 频道未连接）时的消息文案混淆问题，背后是对**状态感知文案精确性**的要求——系统应基于完整状态维度定制可操作指导，而不是退化为单一模板。综合今日合入的另外两个文案修正（如 #8073），维护团队近期显然在系统性地整理错误提示的信息层次。

## 8. 待处理积压

以下为值得维护者关注的长期未决事项：

- **[Issue #8074](https://github.com/nearai/ironclaw/issues/8074)（OPEN）**：今日新开，但尚无任何 fix PR。属配对用户场景下文案区分缺陷，与今日已修复的 #7956/#7955 属同一文案体系（Telegragram 连接/配对状态），若能沿用 #8054/#8073 的修复模式，可低成本解决。

- **[PR #8059](https://github.com/nearai/ironclaw/pull/8059)（OPEN）**：cancel API 在所有状态下均失败的缺陷修复，虽标记为 XS 规模，但该问题影响任何需要中断运行的用户/上游调用方，建议优先评审合入。

- **[PR #7988（OPEN）](https://github.com/nearai/ironclaw/pull/7988)**：由 CI 自动生成的代码库知识图谱刷新快照，属常规维护，已在队列中停留 7 天，可快速合并。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期**: 2026-09-05
**数据来源**: github.com/netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 今日整体活跃度中等偏上。过去 24 小时内无新增 Issue 或关闭记录，但 PR 更新 4 条（其中 1 条已关闭，3 条待合并），并发布了 2 个新版本（2026.9.4 和 2026.9.3），发布节奏密集。值得关注的是，两个待合并 PR（#1069、#1070）已存在逾 5 个月未获处理，标记为 stale，积压问题值得维护团队关注。整体来看，项目处于高频迭代发布阶段，功能更新集中在浏览器交互和协作（Cowork）模块。

---

## 2. 版本发布

### 🔖 LobsterAI 2026.9.4（发布于 2026-09-04）

**核心更新**：
- **交互式应用内浏览器**: 恢复（restore）了应用内浏览器功能，并新增交互能力（PR #2602）
- **更新流程优化**: 安装前增加确认弹窗，并优化退出应用时的处理逻辑（PR #2609）

**破坏性变更**：无明确标注。

**迁移注意事项**：无特殊迁移要求，但应用内浏览器功能恢复涉及 UI 行为变化，用户可能需要重新熟悉相关操作路径。

### 🔖 LobsterAI 2026.9.3（发布于 2026-09-03）

**核心更新**：
- **登录体验优化**: 未认证用户在发起聊天（Cowork）前会看到登录提示，而非直接进入未认证会话（PR #2573）
- **应用内浏览器功能**: 新增交互式应用内浏览器（PR #2574）
- **引导流程（Onboarding）**: 有相关改进，具体细节在 release notes 中被截断

**破坏性变更**：无明确标注。

**迁移注意事项**：登录提示逻辑新增，建议用户确认账号状态，避免因未登录导致聊天功能受限。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#2618](https://github.com/netease-youdao/LobsterAI/pull/2618) | Release/2026.9.4 | ✅ 已关闭 | 即上文所述 2026.9.4 版本发布 PR，标记了多个影响区域（renderer, build, docs, main, openclaw, cowork, windows, artifacts） |

该 Release PR 涉及面广（8 个模块标记），说明 2026.9.4 是一次覆盖面较广的版本更新。结合连续两天的版本发布节奏（9.3 → 9.4），项目正在快速迭代，核心推进方向为：
- 应用内浏览器功能（新增 + 恢复 + 登录状态优化）
- 协作（Cowork）模块的登录/认证流程完善
- 更新安装体验优化

---

## 4. 社区热点

今日社区讨论热度较低（Issue 更新为 0），但以下两个长期未合并的 PR 在更新后重新进入视野：

### 🔥 [PR #1069](https://github.com/netease-youdao/LobsterAI/pull/1069) — 重构 CoworkSessionDetail 组件（已 stale）

- **作者**: stone333 | **创建**: 2026-03-30 | **最后更新**: 2026-09-05
- **诉求**: 将超过 **2100 行** 的 `CoworkSessionDetail.tsx` 单文件拆分，解决流式输出时顶层状态更新导致的**不必要重渲染**性能问题，以及纯函数与 UI 逻辑混杂导致的**可测试性差**问题。
- **分析**: 该 PR 已在 5 个多月内未获合入，但仍在被系统标记更新。它揭示了项目核心对话页面在长期迭代后积累的技术债，包括性能瓶颈和代码维护性挑战。该 PR 是否合入将直接影响 Cowork 模块的渲染性能。

### 🔥 [PR #1070](https://github.com/netease-youdao/LobsterAI/pull/1070) — 支持 per-session MCP 开关控制（已 stale）

- **作者**: vdorchan | **创建**: 2026-03-30 | **最后更新**: 2026-09-05
- **诉求**: 当前 MCP server 仅支持全局开关，所有会话共享同一配置。该 PR 提议为每个会话独立控制 MCP server 的启用/禁用，状态持久化到 DB，并在 OpenClaw 引擎的 McpBridgeServer 层实现请求拦截。
- **分析**: 这反映了用户对 MCP 细粒度控制的需求，在 OpenClaw 生态扩展的背景下有明确的产品价值。同样存在 5 个月的等待周期。

---

## 5. Bug 与稳定性

今日无新报告的 Bug 或崩溃类 Issue。但需注意：

- **应用内浏览器登录及标签页控制问题**（[PR #2617](https://github.com/netease-youdao/LobsterAI/pull/2617)，OPEN）: 修复已保存登录成功/失败反馈不可关闭的问题、保存登录条目后页面不应跳转的问题，以及用下拉菜单替换浏览器页面切换方式。尚未合入，属于体验层面的修复，严重程度偏低。

---

## 6. 功能请求与路线图信号

| 功能方向 | 来源 | 状态 | 是否可能纳入下版本 |
|---|---|---|---|
| Per-session MCP 开关控制 | [PR #1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | OPEN，已 stale 5 个月 | 存在不确定性，但功能价值明确，若维护者关注 OpenClaw 生态扩展则可能加速合入 |
| 组件级渲染性能优化（CoworkSessionDetail 拆分） | [PR #1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | OPEN，已 stale 5 个月 | 属于技术债清除，依赖于维护者优先级 |
| 应用内浏览器交互增强（登录反馈、标签页控制） | [PR #2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | OPEN，今日新建 | 高可能性，与 9.3/9.4 版本中浏览器功能迭代方向一致 |

---

## 7. 用户反馈摘要

今日无新增 Issue 评论，以下要点来自两个长期未合并 PR 的内容：

- **性能痛点**（PR #1069）: 用户在流式输出场景下遇到因顶层状态更新引发的**不必要重渲染**，直接影响对话体验的流畅度。
- **代码维护困境**（PR #1069）: 2100+ 行的核心组件已难以定位和维护，纯函数与 UI 混杂导致**无法独立测试**——这暗示了当前测试覆盖可能不足的风险。
- **功能缺口**（PR #1070）: MCP server 仅支持全局配置，**所有会话共享开关**，用户无法在不同会话中使用不同的 MCP 工具组合，限制了灵活性与隔离性。

---

## 8. 待处理积压

以下两个 PR 均已存在超过 5 个月，被系统标记为 stale，最后一次更新时间恰为今日（2026-09-05），建议维护团队重点关注：

| 项目 | 类型 | 搁置时间 | 影响 | 链接 |
|---|---|---|---|---|
| 重构 CoworkSessionDetail 单文件（2100+ 行） | 性能 + 可维护性 | 2026-03-30 至今（约 159 天） | 核心对话页面的渲染性能问题和维护性挑战持续存在；后续功能开发的复杂度持续累积 | [PR #1069](https://github.com/netease-youdao/LobsterAI/pull/1069) |
| Per-session MCP 开关控制 | 功能需求 | 2026-03-30 至今（约 159 天） | 用户无法按会话隔离 MCP server 配置，影响多场景协作效率 | [PR #1070](https://github.com/netease-youdao/LobsterAI/pull/1070) |

> ⚠️ 提醒：两个 PR 均为 3 月 30 日创建，且自创建以来无维护者介入的迹象。若项目策略已变化（如组件已重写或 MCP 架构已调整），建议明确关闭以避免误导；若仍有效，应给出合入计划或阶段性反馈。

---

*本日报基于 LobsterAI GitHub 仓库数据自动生成。所有链接指向 github.com/netease-youdao/LobsterAI 对应条目。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-09-05

## 1. 今日速览

项目今日整体活跃度较低。过去 24 小时内仅有 1 条新 Issue 提交，无 PR 更新、无新版本发布。新提交的 Issue #1259 为功能增强类请求，提出用户希望将默认推理/思考级别设置持久化跨会话保存。项目今日处于稳定维护节奏，未有代码合并或版本迭代动作，但新需求的提出表明社区对个性化配置体验有持续期待。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭。暂无代码层面的推进可汇报。

## 4. 社区热点

**[#1259] [Feature]: Configurable default reasoning/thinking level (persist across sessions)** — [链接](https://github.com/moltis-org/moltis/issues/1259)

今日唯一活跃的 Issue，提交者为 Scentedtiger，创建于 2026-09-05。该请求提出用户希望可以配置默认的推理/思考级别，并在多个会话间保持该设置。此项请求目前暂无评论与点赞，但核心诉求直指用户体验的一致性：用户在不同会话中需要反复手动调整推理强度，期望通过持久化默认值来减少重复操作。

## 5. Bug 与稳定性

今日无 Bug 报告，项目未出现新的崩溃或回归问题。

## 6. 功能请求与路线图信号

- **[#1259] Configurable default reasoning/thinking level（持久化设置）** — [链接](https://github.com/moltis-org/moltis/issues/1259)

  该功能请求透露出两个信号：其一，用户对推理/思考级别的控制已经成为真实使用场景中的核心需求；其二，用户期待更高程度的个性化体验——不仅能在单次会话中调整，还希望系统能记忆偏好。结合项目当前尚无对应 PR 的状态，此需求可能在后续版本中被纳入考虑（如新增 `default_reasoning_level` 配置项供用户在系统设置中预设，在启动新会话时自动填入）。

## 7. 用户反馈摘要

今日 Issues 评论中暂无实质性的用户使用反馈。从 #1259 的请求内容可以间接看到用户使用模式：用户会在不同会话中频繁切换推理强度设置，产生了对默认值记忆的诉求，这暗示了当前每次开启新会话时用户都需要手动配置推理级别，存在操作冗余。

## 8. 待处理积压

今日无长期未响应的 Issue 或 PR 需要特别提醒。项目积压状态良好。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-09-05）

## 1. 今日速览

CoPaw 项目今日保持较高活跃度：过去 24 小时内产生 10 条 Issue 更新（7 条新开/活跃、3 条已关闭）和 8 条 PR 更新（全部待合并），但无版本发布。值得关注的是：图片生成技能（img-gen）连续两个 Bug 在当日报告后即被关闭，说明维护响应迅速；同时新开 Issue 涵盖工具派发层异常吞没、记忆持久化失效、飞书卡片交互等多个维度，反映出项目在多智能体协作、记忆机制与集成体验上仍存在明显的用户痛点。8 个待合并 PR 中不乏功能性增强（Advisor Mode、MCP 超时配置、移动端体验），整体项目处于功能迭代与稳定性修补并行的阶段。**活跃度评级：中高。**

## 2. 版本发布

过去 24 小时内无新版本发布。但 Issue #7318 提及 [QwenPaw Hub 多租户版将于 2.2.0 推出](https://github.com/agentscope-ai/QwenPaw/issues/7318)，2.2.0 版本目前尚未正式发布，相关开发工作仍在推进中。

## 3. 项目进展

过去 24 小时内无 PR 被合并或关闭，8 个 PR 均处于待合并状态。但结合 Issue 关闭情况，今日有 2 个 img-gen 技能 Bug（#7574、#7575）被迅速解决，推测相关联的修复 PR 已被合并或已在合并流程中。

**当前值得关注的待合并 PR：**

- [#7569 feat(modes): add Advisor Mode](https://github.com/agentscope-ai/QwenPaw/pull/7569) — 新增 Advisor 模式：在同一任务上配对"顾问模型"（更强）与"工人模型"（更廉价），有望显著降低高质量输出的推理成本；
- [#6874 feat(mcp): add configurable tool call timeout](https://github.com/agentscope-ai/QwenPaw/pull/6874) — 为 MCP 工具调用增加可配置超时（默认 300 秒），处于 Under Review 状态已近一个月，建议维护者关注；
- [#7211 fix(runtime): prevent injected context from persisting](https://github.com/agentscope-ai/QwenPaw/pull/7211) — 修复通过 HookContext 注入的上下文被持久化为用户可见聊天历史的问题；
- [#7378 feat(mobile): introduce QwenPaw native mobile experience](https://github.com/agentscope-ai/QwenPaw/pull/7378) — 标记为 **DO NOT MERGE** 的草案 PR，计划以 Expo/React Native 构建支持 Android/iOS 的原生移动客户端。

## 4. 社区热点

- [#7318 [Discussion] QwenPaw Hub 多租户版即将到来：社区希望我们接下来构建什么？](https://github.com/agentscope-ai/QwenPaw/issues/7318)
  创建于 8 月 26 日，至今已积累 **22 条评论、3 个赞**，是近期热度最高的讨论帖。用户围绕多用户访问、管理员权限等团队协作需求展开讨论，反映了社区对从个人助手走向团队工具的强烈诉求。该讨论的结果将直接为 QwenPaw Hub 的功能路线提供输入。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

### 🔴 高 — 自定义提供商加载失败（已关闭）
- [#7474 [Bug]: 自定义提供商（custom provider）加载失败](https://github.com/agentscope-ai/QwenPaw/issues/7474) — 合并 PR #7337 后引入回归：`ModelInfo.max_tokens` 到 `max_output_length` 的迁移导致自定义提供商的模型在启动时无法加载。该 Issue 今日已关闭，确认修复。

### 🔴 高 — 工具派发层吞掉异常栈（待修复）
- [#7572 [Bug]: 工具派发层吞掉异常栈，故障无法定位](https://github.com/agentscope-ai/QwenPaw/issues/7572) — `qwenpaw/tool_calls/_coordinator.py` 的 `_drain()` 以 `except Exception` 兜住整条处理链，仅将 `str(exc)` 回传模型，既不调用 `logger.exception()` 也不重新抛出，导致故障定位极为困难。影响**所有版本**，目前尚无关联 fix PR。

### 🟡 中 — img-gen 技能两个 Bug（均已关闭）
- [#7574 img-gen openai_images.py 请求体缺失 model 字段，触发 HTTP 503 回退至 dall-e-2](https://github.com/agentscope-ai/QwenPaw/issues/7574) — `generate()` 与 `edit()` 函数的模型解析逻辑存在缺陷，当日关闭。
- [#7575 img-gen edit() 始终发送 response_format，导致 gpt-image-2 编辑端点返回 HTTP 400](https://github.com/agentscope-ai/QwenPaw/issues/7575) — `edit()` 无条件携带 `response_format` 参数不兼容 gpt-image-2 端点。当日关闭，确认修复。

### 🟡 中 — 记忆能力持续失效（待修复）
- [#7571 [Bug]: 总是记不住，还是会遗忘](https://github.com/agentscope-ai/QwenPaw/issues/7571) — 用户反映在插件开发场景中，QwenPaw 反复遗忘用户设定的路径规则（如 TODO 文件应在特定目录生成、应在指定路径开发代码），且通过脚本自动部署时可能将未开发的源码错误部署。该记忆失效问题在 2.2.0 版本依旧存在。

## 6. 功能请求与路线图信号

| Issue/PR | 功能请求 | 纳入下一版本的可能性 |
|---|---|---|
| [#7573 "Edit last message" 和 "Rewind" 按钮](https://github.com/agentscope-ai/QwenPaw/issues/7573) | Web UI 原生支持编辑上一条消息与回退对话轮次 | 中 — 社区对对话纠错的常见需求，实现成本可控 |
| [#7557 skill_pool 版本与依赖元数据](https://github.com/agentscope-ai/QwenPaw/issues/7557) | 技能目录支持版本管理与依赖声明，解决 9 个 agent 场景下技能副本无法同步的问题 | 中高 — 多智能体编排是当前主推方向，版本化是刚需 |
| [#7568 闲时任务调度（Off-peak Task）](https://github.com/agentscope-ai/QwenPaw/issues/7568) | 支持在模型厂商"低谷折扣时段"（如 DeepSeek 00:30–08:30 半价）自动唤醒执行批处理任务，或直连 Batch API 降本 | 低-中 — 与 #7569 Advisor Mode 的省钱思路一致，可能被纳入后续成本优化路线 |
| [#7569 PR: Advisor Mode](https://github.com/agentscope-ai/QwenPaw/pull/7569) | 双模型协作模式：强模型（advisor）+ 廉价模型（worker）配对执行 | 高 — 已提交 PR，处于可合并状态 |
| [#7570 飞书思考卡自动折叠](https://github.com/agentscope-ai/QwenPaw/issues/7570) | 飞书 CardKit 流式输出的思考卡片，在流式结束后自动折叠 | 中 — 用户已验证可行的本地方案（collapsible_panel），合入门槛较低 |

## 7. 用户反馈摘要

- **多智能体规模化后管理困难（#7557）**：用户在 9 个 agent 的生产集群中发现同一技能（如 `qwenpaw-docs-zh`）被逐工作区复制，缺乏版本管理与依赖锁定手段，更新技能需逐一同步，维护成本高昂。
- **记忆机制是最大痛点（#7571）**：用户反复强调路径规则仍被遗忘，跨路径部署场景下甚至出现误部署未开发源码的情况。虽各版本均有"增强记忆"的改进，但实际体验依旧不符合预期。
- **成本敏感性逐步上升（#7568、#7569）**：多名用户在讨论中提及利用厂商低谷时段折扣与 Batch API 降低调用成本，且 #7569 的 Advisor Mode 本身也是一个成本优化方案。社区对成本控制的关注度正在走高。
- **多租户/团队需求呼声增强（#7318）**：从"个人助手"延伸至"团队共享"，Hub 化成为社区高频诉求，用户希望获得多用户访问与管理员控制能力。

## 8. 待处理积压

| 类型 | 编号 | 说明 | 待处理时长 |
|---|---|---|---|
| PR | [#6874 MCP 工具调用超时配置（Under Review）](https://github.com/agentscope-ai/QwenPaw/pull/6874) | 功能完善、实现清晰的 PR，但悬置近 1 个月未合并 | 约 26 天 |
| PR | [#7211 阻止注入上下文持久化为聊天历史（first-time-contributor）](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 社区新人贡献，涉及 AgentScope 消息类型合规问题，可影响数据隐私，建议尽快评审 | 约 15 天 |
| PR | [#7401 修复 Windows ACP agent 工作区引导时挂起问题（Under Review）](https://github.com/agentscope-ai/QwenPaw/pull/7401) | 影响 Windows 用户体验的稳定性修复 | 约 7 天 |
| Issue | [#7572 工具派发层吞掉异常栈](https://github.com/agentscope-ai/QwenPaw/issues/7572) | 高严重度，影响所有版本故障排查效率，尚无 fix PR | 约 1 天（当日新开） |

> 以上积压项均为客观描述，供维护者参考排期。

---

*日报自动生成于 2026-09-05，数据来源：CoPaw GitHub 仓库（agentscope-ai/CoPaw）。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-05

## 今日速览

ZeroClaw 在过去 24 小时维持高活跃度：47 条 Issues 更新（37 条新增/活跃、10 条关闭），50 条 PR 更新（46 条待合并、4 条已合并/关闭），并发布 v0.8.5 安全与连接性版本。项目围绕安全策略实施（RFC #7155 shell V1 权限策略）、渠道修复（Telegram/WhatsApp/Slack）和 gateway 行为修正三条主线推进。发布节奏稳健（v0.8.5 含 454 commits），但待合并 PR 积压（46 条）显示维护者审阅带宽或成瓶颈。值得关注的是，多个 S1 级安全与阻塞 Bug（#9421、#10536）已有对应 fix PR，修复链路完整。

---

## 版本发布

**v0.8.5** — 安全、连接性与操作体验版本（454 commits，73 位贡献者）

主要更新：
- **新组件**：引入 ZeroRelay 与 ZeroRouter
- **渠道能力**：扩展 live chat 与 provider 支持
- **安全加固**：强化 plugin、sandbox、webhook、credential 与 file 边界

未提供破坏性变更与迁移注意事项的详细说明。建议维护者在 Release Notes 中补充升级指引，降低用户迁移成本。

---

## 项目进展

今日合并/关闭 4 条 PR，以下为已关闭 Issues 对应的修复进展：

**安全修复（WhatsApp Web 双重缺陷）**
- Issue #9348（S1 安全风险：business 模式下 WhatsApp Web 回复所有 DM 与群组）与 RFC #9397（空 `allowed_groups` 应视为拒绝全部）均已关闭，意味着 WhatsApp 渠道默认开放的安全漏洞已完成修复闭环。前者是严重安全缺陷（配置看似锁定实则全开），后者为对应的策略 RFC 落地。

**Bedrock 缓存问题**
- Issue #8720 关闭：用户可通过配置文件禁用 Bedrock Nova 2 Lite 的 cachePoint，解决了随机缓存错误的痛点。

**ZeroCode 诊断改进**
- Issue #8650 关闭：ZeroCode/Doctor 诊断现可显示活跃的 resolved log 持久化路径。

**环境说明**：上述关闭多为过去数日工作的收尾确认，今日合并的具体代码变更数据分析有限。

---

## 社区热点

1. **RFC #9487：Runtime 持有的会话会话与传输层适配器**（32 条评论，Revision 5）
   - 该 RFC 已历经 5 次修订，且 Revision 4 的投票因重大替换而失效，需维护者重新开启讨论窗口。背后诉求是对会话生命周期与传输层架构的深度重构，风险等级 high，涉及 gateway/runtime/web 多个 domain。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9487

2. **RFC #6909：桌面端 Computer-use 支持**（16 条评论，Revision 2）
   - 维护者已接管并纳入 #7155 确认边界，明确了有界审批单元与执行边界。社区对桌面屏幕交互与输入控制的关注度持续。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6909

3. **RFC #10050：Gateway 逐字渠道发送（不经过 agent turn）**（14 条评论）
   - 动机清晰：gateway 已挂载 47 个 `/api/*` 路径，但没有一个支持逐字透传消息。用户需要更底层的渠道控制能力。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10050

4. **RFC #9975：web_dist_dir 的 Web bundle/daemon 兼容性契约**（13 条评论，Rev 3）
   - 围绕显式文件系统 bundle 部署的中心能力协商展开，前端与 daemon 的兼容性契约需求迫切。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9975

**热点诉求共性**：社区高度关注架构级 RFC（会话管理、桌面控制、渠道语义），且讨论深入（多轮修订、维护者接管、安全澄清），呈现出成熟项目的治理节奏。多个 RFC 等待维护者重新发起投票或确认新讨论窗口。

---

## Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻塞 / 安全风险**

| Issue | 描述 | 状态 | Fix PR |
|-------|------|------|--------|
| #9421 | 不完整的 terminal 响应可被报告为成功（provider 结束回合但无可信最终答案） | OPEN / in-progress | #9447（分类不完整 Anthropic terminal 响应为 fail-closed） |
| #10536 | macOS Seatbelt 忽略 shell 命令的 `allowed_roots` 配置 | OPEN / in-progress（9-02 创建） | 未见对应 PR |
| #10533 | `model_routing_config` 拒绝 `custom.*` 等合法 provider 槽位—tool 校验与 config schema 不一致 | OPEN（2 条评论） | 未见对应 PR |
| #10534 | 有界 delegate 静默剥离 delegate tool，与 `delegation_policy`/`max_delegation_depth` 配置矛盾 | OPEN（2 条评论） | 未见对应 PR |

**S2 — 降级行为**
- #10532：降级配置修复可能调用与运行中 daemon 不同的二进制（PATH 解析不一致）

**S3 — 次要问题**
- #10585：新日志 sink 回归在默认并行 runner 下与迁移测试竞争（#10203 引入）

**修复信号**：今日新合并/关闭的 PR 中，WhatsApp 相关两条（#9348、#9397）是重要安全修复成果。此外活跃 PR 中 #10499 提供持久化配置写入校验（防无效配置发布），#10610 为 shell V1 权限策略的 Phase 0+1 实施。

---

## 功能请求与路线图信号

**高概率进入下一版本：**

1. **Shell V1 权限策略实施**（Tracker #10339 + PR #10610）— RFC #7155 已接受，PR #10610（5 个单一关注点 commits）已提交，Phase 0+1 实施落地在即，属明确路线图项

2. **Incomplete terminal 响应分类**（PR #9447）— 对应 S1 Bug #9421，跨 provider parsing、Reliable recovery、runtime delivery、SOP 与 delegate 边界，修复范围广，将与 #9421 联动关闭

3. **渠道消息序列化**（PR #10411）— 同会话消息串行处理，防止并发乱序，属体验优化

**路线图信号：**

- **WebSocket gateway 一致性修正**：PR #10637（WS memory consolidation 应使用 agent 自身 provider，而非 gateway 默认）与 PR #10638（boot 默认值应从首个带 model 的条目选取）均为今日新提交的修复，说明 gateway 近期经历重构后正在收敛边界行为
- **ZeroCode 会话控制**：PR #10636 引入 effort 与 display 会话控制（stacked on #10611），ZeroCode 体验持续迭代
- **Slack bot/workflow 消息支持**：PR #10622 使 Slack 渠道可选接受 bot 与 workflow 消息（当前被双重 guard 拒绝）

---

## 用户反馈摘要

1. **WhatsApp 配置陷阱（已修复）**：Issue #9348 反映了一个严重的安全隐患——`allowed_groups` 为空时实际上放行所有群组与私聊，且 chat policies 仅适用于 personal mode。用户以为配置了 allowlist 却得到"完全开放"的 agent。该问题已关闭，修复完成。

2. **Bedrock Nova 2 Lite 随机缓存错误（已解决）**：Issue #8720 用户 ngamradt 报告使用 `us.amazon.nova-2-lite-v1:0` 时随机出现缓存错误，需要禁用缓存功能。已通过 config 文件方式提供 workaround 并关闭。

3. **降级配置修复的二进制不一致**：Issue #10532 用户报告当 daemon 从某个可执行文件启动但 `zeroclaw` 指向 PATH 中另一个可执行文件时，降级配置警告调用的修复程序可能作用于错误的二进制。属于边界场景但影响诊断准确性。

4. **OpenAI-compatible gateway 传递 Anthropic thinking 参数**：Issue #10530 用户指出许多部署通过 LiteLLM/TrueFoundry/org proxy 以 `chat_completions` wire format 访问 Claude 模型，但 extended-thinking 参数无法穿透传递。反映了真实的多网关部署痛点。

5. **macOS 沙箱配置失效**：Issue #10536 报告风险配置中设置的 `allowed_roots` 在 macOS Seatbelt 层被忽略，应用层策略与系统层沙箱不一致，S1 级阻塞。

---

## 待处理积压

**高关注度未决事项（需维护者介入）：**

1. **RFC #9487（32 条评论）**：Revision 4 投票失效，Revision 5 提交后需维护者记录新的讨论窗口与快照后重启投票。这是当前评论最多的 RFC，处于流程停滞状态。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9487

2. **PR #9772（status: blocked, do-not-merge）**：Telegram 每用户会话开关，涉及共享群聊会话的安全边界，已标记 blocked + do-not-merge 超过一个月。channel 安全架构决策需明确。
   - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9772

3. **PR #8955（Telegram media group 批处理）**：7 月 10 日创建、需维护者审阅、size:XL，已搁置近两个月。涉及 Telegram 相册/文件组消息跨 `getUpdates` 响应拆分的问题，用户可感知。

4. **S1 Bug #9421（incomplete terminal response）**：3 条评论，虽有 PR #9447 对应，但 PR 同样标注需作者行动（needs-author-action），修复链路存在阻塞风险。

5. **RFC #6909（桌面 computer-use，16 条评论）**：维护者已接管但自 8-24 后无进一步更新，等待下一轮讨论或推进。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*