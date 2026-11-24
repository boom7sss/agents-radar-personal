# OpenClaw 生态日报 2026-11-24

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-24 09:55 UTC

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

# OpenClaw 项目日报 · 2026-11-24

## 1. 今日速览

OpenClaw 今日维持高强度开发节奏：过去 24 小时 Issues 更新 500 条（新开/活跃 353、关闭 147），PR 更新 500 条（待合并 291、已合并/关闭 209），并发布 2 个 beta 版本。当前主线围绕**更新恢复能力**（更新中断、跨 schema 变更、重启后续跑）持续加固，v2026.11.10-beta.2 与 beta.3 均以此为核心亮点。同时积压侧压力明显：大量 P1/P2 Issue 长期处于 `stale` 且 `needs-product-decision`，提示产品侧决策速度是当前主要瓶颈。整体活跃度高、合并吞吐稳定，但关键缺陷的决策闭环偏慢。

## 2. 版本发布

**v2026.11.10-beta.3**
- **更新恢复**：中断的包更新与源码更新可恢复，覆盖跨越 schema 变更或机器重启的更新场景（#200273、#200366、#200460、#200866、#200994、#201600，贡献者 @fuller-stack-dev）。
- 亮点条目中另提及“Reliable delegated work”（可靠委派任务），原文在此处截断，具体范围未在提供材料中展开。
- 链接：openclaw/openclaw Release v2026.11.10-beta.3

**v2026.11.10-beta.2**
- **更新恢复**：包替换中断时保持 OpenClaw 可运行，崩溃或重启后下一次更新可安全完成（#200273、#200366、#200460、#200550、#200994，@fuller-stack-dev）。
- **可靠后台工作**：保留已完成的工作结果（原文截断）。
- 链接：openclaw/openclaw Release v2026.11.10-beta.2

**破坏性变更与迁移说明**：所给 release 文本未声明破坏性变更；两个版本均强调“可恢复”，建议在 beta 环境先验证跨 schema 更新与重启路径。

## 3. 项目进展

今日合并/关闭的 PR 以测试与 CI 基础设施加固为主，属“减噪提质”型推进：

- **#204533（已关闭，P1）** fix(onboard)：经典/托管引导中选择“Skip for now”后不再强制手填模型（承接 #203271 不再自动生成默认模型）。链接：openclaw/openclaw PR #204533
- **#204541、#204543（已关闭）**：隔离 cron 停放保留/重臂测试与宿主内存压力的耦合，降低受限 runner 上的误报。链接：PR #204541、PR #204543
- **#204538（已关闭）**：qa-lab 委派验证改用当前 transcript 的活动分组定位器。链接：openclaw/openclaw PR #204538
- **#204548（已关闭）**：补充维护锁释放后更新继续执行的测试覆盖。链接：openclaw/openclaw PR #204548

另有多个更新路径相关 PR 待合并（见第 8 节），包括 PostgreSQL 更新失败后保持 Gateway 可用（#204502）、重启时应用更新的 npm 安装（#204515）、快车道发布审批（#204520），显示发布与更新可靠性仍是下一阶段主线。

## 4. 社区热点

- **#182891（OPEN，P1，27 评论）** Prompt 缓存从不复用：每个请求出现 `cache read dropped N -> 0`（信封重写、runtimeContextCarrier 变化、回合内不明丢失）。评论数最高，P1 且需维护者评审。链接：openclaw/openclaw Issue #182891
- **#143017（OPEN，P2，19 评论）** 持久会话重写前缀的五种方式，已测量 21.3M 缓存写入 token，并附生产流量实时复现。链接：openclaw/openclaw Issue #143017
- **#196199（OPEN，P1，17 评论）** 自 2026.10.10 起的回归：原生 Codex helper 完成时无法恢复父会话，导致目标暂停、用户被锁在助手之外。链接：openclaw/openclaw Issue #196199
- **#150238（OPEN，P2，13 评论）** Skill Workshop 在超大会话上缺少受支持的上下文预算/跳过策略。链接：openclaw/openclaw Issue #150238

**诉求分析**： Discussions 高度集中在**成本与上下文效率**（prompt cache 前缀稳定性）和**多智能体委派的可靠性**（Codex helper、subagent 会话写者冲突）。这类问题直接影响 token 账单与用户能否继续使用，社区已有生产级量化复现，但普遍卡在 `needs-product-decision`。

## 5. Bug 与稳定性

按严重程度排列（均已标注 fix PR 状态）：

| 级别 | Issue | 问题 | Fix PR |
|---|---|---|---|
| P0 | #201468 | macOS 启动告警：内置 CLI 拒绝旧 Gateway 的 schema 迁移时给出泛化凭据恢复步骤，属发布阻断 | 标记 `linked-pr-open`，未见已合并修复 |
| P1 | #196199 | Codex helper 完成无法恢复父会话（回归，消息丢失） | 无新 fix PR |
| P1 | #196820 | Control UI 在 `Element.getAnimations()` 循环中约 100% CPU 卡死（回归，崩溃循环） | 无新 fix PR |
| P1 | #182891 | Prompt 缓存零复用 | 无新 fix PR |
| P1 | #55792 | Gateway 重启后错过的入站消息被静默丢弃 | 无新 fix PR（标记 fix-shape-clear） |
| P1 | #161403 | 2026.9.6 健康 agent 数据库校验耗时 128.8 秒 | 无新 fix PR |
| P2 | #161158 | `gateway restart` 实际成功却报失败且 exit 0，60s 就绪预算硬编码 | 无新 fix PR |
| P2 | #153430（已关闭） | 深层 `$include` 配置在 include 解析后的加载阶段触发 RangeError | 已关闭 |
| P2 | #143973 | `view_image` 结果内联存全量 base64，1.3% 事件占 80% 存储字节 | 无新 fix PR（fix-shape-clear） |
| P2 | #165615 | Discord 编辑消息无法更新 Components V2 卡片 | `linked-pr-open` |

## 6. 功能请求与路线图信号

- **MCP 事件驱动**（#166586）：订阅 `mcp.servers` 广播的 MCP Events，每个事件启动一次 agent run。P3，无 PR，短期落地概率低。
- **MCP OAuth 预注册客户端**（#116052）：支持无 DCR 的授权服务器，已进入安全评审阶段，是较成熟的候选。链接：openclaw/openclaw Issue #116052
- **Agent 自触发上下文压缩**（#6757）：自 2026-02 长期开放，需产品决策。链接：openclaw/openclaw Issue #6757
- **Missed-message 补偿**（#55792）：与更新/重启恢复主题一致，可能随“重启后恢复”主线一并纳入。
- **A2A v1.0 完整一致性**（#179382，已关闭）：插件目前仅实现 0.3 时代子集，后续推进需重新立项。
- **Dreams 页由记忆槽所有者驱动**（#138366，已关闭）：仅作为提议留存。

## 7. 用户反馈摘要

- **成本敏感**：多个用户以生产流量量化 prompt cache 失效（#143017、#182891），说明 token 成本是高频痛点。
- **委派可靠性是核心使用场景**：#196199、#164533（`sessions_send` 报 “session writer claim changed”）显示多智能体/子代理协作已在真实工作流中使用，失败会直接中断用户任务。
- **更新体验仍有摩擦**：#187917（更新失败，已关闭）、#161158（重启误报失败）、#159743（安装感知的升级后调查）反映升级路径的可见性与可恢复性受关注——与 beta 版本方向吻合。
- **跨渠道一致性**：#183048（Slack 出站 `unknown_after_send` 无 CLI 结算）、#136271（Teams SharePoint 硬编码）、#165615（Discord Components V2）显示企业 IM 集成需求旺盛。
- **控制端体验**：#196820 的 UI 卡死与 #143387 的 Android 通知 QoL 显示非功能性体验问题也开始影响口碑。

## 8. 待处理积压

**长期未响应的 P1/P2（均标记 `stale` 且 `needs-product-decision`）**：
- #55792（自 2026-03-27，P1，消息丢失补偿）链接：openclaw/openclaw Issue #55792
- #161158（2026-09-29，P2，重启误报）链接：openclaw/openclaw Issue #161158
- #161403（2026-09-29，P1，数据库校验缓慢）链接：openclaw/openclaw Issue #161403
- #150238（2026-09-16，P2，上下文预算策略）链接：openclaw/openclaw Issue #150238
- #143375（2026-09-09，P2，扫描版 PDF 被 vision 模型门槛阻断）链接：openclaw/openclaw Issue #143375

**高价值待合并 PR**：
- #204502（P1，XL，PostgreSQL 更新失败后保持 Gateway 可用，`waiting on author`，含兼容性与可用性风险标签）链接：openclaw/openclaw PR #204502
- #204515（P2，XL，重启时应用更新的 npm 安装）链接：openclaw/openclaw PR #204515
- #204520（P2，XL，发布经理可发布已审批快车道版本，`automation` 风险）链接：openclaw/openclaw PR #204520
- #188022（P2，cron 失败告警投递结果随修复简报传递，`waiting on author`）链接：openclaw/openclaw PR #188022

**维护者关注点**：积压的核心矛盾不是缺乏复现，而是**产品决策吞吐**（大量 `needs-product-decision`）。建议优先裁决成本相关（prompt cache）与委派可靠性两条线索，它们同时影响用户留存与基础设施成本。

---
*数据来源：openclaw/openclaw GitHub，统计窗口 2026-11-23 至 2026-11-24。Issue/PR 展示上限为评论数 Top 30 / Top 20，实际总量均为 500。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告 · 2026-11-24

## 1. 生态全景

今日生态呈现明显的“头部高频迭代、腰部质量巩固、尾部静默”三层结构。以 OpenClaw 为代表的核心项目维持 500 条 Issue + 500 条 PR 的日更新量级，但瓶颈已从“缺复现”转向“产品决策吞吐”；Hermes Agent 与 ZeroClaw 处于高流入、低消化的积压压力下；NanoBot、NanoClaw、LobsterAI 则以修复收敛与体验打磨为主。技术焦点高度收敛于三处：**更新/重启后的可恢复性**、**多智能体委派与上下文/成本效率**、**MCP 与渠道生态接入的鉴权标准化**。

## 2. 各项目活跃度对比

