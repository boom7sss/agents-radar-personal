# OpenClaw 生态日报 2026-11-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-09 20:48 UTC

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

# OpenClaw 项目日报 · 2026-11-09

## 1. 今日速览

项目今日处于**高强度维护期**：24 小时内 Issues 更新 500 条（新开/活跃 345、关闭 155），PR 更新 500 条（待合并 372、合并/关闭 128），合并速率约 26%，积压压力显著。**无新版本发布**，但近 24 小时出现多个 P0 级发布阻塞问题（Windows 启动/更新可靠性、SQLite 探针超时导致更新不可达），显示稳定版升级路径存在结构性风险。讨论热点集中在 Gateway 重启/崩溃恢复、多平台更新链路与 MCP 参数类型转换，用户对「重启与更新不可靠」的不满集中释放。整体健康度：**活跃度高、修复吞吐尚可，但发布阻塞项与长期 stale Issue 同时高企，需维护者优先分流 P0/P1**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR 与 Issue：

- **PR #194129 [已关闭]** `fix(gateway): shared-session runs lose access after session list updates` — 修复共享会话在会话列表更新后被拒绝下一步操作（如文件写入）的问题，影响被邀请成员的可用性。链接: openclaw/openclaw PR #194129
- **PR #195135 [OPEN，已推进]** `fix(release): complete required 2026.9.37 stability backports` — 大型（XL）稳定性回补 PR，含三处测试专用 fixture 修正（+22/-10），作者声明当前 head 已签名但**尚未合并/未取得资格**。链接: openclaw/openclaw PR #195135
- **Issue #182647 [已关闭][P1]** 云 worker 会话在推理前失败（“Session capability metadata requires worker preparation”）——云 worker 路径的阻断性缺陷已被关闭处理。链接: openclaw/openclaw Issue #182647
- **Issue #172628 [已关闭][P1]** 全新 2026.10.3 Gateway 启动后主 agent 准入被 superseded 直到重启。链接: openclaw/openclaw Issue #172628
- **Issue #167506 [已关闭][P0]** 2026.9.8 删除的临时交接数据库阻塞包恢复与后续**所有**更新——高风险更新链路问题关闭。链接: openclaw/openclaw Issue #167506
- **Issue #158966 [已关闭]** 带凭据的 CDP WebSocket URL 泄露到模型可见的标签页结果（安全边界问题）。链接: openclaw/openclaw Issue #158966

**整体推进评估**：今日关闭项覆盖网关准入、云 worker、更新恢复与一处凭据泄露，方向正确；但新开 P0 与多 P1 修复多为 OPEN 状态（多为 `no-new-fix-pr`），净稳定性改善有限，项目向前推进幅度**中等偏小**。

## 4. 社区热点

按评论数排序的活跃讨论：

1. **Issue #170956 [OPEN][P0]** Windows：慢启动、插件非干净关闭、`schtasks` 权限错误导致重启/更新不可靠 — 30 条评论，今日最高。作者 Rene-F。链接: openclaw/openclaw Issue #170956 —— 诉求：Windows 托管服务安装路径缺乏可靠的启停与权限处理，直接阻塞发布。
2. **Issue #166634 [OPEN]** 崩溃恢复后延迟回收 checkpoint 失败导致 agent 永久不可用（`SQLite session reclamation commit checkpoint expired`）— 27 条评论。链接: openclaw/openclaw Issue #166634 —— 诉求：崩溃恢复后的状态回收必须可自愈。
3. **Issue #193962 [OPEN][P0]** #187197 的 SQLite header-probe 超时修复无法从 2026.10.10 经 `openclaw update` 触达（安装的 updater 仍用 10s 探针）— 21 条评论。链接: openclaw/openclaw Issue #193962 —— 诉求：**更新器自身需要能被修复**，否则修复无法到达用户。
4. **Issue #168955 [OPEN][P1]** 2026.10.1 启动回归：Windows 上 ready 约 1030s vs 2026.9.9 的约 410s，`sidecars.control-ui-assets` 阻塞 477s — 20 条评论。链接: openclaw/openclaw Issue #168955
5. **PR 侧**：`#196242` / `#196240` / `#196239`（Advisor 评审模型与调用计数）、`#196236` / `#196237`（PostgreSQL 回滚与 Gateway 状态归属）形成小型系列讨论。链接: openclaw/openclaw PR #196242 、 openclaw/openclaw PR #196236

**背后诉求分析**：热点几乎全部指向**生命周期可靠性**——启动、重启、更新、崩溃恢复四环节在 Windows 与部分 Linux 环境下反复失守；用户反复表达的是“多试几次才行”（#170956 原文 “pas na veel proberen”），即从偶发故障升级为**发布质量阻塞**。

## 5. Bug 与稳定性

按严重程度排列（均标注是否有 fix PR）：

**P0 / 发布阻塞**
- **#170956** Windows 启动慢 + 插件非干净关闭 + `schtasks` 权限错误，重启/更新高频失败。fix PR：无（`no-new-fix-pr`，需维护者评审 + 需补充信息）。链接: openclaw/openclaw Issue #170956
- **#193962** 2026.10.10 无法通过更新触达 SQLite header-probe 修复。fix PR：无。链接: openclaw/openclaw Issue #193962
- **#167506**（已关闭）交接数据库删除阻塞包恢复与全部后续更新。链接: openclaw/openclaw Issue #167506

**P1 / 崩溃循环与回归**
- **#168955** Windows 启动回归 ~1030s（sidecars 阻塞 477s）。fix PR：无。链接: openclaw/openclaw Issue #168955
- **#144336** 延迟配置重载重启（SIGUSR1）在关闭步骤失败（“Failed to reset global singleton lifecycle state / service child cleanup identity lost”）。fix PR：无。链接: openclaw/openclaw Issue #144336
- **#166641** `web_fetch` 冷回退在主线程同步加载无关插件，导致 liveness 停顿（crash-loop）。fix PR：无（`linked-pr-open`）。链接: openclaw/openclaw Issue #166641
- **#190307** Gateway 重启后大量 agent 永久 “degraded”（admission 超时），修复提示指向完整 `doctor --fix`。fix PR：无。链接: openclaw/openclaw Issue #190307
- **#191841** 2026.10.10 回归：Linux glibc < 2.31（RHEL 8 / al8）上 “native child reaping is unavailable”，所有子进程/exec 立即失败。fix PR：无。链接: openclaw/openclaw Issue #191841
- **#126950** Telegram `tgcb1:` 不透明回调被静默丢弃（非插件调用方），存在消息丢失。fix PR：`linked-pr-open`。链接: openclaw/openclaw Issue #126950

**P2 / 功能受损**
- **#166133** MCP `tool_call` 包装把整数参数强转为字符串，导致 `MCP error -32602: Expected number, received string`，破坏带整数参数的 MCP 工具。需产品决策。链接: openclaw/openclaw Issue #166133
- **#182891** prompt cache 从不复用（`cache read dropped N -> 0`），疑似 envelope 重写与 runtimeContextCarrier 变化。链接: openclaw/openclaw Issue #182891
- **#194662** 通知桥触发的唤醒虚构发件人，主会话持续维护该虚构线程（`impact:data-loss`）。链接: openclaw/openclaw Issue #194662
- **#177094** 控制台 WebChat 重启/重载后系统通知镜像把本轮最终答案挤入折叠的工具步骤。链接: openclaw/openclaw Issue #177094
- **#137613** CLI 后端上预压缩记忆 flush 被 `ownsNativeCompaction` gate 关闭。链接: openclaw/openclaw Issue #137613

**已修复/关闭**：**#173167**（exec `timeoutSeconds` 不延长 Code Mode 墙钟预算）、**#164394**（WebChat 转录中段抖动）、**#172986**（长路径中间截断）。

## 6. 功能请求与路线图信号

- **#138366 [OPEN][P2]** 让 memory slot owner 驱动 Dreams 页面（`MemoryPluginCapability` 增加 `dreaming` provider），提供阶段状态、提升计数与运维操作。已有 PR：无。链接: openclaw/openclaw Issue #138366
- **#172547 [OPEN][P2]** 将 fenced dreaming 区间排除出 memory-search 索引与 recall 信号。已有 PR：无。链接: openclaw/openclaw Issue #172547
- **#128090 [OPEN][P3]** Review 文件查看器增加渲染 Markdown 预览（4 👍，今日点赞最高 Issue）。已有 PR：无。链接: openclaw/openclaw Issue #128090
- **#170562 [OPEN][P2]** 为搁浅在终态 subagent run 上的 requester settle wake 提供 Doctor 恢复手段（避免手改状态库）。已有 PR：无。链接: openclaw/openclaw Issue #170562
- **#165685 [OPEN][P3]** 为 registry 判定不可续的 yielded collector 提供机器可读 `reason` 与诊断。已有 PR：无。链接: openclaw/openclaw Issue #165685

**对应 PR 侧信号**：`#196242`（Advisor 可选评审模型，依赖 #196240）与 `#196240`（跳过无人发起的 run）表明 **Advisor/评审子系统**正在迭代；`#196236` / `#196237` 系列为 **PostgreSQL 状态归属**提出方案（#196156 待维护者定形）。据此判断：Advisor 与数据库后端更可能先行进入下一版本；Dreams/memory 相关请求尚缺 PR，短期内落地概率较低。

## 7. 用户反馈摘要

- **痛点：更新链路自噬**——#193962 用户无法用 `openclaw update` 到达修复；#167506 出现“删除的临时库阻塞所有未来更新”。用户的真实期待是**更新器具备独立于被更新组件的自愈能力**。
- **痛点：Windows 一等公民缺失**——#170956、#168955 反复出现 `schtasks` 权限、启动 1030s、sidecars 阻塞 477s，表现为“多次重试才成功”。
- **痛点：崩溃恢复后状态不平**——#166634 永久拒绝 `chat.history`/`chat.metadata`；#190307 多 agent 部署下大量 agent 卡在 degraded，修复建议过于粗糙（`doctor --fix` 全量）。
- **痛点：数据/消息静默丢失与虚构**——#126950 回调静默丢弃、#194662 唤醒虚构发件人、#92473 模型回退提示泄漏到外部用户可见渠道（1 👍）。
- **痛点：成本与性能**——#182891 prompt cache 零复用（1 👍）；#166641 主线程同步加载导致 liveness 停顿。
- **满意信号**：部分中低优先级 UX 缺陷（#164394 抖动、#173167 exec 预算、#172986 路径截断）在今日关闭，说明 triage 通道仍在运转；#182647、#172628 等阻断项关闭也被视为积极信号。

## 8. 待处理积压

长期未响应且重要的条目（按创建时间）：

- **#92473**（创建 2026-06-12，P2，`needs-product-decision`，9 评论）模型回退通知泄漏到外部渠道 — 近 5 个月未决。链接: openclaw/openclaw Issue #92473
- **#114414**（2026-07-27，P3，dated TODO sweep，17 评论）CI 中过期 staged Codex auth 与规范 CI 鉴权路径待修复或移除。链接: openclaw/openclaw Issue #114414
- **#128090**（2026-08-23，P3，4 👍，fix-shape-clear）Markdown 预览 — 形状明确却仍待产品决策。链接: openclaw/openclaw Issue #128090
- **#126950**（2026-08-21，P1，message-loss，linked-pr-open）Telegram 回调静默丢弃 — P1 且有 PR 关联但未推进。链接: openclaw/openclaw Issue #126950
- **#137613 / #138366**（2026-09-03/04，P2，diamond lobster）CLI 后端记忆 flush 与 Dreams provider — 记忆子系统两项高评级请求长期 `needs-product-decision`。链接: openclaw/openclaw Issue #137613 、 openclaw/openclaw Issue #138366
- **#144336**（2026-09-10，P1，crash-loop）SIGUSR1 延迟重启关闭失败 — 两月未获 fix PR。
- **PR #145895**（2026-09-12，XL，`needs proof` + security-review-required）`claude-cli` 遵循 `CLAUDE_CONFIG_DIR` 读取 transcripts — 大型且安全敏感，停滞近两月。链接: openclaw/openclaw PR #145895
- **PR #166140**（2026-10-06，P1，compatibility + security-boundary）Windows node 命令因 `cmd.exe` 包装无法使用 allowlist/auto-review — 与 #157930 关联，属 Windows 可靠性主线。链接: openclaw/openclaw PR #166140

**给维护者的建议**：优先处理 `no-new-fix-pr` 的 P0/P1（#170956、#193962、#191841），并为长期 `needs-product-decision` 的记忆/Dreams 类请求给出明确取舍，以降低 stale 积压增速。

