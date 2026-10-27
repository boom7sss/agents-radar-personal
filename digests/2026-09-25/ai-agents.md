# OpenClaw 生态日报 2026-09-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-25 14:10 UTC

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

# OpenClaw 项目日报 · 2026-09-25

> 数据来源：github.com/openclaw/openclaw 公开 GitHub 活动（过去 24 小时）。本报告仅基于所提供数据，未做外部补充。

---

## 1. 今日速览

过去 24 小时 OpenClaw 保持极高活跃度：Issues 更新 500 条（新开/活跃 448，关闭 52），PR 更新 500 条（待合并 392，已合并/关闭 108），无新版本发布。讨论热度集中在**稳定性与资源泄漏类 P0/P1 缺陷**上，尤其是 agent SQLite WAL 膨胀、prepared-model-catalog 工作线程内存/CPU 占用、网关启动挂起与崩溃循环等问题，多条带有 `impact:ux-release-blocker` 标签，显示发布质量门槛正被这些缺陷卡住。PR 侧以修复与清理为主（WebUI 模型选择器、桌面音频栈、Discord/Slack 去冗余、Windows 网关服务探测等），但绝大多数仍处于待合并状态，合并率（约 22%）低于积压速度，**积压压力明显**。整体判断：项目热度健康、维护者响应密集，但**稳定性债务与 PR 审阅吞吐**是当前两个主要风险点。

---

## 2. 版本发布

今日**无新版本发布**，无 Release 记录。相关版本节奏信号见 Issue #157531《2026.9.7 Fixes Tracker》（活跃应用阶段，源码 CI 通过、包资格化受阻）。

- https://github.com/openclaw/openclaw/issues/157531

---

## 3. 项目进展

今日已合并/关闭的 PR 共 108 条，但所提供的高评论 Top 20 PR 列表**全部为 OPEN 状态**，因此无法列出具名的重要合并项。可确认的推进方向来自已进入待合并/审阅阶段的高优先级工作：

- **WebUI 稳定性与可用性**：PR #158132（provider 登录期间保持模型选择器可用）、#158124（移动端浏览器面板触控/笔拖拽滚动）、#158038（在 Tasks 中展示原生后台命令，P1）。
  - https://github.com/openclaw/openclaw/pull/158132
  - https://github.com/openclaw/openclaw/pull/158124
  - https://github.com/openclaw/openclaw/pull/158038
- **Windows / 网关服务治理**：PR #151608（准确探测已注册的 Gateway 服务）、#151674（发现 Startup 文件夹启动器）、#152875（托管 Gateway 运行期间拒绝重建 dist）、#158034（doctor 清理后报告残留 systemd 单元）。
  - https://github.com/openclaw/openclaw/pull/151608
  - https://github.com/openclaw/openclaw/pull/151674
  - https://github.com/openclaw/openclaw/pull/152875
  - https://github.com/openclaw/openclaw/pull/158034
- **通道修复**：PR #158140（WhatsApp 入站 DM 的 LID 身份瞬时不可解析时重试而非静默丢弃，P1）。
  - https://github.com/openclaw/openclaw/pull/158140
- **桌面音频栈（7 件套系列，须按顺序合入）**：#157720、#157722、#157725 等，涉及 Linux 应用音频隔离、音频流绑定屏幕授权、PCM 缓冲隔离。
  - https://github.com/openclaw/openclaw/pull/157720
  - https://github.com/openclaw/openclaw/pull/157722
  - https://github.com/openclaw/openclaw/pull/157725
- **性能与可观测性**：PR #158088（MCP bundle server 启动失败退避，P1）、#158145（diagnostics-otel 内容捕获开启后网关每次模型调用后卡顿）。
  - https://github.com/openclaw/openclaw/pull/158088
  - https://github.com/openclaw/openclaw/pull/158145

**整体推进评估**：修复面广、覆盖面从 Windows 服务治理到通道消息完整性，但关键项多被 `status: 📣 needs proof` / `⏳ waiting on author` / 依赖链（“do not land out of order”）阻塞，短期内落地速度受限。

---

## 4. 社区热点

评论数最高的讨论集中体现“稳定性优先”的诉求：

