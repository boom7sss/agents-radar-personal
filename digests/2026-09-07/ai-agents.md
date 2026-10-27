# OpenClaw 生态日报 2026-09-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-07 13:01 UTC

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

# OpenClaw 项目动态日报 — 2026-09-07

## 1. 今日速览

OpenClaw 项目在过去 24 小时内保持高活跃度，共有 500 条 Issue 更新（新开/活跃 281 条，关闭 219 条）和 500 条 PR 更新（248 条待合并，252 条已合并/关闭），社区反馈与维护节奏均处于健康水平。与此同时，**项目发布频率为零**，当前没有新版本释出，周期内的关注焦点集中在稳定性修复与积压清理。多个高优先级 Bug（P0/P1）仍处于维护者评审阶段，其中稳定性类问题（进程泄漏、SQLite 锁竞争、事件循环阻塞）反复出现且缺少直接修复 PR，值得路线图优先关注。另一方面，近期新提交的多个小规模 PR 显示出维护者和社区正着手推进代码质量与文档重构工作。

## 2. 版本发布

过去 24 小时内没有新的版本发布。

## 3. 项目进展

过去 24 小时内没有明确标为"已合并"的 PR 展示在数据中，当前更新集中的 PR 多数为今天（09-07）新开且处于待审核状态，整体项目推进以**新修复提交**为主。值得注意的新提交包括：

