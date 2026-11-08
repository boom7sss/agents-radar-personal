# OpenClaw 生态日报 2026-11-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-08 16:42 UTC

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

# OpenClaw 项目日报 · 2026-11-08

> 数据来源：OpenClaw（github.com/openclaw/openclaw）GitHub 数据。以下内容仅基于提供的 Issue/PR 摘要，未作外部核实。

---

## 1. 今日速览

项目维持高强度运转：过去 24 小时 Issues 更新 500 条（新开/活跃 406，已关闭 94），PR 更新 500 条（待合并 306，已合并/关闭 194），但零新版本发布。合并侧活跃度较高（194 条关闭/合并），但待合并 PR 堆积达 306 条，显示评审吞吐仍是瓶颈。Open Issues 中 P0/P1 崩溃循环、消息丢失、事件循环阻塞类问题持续占据高评论位，稳定性仍是当前最大健康度短板。

---

## 2. 版本发布

今日无新 Release。相关信号：PR #195240（2026.11.2 macOS appcast 更新）已关闭，说明 v2026.11.2 发布物料已在推进中。另外 Issue #193962 指出 2026.11.5-beta.1 已包含 SQLite header-probe 修复（#187197），但受影响安装无法通过 `openclaw update` 抵达该修复。

---

## 3. 项目进展（今日合并/关闭）

