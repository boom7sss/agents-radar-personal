# OpenClaw 生态日报 2026-11-27

> Issues: 360 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-27 19:29 UTC

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

# OpenClaw 项目日报 — 2026-11-27

> 数据来源：OpenClaw GitHub 仓库过去 24 小时活动（Issues 360 条、PR 500 条、新版本 0 个）。以下内容均基于所提供数据，未作外部推断。

---

## 1. 今日速览

项目今日维持**高活跃度**：Issues 更新 360 条（新开/活跃 220、关闭 140），PR 更新 500 条（待合并 271、合并/关闭 229），提交与评审吞吐量显著高于安静日。但活跃度背后是**稳定性压力集中**：多条 P0/P1 且带 `impact:crash-loop`、`impact:message-loss`、`impact:session-state` 标签的历史 Bug 在今日仍处于 OPEN 状态，更新路径（prepared-release、update 回滚、candidate Doctor）成为今日讨论主战场。值得注意的两个结构性信号：一是大量 `clawsweeper:no-new-fix-pr` 标签表明**已知问题缺少可落地的修复 PR**；二是 271 条待合并 PR 与多条 `status: ⏳ waiting on author` 显示**评审侧与作者侧的往返延迟正在积累**。无新版本发布，当前稳定线以 2026.11.x 系列为主，但 2026.11.4→2026.11.8、2026.11.6 等版本的用户报告仍指向回滚与回归问题。

---

## 2. 版本发布

今日无新版本发布（Releases 数量：0）。以下为 Issues 中提及的版本状态供参考，**不构成发布公告**：

