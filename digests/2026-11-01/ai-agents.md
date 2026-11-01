# OpenClaw 生态日报 2026-11-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-01 16:49 UTC

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

# OpenClaw 项目日报 — 2026-11-01

## 1. 今日速览

OpenClaw 今日维持高活跃度：过去 24 小时共 1000 条 Issue/PR 更新，其中 Issues 新开/活跃 308 条、关闭 192 条，PR 待合并 296 条、合并/关闭 204 条。无新版本发布。议题主体集中在回归类 Bug（Gateway 启动阻塞、会话状态/记忆丢失、鉴权与安全边界）与插件生态的稳定性。P0/P1 标签问题中多项长期开放（最早可追溯至 2026-03），且部分被标记为 "not-repro-on-main" 或 "needs-repro"，说明复现链路尚未打通。整体看，社区输入量远超合并吞吐，维护侧压力显著，积压治理是当前健康度的主要风险点。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 以小型修复与清理为主，尚缺大型功能落地：

- **#190526 [CLOSED]** `fix(x): bound oversized API and media responses` — 为 X API 与媒体上传响应设置 16 MiB 上限，修复 Gateway 无界缓冲导致的内存膨胀；取代 #167068。属安全/稳定性加固。
  https://github.com/openclaw/openclaw/pull/190526
- **#190497 [CLOSED]** `fix: preserve MEMORY.md when Doctor merges fail` — 修复 `openclaw doctor` 在合并写入失败（崩溃/Ctrl-C/ENOSPC/EPERM）时清空或撕裂 `MEMORY.md`，防止持久记忆被静默破坏（关联 #187291）。
  https://github.com/openclaw/openclaw/pull/190497
- **#187291 [CLOSED]** `fix: doctor memory merge can empty MEMORY.md when the merge write fails` — 同一记忆安全问题的原始修复。
  https://github.com/openclaw/openclaw/pull/187291
- **#190405 [CLOSED]** `fix(ui): show one-shot automation times as today/tomorrow/date` — 改善 Control UI 中一次性自动化的时间展示。
  https://github.com/openclaw/openclaw/pull/190405
- **#190501 [CLOSED]** `refactor(test): share Vitest project inclusion rules` — 测试基础设施去重，无行为变更。
  https://github.com/openclaw/openclaw/pull/190501
- **#167068 [CLOSED]** `fix(x): X API JSON responses can unbounded-buffer the Gateway` — 上述 #190526 的前身，已由新 PR 取代关闭。
  https://github.com/openclaw/openclaw/pull/167068

**推进幅度评估：** 今日合入以"止血型"修复为主，覆盖记忆安全、X 通道内存上限和 UI 细节。尚待合并队列中仍有大量 P0/P1 修复（见第 5 节），整体功能面未出现明显前移。

## 4. 社区热点

- **#160959 [OPEN, P0, 🦞 diamond lobster] Gateway 捕获大型外部插件时事件循环阻塞数分钟**（67 评论，最高热度）— 自 #144252 插件生成捕获机制在 2026.9.6 发布后，带大依赖树的外部/工作区插件会导致 Gateway 启动阻塞数分钟。社区关注度极高但当前无 fix PR。
  https://github.com/openclaw/openclaw/issues/160959
- **#42475 [CLOSED, P2] 网关层按 agent 的成本预算强制（日/月上限）**（29 评论，👍1）— 诉求是「在派发模型调用前于网关层拦截超支」，避免依赖外部监控。关闭状态但被标记为 "needs-product-decision"，反映成本治理是明确的运维痛点。
  https://github.com/openclaw/openclaw/issues/42475
- **#153426 [OPEN, P0, 🦞 diamond lobster, needs-security-review] 精选记忆根（MEMORY.md/USER.md）被 provenance ratchet 静默永久排除**（16 评论，👍2）— 一次普通 web-search 回合即可将 `originClass` 置为 `"untrusted"`，此后记忆不再注入 bootstrap，且无诊断、无 CLI、无恢复路径。属"静默数据损失 + 安全语义"双重问题，社区高度关切。
  https://github.com/openclaw/openclaw/issues/153426
- **#67413 [OPEN, P2] 按 agent 的 dreaming 配置**（15 评论，👍5，今日点赞最高）— 当前 memory-core dreaming 在所有工作区同一 cron 内并发，导致内存峰值超 MemoryMax (6GB) 并触发 OOM。用户希望可逐个 agent 调度。
  https://github.com/openclaw/openclaw/issues/67413
- **#76493 [OPEN, P2, 🦞 diamond lobster, needs-security-review] 允许 `mcp.servers[].env` 使用 SecretRef 对象**（13 评论，👍5）— 当前 schema 仅接受 `string|number|boolean`，导致遵循密钥间接引用最佳实践的运维方被迫明文注入密钥。
  https://github.com/openclaw/openclaw/issues/76493

**诉求归纳：** 社区讨论重心已从"缺功能"转向"运维可控性"——成本上限、密钥管理、记忆持久性与调度隔离，均为生产部署场景的刚需。

## 5. Bug 与稳定性

**P0 / 崩溃与数据丢失：**

- **#160959** Gateway 启动时事件循环阻塞数分钟（2026.9.6 回归）。无 fix PR，需维护者评审。
  https://github.com/openclaw/openclaw/issues/160959
- **#153426** 记忆根被 provenance ratchet 永久排除，静默无恢复。无 fix PR，需安全评审。
  https://github.com/openclaw/openclaw/issues/153426
- **#166634** `Late reclamation commit checkpoint failure leaves agent unavailable after crash recovery` — 崩溃恢复后 `SQLite session reclamation commit checkpoint expired`，agent 永久拒绝 `chat.history`/`chat.metadata`/`models.list` 等调用。标记 not-repro-on-main，需复现。无 fix PR。
  https://github.com/openclaw/openclaw/issues/166634
- **#137177** 内置 `@wecom/wecom-openclaw-plugin@2026.7.2` 无法安装。无 fix PR。
  https://github.com/openclaw/openclaw/issues/137177
- **#123009 [CLOSED]** 原生 Codex 订阅每五分钟被重新检查并触发封锁（当前 main 可复现），已关闭。
  https://github.com/openclaw/openclaw/issues/123009

**P1：**

- **#167557** 延迟插件数据/设置迁移永不收敛（Linux/npm），包恢复报 "managed handoff lease database identity changed"（2026.9.7→2026.9.8 升级后）。标记 fix-shape-clear 但无 fix PR。
  https://github.com/openclaw/openclaw/issues/167557
- **#167876** Talk 咨询在会话建立完成后丢失调用方权限，provider 后续调用 agent 咨询时失败。需安全评审，无 fix PR。
  https://github.com/openclaw/openclaw/issues/167876
- **#128140** `memory_search` 工具恒 15 秒超时，而 CLI `openclaw memory search` 正常。需 live repro，无 fix PR。
  https://github.com/openclaw/openclaw/issues/128140
- **#177909** transcript 幂等性冲突被误判为模型失败，触发跨 provider 回退链（2026.10.5）。已有 linked PR 开放。
  https://github.com/openclaw/openclaw/issues/177909
- **#190473 [PR, P1]** `fix(sandbox): unblock tool-free model setup with browser enabled` — 修复启用沙箱浏览时模型凭据设置在发起模型请求前失败。标记 security-review-required、等待作者，**这是上述问题中最接近落地的 P1 修复**。
  https://github.com/openclaw/openclaw/pull/190473

**P2 / 行为类：**

- **#53408** 长对话（15+ 轮重工具使用）后 `write`/`exec` 工具参数被静默丢弃（16 评论，👍2）。stale。
  https://github.com/openclaw/openclaw/issues/53408
- **#164394** Control UI WebChat 滚动到历史中段时持续微幅上下抖动。
  https://github.com/openclaw/openclaw/issues/164394
- **#177094** 系统通知投递镜像使本轮最后回答被折叠进工具步骤（重启/重载后）。已有 linked PR。
  https://github.com/openclaw/openclaw/issues/177094
- **#172969** `registerCliBackend` 缺 `modelProvider` 时被静默丢弃，错误暴露为 "Invalid URL: must be http or https"。
  https://github.com/openclaw/openclaw/issues/172969
- **#138561** `active-memory` 插件在 2026.8.2 升级后停止召回，info 日志无任何信号。标记 needs-info。
  https://github.com/openclaw/openclaw/issues/138561

**今日已关闭的 P2：** #140723（WebChat 助手文本重复 ×2–×3）、#52184（macOS LaunchAgent 偏好 Volta shim 路径）、#56781（compaction/LCM summaryModel 回退链）、#122019（`openclaw update status` 未评估插件可解析性与迁移风险）、#42408（memory_search 质量因 path drift + 基准文件污染而看似不稳）。
https://github.com/openclaw/openclaw/issues/140723 · https://github.com/openclaw/openclaw/issues/52184 · https://github.com/openclaw/openclaw/issues/56781 · https://github.com/openclaw/openclaw/issues/122019 · https://github.com/openclaw/openclaw/issues/42408

**趋势判断：** 多个 regression 源自 2026.8–10 的连续升级（记忆系统、插件捕获、CLI 后端绑定），且集中在"静默失败"模式——无日志、无诊断、无恢复入口。这比崩溃更伤害可维护性。

## 6. 功能请求与路线图信号

**较可能进入下一版本（已有明确修复形态或关联 PR）：**

- **记忆安全加固** — 已连续合入 #187291/#190497，`MEMORY.md` 写入失败保护已落地；与其同源的 #153426（provenance ratchet 排除精选记忆根）仍是 P0 空白，是下一个高价值目标。
  https://github.com/openclaw/openclaw/issues/153426
- **沙箱内模型凭据设置** — PR #190473 已就绪，等待作者回应与安全评审，若推进将解除 `browser` 启用下的配置阻塞。
  https://github.com/openclaw/openclaw/pull/190473
- **通道健壮性** — #190518（pinned 消息 `--limit` 未生效，涵盖 Discord/Matrix/Teams/Slack）、#190515（Feishu 反应在缺失 chat type 时消失）、#190521（Telegram 嵌套列表间距）、#190522（macOS 节点宿主版本被误标为 UI 版本）均为当日新开、体积小，属快速通道候选。
  https://github.com/openclaw/openclaw/pull/190518 · https://github.com/openclaw/openclaw/pull/190515 · https://github.com/openclaw/openclaw/pull/190521 · https://github.com/openclaw/openclaw/pull/190522

