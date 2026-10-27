# OpenClaw 生态日报 2026-10-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-10 02:27 UTC

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

# OpenClaw 项目动态日报 — 2026-10-09

## 1. 今日速览

OpenClaw 今日维持极高活跃度：24 小时内 Issues 更新 **500 条**（新开/活跃 398，关闭 102），PR 更新 **500 条**（待合并 347，已合并/关闭 153），但**无新版本发布**。当日讨论被稳定性问题主导——SQLite WAL 无界增长（#143524，115 条评论）、子进程僵尸泄漏（#97616）、以及多处"网关需重启才能恢复"的消息投递失败构成核心叙事。同时多个 P0 级"更新永久阻塞"与 Windows 升级耗时问题持续发酵，说明更新器/托管服务交接路径是当前最脆弱的环节。整体看：**贡献管线吞吐旺盛，但 P0 级发布阻断类 Bug 密集，项目健康度处于"高活跃、高压力"状态**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日已合并/关闭 153 条 PR，但排行榜中显示评论数靠前的已关闭条目主要集中在 Issue 侧，且多为问题收敛而非功能推进：

- **[CLOSED] #159912** — Memory 后台回调在插件 reload 后仍持有已退役 registry 的问题被关闭（附带 linked PR），修复了"索引失败但健康检查仍显示绿色"的误导性状态。
- **[CLOSED] #156986** — `openclaw update` 在 `update-candidate-state` 阶段挂起（233MB+ 失控 worker 输出 + 重生循环）的问题关闭，缓解了 2026.9.5 → 2026.9.6 的升级卡死。
- **[CLOSED] #162047** — Windows 2026.9.7 升级在 Doctor 阶段耗时 39 分钟（重复硬链接命名空间校验）的问题关闭。
- **[CLOSED] PR #168064** — `fix(llama-cpp)`：托管 llama.cpp 安装不再用 16.5 GB 推荐模型覆盖用户已选的 2.7 GB 未缓存 GGUF（proof: sufficient，已关闭）。

> 需要说明：上述为今日更新列表中的可见条目，尚不足以量化"项目整体向前推进多少"。已合并 PR 中多数为 CLI/docs/网关边界修复，尚未形成大颗粒功能落地。

---

## 4. 社区热点

| 排名 | 条目 | 状态 | 评论 | 链接 |
|---|---|---|---|---|
| 1 | #143524 SQLite WAL 无界增长至 1.4–2.8 GB，阻塞网关启动（Windows 2026.9.2/9.3） | OPEN · P0 · 发布阻断 | **115** | openclaw/openclaw#143524 |
| 2 | #97616 Hook/Tool 子进程未回收，僵尸进程累积导致运行时劣化 | OPEN · P1 | 18 | openclaw/openclaw#97616 |
| 3 | #161976 WhatsApp DM 持久 registry 交接后回复反复失败 | OPEN · P1 | 18 | openclaw/openclaw#161976 |
| 4 | #157325 卡死的 agent-DB 资源导致所有 agent 回复失败，直至重启网关 | OPEN · P0 | 17 | openclaw/openclaw#157325 |
| 5 | #69208 Umbrella：跨渠道重复 transcript / replay / 上下文装配问题 | OPEN · P2 · maintainer | 16 | openclaw/openclaw#69208 |
| 6 | #43367 多 agent 编排不稳定：并发 add/config 覆盖、会话锁失败、子任务脱离 | OPEN · P2 | 15 | openclaw/openclaw#43367 |
| 7 | #140129 Anthropic 缓存卡在 ~46k，长会话每轮重写全部历史指纹 | OPEN · P2 | 14 | openclaw/openclaw#140129 |

**诉求分析**：热度最高的两条（#143524、#157325）指向同一根因类别——**单点资源故障（DB/WAL）会级联为全局消息投递失败**，且都缺少运行时可恢复路径，只能靠重启。评论区的核心期待是"可自愈 + 可诊断"，而非单点补丁。#69208 作为 umbrella issue 长期开放，说明重复 transcript / 上下文装配属于跨渠道系统性问题，用户希望统一治理而非逐渠道打补丁。

---

## 5. Bug 与稳定性

### P0（发布阻断级）
| 编号 | 问题 | Fix PR | 链接 |
|---|---|---|---|
| #143524 | SQLite WAL 数日内涨至 1.4–2.8 GB，阻塞网关启动（尽管 `wal_autocheckpoint=1000`） | ❌ no-new-fix-pr | openclaw/openclaw#143524 |
| #157325 | 卡死的 agent-DB 资源使**每个** agent 回复失败，直到网关重启 | ❌ 有 source-repro | openclaw/openclaw#157325 |
| #167771 | 更新被 `update-recovery-pending` / 托管交接 lease 数据库身份变更**永久阻塞**，无修复路径 | ❌ 需人工复现 | openclaw/openclaw#167771 |
| #160959 | 采集大型外部插件时网关阻塞数分钟（2026.9.6 回归） | ❌ no-new-fix-pr | openclaw/openclaw#160959 |
| #48920 | Live Docs 领先于发布版本（Heartbeat IsolatedSessions 文档存在但版本无） | ❌ 需产品决策 | openclaw/openclaw#48920 |
| #115642 | 计费冷却期超出故障时长（固定 ~5 小时 `disabledUntil`），订阅鉴权被长时间锁死 | ❌ 需产品决策 | openclaw/openclaw#115642 |
| #158231 | 更新失败：managed-service-preflight（2026.9.5） | ❌ manual-only | openclaw/openclaw#158231 |

### P1
| 编号 | 问题 | Fix PR | 链接 |
|---|---|---|---|
| #97616 | 子进程僵尸累积 → 运行时劣化（Regression） | ❌ no-new-fix-pr | openclaw/openclaw#97616 |
| #161976 | WhatsApp DM registry 交接后回复失败，需安全审查 + live repro | ❌ 需安全审查 | openclaw/openclaw#161976 |
| #119411 | memory 文件 watcher 永不重索引，`memory status` 谎报 `Dirty: no` | ✅ linked-pr-open | openclaw/openclaw#119411 |
| #142336 | 核心 `/dashboard` 覆盖 Telegram Mini App 启动器（2026.9.2+ 回归） | ✅ linked-pr-open | openclaw/openclaw#142336 |
| #118185 | 单次 claude-cli turn 被两个 writer 用不同规则写入 transcript 两次 | ✅ linked-pr-open | openclaw/openclaw#118185 |
| #154891 | 失败并已"回滚"的配置热重载仍使无关插件宕机，直到完全重启 | ❌ no-new-fix-pr | openclaw/openclaw#154891 |
| #101929 | context-overflow-midturn-precheck 估算高出计费用量 2.3–2.6×，误触发截断 | ❌ no-new-fix-pr | openclaw/openclaw#101929 |
| #157647 | Claude CLI 后台化 Bash turn 静默，命中无输出看门狗（2026.9.6） | ❌ no-new-fix-pr | openclaw/openclaw#157647 |

**观察**：今日 P0/P1 中带 `clawsweeper:no-new-fix-pr` 标签者占多数，**尚未形成修复 PR 的比例偏高**，是当前项目健康度的主要风险点。

---

## 6. 功能请求与路线图信号

| 编号 | 需求 | 已有 PR 关联 | 入选可能性判断 |
|---|---|---|---|
| #14785 | 降低 tool schema token 开销（每会话 ~3,500 tokens 固定税） | ❌ no-new-fix-pr | 高价值但需产品决策 |
| #13219 | 按模型的使用计量日志（成本追踪） | ✅ linked-pr-open | **较可能纳入** |
| #16670 | Onboarding Wizard 将 Memory/Embedding 配置设为强制步骤 | ❌ 需产品决策 | 中 |
| #66252 | 按 Agent 的 TTS/STT 配置覆盖（多语言） | ❌ 需产品决策 | 中低（P3） |
| #87441 | 将内存诊断阈值接入配置（rssWarning/Critical 等） | ❌ 需产品决策 | 中（源已可复现） |
| #72015 | active-memory 阻塞回复 + QMD 启动过载的可靠性建议 | ❌ 需产品决策 | 中 |

**判断**：#13219 因已有 linked PR，是近期最可能随版本落地的功能请求；#14785 是明确的 token 成本痛点，但当前 P0 Bug 挤占优先级，短期落地概率低。

---

## 7. 用户反馈摘要

- **"重启才能恢复"是最大不满来源**：#157325、#154891、#159912 均表现为"局部故障 → 全局不可用 → 只有重启能救"，用户反复强调缺少可自愈与可诊断路径。
- **运行时资源泄漏焦虑**：#143524（WAL 无界增长）、#97616（僵尸进程）反映长期运行的 Windows/Node 部署环境下资源管理不佳。
- **升级体验脆弱**：#156986（update 挂起）、#162047（Doctor 耗时 39 分钟）、#167771（更新永久阻塞）构成"想升级但升不了"的复合体验问题。
- **文档与发布脱节**：#48920（Live Docs 领先发布）获 4 个 👍，用户困惑于"照着文档配却报错"。
- **成本与计费摩擦**：#115642（计费冷却期过长）、#101929（token 估算虚高）、#14785（固定 token 税）显示用户对用量精确性与成本控制敏感。
- **正面场景**：多 agent 并发编排（#43367）、跨渠道消息一致（#69208）是用户积极尝试的高价值场景，问题在于稳定性未跟上野心。

---

## 8. 待处理积压

以下条目创建时间早、属重要等级但长期未收敛，建议维护者关注：

| 编号 | 创建日期 | 问题 | 天数 | 链接 |
|---|---|---|---|---|
| #14785 | 2026-02-12 | tool schema token 开销优化 | ~239 天 | openclaw/openclaw#14785 |
| #13219 | 2026-02-10 | 按模型使用计量日志 | ~241 天 | openclaw/openclaw#13219 |
| #16670 | 2026-02-15 | Onboarding 强制 Memory 配置 | ~236 天 | openclaw/openclaw#16670 |
| #43367 | 2026-03-11 | 多 agent 编排不稳定 | ~212 天 | openclaw/openclaw#43367 |
| #48920 | 2026-03-17 | Live Docs 领先发布（P0，仍 OPEN） | ~206 天 | openclaw/openclaw#48920 |
| #48709 | 2026-03-17 | Gemini 2.5 Pro 会话失败（stale） | ~206 天 | openclaw/openclaw#48709 |
| #69208 | 2026-04-20 | Umbrella：跨渠道 transcript/context 重复 | ~172 天 | openclaw/openclaw#69208 |
| #72015 | 2026-04-26 | active-memory / QMD 启动过载 | ~166 天 | openclaw/openclaw#72015 |

**特别提醒**：#48920 是 P0 且为 Regression，却开放超 200 天仍在 `needs-product-decision`；#43367 与 #69208 作为 umbrella 类问题直接影响多 agent 与多渠道稳定性，长期悬置与其 P2 定级和实际影响面存在张力。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

> 数据窗口：2026-10-09（24 小时动态）｜样本：11 个 Claw 系及同类项目
> 说明：本报告仅基于各项目当日动态摘要，未引入外部信息；无活动项目（NullClaw、IronClaw、TinyClaw、ZeptoClaw）在对比中一并列出但无数据可评估。

---

## 1. 生态全景

当日生态呈现"**头部高压、腰部分化、尾部静默**"的三层格局：OpenClaw 以 Issues/PR 各 500 条的日更新量级独占第一梯队，单日体量约等于其余所有项目之和；NanoBot、Hermes Agent、CoPaw、ZeroClaw 构成活跃第二梯队（单项目 30–80 条级更新），处于"输入远大于消化"的高吞吐状态；PicoClaw、NanoClaw、LobsterAI、Moltis 为低活跃或维护收敛型。一个跨项目的高度一致现象是：**当日 11 个项目中仅 NanoClaw 发布了一个版本（v2026.10.0）**，其余全部零发布——生态整体处于"修 Bug 与清积压"而非"发版推进"的节奏。第二层共同压力点高度雷同：**上下文/记忆链路可靠性、成本计量准确性、渠道（Telegram/WhatsApp/Slack）投递稳定性、以及升级/安装路径的脆弱性**。同时，CoPaw 的 root RCE 报告与多个项目的权限边界议题，提示**安全与隔离已成为智能体从演示走向生产部署的关键门槛**。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 核心焦点 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（新/活 398，闭 102） | 500（待 347，合/闭 153） | 无 | P0 稳定性：WAL 无界增长、更新永久阻塞、DB 级联失败 | 高活跃·高压力（吞吐旺盛但发布阻断 Bug 密集） |
| **NanoBot** | 12 | 34 | 无 | 通道修复驱动（Telegram/WhatsApp/DeepSeek），报告-修复闭环快 | 高活跃·修复响应快（跨月 provider PR 积压） |
| **Hermes Agent** | 50（新/活 48，闭 2） | 50（待 37，合/闭 13） | 无 | 上下文压缩重复、跨平台安装、MCP/provider 配置与安全 | 高活跃·消化偏慢（review 为瓶颈） |
| **CoPaw** | 20（新/活 13，闭 7） | 33（待 20，合/闭 13） | 无 | 记忆/上下文系统缺陷、Console 稳定性、**MCP root RCE** | 高活跃·安全风险（修复流动、大功能排队） |
| **ZeroClaw** | 26（新/活 19，闭 7） | 50（待 44，合/闭 6） | 无 | 运行时/网关交付、成本计量、安全边界加固 | 高活跃·先稳后进（44 PR 待合并，评审债务累积） |
| **NanoClaw** | 2 | 13（待 3，合/闭 10） | **v2026.10.0（首个 CalVer 稳定版）** | 基础机制健壮性收敛（解析器/目录句柄/安装脚本） | 发布收口·高健康（核心团队快速闭环，外部 PR 审阅慢） |
| **PicoClaw** | 4 | 6（含 5 条 Dependabot） | 无 | 依赖清理、stale 积压；**Android DNS 阻断（#3420）** | 中等偏低·积压清理（唯一功能性 PR 挂起） |
| **LobsterAI** | 0 | 6（待 2，合/闭 4） | 无 | Windows 引擎启动链路修复 + Atlas Cloud 供应商接入 | 健康（修复收敛 + 稳步扩功能，评论数据缺失） |
| **Moltis** | 1 | 0 | 无 | 仅 A2Agent 生态集成验证请求（#1296） | 低活跃·零推进 |
| **NullClaw / IronClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | — | 无活动 |