| 项目 | Issues（今日） | PR（今日） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 更新 500（活跃 353 / 关闭 147） | 更新 500（待合并 291 / 合并关闭 209） | 2 个 beta（v2026.11.10-beta.2/.3） | 活跃度极高、吞吐稳定；决策闭环偏慢，P1 多卡 `needs-product-decision` |
| **Hermes Agent** | 更新 50（活跃 45 / 关闭 5） | 更新 50（待合并 45 / 合并关闭 5） | v0.23.4 稳定版 + 1 金丝雀 | 活跃极高但积压上升（待合并 45 vs 关闭 5），认证/会话异常路径待解 |
| **ZeroClaw** | 更新 31（活跃 21 / 关闭 10） | 更新 50（待合并 44 / 合并关闭 6） | 无 | 活跃高、合并率约 12%；XL 堆叠 PR 评审瓶颈，多个 S1 待修 |
| **NanoBot** | 更新 6（关闭 5 / 开放 1） | 更新 54（合并关闭 44 / 待合并 10） | 无 | 高吞吐低风险收敛期；WebUI 修复为主，路线图信号偏弱 |
| **CoPaw** | 更新 26（活跃 21 / 关闭 5） | 更新 34（待合并 23 / 合并关闭 11） | 无（2.3.1b2 版本 PR 已关闭） | 报障多、合入少；前端渲染 + 重试容错 + 安全 fail-open 三簇，修复供给落后 |
| **NanoClaw** | 更新 3（新开 2 / 关闭 1） | 更新 17（待合并 10 / 合并关闭 7） | 无 | 中等偏上；挂载只读缺陷闭合，跨月 PR 与缺 release 节奏是隐忧 |
| **LobsterAI** | 新开 1（1 评论） | 更新 15（合并关闭 13 / 待合并 2） | 无 | 健康度良好；DSH 迁移回归集中清算并全部闭环，存在单点贡献者风险 |
| **PicoClaw** | 0 | 5 条 CLOSED，0 待合并 | 无 | 活跃偏低，清理积压型工作日；多智能体框架 #423 以关闭收尾 |
| **NullClaw** | 0 | 2 条 OPEN（#1094/#1095） | 无 | 低讨论、稳步修整；MCP 引用计数修复待评审 |
| **ZeptoClaw** | 0 | 2 条（1 关闭 / 1 新开，均 Dependabot） | 无 | 低噪音维护日，仅依赖升级 |
| **IronClaw / TinyClaw / Moltis** | 0 | 0 | 无 | 24 小时无活动 |

> 注：表中数据均取自各项目日报；OpenClaw 展示上限为评论 Top 30 / PR Top 20，实际总量均为 500。

## 3. OpenClaw 在生态中的定位

**规模对比**：OpenClaw 单日 Issue/PR 更新各 500 条，是 Hermes Agent（各 50）、ZeroClaw（31/50）的一个数量级以上，NanoBot、CoPaw 等腰部项目（数十条）更不在同一量级。它是生态的事实参照系——多个项目（LobsterAI、NanoBot、PicoClaw 等命名同源的 “Claw” 系列）在同一命名谱系下演化，LobsterAI 甚至明确以 “OpenClaw → DSH” 迁移为当前主线。

**优势**：
- **发布工程最成熟**：唯一在同日发布 2 个 beta 并明确聚焦“更新恢复”能力的项目，覆盖跨 schema 变更与机器重启场景。
- **议题深度最高**：prompt cache 失效（#182891，27 评论）、持久会话前缀重写（#143017，附 21.3M 缓存写入 token 的量化复现）等属生产级成本问题，社区能给出可复现证据。
- **议题覆盖面最广**：从 P0 发布阻断（#201468）、UI 卡死（#196820）到企业 IM 集成（Slack/Teams/Discord）、MCP OAuth、A2A 一致性，覆盖面远超同类。

**技术路线差异**：OpenClaw 走“核心 + 插件/多渠道 + 更新恢复”的重工程路线，强调可恢复的包/源码更新、Gateway 可用性与快车道发布审批（#204520）；而 Hermes 侧重 delegate_task 与 credential-pool 的凭据生命周期，ZeroClaw 侧重配置系统 V5 重构与安全作用域。

**主要短板**：产品决策吞吐是瓶颈，大量 P1/P2 长期 `stale` + `needs-product-decision`（#55792、#161403、#150238 等），与 Hermes 类似的“流入 > 消化”结构性问题。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **更新/重启后的可恢复性** | OpenClaw、Hermes、LobsterAI | OpenClaw beta 专攻跨 schema/重启更新恢复（#200273 等）；Hermes 网关重启后 FIFO 卡死（#157169）、SIGTERM 孤儿进程（#140162）、进程被杀后重复执行（#159438）；LobsterAI 升级首次启动挂起 38 分钟（#3168） |
| **上下文与 token 成本效率** | OpenClaw、CoPaw、NanoBot | OpenClaw prompt cache 零复用（#182891）与 21.3M 缓存写入（#143017）；CoPaw prompt cache 参数 PR（#8061）与上下文计量（#8057）；NanoBot `/status` 上下文百分比失真（#6774） |
| **多智能体委派可靠性** | OpenClaw、PicoClaw、CoPaw | OpenClaw Codex helper 无法恢复父会话（#196199）、`session writer claim changed`；PicoClaw 多智能体协作 + 共享上下文框架（#423，WIP 后关闭）；CoPaw 插件 SDK 1.2 + ACP 会话配置统一（#8764/#8586） |
| **MCP 生态接入与鉴权标准化** | OpenClaw、LobsterAI、NanoBot、NullClaw、ZeroClaw | OpenClaw MCP OAuth 预注册客户端（#116052）、MCP 事件驱动（#166586）；LobsterAI 百度爱企查请求 OAuth + DCR（#3163）、MCP 已安装 vs 已连接区分（#3173）；NanoBot 托管 MCP 预设（#6705）；NullClaw 共享 McpServer 引用计数（#1095）；ZeroClaw 凭证作用域 RFC（#12422） |
| **安全边界/权限最小化** | ZeroClaw、CoPaw、NanoClaw、NanoBot | ZeroClaw 操作员托管凭证不暴露明文（#12422，16 评论）、浏览器工具 16/100+ 命令（#9945）；CoPaw 安全 fail-open（#8880）、租户隔离（#8881）、沙箱出口策略（#8878）；NanoClaw 挂载静默只读（#3690）；NanoBot 递归 rm 拦截过宽（#5005） |
| **渠道/IM 集成一致性** | OpenClaw、LobsterAI、ZeroClaw、NullClaw、CoPaw | OpenClaw Slack `unknown_after_send`、Discord Components V2（#165615）；LobsterAI 新增 POPO 通道（#3160）、企微直连恢复（#3169）；ZeroClaw Telegram 语音阻塞（#12597）、WhatsApp 提及（#10976）、Matrix 线程（#12558）；NullClaw Telegram Markdown 表格（#1094）；CoPaw Discord 代码围栏重复（#8870） |
| **前端/长会话可用性** | CoPaw、NanoBot、NanoClaw、LobsterAI | CoPaw 窄屏剪裁、表格溢出、iOS WebKit 卡死（#8811/#8845/#8852）、会话回跳（#8888）；NanoBot 附件+流式回答被吞（#6764）、会话管理重构（#6761）；NanoClaw CLI 参数解析（#4555）；LobsterAI 侧边栏与权限确认迭代 |

**共性结论**：“可恢复性”与“成本可见性”是两条贯穿全生态的主线——用户能接受失败，但不能接受*静默*失败（静默丢弃、静默降级、静默重跑、静默只读）。

## 5. 差异化定位分析

| 维度 | 代表项目 | 特征 |
|---|---|---|
| **通用型全能助手** | OpenClaw | 多渠道 + MCP/A2A + 插件 + 更新恢复，面向广泛个人与团队场景，工程最重 |
| **自主委派/凭据密集型** | Hermes Agent | delegate_task、credential-pool、cron 定时任务，面向无人值守/运维自动化，异常恢复是信任核心 |
| **配置与安全治理型** | ZeroClaw | 配置系统 V5 重构、凭证作用域、浏览器工具扩展，面向安全敏感与边缘部署（Termux） |
| **协议/连接器型** | NullClaw、PicoClaw | 聚焦 MCP 资源管理与渠道渲染、多智能体协作地基，模块化、体量小，偏基础设施 |
| **桌面/UI 体验型** | NanoBot、NanoClaw、LobsterAI、CoPaw | WebUI 信息架构、IM 通道矩阵（LobsterAI 六通道）、Console 渲染与长会话体验是主战场 |
| **多模态/创作型** | CoPaw | Creator 插件（评审、媒体、FFmpeg）、语音转写、记忆与沙箱，面向创作与长内容工作流 |
| **轻量容器化** | ZeptoClaw | Rust 基础镜像维护为主，几乎无社区互动 |

**技术架构差异**：OpenClaw/Hermes/ZeroClaw 以 Rust/TypeScript 为主、走“Gateway + 渠道适配器 + agent loop”架构；LobsterAI 为 Electron 桌面端 + DSH 迁移；CoPaw 为 Python + Console 前端 + 插件 SDK；NanoClaw 强调容器 group 级隔离（`docker inspect`、`/workspace/extra`）与 agent 镜像刷新。**目标用户**从个人开发者（NullClaw/PicoClaw）到企业运维（Hermes/ZeroClaw）、再到桌面办公用户（LobsterAI/NanoBot）分层清晰。

## 6. 社区热度与成熟度

**第一层 · 快速迭代 + 规模领先**：OpenClaw（500/500）、Hermes Agent（50/50）。两者均已进入“功能基本齐备、可靠性攻坚”阶段，但 Hermes 积压消化速度明显低于流入（45 vs 5），风险更高；OpenClaw 吞吐稳定但决策闭环慢。

**第二层 · 高活跃、局部攻坚**：ZeroClaw（31/50，4 个 S1 相关议题）、NanoBot（6/54，快速合并关闭）、CoPaw（26/34，报障 > 修复）、NanoClaw（3/17）、LobsterAI（1/15，修复全闭环）。**质量巩固**特征最明显的是 NanoBot（WebUI 重构 #6778、空回复语义 #6773）与 LobsterAI（迁移回归集中清算）。

**第三层 · 低活跃维护/静默**：PicoClaw（清理积压、#423 关闭）、NullClaw（2 条待评审）、ZeptoClaw（仅 Dependabot）、IronClaw/TinyClaw/Moltis（无活动）。

**成熟度判断**：仅 OpenClaw 与 Hermes 具备稳定发布节奏（beta/稳定版）；多数项目缺 release 节奏，属“持续合并但不发版”的开发态，对下游使用者（如 PicoClaw 的 nuestraai fork）造成同步成本。

## 7. 值得关注的趋势信号

1. **“可恢复性”成为智能体的一等公民**：OpenClaw 用两个 beta 专攻中断更新恢复，Hermes 与 LobsterAI 的痛点集中在重启/进程被杀/升级路径。**对开发者的启示**：应在架构层面设计幂等执行、有界清扫、跨 schema 更新回滚，而非事后修补。

2. **静默失败是最伤信任的缺陷类型**：NanoClaw `add-mount` 静默只读（#3690）、CoPaw 记忆静默回退（#8867）、Hermes 静默重跑命令（#159438）、OpenClaw 消息静默丢弃（#55792）。**启示**：错误必须结构化、可观测、可归因（NanoClaw 的 `{provider, kind}` 窄信号、NanoBot 空回复失败语义是正面范式）。

3. **token 成本与上下文效率进入“生产级量化”阶段**：OpenClaw 出现 21.3M 缓存写入的实测复现，NanoBot/CoPaw 关注计量准确性。**启示**：prompt cache 前缀稳定性、per-request 用量数据源统一应作为核心指标纳入 CI。

4. **MCP 生态从“能连”走向“鉴权标准化 + 状态可见”**：OAuth/DCR（LobsterAI #3163、OpenClaw #116052）、“已安装 vs 已连接”区分（LobsterAI #3173）、引用计数（NullClaw #1095）、凭证作用域（ZeroClaw #12422）共同指向**第三方 MCP 接入的工程化门槛**。**启示**：MCP 接入将像 OAuth 一样成为平台基础设施，需提前规划。