**需求明确但尚无实现：**

- **网关层成本预算强制**（#42475）— 已关闭且标记 needs-product-decision，属产品决策项而非技术阻塞。
  https://github.com/openclaw/openclaw/issues/42475
- **按 agent 的 dreaming 调度**（#67413）— 直接关联内存 OOM，社区👍5，是 memory-core 的显式扩展点。
  https://github.com/openclaw/openclaw/issues/67413
- **`mcp.servers[].env` 支持 SecretRef**（#76493）— 安全最佳实践诉求，需安全评审。
  https://github.com/openclaw/openclaw/issues/76493
- **Dreams 页由记忆槽位所有者驱动**（#138366）— 让 `plugins.slots.memory` 持有者提供 dreaming provider，补齐 Control UI Dreams 标签的数据源。
  https://github.com/openclaw/openclaw/issues/138366
- **CLI 后端尊重 `tools.toolSearch`**（#139477）— 当前 loopback MCP 配置硬编码 `alwaysLoad: true`，导致每轮 prompt 膨胀、`tools.toolSearch` 失效。
  https://github.com/openclaw/openclaw/issues/139477
- **Review 文件查看器支持 Markdown 渲染预览**（#128090，👍4）
  https://github.com/openclaw/openclaw/issues/128090
- **Linux aarch64 官方伴侣构建（deb + AppImage）** — #138279 已关闭（stale/needs-product-decision），但平台覆盖缺口仍存在。
  https://github.com/openclaw/openclaw/issues/138279

## 7. 用户反馈摘要

**真实痛点：**

1. **"静默失败"占据主导。** 用户在 #153426、#53408、#172969、#138561 中反复描述同一形态：功能失效但无日志、无告警、无 CLI 入口可查。特别是 #138561 中"两天零召回记录，info 级日志毫无信号"，以及 #53408 中"长对话后 `write`/`exec` 参数全部消失"，用户难以定位是自身用法还是产品缺陷。
2. **升级风险不可评估。** #122019 指出 `openclaw update status` 只报告核心可更新，不检查本地已配置插件能否解析、是否有不可逆迁移——用户在"升级前无法预判后果"。
3. **长会话状态脆弱。** #53408（15+ 轮后工具参数丢失）、#128140（memory_search 恒超时）、#137613（CLI 后端上 pre-compaction 记忆落盘被 `ownsNativeCompaction` 关掉，长生命周期 CLI 会话从不写持久笔记）共同指向：会话越长，可靠性越差。
   https://github.com/openclaw/openclaw/issues/137613
4. **多端 UI 细节损耗信任。** #164394 的持续抖动、#137508（移动端键盘弹出后内容被遮挡、顶部筛选标签占用过多空间，设备 LIO AN00/Android）、#124759（iOS 开启"显示推理与工具活动"后严重卡顿，iOS 26.5.2 + 远程 wss 网关）——多为"非崩溃但影响日常使用"的体验问题。
   https://github.com/openclaw/openclaw/issues/137508 · https://github.com/openclaw/openclaw/issues/124759
5. **运维成本与密钥治理是生产绊脚石。** #42475 希望网关层拦截 runaway spend；#76493 指出现有 schema 迫使运维方明文传密钥，与 `openclaw` 的密钥间接引用最佳实践自相矛盾。

**场景特征：** 高频出现的外部环境包括 macOS + Volta（#52184）、Linux/npm 升级路径（#167557）、Windows + Cloudflare Tunnel 远程网关（#124759）、企业 IM 通道（WeCom #137177、Feishu、Telegram、Slack）。

**评价倾向：** 未见针对具体功能的正面反馈；关闭事件中的 stale 标签（今日关闭的 P2 中绝大多数携带 `stale`）可能使部分真实诉求在未解决的情况下被归档，需留意用户情绪。

## 8. 待处理积压

**长期未响应的高重要性 Issue（创建至今约 7–8 个月）：**

- **#42475**（2026-03-10 创建，P2，已 CLOSED 但 carried `needs-product-decision`）— 成本预算强制，29 评论。产品侧需给出明确取舍。
  https://github.com/openclaw/openclaw/issues/42475
- **#53408**（2026-03-24，P2，OPEN，stale）— 长对话后工具参数静默丢失，👍2，需 maintainer review + info。此类数据损坏型问题不宜长期 stale。
  https://github.com/openclaw/openclaw/issues/53408
- **#56781**（2026-03-29，已关闭）— compaction / LCM `summaryModel` 回退链缺失，模型限流时 compaction 静默失败、会话无限增长。
  https://github.com/openclaw/openclaw/issues/56781
- **#67413**（2026-04-15，P2，OPEN）— 按 agent 的 dreaming 配置，👍5（今日最高），需 product decision。
  https://github.com/openclaw/openclaw/issues/67413
- **#76493**（2026-05-03，P2，OPEN）— SecretRef in `mcp.servers[].env`，👍5，需 security review。
  https://github.com/openclaw/openclaw/issues/76493

**中长期 P0/P1 未闭环：**

- **#160959**（2026-09-29，P0）— 今日最高热度却无 fix PR，且回归已随 2026.9.6 出货，建议优先排期。
  https://github.com/openclaw/openclaw/issues/160959
- **#137177**（2026-09-03，P0）— 内置 WeCom 插件无法安装，影响企业通道接入。
  https://github.com/openclaw/openclaw/issues/137177
- **#128140**（2026-08-23，P1）— `memory_search` 恒超时，标记 needs-live-repro，需具备 live 环境的维护者介入。
  https://github.com/openclaw/openclaw/issues/128140
- **#166634**（2026-10-07，P0）— 崩溃恢复后 agent 永久不可用，标记 not-repro-on-main，复现门槛阻碍推进。
  https://github.com/openclaw/openclaw/issues/166634

**待合并大型 PR：**

- **#187440 [OPEN, size: XL]** `fix: bound reloadable chat history` — 约束长会话常驻历史并淘汰投影/展示缓存中的废弃正文；标记 merge-risk 🚨 other、等待作者。与 #53408 反映的长会话问题同源，值得优先推动。
  https://github.com/openclaw/openclaw/pull/187440
- **#189668 [OPEN, size: XL]** `feat: opt in to disk-authoritative repository workspaces` — 依赖 #189437，尚未落地。
  https://github.com/openclaw/openclaw/pull/189668

---

**健康度小结：** 输入吞吐健康（今日 396 条状态变更），响应侧的"决策瓶颈"明显——多个 diamond-lobster 级问题卡在 `needs-product-decision` / `needs-security-review` / `needs-live-repro` 而非技术实现。建议维护者优先为 #160959 与 #153426 指定 owner，并对 5 项 3–5 月创建的高赞需求给出"接受/拒绝"的明确结论，以降低 stale 归档带来的信任损耗。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-11-01）

## 1. 生态全景

今日生态整体呈"高输入、低吞吐"格局：OpenClaw、Hermes Agent、ZeroClaw 三条主线维持每日数十至上千条更新，但合并/关闭量远低于新增量，决策瓶颈而非实现能力成为健康度主要约束。社区诉求已从"缺功能"整体转向"运维可控性"——成本上限、密钥治理、记忆持久性、会话可恢复性、权限边界成为跨项目共同话题。同时多个回归源自 2026.8–10 的连续升级，且多为**静默失败**模式（无日志、无诊断、无恢复入口），比崩溃更伤可维护性。生态分层明显：头部项目在经受规模化生产负载考验，尾部或轻量项目则停留在功能补齐与渠道适配阶段。

## 2. 各项目活跃度对比

| 项目 | Issues 动态 | PR 动态 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 308 活跃 / 192 关闭（共 1000 条 Issue/PR 更新） | 296 待合并 / 204 合并关闭 | 无 | 输入吞吐健康，但决策瓶颈明显；多项 P0/P1 卡在 needs-product-decision / needs-security-review / needs-live-repro |
| **Hermes Agent** | 49 活跃 / 1 关闭（50 条更新） | 49 待合并 / 1 合并关闭 | 无 | 偏紧，消化能力不足；积压集中 P1/P2 会话与安装路径 |
| **ZeroClaw** | 5 活跃 / 4 关闭（9 条变动） | 39 待合并 / 7 合并关闭 | 无 | 高活跃、闭环快，但待合并积压比例约 5.6:1，评审带宽是瓶颈 |
| **CoPaw** | 5 活跃 / 0 关闭 | 17 待合并 / 1 关闭 | 无 | 中等偏低，修复管线在动、合并偏慢；多项已有 fix PR 未落地 |
| **NanoClaw** | 0 | 5 待合并 / 1 关闭 | 无 | 中性偏积极，开发节奏在，但 Issue 零互动、评审吞吐待察 |
| **NanoBot** | 2 条动态 | 3 待合并 / 0 合并 | 无 | 平稳但合并节奏偏慢，长周期 PR 落地风险 |
| **NullClaw** | 1 新开（#1085） | 2 待合并 / 0 合并 | 无 | 平稳；单一搜索路径功能阻断，同日已有 fix PR，闭环清晰 |
| **PicoClaw** | 0 | 3 条变动（2 关闭 / 1 待合并） | 无 | 偏低；3 个 PR 全带 stale 标记，响应链路延迟 |
| IronClaw / LobsterAI / TinyClaw / Moltis / ZeptoClaw | 无活动 | 无活动 | 无 | 无活动 |

> 注：各项目均无新版本发布；OpenClaw 的 1000 条为 Issue/PR 合计更新量。

## 3. OpenClaw 在生态中的定位

**规模优势显著。** OpenClaw 单日 1000 条 Issue/PR 更新，量级约为第二梯队（Hermes Agent 100 条、ZeroClaw 55 条）的 10–20 倍，社区输入吞吐在生态中无可比者。这一规模带来两个后果：一方面议题覆盖最广（记忆系统、插件捕获、CLI 后端、多企业 IM 通道、Control UI、桌面端），另一方面**响应侧压力被放大**——多个 diamond-lobster 级问题卡在决策环节而非技术实现。

