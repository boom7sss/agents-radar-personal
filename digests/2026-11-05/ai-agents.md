# OpenClaw 生态日报 2026-11-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-05 18:03 UTC

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

# OpenClaw 项目日报 — 2026-11-05

## 1. 今日速览
项目今日维持高强度运转：过去 24 小时 Issues 更新 500 条（新开/活跃 241，已关闭 259），PR 更新 500 条（待合并 317，已合并/关闭 183），并发布补丁版本 v2026.11.1。合并/关闭量接近更新总量的一半，说明维护者清理积压的节奏较快，但待合并 PR 数量仍偏高。稳定性风险集中在 Gateway 事件循环阻塞、崩溃恢复后状态不一致和内存膨胀三大类，其中多个 P0/P1 缺陷长期未关闭，是当前健康度的主要拖累项。

## 2. 版本发布
**v2026.11.1**（openclaw 2026.11.1）
- **Mac 设置更安全**：配置保存失败时不再覆盖密钥；关闭 Tailscale 暴露后，Gateway 鉴权仍保持完整。（#187734、#187664，修复 #187600、#187597，致谢 @anmol0b）
- **频道回复更可靠**：Telegram、Discord 与 webhook 会话的回复可靠性提升（发布说明在提供的材料中被截断，未列出更多细节）。

**迁移注意事项**：根据 Issue #141474 的更新，历史状态恢复修复（#164445，提交 `e02ae3ecb66`）首先进入预发布版 `v2026.11.5-beta.1`，**不包含在稳定版 v2026.11.1 中**。若用户依赖该恢复逻辑，需要等待后续稳定版。提供的发布说明未列出明确的破坏性变更。

## 3. 项目进展
今日合并/关闭 183 个 PR，关闭 259 个 Issue。以下为可见的代表性进展：
- **#193134（CLOSED）**：修复更新流程在“generation read”期间因其他连接打开状态数据库而失败（报错 “SQLite WAL commit publication could not be verified”）的问题，直接影响 `openclaw update` 的成功率。
- **#193618（已合并，被 #193634 引用）**：合并了 Markdown 测试资格修复；#193634 在此基础上复用合格 Markdown 测试，减少混合源码变更时的全量测试回退。
- 治理侧：多个 “stale” 标签的长期 Issue 今日被关闭（如 #112423、#114612、#140129、#50291、#87441、#51441），表明维护者正在主动清理陈旧积压，但其中部分为 P0/影响数据丢失的条目，关闭原因需关注。

整体看，今日推进以**修复类与工程化（CI/测试）**为主，架构性新功能仍停留在开放 PR 阶段。

## 4. 社区热点
- **#160959 [OPEN][P0] Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归）** — 74 条评论，今日讨论最活跃。
  https://github.com/openclaw/openclaw/issues/160959
- **#177656 [OPEN][P1] 原生 host exec 在 2026.10.5 返回 shared-state 完整性准入错误，缺少子结果** — 28 条评论，报告“至少 28 次”稳定版失败。
  https://github.com/openclaw/openclaw/issues/177656
- **#178359 [OPEN][P1] `doctor --fix --non-interactive` 在修复准备阶段空转 15+ 分钟无输出** — 25 条评论。
  https://github.com/openclaw/openclaw/issues/178359
- **#193638 / #193647 / #193614 / #193640**（均由 @steipete 于今日提交）— 围绕插件快照启动重构、team-controller 恢复与锁准入、会话历史释放、AOT 模块加载的一组高关联 PR，显示维护者正在集中处理插件与启动子系统的架构债。

**背后诉求**：社区焦点高度集中于“Gateway 稳定性”与“运维命令可诊断性”——用户能接受功能缺失，但难以接受启动阻塞、崩溃后状态永久损坏、修复命令无反馈这类会中断生产使用的问题。

## 5. Bug 与稳定性
按严重程度排列（均为今日更新）：
| 级别 | Issue | 问题 | Fix PR |
|---|---|---|---|
| P0 | #160959 | 大型外部插件捕获导致 Gateway 事件循环阻塞数分钟（回归） | 无（no-new-fix-pr） |
| P0 | #161921 | `state-migrated-no-rollback` 后 `doctor --fix` 与 `plugins update` 互相要求，插件卡在旧版本 | 无 |
| P0 | #40001 | `write` 工具缺少追加模式，隔离 cron 会话覆写共享文件（数据丢失） | 无 |
| P0 | #70903 | 持久化 provider 冷却在计费恢复后仍封锁用户数小时 | 无 |
| P0 | #142821 | 默认开启的模型可见 transcript 脱敏污染重放上下文（安全相关） | 无（linked-pr-open） |
| P0 | #158912 | 2026.9.6 起 `MEMORY.md` 不再注入 bootstrap 上下文 | 无 |
| P1 | #177656 | host exec 完整性准入错误 | 无 |
| P1 | #178359 | doctor 修复准备阶段挂起 | 无 |
| P1 | #166017 | `mcp.sessionIdleTtlMs` 默认未生效，子进程达硬上限 256 后所有 exec/read/MCP 启动失败 | linked-pr-open |
| P1 | #154812 | Gateway 堆外 RSS 失控导致 OOM 与关闭超时 | 无 |
| P1 | #134993 | 大型 skill/agent 集群下文件系统发现忙循环占满单核 | 无 |

**结论**：高严重度问题中仅少数存在关联 PR，多数标注为 `clawsweeper:no-new-fix-pr`，修复供给不足是当前最大风险。

## 6. 功能请求与路线图信号
- **#44309 A2A 单向派发模式**：为 agent 间消息投递增加“只派发、不回复”模式，避免 ping-pong。已有 16 条评论、1 个赞，但长期 stale。
  https://github.com/openclaw/openclaw/issues/44309
- **#193550 `before_model_request` 插件钩子（PR）**：允许插件在请求发往模型 provider 前审查/修改请求体。若合并，将显著扩展插件能力边界，但带 `merge-risk: security-boundary` 标签，需安全评审。
  https://github.com/openclaw/openclaw/pull/193550
- **#180708 DeepSeek 可选 web fetch 回退（PR）**：让已有 DeepSeek 用户直接使用其 Fetch API 作为 `web_fetch` 回退。
  https://github.com/openclaw/openclaw/pull/180708
- **#186925 Llama.app 本地模型发现（PR）**：新增独立 `llama-app` 目录与推理命名空间（端口 9931）。
  https://github.com/openclaw/openclaw/pull/186925
- **#51441（已关闭）**：暴露会话实际后端模型；**#87441（已关闭）**：将内存诊断阈值接入配置——两者均被关闭，短期内不建议用户期待。

**判断**：#193550 与 #186925 最可能在近期落地；#44309 缺乏推进迹象，纳入下一版本的可能性低。

## 7. 用户反馈摘要
- **运维可观测性缺失**：`doctor --fix` 长时间无输出（#178359）、“Process ancestry could not be fully inspected” 导致 `gateway stop` 在 macOS 完全不可用（#191944），用户无法自助排障。
- **崩溃后状态不可恢复**：进程意外死亡后 agent 永久拒绝 `chat.history`/`chat.metadata`（#166634）；完整性准入错误反复出现在稳定版（#177656）。
- **数据安全担忧**：cron 会话覆写共享 memory 文件（#40001）、脱敏掩码传播进命令与回复（#142821）、`MEMORY.md` 静默不注入（#158912），均涉及用户对“记忆与文件被正确对待”的信任。
- **成本与配额**：Anthropic 长会话缓存利用率低、每轮重写全部历史（#140129）；会话限额不触发模型回退链（#118793）——直接影响使用成本。
- **正/负反馈平衡**：v2026.11.1 对密钥保护与 Tailscale 鉴权的修复方向与用户长期诉求一致；但数月前的 P0（#40001 创建于 2026-03-08、#70903 创建于 2026-04-24）仍未解决，是老用户不满的主要来源。

## 8. 待处理积压（提醒维护者关注）
- **#40001**（2026-03-08，P0，数据丢失）：`write` 工具 append 模式缺失，已存在 8 个月。
  https://github.com/openclaw/openclaw/issues/40001
- **#70903**（2026-04-24，P0）：provider 冷却持久化封锁用户，已存在 6 个月+。
  https://github.com/openclaw/openclaw/issues/70903
- **#150635**（2026-09-17，P2，session-state）：短期记忆 512 条上限导致 dreaming deep 阶段永不晋升，linked-pr-open 但未合并。
  https://github.com/openclaw/openclaw/issues/150635
- **#125314**（2026-08-17）：其对应 PR #125897 于 10-15 因不活跃被关闭（非技术原因），功能讨论陷入停滞，需要明确结论。
  https://github.com/openclaw/openclaw/issues/125314
- **PR #182692**（2026-10-24，P1，needs proof）：live stop 后下一条消息被误判为恢复墓碑，缺复现环境。
  https://github.com/openclaw/openclaw/pull/182692
- **PR #186128**（2026-10-27，draft）：codex 恢复父会话等待子会话时重复发送最终回复，提交的结算规则被作者自评为“不安全”。
  https://github.com/openclaw/openclaw/pull/186128

**健康度小结**：清理吞吐与版本节奏健康，工程化（CI/测试）投入可见；但 P0 积压老化、高严重度缺陷缺乏 fix PR、以及部分 P0 以 “stale” 名义关闭，是需要在下一周期重点回应的风险点。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据日期：2026-11-05**

---

## 1. 生态全景

当前生态已呈现明显分层：以 OpenClaw 为参照的核心项目维持高强度迭代，但普遍面临"合并吞吐跟不上输入"的结构性压力——OpenClaw 待合并 PR 317 条、Hermes Agent 单日 50 条 PR 零合并、ZeroClaw 46 待合并对 4 条处理量，评审带宽成为跨项目共性瓶颈。同时，安全与稳定性问题从"个别 Bug"上升为"主线议题"：ZeroClaw 今日以 identity-access 安全修复为主导，PicoClaw 出现社区 fork 分流信号，LobsterAI 有安全类 PR 挂 stale 近一月。技术方向上，记忆/压缩、插件生态、多 provider 兼容、消息投递可靠性四条线在多数项目同时涌现。整体看，生态正从"功能竞赛"转入"可靠性与运维体验竞赛"。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新开/活跃 · 关闭） | PR 更新（待合并 · 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（241 · 259） | 500（317 · 183） | v2026.11.1（稳定） | 清理吞吐健康，但多个 P0 长期未修、部分 P0 以 stale 关闭；高风险 |
| **NanoBot** | 低（1 活跃 · 1 关闭） | 11（2 · 9） | 无（0.4.1 发布准备中 #6570） | 工程吞吐健康（合并率约 82%），外部反馈薄弱 |
| **Hermes Agent** | 50（46 · 4） | 50（50 · 0） | 无 | 生态扩张快，但零合并 + 多项消息丢失 Bug；评审与投递双风险 |
| **PicoClaw** | 4（均为 stale 唤醒） | 11（6 · 5） | 无 | 无合并、无发布，核心修复 PR 持续 stale，出现 fork 分流；风险最高 |
| **NanoClaw** | 低（1 关闭，评论 0） | 13（6 · 7） | 无 | 修复闭环良好，安全治理常态化；外部贡献响应慢 |
| **NullClaw** | 无活动 | 无活动 | 无 | — |
| **IronClaw** | 无活动 | 无活动 | 无 | — |
| **LobsterAI** | 2（均为封禁申诉） | 17（2 · 15） | 无（依赖 dsh 0.2.2-rc.1） | 代码交付强，安全 PR #2798 滞留；用户摩擦在账号策略 |
| **TinyClaw** | 无活动 | 无活动 | 无 | — |
| **Moltis** | 0 | 1（1 · 0） | 无 | 低活跃静默期，单一 PR 待评审 |
| **CoPaw** | 14（10 · 4） | 32（20 · 12） | 无 | 高强度活跃，新开高影响 Bug 多且无 fix PR；记忆/Windows 压力集中 |
| **ZeptoClaw** | 无活动 | 无活动 | 无 | — |
| **ZeroClaw** | 27（24 · 3） | 50（46 · 4） | 无（v0.9.0 筹备中） | 合并率仅 8%，积压严重；安全评审密集，架构 RFC #10526 定稿 |

