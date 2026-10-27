# OpenClaw 生态日报 2026-09-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-18 11:49 UTC

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

# OpenClaw 项目日报 · 2026-09-18

## 1. 今日速览

过去 24 小时 OpenClaw 保持极高活跃度：500 条 Issue 更新（新开/活跃 397，关闭 103）、500 条 PR 更新（待合并 294，合并/关闭 206），并发布 1 个版本 v2026.7.33。然而活跃度背后是稳定性压力：今日评论最密集的 Issue 集中在 P0/P1 级别的 Gateway 启动与性能回归（#149538、#148529）、SQLite 数据完整性问题（#143524、#126821）以及更新/迁移失败（#150201、#142586）。维护者 steipete 今日集中提交了多条 Gateway / Windows / 更新机制的修复 PR，显示发布后修复通道运转正常。整体判断：项目健康度"高活跃、高压力"，核心 Gateway 稳定性与数据库问题是当前的主要风险面。

## 2. 版本发布

**v2026.7.33 — July 2026 Extended Stable**
- 定位：扩展稳定版，覆盖 Gateway、官方 npm 插件与配套 Docker 镜像。
- 亮点（安全方向）：加固命令解析、浏览器 origin 检查、插件 Git 安装、诊断、服务凭据与 webhoo[k]（摘要截断）等安全面。
- 破坏性变更 / 迁移注意事项：提供的发布说明中未列出明确的破坏性变更或迁移步骤，**无法据此确认**，建议使用前查阅完整发布说明与更新指引。

链接：仓库 Releases 页面（github.com/openclaw/openclaw）。注意：今日高热度 Issues 中大量用户仍运行 2026.9.x（如 2026.9.3、2026.9.4）并报告回归，与本次发布的 2026.7.33 稳定线存在版本分叉，用户需确认自己所处通道。

## 3. 项目进展

今日合并/关闭的 PR 与 Issue 共 206 条 PR、103 条 Issue，其中可辨识的重要推进包括：

- **#141011 [CLOSED] fix(update): support Homebrew installs and preserve stable LaunchAgent paths**（maxsxu）
  解决 Homebrew（`brew install openclaw-cli`）托管安装下 `openclaw update` 失败的问题，并保留稳定的 LaunchAgent 路径。链接：PR #141011
- **#150201 [CLOSED] Windows: update candidate snapshot fails on 2026.9.3; Gateway SQLite check times out**
  被标记为 `clawsweeper:fix-shape-clear`、`queueable-fix`、`source-repro`，具备可修复形态，已关闭。链接：Issue #150201
- **#142586 [CLOSED] 2026.9.3 Doctor 检测到孤儿 task_delivery_state 外键但无受支持恢复路径**
  影响 2026.7.1-2 → 2026.9.3 升级迁移，已关闭。链接：Issue #142586
- **#140978 [CLOSED] Discord message 工具受 trust guard / delegation guard 阻塞**
  链接：Issue #140978
- **#85103 [CLOSED] 模型 fallback 链在提供商级配额耗尽时未触发 + EmbeddedAttemptSessionTakeoverError**
  链接：Issue #85103

此外，审查中的大型修复 PR 已积累：**#149158 fix(nodes): prevent orphaned work and incompatible launches**（涉及 docs/gateway/cli/多端，size XL）、**#151463 fix(windows): preserve registered Gateway task definitions**、**#151691 fix(update): reconcile stale managed Gateway service definitions**（P1，兼容性风险）。这些显示 Gateway/Node 生命周期与更新机制是当前推进主线。

整体评价：项目在关闭积压与修复通道上推进明显，但大量修复仍停留在"待合并"（294 条），向前的净进展受限于审查带宽。

## 4. 社区热点

- **#97616 [OPEN] [P1] OpenClaw 泄漏未回收的 hook/tool 子进程，导致僵尸进程累积与运行时退化** — 评论 30（今日最高）
  链接：Issue #97616 | 作者 avp717，创建 2026-06-29，持续更新至今
  诉求：长跑部署中的进程生命周期管理，属典型"慢性退化"类问题，社区关注度最高但长期未闭环。

- **#149361 [OPEN] [maintainer, P2] Umbrella: WebUI 性能与稳定性** — 评论 22
  链接：Issue #149361 | 作者 vyctorbrzezowski
  诉求：以伞形 Issue 归集桌面与移动端 WebUI 性能问题，且已有配套修复 PR（#149727 / #151726、#151752），是社区与维护者协同度最高的主题。

- **#149538 [OPEN] [P0, impact:crash-loop] main (1611ca6d): Gateway 到达 ready 但不服务；632-agent 舰队上 /health 全部超时** — 评论 17
  链接：Issue #149538 | 作者 609NFT
  诉求：大规模舰队（632 agents）场景下的可用性崩溃，与 #148529 同源，反映大部署用户的强痛点。

- **#150201 [CLOSED] [P0, ux-release-blocker] Windows 更新快照失败 / Gateway SQLite 检查超时** — 评论 15
  链接：Issue #150201

- **#148707 [OPEN] [P1, message-loss] 回复丢失："Reply operation has no active tool authority snapshot"（2026.9.4 回归）** — 评论 12
  链接：Issue #148707

- **#85103 [CLOSED] 模型 fallback 链未在配额耗尽时触发** — 评论 11，👍1
  链接：Issue #85103

分析：热点集中在三类诉求——(1) 进程/资源生命周期（僵尸进程、WAL 膨胀、孤儿 worker）；(2) Gateway 启动与可用性回归（大舰队场景放大）；(3) 消息丢失与授权快照类正确性问题。多数高评论 Issue 标记为 `clawsweeper:no-new-fix-pr`，即尚无新修复 PR，说明社区痛点已明确但修复供给不足。

## 5. Bug 与稳定性

**P0 / 崩溃循环（crash-loop）**
- **#149538** Gateway ready 但不服务，/health 超时，RSS 持续增长至耗尽内存（632-agent 舰队，main 1611ca6d）。**未见 fix PR**（`clawsweeper:no-new-fix-pr`）。链接：Issue #149538
- **#150201** Windows 更新快照失败 + Gateway SQLite 检查超时，2026.9.3。**已关闭**（`fix-shape-clear`、`queueable-fix`）。链接：Issue #150201
- **#143524** Agent SQLite WAL 数天内增长至 1.4–2.8 GB（实测 2865 MB），阻塞 Gateway 启动（Windows，2026.9.2/9.3）。**未见 fix PR**。链接：Issue #143524
- **#126821** 全新重建数据库 15–24h 内 SQLite 再次损坏（2026.8.1-beta.2，WSL2），5 天 5 次，含"瘫痪 Gateway"模式（拒绝服务但不退出）。**未见 fix PR**。链接：Issue #126821
- **#142586 [CLOSED]** Doctor 检测孤儿外键但无受支持恢复路径，阻塞 2026.7.1-2 → 2026.9.3 迁移。链接：Issue #142586

**P1 / 消息丢失与回归**
- **#148707** 同一 session 上第二次运行顶替在途回合，回复丢失（2026.9.4 回归）。**未见 fix PR**。链接：Issue #148707
- **#148529** 2026.9.4 在 632-agent 舰队上启动到 ready 约 12 分钟（2026.7.1-2 约 2 秒），含分阶段耗时拆解。**未见 fix PR**。链接：Issue #148529
- **#97616** hook/tool 子进程泄漏导致僵尸累积与运行时退化。**未见 fix PR**。链接：Issue #97616
- **#123799** 受 #123706 影响的 Codex compact 404 生产部署需要安全升级/回填指引（2026.5.12）。**未见 fix PR**。链接：Issue #123799
- **#86119** subagent/cron 嵌入运行后 node server.js worker 进程孤儿累积（2026.5.22）。**未见 fix PR**。链接：Issue #86119
- **#87051** Codex OAuth profile 未传播至 subagent session，静默 fallback 并幻觉工具调用。**未见 fix PR**。链接：Issue #87051

**P2 / 行为与安全类**
- **#53783** Telegram 群组跨 agent `sessions_list` 可见性不一致导致单向 `sessions_send` 失败（需安全审查）。链接：Issue #53783
- **#99253** 助手自插入伪造用户回合并当作真实输入作答（安全相关）。链接：Issue #99253
- **#74848** macOS App 节点反复以 "cancelled" 断开，CLI 节点正常。链接：Issue #74848
- **#45494** LLM API 持续中断时 cron agent 任务静默超时而非快速失败。链接：Issue #45494

**已有对应修复 PR 的问题**
- **#149727** WebUI 测量滚动补偿触发额外历史加载 → 已有 **#151726**（`Closes #149727`，ready for maintainer look）。链接：Issue #149727 / PR #151726
- **#150620** 命令菜单移动导致静默切换选中项 → 已有 **#151752**（已关闭对应 Issue）。链接：PR #151752

## 6. 功能请求与路线图信号

- **#74594 [OPEN] RFC: Skill Capability Manifests v0 — 在使用前让技能能力可见**（👍1，评论 8，`needs-product-decision`）
  链接：Issue #74594
  与今日安全加固主题（v2026.7.33 的插件 Git 安装、凭据加固）方向一致，具备被纳入安全路线的可能，但标记为 stale 且待产品决策。

- **#77886 [OPEN] 为受保护配置变更增加 owner 审批流程**（👍2，`needs-security-review`，maturity: stable）
  链接：Issue #77886
  与今日 **#67421 feat: add per-agent web_fetch ssrf overrides**（含 `merge-risk: security-boundary`）同属"权限边界可配置化"脉络，可能共同影响下一版本的安全配置模型。

- **#79281 [OPEN] 默认 ACP thread-binding preset — 第三方渠道目前各自重复实现约 870 LOC**（👍1）
  链接：Issue #79281
  与 **#43564 ACP Session Skill Context Injection**（👍1）呼应，指向 ACP 会话绑定的标准化需求；两项均待产品决策，短期内落地的确定性不高。

- **#121729 [OPEN] 面向后台运行 agent 的友好每日消费额度（P3）**
  链接：Issue #121729
  呼应 #88087 中用户对成本失控的直接抱怨，属成本治理类需求。

- **#139033 [OPEN] feat(i18n): 为 Control UI 增加加泰罗尼亚语（ca）支持**（PR，对应已关闭 Issue）
  链接：PR #139033
  延续现有 20 个 locale 的 i18n 模式，落地门槛低、proof 充足。

## 7. 用户反馈摘要

**主要痛点**
- **成本与资源失控**：#88087 用户明确表示在 DigitalOcean 2vCPU/4GB droplet 上因长任务 UX 差 + cron 唤醒静默失败而"放弃该 droplet"；#121729 要求每日消费额度；#143524 的 WAL 膨胀至 2865 MB 也属资源失控的极端案例。
- **大部署可用性**：#148529 / #149538 同一位用户（632-agent 舰队）报告启动从约 2 秒退化到约 12 分钟，随后 Gateway ready 却不服务——大舰队用户被回归直接阻断。
- **升级与迁移摩擦**：#150201（Windows 更新快照失败）、#142586（Doctor 检出孤儿外键但无恢复路径）、#123799（生产部署需要安全升级/回填指引）显示升级路径缺乏受支持的恢复手段。
- **消息丢失类正确性问题**：#148707（tool authority snapshot 缺失导致回复丢失）、#53783（跨 agent 单向发送失败）、#85103（fallback 链不触发）、#95612（cli-backend 对 anthropic 返回 401 而 shell 内相同调用可用）构成一组难以诊断的静默失败。
- **安全与信任边界**：#99253 助手伪造用户回合并作答，用户明确强调"这比 UI 渲染歧义更严重"；#140978 中 Discord 工具即使来自同一频道且属主在白名单仍被双重 guard 阻断，属"过度拦截"型反馈。

**使用场景**
- 单机 Gateway（Windows，2026.9.2/9.3）、WSL2、Docker（init: true / tini）、macOS Apple silicon、DigitalOcean droplet。
- 多 bot / 多 agent 生产部署（OAuth 场景）、Telegram 群组多 agent 协作、cron 后台任务、ACP（Codex/Pi/OpenCode/Gemini）子会话、iOS Talk 实时语音、第三方渠道（WeChat 等）。

**满意度信号**
- 用户对问题定位的精确度普遍较高（附版本哈希、复现证据、分阶段耗时），说明诊断工具链（Doctor、status --all）被实际使用；但 #151747、#151732、#151748 等 PR 反映诊断本身仍有静默丢日志、受宿主机速度干扰、跳过被忽略目录等缺陷，削弱了可观测性信任。

## 8. 待处理积压

以下 Issue 创建时间早、标记 stale 且相关键标签（`needs-maintainer-review` / `needs-product-decision` / `needs-live-repro`），建议维护者优先分诊：

| Issue | 创建日期 | 星级/优先级 | 卡点 |
|---|---|---|---|
| #45494 Cron 任务在 LLM 持续性故障时静默超时而非快速失败 | 2026-03-13 | P2, regression | needs-product-decision |
| #43564 ACP Session Skill Context Injection | 2026-03-12 | P2 | needs-product-decision |
| #53783 Telegram 群组跨 agent 会话可见性不一致 | 2026-03-24 | P2, security | needs-security-review, needs-info |
| #67421（PR）per-agent web_fetch SSRF 覆盖 | 2026-04-15 | P2 | merge-risk: security-boundary, needs proof |
| #74594 Skill Capability Manifests v0 RFC | 2026-04-29 | P2 | needs-product-decision |
| #74848 macOS App 节点反复 "cancelled" 断开 | 2026-04-30 | P2, regression | needs-security-review, needs-info |
| #77886 受保护配置变更的 owner 审批流程 | 2026-05-05 | P2, stable | needs-product-decision |
| #79281 默认 ACP thread-binding preset（第三方渠道各重复约 870 LOC） | 2026-05-08 | P2 | needs-product-decision |
| #84610 Gateway 升级后每约 90s SIGTERM 循环（WSL2） | 2026-05-20 | P1, stable | needs-live-repro |
| #84783 Moonshot Discord 在模型解析阶段耗约 30s | 2026-05-21 | P1 | needs-live-repro |
| #95612 cli-backend 对 anthropic 返回 401 | 2026-06-21 | P1 | needs-live-repro |

其中 **#84610、#95612、#84783** 均为已有明确复现描述但卡在 `needs-live-repro` 的 P1 项，且今日已被关闭或长期停滞，建议确认是否具备复现条件后再决定关闭或重开。**#97616**（僵尸进程，30 条评论、今日最热）虽创建于 2026-06-29 且非 stale，但始终无新修复 PR，是最值得优先投入的最高关注度缺口。

---

*数据来源：OpenClaw GitHub 仓库（github.com/openclaw/openclaw），统计窗口 2026-09-18 前 24 小时。所有链接指向对应 Issue/PR 编号；发布说明因原始摘要截断，部分内容无法确认，已按要求标注。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**统计窗口：2026-09-18（前 24 小时）｜样本：11 个活跃项目 + 2 个静默项目**

---

## 1. 生态全景

