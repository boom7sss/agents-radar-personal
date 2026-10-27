# OpenClaw 生态日报 2026-09-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-28 14:28 UTC

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

# OpenClaw 项目日报 — 2026-09-28

## 1. 今日速览

过去24小时内 OpenClaw 仓库保持极高活跃度：**500 条 Issue 更新**（新开/活跃 418、关闭 82）与 **500 条 PR 更新**（待合并 384、已合并/关闭 116），但**无新版本发布**。今日讨论焦点高度集中在**稳定性与资源耗尽类缺陷**上——SQLite WAL 无限增长、state-lifecycle 租约争用、插件源码捕获导致的磁盘/SSD 写入、以及多处更新（`openclaw update`）失败与守护进程残留问题，多条 P0 级 Issue 已挂上 `ux-release-blocker` 标签。整体看，项目处于"高频修复 + 高风险积压"阶段：修复流量健康（116 条 PR 合并/关闭），但释放阻塞级 Bug 的密度偏高，版本健康度承压。

---

## 2. 版本发布

今日无新版本发布（最新 Releases：无）。但需注意，社区反馈中大量缺陷集中在 **2026.9.2 / 9.3 / 9.4 / 9.5 / 9.6** 各版本上，且多条被标记为 `ux-release-blocker`，说明当前已发布版本存在显著的升级与运行风险，下一个补丁版本的需求较为迫切。

---

## 3. 项目进展

今日已合并/关闭的 PR 与 Issue 中，代表性推进包括：

- **PR #160299 [CLOSED]** `fix(gateway): keep slow worker operations from blocking unrelated sessions` — 修复慢速云 worker 对账、Move、provisioning 恢复等操作阻塞无关 session 调度与 Stop 的问题（关联 #159881）。这直接对应今日多条"事件循环停滞 / 会话排队"类 Issue。
  链接: openclaw/openclaw PR #160299
- **PR #160477 [CLOSED]** `docs(gateway): document scheduler ownership and timer census` — 补充 Gateway 调度器归属、唤醒与关闭 join 行为文档，提升运维可诊断性。
  链接: openclaw/openclaw PR #160477
- **Issue #58450 [CLOSED]** `Agent can promise a later follow-up without starting any actual follow-up action`（原 P2，含 `impact:message-loss`、`impact:session-state`）— 长期存在的"智能体空许诺跟进"问题关闭。
  链接: openclaw/openclaw Issue #58450
- **Issue #85030 [CLOSED]** `MCP tools not injected into subagent (sessions_spawn) sessions`（diamond lobster，含 `impact:security`）— 子智能体 MCP 工具未注入的重要行为缺陷关闭，涉及安全评审标签。
  链接: openclaw/openclaw Issue #85030

**整体判断**：合并方向集中于 Gateway 调度隔离、更新器/守护进程修复与子智能体会话语义，推进了可稳定性与运维可见性，但相对 384 条待合并 PR 与高频新增 P0，前进幅度落后于问题涌出速度。

---

## 4. 社区热点

今日讨论最活跃条目（按评论数）：

- **Issue #143524（85 评论，P0）** Agent SQLite WAL 数日内膨胀至 1.4–2.8 GB，无视 `wal_autocheckpoint=1000`，阻塞 gateway 启动（Windows，2026.9.2/9.3）。单条评论量远超其他，是今日绝对焦点。
  链接: openclaw/openclaw Issue #143524
- **Issue #58450（17 评论，👍4，已关闭）** 智能体承诺"稍后跟进"却未启动任何后续动作——用户对"空承诺"体验高度不满。
  链接: openclaw/openclaw Issue #58450
- **Issue #97616（16 评论，P1）** hook/tool 子进程未被回收，僵尸进程累积导致运行时退化。
  链接: openclaw/openclaw Issue #97616
- **Issue #157067（16 评论，P1）** Windows 隔离 cron 启动时把不可克隆的 Environment Proxy 传入 session history worker。
  链接: openclaw/openclaw Issue #157067
- **PR #142532（Telegram Mini App `/dashboard` 命令冲突，`merge-risk: compatibility`）** 核心命令与插件命令冲突导致插件候选被解析器拒绝，社区关注兼容性风险。
  链接: openclaw/openclaw PR #142532

**诉求分析**：热点几乎全部指向**资源管理与生命周期正确性**（DB、进程、锁、磁盘），而非新功能——社区当前最核心的诉求是"让已发布版本稳定可用"，尤其集中在 Windows 与长期运行场景。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR 迹象）：

**P0 / 释放阻塞（`ux-release-blocker`）**
- **Issue #143524** SQLite WAL 无界增长阻塞 gateway 启动（Windows）— `clawsweeper:no-new-fix-pr`，暂无修复 PR。链接: openclaw/openclaw Issue #143524
- **Issue #157325** 卡住的 agent-DB 资源导致所有智能体回复失败直至重启 — `source-repro`，无 fix PR。链接: openclaw/openclaw Issue #157325
- **Issue #156112** `openclaw update` 在 "global install swap" 步骤确定性失败（npm 全局，9.4→9.5）— `manual-only`，无 fix PR。链接: openclaw/openclaw Issue #156112
- **Issue #156571** 2026.9.5 model-catalog worker 泄漏 tmp 源码捕获（1–3 GB/min 填满磁盘）— 关联 #155753。链接: openclaw/openclaw Issue #156571
- **Issue #156674** macOS gateway 长生命周期 Codex worker 资源压力，停止 gateway 才恢复 — 无 fix PR。链接: openclaw/openclaw Issue #156674
- **Issue #156712** `openclaw triage` 修复子进程不干净退出、持有 gateway-lifecycle 锁阻塞重启 — `manual-only`。链接: openclaw/openclaw Issue #156712
- **Issue #158095** worker 在 `acquireSqliteWorkerLifecycle` 后持续持有 state-lifecycle，后续 acquire 全部失败需重启。链接: openclaw/openclaw Issue #158095
- **Issue #154924** 更新失败 `global-install-failed`（2026.9.4）。链接: openclaw/openclaw Issue #154924
- **Issue #158231** 更新失败 `managed-service-preflight`（2026.9.5）。链接: openclaw/openclaw Issue #158231
- **Issue #157415** `Doctor --fix` 拒绝外部安装 acpx/codex 的会话后插件迁移（回归）。链接: openclaw/openclaw Issue #157415

**P1 级**
- **Issue #97616** 僵尸子进程泄漏与运行时退化。链接: openclaw/openclaw Issue #97616
- **Issue #157067** Windows cron 传入不可克隆 Proxy（已有 `clawsweeper:linked-pr-open`）。链接: openclaw/openclaw Issue #157067
- **Issue #121953** DeepSeek 上 cron agent turn 因消息前缀被降优先级而停滞（`fix-shape-clear`）。链接: openclaw/openclaw Issue #121953
- **Issue #117262** 3 个并发写句柄导致约 33s 事件循环停滞（DEF-61）。链接: openclaw/openclaw Issue #117262
- **Issue #118885** 大 SQLite 库在单次启动中重复执行完整完整性检查。链接: openclaw/openclaw Issue #118885
- **Issue #157986** 所有 agentTurn 自动化因 DataCloneError 失败（Windows，2026.9.6）。链接: openclaw/openclaw Issue #157986
- **Issue #157989** 插件源码捕获每 CLI 命令重写约 1.1–1.4 GB、每 gateway 启动约 6.5 GB，严重 SSD 磨损。链接: openclaw/openclaw Issue #157989
- **Issue #159094** gateway 持有 state-lifecycle 租约但内部 worker 报告其他进程持有。链接: openclaw/openclaw Issue #159094
- **Issue #149631** PR preflight 在 121 个 job 时触发 120 Node 矩阵上限报错（`queueable-fix`）。链接: openclaw/openclaw Issue #149631
- **Issue #109478** 多行工具参数字符串被注入字面 `\n`（间歇、跨模型，`impact:data-loss`）。链接: openclaw/openclaw Issue #109478
- **Issue #153899** Gateway drain 等待满 `TimeoutStopSec`。链接: openclaw/openclaw Issue #153899
- **Issue #129455** Requester-settle 在下一子智能体生成前就终结顺序工作流。链接: openclaw/openclaw Issue #129455
- **Issue #106704** `sessions_yield` 在子智能体首轮误用导致空结果静默成功。链接: openclaw/openclaw Issue #106704

**已有 fix PR 迹象**：Issue #157067、#155633、#129455 标注 `clawsweeper:linked-pr-open`；Issue #149631、#121953 标注 `fix-shape-clear`/`queueable-fix`。**多数 P0（如 #143524、#157325、#156112）明确 `no-new-fix-pr`，修复缺口明显。**

---

## 6. 功能请求与路线图信号

- **Issue #155633** 新增 Databricks Unity Gateway 为官方模型 provider（`impact:auth-provider`），并已关联实现 PR **#155634**（`linked-pr-open`）——较可能进入下一版本。
  链接: openclaw/openclaw Issue #155633
- **Issue #67413**（👍5）按智能体（per-agent）配置 dreaming，避免所有 workspace 同时 dreaming 触发内存尖峰超过 MemoryMax(6GB)。长时间开放（2026-04-15 起），尚无 fix PR。
  链接: openclaw/openclaw Issue #67413
- **Issue #45508**（👍2）webchat 自托管 STT/TTS，路由经 gateway 而非浏览器 Speech API（`impact:auth-provider`、`ux-friction`）。
  链接: openclaw/openclaw Issue #45508
- **Issue #122019** `openclaw update status` 未评估已配置插件可用性与不可逆迁移风险——与今日大量更新失败 Issue 形成呼应，具备较高的产品决策价值。
  链接: openclaw/openclaw Issue #122019

**判断**：Databricks provider（#155633/#155634）因已有实现 PR，落地概率最高；per-agent dreaming 与 update status 安全性诉求属"稳定性路线图"信号，可能被纳入后续修复批次。

---

## 7. 用户反馈摘要

- **真实痛点**：Windows 与 macOS 长期运行主机是重灾区——SQLite WAL 膨胀、僵尸进程、state-lifecycle 租约错乱、资源压力反复出现，用户需手动离线 checkpoint 或重启 gateway 才能恢复（#143524、#97616、#156674、#157325）。
- **升级体验不满**：`openclaw update` 在 "global install swap"、`global-install-failed`、`managed-service-preflight` 等多处失败，而直接 `npm install -g` 同版本却成功（#156112、#154924、#158231），用户明确表达对更新器可靠性的质疑。
- **隐含成本担忧**：插件源码捕获导致磁盘/SSD 磨损（#157989、#156571），"no reuse, bundled native binaries" 被直接点名。
- **会话语义不满**：智能体承诺跟进却不行动（#58450）、`sessions_yield` 误用导致空结果（#106704）、顺序工作流被提前终结（#129455）——用户对**可预期、可信赖的会话生命周期**诉求强烈。
- **使用场景**：多为单 gateway、Windows Scheduled Task / systemd、rootless Podman、npm 全局安装、2 vCPU/8 GB 等中小规格自托管部署。

---

## 8. 待处理积压

以下为长期开放且重要、建议维护者优先关注：

- **Issue #67413**（创建 2026-04-15，👍5）per-agent dreaming 配置，`needs-product-decision`，逾 5 个月未决。链接: openclaw/openclaw Issue #67413
- **Issue #45508**（创建 2026-03-13，👍2）webchat 自托管 STT/TTS，`needs-product-decision`。链接: openclaw/openclaw Issue #45508
- **Issue #58450** 已于今日关闭，但同类语义问题 #106704、#129455 仍开放（P1），建议合并治理。链接: openclaw/openclaw Issue #106704 · openclaw/openclaw Issue #129455
- **Issue #118885 / #117262** 均为 SQLite 相关 P1，与今日 P0 #143524/#157325 同源，存在系统性风险，宜统一规划。链接: openclaw/openclaw Issue #118885 · openclaw/openclaw Issue #117262
- **Issue #109478**（创建 2026-07-17，`impact:data-loss`）多行参数 `\n` 注入间歇复现，数据丢失隐患值得优先排查。链接: openclaw/openclaw Issue #109478
- **待合并 PR 中值得关注**：**PR #160018**（`security-boundary`，owner 权限透传）、**PR #159226**（feat/refactor，XL 规模，`merge-risk: compatibility/availability`）——均标注 ready for maintainer look，建议优先评审。链接: openclaw/openclaw PR #160018 · openclaw/openclaw PR #159226

**健康度小结**：修复吞吐（116 条 PR 合并/关闭）与社区参与度均处高位，但 P0 释放阻塞型缺陷集中且多无修复 PR，叠加 384 条待合并 PR 积压与多个 ≥5 个月的 `needs-product-decision` 事项，项目短期健康度的主要风险来自**稳定性欠账与维护者决策带宽**。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据窗口：2026-09-28（单日快照）**

---

## 1. 生态全景

当日 11 个活跃项目中，**10 个项目无新版本发布**，全生态处于"高频修复、发布静默"的密集维护期。社区注意力高度收敛于**资源生命周期与稳定性正确性**（SQLite 膨胀、僵尸进程、锁租约、并发写入、上下文不可回收），而非新功能扩张。同时，**Tsubasa 提供商接入在 5 个项目同日出现**（PicoClaw/NanoClaw/NullClaw/IronClaw/Moltis），显示生态正围绕 OpenAI 兼容接口形成事实标准层。项目健康度分化明显：头部项目（OpenClaw、ZeroClaw）以极高活跃度承载稳定性欠账，尾部项目（PicoClaw、LobsterAI）暴露维护投入不足，甚至出现公开宣告维护终止的外部信号。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（活跃/关闭） | PR 更新（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（418/82） | 500（384/116） | 无 | ⚠️ 高频修复，P0 释放阻塞密集且多无 fix PR |
| **ZeroClaw** | 50（37/13） | 50（43/7） | 无 | ⚠️ 评审日；43 条待合并，多条 `stale-candidate` |
| **Hermes Agent** | 50（27/23） | 50（37/13） | 无 | 🟡 高吞吐无发布；核心链路修复滞留队列 |
| **NanoClaw** | 4（4/0） | 42（23/19） | 无 | 🟡 单人高速修补，CI 不稳（8 次 main 5 次失败） |
| **CoPaw** | 8（7/1） | 16（12/4） | 无 | 🟢 围绕单一问题簇快速闭环，首 contributor 活跃 |
| **NanoBot** | 7（5/2） | 24（12/12） | 无 | 🟢 回归修复优先，合并节奏快于 Issue 侧 |
| **LobsterAI** | 5（4/1） | 11（1/10） | 无 | 🟡 基础设施加固强，4 条 `[stale]` 用户缺陷积压半年 |
| **NullClaw** | 17（1/16） | 6（1/5） | 无 | 🟢 批量清理型，健康度良好 |
| **PicoClaw** | 7（5/2） | 10（10/0） | 无 | 🔴 当日 0 合并，外部宣告 fork，维护响应弱 |
| **IronClaw** | 2（2/0） | 8（6/2） | 无 | 🟡 活跃度中低，依赖升级积压逾月 |
| **ZeptoClaw** | 2（2/0） | 1（1/0） | 无 | 🟡 低活跃，提出即待审 |
| **Moltis** | 0 | 1（1/0） | 无 | 🟢 静默，无风险信号 |
| **TinyClaw** | — | — | 无 | ⚪ 过去 24 小时无活动 |

> 注：OpenClaw/ZeroClaw/Hermes 数据为当日采集上限（500/50/50 条），实际量级可能更高。

---

## 3. OpenClaw 在生态中的定位

**社区规模：量级领先，非同一梯队。** 当日 500 条 Issue + 500 条 PR 更新，是第二名 ZeroClaw（50+50）的 **10 倍**，是尾部项目（Moltis、ZeptoClaw）的数百倍。单条 SQLite WAL 膨胀 Issue（#143524）即获 85 条评论，超过多数项目全天总讨论量。