---
*说明：本日报严格基于所提供 GitHub 数据生成；PR 评论数字段在源数据中为 `undefined`，故未作数值引用。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**数据窗口：2026-11-09（过去 24 小时）**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正处于**高速扩张与质量债务并存**的阶段：OpenClaw、Hermes Agent、ZeroClaw、NanoBot、CoPaw 等主力项目日均 PR 更新量普遍在 16–50 条区间，但合并吞吐普遍显著低于提交量（合并率多在 10%–30%），审查带宽成为共同瓶颈。技术竞争焦点已从"能否跑通 Agent 循环"转向**生命周期可靠性**（启动、重启、更新、崩溃恢复）与**多渠道/多租户隔离语义**，这两类问题在几乎每个项目中都反复出现。同时项目分层开始清晰：头部项目进入发布治理与 Beta 验证阶段，长尾项目则处于积压消化或低速维护窗口，生态呈现明显的幂律分布。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 · 关闭） | PR（待合并 · 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 345 · 155 | 372 · 128 | 无 | 活跃度高，修复吞吐尚可；P0 发布阻塞项与长期 stale Issue 同时高企 |
| **Hermes Agent** | 46 · 4 | 45 · 5 | 无 | 提案旺盛但合并吞吐偏紧，大量 `salvage` 分支清理中 |
| **CoPaw** | 14 · 3 | 41 · 9 | **v2.3.0-beta.3** | 活跃度高、缺陷密度偏高；Windows 与插件生态为发布准入风险 |
| **NanoClaw** | 0 | 39 · 8 | **v2026.11.0-beta.1** | 良好；审批卡片一致性与发布治理为主线，风险集中在 OPEN 修复 |
| **ZeroClaw** | 28 · 7 | 47 · 3 | 无 | 活跃度极高，但 **CI 全面阻塞（S1）** 致合并通道瘫痪 |
| **LobsterAI** | 2 变动 | 6 · 10 | 无 | 良好；修复闭环快（Issue 与 fix PR 同日），但有 stale 安全 PR |
| **NanoBot** | 2 · 4 | 8 · 9 | 无 | 高频迭代；部署/渠道/WebUI 缺陷同步闭环，架构重构在队列中 |
| **PicoClaw** | 0 | 3 · 2 | 无 | 积压消化期，唯一实质修复未合入 |
| **IronClaw** | 0 | 1 · 1 | 无 | 功能性推进为零，仅 dependabot 依赖升级流转 |
| **Moltis** | 1 · 0 | 0 | 无 | 低活动期，仅有 1 条 Bug 报告 |
| **NullClaw** | 0 | 1 · 0 | 无 | 稳定但停滞，内存安全修复待评审 |
| **TinyClaw / ZeptoClaw** | 无活动 | 无活动 | 无 | 静默 |

**数据一致性提示**：多项目 PR 评论数采集为 `undefined`，社区热度无法做量化排名；PicoClaw、NullClaw、IronClaw、Moltis 的社区热点与用户反馈部分因数据不足受限。

---

## 3. OpenClaw 在生态中的定位

**社区规模与流量层级**：OpenClaw 的单项数据量级（Issues 500、PR 500）显著高于所有同类项目——次高的 ZeroClaw、CoPaw、Hermes Agent 均为 50 条 PR 量级，其余多为个位数至数十。这使 OpenClaw 在生态中处于**事实上的参照系与最大用户基数**位置，其 Issue 编号已至 #19 万量级，社区沉淀远超前。

**优势**：
- **关闭项覆盖的系统性**：今日关闭项同时覆盖网关准入（#172628）、云 worker（#182647）、更新链路恢复（#167506）与安全边界（#158966），说明其问题处理横跨核心架构层，而多数同类项目今日关闭项集中于单一模块。
- **triage 通道持续运转**：中低优先级 UX 缺陷（#164394、#173167、#172986）同日关闭，表明即便在高负载下仍能消化长尾。

**技术路线差异**：
- OpenClaw 采用 **Gateway + 多 agent + sidecars + MCP** 的重型架构，问题面因此更宽——Windows `schtasks` 托管服务、SQLite header-probe 更新探针、PostgreSQL 状态归属等议题，在其他项目中均无对应（同类项目尚无此架构复杂度）。
- 对比 LobsterAI，其明确以"内置 OpenClaw 运行时"为底座（数据中引用内置 OpenClaw 2026.8.1），说明 OpenClaw 在生态中已具备**被下游集成的平台属性**，而不仅是同级竞品。

**相对劣势**：发布阻塞项的反应速度。今日三条 P0（#170956、#193962、#191841）均无 fix PR，其中 #193962 属"更新器自身无法被更新"的自噬问题——这类结构性风险在体量较小的项目（如 NanoClaw 的 #4330 发布 tag 排序修复）反而更快闭环。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **生命周期可靠性（启动/重启/更新/崩溃恢复）** | OpenClaw、ZeroClaw、NanoClaw、NanoBot | OpenClaw #170956「重启/更新不可靠」、#193962 更新器无法被更新；ZeroClaw #12320 CI 阻塞致无法合并；NanoClaw #4330 拒绝低序预发布版本 |
| **多渠道/多租户隔离语义** | NanoBot、Hermes Agent、ZeroClaw、CoPaw | NanoBot #6619 heartbeat 输出跨房间泄漏；Hermes #146428 多 profile 密钥作用域静默 wedge、#150397 终端 cwd 串用；ZeroClaw #12064 白名单机器人可应答审批；CoPaw #8644 通道插件全部失效 |
| **静默失败与错误可观测性** | NanoBot、Hermes Agent、LobsterAI、OpenClaw、CoPaw | NanoBot #6620 抑制投递却返回成功 ack；Hermes #152148「入站采纳与已投递回复掩盖失败」；LobsterAI #3033 目录错误误报为模型权限问题；OpenClaw #194662 虚构发件人；CoPaw #8620 把 `OperationalError` 吞成 `TimeoutError` |
| **审批/安全边界可信性** | NanoClaw、ZeroClaw、Hermes Agent、LobsterAI | NanoClaw #4168 卡片在宿主确认前被改写、#4156 卡片文本转义；ZeroClaw #12337 OIDC 证书引导需显式 opt-in；Hermes #150329 审批门可被 shell 函数转发绕过；LobsterAI #2590 MCP stdio 命令未校验 |
| **本地模型可控性与可观测性** | CoPaw、PicoClaw、Moltis | CoPaw #8646 GPU offload 不可见/不可关闭 + 三件套 PR（#8649/#8647/#8648）；PicoClaw #3455 Termux 下 NVIDIA 模型 ID；Moltis #1322 reasoning effort 变体重复展示 |
| **跨渠道交互一致性** | NanoClaw、NanoBot、LobsterAI | NanoClaw #4147 规避 Slack 150 / Discord 256 字符截断；NanoBot #6604 Feishu 富文本附件静默丢弃；LobsterAI #3035 UI 与运行时读不同人格源 |
| **部署开箱即用** | NanoBot、OpenClaw、Hermes Agent、CoPaw | NanoBot #6607 `render.yaml` 一键部署 exit 128；Hermes #150427 systemd PATH 覆盖致 CLI 不可见；CoPaw Windows 11 LTSC 打包版无法启动 |

**归纳**：生态的关注重心已从"能力扩展"位移至"**失败是否可见、状态是否自愈、边界是否可信**"三项基础命题。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | NanoClaw / NanoBot / CoPaw | LobsterAI | Moltis / NullClaw / IronClaw / PicoClaw |
|---|---|---|---|---|---|---|
| **功能侧重** | 全栈 Agent 平台：Gateway、云 worker、MCP、Dreams 记忆、Advisor 评审 | 多 profile 网关 + Desktop + Telegram 主力通道 | 通道广度扩张：SimpleX、XMPP/OMEMO、加密通话、OIDC 免配对 | NanoClaw 审批卡片体系；NanoBot WebUI + heartbeat 房间模型；CoPaw 本地模型 + 多 IM 通道 | 桌面端应用，以 OpenClaw 为内置运行时 | 单点纵深：Moltis 桌面模型选择器、NullClaw daemon 内存安全、IronClaw 依赖维护、PicoClaw skill 安装 |
| **目标用户** | 大规模多 agent 部署者、需要完整生命周期的团队 | 单进程跑十余 profile 的重度个人用户 | 追求隐私通道（免手机号）的移动端用户 | NanoBot：WebUI 交互用户；NanoClaw：团队 IM 审批场景；CoPaw：Windows 桌面 + 本地模型用户 | 偏好图形化定制子 Agent 的桌面用户 | 特定环境用户（Termux、macOS 高负载） |
| **技术架构关键差异** | 重型：sidecars、SQLite/PostgreSQL 双后端、探针式更新器 | 多路复用 profile + `state_meta` 会话策略 + SessionState 迁移 | Rust 原生实现 + 特性门控通道 + zerocode OIDC 登录 | Python 系 + 渠道插件化；NanoClaw 采用"宿主确认后才改卡片"的审批契约 | Electron 桌面壳 + 工作区 SOUL.md/IDENTITY.md 人格源单一化 | 轻量单进程/daemon 导向 |
| **本次数据中的独有议题** | 更新器自噬、Windows `schtasks`、prompt cache 零复用 | salvage 分支治理、MCP OAuth 令牌无限重试 | CI 被 RUSTSEC 阻塞、canonical URL 随版本漂移 | NanoBot 移除独立 API server（破坏性）、NanoClaw egress lockdown 失效 | 工具 schema 106k 字符致首请求 45k tokens | PicoClaw provider 中立性、IronClaw dependabot 循环 |

**关键结论**：OpenClaw 走"平台化 + 高复杂度"路线，代价是问题面最广、发布风险最高；ZeroClaw 与 Hermes Agent 走"通道/profile 广度"路线，代价是隔离语义跟不上实际规模；NanoClaw、LobsterAI 走"契约明确化"路线（审批契约、人格源单一化），在同类中修复闭环最干净。

---

## 6. 社区热度与成熟度

**第一梯队 · 高活跃 + 质量巩固阶段**
- **OpenClaw**：流量最大，但 P0 无 fix PR、stale 积压（#92473 已 5 个月、#144336 两月无 PR）并存，属"高负载下的质量巩固"。
- **ZeroClaw**：提交量极高但**合并通道被 CI 阻塞瘫痪**（#12320），属"扩张速度超过基础设施承载"的典型。
- **CoPaw**：Beta 验证期，17 条 Issue / 50 条 PR 更新，缺陷密度偏高，质量门槛是本周关键风险。

**第二梯队 · 快速迭代阶段**
- **Hermes Agent**：提案与 salvage 修复旺盛，但 45 条待合并挤压评审带宽。
- **NanoBot**：9 条 PR 合并/关闭，可靠性收敛为主，同时有三条破坏性重构（#6614/#6615/#6616）待进入主线——处于"稳定收敛 + 架构升级"交替期。
- **LobsterAI**：10 条 PR 合并/关闭，Issue 与 fix PR 同日闭环，成熟度执行面表现最好之一。

**第三梯队 · 发布治理阶段**
- **NanoClaw**：进入 2026.11.0 发布周期，工作重心明确转向审批一致性与发布治理，健康度良好。

**第四梯队 · 积压消化 / 低速维护**
- **PicoClaw**：Issues 静默，仅清理 7 个月前挂起 PR。
- **NullClaw、IronClaw、Moltis**：单条动态或无功能推进，属"稳定但停滞"。
- **TinyClaw、ZeptoClaw**：**24 小时零活动**。

---

## 7. 值得关注的趋势信号

1. **"静默失败"正在取代"显式崩溃"成为首要信任杀手**。NanoBot #6620（抑制却报成功）、Hermes #152148（掩盖失败）、LobsterAI #3033（错误提示误导）、NanoClaw #4314（`.env` 不可读时吞错致出网锁定失效）——四项目同日印证同一模式。**对开发者的参考价值**：Agent 系统的可观测性设计应把"抑制/降级/回退"作为一等状态显式暴露，而非复用成功路径的返回语义。

2. **多租户隔离语义落后于真实使用规模**。Hermes 用户已跑到"单进程 11 个 profile"，NanoBot 出现多房间部署跨房间泄漏，ZeroClaw 出现白名单机器人可应答审批。**参考价值**：密钥作用域、cwd、会话归属、投递目标必须在架构层显式建模，依赖"最近更新"等隐式状态会在规模上升后失效。

3. **更新/发布链路自身需要独立自愈能力**。OpenClaw #193962（更新器用旧探针，无法到达修复）与 NanoClaw #4330（拒绝低序预发布版本）构成正反案例——**参考价值**：发布基础设施应被视为与被发布产品同等重要的独立组件。

4. **审批/安全边界正从"规则匹配"转向"契约可信"**。NanoClaw #4168（宿主确认后才改卡片）、ZeroClaw #12337（OIDC 引导默认关闭）、Hermes #150329（shell 函数绕过纯规则）显示纯正则/命令名匹配的防护不足。**参考价值**：安全裁决需绑定不可绕过的执行路径，并让界面状态与真实裁决严格同步。

5. **本地模型从"能跑"转向"可观测、可关闭、可自选引擎"**。CoPaw #8646 明确"看不到 GPU offload 是否生效、也无法排障时关闭"，并配套 llama.cpp/MLX 引擎与运行时自动更新三件套。**参考价值**：本地推理的用户诉求已进入运维可观测性层面，控制台声称与实际后端不一致（如声称 CPU 但运行时含 Metal）是最易引发不信任的缺陷。