当前生态呈现"**头部高活跃高压、腰部快速迭代、尾部停滞**"的三级分化格局：OpenClaw 以单日 1000 条 Issue/PR 更新与 1 个版本发布的体量占据绝对核心，但 P0 崩溃循环、SQLite 数据完整性与大舰队可用性回归构成显著稳定性压力；NanoBot、CoPaw、Hermes Agent 处于功能快速铺开与回归修复并行阶段；PicoClaw、NanoClaw、LobsterAI、ZeptoClaw、Moltis、IronClaw 则以维护、清理或低速演进为主，其中 Zeroclaw 出现 43:7 的待合并/已合并失衡。跨项目共性诉求明显收敛于四条主线：**跨会话/消息隔离正确性、进程与资源生命周期治理、升级迁移的可恢复性、以及安全边界（提示注入、工具审批 fail-closed）**。整体看，生态已从"功能竞赛"转向"生产可用性补课"，诊断可观测性与状态清理路径的完整性正成为新的竞争维度。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 · 关闭） | PR（待合并 · 已合/关） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 397 · 103（共 500） | 294 · 206（共 500） | v2026.7.33 | 高活跃 / 高压力，Gateway+DB 为主要风险面 |
| **NanoBot** | 5 · 3（共 8） | 12 · 11（共 23） | 无 | 良好，当日 Issue→PR 闭环快 |
| **Hermes Agent** | 44 · 6（共 50） | 45 · 5（共 50） | 无（代码标记 v0.21.3） | 活跃但**合并吞吐为瓶颈**，Desktop 修复集中收敛 |
| **CoPaw** | 16 · 6（共 22） | 19 · 18（共 37） | v2.2.2-beta.1 | 高活跃，2.2.x 稳定性补课 + Hub 路线图蓄力 |
| **Zeroclaw** | 21 · 7（共 28） | 43 · 7（共 50） | 无 | **待合并/已合并 ≈ 6:1**，积压偏高，RFC 密集 |
| **PicoClaw** | 0 · 1（共 1） | 8 · 6（共 14） | 无 | 中等偏低，以 Dependabot 清理为主，审查队列积压 |
| **NanoClaw** | 0 | 13 · 4（共 17） | 无 | 中性偏积极，"高提交、低讨论" |
| **LobsterAI** | 5（全 stale） | 13 · 7（共 20） | 无（release 分支关闭未落地） | 开发中高，**社区响应健康度偏低** |
| **ZeptoClaw** | 1 · 4（共 5） | 2 · 6（共 8） | 无 | 高强度维护但**方向重大调整**（CI 全移除），单人驱动 |
| **Moltis** | 1 · 0 | 1 · 0 | 无 | 偏低，维护态非开发推进态 |
| **IronClaw** | 2 · 0 | 0 · 0 | 无 | 低速维护，代码层面无推进 |
| **NullClaw** | — | — | — | 无活动 |
| **TinyClaw** | — | — | — | 无活动 |

> 说明：NanoClaw 今日 Issues 为 0，评论/点赞数据缺失，热点以标签覆盖度替代排序。

---

## 3. OpenClaw 在生态中的定位

**规模对比（单日数据）**：OpenClaw 的 Issue 更新量（500）约为第二名 Zeroclaw（28）的 **18 倍**，PR 更新量（500）约为第二名 CoPaw（37）与 Zeroclaw（50）的 **10–13 倍**。它是唯一单日同时维持"500+ Issue + 500+ PR + 版本发布"的项目，量级上属于生态参照系而非可比对象。

**技术路线差异**：
- OpenClaw 采用 **核心 Gateway + 官方 npm 插件 + Docker 镜像** 的完整发行体系，并具备明确的版本通道概念（如扩展稳定版 2026.7.33 与 2026.9.x 快线并存，报告中明确指出"用户需确认自己所处通道"）。多数同类项目今日无正式 Release，仅以分支滚动。
- 其诊断工具链（Doctor、`status --all`）已被用户实际高频使用——用户报告普遍附带版本哈希、分阶段耗时、复现证据，这在其他项目中罕见。

**优势与风险并存**：
- **优势**：发布后修复通道运转正常（维护者 steipete 集中提交 Gateway/Windows/更新机制修复）；安全方向持续加固（命令解析、浏览器 origin、插件 Git 安装、凭据）。
- **风险**：单日高热度 Issue 大量用户仍运行 2026.9.x 并报告回归，与本次稳定线存在版本分叉；多个 P0/P1 项标记 `clawsweeper:no-new-fix-pr`，说明**社区痛点已明确但修复供给不足**。大舰队用户（632 agents）报告启动从约 2 秒退化至约 12 分钟、Gateway ready 却不服务，属被回归直接阻断的高价值用户群。

**结论**：OpenClaw 在生态中扮演"事实标准 + 压力测试场"双重角色——其暴露的 Gateway 生命周期、SQLite WAL 膨胀、会话隔离等问题，正是其他项目（NanoBot 跨会话串消息、Hermes 会话管理、CoPaw 数据库损坏）以较小规模重演的同类问题。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **跨会话 / 消息投递隔离** | OpenClaw（#148707 消息丢失）、NanoBot（#5798 回复串会话，0.3.5 回归）、Zeroclaw（#10929 出站消息无投递回执）、CoPaw（#7856 插件丢弃 actor 参数打断审批） | 会话间不得串扰；出站消息需可确认送达；审批链信息不得丢失 |
| **进程 / 资源生命周期治理** | OpenClaw（#97616 僵尸进程、#86119 孤儿 worker、#143524 WAL 膨胀至 2865 MB）、NanoBot（#5806 Discord 反应任务泄漏）、Hermes（#91440 环境泄漏、#83662/#85574 Slack 重连泄漏）、ZeptoClaw（#7857 事件循环泄漏） | 停止/重启后资源必须彻底清理；长跑部署不得慢性退化 |
| **升级 / 迁移的可恢复性** | OpenClaw（#150201 Windows 更新快照失败、#142586 孤儿外键无恢复路径、#123799 需回填指引）、NanoClaw（#3847/#3844 Linux 系统级 Node 下安装挂起）、LobsterAI（#1025 内网 registry 阻塞外部构建）、Hermes（#98214 浅克隆恒报可更新） | 失败需可恢复、可回滚；安装/升级路径需覆盖主流发行版 |
| **安全边界与可信执行** | OpenClaw（#99253 助手伪造用户回合、#77886 owner 审批流程、#67421 per-agent SSRF 覆盖）、CoPaw（#7859 提示注入删技能 → fix PR #7864）、Zeroclaw（#10643 fail-closed 审批、#10952 signed reasoning 被重写）、ZeptoClaw（#702 面板登录无限尝试） | 工具审批必须 fail-closed；被篡改/重写的上下文不得静默通过；凭据与出站流量需受治理 |
| **上下文 / 长期记忆的语义正确性** | NanoBot（#5377 压缩截断但游标推进致消息永久丢失）、CoPaw（#7853 媒体块跳过致上下文撑爆、#7733 Agent 自主上下文管理）、Hermes（#105189 流中断致空参数派发）、Zeroclaw（#10526 只追加事件历史与确定性重放） | 压缩/驱逐不得静默丢数据；应支持确定性重放与可追溯 |
| **多租户 / 团队化部署** | CoPaw（#7318 多租户 Hub，30 评论）、Hermes（#97681 Bot 群聊不依赖 Desktop 常驻、#38007 系统托盘后台运行 👍19） | 从个人助手走向团队/多设备协作，服务生命周期须独立于桌面进程 |
| **Provider 覆盖与传输可靠性** | NanoClaw（#3851 代理后 Websockets 不可靠、#3850 HTTP SSE transport）、NanoBot（#5459 Vertex AI 原生 provider 缺口）、Hermes（#51513 视觉回退链 5 个 bug、#115006 OpenCode 别名缺失）、ZeptoClaw（#703 reasoning_content 解析）、IronClaw（#7537 通用 thinking/effort 控制） | 代理/弱本地模型/严格后端下需稳定；回退链必须真正生效 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手平台 | 个人 → 大规模多 agent 舰队（632 agents 用例） | 核心 Gateway + npm 插件 + Docker；扩展稳定版与快线双通道 |
| **NanoBot** | 多渠道消息接入（Discord/QQ/Telegram） | 自托管部署者 | 渠道能力对齐（replyToMessage parity）；agent loop 跨会话投递修复 |
| **Hermes Agent** | Desktop 端 + Bot Mode 群聊 | 桌面用户、跨设备协作 | Desktop 生命周期为主轴；大量"salvage"批次修复集中收敛 |
| **CoPaw** | 团队/多租户 Hub + 插件生态 | 团队、IM 渠道（飞书）用户 | Hub 多租户为路线图核心；插件热重载与隔离待补 |
| **Zeroclaw** | 治理流程 + 可重放架构 | 长期贡献者驱动的社区 | RFC 投票机制 + 只追加事件历史（架构级议题主导） |
| **ZeptoClaw** | 边缘/机器人运行时 | 资源受限环境、"6MB fits on a robot" | 已移除全部 GitHub Actions CI，转向本地验证；二进制体积为核心卖点 |
| **PicoClaw** | 多平台消息接入（QQ/DeltaChat/IRC） | Sipeed 硬件生态用户 | Go 技术栈；依赖自动升级为主 |
| **NanoClaw** | 网关抽象 + 技能化 | 安装门槛敏感的新用户 | Gateway 抽象化序列（#3815–#3818）；Codex/OpenCode 传输层 |
| **LobsterAI** | Cowork 会话工作区 + OpenClaw 集成 | 网易内部 + 外部开发者 | Electron + OpenClaw；内网 registry 依赖构成外部贡献障碍 |
| **Moltis / IronClaw** | wasm-web-search / LLM 请求层增强 | 早期探索用户 | 维护态，单议题推进 |

**关键分野**：OpenClaw / CoPaw 走"平台化 + 插件生态"路线；ZeptoClaw / PicoClaw 走"边缘/硬件嵌入式"路线；Hermes / NanoClaw 走"桌面/网关分层"路线；Zeroclaw 罕见地将"治理流程本身"作为产品议题。

---

## 6. 社区热度与成熟度

**第一层｜快速迭代阶段（高活跃 + 高频发版/合并）**
- **OpenClaw**：唯一有正式 Release 的项目，但高活跃伴随高回归压力，处于"扩张后补课"状态。
- **CoPaw**：18 条 PR 合并/关闭中修复类占多数，典型"发布周期后收口"；同时为 Hub 多租户做底层铺垫。
- **NanoBot**：当日多条 Issue→PR 即时闭环（#5784 于 9-15 创建、9-17 修复），响应速度最快。

**第二层｜活跃但吞吐受限（高提交 + 合并瓶颈）**
- **Hermes Agent**（45 待合并 vs 5 已合并）：Desktop 修复批次堆积。
- **Zeroclaw**（43 vs 7）：多个 XL 规模、risk:high 长尾 PR，存在 `needs-author-action`。
- **LobsterAI**（13 待合并，含同日集中提交的 #2705–#2716 系列，尚无 review 记录）。

**第三层｜质量巩固 / 维护阶段**
- **PicoClaw**（依赖清理为主，8 条 stale PR，最久积压约 77 天）、**NanoClaw**（安装路径修复 + 网关重构）、**ZeptoClaw**（CI 体系整体移除后需本地验证补位）、**Moltis / IronClaw**（低速）。

**第四层｜静默**
- **NullClaw、TinyClaw**：24 小时无活动。

**外部贡献参与度信号**：NanoBot（AlfredChaos、yu-xin-c、adityanurdin 等）、NanoClaw（ionescu77、glifocat、slambert）社区贡献活跃；反之 **ZeptoClaw 仅维护者 + 1 名外部贡献者**、**LobsterAI PR 集中于少数作者**，属社区共建风险项。

---

## 7. 值得关注的趋势信号

**（1）"静默失败"成为用户最不可容忍的失败模式。** 跨项目一致反馈：OpenClaw（#148707 回复丢失、#85103 fallback 不触发）、Hermes（#100996 OAuth 无声失败、#105189 空参数派发、#114323 可用却显示 needs setup）、NanoBot（#5377 消息静默丢失）、CoPaw（#7838 沙箱不可用时静默不注册工具）。**对开发者的参考**：失败必须显式、必须可诊断，宁可报错不可降级静默。

**（2）工具审批正从"可选"走向"fail-closed 强制"。** Zeroclaw #10643 明确指出 `approval: None` 被误判为 `NotRequired` 导致工具被放行；CoPaw #7859 提示注入成功指示 Agent 删除技能并当日即有安全 PR；OpenClaw #77886 要求受保护配置变更增加 owner 审批。**参考价值**：审批语义的默认值设计（fail-open vs fail-closed）是安全边界的第一道防线。

**（3）上下文/记忆的正确性优先于容量扩展。** NanoBot #5377 揭示"截断却推进游标"这一危险模式；CoPaw #7853 显示媒体块被裁剪器跳过导致无界累积；Zeroclaw #10526 提出只追加事件历史 + 确定性重放。**参考价值**：Agent 记忆的核心矛盾已从"够不够大"转向"丢没丢、能不能重放"。

**（4）桌面/进程生命周期与服务解耦是明确的产品诉求。** Hermes #38007（系统托盘后台运行，👍19 为当日最高）与 #97681（群聊不应绑定 Desktop 存活）同源；OpenClaw 的 Gateway 启动/就绪回归（#149538）在另一维度表达同一问题。**参考价值**：AI 助手正被期待为**常驻服务**而非**前台应用**，架构设计需前置考虑服务化生命周期。

**（5）CI/治理基础设施本身成为项目议题。** ZeptoClaw 按用户要求**移除全部 GitHub Actions CI**（#700）并因此关闭体积与特性编译门禁，同时明确提示"二进制体积治理与可选特性编译覆盖出现治理空白"；Zeroclaw #10549 提出取消 RFC 强制讨论窗口（12 评论）；OpenClaw 单日 294 条待合并 PR 暴露审查带宽瓶颈。**参考价值**：当合并吞吐成为瓶颈时，自动化门禁的取舍、审查资源的分配将直接影响项目前进速度。

**（6）免费/无密钥 provider 路径的脆弱性。** Hermes #114753（opencode-free 已死）、#115006（别名镜像缺失）、#51513（视觉回退链限流下完全失效）连续暴露同一类问题。**参考价值**：多 provider 抽象层需要一致性测试，回退链必须经过限流/配额耗尽场景的验证，否则形同虚设。

**（7）跨 beta 版本耦合与插件兼容性风险。** CoPaw #7856（插件丢弃 `actor` 参数破坏 2.2.2b2 工具审批）、报告明确建议"固定版本号、避免跨 beta 混用"；NanoBot #5798 用户直接对比"0.3.0 没有这个问题"。**参考价值**：快速迭代期的版本间行为一致性，直接决定自托管用户的信任留存。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-18

## 1. 今日速览

项目今日维持高强度迭代节奏：24 小时内 23 条 PR 更新（11 条已合并/关闭、12 条待合并）、8 条 Issue 更新（5 条新开/活跃、3 条关闭），无新版本发布。今日工作重心明显集中在 **WebUI 与渠道稳定性**（Discord 反应状态清理、WebUI 移动端点击、重启后恢复逻辑）以及 **跨会话/恢复机制的回归修复**，多条 PR 与当日新开 Issue 形成「问题—修复」的即时闭环。值得注意的信号是：今日关闭的 3 条 Issue 中包括一条 3 月 7 日创建的长周期功能请求（#1663），说明积压开始被清理。整体健康度良好，但对 `main` 分支上已确认的多个回归（跨会话串消息、恢复队列重放、Discord 任务泄漏）需保持警觉。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的重要 PR（按影响面排序）：

