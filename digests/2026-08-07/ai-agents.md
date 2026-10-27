# OpenClaw 生态日报 2026-08-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-07 02:55 UTC

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

# OpenClaw 项目动态日报 — 2026-08-07

## 1. 今日速览

过去 24 小时项目活跃度极高：共 500 条 Issue 更新（新开/活跃 430 条，关闭 70 条），500 条 PR 更新（待合并 397 条，合并/关闭 103 条），无新版本发布。值得关注的是两起 P0 级问题同时亮红灯——Agent DB v14→v15 迁移失败导致 Gateway 拒绝启动（[#119263](https://github.com/openclaw/openclaw/issues/119263)），以及 `sessionEntry.totalTokens` 膨胀引发过早压缩并造成数据丢失（[#118772](https://github.com/openclaw/openclaw/issues/118772)）。社区讨论热点集中在 DeepSeek V4 Flash 静默失败（114 条评论）与 Linux/Windows 桌面应用缺失（116 条评论、80 👍）。另一方面，`clawsweeper[bot]` 自动生成修复 PR（[#120076](https://github.com/openclaw/openclaw/pull/120076)）表明项目已具备自动化修复管道，工程治理体系成熟度较高。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共有 103 个 PR 被合并或关闭；在评论数最高的 PR 列表中，6 个被标记为 `close:superseded`（被后续方案取代），反映出维护者正在积极整合社区贡献，而非简单合并：

- **sandbox 隔离方向**：[#118409](https://github.com/openclaw/openclaw/pull/118409)（gateway 锁文件隔离）和 [#119226](https://github.com/openclaw/openclaw/pull/119226)（lock dir 推导自 state dir）被超集，两者均针对 `OPENCLAW_STATE_DIR` 沙箱隔离问题，预计合并进更完整的方案。
- **memory 状态报告方向**：[#119240](https://github.com/openclaw/openclaw/pull/119240)、[#117572](https://github.com/openclaw/openclaw/pull/117572)、[#118421](https://github.com/openclaw/openclaw/pull/118421) 全部被超集，三者都在修复 `openclaw memory status` 快速路径下 "Vector store: unknown" 的误报问题（#92102），说明项目正在收敛出统一修复 PR。
- **ACP runtime 方向**：[#119573](https://github.com/openclaw/openclaw/pull/119573) 被超集，涉及 ACP 绑定会话未传递 agent 配置模型的问题。

新提交的活跃 PR 显示项目正聚焦于以下三个方向：

- **通道韧性**：[#120126](https://github.com/openclaw/openclaw/pull/120126) 修复 Telegram 错误通知发送失败时的静默吞没问题；[#120104](https://github.com/openclaw/openclaw/pull/120104) 修复 turn 在 adoption 前失败时 ingress claim 卡死的问题（关联 #119979/#119971）。
- **MCP 体验**：[#120076](https://github.com/openclaw/openclaw/pull/120076) 由 `clawsweeper[bot]` 自动生成，修复 `openclaw mcp login` 未监听 loopback 回调导致授权码滞留浏览器的问题（#120019）。
- **模型选择**：[#119325](https://github.com/openclaw/openclaw/pull/119325)（size XL, P1）新增 session-only 的 `/model -s` 选择能力，填补 #115717 遗留的会话级模型选择空白，涉及 Discord/Telegram/codex/copilot 等多个扩展。

---

## 4. 社区热点

### 讨论最热

| Issue | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 116 | 80 | CLOSED |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure | 114 | 0 | CLOSED |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 28 | 0 | OPEN |

**诉求分析：**

- **跨平台桌面端仍是最大呼声**：#75 虽已关闭，但 116 条评论、80 个 👍 证明社区对 Linux/Windows 原生应用的强烈需求。macOS/iOS/Android 已有应用，类 macOS 功能集的桌面端缺失显著限制了 OpenClaw 在 PC 工作流（家庭自动化、企业场景）中的渗透。
- **模型故障透明化诉求集中爆发**：#116277 中 DeepSeek V4 Flash 在 Telegram 群聊中静默失败并只发布通用 fallback 文案，用户无法区分"模型故障"与"助手拒绝回答"，引发 114 条讨论。这与此前 #88657（同模型不完整 turn）形成系列问题，指向 **OpenRouter 等聚合层稳定性**已成为 OpenClaw 生产环境中最大的不确定性来源。
- **记忆安全成为新兴关注点**：#7707 提出的按来源（用户命令/网页抓取/第三方技能）对记忆条目做信任标记，潜在用例是防记忆投毒攻击。该议题虽评论不多，但横跨 `security` + `session-state` 双 impact 标签，且处于 `needs-maintainer-review` 状态，值得维护者重点关注。

---

## 5. Bug 与稳定性

按严重程度排列（🦞 = 高价值评级，来自 issue-rating 体系）：

### P0 — 阻断/数据丢失级

- **[#119263](https://github.com/openclaw/openclaw/issues/119263)**（P0, 🦞） Agent DB v14→v15 迁移失败：`no such column: entry_valid` 导致迁移事务回滚，Gateway 拒绝启动。影响所有从 2026.7.1 升级到 2026.7.2 的用户。已有 linked PR 在修。
- **[#118772](https://github.com/openclaw/openclaw/issues/118772)**（P0, 🦞） 2026.7.1+ 的 `sessionEntry.totalTokens` 被多工具循环轮的累计 usage 膨胀，导致会话在 **上下文窗口的 4–8%** 即触发压缩，造成数据丢失。属于回归问题，已有 linked PR 在修。

### P1 — 高影响

| Issue | 问题摘要 | 修复 PR 状态 |
|---|---|---|
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动自 2026.7.1-beta.1 → 2026.7.2-beta.7 回归 ~2.5x（1-vCPU 容器） | 无 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 因 stale `expectedLeafEntryId` 被误报 "thread switched branches"，高发在内部重试/压缩后 | 有：[#116382](https://github.com/openclaw/openclaw/pull/116382) |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 通道消息因 reply token 过期 + 缺少 push fallback 而静默丢失 | 有 linked PR |
| [#117445](https://github.com/openclaw/openclaw/issues/117445) | `@openclaw/feishu` 插件（2026.7.2-beta.5）将入站 DM 解码为 `?`，永不回复 | 有 linked PR |
| [#109881](https://github.com/openclaw/openclaw/issues/109881) | Bedrock `bedrock-converse-stream` 缺少 thinking-signature 重放保护，"Invalid signature" 会**永久性损坏** Claude 4+ 会话 | 无 |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | WhatsApp 群聊并发 @mention 时，较早完成的回复只在 dashboard 可见、不投递到 WhatsApp | 无 |
| [#117358](https://github.com/openclaw/openclaw/issues/117358) | Post-turn 压缩忽略已有压缩/重置边界，反复压缩长会话并延迟已完成的回复投递 | 有 linked PR |
| [#117609](https://github.com/openclaw/openclaw/issues/117609) | 瞬时 LLM/socket 错误在 channel 和 one-shot job 有重试，但 embedded-assistant 阶段无重试，长 turn 整体死亡 | 无 |
| [#119333](https://github.com/openclaw/openclaw/issues/119333) | Codex 的 `request_user_input` 在 Default 模式暴露但运行时被拒 | 无 |

### P2 — 值得关注

- **[#119796](https://github.com/openclaw/openclaw/issues/119796)**（🦞, source-repro）：Windows 下 vitest teardown 报 `EBUSY unlink`，agent state DB 句柄未释放，影响 Windows 开发者测试体验。
- **[#116512](https://github.com/openclaw/openclaw/issues/116512)**（🐚）：Telegram `streaming.mode: "progress"` 下，snapshot ID 变化导致首条 commentary 在进度气泡中重复显示。
- **[#114154](https://github.com/openclaw/openclaw/issues/114154)**：`bundle-mcp` 工具通过策略校验且 server 健康，但 agent 会话从不加载它，ToolSearch 零结果。
- **[#86050](https://github.com/openclaw/openclaw/issues/86050)**（🦞, regression）：`claude-cli` 后端时 Gateway 缓冲全部 stream 事件，WebChat/TUI 只有最终消息而无流式输出。

---

## 6. 功能请求与路线图信号

### 高价值新需求（社区反复提及）

- **记忆与安全**：#7707 Memory Trust Tagging（按来源标记信任等级）、[#15032](https://github.com/openclaw/openclaw/issues/15032)（per-spawn 工具限制，用于构建 DMZ 式防注入搜索管道）。
- **子代理编排**：[#27445](https://github.com/openclaw/openclaw/issues/27445)（`announceTarget` 让子代理完成通知路由到父会话）、[#44309](https://github.com/openclaw/openclaw/issues/44309)（A2A 单向派发模式，避免 reply-back ping-pong）。
- **自主管理**：[#6757](https://github.com/openclaw/openclaw/issues/6757)（agent 自主触发上下文压缩的 self-compact 工具，由 agent 自行提交的请求）、[#6599](https://github.com/openclaw/openclaw/issues/6599)（`/models test-fallback` 命令验证 fallback 链）、[#45771](https://github.com/openclaw/openclaw/issues/45771)（pace-aware 速率限制）。
- **可观测性**：[#87362](https://github.com/openclaw/openclaw/issues/87362)（向插件 SDK 暴露 task flow 生命周期 hook 事件）。

### 可能进入下一版本的功能（依据现有 PR 推断）

- **session-only 模型选择**（[#119325](https://github.com/openclaw/openclaw/pull/119325)）：XL 尺寸 P1 PR，涉及多通道，是 #115717 的延续，预计 2026.7.x 后续版本落地。
- **memory 搜索 rerank 阶段**（[#89584](https://github.com/openclaw/openclaw/pull/89584)）：可选 cross-encoder 重排序增强 sqlite-vec 首阶段检索，带 ✨ showcase 标签，属官方背书的功能型 PR。
- **压缩机制的整体重构信号**：多条 P0/P1 压缩相关 bug（[#118772](https://github.com/openclaw/openclaw/issues/118772)、[#115546](https://github.com/openclaw/openclaw/issues/115546)、[#95553](https://github.com/openclaw/openclaw/issues/95553)）指向当前压缩生命周期存在系统性缺陷，维护者很可能在下一个 minor 版本集中整改。
- **`fix-shape-clear` + `queueable-fix` 标记**（如 [#88079](https://github.com/openclaw/openclaw/issues/88079)、[#44289](https://github.com/openclaw/openclaw/issues/44289)）代表问题形态清晰、可立即排期修复，是下一批 PR 的高概率来源。

---

## 7. 用户反馈摘要

- **积极评价**：[#73537](https://github.com/openclaw/openclaw/issues/73537) 用户 Reneb-cafe 表示 OpenClaw 已成为其家庭与商业日常流程的一部分（Telegram + 自动化 + cron + Home Assistant 控制），同时建议为 release 增加生产就绪稳定性标签——反映出**真实生产环境用户在意版本风险信号**。
- **最大痛点：消息静默丢失**。多个通道（LINE [#86012](https://github.com/openclaw/openclaw/issues/86012)、WhatsApp [#92186](https://github.com/openclaw/openclaw/issues/92186)、Feishu [#117445](https://github.com/openclaw/openclaw/issues/117445)、Telegram [#116277](https://github.com/openclaw/openclaw/issues/116277)）均出现"发出去无响应/回复未投递"的问题，且用户侧无感知、dashboard 才可见。这是**影响信任度**的严重体验问题。
- **压缩机制频繁误伤用户**：[#115546](https://github.com/openclaw/openclaw/issues/115546) 报告 CLI-budget 压缩在大 session 上 100% 失败且 4.9s 即超时；[#118772](https://github.com/openclaw/openclaw/issues/118772) 在 4-8% 上下文占用时即误触发压缩造成数据丢失。压缩已成为当前版本最影响稳定性的子系统。
- **Windows 生态体验短板集中暴露**：[#119796](https://github.com/openclaw/openclaw/issues/119796)（EBUSY 锁）、[#117644](https://github.com/openclaw/openclaw/issues/117644)（agent 在 PowerShell 中发出 Unix 命令）、[#58139](https://github.com/openclaw/openclaw/issues/58139)（Docker bind mount 同步延迟）——三连击说明 Windows 环境缺少足够的 CI 覆盖。
- **CLI 误导性报错**：[#117471](https://github.com/openclaw/openclaw/issues/117471) `cron remove` 实际删除成功但 CLI 以非零退出并报"invalid params"，用户对命令结果产生困惑。

---

## 8. 待处理积压

以下长期未关闭且处于 `needs-maintainer-review` / `needs-product-decision` 状态的高价值 Issue，建议维护者优先排期响应：

| Issue | 创建时间 | 状态 | 积压时长 | 备注 |
|---|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 2026-02-03 | OPEN | ~6 个月 | 记忆安全方向，需求清晰 |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) Per-spawn tool restrictions | 2026-02-12 | OPEN | ~6 个月 | 安全防线，有具体 DMZ 用例 |
| [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` option | 2026-02-26 | OPEN | ~5.5 个月 | 子代理编排关键能力，有 linked PR |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) `/models test-fallback` command | 2026-02-01 | OPEN | ~6 个月 | 简单且低成本高收益的运维工具 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent-triggered compaction | 2026-02-02 | OPEN | ~6 个月 | 结合当前压缩 bug 潮，应重新评估 |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) Windows vitest EBUSY | 2026-08-06 | OPEN | 1 天 | 新开但已 source-repro，Windows 生态关键修复 |

**整体健康度评估**：社区提交活跃度极高（430 条新开/活跃 Issue），但 PR 合并/关闭率仅 20.6%（103/500），维护者吞吐存在瓶颈。当前最大技术债集中在 **context compaction 生命周期**（3 个 P0/P1 + 高评论量）和**多通道消息投递可靠性**上。自动化修复管道（clawsweeper[bot]）的运行为积压问题提供了增量消解能力，但系统性修复仍依赖维护者介入。建议下一版本优先处理 DB 迁移阻断（#119263）和 token 膨胀数据丢失（#118772）两个 P0，并考虑针对 Windows 补充 CI 矩阵。

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告

**报告日期：2026-08-07 ｜ 数据窗口：过去 24 小时 ｜ 覆盖项目：13 个**

---

## 1. 生态全景

当前生态呈现"一超多强、分层演进"格局：OpenClaw 以单日 500 条 Issue + 500 条 PR 的体量断层领先，并催生了以 "Claw" 命名的衍生项目集群（NanoClaw、PicoClaw、ZeroClaw、IronClaw 等），而 Hermes Agent、CoPaw、NanoBot 等独立框架在桌面深度集成、Qwen/AgentScope 互操作、轻量 WebUI 等细分场景构建差异化壁垒。生态整体已越过"功能拼图"阶段，进入"生产可靠性"竞争期——多项目同时涌现上下文压缩数据丢失、通道消息静默丢失、凭据泄漏等 P0/P1 级问题，说明真实生产负载正在暴露系统级短板。与此同时，可观测性（IronClaw Inspector、Hermes verify）、安全加固（NanoBot、ZeroClaw）与 A2A 多代理编排正成为下一阶段的主战场。

---

## 2. 各项目活跃度对比

| 项目 | Issue（新开/活跃｜关闭） | PR（合并/关闭｜待合并） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 430｜70（共 500） | 103｜397（共 500） | 无 | 极高活跃、生产级规模；2 个 P0 数据丢失级 bug；合并率仅 20.6%，维护吞吐承压 |
| **Hermes Agent** | 47｜3 | 11｜39 | 无 | 高强度；god-file 重构 + 插件生态并行；MCP 崩溃当日修复，Feishu 系列 4 个月未决 |
| **IronClaw** | 27｜23 | 17｜33 | **v1.1.0**（08-06） | 良好；QA 驱动清障，Inspector 可观测性体系成型；Slack 系列问题待系统性修复 |
| **ZeroClaw** | 24｜12 | 8｜42 | 无（0.8.x） | 积极但 PR 积压 42 条（含 6+ 安全相关）；SOP 子系统批量文档/实现偏差 |
| **CoPaw** | 合计更新 78 条（含 Issue 关闭 14） | 含 PR 关闭 30 | 无 | 2.0.x 修补与 2.1.0 预发布并行；空响应、MCP 间歇失效等严重 bug 未闭环 |
| **NanoBot** | 8｜2 | 7｜11 | 无 | 健康；安全 P0/P1 修复在途，维护者响应迅速 |
| **NanoClaw** | 1｜1 | 8｜6 | 无 | 健康；积压清理高效，更新事务化 PR 待合并 |
| **LobsterAI** | 6｜0 | 1｜3 | 无 | 中等；4 月老 issue 被 stale，执行透明性痛点未解 |
| **PicoClaw** | 0｜0 | 1｜1 | 无 | 平稳；功能累积期，fallback 链 PR 超一个月未合并 |
| NullClaw | 0 | 0 | 无 | 无活动 |
| TinyClaw | 0 | 0 | 无 | 无活动 |
| Moltis | 0 | 0 | 无 | 无活动 |
| ZeptoClaw | 0 | 0 | 无 | 无活动 |

---

## 3. OpenClaw 在生态中的定位

**生态位：通用型生产级个人 AI 助手的"参考核心"。**

- **社区规模断层领先**：单日 500 Issue + 500 PR，约为第二梯队（Hermes、IronClaw、ZeroClaw 各约 50 条）的 10 倍。桌面端需求 #75 积累 116 条评论、80 👍，声量远超同类桌面诉求（如 Hermes 桌面回归仅 8 条评论）。社区覆盖 Discord/Telegram/LINE/WhatsApp/Feishu 多通道，并有真实家庭+商业生产用户反馈（#73537），全球化与场景广度均为生态之最。
- **工程治理最成熟**：唯一具备自动化修复管道（clawsweeper[bot] 自动生成 PR）的项目；维护者今日对 6 个社区 PR 采用 `close:superseded` 策略收敛重复贡献，说明具备系统级整合能力，而非简单合并。
- **技术路线差异**：以 Gateway 集中式架构 + 状态目录沙箱隔离 + session/上下文压缩生命周期管理为核心，强调通道抽象与模型韧性（fallback、session 级模型选择 #119325）。对比 Hermes 的桌面深度集成、IronClaw 的运维可观测性、CoPaw 的协议互操作、ZeroClaw 的 CLI/TUI 开发者治理路线，OpenClaw 走的是"最大公约数"平台路线。

**风险与瓶颈**：合并吞吐仅 20.6%，输入量已超出维护容量；今日 2 个 P0 级问题（DB 迁移阻断 #119263、token 膨胀数据丢失 #118772）暴露复杂架构在快速迭代下的稳定性代价。同时，"Claw 家族"衍生项目活跃度分化悬殊（多数停滞），说明其参考架构的复制门槛依然较高。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩生命周期** | OpenClaw（P0 token 膨胀、压缩 100% 失败）、CoPaw（窗口上限空响应）、IronClaw（压缩导致失败）、Hermes（token_count 从未持久化） | 压缩触发条件、token 计量、压缩与投递顺序需系统性重构 |
| **通道消息投递可靠性** | OpenClaw（LINE/WhatsApp/Feishu/Telegram 静默丢失）、IronClaw（Slack 错投/投递目标丢失）、NanoClaw（TG 纯媒体消息被丢弃）、CoPaw（Matrix 启动竞态无重试）、Hermes（Feishu 审批按钮跨 5 版本未修） | 失败可感知、自动重试、投递目标标准化 |
| **模型/Provider 韧性** | OpenClaw（DeepSeek 静默失败、`/models test-fallback`）、PicoClaw（可配置 fallback 链）、IronClaw（长输出泛化错误）、ZeroClaw（按模型能力配置） | fallback 链验证、失败透明化、聚合层稳定性 |
| **凭据与 session 安全** | NanoBot（API 密钥泄漏×2、session 可被工具读取）、ZeroClaw（SSRF/密钥泄漏/锁绕过）、Hermes（secret redaction 缺失） | 密钥隔离、最小权限、存储路径收口 |
| **MCP 体验与协议演进** | OpenClaw（mcp login 回调修复）、CoPaw（MCP 间歇失效/超时配置/stateless 新规范）、Hermes（stdio 崩溃）、ZeroClaw（延迟加载策略）、NanoClaw（Tavily skill） | MCP 客户端健壮性、超时上限、新规范跟进 |
| **子代理/A2A 编排** | OpenClaw（announceTarget、A2A 单行派发）、NanoBot（cron+子代理中断）、ZeroClaw（A2A 出站客户端已实现）、Hermes（sub-agent 状态） | 子代理结果回传、来源追踪、对话绑定契约 |
| **可观测性** | IronClaw（Inspector 4 个 XL PR）、Hermes（verify 子系统移植）、ZeroClaw（OTel 跨轮关联 ID）、NanoBot（token 消耗日志）、LobsterAI（网关重启透明） | 实时诊断、调用级 token 计量、跨轮 trace |
| **桌面/Windows 缺口** | OpenClaw（#75 获 80👍）、Hermes（0.20.0 桌面回归）、ZeroClaw（AppImage 不在 PATH）、LobsterAI（Windows 安装器/PS 5.1）、CoPaw（杀软误报） | Linux/Windows 原生应用、Windows CI 矩阵覆盖 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构差异 |
|---|---|---|---|
| **OpenClaw** | 通用多通道助手（IM/CLI/copilot） | 家庭自动化、企业 PC 工作流 | Gateway 集中式 + 状态目录隔离 + 自动化修复管道；渠道覆盖最广 |
| **Hermes Agent** | 桌面深度集成 + 插件生态 | 桌面重度用户、Feishu 企业用户 | 单体 Python 快速迭代中（god-file 重构）；插件安全扫描 + verify 体系 |
| **IronClaw** | 自托管平台 + 运维可观测性 | 平台团队、自托管开发者 | Inspector 实时诊断 + IronHub 扩展 + 托管 MCP；v1.1.0 稳定版 |
| **ZeroClaw** | 开发者 CLI/TUI + 严格治理 | CLI/终端用户、Rust 开发者 | ZeroCode TUI、SOP 子系统、RFC 治理、A2A 出站客户端；多 provider（Kimi/Bedrock） |
| **CoPaw** | Qwen/AgentScope 互操作 | 中文生态、QQ/微信/OneBot 用户 | AG-UI 协议端点、用户上下文全链路透传、MCP 超时配置 |
| **NanoBot** | 轻量 WebUI 优先 | 轻量部署、Matrix 用户 | Python + WebUI 交互优化（拖拽/临时会话）、gzip 冷启动优化 |
| **NanoClaw** | Telegram 深度优化 + 技能管理 | Telegram 重度用户 | 媒体消息支持、调度失败可见性、事务化更新 |
| **PicoClaw** | 渠道适配扩展（QQ 频道） | QQ 频道用户 | 富媒体消息处理、可配置 fallback 链 |
| **LobsterAI** | Windows 桌面体验 | Windows 用户 | 安装器/内核 shell 适配、OpenClaw 配置兼容 |

---

## 6. 社区热度与成熟度

**活跃度分层**

- **第一梯队（极速迭代，日更新 >100）**：OpenClaw。生产级规模、自动化治理成熟，但需关注合并瓶颈与 P0 密度。
- **第二梯队（密集迭代，日更新 30–80）**：Hermes Agent（重构 + 生态建设）、IronClaw（QA 驱动 + 可观测性）、ZeroClaw（治理驱动）、CoPaw（2.1.0 预发布）。均处于"从可用到可靠"的关键期。
- **第三梯队（质量巩固，日更新 <20）**：NanoBot（安全加固）、NanoClaw（积压清理）、LobsterAI（stale 清理）、PicoClaw（功能累积）。维护者响应快，但社区声量有限。
- **停滞项目**：NullClaw、TinyClaw、Moltis、ZeptoClaw 无任何活动，可作为"Claw 家族"分化风险的参考样本。

**成熟度标志**

- **最成熟**：OpenClaw（自动化修复管道 + superseded 合并策略）；IronClaw（稳定发布节奏 + QA bug_bash 体系）。
- **治理过重**：ZeroClaw RFC 流程规范但社区呼吁精简，维护者决策队列积压。
- **决策瓶颈**：Hermes Feishu 修复 PR 自 5 月未合并；ZeroClaw 42 条待合并 PR 中含多个安全修复。
- **响应标杆**：NanoBot/NanoClaw 安全与核心缺陷 PR 均当日提出、快速推进。

---

## 7. 值得关注的趋势信号

1. **上下文压缩正从"优化项"升级为"核心可靠性问题"**：多项目出现数据丢失级缺陷（OpenClaw #118772、CoPaw #6601、IronClaw #5838），token 记账与压缩策略将被重新设计。具备精确 token 持久化（Hermes #80724）和透明压缩机制的项目将获得稳定性优势。
2. **"静默失败"是生态头号信任杀手**：跨通道、模型、工具均出现"用户无感知、日志才可见"的失败模式。可验证、可恢复、可回滚（NanoClaw 事务化更新 #3195、OpenClaw 通道韧性 PR）正成为硬性要求。
3. **凭据与 session 数据隔离成为安全分水岭**：Agent 拥有文件系统与工具权限后，API 密钥泄漏（NanoBot）、session 越权读取（#5278）、SSRF（ZeroClaw）集中爆发；安全的秘密存储与最小权限沙箱将成为企业采纳的前提。
4. **MCP 进入"标准红利与标准债务"并存期**：几乎所有项目都在修 MCP 稳定性；CoPaw #6761 提示 stateless 新规范是即将到来的 breaking change，提前适配者将获得生态兼容优势。
5. **多代理编排尚无事实标准**：A2A 出站客户端（ZeroClaw）、子代理结果回传（NanoBot #4290）、announceTarget（OpenClaw #27445）、cron deliver_profile（Hermes #70849）各自为战——定义"代理工作流"层协议存在明确的机会窗口。
6. **可观测性是生产力工具的分水岭**：IronClaw 批量建设 Inspector、Hermes 移植 verify、ZeroClaw 增加 OTel 跨轮关联 ID、NanoBot 用户要求 token 消耗日志——自主智能体越"自主"，运维可视化越决定采纳率。
7. **Linux/Windows 桌面是最大的未满足市场**：OpenClaw #75（80👍）与多项目 Windows 缺陷（EBUSY、PS 5.1、AppImage 路径、杀软误报）共同指向：PC 工作流原生应用与 Windows CI 覆盖是明确的蓝海机会。
8. **"通用框架 + 垂直场景"是当前有效生态模式**：OpenClaw 做大平台，NanoClaw/Telegram、PicoClaw/QQ、LobsterAI/Windows 做深场景；但衍生项目活跃度分化严重，垂直场景团队需认真评估维护可持续性。

---

*本报告基于 2026-08-07 各项目 GitHub 公开动态自动生成，数据以各项目日报原始统计为准。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-08-07）

## 今日速览

过去24小时 NanoBot 仓库保持高强度迭代：**10条 Issue 更新（8新开/活跃、2关闭）**，**18条 PR 动态（11待合并、7合并/关闭）**，无新版本发布。今日的核心主线是**安全加固与会话稳定性**——两条 p1 级安全 PR 针对 API 密钥泄漏风险（#5270、#5269），一条 p0 级修复防止后台任务覆盖会话数据（#5271），同时社区热议的 session 存储位置安全问题催生了对应修复 PR（#5279）。WebUI 体验优化亦有明显进展（拖拽会话、临时聊天、冷启动减负），整体项目健康度良好，维护者响应迅速。

---

## 项目进展

**已合并/关闭的 PR（7条）** 主要集中在会话修复、Matrix 兼容性、WebUI 体验与性能：

- **会话保留修复**：[PR #5272](https://github.com/HKUDS/nanobot/pull/5272)（关闭 Issue #5273）——修复 `Session.retain_recent_legal_suffix` / `enforce_file_cap` 修剪历史时丢弃临前的 `_channel_delivery` 主动消息（如 cron 通知、任务投递），保障后台投递链路的完整性。
- **Matrix 加入房间兼容**：[PR #5248](https://github.com/HKUDS/nanobot/pull/5248)（关闭 Issue #5247）——为 Continuwuity 等对空 POST body 敏感的家服务器发送非空 JSON，解决机器人无法自动加入房间的问题。
- **Dream 记忆增强**：[PR #5231](https://github.com/HKUDS/nanobot/pull/5231)——为闲置会话补充归档机制，将其纳入 Dream 的 `history.jsonl` 输入源，避免短期会话因未触发保留窗口而成为记忆盲区。
- **WebUI 体验**：[PR #5261](https://github.com/HKUDS/nanobot/pull/5261)（拖拽侧边栏会话至输入框/排序）、[PR #5267](https://github.com/HKUDS/nanobot/pull/5267)（收紧交互动效，支持 reduced-motion）、[PR #5259](https://github.com/HKUDS/nanobot/pull/5259)（强制临时会话仅存内存）、[PR #5262](https://github.com/HKUDS/nanobot/pull/5262)（预压缩 gzip 资源 + 拆包 React 公共运行时，减冷启动负载）。

**仍待合并的关键 PR（11条）** 中值得关注：

- **安全**：[PR #5270](https://github.com/HKUDS/nanobot/pull/5270)（p1，CLI 子进程 API 密钥泄漏）、[PR #5269](https://github.com/HKUDS/nanobot/pull/5269)（p1，API 密钥写入全局 `os.environ`）、[PR #5279](https://github.com/HKUDS/nanobot/pull/5279)（p2，session 存储移出 agent workspace）。
- **数据安全**：[PR #5271](https://github.com/HKUDS/nanobot/pull/5271)（p0，后台任务陈旧引用覆盖新会话）。
- **新功能**：[PR #5277](https://github.com/HKUDS/nanobot/pull/5277)（模型预设编辑器内联展开）、[PR #5252](https://github.com/HKUDS/nanobot/pull/5252)（临时聊天模式，仅内存）、[PR #5234](https://github.com/HKUDS/nanobot/pull/5234)（mst-python 元搜索 provider）、[PR #5263](https://github.com/HKUDS/nanobot/pull/5263)（微信协议加固）。

---

## 社区热点

今日讨论热度最高的 Issue 为：

- **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)（3 评论，更新于今日）** —— 用户无法在特定会话中切换模型，点模型标签无反应，`/model` 命令带 ID 似乎也不生效。该问题直指基础交互体验，与 SaaS AI 产品相比差距明显，社区关注度高。
- **[Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)（2 评论，更新于8-06）** —— cronjob 在 spawn 子代理后提前结束，主代理无机会消费子代理结果导致工作流失败。涉及 agent 编排核心链路，属老问题（6 月创建）仍待修复。
- **[Issue #5278](https://github.com/HKUDS/nanobot/issues/5278)（新开 1 评论）** —— 指出 session 历史存放于 agent workspace 内被工具可读，存在敏感信息泄露面，并已有对应 PR #5279 解决，属安全敏感型热点。

---

## Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 问题描述 | 修复状态 |
|---|---|---|---|
| **P0** | [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务（如生成标题）持有旧 Session 引用，`/new` 后可能覆盖新会话数据 | 待合并（已提 fix） |
| **P1 安全** | [PR #5270](https://github.com/HKUDS/nanobot/pull/5270) | CLI 子进程继承完整 `os.environ`，API 密钥泄漏给不受信任的第三方程序 | 待合并（已提 fix） |
| **P1 安全** | [PR #5269](https://github.com/HKUDS/nanobot/pull/5269) | Provider 将 API 密钥写入全局环境变量，多 provider 场景互相覆盖/串用 | 待合并（已提 fix） |
| **P1** | [Issue #5278](https://github.com/HKUDS/nanobot/issues/5278) | session 历史文件位于 agent workspace 内，`read_file` 等工具可越权读取 | [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) 已提 |
| **P2** | [Issue #5273](https://github.com/HKUDS/nanobot/issues/5273) | 会话裁剪丢弃 `_channel_delivery` 主动消息 | 已修复（PR #5272 合并） |
| **P2** | [Issue #5264](https://github.com/HKUDS/nanobot/issues/5264) | 历史接口不返回 media_root 之外文件的 `media_urls` | [PR #5268](https://github.com/HKUDS/nanobot/pull/5268) 待合并 |
| **P2** | [Issue #5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix 机器人无法自动加入 Continuwuity 房间 | 已修复（PR #5248 合并） |
| **P2** | [PR #5265](https://github.com/HKUDS/nanobot/pull/5265) | 工具参数接受 `"NaN"`/`"Infinity"` 等非有限数值，可能造成下游异常 | 待合并 |
| **未定级** | [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) | 会话中无法切换模型 | 尚无 fix PR |
| **未定级** | [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290) | 子代理导致 cronjob 提前结束 | 尚无 fix PR |

---

## 功能请求与路线图信号

今日新增及活跃的功能类需求：

- **[Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)：Token 消耗日志** —— 用户反馈每 2 小时消耗百万 token 却无明显活动，要求记录每次调用的消耗量。涉及可观测性与成本控制，是运营型用户的核心诉求。
- **[Issue #5274](https://github.com/HKUDS/nanobot/issues/5274) & [#5275](https://github.com/HKUDS/nanobot/issues/5275)：Matrix 会话体验增强** —— 期望 bot 支持“回复”语义、线程内独立上下文（类似 Discord/Slack），改善 Matrix 通道交互一致性。
- **[Issue #5276](https://github.com/HKUDS/nanobot/issues/5276)：会话级临时文件隔离** —— 即使用户开启 `restrictToWorkspace`，共享 workspace 目录仍会让不同会话互相读写文件，需支持更细粒度的隔离。

结合已有 PR 判断（可纳入下一版本）：

- WebUI 编辑器内联展开（[PR #5277](https://github.com/HKUDS/nanobot/pull/5277)）与临时聊天模式（[PR #5252](https://github.com/HKUDS/nanobot/pull/5252)）——提升交互灵活性，可能进入下个版本。
- mst-python 元搜索整合（[PR #5234](https://github.com/HKUDS/nanobot/pull/5234)）——扩展现有搜索能力的多引擎聚合，若合并将增强 agent 信息获取能力。
- 共享交互式项目终端（[PR #5253](https://github.com/HKUDS/nanobot/pull/5253)）——WebUI 与 agent 共享 PTY，可能成为远程协助/运维场景的重要能力。

---

## 用户反馈摘要

- **模型切换困难**（[#5198](https://github.com/HKUDS/nanobot/issues/5198)）：用户希望像 SaaS AI 产品一样点选模型标签即可切换，当前只能通过重新配置整个实例实现，操作成本高。
- **后台任务中断**（[#4290](https://github.com/HKUDS/nanobot/issues/4290)）：自动化流水线依赖 cronjob 完整走完，子代理返回后主流程中断导致任务失败，用户明确表示“导致后续工作流失败”。
- **安全边界诉求**（[#5278](https://github.com/HKUDS/nanobot/issues/5278)）：Session 历史含敏感对话，不应被 agent 的 FS 工具读取；用户认可 workspace 隔离目标，但要求进一步收口存储路径。
- **Token 消耗透明化**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）：对无感知的高 token 消耗表示担忧，需要按调用维度的消耗日志以辅助排障与成本控制。
- **Matrix 交互不对称**（[#5274](https://github.com/HKUDS/nanobot/issues/5274)、[#5275](https://github.com/HKUDS/nanobot/issues/5275)）：bot 对“回复”和“线程”的处理不符合平台惯例，影响协作场景的阅读流。

---

## 待处理积压

维护者可能需要关注以下长尾问题：

- **[Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)（cronjob + 子代理提前结束）** —— 创建于 6 月 10 日，已近两个月无 fix PR，严重阻塞依赖自动化流程的用户，建议排期修复。
- **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)（会话模型切换）** —— 虽今日仍活跃，但缺少修复方案，属高频交互痛点，建议结合 WebUI 改造统一解决。
- **[PR #5234](https://github.com/HKUDS/nanobot/pull/5234)（mst-python 集成）** —— 已开放 4 天（8-03 创建），功能价值明确，但尚未获得 review，若与企业搜索/检索场景相关请及时评估。
- **[PR #5253](https://github.com/HKUDS/nanobot/pull/5253)（共享交互式项目终端）** —— 存在冲突标注，且功能面较大，建议评估拆分或协调相关 WebUI PR 以避免长时间积压。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 2026-08-07

数据区间：过去 24 小时（2026-08-06 ~ 2026-08-07）

---

## 1. 今日速览

- 过去 24 小时项目保持高强度活跃：**50 条 Issue 更新**（47 条新开/活跃，3 条关闭），**50 条 PR 更新**（39 条待合并，11 条已合并/关闭），**无新版本发布**。
- 当前最核心事件是 **repo-wide god-files sharding**：重构 Epic [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) 获 53 条评论，并已裂解出多个文件级分解子任务，社区讨论热度显著高于日常。
- 稳定性方面：桌面 0.20.0 回归 [#79407](https://github.com/NousResearch/hermes-agent/issues/79407)（底部操作面板完全缺失）被标记为 duplicate；新报告的 MCP stdio 崩溃 [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) 已在当日获得修复 PR [#80729](https://github.com/NousResearch/hermes-agent/pull/80729)。
- 插件生态方向集中发力：插件安装安全扫描 [#80728](https://github.com/NousResearch/hermes-agent/pull/80728)、grok-cli verify 子系统移植 [#80686](https://github.com/NousResearch/hermes-agent/pull/80686)、Dyad 集成 skill [#80727](https://github.com/NousResearch/hermes-agent/pull/80727) 均为今日新开 PR。
- 长期未决的 Feishu 审批按钮错误系列今日仍有用户更新，修复 PR #10256 仍处于未合并状态。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

在今日展示的 PR 列表中，关闭状态的有：

- **[#68708](https://github.com/NousResearch/hermes-agent/pull/68708) fix(gateway): launchd bootout settle** — 解决 macOS 上 gateway 自更新后 launchd 服务未注册导致离线的问题，对生产环境 macOS 用户有直接价值。
- **[#80718](https://github.com/NousResearch/hermes-agent/pull/80718) Show earlier messages no longer hides most of a session** — 修复桌面端"Show earlier messages"预算计算错误导致已绘制内容被大量隐藏的问题。
- **[#80719](https://github.com/NousResearch/hermes-agent/pull/80719) Keep elapsed status text from overlapping** — 修复运行状态标签与计时器文本重叠问题，被标记为 duplicate（存在替代实现）。
- **[#80725](https://github.com/NousResearch/hermes-agent/pull/80725) fmt(js) auto-fix** — 自动化格式化 PR，由 bot 管理，用于保持 JS 代码风格一致。

今日新开且值得关注的高价值 PR：

| PR | 方向 |
|---|---|
| [#80729](https://github.com/NousResearch/hermes-agent/pull/80729) fix(mcp): null args → empty list | 直接修复 #80652 MCP 崩溃 |
| [#80724](https://github.com/NousResearch/hermes-agent/pull/80724) persist per-message token_count | 修复 session 表中 token_count 从未写入的问题，为压缩决策提供数据基础 |
| [#80728](https://github.com/NousResearch/hermes-agent/pull/80728) plugins security scanning | 插件安装/更新前安全扫描，可疑需确认、恶意直接拦截 |
| [#80686](https://github.com/NousResearch/hermes-agent/pull/80686) port verify subsystem from grok-cli | run-recipe 检测 + 环境清单 + `hermes verify` 冒烟运行器 |
| [#80731](https://github.com/NousResearch/hermes-agent/pull/80731) stray .git debris must not manufacture a code workspace | 修复空 `.git` 目录被误判为 git 仓库的问题 |

整体判断：项目正在 **重构（god-file sharding）、稳定性修复（MCP/桌面回归）、插件生态建设（安全扫描/verify/新集成）** 三条线上并行推进，合并节奏和 PR 产出密度均处于高位。

---

## 4. 社区热点

- **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647) Epic: Shard all 20 god files — 53 条评论**
  这是当前讨论的绝对焦点。Epic 声明了 "all god files are sharded, never reverted" 的 standing policy，并列出 20 个待分解的 god 文件。背后诉求是项目在长期快速迭代中文件膨胀到数千行（如 `agent/context_compressor.py` 6,789 行、`hermes_cli/auth.py` 9,180 行、`agent/auxiliary_client.py` 9,924 行）后的维护成本危机。社区围绕切分方案、行为保持不变、逐 PR 推进策略展开了实质性讨论。

- **[#64182](https://github.com/NousResearch/hermes-agent/issues/64182) Plugin Interface Expansion — 27 条评论**
  由 7 月 Discord 社区讨论（#plugins-interface-ideas）蒸馏而来，目标是让长期排队的插件 PR 作者能有稳定的接口可依。这反映了外部开发者对 Hermes 插件生态的高度兴趣，以及当前插件接口扩展的迫切性。

- **[#79407](https://github.com/NousResearch/hermes-agent/issues/79407) 桌面 0.20.0 底部操作面板完全缺失 — 8 条评论**
  用户将升级后的应用描述为 "viewer-only shell"，Command Center、Gateway 控制、Sub-agent 状态等核心入口全部消失。虽然被标记为 duplicate，但影响面大，用户持续跟进。

- **god-file 子任务集群**：[#78645](https://github.com/NousResearch/hermes-agent/issues/78645)（19 条评论）、[#78637](https://github.com/NousResearch/hermes-agent/issues/78637)（8 条）、[#78635](https://github.com/NousResearch/hermes-agent/issues/78635)（7 条）、[#78632](https://github.com/NousResearch/hermes-agent/issues/78632)（7 条）等文件级 sharding 子任务比普通 Issue 获得明显更多关注，说明社区对架构治理有较强共识。

---

## 5. Bug 与稳定性

按严重程度排列：

### P2（影响核心功能）

- **桌面 0.20.0 回归**：[#79407](https://github.com/NousResearch/hermes-agent/issues/79407) — 底部操作面板完全缺失，应用变为 viewer-only shell。已标记 duplicate，需确认归并到哪个跟踪 Issue。
- **MCP stdio 桥接崩溃**：[#80652](https://github.com/NousResearch/hermes-agent/issues/80652) — `args: null` 时触发 `TypeError: Value after * must be an iterable, not NoneType`，服务器进入 `connecting -> parked` 循环。 **已有 fix PR：[#80729](https://github.com/NousResearch/hermes-agent/pull/80729)**。
- **use_gateway 凭据丢弃**：[#79628](https://github.com/NousResearch/hermes-agent/issues/79628) — Gateway 未认证时硬报配置错误，丢弃原本有效的直接凭据，影响 web/tts/browser 三个工具，且错误提示自相矛盾。
- **agent_context 硬编码**：[#80646](https://github.com/NousResearch/hermes-agent/issues/80646) — 硬编码为 `"primary"`，导致 memory provider 的 cron/flush/subagent 上下文跳过逻辑全部是死代码。
- **远程桌面 reactions 被禁用**：[#80259](https://github.com/NousResearch/hermes-agent/issues/80259) — `HERMES_DESKTOP` 只在本地设置，远程桌面会话被误判为非桌面环境。
- **SSH 模式版本检查误报**：[#74411](https://github.com/NousResearch/hermes-agent/issues/74411) — 命令参数顺序错误导致永远误报，remoteHermesPath 覆盖也被忽略。
- **Talk to Hermes 延迟播放**：[#79859](https://github.com/NousResearch/hermes-agent/issues/79859) — OpenAI TTS 下仍是"完整生成 MP3 再播放"的延迟工作流，无低延迟对话体验、无 barge-in。

### P3（中低影响）

- **Memory provider sync_turn 静默失效**：[#79339](https://github.com/NousResearch/hermes-agent/issues/79339) — 0.20 升级后 `sync_turn()` 从未被调用，外部 memory 后端静默失联。
- **学习图数据污染**：[#80596](https://github.com/NousResearch/hermes-agent/issues/80596) — 外部安装的 skills 被错误标记为 "learned"，use_count 失真。
- **安全：process(list) 未脱敏**：[#77484](https://github.com/NousResearch/hermes-agent/issues/77484) — `process(action=list)` 返回原始 command 和 output，缺少 redaction wrap；另有 traceback 泄漏、`*_KEY` 正则遗漏、控制字符切分、ACP plain formatter 等问题。
- **安全：secret redaction 缺失**：[#77162](https://github.com/NousResearch/hermes-agent/issues/77162) — token-result 消息发往 provider 时缺少 exact-value secret redaction。

### Feishu 审批按钮错误系列（长期未修复）

- [#7675](https://github.com/NousResearch/hermes-agent/issues/7675)（4月11日）、[#13924](https://github.com/NousResearch/hermes-agent/issues/13924)、[#25886](https://github.com/NousResearch/hermes-agent/issues/25886)、[#38305](https://github.com/NousResearch/hermes-agent/issues/38305)、[#10073](https://github.com/NousResearch/hermes-agent/issues/10073) — 点击审批卡按钮返回 220340/200343/200340 错误，跨 0.8.0 ~ 0.20.0 多个版本仍存在。[#38305](https://github.com/NousResearch/hermes-agent/issues/38305) 明确指出 PR #10256 是正确修复但至今未合并。

---

## 6. 功能请求与路线图信号

### 新出现的功能请求

- **[#80723](https://github.com/NousResearch/hermes-agent/issues/80723)** — 多设备同时观看同一 live session：当前 WS 事件路由只有一个传输槽位，第二个设备会静默抢占第一个设备。面向"关掉笔记本，手机继续看执行"的多端场景。
- **[#80720](https://github.com/NousResearch/hermes-agent/issues/80720)** — Kanban 附件行支持打开/预览/Quick Look/Reveal 操作，将附件变为可交互资产。
- **[#70849](https://github.com/NousResearch/hermes-agent/issues/70849)** — multiplexed gateway cron 交付支持 per-job `deliver_profile`，目前多 profile 场景下 cron 永远使用默认 profile 的 adapter。
- **[#53317](https://github.com/NousResearch/hermes-agent/issues/53317)** — 完成 image_gen 和 TTS 的 plugin-provider 迁移，去掉硬编码 provider 与 `if/elif` 回退链，对齐 video_gen 的纯 registry 模式。

### 可能进入下一版本的路线图信号（结合当日 PR）

- **插件生态基础设施**：安全扫描（[#80728](https://github.com/NousResearch/hermes-agent/pull/80728)）、Dyad 集成（[#80727](https://github.com/NousResearch/hermes-agent/pull/80727)）、技能文档防腐化（[#80722](https://github.com/NousResearch/hermes-agent/pull/80722)）——外部集成与安全管控并行推进。
- **开发体验与可观测性**：verify 子系统移植（[#80686](https://github.com/NousResearch/hermes-agent/pull/80686)）、token_count 持久化（[#80724](https://github.com/NousResearch/hermes-agent/pull/80724)）。
- **会话体验**：跨午夜日期变更通知（[#80721](https://github.com/NousResearch/hermes-agent/pull/80721)，kimi-code 移植）、tool_call_id 去重范围修复（[#79221](https://github.com/NousResearch/hermes-agent/pull/79221)）。

---

## 7. 用户反馈摘要

- **桌面回归被用户定性为"功能缺失"而非体验问题**：[#79407](https://github.com/NousResearch/hermes-agent/issues/79407) 中用户强调"This is not a cosmetic issue — the desktop app becomes a viewer-only shell"，底部面板包含 Command Center、Gateway 控制、Sub-agent 状态等核心入口。
- **Feishu 用户对长期未修复表达明显失望**：[#38305](https://github.com/NousResearch/hermes-agent/issues/38305) 直言"PR #10256 provides the correct fix but remains unmerged"，用户从 4 月追踪到 8 月，只能通过手动输入 `/approve session` 绕过。
- **MCP 崩溃引发连接循环困扰**：[#80652](https://github.com/NousResearch/hermes-agent/issues/80652) 中用户描述了服务器每 5 分钟进入 `connecting -> parked` 循环的现场，根因仅是 YAML 中 `args:` 为 null。
- **SSH 模式信息误导**：[#74411](https://github.com/NousResearch/hermes-agent/issues/74411) 指出版本检查命令参数顺序反了，导致"明明是最新的 git/source 安装，却被提示不支持关键参数"，对用户判断产生误导。
- **学习图数据信任危机**：[#80596](https://github.com/NousResearch/hermes-agent/issues/80596) 中用户指出通过 `npx skills add` 安装的外部 skills 被标记为 "learned"，可能让用户对学习图数据的真实性产生怀疑。

---

## 8. 待处理积压

- **Feishu 审批按钮错误系列（最需关注）**：最早 [#7675](https://github.com/NousResearch/hermes-agent/issues/7675) 于 4 月 11 日报告，后续 [#13924](https://github.com/NousResearch/hermes-agent/issues/13924)、[#25886](https://github.com/NousResearch/hermes-agent/issues/25886)、[#38305](https://github.com/NousResearch/hermes-agent/issues/38305)、[#10073](https://github.com/NousResearch/hermes-agent/issues/10073) 持续追踪。修复 PR #10256 自 5 月起未合并，是当前最长的未解决用户反馈链之一，建议维护者尽快决策合并或给出替代方案。

- **vadelma-agent 的三条 PR（无 CI、无评审）**：
  - [#67934](https://github.com/NousResearch/hermes-agent/pull/67934) fix: use native Ollama tags for local model discovery（直接影响 Ollama 用户）
  - [#70667](https://github.com/NousResearch/hermes-agent/pull/70667) test(kanban): delegated CLI refusal exit status
  - [#72671](https://github.com/NousResearch/hermes-agent/pull/72671) test(gateway): background cleanup fixture
  三条 PR 均已 rebase 到最新 main，状态 `MERGEABLE / BLOCKED`，无 CI 报告、无 review 指派。

- **[#77428](https://github.com/NousResearch/hermes-agent/pull/77428) fix(doctor): detect environment-installed entry points** — 8 月 3 日提交，修复 `hermes doctor` 在非标准环境下误报 "Venv entry point not found" 的问题，关联 #49529 和 #68505，已等待 4 天。

- **[#38305](https://github.com/NousResearch/hermes-agent/issues/38305) 中提及的 PR #10256** — 建议优先决策：合并、关闭或给出替代方案，避免 Feishu 用户继续在多个 Issue 中重复追踪同一问题。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-07

## 1. 今日速览

项目今日整体活跃度中等偏低：过去 24 小时无新 Issues 提交或关闭，Issues 侧完全静默；PR 侧有 2 条动态更新，其中 1 条已关闭（功能并入主分支），1 条仍在待合并状态。无新版本发布，项目当前处于功能累积阶段。两条 PR 均集中在功能增强方向（QQ 频道多媒体消息支持、模型默认 fallback 链配置），说明项目正在持续扩展渠道适配能力与模型配置灵活性。整体而言，项目今日推进稳定，未见明显风险信号。


## 2. 版本发布

今日无新版本发布（最新 Releases 为空）。上一版本至今已积累若干待合并 PR，预计下次发版将包含 QQ 频道增强与模型配置改进，建议维护者关注版本规划节奏。


## 3. 项目进展

**PR #1349 已关闭（功能并入） — QQ 频道多媒体消息处理能力增强**

本 PR 针对 QQ 频道渠道进行了功能扩展：
- 支持解析 QQ 频道 emoji 结构；
- 支持处理来自 QQ 频道的语音、图片、视频和文件消息；
- 支持回复本地语音、图片、视频和文件附件（发送前先上传）；
- 回复时优先使用 Markdown 消息，失败时降级尝试其他方式。

这是对现有 QQ 频道适配层的实质性补齐，直接提升了该渠道的实用性与交互完整性，对使用 QQ 频道作为接入端的用户是明确利好。

> 🔗 https://github.com/sipeed/picoclaw/pull/1349


## 4. 社区热点

今日社区讨论热度整体较低（两条 PR 均无评论数），但以下 PR 因其功能覆盖面值得关注：

**PR #3200（OPEN）— 可配置默认 fallback 链**：该 PR 为 Web UI 和后端 API 增加模型默认 fallback 链的配置能力，允许用户设置默认模型、添加备用模型、调整顺序并持久化保存。该功能涉及所有使用 Web 界面配置模型的用户，属于高频通用场景，虽为 PR 尚未合入，但讨论潜力较高。

> 🔗 https://github.com/sipeed/picoclaw/pull/3200

背后的核心诉求是：大模型服务经常出现限流、宕机或延迟过高，用户需要一套自动的模型降级机制来保证服务连续性，而非手动切换。该 PR 若合并，将显著提升项目的生产可用性。


## 5. Bug 与稳定性

今日无新 Bug 类 Issue 提交，无崩溃或回归问题报告。PR #1349 中提到"优先使用 Markdown 消息，失败则降级"的逻辑属于防御性编码，侧面说明 QQ 频道消息发送存在平台侧格式兼容问题，但项目已通过 fallback 方式降低影响。整体稳定性表现良好。


## 6. 功能请求与路线图信号

**模型配置灵活性（PR #3200）**：该 PR 提出可配置的默认 fallback 链，并包含完整的 Web UI 交互（设置默认模型、添加 fallback、排序、保存）。结合此前 Models 页面持续在功能增强的路径，可判断模型管理配置化/链路化正在被纳入项目能力拼图。该功能有较大概率进入下一版本。

**多渠道富媒体支持（PR #1349 已合入）**：QQ 频道现可处理语音/图片/视频/文件等富媒体，这为后续在更多 IM 渠道（如 Discord、Telegram）复制同类能力提供了参考模式，渠道消息体验的统一化可能是后续迭代方向之一。


## 7. 用户反馈摘要

今日无新 Issues 提交，无评论数据可提炼。但从两条 PR 的内容可间接推断用户侧的真实诉求：

- **QQ 频道用户**：需要发送和接收不止于文本的消息（语音、图片、视频、文件等），说明真实使用场景中存在大量富媒体交互需求，并非纯文本机器人场景。
- **Web UI 使用者**：希望无需修改配置文件，直接在界面上配置模型的 fallback 链路，降低运维成本，应对模型服务不可用的情况。这反映出用户对项目作为"生产力工具"的稳定性和易用性有较高期待。


## 8. 待处理积压

**PR #3200 — 可配置默认 fallback 链（OPEN，待合并）**

该 PR 创建于 2026-07-01，至今已超过一个月未合并，最后更新于 2026-08-06。这是当前最重要的待处理项：功能完整度高（涵盖前端配置流 + 后端持久化），且用户价值明确。长期搁置会增加合并冲突风险，也延迟了用户可感知的模型配置体验升级。建议维护者尽快评估并推进合并，必要时安排 reviewer 轮次。

> 🔗 https://github.com/sipeed/picoclaw/pull/3200

---

**总体判断**：PicoClaw 今日处于稳步迭代阶段，功能合入正常、无回归风险、无社区积压争议。需要关注的是 #3200 的合并节奏，以及 QQ 频道新能力合入后的实际运行反馈。项目健康度良好。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-08-07

## 今日速览

- 过去 24 小时无新版本发布，项目处于稳定的迭代区间。
- PR 活跃度较高：共 14 条更新，其中 8 条合并/关闭、6 条待合并；多数合并 PR 为 5 月底至 6 月初提交，今日集中清理积压。
- Issues 活跃度偏低：仅 2 条，但其中 #3194 直指 `/update-nanoclaw` 更新机制的核心可靠性缺陷，且作者当天提交了对应修复 PR #3195。
- 合并内容集中在 Telegram 渠道鲁棒性、调度任务失败处理、技能仓库清理与用户 ID 命名空间修复。
- 整体项目健康度良好：有明确的核心问题追踪与快速修复，但部分 PR 合并周期偏长（最长积压超 60 天），值得关注。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

今日合并/关闭的 8 条 PR 主要推进了以下方向：

**1. 移除无效/未配置的技能，降低误拦截风险**
- [#3172 [CLOSED] chore(skills): remove stale qodo and Google MCP skills](https://github.com/nanocoai/nanoclaw/pull/3172) — 移除了依赖外部未配置服务的捆绑技能，直接回应了 #3171 的报告。这有助于避免技能在用户环境中“能加载但不可用”的尴尬状态。

**2. 技能更新链路解耦，提升可维护性**
- [#2873 [CLOSED] fix(skills): split pre-flight from credentials so /update-skills can refresh code (#2868)](https://github.com/nanocoai/nanoclaw/pull/2873) — 将技能预检与凭据检查分离，允许 `/update-skills` 在凭据未配置时仍能更新技能代码。这一改动为后续自动更新机制打下基础。

**3. Telegram 消息处理能力增强**
- [#2213 [CLOSED] fix: accept media-only messages (photo/video/file without caption)](https://github.com/nanocoai/nanoclaw/pull/2213) — 修复了 Telegram 上无文字说明的图片、视频、文件消息被静默丢弃的问题。此前这类消息无法触达 agent，是真实的用户场景缺失。
- [#2644 [CLOSED] fix: detect reply-to-bot in Telegram extractReplyContext](https://github.com/nanocoai/nanoclaw/pull/2644) — 正确识别“回复机器人自身消息”的场景，为后续对话逻辑提供准确上下文。

**4. 调度任务失败处理与用户可见性**
- [#2678 [CLOSED] fix(scheduling): re-arm recurrence when a run fails permanently](https://github.com/nanocoai/nanoclaw/pull/2678) — 修复了永久失败的一次性任务导致后续循环任务不再触发的问题，避免整个调度链“悄悄断掉”。
- [#2679 [CLOSED] fix(scheduling): surface permanently-failed scheduled tasks to the user](https://github.com/nanocoai/nanoclaw/pull/2679) — 将永久失败的定时任务以通知形式推送给用户，而不是只出现在日志中。

**5. 路由匹配与用户 ID 设计修正**
- [#2643 [CLOSED] fix: engage pattern/mention wirings on direct address](https://github.com/nanocoai/nanoclaw/pull/2643) — 修复了模式匹配在直接 @提及、DM、回复机器人时不生效的问题。
- [#2591 [CLOSED] fix: namespace user IDs by channel-type prefix, not bare colon](https://github.com/nanocoai/nanoclaw/pull/2591) — 修复了不同渠道间用户 ID 可能冲突的问题，改用渠道类型前缀命名空间。

> **小结**：今日合并的 PR 整体上提升了系统在边界情况下的可靠性——Telegram 媒体消息、调度失败通知、路由触达、用户 ID 唯一性。这反映出项目正在从“功能可用”向“边缘场景可靠”稳步迈进。

---

## 社区热点

今日 Issues 和 PR 的评论数均为 0（或未提供），但以下两组关联事件构成了明显的社区讨论热点：

**1. 捆绑技能却未配置依赖，用户感到困扰**
- Issue: [#3171 [CLOSED] The two qodo skills depend on an integration nothing sets up and intercept normal coding requests](https://github.com/nanocoai/nanoclaw/issues/3171)
- 对应 PR: [#3172 chore(skills): remove stale qodo and Google MCP skills](https://github.com/nanocoai/nanoclaw/pull/3172)

用户 glifocat 指出仓库自带的两个技能需要 Qodo SaaS 账号和 API key，但仓库中没有任何相关配置入口；更糟的是这些技能会“拦截正常编码请求”。这一反馈在 8 月 1 日提出、8 月 6 日关闭，说明维护者迅速接受了反馈并直接移除相关技能。

**2. 更新机制可能“假成功”，用户对升级安全性与可回滚性表示担忧**
- Issue: [#3194 [OPEN] [bug] /update-nanoclaw can stamp success without a recoverable cutover](https://github.com/nanocoai/nanoclaw/issues/3194)
- 对应 PR: [#3195 [OPEN] fix(update): make NanoClaw upgrades transactional](https://github.com/nanocoai/nanoclaw/pull/3195)

glifocat 今日再次提交 Issue，明确指出 `/update-nanoclaw` 的更新流程存在四个失败窗口：虽然能回滚 Git checkout，但无法保护数据库、gitignored 配置和外部组件。**当天即收到 core-team 的修复 PR #3195**，可见此类信任问题被高度重视。

> **诉求分析**：用户对“静默失败”和“不可回滚的系统变更”容忍度很低。社区更希望项目在更新、凭据、技能加载等关键路径上做到显式、可验证、可恢复。

---

## Bug 与稳定性

按严重程度排序：

**高严重度**

1. [#3194 `/update-nanoclaw` 可在无可恢复切换的情况下标记成功](https://github.com/nanocoai/nanoclaw/issues/3194)
   - 影响：更新可能破坏数据库、gitignore 配置和外部组件，且用户会被“成功”提示误导。
   - 状态：已有修复 PR [#3195](https://github.com/nanocoai/nanoclaw/pull/3195)，待合并。

**中严重度**

2. [#2705 [OPEN] fix(use-native-credential-proxy): actually bypass the OneCLI gateway](https://github.com/nanocoai/nanoclaw/pull/2705)
   - 影响：在真实的 launchd/systemd 安装场景中，原生凭据代理技能会静默回退到 OneCLI 网关，与预期行为不符，涉及凭据流转安全。该 PR 自 2026-06-07 提交至今已积压 60 天，需要重点关注。

3. [#3149 [OPEN] fix(cli): add --rw flag to groups config add-mount](https://github.com/nanocoai/nanoclaw/pull/3149)
   - 影响：CLI 的 `groups config add-mount` 命令缺少 `--rw` 参数，功能不完整。已提交修复，等待合并。

**低严重度**

4. [#2643 路由模式匹配未响应直接寻址（已合并）](https://github.com/nanocoai/nanoclaw/pull/2643)
   - 影响：用户在 DM/@提及机器人时，即使触发了关键词 wiring，机器人也可能保持沉默。该问题已修复并合并，但此前可能持续了较长时间。

> 稳定性判断：今日修复的 PR 集中在“静默失败”和“状态不可见”等可靠性问题上，说明项目正逐步补齐这部分短板；但 #2705 的长期待合并是一个风险信号。

---

## 功能请求与路线图信号

以下 PR/Issue 可能预示未来版本的功能方向：

**1. 新增外部服务集成技能**
- [#3190 [OPEN] feat: add Tavily MCP tool skill](https://github.com/nanocoai/nanoclaw/pull/3190)
  - 新增 Tavily 搜索/网页抓取的 MCP 工具技能，属于独立 Utility skill，不涉及核心源码改动，较容易合入。

**2. 更新机制事务化**
- [#3195 [OPEN] fix(update): make NanoClaw upgrades transactional](https://github.com/nanocoai/nanoclaw/pull/3195)
  - 由 core-team 贡献，将更新过程改为事务式，避免部分失败造成不可恢复状态。这很可能是下一版本的核心改进之一。

**3. 宿主能力抽象（host seams）**
- [#3186 [OPEN] refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186)
  - 为技能自有能力增加宿主隔离层，属于结构性重构，可能为未来更多第三方技能接入铺路。

**4. Telegram 富消息支持**
- [#3193 [OPEN] fix(telegram): update Chat SDK for rich messages](https://github.com/nanocoai/nanoclaw/pull/3193)
  - 配合今日合并的 #2213（媒体消息支持），进一步升级 Telegram SDK 以支持更丰富的消息类型。与 #2213 是同一方向的连续改进。

> **判断**：Tavily 技能和事务性更新最有可能进入下一版本；host seams 重构若合入，则为长远的技能生态承诺铺路。

---

## 用户反馈摘要

今日数据中评论数为 0，但从 Issue/PR 描述可提取以下真实用户反馈：

**1. 用户对捆绑技能持保留态度，不希望被额外服务绑架**
- “两个 qodo 技能依赖仓库中完全未设置的外部集成，且会拦截正常编码请求”——用户期望开箱即用的技能能自主工作，不能依赖未配置的 SaaS 账号。（[#3171](https://github.com/nanocoai/nanoclaw/issues/3171)）

**2. 用户对更新机制缺乏信任感**
- “/update-nanoclaw 在切换前就修改了运行中的 checkout，回滚点只保护了 Git 而不保护数据库和配置”——用户需要知道系统在更新过程中什么时候可能出问题，以及如何恢复。（[#3194](https://github.com/nanocoai/nanoclaw/issues/3194)）

**3. 实际生产环境中的静默回退令人不满**
- “在真实的 launchd/systemd 安装中，技能静默回退到 OneCLI gateway”——用户在使用技能时未得到任何提示，行为与文档不符。（[#2705](https://github.com/nanocoai/nanoclaw/pull/2705)）

**4. 用户持续贡献调度与 Telegram 修复，说明这些场景使用频率高**
- 同一批贡献者（yairixStudio）连续提交了调度失败处理（#2678、#2679）和 Telegram 回复上下文（#2644）的修复，说明这些功能在用户的日常使用中确实会遇到问题，且用户愿意参与修复。

---

## 待处理积压

以下 Issue/PR 需要维护者关注，建议优先处理：

| 条目 | 类型 | 创建时间 | 时间差 | 说明 |
|---|---|---|---|---|
| [#2705 fix(use-native-credential-proxy)](https://github.com/nanocoai/nanoclaw/pull/2705) | PR | 2026-06-07 | 60 天 | 默认待合并状态，涉及凭据安全与真实环境功能性，建议尽快评审 |
| [#3149 fix(cli): add --rw flag](https://github.com/nanocoai/nanoclaw/pull/3149) | PR | 2026-07-29 | 9 天 | 功能性修复，等待合并 |
| [#3195 fix(update): make upgrades transactional](https://github.com/nanocoai/nanoclaw/pull/3195) | PR | 2026-08-06 | 1 天 | 刚提交，需要评审后尽快合并以解决 #3194 |
| [#3190 feat: add Tavily MCP tool skill](https://github.com/nanocoai/nanoclaw/pull/3190) | PR | 2026-08-05 | 2 天 | 新功能请求，等待评审 |

另外值得注意的是：今日合并的 #2678、#2679、#2644、#2643、#2591 均为 5-6 月提交的 PR，合并周期约 2 个月。若能缩短评审等待时间，社区贡献者的参与意愿会进一步增强。

---

**总体评估**：NanoClaw 今日处于“低 Issue 波动、高 PR 消化、长短时期修复集中落地”的状态。核心风险集中在更新事务性和凭据代理的真实可靠性上，但两者均有对应的修复 PR 在推进。项目整体稳定、方向清晰，但 PR 积压周期较长的问题仍值得维护者重视。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-07

## 1. 今日速览

过去24小时 IronClaw 仓库保持高活跃度：Issue 与 PR 更新各 50 条，其中新开/活跃 Issue 27 条、待合并 PR 33 条，项目处于密集迭代周期。核心开发团队围绕 **Inspector 运维诊断体系** 连续提交了 4 个 XL 级 PR，并关闭了文档泄露边界、Docker 健康检查、FTS 存储查询等多项 P1/P2 缺陷。QA 团队通过 bug_bash 持续上报 P2 级体验问题（通知丢失、Slack 集成异常、活动面板信息缺失），但多数已有关联修复 PR 在途，整体项目健康度良好。v1.1.0 稳定版已于昨日发布，标志着扩展生态（托管 MCP、深链接安装、跨渠道附件）进入正式可用阶段。

---

## 2. 版本发布

### ironclaw-v1.1.0（2026-08-06 发布）

自 1.0.0 以来的首个稳定版本，将 `1.1.0-rc.1` 正式晋升为 stable，并包含 RC 后的修复。根据发布说明，核心亮点是 **扩展触达（extension reach）**：

- **注册任意托管 MCP 服务器**：允许用户注册和管理外部 MCP 服务，不再局限于内置集成
- **通过 IronHub 深链接安装**：支持从 IronHub 生态通过深链接直接安装扩展
- **持久化文件附件跨渠道传递**：文件附件可在不同渠道（WebUI、Slack 等）间持久保留与传递
- **Slack 相关改进**（发布说明在 "Slac" 处截断，从关联 PR 推断涉及 Slack 投递修复）

> **注意**：发布说明原文不完整，以上为已公开部分的解读。RC 阶段的修复清单未完全展示，建议维护者补充完整 Release Notes。

---

## 3. 项目进展

今日合并/关闭的 PR 反映了三大推进方向：

### 🔍 Inspector 运维诊断体系（核心方向）
| PR | 内容 | 状态 |
|---|---|---|
| [#7235](https://github.com/nearai/ironclaw/pull/7235) | 添加 operator 专属检查 API 和实时更新流（游标恢复、去重、保活） | ✅ 已关闭 |
| [#7259](https://github.com/nearai/ironclaw/pull/7259) | 冻结 `.mintignore` + CI 门禁，**修复 docs/design 和 docs/research 内部文档被公开 Mintlify 站点泄露的问题**，并将内部文档统一收拢至 docs/internal/ | ✅ 已关闭 |
| [#7289](https://github.com/nearai/ironclaw/pull/7289) | 修复 libSQL FTS 查询，使自然语言持久记忆召回在生产组合路径上可用（关闭 #7275） | ✅ 已关闭 |
| [#7303](https://github.com/nearai/ironclaw/pull/7303) | Docker 镜像安装 curl，修复托管节点健康检查误报 error 状态的问题 | ✅ 已关闭 |

### 🚧 在途核心 PR（仍开放，值得关注）
| PR | 内容 | 状态 |
|---|---|---|
| [#7239](https://github.com/nearai/ironclaw/pull/7239) | Inspector：捕获模型调用前的精确 prompt 并新增 Prompt 标签页 | 🟡 Open |
| [#7236](https://github.com/nearai/ironclaw/pull/7236) | Inspector：debug 面板外壳 + 实时诊断客户端 | 🟡 Open |
| [#7277](https://github.com/nearai/ironclaw/pull/7277) | Inspector：模型调用统计（延迟、token 用量、按模型分解） | 🟡 Open |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | 显式通道投递工具，双通道模型，删除投递启发式逻辑 | 🟡 Open |
| [#7300](https://github.com/nearai/ironclaw/pull/7300) | 修复 Slack 个人 DM 投递目标恢复与标准化 canaries | 🟡 Open |

**评估**：Inspector 系列 PR 的批量推进表明项目正在构建面向运维的可观测性基础设施——这对 AI 代理类项目的生产部署至关重要。文档泄露修复（#7259）属于高价值安全修复，及时堵住了内部设计文档被公开索引的风险。

---

## 4. 社区热点

今日讨论最活跃的 Issue 集中在 **QA 回归缺陷** 上，评论数最高的均为 bug_bash 系列：

| Issue | 标题 | 评论/👍 | 核心诉求 |
|---|---|---|---|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear instead of remaining in notification history | 4 / 0 | 审批通知不可靠地显示在通知面板，点击后消失或根本不出现，自动化流程中审批环节无法触达用户 |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub issue search and create capabilities fail with HTTP 403 | 4 / 0 | GitHub 集成配置正确但搜索/创建 Issue 返回 403，agent 无法与 GitHub 交互 |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Reborn routine fails when task requires reading Slack DMs | 3 / 0 | 例程因缺少 Slack 读取能力陷入 capability_info 重试循环，任务直接失败 |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | Activity panel hides tool details and does not update during active run | 3 / 0 | 活动面板将工具调用折叠为 "Activity - N tools" 摘要，运行中不实时更新，无法观察工具执行过程 |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Slack disconnect request is incorrectly rejected by agent | 3 / 0 | 用户请求断开 Slack 时 agent 错误拒绝，并回复无关内容，集成无法通过 agent 解除 |

**分析**：热点集中在 **QA 对核心交互链路（通知、集成、可观测性）的系统性回归发现**。其中 #5701 与 #7305（软化失败工具摘要 UI）直接相关；#5834 与 #7300（Slack 投递修复）相关。社区（QA）的反馈表明 v1.1.0 的 Slack 集成和通知链路仍需打磨。

---

## 5. Bug 与稳定性

### 🔴 P1 级（影响核心功能）

| Issue | 问题 | 状态 | 关联修复 |
|---|---|---|---|
| [#5877](https://github.com/nearai/ironclaw/issues/5877) | **Slack 通知投递给了错误的用户**，敏感工作流结果可能泄露 | ✅ 已关闭 | 需确认修复方式 |
| [#5456](https://github.com/nearai/ironclaw/issues/5456) | **例程运行因 runner 租约过期失败**，90 秒不活动阈值对多工具例程过于激进，6/30 测试中为最主要失败模式 | 🟡 Open | 未见直接 PR |
| [#5504](https://github.com/nearai/ironclaw/issues/5504) | 例程创建流程挂起，无确认/错误反馈 | ✅ 已关闭 | — |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | Telegram 在 0.28.1 无法从 UI 自动设置 | ✅ 已关闭 | — |

### 🟡 P2 级（体验/功能受阻）

| Issue | 问题 | 状态 | 关联修复 |
|---|---|---|---|
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub 集成 HTTP 403，无法搜索/创建 Issue | 🟡 Open | 未见直接 PR |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | 定时例程每次运行均失败，报 "No thread attached"，成功率 0% | 🟡 Open | 未见直接 PR |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Slack 断开请求被 agent 错误拒绝 | 🟡 Open | [#7300](https://github.com/nearai/ironclaw/pull/7300) 部分相关 |
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | 审批通知不显示/消失 | 🟡 Open | 未见直接 PR |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | 活动面板不显示工具详情、运行中不更新 | 🟡 Open | [#7305](https://github.com/nearai/ironclaw/pull/7305)（软化失败摘要） |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | Slack DM 读取能力缺失 + capability_info 重试循环 | 🟡 Open | [#7157](https://github.com/nearai/ironclaw/pull/7157)（通道投递）相关 |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) | 例程创建响应暴露内部实现细节（cron 语法、内部命令引用） | 🟡 Open | 未见直接 PR |
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | Slack 已连接但例程仍报 "无投递目标" | 🟡 Open | [#7300](https://github.com/nearai/ironclaw/pull/7300) 相关 |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) | 聊天创建延迟随历史记录累积增长 | 🟡 Open | 未见直接 PR |
| [#5776](https://github.com/nearai/ironclaw/issues/5776) | 长输出 prompt 导致模型超时，被降级为泛化 "invalid result" 错误 | 🟡 Open | 未见直接 PR |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | 工具执行成功但最终因上下文压缩失败 | ✅ 已关闭 | — |

### 🟢 P3 级（体验优化）

- [#5557](https://github.com/nearai/ironclaw/issues/5557) Logs 深链接需打开两次才能加载会话（✅ 已关闭）
- [#5704](https://github.com/nearai/ironclaw/issues/5704) 聊天活跃时图片预览变透明（✅ 已关闭）
- [#5705](https://github.com/nearai/ironclaw/issues/5705) 终端图标无法禁用（✅ 已关闭）
- [#5706](https://github.com/nearai/ironclaw/issues/5706) 实例延迟时侧边栏显示原始线程 ID（✅ 已关闭）
- [#5510](https://github.com/nearai/ironclaw/issues/5510) 无法删除旧例程（🟡 Open）

**稳定性评估**：今日关闭 23 条 Issue，多为 QA bug_bash 积累的回归问题，团队清障效率较高。但 **P1 的 runner 租约问题（#5456）仍为 Open 状态**，该问题是 6/30 测试中的主要失败模式，建议优先处理。此外 "No thread attached"（#5836、#5507）系列问题反复出现，可能指向例程调度与线程绑定的系统性缺陷。

---

## 6. 功能请求与路线图信号

### 🔭 清晰的路线图信号

**Inspector 可观测性体系**（多个 PR + Issue 联动）
- [Issue #7220](https://github.com/nearai/ironclaw/issues/7220)：operator 检查 API 和实时数据流
- [PR #7235](https://github.com/nearai/ironclaw/pull/7235)（已关闭）、[#7236](https://github.com/nearai/ironclaw/pull/7236)、[#7239](https://github.com/nearai/ironclaw/pull/7239)、[#7277](https://github.com/nearai/ironclaw/pull/7277)
- **判断**：Inspector 系列已形成完整体系（快照、prompt 检查、工具详情、实时流、统计），预计在后续版本中作为运维核心能力推出，目标用户为部署自有 IronClaw 实例的开发者和平台团队

**显式频道投递工具**（[PR #7157](https://github.com/nearai/ironclaw/pull/7157)）
- 双通道模型将对话生命周期与通知投递分开，删除"投递启发式"逻辑，使投递行为可预测。这直接回应了 #5508（Slack 投递目标丢失）和 #5834（断开 Slack 被拒绝）等系列 Slack 集成问题

### 🧩 社区请求信号

- **Nostr 主机函数**（[PR #7184](https://github.com/nearai/ironclaw/pull/7184)）：为 WASM 工具沙箱添加 `nostr-sign-event`、`nostr-get-public-key`、`nostr-verify-signature` 三个主机函数，支持 BIP-340 Schnorr 签名，私钥不离开主机。作者为 contributor: new，若合入将成为社交协议集成的重要扩展
- **Docker/Railway 用户沙箱配置**（[PR #7214](https://github.com/nearai/ironclaw/pull/7214)）：按租户+用户隔离工作区，非 root Python worker 运行命令，是多租户安全加固信号

### 📌 可能纳入下一版本

- OAuth 登录界面优化（[PR #7304](https://github.com/nearai/ironclaw/pull/7304)）：将 OAuth 按钮放在网关 token 表单之上，降低 WebChat v2 登录门槛
- OAuth scope 参数修复（[PR #7309](https://github.com/nearai/ironclaw/pull/7309)）：修复空 scope 上限时仍附加 `scope=` 参数导致授权服务器拒绝的 bug

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实用户痛点：

**😤 例程/自动化可靠性**
> "例程创建后显示 'I'll create a routine that...' 但永不返回确认、详情或错误，请求无限挂起。"（[#5504](https://github.com/nearai/ironclaw/issues/5504)）

> "定时例程每次运行都失败，0% 成功率，所有运行标记为 Failed——'No thread attached'。"（[#5836](https://github.com/nearai/ironclaw/issues/5836)）

**📋 Slack 集成的挫败感**
> "Slack 已经连接，旧例程仍然能正常发消息，但新建例程却告诉我 '没有配置 Slack 投递目标' 并要求我重新连接。"（[#5508](https://github.com/nearai/ironclaw/issues/5508)）

> "要求 agent 断开 Slack，它却回复了关于投递目标的无关内容，Slack 依然连接着，没有任何办法断开。"（[#5834](https://github.com/nearai/ironclaw/issues/5834)）

> "Slack 通知被发送给了无关用户而不是发起工作流的用户……敏感结果投递给了错误的人。"（[#5877](https://github.com/nearai/ironclaw/issues/5877)）

**🔍 可观测性不足**
> "活动面板把工具调用折叠成 'Activity - N tools' 摘要，不显示调用了什么工具、返回了什么。运行中也不实时更新，必须等运行结束。"（[#5701](https://github.com/nearai/ironclaw/issues/5701)）

> "运行失败后显示泛化的 'invalid result' 错误，UI 不指示哪个工具失败、每个工具返回了什么错误、为什么终止。"（[#5552](https://github.com/nearai/ironclaw/issues/5552)）

**⚙️ 系统反馈过载/不当**
> "创建例程的确认响应中包含内部实现细节：触发器名称标识符、原始 cron 语法、内部命令引用和系统级配置——这些是开发者导向的信息。"（[#5707](https://github.com/nearai/ironclaw/issues/5707)）

**积极信号**：用户对工具失败的视觉反馈有明确期待——[PR #7305](https://github.com/nearai/ironclaw/pull/7305) 关闭了 #7302（失败的整个活动总结被涂成红色，即使 agent 已恢复并成功完成），说明团队在倾听 UI 细节反馈并快速响应。

---

## 8. 待处理积压

### ⚠️ 长期未关闭的高优先级 Issue

| Issue | 创建时间 | 天数 | 问题 | 影响 |
|---|---|---|---|---|
| [#5456](https://github.com/nearai/ironclaw/issues/5456) `P1` | 2026-06-30 | 38天 | Runner 租约过期导致例程运行失败 | **多工具例程全面失败**，6/30 测试主要失败模式 |
| [#5508](https://github.com/nearai/ironclaw/issues/5508) `P2` | 2026-07-01 | 37天 | Slack 已连接但例程报无投递目标 | 新建例程无法使用 Slack 投递 |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) `P2` | 2026-07-01 | 37天 | 聊天创建延迟随历史累积增长 | 长期用户性能持续恶化 |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) `P3` | 2026-07-01 | 37天 | 无法删除旧例程 | 用户被迫"完全重启"清除，存量例程持续运行旧配置 |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) `P2` | 2026-07-06 | 32天 | 例程创建响应暴露内部实现细节 | 开发者导向信息泄露给终端用户 |
| [#5776](https://github.com/nearai/ironclaw/issues/5776) `P2` | 2026-07-07 | 31天 | 长输出 prompt 被降级为泛化错误 | 根因被隐藏，用户无法诊断 |

此外，6 月 2 日创建的 **Qwen3.6-35B 系列 P2 问题**（[#4344](https://github.com/nearai/ironclaw/issues/4344)、[#4343](https://github.com/nearai/ironclaw/issues/4343)、[#4341](https://github.com/nearai/ironclaw/issues/4341)、[#4342](https://github.com/nearai/ironclaw/issues/4342)、[#4340](https://github.com/nearai/ironclaw/issues/4340)、[#4339](https://github.com/nearai/ironclaw/issues/4339)）虽距今 66 天，仍标记为 Open，可能已不是当前重点模型，但建议团队批量确认这些是否仍在影响当前版本、或做关停处理。

---

**日报总结**：IronClaw v1.1.0 已稳定发布，扩展生态进入正轨；团队在 Inspector 可观测性上的投入预示下一阶段的运维能力升级。当前最大风险点是 Slack 集成系列问题（投递错误、目标丢失、无法断开）和例程调度可靠性（租约过期、No thread attached），这两块均需系统性修复而非单点补丁。建议维护者优先处理 #5456（P1 租约）与 #5836（例程 0% 成功率），并在 v1.1.x patch 版本中覆盖 Slack 回归修复。

*数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw) | 统计窗口：2026-08-06 ~ 2026-08-07*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-07）

> 数据窗口：2026-08-06 ~ 2026-08-07

## 1. 今日速览

过去 24 小时 LobsterAI 共更新 6 条 Issue（全部为新增/活跃）、4 条 PR（1 条关闭、3 条待合并），无新版本发布。今日新增 2 条 Bug 反馈（[#2447](https://github.com/netease-youdao/LobsterAI/issues/2447)、[#2443](https://github.com/netease-youdao/LobsterAI/issues/2443)）和 1 条功能请求（[#2444](https://github.com/netease-youdao/LobsterAI/issues/2444)），同时有 4 个历史 Issue/PR 被标记为 stale，说明维护者可能正在清理积压。整体活跃度中等，当前节奏以 Bug 修复和稳定性维护为主，没有大的功能合并。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭的 PR 仅 1 个：

- [PR #2446 [CLOSED]](https://github.com/netease-youdao/LobsterAI/pull/2446)：`fix(win-installer): rescue null watchdog exit code via extractor`，修复 Windows 安装程序中 watchdog 退出码为空的问题，属于安装体验与稳定性改进，已关闭。

另有 1 个新 PR 提交待合并：

- [PR #2445 [OPEN]](https://github.com/netease-youdao/LobsterAI/pull/2445)：`fix(openclaw): strip plugin-index-managed keys from config.set`，修复 OpenClaw 配置写入时插件索引管理键冲突的问题。

整体来看，今日没有功能性大特性合入，项目处于小幅修复的平稳推进状态。

## 4. 社区热点

今日 Issue 整体评论量不高（单条最多 1 条评论），但如下问题具备较高关注价值：

- [Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447)：用户反馈执行任务“没有出结果，也没有错误信息”，属于直接影响核心使用体验的问题，容易引发广泛共鸣，目前缺少复现信息。
- [Issue #2442](https://github.com/netease-youdao/LobsterAI/issues/2442)：用户质疑 LobsterAI exec 内核始终是 PowerShell 5.1 而非 7.4，并在 issue 中自行分析了原因（Node.js 默认调用 `powershell.exe`），反映了用户对底层实现细节的兴趣和官方说明缺失的问题。
- [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) 与 [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198)：两条创建于 4 月 1 日的老 issue 被标记为 stale 并仍在开放状态，说明“工作目录文件污染”和“网关重启状态不透明”两个长期痛点至今未解决，后续可能被持续顶起。

## 5. Bug 与稳定性

按严重程度排列：

1. **[Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443) 模型 ID 含斜杠的自定义 Provider 无法在界面中使用（SiliconFlow）**
   影响所有模型 ID 带 `/` 的 OpenAI 兼容服务商，用户已给出明确版本和复现路径，严重程度为中。暂无对应 fix PR。

2. **[Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447) 执行没有出结果，也没有错误信息**
   新上报，信息尚不足以定位，需要用户补充运行环境和复现步骤。暂无 fix PR。

3. **[Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) 网关重启到一半进度条消失，后续对话显示模型不可用**
   老 issue，已被标记 stale，至今无 fix PR。涉及网关状态展示和错误提示误导问题。

间接相关的稳定性改进：[PR #2446](https://github.com/netease-youdao/LobsterAI/pull/2446) 已修复 Windows 安装器 watchdog 退出码空值问题，今日关闭。

## 6. 功能请求与路线图信号

- [Issue #2444](https://github.com/netease-youdao/LobsterAI/issues/2444) **输入框编辑模式**：用户希望支持配置默认回车换行行为，或提供“编辑模式”开关，解决长 Prompt 编辑时误发送的痛点。这是一个低成本、高感知度的交互优化，较有可能进入下一迭代。
- [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197) **Agent 管理页面交互优化**：老 PR，与主分支存在冲突且已被 stale 标记，需要维护者决定是否继续推进。
- [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199) **模型级 context window 和 maxTokens 设置**：长期未合并，与今日 [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) 反映的模型配置灵活性需求有所呼应，属于路线图中的潜在能力扩展。

## 7. 用户反馈摘要

- **工作目录污染**：[Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196) 用户对每次切换工作目录强制生成 AGENTS.md、USER.md 等 6 个文件感到不满，表示“太乱了，删了还要重建”，建议支持全局 agents.md 或改为隐藏目录。
- **网关重启体验差**：[Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198) 用户遇到网关重启时进度条消失、之后对话均提示模型不可用的情况，对重启状态的可视化反馈和错误提示的误导性提出质疑。
- **底层内核版本疑问**：[Issue #2442](https://github.com/netease-youdao/LobsterAI/issues/2442) 用户对 exec 内核停留在 PS 5.1 表示不解，并自行推断与 Node.js 默认 shell 行为有关，说明文档中缺少对这一设计选择的说明。
- **输入交互不便**：[Issue #2444](https://github.com/netease-youdao/LobsterAI/issues/2444) 用户反映长 Prompt 编辑时需要频繁 Shift+Enter 换行，一旦忘记按下就会直接误发送，希望增加可配置的回车行为或编辑模式。

## 8. 待处理积压

**长期未响应 / 被 stale 标记：**

- [Issue #1196](https://github.com/netease-youdao/LobsterAI/issues/1196)：不要强制在工作目录中建立 AGENTS.md、User.md 等 6 个文件（2026-04-01 创建，stale）
- [Issue #1198](https://github.com/netease-youdao/LobsterAI/issues/1198)：网关重启到一半进度条消失，后续对话模型不可用（2026-04-01 创建，stale）
- [PR #1197](https://github.com/netease-youdao/LobsterAI/pull/1197)：Agent 管理页面交互优化（与主分支冲突，stale）
- [PR #1199](https://github.com/netease-youdao/LobsterAI/pull/1199)：模型 context window 和 token 设置（stale）

**新增待响应 / 待 review：**

- [Issue #2442](https://github.com/netease-youdao/LobsterAI/issues/2442)：PS 5.1 vs PS 7.4 内核版本疑问
- [Issue #2443](https://github.com/netease-youdao/LobsterAI/issues/2443)：模型 ID 含斜杠的自定义 Provider 无法使用
- [Issue #2444](https://github.com/netease-youdao/LobsterAI/issues/2444)：输入框编辑模式功能请求
- [Issue #2447](https://github.com/netease-youdao/LobsterAI/issues/2447)：执行无结果无错误信息
- [PR #2445](https://github.com/netease-youdao/LobsterAI/pull/2445)：OpenClaw 配置键剥离修复，等待 review

---

**整体评估**：项目维持正常的 Issue/PR 流转，Bug 响应机制运转中，但老 issue/pr 积压和 stale 化趋势值得关注。社区诉求集中在“执行透明性”和“输入交互体验”两个方向，可作为后续版本迭代的参考信号。

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

# CoPaw 项目动态日报 — 2026-08-07

> 数据来源：github.com/agentscope-ai/CoPaw | 统计周期：过去 24 小时


## 1. 今日速览

CoPaw（QwenPaw）项目在 2026-08-07 保持高活跃度：过去 24 小时共产生 **78 条 Issue/PR 更新**，其中 PR 合并/关闭 30 条、Issue 关闭 14 条，发布管线运转正常。然而，**2.0.1 版本上的稳定性问题仍占主导**——空响应不报错、MCP 工具规律性失效、Agent 无限循环等 Bug 在本周期内集中涌现，且多个与 `agentscope 2.0.4.post1` 的兼容性问题指向框架层面的同步滞后。项目处于 **2.0.x 修补与 2.1.0 预发布并行**的阶段，合并的 PR 以功能增强和架构修复为主，无新版本发布。


## 2. 版本发布

**无**。


## 3. 项目进展

过去 24 小时合并/关闭的 PR 中，以下 5 项对项目有实质性推动：

- **AG-UI 协议开放接入**（[#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337)）——新增 `/protocol/agui/chat` 端点，以 SSE 流式输出标准 AG-UI 协议事件。**意义**：使 QwenPaw 可作为标准 AG-UI 服务端被外部消费者集成，打开互操作性空间。

- **用户上下文透明穿透链路**（[#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525)）——将 `user_id`、`user_name`、`channel` 及自定义 metadata 从 Chat API 透传到 Agent → Tool → MCP → SKILL CLI 全链路，且全程程序化、LLM 不可见。**意义**：为多租户场景和审计追踪奠定数据基础。

- **文件/文件夹管理 REST API**（[#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651)）——补齐 `/files` 路由的删除、重命名/移动、创建目录、单文件上传/下载、目录列表 6 个操作，复用 FileGuard 安全模型。**意义**：前端文件管理页从"预览"走向全功能。

- **保留工具调用额外元数据**（[#6759](https://github.com/agentscope-ai/QwenPaw/pull/6759)）——在不破坏 AgentScope 严格 `ToolCallBlock` 的前提下，持久化 Gemini thought signatures 等 provider 特定元数据，跨会话恢复与上下文压缩后仍可还原。**意义**：修复了多轮对话中推理过程丢失的隐患。

- **返回类型化工具调用**（[#6605](https://github.com/agentscope-ai/QwenPaw/pull/6605)）——从 thinking/text 标签中提取的工具调用现在以 AgentScope 2 `ToolCallBlock` 对象返回，确保流式累积与多工具调用的正确性。

**整体判断**：项目在持续消化从 2.0 到 2.1 的架构升级债务，文件管理、协议互操作、上下文元数据生命周期三线并进。2.1.0 的功能版图已显轮廓，但完成度仍不足以支撑正式发布。


## 4. 社区热点

| 排名 | 条目 | 类型 | 评论数 | 核心诉求 |
|------|------|------|--------|----------|
| 1 | [#6684 增加频道的重试功能](https://github.com/agentscope-ai/QwenPaw/issues/6684) | Issue (CLOSED) | 8 | 自建 Matrix 场景下，QwenPaw 启动快于 Matrix 服务导致连接失败，此后无重试/健康检测，只能手动重新保存频道。用户希望有自动恢复机制 |
| 2 | [#6588 `spawn_subagent` 空 batch 占位符被误判为批处理模式](https://github.com/agentscope-ai/QwenPaw/issues/6588) | Issue (CLOSED) | 6 | Responses 兼容的模型/提供商路径返回空 `batch` 占位符，QwenPaw 将其视为批处理模式，导致单任务调用行为错误 |
| 3 | [#6601 QwenPaw 不报空响应错误](https://github.com/agentscope-ai/QwenPaw/issues/6601) | Issue (OPEN) | 5 | 长会话逼近窗口上限后模型空响应，QwenPaw 不报错，会话彻底失去响应。用户指出这是"框架层问题" |
| 4 | [#6667 DeepSeek thinking 模式多轮对话失败](https://github.com/agentscope-ai/QwenPaw/issues/6667) | Issue (CLOSED) | 5 | OpenAI formatter 跳过 `ThinkingBlock` 后 `reasoning_content` 缺失，重试机制仅对首次生效，多轮对话必现 |

**共性分析**：今日热点集中指向**"长会话与多轮交互的可靠性"**——空响应、推理内容丢失、连接自动恢复失败，背后反映的是 2.0.1 在会话生命周期管理上的薄弱环节。用户对这些问题的容忍度在下降（"这是框架层问题"的措辞），需要维护团队尽快以系统性方案回应。

PR 侧讨论最高的条目是刚合并的 [#6651 文件管理 API](https://github.com/agentscope-ai/QwenPaw/pull/6651) 与 [#6759 工具调用元数据保留](https://github.com/agentscope-ai/QwenPaw/pull/6759)，前者是社区期盼已久的文件管理后端能力，后者则直接呼应了 DeepSeek thinking 模式类问题。


## 5. Bug 与稳定性

今日报告/活跃的 Bug 按严重程度排列：

### 🔴 严重（会导致服务不可用或数据错误）

| Issue | 描述 | 状态 / 对应修复 |
|-------|------|----------------|
| [#6601 空响应不报错](https://github.com/agentscope-ai/QwenPaw/issues/6601) | 长会话因工具调用累积接近窗口上限，模型空响应但 QwenPaw 不报错，会话失去响应。属框架层问题 | OPEN，暂无对应 PR |
| [#6768 Agent 完成多步任务后进入无限循环](https://github.com/agentscope-ai/QwenPaw/issues/6768) | 导入财务记录过程中 Agent 完全无响应数小时，用户消息收到但未处理 | OPEN，**[#6774](https://github.com/agentscope-ai/QwenPaw/pull/6774) 有直接修复**（`honor in_loop_modes for goal and mission gates`） |
| [#6732 MCP 工具规律性失效](https://github.com/agentscope-ai/QwenPaw/issues/6732) | 每隔数小时 MCP 工具全部失效，提示"未注册或不存在"，重启 Docker 容器恢复 | OPEN，暂无对应 PR |
| [#6612 与 agentscope 2.0.4.post1 不兼容](https://github.com/agentscope-ai/QwenPaw/issues/6612) | `Msg.content` 类型崩溃 + 工具权限死锁，proactive/memory-evolving 子系统双重故障 | OPEN，暂无对应 PR |

### 🟠 中等（影响特定场景或造成体验受损）

| Issue | 描述 | 状态 / 对应修复 |
|-------|------|----------------|
| [#6700 超大工具输出导致会话卡死](https://github.com/agentscope-ai/QwenPaw/issues/6700) | 工具输出达数 MB 时历史会话加载卡死，且持续参与后续模型请求可能触发窗口超限 | CLOSED，建议新增输出截断与历史分页 |
| [#6755 跨天会话日期/星期判断错乱](https://github.com/agentscope-ai/QwenPaw/issues/6755) | Agent 将 8/6（周四）错认为周三，日程任务定错日期（周五订到周六） | OPEN，暂无对应 PR |
| [#6775 杀毒软件报 Trojan Loader](https://github.com/agentscope-ai/QwenPaw/issues/6775) | Malware Bytes 在 Windows 桌面版发现 Trojan Loader，用户表示已卸载等待回应 | OPEN，需官方立即回应误报/真实风险 |
| [#6756 `run_tool_batch` 报 `No toolkit available`](https://github.com/agentscope-ai/QwenPaw/issues/6756) | 2.1.0b1 中 `run_tool_batch` 对任何 agent 均失败，ContextVar 注入时机错误 | OPEN，暂无对应 PR |
| [#6773 Linux 上循环模式安全门失效](https://github.com/agentscope-ai/QwenPaw/issues/6773) | `in_loop_modes` 配置为 no-op，doom-loop / rubric gates 永不激活，安全门静默关闭 | OPEN，**[#6774](https://github.com/agentscope-ai/QwenPaw/pull/6774) 有直接修复** |

### 🟡 轻微（体验问题或边界条件）

| Issue | 描述 | 状态 / 对应修复 |
|-------|------|----------------|
| [#6762 桌面版长命令不换行](https://github.com/agentscope-ai/QwenPaw/issues/6762) | CodeMirror 缺少 `lineWrapping`，`execute_shell_command` 长命令横向溢出 | CLOSED |
| [#6731 `sandbox_config` 触发 dataclass 异常](https://github.com/agentscope-ai/QwenPaw/issues/6731) | 模型传 `sandbox_config` 时 `replace()` 崩溃 | CLOSED |
| [#6760 `qwenpaw task` 命令行报错](https://github.com/agentscope-ai/QwenPaw/issues/6760) | 升级至 2.0.1 后 task 命令执行出错（sandbox 不可用告警） | CLOSED |

> 已修复/关闭的还有：[#6698 浏览器 SDK open() 失败](https://github.com/agentscope-ai/QwenPaw/issues/6698)、[#6707 含工具调用的历史 + thinking 模式 400 错误](https://github.com/agentscope-ai/QwenPaw/issues/6707)、[#6708 SSE 流内 503 不重试](https://github.com/agentscope-ai/QwenPaw/issues/6708)、[#6687 OpenRouter 多模态探测覆盖文档能力](https://github.com/agentscope-ai/QwenPaw/issues/6687)、[#6619 `ToolCallBlock` 缺少 `extra_content` 字段](https://github.com/agentscope-ai/QwenPaw/issues/6619)、[#6557 MCP 工具名以连字符开头致 Kimi 400](https://github.com/agentscope-ai/QwenPaw/issues/6557)、[#6476 Matrix 端到端加密不可用](https://github.com/agentscope-ai/QwenPaw/issues/6476)、[#6667 DeepSeek thinking 多轮失败](https://github.com/agentscope-ai/QwenPaw/issues/6667)、[#6588 spawn_subagent 批处理误判](https://github.com/agentscope-ai/QwenPaw/issues/6588)、[#6684 频道重试](https://github.com/agentscope-ai/QwenPaw/issues/6684)。

**稳定性评估**：今日 **14 个 Issue 关闭 / 14 个活跃**，其中关闭的多数为已修复或已合入修复 PR 的 Bug。但**尚未合入修复**的严重 Bug 仍有 4 个（#6768、#6732、#6612、#6601），高压线仍在。


## 6. 功能请求与路线图信号

### 新提出的功能请求（OPEN）

| Issue | 需求 | 关联性分析 |
|-------|------|-----------|
| [#6724 MCP 工具调用超时可配置](https://github.com/agentscope-ai/QwenPaw/issues/6724) | `MCPClientConfig` 增加 `timeout` 字段 + 调用级上限保护，避免慢 MCP 服务器卡死整轮 | **高** - MCP 相关 Bug 连续出现（#6732），此需求直击可靠性短板 |
| [#6728 微信审批支持中文操作](https://github.com/agentscope-ai/QwenPaw/issues/6728) | 微信渠道审批提示目前仅英文 "Approve"/"Deny"，建议中文本地化 | **中** - 低成本高用户感知，适合小版本快速跟进 |
| [#6770 Chrome 标签生命周期可配置](https://github.com/agentscope-ai/QwenPaw/issues/6770) | 用户 Chrome 标签的存活时间应跨响应周期可配置 | **中** - 浏览器 SDK 的功能深度拓展 |
| [#6765 增加匈牙利语支持](https://github.com/agentscope-ai/QwenPaw/issues/6765) | 非开发者用户请求增加更多欧盟语言 | **低** - 需结合 i18n 基础设施评估 |
| [#6761 MCP 2026-07-28 stateless 规范支持](https://github.com/agentscope-ai/QwenPaw/issues/6761) | MCP 协议核心从 stateful 转向 stateless，询问 QwenPaw 是否跟进 | **高优先级信号** - 新 MCP 规范是 breaking change，需尽快响应 |
| [#6684 频道重试功能](https://github.com/agentscope-ai/QwenPaw/issues/6684) | 自建 Matrix 时启动竞态导致失败，需自动重试与健康检测 | **已关闭** - 社区在等修复的落地 |

### 路线图信号

- **MCP 可靠性**是本周期最强烈的信号：MCP 工具失效（#6732）、MCP 超时配置（#6724）、MCP 新规范（#6761）、MCP 工具名校验（#6557）四线并发。**2.1.0 应当将 MCP 客户端健壮性列为优先事项。**
- **记忆/Embedding 功能链**在 PR 侧活跃：[#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772)（ReMe 配置与 embedding 生命周期改进）与 [#6771](https://github.com/agentscope-ai/QwenPaw/pull/6771)（Embedding 模型配置指南）同时提交，加上此前 [#6564](https://github.com/agentscope-ai/QwenPaw/pull/6564)（压缩前 flush pending turns），**记忆子系统正在系统性加强**。
- **OneBot 渠道增强**：[@GMsure](https://github.com/GMsure) 提交了 [#6769 引用回复展开](https://github.com/agentscope-ai/QwenPaw/pull/6769) 和 [#6715 远程语音/图片媒体处理](https://github.com/agentscope-ai/QwenPaw/pull/6715)，QQ/OneBot 渠道的体验补全在推进。

**下一版本预判**：2.1.0 大概率纳入——MCP 超时配置、Embedding 模型工厂与配置指南、OneBot 媒体处理。微信中文审批和频道重试若及时合入，也可期待。


## 7. 用户反馈摘要

从今日 Issues 评论中提取的真实用户声音：

| 用户画像 | 使用场景 | 核心痛点/反馈 |
|----------|----------|--------------|
| 自建 Matrix 服务用户（[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)） | 私有化部署，服务器重启后恢复服务 | "每次服务器启动后都需要手动重新保存一次频道才能恢复连接" —— **自动恢复能力是自建用户的刚需** |
| 长会话重度用户（[#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601)） | 长时间对话、大量工具调用 | "到那时模型仍会空响应，QwenPaw 仍不报错。这是框架层问题" —— **用户已对问题定性，期待框架级修复** |
| 金融数据导入用户（[#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768)） | REST API 批量导入财务记录 | Agent 无响应数小时，"用户消息收到但从未处理" —— **对 Agent 自主执行缺乏监督手段** |
| 日程管理用户（[#6755](https://github.com/agentscope-ai/QwenPaw/issues/6755)） | 跨天会话中的日期推理 | 周四被说成周三，日程被错误地定到周六 —— **日期/时间推理错误直接造成现实损失** |
| MCP 服务使用者（[#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)） | Docker 部署 mcp 工具 | "每隔一个晚上或者几个小时 MCP 工具就失效，重启才能恢复" —— **服务的间歇性不可用比完全不工作更令人沮丧** |
| Windows 桌面版用户（[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)） | 安全软件扫描 | 杀软报 Trojan Loader，用户已卸载："IS this really malware or a false positive?" —— **品牌信任因安全告警受损，需官方立即澄清** |
| 匈牙利语用户（[#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765)） | 非英语母语用户体验 | "Im not software developer but I'm an enthusiastic Qwenpaw user" —— **社区有非技术用户的存在，本地化有真实需求** |
| MCP 接入开发者（[#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557)） | 对接 Kimi 等严格校验 API | 工具名以 `-` 开头导致 400 错误 —— **工具名规范化是生态兼容性的前提** |

**整体满意度倾向**：用户对 QwenPaw 的功能深度和 Agent 能力表达认可，但对稳定性和错误透明度的不满意在积累。多位用户在描述中已经主动定位到框架层根因，**社区的工程能力正在反向推动项目质量**。


## 8. 待处理积压

以下为长期未响应或需维护者重点关注的事项：

| 条目 | 类型 | 创建时间 | 状态 | 积压时长 | 风险提示 |
|------|------|----------|------|----------|----------|
| [#6337 AG-UI 协议端点](https://github.com/agentscope-ai/QwenPaw/pull/6337) | PR | 2026-07-22 | **已关闭** | 16 天 | 功能完整但评审周期长，最终合入的 commit 需确认是否完整保留了 SSE 与隔离语义 |
| [#6564 压缩前 flush pending turns](https://github.com/agentscope-ai/QwenPaw/pull/6564) | PR | 2026-07-30 | OPEN | 8 天 | 修复 #6555 的独立缺口，已标记 Under Review，应尽快推动 |
| [#6601 空响应不报错](https://github.com/agentscope-ai/QwenPaw/issues/6601) | Issue | 2026-07-31 | OPEN | 7 天 | 框架层问题，评论 5 条但无维护者回应，**可能造成用户流失** |
| [#6612 agentscope 2.0.4.post1 不兼容](https://github.com/agentscope-ai/QwenPaw/issues/6612) | Issue | 2026-07-31 | OPEN | 7 天 | 与上游 AgentScope 的版本错位，proactive 子系统崩溃 + 死锁，**阻塞用户升级路径** |
| [#6756 `run_tool_batch` 全失败](https://github.com/agentscope-ai/QwenPaw/issues/6756) | Issue | 2026-08-06 | OPEN | 1 天 | 2.1.0b1 上的回归，ContextVar 注入时机错误，需在正式发布前修复 |
| [#6773 Linux doom-loop 安全门失效](https://github.com/agentscope-ai/QwenPaw/issues/6773) | Issue | 2026-08-06 | OPEN | 1 天 | 安全相关（repetition protection 静默失效），虽有 [#6774 PR](https://github.com/agentscope-ai/QwenPaw/pull/6774) 修复，但需确认评审与合入节奏 |
| [#6775 杀毒软件报警](https://github.com/agentscope-ai/QwenPaw/issues/6775) | Issue | 2026-08-07 | OPEN | 0 天 | **品牌信任危机**，需官方在 24 小时内回应误报/真实风险分析 |

**给维护者的优先级建议**：
1. 立即回应 #6775（安全告警）——一句话澄清即可避免用户流失
2. 推动 #6774 合入，同时关闭 #6768 与 #6773 两个高危状态
3. 对 #6601 和 #6612 给出明确的框架层修复时间表——这两个问题分别代表"会话可靠性"与"依赖兼容性"两大方向
4. 关注 #6761（MCP 新规范），MCP 生态的 breaking change 不跟进会在一两个版本后成为技术债

---

*本日报由 AI 分析师基于 GitHub 公开数据自动生成，数据统计截至 2026-08-07 末期。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-07

## 1. 今日速览

ZeroClaw 在过去 24 小时保持高活跃度：共 36 条 Issue 更新（新开/活跃 24、关闭 12）与 50 条 PR 更新（待合并 42、合并/关闭 8）。当前无新版本发布，项目仍处于 0.8.x 迭代期，v0.9.0 的跟踪队列（#7432）持续累积安全性、网关与破坏性变更工作。值得关注的是：待合并 PR 积压已增至 42 条，同时多个高优先级安全修复（SSRF、API Key 泄漏、/api/pair 锁死绕过）正在等待作者响应或维护者审核；SOP 子系统连续出现 5+ 个文档与实现不一致的 Bug，说明近期 0.8.4 的 SOP 功能上线较匆忙。整体健康度中等偏积极，安全类问题处置迅速，但 PR 队列存在明显堆积风险。

---

## 2. 版本发布

今日无新版本发布（最新仍为 0.8.4 迭代期）。

---

## 3. 项目进展

今日合计关闭 12 个 Issue、8 个 PR，主要集中在安全修复、CI 强化和文档纠错：

- **安全漏洞修复确认**：[#7947](zeroclaw-labs/zeroclaw Issue #7947) 已关闭 —— `execute_pipeline` 绕过 per-agent 工具门控的 confused deputy 问题（严重度 S0）得到处置；[#8615](zeroclaw-labs/zeroclaw Issue #8615) 已关闭 —— 修复 compatible provider 无条件剥离 `<think>` 标签导致内容静默丢失的问题。
- **CI 与工程基础设施**：[#9741](zeroclaw-labs/zeroclaw PR #9741) 已合并/关闭 —— 规范 all-features 镜像校验，防止 MSRV 车道与 Containerfile 全功能选择漂移；[#9456](zeroclaw-labs/zeroclaw Issue #9456) 已关闭 —— PR CI 增加 Containerfile 变更校验；[#9172](zeroclaw-labs/zeroclaw Issue #9172) 已关闭 —— ZeroCode 斜杠命令统一为单一描述符来源。
- **Provider 生态扩充**：[#657](zeroclaw-labs/zeroclaw Issue #657) 已关闭 —— Kimi Code provider 支持落地，月之暗面（Moonshot）与 Kimi Coding 将作为独立 provider 并存；[#8720](zeroclaw-labs/zeroclaw Issue #8720) 已关闭 —— Bedrock Nova 2 Lite 的 cachePoint 可通过配置文件禁用。
- **CLI 与渠道修复**：[#9672](zeroclaw-labs/zeroclaw Issue #9672) 已关闭 —— `cron add --help` 中三处示例全部失效的问题修复；[#8950](zeroclaw-labs/zeroclaw Issue #8950) 已关闭 —— Telegram 命令菜单因超过 100 条上限注册失败；[#9657](zeroclaw-labs/zeroclaw Issue #9657) 已关闭 —— 受保护字面量检查器误将通用 "Signal" 识别为渠道名；[#9763](zeroclaw-labs/zeroclaw Issue #9763) 已关闭 —— 1Password 引用加载的 flaky 测试修复。

整体上前进方向明确：安全收敛、CI 补强、provider 生态扩张，同时 SOP 与 ZeroCode 子系统的质量问题正在集中暴露。

---

## 4. 社区热点

- **[#6808 RFC: Work Lanes, Board Automation, and Label Cleanup](zeroclaw-labs/zeroclaw Issue #6808)**（19 评论）—— 项目治理类 RFC，已迭代至 Rev. 24，讨论工作流自动化、看板与标签清理。社区对维护流程的规范化诉求强烈，但批准被推迟、滚动推进中。
- **[#8692 Maintainer decision queue for RFCs and design issues](zeroclaw-labs/zeroclaw Issue #8692)**（11 评论）—— 维护者决策跟踪队列，反映 RFC/设计问题等待维护者裁决的积压情况，间接说明决策瓶颈已成为社区关注焦点。
- **[#9106 RFC: A2A outbound client (A2ATool)](zeroclaw-labs/zeroclaw Issue #9106)**（11 评论）—— A2A 出站客户端设计，社区对跨代理主动协作能力期待很高，已有对应 PR #9324 进入 Phase 1 实现。
- **[#9246 RFC: Preserve Todo tracker configuration during ZeroCode ownership migration](zeroclaw-labs/zeroclaw Issue #9246)**（11 评论）—— ZeroCode 所有权迁移中配置保留问题，涉及多轮评审后的合并方案，关注配置零丢失。
- **[#6954 RFC: Provenance, conversation binding, and reply contract](zeroclaw-labs/zeroclaw Issue #6954)**（10 评论）—— 内部发起代理轮次的来源追踪与回复契约，修订后补充了身份稳定性、绑定并发等边界澄清。

**分析**：社区热度集中在"治理流程优化"与"跨代理互操作"两大主题。前者反映项目规模扩大后的维护瓶颈，后者表明用户对多代理协作场景有明确需求，且已从 RFC 走向实现。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

**安全风险**
- [#9328](zeroclaw-labs/zeroclaw Issue #9328) `[OPEN] verifiable-intent 未验证凭据链即评估约束` —— 安全验证逻辑可被调用方伪造，风险 high，暂无 PR，需尽快响应。
- [#9397](zeroclaw-labs/zeroclaw Issue #9397) `[OPEN] WhatsApp 空 allowed_groups 应视为 permit-none` —— 当前空列表意味着"放行所有群组"，违背最小权限原则；已有 RFC 与修复讨论，risk high。
- 对应修复 PR 在途：[#8826](zeroclaw-labs/zeroclaw PR #8826) image_gen 下载 URL 防 SSRF、[#9435](zeroclaw-labs/zeroclaw PR #9435) Gemini API Key 从错误文本中清除、[#9438](zeroclaw-labs/zeroclaw PR #9438) /api/pair 防锁死绕过，均等待作者补充或维护者审核。

**高影响稳定性**
- [#9799](zeroclaw-labs/zeroclaw Issue #9799) `[OPEN] 长期运行的 ephemeral daemon CPU 飙至 140-177%`，伴随大量重复数据库句柄，疑似句柄泄漏，0.8.4 新增。
- [#9800](zeroclaw-labs/zeroclaw Issue #9800) `[OPEN] SIGTERM 使终端残留 raw 与 mouse-tracking 模式`，退出后终端不可用，影响 ZeroCode TUI 用户体验。
- [#9779](zeroclaw-labs/zeroclaw Issue #9779) `[OPEN] sops_dir 文档默认值未被 daemon 遵守`，SOP 子系统静默不加载，用户按文档配置完全失效。
- [#9786](zeroclaw-labs/zeroclaw Issue #9786) `[OPEN] 格式错误的 SOP.toml 被静默丢弃`，`sop list` 与 `sop validate` 均无法暴露错误，与 SOP 不存在无法区分。
- [#9770](zeroclaw-labs/zeroclaw Issue #9770) `[OPEN] cron update 静默丢弃声明式作业的 6 列修改`，数据一致性风险。
- [#9771](zeroclaw-labs/zeroclaw Issue #9771) `[OPEN] zeroclaw-gateway 默认 feature 下 clippy -D warnings 失败`，CI 质量门槛未达标。
- [#9783](zeroclaw-labs/zeroclaw Issue #9783) `[OPEN] SOP finish_run 接受失败原因却丢弃`，失败记录缺少原因，可观测性缺陷。

**已关闭（今日）**：execute_pipeline 越权（S0）、compatible provider 丢弃内容（S2）、Telegram 命令菜单注册失败、cron add 示例失效、flaky 测试、受保护字面量误报、XOR 加密历史 Issue #1。

**总体判断**：安全响应迅速（当日关闭 S0），但 SOP 子系统的批量文档/实现偏差问题值得警惕，且 42 个待合并 PR 中包含多个安全修复，建议维护者优先评审。

---

## 6. 功能请求与路线图信号

结合 RFC 与对应 PR，以下方向最可能进入 v0.9.0：

- **A2A 出站客户端**：[RFC #9106](zeroclaw-labs/zeroclaw Issue #9106) + [PR #9324](zeroclaw-labs/zeroclaw PR #9324) —— 已进入 Phase 1 实现，提供 4 个 a2a_* 工具与共享 Serde 线模型，默认关闭 `[a2a.client]` 配置。跨代理协作是明确路线图项。
- **按模型能力配置**：[RFC #7100](zeroclaw-labs/zeroclaw Issue #7100) —— 为每个模型别名增加 `vision`、`context_window` 配置，修正 provider 族默认值与实际模型不符的问题，涉及能力检查、上下文预算与 UI 展示。
- **内部轮次的来源/回复契约**：[RFC #6954](zeroclaw-labs/zeroclaw Issue #6954) —— 为 cron 等内部触发轮次定义 provenance、会话绑定与回复契约，与 SOP 稳定性修复联动。
- **Windows 原生 PowerShell 支持**：[PR #9182](zeroclaw-labs/zeroclaw PR #9182) —— 在 Windows 上尊重 `runtime.shell` 配置，通过 `-NoProfile -NonInteractive -Command` 执行 PowerShell。
- **可观测性增强**：[PR #9352](zeroclaw-labs/zeroclaw PR #9352) —— OTel 导出增加跨轮对话关联 ID，支持按对话聚合 trace。
- **Anthropic 存储 OAuth 配置**：[PR #9420](zeroclaw-labs/zeroclaw PR #9420) —— 支持 `auth_mode = "oauth"`，从同名存储配置解析凭据，替代静态 API Key。
- **渠道清理**：[PR #9571](zeroclaw-labs/zeroclaw PR #9571) —— 移除 WATI 渠道，涉及模块、feature、网关路由、迁移与 CI 的多处删除，体积 XL。
- **Matrix 单消息进度草稿**：[PR #8443](zeroclaw-labs/zeroclaw PR #8443) —— `stream_mode = "single_message"`，在单条消息内编辑进度与推理内容。

此外，已验证的 Kimi Code provider 支持（#657）表明第三方 provider 接入诉求旺盛，未来或可期待更多兼容 provider 被贡献。

---

## 7. 用户反馈摘要

来自 Issues 评论的真实用户痛点：

- **Bedrock 缓存错误困扰实际使用**（#8720）：用户在 `us.amazon.nova-2-lite-v1:0` 上随机遭遇缓存错误，希望仅通过配置禁用缓存而非改代码 —— 已关闭，应已提供配置项。
- **Telegram 命令上限导致功能不可用**（#8950）：工具 + 技能 + 内置命令超过 100 个时，Telegram 命令菜单完全无法注册，用户每次启动都看到 400 报错 —— 已关闭。
- **SOP 配置"静默失败"破坏信任**（#9779/#9786/#9780）：用户按文档配置 `sops_dir` 后 SOP 完全不加载且无日志；格式错误的 SOP.toml 被静默丢弃，`sop validate` 却报告成功；cron 触发的 SOP 无法执行任何网络操作，文档宣称的 watch-loop 场景名不副实。三位不同用户集中反馈同一子系统，说明文档与实现存在系统性偏差。
- **桌面端体验问题**（#9291）：通过菜单注册的 AppImage 不在 PATH 中，`zeroclaw desktop` 误判为未安装，且后备下载 URL 不可用，影响 Linux 桌面用户。
- **Provider 生态话语权**（#657）：用户明确表示"我可以把这个用在 OpenClaw 上，但没法用在 ZeroClaw 上"，说明兼容生态迁移是社区用户的真实动机。
- **治理流程过重**（#9496）：社区成员认为 RFC 流程（7 天讨论期、全票一致、手动计票）已超过决策本身成本，呼吁精简。

---

## 8. 待处理积压

**维护者需重点关注的高风险 PR（长期未合并）：**

- [#8496](zeroclaw-labs/zeroclaw PR #8496)（6/29 创建，32 天）—— MCP 延迟加载访问策略修复，principal contributor，risk high，待合并。
- [#8443](zeroclaw-labs/zeroclaw PR #8443)（6/28 创建，33 天）—— Matrix 单消息进度草稿，trusted contributor，risk high，XL 体积，等待审核。
- [#8826](zeroclaw-labs/zeroclaw PR #8826)（7/8 创建）—— image_gen SSRF 防护，risk high，安全相关，等待作者回应。
- [#8877](zeroclaw-labs/zeroclaw PR #8877)（7/9 创建）—— Web 门户工具提示修复，已迭代至第 5 轮 review，等待最终确认。
- [#8928](zeroclaw-labs/zeroclaw PR #8928)（7/10 创建）—— Doctor 诊断显示日志路径，principal contributor，等待作者处理。
- [#9403](zeroclaw-labs/zeroclaw PR #9403)（7/26 创建）—— WASM 导出 wall-clock 超时限制，distinguished contributor，risk high，涉及插件安全。

**等待维护者裁决的决策队列：**

- [#8692](zeroclaw-labs/zeroclaw Issue #8692) 维护者决策队列本身即反映积压：多个 RFC 等待 accept/reject/defer 裁决。
- [#6808](zeroclaw-labs/zeroclaw Issue #6808) Work Lanes 治理 RFC 已修订 24 版，批准仍被推迟。
- [#7100](zeroclaw-labs/zeroclaw Issue #7100) 按模型能力配置 RFC 等待维护者 review。
- [#9496](zeroclaw-labs/zeroclaw Issue #9496) RFC 流程自身改革提议，等待讨论。

**风险提示**：42 个待合并 PR 中，至少 6 个标记为 risk high 且与安全直接相关（SSRF、密钥泄漏、锁死绕过）。建议维护者在下一轮 review 中优先处理安全类 PR，以避免漏洞暴露窗口进一步拉长。

---

*本日报由 ZeroClaw GitHub 数据自动生成，数据覆盖 2026-08-06 至 2026-08-07。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*