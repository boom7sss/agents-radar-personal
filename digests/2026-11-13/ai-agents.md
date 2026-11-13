# OpenClaw 生态日报 2026-11-13

> Issues: 298 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-13 17:47 UTC

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

# OpenClaw 项目日报 · 2026-11-13

## 1. 今日速览

过去 24 小时项目维持极高活跃度：Issues 更新 298 条（新开/活跃 202、关闭 96），PR 更新 500 条（待合并 302、已合并/关闭 198），无新版本发布。讨论重心集中在 **Gateway 稳定性**（Windows 启动、内存增长、SQLite worker OOM、更新流程卡死）以及 **更新/回滚可靠性**。今日有多个围绕"升级不丢失配置""按拷贝-切换方式升级 state""减少内存占用"的 PR 出现，显示维护者正集中治理更新与资源占用两条主线。整体看，项目吞吐量大、修复管线运转，但 P0/P1 稳定性问题存量仍偏多，属于"高活性、稳定性承压"状态。

## 2. 版本发布

过去 24 小时无新版本发布。（注：PR #197300 尚在起草 v2026.11.4 patch release notes，未合并。）

## 3. 项目进展

今日合并/关闭 198 条 PR，以下为可见的代表性条目：

- **PR #198288（已关闭）fix: hide non-chat models from chat selection** — 修复非聊天模型出现在聊天选择列表、已保存选择报"模型缺失"误导性错误，以及确定性 provider HTTP 400 触发三次 compaction 的问题。涉及 anthropic/openai/xai/qwen/opencode 等多个扩展。  
  https://github.com/openclaw/openclaw/pull/198288

- **Issue #126950（已关闭）Telegram 不透明 callback payload（`tgcb1:`）被静默丢弃** — 非插件调用方的回调被 Telegram 入口处理程序丢弃的问题已关闭（P1，message-loss）。  
  https://github.com/openclaw/openclaw/issues/126950

- **Issue #192009（已关闭）显式授权跨 provider 的 cron fallback 账户** — 允许为 cron 任务的主模型与 fallback 模型显式授权独立的 provider/account 绑定。  
  https://github.com/openclaw/openclaw/issues/192009

- **Issue #140244（已关闭）支持 `--prompt-file` 读取提示词文件** — 为 `openclaw infer model run` 增加从 UTF-8 文件读取一次性 prompt 的能力。  
  https://github.com/openclaw/openclaw/issues/140244

整体进展评估：合并量可观，但可见的关闭项多为中等优先级功能/体验类修复；P0/P1 稳定性主线（Gateway 内存、更新流程、会话持久化）仍以开放 Issue 为主，尚未见到对应的收敛。

## 4. 社区热点

- **Issue #170956（32 条评论，P0，👑 gold shrimp）** Windows 启动缓慢、插件关闭不干净、schtasks 权限错误导致重启/更新不可靠。  
  https://github.com/openclaw/openclaw/issues/170956  
  诉求：Windows 托管服务安装路径的可靠性是发布阻断项，用户"多次重试才能成功"的体验不可接受。

- **Issue #119720（26 条评论，P1，🦞 diamond lobster）** 同步的 agent 持久化与 transcript 维护在大规模下阻塞 Gateway 事件循环。  
  https://github.com/openclaw/openclaw/issues/119720  
  诉求：这是一个持续数月的架构级性能问题，部分修复已落地，但根因仍在。

- **Issue #67413（17 条评论，已关闭，🌊 off-meta tidepool）** 按 agent 配置 dreaming（记忆整理）。  
  https://github.com/openclaw/openclaw/issues/67413  
  诉求：当前 memory-core dreaming 对所有 agent workspace 同时运行，导致内存峰值超过 6GB 限制。

- **Issue #193094（11 条评论，P0）** 托管 `/update` 在 validating 阶段挂起 57 分钟（3414s vs 1800s 预算）后被 SIGKILL。  
  https://github.com/openclaw/openclaw/issues/193094

- **PR #197335（P1，🐚 platinum hermit）** subagent 在父会话 yield 后丢失工具访问或无法返回结果。  
  https://github.com/openclaw/openclaw/pull/197335  
  与 Issue #155119（subagent 最终答案丢失、settle 事件重复）形成呼应，是子代理交付链路的关键修复。

## 5. Bug 与稳定性

按严重程度排列（均标注 fix PR 状态）：

**P0 / 发布阻断**
- #170956 Windows 启动慢 + 插件关闭不干净 + schtasks 权限错误（32 评论）。fix PR：未见新 fix PR，需要维护者审查。  
  https://github.com/openclaw/openclaw/issues/170956
- #193094 托管更新在 validating 阶段挂起并被 SIGKILL。fix PR：未标记。  
  https://github.com/openclaw/openclaw/issues/193094
- #190563 回归：无法恢复暂停的 Codex 会话（provider review / native thread 不匹配），UX 发布阻断。fix PR：未标记，需安全审查。  
  https://github.com/openclaw/openclaw/issues/190563
- #141413 macOS 应用对使用 SecretRef 的本地 Gateway 省略 token（P0，安全相关）。  
  https://github.com/openclaw/openclaw/issues/141413

**P1 / 严重**
- #119720 同步持久化阻塞事件循环（26 评论，架构级）。  
  https://github.com/openclaw/openclaw/issues/119720
- #191847 回归：2026.10.10 下大会话反复杀死 512MB SQLite worker（ERR_WORKER_OUT_OF_MEMORY），每轮对话报 "admission is closed"。  
  https://github.com/openclaw/openclaw/issues/191847
- #191841 回归：Linux glibc < 2.31（RHEL 8/al8）上 "native child reaping is unavailable" 导致所有子进程/exec 失败。备注：fix-shape-clear。  
  https://github.com/openclaw/openclaw/issues/191841
- #182369 Gateway RSS 每小时增长约 0.1 GiB，内部 rss_threshold 监控不触发。  
  https://github.com/openclaw/openclaw/issues/182369
- #181459 3.5GB agent DB 使启动成为"赌博"（18s 打开、4–6min 启动，agent 显示 UNAVAILABLE），embedding 存 3 份。  
  https://github.com/openclaw/openclaw/issues/181459
- #155119 subagent 完成时最终答案丢失（truncated-by-retention）、settle 事件重复、deliveryStatus 卡在 pending。相关 fix PR #197335 开放中。  
  https://github.com/openclaw/openclaw/issues/155119

**P2 / 体验类**
- #197374 compaction 在长会话上静默降级：120s 空闲超时小于配置的 compaction 预算，质量守卫不给原因。  
  https://github.com/openclaw/openclaw/issues/197374
- #197083 安装后 Doctor WAL 发布校验失败，使 11.3 更新处于"部分完成"状态。  
  https://github.com/openclaw/openclaw/issues/197083
- #163139 Windows 上 plugins.reload 准备 host-package link 时 EPERM 并卡住 Gateway。  
  https://github.com/openclaw/openclaw/issues/163139
- #182467 项目父会话中 sessions_spawn 模型校验失败，与 models.list 报出的可用模型不一致。  
  https://github.com/openclaw/openclaw/issues/182467

## 6. 功能请求与路线图信号

结合已开放 PR 判断可能进入下一版本的候选：

- **升级可靠性治理（高概率）** — PR #198376 "升级不再拒绝上一版本接受的配置"（基于 2,720 例真实升级失败分类）、PR #198389 "在 Gateway 启动时以拷贝-切换方式升级 state"、PR #198148 "避免 Gateway 停止期间重复复制数据库"、PR #197922 "新版本运行自己的更新前演练"。这组 PR 直接回应 #193094、#197083、#183479 等更新类 Issue。  
  https://github.com/openclaw/openclaw/pull/198376 · https://github.com/openclaw/openclaw/pull/198389 · https://github.com/openclaw/openclaw/pull/198148
- **内存/资源治理（中高概率）** — PR #198194 "降低受限主机上的常驻内存"，与 #182369、#181459 相关。  
  https://github.com/openclaw/openclaw/pull/198194
- **按 agent 的 compaction 模型** — PR #198346 允许单 agent 使用自己的 compaction 模型，回应 #196207、#52732。  
  https://github.com/openclaw/openclaw/pull/198346
- **MCP 工具进入使用频次排序索引** — PR #198348，对 #197128 的补充。  
  https://github.com/openclaw/openclaw/pull/198348
- **远程访问开启流程** — PR #198349，允许管理员通过已验证的本人登录开启远程访问。安全敏感。  
  https://github.com/openclaw/openclaw/pull/198349
- **需求池（尚未见对应 PR）** — #150238 Skill Workshop 在超大会话上的 context budget / skip 策略（linked-pr-open）；#56349 不可绕过的出站消息预发送策略强制（P2，需安全审查，长期开放）；#137110 Telegram `sendDice` 支持；#124306 exec 审批卡提示目标路径为挂载点。  
  https://github.com/openclaw/openclaw/issues/56349 · https://github.com/openclaw/openclaw/issues/150238

## 7. 用户反馈摘要

- **Windows 用户**：托管服务安装链路是最大痛点，重启与更新经常失败，"多次尝试后才成功"（Issue #170956 原文表述），插件关闭过程不干净。
- **大规模/长期使用者**：DB 体积与内存是明显的天花板——3.5GB agent DB 使启动时间从 18s 拉长到 4–6min，embedding 被存 3 份；Gateway RSS 缓慢泄漏而内置监控不告警（#181459、#182369）。
- **会话连续性诉求**：用户希望恢复暂停的 Codex 聊天、长会话 compaction 有可解释的结果、UI 不把内部系统上下文注入块显示为聊天消息（#165041）。
- **多 agent / 多 provider 用户**：希望能为单个 agent 指定 compaction 模型、为 cron 任务显式授权跨 provider fallback 账户、让 dreaming 按 agent 配置以避免内存峰值（#119720 相关、#192009、#67413）。
- **非英语用户**：Dream Diary 输出硬编码为英文，中文 workspace 出现混杂语言（#79223，已关闭）。
- **满意点**：更新修复流程正在被系统性改进（#198376 基于 2,720 例真实失败做分类），部分中期问题已关闭，说明维护者响应在有计划地推进。

## 8. 待处理积压

以下为长期开放且重要的条目，建议维护者重点关注：

- #119720（创建于 2026-08-05，26 评论，P1，架构级事件循环阻塞） — 核心性能债。  
  https://github.com/openclaw/openclaw/issues/119720
- #141413（创建于 2026-09-07，P0 安全，macOS token 缺失） — 升级为 P0 后仍未见 fix PR。  
  https://github.com/openclaw/openclaw/issues/141413
- #56349（创建于 2026-03-28，P2，出站策略强制，标记 needs-security-review / needs-live-repro） — 为全仓库最老仍开放的功能请求之一。  
  https://github.com/openclaw/openclaw/issues/56349
- #124306（创建于 2026-08-15，P2，exec 审批不提示挂载点，data-loss 影响，diamond lobster） — 安全提示缺口。  
  https://github.com/openclaw/openclaw/issues/124306
- #183479（创建于 2026-10-25，extended-stable 2026.9.34 更新修复仍受阻） — 稳定通道用户被卡住。  
  https://github.com/openclaw/openclaw/issues/183479
- **PR #151242**（创建于 2026-09-17，XL，streamed reply 分块时链接被破坏，Fixes #151147） — 已标记 ready for maintainer look，但已积压近两个月。  
  https://github.com/openclaw/openclaw/pull/151242
- **PR #197335**（P1，subagent yield 后交付修复） — 与 #155119 直接关联，建议优先推进。  
  https://github.com/openclaw/openclaw/pull/197335

---

**健康度小结**：输入吞吐（298 Issues / 500 PRs）与合并量（198）健康，更新与内存治理两条主线有新 PR 支撑；但 P0 存量（Windows 可靠性、更新挂起、macOS 安全 token、Codex 会话恢复）均未见对应 fix PR，302 条待合并 PR 也提示审阅队列压力较大。建议本周优先收敛 "clawsweeper:no-new-fix-pr" 标记的 P0/P1 项与长期积压的 P1 fix PR。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