| 条目 | 状态 | 评论 | 主题 |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | OPEN, P0 | 70 | Windows 上 agent SQLite WAL 数日内膨胀至 1.4–2.8 GB，阻塞网关启动 |
| [#149361](https://github.com/openclaw/openclaw/issues/149361) | OPEN, P2 | 50 | WebUI 性能与稳定性 Umbrella 汇总 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | OPEN, P1 | 29 | 子代理完成结果静默丢失，无重试/通知/自动重启 |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | OPEN, P2 | 25 | model-catalog 过期/重建循环占满一个 CPU 核 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OPEN, P1 | 17 | hook/tool 子进程未回收，僵尸进程累积 |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | OPEN, P1 | 17 | 混合终结批次的 requester-settle 无限重试 |

**诉求分析**：高评论量几乎全部来自**长期未决的可靠性缺陷**（#44925 创建于 2026-03-13，已持续 6 个月；#97616 创建于 2026-06-29）。评论热度与“缺少新 fix PR”（`clawsweeper:no-new-fix-pr`）标签高度重合，说明社区在反复确认问题、但修复推进缓慢。PR 侧讨论焦点在 WebUI 可用性（#158038、#158132）与安全边界（#157722、#158120）。

---

## 5. Bug 与稳定性

按严重度排列（均标注是否已有 fix PR；无标注表示所提供数据中未见对应 fix PR）：

### P0 / 发布阻塞
- **#143524** Agent SQLite WAL 无限增长（Windows，2026.9.2/9.3），阻塞网关启动 — 70 评论 — 无新 fix PR。
  https://github.com/openclaw/openclaw/issues/143524
- **#152981** Gateway 启动在 `sidecars.model-runtime` 挂起约 17 分钟后失败（2026.9.5）— 回归 — 无新 fix PR。
  https://github.com/openclaw/openclaw/issues/152981
- **#154114** `openclaw update` 候选迁移预演失败：“No usable, authenticated, tool-capable inference route”。
  https://github.com/openclaw/openclaw/issues/154114
- **#157325** agent-DB 资源卡死导致所有 agent 回复失败，直至重启网关（2026.9.6）。
  https://github.com/openclaw/openclaw/issues/157325
- **#157160** 网关在 `plugin-doctor-post-session-state` 崩溃循环（Docker 自动更新至 2026.9.6）。
  https://github.com/openclaw/openclaw/issues/157160

### P1
- **#44925** 子代理完成结果静默丢失（无重试/通知/自动重启）— `impact:message-loss`。
  https://github.com/openclaw/openclaw/issues/44925
- **#97616** hook/tool 子进程未回收导致僵尸累积（回归）。
  https://github.com/openclaw/openclaw/issues/97616
- **#137332** 混合终结批次无限重试（回归）— 无新 fix PR。
  https://github.com/openclaw/openclaw/issues/137332
- **#157842** 2026.9.6 prepared-model-catalog worker 每轮保留约 77 MB 堆不释放，超出其 512 MB 限制（9.5 升级后引入）。
  https://github.com/openclaw/openclaw/issues/157842
- **#157067** Windows 隔离 cron 向 session history worker 传入不可克隆的环境 Proxy — **已有 linked PR**。
  https://github.com/openclaw/openclaw/issues/157067
- **#157986** 所有 `agentTurn` 自动化任务因 DataCloneError 失败（2026.9.6，Windows）。
  https://github.com/openclaw/openclaw/issues/157986
- **#145309** claude-cli 后端忽略 `CLAUDE_CONFIG_DIR`，转写缺失引发重置与 failover — **已有 linked PR**。
  https://github.com/openclaw/openclaw/issues/145309
- **#139710** 插件代际替换在回合中杀死 system-agent 回合及其 planner 回退。
  https://github.com/openclaw/openclaw/issues/139710
- **#127229** Telegram watchdog 释放的持久更新在 transport tracker 落定前被误标记为 tombstone。
  https://github.com/openclaw/openclaw/issues/127229
- **#143278** 心跳内部输出泄漏到 Telegram 用户会话（2026.9.3）。
  https://github.com/openclaw/openclaw/issues/143278

### P2 及其他
- **#155753** model-catalog 过期/重建循环占满一 CPU 核（2026.9.5）— 无新 fix PR。
- **#143632** iMessage 入站消息重复投递 2–3 次，去重未生效。
- **#139578** llama.cpp 托管 EmbeddingGemma 运行在 ubatch 512（2026.9.2 回归，源自 #134389）。
- **#112160** SSH 沙箱未将入站媒体暂存至已有远端工作区（标记 `queueable-fix`、`fix-shape-clear`）。
- **#99659** 伴随应用连接后 openclaw 被 OOM kill。
- **#123792** CLI 后端下助手回合重复渲染（实时分块视图 + 拼接聚合记录）。

**今日已关闭**：#123009（原生 Codex 订阅每 5 分钟检查阻塞，P0）、#151467（自升级死锁与回滚 cron 失败，P0）、#127931（工作区加载符号链接测试非 Windows 安全，P3）。

**稳定性判断**：回归类问题集中在 **2026.9.x 系列（9.2–9.6）**，尤其是 9.6 引入的 prepared-model-catalog worker（CPU + 内存双重问题）。多数 P0 缺少新 fix PR，是当前最大健康度风险。

---

## 6. 功能请求与路线图信号

- **原生模型供应商接入**：Issue #155633 请求将 Databricks Unity Gateway 作为原生模型供应商（OpenAI 兼容 MLflow Chat Completions API），带 `clawsweeper:linked-pr-open` 标签，**有较大概率进入后续版本**。
  https://github.com/openclaw/openclaw/issues/155633
- **让 owner 在对话中把密钥/配置/技能编辑交给 agent**：PR #158120（feat(agents)），涉及 auth-provider 与安全边界风险，属产品能力扩展方向。
  https://github.com/openclaw/openclaw/pull/158120
- **原生后台命令在 Tasks 中可视化**：PR #158038（P1），改善长时间运行命令的可观测与 Stop 控制。
  https://github.com/openclaw/openclaw/pull/158038
- **桌面音频能力栈**：PR #157720 / #157722 / #157725 系列（含“音频流绑定屏幕授权”的安全约束），是明确的平台级路线图投入。
- **通道稳定性增强**：PR #158140（WhatsApp LID 重试）反映对通道消息不丢失的能力补齐。

**纳入下一版本的可能性判断**：带 `linked-pr-open` 的 #155633、#157067、#145309、#123792 最接近落地；桌面音频栈因存在严格依赖顺序（“do not land out of order”），预计分批进入后续版本。

---

## 7. 用户反馈摘要

- **资源失控是首要痛点**：用户在多条 Issue 中描述长时间运行后 WAL 膨胀至 2865 MB（#143524）、worker 每轮泄漏约 77 MB 直至被外部 watchdog 重启（#157842）、子进程僵尸累积（#97616），指向**长稳运行的资源回收不足**。
- **静默丢失类问题最伤信任**：子代理结果静默丢失（#44925）、Telegram 更新被误 tombstone（#127229）、iMessage 重复投递（#143632）、Signal 消息陷入重试循环约 23 小时（#143581）、WhatsApp DM 被永久丢弃（#158140），共同指向**消息完整性与去重语义**。
- **升级/迁移体验不稳**：`openclaw update` 预演失败（#154114）、doctor-failed（#153049）、自升级死锁需回滚（#151467，已关闭）、Watchtower 自动升级后崩溃循环（#157160），用户对自动更新路径的可靠性存疑。
- **平台差异明显**：多条问题集中在 Windows（WAL、启动器发现、cron 环境克隆、Gateway 挂起）与容器/自动更新场景（Docker、Watchtower）。
- **正向信号**：Issue 中出现 `issue-rating: 🦞 diamond lobster` / `🐚 platinum hermit` 等分级，以及 `clawsweeper:source-repro`、`clawsweeper:current-main-repro` 标签，说明社区提供了可复现证据，协作质量较高（如 #137332、#127229、#112160 均带 source-repro）。

---

## 8. 待处理积压

长期未决、需维护者重点关注的条目：

- **#44925**（创建 2026-03-13，P1，`needs-product-decision` + `no-new-fix-pr`）— 已悬置超过 6 个月，子代理结果丢失。
  https://github.com/openclaw/openclaw/issues/44925
- **#97616**（创建 2026-06-29，P1）— 僵尸进程累积，回归问题，缺少 fix PR。
  https://github.com/openclaw/openclaw/issues/97616
- **#112160**（创建 2026-07-21，P1）— SSH 沙箱媒体暂存；已带 `queueable-fix` 与 `fix-shape-clear`，属可立即排期的候选。
  https://github.com/openclaw/openclaw/issues/112160
- **#123792**（创建 2026-08-14，P2）— 助手回合重复渲染，已有 linked PR。
  https://github.com/openclaw/openclaw/issues/123792
- **#127229**（创建 2026-08-21，P1）— Telegram tombstone 误判，有 linked PR。
  https://github.com/openclaw/openclaw/issues/127229
- **#137332**（创建 2026-09-03，P1）— 混合终结批次无限重试。
  https://github.com/openclaw/openclaw/issues/137332
- **#139578**（创建 2026-09-06，P1，标记 `stale`）— EmbeddingGemma ubatch 回归，且存在“前次以无法复现关闭”的争议记录。
  https://github.com/openclaw/openclaw/issues/139578
- **PR 侧积压**：待合并 392 条，其中多条关键修复依赖链前置项（#151608 → #152875 / #151674，#158113 须先落地），以及长期 `status: ⏳ waiting on author` 或 `📣 needs proof` 的 P0/P1 PR（#157661、#151608、#151674、#152875）。建议维护者优先清理依赖链阻塞点以释放吞吐。
  https://github.com/openclaw/openclaw/pull/151608
  https://github.com/openclaw/openclaw/pull/157661

---

**一句话结论**：项目社区活跃度与问题报告质量俱佳，但 2026.9.x 系列的资源泄漏、消息静默丢失与升级路径缺陷已形成发布阻塞集群，且多数缺少新 fix PR；同时 PR 审阅吞吐落后于积压增速，建议维护者优先聚焦 P0 修复排期与依赖链解锁。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**数据基准日：2026-09-25** ｜ 数据来源：各项目当日 GitHub 公开活动摘要，未做外部补充。

---

## 1. 生态全景

当日样本中，生态呈现**"高活跃、低吞吐"的普遍特征**：11 个活跃项目中，OpenClaw、Hermes Agent、ZeroClaw 三家单日 Issue/PR 更新量均触及 50 条量级，但**当日全部项目的 PR 合并量都明显落后于提交量**（OpenClaw 约 22% 合并率、Hermes 49 条待合并仅合并 1 条、NanoClaw 21 条待合并合并 0 条），合并侧产能成为跨项目的共同瓶颈。技术议题高度收敛于三大方向：**上下文/压缩生命周期治理、消息交付完整性（静默丢失/去重/回执）、升级与环境一致性（venv 混用、Windows 服务治理）**。同时出现明显的**平台分层**——部分项目进入多租户/多 Agent 的架构扩张期（CoPaw、ZeroClaw、NanoClaw），另一部分则深陷 2026.9.x 系列回归问题的质量巩固期（OpenClaw、Hermes）。OpenClaw 以单日千条级 Issue/PR 更新量稳居生态核心参照位，但也是唯一出现"发布阻塞集群"的项目。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 + 关闭） | PR（待合并 + 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（448 + 52） | 500（392 + 108） | 无 | 热度健康，但 **P0 发布阻塞集群 + 积压压力**，两大风险点 |
| **Hermes Agent** | 50（48 + 2） | 50（49 + 1） | 无 | 评审吞吐严重滞后，**2 条 P0**（文件清空、插件删数据）待介入 |
| **ZeroClaw** | 50（37 + 13） | 50（35 + 15） | 无 | **治理与架构并行推进**，响应快；35 条待合并积压值得关注 |
| **NanoBot** | 7（5 + 2） | 22（15 + 7） | 无 | 健康度良好，以"清理存量"为主；5 条 conflict 为瓶颈 |
| **NanoClaw** | 0 | 21（21 + 0） | 无 | **流量中等、吞吐为零**，全部 core-team 标签积压 |
| **CoPaw** | 18（15 + 3） | 4（4 + 0） | 无 | 高活跃低吞吐，压缩子系统为最集中风险簇 |
| **LobsterAI** | 0 | 14（10 + 4） | 无 | 开发推进健康，**5 条 stale PR 挂起超 5 个月** |
| **PicoClaw** | 3（2 + 1） | 8（8 + 0） | 无 | 维护节奏平稳，**合并端完全停滞** |
| **NullClaw** | 0 | 7（7 + 0） | 无 | 输入密集、输出停滞，2 条高严重度修复待合并 |
| **IronClaw** | 1（1 + 0） | 1（1 + 0） | 无 | **低位维护**，0 合并 0 发布，1 条低风险 PR 积压 27 天 |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | 当日无活动 |

> 说明：OpenClaw 数据为 500 条上限值，实际更新量可能更高。

---

## 3. OpenClaw 在生态中的定位

**规模优势显著**：OpenClaw 单日 Issue 更新量（500）与 PR 更新量（500）分别为第二名（Hermes / ZeroClaw 各 50 条）的 10 倍量级，社区规模与问题上报密度是生态内绝对头部。多条 Issue 出现 `🦞 diamond lobster` / `🐚 platinum hermit` 分级及 `clawsweeper:source-repro` 可复现标签，**问题报告质量同样领先**。

**技术路线差异**：
- 相比 **NanoBot / NullClaw** 等轻量项目聚焦单点功能补全（WebUI 体验、CLI 修复），OpenClaw 已进入**多通道 + 桌面音频栈 + Windows 服务治理**的平台级复杂度，PR 出现严格的依赖链约束（"do not land out of order"）。
- 相比 **ZeroClaw** 走 wasm 运行时插件化 + OIDC/SOP 治理路线，OpenClaw 更偏向**通道完整性与稳定性债务偿还**，其 WebUI 模型选择器、Discord/Slack 去冗余等修复属于产品化打磨而非架构重构。
- 相比 **CoPaw** 的压缩子系统专项治理，OpenClaw 的问题是**跨子系统散发**（SQLite WAL、prepared-model-catalog worker、网关启动挂起），根因更分散。

**核心风险**：OpenClaw 是当日唯一明确出现 `impact:ux-release-blocker` 标签集群的项目，且多数 P0（#143524、#152981、#137332 等）**缺少新 fix PR**——社区规模带来的问题曝光速度，已超过维护者的修复排期速度。这构成其与 ZeroClaw「治理集中化、响应迅速」形象的鲜明对照。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文/压缩生命周期治理** | CoPaw（#7628/#5856/#7836/#7733）、NanoBot（#5849 压缩死锁）、Hermes（#74263 上下文长度条目缺失）、OpenClaw（#155753 model-catalog 循环） | 压缩触发应基于**完整 provider 请求预算**而非可见上下文；压缩不得破坏 tool_call 结构；Agent 应参与逐出决策（CoPaw #7733）；压缩死锁需 token 预算保护 |
| **消息交付完整性** | OpenClaw（#44925 子代理结果静默丢失、#127229 tombstone 误判、#143632 iMessage 重复、#158140 WhatsApp DM 丢弃）、ZeroClaw（#10929 出站消息无回执）、NanoBot（#5605 Email 提前标记 \Seen）、Hermes（#122700 BODY.PEEK） | 静默丢失最伤信任；需要重试/通知/自动重启、去重语义、投递回执标识符 |
| **升级与环境一致性** | Hermes（#122183/#122324 venv 混用、#122697 ruamel 缺失）、OpenClaw（#154114 update 预演失败、#157160 Watchtower 崩溃循环）、NanoClaw（#3891 arm64 安装失败、#3798 polkit 缺失）、LobsterAI（#2761 第三方插件未被扫描） | 自动更新路径可靠性存疑；非标准/多平台环境下安装鲁棒性不足 |
| **资源回收与长稳运行** | OpenClaw（#143524 WAL 膨胀 2.8GB、#157842 worker 泄漏 77MB/轮、#97616 僵尸进程）、NanoBot（#5838 会话串线） | 长时间运行后资源失控是首要痛点 |
| **多 Session / 多 Profile 隔离** | Hermes（#85294 跨 profile 泄漏、#103694 OAuth 未持久化）、NanoBot（#5838 chat_id="default" 串线）、CoPaw（#7850 lost update） | 多任务并行场景下状态隔离被破坏 |
| **Provider 抽象与扩展** | NanoBot（#5204 声明式能力档案、#5896 Responses API）、PicoClaw（#3381/#3371）、LobsterAI（#2766 Requesty）、OpenClaw（#155633 Databricks 原生供应商） | 多 Provider 支持从特判走向声明式 |
| **并行 Agent 资源边界** | ZeroClaw（#10970 host-scoped admission control）、Hermes（#122703 kanban 未探 profile 即 claim） | 同机多 Agent 应以延迟上升而非崩溃方式降级 |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | CoPaw | NanoBot / NullClaw / PicoClaw |
|---|---|---|---|---|---|
| **功能侧重** | 全通道 + 桌面音频栈 + 平台服务治理 | 多 profile / kanban / Desktop 富交互 | 运行时插件化 + OIDC/SOP 治理体系 | 控制台体验 + 多租户 Hub | 轻量功能补全与渠道修复 |
| **目标用户** | 追求通道完备的重度用户 | 多 provider、多 profile 的进阶用户 | 有合规/多 Agent 编排需求的组织 | 从个人助手向团队部署演进 | 快速自托管的个人用户 |
| **技术架构** | 单体复杂、依赖链严格 | 模块化、PM 运行时迁移中 | wasm 插件 + 声明式能力目录 | 压缩子系统为核心链路 | 单一职责、改动面窄 |
| **治理成熟度** | 高（RFC/标签体系完备） | 中（needs-repro 流程） | **最高**（决策队列 tracker + RFC 关闭流） | 高（路线图官方征集） | 低（维护者单体审查） |
| **当日净进展** | 修复面广但落地受限 | 净进展偏弱 | 关闭一批已接受 RFC，进入实现期 | 代码层零推进 | 清理存量为主 |

**关键差异**：ZeroClaw 与 OpenClaw 代表两种演化路径——前者**先收敛架构决策再实现**（当日关闭 4 条 RFC），后者**边跑边补稳定性债务**。CoPaw 是唯一将"压缩子系统"作为专项风险簇治理的项目，其路线图信号（PR #7923 历史保留、#7542 scroll-back 分页）最为明确。

---

## 6. 社区热度与成熟度

**第一层：快速迭代 / 高活跃**
- **OpenClaw**：热度绝对头部，但处于**质量巩固期**——2026.9.x 回归问题集中，是"规模先于稳定"的典型。
- **ZeroClaw**：治理与架构并行，**决策期向实现期过渡**，成熟度随决策收敛而提升。
- **CoPaw / Hermes**：核心链路问题密集爆发（压缩、安装），属**架构扩张期暴露的稳定性缺口**。

**第二层：维护性推进 / 中等活跃**
- **NanoBot、NanoClaw、NullClaw、LobsterAI、PicoClaw**：均呈"贡献端有动作、合并端停滞"特征，处于**功能累积等待合并**状态。其中 NanoBot 已有 5 条 conflict 待消解，LobsterAI 有 5 条 stale PR 挂起超 5 个月。

**第三层：低位维护**
- **IronClaw**：0 合并、0 发布、0 讨论，唯一 PR 积压近一月。
- **TinyClaw / Moltis / ZeptoClaw**：当日无活动。

**成熟度判断**：生态整体处于**"报告质量高、修复吞吐低"**的普遍状态。跨项目共识是——瓶颈在**审查与合并环节，而非贡献量不足**（NanoClaw 明确表述、CoPaw/LobsterAI 数据佐证）。

---

## 7. 值得关注的趋势信号

1. **"压缩"成为 Agent 可用性的第一性难题**：CoPaw 出现 4 条同簇 Issue + NanoBot 压缩死锁 + OpenClaw model-catalog 循环 + Hermes 上下文条目缺失——跨项目证据表明，**上下文压缩的语义保真与预算正确性是当前最未被解决的通用技术债**。开发者应优先为压缩路径建立"完整请求预算 + 结构完整性 + 可干预"三重校验。

2. **静默丢失类缺陷的信任成本被显著低估**：OpenClaw 子代理结果丢失、ZeroClaw 出站消息无回执、CoPaw 超时误报"被用户中断"——**"不报错但没做到"比"报错"更伤用户信任**。交付回执（ZeroClaw #10929）与可复现证据（OpenClaw source-repro）是两条已被提出的解法。

3. **多 Agent 同机运行的资源准入控制正在成为刚需**：ZeroClaw #10970 明确提出"以延迟上升而非崩溃降级"，Hermes #122703（kanban 未探模型即 claim）、OpenClaw 僵尸进程累积共同指向——**编排层缺少 per-agent 资源边界**是下一阶段架构重点。

4. **升级路径可靠性正在被重新审视**：Watchtower 崩溃循环、venv 混用、arm64 安装失败、polkit 交互提示——**非标准环境与自动更新**是问题高发区，纯云端 CI 覆盖不足。对开发者的参考价值：需将"升级后再运行"纳入发布前验证矩阵。

5. **Provider 抽象从特判走向声明式**：NanoBot #5204（ResponsesCapabilities 声明式重构）、PicoClaw Responses API 切换、LobsterAI Requesty 复用 OpenRouter 路径、OpenClaw Databricks 原生供应商——**声明式能力档案正在成为多 Provider 接入的标准解法**，可降低新增供应商的边际成本。

6. **治理机制本身成为项目竞争力**：ZeroClaw 以"决策队列 tracker + 快速 RFC 关闭"展现高效治理，与 OpenClaw 的修

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-25

## 1. 今日速览

NanoBot 今日维持高强度开发节奏：过去 24 小时共有 7 条 Issue 更新（5 条新开/活跃、2 条关闭）与 22 条 PR 更新（15 条待合并、7 条已合并/关闭），无新版本发布。当日新增工作高度集中在 WebUI 体验（草稿持久化、流式 tokens/sec、服务端消息队列）与渠道修复（Napcat、Telegram、Discord、Email）。合并侧以测试套件收敛和 WebUI 本地化落地为主，项目整体健康度良好，但存在若干长期挂起的 p1 级 PR 与已标记 conflict 的积压项，需要维护者协调。

---

## 2. 版本发布

今日无新版本发布，本节省略。

---

## 3. 项目进展

今日共有 7 条 PR 被合并或关闭，推进方向如下：

- **WebUI 本地化正式落地**：PR #5367 `feat(webui): localize agent activity` 已关闭，覆盖全部 10 种受支持语言的前端 Agent 活动标签与计数，并支持语言切换时的实时/回放更新与英文回退。对应 Issue #5366 同步关闭，标志该功能闭环。
  https://github.com/HKUDS/nanobot/pull/5367

- **测试套件瘦身**：PR #5907 `test: consolidate redundant coverage across the test suite` 已关闭，跨 34 个文件整合 Python 与 WebUI 测试，净删除 703 行，生产代码未改动。属于降低维护成本的健康度改善。
  https://github.com/HKUDS/nanobot/pull/5907

- **Anthropic 扩展思考支持**：PR #1387 `feat: add Anthropic extended thinking support alongside reasoning_effort` 已关闭。这是一条自 2026-03-01 创建、历时近 7 个月的长期 PR，最终关闭（此前标记 conflict），意味着双模式思考支持方向有了阶段性结论。
  https://github.com/HKUDS/nanobot/pull/1387

**整体评估**：今日合并侧以"清理存量"为主（本地化收尾、测试收敛、历史 PR 归档），功能净增量有限；真正的推进压力集中在 15 条待合并 PR 上。

---

## 4. 社区热点

今日数据中 Issue/PR 的评论数多为 0–1，👍 均为 0，社区互动整体偏淡，热度主要体现在**同一作者的密集连续提交**：

- **coinwh 的 WebUI/Provider 系列（Issue #5896 / #5908 / #5909 / #5910）**：同一作者在 2026-09-24 单日提出 4 条 Issue，覆盖 OpenAI Responses API 支持、tokens/sec 实时显示、服务端消息队列、草稿持久化。诉求指向同一个核心痛点——**WebUI 的交互完整性与可观测性不足**。
  https://github.com/HKUDS/nanobot/issues/5896
  https://github.com/HKUDS/nanobot/issues/5909

- **Issue #5896**（评论 1，唯一有讨论的新 Issue）：`muse-spark-1.x-contributor` 在 opencode 网关上必须走 `/responses` 线格式，而 `/chat/completions` 返回 500。这是**实际阻断性兼容问题**，且被标记 `good first issue`，适合新贡献者切入。
  https://github.com/HKUDS/nanobot/issues/5896

- **Issue #5849**（评论 1）：自动压缩死锁问题，作者指出 `summarize_transcript` 缺少 token 预算保护，而手动路径 `archive_session` 已正确处理。属于**架构层面的可复现设计缺陷**，值得优先讨论。
  https://github.com/HKUDS/nanobot/issues/5849

**分析**：热度低迷但质量高——新 Issue 集中在可落地的产品改进上，而非泛泛抱怨；同时反映出核心贡献者群体较集中（coinwh、chengyongru、tilladam、Lesereingrape 承担了当日大部分产出）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| **高** | **Issue #5849** 自动压缩死锁：`summarize_transcript` 无 token 预算保护，历史超出输入预算后压缩永远无法恢复（对比手动路径 `archive_session` 处理正确） | ❌ 尚无 fix PR，2026-09-21 提出至今 |
| **中** | **PR #5913** `NANOBOT_MAX_CONCURRENT_REQUESTS` 无法解析时直接抛错，应降级为默认值（unlimited） | ✅ fix PR 已提，2026-09-25 |
| **中** | **PR #5914** Napcat 图片 `file_size` 为非数值时 `_download_image` 直接丢弃整条消息 | ✅ fix PR 已提，2026-09-25 |
| **中** | **PR #5911** Telegram `_markdown_to_telegram_html` 仅识别反引号围栏，`~~~` 与更长围栏无法渲染为代码 | ✅ fix PR 已提，2026-09-24 |
| **中** | **PR #5864** Discord 延迟 reaction 任务在 runtime reset 时未取消（Fixes #5806） | ✅ fix PR 已提，标记 conflict |
| **中** | **PR #5605** Email 消息在**投递前**就被标记 `\Seen`，导致被过滤拒绝的消息也丢失未读状态 | ✅ fix PR 已提，长期未合 |
| **中** | **PR #5912** WebUI 草稿在切换会话或刷新时丢失（回归） | ✅ fix PR 已提，2026-09-25 |
| **中** | **PR #5838** OpenAI 兼容 API 所有请求无论 session_id 都用 `chat_id="default"`，导致上下文/路由/cron/子智能体全部串线 | ✅ fix PR 已提，标记 conflict |
| **安全相关** | **PR #5005** exec 的递归 `rm` 子串黑名单过宽，需替换为按目标识别的守卫（允许 `/tmp/<name>` 定向清理） | ✅ fix PR 已提，p1，标记 conflict，自 2026-07-20 挂起 |

**稳定性判断**：当日 7 条 bug 修复 PR 覆盖渠道解析、环境变量容错、UI 状态持久化与 API 会话隔离，修复响应速度快；但 #5849 的压缩死锁是唯一无对应 PR 的高危项，且直接影响长会话可用性。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有对应 PR？ | 纳入下一版本可能性 |
|---|---|---|---|
| OpenAI Responses API 支持 opencode_go | #5896（`good first issue`, p2） | ❌ 无，但 PR #5204 正在重构 `ResponsesCapabilities` 声明式能力档案，为多 Provider 铺路 | **较高**——#5204 是关键前置 |
| WebUI 按会话持久化草稿 | #5910 | ✅ **PR #5912 已提**（同日提交，含 localStorage、session mentions、引用上下文恢复） | **很高**——需求与实现同日出现 |
| tokens/sec 实时显示 | #5908 | ❌ 无 | 中——纯前端指标，成本低 |
| Agent 忙时服务端消息队列（"waiting room"） | #5909 | ❌ 无 | 中——涉及服务端状态设计，需架构讨论 |
| Microsoft 委托 OAuth（Office365/Outlook） | — | ✅ PR #5609（因 Office365 强制 OAuth2，属合规驱动） | 中高——外部强制变更 |
| Email 按收件人别名过滤 | — | ✅ PR #5606 | 中 |
| MCP Apps 结果元数据保留 | — | ✅ PR #5386（标记 conflict） | 中——需先解冲突 |
| Matrix 回复线程化 | #5274（已关闭） | — | 已关闭归档 |

**路线图信号**：最明确的方向是 **WebUI 体验补全**（草稿 → 队列 → 性能指标），三条需求形成连续的打磨路径；其次是 **Provider 抽象化**（#5204 重构 + #5896 新 Provider 需求），暗示多 Provider 支持正在从特判走向声明式。

---

## 7. 用户反馈摘要

从 Issue 正文与描述中提炼的真实痛点：

- **长任务无法干预**（#5909）："当 agent 忙于长任务（例如浏览器自动化查成绩）时，我既无法打断，也无法发后续消息——消息要么被丢弃，要么行为不可预测。" → 反映**流式任务与用户输入之间的竞态**是真实使用障碍。

- **上下文丢失焦虑**（#5910）："侧边栏开着两个会话时，输入框里打了一半的字，切走再切回来就没了。" → 典型的**多任务并行使用场景**被当前纯内存状态破坏。

- **可观测性缺失**（#5908）："AI 流式回复时看不到生成速度，我无法判断模型是正常工作还是卡住了。" → 用户需要**判断系统是否健康**的信号。

- **渠道语义不一致**（#5274，已关闭）：Matrix 用户用"回复"功能引用消息时，机器人总是以顶层消息回应，破坏对话线程。→ 反映**跨渠道行为对齐**是长期诉求。

- **兼容性阻断**（#5896）：`muse-spark` 模型在网关 `/chat/completions` 路由返回 500，用户被迫寻找 Responses API 支持。

**满意/不满意**：社区对本地化（#5366/#5367 快速闭环）和 bug 修复速度总体正面；不满意集中在 **WebUI 状态管理**和**长会话可靠性**两类。

---

## 8. 待处理积压

以下为长期未合并且已标记 `conflict` 或高优先级的重要项，建议维护者优先排期：

1. **PR #5005**（p1, security, conflict）自 2026-07-20 挂起逾 2 个月——移除过宽的递归 `rm` 黑名单，涉及 exec 安全边界。
   https://github.com/HKUDS/nanobot/pull/5005

2. **PR #5204**（p1, refactor）自 2026-08-01 挂起——Responses 能力声明式重构，是 #5896 的前置依赖，阻塞新 Provider 接入。
   https://github.com/HKUDS/nanobot/pull/5204

3. **PR #5386**（conflict）自 2026-08-13 挂起——MCP Apps 结果元数据保留。
   https://github.com/HKUDS/nanobot/pull/5386

4. **PR #5605 / #5606 / #5609**（tilladam，均为 2026-08-30 提交，已积压近 4 周）——Email 渠道三项改进（`\Seen` 时机、别名过滤、Microsoft OAuth），其中 OAuth 属于外部强制变更，拖延成本较高。
   https://github.com/HKUDS/nanobot/pull/5609

5. **PR #5838**（conflict）——API 会话隔离修复，影响面广（turn route、cron bindings、subagent origins、message-tool targets 全部串线）。
   https://github.com/HKUDS/nanobot/pull/5838

6. **Issue #5849**——压缩死锁，无对应 PR，建议尽快指派。
   https://github.com/HKUDS/nanobot/issues/5849

**健康度提示**：15 条待合并 PR 中至少 5 条带 `conflict` 标签，且多条来自同一贡献者（chengyongru、tilladam），提示**代码审查带宽与冲突消解**是当前主要瓶颈，而非贡献量不足。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-25

## 1. 今日速览

今日项目维持高位活跃：过去24小时 Issues 更新 50 条（新开/活跃 48，关闭 2），PR 更新 50 条（待合并 49，合并/关闭仅 1），无新版本发布。讨论重心集中在 **Windows 安装/更新后 venv 混用导致的运行时崩溃**（#122183、#122324）以及 **PM(包管理) 运行时与旧环境共存** 的兼容性问题。待合并 PR 大量堆积（49 条），其中多项是针对当日新报 Bug 的快速修复，说明社区响应速度较快，但合并侧吞吐明显滞后，存在评审积压风险。P0 级问题两条（#122011 文件写入清空、#122006 插件更新删除用户数据），需要维护者优先介入。

---

## 2. 版本发布

无新版本发布，今日省略。

---

## 3. 项目进展

今日合并/关闭的 PR 与 Issue 数量有限（PR 1 条、Issue 2 条），可从已关闭项观察推进方向：

- **#91373 [CLOSED]** `include_usage` 使最终 chunk 变为 usage-only 的流解析缺陷已关闭。该问题与 #75801 属同一错误启发式，本次针对的是**符合 OpenAI 规范的 vLLM 流**被误判为网络中断、从而注入虚假 "continue" 提示的场景，属于流式处理路径的实质性修复。
  链接：NousResearch/hermes-agent Issue #91373

整体而言，项目今日**修复推进有限、新增报告为主**，净进展偏弱。

---

## 4. 社区热点

按评论数与反应数排序：

| 条目 | 状态 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| #122183 Windows gateway PM 运行时残留 pre-PM venv 崩溃 | OPEN | 9 | 1 | NousResearch/hermes-agent Issue #122183 |
| #85117 `check_systemd_timing_alignment()` 无条件查询 --user 作用域 | OPEN | 9 | 0 | NousResearch/hermes-agent Issue #85117 |
| #47954 memory provider 'honcho' 启动竞态告警 | OPEN | 8 | 0 | NousResearch/hermes-agent Issue #47954 |
| #91373 `include_usage` 流解析（已关闭） | CLOSED | 6 | 1 | NousResearch/hermes-agent Issue #91373 |
| #62369 为 agent 上下文注入消息时间戳 | OPEN | 4 | 0 | NousResearch/hermes-agent Issue #62369 |
| #118326 macOS 睡眠/唤醒导致 psutil 指纹漂移 | OPEN | 4 | 0 | NousResearch/hermes-agent Issue #118326 |
| #74263 Bedrock 缺少 Claude 5 上下文长度条目 | OPEN | 4 | 0 | NousResearch/hermes-agent Issue #74263 |
| #122011 write_file/patch 清空目标文件（P0） | OPEN | 4 | 0 | NousResearch/hermes-agent Issue #122011 |

**诉求分析**：热点集中在 **Windows 平台安装/更新的环境一致性问题** 与 **长会话状态一致性**（指纹漂移、启动竞态、上下文长度）。#122183 与 #122324 描述的是同一类根因，说明 PM 运行时迁移在 Windows 上留下了显著的遗留环境隐患，用户感知强烈。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否有 fix PR）：

**P0 — 需立即处理**
- **#122011** `write_file` / `patch` 在 Modal/Daytona/Vercel 上清空目标文件（heredoc stdin 落到最后一条命令）。相关既有工作为 #94849，**今日无对应新 fix PR**。
  链接：NousResearch/hermes-agent Issue #122011
- **#122006** `hermes plugins update` 删除子目录安装与 ignored data dirs 中的用户配置与数据文件。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #122006

**P1**
- **#122692**（fix PR，OPEN）：`backup_restore.py` 以原始文件名构造 SQLite 只读 URI，`#` 被当作 fragment 分隔符、`%` 被当作转义符，修复 #122209。已有修复提交。
  链接：NousResearch/hermes-agent PR #122692

**P2 — 已报告且部分已有 fix PR**
- **#122183 / #122324** Windows gateway 混用 Python 3.11/3.14 → `pydantic_core` ImportError 循环。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #122183 ｜ NousResearch/hermes-agent Issue #122324
- **#118326** macOS 睡眠/唤醒漂移 `psutil.create_time()` 指纹，kanban 回收器误释放存活 worker 的 claim。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #118326
- **#74263** `BEDROCK_CONTEXT_LENGTHS` 无 Claude 5 条目，sonnet-5/opus-5 落到 128K，压缩器提前约 8 倍触发。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #74263
- **#122607** 达到最大迭代次数时的总结路径只剥离 `<think>`，`<analysis>`/`<summary>` 信封被原样展示给用户。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #122607
- **#103694** profile 级 OAuth 添加打印 "Added" 但未持久化。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #103694
- **#85294** Desktop 跨 profile 提示泄漏，一个 profile 的后端恢复并写入另一个 profile 的会话。标记 needs-repro。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #85294
- **#122697**（标记 duplicate）macOS Desktop Bot Mode 中断更新后 `No module named 'ruamel'`。**暂无 fix PR**。
  链接：NousResearch/hermes-agent Issue #122697
- **#122694**（fix PR，OPEN）：`mcp_servers.<name>.tools` 接受裸字符串/列表，修复 #122373 中 `config_fingerprint` 崩溃。
  链接：NousResearch/hermes-agent PR #122694
- **#122693**（fix PR，OPEN）：fuzzy match 在 Unicode 展开内部起始时误报无匹配，修复 #122452。
  链接：NousResearch/hermes-agent PR #122693
- **#122700**（fix PR，OPEN）：email 后台轮询改用 `BODY.PEEK`，避免将收件箱邮件标记为已读。
  链接：NousResearch/hermes-agent PR #122700
- **#122676**（fix PR，OPEN）：managed web provider 行不应写入按能力粒度的 vendor pin。
  链接：NousResearch/hermes-agent PR #122676
- **#122690**（fix PR，OPEN）：`/branch` 仅上报实际提交的标题与消息。
  链接：NousResearch/hermes-agent PR #122690

**P3**
- **#85117** `check_systemd_timing_alignment()` 无条件先查 `--user` 作用域，在系统级 gateway 安装上产生虚假 "stale unit" 警告。**暂无 fix PR**。
- **#47954** honcho memory provider 启动竞态：加载但无实例，每次会话开始告警。**暂无 fix PR**。
- **#100031** photon 的 `_MIRROR_FILES` 遗漏其 `index.mjs` 引用的 sidecar 模块，只读安装崩溃循环（生产环境复现，v2026.8.31 仍存在）。**暂无 fix PR**。
- **#122703** kanban 调度器未探测 profile 模型即 claim 并 spawn worker，死凭证浪费一次 claim 与完整 worker 生命周期。**暂无 fix PR**。

---

## 6. 功能请求与路线图信号

**已有对应 PR、纳入概率较高**
- **列表自动格式化（TUI/Desktop）**：#73025 提出列表编号自动缩进与格式化；已有 PR **#73660**（desktop 编号列表自动续行、Tab 缩进、Backspace 移除空标记）与 **#122702**（基于 #73660 的 Markdown 列表编辑，Shift+Enter 续行、Tab/Shift+Tab 嵌套）。该方向已形成 PR 链，最可能落地。
  链接：NousResearch/hermes-agent Issue #73025 ｜ PR #73660 ｜ PR #122702
- **自定义标题命名规则**：PR **#122696** 新增 `auxiliary.title_generation.instructions`，用于 Telegram DM 主题与 Discord 自动线程的命名方案。
  链接：NousResearch/hermes-agent PR #122696
- **推理内容回显开关**：PR **#119585** 新增 `reasoning_echo: never`，让路由可选择退出 reasoning_content 回显（当前按模型名匹配 DeepSeek/MiMo）。
  链接：NousResearch/hermes-agent PR #119585

**仅请求、暂无 PR**
- **#62369** 向 agent 上下文注入消息时间戳，改善跨天长会话的时间感知。
- **#111661** `security(doctor)`：当 `approvals.mode=off` 时给出提示。
- **#64248** Desktop 富文本 / WYSIWYG 编辑器，替代仅 Markdown 的撰写方式。
- **#118970**（标记 invalid）UI 重建、更多动画与工具的诉求。

---

## 7. 用户反馈摘要

- **安装/更新体验是最大痛点**：Windows 用户在多条 Issue 中反映更新后旧 venv 与 PM 运行时混用，导致进程崩溃与导入错误（#122183、#122324、#122697）。这类问题直接阻断托管机器人运行。
- **数据安全担忧**：`hermes plugins update` 删除用户配置与数据（#122006）属于高敏感反馈，会显著影响信任。
- **会话隔离被破坏**：Desktop 跨 profile 提示泄漏（#85294）与 profile 级 OAuth 未持久化（#103694）反映多 profile 用户在隔离性上的实际损失。
- **对新模型支持滞后敏感**：Bedrock 缺少 Claude 5 条目导致压缩器过早触发（#74263），用户对上下文预算被低估有明确体感。
- **UI 易用性诉求**：#118970 与 #64248 反映非技术用户认为界面过于 Markdown 中心、配置 provider 困难，期望更友好的撰写与配置体验。

---

## 8. 待处理积压

以下为创建时间较早、今日仍在更新但尚无 fix PR 的重要项，建议维护者优先排序：

| 条目 | 创建时间 | 悬置时长 | 说明 |
|---|---|---|---|
| #47954 honcho memory 启动竞态 | 2026-06-17 | 约 3 个月 | P3，每次会话开始告警 |
| #62369 消息时间戳注入 | 2026-07-11 | 约 2.5 个月 | P3 功能请求，长会话时间感知 |
| #64248 Desktop 富文本编辑器 | 2026-07-14 | 约 2.5 个月 | P3 功能请求 |
| #73025 列表自动格式化 | 2026-07-28 | 约 2 个月 | 已有 PR #73660 / #122702，但均未合并 |
| #74263 Bedrock Claude 5 上下文长度 | 2026-07-29 | 约 2 个月 | P2，压缩行为显著偏差 |
| #85117 systemd 作用域误判 | 2026-08-13 | 约 1.5 个月 | P3，虚假告警 |
| #85294 跨 profile 提示泄漏 | 2026-08-13 | 约 1.5 个月 | P2，needs-repro，隔离性风险 |
| #100031 photon 只读安装崩溃循环 | 2026-09-01 | 约 3.5 周 | P3，生产环境复现 |
| #103694 profile OAuth 未持久化 | 2026-09-05 | 约 3 周 | P2，认证可靠性 |

**同时提示**：待合并 PR 已达 49 条，其中 **#73660**（自 2026-07-28 起开放）与今日新增的多条 fix PR 均处于等待状态，评审吞吐已成为项目健康度的主要瓶颈。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-09-25）

## 1. 今日速览

今日项目无新版本发布，社区活跃度以维护性工作为主：过去 24 小时共 3 条 Issue 更新（2 条新开/活跃、1 条关闭），8 条 PR 更新且**全部处于待合并状态，合并/关闭数为 0**。PR 侧明显以依赖升级为主（5 条为 dependabot 提交），功能类 PR 有 OpenAI Responses API 切换与 opencode-go provider 两项延续性提案。当日唯一关闭的 Issue（#3390）与仍开放的 #3391 内容重复，指向同一"多行输入被拆分"问题，说明该 Bug 已被处理但存在重复上报。整体健康度判断：**维护节奏平稳，但 PR 消化能力偏弱，合并端停滞值得关注**。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目代码主线未向前推进。当前 8 条待合并 PR 均停留在开放状态，其中：

- #3381 `feat: Switch Openai to responses API`：将 OpenAI provider 切换至 Responses API，属功能性变更，标记 `[stale]` 且自 9-17 创建后仍未合并。
- #3371 `feat(providers): add opencode-go provider with session header support`：新增 `opencode-go` provider，按模型 ID 自动路由至对应 endpoint 族并支持 session header。
- #3376 `fix(deltachat): initialize as custom channel to solve config validation error`：修复 deltachat 通道启用时的配置校验失败问题。

这三条为当日最有实质意义的待合并改动，但**均未落地**，项目进展可视为净持平。

## 4. 社区热点

今日讨论热度整体偏低，评论数最多的为：

- **Issue #3390**（评论 1，已关闭）：sipeed/picoclaw Issue #3390，是当日唯一有评论的条目。
- **Issue #3391 / #3390 重复对**：同一作者 chentianxiong123 就同一问题先后提交两条内容一致的 Issue，反映移动端 TUI 多行粘贴体验问题对用户影响直接，促使其重复上报。
- **PR #3381**：因关联 CLA 检测问题被 Issue #3392 引用（见 Issue #3392 复现步骤指向 PR #3381），成为当日唯一被跨条目引用的 PR。

诉求分析：当日社区注意力集中在**输入体验**与**贡献流程工具链（CLA 签名检测）**两个非功能性痛点上，而非新功能诉求。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 | 是否已有 fix PR |
|---|---|---|---|
| 中 | Issue #3390 / #3391：Pico channel 将多行输入（诗歌、代码块等）按换行符拆分并逐行发送为独立消息，"breaks th..."（摘要截断） | #3390 已关闭，#3391 仍 OPEN | 数据中未见对应 fix PR |
| 低（工具链） | Issue #3392：CLAassistant 未能检测 PR 的 CLA 签名，复现步骤指向 PR #3381 | OPEN | 无 |

说明：#3390 与 #3391 为同一 Bug 的重复上报，且 #3390 已关闭而 #3391 仍开放，维护者需确认实际修复状态以避免重复追踪。当前数据中**没有任何崩溃、回归或数据安全类严重问题**。

## 6. 功能请求与路线图信号

今日无明确的新功能请求 Issue。可从待合并 PR 推断路线图信号：

- **多 provider 支持扩展**：#3371（opencode-go provider）与 #3381（OpenAI Responses API）显示项目正沿"扩充与更新模型 provider 接入"方向演进；#3381 若合入，将涉及 OpenAI 调用路径的底层切换，可能影响相关配置兼容性。
- **通道（channel）健壮性**：#3376（deltachat 通道配置校验）属修复类，反映新通道接入时的配置校验流程仍需打磨。

以上均为推断，数据中未提供任何版本排期或维护者表态。

## 7. 用户反馈摘要

- **多行输入被拆分（作者 chentianxiong123，Issue #3390 / #3391）**：用户在 pico 客户端（移动 TUI）中粘贴多行文本（如诗歌、代码块）时，picoclaw 按换行符自动拆分并逐行作为独立消息发送，"breaks th..."（摘要截断）。这是当日唯一来自实际使用场景的痛点反馈，指向移动端 TUI 输入体验缺陷。
- **CLA 签名未被识别（作者 XenonR，Issue #3392）**：贡献者反映 CLAassistant 未检测到 CLA 签名，影响 PR 流程，复现路径指向 PR #3381。

数据中未包含满意类评价或其他使用场景描述。

## 8. 待处理积压

以下条目已创建较长时间且仍处于开放状态（`[stale]` 标记），建议维护者优先分诊：

- **PR #3381**（创建于 2026-09-17，已 8 天；标记 `[stale]`）：sipeed/picoclaw PR #3381 — OpenAI Responses API 切换，且与 Issue #3392（CLA 检测异常）直接关联。
- **PR #3376**（创建于 2026-09-10，已 15 天；标记 `[stale]`）：sipeed/picoclaw PR #3376 — deltachat 通道配置校验修复。
- **PR #3371**（创建于 2026-09-08，已 17 天）：sipeed/picoclaw PR #3371 — opencode-go provider，为当前积压时间最长的功能类 PR。
- **Issue #3391**（创建于 2026-09-24）：sipeed/picoclaw Issue #3391 — 与已关闭的 #3390 重复，建议合并或关闭以保持追踪清晰。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报（2026-09-25）

## 1. 今日速览

NanoClaw 今日无新版本发布、无 Issue 更新，全部活跃度集中在 Pull Request 侧：过去 24 小时共有 21 条 PR 更新，全部处于待合并状态（OPEN），已合并/关闭为 0。这 21 条 PR 的更新时间均落在 2026-09-25，但创建时间跨度从 2026-09-11 至 2026-09-24，说明今日主要是对既有 PR 的批量刷新（rebase/更新），而非新提交流入。整体活跃度评估：**流量中等但吞吐为零** —— 贡献端持续有动作，合并端今日停滞，待合并队列偏长（21 条），存在合并积压风险。所有展示条目作者均为 glifocat，贡献集中度高。

## 2. 版本发布

今日无新版本发布，无 Releases 数据，故本部分省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目主干在统计窗口内未取得经合并确认的推进。全部 21 条 PR 仍为 OPEN 状态，因此以下工作应视为"在途"而非"已完成"：

- 通道能力推进：Mattermost 回调认证与密钥隔离（[#3823](https://github.com/nanocoai/nanoclaw/pull/3823)）、Mattermost 对齐 Slack 线程行为（[#3797](https://github.com/nanocoai/nanoclaw/pull/3797)）、voice 通道 payload 接入 OpenAI GPT-Live-1 浏览器通话（[#3772](https://github.com/nanocoai/nanoclaw/pull/3772)）。
- Agent 运行时与工具交付：tools-only 交付模式强制（[#3781](https://github.com/nanocoai/nanoclaw/pull/3781)）、心跳在长块流式生成期间保活（[#3893](https://github.com/nanocoai/nanoclaw/pull/3893)）。
- 技能生态：新增 `/add-typesafe-tool` 技能（[#3848](https://github.com/nanocoai/nanoclaw/pull/3848)）、`/add-mattermost` 技能补充迁移指引（[#3831](https://github.com/nanocoai/nanoclaw/pull/3831)）。

**推进幅度判断**：由于合并数为零，今日项目整体未在发布意义上向前迈进；积累的变更集中在通道兼容性、provider 稳定性与技能扩展三个方向，一旦进入合并阶段将形成一次较集中的功能/修复批次。

## 4. 社区热点

今日无 Issues 讨论，PR 侧评论数数据缺失（评论计数显示为 undefined），点赞数全部为 0，因此**无法基于评论或反应量识别真正的讨论热点**。从更新时间看，以下 PR 覆盖范围最广、影响面最大，可作为关注重点：

- [#3781](https://github.com/nanocoai/nanoclaw/pull/3781) feat(agent-runner): enforce tools-only delivery —— 标签覆盖 agent-runner、configuration、core、ncl-cli、providers、skills、tools，是标签面最广的一条。
- [#3772](https://github.com/nanocoai/nanoclaw/pull/3772) feat(channels): voice adapter payload (OpenAI GPT-Live-1 browser calls) —— 引入新通道类型，属新增能力。
- [#3802](https://github.com/nanocoai/nanoclaw/pull/3802) fix(router): distinguish sticky subscriptions from accumulated sessions —— 涉及核心路由语义。

**诉求分析**：标签分布显示当前需求集中在"多通道一致性"（Mattermost 与 Slack 行为对齐、回调安全）与"provider 无关的可靠交付"两条主线上，反映用户在跨平台、跨 provider 部署时对行为一致性和密钥安全性的实际诉求。

## 5. Bug 与稳定性

今日 Issues 更新为 0，无用户直接报告的 Bug。以下为今日更新的带 `kind/bug` 标签的修复 PR，按影响面排序：

1. **心跳误杀长流式生成（高）** — [#3893](https://github.com/nanocoai/nanoclaw/pull/3893)：当单个内容块流式输出超过空闲上限时，宿主清理进程会在生成中途杀掉 Claude 容器。已有 fix PR（本条自身）。
2. **setup 删除目录后容器残留（中）** — [#3878](https://github.com/nanocoai/nanoclaw/pull/3878)：ping agent 的容器在文件夹被删除后仍在运行。已有 fix PR。
3. **arm64 主机 Iron Control 安装失败（中）** — [#3891](https://github.com/nanocoai/nanoclaw/pull/3891)：`ironsh/iron-control` 仅发布 `linux/amd64`，在 arm64 上报 `exec format error`，导致网关无法安装。已有 fix PR。
4. **Mattermost 回调未认证、密钥外泄风险（中高）** — [#3823](https://github.com/nanocoai/nanoclaw/pull/3823)：动作回调未认证，外部按钮集成可能拿到适配器共享密钥。已有 fix PR。
5. **router 误判 sticky 订阅（中）** — [#3802](https://github.com/nanocoai/nanoclaw/pull/3802)：任意已存在会话被当作线程已激活的依据，导致被忽略的消息产生错误 engagement。已有 fix PR。
6. **CLI 原因枚举与实际不符（低）** — [#3889](https://github.com/nanocoai/nanoclaw/pull/3889)：`ncl dropped-messages help` 列出了宿主从不写入的 `unknown_sender_public`。已有 fix PR。
7. **setup 失败时误推 Claude CLI（低）** — [#3884](https://github.com/nanocoai/nanoclaw/pull/3884)：Codex/OpenCode 安装或尚未选择运行时的场景会被错误提供 Claude CLI 安装器。已有 fix PR。
8. **CI 时序抖动与就绪探针诊断缺陷（低）** — [#3887](https://github.com/nanocoai/nanoclaw/pull/3887)：`restart-readiness.test.ts` 中探针被裁剪到截止时间，属真实诊断缺陷。已有 fix PR。
9. **Iron Control 数据库孤儿残留（低）** — [#3883](https://github.com/nanocoai/nanoclaw/pull/3883)：checkout 被删除后无法重试安装。已有 fix PR。
10. **setup 触发交互式 polkit 提示（低）** — [#3798](https://github.com/nanocoai/nanoclaw/pull/3798)：最小化主机上 `loginctl enable-linger` 会尝试调用缺失的 `pkttyagent`。已有 fix PR。

**稳定性结论**：今日所有已知缺陷均已有对应 fix PR 在队列中，无未修复的悬空 Bug，但修复尚未合并，线上稳定性收益为 0 直至合并发生。

## 6. 功能请求与路线图信号

今日无新 Issue，故无直接用户功能请求。基于在途的 `kind/feature` PR，以下方向最可能进入下一版本：

- **技能体系扩展**：[#3848](https://github.com/nanocoai/nanoclaw/pull/3848) 将 TypeSafe Jev 判定模型作为容器工具引入（分类、路由、排序、是否判断），[#3831](https://github.com/nanocoai/nanoclaw/pull/3831) 为 `/add-mattermost` 补充回调迁移指引。技能类 PR 同时带 `delivery/skill` 与 `PR: Skill` 标签，纳入节奏通常较快。
- **新通道类型**：[#3772](https://github.com/nanocoai/nanoclaw/pull/3772) 的 voice 通道（浏览器 WebRTC + OpenAI GPT-Live-1，经 sideband 接收转写与委派），是当前唯一新增通道形态的 PR，若合并将显著扩展输入渠道。
- **交付语义强化**：[#3781](https://github.com/nanocoai/nanoclaw/pull/3781) 让 `tools-only` 交付在 provider 无法稳定保持最终文本 envelope 契约的 agent 组中也可靠——这直接回应了"最终文本必须保持私有"的使用场景。

**判断**：以上均带 `core-team` 与 `follows-guidelines` 标签，符合项目规范流程，属核心团队主导路线，纳入下一版本的可能性较高；但需先解决合并停滞问题。

## 7. 用户反馈摘要

今日 Issues 更新为 0，PR 评论计数缺失，因此**未从 Issue 评论中提炼到用户反馈**，本部分依据 PR 摘要中反映的实际使用痛点归纳（非用户直接陈述）：

- **部署环境多样性痛点**：arm64 主机安装失败（[#3891](https://github.com/nanocoai/nanoclaw/pull/3891)）、缺少 `pkttyagent` 的最小化主机（[#3798](https://github.com/nanocoai/nanoclaw/pull/3798)）、CI 负载机上的时序抖动（[#3887](https://github.com/nanocoai/nanoclaw/pull/3887)），指向非标准环境下安装与测试的鲁棒性不足。
- **重装与清理场景**：安装失败后 checkout 被删导致无法重试（[#3883](https://github.com/nanocoai/nanoclaw/pull/3883)）、容器在目录删除后残留（[#3878](https://github.com/nanocoai/nanoclaw/pull/3878)），说明清理路径缺少幂等性。
- **多通道行为一致性预期**：用户期望 Mattermost 的行为与 Slack 一致（[#3797](https://github.com/nanocoai/nanoclaw/pull/3797)），并对回调密钥隔离有安全预期（[#3823](https://github.com/nanocoai/nanoclaw/pull/3823)）。
- **provider 兼容性**：Codex、OpenCode、Claude 多 provider 并存带来的提示逻辑分叉（[#3884](https://github.com/nanocoai/nanoclaw/pull/3884)）与交付契约不稳定（[#3781](https://github.com/nanocoai/nanoclaw/pull/3781)）。

**满意度信息**：数据中无正负面评价、无 👍 计数（全部为 0），无法评估满意度倾向。

## 8. 待处理积压

今日 21 条 PR 全部待合并，其中创建时间最早的可视为积压重点，提醒维护者优先处理：

- [#3772](https://github.com/nanocoai/nanoclaw/pull/3772)（创建 2026-09-11，积压 14 天）feat(channels): voice adapter payload —— 唯一的 voice 通道 PR，久置会累积与主干通道抽象的冲突成本。
- [#3781](https://github.com/nanocoai/nanoclaw/pull/3781)（创建 2026-09-12，积压 13 天）feat(agent-runner): enforce tools-only delivery —— 标签面最广，长期未合会影响核心交付语义定稿。
- [#3797](https://github.com/nanocoai/nanoclaw/pull/3797)（创建 2026-09-13，积压 12 天）与 [#3798](https://github.com/nanocoai/nanoclaw/pull/3798)（创建 2026-09-13，积压 12 天）—— 分别涉及 Mattermost 线程行为与 linge 校验。
- [#3802](https://github.com/nanocoai/nanoclaw/pull/3802)（创建 2026-09-14，积压 11 天）fix(router) —— 核心路由语义修复，延迟合并意味着错误 engagement 持续存在。
- [#3823](https://github.com/nanocoai/nanoclaw/pull/3823)（创建 2026-09-15，积压 10 天）fix(mattermost): authenticate callbacks and isolate action secrets —— **涉及安全，建议最高优先级**；[#3831](https://github.com/nanocoai/nanoclaw/pull/3831)（同日创建）为配套技能文档。
- [#3848](https://github.com/nanocoai/nanoclaw/pull/3848)（创建 2026-09-17，积压 8 天）feat(skills): /add-typesafe-tool。

**风险提示**：今日 Issues 为 0 且新版本为 0，但待合并 PR 达 21 条且全部带 `core-team` 标签，说明瓶颈在**审查与合并环节而非贡献环节**。建议维护者优先清理涉及安全（#3823）与高影响稳定性（#3893、#3891）的条目，并对 10 天以上的 PR 给出合并或关闭的明确结论，以避免长队列带来的重复冲突与贡献者流失。

---

*说明：本报告严格基于所提供的 GitHub 数据生成；评论数、Issue 讨论、用户满意度评价在本数据集中缺失或为空，相关部分已明确标注无法评估。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报（2026-09-25）

## 1. 今日速览

今日 NullClaw 无 Issues 活动、无新版本发布，全部动态集中在 Pull Request 侧：过去 24 小时共有 7 条 PR 更新，且全部处于 OPEN 待合并状态，无一条被合并或关闭。7 条 PR 中 6 条由 vernonstinebaker 提交、1 条由 serhiy-bzhezytskyy 提交，内容涵盖执行审批流修复、CLI 输出修复、记忆归档隔离、Provider 错误日志、技能目录符号链接支持以及文档修复。整体活跃度中等偏低，呈"输入密集、输出停滞"状态——社区在持续提交修复与文档，但维护者侧的合并动作今日为零，需关注审查队列的积压风险。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日无 PR 被合并或关闭，项目在代码主线层面**未取得已落地的推进**。以下 7 条 OPEN PR 代表了待审查的潜在进展方向：

- 执行审批流修复（#1009）：声称修复"监督式自主在遇到中/高风险命令时直接失败、而非暂停等待 `/approve`"的问题，PR 描述指 `approval_request` 状态实际从未被触达。该 PR 声明 Closes #900。
- CLI 流式输出修复（#1006）：修复 macOS 上流式 stdout 以 offset 0 位置写入导致首行首字节被换行符覆盖的问题（如 `pong` 首行损坏）。
- 记忆模块修复（#1005）：阻止归档会话分片被召回进实时轮次与 `memory_recall` 工具，并修正 session search 在 session 过滤前应用 `LIMIT` 导致的跨会话泄漏。
- Provider 错误可见性（#1004）：非 2xx 响应体此前被释放导致错误原因不可见，现改为记录脱敏后的错误体。
- 技能目录符号链接（#1003）：`nullclaw skills list` 与分类扫描跟进指向技能目录的符号链接，跳过损坏或非目录目标。
- 文档修复与新增（#1008、#1007）：修复文档索引渲染、补充 MCP/子智能体/语音等子系统中英文指南，以及诊断日志开关说明。

由于以上均未合并，暂无任何一项可计入已交付进展。

## 4. 社区热点

今日无 Issues 讨论，全部 PR 的评论数均显示为 `undefined`、点赞数均为 0，**不存在可识别的讨论热点**。相对而言，仅 PR #1009 在摘要中显式关联了 Issue #900（Closes #900），是今日唯一带有需求追溯链的条目：

- PR #1009：nullclaw/nullclaw PR #1009（作者 serhiy-bzhezytskyy，创建并更新于 2026-09-25）

该 PR 的描述揭示了一个真实诉求：用户对"监督式自主（supervised autonomy）"行为的预期与实际不符——期望是暂停等待审批，实际却是直接失败。这属于行为语义层面的偏差，而非普通缺陷。

## 5. Bug 与稳定性

按影响严重程度排列（均来自 PR 描述，尚无 fix 被合并，故所有修复均处于"待合并"状态）：

1. **监督式自主审批流程完全失效（高）** — 中/高风险 shell 命令不会暂停等待 `/approve`，而是始终失败，`approval_request` 状态不可达。影响核心安全交互路径。已有 fix PR #1009（OPEN，待合并）。
2. **归档历史污染实时上下文（高）** — 归档副本被召回进 prompt 与 `memory_recall`，导致字面理解的模型把当前用户消息当作旧历史；另有 session search 先 `LIMIT` 后过滤导致跨会话结果泄漏。已有 fix PR #1005（OPEN，待合并）。
3. **CLI 流式输出首行损坏（中）** — macOS 上以 offset 0 定位写入，尾随换行覆盖首字节，回复首行被破坏。已有 fix PR #1006（OPEN，待合并）。
4. **Provider 错误不可诊断（中）** — 非 2xx 响应体被即时释放，服务器返回原因（如模型不支持 tools）在无抓包情况下不可见。已有 fix PR #1004（OPEN，待合并）。
5. **文档索引无法渲染（低）** — 入门指南落地页标题与列表行带两位字母前缀，导致公开文档索引不渲染。已有 fix PR #1008（OPEN，待合并）。

## 6. 功能请求与路线图信号

今日无新 Issue 形式的功能请求。以下来自 PR 的能力扩展可视为路线图信号：

- **技能目录符号链接支持（#1003）**：`skills list` 与分类扫描跟进符号链接，同时保持归档安装语义不变（归档内符号链接条目仍被处理）。可能纳入下一版本：**较可能**，属小范围增强且已附实现。
- **文档体系扩建（#1008）**：新增 MCP、子智能体（subagents）、语音等子系统的中英文页面，暗示这些子系统已是项目对外承诺的能力面。可能纳入下一版本：**较可能**，纯文档。
- **诊断日志开关文档化（#1007）**：明确各 flag 名称、默认值、输出位置，并提示含内容日志应在生产环境保持关闭。可能纳入下一版本：**较可能**，纯文档。

## 7. 用户反馈摘要

今日无 Issues 评论数据可提炼。从 PR 描述可间接观察到的用户痛点包括：

- 对"监督式自主"预期的落空（#1009 关联 #900）：用户期望风险命令被拦截并等待人工批准，实际体验是直接失败，交互信任受损。
- 上下文串扰困扰（#1005）：字面理解的模型把归档历史误当当前输入，说明用户在多会话/长历史场景下遭遇过错误回复。
- 可观测性不足（#1004、#1007）：Provider 侧错误被吞、诊断日志含义未文档化，用户在排障时缺少第一手信息。
- 跨平台一致性（#1006）：macOS 上的输出损坏提示存在平台相关行为差异。

以上均为提交者视角的间接证据，今日无终端用户直接发声。

## 8. 待处理积压

- **审查队列积压风险（需关注）**：7 条 PR 全部 OPEN，其中 #1003–#1008 六条创建于 2026-09-24，至 2026-09-25 仍无更新（更新日期与创建日期一致），#1009 创建于 2026-09-25。今日合并数为 0，建议维护者优先处理高严重度的 #1009 与 #1005。
- **Issue #900（关联项）**：被 #1009 声明关闭，但数据中未提供其状态与历史时长，无法判断其积压程度，仅可确认该问题至今仍需通过 #1009 的合并才能结案。

链接汇总：
- nullclaw/nullclaw PR #1009
- nullclaw/nullclaw PR #1008
- nullclaw/nullclaw PR #1007
- nullclaw/nullclaw PR #1006
- nullclaw/nullclaw PR #1005
- nullclaw/nullclaw PR #1004
- nullclaw/nullclaw PR #1003

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-25

## 1. 今日速览

今日 IronClaw 仓库活跃度**偏低**：24 小时内仅有 1 条 Issue 更新（新开/活跃 1，已关闭 0）和 1 条 PR 更新（待合并 1，已合并/关闭 0），无新版本发布。当日无任何代码被合并到主干，项目推进力度为零，处于"低流量维护"状态。唯一新增 Issue #8111 为自动化的日度失败分类报告，其摘要明确指出 officeqa 套件中 38 个未通过任务"全部为真实的模型能力问题"，属于既有基准结果的持续记录。唯一待处理 PR #7988 是由 `ironclaw-ci[bot]` 生成的代码库知识图谱刷新（XS 尺寸、低风险、核心贡献者标记），仍处于开放待审状态。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日**无任何 PR 被合并或关闭**，项目未在功能或修复层面取得可度量的推进。

仍处于待合并状态的 PR：
- [#7988](https://github.com/nearai/ironclaw/pull/7988) `chore(agents): refresh codebase knowledge graph` — 由 `ironclaw-ci[bot]` 于 2026-08-29 创建，2026-09-25 有更新。内容为从当前默认分支刷新已提交的 codebase-memory 引导快照，由每夜运行的 `Codebase Graph Refresh` 工作流自动生成，标记为 `size: XS`、`risk: low`、`contributor: core`，变更类型为 CI/Infrastructure。属例行维护性变更，不含功能或缺陷修复。

活跃分支（仍在待审，未合并到主干）：
- [#7988](https://github.com/nearai/ironclaw/pull/7988) — see above.

## 4. 社区热点

今日各项互动指标均处于最低水平，**不存在讨论热点**：

| 条目 | 类型 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| #8111 | Issue | 0 | 0 | [#8111](https://github.com/nearai/ironclaw/issues/8111) |
| #7988 | PR | 未提供（undefined） | 0 | [#7988](https://github.com/nearai/ironclaw/pull/7988) |

从可获得的材料看，两条记录均无评论、无点赞，未形成任何社区讨论。Issue #8111 由 `pranavraja99` 发布，属于日度基准失败分类流程的常规输出，其背后诉求更偏向**基准结果的可追溯记录**而非用户功能请求。

## 5. Bug 与稳定性

今日**未报告新的 Bug、崩溃或回归问题**。需要说明的是，Issue #8111 虽标题包含 "failure taxonomy"，但其摘要明确指出 officeqa 套件的全部 38 个非通过任务均为"genuine model-qualit..."（真实模型能力问题），即归因于模型质量而非项目代码缺陷，因此不构成代码级稳定性问题。**无对应 fix PR**。

严重程度评估：无待处理缺陷，稳定性风险低。

## 6. 功能请求与路线图信号

今日**未收到任何用户提出的新功能需求**。唯一开放 PR [#7988](https://github.com/nearai/ironclaw/pull/7988) 为 CI/基础设施类的知识图谱快照刷新，与路线图功能无关，无法据此推断下一版本的功能方向。

## 7. 用户反馈摘要

今日 Issue 与 PR **均无评论内容**，无法提炼真实用户痛点、使用场景或满意度反馈。唯一可提取的信号来自 Issue #8111 发布者 `pranavraja99` 的自动化摘要：其将 officeqa 基准的失败原因归类为模型质量问题，而非工具或框架缺陷——这在一定程度上可视为对 IronClaw 评测框架本身稳定性的间接正面信号，但样本量为 1，不宜过度解读。

## 8. 待处理积压

以下条目在今日数据中呈现明显的响应延迟：

- **PR [#7988](https://github.com/nearai/ironclaw/pull/7988)** — 创建于 **2026-08-29**，至 2026-09-25 已开放约 **27 天**仍未合并。该 PR 由机器人自动生成、标记为 `size: XS` 与 `risk: low`，属低风险例行变更，长期挂起可能影响后续知识图谱快照的连续性与时效性。建议维护者尽快审阅合并或关闭。
- **Issue [#8111](https://github.com/nearai/ironclaw/issues/8111)** — 创建与更新均为 2026-09-24，暂无积压迹象，但作为日度分类报告，需关注是否存在同类历史 Issue 未被归档。

---

**项目健康度小结**：当日零合并、零发布、零讨论，活跃度处于低位；无新增缺陷，稳定性无异常，但存在一个低风险 PR 积压近一个月，建议纳入常规清理。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-09-25）

## 1. 今日速览

今日项目零 Issue 活动、零新版本发布，全部动态集中在 Pull Request 通道，共 14 条 PR 更新（10 条待合并、4 条已合并/关闭），活跃度属**中等偏上、单通道活跃**。当日新提交的 PR 集中由维护者 alison-xx 与 fisherdaddy 推动，主题围绕 OpenClaw 运行时的稳定性、热重载与进度卡片展示；同时新增了 Requesty 模型供应商接入。值得警惕的是，10 条待合并 PR 中有 5 条被标记 `stale`（自 4 月创建以来长期挂起），积压压力明显。整体判断：**开发推进健康，但历史无人处理的 PR 已构成维护风险**。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭 4 条 PR，均为 fisherdaddy 于 9 月 24–25 日之间关闭：

- **#2761 [CLOSED]** `fix(openclaw): resolve model output-length truncation issues` — 修复 GLM-5.3 等模型因 max_tokens 默认过低导致任务中途被截断；根因是内置模型目录仅扫描 `dist/extensions`，遗漏了预装的第三方 provider 插件。属于直接面向用户可感知输出质量的修复。
  https://github.com/netease-youdao/LobsterAI/pull/2761
- **#2759 [CLOSED]** `fix(openclaw): repair and continue malformed OpenAI-compatible tool calls` — 针对 v2026.8.1 在工具调用参数含原始控制字符或非法转义时直接拒绝、导致已执行工具有副作用的回合被丢弃问题，回移了上游的字符串字面量修复逻辑。
  https://github.com/netease-youdao/LobsterAI/pull/2759
- **#2762 / #2760 [CLOSED]** `feat(ui): align palette and layout`（内容相同，一条为另一条的重复提交）— 主题色令牌改为中性灰阶（去除蓝色偏色）、主内容区与侧边栏改为贴边布局、侧栏导航项改为 14px 宽的 pill 按钮、调整默认与记忆的窗口尺寸。
  https://github.com/netease-youdao/LobsterAI/pull/2762
  https://github.com/netease-youdao/LobsterAI/pull/2760

**整体推进评估**：合并内容覆盖两条主线——OpenClaw 工具调用与输出长度的正确性修复（直接影响任务成功率），以及 UI 视觉体系的一次统一调整。前者属稳定性收益，后者属体验打磨，未见架构级变更。

## 4. 社区热点

数据中所有 PR 的评论数均显示为 `undefined`、点赞数均为 0，**今日无实质讨论热度**，不存在评论最活跃的条目。从提交活跃度看，可关注两条主线：

- **alison-xx 的 OpenClaw 稳定性三连**：#2765（跨压缩与网关重启保留已接受的工作）、#2764（三项 gateway 配置改为热重载免重启）、#2758（展示并可刷新原生 OpenClaw 进度卡片）。
  https://github.com/netease-youdao/LobsterAI/pull/2765
  https://github.com/netease-youdao/LobsterAI/pull/2764
  https://github.com/netease-youdao/LobsterAI/pull/2758
  背后诉求：降低长任务被中断的概率，并减少因配置变更引发的网关重启扰动，反映出重度使用场景对**连续性**的核心要求。

- **#2766 引入 Requesty 作为内置模型供应商**，采用与 OpenRouter 相同的接入方式（共享 provider registry + OpenClaw provider descriptor）。诉求：扩展"一个 API 调用多模型"的网关型供应商选择。
  https://github.com/netease-youdao/LobsterAI/pull/2766

## 5. Bug 与稳定性

按严重程度排列，均已有对应 fix PR：

**高 — 定时任务"不通知"模式触发时网关校验失败**
- **#1550 [OPEN, stale]**：通过会话/IM 创建的定时任务，投递模式设为 `mode=none` 后，实际触发运行时网关报错 `"Channel is required when multiple channels are configured"`；而 UI 表单创建的同类任务运行正常。根因是两种创建路径构建 delivery 的方式不一致。
  https://github.com/netease-youdao/LobsterAI/pull/1550

**中 — 定时任务通知渠道无法改回"不通知"**
- **#1547 [OPEN, stale]**：编辑页面将通知渠道从 IM 渠道（如飞书）改为"不通知"并保存后，再次编辑仍显示原 IM 渠道。根因为 commit `61cfe60` 引入的两处代码设计不一致，属历史 bug；修复方式为表单初始化时优先检查 `delivery.mode`。
  https://github.com/netease-youdao/LobsterAI/pull/1547

**中 — 模型调用失败时误报与重放冲突**
- **#2763 [OPEN]**：模型调用一旦启动即已提交该轮 keyed user message，失败时重放整轮会与之冲突，最终只抛出 `"LLM request failed."` 而非真实的 provider 错误。修复引入 `modelCallStarted` 状态以阻断整轮重放。
  https://github.com/netease-youdao/LobsterAI/pull/2763

**中 — 全局搜索范围被隐式限制**
- **#1634 [OPEN, stale]**：搜索数据源经后端按 `agentId` 查询 + 前端 filter 双重过滤，只能搜到当前 Agent 的任务；Redux 中 sessions 因 `loadSessions` 调用时机不同而不稳定，结果不可预测。与用户对"全局搜索"的预期矛盾。
  https://github.com/netease-youdao/LobsterAI/pull/1634

**低 — 已关闭的修复**：#2761（输出截断）、#2759（畸形工具调用）已于今日关闭，风险解除。

## 6. 功能请求与路线图信号

- **Requesty 模型供应商接入（#2766）**：与 OpenRouter 同构的实现路径意味着接入成本低、评审阻力小，**纳入下一版本的可能性较高**。
  https://github.com/netease-youdao/LobsterAI/pull/2766
- **OpenClaw 进度卡片展示与手动刷新（#2758）**：把持久化的进度卡片置于 Cowork 输入框上方，支持在保留上一版 plan 的前提下显式刷新，涉及 Markdown、步骤状态、revision 安全的关闭、重连更新等。属可见性功能，信号明确。
  https://github.com/netease-youdao/LobsterAI/pull/2758
- **网关配置热重载（#2764）**：将 `gateway.tools`、`gateway.trustedProxies`、`gateway.allowRealIpFallback` 三项标记为热重载，理由是它们的 HTTP 消费方本就按请求读取当前配置，无需重启。
  https://github.com/netease-youdao/LobsterAI/pull/2764
- **多 Agent 个性化首页（#1660）**：非 main agent 的欢迎区标题由「开始协作」改为「Hi，我是{agent名称}」，描述改为 agent 自身内容，main agent 保持原样。属产品体验信号，但已挂起近 5 个月。
  https://github.com/netease-youdao/LobsterAI/pull/1660

## 7. 用户反馈摘要

今日 **0 条 Issue**、PR 评论数据均为 `undefined`，**无可提炼的真实用户评论**。仅能从 PR 摘要中的问题描述间接推断用户痛点：

- 定时任务的通知配置存在"改了不生效"和"运行时报校验错误"两类不一致行为，说明**通过会话/IM 与通过 UI 两条创建路径的语义未对齐**，是用户可感知的配置可信度问题（#1547、#1550）。
- 全局搜索被当前 Agent 隐式限流，说明用户期望的是跨 Agent 的全局检索（#1634）。
- GLM-5.3 等第三方 provider 模型被中途截断，指向**预装第三方插件未被模型目录扫描覆盖**的配置盲区（#2761，已修复）。

## 8. 待处理积压

今日 10 条待合并 PR 中，**5 条被标记 `stale`，全部创建于 4 月 7–13 日，已挂起超过 5 个月**，且均来自同一作者 gongzhi-netease：

| PR | 主题 | 创建日期 | 状态 |
|---|---|---|---|
| [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | 定时任务通知渠道无法改回"不通知" | 2026-04-07 | OPEN / stale |
| [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) | mode=none 时移除发给网关的 channel/to 字段 | 2026-04-07 | OPEN / stale |
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | 模型选择器 UI 重构与工具栏样式统一 | 2026-04-10 | OPEN / stale |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | 全局搜索修复与体验升级 | 2026-04-11 | OPEN / stale |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | 非 main agent 首页显示名称与描述 | 2026-04-13 | OPEN / stale |

**维护建议**：#1547 与 #1550 是同一功能域内相互关联的正确性修复（定时任务投递模式），且 #1550 描述的是运行时网关校验失败，优先级应高于纯 UI 类改动；#1628 与 #1634 涉及 renderer/cowork 区域，可能与今日已关闭的 UI 统一改动（#2760/#2762）产生冲突，建议优先评估是否 rebase 或关闭。今日 Issues 通道完全静默，但 PR 积压的年龄结构显示**评审带宽而非提交量才是当前瓶颈**。

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

# CoPaw 项目日报 · 2026-09-25

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 公开数据（部分链接在源数据中标注为 QwenPaw 仓库路径，本文按原始标注保留）。

---

## 1. 今日速览

- 过去 24 小时共 18 条 Issue 更新（新开/活跃 15，已关闭 3），4 条 PR 更新且**全部仍待合并**，无新版本发布。
- 活跃度评估：**高活跃、低吞吐**。问题侧讨论密集（多条 Issue 达到 2–7 条评论），但当日无任何 PR 被合并或关闭，代码侧推进停滞。
- 当日新开 3 条 Bug（#7980、#7981、#7979），全部集中在上下文管理、超时语义与本地模型适配，属于核心链路问题。
- 上下文/压缩（context compaction）方向今日至少涉及 6 条 Issue，是当前最集中的技术风险区。
- 社区长期呼声（多租户、Agent 自主上下文管理、跨 Agent 会话监控）持续升温，与已有 PR 形成较明确的路线图信号。

---

## 2. 版本发布

无新版本发布。今日无 Releases 数据。

---

## 3. 项目进展

当日**无 PR 被合并或关闭**（待合并 4，已合并/关闭 0），项目在代码层面无可见推进。以下 4 条 PR 处于待合并状态，均已更新至 2026-09-25，值得优先评审：

| PR | 标题 | 作者 | 状态 | 潜在价值 |
|---|---|---|---|---|
| [#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923) | feat(scroll): age out tool_result blocks after blocks_retention_days | shadowabi | OPEN | 为 `tool_result` 的 `blocks` 增加保留策略，缓解 scroll 历史无界增长（作者称其在生产库中约占 75% 字节） |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | feat(chats): add scroll-back message pagination | auwc（first-time-contributor） | OPEN | 修复压缩后回看会话时记录静默丢失的问题 |
| [#7825](https://github.com/agentscope-ai/QwenPaw/pull/7825) | fix(crons): expand numeric DOW steps/ranges to crontab weekday names | kabishou11 | OPEN | 修复数值 DOW 的 ISO/Crontab 语义差异导致的错误调度 |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): optimize settings workflows and sidebar interactions | rayrayraykk | OPEN | 控制台设置流程与侧边栏交互优化（源数据未提供 PR 摘要） |

**健康度提示**：4 条待合并 PR 中有 1 条为首次贡献者提交（#7542），另 1 条（#7923）直接回应今日多条历史膨胀/上下文相关 Issue。建议维护者优先清理，避免积压抑制贡献者意愿。

---

## 4. 社区热点

按评论数与反应数排序：

1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — `[question][Discussion] QwenPaw Hub 多租户版 2.2.0 路线讨论`（32 评论，👍 4，2026-08-26 创建，2026-09-24 更新）
   项目当下最热的讨论。作者 rayrayraykk 明确说明 QwenPaw 起于个人助手，但社区反复要求团队化运行方式，Hub 是首次回应，并引用 #2324（多用户访问与管理员管理）。**诉求**：从个人工具向团队/多租户部署演进，用户希望参与定义下一步功能优先级。

2. **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)** — `[enhancement][Bug] 压缩后仍可能超出 provider 请求预算并导致活跃 turn 失败`（7 评论，2026-09-08 创建，2026-09-25 更新）
   要求压缩触发与最终预算基于**完整 provider 请求**而非仅可见会话上下文。环境为 `2.2.0b7`。

3. **[#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576)** — `[CLOSED][Bug] RetryChatModel 硬编码 32768 context_size 回退导致所有模型 CONTEXT_UNFIT`（6 评论，已关闭）
   影响 v2.1.0 至 v2.2.0 全部已发布版本，属高影响缺陷，今日已关闭。

4. **[#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377)** — `Agent Loop 模式配置在任务运行间不持久化（v2.1.0 console）`（5 评论）
   控制台修改 Loop 模式后运行会话即回退为 Default，配置持久化为共性痛点。

5. **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)** — `飞书会话 queue consumer 长驻卡死导致会话静默无响应`（4 评论）
   高优先级（priority=10，卡片类）路径处理后 consumer 不再拉取，且新消息无法新建消费者。

6. **[#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)**、**[#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)** — 各 4 评论，分别涉及 Daily Paper 网络不可达时静默失败、压缩过程中 tool_call 结构丢失导致 400 错误。

**分析**：热点高度集中于两类诉求——（a）**上下文生命周期治理**（压缩预算、压缩后完整性、历史保留），（b）**多租户/团队化能力**。前者是稳定性刚需，后者是产品方向，二者共同构成当前社区议程主线。

---

## 5. Bug 与稳定性

按严重程度排列（是否有 fix PR 依据今日 PR 列表判断，均**未见对应 fix PR**）：

### 严重（核心链路失效 / 状态污染）

- **[#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980)**（2026-09-25 新开）— `grep_search` 缺少二进制过滤，匹配到内部 `history.db-wal`，造成**会话状态污染与不可恢复的 doom loop**。默认在 workspace 根目录搜索且无 `grep -I` / ripgrep 式过滤。**无 fix PR。**
- **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)** — 飞书 DM 会话 consumer 卡死后静默无响应，同 session 新消息无法新建消费者。消息通道级不可用。**无 fix PR。**
- **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)** — 压缩仍可超出 provider 完整请求预算，导致活跃 turn 失败（`2.2.0b7`）。**无 fix PR。**

### 高（数据一致性 / 结果错误）

- **[#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850)** — `DriverManager.reload_driver()` 对 driver card 做读-改-写，后台重载会用陈旧 card 覆盖并发策略写入，属**丢失更新（lost update）**。**无 fix PR。**
- **[#7979](https://github.com/agentscope-ai/QwenPaw/issues/7979)**（2026-09-25 新开）— 云模型上下文窗口目录被套用到本地 llama.cpp provider：32k 服务被当作 1M，**压缩永不触发**。**无 fix PR。**
- **[#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981)**（2026-09-25 新开）— `chat_with_agent` 前台超时两个缺陷：调用方被误告知「被用户中断」，父 turn 结束且无最终答案（默认 300s 超时）。**无 fix PR。**
- **[#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836)** — `strategy=scroll` 下，位于工具密集区段内的用户 turn 被逐出活跃窗口，而 `history.db` 仍保留 → 活跃窗口丢失请求。**无 fix PR**，但 PR #7542（scroll-back 分页）方向相关。
- **[#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)** — 压缩期间 tool_use/tool_result 块被转为纯文本，导致 400 错误与消息数不匹配（v1.1.12.post2 起长期存在）。**无 fix PR。**
- **[#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856)** — `[CLOSED]` `qwenpaw-pet 0.1.1` 丢弃 `actor` 参数，破坏 `2.2.2b2` 工具审批。**今日已关闭。**

### 中

- **[#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857)** — `_shutdown_acp_services()` 同步回退可能跳过 session 清理并泄漏事件循环（macOS arm64）。**无 fix PR。**
- **[#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)** — Daily Paper cron 在 arxiv.org 不可达时静默失败，无代理/端点配置，错误信息掩盖真实原因（Desktop 2.2.1-beta.2）。
- **[#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767)** — 单条 Issue 汇总 4 个缺陷：console 附件陈旧 blob、一次性 cron 漏触发、console tail-drop、`on_acting` 从不触发（2.2.0，macOS，微信+console 双通道）。
- **[#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377)** — Loop 模式配置不持久化。

**稳定性结论**：今日 3 条新开 Bug 全部落在核心执行链路，且**全部无 fix PR**；另有多条长期未修的数据完整性/状态污染类缺陷。压缩子系统（#7628、#5856、#7836、#7733）构成当前最集中的风险簇。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR / 信号 | 纳入下一版本的可能性 |
|---|---|---|---|
| Agent 自主上下文管理：上下文逐出时平滑交接 | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | 与 #7836、#7628 同簇；PR #7923 处理历史保留侧 | 中—高：问题簇密集，已有 PR 触及相邻机制 |
| 侧边栏跨 Agent「Recent Sessions」面板（实时状态、未读标记、快速切换） | [#7978](https://github.com/agentscope-ai/QwenPaw/issues/7978) | 与 PR #7956（侧边栏交互优化）方向一致 | 中：控制台体验持续投入，但需确认 #7956 是否覆盖 |
| 多租户 / 团队化运行（Hub 后续） | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 已随 2.2.0 推出 Hub，讨论下一步 | 高：官方主动征集方向，32 条评论 |
| 审批命令简化：短别名 + session/always 作用域 | [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) | **CLOSED**（/approve、/deny 已于 v1.1.7 实现） | 已关闭，剩余为帮助文本与 `/session`、`/always`、`/reset` 补充 |
| scroll 历史无界增长治理 | — | PR **[#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923)** | 高：PR 已就绪待合并 |
| 压缩后回看历史记录缺失 | #7836 等 | PR **[#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542)** | 高：PR 已就绪待合并 |

---

## 7. 用户反馈摘要

**真实痛点**

- **压缩是最大集体痛点**：用户反复报告压缩后上下文结构被破坏（#5856 的 tool_call 转纯文本 → 400 错误）、压缩后仍超预算（#7628）、压缩把活跃用户请求逐出窗口（#7836）、逐出时机对 Agent 完全不透明（#7733）。核心不满是：**逐出由纯 token 阈值触发，而唯一知道「哪部分工作仍活着」的 Agent 没有发言权，也收不到预警**（#7733 原文）。
- **状态污染类问题后果最重**：#7980 指出一次 `grep_search` 就可能导致不可恢复的 doom loop，用户对此类「一次误操作即毁会话」的容忍度极低。
- **静默失败与误导性错误信息反复出现**：#7715（Daily Paper 报「completed with no returned content」掩盖真实原因）、#7981（超时被告知「被用户中断」）、#7534（会话静默无响应）。用户明确要求**错误信息应暴露真实原因并可配置**（代理/端点）。
- **配置不持久化损害信任**：#7377 的 Loop 模式改完即回退，属低复杂度但高频摩擦。
- **本地模型适配不足**：#7979 显示本地 llama.cpp 部署（别名 `qwen3.8-27b`）被套用云端静态目录参数，压缩永不触发——反映本地推理用户路径测试覆盖不足。

**使用场景**

- 团队/多租户部署（#7318，社区多次请求）。
- 长时工具密集任务（反复文件读取、diff、日志转储，见 #7836）。
- 消息通道集成：飞书 DM（#7534）、微信 + console 双通道（#7767）。
- 定时/自动化：cron 任务（#7715、#7767）、Daily Paper 记忆 cron。
- 插件生态：`qwenpaw-pet`（#7856）、通过 `register_middleware` 注册的 guardrail/gate 插件（#7767）。

**满意度信号**

- #7318 官方主动征集方向并获得 32 条评论、4 个 👍，说明 Hub 方向获得正向响应。
- #4450 关闭（短命令已在 v1.1.7 实现），但用户指出「帮助文本和审批提示中未提及，用户不知道」——**已实现功能的可发现性不足**是隐性不满。
- #7836 获得 1 个 👍，反映同类遭遇存在共鸣。

---

## 8. 待处理积压

需维护者重点关注：

1. **[#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)**（2026-07-08 创建，滞留 **79 天**）— 压缩丢失 tool_call 结构导致 400 错误。跨多个版本未修，且与今日多条压缩 Issue 同根。
2. **[#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450)**（2026-05-16 创建，滞留 **131 天**，今日关闭）— 审批命令文档与作用域补充，长期未响应后关闭。
3. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)**（2026-08-26 创建，**30 天**，32 评论）— 路线图讨论热度最高，但未见官方结论或对应 PR。
4. **[#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377)**（2026-08-28 创建，**28 天**）— Loop 模式持久化，低复杂度但 28 天未修。
5. **[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)**（2026-09-03 创建，**22 天**）— 飞书会话静默卡死，消息通道级严重缺陷，无 fix PR。
6. **[#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)**（2026-09-12 创建，**13 天**）— Daily Paper 静默失败，涉及配置缺失。
7. **[#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576)**（2026-09-05 创建，今日关闭）— 硬编码 32768 回退影响全部已发布版本，建议确认修复是否已进入发布分支。
8. **PR [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542)**（2026-09-04 创建，待合并 **21 天**，首次贡献者）— 建议优先评审，避免流失新贡献者。
9. **PR [#7825](https://github.com/agentscope-ai/QwenPaw/pull/7825)**（2026-09-17 创建，待合并 **8 天**）— cron DOW 调度错误修复，影响任务正确执行。

**整体健康度判断**：社区参与度高、问题反馈质量高（多条含明确复现路径与版本号），但**合并侧产能不足**（今日 0 合并、4 条待合并、含 1 条首次贡献者 PR 滞留 21 天），且严重 Bug 普遍缺少 fix PR。建议维护者优先处理压缩子系统簇（#5856 / #7628 / #7836）与消息通道静默失败（#7534），并清理待合并 PR 队列。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-09-25

> 数据来源：github.com/zeroclaw-labs/zeroclaw 公开 GitHub 数据（过去 24 小时）

## 1. 今日速览

ZeroClaw 今日维持高强度协作节奏：过去 24 小时共 50 条 Issue、50 条 PR 发生更新，其中 Issues 新增/活跃 37 条、关闭 13 条，PR 待合并 35 条、已合并/关闭 15 条，无新版本发布。讨论重心集中在两条主线：一是**运行时与通道架构的底层重构**（通道工厂注册、webhook 分发集中化、cron 抽离），二是**安全与身份访问控制**（RPC 会话工作区绑定、主机级准入控制 RFC、wasmtime-wasi CVE 修复）。今日还出现了多个高优先级 SIG（如 #11055 daemon 未注册 channel-map 工厂）被快速定位，同时 #11115 与 #11120 两个修复 PR 在同日关闭，反映出对 master 构建健康的响应速度较快。整体评估：**活跃度极高，工程治理与架构债务清理并行推进，项目健康度良好但待合并 PR 积压（35 条）值得关注。**

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **#11115 [CLOSED] fix(runtime): restore master build after #10155, #10259 and #11085 collided** — 作者 JordanTheJet。
  master 在 `d6b8326462` 处 `zeroclaw-runtime` 测试目标停止编译，原因系三个 PR 先后合入、各自针对旧 master 通过验证后产生冲突。该 PR 恢复了 master 构建，属于关键的构建稳定性修复。
  链接: zeroclaw-labs/zeroclaw PR #11115

- **#11120 [CLOSED] test(release): stop the Apple preflight test from catching subprocess sleeps** — 作者 iceHub82。
  修复 `apple_preflight_test.py` 中 mock 全局 `time.sleep` 导致误捕获 subprocess 等待循环睡眠的问题，消除发布预检测试的假阳性。
  链接: zeroclaw-labs/zeroclaw PR #11120

同日在 Issues 侧关闭的重要议题（含已接受的 RFC）：

- **#10930 [CLOSED] RFC: One durable primitive for questions an agent asks a human** — 提出将 SOP 审批门（目前唯一实现「agent 向人类提问并持久等待」的机制）统一为单一持久原语。
- **#10929 [CLOSED] RFC: Delivery receipts for outbound messages** — 指出出站消息缺乏标识符、无法确认送达，提出投递回执机制。
- **#11027 [CLOSED] RFC: Agent-to-agent session messaging with receiver discretion** — agent 跨会话消息交换，且由接收方决定是否接受。
- **#11017 [CLOSED] RFC: Preserve applicable reviews and simplify expedited merge decisions** — 治理流程 RFC，涉及快速二次评审通道。
- **#6864 [CLOSED] [Feature]: Invert zeroclaw-channels → zeroclaw-runtime layer dependency** — 长期存在的 crate 层依赖倒置问题关闭，orchestrator 将迁入 runtime。
- **#8586 [CLOSED] refactor(gateway): centralize webhook channel message dispatch** — 统一 webhook 到 channel 的入口助手。
- **#8559 [CLOSED] [Bug]: Agents stop their work when exiting the chat window in web dashboard** — S1 级 dashboard 工作流阻塞问题关闭。

**整体推进评估**：今日以「修复构建 + 关闭一批已接受的架构/治理 RFC」为主。多条 RFC 的关闭意味着设计决策阶段收敛，后续将进入实现期；但对应实现 PR（如 #10197、#10551、#10557 等）多数仍处于 OPEN 待合并状态，项目实际功能落地仍有较大交付缺口。

## 4. 社区热点

按评论数排序的活跃议题：

- **#8692 [OPEN] [Tracker]: Maintainer decision queue for RFCs and design issues** — 15 条评论，作者 Audacity88（创建于 2026-07-04，今日仍有更新）。
  作为 RFC、设计议题、发布政策与协调 tracker 的活跃决策队列，是全项目治理的枢纽。评论量最高反映维护者决策负载集中。
  链接: zeroclaw-labs/zeroclaw Issue #8692

- **#8586 [CLOSED] refactor(gateway): centralize webhook channel message dispatch** — 10 条评论，今日关闭。
  诉求：webhook 类通道在保留传输层解析与快速确认的同时，复用统一的消息生命周期（自动保存、agent 分发、回复/错误投递）。
  链接: zeroclaw-labs/zeroclaw Issue #8586

- **#6489 [OPEN] [Tracker]: Unified capability catalog and plugin migration roadmap** — 9 条评论，作者 theonlyhennygod。
  目标是弥合 Integrations 与 WASM-plugin 两套视图，形成覆盖内置、已安装包、已配置实例与运行时观测的统一能力目录。
  链接: zeroclaw-labs/zeroclaw Issue #6489

- **#7108 [OPEN] feat(ci): improve cached Rust builds and CI critical path** — 8 条评论，作者 Audacity88。
  痛点明确：当前 PR CI 常需约 15–20 分钟，即使实际代码变更很小。这是社区对开发体验的核心不满。
  链接: zeroclaw-labs/zeroclaw Issue #7108

- **#10970 [OPEN] RFC: Host-scoped admission control and per-agent resource bounds** — 7 条评论，作者 JordanTheJet（创建于 2026-09-19，属新近高关注议题）。
  诉求：在同一台运行多 agent 的机器上，约束并发 turn、并发工具执行与单 agent 内存，使系统在过载时表现为延迟上升而非稳定性崩溃。
  链接: zeroclaw-labs/zeroclaw Issue #10970

- **#8519 [OPEN] [p1] Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs** — 7 条评论，作者 singlerider。
  指出 `cargo audit`（读取整个 Cargo.lock）与 `cargo deny check`（评估解析后依赖图）的忽略列表范围天然不同，存在 `audit.toml`/`deny.toml` 漂移，并关联 wasmtime-wasi CVE 修复。
  链接: zeroclaw-labs/zeroclaw Issue #8519

**背后诉求分析**：讨论热度分布显示出清晰的「治理集中化」倾向——最高评论量是一条决策队列 tracker，而非具体功能。这说明项目正处于架构与流程的密集决策期，维护者注意力成为稀缺资源；同时 CI 速度与依赖安全是本周期最具共识的工程痛点。

## 5. Bug 与稳定性

按严重程度排列：

- **[P1 / 高] #11055 [OPEN] [Bug]: The daemon never registers the channel-map factory, so webhook, cron and SOP turns have no channels** — 作者 RustLangLatam（创建 2026-09-22，今日仍有更新）。
  严重度标注为 Medium，但优先级为 p1。影响：daemon 部署下，除两个入口点外，通道寻址工具不可用。根因是 `zeroclaw-runtime` 通过注入方式访问 channels，而 daemon 未注册 channel-map 工厂，波及 webhook、cron 与 SOP turn。标签含 `needs-maintainer-review`、`risk:high`。**目前未见对应 fix PR。**
  链接: zeroclaw-labs/zeroclaw Issue #11055

- **[P1 / 高] #8519 [OPEN] Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs (audit.toml/deny.toml drift)** — 依赖安全类。**未见 fix PR。**
  链接: zeroclaw-labs/zeroclaw Issue #8519

- **[S1 / 已关闭] #8559 [CLOSED] [Bug]: Agents stop their work when exiting the chat window in web dashboard** — 关闭于今日（更新 2026-09-24）。
  现象：在 web dashboard 中给 agent 派发任务后退出聊天会话，agent 循环被当作「被用户中断」而停止，完全阻塞长任务场景。已关闭。
  链接: zeroclaw-labs/zeroclaw Issue #8559

- **[S3 / 已关闭] #10805 [CLOSED] [Bug]: control_plane liveness tests race process teardown on Windows (Advisory Windows nextest)** — 非必需 CI 任务 `Advisory Windows nextest` 偶发失败于两个 `control_plane` 进程存活测试。已关闭。相关 PR #11120 今日关闭，处理发布预检测试的类似假阳性问题。
  链接: zeroclaw-labs/zeroclaw Issue #10805

- **安全修复 PR：#11112 [OPEN] fix(security): bind RPC sessions to the canonical authorized workspace** — 作者 JordanTheJet。
  发现 `confine_session_workspace_with_grants` 解析请求 cwd、校验已解析目录后**丢弃了结果**，`session/new` 因此未绑定到规范授权工作区。标签 `domain:security`、`risk:high`。**这是本次数据中明确涉及安全边界的修复 PR，建议优先评审。**
  链接: zeroclaw-labs/zeroclaw PR #11112

- **正确性修复 PR：#10397 [OPEN] fix(mcp): send tool result text blocks, not the whole CallToolResult envelope** — 当 MCP server 在 `content[].text` 与 `structuredContent` 返回相同结构化载荷时，面向模型的格式化器应只发送拼接后的文本块而非整个 envelope。标签 `bug`、`risk:medium`。
  链接: zeroclaw-labs/zeroclaw PR #10397

## 6. 功能请求与路线图信号

结合已有 PR 与 tracker 判断可能进入下一版本的方向：

- **运行时插件化（可能纳入）**：#8850 [OPEN] [Tracker] Move optional channels & tools from compile-time feature flags to runtime plugins — 目标是将可选通道与工具从 Cargo 编译期 feature 转为可运行时安装的 WASM 插件（来自 `zeroclaw-labs/zeroclaw-plugins`），使标准二进制无需重新编译即可获得通道/工具。与 #6489「统一能力目录」tracker 互为表里。
  链接: zeroclaw-labs/zeroclaw Issue #8850 / #6489

- **ZeroRelay 与 v0.9.0 就绪（明确指向下一版本）**：#8358 [OPEN] [Tracker]: ZeroRelay native transport and v0.9.0 readiness — 协调 ZeroRelay 剩余交付与发布就绪工作，隶属 v0.9.0 milestone。相关实现 PR **#11099 [OPEN] feat(enroll): print a relay frontdoor link and QR with the pairing code**（Stacked，依赖 #11089，合并后需 retarget 到 master）正在推进。
  链接: zeroclaw-labs/zeroclaw Issue #8358 / PR #11099

- **域名身份与访问（路线图进行中）**：#8289 [OPEN] [Tracker]: OIDC milestone: canonical principals and inbound authentication — 协调 #7141 的分阶段实现。相关开放 PR **#11112** 即为此方向的会话工作区绑定安全修复。
  链接: zeroclaw-labs/zeroclaw Issue #8289

- **SOP 控制面 5/5（路线图进行中）**：#8288 [OPEN] [Tracker]: SOP milestone: daemon-owned SOP control plane to 5/5 — 定义 SOP「完成」需具备 daemon 持有的 SOP 控制面并满足全部 13 项能力。相关 PR **#11111 [OPEN] docs(runtime): propose bounded SOP RPC placement exception**（提议为 `sops.run` RPC handler 临时使用 daemon generation 的 SOP driver 记录一项有界例外）与 **#11113 [OPEN] test(runtime): sync RPC, SOP, and plugin CLI fixtures** 今日新开。
  链接: zeroclaw-labs/zeroclaw Issue #8288 / PR #11111 / PR #11113

- **Agent 可移植性（新功能提案）**：**#9986 [OPEN] feat(agents): export an agent to a portable bundle** — 新增 `zeroclaw agents export <alias> --out <dir>`，输出包含 manifest、该 agent 所需配置闭包的可移植 bundle。标签 `risk:high`、`size:XL`。
  链接: zeroclaw-labs/zeroclaw PR #9986

- **Agent 配置自助编写**：**#10551 [OPEN] feat(tools): agent-facing config authoring with operator-approved policy previews** — 将 JSON Patch 解析、类型强制、属性元数据、密钥处理与内存应用下沉至 `zeroclaw-config`；面向 agent 的配置编写需经操作者批准的策略预览。
  链接: zeroclaw-labs/zeroclaw PR #10551

- **WhatsApp 通道 Markdown 完善**：#11052 [OPEN] [p3] [Feature]: Render thematic breaks and setext headings for WhatsApp — 在 PR #10475 有限转换器基础上，补齐 CommonMark 主题分隔线与 setext 标题。属细节完善，优先级 p3。
  链接: zeroclaw-labs/zeroclaw Issue #11052

## 7. 用户反馈摘要

从 Issue 内容与标题可提炼的真实痛点：

- **CI 反馈速度不满（高频共识）**：Issue #7108 直指「当前 PR CI 即使在真实代码变更很小时也常需 15–20 分钟」，这是开发者日常体验中最一致的摩擦点。
- **长任务被 UI 行为打断（已修复）**：Issue #8559 描述「退出聊天会话后 agent 停止工作」，用户明确指出该行为「完全阻塞了长任务执行」，属 S1 级工作流阻塞，已关闭。
- **daemon 部署下通道能力缺失（未解决）**：Issue #11055 指出「在 daemon 部署中，除两个入口点外，通道寻址工具不可用」，影响 webhook、cron 与 SOP 三类 turn，属生产可用性痛点。
- **多 agent 同机运行的稳定性担忧**：Issue #10970 提出「要让一台机器在同时运行多个 agent 时，以延迟上升而非稳定性崩溃的方式降级」，反映用户已在真实多 agent 负载下作业。
- **消息可靠性缺口**：Issue #10929 指出「ZeroClaw 中没有任何机制能判断 agent 发给人类的消息是否真正送达」，出站消息甚至不携带标识符——这是对交付可信度的直接质疑。
- **依赖安全审计口径不一致**：Issue #8519 指出 `cargo audit` 与 `cargo deny` 的忽略列表范围不同导致漂移，并关联 wasmtime-wasi CVE，反映用户对供应链安全流程严谨性的关注。
- **架构满意度与不满并存**：Issue #6864 指出 crate 图存在「层依赖倒置」（`zeroclaw-channels` 依赖 `zeroclaw-runtime`），该问题今日关闭，说明社区对模块边界质量的诉求得到了回应。

## 8. 待处理积压

以下为创建时间较早、至今仍 OPEN 且今日仍有更新的重要事项，建议维护者关注：

| 议题/PR | 创建日期 | 状态 | 说明 |
|---|---|---|---|
| #6489 [OPEN] [Tracker]: Unified capability catalog and plugin migration roadmap | 2026-05-06 | 已更新，9 条评论 | 创建已逾 4 个月，涉及 `channel, gateway, integration, provider, runtime, tool` 全域，`risk:high`。 |
| #6864 相关的层依赖倒置已于今日关闭，但同一 tracker 群组仍有大量 OPEN 子项 | — | — | 建议跟进后续实现项。 |
| #7108 [OPEN] feat(ci): improve cached Rust builds and CI critical path | 2026-06-02 | 已更新，8 条评论 | 创建近 4 个月，`risk:high`、`type:ci`，直接影响全体贡献者效率。 |
| #8288 [OPEN] [Tracker]: SOP milestone: daemon-owned SOP control plane to 5/5 | 2026-06-24 | 已更新，5 条评论 | 里程碑 tracker，今日有 #11111、#11113 两条新 PR 依赖其方向。 |
| #8289 [OPEN] [Tracker]: OIDC milestone: canonical principals and inbound authentication | 2026-06-24 | 已更新，4 条评论 | 与 #11112 安全修复 PR 直接相关。 |
| #8358 [OPEN] [Tracker]: ZeroRelay native transport and v0.9.0 readiness | 2026-06-26 | 已更新，4 条评论 | v0.9.0 发布就绪 tracker，进度直接决定下次发版。 |
| #8519 [OPEN] [p1] wasmtime-wasi CVEs / audit.toml-deny.toml drift | 2026-06-30 | 已更新，7 条评论 | p1 依赖安全议题，创建近 3 个月仍无 fix PR。 |
| #8850 [OPEN] [Tracker]: Move optional channels & tools to runtime plugins | 2026-07-08 | 已更新，6 条评论 | 创建近 3 个月，与 #6489 形成能力目录/插件双 tracker。 |
| #8692 [OPEN] [Tracker]: Maintainer decision queue | 2026-07-04 | 已更新，15 条评论 | 评论数最高，本身即维护者决策负载的体现。 |

**积压风险提示**：`#7108`（CI 速度）与 `#8519`（依赖 CVE）两条创建于 6 月初的议题均已积压近 3–4 个月，且分别触及开发效率与供应链安全，建议提升处理优先级。此外，PR 侧待合并数量达 35 条，其中 #10197（XL）、#10351（XL）、#10551（XL）、#10557（XL）、#9986（XL）、#10391（XL）等多条超大规模 PR 长期处于 OPEN 且标注 `needs-maintainer-review` 或 `needs-author-action`，存在评审瓶颈风险。

---
*本日报所有事实、标题、日期、链接与标签均取自用户提供的 GitHub 数据，未做任何外部补充或推断性事实陈述。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*