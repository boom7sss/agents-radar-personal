# OpenClaw 生态日报 2026-11-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-02 20:22 UTC

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

# OpenClaw 项目日报 · 2026-11-02

> 数据来源：openclaw/openclaw GitHub 活动（过去 24 小时 Issues/PR 各 500 条更新）。以下内容仅基于所提供样本，样本外情况未纳入判断。

---

## 1. 今日速览

项目维持高吞吐运转：过去 24 小时 Issues 更新 500 条（新开/活跃 235、关闭 265），PR 更新 500 条（待合并 335、合并/关闭 165），关闭量与合并量均显示积压清理在持续推进。但**无新版本发布**，且今日无 P0 级修复 PR 合并。当前最突出的健康风险集中在**运维链路**：`openclaw doctor` 在 Linux/macOS 上挂起（#187900、#178359）、托管更新后激活驱动失效（#164800）、配置热重载导致通道插件断连（#152965），均属 P1/P0 且多数标注 `no-new-fix-pr`。安全侧有一个 P0 级 transcript 脱敏污染问题（#142821）与一个 `workspaceOnly` 沙箱逃逸报告（#173058）。总体评估：**活跃度高，但稳定性修复供给明显落后于缺陷报告速度。**

---

## 2. 版本发布

无。过去 24 小时无新 Release。

---

## 3. 项目进展

今日合并/关闭的 165 条 PR 中，样本可见的重要推进如下：

- **修复 dev profile 端口错配（两次收敛）**：CLOSED PR #191428（roboclaw-bot）——CLI/TUI 与 macOS app 在 `OPENCLAW_PROFILE=dev` 下错误选择 38556 而非 dev Gateway 的 19001 端口；该 PR 取代了 #165372（itachi47，同日关闭）。说明维护者已对同一问题给出规范化修复。
  https://github.com/openclaw/openclaw/pull/191428
- **CI 测试稳定性**：CLOSED #191341（隔离 cancellation 测试与原生启动耗时）、#191328（UI 测试等待懒加载插件设置），均为 test-only 变更，直接降低 flaky 失败。
  https://github.com/openclaw/openclaw/pull/191341 · https://github.com/openclaw/openclaw/pull/191328
- **iMessage 自动化授权丢失**：CLOSED #186107（anmol0b）——app 更新后需重新授予 Automation 才能发消息的问题（关闭 #178719），但标签含 `merge-risk: security-boundary` 与 `needs proof`。
  https://github.com/openclaw/openclaw/pull/186107
- **CLOSED 但未见 fix 的 Issues**：#144502（WhatsApp TTS 语音条）、#143632（iMessage 消息 2–3 次重复投递）、#156864（`tools.alsoAllow` 不生效）、#169423（codex 插件迁移不完成）、#141615（webchat 鉴权卡死），均带 `stale`/`needs-info`，属清理而非修复。

**整体推进量**：样本内没有 P0/P1 级别的缺陷修复被合并，今日进展以**基础设施与测试卫生**为主，核心稳定性问题仍在等待修复 PR。

---

## 4. 社区热点

| 条目 | 状态/优先级 | 评论 | 链接 |
|---|---|---|---|
| #177656 Native host exec 返回 shared-state 完整性准入错误 | OPEN / P1 | 25 | https://github.com/openclaw/openclaw/issues/177656 |
| #120385 Code Mode 工具目录对 cron/记忆刷写轮次构建不完整 | OPEN / P2 | 24 | https://github.com/openclaw/openclaw/issues/120385 |
| #178359 `doctor --fix --non-interactive` 静默挂起 15+ 分钟 | OPEN / P1 | 20 | https://github.com/openclaw/openclaw/issues/178359 |
| #187900 `doctor` 在 Linux 上无限挂起（所有模式） | OPEN / P1 | 19 | https://github.com/openclaw/openclaw/issues/187900 |
| #114414 Dated TODO sweep（机器人任务） | OPEN / P3 | 16 | https://github.com/openclaw/openclaw/issues/114414 |
| #145309 claude-cli 忽略 `CLAUDE_CONFIG_DIR` | OPEN / P1 | 13 | https://github.com/openclaw/openclaw/issues/145309 |

