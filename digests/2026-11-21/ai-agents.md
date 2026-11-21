# OpenClaw 生态日报 2026-11-21

> Issues: 423 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-21 17:36 UTC

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

# OpenClaw 项目日报 — 2026-11-21

## 1. 今日速览

过去 24 小时项目维持极高的活跃度：423 条 Issue 更新（305 条新开/活跃、118 条关闭），500 条 PR 更新（311 条待合并、189 条已合并/关闭），但**新版本发布为 0**。讨论焦点高度集中在 **2026.11.x 更新链路（Doctor / 候选校验 / 回滚）** 与 **Gateway 稳定性（启动阻塞、内存、drain、维护活锁）** 两大主题，多条 P0/P1 问题相互关联，说明近期更新机制改动带来了明显的回归压力。今日 PR 以机器人（roboclaw-bot、tideclaw-bot、vincentkoc）提交的小型修复与测试/CI 清理为主，修复节奏较快，但多项 P1 修复仍处于"待维护者审阅"或"需复现"状态，尚未形成闭环。整体健康度评估：**活跃度极高、修复供给充足，但发布阻塞型问题与合并积压（311 条待合并）构成主要风险**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无"已合并/关闭"的完整 PR 明细（PR 列表仅展示了评论数最多的 20 条，其中仅 #193214 为 CLOSED 状态，其余为 OPEN），因此按可见材料区分如下：