**优势：**
- **唯一被多项目作为参照/兼容目标的核心**：LobsterAI 直接围绕 OpenClaw 网关做稳定性修复（#2771–#2775），说明其已成为事实上的上游。
- **生态信号最丰富**：唯一出现官方 provider 扩张并已关联实现 PR 的项目（#155633/#155634 Databricks Unity Gateway）。
- **企业级认证集成最完整**：唯一涉及企业数据平台 provider 接入的项目。

**技术路线差异：** OpenClaw 采用**重 gateway 调度 + SQLite state 存储 + 插件源码捕获**架构，这一路线正是当日 P0 缺陷集中爆发的根源（WAL 无界增长、插件源码每命令重写 1.1–1.4 GB、state-lifecycle 租约争用）。相比之下，NanoBot/ZeroClaw 正主动去编译期耦合（NanoBot ripgrep 原生替换、ZeroClaw 编译期 feature flag → 运行时 WASM 插件），OpenClaw 的插件机制则以磁盘成本为代价。

**规模反噬风险：** 384 条待合并 PR + 多条 P0 标注 `no-new-fix-pr`，维护者决策带宽已成为生态级瓶颈。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite / 状态存储膨胀与损坏** | OpenClaw（#143524 WAL 1.4–2.8 GB、#157325）、NanoClaw（#3951 每分钟 SqliteError）、NanoBot（#4798 并发写入损坏）、CoPaw（#7931 分页 transcript） | 无界增长、并发写、崩溃窗口丢数据 |
| **资源生命周期与锁租约** | OpenClaw（#158095、#159094 state-lifecycle）、ZeroClaw（#11197 撤销后仍生效）、NanoClaw（#3947） | 租约争用、僵尸进程、容器生命周期 |
| **并发写入正确性** | NanoBot（#5953 atomic writes）、ZeroClaw（#11136 并发 file_edit 静默丢编辑）、OpenClaw（#117262） | 无文件级锁导致静默数据丢失 |
| **上下文不可回收内容** | CoPaw（#7853、#8009 会话永久不可用、#4525 cron checkpoint）、NanoBot（#5956 compaction notice）、Hermes（#126434 压缩段） | 媒体/二进制载荷毒化上下文，需兜底机制 |
| **模型/提供商接入标准化** | PicoClaw（Tsubasa #3397）、NanoClaw/Moltis/IronClaw（Tsubasa PR/Issue）、NanoBot（Claude on Vertex #5955） | OpenAI 兼容层成为默认接入形态 |
| **跨平台与非 UTF-8 健壮性** | Hermes（#122239 cp936、#106487 中文 IME）、NanoClaw（#3951 Linux rootful）、LobsterAI（#973 macOS 快捷键） | Windows/macOS/Linux 与 CJK 环境适配缺口 |
| **更新器可靠性** | OpenClaw（#156112、#154924、#158231）、NanoClaw（#3906、#3907）、Hermes（#125375 误报成功）、NullClaw（#354 Homebrew 静默失效） | 升级后静默失效、误报"启动成功" |
| **可观测性 / 状态可见** | NullClaw（#631 GET /status）、NanoBot（#5908 tokens/sec）、Hermes（#125375/#126470） | 外部工具观测、真实状态反馈 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用自主智能体 + 企业 provider（Databricks） | 自托管中大规模部署、Windows/长期运行主机 | 重 gateway + SQLite + 插件源码捕获 |
| **ZeroClaw** | 多租户 RBAC / OIDC / 运行时 WASM 插件 | 多租户生产环境、身份边界敏感场景 | Rust + 编译期 → 运行时插件迁移；gateway 分离路线（v0.9.0） |
| **Hermes Agent** | Desktop UI + 可插拔 SessionDB | 桌面 + 长期在线网关、多用户 | Desktop/TUI 双端；SessionDB 后端解耦 RFC |
| **NanoClaw** | `/update-nanoclaw` 更新流程 + Gateway 角色化 | Docker/Linux 自托管 | 网关确立为一等容器角色；Iron Proxy 容器体系 |
| **NanoBot** | 多平台渠道（飞书/OneBot）+ 工具生态 | 中小规格自托管、多 IM 渠道 | WebUI/TUI 一致事件源；原生工具优先（ripgrep） |
| **CoPaw** | Console 终端 + 上下文治理 | 桌面用户、可访问性需求 | 多标签终端 + 媒体载荷回收；首 contributor 友好 |
| **NullClaw** | 多渠道双向化（钉钉/邮件 IMAP） | 通道集成用户 | 通道能力补齐优先；工具可配置化 |
| **PicoClaw** | 硬件/嵌入式场景（Sipeed） | 多通道部署（IRC/钉钉/DeltaChat） | 通道健壮性债务重，维护响应弱 |
| **ZeptoClaw** | 工具输出完整性（spill 机制） | 大输出工具调用场景 | 最小改动式健壮性修复 |
| **IronClaw** | WebUI v2 + 基准测试追踪 | 基准/评估导向 | NEAR 生态；pinchbench 常态化失败分类 |
| **LobsterAI** | OpenClaw 网关加固 + IM 通道 | 桌面 Agent、IM 场景 | 下游加固者角色；安全 IPC 修补（#974、#1034） |

**关键分野：** OpenClaw 走"平台化 + 生态入口"路线；ZeroClaw 走"多租户安全 + 插件化"路线；Hermes/NanoClaw/CoPaw 走"桌面 + 端到端体验"路线；其余多为**垂直渠道或下游加固者**。

---

## 6. 社区热度与成熟度

**第一层｜超大规模高速迭代（OpenClaw）**
500/500 级吞吐，稳定性欠账与修复吞吐同步放大。处于**"高频修复 + 高风险积压"**阶段——修复流量健康（116 条 PR 合并）但释放阻塞 Bug 密度偏高，版本健康度承压。

**第二层｜中高活跃、评审通道承压（ZeroClaw、Hermes、NanoClaw）**
日更新 42–50 条区间。ZeroClaw 43 条待合并 + 多条 `stale-candidate`，Hermes 37 条待合并，NanoClaw 单人 bus factor 偏低 —— 三者共性是**合并通道成为瓶颈**，处于"讨论/评审日"而非"落地日"。

**第三层｜快速闭环型质量巩固（NanoBot、CoPaw、NullClaw）**
Issue→PR 闭环短（CoPaw 当日问题当日提交修复 #8009→#8010；NanoBot 回归修复优先合并）。处于**质量巩固阶段**，方向明确、响应快、无高危积压。

**第四层｜维护响应薄弱 / 待观察（PicoClaw、LobsterAI、IronClaw、ZeptoClaw、Moltis、TinyClaw）**
- **PicoClaw 最危险**：当日 0 合并、10 条 PR 全部待审、安全渠道缺失（#3405），外部已宣告 fork —— 处于**维护信任流失临界点**。
- **LobsterAI**：基础设施加固强但 4 条用户缺陷 `[stale]` 半年，呈"重核心链路、轻用户反馈"失衡。
- **IronClaw / ZeptoClaw / Moltis**：低活跃、无风险信号，属稳定维护期。

---

## 7. 值得关注的趋势信号

**① "更新器可靠性"成为独立风险面。** 五个项目（OpenClaw、NanoClaw、Hermes、NullClaw、LobsterAI）同日出现升级失败或升级后静默失效。"能装上"已从基础能力退化为高频故障点——开发者应把更新路径视为独立的一等测试对象，而非安装脚本的附庸。

**② 误报成功比失败更伤信任。** Hermes #125375（打印"✓ Service started"但服务未起）、#126470（记录 restarted 但网关宕机）、NullClaw #354（Homebrew 升级后 daemon 静默停）——**"看起来成功但实际失败"**类反馈集中出现。对开发者：状态上报必须端到端验证，而非仅反映命令退出码。

**③ 上下文治理从"压缩"转向"生命周期"。** CoPaw #4525 用户直接质疑压缩方案，OpenClaw/NanoClaw 暴露 SQLite 无界增长，NanoBot 出现并发损坏 —— 行业共识正从"截断/压缩"转向**可回收内容兜底 + 自动 checkpoint & reset**。这是本周期最明确的架构级主线。

**④ 静默数据丢失是最难察觉的缺陷类别。** ZeroClaw #11136（并发编辑静默丢弃）、NanoBot #5953（崩溃窗口丢数据）、OpenClaw #109478（多行参数 `\n` 注入）—— 均为无报错的信息损失，对开发者：并发写入的原子性与文件级锁应作为默认设计约束。

**⑤ 非英语环境是尚未被满足的规模化市场。** Hermes（cp936/中文 IME/CJK 路径）、LobsterAI（macOS 平台惯例）、PicoClaw（IRC 长消息）—— CJK 与跨平台编码缺口集中出现，提示**国际化健壮性**是拉开用户体验差距的低投入高回报区。

**⑥ 生态正在进行"接口标准收敛"。** Tsubasa 提供商接入在 5 个项目同日出现，OpenAI 兼容层成为默认接入形态 —— 模型接入正在商品化，**差异化的价值将上移至编排、上下文治理与安全边界**。

**⑦ 维护者决策带宽成为真正的稀缺资源。** ZeroClaw/Hermes/OpenClaw 大量 `needs-decision` / `stale-candidate` 与长期 RFC（Hermes #23717 悬置 4.5 个月）表明：**合并与拍板吞吐，而非代码产出，正在决定项目节奏**。对技术决策者的直接启示：选择依赖项目时，应优先评估其**评审响应速度**与 bus factor，而非单纯看活跃度数字。

**⑧ 安全渠道健全度是项目治理的试金石。** PicoClaw 因缺少私密漏洞报告渠道被公开点名，与其维护信心流失同步发生 —— 安全响应流程的缺失，往往先于社区流失出现，可作为早期预警指标。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报（2026-09-28）

## 1. 今日速览

项目今日维持高强度活跃：过去 24 小时共有 7 条 Issue 更新（5 条新开/活跃、2 条关闭）与 24 条 PR 更新（12 条待合并、12 条已合并/关闭），无新版本发布。合并侧的节奏明显快于 Issue 侧，且当日关闭的 PR 集中于 WebUI/Codex 兼容、会话历史恢复、工具性能优化等用户可直接感知的缺陷，说明维护者正优先清理影响日常使用的回归问题。同时，多个 p0/p1 级稳定性议题（sudo 授权循环、并发文件写入、exec 超时）在 Issue 与 PR 池中同步推进，项目健康度整体偏正面，但并发写入与权限交互两条主线仍是最突出的风险点。

## 2. 版本发布

今日无新版本发布，故无更新内容、破坏性变更或迁移注意事项可述。

> 注：Issue #5898 中用户提及当前版本为 v0.3.5。

## 3. 项目进展

今日已合并/关闭的 PR 共 12 条，以下为信息较充分的代表性条目：

- **PR #5952 [CLOSED] fix(webui): restore Codex title generation and diagnose API failures** — 修复 WebUI 标题生成请求 `reasoning.effort="none"` 被 GPT-6 Astra 以 HTTP 400 `unsupported_value` 拒绝的问题，改为使用模型默认 reasoning。该缺陷此前会导致主回复成功但后台标题生成静默失败。
  链接: HKUDS/nanobot PR #5952
- **PR #5950 [CLOSED] fix(tui): restore saved session history from canonical events** — 修复自 #5823 将 `/webui-thread` 改为返回 canonical events 后，TUI 仍读取已移除的 `messages` 字段、导致打开已保存会话显示空记录的问题。
  链接: HKUDS/nanobot PR #5950
- **PR #5948 [CLOSED] feat(tools): use installed ripgrep for native file search** — 当 exec PATH 中存在 ripgrep 时，注册 `rg` 替代 `grep` 与 `find_files` 进行内容搜索和文件发现，属性能类改进。
  链接: HKUDS/nanobot PR #5948
- **PR #5949 [CLOSED] fix(web): propagate web_fetch failures as structured tool errors** — 修复 `web_fetch` 失败被上报为“成功”的工具执行结果，失败请求现纳入 harness 错误生命周期并获得恢复指引。
  链接: HKUDS/nanobot PR #5949
- **PR #5861 [CLOSED] fix(tokens): warm fallback tokenizer in background** — 在 gateway 启动时以守护线程预热 fallback tokenizer，CLI/SDK 侧懒预热，就绪前聊天使用 UTF-8 字节估算（p1）。其关联的冲突修复见 PR #5920。
  链接: HKUDS/nanobot PR #5861
- **PR #5951 [CLOSED] docs: refresh contributors and preserve historical credits** — 贡献者墙由 365 增至 392 个账号，新增 27 位贡献者并保留既有署名，同时修复更新器遗漏历史贡献者及 UTF-8 读写问题。
  链接: HKUDS/nanobot PR #5951
- **PR #5920 [OPEN] fix: 按 token 截断时保留完整 Unicode 字符** — 解决汉字/Emoji 跨 token 截断时产生 `�` 替换字符的问题，已合入上游 `main` 的 `5294dc2` 以解决与 tokenizer 后台初始化的冲突，目前仍处 OPEN。
  链接: HKUDS/nanobot PR #5920

**整体推进幅度评估**：合并流集中在“回归修复 + 体验一致性”（WebUI/Codex/TUI/错误上报），另有 ripgrep 与 tokenizer 预热两项底层改进落地。这些合并直接消解了 #5939、#5843 所反映的一类问题链路，项目在稳定性和响应速度方向上前进了一步；但当日未见新功能级里程碑合并。

## 4. 社区热点

按评论数排序的讨论焦点：

1. **Issue #5924 [OPEN] [p1] Agent gets stuck in sudo loop - becomes unusable**（评论 5，buzzing 最高）— sudo 授权仅维持一轮，授权在 agent 执行命令前即失效，导致 agent 陷入反复请求 sudo 的循环；且达到最大迭代次数后出现异常行为。
   链接: HKUDS/nanobot Issue #5924
2. **Issue #5908 [OPEN] [p2] feat(webui): show live tokens/sec while streaming a reply**（评论 4）— 用户希望在 WebUI 流式回复时看到实时 tokens/sec，以判断模型是正常工作还是卡住。
   链接: HKUDS/nanobot Issue #5908
3. **Issue #5898 [OPEN] [bug] gpt-6 model series through Github Copilot**（评论 3）— v0.3.5 通过 GitHub Copilot 访问 OpenAI 6 系列模型失败，报 provider configuration 错误。
   链接: HKUDS/nanobot Issue #5898
4. **Issue #4798 [OPEN] Concurrent file writes from different sessions not serialized — workspace file corruption**（评论 2）— 文件工具无文件级锁，跨会话并发写入导致数据损坏。
   链接: HKUDS/nanobot Issue #4798
5. **Issue #5956 [OPEN] Feishu 无 in-place edit 能力，compaction notice 应可关闭（同类 #5784）**（评论 1）— `NOTIFICATION_AUDIENCES` 将 `ContextCompactionEvent` 硬映射到 `channel`，导致 `started` 与 `succeeded` 两个阶段事件都发往源频道。
   链接: HKUDS/nanobot Issue #5956

