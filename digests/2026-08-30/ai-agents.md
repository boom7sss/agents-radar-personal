# OpenClaw 生态日报 2026-08-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-30 13:31 UTC

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

# OpenClaw 项目动态日报 — 2026-08-30

> 数据来源：github.com/openclaw/openclaw GitHub 仓库 Issue/PR/Release 数据

---

## 1. 今日速览

过去 24 小时 OpenClaw 项目保持高活跃度：共更新 Issues 500 条（新开/活跃 338 条，关闭 162 条），PR 500 条（待合并 370 条，已合并/关闭 130 条），显示社区贡献和问题反馈持续涌入。今日**无新版本发布**，最新公开版本仍为 [v2026.8.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3)。值得关注的是，项目当前积压了大量 **P1 级可靠性 Bug**（会话状态丢失、消息丢失、内存泄漏、僵尸进程等），且多数仍处于 `needs-maintainer-review` 或 `needs-product-decision` 状态，维护者响应压力较大。反馈渠道与传输层可靠性（Telegram/Slack/Feishu/WhatsApp）是今日讨论最集中的主题。

---

## 2. 版本发布

**无新版本发布。**

当前最新 Beta 版本：[v2026.8.1-beta.3](https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.3)（详见 [#125626](https://github.com/openclaw/openclaw/issues/125626) 的发布验证追踪 Issue）。该 Issue 仍在收集该版本的反馈，目前已收到 24 条评论，涉及发布验证与回归报告。下一版本 2026.9.x 的发布时间和内容尚无公开信号。

---

## 3. 项目进展

今日**无 PR 被合并**，130 条已合并/关闭的 PR 记录未在 top 20 展示中体现具体内容。从当前开放的 PR 来看，以下高优 PR 正在推进中，值得关注：

| PR | 说明 | 状态 |
|---|---|---|
| [#122431](https://github.com/openclaw/openclaw/pull/122431) — fix(media): resize images before understanding | 修复超大图片（如 4536x8064 手机照片）进入媒体理解 Provider 前未按模型能力缩放的问题，避免超出显式描述边界 | 👀 待维护者审查（P1） |
| [#131669](https://github.com/openclaw/openclaw/pull/131669) — fix(workers): honor session tool policies on cloud sessions | 修复云端 worker 在创建子会话/跨会话发消息时绕过网关 `before_tool_call` 策略的安全问题 | 📣 需补充验证（P1） |
| [#132407](https://github.com/openclaw/openclaw/pull/132407) — fix: apply workspace permission changes to active runs | 修复活动任务中修改工作区安全策略后，工具与审批提示仍保留旧策略的问题 | ⏳ 等待作者回应（P1） |
| [#120589](https://github.com/openclaw/openclaw/pull/120589) — fix(agents): backfill tool args when provider skips input_json_delta | 修复 CLI Provider 跳过 `input_json_delta` 时工具参数丢失，保证 Discord progress/tracking/transcript 一致性 | ⏳ 等待作者回应（P1） |
| [#129729](https://github.com/openclaw/openclaw/pull/129729) — fix(agents): allow requester continuation after settle | 修复 requester 在子代理 settle 后启动新一波子代理时被错误拒绝的问题（fixes #129455） | 📣 需补充验证（P1） |

此外还有多个新提交的 fix PR 值得关注：**[#133300](https://github.com/openclaw/openclaw/pull/133300)**（修复嵌入式 agent 在失败工具批处理 settle 后因 Provider 传输瞬时断开而停止的问题，由 roboclaw-bot 提交）、**[#133298](https://github.com/openclaw/openclaw/pull/133298)** 和 **[#132998](https://github.com/openclaw/openclaw/pull/132998)**（同时修复 `sanitizeForPlainText` 剥离带属性 p/div 标签导致外发文本粘连的问题，fixes #132969）。

整体来看，项目在**嵌入式 agent 可靠性、媒体处理、安全策略执行**三个方向持续投入修复，但核心通道层 bug（见第 5 节）仍然淤积。

---

## 4. 社区热点

今日评论最多的 Issue 集中反映了**渠道消息丢失与会话可靠性**这一核心痛点：

| Issue | 评论数 | 核心诉求 |
|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) — 2026.8.1 beta 反馈（maintainer 追踪） | 24 | Beta 版本发布验证与问题收集 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — [Feature] Per-agent 成本预算网关级强制 | 22 | 运维方希望对每个 agent 设置每日/每月调用上限，防止失控支出，无需外部监控 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) — 网关内存泄漏：RSS 从 350MB 涨至 15.5GB 导致 OOM | 22 | P1 级稳定性问题，进程运行 2-3 天后被 OOM killer 杀掉，导致重复崩溃 |
| **[#48788](https://github.com/openclaw/openclaw/issues/48788)** — 集中式文件名编码工具 | 19 | 飞书中文文件名 UTF-8 被误读为 Latin-1 的修复 PR 只覆盖了单一场景，社区呼吁架构级方案支持 Shift-JIS/EUC-KR/GB18030 等多编码 |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) — 嵌入式 prompt cache 跨边界失效 | 18 | 长会话在跨 room-event/policy/Responses 边界时丢失 Provider prompt-cache 复用，影响性能与经济性 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) — Codex-backed Telegram turns 反复超时 | 17（👍4） | 2026.5.27 回归：Codex 回合执行了工作但从未到达 terminal `turn/completed`，导致 Telegram 会话超时 |

社区讨论热度最高的诉求集中在：**① 渠道消息可靠性（Telegram/WhatsApp/Slack/Feishu 均有报告），② 网关资源管理（内存泄漏/成本上限），③ 多编码与多语言适配**。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

### 🔴 P1 — 高严重（消息丢失/崩溃/回归）

| Issue | 问题描述 | 修复状态 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏：RSS 从 350MB 涨至 15.5GB，导致 OOM 崩溃循环 | 无 fix PR，待维护者审查（needs-maintainer-review） |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 入站图片使主通道卡死 ~3 分钟，多模态运行悬挂在 `active_reply_work` | 无 fix PR，待维护者审查 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex-backed Telegram 回合反复超时，永不到达 `turn/completed`（2026.5.27 回归） | 无 fix PR，待产品决策 |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 长回复在 ~1000-1100 字符处被静默截断（`stop=null, aborted=false`） | 无 fix PR，待维护者审查 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏，积累成僵尸进程拖垮运行时 | 无 fix PR，待维护者审查 |
| [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack 网关重启后所有账号 DM 被静默丢弃（19 账号 socket 模式），`prepareSlackMessage` 返回 null | PR 已关联（linked-pr-open），待补充信息 |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | Telegram 看门狗释放的持久化更新在传输追踪器 settle 前被错误 tombstone | 无 fix PR，source-repro 可复现 |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | 升级 2026.7.2-beta.4 后 Feishu/Telegram 渠道分发失败：`runChannelInboundEvent` 需要 `runDispatchLifecycle` | 无 fix PR（source-repro） |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式 prompt cache 跨 room-event/policy/Responses 边界失效 | 无 fix PR，待安全审查 |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) | 内置 dreaming 系统将多 agent 会话片段混入共享语料，污染 agent 身份 | 无 fix PR，待安全审查 |

### 🟡 P2 — 中严重

| Issue | 问题描述 | 修复状态 |
|---|---|---|
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback 在网关重启后不自动重连，`recovered=1` 具有误导性 | 无 fix PR，待产品决策 |
| [#99586](https://github.com/openclaw/openclaw/issues/99586) | 网关操作后运行时工具面板返回空白 body，容器重启仅短暂恢复 | 无 fix PR，待补充信息 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 嵌入式 runner 因 LLM 生成大参数工具调用耗时超过底层请求超时，报"网络连接丢失" | 无 fix PR，待产品决策 |
| [#87756](https://github.com/openclaw/openclaw/issues/87756) | 回归：prompt 启动的 Lobster workflow 挂起在嵌套 `/tools/invoke`，curl 启动则正常 | 无 fix PR，待安全审查 |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | Codex app-server 在大型 `logs_2.sqlite` 图像/工具请求中途关闭客户端 | 无 fix PR，待产品决策 |
| [#90325](https://github.com/openclaw/openclaw/issues/90325) | Matrix 渠道分发在 v2026.6.1 中断 — `Cannot read properties of undefined (reading 'run')` | ✅ **已关闭** |

### 🟢 已关闭

今日有 162 条 Issue 关闭，其中较受关注的有：

- [#90325](https://github.com/openclaw/openclaw/issues/90325) — Matrix 渠道分发 TypeError（P1，已关闭 ✅）
- [#112196](https://github.com/openclaw/openclaw/issues/112196) — memory_search 瞬时同步超时误报为持久 Provider 故障（P1，已关闭 ✅）
- [#87325](https://github.com/openclaw/openclaw/issues/87325) — Azure Foundry GPT Realtime Talk 支持（已关闭 ❌）
- [#112196](https://github.com/openclaw/openclaw/issues/112196) — memory_search 瞬时同步超时误报为持久 Provider 故障（P1，已关闭 ✅）

---

## 6. 功能请求与路线图信号

今日讨论度最高的功能需求及其落地可能：

| Issue/PR | 需求 | 落地判断 |
|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent 成本预算网关级强制 | 每日/月度调用上限，在网关分发模型调用前拦截 | ⚠️ 目前处于 needs-product-decision，无对应 PR；结合 [#97485](https://github.com/openclaw/openclaw/pull/97485)（agent 迭代预算）来看，**成本/资源管控方向获得社区持续关注**，可能纳入后续版本 |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) — 集中式多编码文件名处理 | 架构级编码工具替代当前临时修复 PR #48578 | ⚠️ 社区讨论活跃（19 评论），目前无对应 PR，需维护者决定方向 |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) — 持久化任务状态面板 | 为长耗时渠道回合提供持久状态展示（Discord 优先） | ⚠️ 已有 PR [#123535](https://github.com/openclaw/openclaw/pull/123535)（避免会话目录刷新风暴）覆盖了部分底层问题，但完整功能尚无实现 |
| [#51028](https://github.com/openclaw/openclaw/issues/51028) — 会话面板按"最后有意义活动"排序 | 心跳噪音不应取代真实会话排在顶部 | ⚠️ 需求明确，无对应实现 PR |
| [#38520](https://github.com/openclaw/openclaw/issues/38520) — 压缩前 agent 通知与结构化交接窗口 | 避免自动压缩打断长状态工作流 | ❌ 已关闭，但需求本身未在 roadmap 中体现 |

**路线图信号**：今日 PR 动态显示修复方向集中在**嵌入式 agent 可靠性**（[#129729](https://github.com/openclaw/openclaw/pull/129729)、[#133300](https://github.com/openclaw/openclaw/pull/133300)）、**媒体处理**（[#122431](https://github.com/openclaw/openclaw/pull/122431)）、**安全策略执行**（[#131669](https://github.com/openclaw/openclaw/pull/131669)）和 **UI 对齐**（[#132849](https://github.com/openclaw/openclaw/pull/132849) — Android 与 Web UI 对齐）。**成本管控**（[#42475](https://github.com/openclaw/openclaw/issues/42475) + [#97485](https://github.com/openclaw/openclaw/pull/97485)）是明确的下一版本候选功能。

---

## 7. 用户反馈摘要

从今日活跃 Issues 评论中提炼的真实用户声音：

**🙁 痛点与不满：**

- **"升级即回归"是高频抱怨模式**：多个用户报告从 2026.5.x 升级到 2026.6.x / 2026.7.x 后遭遇渠道分发断裂（[#90325](https://github.com/openclaw/openclaw/issues/90325) Matrix、[#114020](https://github.com/openclaw/openclaw/issues/114020) Feishu/Telegram），说明**兼容性测试有待加强**。
- **消息静默丢失最令人沮丧**：Slack 网关重启后 19 个账号的 DM 全部静默丢弃（[#131150](https://github.com/openclaw/openclaw/issues/131150)），用户看不到任何错误提示；Codex 长回复被截断但 `aborted=false`，误导排查（[#84516](https://github.com/openclaw/openclaw/issues/84516)）。
- **系统提示词膨胀影响小模型指令遵循**（[#92451](https://github.com/openclaw/openclaw/issues/92451)）：v2026.6.x 新增 20+ 默认工具/系统指令，小模型用户报告指令遵循度明显下降。

**😊 满意与认可：**

- **社区对发布验证流程（βeta feedback Issue）表示认可**：[#125626](https://github.com/openclaw/openclaw/issues/125626) 作为版本验证追踪工具运行良好，用户积极参与反馈。
- **项目对安全问题的响应态度积极**：Mattermost 交互签名 token 可伪造的问题（[#64546](https://github.com/openclaw/openclaw/pull/64546)）和云会话策略绕过问题（[#131669](https://github.com/openclaw/openclaw/pull/131669)）均有维护者介入，社区点赞（👍）较高。

---

## 8. 待处理积压

以下为长期未获响应或仍无明确处理方案的重要 Issue/PR，提醒维护者关注：

| 项目 | 创建时间 | 搁置天数 | 严重度 | 说明 |
|---|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) — 网关内存泄漏 OOM | 2026-06-09 | ~82 天 | 🔴 P1 | RSS 涨至 15.5GB 被 OOM killer 杀死，仍在 needs-maintainer-review |
| [#65374](https://github.com/openclaw/openclaw/issues/65374) — dreaming 系统跨 agent 身份污染 | 2026-04-12 | ~140 天 | 🔴 P1 + 安全 | 多 agent 共享语料导致身份混淆，数据泄露风险，待安全审查 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) — 大参数工具调用超时断连 | 2026-03-24 | ~159 天 | 🟡 P1 | 嵌入式 runner 大参数工具调用必现断连，待产品决策 |
| [#64546](https://github.com/openclaw/openclaw/pull/64546) — Mattermost 交互 token 可伪造 | 2026-04-11 | ~141 天 | 🔴 安全 | 使用硬编码公知 HMAC 密钥，签名可被复现伪造；PR 已提交但仍在 needs proof |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) — prompt cache 跨边界失效 | 2026-07-08 | ~53 天 | 🟡 P2 + 安全 | 嵌入式会话缓存复用失效，涉及安全审查 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent 成本预算 | 2026-03-10 | ~173 天 | 🟡 P2 | 社区呼声高（22 评论），长期无决策，功能需求仍未被采纳或拒绝 |
| [#51028](https://github.com/openclaw/openclaw/issues/51028) — 会话按有意义活动排序 | 2026-03-20 | ~163 天 | 🟢 P3 | 简单 UX 改进，长期无响应 |

> ⚠️ **特别提醒**：[#65374](https://github.com/openclaw/openclaw/issues/65374)（dreaming 系统跨 agent 身份污染）已搁置近 5 个月，同时涉及**数据隔离与安全**，建议尽快给出安全审查与产品决策。低成本 PR 如 [#132754](https://github.com/openclaw/openclaw/pull/132754)（skill 安装后 hasBinary 缓存失效）也应尽快合并，避免小问题积压。

---

*日报生成时间：2026-08-30 | 数据窗口：过去 24 小时 | 数据来源：OpenClaw GitHub 仓库公开 Issues / PRs / Releases*

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向分析报告

**报告日期：2026-08-30**


## 1. 生态全景

个人 AI 助手开源生态整体处于**高活跃、高竞争、多路线并行**的扩张期。今日统计的 8 个活跃项目中，OpenClaw（500+500 更新）、ZeroClaw（50+50）、Hermes Agent（50+50）、NanoClaw（5+50）均保持高强度迭代，社区贡献者参与度显著提升（CoPaw 当日迎来 3 位 first-time contributor，NanoBot 外部团队主动提交集成 PR）。但**稳定性问题构成生态共同瓶颈**——渠道消息丢失、会话恢复失败、内存泄漏、静默失败等 P1 级 Bug 在各项目普遍淤积，且修复速度普遍落后于新 Bug 涌现速度（ZeroClaw PR 合并率仅 6%，OpenClaw 核心通道层 Bug 长期无对应 fix PR）。安全债务（跨 agent 身份污染、签名伪造、凭据覆盖）与审查带宽不足是制约生态健康度的两大结构性风险。与此同时，**本地模型支持、成本管控、多租户/团队化协作**三大方向正在成为下一阶段产品竞争的主战场。


## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | PR 合并/关闭 | 新版本 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（338 活跃 / 162 关） | 500（370 待 / 130 已合） | 0 合并 | 无 | ⚠️ 高活跃但承压：P1 Bug 大量淤积，维护者响应滞后 |
| **NanoBot** | 6 | 24 | 9 合并 | 无 | ✅ 健康：修复落地快，外部贡献活跃 |
| **Hermes Agent** | 50（45 活跃 / 5 关） | 50 | 4 合并/关 | 无 | ⚠️ 活跃但承压：P0 修复已合入，但 P1/P2 长期问题未解 |
| **NanoClaw** | 5 | 50 | 20 合并/关 | 无 | ⚠️ 活跃但有隐患：Signal 链路系统性故障 + 生产级稳定性事件 |
| **ZeroClaw** | 50（45 活跃 / 5 关） | 50（47 待 / 3 合） | 0 合并 | 无 | ⚠️ 高活跃低吞吐：合并率 6%，安全债务累积 |
| **CoPaw** | 12 | 14 | 0 合并（4 关） | 无 | ⚠️ 高活跃迭代期：2.1.0 暴露稳定性短板，核心修复未合入 |
| **IronClaw** | 0 | 6 | 0 | 无 | ✅ 平稳：审阅间歇期，无新问题 |
| **Moltis** | 1 | 1 | 0 | 无 | ✅ 平稳：单一 Bug+修复配套 |
| **PicoClaw** | 4 | 3 | 2（stale 关） | 无 | ⚠️ 中等活跃：高质量 PR 被 stale 自动关闭 |
| **LobsterAI** | 0 新开（7 stale 关） | 5 | 3 关 | 无 | ❌ 低活跃：5 个月无响应的 PR 滞留，高价值 Issue 被自动清理 |
| **NullClaw / TinyClaw / ZeptoClaw** | — | — | — | — | 💤 无活动 |


## 3. OpenClaw 在生态中的定位

**优势与生态位：**

- **规模断层领先**：单日 Issues+PR 更新达 1000+ 条，远超第二名（ZeroClaw 100 条、Hermes 100 条），是目前生态中社区体量最大、反馈最密集的项目，事实上的生态参照系。
- **渠道覆盖最广**：Telegram/Slack/Feishu/WhatsApp/Discord/Matrix/Mattermost 等多渠道支持，是其他项目（如 NanoBot 聚焦钉钉/邮件、NanoClaw 侧重 Signal）难以比肩的广度。
- **嵌入式 agent 可靠性投入**：今日多个 P1 PR（#129729、#133300）聚焦嵌入式 agent 与子代理编排，说明其架构复杂度领先——但这也意味着同等规模下 Bug 面更广。

**劣势与风险：**

- **稳定性是最大短板**：网关内存泄漏（350MB→15.5GB OOM）、Slack 19 账号 DM 静默丢失、Codex 回合超时等 P1 级问题长期无 fix PR，与 Hermes（P0 当日合入）、NanoBot（当日修复合并）的响应速度差距明显。
- **审查瓶颈严重**：370 条 PR 待合并、P1 Bug 多数处于 `needs-maintainer-review`，维护者带宽已不足以支撑社区贡献速度。
- **安全债务**：跨 agent 身份污染（#65374）搁置 140 天，Mattermost 签名伪造 PR 搁置 141 天，安全响应节奏落后于社区预期。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **渠道消息可靠性** | OpenClaw、NanoClaw、Hermes、CoPaw | Telegram/Slack/WhatsApp/Feishu/Discord 多渠道消息丢失、超时、恢复失败；OpenClaw 报告最多（7+ P1），NanoClaw Signal 链路三连 Bug、Hermes 远程会话恢复失败、CoPaw 飞书配置丢失 |
| **本地/边缘模型支持** | NanoClaw（Ollama 三 PR）、ZeroClaw（local_small 配置）、Hermes（Ollama 工具数组 Bug） | 无外部依赖开箱即用、减少 prompt 膨胀、本地小模型指令遵循优化 |
| **成本管控与资源上限** | OpenClaw（per-agent 预算网关级强制）、ZeroClaw（上下文压缩锚定窗口） | 防止失控支出、按 agent 设置调用上限、压缩策略经济性 |
| **会话持久性与恢复** | Hermes（远程 Gateway 会话恢复）、ZeroClaw（Session 级持久化 Prompt 附件 RFC）、OpenClaw（prompt cache 跨边界失效） | 会话在重启/裁剪后不丢失上下文与目标约束 |
| **多租户/团队协作** | CoPaw（Hub 多租户版确认 2.2.0）、OpenClaw（无明确信号）、ZeroClaw（无明确信号） | 个人助手向团队化部署延伸，多用户访问与管理 |
| **OAuth2/凭据安全** | NanoBot（MCP OAuth 凭据保护）、LobsterAI（邮箱 OAuth2）、Hermes（Anthropic OAuth PKCE 凭据覆盖）、CoPaw（凭据保留） | 主流服务商强制 OAuth 迁移，凭据存储与轮换安全性 |
| **跨渠道输出适配** | ZeroClaw（WhatsApp Markdown 方言）、OpenClaw（多编码文件名） | 同一模型输出在不同渠道的正确渲染与编码 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道消息网关 + 嵌入式 agent 编排 | 多平台重度用户、自托管部署者 | 网关-渠道-Provider 三层分离，嵌入式 agent 子代理机制，代码量级最大、抽象最复杂 |
| **Hermes Agent** | Desktop 客户端 + 远程 Gateway + Kanban 调度 | 桌面端重度用户、远程开发场景 | Desktop ↔ 远程 Gateway 架构，Kanban 任务板调度，缓存亲和性（P0 修复中） |
| **NanoClaw** | 本地模型 + 无外部依赖 + Signal 隐私渠道 | 隐私敏感用户、边缘设备（Raspberry Pi） | Ollama 本地模型注入 + local web chat，Signal 深度集成 |
| **NanoBot** | 企业通道（钉钉/邮件/飞书）+ Agent 运行时 | 企业内部部署、办公自动化 | 通道生命周期管理精细（DingTalk/Email/Cron），外部 provider 扩展框架开放 |
| **ZeroClaw** | ZeroCode 可视化 + 多 agent 并行运行时 | 低代码用户、多 agent 并行场景 | ZeroCode 应用层 + 并行运行时 + 多 agent 编排，Rust 实现 |
| **CoPaw（QwenPaw）** | 阿里云生态 + 多租户 Hub + Console | 阿里云用户、团队协作者 | 阿里云模型深度绑定，PawApp SDK 运行时，Console 全功能桌面端 |
| **IronClaw** | 循环终止策略 + 内存/工具错误语义 | NEAR 生态开发者 | Rust 实现，错误类型系统精细化（领域语义分类），CI 统一化 |
| **LobsterAI** | 邮件连接 + SSE 流式解析 + MCP 连接管理 | 网易有道生态用户 | 邮件通道深度集成（OAuth2 缺失），SSE 流式解析稳定性 |
| **Moltis** | 沙箱运行时 + Docker 兼容性 | macOS/arm64 开发者 | Docker 沙箱跨架构兼容（arm64 sysfs 掩码） |


## 6. 社区热度与成熟度

**第一梯队：快速迭代期（高活跃，功能快速推进，但稳定性承压）**
- **OpenClaw** — 生态最大，迭代速度最快，但 Bug 淤积严重，处于"规模领先、质量追赶"阶段
- **ZeroClaw** — 贡献密集（PR 提交量大），合并吞吐率低（6%），方向明确（i18n、配置硬化、local-first）
- **NanoClaw** — 核心团队主导的本地模型/无外部依赖方向明确推进，但 Signal 链路和生产稳定性事件需要紧急响应
- **CoPaw** — 功能扩张与稳定性修复并行，社区贡献者生态开始形成（3 位 first-time contributor）

**第二梯队：质量巩固期（活跃度中等，审阅驱动，修复导向）**
- **NanoBot** — 修复落地效率高（当日 9 条合并），外部贡献吸引力强（AnySearch 主动接入），进入"功能快速推进"阶段
- **Hermes Agent** — P0 修复当日合入，但 P1/P2 长期积压（远程模式体验、工具静默消失），处于"响应加速但存量消化慢"阶段
- **IronClaw** — 变动集中在错误语义、CI 统一、循环终止三项核心修护，属于"审阅与合并的间歇期"

**第三梯队：低活跃/停滞风险**
- **LobsterAI** — 健康度最低：高质量 PR 滞留 5 个月被 stale 标记、高价值 Bug（含用户根因分析）被自动清理，维护活跃度与社区投入不成正比
- **PicoClaw** — 中等活跃但存在 PR 被 stale 误关风险，嵌入式设备体验与数据持久化关注度上升
- **Moltis** — 平稳维护周期，单一 Bug+修复配套，无社区讨论热度


## 7. 值得关注的趋势信号

**① "开箱即用 + 无外部依赖"成为竞争焦点**
NanoClaw 核心团队全力推进 Ollama 本地模型（三 PR 配套）、ZeroClaw 持续探索 local_small 运行时配置、Hermes 修复 Ollama 工具数组缺失 Bug —— 本地模型支持正在从"可选特性"变为"默认期待"。对开发者的启示：**将本地模型作为一等公民设计**，而非事后适配。

**② 可靠性是生态共同短板，差异化竞争点正在形成**
几乎所有项目都面临消息丢失、会话恢复失败、静默失败等可靠性问题。NanoBot（当日修复合并）与 OpenClaw（P1 长期无 fix）的响应速度差异正在塑造各自的社区口碑。对开发者的启示：**在功能竞争趋同的背景下，可靠性响应速度将成为用户选择的关键分水岭**。

**③ "企业级"需求正在涌入个人助手生态**
多租户/团队化（CoPaw Hub 确认 2.2.0 推出）、per-agent 成本预算（OpenClaw 社区 22 评论高呼）、OAuth2 强制迁移（NanoBot、LobsterAI、Hermes 同时遭遇）、审批流（ZeroClaw Mattermost 审批、NanoClaw Signal owner 授权）—— 个人 AI 助手正在向团队协作工具延伸。对开发者的启示：**成本管控、权限模型、审计能力应提前纳入架构设计**。

**④ 用户对"可预测性"和"控制感"的诉求回归**
CoPaw 用户怀念 Plan Mode（"先看计划再执行"）、ZeroClaw RFC 提出会话级持久化 Prompt 附件（防止 agent 跑偏）、OpenClaw 用户要求 per-agent 预算上限 —— 用户不再满足于"agent 自动执行一切"，而是希望**事前可见、事中可控、事后可审计**。对开发者的启示：**在追求自主性的同时，保留人工干预和决策透明度的设计空间**。

**⑤ 外部生态集成能力成为项目健康度信号**
NanoBot 收到 AnySearch 主动集成提案（当日提交 PR）、ZeroClaw 新增 AnySearch 搜索 provider —— 第三方供应商主动接入表明项目架构的可扩展性具有生态吸引力。对开发者的启示：**开放、规范的 provider/插件接口设计能带来生态杠杆效应**。

**⑥ 维护者带宽危机普遍存在**
OpenClaw（370 条 PR 待合并）、LobsterAI（5 个月 PR 滞留后 stale 关闭）、CoPaw（重要修复 #6825/#6889 被搁置）、ZeroClaw（合并率 6%）—— 多个项目的社区贡献速度已超过维护者处理能力。对开发者的启示：**在项目规模化阶段，需要投入自动化审查工具、分层维护者机制或更严格的 PR 准入策略，否则将面临贡献者流失和 issue 积压的双重风险**。


---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-30

## 1. 今日速览

项目今日活跃度极高，共产生 6 条 Issue 更新和 24 条 PR 更新。社区提交（PR）数量显著高于 Issue 报告，说明项目处于"功能快速推进"阶段而非"问题集中爆发"阶段。值得关注的是，电子邮件通道（Email channel）与 Web 搜索提供商成为今日两大热点方向：前者围绕 Office365 OAuth 迁移和 IMAP 性能批量提交 4 个 PR，后者由外部团队主动提交 AnySearch 新提供商 PR。Agent 运行时（agent runtime）相关的重构与修复亦占较大比重。今日无新 Release 发布。

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日共 9 条 PR 合并/关闭，其中 4 条为实质性修复且值得关注：

- **fix(agent): close native reasoning on cancellation**（[#5600](https://github.com/HKUDS/nanobot/pull/5600)，已合并）— 修复流式请求取消时客户端收到 reasoning 输出但收不到 `reasoning_end` 的问题，补齐了取消路径上的清理逻辑。
- **fix(mcp): preserve credentials when OAuth store read fails**（[#5338](https://github.com/HKUDS/nanobot/pull/5338)，已合并）— MCP OAuth 凭据存储读取失败时不再被视作空存储，防止后续 token 更新覆盖已有凭据。该 PR 从 8 月 11 日延至今日才合并，属于"长期悬置终于落地"。
- **fix(dingtalk): drain inbound background tasks**（[#5464](https://github.com/HKUDS/nanobot/pull/5464)，已合并）— 对应 Issue [#5463](https://github.com/HKUDS/nanobot/issues/5463)，为钉钉通道后台任务添加完成观察与异常日志，并在关闭时等待所有任务结束。
- **fix(cron): sanitize persisted origin metadata**（[#5587](https://github.com/HKUDS/nanobot/pull/5587)，已合并）— 清理 Cron 任务持久化元数据，排除实时运行时上下文块，修复提醒任务回放过期引用/提及上下文的问题。
- **perf(email): fetch headers before body, use UID SEARCH to skip re-fetch**（[#5489](https://github.com/HKUDS/nanobot/pull/5489)，已合并）— 邮件通道 IMAP 轮询不再为每条 UNSEEN 消息下载完整正文后才执行过滤，而是先取头部做判断，显著降低带宽和延迟开销。

以上合并整体上补齐了三条通道（DingTalk、Email、Cron）的生命周期管理和异常清理，并通过 MCP 修复增强了凭据安全性。

---

## 4. 社区热点

今日讨论热度集中在一条外部团队主动提交的集成请求上：

- **Issue [#5505](https://github.com/HKUDS/nanobot/issues/5505) "Add AnySearch as a web search provider"**（7 条评论，今日活跃）— AnySearch 团队亲自发布提案，声明将以三种标准方式（API、MCP、Skill）集成，且可免 API key 使用（匿名配额）。这属于典型的"供应商主动接入"信号，表明 NanoBot 的 web search provider 架构已形成生态吸引力。对应的 PR [#5607](https://github.com/HKUDS/nanobot/pull/5607) 已于今日提交，与现有 Serper provider 模式对齐。

其余 Issue/PR 评论数均为 0 或 1，总体社区讨论密度不高，但 PR 提交量大，呈现"干活多、讨论少"的节奏。

---

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列：

**中高严重度（有修复 PR 或已修复）：**

- **Cron 任务崩溃：** Issue [#5582](https://github.com/HKUDS/nanobot/issues/5582) — WebUI 引用/提及创建的 Cron 任务在创建或触发时崩溃，原因是运行时上下文块被持久化。**已有对应修复：PR [#5587](https://github.com/HKUDS/nanobot/pull/5587)（今日已合并）**。
- **钉钉通道后台任务泄漏：** Issue [#5463](https://github.com/HKUDS/nanobot/issues/5463) — 入站消息通过 `asyncio.Task` 转发但无终态观察，任务异常静默丢失或泄漏。**已有对应修复：PR [#5464](https://github.com/HKUDS/nanobot/pull/5464)（今日已合并）**。
- **一次性会话限流状态残留：** Issue [#5593](https://github.com/HKUDS/nanobot/issues/5593) — 过期的一次性会话在发送消息限流器中不清理，导致内部状态无限增长。今日关闭，尚无法确认是否已有修复 PR，建议维护者关注。

**中严重度（有明确修复 PR 待合并或已提交）：**

- **WebUI 拒绝消息副作用残留：** PR [#5601](https://github.com/HKUDS/nanobot/pull/5601)（待合并）— 被拒绝的 WebUI 消息可能残留附件或 WebSocket 订阅，提交了回滚逻辑。
- **邮件过滤前标记已读：** PR [#5605](https://github.com/HKUDS/nanobot/pull/5605)（待合并）— IMAP 消息在通过过滤（SPF/DKIM/白名单）前就被标记 `\Seen`，被过滤掉的消息也"已读"。修复为仅对实际送达的消息标记已读。

**由 PR 揭示的潜在缺陷：**

- **原生推理取消时缺失 `reasoning_end`：** PR [#5600](https://github.com/HKUDS/nanobot/pull/5600) 揭示取消路径上推理结束信号丢失（今日已修复）。
- **LLM 提供商抛出异常时回退策略失效：** PR [#5413](https://github.com/HKUDS/nanobot/pull/5413)（待合并，8 月 17 日提交）— 仅当 provider 返回错误响应时才触发回退链，异常抛出路径未覆盖。
- **后台网关进程日志延迟刷新：** PR [#5412](https://github.com/HKUDS/nanobot/pull/5412)（待合并，8 月 17 日提交）— 后台 Python 进程输出因非 TTY 缓冲无法及时写入日志文件。

---

## 6. 功能请求与路线图信号

今日功能性信号集中在两个方向：

**（1）Web Search 提供商生态扩展** — Issue [#5505](https://github.com/HKUDS/nanobot/issues/5505) 与 PR [#5607](https://github.com/HKUDS/nanobot/pull/5607) 引入 AnySearch（免 key、匿名配额），照搬现有 Serper provider（#4406）模式。考虑到 PR 当日即提交且模式吻合，**极有可能被纳入下一版本**。该方向表明 web search 抽象层对新提供商友好。

**（2）邮件通道增强（微软生态 + 可用性）** — 同一维护者（tilladam）连续提交 4 个 PR，形成迷你里程碑：
- [#5609](https://github.com/HKUDS/nanobot/pull/5609)：新增 Office365/Outlook 委托 OAuth 流程（应对基础认证退场）。
- [#5606](https://github.com/HKUDS/nanobot/pull/5606)：支持按收件人别名过滤。
- [#5605](https://github.com/HKUDS/nanobot/pull/5605)：仅对实际送达消息标记已读。
- [#5489](https://github.com/HKUDS/nanobot/pull/5489，已合并)：IMAP 轮询性能优化。

整体信号明确：邮件通道正在从"能用"向"生产可部署"演进，OAuth2 支持是硬需求（微软强制迁移）。

**其他值得关注的信号：**
- **Agent 汇总摘要重构：** PR [#5610](https://github.com/HKUDS/nanobot/pull/5610) 将各会话摘要改为累积式检查点构建，配合 PR [#5608](https://github.com/HKUDS/nanobot/pull/5608) 将 transcript 组装职责下沉至 runner。两者均由 chengyongru 提交，说明 Agent 记忆架构正在系统性重构。
- **WebUI 错误提示改进：** Issue [#5583](https://github.com/HKUDS/nanobot/issues/5583) 请求将"尝试不同方法"提示扩展到工具抛出的异常（当前仅覆盖错误形态的结果），低成本的体验优化。

---

## 7. 用户反馈摘要

今日用户直接反馈较少，可提取的痛点集中在：

1. **WebUI 操作引出的级联问题** — iChizer0 连续提交两条 Issue（[#5582](https://github.com/HKUDS/nanobot/issues/5582)、[#5583](https://github.com/HKUDS/nanobot/issues/5583)），围绕 WebUI 引用/提及的运行时上下文与工具异常提示，属于深度用户在使用高级功能时遇到的边界问题。好在 #5582 已有修复合并。

2. **结果返回不稳定（长期未解决）** — Issue [#1697](https://github.com/HKUDS/nanobot/issues/1697) 自 3 月创建至今仍开放，用户反馈"查询结果不会自动返回，需要多次询问"并询问权限配置。该 Issue 存在已 5 个月余，评论仅 1 条，**需要维护者评估是否属于系统性问题**。

3. **外部团队主动集成** — AnySearch 团队在 [#5505](https://github.com/HKUDS/nanobot/issues/5505) 中主动提出集成方案并承诺提交 PR（当日兑现，见 PR [#5607](https://github.com/HKUDS/nanobot/pull/5607)），表明项目架构的可扩展性对第三方开发者具有吸引力，是项目健康度的积极信号。

---

## 8. 待处理积压

以下为长期未响应或悬置过久的重要项，提请维护者关注：

**高风险/中风险：**

- **Issue [#1697](https://github.com/HKUDS/nanobot/issues/1697)（OPEN，2026-03-08 创建）** — "查询结果不自动返回，需多次询问"，已开放 5 个多月，仅 1 条评论。若属实，属于核心对话体验问题，建议维护者回应并尝试复现。

**长期悬置的 PR：**

- **PR [#5412](https://github.com/HKUDS/nanobot/pull/5412)（OPEN，2026-08-17 提交）** — 后台网关进程日志刷新延迟，已等待 13 天。属于可观测性问题，影响调试体验但无功能阻断。同类 PR [#5413](https://github.com/HKUDS/nanobot/pull/5413) 同日均未合并，可考虑打包评审。

**其他观察：**
- **PR [#5338](https://github.com/HKUDS/nanobot/pull/5338)** 今日终于合并（8 月 11 日提交，历时 19 天），提示部分 PR 走完评审周期较长。今日待合并的 15 条 PR 如无阻碍，建议维护者分批次推进，避免积压扩大。

---

*报告生成时间：2026-08-30，数据源：HKUDS/nanobot GitHub 仓库。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-08-30

## 1. 今日速览

项目今日活跃度处于高位，过去 24 小时内共有 50 条 Issue 更新（其中 45 条新开/活跃、5 条已关闭）和 50 条 PR 更新（4 条已合并/关闭）。无新版本发布。值得注意的是，今日新提交的修复型 PR 密集出现在桌面端会话恢复、SSH 远程模式、Kanban 调度配置等此前被社区反复报告的问题区域，说明维护者对积压 bug 的响应正在加速。但同时，诸如 Skills 索引过期（#66616）、远程 Gateway 会话无法恢复（#93888）等 P1/P2 级别的长期问题仍未解决，项目健康度整体为"活跃但承压"状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并的 PR 共 4 条，其中两条是重要的修复合入：

- **[PR #97709] fix(cache): honor the host-declared conversation key on the affinity-key path**（P0，已合并）— 由 @kshitijk4poor 将 #97158 的修复重新 salvage 到当前 main 分支并修复了 CI 失败。该 PR 允许主机声明物理 session id 背后的逻辑会话，四个会话亲和性检查面均会参考该声明，是此前 #97158 中论证的 key churn 问题的完整修复。[链接](https://github.com/NousResearch/hermes-agent/pull/97709)
- **[PR #97158] fix(cache)**（P0，已合并/关闭）— 原作者 @JoaoMarcos44 的贡献被完整保留并合入 main，解决 OpenRouter/Nous provider 会话亲和性 key 错乱问题。[链接](https://github.com/NousResearch/hermes-agent/pull/97158)
- **[PR #98572] fix(model-picker)**（已关闭，duplicate）— 修复 `model_catalog.excluded_providers` 未能过滤合成 `moa`（Mixture-of-Agents）行的问题。虽被标记为 duplicate，但问题本身已被识别。[链接](https://github.com/NousResearch/hermes-agent/pull/98572)
- **[PR #75235] test(hermes_cli)**（已关闭，duplicate）— 隔离 qwen 回退测试对贡献者本机凭据的依赖，提升测试可移植性。[链接](https://github.com/NousResearch/hermes-agent/pull/75235)

项目在缓存亲和性（P0）修复上的合入是今天最重要的进展；其余多为测试隔离与重复 PR 清理。

## 4. 社区热点

- **[Issue #66616] Skills index is stale or degraded**（123 条评论，持续更新中）— 自动化新鲜度探针检测到 Skills Hub 索引已老化 29.8 小时（限制 26 小时）。这是当前评论最多的问题，属 sweeper:risk-automation 类别，说明社区对自动化质量门禁的稳定性有较高关注。[链接](https://github.com/NousResearch/hermes-agent/issues/66616)
- **[Issue #88584] Automated Nous integration is blocked**（43 条评论）— Nous-to-Enterkey 定时合并任务在 `cron/jobs.py` 中发生冲突导致阻塞，涉及跨仓库持续集成链路。[链接](https://github.com/NousResearch/hermes-agent/issues/88584)
- **[Issue #93888] Desktop 向远程 Gateway 发送本地运行时 ID，会话无法恢复**（15 条评论，P1）— Hermes Desktop 在 `main` 分支上打开已存储的远程会话时永久卡在 "Restore failed — Session not found"。这是当前最高优先级的开放 bug，且已有对应 PR #98551 提交修复。[链接](https://github.com/NousResearch/hermes-agent/issues/93888)
- **[Issue #84921] 请求新增 `display.autolink_urls` 设置**（👍 2）— 用户希望在 Desktop 的 markdown 渲染器中可关闭裸 URL 自动转链接（含抓取页面标题）的功能。虽评论不多，但获得了 👍 支持。[链接](https://github.com/NousResearch/hermes-agent/issues/84921)

社区讨论集中在两类诉求：一是自动化基础设施的可靠性（索引新鲜度、跨仓库合并），二是 Desktop 客户端远程模式下的核心功能可用性。

## 5. Bug 与稳定性

按严重程度排列：

**P0（已修复）**
- 缓存亲和性 key 错乱导致会话缓存失效（#97158 / #97709）— 已合入 main。[PR 链接](https://github.com/NousResearch/hermes-agent/pull/97709)

**P1（开放中）**
- **[Issue #93888] Desktop 远程 Gateway 会话恢复失败** — 本地运行时 ID 被发送到远程端导致 "Session not found"。已有 PR #98551 提交修复（将会话分支路由到父会话所属连接）。[Issue](https://github.com/NousResearch/hermes-agent/issues/93888) | [PR #98551](https://github.com/NousResearch/hermes-agent/pull/98551)
- **[Issue #96360] Windows Desktop 更新被无关 SCM 服务 STOP_PENDING 状态中止**（已关闭）— 已关闭说明问题已有处理，但解决方式未在数据中体现。[链接](https://github.com/NousResearch/hermes-agent/issues/96360)

**P2（开放中）**
- **[Issue #98222] `execute_code` 远程内核在所有 Docker/SSH/Modal 后端上均无法启动** — `_rewrite_compound_background` 包装器破坏含 `&` 后接语句的合法 bash。今日新开，尚未有修复 PR。[链接](https://github.com/NousResearch/hermes-agent/issues/98222)
- **[Issue #87654] Vision 工具在首次可用性探测后被静默消失** — `_AuxProbeClientStub` 被缓存在 `_get_cached_client`。8 月 16 日报告，已持续 2 周未修复。[链接](https://github.com/NousResearch/hermes-agent/issues/87654)
- **[Issue #75065] 静默失败：空闲会话 watch_patterns 通知延迟 14.5 分钟；MEDIA 指令跳过从未告知 agent** — Discord 网关上观察到的两类静默失败。[链接](https://github.com/NousResearch/hermes-agent/issues/75065)
- **[Issue #92606] Anthropic OAuth PKCE 凭据文件覆盖轮换后的 token** — 两个凭据池共享同一个单次使用 refresh token，导致互相吊销、凭据池清空。[链接](https://github.com/NousResearch/hermes-agent/issues/92606)

**P3（开放中）**
- **[Issue #66616] Skills 索引过期**（见社区热点）
- **[Issue #86992] `lazy_deps` 静默降级 `hindsight-client`** — 0.9.0 被静默降回 0.6.1，绕过 pyproject/uv.lock 覆盖。[链接](https://github.com/NousResearch/hermes-agent/issues/86992)

**今日新增其他修复 PR（待合并）**：
- [#98584] Windows uninstall 时先清除 .git/objects 的只读位再 rmtree，修复 [WinError 5]（对应 #98574）[链接](https://github.com/NousResearch/hermes-agent/pull/98584)
- [#98585] 将 `_READ_POOL_MAX` 从 8 降至 4，减少 state.db 文件描述符峰值占用（对应 #98573）[链接](https://github.com/NousResearch/hermes-agent/pull/98585)
- [#98583] 流式预览未记录时与可见前缀对账，修复 Telegram/Discord/Slack 最终消息未送达判定（对应 #98552）[链接](https://github.com/NousResearch/hermes-agent/pull/98583)
- [#98586] Provider 返回 429 时的指数退避等待在 CLI/TUI/Desktop 界面显示冻结。[链接](https://github.com/NousResearch/hermes-agent/pull/98586)

## 6. 功能请求与路线图信号

- **[PR #98593] feat(zai): 新增 Z.AI Responses API provider 支持** — Z.AI 在 `https://api.z.ai/api/v1` 提供原生 OpenAI Responses 协议（GLM 模型），与已内置的 Chat Completions 端点（`/api/paas/v4`）不同。该 PR 将其接入内置 provider。[链接](https://github.com/NousResearch/hermes-agent/pull/98593)
- **[PR #98592] feat(kanban): 新增 `kanban.ready_dispatch` 配置开关** — 对应 Issue #98560，防止调度器在仅限人工的 Kanban 泳道上自动派生任务（如 "Product Owner" 泳道）。若合入，将回应社区对 Kanban 人工/自动任务边界控制的需求。[链接](https://github.com/NousResearch/hermes-agent/pull/98592) | [Issue #98560](https://github.com/NousResearch/hermes-agent/issues/98560)
- **[Issue #84921] `display.autolink_urls` 配置项**（👍 2）— 社区请求新增开关以关闭 Desktop 中裸 URL 自动转链接行为。目前无对应 PR，但诉求明确、简单，较可能被纳入后续版本。[链接](https://github.com/NousResearch/hermes-agent/issues/84921)
- **[Issue #31363] Kanban 缺乏安全的任务创作窗口** — 三问题复合：auto_decompose 绕过 triage、"Manual Orchestration" 标签误导、阻塞运行中任务无效。报告于 5 月 24 日，已有 PR #81353（保持 block-loop triage 不进入 auto-decomposer）仍开放中。[Issue](https://github.com/NousResearch/hermes-agent/issues/31363) | [PR #81353](https://github.com/NousResearch/hermes-agent/pull/81353)

## 7. 用户反馈摘要

- **远程/SSH 模式可用性是最大痛点**：多位用户报告 Desktop 在 SSH/远程 Gateway 模式下出现会话无法恢复（#93888）、文件浏览器读取错误路径（#98056）、缓存运行时 ID 导致会话点击失效（对应 PR #98591 修复 #97809）等问题。远程模式是当前 bug 密度最高、用户情绪最集中的区域。
- **工具静默消失问题反复出现**：vision 工具在探测后被静默移除（#87654），MEDIA 指令失败但不通知 agent（#75065），execute_code 远程执行全部失败（#98222）——用户对"工具配置了但不工作且无反馈"的模式满意度低。
- **Windows 平台体验问题**：用户报告了更新被无关服务阻塞（#96360）、卸载时因只读文件失败（#98574）、依赖被静默降级（#86992）等问题。已有对应修复 PR 提交。
- **压缩/摘要性能退化**：用户反映 "Summarizing Thread" 在近期更新后显著变慢（#96603），且有多个围绕压缩阈值误触发的回归（#96995、#97602、#88695），说明最近的压缩逻辑改动引入了稳定性问题。
- **正面信号**：P0 级缓存修复已合入（#97709），说明维护者对影响面大的关键问题响应速度尚可；多名贡献者（salch-cred、ecourn、liuhao1024 等）同日提交多个针对性修复 PR，社区贡献活跃。

## 8. 待处理积压

- **[Issue #32660] Tools array 缺失于自定义 Ollama 端点的 API 调用**（5 月 26 日创建，距今 96 天）— macOS + Ollama 0.24.0 + qwen3.6:27b 环境下工具数组未随请求发送。P2 级别，长时间未获维护者响应。[链接](https://github.com/NousResearch/hermes-agent/issues/32660)
- **[Issue #31363] Kanban 任务创作窗口缺失**（5 月 24 日创建，距今 98 天）— 虽有 PR #81353 待合并，但长期未推进。用户 👍 2，社区关注度较高。[链接](https://github.com/NousResearch/hermes-agent/issues/31363)
- **[Issue #66616] Skills 索引持续过期**（7 月 18 日创建）— 123 条评论的高关注度自动化问题，已持续 43 天。自动化探针反复失败说明其修复进展缓慢。[链接](https://github.com/NousResearch/hermes-agent/issues/66616)
- **[Issue #88584] Nous-to-Enterkey 自动集成阻塞**（8 月 17 日创建）— 跨仓库合并冲突已持续 13 天，影响 dashboard 更新链路。[链接](https://github.com/NousResearch/hermes-agent/issues/88584)
- **[Issue #87654] Vision 工具静默消失**（8 月 16 日创建）— P2 bug 两周未获维护者响应，工具消失且 Dashboard 状态不一致，影响面较大。[链接](https://github.com/NousResearch/hermes-agent/issues/87654)
- **[PR #81353] Kanban block-loop triage 修复**（8 月 7 日提交，已开放 23 天）— 无维护者评论，可能被遗漏。[链接](https://github.com/NousResearch/hermes-agent/pull/81353)

---

*报告生成时间：2026-08-30 | 数据来源：Hermes Agent GitHub 仓库（NousResearch/hermes-agent）*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-30

## 1. 今日速览

PicoClaw 在过去 24 小时保持中等活跃度：新增/更新 4 个 Issue 和 3 个 PR，无新版本发布。值得关注的是，今日新增 Issue 中有两个来自中文用户的高质量深度报告（session 数据物理删除问题和低性能设备 Web UI 卡顿），源码定位清晰。PR 方面，两个涉及 Telegram 话题支持与 MCP 故障挂起的 PR 被关闭（stale），一个捷克语翻译 PR 仍在待合并状态。项目整体维护节奏稳定，社区反馈积极，但对嵌入式设备体验与数据持久化的关注度明显上升。

## 3. 项目进展

**今日无新合并/关闭的有效 PR**（两条已关闭 PR 均为 stale 自动关闭），具体如下：

- **[PR #3337] [stale 关闭] Fix/mcp failure hangs agent loop** — 该作者已于 8 月 14 日提交了对 MCP 服务器连接失败时 agent 循环挂起问题的修复，但该 PR 已被标记为 stale 并关闭。**需维护者重点审视**：此修复是否有功能价值，是否应重新打开并合并？
  https://github.com/sipeed/picoclaw/pull/3337

- **[PR #3315] [stale 关闭] Support topics in private bot chats** — genuss 于 8 月 3 日提交的 Telegram 私聊话题模式支持修复同样因 stale 关闭，该 PR 摘要提及了明确的场景修复（私聊 bot 开启话题模式后 `Chat.IsForum` 判定失效）。
  https://github.com/sipeed/picoclaw/pull/3315

两

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-08-30

## 1. 今日速览

项目今日保持高活跃度，过去 24 小时内有 5 条 Issue 更新、50 条 PR 更新，其中 20 条已合并/关闭、30 条待合并。值得关注的是，今日涌现出一组围绕 **Signal 接入链路** 的 3 个高相关 Bug 报告（#3669、#3670、#3671），均指向安装脚本、账号授权和版本锁定问题，系统性地影响 Signal 通道的可用性；同时 #3660 报告了 Session 数据库只读导致全渠道消息发送失败的严重稳定性问题，截至日报生成时尚未见对应修复 PR。PR 侧以 `core-team` 主导的 Ollama 本地模型支持（#3546、#3547、#3548）和 providers 契约重构（#3585–#3591）为主，项目正积极向「本地模型 + 无外部依赖」方向演进。整体健康度：**活跃度高，Signal 链路存在系统性隐患，需优先关注**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 20 条 PR 被合并/关闭，以下为其中推进核心功能或 CI 效率的重要变更：

- **[#3678] ci(skills): parallelize composition checks**（zvi-fried，已关闭）— 并行化 skills 组合检查，缩短 CI 耗时。
- **[#3676] feat(skills): add deterministic apply directives**（zvi-fried，已关闭）— 为 skills 增加确定性 apply 指令，提升任务执行的稳定性与可预期性。

此外，大量 `core-team` 的 PR 处于**待合并状态**且在持续更新中，包括 Ollama 本地模型注入（#3546、#3548）、providers 引擎接缝（#3547）以及多个 providers 契约声明/实现/重构 PR（#3585、#3586、#3588、#3591），说明几项跨组件改造正同步推进，尚未合并落定。整体而言，项目今日以 CI 与技能系统的小步优化为主，核心功能合并大潮尚未到来。

## 4. 社区热点

今日社区讨论集中在 Signal 相关 Bug 报告上，三个 Issue 均由同一用户（IT-Sage）在 2026-08-29 批量提交，虽暂无评论，但内容互为因果、构成完整的故障链：

- **[#3671] install-signal-cli.sh pins signal-cli 0.14.3** — 指出安装脚本锁定的版本存在**新联系人会话建立时无限挂起**的已知 Bug，上游已在 0.14.7 修复，修复仅需提升版本号。
  https://github.com/nanocoai/nanoclaw/issues/3671
- **[#3670] Dedicated-number Signal setup grants "owner" 给机器人自身账户** — 专用号码注册路径下，审批卡片被发送到无人监控的自我会话，运营者永远看不到审批请求。
  https://github.com/nanocoai/nanoclaw/issues/3670
- **[#3669] signal-auth 在非登录 shell 下找不到 ~/.local/bin/signal-cli** — 安装脚本将二进制放入 `~/.local/bin`，但该目录仅在登录 shell 的 PATH 中，导致 wizard 无法发现已安装的 signal-cli，回退到 QR 链接流程。
  https://github.com/nanocoai/nanoclaw/issues/3669

背后诉求：Signal 作为隐私优先的通讯渠道对 NanoClaw 用户有明确价值，但当前从安装到授权再到消息收发整条链路存在多处断裂，用户对「开箱即用」的期望未获满足。三个 Issue 建议**合并处理**，统一由维护者或社区成员打包修复（升版本 + PATH 修复 + owner 授权逻辑修正）。

另外 [#95] Raspberry Pi 运行咨询虽创建已久但今日重新活跃（更新于 2026-08-29），说明边缘设备部署需求仍在累积。
https://github.com/nanocoai/nanoclaw/issues/95

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| **严重** | [#3660] Session DB readonly errors blocking message delivery（DawoudIO） | Session SQLite 数据库变为只读，**所有通道**（Discord 等）无法发送出站消息，已持续约 12 小时 | 无对应 fix PR |
| **高** | [#3671] signal-cli 0.14.3 版本挂起 Bug（IT-Sage） | 新联系人首次会话建立时无限挂起，上游已修复 | 无 fix PR，但修复成本低（升级版本号） |
| **高** | [#3670] 专用号码路径权限错配（IT-Sage） | bot 自身获得 owner 权限，审批卡片进入无人监控的自我会话 | 无 fix PR |
| **中** | [#3669] 非登录 shell 找不到 signal-cli（IT-Sage） | `~/.local/bin` 不在非登录 shell 的 PATH 中，wizard 回退到 QR 流程 | 无 fix PR |

安全修复方面，[#3680] fix(mount-security): close allowlisted-extra mount bypass in validateSpec（prathish-ks）已提交待合并，封堵了 validateSpec 中 allowlisted-extra mount 的绕过漏洞，建议优先评审：
https://github.com/nanocoai/nanoclaw/pull/3680

## 6. 功能请求与路线图信号

- **本地模型支持（Ollama）**：`core-team` 的 [#3548]（`ollama launch nanoclaw` 一键本地模型安装）、[#3546]（Ollama provider payload）、[#3547]（registry provider 引擎接缝）形成完整功能集，目标是让 NanoClaw 在**无需任何外部账号**的情况下开箱即用，配合 [#3298]（local web chat 通道）可实现完全本地化的演示与试用体验。这三个 PR 有明确标记 `core-team`，进入下一版本的概率极高。
  https://github.com/nanocoai/nanoclaw/pull/3548
  https://github.com/nanocoai/nanoclaw/pull/3546
  https://github.com/nanocoai/nanoclaw/pull/3547
  https://github.com/nanocoai/nanoclaw/pull/3298
- **偏好与风格推断**：zvi-fried 的 [#3592]（core-owned tone/speed 推断属性）与 [#3593]（映射到 codex 的 personality/service tier）为不同代码引擎提供统一的「语气与速度」配置，属核心层能力扩展。
  https://github.com/nanocoai/nanoclaw/pull/3592
  https://github.com/nanocoai/nanoclaw/pull/3593
- **文档与部署体验**：[#3681] 新增 RepoCloud 一键部署按钮，降低云端部署门槛。
  https://github.com/nanocoai/nanoclaw/pull/3681

## 7. 用户反馈摘要

- **Raspberry Pi 用户**（#95，yishuixuanyuan）：明确表达在 Pi 4B 上运行 NanoClaw 的需求，说明边缘设备/低功耗场景是真实使用场景。此 Issue 创建于 2026-02-06，半年后仍有更新，说明长期未获完整解答，建议维护者给出官方支持说明或安装指南。
- **Signal 用户/维护者视角**（#3671、#3670、#3669，IT-Sage）：指出安装脚本对版本的盲目锁定（而非跟随上游修复）是供应链维护的典型疏漏；专用号码路径的授权设计缺陷直接导致功能不可用；PATH 假设与 shell 行为不一致说明安装脚本未充分测试不同 shell 环境。三条反馈共同指向**同一功能（Signal 集成）在真实环境中缺乏端到端验证**，用户需要的是「安装即可用」而非「安装后逐环节修复」。
- **稳定性投诉**（#3660，DawoudIO）：Session 数据库只读导致全通道消息发送瘫痪，用户明确标注了故障开始时间（约 2026-08-29 凌晨），属于生产环境级别的可用性事件，已持续 12+ 小时未见修复响应，需要维护者立即介入。

## 8. 待处理积压

| 项目 | 创建时间 | 最后更新 | 备注 |
|---|---|---|---|
| [#95] Raspberry Pi 运行支持 | 2026-02-06 | 2026-08-29 | 半年未获官方完整答复，社区持续关注 |
| [#3660] Session DB 只读致全通道消息发送失败 | 2026-08-29 | 2026-08-29 | **最高优先级**：生产故障持续 12+ 小时，尚无 fix PR |
| [#3669] / [#3670] / [#3671] Signal 链路三连 Bug | 2026-08-29 | 2026-08-29 | 建议合并为一个修复批处理，涉及升版本 + PATH + 授权逻辑 |
| [#3591] / [#3586] / [#3588] / [#3585] providers 契约重构系列（zvi-fried） | 2026-08-27 | 2026-08-30 | 4 条 PR 挂起 3+ 天持续更新，属 core-team 重构，建议安排集中评审，避免长期分叉 |

https://github.com/nanocoai/nanoclaw/issues/95
https://github.com/nanocoai/nanoclaw/issues/3660
https://github.com/nanocoai/nanoclaw/issues/3669
https://github.com/nanocoai/nanoclaw/issues/3670
https://github.com/nanocoai/nanoclaw/issues/3671
https://github.com/nanocoai/nanoclaw/pull/3585
https://github.com/nanocoai/nanoclaw/pull/3586
https://github.com/nanocoai/nanoclaw/pull/3588
https://github.com/nanocoai/nanoclaw/pull/3591

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-30

## 1. 今日速览

IronClaw 在过去 24 小时内保持平稳活跃：无新 Issue 产生或关闭，全部 6 条动态集中在 PR 侧，均为待合并状态（零合并、零关闭）。6 条 PR 中 5 条标记为低风险，1 条中等风险；3 条由核心成员提交，3 条来自资深外部贡献者。当前无新版本发布，项目处于审阅与合并的间歇期，整体健康度良好，变更集中在错误语义修正、CI 统一与循环终止策略三项核心修护上。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 完成合并或关闭，但值得关注的是 6 条待合并 PR 已全部进入活跃更新状态，其中 4 条在过去 24 小时内有更新动作，说明维护团队正在集中推进审阅。核心变更包括：

- **[#7977] fix(loop): terminate on dominant repeated output, cap interactive wall clock** — 核心成员提交（XL 规模，低风险）。修复 #7531 移除 digest 终止器后默认循环族在无进展场景下无法结束的问题，同时为交互式运行增加墙钟上限。该 PR 直接关系到生产环境 loop 的退出保障，值得优先合入。
  [链接](https://github.com/nearai/ironclaw/pull/7977)

- **[#7992] ci: unify bounded integration execution** — 核心成员提交（XL 规模，中等风险）。将全量集成测试统一到单次 `cargo nextest run` 并固定四测试并发上限，同时移除第二套源码清单，简化 CI 维护面。
  [链接](https://github.com/nearai/ironclaw/pull/7992)

- **[#7985] fix(memory): missing document is a domain failure, not a malformed request** 与 **[#7990] fix(tool-disclosure): unresolvable tool name is not an encoding error** — 同一作者连续两日提交，统一修正错误分类语义，将"业务性缺失"与"请求格式错误"区分开，改善面向用户的错误提示准确性。
  [链接 #7985](https://github.com/nearai/ironclaw/pull/7985) ｜ [链接 #7990](https://github.com/nearai/ironclaw/pull/7990)

综合来看，项目在错误语义、CI 架构和 loop 稳定性三条线上同时推进，覆盖面较广，但均未落盘，实际进展取决于后续合并节奏。

## 4. 社区热点

今日无高互动讨论（全部条目评论数为 undefined/0，👍 均为 0），无社区热点。所有 PR 均处于静默审阅状态，未观察到外部用户参与讨论或表达诉求。

## 5. Bug 与稳定性

今日无新 Bug 报告（0 条新 Issue），但 6 条 PR 中有 5 条为修复类变更，按严重程度排列如下：

| 优先级 | 问题描述 | 修复 PR | 说明 |
|---|---|---|---|
| 高 | 默认 loop 族在无进展场景下无法终止（#7531 移除终止器后的回归） | [#7977](https://github.com/nearai/ironclaw/pull/7977) | 生产环境非进度运行无法自然退出，已提交修复，待合并 |
| 中 | macOS 上 pre-push 门禁必然失败（测试与 CI 脚本各一个独立原因） | [#7991](https://github.com/nearai/ironclaw/pull/7991) | 不影响 CI/生产，但阻断 mac 开发者本地提交流程 |
| 中 | memory 读取时"文档不存在"被错误归类为输入编码失败 | [#7985](https://github.com/nearai/ironclaw/pull/7985) | 用户侧错误提示语义不准确，误导排查方向 |
| 低 | tool-disclosure 桥将"工具名无法解析"统一标记为输入编码错误 | [#7990](https://github.com/nearai/ironclaw/pull/7990) | 与上文同属错误分类问题，一并修复 |

另有 [#7988](https://github.com/nearai/ironclaw/pull/7988) 为 CI 自动生成的代码库知识图谱刷新（日常维护，无风险）。

## 6. 功能请求与路线图信号

今日无新功能请求（0 条新 Issue）。结合待合并 PR 观察路线图信号：

- **循环终止策略重构**（[#7977](https://github.com/nearai/ironclaw/pull/7977)）显示团队在 #7531 移除 digest 终止器后正在设计替代方案，涉及"主导重复输出"识别与交互式墙钟上限两个新机制，预计将在下一版本中落地。
- **CI 统一化**（[#7992](https://github.com/nearai/ironclaw/pull/7992)）指向基础设施精简方向，后续版本可能伴随 CI 配置结构的整体调整。
- **错误语义精细化**（[#7985](https://github.com/nearai/ironclaw/pull/7985) + [#7990](https://github.com/nearai/ironclaw/pull/7990)）表明错误类型系统正在从"粗粒度分类"向"领域语义分类"演进，未来 API 错误提示可能整体换新。

## 7. 用户反馈摘要

今日无新 Issue，且所有 PR 评论为 0，无新增用户反馈可提炼。前一阶段遗留的反馈信号主要体现在 PR [#7977](https://github.com/nearai/ironclaw/pull/7977) 的背景描述中：用户在生产环境遇到 loop 无法正常终止的问题（源自 #7486 对幂等轮询误报的修复引发的回归），即"无进展运行无法结束"是实际使用中的痛点。

## 8. 待处理积压

今日无新 Issue，也未观察到长期未响应的遗留 Issue 或 PR。6 条待合并 PR 中，[#7977](https://github.com/nearai/ironclaw/pull/7977)（8-28 创建）与 [#7985](https://github.com/nearai/ironclaw/pull/7985)（8-28 创建）等待时间最长，已进入第 3 天，建议维护者优先安排审阅 — 前者涉及生产稳定性回归修复，后者为错误语义修正，均非紧急但不宜长期搁置。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期**: 2026-08-30  
**数据来源**: github.com/netease-youdao/LobsterAI


## 1. 今日速览

LobsterAI 项目当日处于**低活跃、清理消化期**：过去 24 小时无新 Isssue 开启，7 条既有 Issue 均以 stale 标记关闭；5 条 PR 中 2 条仍待合并、3 条关闭。无新版本发布。值得注意的是，今日关闭的 Issue 大多创建于 4 月中旬，停滞逾 4 个月后由机器人自动清理，说明项目存在**长期未响应积压**问题；但 2 条来自 3 月底的高质量修复 PR（MCP 连接管理、SSE 流式解析）仍在等待合并，值得维护者优先处理。


## 2. 版本发布

无新版本发布。


## 3. 项目进展

今日无新增合并代码，但 2 条待合并 PR 值得重点关注：

- **[PR #1127] fix(mcp): cancel force-close timer in stop() to prevent closing new server** (`xiangliqu`，3/31 创建，状态：OPEN，stale 标记中)  
  修复 `stop()` 中未清除强制关闭定时器、可能在重建 server 后误关新连接的竞态问题，属于 MCP 连接生命周期的**关键缺陷修复**。链接：<https://github.com/netease-youdao/LobsterAI/pull/1127>

- **[PR #1130] fix(api): 修复 Anthropic SSE 流式解析未做行缓冲导致数据丢失** (`swuzjb`，3/31 创建，状态：OPEN，stale 标记中)  
  修复 Anthropic 路径 SSE 流因 chunk 边界切分导致 JSON 解析失败、文本片段静默丢失的问题（关联 Issue #922）。对高吞吐/弱网场景下的流式稳定性有直接提升。链接：<https://github.com/netease-youdao/LobsterAI/pull/1130>

> ⚠️ **维护提醒**: 两条 PR 已滞留 5 个月且被打上 stale 标记，若近期不处理可能被自动关闭。建议尽快 review/合并或关闭。


## 4. 社区热点

今日无新增讨论热点；被今日清理关闭的历史 Issue 中，#1698（网关端口冲突）和 #1744（附档 Bug 报告）评论数并列最高（各 4 条）。

- **[Issue #1698] 有道龙虾启动状态下安装智企帝王蟹必现 gateway 端口冲突**（4/15 创建，今日 stale 关闭）  
  必现问题：与同系产品 "智企帝王蟹" 存在 gateway 端口冲突，导致后者鉴权失败。同厂产品间**端口/进程级资源竞争**问题值得后续版本从架构层面（如端口动态分配）解决。链接：<https://github.com/netease-youdao/LobsterAI/issues/1698>


## 5. Bug 与稳定性

按严重程度排列（均为今日 stale 关闭，无关联 fix PR）：

| 严重程度 | Issue | 问题描述 | 状态 |
|---------|-------|---------|------|
| 🔴 高 | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 与智企帝王蟹 gateway 端口冲突，必现，后者完全不可用 | 无对应 fix PR |
| 🟠 中 | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 安装过程中大概率出现图标为白色且无效 | 无对应 fix PR |
| 🟠 中 | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | 更新后 diff 异常失灵；用户已定位根因：`extractDiffFromToolInput` 仅从 toolInput 顶层查找 oldText/newText（有代码级分析） | PR #1130 含 SSE 修复，但 diff 问题无对应 PR |
| 🟡 低 | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | 定时任务通知文案错误（UI 文案问题） | 无对应 fix PR |

**关键风险**: #1783 用户已定位到前端 `app.asar` 中 `extractDiffFromToolInput` 函数的具体 bug 位置，但项目未回应且今日被 stale 清理——此类**带根因分析的高质量报告被自动关闭**，可能造成贡献者流失。


## 6. 功能请求与路线图信号

- **[Issue #1745] 请求改进邮箱连接方式，支持 OAuth2**（4/19，今日 stale 关闭）  
  用户反馈 Outlook 邮箱因不支持 OAuth2/新式验证而完全无法连接。**该请求具有广泛适用性**——随着主流邮箱服务商逐步禁用普通应用密码，OAuth2/JWT 支持应纳入后续版本的连接器能力规划。

- **[Issue #1688] 支持运行时动态调整大模型 temperature 参数**（4/15，今日 stale 关闭）  
  用户希望在对话中通过关键字实时调节 temperature。属于体验优化型需求，实现成本较低（透传参数即可），可评估放入低优先级迭代。


## 7. 用户反馈摘要

从今日关闭的 Issue 评论中提炼：

| 用户 | 场景 | 核心诉求 / 情绪 |
|-----|------|----------------|
| `jiutianxvanyin` | 连接微软 Outlook 邮箱 | 无法登录，"普通应用密码登录被完全禁止"，表达困惑无助 |
| `MiracleOfRevolutionary` | 更新后 diff 功能 | 深入分析并给出代码级根因定位，**展现出较高的技术投入**，但未获回应 |
| `yy987y` | 与智企帝王蟹并用 | 必现 gateway 冲突，操作繁琐（需关闭龙虾重装才能恢复），体验受损 |
| `catubibu` | 大模型对话调参 | 希望动态调整 temperature，偏好关键字方式 |

**共性信号**: 用户对深度技术问题愿意自我排查/提交根因分析，但项目响应慢（4 个月无回复后 stale 关闭）可能是社区活跃度受限的主因之一。


## 8. 待处理积压（⚠️ 维护者关注）

| 项目 | 类型 | 创建 | 停留时长 | 风险 |
|------|------|------|---------|------|
| [PR #1127](https://github.com/netease-youdao/LobsterAI/pull/1127) MCP stop() 定时器竞态修复 | 修复 PR | 3/31 | 5 个月 | 已 stale，可能自动关闭 |
| [PR #1130](https://github.com/netease-youdao/LobsterAI/pull/1130) SSE 流式解析行缓冲修复 | 修复 PR | 3/31 | 5 个月 | 已 stale，可能自动关闭 |
| [Issue #1783](https://github.com/netease-youdao/LobsterAI/issues/1783) diff 失灵（含根因分析） | Bug（高价值） | 4/21 | 4 个月 | 今日已 stale 关闭 |
| [Issue #1745](https://github.com/netease-youdao/LobsterAI/issues/1745) 邮箱 OAuth2 支持 | 功能请求 | 4/19 | 4 个月 | 今日已 stale 关闭 |

**健康度信号**: 低——高质量 PR 滞留、高价值 Issue 被自动清理而无人响应，项目维护活跃度与社区投入不成正比。若持续清理（stale）而不处理，"今日 7 条全关闭、0 新开" 可能让项目看起来比实际更沉寂。


> **生成说明**: 本日报数据来自提供的 GitHub 数据快照，反映截至 2026-08-30 的项目状态。所有链接均为 github.com/netease-youdao/LobsterAI 下对应编号。未包含数据未涵盖的功能、版本或指标。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

```markdown
# Moltis 项目动态日报（2026-08-30）

## 1. 今日速览

过去 24 小时项目活跃度较低，Issues 与 PR 各有 1 条新增，无新版本发布。当前有 1 个 Bug 报告（#1246）与 1 个针对性的修复 PR（#1247）待处理，社区讨论热度不高（0 评论）。项目整体处于相对平稳的维护周期，但值得注意的是，新 Bug 与修复 PR 恰好聚焦于同一领域（沙箱运行时），说明近期该模块改动后引入了回归问题，需维护者及时跟进合并修复。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭。唯一活跃的 PR 为 **#1247**（待合并），该 PR 针对沙箱模块的 Docker 兼容性问题提出了修复方案：在 arm64 Docker daemon 环境下，移除对 DMI sysfs 的挂载掩码。该修复直接关联 Issue #1085，若合并将解决 macOS 上 Docker Desktop VM 中 sysfs 掩码逻辑错误导致沙箱无法正常启动的问题，属于沙箱模块的跨平台兼容性补强。

- [PR #1247: fix(sandbox): drop DMI sysfs masks on arm64 Docker daemons](https://github.com/moltis-org/moltis/pull/1247)

## 4. 社区热点

今日无高讨论量或高反应量的 Issues/PRs。两条活跃条目（#1246、#1247）均无评论与点赞，社区关注度偏低，无明显的舆论热点诉求。

## 5. Bug 与稳定性

**Bug #1246（较严重）** — 在沙箱中添加节点后无法运行（"can't run on sandbox after a node is added"）。目前该 Issue 仍处于打开状态，尚无评论，但已有对应的修复 PR #1247 提交，预计可针对性解决。严重程度评估：直接影响用户核心操作流程（沙箱运行），属于功能阻断性问题，建议维护者优先确认修复方案并合并。

- [Issue #1246: can't run on sandbox after a node is added](https://github.com/moltis-org/moltis/issues/1246)
- [Fix PR #1247](https://github.com/moltis-org/moltis/pull/1247)

## 6. 功能请求与路线图信号

今日无新增功能请求。PR #1247 的实现方向（优化 Docker 沙箱在不同架构与宿主环境下的 sysfs 掩码判断逻辑）暗示了项目对跨平台（macOS/arm64）沙箱兼容性的持续投入，这可能是中期路线图中的一项重点任务。结合 Issue #1246 的反馈，沙箱模块的稳定性与兼容性仍是用户侧最关注的功能点。

## 7. 用户反馈摘要

今日无 Issues 评论，无法提炼用户反馈。仅从 Issue #1246 的描述推断，用户在沙箱环境中执行"添加节点"操作后遭遇运行失败，且该 Bug 为首次报告（用户已确认搜索过历史 Issues 且使用最新版本），说明此问题为近期改动引入的回归缺陷，而非长期存在的已知问题。

## 8. 待处理积压

当前数据库内无长期未关闭的遗留 Issue/PR 数据（仅两条均在 24 小时内活跃）。建议维护者关注 #1246 与 #1247 的联动进度，确保修复 PR 及时合入并关闭对应 Issue，避免 Bug 积压。

---
*数据采集时间：2026-08-30 | 来源：[Moltis GitHub 仓库](https://github.com/moltis-org/moltis)*
```

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 — 2026-08-30

## 1. 今日速览

CoPaw（QwenPaw）项目今日活跃度非常高：24小时内共产生 12 条 Issue 更新和 14 条 PR 更新，其中新开 PR 主要集中在 PawApp SDK/运行时稳定性修复（#7413–#7416）和 Agent 层空文本块清理（#7409），社区贡献者占比明显提升（3 个 first-time-contributor PR）。Issue 侧 Bug 报告密集，涉及飞书通道配置丢失、Ark Responses API 400 错误、Console 消息漂移等生产环境问题，反映出 2.1.0 版本在上线后暴露出若干稳定性短板；同时 QwenPaw Hub 多租户版的讨论帖积累了 14 条评论，社区对团队化部署的期待明确。整体判断：项目处于**高活跃迭代期**，稳定性修复与功能扩张并行。当前无新版本发布。

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并（4 条已关闭 PR 均为非合并关闭）。值得关注的 PR 进展如下：

- **[#6825 fix(mcp): apply configured timeout to client sessions](https://github.com/agentscope-ai/QwenPaw/pull/6825)** — 今日关闭（未合并）。修复 #6822 的 MCP 超时配置未传递到 SDK ClientSession 的问题，但该修复目前未进入主干，相关 Bug 的状态仍需关注。
- **[#6293 feat(providers): add qwen3.8 to Aliyun Token Plan](https://github.com/agentscope-ai/QwenPaw/pull/6293)** — 今日关闭（未合并）。为阿里云 Token Plan 目录注册 `qwen3.8-max-preview`（100万 token 上下文、65,536 token 输出），对齐阿里云新模型发布节奏。
- **[#6581 fix(console): avoid redundant multimodal upload warning](https://github.com/agentscope-ai/QwenPaw/pull/6581)** 与 **[#7191 fix(console): preserve non-ASCII file card names](https://github.com/agentscope-ai/QwenPaw/pull/7191)** — 均于今日关闭（未合并），分别修复重复的多模态上传警告（#7136 修复的非 ASCII 文件名显示问题），两处 Console 体验优化未进入主干。

此外，**wananing** 今日连续提交了两个关键修复 PR（#7409 和 #6889），说明 Agent 层和 Console 输入层均有活跃的开发推进；**guodaxia103** 一组三个 PR（#7413–#7415）系统性加固 PawApp 运行时稳定性，目前均在待合并状态。

---

## 4. 社区热点

- **[#7318 [讨论] QwenPaw Hub 多租户版即将在 2.2.0 推出，社区希望接下来构建什么？](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — 14 条评论 + 1 👍，是今日讨论最热烈的话题。该帖回应了社区对团队化运行 QwenPaw 的长期诉求，引用了 #2324（多用户访问和管理员功能）等历史需求。社区明显在向"个人助手 → 团队协作"方向演进，2.2.0 的 Hub 多租户版值得重点关注。

- **[#7405 [提问] Plan Mode](https://github.com/agentscope-ai/QwenPaw/issues/7405)** — 用户怀念旧版 Plan Mode 的"先看计划再执行"体验，虽然有 snapshot 可回滚代码，但仍希望先看到模型的执行计划。反映出用户对**可预测性**和**控制感**的核心诉求。

- **[#7406 官方主题定制支持（强调色/字体/间距）](https://github.com/agentscope-ai/QwenPaw/issues/7406)** — 用户抱怨桌面端 UI 锁定在单一橙色主题（#f07e26），只能通过 hack 修改 index.* 文件来定制，希望官方提供配置入口。个性化定制需求明确。

---

## 5. Bug 与稳定性

按严重程度排列：

**高危**

- **[#7402 Ark Responses API 400 错误 — 空 output_text 块污染会话历史](https://github.com/agentscope-ai/QwenPaw/issues/7402)** — v2.1.0 Docker 环境下，模型回合仅消耗 token 于推理时产生空 `content=[{"type":"output_text","text":""}]`，该空块持久化后导致每次后续请求都返回 400 错误。**已有对应 fix PR：[#7409 fix(agents): drop empty assistant text blocks](https://github.com/agentscope-ai/QwenPaw/pull/7409)，待合并。**

**中危**

- **[#7408 飞书通道配置被意外清空，cron 投递报 KeyError](https://github.com/agentscope-ai/QwenPaw/issues/7408)** — 运行中的 `agent.json` 中 `channels.feishu` 配置段被清空，导致飞书通道停用且定时任务失败。尚无对应 fix PR。
- **[#6822 MCP 流式连接瞬断后自动重连仍永久阻塞当前会话](https://github.com/agentscope-ai/QwenPaw/issues/6822)** — 已关闭，问题在 PR #6825 中修复，但该 PR 今日被关闭且未合并。**需确认修复是否会重新提交。**

**低危**

- **[#7407 Console 消息漂移到错误 agent](https://github.com/agentscope-ai/QwenPaw/issues/7407)** — 用户报告 Console 消息被路由到错误的 agent 实例，报告由 AI 生成部分内容，等待用户确认复现。尚无回应。

**PawApp SDK/运行时加固（guodaxia103，三个配套 PR）**

- **[#7410 异步生成器关闭时部分状态丢失](https://github.com/agentscope-ai/QwenPaw/issues/7410)** → [#7413 fix PR](https://github.com/agentscope-ai/QwenPaw/pull/7413)，保留 GeneratorExit 时的中断状态。
- **[#7411 运行时不可用时返回合成回复（fail-open）](https://github.com/agentscope-ai/QwenPaw/issues/7411)** → [#7414 fix PR](https://github.com/agentscope-ai/QwenPaw/pull/7414)，改为 fail-closed 并返回结构化错误。
- **[#7412 流取消清理阻塞且非幂等](https://github.com/agentscope-ai/QwenPaw/issues/7412)** → [#7415 fix PR](https://github.com/agentscope-ai/QwenPaw/pull/7415)，使 reader.cancel 不再阻塞迭代器。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 信号强度 | 判断 |
|---|---|---|---|
| **QwenPaw Hub 多租户版**（团队协作） | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | ⭐⭐⭐ 官方已确认 2.2.0 推出 | 路线图确定性最高 |
| **`/btw` 侧问命令**（不污染主对话上下文） | [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | ⭐⭐ 参考 Claude Code 成熟模式 | 实现成本低，可能纳入后续版本 |
| **恢复 Plan Mode** | [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | ⭐⭐ 用户强烈怀念 | 需权衡与现有 mission/goal 模式的关系 |
| **Console 暴露 DingTalk card_auto_layout** | [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | ⭐⭐⭐ 已有对应 PR [#7416](https://github.com/agentscope-ai/QwenPaw/pull/7416) | 极可能随下一版本合入 |
| **官方主题定制**（强调色/字体/间距） | [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | ⭐ 个人化诉求 | 短期可能性低，除非社区呼声持续升高 |
| **聊天滚动锁定** + **工具调用可见性开关** | PR [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) / [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357)（AaronZ345） | ⭐⭐ 已有实现 | 两个 Console 体验优化均为 OPEN 状态待合并 |

---

## 7. 用户反馈摘要

- **MCP 连接脆弱性影响信任感**（#6822，#6825）：用户 BLUE0818 报告一次短暂的网络抖动即可让整个会话永久卡死，"瞬断 + 自动重连"机制并未真正解决根本问题，说明 MCP 层可靠性是用户强依赖的基础设施能力。
- **飞书配置丢失造成生产事故感**（#7408）：用户 feng183043996 详细记录了配置被清空的时间线（备份于 2026-08-29 06:…），且 cron 任务报错缺少可操作的错误提示（`KeyError('channel not found: feishu')`），对新手的排障门槛较高。
- **对"可预测性"的回归需求**（#7405）：用户 CD-IE 明确表示 Plan Mode 的核心价值在于"先看到模型打算做什么"，snapshot 回滚是事后补救，不等于事前的可控性。这与当前 agent 自动执行趋势形成张力。
- **桌面端个性化被忽视**（#7406）：用户 Skepticwise 通过手动修改 index.* 文件来定制主题，说明 UI 定制自由度低，但也侧面反映用户对 QwenPaw Desktop 的使用粘性较高。
- **多租户/团队化需求持续升温**（#7318）：社区反复提出多用户访问和管理员功能（#2324），QwenPaw Hub 是官方对该诉求的首次正式回应，热度表明个人 AI 助手向团队协作工具延伸是明确方向。

---

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 备注 |
|---|---|---|---|
| [#6822 MCP 流式连接问题](https://github.com/agentscope-ai/QwenPaw/issues/6822) | Bug（已关闭） | 2026-08-08 | 关联修复 PR #6825 今日被关闭且未合并，需维护者重新评估修复方案 |
| [#6889 fix(console): preserve textarea target for IME events](https://github.com/agentscope-ai/QwenPaw/pull/6889) | PR | 2026-08-11 | 修复 #6885（中文输入法 IME 组合事件丢失），已搁置 19 天未合并，中文用户输入体验受影响 |
| [#7403 Update README](https://github.com/agentscope-ai/QwenPaw/pull/7403) | PR（first-time-contributor） | 2026-08-29 | 模板内容未填写完整，属于初学者 PR，建议维护者引导完善或关闭 |
| [#7356 聊天滚动锁定](https://github.com/agentscope-ai/QwenPaw/pull/7356) 与 [#7357 工具调用可见性开关](https://github.com/agentscope-ai/QwenPaw/pull/7357) | PR | 2026-08-27 | 连续 3 天未获 review，Console 体验改进被搁置 |
| [#7401 Windows ACP agent 工作区初始化卡死](https://github.com/agentscope-ai/QwenPaw/pull/7401) | PR | 2026-08-29 | Windows 平台事件循环冻结问题，影响 Windows 用户核心使用，建议优先 review |

---

**总体评估**：项目健康度为**良好** — 社区贡献活跃（今日 3 位 first-time-contributor）、Issue 响应及时（大部分新 Issue 当天有维护者或社区回应）、PawApp 运行时和 Agent 层有系统性加固动作。主要风险在于 2.1.0 版本暴露的稳定性和配置持久化问题（#7402、#7408）尚未合入修复，以及 #6825 和 #6889 两个重要修复被搁置。建议维护者优先处理 #7402 对应 PR #7409 合入，并对 #6822 的修复方案给出明确答复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-30

## 1. 今日速览

ZeroClaw 过去 24 小时活跃度处于高位：共 50 条 Issue 更新（45 条活跃、5 条关闭）和 50 条 PR 更新（47 条待合并、3 条已合并/关闭），无新版本发布。当日新增 PR 集中在 i18n 本地化、配置验证、Rust lint 修复和渠道完善四个方向，社区贡献者（NiuBlibing、Audacity88、ump45nose 等）提交密集。值得注意的是，多条高优先级 Bug（如 #10230 守护进程栈溢出、#9899 安全公告豁免）仍处于未修复状态，安全与稳定性领域的债务正在累积。整体项目活跃度高，但合并吞吐量偏低（PR 合并率仅 6%），维护者审查带宽可能成为瓶颈。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，但提交了大量新 PR，反映了项目正在推进的方向：

| PR | 内容 | 状态 |
|---|---|---|
| [#10478](https://github.com/zeroclaw-labs/zeroclaw/pull/10478) | 将 POSIX 设备断言（/dev/null 等）测试限定在 Unix 平台，修复跨平台测试失败 | 待合并 |
| [#10472](https://github.com/zeroclaw-labs/zeroclaw/pull/10472) | 将 runtime 集成信息的错误提示、Category/Status 标签等纳入 Fluent i18n 目录，推进 #9972 本地化追踪器 | 待合并 |
| [#10477](https://github.com/zeroclaw-labs/zeroclaw/pull/10477) | 用 `std::mem::take` 替换 `Vec::drain(..).collect()`，修复 Rust 1.98 的 `clippy::drain_collect` lint | 待合并 |
| [#10474](https://github.com/zeroclaw-labs/zeroclaw/pull/10474) | ZeroCode Logs 详情页在事件负载不可用时展示活动日志路径，推进 #8650 | 待合并 |
| [#10476](https://github.com/zeroclaw-labs/zeroclaw/pull/10476) | 修复 `Configurable::set_prop` 嵌套 Optional 写入的验证问题，补充进程级测试，回应 #10320 | 待合并 |
| [#10473](https://github.com/zeroclaw-labs/zeroclaw/pull/10473) | 退出确认弹窗改为读取实时 `global.quit` 绑定而非编译期默认值 | 待合并 |
| [#10457](https://github.com/zeroclaw-labs/zeroclaw/pull/10457) | 新增公开维护者仪表盘（mdBook），含 PR 审查候选和 Issue 规划视图 | 待合并 |

项目整体在 i18n 边界收敛（#9972 系）、配置验证硬化（#10320 系）、ZeroCode UX 细节（#8650、#10059 系）三个维度的推进呈明显梯队态势。

## 4. 社区热点

**最受关注 Issue（按评论数）：**

1. **[#10118 Rust anti-slop 策略债务清理追踪器](https://github.com/zeroclaw-labs/zeroclaw/issues/10118)** （16 评论）— 追踪上游 `979c0430b` 之后 30+ 条与 anti-slop 策略冲突的 Rust 代码模式，涉及面广、风险等级高（risk:high），是当前社区讨论最密集的议题。社区诉求核心是对代码质量的系统性治理。

2. **[#9965 并行运行时门下的可执行测试夹具硬化](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** （10 评论）— 测试在多线程后写入可执行 shim 再 spawn 的竞态问题，属 P1 测试稳定性缺陷，直接影响 CI 可信度。

3. **[#9998 RFC：Session 级持久化 Prompt 附件](https://github.com/zeroclaw-labs/zeroclaw/issues/9998)** （9 评论）— 提出在历史裁剪、守护进程重启等场景下保留会话早期目标和约束的机制，触及 agent 长期任务稳定性的核心痛点。该 RFC 若获接受，将影响 agent 记忆架构的方向。

**值得注意的新 PR：**

- [#10475](https://github.com/zeroclaw-labs/zeroclaw/pull/10475)（WhatsApp Markdown 方言渲染）— 用户侧面反映模型输出的 Markdown 在 WhatsApp 中裸显星号和链接括号，说明跨渠道输出适配仍是社区普遍关注的功能缺口。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| 🔴 S1 - 工作流阻断 | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | 守护进程在 ZeroCode 应用 Quickstart 配置时 Tokio worker 栈溢出崩溃（zerocode/tui），风险等级 high | 无 |
| 🟠 S2 - 行为降级 | [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) | channels 媒体临时文件默认权限 0o644 可能泄露语音/图片敏感数据 | 无 |
| 🟠 S2 - 行为降级 | [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | cron 手动触发和运行历史读取在 agent 重命名期间存在 check-then-act 竞态（#9947 的跨 agent 变体） | 无 |
| 🟠 S2 - 行为降级 | [#10062](https://github.com/zeroclaw-labs/zeroclaw/issues/10062)（今日关闭） | TodoWrite/Plan 侧边栏在 ZeroCode 会话切换时泄漏上一会话内容 | 已关闭（修复已合入） |
| 🟠 安全公告 | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | `cargo deny` 因 `bitmaps 3.2.1`（经 imbl → Matrix SDK dev-deps 引入）的 RUSTSEC-2026-0247 失败，状态 blocked | 无 |
| 🟡 配置校验 | [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) | CLI `config set` 和 RPC `config/set` 跳过 `Config::validate()`，超范围值以 exit 0 持久化 | [#10476](https://github.com/zeroclaw-labs/zeroclaw/pull/10476) ✅ |

今日关闭的 5 个 Issue 中，[#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059)（Option-Backspace 词删除）和 [#6565](https://github.com/zeroclaw-labs/zeroclaw/issues/6565)（Telegram 工具审批键盘清理）为功能完成，#10062 为 Bug 修复。整体看 Bug 修复速度低于新 Bug 涌现速度。

## 6. 功能请求与路线图信号

**高热度功能请求：**

- **[#9998 Session 级持久化 Prompt 附件（RFC）](https://github.com/zeroclaw-labs/zeroclaw/issues/9998)** — 9 评论。核心诉求：agent 会话在历史裁剪/重启后不丢失初始目标和约束。已标 `status:accepted`，方向获认可，进入设计细化阶段，**大概率进入下一版本规划**。

- **[#5287 紧凑型 local_small 运行时配置 + Prompt 预算契约](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)** — 7 评论、2 👍。本地小模型模式，减少 prompt 膨胀、禁用宽松 fallback 解析。该项目已持续 5 个月，配合 #9535（上下文压缩比例锚定模型窗口）的推进，**local-first 路线在加速成型**。

- **[#10419 POST /webhook SSE 流式输出](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)** — 4 评论。Hosted Path 部署场景下 agent 循环运行时需 SSE 推送而非等待完整 JSON。对 Web 集成有直接价值，与 #10167（终端多路复用器生命周期导出）共同指向**外部系统集成层正在补强**。

**近期新增 PR 的方向信号：**

- [#10472](https://github.com/zeroclaw-labs/zeroclaw/pull/10472) 和 [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358)（Mattermost 审批流）表明**渠道体验（i18n、审批）是当前贡献热点**。
- [#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356)（AnySearch 搜索 provider）说明**工具生态扩充仍在持续**。

## 7. 用户反馈摘要

从今日活跃 Issue 评论中提炼的用户声音：

- **本地小模型需求迫切**（#5287）：用户期望 ZeroClaw 在本地模型下减少 prompt 膨胀、避免内部 tool/system 指令泄漏到用户可见输出，当前体验"prompt 太臃肿"。
- **渠道适配参差**（#10475）："Telegram、WeChat 和 email 各自转换渠道方言后才发送；WhatsApp 尚未做，Markdown 星号和链接括号直接裸露"。用户对跨渠道输出一致性有明确期待。
- **会话持久性焦虑**（#9998）：用户担心"历史裁剪后丢失早期目标和约束"，尤其是守护进程重启或外部任务产物歧义时，agent 会跑偏。
- **配置变更缺安全感**（#10320）：`config set` 超范围值静默成功（exit 0），用户在不知情的情况下持久化了非法配置，后续行为不可预测。
- **审查流程拖沓的隐忧**（#10185）：项目"决定不落地自动双审批和 exact-head 强制"，社区对 PR 审查质量一致性的关注度高，该追踪器今日关闭。

## 8. 待处理积压

以下 Issue/PR 长时间未获有效推进，提醒维护者关注：

| 类别 | 编号 | 等待时长 | 说明 |
|---|---|---|---|
| Issue（安全） | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) RUSTSEC-2026-0247 | 自 08-10 起 20 天，状态 `blocked` | 安全 CI 持续失败，依赖 `bitmaps` 的移除路径未定，建议优先响应 |
| PR（高风险） | [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) Bluesky/Reddit 发送者授权 | 自 07-27 起 34 天，标记 `needs-author-action` | 安全修复（仅剩两个未查 `peer_groups` 的入站渠道），风险等级 high |
| PR（高风险） | [#9382](https://github.com/zeroclaw-labs/zeroclaw/pull/9382) WhatsApp 空 allowed_groups 安全修复 | 自 07-26 起 35 天，标记 `needs-author-action` | `allowed_groups` 为空时除 `group_policy=all` 外拒绝所有群组的问题 |
| Issue（P1） | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) 并行门测试夹具竞态 | 自 08-13 起 17 天，12 条评论 | 测试稳定性 P1，直接影响 CI 可信度，尚无对应 PR |
| PR（大功能） | [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358) Mattermost 审批提示 | 自 08-25 起 5 天，`needs-author-action`，size:XL | Mattermost 渠道无审批路径是明确的功能空白，但审查周期可能较长 |
| PR（大功能） | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) 上下文压缩锚定模型窗口比例 | 自 07-29 起 32 天，`needs-author-action`，principal contributor | 与 #5287 本地模型路线直接相关，量大（size:XL），建议协调资源加速评审 |

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*