- **#5794 [CLOSED] fix: cross-session response delivery in agent loop**（作者 adityanurdin）
  修复跨会话响应投递 bug：用户在会话 A 发消息后快速切到会话 B 发消息，A 的响应可能错误出现在 B 中。这是对当日活跃 Issue #5798 同类问题的正面回应。
  https://github.com/HKUDS/nanobot/pull/5794

- **#5800 [CLOSED] feat(discord): add replyToMessage parity with Telegram**（作者 ZedingZhang）
  为 Discord 增加与 Telegram 对齐的 `channels.discord.replyToMessage` 配置项（默认 `false`），覆盖普通、附件与流式响应场景。对应关闭了 3 月创建的功能请求 #1663。
  https://github.com/HKUDS/nanobot/pull/5800

- **#5799 [CLOSED] fix(channels): drop compaction notices on channels without an in-place affordance**（作者 AlfredChaos）
  修复 #5784：QQ 等无「就地折叠」能力的渠道不再将压缩生命周期提示（`Compressing context…` / `Context compacted.`）作为独立消息发送。
  https://github.com/HKUDS/nanobot/pull/5799

- **#5812 [CLOSED] fix(agent): run explicit recovery continuations**
  区分「持续目标续写」与其他内部续写消息，使显式 WebUI 恢复续写能真正进入 agent turn 处理流程。
  https://github.com/HKUDS/nanobot/pull/5812

- **#5810 [CLOSED] fix(webui): show all channels when only WebUI is enabled**
  修复仅启用 WebUI 时渠道设置页默认套用 `Enabled` 过滤器、导致其他可配置渠道被隐藏的问题。
  https://github.com/HKUDS/nanobot/pull/5810

- **#5802 [CLOSED] fix(webui): hide model details until AI setup is complete**
  设置未完成前不再通过 composer tooltip 暴露默认模型与提供商，并阻止陈旧运行时回退覆盖设置提示。
  https://github.com/HKUDS/nanobot/pull/5802

**推进程度评估**：今日合并项以「缺陷收敛 + 渠道能力对齐」为主，单条改动规模不大，但覆盖了 Discord、QQ、WebUI、agent 恢复路径四个方向。项目在**多渠道路由正确性**和**会话隔离**上的可靠性有明显前进；Discord 与 Telegram 的能力对齐减少了用户跨渠道迁移时的认知成本。

---

## 4. 社区热点

今日数据中所有 Issues 与 PR 的 👍 均为 0，评论数普遍偏低（Issue 最高 3 条，PR 未提供评论数），社区讨论热度整体温和。相对受关注的是：

- **#5377 [CLOSED] consolidation truncates archive input but advances past the full message batch**（评论 3，作者 dajiaohuang，8-13 创建，9-17 更新）
  数据持久化正确性问题：`Consolidator.archive()` 按模型输入 token 预算截断会话内容，但调用方仍将 `Session.last_consolidated` 推进到整个原始消息批次之后，导致被截断的消息永久丢失。评论数为今日最高，说明该问题触及长期记忆一致性这一核心能力。
  https://github.com/HKUDS/nanobot/issues/5377

- **#5784 [CLOSED] QQ: automatic compaction notices are sent as standalone messages**（评论 2，作者 AlfredChaos，9-15 → 9-17）
  自托管 QQ 渠道用户报告的体验问题，当日即被 PR #5799 修复并关闭，属于高质量的用户—维护者协作案例。
  https://github.com/HKUDS/nanobot/issues/5784

**诉求分析**：今日热点集中在「**上下文压缩/长期记忆的语义正确性**」与「**渠道消息呈现是否克制**」。用户并非在追求新功能，而是在要求既有机制在边缘条件下不出错——这是项目进入生产自托管阶段后的典型诉求结构。

---

## 5. Bug 与稳定性

按严重程度排列（含修复 PR 状态）：

**高（数据/会话正确性）**

1. **#5798 [OPEN] [bug] 回复串会话问题**（作者 wowowowowowowowonojieba，9-17 创建，9-18 更新，0.3.5 版本）
   一个会话运行中时，在其他会话交流会导致回复被投递到第一个运行中的会话。用户明确标注「0.3.0 没有这个问题」，属**版本回归**。
   修复状态：同日已有 **#5794 [CLOSED] fix: cross-session response delivery in agent loop** 针对同类问题，但 #5798 仍为 OPEN，需确认是否被完全覆盖。
   https://github.com/HKUDS/nanobot/issues/5798

2. **#5808 [OPEN] WebUI follow-ups canceled by /stop replay after gateway restart**（作者 yu-xin-c，9-18）
   `/stop` 取消进行中的 WebUI turn 时只丢弃内存中的 follow-up 队列，持久化恢复日志中的同批消息仍保留；下次网关启动时 `RecoveryCoordinator` 会重新入队这些已取消的消息。属**恢复日志与运行时状态不一致**。
   修复状态：**#5809 [OPEN] fix(agent): discard stopped follow-up recovery journal** 已提交待合并。
   https://github.com/HKUDS/nanobot/issues/5808

3. **#5377 [CLOSED]**（见上）压缩截断导致消息批次丢失。已关闭。
   https://github.com/HKUDS/nanobot/issues/5377

**中（资源泄漏 / 生命周期）**

4. **#5806 [OPEN] Discord runtime leaves reaction tasks alive after stop**（作者 yu-xin-c，9-18，基于 `main` 4420ad58）
   `DiscordChannel._reset_runtime_state()` 取消了 typing 任务并清理了 stream/channel 缓存，但未取消或清理 `_working_emoji_tasks` 与 `_pending_reactions`，停止后反应任务仍然存活。
   修复状态：**#5807 [OPEN] fix(discord): clean up reaction state on stop** 已提交待合并。
   https://github.com/HKUDS/nanobot/issues/5806

**低（UI/交互）**

5. **#5771 [OPEN] [WebUI] Session list requires two taps to open a session on mobile**（作者 morandot，9-15 创建，9-18 更新）
   移动端首次点击会话行无可见效果，需第二次点击才能打开，列表表现为无响应。
   修复状态：**#5805 [OPEN] fix(webui): keep mobile chat rows tappable** 已提交待合并。
   https://github.com/HKUDS/nanobot/issues/5771

6. **#5784 [CLOSED]** QQ 压缩提示污染聊天流。已由 #5799 修复。
   https://github.com/HKUDS/nanobot/issues/5784

**稳定性小结**：今日 6 条 bug 中 4 条已有对应 fix PR（其中 3 条仍待合并），2 条已关闭。响应速度快，但 `#5798` 报告的会话串扰属于用户可感知的核心回归，建议维护者优先确认 #5794 是否完整覆盖该场景。

---

## 6. 功能请求与路线图信号

**可能纳入下一版本的候选：**

- **#5459 [OPEN] Feature request: Add native Google Vertex AI provider for Claude models**（作者 xuayan-nokia，8-20 创建，9-17 更新）
  用户指出 Nanobot 目前已有 Anthropic（直连）、OpenAI、Azure OpenAI、AWS Bedrock、GitHub Copilot、xAI 及各类 OpenAI 兼容网关，但缺少 Google Vertex AI 原生提供商用于调用 Claude 模型。
  判断：**短期落地概率中等**。这是明确的提供商覆盖缺口，但今日无对应 PR，且需新增认证与端点适配工作，更可能进入后续版本的 provider 扩充计划。
  https://github.com/HKUDS/nanobot/issues/5459

- **Discord replyToMessage 与 Telegram 对齐**（#1663 → PR #5800）
  已关闭并由 #5800 实现，若未被今日版本收录，将出现在下一版本中。信号意义：项目正系统性收敛各渠道能力差异。
  https://github.com/HKUDS/nanobot/issues/1663

**已在途的架构类改动（非用户直接提出，但影响路线图）：**

- **#5811 [OPEN] refactor(agent): execute subagents through private sessions**
  将委派工作改为通过共享 `AgentLoop` 上下文与压缩路径的私有内存子会话执行，移除独立的 subagent runner 与 prompt 构建路径，`SubagentManager` 仅保留监督职责。这是**架构收敛**信号，若合并将简化 agent 执行模型。
  https://github.com/HKUDS/nanobot/pull/5811

- **#5611 [OPEN] [conflict] feat(agent): bound reasoning replay to the latest assistant turn**（作者 HUAN2022A，8-30 创建，9-17 更新，Closes #5584）
  限制持久化的 `reasoning_content` / `thinking_blocks` 仅重放最近一轮助手消息，避免历史推理内容无限占用重放 token 预算并产生额外 prefill 成本。标注 `[conflict]`，存在合并冲突，需人工介入。
  https://github.com/HKUDS/nanobot/pull/5611

---

## 7. 用户反馈摘要

**痛点：**

- **跨会话隔离失效**（#5798）：用户明确对比版本，指出 0.3.0 无此问题而 0.3.5 出现，说明这是近期引入的回归，用户对版本间行为一致性有明确预期。
- **自托管渠道的「消息噪音」**（#5784）：QQ 自托管用户不希望生命周期提示以普通聊天消息形式出现在用户侧，反映自托管场景对渠道输出克制性有较高要求。
- **移动端可用性**（#5771）：WebUI 在移动端首次点击无效，用户描述为「列表读起来像是无响应的（The list reads as unresponsive）」，属直接影响日常使用的交互缺陷。
- **长期记忆的静默丢失**（#5377）：压缩截断但游标推进导致消息丢失，属用户难以自行察觉的数据完整性问题。

**使用场景：**

- QQ 渠道自托管部署（#5784，作者 AlfredChaos 明确说明 self-host）。
- 多会话并行使用，用户在会话间快速切换并期待响应归属正确（#5798、#5794）。
- 移动端访问 WebUI 管理会话（#5771）。
- 通过 Google Vertex AI 调用 Claude 模型的企业/云环境部署（#5459）。
- 使用 WebUI 的 `/stop` 中断与后续恢复流程（#5808）。

**满意度信号：**

- 修复响应速度获得间接印证：#5784 于 9-15 创建、9-17 由 PR #5799 修复并关闭；#5808、#5806、#5771 均在报告当日即有对应 fix PR 提交。多条 PR 由社区贡献者（AlfredChaos、yu-xin-c、wang1408、adityanurdin、nikkoxgonzales 等）提交，外部贡献活跃。

**不满意信号：**

- 版本回归引发直接对比式抱怨（#5798：「0.3.0没有这个问题」）。
- 多条 issue 指向 0.3.5 至 `main` 分支上的状态清理与恢复边界不完整（#5806、#5808），用户正在主动审查生命周期终结路径。

---

## 8. 待处理积压

**长期未关闭且值得关注：**

- **#1663 Discord: add replyToMessage parity with Telegram** — 3-07 创建，9-18 更新并关闭，历时约 6 个月。虽已闭环，但周期偏长，反映渠道对齐类需求排队较久。
  https://github.com/HKUDS/nanobot/issues/1663

- **#5459 [OPEN] Add native Google Vertex AI provider for Claude models** — 8-20 创建，至今近一个月仅有 1 条评论，无对应 PR。Provider 覆盖缺口长期开放，建议维护者给出明确取舍说明（计划支持 / 暂不支持及原因）。
  https://github.com/HKUDS/nanobot/issues/5459

- **#5377 [CLOSED]** — 8-13 创建至 9-17 关闭，历时约一个月，涉及数据丢失类问题，处理周期相对偏长，已于今日闭环。
  https://github.com/HKUDS/nanobot/issues/5377

**待合并 PR 中的风险项：**

- **#5611 [OPEN] [conflict]** — 8-30 创建，9-17 更新，已挂起近三周且标记冲突，关联 #5584 的推理重放成本问题。建议优先解决冲突或明确延期，避免长期悬空。
  https://github.com/HKUDS/nanobot/pull/5611

- **#5779 [OPEN] fix(tools): serialize concurrent session file writes** — 9-15 创建，9-17 更新，修复 #4798（并发会话文件写入交错或静默丢失更新）。涉及数据完整性，建议优先评审。
  https://github.com/HKUDS/nanobot/pull/5779

- **#5809 / #5807 / #5805** — 均为今日提交、针对当日新开 Issue 的修复，处于待合并状态，建议尽快合入以关闭 #5808、#5806、#5771。
  https://github.com/HKUDS/nanobot/pull/5809 ｜ https://github.com/HKUDS/nanobot/pull/5807 ｜ https://github.com/HKUDS/nanobot/pull/5805

**维护者行动建议：**（1）确认 #5794 是否完整覆盖 #5798 的串会话场景，否则需补充修复；（2）尽快评审三对「当日 Issue—当日 PR」以缩短回归暴露窗口；（3）对 #5459 给出路线图层面的明确答复。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-09-18）

## 1. 今日速览

今日项目维持高强度活跃：过去 24 小时 Issues 更新 50 条（44 条新开/活跃，6 条关闭），PR 更新 50 条（45 条待合并，5 条已合并/关闭），无新版本发布。讨论焦点集中在 Desktop 端会话管理、Bot Mode / 群聊跨设备可用性，以及 Agent 流式工具调用与视觉回退链的稳定性问题。合并/关闭量（共 11 条）明显低于新开量，积压压力略有上升，且待合并 PR 中相当比例是同一作者（teknium1）的 Desktop 修复"salvage"批次，说明 Desktop 修复进入集中收敛阶段但尚未落地。整体健康度：活跃度高，但合并吞吐是当前瓶颈。

## 2. 版本发布

无新版本发布（最新 Releases 为空）。当前代码库可观察到版本标记 v0.21.3（见 Issue #115006 中引用的 `d177b119e9`），但今日无正式发布动作。

## 3. 项目进展

今日合并/关闭共 5 条 PR，数据中可见的重要关闭项为 Issues 侧：

- **#114753 [CLOSED]** `opencode-free: keyless provider dead — OpenCode 403s anonymous traffic` — 无密钥 `opencode-free` provider 已无法服务任何请求（OpenCode 于 2026-08-26 起将免费层限制在特定环境内）。该问题被关闭，结合同日相关 Issue #115006（`auxiliary_client` 的 `_PROVIDER_ALIASES` 镜像缺失整个 OpenCode 家族），说明 OpenCode provider 相关问题正在被集中处理。
  链接：NousResearch/hermes-agent Issue #114753
- **#114579 [CLOSED]** `[Bug]: Web Dashboard Chat tab freezes completely on image paste (PTY timing race & orphan process leak)` — 当日报告、当日关闭，属快速修复闭环（Dashboard 粘贴图片导致 xterm 冻结、进程泄漏）。
  链接：NousResearch/hermes-agent Issue #114579

PR 侧今日有 5 条合并/关闭，但供给数据中未列出已合并 PR 的具体条目，故不在此展开。**整体推进幅度评估：中等偏低**——方向明确（Desktop 会话/侧栏一致性、配置与 provider 修复），但大量高价值修复仍停留在待合并状态。

## 4. 社区热点

| 排名 | 条目 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | #88584 [OPEN] Automated Nous integration is blocked | 114 | 0 | NousResearch/hermes-agent Issue #88584 |
| 2 | #97681 [OPEN] Bot Group Chats should keep working after Desktop closes | 28 | 2 | NousResearch/hermes-agent Issue #97681 |
| 3 | #38007 [OPEN] System tray support for background running | 12 | 19 | NousResearch/hermes-agent Issue #38007 |
| 4 | #51513 [OPEN] fix(vision): fallback chain non-functional — 5 bugs | 7 | 0 | NousResearch/hermes-agent Issue #51513 |
| 5 | #113887 [OPEN] [Wave] Refactor PR triage: superseded/stale | 5 | 0 | NousResearch/hermes-agent Issue #113887 |