**关键对比结论**
- **量级断层**：OpenClaw 日更新量（1000 条）是第二梯队（50 条级）的约 20 倍，是第三梯队（<13 条）的近百倍。
- **"待合并 / 已处理"比**：Hermes Agent 37:13、ZeroClaw 44:6 显示评审吞吐显著滞后；NanoClaw 3:10 反向健康，说明其当日以清理存量为主。
- **零发布普遍性**：10/11 项目当日无版本，唯一发版的 NanoClaw 恰恰是活跃度最低的之一——反映"低活跃项目反而能收口发版，高活跃项目被 Bug 流牵制"。

---

## 3. OpenClaw 在生态中的定位

**规模绝对领先**。OpenClaw 单日 Issues/PR 各 500 条，远超所有样本项目总和；其 P0 讨论帖（#143524，115 评论）的单一 Issue 互动量即超过多数项目当日全部 Issues 之和。在样本中，OpenClaw 是唯一出现"发布阻断级 Bug 集群"的项目，也说明其**用户基数与部署复杂度最高**。

**技术路线差异**：
- OpenClaw 覆盖最宽的产品面——多 agent 编排（#43367）、跨渠道 transcript 统一（#69208）、Live Docs、计费/订阅鉴权、TTS/STT（#66252）、托管 llama.cpp 安装（PR #168064），**是唯一同时触及运行时、多租户计费与多模态配置层**的项目，架构野心显著大于同类。
- 对比之下，NanoBot/ZeroClaw 更聚焦 provider 抽象与网关交付，Moltis/NanoClaw 聚焦单一集成层，LobsterAI 聚焦桌面伴侣体验。**OpenClaw 的复杂度是其 Bug 密度的直接来源**。

**社区规模**：OpenClaw 的 Issue 评论数普遍在 14–115 区间，而 NanoBot 热门帖仅 3–4 条评论、NanoClaw 仅 1–2 条、PicoClaw 最高 4 条——**OpenClaw 的社区讨论深度是第二梯队的数量级倍数**。但规模优势伴随更高维护压力：其 P0/P1 中带 `clawsweeper:no-new-fix-pr` 标签者占多数，且 #48920（P0 Regression）开放超 200 天仍在 `needs-product-decision`，**大社区未必等于快闭环**。

**定位判断**：OpenClaw 是生态的"参照系与压力测试场"——它的 P0 问题（DB/WAL 级联失败、更新阻塞）往往预示同类项目后续会撞上的规模化难题。

---

## 4. 共同关注的技术方向

以下需求/痛点跨多个项目重复出现，具行业共性：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文/记忆链路可靠性** | OpenClaw（#140129 缓存卡 46k、#69208 transcript 重复）、Hermes（#99943 窗口被钳制、#128293 压缩后重复行）、CoPaw（#8134 记录消失、#8040 reindex 静默丢批、#8148 压缩不触发）、NanoBot（#6029 静默压缩）、ZeroClaw（#11420 时序覆盖） | 压缩/记忆机制**静默失效或重复**，用户要求可视化与可解释；压缩策略需集中重构而非零散修补 |
| **成本计量准确性** | OpenClaw（#115642 计费冷却、#101929 token 估算虚高 2.3–2.6×、#14785 固定 token 税）、ZeroClaw（#11204 支出显示 $0、#11613 隐藏推理 token 少计） | **成本数据不可信**直接阻碍生产采用，需精确的按模型/按会话计量 |
| **渠道投递稳定性** | OpenClaw（#161976 WhatsApp、#157325 全局投递失败）、NanoBot（#6120 WhatsApp、#6123 Telegram、#6084 Slack、#6006 QQ）、ZeroClaw（#11608/#11615 Telegram 挂死与 429）、NanoClaw（#3569 Telegram 奇数标记符永久失败）、CoPaw（#8150 飞书图文静默丢弃） | 消息**静默丢失/失败**是最伤信任的模式；缺乏退避、超时与告警机制 |
| **升级/安装路径脆弱** | OpenClaw（#167771 更新永久阻塞、#162047 Doctor 39 分钟）、Hermes（#132378 7 小时 180GiB 写入、#126194/#128831 Python3.14/Termux）、LobsterAI（Windows 防火墙回环阻塞 #2817、配置锁残留 #2819）、PicoClaw（#3420 Android DNS） | 跨平台（尤其 **Windows**）升级/安装屡屡失败，需要可诊断与可自愈 |
| **多 provider / MCP 配置与安全边界** | Hermes（#135594 MCP 同名 server 越权、PR #74809 env_file 隔离）、NanoBot（#5204 声明请求 API、#5896 Responses 线格式）、CoPaw（#8153 MCP root RCE）、ZeroClaw（A2A crate RFC #11254 安全加固堆叠） | provider 能力需**显式声明**而非猜测；MCP 权限隔离是安全刚需 |
| **多实例 / 配置隔离** | NanoBot（#1739 Windows NANOBOT_HOME 多实例冲突）、NanoClaw、LobsterAI（配置锁） | 自托管/多实例部署场景下的配置隔离机制缺口 |

**共性根因**：这些方向共同指向"**可自愈 + 可诊断 + 静默失败不可接受**"三大诉求——用户已从"功能能否用"转向"失败能否被感知与恢复"。

---

## 5. 差异化定位分析

| 维度 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 最宽：多 agent 编排、多渠道路由、Live Docs、计费/订阅、TTS/STT、托管模型安装 | 规模化的多租户/生产部署用户 | 运行时 + 计费 + 网关 + 多渠道 + 多模态的全栈架构，复杂度最高 |
| **NanoBot** | provider 抽象 + 通道修复 | 多 provider 开发者 | provider 声明式 API（#5204），provider 生态扩展（Vertex AI/Z.AI/CoreWeave） |
| **Hermes Agent** | 群组/跨网关协作 + 更新机制 | 团队协作与多 provider 用户 | 跨网关文本生命周期、远端 Bot 文件共享、MCP per-server 隔离 |
| **CoPaw** | Console 前端 + 记忆插件 + 本地模型 | 中文场景/本地部署用户 | 技能池、OneCLI/插件体系、本地模型清单（QwenPaw 系列），国际化 i18n 主线 |
| **ZeroClaw** | 运行时与网关分离交付 + 成本账本 + 权限加固 | 生产环境运维型用户 | v0.8.6/v0.9.0 分阶段交付、A2A 协议 crate、RAG、search_routes 路由 |
| **NanoClaw** | 基础机制健壮性 + 单通道深度集成 | 轻量自托管用户 | CalVer 发布、锁定 gateway 1.42.0、锚定目录句柄等底层收敛 |
| **PicoClaw** | 嵌入式/移动端 TUI | 移动端/树莓派类用户 | Go 实现、纯 Go 模式、依赖重（line-bot/mautrix/anthropic/mcp SDK） |
| **LobsterAI** | 桌面伴侣（划词翻译/朗读） | 桌面终端用户（Windows 痛点多） | 桌面端 + 引擎分离，Windows 防火墙/回环问题突出 |
| **Moltis** | provider 接入层 | 第三方网关集成方 | `moltis-providers` 分层 + onboarding，吸引 A2Agent 主动集成 |

**定位坐标**：若以"广度 vs 深度"为轴，OpenClaw 居广度极端，Moltis/NanoClaw 居深度（单点集成）极端；NanoBot/ZeroClaw/Hermes 居中且各有一条明确主线（provider / 交付 / 协作）。**LobsterAI 与 PicoClaw 代表"终端形态差异化"路线**（桌面 / 移动），避开与通用网关的正面竞争。

---

## 6. 社区热度与成熟度

**分层评估**

- **第一层｜超大规模·高压迭代（快速迭代 + 高压力并存）**
  OpenClaw。特征：日更新量级断层领先，P0 发布阻断 Bug 密集，尚无大颗粒功能落地，健康度"高活跃、高压力"。处于"规模已至、稳定性未跟上"阶段。

- **第二层｜高活跃·快速迭代（输入 >> 消化）**
  Hermes Agent、CoPaw、ZeroClaw、NanoBot。特征：日更新 12–50 条，review/合并吞吐为瓶颈（37:13、20:13、44:6），多条大型功能 PR 排队（CoPaw #7565/#7613、ZeroClaw XL 安全堆叠）。处于**功能扩张与稳定性修复并行的高强度阶段**。

- **第三层｜质量巩固 / 维护收敛（低活跃·高闭环）**
  NanoClaw、LobsterAI。特征：日更新少（≤13 条），但以修复收敛为主、当日闭环率高（NanoClaw 10/13 合并、LobsterAI 4/6 合并），NanoClaw 更完成首个 CalVer 稳定版发布。处于**发布收口 + 核心缺陷清理的高健康度阶段**。

- **第四层｜低活跃 / 静默**
  PicoClaw（stale 积压清理）、Moltis（零推进）、NullClaw/IronClaw/TinyClaw/ZeptoClaw（无活动）。

**成熟度信号**：成熟度与活跃度**非正相关**——NanoClaw/LobsterAI（低活跃）展现出更高的闭环健康度，而 OpenClaw/Hermes/ZeroClaw（高活跃）正被评审债务与 Bug 流牵制。**"发版能力"与"活跃度"在当期呈现倒挂**：唯一发版的 NanoClaw 恰是活跃度最低者之一。

---

## 7. 值得关注的趋势信号

**信号 1｜可靠性取代功能成为竞争焦点**
跨项目最集中的痛点是"静默失败"（NanoClaw #3569、CoPaw #8040/#8150、ZeroClaw #11608、Hermes #99943）。用户容忍度已从"功能缺失"转向"失败必须被感知"。→ **对开发者的参考**：在设计中前置可观测性（失败告警、状态可视化）比增加功能更能保留用户。

**信号 2｜上下文/记忆管理是系统性技术债，需集中重构**
OpenClaw、Hermes、CoPaw、NanoBot、ZeroClaw 五项目同时出现压缩/记忆缺陷，且 CoPaw #8040 明确为历史 Issue **复发**、Hermes #128293 为**第三次同类报告**。→ 分散修补无效，**该子系统值得一次架构级重构**，是当前最高价值的工程投入方向。

**信号 3｜成本计量从"锦上添花"变为"生产准入门槛"**
ZeroClaw 用户跑完 2.1M token 仍显示 $0、OpenClaw token 估算虚高 2.3–2.6×——**成本不可信会直接阻断生产采用决策**。→ 精确的按模型/按会话计量与隐藏推理 token 摄取，将成为同类项目的必备能力。

**信号 4｜安全与权限隔离成为智能体的"生死线"**
CoPaw #8153（MCP Driver → root RCE + 挖矿木马）、Hermes #135594（MCP 越权获取写工具）、ZeroClaw 权限加固堆叠——MCP/provider 的**权限边界**问题集中爆发。→ 智能体从演示走向生产，**配置接口的权限模型与隔离机制**是第一优先级。

**信号 5｜Windows 是部署兼容性的最大缺口**
LobsterAI（防火墙回环、配置锁）、NanoBot（NANOBOT_HOME 被忽略）、Hermes（Python3.14/Termux）、PicoClaw（Android DNS）、CoPaw（路径长度/WebView/crypto API）——**Windows 与边缘环境的路径长度、网络栈、crypto API 可用性构成共性风险簇**。→ 跨平台支持不宜事后补丁，需在设计期纳入。

**信号 6｜生态开始出现"协议/集成分工"雏形**
Moltis 被第三方网关 A2Agent 主动寻求集成验证、ZeroClaw 提议 A2A 协议 crate、NanoBot 扩展 Vertex AI/Z.AI/CoreWeave——**provider 抽象层正成为生态协作接口**。→ 谁先定义清晰的自定义 provider 接入规范与文档，谁更可能成为第三方集成的默认落点。

**信号 7｜评审/合并吞吐成为头部项目的隐性瓶颈**
Hermes（37 待合并）、ZeroClaw（44 待合并，含 XL + risk:high 依赖堆叠）、OpenClaw（347 待合并）均显示**输入远超消化**。NanoClaw 外部贡献者 PR 挂起 4 周无评论，更暴露外部审阅通道延迟。→ **评审带宽而非开发能力，正成为决定项目推进速度的实际约束**，长期将抑制社区参与意愿。

---

**一句话总结**：2026-10-09 的生态正处于"**规模扩张撞上稳定性天花板**"的临界点——头部项目的复杂度已跑在可靠性之前，而跨项目共识的下一步不是更多功能，而是**上下文可解释、成本可信任、失败可感知、权限可隔离**这四项基础能力。对开发者的实操建议：优先投入可观测性与权限隔离，把上下文/记忆与成本计量当作架构级议题而非补丁对象。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-09