> 注：NullClaw、IronClaw、TinyClaw、ZeptoClaw 过去 24 小时无活动。

---

## 3. OpenClaw 在生态中的定位

**规模优势明显**：单日 Issues/PR 更新各 500 条、合并/关闭 183 条 PR、关闭 259 条 Issue，量级是第二梯队（Hermes 50/50、ZeroClaw 27/50、CoPaw 14/32）的 5–10 倍，且是今日唯一发布稳定版的非预发布项目（v2026.11.1，并已有 v2026.11.5-beta.1 预发布线），版本节奏领先全生态。

**技术路线差异**：OpenClaw 是生态中被明确"参照"的对象——PicoClaw 的 Gateway WebSocket PR #751 自述"参考 OpenClaw 实现"，LobsterAI 直接围绕 OpenClaw 网关做启动性能优化（#3000–#3004，将网关 ready 到握手耗时 2.3–2.7 s 的串行步骤压缩）。这确立了 OpenClaw 作为**网关/运行时事实标准**的地位，而其他项目多在通道适配、WebUI、插件市场上做差异化。

**优势与短板并存**：
- 优势：清理吞吐（合并/关闭接近更新总量一半）、工程化投入（CI/测试 PR #193618、#193634）、密钥保护与 Tailscale 鉴权修复方向获用户认可。
- 短板：修复供给不足——高严重度问题多数标注 `clawsweeper:no-new-fix-pr`；P0 #40001（数据丢失，已 8 个月）、#70903（provider 冷却，6 个月+）长期未解，#142821 涉及默认开启的 transcript 脱敏安全风险。这与 ZeroClaw 的"46 待合并 / 4 处理"、Hermes 的"50 待合并 / 0 合并"同属评审瓶颈，但 OpenClaw 因体量更大，P0 老化带来的信任成本更高。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **记忆 / 压缩的状态一致性** | OpenClaw、Hermes Agent、CoPaw | OpenClaw #158912 自 2026.9.6 起 `MEMORY.md` 不再注入 bootstrap、#142821 脱敏污染重放上下文；Hermes #149594 `/goal` 在压缩边界两边丢失、#143379 RFC（持久记录应在压缩后保留溯源，由 agent 重新读取）；CoPaw #8040 embedding reindex 静默丢整批且误报 `processed=126/126`、#8580 memory tag 索引从不重建 |
| **静默失败与可观测性** | OpenClaw、Hermes、CoPaw、ZeroClaw、PicoClaw | OpenClaw #178359 `doctor --fix` 空转 15+ 分钟无输出、#191944 `gateway stop` 在 macOS 不可用；Hermes #149248 后台任务不主动回归、#149264 丢消息仍返回 `delivery_id`；CoPaw #8276 失败仅显示 "unexpected error"；ZeroClaw #12228 `cron update --agent` 报告成功但不生效、#9770 cron update 静默丢弃 6 个声明式字段；PicoClaw #3453 WebUI 误报"需要重启" |
| **消息投递可靠性（通道适配）** | Hermes、NanoClaw、PicoClaw、OpenClaw、ZeroClaw | Hermes #63485 Telegram 顶层 rich_message 静默忽略（自 2026-07-13，👍4，评论 10）；NanoClaw #4029 含下划线 URL 的 Telegram 回复被丢弃；PicoClaw #3452 Discord 握手死锁导致通道永久失聪；OpenClaw v2026.11.1 提升 Telegram/Discord/webhook 回复可靠性；ZeroClaw PR #12230 扩展 Zulip 渠道 |
| **插件生态与插件边界** | 全生态几乎全部项目 | Hermes 单日集中涌入 10+ 插件目录 PR（Plugin Hackathon 冲刺，含 #149313 hermes-ros、#149277 myeline、#149288 prompt-enhancer v2.3.0）；OpenClaw #193550 `before_model_request` 钩子（标签 `merge-risk: security-boundary`）、#160959 P0 大型插件捕获阻塞 Gateway；CoPaw #8595 插件安装失败、#8590 插件设置导航丢失；NanoClaw #4194 插件重打戳防篡改、#6571（NanoBot）同名技能跨仓库来源混淆；PicoClaw #751 网关接口 |
| **多 provider / 模型兼容** | OpenClaw、CoPaw、ZeroClaw、PicoClaw、Moltis | OpenClaw #180708 DeepSeek web fetch 回退、#186925 Llama.app 本地模型发现（端口 9931）、#166017 MCP 子进程硬上限 256；CoPaw #6659 模型 fallback+冷却、#8236 Ollama num_ctx、#8309 Ollama 模型发现、#7738 过滤未识别 kwargs；ZeroClaw PR #9809 多模型 registry（size:XL，开放近三月）、#12059 thinking 等级、#11584 Opper provider；PicoClaw #3447 thinking-always 模型参数差异、#3454 模型 ID 大小写敏感；Moltis #1321 无 Key 搜索提供商（Keenable） |
| **无密钥 / 低成本接入** | Moltis、OpenClaw、LobsterAI、ZeroClaw | Moltis #1321 Keenable 免 API key；OpenClaw #180708；LobsterAI #2739 免 Key 的 Parallel 搜索；ZeroClaw #11703 延迟工具激活导致 prompt cache 失效、#12194 未知模型静默回退 32k 预算——成本效率成为自托管用户显性诉求 |
| **Windows / 非标环境适配** | OpenClaw、CoPaw、NanoBot、NanoClaw、PicoClaw、LobsterAI、Hermes | CoPaw #8585 `\\?\` 扩展路径破坏 SQLite URI、#8580 Windows 10 tag 索引失效、PR #8234 GBK/CP936 解码；NanoBot #6111 Windows 工作区选择器、#6564/#6566 Windows CI 时序；NanoClaw #4200 WSL sudo 提示；OpenClaw #191944 macOS 进程树；PicoClaw #3451 Android API 19；Hermes #142521 Windows 相对时间标签冻结；LobsterAI #3002 Windows 注册表原生读取 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用网关 + 插件平台 + 运维命令（doctor/update/plugins） | 生产级自托管用户 | 单一 Gateway 事件循环、SQLite 状态库、AOT 模块加载；正在重构插件快照启动与锁准入（#193638/#193647/#193614/#193640） |
| **NanoBot** | WebUI 可视化（上下文文件图 #6562、Markdown 排版 #6568、快捷键 #6567）+ 技能市场 | 桌面端交互优先用户 | 独立 WebUI 与 CLI 双前端；inbound 循环与空闲扫描解耦（#6565）；0.4.1 准备中 |
| **Hermes Agent** | 统一网关 + 插件目录 + 子代理路由 | 插件开发者、多 Profile/Bot 用户 | 2026-10-14 起所有本地会话并入单一网关进程（#106742），当前在消化状态一致性尾部风险（#143547），并可选 SQLite 会话存储（#149558） |
| **PicoClaw** | 网关 WebSocket + 多智能体协作（WIP #423）+ 重试退避（#594） | 边缘/低资源设备、Android TV/盒子 | 参考 OpenClaw 的轻量实现；多 PR 长周期（2–3 月创建）后集中关闭 |
| **NanoClaw** | 安装体验 + 容器安全 + 多通道（Mattermost/Telegram） | 非标准环境自托管（WSL、无 systemd） | 插件容器隔离、镜像 grype/trivy 扫描治理、Dependabot 自动化（#3978） |
| **LobsterAI** | 桌面伴侣 / cowork + OpenClaw 网关集成 + DSH 运行时 | 中文桌面用户（词典捆绑转化） | 在 OpenClaw 之上做启动性能层（注册表原生读取、跳过 dreaming 启动清理）；登录后延续 explain/summarize/read aloud（#3005） |
| **Moltis** | `web_search` 工具化、可选搜索提供商 | 隐私/易用性优先用户 | opt-in 默认关闭的 provider 增量模型，低耦合 |
| **CoPaw** | 记忆子系统（ReMe） + Creator + Console + 插件 | 重度会话用户、中文/Windows 用户 | `BaseMemoryManager`/`MemoryMiddleware` 抽象、可选 OpenViking 长期记忆后端（#7252）、模型 fallback 链 |
| **ZeroClaw** | 安全策略（identity-access / SOP）+ 运行时事件历史 + provider 注册表 | 强安全合规要求的自托管用户 | append-only 会话事件历史与确定性状态重放（RFC #10526 已定稿）；`[providers]` 统一注册表（#9809） |

**概括**：OpenClaw 与 Hermes 走"统一网关"路线并承担由此带来的状态一致性成本；PicoClaw、NanoClaw、Moltis 走轻量单点突破；CoPaw、ZeroClaw 在记忆和安全两个纵深方向建立深度；LobsterAI 则是明确的"OpenClaw 生态外围优化层"。

---

## 6. 社区热度与成熟度

**第一层：高强度迭代（合并/更新量级 500/50）**
- **OpenClaw**：工程化成熟，处于"质量巩固为主 + 架构性新功能仍在 PR 阶段"的混合态。
- **Hermes Agent**：生态扩张最快（插件 Hackathon），但"50 PR / 0 合并"说明消化能力滞后于输入，属快速迭代前期。

**第二层：活跃修复与打磨（17–32 条 PR）**
- **CoPaw**：32 条 PR、12 条落地，积压清理有实质进展，但新开 Bug 密度高且无 fix PR，处于迭代与稳定性拉扯阶段。
- **LobsterAI**：15 条合并、几乎全为修复类，属质量巩固阶段；社区讨论面窄（仅 2 条封禁申诉）。
- **ZeroClaw**：安全评审密集、架构 RFC 定稿，处于 v0.9.0 发布前的"安全巩固期"，但 8% 合并率是明确瓶颈。
- **NanoBot**：合并率约 82%，处于质量巩固 + 发版冲刺。
- **NanoClaw**：修复闭环良好、安全治理常态化，成熟度较高但外部贡献参与弱。