**诉求分析：**
- **#88584（114 条评论，8/17 创建至今未决）** 是今日绝对焦点：`cron/jobs.py` 存在冲突，导致计划中的 Nous→Enterkey 合并被阻塞，且未改动任何 release 分支，dashboard updater 仍停留在上一个已测试的 Enterkey 版本。这是一个**跨仓库自动化流水线阻塞**问题，争议度极高，需维护者优先裁决。
  链接：NousResearch/hermes-agent Issue #88584
- **#97681** 反映用户核心期望：Bot 群聊不应绑定 Desktop 进程存活——「创建群聊、跨网关 Bot 协作、从另一台设备接续，而无需保持 Desktop 打开」。这与 #38007（系统托盘后台运行，👍 19，为今日反应最高）指向同一根因：**Desktop 被当作常驻服务，但生命周期管理缺失**。
  链接：NousResearch/hermes-agent Issue #97681 ｜ NousResearch/hermes-agent Issue #38007
- **#51513** 集中暴露 Gemini 视觉回退链的 5 个 bug（限流/配额耗尽下回退完全失效），是高质量的用户自诊断报告。
  链接：NousResearch/hermes-agent Issue #51513
- **#113887** 是作者发起的 265 行 PR 分诊表（标记 superseded/stale 候选），获得 5 条讨论，反映社区对**积压治理**的主动参与。
  链接：NousResearch/hermes-agent Issue #113887

## 5. Bug 与稳定性

按严重程度排列（数据来源为今日更新的 Issues）：

**P2 / 高危**
- **#105189** 工具调用中途流中断：参数被替换为空对象 `{}` 后仍派发调用——可能导致工具以空参数误执行，属静默数据损坏风险。**暂无对应 fix PR**。
  链接：NousResearch/hermes-agent Issue #105189
- **#51513** 视觉回退链完全失效（5 个 bug，含 Gemini 限流场景）。作者称附完整修复与验证，**待维护者采纳**。
  链接：NousResearch/hermes-agent Issue #51513
- **#91440** `cleanup_vm()` 使用原始 session ID 而非解析后的 `"default"` 环境键，导致终端环境创建与清理使用不同 task ID —— 环境泄漏风险。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #91440
- **#42248** Kanban worker 在使用自定义 OpenAI 兼容本地 provider（Unsloth llama-server）时于 `__psynch_cvwait` 死锁，worker 0% CPU。6/8 创建至今未解，**属长期稳定性隐患**。
  链接：NousResearch/hermes-agent Issue #42248
- **#98214** `hermes update --check` 在浅克隆+本地提交场景下恒报「Update available」（compare API 无法解析 local-only HEAD SHA）。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #98214
- **#60634** Runs SSE 暴露的 reasoning 数据与 session/history 原始消息不一致。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #60634
- **#100996** 内嵌 Browser（preview webview）静默拦截 `window.open()`，导致 Google Sign-In 等 OAuth 流程无声失败。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #100996
- **#114323** `openai-codex` 认证有效且运行时可正常使用，但 `/model` 显示「needs setup」与 0 models。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #114323
- **#115028** skills.sh 中 `SKILL.md` 位于仓库根目录的 skill 可被 `search` 列出，但 `inspect`/`install` 无法解析。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #115028

**P3 / 中低危**
- **#85574** Slack Socket Mode watchdog 无法自愈僵尸 aiohttp session——重连复用同一已损坏客户端。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #85574
- **#83662** Slack Socket Mode 重连泄漏 `connect()` 循环，永久重试并报 "Session is closed"。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #83662
- **#115006** `auxiliary_client.py` 的 `_PROVIDER_ALIASES` 镜像缺失整个 OpenCode 家族，导致 aux 任务误报可用 provider 不可用（v0.21.3 引入）。**无 fix PR**。
  链接：NousResearch/hermes-agent Issue #115006
- **#114753**（已关闭）opencode-free 无密钥 provider 已死。
  链接：NousResearch/hermes-agent Issue #114753

**已有 fix PR 的项：** 数据中未显示上述 Bug 与今日待合并 PR 存在明确的 issue 编号对应关系（PR 摘要引用的是 #114124、#114359、#113842、#113827、#114638、#114086、#114471 等编号，均未出现在今日 Issue 列表中）。

## 6. 功能请求与路线图信号

| Issue | 需求 | 相关 PR / 信号 | 纳入下版本可能性 |
|---|---|---|---|
| #97681 | Bot 群聊在 Desktop 关闭后继续工作 | 无直接 PR，但与 #38007 同源 | 中——需架构级改动 |
| #38007 | Desktop 系统托盘后台运行（👍 19） | 无直接 PR | 中——实现清晰、需求明确，但标记 needs-decision |
| #49422 | 自定义 Enter/Ctrl+Enter 发送与换行（👍 3） | 无直接 PR | 中——改动面小，用户呼声合理 |
| #100149 | Dashboard Plugin SDK：路由级独占 shell（needs-decision） | 无直接 PR | 低—中，取决于插件生态规划 |
| #105189 | （隐含需求）流中断时工具调用应安全失败而非以空参数派发 | 无 PR | 高——属正确性修复 |

其他可见 PR 侧的新增能力：
- **PR #115051** `feat(cron): make incident error-truncation length configurable` —— 将 `cron/incidents.py` 中硬编码的 `MAX_ERROR_CHARS = 500` 改为可配置（Python traceback 常被截断）。
  链接：NousResearch/hermes-agent PR #115051
- **PR #89753** `feat(desktop): add "Home" option to Move to project session menu` —— 允许会话移回无项目的 Home 桶。
  链接：NousResearch/hermes-agent PR #89753
- **PR #92192** `i18n(id): add Indonesian root documentation trio` —— 补齐印尼语 README/CONTRIBUTING/SECURITY。
  链接：NousResearch/hermes-agent PR #92192

## 7. 用户反馈摘要

- **Desktop 生命周期是最大痛点**：用户明确希望 Bot 协作与群聊不依赖 Desktop 常驻（#97681），并希望关闭窗口后应用仍能在后台运行（#38007，👍 19 为今日最高）。当前 Windows/Linux 下 `window-all-closed → app.quit()` 导致每次启动都是冷启动（Electron 初始化 + Python 后端 + 配置加载）。
- **键位习惯差异被忽视**：#49422 用户指出 Enter 发送极易误触，参照微信/QQ/飞书，希望可自定义。（#49422 中该 Issue 标题亦出现中文诉求，反映中文用户群体的具体场景。）
- **免费/无密钥 provider 的可靠性焦虑**：#51513 用户指出 Gemini 免费层虽好但「限流/配额耗尽」不可靠，回退链本该兜底却完全失效；#114753 与 #115006 显示 OpenCode 免费路径与 provider 别名一致性也存在断裂。
- **静默失败令人不安**：#100996（OAuth 无提示失败）、#105189（空参数派发）、#114323（模型可用却显示 needs setup）共同反映用户对"无声错误"的强烈不满——他们期望失败要显式。
- **本地模型用户被卡**：#42248 使用 Unsloth llama-server 的 Kanban worker 死锁已逾三个月未解，属被长期忽视的高投入用户群体。

## 8. 待处理积压

按创建时间与影响面排序，提醒维护者关注：

1. **#38007** — 创建于 2026-06-03，标记 `needs-decision`，已积压约 3.5 个月，👍 19 为今日最高，需求清晰却无决策。
   链接：NousResearch/hermes-agent Issue #38007
2. **#42248** — 创建于 2026-06-08，本地模型 provider 死锁，P2 且无 fix PR，积压约 3 个月。
   链接：NousResearch/hermes-agent Issue #42248
3. **#51513** — 创建于 2026-06-23，作者已提供"完整修复与验证"，仍为 OPEN，属**可直接采纳的高价值贡献**。
   链接：NousResearch/hermes-agent Issue #51513
4. **#49422** — 创建于 2026-06-20，键位自定义，改动面小、用户需求明确，积压近 3 个月。
   链接：NousResearch/hermes-agent Issue #49422
5. **#88584** — 创建于 2026-08-17，114 条评论且无 👍，自动化集成阻塞，**讨论热度与实际推进严重不匹配**，需维护者明确结论。
   链接：NousResearch/hermes-agent Issue #88584
6. **PR #89753** — 创建于 2026-08-19，Desktop "Move to Home" 功能，待合并近一个月。
   链接：NousResearch/hermes-agent PR #89753
7. **PR #92192** — 创建于 2026-08-22，印尼语文档三件套，属低风险文档贡献，待合并近一个月。
   链接：NousResearch/hermes-agent PR #92192
8. **#85574 / #83662** — 均为 Slack Socket Mode 重连相关 P3 缺陷（8/11、8/13 创建），常年未修，存在平台适配层累积技术债的风险。
   链接：NousResearch/hermes-agent Issue #85574 ｜ NousResearch/hermes-agent Issue #83662

**维护者行动建议（基于以上数据）：** 优先裁决 #88584（阻塞自动化）与 #38007（needs-decision，反应最高），并考虑采纳 #51513 的现成修复以快速提升视觉稳定性；同时 PR 侧 45 条待合并中大量为 Desktop 一致性修复（#114984、#114888、#114988、#114973、#114978、#114952、#114970、#114965 等），建议集中评审以恢复合并吞吐。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-18

> 数据来源：github.com/sipeed/picoclaw 过去 24 小时动态

## 1. 今日速览

PicoClaw 今日进入一个相对平静的整理期：无新版本发布，Issues 侧仅有 1 条关闭（无新开），PR 侧 14 条更新中 6 条被合并/关闭、8 条仍待合并。已关闭的 6 条 PR 中，有 5 条是 Dependabot 依赖升级，说明维护者今日集中清理了积压的依赖项。目前待处理的 8 条 PR 普遍带有 `stale` 标记，且创建时间跨度为 2026-07-03 至 2026-09-17，反映出审查队列存在明显积压。整体活跃度评估：**中等偏低**——更新量尚可，但以清理性工作为主，缺乏核心功能推进的强信号。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 6 条 PR 全部集中在依赖维护上，无功能性改动合并：

| PR | 内容 | 链接 |
|---|---|---|
| #3360 | 升级 `larksuite/oapi-sdk-go/v3` 3.9.4 → 3.11.0 | sipeed/picoclaw PR #3360 |
| #3361 | 升级 `google.golang.org/protobuf` 1.36.11 → 1.36.12 | sipeed/picoclaw PR #3361 |
| #3362 | 升级 `golang.org/x/term` 0.44.0 → 0.45.0 | sipeed/picoclaw PR #3362 |
| #3363 | 升级 `ergochat/irc-go` 0.6.0 → 0.7.0 | sipeed/picoclaw PR #3363 |
| #3364 | 升级 `aws/aws-sdk-go-v2` 1.42.0 → 1.45.1 | sipeed/picoclaw PR #3364 |

此外，一条功能性修复 PR #3358 `[CLOSED] fix(agent): thread responses to the originating question message` 今日关闭（创建于 2026-09-01）。该 PR 解决的是：当用户消息非回复形式触发对话轮次（如群组中直接 @提及）时，出站响应不携带 `ReplyToMessageID`，导致回答在聊天中与提问脱节。该 PR 已关闭，但数据未标明是否被合并——建议维护者确认其状态，若为未合并关闭，则该问题仍未解决。

**整体推进度**：今日项目向前迈进有限，主要收益是依赖安全性与兼容性维护，核心功能层无实质进展。

## 4. 社区热点

今日评论数据稀疏，唯一有明确互动的是：

- **Issue #3349** [CLOSED] [stale] [BUG] QQ 频道无法正常使用 — 评论 5 条，👎 0
  作者 bxwl5，创建 2026-08-30，更新 2026-09-17
  链接：sipeed/picoclaw Issue #3349
  摘要：在 docker 版本和 Linux x86 版本上均复现，gateway 日志报错 `failed to get websocket info: code:401`，返回「请求头 Authorization 参数格式错误」（code 11241 / err_code 40011005）。

**背后诉求分析**：这是今日唯一获得实际讨论的问题，5 条评论说明有用户群体在跟进。错误直指 QQ 频道接入的鉴权头格式问题，属于渠道集成的配置/协议层缺陷。该 Issue 已关闭，但需确认是「已修复」还是「stale 自动关闭」——标签中含 `[stale]`，存在被机器人自动关闭而非真正解决的风险。

其余 PR 的评论数均为 `undefined`，无可比对的讨论热度。

## 5. Bug 与稳定性

按严重程度排列：

**高 — #3349 QQ 频道完全不可用**（[CLOSED] [stale]）
- 影响：QQ 频道渠道完全无法工作，docker 与 Linux x86 两种部署方式均复现。
- 症状：gateway 报 401，Authorization 请求头格式错误。
- Fix PR：**未见对应的 fix PR** 出现在今日数据中。
- 风险提示：该 Issue 于 2026-09-17 更新并关闭，但带 `stale` 标签，且无配套修复 PR，**高度怀疑为 stale 机器人自动关闭而非真正修复**。建议维护者核查 QQ 渠道鉴权逻辑是否已实际修正。

**中 — #3358 响应线程关联缺失**（[CLOSED]）
- 影响：非回复形式触发的对话，回答与提问在聊天中脱节，影响可读性与上下文连贯。
- Fix PR：即 #3358 本身，已关闭（合并状态待确认）。
- 链接：sipeed/picoclaw PR #3358

**中 — #3376 DeltaChat 渠道配置校验失败**（[OPEN]）
- 影响：启用 deltachat 渠道时 gateway 启动失败，报 `channel "deltachat" has ...` 配置加载错误（关联 #3265）。
- Fix PR：**已有** — 即本条 PR #3376，待合并。
- 链接：sipeed/picoclaw PR #3376

**低 — #3347 Web UI 卡顿**（[OPEN] [stale]）
- 影响：聊天区域文本量大时 Web UI 卡顿；作者已在桌面与移动端（Brave）自测修复。
- Fix PR：**已有** — 即本条 PR #3347，待合并。
- 链接：sipeed/picoclaw PR #3347

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。从待合并 PR 判断，以下功能方向已有实现雏形，可能进入下一版本：

1. **OpenAI Responses API 迁移** — PR #3381 [OPEN]，创建与更新均为 2026-09-17，是最新的功能提案。将 OpenAI provider 切换到 Responses API，属非破坏性新功能。**信号强度最高**（最新、明确标记为 feature）。
   链接：sipeed/picoclaw PR #3381

2. **IRCv3 多行消息组装** — PR #3354 [OPEN]，默认请求 `batch`、`message-tags`、`draft/multiline`，使长/多行 IRC 消息作为单条入站消息处理。
   链接：sipeed/picoclaw PR #3354

3. **Build Remote Agent 手机配对** — PR #3344 [OPEN]，新增 `gbr/1` 配对协议，手机可旁观桌面 agent。
   链接：sipeed/picoclaw PR #3344

4. **Parallel Search MCP 文档示例** — PR #3368 [OPEN]，为 CLI 指南加入免 API key 的 Parallel Search MCP 配置示例。
   链接：sipeed/picoclaw PR #3368