## 1. 今日速览

过去 24 小时项目保持高强度活跃：34 条 PR 更新、12 条 Issue 更新，无新版本发布。PR 侧呈现"修复驱动"特征，超过半数为带 `fix`/`bug` 标签的通道与配置修复，并普遍附带测试。Issue 侧当日新开多条通道级 Bug（Telegram、WhatsApp、DeepSeek、QQ），其中多条已同步提交对应 fix PR，修复响应速度较快。同时存在一批跨月未合并的 provider/重构类 PR（如 #3207、#5955、#5943），积压信号值得关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日无新增 release，进展主要体现在 PR 合并/关闭与修复落地：

- **#5204 [CLOSED] feat(models): declare request APIs for providers and presets**（2026-08-01 创建，2026-10-09 关闭，priority: p1）
  解决"模型名无法表达端点所支持的请求 API"问题，避免 Responses-only 模型被错误发往 Chat Completions，并允许自定义连接声明接受 Anthropic Messages。这是 provider 抽象层的一次关键收口。
  https://github.com/HKUDS/nanobot/pull/5204

- **#6104 [CLOSED] fix(providers): strip hosted web_search tools from Chat Completions requests**（Fixes #6085）
  修复 DeepSeek web search 开关在 Chat Completions 路径下注入 `{"type": "web_search"}` 导致 LLM 调用不可用的问题。该 PR 已关闭，对应 Issue #6085 同日关闭。
  https://github.com/HKUDS/nanobot/pull/6104

- **#5896 [CLOSED] feat(providers): support OpenAI Responses API for opencode_go**（good first issue, 2026-09-24 → 2026-10-09）
  opencode_go 的 muse-spark contributor 系列需要 OpenAI Responses 线格式，此前 gateway 的 /chat/completions 路由返回 500。该 Issue 已关闭，属社区贡献者参与的 provider 兼容性推进。
  https://github.com/HKUDS/nanobot/issues/5896

- **#5898 [CLOSED] gpt-6 系列经 GitHub Copilot 不可用** 与 **#6006 [CLOSED] QQ 引用消息不达 agent** 同日关闭。
  https://github.com/HKUDS/nanobot/issues/5898 ｜ https://github.com/HKUDS/nanobot/issues/6006

新增待合并 PR 中，多个修复围绕同日新开 Issue 提交（#6127↔#6120、#6124↔#6123、#6125↔#6121），显示"报告—修复"闭环正在快速形成。

---

## 4. 社区热点

按评论数与当日集中度排序：

- **#5898 [CLOSED] [bug] gpt-6 model series through Github Copilot** — 4 条评论，当日 Issue 中讨论最多。涉及 v0.3.5 下 OpenAI 6 系列经 Copilot 报 provider request failed，属核心可用性问题。
  https://github.com/HKUDS/nanobot/issues/5898

- **#6029 [CLOSED] [bug, priority: p2] 允许静默上下文压缩、抑制后台 idle/dream 周期的通道广播** — 3 条评论。诉求是后台维护流程不应向用户推送状态通知。
  https://github.com/HKUDS/nanobot/issues/6029

- **#6084 [OPEN] Slack 压缩通知作为两条永久消息发送** — 3 条评论，且已产生对应 PR #6110（in-place 替换方案）。
  https://github.com/HKUDS/nanobot/issues/6084 ｜ https://github.com/HKUDS/nanobot/pull/6110

- **#1739 [OPEN] Windows 下 NANOBOT_HOME 多实例冲突/配置被忽略** — 长期 Issue（2026-03-08 创建），更新至 2026-10-10，既有 PR #6126 尝试修复，又有配套的实例目录选择器 PR #6128。
  https://github.com/HKUDS/nanobot/issues/1739

**背后诉求**：多实例与配置隔离（Windows/NANOBOT_HOME）、后台任务的通知噪音控制是今日社区最集中的两条主线。

---

## 5. Bug 与稳定性

按严重程度排列（含 fix PR 状态）：

**高影响（阻断核心可用性）**
- **#6085 [CLOSED] DeepSeek websearch 开启后 LLM 调用不可用** — 所有通道每条消息均返回 JSON 反序列化错误（`unknown variant web_search`）。已有 fix PR **#6104（CLOSED）**，Issue 同步关闭。
  https://github.com/HKUDS/nanobot/issues/6085
- **#5898 [CLOSED] gpt-6 经 GitHub Copilot 不可用** — 已关闭（无对应 PR 在展示列表中）。
  https://github.com/HKUDS/nanobot/issues/5898

**中影响（通道功能异常）**
- **#6120 [OPEN] WhatsApp replay filter 永不触发** — neonize Timestamp 为毫秒，与 time.time() 秒比较，旧消息过滤失效。已有 fix PR **#6127（OPEN）**。
  https://github.com/HKUDS/nanobot/issues/6120 ｜ https://github.com/HKUDS/nanobot/pull/6127
- **#6123 [OPEN] Telegram 远程媒体 URL 带 query string 时类型误判** — 扩展名被推断为 `jpg?width=672`。已有 fix PR **#6124（OPEN）**。
  https://github.com/HKUDS/nanobot/issues/6123 ｜ https://github.com/HKUDS/nanobot/pull/6124
- **#6122 [OPEN] DeepSeek reasoning_effort="minimal" 发送矛盾 thinking 控制** — 同时发送 `reasoning_effort="minimal"` 与 `thinking.type="disabled"`。暂无 fix PR。
  https://github.com/HKUDS/nanobot/issues/6122
- **#6084 [OPEN] Slack 压缩通知产生两条永久消息** — 已有 PR **#6110（OPEN）**，采用 in-place 更新方案。
  https://github.com/HKUDS/nanobot/issues/6084 ｜ https://github.com/HKUDS/nanobot/pull/6110

**回归/环境类**
- **#1739 [OPEN] Windows NANOBOT_HOME 被忽略，多实例 Telegram 冲突** — 自 3 月长期存在，已有 PR **#6126（OPEN）**（修复默认 config/workspace 解析）与 **#6128（OPEN）**（`--home` 选择器）。
  https://github.com/HKUDS/nanobot/issues/1739

**已关闭（历史遗留）**
- **#6006 [CLOSED] QQ 引用消息不达 agent** https://github.com/HKUDS/nanobot/issues/6006

---

## 6. 功能请求与路线图信号

**可能纳入下一版本（已有对应 open PR）**
- **Telegram 相册发送** — Issue #6121 提出多图应作为 album 发送，PR **#6125** 已实现（最多 10 项分组，失败回退单发，含测试）。方向明确，落地概率高。
  https://github.com/HKUDS/nanobot/issues/6121 ｜ https://github.com/HKUDS/nanobot/pull/6125
- **CLI 实例目录选择器** — PR **#6128** 新增全局 `--home <directory>`，简化多实例启动（当前需同时指定 config 与 workspace）。
  https://github.com/HKUDS/nanobot/pull/6128

**新提交的功能/扩展型 PR（待评审）**
- **#5955 Claude on Vertex AI** — 新增基于 `AsyncAnthropicVertex` 的 provider（documentation, provider, new-provider, feature, test, priority: p2, conflict）。
  https://github.com/HKUDS/nanobot/pull/5955
- **#3207 拆分 zhipu 为 Z.AI CN/Global/Coding Plan providers** — 自 2026-04-16 长期开放。
  https://github.com/HKUDS/nanobot/pull/3207
- **#6103 文档：CoreWeave Inference 自定义 provider 示例**（priority: p2, conflict）。
  https://github.com/HKUDS/nanobot/pull/6103

**路线图信号**：provider 生态扩展（Vertex AI、Z.AI、CoreWeave、Parallel、opencode_go）与多实例/配置隔离是当前两条主要演进方向。

---

## 7. 用户反馈摘要

- **后台任务通知干扰**：用户（#6029）反映 idle session 检查与 dream/heartbeat 后台周期会触发自动上下文压缩并广播状态通知；#6084 进一步指出 Slack 下每次压缩产生两条永久消息，"即使设置了 idleCompactAfterMinutes 也会频繁发生"。核心痛点是自动化维护不应污染对话流。
- **多实例运行困难（Windows）**：#1739 用户运行于 Windows Server 2019/Windows 10，用 `set NANOBOT_HOME=...` 启动两个实例时环境变量被忽略，导致 Telegram 冲突。反映配置隔离机制在 Windows 平台存在实质缺口。
- **provider 兼容性**：#5898（gpt-6 via Copilot）、#5896（opencode_go 需 Responses 线格式）、#5922 类（DeepSeek thinking 参数）共同指向"模型能力与请求 API 的声明/映射"问题，用户期望端点兼容性可被显式表达而非猜测。
- **通道细节体验**：Telegram 多图被拆成多条消息（#6121）、带 query 的媒体 URL 被误判为非图片（#6123）、QQ 引用消息内容丢失（#6006）、WhatsApp 旧消息过滤失效（#6120）——均为具体通道的用户可感知问题，且多已获得快速修复响应。

---

## 8. 待处理积压

**长期未合并的 PR（维护者需关注）**
- **#3207** zhipu → Z.AI 四 provider 拆分 — 自 2026-04-16 开放，已近 6 个月，标签含 `conflict`（可能存在合并冲突）。
  https://github.com/HKUDS/nanobot/pull/3207
- **#5698** WebUI 搜索开关保留显式 API 类型 — 自 2026-09-08，标签含 `bug, webui, priority: p2, conflict`。
  https://github.com/HKUDS/nanobot/pull/5698
- **#5943** session 状态所有权集中至 SQLite（p1, conflict）— 自 2026-09-27，属架构级重构。
  https://github.com/HKUDS/nanobot/pull/5943
- **#5955** Claude on Vertex AI — 自 2026-09-28，标签含 `conflict`。
  https://github.com/HKUDS/nanobot/pull/5955
- **#5946** 工具结果批次边界持久化 — 自 2026-09-28。
  https://github.com/HKUDS/nanobot/pull/5946
- **#5797** 向 Parallel 标识 nanobot 请求（User-Agent）— 自 2026-09-17。
  https://github.com/HKUDS/nanobot/pull/5797

**长期未关闭的 Issue**
- **#1739** Windows NANOBOT_HOME 多实例冲突 — 自 2026-03-08 开放逾 7 个月，今日有新 PR（#6126/#6128）尝试解决，建议优先推进合并以关闭该历史问题。
  https://github.com/HKUDS/nanobot/issues/1739

**观察**：多个积压 PR 带有 `conflict` 标签，提示主干演进较快导致分支冲突累积，建议维护者安排批量 rebase 或分批合并。

---

*本日报仅基于所提供数据整理，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-10-09

> 数据来源：NousResearch/hermes-agent GitHub 近 24 小时动态
> 说明：本期仅有 Issues / PR 数据，无 Release 数据；PR 评论数在源数据中未提供（显示为 undefined），故社区热度主要以 Issue 评论数衡量。

---

## 1. 今日速览

- 项目维持**极高活跃度**：24 小时内 Issues 更新 50 条（新开/活跃 48、关闭 2），PR 更新 50 条（待合并 37、已合并/关闭 13），处于典型的"输入远大于消化"状态。
- **无新版本发布**，工作集中在修 bug、补依赖安全与合并积压 PR。
- 今日关闭的 Issue 仅 2 条，而待合并 PR 达 37 条，**合并吞吐量相对不足**，review 环节是当前瓶颈信号。
- 热点集中在三类问题：**上下文压缩导致的消息重复/状态污染**、**跨平台（Windows/Termux/Docker）安装更新失败**、**多 provider / MCP 的配置与安全边界问题**。

---

## 2. 版本发布

无新版本发布（过去 24 小时 Releases 为空）。以下非正式信息来自 Issue 中用户报告的环境版本，仅供参考，不构成发布说明：近期版本线为 `v0.21.5+…`，用户报告中出现 `0.21.5+3828.g801a902`、`v0.21.5+4538.g7728574` 等构建号。

---

## 3. 项目进展

今日合并/关闭的 PR（13 条，源数据仅展示部分），以下为可确认的重要项：

- **PR #100016 [CLOSED]** feat(groups): complete the canonical cross-gateway text lifecycle — 跨网关文本生命周期的完整化，涉及 gateway / tui / sessions。
  链接: NousResearch/hermes-agent PR #100016
- **PR #131353 [CLOSED]** feat(groups): let remote Bots share files — 允许远端 Bot 共享文件，带发布与取消证据、输出清理与有界观察。
  链接: NousResearch/hermes-agent PR #131353
- **PR #132378 [CLOSED]** hermes update: 修复 parked-branch 检查在 partial clone 上触发无界 lazy-fetch，曾于 Windows 上 7 小时写入 332 个 pack / 180 GiB（关联 #131444，salvage #124777）。
  链接: NousResearch/hermes-agent PR #132378
- **PR #132312 [CLOSED]** 更新 hermes-monitor 目录条目至 v0.3.5，固定 SHA `ec6a3ada338ca3e06fbfc246bc672c3c776b0988`。
  链接: NousResearch/hermes-agent PR #132312

**整体判断**：今日推进主要落在"群组/跨网关协作能力"与"更新机制的稳定性"两条线上；但功能性 PR 多为关闭（合并或撤回），前台仍有 37 条待合并，项目**能力推进速度尚可，消化速度偏慢**。

---

## 4. 社区热点

按评论数排序，今日讨论最活跃的议题：