- **macOS 发布通道**：[PR #195240](https://github.com/openclaw/openclaw/pull/195240)（CLOSED）更新 2026.11.2 Sparkle appcast，推进稳定版 in-app 更新发现。
- **Signal 首次配置体验**：[PR #118169](https://github.com/openclaw/openclaw/pull/118169)（CLOSED）— 通过 setup QR 链接首个账号，替代手工 `signal-cli link`。
- **CI 效率**：[PR #195302](https://github.com/openclaw/openclaw/pull/195302)（CLOSED）— 当前版本恢复测试跳过 legacy inventory，减少 7 个恢复用例中的 9 次 inventory 调用。
- **已关闭的用户 Issue**：[#165421](https://github.com/openclaw/openclaw/issues/165421)（Control UI context window 组件显示陈旧 maxTokens）、[#184658](https://github.com/openclaw/openclaw/issues/184658)（Windows npm 更新后的 cleanup 报错）均已关闭，属 UX 摩擦类问题。

**整体评估**：今日进展集中在发布基建、渠道体验与 CI 清理，缺少核心稳定性修复的合入记录；关键 P0/P1 修复仍停留在待合并或待评审状态。

---

## 4. 社区热点（评论最多）

| Issue | 评论 | 焦点 |
|---|---|---|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | 32 | 2026.10.5 上原生 host exec 返回 shared-state integrity-admission 错误，至少 28 次失败 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 25 | 同步 agent 持久化与 transcript 维护在规模下阻塞 Gateway 事件循环 |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | 20 | 显式多 agent 归属下 `AgentSelectionRequiredError` 刷屏 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 18 | 2026.3.2 起 google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined or null to object"（回归） |
| [#164394](https://github.com/openclaw/openclaw/issues/164394) | 15 | Control UI WebChat 滚动至历史中部持续微抖动 |

**诉求分析**：高热度议题高度集中于"Gateway 单进程架构下的并发与状态一致性"——事件循环阻塞、SQLite 争用、多 agent 归属、shared-state admission。用户在生产规模下使用，对稳定性与可诊断性诉求强烈；评论中反复出现"已修复一部分但仍有触发路径"的表述，反映修复碎片化。

**PR 侧**：[#195216](https://github.com/openclaw/openclaw/pull/195216)（P1，并发启动后 agent 可用性）、[#195034](https://github.com/openclaw/openclaw/pull/195034)（前台工具放置性能）为今日重点待评审项。

---

## 5. Bug 与稳定性

**P0 / 发布阻断**
- [#193962](https://github.com/openclaw/openclaw/issues/193962)：SQLite header-probe 超时修复无法从 2026.10.10 经 `openclaw update` 抵达。已有修复来源（#187197 在 beta 中），但发布路径受阻；**无新 fix PR**。
- [#162211](https://github.com/openclaw/openclaw/issues/162211)：启动阻塞事件循环 40–200s，健康监控误判为断连并升级为重启循环。**无新 fix PR**。
- [#158592](https://github.com/openclaw/openclaw/issues/158592)：宿主休眠/唤醒后模型运行时发布超时，所有入站消息失败直至重启。**无新 fix PR**。
- [#137177](https://github.com/openclaw/openclaw/issues/137177)：内置 `@wecom/wecom-openclaw-plugin@2026.7.2` 无法安装。**无新 fix PR**。

**P1**
- [#177656](https://github.com/openclaw/openclaw/issues/177656)：shared-state integrity-admission 错误（32 评论，最热）。无新 fix PR。
- [#119720](https://github.com/openclaw/openclaw/issues/119720)：事件循环阻塞（部分修复已落地）。无新 fix PR。
- [#117262](https://github.com/openclaw/openclaw/issues/117262)：3 个并发写句柄导致 ~33s 事件循环停滞。无新 fix PR。
- [#144336](https://github.com/openclaw/openclaw/issues/144336)：延迟配置重载重启的 shutdown 步骤失败。无新 fix PR。
- [#125764](https://github.com/openclaw/openclaw/issues/125764)：Telegram 出站发送单次失败即死信，无重试。无新 fix PR。
- [#181432](https://github.com/openclaw/openclaw/issues/181432)：2026.10.5 基线 RSS ~1.9GB（此前 ~300MB）并伴随 SQLite 事务超时。
- [#157255](https://github.com/openclaw/openclaw/issues/157255)：lane 超时后 turn claim 未释放，会话卡死 90+ 分钟。
- [#193262](https://github.com/openclaw/openclaw/issues/193262)：Windows 驱动器 bind-mount 状态目录时 Docker 启动失败（回归，fix shape 已清晰）。无新 fix PR。
- [#121953](https://github.com/openclaw/openclaw/issues/121953)：Cron 轮次在 DeepSeek 上因 `[cron:...]` 前缀被降权而停滞。

**待合并的相关修复 PR**：[#195216](https://github.com/openclaw/openclaw/pull/195216)（并发启动后 agent 可用性，P1）、[#195303](https://github.com/openclaw/openclaw/pull/195303)（sandbox 保留 spawn broker）、[#195307](https://github.com/openclaw/openclaw/pull/195307)（大窗口会话过早压缩）、[#195308](https://github.com/openclaw/openclaw/pull/195308)（Signal 媒体上传超时误报）。

---

## 6. 功能请求与路线图信号

- [#162164](https://github.com/openclaw/openclaw/issues/162164)：iOS/macOS 个人身份 opt-in，同时保留 Shared owner。已带 `needs-security-review` 与贡献切片地图，**可能进入后续版本但需安全评审**。
- [#16670](https://github.com/openclaw/openclaw/issues/16670)：Onboarding Wizard 将 Memory/Embedding 设为必选步骤。属产品决策项，尚无对应 PR。
- [#14785](https://github.com/openclaw/openclaw/issues/14785)：减少工具 schema token 开销（~3,500 tok/session）。成本敏感型用户长期呼声，无对应 PR。
- 已有关联修复在推进、最可能近期落地的是**渠道可靠性**方向：Signal 限流/验证码事实保留（[#195312](https://github.com/openclaw/openclaw/pull/195312)）、Signal 媒体上传（[#195308](https://github.com/openclaw/openclaw/pull/195308)）、部分发送保留下已接受消息 id（[#195224](https://github.com/openclaw/openclaw/pull/195224)）、用户 Stop 后告知下一轮（[#194216](https://github.com/openclaw/openclaw/pull/194216)）。

---

## 7. 用户反馈摘要

**核心痛点**
- **稳定性与可恢复性**：Gateway 重启/唤醒后状态不一致、会话卡死、消息静默丢失（Telegram 死信、Android Talk 掉线、A2A 重复消息）被多次描述为影响日常使用。
- **升级路径脆弱**：多个版本出现"修复存在但无法通过 update 抵达"或升级后内存暴涨/hang（#193962、#181432、#167652），用户对版本升级信心受挫。
- **可观测性不足**：Code Mode 将 guest 脚本 TypeError 报为 internal_error（#167609）、Signal 仅返回通用的限流错误，增加排障成本。

**使用场景**：多 agent 显式归属生产部署、macOS launchd 常驻、Docker/Windows 交叉环境、Cron 自动化、Telegram/Signal/Slack 多渠道接入。

**满意度信号**：部分历史问题（context window 陈旧显示、Windows 更新 cleanup）已被关闭；PR 评审标记体系显示贡献者与维护者协作活跃。用户整体在"深度使用但稳定性负担重"的状态。

---

## 8. 待处理积压（需维护者关注）

| 项目 | 类型 | 未决时长 | 状态 |
|---|---|---|---|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 回归 Bug | 2026-03-06 起 | 无新 fix PR，需维护者评审 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 增强 | 2026-02-12 起 | 需产品决策，无 PR |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | 增强 | 2026-02-15 起 | 需产品决策，无 PR |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | 消息重复 Bug | 2026-03-08 起 | 无新 fix PR |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | P1 稳定性 | 2026-08-01 起 | 无新 fix PR |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | P1 Cron | 2026-08-11 起 | 无新 fix PR |
| [#163566](https://github.com/openclaw/openclaw/issues/163566) | 标记 stale | 2026-10-02 起 | 每轮 ~100s CPU，需评审 |
| [#166526](https://github.com/openclaw/openclaw/issues/166526) | Doctor 性能 | 2026-10-07 起 | 473s 超 60s 预算，需评审 |

**健康度提示**：P1 级"无新 fix PR + 需维护者评审"条目数量偏多，且多条已挂数周至数月；建议优先分流 #117262、#121953 这类带有明确复现的稳定性议题，并清理 stale 标记但仍有活跃复现的 Issue（如 #163566），避免真实问题被误降级。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**数据窗口：2026-11-08（过去 24 小时）｜共 13 个条目，其中 5 个无活动**

---

## 1. 生态全景

生态整体处于**"高强度运转但释放缓慢"**的状态：头部项目（OpenClaw、Hermes Agent）单日 Issues/PR 更新均触及 50–500 量级，但几乎没有新版本发布，合并吞吐普遍落后于提交量（Hermes 当日 5/50，CoPaw 0/14，OpenClaw 待合并 306 条）。竞争焦点已从"功能有没有"转向**稳定性、权限可审计性与多渠道真实性**——OpenClaw、Hermes、ZeroClaw、NanoBot 的今日热点几乎全部落在并发状态一致性、策略绕过与静默失败上。与此同时，插件/目录类生态贡献（Hermes Plugin Hackathon、PicoClaw 的 Standard Compute provider、NanoClaw 的 setup 修复链）显示外部厂商与第三方开发者正在主动接入，生态开始出现**"核心收口 + 外围扩张"**的分层。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新/活跃·关闭） | PR（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 406 活跃 / 94 关闭（共 500） | 306 待合并 / 194 合并·关闭（共 500） | 无（v2026.11.2 物料推进中） | 超高活跃，评审吞吐为瓶颈；P0/P1 多无 fix PR，稳定性为最大短板 |
| **Hermes Agent** | 46 活跃 / 4 关闭（共 50） | 45 待合并 / 5 合并·关闭（共 50） | 无 | 高活跃，统一网关遗留问题集中；合并吞吐严重落后 |
| **ZeroClaw** | 11 活跃 / 3 关闭（共 14） | 24 待合并 / 7 合并·关闭（共 31） | 无 | 高活跃，安全修复链条推进中；多个 XL/risk:high PR 积压 |
| **NanoClaw** | 0 | 18 待合并 / 32 合并·关闭（共 50） | 无 | 中高活跃，合并吞吐良好（安全硬化主线），社区侧无新输入 |
| **CoPaw** | 8 活跃 / 0 关闭 | 14 待合并 / 0 合并·关闭 | 无 | 中高活跃，问题发现活跃、修复供给足、零合并 |
| **NanoBot** | 4 更新（1 关闭） | 2 待合并 / 3 合并·关闭（共 5） | 无 | 中等活跃，修复节奏正常，含 1 条策略层安全 Issue |
| **LobsterAI** | 0 | 1 待合并 / 3 关闭（共 4） | 无 | 偏低活跃，代码收尾日；OpenClaw 子系统修复曾 stale 6 周 |
| **PicoClaw** | 0 | 1 待合并 / 1 关闭（共 2） | 无 | 低强度维护；WIP 多智能体 PR 以关闭告终 |
| **NullClaw** | — | — | — | 过去 24 小时无活动 |
| **IronClaw** | — | — | — | 过去 24 小时无活动 |
| **TinyClaw (TinyAGI)** | — | — | — | 过去 24 小时无活动 |
| **Moltis** | — | — | — | 过去 24 小时无活动 |
| **ZeptoClaw** | — | — | — | 过去 24 小时无活动 |

> 注：所有项目今日均**零新版本发布**。CoPaw 数据中 Issue/PR 链接指向 `agentscope-ai/QwenPaw`，与来源名称不一致，需维护者核对。

---

## 3. OpenClaw 在生态中的定位

**规模绝对领先**：OpenClaw 单日 Issues+PR 更新约 1,000 条，是 Hermes（100）的 10 倍、ZeroClaw（45）的 22 倍，远超其余项目。评论热度也最高（#177656 达 32 评论），说明其**用户基数与生产使用深度**在同生态中无可比。

**技术路线差异**：
- OpenClaw 走**单进程 Gateway 架构**，把多渠道（Telegram/Signal/Slack/WeCom）、Cron、多 agent 归属、SQLite 持久化压进同一事件循环。代价是今日热点被"事件循环阻塞（#119720，25 评论）、并发写句柄停滞（#117262）、shared-state admission（#177656）"占据——这是**架构性并发瓶颈**，而非局部 bug。
- 对比 Hermes 同样做了网关合并（#106742 将 CLI/TUI/Desktop/API/机器人/cron/Kanban 并入单一网关），今日最热议题 #143547（56 评论）正是该合并的遗留问题，说明**"网关统一"是这一代个人助手的共同架构选择，也是共同的痛点来源**。
- ZeroClaw 则在同一方向上更强调**多租户与 RBAC/会话所有权**（#5982、#12289），属于把 OpenClaw 类架构往可运维平台推进的路线。

**社区规模对比**：OpenClaw 的问题沉淀时间最长（#38327 自 2026-03-06、#14785 自 2026-02-12），长期积压项数量最多；Hermes 则以插件目录 PR 的大量涌入体现**生态侧扩张速度**。两者是生态中"核心参照"与"最强追赶者"的关系。

**核心短板**：升级路径脆弱（#193962 修复已在 beta 但无法经 `openclaw update` 抵达、#181432 内存暴涨）是 OpenClaw 独有且被用户反复抱怨的问题，直接影响版本信任。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **稳定性 / 并发状态一致性** | OpenClaw、Hermes、ZeroClaw | OpenClaw：事件循环阻塞、SQLite 争用、shared-state admission、并发写句柄（#119720/#117262/#177656）；Hermes：单次 20s 超时摧毁整个 turn（#147839）、会话状态污染（#139599）；ZeroClaw：S2 缺陷 #12289/#12288 |
| **权限 / 策略可靠性（"关闭即失效"）** | ZeroClaw、NanoBot、OpenClaw | ZeroClaw：`enabled=false` 的 agent 仍可执行（#12289）、RBAC（#5982）；NanoBot：Matrix 群组被误判为 DM 绕过 groupPolicy（#6602）；OpenClaw：多 agent 归属与 `AgentSelectionRequiredError`（#126360） |
| **静默失败 / 可观测性** | CoPaw、NanoBot、Hermes、OpenClaw、ZeroClaw | CoPaw：模型静默回退需通知（#8103）、QQ 通道静默 `enabled=false`（#8475）、SQLite 错误被改写为 TimeoutError（#8620）；NanoBot：飞书附件静默丢弃（#6596）、参考图被静默忽略（#6598）；Hermes：Kanban 只抛 "No reply"（#147839）；OpenClaw：Code Mode TypeError 报为 internal_error（#167609） |
| **工具 schema / token 成本膨胀** | OpenClaw、LobsterAI、CoPaw | OpenClaw：#14785 减少工具 schema ~3,500 tok/session；LobsterAI：#3029 工具 schema 占请求约 2/3（68 工具、~106k 字符、首请求 ~45k tokens），用 Tool Search 目录模式延后加载；CoPaw：Cron 任务级 `thinking_level` 覆盖（#8626）降 token |
| **跨端 / 多渠道一致性** | Hermes、NanoBot、NanoClaw、PicoClaw | Hermes：Desktop 与 CLI/编辑器并行时提示不显示（#150993）、重复绘制（#149560）；NanoBot：飞书富文本、Matrix、DeepSeek 视觉角色兼容（#6584）；NanoClaw：WSL/精简 Ubuntu 缺 jq 阻断 channel setup；PicoClaw：OpenAI 兼容 provider 接入（#3431） |
| **插件 / 生态接口** | Hermes、PicoClaw | Hermes：第三方插件请求会话列表/用量数据接口（#151369/#151368）、插件 Hackathon 提交（oathkeeper、proof-run 等）；PicoClaw：外部厂商 provider 接入（#3431） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | NanoClaw | NanoBot | CoPaw | PicoClaw / LobsterAI |
|---|---|---|---|---|---|---|---|
| **功能侧重** | 全渠道 + 多 agent 生产部署 + Cron 自动化 | 统一网关 + 插件生态 + 跨端桌面 | 多租户身份/访问控制 + relay 仪表盘 | 容器化安全硬化 + 安装健壮性 | 多渠道适配边界修复 | 桌面端 + 记忆/搜索 + Beta 迭代 | PicoClaw：provider 生态；LobsterAI：OpenClaw 子系统的稳定性/性能 |
| **目标用户** | 生产规模自托管用户（macOS launchd、Docker/Windows） | 个人代理 + 插件开发者 | 多租户/可运维平台部署者 | 容器/自托管部署者（WSL、精简 Linux） | 多渠道轻量用户（飞书/Matrix） | pip 安装版 + 桌面 Beta 用户 | 厂商接入方 / 性能敏感用户 |
| **技术架构** | 单 Gateway + SQLite | 单网关（CLI/TUI/Desktop/API 合一） | 网关 + RBAC/会话所有权契约 | 容器隔离 + 依赖管理 | 多 channel 适配层 | 守护进程 + 记忆空间（SQLite） | PicoClaw：provider 协议；LobsterAI：构建于 OpenClaw v2026.8.1 |
| **今日主旋律** | 发布基建 + 渠道体验（缺核心稳定性合入） | 稳定性补丁 + 插件目录扩张 | 授权加固链条（4 条 PR 依赖链） | 安全硬化 + setup 修复链 | 多渠道边界 bug 修复 | Beta 期问题发现 + 修复供给 | 关闭收尾 / 低强度维护 |

关键差异：**OpenClaw 是"广而重"的生产参照，Hermes 是"网关联通 + 生态外向"的追赶者，ZeroClaw 把重心押在权限/多租户这一 OpenClaw 尚未系统化解决的方向，NanoClaw 与 NanoBot 走"小而稳"的渠道/安装质量路线**。

---

## 6. 社区热度与成熟度

**第一层｜大规模快速迭代（同时承压）**
- **OpenClaw**、**Hermes Agent**：日更新 500 / 50 条级别，处于功能与稳定性双线作战期。OpenClaw 更接近"深度使用但稳定性负担重"，Hermes 处于"统一网关合并后的收尾震荡期"。二者均是**快速迭代 + 质量债累积**阶段。

**第二层｜质量巩固（吞吐良好但无新功能）**
- **NanoClaw**：32/50 合并，安全硬化与 setup 修复成体系推进，呈正向质量积累，但依赖大版本（Anthropic SDK 0.x→1.x）待人工评估。
- **ZeroClaw**：安全主线推进实质步骤，但 #11411 及多个 size:XL / risk:high / do-not-merge PR 未合入，v0.9.0 收口未完成。
- **LobsterAI**：4 条 PR 中 3 条当日闭环，属修复响应及时的"代码收尾"状态。

**第三层｜低强度维护 / 静默**
- **NanoBot**（中等，5 条 PR，1 条策略层 Issue 待 fix）、**CoPaw**（活跃但零合并，评审瓶颈）、**PicoClaw**（仅 2 条 PR 更新，多智能体 WIP 关闭）、以及**零活动**的 NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw。

**成熟度判断**：真正的"稳定成熟期"项目在样本中尚未出现——即便最活跃者也仍以 P0/P1 稳定性修复为主。生态整体处于**"从可用到可靠"的过渡带**。

---

## 7. 值得关注的趋势信号

1. **"网关统一"已过红利期，进入并发症消化期。** Hermes 与 OpenClaw 均把多渠道/多端并入单网关，代价是事件循环阻塞与跨端状态不同步成为最热议题（Hermes #143547 56 评论、OpenClaw #119720/126360）。**建议**：新进入者应从一开始就把网关的状态一致性与可诊断性作为一等公民设计，而非事后打补丁。

2. **用户对"静默失败"零容忍成为普遍情绪。** CoPaw（#8475/#8103）、NanoBot（#6596/#6598）、Hermes（#147839）的反馈高度一致——"无告警"本身比失败更令人不满。**建议**：把"失败必须可归因"作为产品契约，静默丢弃/静默回退/静默禁用应为开发期显式禁止的模式。

3. **权限语义的"字面可靠性"正被审计。** ZeroClaw #12289（禁用仍运行）、NanoBot #6602（重启后策略绕过）显示社区开始验证"开关真的生效吗"。这对多租户与多 agent 部署是硬需求，直接指向 **RBAC / 会话所有权可审计**（ZeroClaw #5982 讨论自 2026-04 至今）。

4. **工具目录膨胀催生架构级降本。** LobsterAI #3029 的量化（工具 schema 占请求 2/3、~45k tokens 基线）与 OpenClaw #14785、CoPaw #8626 共同指向**按需加载 / Tool Search / 任务级推理等级覆盖**。这是 token 经济性驱动的、可能成为默认行为的改动。

5. **生态由核心向外围分层成型。** Hermes Plugin Hackathon 提交、PicoClaw Standard Compute 接入、第三方插件请求官方数据接口（#151369/#151368），标志个人助手开始出现"平台 + 插件市场"的雏形。**建议**：核心项目应尽早定义稳定的插件数据/能力契约，否则生态贡献会因接口缺失而滞留。

6. **跨平台质量差距显著（尤其 Windows）。** Hermes 今日 Bug 中 Windows 占比突出（#150962/#148767/#143908），NanoClaw 的 WSL/精简镜像问题、OpenClaw 的 Windows bind-mount 回归、CoPaw 的 Windows 长路径问题都是同类。**建议**：Windows / WSL / 高 DPI 应纳入 CI 矩阵（对标 ZeroClaw #7461 的跨平台 CI 诉求），而非依赖用户报障。

---

**一句话结论**：2026-11-08 的生态信号清晰——**头部项目不缺功能与热度，缺的是把"稳定性、可归因、权限可信"做成硬契约的能力**；下一阶段的竞争胜负，将由谁先把质量债与评审瓶颈消化掉决定，而非谁的功能更多。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-08

## 1. 今日速览

项目今日活跃度中等：过去24小时有 4 条 Issue 与 5 条 PR 更新，无新版本发布。修复节奏正常，已关闭 1 个 Issue、合并/关闭 3 个 PR，但尚有 2 个 PR 待合并。缺陷集中在多渠道适配与命令处理边界（飞书富文本附件丢失、Matrix 群组误判为私聊、`/new` 空闲会话失效、DeepSeek 图像工具结果消息角色不兼容）。此外，`/new` 自取消缺陷已由 PR #6603 修复并关闭，属于今日闭环亮点。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **修复 `/new` 在空闲会话中自我取消的问题（PR #6603，已关闭/合并）**：避免命令取消执行自身的工作线程，确保会话正常重置并返回确认，对应 Issue #6601 已关闭。链接：HKUDS/nanobot PR #6603
- **WebUI 原生主题交叉淡入测试稳定性修复（PR #6600，已关闭）**：修复测试间歇性超时，不改产品行为、不弱化断言。链接：HKUDS/nanobot PR #6600
- **沙箱检查与可信启动器配置（PR #6595，已关闭）**：新增网关侧的显式沙箱检查，使用临时文件与生产启动器解析/包装逻辑，不调用模型、不削弱命令隔离。链接：HKUDS/nanobot PR #6595

整体看，今日推进以稳定性与测试可靠性为主，未涉及显著新能力交付。

## 4. 社区热点

- **Issue #6584（评论 2，今日最活跃）**：DeepSeek Chat Completions 中图像工具结果以不支持的消息角色发送，与 DeepSeek 视觉指南“图像仅支持 `user` 消息”的约束不符。链接：HKUDS/nanobot Issue #6584
- **Issue #6602（评论 1）**：Matrix 频道重启后，从恢复同步注册的房间被误判为 DM，导致 `groupPolicy` 群组策略（listen/mention 及覆盖配置）被绕过，属于策略层面的安全关注点。链接：HKUDS/nanobot Issue #6602
- **Issue #6601（评论 1，已关闭）**：`/new` 空闲会话静默无响应，问题描述细致，且已由 PR #6603 当日闭环。链接：HKUDS/nanobot Issue #6601

用户诉求集中在“多渠道输入形态与真实消息结构不一致”以及“策略判断在重启/恢复场景下不可靠”两点。

## 5. Bug 与稳定性

按严重程度排列：

1. **[高·策略绕过] Matrix 恢复同步导致群组房间误判为 DM（Issue #6602，OPEN）**：可能使群组策略失效，尚无对应 fix PR。链接：HKUDS/nanobot Issue #6602
2. **[中·静默丢数据] 飞书富文本消息附件被丢弃（Issue #6596 → PR #6604，OPEN）**：带说明文字与 `files` 数组的富文本消息仅传递说明文字，附件无下载尝试也无告警；PR #6604 已提交修复，待合并。链接：HKUDS/nanobot PR #6604
3. **[中·静默错误结果] 自定义图像生成 provider 忽略 `reference_images`（Issue #6598，OPEN）**：`custom` OpenAI-Images provider 单方面丢弃参考图并返回无关新图，且无报错，用户“编辑图片”场景得到错误结果；暂无 fix PR。链接：HKUDS/nanobot Issue #6598
4. **[中·协议不兼容] DeepSeek 图像工具结果消息角色不受支持（Issue #6584，OPEN）**：与上游视觉限制冲突，暂无 fix PR。链接：HKUDS/nanobot Issue #6584
5. **[低·已修复] `/new` 空闲会话静默失效（Issue #6601，CLOSED）**：由 PR #6603 修复。链接：HKUDS/nanobot Issue #6601

## 6. 功能请求与路线图信号

- **向工具暴露当前工具调用身份（PR #6263，OPEN，标记 feature/conflict）**：为工具提供 `tool_call_id` 级别的逻辑调用标识，补足 `RequestContext` 仅有会话与轮次信息的缺口，关闭 #5749。该 PR 自 2026-10-16 起长期挂起且带冲突标记，短期进入版本的可能性取决于冲突解决进度。链接：HKUDS/nanobot PR #6263
- **图像编辑路径补齐**：Issue #6598 暴露 `generate_image` 的 `reference_images` 与 `custom` provider 能力不匹配（缺少 `/images/edits` 路径），属于明确的接口契约补齐需求，但今日无对应 PR。
- **可信启动器/沙箱可检视化（PR #6595）**：已关闭，表明配置侧可观测性方向已有落地。

## 7. 用户反馈摘要

- **消息渠道真实性**：用户实际在飞书使用带附件与说明文字的富文本消息，期望附件被接收而非静默丢弃（#6604 描述）。
- **易用性挫败**：空闲会话发送 `/new` 完全无响应、无持久化、无回复，而其他斜杠命令正常，属于明显的交互不一致（#6601）。
- **策略可信度**：Matrix 用户在配置 `groupPolicy: "listen"/"mention"` 与覆盖项后，重启即出现 3 名真实成员的房间被当作 DM，用户对策略生效边界缺乏信任（#6602）。
- **静默失败不可接受**：图像编辑请求返回无关新图且无错误提示，用户强调“无告警”是核心不满点（#6598）。
- **上游约束需适配**：DeepSeek 视觉指南明确图像仅限 `user` 消息，用户期望 nanobot 在协议层做对齐（#6584）。

## 8. 待处理积压

- **PR #6263「Expose the current tool invocation identity to tools」**：创建于 2026-10-16，至今仍 OPEN，标记 `conflict` 与 `priority: p2`，已积压约三周，建议维护者推动冲突解决或明确取舍。链接：HKUDS/nanobot PR #6263
- **PR #6604（飞书富文本附件修复）**：今日新开且直接修复 #6596 的静默丢数据问题，建议优先评审合并。链接：HKUDS/nanobot PR #6604
- **Issue #6602（Matrix 群组策略绕过）**：涉及策略安全语义，当前无 fix PR，建议尽快排期。链接：HKUDS/nanobot Issue #6602

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-08

## 1. 今日速览

项目今日维持高活跃度：过去24小时 50 条 Issue 更新（46 条新开/活跃、4 条关闭）与 50 条 PR 更新（45 条待合并、5 条合并/关闭），无新版本发布。讨论重心集中在统一网关（#106742）合并后的遗留问题，Issue #143547 以 56 条评论成为今日最热议题。补丁流由核心维护者 teknium1 的多个 P2 修复驱动，但合并吞吐（5/50）明显落后于提交量，PR 队列压力持续累积。社区侧，插件目录（plugin-catalog）提交占据今日新 PR 的大半，显示 Plugin Hackathon 带来的生态贡献热度。

## 2. 版本发布

无新版本发布。（最近发布为 v0.23.0 "The Hearth Release"，仅作为 Issue #150896 的背景提及。）

## 3. 项目进展

今日合并/关闭的 PR 为 5 条，但展示的 15 条高讨论 PR 均为 OPEN 状态，未提供具体合并明细。可观察到的主要推进方向：

- **会话标题编码修复**：PR #151007 与 #151005 由 teknium1 提交，前者修复 `/q` 编辑在忙碌状态下返回 `admission_conflict` 的问题（对应 #149947），后者修复土耳其语等非拉丁会话标题乱码（对应 #149025）。链接：https://github.com/NousResearch/hermes-agent/pull/151007 、https://github.com/NousResearch/hermes-agent/pull/151005
- **网关/桌面跨端同步**：PR #150993 修复同一会话在 Desktop 与其他客户端（ACP 编辑器、CLI、第二桌面窗口）并行时提示不显示的问题。链接：https://github.com/NousResearch/hermes-agent/pull/150993
- **消息发送修复**：PR #151002 修复单个音频附件被拆分为两条消息的问题。链接：https://github.com/NousResearch/hermes-agent/pull/151002
- **插件生态扩张**：PR #151013（hermes-audio-api）、#151014（hermes-fal-video）、#151252（proof-run）、#151343（shopmate）、#151393（hermes-chan）、#151392（agent-inception）、#151006（oathkeeper）、#150998（Weft）、#82717（Codex web search 后端）等多条目录/能力类 PR 处于待合并。

整体看，项目在稳定性补丁与插件生态两侧同时推进，但核心网关与桌面同步问题仍以"修复排队"为主，尚未形成批量合入。

## 4. 社区热点

- **#143547 统一网关合并后的开放问题**（56 评论，+1）— 10 月 14 日 #106742 将 CLI、TUI、Desktop、API server、编辑器、消息机器人、cron、Kanban 等全部并入单一网关进程，遗留问题仍在收尾。这是全项目最集中、影响面最广的讨论主题。链接：https://github.com/NousResearch/hermes-agent/issues/143547
- **#97681 让 Bot 跨网关协作**（40 评论，+4）— 提议让各用户自有 Hermes Bot 在保留各自模型、工具、记忆与凭据的前提下跨机器、乃至跨所有者协作。诉求核心是"个人代理的可组合性"。链接：https://github.com/NousResearch/hermes-agent/issues/97681
- **#10232 [CLOSED]**（19 赞，内容为空）— 高赞但无实质内容的已关闭条目，点赞数在今日列表中最高，建议维护者核实关闭原因。链接：https://github.com/NousResearch/hermes-agent/issues/10232
- **#27313 视频分析使用独立辅助后端**（4 评论，+3）— 反映图像/截图与原生视频工作负载的模型选型差异。链接：https://github.com/NousResearch/hermes-agent/issues/27313
- **#151369 与 #151368 插件后端数据接口**（各 1 评论）— 来自第三方插件 hermes-t3sidebar 作者，请求会话列表/实时状态与多账号用量数据。链接：https://github.com/NousResearch/hermes-agent/issues/151369 、https://github.com/NousResearch/hermes-agent/issues/151368

## 5. Bug 与稳定性

按严重程度排列（P 级依据标签）：

**P1**
- **#139599** Steers/排队提示缺少来源归属；重复行持久化；压缩将不可验证文本写入上下文（Desktop，Windows 11，stepfun-ai/step-5-preview）。标签含 `sweeper:risk-session-state`。未见对应 fix PR。链接：https://github.com/NousResearch/hermes-agent/issues/139599

**P2**
- **#147839** 单次 20s `worker_receipt_timeout` 污染会话存储并摧毁整个 turn，用户仅见 "No reply"（Kanban worker）。未见 fix PR。链接：https://github.com/NousResearch/hermes-agent/issues/147839
- **#150962** Windows 11 上 `hermes update` 每次过期锁扫描都调用 `tasklist.exe`，产生 0xc0000142 错误弹窗。（今日新报）未见 fix PR。链接：https://github.com/NousResearch/hermes-agent/issues/150962
- **#150713** npm→pnpm 迁移（#149746）后 Nix `pnpm-deps` 在 macOS 上哈希不匹配，阻断 TUI、web/desktop 前端与 Home Manager，Linux 正常。标签 `cause/upstream`。未见 fix PR。链接：https://github.com/NousResearch/hermes-agent/issues/150713
- **#148767** Windows 上候选名为 `nul` 时 `complete.path` 抛 ValueError，整个 WS 请求被丢弃。未见 fix PR。链接：https://github.com/NousResearch/hermes-agent/issues/148767
- **#143908** 网关持有 SQLite 句柄时，Kanban 板删除/归档在 Windows 上因目录重命名 PermissionError 返回裸 500。未见 fix PR。链接：https://github.com/NousResearch/hermes-agent/issues/143908
- **#149560** Desktop 在新回复下方重复绘制上一轮回复（`state.db` 仅存一份，网关仅发送一次，属渲染层问题）。未见 fix PR。链接：https://github.com/NousResearch/hermes-agent/issues/149560
- **#149517** 手动 `/compress` 运行期间，Esc Esc / `/rewind` 静默无响应。（已有相关 PR 方向但未确认对应）链接：https://github.com/NousResearch/hermes-agent/issues/149517
- **#150939** 消息平台（Telegram，v0.22.7）上 `/retry` 会把合并进末轮的 mirrored/display_kind 用户行一并重发。（今日新报）链接：https://github.com/NousResearch/hermes-agent/issues/150939
- **#151383** `gateway.status._read_json_file` 使用无限制 `Path.read_text`，若 `gateway.pid`/`gateway.lock` 被替换为无写端 FIFO，所有读取者将永久阻塞。（今日新报）链接：https://github.com/NousResearch/hermes-agent/issues/151383
- **#45106** SELinux 破坏 Docker 后端（自动绑定卷在 OpenSUSE 等系统上失败），自 6 月以来仍未解决。链接：https://github.com/NousResearch/hermes-agent/issues/45106
- **#146938（PR）** 修复 `process_manage(action="log")` 负 offset 返回空结果（`lines[-80:0]` 恒为空）。链接：https://github.com/NousResearch/hermes-agent/pull/146938
- **#146940（PR）** cron 会话标题回退逻辑在 try 块外被提前求值。链接：https://github.com/NousResearch/hermes-agent/pull/146940

**已关闭**
- **#150896** Desktop v0.23.0 "Hearth" 远程启动成功但会话列表无限骨架屏（Fedora）— 已关闭。链接：https://github.com/NousResearch/hermes-agent/issues/150896

值得注意：Windows 平台问题在今日 Bug 中占比显著（#150962、#148767、#143908、#139599），建议单独立项排查。

## 6. 功能请求与路线图信号

- **独立视频分析后端**（#27313，+3）：将 `auxiliary.vision` 拆分为图像与视频两路后端，已有插件侧 PR #151014（hermes-fal-video 提供 edit/extend/references 工具）可作为生态层先行验证。
- **主动式跟进消息**（#125448）：通过安全的网关插件契约支持"源可追溯"的主动提醒，标签 `needs-decision`，需产品决策。
- **跨网关 Bot 协作**（#97681，+4）：跨机器先行、跨所有者后续，属中长期路线图基础建设。
- **检查点与触发提示关联**（#149516）：`/rollback` 列表当前缺乏"哪个 prompt 导致该检查点"的信息。
- **插件后端数据接口**（#151369、#151368）：会话列表/实时状态/受控变更/用量历史，以及多账号与 Codex 重置额度的聚合展示——直接对应第三方 Desktop 侧栏插件需求。
- **安全/契约类插件**（PR #151006 oathkeeper、#151252 proof-run）：将提示约束升级为可执行的守卫与运行契约，是今日目录提交中最具方向性的一组。
- **Web 检索后端**（PR #82717）：新增 Codex web search + extract 后端，自 8 月排队至今。

判断：视频辅助后端与插件数据接口最可能进入下一版本（生态侧已先行、阻力小）；跨网关协作与主动跟进因带 `needs-decision` 标签，短期落地概率较低。

## 7. 用户反馈摘要

- **会话可靠性是首要痛点**：一次 20 秒超时即摧毁整个 turn 并只抛出 "No reply"（#147839），配合 P1 的 #139599（压缩污染上下文、来源归属缺失），用户对"看不见的失败"容忍度低，期望可诊断的错误信息。
- **跨端一致性困惑**：同一会话在多客户端打开时提示不显示（#150993）、Desktop 重复绘制上轮回复（#149560）、v0.23.0 会话列表不加载（#150896），说明统一网关后多端协同仍是体验薄弱区。
- **平台差异明显**：Windows 用户在更新、路径补全、Kanban 删除等多处受阻；macOS 用户在 Nix 构建链路上受阻（#150713）；Linux 相对稳定。
- **生态开发者诉求明确**：第三方插件作者希望获得官方会话/用量数据接口（#151369、#151368），并主动以 PR 形式向目录贡献插件，显示社区扩展意愿强烈。
- **正向信号**：插件 Hackathon 相关提交（oathkeeper、hermes-chan、agent-inception 等）与 #27313、#97681 的高赞/高讨论，表明用户认可"个人代理"定位并希望其在协作与主动性上更进一步。

## 8. 待处理积压

- **#45106 SELinux 破坏 Docker 后端** — 创建于 2026-06-12，近 5 个月无 fix PR，影响 OpenSUSE 等 SELinux 发行版的 Docker 沙箱用户。链接：https://github.com/NousResearch/hermes-agent/issues/45106
- **PR #82717 Codex web search + extract 后端** — 创建于 2026-08-09，排队逾 3 个月未合并。链接：https://github.com/NousResearch/hermes-agent/pull/82717
- **#97681 跨网关 Bot 协作** — 创建于 2026-08-29，40 条评论仍未进入实现阶段，是评论区最活跃的长期功能议题之一。链接：https://github.com/NousResearch/hermes-agent/issues/97681
- **#143547 统一网关遗留问题** — 自 10 月 23 日持续活跃至今日（56 评论），跨 comp/gateway、cron、plugins、telegram、discord、auth、config、desktop、sessions、profiles、compression、tui-gateway 十余个组件，建议拆分为可跟踪的子任务以推进收敛。链接：https://github.com/NousResearch/hermes-agent/issues/143547
- **PR 合并吞吐** — 今日 45 条 PR 待合并 vs 5 条合并/关闭，且多条插件目录 PR（#151013、#151014、#151252、#151343、#151393、#151392、#151006、#150998）同日涌入，建议维护者明确目录类 PR 的批量评审节奏。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-08）

## 1. 今日速览

今日项目活跃度偏低：过去 24 小时 Issues 无任何更新（新开/活跃 0，关闭 0），PR 侧仅 2 条更新，其中 1 条关闭、1 条仍开放。无新版本发布，未见 Bug 报告或回归问题。整体看，项目今日处于**低强度维护状态**，社区输入以长期 PR 的推进为主，暂无新需求涌入。健康度判断：稳定但缺乏新增讨论，需关注积压 PR 的响应节奏。

## 2. 版本发布

今日无新版本发布（0 个），最新 Releases 为空，故省略。

## 3. 项目进展

- **PR #423 [CLOSED]** `WIP: feat: base multi-agent collaboration framework & shared context`（作者 Leeaandrob，创建 2026-02-18，更新 2026-11-08）
  链接: sipeed/picoclaw PR #423
  该 PR 为多智能体协作基础框架，包含共享上下文池、agent handoff 与发现工具，构建于已合并的 PR #213（provider 协议重构）和 #131（模型回退链 + 多 agent）之上。今日状态为关闭，且标题标注 WIP，说明这项多智能体能力推进未以合并形式落地，项目在该方向的进展有限。

## 4. 社区热点

- **PR #423**（已关闭）：创建于 2026-02-18，直至 2026-11-08 才更新，生命周期跨越约 9 个月，是今日更新中历史最长的一条。
  链接: sipeed/picoclaw PR #423
- **PR #3431**（开放）：最近更新于 2026-11-07，作者为 Standard Compute 团队成员，主动为项目贡献 OpenAI 兼容 provider 接入。
  链接: sipeed/picoclaw PR #3431

说明：数据中两条 PR 的评论数均显示为 `undefined`、👍 均为 0，无法据此判断真实讨论热度，以上仅为今日更新条目的事实汇总。背后诉求体现在两个方面：内部希望推进多智能体协作能力；外部厂商希望以标准 provider 方式接入生态。

## 5. Bug 与稳定性

今日无 Issues 更新，未报告 Bug、崩溃或回归问题，按严重程度无可排列项，也无需 fix PR。

## 6. 功能请求与路线图信号

今日无新功能 Issue。结合已有 PR 可判断以下方向正在被推进：

- **多智能体协作框架**（PR #423，已关闭）：涉及共享上下文池、agent handoff、发现工具，依赖已合并的 provider 协议重构（#213）与模型回退链（#131）。本次以关闭告终，是否以新 PR 形式回归，需要维护者后续表态。
- **新增 OpenAI 兼容 provider（Standard Compute）**（PR #3431，开放）：作者自述遵循 #2917 的相关约定；若通过评审会合入，则更可能被纳入下一版本。

## 7. 用户反馈摘要

今日数据中没有 Issues 评论，也没有 PR 评论内容，无法提炼真实用户痛点、使用场景或满意/不满意评价。唯一可确认的反馈信号来自 PR #3431 作者自述的动机：Standard Compute 是“一把密钥访问多家实验室模型”的 OpenAI 兼容网关，因此贡献者希望项目支持该类 provider 接入。

## 8. 待处理积压

- **PR #3431 [OPEN]** `feat(provider): add Standard Compute provider`（作者 henrikdukefoss，创建 2026-10-15，更新 2026-11-07）
  链接: sipeed/picoclaw PR #3431
  已开放约 3 周，仍未合并，建议维护者给出评审结论（合入、修改或关闭），避免外部贡献者等待过久。
- **PR #423** 虽已关闭，但作为跨 9 个月的 WIP 多智能体框架，其后续规划（是否拆分重提）缺少公开结论，建议明确路线图态度。

---
数据来源：PicoClaw（github.com/sipeed/picoclaw），统计窗口 2026-11-07 至 2026-11-08。今日无 Issues 与 Release 数据，相关分析基于两条 PR 更新记录。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-08

## 1. 今日速览

项目今日没有新的 Issues 活动，也没有发布新版本，开发重心全部集中在 PR 队列的整理上：过去 24 小时内共有 50 条 PR 更新，其中 32 条已合并或关闭、18 条仍待合并。核心团队成员 glifocat 主导了多条 `kind/hardening` 安全与稳定性修复的合入，覆盖容器配置、消息投递、镜像漏洞与安装流程。dependabot 提交的依赖升级 PR 占待合并项的多数，其中 `@anthropic-ai/sdk` 出现 0.x → 1.x 的重大版本跨度、处于等待状态，需要人工评估。整体活跃度评定为**中高**：合并吞吐良好，但社区侧（Issues、新版本）今日没有新增输入。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日已合并或关闭的重要修复包括：

- **容器配置安全加固** — [PR #4138](https://github.com/nanocoai/nanoclaw/pull/4138)（已合并/关闭）：`materializeContainerJson` 不再通过符号链接写入 `container.json`，避免在会话中未以只读方式挂载该文件时被劫持重写。
- **消息投递阻塞隔离** — [PR #4192](https://github.com/nanocoai/nanoclaw/pull/4192)（已合并/关闭）：单条挂起的 channel 发送不再导致整个会话沉默至重启；最多 8 条挂起时其他会话仍保持节奏。
- **镜像漏洞清理** — [PR #4270](https://github.com/nanocoai/nanoclaw/pull/4270)（已合并/关闭）：针对 2026-11-08 对 main 镜像的 grype/trivy 扫描结果（1 个 Critical、24 个 High 且有可用修复），停止在 agent 镜像中携带已有修复的告警项。
- **安装体验修复** — [PR #4205](https://github.com/nanocoai/nanoclaw/pull/4205)（已合并/关闭）：setup 接受任意长度显示名，自动截断 agent 文件夹名（`cli-with-<name>` 等）而非直接失败。

**推进幅度评估**：本轮合入集中在「安全硬化 + 安装健壮性」两条主线，属于稳定性收益明确、但不含新功能面的推进，项目健康度呈正向积累。

## 4. 社区热点

今日数据未提供任何 PR 的评论数（均为 `undefined`）或反应数（👍 均为 0），因此**无法识别讨论热度排名**。仅按创建时间看，当日新建的活跃项为 dependabot 的 [PR #4304](https://github.com/nanocoai/nanoclaw/pull/4304)（dev-minor-patch 组，5 个包升级）。

从供给侧看，待合并队列中最需要人工判断的是 [PR #4275](https://github.com/nanocoai/nanoclaw/pull/4275)——`@anthropic-ai/sdk` 从 `0.108.0` 升至 `1.3.0`，属跨主版本的依赖跃迁，位于 `container/agent-runner`，潜在影响面较大。

## 5. Bug 与稳定性

今日**没有 Issues 报告**，因此没有用户侧的新 Bug 或回归输入。以下为今日仍在流转中的修复类 PR，按影响面排序：

| 级别 | PR | 问题 | 状态 |
|---|---|---|---|
| 高 | [#4138](https://github.com/nanocoai/nanoclaw/pull/4138) | 通过符号链接写入 container.json 的安全隐患 | 已关闭/合并 |
| 高 | [#4192](https://github.com/nanocoai/nanoclaw/pull/4192) | 单条挂起发送导致会话永久沉默 | 已关闭/合并 |
| 高 | [#4270](https://github.com/nanocoai/nanoclaw/pull/4270) | 镜像含 1 Critical / 24 High 可修复漏洞 | 已关闭/合并 |
| 中 | [#4201](https://github.com/nanocoai/nanoclaw/pull/4201) | 刚加入 docker 组后，用户服务首轮无法访问 Docker | 待合并（已有 fix） |
| 中 | [#4204](https://github.com/nanocoai/nanoclaw/pull/4204) | Slack 后台安装失败不显示原因；重跑后 verify 不通过 | 待合并（已有 fix） |
| 中 | [#4202](https://github.com/nanocoai/nanoclaw/pull/4202) | WSL / 精简 Ubuntu 镜像缺 jq，导致各 channel setup 失败 | 待合并（已有 fix） |
| 中 | [#4213](https://github.com/nanocoai/nanoclaw/pull/4213) | `provider-auth` 安装 provider 后未重启 host，首次对话失败 | 待合并（已有 fix） |
| 中 | [#4203](https://github.com/nanocoai/nanoclaw/pull/4203) | OneCLI 远程网关会让 agent 指向自身机器 | 待合并（已有 fix） |
| 低 | [#3139](https://github.com/nanocoai/nanoclaw/pull/3139) | WhatsApp 共享号模式误丢 fromMe 消息，静默 owner | 待合并，自 2026-07-26 起长期未合 |

## 6. 功能请求与路线图信号

今日无新功能类 Issue。从在途 PR 可推断下一版本的方向信号：

- **安装向导（setup）的鲁棒性成体系推进**：#4201 / #4202 / #4203 / #4204 / #4213 同属 setup 分支，且均带 `PR: Skill` 或 `PR: Fix` 标签，若集中合入，将显著降低 WSL、精简 Linux 与多 channel 场景的首次安装失败率。
- **channel 能力补强**：#4202 摘要明确提及 Slack、Discord、Telegram、Teams 与 Dial 的 setup，说明多 channel 覆盖是当前扩展重点。
- **依赖大版本跟进**：#4275（Anthropic SDK 1.x）与 [#4276](https://github.com/nanocoai/nanoclaw/pull/4276)（claude-agent-sdk 0.3.296 → 0.3.316）决定 agent-runner 的 API 基线。

## 7. 用户反馈摘要

今日 Issues 评论数据为零，无法提炼用户原话或情绪倾向。仅能从 PR 摘要中读取被作者观察到的真实使用场景：

- **多平台安装摩擦**：用户会在 WSL 与最小化 Ubuntu 镜像上部署，缺少 jq 等基础工具会直接阻断 channel 配置。
- **群组/权限边界**：成员新加入 docker 组后 systemd 用户服务仍持有旧组信息，导致首轮启动失败——反映以非 root 用户运行容器是常见用法。
- **多机网关配置**：OneCLI 网关部署在另一台机器时，agent 会被误导指向自身，说明远程代理是实际存在的部署形态。
- **共享号使用**：WhatsApp 共享号模式的 owner 消息被整体丢弃，影响实际可用性。

## 8. 待处理积压

- [PR #3139](https://github.com/nanocoai/nanoclaw/pull/3139) — 自 **2026-07-26** 创建，超过三个月未合入，涉及 WhatsApp 共享号模式下 owner 被静默的可用性缺陷，建议维护者给出明确结论（合入或关闭）。
- [PR #4275](https://github.com/nanocoai/nanoclaw/pull/4275) — `@anthropic-ai/sdk` 跨主版本升级，自 11-06 起待处理，建议优先做兼容性评估，避免积压阻塞后续依赖更新。
- [PR #4203](https://github.com/nanocoai/nanoclaw/pull/4203)、[#4201](https://github.com/nanocoai/nanoclaw/pull/4201)、[#4204](https://github.com/nanocoai/nanoclaw/pull/4204)、[#4202](https://github.com/nanocoai/nanoclaw/pull/4202)、[#4213](https://github.com/nanocoai/nanoclaw/pull/4213) — 均为 10-23 创建、今日仍在更新的 setup 修复链，彼此存在依赖（#4202 依赖已合并的 #4200），建议按依赖顺序批量评审合入，避免长期悬置。

---

*说明：本报告中「评论数」「反应数」在源数据中均缺失或为 0，因此社区热度与用户情绪部分仅基于 PR 摘要文本推断，不含评论内容分析。*

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

# LobsterAI 项目日报（2026-11-08）

## 1. 今日速览

今日项目无 Issues 更新、无新版本发布，活动完全集中在 Pull Request 层面（共 4 条更新：1 条待合并、3 条已关闭），整体活跃度偏低，属于典型的“代码收尾日”。已关闭的 3 条 PR 中，2 条是 OpenClaw 子系统的稳定性/资源占用修复，1 条是桌面端 Windows 文本选择可靠性修复，说明当前迭代重心在稳定性与性能打磨，而非新功能铺开。唯一待合并的 #3029 是性能优化类改动，涉及请求体积大幅缩减，值得关注。需注意：#2765 自 2026-09-25 创建、带 `stale` 标签，今日才关闭，存在积压信号。

## 2. 版本发布

无新版本发布，本节略。

## 3. 项目进展

今日关闭的 3 条 PR 推进了以下方向：

- **#2765 [CLOSED] fix(openclaw): preserve accepted work through recovery and compaction**（alison-xx，2026-09-25 创建，历时约 6 周关闭）
  在压缩（compaction）与网关重启过程中保留已接受的工作成果，同时降低 pinned-runtime 启动开销；将模型目录 worker 契约与宿主编排解耦。运行时仍保持在 OpenClaw v2026.8.1，未做运行时升级。
  链接：netease-youdao/LobsterAI PR #2765

- **#3028 [CLOSED] fix(desktop-companion): make Windows text selection more reliable**（fisherdaddy）
  修复 Windows 上选区工具栏的可靠性问题，场景来自 Edge 与 WPS 在 200% 缩放显示下的实测：缩放显示下大段文本不再弹出工具栏，selection-hook 现在要求 UIA 选区满足特定行矩形条件才接受。
  链接：netease-youdao/LobsterAI PR #3028

- **#3027 [CLOSED] fix(openclaw): snapshot Chrome MCP process trees natively on Windows**（fisherdaddy）
  修复 Windows 上浏览器工具可能永久不可用的问题。内置浏览器（默认显示模式）通过 OpenClaw 的 `existing-session` Chrome MCP 驱动接入，此前在信任会话前无法可靠证明进程归属。
  链接：netease-youdao/LobsterAI PR #3027

**整体评估**：三处关闭均属“修复既有能力的可靠性缺口”，项目在跨平台（尤其 Windows）稳定性上向前迈进了实质一步；但今日无功能型合并，功能面推进为零。

## 4. 社区热点

今日无 Issues 更新，且所有 PR 的评论数与点赞数均未提供有效值（显示为 undefined / 0），**不存在可量化的讨论热点**。相对最受关注的是唯一处于 OPEN 状态的 PR：

- **#3029 [OPEN] perf(openclaw): defer large tool catalogs behind Tool Search**（fisherdaddy，创建与更新均为 2026-11-08）
  作者披露的动机数据：工具 schema 约占每次模型请求的三分之二——每次调用发送 68 个工具、约 106k 字符，首请求基线约 45k tokens。该 PR 启用 OpenClaw Tool Search（目录模式），仅保留核心文件类工具。
  链接：netease-youdao/LobsterAI PR #3029

**诉求分析**：背后指向 token 成本与首响应延迟两大痛点，属于对“工具目录膨胀”这一结构性问题的正面回应，若合入将直接影响每次请求的经济性。

## 5. Bug 与稳定性

按严重程度排列今日涉及的稳定性问题（均已有 fix PR，且均已关闭）：

1. **高｜Windows 浏览器工具可能永久不可用**（#3027）
   内置浏览器依赖 Chrome MCP `existing-session` 驱动，进程归属无法证明导致会话不可信、工具失效。已由 #3027 通过原生快照 Chrome MCP 进程树修复（CLOSED）。
   链接：netease-youdao/LobsterAI PR #3027

2. **中｜压缩/网关重启导致已接受工作丢失**（#2765）
   工作成果在 compaction 与重启过程中存在丢失风险，另有 pinned-runtime 启动开销问题。已由 #2765 修复（CLOSED，但带 `stale` 标签、积压约 6 周才关闭）。
   链接：netease-youdao/LobsterAI PR #2765

3. **中｜高缩放显示下 Windows 文本选择工具栏失效**（#3028）
   在 200% 缩放显示的 Edge、WPS 中，大段文本选择不弹出工具栏。已由 #3028 修复（CLOSED）。
   链接：netease-youdao/LobsterAI PR #3028

今日无新报告的 Bug、崩溃或回归问题（Issues 更新为 0）。

## 6. 功能请求与路线图信号

今日无 Issues，故无用户直接提出的新功能需求。仅可从 PR 侧读取潜在路线图信号：

- **#3029（OPEN）Tool Search 目录模式**：若合入，将把“工具按需加载”变为默认行为（仅保留核心文件类工具在首请求中）。这可能是下一版本在性能方向上最可能落地的改动，但需评估对依赖完整工具目录的工作流是否构成行为变更。链接：netease-youdao/LobsterAI PR #3029
- **#2765 提及的“模型目录 worker 契约与宿主编排解耦”**：属于架构层面的铺垫，可能为后续运行时演进留出空间；但摘要明确运行时仍为 OpenClaw v2026.8.1，不构成版本升级信号。

## 7. 用户反馈摘要

今日 Issues 更新为 0，**无 Issues 评论可供提炼**，因此无法基于真实用户反馈总结痛点或满意度。可间接观察到的使用信号（来自 PR 作者的实测描述，而非用户反馈）：

- 实际使用场景涵盖 Edge、WPS 与 200% 缩放的高 DPI 显示器（#3028）；
- 内置浏览器为默认显示模式，浏览器工具可用性对日常使用影响较大（#3027）；
- 每次请求携带 68 个工具、约 106k 字符 schema，是当前模型调用的主要开销来源（#3029）。

## 8. 待处理积压

- **#2765 fix(openclaw): preserve accepted work through recovery and compaction**
  2026-09-25 创建，带 `stale` 标签，直至 2026-11-08 才更新并关闭，积压约 6 周。虽已关闭，但反映出 OpenClaw 核心修复的流转周期偏长，建议维护者复盘评审瓶颈。
  链接：netease-youdao/LobsterAI PR #2765

- **#3029 perf(openclaw): defer large tool catalogs behind Tool Search**
  今日新开即处于 OPEN 的唯一 PR，涉及默认请求行为变更，建议优先安排评审，避免其演变为新的积压项。
  链接：netease-youdao/LobsterAI PR #3029

**健康度小结**：零新 Issue、零新版本、评论与点赞数据缺失，说明今日社区侧几乎无输入信号；PR 侧 4 条中 3 条当日闭环，修复响应及时。主要风险在于 OpenClaw 子系统修复曾长期 stale，以及核心性能改动 #3029 仍待评审。

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

# CoPaw 项目动态日报（2026-11-08）

> 数据窗口：过去 24 小时。说明：本次提供的数据中，Issue/PR 链接均标记为 `agentscope-ai/QwenPaw`，与来源项目 CoPaw 的名称不一致；以下链接按数据原样呈现，请维护者核对仓库标识。

## 1. 今日速览

过去 24 小时项目保持零发布状态，Issues 更新 8 条（全部新开/活跃，0 关闭），PR 更新 14 条（全部待合并，0 合并/关闭）。活跃度中等偏高：新问题集中在 `2.2.2.post1` 稳定版与 `2.3.0-beta.2` 桌面端，且当日即有对应修复 PR 提交，贡献者响应链条较短。但待合并 PR 累积至 14 条且今日无任何合并，评审环节已构成瓶颈。整体健康度评估：**问题发现活跃、修复供给充足、合并吞吐偏低**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无已合并或已关闭的 PR，无可确认的功能落地或修复入库。项目向前推进量为零（合并口径），14 条 PR 全部处于待合并/评审中，其中包括：

- #8568 [first-time-contributor, Under Review] `fix(skills)`：Windows Hub Local 运行时默认技能安装失败。
- #7066 [first-time-contributor, Under Review] `fix(drivers)`：OAuth2 授权码模式下轮换 `refresh_token` 的持久化。
- #8434、#7307 [Under Review] `feat(console)`：模型管理页快速添加与配置链路简化。
- #8524 [Under Review] `fix(desktop)`：桌面端通过解码后的本地路径打开 workspace HTML。

## 4. 社区热点

今日无高 👍 或高评论量条目，讨论热度整体偏低。相对评论最多的为：

- **#8521** [bug] 无答复内容 + Ctrl+C 复制需多次按下（评论 3）—— 用户同时提出 UI 回退诉求，情绪偏向对旧版体验的留恋。https://github.com/agentscope-ai/QwenPaw/issues/8521
- **#8475** [Bug] QQ 频道 `enabled` 被静默重置为 `false`（评论 2）—— 涉及消息收发完全中断且无告警日志，属可用性风险。https://github.com/agentscope-ai/QwenPaw/issues/8475
- **#8103** [enhancement] 守护进程静默回退模型时通知用户（评论 2）—— 该诉求已由 PR #8628 承接。https://github.com/agentscope-ai/QwenPaw/issues/8103

背后共性诉求：**可观测性与可预期性**。用户希望在模型回退、配置变更、通道禁用等隐式行为发生时获得明确提示，而非事后排查。

## 5. Bug 与稳定性

按影响面排序：

1. **#8475 QQ 频道静默失活**（`2.2.2.post1`）—— 重启/配置重载后 `enabled` 被置为 `false`，消息收发完全中断且无告警日志。严重度：高。暂无对应 fix PR。
   https://github.com/agentscope-ai/QwenPaw/issues/8475
2. **#8627 Checkpoint 服务在 Git 长路径前缀下失败 + 微信通道卡在 `DEPENDENCY_ENVIRONMENT_AMBIGUOUS`**（Windows 11，`2.3.0-beta.2`）—— 环境依赖判定异常，影响桌面端与微信通道。严重度：高。暂无 fix PR。
   https://github.com/agentscope-ai/QwenPaw/issues/8627
3. **#8521 对话频繁无答复内容；Ctrl+C 复制需多次按压（Chrome/Edge 均复现）；UI 反应迟缓** —— 涉及核心对话路径与交互层。严重度：中高。暂无 fix PR。
   https://github.com/agentscope-ai/QwenPaw/issues/8521
4. **#8629 超大历史图片在每次模型调用时重复发送；拦截重试后仍保留误导性 "Image loaded" 文本**（`2.2.2.post1`）—— 影响时延/成本与状态一致性。严重度：中。暂无 fix PR。
   https://github.com/agentscope-ai/QwenPaw/issues/8629
5. **#8620 搜索超时后 SQLite 错误被改写为 `TimeoutError`**（`memoryspace.py:777-782`）—— 掩盖锁/忙等真实错误。严重度：中。已有 fix PR **#8624**、**#8622**。
   https://github.com/agentscope-ai/QwenPaw/issues/8620
6. **#8619 同一搜索命中重复解析 turn 边界** —— 每次搜索重复付出边界查询开销。严重度：中低。已有 fix PR **#8623**。
   https://github.com/agentscope-ai/QwenPaw/issues/8619

## 6. 功能请求与路线图信号

- **#8103 模型静默回退需通知用户**（enhancement）—— 已有 PR **#8628** 在 chat response 与 fallback 事件中新增四个元数据字段，落地可能性高。
  https://github.com/agentscope-ai/QwenPaw/issues/8103
- **#8621 为 `recall_history` 暴露仅行搜索（row-only search）** —— 已有对应 PR **#8625**（新增 `include_turn=True` 尾参），属小改动、易评审。
  https://github.com/agentscope-ai/QwenPaw/issues/8621
- **#8521 中的 UI 切换按钮诉求**：用户明确偏好旧版 UI 的高效与流畅，希望提供 UI 切换入口。目前无对应 PR，属未承接的用户体验类需求，建议进入路线图讨论。
  https://github.com/agentscope-ai/QwenPaw/issues/8521

此外，PR 侧存在未被今日 Issue 覆盖的功能方向：**#8318**（`/steer` 命令，支持回合执行中纠偏）、**#8626**（Cron 任务级 `thinking_level` 覆盖，降低流水线任务的推理时延与 token 开销）、**#8433**（`edit_file` 保留行尾与编码）。若评审通过，均可作为下一版本的候选内容。

## 7. 用户反馈摘要

- **对话可靠性**：用户无法判断"无答复"是模型问题还是产品问题（#8521），反映错误归因信息不足。
- **交互体验回退**：新版 UI 被认为不如旧版高效流畅，属体验回归类反馈；剪贴板复制失灵为高频基础操作痛点。
- **静默变更不可见**：QQ 通道被静默禁用（#8475）、模型静默回退（#8103）共同指向"用户不知情"这一核心不满。
- **平台覆盖**：反馈横跨 pip 安装版（`2.2.2.post1`）、桌面端（`2.3.0-beta.2`）与 Windows 11 环境，说明测试面需覆盖 Windows 长路径与 AppContainer 场景。
- **正向信号**：多条 Issue 由同一贡献者（txohyeah）同时提交问题与修复 PR，社区自修复意愿良好。

## 8. 待处理积压

- **#7066** `fix(drivers)` OAuth2 轮换 refresh_token 持久化 —— 创建于 2026-08-16，已搁置约 12 周，仍为 Under Review。涉及第三方 MCP（如 XMind）远程服务可用性，建议优先评审。
  https://github.com/agentscope-ai/QwenPaw/pull/7066
- **#7307** `feat(console)` 配置链路直连模型管理（#4036）—— 创建于 2026-08-26，约 11 周未合并，且与 #8434 解决同一底层 Issue #4036，存在方案重叠，建议明确取舍。
  https://github.com/agentscope-ai/QwenPaw/pull/7307
- **#8103** 模型回退通知 —— 创建于 2026-10-04，已逾一个月仍为开放状态，但其修复 PR #8628 已于今日提交，建议同步推进关联。
  https://github.com/agentscope-ai/QwenPaw/issues/8103
- **#8318** `/steer` 回合中纠偏命令 —— 创建于 2026-10-19，中等规模（size/M），近三周无合并进展。
  https://github.com/agentscope-ai/QwenPaw/pull/8318
- **#8433** `edit_file` 行尾与编码修复 —— 创建于 2026-10-26，修复 CRLF 文件整文件 diff 与非 UTF-8 编码破坏问题，影响面明确、风险可控，建议尽快合入。
  https://github.com/agentscope-ai/QwenPaw/pull/8433

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-11-08

## 1. 今日速览

今日项目保持高活跃度：过去 24 小时有 14 条 Issue 更新（新开/活跃 11、关闭 3）、31 条 PR 更新（待合并 24、合并/关闭 7），无新版本发布。工作重心集中在 v0.9.0 里程碑周边的**身份与访问控制**（OIDC 登录、会话所有权、RBAC、relay 仪表盘）与**网关/仪表盘**方向，安全类议题占比显著偏高。关闭的 3 条 Issue 中有 2 条为安全/授权类缺陷（#11126、#12050），说明修复管线正在消化积压的安全问题。同时，一批大型 PR（#11408–#11411 栈）今日关闭，但也暴露出多个 `risk:high`、`size:XL`、`do-not-merge` 状态的长期 PR 仍在排队，审阅吞吐是当前主要瓶颈。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并的 PR 主要集中在授权与权限收敛方向，构成一条依赖链：

- **#11408（CLOSED）** `fix(rpc): guard SOP and session effects with current authority` — 用当前授权状态校验 SOP 与会话副作用。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11408)
- **#11409（CLOSED）** `fix(delegate): refuse owned background result paths` — 拒绝委派工具写入受管后台结果路径。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11409)
- **#11410（CLOSED）** `fix(auth): guard cron writes and contain unscoped execution` — 收紧 cron 写入并限制无作用域执行，对应关闭 Issue #12260（RPC cron/add 将请求误当作 shell 命令的运维批准）。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11410)
- **#11411（OPEN）** `fix(auth): guard private SOP access and configure commits` — 同系列最后一环，依赖 #11410 与 #11266，仍在审阅。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11411)

同时，Issue **#11126**（排队会话操作保留已撤销管理员所有权绕过）与 **#12050**（OIDC 回调令牌页缺少浏览器绑定，可导致登录 CSRF）今日关闭，均为 v0.9.0 标记的高危安全问题。整体看，项目在"权限最小化 + 会话归属可审计"这条安全主线上推进了数个实质步骤，但因 #11411 及多个 XL 级 PR 未合入，v0.9.0 的收口尚未完成。

## 4. 社区热点

- **Issue #5982**（12 条评论，今日更新）`Per-sender RBAC for multi-tenant agent deployments` — 讨论时间跨度从 2026-04 至今，最新状态明确收窄了范围：放弃独立 `[rbac.*]` 子系统和独立 RBAC crate，改为在既有身份体系上构建发送者角色。这是社区最关注的架构议题，反映多租户部署的真实需求。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)
- **Issue #9597**（5 条评论）`make peer-agent turns durable and attributable` — 要求将 peer-agent 回合从无父生命周期的 `process_message` 调用改为可持久、可归属的运行时任务。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9597)
- **Issue #7461**（5 条评论）`Run the test suite on Windows and macOS in CI` — 要求 CI 测试矩阵从仅 `ubuntu-latest` 扩展到 ubuntu/macos/windows。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)

**诉求分析**：热点集中在三类——多租户/身份隔离（#5982）、agent 间通信的可审计性（#9597）、跨平台质量保障（#7461）。三者都指向"从单机玩具走向可运维平台"的诉求，与今日 PR 的安全主线高度一致。PR 侧评论字段未提供，无法评估 PR 讨论热度。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 说明 | 是否已有 fix PR |
|---|---|---|---|
| S2 | **#12289** [OPEN] `disabled agents still run turns through operator chat and restricted RPC` — 标记 `enabled = false` 的 agent 仍可通过 operator WebSocket 聊天与受限 RPC 执行回合（master `641b766030`） | 已禁用代理仍可执行，属权限绕过 | 未见对应 PR |
| S2 | **#12288** [OPEN] `Discard all retains form drafts that a later section Save persists` — "全部丢弃"仅清除全局提示条，未清空分区表单草稿，后续保存会持久化用户已丢弃的值 | 数据一致性问题 | 未见对应 PR |
| S2 | **#12260** [CLOSED] `RPC cron/add 与 cron/patch 将请求视为 shell 命令的运维批准` | 已由 #11410 处理 | 是（#11410，已关闭） |
| p1/高危 | **#11126** [CLOSED] `Queued session operations retain revoked administrator ownership bypass` | 已关闭；#10412 为部分实现，仍为 OPEN | 部分（#10412，OPEN） |
| 安全 | **#12050** [CLOSED] `OIDC callback token page has no browser binding, allowing login CSRF` | 已关闭；#12284 指出已合入源码（`641b766030`）中浏览器绑定修复成立，但存在拒绝日志、重复 cookie 回归与 HTTP 指引等后续项 | 部分（#12284，OPEN） |

**观察**：新开的两条 S2 缺陷（#12289、#12288）均由 JordanTheJet 当日报告，目前无 fix PR，建议优先 triage。#11126 虽已关闭，但依赖的 #10412 仍 OPEN，实际防护不完整。

## 6. 功能请求与路线图信号

结合已有 PR，以下请求最可能进入 v0.9.0 或紧随其后：

- **#11984** [OPEN] Dashboard chat for signed-in accounts without administrator rights — 已有对应 PR **#12244**（`feat(gateway): scoped dashboard chat through the core`），但状态为 `status:blocked`、`needs-author-action`、`do-not-merge`，且依赖 #11964 与 #12232 先合入。**信号强但受阻**。[Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) · [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/12244)
- **#12285** [OPEN] Refuse config writes to credential and sign-in paths on relay-served dashboard connections — 与 **PR #12270**（relay 通过 per-node host 提供 web dashboard，#10315 phase 2）直接相关，属该功能的配套安全约束。[Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/12285) · [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/12270)
- **#12287** [OPEN] Bound peer-relay chains across recipient turns (A → B → A) — 为 `send_message_to_peer` 增加跨回合边界的有限跳数限制，与 #9597 属同一 peer-agent 治理主题。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12287)
- **#5982** Per-sender RBAC — 范围已收窄并被接受（`status:accepted`），但尚无对应实现 PR，短期难进入 v0.9.0。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)
- **#7461** 跨平台 CI — `status:accepted`、`status:in-progress`，涉及 CI Quality Gate 测试矩阵扩展。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)

## 7. 用户反馈摘要

基于可见的 Issue 摘要与评论线索：

- **痛点一：权限颗粒度不足。** #5982 的长期讨论最终收敛为"在现有身份体系上构建发送者角色"，说明用户需要多租户隔离，但也接受渐进式方案而非推倒重来。
- **痛点二：禁用即失效的预期未被满足。** #12289 显示 `enabled = false` 的 agent 仍可运行，用户对"关闭开关"的语义期望是硬性阻断，而非仅界面状态。
- **痛点三：表单状态管理不可靠。** #12288 与 PR #12039、#12100 均围绕配置表单的草稿/基线同步问题（Save all 后刷新、enable 切换后草稿同步），反映仪表盘配置编辑是高频使用且易出错场景。
- **满意信号：** #12284 明确确认 #12157 的浏览器绑定修复在合入源码中"holds"（成立），说明安全修复的质量获得贡献者复核认可；同时诚实指出剩余回归项。

## 8. 待处理积压

以下条目创建时间久、体积大或标记阻断，建议维护者优先分配审阅资源：

- **PR #10412**（2026-08-27 创建，`size:XL`、`risk:high`、`breaking-change`、`priority:p1`）— 抽离原子会话所有权 claim 至共享 `SessionBackend` 契约，是 #11126 实际修复的前提，长期 OPEN。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10412)
- **PR #11411**（2026-10-01 创建，`size:XL`）— 授权加固链条最后一环，依赖 #11410/#11266，尚待合入。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11411)
- **PR #11921**（2026-10-21 创建，标签覆盖几乎全部模块，`size:XL`、`risk:high`）— append-only 会话事件历史，替换分散的转录写入器，影响面极大。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11921)
- **PR #11289**（2026-09-30 创建，`distinguished contributor`、`do-not-merge`）— RPC 授权拒绝原因稳定标识符，长期未合入。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11289)
- **PR #12270**（`size:XL`、`risk:high`、`needs-author-action`）与 **PR #12244**（`status:blocked`、`needs-author-action`）— 均需作者响应，是 relay/受限仪表盘功能的关键路径。[#12270](https://github.com/zeroclaw-labs/zeroclaw/pull/12270) · [#12244](https://github.com/zeroclaw-labs/zeroclaw/pull/12244)
- **Issue #11985**（2026-10-22 创建，仅 2 条评论）— 为 #11984 补充 JWKS 校验、失败写入与退役竞态三类网关测试，属测试缺口，易被忽视。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11985)
- **Issue #12096**（2026-10-29 创建，1 条评论）— IdP 不可达时重新验证应保留仪表盘会话（区分 429/5xx 与拒绝令牌），影响可用性。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12096)

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*