**技术路线差异。** 相比 Hermes Agent 正在进行的"统一网关 + 会话权威"架构切换（#106742 合并后遗留问题追踪 #143547），OpenClaw 的痛点集中在**记忆语义与插件隔离**：provenance ratchet 静默排除精选记忆根（#153426）、插件捕获导致 Gateway 启动阻塞数分钟（#160959）、`mcp.servers[].env` 强制明文密钥（#76493）。这说明 OpenClaw 的记忆/插件子系统已进入深度生产使用阶段，暴露的是**语义正确性**问题，而非架构未收敛问题。

**成熟度定位。** OpenClaw 已越过"功能补齐"阶段，社区讨论重心是成本预算强制、密钥间接引用、按 agent 调度隔离等生产运维刚需——这是成熟项目的典型信号。但其 stale 归档策略（今日关闭的 P2 多数带 stale）可能使真实诉求在未解决情况下被归档，需留意信任损耗。

## 4. 共同关注的技术方向

**（1）静默失败与状态可信度 —— 最普遍的跨项目痛点**

- OpenClaw：#153426（记忆根静默排除）、#53408（长对话后工具参数静默丢失）、#172969（CLI 后端静默丢弃）、#138561（active-memory 停止召回无日志）
- CoPaw：#8500（Auto-Dream 丢弃记忆仍报 `success=True`）、#8184（doom-loop 误杀合法轮询且 cron 记假成功）
- ZeroClaw：#10843（Telegram 反应接口缺失致工具虚假上报成功）、#12175（personality 编辑器误导文案）
- PicoClaw：#3442（cron 失败仍记 `lastStatus: ok`）、#3443（Telegram 格式丢失）

共同诉求：功能失效时应有日志、诊断入口与如实的成功/失败上报，而非"看似正常实则不可用"。

**（2）记忆与会话持久性**

- OpenClaw：#190497/#187291（Doctor 合并失败保护 MEMORY.md）、#153426、#137613（长生命周期 CLI 会话从不写持久笔记）、PR #187440（约束长会话常驻历史）
- Hermes Agent：#139818 / #147600 / #143333（三条路径致会话"看似在、实则不可恢复"）、PR #71402 / #86777（跨重启通知去重与会话谱系投影）
- NanoBot：#5747（多工具批处理边界检查点语义失真，崩溃恢复不准确）

**（3）权限边界与多 agent 安全隔离**

- ZeroClaw：#12167（`send_message_to_peer` 不检查 autonomy level、不计 action budget）、#12169（headless SOP 步骤脱离工具作用域）
- OpenClaw：#76493（SecretRef 支持）、#153426（provenance 安全语义）、#167876（Talk 咨询丢失调用方权限）
- Hermes Agent：#139727（openai-codex 并发刷新致凭据覆盖）

**（4）成本治理与调度隔离**

- OpenClaw：#42475（网关层成本预算强制）、#67413（按 agent 的 dreaming 调度，内存峰值超 6GB 触发 OOM）
- ZeroClaw：#12176（MCP 工具顺序随机致 prompt 缓存失效，成本敏感）
- CoPaw：#8523（任务排程，把 Agent 纳入团队周计划）

**（5）渠道一致性与协议兼容**

- NullClaw：#1085（Exa 搜索重复 Content-Type 致全线失败）
- NanoBot：#6534（Signal 音频未转写，其他渠道已接入）
- CoPaw：#8424（legacy MCP 服务器无法回退）、#8319（QQ 群消息丢弃）、#8304（Matrix 凭据空白字符）
- OpenClaw：PR #190518/#190515/#190521/#190522（Discord/Matrix/Teams/Slack/Feishu/Telegram 通道健壮性）

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | CoPaw | NanoClaw / PicoClaw / NullClaw / NanoBot |
|---|---|---|---|---|---|
| **功能侧重** | 全能型个人助手 + 插件生态 + 记忆系统 | 桌面/CLI/TUI/移动多入口统一网关 | 安全加固 + 多渠道 + ACP/会话 | Agent 工作流 + 市场插件 + MCP | 单体渠道适配/轻量部署（Telegram、provider 接入、本地化） |
| **目标用户** | 生产级个人部署与运维方 | 单机自托管、规模化多会话用户 | 服务器/最小化部署 + 安全敏感场景 | NAS/受限环境 + 团队排程用户 | 轻量试用、特定渠道用户 |
| **技术架构特征** | 插件捕获机制 + 精选记忆根 + provenance 语义 | 统一网关进程（CLI/TUI/Desktop/API/cron 收拢） | gateway + ACP bridge + dashboard，可选 OIDC | Tauri 桌面 + MCP + Auto-Dream 记忆 | 单进程 + 适配器层，provider 扩展 |
| **当前主要矛盾** | 语义正确性与决策瓶颈 | 架构切换后会话权威与性能退化 | 评审带宽与权限收敛 | 受限部署可运行性 | 合并节奏与渠道对齐 |

关键差异：**OpenClaw 与 Hermes Agent 均在处理"规模化后"的问题，但方向不同**——前者是记忆/插件语义深度，后者是入口统一后的会话生命周期一致性；**ZeroClaw 与 CoPaw 更聚焦安全/部署边界**；尾部项目仍在补齐渠道与 provider 基础能力。

## 6. 社区热度与成熟度

**第一梯队（快速迭代 + 高压力）**：OpenClaw、Hermes Agent、ZeroClaw。三者 PR 待合并量（296 / 49 / 39）均显著高于合并量，处于功能快速演进与积压并存的阶段；ZeroClaw 当日 issue→PR 当日闭环（#12176→#12177）体现响应效率，但整体积压比例偏高。

**第二梯队（质量巩固为主）**：CoPaw、NanoClaw。CoPaw 待合并 17 : 关闭 1，多项已有 fix PR 未落地（#8424/#8445、#8515/#8525+#8527），处于"修复已成形、合入偏慢"的巩固期；NanoClaw 5 条带修复性质 PR 待合并，Issue 零互动，侧重频道适配层稳定化。

**第三梯队（低活跃/维护期）**：NanoBot、NullClaw、PicoClaw。NanoBot 合并量为 0、热点分散；NullClaw 单日一报一修闭环清晰但体量小；PicoClaw 3 个 PR 全带 stale 标记，反映响应链路延迟。

**无活动**：IronClaw、LobsterAI、TinyClaw、Moltis、ZeptoClaw 过去 24 小时无动态，难以评估当前状态。

## 7. 值得关注的趋势信号

1. **"静默失败"成为生态级质量红线。** 至少 6 个项目（OpenClaw、CoPaw、ZeroClaw、PicoClaw、NanoBot、Hermes Agent）的社区反馈指向同一形态：功能失效但无日志、无告警、无 CLI 入口。对开发者的参考价值：**可观测性应从"崩溃日志"扩展到"语义级成功/失败如实上报"**，包括 cron 状态、工具调用结果、记忆写入、权限拒绝等。

2. **升级风险不可评估是普遍焦虑。** OpenClaw #122019（`update status` 不检查插件可解析性与不可逆迁移）、Hermes #102540（`hermes update` 变慢且提示无信息量）、ZeroClaw #12154（版本号显示错误）共同指向：**升级前的兼容性预检与迁移可逆性**是待补的基础设施，而非边缘体验。

3. **权限模型正从"单 agent"走向"多 agent 协作边界"。** ZeroClaw 连续两条 issue（#12167、#12169）指出 agent 间通信绕过作用域/预算/autonomy level，OpenClaw 与 Hermes 亦有同类信号。**agent-to-agent 通信的权限收敛与预算计量**可能成为下一阶段架构设计的重点。

4. **成本敏感度上升，prompt 缓存稳定性被纳入工程要求。** ZeroClaw #12176（MCP 工具顺序随机致缓存失效）与 OpenClaw #42475（网关层成本预算拦截）显示：用户已在生产环境依赖缓存与预算控制，**确定性输出（排序、幂等）与成本护栏**是新增的工程指标。

5. **多字节/本地化场景进入规模使用。** ZeroClaw #12173（`split_markdown_chunks` 在多字节 UTF-8 字符内部 panic，影响 Lark/Feishu 中文卡片）、NullClaw #1087（繁体中文完整文档）、CoPaw #8526（新装默认语言）表明非英文市场已具备实际负载，**UTF-8 边界处理与本地化文档**不再是可选项。

6. **维护者决策带宽成为生态健康度的核心变量。** 多个高价值问题（OpenClaw #160959、#153426；Hermes #79087；CoPaw #8500；ZeroClaw #12167/#12169）卡在 `needs-product-decision` / `needs-security-review` / `needs-live-repro` 而非技术实现。对贡献者与用户的参考价值：**明确的产品取舍与 owner 指派**比新增功能更能稳定生态预期，stale 自动归档若缺乏分流机制，将持续损耗信任。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-01

> 数据来源：HKUDS/nanobot GitHub 活动（过去 24 小时）。今日无版本发布、无 PR 合并，活跃度以维护性讨论为主。

---

## 1. 今日速览

项目今日处于“低产出、高讨论”状态：24 小时内无新版本、无 PR 合并/关闭，仅 3 个 PR 保持待合并（OPEN）、2 个 Issue 有新动态。活动集中在 3 位外部贡献者的功能与测试提案上，维护侧未见合入动作，积压呈持续累积趋势。整体健康度平稳，但合并节奏偏慢，需关注长周期 PR 的落地风险。

---

## 2. 版本发布

今日无新版本发布，本节省略。

---

## 3. 项目进展

今日无已合并或已关闭的 PR，代码主线无向前推进。

- 3 个待合并 PR 今日均有更新（#6317、#6351、#6446），仍处于等待评审状态，尚未产生可交付的功能增量。
- 结论：项目今日在“合并维度”上零前进，进展主要体现在提案打磨与测试补全，而非主干能力扩展。

---

## 4. 社区热点

按互动量排序：