6. **跨渠道 UI 约束成为隐性正确性边界**。NanoClaw 需规避 Slack 150 / Discord 256 字符截断，NanoBot 需处理 Feishu 富文本 attachments——**参考价值**：渠道能力差异应在渲染层被校验并拒绝无法完整表达的卡片，而非截断后仍视作成功。

7. **生态开始出现下游集成平台属性**。LobsterAI 以内置 OpenClaw 运行时为底座，说明头部项目正在形成"被集成"的层次结构；同时 ZeroClaw、Hermes 的作者自提交插件目录 PR（#152208、#152210）表明插件/MCP 目录正成为生态低成本接入点。

---

*说明：本报告严格基于所提供的 2026-11-09 各项目日报数据。凡涉及具体数字、Issue/PR 编号、日期与链接均引自原文；PR 评论数在多数项目中为 `undefined`，故未作量化热度排名；TinyClaw、ZeptoClaw 仅有"过去24小时无活动"一项事实，未作进一步推断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-11-09

## 1. 今日速览

NanoBot 今日维持高频迭代：过去 24 小时 6 条 Issue 更新（2 开 / 4 关）、17 条 PR 更新（8 待合并 / 9 已合并或关闭），无新版本发布。维护者 chengyongru 是今日主力，单日提交多条 fix/refactor PR 并关闭 5 条（#6612、#6611、#6610、#6609、#6608），响应速度值得肯定。与此同时，Re-bin 提交了三条带破坏性标记（`!`）的重构 PR（#6614、#6615、#6616），预示架构清理即将进入主线。新暴露的问题集中在 heartbeat 内部轮次的消息投递语义（#6619、#6620），属于多房间/多渠道部署下的行为正确性问题，目前尚无 fix PR。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

**已合并/关闭的重要 PR（9 条）：**

- **#6611 fix(render)：通过容器入口点启动 gateway** — 直接修复 #6607 的 Render 部署失败（exit 128），部署开箱即用性恢复。https://github.com/HKUDS/nanobot/pull/6611
- **#6604 fix(feishu)：接收富文本消息中的附件** — 修复 #6596，Feishu 富文本携带的 `files` 数组不再被静默丢弃。https://github.com/HKUDS/nanobot/pull/6604
- **#6612 fix(webui)：尊重中键自动滚动** — 修复 #6592 的视口回弹问题，改为在相机边界处处理滚动归属。https://github.com/HKUDS/nanobot/pull/6612
- **#6608 fix(webui)：上下文压缩后保留系统上下文图** — 修复压缩后文件图丢失 system prompt 来源的问题。https://github.com/HKUDS/nanobot/pull/6608
- **#6610 fix(webui)：附件检测失败时保留粘贴的路径文本** — 避免误判导致用户输入内容丢失。https://github.com/HKUDS/nanobot/pull/6610
- **#6609 refactor：移除不可达的内部代码路径** — 清理无生产调用方的 TUI/网关代码。https://github.com/HKUDS/nanobot/pull/6609
- **#5456 chore(deps)：移除 websocket-client，补充 certifi** — 依赖卫生整理。https://github.com/HKUDS/nanobot/pull/5456

**净评估：** 今日推进以"可靠性收敛"为主——部署、渠道附件、WebUI 滚动与输入保真四个用户可感知缺陷同步闭环，代码库还完成了一轮死代码清理。架构层面尚未合入大改动，但三条重型重构已在队列中（见第 6 节）。

## 4. 社区热点

今日 PR 的评论数字段在数据中缺失（`undefined`），无可量化的讨论热度排名；Issue 侧评论最多仅为 1 条（#6607）。以下按问题影响力列出关注点：

- **#6607 [CLOSED] Render 部署 exit 128** — `render.yaml` 中的 `dockerCommand: gateway` 覆盖了入口点，部署在 nanobot 启动前即失败。已由 #6611 修复。https://github.com/HKUDS/nanobot/issues/6607
- **#6619 [OPEN] Heartbeat 轮次输出投递到"最近更新的房间"** — 多房间部署下出现跨房间内容泄漏，属于正确性与隐私边界问题。https://github.com/HKUDS/nanobot/issues/6619
- **#6620 [OPEN] 内部轮次被抑制的 message 调用返回"成功"措辞的 ack** — 抑制投递却报告成功，会误导调用方与评估器。https://github.com/HKUDS/nanobot/issues/6620

**背后诉求：** 两条新开 Issue 由同一作者（orrinwitt）在同日提交，指向同一个主题——**heartbeat/内部轮次的消息投递契约定义不清**（消息去往哪、失败如何表达）。多房间、多渠道部署场景正在成为主要使用形态，投递语义需要显式建模而非依赖"最近更新"这类隐式状态。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 高 | #6619 多房间 heartbeat 输出泄漏到不相关房间 | OPEN | 无 |
| 中 | #6620 被抑制的消息投递返回成功措辞 ack，掩盖失败 | OPEN | 无 |
| 中（已闭环） | #6607 全新 Render 部署 exit 128，服务无法启动 | CLOSED | ✅ #6611 |
| 中（已闭环） | #6596 Feishu 富文本附件被静默丢弃，无下载尝试、无告警 | CLOSED | ✅ #6604 |
| 低（已闭环） | #6592 WebUI 中键自动滚动被逐帧回弹、抖动 | CLOSED | ✅ #6612 |
| 低（已闭环） | #6593 "滚动到底部"按钮闪烁，组件反复卸载/重挂载 | CLOSED | 未在数据中明确关联 |

**稳定性判断：** 今日关闭的 4 个缺陷全部有对应修复落地，闭环率高。但两个 OPEN 项均属"静默错误"类问题——不崩溃、不报错，却让用户拿到错误结果或错误信号，这类问题对个人助手的信任度伤害大于显式崩溃，建议优先处理。

## 6. 功能请求与路线图信号

**可能纳入下一版本的方向：**

- **历史检索性能（#5826，OPEN，自 2026-09-20）** — 为 canonical history 检索增加按 workspace 的 SQLite FTS5 候选缓存，仅对候选命中读取消息正文。属 WebUI 性能优化，已有完整实现待审。https://github.com/HKUDS/nanobot/pull/5826
- **会话锁与跨会话输入所有权（#6194、#6613）** — #6194 用 `WeakValueDictionary` 回收空闲 session 锁；#6613 修复跨会话消息在 busy/idle 路径下 workspace 作用域不一致导致的历史重复。二者共同指向"会话生命周期管理"这一持续演进的子系统。https://github.com/HKUDS/nanobot/pull/6194 · https://github.com/HKUDS/nanobot/pull/6613
- **WebUI 请求关联与重连治理（#6617）** — 修复重连期间创建/分叉 topic 命中错误对象、超时排队请求延迟生效、token 刷新期间重开客户端等竞态。https://github.com/HKUDS/nanobot/pull/6617
- **记录分页保真（#6586，标记 conflict）** — 单轮 WebUI 历史超出回放预算时，旧选择器静默丢弃记录且无游标可取回，改为分页。当前存在冲突，需 rebase。https://github.com/HKUDS/nanobot/pull/6586

**架构清理（破坏性变更，需重点关注迁移影响）：**

- **#6614 refactor(api)!：移除独立 API server** — 删除 `nanobot serve`、`/v1` 端点、Settings 控件及 `nanobot-api` Compose 服务；旧命令仅保留隐藏提示并以退出码 2 退出。依赖 HTTP API 的集成方需提前评估。https://github.com/HKUDS/nanobot/pull/6614
- **#6615 refactor(config)!：退役旧 OpenAI provider 选择器** — `apiType`/`api_type` 在两个版本（v0.4.0、v0.4.1）的转换窗口后正式退役；显式选择旧值且无当前声明将被拒绝，旧默认值仍可加载。https://github.com/HKUDS/nanobot/pull/6615
- **#6616 refactor(tools)：集中化作用域文件操作** — 内置文件读写、编辑、补丁、目录列举与 Python 搜索统一走带作用域的文件操作，编辑预览与真实写入使用同一授权目标。https://github.com/HKUDS/nanobot/pull/6616

## 7. 用户反馈摘要

从 Issue 正文提炼的真实痛点：

- **部署路径脆弱（patrickatrender，#6607）** — 按官方 `render.yaml` 一键部署即失败且无应用输出；用户实际是靠"写完整 entrypoint 命令"自行绕过。说明模板与命令语义缺少一致性校验。
- **附件静默丢失（zhang-li-cs，#6596）** — "附件消失，既没有下载尝试也没有警告"是核心不满：不是失败，而是无声失败，用户无法察觉输入不完整。
- **WebUI 视口与用户争夺控制权（ovo-agentx，#6592、#6593）** — 用户描述"viewport fights the user"、"按钮真的卸载又重挂载"，反映出滚动所有权建模缺陷带来的持续体感干扰，且滚轮可用而中键自动滚动不可用，属不一致行为。
- **多房间部署的隔离信任（orrinwitt，#6619、#6620）** — 用户明确区分"内部轮次故意抑制投递"这一设计意图与"抑制时返回成功 ack"的实现错误，诉求是让抑制成为一种可被正确观测的状态，而非伪装成成功。

**满意度线索：** #6607 报告者自述已通过变通方式跑通服务，说明用户愿意投入排查；多条 Issue 在数日内获得对应 fix 并关闭，反馈体验整体正向。

## 8. 待处理积压

- **#5826（OPEN，创建于 2026-09-20，约 50 天）** — FTS5 历史检索加速，实现完整但长期待审，是当前队列中滞留最久的实质性性能 PR。https://github.com/HKUDS/nanobot/pull/5826
- **#6194（OPEN，创建于 2026-10-13，约 27 天）** — 空闲 session 锁释放，修复 #4883 的资源泄漏，仍未合入。https://github.com/HKUDS/nanobot/pull/6194
- **#6586（OPEN，标记 conflict，创建于 2026-11-06）** — WebUI 记录分页，存在合并冲突，需要作者或维护者推动 rebase，否则超长轮次的历史丢失问题持续存在。https://github.com/HKUDS/nanobot/pull/6586
- **#6619 / #6620（OPEN，今日新开）** — 暂无 fix PR，且未见维护者回复，建议尽快给出投递语义的设计结论，避免多房间用户遇到静默泄漏。

**提醒：** 数据中多条 PR 的 `评论` 字段为 `undefined`，无法据此评估社区讨论密度；建议维护方核对 GitHub 数据采集口径，以便后续日报量化社区热度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-11-09）

> 数据来源：NousResearch/hermes-agent GitHub 活动快照。所有条目均基于提供的 Issue/PR 摘要，未出现在材料中的细节（如具体代码行、后续进展）不作推断。

---

## 1. 今日速览

- 过去 24 小时 Issues 更新 50 条（新开/活跃 46、关闭 4），PR 更新 50 条（待合并 45、已合并/关闭 5），无新版本发布。整体呈现「**提案与修复提交旺盛，但合并吞吐偏紧**」的状态。
- 待合并 PR 达 45 条，其中不少是 `salvage`（接管他人停滞 PR）和 `ci-reviewed` 标记的修复，说明维护团队正在积极清理历史未合并的修复，但队列压力明显。
- 稳定性议题集中在三处高频模块：**多租户/多 profile 网关（multiplexed profiles）**、**Telegram 平台适配**、**会话状态（SessionState/state_meta）**。
- 安全类 Issue 出现两条（终端审批门绕过、dashboard WebSocket 鉴权 401），均为 P2/P3，值得关注下游影响。

---

## 2. 版本发布

今日无新版本发布（0 个）。

---

## 3. 项目进展

今日已合并/关闭的条目数量有限（Issues 关闭 4、PR 合并/关闭 5），以下为可确认的推进项：

- **#149384 [CLOSED]** `fix(state): rekey state_meta session policy receipts on profile rename` — 修复 profile 重命名后 `state_meta` 会话策略记录未重新绑定的问题。该 PR 被关闭，同日以 **#152209 [OPEN]（salvage #149384）** 形式重新提交，说明修复方向被保留但原实现被替代。
  https://github.com/NousResearch/hermes-agent/pull/149384
  https://github.com/NousResearch/hermes-agent/pull/152209
- **#151906 [CLOSED]** `Opening / without ?profile= no longer renders an empty page` — Dashboard 根路径无 `?profile=` 时空白页问题已关闭（RootRedirect 与 ProfileProvider effect 竞态）。
  https://github.com/NousResearch/hermes-agent/issues/151906
- **#143123 [CLOSED]** `drop_pending_on_cold_boot 默认为 true 导致 Telegram 离线消息被丢弃` — 已关闭，属于 Telegram 可靠性的实质性修复。
  https://github.com/NousResearch/hermes-agent/issues/143123

**整体评估**：项目在「多 profile 状态一致性」这条主线（#152209、#152161、#150397、#150838）上持续推进，`SessionState` 迁移（#152161，承接已合并的 #149880/#149892）是今日最具结构性的重构进展。合并速度慢于提交速度，需关注 review 带宽。

---

## 4. 社区热点

按评论数排序的前列条目：