5. **多智能体委派的可靠性是最真实的使用阻塞**：Codex helper 父会话恢复失败、session writer 冲突、共享上下文池（PicoClaw #423）——协作已在真实工作流中使用，失败直接中断任务。**启示**：委派链路需要独立的可观测性与恢复语义，不能依附单 agent 假设。

6. **产品决策吞吐成为规模化的隐性瓶颈**：OpenClaw、Hermes、ZeroClaw 均出现“复现充分但卡在 needs-product-decision”的结构。**启示**：当 Issue 流入达到数百/日级别，triage 与决策 SLA 比增加贡献者更能决定项目速度；建议建立“成本相关 + 委派可靠性”两条优先裁决线。

7. **移动端/边缘平台支持仍是短板**：CoPaw iOS WebKit 卡死、ZeroClaw Termux 阻塞（已修复）、NanoBot Android 通知 QoL——长会话 + 窄屏场景的系统性不足，是下一阶段用户增长的关键风险面。

8. **单点贡献者与评审带宽风险**：LobsterAI 六条关键修复出自同一人，NanoBot 多数 PR 出自 chengyongru，CoPaw 多个 XXXL PR 长期待审，ZeroClaw 44 条待合并含 XL 堆叠依赖。**启示**：合并带宽与贡献者集中度是维持高迭代节奏的实质约束。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-24

## 1. 今日速览

今日项目维持高强度开发节奏：24 小时内 54 条 PR 更新，其中 44 条合并/关闭、10 条待合并，另有 6 条 Issue 更新（5 条关闭、1 条保持开放），无新版本发布。变动集中在 WebUI 交互细节修复（chengyongru 一人贡献了绝大多数 PR）与 `/status` 上下文统计准确性。整体属于"高吞吐、低风险"的收敛阶段——大量 P2 级 UI/回归修复被快速关闭，而非新增大型能力；唯一仍开放的 Issue 是已搁置 9 天的 P2 渲染问题，需留意。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并的 PR 主要推进三条主线：

- **状态与计量准确性**：PR #6779（Closes #6774）修正 `/status` 上下文百分比，改为读取既有 per-request 用量与窗口记录，并与 WebUI 计量器数据源统一，不新增元数据写入或改动 agent loop。这是本次唯一有明确关联 Issue 的修复闭环。
- **空回复的失败语义**：PR #6773 将"模型结束但无最终答案"从写入英文兜底文本并报成功，改为记录为结构化失败回合，并区分确认的输出上限与一般空回复，提升可观测性与错误归因能力。
- **WebUI 一致性与可维护性**：PR #6778 将 2,266 行的 `globals.css` 拆分为 119 行入口 + 按功能归属的样式文件；#6772 消除子代理历史刷新时的跳动画；#6777/#6776 修复桌面端回复操作行换行与对齐回归；#6775 阻止预设草稿污染历史并确认命令送达；#6780 修复新输入时区偏移丢失。
- **安全相关**：PR #5005（原创建于 2026-07-20，今日关闭）以目标感知的守卫替换对递归 `rm` 的一刀切子串拦截，允许对静态具名 `/tmp/<name>` 目标的清理，同时保留对宽泛动态删除的拦截。

推进幅度评估：今日以"稳"为主，无路线图级新功能落地；WebUI 重构（#6778）与空回复语义（#6773）对长期可维护性有实质价值。

## 4. 社区热点

今日数据中所有 Issue/PR 的 👍 均为 0，评论数多为 0 或未提供，**不存在真正意义上的高讨论热度条目**。可关注的三条开放 PR（均为 11-24/11-23 提交，处于待评审状态）：

- PR #6783 [OPEN] `fix(webui): keep subagent message actions inside the detail panel` — 窄子代理详情面板中 Message actions 弹层错误铺满整窗（1440px 遮罩 vs 512px 面板）
- PR #6761 [OPEN] `feat(webui): redesign session management with Mission Control, Live Pulse bar, and Active Drawer` — 纯前端重构会话管理，替代 272px  cramped 侧栏，以匹配多项目、并发 agent 运行时
- PR #6782 [OPEN] `fix(webui): distinguish Undo from the toast title` — Undo 按钮字重/颜色与会话标题同质，中英混排下间距异常

分析：诉求集中在"WebUI 在高信息密度、多 agent 场景下视觉层级与布局约束"，#6761 是其中体量最大、最值得评审者优先投入的一条。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 | Fix PR |
|---|---|---|---|
| P1（安全） | PR #5005 `fix(exec)` 递归 `rm` 拦截规则过宽，影响测试/构建脚本清理 `/tmp` | 已关闭 | 自身即修复 |
| P2 | Issue #6774 `/status` 在预估不可用时把整回合累计输入当作上下文 | 已关闭 | #6779（已关闭） |
| P2 | Issue #6673 实时缓冲区文本被工具调用分隔 | **仍 OPEN** | 无 |
| P2 | Issue #6764 同一回合内附件后紧跟流式回答时，WebUI 丢弃后续回答 | 已关闭 | 未见关联 PR |
| P2 | PR #6773 空最终回复被写入兜底文本并报成功 | 已关闭 | 自身即修复 |
| P2 | PR #6777/#6776 桌面回复操作行换行、触发回复与普通回复不对齐（回归） | 已关闭 | 自身即修复 |
| P2 | PR #6780 新输入时区偏移未保留，跨网关回填时计时含时差 | 已关闭 | 自身即修复 |

注意：#6673 自 2026-11-15 创建、今日仅有更新而无评论与修复，是当前唯一持续开放的 Bug。

## 6. 功能请求与路线图信号

- **第三方 provider / 网关接入**：Issue #6765 请求内置 bf16.ai 作为"无审查"LLM 网关 provider，动机是无人值守 agent 流程中主流托管 API 产生误拒；#6705 请求将 AI/ML API 官方托管 MCP server 加入 MCP 预设列表。两者均已关闭，未见对应合入 PR，短期纳入下一版本证据不足。
- **合规/审计能力**：Issue #6742 由 cursor[bot] 提交 Screwtape.ai `agent_fleet_compliance`，面向需对外部工具付费的多 agent 运营方（卖家风险筛查 + 可导出支出审计）。已关闭。
- **会话管理重构**：PR #6761 是唯一明确指向下一版本体验升级的开放功能 PR，若被接收将改变 WebUI 信息架构。

结论：今日无任何功能请求获得合入 PR 佐证，路线图信号偏弱；#6761 与 #6783 的评审结果是近期最值得跟踪的决策点。

## 7. 用户反馈摘要

从摘要可提炼的真实痛点与场景：

- **无人值守/多步工具链场景**：主流托管 API 的"误拒"打断 agent 例行任务（#6765），反映用户在自动化与 IM 群工作流中对输出稳定性的强需求。
- **上下文与用量可见性不可信**：`/status` 的上下文数字与实际不符（#6774），用户在意 token/上下文计量的准确性而非仅是展示。
- **WebUI 信息丢失**：附件+流式回答同回合时回答被吞（#6764）、子代理面板动画跳动（#6772）、操作控件错位（#6783/#6782/#6777），显示高频使用者在密集交互下的体验摩擦。
- **生态接入成本**：希望免手动输入 URL 即可连接托管 MCP（#6705），体现降低配置门槛的诉求。

未发现明确的满意/不满意表态或评论内容，以上均基于 Issue/PR 描述文本。

## 8. 待处理积压

- **Issue #6673**（2026-11-15 创建，今日更新，0 评论）：实时缓冲区文本被工具调用分隔，P2 渲染问题，已搁置 9 天且无 fix PR，建议维护者确认复现与优先级。
- **PR #5005**（2026-07-20 创建，今日关闭）：安全相关修复滞留约 4 个月才关闭，且标签含 `conflict`，提示执行层安全策略的评审周期偏长，后续同类改动宜设定更短 SLA。
- **PR #6761 / #6783 / #6782**（OPEN）：WebUI 会话管理重构与两处布局修复待评审，其中 #6761 体量较大，建议尽早给出接受/搁置结论以避免与后续 WebUI 改动冲突。

---
数据来源：HKUDS/nanobot 2026-11-24 GitHub Issues/PR 快照。文中所有条目、日期、编号与指标均取自所给材料，未补充外部信息。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-24

## 1. 今日速览

项目今日保持高强度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 45、关闭 5），PR 更新 50 条（待合并 45、合并/关闭 5），另有 2 个版本发布。发布节奏显示 v0.23.4 补丁版打包了自 v0.23.3 以来合并的约 229 个 PR，说明此前积累的大量工作已进入稳定化阶段，完整整理版说明将随 v0.24.0 发布。今日 PR 流以维护者发起的 “salvage” 系列与 credential-pool 修复为主，反映出对积压修复的收尾和对认证/凭据稳定性的集中攻坚。整体健康度评估：**活跃度极高，合并/关闭吞吐低于新增量，积压压力持续上升**。

## 2. 版本发布

**v0.23.4（稳定版，2026-11-23）**
- 补丁版本，将 v0.23.3 以来合并的约 229 个 PR 汇总为稳定发布，覆盖 GitHub release 渠道（CLI 与安装器）、Microsoft Store 应用、Docker 与 Hermes Cloud。
- 该窗口的完整整理版更新说明将随 v0.24.0 提供；本次 release 说明未列出具体条目、破坏性变更或迁移注意事项。

**canary.20261124T064706Z-v0.23.3（金丝雀版，2026-11-24）**
- 基于 v0.23.3 的每日构建，提供 Hermes Desktop 等下载（材料中仅可见 macOS Apple Silicon DMG 链接片段）。
- 属预发布通道，未提供变更说明。

链接：
- https://github.com/NousResearch/hermes-agent/releases
- Issue/PR 参考：https://github.com/NousResearch/hermes-agent

## 3. 项目进展

今日统计到的 5 条已合并/关闭 PR 中，材料明确可确认关闭的为：
- **#54401 [CLOSED] nix: ship optional-skills/ and set HERMES_OPTIONAL_SKILLS**（作者 khmm12，创建于 2026-06-28）— 修复 nix `installPhase` 只复制 `skills/`、`plugins/`、`locales/`、`web_dist/` 而未复制 `optional-skills/`、也未设置 `HERMES_OPTIONAL_SKILLS` 的打包缺口。链接：https://github.com/NousResearch/hermes-agent/pull/54401

此外，v0.23.4 将约 229 个已合并 PR 打包进稳定版，是本周期内最大的进展信号；其余 4 条合并/关闭 PR 未在材料中列出，无法逐条确认。

维护者 teknium1 在 11-24 集中提交了一批 “salvage” PR（#159571、#159569、#159568、#159575、#159566、#159574），把此前搁置的修复重新落地，涉及 cron 运行语义、ComfyUI 重复提交、uv 下载并发/重试、profile 符号链接导入、todo 子任务循环清理、单行输出截断等——这批尚未合并，但显示项目正在主动清理历史修复债务。链接：https://github.com/NousResearch/hermes-agent/pull/159571

## 4. 社区热点