1. **Issue #5747** — Recovery: persist completed tool results at execution-batch boundaries（3 条评论，今日唯一有实质讨论的条目）
   [HKUDS/nanobot Issue #5747](HKUDS/nanobot Issue #5747)
   诉求核心：多工具响应场景下存在崩溃一致性窗口——工具 A 完成、B 开始、网关在 C 执行前崩溃时，持久化检查点可能仍记录全部完成状态，导致恢复语义不准确。属运行时可靠性的深层设计问题，讨论持续近两个月（创建 2026-09-12），说明方案尚未收敛。

2. **PR #6317 / #6351 / #6446** — 均无评论数据（undefined），👍 均为 0，社区关注度低，主要为作者单方面推进。
   - [PR #6317](HKUDS/nanobot PR #6317)：为 `web_fetch` 增加续读偏移量
   - [PR #6351](HKUDS/nanobot PR #6351)：补全 Seatbelt 拒绝命令的退出码断言
   - [PR #6446](HKUDS/nanobot PR #6446)：新增 Runcrate 提供商

3. **Issue #6534** — Signal 音频附件自动转写（0 评论，当日新建）
   [HKUDS/nanobot Issue #6534](HKUDS/nanobot Issue #6534)

> 分析：热点极度分散，缺乏维护者参与的集中讨论，社区信号偏弱。

---

## 5. Bug 与稳定性

今日无明确报告的崩溃/回归类 Bug，但存在一项**稳定性隐患级**议题：

| 严重程度 | 条目 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| 中高（一致性缺陷，需特定时序触发） | Issue #5747：多工具批处理边界处检查点记录不准确，网关崩溃后恢复状态可能错误 | OPEN，讨论中 | 无 |
| 低（测试覆盖缺口，非运行缺陷） | PR #6351：现有 Seatbelt 测试未断言被拒绝命令以非零码退出，属验证盲区 | OPEN | 本身即测试补丁 |

[Issue #5747](HKUDS/nanobot Issue #5747) · [PR #6351](HKUDS/nanobot PR #6351)

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 关联 PR | 纳入下一版本的判断依据 |
|---|---|---|---|
| 多工具执行的崩溃一致性恢复 | Issue #5747 | 无 | 涉及运行时检查点设计，影响面大且讨论周期已近 2 个月，预计需专门设计迭代，短期难落地 |
| 分页 / 偏移量式网页抓取（`web_fetch` 续读） | PR #6317 | 自身即实现（documentation, feature, test, p2） | 已带测试与文档、标记 p2，具备合入条件，**较可能近期纳入** |
| Signal 语音/音频附件自动转写 | Issue #6534 | 无 | 复用现有转写服务、改动面小，**具备快速实现条件**，但需先有贡献者接单 |
| Runcrate 作为 OpenAI 兼容提供商 | PR #6446 | 自身即实现（new-provider, p2） | 遵循 Novita AI 既有接入模式，**落地路径清晰**，是三者中最易合入的扩展类改动 |

---

## 7. 用户反馈摘要

- **可靠性痛点（#5747）**：用户关注崩溃恢复的精确性，认为当前检查点在“部分工具已完成”的中间态下语义失真，反映对生产级鲁棒性的真实需求。
- **渠道体验不一致（#6534）**：用户指出 Signal 的语音消息以文件路径形式直接传入智能体而未转写，而其他渠道已接入转写服务——这是**渠道间能力不对齐**的典型不满，用户期待一致的语音交互体验。
- **抓取能力延伸（#6317 作者视角）**：长文本抓取需要分段续读，同时要求保留不可信内容横幅与既有图片/网络策略不变，体现细粒度控制需求。
- 今日无新评论产生正面/负面满意度反馈数据（#6534 新建 0 评论，三个 PR 评论数未记录）。

---

## 8. 待处理积压

按存续时长提醒维护者关注：

1. **Issue #5747** — 创建 2026-09-12，已存续约 7 周，3 条评论，无对应 fix PR。核心运行时一致性问题，长期悬置风险最高。
   [Issue #5747](HKUDS/nanobot Issue #5747)
2. **PR #6317** — 创建 2026-10-19，存续约 2 周，p2 优先级，带测试与文档，评审停滞。
   [PR #6317](HKUDS/nanobot PR #6317)
3. **PR #6351** — 创建 2026-10-20，测试类补丁，改动小、风险低，适合快速合入以提升安全测试置信度。
   [PR #6351](HKUDS/nanobot PR #6351)
4. **PR #6446** — 创建 2026-10-24，新提供商接入，属生态扩展，停滞影响第三方贡献者积极性。
   [PR #6446](HKUDS/nanobot PR #6446)
5. **Issue #6534** — 当日新建，尚无回应，建议尽快给出采纳或分流意见以维持反馈闭环。
   [Issue #6534](HKUDS/nanobot Issue #6534)

---

**健康度提示**：今日合并量为 0，而积压中有 3 个 p2 级 PR 与 1 个长周期可靠性议题，建议维护者优先合入低风险测试补丁（#6351）与成型的 provider 接入（#6446），并对 #5747 给出明确的设计方向，以稳定外部贡献者的预期。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-11-01）

## 1. 今日速览

今日项目维持高位活跃：过去 24 小时共有 50 条 Issue 和 50 条 PR 更新，其中 Issue 新开/活跃 49 条、关闭 1 条；PR 待合并 49 条、合并/关闭 1 条，合并率极低。讨论集中在会话状态一致性（session.resume / not_found）、统一网关（#106742）合并后的遗留问题，以及桌面端在 Windows/Linux 上的适配缺陷。整体健康状况偏紧：积压上升快于消化速度，且多个 P1/P2 问题涉及会话不可恢复——这是对用户信任影响最大的类别。今日无新版本发布。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭量极低（PR 1 条、Issue 1 条），可观察到的主要推进信号来自待审 PR 的修复方向：

- PR #147581 [OPEN]：桌面侧边栏在渲染重载/网关重连后正确显示运行中的子智能体与后台任务，关联 #143077、#137847。
  https://github.com/NousResearch/hermes-agent/pull/147581
- PR #147325 [CLOSED]：修正 `archived=only` 会话列表错误回填活跃 pinned 会话的问题。
  https://github.com/NousResearch/hermes-agent/pull/147325
- PR #147610 [OPEN]：保留 `delegation.backends.model_map` 的可选无默认值状态，避免编辑路由时静默改写子智能体模型，Fixes #146760。
  https://github.com/NousResearch/hermes-agent/pull/147610
- PR #147601 [OPEN]：安全模式 worker 加载内置 provider 配置，修正其请求构造与常规会话不一致的问题。
  https://github.com/NousResearch/hermes-agent/pull/147601
- PR #145622 [OPEN]：将无凭据的裸 `custom` 请求修复到服务其模型的具名条目，Closes #145614。
  https://github.com/NousResearch/hermes-agent/pull/145622

总体看，今日进展以“修补网关/桌面一致性”为主，尚无迹象表明统一网关遗留问题已系统性收敛（见 #143547、#145171）。

## 4. 社区热点

- #139818 [OPEN][P2] 远程后端桌面会话无法在本地桌面恢复，`session.resume` 返回 `not_found`。评论 37、👍3，今日讨论最热。
  https://github.com/NousResearch/hermes-agent/issues/139818
- #143547 [OPEN][P2] 统一网关 #106742 合并后在 main 上的遗留问题追踪（CLI/TUI/Desktop/API/cron 等全部收拢到单一网关进程后的问题集合）。评论 31。
  https://github.com/NousResearch/hermes-agent/issues/143547
- #79087 [OPEN][P1] Windows 桌面：runtime probe 超时导致健康安装被导向首次运行引导并要求重装。评论 17。
  https://github.com/NousResearch/hermes-agent/issues/79087
- #146643 [OPEN][P2] 网关每次变更重读全量会话历史，数千会话规模下占用 1.5–2.5 CPU 核，Desktop 请求 30s 超时。评论 14。
  https://github.com/NousResearch/hermes-agent/issues/146643
- #147269 [OPEN] Hermes Mobile Android 公开测试 Firebase 测试者名额已满。评论 8、👍2。
  https://github.com/NousResearch/hermes-agent/issues/147269

诉求分析：热点高度聚焦于“统一网关 + 会话权威”这次架构切换的后果——会话可恢复性、性能随存储规模退化、以及多入口（WebUI/TUI/Desktop/remote）之间来源标记不一致。社区关注的是可用性与数据不丢失，而非新功能。

## 5. Bug 与稳定性

按严重程度排列（均标注是否已有对应 fix PR）：

- **P1｜Windows 桌面误判健康安装并要求重装** — #79087（无明确 fix PR）。
  https://github.com/NousResearch/hermes-agent/issues/79087
- **P1｜内容策略拦截被误判为上下文溢出** — PR #145413（有 fix PR）。
  https://github.com/NousResearch/hermes-agent/pull/145413
- **P2｜会话不可恢复：远程后端桌面会话 / WebUI 来源会话** — #139818（无 fix PR）、#147600（无 fix PR）。
  https://github.com/NousResearch/hermes-agent/issues/139818
  https://github.com/NousResearch/hermes-agent/issues/147600
- **P2｜profile 重命名导致该 profile 全部本地聊天 `profile_mismatch`，`migrate-identity` 无法修复** — #143333（无 fix PR）。
  https://github.com/NousResearch/hermes-agent/issues/143333
- **P2｜网关全量重读会话历史导致 CPU 与超时随存储增长** — #146643（无 fix PR）。
  https://github.com/NousResearch/hermes-agent/issues/146643
- **P2｜裸 `custom` 模型选择导致会话在调用前失败** — #145614（有 fix PR #145622）。
  https://github.com/NousResearch/hermes-agent/issues/145614
- **P2｜openai-codex 并发刷新导致 `refresh_token_reused`，失败方覆盖胜方的轮换凭据** — #139727（安全边界标记，无 fix PR）。
  https://github.com/NousResearch/hermes-agent/issues/139727
- **P2｜有界会话转录驱逐 `message.user` 后仍被结算引用，触发 `DiscussionValidationError`** — #139347（无 fix PR）。
  https://github.com/NousResearch/hermes-agent/issues/139347
- **P2｜web 插件加载失败时 `web_extract` 给出误导性提示** — #142577（无 fix PR）。
  https://github.com/NousResearch/hermes-agent/issues/142577
- **P2｜模型路由编辑器覆盖无默认值的 model_map** — #146760（有 fix PR #147610）。
  https://github.com/NousResearch/hermes-agent/issues/146760
- **P2｜`hermes update` 耗时异常（6 分钟 vs 常规 1 分钟）且提示无用** — #102540（无 fix PR）。
  https://github.com/NousResearch/hermes-agent/issues/102540
- **P2｜Linux 桌面窗口半透明但设置项被隐藏，无法通过 UI 关闭** — #145183（有 fix PR #147609）。
  https://github.com/NousResearch/hermes-agent/issues/145183
- **P3/其他**：`mcp.catalog` 返回 `TransportSpec` repr 而非 `"stdio"/"http"`（#147504）；sudo 重写漏掉复合语句位置且 `_SUDO_HEADLESS_FAILURES` 提示仅 GNU-sudo 生效，导致 agent 放弃 sudo 改用 pkexec（#147525）；`active_pr` 重生守卫无运维覆盖（#67249）；异步 `delegate_task` 完成事件在跨 profile 适配器路由下永不投递（#139726）。
  https://github.com/NousResearch/hermes-agent/issues/147504
  https://github.com/NousResearch/hermes-agent/issues/147525
  https://github.com/NousResearch/hermes-agent/issues/67249
  https://github.com/NousResearch/hermes-agent/issues/139726

稳定性判断：最突出的系统性风险是**会话生命周期与来源归属一致性**，横跨 gateway、sessions、profiles、auth 多个组件，且多数 P1/P2 尚无 fix PR。

## 6. 功能请求与路线图信号

- **Kanban 通知泛化为事件底座**（#49190）：任意面订阅者 + 投递适配器注册表，把现有硬编码到网关 Platform 的订阅/通知解耦。属架构级增强，尚无合并 PR，短期内落地概率不高，但方向与统一网关治理一致。
  https://github.com/NousResearch/hermes-agent/issues/49190
- **入口切换跟踪**（#145171）：将 `hermes serve`、远程 Desktop、Web 统一到网关会话权威，是 #134889 范围说明中点名的“fast-follow”。该跟踪 issue 的存在意味着下一阶段的主线工作已确定。
  https://github.com/NousResearch/hermes-agent/issues/145171
- **移动端容量**（#147269）：Android 公开测试名额耗尽，属于发布基础设施需求而非代码功能，但直接影响拉新。
  https://github.com/NousResearch/hermes-agent/issues/147269
- **运维可控性**（#67249）：`active_pr` 重生守卫需要人工覆盖开关，属于小而明确的可交付项。

## 7. 用户反馈摘要

- **“会话丢了”是最强的负面情绪来源**：远程后端、WebUI、profile 重命名三条路径都会让看起来存在的会话无法恢复（#139818、#147600、#143333），用户不是在抱怨功能缺失，而是在抱怨数据“看似在、实则不可用”。
- **升级与安装体验拖后腿**：Windows 健康安装被判定为新安装并提议重装（#79087），`hermes update` 变慢且提示无信息量（#102540），这两条直接消耗用户对自动更新的信任。
- **规模化使用暴露性能天花板**：数千会话规模下网关 CPU 占用与 Desktop 超时（#146643）说明单机自托管用户的实际数据量已超出当前设计的假设。
- **平台细节影响日常使用**：Linux 半透明窗口无法关闭（#145183）、Anthropic 内联图片按 data-URL 提示而非字节标注导致 400（PR #147588）、`mcp.catalog` 返回错误字段（#147504）等小问题叠加，降低桌面端“可用但别扭”的观感。
- **对修复响应是认可的**：多个 issue 已带有针对性 PR（#145614→#145622、#146760→#147610、#145183→#147609），说明部分用户痛点正在被逐条认领。

## 8. 待处理积压

以下长期未关闭的重要条目，建议维护者优先分诊：

- #49190 [P3][needs-decision]（创建 2026-06-19，已逾 4 个月）：Kanban 事件底座，需产品决策。
  https://github.com/NousResearch/hermes-agent/issues/49190
- #67249 [P3][needs-decision]（创建 2026-07-19）：`active_pr` 重生守卫缺少运维覆盖，同样卡在决策。
  https://github.com/NousResearch/hermes-agent/issues/67249
- #79087 [P1]（创建 2026-08-05，近 3 个月）：唯一的 P1 长期未修，涉及 Windows 平台安装判定，且有 sweeper:risk-platform-windows 标记。
  https://github.com/NousResearch/hermes-agent/issues/79087
- PR #71402（创建 2026-07-25）与 PR #86777（创建 2026-08-15）：均来自同一作者的网关修复，长期 OPEN，涉及跨重启的通知去重与会话谱系投影，属于会话状态核心路径。
  https://github.com/NousResearch/hermes-agent/pull/71402
  https://github.com/NousResearch/hermes-agent/pull/86777
- #139818 [P2]（创建 2026-10-16，评论 37）：讨论热度最高但尚无 fix PR，建议尽快给出结论或拆分。
  https://github.com/NousResearch/hermes-agent/issues/139818

**健康度小结**：输入侧活跃度健康（每日 50+50 更新），但输出侧消化能力明显不足（当日仅各 1 条关闭/合并），且积压集中在 P1/P2 的会话与安装路径。若统一网关遗留问题（#143547、#145171）不能收敛，预计相关 issue 还会继续累积。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-01）

> 数据窗口：过去 24 小时。Issues 更新 0 条，PR 更新 3 条，新版本 0 个。

## 1. 今日速览

今日 PicoClaw 项目活跃度**偏低**：Issues 侧零活动，无新版本发布，仅有 3 个 PR 发生状态变化。3 个 PR 均创建于 2026-10-15，并在 10-31 被标记 `stale` 后更新，说明今日的 PR 动态主要是积压清理，而非新增开发。其中 2 个来自同一作者的修复类 PR 被关闭，1 个新增 provider 的 PR 仍待合并。整体看，项目今日向前推进有限，维护重点似在清理陈旧 PR，条目等待分流。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无 PR 被合并（两个关闭的 PR 状态为 `[stale]`，无法确认是否以合并方式关闭），主要动态如下：

- **PR #3443 [CLOSED]** `fix(telegram): escape link labels and blockquote text in MarkdownV2` — 修复 Telegram MarkdownV2 下链接标签（如 `[picoclaw.io]` 中的 `.`）与引用块文本中保留字符未转义导致消息被拒、回退纯文本丢失格式的问题。关联 #3426。
  链接: sipeed/picoclaw PR #3443
- **PR #3442 [CLOSED]** `fix(cron): propagate job failures to lastStatus instead of always ok` — 修复定时任务失败时 `cron/jobs.json` 仍记录 `"lastStatus": "ok"` 的问题，根因之一是 `CronTool.ExecuteJob`（`pkg/tools/cron.go`）在失败时返回字面量 `"ok"`。关联 #3423。
  链接: sipeed/picoclaw PR #3442

说明：两个 PR 均带 `[stale]` 标记，关闭原因未在数据中给出，建议维护者补充关闭说明以便贡献者理解。

## 4. 社区热点

今日无可识别的讨论热点：所有条目评论数为 `undefined`，点赞均为 0，无 Issues 活动。相对而言，以下两条值得关注：

- **PR #3443**（修复 Telegram 消息格式回退）：关联 Issue #3426，属影响用户可见体验的修复。
  链接: sipeed/picoclaw PR #3443
- **PR #3431**（新增 Standard Compute provider）：唯一仍 OPEN 的 PR，涉及 provider 生态扩展。
  链接: sipeed/picoclaw PR #3431

## 5. Bug 与稳定性

按影响面排序（均已有对应 fix PR，且今日已关闭）：

1. **中高｜定时任务状态失真**（PR #3442，关联 #3423）：任务失败仍上报 `ok`，会掩盖真实故障，影响 cron 监控与排障可信度。状态：[CLOSED] `[stale]`。
   链接: sipeed/picoclaw PR #3442
2. **中｜Telegram 回复格式丢失**（PR #3443，关联 #3426）：MarkdownV2 保留字符未转义导致 Telegram 拒收，回退纯文本，格式化全部丢失。状态：[CLOSED] `[stale]`。
   链接: sipeed/picoclaw PR #3443

今日无新报告的 Bug 或崩溃问题。

## 6. 功能请求与路线图信号

- **新增 Standard Compute provider**（PR #3431，[OPEN]）：以 OpenAI 兼容方式接入 `standardcompute`，作者自述在 Standard Compute 工作，改动沿用 #2917 的模式。
  链接: sipeed/picoclaw PR #3431
  判断：作为目前唯一待合并 PR，若维护者认可多 provider 扩展方向，是下一版本较可能纳入的候选。注意其为 `[stale]` 状态，存在因长期无响应而被继续搁置的风险。

今日无用户新提出的功能需求。

## 7. 用户反馈摘要

今日无 Issues 评论数据可提炼。从已关闭 PR 摘要可间接看到两类真实场景痛点：

- 使用 Telegram + MarkdownV2 的渠道下，回复因字符转义问题被整条拒绝，退化到无格式纯文本（#3443 / #3426）。
- 依赖 cron 任务状态字段做判断或监控的用户，无法从 `lastStatus` 分辨成功与失败（#3442 / #3423）。

## 8. 待处理积压

- **PR #3431 [OPEN] `feat(provider): add Standard Compute provider`** — 创建于 2026-10-15，已处于 `stale` 状态，是当前唯一的待合并 PR，需维护者给出评审意见或明确态度。
  链接: sipeed/picoclaw PR #3431
- **PR #3443 / PR #3442** — 两个修复 PR 均因 stale 流程关闭，建议确认修复是否已由其他途径落地，避免 #3426、#3423 对应问题长期未解。
  链接: sipeed/picoclaw PR #3443 ； sipeed/picoclaw PR #3442

**健康度提示**：今日无 Issue 活动、无合并、无发布，且 3 个 PR 全部带 stale 标记，反映出 PR 响应链路存在延迟；建议优先处理 #3431 的评审，并对两个已关闭修复 PR 的落地情况作出说明。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报（2026-11-01）

## 1. 今日速览

今日 NanoClaw 仓库没有新 Issue 更新，也没有新版本发布，工程活动的重心集中体现在 PR 队列上：过去 24 小时共有 6 条 PR 更新，其中 5 条仍待合并、1 条已关闭。未合并的 PR 中有 4 条集中在频道适配层（`area/channels`）与核心路由（`area/core`）上，显示出当前开发主线围绕“入站内容处理、线程路由、审批生命周期”展开。已关闭的 Telegram 机器人准入 PR #4111 是今日唯一已终结的变更，但它并未合并。从活跃度看，项目处于稳定迭代期，缺乏 Issue 层面的用户互动，社区讨论热度偏低。整体健康度中性偏积极：开发节奏仍在，但维护者需要关注 PR 积压与社区参与度不足的问题。

## 2. 版本发布

无新版本发布（过去 24 小时 release 数量为 0），本次日报不做版本说明。

## 3. 项目进展

今日唯一状态发生变更的是 PR #4111（已关闭）：

- **#4111 [CLOSED] feat(telegram): bot-to-bot admission gate (doorman) behind TELEGRAM_BOT_INBOUND** — [链接](https://github.com/nanocoai/nanoclaw/pull/4111)
  该 PR 为 Telegram 频道增加机器人间准入闸门，用于在 Bot-to-Bot Communication 开启后，防止其他机器人反复唤醒 NanoClaw 智能体、形成无界的回复循环。该 PR 以 draft payload 形式提交（分支 `feat/telegram-bot-admission`），并在 2026-10-31 更新后关闭；数据未说明关闭原因。

需要说明的是：本次数据未提供任何“已合并”的 PR，因此今日没有代码正式落地的主线进展。5 条待合并 PR 均处于 OPEN 状态，项目实际向前推进的幅度有限。

## 4. 社区热点

本次数据中所有 PR 的评论数与点赞数都没有提供（显示为 `undefined` / 0），Issues 数量为 0，所以无法基于互动量识别真正的讨论热点。从内容影响力看，以下两条最值得关注：

- **#3711 [OPEN] feat(router): defer expensive inbound content until an agent will receive it** — [链接](https://github.com/nanocoai/nanoclaw/pull/3711)
  该 PR 解决的问题是：需要实际执行任务（例如网络请求、下载）才能生成完整内容的消息，在 `routeInbound` 之前必须准备好完整的 `InboundMessage.content`，因此这些开销无论消息最终是否被智能体接收都要承担。该 PR 把昂贵内容的解析推迟到确有智能体接收时。

- **#3971 [OPEN] fix(telegram): route forum and private-chat topics as threads** — [链接](https://github.com/nanocoai/nanoclaw/pull/3971)
  该 PR 让论坛超级群组与机器人私聊中的 topic 都被当作线程处理，使回复回到原 topic，并让 `per-thread` 装配获得每线程一个会话。

背后的诉求很明确：用户在 Telegram 等多话题场景下要求会话隔离正确，同时不希望为未被消费的消息内容付出不必要的下载和解析成本。

## 5. Bug 与稳定性

按可能影响从高到低排列（严重程度依据 PR 摘要描述的问题性质判断，数据未提供官方严重级别）：

1. **审批卡片永久挂起** — PR #3833（`kind/bug`，OPEN，已有 fix PR）— [链接](https://github.com/nanocoai/nanoclaw/pull/3833)
   模块发起的审批（`install_packages`、`cli_command`、`create_agent` 等）如果无人应答，卡片会一直停留在 `pending`，发起请求的智能体也永远得不到通知。该 PR 提出让未应答卡片过期，并支持按 id 拒绝。涉及 `area/security`、`area/sessions`，属于影响智能体流程闭环的功能性问题。

2. **Telegram 话题路由错误** — PR #3971（`kind/bug`，OPEN，已有 fix PR）— [链接](https://github.com/nanocoai/nanoclaw/pull/3971)
   论坛群组与私聊中的 topic 没有按线程路由，导致回复落到错误位置，`per-thread` 装配无法做到每线程一会话。

3. **WhatsApp 文档说明丢失与无谓媒体下载** — PR #3712（OPEN，已有 fix PR，依赖 #3711）— [链接](https://github.com/nanocoai/nanoclaw/pull/3712)
   该 PR 让适配器读取文档消息的 caption，并停止下载没人要的媒体。注意其摘要明确指出：在 #3711 合入且 `channels` 重新同步之前，该 PR 中的 `resolveContent` 字段会被直接忽略，适配器行为与现状一致；也就是说，#3712 的修复目前无法生效。

4. **群组作用域下自动填充参数覆盖显式参数** — PR #3448（OPEN，fixes #2464）— [链接](https://github.com/nanocoai/nanoclaw/pull/3448)
   在 group scope 下，`dispatch()` 会从调用方锁定上下文自动填充 `agent_group_id`、`group`、`id`（对 `wirings-get`/`wirings-update` 还从当前会话解析出的 wiring 填充），当调用方显式传入这些参数时会产生冲突。该 PR 增加警告提示。

## 6. 功能请求与路线图信号

今日没有新的 Issue，功能信号全部来自 PR：

- **入站内容惰性解析（#3711）**：为适配器提供“先路由、后解析”的能力，是后续所有昂贵内容处理的基础设施。由于 #3712 明确依赖它，该 PR 是否合入直接决定 WhatsApp 修复能否生效，是短期内最应优先处理的变更。
- **Telegram 机器人间准入（#4111，已关闭）**：防止 bot-to-bot 场景下的无限回复循环。PR 已关闭，是否以其他形式重新提交，数据未说明。
- **线程化会话模型（#3971）**：将 topic/thread 作为会话边界，符合多话题群组的使用需求，可能成为频道适配层的通用模式。

上述 PR 创建时间跨 2026-08-22 至 2026-10-17，均无明确里程碑信息，无法据此判断会进入哪个版本。

## 7. 用户反馈摘要

本次数据未包含任何 Issue 评论，PR 评论数也未提供，因此无法提炼真实用户的原话反馈。从 PR 作者对问题的描述中，可间接看到的痛点包括：

- 无人应答的审批会让智能体流程卡死，用户与智能体都收不到结果（#3833）。
- 群组作用域下参数的隐式自动填充与显式传参冲突，行为不直观（#3448）。
- Telegram 多话题群组中回复错位、线程会话无法按预期隔离（#3971）。
- WhatsApp 文档消息的 caption 未被读取，同时存在无用媒体的下载开销（#3712）。

因缺少评论数据，本次无法给出满意度评价。

## 8. 待处理积压

- **#3448 [OPEN] ncl: warn when group scope overrides an explicit auto-fill arg (#2464)** — [链接](https://github.com/nanocoai/nanoclaw/pull/3448)
  创建于 2026-08-22，至 2026-11-01 已开放约 71 天，是当前最久的待合并 PR，且关联的 Issue #2464 仍未在本次数据中体现关闭。建议维护者给出评审结论或明确排期。

- **#3711 / #3712 [OPEN] 相互依赖的一对 PR** — [#3711](https://github.com/nanocoai/nanoclaw/pull/3711) / [#3712](https://github.com/nanocoai/nanoclaw/pull/3712)
  两者均创建于 2026-09-03，已开放约 59 天。#3712 明确依赖 #3711，长期悬置会让 WhatsApp 侧修复持续失效，建议优先推进 #3711 的评审。

- **#3833 [OPEN] fix(approvals)** — [链接](https://github.com/nanocoai/nanoclaw/pull/3833)
  涉及审批与安全域，创建于 2026-09-16，已开放约 46 天，属于影响智能体任务闭环的修复，建议优先安排评审。

- **#3971 [OPEN] fix(telegram)** — [链接](https://github.com/nanocoai/nanoclaw/pull/3971)
  创建于 2026-09-30，已开放约 32 天，属于已标注 `kind/bug` 且带修复的 PR。

另需提示：仓库当前有 5 条带修复性质的 PR 同时待合并，且今日 Issue 数为 0、评论数据缺失，维护者应关注评审吞吐与社区互动两个健康度指标。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-11-01

## 1. 今日速览

过去 24 小时项目活跃度偏低：无新版本发布，无 PR 合并或关闭，仅有 3 条条目发生变动（1 个 Issue、2 个 PR）。新增 Issue #1085 报告 Exa 搜索提供商因重复 `Content-Type` 头导致 `web_search` 全线失败，属功能阻断级问题。同日已有对应修复 PR #1086 提交，响应迅速、闭环清晰。另有 PR #1087 提交繁体中文完整文档集，体现社区本地化贡献意愿。整体项目健康度平稳，核心风险集中在单个搜索集成路径，且已有补救措施。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无已合并或已关闭的 PR，代码主线上无实质推进。两项待合并 PR 状态如下：

- **PR #1086** `fix(http): send a single Content-Type when callers pass their own` — 修复 `curlRequestWithProxy` 先设置 `Content-Type`、再追加调用方 headers 导致重复发送的问题，明确关联 Closes #1085。该 PR 若合并，将恢复 Exa 搜索可用性。
- **PR #1087** `docs(zh-tw): add Traditional Chinese (zh-TW) documentation` — 在 `docs/zh-TW/` 下新增完整繁体中文文档集，译自 `docs/en/`，覆盖 15 个核心文档文件（含 `README.md`、`beginners-guide` 等用户与运维指南）。

链接：[#1086](nullclaw/nullclaw PR #1086)、[#1087](nullclaw/nullclaw PR #1087)

## 4. 社区热点

今日所有条目评论数均为 0、👍 均为 0（PR #1087、#1086 的评论字段未提供），暂无实质讨论热点。相对关注度最高的是 **Issue #1085**：它是今日唯一新开 Issue，并直接催生同日修复 PR #1086，形成“报障—修复”快速联动。

链接：[Issue #1085](nullclaw/nullclaw Issue #1085)

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| **高（功能阻断）** | Issue #1085：`web_search` 配置 `search_provider: "exa"` 时，每次调用均返回 `error.InvalidResponse`；请求到达 Exa 时携带了两个 `Content-Type` 头，Exa 返回 400，智能体在无搜索结果的情况下作答。 | **已有 fix PR #1086**（待合并） |

根因（据 PR #1086 摘要）：`curlRequestWithProxy` 自行设置 `Content-Type` 后又追加调用方 headers，而搜索提供商本身会传入 `Content-Type: application/json`，导致头部重复。影响范围限于 Exa 搜索路径，未发现崩溃、回归或其他 Bug 报告。

链接：[Issue #1085](nullclaw/nullclaw Issue #1085)、[PR #1086](nullclaw/nullclaw PR #1086)

## 6. 功能请求与路线图信号

今日无明确的功能请求类 Issue。路线图信号主要来自文档生态扩张：

- **PR #1087（zh-TW 文档）** 若合并，将使项目文档覆盖面扩展至繁体中文用户群，属于低风险、高可达性的社区贡献，具备较大概率被纳入近期发布。
- **PR #1086（HTTP 头修复）** 属缺陷修复而非新功能，但为 Exa 搜索路径恢复可用性的前置条件，优先级应高于常规功能项。

链接：[#1087](nullclaw/nullclaw PR #1087)、[#1086](nullclaw/nullclaw PR #1086)

## 7. 用户反馈摘要

今日 Issues 均无评论，无法提炼评论层面的反馈。从 Issue #1085 正文可确认的真实用户痛点：

- **使用场景**：用户通过 `search_provider: "exa"` 调用 `web_search` 进行联网检索。
- **不满意之处**：搜索在每次调用时都失败，智能体静默降级为“无搜索结果作答”，用户侧表现为答案缺少检索依据，且错误信息仅为 `error.InvalidResponse`，定位成本较高。
- 暂无正面反馈数据。

链接：[Issue #1085](nullclaw/nullclaw Issue #1085)

## 8. 待处理积压

基于本次提供的数据，全部 3 条条目均创建于 2026-10-31 至 2026-11-01，均为 1 日内新提交，**不存在长期未响应的重要 Issue 或 PR**。

需维护者优先关注的是：

- **PR #1086**：修复功能阻断级 Bug，建议优先评审合并，并确认是否需补充针对重复 `Content-Type` 的回归测试。
- **PR #1087**：文档类大体积 PR（15 个文件），建议安排熟悉繁体中文的评审者核对术语一致性。

链接：[#1086](nullclaw/nullclaw PR #1086)、[#1087](nullclaw/nullclaw PR #1087)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

过去24小时无活动。

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

# CoPaw 项目日报 · 2026-11-01

> 说明：以下内容基于用户提供的 CoPaw (github.com/agentscope-ai/CoPaw) GitHub 数据生成；Issue/PR 链接在原始数据中以 `agentscope-ai/QwenPaw` 形式给出，本文按原样引用，未做改写。

## 1. 今日速览

过去 24 小时共有 5 条 Issue 更新（全部为新开/活跃，0 关闭）和 18 条 PR 更新（17 条待合并、1 条关闭），新版本发布为 0 个。积压信号明显：待合并 PR 数量远高于合并/关闭数量，且多条 PR 更新日期集中在 2026-11-01 进行刷新，说明维护活动以“评论/推进”为主而非“落地”。Bug 报告集中在两类硬伤——受限环境下启动崩溃（#8515）与 MCP legacy 回退失败（#8424），另有记忆丢弃（#8500）和误杀合法轮询（#8184）等稳定性问题。社区讨论热度整体不高（单条 Issue 最高 5 条评论），但已有对应 fix PR 出现，反映响应链条正在形成。整体活跃度：**中等偏低，修复管线在动、合并节奏偏慢**。

## 2. 版本发布

无新版本发布。

（数据中 Issue #8515 提到 `v2.3.0b2` PyPI wheel 的启动崩溃，属既有预发布版本问题，非今日发布。）

## 3. 项目进展

- **#8033 [CLOSED] fix(tauri): stop reconciling away a live desktop instance's backend**（RerankerGuo，size/XS）
  链接：agentscope-ai/QwenPaw PR #8033
  修复 Windows 桌面端在已有实例运行时二次启动会开启第二窗口、并在启动对账阶段终止第一实例仍在使用的后端。今日唯一关闭的 PR，属桌面端稳定性收敛。

今日无合并（merged）PR 记录，推进主要体现为 fix PR 的创建与刷新（见第 5 节）。项目整体向前迈进幅度有限：多数修复仍处于待合并状态。

## 4. 社区热点

按评论数排序：

1. **#8424 [OPEN] [Bug] `server/discover` 返回 HTTP 404 + JSON-RPC -32601 被当现代协议硬失败**（ahxoeh，5 条评论）
   链接：agentscope-ai/QwenPaw Issue #8424
   诉求：只支持 legacy `initialize` 握手的 MCP 服务器无法回退，直接影响老协议 MCP 生态接入。已有配套 PR #8445（见下）。

2. **#8500 [OPEN] [Bug] Auto-Dream 静默丢弃记忆**（feng183043996，3 条评论）
   链接：agentscope-ai/QwenPaw Issue #8500
   诉求：extract 步骤解析失败时仍 checkpoint，导致整日记忆被丢弃且永不重试，同时 run 仍报 `success=True`——用户核心担心是“数据无声丢失 + 状态误导”。

3. **#8184 [OPEN] [Bug] Doom-loop gate 误杀合法任务授权轮询**（feng183043996，3 条评论，创建于 2026-10-12）
   链接：agentscope-ai/QwenPaw Issue #8184
   诉求：防死循环机制无法区分“重复卡死”与“等待后台任务进展”，且终止后 cron 记录为假成功。

4. **#8515 [OPEN] [Bug] v2.3.0b2 在 fnOS 应用沙箱 import 阶段即崩**（yaozy2020，2 条评论）
   链接：agentscope-ai/QwenPaw Issue #8515
   诉求：依赖锁根目录优先取 pwd home、绕过 `$HOME`，且覆盖变量 `QWENPAW_DEPENDENCY_STATE_DIR` 未文档化。

5. **#8523 [OPEN] [enhancement] 任务自动对接入口 / 每日 Agent 工作排程**（felix118，1 条评论，2026-11-01 新建）
   链接：agentscope-ai/QwenPaw Issue #8523
   诉求：希望有按时间段排程、任务完成推送 IM、人工确认后自动进入下一任务的机制，便于把 AI 列入团队周计划。

背后的共性诉求：**协议兼容性、状态可信度（成功/失败的如实报告）、受限部署可运行性、以及“把 Agent 当作可排班的团队成员”**。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 对应 fix PR |
|---|---|---|---|
| 高（启动即崩/阻断部署） | **#8515** v2.3.0b2 在 fnOS 应用沙箱 import 阶段 `PermissionError` 崩溃；锁根目录按 pwd home 推导，覆盖变量未文档化 | OPEN | **#8527**（启动时报告不可用依赖状态根，Fixes part of #8515）、**#8525**（锁依赖状态时优先信任 `HOME` 而非 passwd home）——两者均为 OPEN |
| 高（数据丢失） | **#8500** Auto-Dream 在 extract 解析失败时静默丢弃整日记忆，仍 checkpoint 且报 `success=True` | OPEN，3 条评论 | 数据中未提供 |
| 中高（协议兼容） | **#8424** `server/discover` 返回 HTTP 404 + `-32601` 被 `_negotiate()` 硬失败，legacy MCP 服务器无法回退 | OPEN，5 条评论 | **#8445**（fix(mcp): 404 与 -32601 时回退）——OPEN |
| 中（任务误杀/假成功） | **#8184** doom-loop gate 终止合法任务授权轮询，cron 记录假成功 | OPEN，创建已近 3 周 | 数据中未提供 |

另有若干待合并修复覆盖周边稳定性：**#8524**（桌面端 workspace HTML 预览使用解码后的本地路径，修复 `file://` 百分号编码直传）、**#8411**（Matrix 缓存会话与设备密钥恢复，Fixes #8365）、**#8319**（QQ `GROUP_MESSAGE_CREATE` 普通群消息被丢弃，Fixes #8313）、**#8480**（引用回复中的 `/stop` 等控制命令无法路由）、**#8304**（Matrix 粘贴凭据空白字符导致校验/认证失败，Fixes #2882）。

## 6. 功能请求与路线图信号

- **#8523 任务排程入口（今日新建，唯一一条 enhancement）**
  链接：agentscope-ai/QwenPaw Issue #8523
  需求为“按时间段派发任务 → 完成后 IM 推送 → 人工确认 → 自动进入下一排程”，并询问是否通过 MCP 实现。目前数据中**无对应 PR**，尚无纳入下一版本的证据。

- 与已有 PR 相关、可能被推进的能力（均为修复类，非新功能）：
  - **#8367 [size/XXL] feat(chats): keyword 与 agentic 会话搜索** —— 唯一标注 `feat` 的大体量 PR，针对“自动生成标题不含用户记忆词、标题过滤会漏”的问题；体量为 XXL，合入周期可能较长。链接：agentscope-ai/QwenPaw PR #8367
  - **#8309 fix(cli): 激活前发现 Ollama 模型**（Fixes #1453）——改善 `qwenpaw init` / `models config` / `models set-llm` 的交互体验；标注 Under Review。
  - **#8231 fix(console): 持久化市场安装来源，使 'Update All' 覆盖第三方插件**（Fixes #8176）——插件生态可维护性；标注 Under Review。
  - **#8526 feat(config): 新装默认语言遵循 `QWENPAW_LANGUAGE`** —— 修正新装硬编码 `"zh"` 并影响 legacy 配置迁移的行为。

结论：**#8523 的排程能力目前只是需求信号，缺乏实现线索；下一版本更可能落在上述修复项与 #8367 搜索能力上。**

## 7. 用户反馈摘要

- **部署场景真实且受限**：#8515 来自飞牛 fnOS NAS 应用沙箱的专用应用用户部署，说明用户正在把 CoPaw 装进 NAS/只读镜像类受限环境，而当前 `state_root()` 取 pwd home 的实现直接阻断启动；同时用户指出覆盖变量未文档化，反映**文档缺口**本身也是痛点。
- **对“静默失败”高度敏感**：#8500、#8184 两例共同点是系统在出错后仍报告 `success=True`/cron 成功，用户明确表达了对“状态不可信”的不满——这比崩溃更损害信任。
- **MCP 老协议服务器仍在生产使用**：#8424 表明 legacy-only MCP 服务器并非边缘场景，硬失败使其完全无法接入。
- **渠道体验细节诉求**：引用回复中控制命令失效（#8480）、QQ 普通群消息被丢弃（#8319）、Matrix 粘贴凭据带空格即失败（#8304），集中体现 IM 多通道路由与输入容错的用户摩擦。
- **把 AI 纳入团队流程的意愿**：#8523 用户希望“给人安排任务的同时也给 AI 派任务”，属满意的深度使用后的自然延伸需求。

满意度方面：数据中无正面反馈或 👍 记录（所有列出 Issue 的 👍 均为 0），暂无可用满意信号。

## 8. 待处理积压

- **#8184** 创建于 2026-10-12、最后更新 2026-10-31，已近 3 周仍为 OPEN 且无对应 fix PR，涉及任务被误杀与假成功，建议优先排期。
  链接：agentscope-ai/QwenPaw Issue #8184
- **#8027 fix(skills): 将 pool skill 下载移交 worker 线程**（创建 2026-09-29，size/S）——阻塞式文件系统操作留在 async handler 中，改动量小但已逾一个月未合入。
  链接：agentscope-ai/QwenPaw PR #8027
- **#8231 fix(console): 市场安装来源持久化**（创建 2026-10-13，Under Review，Fixes #8176）——影响第三方插件 'Update All' 可用性，长期停留 Under Review。
  链接：agentscope-ai/QwenPaw PR #8231
- **#8309 / #8304 / #8305 / #8319**（均创建于 2026-10-18 前后，作者 hehuang139）——多条同作者小/中体量修复同时待合并，建议批量评审以降低积压。
- **#8500** 无 fix PR 的数据丢失级问题，虽仅 3 条评论但影响面大，建议尽快给出修复或明确缓解方案（如 run 状态如实上报）。
  链接：agentscope-ai/QwenPaw Issue #8500

**健康度提示**：待合并 PR 17 : 今日关闭 1 的比例偏高，且多项修复已存在但未落地，建议维护者优先处理“已有 fix PR 的 Bug”（#8424/#8445、#8515/#8525+#8527），以缩短从报告到修复的闭环时间。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报（2026-11-01）

## 1. 今日速览

过去24小时项目保持高强度迭代：46 条 PR 更新（39 条待合并、7 条合并/关闭），9 条 Issue 变动（5 条活跃、4 条关闭），无新版本发布。当日关闭的 Issue 集中于 v0.9.0 里程碑范围（CLI-only 构建、安装脚本版本显示、RustSec 安全审计失败），但均未见对应合并记录，说明进入验证或后续跟进阶段。PR 侧以安全加固与跨平台修复为主，其中 `ump45nose` 一人提交了当日展示的多个安全/沙箱相关 PR，Codex 侧 `nick-pape` 于当日提出 MCP 工具顺序导致 prompt 缓存失效的问题并同步给出了 fix PR。整体看，项目活跃度高、修复闭环快，但 39 条待合并 PR 的积压和多个 `needs-author-action` 标记提示评审吞吐是当前主要瓶颈。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

当日关闭/合并的变更以 v0.9.0 相关修复为主线：

- **#12159 [CLOSED]** fix(install): 从 `zeroclaw --version` 第二个字段读取包版本（#12154 的修复 PR）。因 `--version` 结尾新增括号 build id，原安装脚本取末字段导致显示 `v(99bd353)`，现已改为读取正确字段。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12159 / https://github.com/zeroclaw-labs/zeroclaw/issues/12154
- **#12069 [CLOSED]** 新增 `/load-session <name|uuid>` 斜杠命令，支持按名称或 UUID 恢复已持久化的 Code（ACP）会话，解决此前恢复会话能力缺失的问题。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12069
- **#11971 [CLOSED]** 支持不带 gateway、内嵌 dashboard 与 ACP bridge 的 CLI-only 源码构建，面向服务器与最小化安装场景；标准构建仍为默认且不变。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11971
- **#12128 [CLOSED]** 修复 CI `Security` 作业因 5 条 RustSec 公告（RUSTSEC-2026-0420 至 -0424，Wasmtime 48.0.7）导致的持续失败，该问题此前为 S1 级、阻断所有构建。

整体评估：当日进展集中在“发布前收尾”——安装体验、会话可用性、构建灵活性与 CI 安全门禁，属于质量与可用性层面的稳步推进，而非新功能跃升。

## 4. 社区热点

- **#11965 [OPEN] feat(gateway): opt-in OIDC dashboard sign-in**（作者 JordanTheJet，2026-10-22 起持续更新）
  为 dashboard 增加基于 `[oidc.<alias>]` 的可选 OIDC 登录，改变此前仅能靠配对码解锁的模式。标签含 `risk:high`、`size:XL`、`security:pairing`，影响面大，是当前最受关注的架构级变更。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11965
- **#10843 [OPEN] fix(channels): Telegram add_reaction/remove_reaction**（作者 xManan，自 2026-09-13 持续至今，已标记 `stale-candidate`）
  指出 Telegram 频道未实现反应接口，导致 `ReactionTool` 对成功率作出虚假报告。属“静默失败”类问题，长期未合并且已接近陈旧线。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10843
- **#11883 [OPEN] feat(matrix): host Goal controls at foreground turn boundaries [Goal V1 6/12]**（作者 vrurg，Draft）
  大型 Goal V1 提案的第 6/12 片段，依赖 #11882，明确要求保持 Draft 不合并，代表一条进行中的长期路线。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11883
- **#12177 [OPEN] fix(tools): return MCP tool names in sorted order**（作者 nick-pape，当日提出并附带修复）
  针对 #12176 的直接修复，作者当天开 issue 当天提 PR，是当日响应最快的闭环。
  https://github.com/zeroclaw-labs/zeroclaw/pull/12177

背后的诉求：一是权限与访问控制现代化（OIDC 替代单一配对码）；二是工具层“不静默失败”的可观测性；三是 MCP 与 prompt 缓存的成本敏感度上升。

## 5. Bug 与稳定性

按严重程度排列：

- **S1 级（已于 10-31 关闭）** #12128：`cargo audit` 因 5 条 RustSec 公告在每次 CI 运行中失败，阻断工作流。状态：已关闭，#12159 等修复在推进。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12128
- **S2 级（OPEN）** #12176：开启 `mcp.deferred_loading = true` 时，系统提示中的 `<available-deferred-tools>` 列表因 `HashMap` 顺序随机而每次会话变化，导致 prompt 缓存失效。**已有 fix PR #12177**（`McpRegistry::tool_names()` 改为排序返回）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12176
- **S2/S3 级（OPEN）** #12169：headless SOP 步骤调用 `send_message_to_peer` 时，接收方 agent 的回合运行在分离任务中，脱离步骤的工具作用域（作用域存于 task-local）。**暂无 fix PR**，涉及权限边界，建议优先评估。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12169
- **S2/S3 级（OPEN）** #12167：`send_message_to_peer` 不检查发送方 autonomy level，也不计入 action budget，导致 `readonly` agent 仍可为同组其他 agent 发起回合。**暂无 fix PR**，属权限绕过。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12167
- **崩溃（OPEN）** #12173：`split_markdown_chunks` 在 `start + max_bytes` 落在多字节 UTF-8 字符内部时 panic，影响 Lark/Feishu 卡片分块。**暂无 fix PR**，中文等多字节内容场景风险较高。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12173
- **S3 级（OPEN）** #12175：personality 编辑器文案称“下一条消息即生效、无需 daemon 重载”，但对 channels 不成立，误导运维排查。属文案缺陷，无功能损坏。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12175

稳定性小结：当日无 S1 新增，但两条权限相关 Issue（#12169、#12167）均由同一报告者提出，指向 `send_message_to_peer` 在多 agent 协作下的作用域与预算控制薄弱，是值得关注的系统性风险。

## 6. 功能请求与路线图信号

- **#12069 `/load-session`**：已关闭，纳入 Code 面板会话恢复能力。
- **#11971 CLI-only 构建**：已关闭，显式面向服务器/最小安装场景，标准构建保持默认，风险可控。
- **OIDC dashboard 登录（PR #11965）**：若合并将改变 dashboard 的认证模型；受 `risk:high` 与配对安全标签制约，落地前需重点评审。
- **Telegram 富消息（PR #11862）**：新增 `channels.telegram.<alias>.rich_messages` 开关，默认关闭，走 Bot API `sendRichMessage` 发送标题、列表、引用、表格，关闭时仍走原 HTML 路径——属低风险的可选增强，具备进入下一版本的条件。
- **Goal V1 提案栈（PR #11883 第 6/12）**：仍为 Draft，明确不作为独立工作产出，短期不会合入主线。

判断：v0.9.0 的候选内容集中在已关闭的安装/构建/会话类修复；OIDC 与 Goal V1 更可能是 v0.9.0 之后的事项。

## 7. 用户反馈摘要

- **运维体验**：安装脚本打印 `v(99bd353)` 而非版本号（#12154），以及 personality 编辑器误导性文案（#12175），反映“输出信息与真实行为不一致”是最影响信任的一类问题。用户明确表示误导文案会让人“追查不存在的 bug”。
- **成本敏感**：MCP 工具顺序随机导致 prompt 缓存失效（#12176），说明已有用户在生产中依赖 prompt 缓存，对会话间稳定性有硬性要求。
- **多 agent 安全**：连续两条 Issue（#12169、#12167）指出 `send_message_to_peer` 绕过工具作用域、autonomy level 与 action budget，用户对 agent 间通信的权限收敛有明确期待。
- **最小化部署需求**：CLI-only 构建请求（#11971）指向服务器与精简安装的真实场景，用户希望在不牺牲默认体验的前提下获得可裁剪的构建。
- **渠道完整性**：Telegram 反应接口缺失导致工具虚假上报成功（#10843），体现用户对“静默失败”的强烈不满。
- **多渠道内容**：Lark 卡片在中文等多字节场景下 panic（#12173），反映非英文市场的实际使用已具备规模。

## 8. 待处理积压

- **PR #10843**（2026-09-13 创建，已标记 `stale-candidate`、`needs-author-action`）：Telegram 反应接口修复，历时近 7 周仍未合并，存在被自动关闭风险，建议维护者明确结论。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10843
- **PR #11965**（2026-10-22 创建，`risk:high`、`size:XL`）：OIDC 登录，已积压 10 天，建议安排专项评审以免阻塞 v0.9.0 认证相关规划。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11965
- **PR #11883**（2026-10-19 创建，Draft，依赖 #11882）：Goal V1 第 6/12 片段，建议文档化推进节奏，避免长期悬挂。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11883
- **#12167 / #12169**（2026-10-31 创建，暂无 fix PR）：涉及权限边界，建议优先分配，不宜长期停留在 OPEN。
  https://github.com/zeroclaw-labs/zeroclaw/issues/12167 / https://github.com/zeroclaw-labs/zeroclaw/issues/12169
- 整体提示：39 条待合并 PR 对 7 条合并/关闭的比例（约 5.6:1）偏高，叠加多个 `needs-author-action` 标签，评审带宽与作者响应是当前健康度的主要约束。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*