- 2026.11.5-beta.2 → beta.4 更新失败（[#200756](https://github.com/openclaw/openclaw/issues/200756)）
- 2026.11.4 → 2026.11.8 stable 回滚（[#204816](https://github.com/openclaw/openclaw/issues/204816)）
- 2026.11.6 拒绝读取压缩会话归档（[#202213](https://github.com/openclaw/openclaw/issues/202213)，已关闭）
- 2026.11.10 在 Tailscale Serve/Funnel 下更新失败（见 PR [#205443](https://github.com/openclaw/openclaw/pull/205443)）

---

## 3. 项目进展

今日合并/关闭的 PR 与 Issue 中，可确认推进的方向如下：

- **更新路径设计收敛**：[#204775](https://github.com/openclaw/openclaw/issues/204775)（prepared-release 状态、归属与计划）持续活跃，51 条评论，明确以"停止在相同文件上互相冲突"为目标，是更新链路的中枢协调项。
- **更新验证修复**：PR [#205443](https://github.com/openclaw/openclaw/pull/205443)（P1）针对 Gateway 使用 Tailscale Serve/Funnel 时 `openclaw update` 在 candidate-gateway-startup 检查处失败的问题，标注 `proof: sufficient`、`ready for maintainer look`，是今日最接近落地的更新修复之一。
- **CI/测试基础设施清理**：PR [#206883](https://github.com/openclaw/openclaw/pull/206883)（已关闭，修复 update handoff 测试中 worker 导出丢失）、[#206903](https://github.com/openclaw/openclaw/pull/206903)（已关闭，检测过早回收后台任务）、[#203844](https://github.com/openclaw/openclaw/pull/203844)（已关闭，等待惰性工具摘要渲染）、[#158553](https://github.com/openclaw/openclaw/pull/158553)（已关闭，Linux Quick Chat 键盘焦点）。
- **减少冗余库写入**：PR [#206893](https://github.com/openclaw/openclaw/pull/206893)（已关闭）避免在 prompt report 更新时回写整段已保存技能的 prompt。

**整体评估**：今日合并/关闭的 229 条 PR 中，可见部分以测试与 CI 稳健性、小幅修复为主；更新链路与内存问题的核心修复仍处在设计或等待评审阶段，项目"向前迈进的幅度"在基础设施层明显，在稳定性根因层有限。

---

## 4. 社区热点

按评论数排序的讨论焦点：

1. **[#204775](https://github.com/openclaw/openclaw/issues/204775) Design: prepared-release updates（51 条评论）** — 更新路径的共享设计文档。诉求：多方并行修改同一批文件导致冲突，需要明确的状态机与 ownership。
2. **[#192547](https://github.com/openclaw/openclaw/issues/192547) 降低受限 ARM64 主机上的 Gateway 启动内存（30 条评论，`impact:crash-loop`）** — 1 GiB cgroup 下 Gateway 能就绪但在首次模型响应前 OOM。诉求：低资源边缘设备上的可用性。
3. **[#153426](https://github.com/openclaw/openclaw/issues/153426)（已关闭，P0，`diamond lobster`）记忆根被 provenance ratchet 静默永久排除（28 条评论，👍3）** — 涉及 `impact:security`、`impact:session-state`，用户对"无诊断、无 CLI、无恢复路径"表达强烈不满。
4. **[#200756](https://github.com/openclaw/openclaw/issues/200756) Windows beta.2→beta.4 package-swap 失败（22 条评论）** 与 **[#200606](https://github.com/openclaw/openclaw/issues/200606)（已关闭）candidate Doctor 阻止更新** — 两者共同反映 Windows 与更新验证链路的脆弱性。
5. **[#114612](https://github.com/openclaw/openclaw/issues/114612)（已关闭）memory-core SQLite 无界增长（20 条评论，`diamond lobster`）** — 缺乏 retention/eviction 策略。

**诉求归纳**：社区当前最集中的关切是**更新流程的可靠性**与**内存/SQLite 的长期资源治理**，而非新功能。

---

## 5. Bug 与稳定性

按严重程度排列（`impact:crash-loop` / `impact:message-loss` / `impact:security` / P0 优先）：

| 严重度 | Issue | 摘要 | Fix PR 状态 |
|---|---|---|---|
| P0 | [#126821](https://github.com/openclaw/openclaw/issues/126821) | WSL2 上全新重建 SQLite 在 15–24h 内损坏，5 天 5 次，含"瘫痪网关"不退出模式 | `clawsweeper:no-new-fix-pr`，无 fix PR |
| P0 | [#152275](https://github.com/openclaw/openclaw/issues/152275) | 插件激活失败后模型目录与回复分发不可用直至重启 | `no-new-fix-pr` |
| P0 | [#202518](https://github.com/openclaw/openclaw/issues/202518) | claude-cli 在 sessions_spawn + sessions_yield 后不关闭，后续轮次复用死会话（2026.11.6 回归） | `no-new-fix-pr` |
| P0 | [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex 受保护续接阻塞所有后续消息，Stop 报告无活动运行 | `no-new-fix-pr` |
| P0 | [#141413](https://github.com/openclaw/openclaw/issues/141413) | macOS 应用对本地 Gateway 的 SecretRef 令牌不发送（👍2） | `needs-security-review` |
| P1 | [#181432](https://github.com/openclaw/openclaw/issues/181432) | 2026.10.5 基线 RSS 由 ~300 MB 升至 1.89 GB，伴 SQLite 事务超时 | `needs-info` |
| P1 | [#204816](https://github.com/openclaw/openclaw/issues/204816) | 2026.11.4→2026.11.8 验证通过后回滚，doctor-failed / Invalid config | `queueable-fix`，`fix-shape-clear` |
| P1 | [#196820](https://github.com/openclaw/openclaw/issues/196820) | Control UI 在 `Element.getAnimations()` 循环中 ~100% CPU 锁死 | `no-new-fix-pr` |
| P1 | [#206669](https://github.com/openclaw/openclaw/issues/206669) | Windows SQLite 完整性 worker 判完不退出，每库强制等待 300s 预算（今日新开） | `no-new-fix-pr` |
| P1 | [#149406](https://github.com/openclaw/openclaw/issues/149406) | sessions_spawn 子会话缺失全部第三方 MCP 工具 | `needs-security-review` |
| P2 | [#163107](https://github.com/openclaw/openclaw/issues/163107) | HEIC `view_image` 失败且每次泄漏 ~250–400 MB RSS | `no-new-fix-pr` |
| P2 | [#127195](https://github.com/openclaw/openclaw/issues/127195) | 16 处调用点抛出逐字节相同的错误，无原因码 | `fix-shape-clear`，较接近可修 |

**结论**：今日可见的 P0 级问题**普遍没有对应 fix PR**（`clawsweeper:no-new-fix-pr`），项目稳定性风险主要不是"发现不足"，而是"修复供给不足"。

---

## 6. 功能请求与路线图信号

- **Active Memory 升级决策委派**：[#151178](https://github.com/openclaw/openclaw/issues/151178) 提议增加 opt-in、单属主的 escalation provider，让插件在确定性通道无强命中时决定是否深召回。状态 `needs-product-decision` + `linked-pr-open`，**存在关联 PR，具备进入下一版本的可能性**。
- **Cron 作业终止条件**：[#130247](https://github.com/openclaw/openclaw/issues/130247) 请求 `--until` / `--max-runs` 与累计运行计数。状态 `needs-product-decision`，长期未定。
- **模型请求失败文案可运营化**：[#167341](https://github.com/openclaw/openclaw/issues/167341) 允许运维覆盖分类后的失败提示文案，诉求为多语言/品牌场景。`needs-product-decision`。
- **Dreaming MEMORY.md 晋升预算可配置**：[#158897](https://github.com/openclaw/openclaw/issues/158897)（已关闭）请求把固定 10,000 字符上限改为可配置。
- **/tts latest 长度限制说明**：PR [#206490](https://github.com/openclaw/openclaw/pull/206490) 关闭 #206096，选择"解释限制而非截断"，属体验层小步改进。

**判断**：今日功能请求几乎全部卡在 `needs-product-decision`，短期内路线图信号不强；真正可能近期落地的是已在 PR 中的体验类改动（如 #206490，#205319 文档补充 whisper.cpp 语言检测说明）。

---

## 7. 用户反馈摘要

- **更新流程是最大痛点**：Windows（#200756）、stable 线（#204816）、Tailscale 场景（#205443）三处报告指向同一模式——候选验证通过后仍在 package-swap / 激活阶段失败并回滚，用户对"验证通过≠可用"缺乏预期。
- **资源占用不可控**：ARM64 小内存主机（#192547）、基线 RSS 暴涨（#181432）、SQLite 无界增长（#114612）、HEIC 处理泄漏（#163107）共同反映用户在多平台（ARM64、WSL2、Windows、macOS）上遭遇内存与磁盘的非线性增长。
- **静默失败最难容忍**：#153426 与 #127195 的核心抱怨不是 Bug 本身，而是"无诊断、无原因码、无恢复路径"。用户明确表达了在无法定位原因时的无力感。
- **会话状态与消息丢失**：#194403、#202518、#146311（多账号群聊 transcript 重复回显）、#194664 均涉及会话无法继续或消息丢失，直接影响日常使用。
- **安全顾虑被直接提出**：#141413（令牌未发送）、#149406（子会话缺 MCP 工具）以及 #205007（非结构化、疑似误报的安全报告被以 `needs-security-review` 接收）显示安全审查队列在承接真实与噪声混合的输入。
- **正面信号**：TTS、UI 预加载（#206793）、macOS 连接释放（#206913）、OAuth 失败解释（#206910）等小改进显示团队在产品打磨层仍有持续投入。

---

## 8. 待处理积压

长期挂起且影响面大的条目，建议维护者优先分诊：

- **[#58289](https://github.com/openclaw/openclaw/issues/58289)**（2026-03-31 创建，`platinum hermit`，`linked-pr-open`）— 非主 agent 缺 models.json 导致 "Unknown model"。挂起超过 7 个月，含关联 PR。
- **[#112638](https://github.com/openclaw/openclaw/issues/112638)**（2026-07-22，`stale`，`diamond lobster`）— `session.maintenance` enforce 模式不约束存储，thread/channel 条目豁免回收。
- **[#114612](https://github.com/openclaw/openclaw/issues/114612)**（已关闭，但作为 `dedupe:parent` 仍值得追踪其父项）— SQLite 无界增长的治理需确认是否已有后续追踪 issue。
- **[#113159](https://github.com/openclaw/openclaw/issues/113159)**（2026-07-23，`diamond lobster`）— 用量限额冷却忽略非 OpenAI 供应商的真实重置时间。
- **[#130247](https://github.com/openclaw/openclaw/issues/130247)**（2026-08-26，`stale`）— Cron 无终止条件，已挂起三个月。
- **PR [#126257](https://github.com/openclaw/openclaw/pull/126257)**（2026-08-19 创建，`waiting on author`）— macOS Gateway 设置提示本地化，超三个月未推进。
- **PR [#158554](https://github.com/openclaw/openclaw/pull/158554)**（2026-09-26，XL 体量，`waiting on author`）— Linux 桌面快捷会话，依赖 #158553（今日已关闭），可考虑重新评估。
- **PR [#201280](https://github.com/openclaw/openclaw/pull/201280)**（XL，`waiting on author`，明确标注"Do not land"）— 一次性自动化移入运行历史，需与 @vyctorbrzezowski 对齐后决定去留。

**健康度提示**：**271 条待合并 PR** 加上多条 `waiting on author` 与 `needs-product-decision`，说明瓶颈已从"提交量"转向"决策与评审带宽"。建议对 `clawsweeper:no-new-fix-pr` 标记的 P0 条目设立显式修复归属，否则今日的高活跃度将难以转化为稳定性改善。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比 — 2026-11-27

> 数据来源：各项目 2026-11-27 GitHub 仓库活动摘要。以下内容严格基于所提供材料，未作外部推断；数据缺项按原摘要保留。

---

## 1. 生态全景

今日生态呈现明显的**两极分化**：OpenClaw 以单日 360 条 Issue、500 条 PR 的绝对体量维持生态中心地位，但活跃度背后是 P0 缺陷普遍缺乏修复 PR 的"修复供给不足"；而多数中小项目（NanoBot、NanoClaw、CoPaw、ZeroClaw、Hermes Agent）维持在 10–50 量级的 Issues/PR 双高运转，处于**架构清理与质量巩固**阶段。局部出现一次架构级事件——LobsterAI 完成智能体引擎从 OpenClaw 迁移至 DeepSeek Harness（DSH）并发布 2026.11.27，涉及 106 个 PR。同时 5 个项目（NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw）过去 24 小时零活动，说明该赛道项目数量虽多但活跃面集中。跨项目看，**更新/配置可靠性、上下文预算管理、可观测性缺失**是反复出现的共性痛点，而非新功能诉求。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（新/关） | PR 更新（待合并/合并关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 360（220 / 140） | 500（271 / 229） | 无 | 高活跃、稳定性压力大：多条 P0 带 `no-new-fix-pr`，271 条待合并积压 |
| **NanoBot** | 13（5 / 8） | 19（8 / 11） | 无 | 良好：积压净减少，架构清理为主，provider 兼容短板累积 |
| **Hermes Agent** | 50（49 / 1） | 50（38 / 12） | 无 | 中上：响应链路顺畅，但 38 待合并存在评审吞吐风险 |
| **PicoClaw** | 2 | 3（待合并 1 / 关闭 2） | 无 | 中低：新功能信号弱，积压 8 个月的批量 PR 今日清理 |
| **NanoClaw** | 4（全新开 / 0） | 10（7 / 3） | 无 | 良好但高敏感：3 条新 Bug，含安全语义缺陷 #4580（已有对应 PR） |
| **LobsterAI** | 1（账号申诉） | 20（0 / 20） | **2026.11.27（DSH 迁移）** | 高吞吐：单日 20 PR 全闭，迁移后期稳定化，rc 引擎有风险 |
| **CoPaw** | 18（13 / 5） | 26（18 / 8） | 无 | 吞吐健康但主干红测：Creator App Tests 红灯、Cron API 全量 500 |
| **ZeroClaw** | 14（12 / 2） | 50（50 / 0） | 无 | 审查拥堵：50 PR 零合入，S0/S1 新 Bug 3 条，发现快于修复 |
| **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | 无 | 无活动 |

**读数**：单日 PR 更新量 OpenClaw（500）> Hermes/ZeroClaw（各 50）> CoPaw（26）> LobsterAI（20）> NanoBot（19）> NanoClaw（10）> PicoClaw（3）。合并率方面，LobsterAI 达 20/20、NanoBot 11/19、CoPaw 8/26；ZeroClaw 为 0/50，积压最严重。

---

## 3. OpenClaw 在生态中的定位

**规模优势**：单日 Issue+PR 更新 860 条，约为第二梯队（Hermes 100 条）的 8 倍以上，评论热度也最高（#204775 单条 51 条评论），是事实上的生态参照系——NanoClaw、LobsterAI 均在其生态话语中出现（LobsterAI 初版引擎即基于 OpenClaw）。

**技术路线差异**：
- OpenClaw 的讨论重心是**运行时与治理**（prepared-release 更新状态机、candidate Doctor 验证、memory-core SQLite retention、Active Memory 委派），走"重运行时、强验证、多影响面标签体系"的路线；
- 而其下游/同类项目更多聚焦**接入面扩张**：NanoBot 在渠道回复格式下发与 MCP 代理层做解耦，ZeroClaw 在 MCP 工具链路与 provider 家族扩张，Hermes 在 Windows/Termux 多平台适配。OpenClaw 更接近"平台内核"，其余项目更接近"分发与集成层"。

**社区规模对比的反面**：OpenClaw 的优势同时是负担——其 P0 缺陷（WSL2 SQLite 损坏 #126821、插件激活失败 #152275、claude-cli 死会话 #202518 等）普遍标 `clawsweeper:no-new-fix-pr`，说明**发现能力远强于修复供给能力**；而 NanoBot、NanoClaw 等小项目虽规模小，但今日均有"问题—PR"同日闭环（如 NanoClaw #4543→#4581、PicoClaw #3475→#3476）。OpenClaw 的护城河在于生态位与讨论量，短板在于决议与评审带宽（271 待合并 + 多条 `waiting on author` + `needs-product-decision`）。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **更新/配置可靠性** | OpenClaw、NanoClaw、ZeroClaw、Hermes、LobsterAI | OpenClaw："验证通过≠可用"的更新回滚（#204816、#200756、#205443）；NanoClaw：rootless Docker 服务单元配置无效（#4583）；ZeroClaw：quickstart 写坏配置块（#12773）；Hermes：配置静默失效（#108620、#160675）；LobsterAI：审批超时竞态（#3230） |
| **上下文预算与 token 经济性** | NanoBot、CoPaw、OpenClaw、PicoClaw | NanoBot：本地 tokenizer 离线阻塞（#3647）、标题生成预算耗尽（#6718）、长粘贴污染上下文（#6806）；CoPaw：压缩历史不可达（#8744、#8882）；OpenClaw：Dreaming MEMORY.md 晋升预算（#158897） |
| **资源治理 / 内存与存储** | OpenClaw、ZeroClaw、CoPaw、NanoBot | OpenClaw：ARM64 OOM（#192547）、基线 RSS 暴涨（#181432）、SQLite 无界增长（#114612）、HEIC 泄漏（#163107）；ZeroClaw：markdown memory 并发丢条目（#10797）；CoPaw：`llama-server.exe` 孤儿进程（#8830）；NanoBot：MCP 空闲超时回收（#4506） |
| **可观测性 / 静默失败** | OpenClaw、NanoBot、CoPaw、ZeroClaw、Hermes | 五项目均出现"无诊断、无原因码、无恢复路径"或"doctor 误报全绿"类反馈（OpenClaw #153426/#127195、NanoBot #6786、CoPaw #8949、ZeroClaw #12766/#12767、Hermes #130824/#160675） |
| **MCP / 工具目录治理** | NanoBot、ZeroClaw、Hermes、OpenClaw | NanoBot：BM25 按需发现大工具目录（#6824）、通用工具调用防重放（#4522）；ZeroClaw：MCP 工具级排除（#12772）、启动期 MCP 重试（#12769）；Hermes：MCP 与内置 toolset 同名冲突（#160675→#160876） |
| **远程/容器化部署解耦** | NanoClaw、NanoBot、ZeroClaw、Hermes | NanoClaw：session runner 不依赖宿主目录（#4543→#4581）；NanoBot：内网 Docker + 代理下 SSRF 与 NO_PROXY（#6811）；Hermes：多 profile 冷启动与作用域（#146035、#160841）；ZeroClaw：健康探针与 MCP 启动耦合（#12766） |
| **安全边界收紧** | NanoClaw、OpenClaw、Hermes、PicoClaw、LobsterAI | NanoClaw：存消息被当命令执行（#4580）；OpenClaw：令牌未发送（#141413）、子会话缺 MCP（#149406）；Hermes：`computer_use` 前台审批（#156670）；PicoClaw：附件下载绕过代理（#3477）；LobsterAI：反向代理触发风控封禁（#3225） |

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Hermes Agent | NanoClaw | CoPaw | ZeroClaw | LobsterAI | PicoClaw |
|---|---|---|---|---|---|---|---|---|
| **功能侧重** | 平台内核 + 强验证更新链 + 记忆治理 | 多渠道接入 + 技能/工具目录精简 | 多 profile + 插件生态（holographic/trismegistus）+ 多模态 fast-path | 会话运行器解耦 + Agent 镜像滚动 | Console 聊天体验 + 长期记忆 + 企业版上游整合 | MCP 工具链路 + 本地小模型 profile + provider 扩张 | 桌面客户端 + IM 群聊 + 技能市场 | 轻量 web/IM 渠道 |
| **目标用户** | 大型自托管/多 agent 部署 | 多 provider、内网部署用户 | 多 profile/多平台（含 Windows/Termux）用户 | 远程/K8s/沙箱运行时用户 | Console 用户 + 企业部署方 | 本地小模型自托管运维者 | 桌面 + 即时通讯企业用户 | 个人轻量部署 |
| **技术架构关键差异** | 重运行时、影响面标签体系、Doctor 验证门 | 渠道 manifest 下沉、MCP 代理层 | profile 作用域 + gateway + 插件目录 | runner/宿主目录解耦、可选 HTTP mailbox Skill | Code Mode 工具链 + 治理层双拦截 | MCP bundles + runtime profile 契约 | 引擎已切换 DSH（`@deepseek-ai/dsh@0.2.2-rc.5`） | 单体轻量 |

**关键判断**：架构分化已从"功能多少"转向"**部署形态与运行时解耦程度**"——NanoClaw 的宿主目录解耦、ZeroClaw 的 MCP 启动解耦、NanoBot 的渠道 manifest 化，都是同一方向的三种表达。LobsterAI 的引擎替换是最激进的路线选择，其代价是当日 20 条 PR 几乎全部用于迁移回归修补。

---

## 6. 社区热度与成熟度

**活跃度分层**：
- **第一层（超高频）**：OpenClaw（860 更新/日）——已在"规模运维"阶段，瓶颈是决策与评审带宽。
- **第二层（高频迭代，10–50 量级）**：Hermes（100）、ZeroClaw（64）、CoPaw（44）、NanoBot（32）、LobsterAI（21）、NanoClaw（14）。
- **第三层（低频）**：PicoClaw（5）、零活动 5 项目。

**成熟度阶段划分**：
- **快速迭代 / 架构变动期**：LobsterAI（DSH 迁移后的稳定化，rc 引擎）、CoPaw（插件化拆分后的回归消化，主干红测）、NanoBot（渠道/工具架构清理，积压净减少）。
- **质量巩固期**：NanoClaw（存量修复收口：3 个月/8 个月积压 PR 关闭）、PicoClaw（8 个月批量 PR 清理，但新功能信号弱）、Hermes（测试隔离与 CI 修复为主）。
- **积压临界点**：ZeroClaw（50 PR 零合入，S0/S1 缺陷无对应 PR 居多）、OpenClaw（271 待合并 + P0 缺 fix PR）——两者均面临"高活跃度难以转化为稳定性改善"的结构性风险。

---

## 7. 值得关注的趋势信号

1. **"验证通过≠可用"成为信任裂痕**：OpenClaw 更新链路三处独立报告（Windows/stable/Tailscale）均指向候选验证通过后仍回滚；NanoClaw、ZeroClaw 的"配置向导走完但无效"是同类问题的下游形态。对开发者的参考：**发布门与激活门需要分离设计，且必须在激活失败时给出可恢复路径**。

2. **静默失败比崩溃更具破坏性**：跨 5 个项目反复出现的"无原因码/doctor 误报全绿/健康检查绿色但工具已丢失"（OpenClaw #127195、ZeroClaw #12767、NanoBot #6786、Hermes #130824、CoPaw #8949），说明**可观测性已成为智能体系统的核心质量指标**而非附加项。

3. **工具生态进入"目录治理"阶段**：NanoBot #6824（BM25 按需发现）、ZeroClaw #12772（工具级排除）、Hermes #160675（同名冲突）、OpenClaw #149406（子会话工具缺失）共同表明——**工具数量增长后，schema 携带成本、权限收敛、命名冲突成为新的工程主战场**。

4. **部署形态向远程/容器/沙箱迁移**：NanoClaw #4543（宿主目录解耦）、NanoBot #6811（内网 Docker 代理）、ZeroClaw #12766（探针重启循环）显示用户已从单机走向 K8s/托管/沙箱，**运行时应假设无法挂载宿主卷、无法本地解析 DNS**。

5. **上下文经济性成为体验主线**：NanoBot 的 token 估算阻塞、标题预算截断、长粘贴污染，与 CoPaw 的压缩历史不可达，共同指向**上下文预算需要显式的、可预测的、离线可用的管理机制**。

6. **本地小模型是差异化赛道**：ZeroClaw #5287 持续讨论近 8 个月（11 评论、2 👍，已 accepted/in-progress），诉求为紧凑 runtime profile 与 prompt-budget 契约，反映本地部署用户对**可预期性与内部指令防泄漏**的强需求。

7. **引擎可替换性成为产品决策变量**：LobsterAI 用 106 个 PR 将引擎从 OpenClaw 换成 DSH，证明**引擎层已可被抽象与迁移**，但也暴露迁移成本高度集中在 IM 路由、审批逻辑、技能机制三处——对计划做引擎迁移的团队是可复用的风险清单。

8. **外部贡献的接纳标准亟待明确**：CoPaw 的 XS/S 小 PR 批量排队、NanoBot 多条 conflict PR 滞留（#5666 近三月）、Hermes 38 条待合并跨 2–3 个月，提示**维护者需要集中的冲突消解批次与明确的 upstream 接纳标准**，否则外部贡献意愿将流失（当前 NanoClaw、CoPaw、PicoClaw 均有外部作者主动提交实现的正面信号）。

---

*说明：本报告严格依据 2026-11-27 各项目日报数据；NanoClaw 原文链接域名（`nanocoai/nanoclaw`）与数据概览（`qwibitai/nanoclaw`）存在不一致，已按原样保留未作改写。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-11-27

## 1. 今日速览

项目今日处于高活跃维护状态：24 小时内 13 条 Issue 更新（新开/活跃 5、关闭 8）、19 条 PR 更新（待合并 8、合并/关闭 11），无新版本发布。关闭量高于新开量，积压呈净减少趋势。合并内容集中在渠道回复格式重构、Hebrew 本地化、MCP 代理修复等工程性改进，说明维护者正在做架构清理而非堆叠新功能。同期仍有多条 provider 兼容性 Bug（Kimi、Anthropic、Claude 路径）未闭环，属于稳定性短板。整体健康度良好，但 provider 矩阵扩张带来的边缘兼容问题正在累积。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 11 条 PR 中，主要推进方向如下：

- **渠道回复格式下沉** — PR #6816 将稳定的回复格式指引移入渠道 manifest，使渠道自行声明回复格式，不再在核心维护渠道名单，直接解决 #6810 中"共享身份模板需为 WebSocket 客户端单独说明数学格式"的耦合问题。链接: HKUDS/nanobot PR #6816
- **MCP 远程连接代理修复** — PR #6818 修复网关无法本地解析服务器主机名时，SSE 与 Streamable HTTP 在联系所选代理前即中止的问题，使"Use proxy"开关对内网/代理部署真正生效。链接: HKUDS/nanobot PR #6818
- **Hebrew 本地化补全** — PR #6819 为五个共享命令目录共 157 条命令补齐 `he` 翻译，PR #6820 同步更新 Telegram 菜单测试期望值。链接: HKUDS/nanobot PR #6819 / PR #6820
- **WebUI 消息编辑重发** — PR #6323（自 2026-10-20 挂起后关闭）实现同会话内编辑并重发用户消息，SQLite 将截断与新输入原子提交。链接: HKUDS/nanobot PR #6323
- **通用工具调用防重放** — PR #4522 把原先仅覆盖 web_fetch/web_search 的重复调用保护扩展到所有工具，避免 read_file、list_dir 等失败后陷入循环。链接: HKUDS/nanobot PR #4522
- **MCP 空闲超时回收** — PR #4506 为 MCPServer 引入 `idle_timeout`，自动终止僵尸进程释放内存。链接: HKUDS/nanobot PR #4506

其中 #4522、#4506 自 2026-06-25 起长期挂起，今日关闭属于积压清理，对稳定性有实质价值。

## 4. 社区热点

- **#6718 WebUI 标题生成在 Kimi K3.1 Pro 下失败**（3 条评论）— 通过 OpenAI 兼容提供商接入时，96 token 预算被耗尽，主题始终停留在 "Untitled"，主回复正常。链接: HKUDS/nanobot Issue #6718
- **#6806 WebUI 长文本自动转为工作区文件**（2 条评论）— 用户粘贴日志、文章、配置时整段内联进消息，污染对话记录并膨胀上下文。链接: HKUDS/nanobot Issue #6806
- **#3647 用本地 tokenizer 估算 prompt token**（2 条评论，已关闭）— `tiktoken.get_encoding("cl100k_base")` 依赖网络实现，离线时调用会阻塞数秒。链接: HKUDS/nanobot Issue #3647

背后诉求一致：**用户对"可预测的离线行为"和"上下文经济性"敏感**。token 估算被网络拖慢、标题生成被预算截断、粘贴文本挤占上下文，本质都是同一类上下文预算管理问题。

## 5. Bug 与稳定性

按严重程度排列（高 → 低）：

1. **#6786 Anthropic thinking 块签名失效（高）** — 会话内上下文压缩后恢复会话报 `Invalid signature in thinking block`，会话不可用；且 `nanobot -m` 会隐藏该错误，排障困难。已关闭，未见对应 fix PR 编号。链接: HKUDS/nanobot Issue #6786
2. **#6785 Anthropic Haiku 5.x 拒绝手动 thinking 预算（高）** — 只要 `reasoningEffort` 不是 `adaptive`/`none`（如 `"medium"`），所有请求即失败。已关闭。链接: HKUDS/nanobot Issue #6785
3. **#6811 内网 Docker 下 web_fetch 与 HTTP MCP 不可用（中高）** — SSRF 预检查强制要求本地 DNS，且共享代理忽略 `NO_PROXY`。已关闭；PR #6818 已修 MCP 侧代理路径，web_fetch 侧未见对应 PR。链接: HKUDS/nanobot Issue #6811
4. **#6598 自定义图像提供商静默丢弃 reference_images（中）** — `custom` OpenAI-Images 路径无 `/images/edits`，用户请求编辑却拿到无关新图且无报错。仍 OPEN，暂无 fix PR。链接: HKUDS/nanobot Issue #6598
5. **#6817 无文本工具调用后历史 cache_control 标记丢失（中）** — OpenAI 兼容 Claude 路径下，历史以无文本 assistant tool call 结尾时缓存断点被丢弃，仅 system 段生效。仍 OPEN，新报。链接: HKUDS/nanobot Issue #6817
6. **#6809 WebSocket 回复缺少数学渲染提示（低）** — 默认 system prompt 未说明如何为 WebUI/TUI 书写公式，模型可能把公式放进行内代码。已关闭，由 PR #6816 从架构层面消解。链接: HKUDS/nanobot Issue #6809

风险提示：Anthropic 相关两条 Bug 已关闭但未见明确修复来源，建议在 issue 中回填 fix commit 以利追溯。

## 6. 功能请求与路线图信号

- **#6824 按需发现大型工具目录（BM25）** — 针对数百个插件/MCP 工具场景，避免每次模型调用都携带全部 schema，小目录仍直连、大目录本地检索且不用 embedding。引用 #5298。OPEN，设计完整，是今日最具路线图价值的 PR。链接: HKUDS/nanobot PR #6824
- **#6821 发现项目与用户级 `.agents` 技能** — 支持 `<project>/.agents/skills/` 与 `~/.agents/skills/` 免安装加载。OPEN。链接: HKUDS/nanobot PR #6821
- **#5405 技能仅手动调用模式** — 为部署、发布等有副作用的技能提供显式用户触发，禁止模型自动广告与 `always: true` 预载。OPEN，长期挂起。链接: HKUDS/nanobot PR #5405
- **#6823 Google AI Ultra 订阅 OAuth（草稿）** — 让 Ultra 订阅用户免 API Key 使用配额，参照 pi 的集成方案。OPEN。链接: HKUDS/nanobot PR #6823
- **#6822 文件管理器** — Docker 部署下查看/下载文件不便，请求仿 Hermes agent 的上传下载界面。今日新开，0 评论。链接: HKUDS/nanobot Issue #6822

判断：#6824 与 #6821 与今日合并的架构清理方向（渠道/技能解耦、工具目录精简）高度一致，最可能进入下一版本；#6822 尚属需求收集阶段。

## 7. 用户反馈摘要

- **内网/代理部署是真实且痛的场景**：用户以 Docker Compose `internal: true` 网络 + mihomo 代理运行 0.4.2，期望 SSRF 防护不假设本地 DNS 可用（#6811）。
- **多模型接入体验参差**：用户持有多个 keyed provider，DuckDuckGo 默认搜索在限流或歧义错误时会失败，希望以路由型 provider 兜底（#6812 WebRouter、#6813 TrustedRouter 均已关闭）。
- **离线可用性**：无网络时 token 估算阻塞数秒，影响交互流畅度（#3647）。
- **对话记录整洁度**：长粘贴内容污染 transcript 是被明确指出的体验问题（#6806）。
- **错误可观测性不足**：`nanobot -m` 隐藏 thinking 块错误，用户难以自助排障（#6786）。
- **透明度良好**：#6807 的 Hebrew 支持提案由 AI agent 全流程完成并主动披露，体现社区对 AI 贡献的开放态度。链接: HKUDS/nanobot Issue #6807

## 8. 待处理积压

- **PR #5666 aimlapi.com 网关提供商** — 自 2026-09-04 挂起近三个月，标注 conflict。作者已自行完成技术接入，长期未决对外部贡献者信号不佳，建议给出明确结论或关闭。链接: HKUDS/nanobot PR #5666
- **PR #5152 子代理部分完成标记** — 自 2026-07-28 起开放，涉及后台任务公告归属，#5152 未见推进。链接: HKUDS/nanobot PR #5152
- **PR #6477 工具参数解码消毒** — 自 2026-10-26 开放，标注 conflict，属历史回放安全性修复。链接: HKUDS/nanobot PR #6477
- **PR #5405 技能仅手动调用** — 自 2026-08-16 开放，安全相关，建议优先给出版本计划。链接: HKUDS/nanobot PR #5405
- **Issue #6598 图像编辑静默失败** — 自 2026-11-08 起无 fix PR，用户拿到错误结果且无任何报错，属功能性缺陷而非体验问题。链接: HKUDS/nanobot Issue #6598

积压特征清晰：**多条标注 conflict 的 PR 停留在与主线架构演进的冲突中**（#5666、#6477，#4522/#6323 今日方才清理），建议维护者安排一次集中的冲突消解批次，避免外部贡献流失。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-27

> 数据来源：Hermes Agent (github.com/nousresearch/hermes-agent) 过去 24 小时 GitHub 活动。以下内容仅基于所提供数据整理。

---

## 1. 今日速览

- 项目保持高活跃度：过去 24 小时 Issues 更新 50 条（新开/活跃 49，关闭 1），PR 更新 50 条（待合并 38，已合并/关闭 12），无新版本发布。
- 今日无 Release，工程活动集中在缺陷修复与测试隔离上，多个 PR 以“salvage”形式接续他人工作，显示协作密度较高。
- 近期问题高度集中在 **Windows / Termux 平台兼容性**、**gateway 会话与冷启动**、**profile 作用域**三条主线，多个 P2 缺陷已进入活跃讨论。
- PR 侧出现针对今日新开 Issues 的快速修复响应（如 #160876 对应 #160675，#160873 对应 #160722），问题响应链路较顺畅。
- 健康度观察：待合并 PR（38）显著多于已合并/关闭（12），存在合并积压风险，需关注评审吞吐。

---

## 2. 版本发布

今日无新版本发布（最新 Releases：无）。跳过该部分。

---

## 3. 项目进展

今日已合并/关闭的 PR 共 12 条，所提供明细中可见 2 条关闭 PR：

| PR | 状态 | 内容 | 推进意义 |
|---|---|---|---|
| [#108620](https://github.com/NousResearch/hermes-agent/pull/108620) | CLOSED | fix(desktop): 让桌面端遵循配置的语音录制上限（此前被硬编码 120s 覆盖 `voice.max_recording_seconds`） | 修复桌面端配置不生效的用户可见缺陷 |
| [#160857](https://github.com/NousResearch/hermes-agent/pull/160857) | CLOSED | ci(release): macOS 产物记录改用 ruamel.yaml | 解除 macOS 发布流水线的 canary 阻塞 |

整体评估：今日合并/关闭量偏低，进展主要体现在桌面端与 CI 发布链路的收尾修复。**功能层面的推进有限**，主要动能集中在 bug 修复与测试隔离（见 #160873），尚无明显的功能合并落地。

---

## 4. 社区热点

按评论数排序的高讨论条目：

1. **[#146035](https://github.com/NousResearch/hermes-agent/issues/146035)**（8 评论，P2, comp/gateway, area/profiles）
   bot-relay 邮箱“根作用域歧义”——profile 作用域写入把 relay 拆到两个位置，导致跨机器 agent 私信停滞。**诉求**：多 profile 部署下消息中转的路径一致性与作用域确定性。

2. **[#145156](https://github.com/NousResearch/hermes-agent/issues/145156)**（7 评论，P2, os/windows）
   Windows 上 Kanban worker 在使用 `holographic` memory provider 时导入 numpy 永久挂起。**诉求**：Windows + 特定插件组合的启动可靠性。

3. **[#146383](https://github.com/NousResearch/hermes-agent/issues/146383)**（5 评论，P2, comp/desktop）
   Windows 桌面端切换标签页/会话卡顿 4–8 秒，其中 `prefers-reduced-motion` 下 `*` 的 `transition-duration:.01ms` 约贡献 1 秒。**诉求**：桌面端性能与无障碍设置的兼容处理。

4. **[#101493](https://github.com/NousResearch/hermes-agent/issues/101493)**（5 评论，P3, 自 2026-09-02 长期开放）
   HUD 模式输入框方位硬编码，请求支持 top/bottom/edge-aware 设置。

5. **[#152551](https://github.com/NousResearch/hermes-agent/issues/152551)**（5 评论，P2, os/windows）
   Windows 上 Kanban worker 在首次模型调用前挂起（git 子进程继承 stdin 控制管道）。

6. **[#156670](https://github.com/NousResearch/hermes-agent/issues/156670)**（4 评论，P4, type/security, os/macos）
   `computer_use` 应避免占用用户当前显示器，且前台投递需审批（即使在 yolo 模式）。

**分析**：讨论热度集中在多 profile/多会话状态一致性与 **Windows 平台稳定性**两大主题。Windows 相关问题在 Top 6 中占 3 条，构成当前最突出的平台风险面。

---

## 5. Bug 与稳定性

按严重程度与影响面排列（P2 为主，附 fix PR 状态）：

| Issue | 平台/组件 | 症状 | Fix PR |
|---|---|---|---|
| [#146035](https://github.com/NousResearch/hermes-agent/issues/146035) | gateway / profiles | relay 根作用域歧义，跨机器 agent DM 停滞 | 未见 |
| [#145156](https://github.com/NousResearch/hermes-agent/issues/145156) | Windows / memory | Kanban worker 导入 numpy 永久挂起 | 未见 |
| [#152551](https://github.com/NousResearch/hermes-agent/issues/152551) | Windows / agent | 首次模型调用前挂起（stdin 管道继承） | 未见 |
| [#158513](https://github.com/NousResearch/hermes-agent/issues/158513) | Termux/Android | `os.link` 不存在，硬链接原子创建崩溃，入站轮次全失败 | 未见 |
| [#160841](https://github.com/NousResearch/hermes-agent/issues/160841) | gateway / telegram | 多 profile 冷启动串行长轮询，4 个 bot 启动 45.8s | 未见 |
| [#160675](https://github.com/NousResearch/hermes-agent/issues/160675) | gateway / mcp | 与内置 toolset 同名的 MCP server 条目移除内置工具集（如 `memory`） | **#160876**（OPEN，salvage #160689） |
| [#160722](https://github.com/NousResearch/hermes-agent/issues/160722) | CLI / config | `HERMES_CONFIG_BACKEND` 测试泄漏，约 300 个顺序相关失败 | **#160873**（OPEN，salvage #160750） |
| [#157321](https://github.com/NousResearch/hermes-agent/issues/157321) | gateway | turn worker reset 与首次导入竞争，误 retirement 健康 worker | 未见 |
| [#109002](https://github.com/NousResearch/hermes-agent/issues/109002) | wecom / gateway | 重启 drain 窗口内每条消息各回一次相同提示 | 未见 |
| [#55431](https://github.com/NousResearch/hermes-agent/issues/55431) | agent / ACP / copilot | 畸形 JSON 的 `<tool_call>` 被剥离但未执行（静默动作丢失） | **#160875**（OPEN，接受 `{"name","arguments"}` 结构） |
| [#160675](https://github.com/NousResearch/hermes-agent/issues/160675) | memory / mcp | 同 #160675（见上） | #160876 |
| [#130824](https://github.com/NousResearch/hermes-agent/issues/130824) | Wayland / computer_use | doctor 全绿但截图找不到窗口，`native_wayland` 选项不可发现 | 未见 |
| [#148413](https://github.com/NousResearch/hermes-agent/issues/148413) | gateway / TUI | `session.list` 丢 preview/show_subagents，历史上限 200 无分页 | 未见 |
| [#152738](https://github.com/NousResearch/hermes-agent/issues/152738) | cron / kanban | auto-decompose 消费 block-loop 升级的 triage 卡，产生幽灵扇出 | 未见 |

**修复进展**：3 条已有关联 fix PR（#160876、#160873、#160875），其中两条为今日新开 Issue 的即时响应。其余高影响项（Windows 挂起、Termux 崩溃、relay 作用域、Telegram 冷启动）暂无 fix PR，建议优先投入。

---

## 6. 功能请求与路线图信号

| 功能需求 | 关联 PR 信号 | 纳入下一版本可能性评估 |
|---|---|---|
| [#160879](https://github.com/NousResearch/hermes-agent/pull/160879) CLI `/profile <name>` 切换与选择器 | 已有 OPEN PR（P3） | 明确候选，实现完整，评审通过即可进入 |
| [#160119](https://github.com/NousResearch/hermes-agent/pull/160119) 原生音频与文档（PDF/Office）fast-path | 已有 OPEN PR（P3，stacked on #158926） | 多模态扩展方向，依赖前置 PR 合入 |
| [#110527](https://github.com/NousResearch/hermes-agent/pull/110527) session-owned toolsets（插件按会话注册一次性工具集） | 已有 OPEN PR（P3） | 架构级特性，价值高但评审周期可能较长 |
| [#146434](https://github.com/NousResearch/hermes-agent/issues/146434) 每个 agent 一个用户可见名称，规范 ID 内部化 | 作者表示愿自行实现并提 PR | 需设计确认，作者主动性强 |
| [#139678](https://github.com/NousResearch/hermes-agent/issues/139678) Desktop 内管理多 Codex 账户 | 暂无 PR | 涉及认证路径，落地周期中等 |
| [#156670](https://github.com/NousResearch/hermes-agent/issues/156670) `computer_use` 显示器隔离与前台审批 | 暂无 PR（P4, security） | 安全向需求，优先级取决于多显示器用户占比 |
| [#127840](https://github.com/NousResearch/hermes-agent/issues/127840) Discord `approval_mentions` 扩展到 clarify 提示 | 暂无 PR | 小范围增强，易于实现 |
| [#79199](https://github.com/NousResearch/hermes-agent/issues/79199) 更新/重启前审计并确认陈旧 pending delegation | 暂无 PR | 涉及会话状态，与 sweeper 基线相关 |

**信号解读**：插件生态（holographic、trismegistus）与多模态 fast-path 是 PR 侧的主要功能推进方向；#160547（holographic 0.33.2 固定版本）与 #160874（trismegistus v0.3.3）显示 plugin-catalog 正在积极迭代。

---

## 7. 用户反馈摘要

基于 Issues 摘要与评论热度提炼的痛点：

- **多 profile 部署的一致性痛感最强**：relay 作用域分裂（#146035）、Telegram 多 bot 冷启动串行（#160841）、gateway 会话作用域（#144151 PR）共同指向“一份配置、多个隔离身份”场景下的状态管理复杂性。
- **Windows 桌面端体验亟待改善**：卡顿（#146383）与 worker 挂起（#145156、#152551）叠加，Windows 用户对稳定性和性能的抱怨集中。
- **移动/边缘平台可用性不足**：Termux/Android 因 Python 构建缺少 `os.link` 导致全量入站失败（#158513），反映对非标准运行环境的适配缺口。
- **配置“静默失效”引发困惑**：语音录制上限不读配置（#108620，已修）、doctor 误报全绿（#130824）、与内置工具同名的 MCP 条目静默移除工具（#160675）——用户对“看起来正常但没生效”的反馈较强烈。
- **正向信号**：多条 issue 作者主动提出自行实现（#146434），并结合修复 PR 的快速响应，社区贡献意愿较高。

---

## 8. 待处理积压

长期开放、建议维护者优先关注：

| 条目 | 创建日期 | 已开放时长 | 说明 |
|---|---|---|---|
| [#55431](https://github.com/NousResearch/hermes-agent/issues/55431)（Copilot ACP 静默动作丢失，P3） | 2026-06-30 | 约 5 个月 | 有 fix PR #160875，可推进关闭 |
| [#79199](https://github.com/NousResearch/hermes-agent/issues/79199)（更新/重启前审计 pending delegation，P2） | 2026-08-05 | 约 3.5 个月 | 会话状态风险，无 PR |
| [#101493](https://github.com/NousResearch/hermes-agent/issues/101493)（HUD 输入框方位设置，P3） | 2026-09-02 | 约 3 个月 | 讨论活跃但无实现 |
| [#109002](https://github.com/NousResearch/hermes-agent/issues/109002)（wecom 重启 drain 重复提示，P2） | 2026-09-12 | 约 2.5 个月 | 用户可见噪音，无 PR |
| [#130824](https://github.com/NousResearch/hermes-agent/issues/130824)（Wayland computer-use doctor 误报，P3） | 2026-10-01 | 约 2 个月 | 有 👍 1，可发现性问题 |
| PR [#110527](https://github.com/NousResearch/hermes-agent/pull/110527)（session-owned toolsets，P3） | 2026-09-14 | 约 2.5 个月未合并 | 架构级特性，需评审决定取舍 |
| PR [#105549](https://github.com/NousResearch/hermes-agent/pull/105549)（gateway 取消与 flush 延迟，P2） | 2026-09-08 | 约 2.5 个月未合并 | 关联 sweeper:risk-message-delivery |
| PR [#108620](https://github.com/NousResearch/hermes-agent/pull/108620)（语音录制上限） | 2026-09-11 | 今日已关闭 | 已闭环，可归档 |

**提醒**：待合并 PR 累计 38 条，其中多条横跨 2–3 个月未决（#110527、#144151、#105549），建议安排集中评审，避免贡献者流失与分支腐化。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-27）

## 1. 今日速览

今日项目活跃度处于**中低水平**：过去24小时仅 2 条 Issue 更新、3 条 PR 更新，无新版本发布。两条新 Issue 均指向真实可用性问题（Telegram 附件下载绕过代理、Web 聊天输入卡顿），后者已由同一作者提交修复 PR #3476，响应链路较完整。两条关闭 PR（#1555、#1560）均为 3 月创建的批量合并 PR，属于长期积压清理而非新功能推进。整体健康度尚可，但新功能侧无明显信号，需关注积压 PR 的持续消化。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日无新功能合入。关闭的 2 条 PR 均为历史积压的批量合并请求：

- **PR #1555** [CLOSED]（创建于 2026-03-14）：合并 #1390、#1389、#1383、#1381 的修复。链接：sipeed/picoclaw PR #1555
- **PR #1560** [CLOSED]（创建于 2026-03-14）：合并 #1312、#1311、#1308 的修复。链接：sipeed/picoclaw PR #1560

两者从创建到关闭历时约 8 个多月，说明项目管理上存在较长的积压窗口。今日关闭是清理动作，项目功能面向前推进有限。

## 4. 社区热点

今日讨论量整体很低（最高评论数 1），无显著热点。相对受关注的两条 Issue：

- **#3477 Telegram 渠道附件下载绕过 settings.proxy**（1 条评论）——涉及代理配置的一致性，影响受限网络环境下的可用性。链接：sipeed/picoclaw Issue #3477
- **#3475 Web 聊天输入卡顿**（1 条评论）——已配套提交修复 PR #3476。链接：sipeed/picoclaw Issue #3475

背后诉求集中在**配置项应全局生效**与**长会话下前端性能**两个方向。

## 5. Bug 与稳定性

按影响程度排列：

1. **【中高】Telegram 附件下载绕过代理（Issue #3477，OPEN）**：Telegram 渠道下载附件（图片、文件）时使用直连，忽略 `settings.proxy`；仅 Bot API 客户端（telego）走代理。在只能经代理访问 api.telegram.org 的网络中，附件功能实际不可用。**暂无对应 fix PR。**
2. **【中】Web 聊天输入卡顿（Issue #3475，OPEN）**：在 0.3.1 版本、web 渠道、超长会话且显示推理与工具输出时，输入明显卡顿。根因据 PR 描述为草稿编辑触发历史消息重渲染及重复的 Markdown 解析、语法高亮。**已有 fix PR #3476（OPEN）**，属依赖问题已定位、等待合并状态。

无崩溃或回归类问题报告。

## 6. 功能请求与路线图信号

今日无明确的新功能请求，两条 Issue 均为缺陷类。可纳入下一版本的候选为：

- **PR #3476**（fix(web): isolate chat draft updates from message rendering）：将草稿更新与消息渲染隔离，直接对应 #3475，合并后即可解决 Web 端卡顿，是今日最可能进入下一版本的变更。链接：sipeed/picoclaw PR #3476
- **Issue #3477** 的代理一致性修复目前尚无 PR，若被采纳，可考虑将渠道级网络请求统一纳入代理配置层。

## 7. 用户反馈摘要

- **使用场景**：用户在 Ubuntu 22.04 服务器部署 PicoClaw 0.3.1，AI 模型使用 deepseek，通过 Windows Chrome 访问 web 渠道；另有用户在受限网络下使用 Telegram 渠道并依赖代理。
- **不满意点**：长会话下 Web 输入体验下降（卡顿、stuttering）；代理配置未覆盖附件下载路径，造成“配置了却不起作用”的困惑。
- **满意度**：数据中无正面评价或点赞（均为 👍0），暂无法判断满意面。

## 8. 待处理积压

- **PR #1555 与 #1560** 虽已于今日关闭，但均创建于 2026-03-14，积压超 8 个月，建议维护者复盘为何此类批量合并 PR 长期滞留。链接：sipeed/picoclaw PR #1555 、sipeed/picoclaw PR #1560
- **Issue #3477** 目前仅 1 条评论、无 fix PR，属影响特定网络环境可用性的问题，建议优先确认排期。链接：sipeed/picoclaw Issue #3477

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-27

## 1. 今日速览

项目今日处于**高活跃、多线程推进**状态：24 小时内 4 条 Issue 全部为新开且均未关闭，10 条 PR 中有 7 条待合并、3 条合并/关闭，但没有新版本发布。核心议题集中在**会话运行器（session runner）与宿主目录解耦**这条主线上——Issue #4543 与配套 PR #4581 同日出现，显示"远程/托管/K8s 运行时接入"正在成为下一阶段的主攻方向。稳定性方面，今日新报 3 个与 rootless Docker、端口绑定、命令注入相关的 Bug，其中 #4580 涉及消息内容被当命令执行，安全敏感度最高。整体健康度良好但需注意：若 #4580 的语义缺陷成立，会直接影响所有启用 `ignored_message_policy='accumulate'` 的部署。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭 3 条 PR：

- **#3300 [CLOSED] fix(agent-runner): escape the attachment type in agent-facing XML** — 修复 `container/agent-runner/src/formatter.ts` 中 `formatAttachments` 遗漏对 `type` 字段转义的问题（其余字段均已转义）。属安全加固类修复。创建于 2026-08-17，历时约 3 个月才关闭。链接：nanocoai/nanoclaw PR #3300
- **#1402 [CLOSED] Fix per-group trigger_pattern matching** — 修复分组级 `trigger_pattern` 匹配问题，创建于 2026-03-24，积压约 8 个月后关闭。链接：nanocoai/nanoclaw PR #1402
- **#4308 [CLOSED] chore(deps): bump actions/checkout from 4.4.0 to 7.0.1** — 依赖升级（Dependabot），属仓库维护类。链接：nanocoai/nanoclaw PR #4308

**评估**：今日合入的多为存量修复与维护项，两项功能性修复（#3300、#1402）均属"长期挂起后收口"，说明维护者正在清理历史积压，但单日功能增量有限。真正的前瞻性推进仍停留在待合并的 PR 池中（见第 6 节）。

## 4. 社区热点

今日整体讨论量偏低（仅 Issue #4543 有 2 条评论，其余均为 0 评论、0 👍），热度集中在：

- **#4543 [OPEN] [capability] Network mailbox so session runners don't need a shared session dir**（2 条评论，今日唯一有多轮讨论的条目）
  nanocoai/nanoclaw Issue #4543
  诉求：当前 session runner 必须挂载宿主 session 目录（两个 session DB、heartbeat、outbox），导致无法看到宿主路径的运行时——远程/托管运行器、Kubernetes、OpenShell 等沙箱运行时——全部被排除在外。背后的真实诉求是**部署形态解耦**：让 NanoClaw 能跑在无法挂载宿主卷的环境中。
- 同日配套 **#4581 [OPEN] feat(skills): add /add-remote-mailbox — session mailbox over HTTP instead of a mounted session dir**（chiptoe-svg）
  nanocoai/nanoclaw PR #4581
  以 Skill 形式给出 HTTP mailbox 方案，说明该需求已有可评审的实现路径。

其余 Issue/PR 今日均为零互动，社区讨论热度整体不高。

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 条目 | 说明 | 是否已有 fix PR |
|---|---|---|---|
| **高（安全语义）** | **#4580 [OPEN] [bug] A stored message that reads as /clear or /upload-trace runs as a command on the next turn** | 在 `ignored_message_policy='accumulate'` 的会话中，被存下的消息若内容形似 `/clear` 或 `/upload-trace`，会在下一轮被当作命令执行（`main` @ 6b57f87f8，macOS，属 runner 逻辑） | **有**：PR #4289（见下） |
| 中（配置/权限） | **#4583 [OPEN] Rootless Docker: setup writes the user unit without the user's Docker endpoint, then suggests setfacl on the system socket** | v2026.11.0 与当前 `main`（`setup/service.ts`）：服务用户使用 rootless Docker 时，CLI 可正常工作（依赖用户 Docker context 或 `DOCKER_HOST`），但生成的 user unit 未带上对应用户端点，随后反而建议对系统 socket 执行 setfacl | 无 |
| 中（网络/防火墙） | **#4582 [OPEN] Gateway webhook server listens on port 0, so a host firewall that limits loopback cannot allow it** | v2026.11.0 与当前 `main`（`src/channels/chat-sdk-bridge.ts` 中 `server.listen(0, '127.0.0.1', …)`）：本地 webhook 服务绑定随机 loopback 端口，限制 loopback 的宿主防火墙无法放行 | 无 |

**对应修复 PR**：**#4289 [OPEN] fix(agent-runner): keep context beside a command pending**（glifocat，2026-11-06 创建）
nanocoai/nanoclaw PR #4289
问题描述为：当 `/clear` 或 `/upload-trace` 与其它全为累计上下文的行同批到达 runner 时，存储的上下文会错误地开启一轮对话。该 PR 与 #4580 描述高度对应，建议维护者确认二者是否指向同一根因并优先推进。

**评估**：#4582、#4583 均由同一用户（carstenf）在今日针对 v2026.11.0 提交，指向**部署/运维路径**的体验缺陷，目前无修复 PR，需关注是否会在下一补丁版本中处理。

## 6. 功能请求与路线图信号

- **网络 mailbox / 远程会话运行器**：Issue #4543 + PR #4581 构成完整"需求—实现"对，且 PR 采用 Skill 交付（`/add-remote-mailbox`，走 HTTP 而非挂载目录）。这是今日最明确可能进入下一版本的候选方向，可显著扩展 Kubernetes / 托管 / 沙箱运行时的支持面。
- **Agent 镜像滚动更新**：bot PR **#4579**（`v2026.11.0 -> v2026.11.0-20261127T0412`）与 **#4578**（`v2026.11.0 -> v2026.11.0-20261126T1756`）均为对 `v2026.11.0` 的 hardened image 替换，属日常镜像刷新，非功能变更。链接：nanocoai/nanoclaw PR #4579 、 nanocoai/nanoclaw PR #4578

## 7. 用户反馈摘要

- **部署环境受限是核心痛点**（#4543）：用户希望在无法挂载宿主路径的环境中运行 agent，反映出实际使用场景已从单机扩展到远端/托管/K8s/沙箱。
- **配置与文档一致性不足**（#4583）：rootless Docker 场景下 CLI 能跑、服务单元跑不通，且给出误导性的 setfacl 建议——用户对"能跑但服务化失败"的落差反馈明确。
- **防火墙/端口可预测性需求**（#4582）：随机端口与受限 loopback 策略冲突，说明有用户在受管控主机上部署。
- **消息语义边界需收紧**（#4580）：存储消息被误判为命令，属用户可感知的行为异常，影响信任度。
- 今日无正面满意度反馈样本可引用（Issues 评论仅 #4543 有 2 条，未提供具体内容）。

## 8. 待处理积压

- **PR #2896 [OPEN] fix(whatsapp): apply media-failure note at the inbound boundary (follow-up to #2895)** — 2026-06-30 创建，今日有更新，积压约 5 个月。摘要指出 #2895 合入后在高强度 review 中发现 approval-answer 路径回归（`appendMediaFailureNote` 在 pending-question 逻辑之前被应用到 `content`）。链接：nanocoai/nanoclaw PR #2896
- **PR #4289 [OPEN] fix(agent-runner): keep context beside a command pending** — 2026-11-06 创建，与今日 Bug #4580 直接相关，建议优先处理。链接：nanocoai/nanoclaw PR #4289
- **PR #4274 [OPEN] chore(deps-dev): bump the agent-runner-dev group**（@types/bun、@types/node，`/container/agent-runner` 目录内 2 项更新）— 2026-11-06 创建，Dependabot 项，可择机合入。链接：nanocoai/nanoclaw PR #4274
- **PR #4522 [OPEN] fix(templates): read restamp's live files without following or blocking** — 2026-11-21 创建，属 hardening 类（restamp 通过单一描述符读取 agent 可写文件，避免跟随符号链接或阻塞于命名管道），今日未更新。链接：nanocoai/nanoclaw PR #4522
- **PR #1402 已关闭**（积压 8 个月）、**PR #3300 已关闭**（积压 3 个月）：虽已收口，但反映历史 PR 审核周期偏长，建议维护者关注同类长期挂起项的响应时效。

---
*数据来源：NanoClaw GitHub 仓库 2026-11-27 快照。说明：原文中 Issue/PR 链接域名为 `nanocoai/nanoclaw`，与数据概览给出的 `github.com/qwibitai/nanoclaw` 不一致，本报告按所给字段原样保留，未作改写。*

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

# LobsterAI 项目日报 · 2026-11-27

## 1. 今日速览

今天 LobsterAI 交付了一次**架构级别的重大迁移**：智能体引擎从 OpenClaw 切换为 DeepSeek Harness (DSH)，官方称涉及 106 个 PR，是项目历史上规模最大的一次迁移。当天有 20 条 PR 更新，且全部合并或关闭；这些变更绝大多数是 DSH 迁移的收尾和配套修复，覆盖 IM 路由、设置、Skills、产物画廊等子系统。Issues 侧仅有 1 条新开，属于账号封禁申诉，不涉及代码缺陷。项目活跃度处于**高位**，工程交付节奏密集，但社区侧面的讨论量较低。

---

## 2. 版本发布

**LobsterAI 2026.11.27**（当日发布）

- **核心变更**：智能体引擎由 OpenClaw 迁移至 DeepSeek Harness (DSH)，官方称这是 LobsterAI 历史上最大的架构迁移，涉及 106 个 PR。
- **受影响范围**（据 Release 说明）：会话、专家、记忆、IM 渠道、媒体生成、Office 编辑与插件全部在新引擎上重建。
- **破坏性变更 / 迁移注意事项**：Release 说明较简略，未明确列出不兼容项。从同日 PR 可推断以下迁移风险点：
  - 群聊任务与历史会话的映射关系变化（PR #3228、#3231、#3232、#3234）
  - 审批超时逻辑的变更：旧版 60s 定时器与 DSH 审批冲突（PR #3230）
  - 技能（skills）机制调整，内置技能精简为 9 个常开项，并改为只读挂载（PR #3236）
  - 设置页的保存方式改为显式保存/放弃（PR #3233）
  - 旧 OpenClaw 配置与 DSH 运行环境的链接清理（PR #3240）
- 引擎版本：`@deepseek-ai/dsh@0.2.2-rc.5`（候选版本，需注意稳定性风险）。

---

## 3. 项目进展

今日 20 条 PR 全部合并或关闭，推进力度集中在三块：

**（1）DSH 迁移主干**
- [#3239](https://github.com/netease-youdao/LobsterAI/pull/3239) feat(runtime)：将 OpenClaw 替换为 DSH，设为唯一内置引擎（`CoworkAgentEngine = 'dsh'`），并整合桌面端集成、IM 渠道等模块。这是本次发布的核心 PR。
- [#3237](https://github.com/netease-youdao/LobsterAI/pull/3237)：新增 settings-section 嵌入式面板、trace 隔离、画廊导航。
- [#3240](https://github.com/netease-youdao/LobsterAI/pull/3240)：保留导入的皮肤技能，并清理废弃的 DSH profile 链接，覆盖 Windows 场景。

**（2）IM 渠道一致性修复（DSH 迁移后的回归修补）**
- [#3228](https://github.com/netease-youdao/LobsterAI/pull/3228)：修复 POPO、飞书群聊被按发言人拆分成多个任务的问题。
- [#3231](https://github.com/netease-youdao/LobsterAI/pull/3231)：让同一 Agent 的多个机器人共享群任务并串行处理。
- [#3232](https://github.com/netease-youdao/LobsterAI/pull/3232)：修复 QQ、Telegram、Discord 群聊路由问题（跨应用 OpenID、@ 判定、论坛话题合并）。
- [#3234](https://github.com/netease-youdao/LobsterAI/pull/3234)：修正主 Agent 绑定的显示与群任务选择。
- [#3230](https://github.com/netease-youdao/LobsterAI/pull/3230)：解决旧版 60s 审批定时器与 DSH 300s 审批超时的竞态。

**（3）体验与构建**
- [#3236](https://github.com/netease-youdao/LobsterAI/pull/3236)：精简内置技能、改为只读挂载、对 Markdown 拷贝做清洗。
- [#3233](https://github.com/netease-youdao/LobsterAI/pull/3233)：重新设计设置保存模型，加入 DSH 插件安装和命令危险操作的 UX。
- [#3235](https://github.com/netease-youdao/LobsterAI/pull/3235)：修复产物标签页、撤销提示与 MCP 市场的缓存。
- [#3238](https://github.com/netease-youdao/LobsterAI/pull/3238)：家庭页 credits 弹层可滚动与 z-index 修正。
- [#3229](https://github.com/netease-youdao/LobsterAI/pull/3229)：侧边对话的重命名、删除与提升 UI。
- [#3218](https://github.com/netease-youdao/LobsterAI/pull/3218)：Mac 技能缺 lockfile 时生成缓存 lockfile。
- [#2859](https://github.com/netease-youdao/LobsterAI/pull/2859)：刷新 6 个内置 provider 的默认模型清单并补充迁移逻辑。该 PR 自 2026-10-13 创建，今天才关闭。

**整体判断**：项目已完成引擎层切换，正处于迁移后的稳定化阶段。今天的 PR 主要是在解决迁移引发的问题，并未新增功能。

---

## 4. 社区热点

- [#3225 申诉：账号被禁用，申请解封](https://github.com/netease-youdao/LobsterAI/issues/3225)（OPEN，1 条评论）— 今日唯一活跃 Issue，详见第 7 节。
- 从数据看，今日没有评论热度较高的 PR，大部分 PR 的评论数未公开；社区讨论量较低，工程提交的活跃度明显高于社区的活跃度。

---

## 5. Bug 与稳定性

按严重程度排列（均为今日关闭的修复 PR，说明问题已处理）：

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | IM 审批提示显示 300s，实际 60s 即超时，并误报「已在电脑端处理」。[#3230](https://github.com/netease-youdao/LobsterAI/pull/3230) | 已有 fix |
| 高 | 迁移到 DSH 后，POPO 群任务按发言人拆分成多个任务；飞书群新建任务、与原历史断开；连续 @ 被中断。[#3228](https://github.com/netease-youdao/LobsterAI/pull/3228) | 已有 fix |
| 高 | 同一 Agent 的多个机器人同群时创建多个任务、无法接续对话（含钉钉）。[#3231](https://github.com/netease-youdao/LobsterAI/pull/3231) | 已有 fix |
| 中 | QQ 群 OpenID 跨应用路由串聊、Telegram/Discord @ 判定错误、Telegram 论坛话题合并导致漏收。[#3232](https://github.com/netease-youdao/LobsterAI/pull/3232) | 已有 fix |
| 中 | IM 编辑页在开关已开时仍显示「未绑定」。[#3234](https://github.com/netease-youdao/LobsterAI/pull/3234) | 已有 fix |
| 低 | Mac 技能缺 `package-lock.json` 时的构建问题。[#3218](https://github.com/netease-youdao/LobsterAI/pull/3218) | 已有 fix |
| 低 | 家庭页 credits 弹层溢出。[#3238](https://github.com/netease-youdao/LobsterAI/pull/3238) | 已有 fix |

**稳定性评估**：今日报告的稳定性问题几乎都由 DSH 迁移引起，属于迁移期的预期波动。修复闭环速度快（当天报告当天关闭），这一点值得肯定。

---

## 6. 功能请求与路线图信号

今日没有新的 Issue 提出功能需求，路线图信号主要来自合并的 PR：

- **技能生态重构**：[#3236](https://github.com/netease-youdao/LobsterAI/pull/3236) 提到「Marketplace Migration Design」，内置技能精简为 9 个常开项，改为只读挂载。这很可能指向后续推出独立的技能市场。
- **设置保存模型**：[#3233](https://github.com/netease-youdao/LobsterAI/pull/3233) 引入显式保存/放弃、脏状态守卫与未保存变更确认，属于设置系统的基础设施改进，可能为插件化设置页铺路。
- **DSH 插件安装**：同一 PR 包含插件安装流程，结合 [#3237](https://github.com/netease-youdao/LobsterAI/pull/3237) 的 settings-section 嵌入面板，暗示 DSH 插件体系将成为下一阶段重点。
- **模型目录更新**：[#2859](https://github.com/netease-youdao/LobsterAI/pull/2859) 刷新了 6 个 provider 的模型清单并做存量迁移，后续版本可能持续跟进模型迭代。

**下一版本预判**：DSH 插件市场与技能市场迁移是可见的下一阶段方向；短期内更可能继续做迁移后的打磨与兼容补齐。

---

## 7. 用户反馈摘要

唯一可用的用户反馈来自 [#3225](https://github.com/netease-youdao/LobsterAI/pull/3225)（账号封禁申诉）：

- **场景**：用户通过手机号登录桌面客户端，提示「账号已被禁用」，无法进入应用。
- **自述原因**：将 LobsterAI 内置模型接口经本地反向代理转发，在本地工具中调用模型，推测触发了风控。
- **用户诉求**：强调为个人本地用途、无商业化、未对外提供服务，并已停止全部反向代理、清理本地保存的配置，申请解封。
- **反映的痛点**：
  1. 风控封禁缺少前置提示或申诉入口，用户只能通过 GitHub Issue 申诉；
  2. 用户对「本地自用」与「违规调用」的边界不清楚，产品侧可能需要明确使用条款或提供合规的本地模型调用方式；
  3. 封禁原因为「推测」，说明错误提示信息不够透明。

数据中未包含其他 Issues 的评论内容，因此无法提炼更多满意度信息。

---

## 8. 待处理积压

- **#3225 账号封禁申诉**（OPEN，创建于 2026-11-27，1 条评论）：这是今日唯一未处理项。虽然是账号运营问题、不涉及工程，但直接关系用户体验。建议由运营/风控团队尽快回应，并将此类诉求引导至非 GitHub 的正式支持渠道，以减少公开 Issue 区的噪音。
- **#2859 模型目录更新**：该 PR 于 2026-10-13 创建，直到今日才关闭，积压时长约 6 周。这类与模型版本同步相关的 PR 若长期滞留，会导致内置 provider 清单落后，建议在维护者流程中设置时效提醒。
- 今日 20 条 PR 已全部关闭，**无待合并 PR**，因此不存在 PR 积压。

---

**健康度小结**：交付吞吐高、修复闭环快，但当前阶段高度集中于单次大迁移。建议维护者关注三点：一是 rc 版引擎能否尽快转为稳定版；二是迁移后 IM 渠道回归问题是否已收敛；三是社区支持与风控申诉应分流到专用渠道，避免占用工程侧的 Issue 区。

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

# CoPaw 项目日报 · 2026-11-27

## 1. 今日速览

今日项目维持高速运转：24 小时内 18 条 Issue 更新（13 条新开/活跃、5 条关闭）、26 条 PR 更新（18 条待合并、8 条已合并/关闭），无新版本发布。整体活跃度高，但稳定性信号偏弱——`main` 分支因 #8785 的共享恢复预算改动导致 Creator App Tests 持续红灯，已由 #8957 提出修复。今日合并/关闭的 PR 集中在 Console 聊天导航与分页（#8951、#8953）和 Relay 恢复路径（#8952），属于体验与健壮性打磨。Issue 侧以插件化后的遗留问题（本地模型 CLI、QQ 通道重连、代码模式工具调用）居多，反映出近期架构拆分带来的回归面仍在消化中。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日 8 条已合并/关闭的 PR，主要推进以下方向：

- **Console 聊天体验修复**：#8951（size/L，已关闭）稳定聊天导航、滚动与 steer 时间戳，包括迁移用户消息导航去重、保留完整历史、流式输出时保持视口稳定；#8953（size/M，已关闭）修复聊天历史分页与滚动，改用持久化的 transcript message ID 作为分页边界以避免 `400 Invalid history cursor`，并在请求失败后停止自动分页。两者共同解决"迁移会话无法加载历史/界面跳动"一类问题。
- **Relay 恢复与关闭路径**：#8952（size/L，已关闭）作为 #8950 的后续，按用户独立执行 Hub 恢复与关闭并设置有限等待，修复中断路径。https://github.com/agentscope-ai/QwenPaw/pull/8952
- **测试环境适配（关闭的 Issue）**：#8941 关闭，记录 12 个 Windows 插件安装测试失败的根因（符号链接权限、包初始化耗时超 5s 预算、venv 启动器 pid）；#8744 关闭，涉及 Console 缺少"查看被压缩归档历史轮次"入口的反馈。

整体看，今日推进以体验层与故障恢复为主，未触及核心能力面，属于"降噪式"前进。

## 4. 社区热点

- **#8956 Creator App Tests 红灯回归**（4 条评论，最高讨论量）https://github.com/agentscope-ai/QwenPaw/issues/8956
  #8785 引入共享恢复预算后，当重试被以不同异常对象再次拒绝时，边界会额外消耗预算而非结束，导致插件终态强制步骤被重复执行、产生额外 provider 调用。评论热度高说明这是阻塞主干的团队级问题，而非单点缺陷。
- **#8845 Console Markdown 表格溢出**（4 条评论、1 个 👍，2026-11-20 创建至今仍在更新）https://github.com/agentscope-ai/QwenPaw/issues/8845
  表格超出消息气泡且无横向滚动，溢出列不可见。老 Issue 持续有新互动，说明渲染体验问题长期未解，用户耐心在消耗。
- **#8962 / #8963 QQ 通道重连**（3 条评论 + 配套 PR）https://github.com/agentscope-ai/QwenPaw/issues/8962
  作者在 Issue 中明确收窄实现范围为"QQ 插件最小重连与清理修复"，完整的自愈设计留作上游评估建议，并当天提交 PR #8963，属于高质量的问题-方案闭环。
- **#8959 企业版 Platform-Worker 技术评审**（2 条评论、1 个 👍）https://github.com/agentscope-ai/QwenPaw/issues/8959
  基于 QwenPaw 的企业版已在实际项目部署，希望与维护团队讨论哪些改动适合回贡上游、哪些保持独立扩展、是否需要补通用扩展接口。这是路线图层面最有分量的诉求，但代码开放仍需走内部流程。

## 5. Bug 与稳定性

按严重程度排列：

**严重（阻塞主干 / 核心功能不可用）**
1. **#8956 Creator App Tests 在 `main` 持续失败** — 回归，源自 #8785。已有修复 PR #8957（size/S，通过标记异常让恢复能终止循环）。https://github.com/agentscope-ai/QwenPaw/issues/8956
2. **#8960 Cron API 全量 500** — `_get_default_cron_mgr` 引用了不存在的 `mam._workspaces`，`GET/POST /crons/jobs`、`DELETE /crons/jobs/{job_id}` 全部不可用。**暂无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8960
3. **#8954 Code Mode 子代理工具泄漏** — 从 Code Mode 会话派生 subagent 时，子会话继承父级 `_execution_toolkit` ContextVar，`run_code` 报 `ToolNotFoundError`。与 #8903（代码模式下 `run_tool_batch` 调用失败）同属 Code Mode 工具链问题，**暂无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8954

**中等（通道 / 平台相关）**
4. **#8962 QQ 通道重连 supervisor 永久退出** — websocket 清理出错后 worker 保持 ready 但实际断连。已有 PR #8963。https://github.com/agentscope-ai/QwenPaw/issues/8962
5. **#8949 升级 2.3.0-post1 后前端状态不刷新** — 任务实际在跑，前端一直转圈，刷新后才见到已完成结果，属版本升级相关回归。**暂无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8949

**较低（渲染 / 展示）**
6. **#8948 单个 `~` 被解析为删除线** — 数值区间（如 `600~1500 t/s`）被划掉且 `~` 消失。已有 PR #8961（first-time contributor）。https://github.com/agentscope-ai/QwenPaw/issues/8948
7. **#8945 飞书卡片把代码块内以 `|` 开头的行当表格/标题解析**。**暂无 fix PR**。https://github.com/agentscope-ai/QwenPaw/issues/8945

**已关闭并确认**
- #8830 Windows 上 `llama-server.exe` 孤儿进程累积耗尽内存（已关闭）；#8712 重复工具调用未被中断（doom-loop gate 每次回复最多记录一次调用，已关闭）；#8872 本地模型列表提示已失效的下载命令（已关闭）。

## 6. 功能请求与路线图信号

- **#8882 长期记忆的引用计数归档机制**（enhancement/design）https://github.com/agentscope-ai/QwenPaw/issues/8882
  提出把过期记忆条目标记为状态变更而非删除，直接回应 README 中"Never forgets"的承诺与 #7571 反馈的"该记的记不住、陈旧条目越堆越多"。设计类提案，纳入下版本的可能性取决于维护者是否接受该模型，目前无对应 PR。
- **#8955 治理层内置规则无法配置或禁用** https://github.com/agentscope-ai/QwenPaw/issues/8955
  用户指出"工具守卫层"与"治理层内置规则"两套独立拦截机制造成困惑，且内置规则不可关闭。这是配置一致性问题，实现成本低，较可能被优先受理。
- **#8947 将 WebRouter 接入为 web_search provider** https://github.com/agentscope-ai/QwenPaw/issues/8947
  来自 WebRouter（Apache 2.0）维护者的提案，希望成为第四个 `web_search` provider。属于生态扩展型请求，需评估维护成本。
- **#8959 企业版上游整合与通用扩展接口** 见社区热点，是唯一可能影响架构分层（扩展接口）的输入。

综合判断：**#8955 与 #8948/#8961** 最可能近期落地；**#8882** 属设计讨论期；**#8947、#8959** 需维护者先给出接入/扩展策略。

## 7. 用户反馈摘要

- **升级回归引发的不信任感**：#8949 用户详细描述"转圈—直接结束—刷新才发现已完成"，并附截图，反映状态推送链路在 2.3.0-post1 上退化，用户对前端是否可信产生怀疑。
- **插件化拆分的善后缺口**：#8872 指出本地模型管理抽出为插件后，`download`、`local`、`remove-local` CLI 命令不再注册，但 `qwenpaw models list` 仍提示这些命令；#8941 显示 Windows 开发者按文档 `pip install -e ".[dev,test,full]"` 后仍有 12 个测试失败。文档与实现脱节是当前最集中的抱怨来源。
- **输出可读性诉求**：#8845（表格溢出不可滚动）、#8948（`~` 被吞掉）、#8945（飞书代码块被误判为表格）三件事共同指向"Agent 输出的 Markdown 在各端渲染不一致"，用户在意的是信息是否完整可见。
- **长会话信任**：#8744（已关闭）与 #8882 从不同角度指向同一痛点——压缩后的历史在 UI 上不可达，用户会直接理解为"历史对话丢了"。
- **外部贡献者活跃**：QQ 通道（#8962/#8963）、WebRouter（#8947）、企业版评审（#8959）均来自维护团队之外，社区愿意投入但需要维护者给出明确的上游接纳标准。

## 8. 待处理积压

- **#8845 Console Markdown 表格溢出**（创建于 2026-11-20，已 7 天，4 条评论、1 个 👍，无 fix PR）。用户可感知度最高的体验问题之一，建议尽快分派。https://github.com/agentscope-ai/QwenPaw/issues/8845
- **#8882 长期记忆引用计数归档**（创建于 2026-11-24，已有 3 条评论但无维护者结论）。涉及产品承诺，需要明确"是否采纳/何时排期"的官方回应。https://github.com/agentscope-ai/QwenPaw/issues/8882
- **PR #8917 / #8915 / #8911 / #8909 / #8907 / #8905 / #8933 / #8932**（作者 passionworkeer，均创建于 2026-11-25 至 11-26，全部仍 OPEN，均为 size/XS 或 size/S 的小型健壮性修复，覆盖 JSON 提取、schema `allOf` 处理、空文本块、JSON Pointer RFC 6901 校验等）。这批 PR 数量多、粒度小、相互独立，长期排队会持续增加 rebase 成本，建议批量评审或集中给出统一意见。示例：https://github.com/agentscope-ai/QwenPaw/pull/8911
- **#8958 e2e 分页历史匹配**（2026-11-27 提交）描述中仍保留 `Fixes #(issue_number)` 占位符，需作者补充关联 Issue 后才能进入评审。https://github.com/agentscope-ai/QwenPaw/pull/8958

---

**健康度小结**：吞吐量健康（单日 26 条 PR 更新、5 条 Issue 关闭），但主干红测（#8956）、Cron API 全量 500（#8960）、Code Mode 工具链两处缺陷（#8903/#8954）叠加，加上插件化拆分后的 CLI 与文档不一致（#8872/#8941），构成当前最需要集中清理的稳定性债务。无新版本发布，建议在主干转绿、Cron 修复落地后再考虑发版。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-27

## 1. 今日速览

ZeroClaw 今日处于高活跃、低合入的「审查积压」状态：过去 24 小时 Issues 更新 14 条（新开/活跃 12、关闭 2），PR 更新 50 条但**合并/关闭为 0**，全部 50 条仍待合并。新增问题集中在 MCP 工具链路（启动期连接失败与健康检查语义）和 Web 控制台交互细节。路线图层面出现明确信号：v1.0.0 路线图 tracker 与 Gemini 接入现代化 tracker 同时活跃。整体健康状况需关注——当日无版本发布且无合并动作，而 S0/S1 级新 Bug 已有 3 条，项目处于「问题发现快于修复合入」的阶段。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日**无已合并或关闭的 PR**，代码主线未向前推进。可观察到的推进迹象仅限于 PR 审查进展：

- #12768 `fix(gateway): answer /health while the gateway is still starting` — 针对启动期健康检查无响应的修复，[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12768)
- #12769 `fix(mcp): retry transient MCP connect failures at channel startup and report them on /health` — 启动期 MCP 瞬时失败重试，[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12769)
- #12770 / #12771 Discord 频道命令解析与内置命令作为 slash 命令暴露，[#12770](https://github.com/zeroclaw-labs/zeroclaw/pull/12770)、[#12771](https://github.com/zeroclaw-labs/zeroclaw/pull/12771)

值得注意：上述修复 PR 与同日新开 Bug Issue 高度对应，说明反馈—修复闭环在形成，但合入门槛（含 `risk:high`、`size:XL` 标签堆积）仍是瓶颈。

另有两条已关闭 Issue 反映真实修复落地：#10797（memory backend 并发写入丢数据，S0）与 #9562（WebChat 流式输出时自动滚动覆盖手动滚动）均已 CLOSED。

## 4. 社区热点

按评论数与反应排序：

1. **#5287** `[Feature]: define a compact local_small runtime profile and prompt-budget contract` — 11 条评论、2 👍，创建于 2026-04-04，持续讨论近 8 个月，标签含 `agent/runtime/security/tool/risk:high`。核心诉求：本地小模型场景下压缩 prompt、关闭宽松的回退解析、防止内部工具/系统指令泄漏到用户可见输出。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)
2. **#10797**（已关闭）markdown memory 后端在 `store()` 调用重叠时静默丢条目，S0 数据丢失，3 条评论。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)
3. **#9562**（已关闭）WebChat 流式回复时自动滚动抢走手动滚动，3 条评论。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9562)
4. **#12712** `[Tracker]: Roadmap to v1.0.0` — 发布顺序、目标日期与各版本定位，替代原 FND-001 §6 版本计划，2 条评论、1 👍。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12712)
5. **#11658** Web 聊天输入框在回复结束后不恢复焦点，2 条评论。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11658)

诉求分析：#5287 的长期高热说明「本地小模型可用性」是社区最关心的差异化能力；两个关闭 Issue 均为「静默错误」，即系统不报错但行为错误（丢数据、抢焦点），这类问题对信任伤害最大。

## 5. Bug 与稳定性

按严重程度排列：

**S0 — 数据丢失 / 安全风险**
- **#12772** `support excluding individual MCP tools inside mcp_bundles` — 无法在单个 MCP server 内禁用指定工具，当前只能整包配置，属权限收敛缺口。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12772) — **无对应 fix PR**

**S1 — 工作流阻断**
- **#12774** `OpenRouter drops declared tool-result image attachments` — `OpenRouterModelProvider::convert_messages` 只读取 `role = "tool"` 的 `"content"` 字符串，丢失已声明的图片附件。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12774) — **无对应 fix PR**
- **#12773** `Quickstart cannot configure Lark/Feishu credentials; writes an invalid channel block dropped on reload` — quickstart 只问频道类型和别名，从不询问 `app_id`/`app_secret`，写入的配置块在重载时被丢弃。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12773) — **无对应 fix PR**
- **#12766** `gateway does not answer /health during startup while MCP tool listings connect` — 启动期 MCP 连接阻塞健康检查，导致存活探针在 MCP 故障期间反复重启守护进程；master@d4a5d2afd (0.9.0)，首次出现于 v0.8.7。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12766) — **有 fix PR #12768**

**S2 — 行为降级**
- **#12767** `transient MCP failure at channel startup (HTTP 429/503, connection refused) leaves the agent without MCP tools until restart, and /health stays green` — 启动期瞬时失败后工具永久缺失且健康检查仍为绿色。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12767) — **有 fix PR #12769**

**S3 — 次要**
- **#11658** Web 聊天输入框回复结束后不恢复焦点。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11658) — 无 fix PR
- **#12746** 页面重连后一轮对话结束时不恢复输入框焦点（#11661 的 operator reconnect 场景，超出该 PR 范围）。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12746) — 无 fix PR
- **#12743** Windows Chrome 下 Web 上下文计量格 `░` 与 `█` 行高不一致。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12743) — 无 fix PR

**已关闭**：#10797（S0 并发丢数据）、#9562（WebChat 滚动）。

整体判断：MCP 相关稳定性问题（#12766、#12767）呈集群出现，且 #12766/#12767 标注为「Regression? Unknown」，首次出现于 v0.8.7，建议优先验证回归范围。

## 6. 功能请求与路线图信号

- **#5287 本地小模型紧凑运行时配置**（`priority:p2`、`status:accepted`、`status:in-progress`，11 条评论）：已进入已接受状态但自 4 月起未落地，是 p2 中长期悬置项。
- **#12765 新增 Buzz (buzz.xyz) 频道**：对标 Slack 的开源替代，复用现有 Slack 频道能力。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12765) — 无对应 PR，短期纳入可能性低。
- **#12772 MCP 工具级排除**（同时属 S0）：既是功能请求也是权限收敛缺陷，结合 #12769 正在重构 MCP 启动逻辑，具备并入同一批次的可能。
- **#12712 v1.0.0 路线图 tracker**：已给出发布顺序与目标日期（具体内容需查阅 Issue 正文），是判断后续版本纳入范围的最权威依据。
- **#12669 Gemini provider 现代化 tracker**：Google 已退役 Gemini CLI 与 Gemini Code Assist 消费级 OAuth，tracker 协调迁移至 Antigravity CLI provider 与受支持的接入路径。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12669)

相关待合并 PR 中，provider 侧还有 #12085 新增 Obscurify.ai 为 OpenAI 兼容 provider 家族，[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12085)（`size:S`，较早创建于 2026-10-28，已积压一个月）。

## 7. 用户反馈摘要

- **本地小模型用户**：抱怨 prompt 膨胀、宽松回退解析带来的不确定性，以及内部工具/系统指令泄漏到用户可见输出（#5287），反映出对「本地部署可预期性」的强烈需求。
- **自托管运维者**：MCP 服务瞬时故障（429/503/连接拒绝）会让 agent 静默失去全部 MCP 工具直到重启，而 `/health` 仍显示绿色；同时启动期健康检查不可用会触发探针重启循环（#12766、#12767）。痛点核心是**可观测性与真实状态不一致**。
- **多模态工作流用户**：OpenRouter 工具结果中的图片附件被静默丢弃，直接阻断工作流（#12774）。
- **即时通讯渠道接入者**：quickstart 无法完成 Lark/Feishu 凭据配置，且写入的配置块在重载时被丢弃，属于「向导走完但配置无效」的挫败体验（#12773）。
- **Web 控制台日常用户**：输入框焦点不恢复（#11658、#12746）、流式回复抢走手动滚动（#9562，已修）等交互细节反复被提出，说明 Web 端是高频使用入口。
- 正面信号：#9562 与 #10797 关闭，表明 WebChat 交互与数据持久化的关键缺陷已修复。

## 8. 待处理积压

**长期未合入的 PR**
- **#11999** `chore(deps): bump the actions-all group across 1 directory with 9 updates` — 创建于 2026-10-23，积压 35 天，标签含 `risk:high`。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/11999)
- **#12039** `fix(web): refresh config form after Save all` — 创建于 2026-10-26，积压 32 天，`size:L`。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12039)
- **#12085** `feat(providers): add Obscurify.ai model provider` — 创建于 2026-10-28，积压 30 天。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12085)
- **#12459** `feat(web): enable browser voice for OIDC sessions` — 带 `do-not-merge` 与 `status:blocked` 标签，创建于 2026-11-15。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12459)
- **#12322** `fix(deps): upgrade bundled SQLite without waiving the advisory` — 创建于 2026-11-09，涉及移除 RUSTSEC-2026-0459 豁免并升级至 rusqlite 0.41.1 / libsqlite3-sys 0.39.1（SQLite 3.54.1），`needs-author-action`、`risk:high`。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12322)
- **#12408** `feat(web): manage scoped HTTP credentials` — `needs-author-action`、`risk:high`、`size:XL`。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/12408)

**长期未落地的 Issue**
- **#5287** 本地小模型运行时配置 — 自 2026-04-04 起开放，近 8 个月，11 条评论，已 accepted / in-progress，建议明确里程碑或拆分。

**结构性提醒**：50 条 PR 全部待合并、当日零合并，其中多条 `size:XL` + `risk:high`（#12438、#12659、#12408、#12744、#12659）与多条 `needs-author-action` 并存，审查队列存在明显拥堵，建议维护者优先清理小体积依赖类 PR（#12723、#11999）以释放审查带宽，并对 S0/S1 缺陷对应的修复 PR 开辟快速通道。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*