| 条目 | 评论 | 类型 | 链接 |
|---|---|---|---|
| #131786 gateway 对长单行 JSON 的补全尾部丢弃全部有效输出 | 10 | Bug | https://github.com/NousResearch/hermes-agent/issues/131786 |
| #127731 高频 cron 主机上自动更新前备份总被跳过 | 7 | Bug | https://github.com/NousResearch/hermes-agent/issues/127731 |
| #107998 1Password 浏览器保险库解锁失败 “no session token” | 7 | Bug | https://github.com/NousResearch/hermes-agent/issues/107998 |
| #159438 gateway 中途死亡后恢复会话不再显示该调用，模型重跑命令 | 6 | Bug | https://github.com/NousResearch/hermes-agent/issues/159438 |
| #118285 Provider scopes：同一 provider 多个命名凭据 | 5 | Feature | https://github.com/NousResearch/hermes-agent/issues/118285 |

**诉求分析**：
- **网关输出可靠性是最大焦点**：#131786 与 #152075 指向同一处代码（`gateway/run_notifications.py` 的 `_LIMIT = 2000` 截断逻辑）——长单行 JSON 被截断后报 “showing last 0 chars” 并丢弃全部结果，影响 bot DM 回复等场景。已有对应修复 PR #159574 待合并。
- **会话状态一致性**：#159438、#157169、#142288 分别涉及进程被杀后调用记录丢失导致重复执行、重启后会话 FIFO 永久卡死、原生视觉图像仅存活一轮。三者都指向“会话/执行状态在异常路径下不可恢复”。
- **凭据管理是产品级痛点**：#118285 的 provider scopes 需求与今日多个 credential-pool PR 相呼应，说明多凭据切换已是真实使用模式。
- **平台适配不稳**：#159490 显示 Telegram 适配器每轮都出现 20 秒超时 + 32 秒 Flood control，属于周期性失败而非偶发。

## 5. Bug 与稳定性

按严重程度排序（P1 最高）：

**P1**
- 未见今日新开 P1 Bug；但待合并 PR #159516（P1，credential-pool：达到刷新上限的 OAuth 行改为轮换而非失败调用）针对 #138337 根因 3，涉及 token 被撤销影响其他 `delegate_task` 持有者，**已有 fix PR**。链接：https://github.com/NousResearch/hermes-agent/pull/159516

**P2 — 网关/会话（最密集区域）**
- #159438 gateway 中途被杀后恢复会话丢失终端调用记录，模型重复执行命令（新开于今日，评论 6）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/159438
- #157169 网关重启后会话 FIFO 永久 wedged，`_claim_next` 持续抛 `unknown_execution`（更新于今日）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/157169
- #131786 / #152075 单行输出补全被截断丢失 — **已有 fix PR #159574**。https://github.com/NousResearch/hermes-agent/pull/159574
- #140162 SIGTERM 关闭时挂在孤儿工具子进程上，缺少有界子进程清扫 — 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/140162
- #142288 原生视觉图像一轮后从历史中丢失 — 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/142288
- #159567 网关启动时冻结大部分配置（busy_input_mode、全部 terminal.*、超时、auxiliary 等），改设置需整网关重启并杀掉全部活跃会话（新开）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/159567
- #159490 Telegram 适配器每轮：第 1 次连接 20 秒超时，第 2 次遇 Flood control 32 秒（新开）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/159490

**P2 — 其他**
- #127731 高频 cron 主机上更新前备份总被判定 incompatible（7 评论，长期未解）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/127731
- #107998 1Password 解锁失败（7 评论，长期未解）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/107998
- #79853 macOS 高资源占用 + 跨会话消息混流（自 v0.20.0 起，标记 needs-repro）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/79853
- #143222 Kanban dashboard `/dispatch` 绕过 `max_in_progress` 上限（并发控制失效）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/143222
- #139795 `/model` 选择器在 auth.json 写入后丢失 live-only 模型（凭据指纹含 mtime）— 无 fix PR。https://github.com/NousResearch/hermes-agent/issues/139795
- #149830 profile 导出写入符号链接成员，导入端拒绝 — **已有 fix PR #159575**。https://github.com/NousResearch/hermes-agent/pull/159575
- #159541 从 `/.well-known/skills/` 之外的知名索引安装的技能永远无法检查或更新 — 今日已关闭。https://github.com/NousResearch/hermes-agent/issues/159541

**P3**
- #159565 支持 Agent Skills discovery 0.2.0 索引（`/.well-known/agent-skills/index.json`）— 今日已关闭。https://github.com/NousResearch/hermes-agent/issues/159565

## 6. 功能请求与路线图信号

- **Provider scopes（#118285，P2，needs-decision）**：同一 provider 端点以多个命名重复配置，支持个人/工作密钥切换。与今日 credential-pool 系列 PR（#159580、#159588、#159516）方向一致，**纳入下一版本的可能性较高**，但需先做设计决策。https://github.com/NousResearch/hermes-agent/issues/118285
- **Hermes 自主为未来事件安排帮助（PR #158289）**：模型可主动为航班、预约、截止日期、习惯创建定时任务，每次创建/修改前弹 “Schedule this job?” 确认卡。已是待合并 PR 且带 `ci-reviewed` 标记，**是 v0.24.0 的有力候选**。https://github.com/NousResearch/hermes-agent/pull/158289
- **桌面端 Settle / Snooze / Wake 生命周期（#88549，P3）**：为并行自主工作产生的大量会话提供注意力管理，建立在既有 Inbox 式侧栏（#84960、#85109）之上。**属于中期方向**。https://github.com/NousResearch/hermes-agent/issues/88549
- **内联标注 + 主回复双输入（#68769，P3）**：允许用户对助手回复中的词句附加类似 Word 批注的内联注释（创建于 2026-07-21，已积压数月）。https://github.com/NousResearch/hermes-agent/issues/68769

## 7. 用户反馈摘要

- **长内容/结构化输出是高频真实场景**：用户在多台平台（Discord、bot 模式 DM、单行 API 结果）遇到补全信息被丢弃（#131786、#152075），说明后台进程输出常用于承载 JSON 回复。
- **运维自主性需求突出**：用户在高频 cron 主机、Docker 后端、Linux 无人值守服务器上运行 Hermes（#127731、#159567、#149830），对“改动需重启全局”和“备份/导出/导入不可靠”非常敏感。
- **凭据与安全边界体验粗糙**：1Password 集成（#107998）、OAuth 刷新上限（#159516）、auth.json 写入影响模型列表（#139795）三者共同表现为认证失败后缺乏优雅降级。
- **异常恢复是信任关键**：进程被杀（#159438）、网关重启（#157169）、SIGTERM（#140162）等异常路径下，用户最不能接受的是“模型静默重跑已执行的命令”和“会话永久卡死”。
- **平台适配稳定性待提升**：Telegram 适配器出现可复现的周期性超时与限流（#159490）。
- **积极信号**：技能发现/安装的两条问题（#159541、#159565）在提出当日即关闭，说明技能生态相关反馈响应较快。

## 8. 待处理积压

- **#79853（2026-08-06 起，P2，needs-repro）**：macOS 高资源占用 + 跨会话消息混流，已持续超三个半月且缺少复现，建议维护者补充复现指引或降级归档。https://github.com/NousResearch/hermes-agent/issues/79853
- **#68769（2026-07-21 起，P3）**：桌面端内联标注功能请求，积压约四个月，建议给出明确接受/拒绝结论。https://github.com/NousResearch/hermes-agent/issues/68769
- **#107998（2026-09-11 起，P2，安全边界）**：1Password 解锁失败，7 条评论仍无 fix PR，涉及凭据访问，建议优先排期。https://github.com/NousResearch/hermes-agent/issues/107998
- **#127731（2026-09-29 起，P2，兼容性）**：更新前备份在高频 cron 主机上必然失败，属安装/更新主路径风险。https://github.com/NousResearch/hermes-agent/issues/127731
- **#118285（2026-09-21 起，P2，needs-decision）**：provider scopes 需求，需产品决策，与当前凭据重构同源，建议合并考虑。https://github.com/NousResearch/hermes-agent/issues/118285
- **比例观察**：今日待合并 PR 45 条 vs 合并/关闭 5 条，新增 Issue 45 条 vs 关闭 5 条，积压消化速度明显低于流入速度，建议维护者关注合并带宽与 triage 节奏。

---
*说明：本日报仅基于所提供的 GitHub 数据生成；未在材料中出现的合并/关闭 PR、P1 级新开 Issue 及 release 具体变更条目均未作推断。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-24）

## 1. 今日速览

今日 PicoClaw 无新 Issue、无新版本发布，Issue 通道零新增零关闭；PR 侧有 5 条状态转为 CLOSED，全部为历史积压的合并、关闭或工作流调整，无待合并 PR。整体活跃度偏低，属于“清理积压”型工作日，而非功能交付日。值得关注的是多智能体协作框架（#423）、上游同步（#2810）、WebSocket 认证修复（#2363）三项工作均以关闭收尾，表明项目在维护节奏上偏向收敛存量工作。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无“新合并”的显著功能交付，5 条 PR 均为 CLOSED 状态且更新于 11-23/11-24，主要体现为存量工作的收口：

- **PR #2363 [CLOSED] 修复 WebSocket 认证并统一 Header 大小写**：属 channel 域 Bug 修复，标注“Mostly AI-generated（AI 草稿 + 人工核验）”。修复认证与协议头规范问题，对渠道接入稳定性有正面意义。
  https://github.com/sipeed/picoclaw/pull/2363
- **PR #2810 [CLOSED] 同步上游 upstream/main（约 1095 commits）+ 前向移植定制**：一次大规模上游同步，涉及上游重构后的目录调整（agent 循环拆分为 `agent_*.go`、工具重组），并前向移植 6 个定制提交。该类同步工作对下游 fork 的可持续性至关重要。
  https://github.com/sipeed/picoclaw/pull/2810
- **PR #1546 [CLOSED] 合并 #1480 #1479 #1478 #1473 #1467 的修复**：将 5 个开放 PR 的修复打包合并，属清淤式提交。
  https://github.com/sipeed/picoclaw/pull/1546
- **PR #423 [CLOSED] WIP 多智能体协作基础框架与共享上下文**：基于已合并的 #213（provider 协议重构）与 #131（模型回退链 + 多 agent）构建，包含共享上下文池、agent 交接与发现工具。标注 WIP，关闭状态需结合后续讨论判断是否为暂缓。
  https://github.com/sipeed/picoclaw/pull/423
- **PR #2516 [CLOSED] CI：停用 sync-rebase 定时触发**：移除 `0 0 * * *` 每日 cron，仅保留 `workflow_dispatch` 手动触发。纯 CI 配置变更，不影响代码。
  https://github.com/sipeed/picoclaw/pull/2516

**整体推进评估**：项目向前推进幅度有限且集中在上游对齐、修复整合与 CI 治理层面；核心新能力（多智能体协作）状态由 OPEN 转为 CLOSED，未体现为正式合入。

## 4. 社区热点

今日数据中所有 PR 的评论数与点赞数均未提供有效值（评论显示为 undefined，👍 均为 0），无可量化的讨论热度。从时间跨度看，最受关注的是：

- **PR #423 多智能体协作框架**（创建于 2026-02-18，更新于 11-23，跨度约 9 个月）——长期 WIP，反映社区对多 agent 协作与共享上下文能力的持续诉求。
  https://github.com/sipeed/picoclaw/pull/423
- **PR #2810 上游同步**（创建于 2026-05-07，更新于 11-23，约 6 个多月）——反映下游使用者（nuestraai）维持 fork 同步的强烈需求，以及上游重构对下游带来的移植成本。
  https://github.com/sipeed/picoclaw/pull/2810