- **已关闭**：[#193214](https://github.com/openclaw/openclaw/pull/193214)（P3，roboclaw-bot）——worktrees 冷模板刷新决策的说明性改进，已关闭。
- **已就绪待合并（ready for maintainer look）的关键修复**：
  - [#203024](https://github.com/openclaw/openclaw/pull/203024)（P1，🏆 diamond lobster，proof: sufficient）——修复 npm 回滚后 Doctor 无法获取数据库维护租约的问题（Closes #203005），直接对应更新链路阻塞。
  - [#203185](https://github.com/openclaw/openclaw/pull/203185)（P1，steipete）——修复"运行中的 Gateway 包被原地替换后，中断会话仍可恢复"。
  - [#202526](https://github.com/openclaw/openclaw/pull/202526)（P2，platinum hermit，proof: sufficient）——让 PostgreSQL 后端的 Gateway 能移除受管 worktree（Closes #202394）。
  - [#202514](https://github.com/openclaw/openclaw/pull/202514)（P2）——修正 CI 的构建选择逻辑。
- **修复类新提交（needs proof）**：[#203206](https://github.com/openclaw/openclaw/pull/203206)（保留被省略的模型 reasoning 配置，供发现机制补齐，Fixes #203150）、[#203202](https://github.com/openclaw/openclaw/pull/203202)（插件重载期间保持自动化脚本运行，Closes #201903）、[#203203](https://github.com/openclaw/openclaw/pull/203203)（回收 PID 失效的 Linux 云 worker，Closes #200021）。
- **基础设施与体验**：[#203207](https://github.com/openclaw/openclaw/pull/203207)（移除会话侧栏的个人分区层）、[#203214](https://github.com/openclaw/openclaw/pull/203214)（修复 Customize 侧栏图标消失）、[#200910](https://github.com/openclaw/openclaw/pull/200910)（Mac 应用托管场景改为显示更新指引而非失败的更新按钮）。

**推进度判断**：修复供给集中在更新/安装链路与 Gateway 生命周期，方向与今日最痛的 P0/P1 问题一致；但目前多为"待合并"状态，实际向前推进的幅度有限，需关注合并速度。

## 4. 社区热点

| 条目 | 状态/优先级 | 评论 | 核心诉求 |
|---|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) Gateway 启动时因捕获大型外部插件阻塞数分钟（2026.9.6 回归） | OPEN / P0 / diamond lobster | 85 | 最热议题，自 9-29 持续至今，属启动崩溃循环类影响 |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) 安装后 Doctor 的 WAL 发布校验失败，11.3 更新半完成 | OPEN / P0 | 32 | 更新后无法回滚（`state-migrated-no-rollback`） |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) Prompt cache 从不复用（`cache read dropped N -> 0`） | OPEN / P2 | 20 | 缓存/计费与上下文重写的性能痛点 |
| [#200606](https://github.com/openclaw/openclaw/issues/200606) 候选 Doctor 以插件迁移冲突阻断 11.3→11.5 | OPEN / P1 | 19 | 稳定版升级被阻断，`changed=[]` 信息不足 |
| [#200756](https://github.com/openclaw/openclaw/issues/200756) Windows beta.2→beta.4 在包交换阶段失败/回滚树变更 | OPEN / P2 | 15 | Windows 升级链路可靠性 |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) 基线 RSS 约 1.9 GB 且 SQLite 事务超时 | OPEN / P1 | 14 | 内存与数据库稳定性 |

**分析**：热点几乎全部围绕"**升级是否可靠**"——Doctor 校验、候选迁移、包交换、回滚状态机构成一条脆弱链路，用户在 beta→stable 迁移中反复受阻，诉求是可预期、可回滚、有清晰失败原因（而非 `changed=[]` 或仅有 `Exit code: 1`）。其次是对长期未解的性能问题（缓存、内存）的持续追问。

## 5. Bug 与稳定性

**P0（最高）**
- [#160959](https://github.com/openclaw/openclaw/issues/160959) — 大型外部/工作区插件导致 Gateway 事件循环阻塞数分钟（启动时）。无 fix PR（`clawsweeper:no-new-fix-pr`），需维护者审阅。
- [#197083](https://github.com/openclaw/openclaw/issues/197083) — Doctor WAL 发布校验失败导致升级半完成且拒绝回滚。无 fix PR。

**P1**
- [#181432](https://github.com/openclaw/openclaw/issues/181432) — 内存膨胀至 ~1.9 GB + SQLite 事务超时（message-loss、crash-loop 标签）。无 fix PR。
- [#153899](https://github.com/openclaw/openclaw/issues/153899) — Gateway drain 等满 `TimeoutStopSec` 才被杀。无 fix PR。
- [#197515](https://github.com/openclaw/openclaw/issues/197515) — Codex "settings upgrade is unfinished" 在 11.3 仍存在，已合并的 #186506 未进入发布。无 fix PR。
- [#191476](https://github.com/openclaw/openclaw/issues/191476) — Matrix 房间 "Plugin matrix consumer is closed" 卡死。需在线复现。
- [#200606](https://github.com/openclaw/openclaw/issues/200606) — 候选 Doctor 迁移冲突阻断更新。
- [#198218](https://github.com/openclaw/openclaw/issues/198218) — Doctor/update 维护活锁，重复哈希未变的状态库（10.6 与 11.3 均复现）。相关修复方向见 PR [#203024](https://github.com/openclaw/openclaw/pull/203024)。

**P2 中的回归与状态类问题**
- [#200756](https://github.com/openclaw/openclaw/issues/200756)（Windows 包交换失败）、[#202001](https://github.com/openclaw/openclaw/issues/202001)（系统提示分节变动导致缓存失效）、[#182891](https://github.com/openclaw/openclaw/issues/182891)（缓存读取归零）、[#155868](https://github.com/openclaw/openclaw/issues/155868)（agent-sourced 运行工具清单不同导致全量缓存未命中）、[#165041](https://github.com/openclaw/openclaw/issues/165041)（会话恢复注入内容在 UI 可见）、[#146311](https://github.com/openclaw/openclaw/issues/146311)（多机器人群聊每条回声 N 次）。
- 已关闭：[#199155](https://github.com/openclaw/openclaw/issues/199155)（跨进程 transcript 行导致 UNIQUE 冲突，fix-shape-clear）、[#163139](https://github.com/openclaw/openclaw/issues/163139)（Windows plugins.reload EPERM）、[#166336](https://github.com/openclaw/openclaw/issues/166336)（automations 工具组织级消失）。

## 6. 功能请求与路线图信号

- **长时前台运行的检查点与受控让出**（[#138990](https://github.com/openclaw/openclaw/issues/138990)，P2）——要求运行时强制执行检查点/收益预算；暂无对应 PR，属产品决策待定。
- **Caller 作用域的同会话调度**（[#187264](https://github.com/openclaw/openclaw/issues/187264)，P2，需安全评审）——非 owner 渠道请求的进度持久化。
- **memory FTS 加入 CJK bigram 分词器**（[#170997](https://github.com/openclaw/openclaw/issues/170997)，P2）——trigram 无法匹配 2 字中文查询，有明确复现。
- **Agent 运行级 turn/token 预算与默认开启的 tool-loop 检测**（[#178373](https://github.com/openclaw/openclaw/issues/178373)，P2）——指出该配置默认关闭且历史每轮重复计费。
- **隐藏 agent 而不移除**（[#166678](https://github.com/openclaw/openclaw/issues/166678)，今日已关闭）。
- **msteams 动态解析 SharePoint 站点**（[#136271](https://github.com/openclaw/openclaw/issues/136271)）、**Talk 关闭语音任务回执**（[#184803](https://github.com/openclaw/openclaw/issues/184803)）、**Telegram sendDice**（[#137110](https://github.com/openclaw/openclaw/issues/137110)，已有 linked PR）、**Cron 结束条件 `--until/--max-runs`**（[#130247](https://github.com/openclaw/openclaw/issues/130247)）。

**纳入下一版本的可能性判断**（基于材料）：CJK 分词器、Cron 结束条件、Telegram dice 三项已有明确复现或 linked PR，可优先考虑；检查点策略与运行级预算涉及产品与安全决策，短期落地概率较低。

## 7. 用户反馈摘要

- **更新体验是最大痛点**：多次升级在候选校验、包交换、安装后 Doctor 阶段失败，失败原因信息贫乏（`changed=[]`、仅退出码），且存在"已迁移不可回滚"的不可逆状态，用户对可恢复性缺乏信心。
- **性能敏感型部署用户**：Linux ARM64、Proxmox、rootful Podman、systemd 用户单元等自托管场景中，实测到 300 MB→1.89 GB 的内存跃升、SQLite 事务超时、Gateway drain 超时、插件加载阻塞。
- **缓存与成本关注**：多位用户复现 prompt cache 从不复用、缓存读取归零、跨 agent 消息触发全量缓存未命中，并指出保留历史每轮重复计费。
- **多平台覆盖**：Windows（plugins.reload、包交换）、macOS（应用托管更新按钮）、Android（HTTPS Basic 代理登录，[#162247](https://github.com/openclaw/openclaw/pull/162247)）、Matrix/Telegram/Mattermost 等渠道问题均有报告，说明用户群覆盖广、场景真实。
- **满意/建设性信号**：多条 issue 提供详尽环境、复现步骤与源码定位（如 `tool-loop-admission.ts:33-35`），协作质量高；但 `stale` 标签在多个高价值 issue 上反复出现（如 diamond lobster 级 #165041、#124306、#155868），存在被"老化"埋没的风险。

## 8. 待处理积压（需维护者关注）

- [#160959](https://github.com/openclaw/openclaw/issues/160959) — P0、85 评论、自 2026-09-29 起未解，无 fix PR。
- [#124306](https://github.com/openclaw/openclaw/issues/124306) — exec 审批卡不提示目标路径为挂载点（diamond lobster、impact:data-loss、stale），自 2026-08-15。
- [#155868](https://github.com/openclaw/openclaw/issues/155868) — agent-sourced 运行导致的缓存未命中（diamond lobster、stale、需安全评审）。
- [#165041](https://github.com/openclaw/openclaw/issues/165041) — 会话恢复注入内容在 UI 可见（diamond lobster、stale、需产品决策 + 安全评审）。
- [#153899](https://github.com/openclaw/openclaw/issues/153899) — Gateway drain 超时（P1、crash-loop、stale）。
- [#130247](https://github.com/openclaw/openclaw/issues/130247) — Cron 无结束条件（P3，自 2026-08-26）。
- **PR 侧积压**：[#162247](https://github.com/openclaw/openclaw/pull/162247)（Android HTTPS Basic 代理，XL、security-boundary、security-review-required，自 2026-10-01 待审）；[#200910](https://github.com/openclaw/openclaw/pull/200910)（XL、needs proof，自 2026-11-18）。
- 结构性风险：311 条 PR 待合并，叠加多条 P1/P0 修复卡在审阅或需复现环节，建议维护者优先处理 P0/P1 闭环与安全评审队列。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析（2026-11-21）

## 1. 生态全景

生态呈现明显的**规模分层与维护能力分化**：OpenClaw 以单日 423 条 Issue、500 条 PR 的体量构成绝对中心，但更新链路回归与 311 条 PR 待合并形成"高供给、低吞吐"的典型瓶颈；同期 ZeroClaw、Hermes Agent 同处 PR 大量堆积状态（49、41 条待合并）。相反，NanoClaw、NanoBot、LobsterAI 项目在发布工程（PyPI 一键发布、稳定版收尾、DSH 运行时迁移）上均取得实质推进，呈现"中小项目迭代更顺畅"的反差。PicoClaw、IronClaw、Moltis、CoPaw 则处于政策信号或维护停滞的观察区，其中 PicoClaw 已出现社区自建 fork 的失维护信号。整体看，**"能否稳定升级与可控成本"取代"功能数量"成为生态共识的核心竞争力指标**。

## 2. 各项目活跃度对比

| 项目 | Issues（新/关闭） | PR（待合/合并或关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| OpenClaw | 423（305/118） | 500（311/189） | 无 | 活跃度极高，但 P0/P1 回归与合并积压为结构风险 |
| ZeroClaw | 12（10/2） | 50（49/1） | 无 | 供给充足、合入吞吐不足，安全债开始收口 |
| Hermes Agent | 50（50/0） | 50（41/9） | 无 | 零 Issue 关闭，积压消化能力偏弱 |
| NanoClaw | 22（6/16） | 31（12/19） | **v2026.11.0** | 高活跃，关闭量大于新开，发布后暴露回归 |
| CoPaw | 8（6/2） | 11（11/0） | 无 | 中等活跃，当日零合入，PR 队列全 OPEN |
| LobsterAI | 0 | 8（0/8） | **2026.11.20** | PR 全部当日闭环，Issues 通道静默 |
| Moltis | 2（2/0） | 2（1/1） | 无 | 中等偏低，平稳无严重缺陷 |
| NanoBot | 1（bot 提交） | 12（9/3） | **v0.4.2** | 发布收尾级推进，批量 AI PR 长期悬空 |
| IronClaw | 1（1/0） | 0 | 无 | 低活跃，零代码增量 |
| PicoClaw | 3（1/2） | 6（0/6，均为关闭） | 无 | **维护停滞信号**，社区另建 fork |
| NullClaw / TinyClaw / ZeptoClaw | — | — | — | 过去 24 小时无活动 |

## 3. OpenClaw 在生态中的定位

**优势**：生态中唯一具备"全平台覆盖 + 多通道（Matrix/Telegram/Mattermost/Windows/macOS/Android）+ 大规模真实用户"的中心项目，其 Issue 质量显著高于同侪——多条报告附带源码定位（如 `tool-loop-admission.ts:33-35`）与完整复现环境，协作深度非其他项目可比；修复供给侧由 `roboclaw-bot`、`tideclaw-bot`、`steipete` 等持续输出，方向与 P0/P1 痛点一致。

**技术路线差异**：OpenClaw 走**重量级全栈路线**——Gateway 生命周期管理、Doctor 校验、WAL 发布、候选迁移、回滚状态机构成完整发布体系，复杂度远高于同类。代价是升级链路的每一环都可能成为回归点（#160959、#197083、#200606、#198218 形成关联链条）。

**社区规模对比**：以评论数衡量，OpenClaw 单条议题可达 85 条（#160959）、32 条（#197083），远超 Hermes 最高 22 条、NanoClaw 3 条、CoPaw 3 条的量级；Issue/PR 总量级约为第二梯队（ZeroClaw、Hermes 各 50 条 PR）的 8–10 倍。**规模优势与维护负荷成正比**，其 311 条待合并 PR 与多条 P1 卡在"需复现 / 待维护者审阅"状态，是其当前最大短板。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级 / 更新的可靠性与可回滚性** | OpenClaw、NanoClaw、ZeroClaw、NanoBot | OpenClaw 的 Doctor 校验/包交换/回滚半完成（#197083、#198218）；NanoClaw `/update-nanoclaw` 在 detached HEAD 上失败（#4525）；ZeroClaw 配置写了却不生效；NanoBot 发布链路自动化（#6745） |
| **成本管控与预算语义** | ZeroClaw、Moltis、OpenClaw、Hermes | ZeroClaw `cost.enforcement.mode` 未被预算门读取（#12500、#12626、#12628）、spawn_subagent 绕过上限（#12627）；Moltis 新增 per-run USD 上限（#1325）；OpenClaw 运行级 turn/token 预算默认关闭（#178373）；Hermes 空回复（#150617） |
| **上下文 / 缓存效率** | OpenClaw、Hermes | OpenClaw prompt cache 从不复用（#182891）、系统提示分节变动致缓存失效（#202001）；Hermes 上下文窗口被静默钳制至 65,536（#99943） |
| **网关性能与规模化** | Hermes、OpenClaw、ZeroClaw | Hermes 全量重读会话历史致 30s 超时（#146643）；OpenClaw 启动阻塞数分钟（#160959）、内存 ~1.9 GB（#181432）；ZeroClaw session 状态残留（#12619） |
| **多通道路由 / 消息渠道一致性** | NanoClaw、NanoBot、Moltis、OpenClaw | NanoClaw 语音/图片/附件跨通道不一致（#4517、#2426、#2047）；NanoBot 微信开关状态误导（#6748）、Matrix HTML 丢失（#6138）；Moltis Lark/Feishu 支持（#383） |
| **凭据最小暴露与安全沙箱** | ZeroClaw、NanoClaw、OpenClaw | ZeroClaw 操作员凭据作用域 RFC（#12422）、插件内存预算绕过（#12145）；NanoClaw Baileys 安全公告（#4516）、admin-only MCP 工具实际未校验（#2711）；OpenClaw 安全评审队列（#162247） |
| **多智能体协作与异步任务** | LobsterAI、CoPaw、Hermes | LobsterAI 跨 agent 委派（#3137）；CoPaw `notice_after_complete` 后台任务通知（#6475）；Hermes 主动式日程助手（#158289） |

## 5. 差异化定位分析

- **OpenClaw**：全栈个人助手平台，面向需要跨渠道、自托管、可扩展插件的重度用户。架构最重（Gateway + Doctor + 多后端），功能面最广，代价是维护复杂度与升级脆弱性。
- **Hermes Agent**：本地优先的桌面工作流 + 多 provider 切换 + Bot Mode 长时运行，正在推进 serve→gateway 架构收敛（#145171）。面向接近生产规模使用的技术型用户（数千会话）。
- **NanoClaw**：容器化 agent 运行 + 按 agent 精细化密钥授权（v2026.11.0 首发特性），架构偏向"每个 agent 独立隔离"，面向自托管 Docker 用户（WSL2 + Matrix 等场景）。
- **ZeroClaw**：Rust 实现，强调 SSH 原生传输、provider 注册表 V5 现代化、插件 wasm 沙箱，面向关注安全边界与运维集成的部署方。
- **NanoBot**：轻量 Python 实现，v0.4.2 强化 SSH 网关连接与 Windows 主机支持，面向快速接入的外部开发者（PyPI 一键发布降低分发门槛）。
- **PicoClaw**：Go 实现的轻量分支，用户以自建 provider/网关的高级用户为主；**当前核心问题是维护可持续性而非技术路线**。
- **LobsterAI**：DeepSeek Harness 运行时迁移中，主打桌面伴侣形态 + PPT 生成，产品化导向最强。
- **CoPaw / Moltis / IronClaw**：分别偏向 Console/IDE 集成、Codex 推理参数与企业 IM 渠道、provider 目录扩展，均处小步迭代。

## 6. 社区热度与成熟度

**第一层 · 快速迭代（高热度、高负荷）**：OpenClaw、ZeroClaw、Hermes Agent。三者共同特征是 PR 大量待合并（311 / 49 / 41），修复供给大于评审吞吐，回归压力与积压并存。

**第二层 · 质量巩固与发布收尾（中高热度、闭环较好）**：NanoClaw、NanoBot、LobsterAI。NanoClaw 关闭 16 条 Issue、19 条 PR，呈收缩态势，但发布当天即暴露 detached HEAD 与容器版本落后两类回归；NanoBot 集中于发布工程；LobsterAI 8 个 PR 当日全部闭环，Issues 侧零更新——需辨别是健康还是反馈入口问题。

**第三层 · 平稳 / 观察区**：CoPaw（当日零合入、多条 XL PR 长期挂起）、Moltis（无发布无关闭，无严重缺陷）、IronClaw（仅 1 条功能请求）。

**第四层 · 停滞信号**：PicoClaw 出现"社区自建活跃 fork"（#3417），是生态中唯一明确的维护可持续性危机；且当日 6 条 PR 全为 stale 关闭，含 4 条 Dependabot 依赖升级，存在依赖欠账风险。NullClaw、TinyClaw、ZeptoClaw 无活动。

## 7. 值得关注的趋势信号

1. **"升级即风险"成为生态级共识痛点**。六个项目在同一天都暴露了更新链路问题（OpenClaw 回滚半完成、NanoClaw detached HEAD、ZeroClaw 配置不生效、NanoBot 发布链路）。对开发者的启示：**发布机制的健壮性与失败可解释性，应作为与功能同等优先的架构设计目标**，例如明确的失败原因（而非 `changed=[]`、仅退出码）与不可逆状态的前置保护。

2. **成本语义从"计数"走向"货币"**。ZeroClaw 与 Moltis 同日推进按美元上限的成本门，OpenClaw 提出运行级 turn/token 预算，共同指向"迭代次数上限不足以约束实际花费"的共识。长上下文高迭代场景下的费用失控，正在成为智能体产品的必答题。

3. **静默行为变更最伤用户信任**。Hermes 的上下文窗口静默钳制（#99943）、完成通知截断为 0 字符（#150617）、ZeroClaw 的外发消息误报成功（#10600）——三者共同反映用户对"代理必须能区分已送达与被丢弃、必须告警而非静默降级"的强烈诉求，这是智能体可信度的底线问题。

4. **规模化使用是架构压力测试**。Hermes 用户以数千会话、6 个月跨度使用；OpenClaw 用户覆盖 ARM64、Proxmox、rootful Podman、systemd 用户单元等真实自托管场景。**"个人 AI 助手"的实际使用强度已逼近生产级**，会话存储、网关超时、内存基线都需按生产标准设计。

5. **安全边界从外围走向核心**。ZeroClaw 的操作员凭据作用域 RFC 与插件沙箱内存预算、NanoClaw 的 admin-only 工具实际未校验（#2711）、OpenClaw 的安全评审队列，表明**凭据最小暴露与插件隔离正在成为智能体运行时的必备能力**，而非附加项。

6. **维护可持续性本身是生态变量**。PicoClaw 的 fork 公告提醒：在同类项目密集竞争的生态中，**评审吞吐与明确的分诊节奏**直接决定社区留存。多条 stale 标签埋没高价值 Issue（如 OpenClaw 的 diamond lobster 级 #165041）与批量 AI PR 长期悬空（NanoBot 四条同批修复）均属同类风险。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-21

## 1. 今日速览

NanoBot 今日发布 v0.4.2，同时关闭了 3 个 PR（含版本准备与 PyPI 发布流程），待合并 PR 仍有 9 条，基本处于较整体的日常迭代节奏。当天的合并/关闭动作主要围绕发布工程（版本号、发布链接、PyPI 一键发布），而非核心功能。仍有 4 条 10 月初提交的 AI batch 修复 PR 的更新时间在今天，长期待合并的状态值得关注。新开 Issue 仅 1 条且由 bot 提交（第三方合规服务推广），真实用户反馈量偏低。整体活跃度：**中等**，以发布收尾与存量 PR 维护为主。

## 2. 版本发布

**v0.4.2**（[Release 链接](https://github.com/HKUDS/nanobot/releases)）

发布说明中明确的变化：

- **SSH 连接网关**：支持连接同时对外公布公共 WebSocket URL 的网关。
- **“Use existing SSH settings” 现在支持 Windows 主机**，前提是 Python 3 以 `python` 命令可用。
- 明确仍**不支持**：快速配对命令仍仅限 Linux；网关原生 TLS 与 `trustedProxyAuth` 在相关场景下仍不受支持。

**破坏性变更 / 迁移注意**：发布说明未提及破坏性变更。需注意功能边界仍然存在：Windows 用户依赖 `python` 可执行名；Linux 之外的用户无法使用快速配对；TLS 与 `trustedProxyAuth` 属于已知未支持项，部署时需规避。

配套：PR [#6744](https://github.com/HKUDS/nanobot/pull/6744)（chore: prepare v0.4.2）已关闭，将包版本与源码 fallback 设为 0.4.2；PR [#6746](https://github.com/HKUDS/nanobot/pull/6746)（docs: keep the latest release link current，**待合并**）拟改用 GitHub 动态 Latest Release 链接，并把 v0.4.2 加入发布归档。

## 3. 项目进展

今日合并/关闭的 3 条 PR：

- [#6745](https://github.com/HKUDS/nanobot/pull/6745) **ci: publish accepted releases to PyPI in one click** — 发布 GitHub Release 即触发 PyPI 上传，上传五个 wheel 与源码包，并要求发布 tag 与文件匹配同一次成功候选构建的 CI manifest。**对项目健康度意义较大**：缩短发布链路，降低手工出错风险。
- [#6744](https://github.com/HKUDS/nanobot/pull/6744) — v0.4.2 版本号准备（见上）。
- [#6743](https://github.com/HKUDS/nanobot/pull/6743) **fix(webui): keep focus when reopening the model picker** — 修复快速重开模型选择器时旧选择器把焦点抢回消息输入框、导致新选择器提前关闭、无法调整 reasoning effort 的问题（清除待处理焦点）。属于小而常见的交互 bug 修复。

综合评估：今日推进集中在**发布与交互细节**，整体向前迈进的幅度为“发布收尾级”，未涉及核心架构变化。

## 4. 社区热点

今日数据中**评论数与点赞均为 0 或未记录，无实质讨论热度**，因此不存在真正意义上的热点。按关注价值排序：

- [#5718](https://github.com/HKUDS/nanobot/pull/5718) feat(provider): support OpenRouter native image generation API（2026-09-09 创建，今日仍在更新）— 随着 OpenRouter 推出原生 Images API，NanoBot 需要适配以保持图片生成兼容并解锁更多生成能力。**诉求**：模型供应商生态跟进，避免能力落后于上游服务。
- [#6323](https://github.com/HKUDS/nanobot/pull/6323) feat(webui): edit and resend messages in the same session（2026-10-20 创建，今日更新）— 作者声明 “Ready for review”，五项共享操作均通过性能预算，20/20 CI 通过。**诉求**：WebUI 对话编辑体验对齐主流聊天客户端。

## 5. Bug 与稳定性

按严重程度排列（均标注是否有 fix PR）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 中 | [#6748](https://github.com/HKUDS/nanobot/pull/6748) WebUI 频道开关状态误导：微信登录过期后频道仍为启用，但开关显示为关闭；点击开关实际是重试失败连接，而非关闭微信。**该开关应反映用户可更改的状态，“Failed” 标记另行展示** | **已有 fix PR（待合并）** |
| 中 | [#6138](https://github.com/HKUDS/nanobot/pull/6138) Matrix 流式回复经 `m.replace` 编辑更新时，`_build_matrix_text_content` 在每次编辑内容中放置 `format`/`formatted_body`，可能导致 HTML 格式丢失 | 已有 fix PR（待合并） |
| 中 | [#6141](https://github.com/HKUDS/nanobot/pull/6141) MCP 工具结果中 embedded resources、resource links、audio 块未经渲染，直接以 `str(block)` 传给模型，模型看到的是 pydantic 对象字符串 | 已有 fix PR（待合并） |
| 低 | [#6135](https://github.com/HKUDS/nanobot/pull/6135) `read_file` 对 SVG 文件按扩展名判定为图片并返回 image block，而非按文本读取 | 已有 fix PR（待合并） |
| 低 | [#6140](https://github.com/HKUDS/nanobot/pull/6140) `read_file` 用 `str.splitlines()` 计行，会在换页符、垂直制表符、孤立 CR、NEL、U+2028/U+2029 及 `\x1c`–`\x1e` 处分行，与 `edit_file` 按 `"\n"` 计数不一致，导致 `line_hint` 偏差 | 已有 fix PR（待合并） |

**观察**：今日无崩溃或回归报告；上表 4 条工具/通道类修复均为 2026-10-10 提交、今日仅有更新动作，**尚未合并**，修复实际落地时间存在不确定性。

## 6. 功能请求与路线图信号

- **斜杠命令结果本地化**：[#6747](https://github.com/HKUDS/nanobot/pull/6747) 全部 17 个内置斜杠命令在 WebUI、TUI 与文本频道中按读者语言返回结果；`/model` 切换成功时更新当前会话 badge，失败则保持不变。属于国际化方向的明确信号（优先级 p2）。
- **WebUI 会话内编辑与重发**：[#6323](https://github.com/HKUDS/nanobot/pull/6323) 已声明可评审且 CI 全绿，**最接近纳入下一版本**的体验类功能。
- **OpenRouter 原生图片生成**：[#5718](https://github.com/HKUDS/nanobot/pull/5718) 供应商能力扩展，带文档与测试，但已积压两个多月。
- **第三方合规集成**：[#6742](https://github.com/HKUDS/nanobot/issues/6742) 由 bot 提交，提议接入 Screwtape.ai `agent_fleet_compliance`，面向多智能体/机群运营者提供卖家风险筛查与可导出的支出审计。与项目核心路线关联较弱。

**下一版本可能纳入**：#6323（状态最成熟）、#6746（文档，改动小）、#6747（依赖评审进度）。

## 7. 用户反馈摘要

今日唯一的 Issue 由 `cursor[bot]` 提交，**无人类用户评论可供提炼**，数据不足以支撑满意度分析。可提取的真实场景线索仅有：

- **多智能体/机群运营者**在向外部工具或卖家付费时，需要卖家风险筛查与可导出的支出审计，且希望不必自建合规栈（[#6742](https://github.com/HKUDS/nanobot/issues/6742)）。
- **WebUI 用户**在模型预设选择与 reasoning effort 调整上遭遇焦点竞争导致的误关闭（已由 #6743 修复）。
- **微信频道用户**在登录过期后无法直观关闭频道（#6748）。
- **Windows 自托管用户**长期受限于快速配对仅 Linux、Python 需以 `python` 命名的约束（v0.4.2 说明）。

## 8. 待处理积压

以下为创建时间较早、今日仍仅有“更新”而无合并动作的 PR，建议维护者优先分诊：

| PR | 创建日期 | 积压时长 | 说明 |
|---|---|---|---|
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) OpenRouter 原生图片生成 | 2026-09-09 | 约 2.5 个月 | 上游 API 已就绪，兼容性风险随时间上升 |
| [#6135](https://github.com/HKUDS/nanobot/pull/6135) SVG 按文本读取 | 2026-10-10 | 约 6 周 | 小范围修复，评审成本低 |
| [#6138](https://github.com/HKUDS/nanobot/pull/6138) Matrix 编辑保留 HTML | 2026-10-10 | 约 6 周 | 影响 Matrix 频道渲染 |
| [#6140](https://github.com/HKUDS/nanobot/pull/6140) read_file 行号一致性 | 2026-10-10 | 约 6 周 | 与 edit_file 行为对齐，影响工具可靠性 |
| [#6141](https://github.com/HKUDS/nanobot/pull/6141) MCP 资源/音频块渲染 | 2026-10-10 | 约 6 周 | 影响 MCP 工具结果可读性 |
| [#6323](https://github.com/HKUDS/nanobot/pull/6323) WebUI 编辑重发 | 2026-10-20 | 约 1 个月 | 作者已声明 Ready for review，等待评审 |

**健康度提示**：四条同批（AI batch PRs）修复 PR 同日更新却均未合并，可能反映批量 PR 的评审通道不畅；建议明确分诊节奏或分批合入，避免修复长期悬空。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-11-21

## 1. 今日速览

- 项目维持高强度迭代：过去 24 小时 Issues 更新 50 条（全部为新开/活跃，**关闭 0 条**），PR 更新 50 条（待合并 41、已合并/关闭 9），无新版本发布。
- 讨论热度集中在**网关性能与会话状态一致性**（#146643 22 条评论）、**压缩器上下文窗口被错误钳制**（#99943 15 条评论）两类跨组件问题上。
- 合并侧以测试补强、文档规范和周边修复为主，未见大规模功能落地；待合并队列累积至 41 条，评审压力上升。
- 健康度评估：**开发活跃度高，但积压消化能力偏弱**——零 Issue 关闭、41 条 PR 待合并，新增问题速度快于收敛速度，需关注维护者带宽。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

> 注：数据中 PR 状态仅区分 OPEN / CLOSED，以下"已关闭/合并"以 CLOSED 记录为准。

- **#156478 [CLOSED]** test(browser-desktop)：为 `desktop_preview` 的 `action=close` 路径补充 4 项测试（整窗关闭、裸域名、desktop-only 错误、emitter 失败），补齐 #156132 删除的测试覆盖，无运行时改动。链接：https://github.com/NousResearch/hermes-agent/pull/156478
- **#157484 [CLOSED]** feat(update)：serve→gateway 迁移第 9 部分，更新后为旧 serve/dashboard 后端命名，并补充 Docker、Nix、Windows 手动迁移文档，基于 #157430 等前置 PR 堆叠。链接：https://github.com/NousResearch/hermes-agent/pull/157484
- **#156083 [CLOSED]** docs：根 `AGENTS.md` 改为"导入置于模块顶部、通过下移共享名解循环"，删除 4 份文件中"函数内导入"的建议。链接：https://github.com/NousResearch/hermes-agent/pull/156083

**净进展判断**：今日合并内容以工程质量与迁移收尾为主，属于"打地基"型推进；serve→gateway 迁移（#145171 跟踪）持续向前，但用户可感知的新能力有限。

## 4. 社区热点

| 排名 | 条目 | 评论 | 核心诉求 |
|---|---|---|---|
| 1 | [#146643](https://github.com/NousResearch/hermes-agent/issues/146643) Gateway 每次变更重读全量会话历史，CPU 与 Desktop 超时随存储规模增长 | 22 | 数千会话规模下占用 1.5–2.5 CPU 核，`session.resume`/`prompt.submit` 30 秒超时——**规模化使用后的核心可用性瓶颈** |
| 2 | [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) 压缩器上下文窗口被 `model.ollama_num_ctx` 钳制，1M 窗口静默降至 65,536 | 15 | 自 v0.21.0 起回归，云厂商用户实际可用上下文被腰斩，属**静默降级**，影响成本与效果 |
| 3 | [#148414](https://github.com/NousResearch/hermes-agent/issues/148414) Webapp 菜单在 UI 缩放非 100% 时溢出视口 | 8 | 前端布局健壮性，影响日常交互 |
| 4 | [#150617](https://github.com/NousResearch/hermes-agent/issues/150617) 完成通知忽略 `completion_output_chars`，尾部可被截断为 0 字符（Bot Mode DM 空回复，👍1） | 8 | 通知链路参数未生效，导致消息内容丢失 |
| 5 | [#129973](https://github.com/NousResearch/hermes-agent/issues/129973) 0.21.5 POSIX 启动器 `python3 -I -c` 破坏终端智能体检测 | 7 | 与 Herdr 等终端工作区管理器的互操作回归 |

**分析**：热点集中于三类结构性张力——(a) 会话存储与网关的**架构级性能**问题；(b) 配置项在多 provider 场景下的**语义泄漏**；(c) 桌面/Webapp 与网关之间的**传输边界**（#149598、#155517 同样反映此点）。

## 5. Bug 与稳定性

按严重程度排列（P2 = 高优先级；数据中未出现 P1）：

**P2 · 性能/可用性**
- [#146643](https://github.com/NousResearch/hermes-agent/issues/146643) 网关全量重读会话历史 → CPU 飙升 + Desktop 30s 超时。相关缓解 PR：[#144701](https://github.com/NousResearch/hermes-agent/pull/144701) fix(gateway) 将有界控制读取移出串行队列（降低 `session.control.read` 排队超时风险）。**部分缓解，未根治**。
- [#158524](https://github.com/NousResearch/hermes-agent/issues/158524) 未 settled 的 home 下每次启动都派生 `default_plugins` 子进程，已观测 167 个残留、CPU 打满。**暂无 fix PR**。

**P2 · 功能失效 / 数据正确性**
- [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) 上下文窗口静默钳制（回归）。**暂无 fix PR**。
- [#150617](https://github.com/NousResearch/hermes-agent/issues/150617) 完成通知可为空（Bot Mode DM 空回复）。**暂无 fix PR**。
- [#156899](https://github.com/NousResearch/hermes-agent/issues/156899) v0.23.2 上 profile 插件并发首次查找导致 "Unknown provider" 直至重启。**暂无 fix PR**。
- [#155517](https://github.com/NousResearch/hermes-agent/issues/155517) Desktop 粘贴图片报 4001 "session not found"，图片无法到达模型。**暂无 fix PR**。
- [#158586](https://github.com/NousResearch/hermes-agent/issues/158586) Discord 语音接收因 DAVE E2EE MLS 状态迁移永久失聪（discord.py 2.7.1 / davey 0.1.7）。**暂无 fix PR**。
- [#158636](https://github.com/NousResearch/hermes-agent/issues/158636) MiniMax 模型选择器仍提供已下线模型 ID（404 / 2069），标记 `cause/upstream`。**暂无 fix PR**。

**P2 · 回归 / 平台适配**
- [#129973](https://github.com/NousResearch/hermes-agent/issues/129973) POSIX 启动器回归破坏终端智能体检测。**暂无 fix PR**。
- [#150448](https://github.com/NousResearch/hermes-agent/issues/150448) Windows MSIX 商店更新后自启器指向已删除载荷目录（WSH 80070003）。**暂无 fix PR**。
- [#157356](https://github.com/NousResearch/hermes-agent/issues/157356) Windows 下 `whoami.exe` 被解析为捆绑 Git 的 coreutils 版本，导致 `service_identity_unverified` 启动失败。**暂无 fix PR**。
- [#147451](https://github.com/NousResearch/hermes-agent/issues/147451) Kimi K3 在"口头宣布动作"后直接结束回合，stall guard 未触发。**暂无 fix PR**。
- [#151584](https://github.com/NousResearch/hermes-agent/issues/151584) 经典 CLI 的 `/resume`、`/sessions` 不显示 Desktop 的 `source="gui"` 会话，无全源视图。**暂无 fix PR**。
- [#149598](https://github.com/NousResearch/hermes-agent/issues/149598) Desktop 回合中消息进入 owner FIFO 排队，延迟约 5 分钟，忽略 `busy_input_mode: interrupt`。**暂无 fix PR**。
- [#146835](https://github.com/NousResearch/hermes-agent/issues/146835) 同为 `busy_input_mode: steer` 下，图片消息仍进入队列而非引导当前回合。**暂无 fix PR**。
- [#158622](https://github.com/NousResearch/hermes-agent/issues/158622) `OpenCodeGoProfile` 的视觉工具消息否决已过时，误禁工具结果中的图片。**暂无 fix PR**。

**已有 fix PR 的非 P2 项**
- [#158633](https://github.com/NousResearch/hermes-agent/pull/158633) fix(browser)：Chromium 启动参数补 `--disable-blink-features=AutomationControlled`。
- [#158632](https://github.com/NousResearch/hermes-agent/pull/158632) fix(code-execution)：为内部工具调用分配独立 `tool_call_id`，修复 Langfuse 等追踪缺失。
- [#158635](https://github.com/NousResearch/hermes-agent/pull/158635) fix(worker)：持久化声明保持响应并等待 owner 写入回执。

**稳定性结论**：今日新增问题中，**多 provider/多平台边界类缺陷占比偏高**（Windows 2 项、Discord 1 项、MiniMax 1 项、Kimi 1 项），且绝大多数无 fix PR，回归风险处于积累状态。

## 6. 功能请求与路线图信号

- **主动式日程助手**：[#158289](https://github.com/NousResearch/hermes-agent/pull/158289)（teknium1，OPEN）让 Hermes 自主识别未来需求（航班、预约、截止日期、习惯）并创建定时任务，每个任务先展示"Schedule this job?"确认卡。配套 [#158569](https://github.com/NousResearch/hermes-agent/pull/158569) 新增 `cron.proactive_guidance` 开关以关闭主动提议——**该功能已具备主 PR + 可控性开关的完整形态，进入下一版本概率较高**。
- **在线状态感知通知**：[#158424](https://github.com/NousResearch/hermes-agent/pull/158424) 向服务端上报用户是否在键盘前；[#158407](https://github.com/NousResearch/hermes-agent/pull/158407) 让网关识别每条消息来自哪个客户端及近期活跃客户端。两者共同支撑"手机通知在用户已看电脑时保持安静"的场景。
- **终端状态上报**：[#140837](https://github.com/NousResearch/hermes-agent/pull/140837)（ci-reviewed）CLI/TUI 通过 OSC 7501 上报 idle/working/blocked/done/error，移植 goose#12928。
- **交互反馈闭环**：[#143541](https://github.com/NousResearch/hermes-agent/issues/143541) Desktop 点👎后立即触发纠错回合，无需用户再输入。
- **Kanban 状态控制**：[#157626](https://github.com/NousResearch/hermes-agent/issues/157626) 支持 `create --initial-status scheduled`，避免停放卡产生 `blocked` 事件。
- **生态扩展**：插件目录更新 [#158638](https://github.com/NousResearch/hermes-agent/pull/158638)（hermes-committee 0.4.4）、[#158621](https://github.com/NousResearch/hermes-agent/pull/158621)（Antigravity ACP provider v0.8.0）。

## 7. 用户反馈摘要

**痛点**
- **规模即痛点**：会话数达数千后网关性能崩溃（#146643），用户被迫在"功能完整"与"可用"之间取舍。
- **静默行为变更最伤信任**：#99943 的窗口钳制无告警、无提示；#150617 的空回复同样无错误暴露。
- **多客户端割裂**：Desktop、Webapp、经典 CLI、Bot Mode 各自看到不同的会话与行为（#151584、#149598、#155517），用户明确要求"全源视图"。
- **跨平台安装脆弱**：Windows 商店更新与冷启动路径（#150448、#157356）出现硬失败，非技术用户难以自愈。

**使用场景**
本地优先的桌面工作流 + 多 provider 切换 + 消息网关（Slack / Telegram / Discord）+ 长时运行 Bot Mode 与定时任务。用户明显在**接近生产规模**地使用（数千会话、6 个月跨度的 issue）。

**满意度**
对迁移方向（serve→gateway）与新增自动化能力保持参与度；贡献者仍在积极提交测试与文档改进，社区协作意愿健康。不满集中于**回归无人认领**与**高评论 Issue 长期 OPEN**。

## 8. 待处理积压

| 条目 | 状态 | 停留时长 | 说明 |
|---|---|---|---|
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) 上下文窗口钳制回归 | OPEN，15 评论，无 fix PR | 约 2.5 个月（2026-09-01 起） | 标记 `sweeper:risk-session-state`、`sweeper:risk-compatibility`，影响云 provider 用户 |
| [#146643](https://github.com/NousResearch/hermes-agent/issues/146643) 网关全量重读历史 | OPEN，22 评论 | 约 3 周，热度最高 | 仅有部分缓解 PR [#144701](https://github.com/NousResearch/hermes-agent/pull/144701)，该 PR 自 10-25 起仍在待合并 |
| [#129973](https://github.com/NousResearch/hermes-agent/issues/129973) POSIX 启动器回归 | OPEN，7 评论 | 约 7 周 | 影响终端生态互操作 |
| [#145171](https://github.com/NousResearch/hermes-agent/issues/145171) 入口收敛至网关会话权威 | OPEN 跟踪 issue，7 评论 | 约 4 周 | 迁移主线，需协调多个堆叠 PR |
| [#144701](https://github.com/NousResearch/hermes-agent/pull/144701) | OPEN | 约 4 周 | 与 #146643 直接相关，建议优先评审 |

**维护者关注建议**：优先处理 (1) #99943 的钳制逻辑回滚或按 provider 分流；(2) #146643 + #144701 捆绑推进；(3) 清理待合并队列中 41 条 OPEN PR 的陈旧项，避免评审带宽被长期堆叠 PR 稀释。

---
*本日报仅基于所提供 GitHub 数据生成，未包含数据之外的版本内容、链接或指标。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-21

## 1. 今日速览

今日 PicoClaw 无新版本发布，仓库活跃度偏低但维护动作集中：6 条 PR 全部关闭，其中 4 条为 Dependabot 依赖升级（均带 `stale` 标签后被关闭），2 条为长期挂起的陈旧 PR（#2379、#1559）。Issues 侧 3 条更新中仅 1 条关闭，且两条开放 Issue 均带 `stale` 标记。最值得关注的是 #3417 中社区成员宣布另建活跃 fork（afjcjsbx/picoclaw），直指上游仓库“疑似失维护”——这是本项目健康度的核心风险信号，而非普通的 bug 报告。

## 2. 版本发布

无。今日无 Release。

## 3. 项目进展

今日无实质性功能推进的 PR 合并，6 条关闭 PR 情况如下：

- **#3459**、**#3458**、**#3460**、**#3457**（Dependabot，`dependencies, go, stale`）：分别针对 `line-bot-sdk-go/v8`（8.20.1→8.23.0）、`modernc.org/sqlite`（1.53.0→1.61.1）、`azidentity`（1.14.0→1.15.0）、`golang.org/x/time`（0.15.0→0.16.0）的依赖升级，已关闭。状态为 CLOSED，无法从数据判断是合并还是丢弃，维护者应确认这些依赖是否已另行更新，否则存在安全与兼容性欠账。
- **#2379** `Feature/telegram codex orchestrator`：2026-04 创建，11-21 关闭，属长期挂起后被关闭的功能 PR。
- **#1559** `fix: merge PR #1327 #1319 #1318 #1313`：2026-03 创建的批量合并 PR，11-21 关闭。

**评估**：今日项目净进展接近于零。关闭动作集中在清理陈旧项，而非推进新功能。

## 4. 社区热点

- **#3417 [OPEN] Active Fork & Continued Maintenance: afjcjsbx/picoclaw**（5 条评论，今日更新最多）
  https://github.com/sipeed/picoclaw/issues/3417
  作者称仓库“目前看来无人维护”，但社区需求仍在，因此自行建立并维护 fork。这是今日最重要的讨论。背后的诉求很明确：用户认可项目价值，但对上游维护节奏失去信心，社区需要一支“能接单”的维护力量。这也是今日 6 条 PR 集中被关闭、多条 Issue 打上 `stale` 的直接背景。

- **#3454 [OPEN] [stale] Model identifier validation suggests lowercasing unknown provider prefixes**（4 条评论）
  https://github.com/sipeed/picoclaw/issues/3454
  在模型编辑界面输入非 picoclaw 内置 provider 前缀（如大小写敏感的上游命名空间 `ACME/gpt-4o-mini`）时，校验逻辑建议转为小写，可能破坏上游模型 ID。属于配置正确性问题，影响接入自建/第三方网关的用户。

## 5. Bug 与稳定性

按严重程度排列：

1. **#3454（中）**：模型标识校验对未知前缀错误建议小写，导致大小写敏感上游模型 ID 失效。状态 OPEN、`stale`，**无 fix PR**。属于配置层错误，不会导致崩溃，但会造成模型调用失败，影响面取决于使用自建 provider 的用户比例。
2. **#3461（中，已关闭）**：`[stale] [BUG] start gateway not available via web ui (with no-api-key providers)`。用户配置 `provider` 为空字符串的 no-api-key 模型（`kilo-auto`）时，控制台可用但 Web UI 无法启动 gateway。状态 CLOSED，**未显示关联 fix PR**，需确认是修复还是因 stale 关闭。

今日无崩溃或回归类报告。

## 6. 功能请求与路线图信号

- **Telegram / Codex 编排能力**（#2379）：请求以 Telegram 作为前端、接入 Codex 式编排的功能 PR，今日被关闭。考虑到 Issue #3417 指向的维护意愿问题，该方向短期内进入官方版本的可能性低，更可能由 fork 承接。
- **多 provider / 网关兼容性**（#3454、#3461 共同指向）：两条问题均源于“非内置 provider + 自定义模型 ID”的使用方式。这是一个清晰的产品信号——用户的真实用法已超出内置 provider 假设，但当前无对应修复 PR，纳入下一版本的概率取决于维护者是否延续上游维护。**若无上游动作，这两项更可能先出现在 fork 中。**

## 7. 用户反馈摘要

- **核心痛点：维护停滞。** #3417 的 5 条评论反映社区仍在关注项目、仍想继续使用，但认为 sipeed/picoclaw 已无人维护，因而转向 fork。对用户而言这是“要不要迁移”的决策问题，对维护者是最强警示。
- **使用场景：自建/第三方 provider 与网关。** #3461 用户配置 `provider: ""` 的 `kilo-auto` 模型，命令行可运行而 Web UI 不可用；#3454 用户接入大小写敏感的上游 API。两者说明典型用户是自行拼装模型后端的高级用户，对 UI 与校验逻辑的容错度要求高。
- **满意度信号：无负面评价针对功能本身。** 没有用户抱怨核心能力不足，问题集中在配置界面与维护节奏上。

## 8. 待处理积压

- **#3417**（创建 2026-10-06，OPEN，今日仍有更新）：fork 公告类 Issue，建议维护者正式回应维护状态与后续计划，否则社区将持续分流。 https://github.com/sipeed/picoclaw/issues/3417
- **#3454**（创建 2026-10-28，OPEN，已 stale）：模型标识校验问题，无 fix PR，需判断是否接受修复。 https://github.com/sipeed/picoclaw/issues/3454
- **4 条 Dependabot PR（#3457–#3460）**：全部因 stale 关闭，若对应依赖未在其他方式上升级，需尽快补回，避免依赖落后。
- **#2379、#1559**：两条跨越 2026-03/04 至 11 月才关闭的 PR，反映 PR 审阅周期极长。建议维护者说明关闭理由，避免贡献者流失。

**健康度小结**：今日数据呈现“清理多于建设”的状态。真正需要处理的不是新 bug，而是 #3417 揭示的维护可持续性问题——它正在把最活跃的社区成员推向 fork。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-21

## 1. 今日速览

NanoClaw 今日发布稳定版 **v2026.11.0**（经 beta 通道九轮预发布验证），项目进入新一轮稳定期。过去 24 小时 Issues 更新 22 条（新开/活跃 6、关闭 16），PR 更新 31 条（待合并 12、合并/关闭 19），关闭量显著高于新开量，积压呈收缩态势。活跃度评估：**高**，但新增问题集中在同一名报告者（glifocat）身上，且多条为 v2026.11.0 发布后暴露的边界缺陷。核心稳定性风险集中在容器内 Claude Code 版本落后与更新脚本对 detached HEAD 处理不当。

---

## 2. 版本发布

### v2026.11.0（稳定版）

- `/update-nanoclaw` 在默认 `stable` 通道已可获取该版本；覆盖自 2026.10.0 以来的全部变更，已在 `beta` 通道经九轮预发布测试。
- 发布说明中明确列出的首个可感知变更为 **按 agent 精细化 API 密钥授权**（"Each agent gets only the keys you give it"），即每个 agent 仅获得被显式授予的密钥。
- **破坏性变更 / 迁移注意事项**：所给材料仅摘要了发布说明开头的五项变更中的第一项，其余变更内容与是否存在破坏性变更未在材料中体现，**无法据此判断**，建议读者查阅完整 release note。
- 相关配套：镜像刷新 PR #4520 将 v2026.11.0 的硬化镜像指向 `v2026.11.0-20261121T0916`（[PR #4520](https://github.com/nanocoai/nanoclaw/pull/4520)，已关闭）。

---

## 3. 项目进展

今日合并/关闭的 PR 中，推进明确的有：

- **Telegram 语音消息语义修正**：[PR #4518](https://github.com/nanocoai/nanoclaw/pull/4518)（已关闭）——将 Telegram 录音标记为 voice note，与 WhatsApp 自 #4378 起的做法对齐；对应 Issue #4517。
- **CI 稳定性**：[PR #4514](https://github.com/nanocoai/nanoclaw/pull/4514)（已关闭）——当被替换的旧镜像已无法从 registry 读取时，跳过 `verify-agent-image` 的体积比对，修复 Issue #4513。
- **镜像基线更新**：[PR #4520](https://github.com/nanocoai/nanoclaw/pull/4520) 以及 v2026.10.0 系列的多条镜像刷新 PR（#4397、#4402、#4425、#4438）均已关闭，硬化镜像链持续跟进。

**推进幅度评估**：今日关闭以小型修复与自动化镜像刷新为主，无大型功能落地；主干能力的实质推进依赖仍待合并的 PR（见下节）。项目整体处于"稳定版发布后的收尾与补漏"阶段，而非功能扩张阶段。

---

## 4. 社区热点

| 条目 | 链接 | 讨论热度 | 诉求分析 |
|---|---|---|---|
| Issue #4519 [CLOSED] Claude token 解析器在终端重绘时可返回过长 token | [#4519](https://github.com/nanocoai/nanoclaw/issues/4519) | 3 评论 | 安装路径上 `claude setup-token` 的终端捕获不够健壮，属于首次上手体验问题 |
| Issue #2312 [CLOSED] `groups/global/CLAUDE.md` 每次启动被无条件删除 | [#2312](https://github.com/nanocoai/nanoclaw/issues/2312) | 3 评论 | 长期存在的工作区脏状态问题，影响所有拉取仓库的实例 |
| Issue #2426 [CLOSED] Discord 中 LLM 看不到图片 | [#2426](https://github.com/nanocoai/nanoclaw/issues/2426) | 2 评论 | 多模态输入在 Discord 通道失效，仅收到 `[image: file.png]` 占位 |
| Issue #3075 [OPEN] 长时间运行后静默丢日志 + 入站消息重复插入；未安装 systemd unit | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) | 2 评论 | 长稳运行场景（WSL2 + Docker + Matrix）下的可观测性与进程守护缺失 |
| Issue #1930 [CLOSED] 支持其他模型及第三方 API 通道（中文） | [#1930](https://github.com/nanocoai/nanoclaw/issues/1930) | 2 评论 | 模型供应商中立性诉求 |
| PR #4165 [OPEN] 修复 Codex 子 agent 线程事件污染父回合 | [#4165](https://github.com/nanocoai/nanoclaw/pull/4165) | 长期在列（10-21 起） | 多 agent 编排的正确性 |

**热点判断**：今日最集中的议题是**附件与多模态在通道间的不一致**（#2426、#2047、#2370），以及**工作区文件被脚本静默删除**（#2312、#2360）。二者都不是新问题，而是同一批用户在长期使用后集中反馈，说明安装/迁移路径的设计债务正在持续消耗用户信任。

---

## 5. Bug 与稳定性

按严重程度排列：

**高**

- **容器内 Claude Code 版本落后**：[Issue #4523](https://github.com/nanocoai/nanoclaw/issues/4523)（OPEN）——agent 容器运行 Claude Code 2.1.321 / Agent SDK 0.3.321，缺失 2.1.322–2.1.330 中关于 resume 与 compaction 的修复。**已有 fix PR**：[#4524](https://github.com/nanocoai/nanoclaw/pull/4524)（OPEN），升级至 2.1.330 / SDK 0.3.330。
- **静默丢日志 + 消息重复插入**：[Issue #3075](https://github.com/nanocoai/nanoclaw/issues/3075)（OPEN，自 2026-07-17）——长时间运行后出现，且无 systemd unit 守护。**无对应 fix PR**，为今日积压中风险最高的未闭环问题。

**中**

- **`/update-nanoclaw` 在 detached HEAD 上以原始 git 错误失败**：[Issue #4525](https://github.com/nanocoai/nanoclaw/issues/4525)（OPEN）——恰在 v2026.11.0 发布当天暴露，影响面大。**已有 fix PR**：[#4527](https://github.com/nanocoai/nanoclaw/pull/4527)（OPEN），改为提示 HEAD 位置与修复方法。
- **Telegram 语音消息被当作普通音频**：[Issue #4517](https://github.com/nanocoai/nanoclaw/issues/4517)（CLOSED）——已由 [PR #4518](https://github.com/nanocoai/nanoclaw/pull/4518) 修复。
- **WhatsApp 依赖存在安全公告**：[PR #4516](https://github.com/nanocoai/nanoclaw/pull/4516)（OPEN）——`channels` 分支仍使用 Baileys `7.0.0-rc.9`，受 GHSA-qvv5-jq5g-4cgg（消息伪造）影响，PR 提议升至 `7.0.0-rc14`。**建议优先合并**。

**低**

- **token 解析器返回过长 token**：[Issue #4519](https://github.com/nanocoai/nanoclaw/issues/4519)（CLOSED）。
- **`verify-agent-image` 旧镜像不可读时失败**：[Issue #4513](https://github.com/nanocoai/nanoclaw/issues/4513)（CLOSED），已由 [PR #4514](https://github.com/nanocoai/nanoclaw/pull/4514) 修复。
- **`ncl groups config add-mount` 无法创建读写挂载**：[Issue #4150](https://github.com/nanocoai/nanoclaw/issues/4150)（CLOSED，v2026.10.0）。
- **reaction/编辑类操作失败**：#3153、#4002（均为 router 对消息 id 加命名空间后缀后未剥离所致）、#2569（emoji shortcode 未转 Unicode）、#2041，均标记 CLOSED。

**安全类（已关闭，但值得复盘）**

- [Issue #2711](https://github.com/nanocoai/nanoclaw/issues/2711)：`create_agent` MCP 工具虽标注 admin-only，但对每个容器均暴露且 host 无角色校验，任意 agent 容器可创建 agent group。

---

## 6. 功能请求与路线图信号

- **第三方模型 / API 通道支持**：[Issue #1930](https://github.com/nanocoai/nanoclaw/issues/1930)（CLOSED，中文提出）。v2026.11.0 的"按 agent 授予密钥"已为多供应商配置打下基础，但材料未显示该 issue 明确进入路线图。**纳入下一版本的可能性：中**。
- **日志轮转 / 体积上限**：[Issue #1554](https://github.com/nanocoai/nanoclaw/issues/1554)（CLOSED，👍3，今日唯一有正向反应的 issue）——用户 `nanoclaw.log` 已超 600MB。与仍开放的 #3075 同源，属高价值易实现项。**可能性：高**。
- **附件目录标准化挂载**：[Issue #2047](https://github.com/nanocoai/nanoclaw/issues/2047)、[#2370](https://github.com/nanocoai/nanoclaw/issues/2370)（均 CLOSED）——WhatsApp 附件落盘 `data/attachments/` 但未挂载进容器，已通过增加标准挂载修复。该模式可作为其他通道的模板。
- **agent 配置保护**：[Issue #2360](https://github.com/nanocoai/nanoclaw/issues/2360)（CLOSED）——`nanoclaw.sh` 静默删除 `groups/*/CLAUDE.md`，无警告无备份。与 #2312 同源，建议后续合入统一的工作区迁移策略。

---

## 7. 用户反馈摘要

**真实痛点**

1. **升级路径不健壮**：稳定版发布当天即有用户在 detached HEAD 上更新失败（#4525），说明 `/update-nanoclaw` 对非标准安装形态假设过强。
2. **工作区文件被脚本静默破坏**：#2312 与 #2360 同样指向 `migrateGroupsToClaudeLocal()` 与安装脚本对 `groups/*/CLAUDE.md` 的无提示删除/覆盖——用户明确表示"花时间定制的 agent 配置"丢失。
3. **通道能力不一致**：用户反复发现"某个通道能做的事另一个通道做不到"——WhatsApp 有 voice note 语义而 Telegram 没有（#4517）、Discord 看不到图片（#2426）、附件挂载缺失（#2047/#2370）。
4. **长稳运行缺保障**：#3075 用户运行于 WSL2 + Docker + Matrix 自建 homeserver 的个人场景，遇到丢日志与重复插入，且没有 systemd unit 可用，反映出**自托管长期运行**这一核心使用场景的支持不足。

**满意信号**：Issue #1554 获得 3 个 👍，为今日唯一有正向反馈的条目，说明用户对"日志可控性"这类务实改进期待明确。

---

## 8. 待处理积压

| 条目 | 状态 | 滞留时长 | 建议 |
|---|---|---|---|
| [Issue #3075](https://github.com/nanocoai/nanoclaw/issues/3075) 静默丢日志 + 消息重复插入，无 systemd unit | OPEN | 自 2026-07-17（约 4 个月） | 与已关闭的 #1554 合并规划；需补充 journald/systemd 方案说明 |
| [Issue #2569](https://github.com/nanocoai/nanoclaw/issues/2569) add_reaction schema 要求 shortcode 但 handler 原样透传，破坏 WhatsApp/Discord | OPEN | 自 2026-05-20（约 6 个月） | 与已关闭的 #2041、#3153、#4002 同族，建议一次性收口 reaction 语义层 |
| [PR #4165](https://github.com/nanocoai/nanoclaw/pull/4165) Codex 子 agent 线程事件隔离 | OPEN | 自 2026-10-21（约 1 个月） | 已带 core-team 与 follows-guidelines 标签，关注度不足，建议推动 review |
| [PR #4434](https://github.com/nanocoai/nanoclaw/pull/4434) OneCLI gateway 就绪检查失败时 setup 应非零退出 | OPEN | 自 2026-11-17 | 属扩展安装可靠性，建议随下一补丁版本合入 |

---

**维护者行动建议（按优先级）**：① 合并 [PR #4516](https://github.com/nanocoai/nanoclaw/pull/4516) 修复 Baileys 安全公告；② 推动 [PR #4524](https://github.com/nanocoai/nanoclaw/pull/4524)/[#4527](https://github.com/nanocoai/nanoclaw/pull/4527) 闭环 v2026.11.0 当天的两个回归；③ 为 #3075 给出明确的排期或替代方案，它是当前最长的未响应高严重度问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-11-21

## 1. 今日速览

IronClaw 今日处于**低活跃状态**：过去 24 小时仅 1 条 Issue 更新（新开 1、关闭 0），PR 更新为 0，无新版本发布。当日全部动态集中于一个功能请求——将 LLMTR 作为内置 OpenAI 兼容 LLM 提供商加入提供商目录。由于没有代码提交、PR 合并或关闭动作，项目代码层面今日无实质推进。整体健康度平稳，无 Bug、崩溃或回归报告，但迭代节奏明显放缓。

## 2. 版本发布

今日无新版本发布，此处省略。

## 3. 项目进展

今日无合并或关闭的 PR，PR 更新数为 0，代码库无向前推进的记录。项目整体进展为**零增量**。

## 4. 社区热点

今日唯一活跃条目为 Issue #8174（1 条评论，0 👍），也是当日讨论量最高的条目：

- **#8174 [OPEN] feat: add LLMTR as a built-in OpenAI-compatible LLM provider**
  作者：knowhycodata ｜ 创建/更新：2026-11-21 ｜ 评论：1
  链接：nearai/ironclaw Issue #8174

**诉求分析**：提出者希望将 LLMTR（位于 `https://ll...` 的 OpenAI 兼容网关）作为一等条目写入内置提供商目录 `crates/domains/ironclaw_llm/assets/providers.json`，与 Groq、Together、Cerebras、MiniMax 并列。这反映出用户希望降低接入第三方 OpenAI 兼容服务的配置成本，将社区网关纳入官方目录以获得开箱即用体验。该 Issue 已有 1 条评论，说明存在一定的社区互动，但反应量（0 👍）偏低。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告，无对应 fix PR。

## 6. 功能请求与路线图信号

今日仅有 1 项功能请求：

- **#8174 内置 LLMTR 提供商**（链接同上）
  该请求属于提供商目录扩展类需求，实现范围相对明确（在 `providers.json` 中新增条目）。但由于当前**无关联 PR**、且仅 1 条评论，暂无证据表明其已被纳入下一版本。是否进入路线图取决于维护者对目录准入标准（如网关稳定性、维护方资质）的评估。

## 7. 用户反馈摘要

基于 #8174 及其评论可提炼：

- **使用场景**：用户通过 OpenAI 兼容网关（LLMTR）接入 IronClaw 的 LLM 层，期望以官方内置提供商方式使用，而非手动配置。
- **痛点**：现有内置目录仅覆盖 Groq、Together、Cerebras、MiniMax 等，接入其他兼容网关需自行配置，体验不够顺畅。
- **满意度信号**：用户主动提交功能请求并附具体文件路径，表明对项目架构有一定了解与认可；但 0 👍 的反馈量显示该需求尚未形成广泛共识。

## 8. 待处理积压

根据所提供的 24 小时数据，**未发现长期未响应的重要 Issue 或 PR**（当日仅 1 条新开 Issue，且已有 1 条评论）。建议维护者持续关注 #8174 的后续讨论与是否有人提交实现 PR：
- #8174：nearai/ironclaw Issue #8174

---
*说明：本日报严格基于所提供的 2026-11-21 IronClaw GitHub 数据生成；Issue 摘要中链接被截断（`https://ll...`），故未补全具体地址。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-11-21）

> 数据来源：LobsterAI (github.com/netease-youdao/LobsterAI) GitHub 活动。所有条目均基于本次提供的 Issues、PR 与 Release 数据；数据中未提供的内容不作推断。

## 1. 今日速览

- 今日项目**开发活跃度较高**：24 小时内共关闭或合并 8 个 PR，覆盖 renderer、main、cowork、docs、artifacts 等多个模块。
- 今日发布新版本 **2026.11.20**，重点为“引导式 PPT 封面创建”和“会话导航与提示历史”。
- Issues 侧今日**无任何更新**（新开/活跃 0，关闭 0），社区反馈渠道处于静默状态。
- 8 个 PR 中有多个围绕 DeepSeek Harness（DSH）运行时迁移与桌面集成，显示一次较大的架构切换正在收尾。
- 全部 PR 作者均为 fisherdaddy，贡献者集中度高，需关注单点依赖风险。

## 2. 版本发布

**LobsterAI 2026.11.20**（发布于 2026.11.20）

- 🎨 **引导式 PPT 封面创建**：新增分步式封面向导，并提供可配置的首页示例，帮助用户更快上手（#3072、#3129）。
- ⏪ **会话导航与提示历史**：支持在会话之间前进/后退，并可回看历史提示（#3107）。
- 破坏性变更：本次提供的 Release 说明中**未提及**破坏性变更。
- 迁移注意事项：本次提供的 Release 说明中**未提及**迁移要求；如需确认，建议查阅完整 Release Note。

## 3. 项目进展

今日关闭/合并的 8 个 PR 共同推动了以下方向：

**DSH 运行时迁移与多智能体协作**
- #3137 [CLOSED] `feat(dsh): add cross-agent collaboration and specialist delegation` — 在 DeepSeek Harness 运行时上恢复并升级多智能体协作，使任意已启用的 LobsterAI 智能体可发现并委派任务给其他专业智能体（使用各自的 workspace persona）。链接：netease-youdao/LobsterAI PR #3137
- #3136 [CLOSED] `feat(dsh): complete desktop runtime integration` — 完善 DSH 桌面端集成：持久化已停止的定时任务、重启后核对被中断的运行，并在任务详情与历史中暴露停止状态。链接：netease-youdao/LobsterAI PR #3136
- #3142 [CLOSED] `chore: sync release/2026.11.17 engine-agnostic fixes to dsh` — 将三个与引擎无关的修复 cherry-pick 到 `feat/migrate-openclaw-to-dsh` 分支。链接：netease-youdao/LobsterAI PR #3142

**桌面伴侣（Desktop Companion）体验修复**
- #3140 [CLOSED] `fix(desktop-companion): keep orb docked across displays and Windows DPI` — 默认让悬浮球贴靠右侧工作区边缘，显示变更时不再持久化回退/默认坐标；新增 `desktop-companion.position.v2` 存储停靠元数据（edge、yRatio、displayId）。链接：netease-youdao/LobsterAI PR #3140
- #3138 [CLOSED] `fix(companion): align hover pet atlas scale and vertical center` — 修复全部 8 个 sea-friend 皮肤悬浮时缩小与下跳的问题，根因为 Codex Pets `192×208` 图集中角色实际站位（y = 42..194，约 73.1% 单元格高度）。链接：netease-youdao/LobsterAI PR #3138

**渲染与协作界面**
- #3139 [CLOSED] `fix(cowork): place turn artifacts above reply metadata row` — 将回合产物（文件卡片、内联图片画廊、视频路径）渲染在最终回复的元信息与操作行之上。链接：netease-youdao/LobsterAI PR #3139
- #3143 [CLOSED] `fix(office): ensure workbook relationship namespace on xlsx export` — 修复向 `openpyxl` 生成的 `.xlsx` 追加工作表时的 XML 命名空间兼容问题（`xmlns:r` 声明位置差异）。链接：netease-youdao/LobsterAI PR #3143
- #3141 [CLOSED] `Feat/home quick actions ppt navigation` — 首页快捷操作与 PPT 导航相关改动。链接：netease-youdao/LobsterAI PR #3141

**整体评估**：项目今日在 DSH 运行时迁移、多智能体协作、桌面伴侣稳定性三条主线上均有实质推进，属于本次迁移周期的关键收尾阶段。

## 4. 社区热点

- 今日数据中**无 Issues 评论活动**，所有 PR 的 👍 均为 0，且评论数未提供（显示为 undefined）。
- 因此无可量化的“讨论最活跃”条目。相对而言，改动面最大、影响最广的是 #3137（跨智能体协作）与 #3136（DSH 桌面运行时集成），二者定义了下一阶段的能力边界。
  - netease-youdao/LobsterAI PR #3137
  - netease-youdao/LobsterAI PR #3136
- 值得注意的是，8 个 PR 全部由同一作者提交并在当日关闭，说明当前处于集中交付节奏，外部社区参与信号较弱。

## 5. Bug 与稳定性

今日无 Issues 报告的 Bug 或崩溃。已修复问题按影响面排列（均已有关闭的 fix PR）：

| 严重度 | 问题 | Fix PR |
|---|---|---|
| 中高 | 桌面伴侣悬浮球在多显示器与 Windows DPI 缩放下位置漂移、坐标被错误持久化（#3140） | 已修复 |
| 中 | 悬浮宠物 8 个皮肤在悬停时视觉缩小并向下跳动（#3138） | 已修复 |
| 中 | xlsx 导出时追加工作表触发的 XML 命名空间兼容性错误，影响 Office 文件导出（#3143） | 已修复 |
| 中低 | 协作回合产物渲染位置错误，被压在回复元信息行之下（#3139） | 已修复 |
| 低 | DSH 桌面端定时任务停止状态未持久化、重启后被中断的运行未核对（#3136，作为集成缺陷处理） | 已修复 |

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求（Issues 为 0）。基于已合并 PR，可判断以下能力正在进入下一版本视野：

- **跨智能体协作与专家委派**（#3137）：多智能体互发现、任务委派，是明确的路线图信号。
- **PPT 创作体验增强**：引导式封面向导（#3072、#3129）与首页快捷操作/PPT 导航（#3141、#3107）在同一天落地，说明“演示文稿生成”是重点投入方向。
- **桌面伴侣个性化**：多显示器/DPI 适配与 8 套皮肤修复，表明桌面常驻形态被持续打磨。

## 7. 用户反馈摘要

- 本次提供的数据中**不包含任何 Issues 内容或评论**，因此无法提炼真实用户痛点、使用场景与满意度。
- 从修复内容的性质可间接推断关注点：多显示器用户与高 DPI 用户的桌面伴侣体验、Office 文件导出的可靠性、以及回复卡片的可读性布局。但这属于从代码改动推断，不等同于用户原声反馈。

## 8. 待处理积压

- 本次数据中**无长期未响应的 Issue 或 PR**：待合并 PR 为 0，无打开的 Issues。
- 维护者建议关注：
  - **贡献者集中度**：今日 8 个 PR 均来自 fisherdaddy，建议关注评审与知识分散。
  - **Issues 通道静默**：24 小时零 Issue 更新，需确认是健康指标还是用户反馈入口（模板、分类）存在问题，建议核对 Issue 模板与分流配置。

---
*注：本日报严格基于所提供的 GitHub 数据生成；未提供的字段（如评论数、Issue 正文、完整 Release Note、破坏性变更说明）不作推测。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-11-21

## 1. 今日速览
- 今日无新版本发布，项目处于常规迭代状态。
- Issues 侧有 2 条新开/活跃、0 条关闭；PR 侧 1 条待合并、1 条已关闭，整体活跃度中等偏低。
- 社区关注度最高的是 Lark/Feishu 渠道支持请求（#383，👍 7，2 条评论），属渠道扩展类长期诉求。
- 新报告的 #1324 指出 exec 工具 `command` 参数文档与实际执行行为不一致，暂无对应 fix PR。
- 待合并 PR #1325 引入按次运行的美元成本上限，是当日最有价值的成本控制方向推进。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
- **PR #1005 [CLOSED] feat(openai-codex): add reasoning effort support** — moltis-org/moltis PR #1005
  该 PR 将 `reasoning_effort` 贯穿克隆的 Codex provider 实例，并在 Responses API 请求中序列化所配置的 GPT-5 Codex effort；同时在没有显式设置 effort 时保留 `reasoning.encrypted_content`，以维持既有 Codex 后续请求链路。该 PR 已关闭（摘要未显示合并，具体状态以仓库为准），属于 OpenAI Codex 集成的能力完善。

整体来看，今日项目推进幅度有限，主要变化集中在 Codex 推理参数支持与成本控制提案两条线上。

## 4. 社区热点
- **Issue #383 [OPEN] [enhancement] [Feature]: Support Lark/Feishu** — moltis-org/moltis Issue #383
  作者 memwey，创建于 2026-03-10，更新时间 2026-11-21，2 条评论，👍 7。是今日反应数与讨论量最高的条目。诉求背后是企业 IM 用户希望将 Moltis 接入飞书/Lark 生态，属于渠道覆盖面的扩展需求；从创建时间看，该请求已持续 8 个月以上仍未落地。

- **PR #1325 [OPEN] agents: add tools.agent_max_cost_usd per-run USD cap** — moltis-org/moltis PR #1325
  当日新开，作者 Mattbusel。虽无评论数据，但触及智能体运行成本这一核心痛点，值得关注。

## 5. Bug 与稳定性
- **中低严重度：Issue #1324 [OPEN] [Bug]: exec tool `command` parameter says "shell command" but paired-node exec doesn't use a shell** — moltis-org/moltis Issue #1324
  作者 swf1996120，创建与更新均为 2026-11-20，0 评论。问题在于 exec 工具 schema 中 `command` 参数被描述为 shell command，但 paired-node 的 exec 实际并不经过 shell，属于**文档描述与运行时行为不一致**，可能导致用户按 shell 语义编写命令时出现非预期结果。目前无 fix PR。

今日无崩溃或回归类问题报告。

## 6. 功能请求与路线图信号
- **Lark/Feishu 渠道支持（#383）**：反应数 7，为近期诉求中热度较高者。考虑到该 Issue 自 3 月创建至今仍未关闭，是否纳入路线图需维护者明确表态。
- **按运行美元成本上限（PR #1325）**：现有 `tools.agent_max_iterations` 仅限制 provider 调用次数而非成本；该 PR 针对长上下文高迭代场景下的费用失控风险提出 `tools.agent_max_cost_usd`。该 PR 已具备具体实现方向，是较有可能进入下一版本的成本治理能力，最终取决于评审结论。

## 7. 用户反馈摘要
- **渠道覆盖**：用户希望 Moltis 支持 Lark/Feishu（#383），反映企业协作场景下的接入需求。
- **行为一致性**：用户对工具参数文档与实际执行语义的偏差敏感（#1324），关注点在于可预期性而非性能。
- **成本可控性**：PR #1325 指出迭代次数上限无法约束实际花费，说明用户在实际运行长上下文任务时存在成本焦虑。
- 今日未出现明确的满意度正面反馈。

## 8. 待处理积压
- **Issue #383 Support Lark/Feishu** — moltis-org/moltis Issue #383
  自 2026-03-10 创建，至 2026-11-21 仍为 OPEN，跨度超过 8 个月，期间积累 7 个 👍 和 2 条评论。建议维护者给出明确的采纳/不采纳结论或排期说明。
- **PR #1325 成本上限** — moltis-org/moltis PR #1325
  当日新开，尚处待合并状态，需及时评审以免积压。
- **Issue #1324 exec 语义不一致** — moltis-org/moltis Issue #1324
  暂无 fix PR，建议至少先行修正参数文档描述。

---
**健康度小结**：今日无发布、无 Issue 关闭，但无严重缺陷或回归报告，项目状态平稳；主要关注点为一条长期未决的渠道类功能请求与一项新的成本控制 PR 的评审进度。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-11-21）

> 数据来源：agentscope-ai/CoPaw GitHub 仓库过去 24 小时动态。注：所附 Issue/PR 链接均指向数据中给出的 `agentscope-ai/QwenPaw` 仓库地址，标题/编号以数据原文为准。

## 1. 今日速览

项目今日整体处于**中等活跃、以修复和质量改进为主**的状态：24 小时内 8 条 Issue 更新（6 条新开/活跃、2 条关闭）、11 条 PR 更新，但**无 PR 被合并或关闭，也无新版本发布**，PR 队列全部处于待合并状态（11/11 OPEN）。新问题集中在 Console 前端（表格溢出、键盘滚动、插件路由）与文档准确性，贡献者响应速度较快——多数 Issue 在报告当天即出现对应 fix PR（#8849、#8847、#8846）。总体健康度良好，但存在**PR 合并停滞**与**长期挂起的大型 PR** 两个需关注信号。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目功能层面无实质性代码合入。值得注意的是，多条 Issue 已由社区提交配套修复 PR，处于待审状态：

- #8849（first-time-contributor，size/XS）修正 LICENSE 中 Contribution 定义的多余 "the"，Fixes #8840。
- #8847（size/XS）修复 Console 中宽 Markdown 表格无法横向滚动的问题，对应用户报告的 #8845。
- #8846（first-time-contributor，size/XS）补充 `/envs` API 的 merge/replace/reset 语义文档，对应 #8843。

这些均为小体量修复，若及时合并可快速提升用户体验与文档可信度。

## 4. 社区热点

- **#6475 [CLOSED] `notice_after_complete` 完成后通知工具**（3 条评论）— https://github.com/agentscope-ai/QwenPaw/issues/6475
  诉求：Agent 在后台执行长任务（shell、子 Agent、外部 API）时先回复用户并在完成时主动推送通知，允许会话并行处理其他问题。反映用户对**异步/后台任务体验**的强烈需求。
- **#7583 [CLOSED] 与 AgentScope 社区联动（社区登录、信箱、快速反馈）**（3 条评论）— https://github.com/agentscope-ai/QwenPaw/issues/7583
  诉求：把本地 QwenPaw 与 AgentScope 社区打通，直接在 IDE 内查看讨论、提交 Bug 反馈。反映用户希望**降低反馈摩擦、增强社区闭环**。
- **#8840 LICENSE 拼写错误**（2 条评论，已有 PR #8849）与 **#8843 `/envs` 文档误导**（2 条评论，已有 PR #8846）— 讨论量并列第二，体现社区对**合规性与文档准确性**的敏感度。
  https://github.com/agentscope-ai/QwenPaw/issues/8840 ｜ https://github.com/agentscope-ai/QwenPaw/issues/8843

## 5. Bug 与稳定性

按严重程度排序：

1. **【高】#8851 Console import map 将入口 chunk 重映射为 `?v=…`，导致 bundle 被加载两次、插件路由永不注册**（原文 "did not register its app route"）— 影响前端插件系统可用性，目前**暂无 fix PR**。
   https://github.com/agentscope-ai/QwenPaw/issues/8851
2. **【中】#8843 配置文档仅列出 `GET/PUT/DELETE /envs`，QA/引导 Agent 依据文档建议 `PUT`，会清除其他所有环境变量** — 属于**文档缺陷引发的潜在数据破坏**，已有 fix PR #8846 待合并。
   https://github.com/agentscope-ai/QwenPaw/issues/8843
3. **【中】#8770 [PR] runtime 在后台启动完成前应先拒绝聊天请求**（关联 #8746）— 启动期提交聊天返回 HTTP 200 但 Agent 针对半初始化 workspace 构建、运行挂起。**已有 fix PR 待合并**（size/XL）。
   https://github.com/agentscope-ai/QwenPaw/pull/8770
4. **【中】#8303 [PR] 审批提示未投递到发起它的聊天渠道**（WeChat 无提示，5 分钟后 TIMEOUT，工具静默未执行）— **已有 fix PR 待合并**（Under Review）。
   https://github.com/agentscope-ai/QwenPaw/pull/8303
5. **【低】#8845 宽 Markdown 表格溢出消息气泡、无横向滚动，溢出列不可见** — 已有 fix PR #8847。
   https://github.com/agentscope-ai/QwenPaw/issues/8845
6. **【低】#8844 消息列表无法键盘聚焦，方向键/PageUp/PageDown/Home/End 均不滚动** — 无障碍与键盘体验问题，**暂无 fix PR**。
   https://github.com/agentscope-ai/QwenPaw/issues/8844

## 6. 功能请求与路线图信号

- **`notice_after_complete` 异步任务通知机制（#6475，已 CLOSED）**：设计上涉及 shell 后台任务、任务号、完成回调，属于核心 Agent 运行时能力。虽已关闭，但若纳入路线图，将直接影响多任务并发体验。
- **AgentScope 社区联动（#7583，已 CLOSED）**：涉及登录、信箱、快速反馈，属产品级集成，需跨团队协作，短期内不太可能进入下一版本，但方向明确。
- 与上述相对的是，今日 Open PR 中**没有任何直接实现这两个功能的 PR**，因此**近期纳入下一版本的可能性偏低**；更现实的短期落点是 PR 队列中的 Console 修复（#8847）、文档修正（#8846）与运行时启动修复（#8770）。

## 7. 用户反馈摘要

- **长任务阻塞体验**：#6475 用户希望在等待长任务时仍能与 Agent 交互，说明当前 Agent 在"等待—响应"模型上不够灵活。
- **反馈闭环缺失**：#7583 用户明确点名"缺少与 AgentScope 社区的联动"，希望能在产品内直接查看讨论与提交反馈，并使用 Agent 能力自动细化反馈报告。
- **文档即产品**：#8843 揭示了真实痛点——文档的 API 描述不完整会直接误导 Agent/QA 产生破坏性操作，用户对文档准确性高度敏感；#8840 同类拼写问题被主动报告。
- **可达性/一致性**：#8845、#8844 由同一用户（caldefoc）连续提两条 Console 体验问题，反映前端细节打磨仍有空间。
- **压缩失败提示误导**：#8848 用户指出压缩失败时建议 `/clear` 可能导致上下文信息丢失，属于会引发用户误操作的 UX 问题。
  https://github.com/agentscope-ai/QwenPaw/issues/8848

## 8. 待处理积压

以下 PR 长期处于 OPEN 状态，今日仍有更新但未被合并，提醒维护者关注：

- **#7828（first-time-contributor，size/XXXL，创建于 2026-09-17）** "Dev my fix" — 描述仍为模板占位符，体积巨大且已挂近两个月，建议维护者推动澄清或关闭。
  https://github.com/agentscope-ai/QwenPaw/pull/7828
- **#8479（size/XXXL，2026-10-28，Under Review）** 同步 Anthropic 2026 年 7 月 Office skills 更新（DOCX/PPTX/XLSX）— 与上游版本落后约 4 个月，长期挂起可能持续累积差异。
  https://github.com/agentscope-ai/QwenPaw/pull/8479
- **#8303（2026-10-18，Under Review，size/M）** 审批提示投递修复 — 超过一个月未合并，影响多渠道消息正确性。
  https://github.com/agentscope-ai/QwenPaw/pull/8303
- **#8588（2026-11-05，Under Review，size/XXL）** OpenViking 记忆插件后续清理与兼容性、关闭修复，为 #7613 的跟进。
  https://github.com/agentscope-ai/QwenPaw/pull/8588
- **#8837（标记 `invalid`，Under Review，size/M）** 移除已废弃的 Mission CLI 命令 — 标签为 invalid 仍处审查，建议尽快结案。
  https://github.com/agentscope-ai/QwenPaw/pull/8837

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-11-21

## 1. 今日速览

ZeroClaw 今日处于**高活跃、零发布**状态：过去 24 小时 50 条 PR 更新中仅 1 条合并/关闭，49 条待合并，PR 队列堆积明显，其中多条为 XL 规模的堆叠（stacked）重构。Issues 侧 12 条更新（10 活跃、2 关闭），焦点集中在成本管控（cost enforcement）、委派子代理、网关会话状态与插件沙箱安全。今日关闭的 2 个 Issue 分别为状态栏内存显示错误（#9896）与插件 store 内存上限绕过（#12145），后者属安全类修复。整体健康度评估：**代码供给充足但合入吞吐不足，需关注待合并 PR 的审查压力**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **PR #12269 已关闭** `feat(web): add paired-device voice settings and chat controls` — 为 Web 端增加配对设备语音设置与聊天控制，含 Markdown 朗读回归测试。该 PR 关闭为依赖它的 #12459（OIDC 会话浏览器语音）无条件释放。链接：zeroclaw-labs/zeroclaw PR #12269
- **Issue #9896 已关闭** — 修复启动/状态横幅在有效后端为 sqlite 时误报 `Memory: none` 的显示问题。链接：zeroclaw-labs/zeroclaw Issue #9896
- **Issue #12145 已关闭** — 插件 store 仅限制单实例线性内存与实例数，但沿用 wasmtime 默认每 store 10,000 个 memory/table 上限，导致插件可提交数千倍于预算的内存；安全类 S2 问题关闭。链接：zeroclaw-labs/zeroclaw Issue #12145

整体而言，项目在安全收口与 Web 语音能力上向前推进，但今日合入量为 1，**推进幅度有限**。

## 4. 社区热点

- **Issue #12422** `RFC: Scoped use of operator-managed service credentials`（6 条评论，今日最高）— 诉求为在不向代理暴露凭据原文的前提下授权其针对服务执行任务，属安全模型实质性变更。链接：zeroclaw-labs/zeroclaw Issue #12422
- **PR #12450** `feat(providers): adopt the canonical V5 registry and runtime model bindings` — 涉及 V4→V5 配置提升与全 provider/渠道矩阵，影响面最大的待合并 PR。链接：zeroclaw-labs/zeroclaw PR #12450
- **PR #12438** `feat(ssh): add a native Rust task broker` — 基于运维现有 SSH agent 与主机配置实现原生 OpenSSH 传输。链接：zeroclaw-labs/zeroclaw PR #12438

背后主线清晰：社区在推动**凭据最小暴露**与**provider 注册表现代化**两条安全/架构路线。

## 5. Bug 与稳定性

按严重程度排列：

- **S2 · Issue #12627** `spawn_subagent` 在受限委派内启动的子代理不受 delegate 的每跳成本上限约束，可能绕过成本控制。暂无 fix PR。链接：zeroclaw-labs/zeroclaw Issue #12627
- **中 · Issue #12619** 网关 session 状态写入失败被忽略，`running` 状态残留至重启，且 Stop 无法清除。暂无 fix PR。链接：zeroclaw-labs/zeroclaw Issue #12619
- **已关闭 · Issue #12145**（S2 安全，插件内存预算绕过）与 **Issue #9896**（状态栏内存误报）今日关闭。

注：两处新 Bug 均与成本/会话状态正确性相关，建议优先排期 #12627。

## 6. 功能请求与路线图信号

- **成本管控系列**：#12628（warn 模式越限时向会话发送非阻断提示）、#12626（route_down 模式超限切换至 route_down_model）。已有对应 PR **#12500**（让预算门读取 `cost.enforcement.mode`，标记 `release:v0.9.1`）与配套文档 PR **#12629**（ADR-016 holding-crate 例外），**纳入 v0.9.1 信号强**。
- **浏览器工具文件上传**：#12614，缺少为 `<input type=file>` 设置文件的 action，阻塞需附件的表单场景。暂无 PR。
- **skills 免 shell 执行**：#12625，让 `shell`/`script` 工具不经 `sh -c` 运行程序，使参数可承载自由文本。暂无 PR。
- **清理类**：#12613（dead code/惰性特性/注释与文档清理 tracker）、#12621（退役 Raspberry Pi 部署脚本）、#12611（退役本地 LLM 响应缓存，含 4 个配置键迁移提示）。属技术债收缩，预计进入清理节奏而非版本特性。

## 7. 用户反馈摘要

- **成本语义混乱是核心痛点**：`[cost] daily_limit_usd`/`monthly_limit_usd` 默认值 10.0/100.0 在无模型定价时永不触发（PR #12512），`warn`/`route_down` 模式未被预算门读取（#12500、#12626、#12628），反映“配置写了却不生效”的一致抱怨。
- **诚实性诉求**：PR #10600 指出外发消息未真正投递却上报成功，用户强调代理必须能区分“已送达”与“被丢弃”。
- **使用场景**：聊天渠道语音（#12201 被动群聊上下文、#12269 语音朗读）、浏览器表单自动化（#12614）、Raspberry Pi 部署（#12621）。
- **满意度**：无正面评价数据可提炼；反应数为 0，社区以提交问题为主。

## 8. 待处理积压

- **PR #10600**（2026-09-03 创建，标记 `needs-author-action`，`release:v0.9.1`）—— 外发消息误报成功，积压约 2.5 个月。链接：zeroclaw-labs/zeroclaw PR #10600
- **PR #12015**（2026-10-24 创建，`risk:high`）—— 统一 ChaCha20Poly1305 消费者，涉密钥存储与 CA 加密。链接：zeroclaw-labs/zeroclaw PR #12015
- **PR #12459**（标记 `status:blocked`, `do-not-merge`）—— 依赖项 #12269 今日已关闭，建议解除阻塞评估。链接：zeroclaw-labs/zeroclaw PR #12459
- **PR #12450 / #12456 / #12457 / #12455** —— NiuBlibing 的 provider 注册表堆叠层，均需按声明顺序合入，建议集中安排审查窗口。链接：zeroclaw-labs/zeroclaw PR #12450

---
*数据来源：ZeroClaw GitHub Issues/PR 数据（截至 2026-11-21）。PR 评论数在源数据中未提供，热点部分以 Issue 评论数与 PR 影响面排序。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*