5. **DeltaChat 实现重构** — PR #3222 [OPEN]，清理实现、移除旧特性与硬编码、净减 200 行代码。
   链接：sipeed/picoclaw PR #3222

6. **工具反馈动画限时** — PR #3353 [OPEN]，动画 5 分钟后停止，对齐 Telegram typing feedback 的生命周期上限。
   链接：sipeed/picoclaw PR #3353

**判断**：上述除 #3381 外均带 `stale` 标签，长时间滞留审查队列。若无维护者介入，这些已完成的实现可能持续无法落地。

## 7. 用户反馈摘要

从今日可获取的信息中提炼：

- **真实痛点**：#3349 的 QQ 频道用户遭遇的是**开箱即用的渠道不可用**——无论 docker 还是 Linux x86 部署均失败，鉴权头格式错误直接阻断了使用。5 条评论表明不止单一用户受影响，且用户已主动提供 gateway 日志，属高质量反馈。
- **使用场景**：可见用户部署方式以 docker 和 Linux x86 为主；渠道使用涵盖 QQ、DeltaChat、IRC、Telegram 等，说明 PicoClaw 被用于多平台消息接入。
- **满意/不满意**：#3347 作者表示在桌面与移动端（Brave）自测后「不再卡顿」，属正面反馈；但同一 PR 带 `stale` 标签长期未合，可能带来「提了没人理」的挫败感。
- **数据局限**：今日评论数据稀少，多数 PR 评论数为 `undefined`，无法进一步量化情绪分布。

## 8. 待处理积压

以下 PR 均带 `stale` 标签、创建时间久、仍处 OPEN 状态，提醒维护者关注：

| PR | 标题 | 创建日期 | 积压天数（截至 2026-09-18） | 链接 |
|---|---|---|---|---|
| #3222 | refactor(deltachat): cleanup implementation, documentation -200LOC | 2026-07-03 | ~77 天 | sipeed/picoclaw PR #3222 |
| #3344 | Add Build Remote Agent phone pairing (gbr/1) | 2026-08-23 | ~26 天 | sipeed/picoclaw PR #3344 |
| #3347 | fix laggy interface | 2026-08-27 | ~22 天 | sipeed/picoclaw PR #3347 |
| #3354 | feat(irc): assemble IRCv3 multiline messages | 2026-08-31 | ~18 天 | sipeed/picoclaw PR #3354 |
| #3353 | fix(channels): bound tool feedback animations | 2026-08-31 | ~18 天 | sipeed/picoclaw PR #3353 |
| #3376 | fix(deltachat): initialize as custom channel | 2026-09-10 | ~8 天 | sipeed/picoclaw PR #3376 |

**特别提醒**：
- **#3222 已积压约 77 天**，是队列中最久的 PR，且为净减 200 行的重构，长期挂起会增加后续合并冲突风险。
- **#3347 与 #3376 均为带修复的 Bug PR 却迟迟未合**，用户体验问题（UI 卡顿、DeltaChat 启动失败）持续存在。
- **#3349（QQ 渠道 Bug）无对应 fix PR 即被关闭**，建议优先核查是否误关。

---

*本日报严格依据所提供 GitHub 数据生成，未引入外部信息。部分 PR 的评论数为 `undefined`、#3358 的合并状态未标明，相关判断已在文中标注不确定性。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-18

## 1. 今日速览

今日 NanoClaw 仓库无新版本发布，Issues 更新量为 0，社区讨论入口完全静默。活跃度全部集中在代码贡献侧：过去 24 小时共有 17 条 PR 更新，其中 13 条待合并、4 条已合并/关闭，呈现"高提交、低讨论"的态势。当日新增 PR 聚焦于 Codex/OpenCode 的传输层与历史序列化可靠性问题（#3851、#3850、#3849），由同一位外部贡献者与核心成员推动。整体健康度中性偏积极：合并通道保持流动，但评论数据缺失、无 Issue 流入，社区反馈闭环信号不足。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并/关闭 4 条 PR，均围绕安装与仓库维护基础设施：

- **#3847 [CLOSED] fix(setup): enable corepack pnpm in ~/.local/bin when the global bin dir is read-only**（作者 glifocat，标记 kind/bug、core-team）
  修复了 Linux 上 Node 以系统级方式安装在 `/usr` 下、用户非 root 时，`corepack enable` 因需将 shim 写入只读目录而失败、导致 bootstrap 永久挂起的问题。这是对安装路径阻塞性缺陷的直接修复。
  链接: nanocoai/nanoclaw PR #3847

- **#3844 [CLOSED] fix(setup): replace broken sudo retry with user-owned npm prefix fallback**（作者 DorZvulun）
  修复 `setup.sh` 的 pnpm-install 回退逻辑在 Fedora（`dnf install nodejs`）与 Debian/Ubuntu（`apt install nodejs`）等发行版包管理安装 Node 的场景下永久失败的问题，改为使用用户自有 npm prefix。
  链接: nanocoai/nanoclaw PR #3844

- **#3846 [CLOSED] feat(skills): add /add-typesafe-tool and the maintainer agent template**（作者 glifocat）
  将 TypeSafe 的 Jev 决策模型作为容器工具引入，并提供 `maintainer` agent 模板，使分类、排序与 yes/no 判定统一走该模型。
  链接: nanocoai/nanoclaw PR #3846

整体来看，本日项目推进方向集中在"降低安装门槛"与"补齐维护者工具链"两条主线，属于稳定性与可维护性投入，而非新功能面扩张。

## 4. 社区热点

需要说明：本次数据中所有 PR 的评论数均标记为 `undefined`、👍 均为 0，因此无法以评论/反应量排序。以下按**当日新建 PR** 及**标签覆盖广度**识别热点：

- **#3850 [OPEN] Fix/codex http sse transport**（作者 ionescu77，创建 2026-09-18）
  标签覆盖 agent-runner、channels、configuration、containers、providers、repository-maintenance、setup-installation、skills 共 8 个领域，是当日覆盖面最广的 PR。与 #3851 同源，指向 Codex 传输层可靠性这一集中诉求。
  链接: nanocoai/nanoclaw PR #3850

- **#3851 [OPEN] fix(codex): make Responses transport configurable**（作者 ionescu77，创建 2026-09-18）
  作者明确指出动机是**代理后面 Websockets 传输协议的可靠性问题**，并引用了自身 Issue #3338 与既有 PR #2672。这表明"代理环境下的 transport 稳定性"是一条被反复提及、尚未收敛的痛点主线。
  链接: nanocoai/nanoclaw PR #3851

- **#3741 [OPEN] feat(tasks): --fresh-session, so a scheduled series can run stateless**（作者 slambert，更新 2026-09-18）
  讨论集中在"定时任务复用单一长对话导致成本逐夜递增"——作者给出具体量级：其某个 job 成本增长约 15%。这是一个带有真实成本数据的诉求，具备较强的可落地性。
  链接: nanocoai/nanoclaw PR #3741

## 5. Bug 与稳定性

按严重程度排列（今日无新 Issue 报告，以下均来自 PR 侧修复或既有未合并修复）：

**高 — 安装/引导阻塞（已有 fix、已合并）**
- Linux 系统级 Node 安装下 `corepack enable` 失败，导致 bootstrap 永久挂起。已由 #3847 修复并关闭。
  链接: nanocoai/nanoclaw PR #3847
- 发行版包管理安装 Node 时 `setup.sh` pnpm 回退永久失败。已由 #3844 修复并关闭。
  链接: nanocoai/nanoclaw PR #3844

**高 — Provider 传输可靠性（有 fix PR、待合并）**
- 代理环境下 Codex 的 Websockets 传输协议存在可靠性问题。fix 见 #3851（使其可配置）与 #3850（HTTP SSE transport），均处于 OPEN 状态，尚未合并。
  链接: nanocoai/nanoclaw PR #3851 / nanocoai/nanoclaw PR #3850

**中 — 会话历史序列化失败（有 fix PR、待合并）**
- OpenCode 路径下，当存储的会话历史以 assistant tool call 开头时，违反 Gemini 的严格 turn 顺序约束（`functionCall` 必须跟随 `user` 或 `functionResponse` turn），导致每次请求构建失败。修复 PR #3849 待合并。
  链接: nanocoai/nanoclaw PR #3849

**中 — 附件传递（长期挂起 fix）**
- agent-runner 未能将频道附件以结构化 parts 形式传递给 provider，fix PR #3156 自 2026-07-30 起持续 OPEN 至今（详见第 8 节）。
  链接: nanocoai/nanoclaw PR #3156

**低 — 测试稳定性**
- webhook 端口恢复测试此前使用随机端口，可能已被占用从而产生二次 `EADDRINUSE` 与 `ECONNREFUSED`；#3803 改为重试 fixture 自有端口。仍为 OPEN。
  链接: nanocoai/nanoclaw PR #3803

## 6. 功能请求与路线图信号

结合今日 PR 生态，以下方向信号最强：

- **网关（Gateway）抽象化与技能化** — 由 zvi-fried 主导的一组 PR 构成完整重构序列：#3815 集中化凭证网关契约与人工审批生命周期；#3816 将 OneCLI 抽离为可安装技能；#3817 新增 Iron Proxy 网关；#3818 让 setup 可选择网关而不影响 provider 登录。四者均标记 core-team，且共享同一 `gateway` seam，具备较高的成组落地可能性。
  链接: nanocoai/nanoclaw PR #3815 / nanocoai/nanoclaw PR #3816 / nanocoai/nanoclaw PR #3817 / nanocoai/nanoclaw PR #3818
- **OpenCode 认证接入 Iron Proxy** — #3825 支持经 API key 或原生 ChatGPT 登录认证，凭证存储与 OAuth 刷新由 Iron Control 负责，与上述网关重构同向。
  链接: nanocoai/nanoclaw PR #3825
- **定时任务无状态执行** — #3741 提出 `--fresh-session`，解决长会话复用导致的成本累积，具备明确的成本收益论证。
  链接: nanocoai/nanoclaw PR #3741

## 7. 用户反馈摘要

今日无 Issue 评论数据，无法从评论中提炼反馈。仅能从 PR 摘要中捕捉贡献者自述的真实痛点：

- **代理后 Websockets 不可靠**（#3851）：用户 ionescu77 因代理场景下的传输可靠性问题而提交补丁，并关联既有 Issue #3338 —— 说明该痛点跨时间持续存在。
- **定时任务成本失控**（#3741）：用户 slambert 指出定时任务复用同一长对话，导致"每晚重读此前所有内容"，相同任务的成本逐夜上升，其个人某个 job 增长约 15%。
- **安装流程在主流发行版上不可用**（#3844、#3847）：Fedora 与 Debian/Ubuntu 通过发行版包管理器安装 Node 的用户，在 setup 阶段遭遇永久失败或挂起 —— 这是新用户首次接触项目即会碰到的阻断。

## 8. 待处理积压

以下 PR 长期 OPEN 且今日仅有更新时间、无合并进展，建议维护者优先关注：

- **#2681 [OPEN] fix(service): skip linger on per-home-encrypted systems (#2680)**（作者 glifocat）
  创建于 2026-06-03，已滞留约 **3.5 个月**。标记 kind/bug、core-team、area/setup-installation。关联 Issue #2680，属安装/服务启动路径缺陷。
  链接: nanocoai/nanoclaw PR #2681
- **#3156 [OPEN] fix(agent-runner): carry channel attachments to providers as structured parts**（作者 glifocat）
  创建于 2026-07-30，已滞留约 **7 周**。标记 kind/bug、PR: Fix、core-team，涉及 agent-runner 与 providers 的附件传递正确性。
  链接: nanocoai/nanoclaw PR #3156

两条积压均为 core-team 标记的 bug fix，且集中在安装与运行时核心路径，长期未合并不利于稳定性基线收敛。

---

**数据说明**：本次日报基于 2026-09-18 抓取的 PR 摘要与标签生成，Issues 数据为 0 条，所有 PR 的评论数与点赞数均为 `undefined` / `0`，因此"社区热点"部分以标签覆盖度与新建时间替代评论热度进行排序，不代表实际讨论活跃程度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-18

## 1. 今日速览

今日 IronClaw 处于**低速维护状态**：过去 24 小时无新版本发布、无 PR 更新，仅 2 条 Issue 有活动。活跃度集中在 LLM 请求路径的增强讨论与自动化基准失败分析上，均无代码合并落地。Issue #7537 在创建一个多月后于今日再次更新，是本日唯一有评论互动的议题。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR（合并/关闭: 0，待合并: 0）。项目在代码层面无可见推进。

## 4. 社区热点

| Issue | 标题 | 评论 | 反应 | 链接 |
|---|---|---|---|---|
| #7537 | feat(llm): generic per-request thinking/effort control (provider-native mapping incl. DeepSeek chat_template_kwargs) | 2 | 0 | nearai/ironclaw Issue #7537 |
| #8101 | Daily ironclaw failure taxonomy — 2026-09-17 | 0 | 0 | nearai/ironclaw Issue #8101 |

**#7537** 是今日唯一有评论互动的议题（2 条评论），也是更新跨度最长的一条（创建于 2026-08-12，今日更新）。诉求指向一个通用化的**每请求思考/推理强度控制层**：由各 provider adapter 将统一的 thinking level 映射为各自原生参数，触发场景为通过 NEAR AI 使用 DeepSeek V4 Flash。该议题带有 `enhancement` 与 `scope: llm` 标签，说明其涉及跨 provider 抽象，属于架构层面的设计讨论，评论互动反映维护者/贡献者仍在权衡实现路径。

**#8101** 为每日自动生成的失败分类报告（无评论、无反应），属于例行质量观测类议题，社区讨论度低。

## 5. Bug 与稳定性

今日无明确标注为 Bug、崩溃或回归的 Issue。

需关注的一条稳定性信号来自 Issue #8101：其引用的 officeqa 基准运行存在 **35 个 non-pass 任务**，摘要描述为"overwhelming..."（数据中摘要被截断，无法确认具体失败模式与严重程度）。该报告未说明是否已有 fix PR，建议维护者回看完整报告以判断是否存在系统性失败。

## 6. 功能请求与路线图信号

- **每请求 thinking/effort 控制（#7537）**：今日唯一的新功能型请求。其设计已明确为"per-request + per-model default"两级控制，并要求各 provider adapter 做原生参数映射。由于当前无对应 PR，短期内纳入下一版本的可能性无法从现有数据判断；但该议题持续有互动，具备被采纳为 LLM 层通用能力的信号价值。

其余 Issue 均为运行观测类，不含新功能请求。

## 7. 用户反馈摘要

本日数据中，用户反馈主要体现为两类：

- **LLM 能力表达不足**：#7537 的诉求是当前请求路径缺乏统一的思考强度控制手段，用户需要在不依赖 provider 私有接口的前提下按请求调节推理强度，并以 DeepSeek V4 Flash 为具体用例。这属于"能力缺口"型反馈，而非缺陷投诉。
- **基准质量可见性**：#8101 表明项目在持续以每日分类方式跟踪 ironclaw 在 officeqa 等套件上的失败情况，officeqa 一次运行出现 35 个 non-pass 任务是当前最具体的质量痛点数据点。

今日无满意度相关的正面或负面表态数据（所有 Issue 反应数均为 0）。

## 8. 待处理积压

