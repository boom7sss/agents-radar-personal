# OpenClaw 生态日报 2026-08-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-13 02:27 UTC

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

# OpenClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

过去24小时OpenClaw项目维持高强度活跃：Issue与PR更新各达500条，其中新开/活跃Issue 403条、待合并PR 359条，社区反馈和贡献节奏均处于高位。值得关注的是，今日无新版本发布，而Issue侧主要聚焦在**子代理完成消息丢失**（#44925、#67777、#92433）、**会话恢复与可靠性**（#121058、#47975）以及**多代理并发稳定性**（#43367、#54488）等系统性顽疾，体现出项目在核心可靠性层面仍有较大改进空间。PR侧则集中在**CI流程优化、Code Mode边界修复、Custodian会话恢复**等方向，说明维护团队正优先加固基础设施和既有功能的健壮性。


## 2. 版本发布

今日无新版本发布。


## 3. 项目进展

今日无大型功能PR合入，项目重心聚焦于**CI/基础设施加固**与**边界修复**。以下为今日关闭的PR明细：

| PR | 内容 | 影响 |
|---|---|---|
| [#122879](https://github.com/openclaw/openclaw/pull/122879) | 修复 `channels add` 测试因同步加载插件源码导致的120s超时 | 消除CI不稳定因素 |
| [#122912](https://github.com/openclaw/openclaw/pull/122912) | 修复Parallels更新流程中插件清单丢失导致的启动收敛失败 | 提升更新流程可靠性 |
| [#122931](https://github.com/openclaw/openclaw/pull/122931) | 澄清Gateway动态操作员作用域文档 | 改善开发者接入体验 |
| [#122924](https://github.com/openclaw/openclaw/pull/122924) | 修复Code Mode在超大工具结果时死路：以有界输出替代全调用失败 | 提升极端场景下的鲁棒性 |
| [#122921](https://github.com/openclaw/openclaw/pull/122921) | 修复CI重复冷依赖重建（每次约105–111秒） | 显著缩短CI流水线耗时 |

此外，以下开放PR值得关注（合入后将对项目能力产生实质推进）：

- **[#119001](https://github.com/openclaw/openclaw/pull/119001) feat(codex): 将原生实时语音绑定到既有会话** — 使Codex Realtime成为已路由OpenClaw会话的“大脑”，而非独立会话或咨询代理，补齐实时交互的关键拼图。
- **[#122536](https://github.com/openclaw/openclaw/pull/122536) feat: portals** — 向操作者暴露agent运行的开发服务器，将显著改善远程场景下的web应用开发反馈闭环。
- **[#122764](https://github.com/openclaw/openclaw/pull/122764) fix(queue): 跨分组通道仲裁共享容量** — 针对会话通道饥饿问题，将共享槽所有权收归容量组调度器，有望解决#122763。


## 4. 社区热点

今日评论数最多的Issue反映了社区对以下问题的集中关注：

| Issue | 评论数 | 核心诉求 |
|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) Silent reply failures still recurring after #116277 closed | 91 | 用户对“静默回复失败”问题在#116277关闭后仍持续发生表达了强烈不满，监控cron在issue关闭后仍持续记录新故障，说明修复并未真正覆盖该故障模式 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 45 | 安全向功能请求：按来源（用户指令、网页抓取、第三方技能）对记忆条目标记信任等级，防止恶意指令通过不可信内容投毒记忆并影响后续行为 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost | 26 | 子代理任务完成结果在多种故障模式下静默丢失（完成通知失败E31/E42/E45、无需重试、无自动重启），严重损害用户对多代理编排的信任 |
| [#77598](https://github.com/openclaw/openclaw/issues/77598) Track live dev agent behavior and trajectory | 23 | 对Pash开发代理进行24小时行为观察的运行记录issue，社区对代理自主行为轨迹的关注度持续走高 |

**分析**：社区热度最高的议题集中在两个方向——**可靠性**（静默失败、结果丢失）与**安全**（记忆投毒防御）。其中#121058的91条评论表明该问题已造成较大范围的用户影响，且此前修复未达预期，需要维护者优先响应。


## 5. Bug 与稳定性

今日活跃的Bug类Issue按严重程度排列如下：

### P1 严重

| Issue | 问题 | 状态 |
|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成结果在E31/E42/E45等故障模式下静默丢失，无重试、无通知、无自动重启 | 无对应fix PR |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron任务始终在model-call-started阶段失败（LLM request failed），`timeoutSeconds`无效，请求从未到达provider | 无对应fix PR |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | 子代理会话在完成后持续存在，主会话无响应；多子代理场景下症状放大 | 无对应fix PR |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多代理编排不稳定：并发`agents add`配置互相覆盖、会话锁失败、子任务脱离 | [PR #122764](https://github.com/openclaw/openclaw/pull/122764) 部分相关（队列仲裁） |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | 子代理完成通知被steer进一个在消费前就结束的run，导致静默丢弃 | 无对应fix PR |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory插件阻塞正常回复，QMD启动初始化可能压垮多代理网关 | 无对应fix PR |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | 心跳漂移修复（PR #39182）引发激进重试，阻塞Telegram活跃会话中的消息处理 | 无对应fix PR |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth刷新成功但cron/heartbeat仍因10s认证超时失败 | 无对应fix PR |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update`造成混合文件所有权，`doctor`在EACCES后覆盖配置 | 无对应fix PR |

### P2 重要

| Issue | 问题 | 状态 |
|---|---|---|
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | Safeguard压缩忽略`compaction.model`配置，使用会话主模型 | [已关闭](https://github.com/openclaw/openclaw/issues/57901)（linked-pr-open） |
| [#115001](https://github.com/openclaw/openclaw/issues/115001) | 混合记忆搜索通过FTS LIKE-fallback返回虚假的1.0相似度分数 | [PR #122923](https://github.com/openclaw/openclaw/pull/122923) 相关（UI环境信息，非直接修复） |
| [#107814](https://github.com/openclaw/openclaw/issues/107814) | gpt-5.3-codex-spark对必需工具调用发出空参数对象，schema校验拒绝全部调用 | 无对应fix PR |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 钩子/工具子进程未回收，僵尸进程累积导致运行时性能退化 | 无对应fix PR |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Anthropic认证恢复后主代理被持久化的workspace-state迁移阻塞 | 无对应fix PR |

### 稳定性趋势判断

子代理完成消息丢失（#44925、#67777、#92433）已形成**系列化问题**，涉及同一代码路径（`maybeSteerSubagentAnnounce` / `subagent-announce-delivery.ts`）的多个故障模式。该类问题长期未得到根治，已成为影响OpenClaw多代理编排可信度的首要稳定性风险。


## 6. 功能请求与路线图信号

今日活跃的功能请求中，以下方向与项目的既有PR存在交汇，值得重点关注：

### 6.1 安全与信任

- **[#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** — 按来源标记记忆信任等级，防止记忆投毒。该issue已挂45条评论，且带有 `clawsweeper:needs-security-review` 标签。与近期社区对代理安全的关注趋势一致，建议纳入后续版本规划。

### 6.2 实时语音与移动端

- **[#45508 Self-hosted STT/TTS support in webchat](https://github.com/openclaw/openclaw/issues/45508)** — 将webchat的语音输入/朗读路由到网关而非浏览器Speech API。已有PR [#118499](https://github.com/openclaw/openclaw/pull/118499) 和 [#118505](https://github.com/openclaw/openclaw/pull/118505)（macOS/iOS实时语音中继）在推进，webchat侧实现可能作为后续延伸。

### 6.3 可观测性与成本控制

- **[#9016 Expose OpenRouter usage cost](https://github.com/openclaw/openclaw/issues/9016)** — 向agent运行时暴露OpenRouter每次调用的成本信息。可持续关注。
- **[#45771 Built-in pace-aware rate limiting](https://github.com/openclaw/openclaw/issues/45771)** — 为自主循环（子代理、心跳驱动的编码会话）引入内置速率感知限流，防止烧穿API配额。

### 6.4 配置与开发者体验

- **[#45758 Support YAML as config file format](https://github.com/openclaw/openclaw/issues/45758)** — 在JSON5之外支持YAML配置。社区的讨论热度显示开发者对可读性有较强诉求，但优先级不高（P3）。

### 6.5 路线图潜力信号

- **Snapshot/recovery points 系列PR**（[#112385](https://github.com/openclaw/openclaw/pull/112385)、[#112865](https://github.com/openclaw/openclaw/pull/112865)、[#112896](https://github.com/openclaw/openclaw/pull/112896)）—— 为RFC 0013引入恢复点机制，是当前最成体系的功能方向，值得在后续版本中重点跟踪。


## 7. 用户反馈摘要

### 高频痛点

1. **记忆管理混乱（多用户横向对比）**：Issue [#43747](https://github.com/openclaw/openclaw/issues/43747) 中用户对比了三位同事的OpenClaw记忆存储行为——有人写入`~/.openclaw/memory/main.sqlite`，有人行为不同，记忆管理方式不一致造成协作困惑。该issue强调的“同一版本、不同行为”是回归类bug的典型信号。

2. **子代理编排不稳定（多模式失败）**：Issue [#44925](https://github.com/openclaw/openclaw/issues/44925) 中用户详细列举了子代理任务在E31/E42/E45等错误码下的静默丢失，指出“无重试、无通知、无自动重启”三重缺失。这种“静默失败”使用户无法区分agent仍在工作与已经失败，是体验层面最具破坏性的问题。

3. **Telegram/WebChat 路由与投递异常**：Issue [#41165](https://github.com/openclaw/openclaw/issues/41165) 反映Telegram私信仍会落入`agent:main:main`主会话，污染心跳/主会话上下文；Issue [#97983](https://github.com/openclaw/openclaw/issues/97983) 反映iOS/WebChat消息追加到transcript但不触发回复。

4. **浏览器自动化工具效率瓶颈**：Issue [#44431](https://github.com/openclaw/openclaw/issues/44431) 中用户基于9+邮件服务商的注册实测，指出缺乏CSS选择器支持迫使模型反复走“快照→Ref”的冗长工作流，建议增加直接CSS选择器操作能力。

5. **并发场景下的全局超时**：Issue [#43374](https://github.com/openclaw/openclaw/issues/43374) 报告4个agent并发经Telegram运行时，所有LLM API调用同时超时（每60–90秒），尽管同一时刻`curl`访问API正常。用户明确指出“这不是LLM提供商问题，而是内部瓶颈”。

### 满意/认可的方面

从关闭的Issue和PR看，以下方向获得社区认可：

- [#39604](https://github.com/openclaw/openclaw/issues/39604)（允许私有网络访问）获得12个👍，已关闭。
- [#33413](https://github.com/openclaw/openclaw/issues/33413)（Slack工具级进度展示）获得3个👍，已标记已修复。
- [#42820](https://github.com/openclaw/openclaw/issues/42820)（Feishu消息工具poll schema污染）以8条评论推动关闭，社区对快速修复持积极态度。


## 8. 待处理积压

以下为长期开放但值得维护者重点关注的高价值Issue/PR：

### Issue 积压（按创建时间排序）

| Issue | 创建时间 | 标签 | 备注 |
|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 2026-02-03 | P2, needs-security-review | 已开放6个月+，45条评论，功能请求方向清晰但尚未进入实现 |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) Expose OpenRouter usage cost | 2026-02-04 | P2, needs-product-decision | 已开放6个月+，成本可见性是agent经济性的重要一环 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) TTL/Expiry for Delivery Queue Messages | 2026-02-14 | P2, diamond lobster | 已在2月引入持久化投递队列，但缺少TTL机制导致重启后陈旧消息洪泛 |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) 心跳漂移修复引发阻塞 | 2026-03-09 | P1 | 已开放5个月，影响Telegram活跃会话，无fix PR |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) 多代理编排不稳定 | 2026-03-11 | P1 | 已开放5个月，多故障模式叠加，[PR #122764](https://github.com/openclaw/openclaw/pull/122764) 只覆盖其中队列一方面 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理完成静默丢失 | 2026-03-13 | P1 | 已开放5个月，26条评论，社区关注度高但无对应fix PR |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) 子代理会话持久化导致主会话无响应 | 2026-03-16 | P1 | 已开放5个月，影响主会话可用性，无对应fix PR |

### PR 积压

| PR | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#112385](https://github.com/openclaw/openclaw/pull/112385) feat(snapshot): compose RFC 0013 recovery points | 2026-07-21 | ⏳ waiting on author | 已与后续两个PR组成系列，等待作者更新 |
| [#112865](https://github.com/openclaw/openclaw/pull/112865) feat(snapshot): capture final recovery points | 2026-07-23 | ⏳ waiting on author | 栈式依赖#112385 |
| [#112896](https://github.com/openclaw/openclaw/pull/112896) feat(snapshot): admit restored recovery points | 2026-07-23 | ⏳ waiting on author | 栈式依赖#112865，恢复点功能完整链条 |
| [#102261](https://github.com/openclaw/openclaw/pull/102261) Interactive parity with Codex runtime | 2026-07-08 | 📣 needs proof | 大型功能（ask-user-question / plan mode / goal mode），已开放近6周，缺少验证素材 |
| [#118954](https://github.com/openclaw/openclaw/pull/118954) fix: Custodian wizard loses pending control after reload | 2026-08-03 | ⏳ waiting on author | 与#121560（gateway侧恢复）构成前后端配套修复 |

### 维护建议

1. **优先排查子代理完成消息丢失系列问题**（#44925、#67777、#92433）——三个issue指向同一代码路径的多个故障模式，横向对比可系统性定位根因。
2. **关注长期静默的P1 Issue**（#40611、#43367、#47975）——这些issue已开放5个月+且无fix PR，对多代理与Telegram等主力场景的稳定性构成实质影响。
3. **Snapshot恢复点系列PR（#112385→#112865→#112896）** 是当前路线图上最完整的功能拼图，若作者更新后建议优先合入。
4. **#121058 的91条评论值得专项复盘**——该issue指向 #116277 的修复未覆盖完整故障模式，建议维护团队对该类“关闭后又复发”的问题建立回归验证机制。

---

## 横向生态对比

# AI Agent 开源生态横向对比分析报告（2026-08-13）

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态已进入**高强度竞争与快速分化期**：以 OpenClaw 为参照的多分支项目（Claw 系列）占据主流视野，头部项目日活 Issue/PR 均达百条量级；安全加固、渠道稳定性和多代理可靠性是跨项目最集中的投入方向，且已从单项修复转向系列化治理。同时，以插件生态、MCP 工具链、桌面端体验和可观测性为代表的"基础设施层"竞争加速，各项目正在从"能用"向"可规模化、可运营、可审计"演进。整体呈现**功能外溢、质量内卷**的格局——新功能交付速度与回归 bug 数量同步上升。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活跃量 | PR 活跃量 | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 403 新开/活跃 | 359 待合并 | 无 | 体量最大，P1 系列 bug 长期未根治，可靠性是主要短板 |
| **IronClaw** | 29 新开/活跃 + 12 关闭 | 31 待合并 + 19 合并/关闭 | 2 个 RC（v1.2.0-rc.2/rc.3） | 极高活跃，发版冲刺中，但 Telegram 渠道新增 12 个 bug 集群 |
| **ZeroClaw** | 45 活跃 + 5 关闭 | 30 待合并 + 20 合并/关闭 | 无 | 高活跃，安全修复密集落地，Windows/macOS 桌面质量仍是短板 |
| **CoPaw** | 23 新开/活跃 + 8 关闭 | 43 更新（17 合并/关闭） | v2.1.0-beta.4 | 高活跃，核心执行链 bug 占比大，且出现修复被回滚，稳定性承压 |
| **NanoClaw** | 3 新开 + 1 重新活跃 | 9 待合并 + 1 合并 | 无 | 活跃但 PR 积压严重（有修复 PR 悬挂 2-3 个月），模板插件化重构中 |
| **Hermes Agent** | 37 新开/活跃 + 13 关闭 | 34 待合并 + 16 合并/关闭 | 无 | 中高活跃，插件生态收获期，但 Windows gateway P1 回归和 OAuth MCP 长期未愈 |
| **NanoBot** | 4 新开/活跃 + 4 关闭 | 19 待合并 + 17 合并/关闭 | 无 | 活跃且安全响应最快，当日完成多项安全修复闭环 |
| **PicoClaw** | 3 新开/活跃 | 3 待合并 | 无 | 中等活跃，合并动作为 0，2 个 stale bug 无人处理，迭代瓶颈明显 |
| **LobsterAI** | 6 更新（全部 stale） | 8 更新（5 合并/关闭 + 1 新） | 无 | PR 节奏正常，但 Issue 反馈闭环停滞 4 个月+，社区信任风险 |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | 无活动 | 无活动 | 无 | 停滞或不再活跃，暂不属于竞争格局 |

---

## 3. OpenClaw 在生态中的定位

OpenClaw 是该生态的**基线参照与体量中心**：单日 403 个活跃 Issue、359 个待合并 PR，数量级为同赛道第二梯队的 4-8 倍，社区反馈池与贡献者广度无可争议地处于首位。但其核心风险也区别于其他项目——它不是功能缺失问题，而是**多代理编排可靠性**的系统性积压：子代理完成消息丢失（#44925/#67777/#92433）已形成同一代码路径下的系列化故障，90+ 评论的静默回复复发 issue（#121058）直观反映了用户对修复效果的信任损耗。

与其他项目相比的差异化优势在于：

- **技术覆盖面最完整**：多代理编排、实时语音绑定既有会话（#119001）、开发者服务器 portals（#122536）、快照恢复点系列 PR，均指向"全栈自主智能体运行时"方向，而非单一渠道或 UI 增强。
- **路线图体系化**：Snapshot/recovery points（RFC 0013）是当前各项目中最成体系的功能拼图，三个栈式 PR 连贯推进。
- **社区反馈信号价值最高**：子代理编排、记忆信任标签、成本可见性、速率感知限流等议题均由 OpenClaw 社区最先规模化提出，事实上为同赛道项目提前标定了需求方向。

**竞争挤压点**：轻量场景侧，NanoBot/CoPaw 正以更低的使用门槛和安全响应速度吸引中小开发者；云原生侧，IronClaw 以 RC 连发的商业发布节奏快速迭代；桌面端，LobsterAI 则直接以 OpenClaw 为底层封装 GUI 体验。OpenClaw 的护城河在于多代理复杂编排这一核心纵深，但若可靠性问题继续悬置，将给分叉/竞品项目留下差异化窗口。

---

## 4. 共同关注的技术方向

### 4.1 多代理 / 子代理编排可靠性（OpenClaw、CoPaw、Hermes、PicoClaw、NanoClaw）

- **OpenClaw**：子代理完成结果静默丢失（E31/E42/E45）、多子代理并发下主会话无响应
- **CoPaw**：子 agent 死循环（#6927）；inter-agent 消息导致影子实例重复执行（#6918）；"规划后静默停止，需用户说继续"（#6921）
- **Hermes**：delegated subagent 的 scope 生命周期卡死可观测性管线（已修复，加超时边界）
- **PicoClaw**：#3330 要求 subagent/spawn 支持调用时动态指定模型
- **NanoClaw**：Agent 模板插件化重构（#3220/#2909/#3231），本质是将"创建子 agent"沉淀为规范化流程

**共同诉求**：子代理的创建、执行、完成、失败四个环节都缺少显式可见性和可恢复性，用户无法区分"agent 还在思考"与"agent 已经死了"。

### 4.2 MCP 工具链的稳定性与标准化（NanoBot、Hermes、CoPaw、PicoClaw、ZeroClaw）

- **Hermes**：OAuth MCP 连接 deadlock/parked，三个独立 issue 横跨 70 天未根治
- **NanoBot**：MCP 工具名全非 ASCII 时静默冲突（有修复 PR）
- **CoPaw**：MCP 数字字符串按数字格式传参（#6839）；长返回数据截断产生重复数据（#6958）
- **PicoClaw**：MCP 连接失败导致 agent 无限挂起（#3269）
- **ZeroClaw**：MCP 延迟访问策略集中化（#8496）、资源物化 + 预算预检（#9196）

**共同诉求**：MCP 已是事实标准，但连接生命周期、参数类型保真、超时与失败降级、资源物化均处于"每个项目各补各的洞"的阶段，缺少统一的最佳实践沉淀。

### 4.3 渠道集成从"能通"到"全特性对齐"（IronClaw、Hermes、NanoClaw、ZeroClaw、OpenClaw）

- **IronClaw**：单日新增 12 个 Telegram bug——GIF/sticker 卡死、长消息分段丢失、文件无法作为附件回传、agent 无渠道感知、routine 首次投递失败
- **Hermes**：Windows 桌面重启后微信/QQ/Telegram 全部静默；Signal 缺 quote/reply/编辑/已读回执
- **NanoClaw**：Signal 首条 DM 被静默丢弃；WhatsApp 假送达成功
- **ZeroClaw**：WeChat 同步游标崩溃窗口；Discord typing 指示器卡死
- **OpenClaw**：Telegram 私信误入主会话污染上下文

**共同诉求**：用户不再满足于"消息能收发"，而是要求渠道原生能力（话题、富媒体、附件、回执、线程语义）与 agent 渠道感知（知道自己正在哪个渠道对话）完全对齐。

### 4.4 安全与信任——凭证、路径、记忆三大高危面（NanoBot、ZeroClaw、OpenClaw、CoPaw）

- **NanoBot**：WebFetch 将含凭证 URL 外泄给 r.jina.ai；ExecTool 工作区路径绕过——当日全部修复，是生态中安全响应最快的样本
- **ZeroClaw**：browser 截图任意文件写入漏洞（双 PR 合并钉死）
- **OpenClaw**：Memory Trust Tagging by Source（按来源标记记忆信任等级，45 评论，安全评审中）
- **CoPaw**：用户反馈 agent 被执行任务被杀软拦截（#6847），涉及可执行文件签名信任

**共同诉求**：安全已不是"防御外部攻击"，而是"防止 agent 自身在不可信输入下做出越权行为"——凭证脱敏、路径边界、记忆投毒防御成为新型安全基线。

### 4.5 可观测性与成本治理（OpenClaw、NanoClaw、Hermes、IronClaw、ZeroClaw）

- **OpenClaw**：暴露 OpenRouter 单次调用成本（#9016）；内置速率感知限流（#45771）
- **NanoClaw**：用户要求轻量 `ncl status` 健康检查命令（#2504）
- **Hermes**：审批决策（smart-approve/deny）进入可观测性导出链路
- **IronClaw**：容器内健康检查因镜像缺 curl 永远无法执行（已修复）
- **ZeroClaw**：Langfuse 可观测性后端 PR、插件 Kanban 看板提案

**共同诉求**：代理的"黑箱感"正在被用户集中挑战——调用成本、运行健康、决策审计、任务进度都需要显式可查。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键特征 |
|---|---|---|---|
| **OpenClaw** | 全栈自主智能体运行时（多代理编排、实时语音、开发服务器） | 高级开发者、需要深度自定义 agent 编排的团队 | 大规模多代理会话路由 + 记忆子系统 + 运行时插件；以开放协议/RFC 驱动演进 |
| **IronClaw** | 云平台一体化部署（NEAR 生态）、多用户共享、Telegram/扩展生态 | 云服务用户、团队协作场景、NEAR 平台开发者 | 发布线工业化（RC 密集发版、健康检查、安装器重试）；WebUI 与扩展系统并行推进 |
| **ZeroClaw** | 安全加固优先的通用 agent 框架，CLI 体验 + ZeroCode 低代码面板 | 对供应链安全、审计有要求的企业/安全敏感用户 | 安全修复闭环速度最快；发布签名机制（cosign/attestation/slsa）整合；跨平台质量待补 |
| **CoPaw** | 个人知识管理 + 长会话记忆 + 收件箱，数据分析场景（DataPaw） | 个人深度用户（Windows 占比较高）、Qwen 生态用户 | 记忆/日记/文件工作区深度绑定；多 agent 协作但执行稳定性遭挑战 |
| **Hermes Agent** | 插件生态（manifest v2、自动发现、事件总线）+ 桌面端 gateway 管理 | 插件开发者、桌面多 IM 重度用户 | 插件系统最成体系；网关子进程生命周期管理是当前最弱环节（Windows P1） |
| **NanoBot** | 轻量多渠道网关，安全响应快，provider 覆盖广（DeepSeek/QwenCloud 等） | 中小开发者、快速搭建 bot 服务的用户 | Python gateway + 正在迁往 TypeScript/OpenTUI 的 CLI；最小面补齐语音/渠道能力 |
| **NanoClaw** | Agent 模板工厂化（Agent Plugins 1.0.0）+ 多渠道（WhatsApp/Signal/Telegram/Dial） | 通过模板大批量创建 agent 的场景用户 | 模板即插件目录格式；升级迁移逻辑缺失（legacy 数据不可见）是当前主要隐患 |
| **PicoClaw** | 极轻量 agent 框架，边缘/嵌入式背景（Sipeed），Telegram/WebUI | 轻量部署、资源受限环境 | agent 核心机制修复 PR 等待过久，迭代节奏落后 |
| **LobsterAI** | 桌面 GUI 客户端，封装 OpenClaw 技能管理 | 桌面端、非 CLI 用户 | Electron 跨平台；身为前端但 Issue 反馈已停滞 4 个月，安全疑虑未回应 |

---

## 6. 社区热度与成熟度

### 第一梯队：极高活跃，快速迭代期
- **OpenClaw**：体量统治级，但处于"功能外溢 vs 可靠性债务并行"的阶段
- **IronClaw**：最接近商业发布节奏（单日双 RC），发布基建成熟度领先
- **ZeroClaw**：安全修复执行力强，但跨平台质量问题积压（Windows 74 测试失败 64 天未闭环）
- **CoPaw**：迭代速度快，修复被回滚说明仍处于快速试错期
- **NanoClaw**：架构重构（模板插件化）冲刺中，但渠道修复 PR 积压 2-3 个月，节奏失衡

### 第二梯队：中高活跃，质量巩固/瓶颈期
- **NanoBot**：生态中最健康的"质量巩固"样本——当日安全漏洞从发现到修复全链路闭环，功能合入与积压均在 20 条量级
- **Hermes**：插件生态进入收获期，但 34 条 PR 待合并 + 2 个 Windows P1 无 fix，管线吞吐承压

### 第三梯队：活跃度低或反馈停滞
- **PicoClaw**：贡献者 PR 等待 10-18 天无 review，严重 bug stale 24 天，活跃度由少数外部贡献者维持
- **LobsterAI**：PR 合入正常但 Issue 全部 stale，用户"反馈-响应"闭环完全停滞
- **NullClaw / TinyClaw / Moltis / ZeptoClaw**：24 小时零活动，实质退出竞争

---

## 7. 值得关注的趋势信号

### 7.1 静默失败是用户信任的第一杀手
OpenClaw 的 #121058（91 评论）、CoPaw 的 #6921、Hermes 的 #83683、NanoClaw 的 #2346 指向同一结论：**用户最能容忍功能缺失，最不能容忍"无信号的死亡"**。对 agent 开发者的参考价值：所有异步任务必须设计显式的状态机（运行中/成功/失败/需人工介入）和可恢复路径，任何 without-notification 的失败都是产品级事故。

### 7.2 MCP 生态进入"精品化"拐点
多项目同时出现 MCP 连接死锁、类型污染、路径逃逸、非 ASCII 命名冲突——说明第一波"接入即用"红利已过，下一阶段的竞争将围绕**连接生命周期、权限策略、类型契约、资源物化**展开。能率先沉淀出标准 MCP 可靠性实践的框架将获得开发者生态优势。

### 7.3 "Agent 安全"的定义从防外部攻击转向防自我越权
凭证不随 URL 外泄（NanoBot）、截图不可写工作区外（ZeroClaw）、记忆需按来源标记信任（OpenClaw #7707）——这三件事的共同模式是：**agent 自身是不可信输入的头号传播载体**。记忆来源分级、工具路径边界、敏感信息脱敏将成为 agent 框架的安全标配。

### 7.4 渠道集成复杂度被系统性低估
IronClaw 单日 12 个 Telegram bug、Hermes 的 Windows 静默故障、NanoClaw 的 Signal 首条消息丢失——渠道适配的"最后一公里"（富媒体、分段、回执、线程、重连）正在吞噬大量迭代资源。先建立**跨渠道抽象测试矩阵**的项目将获得显著的稳定性壁垒。

### 7.5 可观测性与成本治理成为新的功能刚需
OpenRouter 成本暴露、`ncl status` 健康检查、审批决策审计导出、容器健康检查修复——用户正从 "agent 能做什么" 转向 "agent 正在花多少钱、是否还活着、为什么这么做"。**可观测性是 agent 进入生产环境的前置条件**，而非锦上添花。

### 7.6 插件生态正在从"能写"走向"可规模化"
Hermes 的插件自动发现机制、manifest v2、生命周期管理、更新时 stash 本地改动；NanoClaw 的模板插件化；OpenClaw 的门户审查——三线并进说明**插件系统的接口契约、生命周期与分发机制**正在成为框架级竞争的下一决胜点。开发者选型时应重点评估目标框架的插件 DX 和治理能力。

### 7.7 跨平台质量是尚未被占领的高地
Windows 74 个测试失败（ZeroClaw）、Windows gateway 进程静默死亡（Hermes）、macOS 空白窗口（ZeroClaw）、macOS 菜单点击缺陷（CoPaw）——Windows/macOS 桌面端是多项目共同的最弱环节。**在移动端与云端高度内卷的当下，桌面端的稳定体验反而是差异化竞争的时间窗口。**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时 NanoBot 项目保持高活跃度：共 8 条 Issue 更新（4 条新开/活跃、4 条关闭），36 条 PR 更新（19 条待合并、17 条已合并/关闭），无新版本发布。今日主线是**安全与稳定性修复**——WebFetch 凭证泄露（[#4884](https://github.com/HKUDS/nanobot/issues/4884)）、ExecTool 工作区路径绕过（[#5218](https://github.com/HKUDS/nanobot/pull/5218) / [#5329](https://github.com/HKUDS/nanobot/pull/5329)）、Docker Compose 权限问题（[#5295](https://github.com/HKUDS/nanobot/issues/5295)）均在当日闭环。功能侧则合入了 DeepSeek V4 Pro Responses 支持与 Hook 自动发现机制，另有 19 条 PR 待合并，其中包含一条 p0 级会话数据保护修复。整体来看，项目维护节奏紧凑、安全响应迅速，社区反馈（如 Matrix 线程、TTS 语音输出）持续积累，项目健康度良好。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共 17 条 PR 合并/关闭，以下为关键项：

**安全加固（当日重点）**
- [PR #5258](https://github.com/HKUDS/nanobot/pull/5258) `fix(web)`：彻底切断凭证 URL 外泄路径——含 userinfo 与 token/签名类 query 参数的 URL 改走本地可读性解析；同时检查完整本地重定向链后才允许将原始 URL 转发给远端 Jina reader，短链接绕过场景也被封堵。该 PR 关闭了安全 Issue [#4884](https://github.com/HKUDS/nanobot/issues/4884)。
- [PR #5329](https://github.com/HKUDS/nanobot/pull/5329) `fix(exec)`：加固 `ExecTool` 工作区边界——路径守卫现在能识别裸 `~`、`~/...`、`~user` 命名用户路径、赋值/选项值、`<~root/.bashrc` 输入重定向以及顶层 shell 操作符后的 tilde 命令词，修补多处路径逃逸。
- [PR #5218](https://github.com/HKUDS/nanobot/pull/5218) `fix(tools)`：ExecTool 路径守卫正确覆盖重定向与分组定界符相邻路径，同时避免因简单放宽 POSIX 表达式而截断合法引用路径。

**稳定性与部署**
- [PR #5320](https://github.com/HKUDS/nanobot/pull/5320) `fix(docker)`：在 `cap_drop: ALL` 基础上按最小权限原则恢复 root 引导路径所需的三项 capabilities，并启用 `no-new-privileges`，防止降权后的非 root 进程通过 setuid 重新提权。对应修复部署失败 Issue [#5295](https://github.com/HKUDS/nanobot/issues/5295)。
- [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) `fix(session)`：会话记录从 `<workspace>/sessions/` 迁至 `<config-dir>/sessions/<workspace-id>/`，避免工作区作用域的工具读取/篡改会话历史（对应 [#5278](https://github.com/HKUDS/nanobot/issues/5278) 提出的可达性问题）。

**功能推进**
- [PR #5362](https://github.com/HKUDS/nanobot/pull/5362) `feat(providers)`：DeepSeek V4 Pro 接入原生 Responses API（与 V4 Flash 并列），并对 DeepSeek 显式保留 `reasoning.effort: "none"`，确保默认思考模式可被有效关闭。
- [PR #4878](https://github.com/HKUDS/nanobot/pull/4878) `feat(hooks)`：引入 Hook 自动发现机制（pkgutil + entry_points），自定义 Hook 只需放置 `.py` 文件即可注册，无需手工接线。

**其他**
- [PR #5230](https://github.com/HKUDS/nanobot/pull/5230) `fix(gemini)`：保留 Gemini 原生函数调用签名，修复来自无签名 provider 的会话回放被 Gemini 3 拒绝的问题。

对应关闭的 Issue 还包括 [#5327](https://github.com/HKUDS/nanobot/issues/5327)（推理时重复消息）与 [#4858](https://github.com/HKUDS/nanobot/issues/4858)（工具 provider 生命周期重构，p2）。

---

## 4. 社区热点

- **[Issue #5327](https://github.com/HKUDS/nanobot/issues/5327)（已关闭，11 条评论）——今日最热讨论**：用户报告机器人在推理过程中随机重复同一句话（如反复输出 "Good points, let me investigate the issue"）。该问题因"随机出现"而难以稳定复现，社区在评论中协作补充了触发场景后关闭。背后诉求是对推理过程的可控性和输出洁净度的期待。
- **[Issue #5295](https://github.com/HKUDS/nanobot/issues/5295)（已关闭，5 条评论）**：`docker compose` 部署直接失败，报错 `cannot open /usr/local/bin/entrypoint.sh: Permission denied`。这是新用户按官方文档上手的第一道门槛，评论区反映出部署体验问题对采用率的影响。已由 [PR #5320](https://github.com/HKUDS/nanobot/pull/5320) 修复。
- **[Issue #4010](https://github.com/HKUDS/nanobot/issues/4010)（开放，3 条评论，3 👍）**：text-to-speech 语音输出功能提案。用户指出 NanoBot"听得懂但说不出"，在原生支持语音消息的渠道上体验断裂，是长期（5 月 26 日起）未决的高赞需求。
- **[Issue #5350](https://github.com/HKUDS/nanobot/issues/5350)（新开，1 条评论）**：提议在现有 DashScope 路径旁新增向后兼容的 QwenCloud provider，面向国际 Qwen 开发者，反映项目在海外/多平台使用场景的扩展诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

**高严重度**
- （已修复）[#4884](https://github.com/HKUDS/nanobot/issues/4884) 安全/隐私：WebFetch 将完整用户 URL 发送给 `r.jina.ai`，可能外泄 URL 中的凭证信息。当日已由 [PR #5258](https://github.com/HKUDS/nanobot/pull/5258) 修复。
- （已修复）[#5295](https://github.com/HKUDS/nanobot/issues/5295) Docker Compose 部署失败（entrypoint 权限拒绝），阻断新用户上线。当日已由 [PR #5320](https://github.com/HKUDS/nanobot/pull/5320) 修复。
- （待合并，p0）[PR #5271](https://github.com/HKUDS/nanobot/pull/5271) `fix(session)`：防止过期后台任务保存覆盖 `/new` 或生命周期替换后的会话数据。该 PR 提出将 `/new` 与 per-session compaction 串行化，并拒绝来自失效/竞争/复制会话的保存。**属数据丢失级别问题，已开放一周，建议优先 review 合并。**

**中严重度**
- （开放，无修复 PR）[#5348](https://github.com/HKUDS/nanobot/issues/5348)：两个 token 用量设置测试在每天约 5 小时窗口内确定性失败——`record_token_usage()` 默认使用 UTC，而配置读取使用已设定时区。属测试基建时区语义不一致问题。
- （开放）[#5275](https://github.com/HKUDS/nanobot/issues/5275)：Matrix 渠道中"reply in thread"发起的消息流未形成独立上下文，与 Discord/Slack 的线程行为不一致。相关修复 [PR #5292](https://github.com/HKUDS/nanobot/pull/5292)（回复启动该 turn 的 room 级事件）仍在开放中。

**低严重度**
- （已有修复 PR）[PR #5360](https://github.com/HKUDS/nanobot/pull/5360)：MCP 工具名全为非 ASCII（如"获取天气"）时被 `_sanitize_name` 全部替换为 `_`，多个工具静默冲突；该 PR 已提交去重修复。
- （已有修复 PR）[PR #5361](https://github.com/HKUDS/nanobot/pull/5361)：微信渠道 QR 登录 token 在 `config.json` 无 `channels` 配置时丢失，仅保存到状态文件；该 PR 已提交持久化修复。

---

## 6. 功能请求与路线图信号

- **[Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) TTS/语音输出**：最老牌的开放功能请求（5 月 26 日），3 👍。语音输入已具备，"语音闭环"是体验补全的自然方向，但目前无关联 PR，建议维护者明确是否进入路线图。
- **[Issue #5350](https://github.com/HKUDS/nanobot/issues/5350) QwenCloud provider**：新增提案，要求与现有 DashScope 路径向后兼容（保留 provider ID、API key、endpoint 与存量配置）。今日 DeepSeek V4 Pro 已合入（[PR #5362](https://github.com/HKUDS/nanobot/pull/5362)），provider 能力扩张处于活跃期，该提案有望被采纳。
- **[Issue #5275](https://github.com/HKUDS/nanobot/issues/5275) Matrix 线程上下文**：渠道行为一致性诉求，与在途的 [PR #5292](https://github.com/HKUDS/nanobot/pull/5292) 直接相关，预计将随该 PR 联动推进。
- **WebUI 是当前最大功能投入方向**：多个在途 PR 均指向 WebUI——会话协作（mentions，[#5358](https://github.com/HKUDS/nanobot/pull/5358)）、多渠道设置流程重构（[#5356](https://github.com/HKUDS/nanobot/pull/5356)）、应用发现页改版（[#5342](https://github.com/HKUDS/nanobot/pull/5342)）、删除会话前取消活动 turn（[#5357](https://github.com/HKUDS/nanobot/pull/5357)）。这些信号表明下一版本将重点打磨 WebUI 的多人协作与配置体验。
- **CLI 形态升级**：[PR #4329](https://github.com/HKUDS/nanobot/pull/4329) 以原生 TypeScript/OpenTUI 重建 `nanobot agent`，Python gateway 保留为唯一后端实现。已开放 2 个月、带 `conflict` 标记，属较大的产品方向调整，短期可能不会合入，但值得关注。

---

## 7. 用户反馈摘要

- **推理重复输出令人困惑**（[#5327](https://github.com/HKUDS/nanobot/issues/5327)）：用户描述"给它一些调查指令后，随机重复 'Good points, let me investigate the issue' 之类的短语"。核心痛点是推理过程不可控、输出出现空转感，影响对模型可靠性的信任。
- **部署门槛伤害新用户**（[#5295](https://github.com/HKUDS/nanobot/issues/5295)）：按官方 deployment.md 操作即失败，说明文档与镜像的组合验证存在盲区。修复已合入，建议后续在 CI 中对默认 Compose 启动做冒烟验证。
- **渠道能力不对等**（[#5275](https://github.com/HKUDS/nanobot/issues/5275)、[#4010](https://github.com/HKUDS/nanobot/issues/4010)）：Matrix 用户要求线程行为向 Discord/Slack 看齐；语音用户强调"能听不能说"的断裂体验。用户对跨渠道一致性敏感，且期望以最小新增面积补齐闭环。
- **社区测试贡献活跃**（[#5348](https://github.com/HKUDS/nanobot/issues/5348)）：贡献者精确复现了时区相关的 5 小时测试失败窗口（约美中时间 22:00–03:00），说明社区不仅在使用，也在认真参与测试质量改进。

---

## 8. 待处理积压

以下事项已开放较长时间或风险较高，提醒维护者关注：

- **[Issue #4010](https://github.com/HKUDS/nanobot/issues/4010) TTS/语音输出**：开放 2.5 个月，3 👍，无 PR、无维护者回应。建议明确路线图归属或给出暂缓理由。
- **[PR #4329](https://github.com/HKUDS/nanobot/pull/4329) TypeScript 终端 UI**：开放 2 个月，带 `conflict` 标记，设计方向涉及 Python/TS 双栈边界，需要维护者做取舍决策。
- **[PR #5271](https://github.com/HKUDS/nanobot/pull/5271) p0 会话数据覆盖修复**：开放一周未合并，涉及数据丢失风险，应优先 review。
- **[PR #5204](https://github.com/HKUDS/nanobot/pull/5204) Responses 能力声明式重构（p1）**：开放 12 天，带 `conflict` 标记，涉及 OpenAI、GitHub Copilot、DeepSeek 多个 provider 的行为声明，需要维护者协调推进。
- **[Issue #5275](https://github.com/HKUDS/nanobot/issues/5275) Matrix 线程上下文**：开放一周，关联修复 [PR #5292](https://github.com/HKUDS/nanobot/pull/5292) 在途，建议联动治理，避免渠道行为分化进一步扩大。
- **[PR #5291](https://github.com/HKUDS/nanobot/pull/5291) 子代理会话记录持久化**：开放近一周，当前子代理运行结束后完整对话（工具调用、结果、推理步骤）即丢失，影响可审计性，等待 review。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时内，Hermes Agent 仓库保持中高活跃度：**Issue 更新 50 条**（新开/活跃 37，关闭 13），**PR 更新 50 条**（待合并 34，合并/关闭 16），无新版本发布。插件接口扩展（[#64182](https://github.com/NousResearch/hermes-agent/issues/64182)）系列多个子任务今日集中关闭，表明这一跨月项目已从设计阶段进入主线落地期；**Windows 平台 gateway 生命周期管理连续出现两个 P1 级故障**（[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)、[#84185](https://github.com/NousResearch/hermes-agent/issues/84185)），是当前最急需干预的稳定性风险。OAuth MCP 连接稳定性问题从 6 月延续至今仍未根治，已形成 3 份独立 issue（[#38193](https://github.com/NousResearch/hermes-agent/issues/38193)、[#49543](https://github.com/NousResearch/hermes-agent/issues/49543)、[#81051](https://github.com/NousResearch/hermes-agent/issues/81051)）。功能开发与缺陷修复同步推进，但 PR 合并管道有明显积压（34 条待合并），管线吞吐需重点关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

过去 24 小时合并/关闭的变更显示项目在三个维度取得实质推进：

### 3.1 插件生态：第一波接口扩展收尾落地

插件接口扩展跟踪项（[#64182](https://github.com/NousResearch/hermes-agent/issues/64182)）下的多个子 feature issue 今日集中关闭，包括：

- 流式 LLM 输出 observer hooks（[#64161](https://github.com/NousResearch/hermes-agent/issues/64161)）
- 社区插件索引 + `hermes plugins search`（[#64181](https://github.com/NousResearch/hermes-agent/issues/64181)）
- STT 请求钩子与 prompt 透传（[#64168](https://github.com/NousResearch/hermes-agent/issues/64168)）
- 插件间事件总线（[#64164](https://github.com/NousResearch/hermes-agent/issues/64164)）
- `pre_command` 中间件 + MCP 工具访问（[#64204](https://github.com/NousResearch/hermes-agent/issues/64204)）
- 可追加式脱敏模式注册表（[#65449](https://github.com/NousResearch/hermes-agent/issues/65449)）
- manifest v2 与插件生命周期/能力声明（[#64165](https://github.com/NousResearch/hermes-agent/issues/64165)、[#64228](https://github.com/NousResearch/hermes-agent/issues/64228)、[#64229](https://github.com/NousResearch/hermes-agent/issues/64229)）

与此对应，gateway 可观测 token stream 钩子 PR [#65077](https://github.com/NousResearch/hermes-agent/pull/65077) 也在今日关闭。同日新提交的 PR [#84979](https://github.com/NousResearch/hermes-agent/pull/84979) 专门解决插件钩子在各调用面（dashboards、TUI、query mode、cron）的投递一致性，说明第一波功能落地后正在做打磨。

### 3.2 桌面端能力补齐

- 桌面 UI 切换工作目录/workspace 的 feature（[#42525](https://github.com/NousResearch/hermes-agent/issues/42525)）今日关闭，并标记 `sweeper:implemented-on-main`——用户无需再手动改 `config.yaml` 后重启 gateway。
- Windows 控制台窗口在每次子进程 spawn 时闪烁的问题（[#81039](https://github.com/NousResearch/hermes-agent/issues/81039)）已关闭。

### 3.3 可观测性与稳定性

- PR [#83517](https://github.com/NousResearch/hermes-agent/pull/83517)（合并/关闭）：让审批决策（smart-approve、Allow Once、deny）进入可观测性导出链路，企业级审计能力补强。
- PR [#83514](https://github.com/NousResearch/hermes-agent/pull/83514)（合并/关闭）：为 delegated subagent 的原生 scope 生命周期操作加超时边界，避免卡死的可观测性管线阻塞 agent 主流程。

### 3.4 值得关注的新提交 PR（待合并）

| PR | 内容 | 价值 |
|---|---|---|
| [#84979](https://github.com/NousResearch/hermes-agent/pull/84979) | 修复插件钩子在所有 surface 的投递一致性 + 对称 force-reload | 插件系统完成度关键补丁 |
| [#84975](https://github.com/NousResearch/hermes-agent/pull/84975) | `hermes plugins update` 自动 stash 本地改动后更新并回放 | 解决插件作者被本地修改阻塞更新的痛点 |
| [#84808](https://github.com/NousResearch/hermes-agent/pull/84808) | 压缩上下文时阻止过期的 todo 超越其策略继续存活 | 防止 agent 继续执行已被否定的破坏性操作 |
| [#84931](https://github.com/NousResearch/hermes-agent/pull/84931) | MCP 工具调用跨重试保持 `toolAttemptId` 一致 | 改善 MCP 恢复场景的可追踪性 |
| [#84468](https://github.com/NousResearch/hermes-agent/pull/84468) | `POST /v1/runs` 支持 `Idempotency-Key` 幂等重试 | 已广告但未实现的 API 语义补课 |
| [#84978](https://github.com/NousResearch/hermes-agent/pull/84978) | Webhook Revolution 战役的 canonical route model + profile-aware store（任务 6） | 推进大面 webhook 重构 |

## 4. 社区热点

按今日评论数与互动热度排序：

| 热度 | Issue/PR | 评论/点赞 | 主题 |
|---|---|---|---|
| 1 | [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) | 33 评论 | 插件接口扩展 Tracking Issue（7 月社区讨论蒸馏出的路线图） |
| 2 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 19 评论 | skills-index 自动探针报警：索引已 29.8h 未更新（阈值 26h） |
| 3 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | 10 评论 | Windows 桌面端重启后 gateway 被强杀且不重启，微信/QQ/Telegram 全部静默（P1 回归） |
| 4 | [#64161](https://github.com/NousResearch/hermes-agent/issues/64161) | 8 评论 | 流式 LLM 输出 observer hooks（已关闭） |
| 5 | [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | 7 评论 / 3👍 | Signal adapter 补齐 quote/reply、编辑、远程删除、已读回执 |
| 6 | [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | 6 评论 | Webhook Revolution——5×2×3 graph-gated 修复战役 meta-issue |
| 7 | [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) | 6 评论 / 7👍 | 桌面端多 gateway 连接 + 每 gateway 标签页 |

**背后诉求分析：**

- **插件作者**（[#64182](https://github.com/NousResearch/hermes-agent/issues/64182)，33 条评论）：核心诉求已不止于"能写插件"，而是要求稳定的接口契约、生命周期管理、跨插件通信与权限知情——这是开源生态从"能用"走向"可规模化"的标志。
- **基础设施维护者**（[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)，19 条评论）：文档站 skills-index 的 CI 构建产物持续 3 小时以上的延迟，说明自动化发布管线存在稳定性缺陷，bot 24 小时盯防也侧面反映该问题长期未根治。
- **Windows 桌面用户**（[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)，10 条评论）：IM 静默是最不能接受的一类故障，用户对"重启桌面应用后消息通道不可用"表现出了很高的焦虑值，且这是 0.20.0 引入的回归。

## 5. Bug 与稳定性

### P1 — 高危（均为 Windows 相关，且暂无直接修复 PR）

| Issue | 描述 | 状态 |
|---|---|---|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | 桌面应用每次重启都会 force-kill 正在运行的 messaging gateway 且**永不重新拉起**；WeChat/QQ/Telegram 全部静默，0.20.0 回归 | 开放，暂无 fix PR |
| [#84185](https://github.com/NousResearch/hermes-agent/issues/84185) | Windows 上 `hermes update` 后新 gateway 进程静默死亡：不写日志、不生成 PID 文件、无退出记录，直到手动重启 | 开放，暂无 fix PR |
| [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) | CLI 更新器在 shallow/diverged 安装中继续使用 `rev-list --count` 计算新提交数，产生虚假大数字（桌面端 [#51922](https://github.com/NousResearch/hermes-agent/issues/51922) 已修复同类问题但 CLI 未跟进） | 开放，暂无 fix PR |

> 注：[#83683](https://github.com/NousResearch/hermes-agent/issues/83683) 与 [#84185](https://github.com/NousResearch/hermes-agent/issues/84185) 高度关联，均指向 **Windows gateway 子进程生命周期管理缺陷**（升级/重启后进程不被拉起、死亡无痕迹），建议合并排查。

### P2 — 中危（OAuth MCP 稳定性为长期顽疾）

| Issue | 描述 | 状态 |
|---|---|---|
| [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | OAuth 认证的 MCP server 在 keepalive 重连后永久死锁：auth-flow generator 的锁被跨 task 释放（6 月 3 日创建，已超 70 天） | 开放，无 fix PR |
| [#81051](https://github.com/NousResearch/hermes-agent/issues/81051) | OAuth MCP 连接运行约 4 小时后被永久标记 "parked"，后续重连全部失败，只能重启 gateway 恢复 | 开放，无 fix PR |
| [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) | OAuth MCP（如 Honeycomb）会话中途掉出可用工具集，报 `RuntimeError: The current task is not holding this lock`，调用挂起 120s | 开放，无 fix PR |
| [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) | Desktop 下 `browser_exec` 因 PYTHONPATH 指向 Hermes venv 导致 `pydantic_core` ModuleNotFoundError，每次调用崩溃 | 开放，无 fix PR |
| [#84206](https://github.com/NousResearch/hermes-agent/issues/84206) | `@file` 上下文展开假定 UTF-8，GB18030/GBK、Shift_JIS 等合法文本附件直接 `UnicodeDecodeError` | 开放，无 fix PR |
| [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | DeepSeek 作为主模型时 `auxiliary.title_generation` 报 HTTP 400 `response_format type is unavailable now` | 开放，无 fix PR |
| [#77505](https://github.com/NousResearch/hermes-agent/issues/77505) | VirtualSessionList 在合并 #77328 的 memoization 后滚动抖动依旧，物理滚动体验未解决 | 开放，无 fix PR |

### P3 — 低危（基础设施）

- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616)：skills-index 生成滞后（29.8h > 26h 阈值），CI 定时任务疑似未按时产出。

**小结：** 今日没有任何针对上述 P1/P2 bug 的新修复 PR 提交；3 个独立 OAuth MCP issue 从 6 月贯穿至今仍然共存，说明根因尚未被定位。PR [#84931](https://github.com/NousResearch/hermes-agent/pull/84931) 让 MCP 重试保留同一 `toolAttemptId`，方向上利好 MCP 恢复场景，但不直接解决 deadlock/parked 问题。

## 6. 功能请求与路线图信号

### 新出现的功能请求

- **[#84921](https://github.com/NousResearch/hermes-agent/issues/84921)（新开，P3）**：新增 `display.autolink_urls` 配置，允许关闭桌面端 Markdown 渲染器自动将裸 URL 转为带标题的链接。用户场景是粘贴纯 URL 列表时不需要页面标题抓取，这是渲染层细粒度控制需求。
- **[#45779](https://github.com/NousResearch/hermes-agent/issues/45779)（开放，7👍）**：桌面端多 gateway 连接 + 每 gateway 独立标签页。多机器（VPS、home server、Mac Mini）用户的核心提效需求，已开放 2 个月且是桌面 feature 中获赞最高的。
- **[#39043](https://github.com/NousResearch/hermes-agent/issues/39043)（开放，3👍）**：Signal adapter 补齐原生 quote/reply、编辑、远程删除、已读回执。信号表明平台适配并不止于"能收发消息"，用户期望全特性对齐。

### 路线图信号

- **Webhook Revolution（[#84834](https://github.com/NousResearch/hermes-agent/issues/84834)）** 是当前最大规模的重构战役（5×2×3 graph-gated），今日 PR [#84978](https://github.com/NousResearch/hermes-agent/pull/84978) 已提交其任务 6（canonical route model + profile-aware store），预计后续会有更多战役子 PR 陆续进入合并队列。
- **插件接口扩展（[#64182](https://github.com/NousResearch/hermes-agent/issues/64182)）** 第一波已收尾，剩余开放子项（如 [#64176](https://github.com/NousResearch/hermes-agent/issues/64176) gateway UX observer hooks + capability-gated platform actions）是下一阶段候选。
- **Discord 对齐战役（[#79564](https://github.com/NousResearch/hermes-agent/issues/79564)）** 仍在开放，暂无对应 PR 出现在今日清单，短期落地优先级不明。

## 7. 用户反馈摘要

从今日活跃 issue 的评论与描述中提炼的用户声音：

- **Windows 用户对"静默故障"容忍度极低**：用户 `linfeng961` 和 `zuowen7` 分别报告网关进程在更新后/桌面重启后无声消失，没有任何日志可查，微信/QQ/Telegram 完全离线，必须手动介入才能恢复。[#84185](https://github.com/NousResearch/hermes-agent/issues/84185) [#83683](https://github.com/NousResearch/hermes-agent/issues/83683)
- **OAuth MCP 用户对"4 小时必须重启"感到疲惫**：用户 `tveheim` 明确表示 "only a full gateway restart recovers"，生产使用影响很大。[#81051](https://github.com/NousResearch/hermes-agent/issues/81051)
- **中文等多字节 locale 用户被 UTF-8 假设卡住**：用户 `NealZhouPanda` 指出 GB18030/GBK 编码的 CSV/TXT 在 `@file` 展开时直接报错，并点名 Windows 用户的常见场景。[#84206](https://github.com/NousResearch/hermes-agent/issues/84206)
- **DeepSeek 用户发现辅助功能不可用**：`provider: auto` 路由到 DeepSeek 时，标题生成任务 400 失败，用户希望模型无关的辅助任务不要绑定 `response_format` 可用性。[#83390](https://github.com/NousResearch/hermes-agent/issues/83390)
- **桌面端用户被细节体验困扰**：`browser_exec` 在 desktop 环境下直接崩溃（[#83427](https://github.com/NousResearch/hermes-agent/issues/83427)）；侧边栏滚动依旧抖动（[#77505](https://github.com/NousResearch/hermes-agent/issues/77505)）；还有用户想要一个开关关掉 URL 自动转链接（[#84921](https://github.com/NousResearch/hermes-agent/issues/84921)）。
- **插件维护者正面反馈**：核心成员 `teknium1` 在插件接口系列中持续高强度提交，今日又有 2 个改进 PR（[#84975](https://github.com/NousResearch/hermes-agent/pull/84975) 自动 stash 本地修改、[#84979](https://github.com/NousResearch/hermes-agent/pull/84979) surface 投递一致性），说明插件 DX 是当下团队投入的重点之一。

## 8. 待处理积压

以下为长期开放、至今无修复/实现 PR 的重要项，提醒维护者关注：

| 类型 | 编号 | 创建时间 | 级别 | 说明 |
|---|---|---|---|---|
| Issue | [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) | 2026-06-03 | P2 | OAuth MCP keepalive 重连永久死锁，已超 70 天无修复，且与 #49543/#81051 构成问题簇 |
| Issue | [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) | 2026-06-27 | **P1** | CLI 更新器在 shallow/diverged 安装下计算错误提交数，P1 已积压 45+ 天 |
| Issue | [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) | 2026-06-04 | P3 | Signal 原生 quote/reply/编辑/删除/已读回执，2 个月无实现 PR，社区 3👍 |
| Issue | [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) | 2026-06-20 | P2 | OAuth MCP 会话中途掉线 + 锁错误，近 2 个月无修复 |
| Issue | [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) | 2026-06-13 | P3 | 桌面多 gateway 标签页，7👍 高赞需求 2 个月未进入实现 |
| Issue | [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) | 2026-08-10 | P2 | Desktop 下 `browser_exec` 完全不可用，已影响用户 3 天 |
| PR | [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | 2026-07-16 | P3 | `claude-agent-sdk` provider 正式运行时，加持 OAuth 订阅计费 + fail-closed；挂 11 个标签、涉及 billing 与安全边界，需要谨慎 review，已等待近 30 天 |

---

**整体健康度评价：** 项目处于功能交付活跃期，插件生态是当前最强的增长引擎；但 Windows 平台 gateway 进程管理出现 P1 级回归、OAuth MCP 问题久拖未决、PR 合并管线积压 34 条，是未来一周需要优先处理的三个风险点。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时，PicoClaw 项目保持中等活跃度：新增/活跃 Issue 3 条、待合并 PR 3 条，无新版本发布，无 PR 被合并或关闭。值得关注的是，今日出现了一个新功能请求（#3330，支持子 agent 动态指定模型），说明社区对 agent 灵活编排的需求正在上升；同时，两个标记为 stale 的 Bug（Web UI 卡顿、MCP 连接失败导致挂起）仍在持续讨论中，其中 #3269 属于严重影响核心体验的稳定性问题，但尚未有对应 fix PR。整体来看，项目讨论热度尚可，但合并节奏偏慢，存在贡献者 PR 等待周期较长的问题。

## 2. 版本发布

过去 24 小时内无新版本 Release。

## 3. 项目进展

今日无 PR 被合并或关闭，项目主线代码库在过去 24 小时没有新的功能落地。目前有 3 个 PR 处于待合并状态，均为较早提交但仍在更新中的分支：

- **#3316** 修复 routed-agent 上下文管理问题（历史记忆、自动压缩、seahorse bootstrap），涉及 agent 核心机制，已等待 10 天；
- **#3315** 支持 Telegram 私聊 Bot 的话题（topic）模式，功能增量明确，已等待 10 天；
- **#3299** 新增 Exa 原生 Web 搜索 provider，扩展了工具生态，已等待 18 天。

这些 PR 一旦合并，将分别改善多智能体会话记忆可靠性、Telegram 接入体验和搜索能力。但目前合并速度是阻碍项目迭代的主要瓶颈。

## 4. 社区热点

**#3281 — Web UI 输入框在长历史记录下严重卡顿**（评论 5 条，👍 1）
该 Issue 是当前讨论最活跃的线程，创建于 07-21，至今仍在更新。用户反馈在单会话积累一定历史消息后，输入框出现明显延迟，直接影响日常使用体验。评论区已有 5 条讨论，说明该问题影响面较广，社区用户对 Web UI 交互的流畅度有明确期待。
[查看 Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)

**#3269 — MCP 服务器连接失败会导致 agent 循环挂起**（评论 4 条，👍 1）
该问题来自 nightly 版本用户，描述了一个严重的健壮性缺陷：MCP server 连接失败时，agent loop 会无限挂起，导致整个聊天界面停止回复。这触及了 PicoClaw 作为 agent 框架的核心可靠性底线，评论区有 4 条讨论，用户对故障恢复机制有较高关注。
[查看 Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)

## 5. Bug 与稳定性

按严重程度从高到低排列：

**严重 — MCP 连接失败导致 agent 挂起，对话中断**（#3269）
- 影响：MCP server 连接失败时，agent 循环不退出、不报错、不恢复，用户被静默"锁死"在不可用状态，是最恶劣的故障模式之一。
- 状态：OPEN，已 stale（最后更新 08-12），无关联 fix PR。
- [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)

**中等 — Web UI 长历史记录下输入卡顿**（#3281）
- 影响：会话历史稍长（具体阈值待确认）后，输入框响应延迟明显，影响日常聊天操作。虽不致命，但属于高频触发的体验问题。
- 状态：OPEN，已 stale（最后更新 08-13），无关联 fix PR。
- [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)

**待确认 — routed-agent 上下文管理异常**（来自 PR #3316 的 Bug 描述）
- 影响：dispatch 规则将 agent 路由到 Discord 频道后，该 agent 无法记忆之前的消息，auto-compaction 也不会触发。这是一个行为层面的正确性缺陷，影响多 agent 场景下的会话连续性和上下文管理。
- 状态：已有修复 PR 提交（#3316），但尚未合并。
- [PR #3316](https://github.com/sipeed/picoclaw/pull/3316)

## 6. 功能请求与路线图信号

**#3330 — delege/spawn/subagent 工具支持动态指定模型**（今日新开）
该请求提出了一个明确的路线图信号：当前 `delegate`、`spawn`、`subagent` 的子 agent 模型不支持在调用时指定，模型选择是静态的（分别继承配置文件或 defaultModel）。社区希望获得更灵活的"按需指定模型"能力，这暗示用户对混合模型编排（例如简单任务用轻量模型、复杂推理用大模型）有实际需求。结合 PicoClaw 的 agent 架构，此功能若落地，将显著增强 subagent 的实用性和成本优化空间。
[查看 Issue #3330](https://github.com/sipeed/picoclaw/issues/3330)

**已有 PR 反映的路线图方向：**
- **搜索能力扩展**（#3299）：Exa web 搜索 provider，表明项目正在扩展现有 `tools.web` 的 provider 生态；
- **Telegram 集成完善**（#3315）：私聊话题支持，属渠道适配的精细化打磨。

综合判断，subagent 动态模型、搜索生态、渠道适配是当前社区贡献的主要方向，这些功能有一定概率被纳入下一个版本（需维护者推动合并）。

## 7. 用户反馈摘要

- **Web UI 性能是真实痛点**（#3281）：用户报告历史记录稍长后输入卡顿，反映出前端渲染/状态管理在长会话场景下存在明显瓶颈，这类性能问题在高频使用中会逐步放大，影响满意度。
- **MCP 失败缺乏优雅降级**（#3269）：用户期望在外部依赖（MCP server）故障时，agent 能够给出错误提示或自动超时恢复，而不是无响应地挂起。这暴露了当前 agent 循环在异常处理上的缺口。
- **routed-agent 会话记忆失效**（来自 PR #3316）：用户搭建了 Discord 渠道与 agent 的路由规则，却发现对话无法记住前文、自动压缩无效。用户提交了详细描述和修复代码，说明其已经深入使用并具备较强的自驱力和技术能力，但 PR 迟迟未被合并可能会挫伤此类型贡献者的积极性。
- **模型选择的灵活性诉求**（#3330）：用户对"一个 agent 只能绑定一个模型"感到限制，希望能够在子任务级别灵活选择不同模型，这通常来自对成本与效果平衡的实际场景需求。

## 8. 待处理积压

**长期未响应 Issue：**

- **#3269【严重】MCP 连接失败导致挂起**：创建于 07-20，已 24 天，标记 stale，无任何 fix PR。核心稳定性缺陷，建议维护者优先响应，至少给出临时规避方案或修复计划。
  [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)
- **#3281【中等】Web UI 长历史输入卡顿**：创建于 07-21，已 23 天，标记 stale，无 fix。建议安排性能优化或与 #3269 一并进入下个迭代。
  [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)

**长期未合并 PR：**

- **#3299 新增 Exa 搜索 provider**：创建于 07-26，已 18 天，无维护者评论。新功能类 PR 等待过久，建议确认是否还有合并意向。
  [PR #3299](https://github.com/sipeed/picoclaw/pull/3299)
- **#3315 Telegram 私聊话题支持**：创建于 08-03，已 10 天，功能完整，无 review 记录。
  [PR #3315](https://github.com/sipeed/picoclaw/pull/3315)
- **#3316 routed-agent 上下文管理修复**：创建于 08-03，已 10 天，涉及 agent 机制核心 Bug，修复价值高，建议安排 review。
  [PR #3316](https://github.com/sipeed/picoclaw/pull/3316)

**健康度提示**：今日数据中，新 Issue 与待合并 PR 数量均衡（3:3），但合并动作为 0，且存在 2 个 stale 的严重/中等 Bug 无人处理。建议维护者在下一迭代中优先：① review 并合并 #3316（修复 agent 核心 Bug）；② 对 #3269 给出短期处理方案（如设置超时或错误上报）；③ 对等待超过 2 周的 PR 明确合并或拒绝，避免社区贡献者流失。

---

*本日报由 AI 自动生成，数据来源于 PicoClaw GitHub 仓库公开信息。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

过去 24 小时 NanoClaw 项目保持**高活跃度**：共 4 条 Issue 更新（3 条为新开，1 条为旧 Issue 重新活跃）、10 条 PR 更新（9 条待合并、1 条合并/关闭）、今日无新版本发布。核心团队正在密集推进「Agent 模板插件化」架构升级（#3220、#2909、#3231 三个 PR 形成功能列车）；社区侧则主要聚集在渠道修复（WhatsApp/Signal）与可观测性/健康检查诉求上。值得关注的是，**PR 积压明显**——多个修复性 PR（#2346、#2689）已等待合并超过两个月，可能拖累渠道稳定性的交付节奏。

## 2. 版本发布

无。今日没有新版本发布。根据 Issue #3233 的上下文，当前已知版本为 2.1.54，模板插件化（见 PR #3220）等重大变更尚未进入任何发布线。

## 3. 项目进展

今日**唯一合并/关闭的 PR**：

- **[#3086 fix(whatsapp): validate recipient exists before sending](https://github.com/nanocoai/nanoclaw/pull/3086)**
  修复了 Baileys `sock.sendMessage` 对未注册号码仍返回成功、导致日志显示 "Message delivered" 但消息实际未送达的问题。合入后，WhatsApp 频道将先校验接收人是否存在再发送，避免了假成功和由此引发的用户信任问题。这是今日渠道稳定性方向上最实质的进展。

**待合并但值得注意的 PR 列车（模板插件化）**：

- **[#3220 feat!: agent templates become Agent Plugins 1.0.0 directories](https://github.com/nanocoai/nanoclaw/pull/3220)** — 核心团队。将 agent 模板从原有形态迁移为「Agent Plugins 1.0.0」目录结构，同时包含安全加固（stamp-time symlink/caps/secret hardening）。属于格式迁移 + 破坏性变更。
- **[#2909 feat(setup): template setup flow in the wizard and first-agent stamping](https://github.com/nanocoai/nanoclaw/pull/2909)** — 核心团队。设置向导中的模板流程与首次 agent 生成，**显式依赖 #3220**，声明必须在其后合并。
- **[#3231 feat(codex,opencode): honor plugin MCP cwd in both provider config writers](https://github.com/nanocoai/nanoclaw/pull/3231)** — 核心团队。为 Codex 和 OpenCode 两个 provider 的配置生成器补上插件 MCP 工作目录支持，是 #3220 的配套能力。

三个 PR 叠加表明项目正在经历一次**实质性的模板/插件体系重构**。目前均未合并，仍处于落地前的冲刺阶段。

## 4. 社区热点

从可用数据看，今日评论区活跃度有限。唯一带明确评论数的是长期未决的功能请求：

- **[#2504 feat: add `ncl status` command for lightweight operational health check](https://github.com/nanocoai/nanoclaw/issues/2504)**（1 条评论，创建于 2026-05-15，8 月 12 日再次更新）
  用户核心诉求：当前判断 NanoClaw 实例是否健康，要么用 `ncl sessions list`（只有会话列表，无容器存活、最后消息时间、近期错误等健康信号），要么用 `/add-dashboard` skill（引入外部依赖，过重）。期望有一个轻量的 `ncl status` 子命令来快速回答「实例到底有没有在正常工作」。这条 Issue 已存在约 3 个月，属于典型的运维体验缺口。

- **[#3232 Proposal: add QwenCloud as an optional provider skill](https://github.com/nanocoai/nanoclaw/issues/3232)**（8 月 12 日新开）
  社区请求以可插拔 provider skill 形式接入 QwenCloud（兼容 OpenAI/Anthropic API）。值得注意的是，这与 NanoClaw 既定的「替代 provider 以 skill 形式模块化」方向完全一致，属于低摩擦的功能诉求。

今日 PR 侧则以核心团队的模板插件化工作为主（#3220/#2909/#3231），社区贡献集中在渠道修复与工具链（Dial 渠道 [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)、Telegram 富消息 [#3193](https://github.com/nanocoai/nanoclaw/pull/3193)、add-why skill [#3189](https://github.com/nanocoai/nanoclaw/pull/3189)）。

## 5. Bug 与稳定性

按严重程度排序：

1. **[#3233 Agent-scoped `ncl tasks` 对 2.1.54 之前的循环任务完全不可见](https://github.com/nanocoai/nanoclaw/issues/3233)（严重，尚无 fix PR）**
   症状：升级到 2.1.54 后，agent 在容器内执行 `ncl tasks list` 返回 "No tasks."，`get / pause / resume / cancel / update` 全部失效，但任务实际仍在按计划触发。Issue 明确指出问题在于没有迁移逻辑将 legacy 任务行（rehome）到新的 agent-scoped 存储。**影响面较大**：任何从旧版本升级、同时使用 agent 管理循环任务的用户都会受影响——「任务在跑，但看不到也管不了」。目前**无修复 PR**。

2. **[#3234 模板创建的 Agent Group 缺少 `ag-` 前缀，导致 OneCLI `ensureAgent` 拒收](https://github.com/nanocoai/nanoclaw/issues/3234)（高，尚无 fix PR）**
   `ncl groups create --template <ref>` 生成的组 ID 是裸 UUID，而 `--folder` 路径会生成 `ag-<uuid>`。Agent Group ID 会直接作为 OneCLI agent 标识符使用；以数字开头的裸 UUID 会触发布尔解析失败。这破坏了「模板 → 创建组 → spawn agent」的完整自动化链路。与 #3220 的模板体系重构高度相关，**是该架构升级中必须解决的兼容性问题**。

3. **[#2689 Signal DM 平台 ID 不一致、isMention 缺失、ask_question/approval 投递问题](https://github.com/nanocoai/nanoclaw/pull/2689)（中，已有修复 PR 待合并）**
   核心 bug：Signal DM 未设置 `isMention: true`，导致 router 不自动创建 `messaging_groups` 行，**首条 DM 被静默丢弃**。修复还包括 `signal:` 前缀统一平台 ID。PR 已于 6 月 4 日提交，等待合并。

4. **[#2346 未知斜杠命令被当作 Claude Code 命令，响应被静默丢弃](https://github.com/nanocoai/nanoclaw/pull/2346)（中，已有修复 PR 待合并）**
   未知 slash 命令被归类为 `passthrough`，Agent SDK 将其误读为 Claude Code slash command，输出不含 `<message>` 块，最终响应被丢弃。修复方式是 fall through 至 `category: 'none'`。PR 自 5 月 8 日提交，等待合并已超过 3 个月。

5. **[#3086 WhatsApp 假送达成功](https://github.com/nanocoai/nanoclaw/pull/3086)（中，已合并/关闭）**
   如前所述，接收人不存在时仍返回成功。已修复。

## 6. 功能请求与路线图信号

今日出现的功能请求与项目路线图有较强关联：

- **`ncl status` 轻量健康检查（[#2504](https://github.com/nanocoai/nanoclaw/issues/2504)）**
  用户需要的是「10 秒内判断实例是否健康」的 CLI 命令。这与现有 `ncl sessions list` 和 `/add-dashboard` 形成能力断层。预计需要通过解析本地状态文件或轻量 API 实现，属于运维体验类改进。从 PR 队列看目前**没有对应实现出现**，仍处于讨论期。

- **QwenCloud provider skill（[#3232](https://github.com/nanocoai/nanoclaw/issues/3232)）**
  请求按现有 `/add-*` skill 模式接入 QwenCloud。由于 NanoClaw 本身就把替代 provider 做成 modular skill（而非内置），**这一请求很可能被接受**，实现成本相对可控。

- **Agent 模板插件化（#3220 + #2909 + #3231）**
  虽然这组 PR 属于内部架构演进而非用户直接请求，但它是当前最明确的路线图信号：Agent 模板将升级为 Agent Plugins 1.0.0 目录格式，获得更规范的目录结构、安全加固和 MCP 工作目录支持。**预计会成为下一个 minor/major 版本的核心更新主题**，且可能伴随破坏性变更（`feat!`），用户需关注升级迁移说明。

- **新渠道继续扩围**：Dial 渠道（[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)）与 Telegram 富消息支持（[#3193](https://github.com/nanocoai/nanoclaw/pull/3193)）均处于待合并状态，表明渠道集成仍是社区贡献的活跃方向。

## 7. 用户反馈摘要

结合今日新增 Issue 与 PR 描述，可提炼出以下真实用户场景与痛点：

- **运维用户缺少直观健康视图**（#2504）：用户表达了对现状的不满——`sessions list` 不提供健康信号，`/add-dashboard` 引入外部依赖。痛点本质是「在 CI 或日常巡检中，无法用一条命令快速判断实例存活」。

- **模板用户遇到标识符兼容性挫折**（#3234）：通过模板创建 Agent Group 后，组 ID 是裸 UUID，直接被 OneCLI 拒绝。用户很可能是在实际部署 Agent 过程中撞上该问题，属于「功能可用但产物不被下游接受」的典型断层。

- **升级用户被遗留数据困住**（#3233）：「任务仍然定期触发，但任何管理操作都返回无此任务」。这不仅是功能缺失，更会让用户对 Agent 自治能力产生不信任——**任务在后台运行却完全失控**。该反馈应当被优先处理。

- **消息投递假成功伤害信任**（来自 #3086 的修复背景）：用户叙述了场景——把一个号码输错，日志显示「Message delivered」，实际对方根本没收到。这类问题在客服/通知等严肃场景下尤为危险，因为系统不会报错，用户可能很晚才发现。

- **第三方模型接入诉求**（#3232）：用户希望以增量 skill 方式接入 QwenCloud，说明用户对「多模型自由选择」有持续需求，且认可 NanoClaw 当前模块化 provider 的思路。

## 8. 待处理积压

以下条目长期未合并/未关闭，建议维护者关注：

- **[PR #2346 fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346)** — 创建于 2026-05-08，已积压 **3 个月以上**。它修复的是「未知命令导致响应静默丢弃」的可见性问题，且改动集中在 formatter 分类逻辑，风险可控。长时间未合并可能持续影响使用自定义 slash 命令的用户体验。

- **[PR #2689 fix(signal): DM platform ID consistency, isMention, and ask_question/approval delivery](https://github.com/nanocoai/nanoclaw/pull/2689)** — 创建于 2026-06-04，已积压 **2 个月以上**。Signal 渠道首条 DM 被丢弃是渠道基础体验问题，同批还附带 DM 平台 ID 一致性修复。考虑到 NanoClaw 对多渠道一致性的产品定位，这条 PR 的优先级应被提高。

- **[Issue #2504 feat: add `ncl status` command](https://github.com/nanocoai/nanoclaw/issues/2504)** — 创建于 2026-05-15，开放 **3 个月**，虽然 8 月 12 日有用户跟进评论，但尚无维护者明确表态或分配 milestone。若项目确认采纳，建议标注 `help wanted` 或关联至 roadmap。

- **[PR #3050 feat(setup): add Dial to the channel picker](https://github.com/nanocoai/nanoclaw/pull/3050)** — 创建于 2026-07-14，积压约 1 个月。Dial 渠道功能完整度尚待 review，但新渠道 PR 长期挂起会打击外部贡献者积极性。

---

**总结**：NanoClaw 今日的核心叙事是「模板插件化重构冲刺」与「渠道生态修复并行」。项目整体健康度良好，核心团队执行力强，但 PR 积压问题开始凸显——尤其 #2346、#2689 两个修复性 PR 已悬挂两个月以上，建议在下一轮合并中优先处理，以平衡「架构演进」与「既有功能稳定性」的节奏。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-13

## 1. 今日速览

过去24小时项目保持极高活跃度：41条 Issue 更新（新开/活跃 29、关闭 12）、50条 PR 更新（待合并 31、合并/关闭 19），另发布 2 个 Release 候选版本（v1.2.0-rc.2 / rc.3）。值得关注的是，**Telegram 渠道集中爆发了一批 QA bug（#7535–#7546，共 12 条）**，覆盖消息投递、多用户鉴权、GIF/sticker 处理、消息分段等多个环节，是当前最突出的稳定性风险信号。与此同时，核心 loop 与文本工具链的修复 PR（#7551）与大特性 PR（#7491）均处于开放状态，说明项目在快速迭代的同时也在积极清理技术债务。整体判断：**项目非常活跃，但渠道稳定性（尤其 Telegram）需要优先关注；发布节奏健康，v1.2.0 候选版本两连发显示正式版临近。**

---

## 2. 版本发布

### ironclaw-v1.2.0-rc.3（2026-08-12）
[查看 Release](https://github.com/nearai/ironclaw/releases)

**修复内容：**
- 运行时容器镜像现安装 `curl`，使 orchestrator 可执行容器内 HTTP 健康检查（`curl -fsS http://localhost:3000/`）；此前镜像未内置 HTTP client，导致健康检查永远无法执行、容器永远不会被标记为就绪。

**破坏性变更：** 无。这是对 rc.2 的增量修复。

**迁移注意事项：** 若自建镜像基于旧版运行时层，需重新拉取包含 `curl` 的镜像；无配置迁移要求。

---

### ironclaw-v1.2.0-rc.2（2026-08-12）
[查看 Release](https://github.com/nearai/ironclaw/releases)

**修复内容：**
- Windows 首次启动文件系统发布改用原生原子重命名语义，替代硬链接方案，并容忍不支持的目录同步操作。
- Release 冒烟测试保留 Windows 账户身份，确保独立 secrets 密钥的安全隔离。

**破坏性变更：** 无（属于 rc.1 后的修复迭代）。

**迁移注意事项：** Windows 部署用户建议在升级后验证一次首次启动的密钥初始化流程。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 说明 | 状态 |
|---|---|---|
| [#7555 fix(docker): install curl so orchestrator healthchecks can run](https://github.com/nearai/ironclaw/pull/7555) | 由 1.1.0 分支前向移植至 2026-08-11 分支，配合 rc.3 发布 | ✅ 已合并 |
| [#7560 fix(release): retry the dist installer download](https://github.com/nearai/ironclaw/pull/7560) | 修复 rc.3 发布时 cargo-dist 下载因网络抖动失败的问题，增加重试机制 | ✅ 已合并 |
| [#7550 feat(extensions): per-field help text on admin configuration forms + channel setup docs rewrite](https://github.com/nearai/ironclaw/pull/7550) | 管理配置表单增加字段级帮助文本；重写渠道设置文档（Telegram 为首个消费者） | ✅ 已合并 |
| [#5503 [Experiment] Add compact Google extension capabilities](https://github.com/nearai/ironclaw/pull/5503) | 为 Google 扩展添加上下文高效的紧凑型能力（Gmail 摘要、Calendar 等），历经 43 天后合并 | ✅ 已合并 |
| [#7427 release: prepare 1.1.1-rc.1](https://github.com/nearai/ironclaw/pull/7427) | 将 IronHub/custom MCP、WebUI、retrieval、Slack、Telegram 等紧急修复回溯到 1.1 发布线 | ✅ 已合并 |
| [#6836 feat(webui): @ironclaw/ui and workspace refactor](https://github.com/nearai/ironclaw/pull/6836) | 以 workspace 包形式重建 WebUI 设计系统（替代 #5563/#6830），分五层可审查提交 | ✅ 已合并 |

### 值得关注的进行中 PR

- **[#7491 feat(coding): omp core-tool contract + engines + benchmark arm（slices 1-4）](https://github.com/nearai/ironclaw/pull/7491)** — 将模型可见的编码工具统一为 5 个裸名称（read/write/edit/glob/grep），移除旧的 `builtin__*` 拼写与混合表面。属于较大的行为变更（risk: medium），预计会影响依赖旧工具名的用户。
- **[#7551 fix(loop-host): repair unavailable capability calls without aborting runs](https://github.com/nearai/ironclaw/pull/7551)** — 移除基于提示文本的不可用能力守卫，改为对真实 provider 调用进行一次性可修复处理，避免因用户话语中包含能力名误伤合法调用。
- **[#7556 Add Railway sandbox workspace file bridge](https://github.com/nearai/ironclaw/pull/7556)** + **[#7561 fix(auth): assign durable migration sub-owner](https://github.com/nearai/ironclaw/pull/7561)** — 两项配合为 Railway 部署增加文件桥接能力，并修复因此暴露的模块所有权 CI 检查。

**整体判断**：今日合入的 PR 集中在**发布基础设施（curl 健康检查、安装器重试）、WebUI 运维体验（帮助文本）、Google 扩展能力增强**三条线；同时在途的 omp 核心工具契约大 PR 和 Telegram 链接设备 PR（#7464）预示着 1.3.0 将会有较大的架构调整。

---

## 4. 社区热点

### 评论最多的 Issues（今日）

**#7360 [OPEN] Expand stress coverage across built-in and durable write paths**
[查看 Issue](https://github.com/nearai/ironclaw/issues/7360) · 评论 3 · 创建于 2026-08-07 · 更新于 2026-08-12

**#7407 [CLOSED] Execute BatchPolicy::Parallel capability batches concurrently in invoke_capability_batch**
[查看 Issue](https://github.com/nearai/ironclaw/issues/7407) · 评论 3 · 创建于 2026-08-09 · 更新于 2026-08-12

**#7554 [OPEN] [bug] Custom MCP server add flow shows validation error**
[查看 Issue](https://github.com/nearai/ironclaw/issues/7554) · 评论 1 · 创建于 2026-08-12

**分析：** #7360 揭示了一个深层次的测试盲区——nightly 压力测试的 mock model 始终返回不含工具调用的最终回复，导致 built-in 能力写入路径的回归无法被压力测试捕获。这反映了项目在工具调用路径上测试基建的薄弱，#7407 的关闭（并行批次执行落地）说明社区/作者已经在补齐这一环，但压力测试基建仍是开放缺口。#7554 是一个真实用户反馈的 bug（来自 Slack #x-ai-product-feedback），自定义 MCP 添加流程出现验证错误拦截，影响开发者扩展生态，且目前无关联 fix PR。

**评论区信号**：对 #7360 的讨论指向一个方向——社区希望压力测试不仅是"读"密集，还要覆盖"写"路径与工具调用。对 #7407 的关闭则被认为是一个正确方向的修正（并行执行而非串行）。

---

## 5. Bug 与稳定性

### P1 级（严重）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7538 Telegram agent becomes completely stuck after receiving GIF or sticker](https://github.com/nearai/ironclaw/issues/7538) | 发送 GIF/sticker 后 agent/session 完全卡死，后续所有文本消息均无响应 | 待修复，无关联 PR |
| [#7536 Multi-user access flow is broken — additional users get "Invalid secret" error](https://github.com/nearai/ironclaw/issues/7536) | Admin UI 创建的用户收到邮件/Token 后无法打开 UI（Invalid secret），多用户共享实例的核心功能不可用 | 待修复，无关联 PR |

### P2 级（重要）

| Issue | 描述 | 状态 |
|---|---|---|
| [#7535 Telegram webhook is not activated after saving bot configuration](https://github.com/nearai/ironclaw/issues/7535) | 保存 Telegram bot 配置后 webhook 不激活，需完整 redeploy 才能生效 | 待修复 |
| [#7540 Long Telegram messages are split and partially missed by the agent](https://github.com/nearai/ironclaw/issues/7540) | 超长消息被 Telegram 分段后，agent 只处理第一段，后续被 "still working" 拒绝 | 待修复 |
| [#7541 Agent cannot send generated files back as Telegram attachments](https://github.com/nearai/ironclaw/issues/7541) | 生成的文件仅返回本地路径 Markdown 链接，而非真正的 Telegram 附件 | 待修复 |
| [#7544 Agent exposes internal reasoning/planning instead of responding to user](https://github.com/nearai/ironclaw/issues/7544) | agent 将内部推理/规划步骤直接输出到聊天中 | 待修复 |
| [#7545 Agent incorrectly claims live crypto market data is unavailable](https://github.com/nearai/ironclaw/issues/7545) | 查询多 token 报价时错误拒绝，声称无实时数据工具（尽管有 HTTP 能力） | 待修复 |
| [#7542 Agent does not recognize that conversation is already in Telegram](https://github.com/nearai/ironclaw/issues/7542) | agent 在 Telegram 对话中反问"要不要投递到 Telegram"，渠道感知缺失 | 待修复 |
| [#7543 Telegram routine runs successfully but message is not delivered on first execution](https://github.com/nearai/ironclaw/issues/7543) | 首次执行的例行任务消息不投递 | 待修复 |
| [#7546 Agent does not react to or acknowledge Telegram stickers](https://github.com/nearai/ironclaw/issues/7546) | sticker 被静默忽略（P3） | 待修复 |
| [#7451 Telegram agent sometimes incorrectly asks for credentials](https://github.com/nearai/ironclaw/issues/7451) | 不应需要凭证的请求被要求连接 WebUI（8月10日创建仍开放） | 待修复 |

### 平台/基建类 Bug

| Issue | 描述 | 状态 |
|---|---|---|
| [#7547 Instance upgrade fails during egress apply on agent staging](https://github.com/nearai/ironclaw/issues/7547) | agent-stg.near.ai 实例升级在 egress apply 步骤失败（容器切换成功但 egress 报错） | 待修复 |
| [#7508 GitHub MCP extension startup gives confusing endpoint verification prompt](https://github.com/nearai/ironclaw/issues/7508) | GitHub MCP 扩展启动时报"已注册"但仍提示端点验证问题 | 待修复（8月11日创建） |

**已有关联修复的 Bug**：
- [#7554 Custom MCP validation error](https://github.com/nearai/ironclaw/issues/7554) — 尚无关联 PR，但 #7427（1.1.1-rc.1 发布准备）中提及了 custom MCP 修复回溯，可能已进入发布线。
- 容器内健康检查失败问题 — 已由 [#7555](https://github.com/nearai/ironclaw/pull/7555) 修复并随 rc.3 发布。

**整体判断**：Telegram 渠道的 12 个 bug 高度集中在消息处理（分段、附件、sticker/GIF、投递）与渠道感知（agent 不知道自己正在 Telegram 中），强烈暗示 **Telegram 集成层近期可能有较大改动（参考 PR #7464 linked-device 特性），但回归测试覆盖不足**。建议维护者关注这批 bug 的复现路径是否与 linked-device 分支相关。

---

## 6. 功能请求与路线图信号

### 可能进入下一版本的功能（已有实现或 PR）

| Issue/PR | 功能 | 版本信号 |
|---|---|---|
| [#7537 feat(llm): generic per-request thinking/effort control](https://github.com/nearai/ironclaw/issues/7537) | LLM 请求路径增加通用 thinking/effort 控制，按 provider 映射原生参数（DeepSeek V4 Flash 为触发案例，0731 checkpoint 输出冗余） | **v1.3.0 候选** — 该 issue 位于 [v1.3.0 epic #7520] 之外独立推进，且由核心维护者 serrrfirat 提出 |
| [#7491 omp core-tool contract + engines（open PR）](https://github.com/nearai/ironclaw/pull/7491) | 统一编码工具为 5 个裸名称（read/write/edit/glob/grep），移除旧表面 | **v1.3.0 候选** — 行为变更较大，需评审 |
| [#7548 feat(automations): add structured execution contracts](https://github.com/nearai/ironclaw/pull/7548) | 定时自动化增加版本化结构化执行契约（目标、成功标准、输出指令、无结果行为、允许能力、必需技能） | 可能进入 v1.3.0 |
| [#7464 feat(telegram): linked-device（open PR）](https://github.com/nearai/ironclaw/pull/7464) | Telegram MTProto 链接设备认证/会话托管 | 可能进入 v1.3.0，但需先解决今日新报的 Telegram bug 集群 |

### 来自用户的功能需求

| Issue | 需求 | 分析 |
|---|---|---|
| [#7517 Cloud.near.ai: allow staking path for Google/GitHub sign-ins](https://github.com/nearai/ironclaw/issues/7517) | Google/GitHub 登录用户无法 staking，仅支持 Stripe；希望"Sign in with NEAR"可作为 wallet 附加到现有账号 | **高优先级** — 直接影响模型付费路径，但涉及账户体系改造 |
| [#7044 Epic: Onboarding to channel-first approach（v1.4.0）](https://github.com/nearai/ironclaw/issues/7044) | 新用户首次进入 IronClaw 是空白页面，需要引导用户从渠道/用例出发 | 已规划 v1.4.0，后端原型 #6993 仍在推进 |

### 路线图信号

- **[v1.3.0 Epic: retire superseded WebUI surfaces](https://github.com/nearai/ironclaw/issues/7520)** — 清理已退役的 v1/engine-v2 前端代码，但明确排除 Jobs 等仍可能获得 Reborn 实现的功能。这是一个信号：**项目在 1.3.0 将大量删除旧代码，而非继续兼容**。
- **[#7038 设计系统 Epic（v1.3.0）](https://github.com/nearai/ironclaw/issues/7038)** — Storybook + AI-first Design System 进入 Phase 3 参考（[#7558 scaffold @ironclaw/ui](https://github.com/nearai/ironclaw/pull/7558)），WebUI 将迎来一次系统性 reskin。

---

## 7. 用户反馈摘要

### 真实用户痛点

**Telegram 集成是最大槽点**：12 个与 Telegram 相关的 bug 基本覆盖了日常使用场景——发 GIF 卡死、长消息丢失、文件无法作为附件发送、routine 首次执行消息不投递、agent 搞不清自己在哪个渠道（"Want this delivered to your Telegram?"）。这些问题的共同模式是 **agent 对 Telegram 作为"实时聊天渠道"而非"WebUI 的通知扩展"的理解不足**，体验层面用户会感到 agent 很笨拙。

**多用户共享实例不可用（#7536）**："Invalid secret"错误导致 Admin UI 创建的用户无法登录，直接阻断团队协作场景。

**自定义 MCP 流程被误拦截（#7554）**：来自 Slack #x-ai-product-feedback 的真实反馈，用户无法添加自定义 MCP 服务器，影响生态扩展。

**Agent 输出"内心戏"（#7544）**：agent 将内部推理/规划步骤直接输出到聊天，用户看到的是"原始工具/API 文档"，而非对着任务说话。这与其他 AI 产品的"思考过程泄露"问题类似，通常会让用户感到困惑甚至不信任。

**WebUI 重连提示困扰（#6541 已关闭）**：虽然该 issue 已关闭，但"Reconnecting"消息反复出现是用户持续报告的困惑点（在 7 月 23 日提出后直到 8 月 12 日才关闭，历时 3 周）。

### 正面信号

- **问题修复速度加快**：多个 7 月-8 月初的 issue（#5508 Slack 投递、#6541 WebUI 重连、#7302 工具失败 UI、#7484 上下文驱逐、#7485 token 估计器）均在过去 24 小时内关闭，说明维护者对积压 bug 的清扫力度很大。
- **发布节奏加速**：8 月 12 日一天内发布两个 rc 版本，且修复了真实的发布阻塞问题（curl 缺失、下载重试），说明发布管线在实战中快速迭代。

---

## 8. 待处理积压

### 长期未响应的 Issue（需要维护者关注）

| Issue | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#7044 Epic: Onboarding to channel-first approach](https://github.com/nearai/ironclaw/issues/7044) | 2026-08-03 | OPEN | v1.4.0 规划中，已有子任务 #6993/#6994 但 10 天来无实质推进，且无新评论 |
| [#6993 Backend wiring for the OOBE automation-tasks prototype](https://github.com/nearai/ironclaw/issues/6993) | 2026-08-01 | OPEN | 是 #7044 的后端依赖，但 12 天来无任何评论/更新 |
| [#7038 Epic: Storybook + AI-first Design System（v1.3.0）](https://github.com/nearai/ironclaw/issues/7038) | 2026-08-03 | OPEN | Phase 1/2 PR 已开放 10 天，最近更新停留在 8 月 12 日但仍在 review 中 |
| [#7360 Expand stress coverage across built-in and durable write paths](https://github.com/nearai/ironclaw/issues/7360) | 2026-08-07 | OPEN | 6 天前提出，有 3 条评论但无实质推进；这是测试基建的关键缺口 |

### 风险提示

1. **Telegram bug 集群无任何关联修复 PR 被标记**——12 个 bug 中除 #7451 外全部是 8 月 12 日当天或前一天创建，但截至日报生成时没有任何一个被标记为"有 fix PR"，可能仍在 triage 阶段，也可能修复未关联。考虑到这些 bug 和 #7464（linked-device）的强相关性，建议维护者优先处理。
2. **#7360 压力测试缺口是长期风险**——工具调用路径的回归无法被 nightly 压力测试捕获，意味着任何涉及 built-in 能力写路径的改动（如 #7491 的工具契约重构）都有引入回归而不自知的风险。
3. **#6993/#6994 的 OOBE 原型停滞 12 天**——onboarding 是 v1.4.0 的重点方向，但后端原型已有 12 天无活动，需要确认是否被降级或阻塞。

---

*本日报基于 2026-08-13 00:00 UTC 的 GitHub 数据快照自动生成，数据来源：nearai/ironclaw。*


</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-13

## 1. 今日速览

今日 LobsterAI 无新版本发布。PR 侧保持活跃：全天共 8 条 PR 更新，其中 5 个近期 PR 完成合并/关闭，并有 1 个新 PR（#2483）提交待审；合并内容集中在 Windows 插件安装稳定性、跨平台 shell 图标修复以及 Sidebar 和技能管理界面优化。Issue 侧则相对冷清，6 条更新均为 stale 机器人自动标记的旧 Issue，24 小时内没有任何新增用户反馈。值得注意的是，当前 6 个活跃/关闭的 Issue 全部为 3-4 个月或更早创建，且大部分处于 stale 状态，维护者长期未回复，积压问题正在加剧。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 以稳定性修复和前端体验优化为主，整体属于小步快跑的维护节奏：

- **[PR #2479](https://github.com/netease-youdao/LobsterAI/pull/2479) fix(plugins): preserve junctions during Windows install** — 修复 Windows 平台插件安装时因跨卷发布导致依赖 junction 丢失、symlink 报 `EPERM` 的问题，改为暂存后原子重命名，并增加 manifest 校验和回滚机制。对 Windows 用户是重要的稳定性提升。
- **[PR #2478](https://github.com/netease-youdao/LobsterAI/pull/2478) fix(shell): avoid unsupported large file icon size on macOS/Windows** — Electron 在 macOS 上不支持 `large` 图标尺寸，该 PR 让图标尺寸仅 Linux 使用 `large`，其他平台回退到 `normal`，修复跨平台兼容问题。
- **[PR #2481](https://github.com/netease-youdao/LobsterAI/pull/2481) feat(sidebar): move task search to header actions** — 将任务搜索入口改为图标按钮，统一 macOS 与 Windows 的布局，并补充诊断与回归测试。
- **[PR #2482](https://github.com/netease-youdao/LobsterAI/pull/2482) feat: skills manager split mine builtin tabs** — 技能管理器拆分为"我的"和"内置"两个标签页，改善技能管理的信息架构。
- **[PR #2480](https://github.com/netease-youdao/LobsterAI/pull/2480) Release/2026.8.12** — 版本发布准备 PR，已关闭，但尚未见正式 Release 产出。

此外，今日新提交的 **[PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483)** 针对 OpenClaw 技能条目按 frontmatter `name` 生成 entries，解决目录名与 frontmatter 不一致导致 UI 开关失效的问题（关联 #244x 系列 issue），目前待合并。

整体来看，项目在插件生态可靠性和界面细节上持续投入，但无重大新功能里程碑落地。

## 4. 社区热点

今日没有真正高热度的新讨论。评论区最为"活跃"的仍是几个被 stale 标记的旧 Issue，各仅有 2 条评论：

- **[Issue #1179](https://github.com/netease-youdao/LobsterAI/issues/1179)：3.31 版本强制沙箱怎么关？**（创建于 3/31，评论 2）— 用户对 3.31 更新强制启用沙箱且找不到关闭入口感到不满，最终选择回滚到 3.30。背后诉求是用户希望保留对本地运行环境的控制权。
- **[Issue #1236](https://github.com/netease-youdao/LobsterAI/issues/1236)：插件 ID 不匹配警告**（创建于 4/1，评论 2）— 用户报告每次启动都出现配置警告，虽不影响核心功能但对日常使用造成困扰。
- **[Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071)：创建定时任务错误**（创建于 5/28，评论 2）— 用户附截图报告 bug，但被 stale 自动关闭。

这些"热点"的共同特征是：用户问题长期得不到维护者响应，讨论仅停留在用户之间，反映社区反馈渠道存在明显堵塞。

## 5. Bug 与稳定性

今日没有新报告的 Bug，但积压 Bug 全部处于 stale 状态。按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [Issue #1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 卸载 LobsterAI 后程序窗口仍可运行且能发送飞书消息，用户质疑存在"后门"，涉及安全与信任 | OPEN / stale，无官方回应，无 fix |
| 🔴 高 | [Issue #1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改自建 agent 图标后触发网关反复重启，删除 agent 后恢复正常 | OPEN / stale，无 fix |
| 🟡 中 | [Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071) | 创建定时任务报错（版本 2026.5.27），附有截图 | CLOSED / stale，疑似被机器人关闭，无 fix 关联 |
| 🟢 低 | [Issue #1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | 启动时插件 entry key 与 manifest ID 不匹配，每次产生配置警告 | CLOSED / stale，无 fix 关联 |

今日合并的 **[PR #2479](https://github.com/netease-youdao/LobsterAI/pull/2479)** 和 **[PR #2478](https://github.com/netease-youdao/LobsterAI/pull/2478)** 分别解决了 Windows 插件安装的 junction/EPERM 问题和 macOS/Windows 图标尺寸兼容问题，属于对既有稳定性的补强。

## 6. 功能请求与路线图信号

- **[Issue #1174](https://github.com/netease-youdao/LobsterAI/issues/1174)：增加多个自定义模型提供商** — 用户希望同时保存多个自定义模型提供商配置，而非仅支持一个。该需求仍处于 OPEN / stale。此前关联的 **[PR #1233](https://github.com/netease-youdao/LobsterAI/pull/1233)（模型提供商官网链接和 API Key 获取引导）** 已在 8/12 被 stale 关闭，但该功能方向可能仍被团队考虑，建议在后续迭代中重新评估。
- **[PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483)**（今日新提交）表明技能管理的**配置一致性和 UI 开关有效性**是当前迭代的重点，预计会进入下一版本。
- **[PR #2481](https://github.com/netease-youdao/LobsterAI/pull/2481) 和 [PR #2482](https://github.com/netease-youdao/LobsterAI/pull/2482)** 的合并预示着下一个 Release 会在 Sidebar 布局和技能管理器交互上有可见的体验变化。

## 7. 用户反馈摘要

从今日活跃/更新的 Issue 中提炼的用户声音：

- **沙箱策略引发反弹**：用户对 3.31 强制沙箱且无 GUI 开关表示强烈不满，"找不到关的按钮，哪个文件能改？"并选择回滚 3.30。这提示版本升级策略需要更透明的说明与可控选项。
- **卸载残留导致信任危机**：[Issue #1173](https://github.com/netease-youdao/LobsterAI/issues/1173) 用户在卸载后程序仍可运行，直接提出"你们是不是在用户电脑上偷偷留后门准备操控电脑？！"。无论真实原因如何（如后台进程未被清理），这类问题对项目声誉伤害极大，需要第一时间回应。
- **配置警告干扰使用**：插件 ID 不匹配导致每次启动 gataway 都输出警告，用户期望启动日志干净、配置语义一致。
- **定时任务不可用**：图形界面创建定时任务直接报错，功能验证不到位。
- **网关稳定性问题**：修改 agent 图标这样轻量的操作会触发网关反复重启，说明配置热更新/事件监听存在缺陷。
- **功能扩展呼声**：用户希望保留多个自定义模型提供商，方便在不同配置间切换，而不是每次覆盖。

## 8. 待处理积压

以下 Issue/PR 长期未获维护者回应，建议优先关注：

| 优先级 | 项目 | 创建时间 | 说明 |
|---|---|---|---|
| P0 | [Issue #1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 2026-03-31 | 卸载后程序仍可运行，引发安全/后门质疑，影响项目信誉 |
| P0 | [Issue #1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 2026-03-31 | 3.31 强制沙箱无关闭入口，用户被迫回滚，需官方给出策略说明或配置项 |
| P1 | [Issue #1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 2026-03-31 | 修改自定义 agent 触发网关反复重启，属于稳定性缺陷 |
| P1 | [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | 2026-04-01 | OpenClaw 主 agent 会话混入用户会话列表，修复 PR 已提交 4 个月未合并 |
| P2 | [Issue #1174](https://github.com/netease-youdao/LobsterAI/issues/1174) | 2026-03-31 | 多自定义模型提供商功能请求，可与模型管理 UI 迭代合并考虑 |
| P2 | [Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071) | 2026-05-28 | 定时任务创建报错，被 stale 关闭但问题可能仍存在 |

**健康度提示**：当前所有 Issue 均已被 stale 标记，维护者在过去 4 个多月未对任何公开 issue 做出回复。即便今日 PR 合并节奏正常，但用户侧的"反馈-响应"闭环已近乎停滞，这将成为社区信任度持续下滑的风险点，建议尽快建立 Issue 定期清理与响应机制。

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

# CoPaw（QwenPaw）项目动态日报

**日期：2026-08-13** | 数据窗口：过去 24 小时 | 数据源：GitHub（agentscope-ai/QwenPaw）

---

## 1. 今日速览

过去 24 小时项目保持高强度迭代：发布 `v2.1.0-beta.4`，合并/关闭 17 条 PR，同时收到 31 条 Issue 更新（23 条新开/活跃，8 条已关闭）与 43 条 PR 更新。整体社区活跃度**高**，但 Bug 报告占比偏大，且集中在"任务静默停止"、"网络恢复后无法重连"、"子 Agent 死循环"等核心执行链路上，提示 2.1 系列的稳定性仍是用户主要痛点。好消息是记忆模块的长期误导性描述（#6853）已由社区 PR 修复并随新版发布；但 `#6816` 的修复因引入新问题被 `#6956` 回滚，`KeyError: '__aiter__'` 问题仍需更稳妥的解决方案。

---

## 2. 版本发布

### v2.1.0-beta.4（Beta）

**发布日期：** 2026-08-12 | [Release 页面](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.4)

**更新内容：**
- **fix(files)**：修复文件预览与暗色模式样式问题（PR [#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915)，@rayrayraykk）
- **fix(tools)**：修正 `read_file` 工具描述，使其与实际行为一致（PR [#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898)，@AntiQuality）
- chore：版本号提升至 2.1.0b4

**破坏性变更：** 无明确标注。

**迁移注意事项：** Beta 版本仅供测试，升级前建议备份 `config.json` 与本地记忆目录。若使用 MCP 插件，注意更新后重新校验工具配置（见 Issue #6957）。

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下几条对项目推进最有价值：

| PR | 类型 | 说明 | 状态 |
|---|---|---|---|
| [#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942) | fix(memory) | 精简长期记忆提示词，不再向 Agent 暴露 `MEMORY.md`、daily 目录等内部实现，**关闭 #6853**；合入后 Agent 对记忆能力的认知与实际行为一致 | ✅ 已合并 |
| [#6540](https://github.com/agentscope-ai/QwenPaw/pull/6540) | fix(agents) | 在每次模型调用前清洗孤儿 tool_result 消息，修复 #6407（OpenAI 兼容 provider 因孤立工具结果报错） | ✅ 已合并 |
| [#6913](https://github.com/agentscope-ai/QwenPaw/pull/6913) | fix(computer-use) | 修复 macOS 上瞬态菜单/复合可访问性元素的点击激活问题，避免弹窗关闭上下文菜单 | ✅ 已合并 |
| [#6956](https://github.com/agentscope-ai/QwenPaw/pull/6956) | revert | 回滚 #6816（dict-like 模型响应处理），说明原修复引入了新的回归，需重新评估方案 | ✅ 已合并 |
| [#6950](https://github.com/agentscope-ai/QwenPaw/pull/6950) | docs | 重写 Files workspace 官方博客，面向非技术用户，降低理解门槛 | ✅ 已合并 |

**项目整体判断：** 版本节奏正常（Beta 迭代中），社区贡献活跃，但今日"合入 1 个记忆修复 + 回滚 1 个响应处理修复"的净效果说明：**长期记忆模块在快速收敛，而 ChatResponse 兼容层的设计仍需加固**。值得肯定的是，#6942 由社区开发者发起并精准闭环了一个 Issue，项目维护者响应及时。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 标题 | 标签 |
|---|---|---|---|---|
| 1 | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | 5 | prompts.py lies to agents: Dream writes to digest/ not MEMORY.md | CLOSED |
| 2 | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 5 | 多步骤任务输出规划后无提示停止，需说"继续"才继续 | OPEN / bug |
| 3 | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 4 | 2.0.1 版，不使用时几十分钟后自己卡死 | OPEN / question |
| 4 | [#6928](https://github.com/agentscope-ai/QwenPaw/issues/6928) | 4 | 历史消息+输入栏 bug（无法回滚、编辑时删除后续内容） | OPEN / invalid |
| 5 | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 4 | 助手消息结束时间显示异常（2 分钟耗时显示为几秒） | OPEN / bug |
| 6 | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | 4 | MCP 工具调用将数字字符串按数字格式传参 | OPEN / bug |
| 7 | [#6924](https://github.com/agentscope-ai/QwenPaw/issues/6924) | 4 | 新版本自定义频道插件只能网页端简单配置 | OPEN / question |
| 8 | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | 4 | 同样的任务，QwenPaw 被杀软拦截，WorkBuddy 不会 | OPEN / question |

**热点诉求分析：**

- **#6921 任务静默停止** 是当前最影响口碑的执行层问题——用户明确反馈"规划好下一步就停止，无任何提示"，这不仅打断工作流，还让用户对 Agent 的真实状态产生不信任。该 Issue 已有 5 条评论，暂无 fix PR，建议维护者优先排查 Agent 的停止条件与用户可见反馈机制。
- **#6853（已关闭）** 说明社区用户会仔细阅读源码并追踪实现一致性，这类"提示词与行为不符"的问题虽不影响功能，但对开发者信任影响较大。好消息是 #6942 已随 v2.1.0-beta.4 修复。
- **#6839 MCP 参数类型问题** 是 MCP 生态落地中的典型摩擦点——大模型将 schema 为 string 的数字型字段按 JSON number 传参，导致工具调用失败。已有对应 PR #6936 正在审查。

---

## 5. Bug 与稳定性

### 🔴 高严重度（核心执行链路）

| Issue | 标题 | 是否有 Fix PR |
|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步骤任务规划后静默停止，需手动说"继续" | ❌ 无 |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | 网络短暂中断并恢复后，LLM 请求持续 ConnectTimeout，需重启进程 | ❌ 无 |
| [#6927](https://github.com/agentscope-ai/QwenPaw/issues/6927) | 调用多个子 Agent 执行任务时多次陷入死循环 | ❌ 无 |
| [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | Inter-agent 消息每条都新建 Agent 会话，导致重复执行/影子实例 | ❌ 无 |
| [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll 压缩后重新进入会话，压缩前聊天记录不可见，只剩内部索引 | ❌ 无 |

### 🟠 中严重度（功能异常/降级）

| Issue | 标题 | 是否有 Fix PR |
|---|---|---|
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 空闲几十分钟后进程卡死，只能重启 | ❌ 无 |
| [#6928](https://github.com/agentscope-ai/QwenPaw/issues/6928) | 历史消息无法向上滚动查看；输入栏编辑时删除后续内容 | ❌ 无 |
| [#6957](https://github.com/agentscope-ai/QwenPaw/issues/6957) | 升级后工具页插件配置需全部重新配置 | ❌ 无 |
| [#6958](https://github.com/agentscope-ai/QwenPaw/issues/6958) | MCP 返回超长数据触发截断时，Tool Result 文件中出现两份重复数据 | ❌ 无 |
| [#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955) | v2.0.1 概率性启动报错、崩溃退出 | ❌ 无 |
| [#6948](https://github.com/agentscope-ai/QwenPaw/issues/6948) | 管理后台对话记录时间显示 UTC 而非用户时区 | ❌ 无 |

### 🟡 轻严重度（显示/兼容性问题）

| Issue | 标题 | 是否有 Fix PR |
|---|---|---|
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手消息结束时间显示异常（实际 2 分钟显示几秒） | ✅ [#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938)（ready-for-human-review） |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 工具调用数字字符串变数字格式传参 | ✅ [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936)（Under Review） |
| [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) | 日记页面子文件夹笔记被错误分组到错误日期 | ✅ [#6941](https://github.com/agentscope-ai/QwenPaw/pull/6941)（OPEN） |
| [#6952](https://github.com/agentscope-ai/QwenPaw/issues/6952) | 工具 schema 无序 + env_context 字段交错导致 prefix cache 不稳定 | ✅ [#6953](https://github.com/agentscope-ai/QwenPaw/pull/6953)（OPEN） |
| [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | consume_model_response 引发 KeyError: '__aiter__'（已关闭） | ⚠️ 原 PR [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) 被 [#6956](https://github.com/agentscope-ai/QwenPaw/pull/6956) 回滚，需重新修复 |

**稳定性结论：** 今日新增 Bug 多为 2.1.0b3/b4 的回归问题（如 #6951 Scroll 压缩、#6958 MCP 截断重复），说明功能迭代速度与回归测试之间存在一定落差。此外，`#6813` 的修复被回滚是一个值得警惕的信号：`ChatResponse` 作为 dict 子类的兼容处理需要更全面的测试覆盖后再重新合入。

---

## 6. 功能请求与路线图信号

### 用户新提出的功能需求

| Issue | 需求描述 | 潜在价值 |
|---|---|---|
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | **DataPaw 原生应用运行时** —— 引入 QwenPaw-Data 作为原生 App，提供持久化分析工作区（first-time-contributor 提交） | 高：开启数据分析垂直场景 |
| [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) | Agent 应将任意报告/消息主动投递进收件箱（Inbox），而不限于 cron/heartbeat/记忆任务 | 中高：补齐"主动通知"能力闭环 |
| [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) | 智能体协作希望在一个会话窗口里完成，而不是每个协作新建会话 | 中高：直接影响多智能体协作体验 |
| [#6954](https://github.com/agentscope-ai/QwenPaw/pull/6954) | 新增 MiniMax TTS 支持（HTTP，可配置模型/音色/API Key/区域端点） | 中：扩展语音通道生态 |
| [#6923](https://github.com/agentscope-ai/QwenPaw/issues/6923) | 引入 LongHorizon-Harness 方向，支持单任务跨多轮不漂移 | 中：长任务稳定性改进参考 |
| [#6929](https://github.com/agentscope-ai/QwenPaw/issues/6929) | 项目-对话-文件夹：支持以文件夹为对话基础（类似 codex），可将文件内容添加到对话 | 中：开发/创作场景效率提升 |
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | 在 Slash 自动补全中暴露全部系统命令（/plan、/dream、/memorize 等） | 低-中：开发者体验优化 |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | 按会话粒度覆盖模型配置（per-session model overrides） | 中：多场景用户的实用需求 |

**路线图预判：**

- **可能进入 v2.1 正式版**：#6938（时间显示修复）、#6936（MCP 参数类型修复）、#6941（日记分组修复）——均为小型、聚焦的修复 PR，已在审查中。
- **可能进入 v2.2 规划**：#6917（Inbox 主动投递）、#6925（多智能体协作单窗口）、#6940（DataPaw 原生应用）——这三个需求涉及架构级改动，且对应场景需求迫切，值得维护者评估。
- **社区信号**：`first-time-contributor` 标签频现（#6940、#6953），说明项目对新贡献者友好度在提升，是项目健康度的正向指标。

---

## 7. 用户反馈摘要

### 核心痛点（按提及频次）

1. **任务执行不稳定，缺乏可见性**
   - #6921："规划好下一步就停止了，无任何视觉可见提示，需要我说'继续'才会继续。"
   - #6927："调用多子 agent 执行任务时，多次陷入死循环。"
   - 这两条共同指向：Agent 执行状态对用户不透明，停止/循环时没有清晰信号。

2. **网络与进程稳定性**
   - #6932："网络恢复后 QwenPaw 不会自动重连，所有 LLM 请求持续 ConnectTimeout，同一天复现两次。"
   - #6780："不使用时几十分钟后自己卡死；只能关闭进程重新启动。"
   - #6955："v2.0.1 概率性启动报错、崩溃退出。"

3. **升级迁移体验不佳**
   - #6957："每次更新版本之后，之前给 agent 配置过的工具就要重新配置一次。"
   - #6924："2.0.x 之后自定义频道的交互配置被限制为只有内置渠道能配置。"

4. **记忆与数据正确性**
   - #6853（已关闭）："prompts.py 声称 Dream 会自动同步摘要到 MEMORY.md，但实际上从未实现。"
   - #6948："管理后台对话记录显示 UTC 而非用户配置的 user_timezone。"
   - #6883："日记页面子文件夹内的笔记被错误分组到错误的日期下。"

### 使用场景画像

- **平台分布**：Windows 用户反馈占比最高（#6921、#6826、#6780、#6957、#6955），且多位通过 pip 安装。
- **MCP 生态**：多个 Issue 涉及 MCP 工具接入（#6839、#6958、#6945），说明 MCP 已成为重要使用场景，但类型转换和结果截断的体验仍需打磨。
- **多智能体协作**：连续出现 #6918、#6925、#6927，用户对多 Agent 协作的会话模型和稳定性有明确改进期待。

### 用户满意度信号

- 正面：社区开发者主动提交高质量修复（#6942 修复记忆提示误导、#6913 修复 macOS 计算机使用功能），并积极参与 review。
- 负面：多步骤任务静默停止 + 需手动"继续"是 2.1beta 系列最集中的抱怨点，若不能在正式版前解决，可能影响版本口碑。

---

## 8. 待处理积压

### ⚠️ 长期未响应的关键 PR（提醒维护者关注）

| PR | 主题 | 创建时间 | 已等待 |
|---|---|---|---|
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | 在 Slash 补全中暴露系统命令（所有 UI） | 2026-07-08 | 36 天 |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | 按会话覆盖模型配置 | 2026-07-12 | 32 天 |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | ACP 通知与 prompt 响应竞争时丢失最终文本（修复 #6625） | 2026-08-01 | 12 天 |
| [#6818](https://github.com/agentscope-ai/QwenPaw/pull/6818) | 摘要生成尊重 disable_thinking 与中断信号（修复 #6811） | 2026-08-08 | 5 天 |

### ⚠️ 长期未关闭的高影响 Issue

| Issue | 主题 | 创建时间 | 已等待 |
|---|---|---|---|
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 空闲后进程卡死（v2.0.1） | 2026-08-07 | 6 天 |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | QwenPaw 执行任务被杀软拦截，同类工具不受影响 | 2026-08-09 | 4 天 |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手响应时间显示异常（已有 PR，但未合入） | 2026-08-08 | 5 天 |

### 📌 风险提示

1. **`#6813` 修复被回滚后处于悬空状态**：`KeyError: '__aiter__'` 仍是必现问题，且原修复引入了回归。建议在下一个 patch 版本给出更完备的 `ChatResponse` 兼容处理，并补充针对 dict-subclass 的单元测试。
2. **v2.1.0-beta.4 的 release-duty issue（[#6946](https://github.com/agentscope-ai/QwenPaw/issues/6946)）尚无人评论**，安装验证流程需及时完成，避免影响 beta 发布节奏。
3. **#6921 任务静默停止**暂无任何 assignee 或 PR 关联，建议在 v2.1 正式版发布前作为 P0 处理。

---

*本日报由 AI 分析师自动生成。数据基于 GitHub 公开信息（agentscope-ai/QwenPaw），统计口径为 2026-08-12 至 2026-08-13 UTC 区间。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 2026-08-13

---

## 1. 今日速览

过去 24 小时 ZeroClaw 项目保持高强度迭代：**50 条 Issue 更新（45 活跃 / 5 关闭）** 与 **50 条 PR 更新（30 待合并 / 20 已合并或关闭）**，无新版本发布。昨日有多个高价值修复合入主干，包括微信 channel 同步游标持久化、browser 工具任意文件写入漏洞（两份 PR 合入）、终端标记泄漏修复以及 MCP 访问策略集中化。社区侧最集中的诉求是 **Windows 平台测试失败（#7462，14 评论）** 和 **发布签名机制整合（#9101，9 评论）**，反映出跨平台质量与发布工程复杂度正在成为社区关注焦点。PR 队列仍积压 30 条待合并，维护者审查负载偏高。

---

## 2. 版本发布

无新版本发布，本节省略。

---

## 3. 项目进展

昨日合入/关闭的 PR 主要集中在 **安全加固**、**稳定性修复** 与 **CLI/ZeroCode 体验完善** 三个方向：

### 合并/关闭亮点

| PR | 类型 | 说明 |
|---|---|---|
| [#9956](https://github.com/zeroclaw-labs/zeroclaw/pull/9956) | 修复 | **WeChat 同步游标持久化**：修复 `WeChatChannel::listen()` 在入队前持久化游标导致的崩溃窗口——若入队过程中崩溃，消息批次会丢失但游标已前移。**该 PR 从提交到合并均在 24 小时内完成，是昨日最快闭环的修复** |
| [#9695](https://github.com/zeroclaw-labs/zeroclaw/pull/9695) | 修复 | **剥离 provider 终端标记**：从流式/非流式响应中移除 `<eom>`、`<\|eom\|>` 等标记，避免泄漏到 `StreamedChatOutcome.response_text` 与持久化 assistant 消息中 |
| [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) / [#8741](https://github.com/zeroclaw-labs/zeroclaw/pull/8741) | 安全修复 | **browser 工具截图路径任意文件写入**：补上 `is_path_allowed`/`resolve_tool_path`/`canonicalize` 校验链，阻止 agent 将截图写到工作区之外（两份 PR 合并，覆盖新旧两条提交路径） |
| [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) | 修复 | **MCP 延迟访问策略集中化**：`DeferredMcpToolSet::filter_by_policy` 成为策略过滤的唯一真源，修复 #8054 Surface 1(b) 的策略遗漏 |
| [#9684](https://github.com/zeroclaw-labs/zeroclaw/issues/9684) | 任务 | **ZeroCode SOP 面板实时状态图标**：SOP 列表增加 🟢/🟡/🔵/🔴 运行状态指示，由 `sops/runs` 轮询驱动 |
| [#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) | 文档修复 | **cron 帮助文档错误示例**：修正 `add-at`、`add-every`、`once` 子命令帮助中的无效示例 |

### 值得关注的在途 PR

- [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)（`fix(gateway)`）：WebSocket 断开不再取消 agent 运行中的 turn，将 viewer 与任务生命周期解耦——有望改善 Dashboard 断连导致任务中断的问题。
- [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715)（`fix(infra)`）：JSONL 会话迁移改为事务 + 分布式锁，避免重试时产生重复数据，属于底层数据安全改进。

**整体判断**：项目昨日净推进明显，尤其安全类修复密集落地，但修复多集中在既有问题的收尾，新功能型 PR 尚未出现合并迹象。

---

## 4. 社区热点

### 讨论热度 Top 3

1. **[#7462 — Windows 74 个测试失败（14 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)**
   - **现象**：Windows 11（简体中文，代码页 936）运行 `master` 测试套件失败 74 个，CI 只跑 Linux 未捕获。
   - **背后诉求**：测试路径语义、Unix-only 命令、控制台编码等差异导致 Windows 支持形同虚设。社区对该 issue 的高讨论度反映 **跨平台可用性已成为用户刚需**。同源 issue [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)（CI 增加 Windows/macOS 矩阵）与之互相呼应。

2. **[#8692 — 维护者决策队列跟踪器（13 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**
   - **现象**：RFC、设计 issue、发布策略问题的裁决队列。
   - **背后诉求**：社区希望治理流程更透明——当前 30 条待合并 PR 中不少挂着 `needs-author-action` 或 `needs-maintainer-review` 标签，贡献者需要明确的决策节奏。

3. **[#9101 — 发布签名机制整合（9 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)**
   - **现象**：v0.8.3 同时携带 cosign、GitHub artifact attestations、slsa-github-generator 三套签名机制，发布资产膨胀到 53 个。
   - **背后诉求**：发布工程冗余拖慢 CI，项目健康度方面，社区希望 **精简为一个签名方案、约 20 个资产**。同类 issue 还有 [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059)（deny.toml 策略清理）。

### 高讨论功能型 issue

- **[#8832 — 插件自有 Kanban 看板（9 评论）](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)**：提议 agent 工作协调的即时看板，作为插件自有域实现。社区对 agent 可观测性/协调工具的兴趣持续升温。

---

## 5. Bug 与稳定性

### 严重级别 S1（工作流阻断）

| Issue | 状态 | 说明 |
|---|---|---|
| [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) | OPEN | **Windows 桌面安装器启动失败**：缺失 `TaskDialogIndirect` 符号，v0.8.3 安装后无法启动桌面应用。**尚无 fix PR** |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | OPEN（`in-progress`） | **web_fetch 对压缩响应返回乱码**：gzip/brotli/deflate 未解码，agent 无法解析，S1 级阻断工作流 |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | OPEN（`needs-repro`） | **macOS 桌面应用空白/无窗口**：权限检测失败后重开空白，已标记需要复现 |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | OPEN | **Windows 74 测试失败**：最集中的平台质量问题，暂无修复分支 |

### 严重级别 S2/S3 及已修复项

| Issue | 状态 | 说明 |
|---|---|---|
| [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | OPEN（`accepted`） | Discord typing 指示器在 daemon reload 后永久卡死，需手动重启 |
| [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) | OPEN（`in-progress`） | `zeroclaw desktop` 使用失效下载链接，且无法识别已安装的 AppImage |
| [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | **CLOSED** | CLI 创建的 cron job 输出被硬编码丢弃，已修复（详见 PR 进展） |

### 昨日合入的稳定性/安全修复（按影响面）

- **任意文件写入（严重）**：browser `screenshot` 路径校验（#9362/#8741）
- **消息丢失窗口（严重）**：WeChat 同步游标持久化时机（#9956）
- **数据泄漏（中）**：provider 终端标记泄漏至用户消息（#9695）
- **MCP 策略绕过（中）**：deferred MCP 工具集策略遗漏（#8496）

**稳定性小结**：昨日无新引入的 S1 级回归，修复集中在过去两个月累积的已知漏洞面上。Windows/macOS 桌面端质量仍是最大短板。

---

## 6. 功能请求与路线图信号

### 可能进入 v0.9.0 的功能候选

- **[Hailo-Ollama 原生支持（PR #9109）](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)**：新增 `HailoOllamaModelProvider`，对接 `/api/chat` 与 `/api/tags`。标记 `risk:high, size:XL`，已 27 天未合并，但属于 edge AI 硬件方向的重要布局。
- **[Langfuse 可观测性后端（PR #9556）](https://github.com/zeroclaw-labs/zeroclaw/pull/9556)**：OpenTelemetry 追踪导出至 Langfuse 云端/自托管，带 `observability-langfuse` feature 开关。可观测性生态持续扩展（herdr #8337 也在队列中）。
- **[KeySource 密钥来源抽象（PR #9194）](https://github.com/zeroclaw-labs/zeroclaw/pull/9194)**：为主加密密钥引入 trait + 文件后端，为后续 KMS/HSM 集成铺路。
- **[MCP 资源物化 + 预算预检（PR #9196）](https://github.com/zeroclaw-labs/zeroclaw/pull/9196)**：MCP `tools/call` 返回的 `resource` blob 物化到工作区并做聚合预算检查，提升 MCP 工具链实用性。

### 社区呼声较高的功能 issue

- [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) — **SearXNG 搜索提供方**（隐私优先，6 评论）
- [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — **LSP 支持**（减少幻觉，6 评论，`needs-author-action`）
- [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — **统一 slash 命令注册表**（7 评论，三端漂移问题）
- [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — **Schema 验证的记忆整合**（6 评论，当前 JSON 解析脆弱）

**路线图判断**：昨天合并的主要是修复类 PR，功能型 PR 尚无合入迹象。队列中 `size:XL` 的大功能（#9109 等）可能集中在下个版本窗口释放。

---

## 7. 用户反馈摘要

- **Windows 用户痛点（#7462）**：简体中文 Windows 11 环境 74 个测试失败，涉及路径语义与控制台编码。用户指出 CI 只跑 Linux 导致问题长期未被发现。*“修正后能显著提升 Windows 一等公民地位”* 是隐含诉求。
- **macOS 桌面体验（#7527）**：权限检测失效后应用进入“假死—空白—无窗口”螺旋，用户询问是否有绕过方式。该问题已 2 个月未获得维护者复现。
- **Discord 渠道体验（#9198）**：daemon reload 导致 typing 指示器卡死，用户需手动重启。属于低严重度但体验干扰强的问题。
- **cron 输出丢失（#9340，已修复）**：用户描述“job 运行成功但结果不知去向”，修复方向明确——`delivery.mode` 不应默认为 `none`。
- **web_fetch 乱码（#9207）**：agent 抓取二进制乱码无法解析，直接影响自主 agent 的网页检索能力，属 S1 级痛点。
- **贡献者侧反馈**：多个 PR 挂 `needs-author-action`（如 #9724、#9753、#9196），说明维护者给出了修改意见但等待贡献者响应；其中一部分 PR 已等待超过 30 天，贡献者积极性与维护者响应速度的匹配度有待提高。

---

## 8. 待处理积压

### 长期未解决的重要 Issue

| Issue | 标签/严重度 | 等待时长 | 备注 |
|---|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | P1 / Windows 74 测试失败 | 64 天（自 06-10） | 社区热点 No.1，无 fix PR |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | P1 / macOS 空白窗口 | 62 天（自 06-12） | 等待复现，维护者未响应 |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | P2 / CI 平台矩阵 | 64 天（自 06-10） | 与 #7462 同源，跨平台质量 |
| [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | P2 / slash 命令统一 | 56 天（自 06-18） | `needs-author-action` |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | P2 / schema 记忆整合 | 76 天（自 05-29） | `needs-maintainer-review` |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | P2 / LSP 支持 | 116 天（自 04-19） | `needs-author-action`，超 3 个月 |

### 待维护者关注的 PR

| PR | 等待时长 | 阻塞点 |
|---|---|---|
| [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)（herdr 集成） | 48 天（自 06-26） | 无 review 记录，XL 规模 |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)（SSRF 网关） | 40 天（自 07-04） | `needs-author-action`，但涉及 SSRF 安全边界，建议优先评审 |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)（rate limit 凭据轮换） | 18 天（自 07-26） | 等待维护者 review，涉及凭据安全 |
| [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403)（WASM 超时） | 18 天（自 07-26） | 与插件安全相关，等待 review |

### 积压风险

- 30 条待合并 PR 对维护者构成较大负载，其中 11 条标注 P1 或含 `risk:high` 的安全相关改动，建议优先处理。
- `needs-author-action` 类 PR（至少 5 条）若贡献者长期不回应，建议维护者明确关闭或接管策略，避免无效积压。

---

*数据来源：[ZeroClaw GitHub 仓库](https://github.com/zeroclaw-labs/zeroclaw)，统计窗口 2026-08-12 至 2026-08-13。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*