| 排名 | Issue | 评论 | 主题 |
|---|---|---|---|
| 1 | #131859 | 18 | fork 账号通过 API 创建 PR 权限失败（P2，blocked） |
| 2 | #99943 | 10 | 云端 provider 上下文窗口被 `ollama_num_ctx` 钳制到 65,536 |
| 3 | #127621 | 7（👍7） | 桌面端助手回复偶发重复渲染 |
| 4 | #129426 | 6 | npm audit 安全字段报告（依赖升级目标已被取代） |
| 5 | #128293 | 6 | 上下文压缩后桌面 transcript 出现重复消息行 |

- **#131859**（18 评论，最高）：`gh pr create` 对本仓库从 fork 发起失败，Issue 创建与 fork PR 仍可用，仅特定账号受影响，标签含 `blocked`。
  链接: NousResearch/hermes-agent Issue #131859
- **#99943**：v0.21.0 起压缩器窗口被 `model.ollama_num_ctx` 钳制，导致云端 1M 上下文静默降为 65,536，影响 OpenRouter / Anthropic / OpenAI / DeepSeek / Ollama / Zai 多 provider，属高影响配置回归。
  链接: NousResearch/hermes-agent Issue #99943
- **#127621**：桌面端同一段落文本被连续渲染两次，且明确排除模型重复输出，获 7 个 👍，是用户可感知度最高的 UI 问题之一。
  链接: NousResearch/hermes-agent Issue #127621

**诉求分析**：热点高度集中——(a) 权限/认证类协作阻塞；(b) 配置项在多 provider 下语义不一致；(c) 桌面端会话状态与渲染一致性。三者都直接触碰"日常使用即会碰到"的路径。

---

## 5. Bug 与稳定性

按严重程度排列（P1 优先）：

- **P1 — #128293** Duplicate message rows in desktop transcript after context compaction（第三起同类报告，前有 #126021、#117750），涉及 sessions / compression。**未见对应 fix PR**。
  链接: NousResearch/hermes-agent Issue #128293
- **P2 — #131859** fork 通过 API 创建 PR 失败（blocked，18 评论），阻塞外部贡献流程。**未见 fix PR**。
  链接: NousResearch/hermes-agent Issue #131859
- **P2 — #99943** 压缩器上下文窗口被钳制（10 评论），云端 1M → 65,536 静默降级，影响面最广。**未见 fix PR**。
  链接: NousResearch/hermes-agent Issue #99943
- **P2 — #135594**（2026-10-09 新开）多路复用 gateway 中，同名 MCP server 导致 profile 工具白名单被忽略，只读 profile 获得写工具——**安全问题**，标签含 needs-repro。
  链接: NousResearch/hermes-agent Issue #135594
- **P2 — #127621** 桌面端回复重复渲染（👍7）。**未见 fix PR**。
  链接: NousResearch/hermes-agent Issue #127621
- **P2 — #119403** 会话列表刷新对每个 session 做 `messages` 子查询，grown state.db 下每次轮询 0.4–0.7 GB 读、持续 186 MB/s。**未见 fix PR**。
  链接: NousResearch/hermes-agent Issue #119403
- **P2 — #122413** 桌面 renderer 在 v0.21.5 / macOS M5 上空转仍消耗约 0.8 核。**未见 fix PR**。
  链接: NousResearch/hermes-agent Issue #122413
- **P2 — #127731** 高频 cron 主机上自动更新前备份总被跳过（归档中途成员消失被判定 incomplete）。
  链接: NousResearch/hermes-agent Issue #127731
- **P2 — #126194 / #128831** Python 3.14 / Termux 下 `uv lock` 与 `hermes update` 因 pilk、playwright(google-meet extra) 死锁或终止。
  链接: NousResearch/hermes-agent Issue #126194 · Issue #128831
- **P2 — #91479** 桌面 SSH 探测 Windows 远程主机失败（假设 python.exe 与 hermes.exe 同目录）。
  链接: NousResearch/hermes-agent Issue #91479
- **P2 — #95074** Bot Mode `message_agent` 存在双返回路径，recipient 走二次 DM 而原调用只回 ack。
  链接: NousResearch/hermes-agent Issue #95074
- **P3 — #129426** npm audit 字段报告：brace-expansion / undici / vitest / yaml 的当前修复目标已被取代。
  链接: NousResearch/hermes-agent Issue #129426
- **P3 — #135443**（2026-10-09 新）`pm doctor` / `hermes update` 报 `Failed to load bundled provider plugin solstice: No module named 'httpx'`。
  链接: NousResearch/hermes-agent Issue #135443
- **已关闭 — #134960** Windows UTF-8 无 BOM 的 .ps1 在 PowerShell 5.1 / CJK 区域更新交接失败（已关闭，说明有收敛）。
  链接: NousResearch/hermes-agent Issue #134960

**可信修复 PR（待合并）**：
- **PR #135924** fix(status): `_pid_exists` 在 hidepid=2 下不再误判存活 worker 为死亡。
  链接: NousResearch/hermes-agent PR #135924
- **PR #135925** fix(web): openai-native 搜索改走 Codex 搜索端点客户端执行（Fixes #135684）。
  链接: NousResearch/hermes-agent PR #135925
- **PR #75418** fix(docker): 在宿主机解析 sibling bind 源（Fixes #50798，长期悬置问题）。
  链接: NousResearch/hermes-agent PR #75418
- **PR #119140** fix(sessions): 记录 docker CLI session 的启动 cwd，使 `--resume` 能恢复工作区。
  链接: NousResearch/hermes-agent PR #119140

---

## 6. 功能请求与路线图信号

结合已有 PR 判断，以下方向最可能进入下一版本：

- **图像生成可复现性**：PR #135927 为 `image_generate` 暴露 `seed`、`num_inference_steps`、`guidance_scale`，直接回应"无法生成可复现图像"的需求，实现简单、风险低，**最可能被纳入**。
  链接: NousResearch/hermes-agent PR #135927
- **跨网关协作 / 文件共享**：PR #100016、#131353 已关闭，说明该能力线阶段性收敛，后续可能继续以 groups 相关 PR 迭代。
  链接: NousResearch/hermes-agent PR #100016 · PR #131353
- **平台体验补齐**：PR #105862（WeCom 收到消息即时 ack，缓解长耗时回合无反馈）、PR #135930（Teams 仅剥离 bot 自身 @ 标签，保留他人提及，便于判断消息是否对自己说）。
  链接: NousResearch/hermes-agent PR #105862 · PR #135930
- **Kanban 非等待式 agent 交接**：PR #135929 引入 5s tick、事务性幂等与隐私安全升级。
  链接: NousResearch/hermes-agent PR #135929
- **MCP 配置隔离**：PR #74809 为原生 MCP 配置加入 per-server `env_file` 隔离解析，并有配套 CLI 探针路径统一，对多 profile 安全边界有直接价值。
  链接: NousResearch/hermes-agent PR #74809
- **CLI 启动性能**：PR #135697 使 `mcp serve` 启动不再拉起所有已配置 MCP server。
  链接: NousResearch/hermes-agent PR #135697
- **认证时效修复**：PR #135909 记录 Nous device-code grant 的批准时间（该 grant 自人工批准起 30 天硬过期，轮换 refresh token 不延长）。
  链接: NousResearch/hermes-agent PR #135909

---

## 7. 用户反馈摘要

从今日活跃 Issue 中可提炼的真实痛点：

- **"配置语义在多 provider 间不一致"**：用户 winsonD 指出同一个 `model.ollama_num_ctx` 竟然钳制了云端 provider 的上下文窗口，且是**静默降级**（1M → 65,536），属典型"配置泄漏到不该生效的场景"（#99943）。
- **"桌面端状态一致性长期未解"**：重复渲染（#127621，👍7）与压缩后重复消息行（#128293）已是第三次同类报告（前有 #126021、#117750），用户 Djon21 明确标注"无 delegation fan-out"，说明该问题类别反复复现、用户已做过多轮排查。
- **"外部贡献被权限卡死"**：fork 账号无法通过 API 创建 PR（#131859，18 评论、blocked），影响的是贡献者工作流而非使用体验，但讨论热度最高。
- **"非主流环境安装困难"**：Windows 11 + Python 3.14（#126194）、Termux/Android + Python 3.13/3.14（#128831）、Windows 远程 SSH（#91479）等边缘但真实的部署场景反复受挫，用户描述为"两颗独立地雷交替出现"。
- **"资源消耗可感知"**：桌面空闲 0.8 核（#122413）、会话列表轮询持续上百 MB/s（#119403），属持续占用型抱怨。
- **正向信号**：多条为配置快照类详报（如 #129426 附带 advisory ID、#50798 附完整 docker-compose 复现），说明用户愿意提供高质量复现，维护侧响应成本主要在排期而非信息不足。

---

## 8. 待处理积压

以下 Issue/PR 创建时间较早、仍在更新但未收敛，建议维护者优先关注：

**长期未关闭的高影响 Bug**
- **#50798**（创建 2026-06-22，👍3）Docker 自托管下 sandbox skill 与 cache 绑定挂载为空——已有对应修复 **PR #75418**（创建 2026-07-31）同步老化，建议一并合入。
  链接: NousResearch/hermes-agent Issue #50798 · PR #75418
- **#100084**（创建 2026-09-13）`load_hermes_dotenv()` 在应用 .env 前导入全部 provider entry point，属安全边界类问题，仍为 OPEN。
  链接: NousResearch/hermes-agent Issue #100084
- **#95074**（创建 2026-08-25）Bot Mode `message_agent` 双返回路径。
  链接: NousResearch/hermes-agent Issue #95074
- **#79204**（创建 2026-08-05，👍2）TUI 在 Ghostty 下 hover 泄漏 skin 背景色 hex 到输入区。
  链接: NousResearch/hermes-agent Issue #79204
- **#91479**（创建 2026-08-21）桌面 SSH Windows 远程探测失败。
  链接: NousResearch/hermes-agent Issue #91479

**长期悬置的 PR**
- **PR #74809**（创建 2026-07-30）MCP per-server env_file 隔离，涉及安全边界与兼容性，与今日新开的安全类 Issue #135594 主题相关。
  链接: NousResearch/hermes-agent PR #74809
- **PR #75418**（创建 2026-07-31）见上。
- **PR #119140**（创建 2026-09-22）docker 会话 cwd 记录，标签含 needs-repro。
  链接: NousResearch/hermes-agent PR #119140
- **PR #105862**（创建 2026-09-08）WeCom 即时 ack。
  链接: NousResearch/hermes-agent PR #105862

---

**项目健康度小结**：输入端（Issues/PR）非常活跃，社区贡献意愿强、复现质量高；压力点在 **review 与合并吞吐**（37 条待合并 vs 13 条已处理）以及 **上下文压缩 / 会话状态类问题的反复复现**。建议下期重点关注：压缩窗口钳制（#99943）、桌面重复消息类（#128293 第三次报告）、以及 MCP/profile 安全边界（#135594 与 PR #74809 的组合处置）。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-09

## 1. 今日速览

过去 24 小时项目共产生 10 条 Issue/PR 更新（4 条 Issues、6 条 PRs），无新版本发布，整体活跃度属于**中等偏低**。值得注意的是，今日更新的 Issues 与 PRs 几乎全部带有 `stale` 标记，说明当日动作以**积压清理**为主，而非新增开发。5 条 Dependabot 依赖升级 PR 被批量合并/关闭，属于例行的维护性推进。与此同时，2 条新 Issue 均指向实质性技术问题（反向代理路径挂载、Android 构建 DNS 解析失败），且均处于 OPEN 状态，尚无对应 fix PR。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 5 条 PR 全部为 Dependabot 自动依赖升级，无功能性代码合并：

| PR | 内容 | 链接 |
|---|---|---|
| #3385 | `line-bot-sdk-go/v8` 8.20.1 → 8.22.0 | sipeed/picoclaw PR #3385 |
| #3386 | `maunium.net/go/mautrix` 0.27.0 → 0.31.0 | sipeed/picoclaw PR #3386 |
| #3387 | `anthropics/anthropic-sdk-go` 1.55.1 → 1.74.0 | sipeed/picoclaw PR #3387 |
| #3388 | `modelcontextprotocol/go-sdk` 1.6.1 → 1.8.0 | sipeed/picoclaw PR #3388 |
| #3389 | `golang.org/x/crypto` 0.53.0 → 0.57.0 | sipeed/picoclaw PR #3389 |

**评估**：从依赖升级幅度看（如 anthropic-sdk-go 跨 19 个小版本、mautrix 跨 4 个小版本），这些升级可能引入上游 API 变更，但数据中未提供对应适配说明。今日项目在功能层面**基本无净推进**，仅维持依赖健康度。

## 4. 社区热点

按评论数与反应数排序：

- **#3377 [CLOSED] TLS 证书过期导致官网全浏览器不可访问**
  作者 dimonb | 评论 4 | 👍 2 | 创建 2026-09-12，更新 2026-10-09
  链接：sipeed/picoclaw Issue #3377
  报告称 `https://picoclaw.io` 的 TLS 证书已于 2026-09-10 23:59:59 UTC 过期，所有浏览器与 TLS 客户端均拒绝连接，站点实际不可用。该 Issue 从 9 月 12 日持续到 10 月 9 日才关闭，是今日互动最多的条目，反映出**用户对项目门面/官网可用性的直接关切**，也暴露了基础设施运维响应链条较长的问题。

- **#3391 [CLOSED] Pico 通道将多行输入拆分为多条消息**
  作者 chentianxiong123 | 评论 2 | 创建 2026-09-24
  链接：sipeed/picoclaw Issue #3391
  用户粘贴多行文本（诗歌、代码块）时，客户端按换行符自动拆分并逐行发送，破坏了内容完整性。这是**移动端 TUI 场景下的典型体验痛点**。