- **nearai/ironclaw Issue #7537** — 创建于 2026-08-12，至今已逾一个月，仍为 OPEN 且无关联 PR，标签为 `enhancement` + `scope: llm`。作为跨 provider 的设计型增强，长期悬置可能影响 LLM 层抽象定案，建议维护者明确取舍或给出实现方向。
- **nearai/ironclaw Issue #8101** — 2026-09-17 创建后无任何响应，涉及 35 个 non-pass 任务的失败分类，建议确认是否属已知问题或需单独跟踪。

---

**项目健康度小结**：今日无代码流动（PR = 0，Release = 0），Issues 侧仅 2 条更新且互动量极低（合计 2 条评论、0 反应），整体活跃度偏低。稳定性方面无新报缺陷，但基准失败报告提示存在待解释的测试缺口。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-18）

## 1. 今日速览

今日项目处于**高 PR 活跃、低版本产出**的状态：24 小时内 20 条 PR 更新（13 条待合并、7 条已合并/关闭），但无新版本发布。5 条 Issues 全部为 `stale` 状态更新，且均为 2026-03-30 创建、2026-09-18 被触碰的历史问题，反映**存量问题清理滞后**。合并/关闭侧以 release 分支整合与 Cowork/OpenClaw 修复为主，开发重心明显偏向 Cowork 会话体验与 OpenClaw 运行时稳定性。整体活跃度评估：**开发活跃度中高，社区响应健康度偏低**（无新开 Issue 获得实质讨论）。

## 2. 版本发布

今日无新版本发布，无 Releases 记录。需注意 PR #2715 `Release/2026.9.18` 已被关闭（作者 liuzhq1986），该发行分支未以 Release 形式落地。

## 3. 项目进展

今日合并/关闭的 7 条 PR 中，以下两条为可辨识的主要推进项：

- **PR #2696 [CLOSED]** `feat(cowork): turn workspace review, inline question dock and Tasks panel` — 将 Codex 风格的会话工作区改进（对话轮次复盘、内联问题坞、Tasks 面板）从下游 fork 回基到 `release/2026.9.15`。
  https://github.com/netease-youdao/LobsterAI/pull/2696
- **PR #2703 [CLOSED]** `feat: subagent session visibility` — 子智能体会话可见性。
  https://github.com/netease-youdao/LobsterAI/pull/2703
- **PR #2702 [CLOSED]** `fix: openclaw workspace setup recovery` — OpenClaw 工作区设置恢复修复。
  https://github.com/netease-youdao/LobsterAI/pull/2702
- **PR #2715 [CLOSED]** `Release/2026.9.18` — 覆盖 renderer/docs/main/openclaw/cowork/im/artifacts 多模块的发行分支已被关闭，摘要为空。
  https://github.com/netease-youdao/LobsterAI/pull/2715

**推进幅度**：功能侧以 Cowork 会话工作区与子智能体可见性为增量；稳定性侧以 OpenClaw 工作区恢复为修复重点。因发行分支关闭而非合并、且无 Release 产出，本日净交付偏向"内部整合与缺陷收敛"，未形成面向用户的版本级跃迁。

## 4. 社区热点

今日 Issues/PRs 的互动数据极其稀疏——5 条 Issues 全部仅 1 条评论、0 👍；15 条展示 PR 的评论数均显示为 `undefined`。**今日不存在真正意义上的讨论热点**。相对值得关注的是同日由同一作者（alison-xx）集中提交的一批 PR：

- **PR #2716 [OPEN]** `feat(cowork): add Auto and Max model modes` — 为 Cowork 增加每会话模型模式：Auto 每轮自动选模型，Max 使用用户指定的最强模型，路由策略基于本地模型列表推导。
  https://github.com/netease-youdao/LobsterAI/pull/2716

**诉求分析**：Zero 评论数说明社区互动渠道未有效激活；PR 集中于少数作者，暗示当前项目节奏由核心开发者驱动而非社区共建，外部贡献者的参与度是潜在健康度隐患。

## 5. Bug 与稳定性

按严重程度排列（依据问题影响面，非官方评级）：

- **高｜Issue #1016 [OPEN] [stale]** 网易员工登录完成后登录态（auth token）未下发，客户端保持未登录、无法使用。属核心可用性阻塞。
  https://github.com/netease-youdao/LobsterAI/issues/1016
- **高｜Issue #1025 [OPEN] [stale]** 外部开发者（无法访问网易内网）执行 `npm install` / `npm run build` 时因 `scripts/ensure-openclaw-plugins.cjs` 从内网 registry 安装 `moltbot-popo` 而**卡死约 5 分钟**，公网完全不可达，且插件虽标记 `optional: true` 仍触发。
  https://github.com/netease-youdao/LobsterAI/issues/1025
- **中｜Issue #1015 [OPEN] [stale]** `npm.nie.netease.com` registry 不可访问导致打包失败（涉及 `moltbot-popo` 1.0.62，标记 `optional: true`）。
  https://github.com/netease-youdao/LobsterAI/issues/1015
- **中｜Issue #1023 [OPEN] [stale]** 讯飞 API 报 `code: 10012` / `400 Bad Request`，`input token limit is 97280`，疑似引擎 token limit 设置超 90000，用户建议开放引擎参数自定义。
  https://github.com/netease-youdao/LobsterAI/issues/1023

**Fix PR 状态**：以上 4 条均**无对应 fix PR**。今日 OpenClaw 相关修复 PR（#2707、#2708、#2709）针对的是 gateway 重启预算、延迟重启应用、Windows SQLite staging 目录失败，与上述用户报告 Bug 无直接映射。

## 6. 功能请求与路线图信号

今日明确的功能需求来自 Issues：

- **Issue #1024 [OPEN] [stale]** 请求拆分 `src/main/main.ts`（注意原 Issue 写作 `src/mian/main.ts`），作者给出 `core/lifecycle.ts` 等模块化目录建议，理由是企业级 Electron 项目 main.ts 应仅作入口与调度。
  https://github.com/netease-youdao/LobsterAI/issues/1024
- **Issue #1023 [OPEN] [stale]** 请求为引擎添加更多参数自定义设置（针对 token limit 问题）。
  https://github.com/netease-youdao/LobsterAI/issues/1023

**纳入下一版本的可能性判断**：两项请求均为 2026-03-30 提出并已 `stale` 近半年，且 2026-09-18 无任何相关 PR，**短期纳入下一版本的可能性低**。相较之下，同日的 #2716（Cowork Auto/Max 模型模式）、#2710（MCP per-server toolFilter 透传 OpenClaw）、#2712/#2713（Skills 导入替换确认、市场标签计数）更接近可落地的近期路线图。

## 7. 用户反馈摘要

- **认证链路痛点**：使用网易员工登录方式时，Portal（c.youdao.com）浏览器端显示登录成功（右上角出现头像与用户名），但客户端未收到 auth token，导致登录态不同步（#1016）。
- **外部贡献者构建体验差**：非内网开发者克隆后无法正常安装/构建，5 分钟卡死且失败点指向内网专用 registry，插件被标记 optional 却仍阻塞流程（#1025、#1015）。
- **第三方模型接入受限**：讯飞 API 因 token limit 约束直接报错，用户希望获得引擎参数自定义能力而非被动接受默认上限（#1023）。
- **代码可维护性反馈**：有用户直言"您那边的更新太快了我有点跟不上节奏"，并主动提供拆分后的目录结构，说明高频迭代对贡献者跟进构成压力（#1024）。

**满意度信号**：数据中未见明确正面反馈；5 条 Issues 均带 `stale` 标签且各仅 1 条评论，暗示响应周期长。

## 8. 待处理积压

以下问题创建于 2026-03-30、于 2026-09-18 仅被标记为 stale，**积压约半年且无 fix PR**，建议维护者优先评估：

- **Issue #1016** 登录态未下发 —— 影响核心可用性，优先级最高。
  https://github.com/netease-youdao/LobsterAI/issues/1016
- **Issue #1025 / #1015** 内网 registry 导致外部构建卡死与打包失败 —— 影响外部开发者与打包流程。
  https://github.com/netease-youdao/LobsterAI/issues/1025
  https://github.com/netease-youdao/LobsterAI/issues/1015
- **Issue #1024** main.ts 拆分请求 —— 可维护性长期债。
  https://github.com/netease-youdao/LobsterAI/issues/1024
- **Issue #1023** 讯飞 token limit / 引擎参数自定义。
  https://github.com/netease-youdao/LobsterAI/issues/1023

**PR 侧**：待合并 PR 达 13 条，其中多条为 alison-xx 于 2026-09-18 当日集中提交（#2705–#2716 系列），尚未有 review 记录（评论数显示 undefined），存在 review 通道拥塞风险，建议尽快分派评审以避免新的积压形成。

---
*本日报仅基于所提供的 GitHub 数据生成；评论数缺失（undefined）处未作推断。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-18

## 1. 今日速览

过去 24 小时 Moltis 项目整体活跃度**偏低**：仅产生 1 条 Issue 更新与 1 条 PR 更新，无新版本发布，也无任何 PR 被合并或关闭。今日新增的 Issue #1274 是一条功能增强请求，提出为 wasm-web-search 引入预付式搜索跳数（prepaid search hop）机制；唯一的新 PR #1275 为 Dependabot 自动发起的依赖升级，属于例行维护。整体来看，项目今日处于**维护态而非开发推进态**，代码主干无实质变化。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日**无已合并或已关闭的 PR**，项目功能与修复层面未向前推进。当前唯一待合并 PR 为：