## 5. Bug 与稳定性

今日无新报告的 Bug 或崩溃（Issues 更新为 0）。存量 Bug 修复一条：

- **PR #2363（channel 域，WebSocket 认证 + Header 大小写规范化）**——非破坏性修复，已 CLOSED，含 fix。
  https://github.com/sipeed/picoclaw/pull/2363

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。结合 PR 判断可能影响后续版本方向的信号：

- **多智能体协作与共享上下文（#423）**：虽为 WIP 且已关闭，但其依赖的 #213、#131 已合并，模块化地基已具备，后续是否重开或拆分推进值得关注。
  https://github.com/sipeed/picoclaw/pull/423
- **上游结构重构的下游兼容性（#2810）**：agent 循环拆分为 `agent_*.go`、工具重组，提示近期版本可能存在内部结构变动，下游定制需重新适配。
  https://github.com/sipeed/picoclaw/pull/2810

## 7. 用户反馈摘要

今日无 Issue 评论可供提炼，缺少直接用户反馈数据。间接信号：下游使用者（nuestraai）投入大量工作同步上游并前向移植 6 个定制提交，说明存在“基于 PicoClaw 做定制化部署”的真实使用场景，同时对上游结构变更的适配成本较为敏感。

## 8. 待处理积压

- **PR #423**：创建于 2026-02-18，长期 WIP，约 9 个月后以关闭收尾，建议维护者明确其后续归属（拆分、重开或归档），避免社区重复投入。
  https://github.com/sipeed/picoclaw/pull/423
- **PR #2810**：创建于 2026-05-07，上游同步跨度约 6 个月、约 1095 commits，积压规模较大，建议建立定期同步节奏。
  https://github.com/sipeed/picoclaw/pull/2810
- **PR #1546**：将 5 个修复 PR 打包合并，侧面反映该批修复此前长期滞留未合；建议排查 #1480 #1479 #1478 #1473 #1467 是否存在同源积压原因。
  https://github.com/sipeed/picoclaw/pull/1546

> 数据说明：本期数据中 PR 评论数与点赞数缺失/为空，社区热度相关判断仅基于时间跨度与内容，非互动指标。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-11-24

## 1. 今日速览

今日 NanoClaw 无新版本发布，但 PR 流转明显活跃：过去 24 小时 17 条 PR 更新（待合并 10、已合并/关闭 7），Issues 更新 3 条（新开 2、关闭 1）。最值得关注的是长期悬而未决的 `add-mount` 只读缺陷形成"Issue 关闭 + 多条修复 PR 收敛"的闭合态势。待合并队列中仍以核心团队成员提交的修复与技能类 PR 为主，另有两张由 bot 自动生成的 agent 镜像刷新 PR 等待合入。整体健康度：**中等偏上**——修复类贡献充沛，但待合并积压（尤其跨月 PR）与缺乏 release 节奏是主要隐忧。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日关闭/合并的 7 条 PR 中，核心推进集中在三处：