**第三层：低活跃或静默**
- **Moltis**：0 Issue 更新、单 PR 待审，静默期。
- **PicoClaw**：无合并无发布、核心修复持续 stale，并出现社区 fork 分流，是唯一被指"看似无人维护"的项目，成熟度存疑。
- **NullClaw / IronClaw / TinyClaw / ZeptoClaw**：24 小时无活动。

**结论**：处于快速迭代阶段的是 Hermes（生态扩张）与 CoPaw（功能与修复并行）；处于质量巩固阶段的是 OpenClaw、NanoBot、NanoClaw、LobsterAI、ZeroClaw；PicoClaw 处于维护可持续性风险区。

---

## 7. 值得关注的趋势信号

1. **评审吞吐已成为生态级瓶颈，而非个别项目问题。** OpenClaw 317 待合并、Hermes 50 零合并、ZeroClaw 46 对 4、PicoClaw 2–3 月 PR 到 11 月才关闭——单日跨项目待合并 PR 总数已远超处理量。对开发者的参考：**提交小而可独立评审的 PR 比大而全的重构更易存活**；ZeroClaw 的 `needs-author-action`、NanoClaw 的 `triage/needs-author` 标签在近一个月后导致 PR 关闭，提示外部贡献者需主动响应。

2. **"静默失败"是用户容忍度最低的缺陷类型。** 跨 OpenClaw、Hermes、CoPaw、ZeroClaw、PicoClaw 五项目反复出现：日志报成功但实际失败、失败只暴露泛化错误、CLI 假成功、UI 误报状态。对开发者的参考：**可观测性与错误信息质量应作为一级验收标准**，而非事后补丁。

3. **记忆与压缩的"信息不丢失"正在成为核心架构命题。** Hermes 的 RFC #143379（持久记录应在压缩后保留溯源，由 agent 重新读取而非让用户重述）与 OpenClaw #142821、CoPaw #8040 共同指向同一问题：压缩/检索链路缺乏端到端可验证性。ZeroClaw 的 RFC #10526（append-only 事件历史 + 确定性重放）是最具野心的解法。对开发者的参考：**为记忆设计可重放的事件源，比优化单次检索更重要**。

4. **插件边界的安全评审正在成为新门槛。** OpenClaw #193550 带 `merge-risk: security-boundary` 标签、ZeroClaw SOP 通配符工具选择器绕过权限（#11123）、NanoClaw #4194 防止重打戳期间篡改写入目标、Hermes 文档推荐接口被判为私有（#148311）——插件生态扩张的同时，权限与钩子边界成为主要风险面。

5. **成本敏感成为自托管用户的显性诉求。** ZeroClaw #11703（prompt cache 失效）、#12194（静默回退 32k 预算）、OpenClaw #140129（Anthropic 每轮重写全部历史）、Moltis/LobsterAI 的免 Key 搜索，共同指向：**用户在意的不只是能力，还有每轮的 token 账**。