- [#1275](https://github.com/moltis-org/moltis/pull/1275) `[OPEN]` chore(deps): bump smol-toml from 1.7.0 to 1.8.0 in /docs（作者：dependabot[bot]，创建/更新：2026-09-18）
  属于 `/docs` 目录下 `npm_and_yarn` 依赖组的自动升级，将 `smol-toml` 由 1.7.0 提升至 1.8.0。该变更仅影响文档站点的依赖，属低风险例行维护，但截至今日仍处于待合并状态。

## 4. 社区热点

今日社区互动量为**零**：Issue #1274 的评论数为 0、👍 为 0，PR #1275 亦无评论记录。因此今日不存在讨论热度或情绪集中点。

- [#1274](https://github.com/moltis-org/moltis/issues/1274)（评论 0 / 👍 0）
- [#1275](https://github.com/moltis-org/moltis/pull/1275)（评论无 / 👍 0）

从诉求角度看，#1274 的标题已透露出一种使用场景关切：用户可能在实际调用 wasm-web-search 时遇到搜索额度/跳数消耗不可控的问题，希望通过“预付（prepaid）”方式对搜索跳数进行配额化或前置结算。但由于正文摘要仅包含 Preflight 检查清单（且第二项“是否来自 chat session issue”未勾选），缺少具体动机描述，暂无足够信息判断其紧迫程度。

## 5. Bug 与稳定性

今日**未报告任何 Bug、崩溃或回归问题**。唯一新开 Issue #1274 标签为 `enhancement`，属功能增强而非缺陷。项目当日稳定性面无风险信号。

## 6. 功能请求与路线图信号

今日唯一的功能请求：

- [#1274](https://github.com/moltis-org/moltis/issues/1274) `[OPEN]` `[enhancement]` **Prepaid search hop for Moltis wasm-web-search?**（作者：iamalanlui，创建/更新：2026-09-17）

该请求针对 `wasm-web-search` 组件，探讨引入“预付搜索跳数”的可能性。结合今日 PR 情况判断：**当前没有任何相关实现 PR**，仓库中唯一的待合并 PR 为主题无关的文档依赖升级，因此该需求在短期内被纳入下一版本的可能性缺乏证据支撑，更可能停留在需求收集与讨论阶段。是否推进，取决于维护者对搜索配额这一产品方向的态度，建议先补齐该 Issue 的动机与使用场景描述。

## 7. 用户反馈摘要

Issue #1274 的评论数为 0，公开内容中**未包含可提炼的用户评论**。从 Issue 正文可获得的有限信息是：作者已确认检索过既有 `enhancement` 请求、认为此前无人提出同类提案；但“是否来自 chat session issue”一栏未勾选，说明该请求并非来自聊天会话自动生成，而更可能是用户主动提交。除此之外，摘要未提供痛点描述、使用场景或满意/不满意表达，故今日无实质用户反馈可供总结。

## 8. 待处理积压

基于今日提供的数据，**无法识别长期未响应的重要 Issue 或 PR**——数据集中仅包含过去 24 小时更新的条目（Issue #1274、PR #1275），二者均为近两日新开，不存在滞留时长问题。需提醒维护者关注的是：

- [#1274](https://github.com/moltis-org/moltis/issues/1274) 目前 0 评论、0 👍，如长期无维护者回应，可能被视为社区需求信号被忽略；
- [#1275](https://github.com/moltis-org/moltis/pull/1275) 作为自动依赖升级，若长期挂起，`/docs` 的依赖将持续落后于 `smol-toml` 1.8.0。

> 说明：本日报严格基于所提供数据生成，未对未提供的长期积压项、评论内容或版本细节作任何推断或补全。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-18

> 数据来源：agentscope-ai/CoPaw GitHub 公开动态（过去 24 小时）

---

## 1. 今日速览

项目今日维持高活跃度：24 小时内 **22 条 Issue 更新**（新开/活跃 16，关闭 6）、**37 条 PR 更新**（待合并 19，已合并/关闭 18），并发布 **1 个 beta 版本（v2.2.2-beta.1）**。活跃焦点集中在 **2.2.x 系列稳定性问题**：SSE 流异常、插件事件循环阻塞、驱动配置并发写入冲突等，均有对应修复 PR 跟进。社区侧，多租户版 Hub 的路线图讨论（#7318，30 条评论）持续发酵，显示团队化部署是最强诉求。整体看，2.2.x 处于"功能快速铺开 + 稳定性补课"并行阶段，安全类问题（提示注入、文件路径处理）开始受到集中关注。

---

## 2. 版本发布

### v2.2.2-beta.1

**更新内容**
- `feat(console)`: 改进分组聊天历史 — [PR #7665](https://github.com/agentscope-ai/QwenPaw/pull/7665)
- `feat(memory)`: 统一 ReMe 斜杠命令 — [PR #7444](https://github.com/agentscope-ai/QwenPaw/pull/7444)
- `chore`: 版本号提升至 2.2.2b1 — [PR #7855](https://github.com/agentscope-ai/QwenPaw/pull/7855)

**破坏性变更 / 迁移注意**
- 发布说明中**未声明破坏性变更**。但需注意版本演进节奏极快：今日同期还出现了指向 `2.2.2-beta.2` / `2.2.2b2` 的社区反馈（[Issue #7856](https://github.com/agentscope-ai/QwenPaw/issues/7856)），以及 `v2.2.2b3` 的版本提升 PR（[PR #7855](https://github.com/agentscope-ai/QwenPaw/pull/7855)）。**建议插件作者与自建部署方固定版本号、避免跨 beta 混用**，并关注插件 API 参数兼容性（见第 5 节 #7856）。

---

## 3. 项目进展

今日合并/关闭的重要 PR，主要推进两条主线：

**稳定性与安全修复**
- [PR #7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) — `fix(security)`: 为技能/知识目录增加完整性保护，防御提示注入导致的技能删除（对应 #7859），目前 **OPEN**。
- [PR #7854](https://github.com/agentscope-ai/QwenPaw/pull/7854) — `fix(drivers)`: 修复驱动 reload 期间并发策略更新丢失（对应 #7850），**OPEN**。
- [PR #7863](https://github.com/agentscope-ai/QwenPaw/pull/7863) — `fix(ci)`: 稳定 Windows reload 与快照测试，**OPEN**。
- [PR #7834](https://github.com/agentscope-ai/QwenPaw/pull/7834) — `fix(console)`: `/compact` 改为作用于当前聊天而非新开会话（对应 #7812），**已关闭**。
- [PR #7860](https://github.com/agentscope-ai/QwenPaw/pull/7860) — `fix(e2e)`: 修复 #7502 控制台改版导致的 e2e 选择器失效，**已关闭**。
- [PR #7862](https://github.com/agentscope-ai/QwenPaw/pull/7862) — `ci(release)`: 将发布产物与测试门禁绑定、E2E watch 集设为阻断，**已关闭**。

**功能推进**
- [PR #7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) — `feat(plugins)`: 干净的插件卸载与可回滚热重载，**OPEN**。
- [PR #7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) — `feat(console)`: 带鉴权的多标签聊天终端，**OPEN**。
- [PR #7846](https://github.com/agentscope-ai/QwenPaw/pull/7846) — `feat`: 会话列表详情与分组改进，**OPEN**。
- [PR #7852](https://github.com/agentscope-ai/QwenPaw/pull/7852) — `feat(skill)`: 技能批量广播，**已关闭**。
- [PR #7685](https://github.com/agentscope-ai/QwenPaw/pull/7685) — `feat(feishu)`: 飞书思考面板可折叠、可选自动折叠（对应 #7570），**已关闭**。
- [PR #7833](https://github.com/agentscope-ai/QwenPaw/pull/7833) — `fix(hub)`: 修正 Hub 本地运行时 CLI、PawApp 访问与模型默认值，**已关闭**。

**评估**：今日约 18 条 PR 被合并/关闭，其中修复类占比明显高于新增功能类，说明项目正处在发布周期后的"收口"阶段——优先消化 2.2.x 引入的回归与体验问题，同时为 Hub 多租户能力做底层铺垫。

---

## 4. 社区热点

| 排名 | 条目 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | #7318 [question][Discussion] QwenPaw Hub 多租户版将于 2.2.0 推出：接下来做什么？ | 30 | 4 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| 2 | #7859 [BUG] 工具结果 system-reminder 中的持久提示注入，指示 Agent 删除全部技能 | 4 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7859) |
| 3 | #7814 Console SSE `_strip_event_headlines` 可产生裸 null 载荷 | 4 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7814) |
| 4 | #7840 插件共享宿主事件循环，一次同步调用即冻结整个实例 | 4 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7840) |
| 5 | #6316 [CLOSED] Agent 类型 cron 任务可选指定模型 | 4 | 0 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6316) |

**诉求分析**
- **#7318 是绝对的社区焦点**：30 条评论、跨近一个月的持续讨论（8/26 创建，9/18 仍在更新），核心诉求是"从个人助手走向团队/多用户部署"，包括多用户访问、管理员管理、隔离与权限等。这已被团队承认为 Hub 的第一版回应。
- **#7859 是安全信号灯**：跨 20+ 轮、多次会话持续出现的注入指令出现在工具结果的 system-reminder/技能清单块中，社区反应迅速，当日即有安全修复 PR（#7864）跟进。
- **#7840 反映插件生态的架构性担忧**：插件与宿主共享事件循环，缺乏契约、监控与隔离，会因单个插件的同步调用导致整实例冻结——这是插件生态规模化前必须回答的工程问题。
- **#6316 的关闭**说明长期存在的"按任务指定模型"诉求已被处理，与今日 [PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)（按会话模型覆盖）方向一致。

---

## 5. Bug 与稳定性

按严重程度排列：

**严重（安全 / 全局可用性）**
1. **#7859 持久提示注入导致技能删除** — 注入指令持续附加在工具结果的 system-reminder 中，指示 Agent 删除全部技能。**已有 fix PR：** [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864)（OPEN）。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7859)
2. **#7840 插件同步调用冻结整个实例** — 插件在事件循环线程做同步 I/O 即导致全局冻结，2.2.0 与 2.2.1 均复现，无隔离/监控/契约。**暂无对应 fix PR**。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7840)

**高（数据完整性 / 流式崩溃）**
3. **#7850 驱动卡片策略丢失更新** — 后台 `reload_driver` 以陈旧卡片覆盖并发策略写入。**已有 fix PR：** [#7854](https://github.com/agentscope-ai/QwenPaw/pull/7854)。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7850)
4. **#7813 Console 流因裸 null SSE 帧冻结** — 单帧畸形载荷即中断整轮流式。**已关闭**（同源问题 #7814 仍 OPEN）。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7813)
5. **#7814 SSE 路径双重健壮性缺口** — `_strip_event_headlines` 可序列化为裸 `null`；`stream_one` 在失败时无终止事件。**暂无对应 fix PR。** [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7814)
6. **#7853 ToolResultPruner 跳过媒体块导致上下文撑爆** — `view_image` 的 base64 永不裁剪、无界累积。**暂无对应 fix PR。** [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7853)

**中（功能回归 / 兼容性）**
7. **#7856 qwenpaw-pet 0.1.1 破坏 2.2.2b2 工具审批** — 插件丢弃 `actor` 参数，属**跨版本插件兼容性回归**。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7856)
8. **#7839 session-sync 跳过孤儿会话文件 + 保留清理报 `database disk image is malformed`** — 影响 2.2.x。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7839)
9. **#7847 文件名含字面百分号会发送/预览错误文件** — 复现于 2.2.2b1，实现自 `290014d` 起未变。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7847)
10. **#7841 桌面端启动时控制台早于后端就绪** — 模型列表与插件面板空白，需手动刷新。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7841)

**低（体验 / 测试卫生）**
11. **#7812 桌面启动后斜杠命令作用于回退会话**（`/compact` 报空记忆）— **已关闭**，对应 [PR #7834](https://github.com/agentscope-ai/QwenPaw/pull/7834)。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7812)
12. **#7857 ACP 关闭回退可能跳过会话清理并泄漏事件循环**。**暂无对应 fix PR。** [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7857)
13. **#7858 调度 mock 导致未 await 协程警告**，掩盖真实异步生命周期缺陷（关联 #7857）。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/7858)

---

## 6. 功能请求与路线图信号

| 需求 | 信号强度 | 判断依据 |
|---|---|---|
| **多租户 / 团队部署（Hub）** | 强 | #7318 讨论量最高，[PR #7833](https://github.com/agentscope-ai/QwenPaw/pull/7833) 已修正 Hub 本地运行时与隔离行为，[PR #7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) 加入鉴权多标签终端——基础设施正在成型。 |
| **按会话 / 按任务的模型覆盖** | 强 | [Issue #6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) 今日关闭；[PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) 提出 `chat.meta.runtime_context.model_slot_override` 方案，仍在审阅中。 |
| **Agent 自主上下文管理（平滑交接）** | 中 | [Issue #7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) 主张上下文驱逐不应纯由 token 阈值触发，应让 Agent 参与决策；与 #7837（user 行无 headline 导致需调用模型打标）互为佐证。 |
| **插件热重载与卸载** | 中 | [PR #7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) 已在推进，与 #7840 的插件隔离诉求方向一致。 |
| **飞书思考面板折叠** | 已落地 | [Issue #7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) → [PR #7685](https://github.com/agentscope-ai/QwenPaw/pull/7685) 已关闭。 |
| **技能批量广播 / 技能池管理** | 中 | [PR #7852](https://github.com/agentscope-ai/QwenPaw/pull/7852) 已关闭，技能管理能力扩展。 |
| **沙箱不可用时工具静默不注册** | 低（问题化） | [Issue #7838](https://github.com/agentscope-ai/QwenPaw/issues/7838)：内核 < 5.13 无 Landlock 时 `recall_history_python` 静默缺失，建议改为显式提示而非静默降级。 |

**预判**：Hub 多租户能力、按会话模型覆盖、插件隔离/热重载最有可能进入下一版本；上下文管理与沙箱降级提示更可能排入后续路线图。

---

## 7. 用户反馈摘要

**真实痛点**
- **长思考模型在 IM 场景的展示问题**：用户明确表示 GLM-5.x 等强制思考模型思考文本过长，输出完成后整屏占用、把最终回复顶到很远（#7570，已由 #7685 解决）。反馈中附带了本地验证方案，说明用户具备较强自解决能力。
- **2.2.x 稳定性带来的信任损耗**：多位用户在 managed cloud（`qwenpaw.platform.agentscope.io`）与 Docker 环境下复现同类问题（#7840、#7837、#7839），提示托管部署与自建部署在稳定性上的一致性值得关注。
- **插件生态的兼容性摩擦**：#7856 显示插件版本与主程序 beta 版本耦合紧密，"一次插件更新即打断工具审批"，对依赖插件的用户是直接的功能中断。
- **会话/历史可追溯性不足**：#7839 中 86 个孤儿会话文件被跳过、无历史导入；#7837 中 user 行无 headline 导致驱逐索引需调用模型打标——用户对"历史被无声丢弃"的容忍度很低。

**使用场景**
- 个人 → 团队的多用户部署（#7318）
- 定时/自动化任务（#6316）
- IM 渠道（飞书）流式交互（#7570）
- 本地插件扩展（chrome、computer-use、longtext-input 等，#7841）

**满意点**
- 飞书 CardKit 流式输出（#3001 引入）被评价为"用着不错"（#7570）。
- 用户愿意提交带复现步骤、环境版本、本地验证补丁的高质量报告，社区协作氛围良好。

**不满意点**
- 桌面端启动竞态（#7841 需手动刷新）
- 沙箱不可用时的静默降级（#7838）
- 数据库损坏类报错（"database disk image is malformed"，#7839）

---

## 8. 待处理积压

**长期未关闭、值得维护者关注：**

1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — 创建于 2026-08-26，讨论最活跃（30 评论）但仍是 OPEN 的讨论帖。作为 Hub 路线图的社区入口，建议给出阶段性结论或已采纳项清单。

2. **[#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733)** — 创建于 2026-09-13，Agent 自主上下文管理，属架构级需求，无人回应式长期挂起风险较高。

3. **[PR #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)** — 按会话模型覆盖，创建于 **2026-07-12**，标注 `first-time-contributor, Under Review`，已近两个月仍 OPEN。首次贡献者 PR 的长期滞留可能影响社区参与意愿。

4. **[PR #7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)** — 插件热重载，创建于 2026-09-04，与 #7840 的插件隔离问题高度相关，建议与插件架构讨论合并推进。

5. **无对应 fix PR 的 OPEN Bug**（建议优先排期）：[#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840)（实例冻结）、[#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)（上下文撑爆）、[#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814)（SSE 健壮性）、[#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857)（事件循环泄漏）。

---

*本日报基于用户提供的 GitHub 数据生成，未引入外部信息。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 · 2026-09-18

## 1. 今日速览

今日 ZeptoClaw 呈现**高强度维护节奏但方向重大调整**：24 小时内 5 条 Issue 更新（1 开 4 闭）、8 条 PR 更新（2 待合并 6 已合并/关闭），无新版本发布。最核心的动作是维护者按用户明确要求移除了全部 GitHub Actions CI 检查（Issue #699 / PR #700），同时关闭了与之直接冲突的 aarch64 二进制体积门禁（#629）与可选集成特性编译检查（#545）。安全侧修复了阻塞全部 18 个 Dependabot PR 的 Rustls 漏洞 RUSTSEC-2026-0285（#697 / #692）。功能侧，本地/严格后端的工具调用兼容层（#698 / #701）与推理模型响应解析（#703）取得实质推进，但引入的新变更在防滥用与稳定性方面仍留有开放项（#702、#698）。

**活跃度评估**：高（10+ 条 Issue/PR 在 24 小时内被创建或关闭），但活跃度集中于维护者单人（qhkm），外部贡献者仅 manelsen 一人参与，社区参与度偏低。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

今日合并/关闭的 PR 集中体现两条主线：

**（a）CI 基础设施拆解**
- **PR #700 [CLOSED] chore(ci): remove GitHub Actions CI checks** — [链接](qhkm/zeptoclaw/pull/700)
  删除 CI、E2E、PR Hygiene 三类工作流及其必需状态规则，移除 README 的 CI 徽章，并更新 agent 指引改为在请求合并时呈现本地验证结果。仅保留 tag 触发的 release 与 Docker 发布。
  对应 Issue #699 — [链接](qhkm/zeptoclaw/issues/699)

**（b）安全依赖修复**
- **PR #692 [CLOSED] fix(deps): upgrade Rustls to 0.23.45 for RUSTSEC-2026-0285** — [链接](qhkm/zeptoclaw/pull/692)
  将 Rustls 从受影响的 0.23.39 升级至已修复的 0.23.45（原提议的 0.23.43 同样受影响），并提升声明的最低版本要求。此修复解除了此前阻塞全部 18 个 Dependabot PR 的 Security audit 与 Cargo deny 失败。
  对应 Issue #697 — [链接](qhkm/zeptoclaw/issues/697)

**（c）功能性推进**
- **PR #701 [CLOSED] feat(providers): sanitize tool schemas and coerce model tool-args for strict/local backends** — [链接](qhkm/zeptoclaw/pull/701)
  所有 `ToolRegistry::definitions*()` 路径在请求发送前对工具 schema 执行 `utils::tool_schema::sanitize_schema()`，并处理外部 MCP server 返回的 schema。这是边缘运行时定位下的关键兼容层。
  对应 Issue #698 — [链接](qhkm/zeptoclaw/issues/698)
- **PR #703 [CLOSED] feat(providers): read reasoning-model replies on OpenAI-compatible endpoints** — [链接](qhkm/zeptoclaw/pull/703)
  修复了解析逻辑仅在 `content` 中取内容的问题：推理模型在 OpenAI 兼容端点上将思考过程放在 `reasoning_content`，且当 token 预算耗尽时 `content` 可能为 null。

**整体推进度**：安全阻塞已清除、边缘/本地模型的工具调用兼容性完成一轮闭环，但 CI 能力整体退化，需依赖本地验证流程补位。

---

## 4. 社区热点

今日**所有 Issues 与 PR 的评论数均为 0、点赞数均为 0**，不存在传统意义上的讨论热度。依据关联度与影响面，可视为焦点的三条：

1. **Issue #699 / PR #700 — 移除 CI** — [Issue](qhkm/zeptoclaw/issues/699) · [PR](qhkm/zeptoclaw/pull/700)
   诉求：用户明确要求移除所有 GitHub Actions CI 检查。这是今日影响最广的变更——它同时导致 #629（aarch64 体积门禁）与 #545（可选集成特性编译）失去依托而被关闭。
2. **Issue #697 / PR #692 — Rustls 漏洞** — [Issue](qhkm/zeptoclaw/issues/697) · [PR](qhkm/zeptoclaw/pull/692)
   诉求：恢复依赖流水线。18 个 Dependabot PR 因该 advisory 全部失败，属于阻塞型安全问题。
3. **Issue #698 / PR #701 — 本地后端工具调用** — [Issue](qhkm/zeptoclaw/issues/698) · [PR](qhkm/zeptoclaw/pull/701)
   诉求：让 tool calling 在弱本地模型与严格后端上可用，直接关系到 ZeptoClaw 的"边缘运行时"定位是否成立。

**分析**：讨论热度为零，说明项目当前是**单人驱动的维护模式**，决策由维护者与单一用户诉求直接推动，缺乏外部社区辩论。项目健康度在此维度存在隐忧。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 项目 | 说明 | Fix 状态 |
|---|---|---|---|
| **高（安全）** | RUSTSEC-2026-0285（Rustls 0.23.39 受影响） | 阻塞全部 18 个 Dependabot PR 的 Security audit 与 Cargo deny | ✅ 已修复，PR #692 升级至 0.23.45（[链接](qhkm/zeptoclaw/issues/697)） |
| **高（可用性）** | 推理模型响应解析缺陷 | OpenAI 兼容端点上 `reasoning_content` 未被读取，`content` 为 null 时丢失回复，常见于 token 预算耗尽场景 | ✅ 已修复，PR #703（[链接](qhkm/zeptoclaw/pull/703)） |
| **高（安全）** | 面板密码登录无限尝试 | 公开面板密码登录端点仅以 bcrypt 成本作为唯一节流，可无限尝试 | ⏳ **Fix PR 开放中**：#702 限制为每 socket peer IP 每滚动 60 秒 5 次尝试，第 6 次返回 HTTP 429（[链接](qhkm/zeptoclaw/pull/702)） |

另需注意：PR #692 摘要指出原提议的 Rustls 0.23.43 **同样受影响**，升级时必须直达 0.23.45 或更新版本。

---

## 6. 功能请求与路线图信号

今日唯一明确的新功能请求来自维护者本人：

- **Issue #698 [OPEN] [feat, area:tools, area:providers, P2-high] feat(providers): sanitize tool JSON schemas + coerce model tool-args for strict/local backends** — [链接](qhkm/zeptoclaw/issues/698)
  指出现有 `ollama`/`local` provider 存在**出站与入站两个缺失层**：出站未净化工具 schema 以适配严格后端，入站未对模型返回的 tool-args 做类型强制。这与 ZeptoClaw 的边缘运行时定位直接相关。

**纳入下一版本的判断**：
- 出站方向已由 PR #701 实现并关闭，**大概率已进入主干**。
- 入站（tool-args 强制转换）在 Issue #698 中仍列为缺失层，Issue 本身保持 OPEN，**是下一版本最明确的功能候选**。
- 防滥用能力（PR #702 的登录限流）属于安全加固而非新功能，但若合并将补齐面板的暴露面。

---

## 7. 用户反馈摘要

今日数据中**不存在 Issues 评论**，无法提炼社区用户反馈。可提取的诉求均来自 Issue/PR 正文中的用户意图表达：

- **明确指令型诉求**：Issue #699 记载"用户明确要求移除所有 GitHub Actions CI 检查"，并指定保留 tag 触发的 release 与 Docker 发布——反映出对 CI 运行成本或流程负担的取舍偏好。
- **战略约束型诉求**：Issue #629 表述了"6MB fits on a robot"的战略定位，并强调 x86_64 在 `profile.release.strip = true` 下的真实体积约 10.5MB 是编码/链接器现实而非臃肿——说明体积是该项目面向机器人/边缘场景的核心卖点。
- **使用场景线索**：Issue #698 指出用户会使用弱本地模型与严格后端环境，工具调用在这些环境下会失效——这是 edge runtime 定位下的真实痛点。
- **稳定性痛点**：PR #703 描述的 `content` 为 null 场景（token 预算先于作答耗尽）是推理模型用户的典型挫败来源。

**满意度信号**：无正面反馈数据。**不满意信号**：CI 流程负担（#699）、弱模型下工具调用不可用（#698）。

---

## 8. 待处理积压

**开放中的两项（均创建于 2026-09-17/18，尚属新鲜）：**

- **Issue #698 [OPEN]** [feat, area:tools, area:providers, P2-high] — [链接](qhkm/zeptoclaw/issues/698)
  由 qhkm 于 2026-09-17 创建，同日更新，0 评论。承诺的入站 tool-args 强制转换层尚未实现，是本项目边缘定位的关键缺口。**建议优先确认是否进入下一里程碑。**

- **PR #702 [OPEN] fix(panel): rate-limit password login attempts** — [链接](qhkm/zeptoclaw/pull/702)
  由 qhkm 于 2026-09-18 创建并更新。公开面板密码端点的限流修复，属安全类改动，**建议尽快合入**。

- **PR #683 [OPEN] [dependencies, github_actions] bump Swatinem/rust-cache 2.9.1 → 2.9.2** — [链接](qhkm/zeptoclaw/pull/683)
  由 dependabot[bot] 于 2026-09-15 创建，2026-09-17 更新，已滞留 3 天。**需注意**：PR #700 已移除全部 GitHub Actions CI 工作流，该依赖升级是否仍有意义取决于剩余工作流的实际使用情况，建议维护者明确关闭或说明保留理由。

**长期项提示**：Issue #545 由外部贡献者 manelsen 于 2026-04-23 创建，直至 2026-09-17 才因 CI 移除而关闭（[链接](qhkm/zeptoclaw/issues/545)）；Issue #629 由 qhkm 于 2026-06-06 创建，同样于 2026-09-17 关闭（[链接](qhkm/zeptoclaw/issues/629)）。二者均非因问题解决而关闭，而是因 CI 体系整体移除而失去依托——这提示项目在**二进制体积治理与可选特性编译覆盖**两项能力上出现了治理空白，且无替代方案记录，建议维护者在本地验证流程中补充对应检查。

---

*本日报仅基于所提供的 GitHub 数据生成，评论数、点赞数与 release 信息均以原始数据为准（今日均为 0 或空）。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-18

## 1. 今日速览

ZeroClaw 今日保持高活跃度：过去 24 小时共 28 条 Issue 更新（新开/活跃 21，关闭 7）、50 条 PR 更新（待合并 43，合并/关闭 7），无新版本发布。当日新增动态集中在安全与运行时架构方向——多个 RFC 与 Bug 围绕「工具审批 fail-closed」「图像/音频标记污染持久化历史」「出站消息投递回执」等议题展开。最值得注意的信号是 #10952（新开，Anthropic 拒绝重放的 signed reasoning），它直接指向 #10894 刚合入的 sanitizer 实现，属于典型的回归风险。整体看，项目处于 RFC 讨论密集、待合 PR 积压偏高的阶段，合并吞吐量（7 条）远低于新增量（50 条）。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 数量有限（7 条），其中值得关注的：

- **PR #10750 [CLOSED] — feat(plugins): govern channel plugin egress**
  https://github.com/zeroclaw-labs/zeroclaw/pull/10750
  将 channel-plugin egress 工作重基于当前 `master`，保留既有 sender 授权、webhook 发布/终结等逻辑。属于插件出站流量治理链条的一部分；此前相关的 #9584（plugin install/list 的 egress grant ceremony）仍处于 OPEN 状态（自 2026-07-31 起）。

- **PR #10871 [CLOSED] — chore(deps): bump rust-all group（flate2 / lettre / cpal）**
  https://github.com/zeroclaw-labs/zeroclaw/pull/10871
  常规依赖维护，同组更新的 #10961（clap 4.6.6 → 4.6.7 等 5 项）已于今日新开，依赖更新流水线保持运转。

**Issue 侧关闭**：#5269（nix run 安装路径验证与文档）、#10292（ACP session 工具无法列出/查看 Code 会话）、#9882（图像标记绕过 run_model_query 内容校验）、#9370（ACP deliver_file 近实时 JSON-RPC 冒烟测试）。

整体判断：今日推进以「收口」为主，缺少大型功能合入；项目在 RFC 与安全议题上持续蓄力，但待合并 PR 已积压至 43 条。

---

## 4. 社区热点

- **Issue #8692 [OPEN] — [Tracker]: Maintainer decision queue for RFCs and design issues**（15 评论，更新 2026-09-17）
  https://github.com/zeroclaw-labs/zeroclaw/issues/8692
  维护者决策队列追踪器，是 RFC、设计议题、发布策略问题的集中入口。高评论数反映社区对「决策流程本身」的关注。

- **Issue #10549 [OPEN] — RFC: Simplify RFC voting by removing mandatory discussion windows and making REVISE stop the current snapshot**（12 评论）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10549
  提出取消强制讨论窗口（普通 RFC 48 小时、例外全体一致 72 小时）。诉求直指治理效率——流程摩擦已成为社区共识性痛点。

- **Issue #10526 [OPEN] — RFC: Append-only session event history, deterministic state replay, and derived agent streams**（11 评论，risk:high）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10526
  针对「可变会话消息 + 执行事实分散在 TurnEvent、日志、工具回执、成本记录等多处」的现状，提出只追加事件历史与确定性重放。属于架构级议题。

- **Issue #4853 [OPEN] — install skills from .well-known agent-skills discovery indexes**（8 评论，自 2026-03-27 起，status:blocked / parking-lot）
  https://github.com/zeroclaw-labs/zeroclaw/issues/4853
  期望支持从 `.well-known` URI 安装技能，与 agentskills 标准化工作绑定，长期滞留。

**社区诉求解读**：热点高度集中于「治理流程」与「可观测/可重放架构」两条主线，两者都由长期贡献者（Audacity88、NiuBlibing、JordanTheJet）主导，说明讨论已由功能需求转向项目基础设施。

---

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻塞**
- **Issue #10875 [OPEN] — Flaky: Telegram media-group 测试在无关 PR 上导致 Parallel Runtime Test 失败**
  https://github.com/zeroclaw-labs/zeroclaw/issues/10875
  （priority:p1，status:in-progress/status:accepted）自 cbd1b0adce（#8955，2026-09-11 合入）起间歇性失败于未触碰 `crates/zeroclaw-channels/` 的 PR。已有进行中处理，尚无明确 fix PR 编号披露。

**S2 — 行为降级**
- **Issue #10952 [OPEN] — Seam sanitizers 重写 assistant tool-call envelope 内的 signed reasoning，Anthropic 拒绝重放 thinking**（2026-09-18 新开）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10952
  指向 `multimodal::sanitize_image_markers`（#10894 合入）与既有 `sanitize_audio_markers`。**这是当日最需关注的新回归**，尚无 fix PR。

- **Issue #10908 [OPEN] — 工具结果文本中的图像标记被提升为附件且无来源信息；字面源文本与日志被剥离或附加**（status:blocked，priority:p1，risk:high）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10908
  与 #10952、#9882 同源（图像标记处理链路），#9882 今日已关闭，但该阻塞项仍在。

- **Issue #10643 [OPEN] — fix(runtime): 有界子循环工具的 fail-closed 审批强制执行**（priority:p1，risk:high）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10643
  `gate_tool_approval` 将 `approval: None` 视为 `NotRequired`，导致需提示审批的工具在有界子委派中被放行。属安全语义缺陷。

- **Issue #10926 [OPEN] — Matrix send_via 将 peer 用户身份当作房间目的地**（risk:medium）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10926
  `SendViaTool::resolve_target` 取 `external_peers` 首项作为收件人，需维护者评审。

**P1 安全项**
- **Issue #9899 [OPEN] — [Tracker]: 清理 bitmaps 未维护依赖豁免（RUSTSEC-2026-0247）**
  https://github.com/zeroclaw-labs/zeroclaw/issues/9899
  `cargo deny check` 因 `bitmaps 3.2.1`（经 imbl → Matrix SDK dev-dependencies）持续失败，安全 CI 受阻。

---

## 6. 功能请求与路线图信号

- **Issue #10930 [OPEN] — RFC: One durable primitive for questions an agent asks a human**
  https://github.com/zeroclaw-labs/zeroclaw/issues/10930
  指出 SOP approval gate 是代码库中唯一实现「持久的 agent→human 提问」原语，建议统一。若通过，可能影响审批与交互链路。

- **Issue #10929 [OPEN] — RFC: Delivery receipts for outbound messages**
  https://github.com/zeroclaw-labs/zeroclaw/issues/10929
  出站消息目前无标识符，`SendMessage` 无法确认送达。与 #10925（Matrix mirror 语音回复）同属渠道可靠性方向。

- **Issue #10925 [OPEN] — Support input-driven mirror voice replies on Matrix**（breaking-change，risk:medium）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10925
  要求 Matrix peer group 支持 `output_modality = "mirror"` 的语音回复。

- **Issue #10932 [OPEN] — Surface the voice-note transcript to the user (STT echo)**（channel:telegram）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10932
  建议将入站语音转写回显给发送者（按渠道可选），使语音识别错误可见。

**可能纳入下一版本的信号**：与上述需求对应，已有多个 OPEN PR 在推进相关能力——PR #10640（Telegram 被动群组上下文）、PR #10605（Anthropic extended thinking 经 OpenAI 兼容网关透传）、PR #10960（`ZEROCLAW_CACHE_TTL`）、PR #10959（工具规格排序以稳定 prompt-cache 前缀）。这些 PR 若合入，将直接落地部分渠道与 provider 侧改进。

---

## 7. 用户反馈摘要

- **安装体验**：#5269（已关闭）描述 `nix run` 安装路径存在「严重 UX/DX 问题」，已被标记为 good first issue 并完成验证与文档补充。
- **配置一致性**：PR #10239 透露 `interrupt_on_new_message` 在唯一渠道别名不叫 `default` 时被静默忽略——运营者命名习惯与默认配置假设冲突，是真实部署中易踩的坑。
- **语音交互可控性**：#10932 指出当前转写错误会「静默地塑造回复」，用户希望对 STT 结果有可见性与控制权。
- **文档缺口**：#10709 反映 Astra 在 API-key 与 Codex 订阅两种 provider 下的配置文档缺失。
- **流程体验**：#10549 的 12 条评论直接表达对 RFC 强制等待期的不耐——「每份 RFC 都必须等待固定讨论期」被视为不必要的摩擦。

---

## 8. 待处理积压

- **Issue #4853**（自 2026-03-27，近 6 个月，status:blocked + parking-lot）
  https://github.com/zeroclaw-labs/zeroclaw/issues/4853
  从 `.well-known` agent-skills 索引安装技能；依赖外部标准化进展（agentskills PR #254），长期停在停车位。

- **PR #9584**（自 2026-07-31，risk:high，size:XL）
  https://github.com/zeroclaw-labs/zeroclaw/pull/9584
  plugin install/list 的 egress grant ceremony，规模大且涉安全，已挂起近 7 周；相关 #10750 今日关闭，建议维护者确认其依赖关系与去留。

- **PR #9535**（自 2026-07-29，size:XL，needs-author-action）
  https://github.com/zeroclaw-labs/zeroclaw/pull/9535
  上下文压缩锚定模型窗口比例，长时间等待作者响应。

- **Issue #9899**（自 2026-08-10，priority:p1，type:tracker）
  https://github.com/zeroclaw-labs/zeroclaw/issues/9899
  安全 CI 持续失败的依赖豁免清理，属阻塞性技术债。

- **Issue #10526 / #10643**（risk:high，p1）：架构级 RFC 与 fail-closed 审批修复，均需维护者持续投入。

**健康度提示**：待合并 PR（43）与已合并/关闭（7）比例约 6:1，且存在多个 XL 规模、高风险、等待作者或维护者行动的长尾 PR。建议优先清理 `needs-author-action` / `needs-maintainer-review` 标签项，并优先处置 #10952 这一当日新回归。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*