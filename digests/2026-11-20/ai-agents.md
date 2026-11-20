# OpenClaw 生态日报 2026-11-20

> Issues: 395 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-20 18:37 UTC

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

# OpenClaw 项目日报 · 2026-11-20

## 1. 今日速览

项目今日处于**高活跃但高压状态**：过去 24 小时 Issues 更新 395 条（新开/活跃 283、关闭 112），PR 更新 500 条（待合并 307、已合并/关闭 193），无新版本发布。讨论焦点高度集中在**升级/更新通路**（2026.11.x 系列），多条 P0/P1 级别的 Doctor 校验失败、WAL 发布失败、SQLite 锁与维护流程死循环问题刷新评论数，且绝大多数仍缺 fix PR。合并侧则围绕 ACP 客户端回复完整性、会话数据库替换后的陈旧写入、插件配置复用等修复推进，属于稳定性打磨而非新功能冲刺。整体健康度评估：**社区参与度高、修复吞吐量尚可，但发布流程与升级可靠性构成当前主要风险点**。

---

## 3. 项目进展（已合并/关闭）

今日已合并/关闭 193 条 PR，以下是可确认的代表性条目：

- **#202628 [CLOSED]** `fix: reuse prepared plugin configuration during agent runs` — 复用当前 generation 已准备的插件配置，减少 agent 运行期的重复分配与 CPU 开销。属于性能与资源效率优化。
  https://github.com/openclaw/openclaw/pull/202628
- **#202572 [CLOSED]** `feat(ui): skill workshop start page with Drafts, History and Learned skills` — 重构 Skill Workshop 起始页的**结构与行为**，加入草稿、历史与已学习技能视图（stacked 于 #202545/#202537）。
  https://github.com/openclaw/openclaw/pull/202572
- **Issue #200289 [CLOSED]**（P0）`2026.11.3 → 2026.11.4 update takes hours, fails with SQLite lock during Gateway handoff, requires SSH recovery` — 该升级故障单已关闭，但需注意：#197083、#198218 仍描述了相近的 WAL/维护流程问题，建议维护者确认根因是否被同一修复覆盖。
  https://github.com/openclaw/openclaw/issues/200289
- **Issue #162914 [CLOSED]** 间歇性 `Aborted | sandbox_provisioning`（rootless Podman，运行 5–12 秒后失败）。
  https://github.com/openclaw/openclaw/issues/162914

**向前推进幅度**：关闭/合并量（Issues 112、PR 193）显示维护吞吐正常，但今日关闭项中未见明确的"更新通路根因修复"合并记录，11.x 升级链的核心风险尚未看到闭环证据。

---

## 4. 社区热点（按评论数）

| 排名 | 条目 | 状态/优先级 | 评论 | 链接 |
|---|---|---|---|---|
| 1 | #191944 macOS 上 `gateway stop` / `stop --force` 均失败，报 `ServiceInspectionError` | OPEN / P2 | 38 | https://github.com/openclaw/openclaw/issues/191944 |
| 2 | #197083 安装后 Doctor 的 WAL 发布校验失败，11.3 更新停留在"部分完成"状态 | OPEN / **P0** | 31 | https://github.com/openclaw/openclaw/issues/197083 |
| 3 | #178359 `doctor --fix --non-interactive` 卡住 15+ 分钟无输出，未进入 agent DB 修复 | OPEN / P1 | 31 | https://github.com/openclaw/openclaw/issues/178359 |
| 4 | #120385 Code Mode 工具目录在 cron/记忆刷写回合构建不完整，MCP 工具缺失 | CLOSED | 27 | https://github.com/openclaw/openclaw/issues/120385 |
| 5 | #168955 Windows 启动回归：ready 约 1030s vs 410s，`sidecars.control-ui-assets` 阻塞 477s | OPEN / P1 | 23 | https://github.com/openclaw/openclaw/issues/168955 |
| 6 | #123792 CLI 后端下助手回合渲染两次（逐块视图 + 拼接聚合记录） | OPEN / P2 | 20 | https://github.com/openclaw/openclaw/issues/123792 |

**诉求分析**：热度前三全部指向**运维与升级可靠性**——服务停止、更新校验、修复命令挂起，说明用户把 OpenClaw 当长期运行的自托管服务使用，对"更新不破坏现有安装"的容忍度已接近极限。第 4、6 条则集中在**可观测性与会话状态一致性**：工具调用缺失只以"Exec failed"呈现，双渲染直接影响用户对 Agent 输出的信任。多个高评论条目带 `clawsweeper:needs-maintainer-review`，等待维护者裁定。

---

## 5. Bug 与稳定性（按严重程度）

**P0 / 发布阻断**
- **#197083** 2026.11.1→11.3 升级后 Doctor 报 `SQLite WAL commit publication could not be verified`，更新器以 `state-migrated-no-rollback` 拒绝回滚 → 安装处于半完成状态。**无 fix PR**（`no-new-fix-pr`）。https://github.com/openclaw/openclaw/issues/197083

**P1 / 崩溃与循环**
- **#198218** Gateway 停止时 Doctor/update 维护流程活锁，admission reader 无限重哈希未变的状态 DB（在 2026.10.6 与 11.3 复现），需 SSH 恢复。**无 fix PR**。https://github.com/openclaw/openclaw/issues/198218
- **#178359** `doctor --fix --non-interactive` 15+ 分钟无输出挂起。**无 fix PR**。https://github.com/openclaw/openclaw/issues/178359
- **#168955** Windows 启动回归，ready 从约 410s 劣化至约 1030s。**无 fix PR**。https://github.com/openclaw/openclaw/issues/168955
- **#191847** 大会话反复击穿 512 MB SQLite worker（`ERR_WORKER_OUT_OF_MEMORY`），该会话每回合均报 "admission is closed"。**无 fix PR**。https://github.com/openclaw/openclaw/issues/191847
- **#200606** 2026.11.5 候选 Doctor 因插件迁移冲突阻止更新，`changed=[]`（标记 `not-repro-on-main`，需复现确认）。https://github.com/openclaw/openclaw/issues/200606
- **#125764** Telegram 出站发送网络失败后单次尝试即进入死信，无重试、无 `reconcileUnknownSend`，announce/完成回复静默丢失。**无 fix PR**。https://github.com/openclaw/openclaw/issues/125764

**P2 / 状态与体验**
- **#200756** Windows beta.2→beta.4 在 `package-swap` 阶段失败（基线包扫描失败 / 回滚树变更）；**#199617** beta.3 验证期 Windows 计划任务校验失败（`gateway-stop-unverified`）。均无 fix PR。https://github.com/openclaw/openclaw/issues/200756 · https://github.com/openclaw/openclaw/issues/199617
- **#200224** 升级拒绝已退役的 `agents.defaults.heartbeat`，但在 stable 上移除该配置又会重新启用心跳 → 两难。https://github.com/openclaw/openclaw/issues/200224
- **#155868** 由 agent 触发的运行使用缩减版工具清单，导致跨 agent 消息进入热会话时 prompt 缓存全量失效（涉及安全评审）。https://github.com/openclaw/openclaw/issues/155868
- **#202001** 单会话内系统提示分段抖动导致 openai-completions 下 prompt 缓存失效，诊断误报为历史重写。https://github.com/openclaw/openclaw/issues/202001
- **#192496** 20 个 agent 时空闲态仍占用约 100–170% 单核（PR #170341 落地后症状持续）。https://github.com/openclaw/openclaw/issues/192496
- **#172031 / #180978 / #138528** 分别涉及 `modelPromptProjection` 晚到导致准入失效、Active Memory 超时断路器在聊天节奏下不打开、被 exec-approval 拦截的 cron 运行丢失 `blocked_tool_call` 归因。均无 fix PR。https://github.com/openclaw/openclaw/issues/172031 · https://github.com/openclaw/openclaw/issues/180978 · https://github.com/openclaw/openclaw/issues/138528

**今日 Open PR 中可能相关于稳定性的修复**（尚未合并，不能视为已修）
- **#202647** 子会话 follow-up 结果在 requester 生命周期推进后失效（"authority is no longer current"）；**#202644** 会话数据库替换后停止陈旧文件写入；**#202651** 修复 Matrix 房间会话小写键 + 待处理心跳结果导致 `doctor --fix` 退出 1；**#202655** 对齐 CI 与已准入工具调用行为。https://github.com/openclaw/openclaw/pull/202651 · https://github.com/openclaw/openclaw/pull/202644

---

## 6. 功能请求与路线图信号

- **飞书（Lark）进度流式模式** — #131457 请求为 Feishu 增加 `channels.feishu.streaming.mode: "progress"`，与 Slack/Discord/Telegram/Matrix/Mattermost/MS Teams 对齐。该 Issue 已 **CLOSED**（带 stale 标签），**不宜预期进入下一版本**。https://github.com/openclaw/openclaw/issues/131457
- **Cron 结束条件** — #130247 请求 `--until` / `--max-runs` 及累计运行计数；当前调度器无终止条件，需 `needs-product-decision`。https://github.com/openclaw/openclaw/issues/130247
- **记忆分块可配置** — #179954 允许 `MEMORY.md`/`USER.md` 之外的 curated memory 文件按条目分块索引。https://github.com/openclaw/openclaw/issues/179954
- **IMAP 可靠投递** — #179685 提出持久化处理交接与可检查的逐消息结果。https://github.com/openclaw/openclaw/issues/179685
- **旁证**：#146311、#179954 等显示"链接 PR 已开"标记，但对应 PR 未出现在今日合并列表中，**尚不能判定入版**。

---

## 7. 用户反馈摘要

- **升级即风险**：多条高评论 Issue 描述的都是"从某个 2026.9/10/11 版本升级后安装损坏、需 SSH 手工恢复"（#200289、#197083、#198218），用户实际把 OpenClaw 部署为无人值守长期服务，对 `doctor`/`update` 的"部分完成态"缺乏容忍。
- **平台差异明显**：macOS（Intel x64）服务停止失败（#191944）、Windows 启动慢 2.5 倍与计划任务校验失败（#168955、#199617、#200756），非 Linux 平台的更新路径是集中痛点。
- **静默失败最伤信任**：Telegram 回复静默丢失（#125764）、cron 中断无归因（#138528）、工具缺失仅显示 "Exec failed"（#120385）——用户反复强调"无错误信号比报错更糟"。
- **大用量用户的压力点**：多 agent（19–20 个）空闲高 CPU（#192496）、大会话击穿 SQLite worker（#191847）、跨 agent 消息破坏 prompt 缓存（#155868、#202001），指向规模化使用场景下的资源与缓存治理。
- **正面信号**：多条问题被作者主动补充更正、提供隔离探针与可复现步骤（#120385、#167622），社区协作质量较高；但 `needs-info` / `needs-live-repro` 标签显示部分报告仍不足以驱动修复。

---