6. **Windows 与非标准环境是被低估的体验洼地。** 涉及至少 7 个项目（路径规范化、编码、CI 时序、sudo 交互、注册表读取），CoPaw 的 `\\?\` 路径破坏 SQLite URI 与 GBK 丢弃（PR #8234）是典型代表。对开发者的参考：**跨平台路径与编码应在架构层统一处理，而非逐 Bug 修补**。

7. **治理与账户策略问题开始外溢到公开 Issue。** LobsterAI 两条封禁申诉（#2940 已 11 天、#2998）涉及风控与解封流程，PicoClaw #3417 的 fork 公告则是对维护承诺的直接质疑——**项目的"非代码治理"能力（申诉通道、维护者响应承诺）正成为健康度的一部分**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-05

## 1. 今日速览

过去 24 小时 NanoBot 处于高强度收尾状态：11 条 PR 更新中 9 条已合并或关闭，同时新开 1 条发布准备 PR（#6570，准备 0.4.1），表明 0.4.x 维护周期正走向发布节点。今日工作重心集中在 WebUI 体验（上下文文件图、排版、快捷键提示）与 CI 稳定性（Windows 超时测试修复），以及一条针对 DeepSeek 生成中断的 provider 修复仍待合并。Issues 侧活跃度较低，仅 1 条新活跃、1 条陈旧的 Bug 类问题被关闭。整体活跃度高、社区讨论热度偏低，项目健康度表现为"工程推进强、外部反馈弱"。

## 2. 版本发布

无新版本发布。但值得关注：PR #6570 已开启，标题为 `chore(release): prepare 0.4.1`，说明 0.4.1 进入发布准备阶段（详见第 6 节）。

## 3. 项目进展

今日合并/关闭的 PR 推进了三个方向：

**WebUI 与上下文可视化**
- #6562 `feat(webui): inspect file context in a live graph sidebar`（priority: p2）— 在对话旁新增持久化文件图侧栏，可查看自最近一次压缩以来使用的文件、在共享预览侧栏中打开，并回放图的增长过程。这是今日功能性最强的合并项。
- #6569 `fix(webui): close context graph when switching sessions` — 修复切换会话时上下文图残留上一条会话状态、导致图塌陷只剩用量条的问题，紧随 #6562 之后完成闭环。
- #6568 `style(webui): refine Markdown reading typography` — 重做聊天 Markdown 排版（本地打包 Open Sans 等），明确参照 Typora 但不复制其 CSS。
- #6567 `feat(webui): surface composer shortcut hints` — 在输入框展示命令、@提及与技能的快捷键提示，覆盖 10 种受支持场景。

**技能安装来源区分**
- #6571 `fix(skills): distinguish marketplace installation sources`（已关闭）— 修复同名技能来自不同仓库时均显示为已安装、且对不同来源返回 `already_installed` 而不实际安装的问题，开始记录新市场安装的来源。

**架构与稳定性**
- #6523 `refactor(commands): own trusted Shell completion outside agent loop` — 区分两类语义：模型 shell 工具返回有界观测并保留长命令供后续检查；受信任用户的 `!command` 等待完整字面结果。
- #6565 `fix(agent): keep idle scans off the inbound consumer` — 修复 inbound 循环等待空闲会话扫描、导致活跃回合的 `/stop` 无法被及时读取的问题。
- #6564、#6566 — 稳定 Windows CI 上对时序敏感的测试（cron 重调度、subagent 路由的 2 秒超时）。

**整体评估**：今日合并以 p2 级 WebUI 与测试稳定性为主，属于产品打磨与工程健壮性推进，无破坏性变更；0.4.1 的发布范围已由 #6570 汇总，项目向发版节点实质前进了一步。

## 4. 社区热点

今日整体讨论量偏低，无高热度条目，按评论数排序：

- **Issue #6111**（OPEN，2 条评论）— Workspace picker：Windows 上的驱动器列表、文件夹创建与常用位置快捷入口。创建于 2026-10-09，今日仍有更新，是当前最活跃的 Issue。链接：HKUDS/nanobot Issue #6111
- **Issue #6526**（CLOSED，2 条评论）— 关于 4.0 更新中 "no earlier messages" 提示阻断原生滚动及排版样式异常。链接：HKUDS/nanobot Issue #6526

**诉求分析**：两条讨论分别指向桌面端平台适配（Windows 文件选择体验）与 4.0 改版后的可读性/可用性回退。值得注意的是 #6526 已关闭，但今日同时合并的 #6568（Markdown 排版重做）与 #6567（快捷键提示）方向与之呼应，说明维护者已在用 PR 回应这类体验反馈，而非停留在 Issue 讨论层面。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 中 | **DeepSeek 生成中断被误判为成功**（PR #6533，OPEN）— DeepSeek Chat Completions 可能以 `insufficient_system_resource` 或 `aborted` 结束，此前被当作正常完成，导致部分回答被保存为完整回复。已提出 fix PR，**尚未合并**。链接：HKUDS/nanobot PR #6533 | 有 fix PR，待合并 |
| 中 | **`/stop` 响应被空闲扫描阻塞**（PR #6565）— inbound 循环等待空闲会话扫描，扫描等存储时活跃回合无法及时读到 `/stop`。**已有 fix 并关闭**。链接：HKUDS/nanobot PR #6565 | 已修复 |
| 中低 | **切换会话后上下文图塌陷**（PR #6569）— 对齐观察器测量已脱离的旧会话 composer，仅剩用量条可见。**已修复**。链接：HKUDS/nanobot PR #6569 | 已修复 |
| 低 | **同名技能跨仓库来源混淆**（PR #6571）— 错误返回 `already_installed`。**已修复**。链接：HKUDS/nanobot PR #6571 | 已修复 |
| 体验类 | **"no earlier messages" 阻断滚动 + 4.0 排版异常**（Issue #6526）— 用户明确表达失望。**Issue 已关闭**；相关排版改进见 #6568。链接：HKUDS/nanobot Issue #6526 | 已关闭 / 部分由 #6568 响应 |
| 测试稳定性 | **Windows CI 超时**（PR #6564、#6566）— cron 重调度测试共享 2 秒超时、subagent 路由测试等待检查点写入超时。**均已修复**。链接：HKUDS/nanobot PR #6564 / PR #6566 | 已修复 |

唯一未闭环的实质缺陷是 #6533（数据正确性类，会保存不完整回答），建议优先合并。

## 6. 功能请求与路线图信号

**PR #6570 `chore(release): prepare 0.4.1`（OPEN）** 是判断下一版本范围的最直接信号。其描述列出了 0.4.1 的维护范围：

- 已合并的安全与稳定性修复
- **file-context graph**（即 #6562 + #6569）
- **切换话题时关闭图**（graph closure on topic changes）
- **来源感知的技能安装**（来自 #6571）
- 当前基线为 main `112e...`（描述截断）
  链接：HKUDS/nanobot PR #6570

由此可判断：WebUI 上下文图、技能来源区分、稳定性修复大概率进入 0.4.1；**DeepSeek 中断上报（#6533）尚未合并，能否赶上 0.4.1 取决于后续合并节奏**，若未纳入则应作为 0.4.2 候选项。

**Issue #6111 Windows Workspace picker** 属于平台适配类增强，尚无对应 PR，短期内不太可能进入 0.4.1，更适合作为后续路线图条目。链接：HKUDS/nanobot Issue #6111

## 7. 用户反馈摘要

- **对 4.0 改版不满（Issue #6526）**：用户直言"对新的 4.0 更新非常失望"，具体痛点是 "no early messages" 提示阻断整个原生滚动，以及字号等样式"非常奇怪"。这是今日唯一带有明确负面情绪的反馈，指向大版本改版后的可用性回退，而非功能缺失。该 Issue 被打上 `stale` 标签并关闭，但同日的排版重做 PR #6568 表明改进仍在推进，建议后续发布说明中明确回应此类反馈。
- **平台细节需求（Issue #6111）**：Windows 用户在文件选择环节缺少驱动器列表、新建文件夹与常用位置快捷入口，说明桌面端文件交互仍偏向"能用"而非"顺手"，Windows 用户是当前体验洼地。
- **运维侧反馈（PR #6564/#6565/#6566）**：多条 PR 描述均以 Windows CI 暴露的问题为起点，反映出项目在 Windows 环境下存在真实的时序与阻塞类隐患，且已由维护者主动收敛。今日 Issues 评论总量仅 4 条，样本有限，以上为可提炼的全部用户声音。

## 8. 待处理积压

- **PR #6533 `fix(providers): report DeepSeek generation interruptions`** — 创建于 2026-10-30，截至今日已 6 天仍为 OPEN。该 PR 修复的是"部分回答被当作完整回复保存"的数据正确性问题，且与 0.4.1 发布窗口重叠，建议维护者明确评估是否纳入本次发布。链接：HKUDS/nanobot PR #6533
- **Issue #6111 Windows Workspace picker** — 创建于 2026-10-09，已近一个月，今日仍有更新与 2 条评论，但尚无关联 PR 或里程碑标注，建议补充标签或路线图归属，避免长期悬置。链接：HKUDS/nanobot Issue #6111
- **PR #6570 `prepare 0.4.1`** — 今日新开，是当前发布链路的关键节点，需关注其合并与后续 tag 发布，避免出现"发布 PR 已合但版本未出"的空窗。链接：HKUDS/nanobot PR #6570

---

**健康度小结**：今日 9 条 PR 闭环、2 条待合并，合并率约 82%，工程侧吞吐健康；CI 时序问题的集中修复说明基础设施在主动加固。风险点有二：一是 #6533 这一数据正确性修复在发布窗口前仍未合并；二是用户侧讨论量极低（Issues 评论合计 4 条），外部反馈信号薄弱，4.0 改版的接受度缺乏足够样本验证。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-11-05）

## 1. 今日速览

今日项目活跃度**高**，但结构性偏“输入多于消化”：过去24小时 Issues 更新 50 条（新开/活跃 46，关闭 4），PR 更新 50 条且**全部为待合并（0 合并/关闭）**，无新版本发布。讨论集中在 10 月中旬合入的统一网关（#106742）后续问题、会话/压缩状态一致性，以及插件目录（plugin-catalog）批量提交。值得注意的是插件生态 PR 今日集中涌入（多个 Plugin Hackathon 参赛条目），说明生态扩张正在加速。稳定性方面，可用性类 Bug（消息投递丢失、后台任务不回归、网关 RPC 超时）占据主导，值得维护者优先排序。

## 2. 版本发布

无新版本发布。

Issue 中提及的既有版本线索（供参考，非今日发布）：Desktop 源 **0.22.2**（#142521）、Hermes **v0.22.5**（插件验证基线，#149269/#149267）。

## 3. 项目进展

今日**无 PR 合并或关闭**，无功能推进落地。当前处于“积压集中”状态：50 条待合并 PR 中含大量插件目录条目（见第 4 节），需维护者集中评审。

已关闭的 Issues（4 条）中可识别的 3 条：

- **#140667** [CLOSED] Desktop `session.control.read` 30s 超时，单个慢速只读 handler（`session.context_breakdown`）阻塞同 WS 上所有排队 RPC。属性能/可用性问题关闭。链接: #140667
- **#139548** [CLOSED] Desktop 远程网关下机器人 Profile 的 Description 为空（roster 丢弃描述字段）。链接: #139548
- **#148863** [CLOSED] 功能请求：技能归档时发出生命周期事件，供 memory provider / 插件感知。链接: #148863
- **#148311** [CLOSED] 功能请求：为插件提供公开的会话身份接口（`get_session_env` 被校验为私有）。链接: #148311

> 说明：数据未提供关闭原因或对应 fix PR，无法确认是否以修复形式关闭。

## 4. 社区热点

- **#143547**（OPEN，评论 **49**，👍1）：统一网关（#106742）在 main 上的合入后问题汇总，涉及 gateway/cron/plugins/telegram/discord/auth/config/desktop/sessions/profiles/compression 等十余个组件，并延续 #134889。这是当前**最高优先级的总线级讨论**，反映 10 月 14 日“所有本地会话并入单一网关进程”这一架构变更的尾部风险仍在释放。链接: #143547
- **#143379**（OPEN，评论 **35**）：RFC——文档链基底网络（读取、治理、压缩），主张持久记录应在会话压缩后保留溯源，并由 agent 重新读取而非让用户重述。属设计层讨论，指向“记忆/压缩”这一核心命题。链接: #143379
- **#63485**（OPEN，评论 10，👍**4**，为所列最高点赞）：Telegram Bot API 10.1 顶层 rich_message 入站被静默忽略（sweeper:risk-message-delivery）。自 2026-07-13 创建，**长期存在**。链接: #63485
- **#139347**（OPEN，评论 7）：有界托管会话记录在驱逐源 `message.user` 后仍保留被引用的成员回复与 `turn.settled` 事件，触发 `DiscussionValidationError`。链接: #139347

**诉求分析**：讨论热度明显向“网关统一后的状态一致性”和“压缩/记忆不丢信息”两条主线聚拢；社区对**消息静默丢失**类问题容忍度低（Telegram 忽略消息获最高点赞即为信号）。

## 5. Bug 与稳定性

按影响面排序（严重 → 较低）：

**高（数据/消息丢失、不可用）**
- **#149264**（OPEN，P 未标注）：Bot Chat DM 投递在目标 agent 会话持有 writer lock 时硬失败并**丢弃消息**，且仍返回 `delivery_id`；消息事后数小时亦不送达。链接: #149264
- **#149248**（OPEN）：后台长任务**反复不主动回归**，需用户追问；确认存在 live-subscriber handback 丢失。为用户体验层面的严重痛点。链接: #149248
- **#149594**（OPEN）：`/goal` 在压缩边界丢失——`migrate_goal_to_session` 在子会话写入未持久化时仍归档父会话 goal，导致目标**两边都不存在**。链接: #149594
- **#63485**（OPEN，P3，👍4）：Telegram 顶层 rich_message 入站静默忽略（消息投递风险标签）。链接: #63485

**中（崩溃/卡死/竞态）**
- **#149126**（OPEN，P2）：托管 worker 在解释器退出时 `Fatal Python error: _enter_buffered_busy`（stdin BufferedReader / daemon control-reader）。链接: #149126
- **#148958**（OPEN，P2）：Kanban 中 gateway-owner 停滞导致 worker exit 1 被计为普通崩溃，连续两次即**阻塞卡片**。链接: #148958
- **#149512**（OPEN）：从 Kanban worker 触发的 cron run 可通过显式 `task_id` 绕过 run-ownership CAS，**改写触发 worker 的卡片**。链接: #149512
- **#141984**（OPEN，P2）：`tui_gateway.server` 在 import 时把进程 stdout 换成 stderr，而 gateway/agent/CLI 均 import 它。链接: #141984
- **#143817**（OPEN，P2）：后台 review 可在**未吸收任何内容**的情况下归档活跃技能，consolidation guard 仅校验名称。链接: #143817
- **#139347**（OPEN，P2）：会话记录驱逐导致 `DiscussionValidationError`（见上）。链接: #139347

**低（UI/渲染）**
- **#142521**（OPEN，P2）：Desktop BOTS 相对时间标签冻结（React Compiler 记忆化 wall-clock 文本）。链接: #142521
- **#147923**（OPEN，P2）：bot-chat cron 投递后的 assistant 消息需下一轮才渲染。链接: #147923
- **#144570**（OPEN，P2）：review lane 强制加载 `sdlc-review` 技能，profile 技能根缺失时 pre-model 崩溃且无 bundle fallback。链接: #144570

**fix PR 情况**：所列 Bug 中**未发现明确标注为对应修复的 fix PR**；PR 侧与本轮 Bug 相关的疑似条目为 **#149630**（`/undo` 指向 `/rollback` 以恢复文件，属改进而非上述 Bug 修复）。多项 Bug 带 `sweeper:risk-*` 标签（message-delivery / session-state / compatibility / platform-windows），建议按标签批量排期。

## 6. 功能请求与路线图信号

**可能纳入下一版本（已有 PR 或接口已定型）**
- **会话存储接口化**：#149558 提出将对话存储收敛为单一接口、SQLite 为后端（现状为一个大 `SessionDB` 类且多处绕过其方法）。属架构级提案，需决策。链接: #149558
- **技能生命周期事件**：#148863（已关闭）与 #143817 共同指向技能归档可观测性。链接: #148863 / #143817
- **插件公开会话身份 seam**：#148311（已关闭）——第三方 platform 插件与 `pre_tool_call` 策略钩子需获知当前聊天/用户。链接: #148311
- **`/undo` 与文件回滚联动**：#149630（OPEN，ci-reviewed）让 `/undo` 指向恢复该轮文件快照的 `/rollback`。链接: #149630
- **网关显示设置按聊天类型作用域**：#130573（OPEN，P3，needs-decision）。链接: #130573

**插件生态（今日 PR 主体）**
- 目录新增/更新：#149334（cost-sentinel）、#149329（verifyum）、#149313（hermes-ros，ROS/ROS2 机器人+安全联锁）、#149277（myeline，远程 MCP 记忆）、#149269（constraint-vault）、#149267（escalation-governor）、#149245（hermes-windows-updates）、#149491（delegation-scout，学习的子代理路由）、#149244（lineage，溯源凭据与图）、#149288（prompt-enhancer 升至 v2.3.0）。
- 多个条目自述为 **Plugin Hackathon 参赛作品**，说明社区插件提交处于集中冲刺期。

## 7. 用户反馈摘要

- **“委托不回归”是最大情绪点**：#149248 用户直接陈述“几乎每次让 Hermes 处理长任务并要求回告，它都没回来，只能自己去追”，认为委托工作因此“令人疲惫”。（真实使用场景：长时后台任务 + 异步回告）
- **多 Profile / Bot 模式用户受投递问题困扰**：#149264 反映 `message_agent` DM 在对方会话持锁时直接丢消息；#147923 反映 cron 投递后的回复不即时可见。
- **远程网关用户**：#139548 指出远程网关下机器人 Profile 描述恒为空（尽管后端 `/api/profiles` 有返回），已关闭。
- **平台插件开发者**：#148311 反映官方文档推荐 `get_session_env`，但校验却将其判为私有——**文档与校验不一致**是第三方开发者的直接摩擦点。
- **Windows 桌面用户**：#142521 报告 BOTS 列表可连续数小时显示“now”，时间信息不可信。
- **正面信号**：插件验证体验被多次引用为“在 Hermes v0.22.5 上通过 `hermes plugins validate`”，说明插件校验工具链已可用且被社区作为质量门槛使用。

## 8. 待处理积压

- **#63485**（2026-07-13 创建，≈115 天，👍4，评论 10）：Telegram rich_message 静默忽略，**最长寿且高赞**的未修 Bug。链接: #63485
- **#130573**（2026-10-01 创建，`needs-decision`，P3）：网关按聊天类型作用域显示设置，长期等待决策。链接: #130573
- **#129532**（2026-09-30 创建，P2，os/windows）：Desktop 保留 `BrowserWindow` receiver 以修复 Electron 焦点检查。链接: #129532
- **#143547**（评论 49，跨十余组件）：统一网关合入后问题总账，需明确 owner 与收敛节奏。链接: #143547
- **#143379**（评论 35）：文档链基底 RFC，尚无对应实现 PR，建议给出采纳/搁置结论以释放讨论带宽。链接: #143379
- **PR 侧**：50 条 PR **零合并**，其中插件目录条目占比高，存在评审瓶颈风险，建议批量处理以维持贡献者士气。

---

**健康度小结**：活跃度高、生态扩张快；但“50 PR 待合并 / 0 合并”与多项消息丢失类 Bug 并存，提示**评审吞吐**与**投递可靠性**是当前两项关键健康指标。建议优先处理 `sweeper:risk-message-delivery` 与 `sweeper:risk-session-state` 标签集合，并对插件目录 PR 采取批处理合并策略。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-05）

## 1. 今日速览

项目今日无新版本发布，活跃度中等偏低但结构值得关注：4 条 Issue 全部为沉寂后重新活跃（其中 3 条被标记 `stale`），11 条 PR 中 6 条待合并、5 条关闭。待合并 PR 里 4 条为 Dependabot 推送的依赖升级，集中在同一天（11-05），属于常规维护噪音。关闭的 5 条 PR 均为 2026 年 2–3 月创建的长周期 PR，今日集中关闭，反映出一次 backlog 清理动作。最需注意的是 Issue #3417：社区成员宣布维护活跃 fork，并指出主仓库“目前看似无人维护”——这是项目健康度的核心风险信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并；关闭的 5 条 PR 摘要均未说明关闭原因，无法确认是并入主线还是放弃。按内容看：

- **#751 Gateway WebSocket 接口**（enhancement, domain: agent）：新增 `--help/-h`、默认启用 WebSocket（含 `/health`、`/ready`）、新增 `--no-websocket` 健康检查模式，并保留 `--enable-websocket` 作为兼容空操作。参考 OpenClaw 实现。链接：sipeed/picoclaw PR #751
- **#423 多智能体协作框架（WIP）**：共享上下文池、agent handoff、发现工具，构建于已合并的 #213、#131 之上。链接：sipeed/picoclaw PR #423
- **#594 LLM 调用重试与退避**：为每次尝试设置递增超时与退避、识别超时/HTTP 5xx 可重试错误、面向用户的重试提示，含共享 helper 与测试。链接：sipeed/picoclaw PR #594
- **#957 配置修复**：修复 issue #680，用户省略 `api_base` 时不再错误继承默认值（此前的表现是 401 错误）。链接：sipeed/picoclaw PR #957
- **#1182 文档**：将 `AGENTS.md` 调整为原则优先的轻量指引。链接：sipeed/picoclaw PR #1182

整体判断：这些 PR 涵盖网关、多智能体、可靠性、配置正确性四个方向，若确为并入主线，则进展可观；但 2–3 月创建、11 月才关闭的节奏，也说明评审周期偏长。

## 4. 社区热点

- **[#3417] Active Fork & Continued Maintenance（4 条评论，今日更新）**：作者 afjcjsbx 以“主仓库无人维护 + 社区需求仍在”为由建立并维护 fork。这是今日讨论最集中的议题，诉求直指主仓库维护者的响应速度与项目可持续性。链接：sipeed/picoclaw Issue #3417
- **#3453 / #3454（各 1 条评论）**：均由 SecInsight 提交，聚焦 WebUI 与模型配置的一致性问题（详见第 5 节）。

## 5. Bug 与稳定性

按影响排序（均无对应 fix PR）：

1. **#3453 WebUI 误报“需要重启”**（中高）：在 `gateway.hot_reload: true` 下，默认模型修改约 2 秒内已被网关应用（日志可证），但 WebUI 仍弹出“restart required”，且 `gateway_restart_re…` 状态不一致。影响用户对配置是否生效的判断。链接：sipeed/picoclaw Issue #3453
2. **#3454 模型标识符校验建议小写化未知 provider 前缀**（中）：对于非 picoclaw provider、但属于上游命名空间且区分大小写的模型 ID（如 `ACME/gpt-4o-mini`），系统给出小写化警告，可能导致上游调用失败。链接：sipeed/picoclaw Issue #3454
3. **PR #3452 Discord 网关握手死锁**（高，已有 fix PR，待合并）：Discord 通道可能永久失聪——bot 显示“已连接”，但收发静默、无心跳、无日志；根因是固定版本的 `discordgo` fork 提交存在死锁。链接：sipeed/picoclaw PR #3452
4. **PR #3447 Anthropic thinking-always 模型 400 错误**（中，已有 fix PR，待合并）：使用 token 凭据调用 `claude-haiku-5-5` 等 thinking-always 模型时报 `"temperature" is deprecated for this model`。链接：sipeed/picoclaw PR #3447

## 6. 功能请求与路线图信号

- **Android API 19（x86_32/x86_64）支持**（#3451）：面向老式 TV 盒子、平板与模拟器等边缘设备，扩展 PicoClaw 在低版本 Android 上的可运行范围。当前无对应 PR，属早期需求。链接：sipeed/picoclaw Issue #3451
- **多智能体协作**（PR #423，WIP）：已有框架级 PR 但今日关闭，是否纳入下一版本取决于主仓库维护状态。
- 结合待合并的 Discord 与 Anthropic 修复 PR 判断，下一版本更可能聚焦通道稳定性与模型兼容性，而非新特性。

## 7. 用户反馈摘要

- **维护可持续性是最大不满**：#3417 明确指出仓库“目前看似无人维护”，同时强调社区兴趣与需求仍然显著——这是对项目信心的直接冲击。
- **配置与状态反馈不透明**：#3453 中用户已从网关日志确认热加载生效，但 UI 仍报需重启，说明界面状态与后端真实状态脱节。
- **兼容性痛点集中在边缘场景**：上游模型 ID 大小写敏感（#3454）、thinking-always 模型参数差异（PR #3447）、老旧 Android 设备（#3451），说明用户群覆盖较广且存在真实生产环境依赖。

## 8. 待处理积压

- **#3417 活跃 Fork 公告**（OPEN，创建 10-06，今日仍在更新，4 条评论）：涉及项目归属与维护承诺，建议维护者正式回应。
- **#3451 / #3453 / #3454**（均 OPEN 并带 `stale` 标记）：10 月下旬创建、今日刚被唤醒，若无回应将再次沉寂。
- **PR #3447 Anthropic 兼容修复**（OPEN，`stale`，创建 10-24）：针对明确 400 错误的修复已就绪但尚未合并。
- **PR #3452 Discord 死锁修复**（OPEN，`stale`，创建 10-28）：高影响通道故障的修复长期挂起，优先级建议提升。
- **#3460 / #3459 / #3458 / #3457 四条 Dependabot PR**（今日新开）：其中 `modernc.org/sqlite` 从 1.53.0 跨至 1.61.1，跨度较大，建议优先审阅。

**健康度小结**：今日数据呈现“输入多、输出少”——Issue 全部为唤醒而非新报，PR 关闭多为长周期清理，无合并、无发布。依赖维护仍在自动运转，但核心修复 PR 持续 `stale`、社区出现 fork 分流信号，维护响应速度是当前项目健康度的主要短板。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-05

## 1. 今日速览

项目今日以维护性动作为主：13 条 PR 更新中 7 条合并/关闭、6 条待合并，无新版本发布。当日关闭的 PR 集中在安装体验、安全加固与通道适配修复（sudo 密码提示、模板写入安全、Mattermost 重试、Telegram 链接渲染），并关闭了自 2026-04-26 起悬置的安装卡住 Bug #2025。活跃度评估为**中等偏高**：单日 PR 流转量可观，但全部来自核心成员/机器人，社区外部贡献与讨论偏冷（今日唯一 Issue 评论数为 0）。新开的 3 条 agent 镜像刷新 PR 与安全咨询清理 PR 共同指向持续的镜像安全治理。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 推进了三个方向：

- **安装体验修复**：PR #4200 让 Linux/WSL 在进度动画出现前提前询问 sudo 密码，并为 WSL 给出正确的 docker 组提示——直接对应今日关闭的 Issue #2025（安装卡在 "Installing the basics…"）。链接: [PR #4200](https://github.com/nanocoai/nanoclaw/pull/4200)、[Issue #2025](https://github.com/nanocoai/nanoclaw/issues/2025)
- **安全加固**：PR #4194 修复插件原地重打戳时对 group 目录与 per-group skills overlay 的写入，避免智能体容器在重打戳期间篡改写入目标。链接: [PR #4194](https://github.com/nanocoai/nanoclaw/pull/4194)
- **通道与 CLI 稳定性**：PR #4265 让 Mattermost 在服务端/代理短暂不可用时获得 host 的 setup 重试；PR #4029 修复 Telegram 丢弃含下划线 URL 的回复；PR #4206 为 `ncl` 增加无 systemd 环境的重启提示并修正 CLAUDE.md 中的服务名。链接: [PR #4265](https://github.com/nanocoai/nanoclaw/pull/4265)、[PR #4029](https://github.com/nanocoai/nanoclaw/pull/4029)、[PR #4206](https://github.com/nanocoai/nanoclaw/pull/4206)
- **文档与历史债务**：PR #4145 使 CONTRIBUTING.md 的 PR 示例与 #3646 实际交付内容一致；PR #7 以 `os.homedir()` 替换硬编码的 `/Users/gavriel` 回退路径，关闭了自 2026-02-01 起搁置的旧 PR。链接: [PR #4145](https://github.com/nanocoai/nanoclaw/pull/4145)、[PR #7](https://github.com/nanocoai/nanoclaw/pull/7)

整体看，项目今日在"安装可靠性 + 容器安全"主线上稳步前进，但均为修复类推进，无面向用户的新能力落地。

## 4. 社区热点

今日整体讨论热度低，评论数据缺失（多为 undefined），可观察到的社区反应有限：

- **Issue #2025**（已关闭，👍 3）：安装脚本在 sudo 需密码时挂起，是今日唯一有正向反应的条目，反映新用户安装路径的痛点。链接: [Issue #2025](https://github.com/nanocoai/nanoclaw/issues/2025)
- **PR #4270**（OPEN，👍 0）：披露镜像扫描（grype 与 trivy，2026-11-05）在 main 镜像中发现 1 个 Critical、24 个 High 且**已有修复**的咨询项，属今日信息量最大的条目。链接: [PR #4270](https://github.com/nanocoai/nanoclaw/pull/4270)

背后诉求：用户最关心"能否顺利装上"，维护团队则把注意力放在镜像供应链安全上。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — 容器镜像安全咨询（已有 fix PR）**：main 镜像存在 1 Critical + 24 High 可修复咨询项，PR #4270 旨在阻止其随镜像发布。链接: [PR #4270](https://github.com/nanocoai/nanoclaw/pull/4270)
2. **中 — 安装挂起（已修复并关闭）**：`nanoclaw.sh` 在 sudo 需密码时卡在 "Installing the basics…"，由 PR #4200 修复。链接: [Issue #2025](https://github.com/nanocoai/nanoclaw/issues/2025)
3. **中 — Telegram 消息丢失（已修复并关闭）**：含下划线 URL 的回复被丢弃，含邮箱等常见场景，由 PR #4029 修复。链接: [PR #4029](https://github.com/nanocoai/nanoclaw/pull/4029)
4. **中 — Mattermost 启动期失败（已修复并关闭）**：服务端或代理短暂不可用时 setup 不重试，由 PR #4265 修复。链接: [PR #4265](https://github.com/nanocoai/nanoclaw/pull/4265)
5. **低 — 诊断信息不完整（修复待合并）**：PR #4266 使 setup 诊断事件携带 `nanoclaw_version`、`release_channel`、`run_id`、`arch`，并避免包含用户文本。链接: [PR #4266](https://github.com/nanocoai/nanoclaw/pull/4266)

今日无新报告的开放 Bug 且未修复。

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求。从待合并 PR 可推断的近期落地方向：

- **依赖自动化**：PR #3978 为 Actions、pnpm、bun、docker 与 skill pins 启用 Dependabot（带发布龄冷却），并移除从未生效的 Renovate 配置——若合并，将改变后续版本的依赖更新节奏。链接: [PR #3978](https://github.com/nanocoai/nanoclaw/pull/3978)
- **镜像安全基线**：PR #4270 与三条镜像刷新 PR（#4267/#4268/#4269）共同构成 "加固镜像持续替换" 流程，预计下一个版本会以镜像 digest 更新形式体现。链接: [PR #4267](https://github.com/nanocoai/nanoclaw/pull/4267)、[PR #4268](https://github.com/nanocoai/nanoclaw/pull/4268)、[PR #4269](https://github.com/nanocoai/nanoclaw/pull/4269)
- **诊断可观测性**：PR #4266 的元数据补全，暗示后续会在安装/通道排障上做文章。链接: [PR #4266](https://github.com/nanocoai/nanoclaw/pull/4266)

## 7. 用户反馈摘要

今日数据中 Issues 评论数为 0，缺少可直接引用的用户原话。可提炼的信号均来自 Issue 摘要与反应数：

- **痛点（不满意）**：安装阶段对 sudo 交互处理不当导致流程"看起来卡死"（#2025），且用户为此给出 3 个 👍，说明该问题具普遍性。链接: [Issue #2025](https://github.com/nanocoai/nanoclaw/issues/2025)
- **使用场景**：WSL 与无 systemd 的 Linux 环境是被明确覆盖的对象（见 #4200、#4206），表明相当部分用户在非标准环境部署。
- **满意点**：无法从现有数据判断。建议维护者在安装类 Issue 关闭时请求用户确认，以补齐反馈闭环。

## 8. 待处理积压

- **PR #7**（创建于 2026-02-01，今日已关闭）：长达约 9 个月的硬编码 home 目录修复今日才落地，提醒维护者关注早期 PR 的清理节奏。链接: [PR #7](https://github.com/nanocoai/nanoclaw/pull/7)
- **PR #3978**（OPEN，创建于 2026-10-01，已搁置约 1 个月）：Dependabot 配置替换，属基础设施类改动，建议明确合入或关闭。链接: [PR #3978](https://github.com/nanocoai/nanoclaw/pull/3978)
- **PR #4029**（标签含 `triage/needs-author`，创建于 2026-10-04，今日关闭）：带待作者响应标签的 PR 搁置近一个月后关闭，提示外部贡献者的响应时效可能影响留存。链接: [PR #4029](https://github.com/nanocoai/nanoclaw/pull/4029)
- **三条镜像刷新 PR 并存**（#4267/#4268/#4269，同一目标 `v2026.10.0`）：同日多次生成，建议维护者确认只保留最终 digest，避免合并冲突与追踪噪音。链接: [PR #4267](https://github.com/nanocoai/nanoclaw/pull/4267)、[PR #4268](https://github.com/nanocoai/nanoclaw/pull/4268)、[PR #4269](https://github.com/nanocoai/nanoclaw/pull/4269)

---

**健康度小结**：修复闭环良好（今日关闭的 Bug 均有对应 fix PR），安全治理常态化；主要风险在于外部贡献响应周期偏长、社区讨论活跃度低，以及同日重复镜像 PR 带来的流程噪音。

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

# LobsterAI 项目日报 · 2026-11-05

## 1. 今日速览

过去 24 小时项目代码活动非常密集：17 条 PR 有更新，其中 15 条已合并/关闭，2 条仍待合并；无新版本发布。合并内容集中在 OpenClaw 网关启动性能、DSH（DeepSeek Harness）运行时生命周期、桌面伴侣（desktop-companion/cowork）交互缺陷修复三条主线，多数来自同一贡献者 fisherdaddy，单日提交粒度较高。社区侧 Issues 更新仅 2 条，且全部为账号封禁申诉，无新增功能类讨论。整体判断：**代码推进活跃度高，社区讨论面偏窄，用户侧主要摩擦点集中在风控与账号策略，而非产品质量本身**。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日关闭的 PR 按主题分布如下：

**OpenClaw 网关启动与性能链路（显著提速）**
- #3000 [CLOSED] perf(openclaw): connect the gateway client sooner after startup —— 针对从网关 ready 到桌面端握手耗时 2.3–2.7 s（Windows 上三段串行主进程步骤）的问题，通过只加载 GatewayClient chunk 等方式削减/前移各步骤。
- #3002 [CLOSED] perf(openclaw): read Windows registry roots and code page natively —— 消除 `[gateway] ready` 后连续 4 次 `reg.exe query` 与 `cmd.exe` 调用，改为原生读取注册表与代码页。
- #3001 [CLOSED] perf(openclaw): skip the dreaming startup scrub when dreaming is off —— dreaming 关闭时跳过 memory-core 的启动清理钩子。
- #3011 [CLOSED] perf(openclaw): ship build-info.json beside the gateway bundle —— 修正 OpenClaw 启动迁移检查点查找 `build-info.json` 的路径。
- #3010 [CLOSED] fix(openclaw): re-render install paths in the no-model config sync —— 修复多安装共用同一 `openclaw.json` 时安装路径未重渲染的问题。
- #3004 [CLOSED] docs(openclaw): 记录 #3002 合并后的运行时测量数据（仅文档）。

**DSH 运行时与插件**
- #3008 [CLOSED] fix(dsh): stop the runtime on quit and reclaim leftovers on restart —— 修复 macOS 正常退出后 dsh 进程残留并占用端口、重启后设置页显示 "not running" 且残留无法回收的问题。
- #3007 [CLOSED] fix(dsh): install plugins with bundled pnpm and bump dsh to 0.2.2-rc.1 —— 修复大多数用户插件安装报 `pnpm was not found`，并将 dsh 升级至 0.2.2-rc.1。

**桌面伴侣与 cowork 交互**
- #3005 [CLOSED] feat(desktop-companion): 登录后继续处理选择类请求（explain / summarize / follow-up / read aloud）。
- #3006 [CLOSED] fix(desktop-companion): 修复 macOS 上无键盘焦点重开面板导致的闪退式关闭。
- #3003 [CLOSED] fix(companion): 任务卡片在全屏应用之上保持可见，并修复隐藏面板打开时跳动。
- #3009 [CLOSED] fix(cowork): 复制含图片的用户消息时保留图片（此前仅复制纯文本，图片存于 `imageAttachmentPreviews` / `imageAttachments` 未被复制）。

**外部贡献**
- #2739 [CLOSED] Add optional keyless Parallel web search —— 在 web-search skill 中新增 Parallel 引擎，无需账号/API key 即可使用（作者 georgeatparallel，创建于 2026-09-21，今日关闭）。

**推进程度评估**：今日合并明显偏向“启动耗时与进程生命周期”这类底层体验问题，属于质量加固而非功能扩张；同时清理了一条积压约 6 周的外部功能 PR。#3007 将 dsh 升至 0.2.2-rc.1，为预发布版本依赖，尚未进入正式 release。

## 4. 社区热点

今日无高评论/高反应条目（所有展示条目 👍 均为 0，评论数最多为 2）。

- #2940 [OPEN] 账号被禁用申诉（133\*\*\*\*1280），作者 lastwhisper9312-creator，2026-10-25 创建，2026-11-05 更新，**2 条评论**，为今日互动最多条目。
  https://github.com/netease-youdao/LobsterAI/issues/2940
- #2998 [OPEN] 账号被禁用申诉，作者 qingshui8806，2026-11-05 创建，1 条评论。
  https://github.com/netease-youdao/LobsterAI/issues/2998

**诉求分析**：两条均为因绕过正常客户端、直接调用内置模型接口而触发风控的封禁申诉，作者均强调“个人本地使用、非商业化、未对外提供服务”，并自称已完成整改。两案手法不同（本地反向代理转发 / DSH 签到插件一键签到），说明风控触发面覆盖多种接口复用方式。核心诉求是**解封流程与规则透明度**，而非功能缺陷。

## 5. Bug 与稳定性

今日无崩溃/回归类新上报 Issue；稳定性工作体现在已关闭的修复 PR 上，按影响排序：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | macOS 退出后 dsh 进程残留占用端口，重启后无法回收（#3008） | 已关闭（fix） |
| 高 | 插件安装在多数环境因 `pnpm was not found` 失败（#3007） | 已关闭（fix，含 dsh 0.2.2-rc.1 升级） |
| 中 | 登出时 `openclaw.json` 大幅缩减（约 48 KB → 19 KB）被 OpenClaw 判为 clobber（#3012） | **仍 OPEN**，无合并状态 |
| 中 | 多安装共用 profile 导致安装路径未重渲染（#3010） | 已关闭（fix） |
| 中 | macOS 面板无焦点重开即被 blur/focus 轮询关闭（#3006） | 已关闭（fix） |
| 低 | 复制含图片消息丢失图片（#3009） | 已关闭（fix） |
| 低 | 任务卡片无法显示于全屏应用之上、隐藏面板打开跳动（#3003） | 已关闭（fix） |

注意：#3012 涉及登出场景下的配置同步，若未合入，登出行为仍可能触发 OpenClaw 的配置覆盖判定，建议优先关注。

## 6. 功能请求与路线图信号

今日 Issues 中无功能请求，信号主要来自 PR：

- **登录后延续选择类请求**（#3005，已合并）：摘要指出“选择类用户（多随词典捆绑安装）翻译时无需登录，但极少登录”，登录后可继续 explain / summarize / follow-up / read aloud。这是**拉新转化**相关的产品信号，预计进入下一版本。
- **无 Key 的 Parallel 网页搜索**（#2739，已关闭）：为内置 web-search skill 增加免账号引擎，降低搜索能力使用门槛，具备纳入下一版本的合理性（已关闭，落地状态需以实际分支为准）。
- **dsh 0.2.2-rc.1**（#3007）：为预发布依赖，是否随正式版本发布尚不明确。

## 7. 用户反馈摘要

今日用户声音全部来自两条申诉 Issue，反映的痛点集中在：

- **账号策略与使用边界不清**：用户将内置模型接口用于本地工具或签到插件后即被禁用，事前缺少明确提示或分级处置。
- **封禁后无自助恢复路径**：登录跳转直接报错、无法进入应用，只能通过公开 Issue 申诉，涉及手机号等个人信息在公开渠道披露。
- **真实使用场景**：本地工具调用模型、多账号签到便利性——均为非商业的个人效率诉求。
- 未见对功能或性能的正面/负面评价，今日无可提炼的产品满意度信号。

## 8. 待处理积压

- **#2798 [OPEN] [stale]** fix: credential log redaction, preview-server symlink containment, and OpenClaw proxy auth —— 作者 carfeii，2026-10-05 创建，2026-11-05 仍有更新，关联修复 #2795 / #2796 / #2797。涉及 **OAuth token 明文写入诊断文件**、preview-server 符号链接约束、OpenClaw 代理鉴权三项安全问题，已挂 stale 标签近一个月，建议优先评审。
  https://github.com/netease-youdao/LobsterAI/pull/2798
- **#3012 [OPEN]** fix(openclaw): 登出配置缩减免网关重启 —— 今日新开，直接关系登出稳定性，建议尽快给出结论。
- **#2940 [OPEN]** 账号封禁申诉，2026-10-25 创建，至今 11 天未闭环，建议明确申诉处理时限与统一答复口径。

**健康度小结**：代码侧交付节奏良好，底层启动性能与进程清理集中修复；主要风险点是安全类 PR #2798 长期滞留，以及封禁申诉缺乏产品化处理通道，导致用户诉求外溢到 Issue 区。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报（2026-11-05）

## 1. 今日速览

今日项目整体处于低活跃状态：过去 24 小时 Issues 更新为 0 条，无新版本发布，亦无已合并/关闭的 PR。唯一动态是 1 条待合并的开放 PR（#1321），为 `web_search` 工具新增 Keenable 作为可选搜索提供商。项目今日没有代码被合入主分支，进展贡献为零合入量。活跃度评估：**低**，属于等待维护者评审的静默期。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日无已合并或已关闭的 PR，主分支无功能推进或修复落地。

待评审的进展信号：
- **PR #1321** `[OPEN]` feat(tools): add Keenable as a web search provider — 作者 ilya-bogin-keenable，创建 2026-11-04，更新 2026-11-05
  链接: moltis-org/moltis PR #1321
  摘要要点：新增 Keenable 作为 opt-in 的 `web_search` 提供商（在 `[tools.web.search]` 下设置 `provider = "keenable"`）。Keenable 无需 API key 即可使用，提供了一个不依赖 DuckDuckGo 回退方案的无密钥搜索选项。

## 4. 社区热点

今日唯一有更新的条目为上述 PR #1321（链接同上）。数据中未提供评论数与反应数（评论字段为 undefined，👍 为 0），因此无法判断讨论热度；从内容看，其诉求是**降低搜索工具的配置门槛**，为不希望配置 API key 或依赖 DuckDuckGo 回退的用户提供替代路径，属于隐私/易用性导向的需求。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告（Issues 更新 0 条）。

## 6. 功能请求与路线图信号

今日无新 Issue 形式的功能请求。结合已有 PR，可纳入下一版本评估的信号：
- **无密钥网页搜索提供商（Keenable）**：PR #1321 已提出实现，且为 opt-in 默认关闭模式，属于低风险增量能力，具备进入下一版本的潜力（取决于维护者评审与测试情况）。链接: moltis-org/moltis PR #1321

## 7. 用户反馈摘要

今日 Issues 无评论，无法提炼用户痛点、使用场景或满意度信息。唯一可间接读出的使用信号来自 PR #1321 描述：存在不希望依赖 DuckDuckGo 回退、希望使用无 API key 搜索的用户场景。

## 8. 待处理积压

- **PR #1321**：创建 2026-11-04、截至 2026-11-05 仍为 OPEN，属于新近提交、尚无合入动作的待评审项，建议维护者尽快安排评审与测试反馈。链接: moltis-org/moltis PR #1321

数据未提供长期未响应的 Issue 或 PR 信息，今日无法评估该项；建议后续日报在数据源中补充未关闭项的老化时长指标。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-11-05

## 1. 今日速览

项目今日维持高强度活跃：Issues 更新 14 条（新开/活跃 10、关闭 4），PR 更新 32 条（待合并 20、合并/关闭 12），但无新版本发布。工作重心集中在记忆子系统（ReMe embedding / reranker / tag 索引）、插件与 Console 界面、以及 Windows 平台兼容性三类问题。今日新开 Bug 密度偏高（#8595、#8585、#8586、#8592、#8596 等均为当日创建），且 #8592 存在阻断性的 Creator 评审流程缺陷，短期内稳定性压力集中在记忆与 Creator 模块。合并侧有多条长期挂起 PR 终于关闭（#6788、#6659、#7738），显示积压清理有所推进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

合并/关闭的重要 PR：

- **#6788**（CLOSED）修复 multitask/ACP 场景下 ACL 存储使用 per-task 工作区导致 Telegram 频道拒绝历史任务的问题，改为使用共享 root profile 工作区。链接：agentscope-ai/QwenPaw PR #6788
- **#6659**（CLOSED）实现模型 fallback 与冷却机制，应对限流、超时、服务错误时的自动切换（关联 #2199）。链接：agentscope-ai/QwenPaw PR #6659
- **#7738**（CLOSED）在调用 OpenAI `completions.create()` 前过滤未识别的 kwargs，修复中间件/代理注入参数导致的 TypeError。链接：agentscope-ai/QwenPaw PR #7738
- **#8558**（CLOSED）简化 Matrix 旧状态迁移与设备锁，避免无关遗留文件阻止有效账号启动。链接：agentscope-ai/QwenPaw PR #8558
- **#8589**（OPEN）稳定浏览器超时与插件清理相关的两个生命周期测试。链接：agentscope-ai/QwenPaw PR #8589

整体进展：模型调用健壮性（fallback + kwargs 过滤）与频道/ACL 一致性得到补强；但仍有 20 条 PR 待合并，其中多条为 size/XL 以上大型改动，合并节奏受审阅带宽限制。

## 4. 社区热点

- **#8040**（8 评论，最活跃）embedding reindex 不完整：单个 CJK chunk 超过 provider per-item token 限制时静默丢弃整批，且日志仍报 `processed=126/126` 成功；为 #5950 的复发。反映记忆索引可靠性是核心关切。链接：agentscope-ai/QwenPaw Issue #8040
- **#8276**（4 评论）ReMe reranker 允许空 api_key 启用，失败仅显示 "unexpected error"。链接：agentscope-ai/QwenPaw Issue #8276
- **#7026**（CLOSED，4 评论）`chat_template_kwargs` 未由 `extra_body` 包装，导致 openai SDK TypeError（多模型通用问题）。链接：agentscope-ai/QwenPaw Issue #7026
- **#3570**（4 评论，自 2026-04-19 长期开放）"All Chats" 列表缺少分页，会话量大时加载缓慢。链接：agentscope-ai/QwenPaw Issue #3570

诉求分析：讨论热度集中于"静默失败"类问题——错误被日志掩盖或只暴露为泛化错误信息，用户难以定位；其次是记忆系统的配置校验缺失。

## 5. Bug 与稳定性

按严重程度排列：

1. **[严重，阻断] #8592** Creator 评审轮次永久无法决策：REJECT 恒返回 422 "visual artifact reference references missing id"；附带过期 provider source_url 502 与 frame_stats 忽略 `CREATOR_FFMPEG_PATH` 两个缺陷。未标注 fix PR。链接：agentscope-ai/QwenPaw Issue #8592
2. **[严重] #8040** embedding reindex 静默丢弃整批 chunk 且误报成功（#5950 复发）。未见 fix PR。链接：agentscope-ai/QwenPaw Issue #8040
3. **[高] #8580** Memory tag 索引从不重建，`/memory/tags` 返回 503 "Memory tag index is unavailable"，标签生成但不可读（Windows 10，v2.3.0b2）。未见 fix PR。链接：agentscope-ai/QwenPaw Issue #8580
4. **[高] #8585** Windows 下 `recall_history` 失效：workspace_dir 被规范化为 `\\?\` 扩展长度路径，破坏 SQLite 只读 URI（Windows 10，2.3.0-beta.1）。未见 fix PR。链接：agentscope-ai/QwenPaw Issue #8585
5. **[高] #8595** 安装官方 `qwenpaw-creator` 插件（v2.0.4）失败："No package metadata was found"，UI 与 CLI 均失败。未见 fix PR。链接：agentscope-ai/QwenPaw Issue #8595
6. **[中] #8276** reranker 允许空 api_key 启用，失败仅显示泛化错误。未见 fix PR。链接：agentscope-ai/QwenPaw Issue #8276
7. **[中] #8596** `/clear` 后重新打开会话仍显示 /clear 消息并隐藏空状态问候（2.2.2.post1，main 分支 `c84ff8d` 仍存在）。未见 fix PR。链接：agentscope-ai/QwenPaw Issue #8596
8. **[中] #8590** 插件注册到"设置"区的路由后，左侧导航退回会话列表（内置设置页不受影响）。已有 fix PR **#8593**（OPEN）。链接：agentscope-ai/QwenPaw Issue #8590
9. **[已关闭] #8581** code 模式下入参含 `name` 字段的工具必然抛 `TypeError: multiple values for argument 'name'`（今日已关闭）。链接：agentscope-ai/QwenPaw Issue #8581
10. **[已关闭] #8555** 新建任务选择非默认工作区后，后续消息显示回默认值。链接：agentscope-ai/QwenPaw Issue #8555

## 6. 功能请求与路线图信号

- **#7252**（CLOSED）基于 OpenViking 的可选长期记忆后端，复用现有 `BaseMemoryManager` / `MemoryMiddleware` 架构；该讨论已关闭，结合今日多条记忆子系统 Bug（#8040、#8276、#8580），记忆后端抽象与扩展性仍是路线图热点。链接：agentscope-ai/QwenPaw Issue #7252
- **#3570** "All Chats" 分页增强，长期未落地，但与今日 #8596（会话视图状态）同属会话列表体验范畴。链接：agentscope-ai/QwenPaw Issue #3570
- **#8591** QwenPaw Creator UI 改进：按钮白底白字不可辨、模型点击即启动与开关状态不一致、图片/视频/LLM 模型被强制共用同一 api_key。与 #8595 插件安装问题共同指向 Creator 模块的成熟度不足。链接：agentscope-ai/QwenPaw Issue #8591

结合已有 PR 判断：Console 侧改进（#8594 可拖拽会话宽度、#8597 view_audio 目录翻译、#8593 插件设置导航修复）落地可能性最高；记忆/Provider 层的修复类 PR（#8234 GBK 解码、#8236 Ollama num_ctx、#8550 模型配置边界校验、#8309 Ollama 模型发现）仍在 Under Review。

## 7. 用户反馈摘要

- **静默失败是最强痛点**：用户 ianfunghk 指出批量循环日志声称 `processed=126/126` 成功却实际失败，以及 BeiMu-new 抱怨失败仅表现为 "unexpected error"，二者共同指向可观测性与错误信息质量问题。
- **中文/Windows 场景被低估**：CJK chunk 触发 token 上限（#8040）、中文 Windows 下 GBK/CP936 文本被 `errors="ignore"` 丢弃（PR #8234）、`\\?\` 路径破坏 SQLite URI（#8585）、memory tag 索引在 Windows 10 失效（#8580），构成明显的平台适配缺口。
- **插件生态体验不稳**：插件安装失败（#8595）、插件页面丢失设置导航（#8590）、插件 UI 视觉与交互缺陷（#8591），说明插件扩展点在真实使用中尚未闭环。
- **工作量场景**：DICKQI 反映会话数量增长后列表加载显著变慢（#3570），属重度使用者的规模化诉求。

## 8. 待处理积压

- **#3570**（OPEN，创建于 2026-04-19，超 6 个月）会话列表分页，评论 4 条仍无实现 PR。链接：agentscope-ai/QwenPaw Issue #3570
- **#8234**（Under Review，size/XXL，创建于 2026-10-14）read/edit/grep 的 GBK/CP936 解码修复，超大改动审阅周期已逾三周。链接：agentscope-ai/QwenPaw PR #8234
- **#8236**（Under Review，size/XL，创建于 2026-10-14）Ollama 按 num_ctx 设定上下文窗口。链接：agentscope-ai/QwenPaw PR #8236
- **#8411**（Under Review，size/XL，创建于 2026-10-24）Matrix 缓存会话与设备密钥恢复。链接：agentscope-ai/QwenPaw PR #8411
- **#8309**（Under Review，创建于 2026-10-18）CLI 中 Ollama 模型发现（Fixes #1453）。链接：agentscope-ai/QwenPaw PR #8309
- **#8550**（first-time-contributor，创建于 2026-11-02）Provider 写路径拒绝越界模型配置，建议优先给予新贡献者反馈。链接：agentscope-ai/QwenPaw PR #8550

**健康度提示**：今日关闭 4 条 Issue、12 条 PR 落地，积压清理有实质进展；但新开 Bug 多为高影响记忆/平台问题且尚无 fix PR，建议维护者优先响应 #8592、#8040、#8580、#8585，并加快 #8234 等大型 Under Review PR 的审阅以释放合并吞吐。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-11-05

> 数据来源：github.com/zeroclaw-labs/zeroclaw 过去 24 小时 GitHub 活动。所有数字与结论均基于所提供数据。

## 1. 今日速览

项目今日处于高活跃、**以安全修复为主导**的时刻：27 条 Issue 更新（新开/活跃 24、关闭 3），50 条 PR 更新（待合并 46、合并/关闭 4），合并率极低（8%），积压明显。讨论集中在 identity-access 与安全策略绕过问题，多条标记 `priority:p1`、`release:v0.9.0`、`risk:high` 的负责人（如 Audacity88、IftekharUddin）持续跟进，显示 v0.9.0 发布前的安全评审正在密集进行。核心架构 RFC #10526（append-only 会话事件历史）今日关闭，是架构层面的重要里程碑。整体健康度：**活跃度高，但待合并 PR 堆积（46 条）值得关注**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭数量有限（PR 4 条、Issue 3 条），但关闭的均为重量级条目：

- **#10526（已关闭）** RFC：Append-only 会话事件历史、确定性状态重放与派生 agent 流。这是运行时/架构域的 `risk:high`、`status:accepted` RFC，今日关闭意味着运行时持久化模型的架构方向已定稿。🔗 Issue #10526
- **#9394（已关闭）** gateway 的 `pairing_dashboard` 配置被接受却完全未被读取、配对码永不过期。属于 security:pairing 域、`priority:p1`、`release:v0.9.0`。🔗 Issue #9394
- **#11239（已关闭）** owned 会话通过 `spawn_subagent` 与 `execute_pipeline` 渗透到共享内存平面（S0 安全风险，`release:v0.9.0`）。🔗 Issue #11239

> 说明：所提供的 PR 列表中，已合并/关闭的 4 条 PR 未在展示的 15 条内体现，故不展开。

## 4. 社区热点

- **#10526（15 条评论，已关闭）** 运行时架构 RFC，评论区最活跃。诉求：将分散在 TurnEvent、日志、工具回执、任务控制面、成本记录中的执行事实统一为可重放的事件历史。🔗 Issue #10526
- **#11703（5 条评论）** 通过 `tool_search` 激活延迟工具会改变 system prompt 并使 prompt cache 失效，带来成本问题（仅 `mcp.deferred_loading = true` 时触发）。反映用户对 **prompt 缓存与成本效率**的敏感。🔗 Issue #11703
- **#11126（4 条评论）** 排队的会话操作保留已撤销管理员的 owner 权限绕过。🔗 Issue #11126
- **PR #9809（provider 多模型支持，size:XL，增强大改）** 引入 `[providers]` 下的统一 provider/model 注册表，长期开放（8 月创建），是今日体量最大的活跃 PR。🔗 PR #9809

## 5. Bug 与稳定性

按严重程度排列（标注 fix PR 状态）：

**S0 / 数据丢失或安全风险**
- #11127 会话数据工具绕过 principal 归属检查（p1，`release:v0.9.0`）。未在展示 PR 中见到 fix PR。🔗 Issue #11127
- #11123 SOP 执行接受通配符工具选择器却不需要 `tools:execute`（p1）。🔗 Issue #11123
- #11124 SOP 决策门在 mode answer 有效时忽略 strict fallback（p1）。🔗 Issue #11124

**S2 / 功能降级**
- #12047 OIDC bearer 校验缺少尝试次数限制与出站上限（p1）。🔗 Issue #12047
- #12145 插件 store 限制器未覆盖 wasmtime 默认的 10,000 memories/tables，插件可超预算。🔗 Issue #12145
- #12228 `cron update --agent` 报告成功但不重新分配 agent。🔗 Issue #12228
- #12043 / #12225 `glob_search` 在 allowed roots 下丢弃或无法列出工作区外匹配。🔗 Issue #12043 · #12225

**S3 / 次要**
- #11703 延迟工具激活导致 prompt cache 失效。🔗 Issue #11703
- #12236 缓存的 HTTP 客户端跨测试运行时共享，偶现 "dispatch task is gone"。🔗 Issue #12236
- #12194 未知模型静默回退到 32k 上下文预算，错误失败本可容纳的轮次。🔗 Issue #12194

**已有关联 fix PR 的（部分）：**
- PR #12257 → 修复 #12227：不再向模型暴露 shell 的 `approved` 参数。🔗 PR #12257
- PR #12255 → 修复 #12235：解析 LFM `<|tool_call_start|>` 函数式工具调用。🔗 PR #12255
- PR #12250 → 修复 #12205：清理空闲 canvas 释放槽位。🔗 PR #12250
- PR #12110：流式工具参数缺失 `index` 时的累加器修复。🔗 PR #12110

## 6. 功能请求与路线图信号

- **#11984 Dashboard 聊天**：允许非管理员 OIDC 登录账户以自身权限与授权 agent 对话（`release:v0.9.0` 标签，但为 enhancement）。🔗 Issue #11984 — 与 PR #10407（持久化会话 prompt 附件）、PR #12230（原生 Zulip 渠道）方向一致，可能进入 v0.9.0 后续。
- **PR #9809 多模型 provider profile**、**PR #12059 OpenAI 运行时配置 thinking 等级**、**PR #11584 Opper provider**：provider 层扩展是持续主线。🔗 PR #9809 · #12059 · #11584
- **PR #12198 / #12201 转录回退与群内免 mention 语音转录**、**PR #12197 Telegram 媒体回复上下文**：多渠道与语音体验增强。🔗 PR #12198 · #12201 · #12197
- **PR #12230 原生 Zulip 渠道**：渠道矩阵继续扩张。🔗 PR #12230

## 7. 用户反馈摘要

- **成本敏感**：多条 issue 围绕 prompt cache 失效（#11703）与上下文预算回退（#12194），显示自托管用户在真实负载下对 token 成本的关注。
- **安全与最小权限**：大量 identity-access / security:policy issue 集中反映「受限 principal 实际仍能执行操作级工具（cron、schedule、peer messaging、SOP）」的痛点（#12046、#12051、#11126）。
- **CLI 静默失败令人困扰**：`cron update` 静默丢弃声明式字段（#9770）、`cron update --agent` 假成功（#12228），体现用户对 CLI 明确反馈的诉求。
- **glob_search 行为不一致（#12043、#12225）**：用户在多 issue 中重复报告工作区外文件可见性问题，指向 safety 与可用性之间的权衡。

## 8. 待处理积压

- **PR #9809**（2026-08-07 创建）：多模型 provider registry，size:XL、`needs-author-action`，已开放近三个月。🔗 PR #9809
- **PR #10407**（2026-08-27）：持久化 session prompt 附件，size:XL、`risk:high`，长期未合。🔗 PR #10407
- **Issue #11126 / #11123 / #11127**（2026-09-25 创建）：同一作者批量提交的 p1 安全问题，持续更新但仍 OPEN。🔗 #11126 · #11123 · #11127
- **Issue #9770**（2026-08-05）：cron update 静默丢弃 6 个声明式字段，`status:accepted` 但三个月未解决。🔗 Issue #9770
- **PR #12140**（安全：Windows profile secrets 加入默认 forbidden_paths）、**PR #12198 / #12201 / #12204**：多条带 `needs-author-action` 的 PR 等待作者回应，建议维护者主动推动或明确关闭。

---
**维护者提示**：今日 46 条 PR 待合并 vs 4 条处理量，合并吞吐是当前主要瓶颈；建议优先清理带 `needs-author-action` 的 PR 与 p1 安全 Issue，以保障 v0.9.0 发布质量。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*