- **#3415 [OPEN] Nginx 反向代理挂载子路径需求**
  作者 altman08 | 评论 1 | 创建 2026-10-02
  链接：sipeed/picoclaw Issue #3415
  诉求是将 Web Console 挂载到 `/pico/` 而非根路径，涉及页面、登录、API、静态资源、聊天 WebSocket 与附件请求的路径一致性问题。当前前后端硬编码根路径（`/api/...`、`/launcher-login`、`/pico/ws`），仅靠 Nginx 转发无法解决。

## 5. Bug 与稳定性

按严重程度排列：

**高 — #3420 [OPEN] Android 构建 DNS 解析失败（无 fix PR）**
作者 sstreichan | 创建 2026-10-09 | 评论 0
链接：sipeed/picoclaw Issue #3420
官方 Android 构建使用纯 Go 模式（`CGO_ENABLED=0`）时，gateway 无法访问任何外部 API 端点（例如 `/models` 拉取），DNS 解析报错 `dial udp 127.0.0.1:53: connect: connection refused`。该问题直接导致 Android 端核心功能不可用，属**阻断型缺陷**，今日新报且尚无 fix PR，建议优先级最高。

**中 — #3391 [CLOSED] 多行输入被拆分（体验级缺陷）**
链接：sipeed/picoclaw Issue #3391
影响代码块、诗歌等多行内容的正常传输，非崩溃类问题，今日已关闭（标记 stale）。

**官网基础设施 — #3377 [CLOSED] TLS 证书过期**
链接：sipeed/picoclaw Issue #3377
已于今日关闭，但自 9-10 证书过期到今日关闭历时近一个月，期间的可用性损失值得复盘。

## 6. 功能请求与路线图信号

- **反向代理 / 子路径部署支持（#3415，OPEN）**
  链接：sipeed/picoclaw Issue #3415
  用户明确要求支持 Nginx 将服务挂载到 `/pico/` 路径下。这是一个**自托管/私有部署场景下的高频需求**，需要前后端路径配置化改造（API base、登录路由、WebSocket、静态资源、附件统一前缀）。今日无对应 PR，短期内进入下一版本的可能性取决于维护者对自托管部署优先级的判断。

- **每轮 turn 的墙钟时间预算（#3414，OPEN）**
  作者 racso2609 | 创建 2026-10-01 | 更新 2026-10-09
  链接：sipeed/picoclaw PR #3414
  摘要显示新增可选配置 `agents.defaults.turn_time_budget_seconds`（默认 `0` 即关闭），当一轮超出预算时，要求 agent 停止调度新工具并交付简洁结果。该 PR 处于 OPEN 且标记 stale，是今日唯一的功能性 PR，属于**智能体运行时可控性**方向的增强，具备被纳入后续版本的潜力。

## 7. 用户反馈摘要

从今日 Issues 摘要可提炼的真实诉求：

- **移动端输入体验**：多行文本被换行符切分（#3391），说明用户确实在用手机 TUI 处理代码块、诗句等结构化内容，当前实现与真实输入习惯不匹配。
- **自托管部署刚需**：用户希望在同一域名下用 Nginx 反代、把 Web Console 放到子路径（#3415），反映出 PicoClaw 被用于**多服务共存的个人/小团队服务器环境**，而非独占根域名。
- **Android 可用性缺口**：纯 Go 构建在 Android 上 DNS 直接失败（#3420），描述中提到 Android launcher 相关上下文，说明用户在真机 Android 环境下部署 gateway，但当前构建方式与 Android 网络栈不兼容。
- **对官网/项目可信度的关注**：TLS 证书过期被标为 CRITICAL 并获 2 个 👍（#3377），用户主动为项目门面问题背书，表明社区希望项目保持对外可访问性。

## 8. 待处理积压

今日多个条目均为 `stale` 状态，显示长时间无人跟进后被自动标记，需提醒维护者关注：

- **#3420 [OPEN] Android DNS 解析失败**（2026-10-09，0 评论，无 fix PR）— 新报的高严重度阻断问题，建议尽快分诊。
- **#3415 [OPEN] 反向代理子路径支持**（创建 2026-10-02，仅 1 评论，stale）— 自托管部署核心诉求，需要明确产品态度。
- **#3414 [OPEN] turn 时间预算功能 PR**（创建 2026-10-01，stale）— 唯一功能性 PR，长期挂起会增加后续合并冲突成本。
- **#3377 [CLOSED] 官网 TLS 证书过期**（2026-09-12 → 2026-10-09）— 虽已关闭，但从故障发现到关闭历时约一个月，建议复盘基础设施监控与响应机制。
- **依赖升级积压**：今日一次性关闭 5 条自 2026-09-24 起挂起的 Dependabot PR，说明依赖更新存在约两周的响应延迟，建议评估是否引入自动合并策略以降低维护噪音。

---

**项目健康度小结**：今日无新版本、无功能性合并，动作集中于依赖清理与 stale 积压关闭；社区侧出现了两个尚未解决的真实技术问题（Android DNS、反向代理），其中 Android 问题为高严重度且无进展，是本周期最需要维护者介入的信号。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-09

## 1. 今日速览

NanoClaw 今日进入密集维护节奏，最显著的信号是首个日历版本号（CalVer）稳定版 **v2026.10.0** 正式发布，更新机制从跟随 `main` 分支尖端转为跟随已发布版本，这是项目分发策略的一次结构性调整。PR 层面异常活跃：13 条 PR 更新中 10 条已合并/关闭，且几乎全部由核心团队成员 glifocat 提交并当天闭环，集中在输入解析、目录句柄、安装脚本等基础健壮性修复。Issues 侧仅 2 条更新，但其中一条暴露了 Telegram 通道长期存在的消息投递缺陷。整体看，项目处于**发布收口 + 核心缺陷集中清理**的高健康度阶段，社区外部贡献者活跃度则相对偏低。

---

## 2. 版本发布

### v2026.10.0（首个 CalVer 稳定版）
链接：https://github.com/nanocoai/nanoclaw/pull/4065

**核心变更**
- 这是第一个采用日历版本号的发布，也是第一个被 `/update-nanoclaw` 默认安装的版本。
- **更新机制变更**：更新流程现在跟随"已发布版本"（published releases），而不再跟随 `main` 分支尖端。
- 该版本此前已在 `beta` 通道以 `2026.10.0-rc.1`、`2026.10.0-rc.2` 两个候选版本完成先行测试。

**发布流程证据**
- 发布 PR #4065 由 glifocat 提交并当日关闭，标注 `kind/documentation`、`PR: Docs`、`core-team`。
- 版本号变更：`package.json` 由 `2026.10.0-rc.2` → `2026.10.0`；变更日志中 `## [Unreleased]` 段落转为正式发布段落。

**迁移注意事项**
- 由于更新通道从 `main` 尖端切换为发布版本，依赖"最新未发布提交"的用户需注意其环境不再自动获取 main 上的即时改动。
- 数据中未提供破坏性变更（breaking change）的具体条目，此处不做推断。

---

## 3. 项目进展

今日 10 条 PR 被合并/关闭，绝大多数为当日提交、当日闭环，推进方向以**基础机制健壮性**为主：