> 数据窗口：2026-11-13（24 小时）｜样本：13 个项目（其中 3 个当日无活动）

---

## 1. 生态全景

今日生态呈现明显的「头部高吞吐、长尾分化」格局：OpenClaw 以 298 条 Issue 更新、500 条 PR 更新的体量占据绝对头部，但 P0/P1 稳定性问题存量偏多，处于「高活性、稳定性承压」状态；Hermes Agent、CoPaw、ZeroClaw 构成第二梯队，焦点正从「agent 能做什么」转向「凭据隔离、出口管控、会话一致性」。与此同时，PicoClaw 出现社区成员宣布建立活跃 fork 并指仓库「无人维护」的治理警示，TinyClaw、Moltis、ZeptoClaw 当日零活动，长尾项目维护可持续性成为显性风险。一个共性主线是「升级/迁移可靠性」——OpenClaw 的更新挂起、CoPaw 的 2.3.0 插件不迁移、NanoClaw 的安装凭据失效，指向同一类用户信任问题。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃·关闭） | PR（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 298（202·96） | 500（302·198） | 无 | 高活性、稳定性承压；P0 存量未见 fix PR，审阅队列压力大 |
| **Hermes Agent** | 50（30·20） | 50（40·10） | 1 个 canary | 偏正面；安全债务主动清理，网关/桌面端问题密集 |
| **CoPaw** | 19（15·4） | 33（28·5） | 无 | 开发充沛、合并吞吐偏低；2.3.0 回归清理最紧要 |
| **ZeroClaw** | 5 | 34（31·3） | 无 | 输入活跃、输出偏低；31 条待合并含多条 XL/risk:high |
| **NanoBot** | 4（3·1） | 22（8·14） | 无 | 中等偏高；清理节奏良好，多处 conflict 长期存在 |
| **NanoClaw** | 1 | 13（12·1） | 无 | 尚可；多人提交集中评审，合并节奏偏低 |
| **LobsterAI** | 2（均关闭） | 26（4·22） | 无 | 高（集中式）；Cowork 会话可靠性修复簇密集落地，外部参与低 |
| **PicoClaw** | 13 条合计更新 | 4 条（全 dependabot，全 stale） | 无 | 低，存在维护缺位风险；真实缺陷修复被 stale 关闭 |
| **IronClaw** | 1（0·1） | 0 | 无 | 低位平稳；零 PR 吞吐 |
| **NullClaw** | 0 | 2（2·0） | 无 | 低噪声迭代；主线未推进 |
| **TinyClaw** | — | — | — | 当日无活动 |
| **Moltis** | — | — | — | 当日无活动 |
| **ZeptoClaw** | — | — | — | 当日无活动 |

---

## 3. OpenClaw 在生态中的定位

**规模优势显著**：OpenClaw 单日 PR 更新量（500）约为第二梯队（Hermes 50、CoPaw 33、ZeroClaw 34）的 10–15 倍，Issue 更新量（298）亦为 Hermes（50）的近 6 倍，社区规模断层领先。

**技术路线差异**：OpenClaw 采用带 Gateway 常驻进程 + 多扩展（anthropic/openai/xai/qwen/opencode）的架构，复杂度最高，也因此暴露了其他项目少见的问题面——Gateway RSS 每小时增长约 0.1 GiB（#182369）、3.5GB agent DB 使启动从 18s 拉长到 4–6min（#181459）、SQLite worker 512MB OOM（#191847）。这使其稳定性债务集中在「资源与生命周期管理」，而非单一功能缺陷。

**定位对照**：与 Hermes 类似，OpenClaw 是「重平台型」项目（多入口、多 provider、Gateway 统一接入）；相比之下 NanoBot、NullClaw、IronClaw 更接近轻量工具型。OpenClaw 的核心挑战是规模带来的**审阅队列压力**（302 条待合并）与 **P0 收敛滞后**（Windows 可靠性 #170956、更新挂起 #193094、macOS token 安全 #141413 均未见对应 fix PR）。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级 / 迁移可靠性** | OpenClaw、CoPaw、NanoClaw、PicoClaw | OpenClaw 更新在 validating 阶段挂起被 SIGKILL（#193094）、升级拒绝旧版配置（PR #198376 基于 2,720 例失败分类）；CoPaw 2.3.0 不迁移内置插件致 Matrix 停留在旧源码（#8684）；NanoClaw Node 升级后 docker credential helper 失效（#4341） |
| **凭据 / 密钥隔离** | ZeroClaw、Hermes Agent、OpenClaw | ZeroClaw MITM 出口代理使 agent 看不到密钥（#12001）、写只读凭据管理（#12373）、作用域 HTTP 凭据（PR #12408）；Hermes 修复 `.env` 可重定向 `HERMES_HOME`/`HERMES_MANAGED_DIR`（#144685/#135200）；OpenClaw macOS 应用对 SecretRef 本地 Gateway 省略 token（#141413） |
| **会话 / 状态一致性** | OpenClaw、CoPaw、NanoClaw、LobsterAI | CoPaw 渠道内 `/model` 无法覆盖会话级钉住模型、UI 却报成功（#8725）；NanoClaw 审批卡片在宿主确认前即置为已决（#4168/#4171）；LobsterAI 单条 metadata 损坏致整 Session 不可加载（#639）；OpenClaw subagent 最终答案丢失（#155119） |
| **记忆 / 上下文完整利用** | NanoBot、OpenClaw、Hermes | NanoBot Dream 只读历史前 1000 字符（#6649）；OpenClaw DB embedding 存 3 份（#181459）、compaction 静默降级（#197374）；Hermes `session_search` 静默隐藏 FTS 匹配（#103184） |
| **模型列表与上游状态脱节** | NanoBot、PicoClaw、ZeroClaw、CoPaw | NanoBot 已退役图像模型仍可选（#6660）；PicoClaw 校验强制转小写破坏大小写敏感 ID（#3454）；ZeroClaw OpenCode Go 拉到 Zen 目录（#12412）；CoPaw Hub 网关 `provider_headers()` 调不存在方法（#8718） |
| **自动化任务的可解释失败** | CoPaw、Hermes、OpenClaw | CoPaw cron 用量未写 `turns.jsonl`（#8705）、定时任务回复被静默打断（#2306）；Hermes 看门狗误杀健康进程 exit 75（#144883）；OpenClaw cron 跨 provider fallback 授权（#192009） |

---

## 5. 差异化定位分析

| 维度 | 重平台型（OpenClaw、Hermes） | 渠道/集成型（CoPaw、NanoClaw、ZeroClaw、NanoBot） | 轻量工具型（NullClaw、IronClaw、PicoClaw） |
|---|---|---|---|
| **功能侧重** | Gateway 统一接入、多入口（CLI/TUI/Desktop/API/cron）、记忆整理 | 多渠道（微信、Matrix、飞书、钉钉、Signal、Proton Mail）、插件目录 | 单一工具面（web_search、Telegram 渲染）、CI 治理 |
| **目标用户** | 大规模/长期使用者、多 provider 部署 | 企业 IM 与多账号/多 profile 用户 | 个人轻量部署、嵌入式/边缘场景 |
| **技术架构特征** | 常驻进程 + 扩展体系，资源管理复杂度高 | 渠道插件化 + 会话绑定语义重构（如 CoPaw PR #8532 append-only 会话存储） | 单语言精简实现（NullClaw 的 Zig 实现、PicoClaw 的 Go 实现） |
| **典型痛点** | 内存/DB 天花板、更新流程、审阅压力 | 插件迁移、渠道启动竞态、审批一致性 | 维护缺位、依赖 stale 化 |

值得注意的差异：Hermes 的 `session-receipts`（会话飞行记录器渲染为自包含 HTML）与 NanoClaw 的「README 183 条陈述中 49 条过时」形成对照——前者在构建**可观测性**，后者暴露出**文档与实现脱节**的普遍风险。

---

## 6. 社区热度与成熟度

**第一层 · 快速迭代（高吞吐 + 稳定性承压）**
- **OpenClaw**：298 Issues / 500 PRs，修复管线运转但 P0 未收敛，属「边跑边修」。
- **Hermes Agent**：安全修复密集（3 个安全 Issue + 2 个安全 PR 关闭/合并），网关遗留问题 #143547 仍有 66 条评论，处于架构迁移收敛期。
- **CoPaw**：3 条 `size/XXXL` PR 卡评审，2.3.0 回归清理进行中。

**第二层 · 质量巩固（中低吞吐，修复打磨为主）**
- **NanoBot**：14 条 PR 合并/关闭，以 WebUI 打磨与工具 Schema 校验修复为主。
- **NanoClaw**：审批卡片修复系列横跨多模块，重安全一致性。
- **LobsterAI**：22 条合并/关闭，Cowork 会话可靠性修复簇密集落地，但贡献高度集中于单一核心贡献者。
- **ZeroClaw**：31 条待合并压顶，XL/risk:high PR 卡在 `needs-author-action`。

**第三层 · 低活跃 / 治理风险**
- **PicoClaw**：真实缺陷修复（Discord 死锁 PR #3452、Anthropic 400 PR #3447）被 stale 关闭，社区宣布 fork 自救，属治理预警。
- **IronClaw / NullClaw**：个位数更新，平稳但吞吐不足。
- **TinyClaw / Moltis / ZeptoClaw**：当日零活动。

---

## 7. 值得关注的趋势信号

1. **「升级不是功能，是信任」** — OpenClaw 用 2,720 例真实升级失败做分类（PR #198376）、CoPaw 因内置插件不迁移致发版对存量用户无效（#8684），说明升级路径正成为独立工程领域。**对开发者的参考**：迁移逻辑需与功能同等投入，应内置「更新前演练」（OpenClaw PR #197922）与配置兼容层。

2. **安全模型从「能力边界」转向「信息边界」** — ZeroClaw 的 MITM 出口代理（让 agent 看不到密钥）与写只读凭据管理、Hermes 的 `.env` 不可覆盖托管根，代表行业开始回答「agent 不该看到什么」，而不仅是「agent 不该做什么」。**参考**：密钥隔离应下沉到网络/存储层，而非提示词层。

3. **「UI 说谎」是流失主因** — CoPaw `/model` 返回成功但未生效（#8725）、PicoClaw hot-reload 已生效却提示需重启（#3453）、LobsterAI 人格自改被静默回滚（#3035），共同指向状态反馈必须与实际行为一致。**参考**：状态同步应作为一等公民设计，避免「乐观 UI」与后端脱节。

4. **自动化（cron/无人值守）场景的静默失败容忍度极低** — CoPaw #2306（12 条评论）、Hermes #144883（看门狗误杀）、OpenClaw #193094（更新挂起）均属「用户已把 agent 用于长任务，却被静默打断」。**参考**：应为长任务提供可预期的失败重试与可解释的中断原因。

5. **文档与实现的脱节正在被量化治理** — NanoClaw 明确统计「183 条陈述中 49 条过时」（PR #4327），这类可度量治理手段值得借鉴。

6. **维护可持续性成为显性风险** — PicoClaw 的 fork 公告与多个 stale 关闭的真实缺陷修复表明，**stale 机制若替代实质修复，会加速社区分流**。**参考**：对项目治理者而言，明确的「接受/搁置」结论优于静默过期。

7. **MCP 生态兼容性成为基础要求** — NanoBot 修复 `$ref`/`anyOf`/`oneOf` 校验（#6485）、Hermes 引入 159 条 MCP 目录条目（#152237）、OpenClaw 将 MCP 工具纳入使用频次排序（#198348），说明 MCP 已从「可选集成」变为「必备底座」。

---