**诉求分析**：
- 评论最集中的是**多宿主环境下的进程/状态一致性问题**（#177656、#120385），报告者反复更新复现环境（Ubuntu、Node 24/26），说明用户已在生产环境依赖该路径，且问题长期无 fix。
- `doctor` 相关的两条 (#178359、#187900) 构成同一主题：**自诊断工具本身不可用**，直接削弱用户自救能力，社区抱怨度高。
- #145309 的纠结点是 provider 配置契约（`CLAUDE_CONFIG_DIR` 未被尊重），与 #155633（Databricks Unity Gateway 作为官方模型 provider）同属“企业托管配置可编程性”诉求。

---

## 5. Bug 与稳定性

按严重程度排列（P0 → P1 → P2），均基于样本内标签：

**P0 / 严重**
- **#142821** 默认开启的 model-visible transcript 脱敏在持久化时污染回放上下文，掩码扩散至命令、文件与回复；标签 `impact:data-loss, impact:security, linked-pr-open`。**已有关联 PR，未合并。** https://github.com/openclaw/openclaw/issues/142821
- **#164800** 2026.9.7 → 2026.9.8 托管更新后激活驱动失效，需重启主机；`impact:ux-release-blocker, crash-loop, fix-shape-clear`。**未见 fix PR。** https://github.com/openclaw/openclaw/issues/164800

**P1 / 高**
- **#187900 / #178359** `doctor` 全模式挂起（Linux，含 `--lint`）与 `--fix` 静默挂起，`impact:crash-loop`；均 `no-new-fix-pr`。
- **#177656** native host exec 共享状态准入错误，稳定版 2026.10.5 已记录 ≥28 次失败；`no-new-fix-pr, needs-maintainer-review`。
- **#144336** 延迟配置重载（SIGUSR1）在关闭阶段失败：`service child cleanup identity lost`，与 #177656 同源信号。
- **#152965** 热重载**非通道**插件会 dispose 全部插件实例，切断活跃流并丢消息；`fix-shape-clear`，**修复形态已明确，缺执行**。
- **#145309** claude-cli 丢失 transcript 导致会话重置与 failover；`linked-pr-open`。
- **#156895** 自动任务 ~20ms 即 fail-closed（“Scheduled account unavailable”），`needs-security-review` + `needs-live-repro`。
- **#121558** cron 隔离运行把模型运行叙述混入对外播报消息；`maintainer` 标签，`linked-pr-open`。
- **#140455** google-meet 插件循环 JSON 崩溃、语音会话不可用。

**P2 / 中（有代表性者）**
- **#166133** MCP tool_call 将整数参数强制转为字符串，导致 `-32602` 参数错误（`stale`）。
- **#112313** 出站投递队列 dead-letter 条目永久不可清理（无 CLI/RPC/TTL）。
- **#141172** run 在首次 session commit 前死亡会永久泄漏 `agent.run.started`。
- **#138561** active-memory 插件在 2026.8.2 后完全停止召回且 info 级无日志。
- **#157827** 短期记忆 seed 只引用合并 REM 条目的首个 ref，文本与引用不一致。

**安全专项**
- **#173058** `tools.fs.workspaceOnly: true` 不生效——运行时同时获得 OpenClaw state root 作为允许工作目录，构成文件沙箱逃逸；`needs-security-review`，无 fix PR。
  https://github.com/openclaw/openclaw/issues/173058

---

## 6. 功能请求与路线图信号

| 需求 | 关联 PR | 落地判断（基于样本证据） |
|---|---|---|
| Databricks Unity Gateway 作为官方模型 provider（#155633） | #155634 | `linked-pr-open` + `needs-product-decision`，属产品级决策，今日未推进 |
| WhatsApp 机器人编辑自己发送的消息（#189816） | 自身为 XL PR，`security-boundary` + `needs proof` | 对标 Telegram/Discord 已有能力，功能方向明确但证据不足 |
| 跨 agent 共享 person-scoped 项目知识（#189822） | 自身为 XL PR | 与 #186066/#186065 存在依赖链，`needs proof`，短期难合入 |
| 完成唤醒投递语义四项规则（#150598，现场数据） | — | 已于今日 CLOSED（`stale`），**未采纳**，短期内不会进入路线图 |
| 可机读的 collector 结算原因与诊断（#165685） | — | P3 `needs-product-decision`，优先级低 |

**判断**：今日可见的功能向 PR 普遍卡在“缺证据/需安全审查”环节，下一版本窗口内更可能落地的是**小型 UI/UX 改进**（见 #191441、#191430、#191433、#191368 等当日提交的一组 Settings 布局整理 PR，作者均为 vyctorbrzezowski），而非平台级能力。

---

## 7. 用户反馈摘要

- **生产环境用户在多宿主上踩坑**：报告者携带完整环境指纹（Ubuntu 7.0.0-31、Node v24/v26、macOS 26.5/27.0），并自行统计失败次数（“at least 28 failures on stable 2026.10.5”），说明有团队在稳定版上做规模化运行。
- **升级路径是最大痛点**：多份报告围绕 9.7→9.8→9.9→10.1 的手动逐跳（#164800、#169423、#167540 引用），用户明确记录“手动 hop”带来的迁移未完成状态。
- **运维自愈能力缺失**：`doctor` 挂起（#178359、#187900）、dead-letter 队列不可清理（#112313），用户抱怨的是“出了问题也没有可用工具排查”。
- **对 MCP 与第三方 CLI 互操作敏感**：整数参数被强转（#166133）、`CLAUDE_CONFIG_DIR` 被忽略（#145309）、`tools.alsoAllow` 不生效（#156864），均属“配置已写但不生效”的预期落差。
- **记忆子系统口碑受挫**：active-memory 静默停止召回（#138561）、记忆 seed 引用错位（#157827），且都缺少 info 级信号，用户难以察觉退化。
- **认可点**：无需推断——样本中 👍 反应极少（最高仅 2，#145309），社区以详尽的复现报告为主要贡献方式。

---

## 8. 待处理积压

按“存续时间 × 严重度 × 无修复”排序：

1. **#112313**（2026-07-21 起，P2，`diamond lobster`）dead-letter 队列条目永久化——积压 **104 天**，`needs-product-decision`，无 fix PR。https://github.com/openclaw/openclaw/issues/112313
2. **#145309**（2026-09-11，P1）claude-cli transcript 路径问题——52 天，仅 `linked-pr-open`，未合并。https://github.com/openclaw/openclaw/issues/145309
3. **#142821**（2026-09-09，P0）transcript 脱敏污染——54 天，P0 中存续最久，`linked-pr-open` 仍未合。https://github.com/openclaw/openclaw/issues/142821
4. **#156895**（2026-09-24，P1，`platinum hermit`）自动任务 fail-closed，同时缺 `live-repro` 与安全审查，双重阻塞。https://github.com/openclaw/openclaw/issues/156895
5. **#149631**（2026-09-16，P2）PR preflight 在 120 个 Node 矩阵任务上限处抛错，`ci-gate` 全红——**直接阻塞他人 PR**，建议优先。https://github.com/openclaw/openclaw/issues/149631
6. **#114414** Dated TODO sweep：机器人持续生成的过期待办（CI 中残留 Codex 认证路径等），属治理欠账。https://github.com/openclaw/openclaw/issues/114414
7. **PR #140131**（2026-09-06 起，P2，`stale`）macOS 保留所选 CLI——近两个月未评审。https://github.com/openclaw/openclaw/pull/140131

**给维护者的提示**：超过 30 天仍为 `no-new-fix-pr` 的 P0/P1 共 6 条（#142821、#164800、#177656、#187900、#145309、#156895），其中 #142821 与 #173058 涉及安全与数据丢失，建议本周内明确指派。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告 · 2026-11-02

> 依据：当日 15 个项目的社区动态摘要。所有数字均为各摘要中明确给出的当日样本值；未提供的字段标注“—”。部分项目摘要中的仓库链接存在不一致，下文按原始数据引用项目名，不做推断。

---

## 1. 生态全景

生态整体处于**高吞吐、低合入**的“输入积压”阶段：OpenClaw、Hermes Agent、CoPaw、ZeroClaw 四项目当日合计 Issue/PR 更新超过 1,000 条，但当日仅 Hermes Agent 与 CoPaw 各发布 1 个版本，ZeroClaw 合并数为 0。缺陷报告的共同主题从“功能缺失”转向**运维自愈、静默失败与安全边界**：`doctor` 挂起、记忆静默丢失、配置声明未实现、沙箱逃逸在多项目重复出现。功能向 PR 普遍卡在“缺证据 / 需安全审查 / 产品决策”，当日真实落地多为测试卫生、依赖维护与小体量 UI 修正。同时，多租户/团队化（CoPaw #7318）、会话事件可回放（ZeroClaw #11921）、懒加载路由（NanoClaw #3711）等架构级提案集中涌现，指向下一轮结构性演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 / 关闭） | PR（待合并 / 合并或关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 235 / 265（共 500 更新） | 335 / 165（共 500 更新） | 无 | 活跃度极高；稳定性修复供给落后于缺陷报告，P0/P1 存量 6 条超 30 天无 fix |
| **Hermes Agent** | 48 / 2（共 50） | 38 / 12（共 50） | **v0.22.6**（汇总约 776 PR） | 活跃但积压显著；统一网关注入风险，当日 12 条 P2 全无 fix PR |
| **CoPaw** | 12 / 11（共 23） | 31 / 15（共 46） | **v2.3.0-beta.2** | 高活跃、清理有序；两类高危 Bug 已有 fix PR，但 31 条待审 |
| **ZeroClaw** | 49 / 0 | 50 / **0** | 无 | 输入积压最严重：零合入、零发布，XL/高风险 PR 堆积 |
| **LobsterAI** | 1（申诉类） | 9 / 15（共 24） | 无 | 中等偏高，以 Dependabot 维护为主；3 项实质修复合入 |
| **NanoClaw** | 0 | 7 / 1（共 8） | 无 | 维护性推进日；关键设计 PR #3711 积压约 2 个月软阻塞下游 |
| **NanoBot** | 5（仅 1 条有评论） | 4 / 6（共 10） | 无 | 工程侧活跃、社区侧安静；6 个月 `conflict` 积压被清理，功能净损失 |
| **NullClaw** | 0 | 3 / 0 | 无 | 中低；开放修复队列净增长 3 条 |
| **IronClaw** | 0 | 5 / 0 | 无 | 功能性静止；全部为 dependabot，最早挂起约 71 天且标 `risk: medium` |
| **PicoClaw** | 0 | 1 / 0 | 无 | 低位静默；唯一 PR 描述为模板占位 |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | 当日无活动 |

---

## 3. OpenClaw 在生态中的定位

- **规模断层领先**：当日 Issues+PR 更新 1,000 条，是第二梯队（Hermes 100 条、ZeroClaw 99 条、CoPaw 69 条）的 **10 倍量级**；关闭 265 条 Issue、合并/关闭 165 条 PR，吞吐量本身构成一种治理能力。
- **优势：生态位已成“参照物”**。LobsterAI 的修复明确针对“OpenClaw v2026.8.1 中 `sessions_spawn` 接受任意 `model` 参数”（#2975），说明第三方项目把 OpenClaw 的行为契约作为兼容基线——这是生态核心地位的强证据。
- **技术路线差异：广度优先的全通道网关**。OpenClaw 覆盖 WhatsApp、iMessage、Telegram、Discord、google-meet、codex 插件、cron、webchat 等，缺陷也集中于此：多宿主进程/状态一致性（#177656）、热重载断连（#152965）、`doctor` 挂起（#187900/#178359）。其代价是**运维链路脆弱、升级路径需手动逐跳**（9.7→9.8→9.9→10.1），与 Hermes 的“统一网关 + 单一进程”路线形成对照——后者同样在合并后暴露遗留问题（#143547，40 评论）。
- **社区规模对比**：OpenClaw 单日缺陷报告即超过多数项目一月的 Issue 数，并附完整环境指纹与失败计数（“at least 28 failures on stable 2026.10.5”），说明已有团队在生产规模运行。但其点赞反应极少（最高 2），社区贡献形态是**详尽复现报告而非情绪反馈**——与 CoPaw（高质量带根因的报告）、ZeroClaw（同作者集中提交 S0/S1）的高参与度形成风格差异。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目与具体诉求 |
|---|---|
| **静默失败与可观测性** | CoPaw #8500（丢记忆仍报 `success=True`）、#7715（“no returned content” 掩盖根因）、#8549（配置越界致 provider 静默消失）；OpenClaw #138561（active-memory 静默停止召回、无 info 日志）；ZeroClaw #9779（`sops_dir` 默认值不生效致 SOP 静默不加载）、#12187（会话角色污染）；NanoBot #6543（libmagic 缺失被误报为插件依赖缺失）；LobsterAI #2974（“couldn't generate a response” 但工具可能已执行） |
| **配置声明与实际行为不一致** | OpenClaw #156864（`tools.alsoAllow`）、#145309（`CLAUDE_CONFIG_DIR` 被忽略）；ZeroClaw #1089（`socks5://` 声明但 HTTP 层未实现）；NullClaw #1089（同型：socks5 被静默忽略）；Hermes #147922（容器环境变量 key 不到达非默认 profile） |
| **安全边界与沙箱逃逸** | OpenClaw #173058（`workspaceOnly` 不生效，文件沙箱逃逸）、#142821（P0 脱敏污染回放上下文）；ZeroClaw #12126/#12127（先规范化后鉴权的 Windows UNC 凭据泄露）、#12050（OIDC CSRF）；CoPaw #8048（内联 Office COM 自动化）、#8018（卷根写 sandbox ACE）；NanoBot #6537（MCP 断连后重放结果未知操作） |
| **记忆 / 上下文可靠性** | OpenClaw #138561、#157827（记忆 seed 引用错位）；CoPaw #8500、#7966（切 provider 后会话永久损坏）；NanoBot #6541（compaction 被绕过致长对话降级） |
| **多渠道消息保真度** | NanoBot #6539（`strip_think` 篡改代码块）；NanoClaw #4248（WhatsApp 文档 caption 丢失）、#4247（跨会话附件缺失）；Hermes #113578（Teams 文档发送双故障）、#147937（Feishu 上传阻塞共享事件循环）；CoPaw #8538（Matrix 多工作区仅首个激活） |
| **资源效率与懒加载** | NanoClaw #3711/#3712/#4245（无人接收不下载、payload 不重复复制）；ZeroClaw #11703（工具激活改写系统提示击穿 prompt cache）；Hermes #147974（mermaid.js 2.97 MB 换 Pele）；LobsterAI #2976（安装包瘦身） |
| **团队化 / 多租户** | CoPaw #7318（36 评论，Hub 多租户路线图）；OpenClaw #155633（Databricks Unity Gateway 企业托管配置）；NanoClaw #3845（本地监控面板） |
| **依赖安全时效** | ZeroClaw #12200（pulldown-cmark 修 RUSTSEC-2026-0433，`Security` CI 全红）；IronClaw #7834（wasmtime 组 `risk: medium` 挂起 71 天） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特征 |
|---|---|---|---|
| **OpenClaw** | 全通道个人助手网关（IM、语音、cron、插件） | 规模化自托管团队、多宿主生产用户 | 多通道插件 + 配置热重载 + 托管更新 |
| **Hermes Agent** | CLI/TUI/Desktop/API/编辑器统一入口 | 桌面 + 容器化自托管用户 | 单一网关进程收敛所有本地会话 |
| **CoPaw** | Console 体验、技能池、多渠道（钉钉/Matrix/QQ） | 中文办公场景、NAS 长驻用户 | 渠道插件化（Matrix 已转官方插件）、技能目录 |
| **ZeroClaw** | Rust 原生、可回放会话、安全硬化 | Rust 优先的工程团队 | 仅追加事件历史、原生 XMPP、distroless 支持 |
| **NanoClaw** | 渠道适配器 + 路由懒加载 | 多邮箱/多 IM 接入者 | `channels` 注册表 + `routeInbound` 前置内容生成 |
| **NanoBot** | 轻量 agent 运行时 + WebUI | 单机个人用户 | 运行时恢复、MCP 资源渲染 |
| **NullClaw** | Zig 实现、通道监督 | 低依赖部署用户 | `ChannelManager.supervisionLoop()` 热重启 |
| **IronClaw** | Rust 服务端 + WASM 扩展 + AI CI | 平台工程 | wasmtime 沙箱、dependabot 驱动维护 |
| **LobsterAI** | 桌面客户端 + 内置模型接口 | 国内桌面个人用户 | Electron、`sessions_spawn` 子智能体 |
| **PicoClaw** | Termux/移动终端接入 | Android 终端用户 | 轻量 shell 集成 |

关键分野：**语言与运行时**（Rust：ZeroClaw/IronClaw；Zig：NullClaw；Python：Hermes/CoPaw/NanoBot/NanoClaw）与**入口形态**（桌面客户端 vs 网关进程 vs CLI）。OpenClaw 与 Hermes 都选择“网关收敛”，但 OpenClaw 以通道广度取胜，Hermes 以入口统一性取胜。

---

## 6. 社区热度与成熟度

**第一梯队 · 快速迭代但修复供给吃紧**：OpenClaw（1,000 条更新、0 发布）、ZeroClaw（99 条更新、0 合入）。二者共同特征是缺陷与 PR 输入远超合并吞吐，需要治理而非提速。

**第二梯队 · 有发布节奏、进入质量巩固**：Hermes Agent（补丁版汇总 776 PR，同时 12 条新 P2 无 fix）、CoPaw（beta 迭代，高危 Bug 已配 fix PR，但出现 #8547 对 #7291 的**回归**）。这两个项目已具备“报告—修复—发布”闭环，问题在于审查队列（CoPaw 31 条待审，#7903 等待约 6 周）。

**第三梯队 · 维护性推进、架构议题悬置**：NanoClaw（关键设计 PR 积压 2 个月并阻塞 #3712）、LobsterAI（Dependabot 重复提交：#2856 等关闭后同日以 #2973 等重提）、NanoBot（6 个月 `conflict` 积压被关闭，CLI 改进意图流失）、NullClaw（合并数 0，队列净增 3）。

**第四梯队 · 低活跃 / 静默**：IronClaw（仅 bot 活动，71 天 `risk: medium` 未合）、PicoClaw（单 PR 无描述）、TinyClaw / Moltis / ZeptoClaw（无活动）。

成熟度判据：**是否具备回归防线**。CoPaw 的 #8547 回归与 OpenClaw 的 P0 长期存量说明，高活跃项目当前最缺的不是提交量，而是“曾修复项”的回归用例与明确指派机制。

---

## 7. 值得关注的趋势信号

1. **“失败必须可见”成为刚需，而非nice-to-have**。至少 6 个项目出现静默失败（CoPaw 4 例、OpenClaw/ZeroClaw/NanoBot/LobsterAI 各若干）。对开发者的参考价值：**错误分类粒度与根因暴露应作为接口契约的一部分设计**，例如 CoPaw #8527 用 `DEPENDENCY_STATE_ROOT_UNAVAILABLE` 结构化错误码替代崩溃，是可复用范式。

2. **配置即承诺：文档漂移正在消耗信任**。`socks5://`（ZeroClaw/NullClaw 双项目同型）、`sops_dir` 默认值、`CLAUDE_CONFIG_DIR`、`tools.alsoAllow` 均属“写了但不生效”。建议把配置项纳入启动期自检，与 OpenClaw `doctor` 的设计意图一致——但 `doctor` 自身挂起（#187900/#178359）恰恰说明**自检工具必须先于被检功能达到可用**。

3. **安全问题的形态从“注入”转向“先规范化后鉴权”**。ZeroClaw #12126/#12127 的 Windows UNC 路径规范化顺序、OpenClaw #173058 的 state root 被并入工作目录，都是**路径/身份解析发生在权限检查之前**。这是跨语言共性缺陷模式，值得作为代码审查清单项。

4. **懒加载 / 延迟执行从性能优化升级为架构契约**。NanoClaw #3711 明确“内容在路由看到前必须完整生成”是设计缺陷，其修复将改变所有渠道适配器的入站契约；ZeroClaw #12183（运行时提示注入）与 #10893（steering 管线）方向一致。**“何时产生副作用”正在成为 agent 框架的一等设计问题**。

5. **可回放性进入架构核心**。ZeroClaw #11921 以仅追加事件历史作为权威来源、支持回放重建状态而不重复副作用；NanoBot #6537 修复恢复历史丢失与 MCP 重放；Hermes #148123 为 patch 编辑加内容哈希锚点。三者指向同一结论：**幂等与可重放是 agent 运行时的基础能力，而非附加特性**。

6. **团队化是需求端最明确的下一站**。CoPaw #7318（36 评论）从个人助手向多租户 Hub 演进，OpenClaw 侧则是企业托管配置可编程性（#155633）。个人助手产品的增长路径正在从“更好用的单人工具”转向“可被组织托管”。

7. **依赖治理是隐性风险**。ZeroClaw 因 RUSTSEC-2026-0433 导致 `Security` CI 全红，IronClaw 的 wasmtime 组挂起 71 天，LobsterAI 出现关闭后重提的重复 PR。**当项目吞吐被 PR 审查卡住时，安全补丁的落地延迟往往被低估**。

---

*说明：本报告仅基于所提供各项目日报数据；评论数缺失（标注 `undefined`）的条目未做热度推断，跨项目数字比较仅在同一统计口径（当日样本更新数）内进行。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-11-02

> 数据来源：HKUDS/nanobot GitHub 仓库过去 24 小时动态（Issues 5 条、PR 10 条、新版本 0 个）

---

## 1. 今日速览

项目今日呈现"高吞吐、低互动"的状态：24 小时内 10 条 PR 更新（4 待合并、6 已关闭/合并）与 5 条新 Issue，但 0 个新版本发布，Issue 评论仅 1 条、👍 全部为 0，社区讨论热度偏低。关闭的 6 个 PR 中 5 个来自同一作者 Zeknes 且均带 `conflict` 标签、创建于 5 月份，更像是积压清理而非新功能落地。今日新开 Issue 全部集中在**边界行为正确性**上（think 标签解析、WhatsApp 依赖诊断、Linear 授权取消、Codex 压缩回退），说明项目正进入细节打磨周期。整体活跃度评估：**中等偏上（工程侧活跃，社区侧安静）**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 6 个 PR 中，**1 个为新提交且当日关闭**，**5 个为 4–5 月遗留的 `conflict` 积压清理**：

- **#6537 [CLOSED] fix(runtime): preserve recovery history and prevent unsafe MCP replays** — 修复两个运行时安全问题：中断的对话轮次会丢失已完成的工具轮次或重复持久化同一恢复批次；MCP 连接断开后可能重放结果未知的操作，且 resource/prompt 错误会被记录为成功。属于**运行时可靠性**方向的重要修复。（[链接](https://github.com/HKUDS/nanobot/pull/6537)）
- **#6540 [CLOSED] fix(webui): avoid remounting outgoing conversations** — 修复切换带文件差异的会话时主线程阻塞问题（与 #6443 引入的 session-keyed 结果包装器相关），涉及 WebUI 性能。（[链接](https://github.com/HKUDS/nanobot/pull/6540)）
- **#3602 / #3601 / #3593 / #3592 [CLOSED, conflict]** — 由 Zeknes 于 2026-05-02/03 提交的四条 CLI 与 agent 层修复（tool_error 时错误设置 `_streamed` 标志、终端面板化显示、子命令组缺省时显示帮助、Ctrl+C 清空输入而非退出），今日统一关闭。因带 `conflict` 标签，推测为冲突无法合入而清理，其**功能意图可能仍需后续重新提交**。（[#3602](https://github.com/HKUDS/nanobot/pull/3602) · [#3601](https://github.com/HKUDS/nanobot/pull/3601) · [#3593](https://github.com/HKUDS/nanobot/pull/3593) · [#3592](https://github.com/HKUDS/nanobot/pull/3592)）

**推进评估**：核心运行时的恢复/MCP 安全性得到实质改善；但 CLI 体验类改进（Ctrl+C 行为、帮助提示、面板显示）在积压 6 个月后被关闭，短期未落地，属于净损失。

**待合并的 4 条 PR**（尚在评审）：

- [#6538](https://github.com/HKUDS/nanobot/pull/6538) refactor(goal)：将持续目标授权与延续决策隔离到执行策略边界（NAN-392，带 `conflict` 标签）
- [#6296](https://github.com/HKUDS/nanobot/pull/6296) fix(providers)：流式响应缺少 `tool_calls[].index` 时区分并行工具调用（针对 Gemini OpenAI 兼容 API）
- [#6536](https://github.com/HKUDS/nanobot/pull/6536) feat(webui)：按侧边栏分组管理归档话题
- [#6141](https://github.com/HKUDS/nanobot/pull/6141) fix(mcp)：在工具结果中渲染 resource、resource link 与 audio 块（AI batch PR，带 `conflict` 标签）

---

## 4. 社区热点

今日社区互动整体低迷，无高评论、高反应条目。相对最受关注的是：

- **[#6539 [OPEN] [Bug] strip_think 误删代码块中的字面 think 标签示例](https://github.com/HKUDS/nanobot/issues/6539)** — 唯一有评论的 Issue（1 条）。`strip_think()` 会把 Markdown 围栏代码块内的 `<think>...</think>` 字面示例也删除，改变代码示例内容。诉求核心是：**推理内容清理逻辑需要具备 Markdown 结构感知能力**，而不是无差别正则替换。
- **[#6535 [OPEN] Native Iris Chat channel 原生集成提案](https://github.com/HKUDS/nanobot/issues/6535)** — 贡献者 mmalmi 按贡献者政策先提 Issue 寻求维护者评审，再提核心 PR。Iris Chat 提供类 Signal 的 Nostr Double Ratchet 消息能力。虽无评论，但属于**通道生态扩展**的信号，需维护者明确表态。

**分析**：今日热点缺失本身是信号——高优先级问题缺乏讨论分流，维护者对新 Issue 的初步响应偏慢（4/5 条 Issue 零评论）。

---

## 5. Bug 与稳定性

按严重程度排序（今日新开 Bug 均**无对应 fix PR**）：

| 严重度 | Issue | 问题 | Fix PR |
|---|---|---|---|
| **高** | [#6541](https://github.com/HKUDS/nanobot/issues/6541) | 必需 Codex compaction 在含图片请求中失败后，图片移除重试会清空原生对话状态并重建 `ProviderCallContext`（丢失 `compaction_input_budget`），降级为普通生成——**上下文压缩保障被绕过**，可能影响长对话正确性 | 无 |
| **高** | [#6542](https://github.com/HKUDS/nanobot/issues/6542) | Linear 集成在授权已完成、安装已保存后仍返回 cancelled（取消等待 token 交换锁或晚于成功轮询到达），浏览器显示取消 —— **状态不一致，用户误判授权失败** | 无 |
| **中** | [#6543](https://github.com/HKUDS/nanobot/issues/6543) | WhatsApp 通道 `_load_neonize()` 将 `import magic`、Neonize 导入与 magic API 校验混在同一 try 块，**原生 libmagic 缺失被误报为插件依赖缺失**，诊断信息误导用户 | 无 |
| **中** | [#6539](https://github.com/HKUDS/nanobot/issues/6539) | `strip_think()` 破坏围栏代码块中的字面 think 标签示例，**输出内容被篡改** | 无 |

**相关待合并修复**：[#6296](https://github.com/HKUDS/nanobot/pull/6296) 处理 Gemini 流式并行工具调用索引缺失问题，若合入可缓解同类 provider 解析缺陷。

---

## 6. 功能请求与路线图信号

- **原生 Iris Chat 通道**（[#6535](https://github.com/HKUDS/nanobot/issues/6535)）：贡献者已完成外部包测试并附上游集成提案。是否纳入取决于维护者对"原生通道"边界的政策判断；目前**无对应 PR**，属早期信号。
- **WebUI 归档话题分组管理**（[#6536](https://github.com/HKUDS/nanobot/pull/6536)）：已有实现 PR，功能面完整（归档可见性下沉到项目与 Topics 菜单、跨刷新保留、保留既有 pane 分组），**最有可能进入下一版本**。
- **Goal 执行策略重构**（[#6538](https://github.com/HKUDS/nanobot/pull/6538)）：对应 NAN-392，属架构级改进，带 `conflict` 标签需先解决冲突。

---

## 7. 用户反馈摘要

今日评论量极少（仅 #6539 有 1 条），可提炼的真实反馈有限，主要来自 Issue 描述本身：

- **痛点：输出保真度**。用户对 `strip_think` 篡改代码示例不满，说明用户会在代码/文档场景中依赖工具的精确输出，期望"只删推理、不动正文"。
- **痛点：错误诊断误导**。WhatsApp 用户遇到的是系统依赖（libmagic）问题，却被引导去排查插件依赖，增加排障成本——反映**错误信息归类粒度不足**。
- **痛点：集成状态不一致**。Linear 用户在授权成功后看到"已取消"，是典型的**异步取消与轮询竞态**造成的信任损耗。
- **满意/不满意**：数据中未包含明确的正面反馈或点赞（全部 👍 为 0），暂无法评估满意度分布。

---

## 8. 待处理积压

- **[#6296](https://github.com/HKUDS/nanobot/pull/6296)（创建于 2026-10-19，已挂起约 2 周）** — Gemini 并行工具调用解析修复，provider 兼容性问题影响面较广，建议优先评审。
- **[#6141](https://github.com/HKUDS/nanobot/pull/6141)（创建于 2026-10-10，已挂起约 3 周）** — MCP resource/audio 块渲染修复，带 `conflict` 标签，若长期不处理，MCP 工具返回非文本内容时模型将持续看到 pydantic 对象字符串。
- **[#6538](https://github.com/HKUDS/nanobot/pull/6538)** — 当日提交即带 `conflict` 标签，建议作者尽快 rebase。
- **Zeknes 四条 CLI 修复（#3592/#3593/#3601/#3602）今日以 `conflict` 关闭** —— 其用户价值（Ctrl+C 防误退出、子命令帮助提示）真实存在，建议维护者评估是否值得重新以干净分支提交，避免功能意图随积压清理一同流失。

---

*说明：本日报所有条目均基于所提供数据，未包含数据之外的信息；PR 评论数在原始数据中为 `undefined`，故未做推断。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-11-02

## 1. 今日速览

项目今日保持高强度活跃：24 小时内 50 条 Issue 更新（48 条新开/活跃、2 条关闭），50 条 PR 更新（38 条待合并、12 条已合并/关闭），并发布补丁版 v0.22.6。活动重心集中在统一网关（#106742）合并后的遗留问题上，以及 Docker/多 profile 配置缺陷和 CI 提速实验。当日单条 PR 讨论量普遍偏低（评论数为 undefined），社区讨论热度高度集中在长期跟踪类 Issue 上，说明维护者的处理重心仍是修复存量问题，而非推动新功能。整体健康度：**活跃但积压压力显著**，尤其是长生命周期 Issue 尚未收敛。

## 2. 版本发布

**v0.22.6**（2026-11-02，Patch release）
- 汇总自 v0.22.5 以来合并的约 776 个 PR，作为稳定版发布，覆盖 GitHub release（CLI 与安装器）、Microsoft Store 应用、Docker 与 Hermes Cloud 渠道。
- **破坏性变更**：发布说明未提及。
- **迁移注意事项**：该版本为补丁汇总版，完整整理版说明将随 v0.23.0 提供；需关注 v0.23.0 发布说明以获取本窗口的正式变更明细。
- 链接：https://github.com/NousResearch/hermes-agent/releases

## 3. 项目进展

今日已合并/关闭的 PR 以基础设施与研发效率类为主：

- **CI 提速实验系列（草稿/仅测量，均已关闭）**：#148105、#148093、#148080、#148089 分别测试跳过真实 5 分钟完成等待、Linux 测试文件从预加载服务器 fork、按耗时优先调度慢速测试文件、按实测时间切分测试分片。结果将汇总到单一整合 PR。
- **PR #148021 / #148017**：`npm run fix` 自动格式化，由 workflow 自动生成并通过 CI 后 squash 合并（均为 CLOSED）。
- **待合并中的实质推进**：
  - #148015 `fix(skills)`：锁记录不可读时在所有写入路径 fail-closed，修复两个读取方失败语义相反的问题。
  - #147974 `perf(desktop)`：桌面端改用 Pele 渲染 mermaid 代码块，替代 2.97 MB（gzip 768 KB）的 mermaid.js 懒加载包。
  - #148124：会话内核死亡时留下重建记录，避免模型“盲重建”。
  - #148123：为 patch 编辑增加内容哈希锚点，降低歧义匹配与陈旧重试的误改风险。
  - #148122：systematic-debugging 技能新增真实调试器步骤。

整体推进量：**中等**。当日落地多为研发流程与工具链优化，尚无从 Issue 到修复合入的完整闭环实例。

## 4. 社区热点

| 条目 | 评论 | 说明 |
|---|---|---|
| [#143547](https://github.com/NousResearch/hermes-agent/issues/143547) Unified gateway 合并后遗留问题 | 40 | 讨论热度最高。#106742 将 CLI、TUI、Desktop、API server、编辑器、消息机器人、cron、Kanban 等本地会话统一到单一网关进程后，main 分支暴露多个合并后问题 |
| [#113578](https://github.com/NousResearch/hermes-agent/issues/113578) Teams 适配器无法发送文档 | 7 | 两个独立失败：进程内发送把本地文件当普通附件（`400 Unknown attachment type`），独立发送器直接丢媒体（`400 BadSyntax`） |
| [#4136](https://github.com/NousResearch/hermes-agent/issues/4136) 用 Rust 重写项目 | 2（👍 8） | 单条点赞数最高，用户提出智能路由、多 Agent 协作、记忆系统等方面的差距表 |
| [#58725](https://github.com/NousResearch/hermes-agent/issues/58725) Dashboard Office 插件 | 2 | 请求单一面板实时展示所有活跃 Agent（profiles、kanban worker、终端会话、委托子 Agent） |

**诉求分析**：社区关注点呈现“架构稳定性 + 平台适配 + 可视化可观测性”三条主线。统一网关是当前最大风险源，其架构收敛直接决定用户日常使用体验；Teams 等外部平台适配的媒体处理链路仍不成熟；面向多 Agent 运作的可视化被反复提及。

## 5. Bug 与稳定性

按严重程度排列（P2 优先）：

- **[P2] 新会话首条 prompt 静默丢失** — #138047（Desktop/macOS，`needs-repro`）：首条 prompt 未达 tui_gateway，会话未持久化，UI 无错误提示。**无 fix PR**。
- **[P2] Docker 命名 profile 的 `--force` 失效** — #147912：`gateway start --force` 退出码为 0，但 s6 slot 未带 `--force` 运行并以 78 退出。**无 fix PR**。
- **[P2] 容器环境变量中的 provider key 无法到达非默认 profile** — #147922（Docker 多路复用网关）。**无 fix PR**。
- **[P2] Desktop cron ticker 线程因 `_ModuleLock('cron.jobs')` 死锁启动即死** — #147956（Python 3.14，宿主 7 天内复现 15 次）。**无 fix PR**。
- **[P2] 并发单键配置写入静默丢失更新** — #147939：`save_config()` 有 `_CONFIG_LOCK`，但单键写入路径缺少等价锁。**无 fix PR**。
- **[P2] `tool_search_catalog.py` 在 snowballstemmer 缺失时抛 AttributeError** — #147946。**无 fix PR**。
- **[P2] 旧版托管房间不可读、不可删除** — #147959：RoomActor schema 收紧后，持久化的 `actor_json` 额外字段违反 `groups.log` 线协议。**无 fix PR**。
- **[P2] kanban 配置修改需重启，重启会杀掉在途卡片** — #148006。**无 fix PR**。
- **[P2] 出站媒体路径工作阻塞共享网关事件循环** — #147937（Feishu 上传）。**无 fix PR**。
- **[P2] 旧 `gen-` schema 之前的 side environment 选择被永久拒绝** — #144226。**无 fix PR**。
- **[P2] `pdf.attach` 的 pdftoppm 固定 120s 超时，不随页数伸缩** — #146639。**无 fix PR**。
- **[P2] computer_use `desktop_identity` 仅记录 DISPLAY** — #132877（Wayland 嵌套会话）。**无 fix PR**。
- **[P3]** Dashboard 文档面板在非 loopback 访问下空白（X-Frame-Options: DENY）— #147944；Windows Desktop 把 `requirements.md` 误当链接并 spawn curl.exe 触发 EDR 告警 — #147952。
- **已关闭**：#147963 Windows 插件安装对话框卡在 “Inspecting repository...”（P2）；#147994 Sessions 与 Bots 同栏展示（feature）。

**小结**：今日 P2 缺陷全部处于**无 fix PR 状态**，其中 Docker/多 profile 配置类问题集中在 2026-11-02 同日报告，提示 v0.22.5 镜像与统一网关组合存在系统性问题，建议优先排查。

## 6. 功能请求与路线图信号

- **#115645 `/review` 增强**（OPEN，自 2026-09-19，teknium1）：对指定 git diff（uncommitted / base branch / commit sha）按深度（`--quick` / `--deep`）执行评审，覆盖 CLI、TUI、Desktop 等所有含 `/review` 的界面。**已有完整 PR，最可能进入下一版本**。
- **#105503 捷克语 lokalizace**（OPEN，自 2026-09-08）：按现有 de/es/fr/tr/uk/af/ko/it/ga/pt/ru/hu/ar 模式新增 `cs` 语言包，覆盖后端消息目录、Web Dashboard 与桌面应用。**PR 已具备，具备合入条件**。
- **#148014 `image-hash-memory` 插件**：向插件市场 memory 分类新增插件（已固定 SHA）。**属目录型扩展，纳入门槛较低**。
- **#58725 Dashboard Office 插件**、**#4136 Rust 重写**：均为方向性请求，目前无对应实现 PR，短期纳入可能性低。

## 7. 用户反馈摘要

- **桌面端可信度受损**：首条 prompt 静默丢失（#138047）与插件安装卡死（#147963）的共同点是“界面无任何错误反馈”，用户会误以为任务已执行，这直接影响对桌面客户端的信任。
- **Docker 部署体验是主要痛点**：多 profile 场景下 `--force` 被吞、环境变量 key 不下发、容器化自托管用户需要反复排障，与官方 Docker 指南的预期不一致。
- **平台集成深度不足**：Teams 用户无法发送文档，Feishu 上传阻塞共享事件循环，消息平台场景下的媒体链路仍需补齐。
- **积极信号**：用户主动贡献本地化（捷克语）与插件（image-hash-memory），并有用户愿意整体重写（#4136，8 赞），显示外部参与意愿仍在。

## 8. 待处理积压

- **[#143547](https://github.com/NousResearch/hermes-agent/issues/143547)**（自 2026-10-23，40 条评论）：统一网关合并后遗留问题主线，是当前最高优先级跟踪项。
- **[#113578](https://github.com/NousResearch/hermes-agent/issues/113578)**（自 2026-09-16，7 条评论，标签 `needs-decision`）：Teams 媒体发送双故障，需产品决策。
- **[#115645](https://github.com/NousResearch/hermes-agent/pull/115645)**（PR 自 2026-09-19）：`/review` 增强，标记 `sweeper:risk-compatibility`，已搁置超过 6 周。
- **[#105503](https://github.com/NousResearch/hermes-agent/pull/105503)**（PR 自 2026-09-08）：捷克语 lokalizace，等待近 8 周未合入。
- **[#4136](https://github.com/NousResearch/hermes-agent/issues/4136)**（自 2026-03-31，8 赞）：Rust 重写提案长期无维护者回应。
- **[#58725](https://github.com/NousResearch/hermes-agent/issues/58725)**（自 2026-07-05）：Dashboard Office 插件请求。

**建议**：维护者应优先清空今日新增的 12 条 P2 缺陷（尤其 Docker/profile 系列），并对 #143547 给出阶段性收敛计划；同时为 #115645、#105503 给出明确的合入或关闭决议，以降低社区等待成本。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-02）

## 1. 今日速览
PicoClaw 今日活跃度处于低位：过去 24 小时 Issues 更新 0 条，PR 更新仅 1 条，无新版本发布。唯一动态为 11-01 创建的待合并 PR #3455（Fix/nvidia model id termux shell），且尚无评论与点赞反馈。项目整体处于平稳期，无合并/关闭动作，代码推进为零。健康度评估：静默但无异常，需关注唯一开放 PR 的评审响应。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无合并或关闭的 PR，项目代码基线未发生推进。

## 4. 社区热点
今日唯一活跃条目：
- PR #3455 [OPEN] Fix/nvidia model id termux shell — 作者 theophillus-imtl，创建与更新均为 2026-11-01，0 👍，评论数未提供（数据缺失）。
  链接: sipeed/picoclaw PR #3455

背后诉求：从标题判断，该 PR 涉及 NVIDIA 模型 ID 与 Termux shell 环境相关的修正，指向在 Termux（Android 终端环境）下使用 NVIDIA 模型的兼容性问题。由于其描述正文仅为模板占位内容（未填写实际改动说明），诉求的具体范围无法从现有材料进一步确认。

## 5. Bug 与稳定性
- 潜在问题（待确认）：PR #3455 的标题与“Bug fix”变更类型勾选项（模板中为未勾选状态）提示可能存在 NVIDIA 模型 ID / Termux shell 相关的修复需求，但 PR 正文未描述具体缺陷，严重程度无法判定。
- 已有 fix PR：#3455 本身可能为对应修复，但因其为 OPEN 状态且描述缺失，尚不能确认是否覆盖完整问题。
- 今日无新报告的崩溃、回归问题（Issues 更新 0 条）。

## 6. 功能请求与路线图信号
今日无新功能请求（Issues 更新 0 条）。唯一与路线图相关的信号是 PR #3455 对 Termux 环境与 NVIDIA 模型 ID 的支持/修正，若通过评审，可能影响后续在移动终端环境下的模型接入兼容性。是否纳入下一版本无法从现有数据判断。

## 7. 用户反馈摘要
今日无 Issues 评论可供提炼用户痛点、使用场景或满意度信息。唯一开放 PR 暂无评论与反应数据，无法归纳真实用户反馈。

## 8. 待处理积压
- PR #3455 [OPEN] Fix/nvidia model id termux shell（创建于 2026-11-01，今日仍待合并，无评论）— 建议维护者尽快评审或要求作者补全改动说明。
  链接: sipeed/picoclaw PR #3455

说明：本次数据中 Issues 为 0 条、无长期未响应的历史条目可供识别；如存在更早期积压项，未包含在本次供数据范围内，故不在此列出。

---
数据来源：PicoClaw（github.com/sipeed/picoclaw）2026-11-02 提供的过去 24 小时 GitHub 数据。评论数等字段存在缺失，相关判断已标注为“数据缺失/无法确认”。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报（2026-11-02）

## 1. 今日速览

今日项目处于**"零 Issue、高 PR"状态**：过去 24 小时无新增或活跃 Issue，也没有新版本发布，但 PR 更新达 8 条（7 条待合并、1 条关闭），提交和修复活动较为密集。工作重心集中在**多渠道适配（channels）与核心路由（core）**，Wachstum 相关适配器（WhatsApp、Proton Mail）和入站消息"懒加载"设计仍是主线。同时出现若干 bug 修复型 PR（跨会话附件、邮件箱任务负载膨胀），AI 镜像刷新机器人也按节奏推进 hardened image 更新。整体看是**维护性推进日**，没有里程碑式交付，但技术债务清理和渠道生态扩展在稳步推进。

## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。

## 3. 项目进展

今日仅 1 条 PR 关闭：

- **#3845 [CLOSED] feat(dashboard): add local monitoring dashboard** — 作者 Ruttney。为 NanoClaw 增加本地监控面板：安装 `@nanoco/nanoclaw-dashboard`、在 `main()` 中接入 `startDashboard()`、新增 `DASHBOARD_SECRET`/`DASHBOARD_PORT` 配置，作者称已通过 dashboard API 与 UI 本地验证。
  链接: https://github.com/nanocoai/nanoclaw/pull/3845

该 PR 的关闭为项目带来了**可观测性能力**（本地监控入口），但数据未说明是合并还是拒绝关闭，需维护者确认最终去向。除此之外，其余 7 条 PR 均处于待合并状态，项目整体推进以"审查中"为主，尚未合并落地。

## 4. 社区热点

今日数据未提供评论数与点赞明细（评论字段为 `undefined`，👍 均为 0），**无法从量化指标判断讨论热度**。从 PR 内容看，最受关注的技术主线是：

- **#3711 [OPEN] feat(router): defer expensive inbound content until an agent will receive it**（作者 mmv，创建于 2026-09-03，已持续近两个月）
  链接: https://github.com/nanocoai/nanoclaw/pull/3711
  核心诉求：`InboundMessage.content` 必须在 `routeInbound` 看到之前就完整生成，导致网络拉取/下载等昂贵工作在消息实际无人接收时也照样执行。该 PR 提出延迟加载（lazy content）机制，是**性能与资源效率**方面的架构级改进，也是 #3712 的前置依赖。

围绕该设计的讨论明显外溢到子 PR：#4248 与 #3712 均是从 #3711/#3712 拆分出来的，说明社区倾向于**把 bug 修复与"懒媒体"设计解耦**，避免小修复被大设计阻塞。

## 5. Bug 与稳定性

按严重程度整理今日相关修复 PR：

| 严重度 | 问题 | PR | 状态 |
|---|---|---|---|
| 中 | **WhatsApp 文档说明文字未被读取**：入站文本提取仅覆盖 `conversation`、`extendedTextMessage.text` 及图片/视频说明，遗漏文档 caption | [#4248](https://github.com/nanocoai/nanoclaw/pull/4248)（OPEN，从 #3711/#3712 拆出） | 已有 fix |
| 中 | **WhatsApp 无谓下载媒体**：即使无人需要也会下载媒体文件 | [#3712](https://github.com/nanocoai/nanoclaw/pull/3712)（OPEN，依赖 #3711） | 已有 fix，但被上游设计阻塞 |
| 中 | **跨会话上下文缺附件**：从其他线程（实时 echo 与 dm/channel 时间线）复制进来的消息未携带附件，agent 看不到文件 | [#4247](https://github.com/nanocoai/nanoclaw/pull/4247)（OPEN） | 已有 fix |
| 中低 | **循环任务负载膨胀**：每次 re-arm 都把完整 task payload（prompt + script）复制进下一次，导致 `inbound.db` 持续增长 | [#4245](https://github.com/nanocoai/nanoclaw/pull/4245)（OPEN） | 已有 fix |

今日无崩溃或回归类问题上报，无新 Issue 记录。值得注意的是 #3712 处于"依赖未落地即被忽略"的软阻塞状态（`resolveContent` 字段在 #3711 合并前被直接忽略，行为与现状一致），维护者需优先推进 #3711 以解除该链条。

## 6. 功能请求与路线图信号

今日无新 Issue，功能信号主要来自 PR：

- **Proton Mail 原生适配器（#4218，OPEN）**：通过 Proton Mail Bridge 提供原生 IMAP/SMTP 接入，是 #3726 的"适配器部分"，已按要求迁移至 `channels` 注册表分支；技能部分（`/add-proton-mail`）与 Bridge 容器仍留在 `main`。
  链接: https://github.com/nanocoai/nanoclaw/pull/4218
- **本地监控面板（#3845，CLOSED）**：若为合并，则"可观测性/本地运维"可能进入后续路线图。
- **路由层懒加载（#3711，OPEN）**：属于架构演进方向，一旦落地将影响所有渠道适配器的入站消息处理契约。

判断：**Proton Mail 适配器与懒加载路由**最有可能成为下一版本的核心内容，但两者都处于待合并状态，短期内不太可能同时落地。

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法提炼用户满意度或负面反馈。从 PR 描述可间接观察到开发者侧的痛点：

- **性能意识上升**：多条 PR 围绕"不做无用工作"（#3711 延迟内容、#3712 停止下载无人要的媒体、#4245 避免 payload 重复复制），反映用户/贡献者对资源消耗与数据库膨胀敏感。
- **渠道完整性诉求**：WhatsApp 文档 caption 缺失、跨会话附件丢失，说明多渠道消息保真度仍是实际使用中的薄弱环节。
- **社区协作规范**：PR 模板 `nanoclaw-pr-template:v2` 与 `follows-guidelines` 标签普遍出现，评审者主动要求拆分 PR（如 javexed 在 #3712 的建议），体现较成熟的协作流程。

## 8. 待处理积压

- **#3711（创建 2026-09-03，已开放约 2 个月）**：路由懒加载设计 PR，至今未合并，且阻塞 #3712 的 `resolveContent` 落地，是当前**最关键的积压项**。
  链接: https://github.com/nanocoai/nanoclaw/pull/3711
- **#3712（创建 2026-09-03）**：与 #3711 同龄，因依赖关系长期悬置。
  链接: https://github.com/nanocoai/nanoclaw/pull/3712
- **#3845（创建 2026-09-17，今日关闭）**：历时约一个半月关闭，建议维护者公开关闭原因（合并或拒绝），避免贡献者困惑。
  链接: https://github.com/nanocoai/nanoclaw/pull/3845
- **#4218（创建 2026-10-24）**：Proton Mail 适配器，需关注是否与 #3726 的技能部分同步推进，避免长期分裂。
  链接: https://github.com/nanocoai/nanoclaw/pull/4218

**健康度小结**：今日无 Issue 噪音、无回归，贡献活跃度良好（8 条 PR 更新），但**审查吞吐偏慢**——7 条 PR 待合并且有关键设计 PR 积压近两个月，建议维护者优先处理 #3711 以解除下游阻塞。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-11-02

## 1. 今日速览

今日 NullClaw 处于"低协作、高提交"状态：过去 24 小时 Issues 更新为 0，无新版本发布，无 PR 合并或关闭，但有 3 个新开的修复类 PR 提交，全部处于待合并状态。三个 PR 均针对具体稳定性或配置一致性问题，作者集中在两位（perfloop-agent、stefwoo），其中 stefwoo 一人提交 2 个。整体看，项目今日无功能推进（合并数为 0），维护者评审压力积压为 3 个开放修复，活跃度评估为**中低**。

## 2. 版本发布

今日无新版本发布，该项省略。

## 3. 项目进展

今日无合并或关闭的 PR，项目在可验证的合并维度上**未向前推进**。需注意：#1090、#1089、#1088 三个修复 PR 均于今日创建并处于 OPEN 状态，实际进展取决于后续评审与合并。

## 4. 社区热点

今日不具备"讨论活跃"的客观条件：3 个 PR 的评论数在数据中均标注为 undefined，点赞数均为 0，Issues 更新为 0。相对而言，以下两个 PR 覆盖面更广、更值得优先关注：

- **PR #1089** `fix(http): route socks5 proxies through curl instead of silently ignoring them`（stefwoo）
  https://github.com/nullclaw/nullclaw/pull/1089
  涉及配置声明与实际行为不一致（`config_types.zig` 与文档宣称支持 `socks5://`，但 HTTP 层从未实现，代理被静默忽略），影响面覆盖所有依赖代理的用户。
- **PR #1088** `fix(channels): keep restart budget when a restart is launched (hot restart loop)`（stefwoo）
  https://github.com/nullclaw/nullclaw/pull/1088
  涉及 `ChannelManager.supervisionLoop()` 中的热重启循环问题。

背后诉求：从 PR 内容看，社区关注点集中在**配置承诺与实际实现的一致性**和**守护/监督机制的边界正确性**，而非新功能。

## 5. Bug 与稳定性

按潜在影响排列（均已有对应 fix PR，尚未合并）：

| 严重程度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 高 | 通道热重启循环：`supervisionLoop()` 在重启"已启动"后即调用 `recordSuccess()` 重置 `restart_count`，使重启预算失效 | fix PR #1088 待合并 | https://github.com/nullclaw/nullclaw/pull/1088 |
| 中高 | socks5 代理被静默忽略：配置与文档宣称支持，HTTP 层未实现，用户代理流量未经预期路径 | fix PR #1089 待合并 | https://github.com/nullclaw/nullclaw/pull/1089 |
| 中 | 调度器投递替换在分配失败时可能留下 teardown 持有已释放内存（内存安全类） | fix PR #1090 待合并 | https://github.com/nullclaw/nullclaw/pull/1090 |

## 6. 功能请求与路线图信号

今日数据中**无用户提出的新功能请求**（Issues 更新为 0）。三个 PR 均为修复而非新功能。可提取的路线图信号仅为间接性质：若 #1089 合并，`socks5://` 代理将从"声明支持"变为"实际支持"，可视为对既有文档承诺的兑现；无法据此判断其他功能是否纳入下一版本。

## 7. 用户反馈摘要

今日无 Issues 评论，无法从评论中提炼用户痛点、使用场景或满意度。可用于推断的信息仅来自 PR 描述本身：

- PR #1089 指出文档与配置声明了未实现的能力，属于**用户可感知的"沉默失败"型体验问题**；
- PR #1088 指向监督机制的重复重启行为，属于运维稳定性痛点；
- PR #1090 属防御性内存安全改进，非直接用户反馈。

## 8. 待处理积压

由于缺乏历史数据，无法判定"长期未响应"项。当前明确需要维护者评审的开放项为 3 个：

- PR #1088 https://github.com/nullclaw/nullclaw/pull/1088
- PR #1089 https://github.com/nullclaw/nullclaw/pull/1089
- PR #1090 https://github.com/nullclaw/nullclaw/pull/1090

**维护者提示**：今日合并数为 0 而新开修复 PR 为 3，开放修复队列呈净增长。其中 #1088（重启循环）与 #1089（代理静默忽略）影响面较大，建议优先评审；#1090 涉及内存安全，亦不应长期挂起。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-11-02

## 1. 今日速览

过去 24 小时 IronClaw 无 Issues 活动、无 PR 合并或关闭、无新版本发布，唯一动态是 5 个既有 PR 的更新时间戳刷新。5 个开放 PR 全部为 dependabot 自动生成的依赖升级，其中 4 个涉及 Rust 依赖、1 个涉及 GitHub Actions。今日无任何可归因于人类贡献者的功能推进或缺陷修复，项目处于“维护性活跃、功能性静止”状态。需注意多个依赖 PR 已挂起数周至两个多月（最早为 2026-08-23），积压风险持续累积。

## 2. 版本发布

今日无新版本发布（数据中 Releases 为空），本节省略。

## 3. 项目进展

今日无合并或关闭的 PR，项目功能层面无实质推进。

## 4. 社区热点

今日无 Issues 讨论；5 个开放 PR 的评论数均为 `undefined`（数据缺失），👍 均为 0，无可见互动。以下为更新最频繁的依赖 PR：

- **PR #8160** — `everything-else` 组 43 项更新（Rust），创建于 2026-10-25，更新于 2026-11-01
  https://github.com/nearai/ironclaw/pull/8160
  含 `thiserror` 2.0.20→2.0.21、`uuid` 1.24.0→… 等，更新面最广。
- **PR #8159** — `actions` 组 11 项更新（GitHub Actions），创建于 2026-10-25
  https://github.com/nearai/ironclaw/pull/8159
  含 `anthropics/claude-code-action` 1.0.183→1.0.259、`actions/setup-python` 等。其中 `claude-code-action` 跨度较大（1.0.183 → 1.0.259），值得关注 CI 行为是否变化。

分析：当前“热点”实为自动依赖维护，反映项目依赖更新节奏由 bot 驱动，而非社区讨论驱动。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

稳定性相关的前瞻性关注点（基于依赖 PR，非已确认缺陷）：
- **PR #7834**（`wasm` 组 4 项更新，涉及 `wasmtime`、`wasmtime-wasi`、`wit-component`）标注标签为 `size: L`、`risk: medium`、`scope: dependencies`、`contributor: experienced`，是今日 5 个 PR 中唯一被显式标记风险等级的。若 IronClaw 的 WASM 沙箱/插件执行依赖该栈，合并前应重点回归。
  https://github.com/nearai/ironclaw/pull/7834
- 其余 4 个 PR 均为常规版本号提升，摘要中未见破坏性变更说明。

目前无对应 fix PR 的缺陷项（不适用）。

## 6. 功能请求与路线图信号

今日无用户提出的功能请求或 Issue。

从 PR 可读出的维护方向信号（均为推断，非官方路线图）：依赖分组显示项目同时维护 Rust 运行时（`tokio-ecosystem`、`wasm`）、序列化（`serde_json`）与 CI 工具链（GitHub Actions，含 `claude-code-action`），说明项目在 Rust 服务端 + WASM 扩展 + AI 编码代理 CI 三方向并行演进。由于无合并记录，无法判断哪些会进入下一版本。

## 7. 用户反馈摘要

今日无 Issues 评论，无法提炼用户痛点、使用场景或满意度反馈。数据中的评论字段为 `undefined`，亦不可用于统计。

## 8. 待处理积压

以下开放 PR 长期未合并，建议维护者评估：

| PR | 主题 | 创建日 | 已挂起 | 风险标注 |
| --- | --- | --- | --- | --- |
| #7834 | wasm 组 4 项更新 | 2026-08-23 | 约 71 天 | `size: L`, `risk: medium` |
| #8140 | serde_json 1.0.151→1.0.154 | 2026-10-18 | 约 15 天 | 无 |
| #8141 | tokio-ecosystem 组 5 项更新 | 2026-10-18 | 约 15 天 | 无 |
| #8159 | actions 组 11 项更新 | 2026-10-25 | 约 8 天 | 无 |
| #8160 | everything-else 组 43 项更新 | 2026-10-25 | 约 8 天 | 无 |

- #7834：https://github.com/nearai/ironclaw/pull/7834
- #8140：https://github.com/nearai/ironclaw/pull/8140
- #8141：https://github.com/nearai/ironclaw/pull/8141

**健康度提示**：单个依赖 PR 积压超两个月且带 `risk: medium` 标签，加上 43 项与 11 项的批量更新长期未合并，可能导致后续升级冲突面扩大、安全补丁延迟落地。建议优先处理 #7834 与 #8160，或对无法合入的分组拆分处理。

---
*说明：以上内容仅基于所提供的 GitHub 数据；评论数、严格的时间跨度天数按 2026-11-02 与创建日推算，摘要中被截断的版本号未作补全。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-11-02）

## 1. 今日速览

今日项目活跃度**中等偏高**，但结构上明显偏向依赖维护：24 条 PR 更新中有 9 条待合并、15 条已合并/关闭，其中大量为 Dependabot 批量依赖升级，核心代码改动集中在 `web-search` 打包修复、`sessions_spawn` 子智能体模型约束、安装包瘦身与模型流断线重连四项。Issues 侧仅有 1 条账号申诉类工单，无新功能讨论。今日无新版本发布。需注意：多条 10 月 13 日创建的依赖 PR 今日被关闭，同时同日又重建了指向相同目标版本的 PR，属积压清理而非功能推进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日关闭/合并的 PR 推动了三类实质修复：

- **子智能体模型失控修复**：#2975 修复 OpenClaw v2026.8.1 中 `sessions_spawn` 接受 LLM 任意传入的 `model` 参数，导致子智能体跑在昂贵模型（如 Kimi）而非主智能体模型上的问题。直接关系用户成本。
- **安装包瘦身**：#2976 移除 renderer 与主进程 source map、tsc 产物及未使用运行时文件，减小安装包体积且不改变依赖与运行行为。
- **模型流断线重连**：#2974 针对用户反复遇到的 `⚠️ Agent couldn't generate a response`（部分工具动作可能已执行）以及回合首次调用的"模型响应超时"问题，统一处理回复中途断流的模型流。

另有 `web-search` 打包后反复判定"dist outdated"、启动时执行注定失败的 `npm install` + `npm run build` 的修复仍处于开放状态（#2977），尚未合入。

链接：#2975、#2976、#2974、#2977

## 4. 社区热点

今日所有 Issues/PRs 的评论数与点赞数均为 0 或未提供，**无实质讨论热点**。相对最受关注的是唯一一条开放 Issue：

- #2940 [OPEN] [申诉] 账号被禁用，申请解封 —— 创建于 2026-10-25，今日更新，1 条评论。

背后诉求：用户将内置模型接口通过本地反向代理在自己的本地工具中调用，推测触发风控被封号；用户强调为个人本地用途、无商业化、未对外提供服务，并称已完成整改。这反映出**本地开发者对"内置模型接口可复用性"的强需求**，与当前风控策略之间存在张力，建议官方明确接口使用的合规边界。

链接：Issue #2940

## 5. Bug 与稳定性

按严重程度排列（均基于 PR 描述的已报告问题）：

1. **高｜模型回复中途断流**：用户看到 `⚠️ Agent couldn't generate a response. Note: some tool actions may have already been executed`，首次调用时表现为"模型响应超时"；日志显示原因一致。**已有 fix PR #2974（今日已关闭/合并）**。
2. **中｜子智能体使用错误（昂贵）模型**：`sessions_spawn` 允许 LLM 显式指定任意模型。**已有 fix PR #2975（今日已关闭/合并）**。
3. **中｜打包版 web-search 技能不可用**：每次复制都被判定 dist 过期，启动执行在打包副本中不可能成功的构建步骤，影响 Web Search 桥接服务。**fix PR #2977 仍开放待合并**。

## 6. 功能请求与路线图信号

今日 Issues 中**无明确的新功能请求**。#2940 属账号申诉，不构成功能需求，但隐含"内置模型接口本地复用/反代使用"的合规化诉求，是否转化为正式能力（如个人 API 访问策略）需维护者判断。

依赖侧信号：#2973、#2972、#2971、#2970、#2969 将 Univer 系列组件 1.0.2 → 1.3.1（跨多个次版本）、KaTeX → 0.19.1、mermaid → 12.2.0 的升级重新提为开放 PR，暗示下一版本可能包含一轮较大的前端渲染/表格依赖升级，需关注 1.0.x → 1.3.x 的兼容性验证。

## 7. 用户反馈摘要

- **痛点**：桌面客户端登录直接提示"账号已被禁用"，无法进入应用（#2940）。
- **使用场景**：用户将 LobsterAI 内置模型接口经本地反向代理，在自己常用的本地工具中调用模型——说明存在"把 LobsterAI 当作模型入口"的真实用法。
- **不满意**：用户认为本地个人用途被封禁缺乏事先说明，需通过公开申诉渠道解决，且申诉处理周期较长（10-25 提出，11-02 仍在更新）。
- **稳定性反馈**：多起"Agent 无法生成响应"与"模型响应超时"，且伴随工具动作可能已执行的副作用，影响任务可信度（见 #2974 描述）。

## 8. 待处理积压

- **#2977 [OPEN]** web-search 打包修复，今日新建，直接决定打包版 Web Search 是否可用，建议优先合入。
- **#2852 [OPEN]** electron 组依赖升级（electron + electron-builder），创建于 2026-10-13，已逾两周未合并。
- **依赖 PR 重复提交现象**：10-13 创建的 #2856/#2855/#2854/#2853/#2858 今日关闭，同日又以 #2973/#2972/#2971/#2970/#2969 重新提交相同目标版本，说明 Dependabot 配置或合并流程存在低效，建议维护者梳理依赖更新策略，避免重复噪声。
- **#2940 [OPEN]** 账号申诉已挂起 8 天，缺乏公开处理结论，建议给出风控规则说明或申诉 SLA。

链接：#2977、#2852、#2973、#2972、#2971、#2970、#2969、#2940

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

# CoPaw 项目日报 · 2026-11-02

> 数据来源：CoPaw（github.com/agentscope-ai/CoPaw）当日 GitHub Issues / PR / Release 快照。注：提供的 Release 与部分 Issue/PR 链接指向 `agentscope-ai/QwenPaw` 仓库，以下按原始数据保留链接归属，不作推断。

---

## 1. 今日速览

- 项目保持**高活跃**：24 小时内 Issues 更新 23 条（新开/活跃 12、关闭 11），PR 更新 46 条（待合并 31、合并/关闭 15），并发布 1 个 beta 版本。
- 关闭量（Issues 11 / PR 15）与新增量接近，说明维护者**在持续清理积压**，但待合并 PR 达 31 条，审查队列压力明显。
- 今日修复焦点集中在**控制台可用性、SQLite 启动迁移、模型配置校验、上下文/记忆可靠性**。
- 最热讨论仍是多租户版 Hub 的路线图征询（#7318，36 条评论），社区对"团队化使用"的诉求持续高涨。
- 稳定性方面出现若干高质量回归/边界 Bug 报告（受限环境启动崩溃、配置写入绕过校验），多数已有对应 fix PR。

---

## 2. 版本发布

### v2.3.0-beta.2

提供的更新摘要包含以下变更（原文信息有限，仅列出可见项）：

- `fix(console)`：将 agent 技能选择限制在创建阶段 — PR #8448
- `fix(console)`：紧凑化媒体预览错误卡片 — PR #8451
- `fix(console)`：浏览器可用性修复（摘要被截断，完整内容未提供）

**破坏性变更 / 迁移注意事项**：所提供的 Release 文本中**未包含**破坏性变更或迁移说明，无法据此判断。但需注意关联 Issue 反映的 beta 版本行为变化：

- **#8515**：v2.3.0b2 在受限环境（fnOS 应用沙箱）中 import 阶段即崩溃，`dependency_maintenance.state_root()` 优先按 pwd home 推导、绕过 `$HOME`，且 `QWENPAW_DEPENDENCY_STATE_DIR` 未文档化 — 部署于非标准 home / 容器 / NAS 的用户建议暂缓升级。
- **#8538**：2.3.0b2 中 Matrix 渠道转为官方插件 `matrix-0.1.0.dev0`，多工作区同时启用时仅第一个能被激活 — 多工作区用户需留意。

---

## 3. 项目进展

今日合并/关闭的重要 PR：

| PR | 类型 | 内容 |
|---|---|---|
| [#8545](https://github.com/agentscope-ai/QwenPaw/pull/8545) | size/XXL | 修复设置搜索的导航与索引：此前设置项搜不到、跳错标签页、抽屉/弹窗内字段无法定位 |
| [#8541](https://github.com/agentscope-ai/QwenPaw/pull/8541) | size/XXL | SQLite 跳过已完成的启动迁移并快照在线备份；将 scroll 历史同步迁移移入各工作区初始化，解决启动被阻塞的问题（对应 Issue #8540） |
| [#8536](https://github.com/agentscope-ai/QwenPaw/pull/8536) | size/S | 未配置时默认使用 AnySearch 作为 `web_search` 提供方，并统一运行时回退、内置配置元数据与 Console 初始选择 |
| [#8400](https://github.com/agentscope-ai/QwenPaw/pull/8400) | size/S | 修复 `make-skill` 被项目自身技能安全扫描器误判为危险代码执行的问题 |

**推进评估**：两项 size/XXL 的控制台与启动路径修复同日关闭，直接改善"启动慢/设置找不到"这类高频体验问题；默认搜索提供方的切换降低了新用户配置门槛。整体属于**体验与可靠性打磨型推进**，而非大功能落地。大型社区功能 PR #7903（size/XXXL）仍在待合并队列中，尚未进入主线。

---

## 4. 社区热点

1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)（OPEN，36 评论，👍4）— QwenPaw Hub 多租户版下一步做什么**
   作者 rayrayraykk。背景是 CoPaw 起家于个人 AI 助手，但社区反复要求团队化运行方式，Hub 是首个回应（关联社区请求 #2324 多用户访问与管理）。**诉求**：社区希望参与路线图决策，多用户/权限管理是核心期待。这是今日唯一的"产品方向级"讨论。

2. **[#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126)（CLOSED，7 评论）— 技能池下载改为可取消的后台任务**
   接续 #8055 的评审：`POST /pool/download` 仍是同步请求，即使拷贝已移入工作线程，请求本身仍会阻塞。**诉求**：长耗时操作需要进度反馈与显式取消。

3. **[#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)（CLOSED，6 评论）— Daily Paper 在 arxiv.org 不可达时静默失败**
   报错信息"completed with no returned content"掩盖了真实原因，且缺少代理/端点配置。**诉求**：错误信息必须暴露根因，网络受限环境需可配置。

4. **[#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222)（CLOSED，5 评论）— 后端内存运行期无界增长至 20.7GB**
   连续运行约 2 天后内存从数百 MB 涨至 20.7GB，作者特别区分于启动期 ReMe 泄漏。**诉求**：长驻进程的资源稳定性。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515) | v2.3.0b2 在受限环境（fnOS 沙箱）**import 阶段即崩溃**，无法启动；state_root 绕过 `$HOME`，覆盖变量未文档化 | ✅ [#8527](https://github.com/agentscope-ai/QwenPaw/pull/8527)（启动时报告 `DEPENDENCY_STATE_ROOT_UNAVAILABLE`） |
| 🔴 高 | [#8549](https://github.com/agentscope-ai/QwenPaw/issues/8549) | 模型配置写入路径**绕过字段校验**，越界 `thinking_budget` / `max_input_length` 被持久化，重启后 provider 静默消失 | ✅ [#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)（首次贡献者） |
| 🟠 中高 | [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500)（OPEN） | Auto-Dream 在 extract 解析失败时**静默丢弃整日记忆**，仍 checkpoint 导致永不重试，且报告 `success=True` | 未见 |
| 🟠 中高 | [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966)（OPEN） | 切换 provider 后会话永久损坏：历史中的 `file://` 媒体 URL 触发 `invalid_parameter_error` | 未见 |
| 🟠 中高 | [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538)（OPEN） | 多工作区启用 Matrix 插件时仅首个能在 10s 共享启动窗口内激活 | 未见 |
| 🟡 中 | [#8547](https://github.com/agentscope-ai/QwenPaw/issues/8547)（OPEN） | 唯一内置灵感示例 `cat-perspective-0803` 在 Windows 上仍无法打开，为 #7291 的**回归**（后者曾以 1.1.2 修复关闭） | 未见 |
| 🟡 中 | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521)（OPEN） | 对话经常只显示思考无答复内容；Ctrl+C 复制需多次才成功（Chrome/Edge 均现）；新版 UI 反应迟缓 | 未见 |
| 🟡 中 | [#8534](https://github.com/agentscope-ai/QwenPaw/issues/8534)（OPEN） | Creator 的 TTS 无法使用阿里云 Token Plan key，qwen-audio-tts 属不同 DashScope 服务，模型配置 UI 缺协议选项 | 未见 |
| 🟢 已关闭 | [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) | 钉钉 sessionWebhook 过期后最终回复静默丢失（errcode=300001），缺 Open API 回退 | 已关闭 |
| 🟢 已关闭 | [#8540](https://github.com/agentscope-ai/QwenPaw/issues/8540) | Scroll 历史同步阻塞启动并重复扫描已完成的迁移 | ✅ #8541 |
| 🟢 已关闭 | [#7222](https://github.com/agentscope-ai/QwenPaw/issues/7222) | 后端长时运行内存增长至 20.7GB | 已关闭 |

**共性观察**：多个 Bug 属于**静默失败**模式（#7715、#8500、#8343、#8549）——失败不报错、状态照常推进，对用户排障极不友好。建议维护者在错误可观测性上做系统性改进。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 相关 PR / 落地可能性 |
|---|---|---|
| 团队/多租户运行方式 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 官方征询中，社区参与度高，是明确的下一阶段主线 |
| 技能池下载可取消 + 进度 | [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | 已关闭，接续 #8055，预计定稿 |
| 嵌套（分类）技能目录 | — | ✅ 已有 PR [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)（size/XXL，待合并），对齐其他 agent 的 `<root>/<category>/<skill>/SKILL.md` 布局 |
| QQ 渠道流式消息 | — | ✅ 已有 PR [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409)（size/L，Under Review），参照飞书插件实现 |
| 过期日记笔记转为去重 Inbox 提醒 | [#8537](https://github.com/agentscope-ai/QwenPaw/issues/8537) | 新开，明确声明不重复 #4652 / ReMe#393，属残余缺口 |
| 默认搜索提供方 | — | ✅ #8536 已关闭，AnySearch 成为默认 |
| 旧版 UI 切换按钮 | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 用户明确提出，暂无 PR |

**判断**：技能目录分类化（#8178）、QQ 流式（#8409）与社区/Inbox 整合（#7903）是下一版本最可能进入主线的三项功能；#8537 的 Inbox 提醒与 #7903 的 inbox 集成分属不同层次，可能被统一设计。

---

## 7. 用户反馈摘要

**痛点**

- **静默失败最伤排障**：Daily Paper 报"无内容"却隐藏真实原因（#7715）；Auto-Dream 丢记忆仍报成功（#8500）；钉钉回复过期直接消失（#8343）；配置越界导致 provider 重启后"人间蒸发"（#8549）。
- **启动与响应速度**：仅启用 console 渠道启动仍需 30–45 秒，根因是无条件 import 全部 18 个渠道模块，`lark_oapi` 单包约 18.5 秒（#7367，已关闭）；#8521 用户反映新版 UI 操作迟缓、不如旧版高效。
- **中文 Windows 环境细节**：GBK/CP936 文件解码与 CRLF 行尾保留问题影响大量 `.txt/.csv/.md` 笔记（PR #8234、#8235），说明该用户群体规模可观。
- **部署环境多样性被低估**：NAS 沙箱（#8515）、ARM64 Windows（#7966）、受限 POSIX（#8527）均出现启动级故障。

**使用场景**

- 个人 AI 助手起家 → 向**团队/多用户**演进（#7318）。
- NAS 长期驻留运行（#8515、#7222 的 2 天连续运行场景）。
- 中文办公文档与笔记的读写（#8234/#8235）。
- 钉钉、Matrix、QQ 等多渠道接入。

**满意度信号**

- 用户愿意提交带环境表格、版本号、复现步骤与根因定位的高质量报告，并主动区分"与 #9 不同"、"非 #4652 重复"，说明**核心社区参与度高、对项目有信任基础**。
- 但多次出现"旧问题回归"（#8547 是 #7291 的回归），以及"被答复'ReMe v4 覆盖'"后仍存残余缺口（#8537），提示回归测试与需求关闭标准需要更严格。

---

## 8. 待处理积压

| 项目 | 状态 | 说明 |
|---|---|---|
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) feat(community): 集成社区与 inbox | OPEN，size/XXXL，`ready-for-human-review`，创建于 2026-09-20 | 已等待**约 6 周**的人工评审，涉及嵌入式社区流、资源来源追踪、Platform PKCE 认证，是最大体量的待合 PR |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) 嵌套技能目录 | OPEN，size/XXL，Under Review，创建于 2026-10-11 | 等待约 3 周，功能价值明确 |
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) / [#8235](https://github.com/agentscope-ai/QwenPaw/pull/8235) / [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) GBK 解码 / CRLF / Ollama 上下文 | OPEN，Under Review，创建于 2026-10-14 | 同一贡献者三项修复均停留约 3 周，全部是中文用户高频场景 |
| [#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018) 不在卷根写 sandbox ACE | OPEN，size/L，创建于 2026-09-29 | Windows 安全相关，超 1 个月未合 |
| [#8048](https://github.com/agentscope-ai/QwenPaw/pull/8048) 拦截内联 Office COM 自动化 | OPEN，size/S，创建于 2026-09-30 | **安全类**（auto 审批 + 关闭沙箱时可执行 Office COM），超 1 个月未合，建议优先处理 |
| [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500) Auto-Dream 丢记忆 | OPEN，4 评论 | 数据丢失级别，暂无 fix PR |
| [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) 会话永久损坏 | OPEN，4 评论 | 用户侧不可恢复，暂无 fix PR |

**维护者建议**：待合并 PR 达 31 条，其中 5 条以上已等待 3–6 周。建议优先清理 (a) 安全类 #8048，(b) 数据/会话损坏类 #8500、#7966 的 fix，(c) 同作者成组的 #8234/#8235/#8236 批量评审以降低往返成本。同时 #8547 的回归表明需为"曾以修复关闭"的 Issue 建立回归用例。

---

*本报告仅基于所提供的 GitHub 数据生成，未对未提供信息作任何推断。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-02

## 1. 今日速览

今日项目处于高活跃、零合入的“输入积压”状态：过去 24 小时共 49 条 Issue 更新、50 条 PR 更新，但**合并/关闭数为 0，新版本发布为 0**，且无任何 Issue 被关闭。这意味着 PR 队列已累积 50 条待合并，其中多条为 XL 尺寸、`risk:high` 的跨模块改动（如 #11921 会话事件历史、#11847 XMPP 通道），合并压力显著。热度集中在安全类 Bug（身份/鉴权、跨模块路径处理），由同一作者集中提交了多条 S0/S1 级别报告。整体社区参与积极，但维护端吞吐不足，项目健康度在“活跃度”上表现良好、“交付节奏”上需警惕。

## 2. 版本发布

今日无新版本发布，故省略。需注意 #11580 已挂上 `release:v0.9.0` 标签，讨论 x86_64 Linux 二进制体积已逼近 64 MiB 硬上限（仅余约 0.7 MB，约 1%），这是下次发布前的实际阻塞点。

## 3. 项目进展

今日**无 PR 被合并或关闭**，无 Issue 被关闭，项目当日净推进为 0。以下待合并 PR 若落地将实质推进功能，供维护者排优先级参考：

- #11921 `feat(session)` 实现仅追加的会话事件历史 — 以版本化、仅追加的事件作为对话与执行历史的权威来源，支持回放重建状态而不重复外部副作用。XL 尺寸、`risk:high`，影响面覆盖几乎所有模块。
- #11847 `feat(channels)` 原生 Rust XMPP（可选 legacy OMEMO）— XL 尺寸，需处理已完成收件条目的恢复与确定性 pre-turn 丢弃。
- #12157 `fix(oidc)` 将 OIDC 注册回调绑定到发起浏览器 — 直接对应今日 Issue #12050 的登录 CSRF 问题。
- #12200 `fix(deps)` 将 pulldown-cmark 升级至 0.13.6 以修复 RUSTSEC-2026-0433；该安全公告于 2026-11-02 进入 RustSec 库，当前 `Security` CI 任务在所有构建上失败，**属高优先级 CI 阻塞**。
- #12195 `fix(runtime)` 在原生 shell 无法解析时正确报告“无 shell”（针对 distroless 镜像误报 POSIX shell 能力）。

## 4. 社区热点

- **#8132**（12 评论，👍1）评估 Rust/WASM Web UI 原型，再决定是否从 React/Vite 迁移。这是从 #7674 拆出的子任务，目标是用 Dioxus/Leptos/Yew 替代 React SPA + Vite 管线。诉求：摆脱 Node.js 构建/运行时依赖，与项目“Rust 优先”定位一致；但 `risk:high`、`needs-author-action`，讨论周期自 2026-06-22 已逾四月仍未收敛。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)
- **#10926**（7 评论）Matrix `send_via` 将 peer 用户身份误当作房间目标。渠道路由语义与实际目标模型不一致。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)
- **#9779**（6 评论，`priority:p1`）`[sop] sops_dir` 文档声称有默认值，但两条 daemon 启动路径都以 `sops_dir.is_some()` 作为开关，导致依赖默认值的运维者 SOP 引擎**静默不加载**。典型的“文档与实现漂移”问题。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)
- **#11580**（4 评论）发布体积门禁策略，牵动 `release:v0.9.0`。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11580)

诉求共性：**配置语义一致性与发布可预测性**是当前社区最关心的两条主线，而非单纯新功能。

## 5. Bug 与稳定性

按严重程度排列（数据中未出现 S0）：

**S1 — 工作流阻塞**
- **#12187** 渠道缓存轮次归一化将 `role=user` 并入 `role=tool` 信封，在严格 provider 上**永久污染会话**。今日新报（2026-11-02，2 评论）。未见 fix PR。
- **#12126** 六个渠道的外发附件标记在工作区校验前先做路径规范化；Windows 下 UNC 目标会使 daemon 向攻击者 SMB/WebDAV 认证，**泄露凭据**（作者称多用户 bot 场景可辩护为 S0）。见疑似相关修复方向 #12127 同源议题。未见明确 fix PR。

**S2 — 功能降级**
- **#10926** Matrix 身份/目标混淆（见上）。未见 fix PR。
- **#10924** 运行时命令回执（如 `/stop` 确认）错误进入会话语音路由。未见 fix PR。
- **#12104** OpenAI Responses 将带图像附件的原生工具结果序列化为纯文本 `function_call_output`，**丢弃图像**。未见 fix PR。
- **#12127** `git_operations` 在授权前 stat/规范化 `gitdir:`、`commondir`、alternates 与 config 路径；Windows 下 UNC 指针可使 daemon 认证至远程服务器。未见 fix PR。

**S3 — 次要/成本类**
- **#11703** 通过 `tool_search` 激活延迟工具会改写系统提示，**击穿 prompt cache**（仅 `mcp.deferred_loading = true` 时）。未见 fix PR。
- **#12087** Web 仪表盘工具开关自动保存与保存按钮状态冲突。未见 fix PR。

**安全类（网关/身份）**
- **#12052** 限流器取 `X-Forwarded-For` 首项，追加式代理后客户端可伪造成环回豁免。
- **#12050** OIDC 回调令牌页无浏览器绑定，存在登录 CSRF。（对应 fix PR #12157）
- **#12053** `/api/docs` 从公共 CDN 加载未固定版本、无完整性校验的脚本，且与仪表盘同源。
- **#9883**（`priority:p1`）入站 WebP 在共享图像校验器运行前**无界解码**。

**小结**：当日报告的安全问题中，#12050 已有对应 PR，其余均**无 fix PR**；#12126 与 #12127 为同一类“先规范化后鉴权”的 Windows UNC 风险，建议合并为一条主题修复。

## 6. 功能请求与路线图信号

- **#12183** 运行时提示注入与命令拦截：允许在 agent 运行中注入 prompt/拦截命令，解决“无法干预进行中运行”的空白。**与阻塞中的 #10893**（把生成中到达的消息接入已测试但无生产者的 steering 管线）方向一致，二者合流后较可能进入下一版本。
- **#12181** Web 端受管文档上传（#9488 Phase 2 Web 切片）：文档存于 `<data_dir>/attachments`，以不透明 `FileId` 经 `RuntimeIngress` 引用，默认关闭。**与跟踪器 #11013**（统一文件摄入/解析/投递）同源，推进路径清晰。
- **#10893** 消息中途 steer 当前轮次，当前 `status:blocked`，属已接受但受阻的架构项。

判断：与 #9488 文件模型相关的一批工作（#11013、#12181）信号最强；steering 相关（#10893、#12183）依赖阻塞解除。

## 7. 用户反馈摘要

- **配置默认值不能兑现**（#9779）：运维者依文档依赖默认值，结果 SOP 静默不加载——**文档可信度**是真实痛点，且 `priority:p1` 已接受四周（创建 2026-08-06）仍无 fix。
- **群聊语音场景摩擦**（#12201/#12198/#12197）：语音消息几乎不会带 `@bot`，在 `mention_only = true` 群组中被 `check_media_mention_gate` 丢弃；且 agent 未配置 `transcription_provider` 时转写直接失败，无全局兜底。反映 Telegram 群组是真实主用场景。
- **Telegram 限流处理不当**（#11651）：429 被当作格式错误立即重试（markdown→plain 双发），说明生产端已真实遇到降级。
- **权限与预算未闭环**（#12167）：`readonly` agent 仍可通过 `send_message_to_peer` 启动其他 agent 轮次，绕开自治等级与动作预算——多 agent 场景下的信任边界诉求。
- 积极信号：#9883 明确标注为 #9819 多模态规范化的有意拆分，说明安全硬化在系统性推进而非零散补丁。

## 8. 待处理积压

- **#9779**（创建 2026-08-06，`priority:p1`，`status:accepted`）：文档与实现不一致导致 SOP 静默失效，已接受近三个月无修复，建议优先排期。
- **#8132**（创建 2026-06-22，`needs-author-action`）：Rust/WASM Web UI 评估悬置四月，`risk:high`，需明确决策日期或关闭。
- **#11580**（创建 2026-10-06，`release:v0.9.0`）：发布体积门禁策略未定，直接关系下一版能否出包。
- **#11847 / #11651 / #11601**（PR 均标 `needs-author-action`）：XMPP 与 Telegram 相关大改动等待作者响应，长期挂起会持续占用评审注意力。
- **#11921**（XL，`risk:high`，创建 2026-10-21）：会话事件历史是结构性改动，建议拆分为可独立审阅的批次以降低合并风险。

---
*数据来源：ZeroClaw GitHub 仓库过去 24 小时事件（49 Issues / 50 PRs，0 合并，0 发布）。本报告仅基于所提供数据，未做外部推断。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*