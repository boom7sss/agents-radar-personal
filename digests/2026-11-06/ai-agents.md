# OpenClaw 生态日报 2026-11-06

> Issues: 386 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-06 17:31 UTC

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

# OpenClaw 项目日报 · 2026-11-06

## 1. 今日速览

项目今日处于**高活跃、高压积压**状态：24 小时内 Issues 更新 386 条（新开/活跃 215、关闭 171），PR 更新 500 条（待合并 362、合并/关闭 138）。合并/关闭比约 27.6%，待合并量偏高，审查带宽是当前瓶颈。无新版本发布，stable 线已有多起未修复的 P0/P1 回归（插件捕获阻塞、WAL checkpoint 阻塞、shared-state 完整性准入错误等），稳定版可信度承压。当日新 PR 多由核心维护者（steipete、vincentkoc）提交，聚焦 CI 修复、更新/备份可靠性等基础设施问题。用户讨论集中在**记忆/梦境管线、缓存复用成本、Windows/macOS 服务生命周期**三大主题。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭 138 条 PR，但展示样本以 OPEN PR 为主，可确认的推进如下：

- **[CLOSED] #164923** — 短期记忆提升在某些 workspace 中 0/512 被拒的调查条目已关闭，与 #150635 同源问题相关：[#164923](https://github.com/openclaw/openclaw/issues/164923)
- **[CLOSED] #155457** — Anthropic 流式工具参数 JSON 畸形导致工具调用间歇失败的条目已关闭：[#155457](https://github.com/openclaw/openclaw/issues/155457)
- **[CLOSED] #153706** — 已关闭 ACP 会话错误投影 `agentRuntime` 的行为 Bug 已关闭：[#153706](https://github.com/openclaw/openclaw/issues/153706)
- 待合并队列中有多项基础设施修复在推进：CI 红灯清理 [#194215](https://github.com/openclaw/openclaw/pull/194215)、Bun 规划器测试预算 [#194246](https://github.com/openclaw/openclaw/pull/194246)、备份头部探测超时 [#194239](https://github.com/openclaw/openclaw/pull/194239)、更新修复被永久栅栏化 [#194245](https://github.com/openclaw/openclaw/pull/194245)。

整体推进方向偏“**修基建、清 CI 债**”，核心运行时功能（记忆、缓存、生命周期）尚无合并信号。

## 4. 社区热点

| 条目 | 评论 | 核心诉求 |
|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) P0 大插件捕获阻塞 Gateway 事件循环数分钟 | 76 | 2026.9.6 回归，启动/运行时卡死，急需修复 |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) WAL 自动 checkpoint 从未完成 | 39 | 进程内 reader 长期持有，state DB 持续增长 |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) shared-state 完整性准入错误 | 29 | 2026.10.5 stable 上 ≥28 次失败，子效果无法证明 |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) Windows 启动慢 / 插件卸载不干净 / schtasks 权限 | 29 | 重启与更新高失败率 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) 短期召回 512 上限导致 dreaming 深阶段永不提升 | 25 | 记忆管线核心逻辑缺陷 |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) macOS `gateway stop` 因进程谱系检查失败 | 22 | 服务停止命令不可用 |
| [#177232](https://github.com/openclaw/openclaw/pull/177232) 原生会话研究面板（XL PR） | — | 研究进度/证据可视化的产品级需求 |

**分析**：讨论热度由**稳定性回归**驱动，而非新功能。P0/P1 条目普遍带 `clawsweeper:no-new-fix-pr` 标签，说明**有高质量复现但缺修复 PR**，维护者应优先分配修复资源。

## 5. Bug 与稳定性

### P0 / crash-loop
- **[#160959](https://github.com/openclaw/openclaw/issues/160959)**（OPEN）插件生成捕获使含大依赖树插件阻塞事件循环数分钟，2026.9.6 回归。**无 fix PR**，crash-loop。
- **[#170956](https://github.com/openclaw/openclaw/issues/170956)**（OPEN）Windows 三大可靠性问题合并导致重启/更新频繁失败。**无 fix PR**，ux-release-blocker。
- **[#40001](https://github.com/openclaw/openclaw/issues/40001)**（OPEN，自 2026-03-08 悬置）`write` 工具无 append 模式，隔离 cron 会话覆盖共享文件，**数据丢失**。**无 fix PR**。
- **[#70903](https://github.com/openclaw/openclaw/issues/70903)**（OPEN，stale）provider 冷却 `disabledUntil` 持久化，账单恢复后仍封锁数小时。**无 fix PR**，ux-release-blocker。

### P1
- **[#177656](https://github.com/openclaw/openclaw/issues/177656)**（OPEN）2026.10.5 stable 上 shared-state 完整性准入错误，≥28 次失败。**无 fix PR**。
- **[#155563](https://github.com/openclaw/openclaw/issues/155563)**（OPEN）2026.9.5 回归：agent turn 完成后 service-child relay/anchor 与 MCP 组仍被保留。**无 fix PR**。
- **[#185656](https://github.com/openclaw/openclaw/issues/185656)**（OPEN）大 zstd transcript 归档仍超 Node 字符串上限，media-persistence 迁移失败并阻塞更新；为 #170847 的回归，修复 PR #170853 已合并但未覆盖。**无新 fix PR，live-repro 待补**。
- **[#126950](https://github.com/openclaw/openclaw/issues/126950)**（OPEN）Telegram `tgcb1:` 不透明回调被静默丢弃，非插件调用方消息丢失。**有 linked PR**。

### P2 代表性问题
- **[#182891](https://github.com/openclaw/openclaw/issues/182891)** 提示缓存从不复用，每次请求 `cache read dropped N -> 0`。
- **[#143017](https://github.com/openclaw/openclaw/issues/143017)** 持久会话五种前缀重写路径，实测 21.3M cache-write tokens。
- **[#178373](https://github.com/openclaw/openclaw/issues/178373)** agent loop 无 run 级 turn/token 预算，工具循环检测默认关闭，历史每轮重复计费。
- **[#141474](https://github.com/openclaw/openclaw/issues/141474)** 更新称 #164445 修复已在 main，首次随 `v2026.11.5-beta.1` 发布，**不在 stable v2026.11.1**。

**健康度判断**：今日无新增 fix PR 关联到 P0/P1 稳定版回归，回归债在累积。

## 6. 功能请求与路线图信号

结合在审 PR，以下需求已具备落地形态：

| 需求 | Issue | 相关 PR | 纳入下一版本可能性 |
|---|---|---|---|
| 插件在最终模型请求前介入 | — | [#193550](https://github.com/openclaw/openclaw/pull/193550) `before_model_request` 钩子（XL，security-boundary 风险） | 中，需安全审查 |
| 会话研究面板 | — | [#177232](https://github.com/openclaw/openclaw/pull/177232)（XL，含截图证明） | 中高 |
| 聊天选择器按 agent 收藏模型 | [#180755](https://github.com/openclaw/openclaw/issues/180755) | [#180824](https://github.com/openclaw/openclaw/pull/180824) | 中 |
| Settings 中配置自定义模型端点 | — | [#181011](https://github.com/openclaw/openclaw/pull/181011)（security-sensitive） | 中 |
| 每模型用量日志 / 成本追踪 | [#13219](https://github.com/openclaw/openclaw/issues/13219)（自 2026-02 悬置） | 有 linked PR | 低，缺产品决策 |
| Dream Diary 语言可配置 | [#79223](https://github.com/openclaw/openclaw/issues/79223)（👍2） | 无 | 低，需产品决策 |
| Control UI 快捷键可配置 | [#163739](https://github.com/openclaw/openclaw/issues/163739) | 有 linked PR | 中 |
| `/new` 后浏览并 fork 历史分段 | [#158800](https://github.com/openclaw/openclaw/issues/158800) | 无 | 低 |
| MS Teams SharePoint 站点动态解析 | [#136271](https://github.com/openclaw/openclaw/issues/136271) | 有 linked PR | 中 |

## 7. 用户反馈摘要

- **记忆管线是最大不满来源**：短期召回 512 上限导致 nightly 驱逐后 dreaming 深阶段永不提升（#150635）；同一主机上兄弟 workspace 提升率 50–90% 而某 workspace 为 0/512——用户明确表示“即使把全部阈值覆盖为 0 仍无候选”（#164923），怀疑结构性拒收。
- **成本敏感度上升**：多位用户以生产流量数据量化提示缓存失效（#143017 的 949 次线上抓包、#182891 的 `N -> 0` 日志），说明用户在真实付费并追踪 token 账。
- **跨平台服务管理痛感强**：Windows 用户称重启“pas na veel proberen”（多次尝试后才成功），macOS 用户 `gateway stop` 直接不可用——用户需要的是可用的一键重启/更新。
- **Provider 状态机不信任**：账单已恢复但 `disabledUntil` 仍封锁（#70903），用户对“持久化的失败状态”缺乏清理手段。
- **可观测性缺口**：#127195 指出 16 处调用发射完全相同的错误字符串、无 reason code，用户无法从生产输出定位原因。
- 正面信号有限：样本中 👍 数普遍为 0–2，社区以“报障”为主，缺少明确满意表达。

## 8. 待处理积压

长期未响应、且带产品决策或高影响标签的条目：

- **[#40001](https://github.com/openclaw/openclaw/issues/40001)**（2026-03-08 创建，P0 数据丢失，悬置约 8 个月）— `write` 工具缺 append 模式。**最高优先级提醒**。
- **[#13219](https://github.com/openclaw/openclaw/issues/13219)**（2026-02-10 创建，enhancement）— 每模型用量日志，悬置近 9 个月。
- **[#70903](https://github.com/openclaw/openclaw/issues/70903)**（2026-04-24 创建，P0，ux-release-blocker）— provider 冷却持久化封锁。
- **[#79223](https://github.com/openclaw/openclaw/issues/79223)**（2026-05-08 创建）— Dream Diary 语言配置。
- **[#112638](https://github.com/openclaw/openclaw/issues/112638)**（2026-07-22 创建）— `session.maintenance` enforce 模式不约束存储，thread/channel 条目完全豁免回收，maxEntries/maxDiskBytes 被静默突破。
- **[#123792](https://github.com/openclaw/openclaw/issues/123792)**（2026-08-14 创建，diamond lobster）— CLI 后端下助手回复双渲染。
- **[#163739](https://github.com/openclaw/openclaw/pull/163739)**、**[#188368](https://github.com/openclaw/openclaw/pull/188368)** — 后者带 `merge-risk: compatibility` 与 `security-boundary` 双红标，`dns setup --apply` 截断式写入会覆盖运维现有 Corefile，建议尽快给结论以免作者流失。

**建议维护者动作**：① 为 #40001、#70903 指定 owner；② 对 4 个 P0 回归做一次集中 fix 排期；③ 362 条待合并 PR 需分流，优先处理 `ready for maintainer look` 与 `proof: sufficient` 标签项。

---

## 横向生态对比

# AI 智能体 / 个人 AI 助手开源生态横向对比分析 · 2026-11-06

> 说明：以下所有数字、标题、编号均来自所给各项目日报，未做外部补充。ZeroClaw 报告提供的 Issues 数（21）与其"新开/活跃 9、关闭 12"之和一致；表中其余项目均按日报原口径填写。

---

## 1. 生态全景

今日生态呈现明显的**"成熟项目修债、新兴项目修交互"双层结构**：OpenClaw 与 Hermes Agent 处于大规模积压与回归债清理期，功能推进让位于稳定性；NanoBot、NanoClaw、CoPaw、ZeroClaw 则以当日修复—当日 PR 的高频节奏打磨通道、权限与体验细节。**功能热度已整体退潮**，唯一持续升温的需求是"记忆/技能沉淀"（OpenClaw 的 dreaming、NanoClaw 的技能蒸馏、CoPaw 的记忆索引）与"权限边界收敛"（ZeroClaw 的 principal 所有权、Hermes 的 profile 密钥作用域）。同时，**成本可见性成为付费用户的共同语言**——提示缓存失效、循环任务重复计费在多项目被量化上报。生态仍以"自托管 + 多通道 + 多 Provider"为默认形态，但 Web UI 与命令行能力不对等、安装首体验失败是跨项目的普遍短板。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 · 关闭） | PR（待合并 · 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 215 · 171（共 386 更新） | 362 · 138（共 500） | 无 | 高活跃、高压积压；stable 线 4 个未修 P0 回归，回归债累积 |
| **Hermes Agent** | 43 · 7（共 50） | 38 · 12（共 50） | v0.23.0（大版本，约 1,950 合并 PR / 666 贡献者） | 发版节奏快、协作活跃；P1 持久化缺陷（#140823）无 fix PR |
| **NanoBot** | 3 条新开（1 条当日关闭） | 8 · 34（共 42） | v0.4.1（补丁，含 TLS/沙箱安全修复） | 良好；质量性能打磨为主，跨周积压与 conflict 标签需关注 |
| **NanoClaw** | 4 条更新 | 30 · 5（共 35） | 无 | 高活跃但合并吞吐不足；单一贡献者修复供给堆积，安装体验是最大痛点 |
| **CoPaw** | 12 · 10（共 22） | 18 · 19（共 37） | 无 | 中等偏上；当日报障当日有 PR，但记忆/检索子系统"半可用"、Windows 问题复发 |
| **ZeroClaw** | 9 · 12（共 21） | 33 · 17（共 50） | 无 | 高活跃；v0.9.0 前安全分级收敛良好，XL 级 PR 合并带宽与 P1 修复是风险 |
| **LobsterAI** | 1 条新开 | 7 · 20（共 27，多为 dependabot） | 2026.11.6（可靠性主题） | 良好但人工贡献密度低；依赖债务清理为主 |
| **PicoClaw** | 1 条新开 | 0 · 1（共 2） | 无 | 偏冷；近 8 个月 PR 今日关闭，Web UI 功能盲区无 fix |
| **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** | — | — | — | **过去 24 小时无活动** |

**关键读数**：OpenClaw 单日 PR 更新量（500）超过其余所有活跃项目之和，但其合并/关闭比仅约 27.6%，为全生态最低区间；NanoBot 的合并/关闭比最高（34/42 ≈ 81%），体现小体量项目的高周转。

---

## 3. OpenClaw 在生态中的定位

**规模优势（绝对领先）**：单日 Issues 更新 386、PR 更新 500，是第二梯队（Hermes、ZeroClaw、NanoBot、NanoClaw、CoPaw 各 21–50 条）的 10 倍量级；单条 Issue 最高 76 条评论（#160959），其余项目最高为 Hermes #97681 的 40 条。这反映其用户基数与生产使用深度处于生态顶端——用户在用真实流量做量化反馈（#143017 的 949 次抓包、#182891 的 `cache read dropped N -> 0`）。

**技术路线差异**：
- OpenClaw 走**"运行时平台化"**路线——插件钩子（`before_model_request`）、shared-state 完整性、WAL checkpoint、Backup/Update 栅栏等议题均为内核级基础设施，问题域是"事件循环、状态存储、进程谱系"。
- Hermes 走**"多 profile + 网关 + 桌面端"**路线——问题域是 state.db 持久化、profile 归属、Bot Chat 归档状态机。
- NanoClaw / CoPaw / ZeroClaw 走**"通道 + 工具权限"**路线——WhatsApp/Telegram/Matrix/IM 通道与 principal 所有权作用域。
- 换言之，OpenClaw 承担了生态中"最底层、最重"的那部分复杂度，也因此承受最重的回归债。

**社区规模对比**：Hermes v0.23.0 披露 666 位贡献者、约 1,950 个合并 PR，是唯一给出治理规模数据的项目；OpenClaw 报告未披露贡献者数，但其 362 条待合并 PR 与 `clawsweeper` 标签体系表明已形成自动化 + 人工的维护流水线。二者同属"有治理结构"的一档，其余项目多为单一维护者或小团队驱动。

**风险提示**：OpenClaw 的 stable 线可信度正在承压——#40001（P0 数据丢失，自 2026-03-08 悬置约 8 个月）、#70903（provider 冷却持久化，P0）、#160959（P0 crash-loop）均无 fix PR。规模优势尚未转化为修复吞吐。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **记忆 / 技能沉淀管线** | OpenClaw、NanoClaw、CoPaw | OpenClaw：短期召回 512 上限导致 dreaming 深阶段永不提升（#150635），某 workspace 提升 0/512（#164923）；NanoClaw：把长任务解决路径蒸馏为可复用 skill（#4272，关联 #3089、#2843）；CoPaw：tag 索引永不重建致 `/memory/tags` 恒 503（#8580）。共同点是"生成成功但检索/复用失败" |
| **权限边界与 principal 所有权** | ZeroClaw、Hermes、OpenClaw | ZeroClaw：工具可见性应与 principal 权限一致，而非手工白名单（#11127、#11123、#12046、#12051）；Hermes：多 profile 下 native 插件密钥作用域（#139123，security-boundary 标签）；OpenClaw：`before_model_request` 钩子被标 security-boundary 风险 |
| **提示缓存与 token 成本** | OpenClaw、NanoClaw、Hermes | OpenClaw：#143017（五种前缀重写路径，21.3M cache-write tokens）、#182891、#178373（无 run 级预算，历史每轮重复计费）；NanoClaw：#4273 循环任务每次恢复上轮会话、重复支付整段历史；Hermes：计费可见性 PR #149519 / #149511（cost_status 缺失、路由计费为 unknown/0）。**"成本可观测"已成为跨项目的一等需求** |
| **通道消息投递与状态一致性** | Hermes、ZeroClaw、NanoClaw、CoPaw | Hermes：网关消息不写入 state.db（#140823，P1，影响全部平台）；ZeroClaw：单条卡住 send 使会话静默、Matrix `send_via` 身份混淆（#4192 对应 NanoClaw，ZeroClaw 为 #10926）；NanoClaw：#4192 单通道卡死静默；CoPaw：Matrix 多工作区仅首个激活（#8538） |
| **Web UI / 控制台与 CLI 能力对等** | PicoClaw、NanoBot、OpenClaw、CoPaw | PicoClaw：无 API Key 供应商下 Web UI 无法启动 gateway（#3461）；NanoBot：滚动跟随状态机与用户操作对抗（#6592、#6593）、首次访问语言被固化（#6583）；OpenClaw：#163739 快捷键可配置；CoPaw：#8576 编辑按钮被编译进 bundle 禁用 |
| **可诊断的错误信息** | OpenClaw、CoPaw、NanoClaw | OpenClaw：#127195 显示 16 处调用发射完全相同的错误字符串、无 reason code；CoPaw：`unexpected error`（#8276）、`No package metadata was found`（#8595）；NanoClaw：setup 失败无原因说明（#4204）。用户能感知"坏了"但拿不到可执行动作 |
| **Provider 协议兼容性** | NanoBot、CoPaw、ZeroClaw | NanoBot：Gemini 流式并行 `tool_calls[].index` 缺失被错误合并（#6296）、DeepSeek 图像仅支持 user 角色（#6584）；CoPaw：自定义 OpenAI 兼容 provider 上 `run_code` 空参数（#8603）+ 布尔 `additionalProperties` schema 变形（#8607）；ZeroClaw：严格 provider 长工具会话 422（#12263） |
| **安装 / 首次运行体验** | NanoClaw、PicoClaw、LobsterAI、NanoBot | NanoClaw：#2025 sudo 交互挂起（👍3）、#4204/#4205/#4213/#4287/#4288 系列 setup 修复、#4266 诊断上报泄漏用户输入；LobsterAI：#3024 macOS 权限引导、#3025 登录后 gateway 重复重启；NanoBot：v0.4.1 修沙箱 shell 与 TLS 验证 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈智能体运行时：插件钩子、shared-state、记忆/梦境、Backup/Update、多通道 | 重度自托管用户与插件开发者 | 平台化内核 + 钩子系统 + 状态存储（WAL/SQLite），复杂度最高 |
| **Hermes Agent** | 多 profile Bot 编排、跨网关协作、桌面端 + iMessage/Photon 通道、MCP 目录 | 多 Bot、多机器的个人/家庭部署者 | profile 为隔离单元，state.db + gateway store，migration 路径本身是风险面 |
| **NanoBot** | WebUI 体验与 Provider 协议兼容 | 轻量 Web 用户、多 Provider 使用者 | 以 WebUI 为主界面，重前后端性能（内存拷贝、布局开销） |
| **NanoClaw** | 安装/setup、通道投递健壮性、技能（`/learn`） | 自建 Linux/WSL2 用户 | 安装脚本 + agent-runner + skill 体系 |
| **CoPaw** | IM 通道（飞书/钉钉/Matrix）、记忆与 reranker、控制台 | 企业内网离线部署、IM 为主交互面 | 插件化通道 + Reranker 模型中心 + 离线部署支持有待补强 |
| **ZeroClaw** | S0–S3 安全分级、principal 所有权、Web/relay 面板、多模型 provider | 对权限模型有硬要求的团队 | Rust 单二进制 + principal 模型 + release-gate 标签机制 |
| **LobsterAI** | 桌面伴侣 + 模型兼容层（对接 OpenClaw gateway） | 有道模型订阅用户 | 桌面端 + renderer/main 分层，重心是依赖现代化与登录链路 |
| **PicoClaw** | 轻量边缘设备（Sipeed 背景） | 嵌入式/低配设备用户 | 维护节奏最慢，Web UI 与 CLI 能力尚未对齐 |

**要点**：OpenClaw 是唯一把"插件安全边界"和"状态存储完整性"作为核心产品面的项目；ZeroClaw 是唯一建立了显式 S0–S3 缺陷分级 + `release-gate` 标签的项目，其权限模型设计对同类有借鉴价值；CoPaw 与 Hermes 都押注 IM/桌面通道，但 CoPaw 偏向企业内网，Hermes 偏向个人多 Bot。

---

## 6. 社区热度与成熟度分层

**第一层：高频迭代 + 大规模积压（OpenClaw、Hermes Agent）**
- 特征：单日 50–500 条更新、有版本节点、有标签治理、有 sweeper 自动化。
- 状态：OpenClaw 在"修基建、清 CI 债"（#194215、#194246、#194239、#194245），功能推进停滞；Hermes 处在大版本后密集修整期（v0.23.0 后单日合并率约 24%），会话状态机清理基本完成。
- 判断：**质量巩固阶段**，短期看修复吞吐而非新功能。

**第二层：高频小步迭代（NanoBot、NanoClaw、CoPaw、ZeroClaw）**
- 特征：当日报障当日出 PR（CoPaw 的 #8576→#8608、#5110→#8609、#7436→#8610；NanoBot 的 #6583→#6591），但存在 XL 级 PR 长期挂起（ZeroClaw #9746、#9809、#10407；CoPaw #8234、#8236、#8472）。
- 状态：NanoBot 发布 v0.4.1 补丁（含安全修复），属**质量巩固**；NanoClaw 修复供给堆积在单一贡献者手中、合并吞吐不足，属**迭代但评审承压**；CoPaw 与 ZeroClaw 在 v0.9.0 / 控制台交互上明确推进，属**快速迭代阶段**。

**第三层：低频维护（LobsterAI、PicoClaw）**
- LobsterAI 发布 2026.11.6 可靠性版本，但 27 条 PR 中 20 条为 dependabot，人工贡献仅 2 条——**维护者内部清理型**，依赖队列存在数周级滞留。
- PicoClaw 单日 2 条更新，唯一关闭 PR 跨越近 8 个月——**偏低活跃**，需关注 Web 配置路径盲区。

**第四层：静默（NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw）**
- 过去 24 小时无活动，不宜据此做长期判断，但说明生态尾部项目活跃度差异极大。

---

## 7. 值得关注的趋势信号

1. **"成本可观测"正在成为产品功能而非运维附属**。三个项目出现量化计费投诉（OpenClaw #143017 的 21.3M cache-write tokens、NanoClaw #4273 的重复支付整段历史、Hermes 的 cost_status 缺失）。对开发者的参考：**run 级 token 预算、缓存命中率、每模型用量日志应内建为默认能力**，而非事后补丁。OpenClaw #13219（每模型用量日志，悬置近 9 个月）是反面案例。

2. **记忆系统的失败模式已从"存不下"转为"取不出"**。OpenClaw 的 512 上限、CoPaw 的索引不重建、NanoClaw 的技能蒸馏诉求，共同指向"生成成功但复用/检索失败"。参考价值：**记忆子系统需要端到端的健康检查（生成→索引→检索→提升），而非单点阈值调参**；CoPaw 报告中"对该子系统做一次统筹"的建议适用于全生态。

3. **权限模型正从"配置项"升级为"安全分级"**。ZeroClaw 用 S0–S3 + principal 所有权集中关闭 4 条越权 Issue，Hermes 用 security-boundary 标签跟踪插件密钥作用域——这说明**个人智能体一旦接入多用户通道（Slack/Matrix/群聊），权限就必须是架构级而非开关级**。对开发者的直接建议：工具可见性应由 principal 推导，不要让用户手工列举白名单。

4. **"跨网关 / 跨机器 Bot 协作"是路线图级未决问题**。Hermes #97681（40 评论，已积压约 2 个月，needs-decision）是今日评论量最高的开放议题，诉求是在不牺牲凭据隔离的前提下获得多 Bot 编排。这与 OpenClaw 的插件钩子安全审查、ZeroClaw 的 per-agent 作用域（#9746，release-gate）是同一问题的不同切面——**"隔离前提下的编排"是下一阶段的核心设计张力**。

5. **Web UI 与 CLI 的能力对等是普遍欠账**。PicoClaw（无 key provider 无法启动）、NanoBot（滚动状态机）、CoPaw（bundle 内写死禁用）、OpenClaw（快捷键配置）均出现。参考价值：**图形界面不应是命令行能力的子集**，配置校验逻辑需在两条路径上共用。

6. **安装与首次运行体验是留存的第一道闸门**。NanoClaw 安装失败系列、LobsterAI 权限引导、NanoBot 安全修复同时出现，说明**"看得见的失败原因"比修复速度更影响信任**。CoPaw 报告的建议可直接复用：错误信息必须指向可执行动作。

7. **贡献者流失风险已被多点识别**。OpenClaw #188368（`merge-risk: compatibility` + `security-boundary` 双红标）、Hermes #105568（标 duplicate、挂起近 2 个月）、NanoClaw 单一贡献者 3–17 天滞留、PicoClaw 8 个月 PR——**长期滞留的 PR 是生态健康度的先行指标**，建议维护者把"给结论"本身当作一项排期工作。

---

*本报告仅基于所给 2026-11-06 各项目日报生成；PR 最终合并状态、未披露的版本变更清单与破坏性变更说明未在数据中给出，相关判断已作保留处理。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-06

## 1. 今日速览

项目今日处于**高强度维护状态**：24 小时内 42 条 PR 更新（34 条合并/关闭、8 条待合并），并发布 v0.4.1 补丁版本，迭代节奏明显偏快。工作重心集中在 **WebUI 稳定性与性能**（滚动交互、语言区域、上下文侧栏、文件活动渲染）以及 **Provider 协议兼容性**（DeepSeek、Gemini）。新开 3 条 Issue 均为当日提交的 WebUI 与 Provider 缺陷，其中 1 条当日已关闭，响应及时。整体健康度良好，但待合并队列中存在跨两周以上的长期 PR（#5845、#5826、#6135）及冲突标记，合并延迟值得关注。

## 2. 版本发布

### v0.4.1（由 PR #6570 准备发布，squash 合并）

**更新内容（依据发布说明）：**
- 修复 TLS 证书验证问题。
- 修复沙箱化 shell 执行问题。
- 修复排队输入的 workspace 权限问题。
- 避免空闲维护任务阻塞活跃工作，或错误地拒绝更新。
- 改进重试、重连与恢复行为。
- 在连接中断后保留原生 provider 状态。

**破坏性变更：** 发布说明中未披露破坏性变更。
**迁移注意事项：** 数据未提供明确迁移步骤；涉及 TLS 验证、沙箱执行与权限的行为变化，建议升级后在受限环境中回归验证相关路径。发布说明文本被截断（“preserve native provider state through co...”），完整变更范围未完全呈现。

## 3. 项目进展

今日关闭/合并的 PR 推进了四个方向：

- **WebUI 正确性**：#6591 修复首次访问不跟随浏览器语言、并把英文误存为用户偏好的问题（对应 Issue #6583）；#6590 修复从项目新建会话时上下文图谱侧栏残留空图的问题。
- **WebUI 性能**：#6587 降低多文件活动会话的布局开销，缓解主线程阻塞；#6581 减少文件读取、会话搜索与模型请求中的内存拷贝峰值；#6588 将 500 节点图谱浏览器测试的整页长任务预算从 100ms 放宽至 150ms（CI 稳定性调整）。
- **代码重构**：#6412 统一 WebUI 中代码与 diff 的高亮路径，替换原先分离的 Prism 代码/预览/diff 实现。
- **文档**：#6585 更正 README 中维护者 Yongru Cheng 姓氏拼写。

整体看，本日推进以**质量与性能打磨**为主，未引入大型新能力，与 v0.4.1 的补丁定位一致。

## 4. 社区热点

**说明：** 所提供数据中所有展示的 Issue/PR 评论数均为 0 或 `undefined`，👍 均为 0，因此以下按“当日涉及同一作者/同一主题的集中度”而非真实互动量排序。

- **WebUI 滚动交互集中反馈（同一作者 ovo-agentx，同日 3 条）**
  - Issue #6593：点击“滚动到底部”按钮后按钮闪烁，平滑滚动过程中大部分时间重新出现。HKUDS/nanobot Issue #6593
  - Issue #6592：位于实时尾部时，鼠标中键自动滚动被立即拉回，视口与用户操作对抗（滚轮正常）。HKUDS/nanobot Issue #6592
  - Issue #6583（已关闭）：语言默认英文、不跟随浏览器，且首次访问即固化选择。HKUDS/nanobot Issue #6583

  背后的诉求是 **WebUI 聊天视口的滚动状态管理存在系统性问题**——自动跟随/吸附逻辑与用户主动滚动之间缺乏明确优先级，且按钮可见性依赖同一状态机。同日已有 #6591 关闭 #6583，表明该反馈通道响应有效；滚动类两条尚未见对应 fix PR。

- **Provider 协议兼容性（PR #6296）**：Gemini 的 OpenAI 兼容 API 在流式并行工具调用中不返回 `tool_calls[].index`，`_parse_chunks` 回退到按 chunk 累加，导致并行调用被错误合并。HKUDS/nanobot PR #6296

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 中高 | **DeepSeek 图像工具结果使用了不支持的消息角色**（#6584）：DeepSeek 视觉指南规定图像仅支持置于 `user` 消息，当前实现违反契约，可能导致请求失败。基于 main `3a37269` 复现。 | OPEN | 未见 |
| 中 | **DeepSeek 生成中断被当作成功**（PR #6533）：`insufficient_system_resource` / `aborted` 结束状态被当作正常完成，部分回答会被保存为正式回复。 | OPEN，标记 conflict | 即本 PR |
| 中 | **SVG 被误判为图像块**（PR #6135）：`read_file` 通过扩展名将 SVG 识别为图片，应作为文本读取。 | OPEN，标记 conflict，标注 “AI batch PRs” | 即本 PR |
| 中 | **超大单轮历史被静默截断**（PR #6586）：旧选择器保留部分记录、丢弃其余且无游标可取回缺失的答案/推理/工具活动。 | OPEN | 即本 PR |
| 低 | WebUI 滚动到底部按钮闪烁（#6593） | OPEN | 未见 |
| 低 | 实时尾部中键自动滚动被拉回（#6592） | OPEN | 未见 |
| 已修复 | 首次访问语言不跟随浏览器并被固化（#6583） | CLOSED | #6591（已合并） |

v0.4.1 同时修复了 TLS 证书验证与沙箱 shell 执行两项**安全相关**问题，属本日稳定性收益最大的改动。

## 6. 功能请求与路线图信号

- **Opper 作为内置 Provider（PR #5845，2026-09-21 起 OPEN）**：仿照现有 Eden AI 网关条目新增 `ProviderSpec(name="opper")` 与 `OPPER_API_KEY`。属网关扩展类需求，实现路径清晰，但已挂起约六周，是否纳入下一版本需维护者表态。
- **心跳任务独立模型覆盖（PR #6324，OPEN）**：心跳 cron 每 30 分钟运行一次且通常只做轻量判断，当前却复用主 agent 模型执行与通知评估。该需求具有明确的成本/延迟收益，**具备进入下一版本的合理性**。
- **会话搜索 FTS5 加速（PR #5826，OPEN，标记 conflict）**：为 `search_sessions` 增加按工作区的 FTS5 索引，避免标题不足时加载全部候选会话全文。性能类改进，但存在冲突需先解决。

## 7. 用户反馈摘要

- **真实痛点（WebUI）**：用户对聊天视口的“自动跟随”行为不满，认为其与主动滚动冲突（#6592 明确指出“the viewport fights the user”），并强调 #6593 不是样式问题而是状态机问题——反映用户对交互细节的观察相当精确。
- **本地化诉求**：非英语浏览器用户首次访问即被固定为英文 UI，且该选择被持久化，用户无法区分“默认”与“我的选择”（#6583，已修复）。
- **Provider 使用场景**：用户在实际使用 DeepSeek 视觉能力与 Gemini 并行工具调用，说明多 Provider、多模态已是真实生产路径，协议细节偏差会直接影响可用性。
- **满意度信号**：3 条当日 Issue 中 1 条当日关闭并附 fix PR，反馈闭环速度是正向信号。
- **数据限制**：所提供材料中所有 Issue 评论数为 0，无法提炼评论区中的满意/不满意表述。

## 8. 待处理积压

- **PR #5826**（2026-09-20 起，标记 `conflict`）：FTS5 会话搜索加速，挂起约 47 天。HKUDS/nanobot PR #5826
- **PR #5845**（2026-09-21 起）：新增 Opper 内置 Provider，挂起约 46 天。HKUDS/nanobot PR #5845
- **PR #6135**（2026-10-10 起，标记 `conflict`、`AI batch PRs`）：SVG 文本读取修复，挂起约 27 天。HKUDS/nanobot PR #6135
- **PR #6296**（2026-10-19 起）：Gemini 并行工具调用解析修复，挂起约 18 天，影响流式工具调用正确性。HKUDS/nanobot PR #6296
- **PR #6324**（2026-10-20 起）：心跳模型覆盖，挂起约 17 天。HKUDS/nanobot PR #6324
- **PR #6533**（2026-10-30 起，标记 `conflict`）：DeepSeek 中断上报，挂起 7 天，与今日新开 #6584 同属 DeepSeek 兼容性问题，**建议合并处理**。

**维护者关注建议：** 三条带 `conflict` 标记的 PR（#5826、#6135、#6533）是积压中的主要摩擦点；DeepSeek 相关两条（#6533 / #6584）宜作为一个兼容性批次统一推进。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-11-06

> 数据口径：GitHub 仓库 NousResearch/hermes-agent 过去 24 小时活动。Issue/PR 链接均按原文给出的编号与仓库前缀还原。

---

## 1. 今日速览

项目今日维持高活跃度：Issues 更新 50 条（新开/活跃 43、关闭 7），PR 更新 50 条（待合并 38、合并/关闭 12），并有 1 个新版本发布。v0.23.0 "The Hearth Release" 是本次最强信号——自 v0.22.0 起累计约 10,080 commits、约 1,950 个合并 PR、约 850 个 Issue 关闭、666 位贡献者，属典型的大版本节点。活跃讨论集中在多网关 Bot 协作（#97681，40 条评论）与 MCP/OAuth 集成问题；同时会话持久化、Bot Chat 归档语义等 P1/P2 缺陷仍在收尾。整体健康度：**发版节奏快、协作活跃，但会话状态与网关一致性是当前最集中的风险面**。

---

## 2. 版本发布

### v0.23.0 — The Hearth Release（2026-11-05）

- **链接**：NousResearch/hermes-agent Releases v0.23.0
- **发布规模**（官方 Release 说明）：约 10,080 commits · 约 1,950 个合并 PR · 约 8,720 个文件变更 · 约 725,200 行新增 · 约 201,400 行删除 · 约 850 个 Issue 关闭 · 666 位贡献者。
- **定位**：Release 正文以 "In the old hymns Hermes kept the threshold…" 开篇，主题围绕"门槛/门庭"意象（Hearth = 炉边/门庭）。

**破坏性变更 / 迁移注意事项**：本次提供的数据中，Release 正文仅含上述片段，**未包含**明确的破坏性变更清单、弃用项或迁移步骤。因此本日报不做推断；建议读者以完整 Release Notes 为准。可参考的间接信号是：近 24 小时仍有多个与"迁移"相关的修复在排队（如 PR #149513 `--dry-run` 会实际写入 `HERMES_HOME`、Issue #149450 迁移到 gateway store 时 Group Chats 丢失），升级前值得关注迁移路径。

---

## 3. 项目进展（今日合并/关闭的重要变更）

今日合并/关闭共 12 条 PR、7 条 Issue。可确认的代表性收尾项：

| 编号 | 类型 | 内容 | 链接 |
|---|---|---|---|
| #149498 | Issue（已关闭） | MCP keepalive 单次探测超时即拆掉健康会话并误报服务器失败 | NousResearch/hermes-agent Issue #149498 |
| #149450 | Issue（已关闭） | 迁移到 gateway store 时既有独立 Group Chats 消失 | NousResearch/hermes-agent Issue #149450 |
| #140798 | Issue（已关闭） | Bot Mode 中对活跃 canonical Bot Chat 的有意归档被"洗白"为可恢复 end_reason，重开后复活（#92687 后续） | NousResearch/hermes-agent Issue #140798 |
| #119730 | Issue（已关闭） | canonical Bot Chat 处于 archived=1/hidden=0/end_reason=NULL 时标题死锁，两条路径都不命中 | NousResearch/hermes-agent Issue #119730 |
| #139779 | Issue（已关闭，duplicate） | 归档 canonical Bot Chat 未释放 `Bot Chat` 标题，退休只完成一半 | NousResearch/hermes-agent Issue #139779 |
| #149515 | PR（已关闭） | 插件目录 apify 申请 `tier: verified` | NousResearch/hermes-agent PR #149515 |
| #149509 | PR（已关闭） | 插件目录新增 BeLive AI Hub 模型提供方 | NousResearch/hermes-agent PR #149509 |
| #149507 | PR（已关闭） | 插件目录新增 apple-health-mcp | NousResearch/hermes-agent PR #149507 |

**解读**：今日收尾的重心在**会话生命周期语义**——Bot Chat 归档/标题释放/复活路径的三个 Issue（#140798、#119730、#139779）同日关闭，说明 v0.23.0 前后对 Bot Mode 会话状态机的清理基本完成。插件目录侧今日有多条提交被关闭（含三条 catalog 条目），具体合并状态需以仓库为准。

**推进幅度**：单日层面，PR 合并率约 24%（12/50），Issue 关闭率约 14%（7/50）；结合 v0.23.0 的约 1,950 个合并 PR 量级，项目仍处于大版本后的密集修整期。

---

## 4. 社区热点

1. **#97681 — Let Bots collaborate across gateways**（40 条评论，👍 4，OPEN，P3/needs-decision）
   链接：NousResearch/hermes-agent Issue #97681
   诉求：让"各自在所有者选定机器上运行、拥有独立模型/工具/记忆/凭据"的个人 Bot 能跨机器协作，并进一步跨所有者。这是今日评论量最高的议题，且明确标注 sweeper 风险项（会话状态、消息投递）。**背后诉求**：Hermes 的核心定位是"个人智能体"，社区希望在不牺牲隔离与凭据边界的前提下获得多 Bot 编排能力——这属于路线图级设计讨论，需要决策。

2. **#103521 — Gamma MCP 无法完成 OAuth**（5 条评论，P2/cause-upstream）
   链接：NousResearch/hermes-agent Issue #103521
   诉求：官方批准的 `optional-mcps/gamma/manifest.yaml` 声明支持 native OAuth + DCR，但 Gamma 在动态客户端注册阶段拒绝所有 Hermes loopback 回调，OAuth 无法完成。**背后诉求**：一等公民 MCP 目录的可用性——"官方收录"与实际可用之间存在落差。

3. **#84366 — Slack 需要按频道的严格 @ 提及门控**（5 条评论，P3）
   链接：NousResearch/hermes-agent Issue #84366
   诉求：现有全局 `strict_mention` 与 `require_mention_channels` 无法实现"每一轮都要求新提及"；一旦线程被提及过、由 Bot 创建或存在活跃会话，后续轮次即不再要求提及。**背后诉求**：团队频道中 Bot 过度发言的社交摩擦。

4. **#140823 — 网关消息未写入 state.db**（4 条评论，P1）
   链接：NousResearch/hermes-agent Issue #140823
   详见下节。

5. **#90319 — 将 profile/Bot 创建暴露为 agent 可调用工具**（4 条评论，P2/needs-decision）
   链接：NousResearch/hermes-agent Issue #90319
   诉求：目前没有 agent 可调用的 Bot 生命周期工具，agent 只能退化为驱动 Desktop 新建流程或 `computer_use`。**背后诉求**：让"给我刚才讨论的每件事各建一个 bot"这类自然语言指令真正可执行。

---

## 5. Bug 与稳定性（按严重程度）

### P1
- **#140823 网关消息未持久化到 state.db**（OPEN，4 评论）
  链接：NousResearch/hermes-agent Issue #140823
  自 v0.22.1（2026-09-24）起，所有平台（WeChat、Telegram 等）的网关消息被处理并回复，但新会话与消息**不写入** SQLite `state.db`；`sessions.json` 有更新，桌面端显示 0 条消息。影响面为全部网关平台，属高优先级数据一致性问题。**今日未见对应 fix PR**（在所列 PR 中无匹配项）。

- **#143537 本地会话只回答第一轮**（OPEN，3 评论）
  链接：NousResearch/hermes-agent Issue #143537
  环境：v0.22.4、macOS arm64、单 profile、launchd 管理。`live.source` 与回执的 source 仅差 `message_id`，导致会话永久暂停。**今日未见对应 fix PR**。

### P2
- **#139123 插件密钥作用域绑定**（OPEN，2 评论，标记 sweeper:risk-security-boundary）
  链接：NousResearch/hermes-agent Issue #139123
  多 profile 托管下，native 插件即使在 `register(ctx)` 中正确传播 contextvars，仍可能在后台 worker 中抛 `UnscopedSecretError`。**安全边界相关**，且已有以该编号提交的修复 PR（标题即 `fix(plugins): bind the owning profile's secret scope…`，需确认 PR 状态）。

- **#144517 远程客户端轮次落入默认 profile**（OPEN，2 评论）
  链接：NousResearch/hermes-agent Issue #144517
  Conduit iOS → dashboard WebSocket（Tailscale）场景下，选中命名 profile 后轮次仍偶发运行在 default profile，手机上表现为会话"消失"。

- **#143092 --safe-mode 下 managed worker 丢失 api_mode**（OPEN，2 评论）
  链接：NousResearch/hermes-agent Issue #143092
  `--safe-mode` / `--ignore-user-config` 下，路由到 `anthropic_messages` 的 opencode-go 模型全部 404。

- **#149450 Group Chats 迁移丢失**（已关闭）
  链接：NousResearch/hermes-agent Issue #149450

- **#149498 MCP keepalive 误拆健康会话**（已关闭）
  链接：NousResearch/hermes-agent Issue #149498

- **#127246 桌面端置顶会话标题被替换**（OPEN，3 评论，comp/desktop）
  链接：NousResearch/hermes-agent Issue #127246

- **#149392 photon：图文 iMessage 被回复两次**（OPEN，comp/plugins）
  链接：NousResearch/hermes-agent Issue #149392

### P3
- **#149125 Desktop 屏幕自动抬升把重放的 `tool.start` 当成新事件**（OPEN）
  链接：NousResearch/hermes-agent Issue #149125
- **#149026 TLS 终止路由器剥离 Origin 导致 cookie 写操作 403**（OPEN）
  链接：NousResearch/hermes-agent Issue #149026
- **#137768 已归档会话以"草稿"形态回到侧栏**（OPEN，标记 sweeper:risk-session-state）
  链接：NousResearch/hermes-agent Issue #137768

### 已有修复 PR 的相关 Bug
- **#149323 相关**：PR #149504 `fix(bot-desktop): install dbus-run-session package`（OPEN）— NousResearch/hermes-agent PR #149504
- **#105560 相关**：PR #105568 `fix(computer-use): stop emitting bounds_scale…`（OPEN，标记 duplicate）— NousResearch/hermes-agent PR #105568
- **委派子代理转录串台**：PR #150198 `fix(delegation): keep _delegate_from on reserved subagent rows`（OPEN）— NousResearch/hermes-agent PR #150198
- **计费可见性**：PR #149519（cost_status/cost_source 缺失）、PR #149511（OpenCode Zen 路由计费为 unknown/0）— NousResearch/hermes-agent PR #149519、PR #149511

**稳定性小结**：今日缺陷集中在**会话状态一致性**（state.db 持久化、profile 归属、归档/复活）与**网关交付**两条主线，且多为 P1/P2。会话相关问题有明确的 sweeper 风险标签（risk-session-state、risk-message-delivery），说明项目内部已有分类跟踪。

---

## 6. 功能请求与路线图信号

| 需求 | 编号 | 信号强度 | 判断依据 |
|---|---|---|---|
| 跨网关 / 跨所有者 Bot 协作 | Issue #97681 | **高** | 40 条评论、`needs-decision`、P3，属基础能力建设（"across machines now, and across owners next"） |
| Bot 生命周期作为 agent 可调用工具 | Issue #90319 | 中高 | `needs-decision`，直接补齐 agent 自举能力缺口 |
| Slack 按频道严格提及门控 | Issue #84366 | 中 | 5 评论，诉求明确、实现边界清晰（config 层） |
| Bot Mode 群成员上限可配置并移植到 TS 模块树 | Issue #105755 | 中 | 当前硬编码为 6，属于已有实现的参数化 |
| Webapp 代理 VS Code Marketplace 主题搜索/下载 | PR #149175 | 中 | 已有 PR，与原生 Electron 桌面端功能对齐 |
| 插件目录扩展（elcaro 提示注入防御 + 防篡改飞行记录器、apple-health-mcp、BeLive AI Hub、apify verified） | PR #149503 / #149507 / #149509 / #149515 | 中 | 目录生态持续扩张；但今日 #149507、#149509、#149515 均被关闭 |

**下一版本可能性评估**：Issues #97681 与 #90319 均带 `needs-decision`，更可能停留在设计阶段而非下一版本落地。#105755（硬编码 6 → 可配置）与 #84366（新增每频道配置项）实现成本可控，是较现实的候选。插件目录类 PR 今日多条被关闭，建议提交者关注目录 README 的收录门槛（PR #149515 摘要即为"申请 verified 层级"，说明层级审核存在明确标准）。

---

## 7. 用户反馈摘要

**真实痛点**
- **"消息发出去了，但历史没了"**（#140823）：网关链路处理正常、桌面端却显示 0 条消息，属于信任级问题——用户无法确认 Bot 是否记住了对话。
- **"会话卡在第一轮"**（#143537）：source 字段仅差 `message_id` 就导致永久暂停，用户体验上是"Bot 突然不理人"。
- **"选错 profile，聊天就不见了"**（#144517）：多 profile + 远程客户端组合下的高频困惑。
- **"归档了又回来"**（#137768、#140798、#119730、#139779）：归档/退休语义长期不闭合，今日多个同类 Issue 关闭是正面进展。
- **"Bot 在频道里太吵"**（#84366）：Slack 场景下的社交摩擦，用户需要更细粒度的 @ 门控。

**使用场景画像**
- 单 profile / launchd 托管的 macOS 本地 TUI（#143537）
- 多 profile 部署（#119730 提到 14 个 profile；#139123 的多 profile 托管）
- 远程客户端 + 私有网络（Conduit iOS over Tailscale，#144517）
- 家庭网络自托管（Keenetic KeenDNS HTTPS 隧道，#149026）
- iMessage / Photon 个人消息通道（#149392）

**满意 / 不满意**
- 满意：插件目录与 provider 生态的开放度（社区持续提交新条目）；发版节奏与贡献者规模（666 contributors）。
- 不满意：**会话状态可观测性与持久化**是反复出现的失望点；官方收录的 MCP（Gamma）实际不可用造成的落差（#103521）。

---

## 8. 待处理积压（提醒维护者关注）

按"创建时间久 + 仍未关闭 + 影响面大"排序：

1. **#97681**（创建 2026-08-29，40 评论，OPEN，needs-decision）
   NousResearch/hermes-agent Issue #97681 —— 评论量最高的开放议题，已积压约 2 个月，跨网关协作的架构决策迟迟未落，社区讨论成本在持续累积。
2. **#84366**（创建 2026-08-12，OPEN，P3）
   NousResearch/hermes-agent Issue #84366 —— 约 3 个月未决，属配置层小改动，性价比高。
3. **#90319**（创建 2026-08-19，OPEN，needs-decision）
   NousResearch/hermes-agent Issue #90319 —— 与 agent 自举能力直接相关，长期 `needs-decision`。
4. **#103521**（创建 2026-09-05，OPEN，P2/cause-upstream）
   NousResearch/hermes-agent Issue #103521 —— 官方目录条目不可用，`cause/upstream` 说明需与 Gamma 侧协调，容易长期悬置。
5. **#105568**（PR，创建 2026-09-08，OPEN，标记 duplicate）
   NousResearch/hermes-agent PR #105568 —— 修复 #105560 的 Windows `computer_use` 问题，已挂起近 2 个月且被标 duplicate，建议明确去留以免贡献者流失。
6. **#137768**（创建 2026-10-13，OPEN，risk-session-state）
   NousResearch/hermes-agent Issue #137768 —— 与今日关闭的归档类 Issue 同族，建议确认是否已被同一修复覆盖。
7. **#140823**（P1，创建 2026-10-18，OPEN，至今无 fix PR）
   NousResearch/hermes-agent Issue #140823 —— **优先级最高的未修复缺陷**，影响所有网关平台的持久化，建议提升关注。

---

*说明：本日报全部内容基于所提供的数据摘录。PR 的最终合并状态、v0.23.0 的完整变更清单与破坏性变更说明未在数据中给出，相关判断已作保留处理。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-06

## 1. 今日速览

项目今日活跃度处于低位：过去 24 小时仅 1 条 Issue 更新（新开）和 1 条 PR 更新（关闭），零版本发布。唯一的关闭 PR #1550 是长达近八个月的历史积压清理，属于维护性合并而非新功能推进。新开的 Issue #3461 暴露了无 API Key 供应商场景下 Web UI 无法启动 gateway 的可用性缺口，暂无 fix PR。整体判断：开发节奏平稳但偏冷，社区讨论热度极低，项目健康度维持稳定，但需关注 Web 配置路径的功能盲区。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

- **[PR #1550] fix: merge PR #1442 #1435 #1434 #1430 — 已关闭**
  链接: sipeed/picoclaw PR #1550
  该 PR 汇总合并了四个开源 PR（#1442、#1435、#1434、#1430）中的修复内容。值得注意的是，该 PR 创建于 2026-03-14，直至今日（2026-11-06）才被关闭，跨越近八个月，属于典型的长期待合并积压清理。由于数据中未提供被合并 PR 的具体内容，无法判断其触达的具体模块，但可以确认此举推进了历史修复的落地，减少了待合并 PR 债务。项目今日在"减少积压"维度上有实质推进，但无新增能力交付。

---

## 4. 社区热点

今日无高热度讨论。两条更新均为 0 评论，具体如下：

- **Issue #3461**（OPEN，评论 0，👍 0）— 新开 Bug，暂无互动
  链接: sipeed/picoclaw Issue #3461
- **PR #1550**（CLOSED，评论数缺失，👍 0）— 无讨论热度
  链接: sipeed/picoclaw PR #1550

背后诉求分析：#3461 指向的核心场景是"控制台一切正常、Web UI 无法启动服务"，反映用户对 Web 端配置入口与无 API Key 供应商配置兼容性的关注。该诉求尚无社区跟进讨论。

---

## 5. Bug 与稳定性

**严重程度：中高｜Issue #3461（OPEN，无 fix PR）**
链接: sipeed/picoclaw Issue #3461

- 标题：`[BUG] start gateway not available via web ui (with no-api-key providers)`
- 现象：命令行控制台运行正常，但 Web UI 上无法启动 gateway。
- 复现线索：用户提供了配置片段，`model_list` 中存在 `"provider": ""` 且 `model_name` 为 `kilo-auto` 的条目，指向无 API Key 供应商（如本地或免鉴权端点）的配置形态。
- 影响面：使用无 API Key 供应商的用户将被迫放弃 Web UI 管理路径，只能依赖命令行。
- 状态：今日新开，0 评论，尚无关联 fix PR。

未发现崩溃或回归类问题报告。

---

## 6. 功能请求与路线图信号

今日无明确的功能请求类 Issue。间接信号来自 #3461：用户期望 Web UI 能完整覆盖"启动 gateway"这一核心操作，尤其是对免鉴权/本地供应商配置的兼容。结合已关闭的 PR #1550 属于历史修复合并，无法据此推断下一版本的功能规划。当前数据不足以判断任何新功能是否将被纳入下一版本。

---

## 7. 用户反馈摘要

数据中仅有一条 Issue 且无评论，可提炼的真实反馈有限：

- **痛点**：Web UI 与命令行能力不对等，导致配置了无 API Key 供应商的用户无法通过图形界面启动服务。
- **使用场景**：用户在 `model_list` 中配置了非标准 provider 字段（空 provider + 自定义 model 名），属于自托管/免鉴权模型的典型用法。
- **满意度**：控制台路径工作正常，说明核心运行时无问题；不满集中于 Web UI 入口缺失。
- **其他**：今日无正面或负面评论可引用。

---

## 8. 待处理积压

- **Issue #3461**（[OPEN]，2026-11-06 创建）
  链接: sipeed/picoclaw Issue #3461
  状态：今日新开，尚无回应与 fix PR。虽创建时间较新，但因无任何维护者互动标记，建议纳入关注队列并及时确认是否为 Web 端配置校验逻辑对空 provider 的处理缺陷。

- **PR #1550**（[CLOSED]，2026-03-14 创建 → 2026-11-06 关闭）
  链接: sipeed/picoclaw PR #1550
  状态：已关闭，但生命周期长达近八个月，提示审核队列存在长期滞留现象。建议维护者回顾同期其他陈旧 PR 的积压情况，评估是否仍有同类延迟。

> 数据说明：本日报仅基于所提供源材料生成，PR #1550 中合并的四个子 PR 内容、关闭原因及评论详情未在数据中提供，相关解读以现有字段为限。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-06

## 1. 今日速览

项目今日维持高强度开发节奏：24 小时内 PR 更新 35 条、Issues 更新 4 条，但无新版本发布。PR 积压明显——30 条待合并、仅 5 条合并/关闭，其中大量 PR（多为 #4203、#4204、#4205、#4159、#4192、#4266 等）均出自单一贡献者 glifocat，呈现"修复供给充足、合并吞吐不足"的瓶颈特征。今日新报 2 个 bug：#4273（循环任务重复回放上一轮对话历史，造成重复计费）值得优先关注，#4126 为环境变量导致的测试失败。长期 Issue #2025 关闭（该 Issue 获 3 个 👍，是近期反应最多的一条）。整体健康度：活跃度高，合并评审环节承压。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 5 条，数据中可确认的是：

- **PR #3193 [CLOSED]** `fix(telegram): update Chat SDK for rich messages`（作者 ump45nose，2026-08-06 创建，2026-11-06 关闭）——更新 Telegram 通道的 Chat SDK 以支持富消息。该 PR 从创建到关闭历时约三个月，属长期挂起后落地的通道修复。
  https://github.com/nanocoai/nanoclaw/pull/3193

数据未提供其余 4 条已合并/关闭 PR 的明细，故不做推断。项目整体推进量在今日主要为"修复供给积累"，而非合并落地：待合并队列增至 30 条，其中 setup 安装体验（#4204、#4205、#4213、#4266、#4287、#4288）、agent-runner 线程与上下文处理（#4159、#4289）、通道投递健壮性（#4192）是三大集中方向，均已有就绪补丁等待评审。

## 4. 社区热点

- **Issue #2025 [CLOSED]** `nanoclaw.sh` 在 sudo 需要密码时卡在 "Installing the basics…"（作者 dooha333，👍 3，评论 0）
  https://github.com/nanocoai/nanoclaw/issues/2025
  今日反应最多的条目，反映**首次安装即失败**的高挫败感场景：脚本在需要交互输入密码时静默挂起，用户无从判断。现已关闭，安装路径问题得到收敛。

- **Issue #4126 [OPEN]** 宿主环境设置了 `NANOCLAW_CHANNELS_REMOTE` 时 `slack-auto.test.ts` 失败（作者 marcospovoa，评论 1）
  https://github.com/nanocoai/nanoclaw/issues/4126
  唯一有评论往来的开放 Issue。影响 7be8d7f6（upstream main）与 v2026.10.0，属于"环境变量污染测试"的开发者体验问题——对自建/贡献者群体影响大于终端用户。

- **PR #4192 [OPEN]** `fix(delivery): one stuck channel send no longer silences a session until restart`（作者 glifocat）
  https://github.com/nanocoai/nanoclaw/pull/4192
  虽无可见评论数据，但该 PR 针对"单条卡住的发送会让整个会话静默直到重启"，是可靠性主题中最关键的一条，建议评审优先。

## 5. Bug 与稳定性

按严重程度排列：

1. **【高】Issue #4273 [OPEN]** 循环任务每次触发都会恢复**上一轮触发的会话**，导致每次触发都重新支付整段历史 token 成本（作者 ergut，平台 WSL2，影响 v2026.10.0，main @ 79deb707）。
   https://github.com/nanocoai/nanoclaw/issues/4273
   影响面：所有使用循环/定时任务的用户，直接产生**持续性的成本浪费**。今日暂无对应 fix PR，建议优先响应。

2. **【中】Issue #4126 [OPEN]** `NANOCLAW_CHANNELS_REMOTE` 环境变量导致 `slack-auto.test.ts` 失败（影响 upstream main 与 v2026.10.0，Linux）。
   https://github.com/nanocoai/nanoclaw/issues/4126
   影响面：贡献者与自建 CI 环境，不阻断普通使用。暂无 fix PR。

3. **【已修复提交中】会话静默**：PR #4192 针对"一次挂起的 channel send 会使会话静默直至重启"，支持最多 8 个挂起而不拖慢其他会话。
   https://github.com/nanocoai/nanoclaw/pull/4192

4. **【已修复提交中】线程错位**：PR #4159 修复 `/clear` 后或 agent 回答途中来消息时，线程化聊天回复"落后一个线程"的问题。
   https://github.com/nanocoai/nanoclaw/pull/4159

5. **【已修复提交中】上下文误触发**：PR #4289 修复 runner 命令与其他行同批次到达时，存储的上下文被误启动为一轮对话。
   https://github.com/nanocoai/nanoclaw/pull/4289

6. **【已修复提交中】敏感信息外泄风险**：PR #4266 阻止 setup 诊断上报用户输入的文本（可能含姓名、agent 名、时区、位置等）。
   https://github.com/nanocoai/nanoclaw/pull/4266

7. **【已修复提交中】安装流程系列问题**：PR #4204（Slack 安装失败无原因说明、重跑后 verify 不通过）、#4205（长显示名导致 setup 失败）、#4213（provider-auth 安装后未重启 host，导致首次对话失败）、#4287（verify 不显示 owner 是否已设置）、#4288（webhook 模式 Slack 未被 verify 计入）。
   https://github.com/nanocoai/nanoclaw/pull/4204 · https://github.com/nanocoai/nanoclaw/pull/4205 · https://github.com/nanocoai/nanoclaw/pull/4213 · https://github.com/nanocoai/nanoclaw/pull/4287 · https://github.com/nanocoai/nanoclaw/pull/4288

## 6. 功能请求与路线图信号

- **Issue #4272 [OPEN] [capability]** 记录任务如何被解决，并蒸馏为可复用的方法型 skill（作者 carstenf，关联 #3089 agent-driven skill learning、#2843 `/learn`）。
  https://github.com/nanocoai/nanoclaw/issues/4272
  核心诉求：多日研究等长任务产出良好结果后，"达成路径"会丢失，用户希望将过程沉淀为可复用能力。这是"技能学习"主线上的第三个相关条目（#3089、#2843、#4272），信号明确，**较可能进入后续路线图**。但今日无对应实现 PR，短期落地概率有限。

- 与上述方向呼应的既有供给：PR #4159 与 #4203 带 `PR: Skill` 标签，说明技能体系正在被持续改动，为方法蒸馏能力提供了基础设施。

## 7. 用户反馈摘要

- **安装首体验是最大痛点**：Issue #2025（sudo 密码场景挂起）与多条 setup 修复 PR（#4204、#4205、#4213、#4287、#4288）共同指向同一类问题——安装/配置阶段失败时缺乏可见原因，用户只能面对静默或笼统错误。这是当前最集中的不满来源。
- **成本敏感度高**：Issue #4273 作者明确指出循环任务"每次触发都重新支付整段历史"，说明用户在工作流中真实依赖定时任务，并对 token 开销有清晰感知。
- **隐私意识**：PR #4266 的问题描述显示 setup 诊断曾上报用户输入的姓名、agent 名、时区等，属于用户不易察觉的风险面。
- **使用场景**：WSL2（#4273）、Linux（#4126）为主要自建环境；多日研究型长任务是典型高价值用例（#4272）。
- 数据中未提供满意的正面反馈样本，故不作正面评价归纳。

## 8. 待处理积压

- **PR #4159**（2026-10-20 创建，`area/agent-runner, area/core, area/providers, area/skills`，带 `PR: Fix` 与 `PR: Skill` 双标签）与 **PR #4192**（2026-10-22）、**#4203 / #4204 / #4205**（2026-10-23）、**#4213**（2026-10-23）、**#4266**（2026-11-04）——均为 glifocat 提交、距今 3–17 天仍未合并的修复型 PR。核心团队 PR 长期滞留会加剧贡献者流失风险，建议批量评审或分批合入。
  https://github.com/nanocoai/nanoclaw/pull/4159 · https://github.com/nanocoai/nanoclaw/pull/4192 · https://github.com/nanocoai/nanoclaw/pull/4203 · https://github.com/nanocoai/nanoclaw/pull/4204 · https://github.com/nanocoai/nanoclaw/pull/4205 · https://github.com/nanocoai/nanoclaw/pull/4213 · https://github.com/nanocoai/nanoclaw/pull/4266
- **Issue #4126**（2026-10-18 创建，仅 1 条评论，至今未修）——跨版本存在的可复现测试失败，建议至少给出归因结论。
  https://github.com/nanocoai/nanoclaw/issues/4126
- **Issue #2025** 已关闭，但其 👍 3 说明安装脚本的交互式 sudo 场景值得回归验证，防止再次回归。

> 说明：本次数据中 PR 评论数显示为 `undefined`，故"社区热点"未以评论数排序，改以反应数（👍）与主题关键度判断；已合并/关闭 PR 仅 #3193 有明细，其余 4 条未作推断。

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

# LobsterAI 项目日报 · 2026-11-06

## 1. 今日速览

项目今日处于**高吞吐、以工程稳定性为主线**的状态：新增 1 个版本（2026.11.6），PR 更新 27 条（合并/关闭 20、待合并 7），但绝大多数为依赖升级类自动化 PR，由人工提交的功能/修复 PR 仅 2 条且均已关闭。Issue 侧仅有 1 条新开申诉，社区讨论热度低（无高评论、无高赞条目）。整体健康度良好，但**社区互动与人工代码贡献密度偏低**，活跃度更多来自维护者内部清理与依赖治理，而非外部生态输入。

## 2. 版本发布

**2026.11.6**（标注为 LobsterAI 2026.11.6）

- 版本说明正文以「## 2026.11.2」段落展开，描述该版本聚焦**可靠性**：
  1. 聊天流在回复中途断连后可自动重连（Model streams reconnect automatic）；
  2. 超大上下文可通过可见的压缩进度进行恢复；
  3. 图像处理管线成本更低、请求更少；
  4. 安装包体积显著精简（移除冗余内容）。
- 数据中**未提供**破坏性变更、迁移注意事项或具体数值指标，本报告不作推断。建议用户在升级前自行核对版本说明全文。

## 3. 项目进展

今日合并/关闭的人工 PR：

- **#3025 [CLOSED] fix(auth): avoid double gateway restart after login**（area: main）
  https://github.com/netease-youdao/LobsterAI/pull/3025
  修复订阅账号登录后 OpenClaw gateway **重复重启两次**（间隔约 24 秒，首次约 20 秒）的问题。根因指向 `media-entitlement-changed` 同步触发 `lobsterai-model-compat` 插件的重复重启。该修复直接改善登录体验与启动耗时。

- **#3024 [CLOSED] feat(desktop-companion): add permission guide for Accessibility and Screen Recording**（area: renderer, area: main）
  https://github.com/netease-youdao/LobsterAI/pull/3024
  为桌面伴侣新增 macOS 辅助功能与屏幕录制权限的引导卡片与系统设置走查，并通过 `CGRequest` 注册应用使其出现在权限列表中。降低新用户首次配置权限的失败率。

其余 18 条关闭 PR 均为 dependabot 依赖升级（含 univer 系列、mermaid 10.9.8→12.2.0、katex 0.16.47→0.19.1、vite 5.4.21→8.3.5、electron 组、@nodesecure/js-x-ray 等），另有 1 条标记 `[stale]` 的 eslint-plugin-react-hooks 升级被关闭。**项目向前推进的实质增量集中在登录稳定性与桌面端权限引导两项用户体验修复，其余为依赖债清理。**

## 4. 社区热点

- **#3023 [OPEN] [申诉] LobsterAI 账号被封禁，从未使用过**（作者 yokinocaixuan，1 条评论）
  https://github.com/netease-youdao/LobsterAI/issues/3023
  今日唯一 Issue，也是唯一有评论的条目。用户申诉账号被封禁，并说明自己曾通过**本地第三方插件**配置 LobsterAI 账号凭据以调用有道模型服务，该配置会产生自动化请求（定时签到、模型目录刷新），相关凭据现已移除。
  背后诉求：一是**封禁判定的可解释性与申诉通道**；二是**第三方插件/外部自动化调用与账号风控之间的边界不清**，用户在不知情的情况下触发了风控。建议在文档中明确「自动化请求/第三方客户端接入」的使用规范。

注：本次数据中未提供任何 PR 的评论数与点赞数（均为 undefined/0），因此无法按互动量排序，热点仅能依据 Issue 评论识别。

## 5. Bug 与稳定性

按严重程度：

1. **中高 — 登录后 gateway 重复重启**（#3025，已有 fix PR 且已关闭/合并）
   https://github.com/netease-youdao/LobsterAI/pull/3025
   影响订阅账号登录路径，造成额外约 20 秒以上等待，属体验性回归而非数据损坏。
2. **中 — 回复中途流式断连**（属 2026.11.6 版本修复范围）
   版本说明称已实现模型流自动重连；数据中未给出对应 PR 编号与复现细节。
3. **中 — 超大上下文导致会话异常**（属 2026.11.6 版本修复范围）
   版本说明称已通过可见压缩进度恢复，细节未提供。
4. **低 — macOS 权限未授予导致桌面伴侣不可用**（#3024，已提供引导修复）
   https://github.com/netease-youdao/LobsterAI/pull/3024

今日**无崩溃、数据丢失类问题报告**。

## 6. 功能请求与路线图信号

今日数据中**没有明确的用户功能请求 Issue**。可识别的路线图信号主要来自已合并 PR 与版本说明：

- **桌面伴侣的首次使用体验**（#3024）——权限引导已落地，后续可能延伸至其他系统权限与引导流程。
- **登录与网关生命周期管理**（#3025）—— entitlement 变更引发的重复重启被修复，说明订阅/权益同步链路是当前重点维护区。
- **依赖现代化**：univer 全组 1.0.2→1.3.1（#3019 仍 OPEN，34 项）、vite 5→8、mermaid 10→12、katex 0.16→0.19 已合并，反映编辑器/渲染栈将迎来一轮能力升级。
- **账号风控与第三方接入规范**（#3023）——若申诉成立，可能推动风控白名单或接入文档的补充，但**尚无对应 PR**。

结论：下一版本更可能延续「稳定性 + 依赖升级」路线，而非新增大型功能。

## 7. 用户反馈摘要

- **痛点：账号被封且缺乏事前提示。** 用户自述从未主动使用，仅因第三方插件配置产生自动化请求（定时签到、模型目录刷新）即被封禁，且不清楚触发规则（#3023）。
- **使用场景：** 通过本地第三方插件调用有道模型服务，属于典型的「个人自动化 + 模型 API」组合用法，说明该路径有一定用户基础。
- **满意/不满意：** 数据中未包含正面评价内容，本报告不作补充。用户已主动移除相关凭据，显示其对合规使用的配合意愿，但申诉处理进度未知（Issue 仍 OPEN）。

## 8. 待处理积压

- **#3023 [OPEN] 账号封禁申诉**（2026-11-06 创建，1 条评论，仍未有结论）
  https://github.com/netease-youdao/LobsterAI/issues/3023
  属用户信任相关事项，建议尽快给出明确答复与风控规则说明。
- **#3019 [OPEN] bump the univer group with 34 updates**（2026-11-06）
  https://github.com/netease-youdao/LobsterAI/pull/3019
  影响面大的批量依赖升级，需人工评估兼容性，不宜长期挂起。
- **#3022 / #3021 / #3020 [OPEN] dependabot 升级**（2026-11-06）
  https://github.com/netease-youdao/LobsterAI/pull/3022 ｜ https://github.com/netease-youdao/LobsterAI/pull/3021 ｜ https://github.com/netease-youdao/LobsterAI/pull/3020
  常规维护项，建议按批次合并以控制待合并队列。
- **长期积压提示：** #2461 自 2026-08-10 创建、今日以 `[stale]` 关闭（https://github.com/netease-youdao/LobsterAI/pull/2461），#2852/#2857 自 2026-10-13 起挂起至今日才关闭，说明 dependabot 队列存在**数周级滞留**，建议设置更短的处理周期或分组策略。

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

# CoPaw 项目日报 · 2026-11-06

> 数据来源：agentscope-ai/CoPaw GitHub Issues / Pull Requests（过去 24 小时）。以下条目链接均取自所给材料。注：材料中 Issue 链接显示为 `agentscope-ai/QwenPaw`，涉及两个仓库名，请以实际仓库为准。

---

## 1. 今日速览

- 今日无新版本发布，项目处于以修复和收敛为主的版本交付间歇期。
- Issues 活跃度较高：22 条更新中 12 条新开/活跃、10 条关闭；PR 更新 37 条，其中 18 条待合并、19 条已合并或关闭，合并/关闭比例过半。
- 用户反馈集中在**记忆/检索子系统**（tag 索引、reranker）、**通道插件**（Matrix、IM 展示）与**控制台可用性**三类问题。
- 值得注意：多条今日新报 Bug 在数小时内即有对应修复 PR（如 #8576→#8608、#5110→#8609、#7436→#8610、#8549→#8550），说明维护者响应链路通畅。
- 整体健康度评估：**中等偏上**。修复吞吐正常，但存在跨版本、跨平台（Windows 路径/编码）问题的持续复发迹象，以及若干长期挂起的 XXL 级 PR。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展（合并/关闭的重要 PR 与 Issue）

**已关闭 PR：**

- **#8550** `fix(providers): reject out-of-range model config values on the write path`（首次贡献者）— 修复 #8549。模型配置写入路径此前不校验 `thinking_budget >= 1` 与 `max_input_length >= 1000`，越界值会被落盘并导致重启后 provider 静默消失。该修复直接消除一类“配置后模型消失”的故障。链接：https://github.com/agentscope-ai/CoPaw/pull/8550
- **#8411** `fix(matrix): recover cached sessions and missing device keys` — 修复 #8365。解决 Matrix 密码登录通道每次启动重新登录、且服务端丢失设备密钥后不再重新上传 E2EE 密钥的问题。链接：https://github.com/agentscope-ai/CoPaw/pull/8411
- **#8598** `fix(plugins): refactor dependency check`（size/XXXL）— 插件依赖检查重构，与今日新报的插件安装失败 #8595 可能相关，但材料未明确关联。链接：https://github.com/agentscope-ai/CoPaw/pull/8598
- **#8604** `fix(tests): prevent Windows shell cancellation tests from hanging` — 修复测试挂起，提升 CI 稳定性。链接：https://github.com/agentscope-ai/CoPaw/pull/8604

**已关闭 Issue（代表性）：**

- **#7857** ACP 关闭回退路径可能跳过会话清理并泄漏事件循环（附配套测试修复 #7858 同日关闭）— 属于生命周期正确性问题，已收敛。链接：https://github.com/agentscope-ai/CoPaw/issues/7857
- **#8533** Codex/Qoder 后端下定时任务将非空请求误判为空（`ValueError: Third-party agent requests require text or attachments`）— 第三方后端兼容性修复。链接：https://github.com/agentscope-ai/CoPaw/issues/8533
- **#8516** `/api/console/chat` SSE 缺少 `X-Accel-Buffering: no`，nginx 反代下首事件被缓冲 — 部署环境适配问题已关闭。链接：https://github.com/agentscope-ai/CoPaw/issues/8516

**推进幅度判断：** 今日重心为“堵漏”而非“上新”。四条已关闭 PR 分别覆盖配置校验、通道稳定性、插件依赖与测试基础设施，属于健康度维护型推进；功能性新增全部仍在待合并状态（见第 6 节）。

---

## 4. 社区热点（讨论最活跃）

| 排名 | 条目 | 评论 | 状态 | 诉求分析 |
|---|---|---|---|---|
| 1 | #8580 Memory tag 索引永不重建，`/memory/tags` 返回 503 | 4 | OPEN | 标签已生成但不可读，说明生成与索引之间缺少重建/自愈路径。用户配置了 `auto_memory_generate_tags = true` 却得到不可用的记忆功能，属功能性不完整。链接：https://github.com/agentscope-ai/CoPaw/issues/8580 |
| 2 | #8596 `/clear` 后重开会话仍显示 /clear 消息并隐藏空态问候 | 4 | CLOSED | 状态持久化缺陷，影响日常会话体验；已在 main 上确认仍存在后关闭。链接：https://github.com/agentscope-ai/CoPaw/issues/8596 |
| 3 | #1453 离线安装无法连接离线千问 3/3.5，但可连接 DeepSeek R1 | 4 | CLOSED | 2026-03 创建、今日更新，反映**私有化/离线部署**场景的兼容性长期痛点。链接：https://github.com/agentscope-ai/CoPaw/issues/1453 |
| 4 | #8276 ReMe reranker 允许空 api_key，失败仅暴露为 "unexpected error" | 4 | CLOSED | 配置校验缺失 + 错误信息不可诊断，是“静默失败”类问题。链接：https://github.com/agentscope-ai/CoPaw/issues/8276 |

**背后共性诉求：** 热点问题高度集中于**记忆/检索子系统**（#8580、#8276）与**错误可诊断性**——用户能感知“坏了”，但拿不到可操作的错误信息。这提示该子系统需要一次系统性的健康检查设计，而非逐个补丁。

---

## 5. Bug 与稳定性（按严重程度）

**P0 — 功能不可用 / 阻断性**

- **#8592** Creator 审核轮次永久无法判定：REJECT 恒返回 422 `visual artifact reference references missing id`；附带 provider `source_url` 过期 502 与 `frame_stats` 忽略 `CREATOR_FFMPEG_PATH`。报告者明确称 Defect 1 为硬阻断。**暂无 fix PR**。链接：https://github.com/agentscope-ai/CoPaw/issues/8592
- **#8580** Memory tag 索引不重建，`/memory/tags` 恒 503（见第 4 节）。**暂无 fix PR**。链接：https://github.com/agentscope-ai/CoPaw/issues/8580
- **#8603** 自定义 OpenAI 兼容 provider（kimi / kimi-codingplan，模型 k3.1-pro）上 `run_code` 每次以空参数 `{}` 调用，被报 `'code' is a required property`。注意 #8607 同日提交 `keep boolean additionalProperties in tool schemas`，可能为同源 schema 变形问题的另一面。链接：https://github.com/agentscope-ai/CoPaw/issues/8603

**P1 — 核心流程受损**

- **#8595** 官方插件 `qwenpaw-creator` v2.0.4 经 UI 与 CLI 均安装失败：`No package metadata was found`。与已关闭的 #8598（插件依赖检查重构）可能相关。链接：https://github.com/agentscope-ai/CoPaw/issues/8595
- **#8517** Hub Docker 以非 root 运行时，`working/config.json` 权限拒绝导致 runtime 无法启动。**暂无 fix PR**。链接：https://github.com/agentscope-ai/CoPaw/issues/8517
- **#8538** Matrix 通道插件在多工作区同时启用时仅第一个能激活（共享 10s 启动窗口限制），2.3.0b2 起 Matrix 转为独立通道插件后暴露。**暂无 fix PR**。链接：https://github.com/agentscope-ai/CoPaw/issues/8538
- **#8576** 控制台默认 agent 的编辑按钮被禁用，但 PUT API 实际允许编辑；限制被编译进 React bundle。**已有 fix PR #8608**（同日提交）。链接：https://github.com/agentscope-ai/CoPaw/issues/8576 ｜ https://github.com/agentscope-ai/CoPaw/pull/8608

**P2 — 平台/体验问题**

- **#8585** Windows 下 `recall_history` 失效：`workspace_dir` 被规范化为 `\\?\` 扩展长度路径，破坏 SQLite 只读 URI。报告称**跨版本复现**，属回归或长期未修。**暂无 fix PR**。链接：https://github.com/agentscope-ai/CoPaw/issues/8585

**已修复/已关闭（回归跟踪）**

- **#8549**（→ PR #8550 已合入）、**#8276**、**#8365**（→ PR #8411 已合入）、**#8533**、**#8516**、**#7857**、**#8596**。

**稳定性观察：** Windows 平台问题占比突出（#8585 路径、#8604 测试挂起、#8234 待合并的 GBK/CP936 编码问题），建议将 Windows 纳入常态化 CI 覆盖。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 对应 PR | 纳入下一版本可能性 |
|---|---|---|---|
| IM 通道工具调用紧凑展示（`tool_call_format`） | #7436（2026-08-31，OPEN） | **#8610** `full` / `name_only` / `compact`，同日提交 | **高** — 需求与实现同日对齐，PR 已成型 |
| 引用回复内容作为后续上下文（类 Perplexity） | #5110（2026-06-11，OPEN） | **#8609** `Quote to follow-up`，同日提交 | **高** — 需求悬置近 5 个月后落地 |
| 控制台模型管理支持删除 | — | **#8611** 新增 Delete models 开关 | **中高** — 小改动，暴露已有 API |
| 浏览器标签页标题跟随会话名 | **#8605**（今日新开，中文） | 无 | **中** — 需求清晰、改动小，但暂无实现 |
| Reranker 模型中心（服务测试、多查询精度历史、自动校验） | 关联 #8276 | **#8472**（size/XXL，10-28 起挂起） | **中** — 规模大，需评审容量 |

**判断：** 今日路线图信号非常清晰——**控制台/通道侧的交互精细化**是当前迭代主轴（#8608/#8609/#8610/#8611 四条小 PR 同日出现）。记忆与检索侧虽有 #8472 这样的大 PR，但缺乏同日响应，节奏明显偏慢。

---

## 7. 用户反馈摘要

**真实痛点**

1. **记忆功能“半可用”**：标签生成了却读不到（#8580），reranker 配了空 key 也不报错（#8276）。用户对“配置成功但功能不生效”的容忍度低。
2. **错误信息不可操作**：`unexpected error`（#8276）、`No package metadata was found`（#8595）、`visual artifact reference references missing id`（#8592）——均未指向可执行的修复动作。
3. **离线/私有化部署摩擦**：#1453 显示离线环境下不同模型的连通性差异（千问 3/3.5 不通、DeepSeek R1 通），这类环境是企业用户刚需。
4. **多实例/多工作区场景被低估**：#8538 三个工作区同时启用 Matrix 只有第一个生效；#8517 非 root Docker 部署启动失败。

**使用场景画像**

- 企业内网离线部署（#1453、#8517）
- 控制台多标签页并行会话（#8605）
- IM（飞书、钉钉、Matrix）作为主要交互面（#7436、#8538、#8365）
- 第三方后端混用：Codex / Qoder / 自定义 OpenAI 兼容 provider（#8533、#8603）

**满意度信号**

- 正面：对配置类问题的修复速度较快（#8576 报当日即有 PR #8608）。
- 负面：跨版本、跨平台问题反复出现（#8585 明示“跨版本复现”），削弱用户对升级的信心；#5110 从 6 月挂到 11 月才落地，说明**中低优先级需求等待周期偏长**。

---

## 8. 待处理积压（提醒维护者关注）

**长期挂起的 PR**

- **#8234** `decode GBK/CP936 in read/edit/grep`（2026-10-14，size/XXL，Under Review）— 中文 Windows 下 UTF-8 + `errors="ignore"` 会**静默丢字节**，对中文用户是数据正确性问题。挂起 20+ 天。链接：https://github.com/agentscope-ai/CoPaw/pull/8234
- **#8236** `fix(ollama): size context window from num_ctx`（2026-10-14，size/XL）— 本地 Ollama 模型上下文窗口使用错误的 128k 默认值，本地部署场景直接受害。挂起 20+ 天。链接：https://github.com/agentscope-ai/CoPaw/pull/8236
- **#8472** Reranker 模型中心（2026-10-28，size/XXL）— 与 #8276 同一子系统的功能补强，评审容量是瓶颈。链接：https://github.com/agentscope-ai/CoPaw/pull/8472
- **#8100** `use resolved media capabilities at runtime`（2026-10-03，size/L）— 模型被识别为支持图像却被运行时拒绝，导致图像内容被移除；挂起超一个月。链接：https://github.com/agentscope-ai/CoPaw/pull/8100
- **#8274** `preserve pending user input and timestamps on chat switch`（2026-10-16，size/S）— 小改动但影响正在生成时切换会话的用户输入丢失，长期未合入。链接：https://github.com/agentscope-ai/CoPaw/pull/8274

**长期未关闭的 Issue**

- **#1453** 离线安装模型连通性（创建于 2026-03-13，历时近 8 个月，今日关闭）— 建议回溯补一份离线部署模型兼容性说明或排查清单，避免同类问题再以 Issue 形式重复消耗。链接：https://github.com/agentscope-ai/CoPaw/issues/1453

**建议**

1. 为 size/XXL、XL 级 PR（#8234、#8236、#8472）指定明确评审人，避免长时间停留在 Under Review。
2. 对**记忆/检索子系统**（#8580、#8276、#8472）做一次统筹，避免补丁分散。
3. 将 Windows 路径与编码场景（#8585、#8234）纳入回归测试矩阵。

---

*本日报仅基于所提供的 GitHub 数据生成，未引入外部信息。评论数缺失（显示为 undefined）的 PR 未做活跃度推断。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-11-06

## 1. 今日速览

项目今日活跃度**高**：过去24小时共 21 条 Issue 更新（新开/活跃 9，关闭 12）、50 条 PR 更新（待合并 33，合并/关闭 17），无新版本发布。关注重心明显集中在 **v0.9.0 安全与权限模型**：多个 S0/S1 级身份越权问题在今日集中关闭，显示 release 前的安全收敛正在推进。同时仍有大量 XL 级高风险 PR 长期待合并（#9746、#9809、#10407），合并通道存在压力。整体看，Issue 关闭速度快于新开，积压清理处于健康区间，但高优先级 Bug（#9779、#9572、#10926）仍未见修复上线。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 以**渠道（channel）能力**为主：

- **#8414 [CLOSED]** `fix(channels): enable model commands on WhatsApp Web` — 允许 `whatsapp` / `whatsapp-web` / `whatsapp_web` 渠道使用 `/models`、`/model`、`/config` 运行时命令。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8414)
- **#8389 [CLOSED]** `feat(channels): add passive WhatsApp group context` — 为 `ChannelMessage` 增加被动上下文字段（`passive_context`、`ChannelConversationScope`）。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8389)
- **#10640 [CLOSED]** `feat(channels): add passive Telegram group context` — 新增 opt-in 的 `passive_group_context`，默认 `false`。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10640)
- **#7226 / #7536 [CLOSED]** WhatsApp Web 相关修复：将群内回复视为提及；转发被引用的媒体附件，而非在渠道边界丢弃。[#7226](https://github.com/zeroclaw-labs/zeroclaw/pull/7226) · [#7536](https://github.com/zeroclaw-labs/zeroclaw/pull/7536)

Issue 侧关闭了多条 **v0.9.0 安全类**条目：#11127（session 工具绕过 principal 所有权检查）、#11123（SOP 通配工具选择器缺少 `tools:execute`）、#12051（SOP workshop 越权编写共享 SOP）、#12046（非管理员通配工具保留 principal-unaware 工具），以及运行时/前端问题 #12176、#12155、#11962、#12178、#12248、#12249、#12217。**判断：** 安全面与渠道体验是今日推进主线，方向集中在 release 前的权限边界收口。

## 4. 社区热点

- **#10526 [CLOSED]** RFC：append-only 会话事件历史、确定性状态重放、派生 agent 流（16 条评论，今日讨论量最高）。诉求是解决可变消息持久化与执行事实分散在多处的问题（TurnEvent、日志、工具回执、成本记录等）。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)
- **#8132 [OPEN]** 评估 Rust/WASM Web UI 原型，替代 React/Vite（13 条评论，👍1，已挂 `needs-author-action`）。源自 #7674，目标是移除 Node.js 构建链。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)
- **#10926 [OPEN]** Matrix `send_via` 将 peer 用户身份当作 room 目标（8 条评论，S2）。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)
- **#9779 [OPEN]** `[sop] sops_dir` 文档声称有默认值，但 daemon 两条启动路径均以 `sops_dir.is_some()` 为门，导致 SOP 静默不加载（7 条评论，P1）。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)
- **#9597 [OPEN]** 让 peer-agent 回合成为可持久、可归属的运行时任务（4 条评论，in-progress）。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9597)

**分析：** 讨论热度集中在"架构级可观测性与可重放性"，而非单个功能点，说明核心贡献者正在为长期可维护性铺路；而 #8132 这类构建链替换议题则持续消耗审查精力但迟迟未决。

## 5. Bug 与稳定性

按严重程度排列（当前未在数据中看到对应 fix PR）：

| 级别 | Issue | 问题 | Fix PR |
|---|---|---|---|
| **S0** | [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127)（已关闭） | session-data 工具绕过 principal 所有权边界 | 已关闭 |
| **S0** | [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123)（已关闭） | SOP 接受通配工具选择器而无 `tools:execute` | 已关闭 |
| **S1** | [#12263](https://github.com/zeroclaw-labs/zeroclaw/issues/12263)（开放） | 严格 provider 对长工具会话永久返回 422 `tool_call_id` 缺失，工作流被阻断 | 未见 |
| **P1** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)（开放） | SOP 子系统静默不加载 | 未见 |
| **P1** | [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572)（开放） | 调试 gateway WebSocket 回合可溢出默认 Tokio worker 栈 | 未见 |
| **S2** | [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)（开放） | Matrix `send_via` 目标解析错误 | 未见 |
| **—** | [#12176](https://github.com/zeroclaw-labs/zeroclaw/issues/12176)（已关闭） | 延迟 MCP 工具列表 HashMap 顺序不稳定，击穿 prompt 缓存 | 已关闭 |

**判断：** 安全问题收敛良好，但 #12263（S1，22:00 前新报）与 #9779（P1）是当前最值得优先跟进的开放缺陷。

## 6. 功能请求与路线图信号

- **#12270 [OPEN] PR** 通过 relay 以 per-node host 提供 daemon 的 Web 面板（#10315 phase 2），今日新开，`release:v0.9.0` 标签 → 可能进入 v0.9.0。
- **#12269 [OPEN] PR** 配对设备语音设置与聊天控件（dictation / 语音播放，含英葡使用指南）。
- **#12181 [OPEN] Issue** Web 端受管文档上传（#9488 Phase 2 Web 切片），附件存于 `<data_dir>/attachments`，通过 `FileId` 引用，默认关闭。
- **#9746 [OPEN] PR** 为 session 工具与 `discord_search` 增加 per-agent 所有权作用域，`release-gate` + `release:v0.9.0` → 强信号。
- **#10407 [OPEN] PR** 持久化 session prompt 附件（SQLite，每个会话四个有界 prompt，重启可保留，随会话重置/删除/TTL 清理）。
- **#9809 [OPEN] PR** 单 provider 多模型配置（`[providers.connections]`、`[providers.models]`、`[providers.model_presets]`、`[providers.fallback]`）。

**判断：** 下一版本主线为 **v0.9.0 权限收敛 + Web/relay 可访问性 + 多模型 provider 配置**。其中 #9746 因带 release-gate 标签，优先级最高。

## 7. 用户反馈摘要

- **权限模型是最大痛点**：多条 Issue 由同一批用户围绕"受限用户 + 通配工具选择器"反复提交（#12046、#12051、#11127、#11123），指向统一诉求——工具可见性应与 principal 权限一致，而非依赖用户手工列举白名单。
- **"文档承诺 ≠ 实际行为" 类挫败感明显**：#9779（默认值不被遵守）、#12155（取消 quickstart 却仍写出 `~/.zeroclaw/config.toml`）、#12217（tools-only 文档漏述审批路由也会启动 IMAP 监听）、#12178（`deliver_file` 描述误导模型把 uri 写进回复）。
- **长会话可用性**：#12263 反映长工具调用会话会永久性损坏，属工作流阻断级别。
- **平台集成细节诉求**：#10926 的 Matrix peer/room 身份混淆，影响多用户场景下的消息路由正确性。
- **正向信号**：Unicode 提示中 `release:v0.9.0` 相关安全 Issue 的快速关闭，体现维护者对分级（S0–S3）流程的执行力。

## 8. 待处理积压

以下均为长期开放且今日仍有更新，建议维护者优先排期：

- **[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)**（2026-06-22 起，13 评论，👍1）Rust/WASM Web UI 评估，已挂 `needs-author-action`，决策悬置近 5 个月。
- **[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)**（2026-08-04 起）per-agent 所有权作用域，XL 级、release-gate，长期待合并。
- **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)**（2026-08-07 起）多模型 provider 配置，XL 级、`needs-author-action`。
- **[#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)**（2026-08-27 起）session prompt 附件，XL 级。
- **[#11463](https://github.com/zeroclaw-labs/zeroclaw/pull/11463)**（2026-10-02 起）ZeroCode 本地写文件 diff 预览，已挂 `needs-maintainer-review`。
- **[#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572)**（2026-07-31 起，P1）gateway WebSocket 栈溢出，已 accepted 但仍无修复。
- **[#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597)**（2026-07-31 起）peer-agent 回合持久化，in-progress 状态已持续较久。

**健康度小结：** 关闭速度良好、安全分级执行到位；主要风险是 **XL 级核心 PR 的合并带宽**与 **P1 缺陷的修复缺口**，建议在 v0.9.0 冻结前明确这两条通道的负责人。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*