| PR | 标题 | 推进内容 |
|---|---|---|
| [#4065](https://github.com/nanocoai/nanoclaw/pull/4065) | chore(release): v2026.10.0 | 完成首个 CalVer 稳定版发布 |
| [#4063](https://github.com/nanocoai/nanoclaw/pull/4063) | fix(host): open session, skill and run-log directories by descriptor | 新增 `src/anchored-dir.ts` 辅助模块，主机代码对 session、skill、run-log 目录改为"打开一次目录句柄并复用"，取代反复按路径访问 |
| [#4062](https://github.com/nanocoai/nanoclaw/pull/4062) | fix(commands): parse slash commands once for the gate and the runner | 主机命令门与 agent runner 共用同一斜杠命令解析器（`src/slash-command.ts` 逐字节复制进 runner），消除两处解析逻辑分歧 |
| [#4061](https://github.com/nanocoai/nanoclaw/pull/4061) | fix(cli): normalize ncl arguments once in dispatch | `ncl` 在 dispatch 入口一次性将短横线转为下划线，后续 auto-fill、guard 等步骤统一读取同一对象 |
| [#4064](https://github.com/nanocoai/nanoclaw/pull/4064) | test(drivers): keep fs.constants in the driver tests' fs stub | 修复两个 driver 测试文件因 fs stub 仅含 `existsSync`，在应用 gateway skill 后导入 `src/anchored-dir.ts` 于加载时读取 `fs.constants` 而失败的问题 |
| [#4060](https://github.com/nanocoai/nanoclaw/pull/4060) | fix(add-mattermost): check the owner lookup result during setup | Mattermost 安装流程新增 owner ID 格式校验，仅接受结构良好的用户 ID |
| [#4059](https://github.com/nanocoai/nanoclaw/pull/4059) | fix(setup): full URL and explicit curl options for OneCLI installer | OneCLI 安装步骤改用完整 URL 与显式 curl 协议选项，并补充安装器测试 |
| [#4052](https://github.com/nanocoai/nanoclaw/pull/4052) | fix(add-dial-tool): scope Dial through the OneCLI policy API (gateway 1.42) | 使 `/add-dial-tool` 在锁定版 gateway 1.42.0 上可用，从 legacy rules API 迁移到 OneCLI policy API |
| [#4058](https://github.com/nanocoai/nanoclaw/pull/4058) | ci: move all jobs to namespace-profile-paradixe | 按 2026-10-08 创始人批准的规则，所有 GitHub Actions job 迁移至 `namespace-profile-paradixe`（或自托管 s6 runner），禁用 GitHub 托管标签 |
| [#4066](https://github.com/nanocoai/nanoclaw/pull/4066) | build(deps): bump source-map-js 1.2.1 → 1.2.2 | 依赖例行升级 |

**整体判断**：今日是"清理存量技术债"的一天 —— 参数解析、目录句柄、命令解析器这些容易产生隐蔽不一致的环节被逐一收敛为单一实现；CI 基础设施完成统一迁移；发布通道完成切换。项目的机制一致性有实质提升。

---

## 4. 社区热点

今日数据中评论数最高的条目如下（整体讨论热度偏低，未出现高反应/高互动条目，所有条目 👍 均为 0）：

1. **[Issue #3569](https://github.com/nanocoai/nanoclaw/issues/3569)** — Telegram 下划线消息投递缺陷
   - 评论：2 | 状态：OPEN | 作者：shachartal
   - 创建 2026-08-27，持续至 2026-10-09 仍有更新，是本日"存活时间最长且仍活跃"的讨论。

2. **[Issue #4068](https://github.com/nanocoai/nanoclaw/issues/4068)** — 支持 OneCLI 2.x gateway
   - 评论：1 | 状态：OPEN | 作者：Philabuster
   - 当日新建当日获得回应。

**诉求分析**
- #3569 反映的是**下游依赖锁定带来的长期滞后成本**：chat-adapter 被锁定在上游修复前三代版本，导致修复无法进入，用户长期暴露在消息丢失风险下。
- #4068 反映的是**功能被网关版本天花板卡住**：Google Docs 的编辑权限需要 OneCLI 2.x，而当前锁定 1.42.0，用户实际上被挡在核心能力之外。
- 两条热点的共同主题是"**版本锁定 vs. 用户可获得的实际能力**"，这是 NanoClaw 当前值得关注的结构性张力。当日 PR #4052 也正是在修补同类问题（让工具适配锁定的 1.42.0），说明团队已在应对，但方向是"适配旧版"而非"升级版本"。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重 — 消息静默丢失
**[Issue #3569](https://github.com/nanocoai/nanoclaw/issues/3569)** `kind/bug`
- 所有运行 Telegram 的 NanoClaw 安装均使用 `@chat-adapter/telegram@4.29.0`，当整条消息中未转义的 MarkdownV2 标记符（`_` `*` `~` `` ` ``）总数为**奇数**时，消息将**永久投递失败**。
- 影响面：全部 Telegram 用户。上游已修复，但当前 pin 落后上游三代版本。
- **是否有 fix PR：无**。今日无对应修复 PR，属于待处理的高优先级项。
- 可缓解的特征：该缺陷与消息内容直接相关（奇数个标记符即触发），用户难以自行诊断。

### 🟡 中等 — 测试环境加载失败（已修复）
**[PR #4064](https://github.com/nanocoai/nanoclaw/pull/4064)** `kind/bug`
- 两个 driver 测试文件的 fs stub 仅提供 `existsSync`；在应用 gateway skill 后，其导入链会触及 `src/anchored-dir.ts`，该模块在加载时读取 `fs.constants`，导致两个测试文件全部失败。
- 与 #4063 新引入的 `anchored-dir.ts` 直接相关，属同日引入、同日修复。

### 🟡 中等 — 职责重叠导致行为分歧（已修复）
- [#4062](https://github.com/nanocoai/nanoclaw/pull/4062)：命令门与 runner 各自解析斜杠命令。
- [#4061](https://github.com/nanocoai/nanoclaw/pull/4061)：`ncl` 参数在多个步骤中重复归一化。
- [#4063](https://github.com/nanocoai/nanoclaw/pull/4063)：目录访问反复按路径解析。
- 三者均为"同一逻辑多处实现"类缺陷，当日全部收敛为单一实现。

### 🟢 轻微 — 安装/配置健壮性（已修复）
- [#4060](https://github.com/nanocoai/nanoclaw/pull/4060)：Mattermost 安装未校验 owner ID。
- [#4059](https://github.com/nanocoai/nanoclaw/pull/4059)：OneCLI 安装器 URL 与 curl 选项不完整。

---

## 6. 功能请求与路线图信号

### 明确的功能请求
**[Issue #4068](https://github.com/nanocoai/nanoclaw/issues/4068)** `[capability]` — 支持 OneCLI 2.x gateway
- 诉求：NanoClaw 将 OneCLI gateway 锁定在 1.42.0（`.claude/skills/add-onecli/versions.json`，截至 2026-10-09 `main` 上仍为该 pin）。在该版本上，Google Docs 连接仅请求 `drive.fi...`（数据截断）权限范围，导致 Google Docs 编辑能力不可用。
- 用户场景：需要 Google Docs 编辑权限的集成工作流。

### 路线图判断
- **短期（下一版本可能纳入）**：OneCLI 2.x 升级是否纳入尚不明朗。当日已合并的 [#4052](https://github.com/nanocoai/nanoclaw/pull/4052) 选择了"让工具适配锁定的 1.42.0"路线，说明团队当前倾向维持版本 pin、通过兼容层解决问题。但 #4068 指出 Google Docs 编辑 scope 在 1.42.0 上无法获得，这是兼容层无法绕过的能力缺口，构成对 2.x 升级的实际压力。
- **无新功能请求**：今日 2 条 Issue 中，1 条为 bug，1 条为能力扩展，未出现其他功能请求。

---

## 7. 用户反馈摘要

基于今日可获取的 Issue 摘要与评论计数提炼：

**痛点 1：依赖锁定导致修复不可达（#3569，2 条评论）**
用户 shachartal 明确指出上游已修复该问题，但 NanoClaw 的 chat-adapter pin "落后上游三代版本"，修复无法生效。摘要中使用"never deliver""permanently fails"等表述，反映出这是一个长期存在且用户感知强烈的问题。该 Issue 自 2026-08-27 创建，至 2026-10-09 仍处 OPEN 且继续有讨论，说明用户的等待时间已超过六周。

**痛点 2：能力被网关版本天花板限制（#4068，1 条评论）**
用户 Philabuster 在摘要中主动提供了精确的定位信息 —— 明确写出 pin 所在的配置文件路径与当前版本号，并说明该版本下 Google Docs 连接仅请求 `drive.fi...` scope。这种表达方式表明提出者具备较高的技术熟悉度，且已做过自行排查。诉求本质是"锁定策略正在牺牲可用能力"。

**满意度方面**
- 今日数据中未出现正面反馈或满意类评论，无法评估。
- 值得注意的间接信号：当日 10 条 PR 均由核心团队提交并快速闭环，说明维护响应速度在核心团队内部是快的；但从 #3569 的六周存续看，涉及**外部依赖升级**的问题处理链路明显更慢。

---

## 8. 待处理积压

以下条目存在时间跨度较长且仍处 OPEN 状态，建议维护者关注：

### 🔴 高优先级 — 长期未解决的严重缺陷
**[Issue #3569](https://github.com/nanocoai/nanoclaw/issues/3569)** — Telegram 偶数/奇数标记符投递失败
- 创建：2026-08-27 | 更新：2026-10-09 | 已存续约 **6 周**
- 状态：OPEN，无 fix PR
- 风险：影响全部 Telegram 安装，且为静默失败（用户无法从错误提示中获知原因）。上游已有修复，阻塞点仅在版本 pin 决策。

### 🟡 中优先级 — 长期挂起的社区 PR
**[PR #3751](https://github.com/nanocoai/nanoclaw/pull/3751)** `area/channels` — fix(whatsapp): ignore @newsletter JIDs at the inbound boundary
- 作者：horsehcj | 创建：2026-09-09 | 更新：2026-10-09 | 已存续约 **4 周**
- 状态：OPEN，无评论

**[PR #3752](https://github.com/nanocoai/nanoclaw/pull/3752)** `kind/bug` `area/channels` — fix(whatsapp): keep every pending question answerable in a chat
- 作者：horsehcj | 创建：2026-09-09 | 更新：2026-10-09 | 已存续约 **4 周**
- 状态：OPEN，无评论

> **关注点**：这两条 WhatsApp 相关 PR 由同一位外部贡献者（horsehcj）在 4 周前提交，今日虽被更新（说明作者或系统有动作），但仍无评论、未合并。结合今日合并的 10 条 PR 全部来自核心团队 glifocat，可以看出**外部贡献者的 PR 审阅通道存在明显延迟**。这是项目健康度上一个值得留意的信号：如果外部贡献长期得不到反馈，可能抑制社区参与意愿。

### 🟢 低优先级 — 待合并的例行更新
**[PR #4067](https://github.com/nanocoai/nanoclaw/pull/4067)** — build(deps-dev): bump vitest 4.1.4 → 4.1.11
- 由 dependabot 于今日提交，状态 OPEN，属常规依赖升级，风险低。

---

**数据说明**：本日报全部内容基于 2026-10-09 提供的 NanoClaw GitHub 数据快照；部分 Issue/PR 摘要因数据截断而无法完整呈现（如 #4068 的 `drive.fi...`、v2026.10.0 的 "makes updates an..."），相关部分未做延伸推断。

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

# LobsterAI 项目日报（2026-10-09）

## 1. 今日速览

过去 24 小时项目无新增或活跃 Issues（0 条），无新版本发布，活跃度集中在代码评审侧：6 条 PR 更新，其中 4 条已合并/关闭、2 条待合并。合并的 PR 以稳定性修复为主线，覆盖 Windows 防火墙回环阻塞、配置锁残留、Library 目录监听崩溃三类真实用户故障，且多条修复直接来自 Windows 现场排障。同时有 2 条功能性 PR 处于待合并状态（Atlas Cloud 供应商接入、Windows 回环与网络过滤诊断采集器），显示项目在修 Bug 的同时仍保持供应商扩展节奏。

---

## 2. 版本发布

今日无新版本发布（过去 24 小时 Releases 数量为 0），本节略。

---

## 3. 项目进展

今日共有 4 条 PR 合并/关闭，全部为修复类或体验增强类变更，未见破坏性接口改动：

- **#2817 [CLOSED]** `fix(openclaw): allow loopback through Windows Firewall for the gateway`
  作者 fisherdaddy。修复 Windows 用户重启后应用等待 300s 网关启动超时的问题——原因是发往 `127.0.0.1` 的 `/startupz` 探测全部返回 "fetch failed"，根源是 Windows 防火墙默认阻断入站回环连接（网关本身以 LobsterAI.exe 运行）。
  链接：netease-youdao/LobsterAI PR #2817

- **#2819 [CLOSED]** `fix(openclaw): reclaim orphaned config locks and stop endless config recovery`
  作者 fisherdaddy。修复每次任务启动都重启网关、应用卡在「AI 引擎启动中」页面的问题，根因是 2026-09-07 一次配置写入遗留的 0 字节 `openclaw.json.lock`。这是对 Windows 用户现场问题的直接收敛。
  链接：netease-youdao/LobsterAI PR #2819

- **#2815 [CLOSED]** `fix(library): skip deleted artifact dirs when watching and purge expired missing items`
  作者 fisherdaddy。修复每次启动对已删除目录重复记录 `[Library] Unable to watch an indexed artifact directory ... (ENOENT)` 堆栈的问题（报告中同一错误出现 53 次）。
  链接：netease-youdao/LobsterAI PR #2815

- **#2816 [CLOSED]** `feat(desktop-companion): add translation and read-aloud cards`
  作者 btc69m979y-dotcom。桌面伴侣新增划词翻译与朗读卡片，工具栏保留 Translate / Read aloud / Copy / Ask 顺序，Explain、Summarize、Polish 与选择设置在次级入口。
  链接：netease-youdao/LobsterAI PR #2816

**整体推进评估**：今日合并的 3 条修复集中在同一产品面（Windows 上引擎启动链路）与同一日志面（Library 监听），属于「把用户可见的启动失败从根因上关掉」的工程，对稳定性的边际价值高于一般小修补；#2816 则是面向终端用户的交互能力增量。日粒度上项目处于健康的「修复收敛 + 稳步扩功能」状态。

---

## 4. 社区热点

今日 Issues 区无任何讨论。PR 区评论数据均为 `undefined`（无评论记录），👍 均为 0，因此不存在评论或反应层面的热点。

从内容关注度看，讨论密度最高的是 Windows 启动链路这一主题：**#2817、#2819** 由同一作者针对同一批 Windows 现场问题提交，且 **#2820** 明确说明其诊断能力是定位 #2817 所修故障的手段。#2820 摘要提到 #2817 修复的是「2026-10 现场案例」中的 Windows Firewall "Query user" 默认阻断，形成完整的「诊断 → 定位 → 修复」链条。

- 链接：netease-youdao/LobsterAI PR #2820 / PR #2817 / PR #2819

**诉求分析**：连续多条 PR 指向「Windows 环境下引擎已启动但客户端无法连上 127.0.0.1」这一共同症状，说明该问题在真实部署中具备一定复现面，且现有诊断手段不足（需要专门新增采集器），后续值得把回环连通性检查前置到安装/启动流程中。

---

## 5. Bug 与稳定性

按严重程度排列（均已有 fix PR，且均已合并/关闭）：

1. **严重 — 引擎启动失败导致应用不可用（Windows）**
   症状：重启后所有 `/startupz` 探测失败，应用空等 300s 网关启动超时，用户停留在「AI 引擎启动中」页面直至重启应用；每次任务启动还会重启网关。
   根因：Windows 防火墙默认阻断入站回环连接（#2817）；以及 0 字节 `openclaw.json.lock` 导致的无限配置恢复（#2819）。
   Fix：#2817 ✅ 已关闭、#2819 ✅ 已关闭。
   链接：netease-youdao/LobsterAI PR #2817、PR #2819

2. **中等 — 启动日志噪音 / 无效目录监听（全平台）**
   症状：每次启动对每个已删除的 Library 追踪项输出一条带堆栈的 ENOENT 错误（单份报告中达 53 次）。
   影响：不致命，但污染日志、掩盖真实错误，且缺少对过期缺失条目的清理。
   Fix：#2815 ✅ 已关闭（跳过已删除目录监听 + 清理过期缺失项）。
   链接：netease-youdao/LobsterAI PR #2815

今日无回归问题报告，无新开 Bug Issue。

---

## 6. 功能请求与路线图信号

今日 Issues 区无用户功能请求（0 条），路线图信号仅来自 PR：

- **#2818 [OPEN] `feat: add Atlas Cloud as a provider`**（作者 binyangzhu000-sudo）
  在 Global 区域、OpenRouter 旁新增 Atlas Cloud 供应商，改动 5 个文件 +38/-4，包含 `ProviderName.AtlasCloud`、label、website `https://www.atlascloud.ai`、console 的 apiKeyUrl 等配置。属于低风险、模式化的供应商接入，**具备进入下一版本的条件**，当前唯一阻塞点是尚未合并。
  链接：netease-youdao/LobsterAI PR #2818

- **#2820 [OPEN] `feat(support): add Windows loopback connection and network filter collectors`**（作者 fisherdaddy）
  为「引擎启动但连不上 127.0.0.1」的支持场景提供两项双击诊断采集器，正是定位 #2817 所涉防火墙问题的工具。**很可能随下一版本一并发布**，因为其价值依赖于已有修复的落地，且属于支持侧基础设施而非用户功能。
  链接：netease-youdao/LobsterAI PR #2820

- **#2816 已合并** 的划词翻译/朗读卡片，释放了「桌面伴侣交互扩展」方向的信号：Explain、Summarize、Polish 等能力被收纳到次级入口，后续若继续扩展，可能沿同一卡片化路径推进。

---

## 7. 用户反馈摘要

今日 Issues 区无内容，PR 评论数据缺失（`undefined`），因此无来自 Issue 评论区的用户原声。可从 PR 摘要中提取的间接用户反馈如下：

- **痛点（Windows 用户）**：重启后应用无法连接本地引擎，长时间卡在「AI 引擎启动中」，必须重启应用才能恢复；每次任务启动触发网关重启（PR #2819 摘要描述）。
- **痛点（日志可见性）**：Library 目录被删除后，每次启动反复输出错误堆栈，单份报告累计 53 次（PR #2815 摘要描述）。
- **满意点（隐含）**：划词翻译与朗读被做成选区旁的紧凑卡片，且工具栏保留 Translate / Read aloud / Copy / Ask 的固定顺序，说明用户对「选中文本后的即时操作」有明确使用场景（PR #2816 摘要描述）。

以上均为 PR 作者对用户场景的转述，非用户直接发言，解读时需注意来源层级。

---

## 8. 待处理积压

今日无长期未响应的 Issue（Issues 总数为 0）。待合并 PR 仅 2 条，且均为 2026-10-09 当日创建，尚不构成积压：

- **#2818 [OPEN]** 新增 Atlas Cloud 供应商 — 创建与更新均为 2026-10-09，改动小、模式清晰，建议优先评审。
  链接：netease-youdao/LobsterAI PR #2818
- **#2820 [OPEN]** Windows 回环与网络过滤诊断采集器 — 创建 2026-10-10、更新 2026-10-10，与已合并的 #2817 同源，建议一并推进以闭合该故障链路。
  链接：netease-youdao/LobsterAI PR #2820

**维护者提示**：今日数据中所有 Issues 与 PR 评论字段均为 `undefined`，无法评估社区互动质量。若该字段为采集缺口而非真实无评论，建议先修复数据管道，否则「社区热点」与「用户反馈」两个维度将持续为空，影响项目健康度判断。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-10-09

## 1. 今日速览

Moltis 今日整体活跃度**低**：过去 24 小时内 Issues 更新仅 1 条（新开 1、关闭 0），PR 更新为 0，新版本发布为 0。唯一动态是外部项目 A2Agent 主动提交的集成验证请求（Issue #1296），属于生态接入类外部发起讨论，而非项目内部功能推进。今日无任何代码合并或缺陷修复，项目向前推进量为零。值得注意的是该 Issue 目前 0 评论、0 反应，尚无维护者响应。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日无合并或关闭的 PR（待合并 0、已合并/关闭 0），无功能推进或缺陷修复记录。

## 4. 社区热点

今日仅有一条更新内容，即社区讨论焦点：

- **Issue #1296** — [Test an A2Agent profile through Moltis provider setup](https://github.com/moltis-org/moltis/issues/1296)
  - 作者：A2agent-ai｜创建/更新：2026-10-09｜评论：0｜👍：0｜状态：OPEN

**诉求分析**：发起方 A2Agent 是自称 OpenAI 与 Anthropic 兼容的模型网关。其核心诉求是请求 Moltis 维护者协助验证 A2Agent 在 Moltis 中的**最小可用接入路径**——即通过自定义 endpoint 走通 `moltis-providers` 层与 onboarding 流程。这反映出 Moltis 的 provider 抽象层已具备足够的扩展吸引力，能让第三方网关主动寻求兼容性验证；同时也暴露出外部接入方对 Moltis 自定义 provider 配置方式缺乏明确文档或参考样例，需依赖维护者直接指导。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告。

## 6. 功能请求与路线图信号

今日唯一 Issue #1296 属**生态集成类请求**，而非新功能需求：其内容是验证 A2Agent 通过 Moltis 自定义 provider 接入的最小路径。由于今日无任何相关 PR，暂无证据表明该请求已被纳入下一版本。若维护者响应，可能带来的路线图信号是：完善自定义 provider 的接入文档或 onboarding 支持。

## 7. 用户反馈摘要

今日无 Issues 评论数据，无法提炼来自评论的用户痛点或满意度反馈。

从 Issue #1296 正文本身可提取一条外部使用者信号（非评论来源）：A2Agent 认可 Moltis 具有"独特的 `moltis-providers` 层和 onboarding 流程"，并希望以此为基础验证自定义 endpoint 接入——说明该分层设计对第三方集成方具有实际价值，但接入路径的清晰度有待验证。

## 8. 待处理积压

- **Issue #1296**（[链接](https://github.com/moltis-org/moltis/issues/1296)）— 今日新开，尚无维护者响应，评论数为 0。虽为当日新建、尚不构成"长期未响应"，但作为唯一待处理项，建议维护者及时确认 A2Agent 的自定义 provider 接入路径，以维护生态集成体验。

---

**数据说明**：本日报所有内容均基于所提供的数据概览与 Issue #1296 摘要生成。除已列出的 Issue 条目外，未提供其他 Issue、PR 或 Release 数据，故相关章节据实省略。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-09

> 数据来源：github.com/agentscope-ai/CoPaw 过去 24 小时 GitHub 动态
> 注：本期数据中部分 Issues 链接指向 `agentscope-ai/QwenPaw`，与数据源标注的仓库名不一致，以下按数据原文保留链接。

---

## 1. 今日速览

过去 24 小时 CoPaw 保持高强度维护节奏：Issues 更新 20 条（新开/活跃 13、关闭 7），PR 更新 33 条（待合并 20、已合并/关闭 13），但**无新版本发布**。当日社区讨论集中在三类问题上——**上下文窗口/记忆管理异常**、**Console 前端稳定性与渲染错误**、以及一条**高严重度的 MCP Driver 远程代码执行安全报告**。合并侧以中小规模修复为主（EXIF 方向、媒体载荷恢复、Console 布局与设置页样式），大型特性 PR（插件热重载、记忆插件、多语言补齐）仍处于待合并状态，说明**修复在流动、大功能在排队**。整体健康度：活跃度**高**，但安全与上下文类问题的密度值得警惕。

---

## 2. 版本发布

无新版本发布。当日主要为 2.2.x / 2.2.2b 系列的问题反馈与修复流转。

---

## 3. 项目进展

今日已合并/关闭的 PR 主要推进了稳定性与前端体验修复：

- **[CLOSED] #8136** `fix(media): preserve EXIF orientation during image resizing` — 在缩放超大图片前应用 EXIF 方向信息，修复旋转/镜像图片在模型请求中方向错误的问题（对应 Issue #8129）。[链接](https://github.com/agentscope-ai/QwenPaw/pull/8136)
- **[CLOSED] #8010** `fix(agents): recover from media payload rejections instead of failing` — 修复被 provider 拒绝的媒体载荷长期残留在上下文中、导致会话永久不可用的问题（Fixes #8009）。[链接](https://github.com/agentscope-ai/QwenPaw/pull/8010)
- **[CLOSED] #8055** `fix(skills): offload pool download copy and sweep orphan stages` — 将技能池大文件下载（示例约 13k 文件 / 80MB）从事件循环内联操作中移出，并清理孤立暂存目录。[链接](https://github.com/agentscope-ai/QwenPaw/pull/8055)
- **[CLOSED] #8155** `feat(local-models): update QwenPaw-Flash 9B, 27B and 35B-A3B` — 更新本地模型推荐档位，新增 27B 与 35B-A3B（Q4_K_M / Q8_0）。[链接](https://github.com/agentscope-ai/QwenPaw/pull/8155)
- **[CLOSED] #8130** `fix(console): keep only the page title in settings headers` — 修复设置页卡片容器堆叠边框、界面被割裂的视觉问题。[链接](https://github.com/agentscope-ai/QwenPaw/pull/8130)
- **[CLOSED] #8145** `fix(console): wrap composer controls when space is limited` — 输入框控件在空间不足时的换行处理。[链接](https://github.com/agentscope-ai/QwenPaw/pull/8145)

**进展评估**：已合并 PR 多为 `size/S`~`size/M` 的缺陷修复，聚焦媒体处理、技能池 I/O、本地模型清单与 Console 视觉细节。项目在**稳定性与体验层面稳步向前**，但当日无版本发布，修复成果尚未打包交付用户。

---

## 4. 社区热点

按评论数与关注度排序：

1. **#7678 [CLOSED] `spawn subAgent` 全部超时失败**（评论 10）— 用户报告 `win2.2.0` 下只要触发 spawn subAgent，所有任务均失败、设置超长 timeout 也无效。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7678)
   → 诉求：**多智能体子任务的可靠性与可观测性**，用户已自行拉取调试记录但难以定位。

2. **#8134 [OPEN] 聊天记录与大模型上下文窗口关联**（评论 10）— “聊天记录说没就没了”，怀疑与上下文窗口机制强相关。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8134)
   → 诉求：**历史记录持久化与上下文管理策略的透明度**，用户对“记录消失”容忍度极低。

3. **#8040 [OPEN] embedding reindex 不完整，CJK 单块超 token 上限静默丢弃整批**（评论 5，2.2.1）— 循环日志显示 `processed=126/126` 成功，实际有 20 个 chunk 失败；报告指出此为 **#5950 的复发**。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8040)
   → 诉求：**批量失败不应被静默吞掉**，尤其涉及 CJK 文本分块边界。

4. **#8120 [OPEN] 频繁页面加载失败**（评论 4，2.2.2b4，多设备复现）— 已由 PR #8154 声明修复。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8120)

5. **#8153 [OPEN] [Security] MCP Driver 配置接口导致 root RCE**（评论 2，创建当日）— 报告生产服务器被植入 SSH 公钥与 systemd 挖矿木马。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8153)
   → 诉求：**配置接口的权限边界**，属最高优先级安全事件。

**热点分析**：讨论热度最高的是**上下文/记忆可靠性**与**子智能体执行可靠性**，两条都属于“智能体能否被信任”的根本性问题；安全议题虽评论数不高，但严重度远超其他条目。

---

## 5. Bug 与稳定性

按严重程度排列（标注是否已有 fix PR）：

### 🔴 严重

- **#8153 [OPEN] MCP Driver 配置接口 → root RCE + 挖矿木马植入** — 已有完整入侵证据链，攻击者可借配置接口以 root 执行任意命令并持久化。**未发现对应 fix PR。**[链接](https://github.com/agentscope-ai/QwenPaw/issues/8153)

### 🟠 高

- **#7678 [CLOSED] spawn subAgent 全部 timeout**（win2.2.0，评论 10）— 已关闭，但 Issue 内未体现根因说明。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7678)
- **#8134 [OPEN] 聊天记录丢失 / 与上下文窗口强关联** — **无 fix PR**。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8134)
- **#8040 [OPEN] embedding reindex 静默丢批（#5950 复发，CJK 超 token 上限）** — **无 fix PR**。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8040)
- **#8163 [OPEN] qwenpaw-creator 长路径破坏 Review decision journal（503 STORAGE_INTEGRITY_ERROR），残留空目录再阻塞重试（409 CAS_CONFLICT）** — Windows Server 2022，v2.0.1 与 v1.3.0 均复现。**无 fix PR**。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8163)

### 🟡 中

- **#8120 [OPEN] 频繁页面加载失败**（2.2.2b4，多设备）— **已有 fix PR #8154**（chunk 错误恢复与诊断）。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/8120) · [PR](https://github.com/agentscope-ai/QwenPaw/pull/8154)
- **#8162 [OPEN] OpenAI Responses API 流式事件空响应** — 会话运行 1–3 步后无提示中断；报告指出 `_parse_stream_response` 仅处理增量事件。**无 fix PR**。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8162)
- **#7994 [CLOSED] 上下文状态显示不更新、压缩不触发**（2.2.2b3/b4）— 上下文圈显示旧数据、91.7K/131.1K 超阈值不压缩。已关闭。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7994)
- **#8147 [CLOSED] 切换 agent 后 Console 崩溃：`crypto.randomUUID is not a function`**（2.2.2b4）。已关闭。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8147)
- **#8158 [OPEN] 模型将 Scroll 标题作为独立末段时，助手最终回答渲染为空气泡**（2.2.1）— **已有 fix PR #8159**。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/8158) · [PR](https://github.com/agentscope-ai/QwenPaw/pull/8159)
- **#8150 [OPEN] 飞书入站图文混发（post 内嵌图片）被静默丢弃** — 仅解析文字、不下载图片、无警告，为 #2792 出站方向的反向问题。**无 fix PR**。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8150)

### 🟢 低

- **#8143 [OPEN] Console 错误刷屏：Button size prop 向 svg 传入非数值 `small`**（2.2.2-beta.4）— **已有 fix PR #8157**。[Issue](https://github.com/agentscope-ai/QwenPaw/issues/8143) · [PR](https://github.com/agentscope-ai/QwenPaw/pull/8157)
- **#8129 [CLOSED] 图片缩放丢失 EXIF 方向** — 已由 PR #8136 修复。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8129)
- **#8009 [CLOSED] 超大图片写入上下文致会话永久不可用** — 已由 PR #8010 修复。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8009)
- **#7599 [CLOSED] opencode go 模型报 `MissingSessionID`**（v2.2.0）。已关闭。[链接](https://github.com/agentscope-ai/QwenPaw/issues/7599)

**稳定性观察**：当日 7 条 Issue 关闭、其中 4 条有对应修复 PR 落地，**修复闭环率尚可**；但**上下文/记忆链路（#8134、#8040、#7994、#8148）呈现系统性疲态**，#8040 明确为历史 Issue 复发，值得做根因层面的专项排查。

---

## 6. 功能请求与路线图信号

| Issue | 诉求 | 相关 PR / 判断 |
|---|---|---|
| [#8160](https://github.com/agentscope-ai/QwenPaw/issues/8160) | 新增西班牙语 (es) 界面语言，覆盖 Console / 官网 / 插件创建器 / 后端 | **PR #8161 已提交**（补齐 id/ja/pt-BR/ru/vi 的 locale parity 并抽取 UI locale maps），es 有望紧随其后纳入 |
| [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | Tool approval 卡片与通知文案硬编码英文，需 i18n | 与 #8160/#8161 同属国际化主线，**建议合并推进** |
| [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) | 新增 `view_audio` 内置工具（补全 image/video 的模态缺口） | 已 CLOSED，尚无对应 PR 可见 |
| [#8152](https://github.com/agentscope-ai/QwenPaw/issues/8152) | QwenPaw-Hub 添加账号时支持备注信息 | 轻量需求，**适合作为低风险增强排入小版本** |
| [#8148](https://github.com/agentscope-ai/QwenPaw/issues/8148) | 大 context_size 模型上 reasoning fold 与压力微压缩从不触发 | 与 #7994、#8040 同属上下文管理缺陷族，**建议与压缩策略重构一并评估** |

**路线图信号**：国际化（i18n）是本周期最明确的成体系方向——Issue 与 PR 相互呼应；上下文压缩/记忆管理则是**需求最密集但修复最零散**的领域，存在一次集中重构的必要。

---

## 7. 用户反馈摘要

- **对“记录消失”高度焦虑**：用户以“聊天记录说没就没了！！”表达强烈不满，且将其与上下文窗口机制挂钩，说明**上下文可视化的解释力不足**——用户看不出何时、为何被裁剪。（#8134）
- **超时与失败缺乏可诊断性**：spawn subAgent 全部失败时，“技术我不懂，结果你们看看”，用户被迫借外部 AI 产出调试记录，反映**错误信息对非技术用户不友好**。（#7678）
- **多设备一致复现的加载失败**：用户强调“我几台设备都遇到了”，说明不是单机环境问题，已直接影响日常体验。（#8120）
- **静默丢失类问题最伤信任**：飞书图文混发图片被丢弃且“无任何警告”（#8150）、embedding 批次失败但日志宣称全成功（#8040）——**静默失败**是用户反馈中最集中的不满模式。
- **对既有能力补全有明确期待**：`view_image`/`view_video` 已有而 `view_audio` 缺席，用户主动提出补全（#8081），显示其使用场景已覆盖音频理解。
- **平台兼容性痛点集中在 Windows**：多个 Issue 标注 win10 / Windows Server 2022 / WebView2（#7678、#8162、#8163、#8147、#8143），**Windows 侧路径长度、WebView 兼容与 crypto API 可用性构成一组共性风险**。

---

## 8. 待处理积压

长期未推进、值得维护者优先关注：

- **[OPEN] PR #7565** `feat(plugins): add clean unload and rollback-safe hot reload`（`size/XXXL`，创建于 2026-09-04，更新至 2026-10-10）— 插件清理卸载与可回滚热重载，避免失败更新把用户留在半应用状态。**已挂起逾一个月**，属插件生态核心能力。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7565)
- **[OPEN] PR #7613** `feat(memory): add OpenViking memory plugin`（`first-time-contributor, Under Review`，创建于 2026-09-07）— 自动召回 + 完成轮次持久化 + 显式 `memory_search` 工具。**首次贡献者 PR 悬挂超一个月**，且恰与当前最热的记忆/上下文议题方向一致。[链接](https://github.com/agentscope-ai/QwenPaw/pull/7613)
- **[OPEN] PR #8065** `fix(skills): sanitize skill_name before building staging paths`（`Under Review, size/S`，创建于 2026-10-01）— 修复 `skill_name` 直接插值进文件系统路径导致的 `../escape` 类穿越风险。**规模小、安全相关，应尽快裁决**。[链接](https://github.com/agentscope-ai/QwenPaw/pull/8065)
- **[OPEN] PR #8154** `fix(console): improve chunk error recovery and diagnostics`（`size/XXL`，Fixes #8120）— 虽为当日新建，但体积大且对应高频用户痛点，评审周期可能偏长，建议优先跟进。[链接](https://github.com/agentscope-ai/QwenPaw/pull/8154)
- **[OPEN] Issue #8040** — **#5950 的复发**，历史问题未彻底根治，建议升级为长期跟踪项而非单次修复。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8040)
- **[OPEN] Issue #8153** — 安全事件，**无 fix PR、无公开处置说明**，为当前积压中风险最高项。[链接](https://github.com/agentscope-ai/QwenPaw/issues/8153)

---

**一句话健康度判断**：修复管线运转正常且当日闭环 4 组 Issue-PR，但**记忆/上下文链路的系统性缺陷、历史 Bug 复发、以及一条未回应的 root RCE 安全报告**，是当前最需要集中资源的三处风险点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-10-09

> 数据来源：github.com/zeroclaw-labs/zeroclaw | 统计窗口：过去 24 小时

---

## 1. 今日速览

ZeroClaw 今日维持**高活跃度**：过去 24 小时 Issues 更新 26 条（新开/活跃 19、关闭 7），PR 更新 50 条（待合并 44、合并/关闭 6），无新版本发布。工作重心集中在**运行时与网关交付（v0.8.6 / v0.9.0）**、**成本计量准确性**与**安全/权限边界加固**三条主线。合并侧以 Bug 修复与测试稳定性居多（如 MCP 参数序列化、ZeroCode 队列暂停、CI flaky），说明项目处于"先稳后进"的阶段。同时，A2A 协议 crate、RAG 知识库、search_routes 等多个高风险 RFC 正在讨论中，架构性变更的决策压力正在积累。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭 6 条 PR、7 条 Issue，主要推进以下方向：

**Bug 修复落地**
- [#11371](https://github.com/zeroclaw-labs/zeroclaw/issues/11371) [CLOSED] MCP 嵌套对象参数在执行前被序列化为字符串的问题已关闭，属 v0.8.6 发布范围，直接影响 MCP 工具调用的正确性。
- [#10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741) [CLOSED] ZeroCode 在收到正常完成响应后静默暂停排队工作的问题已关闭。
- [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) [CLOSED] 成本记录携带 daemon 生命周期 session id、导致无法按会话拆分支出的问题已关闭，与今日的计量类修复形成合力。
- [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) [CLOSED] 并行运行时下 payload 捕获测试 flaky（S1，阻塞工作流）已关闭，测试基线更可靠。

**技术债清理**
- [#11545](https://github.com/zeroclaw-labs/zeroclaw/issues/11545) [CLOSED] 图像恢复落地后移除过时的 `StreamErrorWithUsage` 包装。
- [#10550](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) [CLOSED] 技能 HTTP DNS 解析受请求 deadline 约束并补齐调度接缝测试。
- [#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) [CLOSED] 超出单请求图像上限时改为批量驱逐图像块，减少 prompt cache 重写。

**整体判断**：本轮关闭以"修复既有缺陷 + 削减技术债"为主，未引入新能力，项目稳健性小幅提升。但 44 条 PR 仍在待合并队列中（其中多条为 XL 尺寸、risk:high），合并吞吐与评审带宽之间的张力值得关注。

---

## 4. 社区热点

| 议题 | 类型 | 评论 | 链接 |
|---|---|---|---|
| Maintainer decision queue for RFCs | Tracker | 15 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| Runtime and gateway delivery v0.8.6/v0.9.0 | Tracker | 6 | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| 超大图像降采样而非丢弃 | Enhancement | 6 | [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) |
| SQLite session backend 重写 created_at | Bug (P1) | 6 | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) |
| RFC: A2A protocol crate | RFC | 5 | [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) |

**诉求分析**：
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 作为维护者决策队列，评论数最高（15），反映 RFC/设计议题在等待裁决上存在积压——这是社区参与度上升与决策吞吐不匹配的典型信号。
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 是 v0.8.6 Phase 2 运行时与 v0.9.0 Phase 3 网关分离的唯一事实来源，其状态直接决定下一个里程碑。
- 多模态与协议扩展（[#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)、[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254)）热度上升，说明用户正把 ZeroClaw 推向更复杂的生产场景。

---

## 5. Bug 与稳定性

按严重程度排列（S1 = 阻塞工作流，S2 = 行为降级）：

**P1 / S1**
- [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) Telegram 监听器可被黑洞请求永久挂死——`listener_health` 能检测到陈旧但无任何恢复机制。**尚无 fix PR**，涉及 channel 层可用性。
- [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) Telegram 发送路径忽略 429 的 `retry_after`，立即重试加剧限流，回复可能完全丢失。**尚无 fix PR**。
- [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) SQLite session 后端每轮重写整个 transcript，导致所有消息 `created_at` 被覆盖为同一时间戳，逐消息时序丢失。**尚无 fix PR**。
- [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) 同一轮内重跑已批准的 shell 命令会中止 agent loop 并结束 ACP 会话（由 DefuzeX 通过 KUMA 工具报告）。**尚无 fix PR**。

**P2 / S2**
- [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) OpenRouter 支出显示 $0.00、所有 token 被归为 "free tok"，`usage.cost` 从未被摄取。
- [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) 成本账本丢弃 provider 的 `total_tokens`，隐藏推理 token（如兼容 OpenAI 协议的 Gemini）被系统性少计。
- [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) ZeroCode Agent 轮次禁用了重复工具调用防护。

**已有 fix PR 关联**
- PR [#11617](https://github.com/zeroclaw-labs/zeroclaw/pull/11617) `fix(agent): close the steering channel before a turn finishes` 修复 turn 完成前 steering channel 未关闭导致网关收到错误 `Ok` 的问题。
- PR [#11587](https://github.com/zeroclaw-labs/zeroclaw/pull/11587) `fix(runtime): apply config/set cost limits to the live cost tracker`，与 #10700、#11204、#11613 的成本计量问题同属一条修复脉络。

**趋势观察**：成本计量类问题今日集中出现 3 条（#10700 已关闭、#11204、#11613），说明该子系统存在系统性缺陷，而非孤立 Bug；Telegram channel 的两条 P1 缺陷同源（HTTP 客户端无超时、无退避），建议合并处理。

---

## 6. 功能请求与路线图信号

**多模态与容量管理**
- [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) 超大图像应降采样而非直接丢弃，并允许将多模态限制设为 0 以禁用。当前状态为 `status:blocked` + `status:parking-lot`，标记 risk:high，短期落地概率低。
- [#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) 图像批量驱逐（已关闭），与本条共同指向"多模态资源管理"这一能力缺口的持续投入。

**协议与架构 RFC**
- [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) 提议新增 A2A 协议 crate（zeroclaw-a2a），将 #9106 建立的出站客户端与入站发现逻辑收敛为独立边界，`needs-maintainer-review`。
- [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) 知识语料库 / 文档检索（RAG）——让 agent 能基于运维自带文档、语言与工具文档作答。
- [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) `[[search_routes]]`：为 `web_search_tool` 增加基于 hint 的 provider 路由，仿照既有 `[[model_routes]]`。

**已有实现 PR 支撑、较可能进入下一版本**
- PR [#11467](https://github.com/zeroclaw-labs/zeroclaw/pull/11467) `feat(agent): add opt-in single-tool provider rounds`，对应 #10222，默认关闭的单工具轮次控制。
- PR [#11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473) `feat(tools): defer built-in schemas through tool_search`，默认关闭的内置工具 schema 延迟加载，可显著压缩上下文占用。
- PR [#11462](https://github.com/zeroclaw-labs/zeroclaw/pull/11462) `feat(delegate): route independent child approvals to the target operator`，delegate 子任务的审批路由。
- PR [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) `feat(config): report per-target application results`，配置变更的实际生效结果上报。

**判断**：三个 RFC（A2A、RAG、search_routes）均属 capability boundary 或架构级变更，且在 #8692 决策队列中排队，短期内更可能先定案而非直接排期；而 #11467/#11473/#11462 系列已有 PR 且为默认关闭的 opt-in 设计，风险可控，进入 v0.9.0 的可能性相对更高。

---

## 7. 用户反馈摘要

- **多模态体验不佳**：图像超限被直接拒绝，模型仅被告知"N 个附件图像无法加载"，用户希望降采样保留信息（[#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)）。
- **成本可见性不可信**：OpenRouter 用户跑完约 90 次请求 / 约 2.1 M token 后，Dashboard 的 Session/Daily/Monthly 全部显示 `$0.000000`（[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)）；兼容 OpenAI 协议的用户发现含隐藏推理 token 的模型被系统性少计（[#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)）。成本数据不可信直接影响生产采用决策。
- **会话时序数据丢失**：每轮对话后 SQLite 中所有消息时间戳被统一覆盖，任何依赖逐消息时间的下游功能失效（[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)）。
- **渠道可靠性**：Telegram 用户遭遇监听器永久挂死与 429 重试风暴，属于生产环境不可接受的 S1 问题（[#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608)、[#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615)）。
- **第三方安全测试参与**：DefuzeX 通过其开源 SDK KUMA 报告了 agent 循环中止问题（[#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612)），表明项目已吸引外部 agent 行为安全测试方的关注，是生态健康度的正面信号。
- **本地模型支持诉求**：ZeroCode 在 llama.cpp 等本地兼容 provider 上上下文用量表长期空白（PR [#9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453)），本地部署用户对功能对等性有明确期待。

---

## 8. 待处理积压

**长期未决、需维护者关注的议题**
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（创建于 2026-07-04，已存续约 3 个月）维护者决策队列本身即积压指标：评论数最高但为 tracker 性质，RFC 裁决吞吐是当前瓶颈。
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（创建于 2026-06-09，约 4 个月）v0.8.6 / v0.9.0 运行时与网关交付 tracker，横跨两个发布版本，是路线图关键路径。
- [#9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453)（创建于 2026-07-27，约 2.5 个月）`fix(runtime): estimate context usage when provider omits token counts`，标记 `breaking-change`、size:XL，涉及 ZeroCode 上下文计量，长期未合并。
- [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)（创建于 2026-08-10，约 2 个月）被标记 `status:blocked` + `status:parking-lot`，需要明确是等待依赖还是需要重新设计。
- [#11408](https://github.com/zeroclaw-labs/zeroclaw/pull/11408)、[#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410)、[#11411](https://github.com/zeroclaw-labs/zeroclaw/pull/11411)、[#11422](https://github.com/zeroclaw-labs/zeroclaw/pull/11422)、[#11423](https://github.com/zeroclaw-labs/zeroclaw/pull/11423) 构成一个由 Aarlington 提交的 **权限/鉴权加固堆叠（stack）**，各 PR 互相依赖（#11408 依赖 #11220、#11234；#11411 依赖 #11410、#11266；#11422 依赖 #11411；#11423 依赖 #11422）。整条链均为 size:XL，评审需按堆叠顺序推进，建议维护者给出明确的评审排期。

**提示**：当前待合并 PR 达 44 条，其中多条为 XL + risk:high 且标注 `needs-author-action`，建议维护者在合并新功能前优先处理已闭合 Issue 对应的 PR 队列，避免评审债务继续累积。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*