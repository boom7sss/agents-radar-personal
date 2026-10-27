# OpenClaw 生态日报 2026-07-31

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-31 03:32 UTC

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

# OpenClaw 项目动态日报 — 2026-07-31

## 今日速览
过去 24 小时项目活跃度极高：**500 条 Issue 更新**（新开/活跃 473，关闭 27）与 **500 条 PR 更新**（待合并 406，合并/关闭 94）同步上升，维护者评审（`needs-maintainer-review`）与修复 PR（`linked-pr-open`）标记大量出现，说明社区反馈仍然集中在 **消息丢失/路由错误、内存泄漏、多智能体编排稳定性** 等核心可靠性问题上。已关闭的 `#39248`（sandbox non-main 模式导致子代理初始化失败）为 3 月积压问题画上句号，但暂无新版本发布。整体判断：**开发与维护处于高强度运转状态，可靠性/稳定性是当前主线。**

## 版本发布
无新版本发布（Releases: 0）。

## 项目进展
今日有 94 条 PR 被合并/关闭，**重点推进了以下方向**：

- **会话路由与别名修复**：[PR #116636](https://github.com/openclaw/openclaw/pull/116636)（已关闭）修复了命令中显式 `main` 别名未解析到实际配置会话的问题，避免会话串线。
- **实时语音资源边界**：[PR #116493](https://github.com/openclaw/openclaw/pull/116493)（关联 #116201）修复 Google Live 实时会话关闭后残留 provider session 的隐患，防止回调污染新会话。该 PR 标记为 `merge-risk: session-state`，需重点关注。
- **渠道插件保真**：[PR #116647](https://github.com/openclaw/openclaw/pull/116647) 一次性修复 Slack 文件转发、QQBot 目标校验、Telegram 回复冲突、OpenAI 语音 URL 畸形、Google Meet 日历可见性、Matrix 授权丢失等多渠道问题，涉及面大。
- **消息投递可靠性**：[PR #116649](https://github.com/openclaw/openclaw/pull/116649)（`maintainer` 标记）针对"答复/报告/回执静默丢失"的多类场景进行修复，与社区高频 Issue #44925、#25592 等直接相关。
- **恢复流程保留修饰**：[PR #116632](https://github.com/openclaw/openclaw/pull/116632)（关联 #116556）修复 Gateway 重启后 `reply_payload_sending`/`message_sending` 钩子重复执行，避免已取消/脱敏内容被发出。

此外，代码清理与测试去重也在同步进行（#116643、#116641、#116595）。项目整体在 **"传输层可靠性 → 插件/渠道兼容性 → 代码质量"** 三个层面有明显的推进。

## 社区热点
今日讨论热度最高的议题集中在 **核心消息链路** 与 **资源泄漏**：

- [Issue #25592](https://github.com/openclaw/openclaw/issues/25592)（39 评论）：**工具调用之间的文本被泄漏到消息频道**。代理在工具调用间隙产生的错误处理、处理确认等文本被当作可见消息发给 Slack/iMessage 等端，严重影响用户体验。标记为 `impact:session-state` + `impact:security` + `needs-security-review`。
- [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)（23 评论）：**子代理完成结果静默丢失**——无重试、无通知、超时后不自动重启。用户对多智能体编排的"黑盒失败"表达了强烈焦虑，累计 👍 2。
- [Issue #91588](https://github.com/openclaw/openclaw/issues/91588)（22 评论）：**Gateway 内存泄漏（350MB → 15.5GB）**，导致 OOM 崩溃和反复重启循环。该 Issue 被标为 **P0** + `impact:crash-loop` + `clawsweeper-recovery-stuck`。

这些热点的共同诉求是：**OpenClaw 作为个人 AI 助手，其后台处理过程需要更透明的状态反馈与更强的失败恢复能力**，而不是静默出错或向用户暴露内部文本。

## Bug 与稳定性
按严重程度排列（已标注是否有对应修复 PR）：

| 级别 | Issue | 问题描述 | 修复状态 |
|---|---|---|---|
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 从 350MB 涨至 15.5GB，持续 OOM 崩溃 | 有 `linked-pr-open` 标记 |
| **P1** | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏到消息渠道 | 有 `linked-pr-open` 标记 |
| **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失，无重试/通知/重启 | 有 `linked-pr-open` 标记 |
| **P1** | [#115326](https://github.com/openclaw/openclaw/issues/115326) | crash-loop breaker 永久抑制 Discord/WhatsApp，`channels.start` 恢复失败（WebSocket 1006） | 无对应 PR，`needs-live-repro` |
| **P1** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay 产生 CPU 100% 的 `openclaw-hooks` 进程并阻塞 Gateway RPC | 无对应 PR，`needs-live-repro` |
| **P1** | [#45224](https://github.com/openclaw/openclaw/issues/45224) | Playwright CDP 断言错误未捕获，导致 Gateway 进程退出 | 无对应 PR，`needs-live-repro` |
| **P1** | [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron 任务在 LLM 持续 500 时耗尽超时窗口而非快速失败 | 无对应 PR |
| **P1** | [#45740](https://github.com/openclaw/openclaw/issues/45740) | `gh-issues` 技能将不受信任的 Issue body 直接注入子代理 prompt（安全问题） | `needs-security-review` |
| **P1** | [#46786](https://github.com/openclaw/openclaw/issues/46786) | `tools.elevated.enabled: true` 导致所有 `exec` 路由到宿主机而非 sandbox | `needs-security-review` |

**今日新增的 PR 修复覆盖**：[#116616](https://github.com/openclaw/openclaw/pull/116616)（保留 approved exec 输出，closes #41152）、[#116639](https://github.com/openclaw/openclaw/pull/116639)（Docker 自定义端口健康检查）、[#116645](https://github.com/openclaw/openclaw/pull/116645)（Synology Chat 超长消息投递）。整体看 **P0/P1 级修复仍有较多滞留**，但修复节奏已加快。

## 功能请求与路线图信号
以下功能请求具备较高热度且有 PR 或明确设计方向，可能进入下一版本：

- **多编码文件名处理**：[#48788](https://github.com/openclaw/openclaw/issues/48788)（19 评论）提出中央文件名编码工具，解决 Feishu 中文名 UTF-8/Latin-1 误读，以及 Shift-JIS/EUC-KR/GB18030 等多编码支持。
- **Private Network 访问开关**：[#39604](https://github.com/openclaw/openclaw/issues/39604)（👍 12，13 评论）请求 `tools.web.fetch.allowPrivateNetwork` 配置项，有 12 个赞，反映用户对 SSRF 安全边界与本地服务访问的矛盾需求。
- **分层 Bootstrap 加载**：[#22438](https://github.com/openclaw/openclaw/issues/22438)（17 评论）提出按层级渐进加载 bootstrap 文件，避免子代理/定时任务浪费 token。同类诉求在 #29387（14 评论，👍 5）中被进一步强化：agentDir 中的 bootstrap 文件被静默忽略。
- **重置前记忆冲刷**：[#45608](https://github.com/openclaw/openclaw/issues/45608)（👍 4，12 评论）要求 `/new`、`/reset` 前执行与 compaction 相同的记忆冲刷，避免上下文被销毁后记忆丢失。
- **Telegram Business Bot 支持**：[#20786](https://github.com/openclaw/openclaw/issues/20786)（👍 6）请求 `business_message`/`business_connection` 更新类型支持。
- **网关级成本预算**：[#42475](https://github.com/openclaw/openclaw/issues/42475)（12 评论）希望增加 per-agent 日/月成本上限。

**可能被纳入路线图的 PR 信号**：便携配置文件（[#115237](https://github.com/openclaw/openclaw/pull/115237)，关联 RFC #48/#52）、生命周期 Control UI（[#112808](https://github.com/openclaw/openclaw/pull/112808)）、Talk 空闲超时配置（[#102956](https://github.com/openclaw/openclaw/pull/102956)）、子代理 spawn 附带租约元数据（[#112589](https://github.com/openclaw/openclaw/pull/112589)）。其中 #112808/#115237 已有完整实现，预计会在后续版本合入。

## 用户反馈摘要
- **对静默失败的容忍度极低**：多个高赞 Issue 集中抱怨"无错误提示、无重试、无日志"——#44925 表示子代理失败后"零 tokens、零消息、无 transcript"；#45494 表示 cron 任务在所有 provider 500 时仍傻等 180 秒。
- **内存/可靠性问题仍在影响日常使用**：#91588 用户报告两周内 OOM 反复崩溃；#115326 用户称 Discord/WhatsApp 被"永久静音"且官方文档恢复方法失效。这类 "reliability-blocking" 问题长期未决已影响社区信任。
- **记忆管理混乱**：#43747 中用户对比了 3 人团队使用同一 OpenClaw 时，记忆存储位置、chunking/embedding 行为完全不一致（sqlite 与向量库并行），怀疑缺少统一机制。
- **对配置体验的正面期待**：#42840 请求 Control UI 支持 LaTeX（👍 10）获得高赞；#33413 希望 Slack 线程状态能显示真实工具进度而非静态 "is typing..."，说明用户对 UI 细节有持续期待。
- **既有肯定的声音**：在讨论中可见用户认可网关级修复 PR 的针对性（如 #116649 对丢失消息的批量修复），但希望"早点合并"。

## 待处理积压
以下长期开放或等待响应的 Issue/PR 需要维护者重点关注：

- **[#25592](https://github.com/openclaw/openclaw/issues/25592)**（创建于 2026-02-24，P1，39 评论）：工具调用间文本泄漏，阻塞消息渠道；7 个标签均为 `needs-*`，且 `linked-pr-open` 未更新进度。
- **[#22438](https://github.com/openclaw/openclaw/issues/22438)**（创建于 2026-02-21，17 评论）：分层 bootstrap 文件加载，长期处于 `needs-product-decision`，已有社区实现方案但未获官方回应。
- **[#20786](https://github.com/openclaw/openclaw/issues/20786)**（创建于 2026-02-19，👍 6）：Telegram Business Bot 支持，既有 `linked-pr-open` 但 PR 长期未合并。
- **[#41744](https://github.com/openclaw/openclaw/issues/41744)**（创建于 2026-03-10，P1，12 评论）：Feishu 读图工具结果丢失媒体；标记 `stale` 且 `linked-pr-open`，但问题依旧。
- **[#45224](https://github.com/openclaw/openclaw/issues/45224)**（创建于 2026-03-13，P1）：Playwright 断言错误导致 Gateway 崩溃；目前无修复 PR，且 `needs-live-repro` 停滞。
- **[#43549](https://github.com/openclaw/openclaw/issues/43549)**（创建于 2026-03-12，P2，`stale`）：Telegram 会话 JSON 损坏导致频道被卡死，状态命令未给出恢复指引——涉及用户数据可恢复性。

**等待作者响应的 PR**（`waiting on author`）：[#77877](https://github.com/openclaw/openclaw/pull/77877)（文档附件 MIME）、[#114631](https://github.com/openclaw/openclaw/pull/114631)（Custodian 聊天富交互）、[#103028](https://github.com/openclaw/openclaw/pull/103028)（agent CLI 文件/stdin 输入）、[#116616](https://github.com/openclaw/openclaw/pull/116616)（exec 输出保留）——这些修复如及时跟进可快速解除用户卡点。

> 以上数据来自 OpenClaw GitHub 仓库 2026-07-31 公开动态。链接均已附在对应条目中。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-07-31  
**覆盖范围**：13 个开源项目（2 个无活动）  
**数据来源**：各项目 GitHub 仓库 2026-07-31 公开动态

---

## 1. 生态全景

当前个人 AI 助手开源生态已从"功能验证"进入**大规模可靠性攻坚阶段**。头部项目（OpenClaw、Hermes、IronClaw、CoPaw、ZeroClaw）日 PR/Issue 更新均达 50 条上下，开发强度接近大型商业软件。共性焦点从"能做什么"转向"能不能稳定、安全、不丢消息地做"——消息静默丢失、工具调用代码泄漏、内存泄漏、webhook 未鉴权等可靠性/安全问题成为跨项目高频痛点。同时，WebUI 体验、会话/记忆架构分离、OpenAI 兼容接口、企业级多账户隔离等方向已形成明确的需求共识，生态正从"单体个人工具"向"可嵌入生产环境的智能体基础设施"演进。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 合并/关闭 PR | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（关闭 27） | 500（合并/关闭 94） | 无 | 94 | 🟢 极高活跃，可靠性主线推进，P0/P1 修复滞留但节奏加快 |
| **Hermes Agent** | 50（关闭 1） | 50（合并/关闭 4） | **v0.19.1** | 4 | 🟡 高活跃，发布基线+安全集群推进，但合并吞吐低、积压上升 |
| **IronClaw** | 40（关闭 6） | 50（合并/关闭 24） | 无（release PR 积压 28 天） | 24 | 🟢 高活跃，架构重构（WS0）启动，但存在 P0 跨用户内存泄漏 |
| **CoPaw** | 21（关闭 5） | 47（合并/关闭 21） | 无 | 21 | 🟢 高活跃，桌面端 Computer Use 落地，v2.0 性能回归待解 |
| **ZeroClaw** | 17 | 50（合并/关闭 1） | 无（v0.8.4 列车到期） | **1** | 🟡 高活跃、安全响应快，但合并吞吐极低、长线需求积压 |
| **NanoBot** | 5（关闭 1） | 42（合并/关闭 24） | 无 | 24 | 🟢 稳健迭代，WebUI 与代理执行层并进，高影响回归 #5185 尚无修复 |
| **PicoClaw** | 7（关闭 3） | 17（合并/关闭 5） | 无 | 5（4 个为 dependabot） | 🟡 中活跃，人工功能合入放缓，stale 风险上升 |
| **NanoClaw** | 2 | 15（合并/关闭 4） | 无 | 4 | 🟡 中活跃，聚焦镜像安全与供应链，新增 1 个高严重度 Bug |
| **LobsterAI** | 0 | 10（合并/关闭 7） | 无 | 7 | 🟢 稳中有进，企业级隔离落地，无新增社区反馈 |
| **Moltis** | 2 | 4（合并/关闭 1） | 无 | 1 | 🟡 中低活跃，渠道+可观测性推进，出现安全 Bug（CWE-306） |
| **ZeptoClaw** | 0 | 1 | 无 | 0 | 🟠 低活跃，1 个安全/稳定性 PR 待合并 |
| **NullClaw** | 0 | 0 | 无 | 0 | ⚪ 无活动 |
| **TinyClaw** | 0 | 0 | 无 | 0 | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

- **社区规模与活跃度断层领先**：单日 500 Issue + 500 PR 远超其余项目（第二名约 50），Issue 讨论深度（高赞追踪、安全标签体系）反映其拥有目前生态内**最庞大的用户与贡献者社区**。
- **技术路线：渠道/网关层市占率最高**：OpenClaw 的核心竞争力仍是其**多平台消息渠道适配矩阵**（Slack/QQ/Telegram/Google Meet/Matrix/Discord/WhatsApp 等）与**会话路由架构**。当日 94 个合并 PR 中大量为渠道兼容性修复，凸显其在"连接层"的深厚积累。
- **可靠性短板同样显著**：相对 IronClaw（架构治理先行）、Hermes（安全加固集群）、NanoBot（WebUI 体验），OpenClaw 的 P0/P1 级问题（15.5GB 内存泄漏、工具文本泄漏、子代理静默丢失）体量更大，反映其**功能扩张速度快于质量内建速度**。这恰是其最大风险——若 Hermes/CoPaw 等竞品在稳定性上拉开差距，用户迁移成本将因 OpenClaw 自身积累的渠道优势而被放大。
- **对生态的标杆作用**：OpenClaw 的 Issue/PR 标签体系（`needs-maintainer-review`、`impact:security`、`linked-pr-open`）、RFC 流程和社区治理模式，正被 NanoBot、ZeroClaw 等项目借鉴，事实上已成为生态的**方法论输出者**。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **静默失败不可接受** | OpenClaw（#44925 子代理结果丢失）、Hermes（#21498 配置被吞）、NanoBot（#5185 工具代码泄漏）、CoPaw（#6555 记忆丢失）、ZeroClaw（#9566 命令静默拒绝） | 用户要求任何失败必须有显式错误/重试/日志，而非无影无踪 |
| **工具调用文本泄漏** | OpenClaw（#25592，P1+安全）、NanoBot（#5185，高） | 模型在工具调用间隙产生的内部文本被当作消息发给用户/渠道，破坏信任 |
| **内存/资源泄漏** | OpenClaw（#91588，350MB→15.5GB OOM）、Hermes（#54753/#55128 无上限读取）、IronClaw（#6900 跨用户内存泄漏）、PicoClaw（#3308 goroutine 泄漏） | 长期运行稳定性是个人助手落地的基本前提 |
| **安全默认值（fail closed）** | ZeroClaw（#9565 webhook 未鉴权→fail closed）、Moltis（#1177 Vault 无认证）、ZeptoClaw（#645 子进程密钥泄露）、CoPaw（#6557 MCP 工具名违规）、OpenClaw（#45740 注入） | 安全边界从"默认开放+告警"转向"默认拒绝+显式放行" |
| **记忆与会话分离** | ZeroClaw（#9048 RFC）、CoPaw（#6555 Dream 丢失早期记忆）、Hermes（#74900 /mem 可视化）、OpenClaw（#45608 重置前冲刷） | 区分"会话历史"与"长期记忆"生命周期，防止记忆污染/丢失 |
| **WebUI/桌面体验升级** | NanoBot（Quick Chat/Temporary Chat）、Hermes（Desktop PROJECTS 标签）、CoPaw（Computer Use、桌面 Python 环境）、LobsterAI（侧边聊天 /btw）、OpenClaw（Control UI LaTeX） | 从"终端/API 工具"转向"面向普通用户的图形化产品" |
| **OpenAI 兼容接口** | ZeroClaw（#8603）、NanoBot（#4919 自定义 Bot API）、OpenClaw（生态既有） | 用户希望以 OpenAI 协议接入既有生态（Open WebUI/LobeChat/自建网关） |
| **多智能体编排可靠性** | OpenClaw（#44925）、NanoBot（#4291 子代理模型预设）、CoPaw（#6588 spawn 单任务不可用） | 子代理（spawn）的创建、上下文传递、结果回收需可观测、可重试 |
| **本地小模型/轻量模式** | ZeroClaw（#5287）、PicoClaw（<10MB RAM 定位）、CoPaw（本地 Python 环境） | 降低 prompt 膨胀、支持离线/低成本运行 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道消息中枢 + 个人 AI 助手 | 极客/开发者，多平台重度用户 | Node.js 网关 + 海量渠道插件；功能面最广但单体复杂度高 |
| **Hermes Agent** | 稳定基线 + 插件生态 + 记忆系统 | 生产环境用户、迁移用户 | Python，发布列车机制（~1000 PR/patch），依赖安全与更新链路治理 |
| **IronClaw** | 企业级多用户隔离 + 架构治理 | 企业/团队部署 | Rust，WS0 架构重构（通配符清理、契约治理），SSO/多租户 |
| **CoPaw** | 桌面端 GUI 自动化 + 记忆持久化 | 桌面端用户（Windows/macOS） | 桌面原生（Tauri）+ Computer Use 辅助；中文用户群特征明显 |
| **NanoBot** | WebUI 体验 + 会话架构 | 前端体验敏感用户 | Python + 现代 WebUI（Quick Chat、Temporary Chat）；JSONL→SQLite 迁移中 |
| **ZeroClaw** | 发布供应链安全 + webhook 多通道 | 安全敏感的自托管者 | Rust，artifact attestations 统一、fail-closed 安全默认值 |
| **PicoClaw** | 极致轻量部署 | 低资源硬件/嵌入式用户 | Go，<10MB RAM、sub-second boot、$10 硬件可跑 |
| **NanoClaw** | 镜像供应链安全 + 技能生态 | Vercel/云原生开发者 | 镜像分层优化、opencode 兼容、技能版本治理 |
| **LobsterAI** | 企业级账户隔离 + 商业化运营 | 中文企业用户 | Electron 桌面 + 多账户隔离；网易有道背景，签到/横幅等运营功能 |
| **Moltis** | 渠道稳定性 + 可观测性 | 中小团队 | Rust，Slack 消息生命周期治理、OTLP/ Langfuse 基建 |
| **ZeptoClaw** | 运行时安全加固 | 安全敏感的小型部署 | 聚焦命令执行环境的密钥隔离与进程树回收 |

---

## 6. 社区热度与成熟度

**第一梯队：高强度迭代期**（日 PR ≥ 40，功能与修复并进）
- **OpenClaw** — 生态最活跃，但处于"功能扩张 vs 可靠性"的拉锯期
- **Hermes Agent** — 以发布列车+安全集群为特征，处于**质量巩固期**
- **IronClaw** — 高活跃且架构治理最强，处于**重构筑基期**
- **CoPaw** — 高活跃，桌面端差异化已成型，处于**平台扩展期**
- **ZeroClaw** — 活跃度高、安全响应快，但合并吞吐低，处于**维护收尾+积压清理期**

**第二梯队：稳健迭代期**（日 PR 10-42，方向清晰）
- **NanoBot** — WebUI 体验领先，合入节奏健康，个别高影响回归待解
- **LobsterAI** — 合并效率高，企业功能推进，社区互动少（0 Issue）
- **PicoClaw** — 维护稳定但人工合入放缓，dependabot 噪音多
- **NanoClaw** — 供应链加固为主，功能 PR 积压超 30 天

**第三梯队：低活跃/停滞**
- **Moltis** — 渠道+可观测性推进中，社区讨论薄弱
- **ZeptoClaw** — 1 个 PR 待合并，接近维护模式
- **NullClaw / TinyClaw** — 无活动，**项目已实质停滞**

---

## 7. 值得关注的趋势信号

1. **"静默失败"成为生态头号用户信任杀手**。从 OpenClaw 的子代理结果丢失到 Hermes 的配置被吞，社区的愤怒高度一致：**"可以失败，但必须让我知道"**。智能体开发者应默认内置显式错误传播、可观测日志与自动重试，而非静默吞掉异常。

2. **安全正从"选项"变为"默认值"**。ZeroClaw 的 webhook fail-closed、ZeptoClaw 的子进程密钥清理、Moltis 的 Vault 认证缺失，一致指向"安全默认拒绝"的行业共识。**AI 智能体因模型可写命令/可调工具，其攻击面远大于传统应用，安全基线必须前置**。

3. **记忆系统与对话历史正在解耦**。ZeroClaw 的 RFC #9048、CoPaw 的 Dream 记忆丢失、Hermes 的 /mem 可视化，共同指向：**会话是短生命周期交互记录，记忆是长生命周期个人数据**。未来将出现更成熟的记忆分层、压缩、冲刷与迁移标准。

4. **WebUI 成为标配竞争力**。NanoBot 的 Quick Chat、Hermes 的 Desktop、CoPaw 的 Computer Use、OpenClaw 的 Control UI——个人 AI 助手正从"CLI/API 工具"演化为"面向普通用户的图形化产品"。**谁先做好 UI 细节（LaTeX、文件拖拽、多会话管理），谁就能触达更大用户群**。

5. **OpenAI 兼容接口成为生态互操作的事实标准**。ZeroClaw #8603、NanoBot #4919、多项目支持自定义 Bot API，反映用户强烈希望**避免被单一厂商绑定**，能用既有 OpenAI 生态工具连接任意后端。

6. **企业级多账户/多租户隔离需求涌现**。IronClaw 的跨用户内存泄漏（P0）、LobsterAI 的企业隔离、Hermes 的多 profile 越权，说明智能体正从"单用户玩具"进入"团队协作/生产环境"，**租户隔离与身份边界将成为下一轮架构竞争焦点**。

7. **本地小模型与轻量模式回归**。ZeroClaw #5287、PicoClaw 的硬件极简主义，以及多个项目对"prompt 膨胀"的抱怨，暗示**"云端大模型无所不能"的叙事正在让位于成本与隐私敏感的场景化部署**——理性使用模型资源、优雅降级将成刚需。

---

*报告完*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-07-31

## 1. 今日速览

过去 24 小时内 NanoBot 项目保持高度活跃：共 42 条 PR 更新，其中 24 条已合并/关闭、18 条待合并；Issue 侧更新 5 条（新开/活跃 4，关闭 1）。今日合并了多项关键改动，包括 WebUI 快速聊天（Quick Chat）、基于 OpenAI ARC-AGI-3 报告的 Responses API 推理状态保留、CI 全链路稳定化提速，以及 `finish_reason='length'` 空白回复误路由修复。社区反馈热点集中在 WhatsApp 音频发送失败、工具调用代码泄漏进回复以及 Termux 环境兼容性三个方向，其中 Termux 时区问题已由新提交的 PR #5189 覆盖。项目整体处于功能迭代与稳定性加固并行的高频发布前阶段，但无新版本 Release 发布。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无 Release，但合并/关闭了多个高价值 PR，项目核心能力与工程质量均有显着推进：

- **WebUI 快速聊天体验落地**
  - [#5181 feat(webui): add persistent Quick Chat](https://github.com/HKUDS/nanobot/pull/5181) — 新增常驻 Quick Chat 入口，使用独立持久 WebSocket 会话，不污染普通话题列表，并移除了该固定会话中的新建/复制/会话信息等操作。
  - [#5182 refactor(webui): reuse one sidebar selection highlight](https://github.com/HKUDS/nanobot/pull/5182) — 将侧边栏选中态统一复用，为新话题、Apps、Skills、Automations 等导航提供一致交互，并让新话题选中即时生效。

- **代理执行层改进**
  - [#5172 feat: preserve Responses reasoning state and compact context](https://github.com/HKUDS/nanobot/pull/5172) — 采用 OpenAI ARC-AGI-3 报告中点名的两项 Responses API 能力：完整保留并回放 tool calls 与用户轮次间的加密推理链；持久化压缩上下文，为复杂多轮任务提供更稳定的推理基础。

- **稳定性与 CI 工程化**
  - [#5145 fix(ci): stabilize and speed up CI](https://github.com/HKUDS/nanobot/pull/5145) — 将时序敏感的 exec-session 超时测试改为 stdin 门控握手；批量合并依赖安装为单次 pip 解析，并保留逐通道后验证与顺序回退，大幅提升 CI 稳定性与速度。
  - [#5136 fix(agent): route finish_reason='length' with blank content to length recovery](https://github.com/HKUDS/nanobot/pull/5136) — 修复模型输出预算耗尽且工具调用标签被截断时，回复被误判为空响应重试而非长度恢复的问题，对应 Issue #5133（已关闭）。

- **WebUI 新能力预览（待合并）**
  - [#5184 feat(webui): add Quick Chat and Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184) — 在已合入的 Quick Chat 基础上进一步扩展：增加内存级 Temporary Chat 会话、统一侧边栏高亮、并纳入桌面端设置导航，是 WebUI 下一轮增强的重要信号。

整体来看，项目在 WebUI、会话持久化、代理上下文管理三个方向同时迈进了实质性一步。

---

## 4. 社区热点

今日讨论热度最高的 Issue / PR：

- **[Issue #5149 [bug] no audio?（3 条评论）](https://github.com/HKUDS/nanobot/issues/5149)** — 用户反馈 NanoBot 在 WhatsApp 上能接收音频消息，但无法主动发送音频文件，FFmpeg 日志发出相关告警。评论数最多，反映真实使用中对多媒体输出能力的需求。
- **[Issue #5185 [bug] Nanobot returning tool calls code in responses（1 条评论）](https://github.com/HKUDS/nanobot/issues/5185)** — 用户反馈"突然"开始把工具调用代码以文本形式泄漏到回复中，并附上了截图。这类回归对使用信任感影响较大，容易引发社区集中反馈。
- **[PR #5184 feat(webui): add Quick Chat and Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184)** — 作为当天 WebUI 功能演进的直接延续，与已合并的 #5181/#5182 构成一个完整功能系列，内部讨论价值高，也标志着开发者对 WebUI 交互形态的持续投入。

**背后诉求分析**：多媒体消息的完整双向支持、响应纯净度（不夹杂原始工具调用）、以及更轻量快速的 WebUI 聊天入口，是目前社区用户最关心的三个体验点。

---

## 5. Bug 与稳定性

按严重程度排序如下：

| 严重程度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| **高** | [#5185 工具调用代码泄漏进回复](https://github.com/HKUDS/nanobot/issues/5185) | 无预兆地开始在回复中输出原始工具调用 JSON；影响所有模型输出质量与用户体验 | 开放，暂无 fix PR |
| **中** | [#5149 WhatsApp 无法发送音频](https://github.com/HKUDS/nanobot/issues/5149) | 接收正常，但发送音频失败，与 ffmpeg 告警日志相关 | 开放，暂无 fix PR |
| **中** | [#3106 工具步骤完成后无法生成最终答案](https://github.com/HKUDS/nanobot/issues/3106) | 使用 GPT 设置定时任务时反复出现"已完成工具步骤但无法给出最终答复"，gml-4.7 无此问题 | 开放已久（4 月创建），今日仍有更新，暂无 fix |
| **低** | [#5187 Termux 环境时区校验失败](https://github.com/HKUDS/nanobot/issues/5187) | `zoneinfo` 数据缺失导致配置校验报错，无法启动 | 已有对应 PR [#5189](https://github.com/HKUDS/nanobot/pull/5189)（安装 `tzdata` 作为全平台回退方案并添加回归测试） |
| **已修复** | [#5133 finish_reason='length' 误路由](https://github.com/HKUDS/nanobot/issues/5133) | `finish_reason='length'` + tool_calls + 空白文本被误送至空响应重试而非长度恢复 | 已关闭，修复 PR [#5136](https://github.com/HKUDS/nanobot/pull/5136) 已合并 |

值得关注的是，合并的 #5145 从 CI 层面消除了多类时序型 flaky 测试，长期看能减少类似 #5133 这类"偶发难复现"回归问题漏进主分支。

---

## 6. 功能请求与路线图信号

近期 PR 与 Issue 呈现以下路线图信号：

- **WebUI 体验升级（高置信度进入下一版本）**：#5181/#5182 已合入，[#5184 Quick Chat + Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184) 正在迭代，WebUI 将从"会话管理工具"转向"常驻快捷对话入口"。
- **会话存储架构迁移（重要架构信号）**：[#5173 feat(session): migrate session storage from JSONL to SQLite](https://github.com/HKUDS/nanobot/pull/5173) — 让 `sessions.db` 成为唯一运行时存储，首次启动时事务性导入既有 JSONL 并保留为回滚备份；若合并，将是会话层的一次架构升级。
- **Cron 任务可靠性增强**：[#5183 fix(cron): preserve manual run completion state](https://github.com/HKUDS/nanobot/pull/5183) — 保护手动执行期间的完成状态与运行历史不被 WebUI/API 读取干扰。
- **Telegram 通道自定义接入**：[#4919 feat(telegram): support custom Bot API base URL and extra headers](https://github.com/HKUDS/nanobot/pull/4919) — 支持自建 Bot API Server 或企业网关，满足私有化部署场景。
- **子代理模型预设**：[#4291 feat(spawn): allow subagents to use configurable model presets](https://github.com/HKUDS/nanobot/pull/4291) — 使 `spawn` 子代理可独立选择模型预设，扩展多智能体编排能力。
- **会话管理 CLI 命令**：[#1565 feat(session): add session export, import, search and stats commands](https://github.com/HKUDS/nanobot/pull/1565) — 会话导出/导入/搜索/统计。

此外，[#1319 feat: add skill status command](https://github.com/HKUDS/nanobot/pull/1319) 与 [#5186 fix(webui): support well-known skills.sh sources](https://github.com/HKUDS/nanobot/pull/5186) 表明技能生态（ClawHub/skills.sh 集成）的排查与安装链路也在持续完善。

整体判断：项目当前路线图呈现出 **"WebUI 前场体验 + 会话/存储中场架构 + 多智能体与技能生态后场能力"** 三层同步推进态势。

---

## 7. 用户反馈摘要

综合今日 Issue 与评论，可提取以下真实用户声音：

- **多媒体消息是刚需**（#5149）：用户期望 NanoBot 在 WhatsApp 上不仅能接收，还要能主动发送音频文件；当前失败且伴随 ffmpeg 警告，说明媒体处理链路的发送侧存在短板。
- **输出纯净度影响信任**（#5185）：工具调用代码直接出现在回复中会让用户感到"对话被污染"，且该现象是"突然发生"，暗示可能是某次配置或依赖变更引入的回归。
- **边缘平台用户在探索**（#5187）：有用户在 Termux 这类非常规环境中试用 NanoBot，虽然遇到时区数据缺失，但这类探索本身说明项目安装门槛低、社区尝试意愿强。
- **模型间行为差异造成困惑**（#3106）：同一任务在 GPT 下无法产出最终答案、在 gml-4.7 下正常，用户对模型之间的兼容性差异存在疑虑；该 Issue 自 4 月以来悬而未决，可能影响用户对默认模型配置的信心。

---

## 8. 待处理积压

以下长期开放或存在冲突的条目，建议维护者重点关注：

- **[Issue #3106 定时任务工具步骤后无最终答案（2026-04-13 创建，3.5 个月未解决）](https://github.com/HKUDS/nanobot/issues/3106)** — 涉及 GPT 模型下的任务完成逻辑，今日仍有更新但仍无维护者回复；建议排查是否为工具调用后上下文处理差异。
- **[PR #1656 fix(validation): handle None value in string schema validation（3 月创建，带 conflict 标记）](https://github.com/HKUDS/nanobot/pull/1656)** — schema 校验对 None 值的处理是基础健壮性问题，但已积压近 5 个月且存在合并冲突。
- **[PR #1565 feat(session): session export/import/search/stats（3 月创建，带 conflict 标记）](https://github.com/HKUDS/nanobot/pull/1565)** — 会话管理 CLI 是社区呼声较高的功能，需解决冲突后推进合入。
- **[PR #1319 feat: add skill status command（2 月创建，带 conflict 标记）](https://github.com/HKUDS/nanobot/pull/1319)** — 技能诊断命令可显著改善 ClawHub 技能"不可用"的排查体验，建议尽快处理冲突。
- **[PR #4021 fix(codex): dedup reasoning items before send（5 月创建）](https://github.com/HKUDS/nanobot/pull/4021)** — Codex 提供商偶发 400 重复 item 错误导致多轮对话中断，对依赖 Codex 的用户影响较大。
- **[PR #4819 fix(memory): replace WeakValueDictionary for consolidation locks（7 月初创建）](https://github.com/HKUDS/nanobot/pull/4819)** — 锁对象可能被 GC 回收导致并发合并竞态，属隐蔽内存语义问题。

---

**总结**：NanoBot 今日处于高强度迭代状态，PR 合入速度与社区反馈节奏均非常活跃。核心风险集中在两处：一是 #5185（工具调用代码泄漏）作为高影响回归尚无修复 PR；二是多个非 WebUI 方向的功能 PR 积压并出现冲突（#1565、#1319、#1656）。建议维护者优先处理 #5185 的可复现性确认，并在 WebUI 功能合入节奏中同步清理旧 PR 冲突，避免技术债累积。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-07-31

> 数据来源：NousResearch/hermes-agent GitHub 仓库（截至 2026-07-31 的 24 小时更新）

---

## 1. 今日速览

- 项目保持**高活跃度**：24 小时内 50 条 Issue、50 条 PR 更新，并发布补丁版本 **v0.19.1**（打包自 v0.19.0 以来约 1,000+ 个 PR），为下游用户提供稳定基线。
- 当日 Issue 以**新开/活跃为主（49 条）**，仅 1 条关闭；PR 方面 **46 条待合并、仅 4 条合并/关闭**，合并吞吐偏低，积压压力上升。
- 热点集中在：自定义 provider 配置被静默丢弃（[#21498](https://github.com/NousResearch/hermes-agent/issues/21498)，9 评论）、Desktop PROJECTS 标签消失（[#67368](https://github.com/NousResearch/hermes-agent/issues/67368)，7 评论）、更新流程脆弱性（[#75133](https://github.com/NousResearch/hermes-agent/issues/75133)）以及流式工具参数截断（[#74798](https://github.com/NousResearch/hermes-agent/issues/74798)，已有修复 PR）。
- 安全侧有实质进展：依赖漏洞修复（[#75169](https://github.com/NousResearch/hermes-agent/pull/75169)）与 Google Chat 多 profile 越权修复（[#73445](https://github.com/NousResearch/hermes-agent/pull/73445)）已进入待合并队列。
- **健康度评估**：功能迭代与安全加固活跃，但 Bug 修复合并速度与长期 Issue 积压是需要关注的短板；自动分诊（sweeper）运行中，但存在过早自动关闭导致回归漏网的迹象（见 [#75150](https://github.com/NousResearch/hermes-agent/issues/75150)）。

---

## 2. 版本发布

### Hermes Agent v0.19.1（v2026.7.30）

- **发布日期**：2026-07-30
- **类型**：Patch Release
- **内容**：将 v0.19.0 以来合并的约 1,000+ 个 PR 汇总为稳定标签版本，供 Docker 镜像、托管部署、全新安装等下游消费者使用。
- **破坏性变更**：发布说明中未明确列出。
- **升级注意事项（来自社区反馈）**：
  - **Docker/podman 用户**：新镜像在 podman 下存在 s6 init 无法获取 pid 1 导致启动失败的问题（[#38349](https://github.com/NousResearch/hermes-agent/issues/38349)，P1）。
  - **插件迁移**：升级后部分平台插件可能被静默禁用，Discord 网关出现 `No adapter available for discord`（[#54009](https://github.com/NousResearch/hermes-agent/issues/54009)）。
  - **回归确认**：TUI 空括号粘贴导致 macOS 剪贴板隐私弹窗风暴的问题在 v0.19.1 中仍可复现（[#75150](https://github.com/NousResearch/hermes-agent/issues/75150)），属于 #23984 的回归。

---

## 3. 项目进展

今日 PR 更新 50 条，其中 **46 条待合并、4 条已合并/关闭**（具体合并清单未在数据快照中展开）。待合并队列中值得关注的重要变更：

**高优先级修复（P1/P2）**
- [PR #75170](https://github.com/NousResearch/hermes-agent/pull/75170)（P1）：修复 finalizer 弹出 db 标记时 flush-scan 游标失效、导致最终回复从持久化记录中静默丢失的问题。
- [PR #75176](https://github.com/NousResearch/hermes-agent/pull/75176)：流式场景下 `finish_reason` 已设置时截断工具参数（write_file/terminal）的恢复逻辑 —— 对应 [#74798](https://github.com/NousResearch/hermes-agent/issues/74798)。
- [PR #74935](https://github.com/NousResearch/hermes-agent/pull/74935) 与 [PR #75168](https://github.com/NousResearch/hermes-agent/pull/75168)：修复 `hermes update` 在 `pull --ff-only` 失败时用 `reset --hard` 摧毁本地提交、以及 `.git/shallow.lock` 残留卡死更新的问题。

**安全加固**
- [PR #75169](https://github.com/NousResearch/hermes-agent/pull/75169)：升级 mcp、pillow、httplib2、pyasn1、pydantic-settings、pygments 等运行时依赖，修复多个 HIGH/MODERATE 漏洞。
- [PR #73445](https://github.com/NousResearch/hermes-agent/pull/73445)：修复 Google Chat 插件读取全局环境变量导致多 profile 配置越权的问题（[#73439](https://github.com/NousResearch/hermes-agent/issues/73439)）。
- [PR #75137](https://github.com/NousResearch/hermes-agent/pull/75137)：`.env` 加载改为 `interpolate=False`，避免 `${...}` 值被环境变量拼接篡改、凭据静默损坏。

**新功能**
- [PR #74900](https://github.com/NousResearch/hermes-agent/pull/74900)：新增 `/mem` 斜杠命令与全息记忆（fact_store）TUI 可视化器，提升记忆系统可观测性。
- [PR #75172](https://github.com/NousResearch/hermes-agent/pull/75172)：API Server 新增 `POST /api/sessions/{session_id}/rewind`，支持 HTTP 客户端在重放 turn 前截断 SessionDB 上下文。

**系统性文档/一致性清理**
- [PR #74573](https://github.com/NousResearch/hermes-agent/pull/74573)（zh-Hans）、[PR #73090](https://github.com/NousResearch/hermes-agent/pull/73090)（Feishu）、[PR #72950](https://github.com/NousResearch/hermes-agent/pull/72950)（guardrails MCP 工具名）、[PR #72951](https://github.com/NousResearch/hermes-agent/pull/72951)（MCP 文档命名）、[PR #74274](https://github.com/NousResearch/hermes-agent/pull/74274)（skill-writing 提示词门控）：一批消除陈旧引用、对齐双下划线 MCP 命名规范与只读 skills 部署场景的修复 PR 集中出现，说明项目正在做**发布后的一致性收尾**。

**总体判断**：v0.19.1 的发布是今日最大的里程碑；流式可靠性、更新安全、依赖安全三条修复线已形成 PR 集群，若 46 条待合并 PR 顺利合入，v0.20 的功能与稳定性基础将明显改善。

---

## 4. 社区热点

| 条目 | 类型 | 评论/反应 | 链接 |
|---|---|---|---|
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) 自定义 provider 的 `max_output_tokens` 被配置标准化器静默丢弃，API 请求不带 `max_tokens`，输出被钳制在模型最小值 2048 | Bug (P2) | 9 评论 | [链接](https://github.com/NousResearch/hermes-agent/issues/21498) |
| [#67368](https://github.com/NousResearch/hermes-agent/issues/67368) Desktop 侧边栏 PROJECTS 标签在 UI 初始化时闪现后消失，仅剩 SESSIONS | Bug (P3) | 7 评论 | [链接](https://github.com/NousResearch/hermes-agent/issues/67368) |
| [#54572](https://github.com/NousResearch/hermes-agent/issues/54572) patch 工具 replace 模式在 `old_string` 非精确匹配时可能编辑错误区域（九级匹配策略前七级仅容忍格式差异） | Bug (P2) | 5 评论 | [链接](https://github.com/NousResearch/hermes-agent/issues/54572) |
| [#13265](https://github.com/NousResearch/hermes-agent/issues/13265) Skills 系统五大架构缺陷：缺内容校验、缺新陈代谢、无质量控制 | 架构反馈 | 7 👍 / 4 评论 | [链接](https://github.com/NousResearch/hermes-agent/issues/13265) |
| [#48731](https://github.com/NousResearch/hermes-agent/issues/48731) `/model` 切换共享模型名时优先路由到原生 provider 而非当前 reseller，导致鉴权失败 | Bug (P2) | 4 评论 / 1 👍 | [链接](https://github.com/NousResearch/hermes-agent/issues/48731) |

**诉求分析**：
- 今日最热的 #21498 是典型的**"静默失败"类问题**——配置被丢弃但不报错，用户难以定位；同类问题还有 [#74879](https://github.com/NousResearch/hermes-agent/issues/74879)（配额耗尽被误报为鉴权失败）。社区对"配置透明性"和"错误信息准确性"的诉求明显增强。
- #67368 与 #65601 共同指向 **Desktop 端会话/UI 状态管理**的可靠性问题，桌面端用户基数正在扩大。
- #13265 获得 7 个 👍，反映社区对 Skills 生态长期质量（去重、淘汰、评级）有较高期待，但该 Issue 已积压 3 个月，见第 8 节。
- 多 provider / 多账号中转场景（#48731、[#54011](https://github.com/NousResearch/hermes-agent/issues/54011)）成为新热点，说明生产环境用户比例上升。

---

## 5. Bug 与稳定性

按严重程度排列（含今日新增与活跃 Bug）：

### P1
| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#38349](https://github.com/NousResearch/hermes-agent/issues/38349) | 更新后 Docker 镜像无法启动：podman 不允许 s6 init 获取 pid 1 | 开放，3 评论，**当前唯一 P1 Bug** |
| [PR #75170](https://github.com/NousResearch/hermes-agent/pull/75170) | finalizer 弹出 db 标记时 flush-scan 游标失效，最终回复可能从记录中丢失 | 待合并（P1 修复） |

### P2
| Issue | 描述 | 是否已有修复 PR |
|---|---|---|
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) | `max_output_tokens` 被 config 标准化器静默丢弃（9 评论，今日最热） | 无 |
| [#54009](https://github.com/NousResearch/hermes-agent/issues/54009) | 迁移到 bundled plugins 后平台插件被静默禁用，Discord 网关失效 | 无 |
| [#54572](https://github.com/NousResearch/hermes-agent/issues/54572) | patch 工具模糊匹配可能编辑错误区域，存在数据损坏风险 | 无 |
| [#74798](https://github.com/NousResearch/hermes-agent/issues/74798) | 流式工具参数截断且 `finish_reason` 已设置时被静默丢弃 | ✅ [PR #75176](https://github.com/NousResearch/hermes-agent/pull/75176) |
| [#75133](https://github.com/NousResearch/hermes-agent/issues/75133) | 更新中断后 `.git/shallow.lock` 残留，卡死在 "Hermes is still running"（今日新增） | ✅ [PR #75168](https://github.com/NousResearch/hermes-agent/pull/75168) |
| [#75130](https://github.com/NousResearch/hermes-agent/issues/75130) | 开启 `skills.write_approval` 后待审批队列无限增长（8 天 357 条，21% 无效），且自校验失效（今日新增） | 无 |
| [#74879](https://github.com/NousResearch/hermes-agent/issues/74879) | 配额耗尽被误报为 "Provider authentication failed"（鉴权模式先于限流模式匹配） | 无 |
| [#75089](https://github.com/NousResearch/hermes-agent/issues/75089) | 缺少 Groq provider profile，走 custom profile 后发出 `extra_body.think`/`reasoning` 被 Groq 拒绝 | 无 |
| [#75150](https://github.com/NousResearch/hermes-agent/issues/75150) | TUI 空括号粘贴触发剪贴板图片无限自动附加 + macOS 隐私弹窗风暴（今日新增，#23984 回归） | 无 |
| [#74739](https://github.com/NousResearch/hermes-agent/issues/74739) | Kimi 端点请求硬编码 `User-Agent: claude-code/0.1.0` 冒充他产品，违反 Kimi 文档要求 | 无 |
| [#65601](https://github.com/NousResearch/hermes-agent/issues/65601) | Desktop 新会话窗口复用已有后端上下文，无会话隔离 | 无 |
| [#63357](https://github.com/NousResearch/hermes-agent/issues/63357) | Windows 下 computer_use 约 30s 后返回空错误串，`raise_window=True` 静默无效 | 无 |
| [#16979](https://github.com/NousResearch/hermes-agent/issues/16979) | QQ 文件附件（PDF 等）下载失败时被静默丢弃，无日志无提示 | 无 |
| [#64573](https://github.com/NousResearch/hermes-agent/issues/64573) | SQLite 锁导致 cron 会话以 `source=unknown` 物化并暴露在用户会话列表 | 无 |

### P3 / 安全相关
- [#67368](https://github.com/NousResearch/hermes-agent/issues/67368) Desktop PROJECTS 标签消失（7 评论，今日次热）。
- [#54753](https://github.com/NousResearch/hermes-agent/issues/54753) Mattermost REST 响应体无大小上限读取；[#55128](https://github.com/NousResearch/hermes-agent/issues/55128) 图像生成 provider 无上限缓冲 JSON 响应 —— 均为内存安全风险，建议优先处理。
- [#54214](https://github.com/NousResearch/hermes-agent/issues/54214) 宠物精灵像素画被 LANCZOS 缩放模糊，应为 `Image.NEAREST`。
- [PR #75169](https://github.com/NousResearch/hermes-agent/pull/75169) 本身是依赖漏洞修复（mcp 1.26.0→1.28.1 等），覆盖 3 个 HIGH 漏洞。

**回归观察**：#75150 明确指出 #23984 曾被 hermes-sweeper 自动关闭但在 v0.19.1 中仍复现，且症状加重。建议维护者复核自动关闭机制，避免回归漏网。

---

## 6. 功能请求与路线图信号

**高概率进入下一版本的能力（已有对应 PR 在队列中）**
- **记忆可观测性**：[#74900](https://github.com/NousResearch/hermes-agent/pull/74900) `/mem` 命令 + TUI 可视化器，与 [#13265](https://github.com/NousResearch/hermes-agent/issues/13265) 社区对记忆/Skills 质量的诉求呼应。
- **HTTP API 能力扩展**：[#75172](https://github.com/NousResearch/hermes-agent/pull/75172) 新增 session rewind HTTP 接口；[#52264](https://github.com/NousResearch/hermes-agent/issues/52264) 请求 MCP/Skills 热刷新 HTTP 化——API Server 正在从"会话运行"向"会话管理/运维"延伸。

**值得关注的新需求**
| Issue | 需求 | 链接 |
|---|---|---|
| [#54011](https://github.com/NousResearch/hermes-agent/issues/54011) | Credential pool 支持 per-credential `base_url` 覆盖（多账号同 provider 轮换，Cloudflare Workers AI 为典型场景） | [链接](https://github.com/NousResearch/hermes-agent/issues/54011) |
| [#49806](https://github.com/NousResearch/hermes-agent/issues/49806) | Telegram 实时位置更新应后台静默处理，避免反复进入对话循环 | [链接](https://github.com/NousResearch/hermes-agent/issues/49806) |
| [#62352](https://github.com/NousResearch/hermes-agent/issues/62352) | Desktop 增加账号级 GitHub PR 总览面板 | [链接](https://github.com/NousResearch/hermes-agent/issues/62352) |
| [#50195](https://github.com/NousResearch/hermes-agent/issues/50195) | 会话中支持切换工作目录（CLI + Desktop） | [链接](https://github.com/NousResearch/hermes-agent/issues/50195) |
| [#26109](https://github.com/NousResearch/hermes-agent/issues/26109) | `post_assistant_turn` / `on_response_sent` 插件钩子事件（跨 bot 日志协作场景） | [链接](https://github.com/NousResearch/hermes-agent/issues/26109) |
| [#50075](https://github.com/NousResearch/hermes-agent/issues/50075) | 移动端/平板无法圈选复制聊天文本（xterm canvas 不可被 OS 选中） | [链接](https://github.com/NousResearch/hermes-agent/issues/50075) |

**被关闭的需求**：[#75026](https://github.com/NousResearch/hermes-agent/issues/75026)（sessionless 插件命令 RPC）今日被关闭，评论仅 2 条，社区讨论不充分即关闭，建议维护者留意是否有外部依赖方受影响。

---

## 7. 用户反馈摘要

- **自定义 provider 用户（#21498）**："配置写了 `max_output_tokens` 但请求里根本没有 `max_tokens` 参数，输出被钳在 2048。" 用户对**配置被静默吞掉**非常不满，期望至少给出 warning。
- **中转/多账号用户（#48731、#54011）**：共享模型名在多个 catalog 存在时被错误路由到无凭证的原生 provider，导致鉴权失败；同时 credential pool 无法处理"每个账号一个 endpoint"的场景。
- **升级用户（#54009、#38349、#75133）**：升级后 Discord 网关静默失效、podman 下容器起不来、`.git/shallow.lock` 卡死更新——**升级路径的健壮性是当前最大的用户痛点集群**。
- **Desktop 用户（#65601、#67368）**：新会话窗口复用旧上下文、PROJECTS 标签消失。前者直接违背用户"开新窗=新会话"的预期，属于隐私/隔离问题。
- **macOS 用户（#75150）**："无限剪贴板图片自动附加 + 系统隐私弹窗风暴"，且是 #23984 的回归，用户明确表达了对发布质量的质疑。
- **Kimi 用户（#74739）**：对 Hermes 冒充 Claude Code User-Agent 表示担忧——"Kimi 文档要求第三方工具保留真实客户端身份"，存在合规风险。
- **中文社区（#52264、#74573）**：外部 Java 服务需要 HTTP 方式热刷新 MCP/Skills；同时有用户主动提交 zh-Hans 文档修复 PR，社区参与度高。
- **社区质量亮点（#75130）**：提交者在发帖后不久主动更正自己的分析错误（分组 bug 导致误判），并保留修正记录，说明社区技术讨论较为严谨。

---

## 8. 待处理积压

以下为长期未解决/响应不足的重要条目，提醒维护者关注：

| 条目 | 提出时间 | 积压天数 | 说明 |
|---|---|---|---|
| [#13265](https://github.com/NousResearch/hermes-agent/issues/13265) Skills 系统五大架构缺陷 | 2026-04-21 | ~101 天 | 7 👍，社区共鸣强，无维护者实质回应 |
| [#16979](https://github.com/NousResearch/hermes-agent/issues/16979) QQ 附件下载失败静默丢弃 | 2026-04-28 | ~94 天 | 功能缺陷，无 fix 迹象 |
| [#21498](https://github.com/NousResearch/hermes-agent/issues/21498) `max_output_tokens` 被静默丢弃 | 2026-05-07 | ~85 天 | **今日最热 Issue（9 评论）**，核心配置路径，仍未修复 |
| [#26109](https://github.com/NousResearch/hermes-agent/issues/26109) 插件钩子事件需求 | 2026-05-15 | ~77 天 | 有明确双实例协作场景，无回应 |
| [PR #34750](https://github.com/NousResearch/hermes-agent/pull/34750) docs: plan state event archive | 2026-05-29 | ~63 天 | 架构文档 PR，长期未合并 |
| [#54753](https://github.com/NousResearch/hermes-agent/issues/54753) / [#55128](https://github.com/NousResearch/hermes-agent/issues/55128) 响应体无上限读取 | 2026-06-29 | ~32 天 | 内存安全风险，建议提级处理 |
| [#48731](https://github.com/NousResearch/hermes-agent/issues/48731) `/model` 路由错误 | 2026-06-19 | ~42 天 | 影响多 provider 生产用户，1 👍 |
| [#63357](https://github.com/NousResearch/hermes-agent/issues/63357) Windows computer_use 空错误 | 2026-07-12 | ~19 天 | Windows 平台阻塞性问题 |
| [PR #75000](https://github.com/NousResearch/hermes-agent/pull/75000) Kanban 跨进程幂等任务创建 | 2026-07-30 | 1 天 | 带 `blast-massive` 标签，波及面大，需谨慎评审 |

**结构性提醒**：当日 50 条活跃 Issue 中大量带有 `sweeper:risk-*` 自动化分诊标签，说明机器人流程运转正常；但合并吞吐（46 待合并 vs 4 合并/关闭）与长期积压（3 个月以上条目仍悬而未决）之间的张力，是当前项目健康度最值得关注的风险点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-07-31

## 今日速览

过去 24 小时项目活跃度保持中高水平：共 7 条 Issue 更新（4 条新开/活跃、3 条关闭），17 条 PR 更新（12 条待合并、5 条已合并/关闭）。无新版本发布。值得注意的是，PR 动态中大部分来自 dependabot 的自动依赖升级，人工提交的代码评审和功能合入节奏较慢；同时出现一份深入代码审查报告（#3308）、OAuth 2.1 支持需求的二次提出（#3302）以及 Telegram 会话管理功能请求（#3307）。整体呈现"维护活跃、功能迭代平稳、社区反馈以增强体验为主"的健康格局，但 stale 标签在多个长期未合并 PR 上出现，需关注积压问题。

## 项目进展

今日有 5 个 PR 关闭或合并，其中 4 个为依赖升级（GitHub Actions 的 setup-node、setup-go，AWS SDK 的 config、bedrockruntime），属定期维护；1 个功能性 PR 为 **#3163 feat(bedrock): leverage Converse prompt caching via cache points**，该 PR 自 6 月 23 日创建后今日才关闭，历时较长。整体而言，今日合入内容以技术债清偿和依赖更新为主，新功能代码仍停留在待合并状态（#3271、#3270、#3279、#3222 等），核心业务功能推进速度放缓。

## 社区热点

- **[Issue #2546 OAuth 2.1 + PKCE for MCP servers](https://github.com/sipeed/picoclaw/issues/2546)**（6 评论，已关闭）
  关于让非技术用户通过粘贴 URL 在 dashboard 中添加 OAuth 保护 MCP 服务器的请求。该 Issue 虽在 7 月 30 日被关闭（标记 stale），但 7 月 31 日新开的 #3302 以"same as #2546"二次提出，说明 #2546 的关闭并未解决社区实际诉求，OAuth 2.1 支持仍是社区的强烈需求。

- **[Issue #3308 [Code Review] 并发隐患、goroutine 泄漏与内存速度优化](https://github.com/sipeed/picoclaw/issues/3308)**（新开，0 评论）
  用户 Rehanasharmin 主动提交的一份关于 SeaHorse、Channel Manager 和 Hooks 模块的代码审查报告，涵盖并发安全性、资源泄漏与性能问题。既有用户的深度参与是项目社区的积极信号，同时也暗示基础组件存在潜在质量风险，建议维护者尽快评估并回应。

- **[Issue #3287 Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**（2 评论，标记 stale）
  讨论 IRCv3 长消息被截断/分割导致 AI 理解碎片化的问题。该 Issue 创建于 7 月 22 日，已存在 9 天未被处理。IRC 限制 512 字节是协议层面客观约束，但对用户体验影响明显。

## Bug 与稳定性

| 严重程度 | Issue | 说明 | 状态 |
|---|---|---|---|
| 中 (P2) | [#3287 IRC 长消息无法被连贯解析](https://github.com/sipeed/picoclaw/issues/3287) | IRCv3 客户端自动拆分超长消息，PicoClaw 将拆分段视为多条消息，影响多行文本/代码块场景 | OPEN，未标记 fix PR |
| 中 (P2) | [#3308 并发隐患、goroutine 泄漏、内存/速度优化](https://github.com/sipeed/picoclaw/issues/3308) | 用户代码审查指出 SeaHorse、Channel Manager、Hooks 存在的并发安全与资源泄漏风险，需维护者复现确认 | OPEN，待 triage |
| 低 (P3) | [#3258 Process Hook before_tool 修改不生效](https://github.com/sipeed/picoclaw/issues/3258) | decision 字段被丢弃、args 解析异常，根因是反序列化缺陷，今日已关闭 | CLOSED，已解决 |

## 功能请求与路线图信号

- **OAuth 2.1 支持（强烈需求）** — [#2546](https://github.com/sipeed/picoclaw/issues/2546)（主动关闭）+ [#3302](https://github.com/sipeed/picoclaw/issues/3302)（新开）。这是当前社区呼声最高、最明确的功能诉求，建议排期优先处理。相关 PR #2546 的状态值得关注——若讨论在评论区仍持续，可考虑重新打开或纳入路线图。
- **Telegram 会话列表/切换命令** — [#3307](https://github.com/sipeed/picoclaw/issues/3307)。Web UI 已有完善会话管理，但聊天渠道缺少对应能力，用户只能依赖固定 session key，使用场景受限。
- **IRC 长消息支持** — [#3287](https://github.com/sipeed/picoclaw/issues/3287)，面向 IRC 重度用户，需处理协议 512 字节限制。
- **Gateway 无状态/无历史模式** — [#3257](https://github.com/sipeed/picoclaw/issues/3257)（已关闭）。CLI 可自定义 session，但 gateway 的 session key 被渠道绑定，有用户要求支持 stateless 模式。
- **行进中的功能 PR（可期待纳入下一版）**：`#3200` 可配置默认模型 fallback 链、`#3270` DashScope TTS 与微信语音、`#3271` 更新 9 家供应商默认模型名、`#3279` 修复 seahorse 摘要中工具调用格式泄漏——以上均待合并，属于近期功能重点。

## 用户反馈摘要

- **技术门槛低是核心诉求**：#2546 的提出者特别强调"non-technical users"和"same UX as Claude.ai"，反映用户希望 PicoClaw 的扩展接入流程能像商业产品一样平滑。
- **社区成员主动贡献质量**：#3308 的提出者以代码审查形式提交 Issue，在夸奖 PicoClaw"native Go、$10 hardware、<10MB RAM、sub-second boot"的同时展开技术细节分析，是高质量外部反馈，应认真对待。
- **对话连续性痛点**：#3257 用户在使用 `picoclaw gateway` 时发现会话无法像 CLI 一样轻松创建全新对话，迫使依赖不同 channel/chat id 绕行的现状，体验割裂。
- **IRC 场景的 AI 体验受损**：#3287 用户反映消息被 IRC 客户端自动拆分后，AI 无法理解单条完整消息的语境。

## 待处理积压

- **[PR #3222 refactor(deltachat) — -200LOC](https://github.com/sipeed/picoclaw/pull/3222)**（stale，创建 7 月 3 日）
  deltachat 渠道的清理重构，从 7 月 3 日创建至今已近一个月未合并。该重构包含减少 200 行代码、删除 legacy 功能等良性变更。如果 reviewers 积压，建议及时处理或明确标记计划合并的时间窗口。

- **[PR #3200 feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)**（stale，创建 7 月 1 日）
  为 Web UI 增加模型 fallback 链配置，完整实现了"默认模型 + 备用模型 + 排序 + 持久化"的后端 API。是相对完整的用户体验增强功能，已停留 30 天未有合并动作，面临 stale 关闭风险，建议权衡是否进入下一版本。

- **[PR #3291 / #3289 dependabot 依赖升级](https://github.com/sipeed/picoclaw/pull/3291)**（stale）
  copilot-sdk-go 与 pion/rtp 的依赖更新已 stale，配合今日 dependabot 又新开了 #3303~#3306，CI 依赖维护可能已出现堆积。建议维护者尽快批量处理或配置自动合并策略。

- **[Issue #2546 的关闭与 #3302 的重新提出](https://github.com/sipeed/picoclaw/issues/2546)**：一个已被标记为 close 的需求再度被新 Issue 提出，是路线图信号——用户对 OAuth 2.1 的等待耐心在消耗，建议直接纳入短期规划。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-07-31

## 今日速览

过去24小时 NanoClaw 新增 2 个 Issue、15 个 PR 更新（4 个关闭/合并、11 个待合并），无新版本发布。关闭的 PR 集中于镜像安全加固、Vercel CLI 默认移除、opencode 兼容性修复及技能更新工具版本兼容检查。新增 Issues 暴露了 Slack 消息 API 的 ID 规范漏洞和 registry 分支漂移导致的技能安装失败。整体活跃度中等偏高，核心团队正密集清理基础设施层的安全与稳定性债务。

## 项目进展

今日关闭/合并的 4 个 PR 均由核心团队主导，方向集中在安全基线、镜像效率和兼容性：

- **[PR #3160](https://github.com/qwibitai/nanoclaw/pull/3160) 修复 agent 镜像引用至 hardened-2026-07-30**：镜像层数从 18 降到 8，最大单层占比从 39% 降到 27%。由于镜像拉取耗时取决于最大单层而非总大小，该改动直接降低了镜像分发的网络门限。
- **[PR #3159](https://github.com/qwibitai/nanoclaw/pull/3159) Vercel CLI 改为 opt-in**：不再将 Vercel CLI 默认打入每个 agent 镜像，避免所有镜像无条件携带部署工具和默认凭证面，改为由 `/add-vercel` 按需启用。
- **[PR #3122](https://github.com/qwibitai/nanoclaw/pull/3122) opencode 兼容性修复**：覆盖 main 分支适配、自定义端点传输和 memory 一致性对齐。
- **[PR #2682](https://github.com/qwibitai/nanoclaw/pull/2682) update-skills 增加 v2 版本检查**：在技能更新流程开始前识别并跳过 v1-only 分支，防止不兼容的旧版 skill 进入更新候选。

这些合并表明项目正在巩固镜像供应链安全、收敛默认攻击面，并提升技能生态的版本维护纪律。

## 社区热点

**[Issue #3153](https://github.com/qwibitai/nanoclaw/issues/3153) 是今日唯一带评论的 Issue**。用户 TO-maschenborn 报告 `add_reaction` 与 `edit_message` 对入站消息始终失败，根因是 platform message id 没有剥离开 agent-group 后缀。用户明确描述了 Slack 场景下的失败路径：`message_not_found`、重试 3 次、最终失败。该问题直接阻断 Channel 集成中消息反应与编辑的核心交互，暴露了 inbound 消息 ID 规范化的缺口，建议核心团队优先认领。

## Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 |
|---|---|---|
| 高 | **[Issue #3153](https://github.com/qwibitai/nanoclaw/issues/3153)**：add_reaction/edit_message 对入站消息完全失效，Slack 场景每次返回 message_not_found，重试后失败 | 无认领 PR |
| 中高 | **[Issue #3155](https://github.com/qwibitai/nanoclaw/issues/3155)**：registry 分支与 main 漂移，导致 `/add-codex` 技能在主分支上无法通过自身安装门禁 | 无认领 PR |
| 中 | **[PR #3158](https://github.com/qwibitai/nanoclaw/pull/3158)**：verify-agent-image 读取不存在的变量，导致每次签名验证均被跳过、auto-merge 无法触发 | 修复 PR 待合并 |
| 中 | **[PR #3119](https://github.com/qwibitai/nanoclaw/pull/3119)**：container-runner 未对孤儿容器做 reconcile，实测同一 agent-group 可累积 3 个并发容器轮询同一 session DB | 修复 PR 待合并 |
| 中 | **[PR #3157](https://github.com/qwibitai/nanoclaw/pull/3157)**：materializeTemplateSkills 跟随悬空 symlink，引用容器内路径导致模板物化失败 | 修复 PR 待合并 |

## 功能请求与路线图信号

今日新提交的 core-team PR 透露出 agent-runner 核心路径的下一步方向：

- **[PR #3154](https://github.com/qwibitai/nanoclaw/pull/3154)**：为定时任务透传当前有效调度时间（`process_after`），并生成包含 weekday 的 `current_time`，改进定时任务的时间上下文感知。
- **[PR #3156](https://github.com/qwibitai/nanoclaw/pull/3156)**：将 channel 附件以结构化 parts 形式传递给 providers，补全消息载荷的完整性。

此外，队列中长期挂起的功能性 PR 仍具有路线图参考价值：**[#2301 GitHub 轮询模式与 webhook 安全提醒](https://github.com/qwibitai/nanoclaw/pull/2301)**、**[#2317 免费本地语音转录技能](https://github.com/qwibitai/nanoclaw/pull/2317)**、**[#2634 paws4claws AWS 凭证代理技能](https://github.com/qwibitai/nanoclaw/pull/2634)**。这些如被合入，将作为下一里程碑的功能储备。

## 用户反馈摘要

今日唯一的 Issue 评论来自 [#3153](https://github.com/qwibitai/nanoclaw/issues/3153)：作者描述了完整的失败链路——每次 Slack 操作均收到 `message_not_found`，系统自动重试 3 次后彻底标记为失败。该反馈说明当前 headless channel 集成的消息修改能力对真实用户不可用，是明显的体验降级。另一条 Issue（[#3155](https://github.com/qwibitai/nanoclaw/issues/3155)）虽无评论，但从报告内容看，新用户安装在 main 分支上已出现回归症状。

## 待处理积压

以下 PR 已开放超过 30 天，且均于 7 月 30 日有过更新，说明维护者仍在接触但迟迟未合并，建议排查阻塞原因：

- [PR #2301](https://github.com/qwibitai/nanoclaw/pull/2301) feat(add-github)：轮询模式、git 访问问题、安全 OneCLI secret 合并（5/6 创建）
- [PR #2317](https://github.com/qwibitai/nanoclaw/pull/2317) feat(skills)：新增 `/add-voice-transcription-free-whisper` 本地免费转录技能（5/7 创建）
- [PR #2537](https://github.com/qwibitai/nanoclaw/pull/2537) ci：增加 pre-commit hooks（prettier、eslint、typecheck、vitest）（5/18 创建）
- [PR #2634](https://github.com/qwibitai/nanoclaw/pull/2634) feat：新增 add-paws4claws AWS 凭证代理技能（5/28 创建）
- [PR #2685](https://github.com/qwibitai/nanoclaw/pull/2685) docs(signal)：group typing、outbound reactions、quote-reply 文档修订（6/4 创建）

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-07-31

---

## 1. 今日速览

过去 24 小时项目保持高度活跃：**40 条 Issues 更新**（新开/活跃 34，关闭 6）、**50 条 PR 更新**（待合并 26，已合并/关闭 24），无新版本发布。核心动态集中在三条主线：**目标架构重构（WS0）正式落地**——基础基线 PR #6936 与 host_api 去通配符重构 #6934 已合并；**技能系统（Skills）双 PR 提交**——路由评分 #6937 与激活解释 #6938 同日就绪，配套的"可完成子集"新 epic #6941 也已创建；**前端 UI 批量缺陷修复**——italic-jinxin 提交了 10+ 个分页、预览、组件一致性问题及对应修复 PR。此外，安全领域出现一个 **P0 级跨用户内存泄漏问题**（#6900），需优先关注。

---

## 2. 版本发布

过去 24 小时无新版本发布。但值得注意的是，**release PR #5598 已搁置 28 天**，其中包含 `ironclaw_common`（0.4.2 → 0.5.0，含破坏性变更）和 `ironclaw_skills`（0.3.0 → 0.4.0，含破坏性变更）两个 crate 的版本升级，建议维护者尽快处理。

---

## 3. 项目进展

过去 24 小时合并/关闭的关键 PR 与 Issue，标志项目在架构治理、跨渠道附件、稳定性三个方向迈出实质一步：

### 🔧 目标架构重构（WS0）正式启动

- **PR #6936 — test(architecture): baselines + shrink-only exception ratchet (WS0)** ✅ 已合并
  目标架构计划 Wave 0 第 4 项，为后续大规模重构建立行为基线指标与"只缩不增"的架构异常棘轮。**行为零变更**，纯度量基础设施。
  → https://github.com/nearai/ironclaw/pull/6936

- **PR #6934 — refactor(host_api): de-wildcard the contract prelude (WS0)** ✅ 已合并
  WS0 第 1 项：移除 `ironclaw_host_api` 中 45 个模块的扁平 `pub use *` 通配符预导出，所有消费方改为通过模块路径显式引用契约，为后续依赖方向治理铺路。
  → https://github.com/nearai/ironclaw/pull/6934

### 📎 跨渠道附件流落地

- **PR #6364 — feat(attachments): add durable cross-channel file flows** ✅ 已合并
  引入 WebUI/Telegram/Slack 统一的附件契约，入站附件在 turn 开始前原子落盘（含数量/单文件/聚合限额），出站支持 run 作用域的授权附件。该 PR 同时解决了 Issue **#6496**（Telegram 双向附件支持），该 Issue 今日关闭。
  → https://github.com/nearai/ironclaw/pull/6364

### 🛠️ 稳定性修复

- **PR #6935 — fix(libsql): recover cancelled transactions and history migration** ✅ 已合并
  修复对话历史/时间线 503（迁移竞态）、取消的文件系统事务保留 libSQL 写租约导致死锁的问题。
  → https://github.com/nearai/ironclaw/pull/6935

### ✅ 其他关闭的 Issue

- **#4636** — SSO 会话与多用户隔离 E2E 测试覆盖（已关闭)
  → https://github.com/nearai/ironclaw/issues/4636
- **#6771** — Reborn Playwright 运行时与服务 API 测试稳定性（已关闭）
  → https://github.com/nearai/ironclaw/issues/6771

---

## 4. 社区热点

### 🥇 #6284 — [EPIC] 错误可恢复性终局：模型从 100% 错误中恢复（15 条评论）

过去 24 小时评论数最高的 Issue。核心诉求是**每次运行中错误都必须满足可恢复契约**：(a) 运行存活、(b) 模型看到错误、(c) 模型看到的信息包含原因+成功条件、(d) 模型获得行动回合、(e) 绝不把非成功报告为成功。该 epic 已活跃 12 天，评论热度反映出社区对"模型自主修复"能力的强烈关注。
→ https://github.com/nearai/ironclaw/issues/6284

### 🥈 技能系统双 PR 同日提交，配套新 epic 诞生

- **PR #6937** — 词边界关键词匹配 + 可测量的激活阈值（修复 #5417，Epic #6565 切片 0）
- **PR #6938** — 激活拒绝时解释原因、强制执行前置条件、在发现限制下存活（Epic #6565 的另一半）

两个 PR 分别对应"路由/评分"与"缺失/不可用技能"两个问题域，同日提交说明技能系统修复进入集中攻坚阶段。同时新 epic **#6941** 提出在 #6565 的 21 条验收标准中切出一个**可完成的子集**（#6565 过大且 4 条标准属于他人工作），反映维护者在控制 epic 粒度的思路转变。
→ https://github.com/nearai/ironclaw/pull/6937
→ https://github.com/nearai/ironclaw/pull/6938
→ https://github.com/nearai/ironclaw/issues/6941

### 🥉 架构重构 10-issue 批量创建

BenKurrek 在 7 月 30 日一次性创建了 10 个架构相关 Issue（#6919–#6927 及 #6920），将 #3773 目标架构 epic 拆解为可执行的工作流（WS0 基线与棘轮 → WS1 契约提取 → WS2/3 扩展与内核 → WS4 所有权驱逐 → WS5 死代码删除 → WS6 目录落地 → WS7 文档验证）。这一批 Issue 构成未来数周的重构路线图。
→ https://github.com/nearai/ironclaw/issues/6919

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（P0/安全）

| Issue | 问题描述 | 状态 |
|---|---|---|
| **#6900** — 共享频道默认主题绑定导致**跨用户内存泄漏** | 未路由的共享 Slack 频道中将所有用户折叠进 operator 的 memory 命名空间，内存读取/写入越权 | 🔴 待处理，建议 P0 |
| → https://github.com/nearai/ironclaw/issues/6900 |||
| **#6866** — 所有用户共享同一 home 目录，工作区互相可见 | 隐私泄露风险，用户报告"能看到所有其他用户的工作区" | 🟠 待处理 |
| → https://github.com/nearai/ironclaw/issues/6866 |||

### 🟠 中等（功能损坏）

| Issue | 问题描述 | 对应修复 PR |
|---|---|---|
| **#6752** — 实例删除失败，重新登录卡在 "Loading your agents..." | 用户删除实例时报错，重登后 UI 卡死 | ❌ 无 |
| → https://github.com/nearai/ironclaw/issues/6752 |||
| **#6834** — Slack 集成设置失败（near.foundation 账户） | 连接/认证流程无法完成，扩展处于不可用状态 | ❌ 无 |
| → https://github.com/nearai/ironclaw/issues/6834 |||
| **#6903** — Admin 用户列表无法加载第一页之后的数据 | 后端返回 `next_cursor`，前端未实现翻页 | ❌ 无 |
| → https://github.com/nearai/ironclaw/issues/6903 |||
| **#6904** — 日志页面无法加载最新页之后的数据 | 同上，`next_cursor` 未消费 | ❌ 无 |
| → https://github.com/nearai/ironclaw/issues/6904 |||
| **#6915** — 助手消息中的工作区文件链接点击无反应 | 链接可点击但不打开/导航 | ✅ **PR #6917**（已验证工作区链接通过认证预览打开） |
| → https://github.com/nearai/ironclaw/issues/6915 || → https://github.com/nearai/ironclaw/pull/6917 |

### 🟡 轻微（体验/一致性）

| Issue | 问题描述 | 对应修复 PR |
|---|---|---|
| **#6916** — Markdown 文件在预览弹窗中以纯文本渲染 | `.md`/`.mdx` 源码以 `<pre>` 块展示，未渲染格式 | ❌ 无 |
| → https://github.com/nearai/ironclaw/issues/6916 |||
| **#6940** — IronHub 技能 CTA 全量返回 404 | 所有技能的 CTA 按钮均跳转至 404 页面 | ❌ 无 |
| → https://github.com/nearai/ironclaw/issues/6940 |||
| **#6909** — Admin 删除流程未使用共享 ConfirmDialog | 两处删除流程确认、加载、错误、键盘/焦点行为不一致 | ❌ 无 |
| → https://github.com/nearai/ironclaw/issues/6909 |||
| **#6910** — 设置页缺少共享 Switch 组件 | Appearance 与 Tools 设置页的开关样式/禁用态/无障碍行为不一致 | ❌ 无 |
| → https://github.com/nearai/ironclaw/issues/6910 |||

### ✅ 已修复（今日合并）

- **PR #6935** 修复 libsql 取消事务导致写租约泄漏 + 历史迁移竞态 → 解决对话历史 503
- **PR #6937** 修复技能关键词子串误匹配（#5417）——`score_skill` 中"任何位置的裸子串命中"给 5 分导致关键词路由失效

---

## 6. 功能请求与路线图信号

### 🆕 新功能请求（今日新增）

| Issue | 需求 | 潜在路线图判断 |
|---|---|---|
| **#6939** — 从 Legacy Agent（Hermes/Openclaw）迁移到 IronClaw 的迁移工具 | 用户现有设置、配置、记忆无法迁移，切换成本高 | ⭐ 高价值。已有用户明确表示"不愿从零开始"，可能影响迁移率。尚无对应 PR |
| → https://github.com/nearai/ironclaw/issues/6939 |||
| **#6905** — 使用 keyless cosign 签名发布产物 | 便于 AUR 等第三方包维护者验证 | ⭐ 外部贡献者提出（aardbol）。低成本、高信任收益。无对应 PR |
| → https://github.com/nearai/ironclaw/issues/6905 |||
| **#6941** — 新 epic：技能可发现/可选/可用（可完成子集） | 将 #6565 缩减为可交付范围，全量可测量 | ⭐⭐ 与 #6937/#6938 双 PR 直接呼应，预计随 PR 合并逐步关闭 |

### 🚧 已有对应 PR 的功能（可能进入下一版本）

| 功能 | 对应 PR | 状态 |
|---|---|---|
| **Agentic Activity / Streaming UX 重构** | #6901 — `NearProcessInsights` 组件 + 设计参考 mockup | 开放中，基础 PR |
| **托管 MCP 服务器注册** | #6930 — 租户运行时注册 + 自动 OAuth/Bearer/无认证检测 | 开放中，XL 规模 |
| **IronHub 深度链接 + 包身份绑定** | #6780（注册网关）+ #6933（安装绑定 SHA-256 摘要） | 均在开放中，形成两阶段流水线 |
| **Projects 页面数据真实性** | #6906 — 移除虚构指标，仅展示 API 支持的数据 | 开放中 |
| **工作区文件链接认证预览** | #6917 — 链接规范化 + DOMPurify + 线程作用域预览 | 开放中，修复 #6915 |

---

## 7. 用户反馈摘要

### 😠 痛点与不满

- **删除实例即卡死**（#6752）：用户尝试删除名为 "calm-hor..." 的实例时报错，重新登录后 UI 永久卡在 "Loading your agents..."，操作无法完成。
- **Slack 集成不可用**（#6834）：near.foundation 账户下 Slack 设置流程无法完成，扩展处于不可用状态。
- **隐私担忧**（#6866）：tobias.holenstein 报告"滚动工作区时，home 目录对所有用户相同，所有用户都能看到其他用户的工作区"，明确表达 privacy concern。
- **迁移成本高**（#6939）：Hermes/Openclaw 用户"不愿从零开始"，部分用户可能因此拒绝迁移。
- **全量 404**（#6940）：IronHub 技能 CTA 对所有技能跳转 404，用户不知道该功能归属谁。

### 😊 正面信号

- 技能系统修复方向获认可：PR #6937/#6938 针对 #5417（关键词误匹配）与"静默不可用"问题的修复，直接回应了 SkillsBench 基准测试暴露的"技能存在但无法工作"问题。
- 外部贡献者参与度提升：#6905 由非核心成员 aardbol 提出，体现开源生态吸引力。

---

## 8. 待处理积压

### ⚠️ 长期未响应的关键 PR

| PR | 搁置时长 | 说明 |
|---|---|---|
| **#5598** — chore: release（ironclaw_common 0.5.0 + ironclaw_skills 0.4.0） | 28 天 | 含两个 crate 的破坏性变更，长期未合并可能阻塞下游依赖方 |
| → https://github.com/nearai/ironclaw/pull/5598 |||
| **#5664** — ci(deps): actions 组 16 个更新 | 26 天 | 包含 actions/checkout v4→v7、claude-code-action 1.0.88→1.0.183 等，建议评估后合并 |
| → https://github.com/nearai/ironclaw/pull/5664 |||
| **#6361** — serde/serde_json 依赖更新 | 11 天 | 低风险常规更新 |
| → https://github.com/nearai/ironclaw/pull/6361 |||
| **#6428** — tokio 生态 4 个依赖更新 | 10 天 | 低风险常规更新 |
| → https://github.com/nearai/ironclaw/pull/6428 |||

### ⚠️ 需关注的开放 Epic

| Issue | 说明 |
|---|---|
| **#6284** — 错误可恢复性 epic（15 评论，热度最高） | 已活跃 12 天，尚无对应实现 PR。核心契约涉及运行存活、模型可见性、原因+成功条件传递，属于高复杂度系统性改造 |
| **#6565** — 技能发现/路由/激活 epic（21 条验收标准） | 维护者已承认过大，新 epic #6941 将拆出可完成子集，建议跟踪拆分进展 |
| **#3773** — 目标架构 epic（5 月创建，活跃至今） | WS0 已启动（#6934/#6936 合并），后续 8 个工作流（#6919-#6927）等待按序执行 |

---

## 📊 项目健康度总结

| 维度 | 状态 |
|---|---|
| **活跃度** | 🟢 极高（24h：34 活跃 Issue + 26 开放 PR） |
| **发布节奏** | 🟡 停滞（release PR 积压 28 天） |
| **架构治理** | 🟢 WS0 基线已合并，重构进入机械化执行阶段 |
| **安全性** | 🔴 两个未处理的跨用户隐私/内存泄漏问题（#6900 P0、#6866） |
| **外部贡献** | 🟢 新贡献者出现（aardbol，#6905） |
| **技术债** | 🟡 依赖更新 PR 积压严重（4 个 PR，最长 28 天） |

**维护者优先行动建议**：① 处理 P0 级跨用户内存泄漏 #6900；② 合并或关闭积压 28 天的 release PR #5598；③ 跟进 #6937/#6938 技能双 PR 评审，推动 #6941 落地；④ 为 #6752/#6834 两个用户阻塞型 bug 分配负责人。

---

*报告生成时间：2026-07-31 | 数据来源：github.com/nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-07-31

---

## 今日速览

过去24小时内，LobsterAI 项目保持高活跃度：共产生 10 条 PR 更新，其中 7 条已合并/关闭，3 条待合并；Issues 无新增或关闭。核心工作集中在 **cowork 侧边聊天功能完善**、**企业级账户隔离改造**、**安全修复（邮件附件路径穿越）** 及 **Windows 平台安装器健壮性** 上，同时有一项针对 DeepSeek 缓存命中率的性能优化正在待合并队列中。整体来看，项目处于高频迭代、质量加固阶段，社区反馈通过 PR 直接转化的效率较高。

---

## 版本发布

无新版本发布。

---

## 项目进展

今日共 7 个 PR 被合并/关闭，覆盖功能开发、样式统一、安全修复与平台兼容性，具体如下：

### 🏢 企业级多账户隔离（重大架构推进）
- **PR #2409** — `feat(enterprise): isolate account-scoped auth and service flows`，已合并。将认证、媒体、队列化追问、分享及部署状态按账户隔离，防止异步响应串号，并增加企业授权校验及失败回滚。这是向多租户/企业级部署迈出的关键一步，涉及 renderer/docs/main/openclaw/cowork/artifacts 多个模块，影响面广，需关注后续回归测试。

### 💬 Cowork 侧边聊天功能持续完善
- **PR #2397** — `feat(cowork): add isolated /btw side chat`，已合并。新增可编辑浮动侧边面板，支持拖拽、八方向缩放、停止生成及追问；`/btw` 执行与历史独立于主对话，走 OpenClaw 工具流路径。
- **PR #2406** — `fix(cowork): improve side chat input handling`，已合并。面板打开期间持续累积选中文本、移除输入长度限制，同时保留上下文与传输安全检查。

### 🔧 平台与安全修复
- **PR #2412** — `fix(nsis): re-kill survivor processes on every stop poll round`，已关闭。修复 Windows 安装过程中部分进程逃逸导致更新失败的问题，现会在每轮轮询时重新执行 `Stop-Process` 并记录残留进程详情，提升安装器稳定性。
- **PR #2389** — `fix(email): prevent attachment path traversal`，已关闭。对邮件附件文件名做净化并强制下载目录边界，附带跨平台安全测试。这是一项重要的安全加固。

### 🎨 UI/UX 调整
- **PR #2411** — `feat(sidebar): support check-in and banner carousel`，已合并。侧边栏新增签到活动与图片横幅的轮播展示，支持多横幅共存、单条隐藏导航、组关闭与重新打开。
- **PR #2410** — `style(sites): align page layout with management views`，已关闭。统一 Sites 页面与 Skills/MCP 的宽度、间距与搜索样式，提升后台一致性。

---

## 社区热点

今日无 Issue 讨论，PR 评论数均为 0，但以下 PR 从内容上反映了社区高关注方向：

- **[PR #2413 [OPEN]**](https://github.com/netease-youdao/LobsterAI/pull/2413) — `fix(openclaw): keep live prompt tool-result history byte-stable across turns`：修复 Live Prompt 投影因每次请求重新应用 4 倍字符聚合上限而导致历史被重写、进而拉低 DeepSeek 缓存命中率的问题。直接关联 **推理成本与延迟**，是服务端/重度用户高度关注的话题。
- **[PR #2397 [CLOSED]**](https://github.com/netease-youdao/LobsterAI/pull/2397) — `/btw` 侧边聊天功能：该功能允许用户在不打断主对话的前提下进行临时追问，解决多任务并行时的上下文切换痛点，预计将获得高频使用。

分析：社区热点集中在 **LLM API 成本优化** 与 **对话交互灵活性** 两个方向，前者关乎运营成本，后者关乎日常用户体验，均为 AI 助手类产品的核心诉求。

---

## Bug 与稳定性

按严重程度排列：

| 严重程度 | 问题描述 | 状态 |
|---------|---------|------|
| 🔴 高危 | **邮件附件路径穿越**（PR #2389）：附件文件名未净化，可能导致下载越界到任意目录。已有修复并附带跨平台安全测试。 | 已合并 ✅ |
| 🟠 中危 | **Windows 安装器进程残留**（PR #2412）：停止进程只执行一次，若进程在轮询期间仍在退出或重生，会导致安装/更新卡死。修复为每轮强制终止。 | 已合并 ✅ |
| 🟡 低危 | **DeepSeek 缓存命中率下降**（PR #2413）：固定 4x 字符上限导致已缓存历史被重写，降低缓存命中、增加成本。修复方案已提交。 | 待合并 ⏳ |

---

## 功能请求与路线图信号

- **多账户/企业级隔离**（PR #2409）：已合并，信号强烈 — 项目正加速向企业市场渗透，后续可能配套更多企业治理与审计功能。
- **独立侧边对话**（PR #2397、PR #2406）：已落地 `/btw` 侧边聊天，说明用户有频繁的在对话中临时提问而不希望污染主上下文的需求。后续或扩展该面板的更多工具集成。
- **侧边栏签到与横幅**（PR #2411）：商业化/运营功能落地，预示产品在探索增值服务与活动运营。
- **会话标记未读**（PR #1228，4月开启，stale）：用户期望将重要会话标记未读以便跟进，属典型生产力功能，有一定概率纳入后续版本。
- **Modal 交互一致性**（PR #1231，4月开启，stale）：AgentCreateModal 缺少 Escape 关闭与表单重置，用户对 UX 一致性有明确诉求。

---

## 用户反馈摘要

（今日无 Issue 评论，以下信号来源于 PR 描述中的动机阐述）

- **真实痛点：多会话遗忘** — PR #1228 指出用户在多个会话间切换时，重要会话可能被遗忘，需要主动标记未读以便跟进。这是典型的 AI 助手重度用户场景。
- **交互一致性不满** — PR #1231 详细描述了 `AgentCreateModal` 两个 UX 缺陷：按 Escape 无响应、重新打开时残留上次表单数据；并以项目内其他 Modal 的实现作为参照，说明用户对细节体验有较高要求。
- **部署/升级挫折** — PR #2412 的修复源于 Windows 环境下进程残留可能导致安装失败的场景，此类问题对非技术用户影响极大，修复将直接降低升级流失率。
- **成本敏感** — PR #2413 对 DeepSeek 缓存命中率的关注表明用户对长期运行中的 token 成本较敏感，期待稳定且低成本的推理链路。

---

## 待处理积压

以下 PR 长期未合并/未响应，建议维护者优先评估：

- **[PR #1228 [stale, OPEN]**](https://github.com/netease-youdao/LobsterAI/pull/1228) — `feat(cowork): 新增会话「标记为未读」功能`，创建于 2026-04-01，已积压近 4 个月。功能完整（含 Redux action 与 i18n），若仍在路线图内应尽快 review 或关闭。
- **[PR #1231 [stale, OPEN]**](https://github.com/netease-youdao/LobsterAI/pull/1231) — `fix(agent): AgentCreateModal 支持 Escape 键关闭，并在重新打开时重置表单`，创建于 2026-04-01，同样积压 4 个月。属低风险 UX 修复，长期悬置容易让贡献者失去耐心。

另请注意 **PR #2413**（缓存优化）目前处于待合并状态，涉及 `docs/main/openclaw` 模块，若合并将改善生产环境推理成本，建议尽快安排 review。

---

*日报生成时间：2026-07-31 · 数据来源：LobsterAI GitHub 仓库*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-07-31

## 1. 今日速览

过去 24 小时 Moltis 项目保持中高活跃度：共更新 2 个 Issue 和 4 个 PR，无新版本发布。其中 1 个 PR（#1166）已合并，3 个 PR 仍在待合并状态。值得关注的是，今日新增的 Bug 报告直指 Vault 解锁/恢复端点缺失认证（CWE-306），属于安全敏感问题，需要维护团队优先响应。整体看，项目在渠道集成（Slack/Telegram）、可观测性、前端体验三条线并行推进，社区提交质量较高，但 Issue 侧目前缺乏社区讨论互动，反馈闭环尚未形成。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 已合并（1 个）

- **[PR #1166] feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit** — 已合并
  这是今日唯一合入的 PR，构建在此前 #1165 合并的 acknowledgment 机制之上，为 Slack 渠道补齐了消息生命周期管理：包括逐消息确认反应、阶段化状态、重连监督、Block Kit 支持。该合并使 Slack 机器人在队列、取消、重试、回调突发和投递失败等复杂场景下，能安全地给出进度反馈，**显著提升了 Slack 渠道的生产级稳定性**，是项目渠道层能力的一次重要补强。
  https://github.com/moltis-org/moltis/pull/1166

### 待合并（3 个，反映当前重点方向）

- **[PR #1174] Add instrumentation and feedback collection infrastructure** — OPEN，7 月 27 日创建，今日有更新
  构建后端无关的 Agent 观测体系：支持 Langfuse v4 导出、OTLP 后端、用户反馈反应收集，并覆盖 token 用量、缓存命中、推理过程等关键指标。这是项目向可观测性/评估基础设施迈进的核心 PR。
  https://github.com/moltis-org/moltis/pull/1174

- **[PR #1170] fix(channels): gate /sh and privileged tools behind a per-account operators list** — OPEN，7 月 26 日创建，今日有更新
  修复了通过 allowlist 的渠道发送者可触达特权命令和主机工具的安全边界问题，引入按账户的 `operators` 列表进行权限分离。
  https://github.com/moltis-org/moltis/pull/1170

- **[PR #1176] feat(web): add Markdown copy and session export** — OPEN，7 月 30 日创建
  Web 前端体验增强：支持保留原始 Markdown 复制助手回复，以及将会话完整导出为 Markdown 文件。
  https://github.com/moltis-org/moltis/pull/1176

> 整体判断：项目正处于**渠道稳定性加固 + 可观测性基建 + 前端体验优化**三线并进阶段，合入节奏良好，安全修复与功能增强同步推进。

---

## 4. 社区热点

今日新增/更新的 Issue、PR 均无评论，说明社区讨论活跃度较低；但从动态更新频率和问题性质看，以下条目最值得关注：

- **[Issue #1178] [Feature]: Let agents send Telegram inline buttons and receive structured callback responses** — 新开
  由 eddyvlad 提出，请求让 Agent 能够发送 Telegram 内联按钮并接收结构化回调响应。这是 Telegram 渠道交互能力的重要扩展信号，也是较有代表性的 Agent 端用户交互需求。
  https://github.com/moltis-org/moltis/issues/1178

- **[Issue #1177] [Bug]: Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)** — 新开
  由 Practice100101 报告，涉及 Vault 解锁/恢复端点缺少认证，属于安全问题，虽然无评论，但严重程度决定了其应当获最高关注。
  https://github.com/moltis-org/moltis/issues/1177

- **[PR #1174] Add instrumentation and feedback collection infrastructure** — 今日有更新促进度
  该 PR 触及 Agent 可观测性和用户反馈机制，是社区对"Agent 行为可追溯、可评估"诉求的直接回应。
  https://github.com/moltis-org/moltis/pull/1174

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 高（安全） | [#1177](https://github.com/moltis-org/moltis/issues/1177) | Vault 解锁/恢复端点缺少身份验证（CWE-306），可能导致未授权访问敏感恢复接口 | OPEN，无评论，暂无对应 fix PR |

> 该 Bug 属于认证缺失类安全问题（CWE-306），潜在影响面较大。建议维护者尽快复现确认、评估影响范围，并优先分配修复资源。相关安全边界修复 PR #1170 虽不直接解决该问题，但体现了项目在权限收紧方向上的意识，可供参考。

---

## 6. 功能请求与路线图信号

- **[Issue #1178] Telegram 内联按钮与结构化回调** — 新增功能请求
  核心诉求：让 Agent 能在 Telegram 中创建内联按钮，并接收结构化回调响应。这需要渠道层支持 callback payload 的解析与路由。结合已合入的 Slacks 回调处理机制（#1166），Telegram callback 基础设施很可能在下个版本规划中。
  https://github.com/moltis-org/moltis/issues/1178

- **可观测性与反馈收集（PR #1174）** — 当前活跃 PR
  Agent 运行的 Token 用量、缓存、推理过程记录，以及终端用户反馈反应收集，表明项目正将"可观测性"作为核心基础设施来建设，此类能力往往是产品走向企业级部署的前置条件。
  https://github.com/moltis-org/moltis/pull/1174

- **前端 Markdown 体验（PR #1176）** — 当前活跃 PR
  Markdown 复制与会话导出是高频的日常操作需求，预计会较快合入，不涉及破坏性变更。
  https://github.com/moltis-org/moltis/pull/1176

> 路线图信号：权限隔离（#1170）、可观测性（#1174）、渠道交互升级（#1178）三者结合，指向项目正在为"多用户、多 Agent、可审计"的生产环境做准备。

---

## 7. 用户反馈摘要

> ⚠️ 说明：今日新增的 2 个 Issue 均无评论，PR 评论区也无新增讨论。以下反馈信息基于 Issue 描述本身提炼，而非评论对话。

- **安全敏感用户 / 自托管部署者**（#1177）：提交者对安全边界的敏感度较高，报告时详细对照了 CWE 列表并确认使用了最新版本。这类用户往往是生产环境部署者，对认证、权限隔离有硬性要求。若此漏洞得到快速确认与修复，将有助于增强核心用户群的安全信任度。
- **Telegram 渠道深度用户**（#1178）：提交者期望 Agent 能在 Telegram 内实现交互式按钮操作。这类需求通常来自实际业务流中需要人在回路确认的场景（如审批、选择、向导式操作），说明用户不满足于纯文本对话式交互，而是需要结构化交互 UI。
- **前端体验敏感用户**（#1176，PR 侧）：来自 Jonesxq 的提交关注 Markdown 保真复制与完整会话导出，用户需要 Agent 生产内容能够便捷地沉淀到其他知识库或文档系统，反映真实工作流场景。

---

## 8. 待处理积压

当前无达到"长期未响应"级别的 Issue 或 PR。以下条目虽处于正常处理周期内，但已开放数日，建议维护者关注时间线：

- **[PR #1170] fix(channels): gate /sh and privileged tools behind a per-account operators list** — 已开放 5 天（7 月 26 日创建），涉及安全边界，建议尽快 review 并推进合并。
  https://github.com/moltis-org/moltis/pull/1170

- **[PR #1174] Add instrumentation and feedback collection infrastructure** — 已开放 4 天（7 月 27 日创建），代码量大、涉及面广，建议安排充分的 review 资源。
  https://github.com/moltis-org/moltis/pull/1174

- **[Issue #1177] Vault 端点认证缺失（CWE-306）** — 今日新开，但属安全类问题，不应以常规 backlog 节奏处理，建议建立安全响应流程。
  https://github.com/moltis-org/moltis/issues/1177

---

**整体项目健康度评估**：
- ✅ 功能推进节奏稳定，渠道稳定性、可观测性双线并进
- ✅ 社区贡献质量较高（PR 描述详尽、功能考虑完整）
- ⚠️ Issue 侧缺乏社区讨论互动（评论全为 0），反馈闭环有待建立
- 🚨 新出现安全 Bug（CWE-306），需优先响应

*以上为基于 GitHub 数据自动生成的客观分析，仅供参考。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-07-31

## 1. 今日速览

CoPaw 今日保持高活跃度，过去 24 小时内 PR 更新 47 条（其中 21 条已合并/关闭），Issues 更新 21 条（新开/活跃 16 条，关闭 5 条），社区参与热度处于近期高位。无新版本发布，但多个关键修复 PR 正在推进中，涵盖记忆持久化、MCP 工具名合规性、桌面端 Python 环境等多个方向。值得重点关注的是：v2.0 引入的性能回归问题（#6307）讨论持续升温，同时 Auto-Memory 丢失早期会话事件的问题（#6555）已有修复 PR（#6592）提交，反映了项目对稳定性的重视程度。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭了 6 个重要 PR，主要集中在稳定性修复、桌面端能力和文档建设：

| PR | 内容 | 状态 |
|---|---|---|
| [#6596](https://github.com/agentscope-ai/CoPaw/pull/6596) | **对话持久化 WAL 可靠性**：对 JSONL 文件在每轮回复后执行 flush+fsync，解决强制关闭/闪退时丢失最后几轮对话的问题，并优化了落盘原子性 | 已关闭 |
| [#6590](https://github.com/agentscope-ai/CoPaw/pull/6590) | **macOS Computer Use 权限修复**：原生 helper 复用 QwenPaw Desktop 身份，解决 Screen Recording 权限归属问题 | 已关闭 |
| [#6594](https://github.com/agentscope-ai/CoPaw/pull/6594) | **Computer Use 入门文档**：新增中英双语新手文档及网站导航入口 | 已关闭 |
| [#6562](https://github.com/agentscope-ai/CoPaw/pull/6562) | **一次性修复 3 个 Bug**：`/mission` 命令 TypeError（#6533）、`spawn_subagent` 审批级别未继承（#6506）、CI 对 fork PR 的阻断问题（#6563） | 已关闭 |
| [#6256](https://github.com/agentscope-ai/CoPaw/pull/6256) | **沙箱不可用回退行为可配置化**：当沙箱不可用时，用户可配置为提示审批或拒绝，而非固定行为 | 已关闭 |
| [#6424](https://github.com/agentscope-ai/CoPaw/pull/6424) | **Windows/macOS 原生桌面 GUI 自动化（computer_use 工具）**：基于 accessibility-first + Tauri 控制模式，支持窗口发现、截图观察和审批机制 | 已关闭 |

**点评：** 项目在桌面端能力（Computer Use）和可靠性（WAL 持久化、沙箱配置）上迈出了实质性一步。多个长期以来阻塞贡献者的 CI 问题（#6563）也随 #6562 一并解决，预计将释放社区贡献活力。

---

## 4. 社区热点

### 讨论最活跃的 Issue

- **[#6307: v2.0 引入 ~2s 固定性能开销](https://github.com/agentscope-ai/CoPaw/issues/6307)**（7 条评论）
  这是当前社区最关注的问题。从 v1.1.12.post2 升级到 v2.0.0.post3 后，每次简单对话回复（如"今天天气如何"）都会产生约 2 秒的固定开销，与模型延迟无关。用户明确指出问题源自 v2.0 的请求处理架构变更，已影响实际使用体验。

- **[#6563: CI 的 'Real behavior proof' workflow 阻断所有 fork PR](https://github.com/agentscope-ai/CoPaw/issues/6563)**（5 条评论）
  该问题导致所有 fork 来的 PR 都无法通过 CI（`Resource not accessible by integration` 错误），严重阻碍外部贡献。已随 #6562 修复。

- **[#6524: MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/CoPaw/issues/6524)**（5 条评论）
  使用 `streamable_http` 连接远程 MCP Server 时，服务器重启后客户端仍复用旧 session ID，需要执行 `list mcp` 才能重新连接，影响自动化工作流的稳定性。

### 讨论特征
今日热点集中于 **性能回归** 和 **CI 基础设施** 两大问题。性能问题直接关系到用户升级意愿，而 CI 问题的修复则有望提升社区的协作效率。

---

## 5. Bug 与稳定性

按严重程度排列今日报告的 Bug：

### 🔴 严重

- **[#6307: v2.0 引入 ~2s 固定性能开销](https://github.com/agentscope-ai/CoPaw/issues/6307)**（OPEN）
  每次回复产生约 2 秒固定延迟，影响所有用户的实际体验。由 v2.0 架构变更引起，尚无对应 fix PR。

- **[#6555: Dream 记忆压缩错过早期会话事件](https://github.com/agentscope-ai/CoPaw/issues/6555)**（OPEN）
  当天早间的关键操作（如数据迁移、配置修改）在晚间 Dream 进程运行时已被上下文压缩滚动出活跃窗口，导致**永远不会被写入当天记忆文件**。数据永久丢失。**已有 fix PR：[#6592](https://github.com/agentscope-ai/CoPaw/pull/6592)**（在 Scroll 上下文淘汰前 flush Auto-Memory）。

- **[#6589: execute_shell_command 大量输出导致 UI 冻结](https://github.com/agentscope-ai/CoPaw/issues/6589)**（OPEN）
  前端一次性渲染数万行 stdout，阻塞 UI 主线程，用户只能强制关闭应用。与 #6512（输出截断）为同类问题的一体两面。

### 🟡 中等

- **[#6524: MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/CoPaw/issues/6524)**（OPEN）
  复用失效的 `mcp-session-id` 导致工具列表查询失败，需手动执行 `list mcp` 才能恢复。

- **[#6512: execute_shell_command 大输出截断](https://github.com/agentscope-ai/CoPaw/issues/6512)**（OPEN）
  >30KB 的输出会被截断，甚至触发 `Internal error`。用户需要完整的报告/日志/查询结果，建议自动写入文件或提供流式读取。

- **[#6557: MCP 工具名以连字符开头导致严格 LLM API 返回 400](https://github.com/agentscope-ai/CoPaw/issues/6557)**（OPEN）
  如 `-MCP__get_consensus_forecast` 等工具名违反 OpenAI Function Calling 规范，Kimi/Moonshot 等 API 会直接拒绝请求。**已有 fix PR：[#6561](https://github.com/agentscope-ai/CoPaw/pull/6561)**（确保暴露的工具名以字母开头）。

- **[#6588: spawn_subagent 单任务模式不可用](https://github.com/agentscope-ai/CoPaw/issues/6588)**（OPEN）
  `batch=None` 时模型侧 schema 仍将 `batch` 标记为必需，导致单任务子 agent 无法创建。**已有 fix PR：[#6595](https://github.com/agentscope-ai/CoPaw/pull/6595)**（支持空字符串强制转换为可选参数）。

### 🟢 较低

- **[#6578: Cron 任务 dispatch.mode: "final" 未生效](https://github.com/agentscope-ai/CoPaw/issues/6578)**（CLOSED）
  期望仅在任务完成后推送最终回复，但实际所有中间事件都被实时推送。已关闭（可能已通过其他 PR 修复或标记为低优先级）。

- **[#6533: /mission 命令报 TypeError](https://github.com/agentscope-ai/CoPaw/issues/6533)**（CLOSED）
  `_patched_build_master_prompt()` 未接收 `verification_instructions` 参数。已通过 [#6562](https://github.com/agentscope-ai/CoPaw/pull/6562) 修复。

---

## 6. 功能请求与路线图信号

### 可能与已有 PR 关联、有望进入下一版本的需求

| Issue | 需求 | 对应 PR | 信号强度 |
|---|---|---|---|
| [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) | 桌面版配备独立/内置 Python 环境，不依赖系统全局 Python | [#6579](https://github.com/agentscope-ai/CoPaw/pull/6579)（使用 bundled Python 执行脚本） | 高 — 直接解决 Windows 用户常见痛点 |
| [#6453](https://github.com/agentscope-ai/CoPaw/issues/6453) | 文件上传提示中保留中文文件名（而非 UUID 化路径） | [#6567](https://github.com/agentscope-ai/CoPaw/pull/6567)（保留原始文件名，尤其 CJK） | 高 — 已实现 |
| [#6559](https://github.com/agentscope-ai/CoPaw/issues/6559) | 会话列表需要父子层级分组，区分主动会话与自动分叉 | 无直接 PR | 中 — 反映会话管理复杂度上升，可能进入后续迭代 |

### 新提出的功能需求

- **#6593**：[增加统一且专业的清理页面](https://github.com/agentscope-ai/CoPaw/issues/6593)（新建）
  长期使用后自动记忆、工具调用、备份等产生大量数据且无统一管理入口。用户建议提供全局清理页面 + 自动化清理选项，并支持删除会话时选择是否清理对应工作区目录。这是当前社区对"数据生命周期管理"最明确的需求信号。

- **#6083**：[Desktop 增加工作区产出物快捷访问](https://github.com/agentscope-ai/CoPaw/pull/6083)（持续活跃）
  希望在 Desktop 窗口内一键直达工作区文件夹或直接下载最近产出物，避免手动导航到 `~/.qwenpaw/workspaces/<agent_id>/`。

- **#6512**：同前，`execute_shell_command` 大输出建议自动落盘或提供流式读取机制。

- **#6585**：聊天框"已接收多少字符"的动态显示增加关闭入口，避免注意力干扰。

- **#6587**：桌面应用名从"QwenPaw Desktop"简化为"QwenPaw"。

- **#6583**：对话框拖入较多文件时支持多行完整显示文件名。

- **#6452**：优化"当前模型未检测到多模态能力"的提示方式，参考类 openclaw 工具的做法。

**路线图预判：** 基础设施类（Python 环境、MCP 工具名合规、输出流式化）预计优先落地；体验优化类（中文文件名、UI 开关、清理页面）依赖社区贡献者跟进；会话管理（#6559）为中期方向。

---

## 7. 用户反馈摘要

### 积极反馈

- **`fancyboi999` 提交了 Console 静态资源缓存和压缩的 PR**（[#6232](https://github.com/agentscope-ai/CoPaw/pull/6232)），明确其动机是"在带宽受限连接上，最大的 JS bundle 必须未压缩传输且无法缓存"，改善 Web 端加载体验。
- **`jinglinpeng` 的 Computer Use 功能**收到较多关注，用户对桌面 GUI 自动化 + 应用级审批的安全设计有期待。
- **多个 first-time-contributor 持续提交高质量 PR**（如 `RerankerGuo` 的 5 个 PR），说明项目对社区的吸引力在增强。

### 负面反馈 / 痛点

| 痛点 | 用户原声摘录 | 来源 Issue |
|---|---|---|
| **性能回归** | "v1.x 没有这个开销，升级后每次回复都慢 2 秒" | [#6307](https://github.com/agentscope-ai/CoPaw/issues/6307) |
| **记忆丢失** | "这些操作的信息便永远不会被写入当天的记忆文件" | [#6555](https://github.com/agentscope-ai/CoPaw/issues/6555) |
| **流程中断** | "用户需要离开 Desktop 窗口 → 打开资源管理器 → 手动导航… 中断了工作流" | [#6083](https://github.com/agentscope-ai/CoPaw/issues/6083) |
| **MCP 稳定性** | "服务端原有的 MCP session 会失效，此后 QwenPaw 仍复用旧 session" | [#6524](https://github.com/agentscope-ai/CoPaw/issues/6524) |
| **UI 干扰** | "这个动态显示闪的眼睛疼" | [#6585](https://github.com/agentscope-ai/CoPaw/issues/6585) |
| **CJK 文件名损坏** | "把中文改成不可识别字符，太长也极不友好" | [#6453](https://github.com/agentscope-ai/CoPaw/issues/6453) |
| **数据臃肿** | "长期使用后 qwenapw 会混乱不堪加大的空间占用" | [#6593](https://github.com/agentscope-ai/CoPaw/issues/6593) |
| **Python 环境依赖** | "系统中没装 Python 环境，执行脚本提示未安装" | [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) |

---

## 8. 待处理积压

### 长期未获响应的 PR（需维护者关注）

| PR | 创建时间 | 描述 | 状态 |
|---|---|---|---|
| [#5739](https://github.com/agentscope-ai/CoPaw/pull/5739) | 2026-07-02 | 聊天消息文本选择 + 自动复制 | OPEN，已 29 天 |
| [#5740](https://github.com/agentscope-ai/CoPaw/pull/5740) | 2026-07-02 | JSON 配置支持 `${ENV_VAR}` 环境变量引用 | OPEN，已 29 天 |
| [#5745](https://github.com/agentscope-ai/CoPaw/pull/5745) | 2026-07-02 | 持久化对话产物中敏感信息脱敏 | OPEN，已 29 天 |

> 以上三个 PR 均由 `RerankerGuo` 提交，含安全加固（密钥脱敏）和配置体验改进（env 引用），长时间未合并。结合该贡献者还有多个活跃 PR，维护者需尽快处理以免打击社区贡献积极性。

### 关键 Issue（性能/数据安全相关，需优先排期）

- **[#6307](https://github.com/agentscope-ai/CoPaw/issues/6307)**: v2.0 性能回归，已讨论 10 天无 fix PR，影响所有用户升级体验。
- **[#6083](https://github.com/agentscope-ai/CoPaw/issues/6083)**: 工作区快捷访问，已开放 17 天，为高频操作流程优化。
- **[#6524](https://github.com/agentscope-ai/CoPaw/issues/6524)**: MCP 断线重连，影响自动化集成方案的可靠性。
- **[#6512](https://github.com/agentscope-ai/CoPaw/issues/6512)**: 大输出截断/报错，与 #6589（UI 冻结）关联，建议统筹设计输出流式化方案。

### 风险提示

1. **性能回归（#6307）** 已成为用户升级到 v2.0 的最大障碍，建议优先定位并给出修复或回归计划。
2. **大量中文用户体验类请求**（#6453, #6583, #6585, #6587）堆积，虽然单个工作量不大，但集中体现在地化细节打磨不足，影响 Windows 桌面端用户口碑。
3. **first-time-contributor PR 积压** 若继续，可能导致社区贡献热情降温。建议明确 triage 节奏和响应 SLA。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 — 2026-07-31

---

## 1. 今日速览

过去 24 小时 ZeptoClaw 仓库共产生 1 条 PR 更新、0 条 Issue 更新、0 个新版本发布，整体维护活跃度处于**中等偏低水平**。当前唯一活跃的 PR #645 是一份面向运行时安全的修复方案，旨在解决子进程环境变量泄露凭证、超时进程树未被回收这两个稳定性问题，反映出项目目前重点仍在**运行时的安全加固与资源生命周期管理**方向。该 PR 已处于待合并状态，若顺利落地将显著提升项目在生产环境中的安全性与可靠性。

---

## 2. 版本发布

过去 24 小时无新版本发布，当前无可用发布信息。

---

## 3. 项目进展

**待合并 PR（1 条）：**

| PR | 标题 | 状态 | 创建时间 | 最后更新 |
|----|------|------|----------|----------|
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | fix(runtime): scrub subprocess secrets and reap timed-out process trees | OPEN / 待合并 | 2026-07-23 | 2026-07-30 |

**进展分析：**

PR #645 是当前唯一活跃的变更，核心包含两个修复点：

1. **子进程环境变量清理（Secrets Scrubbing）**：此前 runtime 执行 shell 命令时继承了 ZeptoClaw 的完整进程环境，导致 provider 密钥及不相关的凭据可能被透传至模型编写的命令中。这是一个典型的安全边界漏洞，修复后将显著降低敏感信息跨进程泄漏的风险。
2. **超时进程树回收（Process Tree Reaping）**：运行时超时后此前直接丢弃 `Command::output()` 的 future，未能一致性地终止并回收子进程树，可能造成僵尸进程和资源泄漏；修复同时覆盖了 Docker 容器场景，意味着容器化的执行环境也将获得更可靠的超时清理。

尽管该 PR 尚未合并，但方向明确地指向了**安全隔离**和**资源可控性**两个维度，对依赖 ZeptoClaw 执行模型编写命令的 Agent 类应用而言，属于关键的基础设施级加固。

---

## 4. 社区热点

过去 24 小时仓库内无公开的 Issue 讨论或 PR 评论数据产生（PR #645 未携带评论/反应数据）。值得关注的是，PR #645 自 7 月 23 日创建后已持续 8 天，期间于 7 月 30 日有过更新，反映提交方仍在积极维护该修复分支。

该 PR 本身代表了社区当前最集中的技术关注点——模型指令执行路径的**安全性**与**可靠性**。在 AI Agent 场景下，模型产出的命令天然可能包含不可信的 shell 操作，社区对"命令执行环境必须与宿主环境隔离"的诉求日趋强烈。

---

## 5. Bug 与稳定性

当前无新报告的 Issue。PR #645 对应修复了两项已识别的稳定性/安全问题，按严重程度排列如下：

| 严重程度 | 问题描述 | 对应修复 | 状态 |
|----------|----------|----------|------|
| **高** | 运行时 shell 命令继承 ZeptoClaw 完整环境变量，provider 密钥等敏感凭据可能被透传至模型编写的命令，存在信息泄露风险 | PR #645（scrub subprocess secrets） | 待合并 |
| **中** | 运行时超时后未一致地终止并回收子进程树，且 Docker 容器场景同样受影响，可能造成进程/容器资源泄漏 | PR #645（reap timed-out process trees） | 待合并 |

两项问题已有明确的修复方案，待维护者 review 后合入主干。建议在合并前补充针对敏感环境变量过滤的单元测试，以及超时场景下的集成测试。

---

## 6. 功能请求与路线图信号

过去 24 小时无新 Issues，无公开功能请求。从 PR #645 的技术路线可以推断以下两个方向或成为后续版本的能力重点：

- **安全执行环境**：对运行时子进程实施细粒度的环境变量白名单/黑名单机制，考虑引入 seccomp 或 gVisor 等更强的隔离方案；
- **资源生命周期治理**：完善的进程树跟踪与回收、容器超时清理策略，可能与未来的并发任务调度能力直接相关。

建议维护者在下一个版本规划中，将上述两项能力纳为首要考量，以满足生产级 Agent 应用的准入要求。

---

## 7. 用户反馈摘要

过去 24 小时无新 Issue 评论或用户反馈数据可提炼。基于 PR #645 的补丁内容，可以间接感知到用户侧存在以下潜在诉求：

- **安全敏感场景**：用户在使用模型编写命令时，不希望自己的 provider 密钥、API token 等敏感信息暴露在子进程环境中，这可能是企业级/生产级用户的核心关切；
- **长时间运行的命令可靠性**：当命令超时时，用户希望进程能被彻底清理，而非残留后台进程占用资源，尤其在使用 Docker 容器隔离的场景下。

这些信号虽非直接的评论反馈，但从修复内容不难看出，社区用户对该运行时的安全性提出了实质性的生产需求。

---

## 8. 待处理积压

**重点提醒：**

- **PR #645**（https://github.com/qhkm/zeptoclaw/pull/645）：自 2026-07-23 创建至今已 8 天，处于待合并状态。该 PR 涉及安全修复（secrets 泄露）和稳定性修复（进程树回收），长期滞留会持续暴露生产环境风险，建议维护者优先安排 review 并推动合入。

当前无长期未响应的公开 Issue。

---

*报告生成时间：2026-07-31 ｜ 数据来源：GitHub (qhkm/zeptoclaw)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-07-31

## 1. 今日速览

过去 24 小时 ZeroClaw 保持高活跃度：共发生 17 条 Issue 更新与 50 条 PR 更新，但合并效率偏低，仅 1 条 PR 关闭（#9211），另有 49 条 PR 仍在等待审查或作者回应。今日最关键的进展是 #9211 关闭，完成了 release 资产认证机制的整合，直接对应高优先级 Issue #9101。与此同时，社区提交了多个高严重度 Bug 报告，包括 S0 级 webhook 未鉴权漏洞（#9565）和 Unix 命令白名单回归（#9566），且均已在当天给出修复 PR。项目正处于 v0.8.4 维护列车收尾期（跟踪器 #8357 今日到期），整体判断为「活跃度极高、安全响应快、但合并与长线需求落地存在积压」。

## 2. 版本发布

无。过去 24 小时无新版本 Release。需关注 v0.8.4 维护列车跟踪器（#8357）目标日期为 2026-07-31，发布计划与范围清单应以里程碑页为准。

## 3. 项目进展

今日唯一关闭的 PR 是 **#9211**，对应高优先级 Issue #9101「整合发布认证机制」。该 PR 将 GitHub artifact attestations 定位为可下载发布资产唯一 provenance 机制，统一 SBOM 生成与信任链打包，目标将发布资产从 53 个收敛到约 20 个。虽然该 PR 状态为 CLOSED，但 Issue #9101 仍为 OPEN，维护者需确认是否同步关闭。

同时，今日针对新报告的安全/稳定性问题快速提交了多个修复 PR：

- **#9569** — 修复 WhatsApp Cloud / Linq webhook 在未配置 secret 时跳过签名校验的问题，改为 fail closed；
- **#9568** — 修复 Unix 上 `allowed_commands` 大小写匹配回归，改为大小写不敏感；
- **#9571** — 直接移除 WATI 通道，从根源消除对应 webhook 风险面。

这些修复的及时提交表明项目对安全问题响应迅速，但合并大量积压 PR 仍是当前瓶颈。

## 4. 社区热点

讨论热度最高的集中在以下 Issue：

- **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) — RFC: 将对话历史与 agent 长期记忆分离（12 条评论）**  
  这是今日讨论最激烈的话题。核心诉求是区分「会话历史」与「agent 长期记忆」两个生命周期概念，目前 runtime/gateway/channel 的 autosave 路径将对话轮次写入 `MemoryCategory::Conversation`，在架构上造成记忆污染。该 RFC 与 PR #9325 的方向吻合，说明社区已有初步实现探索。

- **[#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — 整合发布认证机制（8 条评论，今日更新）**  
  围绕 v0.8.3 中三套并行签名/来源机制（cosign、GitHub attestations、slsa-github-generator）的冗余问题展开讨论。今日 #9211 关闭后，该 Issue 仍有待维护者收尾。

- **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — OpenAI Chat Completions 适配器 RFC（7 条评论）**  
  用户希望以 OpenAI 兼容 API 接入 Open WebUI、LobeChat 等现有生态，当前仅支持 WebSocket 与 webhook 是主要集成障碍。

- **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) — OTel 跨轮会话关联 RFC（7 条评论）**  
  可观测性需求，希望通过 `gen_ai.conversation.id` 携带会话上下文，便于跨轮追踪。

- **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) — 本地小模型运行时配置（7 条评论，2 个 👍）**  
  社区对本地优先模式呼声较高，诉求包括削减 prompt 膨胀、禁用宽松回退解析、防止内部指令泄漏。

整体来看，社区讨论的热点集中在三方面：架构关注点分离（记忆/对话）、生态互操作（OpenAI 兼容）、本地小模型体验。

## 5. Bug 与稳定性

当日报告 7 个 Bug / 回归问题，按严重程度排列：

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| **S0** 数据丢失/安全风险 | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | WhatsApp Cloud、Linq、WATI 三个 webhook handler 在未配置 secret 时跳过签名校验，攻击者可未认证投递消息给 agent。 | 已有 #9569（fail closed）与 #9571（移除 WATI） |
| **S2** 降级行为 | [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) | `allowed_commands` 含大写字符时在 Unix 上永远无法匹配，命令被静默拒绝（回归自 #4552）。 | 已有 #9568（大小写不敏感匹配） |
| **S2** 降级行为 | [#9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573) | 同一 provider 类型配置多个 alias 时，成本定价查询失败，Agent 路径（Gateway WebSocket / RPC）忽略配置 token 价格。 | 暂无 fix PR |
| **S2** 降级行为 | [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | debug 构建下 gateway WebSocket agent turn 处理可导致 Tokio worker 栈溢出，进程中断。 | 暂无 fix PR |
| **S3** 次要问题 | [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) | `cargo test --doc` 在 Rust 1.96 下因重复 rustdoc theme flag 失败。 | 状态 in-progress |
| 稳定性/CI 质量 | [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) | 要求在 PR CI 中增加 rustdoc warnings 门禁，防止零警告状态回退（已接受为任务）。 | 状态 accepted |

此外，今日未发现新的崩溃类回归，但 #9572 的栈溢出提示 debug 构建的递归/调用深度问题值得后续排查。

## 6. 功能请求与路线图信号

当前功能请求主要分为三个梯队：

1. **已在讨论的架构级 RFC（短期内不会进入 v0.8.4，但可能影响后续大版本）**：  
   - #9048 会话历史与长期记忆分离  
   - #8603 OpenAI Chat Completions 兼容适配器  
   - #8780 Gemini Live 实时语音通道  
   - #8568 Mixture-of-Agents 虚拟模型 provider  
   - #8933 OTel 跨轮会话关联  

2. **已 accepted 但尚未实现（应优先补排期）**：  
   - #5287 本地小模型运行时 profile（创建于 4 月，已 3 个月）  
   - #7951 努力程度驱动的本地/云模型路由  
   - #9345 PR risk/size 标签自动重算  
   - #9545 rustdoc 警告门禁  

3. **今日新出现的功能信号**：  
   - #9567 邮件通道支持多 To/Cc/Bcc 收件人（PR 已提交，stacked on #9506）  
   - #9571 移除 WATI 通道（安全收敛方向，也符合「少维护面」思路）  

结合 v0.8.4 维护列车 #8357 今日到期，上述新功能大概率落入 v0.8.4 之后的版本。安全修复类 #9565/#9566 应尽快以 patch 形式进入维护线。

## 7. 用户反馈摘要

从今日 Issue 与评论中可提炼用户真实痛点：

- **WebChat 流式输出体验不佳**（#9562）：用户 Mental-Vortex 反馈 agent 回复期间自动滚动会覆盖手动滚动，导致无法阅读历史消息。该 issue 引用了 openclaw 的类似 PR #81629 / #7648，说明这是一个跨项目普遍问题。
- **本地模型用户迫切需要「轻量模式」**（#5287）：多个评论强调提示膨胀、内部 tool/系统指令泄漏到用户可见输出的痛点，期待 ZeroClaw 定义 compact local_small profile。
- **生态互操作需求强烈**（#8603）：用户希望直接使用 Open WebUI、LobeChat 等 OpenAI 兼容客户端，而不是为每个渠道手写 adapter。
- **对安全问题的敏感度上升**（#9565/#9566）：安全研究者 JordanTheJet 通过源码审计发现 webhook fail-open 问题并直接提交修复 PR，社区对「可信默认值」的期待在提高。
- **配置与调试体验仍有摩擦**（#9573/#9572/#9566）：多别名定价、debug 栈溢出、大小写匹配回归，说明配置解析和 debug 构建稳定性是当前容易踩坑的模块。

整体用户情绪：项目功能前瞻性强（RFC 质量高），但存量 Bug 和待合并 PR 的堆积正在形成体验摩擦。

## 8. 待处理积压

需要维护者重点关注以下长期未落地或卡住的条目：

| 类型 | 条目 | 创建时间 | 状态 | 风险/备注 |
|---|---|---|---|---|
| Issue | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) 本地小模型配置 | 2026-04-04 | accepted | 已接受近 4 个月无实现，社区有 2 个 👍 |
| Issue | [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) 努力程度路由 | 2026-06-19 | accepted | 已接受但仅 1 条评论，缺少推进者 |
| PR | [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) 技能紧凑注入默认化 | 2026-06-25 | open, risk:high | 开放超 5 周，需 maintainer review |
| PR | [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) 可信目标工具与委派边界 | 2026-07-04 | needs-author-action, size:XL | 大 PR，等待作者更新 |
| PR | [#8968](https://github.com/zeroclaw-labs/zeroclaw/pull/8968) WeChat iLink 错误上报 | 2026-07-11 | stale-candidate | 已标记 stale，若作者不回应可能被关闭 |
| PR | [#8953](https://github.com/zeroclaw-labs/zeroclaw/pull/8953) Ollama dev 模板配置修正 | 2026-07-10 | stale-candidate | 同样面临 stale 关闭风险 |

另外，大量 PR（#8927、#8928、#8937、#8878、#8969、#9410 等）处于 `needs-author-action`，维护者应设置截止时间，避免长期占用队列。最后，建议在 #9211 关闭后同步更新 #9101 状态，并基于 #8357 发布 v0.8.4 的最终范围确认。

---

**项目健康度小结**：活跃度与安全响应评分高，但 PR 合并吞吐量低、accepted 功能落地周期长。若能在 v0.8.4 收尾后集中清理一批 stale PR 与 accepted Issue，项目健康度将有明显提升。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*