**诉求分析**：热点集中在“可观测性”与“多平台交互适配”两类。`#5924` 是当日唯一 p1 且评论最多，反映权限交互模型存在结构性缺陷；`#5908` 与 `#5956` 分别来自 WebUI 与飞书渠道，说明用户对“过程可见、通知可控”有明确期待；`#5898` 则延续了模型/供应商快速迭代带来的兼容性压力。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 | 是否有 fix PR |
|---|---|---|---|
| p0 | PR #5953 atomic writes for file tools to prevent torn content and crash-window loss（`WriteFileTool`/`EditFileTool`/`ApplyPatchTool` 使用 `write_text`/`write_bytes` 原地截断，导致并发撕裂读与崩溃窗口丢数据） | PR OPEN | 是（#5953） |
| p1 | Issue #5924 Agent 陷入 sudo 循环、不可用 | Issue OPEN | 未见对应 fix PR |
| p1 | PR #5861 hex fallback tokenizer 后台预热 | 已关闭 | 是（已合并） |
| p2 | Issue #5898 GitHub Copilot 下 GPT-6 模型系列不可用（v0.3.5） | Issue OPEN | 未见对应 fix PR |
| p2 | Issue #4798 跨会话并发文件写入未串行化，workspace 文件损坏 | Issue OPEN | 相关方向见 PR #5953 |
| p2 | Issue #5956 飞书 compaction notice 无法关闭 | Issue OPEN | 未见对应 fix PR |
| — | PR #5957 fix(exec): enforce session hard timeouts without polling（`yield_time_ms` 启动的命令可能超过配置超时继续运行） | PR OPEN | 是（#5957） |
| — | PR #5949 `web_fetch` 失败被上报为成功 | 已关闭 | 是（已合并） |
| 已关闭 | Issue #5843 [BUILD stage latency] 长会话在 LLM 调用前等待 10 秒至数十秒 | Issue CLOSED | — |
| 已关闭 | Issue #5939 OpenAI Codex 模型发现遗漏 GPT-6 Sol 与 Luna（固定 client_version） | Issue CLOSED | — |

**要点**：`#5924`（sudo 循环）是目前唯一被标为 p1 且尚无 fix PR 的活跃缺陷，风险最高；`#5953` 作为 p0 修复直接针对长期存在的 `#4798` 并发写入损坏问题，即便仍待合并，也表明该问题已进入修复轨道。`#5843` 与 `#5939` 的关闭说明 BUILD 阶段延迟与 Codex 模型发现问题在今日得到处理。

## 6. 功能请求与路线图信号

- **WebUI 实时 tokens/sec 指示器**（Issue #5908，p2）— 纯前端可观测性增强，实现成本较低且讨论活跃（4 条评论），是较可能被纳入下一版本的候选。
  链接: HKUDS/nanobot Issue #5908
- **Claude on Vertex AI provider**（PR #5955，OPEN）— 新增基于 `AsyncAnthropicVertex` 的 provider，支持 Application 默认凭据等；带 `documentation`、`test`、`new-provider` 标签，属完整度较高的新功能提交。
  链接: HKUDS/nanobot PR #5955
- **子智能体并发结果聚合**（PR #5954，OPEN）— 新增 `aggregate` 选项，将并发 subagent 结果合并为单条通知，避免部分结果先行触发主 agent。
  链接: HKUDS/nanobot PR #5954
- **MCP 工具启停配置**（PR #1502，CLOSED/conflict）— 为 MCP server 配置增加 `enabled_tools`/`disabled_tools`，仅注册指定工具。该 PR 创建于 2026-03-04，今日以 `conflict` 状态关闭，相关需求是否重新推进待观察。
  链接: HKUDS/nanobot PR #1502
- **心跳推理与通知解耦**（PR #1443，CLOSED/conflict）— 引入 `sendReasoning` 配置（默认 `false`），使 heartbeat agent 默认静默推理，仅显式 `message` 工具调用触达用户。同为长期开放后以冲突关闭。
  链接: HKUDS/nanobot PR #1443
- **Feishu 通知可关闭**（Issue #5956）— 请求让 compaction notice 可配置关闭，并指出同类问题 #5784。
  链接: HKUDS/nanobot Issue #5956

**判断**：`#5955` 与 `#5954` 为当日新开且标签完整（含 test），最接近可合入状态；`#5908` 取决于维护者对 WebUI 指标展示的取舍。两个 3 月创建、今日以 `conflict` 关闭的 PR（#1502、#1443）提示其功能意图在当前代码基线上需要重新实现。

## 7. 用户反馈摘要

- **权限交互是最大痛点**：`#5924` 中用户描述 sudo 授权“只维持一轮”，授权在命令执行前失效，agent 陷入循环并最终不可用，属直接阻断使用的问题。
- **模型兼容性是持续性摩擦**：`#5898` 用户报告 v0.3.5 通过 GitHub Copilot 使用 OpenAI 6 系列模型失败，仅得到 “provider configuration or service status” 这类无法定位根因的提示；`#5939` 指出同一账号在 Codex 客户端可选全部三款 GPT-6 模型，但 WebUI 预设选择器遗漏 GPT-6 Sol 与 Luna——反映客户端与产品侧模型发现逻辑不一致。
- **对性能与可观测性的诉求明确**：`#5908` 希望借 tokens/sec 区分“正常生成”与“卡住”；`#5843`（已关闭）反映长会话在 BUILD 阶段每轮需等待约 10 秒甚至数十秒，等待完全发生在 provider 请求之前。
- **渠道能力差异影响体验**：`#5956` 指出飞书不具备 in-place edit 能力，因此 `started`/`succeeded` 两阶段 compaction 事件重复发往源频道造成噪声，用户希望可关闭该通知。
- **数据安全担忧**：`#4798` 用户明确报告跨会话并发写入导致 workspace 文件损坏，并指出文件工具在写入前未获取任何文件级锁。

## 8. 待处理积压

- **Issue #4798 [OPEN]**：创建于 2026-07-06，至今约 84 天，中间仅 2 条评论，更新至今日。跨会话并发写入导致文件损坏属数据安全问题，虽然 PR #5953 已从原子写入角度提出 p0 修复，但 Issue 本身仍在开放状态，建议维护者明确其与 #5953 的对应关系并同步进展。
  链接: HKUDS/nanobot Issue #4798
- **PR #5811 [OPEN] refactor(agent): persist subagent sessions through shared execution**：创建于 2026-09-18，已开放约 10 天，涉及通过共享 `SessionExecutor` 执行委派任务并持久化为 `subagent:<task_id>` 会话，属架构级变更，需要重点评审。
  链接: HKUDS/nanobot PR #5811
- **长期 PR 集中关闭需复盘**：PR #1355（创建于 2026-02-28）与 PR #1502（2026-03-04）、PR #1443（2026-03-02）均在今日以 `conflict` 状态关闭，开放周期超过 6 个月。建议维护者评估这些功能意图是否应重新立项，避免贡献者投入流失。
  链接: HKUDS/nanobot PR #1355 | HKUDS/nanobot PR #1502 | HKUDS/nanobot PR #1443

---

**说明**：本日报全部内容基于提供的 Issue/PR 元数据与摘要，未对未披露的评论正文、代码细节或未列出的 PR（24 条中仅展示 15 条）作任何推断。PR 的 `评论: undefined` 表示所给数据未包含该字段。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-28

## 1. 今日速览

今日项目保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 27、已关闭 23），PR 更新 50 条（待合并 37、已合并/关闭 13），无新版本发布。合并侧以长期挂起的 Desktop UI 修复（队列提示展开、模型 pill 截断、provider 级开关）集中落地为主，新提交侧则以会话状态、配置健康检查、认证凭证等核心链路修复为主。未决事项中 P1 级问题集中在会话/工作区数据安全（kanban 工作区误删、pin 与压缩段不一致）与安全边界（cron provider key 绑定），需要优先关注。整体看，项目处于"高吞吐、无发布"的密集修复期，社区参与稳定但决策类 RFC 仍处积压状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR 主要为长期挂起的 Desktop 体验修复，多个对应 Issue 同步关闭：