*说明：本报告严格基于所提供各项目日报生成，未引入外部数据；评论数等字段在部分项目源数据中缺失，相关排名仅在同项目内做相对比较。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-13

## 1. 今日速览

- 今日无新版本发布，项目以维护与 WebUI 打磨为主：PR 更新 22 条（合并/关闭 14 条、待合并 8 条），Issue 更新 4 条（新开/活跃 3 条、关闭 1 条）。
- 当日合并/关闭的 PR 高度集中于 WebUI 交互细节修复（#6657、#6658、#6654、#6656、#6655、#6653）以及工具 Schema 校验修复（#6486），由少数核心贡献者推动。
- 新报告问题集中在三类：记忆压缩后的提示截断（#6649）、OpenAI 已退役图像模型仍在列表内（#6660）、QQ 渠道大附件上传随机失败（#6652），均为新开且暂无对应 fix PR。
- 待合并 PR 中存在多项标注 `conflict` 的长期提交（最早可追溯至 9 月），合并通道的冲突处理是当前主要瓶颈。
- 整体活跃度评估：**中等偏高**，产出以修复与打磨为主，无新增重大功能落地。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭 PR（14 条）中，以下为可识别的实质性推进：

| PR | 内容 | 状态 |
|---|---|---|
| [#6486](https://github.com/HKUDS/nanobot/pull/6486) | 修复工具参数校验：解析本地 `$ref`、`anyOf`/`oneOf` 分支，并修复 tuple 形式 `items` 崩溃，直接关闭 Issue [#6485](https://github.com/HKUDS/nanobot/issues/6485) | 已关闭 |
| [#6304](https://github.com/HKUDS/nanobot/pull/6304) | 跨渠道统一呈现执行活动，避免把内部会话句柄当作已完成操作、虚增活动计数 | 已关闭 |
| [#6657](https://github.com/HKUDS/nanobot/pull/6657) | 远程健康检查按可见需求收敛，避免切换至 Local 或隐藏标签页后仍每 5 秒轮询 | 已关闭 |
| [#6653](https://github.com/HKUDS/nanobot/pull/6653) | 稳定 WebUI 会话切换时的输入框布局，新增 Mac 风格目标提示条 | 已关闭 |
| [#6659](https://github.com/HKUDS/nanobot/pull/6659) | 历史加载在内容就绪前保持加载态，避免九宫格指示器过早收回 | 开放中 |
| [#6654](https://github.com/HKUDS/nanobot/pull/6654) / [#6655](https://github.com/HKUDS/nanobot/pull/6655) / [#6656](https://github.com/HKUDS/nanobot/pull/6656) / [#6658](https://github.com/HKUDS/nanobot/pull/6658) | 执行活动文案区分、引用消息圆角对齐、欢迎标识悬停描边减细、easing 工具类歧义修正 | 已关闭 |

**推进幅度判断**：工具 Schema 校验修复解决了 MCP 服务器常见 Schema 形态的静默跳过问题，属实质性正确性修复；其余多为 WebUI 体验与性能层面的渐进式改进。整体向前迈进一小步，但核心能力边界未变。

## 4. 社区热点

今日数据显示各项 Issues/PR 评论数普遍为 0 或 1（PR 评论数在源数据中为 undefined），**不存在明显的讨论热点**。相对值得关注的是：

- [#6649](https://github.com/HKUDS/nanobot/issues/6649)（1 条评论）：Dream 仅读取 `history.jsonl` 中每条累积检查点的前 1000 字符。该问题直接指向 #5610 引入的压缩机制与提示构建逻辑不匹配，属于"功能已改、消费端未跟上"的一致性缺口，背后诉求是记忆压缩后的历史应被完整利用。
- [#6642](https://github.com/HKUDS/nanobot/pull/6642)：为已批准 Release 引入 PyPI Trusted Publishing，诉求是摆脱对维护者凭据与手动产物选择的人工依赖，同时保留手动工作流用于测试与恢复。

## 5. Bug 与稳定性

按严重程度排列：

**高 — 记忆数据被静默截断**
- [#6649](https://github.com/HKUDS/nanobot/issues/6649) [OPEN]：自 #5610 起每次压缩都会向 `memory/history.jsonl` 追加完整累积检查点，但 `build_dream_prompt` 仍只保留每条前 1000 字符，后续内容不可达。属数据可用性缺陷，影响 Dream 对长期记忆的利用。**暂无 fix PR。**

**中 — 上游模型退役后仍可被选择**
- [#6660](https://github.com/HKUDS/nanobot/issues/6660) [OPEN]：OpenAI 已于 2026-10-23 退役 `gpt-image-1`，于 2026-05-12 退役 `dall-e-3`/`dall-e-2`，但 nanobot 的 OpenAI 图像模型列表仍提供这三项，用户选择后请求必然失败。属配置与上游状态脱节，影响面明确但不涉及数据损坏。**暂无 fix PR。**

**中 — QQ 渠道大附件上传不稳定**
- [#6652](https://github.com/HKUDS/nanobot/issues/6652) [OPEN]：发送约 2.4MB PDF 时约有一半概率报 `media upload failed: empty response`，根因为 botpy 默认 5 秒 HTTP 超时且无重试。属渠道稳定性问题，对大文件场景用户影响直接。**暂无 fix PR。**

**已修复 — 工具参数校验缺陷**
- [#6485](https://github.com/HKUDS/nanobot/issues/6485) [CLOSED]：`Tool.validate_params` / `Schema.validate_json_schema_value` 不解析本地 `$ref`、不评估 `anyOf`/`oneOf`，并在 tuple 形式 `items` 上崩溃；已由 [#6486](https://github.com/HKUDS/nanobot/pull/6486) 关闭。

**修复在途 — Grep 编码识别**
- [#6447](https://github.com/HKUDS/nanobot/pull/6447) [OPEN, conflict]：Grep 因 NUL 字节将 UTF-16/UTF-32 误判为二进制，且 UTF-8 BOM 残留导致首行锚定搜索（如 `^Hello`）失配。

## 6. 功能请求与路线图信号

今日 Issues 中以缺陷报告为主，明确的功能性诉求来自 PR：

| 方向 | 载体 | 纳入下一版本的可能性 |
|---|---|---|
| 新增 ShengSuanYun（胜算云）OpenAI 兼容网关，支持从 provider 发现模型并保留上游模型 ID 命名空间 | [#6647](https://github.com/HKUDS/nanobot/pull/6647) OPEN | 较高：改动边界清晰，属 provider 列表扩展，无冲突标记 |
| Release → PyPI Trusted Publishing 发布链路 | [#6642](https://github.com/HKUDS/nanobot/pull/6642) OPEN | 中高：提升发布可重复性，保留手动回退路径 |
| `web_fetch` 增加字符偏移与 `nextOffset`/`totalLength`，支持长文本续读 | [#6317](https://github.com/HKUDS/nanobot/pull/6317) OPEN, conflict | 中：能力增量明确，但受冲突标记拖累 |
| 文件读写/编辑/补丁/搜索统一走 scoped file operations 并统一授权策略 | [#6616](https://github.com/HKUDS/nanobot/pull/6616) OPEN, conflict | 中：属架构级重构，需维护者重点评审 |
| 向 Parallel 标识 nanobot 请求（稳定 User-Agent） | [#5797](https://github.com/HKUDS/nanobot/pull/5797) OPEN, conflict | 待定：已滞留近两个月且带冲突标记 |

## 7. 用户反馈摘要

- **记忆机制的真实使用痛点**：用户依赖累积检查点承载长期上下文，但消费端截断使后半段内容形同不存在，反映"写入完整、读取不全"的体验落差（#6649）。
- **模型列表与实际可用性不一致**：用户会直接按界面提供的选项发起请求，退役模型仍可选中导致必然失败，属可预期但可避免的挫败（#6660）。
- **渠道层面对大文件不友好**：QQ 渠道用户实际发送 2.4MB 级文档，5 秒超时且无重试使失败呈随机性，用户难以自行定位原因（#6652）。
- **MCP 生态兼容性诉求**：工具校验跳过 MCP 服务器常用的 `$ref`/`anyOf`/`oneOf` 形态，意味着接入外部 MCP 工具时参数约束可能被静默忽略（#6485，已修复）。
- 今日 Issues 均无 👍 反馈，评论稀少，用户情绪以**问题陈述为主，未见明显不满表达**。

## 8. 待处理积压

以下为长期开放且带 `conflict` 标记、需要维护者优先分流的 PR：

| PR | 创建日期 | 滞留时长 | 说明 |
|---|---|---|---|
| [#5797](https://github.com/HKUDS/nanobot/pull/5797) | 2026-09-17 | 约 2 个月 | 为 Parallel 增加稳定 User-Agent 以支持用量统计，作者已在 #5047 合并后跟进，属外部合作方可感知的诉求 |
| [#6304](https://github.com/HKUDS/nanobot/pull/6304) | 2026-10-19 | 约 25 天 | 今日已关闭，但此前长期挂起，涉及执行活动跨渠道呈现的正确性 |
| [#6317](https://github.com/HKUDS/nanobot/pull/6317) | 2026-10-19 | 约 25 天 | `web_fetch` 续读偏移能力，功能完整但受冲突阻塞 |
| [#6447](https://github.com/HKUDS/nanobot/pull/6447) | 2026-10-24 | 约 20 天 | Grep 编码识别修复，含测试，冲突状态阻碍合入 |
| [#6616](https://github.com/HKUDS/nanobot/pull/6616) | 2026-11-09 | 4 天 | 文件操作集中化重构，范围较大，建议优先安排评审以避免进一步分叉 |

**健康度提示**：今日合并/关闭量（14）显著高于新开 PR 量，说明清理节奏良好；但多处 `conflict` 标记长期存在，表明主干演进速度快于贡献者跟进速度，建议维护者对上述 PR 给出明确的"rebase 后合入"或"关闭并重提"结论，降低社区等待成本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-11-13

## 1. 今日速览

今日项目活跃度处于**高位**。过去 24 小时 Issues 更新 50 条（新开/活跃 30、关闭 20），PR 更新 50 条（待合并 40、合并/关闭 10），并发布 1 个 canary 版本。安全类修复是今日主线：3 个安全相关 Issue 与 2 个安全 PR 得到关闭/合并，涉及仪表盘凭据文件写入防护、A2A 回调 SSRF 绕过、`HERMES_HOME`/`HERMES_MANAGED_DIR` 被 `.env` 重定向等。同时，#143547（统一网关 #106742 合并后遗留问题）评论数升至 66，仍是当前最大的系统性风险集中点。整体看，项目健康度偏正面：安全债务在被主动清理，但网关与桌面端稳定性问题密集。

## 2. 版本发布

**v0.23.1+canary.20261113T064447Z**（2026-11-13，canary 预发布）
- 由数据可见内容：版本号延续 v0.23.1 canary 线，发布日期 2026-11-13，提供 Hermes Desktop 下载（macOS Apple Silicon DMG 等，下载表其余内容在数据中不完整）。
- 破坏性变更与迁移注意事项：**所提供材料中未包含**更新日志正文、变更清单或迁移说明，故不做推断。

## 3. 项目进展

今日合并/关闭的 PR 中有 3 条安全或稳定性相关，值得关注：

- **[PR #154136] fix(dashboard): refuse managed-file writes to credential files**（已关闭，安全）
  仪表盘 managed-files API 此前仅在列表/读取/下载路由隐藏 `.env`、`config.yaml`、`auth.json`、`mcp-tokens/**`、`pairing/**`，写入路由只检查路径包含与锁定根，任意已认证客户端可写入凭据文件。该 PR 补上写入侧拦截，属于实质性安全边界收紧。
- **[PR #155045] fix(relay): Discord 转发交互仅接受已准入发送者/请求者/管理员应答**（已关闭，安全）
  修复 relay 场景下审批类提示可被非授权用户应答的问题。
- **[PR #147295] fix(tui): 在紧凑历史投影中保留生成图像**（已关闭）
  修复 `_history_to_messages` 对 `image_generate` 丢弃结果、桌面卡片收到 `{}` 的问题。
- **[PR #152953] catalog: add session-receipts**（已关闭）
  新增插件目录条目：会话飞行记录器 + 每周流程摘要，渲染为自包含 HTML。

另有两条 CI 稳定性修复（#155137、#146926）改善了 Docs Search Monitor 误报与进程回收竞态。整体推进幅度为**中等**：以安全和测试基建为主，未见大型功能落地。

## 4. 社区热点

- **[Issue #143547] 统一网关 #106742 合并后在 main 上的遗留问题**（OPEN，评论 66，👍1）
  https://github.com/NousResearch/hermes-agent/issues/143547
  10 月 14 日统一网关将所有本地会话迁入单一网关进程后，CLI、TUI、Desktop、API server、编辑器、消息机器人、cron、看板等入口均受影响，问题仍在持续收敛。这是当前**最集中的架构性诉求**：用户需要的是迁移后的行为一致性与可预期的故障边界。
- **[Issue #55287] Desktop 增加可配置聊天宽度（Appearance 设置）**（OPEN，评论 11，👍4，needs-decision）
  https://github.com/NousResearch/hermes-agent/issues/55287
  今日点赞最高的功能请求，属低风险 UI 配置项，但长期处于 needs-decision。
- **[Issue #154701] Linux/AMD：流式输出到最小化/隐藏窗口导致 GPU 100%（0↔100% 锯齿），1c75623ca1 后回归**（已关闭，评论 7）
  https://github.com/NousResearch/hermes-agent/issues/154701
  典型的性能回归，由用户精确 bisect 定位，社区协作质量高。
- **[Issue #92524] Portal/托管代理：暴露代理云端浏览器的实时 noVNC 视图（人工登录接管）**（OPEN，评论 4，👍1）
  https://github.com/NousResearch/hermes-agent/issues/92524
  反映自托管用户在反爬/登录墙场景中对「人机交接」的强需求，属产品方向级诉求。

## 5. Bug 与稳定性

按严重程度排列：

**P1**
- **[Issue #144883] 网关 profile 作用域构建在事件循环上读 `.env`/`config.yaml`，读停滞触发存活看门狗（exit 75）**（OPEN，评论 5，无 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/144883
  健康进程被误杀，属可用性级问题。

**P2**
- **[Issue #144413] 工具结果含孤立代理项时网关结算抛 `UnicodeEncodeError`，会话卡住**（OPEN，评论 6，无 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/144413
- **[Issue #148450] 仪表盘持有的活跃会话租约从不释放，Desktop 恢复/分支报 `runtime_coordination_required`**（OPEN，评论 4，无 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/148450
- **[Issue #154428] 429 后辅助回退跳过同主机第二个账号（same_deployment 忽略不同凭据）**（OPEN，评论 4，无 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/154428
- **[Issue #154577] 共享网关服务全部 profile 时，cron 投递 `bot-chat:<profile>` 报 `profile_mismatch`**（OPEN，评论 4，无 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/154577
- **[Issue #146280] Anthropic 用量：utilization ≤1% 被报为 100%（百分比字段被当作分数缩放）**（OPEN，评论 3，无 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/146280
- **[Issue #103184] `session_search` 静默隐藏 FTS 匹配并返回错误的会话元数据**（OPEN，评论 3，无 fix PR）
  https://github.com/NousResearch/hermes-agent/issues/103184
- **[Issue #154848] Android Webapp 语音对话在助手回复期间忽略用户语音**（OPEN，今日新建，评论 2）
  https://github.com/NousResearch/hermes-agent/issues/154848
- **[Issue #122463] SentinelOne EDR 将 `exec(base64.b64decode(...))` 标记为 Metasploit**（OPEN，评论 5，👍2）
  https://github.com/NousResearch/hermes-agent/issues/122463
  误报导致安装/更新流程受阻，企业环境用户受影响。

**P3**
- **[Issue #148767] Windows 下 `complete.path` 遇候选名 `nul` 抛 `ValueError`，整个 WS 请求被丢弃**（OPEN，评论 4）
  https://github.com/NousResearch/hermes-agent/issues/148767
- **[Issue #129104] Windows：网关与 cron 对 uv venv redirector 在 `CREATE_NO_WINDOW` 下是否闪窗口结论相反**（OPEN，评论 4，needs-repro）
  https://github.com/NousResearch/hermes-agent/issues/129104

**今日已关闭（回归/安全类）**
- **[Issue #154701]** Linux/AMD 流式 GPU 锯齿回归（见社区热点）。
- **[Issue #146032] 「工厂重置」清空真实用户主目录中的 SSH 私钥与技能文件**（安全，已关闭）
  https://github.com/NousResearch/hermes-agent/issues/146032
  数据破坏级事件报告，值得关注其修复范围说明。
- **[Issue #126755] A2A 推送回调 SSRF 防护可被 DNS 名、整数形式 IPv4、HTTP 重定向绕过**（已关闭）
  https://github.com/NousResearch/hermes-agent/issues/126755
- **[Issue #119170] Docker 共享模式为每个会话绑定 `$HOME` 到 `/workspace`，宿主 SSH 密钥在沙箱内可读**（已关闭）
  https://github.com/NousResearch/hermes-agent/issues/119170
- **[Issue #135200] 用户 `.env` 可设置 `HERMES_MANAGED_DIR` 重定向托管作用域**、**[Issue #144685] `.env` 可设置 `HERMES_HOME` 静默迁移身份与策略**（均已关闭）
  https://github.com/NousResearch/hermes-agent/issues/135200 ・ https://github.com/NousResearch/hermes-agent/issues/144685

**有 fix PR 的在途修复（PR 未合并）**
- **[PR #155138] fix(gateway): 轮次收尾期间收到的消息入队，而非 steer 给已结束的 agent**（OPEN，关闭 #66704 的消息网关部分）
  https://github.com/NousResearch/hermes-agent/pull/155138
- **[PR #155118] fix(cli): 对 `!cmd` 执行做限界、脱敏与进程组杀灭**（OPEN，P3 安全）
  https://github.com/NousResearch/hermes-agent/pull/155118

## 6. 功能请求与路线图信号

- **Desktop 聊天宽度可配置（#55287）**：已有明确实现方案（`--composer-width`），评论 11、👍4，但标记 needs-decision。属低成本高接受度项，**较可能纳入下一版本**。
- **Portal/托管代理 noVNC 浏览器实时视图（#92524）**：解决自托管实例在登录墙下的人机交接。今日无对应实现 PR，属产品级需求，**短期内落地可能性低**。
- **插件目录生态扩张**：今日多条目录类 PR（#152237 新增 AgentStatus 托管 159 个公开 MCP 条目；#154831 新增 bae / `hermes-ebay-ops`；#155139 升级 loredocs 至 0.1.34 以修复 MCP server 无法启动；#155140 升级 genealogy recipes 至 v1.18.0；#155058 Sentinel Governance v0.6.1 为 Draft 待审）。方向明确是「目录 + 社区插件」，但需注意**目录准入与供应链审核**（#155058 明确要求独立评审后再 pin）。
- **会话可观测性**：`session-receipts`（#152953，已合并）将会话存储渲染为自包含 HTML 报告，回应了用户对会话审计/复盘的需求。

## 7. 用户反馈摘要

- **迁移阵痛是主要不满来源**：统一网关改变了本地会话的进程边界，用户在 CLI/TUI/Desktop/机器人/cron 多入口上遇到行为不一致（#143547）。
- **误杀与卡死类问题最伤体验**：看门狗将健康网关进程杀掉（#144883）、Unicode 代理项导致结算崩溃并卡住会话（#144413）、活跃会话租约不释放导致无法恢复（#148450）——用户描述都带有完整复现与日志，说明是真实生产使用中的阻塞。
- **企业/受限环境适配不足**：EDR 误报（#122463）、Windows 路径与窗口行为（#148767、#129104）反复出现，Windows 与 macOS 双平台噪音占比不低。
- **多账号/多 profile 是真实核心场景**：同主机不同凭据的回退（#154428）、共享网关下的 profile 投递（#154577），反映用户在用「个人 + 企业」双凭据与多 profile 部署。
- **数据安全信任受冲击**：「工厂重置」清空真实主目录的历史事件（#146032）与 `.env` 可重定向托管根（#144685）等已关闭问题，说明用户对本地文件边界的敏感度很高，修复需明确公告。
- **正面信号**：用户愿意做精确 bisect 与日志取证（#154701），并积极参与目录条目贡献，社区自组织能力良好。

## 8. 待处理积压

长期未响应、且影响面较大的条目：

- **[Issue #122463]**（创建 2026-09-25，OPEN）：EDR 误报，已近 7 周未解决，影响 macOS 企业安装/更新。
  https://github.com/NousResearch/hermes-agent/issues/122463
- **[Issue #129104]**（创建 2026-09-30，OPEN，needs-repro）：Windows uv venv redirector 行为矛盾，缺复现。
  https://github.com/NousResearch/hermes-agent/issues/129104
- **[Issue #135200]**（创建 2026-10-08，今日关闭）：虽已关闭，但其姊妹项 #144685 同日关闭，建议维护者补一份「托管根/身份不可被 `.env` 覆盖」的统一说明，避免回归。
  https://github.com/NousResearch/hermes-agent/issues/135200
- **[Issue #92524]**（创建 2026-08-22，OPEN）：Portal noVNC，近 3 个月无里程碑归属，建议明确「接受/搁置」结论。
  https://github.com/NousResearch/hermes-agent/issues/92524
- **[Issue #55287]**（创建 2026-06-30，OPEN，needs-decision）：已近 5 个月，仅需一个决策。
  https://github.com/NousResearch/hermes-agent/issues/55287
- **[PR #146926]**（创建 2026-10-30，OPEN）：psutil `NoSuchProcess` CI flake 修复，长期挂起会持续消耗 CI 注意力。
  https://github.com/NousResearch/hermes-agent/pull/146926
- **[PR #152237]**（创建 2026-11-09，OPEN）：一次性引入 159 条 AgentStatus MCP 目录条目，规模较大，建议拆分或明确审核标准。
  https://github.com/NousResearch/hermes-agent/pull/152237

---
*说明：本日报仅基于所提供的 GitHub 数据生成；PR 评论数字段在源数据中缺失，故未做推断。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-13

## 1. 今日速览

过去 24 小时项目共有 13 条 Issues/PRs 更新，无新版本发布。最值得关注的信号是 Issue #3417 中维护者以外的社区成员宣布建立活跃 fork（afjcjsbx/picoclaw），并明确指出本仓库「目前似乎处于无人维护状态」——这是一条关于项目治理与可持续性的强警示。已关闭的条目中有 4 条带有 `stale` 标记（#3453、#3451、#3452、#3447），说明积压清理主要依赖自动过期机制而非实质修复。待合并的 4 个 PR 全部为 dependabot 依赖升级，且均带 `stale` 标签，代码层面的功能性推进接近零。整体活跃度评估：**低，且项目健康度存在维护缺位风险**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日关闭的 PR 中，三条为长期挂起的历史 PR，关闭不等于功能落地，需谨慎看待：

- **PR #2810**（nuestraai，创建于 2026-05-07，今日关闭）：将约 1095 个上游提交合并，并前移植 6 个 magicform 定制提交到上游重构后的目录结构（agent loop 拆分为 `agent_*.go`、工具目录重组）。
- **PR #714**（seanly，创建于 2026-02-24，今日关闭）：skill 安装/重装 CLI，新增 `ParseInstallSpec`、`InstallFromGitHubEx`、`fetchTree`、`fetchDefaultBranch`、`validateSubpath`，支持 `repo@branch` 与可选 subpath，新增 `reinstall` 子命令。
- **PR #1546**（xuwei-xy，创建于 2026-03-14，今日关闭）：合并 #1480、#1479、#1478、#1473、#1467 中的修复。

**评估**：这些 PR 存续时间长达数月（#714 近 9 个月、#1546 近 8 个月、#2810 超 6 个月）后以关闭告终，配合 stale 标签，更像积压清理而非功能合入。项目整体向前推进**极为有限**。

## 4. 社区热点

- **[Issue #3417](https://github.com/sipeed/picoclaw/issues/3417)** — 5 条评论，今日讨论最活跃。作者 afjcjsbx 宣布建立并积极维护 fork，理由是仓库「目前似乎处于无人维护状态」，但社区兴趣与需求依然显著。**背后诉求**：社区需要一个能持续响应的维护通道；同时也是对上游维护意愿的直接质询。
- **[Issue #3454](https://github.com/sipeed/picoclaw/issues/3454)** — 3 条评论。模型标识校验问题，详见第 5 节。

## 5. Bug 与稳定性

按严重程度排列：

1. **[Issue #3454](https://github.com/sipeed/picoclaw/issues/3454)（OPEN，功能正确性）**：模型编辑表单中，当标识前缀不属于 picoclaw 内置 provider 而是上游命名空间（如 `ACME/gpt-4o-mini`，上游 API 区分大小写）时，校验提示建议转为小写，会破坏区分大小写的上游模型 ID。当前**无 fix PR**。
2. **[Issue #3453](https://github.com/sipeed/picoclaw/issues/3453)（CLOSED，stale）**：`gateway.hot_reload: true` 下，WebUI 修改默认模型后网关约 2 秒内已生效（日志可确认），但 WebUI 仍弹出「restart required」，`gateway_restart_re...` 状态不一致。属 UI 与后端状态同步 Bug，以 stale 关闭，**未见修复**。
3. **[PR #3452](https://github.com/sipeed/picoclaw/pull/3452)（CLOSED，stale）**：Discord 通道可能永久失聪——机器人显示「已连接」但收发全无、无心跳、无日志，根因是固定版本的 `discordgo` fork 提交存在死锁。该修复 PR 以 stale 关闭，**问题可能仍存在**。
4. **[PR #3447](https://github.com/sipeed/picoclaw/pull/3447)（CLOSED，stale）**：Anthropic thinking-always 模型（如 `claude-haiku-5-5`）在使用 token 凭据时必定返回 400，报错 `"temperature" is deprecated for this model`。修复 PR 以 stale 关闭，**未见合入**。

**稳定性结论**：今日关闭的 3 个 Bug 修复中，2 个是真实的可用性级缺陷（Discord 通道失联、Anthropic 模型不可用），均未合入。

## 6. 功能请求与路线图信号

- **[Issue #3451](https://github.com/sipeed/picoclaw/issues/3451)（CLOSED，stale）**：请求扩展 Android 兼容性至 Android 4.4（API 19）的 x86_32 / x86_64，面向老旧电视盒子、平板与模拟器。以 stale 关闭，**无对应 PR，纳入下版本可能性低**。
- **skills CLI 能力（PR #714）**：安装/重装与 GitHub 源解析能力已实现，但 PR 已关闭，是否以其他形式进入主线**无法从现有数据判断**。

**判断**：当前无任何 OPEN 的功能性 PR 支撑新特性，下一版本的功能增量信号缺失。

## 7. 用户反馈摘要

- **维护可持续性是最强痛点**（#3417）：用户明确表示「仓库看起来无人维护」，但因社区需求旺盛而选择 fork 自救。这是对项目治理的直接不信任投票。
- **模型接入灵活性受挫**（#3454）：用户接入非内置 provider 的上游模型命名空间时被校验逻辑误伤，反映出对多 provider/自建网关场景的支持不足。
- **配置热更新体验割裂**（#3453）：用户认可 hot-reload 生效速度（约 2 秒），但 UI 状态提示与实际不符，使用户对配置是否生效缺乏信心。
- **第三方渠道可靠性**（#3452）：Discord 静默失效且无日志，此类「无声故障」对长期运行的个人助手场景杀伤力大。

## 8. 待处理积压

需要提醒维护者关注：

1. **[Issue #3417](https://github.com/sipeed/picoclaw/issues/3417)**：fork 公告已放置超过一个月（创建 2026-10-06，最后更新 2026-11-12），仍未见到上游的正式回应记录，社区分流风险持续累积。
2. **4 个 dependabot PR 全部 stale 待合并**：[#3460](https://github.com/sipeed/picoclaw/pull/3460)（Azure azidentity 1.14.0→1.15.0）、[#3459](https://github.com/sipeed/picoclaw/pull/3459)（line-bot-sdk-go/v8 8.20.1→8.23.0）、[#3458](https://github.com/sipeed/picoclaw/pull/3458)（modernc.org/sqlite 1.53.0→1.61.1）、[#3457](https://github.com/sipeed/picoclaw/pull/3457)（golang.org/x/time 0.15.0→0.16.0）。均创建于 2026-11-05，若长期不处理将导致依赖持续落后。
3. **因 stale 关闭但问题仍在的修复**：[PR #3452](https://github.com/sipeed/picoclaw/pull/3452)（Discord 死锁）、[PR #3447](https://github.com/sipeed/picoclaw/pull/3447)（Anthropic 模型 400）、[Issue #3453](https://github.com/sipeed/picoclaw/issues/3453)（WebUI 状态误报）。建议重新评估而非静默关闭。

---

**健康度小结**：今日数据呈现「表面有更新、实质无进展」的形态——13 条更新全部来自 Issue/PR 状态流转，零版本发布、零功能性 PR 合入、零依赖升级落地，且多条真实缺陷修复被 stale 机制关闭。结合 #3417 的 fork 公告，项目当前处于维护响应不足状态，建议维护者优先就治理与响应机制给出明确表态。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-13

## 1. 今日速览

过去 24 小时项目保持中等活跃：1 条 Issue 更新、13 条 PR 更新，但 13 条中仅 1 条关闭（#4347），其余 12 条仍待合并，合并侧推进偏低。今日更新的 PR 以 glifocat 维护的审批卡片/渠道修复系列（#4168、#4171、#4156、#4147）和 bot 自动生成的镜像刷新 PR（#4346、#4348、#4349）为主，另有 doc、核心 bug 修复与 Proton Mail 功能推进。无新版本发布。整体看，项目处于"多人提交、集中评审"的积压消化期，核心团队 PR 队列较长，健康度尚可但合并节奏值得关注。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日唯一关闭的 PR：

- **#4347 [CLOSED] fix(cross-session-context): backfill prepares a new session's mailbox** — 作者 Koshkoshinsk。修复全新会话在"首次写入才创建存储"的 mailbox store 上，backfill 丢失时间线的问题。属于会话上下文核心逻辑修复，已落地。
  链接：nanocoai/nanoclaw PR #4347

其余 12 条待合并 PR 今日均有更新但未推进到合并状态（见下文各节）。今日合并/关闭量仅 1 条，对项目整体向前推进的净贡献有限。

## 4. 社区热点

今日数据中 PR 均无评论数记录，👍 均为 0，Issue #3853 有 1 条评论，热度整体偏低。相对值得关注的是两条跨多模块、由同一作者提交的审批卡片修复系列：

- **#4168 [OPEN] fix(approvals): resolve a clicked card only after the host accepts the click**（2026-10-21 创建，已开放 20+ 天）——标签横跨 agent-runner、channels、containers、core、providers、security、sessions 等，问题在于渠道侧在宿主确认前就修改了卡片状态（移除按钮、显示"✅ Approved by …"）。
  链接：nanocoai/nanoclaw PR #4168
- **#4171 [OPEN] fix(channels): resolve a clicked card only after the host accepts the click**——#4168 的 channels 配套部分，覆盖 WhatsApp(Baileys)、iMessage 与本地 web chat。
  链接：nanocoai/nanoclaw PR #4171

背后的诉求是**审批动作的一致性及安全边界**：点击卡片不等于审批通过，必须由宿主单次确认、且每请求只裁决一次。这关系到多渠道路由下的权限正确性，是较敏感的核心行为改动，评审周期长可以理解。

## 5. Bug 与稳定性

按影响面由高到低排列：

1. **#4168 / #4171 审批卡片提前置为已决**（安全/一致性，高）——渠道在宿主接受点击前即改卡片状态，存在"未真正批准却显示已批准"的风险。已有 fix PR（两条均 OPEN，待合并）。
2. **#4347 跨会话 backfill 丢失时间线**（会话上下文，中）——新会话在惰性存储上丢失 backfill 时间线。**已有 fix 且已关闭合并**。
3. **#4344 [OPEN] fix(agent-runner): message text reaches the agent as typed**（数据正确性，中）——formatter 对消息体统一做 `escapeXml`，导致代码以 `a &lt; b &amp;&amp; c` 形式到达 agent。影响代码类输入场景，已有 fix PR 待合并。
   链接：nanocoai/nanoclaw PR #4344
4. **#4341 [OPEN] fix(setup): let the docker credential helper find Node after an upgrade**（安装体验，中）——Node 升级或替换后，拉取预构建沙箱镜像报 `error getting credentials`。已有 fix PR 待合并。
   链接：nanocoai/nanoclaw PR #4341
5. **#4156 / #4147 审批卡片文本截断与转义**（加固，低—中）——卡片文本可能被解释/截断；Slack 超 150 字符、Discord 超 256 字符时 action 被拒，Telegram/Discord/WhatsApp Cloud 对无法完整显示的卡片应直接拒绝而非截断。均有 fix PR 待合并。
   链接：nanocoai/nanoclaw PR #4156 · nanocoai/nanoclaw PR #4147

## 6. 功能请求与路线图信号

- **Proton Mail 渠道**：由两条关联 PR 组成。#3726 [OPEN] `feat(skills): add /add-proton-mail`（含从源码在 Docker 中构建 Proton Mail Bridge，支持 arm64/x86）与 #4218 [OPEN] `feat(channels): add native Proton Mail adapter`（IMAP/SMTP 适配器，按评审要求迁至 channels registry 分支）。两者已按评审拆分（skill 与 adapter 分属不同 PR），显示该功能正朝可合入形态推进，**有望进入后续版本**。
  链接：nanocoai/nanoclaw PR #3726 · nanocoai/nanoclaw PR #4218
- **README 真实性治理**：#4327 [OPEN] 重写 README 使全部陈述与当前 main（3d027f509）一致——旧 README 183 条陈述中有 49 条过时或错误（如 trigger word、`/add-<channel>` 描述）。属仓库维护类改动，非新功能，但反映文档与实现脱节问题。
  链接：nanocoai/nanoclaw PR #4327

## 7. 用户反馈摘要

今日可提炼的真实反馈有限，主要来自 Issue #3853 与 #4327：

- **文档滞后于实现**：#3853（javexed）指出 `CLAUDE.md` 中 `## Admin CLI (ncl)` 表格已落后于 `ncl help` 实际列表，以 main @ 7902716b 为准至少缺三项——涉及 policies、messaging-groups send、sessions history。同一信号在 #4327 中亦有体现（README 大量陈述过时）。**痛点：用户/贡献者难以从文档获得可信的 CLI 与配置说明。** 该 Issue 目前 triage/unresolved。
  链接：nanocoai/nanoclaw Issue #3853
- **安装与升级稳定性**：#4341 反映 Node 升级后 docker credential helper 失效导致镜像拉取失败，属实际使用中的安装摩擦。
- 本日数据未包含具体的满意/不满意评论正文，不做进一步推断。

## 8. 待处理积压

以下 PR 开放时间较长且今日仍有更新，建议维护者优先分派评审：

- **#3726**（2026-09-06 创建，约 68 天）`/add-proton-mail` skill——功能主干，长期开放，依赖评审推进。
  链接：nanocoai/nanoclaw PR #3726
- **#4147 / #4156 / #4168 / #4171**（2026-10-19 至 10-21 创建）——glifocat 的审批卡片修复系列，均开放 20+ 天，横跨多个核心 area 标签，属安全/一致性相关，建议集中评审以免长期悬置。
  链接：nanocoai/nanoclaw PR #4147 · nanocoai/nanoclaw PR #4156 · nanocoai/nanoclaw PR #4168 · nanocoai/nanoclaw PR #4171
- **#4218**（2026-10-24 创建）Proton Mail adapter，与 #3726 成对推进。
  链接：nanocoai/nanoclaw PR #4218
- **#4327**（2026-11-09 创建）README 重写——文档治理类，合入成本较低，建议尽快处理。
  链接：nanocoai/nanoclaw PR #4327
- **#3853** Issue 仍为 triage/unresolved，文档缺项问题尚未有处理 App，建议标记并指派。
  链接：nanocoai/nanoclaw Issue #3853

另注：#4346、#4348、#4349 为 bot 自动生成的 agent 镜像哈希刷新 PR，属例行更新，可按既定流程快速合入以减少队列噪声。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-11-13

## 1. 今日速览

今日 NullClaw 无新版本发布，无 Issue 更新，社区讨论面基本静默。变更活动集中在 2 条待合并 PR 上：一条为 Telegram 渠道的 Markdown 表格渲染修复（#1094，当日新开），一条为 `web_search` 新增免 API Key 的 Keenable 提供方（#1091，11-03 创建、11-13 更新）。整体活跃度偏低，处于“低噪声迭代”状态；当天没有合并或关闭任何 PR，代码主线未推进，健康度平稳但吞吐不足。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，项目主线代码未向前推进。可关注但尚未落地的两项待合并变更：

- **PR #1094**（当日新开，作者 timosha）：修复 `markdownToTelegramHtml` 将 Markdown 表格以原始竖线透传、导致 Telegram 渲染成混乱单行的问题；改为在行首检测 “`|` + 分隔行（冒号 + 3 个以上短横）” 结构后，按等宽 pre 块渲染表头与表格。属于纯展示层修复，影响范围限于 Telegram 渠道。
- **PR #1091**（11-03 创建，11-13 更新，作者 KGKallasmaa）：新增 `src/tools/web_search_providers/keenable.zig`，为 `web_search` 增加 **Keenable** 提供方，无需 API Key，未配置 Key 时调用公开免费端点 `POST https://api.keenable.ai/v1/search/public`。属于工具能力扩展。

链接：[#1094](nullclaw/nullclaw PR #1094) · [#1091](nullclaw/nullclaw PR #1091)

（注：数据仅显示 PR 状态为 OPEN，未提供合并状态或 CI 结论，此处不作推断。）

## 4. 社区热点

今日 Issues 与 PR 评论数均未提供（`undefined`），点赞均为 0，无实质性社区讨论热点。相对而言，**#1091 Keenable 提供方**存在时间最长（创建于 11-03，今日仍有更新），是当前最值得关注的待合并 PR，反映用户对“零配置、免 API Key 搜索接入”的诉求。[#1091](nullclaw/nullclaw PR #1091) · [#1094](nullclaw/nullclaw PR #1094)

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归 Issue。唯一涉及缺陷修复的是 PR #1094 处理的 Telegram 表格渲染异常（展示层问题，非稳定性事故），且修复 PR 已提出、尚未合并。严重程度：低。

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。可从待合并 PR 判断下一版本可能纳入的能力：

- **多渠道消息渲染质量**：#1094 若合并，将提升 Telegram 下表格类内容的可读性，属于体验型增强。[#1094](nullclaw/nullclaw PR #1094)
- **web_search 提供方可插拔与免 Key 接入**：#1091 新增 Keenable 并支持无 Key 走公开端点，指向降低搜索工具启用门槛的方向；其“无 Key 免费端点”设计也涉及默认可用性与调用配额问题，需维护者评估。[#1091](nullclaw/nullclaw PR #1091)

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼。就 PR 描述可间接观察到的诉求：Telegram 用户对 Markdown 表格被压成单行原始竖线的不满（#1094）；以及用户希望 `web_search` 在无 API Key 情况下也可用（#1091）。均属使用体验层面，未涉及满意度评价数据。

## 8. 待处理积压

- **PR #1091**（Keenable web_search 提供方）：创建于 2026-11-03，至 11-13 仍为 OPEN，已积压约 10 天且无评论记录，建议维护者优先评审，明确是否接受“免费公开端点”作为默认回退路径及其限流/合规影响。[nullclaw/nullclaw PR #1091](nullclaw/nullclaw PR #1091)
- **PR #1094**（Telegram 表格渲染）：当日新开，暂无积压风险，保持常规评审节奏即可。[nullclaw/nullclaw PR #1094](nullclaw/nullclaw PR #1094)

---
*说明：本日报仅基于所提供的 GitHub 数据生成；评论数、CI 状态、合并结论等未提供的信息未作推断。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-11-13）

## 1. 今日速览

IronClaw 在 2026-11-13 处于低活跃状态：过去 24 小时仅 1 条 Issue 更新（新开 1 条，无关闭），PR 更新为 0，无新版本发布。唯一动态是 Issue #8170，聚焦 CI 工作流供应链安全，提议引入 GitHub 的 workflow 依赖锁文件（actions.lock）。代码合并通道今日完全静默，无功能推进或修复落地。整体看，项目今日属维护性低强度运行，无质量风险信号，但工程吞吐量为零值得留意。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目代码层面无向前推进。唯一可见的工程讨论（Issue #8170 的锁文件方案）仍停留在提案阶段，尚未有对应 PR 落地。

## 4. 社区热点

今日仅有 1 条 Issue，无 PR 讨论，社区互动量极低。

- **[#8170] ci: add GitHub's workflow lockfile (actions.lock), two pins to refresh first** — [nearai/ironclaw Issue #8170](https://github.com/nearai/ironclaw/issues/8170)
  - 作者 coconux3，2026-11-13 创建并更新，评论 0，👍 0。
  - 诉求：作者指出当前工作流已基本按 commit SHA 固定（这是较难的部分），提案在此基础上引入 GitHub 的 workflow 依赖锁文件，以提升 CI 供应链安全与可复现性；同时提到有“两个 pin 需先刷新”。背后反映的是对 Actions 依赖来源完整性与升级可控性的关注，属工程治理类改进，不涉及运行时功能。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告，无 fix PR 相关记录。

## 6. 功能请求与路线图信号

今日无终端用户功能请求。唯一提案为 CI 基础设施改进（Issue #8170，actions.lock 锁文件）。由于尚无对应 PR，且未提及破坏性变更或迁移注意，暂无法判断其是否会被纳入下一版本；从“仅 1 条、0 评论”的讨论深度看，短期内落地的信号有限。

## 7. 用户反馈摘要

今日 Issue 无评论，暂无真实用户痛点或使用场景反馈可提炼。Issue #8170 反映的“依赖 pin 需刷新”可作为维护者侧的轻微信号：现有锁定方式存在需要人工跟进更新的地方。

## 8. 待处理积压

按现有数据，无法判定存在长期未响应的重要 Issue 或 PR（数据仅覆盖过去 24 小时，且无未合并 PR）。如需积压评估，建议补充更长时间窗口的数据。当前需关注项为 Issue #8170 尚无评论与关联 PR：[nearai/ironclaw Issue #8170](https://github.com/nearai/ironclaw/issues/8170)。

---

**健康度小结**：无 Bug、无回归、无关闭积压，稳定性面平稳；但 24 小时零 PR 吞吐、社区互动接近为零，活跃度处于低位。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-11-13）

## 1. 今日速览

今日项目以**修复收尾、合并放量**为主：26 条 PR 更新中 22 条已合并/关闭，仅 4 条待合并；2 条 Issues 均已关闭，无新增或活跃 Issue，无新版本发布。核心贡献者 fisherdaddy 单日提交/关闭至少 10 个 PR，覆盖 Cowork 会话稳定性、技能打包、安装器与 UI 细节，是今日推进主力。稳定性方向收获明显：metadata 损坏导致会话无法加载（#639）已由修复 PR 关闭；子 Agent 人格双轨存储问题（#3035）也已关闭，但其是否真正修复在现有数据中无法确认。整体活跃度**高**，但流量集中在少数人身上，社区外部参与偏低。

## 2. 版本发布

今日无新版本发布。需注意 PR #3083 `Release/2026.11.9` 已关闭，说明发布列车在推进中，但本次数据未提供发布内容。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#3087 [area: main]** fix(cowork): 共享健壮的持久化消息 metadata 解析，逐条解码，坏字段不再拖垮整段历史加载。
- **#3061 [area: main]** fix(cowork): 分页会话消息容忍损坏 JSON metadata，明确 `Fixes #639`。
- **#3086 [area: main, cowork]** fix(cowork): 支持编辑/切换网关从未写入的轮次（用户数秒内停止生成时 OpenClaw 网关可能未落盘用户消息）。
- **#3082 [area: main, cowork]** fix(cowork): fork 会话时重映射 `toolUseId`，恢复并行工具结果与调用的配对。
- **#3078 [area: renderer, cowork]** fix(cowork): 锚点 pin 未落定时释放历史加载守卫，解决加载卡死。
- **#3088** fix(skills): 内置技能由 27 个减至 19 个，保留既有用户副本、启用状态与离线本地化名称。
- **#3085 [OPEN]** perf(openclaw): 精简每次请求都携带的 `AGENTS.md`，降低冷启动 token 成本（尚未合并）。
- **#3080** feat(media): 支持 Seedream 图层分解，向 Agent 暴露底图、层序、边界、OCR 文本与落盘文件。
- **#3079** feat(skills): 技能选择器新增「最近使用」分组（最多 5 个）。
- **#3084** feat(banners): 网关启动中点击应用内广告链接可直接跳转目标页。
- **#3089 / #3081**：回复底栏间距统一、朗读态中性化；Windows 安装器 NSIS include 反斜杠路径修复（makensis 打包失败）。

整体判断：本轮以 **Cowork 会话可靠性**为轴的修复簇密集落地，工程健康度有实质性提升；技能打包瘦身与 AGENTS.md 精简属于体积/成本优化，后者仍需评审。

## 4. 社区热点

今日所有展示条目评论数与 👍 均为 0 或缺失，**无实质性讨论热点**。相对受关注的是两条已关闭 Issue：

- [Issue #639](https://github.com/netease-youdao/LobsterAI/issues/639)：单条消息 metadata 损坏即导致整 Session 不可加载、用户无法自救。
- [Issue #3035](https://github.com/netease-youdao/LobsterAI/issues/3035)：子 Agent 的 `IDENTITY.md`/`SOUL.md` 双轨存储，UI 与运行时读取不同人格，Agent 自改被静默回滚。

背后诉求一致：**数据容错与人格持久化的可预期性**——用户要求"局部损坏不扩大为整体不可用"，以及"我看到的配置就是运行时生效的配置"。PR #2374（设置中永久隐藏侧边广告，关闭于 2026-07-21 提交、今日关闭）反映对广告干扰的持续不满。

## 5. Bug 与稳定性

按严重程度排列：

1. **高｜会话级不可用** — [Issue #639](https://github.com/netease-youdao/LobsterAI/issues/639)（CLOSED）：任一消息 metadata 非法 JSON，整个 session 加载失败且无法自行恢复。已有 fix PR [#3061](https://github.com/netease-youdao/LobsterAI/pull/3061)、[#3087](https://github.com/netease-youdao/LobsterAI/pull/3087)。
2. **高｜人格数据一致性** — [Issue #3035](https://github.com/netease-youdao/LobsterAI/issues/3035)（CLOSED，环境 `2026.11.6` + OpenClaw `2026.8.1`，Windows）：子 Agent 人格双轨存储、自改被静默回滚。现有数据未见对应 fix PR。
3. **中｜构建失败** — [#3081](https://github.com/netease-youdao/LobsterAI/pull/3081)：Windows makensis 因 NSIS include 路径导致打包失败，由卸载统计提交 d80c2925 引入。已修复。
4. **中｜加载卡死** — [#3078](https://github.com/netease-youdao/LobsterAI/pull/3078)：历史加载守卫未释放。已修复。
5. **低｜功能缺陷** — [#3082](https://github.com/netease-youdao/LobsterAI/pull/3082) fork 后工具配对丢失；[#3086](https://github.com/netease-youdao/LobsterAI/pull/3086) 网关漏写轮次。均已修复。

回归信号：卸载统计（d80c2925）引入打包回归，建议补充 Windows 打包 CI 门禁。

## 6. 功能请求与路线图信号

结合已有 PR 判断：

- **媒体能力扩展**：[PR #3080](https://github.com/netease-youdao/LobsterAI/pull/3080) Seedream 图层分解已关闭合并，若随之进入发布列车，可能出现在下一版本。
- **技能体验**：[#3079](https://github.com/netease-youdao/LobsterAI/pull/3079) 最近使用分组已关闭；[#3088](https://github.com/netease-youdao/LobsterAI/pull/3088) 技能瘦身至 19 个，**对依赖被移除技能的自动化流程构成潜在行为变更**，升级时需检查既有技能副本是否仍可用。
- **成本优化**：[#3085](https://github.com/netease-youdao/LobsterAI/pull/3085) AGENTS.md 精简仍 OPEN，若合并将降低每次请求 token，属可期待的下一版本候选。
- **广告可关闭**：[#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 设置项已关闭，可能纳入后续发布。

## 7. 用户反馈摘要

数据中 Issues 评论数为 0，无法提炼评论内容，仅能从正文归纳：

- **痛点一：故障不可恢复。** #639 用户明确要求"损坏一条不应导致整个会话不可用"，并给出模拟崩溃的复现步骤，反映真实使用中大量工具调用会提高数据损坏概率。
- **痛点二：配置与实际行为脱节。** #3035 使用空白子 Agent 复现，说明该问题在多 Agent 场景下普遍，且"静默回滚"使用户难以察觉，损害信任。
- **不满意**：广告条只能临时关闭（#2342/#2374 背景）；对人格文件存储机制缺乏透明度。
- 无正面反馈数据。

## 8. 待处理积压

- [PR #3037](https://github.com/netease-youdao/LobsterAI/pull/3037)（OPEN）：electron 43.5.0 → 43.8.7，dependabot 创建于 2026-11-09，跨 3 个次版本未合并，建议尽快评估以缩小后续升级面。
- [PR #3085](https://github.com/netease-youdao/LobsterAI/pull/3085)（OPEN）：AGENTS.md 精简，触及每次请求内容，需明确评审责任人与回归验证方式。
- [Issue #3035](https://github.com/netease-youdao/LobsterAI/issues/3035)：已关闭但数据中无对应 fix PR，建议确认关闭理由与修复证据，避免问题被"关闭而非修复"。
- [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)：2026-07-21 提交、标记 stale，今日才关闭，近四个月挂起，反映社区 PR 响应周期偏长。

---
*说明：以上内容仅基于所提供数据；评论数、👍 等字段多为 0 或缺失，故未做讨论热度排序推断。*

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

# CoPaw 项目动态日报 · 2026-11-13

> 数据窗口：过去 24 小时｜Issues 更新 19 条（新开/活跃 15，关闭 4）｜PR 更新 33 条（待合并 28，合并/关闭 5）｜新版本 0 个

---

## 1. 今日速览

项目今日维持高强度活跃：33 条 PR 更新中仅 5 条落地，积压中同时存在 3 条 `size/XXXL` 级大型 PR，说明核心能力改动正卡在评审环节。新报 Bug 集中在 **2.3.0 发布后的渠道插件与升级迁移路径**（微信、Matrix、Hub 网关），呈明显回归特征。Issues 侧讨论高度聚焦于会话级模型控制、cron 用量统计、渠道会话绑定三类"状态一致性"诉求。整体健康度：**开发活跃充沛，但合并吞吐偏低，2.3.0 的回归清理是当前最紧要的风险点**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭 5 条 PR，但所给数据中未列出具名合并 PR，以下为今日**已关闭 Issue**所反映的推进情况：

- **#6321 [CLOSED]** 支持在 AGENTS.md 中为工具调用定义前置条件规则（自 2026-07-21 提出，历时近四个月关闭）— [链接](https://github.com/agentscope-ai/CoPaw/issues/6321)
- **#7943 [CLOSED]** Windows 沙箱对盘符根工作区写入继承性 ACE 可能锁死卷（从 2.2.2b2 提出至今关闭）— [链接](https://github.com/agentscope-ai/CoPaw/issues/7943)
- **#8669 [CLOSED]** 渠道插件启动竞态：`_wait_connected` 将初始 `platform_state="disconnected"` 判为致命，飞书渠道每次启动必然 `CHANNEL_NOT_CONNECTED` — [链接](https://github.com/agentscope-ai/CoPaw/issues/8669)
- **#2306 [CLOSED]** 定时任务整理 Memory 文件时模型回复被异常打断（2026-03-26 提出，12 条评论，全窗口讨论最久的问题之一）— [链接](https://github.com/agentscope-ai/CoPaw/issues/2306)

**评估**：今日闭环以"长期存量问题"为主（两起均为 3 月/7 月提出的旧账），说明维护者在做存量清理，但对新回归的响应尚未转化为合并。项目净推进幅度有限。

---

## 4. 社区热点

| 排名 | 条目 | 互动 | 链接 |
|---|---|---|---|
| 1 | #2306 定时任务执行被打断 | 12 评论（已关闭） | [链接](https://github.com/agentscope-ai/CoPaw/issues/2306) |
| 2 | #8669 飞书渠道启动必然失败 | 5 评论（已关闭） | [链接](https://github.com/agentscope-ai/CoPaw/issues/8669) |
| 3 | #8312 上下文压缩失效导致任务中断 | 5 评论（仍 OPEN） | [链接](https://github.com/agentscope-ai/CoPaw/issues/8312) |
| 4 | #7608 钉钉渠道流模式未订阅卡片回调 | 2 评论，👍1（唯一带点赞的 Issue） | [链接](https://github.com/agentscope-ai/CoPaw/issues/7608) |

**诉求分析**：
- 长尾讨论集中在**"任务在无人值守场景下被打断"**——#2306（cron 任务）与 #8312（上下文超限）本质是同一痛点的两端：自动化运行时缺少可预期的失败恢复。这也是 #8711（空响应自动重试一次）与 PR #8723（断连结束当前回复、下轮恢复线程）的共同来源。
- #7608 是今日唯一获得点赞的 Issue，反映钉钉渠道的**交互卡片闭环尚未打通**，属于企业 IM 集成中的硬需求。

---

## 5. Bug 与稳定性

按严重程度排列：

**P0 · 阻断类**
- **#8709 [OPEN]** 2.3.0 微信渠道无法启动（`ACCOUNT_IN_USE`），且成功发送被误报为 `PLATFORM_RESULT_UNKNOWN` — [链接](https://github.com/agentscope-ai/CoPaw/issues/8709)
  - 已有 fix PR：#8720（修复误判 Bot 冲突并隔离工作区状态，仅覆盖 bug 1 相关）、#8715（接受仅含 `message_id` 的发送回执，仅对应 bug 3）、#8721（启用插件前重试恢复，对应 bug 2）。**bug 4 尚无 PR。**
- **#8718 [OPEN]** Hub 模型网关对 Anthropic/MiniMax 预设瞬时失败：`provider_headers()` 调用了不存在的 `request_headers()`；`main@19363e6` 仍未修复 — [链接](https://github.com/agentscope-ai/CoPaw/issues/8718)｜**无 fix PR**

**P1 · 功能失效**
- **#8684 [OPEN]** 升级到 2.3.0 不迁移内置渠道插件，已安装的 Matrix 停留在旧源码，2.3.0 的修复（含 #8559）永远不生效 — [链接](https://github.com/agentscope-ai/CoPaw/issues/8684)｜**无 fix PR**
- **#8312 [OPEN]** 上下文压缩无法把活跃请求塞进模型输入窗口，触发 `CONTEXT_LENGTH_EXCEEDED`，任务中断（2.2.2 报告，跨版本仍开放） — [链接](https://github.com/agentscope-ai/CoPaw/issues/8312)｜**无 fix PR**
- **#8727 [OPEN]** Responses continuation summary 在模型默认推理吃掉 4000 token 输出预算时仍失败（`disable_thinking=True` 在 Responses 协议上未生效） — [链接](https://github.com/agentscope-ai/CoPaw/issues/8727)｜**无 fix PR**

**P2 · 体验缺陷**
- **#8706 [OPEN]** Creator 创作助手输入框每次击键全量重渲染，缺 memoization，输入明显卡顿（qwenpaw-creator 2.0.5） — [链接](https://github.com/agentscope-ai/CoPaw/issues/8706)｜**无 fix PR**
- **#8712 [OPEN]** `execute_shell_command` 因资源保护被终止时，终止原因对模型不可见，导致模型重复发起同一调用 — [链接](https://github.com/agentscope-ai/CoPaw/issues/8712)｜**无 fix PR**
- **#8696 [OPEN]** 工作区路径含 `#` 时附件无法解析（`main@fc1db1a` 与 v2.2.2 均可复现） — [链接](https://github.com/agentscope-ai/CoPaw/issues/8696)｜**无 fix PR**
- **#8716 [OPEN]** Windows Creator source-intelligence 写路径仍从 raw `source_id` 推导目录（#8547 的写侧根因） — [链接](https://github.com/agentscope-ai/CoPaw/issues/8716)｜**无 fix PR**

> 另有一条安全相关修复待合并：**PR #8724** 修复 `AuthMiddleware._should_skip_auth()` 对转发代理头部的 loopback 对等体跳过鉴权的问题（关联 #8695）— [链接](https://github.com/agentscope-ai/CoPaw/pull/8724)

---

## 6. 功能请求与路线图信号

**较可能进入下一版本（已有对应 PR 支撑）**
- **渠道会话级控制**：#8710 提议为消息渠道增加 `/chats`、`/switch` 及真正轮换会话的 `/new`；#8725 指出 `/model` 在渠道内无法覆盖会话级钉住模型，模型故障时用户无法自救。二者同源，均在重构会话绑定语义，与 **PR #8532**（append-only 会话存储、分页历史、原生 Turn fork）方向一致 — [#8710](https://github.com/agentscope-ai/CoPaw/issues/8710)｜[#8725](https://github.com/agentscope-ai/CoPaw/issues/8725)｜[PR #8532](https://github.com/agentscope-ai/CoPaw/pull/8532)
- **运行时弹性**：#8711 建议 `RetryChatModel` 在 HTTP 200 但流为空/仅思考内容 EOF 时自动重试一次 — [链接](https://github.com/agentscope-ai/CoPaw/issues/8711)

**中期需求**
- **#8714** 支持将 Console 与 API 挂载到可配置的 runtime base path（当前 pip/uv/Docker 标准安装无法挂子路径） — [链接](https://github.com/agentscope-ai/CoPaw/issues/8714)
- **#7608** 钉钉渠道流模式订阅卡片回调主题 `/v1.0/card/instances/callback` — [链接](https://github.com/agentscope-ai/CoPaw/issues/7608)

**配套可用性改进（PR 在途）**
- **PR #8726**（first-time contributor）Console 文件抽屉只读预览 docx/xlsx/pptx — [链接](https://github.com/agentscope-ai/CoPaw/pull/8726)
- **PR #8554** 插件系统支持 CLI 命令与扩展点 — [链接](https://github.com/agentscope-ai/CoPaw/pull/8554)
- **PR #8648 / #8649 / #8647** 本地引擎、GPU 与自动更新控制（三者构成同一特性，需按序合并） — [#8648](https://github.com/agentscope-ai/CoPaw/pull/8648)

---

## 7. 用户反馈摘要

- **升级体验成最大不满点**：#8684 用户明确指出"2.3.0 的修复根本没落到已安装插件上"——内置插件不走迁移，等于发版对存量用户无效，这类反馈对发布信任度伤害最大。
- **渠道内缺少"自救手段"**：#8725 的表述相当直接——钉住的模型一旦故障，整条会话就无法对话，而 `/model` 却返回 "Model Switched" 成功。用户能容忍模型故障，不能容忍 UI 说谎。
- **计量口径不完整**：#8705 指出 cron 任务消耗的 token 未写入 `turns.jsonl`（对话路径由通道层 `_commit_turn_usage` 持久化，`crons/executor.py` 未对齐），用量面板漏记自动化任务成本 — [链接](https://github.com/agentscope-ai/CoPaw/issues/8705)
- **自动化场景的信任缺口**：#2306 的 12 条评论围绕"定时任务没执行完，控制台显示回复被打断"，反映用户已把 CoPaw 用于无人值守的长任务，对静默失败容忍度极低。
- **可复现性表达质量高**：多条 Bug 附带 commit hash、版本号与源码行号（如 #8716 精确到 `driver.py:3282`，#8718 精确到 `provider_setup.py`），#8711 甚至主动标注 AI 辅助起草并声明已核验。报告质量在提升，维护者可直接定位。

---

## 8. 待处理积压

**应优先清理的长龄 Issue**
- **#8312**（2026-10-18 起，5 评论，上下文压缩失效中断任务）—— 已跨版本存在，属核心可用性问题，仍无 fix PR — [链接](https://github.com/agentscope-ai/CoPaw/issues/8312)
- **#7608**（2026-09-07 起，唯一有 👍 的 Issue）—— 挂机两月，企业 IM 场景的关键缺口 — [链接](https://github.com/agentscope-ai/CoPaw/issues/7608)

**大型 PR 长期滞留评审**
- **PR #8431**（2026-10-26，`size/XXXL`，本地 Whisper 转为 SDK 插件并托管生命周期）—— 已 18 天，标注 Under Review — [链接](https://github.com/agentscope-ai/CoPaw/pull/8431)
- **PR #8554**（2026-11-03，`size/XXXL`，插件 CLI 与扩展点）—— [链接](https://github.com/agentscope-ai/CoPaw/pull/8554)
- **PR #8532**（2026-11-02，`size/XXXL`，append-only 会话存储）—— 会话语义重构是 #8710/#8725 的前置，优先级应上调 — [链接](https://github.com/agentscope-ai/CoPaw/pull/8532)
- **PR #8268**（2026-10-16 起，`size/M`，TaskTracker 回调挂起导致 run 永久 `running`）—— 已近一月，小体量高价值，建议优先合入 — [链接](https://github.com/agentscope-ai/CoPaw/pull/8268)

**维护者建议**
1. 优先合并 **PR #8724**（鉴权绕过）与 **PR #8268**（任务泄漏），均为小体量高风险收益项。
2. 将 2.3.0 回归（#8709 / #8684 / #8718）打包为 2.3.1 补丁，其中 #8684（插件迁移）与 #8718（Hub 网关）**目前无任何 PR**，需先补位。
3. 三条 `XXXL` PR 已形成评审瓶颈，建议明确其中一条作为下一版本主线，其余降级排期。

---

*本日报全部内容基于所提供的 GitHub 数据生成；PR 评论区因数据中评论数为空，未做评论热度排序。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-13

## 1. 今日速览
项目今日活跃度**高**：过去 24 小时 34 条 PR 更新、5 条 Issue 更新，但**零新版本发布**。PR 端以积压推进为主（31 条待合并、仅 3 条关闭/合并），合并吞吐偏低，积压有加重趋势。安全与凭据管理是今日绝对主线——Issue #12001/#12373 与 PR #12408 共同指向"控制 agent 能访问什么、并让 agent 看不到密钥"这一方向。同时新增 2 条 S2 级 provider Bug（OpenCode Go 相关），均为当日新开、尚无 fix PR。整体看，项目在架构与安全层快速演进，但合并瓶颈与 provider 适配问题是当前健康度的主要压力点。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日合并/关闭 3 条 PR，均为中小规模修复与增强：

- **#11556 [CLOSED] feat(channels/signal): add media attachment support** — 为 Signal 渠道加入媒体附件支持：入站附件通过 signal-cli `getAttachment` 拉取并保存至所属 agent 工作区的 `signal_files/` 目录；属渠道能力补齐，size:XL、risk:high。https://github.com/zeroclaw-labs/zeroclaw/pull/11556
- **#11933 [CLOSED] fix(web): keep the chat header on screen in narrow layouts** — 修复窄屏/手机端聊天头部行不换行、不收缩导致的布局溢出问题。https://github.com/zeroclaw-labs/zeroclaw/pull/11933
- **#11920 [CLOSED] feat(web): add a toggle to keep the live Thinking box collapsed** — 为 Web 聊天的实时 Thinking 框增加"保持折叠"开关，改善流式思考模型的阅读体验。https://github.com/zeroclaw-labs/zeroclaw/pull/11920

**推进评估**：今日落地以 UI 打磨与单一渠道能力为主，缺少核心架构变更的合入。多条 XL 级关键 PR（#11320/#11319 插件 webhook、#10391 delegate 边界、#11847 XMPP）仍处待合并或 `needs-author-action`/`needs-maintainer-review` 状态，项目在纵深方向上的实际前进有限，更多是"排队中"。

## 4. 社区热点
今日评论数据整体稀疏（Issues 最多 3 条评论，PRs 评论数未披露），热度集中于安全架构议题：

- **Issue #11138 [OPEN] define caller tool-level approval in bounded delegation**（评论 3，最高）— 讨论有界子 agent 是否必须继承调用方的工具级审批要求；标签涵盖 agent-loop、tool:delegate、domain:security、risk:high、status:accepted。反映多 agent 委派场景下的权限边界治理诉求。https://github.com/zeroclaw-labs/zeroclaw/issues/11138
- **Issue #12001 [OPEN] RFC: MITM egress proxy to control what the agent can access and to keep secrets hidden from the agent**（评论 1）— 提出在网络出口层做 MITM 代理，既限制 agent 可访问的目标，又对 agent 隐藏密钥。与 #12373、#12408 形成同一安全叙事。https://github.com/zeroclaw-labs/zeroclaw/issues/12001

**诉求分析**：社区关注点已从"agent 能做什么"转向"agent 不该看到什么"，即**密钥隔离与出口管控**成为安全模型的新焦点。

## 5. Bug 与稳定性
按严重程度排序，两条均为当日新开、**无 fix PR**：

1. **S2 — Issue #12413 [OPEN] OpenCode Go context-window discovery returns no capacity**（作者 noralane）— 在 v0.9.0 配置 OpenCode Go alias 后，`zeroclaw doctor update-context-windows --model-provider opencode.go --dry-run` 返回无容量，功能降级。https://github.com/zeroclaw-labs/zeroclaw/issues/12413
2. **S2 — Issue #12412 [OPEN] OpenCode Go uses Zen's model catalogue**（作者 noralane）— 执行 `zeroclaw models refresh --model-provider opencode-go --force` 时拉取的是 Zen 的 139 个模型目录而非 Go 的，属 provider 路由/目录映射错误。https://github.com/zeroclaw-labs/zeroclaw/issues/12412

**提示**：两 Bug 同源（opencode-go provider 配置解析），且均报告于 v0.9.0，建议维护者合并排查；虽为 S2 降级而非崩溃，但直接影响该 provider 可用性。

## 6. 功能请求与路线图信号
- **写只读凭据管理与作用域密钥引用（Issue #12373，已有一系列配套 PR）** — 在 Storage → Secrets 下提供运营者专用凭据目录：仅元数据列举、写只读创建/替换、禁用/删除，以及面向已批准任务的受控凭据引用。**已有 Draft PR #12402 覆盖，且 PR #12408（作用域 HTTP 凭据）为其 stacked 后续**，落地概率高。https://github.com/zeroclaw-labs/zeroclaw/issues/12373
- **MITM 出口代理（Issue #12001，RFC 阶段）** — 属新安全层提案，当前无对应实现 PR，短期进入下版本可能性较低，更可能进入架构讨论队列。
- **有界委派中的调用方工具级审批（Issue #11138，已 `status:accepted`）** — 已有强相关 PR #10391（保持 delegate 的工作区、工具上限与命令策略越出单轮仍受约束）在推进，具备纳入下一版本的信号。https://github.com/zeroclaw-labs/zeroclaw/pull/10391

## 7. 用户反馈摘要
- **provider 配置体验痛点（noralane）**：`opencode.go` 与 `opencode-go` 两种写法行为不一致，且 refresh 命令静默拉到错误模型目录——用户对 provider 别名与目录映射的**可预测性和诊断信息**有明显不满，属真实配置可用性问题。
- **凭据安全刚需（CastelloBrancoTecnologia）**：从 #12373 详情看，当前凭据以明文/可读形式暴露给运营界面，用户要求"写只读 + 元数据可见"的管理方式，体现对**密钥不外泄给 agent 与界面**的强烈诉求。
- **敏感数据渲染安全（PR #12389 作者 Matoo125）**：提出在 CLI 输出中清洗 ANSI 转义序列与控制字符，说明用户在使用中遇到或预见到**记忆字段污染终端输出**的风险。
- **渠道能力期望（PR #11556）**：Signal 用户需要附件收发，今日已合并，属正向反馈闭环。

## 8. 待处理积压
以下长期未落地、且风险等级高的 PR 建议维护者优先处理：

- **PR #9447 [OPEN] fix(anthropic): classify incomplete terminal responses**（创建 2026-07-27，距今约 3.5 个月）— 将有缺陷的 Anthropic 响应判为类型化失败而非静默空白，risk:high、trusted contributor、`needs-maintainer-review`。https://github.com/zeroclaw-labs/zeroclaw/pull/9447
- **PR #10391 [OPEN] fix(delegate): keep bounded delegate's workspace, tool ceiling and command policy bound beyond the turn**（创建 2026-08-26）— 与已接受的 #11138 直接相关，`needs-author-action`，长期阻塞会影响 delegate 安全模型收敛。https://github.com/zeroclaw-labs/zeroclaw/pull/10391
- **PR #11319 / #11320 [OPEN] 插件 webhook 核心 ingress 与 RPC 分发**（创建 2026-10-01，均 size:XL、risk:high、`needs-author-action`）— 互为依赖、处于链式阻塞，长期待作者响应，是插件体系推进的关键路径。https://github.com/zeroclaw-labs/zeroclaw/pull/11319 ｜ https://github.com/zeroclaw-labs/zeroclaw/pull/11320
- **PR #11847 [OPEN] feat(channels): native Rust XMPP with optional legacy OMEMO**（创建 2026-10-19，size:XL、risk:high、`needs-maintainer-review`）— 大型渠道扩展，等待维护者评审。https://github.com/zeroclaw-labs/zeroclaw/pull/11847
- **PR #12393 [OPEN] chore(deps): bump rust-all group（35 项更新）**（dependabot）— 依赖批量升级长期挂起会增加后续合并冲突成本，建议择机合入。https://github.com/zeroclaw-labs/zeroclaw/pull/12393

**健康度小结**：今日输入活跃（5 Issue + 34 PR 更新）但输出偏低（3 条关闭），31 条待合并中多条为 XL/risk:high 且卡在 `needs-author-action`/`needs-maintainer-review`。建议维护者集中清理链式依赖的插件 PR 与高优先级 delegate 安全 PR，同时对 opencode-go provider 的两条 S2 Bug 尽快给出修复，以避免在新一轮 v0.9.x 中积累不稳定因素。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*