1. **#146428 [OPEN] Bug：cron run 在 delivery lane 抛 `UnscopedSecretError` 时永久静默卡死（多路复用 profiles）** — 10 条评论，今日最高。
   https://github.com/NousResearch/hermes-agent/issues/146428
   诉求：与其它 multiplexing 作用域问题同源，但症状更严重（静默 wedge，而非调用点显式失败）。反映多 profile 下的密钥作用域隔离仍不健壮。
2. **#134434 [OPEN] Desktop「While working」保持唤醒在 Windows 11 上失效** — 4 条评论。阻塞器在每轮结束时释放，导致长时间 agent 运行中途休眠。
   https://github.com/NousResearch/hermes-agent/issues/134434
3. **#91057 [OPEN] 功能请求：向 Desktop 浏览器导入浏览器 profile/cookie（Chrome/Arc/Brave/Edge/Firefox）** — 3 条评论，是今日最受关注的**功能类**诉求（详见第 6 节）。
   https://github.com/NousResearch/hermes-agent/issues/91057
4. **#148601 [OPEN] v0.22 回归：命名自定义 provider 上的确认模型锁导致每轮会话失败**（#116070 回归，原由 #116752 修复）— 3 条评论。
   https://github.com/NousResearch/hermes-agent/issues/148601
5. **#150838 [OPEN] `gateway.local_policy.v1` 行按会话重复存储完整 profile config（state_meta 膨胀）** — 3 条评论。
   https://github.com/NousResearch/hermes-agent/issues/150838

**背景解读**：热点集中在「多 profile/多会话场景下的状态与密钥正确性」以及「Desktop 端长时间运行的可靠性」，这两条正是重度个人用户的日常使用路径。

---

## 5. Bug 与稳定性

按严重程度排列（P2 为项目内高优先级标签）：