- **容器挂载可写化收敛**：`#4469`（DragonBe，Fix 容器挂载点可写，关联 bug #4150）与 `#3149`（winjer，为 `groups config add-mount` 增加 `--rw` 标志）于今日关闭，配合 Issue `#3690` 的关闭，说明挂载只读问题已由维护者选定方案落地。链接：[#4469](https://github.com/qwibitai/nanoclaw/pull/4469)、[#3149](https://github.com/qwibitai/nanoclaw/pull/3149)
- **安全默认值修正**：`#4376`（glifocat，core-team）将 setup 中"接收安全与项目更新邮件"的默认选项由 Yes 改为 No，避免用户直接回车即被订阅。链接：[#4376](https://github.com/qwibitai/nanoclaw/pull/4376)
- **provider 错误信号结构化**：`#4151`（pedromoraes）关闭，Codex 认证过期现在带有 `{ provider: "codex", kind: "auth_expired" }` 窄信号，供 Argus 做账号故障转移。链接：[#4151](https://github.com/qwibitai/nanoclaw/pull/4151)

另 `#3196`（teran13，add-mount readonly）与 `#2500`（alon-z，`/add-early-compact-nudge` 技能）今日关闭，后者未说明是否合入。整体看，项目在**容器安全边界**与**安装体验**两条线上各前进了一步。

## 4. 社区热点

今日数据中所有 Issues/PR 的评论数与 👍 均为 0 或未给出，**不存在真正意义上的讨论热点**。相对而言，关注度最高的是围绕同一缺陷形成的簇：

- Issue `#3690`（hadarbas，已关闭）：`add-mount` 静默只读。链接：[#3690](https://github.com/qwibitai/nanoclaw/issues/3690)
- 三条修复 PR 同日收敛：`#4469`、`#3742`（slambert，指出 `--ro` 本身也是 no-op）、`#3149`。链接：[#3742](https://github.com/qwibitai/nanoclaw/pull/3742)

**诉求分析**：用户真正不满的不只是"只读"，而是 CLI 在参数语义上**静默失败**——既不报错也不提示。`#3742` 的摘要还揭示了 Issue 未提及的另一半问题，说明该缺陷的暴露面比原始报告更广。社区当前的主要诉求是"CLI 行为应显式、可预期"。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 中高 | **`#3690`** `ncl groups config add-mount` 静默只读，容器内挂载出现在 `/workspace/extra/data` 但 `docker inspect` 显示 `RW=false` | 已关闭 | 已有（#4469 / #3149 / #3742 关联修复） |
| 中 | **`#4555`** `ncl` 不识别 `--name=value` 写法；`src/cli/parse-argv.ts:24-33` 将 `--` 后全部内容当作 key，`--rebuild=true` 被误解析（影响版本 53099d28，macOS） | 新开，triage/unresolved | 暂无 |
| 中 | **`#4552`** `channels` 分支自有 `package.json`/lockfile 可能与 skills 固定的版本漂移，且无任何检查拦截 | 新开，triage/unresolved | 暂无 |
| 待确认 | **`#4553`** `add-anydoc` 固定的 0.1.6 所依赖 `zip` crate 含 critical CVE，待升级至 0.2.5 | PR 待合并 | 已有（#4553） |

`#4555` 与 `#3690` 属同类问题：**CLI 参数解析缺乏严格性**，建议维护者将其作为一组统一处理。

## 6. 功能请求与路线图信号

- **新 provider 技能**：`#4442`（kennethleungty）新增 `/add-antigravity`，通过 Google Antigravity CLI（`agy`）与 Gemini 模型运行 agent group，支持 `ncl groups config update --provider antigravity` 按组切换。跨容器、provider、安装等多领域标签，是本期最完整的特性 PR。链接：[#4442](https://github.com/qwibitai/nanoclaw/pull/4442)
- **安装流程随克隆分支走**：`#4084`（glifocat，core-team）让新安装跟随克隆来源分支的更新通道，不再询问、不移动 checkout。链接：[#4084](https://github.com/qwibitai/nanoclaw/pull/4084)
- **上下文压缩前提醒**：`#2500` 已关闭，`/add-early-compact-nudge` 技能是否纳入主线需维护者确认。链接：[#2500](https://github.com/qwibitai/nanoclaw/pull/2500)

**判断**：`#4442` 与 `#4084` 均有 core-team 或完整贡献规范背书，较可能进入下一版本；`#4553` 的安全升级应优先合入。

## 7. 用户反馈摘要

数据中 Issues 评论数均为 0，以下痛点直接提炼自 Issue 正文与复现步骤：

- **静默失败最伤信任**：`#3690` 的复现步骤只需两条命令，用户需 `docker inspect` 才发现挂载是只读的——CLI 没有给出任何警告。
- **参数写法不兼容**：`#4555` 报告者明确标注了受影响 commit 与宿主平台（macOS），并定位到具体源文件行号，是高质量的可修复报告，暗示有用户在日常脚本中大量使用 `--name=value` 形式。
- **版本漂移缺乏看护**：`#4552` 关注 `channels` 分支与 skills 固定版本之间无检查兜底，反映多分支/多包结构下用户对"装出来到底跑哪个版本"的不确定感。
- **真实使用场景**：从复现命令可见，用户在用 NanoClaw 管理**agent group 级别的容器挂载与重启**，属于偏生产化的用法，而非尝鲜。

## 8. 待处理积压

以下 PR 已开放数周至数月仍未合入，建议维护者给出明确结论（合入 / 关闭 / 需要补充）：

- **`#2500`**（alon-z）：创建于 2026-05-15，历时逾 6 个月，今日关闭但未说明结果。链接：[#2500](https://github.com/qwibitai/nanoclaw/pull/2500)
- **`#3196`**（teran13）：创建 2026-08-07，今日关闭。链接：[#3196](https://github.com/qwibitai/nanoclaw/pull/3196)
- **`#3742`**（slambert，triage/needs-author）：创建 2026-09-07，被标记需作者响应，但该 PR 补充了 `--ro` 为 no-op 的关键信息。链接：[#3742](https://github.com/qwibitai/nanoclaw/pull/3742)
- **`#3755`**（tchopoorian）：创建 2026-09-09，`agent-runner` 中 `processing_ack` 行无时间界限过滤导致待处理消息被永久遮蔽，属潜在长期累积缺陷。链接：[#3755](https://github.com/qwibitai/nanoclaw/pull/3755)
- **`#4084`**（glifocat，core-team）：创建 2026-10-13，逾 6 周未合。链接：[#4084](https://github.com/qwibitai/nanoclaw/pull/4084)
- **`#4166`**（glifocat，core-team）：创建 2026-10-21，`add-codex` 在 Codex 将自动重试的瞬时错误上过早失败回复。链接：[#4166](https://github.com/qwibitai/nanoclaw/pull/4166)
- **`#4467`**（foxsky）：创建 2026-11-18，关机前需 drain 主机 sweep，含 52 项测试的验证说明。链接：[#4467](https://github.com/qwibitai/nanoclaw/pull/4467)

另提醒：`#4556`、`#4554` 为 bot 自动生成的 agent 镜像刷新 PR，两者重复指向同一基版本 `v2026.11.0` 的不同 hardened 镜像时间戳（`20261123T2132` 与 `20261123T1629`），建议保留最新一张并关闭较早者，避免镜像引用歧义。链接：[#4556](https://github.com/qwibitai/nanoclaw/pull/4556)、[#4554](https://github.com/qwibitai/nanoclaw/pull/4554)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-11-24

## 1. 今日速览

过去 24 小时内，NullClaw 仓库没有新增 Issue，也没有 Issue 状态变更，社区讨论侧处于静默状态。PR 侧有 2 条更新，均为待合并状态（#1094、#1095），无合并或关闭记录，也无新版本发布。两条 PR 均由 timosha 提交，分别涉及 Telegram 消息渲染与 MCP 工具包装器的引用计数修复，指向具体的功能完善与稳定性问题。整体活跃度偏低，但代码贡献仍在持续，项目处于"低讨论、稳步修整"状态。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日无 PR 合并或关闭，主干代码未产生可见推进。已在队列中的两条待合并 PR 分别对应：

- **PR #1094** [OPEN] `feat(telegram): render markdown tables as monospace pre blocks` — 修复 `markdownToTelegramHtml` 将 Markdown 表格以原始管道符透传、导致 Telegram 渲染为混乱单行的问题；新逻辑在行首检测"含 `|` 的行 + 分隔行（冒号 + 3 个以上短横线）"来识别表格结构。属于用户可见的展示质量改进。
- **PR #1095** [OPEN] `fix(mcp): refcount shared McpServer across tool wrappers` — 针对 `applyToolCustomizations` 在销毁被禁用工具包装器时的所有权问题：旧模型下仅首个包装器持有服务器（`owns_server = idx == 0`），移除被禁用工具会提前释放共享的 McpServer。属于核心资源生命周期修复。

两条 PR 均创建于 11-13 至 11-23 之间，尚未进入合并流程。

## 4. 社区热点

今日无评论与反应数据可统计（两 PR 的评论数均为 undefined，👍 均为 0），不存在讨论热点。从提交内容看，timosha 是本周期内唯一可见的活跃贡献者，两条 PR 分别指向终端用户侧（Telegram 展示）与内部架构侧（MCP 资源管理）。

- PR #1094：nullclaw/nullclaw PR #1094
- PR #1095：nullclaw/nullclaw PR #1095

## 5. Bug 与稳定性

今日无新报告的 Issue 级 Bug。两条 PR 中，#1095 属于稳定性修复，按影响面判断：

- **中高严重度（已有 fix PR，待合并）**：#1095 涉及的共享 `McpServer` 提前释放问题，会导致被禁用工具的自定义化操作影响其他仍在使用同一 MCP 服务器的工具包装器，属于资源生命周期类缺陷，可能引发后续调用异常。建议优先评审合并。
- **低严重度（已有 fix PR，待合并）**：#1094 为展示层问题，Markdown 表格在 Telegram 中渲染为单行乱码，不影响功能正确性。

## 6. 功能请求与路线图信号

今日无来自 Issue 的用户功能请求。#1094 反映的 Telegram 富文本渲染能力（表格 → 等宽 pre 块）可作为下一版本候选的体验改进项；#1095 属于必要缺陷修复，建议纳入最近一次补丁发布。因无路线图或里程碑数据，此处不做版本归属推断。

## 7. 用户反馈摘要

今日 Issues 无内容，无法提炼评论中的用户痛点、使用场景与满意度。仅能从 PR 描述间接推断两类使用场景：一是在 Telegram 渠道中接收含表格的 Markdown 输出；二是通过 `tool_customizations` 禁用特定 MCP 工具并期望不影响其他工具。

## 8. 待处理积压

两条 PR 均处于 OPEN 状态，其中 **#1094 创建于 2026-11-13，至 11-23 仍有更新，已悬置约 10 天未合并**，建议维护者关注评审排期；**#1095 为 11-23 新建，尚在正常评审窗口内**。今日 Issues 队列为空，无长期未响应的 Issue 积压。

- PR #1094：nullclaw/nullclaw PR #1094（待评审，已开放约 10 天）
- PR #1095：nullclaw/nullclaw PR #1095（新提交，待评审）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报（2026-11-24）

## 1. 今日速览

过去24小时项目处于**高强度维护期**：15 条 PR 更新、13 条合并/关闭、仅 2 条待合并，Issues 侧仅 1 条新开且已有 1 条评论。今日工作几乎全部聚焦于 **OpenClaw → DSH（DeepSeek Harness）迁移后的稳定性收尾**，涵盖启动卡死、IM 通道恢复、日志与制品索引修复等回归问题，同时并行推进了首页 Showcase、专家广场 NEW 标记、侧边栏视觉与权限确认等 UI 迭代。整体判断：**开发活跃度高、合并节奏快、主攻方向明确，项目健康度良好**；但迁移类回归密集出现，说明升级路径仍需加强回归测试覆盖。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日合并/关闭的 13 条 PR 大致可分为三条主线：

**主线一：DSH 迁移稳定性（核心推进）**
- [#3168](https://github.com/netease-youdao/LobsterAI/pull/3168) `fix(startup)`：修复从 OpenClaw 升级到 DSH 时的首次启动挂起（QA Windows 升级日志中观察到最长 38 分钟）与 35s 冷启动超时问题——**今日最重要的修复**。
- [#3169](https://github.com/netease-youdao/LobsterAI/pull/3169) `fix(im)`：恢复 DSH 下企业微信直连，并在 IM 设置中展示机器人连接状态。
- [#3170](https://github.com/netease-youdao/LobsterAI/pull/3170) `fix(im)`：修复升级后同一机器人与联系人重复创建桌面会话的问题，覆盖钉钉、飞书、企业微信、微信、QQ。
- [#3171](https://github.com/netease-youdao/LobsterAI/pull/3171) `fix(cowork)`：DSH 回复后保留快捷模式上下文长度选择器。
- [#3172](https://github.com/netease-youdao/LobsterAI/pull/3172) `fix(dsh)`：导出时跳过缺失的可选日志，并在 DSH 会话中保留预设。
- [#3173](https://github.com/netease-youdao/LobsterAI/pull/3173) `fix(dsh)`：恢复关联制品索引并等待 MCP 注册完成，区分“已安装”与“已连接”的 MCP 包。

**主线二：IM 能力扩展**
- [#3160](https://github.com/netease-youdao/LobsterAI/pull/3160) `feat(im)`：为 DSH 新增原生 POPO 通道（Mercury STOMP、签名 webhook 回调、文本投递、按机器人访问策略与配对），并在 Electron IM 设置中启用。

**主线三：UI/UX 迭代**
- [#3175](https://github.com/netease-youdao/LobsterAI/pull/3175)：新增 Home Showcase Hub、RemixExampleDialog、ShowcasePreviewCard 及配套展示目录与字体资源。
- [#3164](https://github.com/netease-youdao/LobsterAI/pull/3164)：重构首页 composer 布局，提取 `AgentPickerPopover`，权限模式选择器内移。
- [#3165](https://github.com/netease-youdao/LobsterAI/pull/3165)：侧边栏表面与交互打磨，新增全权限确认对话框。
- [#3166](https://github.com/netease-youdao/LobsterAI/pull/3166)：侧边栏字号层级与对比度调整（规避 Windows 半像素模糊）。
- [#3167](https://github.com/netease-youdao/LobsterAI/pull/3167)：专家广场精选场景展示本地化 `NEW` 徽标。

**整体推进评估**：今日合并以“迁移后遗症的集中清算”为主，功能新增（POPO 通道、Showcase Hub）为辅，项目在稳定性与体验两个维度均实质性向前推进。值得注意的是，#3168/#3169/#3170/#3171/#3172/#3173 六条修复 PR 均出自同一贡献者，**单点依赖风险值得关注**。

## 4. 社区热点

今日整体讨论量偏低，无高评论/高反应条目。相对最受关注的是唯一的新 Issue：

- [#3163](https://github.com/netease-youdao/LobsterAI/issues/3163) `[OPEN]` **LobsterAI 客户端内置百度爱企查 MCP 集成（OAuth 模式）**（作者 yangshixing1222-del，1 条评论）

**诉求分析**：该 Issue 来自百度爱企查团队，属于**生态方主动寻求集成的合作型请求**，而非用户报障。其核心诉求有两点：一是将企业信息查询与法律办公两大垂类的 MCP/skill 能力开放给 LobsterAI 用户；二是要求平台支持 **OAuth（含 DCR 动态客户端注册）鉴权**。这与今日 #3173 中“区分已安装 MCP 包与已连接服务器、等待 MCP 注册”的修复形成呼应——**MCP 生态接入正是当前活跃演进方向**，OAuth 鉴权能力可能成为平台侧需要补齐的基础设施。建议维护者尽快在 Issue 中回应合作流程与鉴权支持时间表。

## 5. Bug 与稳定性

按严重程度排列（均已有 fix PR 且今日已关闭）：

| 严重度 | 问题 | PR | 状态 |
|---|---|---|---|
| **严重（P0）** | OpenClaw → DSH 升级首次启动挂起，QA Windows 日志中达 38 分钟；偶发 35s 冷启动超时 | [#3168](https://github.com/netease-youdao/LobsterAI/pull/3168) | 已修复 |
| **高（P1）** | DSH 迁移后企业微信直连失效 | [#3169](https://github.com/netease-youdao/LobsterAI/pull/3169) | 已修复 |
| **高（P1）** | 升级后同一机器人+联系人重复创建桌面会话（钉钉/飞书/企微/微信/QQ） | [#3170](https://github.com/netease-youdao/LobsterAI/pull/3170) | 已修复 |
| **中（P2）** | 关联制品未能索引，历史文件未出现在库中；MCP 注册未等待 | [#3173](https://github.com/netease-youdao/LobsterAI/pull/3173) | 已修复 |
| **中（P2）** | 导出时对缺失可选日志（`dsh.log`）发出警告；DSH 会话丢失预设 | [#3172](https://github.com/netease-youdao/LobsterAI/pull/3172) | 已修复 |
| **低（P3）** | DSH 首次回复后快捷模式上下文长度选择器消失 | [#3171](https://github.com/netease-youdao/LobsterAI/pull/3171) | 已修复 |

**稳定性判断**：今日所有已报告回归均已闭环，无遗留未修复项。但六个问题均为**升级路径特有**，建议在 CI 中增加 OpenClaw→DSH 升级场景的端到端回归，避免类似问题在用户侧复现。

## 6. 功能请求与路线图信号

- **百度爱企查 MCP 集成 + OAuth/DCR 鉴权**（[#3163](https://github.com/netease-youdao/LobsterAI/issues/3163)）：今日唯一明确的功能请求。结合 #3173 已着手处理 MCP 安装/连接状态与注册等待，**MCP 生态接入的工程基础正在成形**，OAuth 鉴权有较大概率被纳入后续版本；但 Issue 尚处 OPEN 且仅 1 条评论，纳入时间无法从现有材料判断。
- **POPO 原生通道**（[#3160](https://github.com/netease-youdao/LobsterAI/pull/3160)）：今日已合并，说明 IM 渠道矩阵仍在持续扩张（现有钉钉、飞书、企微、微信、QQ、POPO）。
- **首页 Showcase Hub 与 Remix 示例**（[#3175](https://github.com/netease-youdao/LobsterAI/pull/3175)）：指向“降低新用户上手门槛、强化模板化体验”的产品方向。
- **全权限确认对话框 + 权限模式内移**（[#3165](https://github.com/netease-youdao/LobsterAI/pull/3165)、[#3164](https://github.com/netease-youdao/LobsterAI/pull/3164)）：体现对高权限操作的安全提示重视度提升。

## 7. 用户反馈摘要

今日 Issues 侧仅有 1 条，且来自**生态合作方而非终端用户**，因此可提炼的真实用户痛点有限：

- **满意/积极信号**：百度爱企查团队主动表达“希望开放给贵平台用户使用”，侧面反映 LobsterAI 的平台生态吸引力与 MCP/skill 承载能力获得外部认可。
- **明确需求**：合作方对鉴权方式有具体技术要求（OAuth + DCR），说明**第三方 MCP 接入的鉴权标准化**是生态扩张的现实门槛。
- **不满意项**：今日数据中无用户负面反馈记录。
- **使用场景线索**：企业信息查询、法律办公被点名为两大垂类场景，可作为后续 skill 生态建设的参考方向。

## 8. 待处理积压

今日数据中**未提供长期未响应的 Issue/PR 信息**，无法据此判断积压项。仅就当前可见状态提示两点：

- [#3163](https://github.com/netease-youdao/LobsterAI/issues/3163) 为 OPEN 状态且仅 1 条评论，作为**外部合作请求**，建议维护者优先给出流程性回应，避免生态方等待过久。
- [#3161](https://github.com/netease-youdao/LobsterAI/pull/3161)（`actions/setup-node` 4→7）与 [#3162](https://github.com/netease-youdao/LobsterAI/pull/3162)（`softprops/action-gh-release` 1→3）两条 Dependabot PR 仍待合并，属常规依赖升级，建议排期合并以保持 CI 链路更新。

---

*说明：本报告所有内容均基于所提供数据；未提供的指标（如长期积压、star/fork 变化、评论正文）未作推断。*

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

# CoPaw 项目日报 · 2026-11-24

> 数据来源：CoPaw GitHub（github.com/agentscope-ai/CoPaw）。注：原始数据中的 Issue 链接域名为 `agentscope-ai/QwenPaw`，本报告按原文保留。

## 1. 今日速览

过去 24 小时共 26 条 Issue 更新（新开/活跃 21、关闭 5）、34 条 PR 更新（待合并 23、已合并/关闭 11），无正式 Release，但已有一版 `2.3.1b2` 版本号变更 PR，说明下一补丁版正在收尾。活跃度评定：**高**，但结构上“报障多、合入少”——大量新 Issue 集中在 Console 前端渲染、流式重试与记忆/沙箱后端，且多数尚无对应 fix PR。项目整体向前推进有限，瓶颈主要在前端稳定性与运行时健壮性。

## 2. 版本发布

今日无新版本发布。相关信号：PR #8883（`chore: bump the version to 2.3.1b2`）已关闭，表明补丁版本线仍在推进；多个 Issue 报告针对 `2.3.0.post1` 与 `2.3.1-beta.1`，可视为补丁版本的质量压力点。https://github.com/agentscope-ai/QwenPaw/pull/8883

## 3. 项目进展

今日合并/关闭的 PR 以小型修复与版本管理为主，未见大型功能落地：

- **#8803（已关闭，size/XL）fix(skills): refine pool cards and builtin update status**：修复技能池更新后旧内置技能被误判为“过期”、通知红点常驻的问题，并优化信息层级与操作入口。https://github.com/agentscope-ai/QwenPaw/pull/8803
- **#8873（已关闭，size/XS）fix(cli): stop suggesting unavailable model download command**：本地模型空状态不再提示未注册的 `qwenpaw models download`，改为引导至 Console「Settings -> Models」，并加测试防止回归。https://github.com/agentscope-ai/QwenPaw/pull/8873
- **#8885（已关闭，size/XXXL）feat(creator): release 2.0.7**：Creator 插件 2.0.7，含评审恢复与媒体修复；同内容 PR #8886 仍为 OPEN，建议维护者去重。https://github.com/agentscope-ai/QwenPaw/pull/8885

**整体判断**：合入侧集中在体验细节打磨（技能状态、CLI 引导、Creator 发布），对用户可见的痛点（前端渲染、重试机制）尚未形成合入闭环，项目“向前迈进”幅度中等偏小。

## 4. 社区热点

按评论数排序，讨论最集中的三条：

1. **#8811 [CLOSED] 窄屏下整条消息文字被剪裁，超宽内容（表格/代码块）无法横向滚动**（5 评论，v2.3.0.post1 升级后出现）——用户明确指出回归发生于升级之后，诉求是“升级不应破坏基础可读性”。https://github.com/agentscope-ai/QwenPaw/issues/8811
2. **#8864 [OPEN] 流式回复中途因 RemoteProtocolError 中断，且已输出部分内容后不再重试**（3 评论，deepseek-v4-flash，上下文仅约 9%）——反映“部分输出后不可恢复”会导致会话直接失效。https://github.com/agentscope-ai/QwenPaw/issues/8864
3. **#8852 [OPEN] iOS WebKit 长会话卡死（UserMessageAnchors 布局抖动 + column-reverse 列表中的 content-visibility:auto）**（3 评论）——移动端长会话可用性问题。https://github.com/agentscope-ai/QwenPaw/issues/8852

**背后诉求**：热点高度集中于 Console 前端（消息宽度、滚动、表格溢出、键盘可访问性、iOS 卡死）与流式请求容错。用户当前最关心的是“长会话 + 窄屏 + 移动端”的基础稳定性，而非新功能。

## 5. Bug 与稳定性

按严重程度排列（均标注 fix PR 情况）：

**高**

- **#8887 工具结果中的媒体数据块导致非多模态模型 400 BadRequestError，后续所有消息均“Internal error”**：会话级失效。今日新开，**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8887
- **#8592 Creator 评审轮次永久无法裁决：REJECT 恒返回 422（视觉产物引用缺失 id），另含 provider source_url 502、frame_stats 忽略 CREATOR_FFMPEG_PATH**：硬阻断。**无 fix PR**；但相关修复可能包含在 Creator 2.0.7 发布（#8885/#8886，含“评审恢复”）中，需核实。https://github.com/agentscope-ai/QwenPaw/issues/8592
- **#8867 Memory 后端在启动竞态下静默回退到 ReMeLight 且永不自愈**（插件已装未注册）：静默降级，难以察觉。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8867

**中**

- **#8864 流式中断不重试**（见热点）：**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8864
- **#8877 无状态码的模型过载（HTTP 200 后 SSE 报错）绕过重试**：与 #8864 同一类重试盲区，**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8877
- **#8852 iOS WebKit 长会话卡死**：**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8852
- **#8888（2.3.1-beta.1）内容高度收缩时（发送、压缩、推理块折叠）会话回跳数屏**：**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8888
- **#8706 Creator 创作助手输入框逐键卡顿**（AgentDock 全量重渲染、无 memoization）：**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8706
- **#8880 安全检查 fail-open：`warn` 模式下 CRITICAL 仍安装，扫描超时亦 fail-open**：安全语义问题。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8880

**低**

- **#8870 Discord `chunk_text` 在分块边界重复代码围栏**：**已有 fix PR #8889**（hongxicheng，size/S）。https://github.com/agentscope-ai/QwenPaw/issues/8870 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8889
- **#8845 Markdown 表格溢出气泡且无法横向滚动**、**#8844 消息列表不可键盘聚焦，方向键/PageUp/PageDown 无效**：**无 fix PR**，但与 #8811 同源，可合并处理。https://github.com/agentscope-ai/QwenPaw/issues/8845 ｜ https://github.com/agentscope-ai/QwenPaw/issues/8844
- **#8874 文档中的本地 pre-commit 环境与 CI 不一致**：贡献者体验问题。**无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8874

**已关闭**：#8811（窄屏剪裁）、#8490（打开语音转写设置页触发 `import whisper`，常驻约 690 MB RSS）、#8057（Anthropic Messages 缓存读写 token 未计入上下文计量）。

**结论**：今日新增 Bug 呈“前端 + 运行时容错 + 安全 fail-open”三簇分布，仅 1 项已有 fix PR，修复供给明显落后于报障速度。

## 6. 功能请求与路线图信号

- **#8882 [Design] 长期记忆引用计数归档**：将陈旧条目改为“状态变更”而非删除，回应 README 中“Never forgets”与 #7571“总是遗忘重要内容”的矛盾。属设计提案，无对应实现 PR。https://github.com/agentscope-ai/QwenPaw/issues/8882
- **#8881 [Design] 在记忆检索层强制租户隔离**：目前隔离依赖目录约定，检索层过滤为可选。https://github.com/agentscope-ai/QwenPaw/issues/8881
- **#8878 [Design] 编码模式最小出口策略**：对元数据端点默认拒绝，在 Landlock ABI v4 端口规则之上叠加策略文件白名单。https://github.com/agentscope-ai/QwenPaw/issues/8878
- **#8879 [Tracking] `max_processes` / `max_memory_mb` 被接受但无沙箱后端强制执行**。https://github.com/agentscope-ai/QwenPaw/issues/8879

**结合已有 PR 判断**：

- **可能进入下一版本**：插件能力扩展（#8764 插件 SDK 1.2、#8554 插件 CLI 命令与扩展点）与自定义网关声明 OpenAI prompt cache 参数（#8061，Under Review，Closes #8058）——均有成熟 PR 支撑。https://github.com/agentscope-ai/QwenPaw/pull/8764 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8554 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8061
- **短期难落地**：记忆与沙箱四则设计提案（#8881/#8882/#8878/#8879）均为今日新提、无实现 PR，更可能是中期路线图输入。

## 7. 用户反馈摘要

- **真实痛点**：升级即回归（#8811 从 v2.3.0 升到 post1 后窄屏剪裁）；移动端与长会话不可用（#8852）；部分输出后中断无法续（#8864）；静默回退导致“配了却没生效”（#8867）。
- **使用场景**：Windows 11 + Chrome 桌面端（约 1903px 视口）与手机 Chrome 375px 竖屏并行；iOS Safari/WebKit 长会话；Discord 渠道消息分块；Creator 项目工作区内的评审与创作流程；本地模型与语音转写。
- **不满意**：基础可读性与滚动能力不足（#8811/#8844/#8845）；贡献者环境与 CI 不一致，增加上手成本（#8874）。
- **肯定之处**：用户在 #8878 中明确感谢沙箱工作——“文件系统隔离是真实有效的（Linux 上 Landlock + userns，`runtime_boundary.py` 校验内核状态而非信任环境变量）”，并认可 `config.py` 对未强制项（#8879）的坦诚说明。这类“诚实文档”被视为项目信誉加分项。

## 8. 待处理积压

长期未响应或体量大、悬置时间长的条目，建议维护者优先排序：

- **#8592**（创建 2026-11-05，2 评论）：Creator 评审轮次永久阻塞，捆绑三项后端缺陷，属硬阻断，已悬置 19 天。https://github.com/agentscope-ai/QwenPaw/issues/8592
- **#8061**（创建 2026-09-30，Under Review）：自定义网关 prompt cache 参数，悬置近两月，Closes #8058。https://github.com/agentscope-ai/QwenPaw/pull/8061
- **#8554 / #8586 / #8764**（size/XXXL，创建于 11-03 / 11-05 / 11-16，均 OPEN）：插件 CLI、ACP 与原生执行会话配置统一、插件 SDK 1.2——超大 PR 长时间待审，是合入吞吐的主要占用项。#8586 摘要称 ACP 与原生执行已共用同一 session 配置快照。https://github.com/agentscope-ai/QwenPaw/pull/8586 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8554 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8764
- **#8268 / #8308 / #8487**（创建于 10-16 / 10-18 / 10-29，均 OPEN）：任务完成回调有界化与清理、缺失 provider 返回 404 的测试、工具结果折叠识别 URL 引用媒体——小体量但积压超一月，适合作为“快速清理”批次。https://github.com/agentscope-ai/QwenPaw/pull/8268 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8308 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8487
- **#8886**：与已关闭的 #8885 内容重复（同为 Creator 2.0.7），建议关闭以免评审资源分散。https://github.com/agentscope-ai/QwenPaw/pull/8886

**健康度提示**：Issue 关闭率（5/26）与 PR 合入率（11/34）均偏低，且新增 Bug 集中在少数模块；建议优先为 Console 渲染簇（#8811/#8844/#8845/#8888/#8852）建立统一追踪单，并为重试盲区（#8864/#8877）指定负责人。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 · 2026-11-24

## 1. 今日速览
今日项目无 Issues 更新、无新版本发布，工程活动集中在容器化依赖维护上：2 条 Dependabot PR 有更新，其中 1 条关闭（#679）、1 条新开待合并（#728），均为 Rust 基础镜像/crate 版本升级。整体活跃度偏低，属典型的"低噪音维护日"，无功能开发或缺陷修复类进展。项目健康度未见异常信号，但连续无 Issues 互动说明社区侧反馈渠道处于静默状态。

## 2. 版本发布
无（今日无新 Release）。

## 3. 项目进展
今日无功能或修复类 PR 合并，唯一关闭项为依赖类变更：

- **#679 [CLOSED] chore(deps): bump rust `17d1ba8` → `bce1476`**（dependabot[bot]，创建于 2026-09-15，更新于 2026-11-24）
  链接：qhkm/zeptoclaw PR #679
  说明：该 PR 由 Dependabot 自动生成，摘要中提示因注册表未提供发布日期，冷却期（cooldown）策略未能生效。其关闭与今日新开的 #728 指向同一依赖维度，推测为被后续直接升版取代。
  → 对项目功能面推进为 0，仅体现依赖维护流程在运转。

## 4. 社区热点
今日无任何带评论或反应的讨论项，Issues 总数为 0，两条 PR 的评论数均未记录（undefined）、👍 均为 0。客观上不存在"热点"。

- 相对最受关注：#728 [OPEN] fix(deps): bump rust 1.98-slim-trixie → 1.99-slim-trixie
  链接：qhkm/zeptoclaw PR #728
  分析：这是当前唯一待处理的开放项，其诉求来自自动化依赖策略（Rust 补丁版本跟进），而非社区用户推动。建议维护者优先完成该 PR 的合并或明确拒绝理由，避免依赖告警持续堆积。

## 5. Bug 与稳定性
今日无 Bug、崩溃、回归类问题报告（Issues 更新为 0）。唯一与稳定性相关的是 **#728** 的 Rust 基础镜像升级，属预防性维护，非缺陷修复，不涉及已知故障。

## 6. 功能请求与路线图信号
今日无用户提出的新功能需求。基于现有 PR 可判断的唯一近期纳入项为 **#728**（Rust 1.99-slim-trixie 镜像），预计在合入后进入主干；这是构建环境的小版本推进，不构成路线图级别信号。

## 7. 用户反馈摘要
今日无 Issues 评论可供提炼，无法获得用户痛点、使用场景或满意/不满意反馈。需要说明：数据中出现的"cooldown 未能应用"提示属 Dependabot 自动生成文本，不代表用户声音。

## 8. 待处理积压
需维护者关注的长期项：

- **#679**（创建于 2026-09-15，更新于 2026-11-24，已关闭）：从创建到关闭跨约两个月，反映 Dependabot 依赖 PR 存在较长滞留周期。
  链接：qhkm/zeptoclaw PR #679
- **#728**（今日新开，待合并）：建议短期内处理，防止形成新的积压。
  链接：qhkm/zeptoclaw PR #728

*注：本报告仅基于所提供的 GitHub 数据生成，未包含 Issues/Release 之外的信息。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报（2026-11-24）

## 1. 今日速览

过去 24 小时 ZeroClaw 维持高强度开发节奏：31 条 Issue 更新（21 条新开/活跃、10 条关闭），50 条 PR 更新（44 条待合并、6 条已合并/关闭），无新版本发布。活跃度评估为**高**，但合并率偏低（约 12%），大量 XL 级 PR 处于堆叠评审状态，说明配置系统重构与工具层扩展是当前主线。安全相关议题（凭证作用域、浏览器工具能力缺口）持续占据讨论焦点。项目健康度总体良好：S1 级阻塞性 Bug（如 #11525 quickstart 失败、#11858 send_via 路由）已关闭，但仍有数个 S1 问题在修复中（见第 5 节）。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并的 6 条 PR 中，主要值得关注的是：

- **PR #12673 [CLOSED]** refactor(providers): extract shared ACP CLI client from grok_cli — 将受限一次性 ACP 客户端（`grok_cli/acp.rs`）与子进程生命周期抽离为 crate 内部 `acp_cli` 模块，为第二个基于 ACP 的 CLI 后端铺路。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12673)
- **PR #12575 [CLOSED]** ci(release): retry Apple notarization and stapling of the macOS installer — 针对 v0.9.0 发布流水线中 `.dmg` 公证在最后一分钟失败的问题增加重试。同系列的 **PR #12573**（Discord 发布公告 HTTP 504 重试）仍待合并。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12575)

Issue 侧关闭了数个长期项：#11525（Android/Termux quickstart 失败，S1）、#11858（headless 回合中 send_via 无回复消费者，S1）、#11050（原生 poll 与出站消息节奏对齐）。整体看，项目今日在**发布可靠性**与**通道健壮性**方向小幅推进，但配置系统的大规模重构仍处评审阶段。

## 4. 社区热点

| 条目 | 评论 | 链接 | 诉求分析 |
|---|---|---|---|
| #12422 RFC: Scoped use of operator-managed service credentials | 16 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | 运维方希望授权 agent 对某服务执行任务，而不向 agent 暴露凭证明文。安全模型的核心诉求，讨论热度最高，且已有配套实现 PR #12695（WebDAV 远程文件 + 加密授权）。 |
| #9945 browser 工具仅暴露 agent-browser 100+ 命令中的 16 个 | 7 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | iframe、JS 对话框、标签页、表单控件不可达，直接限制真实网页自动化场景。 |
| #8600 多模型 provider 的按会话模型切换 | 6 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | 用户从 moltis 迁移而来，指出这是唯一缺失的能力（1 👍）。 |
| #11332 技能评审/创建在 channel、webhook、gateway 回合中从不运行 | 6 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | 学习循环只在 CLI/cron 路径生效，Web UI 用户实际无法获得技能自改进。 |
| #10073 退役 StoragePolicy::Rolling | 5 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | 默认日志存储策略存在严重性能问题，日志查询需跨分段文件。 |

整体诉求集中在三个方向：**安全边界细化**（凭证作用域、工具权限）、**通道/平台能力对齐**（浏览器命令、多模型切换）、**运行时架构治理**（日志存储、crate 拆分）。

## 5. Bug 与稳定性

按严重程度排列：

**S1 — 工作流阻塞**
- **#12597** Telegram 通道在语音转写失败后停止接收消息（offset 永不前进）。今日仍为 OPEN，未见 fix PR。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12597)
- **#10863** Telegram 无限重试被拒的语音更新，阻塞后续消息；关联 PR #10xxx 的线上事故。状态 in-progress。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10863)
- **#12570** 日志目录积累数百万个泄漏的 `runtime-trace.tmp.*` 文件（rolling trim 出错时不清理临时文件）导致 daemon 启动挂起。OPEN，无 fix PR。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12570)

**S2 — 行为降级**
- **#11336** `plugin info` / `plugin list --verify` 对运行时拒绝注册的插件报告 `[loads]`。OPEN。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11336)
- **#12558** Matrix 工具审批提示被发到房间时间线而非当前线程（`reply_in_thread = true`）。OPEN。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12558)

**S3 — 次要问题**
- **#10976** WhatsApp Web 双向 @提及失效（入站为裸 JID 数字，出站为纯文本）。OPEN。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10976)
- **#12660** Agent 卡片的"本月"支出实为全部历史支出。OPEN。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12660)

**已关闭**：#11525（quickstart on Termux）、#11858（send_via 无消费者）、#11050（poll 节奏）。

## 6. 功能请求与路线图信号

- **凭证作用域与远程文件**：#12422 RFC 与 #12690 RFC 同日推进，配套 PR #12695 已提交（operator 定义 WebDAV 资源目录 + 独立加密授权 + opt-in `remote_files` 工具）。**很可能纳入下一版本**。
- **浏览器工具能力扩展**：#9945（16/100+ 命令）、#12614（缺少文件上传动作，阻塞所有需上传的表单）。两者均 OPEN 且无对应 PR，短期内落地概率较低。
- **多模型切换**：#8600 处于 parking-lot，但今日新开的 PR #12702（让 `/model` 在固定 profile 上真正请求所选模型）与 #12701（路由 API key 随路由选择保留）显示该方向有实际推进。
- **配置系统 V5**：堆叠 PR #12448（建立 V5 并冻结 V4 布局）、#12454（独立 provider 注册表领域类型）、#12455（共享原生能力协议与 HTTP 传输）构成一条明确的重构线。
- **通道体验**：#11753（可配置确认表情）状态 in-progress，可能进入后续版本。
- **响应缓存策略**：#8321 处于 icebox，暂无落地信号。

## 7. 用户反馈摘要

- **迁移用户**：#8600 作者明确表示除按会话模型切换外，从 moltis 迁移所需能力均已具备——这是对项目能力的正面评价，同时指出了一个具体空白。
- **Web UI 用户**：#11332 反映技能自改进只在 CLI/cron 生效，Web 用户"看似开启、实则无效"，属于预期与实现不一致的挫败感。
- **移动端/边缘部署**：#11525 的 Android/Termux 用户遇到 S1 级阻塞，已关闭，说明边缘平台支持在改善。
- **聊天通道用户**：Telegram 语音消息（#12597、#10863）和 WhatsApp 提及（#10976）的重复问题表明通道层在异常输入下的韧性不足，影响日常使用体验。
- **运维/安全**：#12422 的 16 条评论显示运维方对"agent 能否在不接触明文凭证的情况下代表用户操作服务"高度关注。
- **仪表盘用户**：#12660 的支出标签错误虽为 S3，但属于会误导成本判断的数据展示问题。

## 8. 待处理积压

以下为创建时间较早、仍 OPEN、且具有较高影响的条目，建议维护者关注：

| 条目 | 创建 | 状态 | 说明 | 链接 |
|---|---|---|---|---|
| #8321 Define response-cache policy for volatile runtime context | 2026-06-25 | icebox | 缓存相关行为缺乏统一定义，已停滞近 5 个月 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8321) |
| #8600 easy per-chat model switching | 2026-07-01 | parking-lot | 有 PR #12701/#12702 推进，但主跟踪项仍搁置 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) |
| #9945 browser tool exposes 16 of 100+ commands | 2026-08-12 | blocked | 阻塞状态，无 fix PR | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) |
| #10073 Retire StoragePolicy::Rolling | 2026-08-18 | in-progress | 默认策略性能问题，与 #12570 的日志泄漏缺陷相关 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) |
| #11997 feat(tools): send files through send_via under the read policy | 2026-10-23 | OPEN | 邮件通道至今无法发送文件，PR 悬置逾一个月 | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11997) |
| #11572 fix(acp): surface plan persistence failures | 2026-10-06 | needs-author-action | 需要作者跟进，另有文档 PR #12222 依赖 | [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11572) |

**风险提示**：#12570 与 #10073 指向同一日志子系统（rolling trim 的临时文件泄漏），建议合并处理以避免重复修复；44 条待合并 PR 中有多条 XL 级堆叠依赖（#12448 → #12454 → #12455），评审瓶颈可能进一步拉长合并周期。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*