## 8. 待处理积压（提醒维护者关注）

| 条目 | 创建 → 最近更新 | 积压时长 | 风险 |
|---|---|---|---|
| #120385 Code Mode 工具目录不完整（已关闭，但历经修正） | 2026-08-08 → 2026-11-20 | 约 3.5 个月 | 关闭是否覆盖根因值得复核 |
| #130247 Cron 无终止条件 | 2026-08-26 → 2026-11-20 | 约 3 个月 | 需产品决策，长期悬置 |
| #131457 飞书进度流式 | 2026-08-28 → 2026-11-20 | 约 3 个月 | 已关闭，跨渠道能力不一致仍存 |
| #138528 cron 中断丢失归因 | 2026-09-04 → 2026-11-20 | 约 2.5 个月 | fix-shape 清晰但无 fix PR |
| #125764 Telegram 单次即死信 | 2026-08-18 → 2026-11-20 | 约 3 个月 | P1 消息丢失，带 `needs-product-decision` |
| #146311 多 agent 群聊转写回声 | 2026-09-12 → 2026-11-20 | 约 2 个月 | 链接 PR 长期未合并 |
| #155868 agent 触发运行工具清单不一致 | 2026-09-22 → 2026-11-19 | 约 2 个月 | 涉及安全评审 + 缓存性能 |
| #129388 context-pressure-aware continuation | 2026-08-25 → 2026-11-20 | 约 3 个月 | XL 级、多条 merge-risk、`needs proof` |
| #194376 `sessions_send` 唤醒准入 | 2026-11-07 → 2026-11-20 | 约 2 周 | 标签面极广，评审成本高 |

**建议优先级**：#197083（P0 半完成升级）与 #198218（P1 维护活锁）应优先指派维护者并推动 fix PR；#125764 与 #138528 已有清晰问题形态，可先行立项。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据窗口：2026-11-20 · 覆盖 13 个仓库**

---

## 1. 生态全景

生态整体呈"高流入、低流出"的剪刀差：头部项目单日 PR 待合并量与合并量严重失衡（OpenClaw 307:193、ZeroClaw 49:1、Hermes 47:3），评审带宽而非开发意愿成为共同瓶颈。稳定性问题高度同质化——多个项目当日的 Top 关注项都是"静默失败"（升级半完成、消息静默丢失、渠道静默死亡），说明这类产品正从"能不能跑"进入"长期无人值守能不能活"的阶段。与此同时，10 个活跃项目中 4 个当日零活动（NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw），PicoClaw 已出现社区 fork 分流，生态开始出现明显的头部收敛。技术方向上，渠道适配层一致性、凭据安全模型、本地模型生命周期三组需求跨项目重复出现。活跃维度上，OpenClaw 与 Hermes 稳居第一梯队，NanoClaw 处于发布候选收尾，CoPaw 处于发布后回归修复潮。

---

## 2. 各项目活跃度对比

| 项目 | Issues（更新/新开-活跃/关闭） | PR（更新/待合并/合并-关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 395（283/112） | 500（307/193） | 无 | 高参与、修复吞吐尚可；**发布/升级通路 P0 风险未闭环** |
| **Hermes Agent** | 50（47/3） | 50（47/3） | v0.23.3 + canary | 主干吸收强（约 370 PR），**审查带宽为瓶颈** |
| **CoPaw** | 18（14/4） | 48（30/18） | 无 | 响应快，**v2.3.0.post1 后前端回归密度偏高** |
| **NanoClaw** | 19（12/7） | 18（9/9） | v2026.11.0-rc.3 | 良好；发布候选收尾，**多个安全 PR 待合** |
| **ZeroClaw** | 11（11/0） | 50（49/1） | 无 | 输入活跃、**输出严重受限（49:1）** |
| **LobsterAI** | 1 | 19（4/15） | 无（发布分支 PR #3133 已合） | 交付强；**贡献高度集中 + 安全 Issue 未闭环** |
| **NanoBot** | 1（当日闭环） | 13（1/12） | 无 | 良好；**WebUI 打磨为主，功能动力偏弱** |
| **PicoClaw** | 3（2/1） | 7（0/7） | 无 | 低-中；**维护停滞，已现社区 fork** |
| **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | 无活动 |

> 说明：Moltis、TinyClaw、ZeptoClaw 当日零活动；NullClaw、IronClaw 同理。LobsterAI、NanoBot 的 Issues 更新量分别为 1 条。

---

## 3. OpenClaw 在生态中的定位

**规模断层领先**：单日 Issues 更新 395 条、PR 更新 500 条，约为第二梯队 Hermes（各 50 条）的 8–10 倍，社区规模不在同一量级。

**技术路线差异**：
- **定位为长期自托管服务**，而非桌面助手或 WebUI 工具——高评论 Issue 大量是"升级后安装损坏、需 SSH 恢复"（#200289、#197083、#198218），用户把它当无人值守基础设施运行。
- 生态内唯一具备**完整的 upgrade/doctor/WAL/SQLite 迁移链路**概念并因此产生系统性故障面的项目，这也正是其最大风险来源（P0 #197083 半完成升级、P1 #198218 维护活锁均无 fix PR）。
- 多 agent 规模化（19–20 个 agent 空闲仍占 100–170% 单核，#192496）、跨 agent prompt 缓存治理（#155868、#202001）是其他项目尚未触及的复杂度层级。

**相对优势**：问题报告质量高（隔离探针、可复现步骤）、渠道矩阵最全（Slack/Discord/Telegram/Matrix/Mattermost/MS Teams/飞书）。
**相对弱势**：非 Linux 平台（macOS/Windows）更新路径集中痛点，发布可靠性已成为信任瓶颈。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **静默失败 / 可观测性** | OpenClaw（#125764 Telegram 单次即死信、#138528 cron 丢失归因）、ZeroClaw（#12597 Telegram offset 卡死、#12607 记忆双版本）、CoPaw（#8757 微信轮询静默死亡）、NanoBot（#6732 凭据静默覆盖） | "无错误信号比报错更糟"；失败需可诊断、可恢复、有归因 |
| **凭据与授权安全模型** | ZeroClaw（#12422 运维托管凭据、PR #12596 分段授权、ADR-017 OIDC PR #12496）、LobsterAI（#3120 API Key 明文进命令行/shell 历史）、NanoClaw（#4490–#4494 供应链 pin/校验和）、NanoBot（#6732 autocomplete 防护） | 不向 agent 暴露明文凭据；依赖固定与完整性校验 |
| **渠道一致性** | OpenClaw（#131457 飞书流式对齐）、ZeroClaw（#12557 Discord/Matrix 审批、#12598 WhatsApp 引用回复）、NanoClaw（#4504 Mattermost a2a 房间、#4503 命令注册）、CoPaw（#8827 Telegram topic 隔离） | 以 Telegram/Slack 为基准，其他渠道补齐审批、引用、发现性 |
| **本地模型生命周期** | CoPaw（#8830 llama-server.exe 残留、#8499 插件化、#8647/8648/8649 MLX+GPU+自动更新）、Hermes（PR #142566 本地引擎注册表）、CoPaw #8826 Rapid-MLX 预设 | 进程隔离、引擎可插拔、自动更新 |
| **多 profile / 多会话状态一致性** | Hermes（#158211/158223/158272/158319 profile 生命周期）、OpenClaw（#202644 陈旧写入、#202647 子会话失效）、NanoClaw（#4247 跨会话上下文） | clone 复制凭据、rename 重键、删除如实报告、会话隔离 |
| **记忆系统可靠性** | CoPaw（#8580 tag 索引 503）、ZeroClaw（#12607 漏召回+纠正后并存、#12022/PR #12036 外部 rerank）、OpenClaw（#179954 记忆分块） | 可观测、可自愈、召回准确 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特征 |
|---|---|---|---|
| **OpenClaw** | 全渠道 + 多 agent 编排 + 完整运维链路 | 自托管长期服务运营者、多 agent 规模化用户 | 结构化迁移/doctor/ACP、SQLite+WAL、跨 agent prompt 缓存 |
| **Hermes Agent** | profile 生命周期 + serve→gateway 架构迁移 + 桌面/云端多发行 | 多 profile / 远程模式的高级用户 | gateway 会话权威、Desktop/Store/Docker/Cloud 多通道发布 |
| **CoPaw** | Console 前端 + 本地模型管理插件化 | 桌面/移动浏览器日常使用者 | 本地推理引擎可插拔、渠道（微信/Telegram）适配 |
| **NanoClaw** | 多渠道适配 + 供应链硬化 + setup 工程 | 渠道运营者、关注供应链安全的部署方 | rc 发布工程、hardening 体系、channel skill |
| **ZeroClaw** | 运行时上下文/成本治理 + 安全边界 RFC | 运维视角的部署者、关注成本与授权者 | 配置系统、A2A、记忆 rerank、OIDC 提案 |
| **NanoBot** | WebUI 体验一致性 + 无障碍 | 轻量个人用户 | 纯 WebUI 层迭代、组件化（ComposerPalette） |
| **LobsterAI** | dsh 引擎迁移 + 媒体生成（图像/视频） | 内容创作型用户 | dsh 会话/历史桥、桌面端、skill 生态 |
| **PicoClaw** | 多 provider 配置 | 轻量配置用户 | 维护停滞，社区 fork 分流 |

一句话概括：**OpenClaw 走"基础设施化"，Hermes 走"架构演进+多形态发行"，CoPaw/NanoClaw/LobsterAI 走"桌面与创作体验"，ZeroClaw 走"运维与安全治理"，NanoBot/PicoClaw 走"轻量个人助手"。**

---

## 6. 社区热度与成熟度

**第一梯队 · 高活跃**
- **OpenClaw**、**Hermes Agent**：日均百级更新，主干吸收能力强，但**审查/合并带宽为共同瓶颈**（Hermes 47:3、OpenClaw 307:193）。

**第二梯队 · 迭代中**
- **CoPaw**：高活跃但处于**发布后回归修复潮**（窄屏剪裁、表格溢出、password 循环刷新），属质量巩固阶段，建议统一修复 Console 渲染问题簇。
- **NanoClaw**：发布候选收尾（rc.3 → 稳定版），**质量与供应链安全清理**为当前主线。
- **LobsterAI**：**功能跃迁阶段**（dsh 迁移逐项恢复图像/视频/分叉/人格），但贡献单点依赖 + 安全 Issue 未闭环。
- **ZeroClaw**：**提案与 RFC 活跃、合并停滞**（49:1），处于治理与共识阶段而非交付阶段。

**第三梯队 · 维护/停滞**
- **NanoBot**：稳态打磨，缺陷当日闭环，功能动力弱（#6323 卡性能基线）。
- **PicoClaw**：**维护停滞警示**（#3417 公开宣告疑似无人维护、社区 fork 分流）。

**零活动**：NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw。

---

## 7. 值得关注的趋势信号