| 严重度 | 条目 | 说明 | 是否有 fix PR |
|---|---|---|---|
| 严重（静默卡死） | [#146428](https://github.com/NousResearch/hermes-agent/issues/146428) | cron run 遇 `UnscopedSecretError` 后**永久静默 wedge**，无报错 | 材料中未见 |
| 高（回归） | [#148601](https://github.com/NousResearch/hermes-agent/issues/148601) | v0.22.x 命名自定义 provider 模型锁回归，每轮会话失败 | 材料中未见；相关方向有 [#151956](https://github.com/NousResearch/hermes-agent/pull/151956)（resume 保持 custom provider） |
| 高（安全） | [#150329](https://github.com/NousResearch/hermes-agent/issues/150329) | 审批门硬线规则可被 shell 函数/别名转发参数绕过（`f(){ rm "$@"; }; f -rf /`），另有未标记的 pipe-to-shell 通道 | 材料中未见 |
| 高（数据膨胀） | [#150838](https://github.com/NousResearch/hermes-agent/issues/150838) | 每会话存储完整 profile config，数千会话重复写入 | 材料中未见 |
| 中（多租户隔离） | [#150397](https://github.com/NousResearch/hermes-agent/issues/150397) | 多路复用网关下本地终端后端用进程 cwd 覆盖 profile 的 `terminal.cwd` | 材料中未见 |
| 中（平台可靠性） | [#152148](https://github.com/NousResearch/hermes-agent/issues/152148) | Telegram 私聊新 topic 不可见/不可打开，入站采纳与已投递回复掩盖失败 | 材料中未见 |
| 中（平台可靠性） | [#152152](https://github.com/NousResearch/hermes-agent/issues/152152) | Docker 下 s6 reconciler 重复拉起 gateway，Telegram 轮询冲突，每 3 分钟被 SIGTERM | 材料中未见 |
| 中（性能） | [#150518](https://github.com/NousResearch/hermes-agent/issues/150518) | macOS 网关因 housekeeping 全量 `gc.collect()` 持 GIL，卡顿数分钟 | 材料中未见 |
| 中（启动崩溃） | [#150445](https://github.com/NousResearch/hermes-agent/issues/150445) | init 期 fallback 落到 anthropic_messages 时 `_anthropic_api_key` AttributeError | 材料中未见 |
| 中（安装） | [#150427](https://github.com/NousResearch/hermes-agent/issues/150427) | systemd 单元固定 PATH，覆盖用户管理器 PATH，mise 安装的 CLI 不可见 | 材料中未见 |
| 中（CI 稳定性） | — | [#152179](https://github.com/NousResearch/hermes-agent/pull/152179) 修复 TUI 测试残留线程污染后续测试 | 已有 fix PR |
| 低（P3） | [#151069](https://github.com/NousResearch/hermes-agent/issues/151069) | 微信 iLink DM ID（`@im.wechat`）未被识别为显式发送目标 | 材料中未见 |
| 低（P3） | [#150331](https://github.com/NousResearch/hermes-agent/issues/150331) | loopback/无鉴权模式下 `api_auth_ws_ticket` 返回 401，破坏伴侣客户端 WebSocket 聊天 | 材料中未见 |
| 低（P3） | [#150409](https://github.com/NousResearch/hermes-agent/issues/150409) | 未安装可选 `[acp]` extra 时 ACP 校验返回裸 `-32603`，掩盖 `ModuleNotFoundError` | 材料中未见 |

**修复侧亮点**（今日提交的 PR）：
- [#151930](https://github.com/NousResearch/hermes-agent/pull/151930) Telegram 流式回复超时后重复发送（#126461，salvage #126481）
- [#151738](https://github.com/NousResearch/hermes-agent/pull/151738) 拼错的 grace 环境变量、形似 token 的普通 ID、adapter `sys.path` 前置污染，三处 Telegram 崩溃源（#50120、#145664、#117698）
- [#136106](https://github.com/NousResearch/hermes-agent/pull/136106) MCP OAuth 对 `invalid_grant` 刷新令牌无限重试（实测两台 0.21.5 分别发送 878/855 次被拒刷新）

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 结合已有 PR 的判断 |
|---|---|---|
| 导入浏览器 profile/cookie 以复用已登录会话（表单填写、登录后页面读取、受鉴权抓取） | [#91057](https://github.com/NousResearch/hermes-agent/issues/91057) | 需求明确且场景高频；材料中未见对应实现 PR，短期内更可能停留在设计讨论 |
| 插件目录扩展：Tala 语音 agent 连接器（只读、远程 MCP） | [#152210](https://github.com/NousResearch/hermes-agent/pull/152210) | 已有固定 commit 的 catalog YAML，属于低风险生态接入，具备并入下一版的条件 |
| 插件目录扩展：comemo 复合记忆元 provider v1.0.0（作者自提交自维护） | [#152208](https://github.com/NousResearch/hermes-agent/pull/152208) | 同属 catalog 类 PR，接入成本低；占据单一 memory provider 槽位，需评估与既有 provider 的兼容说明 |
| Desktop 全新 agent workspace 成为默认（可在外观设置回退经典布局） | [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) | 已是完整 PR，若通过评审将显著改变默认体验，是本次周期内最值得关注的**体验级**变更 |
| 合并 agent runtime 的 claim/lease/settle 与唤醒路径（跟踪项） | [#144882](https://github.com/NousResearch/hermes-agent/issues/144882) | 属于架构收敛跟踪，与 #152161 的 `SessionState` 迁移同方向，构成中长期路线图信号 |

---

## 7. 用户反馈摘要

- **多 profile 是最大痛点集中区**：密钥作用域（#146428）、终端 cwd 串用（#150397）、策略配置重复存储（#150838）、profile 重命名后本地会话失联（#152209）——用户已把网关跑到「单进程服务 11 个 profile」的规模，现有隔离语义跟不上实际用法。
- **Telegram 是最高频的对外通道，也最脆弱**：离线消息被默认丢弃（#143123）、新 topic 不可见（#152148）、Docker 下重复进程导致轮询冲突（#152152）、流式回复重复（#151930）。用户对「消息到底有没有送达」缺乏可信反馈，#152148 明确指出「入站采纳与已投递回复掩盖失败」。
- **长时间运行的可靠性不足**：Windows 休眠中断 agent run（#134434）、macOS 因全量 GC 卡顿数分钟（#150518）。用户的使用场景是**持续后台工作**，而系统的电源与内存策略仍按短任务假设设计。
- **协议/环境细节磨损体验**：mise 安装的 CLI 找不到（#150427）、缺少可选 extra 时只回裸错误码（#150409）、loopback 模式 WebSocket 鉴权 401（#150331）、版本标签未刷新导致长期停留在旧 release 标识（#151590）。
- **正向信号**：多位用户主动提交带版本号、commit、环境信息的结构化复现（如 #150397 明确 0.23.0 / `2bd378ed1b8d` / Python 3.14.9），并有作者自行提交并维护插件（#152208、#152210），表明生态贡献意愿健康。

---

## 8. 待处理积压

以下条目**创建时间较早、至今仍 OPEN**，建议维护者优先分诊：

| 条目 | 创建 | 积压天数（至 2026-11-09） | 关注理由 |
|---|---|---|---|
| [#91057](https://github.com/NousResearch/hermes-agent/issues/91057) 浏览器 profile/cookie 导入 | 2026-08-20 | 约 81 天 | 评论持续增长，功能诉求稳定，长期无进展易流失反馈 |
| [#134434](https://github.com/NousResearch/hermes-agent/issues/134434) Windows 保持唤醒失效 | 2026-10-07 | 约 33 天 | 影响整个 Windows 桌面用户群的长任务 |
| [#136106](https://github.com/NousResearch/hermes-agent/pull/136106) MCP OAuth 失效令牌清理 | 2026-10-10 | 约 30 天 | PR 已存在且问题有量化证据（878/855 次重试），待评审 |
| [#144882](https://github.com/NousResearch/hermes-agent/issues/144882) runtime claim/lease/settle 收敛跟踪 | 2026-10-26 | 约 14 天 | 跟踪项，需明确「阻塞下一步的决策」由谁拍板 |
| [#146245](https://github.com/NousResearch/hermes-agent/pull/146245) `--create-if-missing` 丢失 `-m/--model` | 2026-10-28 | 约 12 天 | 会导致「所有固定模型的 workflow seat 被冻结为 profile 默认模型」，影响面大 |
| [#146428](https://github.com/NousResearch/hermes-agent/issues/146428) cron 静默 wedge | 2026-10-29 | 约 11 天 | 今日讨论最热但材料中仍无 fix PR，静默失败最难排查 |

**维护者提示**：今日 45 条待合并 PR 与多条 `salvage` 分支并存，建议建立「按根因族合并」的分诊策略（multiplexing 作用域 / Telegram 可靠性 / SessionState 迁移），以避免同一问题的多个修复分支互相阻塞。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-09

## 1. 今日速览

今日 Issues 通道完全静默（0 条新开/活跃/关闭），社区讨论热度处于低位；PR 通道有 5 条更新，其中 3 条待合并、2 条已关闭，活跃度中等。当日无新版本发布。值得注意的是，两条被关闭的 PR（#3448、#2516）均为积压较久的条目（分别创建于 10-25 和 04-14），加上 #3455 已带 `stale` 标记（创建于 11-01，已 8 天），说明维护者今日主要在处理积压清理，而非推进新功能。整体判断：项目处于**积压消化期**，向前推进幅度有限。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日关闭/合并的 2 条 PR 均属维护性动作，未见功能性代码合入：

- **#3463 [OPEN] fix(skills): 按 root 而非 frontmatter name 去重已安装 skills** — 作者 nelsonrochaa-creator，创建于 11-06，今日仍待合并。该修复针对 `picoclaw skills install` 和 agent 的 `install_skill` 工具在多个已安装 skill 共享同名 frontmatter `name` 时误报 `registry archive is not a valid skill` 的问题，修复 #3462。这是今日最有实质价值的功能性修复，但仍未合入。
- **#3448 [CLOSED] feat(provider): 新增 Runcrate OpenAI 兼容 provider** — 实现了 `runcrate/` 前缀、base `https://api.runcrate.ai/v1` 的一等公民 provider 接入。该 PR 已关闭而非合并，且其描述中带有 UTM 营销参数链接，建议维护者在关闭理由中予以说明（合入标准或供应商中立性考量），以免社区产生疑问。
- **#2516 [CLOSED] chore(ci): 关闭定时的 sync-rebase 触发** — 移除了 `0 0 * * *` 的每日 cron，仅保留 `workflow_dispatch` 手动触发，纯 CI 配置调整，无代码影响。属于约 7 个月的长期挂起 PR 的清理。

**净推进评估**：今日合入/关闭的均为清理类或非功能性变更，唯一实质修复 #3463 尚未合入，项目核心能力今日无前进。

## 4. 社区热点

今日无任何 Issues 讨论，PR 评论数数据缺失（`undefined`），点赞数均为 0，**不存在可识别的社区热点**。数据层面无法支撑"讨论最活跃"的判断，建议监控管道补齐 PR 评论数采集。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 来源 | Fix 状态 |
|---|---|---|---|
| 中 | `skills install` / `install_skill` 在同名 frontmatter skill 共存时误报 `registry archive is not a valid skill`，导致 skill 安装失败 | Issue #3462（经 PR #3463 引用） | **已有 fix PR #3463，待合并** |
| 低-中 | NVIDIA 模型 ID 在 Termux shell 环境下的问题 | PR #3455 | **fix PR 本身已 stale（8 天未更新）** |

- 链接：[PR #3463](https://github.com/sipeed/picoclaw/pull/3463)、[PR #3455](https://github.com/sipeed/picoclaw/pull/3455)
- 未发现崩溃、回归类问题报告（今日 Issues 为 0，无法评估新回归）。

## 6. 功能请求与路线图信号

今日无新 Issue 功能请求。结合现有 PR 的路线图信号：

- **provider 生态扩张**：PR #3448 显示社区有接入第三方 OpenAI 兼容推理平台的需求，但该 PR 被关闭，短期纳入下一版本的可能性需维护者明确表态。
- **Perplexity 搜索集成可观测性**：PR #3466 为 Perplexity web search 的硬编码请求添加静态 `X-Pplx-Integration: picoclaw` 头，属轻量集成标识，实现简单，较可能被合入。
- **Termux/移动端兼容**：PR #3455 表明存在移动终端环境（Termux）下的模型配置诉求，若该 PR 长期 stale，建议维护者给出取舍结论。

## 7. 用户反馈摘要

今日无 Issues 评论数据，无法从评论中提炼用户反馈。以下仅为从 PR 描述中可间接推断的使用场景与痛点：

- **痛点**：多 skill 并存时的命名冲突导致安装失败（#3463），影响使用 `install_skill` 工具的 agent 工作流。
- **使用场景**：Termux（移动端 Linux 环境）下运行 PicoClaw 并配置 NVIDIA 模型（#3455）。
- **满意度/不满**：无直接用户表态数据；#3448 描述中的营销化 UTM 链接或反映第三方供应商对 PicoClaw 集成的商业兴趣。

## 8. 待处理积压

需维护者重点关注：

- **#3455 [OPEN] [stale]** — 创建 11-01，已 8 天未更新且标记 stale，修复 NVIDIA 模型 ID 的 Termux 兼容问题。按当前节奏存在被自动关闭风险，建议明确合并或关闭并说明原因。[链接](https://github.com/sipeed/picoclaw/pull/3455)
- **#3463 [OPEN]** — 修复真实安装故障，依赖 Issue #3462，今日仍待合并，建议优先评审。[链接](https://github.com/sipeed/picoclaw/pull/3463)
- **#3466 [OPEN]** — 今日提交，轻量改动，可快速评审。[链接](https://github.com/sipeed/picoclaw/pull/3466)
- **#2516** — 挂起约 7 个月后于今日关闭，建议回顾关闭理由是否需同步至相关 CI 文档，并检查是否还有其他长期挂起的同类 PR。

> 数据完整性提示：今日 Issues 为 0、PR 评论数与点赞数缺失或为 0，多项分析（社区热点、用户反馈）因数据不足无法展开，建议核查采集管道。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-11-09

## 1. 今日速览

NanoClaw 今日进入 2026.11.0 发布周期：首个 beta 版本 v2026.11.0-beta.1 已发布，并取代了此前从未转为正式版的 2026.10.1（其两个 RC 保留发布）。PR 活动高度活跃，过去 24 小时共有 47 条 PR 更新（39 条待合并、8 条合并/关闭），Issues 通道则零更新。当日工作重心明显集中在**审批卡片（approval cards）在多渠道上的一致性与安全加固**、**发布与 CI 流程治理**，以及容器/出网安全边界加固，核心团队成员（glifocat、moshe-nanoco）贡献了多数变更。整体健康度良好，但大量审批/频道相关修复仍处于 OPEN 状态，是当前风险集中区。

## 2. 版本发布

**v2026.11.0-beta.1**（2026.11.0 首个 beta）
- 定位为早期测试构建，官方明确提示“expect rough edges”。
- 该版本取代 2026.10.1；2026.10.1 不会发布稳定版，其两个候选版本（RC）仍保持发布状态，且其全部内容已合入本版本。
- 数据中未提供破坏性变更、迁移步骤或具体功能清单，此部分无法确认。

## 3. 项目进展

今日关闭/合并的 8 条 PR 中，几项对项目健康度有实质意义：

- [#4330](https://github.com/nanocoai/nanoclaw/pull/4330)（CLOSED）`fix(release)`：拒绝排序低于现有 tag 的预发布版本，避免 `beta` 渠道提供永远不会被分发的版本——直接提升发布流程可靠性。
- [#3382](https://github.com/nanocoai/nanoclaw/pull/3382)（CLOSED）`fix(setup)`：修正 Slack picker 的安装提示要求，移除过期的 `experimental` 标签。
- [#3088](https://github.com/nanocoai/nanoclaw/pull/3088)（CLOSED）`feat(ncl)`：将未知发送者挂起（`pending_sender_approvals`）纳入 `ncl approvals list`，使审批可在 CLI 中查看与处理。
- [#3040](https://github.com/nanocoai/nanoclaw/pull/3040)（CLOSED）：统一审批挂起项背后的生命周期契约。
- [#4329](https://github.com/nanocoai/nanoclaw/pull/4329)（CLOSED）：为 base agent prompt 增加“以对方消息语言回复”的规则，防止 agent 因频道历史/记忆/时区而串语言。

综合看，项目在**发布治理**与**审批生命周期统一**两条主线上有明显推进，但审批相关的用户可见行为修复多数仍在评审中（见下节）。

## 4. 社区热点

数据中 15 条展示 PR 的评论数均为 `undefined`（未提供），因此无法按评论量排名。从更新频率与标签看，最受关注的是渠道审批卡片系列，均集中于 2026-11-09 更新：

- [#4156](https://github.com/nanocoai/nanoclaw/pull/4156) `fix(channels)`：转义审批卡片文本，并拒绝渠道无法完整展示的卡片（涉及 Slack、Google Chat、Discord、Telegram、WhatsApp Cloud）。
- [#4147](https://github.com/nanocoai/nanoclaw/pull/4147) `fix(approvals)`：审批卡片始终展示完整操作（规避 Slack 150 字符、Discord 256 字符截断）。
- [#4168](https://github.com/nanocoai/nanoclaw/pull/4168) `fix(approvals)`：仅在宿主接受点击后才更新卡片，且每个请求只裁决一次。
- [#4328](https://github.com/nanocoai/nanoclaw/pull/4328) `fix(questions)`：已作答的 `ask_user_question` 卡片保留问题原文（此前仅 Discord 正确）。

背后的诉求一致：**跨渠道交互一致性**与**审批操作的可信性**——卡片被截断或提前改写会直接损害审批语义与安全性。

## 5. Bug 与稳定性

按影响排序（数据未给出崩溃报告；严重度基于描述推断）：

1. **出网安全（高）** — [#4314](https://github.com/nanocoai/nanoclaw/pull/4314)：在启用 `NANOCLAW_EGRESS_LOCKDOWN=true` 的安装中，`.env` 存在但不可读时 `readEnvFile()` 吞掉错误返回 `{}`，导致锁定可能失效并开放直连出网。**已有 fix PR（OPEN）**。
2. **审批裁决竞态（高）** — [#4168](https://github.com/nanocoai/nanoclaw/pull/4168)：频道在宿主确认前即改写卡片（移除按钮、显示“已批准”），存在重复裁决风险。**已有 fix PR（OPEN）**。
3. **误唤醒/过度响应（中）** — [#3802](https://github.com/nanocoai/nanoclaw/pull/3802)：`mention-sticky` 会在无人提及的线程中唤醒 agent；[#3797](https://github.com/nanocoai/nanoclaw/pull/3797)：Mattermost 中一次顶层 @ 提及后机器人回复该频道所有后续顶层消息。**均有 fix PR（OPEN）**。
4. **容器停止误报（中低）** — [#4057](https://github.com/nanocoai/nanoclaw/pull/4057)：`docker --rm` 自动删除尚未完成时 `DockerHandle.stop()` 误报拆卸失败。**已有 fix PR（OPEN）**。
5. **卡片显示截断（中低）** — #4156 / #4147 / #4328，见上节。**均有 fix PR（OPEN）**。

## 6. 功能请求与路线图信号

- **Keenable MCP 工具技能** [#3697](https://github.com/nanocoai/nanoclaw/pull/3697)：新增 `/add-keenable-tool`，为选定 agent 组注册 Keenable 网页搜索与页面抓取为远程 MCP 工具，安装固定的 `mcp-remote` 桥接。属外部贡献的技能类 PR，自 2026-09-01 起待合并，是否进入 2026.11.0 稳定版取决于评审进度。
- **CI/发布加固** [#4318](https://github.com/nanocoai/nanoclaw/pull/4318)：CI 固定只读 token，发布工作流在执行前验证目标 SHA 位于 `main`。该方向与已关闭的 #4330 同属发布治理，**较可能随 11 月版本线落地**。
- 审批生命周期统一（#3040 已关闭）与未知发送者 CLI 可见性（#3088 已关闭）已为后续审批类修复奠定基础。

## 7. 用户反馈摘要

今日 Issues 为 0，数据中亦无 Issue 评论内容，无法提炼终端用户原声。可间接观察到的维护侧信号：PR 模板（`nanoclaw-pr-template:v2`）被广泛使用，条目普遍带有 `follows-guidelines` 标签，说明贡献流程规范被执行得较好；同时多条 PR 带有 `core-team` 标签，反映当前修复主要由核心团队推动，外部贡献（如 #3697、#4314、#4057）在积压中等待。

## 8. 待处理积压

长期未合并且仍 OPEN 的重要 PR，建议维护者优先关注：

- [#3697](https://github.com/nanocoai/nanoclaw/pull/3697)（创建于 2026-09-01，约 69 天）：Keenable MCP 技能，外部贡献者提交。
- [#3797](https://github.com/nanocoai/nanoclaw/pull/3797)（创建于 2026-09-13，约 57 天）：Mattermost 线程参与行为修复。
- [#3802](https://github.com/nanocoai/nanoclaw/pull/3802)（创建于 2026-09-14，约 56 天）：`mention-sticky` 误唤醒修复。
- [#4057](https://github.com/nanocoai/nanoclaw/pull/4057)（创建于 2026-10-08，约 32 天）：Docker `--rm` 拆卸等待。
- [#4147](https://github.com/nanocoai/nanoclaw/pull/4147) / [#4156](https://github.com/nanocoai/nanoclaw/pull/4156) / [#4168](https://github.com/nanocoai/nanoclaw/pull/4168)（创建于 2026-10-19 至 10-21）：审批卡片系列修复，涉及安全语义，积压时间虽短但优先级高。

---

**数据说明**：本报告仅基于提供的 NanoClaw GitHub 数据。评论数未提供（显示为 `undefined`），故“社区热点”未做评论量排名；beta 版本的具体变更清单、破坏性变更与迁移说明未在数据中给出，相关部分未作推断。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-11-09

## 1. 今日速览

过去 24 小时项目活跃度**偏低**：无 Issues 新开、活跃或关闭，无新版本发布，PR 侧仅 1 条待合并更新（#1090）。唯一动作是 11 月 2 日创建的 PR #1090 于 11 月 8 日获得更新，说明维护/评审链条仍在缓慢推进。整体判断：项目处于**低速维护窗口**，无阻塞性爆发，但也缺乏合并进展，健康度以"稳定但停滞"为主。（来源：本次提供的数据概览）

## 2. 版本发布

今日无新版本发布，省略。（来源：数据概览「新版本发布：0 个」）

## 3. 项目进展

今日**无合并或关闭的 PR**，项目功能层面无实质向前推进。

唯一在途工作：
- **PR #1090 [OPEN] fix(daemon): keep delivery ownership valid on allocation failure** — 作者 perfloop-agent，创建于 2026-11-02，更新于 2026-11-08，待合并。
  该 PR 修复调度器 delivery 替换逻辑中的内存所有权问题：在释放旧值前先复制每个字符串，使分配失败时 teardown 不会持有已释放的内存；修复范围覆盖 channel、account、destination、peer 等字段的"先分配后释放"处理。
  链接: [nullclaw/nullclaw PR #1090](nullclaw/nullclaw PR #1090)

评估：这是一个针对 daemon 稳定性与内存安全的防御性修复，价值明确，但尚未进入合并流程，今日对项目进度的贡献为 0。

## 4. 社区热点

今日无可比较的讨论热度：
- Issues 评论：无数据（0 条 Issues）
- PR #1090 评论数在该数据中标记为 `undefined`，👍 为 0。

因此无法识别今日社区热点话题，也无用户诉求数据可供分析。（来源：数据概览与 PR 列表）

## 5. Bug 与稳定性

今日**无用户报告的 Bug、崩溃或回归 Issues**（新开 Issues 为 0）。唯一相关的是在途修复 PR #1090：

| 严重程度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 中（潜在内存安全） | 调度器 delivery 替换在分配失败时可能使 teardown 持有已释放内存 | 已有修复，待合并 | [#1090](nullclaw/nullclaw PR #1090) |

说明：PR 摘要仅表明这是潜在的内存所有权风险，未提及实际崩溃报告，故按"潜在风险"而非"已发生事故"标注。

## 6. 功能请求与路线图信号

今日**无新功能请求**（Issues 为 0）。无足够信号判断哪些需求将进入下一版本。PR #1090 属于稳定性加固而非新功能，不构成路线图信号。

## 7. 用户反馈摘要

今日无 Issues 评论，无法提炼用户痛点、使用场景或满意度信息。PR #1090 的评论数据缺失（`undefined`），亦无社区反馈可引用。建议：在下一份日报中补充可获取的评论内容后再做该项分析。

## 8. 待处理积压

- **PR #1090 [OPEN]** — 创建于 2026-11-02，至今日已**待处理 7 天**，期间仅有更新、无合并，评论数据缺失。建议维护者尽快完成评审并给出合并或修改意见，避免内存安全类修复长期悬置。
  链接: [nullclaw/nullclaw PR #1090](nullclaw/nullclaw PR #1090)

今日无长期未响应的 Issues 可列出（Issues 为 0）。

---

**数据局限说明**：本日报仅基于所提供的数据快照生成；Issues 与评论数据为空，PR 评论数为 `undefined`，因此社区热点与用户反馈部分无实质内容可分析，相关结论限于数据可见范围。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-11-09

> 数据来源：nearai/ironclaw GitHub 动态（统计窗口：过去 24 小时）

## 1. 今日速览

IronClaw 今日整体活跃度偏低，且全部动态集中在依赖维护层面。过去 24 小时内无 Issue 更新、无新版本发布，仅发生 2 条 PR 变动：一条依赖批量升级 PR 被关闭（#8160），其继任者 #8169 随即开启并处于待合并状态。合并/关闭的 PR 中不包含任何功能开发或缺陷修复，项目在功能层面的推进量今日为零。就健康度而言，dependabot 常规升级流程运转正常，但社区互动与代码演进均处于静默期。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

- **#8160 [CLOSED]** `chore(deps): bump the everything-else group across 1 directory with 43 updates`
  作者 dependabot[bot]，创建于 2026-10-25，于 2026-11-08 关闭。
  链接：nearai/ironclaw PR #8160
  该 PR 为跨 43 项依赖的批量升级（含 thiserror `2.0.20`→`2.0.21`、uuid `1.24.0`→…），已关闭但存在争议：同一批升级以更大规模在 #8169 中重新提出，说明关闭原因可能是升级集合过期或被新分支取代，而非放弃升级。摘要未显示合并记录，无法确认因成功合并而关闭。

**结论**：今日无功能、性能或稳定性层面的实质性推进，项目向前迈进幅度可视为维护性噪声级别。

## 4. 社区热点

今日无评论数据（两条 PR 的评论数均为 `undefined`），无 👍 反应，未形成任何讨论热点。唯一值得留意的信号是依赖升级 PR 的“关闭—重开”动作（#8160 → #8169），暗示 dependabot 分组策略或升级基线存在反复。链接：nearai/ironclaw PR #8169。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归报告，无相关 fix PR。

唯一潜在的稳定性风险来自 #8169：一次性合入 44 项依赖升级（Rust 生态，涉及 thiserror、uuid 等基础库），存在引入编译或行为回归的可能。该 PR 尚未合并，建议维护者依赖 CI 验证后再合入。链接：nearai/ironclaw PR #8169。

## 6. 功能请求与路线图信号

今日无用户功能请求。基于现有 PR 可判断，下一版本最可能纳入的内容是 #8169 所代表的依赖版本刷新；除此之外无任何路线图信号可供推断。链接：nearai/ironclaw PR #8169。

## 7. 用户反馈摘要

今日无 Issue 及 Issue 评论，无法提炼用户痛点、使用场景或满意度信息。本部分本次为空。

## 8. 待处理积压

- **#8169 [OPEN]** 依赖批量升级（44 项），创建于 2026-11-08，尚属新鲜，暂无逾期风险，但需关注是否重演 #8160 的关闭—重提循环。链接：nearai/ironclaw PR #8169
- **#8160 [CLOSED]** 已于 2026-11-08 关闭，无需跟进。链接：nearai/ironclaw PR #8160

**维护者提示**：本次数据未暴露长期未响应的 Issue 或 PR；建议下一周期重点观察 #8169 的处理时效，以及依赖升级流程是否需固定基线以减少重复 PR。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-11-09）

## 1. 今日速览

今日项目 PR 活跃度较高（16 条更新，10 条合并/关闭），核心维护者 fisherdaddy 与 btc69m979y-dotcom 集中推进了 Agent 人格源统一、OpenClaw 工具上下文优化与 Cowork 工作目录容错等关键修复。Issues 侧仅 2 条变动，但新开 Issue #3035 直指子 Agent 人格双轨存储的深层架构问题，且当日即有对应 fix PR #3038 关闭，响应链路闭环良好。无新版本发布。整体健康度良好，但依赖升级 PR 积压（含 34 个包的 univer 大版本组）与 9 月遗留安全 PR #2590 仍待处理。

## 2. 版本发布

今日无新版本发布，此部分省略。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#3038 fix(agent): 以工作区 SOUL.md/IDENTITY.md 作为人格唯一来源**（关闭）
  修复 #3035：非 main Agent 的人格此前分散存储于 SQLite（`agents.system_prompt` / `agents.identity`）与工作区文件两处，导致 UI 与 OpenClaw 运行时读取不一致、Agent 自改被静默回滚。本 PR 将工作区文件统一为权威来源。
  链接：netease-youdao/LobsterAI PR #3038

- **#3029 perf(openclaw): 将大型工具目录延后至 Tool Search**（关闭）
  针对每次模型请求中工具 schema 占比过高的问题（68 个工具、约 106k 字符、首请求基线约 45k tokens），启用 OpenClaw Tool Search 目录模式，仅保留核心工具。
  链接：netease-youdao/LobsterAI PR #3029

- **#3034 fix(settings): 模型编辑器能力选项可覆盖 Provider 预设**（关闭）
  修复 MiMo V2.6 Pro 勾选「支持图像输入」后被静默改回的问题，根因包括内置预设数据过期。
  链接：netease-youdao/LobsterAI PR #3034

- **#3033 fix(cowork): 工作目录不可用时报告错误而非自动创建**（关闭）
  修复外接盘拔出后默认工作目录 `/Volumes/Elements` 触发 `EACCES`，且错误被误报为「账号无权访问该模型」的误导性提示。
  链接：netease-youdao/LobsterAI PR #3033

- **#3032 feat(experts): 启用 Expert Plaza 入口**（关闭）
  通过共享 feature flag 重新开放侧边栏、Agent 创建弹窗与新任务菜单中的专家广场入口。
  链接：netease-youdao/LobsterAI PR #3032

- **#3031 feat(dsh): 增加内置运行时实例上下文**（关闭）
  将 DSH 运行时请求与其进程实例关联，保持既有鉴权、共享配置与窗口复用行为不变。
  链接：netease-youdao/LobsterAI PR #3031

- **#2766 feat(providers): 新增 Requesty 模型提供商**（关闭，9 月创建）
  以 OpenRouter 同样的方式接入 Requesty LLM 网关。
  链接：netease-youdao/LobsterAI PR #2766

**推进评估**：今日合并集中在「一致性」与「性能」两条主线——人格源单一化、工具上下文瘦身、错误提示准确性，属于对既有体验缺陷的系统性收敛，而非新功能铺开。Expert Plaza 入口重启是唯一面向用户可见的功能增量。

## 4. 社区热点

- **Issue #3035（OPEN，0 评论）**：子 Agent 的 IDENTITY.md / SOUL.md 双轨存储问题。报告者给出了完整环境（LobsterAI 2026.11.6 / Windows x64、内置 OpenClaw 2026.8.1、Windows 10.0.26300）与复现路径（新建空白子 Agent）。虽然零评论，但当日即由 PR #3038 修复，实际影响力大于讨论热度。
  链接：netease-youdao/LobsterAI Issue #3035

- **Issue #2738（CLOSED，2 评论）**：请求支持不重启网关切换工作区。诉求根源是本机性能有限时网关启动超 10 秒，频繁切换体验差。今日关闭，但数据未显示对应的合并 PR，建议维护者在 Issue 中补充关闭原因。
  链接：netease-youdao/LobsterAI Issue #2738

- **PR #2590（OPEN，stale）**：MCP stdio 命令与外部 URL 边界加固。MCP stdio 的 command/args 从表单、JSON 导入与配置同步流入 openclaw.json 时缺乏 shell 元字符与命令路径校验，渲染进程提供的 URL 也未经协议校验直接交给 `shell.openExternal`。这是今日列表中安全权重最高的条目。
  链接：netease-youdao/LobsterAI PR #2590

## 5. Bug 与稳定性

按严重程度排列：

1. **高——子 Agent 人格被静默回滚（Issue #3035）**
   子 Agent 自改 IDENTITY.md / SOUL.md 会被静默还原，UI 与运行时读取不同数据源。属于数据一致性缺陷，用户难以察觉。**已有 fix PR #3038，今日已关闭，修复已落地。**
   链接：netease-youdao/LobsterAI Issue #3035

2. **中——工作目录不可用导致任务启动失败且提示误导（PR #3033）**
   外接盘拔出场景下报 `EACCES`，同时 toast 误报为「当前账号无权访问该模型」，会误导用户排查方向。**今日已修复关闭。**
   链接：netease-youdao/LobsterAI PR #3033

3. **中——模型能力选项被静默覆盖（PR #3034）**
   勾选「支持图像输入」保存后被改回，且列表无「图像」标签，属于设置层数据过期导致的静默回滚。**今日已修复关闭。**
   链接：netease-youdao/LobsterAI PR #3034

4. **性能问题——首请求 token 基线过高（PR #3029）**
   68 个工具约 106k 字符 schema，首请求基线约 45k tokens，直接影响延迟与成本。**今日已优化关闭。**
   链接：netease-youdao/LobsterAI PR #3029

5. **安全边界缺失——MCP stdio 与外部 URL 未校验（PR #2590）**
   属潜在风险而非已确认漏洞。**fix PR 仍在 OPEN，标记 stale，未合并。**
   链接：netease-youdao/LobsterAI PR #2590

## 6. 功能请求与路线图信号

- **不重启网关切换工作区（Issue #2738）**：需求明确、场景具体（低性能机器网关启动超 10 秒）。今日已 CLOSED，但无可见对应 PR，是否已实现或转为其他方案需维护者说明。若尚未实现，建议重新评估优先级。
  链接：netease-youdao/LobsterAI Issue #2738

- **新增模型提供商接入（PR #2766 已关闭 / PR #2818 待合并）**：Requesty 已合并，Atlas Cloud（位于 Global 区域、与 OpenRouter 并列，5 文件 +38/-4）仍在 OPEN。社区对多网关/多供应商接入有明显需求，若 #2818 顺利合入，下一版本可能形成「供应商矩阵」类更新。
  链接：netease-youdao/LobsterAI PR #2818

- **Expert Plaza（PR #3032）**：入口已通过 feature flag 重新启用，属于可被后续版本放量的功能，值得观察 flag 在正式版中的默认取值。

## 7. 用户反馈摘要

从今日 Issue 与 PR 描述中可提炼的痛点与场景：

- **低配设备体验**：用户明确提到「本机性能有限，网关启动耗时超过 10 秒」，频繁切换工作区的场景下体验明显受损（Issue #2738）。
- **可移动/外接存储场景**：默认工作目录设在外接盘，拔出后任务直接失败，且错误提示把目录问题误报为权限/模型问题（PR #3033）。
- **子 Agent 人格可信度**：用户能具体定位到 UI 与运行时读取不同文件、自改被回滚，说明其在深度使用子 Agent 做定制化，对「改动是否真的生效」高度敏感（Issue #3035）。
- **模型能力标注准确性**：MiMo V2.6 Pro 已官方支持图像输入但客户端预设滞后，反映内置模型数据更新节奏需跟上厂商发布（PR #3034）。
- 今日数据中未见明确的正面评价或满意度反馈。

## 8. 待处理积压

- **PR #2590 fix(security): MCP stdio 命令与外部 URL 边界加固**——2026-09-01 创建，已标记 `stale`，至今未合并。安全边界类改动长期挂起，建议优先排期或明确拒绝理由。
  链接：netease-youdao/LobsterAI PR #2590

- **PR #2818 feat: 新增 Atlas Cloud 提供商**——2026-10-09 创建，标记 `renderer` + `stale`，改动量小，属低风险增量。
  链接：netease-youdao/LobsterAI PR #2818

- **PR #3019 chore(deps-dev): univer 组 34 个包升级**——`@univerjs/core` 等从 1.0.2 升至 1.3.1，跨次版本升级，需回归验证。同时 #3020（docx-editor 组）亦待评估。
  链接：netease-youdao/LobsterAI PR #3019

- **依赖升级存在重复排队**：electron 43.5.0→43.8.6（#3021，已关闭）与 43.8.7（#3037，OPEN）；fast-xml-parser →5.11.2（#3022，已关闭）与 →5.12.0（#3036，OPEN）。建议合并批处理，减少 CI 负担。
  链接：netease-youdao/LobsterAI PR #3037 ｜ netease-youdao/LobsterAI PR #3036

---

**健康度小结**：修复闭环速度快（Issue 与 fix PR 同日出现），核心维护路径清晰；主要风险集中在长期 stale 的安全 PR #2590 与依赖升级积压。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-11-09

## 1. 今日速览

今日项目活跃度**偏低**。过去 24 小时内仅有 1 条 Issue 更新（新开 1 条），无 PR 更新、无新版本发布。唯一动态是一条针对桌面端模型选择器的 Bug 报告（#1322），尚无评论和修复 PR。整体看，项目处于平稳低活动期，核心开发侧（PR/发布）今日无推进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无合并或关闭的 PR，项目功能与修复层面无进展。

## 4. 社区热点

今日仅有一个活跃 Issue，无讨论热度：

- **[#1322 [Bug]: Desktop app model picker lists every reasoning effort as a separate model](https://github.com/moltis-org/moltis/issues/1322)** — 0 评论，0 👍。虽属 Bug 报告，但反映了用户对桌面端模型选择器与 daemon `@reasoning-<level>` 变体命名交互的实际使用体验关注。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 中 | [#1322](https://github.com/moltis-org/moltis/issues/1322) | 桌面端模型选择器将每个 reasoning effort 显示为独立模型（daemon 的 `@reasoning-<level>` 变体被重复列出），版本 daemon/desktop 20261023.01，Linux x86_64 AppImage + 本地 daemon。属 UI/展示层缺陷，不影响核心推理功能。 | 无 |

暂无崩溃或回归类高严重度问题报告。

## 6. 功能请求与路线图信号

今日无明确的新功能请求 Issue。Issue #1322 本质上指向一个体验改进方向：模型选择器应对同一模型的多个 reasoning effort 变体做分组/去重展示。由于当前无相关 PR，暂无证据判断其是否纳入下一版本。

## 7. 用户反馈摘要

来自 Issue #1322 的真实使用场景与痛点：

- **使用场景**：Linux x86_64 AppImage 桌面端连接本地 daemon（版本 20261023.01）。
- **痛点**：reasoning-capable 模型在模型选择器中按 effort 级别重复呈现，导致列表冗长、难以选择，属不满意体验。
- 今日无其他用户评论，正面/负面反馈样本有限。

## 8. 待处理积压

今日数据仅覆盖 #1322，该 Issue 为当日新开、尚无评论与 fix PR，建议维护者尽快确认是否为可复现的展示层问题并指派处理：

- [#1322](https://github.com/moltis-org/moltis/issues/1322)

> 说明：本次数据未提供长期未响应的历史 Issue/PR 列表，故积压部分仅能基于现有材料说明当日新增项。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-11-09

> 数据窗口：过去 24 小时 | Issues 更新 17 条（新开/活跃 14，关闭 3）| PR 更新 50 条（待合并 41，已合入/关闭 9）| 新版本 1 个

---

## 1. 今日速览

- 项目维持高活跃：24 小时内 50 条 PR 更新、17 条 Issue 更新，社区贡献以外部开发者为主，另有 1 个 Beta 版本发布。
- 发布线处于 v2.3.0 Beta 验证阶段：当日推送 `v2.3.0-beta.3`，并自动生成安装验证任务（#8643，截止 2026-11-09 15:44 UTC）。
- 稳定性是当前主要压力点：Windows 打包版、通道插件激活失败、长路径等问题在多个 Beta 版本间重复出现，直接影响 2.3.0 的发布准入。
- 功能侧出现成体系的本地模型推进：同一贡献者提交 llama.cpp GPU、MLX 引擎与运行时自动更新三件套（#8649 → #8647 → #8648），但尚未合并。
- 整体健康度评估：**活跃度高、缺陷密度偏高**，Beta 阶段的质量门槛（尤其是 Windows 与插件生态）是本周关键风险。

---

## 2. 版本发布

### v2.3.0-beta.3（Beta）
- 更新内容（发布说明所列）：
  - `docs(memory)`：新增多模态记忆与 Memory Tags 的双语博客（#8506）。
  - `fix(channels)`：修复桌面端插件安装与修复流程失败的问题。
- **降级差异说明**：发布说明中列出的 PR 指向仓库 `agentscope-ai/QwenPaw`，而数据来源标注为 `agentscope-ai/CoPaw`，请维护者在对外发布页核对仓库归属。
- **破坏性变更**：发布说明未提及。
- **迁移注意**：未提及迁移步骤；但需注意 #8644 报告在 `2.3.0b3` 打包版上通道插件（feishu / wechat / yuanbao）仍全部无法激活，升级前建议先验证通道可用性。
- 发布页：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.3
- 安装验证跟踪：https://github.com/agentscope-ai/QwenPaw/issues/8643

---

## 3. 项目进展

今日合并/关闭的 9 条 PR 以修复与 CI 保障为主，未见大功能落地：

| PR | 类型 | 内容 |
|---|---|---|
| [#8641](https://github.com/agentscope-ai/QwenPaw/pull/8641) | fix(ci) | 将 macOS 桌面构建超时延长至 90 分钟，缓解打包流水线中断 |
| [#8639](https://github.com/agentscope-ai/QwenPaw/pull/8639) | fix(test) | 修复依赖安装测试中的 BOM 解码问题 |
| [#8640](https://github.com/agentscope-ai/QwenPaw/pull/8640) | test | 修复 Windows 下权限断言与 UTF-8 BOM 断言，拆分 POSIX 专属检查 |
| [#8645](https://github.com/agentscope-ai/QwenPaw/pull/8645) | feat(local-models) | MLX 引擎与 GPU 控制（已关闭，随后拆分为 #8649/#8647/#8648 系列重新提交） |

**推进评估**：本日进展集中在“让 Beta 可验证、可构建”，而非功能增量。MLX 相关工作从单一 XXL PR 拆分为分层提交，说明作者在主动降低评审成本，但尚未合入主干。

---

## 4. 社区热点

1. **#8595 插件安装报错 `No package metadata was found`（qwenpaw-creator v2.0.4）** — 4 条评论，今日 Issues 中讨论最多。
   https://github.com/agentscope-ai/QwenPaw/issues/8595
2. **#8521 对话经常无答复内容 + Ctrl+C 复制需多次才成功** — 4 条评论，涉及回答缺失、复制失效、新版 UI 反应迟缓三项体验问题。
   https://github.com/agentscope-ai/QwenPaw/issues/8521
3. **#8649 / #8647 / #8648 本地模型三件套系列 PR**（同一作者 LXD-8 拆分提交，均为 OPEN）
   [#8649 llama.cpp GPU + 自动更新](https://github.com/agentscope-ai/QwenPaw/pull/8649) · [#8647 MLX 引擎](https://github.com/agentscope-ai/QwenPaw/pull/8647) · [#8648 控制台 UI](https://github.com/agentscope-ai/QwenPaw/pull/8648)
4. **#8627 Git 长路径 + 微信通道 `DEPENDENCY_ENVIRONMENT_AMBIGUOUS`**（2 条评论）
   https://github.com/agentscope-ai/QwenPaw/issues/8627

**诉求分析**：讨论集中在两个方向：一是**插件/通道体系在打包版上的可靠性**（安装、依赖环境审计、运行身份校验），二是**本地模型的可观测与可控性**（GPU 是否启用、能否关闭）。这两个方向都指向“用户要能自己判断问题出在哪”。

---

## 5. Bug 与稳定性

按严重程度排列：

### P0 — 功能整体不可用
- **#8644 打包版桌面端所有通道插件无法激活**（2.3.0b3）
  `validate_runtime_identity` 从 `DependencyReadEvidence` 读取 `supported_tags` 触发 AttributeError，进而出现 `WORKER_START_FAILED`，导致 feishu / wechat / yuanbao 全部失效。
  https://github.com/agentscope-ai/QwenPaw/issues/8644
  → 是否已有 fix PR：**未在数据中见到对应修复 PR**（#8627、#8553 属同一通道/依赖审计问题族）。
- **#8616 2.3.0-beta.1 在 Windows 11 IoT LTSC 上无法启动**（报 “path not found”，随后 AppHang；同机 2.2.2 正常）
  https://github.com/agentscope-ai/QwenPaw/issues/8616
  → **未见 fix PR**，属版本间回归。

### P1 — 关键功能失效
- **#8595 插件安装失败**（qwenpaw-creator 安装报 “No package metadata was found”，UI 与 CLI 均失败）
  https://github.com/agentscope-ai/QwenPaw/issues/8595
  → beta.3 发布说明含 `fix(channels)` 修复插件安装/修复失败，**是否覆盖本场景待确认**。
- **#8627 Checkpoint 服务在 Git 长路径前缀下失败 + 微信通道卡在 `DEPENDENCY_ENVIRONMENT_AMBIGUOUS`**（Windows，Beta.2）
  https://github.com/agentscope-ai/QwenPaw/issues/8627 → **未见 fix PR**。
- **#8603 自定义 OpenAI 兼容 provider 上 `run_code` 以空参数调用**（`'code' is a required property`）
  https://github.com/agentscope-ai/QwenPaw/issues/8603 → **未见 fix PR**。
- **#8629 超大历史图片在每次模型调用时重发**，且剥离重试后仍保留误导性的 “Image loaded: <name>” 文案
  https://github.com/agentscope-ai/QwenPaw/issues/8629 → **未见 fix PR**。

### P2 — 体验/正确性缺陷
- **#8521 对话随机无答复 + 复制失效 + 新版 UI 迟缓**（v2.2.2.post1）
  https://github.com/agentscope-ai/QwenPaw/issues/8521 → **未见 fix PR**。
- **#8619 `MemorySpace.search` 对同一命中行重复解析轮次边界**
  https://github.com/agentscope-ai/QwenPaw/issues/8619 → 相关区域有 [#8642](https://github.com/agentscope-ai/QwenPaw/pull/8642)（drivers 陈旧策略发布防护）与 [#8615](https://github.com/agentscope-ai/QwenPaw/pull/8615)（网关上下文溢出 400），**均非直接修复**。
- **#8620 搜索超时后把 SQLite `OperationalError` 吞成 `TimeoutError`**
  https://github.com/agentscope-ai/QwenPaw/issues/8620 → **未见 fix PR**。

### 已关闭
- **#8585** Windows 下 `workspace_dir` 被规范化为 `\\?\` 扩展长度路径，导致 SQLite 只读 URI 失效 — 已关闭。
  https://github.com/agentscope-ai/QwenPaw/issues/8585
- **#8553** QQ 通道因 aliyun-hub 无依赖环境导致 `DEPENDENCY_PLAN_UNVERIFIED` — 已关闭。
  https://github.com/agentscope-ai/QwenPaw/issues/8553
- **#8502** 桌面端 HTML 预览“在浏览器中打开”在中文路径下失效 — 已关闭。
  https://github.com/agentscope-ai/QwenPaw/issues/8502

> 观察：`\\?\` 长路径、通道依赖审计、打包版运行身份三类问题在 #8585、#8553、#8627、#8644 中反复出现，**建议作为 2.3.0 发布前的一个统一修复主题处理**，而非逐个击破。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有对应 PR | 纳入下一版本可能性 |
|---|---|---|---|
| 本地模型引擎选择、GPU offload 可见/可控、运行时自动更新 | [#8646](https://github.com/agentscope-ai/QwenPaw/issues/8646) | [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)、[#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647)、[#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648) 三件套 | **较高**——Issue 与 PR 同日出现，提交者一致，且已按层拆分为可顺序合并的系列 |
| 浏览器标签页标题跟随会话名 | [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605) | 未在数据中见到 | 待观察 |
| 工具调用卡片视觉统一（思考块与工具卡片左缘对齐） | [#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650) | 未在数据中见到 | 待观察 |
| “执行”类工具调用补充意图说明 | [#8612](https://github.com/agentscope-ai/QwenPaw/issues/8612) | [#8638](https://github.com/agentscope-ai/QwenPaw/pull/8638)（为 `execute_shell_command` 增加仅用于展示的 `title`） | **中高**——PR 已提交且改动面小（size/S） |

补充信号：本地 Whisper 转为 SDK 插件、由框架管理生命周期（[#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)，size/XXXL）仍在开放中，属于插件化方向的长期布局。

---

## 7. 用户反馈摘要

**痛点**
- **回答质量不可预期**：用户无法判断“只思考不回答”是模型问题还是产品问题（#8521），说明缺少可诊断的回执信息。
- **UI 效率倒退**：多位用户提到新版 UI 不如旧版高效流畅，明确请求“增加切换回旧版 UI 的按钮”（#8521）。
- **工具执行状态不透明**：执行类工具调用看不出在做什么，长任务中尤其明显（#8612）；步骤列表左侧边缘“一直在跳”，视觉不稳定（#8650）。
- **本地模型状态不透明**：控制台声称“默认使用 CPU”，但 macOS 运行时其实已包含 Metal，用户既看不到 GPU offload 是否生效，也无法在排障时关闭（#8646）。
- **平台兼容性**：中文 Windows 场景反复出现编码与路径问题——GBK/CP936 文件被按 UTF-8 忽略式解码（[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)）、中文路径导致浏览器打开失效（#8502）、长路径前缀导致 SQLite 只读 URI 失效（#8585）。

**满意之处**
- 用户明确肯定了工具卡片“大部分已经是一句人话”，并逐条列举了时间获取、MEMORY.md 预览、文件匹配、文本匹配的良好展示（#8612）——说明可读性方向正确，问题集中在“执行类”工具。

**使用场景画像**
- Windows 11 / Windows 11 IoT LTSC 桌面打包版为主要痛点场景；也有 Linux pip 安装（2 vCPU 小规格）与 macOS Apple Silicon 用户。
- 典型任务：长任务多工具交替执行、单文件 HTML 仪表盘生成与预览、多渠道（飞书/微信/QQ/元宝）接入、本地模型推理。

---

## 8. 待处理积压

以下条目开放时间较长或体量大、需维护者重点关注：

| 条目 | 创建 | 状态 | 备注 |
|---|---|---|---|
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) fix(tools): 用 GBK/CP936 解码替代丢字节 | 2026-10-14 | OPEN, Under Review, size/XXL | 已开放 **26 天**，涉及中文 Windows 高频场景，评审周期偏长 |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) fix(ollama): 按 `num_ctx` 推导上下文窗口 | 2026-10-14 | OPEN, Under Review, size/XL | 同上，已开放 **26 天**；影响本地 Ollama 用户的上下文截断判断 |
| [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431) feat(local whisper): 转为 SDK 插件 | 2026-10-26 | OPEN, size/XXXL | 已开放 **14 天**，体量最大，建议尽早给出分层拆分建议 |
| [#8512](https://github.com/agentscope-ai/QwenPaw/pull/8512) fix(providers): 从错误文本读取网关状态码 | 2026-10-30 | OPEN, size/S | 已开放 **10 天**，改动小但与 #8615 属同一问题域，建议合并评审 |
| [#8542](https://github.com/agentscope-ai/QwenPaw/pull/8542) chore: 更新 v2.3.0 发布说明 | 2026-11-02 | OPEN, size/M | 已开放 **7 天**，与 #8643 的发布验证直接相关，建议优先处理 |
| [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) 无答复 + 复制失效 + UI 迟缓 | 2026-10-31 | OPEN | 4 条评论无 fix PR，属影响面广的体验回归 |

**给维护者的三点建议**
1. 把 #8542（发布说明）与 #8643（安装验证）作为发布闸门优先闭环。
2. 将 #8585 / #8627 / #8644 归纳为“Windows 长路径 + 通道依赖审计 + 打包版运行身份”统一修复主题，避免 2.3.0 带着同类缺陷连发多个 Beta。
3. #8234 / #8236 已超两周未合入，且都是中文 Windows 与本地模型的关键修复，建议明确评审排期或给出反馈。

---

*说明：本日报严格基于所提供的 GitHub 数据生成；PR 评论数字段在原始数据中显示为 `undefined`，故未对 PR 讨论热度做量化排序，仅按规模与相关性呈现。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-09

## 1. 今日速览

项目今日维持高强度开发节奏：24 小时内 Issues 更新 35 条（新开/活跃 28、关闭 7），PR 更新 50 条（待合并 47、已合并/关闭仅 3），合并吞吐明显低于提交量，待审队列持续加压。最突出的健康度信号是 **CI 全面阻塞**：Issue #12320（S1）报告 `Security` 作业因 RUSTSEC-2026-0459 在每次构建中失败，连带的 `CI Required Gate` 一同失败，导致任何 PR 都无法合并、合并队列无法落地——这直接解释了今日仅 3 条 PR 被合并/关闭。另一种显著特征是围绕 PR #12317（zerocode 免配对 OIDC 登录）一夜之间衍生出至少 6 条跟进 Issue（#12330–#12339 区间），显示该变更体积大、审查深、遗留面广。整体判断：**活跃度极高，但合流通道受阻，交付节奏存在短期风险**。

## 2. 版本发布

今日无新版本发布（新版本发布数 0）。无需说明更新内容与迁移事项。

## 3. 项目进展

今日合并/关闭的 PR 仅 3 条，其中可确认的一条重要修复为：

- **PR #12068 [CLOSED] fix(security): stop treating a bare semicolon or pipe as command injection**（runtime, security, risk:medium, release:v0.9.0）
  https://github.com/zeroclaw-labs/zeroclaw/pull/12068
  修复提示词防护的注入规则把任意裸 `;` 或 `|` 视为 shell 构造，导致普通句子、表格、签名与工具输出被误判为 `Suspicious`。该修复直接改善日常交互中的误报体验，并已标记进入 v0.9.0。

**待合并队列规模庞大（47 条）**，其中多条为规模 XL、风险 high 的核心变更，说明管线中有大量工作已接近完成但尚未落库：

- **PR #12317 [OPEN] feat(zerocode): add pairing-free OIDC login and saved remote credentials**（risk:high, size:XL）— 新增 `zerocode login <oidc-alias> <target>`，使未知客户端无需手动获取/导出/复制 bearer token 即可登录远程 daemon。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12317
- **PR #12316 [OPEN] feat(channels): add SimpleX messaging, voice notes, and encrypted calls**（size:XL）— 新增可选 SimpleX 通道，支持文本、原生语音留言与来电加密音频通话。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12316
- **PR #11847 [OPEN] feat(channels): add native Rust XMPP with optional legacy OMEMO**（risk:high, size:XL）— 特性门控的原生 Rust XMPP 实现。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11847
- **PR #12323 [OPEN] fix(config): bind cached HTTP clients to their Tokio runtime**（size:S）— 修复跨 runtime 复用已结束 dispatcher 的 HTTP 客户端问题，是 #11911 的前置依赖。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12323

**评估**：功能面在快速扩张（新通道、新登录路径、语音能力），但今日实际向前推进的净增量主要限于 #12068 一项安全误报修复。若 #12320 不被优先解决，后续交付将持续积压。

## 4. 社区热点

今日讨论最集中的是围绕 zerocode OIDC 变更的跟进链条，而非单一热帖：

- **Issue #12320 [OPEN] [S1] Security job fails on every build: RUSTSEC-2026-0459**（评论 3）
  https://github.com/zeroclaw-labs/zeroclaw/issues/12320
  背后诉求：CI 已成为全项目瓶颈，需要维护者把依赖审计（libsqlite3-sys 0.38.2 / bundled SQLite 3.53.2）升级或豁免决策优先级提到最前。

- **PR #12317 [OPEN] feat(zerocode): pairing-free OIDC login**（size:XL, risk:high）
  https://github.com/zeroclaw-labs/zeroclaw/pull/12317
  背后诉求：简化远程接入，消除手工搬运 bearer token 的摩擦。该 PR 是今日大量衍生 Issue 的源头，反映社区对"免配对接入"的真实需求强烈。

- **Issue #10501 [CLOSED] MCP tool-result images 400 on OpenAI-compatible providers**（评论 3，创建于 2026-08-31）
  https://github.com/zeroclaw-labs/zeroclaw/issues/10501
  背后诉求：MCP 图像结果在 OpenAI 兼容 provider 上被错误提升为 `role:tool` 内的 `image_url` part，导致 400。长期悬置后今日关闭，说明多模态兼容性痛点得到回应。

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻塞**
- **#12320 [OPEN]** `Security` 作业每次构建失败（RUSTSEC-2026-0459，libsqlite3-sys 0.38.2，bundled SQLite 3.53.2），`CI Required Gate` 一同失败，PR 无法合并。**未见 fix PR**。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12320

**S2 — 行为退化**
- **#12330 [OPEN]** zerocode 在 `zerocode-config.toml` 解析失败或读取失败时，丢弃已保存的远程连接并回退到本地 daemon。**未见 fix PR**。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12330
- **#12325 [OPEN]** docs 的 canonical URL 包含 release 目录名，导致每次稳定版发布都会移动全部 canonical 地址。**未见 fix PR**。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12325
- **#12064 [已关闭]** Discord 明文审批可被白名单同类机器人应答（`listen_to_bots = true` 场景）。已收口。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12064

**S3 — 次要问题**
- **#12087 [已关闭]** 工具启停开关自动保存的同时又启用保存按钮，UI 逻辑冲突。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12087
- **#12326 [OPEN]** 被裁剪的文档版本链接落到 GitHub Pages 通用 404（gh-pages 根目录无 `404.html`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12326
- **#12324 [OPEN]** 文档部署使 rustdoc API 树（约 8,742 个 HTML 页面）与各语言 404 页面仍可被索引。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12324

**高风险但已关闭（历史修复落地）**
- **#10359 [CLOSED]** `AuditLogger` 在写入前推进哈希链状态，一次写失败即污染后续校验（risk:high）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10359
- **#11009 [CLOSED]** Agent 别名重命名未级联到权限配置选择器（risk:high）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11009

## 6. 功能请求与路线图信号

- **OIDC 自助设备证书引导需显式开关（默认关闭）** — #12337 [OPEN] [enhancement]
  https://github.com/zeroclaw-labs/zeroclaw/issues/12337
  要求为 #12317 引入的 `POST /api/oidc/{alias}/certificate` 增加运维方 opt-in。判断：属安全收口性质，**很可能与 #12317 一同或紧随纳入**。

- **SimpleX 通道（文本 / 语音留言 / 加密通话）** — PR #12316
  https://github.com/zeroclaw-labs/zeroclaw/pull/12316
  判断：XL 规模、新增可选通道，需审查周期，属于 v0.9.0 之后的候选。

- **原生 XMPP + 可选 legacy OMEMO** — PR #11847，并衍生 #12319（跟踪 `deny.toml` 中受限重复 crate 允许项，待遗留 OMEMO 依赖图可统一后移除）
  https://github.com/zeroclaw-labs/zeroclaw/pull/11847 · https://github.com/zeroclaw-labs/zeroclaw/issues/12319
  判断：与 #12015 存在依赖关系，短期内以清理许可项为主。

- **配对设备语音设置与聊天控件** — PR #12269 [OPEN]（浏览器听写与朗读，配对设备语音偏好）
  https://github.com/zeroclaw-labs/zeroclaw/pull/12269

- **Web 端 Thinking 实时框可固定折叠** — PR #11920 [OPEN]
  https://github.com/zeroclaw-labs/zeroclaw/pull/11920

## 7. 用户反馈摘要

- **误报损伤日常使用**：#12068 的修复说明提示词防护曾将普通句子、表格、签名和工具输出判为 `Suspicious`，这类误报直接制造噪音，用户对"安全规则误伤正常内容"的不满明确。
- **远程接入摩擦**：#12317 及其衍生 Issue 群显示，"手动获取、导出、复制 bearer token"是远程使用 daemon 的主要痛点；同时 #12330 暴露了另一个反向风险——配置文件容错过宽会静默丢弃远程连接并回退本地，用户期望失败可见而非静默降级。
- **多模态兼容**：#10501 中 MCP 工具返回图像在 OpenAI 兼容 provider 上得到 400，反映用户实际在跨 provider 使用带图像的工具结果。
- **多设备/移动端诉求**：SimpleX（#12316）、voice notes 与加密通话、配对设备语音设置（#12269）共同指向"用手机与 agent 对话而不暴露手机号"的场景。
- **文档站体验**：连续三条 docs 相关 Bug（#12325、#12326、#12324）显示用户受困于版本裁剪后的 404、canonical 漂移与可被索引的 API/404 页面，属于低严重度但持续存在的体验损耗。
- **UI 细节**：#12087 的自动保存与保存按钮并存，属交互一致性问题。

## 8. 待处理积压

以下 PR 创建于 2026-10-18 至 10-21，已滞留约三周且今日仍在更新，建议维护者优先排期：

- **PR #11859 [OPEN]** fix(tools): require message content for background send_via calls（size:L，2026-10-19）
  https://github.com/zeroclaw-labs/zeroclaw/pull/11859
- **PR #11868 [OPEN]** fix(agent): stop repeated calls before dispatch and retain closeout（risk:high，needs-maintainer-review，2026-10-19）
  https://github.com/zeroclaw-labs/zeroclaw/pull/11868
- **PR #11869 [OPEN]** feat(tools): add opt-in task-owned SSH transport reuse（size:L，2026-10-19）
  https://github.com/zeroclaw-labs/zeroclaw/pull/11869
- **PR #11846 [OPEN]** feat(config): control OpenRouter balance reporting in web settings（size:XL，2026-10-18）
  https://github.com/zeroclaw-labs/zeroclaw/pull/11846
- **PR #11911 [OPEN]** fix(channels): preserve completed tool results and reuse bounded recovery（size:XL，依赖 #12323，2026-10-20）
  https://github.com/zeroclaw-labs/zeroclaw/pull/11911
- **PR #11933 / #11920 [OPEN]** Web 布局与 Thinking 框的 XS 级小修复（2026-10-21），体量小、易审，适合作为打通 CI 后的快速合流批次。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11933 · https://github.com/zeroclaw-labs/zeroclaw/pull/11920

**提醒**：上述积压多带 `needs-maintainer-review` 或高风险标签，但当前真实阻塞点在 #12320。建议先解除 CI 阻塞，再按"XS → S → L"顺序清空队列，避免 47 条待合并 PR 继续放大审查成本。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*