- **[PR #141146]** fix: catch published upgrade regressions before merging — 修复发布版 `openclaw update` 回归问题，在合并前增加 AWS Crabbox 矩阵检测，作者表示此前在约 12 个 npm 发布版本中发现 5 个缺陷（分别由 #140778、#1... 修复）。（steipete，size: XL, P2）
- **[PR #141219]** fix(update): roll back a fresh install's first broken update — 修复全新安装后首次更新失败导致 Gateway 停止的问题，相关 Issue 包括 #124396、#140419、#140725。（steipete，size: L, P1）
- **[PR #141072]** fix(agents): keep idle-timed-out settled turns failed when summary recovery is empty — 修复 agentTurn 因空闲看门狗中断后仍被标记为成功的问题，关闭 #141032。（ylcn91，size: L, P1）
- **[PR #141179]** feat(codex): support configured native Responses providers — 在保留原作者提交的基础上推进 Codex 原生 Responses provider 支持，关联 #101586、#131261。（altaywtf，size: XL）

这些 PR 集中在**更新回滚机制、CI 回归防护、agent 生命周期正确性**三个方向，显示项目在当前开发周期内更注重系统可靠性，而非功能扩张。

## 4. 社区热点

今日讨论最集中的议题集中在**消息丢失、会话状态和认证**三个领域，高评论 Issue 如下：

- **[Issue #97616]** [Bug]: OpenClaw leaks unreaped hook/tool child processes（15 条评论，1 👍，P1）— 用户报告 hook/tool 子进程未被回收，僵尸进程累积导致运行时性能下降。该 Issue 创建于 2026-06-29，时隔两个多月仍在活跃讨论，说明问题复现和定位难度较高。链接：https://github.com/openclaw/openclaw/issues/97616
- **[Issue #79077]** Support for Telegram bot-to-bot and guest-bot modes（15 条评论，8 👍，已关闭）— 社区呼声最高的功能请求之一（8 个 👍 为今日最高），Telegram 2026-05-07 发布的新平台特性，今日被标记关闭。链接：https://github.com/openclaw/openclaw/issues/79077
- **[Issue #135111]** [Bug]: Intermittent "Provider completed tool call with malformed JSON arguments"（15 条评论，P1）— 用户报告 v2026.8.1 升级后偶发工具调用 JSON 解析失败，属于回归类问题。链接：https://github.com/openclaw/openclaw/issues/135111
- **[Issue #43367]** Multi-agent orchestration is unstable（14 条评论，1 👍，P1）— 多智能体并发编排不稳定问题，涵盖配置覆盖、会话锁失败、子任务脱离等，自 3 月报告至今仍开放。链接：https://github.com/openclaw/openclaw/issues/43367

社区讨论的核心诉求集中在：**并发场景下的稳定性**（多智能体、SQLite 竞争、子进程管理）与**渠道集成完整性**（Telegram 新特性、Discord、WhatsApp），两者共同指向 OpenClaw 在生产环境中的可靠性瓶颈。

## 5. Bug 与稳定性

今日报告的 Bug 中，P0/P1 级别的严重问题如下：

| 严重度 | Issue | 问题描述 | Fix PR 状态 |
|--------|-------|---------|------------|
| **P0** | [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 刷新成功但 cron/heartbeat 10 秒超时失败（回归，diamond lobster） | 无新 fix PR |
| **P0** | [#140497](https://github.com/openclaw/openclaw/issues/140497) | Discord 设置接受 application ID 作为 bot token，通道永不启动（已关闭） | 已关闭 |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏，僵尸进程累积导致运行时降级（回归） | 无新 fix PR |
| **P1** | [#135111](https://github.com/openclaw/openclaw/issues/135111) | v2026.8.1 偶发"工具调用返回畸形 JSON 参数"错误（回归） | 无新 fix PR |
| **P1** | [#140010](https://github.com/openclaw/openclaw/issues/140010) | Windows 睡眠恢复后 UI/WebSocket 重连失败 30-60 秒+ | 无新 fix PR |
| **P1** | [#136183](https://github.com/openclaw/openclaw/issues/136183) | ssh 命令执行挂起（2026.8.1 引入，2026.8.2 仍存在） | 无新 fix PR |
| **P1** | [#139714](https://github.com/openclaw/openclaw/issues/139714) | 更新恢复子进程导致 `openclaw status` 永远显示"更新中" | 无新 fix PR |
| **P1** | [#137927](https://github.com/openclaw/openclaw/issues/137927) | 内部上下文块泄漏到 Telegram 可见消息文本（安全） | 无新 fix PR |

值得注意的趋势：**多个 P1 回归问题（#135111、#136183）自 2026.8.1 引入后到 2026.8.2 仍未修复**，且所有高严重度问题均标注 `clawsweeper:no-new-fix-pr` 与 `clawsweeper:needs-maintainer-review`，说明维护者已关注但修复尚未落地。SQLite 写句柄竞争导致 ~33 秒事件循环停顿（#117262）和 Gateway 事件循环阻塞（#119720）两个性能问题也持续开放。

此外，[PR #141218](https://github.com/openclaw/openclaw/pull/141218) 尝试修复 Discord 重连后成员状态不显示的问题（关闭 #141054），但尚处于 `needs proof` 状态。

## 6. 功能请求与路线图信号

今日讨论中的功能请求及其可能被纳入下一版本的信号如下：

- **Telegram bot-to-bot 与 guest-bot 模式支持**（[#79077](https://github.com/openclaw/openclaw/issues/79077)，8 👍）— 今日被关闭，Telegram 新平台能力需求强烈，但关闭原因未标注（可能已排期或废弃）。建议维护者明确公示处理结论。
- **多 Azure/Teams 机器人支持**（[#71058](https://github.com/openclaw/openclaw/issues/71058)，1 👍）— 希望单个 Gateway 支持多个 Teams bot 身份，当前 `channels.msteams` 为单对象限制。长期开放（4 月至今），处于 needs-product-decision。
- **会话重置/清理时触发 session-memory 钩子**（[#51572](https://github.com/openclaw/openclaw/issues/51572)，1 👍）— 当前仅在自动压缩时触发，不覆盖空闲/每日重置或剪枝场景。需要产品决策。
- **推理流（reasoning stream）可视化**（[#42276](https://github.com/openclaw/openclaw/issues/42276)）— 希望像 OpenAI/Grok 一样覆盖写入展示思考过程。3 月提出，标注为 enhancement + P3 + diamond lobster。

与此同时，多个 PR 已进入 `ready for maintainer look` 状态并获得较高评分（platinum hermit），预计在维护者评审后可能走向合并，其中包括：

- **[PR #141179]** feat(codex): support configured native Responses providers — 将 Codex 后端配置能力向前推进，关联 #101586、#131261。（altaywtf，size: XL）
- **[PR #140696]** refactor(policy): share sandbox bind parsing — 统一策略层与核心的 Docker bind 解析逻辑，避免 Windows 容器驱动行为漂移。（steipete，size: S）
- **[PR #138989]** fix: preserve literal final tags in delivered code examples — 修复 XML 示例中 `<final>` 标签被剥离的问题。（Alix-007，size: S）
- **[PR #141199]** fix(telegram): show compaction progress in partial and block previews — 在 Telegram 预览中展示压缩进度，避免长时间无响应观感。（VACInc）
- **[PR #132229]** feat(meta): add muse-image as a first-class image-generation provider — 为 meta provider 补充图像生成能力，关闭 #132228。（mreso，size: M）

综合来看，下一阶段的版本更新可能聚焦在 Codex 后端深度集成、Meta 图像生成能力扩展和更新回滚可靠性上。

## 7. 用户反馈摘要

从今日 Issues 评论中可以提炼以下真实用户痛点：

- **升级即回归的隐忧**：多位用户报告升级到 v2026.8.1 后出现新问题（如 #135111 的 JSON 解析失败、#136183 的 ssh 挂起），且 v2026.8.2 仍存在。用户对版本升级的信任度可能受到影响。
- **多智能体编排不可靠**：Issue #43367 的用户详细描述了并行 agent 运行时的三类失败，称"make multi-agent runs unreliable in practice"。该问题自 3 月报告以来持续 6 个月未解决，可能成为重度用户转向竞品的理由。
- **Windows 平台体验问题**：睡眠恢复后重连延迟 30-60 秒（#140010）、Windows CI 覆盖率仅 0.60%（#126874）等反馈表明 Windows 是 OpenClaw 的薄弱平台。
- **安全与隐私焦虑**：内部上下文块泄漏到 Telegram 可见文本（#137927）、file:// 链接绕过富链接白名单导致原始 Markdown 泄漏（#137705），两者都是安全敏感问题，用户关注度高但评论数不算最多。
- **进程泄漏影响长期运行**：Issue #97616 的用户指出僵尸进程累积导致"runtime degradation"，对于将 OpenClaw 作为常驻 Gateway 运行的用户来说影响直接。
- **异步/恢复流程的"永久挂起"状态**：多个 Issue（#139714 更新状态永挂、#137332 requester-settle 批次永远重试、#121232 dreaming ranker 永远拒绝）反映出状态机在异常路径下缺乏终止条件，用户会观察到"卡死但无崩溃"的模糊状态。

## 8. 待处理积压

以下 Issue/PR 已经开放较长时间且仍无解决进展，建议维护者优先关注：

| 项目 | 创建时间 | 持续天数* | 严重度/评分 | 说明 |
|------|---------|----------|------------|------|
| [#43367](https://github.com/openclaw/openclaw/issues/43367) 多智能体编排不稳定 | 2026-03-11 | ~180 天 | P1 / gold shrimp | 并发 agents 配置覆盖、会话锁失败、子任务脱离，至今无 fix PR |
| [#42276](https://github.com/openclaw/openclaw/issues/42276) 推理流可视化 | 2026-03-10 | ~181 天 | P3 / diamond lobster | 无维护者回复迹象，路线图信号弱 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) 暴露解析后的后端模型 | 2026-03-21 | ~170 天 | P2 / off-meta tidepool | LiteLLM 路由场景下 agent 无法感知实际使用的模型 |
| [#51572](https://github.com/openclaw/openclaw/issues/51572) session-memory 钩子扩展 | 2026-03-21 | ~170 天 | P2 / off-meta tidepool | 重置/剪枝场景不触发记忆钩子 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) 多 Azure/Teams 机器人 | 2026-04-24 | ~136 天 | P2 / off-meta tidepool | 单一 Gateway 多 Teams bot 支持 |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) Telegram bot-to-bot 模式 | 2026-05-07 | ~123 天 | P2 / platinum hermit | 今日关闭但无结论说明，建议公示处理方式 |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) SQLite 三写句柄竞争致 ~33s 停顿 | 2026-08-01 | ~37 天 | P1 / diamond lobster | 事件循环阻塞核心问题，无 fix PR |
| [#126874](https://github.com/openclaw/openclaw/issues/126874) Windows CI 覆盖率 0.60% | 2026-08-20 | ~18 天 | P2 / diamond lobster | 66/10,979 测试文件运行，checks-windows 形同虚设 |

*注：持续天数按 Issue 创建日至日报日期（2026-09-07）估算。

**给维护者的建议优先级**：
1. **P0/P1 回归类**（#89278、#135111、#136183）应优先确认修复排期 — 直接影响用户升级信心
2. **长期 P1**（#43367、#97616、#117262）需要至少给出阶段性结论或 workaround
3. **已关闭的高热度 Issue**（#79077）建议补充关闭原因说明，减少社区困惑
4. **多组 PR 已 ready for maintainer look**（#141179、#140696、#141199 等）等待评审，建议加快处理以避免 PR 积压

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告 — 2026-09-07

## 1. 生态全景

今日观察的 11 个开源项目中，**OpenClaw 与 Hermes Agent 构成生态核心活跃层**（日更新各约 500 条 Issue/PR），次活跃层由 NanoBot、NanoClaw、ZeroClaw、CoPaw（各 20-50 条 PR 更新）领衔，其余项目处于缓慢或停滞状态。生态整体处于**稳定性与可靠性攻坚期而非功能扩张期**——所有活跃项目当日均无新版本发布，PR 集中在更新回滚机制、会话状态一致性、进程泄漏修复等可靠性方向。多项目同时暴露"升级即回归"的信任危机（OpenClaw v2026.8.1/8.2 系列回归、NanoBot PR #5622 引发的回归、CoPaw v2.2.0 多项回退），"会话数据丢失/不可见"成为跨项目最严重的高频痛点（OpenClaw #97616、Hermes #104079、ZeroClaw #10121/#10659/#9333、NanoClaw #3735/#3732、PicoClaw #3351）。此外，**存储与归档全生命周期治理**（NanoClaw #3735 磁盘无限增长、PicoClaw #3351 压缩物理删档）与 **Windows 平台支持缺口**（Hermes #58576、ZeroClaw #7462、OpenClaw #140010）是多项目共同的明显短板。

## 2. 各项目活跃度对比

| 项目 | 今日 Issues 更新 | 今日 PR 更新 | 今日 Release | 合并/关闭 PR | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新开/活跃 281，关闭 219） | 500（248 待合并，252 已合并/关闭） | 无 | 252 | ★★★★☆ 活跃度高、维护节奏健康，但 P0/P1 回归积压且发布频率为零 |
| **Hermes Agent** | 50（关闭 18） | 50（合并/关闭 16） | 无 | 16 | ★★★★☆ 活跃度较高，bug→fix PR 间隔缩短，但 P1 存量化解偏慢 |
| **NanoBot** | 0 新开 | 20（合并/关闭 10，待合并 10） | 无 | 10 | ★★★★☆ 维护者集中清理+社区贡献并行，无新增用户问题暴露 |
| **NanoClaw** | 新开 2、关闭 1 | 28（合并/关闭 21，待合并 7） | 无（最近 v2.3.0） | 21 | ★★★★☆ durable host 架构系列合入，但存储治理缺陷新暴露 |
| **CoPaw** | 39（24 活跃，15 关闭） | 47（29 待合并，18 关闭/合并） | 无 | 18（均为关闭非合并） | ★★★★☆ v2.2 后密集迭代中，3 位首次贡献者加入，健康度良好 |
| **ZeroClaw** | 33 | 50 | 无 | 1 | ★★☆☆☆ 合并率极低（仅 1 PR），大量高价值 PR 长期待审，S0/S1 数据丢失 Bug 无修复 |
| **PicoClaw** | 4（3 活跃，1 关闭） | 2（1 待合并，1 关闭） | 无 | 1 | ★★★☆☆ 稳定小步迭代，但 2 条 stale Bug（含数据丢失）无进展 |
| **IronClaw** | 0 | 13（10 待合并） | 无 | 3 | ★★★☆☆ 核心维护持续推进 WebUI 打磨，但社区讨论活跃度趋零 |
| **LobsterAI** | 0 | 8（5 合并/关闭，3 待合并） | 无 | 5 | ★★★★☆ 协作节奏紧凑，当日 5 条 PR 快速合入，正在消化 OpenClaw 升级回归 |
| **Moltis** | 0 | 2 待合并（停滞） | 无 | 0 | ★★☆☆☆ 低输入低输出，2 个修复 PR 跨日未获响应 |
| **NullClaw** | 0 | 1（Dependabot） | 无 | 0 | ★☆☆☆☆ 近乎停滞，唯一依赖升级 PR 搁置约 84 天 |
| **TinyClaw** | — | — | — | — | 无活动 |

## 3. OpenClaw 在生态中的定位

OpenClaw 是生态中**体量最大、社区最活跃的核心参照项目**（日更新 500 条 Issue/500 条 PR，远超 Hermes Agent 的 50/50 和其余项目），生态中存在明显的"OpenClaw 衍生与配套"谱系（NanoClaw、PicoClaw、IronClaw、TinyClaw、CoPaw 等从命名到方向均与其呼应）。其**优势**在于：多平台渠道覆盖面最广（Telegram/Discord/Slack/Teams/WhatsApp 等），社区对功能请求的响应与关闭机制完整，且有 LobsterAI 等桌面客户端项目适配其网关。**技术路线差异**：OpenClaw 强调 Gateway 常驻与多智能体编排，当前版本节奏聚焦**更新回滚可靠性、CI 回归防护与 agent 生命周期正确性**。**劣势/薄弱环节**：P0/P1 回归问题密集（v2026.8.1 引入的 JSON 解析失败与 ssh 挂起到 8.2 仍未修复），子进程泄漏与 SQLite 竞争等生产环境问题反复出现，Windows 平台支持（CI 覆盖率仅 0.60%）显著落后于 POSIX。与此同时，LobsterAI 反映的"OpenClaw 升级到 v2026.8.1 后 Windows 出现 4 个测试失败"说明升级回归已对下游生态产生连锁影响。

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话状态持久化与上下文丢失** | OpenClaw、Hermes Agent、NanoBot、ZeroClaw、CoPaw、NanoClaw | 压缩/切换/重启/预算超限后消息消失或状态错乱：ZeroClaw #10121/#10659/#9333（S0/S1 数据丢失）、Hermes #104079（压缩后双写 state.db）、NanoBot #5688（压缩后 provider 状态未失效）、OpenClaw #97616（进程泄漏） |
| **存储/归档全生命周期治理** | NanoClaw、PicoClaw | NanoClaw #3735（归档文件无 retention/上限）、#3732（转录轮转对长活容器永不触发）、PicoClaw #3351（自动压缩物理删除原始记录） |
| **更新即回归的信任危机** | OpenClaw、NanoBot、CoPaw、LobsterAI | OpenClaw v2026.8.1 多例回归跨版本未修复；NanoBot PR #5622 引入大小上限回归；CoPaw v2.2.0 移除路径手动编辑（#7588/#7601）；LobsterAI 消化 OpenClaw 升级带来的 Windows 测试失败 |
| **Windows 平台支持缺口** | Hermes Agent、ZeroClaw、OpenClaw、CoPaw | Hermes #58576（GIL 事件循环停顿 51s）、ZeroClaw #7462（74 项 Windows 测试失败近 3 个月）、OpenClaw #140010（睡眠恢复 30-60s 断连）、CoPaw #7363（同步调用冻结 118-135s） |
| **多智能体编排稳定性** | OpenClaw、ZeroClaw、Hermes Agent、NanoClaw | OpenClaw #43367（180 天未解决）、NanoClaw durable host 架构合入但存储治理未跟上、Hermes #71335（多进程共享 HERMES_HOME 写坏 OAuth）、CoPaw #7559（并发消息 409 冲突） |
| **Cron/后台任务可靠性** | OpenClaw、NanoBot、ZeroClaw、Moltis | ZeroClaw #9191（cron 任务无 wall-clock 超时）、#10599 修复 PR、NanoBot #5686（cron 计时器取消自己）、Moltis #1262（默认 cron 配置解析失败）、OpenClaw #89278（cron/heartbeat OAuth 超时） |
| **上下文压缩/预算管理** | CoPaw、Hermes Agent、ZeroClaw | CoPaw #7521（thinking 重复回放）、ZeroClaw #10663（prompt-cache TTL 不可配置）、NanoBot #5611（推理内容无限重放耗尽预算） |
| **沙箱/安全边界** | NanoBot、IronClaw、ZeroClaw、OpenClaw | NanoBot #5628（macOS Seatbelt）、IronClaw #8077（响应泄漏诊断分类）、ZeroClaw #6996（文件系统沙箱策略漂移）、OpenClaw #137927（上下文块泄漏到 Telegram） |
| **AI 辅助提报 Issue 成为常态** | CoPaw | #7597、#7006 由 AI agent 代笔撰写，社区借助 LLM 生成高质量缺陷报告 |

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道 Gateway + 多智能体编排 + Codex 后端集成 | 自托管重度用户，多平台生产部署 | 统一 Gateway 架构，Docker/sandbox 隔离，Telegram/Discord 等多渠道适配 |
| **Hermes Agent** | Desktop 优先 + Bot 群聊 + ContextCompressor 可扩展上下文引擎 | Desktop 用户 + 远端 Bot 部署者 | Desktop 非独立产品哲学（多前端共享 HERMES_HOME），shell hooks 框架级统一 |
| **NanoBot** | 轻量会话代理（CLI/WebUI/Desktop 多前端）+ 多 Provider 路由 | 个人轻量用户，偏好快速上手的开发者 | fallback provider 链 + WebSocket 多前端实时渲染 |
| **NanoClaw** | 容器化持久运行 + durable host 架构 + a2a 多智能体通信 | 长时间运行、容器部署的重度自动化用户 | durable host 持久化协调状态，shadow-write 双写，重启后状态恢复 |
| **ZeroClaw** | 架构级 RFC 驱动（会话持久化、沙箱策略、WASM 插件运行时） | 关注架构演进与安全底座的开发者 | 三份重量级 RFC 仍在 Revision 迭代；多 daemon + ACP admission |
| **CoPaw** | 桌面创作工具 + 插件市场 + Creator 批量创作 | QwenPaw 桌面端用户、内容创作者 | Creator 插件 + 任务分组分页 + 多时间线 A/B 对比 |
| **PicoClaw** | 嵌入式/轻量设备（RV1106/RISC-V）+ QQ Channel 适配 | 嵌入式/IoT 场景、低成本硬件用户 | Go 端实现，强调轻量；与 OpenClaw 形成轻量/完整对照 |
| **IronClaw** | WebUI 命令交互打磨 + MCP 安全 + WebSocket 依赖升级 | 关注 WebUI 体验的轻量用户 | 与 NEAR AI 平台绑定；MCP 泄漏拦截安全模型 |
| **LobsterAI** | Desktop 客户端（内置浏览器 + 网关管理）+ 任务产物组织 | 桌面端管理 OpenClaw 实例的用户 | Electron 客户端整合 OpenClaw v2026.8.1 升级分支 |

## 6. 社区热度与成熟度

**第一梯队 — 高活跃持续迭代期**：
OpenClaw（日更新 500+/500+，但发布暂停，处于"稳定性修复与积压清理"阶段）、Hermes Agent（50/50，shell hooks 系列问题已框架级收敛）、NanoClaw（架构性合并收尾期，durable host 全链路合入）。

**第二梯队 — 中活跃质量巩固期**：
NanoBot（维护者集中清理老旧 PR + 社区持续贡献，无新增 Issues 暴露）、CoPaw（v2.2 发布后密集消化社区反馈，3 位首次贡献者进入）、ZeroClaw（Issue 讨论活跃但 PR 合并率极低——50 条 PR 仅 1 条被合并——评审积压严重，RFC 流程受质疑 #10549）、LobsterAI（紧凑协作节奏，当日 5 PR 快速合入，处于 OpenClaw 升级回归消化阶段）。

**第三梯队 — 低活跃稳定维护期**：
PicoClaw（稳定小步迭代但数据丢失风险 issue stale 一周无响应）、IronClaw（核心维护者持续开发但社区 Issues 活跃度趋零）、Moltis（2 个修复 PR 跨日未审核）。

**第四梯队 — 停滞/休眠期**：
NullClaw（唯一 PR 为 Dependabot 自动更新且搁置约 84 天）、TinyClaw（24 小时无任何活动）。

**质量巩固信号**：活跃项目普遍具备多项工程化基础设施——OpenClaw 与 Hermes Agent 已配备 CI 回归矩阵与自愈看门狗（Hermes PR #101061），NanoClaw 今日新增 CI `gate` 聚合任务（#3736），ZeroClaw 的 eval 工具链 5-PR 栈（#9220 链）已卡 7 周等待作者响应。**社区热度风险信号**：IronClaw 与 NullClaw 的 Issues 侧活跃度趋零，建议维护者主动引导社区反馈渠道。

## 7. 值得关注的趋势信号

1. **更新与回滚策略正成为核心竞争力**：OpenClaw PR #141146（合并前增加 AWS Crabbox 矩阵检测）与 #141219（回滚全新安装的首次错误更新）、Hermes PR #104932（safe rollback 保留字面文件名）——"升级不破坏现有部署"已成为头部项目维护的核心关切。对开发者启示：将生产环境升级视作一等测试场景，在 CI 中内置升级回归检测。

2. **存储治理是长期运行部署的隐性地雷**：NanoClaw #3735（归档无上限增长）与 #3732（转录轮转对长活容器永不触发）是互补的存储管理缺陷；PicoClaw #3351 用户已源码定位至 `JSONLStore` 非纯 append-only。设计 agent 系统时，需将**数据全生命周期（写入→轮转→归档→清理→恢复）**作为系统架构的一部分，而非事后补丁。

3. **"所见内容在异常终止后消失"是最严重的信任破坏者**：ZeroClaw 的 #10121、#10659、#9333 三个 S0/S1 issue 模式完全一致——用户已看到的流式内容在进程退出/预算超限/会话切换后不可恢复。这提示流式前端需要将"已呈现给用户的内容"与"已持久化的内容"解耦，优先保障交付可靠性。

4. **AI 辅助提报正在改变开源社区协作模式**：CoPaw 多条 issue 由 AI agent 代笔撰写（#7597、#7006），内容质量较高且定位精准。维护者需适应"更大量、更规范但更缺上下文"的 AI 生成反馈，可考虑引入结构化 issue 模板与自动去重/分类来应对。

5. **macOS/Linux 之外的平台正在通过自给自足方式补短板**：NanoBot 用户主动贡献 macOS Seatbelt 沙箱（#5628，基于系统原生 `sandbox-exec` 零依赖），回应了 exec 工具在 Apple 平台的安全刚需。开源项目在 Windows 与 macOS 的差距正由社区侧通过贡献代码来弥合，是上游维护者值得关注并合理引导的活水。

6. **协议适配（Provider/Message Bus）是低成本获得生态红利的入口**：NanoBot 新增 AnySearch Provider（#5607，匿名可用无 key）、PicoClaw 新增 `x-opencode-session` 请求头（#3369）、ZeroClaw #10604 为 OpenCode 发送相同 header 保持 prompt cache 热——多个项目同时嗅到同一协议机会，说明作为 agent 项目，支持新 Provider 越轻量越能加速用户试用与生态接入。

7. **群聊的"分布式/脱机优先"拓扑正在崛起**：Hermes Agent #97681（Bot 群聊应在 Desktop 关闭后继续运行）当周即有 fix PR 跟进，NanoClaw 的 a2a 和 browser-based host/cell 管理（#3729）、ZeroClaw 的多 daemon RPC 架构（#10621）也在铺垫相近方向，下一阶段个人 AI 系统或将围绕"多设备常驻 + 分布式拓扑 + 离线自恢复"组织设计模型。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-09-07

## 1. 今日速览

NanoBot 今日处于**高活跃度**状态：24 小时内共有 20 条 PR 更新（合并/关闭 10 条、待合并 10 条），新开 Issues 为 0，版本发布为 0。主要维护者 chengyongru 今日集中合并并关闭了多个 WebUI 相关的 Bug 修复与文档更新 PR，同时仍有 10 条功能性 PR 处于待合并状态。整体项目呈现出典型的"维护者集中清理 + 社区持续贡献"并行的健康态势，无新增 Issues 亦表明近期未暴露新的用户端问题。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 10 条 PR 主要分为三类：WebUI/交互修复、文档统一、内存与状态一致性修复。

| PR | 类别 | 说明 |
|---|---|---|
| [#5689](https://github.com/HKUDS/nanobot/pull/5689) | Bug/WebUI | 修复服务器时钟滞后浏览器时，消息发送后计时器从 13-15s 跳回 1s 的显示不一致问题 |
| [#5690](https://github.com/HKUDS/nanobot/pull/5690) | 文档 | 将 personal-agent 引导指南与 Quick Start 安装流程统一，消除双入口维护成本 |
| [#5688](https://github.com/HKUDS/nanobot/pull/5688) | 内存 | 修复闲置压缩后 `session.provider_state` 未失效、导致 Codex 会话恢复旧 provider 历史的问题 |
| [#5685](https://github.com/HKUDS/nanobot/pull/5685) | WebUI 流程 | 修复用户首次运行 WebUI 未完成模型配置即关闭后、再次启动时被错误切换到终端向导的问题 |
| [#5684](https://github.com/HKUDS/nanobot/pull/5684) | 文档 | README 新增 WebUI 功能视觉导览，降低新用户发现成本 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | WebUI/渠道 | 向 WebSocket 客户端发布模型重试生命周期事件，TUI/WebUI 原地渲染重试倒计时与进度 |

综合来看，今日合并的 PR 集中在"改善首次使用体验"与"会话状态一致性"两个方向，均为渐进式修复而非大规模架构变更，项目当前处于稳定性打磨阶段。

## 4. 社区热点

今日各 PR 评论数据均为 undefined（数据源未采集到有效的评论计数），无法按讨论热度排序。从 PR 内容与作者分布可观察到的社区动态：

- **macOS 用户对沙箱隔离有明确需求**：[#5628](https://github.com/HKUDS/nanobot/pull/5628) 由 LuckTerence 提出为 macOS 添加 Seatbelt 沙箱后端（基于系统原生 `/usr/bin/sandbox-exec`，零新增依赖），该 PR 已开放 5 天并获得持续更新，说明 exec 工具的安全性对部分用户是刚需。
- **新 Provider 的贡献热情持续**：[#5607](https://github.com/HKUDS/nanobot/pull/5607) 由 cleverLucky 添加 AnySearch 网络搜索 Provider（匿名配额可用、无需 key），参考既有 Serper Provider 的模式实现，展示了社区对扩展开源生态的积极参与。
- **Desktop 与 Python 安装的双轨制**：来自新贡献者 Re-bin 的 [#5676](https://github.com/HKUDS/nanobot/pull/5676) 为 CLI 添加按调用选择 Desktop/WebUI 目标的能力，暗示部分用户在混合环境下对安装方式有灵活切换的需求。

## 5. Bug 与稳定性

今日报告的 Bug/回归问题全部已有对应的 fix PR，按严重程度排列如下：

**P2 级 — 有已合并修复**

1. **会话内存失效遗漏**（[#5688](https://github.com/HKUDS/nanobot/pull/5688)，已合并）— 闲置压缩后 `session.provider_state` 未失效，Codex 会话下次轮次可能从旧 provider 历史续跑，而非使用压缩后的精简会话。影响会话上下文正确性，修复已合并。
2. **WebUI 首次配置中断后流程错乱**（[#5685](https://github.com/HKUDS/nanobot/pull/5685)，已合并）— 用户关闭未完成模型配置的 WebUI 后，再次启动被切换到终端向导，加 `--yes` 后直接退出，修复后保留在 WebUI 中继续配置。
3. **计时器跳变**（[#5689](https://github.com/HKUDS/nanobot/pull/5689)，已合并）— 服务器时钟滞后浏览器时初始显示 "Working for 13–15s"。Pending 状态使用了服务器 run start 时间而非 activity 时间线，已修复。

**P2 级 — 待合并的修复 PR**

4. **fallback 机制失效**（[#5675](https://github.com/HKUDS/nanobot/pull/5675)，待合并，修复 [#5674](https://github.com/HKUDS/nanobot/issues/5674)）— 主模型挂起时耗尽 runner deadline，`FallbackProvider` 看不到超时响应，runner 取消整个链路，健康 fallback 模型无法接管。
5. **Katex 公式渲染错误**（[#5691](https://github.com/HKUDS/nanobot/pull/5691)，待合并）— `$$C` 后接换行时 WebUI 将 `C` 当作 fence 元数据，留给公式尾部多余的 `$$`，触发红色 KaTeX 错误。
6. **Cron 计时器冲突**（[#5686](https://github.com/HKUDS/nanobot/pull/5686)，待合并）— Cron 回调编辑 job store 时 `_arm_timer()` 取消了正在执行该回调的计时器任务，回合在得到结果前收到 `CancelledError`。
7. **回归：表单公式嵌入缺少大小守卫**（[#5630](https://github.com/HKUDS/nanobot/pull/5630)，待合并）— PR #5622 修复了 Dream 的系统提示词重复 Bug，但副作用是移除了 SOUL.md/USER.md/MEMORY.md 仅有的 8000 字符大小上限机制，需重新加回守卫。
8. **回归：推理补放超出轮次范围**（[#5611](https://github.com/HKUDS/nanobot/pull/5611，冲突待解决）— 持久化 `reasoning_content`/`thinking_blocks` 被无限重放给 provider，跨轮次推理消耗对话补放令牌预算与 prefll。

**严重程度排序说明**：上述各项均标记为 P2，但就用户可感知的影响而言，cron 计时器导致回合 `CancelledError`（#5686）与数据包耗尽 fallback 路径（#5675）对自动化使用场景的破坏性最大，值得优先合入。

## 6. 功能请求与路线图信号

今日无新 Issues 提出功能请求，但待合并的 PR 可以指示下一版本的功能方向：

- **macOS 沙箱能力**（[#5628](https://github.com/HKUDS/nanobot/pull/5628)）：为 `tools.exec.sandbox` 增加 opt-in 的 seatbelt 后端，保存工作区读写权限、媒体只读与显式执行规则。如合入，将补齐 NanoBot 在 macOS 上与 Linux 沙箱能力对齐的最后一块拼图。
- **新增任意搜索 Provider**（[#5607](https://github.com/HKUDS/nanobot/pull/5607)）：合入后用户无需 API key 亦可使用匿名配额进行网页搜索，降低新用户的试用门槛。参考既有 Serper 模式实现，架构风险低。
- **CLI 目标选择**（[#5676](https://github.com/HKUDS/nanobot/pull/5676)）：bare `nanobot` 与 `nanobot webui` 支持按调用指定 Desktop 或 Python 目标，保留 `commands:app` launcher 兼容性。
- **Gateway 健康检查文档化**（[#5687](https://github.com/HKUDS/nanobot/pull/5687)）：文档层面补充多实例网关 200/503 条件与完整 JSON 响应结构，有助于运维人员正确配置探针。

## 7. 用户反馈摘要

今日 Issues 评论数量为零（无新 Issues、无新增评论数据），可提炼的用户痛点多蕴含在 PR 描述与其修复场景中：

- **会话状态一致性是重度用户的真实痛点**（来自 [#5688](https://github.com/HKUDS/nanobot/pull/5688)）：Codex 会话在闲置压缩后出现新旧上下文混合续跑，"影响 Codex 会话体验"，说明长会话 + 压缩机制下的状态边界需要更严格的一致性保障。
- **WebUI 首次配置容错是基础体验门槛**（来自 [#5685](https://github.com/HKUDS/nanobot/pull/5685)）：用户首次运行 WebUI 半途关闭后，后续启动被强制转入终端向导，而加 `--yes` 则直接退出，流程对普通用户不友好——这属于首次使用即遇到的第一印象问题。
- **macOS 用户主动加固安全边界**（来自 [#5628](https://github.com/HKUDS/nanobot/pull/5628) 的作者主动贡献）：用户不只是口头反馈"缺少沙箱"，而是自己适配了系统原生 `sandbox-exec` 且不引入新依赖，呈现出自给自足贡献的风格。
- **隐私/默认配置趋严**（来自 [#5675](https://github.com/HKUDS/nanobot/pull/5675)）：主模型无响应时 fallback 完全无法接管，用户配置的健康备用模型被 runner 强制取消，在多 provider 环境中的预期是"主模型失败自动切换"而非"整链取消"。

## 8. 待处理积压

以下为多日未合并的关键 PR，建议维护者优先关注：

| PR | 开放天数 | 状态 | 说明 |
|---|---|---|---|
| [#5611](https://github.com/HKUDS/nanobot/pull/5611)（功能修复） | 8 天 | OPEN，标记 conflict | 推理补放无限重放导致预算耗尽，需解决冲突后合入；对应的 issue [#5584](https://github.com/HKUDS/nanobot/issues/5584) 已有明确闭环路径 |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630)（回归修复） | 5 天 | OPEN，标记 conflict | 修复 PR #5622 引入的大小上限回归，与已完成 PR 有耦合，存在合并冲突需要处理 |
| [#5628](https://github.com/HKUDS/nanobot/pull/5628)（新特性） | 5 天 | OPEN | macOS Seatbelt 沙箱后端；功能完整但需安全审查确认默认策略不会越权 |
| [#5607](https://github.com/HKUDS/nanobot/pull/5607)（新 Provider） | 8 天 | OPEN | AnySearch Provider 需要确认服务条款合规性与 key-optional 配额策略细节 |
| [#5675](https://github.com/HKUDS/nanobot/pull/5675)（Bug 修复） | 1 天 | OPEN | fallback 机制修复：挂起主模型耗尽 runner deadline 导致健康备用模型无法接管 |

其中 [#5675](https://github.com/HKUDS/nanobot/pull/5675) 与 [#5686](https://github.com/HKUDS/nanobot/pull/5686) 对应的是自动化/生产环境中较严重的问题，若回归测试通过建议尽快合入。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：** 2026-09-07

---

## 1. 今日速览

项目活跃度维持在较高水平（过去24小时 Issues 更新 50 条，PR 更新 50 条），但无新版本发布。Issue 关闭率 36%（18/50），PR 合并/关闭率 32%（16/50），合并速度略低于队列增速。值得关注的是，**会话状态与生命周期管理**（session-state）与**上下文压缩**（compression）相关的回归问题成为当天主线，多条 P1/P2 级别的 bug 密集上报并已有对应 fix PR 跟进。此外，关于 shell hooks 在多入口点失效的系列 issue 今日出现集中关闭趋势，疑似已通过框架性修复解决。

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共有 16 个 PR 被合并或关闭，以下按主题分组说明：

#### CLI/安装体验
- **PR #104347**（已关闭）feat(cli): support opt-out for passive update checks — 为 CLI 后台被动更新检查增加关闭选项，解决非交互/嵌入式场景下的网络 I/O 与日志噪音问题。

#### Bug 修复
- **PR #104932**（已关闭）fix: safe rollback preserves literal filenames (#103995) — 安全回滚操作现在保留字面文件名，不丢弃用户的真实编辑；检查点大小上限同时覆盖前导空格文件名。
- **PR #104931**（已关闭）fix: API session preflight and unknown delivery errors — API CORS 请求头白名单允许 `X-Hermes-Session-Id` 头；拼写错误的投递目标现在返回错误而非默认本地投递。
- **PR #104926**（已关闭）fix: skill update checks skip unusable local installs (#104291) — skill 更新检查在联系上游源之前先跳过不可用的本地安装。

#### CI/自动化
- **PR #101061**（已关闭）fix(ci): self-heal stale skills index watchdog — 为 skills index 新鲜度看门狗增加自愈能力。此前看门狗只能发现过期索引并开 issue，但无恢复动作；本次修复使 stale 索引在 scheduled builder 失败/被取消后仍能被修复。

整体来看，项目正在沿着 **"修复由压缩、网关多入口导致的会话状态/消息丢失系列回归" + "为自动化基础设施补上自愈能力"** 的方向向前推进。至少三组先前长期悬而未决的 shell hooks 系列 issue（#43823、#61806、#67053）在今日一并关闭，表明该模块已获框架级修复。

## 4. 社区热点

今日讨论热度最高的几个议题反映了社区用户的真实角色分布与诉求：

- **[#66616] skills index is stale**（172 评论，[链接](https://github.com/NousResearch/hermes-agent/issues/66616)）— 虽然是一个自动巡检失败的 issue，但产生了很高的讨论量。索引已过期 29.8h（上限 26h），说明开发者对文档/技能索引的服务质量高度敏感。该问题的 CI 自愈侧已由 PR #101061 修复（今日合并），但当前索引仍处于 degraded 状态，需尽快手动重建。

- **[#88584] Automated Nous integration is blocked**（74 评论，[链接](https://github.com/NousResearch/hermes-agent/issues/88584)）— 定时集成的 merge 冲突持续三周未解决。由于关联到 Enterkey 仓的 workflow，社区贡献者较为关注跨仓协作管道畅通性。本次冲突堆积在 `cron/jobs.py` 一个文件。

- **[#97681] Bot Group Chats should keep working after Desktop closes**（27 评论，[链接](https://github.com/NousResearch/hermes-agent/pull/105079) 对应 fix PR）— 用户希望 Bot 群聊的参与者能各自运行在笔记本、家庭服务器或 VPS 上，不依赖Desktop 保持在线。今天**同时**出现了针对该诉求的 fix PR（#105079），表明维护者正在积极响应该方向的需求。

- **[#58576] web_server event loop stalls up to 51s**（10 评论，👍 1，[链接](https://github.com/NousResearch/hermes-agent/issues/58576)）— Windows 桌面端在重型 agent 工作负载下因 GIL 压力出现事件循环停顿长达 51 秒，桌面 UI 表现为冻结。为 P1 级别性能问题，社区中 Windows 桌面端重度用户的共鸣较强。

## 5. Bug 与稳定性

按严重程度排列，今日较为关键的 bug 如下：

#### P1 级（严重）

| Issue | 概述 | Fix PR |
|---|---|---|
| [#58576](https://github.com/NousResearch/hermes-agent/issues/58576) | web_server 事件循环在重负载下因 GIL 压力停顿至 51s，桌面 UI 假死 | 无 |
| [#71335](https://github.com/NousResearch/hermes-agent/issues/71335) | 多个 agent 进程共享 HERMES_HOME 时并发写坏旋转的 MCP OAuth 授权（Notion），无跨进程锁 | 无 |
| [#104079](https://github.com/NousResearch/hermes-agent/issues/104079) | Desktop Bot Chat 在上下文压缩后每条消息双写 state.db（#860 的变体） | 无 |
| [#98206](https://github.com/NousResearch/hermes-agent/pull/105081) 关联 | 压缩后 skill_view 可返回去重桩而非原始 skill 内容 | 无 |
| [#104691](https://github.com/NousResearch/hermes-agent/issues/104691) | zombie 会话租约锁死会话，报 "already has a live owner"，需手动干预（macOS Desktop v0.21.0） | 无 |

#### P2 级

| Issue | 概述 | Fix PR |
|---|---|---|
| [#68321](https://github.com/NousResearch/hermes-agent/issues/68321) | Desktop 切换会话再切回后所有 assistant 消息消失（用户消息保留、DB 完好） | [PR #105060](https://github.com/NousResearch/hermes-agent/pull/105060)（部分修复，未完全验证） |
| [#104176](https://github.com/NousResearch/hermes-agent/issues/104176)（已关闭） | 继承的 ContextCompressor 在 bypass_cooldown 参数上崩溃 | [PR #105081](https://github.com/NousResearch/hermes-agent/pull/105081)（已提交） |
| [#89401](https://github.com/NousResearch/hermes-agent/issues/89401) | 配额耗尽（429）被误报为 "认证失败" | 无 |
| [#88374](https://github.com/NousResearch/hermes-agent/issues/88374) | 计费估算因缺少定价版本校验低估 2-3 倍 | 无 |

#### 今日关闭的 Bug（已修复/标记重复）
- **shell hooks 系列**：#43823、#61806、#67053、#69825 — 四个 issue 集中关闭，覆盖 CLI/TUI/serve/desktop 各入口点 hooks 不生效问题，均标注为 duplicate 或已修复。
- [#101097](https://github.com/NousResearch/hermes-agent/issues/101097) desktop 生成的 .desktop Exec 行因 venv 符号链接解析到 base 解释器导致 `ModuleNotFoundError: yaml`。
- **今日新提交的 fix PR**：另有 #104960（Discord 审批卡片对错请求）、#105078（主动 requeue 绕过 PR 重生保护）、#105080（cron 陈旧缓存导致 ledger 导入失败）、#104982（工具编辑与重建失败保持会话配置文件）等多条 P2 fix 在今日开出，等待合并。

## 6. 功能请求与路线图信号

今日社区提出的功能需求主要指向**远端/脱机优先的会话架构**以及**用户感知的 UI/UX 提升**，且不少已快速得到 PR 响应：

| Feature 需求 | PR / 状态 |
|---|---|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) Bot Group Chats 应在 Desktop 关闭后继续工作（Bot 可分布在笔记本/服务器/VPS） | [PR #105079](https://github.com/NousResearch/hermes-agent/pull/105079) 已开出 — 当协调群聊的 gateway 离线时，远端参与者仍可被其 owner 停止任务 |
| [#97390](https://github.com/NousResearch/hermes-agent/issues/97390) 按通道对空闲 gateway 会话做后台上下文压缩，避免下一条消息时等待压缩 | 无对应 PR，需社区决策 |
| #105076 模型选择器增加元数据面板（上下文窗口、定价、模态支持与独立 reasoning 徽标） | [PR #105076](https://github.com/NousResearch/hermes-agent/pull/105076)（被标为 duplicate，仍需评估） |
| #105075 桌面端插件作用域与后端重启机制的用户引导改进 | [PR #105075](https://github.com/NousResearch/hermes-agent/pull/105075) 已开出 |
| #104347 CLI 被动更新检查可关闭 | 已合并 |

**路线图信号**：近期版本迭代明显围绕 resolver"群聊分部署拓扑" 与 "gateway/desktop 会话生命周期"展开。结合 #97681 的强烈需求信号与 #105079 的当周快速跟进，**Bot 分布式群聊**大概率会进入近期里程碑。压缩功能虽然持续产出回归，但团队修复速度也较快（#104176 当天即提交对应 PR）。

## 7. 用户反馈摘要

- **多前端共享状态是把双刃剑**：多位用户（如 #71335、#68321）援引官方文档"desktop 不是独立产品"的设计哲学，要求跨前端会话状态一致可靠。但压缩/切换/并发场景连出问题，用户对"共享状态"理念的信任正在被消耗——目前多为 bug 报告语气，尚未出现激烈抱怨。

- **Windows 平台仍是痛点聚集地**：本期涉及 Windows 的 bug 包括本地终端工具孤儿子进程（#69033）、本地 STT 缺 cublas64_12.dll（#103793）、事件循环 GIL 停顿（#58576）。Windows 用户群体在持续暴露较为底层的环境问题。

- **错误信息误导用户排查方向**：#89401 指出配额耗尽（429）被网关错误包装为认证失败推送给用户，用户评论中对此类错误归因表示困惑。这种可观测性缺陷在 cron/gateway 等无人值守场景中尤为危险。

- **对自动化管道的关注**：skill index 看门狗 issue（#66616）虽然由机器人创建，却有 172 条讨论，说明多人在追踪其修复进展。该问题已获 CI 自愈 PR 支持，但当前索引状态仍未恢复，社区在等待手动干预。

- **第三方插件生态开始形成压力**：#104176 和 #105081 显示第三方通过继承 `ContextCompressor` 扩展上下文引擎的开发者因内部 API 变更（`bypass_cooldown` 参数）而崩溃，社区反馈希望核心团队在改变内部签名时考虑兼容性。

## 8. 待处理积压

以下重要 Issue/PR 持续未获解决，值得维护者关注：

| 条目 | 关键信息 | 备注 |
|---|---|---|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 跨仓自动集成冲突（`cron/jobs.py`）持续阻塞 3 周，74 条评论 | 严重阻塞 Enterkey 集成管道，需人工协调 |
| [#58576](https://github.com/NousResearch/hermes-agent/issues/58576)（P1） | web_server 事件循环 GIL 停顿长达 51 秒，桌面 UI 冻结 | 已开放 2 个月余，持续 10+ 条评论，无 assignee |
| [#71335](https://github.com/NousResearch/hermes-agent/issues/71335)（P1） | 并发 agent 进程共享 HERMES_HOME 破坏旋转 MCP OAuth 授权 | 安全边界相关，已开放超 1 个月无对应 PR |
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index 处于 degraded（29.8h 旧，上限 26h），172 条评论 | CI 自愈已合并（PR #101061），但当前索引尚未恢复，需手动触发重建 |
| [#89401](https://github.com/NousResearch/hermes-agent/issues/89401)（P2） | 429 配额耗尽误报为认证失败，误导用户 | 用户可见错误归因质量问题，已开放约 3 周无 action |
| [#88374](https://github.com/NousResearch/hermes-agent/issues/88374)（P2） | 计费估算低估 2-3 倍（无 pricing_version 校验、无峰谷支持） | 涉及用户成本透明性，已开放 3 周无 action |

---

**项目健康度评估**：功能与修复推进节奏活跃，但 P1 bug 的存量化解速度偏慢（会话生命周期类问题反复出现新变体）。好消息是 bug 上报→fix PR 的间隔在缩短（如 #104176 当日即有修复），shell hooks 系列问题已框架性收敛。需留意跨仓自动化管道（#88584）的长期阻塞与 Windows 平台问题的高复发率。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-09-07

## 1. 今日速览

PicoClaw 过去 24 小时活跃度中等：4 条 Issue 更新（3 条活跃、1 条关闭），2 条 PR 更新（1 条待合并、1 条已关闭）。其中一项 QQ Channel 多附件类型支持 PR（#1349）在创建近半年后于昨日关闭，标志着该增强功能完成收尾。两条约 7 天前标记为 stale 的嵌入式设备相关 Issue（#3351、#3350）仍处于开放状态且无修复方案。今日无新版本发布。整体项目处于稳定推进、小步迭代阶段，维护者响应速度尚可，但积压的 stale 问题值得关注。

## 2. 版本发布

无

## 3. 项目进展

**PR #1349 关闭**（[链接](https://github.com/sipeed/picoclaw/pull/1349)）：QQ Channel 通道的多附件类型解析与回复支持已合并/关闭。该 PR 为 Go 端 QQ Channel 实现增加了四项能力：解析表情符号结构、处理接收语音/图片/视频/文件消息、支持回复本地附件（发送前先上传）。该功能覆盖了 QQ 渠道的完整多媒体交互链路，属功能型 enhancement。此功能从 3 月提出到昨日完成落地，周期较长（约 6 个月），但丰富了项目的多平台适配矩阵。

另一条 PR #3348（捷克语界面标签补齐）已停留约 9 天待合并，贡献量较小但对 i18n 完整性有意义。

## 4. 社区热点

今日讨论最集中的为 **Issue #675**（[链接](https://github.com/sipeed/picoclaw/issues/675)，已关闭）——请求增加更多 LLM Provider 支持。该 Issue 创建已逾半年、获得 7 条评论，昨日正式关闭。结合 #3369（OpenCode Go 会话头支持），社区对"接入更多上层应用/provider"的需求持续存在，且此方向正在持续落地——建议追踪关闭原因是否为功能已实现或转回路线图。

另一讨论点出现在 **Issue #3351**（[链接](https://github.com/sipeed/picoclaw/issues/3351)，自动压缩物理删除 session 记录）：用户不仅报障，还主动完成了源码定位（指出 `pkg/memory/jsonl.go` 的 `JSONLStore` 非纯 append-only），显示出用户具备较强的技术深度，此类 Issue 往往意味着真实使用中的存档可靠性痛点。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|---------|-------|------|---------|
| 🔴 高 | [#3351](https://github.com/sipeed/picoclaw/issues/3351)（已标记 stale） | 自动压缩物理删除 session 原始对话记录，失忆后历史无法找回。用户确认 `.jsonl` 文件本身被重写删减，已被源码定位至 `JSONLStore` 实现 | 无 fix PR，已 stale，建议紧急确认 |
| 🟡 中 | [#3350](https://github.com/sipeed/picoclaw/issues/3350)（已标记 stale） | 嵌入式/低性能设备（RV1106、RISC-V）上 Web UI 输入框打字严重延迟，聊天记录累积后每个字符都有明显延迟 | 无 fix PR，已 stale，无进展 |

**说明**：两条现存 Bug 均已在 stale 状态停留约 7 天，均无对应修复 PR。其中 #3351 涉及数据持久化安全性，属于高危稳定性问题，建议优先排期。

## 6. 功能请求与路线图信号

**新增需求：**
- **Issue #3369**（[链接](https://github.com/sipeed/picoclaw/issues/3369)，创建于昨日，尚无评论）——请求 OpenCode Go 请求中携带 `x-opencode-session` 头（仅针对 OpenCode Go，不适用于标准 OpenCode Zen）。PicoClaw 已追踪 session ID，接入成本低。该需求属上层应用协议适配，目前无关联 PR，有可能被快速纳入。

**历史需求存在社区持续呼声：**
- **Issue #675**（[链接](https://github.com/sipeed/picoclaw/issues/675)，昨日关闭）——更多 LLM Provider 支持。该需求获 7 评论、半年生命周期，昨日关闭，建议在 Release Note 或 Roadmap 中回应该需求的去向，避免社区困惑。

**趋势信号：** 结合 #3369 与 #675，项目正朝"更广泛的 LLM 生态接入"方向演进。多 Provider 支持（#675）与具体协议适配（#3369）是同一路线的不同层面。

## 7. 用户反馈摘要

| 来源 | 用户 | 核心诉求/痛点 | 使用场景 | 评价性质 |
|------|------|--------------|---------|---------|
| #3351 | chentianxiong123 | 长期对话下历史记录被自动压缩物理删除，失忆后"连历史都找不回来"；用户查看 `.jsonl` 文件确认内容真的减少（非显示问题），并已定位至 `pkg/memory/jsonl.go` | 长对话重度用户，关注存档数据可靠性与"真正的持久化" | 不满（数据安全隐患） |
| #3350 | chentianxiong123 | 低性能嵌入式设备（RV1106 等 RISC-V 板子）上 Web UI 输入延时显著 | 嵌入式/IoT 场景浏览器访问 Web UI | 不满（性能缺陷） |
| #3369 | w33ble | 需要在发往 OpenCode Go 的请求中附带 `x-opencode-session` 会话头 | 与 OpenCode Go 集成 | 中性（功能请求） |
| #675 | sheying2013 等 | 接入更多 LLM Provider | 多模型切换/避开单一模型绑定 | 中性（功能请求，热度较高） |

**表现较好的部分：** 社区用户愿意深入源码定位问题（#3351），说明项目代码可读性和可调试性好；i18n 方面有社区贡献者主动补齐小语种翻译（PR #3348）。

**痛点集中区：** 存档可靠性（物理删除）、低端设备 Web UI 响应性能。前者影响信任、后者影响特定硬件的可用性。

## 8. 待处理积压

| 类型 | 编号 | 说明 | 等待时长 | 建议 |
|------|------|------|---------|------|
| Issue | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | 数据持久化安全性问题（自动压缩物理删档），用户完成根因分析等待官方确认 | 8 天，已标 stale | 高优处理。涉及数据丢失属严重缺陷，建议维护者回应用户的源码定位，说明设计意图（是"feature"还是 bug？）并提供恢复方案 |
| Issue | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | 嵌入式设备 Web UI 打字卡顿 | 8 天，已标 stale | 中优处理。若项目定位包含轻量/嵌入式部署，此问题直接影响核心交互体验 |
| PR | [#3348](https://github.com/sipeed/picoclaw/pull/3348) | 捷克语代码换行标签 i18n 补齐 | 9 天待合并 | 限期 review 或打回。长时间搁置小额 PR 会挫伤社区贡献积极性 |

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-07

## 1. 今日速览

NanoClaw 项目今日活跃度较高。过去 24 小时内新增/活跃 Issue 2 条、关闭 1 条；PR 更新 28 条，其中 21 条已合并/关闭、7 条待合并。值得关注的是，今天有两条新 Issue（#3735、#3732）直指会话归档与转录轮转机制的存储管理缺陷，属于长期运行场景下的稳定性隐患。PR 侧呈现明显的收尾态势：多条 8 月下旬开启的 core-team 长期分支（durable host 系列、approvals 重启恢复等）于今日集中合并，表明"持久化主机"这一架构升级线路已整体落地。社区侧，gavrielc 主导的 core-team 工作流（CI 门禁、PR 标签修复）持续高频推进，项目工程化成熟度在同步提升。整体判断：**项目正处在一轮架构性合并的收尾期，同时暴露了存储治理方面的真实痛点，值得重点关注。**

---

## 2. 版本发布

过去 24 小时内无新版本发布。最近一次发布为 v2.3.0（2026-08-24，据 Issue #3730 提及，main 分支已领先该版本 119 个提交）。

---

## 3. 项目进展

今日合并/关闭的 21 条 PR 中，最核心的进展是 **"durable host"（持久化主机）系列的完整落地**。以 gavrielc 为主的 core-team 成员在今日集中合并了多条长期分支：

- **[#3653] rollup: the durable host**（8/29 开启，今日合并）— 整合 #3508–#3528 全链路，包含协调状态持久化、唤醒 seam、reconcile 队列、重启后可靠投递、claim fencing。这条 rollup PR 的合并标志着这场跨越多条堆叠分支的架构升级正式完成。
- **[#3517] feat(db): shadow-write coordination state**（8/25 开启，今日合并）— 所有易失协调状态双写至持久化行，为 #3653 的前置依赖。
- **[#3518] fix(approvals): survive restarts**（8/25 开启，今日合并）— 审批模块不再直接依赖 gateway SDK，且审批状态不再随进程退出而丢失。

此外，今日还合并了多条质量与工程化修复（均开启于 8/29，属同一批积压收尾）：

- [#3661] 容器构建中 Bun 安装失败时改为重试而非直接失败
- [#3659] 统一两处 `.env` 解析器对引号值的处理差异
- [#3662] 预任务脚本超时时输出明确提示（"timed out"）而非笼统的 "Command failed"
- [#3663] 示例与 fixtures 中的占位名称替换为中性的非维护者姓名
- [#3664] 新增 `NANOCLAW_DEFAULT_MODEL` 与 `NANOCLAW_FAST_MODE` 两个安装级配置项
- [#3400] Slack 回复送达后正确结束 typing 状态（8/20 开启，今日合并）
- [#3736] CI 新增 `gate` 聚合任务，确保依赖任务失败时正确报错而非被跳过

**综合判断**：今日的合并集中在两条主线上——① durable-host 架构升级的收尾，直接提升系统在重启、崩溃场景下的状态可靠性与审批连续性；② 一批 8 月底开启的工程化修复与 DX 改进整批落地。项目在"可靠性"维度上今日有明显的前进。

---

## 4. 社区热点

今日外部贡献者 TO-maschenborn 连续提交的两条 Issue 构成当前讨论的核心：

- **[Issue #3735] conversations/ archives grow without bound — no retention, no cap**（2026-09-07 创建，1 条评论）— 指出 `archiveTranscriptFile()` 在每次 compaction 时都会向 `groups/<folder>/conversations/` 写入 markdown 归档文件，但系统从不清理这些文件，没有任何 retention、轮转或容量上限策略。这属于长期运行后**磁盘无限增长**的运维隐患。
- **[Issue #3732] Transcript rotation never runs for tasks that keep their container alive**（2026-09-07 创建）— 指出 `maybeRotateContinuation()` 仅在 `runPollLoop()` 中调用，即**每个容器启动仅执行一次**。对于轮询间隔短于宿主 30 分钟空闲上限的定时任务，容器持续存活会导致转录轮转永远不触发。

两条 Issue 均出自同一作者、同一功能域（转录/归档的生命周期管理），形成互补：**#3735 指出"写了不删"，#3732 指出"该转的不转"**。背后诉求明确——NanoClaw 的会话归档/转录机制在长生命周期部署场景下缺少完善的存储治理策略。

PR 侧评论数为 undefined（数据未提供），从类型与标签来看，Koshkoshinsk 的 a2a 系列 PR（#3718、#3719）和 gavrielc 的社区集成 PR（#3729）是当前待合并队列中体量最大、跨域最广的改动，值得关注。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| **高（存储增长）** | [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | 会话归档目录无 retention、无上限，持续增长 | 新开，暂无 fix PR |
| **高（逻辑缺陷）** | [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) | 转录轮转仅在容器启动时执行一次，长活容器中永不触发 | 新开，暂无 fix PR |
| **中（集成缺陷）** | [#3730](https://github.com/nanocoai/nanoclaw/issues/3730)（已关闭） | `session_mode: "shared"` 配置下 Slack 仍为每条顶层 DM 创建新 per-thread 会话。标签含 `triage/unresolved`，关闭时未解决 | 已关闭，无 fix PR |
| **低（CI 标签）** | [#3734](https://github.com/nanocoai/nanoclaw/pull/3734)（开放） | 多条 PR 标签工作流互相覆盖分类、堆积重复标签（如 #3733 上 area 标签覆盖了 kind/delivery 标签） | 已有 fix PR |
| **低（已修复）** | [#3662](https://github.com/nanocoai/nanoclaw/pull/3662) | 预任务脚本超时报错信息误导（显示 "Command failed" 而非超时原因） | 已合并 |
| **低（已修复）** | [#3659](https://github.com/nanocoai/nanoclaw/pull/3659) | 两处 `.env` 解析器对引号值处理不一致 | 已合并 |
| **低（已修复）** | [#3661](https://github.com/nanocoai/nanoclaw/pull/3661) | Bun 安装偶发失败导致镜像构建整体失败 | 已合并 |

**关注点**：#3735 与 #3732 均无对应 fix PR，且 #3732 指出的问题意味着**在长时间运行的部署中，转录轮转可能从未执行过**——这与 #3735 描述的归档无限增长叠加后，存储问题的实际严重程度可能高于表面。另注意 #3730 虽已关闭但标记 `triage/unresolved`，表明该 Slack 共享会话模式的 bug 尚未真正解决，有待跟进。

---

## 6. 功能请求与路线图信号

今日无全新功能请求类 Issue。从 PR 侧可提取以下路线图信号：

**可能进入下一版本的新能力：**

- **[PR #3729] 浏览器内完成宿主与社区 cell 的连接及 perks 管理**（开放中）— 将 Echo 和 Slack 的配置流程迁移至浏览器门户，通过 WorkOS 统一登录。若合并，CLI 初始配置体验将大幅简化，属于 onboarding 体验的重要升级。
- **[PR #3733] `/add-opencode` 改为自包含 provider 技能**（开放中）— 修复技能从历史 `providers` 分支拉取实现的问题，改为随主分支直接内置。对使用 opencode 的用户属于可靠性修复。
- **[PR #3664] 安装级默认模型与快速服务层配置**（已合并）— `NANOCLAW_DEFAULT_MODEL` 和 `NANOCLAW_FAST_MODE` 两个新配置项已落地，下一版本将支持在容器配置物化时统一注入默认模型。

**跨 PR 的模式观察**：a2a（agent-to-agent）通信可靠性是当前最活跃的功能域——Koshkoshinsk 的 #3718（发送者身份验证与命令边界保持）和 #3719（向源端报告通信失败原因）均在开放中，加上 #3729 的社区连接，**"多智能体间可靠通信 + 宿主与社区平台的连接体验"** 是当前开发主线之一。

---

## 7. 用户反馈摘要

今日用户反馈全部来自 TO-maschenborn 的两条 Issue，反映的是**长时间运行部署场景下真实运维痛点**：

- **痛点 1：磁盘无限增长**（#3735）— 用户明确指出"archiveTranscriptFile() 在每次 compaction 时都会写入归档文件，没有任何机制清理它们"，该目录"无 retention、无轮转、无上限"。这是典型的**生产环境长期运行后才暴露的存储治理缺失**。
- **痛点 2：轮转逻辑存在盲区**（#3732）— 用户精准定位了代码路径：`maybeRotateContinuation()` 仅在 `runPollLoop()` 中调用，等于"每个容器启动只跑一次"。对于轮询间隔短于宿主 30 分钟空闲上限的任务，容器长期存活导致"transcript rotation never runs"。这体现了用户对代码结构的深入理解，说明**用户已经是深度使用者且具备较高的技术排查能力**。

整体反馈指向一个共同诉求：**NanoClaw 需要为会话数据的全生命周期（写入 → 轮转 → 归档 → 清理）建立系统性的存储管理策略**。两位 Issue 作者均为外部贡献者（非 core-team 成员），其反馈值得维护团队重视。

---

## 8. 待处理积压

以下为需要维护者关注但今日无更新的开放 Issue/PR：

| 项目 | 说明 | 今日状态 |
|---|---|---|
| **[PR #3719](https://github.com/nanocoai/nanoclaw/pull/3719)** — fix(a2a): report communication failures to the source | 向源端报告 a2a 通信失败（阻塞、审批等待、拒绝、永久投递失败等），9/4 创建 | 开放 3 天，无新评论 |
| **[PR #3718](https://github.com/nanocoai/nanoclaw/pull/3718)** — fix(a2a): preserve verified sender identity and command boundaries | 确保 a2a 消息携带真实发送者身份（含单向边场景），9/4 创建 | 开放 3 天，无新评论 |
| **[PR #3729](https://github.com/nanocoai/nanoclaw/pull/3729)** — Connect host to community cell; manage perks in browser | 将 Echo/Slack 配置迁移至浏览器门户 + WorkOS 统一登录，9/6 创建 | 开放 1 天 |
| **[PR #3733](https://github.com/nanocoai/nanoclaw/pull/3733)** — feat(add-opencode): self-contained provider skill | 9/7 创建 | 新开，待 review |
| **[PR #3734](https://github.com/nanocoai/nanoclaw/pull/3734)** — fix(ci): reconcile PR labels without duplicates | 9/7 创建 | 新开，待 review |
| **[Issue #3730](https://github.com/nanocoai/nanoclaw/issues/3730)**（已关闭，`triage/unresolved`） | Slack `session_mode: "shared"` 下仍为每条 DM 新建 per-thread 会话，问题未实际解决即关闭 | 建议重新开启或转移至 backlog |

**提醒维护者关注**：
1. **#3735 与 #3732 为新开且无响应**，涉及存储无限增长这一高影响问题，建议尽快 triage 并确认是否为已知问题。若确认，需评估是否纳入近期修复计划；同时可考虑与今日 #3736 加入的 CI 门禁相结合，补充存储上限的回归测试。
2. **a2a 两条 PR（#3718、#3719）已开放 3 天**，涉及通信可靠性与安全（发送者身份验证），建议 core-team 尽快安排 review。
3. **#3730 以 `triage/unresolved` 状态关闭**，建议明确后续跟进路径（重新开启或转入 backlog），避免用户问题悬置。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-07

## 1. 今日速览

NullClaw 项目今日整体处于**低活跃度**状态：过去24小时内无 Issue 更新，无新版本发布，仅新增/更新 1 条 PR，且该 PR 为 Dependabot 自动提交的依赖升级请求。该 PR（#956）创建于 2026-06-15，至今已搁置近三个月仍未合并，反映出维护者对自动化依赖更新的响应存在较大延迟，值得关注。整体来看，项目社区讨论与开发推进在今日处于停滞状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，无实质性的代码变更合入主干。唯一活跃的 PR #956 为 CI 依赖升级（Docker 镜像 alpine 3.23→3.24），由 Dependabot 自动发起，仍处于等待审查/合并阶段。该项目过去三个月在该依赖升级事项上未有推进。

## 4. 社区热点

今日唯一的活跃项为 PR #956：

- **[#956] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group** — [链接](https://github.com/nullclaw/nullclaw/pull/956)
  - 作者：dependabot[bot] | 创建于 2026-06-15 | 最后更新于 2026-09-07
  - **状态分析**：该 PR 自创建至今已近三个月未获合并，也无任何评论。虽然这是自动化依赖更新（Docker 基础镜像升级），但其长期搁置反映出维护团队对安全/依赖维护的响应节奏较慢，可能是由于项目处于维护低谷期或维护者精力有限。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题。

> 注：虽然 PR #956 涉及 Docker 基础镜像 alpine 版本升级（3.23→3.24），此类更新通常包含安全修复，但目前未合并，意味着项目构建环境仍停留在潜在包含已知漏洞的旧基础镜像之上。此风险级别为中低，取决于 alpine 3.23→3.24 之间修复的具体 CVE。

## 6. 功能请求与路线图信号

今日无新功能请求提交。从待处理的 PR #956 来看，维护团队在容器化部署和依赖管理方面的自动化流程已建立（使用了 grouped dependabot 更新策略），但执行层面存在滞后。暂无明确信号表明下一版本计划纳入的功能。

## 7. 用户反馈摘要

今日无 Issue 评论或用户反馈产生。项目社区互动处于静默状态。

## 8. 待处理积压

以下为需维护者重点关注的历史遗留项：

- **[#956] ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group** — [链接](https://github.com/nullclaw/nullclaw/pull/956)
  - 等待时间：**约 84 天**（2026-06-15 创建至今未处理）
  - **提醒**：该 PR 虽无功能影响，但涉及 CI/容器基础镜像版本，长期搁置可能引入安全漏洞。建议维护者尽快审查并合并，或关闭并说明原因，避免积压进一步扩大。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-07

## 1. 今日速览

过去 24 小时 IronClaw 无新 Issue 与版本发布，**社区讨论热度偏低**，但开发侧提交活跃，共产生 13 条 PR 更新（10 条待合并）。目前全部 PR 集中在 **WebUI 命令交互体验优化**（PR #8068–#8071）、**助手共享频道断连处理**（PR #8076）、**MCP 响应泄漏诊断分类**（PR #8077）以及大量依赖升级。过去 24 小时有 3 个 PR 被合并/关闭，其中 PR #7020 将 `tokio-tungstenite` 升级至 0.30.0（历时 35 天），值得关注。总体来看，项目处于**稳定迭代期**，无高风险变更入库，发布节奏趋缓。

**活跃度评估**：★★★☆☆（Issue 讨论几乎为零，依赖机器人 PR 占比过高，社区参与信号偏弱，但核心维护者仍在持续推进 WebUI 体验打磨。）

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 项目进展

过去 24 小时内合并/关闭的 PR 共 3 个，均为依赖升级，无核心代码改动合并：

- **[PR #7020] [CLOSED]** — `tokio-tungstenite` 从 0.29.0 升级至 0.30.0。作为 WebSocket 底层依赖，此大版本升级前后横跨 35 天才完成合并，建议关注是否有兼容性处理逻辑（如连接关闭码行为变化等）。 → https://github.com/nearai/ironclaw/pull/7020
- **[PR #8049] [CLOSED]** — everything-else 组合依赖批量升级（19 个包，涉及 uuid、base64 等），虽被关闭但具体原因未标注，请留意是否有冲突问题。→ https://github.com/nearai/ironclaw/pull/8049
- **[PR #7835] [CLOSED]** — GitHub Actions 组合升级（5 个 action 更新），CI 底层维护持续推进。→ https://github.com/nearai/ironclaw/pull/7835

> ⚠️ 注意：PR #8049 与 PR #8080 的升级内容高度相似（皆为 everything-else 组，uuid 同为 1.24.0 → 1.26.0），若 #8049 因冲突被关闭而 #8080 重新打开，建议尽快确认冲突原因。

**里程碑方向判断**：当前积压的 10 个待合并 PR 中有 4 个来自同一作者（italic-jinxin）的 **WebUI 命令系统体验优化系列**（#8068–#8071），涉及卡片高度保持、斜杠命令元数据对齐、可关闭的结果卡片、菜单滚动可见性。这表明项目下一阶段可能重点打磨**命令交互的视觉稳定性与可访问性**。

## 4. 社区热点

过去 24 小时所有 PR 均无评论，无激烈讨论。**最值得关注**的 PR 如下：

- **[PR #8069] fix(webui): add dismiss actions to command result cards**（核心作者 italic-jinxin，M 尺寸，低风险）
  为成功、命令列表、回退与拒绝四类命令结果卡片加入可访问的关闭按钮，回调逻辑贯穿 `Chat → MessageList → MessageBubble`。这是 UX 细节打磨，值得跟进其可访问性标注实现。→ https://github.com/nearai/ironclaw/pull/8069
- **[PR #8076] fix(assistant): distinguish disconnected shared channels**（作者 be-student）
  区分"配对用户已断连的共享频道"与"未配对账号"两类场景，并在用户消息与机器人指令两个方向提供针对性引导提示。这属于助手共享功能的关键体验修复，涉及链路较深。→ https://github.com/nearai/ironclaw/pull/8076
- **[PR #8077] fix(mcp): classify response leak diagnostics**（作者 linhongyu510）
  修复 MCP 出口诊断的分类问题：集中 `response_leak_blocked` 哨兵值，使主机层面的泄漏拦截保持安全的同时为 MCP 层保留独立可见的错误原因。该 PR 同时关闭 Issue #8009（35 天前遗留问题）。→ https://github.com/nearai/ironclaw/pull/8077

## 5. Bug 与稳定性

无新的 Bug 或崩溃报告，当前稳定性良好。值得关注的修复与潜在稳定性信号：

- **[PR #8077]** — 修复 MCP 响应泄漏诊断中哨兵值管理分散的问题，将主机层面泄漏封禁与 MCP 侧可见的拦截原因解耦。对沙箱安全模型有积极意义，建议优先审阅。 → https://github.com/nearai/ironclaw/pull/8077
- **[PR #8076]** — 修复了已配对频道断连被误判为未配对账号的缺陷（产品层面可感知的误导性错误反馈）。 → https://github.com/nearai/ironclaw/pull/8076
- **[PR #8071]** — 防止结构化命令结果卡片在会话 Flex 列中被异常压缩变形（WebUI 展示层 Bug） → https://github.com/nearai/ironclaw/pull/8071

## 6. 功能请求与路线图信号

- **命令结果卡片交互增强**：PR #8069 为命令卡片增加"关闭/移除"操作，意味着临时命令结果将可被主动清除，这是会话信息架构上的一个积极改动。后续社区可能衍生"一键清空命令噪音"的诉求（需观察用户反馈）。→ https://github.com/nearai/ironclaw/pull/8069
- **命令菜单可访问性/可用性提升**：PR #8068（滚动时保持当前命令可见）、#8070（栅格化对齐元数据）均提交了键盘导航回归测试，表明项目已局部引入可访问性测试体系，后续或将在更多交互组件中推广。→ https://github.com/nearai/ironclaw/pull/8068
- **共享频道错误引导体验**：PR #8076 表明共享频道（shared channel）已是一等公民功能，正在补齐其断连场景的分流引导能力。这可能是后续 WebUI PWA 或移动端消息推送方向的前置铺垫。

## 7. 用户反馈摘要

过去 24 小时内无 Issue 或 PR 评论产生，无直接用户反馈可提炼。此状态持续一天以上时，建议维护者在 Twitter/X、Discord 等渠道主动引导社区提供使用反馈。

## 8. 待处理积压

以下为本日仍处于开放状态的长期未决依赖升级 PR（仓库活跃度放缓背景下提醒关注，避免依赖滞后积累）：

- **[PR #7834]** — wasm 组依赖升级（wasmtime、wasmtime-wasi、wit-component 等 4 个子包），创建于 08-23，已开放 **15 天**，风险等级 **medium**，建议近期优先合入，否则 WASM 运行时可能被遗留过多旧版本。→ https://github.com/nearai/ironclaw/pull/7834
- **[PR #8080]** — everything-else 组合 21 个包批量大升级，含 uuid、base64、tower-http 等，风险虽为依赖组自动标记（无风险评级输出），但此类大跨度批量升级建议人工审阅 changelog 后合并。→ https://github.com/nearai/ironclaw/pull/8080
- **[PR #8078]** — tokio-ecosystem 组内 tower-http 与 tokio-tungstenite 两个包的小版本更新，间隔短、优先级低。→ https://github.com/nearai/ironclaw/pull/8078

---

**项目健康度总评**：核心开发主线上有明确改进方向（WebUI 命令系统体验打磨），自动化依赖维护持续运转，但社区 Issues 活跃度趋零是当前最值得警惕的信号。建议在下一轮 release notes 中加强用户引导，激活反馈渠道。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-09-07

## 1. 今日速览

今日项目活跃度较高，主仓库共产生 8 条 PR 动态，其中 5 条已合并/关闭（#2623、#2621、#2622、#2617、#2619），全部集中在 9 月 7 日当天创建并快速合入，显示协作节奏紧凑。另有 3 条 PR 待合并，其中 2 条为今日新开（#2620 Windows 安装程序字体修复、#2623 任务分组排序功能），1 条为依赖机器人自动化更新（#1277）。过去 24 小时无新 Issue 开启或关闭，Issues 侧较平静，社区问题反馈暂无明显增量。无新版本发布。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日合入的 PR 覆盖 UI 功能、内置浏览器、安装器与测试基建等多个方向，整体推进节奏良好：

- **[#2623] feat(library): 支持任务优先排序与网格分组折叠**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2623)）— 已合并。核心改动：按任务最近更新时间组织本地产物统一分组与分页排序；新增任务组和组内文件独立分页，支持预览、展开、续载与收起。同时补强会话变更通知、刷新重试、滚动位置恢复逻辑；严格化协议版本与游标校验以防过期请求覆盖当前数据；优化折叠控件样式与无障碍支持并补充中英文文案；修复 macOS 开发模式下网关显示多余 Dock 图标问题。附带回归测试与设计文档。
- **[#2621] fix(browser): resolve in-app element refs and preserve tool error details**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2621)）— 已合并。修复 OpenClaw `scrollIntoView` 动作中元素引用被当作字符串处理导致的 TypeError（仅显示为 `Uncaught`），并保留工具错误细节。
- **[#2622] fix(openclaw): 修复网关子进程的 Node 模式继承**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2622)）— 已合并。统一改为 `spawn` 以 Node 模式启动网关，确保工作进程继承运行环境；补丁应用失败时终止 postinstall 流程；补充启动参数、环境继承及异常退出测试。
- **[#2617] fix(browser): improve in-app login and tab controls**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2617)）— 已合并。登录保存反馈改为可关闭、导航/切换标签时自动清除；保存新增登录条目后保持凭据设置面板开启；用可滚动标签栏替代页面下拉框，支持相邻标签切换。
- **[#2619] test: fix Windows path portability in installer and thumbnail tests**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2619)）— 已合并。修复 main 合入 OpenClaw v2026.8.1 升级分支后 Windows 验收发现的 4 个测试失败（3 个安装器路径 + 1 个缩略图队列优先级用例），仅涉及测试文件，无生产代码变更。

## 4. 社区热点

今日无评论数或反应数显著偏高、讨论尤为活跃的 Issue/PR。所有新增 PR 评论数据均未提供，热度的量化评估受限。从 PR 摘要来看，[#2623](https://github.com/netease-youdao/LobsterAI/pull/2623)（任务分组折叠 + 分页排序）与 [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617)（内置浏览器登录与标签控制）涉及面较大，属值得后续跟进观察的重点变更。需求侧隐含信号：用户对"接入 OpenClaw 后任务与文件的组织与浏览体验"关注上升，相关整合是当前社区主要诉求方向。

## 5. Bug 与稳定性

今日未新开 Bug 类 Issue。通过 PR 修复确认的既有问题如下（按严重程度排序）：

- **[中高] 内置浏览器元素引用被当字符串处理** — OpenClaw 的 `scrollIntoView` 操作传入的 DOM 快照引用未按元素解析，导致 TypeError 且被吞为 `Uncaught`，阻断工具执行。已有修复合入：[#2621](https://github.com/netease-youdao/LobsterAI/pull/2621)。
- **[中] macOS 开发模式下网关显示额外 Dock 图标** — 视觉干扰，随 [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) 一并修复。
- **[中] OpenClaw 心跳自动创建 `[OpenClaw]` Cowork 会话** — 任务记录被心跳事件污染，PR [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) 提供修复但已标记 stale，仍待合并（详见第 8 节）。
- **[低] Windows 测试不通过** — 4 个测试失败源于 macOS 路径硬编码与 Windows 不兼容。已有修复合入：[#2619](https://github.com/netease-youdao/LobsterAI/pull/2619)。
- **[低] NSIS 安装向导 CJK 字体锯齿** — 位图字体（SimSun/PMingLiU 等）在 DPI 感知安装程序中显示模糊。修复 PR [#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) 目前 OPEN 待合入，见第 6 节。

## 6. 功能请求与路线图信号

今日无新功能请求类 Issue 提交，路线图信号主要来自已提交的 PR：

- **任务产物组织浏览优化（可能纳入下一版本）**：[#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) 已合入任务按最近更新时间分组、分组与组内独立分页、预览/收起/续载等能力，本地产物浏览交互得到实质增强。
- **内置浏览器易用性增强（可能纳入下一版本）**：[#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) 已改进登录反馈与标签切换交互。
- **Windows 安装体验改进（待审）**：[#2620](https://github.com/netease-youdao/LobsterAI/pull/2620)（[链接](https://github.com/netease-youdao/LobsterAI/pull/2620)）用 Windows 10+ 系统 UI 字体覆盖 NSIS CJK 位图字体，解决安装向导文字锯齿。该改动引入 Windows 平台新设置逻辑，需注意 `!if` 条件块的跨平台回归验证。属于小而必要的平台质感修复，预计有合理概率进入下一版本。

## 7. 用户反馈摘要

过去 24 小时 Issues 无新增评论，可提炼的真实用户信号有限。来自 PR 描述与问题背景的间接信息包括：

- **升级分支适配投入**：#2619 反映 main 分支合入 OpenClaw v2026.8.1 升级分支后在 Windows 验收中出现 4 个失败用例，提示 OpenClaw 升级后存在平台相关的遗留问题，项目正在经历升级回归消化阶段。
- **[OpenClaw] 会话噪音**（来自 #1067 描述）：用户或开发者观察到 OpenClaw 心跳任务会自动在任务记录中创建 `[OpenClaw]` 标题的 Cowork 会话，造成任务列表被无关会话干扰，属影响日常使用体验的明显痛点。该问题早在 3 月 30 日提出修复 PR，至今仍未合并（详见下文积压）。
- **内置浏览器登录流程细节**（来自 #2617 改动方向）：保存登录后的反馈此前不可关闭且导航不清除、保存新增凭据后设置面板被关闭，反映出这类交互细节对实际使用体验有明显影响，社区正逐一打磨。

## 8. 待处理积压

以下为长期未得到响应/合并、需要维护者关注的重要 PR：

- **[#1067] fix(openclaw): stop auto-creating [OpenClaw] session for main agent heartbeat**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1067)）— 作者：leedalei，2026-03-30 创建，目前标记为 stale。修复 OpenClaw 心跳轮询误自动创建 `[OpenClaw]` Cowork 会话的任务写入问题，仅需移除 `openclawRuntimeAdapter.ts` 中 3 处方法调用，不删除方法定义，保留 polling 过滤逻辑，改动面小。已悬置逾 5 个月，建议维护者评估合入优先级。

- **[#1277] chore(deps-dev): bump the electron group across 1 directory with 2 updates**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1277)）— 作者：dependabot[bot]，2026-04-02 创建，已持续约 5 个月仍未合并。Electron 与 electron-builder 的日常依赖升级长期挂起，Electron 主版本的安全与稳定性补丁易累积滞后，建议手动安排合入并跑通 Windows/macOS 双端构建验收。

- **[#2620] fix(installer): use modern CJK UI fonts in NSIS dialogs**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2620)）— 作者：fisherdaddy，今日新开即待合并。如前所述，修复 CJK 安装向导字体锯齿，改动已带 `!if` 防护，建议尽快推进审查合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

```markdown
# Moltis 项目动态日报 — 2026-09-07

## 1. 今日速览
今日项目整体活跃度较低：过去 24 小时无新 Issue、无版本发布、也无 PR 被合并或关闭。当前有 **2 个待合并 PR** 处于停滞状态，分别针对 cron 时间解析边界与 TLS/ALPN 协议协商问题，均属于稳定性与兼容性修复，尚未获得维护者审核。项目仓库处于"低输入、低输出"的平稳期，无紧急回归或用户投诉信号。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日无 PR 合并或关闭，仓库主分支无新增提交。当前 2 个待合并 PR（见下）尚未落地，项目功能面无可见推进。

## 4. 社区热点
今日无新增评论或高互动讨论。当前最值得关注的讨论集中在两个待审核 PR 上（均为作者自述，无社区互动数据）：

- [PR #1262: fix(cron): treat active_hours end="24:00" as end-of-day](https://github.com/moltis-org/moltis/pull/1262) — 修复 `is_within_active_hours` 对默认活跃时段（`08:00`–`24:00`）解析失败的问题。背后诉求：文档化默认配置在实际运行中报错，属于**默认配置不可用的正确性问题**。
- [PR #1261: fix(tls): restrict ALPN to HTTP/1.1](https://github.com/moltis-org/moltis/pull/1261) — 在支持 RFC 8441 WebSocket over TLS 前，仅通告 HTTP/1.1 协议；同时修复关联 Issue #245。背后诉求：TLS 握手阶段 ALPN 协商与现有实现能力不匹配的兼容性问题。

## 5. Bug 与稳定性
今日无新报告的 Bug。以下为关联的存量修复（未合并）：

- **中严重度 — cron 活跃时段默认配置解析失败**（关联 [PR #1262](https://github.com/moltis-org/moltis/pull/1262)）：`chrono` 的 `%H` 格式不支持 `24:00`，导致文档默认配置（`end="24:00"`）被判定为非法并触发 fail-open 路径。已有修复 PR，等待合并。
- **中严重度 — TLS ALPN 通告超出实际能力**（关联 [PR #1261](https://github.com/moltis-org/moltis/pull/1261)，Fixes #245）：服务器通告的 ALPN 列表包含当前未实现的协议能力，可能导致客户端协商失败或行为错误。已有修复 PR，等待合并。

## 6. 功能请求与路线图信号
今日无新功能请求 Issue 或路线图讨论。远期信号：PR #1261 中明确将 **RFC 8441（WebSocket over HTTP/2）** 标注为待支持方向，当前仅保留 HTTP/1.1，可作为 HTTP/2 全面支持路线图中的一个中间约束参考。

## 7. 用户反馈摘要
今日无新 Issue 评论可供提炼。从 PR 描述可得有限用户反馈：
- 默认 cron 配置（`08:00`–`24:00`）在文档标注的合法取值下直接解析失败，暴露了边界值处理与文档契约不一致的问题（[PR #1262](https://github.com/moltis-org/moltis/pull/1262)）。
- 现有 TLS 行为与实际支持的协议版本不匹配，存在客户端兼容性隐患（[PR #1261](https://github.com/moltis-org/moltis/pull/1261)），用户侧表现为握手阶段的潜在失败。

## 8. 待处理积压
以下 PR 已超过 24 小时未获维护者响应，建议优先关注：

- [PR #1261 — fix(tls): restrict ALPN to HTTP/1.1](https://github.com/moltis-org/moltis/pull/1261) — 创建于 2026-09-06，已跨日未审核，且关联未关闭 Issue #245。
- [PR #1262 — fix(cron): treat active_hours end="24:00" as end-of-day](https://github.com/moltis-org/moltis/pull/1262) — 创建于 2026-09-07，目前无任何评论或审核动作，涉及默认配置正确性问题，建议尽快处理。
```

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-09-07

## 今日速览

过去24小时内 CoPaw 项目保持高度活跃：共产生 39 条 Issue 更新（24 条新开/活跃、15 条已关闭）与 47 条 PR 更新（29 条待合并、18 条已合并/关闭），但无新版本发布。值得关注的是，社区有 3 位首次贡献者（first-time contributor）提交了 PR，涵盖计算机使用辅助进程重启、OpenViking 长期记忆后端接入及混合 RTL/LTR 文本渲染修复，说明项目的外部吸引力和贡献者生态正在扩展。同时，今日新增报告了多个涉及 v2.2.0 的性能与可靠性问题（如 409 报错、上下文丢失、流式超时不可配置等），且大量历史 issue 在今日被关闭，表明维护者正在推进积压清理工作。整体来看，项目正处于 v2.2 发布后的密集迭代与社区反馈消化期，健康度良好。

## 版本发布

今日无新版本发布。

## 项目进展

今日无 PR 被合并到主干（merged/closed 的 18 个 PR 均为关闭而非合并），但有多条值得关注的 PR 持续活跃并处于评审阶段：

- **[#7526] feat(agent): add protected execution contract**（rayrayraykk，创建 09-03，待合并）— 新增受保护的执行、澄清与授权合约机制，将内置技能、文件编辑与工具使用引导从动态环境上下文中移入独立提示模块，属架构层面的改进，有望改善 Agent 执行的安全性与可维护性。[查看 PR](https://github.com/agentscope-ai/QwenPaw/pull/7526)
- **[#7521] fix(agent): fold consumed thinking under context pressure**（niceIrene，创建 09-03，待合并）— 通过跟踪已消费的 ThinkingBlock ID 来防止长任务中思考内容被重复回放到模型上下文，直接对齐社区广泛报告的上下文膨胀问题（参见 Issue #6541、#7579）。[查看 PR](https://github.com/agentscope-ai/QwenPaw/pull/7521)
- **[#7486] feat(creator) 1.1.2**（xuanrui-L，创建 09-02，持续更新）— QwenPaw Creator 应用插件的大型功能集 PR，包含运行时通知总线与异步委托、多时间线 A/B 对比、T2V/I2V/S2V 调度、专业媒体提示词、进程内锁、Windows 加固及 Docker 部署等多项能力，体量较大，需关注合并节奏。[查看 PR](https://github.com/agentscope-ai/QwenPaw/pull/7486)

另有数条今日由首次贡献者提交的新 PR 进入评审队列：修复 macOS 计算机使用辅助的 TCC 权限缓存问题（[#7614](https://github.com/agentscope-ai/QwenPaw/pull/7614)）、新增 OpenViking 长期记忆后端（[#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)）、Console 混合方向文本渲染修复（[#7611](https://github.com/agentscope-ai/QwenPaw/pull/7611)）、shell 子进程 stdin 分离（[#7598](https://github.com/agentscope-ai/QwenPaw/pull/7598)）及聊天提交队列机制修复（[#7610](https://github.com/agentscope-ai/QwenPaw/pull/7610)）等，分布在前端、后端及系统集成多个层面。

## 社区热点

- **[Issue #7505] qwenpaw 访问局域网 LLM Server 频繁 client disconnect**（评论 12 条，已关闭）— 今日讨论热度最高的 Issue。用户报告通过 qwenpaw 访问局域网 LM Studio Server（qwen3.8 flash next q3）时频繁出现 client disconnect 导致 LLM 访问反复重试并最终超时。该 Issue 已关闭，建议关注关闭时维护者的解决方案说明。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7505)

- **[Issue #7559] 任务执行中对话框新发消息触发 409 报错**（评论 5 条，开放中）— 用户质疑任务执行中通过对话框发送消息不应报 409，而应进入消息队列。关联 PR #7610（将发送路由至 localStorage 队列）正在解决这一问题。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7559)

- **[Issue #6820] 前端 UI 未流式显示模型输出与工具调用**（评论 5 条，已关闭）— 该问题于 8 月 8 日提出、今日关闭，历经一个月最终得到解决，具体修复方式建议回溯关闭记录。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/6820)

- **[Issue #7576] RetryChatModel 硬编码 32768 context_size 导致所有模型报 CONTEXT_UNFIT**（评论 4 条，开放中）— 核心代码缺陷，影响 v2.1.0 至 v2.2.0 所有已发布版本，建议尽快修复。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7576)

- **[Issue #6839] MCP 工具调用将数字字符串以数字格式传参**（评论 4 条，已关闭）— 与 PR #6936（修复将字符串类型工具参数强制转换为 JSON 数字）相关联，PR 已于今日关闭（修复方案可能已被采纳或另行走查）。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/6839)

社区讨论的核心诉求可以归结为三个方面：**连接稳定性**（局域网 LLM 服务的断连与重试）、**并发消息处理语义**（任务执行中用户消息应排队而非冲突报错）以及**模型的 API 兼容性与参数适配**（上下文窗口大小硬编码、参数类型推断错误）。其中并发消息处理问题已出现对应的修复 PR（#7610），说明维护者正在积极回应用户反馈。

## Bug 与稳定性

### 高严重度

- **[#7576] RetryChatModel 硬编码 32768 context_size 导致所有模型报 CONTEXT_UNFIT**（开放中，无修复 PR）— 影响 v2.1.0 至 v2.2.0 全部已发布版本，硬编码的 32768 上下文窗口覆盖了所有模型配置并触发错误的 CONTEXT_UNFIT 错误。这是代码层面的根本缺陷，建议尽快定位修复。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7576)
- **[#7363] 同步调用阻塞事件循环且 timeout 失效，桌面端无响应 118–135 秒**（开放中，自 08-27 起无修复 PR）— 严重可靠性问题，Windows 桌面上同步调用期间界面长时间冻结且超时机制完全失效，对用户体验影响极大。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7363)

### 中严重度

- **[#7559] 任务执行中通过对话框发消息触发 409 报错**（开放中，已有 PR #7610）— 行为与预期不符，消息应进入队列而非冲突报错。修复方案已在 PR #7610 中实现（基于 TaskTracker 的轻量状态端点 + localStorage 队列路由）。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7559)
- **[#7579] 模型回复意外从上下文丢失（模型看不到自己刚说的话）**（开放中，自 09-06 起无修复 PR）— 回复已持久化但后续请求缺失，伴随空响应症状，已在 v2.2.0 验证。可能与上下文压缩逻辑相关（参见 #6541、#7521）。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7579)
- **[#7587] OpenAI 兼容 Provider 连接 WUSRouter 时遭遇 Cloudflare 403**（开放中，无修复 PR）— 拉取模型列表即失败，阻断该服务商用户的使用路径。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7587)
- **[#7513] deepseek-v4-pro 对话中出现与 qwenpaw 工具调用混合的问题**（开放中，自 09-03 起无修复 PR）— Windows 桌面版 2.1.0 用户报告，其他 AI 工具未出现该问题。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7513)
- **[#7589] Heartbeat cron 会话反馈循环导致重复消息堆积**（开放中，自 09-06 起无修复 PR）— 已在 2.0.1 与最新 main 分支上验证存在，影响 cron 会话的消息堆积效率。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7589)
- **[#7597] 工具返回的图片/PDF 二进制被以裸 base64 发送导致 400 错误**（开放中，今日新建，无修复 PR）— 工具返回的二进制文件（如图片、PDF）通过 send_file_to 等接口传递时因缺少 file_id/file_data 包装而被 API 拒绝。该 Issue 由 AI agent（deepseek-v4-flash-vision-exp）代笔撰写，值得注意此类 AI 辅助提报正在成为 Contributor 的新模式。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7597)

### 低严重度 / 已修复

- **[#7604] LLM 流式空闲超时默认 30 秒且在桌面端不可配置**（已关闭）— v2.2.0 引入的硬编码问题（模块导入时即固定），已在今日解决。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7604)
- **[#6820] 前端 UI 未流式显示模型输出、工具调用与思考过程、全部完成后才显示**（今日关闭）
- **[#6839] MCP 工具调用将数字字符串以数字格式传参**（今日关闭，关联 PR #6936 已关闭）
- **[#7006] 右上角语言下拉与左下角设置齿轮的语言列表不一致**（今日关闭）

## 功能请求与路线图信号

- **工作目录手动路径输入回归**（[#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588)（已关闭）、[#7601](https://github.com/agentscope-ai/QwenPaw/issues/7601)（已关闭））— 用户在 v2.2.0 中发现原本 v2.1.0 支持的主工作目录路径手动编辑功能被移除，只保留"视野很小"的图形界面选择器，深度超过 3 级目录操作非常麻烦。基于这两条 issue 的口径一致及快速关闭状态，有较大概率已在修复中/计划恢复。这同时是一条值得注意的**回归信号**：新版本不应移除用户已依赖的功能。

- **长期记忆后端扩展**（PR [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613)）— 首次贡献者提交了 OpenViking 长期记忆后端，按 #7252 中讨论的 REST 范围接入现有 BaseMemoryManager 与 MemoryMiddleware。若被采纳，将成为记忆层的可插拔选项。

- **插件更新检测与管理**（PR [#7605](https://github.com/agentscope-ai/QwenPaw/pull/7605)）— 为官方目录和社区市场的插件增加更新检测（版本比较、ID 规范化、更新状态展示），支持单插件更新与"全部更新"，有明确用户需求支撑。

- **技能版本暴露与依赖验证**（PR [#7609](https://github.com/agentscope-ai/QwenPaw/pull/7609)）— 在工作区/Pool API 及 Console 界面暴露技能版本，增加对 env/bin/MCP 声明的字段级校验。

- **UI 字体缩放与文件链接支持**（[#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077)（已关闭））— 该功能请求自 5 月提出并已关闭，详情建议回溯关闭时的记录。

- **模型记忆持久化**（[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)）— 用户反复强调约束但模型"总是记不住"（TODO 文件路径散落、开发目录漂移且被自动部署覆盖），反映的是长期记忆/指令遵循的深层需求，短期不易解决。

## 用户反馈摘要

- **工作目录切换体验在 v2.2.0 回退**：多名用户反映 v2.2.0 移除了 v2.1.0 的路径输入框，图形选择器面对多级目录"简直就是灾难"，属于高确定性回归，用户情绪偏负向但反馈建设性强。
- **局域网 LLM 连接稳定性不佳**（#7505）：用户反馈 qwenpaw 使用局域网 LM Studio Server 时频繁 client disconnect，反复重试最终超时。已关闭，SDK 可输出关闭时的官方说明。
- **MCP 工具参数类型推断问题**（#6839，已关闭）：整型样字符串被强制以数字格式传参导致工具调用失败，该问题最终得到解决。
- **任务执行期间无法发送新消息且报 409**（#7559）：用户认为消息应进入队列而非报错，属于对交互并发语义的合理期待，已有对应修复 PR。
- **用户在 Desktop v2.2.0 上因超时不可配置导致使用受限**（#7604，已关闭）— 30 秒超时被硬编码在模块初始化处且无法通过 WebUI 或 envs.json 配置，对于慢模型或复杂工具链场景用户几无规避手段。
- **模型的长期记忆/指令遵循仍是核心痛点**（#7571）：用户反复强调规则（文件输出位置、开发目录）之后模型仍然频繁遗忘，在插件开发等跨会话场景中严重降低可用性。
- **AI 辅助提报 Issue 正在成为常态**（#7597、#7006 等多条注明由 agent 代笔写就），社区用户在借助 LLM 自动生成高质量缺陷报告，这可能是项目维护者未来需要习惯的新贡献形态。

## 待处理积压

以下为长期未获得修复 PR 或维护者响应的重要问题：

- **[#7363] Windows 桌面端同步调用冻结 118–135 秒且 timeout 失效**（08-27 开启，无维护者回复，无修复 PR，已开放 11+ 天）— 严重可用性缺陷，建议优先关注。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7363)
- **[#6541] scroll context compression 触发 MODEL_EXECUTION_ERROR（DeepSeek）**（07-29 开启，无维护者回复，已开放超 40 天）— 上下文压缩块使用 role=user 而非 role=system 导致 DeepSeek 报错，属于 v2.0.1 即存在的旧问题。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/6541)
- **[#7242] Dashboard/Qwenpaw Tooks 加载超过 6 分钟**（08-24 开启，无维护者回复，已开放 14+ 天）— 单实例部署 74 个 agent 后 Dashboard 加载极慢，虽然 API 正常响应、功能可用，但前端界面性能严重退化。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7242)
- **[#7571] 模型记忆/指令遵循持续失效**（09-05 开启，无维护者回复）— 用户多次强调的规则模型记不住，跨会话遗忘导致安全性风险（未开发完成的代码被脚本自动部署上线），建议至少给出回应或缓解建议。[查看 Issue](https://github.com/agentscope-ai/QwenPaw/issues/7571)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-07

## 1. 今日速览

ZeroClaw 过去24小时社区活动保持高位：共产生 33 条 Issue 更新和 50 条 PR 更新，但合并率极低（仅 1 条 PR 被合并/关闭），大量高价值 PR 处于长期待审状态。值得关注的是，多个 S0/S1 级别的数据丢失 Bug（如 #10121、#10659）仍在活跃讨论中，且暂未见对应修复 PR 落地，项目核心稳定性风险较高。架构层面，围绕会话历史持久化（#10526）、WASM 插件运行时（#10076）与沙箱文件系统策略（#6996）的三份重量级 RFC 仍在 Revision 迭代中，尚无最终定论。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 仅 1 条（数据未单列展示），整体合并节奏趋缓。从活跃 PR 观察，以下非合并但取得实质进展的 PR 值得关注：

- **#10621 feat(runtime): coordinate agent lifecycle mutations**（Audacity88，更新于今日）：为 daemon RPC、gateway、channels、ACP admission 与 CLI 变更引入统一的 live-config 权威源，替代各组件独立推进克隆配置的现状 — 属于运行时架构收敛的关键一步，涉及面横跨 24 个标签域，改动量 XL。
- **#9739 feat(zerocode): multi-session panes with agent sidebar**（IftekharUddin，更新于今日）：维护者已根据评审意见完成 bounded reconnect 与 multi-session 生命周期修复，并合并了最新 master 进入贡献者分支 — 该 PR 已进入收尾阶段。
- **#9584 feat(cli): egress grant ceremony for plugin install**（JordanTheJet，更新于今日）：维护者 Audacity88 已修正 scope、fresh-install 权限行为及校验描述，实现保持不变 — 安全敏感型 CLI 变更，正在走最后的评审确认。

整体来看，项目今日在「运行时生命周期一致性」和「评审修复推进」上有所前进，但大量功能 PR 仍积压在评审/作者响应阶段（详见第 8 节）。

## 4. 社区热点

- **[#9487] RFC: Runtime-owned conversation sessions and transport surface adapters**（评论 34，Revision 5）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9487
  这是当前评论数最高的 Issue。Revision 5 为实质性替换版本，Revision 4 的投票快照不延续，需维护者重新开启讨论窗口。该 RFC 试图将会话所有权从各 channel 收归 runtime 层，属于架构级重构，讨论热度持续高位。

- **[#9488] RFC: Unified file and attachment architecture for conversation surfaces**（评论 27，Revision 10）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9488
  与 #9487 同作者（NiuBlibing）、同批提出的配套架构方案，已迭代至 Revision 10。社区对统一文件/附件架构的诉求强烈，但反复的 Revision 替换也暗示共识尚未达成。

- **[#6996] RFC: Granular sandbox policy - filesystem restrictions**（评论 25）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6996
  社区持续关注应用层路径准入与操作系统沙箱后端（Bubblewrap/Landlock/Seatbelt）之间的策略漂移问题。提出时间已超 3 个月，仍在活跃讨论中，是安全基建方向最受关注的 RFC。

- **[#7462] [Bug]: 74 test failures on Windows**（评论 19）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7462
  Windows 11（简体中文，代码页 936）下 workspace 测试套件 74 项失败，涉及 Unix-only 测试命令、路径语义与控制台编码问题。该 Issue 自 6 月 10 日提出至今已近 3 个月仍为 OPEN 状态，反映出跨平台 CI 覆盖的长期缺口。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| **S0 - 数据丢失** | [#10121] 部分 Code/ACP turn 在进程退出后消失 | 流式助手文本、工具调用与结果在 turn 到达终止态前若进程退出即丢失 | 无（follow-up 标签，关联 #10644 讨论） |
| **S1 - 工作流阻断** | [#10659] 预算超限的 Code turn 在会话恢复后丢失可见进度 | 达到每日成本上限后，已流式输出的文本与已完成工具活动在恢复时不可见 | 无（新建于 09-06，仅 1 评论） |
| **S1 - 工作流阻断** | [#10230] Daemon 启动/重载时 agent 初始化栈溢出 | 应用 Quickstart 配置可中止 Tokio runtime worker | 无（r:needs-repro） |
| **S1 - 工作流阻断** | [#9333] 切换会话后 ACP 失败 turn 消失 | 提供方错误后已出现在实时转录中的内容在切换会话时丢失 | 无 |
| **S1 - 工作流阻断** | [#9191] Cron agent 任务无 wall-clock 超时 | 运行中锁仅在进程启动时清理，in-flight 任务可无限阻塞 | 无 |
| **S2 - 行为降级** | [#10408] 活动中第二条消息触发并行运行 | 同会话内重复工作与重复回复 | 无（新建于 08-27，3 评论） |
| **S2 - 行为降级** | [#9940] turn-context 指引 agent 使用无法解析的 cron 投递渠道 | 投递默认值重复同一错误 | 无 |
| **S2 - 行为降级** | [#10115] 工具结果截断在模型上下文之外不可见 | 超出 max_tool_result_chars 的截断无观测信号 | 无 |
| **S2 - 行为降级** | [#7462] Windows 11 下 74 项测试失败 | Unix-only 命令、路径语义、控制台编码 | 无 |

**关联修复 PR 信号**：虽然上述 Bug 均无直接 fix PR，但以下待审 PR 可能覆盖部分根因：
- **#10599**（fix(cron): record non-execution）直接回应 #9191 族问题中「静默失败不可见」的核心痛点 — 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/10599
- **#10600**（fix(channels): stop reporting success for outbound sends that never happened）修复发送端误报成功问题，与 #9333/#10121 类「内容消失」问题同源相关 — 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/10600
- **#10644**（fix(runtime): bind background delegate results to an owner principal）作为 #10601 的 follow-up，涉及后台 delegate 结果归属 — 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10644

## 6. 功能请求与路线图信号

以下新增/活跃的功能请求可能被纳入近期版本：

- **[#10663] configurable 1-hour prompt-cache TTL for Anthropic cache markers**（新建于 09-06）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10663
  目前所有 `cache_control` 标记均为 `{"type": "ephemeral"}`，无 `ttl` 字段，Anthropic 默认应用 5 分钟 TTL。请求支持配置 1 小时 TTL 以提升缓存命中率。该请求直接对应用户成本优化诉求，结合 #10604（为 OpenCode 请求发送 x-opencode-session 以保持 prompt cache 热）的待审 PR，缓存策略优化正在成为供应商层面的集中改进方向。

- **[#10549] RFC: Simplify RFC voting process**（评论 4）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10549
  提议取消强制讨论窗口（普通 RFC 48h / 特殊一致通过 72h），并让 REVISE 直接停止当前快照。结合 #8692（维护者决策队列）、#9487/#9488 反复的 Revision 替换现象，社区对 RFC 流程效率的不满正在形成制度性改革诉求。

- **[#10526] RFC: Append-only session event history**（09-01 创建，Revision 中）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/10526
  提出以 append-only 事件历史 + 确定性状态重放替代当前的可变会话消息持久化。该 RFC 被 #10076 明确指定为 session-history 决策的唯一权威源，有望从根本上解决第 5 节中多起「内容消失」类 Bug。

## 7. 用户反馈摘要

- **Windows 平台支持缺口显著**：#7462 中用户报告在 Windows 11 中文环境下 74 项测试失败，CI 未覆盖 Windows 平台，Unix-only 测试命令与路径语义问题长期存在。该 Issue 自 6 月提出至今已 3 个月仍无修复，可能影响 Windows 开发者采用意愿。

- **缓存行为不可控增加使用成本**：在 #8720 中，用户 ngamradt 反馈 Bedrock Nova 2 Lite 模型随机出现缓存错误，要求禁用缓存却无配置入口；#10663 进一步反映了 Anthropic 5 分钟默认 TTL 与长会话工作流不匹配的痛点。两者共同指向「缓存策略应由用户掌控」的核心诉求。

- **消息丢失是最严重的信任破坏者**：#10121、#10659、#9333 三类 Issue 均指向同一模式：用户已看到的流式内容在 turn 异常终止/会话切换/预算超限后不可恢复。评论中用户反映这会导致重复劳动与对话上下文断裂，属 S0/S1 级体验问题。

## 8. 待处理积压

以下 PR/Issue 长期未获合并或维护者响应，提醒关注：

- **IftekharUddin 的 eval 工具链 5-PR 栈**（#9220→#9221→#9222 依赖链 + #9219 + #9245，均 07-20/21 创建，至今 7 周+，全部标 `needs-author-action`）
  链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9220
  覆盖 run receipts、baseline 回归门禁、per-dimension LLM-judge grader 等完整评估体系，是评测基础设施的核心建设，但整个依赖链均卡在作者响应状态，建议维护者明确下一步预期。

- **[#10589] feat(config): default multimodal.max_image_size_mb to 20 MiB**（09-03 创建，4 天无评论）
  链接：https://github.com/zeroclaw-labs/zeroclaw/pull/10589
  将默认图片大小上限从 5 MiB 提升至 20 MiB（所有支持的视觉 API 上限值）。改动极小（size:S），但涉及默认行为变更，风险标记为 low，适合快速评审合入。

- **[#7462] Windows 74 项测试失败**（06-10 创建，近 3 个月未关闭）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7462
  已标 `status:accepted` 与 `no-stale`，但无 assignee、无 fix PR 关联。跨平台 CI 覆盖为该 Issue 的根治方向，建议纳入近期工程优先级。

- **[#6996] RFC: Granular sandbox policy - filesystem restrictions**（05-28 创建，超 3 个月活跃讨论）
  链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6996
  已完成多轮迭代但无最终裁决。该 RFC 涉及安全关键路径，建议维护者明确推进计划或给出结论性反馈，避免社区讨论耗尽热情。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*