1. **"无人值守可靠性"成为核心竞争维度**。OpenClaw 升级半完成、ZeroClaw 渠道卡死、CoPaw 微信静默死亡、NanoClaw Slack 断连不补投——用户把 agent 当 7×24 服务运行，**升级不破坏现有安装、断连可补偿、失败可诊断**已从加分项变成及格线。

2. **凭据安全模型正在从"功能"上升为"架构"**。LobsterAI 的 skill 文档指令即泄露路径、ZeroClaw 的 OIDC/分段授权 RFC、NanoClaw 的供应链 pin/校验和——**"文档与安装脚本本身就是攻击面"** 这一认知正在普及，建议开发者把 skill/安装脚本纳入安全评审。

3. **渠道一致性是长期存量债**。几乎所有多渠项目都在以 Telegram/Slack 为基准补齐其他渠道（审批按钮、引用回复、命令发现性），**渠道适配层缺乏抽象层**是反复投入的根源。

4. **本地推理引擎走向可插拔 + 自动更新**。CoPaw 的插件化+MLX+GPU 三件套、Hermes 的本地引擎注册表，指向**"agent 托管本地模型生命周期"**的明确方向，进程隔离（作业对象/进程组）是必答题。

5. **记忆系统的可信度成为信任锚点**。ZeroClaw #12607 的"漏召回→存错→纠正后双版本并存"完整失效链、CoPaw #8580 索引 503——**记忆一旦失真，用户对 agent 的整体信任会连带受损**，rerank、分块索引、自愈成为必要能力。

6. **审查带宽是生态级瓶颈**。ZeroClaw 49:1、Hermes 47:3、OpenClaw 307 待合并，**纯靠核心维护者评审不可持续**，白名单自审（NanoClaw #4509）、ci-reviewed 优先合并（Hermes #158291/#158289）、批量收口（PicoClaw）是正在出现的应对手段。

7. **测试"假保护"值得警惕**。NanoBot #6729 移除"writer 被替换为空实现后仍通过"的测试、NanoClaw #4498 重写"不可能失败"的测试——**测试可信度治理**开始被当作正式工程议题。

**给开发者的参考**：优先投资升级/迁移的可回滚性与可观测性、渠道适配的抽象层、凭据的非明文传递路径、本地模型进程隔离。这四项是当前生态跨项目最高频的失效源。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-20

## 1. 今日速览

项目今日呈现“高合并、低新增”的维护型节奏：过去 24 小时关闭 1 个 Issue、合并/关闭 12 个 PR，仅 1 个 PR 处于待合并状态，无新版本发布。所有 13 条 PR 更新中有 12 条集中在 WebUI 层（chengyongru 主导），涵盖自动填充安全修复、无障碍焦点管理、输入面板重构与多处交互打磨，说明当前迭代焦点是 WebUI 的稳定性与体验一致性。Issue 侧活动极少（1 条，且当日即关闭），社区讨论热度低，未见高评论量条目。整体项目健康度良好：缺陷响应及时（当日报告、当日修复合并），但核心功能侧新增动力偏弱，主要产出为工程化清理。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 可归纳为三条主线：