- [#49342](https://github.com/NousResearch/hermes-agent/pull/49342)（CLOSED）feat(desktop): Edit Models 对话框新增 provider 级开关，可一键启停某供应商下全部模型族，替代逐模型族手动切换。
- [#46007](https://github.com/NousResearch/hermes-agent/pull/46007)（CLOSED）fix(desktop): 队列提示支持两行换行预览并新增展开/折叠，修复 Issue #45664。
- [#49341](https://github.com/NousResearch/hermes-agent/pull/49341)（CLOSED）fix(desktop): 移除模型 pill 的 `max-w-40`（160px）限制并放宽至 `max-w-56`（224px），解决带会话状态后缀的长模型名截断。
- [#46008](https://github.com/NousResearch/hermes-agent/pull/46008)（CLOSED）fix(desktop): 将 `readFileDataUrl` 上限从 16 MB 提升至 25 MB，与网关 `image.attach_bytes` 单图上限对齐。
- [#95826](https://github.com/NousResearch/hermes-agent/pull/95826)（CLOSED）feat(desktop): 浏览器面板快捷键（⌘⇧L / Ctrl+Shift+L）由"仅打开"改为真正的开/关切换。

推进幅度评估：本轮合并集中在 Desktop 交互层，属体验层面的渐进改善；核心运行时（会话状态、网关、安全）的实质修复仍停留在待合并的 PR 队列中（见第 5 节）。同时，一组 6 月创建的 Old PR 在今日集中关闭，说明积压清理正在进行。

## 4. 社区热点

- [#23717](https://github.com/NousResearch/hermes-agent/issues/23717)（OPEN，24 评论，👍10）**RFC: Pluggable SessionDB Provider — PostgreSQL、MySQL 及更多**。讨论"热更新死亡螺旋"（Hermes 运行中同时 `git pull`/更新）问题，提出可插拔 SessionDB 后端。这是今日评论数与点赞数双高的议题，且创建于 2026-05-11、更新至今日，说明长期悬而未决。背后诉求：多用户/生产部署场景下对会话存储可扩展性与热更新的刚性需求，已超出一个普通 feature 的边界，属架构级决策。
- [#123801](https://github.com/NousResearch/hermes-agent/issues/123801)（OPEN，12 评论）macOS Desktop 重复渲染同一条 assistant 回复，且存储仅一行、completion 仅一次。高评论数反映复现困难、排查成本高，用户关注度高。
- [#122424](https://github.com/NousResearch/hermes-agent/issues/122424)（CLOSED，10 评论，👍1）`package.json` 将 `js-yaml` 锁定在已知 CVE 区间（GHSA-2883-xcg3-v3hh，CPU DoS；GHSA-48c2-rrv3-qjmp），透传依赖 `yaml<2.9` 同样受影响。今日已关闭，安全依赖问题得到处置。
- [#122239](https://github.com/NousResearch/hermes-agent/issues/122239)（OPEN，8 评论）Windows cp936/GBK 区域下 `hermes update` 在版本检测阶段抛出 `UnicodeDecodeError` 回溯。反映非 UTF-8 环境下的编码健壮性缺口。

## 5. Bug 与稳定性

按严重程度排列（P1 → P3）：

**P1**
- [#126508](https://github.com/NousResearch/hermes-agent/issues/126508)（OPEN）`hermes kanban gc / archive / complete` 会删除仍被非终止任务使用的 scratch `workspace_path`（共享工作区路径）。**工作区数据丢失风险。** 今日新开，暂无 fix PR。
- [#126306](https://github.com/NousResearch/hermes-agent/pull/126306)（PR OPEN，type/security）fix(cron): 存储的 provider key 应绑定到配置的 origin 而非主机名。当前校验仅比较主机名与允许子域，存在 key 被导向覆盖 `base_url` 的安全边界问题。**已有 fix PR。**

**P2**
- [#123801](https://github.com/NousResearch/hermes-agent/issues/123801)（OPEN）macOS Desktop 重复渲染同一条 assistant 回复。**已有对应修复 PR [#126472](https://github.com/NousResearch/hermes-agent/pull/126472)**，该 PR 同时覆盖 TUI launch-cwd 与 stale-transcript 回归。
- [#122239](https://github.com/NousResearch/hermes-agent/issues/122239)（OPEN）Windows cp936 下 `hermes update` 抛 `UnicodeDecodeError`（`version_info.py` 解码 git 输出未指定编码）。暂无 fix PR。
- [#125375](https://github.com/NousResearch/hermes-agent/issues/125375)（OPEN）`hermes gateway start` 从 PM venv 写入的 launchd 服务无法启动，却打印 "✓ Service started"。**误报成功状态，误导用户。** 暂无 fix PR。
- [#126518](https://github.com/NousResearch/hermes-agent/issues/126518)（OPEN）`process_manage` 传 session-id 前缀（schema 明示支持）时未标记 completion 已消费，导致重复完成通知/额外网关轮次。暂无 fix PR。
- [#118753](https://github.com/NousResearch/hermes-agent/issues/118753)（OPEN，needs-decision）Curator 自动不活跃归档可能静默破坏 kanban swarm 的 verifier/synthesizer 角色（硬编码 skill `requesting-code-review`、`humanizer`）。暂无 fix PR。
- [#106487](https://github.com/NousResearch/hermes-agent/issues/106487)（OPEN，👍1）Web dashboard chat 的 desktop IME（中文拼音）输入不可靠，汉字乱码/丢失，粘贴是唯一可靠路径。暂无 fix PR。
- [#126470](https://github.com/NousResearch/hermes-agent/issues/126470)（OPEN）多 profile 主机上 `hermes update`：host-gateway 重启继承启动 profile 的 `HERMES_HOME`，网关保持宕机但记录为 "restarted"（fleet 0 行 → partial / exit 1）。暂无 fix PR。
- [#126434](https://github.com/NousResearch/hermes-agent/pull/126434)（PR OPEN）fix(sessions): pin 应覆盖其之后由压缩发布的 segment，否则 `hermes sessions prune` 会删除本应保留的段。**已有 fix PR。**

**P3 / 已关闭**
- [#124583](https://github.com/NousResearch/hermes-agent/issues/124583)（CLOSED）terminal 工具后台提示引用了不存在的工具名 `process(action=...)`，实际工具名为 `process_manage`。
- [#84588](https://github.com/NousResearch/hermes-agent/issues/84588)（CLOSED）Desktop MEDIA 附件对非 ASCII（CJK）路径显示百分号编码文件名（`mediaName()` 的 `new URL()` 陷阱）。
- [#68937](https://github.com/NousResearch/hermes-agent/issues/68937)（CLOSED）macOS Desktop 中 PDF/文件链接经 `shell.openPath` 打开失败，回退为在 Finder 中显示。
- [#55616](https://github.com/NousResearch/hermes-agent/issues/55616) / [#56152](https://github.com/NousResearch/hermes-agent/issues/56152)（均 CLOSED）Desktop 固定会话（pinned sessions）在重启后丢失，而 `state.db` 数据完好；#56152 被标记为 duplicate。
- [#66521](https://github.com/NousResearch/hermes-agent/issues/66521)（CLOSED）Desktop 远程网关仅提供 session-token 字段，缺少用户名/密码登录，无法连接 basic-auth 后端。

## 6. 功能请求与路线图信号

- **可插拔 SessionDB（PostgreSQL/MySQL）** [#23717](https://github.com/NousResearch/hermes-agent/issues/23717)：架构级 RFC，处于 `needs-decision` + `sweeper:risk-session-state` / `sweeper:risk-compatibility` 标记，尚无实现 PR。短期内进入下一版本的可能性取决于维护者决策。
- **provider 级开关** [#49344](https://github.com/NousResearch/hermes-agent/issues/49344)：对应实现 PR [#49342](https://github.com/NousResearch/hermes-agent/pull/49342) 今日已合并，已落地。
- **队列提示全文可读** [#45664](https://github.com/NousResearch/hermes-agent/issues/45664)：对应 PR [#46007](https://github.com/NousResearch/hermes-agent/pull/46007) 今日已合并，已落地。另有更完整的实现 PR [#126547](https://github.com/NousResearch/hermes-agent/pull/126547)（队列预览两行换行 + >140 字符条目展开）待合并。
- **模型 pill 截断** [#49340](https://github.com/NousResearch/hermes-agent/issues/49340)：对应 PR [#49341](https://github.com/NousResearch/hermes-agent/pull/49341) 今日合并；另有 PR [#126546](https://github.com/NousResearch/hermes-agent/pull/126546) 提出完全移除宽度上限待合并。

路线图信号：Desktop/TUI 交互细节（配置对话框、队列面板、模型选择器、浏览器面板快捷键）是社区持续输入的主要方向，且修复周期已缩短至当日可合并。核心架构类需求（#23717）仍无实现动作。

## 7. 用户反馈摘要

- **生产部署与热更新的矛盾**：#23717 的 24 条评论集中讨论"运行中更新"导致的会话状态问题，表明用户正在真实地将 Hermes 用于长期在线的网关/多用户场景，而非仅本地试用。
- **非英语环境体验缺口**：#122239（Windows cp936）、#106487（中文 IME 输入乱码）、#84588（CJK 路径百分号编码）共同指向 CJK/非 UTF-8 环境下的编码与输入法处理不足，这是今日最集中的一类用户痛点。
- **"看起来成功但实际失败"的误导性反馈**：#125375（打印 ✓ Service started 但服务无法启动）、#126470（记录 restarted 但网关宕机）反映用户对安装/更新链路的可观测性与真实状态反馈有明确诉求。
- **数据持久化信任**：#55616/#56152（pin 丢失）、#126508（工作区被误删）、#126434（pin 未覆盖压缩段导致 prune 误删）聚集于"数据会不会莫名其妙消失"，是用户信任度的关键敏感区。
- **正向反馈信号**：UI 类 Issue（#45664、#49340、#49344）在今日集中关闭并有对应 PR 合并，说明用户提出的桌面端可用性建议得到了实质响应。

## 8. 待处理积压

- [#23717](https://github.com/NousResearch/hermes-agent/issues/23717)（创建 2026-05-11，已悬置约 4.5 个月）可插拔 SessionDB RFC：24 条评论、10 个赞，标记 `needs-decision`，属需维护者拍板的架构级议题，建议优先给出明确结论或阶段性方案。
- [#118753](https://github.com/NousResearch/hermes-agent/issues/118753)（创建 2026-09-22，标记 `needs-decision`）Curator 自动归档静默破坏 kanban swarm 角色，涉及自动清理与硬编码 skill 的冲突，需决策而非单纯修复。
- [#106487](https://github.com/NousResearch/hermes-agent/issues/106487)（创建 2026-09-09）中文 IME 在 Web dashboard 输入不可靠，已持续约 3 周，影响中文用户的可用性。
- [#68937](https://github.com/NousResearch/hermes-agent/issues/68937)（创建 2026-07-21，今日关闭）与 [#66521](https://github.com/NousResearch/hermes-agent/issues/66521)（创建 2026-07-17，今日关闭）显示部分 7 月 Issue 积压时间较长，今日得以清理，建议关注剩余同类长期未响应条目。
- 今日待合并 PR 达 37 条，其中多条为当日新提的核心链路修复（#126306 安全、#126434 会话、#126548 媒体缓存、#126549/#126550 网关），建议维护者评估合并节奏，避免修复队列持续积压。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-28

## 1. 今日速览

今日项目活跃度**中等偏上，但维护响应信号偏弱**：过去 24 小时 Issues 更新 7 条（新开/活跃 5、关闭 2），PR 更新 10 条，**无新版本发布**。最值得注意的信号是 10 条 PR 全部处于待合并状态、当日 0 合并，而同日新开的 Issue #3398 公开宣称仓库「看起来已无人维护」并另建活跃 fork，仓库维护节奏与社区期望之间出现明显张力。同时，安全类诉求集中出现：#3405 要求开启私密漏洞报告渠道，此前的高危安全审计 Issue #258 于今日被关闭。当日提交者高度集中于 x1F916，其一人提交了 5 条修复 PR 与 2 条 Issue，社区贡献集中度高但维护方缺位。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

**今日无 PR 被合并或关闭**，项目在代码合并层面无实质推进。当日全部 10 条 PR 均为待合并状态，其中较有价值的待审修复包括：

- [PR #3399](https://github.com/sipeed/picoclaw/pull/3399) `fix(updater): select the matching 32-bit ARM release asset` — 修复 32 位 ARM 更新时误装 arm64 包的问题（资产名匹配使用子串 `"arm"` 命中 `arm64`）。
- [PR #3403](https://github.com/sipeed/picoclaw/pull/3403) `fix(agent): deliver async tool results to the originating session` — 修复异步工具（`spawn`）结果被默认 agent 主会话接走的问题。
- [PR #3401](https://github.com/sipeed/picoclaw/pull/3401) `fix(channels): make Reload synchronous and nil-safe` — 修复 `Manager.Reload` 对无实例通道调用 `Stop`/`Start` 的空指针风险。
- [PR #3400](https://github.com/sipeed/picoclaw/pull/3400) `fix(config): persist all api_keys and enabled flag of multi-key models` — 修复多 key 模型保存时丢失其余 key 与 `Enabled` 标志。

以上修复若被合并，将同时改善更新器、通道管理与配置持久化三条核心路径的可靠性，但当前均未进入主线。

## 4. 社区热点

按评论数与反应数排序：

- [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) `[CLOSED] [stale] [Feature] Better support long messages in IRC` — 14 条评论，为今日讨论最活跃条目。诉求为让 IRCv3 下的长消息（默认 512 字节限制、换行即新消息）被视为单一连贯消息。该 Issue 已被关闭（标记 stale），说明社区方案未落地。
- [Issue #258](https://github.com/sipeed/picoclaw/issues/258) `[CLOSED] [type: bug, priority: high, domain: tool] Security Audit (2026-02-16)` — 5 条评论、1 个 👍，今日关闭。摘要显示报告曾标注「CRITICAL VULNERABILITIES DETECTED」，属长期悬置后关闭的高优先级安全议题。
- [Issue #3382](https://github.com/sipeed/picoclaw/issues/3382) `v0.3.1: DingTalk gateway still panics on stream SDK reconnect` — 1 条评论，指出 #973 中同一 panic 在 v0.3.1（commit 2cf030d2）上仍可复现。

**背后诉求**：社区焦点集中在「长期未解决的稳定性与安全债务」，以及 stale 机制关闭了仍有真实需求的特性请求，容易被视为维护不活跃的证据。

## 5. Bug 与稳定性

按严重程度排列：

1. **严重 — 钉钉网关重连 panic（回归未修复）**
   [Issue #3382](https://github.com/sipeed/picoclaw/issues/3382)：v0.3.1 上 `send on closed channel`（client.go:161），上游 `dingtalk-stream-sdk-go` v0.9.1，与 #973 同源问题。**当前无 fix PR**。
2. **严重 — 异步工具结果路由错误**
   [PR #3403](https://github.com/sipeed/picoclaw/pull/3403)：`spawn` 结果仅携带 `<channel>:<chat_id>`，被默认 agent 主会话处理，可导致消息投递到错误会话。**已有 fix PR（待合并）**。
3. **高 — 通道 Reload 空指针风险**
   [PR #3401](https://github.com/sipeed/picoclaw/pull/3401)：已启用但初始化失败的通道（如未设 token 的 Telegram）会导致对 nil 调用 `Stop`/`Start`。**已有 fix PR（待合并）**。
4. **高 — 32 位 ARM 更新装错架构**
   [PR #3399](https://github.com/sipeed/picoclaw/pull/3399)：`picoclaw update` 在 32 位 ARM 上安装 arm64 包。**已有 fix PR（待合并）**。
5. **中 — 多 key 模型配置持久化丢失**
   [PR #3400](https://github.com/sipeed/picoclaw/pull/3400)：每次保存仅保留首个 key、丢失 `Enabled`、污染的 `Fallbacks`。**已有 fix PR（待合并）**。
6. **中 — Web UI 卡顿**
   [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) `[stale] fix laggy interface`：聊天区文本量大时界面卡顿，提交者称已在 desktop 与 mobile（Brave）构建测试。**已有 fix PR（待合并，自 2026-08-27 起未合并）**。

另有 [Issue #3404](https://github.com/sipeed/picoclaw/issues/3404) `Reliability fixes with reproducers (wave 1)` 声称在 `main`（bbf6893）与 v0.3.1 上发现多个可复现 bug，并指出部分为「此前报告过甚至修复过但复现」的问题，值得维护方逐条核对。

## 6. 功能请求与路线图信号

- [Issue #3397](https://github.com/sipeed/picoclaw/issues/3397) `Add Tsubasa to the existing OpenAI-compatible provider catalog`：用户已可通过自定义 API base 的 `openai` 模型项使用 Tsubasa，但 provider 选择器未提供，诉求为补入目录。**无对应 PR**，属低改动量、易纳入的候选。
- [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) `feat(tools): add Keenable web search provider`：新增 `web_search` 提供方，无需 API key 即可通过公共端点工作，降低新用户试用门槛。**已有 PR，待合并**。
- [PR #3396](https://github.com/sipeed/picoclaw/pull/3396) `feat(channels/onebot): add opt-in toggle for acknowledgement reactions`：为 OneBot 增加 `reaction_enabled`（默认 `false`）开关以关闭自动确认表情。**已有 PR，待合并**。
- [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) IRC 长消息合并支持：已 closed/stale，短期纳入下一版本的可能性低。

综合判断：**Keenable provider（#3370）与 OneBot 反应开关（#3396）是当前最接近可落地的功能项**；Tsubasa provider 仅有 Issue、尚无实现。

## 7. 用户反馈摘要

- **安全响应渠道缺失**：[Issue #3405](https://github.com/sipeed/picoclaw/issues/3405) 用户希望私下报告若干安全问题，但仓库未开启 GitHub private vulnerability reporting，且找不到安全联系人（无 `SECURITY.md`）。这与此前 [Issue #258](https://github.com/sipeed/picoclaw/issues/258) 的安全审计关闭形成呼应，反映安全流程不健全。
- **维护可持续性担忧**：[Issue #3398](https://github.com/sipeed/picoclaw/issues/3398) 用户指出仓库「当前看起来无人维护」，但社区兴趣与需求仍显著，因此另建并积极维护 fork `afjcjsbx/picoclaw`。这是对项目健康度最直接的外部负面信号。
- **长期未修问题反复出现**：[Issue #3382](https://github.com/sipeed/picoclaw/issues/3382) 明确以版本号与 commit 复现出与此前相同的 panic，说明用户对「已报告问题未闭环」有明确不满。
- **使用场景信号**：IRC 长消息（#3287）、钉钉网关（#3382）、OneBot（#3396）、DeltaChat（#3222）、Web UI（#3347）覆盖了多通道用户的真实部署面，通道健壮性是该类用户的核心关切。

## 8. 待处理积压

- [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) `refactor(deltachat): cleanup implementation, documentation -200LOC` — 创建于 2026-07-03，已滞留近三个月，涉及删除旧特性、改用官方中继列表、将密钥迁至 jsonrpc、重命名 `invite_link`，属可能含破坏性变更的重构，需维护者评估。
- [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) `[stale] fix laggy interface` — 创建于 2026-08-27，标记 stale 但仍具实用价值，界面卡顿是直接影响所有 Web 用户体感的问题。
- [PR #3353](https://github.com/sipeed/picoclaw/pull/3353) `[stale] fix(channels): bound tool feedback animations` — 创建于 2026-08-31，限制工具反馈动画最长五分钟，防止生命周期清理遗漏导致消息被无限编辑。
- [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287) — 虽已关闭，但以 stale 方式结案，14 条评论显示需求真实存在，建议重新评估而非搁置。
- [Issue #258](https://github.com/sipeed/picoclaw/issues/258) — 今日关闭，但曾标注 critical 漏洞；建议公开关闭原因与处置结论，以避免安全可信度受损。

**整体健康度提示**：当日新增修复 PR 数量可观且质量导向（含复现步骤），但合并数为 0、stale 积压持续、安全渠道缺失、外部 fork 公开宣告维护权，建议维护方优先处理「合并关键 fix PR」与「开启私密漏洞报告 + 补 `SECURITY.md`」两项，以在短期内扭转社区对项目活跃度的判断。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-28

## 1. 今日速览

NanoClaw 今日处于**高强度维护期**：24 小时内 Issues 更新 4 条、PR 更新 42 条（待合并 23 / 已合并关闭 19），但**无新版本发布**。活跃度评分为高，且集中在核心维护者 `glifocat` 一人身上，呈现出典型的"单人高速修补"模式。今日主旋律是 `/update-nanoclaw` 升级流程与网关（Gateway）适配的稳定性问题——多条 Issue 与 PR 都围绕更新、安装、容器生命周期展开。同时也暴露出 CI 不稳（当日 8 次 main 运行中 5 次失败）等工程健康度风险。

---

## 2. 版本发布

今日无新版本发布。当前最新标注版本为 **v2.4.0**（commit `c313d061`），仍有多个针对该版本的 bug 在修复中（见第 5 节）。

---

## 3. 项目进展

今日有 19 个 PR 被合并/关闭，推进方向以"更新与安装流程健壮性"为主：

- **#3948 [CLOSED] `fix(update): keep gateway-owned containers through cutover and residue reaping`**
  将 `gateway` 确立为官方容器角色，并让网关自身的容器在 `/update-nanoclaw` 过程中持续存活。修复了此前更新会移除 Iron Proxy 容器、导致后续每次 agent 生成失败的问题。
  链接: nanocoai/nanoclaw PR #3948

- **#3906 [CLOSED] `[bug] update-nanoclaw: controller archive misses setup/ since #3816`**
  修复了文档所述控制器归档自 #3816 起缺失 `setup/` 目录、以及 stage-rooted 命令在依赖就绪前执行的两个故障。
  链接: nanocoai/nanoclaw Issue #3906

- **#3907 [CLOSED] `[bug] Gateway detection fails when a nested pnpm prints a workspace warning to stdout`**
  修复了 OneCLI 安装健康时仍报 "No installed gateway could be detected" 的网关探测失败问题。
  链接: nanocoai/nanoclaw Issue #3907

- **#3839 [CLOSED] `[bug] registry-skills: add-opencode reapply pass hangs in bun test until the 6-hour cancel`**
  关闭了长达 12 天的测试挂起问题（bun test 中 reapply 阶段挂起直至 6 小时超时取消）。
  链接: nanocoai/nanoclaw Issue #3839

**整体推进度评估**：更新流程（`/update-nanoclaw`）从"多个可导致安装后不可用的故障"向"可用"明显迈进；但大量修复 PR 仍处 OPEN 状态（23 条），实际落地尚未完成。

---

## 4. 社区热点

今日数据中**评论数与反应数均偏低**（Issues 最多 1 条评论，PR 评论数未显示，👍 全为 0），说明当前以核心团队内部修复为主，社区参与度有限。较值得关注的焦点：

- **#3948 [CLOSED]** — 更新流程容器角色治理，是今日最具架构意义的改动。
  链接: nanocoai/nanoclaw PR #3948
- **#3951 [OPEN]** — 唯一今日新开的活跃 Issue，反映 Linux 下的真实使用痛点（见第 5、7 节）。
  链接: nanocoai/nanoclaw Issue #3951
- **#3953 [OPEN]** — arm64 主机上的网关安装失败，呼应跨平台适配诉求。
  链接: nanocoai/nanoclaw PR #3953

**背后诉求**：社区的隐性需求高度集中在"**更新/安装一次成功**"与"**跨平台可用**"两点，而非新功能。

---

## 5. Bug 与稳定性

按严重程度排列：

**🔴 高 — 数据/功能受损，无 fix PR**
- **#3951 [OPEN]** `ncl tasks delete half-fails on Linux`：在 Linux（rootful Docker）上删除计划任务后，残留孤儿 `active` 会话且无 mailbox，主机随后每分钟记录 `SqliteError: unable to open database file`。根因是 Docker 创建的 root 属主挂载点阻塞了会话目录 `rmSync`。**目前无对应 fix PR，为今日最需优先处理的问题。**
  链接: nanocoai/nanoclaw Issue #3951

**🔴 高 — 更新流程不可用（已修复/修复中）**
- **#3906 [CLOSED]**：更新归档缺失 `setup/`，已关闭（v2.4.0 受影响）。
  链接: nanocoai/nanoclaw Issue #3906
- **#3907 [CLOSED]**：网关注册探测被 pnpm workspace 警告干扰，已关闭。
  链接: nanocoai/nanoclaw Issue #3907

**🟠 中 — 测试挂起（已关闭）**
- **#3839 [CLOSED]**：bun test 中 add-opencode reapply 挂起至 6 小时取消。
  链接: nanocoai/nanoclaw Issue #3839

**🟡 工程健康度 — CI 不稳（有 fix PR）**
- **#3959 [OPEN]**：当日 8 次 main 运行中 **5 次**因 agent-runner 容器测试变红；根因为 Bun 1.4.0 `spawnSync` 可能丢失子进程退出码而永久等待（oven-sh/bun#3406）。已有 fix PR，改为异步 spawn bun 子进程。
  链接: nanocoai/nanoclaw PR #3959

**其余 open 修复 PR（均已带 fix）**：#3958（日志序列化不再崩溃）、#3957（pre-task 脚本超时杀整个进程组）、#3947（删除会话/agent group 后停止容器）、#3956（rollback 停止真实运行的 nohup host）、#3883（卸载移除 Iron Control 数据库）、#3919、#3949、#3901 等。

---

## 6. 功能请求与路线图信号

今日**无明确的新功能请求**，PR 以修复、加固与文档为主。可识别的路线图信号（均为修复驱动，非新功能）：

- **网关抽象与角色化**：#3948 将 `gateway` 设为官方容器角色 → 表明项目正在把"网关"确立为一等概念。
- **凭证适配器边界**：#3954（文档说明 OneCLI 与 Iron 适配器无法检测并发值轮换）、#3960（错误信息按凭证而非 provider 命名）→ 提示凭证管理正被系统化梳理。
- **跨平台支持**：#3953（arm64 上原生运行 Iron Control）、#3901（HTTPS 代理下主机服务联网）→ 若被合入，可能进入下一版本。
  链接: nanocoai/nanoclaw PR #3953 ｜ nanocoai/nanoclaw PR #3901

结合以上，**下一版本（若发布）预计以"更新/安装流程稳定性 + 网关适配"为主题**，而非新增功能。

---

## 7. 用户反馈摘要

- **#3951（作者 businesslifers）**：Linux rootful Docker 用户。痛点在于删除任务**半失败**——任务看似删除，实则残留会话与数据库不可读错误，每分钟刷屏日志。典型场景：Docker 以 root 创建挂载点与宿主用户权限冲突。属**明确不满**。
  链接: nanocoai/nanoclaw Issue #3951
- **#3906（作者 glifocat）**：报告 `/update-nanoclaw` 流程两处失败，均关于控制器可加载内容，直接影响升级可用性。属**不满/受阻**。
  链接: nanocoai/nanoclaw Issue #3906
- **#3907（作者 glifocat）**：在 OneCLI 安装健康的情况下仍报网关探测失败，环境为 Linux v2.4.0。属**受阻**。
  链接: nanocoai/nanoclaw Issue #3907
- **#3839（作者 glifocat）**：bun test 长时间挂起，反映**开发体验**问题。
  链接: nanocoai/nanoclaw Issue #3839

综合看，用户反馈集中于**更新与安装的可靠性**与**Linux/Docker 环境适配**，满意度信号在今日数据中未体现正面反馈。

---

## 8. 待处理积压

- **#3951 [OPEN]** — 今日新开，尚无 fix PR。因涉及数据可读性错误（SqliteError 每分钟报错），建议**最高优先级**。
  链接: nanocoai/nanoclaw Issue #3951
- **#3839** — 自 2026-09-16 创建，历时 12 天才于今日关闭，此前长期挂起，提示类似测试挂起问题可能被延迟处理。
  链接: nanocoai/nanoclaw Issue #3839
- **23 条待合并 PR** — 数量偏高，其中多条（#3883 创建于 09-24、#3919/#3920 创建于 09-25、#3901 创建于 09-25）已开启多日仍 OPEN，提醒维护者关注**合并吞吐**，避免修复积压。
  示例: nanocoai/nanoclaw PR #3883 ｜ nanocoai/nanoclaw PR #3920
- **维护者集中度风险** — 今日绝大多数 Issue/PR 由 `glifocat` 单人提交与处理，bus factor 偏低，建议关注核心维护者的负载与分配。

---

**数据说明**：本日报全部信息基于 2026-09-28 所提供 GitHub 数据，PR 评论数标注为 `undefined`、👍 均为 0，故"社区热度"维度以 Issue 关注点与创建/关闭时序推断，未作外部补充。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-09-28

## 1. 今日速览

今日 NullClaw 呈现典型的「维护清理型」活跃度：过去 24 小时共 17 条 Issue 更新与 6 条 PR 更新，但其中 16 条 Issue 被关闭、5 条 PR 被合并/关闭，仅新增 1 条开放 Issue（#764）与 1 条待合并 PR（#1013）。无新版本发布，说明项目处于积压清理与合并窗口阶段，而非功能发布期。高赞反馈集中在配置文档说明（#613，👍4）与 README 基准数据准确性（#473，👍1）。整体健康度良好，但存在跨月未响应的开放项（#764 创建于 4 月），需维护者持续关注。

---

## 2. 版本发布

今日无新版本发布（0 个 Releases）。

---

## 3. 项目进展

今日 5 条 PR 被合并/关闭，推进方向集中在**通道能力补齐**与**提供商扩展**：

- **PR #990 [CLOSED] feat(providers): add Eden AI as an OpenAI-compatible gateway**
  以 OpenAI 兼容网关方式接入 Eden AI，复用 `OpenAiCompatibleProvider`，未新增独立 provider 实现。
  https://github.com/nullclaw/nullclaw/pull/990

- **PR #319 [CLOSED] Fix DingTalk Message Sending & Recall Support**
  将钉钉从「仅 webhook」升级为官方 Bot API，补齐消息发送与撤回能力。这与今日关闭的 Issue #376（钉钉只发不收）形成呼应。
  https://github.com/nullclaw/nullclaw/pull/319

- **PR #527 [CLOSED] feat: adaptive intelligence pipeline + email/WhatsApp Web channels**
  引入回合后质量闭环（Turn Scorer，按权重为每回合打分，不额外消耗 API 调用），并新增 email / WhatsApp Web 通道。
  https://github.com/nullclaw/nullclaw/pull/527

- **PR #667 [CLOSED] feat(email): full bidirectional IMAP polling with IDLE and network resilience**
  将 email 通道从「仅发送」改造为双向 IMAP 轮询，支持 IDLE 推送与网络异常降级。
  https://github.com/nullclaw/nullclaw/pull/667

- **PR #411 [CLOSED] 工具定制系统（触发词优先级 + 参数管理）**
  允许用户为工具配置自定义触发关键词、优先级与预置参数。
  https://github.com/nullclaw/nullclaw/pull/411

整体来看，今日在**通道双向化（钉钉、邮件）、提供商接入、工具可配置性**三条线上有实质推进，项目成熟度向前一步。

---

## 4. 社区热点

今日评论数最多的是 5 条评论的 Issue（#861、#190、#354、#376、#619、#477、#764 均为 5 评论），但更值得关注的是**高赞反应**所指向的诉求：

- **Issue #613 [CLOSED] 改进 config.json 每项配置说明 —— 👍4（今日最高）**
  用户反馈 onboard 生成的配置文件中部分选项「看不出实际用途」，要求补齐每个配置项及子项的描述、可选值与默认值。这是今日反应最强烈的诉求，直指文档可用性。
  https://github.com/nullclaw/nullclaw/issues/613

- **Issue #764 [OPEN] 将 NullClaw logo 加入 Agent Skills 官方客户端列表 —— 今日唯一新开/未关闭 Issue**
  指出 agentskills.io 已上线 clients 页面，建议将 NullClaw 列入支持 skills 的客户端。属于生态曝光诉求，非代码问题。
  https://github.com/nullclaw/nullclaw/issues/764

- **Issue #473 [CLOSED] README 基准数据已失效 —— 👍1**
  用户指出 benchmark 快照表中「二进制 1MB、内存 1MB」已过时，建议更新以免引发争议，涉及项目对外可信度。
  https://github.com/nullclaw/nullclaw/issues/473

**诉求分析**：今日热点并非新功能，而是**文档与对外数据的准确性**（#613、#473）以及**生态位曝光**（#764）。这说明核心功能已相对可用，用户注意力转向「能否看懂、能否被生态承认」。

---

## 5. Bug 与稳定性

按严重程度排列（今日涉及的均已关闭，但修复 PR 未在今日数据中一一对应标注）：

1. **Issue #408 [CLOSED] Tool call 解析破坏合法 JSON —— 高严重度（解析正确性）**
   LLM 生成合法工具调用 `{"name": "memory_recall", ...}` 时，工具名被错误解析为 `":"` 而非 `memory_recall`。这会直接导致工具调用失败，属核心链路 bug。
   https://github.com/nullclaw/nullclaw/issues/408

2. **Issue #354 [CLOSED] Homebrew 升级后服务静默失效 —— 高严重度（安装/回归）**
   根因是 `nullclaw service install` 写入 LaunchAgent plist 时硬编码了带版本号的路径，`brew upgrade nullclaw` 后 daemon 静默停止工作。
   https://github.com/nullclaw/nullclaw/issues/354

3. **Issue #477 [CLOSED] [bug] 飞书 WS 断开 —— 中高严重度（通道稳定性）**
   gateway 已启动（gpt-5.2 / openai，3 个组件活跃）但飞书 WebSocket 连接断开。
   https://github.com/nullclaw/nullclaw/issues/477

4. **Issue #665 [CLOSED] [bug] error.NoResponseContent —— 中严重度（错误可诊断性）**
   使用作者预编译 Windows 版本时触发，日志显示 memory plan 已解析（backend=hybrid）。
   https://github.com/nullclaw/nullclaw/issues/665

5. **Issue #932 [CLOSED] [bug] 文档中 Zig 版本无效 —— 中低严重度（文档/构建）**
   文档要求 Zig 0.15.2，但用该版本构建会因缺少符号而失败。
   https://github.com/nullclaw/nullclaw/issues/932

6. **Issue #619 [CLOSED] [enhancement] 改进错误信息 `error(channel_loop): Agent error: error.ApiError` —— 👍1**
   属错误可读性改进请求（被标记为 enhancement），非崩溃。
   https://github.com/nullclaw/nullclaw/issues/619

7. **Issue #427 [CLOSED] 自定义 skill 无法被 agent 调用 —— 中严重度（功能可用性）**
   skill 在 `skills list` / `skills info` 中可见，但 agent 实际请求时不可用。
   https://github.com/nullclaw/nullclaw/issues/427

> 说明：以上 Issue 今日均为 CLOSED 状态，但所给数据未标明各自对应的 fix PR，故不臆测修复来源。

---

## 6. 功能请求与路线图信号

结合今日 Issue 与已有 PR，以下需求具备较高落地可能性：

- **新增搜索后端 ddgs（Issue #623 [CLOSED]）**：请求为 `web_search` 工具增加聚合型元搜索库 ddgs。属工具链扩展，改动相对独立。https://github.com/nullclaw/nullclaw/issues/623
- **视觉管线 / 多模态（Issue #624 [CLOSED]）**：请求支持把图片与文件直接送入 agent（自动 base64 编码）以服务多模态 LLM。用户明确将其列为「最想念的功能之一」。https://github.com/nullclaw/nullclaw/issues/624
- **GET /status 监控端点（Issue #631 [CLOSED]，👍1）**：为 gateway 增加返回 agent 状态的 JSON 端点，便于外部工具/看板观测哪些 agent 处于 active/idle，免去 shell 调用。https://github.com/nullclaw/nullclaw/issues/631
- **子代理生成/跨提供商互通（Issue #190 [CLOSED]）**：询问是否支持不同 agent 使用不同 provider 的 subagent 派生与通信。属架构级需求。https://github.com/nullclaw/nullclaw/issues/190
- **Web UI 的隧道/公网接入（Issue #495 [CLOSED]）**：提出 `Web UI <==> CloudFlare/Nginx <==> NullClaw` 的部署形态。https://github.com/nullclaw/nullclaw/issues/495

**下一版本候选判断**：ddgs 搜索后端（#623）与 GET /status（#631）改动面小、边界清晰，最易被纳入；视觉管线（#624）与 subagent（#190）涉及面更大，更可能需要更长周期。

**今日唯一待合并 PR**：
- **PR #1013 [OPEN] feat(providers): 新增 Tsubasa chat-completions provider**
  将 Tsubasa 接入现有 OpenAI 兼容 provider 工厂、onboarding 列表与模型目录；由 `TSUBASA_API_KEY` 选择凭据。两个公开模型均为 32,768 token 上下文窗口，默认输出预算 8,192 token。
  https://github.com/nullclaw/nullclaw/pull/1013

---

## 7. 用户反馈摘要

- **文档看不懂是首要痛点**：Issue #861 用户直言 README 中 Web UI 设置部分「70% 看不懂」，希望用非术语的「人话」说明如何在无头 VPS 上启用 Web UI。https://github.com/nullclaw/nullclaw/issues/861
- **配置项缺乏解释**：Issue #613 认为 onboard 生成的配置文件中部分选项「没有实际用途」，需要逐项说明默认值与可选值（今日最高赞 👍4）。https://github.com/nullclaw/nullclaw/issues/613
- **安装升级路径不够健壮**：Issue #354 反映经 Homebrew 升级后 daemon 静默失效，属打包/服务安装层面的体验缺陷。https://github.com/nullclaw/nullclaw/issues/354
- **通道能力不完整**：Issue #376 反馈钉钉「按 config.json 配置后发消息收不到回复」，而 CLI agent 对话正常，gateway 有相应日志——反映通道收发不对称。https://github.com/nullclaw/nullclaw/issues/376
- **错误信息难以定位问题**：Issue #619 与 #665 均反映日志只给出 `error.ApiError` / `error.NoResponseContent` 这类笼统信息，用户无法判断具体原因。https://github.com/nullclaw/nullclaw/issues/619 https://github.com/nullclaw/nullclaw/issues/665
- **对外数据可信度**：Issue #473 指出 README 基准表中二进制体积与内存数据已过时，担心「在未来引发争议」。https://github.com/nullclaw/nullclaw/issues/473

**满意面**：Issue #624 用户表示已把图片分析「自己写成 skill 在 nullclaw 里用」，说明 skills 机制具备可扩展性，用户愿意在其上自行补齐能力。

---

## 8. 待处理积压

- **Issue #764 [OPEN] 将 NullClaw 加入 Agent Skills 官方客户端列表**
  创建于 2026-04-03，至 2026-09-28 已近半年仍未关闭，是今日唯一仍开放的 Issue。虽非代码问题，但属低成本、高曝光度的生态动作，建议优先处理。
  https://github.com/nullclaw/nullclaw/issues/764

- **PR #1013 [OPEN] Tsubasa provider**
  创建于 2026-09-28，为今日新建，尚在待合并状态，建议尽快进入 review。
  https://github.com/nullclaw/nullclaw/pull/1013

- **文档类问题反复出现（#861、#613、#932、#473）**
  今日多项已关闭 Issue 都指向同一类根因：文档与配置说明滞后于实现。建议做一次系统性文档审计，而非逐条修补，以降低同类 Issue 的重复发生率。

> 提示：本次数据中 Issues 与 PR 的创建时间跨度从 2026-03 至 2026-09，多数在今日集中关闭，属批量清理。维护者后续可关注「批量关闭」是否伴随对应修复提交，以确保证据链完整。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-28

## 1. 今日速览

IronClaw 今日活跃度中等偏低，无新版本发布。过去 24 小时共 2 条 Issue 更新（全部为新开）、8 条 PR 更新（6 条待合并、2 条已关闭）。当日实质推进主要来自两处：一是 WebUI 无效聊天线程路由重定向的修复 PR 被关闭（#5132），二是两条新 Issue 分别聚焦基准测试失败分类和 Tsubasa 提供商注册配置。当日 PR 队列中过半为 Dependabot 自动化依赖升级，尚未合并，积压时间较长，需维护者关注。整体项目健康度稳定，但社区讨论热度较低，所有新开 Issue 均无评论与反应。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日已关闭/合并的 PR 共 2 条，其中实质性工程推进为：

- **[CLOSED] #5132** — `fix(webui-v2): redirect invalid chat thread routes`（作者 flyagents，创建 2026-06-22，更新 2026-09-28）
  - 内容：将保留或无效的 `/chat/:threadId` 路由重定向回 `/chat`；在判定深链线程缺失前等待线程列表稳定；在列表加载期间保持本地创建/选中的线程处于活动状态。
  - 链接：nearai/ironclaw PR #5132
  - 意义：改善 WebUI v2 聊天深链的健壮性，避免无效线程 ID 导致的空白或错误页面，并减少线程列表竞态引发的误判。

另一条关闭的 PR 为依赖升级批次（#8104），属常规维护。整体来看，项目今日向前推进幅度有限，主要落在 WebUI 路由健壮性修复与依赖维护层面。

## 4. 社区热点

今日整体讨论热度极低：所有新开 Issue 与活跃 PR 的评论数均为空、👍 均为 0，无显著热点。按更新时效，最值得关注的两条新开 Issue 为：

- **Issue #8116** — `Daily ironclaw failure taxonomy — 2026-09-28`（作者 pranavraja99，2026-09-28 创建并更新，评论 0，👍 0）
  - 内容：对 pinchbench 套件的每日失败分类分析，提及"pinchbench（70 个未通过项）"及一次"弱模型的健康运行（45/115 通过）"。
  - 链接：nearai/ironclaw Issue #8116
  - 诉求分析：反映出项目正在对基准测试失败进行常态化归因，关注模型在基准套件上的通过率下滑与失败模式。

- **Issue #8115** — `Add a Tsubasa registry entry with an explicit 32K context-budget path`（作者 cenab，2026-09-28 创建并更新，评论 0，👍 0）
  - 内容：指出 IronClaw 已有 OpenAI 兼容后端，但用户配置 Tsubasa 时需手动输入 endpoint 与 model；建议增加具名 provider 以简化配置，并引入显式的 32K 上下文预算路径。
  - 链接：nearai/ironclaw Issue #8115
  - 诉求分析：用户希望降低第三方模型提供商的接入门槛，并对上下文窗口预算进行显式管理，指向配置体验与资源控制两方面需求。

## 5. Bug 与稳定性

今日数据中未报告新的崩溃或回归 Bug。可关联的稳定性相关动态：

- WebUI 路由健壮性修复（#5132，已关闭）：处理无效 `/chat/:threadId` 路由与线程列表竞态，属预防性稳定性改进，无严重级别标注。链接：nearai/ironclaw PR #5132
- Issue #8116 的失败分类分析间接反映基准测试层面存在失败项（pinchbench 70 个未通过），但该 Issue 未描述产品崩溃，且无对应 fix PR。链接：nearai/ironclaw Issue #8116

严重程度评估：今日无高severity问题暴露；已识别问题均有修复或处于分析阶段。

## 6. 功能请求与路线图信号

- **Tsubasa 具名 provider 注册（Issue #8115）**：请求为 Tsubasa 增加注册表条目并提供显式的 32K 上下文预算路径，替代当前手动填写 endpoint/model 的方式。判断：这是明确的配置体验增强请求，若被采纳可能以新 provider 条目形式落地；但目前尚无对应实现 PR，短期内是否进入下一版本尚不明确。链接：nearai/ironclaw Issue #8115

其余当日 PR 均为文档刷新（#6698）、代码库知识图谱刷新（#7988）与依赖升级，不构成功能路线图信号。

## 7. 用户反馈摘要

今日 Issue 均无评论，故无来自评论区的直接用户反馈。从 Issue 正文可提炼的诉求：

- **配置体验痛点**（Issue #8115）：用户配置 Tsubasa 时必须手动输入 endpoint 与 model，期望通过具名 provider 简化接入。链接：nearai/ironclaw Issue #8115
- **基准表现关注**（Issue #8116）：对弱模型在 pinchbench 上的运行结果（45/115 通过）与失败分布进行记录，反映对模型质量与失败模式的持续追踪需求。链接：nearai/ironclaw Issue #8116

今日无明显的满意度或不满意表达。

## 8. 待处理积压

以下 PR 已开放较长时间且仍在等待处理，建议维护者优先关注：

- **PR #6698** — `docs: update OpenWiki wiki`（ironclaw-ci[bot]）创建于 **2026-07-27**，更新于 2026-09-28，已开放逾两个月；属自动生成的文档刷新，按变更管理策略需人工审核合并。链接：nearai/ironclaw PR #6698
- **PR #7834** — `chore(deps): bump the wasm group ...`（dependabot[bot]）创建于 **2026-08-23**，风险等级 medium，涉及 wasmtime、wasmtime-wasi、wit-component 等 wasm 相关升级；已积压约一个月。链接：nearai/ironclaw PR #7834
- **PR #7988** — `chore(agents): refresh codebase knowledge graph`（ironclaw-ci[bot]）创建于 **2026-08-29**，为夜间工作流生成的代码库记忆快照刷新，待人工审核。链接：nearai/ironclaw PR #7988
- **PR #8078** — `chore(deps): bump the tokio-ecosystem group`（dependabot[bot]）创建于 **2026-09-06**，涉及 tower-http 0.7.0→0.7.1 与 tokio-tungstenite 升级。链接：nearai/ironclaw PR #8078

此外，当日新提交的大型依赖批次 **PR #8114**（everything-else 组，31 项更新，size XL）与 GitHub Actions 批次 **PR #8103**（8 项更新）仍在待合并状态，建议与上述积压项统一安排审查节奏。链接：nearai/ironclaw PR #8114 ；链接：nearai/ironclaw PR #8103

---

*说明：本报告所有信息均基于所提供的 GitHub 数据，未包含数据之外的推断事实。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-28

## 1. 今日速览

今日项目呈现「清理积压为主、活跃开发为辅」的双轨态势：过去 24 小时共 11 条 PR 更新（10 条合并/关闭、1 条待合并），5 条 Issue 更新（4 条活跃、1 条关闭），无新版本发布。核心开发集中在一组 OpenClaw 网关稳定性修复（#2775、#2774、#2773、#2772、#2771），直指启动流程、锁回收与旧会话迁移等启动阻塞问题。但值得警惕的是，4 条仍处于 OPEN 的 Issue 全部带有 `[stale]` 标记，创建于 2026-03-27，被系统性搁置近半年后在今日被批量刷新，反映维护资源长期偏向核心链路而忽视用户体验类反馈。整体活跃度中等偏上，健康度表现为「基础设施加固强、用户侧响应弱」。

## 2. 版本发布

今日无新版本发布，无 Releases 数据。

## 3. 项目进展

今日合并/关闭的 10 条 PR 中，OpenClaw 网关稳定性构成最集中的推进主线：

- **PR #2775** `fix(openclaw): start the gateway once on app launch`（已关闭）：修复打开应用时 OpenClaw 网关被启动三次（~80s 才稳定、出现三个不可用窗口）的问题，根因包括 IM 通道同步在 MCP bridge 监听前就拉起网关，导致加载了不完整配置。链接：netease-youdao/LobsterAI PR #2775
- **PR #2772** `skip orphan non-ASCII agent dirs when counting legacy session stores`（已关闭）：修复纯 CJK 命名的 agent 目录被 OpenClaw 归一化为 `main` 并跳过迁移，但 `listLegacySessionStorePaths` 仍将其计入，导致启动门控永远报告残留旧会话、陷入死锁。链接：netease-youdao/LobsterAI PR #2772
- **PR #2771** `reclaim gateway locks whose recorded PID was reused`（已关闭）：修复非正常关机后 Windows 将记录的网关 PID 复用给无法检查的 SYSTEM/提权进程，使锁被误判为活跃持有者、网关启动与一键修复双双失败的场景。链接：netease-youdao/LobsterAI PR #2771
- **PR #2774** `improve repair timeout handling and diagnostics`（已关闭）：为一键修复增加基于输出活动的有界等待（至少 5 分钟，stdout/stderr 可延长），并保存命令退出诊断。链接：netease-youdao/LobsterAI PR #2774
- **PR #2773** `test(openclaw): verify legacy session discovery recovery`（已关闭）：补齐旧会话目录判定修复后的回归测试与 Electron 实操验收记录。链接：netease-youdao/LobsterAI PR #2773

此外，以下存量修复于今日关闭，覆盖 UI、安全与 IM 通道：

- **PR #969** 修复 `AgentCreateModal` 弹窗超出视口时标题栏/操作栏被截断、按钮不可点击的问题。链接：netease-youdao/LobsterAI PR #969
- **PR #974** 修复 `MarkdownContent.tsx` 中 `safeUrlTransform` 未拦截协议相对 URL（`//evil.com/steal`）的安全问题。链接：netease-youdao/LobsterAI PR #974
- **PR #975** 修复小米蜂网关在被踢下线事件后无法恢复（`v2Client` 残留非空导致 `start()` 早退）。链接：netease-youdao/LobsterAI PR #975
- **PR #1034** 修复 `shell:openExternal` IPC 接口未校验 URL 协议、可被用于打开 `file://` 或自定义协议的风险（关联 Issue #1031）。链接：netease-youdao/LobsterAI PR #1034
- **PR #1037** 修复 Windows 上 WSL 与 Git Bash 共存时构建脚本报 `Missing required command: node` 的问题。链接：netease-youdao/LobsterAI PR #1037

综合看，项目在「启动可靠性」这一核心链路上向前迈进了明显一步，多个长期存在的启动死锁/不可恢复场景被系统性收敛。

## 4. 社区热点

今日无 PR 显示明确评论数（多为 undefined）。Issue 侧讨论热度普遍偏低，评论数最多的仅为 2 条：

- **Issue #1035**（已关闭，2 条评论）：`NimGateway 重连后消息去重缓存未清空，导致正常消息被静默丢弃` —— 模块级全局 `processedMessages` Map 被所有 `NimGateway` 实例共享，重连后旧消息 ID 残留（TTL 5 分钟内），造成正常消息被静默丢弃。该问题已关闭。链接：netease-youdao/LobsterAI Issue #1035
- **Issue #968 / #971 / #972 / #973**（均为 OPEN，各 1 条评论）：详见下文。链接：#968、#971、#972、#973

背后的诉求集中于：IM 消息可靠性（#1035）与核心 Agent 使用体验（#968/#971/#972）两条线，前者已获修复，后者仍在积压。

## 5. Bug 与稳定性

按严重程度排列：

**高 —— Agent 输出不可用**
- **Issue #971** `内容输出错乱，答非所问`（OPEN，[stale]）：让 Agent 生成小说封面却输出大量不相干内容。链接：netease-youdao/LobsterAI Issue #971

**高 —— 网关卡死不可恢复**
- **Issue #972** `QWEN 模型关闭后卡在"AI引擎正在启动网关"`（OPEN，[stale]）：使用途中关闭模型并保存后回主界面，不断弹窗，重连模型仍不可用。链接：netease-youdao/LobsterAI Issue #972

**中 —— 浏览器行为异常**
- **Issue #968** `skill-creator 查询杭州天气，浏览器显示非杭州且未关闭`（OPEN，[stale]）：Agent 调用 skill-creator 时弹窗数据与目标不符且无法关闭。链接：netease-youdao/LobsterAI Issue #968

**中 —— 平台规范/可用性**
- **Issue #973** `macOS 快捷键修饰键错误显示 Ctrl 而非 Cmd`（OPEN，[stale]）：设置 > 快捷键面板使用 `Ctrl+N`、`Ctrl+F`、`Ctrl+,` 等，不符合 macOS 惯例。链接：netease-youdao/LobsterAI Issue #973

**已修复（今日关闭）**
- **Issue #1035** NimGateway 重连后消息去重缓存未清空。链接：netease-youdao/LobsterAI Issue #1035

需注意：#968/#971/#972/#973 均无对应 fix PR 记录，其中 #972 的「网关卡死」与今日合入的 OpenClaw 启动链路修复（#2771、#2772、#2775）主题相近，存在被同一组修复间接缓解的可能，但数据中未建立明确关联。

## 6. 功能请求与路线图信号

今日数据中用户未提出明确的新功能请求，Issue 均为缺陷报告。可识别的改进信号：

- **macOS 平台适配**（Issue #973）：快捷键显示需符合 macOS 惯例（⌘ 而非 Ctrl），属低成本高感知的体验改进。
- **Agent 输出质量**（Issue #971）：错乱输出需从模型调用/上下文管理层面收敛，属核心能力范畴。
- **IM 通道健壮性**：NimGateway（#1035，已修复）与小米蜂（#975，已修复）的重连/恢复逻辑已被修补，预示后续版本将继续强化多 IM 网关的生命周期管理。

结合今日已合并的 OpenClaw 网关系列 PR，可判断下一版本的路线图重心仍在「网关启动/修复可靠性」，而非上述用户侧体验项。

## 7. 用户反馈摘要

- **IM 消息可靠性痛点**（#1035）：用户 MaoQianTu 定位出模块级共享缓存导致的静默丢消息，属对可靠性要求高的场景，今日已修复。链接：netease-youdao/LobsterAI Issue #1035
- **Agent 输出质量不满意**（#971）：用户期望生成封面，实际输出大量无关内容，反映对输出可控性的不满。链接：netease-youdao/LobsterAI Issue #971
- **模型切换/保存后不可用**（#972）：关闭模型再保存即导致网关卡死且弹窗循环，重连亦无效，属阻断性体验问题。链接：netease-youdao/LobsterAI Issue #972
- **Web 工具行为异常**（#968）：skill-creator 查询杭州天气返回非杭州数据且浏览器未关闭，影响对工具结果可信度的信任。链接：netease-youdao/LobsterAI Issue #968
- **平台细节不专业**（#973）：macOS 用户指出快捷键修饰键不符惯例，属细节体验扣分项。链接：netease-youdao/LobsterAI Issue #973

总体情绪偏负面，集中于「用了但结果不对/卡住」，且这些问题普遍积压近半年未获响应。

## 8. 待处理积压

以下 4 条 Issue 均创建于 2026-03-27、今日被标记 `[stale]` 刷新，评论仅 1 条、👍 均为 0，长期停滞：

- **Issue #968**（OPEN，[stale]）skill-creator 天气查询结果错误且浏览器未关闭。链接：netease-youdao/LobsterAI Issue #968
- **Issue #971**（OPEN，[stale]）内容输出错乱、答非所问。链接：netease-youdao/LobsterAI Issue #971
- **Issue #972**（OPEN，[stale]）QWEN 模型关闭后网关卡死、弹窗循环。链接：netease-youdao/LobsterAI Issue #972
- **Issue #973**（OPEN，[stale]）macOS 快捷键修饰键显示错误。链接：netease-youdao/LobsterAI Issue #973

PR 侧积压：

- **PR #1277**（OPEN，dependabot）：`chore(deps-dev): bump the electron group`，于 2026-04-02 创建、今日更新，含 electron 与 electron-builder 两项依赖升级，已搁置近半年。链接：netease-youdao/LobsterAI PR #1277

**维护者提醒**：4 条 `[stale]` Issue 均涉及用户可直接感知的功能缺陷，建议优先评估 #972（阻断性）与 #971（核心输出质量），避免长期自动化标记掩盖真实用户诉求；同时尽快处理 PR #1277 的依赖升级以降低版本落后风险。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-28

## 1. 今日速览

Moltis 今日整体处于低活跃状态：过去 24 小时 Issues 更新为 0 条，无新版本发布，仅 1 条 PR 处于待合并状态（PR #1288）。唯一进展是新 Provider 接入工作——作者 cenab 提交了将 Tsubasa 加入现有 provider setup 与 OpenAI 兼容注册表的 PR。项目今日无合并、无关闭、无用户讨论互动，社区侧基本静默。总体健康度平稳，属于"维护中、无风险信号"的一天，但缺乏来自 Issue 与评论的用户反馈输入，路线图信号主要依赖单一 PR。

## 2. 版本发布

无新版本发布，本部分省略。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目在代码主线上没有实际向前推进。

唯一在途工作为 PR #1288（状态：OPEN，未合并）：
- 链接：[moltis-org/moltis PR #1288](https://github.com/moltis-org/moltis/pull/1288)
- 内容：向现有 provider setup 与 OpenAI 兼容注册表新增 Tsubasa provider。
- 细节（据 PR 摘要）：使用 `TSUBASA_API_KEY` 环境变量，默认端点为 `https://api.tsubasa.sh/v1`，注册 `tsubasa-fast` 与 `tsubasa-pro` 两个模型，上下文窗口为 32,768 tokens。

该 PR 属于模型/提供商生态扩展方向，若合并将提升 Moltis 对不同推理后端的接入覆盖度。当前仍待合并，尚未对项目能力产生影响。

## 4. 社区热点

今日 Issues 共 0 条、PR 评论为 `undefined`（无评论数据），无讨论活跃的条目。

唯一可观察的社区动作是 PR #1288 的创建（作者 cenab，创建与更新均为 2026-09-28，👍 0）。由于该 PR 尚无评论与反应，无法判断背后存在明确的用户诉求，也无从分析社区共识或争议点。

👉 说明：本日缺少可用的互动数据，社区热度评估为"低"。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告（Issues 更新 0 条，无相关 PR）。

- 严重程度：无
- 是否已有 fix PR：不适用

稳定性方面无新增风险信号。

## 6. 功能请求与路线图信号

今日无用户提交的功能请求类 Issue。唯一可视为路线图信号的是在途 PR #1288：

- 信号：扩展 provider 生态与 OpenAI 兼容模型注册（Tsubasa）。
- 判断依据：该 PR 直接修改"setup and model registry"，属于接入层能力扩展，而非破坏性变更。
- 是否可能纳入下一版本：由于它是当前唯一在途 PR，且无新版本发布，若通过评审，它是最有可能进入下一版本的变更——但材料未提供评审状态、CI 结果或维护者反馈，无法确认其被合入的可能性。

## 7. 用户反馈摘要

今日 Issues 为 0 条，无评论数据可供提炼。因此无法提供真实用户痛点、使用场景或满意度反馈。

- 用户痛点：无数据
- 典型使用场景：无数据
- 满意/不满意：无数据

## 8. 待处理积压

基于所提供材料，今日未出现"长期未响应"的 Issue 或 PR 证据（Issues 总量为 0，唯一 PR 创建于当日，属于新提交而非积压）。

需要维护者关注的唯一待办项：

- **PR #1288**（OPEN，创建/更新均为 2026-09-28，无评论）：新建当日，暂不构成积压，但项目当日仅有此一项在途工作，建议优先评审以维持推进节奏。
  链接：[moltis-org/moltis PR #1288](https://github.com/moltis-org/moltis/pull/1288)

---

*说明：本日报所有内容均基于所提供的数据生成；Issues 与评论数据为空的部分已如实标注为"无数据"，未做推断。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-28

> 数据来源：agentscope-ai/CoPaw GitHub 仓库（Issues / PRs）。所有链接均来自本次数据；部分链接文本沿用了数据中的原始仓库标识。


## 1. 今日速览

今日 CoPaw 无新版本发布，但维护与社区活动保持高位：过去 24 小时 Issues 更新 8 条（活跃 7、关闭 1），PR 更新 16 条（待合并 12、已合并/关闭 4）。活动集中在两类问题上：**上下文/媒体载荷累积导致会话不可用**（#7853 衍生出的 #8009、#8010）与 **TaskTracker 计数不一致**（#7991、#8007）。同时出现了明显的首 contributor 参与潮（#8010、#8006、#8007、#7987–#7989 等均带 `first-time-contributor` 标签），社区贡献供给健康。整体判断：活跃度高，且围绕同一问题簇的 Issue→PR 闭环正在快速形成。

## 2. 版本发布

今日无新版本发布（Releases：无）。

## 3. 项目进展

今日合并/关闭的 PR 共 4 条：

- **#7965 [CLOSED] fix(context): reclaim historical media in Scroll and align thinking omission with token counting** — 直接针对 #7853，回收 Scroll 中的历史媒体内容，并使 thinking 的省略逻辑与 token 计数对齐。链接: agentscope-ai/QwenPaw PR #7965
- **#7956 [CLOSED] feat(console): unify settings UX and smooth conversation transitions** — 统一 Console 设置体验（可复用控件、一致的表层与本地化标签），并修复 workspace-picker 溢出与欢迎页滚动问题。链接: agentscope-ai/QwenPaw PR #7956
- **#7953 [CLOSED] fix(portability): preserve actionable per-asset import failures** — 保留可操作的逐资源导入失败信息。链接: agentscope-ai/QwenPaw PR #7953
- **#7861 [CLOSED] feat(console): add authenticated multi-tab chat terminal** — 在共享 chat/files 工作区下新增懒加载 xterm 终端，支持独立标签页与会话级工作目录。链接: agentscope-ai/QwenPaw PR #7861

**进展评估**：本日合并重点在 Console 体验与上下文治理两条线。控制台侧一次性落地「设置统一化」和「多标签终端」两个面向用户的可见能力；上下文侧则关闭了与 #7853 同源的核心修复，为后续 #8010 的根治方案铺路。

## 4. 社区热点

今日数据中评论数最集中的是 Issue **#7853**（8 条评论，已关闭）：

- **#7853 [CLOSED] ToolResultPruner 跳过媒体块（type="data"），导致 view_image 的 base64 无界累积并撑爆模型上下文** — 8 评论。链接: agentscope-ai/QwenPaw Issue #7853

**诉求分析**：这是今日全部讨论的共同源头——媒体/二进制载荷不会被裁剪，会在会话上下文中持续累积。它同时解释了今日新开的 #8009（超大图片使会话永久不可用）与 PR #8010（从媒体载荷被拒中恢复），以及已关闭的 #7965。用户的核心诉求不是单点修复，而是**上下文生命周期中「不可回收内容」的兜底机制**。

另一处活跃讨论是 **#7991**（2 评论，TaskTracker 僵尸条目导致计数虚高），指向可观测性一致性问题。链接: agentscope-ai/QwenPaw Issue #7991

## 5. Bug 与稳定性

按严重程度排列：

**高 — 会话级不可恢复**
- **#8009 [OPEN] Oversized image stored in context makes a session permanently unusable**（2026-09-28 新开）。图片超出 provider 限制被拒后，被拒的块仍留在存储上下文中并在后续每次请求重放，会话永久不可用。**已有 fix PR：#8010**（`fix(agents): recover from media payload rejections instead of failing`，first-time-contributor）。链接: agentscope-ai/QwenPaw Issue #8009 ／ agentscope-ai/QwenPaw PR #8010
- **#7853 [CLOSED] ToolResultPruner 跳过媒体块导致 base64 无界累积**（2026-09-18 创建，今日更新关闭）。已在今日关闭，配套修复见 #7965。链接: agentscope-ai/QwenPaw Issue #7853

**高 — 安全事故面（Windows）**
- **#8002 [OPEN] Windows auto 模式 + 关闭沙箱时，内联 Office COM Quit() 可关闭用户的 PowerPoint**（影响 2.1.0；该治理行为可追溯至 2.0.1 的非沙箱 shell fallback）。链接: agentscope-ai/QwenPaw Issue #8002

**中 — 桌面端进程/单实例**
- **#8000 [OPEN] 桌面端重复启动打开第二个窗口并终止首个实例的后端（Windows 无单实例保护）**（影响 2.2.1 官方 Windows 桌面版）。链接: agentscope-ai/QwenPaw Issue #8000

**中 — 计数一致性**
- **#7991 [OPEN] TaskTracker `_runs` 僵尸条目抬升 `running_task_count`，与 /api/chats 不一致**。**已有 fix PR：#8007**（`fix(task_tracker): register run only after the producer task exists`，first-time-contributor）。链接: agentscope-ai/QwenPaw Issue #7991 ／ agentscope-ai/QwenPaw PR #8007

**低 — 平台与配置**
- **#7990 [OPEN] 模型目录未为 Aliyun Token Plan 模型声明 `thinking_param_style`，Console 思考控件被隐藏/禁用**（catalog_version 2026.08.27；上游端点实际支持 `reasoning_effort`/`thinking`）。链接: agentscope-ai/QwenPaw Issue #7990

此外，PR 侧还有若干防御性修复待合并：**#7988**（grep_search 跳过二进制与内部文件，避免 `history.db-wal` 的二进制控制字节进入工具结果并持久化）、**#8006**（QQ 网关重复投递事件去重，防止非幂等命令被执行两次）、**#8003**（Windows 附件名渲染为完整路径等跨平台问题）。链接: agentscope-ai/QwenPaw PR #7988 ／ agentscope-ai/QwenPaw PR #8006 ／ agentscope-ai/QwenPaw PR #8003

## 6. 功能请求与路线图信号

- **#4525 [OPEN] Agent 自管理上下文生命周期 — cron 任务自动 checkpoint & reset**（2026-05-19 创建，今日仍有更新）。诉求：自动化工作流随上下文增长而逐渐丧失指令遵循与规则遵从能力，即便有自动压缩也不够。**信号**：与今日媒体/上下文问题簇、以及已合并的 #7965、待合并的 #7931（durable paginated transcript history）方向高度一致，上下文治理是本周期明确的主线。链接: agentscope-ai/QwenPaw Issue #4525 ／ agentscope-ai/QwenPaw PR #7931
- **#7999 [OPEN] 桌面端 UI 字体大小可调节**（建议小/默认/大/特大或连续缩放；提出者建议标签 `enhancement`、`area: desktop`、`good first issue`）。**可能落地**：PR **#8005**（`feat(console): unify interface font scaling`）今日已开，新增 12px–20px 字号设置与持久化并统一语义 token，与 #7999 诉求直接对应。链接: agentscope-ai/QwenPaw Issue #7999 ／ agentscope-ai/QwenPaw PR #8005
- **#7990 [OPEN] 为 Aliyun Token Plan 模型声明 `thinking_param_style`**。属于模型目录数据补全，改动面小。链接: agentscope-ai/QwenPaw Issue #7990
- **基础设施侧待合并项**：#8008（将 agentscope 依赖升至 2.0.9）、#8004（CLI 启动路径懒加载 `init_cmd`，避免约 5s 的导入链开销）、#7987（支持 Playwright 默认参数排除 `browser.ignore_default_args`）、#7989（Markdown 表格滚动可达性）。链接: agentscope-ai/QwenPaw PR #8008 ／ agentscope-ai/QwenPaw PR #8004 ／ agentscope-ai/QwenPaw PR #7987 ／ agentscope-ai/QwenPaw PR #7989

## 7. 用户反馈摘要

- **上下文被不可回收内容「毒化」是最强痛点**：#8009 描述了一条真实链路——生成报告并发送图片，图片高度超出 provider 接受范围被拒，随后会话永久失效；该用户在同日即提交 #8010 修复，属于「自用自修」型反馈。配合 #7853 的 8 条评论，说明该问题影响面广。
- **自动化工作流的长期可靠性焦虑**：#4525 用户指出 cron/多步长流程即便启用自动压缩，执行质量仍随上下文增长而下降——这是对「压缩」而非「重置」方案的直接质疑。
- **平台治理边界引发不安**：#8002 反映在 auto 审批 + 关闭沙箱组合下，Agent 生成的内联 Office COM 命令可关掉用户自己的 PowerPoint，属越权副作用。
- **桌面端基础体验缺口**：#8000（重复启动导致后端被终止）与 #7999（字体不可调，明确提到视力较弱用户含中老年用户场景）显示桌面端在单实例与可访问性上仍有基础欠账。
- **代理与目录配置摩擦**：#7990 指出 Console 中思考控件被隐藏/禁用，但上游端点实际支持，属于「能力存在但未被暴露」的配置类不满。

## 8. 待处理积压

- **#4525 [OPEN] Agent self-managed context lifecycle**（创建 2026-05-19，至今约 4 个月未关闭，今日仅 2 条评论）。作为与当前上下文问题簇同源的功能请求，建议维护者明确其对 #7853/#8009 系列修复的定位（是否纳入路线图）。链接: agentscope-ai/QwenPaw Issue #4525
- **PR #7931 [OPEN] feat(chat): add durable paginated transcript history**（创建 2026-09-22，今日更新，仍待合并）。改动涉及 per-session SQLite transcript 存储与游标分页，属基础存储层变更，建议优先评审以避免与后续上下文治理方案冲突。链接: agentscope-ai/QwenPaw PR #7931
- **#7990 [OPEN]**（创建 2026-09-25）与 **#8000 [OPEN]**（2026-09-27）均仅有 1 条评论，尚无对应 fix PR，处于待响应状态。链接: agentscope-ai/QwenPaw Issue #7990 ／ agentscope-ai/QwenPaw Issue #8000

---

**备注（数据完整性）**：本次数据中部分 PR 的评论数为 `undefined`，故第 4 节热点排序仅基于评论数有明确记录的条目；PR 列表为「评论数最多的 15 条」而非全部 16 条。此外，Issues/PR 链接文本中出现的仓库名与顶部来源（CoPaw）存在不一致，本报告未对链接地址做任何推断或改写。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 — 2026-09-28

## 1. 今日速览

ZeptoClaw 今日活跃度偏低但方向明确：过去 24 小时新增 2 条 Issue、1 条 PR，无版本发布、无合并或关闭记录。核心动态集中在工具输出处理缺陷（Issue #707）及其配套修复 PR（#708），两者由维护者 qhkm 同日提出，问题定位到 `src/tools/output.rs::truncate_tool_output`。社区侧出现一条关于目标模式（goal mode）的功能询问（Issue #709），尚无评论互动。整体项目健康度平稳，无回归或崩溃类紧急事项，但存在"提出即待审"的流转延迟——今日全部条目均停留在 OPEN 状态。

## 2. 版本发布

今日无新版本发布，此部分省略。

## 3. 项目进展

今日无已合并或已关闭的 PR，项目未产生实际代码合入。

唯一在途 PR 为 [#708](https://github.com/qhkm/zeptoclaw/pull/708)（feat(tools): spill oversized tool output instead of discarding it，OPEN），由 qhkm 提交。若合入，将改变超预算工具输出的处理策略：由"截断并丢弃、模型仅被告知有内容被省略"改为写入 `~/.zeptoclaw/sessions/<key>/spill/<seq>-<tool>.txt`（文件权限 0600，所在目录 0700）。该改动方向提升了模型对缺失字节的可达性，但截至今日尚未推进到合并阶段。

## 4. 社区热点

今日讨论热度整体很低，全部条目的评论数与点赞数均为 0（PR #708 的评论数据为 undefined），无实际对话发生。

- **[Issue #709](https://github.com/qhkm/zeptoclaw/issues/709)** — "is there a goal mode?"（作者 abda11ah）。用户直接询问是否存在类似 ohmypi（omp）的 `/goal` 模式，即"智能体持续工作直到满足某个条件"。这是今日唯一来自外部用户的条目，反映出用户对自主循环/目标导向执行能力的明确期待。
- **[Issue #707](https://github.com/qhkm/zeptoclaw/issues/707)** 与 **[PR #708](https://github.com/qhkm/zeptoclaw/pull/708)** 构成同一议题的问题-修复配对，虽标注 P2-high，但因零评论而缺乏社区参与。

诉求分析：外部用户关注的是"能力是否存在"，而维护者关注的是"输出链路是否可靠"——两者分属路线图与工程质量两个不同层面。

## 5. Bug 与稳定性

今日无崩溃或回归类报告，仅有一条与数据完整性相关的缺陷：

**[Issue #707](https://github.com/qhkm/zeptoclaw/issues/707)（OPEN，P2-high，标签 feat / area:tools）** — 工具输出超过 2,000 行或 50KB 时会被截断并**直接丢弃**，字节不可恢复；模型仅被告知有内容被省略，却无任何途径取回。问题定位在 `src/tools/output.rs::truncate_tool_output`。

- 严重程度：中等偏高。不导致崩溃，但造成信息静默丢失，属于可观测性与可靠性缺陷，可能影响依赖大输出的工具调用结果。
- 修复状态：**已有配套 fix PR [#708](https://github.com/qhkm/zeptoclaw/pull/708)（OPEN，未合并）**，采用落盘 spill 文件的方式保留被截断内容。

## 6. 功能请求与路线图信号

- **目标模式（goal mode）请求 — [Issue #709](https://github.com/qhkm/zeptoclaw/issues/709)**：用户希望获得类似 ohmypi（omp）的 `/goal` 语义，让智能体持续执行直至条件满足。目前**没有**任何对应 PR 或维护者回应，纳入下一版本的可能性无法从现有数据判断。
- **工具输出 spill 机制 — [Issue #707](https://github.com/qhkm/zeptoclaw/issues/707) + [PR #708](https://github.com/qhkm/zeptoclaw/pull/708)**：属于工程改进而非用户主动请求，但已是今日唯一带实现的功能项，若通过评审最有可能进入下一版本。

两项信号性质不同：一个是产品能力层面的新增诉求，一个是既有链路的健壮性补强。后者具备现成补丁，落地路径更短。

## 7. 用户反馈摘要

今日可供提炼的反馈有限，仅来自 Issue #709 的正文：

- **使用场景**：用户以 ohmypi（omp）作为参照系，说明其已习惯"智能体持续推进直到条件达成"的工作流，并希望 ZeptoClaw 提供等价能力。
- **痛点**：用户不确定该能力是否已存在（提问形式为 "is there a goal mode?"），暗示文档或功能可发现性可能存在缺口，而非单纯的功能缺失。
- 今日无评论内容，因此无满意度或不满意的直接表述可供归纳。

## 8. 待处理积压

需说明：本次数据仅覆盖过去 24 小时窗口，无法据此判断长期未响应的历史积压。就今日窗口而言，以下条目均处于开放且零回应状态，建议维护者优先处理流转：

- **[Issue #709](https://github.com/qhkm/zeptoclaw/issues/709)** — 外部用户提问，0 评论、0 点赞，尚无任何回复。考虑到提问者非维护者本人，及时回应有助于维护社区体验。
- **[Issue #707](https://github.com/qhkm/zeptoclaw/issues/707)** / **[PR #708](https://github.com/qhkm/zeptoclaw/pull/708)** — 同议题的问题与修复配对，均为 0 评论、无评审记录。P2-high 优先级与当前的零评审状态存在落差，建议尽快安排代码评审以推进合并。

---

**数据说明**：本报告所有内容均基于 2026-09-28 提供的 GitHub 数据窗口，未包含该时间段之外的历史积压信息，故第 8 部分仅反映当日状态。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-28

## 1. 今日速览

ZeroClaw 今日处于**高强度维护态**：过去 24 小时 50 条 Issue 更新（37 条新开/活跃、13 条关闭）与 50 条 PR 更新（43 条待合并、7 条已合并/关闭），活跃度评级**高**。无新版本发布，工作重心集中在安全身份体系（RBAC / OIDC 收尾）、插件运行时化（编译期特性开关迁移至运行时插件）与发布流程提效三条主线上。讨论热度集中在多租户权限、插件化架构与成本计量准确性。同时，积压侧存在 43 条待合并 PR，其中多条被标记 `stale-candidate` / `needs-author-action`，合并通道压力值得警惕。

## 2. 版本发布

今日无新版本发布（最近相关基线为 v0.8.4 / v0.8.5，见 #9381、#10814 上下文），本节省略。

## 3. 项目进展

今日已合并/关闭的条目较少（7 条 PR、13 条 Issue），但关闭项指向若干关键收尾：

- **#6250 [CLOSED]** — gateway 配置与 quickstart 认证改为在路由层（`Router::route_layer` / `from_fn` 中间件）统一强制执行，替代逐 handler 的 `require_auth` 调用约定，统一了鉴权入口。https://github.com/zeroclaw-labs/zeroclaw/issues/6250
- **#10195 [CLOSED]** — 修复插件配置每次解析都重新编译 manifest JSON schema 的开销（`compile_manifest_config` 重复构建 validator）。https://github.com/zeroclaw-labs/zeroclaw/issues/10195
- **#10008 [CLOSED]** — 补齐测试，证明插件 `wasi:http` hook 只拨号基础层校验过的地址集合，封堵 re-resolve-before-connect 回归。https://github.com/zeroclaw-labs/zeroclaw/issues/10008
- **#10523 [CLOSED]** — bootstrap 文件在 6000 字符处截断但对操作者不可见的问题（S2）。https://github.com/zeroclaw-labs/zeroclaw/issues/10523
- **#9323 [CLOSED]** — 明确执行树迭代预算归属（`ToolLoop.shared_budget` 生产路径此前恒为 `None`）。https://github.com/zeroclaw-labs/zeroclaw/issues/9323
- **PR #11200 [CLOSED]** — 多模态：无标记的用户文本原样通过准备流程，避免被标记解析器改写。https://github.com/zeroclaw-labs/zeroclaw/pull/11200
- **PR #10473 [CLOSED]** — zerocode 退出确认弹窗改为读取实际生效的 `global.quit` 绑定。https://github.com/zeroclaw-labs/zeroclaw/pull/10473
- **PR #10596 [CLOSED]** — 为持久化 ACP 转录加入有界游标分页，避免全量物化。https://github.com/zeroclaw-labs/zeroclaw/pull/10596

**整体推进幅度评估**：今日合入量偏小（相对 43 条待合并），属"讨论与评审日"而非"落地日"；但关闭项多为架构欠债与安全测试补强，属质量型进展，而非功能型跃迁。

## 4. 社区热点

按评论数排序的高活跃条目：

- **#5982（10 评论）** — 多租户 agent 部署的 per-sender RBAC。线程已**收窄范围**：独立 `[rbac.*]` 子系统与独立 RBAC crate 提案被定为历史方案，采纳方向是在既有机制上构建 sender 角色。标签含 `security`、`risk:high`、`topic:identity-access`。https://github.com/zeroclaw-labs/zeroclaw/issues/5982
- **#8832（9 评论）** — 插件自有的 Kanban 看板。已从 RFC 队列经 #9496 重新分类为普通 issue/PR 路径，无 Core 批准门槛；#11081 已交付通用 per-instance 持久化。https://github.com/zeroclaw-labs/zeroclaw/issues/8832
- **#8850（6 评论）** — 将可选 channel 与 tool 从编译期 feature flag 迁移为运行时插件（WASM）。已落地 #11081、#11098、#8908/#8909、#11178。https://github.com/zeroclaw-labs/zeroclaw/issues/8850
- **#10315（5 评论）** — 在 #10142 之后重建浏览器注册前门，且不手写 TLS。#10525 已合并中继终止的注册页并移除手写 JS TLS 客户端。https://github.com/zeroclaw-labs/zeroclaw/issues/10315
- **#9816（5 评论）** — Anthropic provider 成本恒为 $0.00，导致日/月预算上限永不触发（p1，进行中）。https://github.com/zeroclaw-labs/zeroclaw/issues/9816
- **#9381（5 评论）** — crates.io 发布/打包/cargo-install 后续事项追踪器（parking-lot）。https://github.com/zeroclaw-labs/zeroclaw/issues/9381

**背后诉求**：社区讨论明显集中在「多租户与身份边界」（RBAC、OIDC、pairing token）与「插件化运行时的可运维性」两组议题，且多数线程已进入"收窄范围、落地方案"阶段，说明讨论正在收敛而非发散。

## 5. Bug 与稳定性

按严重程度排序：

- **S0 / p0 — #11197** 会话恢复在同会话中还原了已被管理员撤销的转发环境（`security/sandbox`），涉及权限撤销后仍生效的安全风险。状态 `accepted`、`follow-up`。**暂无对应 fix PR 列出**。https://github.com/zeroclaw-labs/zeroclaw/issues/11197
- **p1 — #9816** Anthropic provider 每条用量记录 `cost_usd: 0.0`，导致预算上限失效（展示只是次要影响）。状态 `in-progress`、`accepted`。**fix PR 未在今日列表中**。https://github.com/zeroclaw-labs/zeroclaw/issues/9816
- **p1 — #11136** `parallel_tools` 下对同一路径的并发 `file_edit`/`file_write` 会静默丢弃一次编辑（`zeroclaw-tools` 中未同步写入）。状态 `in-progress`。**fix PR 未列出**。https://github.com/zeroclaw-labs/zeroclaw/issues/11136
- **S2 — #10186** 终端兜底文本绕过实时投递接缝（两条 fallback 路径违反投递契约）。状态 `follow-up`，p2。https://github.com/zeroclaw-labs/zeroclaw/issues/10186

**已有 fix PR 的稳定性相关项**：PR #11143（memory：Qdrant 向量检索的时间边界应在检索阶段而非检索后应用）、#10904（runtime：no-vision 错误门控）、#9447（Anthropic：将语义空/不完整终止归类为类型化失败，而非成功空输出）、#10931（Windows 任务 stdout/stderr 日志有界化）、#9002（viewer 断连后保持 agent turn 存活）。以上均处于 OPEN 且需评审。

## 6. 功能请求与路线图信号

- **#5982 per-sender RBAC**（`status:accepted`）— 范围已收窄至复用既有机制，落地概率高，属身份访问主线。
- **#10573 将 gateway pairing token 绑定到 roster 用户**（`accepted`）— 依赖已落地（#10248、#10259 已合并），v1 决策已记录，**具备进入下一版本的成熟度**。https://github.com/zeroclaw-labs/zeroclaw/issues/10573
- **#8289 OIDC 里程碑追踪器** — 核心 OIDC 栈已合并（#10248/#10255/#10259/#10263/#10265、#11082），该条目**仅剩收尾**。https://github.com/zeroclaw-labs/zeroclaw/issues/8289
- **#8850 运行时插件化**（`type:tracker`、`in-progress`）— 多项依赖已落地，是插件路线图的主干。
- **#8832 插件自有 Kanban** — 已脱离 RFC 审批队列，路径为普通 issue/PR。
- **#10162 插件安装持久化顺序问题** — 新装种子失败路径已可由 #11098 回滚重试，**剩余"已安装同包重播种"场景待决**。https://github.com/zeroclaw-labs/zeroclaw/issues/10162
- **#7943 实时语音宿主 channel**（`parking-lot`）— 后端无关 `voicehost` WS 客户端，短期进入版本的概率较低。
- **#7432 / #10814 追踪器** — 分别承载 v0.8.6 Phase 2 运行时与 v0.9.0 Phase 3 gateway 分离，以及 v0.8.5 之后的发布效率改进。

**判断**：最可能纳入下一版本的是 OIDC/RBAC 收尾类（#8289、#10573）与插件运行时化（#8850 及其依赖链）。

## 7. 用户反馈摘要

- **成本可见性痛点**：#9816 中用户指出 `zeroclaw status` 在 Anthropic provider 下无论实际花费多少都显示 `Spent today: $0.0000`，且因为用量记录为 0，预算上限永远不会触发——这不仅是显示问题，更是**预算保护机制失效**。
- **操作者体验痛点**：#10523 反映 bootstrap 文件（`AGENTS.md`、`SOUL.md`、`IDENTITY.md`、`USER.md`）在 `compact_context` 下被静默截断到 6000 字符，操作者完全无感——属"沉默降级"类不满，该 Issue 已于今日关闭。
- **安全与权限诉求**：#11197 描述管理员 grant 被撤销后，同会话恢复仍能带回转发环境的场景；#5982 与 #10573 则体现多租户场景下对"发送者级"与"roster 级"作用域控制的明确需求。
- **并发正确性**：#11136 中用户指出并发写同一文件会静默丢失一次编辑，属难以察觉的数据正确性问题。
- **架构期待**：#8850 反映使用者希望不再为开关 channel/tool 而重新编译（编译期 feature flag → 运行时插件）。

## 8. 待处理积压

以下条目创建时间较早、仍处 OPEN，建议维护者优先分诊：

- **#7943**（创建 2026-06-18，4 评论，`parking-lot`）— 实时语音宿主 channel，已停放超过 3 个月。https://github.com/zeroclaw-labs/zeroclaw/issues/7943
- **#7432**（创建 2026-06-09，2 评论）— v0.8.6 / v0.9.0 运行时与 gateway 交付追踪器，作为 source of truth 但互动极少。https://github.com/zeroclaw-labs/zeroclaw/issues/7432
- **#8289**（创建 2026-06-24，4 评论）— OIDC 里程碑追踪器，核心栈已合并但 tracker 未关闭，建议尽快 close-out。https://github.com/zeroclaw-labs/zeroclaw/issues/8289
- **PR #9002**（创建 2026-07-11，`stale-candidate`、`needs-author-action`）— viewer 断连后保持 agent turn 存活。https://github.com/zeroclaw-labs/zeroclaw/pull/9002
- **PR #9320**（创建 2026-07-23，`stale-candidate`、`needs-author-action`）— cron agent job 的墙钟超时与锁释放。https://github.com/zeroclaw-labs/zeroclaw/pull/9320
- **PR #9447 / #9420**（创建 2026-07-26/27，`stale-candidate`、`needs-author-action`）— Anthropic 不完整终止响应的分类与 OAuth 存储配置支持，均卡在作者响应。https://github.com/zeroclaw-labs/zeroclaw/pull/9447 、 https://github.com/zeroclaw-labs/zeroclaw/pull/9420
- **PR #9745 / #10034 / #10499**（`stale-candidate`、`needs-author-action`）— 知识图谱 per-agent 归属与作用域、模型路由更新后的 provider 别名探测、持久化配置写入校验，均为安全/正确性相关但停滞。https://github.com/zeroclaw-labs/zeroclaw/pull/9745 、 https://github.com/zeroclaw-labs/zeroclaw/pull/10034 、 https://github.com/zeroclaw-labs/zeroclaw/pull/10499

**健康度提示**：待合并 PR（43 条）远高于今日合入量（7 条），且多条高价值修复被打上 `stale-candidate` 与 `needs-author-action`。建议在下一轮评审窗口集中清理，否则积压将持续压制功能交付速度。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*