**（1）安全与数据保护**
- [#6733](https://github.com/HKUDS/nanobot/pull/6733) `fix(webui): prevent sign-in autofill in channel credentials`：标记共享通道凭据输入框，阻止 Chrome 将其识别为登录字段而填入 WebUI 密码。该 PR 直接对应今日唯一 Issue #6732，从报告到修复闭环同日内完成，是今日最高价值推进。

**（2）输入与会话体验重构**
- [#6738](https://github.com/HKUDS/nanobot/pull/6738) 将 slash / skill / mention 建议弹窗抽取为独立 `ComposerPalette` 模块，统一浮动面板对齐。
- [#6739](https://github.com/HKUDS/nanobot/pull/6739) 超过视口高度 50% 的长用户消息默认折叠。
- [#6737](https://github.com/HKUDS/nanobot/pull/6737) 将 `GoalIsland` 从顶部贴合式凹槽改为独立浮动胶囊。
- [#6740](https://github.com/HKUDS/nanobot/pull/6740) 将 composer palette 与 automation calendar 样式就近归位到组件旁。

**（3）无障碍与交互细节**
- [#6734](https://github.com/HKUDS/nanobot/pull/6734) 焦点指示器按键盘导航模态门控；[#6735](https://github.com/HKUDS/nanobot/pull/6735) 修复指针操作后键盘焦点未恢复的问题。
- [#6741](https://github.com/HKUDS/nanobot/pull/6741) 对齐设置侧栏页脚三行控件（修正 2px 偏移与行高不一致）。
- [#6730](https://github.com/HKUDS/nanobot/pull/6730) 为自定义 reasoning effort 选择器套用主题。
- [#6731](https://github.com/HKUDS/nanobot/pull/6731) 删除带关联自动化的主题时，改用无时限持续确认 toast 替代阻塞式弹窗。

**（4）代码健康**
- #6729 移除了不可达代码与冗余测试（原原子写测试在 writer 被替换为空实现后仍通过，属于“假保护”）。

净推进评估：今日产出以 WebUI 层的一致性、可访问性与安全加固为主，单日合并密度高但变更粒度小，属于稳步收敛而非功能跃迁。

## 4. 社区热点

今日无高讨论度条目，所有 Issue/PR 的 👍 均为 0，Issue 评论数为 0，PR 评论数未提供。

- 唯一有明确互动链路的是 Issue [#6732](https://github.com/HKUDS/nanobot/issues/6732) 与其修复 PR [#6733](https://github.com/HKUDS/nanobot/pull/6733)。其背后的诉求值得关注：浏览器密码管理器把 WebUI 访问密码自动写入各通道凭据字段，用户点击保存后 `config.json` 中的真实凭据被静默覆盖，据 PR 描述可能导致 Telegram 下次启动失败。这类“静默数据损坏”问题比显式报错更危险，用户往往在故障发生后才察觉。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 链接 | Fix 状态 |
|---|---|---|---|
| 高 | WebUI 各通道凭据输入框被浏览器自动填充为 WebUI 访问密码，保存后覆盖 `config.json` 真实凭据，可致 Telegram 启动失败 | [#6732](https://github.com/HKUDS/nanobot/issues/6732) | 已有 fix PR [#6733](https://github.com/HKUDS/nanobot/pull/6733)，均已关闭 |
| 中 | WebUI 流式输出期间执行 `/dream`、`/dream-log`、`/dream-restore`、`/pairing` 等旁路命令，会擦除已显示的回复前缀（对应 NAN-476） | [#6736](https://github.com/HKUDS/nanobot/pull/6736) | 已修复关闭 |
| 中 | 指针操作后键盘快捷键（文件菜单、图片缩放）仍使应用停留在 pointer 模式；#6734 仅抑制焦点环，未恢复模态 | [#6735](https://github.com/HKUDS/nanobot/pull/6735) | 已修复关闭 |
| 低 | 桌面设置页页脚 Local 图标与标签比 Restart / Sign out 左偏 2px，行高与上方留白不一致 | [#6741](https://github.com/HKUDS/nanobot/pull/6741) | 已修复关闭 |
| 低 | 当前 reasoning effort 不在模型有序等级中时，预设菜单回退为原生浏览器下拉，与 WebUI 主题不协调 | [#6730](https://github.com/HKUDS/nanobot/pull/6730) | 已修复关闭 |

今日无崩溃或回归报告。所有已识别缺陷均在当日关闭，无遗留未修复项。

## 6. 功能请求与路线图信号

今日无独立的功能请求 Issue。从已提交 PR 可推断的方向信号：

- **长消息折叠**（#6739，已关闭）：视口高度 50% 的折叠阈值已是明确的产品决策，预计进入下一版本。
- **会话内编辑与重发**（[#6323](https://github.com/HKUDS/nanobot/pull/6323)）：功能已通过验证，但性能未达冻结基线——64 组配对中位数慢 9.27 ms（95% 区间 +3.27 至 +14.12 ms），作者明确标注 “Hold for performance”。这是今日唯一待合并 PR，也是最接近落地的新功能，瓶颈在性能而非设计。
- **GoalIsland 浮动化**与**ComposerPalette 模块化**：属视觉与架构调整，已完成，可作为后续 WebUI 组件化基线。

## 7. 用户反馈摘要

今日 Issue 评论数为 0，无法提炼评价性反馈。可确认的真实用户痛点来自 Issue #6732 的复现描述：用户在多通道凭据配置场景下，浏览器自动填充会破坏已保存的真实配置且无任何提示，属于“无感知的数据损坏”，对依赖多通道（如 Telegram）运行的用户影响直接。满意度方面，缺陷当日报告、当日修复并关闭，响应速度正面；但该问题本身也暴露出凭据表单缺少 `autocomplete` 语义防护的基础缺陷。

## 8. 待处理积压

- **PR [#6323](https://github.com/HKUDS/nanobot/pull/6323)**（`feat(webui): edit and resend messages in the same session`）：创建于 2026-10-20，已挂起约一个月，今日仍有更新，标签含 `conflict`、`priority: p2`。功能已验证但卡在性能基线，且存在冲突。建议维护者明确性能门禁标准（9.27 ms 中位数差异是否可接受），或给出可执行的优化路径，避免特性长期悬置并持续冲突。
- 除上述外，数据中未见其他长期未响应的 Issue 或 PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-20

## 1. 今日速览

项目维持极高活跃度：过去 24 小时 50 条 Issue 更新（47 条新开/活跃、3 条关闭）、50 条 PR 更新（47 条待合并、3 条已合并/关闭），并发布 2 个版本（v0.23.3 稳定补丁版与当日 canary 构建）。v0.23.3 汇总了自 v0.23.2 以来约 370 个已合并 PR，说明主干吞吐量大，但正式整理说明延后至 v0.24.0。今日 PR 队列高度集中在 profile 生命周期修复（#158211、#158272、#158223、#158319）与 serve→gateway 迁移（#157484、#157430），同时 canary 通道持续日更。整体判断：**项目健康度良好但积压压力显著**——合并/关闭仅 3 条 PR 对 47 条待合并，审查带宽是当前主要瓶颈。

## 2. 版本发布

**v0.23.3（稳定版，2026-11-19）**
- Patch release，汇总自 v0.23.2 以来约 370 个已合并 PR，覆盖 GitHub release 渠道（CLI 与安装器）、Microsoft Store 应用、Docker 与 Hermes Cloud。
- 本窗口的完整精选说明将随 v0.24.0 发布，因此 v0.23.3 本身**未提供逐条变更清单**。
- 破坏性变更与迁移注意事项：所供材料中未提及，建议以 v0.24.0 说明为准。
- 链接：见 Releases 列表（v0.23.3）

**v0.23.3+canary.20261120T064609Z（2026-11-20）**
- 当日 canary 构建，下载表覆盖 Hermes Desktop（含 macOS Apple Silicon DMG；材料中表格被截断，其余平台信息未完整提供）。
- 链接：见 Releases 列表（canary 标签）

## 3. 项目进展

今日合并/关闭的 PR 共 3 条，所供材料中未列出其标题与内容，因此无法说明具体推进的功能。可确认的推进信号来自已合入主干的 PR 引用：

- **serve→gateway 迁移**：PR #157376 已合并，构成 9 部分迁移的早期环节；后续 #157430（`--backends --apply/--restore/--status`，含回滚、per-home 运行锁、更新标记）与 #157484（更新后命名旧 serve/dashboard 后端）仍待合并。链接：https://github.com/NousResearch/hermes-agent/pull/157430 、https://github.com/NousResearch/hermes-agent/pull/157484
- **profile 多进程竞态修复系列**（#158211 clone 复制登录凭据、#158223 create 竞态报错、#158272 delete 未完成时如实报告、#158319 rename 重键 sessions.json）集中出现，若合入将系统性改善多 profile 场景可靠性。

整体推进幅度：主干吸收能力强（v0.23.3 汇总约 370 PR），但当日审查输出有限。

## 4. 社区热点

- **#146440 Windows 下 Kanban managed worker 卡死**（10 条评论，创建 2026-10-29，持续活跃）：两个缺陷叠加——git 子进程继承 stdin 控制管道、用户目录插件惰性导入 numpy 导致死锁。反映 Windows 上 agent 初始化路径的脆弱性。链接：https://github.com/NousResearch/hermes-agent/issues/146440
- **#156470 浏览器 webapp 中 `ctx.os.pickOpenPath` 返回暂存路径而非所选文件**（8 条评论）：插件 SDK 文件对话框语义错误，影响第三方插件开发。链接：https://github.com/NousResearch/hermes-agent/issues/156470
- **#145171 入口切换跟踪 Issue**（7 条评论）：serve、远程 Desktop 与 web 迁移到 gateway 会话权威，是当前架构演进主线。链接：https://github.com/NousResearch/hermes-agent/issues/145171
- **#148531 owner-backfill 在分离拓扑下 409**（6 条评论）与 **#126127 Kanban worker 以 workspace 为 cwd 导致模块遮蔽**（6 条评论）：均指向部署拓扑与子进程启动方式的隐患。链接：https://github.com/NousResearch/hermes-agent/issues/148531 、https://github.com/NousResearch/hermes-agent/issues/126127

**诉求分析**：热点集中在 Windows 兼容性、gateway/serve 双拓扑过渡期状态一致性、以及插件 SDK 可靠性——均属"进入生产使用后暴露的集成层问题"，而非核心 agent 能力缺陷。

## 5. Bug 与稳定性

按严重程度排列（是否已有 fix PR 以所供材料可确认者为准）：

**P2（高）**
- #146440 Windows Kanban worker 冻结（agent 初始化死锁，含 2 个叠加缺陷 | 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/146440
- #156470 webapp 文件选择返回错误路径（| 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/156470
- #147070 Anthropic 429 时 `_recover_rate_limit` 先睡至多 600s 才轮换凭据池（| 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/147070
- #126127 Kanban spawn 工作目录可遮蔽已安装 `hermes_cli`（建议 `-P` | 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/126127
- #158256 `HERMES_HOME` 在 `~/.hermes` 之外时 `--idle-exit` 永不退出（今日新建 | 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/158256
- #137801 Desktop GPT-Live 语音忽略 bot 的 profile 设置（| 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/137801
- #118699 `skill_manage` 批量回滚把符号链接目录变成真实目录（| 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/118699
- #138259 Windows Desktop 后端崩溃重启后助手消息重复渲染（标记 needs-repro | 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/138259
- #118486 codex_app_server `turn_timeout` 硬编码 600s、无配置入口（| 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/118486
- #156436 Windows MSYS bash `-c` 8192 wchar 截断导致所有 terminal 命令失败（| 未见 fix PR）— https://github.com/NousResearch/hermes-agent/issues/156436
- #148114 重复 messages 行且 `message_uid` 被重铸，uid-only 刷新守卫无法覆盖（| 相关草稿 PR #134799，材料中未确认状态）— https://github.com/NousResearch/hermes-agent/issues/148114

**P2 且有 fix PR**
- profile 删除未完成时被静默隐藏 → PR #158272：https://github.com/NousResearch/hermes-agent/pull/158272
- profile clone 复制根目录登录凭据 → PR #158211：https://github.com/NousResearch/hermes-agent/pull/158211
- profile create 跨进程竞态 → PR #158223：https://github.com/NousResearch/hermes-agent/pull/158223
- profile rename 未重键 `sessions.json` → PR #158319：https://github.com/NousResearch/hermes-agent/pull/158319
- webapp 存储配额满时发送中止 → PR #158241：https://github.com/NousResearch/hermes-agent/pull/158241
- 测试套件 `plugins` 模块污染（43 个错误）→ PR #158295：https://github.com/NousResearch/hermes-agent/pull/158295

**P3**
- #156460 CrowdStrike 误杀 `contributors/emails/` 文件致 `hermes update` 失败（cause/upstream）— https://github.com/NousResearch/hermes-agent/issues/156460
- #138618 Kanban 陈旧 rate-limit 错误残留、阻塞 review 卡片（标记 needs-decision）— https://github.com/NousResearch/hermes-agent/issues/138618

## 6. 功能请求与路线图信号

- **技能索引描述宽度可配置**：Issue #150523 指出 60 字符上限是 100+ 技能间的唯一选择信号 → 对应 PR #158291（`skills.index_desc_limit`）已提交并标记 ci-reviewed，**进入下一版本概率高**。链接：https://github.com/NousResearch/hermes-agent/pull/158291
- **自主提醒调度**：PR #158289 让 Hermes 主动发现可提醒事项并在保存前请求批准（ci-reviewed），是 cron 能力向主动助手演进的重要信号。链接：https://github.com/NousResearch/hermes-agent/pull/158289
- **本地引擎注册表**：PR #142566 允许选择/新增/编辑/测试 llama.cpp 等引擎二进制（当前仅支持受管构建）。链接：https://github.com/NousResearch/hermes-agent/pull/142566
- **桌面端子智能体展示可配置**：PR #158323（仅列运行中、开标签页查看）。链接：https://github.com/NousResearch/hermes-agent/pull/158323
- **`hermes://launch` 深链**：PR #158326 提供仅唤起应用的链接。链接：https://github.com/NousResearch/hermes-agent/pull/158326
- **非交互、按 provider 的 JSON 模型发现**（#105413，P3）：面向集成的可脚本化元数据接口。链接：https://github.com/NousResearch/hermes-agent/issues/105413
- **Bot Screen 剪贴板租约式复制/粘贴**（#154571）。链接：https://github.com/NousResearch/hermes-agent/issues/154571
- **CLI 阻塞于 clarify 时发桌面通知**（#47403，macOS）。链接：https://github.com/NousResearch/hermes-agent/issues/47403

## 7. 用户反馈摘要

- **多 profile 是核心使用场景，但语义边界不清**：clone 不复制 `auth.json` 导致静默回退到默认 profile 登录、删除失败却隐藏 profile、rename 不更新路由镜像——用户在多 profile / 远程模式下反复踩坑。
- **Windows 是主要痛点来源**：Kanban worker 冻结、消息重复渲染、MSYS 参数截断、CrowdStrike 误杀，多个问题均带 `os/windows` 标签，说明 Windows 生产可用性仍不足。
- **凭据与配额管理令人不满**：Anthropic 429 时先等最多 600 秒再换 key，被视为明显低效（#147070）；陈旧 rate-limit 错误残留会持续阻塞任务（#138618）。
- **插件与技能生态体验待改善**：webapp 文件选择返回错误路径、技能描述被截断导致模型错过正确技能转而联网搜索。
- **用户希望减少"沉默阻塞"**：CLI 卡在 clarify 提示时无任何通知（#47403），反映后台/IDE 工作流下的可用性诉求。

## 8. 待处理积压

- **#47403**（创建 2026-06-16，P3）：CLI clarify 桌面通知，已超 5 个月未解决。https://github.com/NousResearch/hermes-agent/issues/47403
- **#105413**（创建 2026-09-07，P3）：非交互 JSON 模型发现，集成方长期需求。https://github.com/NousResearch/hermes-agent/issues/105413
- **#118486**（创建 2026-09-21，P2）：codex_app_server 超时硬编码，影响长任务可靠性。https://github.com/NousResearch/hermes-agent/issues/118486
- **#118699**（创建 2026-09-22，P2）：技能目录符号链接被破坏，涉及数据完整性。https://github.com/NousResearch/hermes-agent/issues/118699
- **#126127 / #145171 / #138618**（2026-09/10）：Kanban 与 gateway 架构类问题需决策。https://github.com/NousResearch/hermes-agent/issues/126127
- **PR #142566**（创建 2026-10-21）：本地引擎注册表，体量较大且已停留约一个月。https://github.com/NousResearch/hermes-agent/pull/142566
- **审查积压**：47 条待合并 PR 对 3 条今日合并/关闭，建议优先清理 4 条 profile 修复 PR 与已 ci-reviewed 的 #158291、#158289、#158326。

---
*说明：本日报仅基于所提供的 GitHub 数据生成；材料中未包含今日已合并/关闭 PR 的具体内容、v0.23.3 的逐条变更及完整下载表，相应部分已如实标注。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-20

> 数据来源：sipeed/picoclaw 过去 24 小时 GitHub 动态。链接均指向该仓库对应编号条目。

## 1. 今日速览

过去 24 小时项目无新版本发布，共 3 条 Issue、7 条 PR 发生更新，其中 1 条 Issue 关闭、7 条 PR 全部关闭/合并，待合并 PR 为 0。合并侧以 4 条 dependabot 依赖升级（Go 生态）和 3 条跨年份的批量合并 PR 为主，功能性推进有限。最值得关注的信号是 #3417 公开宣告仓库“目前疑似无人维护”并由社区成员建立 fork 持续维护，这是项目健康度的明确警示。整体活跃度评估：**低-中等，且以维护性清理为主，缺乏功能开发信号**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日 7 条 PR 均以 CLOSED 状态结束，无 OPEN 待合并项：

- **依赖升级（4 条，均标记 dependencies/go/stale）**：line-bot-sdk-go v8 8.20.1→8.23.0（#3459）、modernc.org/sqlite 1.53.0→1.61.1（#3458）、azure-sdk-for-go azidentity 1.14.0→1.15.0（#3460）、golang.org/x/time 0.15.0→0.16.0（#3457）。均为常规版本跟进，无破坏性变更说明。
- **批量合并修复（3 条，作者 xuwei-xy，均创建于 2026-03-14）**：#1559 合并 #1327/#1319/#1318/#1313，#1560 合并 #1312/#1311/#1308，#1555 合并 #1390/#1389/#1383/#1381。

客观判断：仓库确实在接收更新，依赖生态保持跟进；但合并动作集中在机器人依赖升级与 8 个月前旧 PR 的批量收口，未见新功能或面向用户的修复被推进。项目向前迈进幅度**有限**。

## 4. 社区热点

按评论数排序：

1. **#3417 [OPEN] Active Fork & Continued Maintenance: afjcjsbx/picoclaw**（5 条评论）— 作者 afjcjsbx 称仓库“appears to be unmaintained”，社区需求仍在，故建立并积极维护 fork。这是今日评论最多、信号最强的话题，反映社区对官方维护节奏的不满与自救情绪。
   https://github.com/sipeed/picoclaw/issues/3417
2. **#3454 [OPEN] 模型标识校验建议小写化未知 provider 前缀**（4 条评论）— 涉及大小写敏感的上游模型 ID 被误判，见下节。
   https://github.com/sipeed/picoclaw/issues/3454
3. **#3461 [CLOSED] Web UI 无法启动 gateway（无 API key 的 provider）**（2 条评论）— 已关闭。
   https://github.com/sipeed/picoclaw/issues/3461

## 5. Bug 与稳定性

- **#3454 [OPEN]（中高）**：模型编辑表单对非 picoclaw provider 前缀的上游模型 ID（如大小写敏感的 `ACME/gpt-4o-mini`）给出错误警告并建议小写化前缀，可能破坏大小写敏感上游模型的可用性。属校验逻辑缺陷，非崩溃；标记 stale，**未见对应 fix PR**。
  https://github.com/sipeed/picoclaw/issues/3454
- **#3461 [CLOSED]（中）**：控制台可用但 Web UI 无法启动 gateway，场景为配置了无 API key 的 provider（`provider: ""`、`model: kilo-auto/...`）。已关闭，数据中未提供修复 PR 或解决方案说明。
  https://github.com/sipeed/picoclaw/issues/3461

今日无崩溃或回归类报告。

## 6. 功能请求与路线图信号

- **Web UI 启动 gateway 的能力**（#3461）：用户期望在 Web UI 中直接启动 gateway，而非仅能通过控制台操作。Issue 已关闭但未见对应功能 PR，短期纳入下一版本的可能性不明。
- **灵活的模型标识校验**（#3454）：需求指向支持任意上游命名空间与大小写敏感 ID。属于配置灵活性改进，与 #3461 的“无 API key provider”场景同属多 provider 配置体验问题，值得作为一组处理。

综合判断：今日无任何功能类 PR 在途，上述需求**暂无进入下一版本的明确信号**。

## 7. 用户反馈摘要

- **真实痛点**：用户已能配置无 API key 的 provider 并跑通控制台，但 Web UI 缺少启动入口，形成“能用但不好用”的割裂体验（#3461）。
- **配置误伤**：内置校验逻辑对合理的上游模型 ID 给出误导性警告，增加配置成本与困惑（#3454）。
- **维护满意度偏低**：社区仍有关注与需求，但认为官方仓库趋于停滞，已出现由社区成员建立 fork 的公开宣告（#3417），是今日最具代表性的负面反馈。

## 8. 待处理积压

- **#3417（2026-10-06 创建，持续活跃）**：#3417 是当前最重要的积压项——它已不仅是 issue，而是关于项目归属与维护承诺的公开质询，建议维护者正面回应维护计划。
  https://github.com/sipeed/picoclaw/issues/3417
- **#3454（2026-10-28 创建，标记 stale）**：已 stale 但仍无修复 PR，存在被自动关闭而问题留存的风险。
  https://github.com/sipeed/picoclaw/issues/3454
- **PR 侧**：#1555 / #1559 / #1560 自 2026-03-14 起搁置逾 8 个月才于今日关闭，说明历史 PR 积压清理周期极长；建议维护者明确批量合并类 PR 的处理规范，避免同类堆积。

---

**健康度小结**：依赖跟进正常、Issue 响应有动作，但功能开发停滞、长期积压严重、出现社区 fork 分流信号。建议优先回应 #3417 的维护承诺问题，并对 #3454 给出确定性修复或明确不修的理由。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-20

## 1. 今日速览

项目今日处于发布候选阶段的收尾状态：`v2026.11.0-rc.3` 已发布，定位为"若无测试问题即转正"的最终候选版本，同时 `v2026.11.0` 稳定版发布 PR 已提交并关闭待审。24 小时内 Issues 更新 19 条（新开/活跃 12、关闭 7），PR 更新 18 条（待合并 9、已合并/关闭 9），活跃度较高。今日活动的显著特征是一名核心维护者（glifocat）集中提交了大量 hardening（安全加固）类 Issue 与对应修复 PR，以及若干渠道（WhatsApp、Slack、Mattermost、Telegram）的缺陷报告。整体看，项目在稳定版发布前进行了一轮密集的质量与供应链安全清理，健康度良好但待合并队列中积压了多个安全相关 PR。

## 2. 版本发布

**v2026.11.0-rc.3**（2026.11.0 的第三个发布候选）

- 定位：预期作为稳定版发布的构建；若测试未发现问题，将不再有 beta 版本，直接转正。
- 版本关系：11 月版本取代 `2026.10.1`——后者不会成为稳定版，其两个发布候选停留在已发布状态。
- 破坏性变更：所给材料未披露具体变更内容，无法确认是否存在破坏性变更。
- 迁移注意事项：材料未提供迁移说明。建议关注随后 `v2026.11.0` 稳定版发布 PR（#4508）的完整变更清单。

发布 PR：[#4508 chore(release): v2026.11.0](https://github.com/nanocoai/nanoclaw/pull/4508)（已关闭，基于 `main` @ `b6155f422`，含 rc.3 及 #4488、#4489、#4245、#4498、#4506）

## 3. 项目进展

今日合并/关闭的 PR 覆盖发布流程、文档、测试质量与缺陷修复四个方向：

- **发布流程**：[#4509](https://github.com/nanocoai/nanoclaw/pull/4509) 允许白名单维护者自行批准稳定版发布，解除 `release` 环境对所有人的自审限制——直接影响 2026.11.0 的发布节奏。
- **文档准确性**：[#4506](https://github.com/nanocoai/nanoclaw/pull/4506) 修复 README 中与 `main` 不符的陈述（对应 Issue #4505），范围仅限 README，保持原有结构与锚点。此修复有实际功能意义：setup 的失败辅助逻辑会读取 README（`setup/lib/claude-assist.ts:78`）。
- **测试可信度**：[#4498](https://github.com/nanocoai/nanoclaw/pull/4498) 重写 `src/cli` 中"不可能失败"的测试，消除用被测代码构造期望值、重复断言等问题（对应 Issue #4497）。
- **安装健壮性**：[#4488](https://github.com/nanocoai/nanoclaw/pull/4488) 修复 setup 步骤在原始日志无法打开时崩溃的问题，改为日志落盘后才判定步骤结束（对应 Issue #4486）。
- **技能兼容性**：[#4489](https://github.com/nanocoai/nanoclaw/pull/4489) 使 `/add-vercel` 安装后仍可正常更新（对应 Issue #4459）。
- **存储膨胀**：[#4245](https://github.com/nanocoai/nanoclaw/pull/4245) 修复循环任务每次重新装载都向会话 `inbound.db` 写入完整任务负载的问题（该 PR 自 11-01 创建，今日关闭）。

整体推进幅度：以质量与发布工程为主，外加一项长期挂起的存储修复；核心运行时行为无重大新增功能。

## 4. 社区热点

所给数据中所有展示条目的评论数与点赞数均为 0 或未提供，**无法据实判断今日讨论最活跃的条目**。可确认的有限信号是：仅 Issue #4501 与 #4340 各显示 1 条评论。以下按议题集中度列出今日结构性热点：

- **渠道层缺陷集中爆发**：WhatsApp 引用回复丢失上下文（[#4501](https://github.com/nanocoai/nanoclaw/issues/4501)）、Slack Socket Mode 断线期间消息不补投（[#4502](https://github.com/nanocoai/nanoclaw/issues/4502)）、Mattermost 斜杠命令未注册（[#4503](https://github.com/nanocoai/nanoclaw/issues/4503)）、Telegram 把 `#数字` 行渲染为标题（[#4340](https://github.com/nanocoai/nanoclaw/issues/4340)）。背后诉求是：多渠道适配层的"会话上下文完整性"和"命令发现性"仍不达标，尤其 Slack 的 agent-to-agent 房间能力领先其他渠道（见 #4504）。
- **供应链安全清理**：glifocat 一日内提交 6 条 hardening Issue（#4490–#4494、#4496）并配套 PR（#4495、#4499）。诉求明确：依赖固定（pin）缺少版本、校验和、摘要固定与陈旧度监控。

## 5. Bug 与稳定性

按影响程度排序：

**高**
- [#4502](https://github.com/nanocoai/nanoclaw/issues/4502) Slack（Socket Mode）：主机挂起或断连期间的消息永不处理，重连后无补偿。影响 `2026.11.0-rc.2`。**无 fix PR**。属消息丢失类问题。
- [#4501](https://github.com/nanocoai/nanoclaw/issues/4501) WhatsApp：引用回复到达 agent 时丢失被引用消息。影响 `v2026.11.0-rc.1`，并已确认 `channels` 分支同样无回复处理逻辑。**无 fix PR**。

**中**
- [#4486](https://github.com/nanocoai/nanoclaw/issues/4486) setup 步骤运行器在原始日志无法打开时崩溃 —— **已修复**（[#4488](https://github.com/nanocoai/nanoclaw/pull/4488) 已关闭）。
- [#4503](https://github.com/nanocoai/nanoclaw/issues/4503) Mattermost 斜杠命令仅靠文本解析、未注册到自动补全，影响 `v2.3.0`。**无 fix PR**。
- [#4340](https://github.com/nanocoai/nanoclaw/issues/4340) Telegram `#<数字>` 行被渲染为大标题（Markdown 渲染误判），自 11-12 起活跃。**无 fix PR**。
- [#4507](https://github.com/nanocoai/nanoclaw/issues/4507) setup 镜像来源提示与注册表登录实际传输的信息不一致，影响 `main @ ddf824e8`。**无 fix PR**。

**已关闭**
- [#4459](https://github.com/nanocoai/nanoclaw/issues/4459) `/add-vercel` 应用后 `cli-tools.test.ts` 的"no vercel"守卫失败 —— 已修复（#4489）。

## 6. 功能请求与路线图信号

- **Mattermost 引入 agent-to-agent 房间**：[#4504](https://github.com/nanocoai/nanoclaw/issues/4504) 请求将 Slack 的 `slack-a2a-rooms`（人类 + 同组机器人共处一个群 DM）移植到 Mattermost。当前 Mattermost 上 agent 完全无法互相对话。标记 `delivery/skill` + `triage/unresolved`，**无对应 PR**。结合 #4503，Mattermost 渠道是当前能力洼地；但今日未见纳入下一版本的实现迹象。
- **新 provider 技能**：[#4442](https://github.com/nanocoai/nanoclaw/pull/4442) 新增 `/add-antigravity`，通过 Google Antigravity CLI（`agy`）与 Gemini 模型按群组切换 provider，可配合 `ncl groups config update --provider antigravity` 使用。PR 处于待合并状态，若合入将扩展 provider 矩阵，是下个版本较可能落地的新能力。

**判断依据说明**：仅凭所给材料无法确认哪些需求被官方排期；上述"可能性"仅基于是否存在对应 PR。

## 7. 用户反馈摘要

- **不稳定/丢消息是最大痛点**：Slack 用户明确描述了 systemd user service + linger 的长期运行场景（#4502），说明存在"始终在线"型部署诉求，而当前断连恢复机制缺位。
- **跨渠道体验不一致**：用户对比 Slack 与 Mattermost，认为后者"agent 无法互相对话"，并指出命令仅靠文本解析"能用但不是正规注册"——反映出对一致性和可发现性的期待（#4503、#4504）。
- **格式渲染误判影响可读性**：`#467 is closed.` 被渲染成大标题，属日常 agent 回复中的高频场景（#4340）。
- **setup 体验的诚实性**：两条反馈（#4505、#4507）都指向"setup 告诉用户的事情与实际不符"，且 README 被 setup 失败辅助逻辑实际读取，文档错误会转化为用户可见的误导（#4505 已修复）。
- **满意度**：材料中无正面评价数据，无法评估用户满意面。

## 8. 待处理积压

- **[#2752](https://github.com/nanocoai/nanoclaw/pull/2752)**（OPEN，创建于 2026-06-12，今日仍有更新）Discord 仅含 URL 的附件无法被 agent 读取。挂起逾 5 个月，涉及 Discord 渠道可用性。
- **[#4247](https://github.com/nanocoai/nanoclaw/pull/4247)**（OPEN，创建于 2026-11-02）跨会话上下文：将附件复制到 echo 并回填历史行。涉及 `area/security`、`area/sessions` 等多个核心区域，审查成本高，已挂起约 18 天。
- **[#4308](https://github.com/nanocoai/nanoclaw/pull/4308)**（OPEN，dependabot，创建于 2026-11-09）`actions/checkout` 从 4.4.0 升至 7.0.1，跨三个大版本，可能因破坏性变更而长期停留待审。
- **[#4442](https://github.com/nanocoai/nanoclaw/pull/4442)**（OPEN，创建于 2026-11-17）`/add-antigravity` 技能，规模较大、涉及容器与 setup，需关注是否会阻塞 2026.11.0 之后的合并窗口。
- **#4490–#4496 六条 hardening Issue 均为 `triage/unresolved`**：其中 #4495（Iron Proxy 升级至 v0.59.0）、#4499（Bun 升至 1.4.5）已有 PR，但 #4490（基础镜像按 tag 而非 digest 固定）、#4491（dashboard 无版本安装）、#4492（mnemon 无校验和下载）、#4493（`not-covered.json` 无监控）仍无修复，建议优先分诊。

---

**数据完整性说明**：所给 PR 列表的评论数字段均为 `undefined`，因此"评论最多/反应最多"的排名无法计算；本文未对任何未在材料中出现的指标、日期或链接做补充。

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

# LobsterAI 项目日报 · 2026-11-20

## 1. 今日速览
今日项目活跃度**高**，且呈现出明显集中的特征：过去 24 小时 PR 更新 19 条，其中 15 条合并/关闭、4 条待合并；合并动作几乎全部由 btc69m979y-dotcom 一人完成，围绕 `dsh` 引擎迁移的系列修复与功能恢复（#3125–#3135）成批合入，另有一条 2026.11.17 的发布分支 PR（#3133）被合并。Issue 侧仅 1 条更新，但该 Issue 直指官方 skill 的凭据处理安全缺陷，值得重视。无新版本发布。整体健康度：交付节奏强，但**贡献者高度集中、安全类 Issue 未闭环**是两个需关注的风险点。

## 2. 版本发布
今日无新版本发布，无破坏性变更或迁移事项。附带说明：发布分支 PR #3133（`Release/2026.11.17`）已于今日合并，但本次数据未包含对应 release 记录，具体发布内容无法据此确认。
- 链接：netease-youdao/LobsterAI PR #3133

## 3. 项目进展
今日合并/关闭的 PR 主线是**围绕 dsh 引擎恢复既有能力并修复迁移回归**：

- **媒体能力回归**：#3125 将图像生成工具接入 dsh 会话，复用既有的模型选择、确认、计费与产物交付链路；#3127 恢复视频生成与历史内容播放，保留逐单桌面确认、任务归属与文件链接。#3125 还标注涉及 `openclaw` 区域。
  - 链接：#3125、#3127
- **视觉历史与预览**：#3134 在桌面端迁移过程中保留发布对话中上传/粘贴的图片，写入 LobsterAI profile 并向 dsh 历史桥提供本地文件引用。
  - 链接：#3134
- **专家人格恢复**：#3132 启动迁移时从 SQLite 存储值恢复缺失的自定义与预设 expert persona 文件，并保留已编辑文件与有意清空的字段。
  - 链接：#3132
- **Cowork 问答闭环**：#3131 将用户问答（稳定问题 ID、选项标签、跳过题目、自由文本答案、取消传播）正确回传给 dsh。
  - 链接：#3131
- **皮肤创建/应用恢复**：#3130 注册 Skin Designer 工具至 dsh host，并沿用会话绑定的 kit handler。
  - 链接：#3130
- **对话分叉**：#3135 支持在所选 assistant 事件处（含该事件）分叉 dsh 原生对话，并把保存的序号绑定到其来源 dsh 会话。
  - 链接：#3135
- **启动稳定性修复**：#3126 修复 `webFrame.setZoomFactor(1)` 在隐藏窗口上调用触发 Electron #51972 回归、导致 ready-to-show 丢失的问题（该问题由 #3106 引入）。
  - 链接：#3126
- **首页交互打磨**：#3129 抽取可复用 `QuickActionChip`，统一首页快捷操作与 PPT 向导导航。
  - 链接：#3129
- **CI 依赖清理**：长期挂起的 #2579（actions/checkout 4→7）、#2580（actions/cache 4→6）已关闭。
  - 链接：#2579、#2580

评估：项目在 dsh 迁移方向上完成了从"能力缺失"到"逐项恢复"的关键一步，功能完整度显著回升，同时清掉了两条陈旧 CI 积压。

## 4. 社区热点
今日唯一有实质讨论的条目是 Issue #3120（3 条评论），这也是评论数最高的条目。数据中未提供 PR 的评论数（均为 `undefined`），因此无法比较 PR 讨论热度。

- **#3120 [OPEN] youdaonote：API Key 以明文命令行参数传递，安装脚本缺少版本与校验**
  - 作者：Dimooyoyo；创建 2026-11-19，更新 2026-11-20；👍 0
  - 链接：netease-youdao/LobsterAI Issue #3120
  - 分析：诉求核心是**凭据安全模型**，而非单一笔误。Issue 指出 `SKILL.md:18` 要求 Agent 执行 `youdaonote config set apiKey <用户提供的Key>`，导致明文 Key 同时出现在模型上下文、命令行参数、shell 历史与进程列表中，且 `SKILL.md:57`、`SKILL.md:152` 示例沿用同一形式；作者明确将其定性为"官方 skill 目前主要的凭据暴露面"。这指向一个更普遍的设计问题：**官方 skill 文档中对 Agent 下达的指令，会直接成为凭据泄露路径**，修复需同时涉及文档规范（改为 stdin/环境变量/交互式输入）与安装脚本的版本锁定与校验。

## 5. Bug 与稳定性
按严重程度排列：

| 级别 | 问题 | 状态 |
|---|---|---|
| 高（安全） | #3120 API Key 明文进入命令行、shell 历史与进程列表，官方 skill 文档要求的调用方式即为泄露路径；附带安装脚本缺少版本与校验 | **无 fix PR**，Issue 仍 OPEN |
| 中（回归） | #3126 preload 顶层无条件 `setZoomFactor(1)` 在隐藏窗口触发 Electron #51972（影响 40.x–43.x，项目使用 43.5.0），造成 ready-to-show 丢失 | **已修复**，PR #3126 已合并 |
| 中（迁移数据可见性） | 桌面迁移导致发布对话中的上传/粘贴图片丢失 | **已修复**，PR #3134 已合并 |
| 中（迁移状态） | 启动迁移后自定义/预设 expert persona 文件缺失 | **已修复**，PR #3132 已合并 |
| 低（功能链路） | Cowork 问题答复未能正确送达 dsh（问题 ID、标签、跳过、自由文本、取消传播） | **已修复**，PR #3131 已合并 |

提示：#3126 描述中提及的 Electron 版本回归区间（40.x–43.x）与 #3037 的 Electron 升级 PR 存在交叉，值得留意。

## 6. 功能请求与路线图信号
数据中**没有明确的新功能请求类 Issue**；路线图信号主要来自已合并的 dsh 迁移 PR 与仍开放的两个 PR：

- **可能已进入/临近下一版本**：#3125 图像生成、#3127 视频生成、#3130 皮肤设计器、#3135 对话分叉、#3132 人格恢复、#3131 问答回传——这些能力已合并并随发布分支 #3133 一同推进，若发布分支已包含则已进入 2026.11.17 版本。
- **尚未合入、判断需谨慎**：
  - #3128 [OPEN] `fix(browser): restore in-app browsing with the dsh engine`——将可访问性树与可复用元素 ID 交给 dsh 模型，浏览器活动映射到对应 Cowork 会话，截图以 MCP 图像返回或本地保存。这是"应用内浏览"能力恢复的关键缺口，合并后 dsh 迁移才较完整。
    - 链接：#3128
  - #3036 / #3037 [OPEN] 开发依赖升级：fast-xml-parser 5.11.1→5.12.0、electron 43.5.0→43.8.7。
    - 链接：#3036、#3037
- **安全类改进**：#3120 所提的"以非明文方式传入 Key"与"安装脚本版本锁定与校验"，目前无对应 PR，若维护者响应，可能成为下一版本的改动项。

## 7. 用户反馈摘要
可提炼的反馈仅来自 Issue #3120（3 条评论，内容未提供，仅能依据摘要）：

- **不满意**：官方 skill 的默认操作方式把用户的 API Key 暴露在模型上下文、命令行、shell 历史与进程列表中，用户认为对官方 skill 而言不可接受；同一文档中多处示例重复该模式，说明问题具系统性而非个例。
- **不满意**：安装脚本没有版本约束与完整性校验，用户对安装环节的可信度存疑。
- **使用场景**：用户在对话中向 Agent 提供你道笔记（youdaonote）的 API Key，由 Agent 代为执行配置命令——典型"助手代操作本地工具"场景，也正是凭据暴露面最大的场景。
- 其余 Issues/PRs 无评论内容可供提炼，故不作推断。

## 8. 待处理积压
- **#3120**（2026-11-19 创建，今日仍有更新，3 条评论，OPEN）——**最高优先**。安全类问题且无 fix PR，距今仅 1 天但仍处无人认领状态，建议尽快指派并明确修复方案。
  - 链接：netease-youdao/LobsterAI Issue #3120
- **#3128**（2026-11-20 创建，今日更新，OPEN）——dsh 迁移中浏览器能力的缺口，与其他已合并的迁移 PR 同批推进，建议优先评审以完成本轮迁移闭环。
  - 链接：netease-youdao/LobsterAI PR #3128
- **#3036 / #3037**（均创建于 2026-11-09，今日更新，OPEN，dependabot）——已挂起 11 天，属常规依赖升级，可批量评审；其中 #3037 触及 Electron 版本，需与 #3126 所涉 Electron 回归区间一并验证。
  - 链接：#3036、#3037
- **维护者结构风险**：今日 15 条合并/关闭中绝大多数来自 btc69m979y-dotcom，需关注评审与交付的**单点依赖**，避免关键贡献者缺席时积压快速累积。

*说明：本日报仅依据所给 GitHub 数据生成；PR 评论数在数据中为 `undefined`，故未做热度排序推断；Issue #3120 的评论正文未提供，相关分析限于其摘要内容。*

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

# CoPaw 项目日报 · 2026-11-20

> 数据源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 数据。数据中 Issue/PR 链接标注为 `QwenPaw` 仓库条目，以下按原始链接保留。

## 1. 今日速览

项目今日处于**高活跃、修复驱动**状态：24 小时内 Issues 更新 18 条（14 新开/活跃、4 关闭），PR 更新 48 条（30 待合并、18 已合并/关闭），无新版本发布。社区提交明显集中在 Console 前端渲染与布局缺陷（窄屏剪裁、表格溢出、键盘滚动、password 组件循环刷新），显示 v2.3.0.post1 发布后出现了一轮 UI 回归反馈潮。同时本地模型生命周期管理是另一条主线：Windows 上 `llama-server.exe` 残留进程与已关闭的"本地模型管理插件化"大型 PR 相互呼应。整体健康度：**响应速度快（多个今日新开 Issue 当天即有对应 fix PR），但前端回归密度偏高，需关注质量门禁**。

## 2. 版本发布

无（过去 24 小时新版本发布 0 个）。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#8499 [CLOSED] [size/XXXL] feat(providers): 将本地模型管理抽取为插件** — Leirunlin。插件接管模型下载、llama.cpp 安装与服务生命周期，宿主保留模型选择与统一推理，并保留现有用户配置。这是本日体量最大的合入方向。
- **#8512 [CLOSED] [size/S] fix(providers): 从错误文本读取网关上报的状态码** — 修复 #8505：当 OpenAI 兼容网关返回仅含状态提示文本的裸 `APIError` 时，可从消息文本中回退解析状态码。
- **#8784 [CLOSED] [Under Review, size/XL] fix(skills): 回滚备份保留至所有工作区恢复完成** — 修复多工作区技能安装回滚路径上的五处薄弱点。

整体看，项目在「本地模型管理架构重构」与「错误处理/回滚可靠性」两个方向上有实质推进；但 30 条 PR 仍待合并，其中包含多组大型关联 PR，合并节奏仍偏慢。

## 4. 社区热点

- **#8580 [OPEN] Memory tag 索引永不重建，`/memory/tags` 返回 503**（6 评论，本日评论最多）。
  https://github.com/agentscope-ai/QwenPaw/issues/8580
  用户已开启 `auto_memory_generate_tags`，标签能生成却读不到——诉求是记忆系统的可观测性与自愈能力，属于影响核心记忆功能可用性的高优先级问题。
- **#8811 [OPEN] 窄屏下整条消息被剪裁，超宽内容无法横向滚动**（4 评论）。
  https://github.com/agentscope-ai/QwenPaw/issues/8811
  升级到 v2.3.0.post1 后出现，移动端 375px 视口下明显；与 #8845、#8844 构成同一「Console 消息渲染」问题簇。
- **#8505 [CLOSED] 网关裸 APIError 被归类为 unknown，无重试、无模型回退**（3 评论）。
  https://github.com/agentscope-ai/QwenPaw/issues/8505
  已由 #8512 修复关闭。
- **#8123 [OPEN] Daily Paper 在模型输出截断时整体失败（ToolJSONDecodeError），无单篇重试**（3 评论，创建于 10-08）。
  https://github.com/agentscope-ai/QwenPaw/issues/8123
  长期未解，反映结构化输出鲁棒性是定时任务场景的痛点。
- **#8821 [CLOSED] [enhancement] 任务结束后支持 Windows 原生系统通知**（3 评论）。
  https://github.com/agentscope-ai/QwenPaw/issues/8821

## 5. Bug 与稳定性

按严重程度排列：

**高**
- **#8830 [OPEN] Windows 上孤立的 `llama-server.exe` 进程跨后端重启累积，耗尽内存并阻止本地模型启动**。
  https://github.com/agentscope-ai/QwenPaw/issues/8830
  **已有 fix PR**：#8841（为插件使用独立进程组/作业对象，防止子进程比后端存活更久）。
- **#8580 [OPEN] Memory tag 索引不可用（503）**。
  https://github.com/agentscope-ai/QwenPaw/issues/8580
  未见对应 fix PR。
- **#8757 [OPEN] 微信渠道入站轮询静默死亡：error-ret 循环无日志、无恢复，游标从不重置**。
  https://github.com/agentscope-ai/QwenPaw/issues/8757
  进程存活、健康检查正常但消息静默停止——渠道可靠性隐患，未见 fix PR。

**中**
- **#8811 [OPEN] 窄屏消息剪裁 / 超宽内容无法横向滚动**（升级后回归）。
  https://github.com/agentscope-ai/QwenPaw/issues/8811
- **#8845 [OPEN] Console 中 markdown 表格溢出气泡且无法横向滚动**。
  https://github.com/agentscope-ai/QwenPaw/issues/8845
- **#8844 [OPEN] 消息列表不可键盘聚焦，方向键/PageUp/PageDown 无法滚动会话**（无障碍问题）。
  https://github.com/agentscope-ai/QwenPaw/issues/8844
- **#8836 [OPEN] 工具配置包含 password 组件时页面循环刷新**。
  https://github.com/agentscope-ai/QwenPaw/issues/8836
  **已有 fix PR**：#8842（阻止 web_search 配置弹窗回写未修改的值）。
- **#8839 [CLOSED] Android Pad 上按钮组溢出屏幕，难以点按发送**。
  https://github.com/agentscope-ai/QwenPaw/issues/8839
- **#8796 [CLOSED] 移动端全屏容器内容渲染到系统状态栏下（缺少 top safe-area-inset）**，已知自提交 `c54a4465` 引入。
  https://github.com/agentscope-ai/QwenPaw/issues/8796

**低（CLI/文档/杂项）**
- **#8833 [OPEN] `mission` CLI 重复 `/api` 前缀，请求 `/api/api/chat/send`**。
  https://github.com/agentscope-ai/QwenPaw/issues/8833
  **已有 fix PR**：#8837。
- **#8832 [OPEN] CLI 健康检查使用不受支持的 `HEAD /api/version`，服务返回 405**。
  https://github.com/agentscope-ai/QwenPaw/issues/8832
- **#8843 [OPEN] 配置文档只列 `GET/PUT/DELETE /envs`，导致 QA/引导 agent 建议会删除其他环境变量的 PUT**。
  https://github.com/agentscope-ai/QwenPaw/issues/8843
  文档误导引发实际风险，建议优先修正。
- **#8840 [OPEN] LICENSE 中 Contribution 定义多出一个 "the"，偏离 Apache 2.0 官方文本**。
  https://github.com/agentscope-ai/QwenPaw/issues/8840

## 6. 功能请求与路线图信号

- **Rapid-MLX 作为本地 OpenAI 兼容 provider 预设**（#8826，Apple Silicon 本地推理接入 Models 设置）。
  https://github.com/agentscope-ai/QwenPaw/issues/8826
  与已合并的本地模型插件化方向（#8499）契合，但无对应实现 PR，短期落地概率中等。
- **Telegram 论坛超级群按 topic 隔离 agent 会话**（#8827，Channels 组件）。
  https://github.com/agentscope-ai/QwenPaw/issues/8827
- **任务结束 Windows 右下角系统通知**（#8821，已关闭）。
  https://github.com/agentscope-ai/QwenPaw/issues/8821
- **本地模型/推理栈演进（已有实质 PR，最可能进入下一版本）**：
  - #8649 [OPEN] llama.cpp GPU 控制 + 运行时自动更新
    https://github.com/agentscope-ai/QwenPaw/pull/8649
  - #8647 [OPEN] 托管 MLX 引擎 + 自动更新
    https://github.com/agentscope-ai/QwenPaw/pull/8647
  - #8648 [OPEN] Console 本地引擎 / GPU / 自动更新控制
    https://github.com/agentscope-ai/QwenPaw/pull/8648
  三条 PR 自述为「一个特性、按序合并」（#8649 → #8647 → #8648），体量分别为 L/XXL/XL，是路线图上的主要增量。

## 7. 用户反馈摘要

- **升级即回归，用户对 UI 稳定性质疑**：#8811 明确指出「升级前为 v2.3.0，升级后出现窄屏剪裁」，用户在 Windows 11 / Chrome 与 375px 移动端口径下复现，说明发布前缺乏多视口验证。
- **移动端/平板可用性是反复出现的场景**：#8839（Android Pad 按钮溢出）、#8796（状态栏遮挡）显示真实用户在移动浏览器中日常使用 Console，而不仅是桌面端。
- **本地模型用户受进程管理困扰**：#8830 描述每次后端重启都新起一个 `llama-server.exe`，直接导致内存耗尽——对资源受限的个人设备用户是阻断性问题。
- **渠道可靠性期待静默失败可观测**：#8757 强调错误重试循环「无日志、无恢复」，用户需要的是可诊断而非仅进程存活。
- **对会话即时反馈的诉求**：#8821 用户希望任务结束时有原生通知，「不用一直盯着浏览器标签页等结果」。
- **对贡献门槛的正面信号**：今日出现 `first-time-contributor`（PR #8703，Landlock 探测不依赖 securityfs）与多条当日提交即修复的 PR，社区参与度健康。

## 8. 待处理积压

- **#8123 [OPEN] Daily Paper 截断即整体失败（ToolJSONDecodeError），无单篇重试** — 创建于 2026-10-08，42 天未关闭，涉及 `generate_structured_output` 鲁棒性。
  https://github.com/agentscope-ai/QwenPaw/issues/8123
- **#8467 [OPEN] [Under Review] chore(deps): agentscope 升级至 2.0.11** — 创建于 2026-10-28，长期处于评审中。
  https://github.com/agentscope-ai/QwenPaw/pull/8467
- **#8268 [OPEN] fix(task_tracker): 为 run 完成回调设上限并确保清理** — 创建于 2026-10-16，修复 #8173 的 run 清理部分，长期未合并。
  https://github.com/agentscope-ai/QwenPaw/pull/8268
- **#8649 / #8647 / #8648 大型本地模型关联 PR** — 创建于 2026-11-09，体量 L/XXL/XL 且强依赖合并顺序，需明确评审与合并计划，避免长期悬置。
  https://github.com/agentscope-ai/QwenPaw/pull/8649
- **#8308 [OPEN] test(api): 缺失 provider 查询返回 404 的集成测试** — 创建于 2026-10-18，XS 体量但长期未合。
  https://github.com/agentscope-ai/QwenPaw/pull/8308
- **#8487 [OPEN] fix(scroll): 工具结果折叠中识别 URL 引用的媒体** — 创建于 2026-10-29。
  https://github.com/agentscope-ai/QwenPaw/pull/8487

**维护者关注建议**：优先推动 #8580（记忆索引 503）与 #8757（微信渠道静默失效）的定位，两者均无 fix PR 且影响核心可用性；同时对 Console 消息渲染问题簇（#8811/#8845/#8844）做统一修复，避免逐个补丁。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-11-20

## 1. 今日速览

- 过去 24 小时共更新 Issue 11 条（全部新开/活跃，0 条关闭）、PR 50 条（49 条待合并，仅 1 条合并/关闭），无新版本发布。
- 活动量高，但**流入远大于流出**：PR 待合并积压达 49 条，合并吞吐极低，评审带宽已成为项目瓶颈。
- 新开 Bug 集中暴露在运行时上下文、渠道可靠性与配置系统三处，其中两项被标记为 S1（工作流阻塞）。
- 社区讨论热度集中在一条长期未闭的 P1 运行时 Bug（#8794，6 评论）与一项身份与访问控制 RFC（#12422，5 评论），反映用户对稳定性和安全边界的双重关注。

## 2. 版本发布

无（过去 24 小时无新 Release）。

## 3. 项目进展

今日仅 1 条 PR 被合并/关闭，数据中未提供其编号与内容，无法评估具体推进范围。整体而言，项目今日**功能性推进接近于零**，可见的进展主要体现在提案类 PR 的持续迭代上：

- PR #12496（docs/adr，tidux）：修订 ADR-017，提议由 daemon 持有 IdP refresh token 的密封「refresh grant」，并支持 Okta/Entra ID。— https://github.com/zeroclaw-labs/zeroclaw/pull/12496
- PR #12036（feat/memory，mov-xound-glitch）：为记忆召回阶段新增 `rerank_strategy = "external"`，将候选池发送至运维配置的 rerank 端点，对应 Issue #12022。— https://github.com/zeroclaw-labs/zeroclaw/pull/12036
- PR #11885（feat/goal，vrurg）：Goal V1 提案 8/12（策略切换围栏），PR 自述为**草案、正式终审 FAIL**，尚不具备合并条件。— https://github.com/zeroclaw-labs/zeroclaw/pull/11885

## 4. 社区热点

| 条目 | 评论 | 状态 | 链接 |
|---|---|---|---|
| #8794 [Bug] 停止 agent 后工具调用与思考从上下文消失 | 6 | OPEN, p1, accepted, risk:high | https://github.com/zeroclaw-labs/zeroclaw/issues/8794 |
| #12422 RFC：受作用域约束的运维托管服务凭据 | 5 | OPEN, type:rfc | https://github.com/zeroclaw-labs/zeroclaw/issues/12422 |
| #10635 [Bug] 运行时 profile 成本上限与实际全局日预算不一致 | 5 | OPEN, p1, in-progress | https://github.com/zeroclaw-labs/zeroclaw/issues/10635 |
| #12022 [Feature] 记忆召回可选外部 rerank 阶段 | 2 | OPEN, in-progress | https://github.com/zeroclaw-labs/zeroclaw/issues/12022 |

分析：热点分两条主线。一是**运行时可观测性与恢复语义**（#8794、#10635）——用户要求中断操作不丢失上下文、成本上限必须如实反映实际预算；二是**安全模型演进**（#12422）——运维希望在不向 agent 暴露明文凭据的前提下完成任务授权，与 ADR-017 的 OIDC 方案（PR #12496）形成呼应。#8794 自 2026-07-07 创建至今仍未关闭，已获 accepted 与 p1 标签，是当前社区关注度最高且拖延最久的稳定性问题。

## 5. Bug 与稳定性

**S1 — 工作流阻塞**
- #12597 Telegram 渠道语音转写失败后 offset 不推进，消息通道永久卡死重试。今日新开，**无 fix PR**。— https://github.com/zeroclaw-labs/zeroclaw/issues/12597
- #8794 停止 agent 导致工具调用与思考内容不进入上下文；p1、risk:high、accepted，6 条评论。今日无新关联 fix PR。— https://github.com/zeroclaw-labs/zeroclaw/issues/8794

**S2 — 行为退化**
- #10635 运行时 profile 上报 `max_cost_per_day_cents = 4294967295`（实质无上限），但 agent 轮次仍被拒绝；p1、risk:high、in-progress。— https://github.com/zeroclaw-labs/zeroclaw/issues/10635
- #12606 `[[a2a.client.peers]]` 无法通过 config set/patch 编辑，因 `A2aClientConfig` 实际使用前缀 `a2a_client`。— https://github.com/zeroclaw-labs/zeroclaw/issues/12606
- #12604 FastMCP 返回字符串的 `tools/call` 结果仍会两次到达模型（#10397 的判定条件过窄）。— https://github.com/zeroclaw-labs/zeroclaw/issues/12604
- #12607 记忆召回漏掉已保存事实、保存错误答案，且纠正后新旧两版并存。— https://github.com/zeroclaw-labs/zeroclaw/issues/12607

**S3 — 次要**
- #12601 `scripts/github/pr_risk_label.py` 中 `strict_test_only_proof` 读取 base.sha 侧源码而非 merge-base。**已有 fix PR #12600**（修复删除文件无法绑定 head SHA 的问题）。— https://github.com/zeroclaw-labs/zeroclaw/issues/12601 · https://github.com/zeroclaw-labs/zeroclaw/pull/12600

**安全相关待合并修复**
- PR #12485：PowerShell 命令语法接受参数中段的 `@`，此前带邮箱参数的允许列表命令（如 `himalaya message ...`）会被拒绝。— https://github.com/zeroclaw-labs/zeroclaw/pull/12485
- PR #11541：Anthropic provider 工厂丢弃已配置的 `extra_headers`；状态 blocked、risk:high。— https://github.com/zeroclaw-labs/zeroclaw/pull/11541

## 6. 功能请求与路线图信号

- **外部 rerank 记忆召回**（#12022 / PR #12036）：默认关闭、失败回退的设计降低了合入门槛，Issue 与 PR 同步推进且均为 in-progress，是最接近落地的新功能。— https://github.com/zeroclaw-labs/zeroclaw/pull/12036
- **Discord / Matrix 工具审批**（#12557）：用户明确指出 Telegram 已有按钮审批而其他渠道缺失，希望以 emoji 反应实现。当前无对应 PR，属清晰的渠道一致性缺口。— https://github.com/zeroclaw-labs/zeroclaw/issues/12557
- **WhatsApp Web 引用回复**（#12598）：群聊中 bot 回复无引用且 mention 失效（关联 #10976），影响群内可辨识度。— https://github.com/zeroclaw-labs/zeroclaw/issues/12598
- **浏览器凭据分段授权**（PR #12596）：用户名/密码与 TOTP 可独立授权、默认关闭，与 #12422 的凭据作用域思路一致。— https://github.com/zeroclaw-labs/zeroclaw/pull/12596
- **子 agent 指定模型路由**（PR #11577）：`spawn_subagent` 支持 `model_hint` 指向 `[[model_routes]]` 条目。— https://github.com/zeroclaw-labs/zeroclaw/pull/11577

## 7. 用户反馈摘要

- **中断语义不可接受**：#8794 报告者认为在 agent 仍在调用工具时停止，不应导致思考与工具调用完全被丢弃，这直接影响可追溯性与后续对话质量。
- **成本控制失真**：#10635 显示配置面与实际执行面对预算的判断不一致，用户无法信任 profile 展示的成本上限。
- **记忆可信度受损**：#12607 用户在 Telegram 对话中经历「漏召回 → 存错 → 纠正后双版本并存」的完整失效链条，对长期记忆功能的信任度构成实质打击。
- **渠道体验落差**：多位用户以 Telegram 为基准，要求 Discord/Matrix 补齐审批交互、WhatsApp 补齐引用回复与 mention——非 CLI 渠道正成为主要使用场景。
- **总体态度**：#12607 报告者以「感谢你们的工作」开场，反馈以详细复现为主，社区仍处建设性协作氛围，但 S1 类问题长期未闭可能侵蚀耐心。

## 8. 待处理积压

- **#8794**（2026-07-07 创建，已逾 4 个月，p1、accepted、risk:high）：运行中断导致上下文丢失，社区讨论最热但无合并中的修复，建议优先指派。— https://github.com/zeroclaw-labs/zeroclaw/issues/8794
- **#10635**（2026-09-05 创建，p1、risk:high、in-progress）：成本上限不一致，已近 2.5 个月仍处进行中。— https://github.com/zeroclaw-labs/zeroclaw/issues/10635
- **PR #11541**（2026-10-05 创建，blocked、risk:high）：Anthropic extra_headers 丢失，阻塞状态已持续一个半月，需明确解除条件。— https://github.com/zeroclaw-labs/zeroclaw/pull/11541
- **PR #11730**（2026-10-14，needs-author-action）：前台 delegate 的工具调用在父轮次中不可见，等待作者响应。— https://github.com/zeroclaw-labs/zeroclaw/pull/11730
- **PR #12450 / #12452**（2026-11-15，needs-author-action、size:XL）：V5 注册表与 Zerocode 模型选择的依赖链，体量大且互相依赖，建议由维护者统一评审以避免长期悬空。— https://github.com/zeroclaw-labs/zeroclaw/pull/12450

---

**健康度提示**：项目输入侧（Issue/PR 提交）活跃，输出侧（合并）严重受限，49:1 的待合并/已合并比例值得维护者关注；数据中 PR 评论数均为 undefined，无法据此判断评审参与度。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*