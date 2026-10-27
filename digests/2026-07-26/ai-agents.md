# OpenClaw 生态日报 2026-07-26

> Issues: 349 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-26 03:34 UTC

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

# OpenClaw 项目日报 — 2026‑07‑26

## 1. 今日速览

过去 24 小时内，OpenClaw 项目继续保持高强度迭代：**349 条 Issue 更新**（新开/活跃 250，关闭 99）和 **500 条 PR 更新**（待合并 280，已合并/关闭 220）表明社区反馈与贡献者工作量均处于高水位。值得关注的是 **P0 级启动故障和配置损坏 Bug 仍未被修复**，同时多项安全性与性能增强功能长期悬置。总体来看项目活跃度极高，但质量保障和积压清理仍需更多投入。

## 2. 版本发布

**无**。过去 24 小时内未发布新版本。

## 3. 项目进展

今日有 **2 个重要 PR 被合并/关闭**：

- **PR #113945** [CLOSED] — `feat(chat): restore prompt image attachments on rewind/fork`  
  修复了在 Web、iOS、macOS、Android 上执行“Rewind to here”或“Fork”时，用户附加的图片丢失的问题。使得会话回溯和分支功能在交互体验上更加完整。  
  [openclaw/openclaw PR #113945](https://github.com/openclaw/openclaw/pull/113945)

- **PR #113996** [CLOSED] — `fix: restore direct dependency pin guard after stylelint adoption`  
  修复了 #113971 引入四个 Control UI lint 开发依赖后导致 CI 中的直接依赖锁定检查失败的回退问题，保障了持续集成稳定性。  
  [openclaw/openclaw PR #113996](https://github.com/openclaw/openclaw/pull/113996)

另外有大量 PR 处于开放等待审核状态（如 #113746、#114002 等），涵盖内存 Wiki 批量操作、deprecation 审计、提供者测试隔离等方向，表明项目正在持续推进基础设施与文档改进。

## 4. 社区热点

以下 Issue 在过去 24 小时内引发了最多讨论（按评论数排序）：

| Issue | 标题 | 评论 | 点赞 | 核心诉求 |
|-------|------|------|------|----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Feature Request: Memory Trust Tagging by Source | 21 | 0 | 按来源（用户命令、网页抓取、第三方技能）对内存条目进行信任等级标记，防止记忆投毒攻击 |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated approval for MCP tool calls (consent envelope) | 15 | 1 | 让 MCP 服务器选择加入与 shell‑exec 相同的 `/approve <id>` 审批管道，实现工具调用的用户确认 |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite snapshot restore lacks end‑to‑end crash and identity guarantees | 13 | 0 | SQLite 快照创建/恢复报告成功但未能持久链接新父目录，可能导致数据不一致甚至数据丢失 |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | [Bug]: update to openclaw 2026.7.1: gateway fails to start w/ error | 11 | 2 | 升级后 gateway 无法启动（systemd / ollama / 手动均失败），社区报告量高且多次复现 |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | Session context bloat: bootstrap files re‑injected every turn, wasting 20‑30% tokens | 10 | 2 | 每轮对话都重新注入引导文件（MEMORY.md等），导致 20‑30% 的上下文被浪费，用户强烈要求在后续轮次中保持引导文件缓存 |

**分析**：社区对**安全性**（内存信任标签、MCP 调用审批）和**性能/稳定性**（上下文膨胀、启动故障、快照一致性）表现出最高关注度。其中 #108435 是影响面最广的 P0 回归 Bug，但至今尚未关联修复 PR。

## 5. Bug 与稳定性

以下为今日报告/活跃的严重 Bug，按优先级排列（是否已有修复 PR 标注在末尾）：

- **P0**
  - [#108435](https://github.com/openclaw/openclaw/issues/108435) — 升级到 2026.7.1 后 gateway 启动失败（regression）❌ 无关联修复 PR
  - [#95515](https://github.com/openclaw/openclaw/issues/95515) — 2026.6.8→2026.6.9 升级导致 email channel 配置损坏（写入无效字段 `groupAllowFrom`）❌ 无关联修复 PR
  - [#109145](https://github.com/openclaw/openclaw/issues/109145) — Gateway HTTP server 虽报告“listening”但实际不接收连接（v2026.7.1‑beta.5）❌ 无关联修复 PR
  - [#103162](https://github.com/openclaw/openclaw/issues/103162) — 文档 `telegram.md` 中的 `toolProgress` 配置被 schema 拒绝，导致 CLI 命令全部失效 ❌ 无关联修复 PR

- **P1**
  - [#113466](https://github.com/openclaw/openclaw/issues/113466) — `/new` 和 `/reset` 命令仅调用钩子而不执行真正的会话创建流程，无法创建新会话（v2026.7.1‑2）❌ 无关联修复 PR
  - [#113306](https://github.com/openclaw/openclaw/issues/113306) — SQLite 快照恢复缺乏端到端崩溃与身份保证 ❌ 无关联修复 PR
  - [#87109](https://github.com/openclaw/openclaw/issues/87109) — Gateway 堆内存空闲时持续增长至 1073MB+，cron 任务静默失败 ❌ 无关联修复 PR
  - [#94251](https://github.com/openclaw/openclaw/issues/94251) — Ollama 远程提供者 streaming 不消费，`model_call:started` 始终未推进 ✅ 关联 PR #？未显示，但标记了 `clawsweeper:linked-pr-open`
  - [#90098](https://github.com/openclaw/openclaw/issues/90098) — Control UI 大附件上传导致浏览器/网关栈溢出 ✅ 标记了 `clawsweeper:linked-pr-open`
  - [#112423](https://github.com/openclaw/openclaw/issues/112423) — 大型 SQLite 转录清理阻塞网关事件循环 ❌ 无关联修复 PR
  - [#113315](https://github.com/openclaw/openclaw/issues/113315) — Telegram 入站更新在 offset 持久化后永久丢失，无 ingress/spool/dispatch 记录 ❌ 无关联修复 PR

- **P2 / 回归**
  - [#43747](https://github.com/openclaw/openclaw/issues/43747) — 内存管理混乱：不同用户的行为不一致（有的 chunking/embedding，有的存储原始文本、有的存储 Markdown）❌ 无关联修复 PR
  - [#89445](https://github.com/openclaw/openclaw/issues/89445) — 2026.5.28 升级后 gateway 因 `agents.list.*: Invalid input` 启动失败，降级到 2026.5.27 正常 ❌ 无关联修复 PR
  - [#112906](https://github.com/openclaw/openclaw/issues/112906) — `richMessages: true` 时 `details` 标签渲染异常，内容无法折叠（v2026.7.1 回归）❌ 无关联修复 PR

**趋势**：多个 P0/P1 Bug 已持续数天至数周仍未指派或修复，建议项目维护者优先给 #108435、#95515、#109145 分配资源。

## 6. 功能请求与路线图信号

今日活跃的功能请求中，以下议题可能被纳入后续版本（结合已有 PR 判断）：

- **安全和权限**  
  - #7707 Memory Trust Tagging by Source（评论数最高，涉及核心安全性，但无关联 PR）  
  - #78308 Channel‑mediated approval for MCP tool calls（已有概念讨论，无关联 PR）  
  - #7722 Filesystem Sandboxing Config（文件访问沙箱，评论 10，点赞 4）  
  - #15032 Per‑spawn tool restrictions for sub‑agents（子代理工具权限隔离，防止提示注入）  
  - #12219 Skill Permission Manifest Standard（技能权限声明标准，已有 yaml 机制讨论）  
  - #38520 Pre‑compaction agent notification（上下文压缩前通知代理，避免中断长工作流）  

- **性能与效率**  
  - #67419 Session context bloat（每个对话浪费 20‑30% token，社区呼声高）  
  - #95610 Prompt‑cache prefix churn on OpenAI（提示缓存被动态注入破坏，影响成本）  
  - #95840 contextPruning cache‑ttl 在 OpenAI 上从不触发（高流量提供者缓存失效）  

- **可观测性与控制**  
  - #9016 Expose OpenRouter usage cost to agent runtime（按消息展示成本）  
  - #9986 Trigger model fallback on context length exceeded（模型上下文超限自动回退）  
  - #8724 Per‑model generation timeout config（每个模型单独的生成超时，避免 Gemini 无限循环）  

- **前端与交互**  
  - #88032 Telegram quote/reply 应作为一等耐久契约（已有部分运行时补丁，但持续退化）  
  - #10944 Telegram parseMode 配置（支持 HTML / 纯文本）  
  - #9637 TUI 可访问性：禁用 emoji 和 unicode 符号（屏幕阅读器友好）  
  - #7476 WhatsApp 贴纸发送支持（贴纸被作为图片发送）  

**路线图信号**：PR #113517（`feat(approvals): add external verification contract`）正在推进 RFC #15 中的审批合约标准化，这与 #78308 的 MCP 调用审批有一定关联，值得关注。

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中可提炼出以下真实用户痛点：

- **升级灾难**：多位用户反映 **2026.7.1 版本导致 gateway 完全不可用**（#108435），且部分环境无法回滚。另外 #95515 中用户升级后配置被破坏，#89445 中 2026.5.28 版本因 schema 验证失败无法启动，降级 2026.5.27 才正常。**升级体验急需改进**。

- **内存与性能雪崩**：多位用户报告 gateway 空闲时内存增长到 1GB+（#87109），SQLite 清理阻塞主线程（#112423），以及每个对话轮次重复注入引导文件浪费大量 token（#67419）。这些性能问题直接影响用户的实际使用成本和响应速度。

- **会话管理混乱**：「/new 根本不创建新会话」（#113466）、「子代理列表为空」（#75593 虽已关闭但问题复发）、「会话 ID 显示不正确」（#43747）等表明会话生命周期管理存在多处不一致。

- **Telegram 消息丢失**：特定论坛主题变成永久黑洞（#91564）、入站更新 offset 持久化后无任何日志（#113315）、引用回复功能反复退化（#88032）。Telegram 信道在多个版本中持续出现消息可靠性问题。

- **文档与代码脱节**：`docs/channels/telegram.md` 中记录的 `toolProgress` 配置被 6.11 schema 拒绝（#103162），导致所有 CLI 命令失效。用户反馈“非常困惑和浪费时间”。

- **AI 行为不可控**：代理经常模拟工具调用（#45049）而非实际执行，用户不得不反复修正；OpenRouter 成本无法注入到回复中（#9016）；Google 模型陷入无限思考循环（#8724）。用户希望获得更严格、更可控的代理行为。

## 8. 待处理积压

以下为长期未得到有效响应或进展停滞的重要 Issue/PR（自创建以来超过 30 天，且评论数较多），提醒维护者关注：

| 编号 | 标题 | 创建时间 | 评论数 | 最后更新 | 当前状态 |
|------|------|----------|--------|----------|----------|
| #7707 | Memory Trust Tagging by Source | 2026‑02‑03 | 21 | 2026‑07‑25 | 标记 `clawsweeper:needs-product-decision`，无 PR |
| #78308 | Channel‑mediated approval for MCP tool calls | 2026‑05‑06 | 15 | 2026‑07‑25 | 标记 `clawsweeper:needs-product-decision`，无 PR |
| #67419 | Session context bloat: bootstrap files re‑injected every turn | 2026‑04‑15 | 10 | 2026‑07‑25 | 标记 `clawsweeper‑recovery-stuck`，无 PR |
| #7722 | Filesystem Sandboxing Config | 2026‑02‑03 | 10 | 2026‑07‑25 | 标记 `clawsweeper-recovery-stuck`，无 PR |
| #10687 | Models: fully dynamic model discovery (OpenRouter + beyond) | 2026‑02‑06 | 10 | 2026‑07‑25 | 标记 `clawsweeper‑recovery-stuck`，无 PR |
| #87109 | Gateway heap grows to 1073MB+ at idle | 2026‑05‑27 | 10 | 2026‑07‑25 | 标记 `clawsweeper‑needs-info`，无 PR |
| #45049 | Agent loop allows simulated tool calls instead of enforcing real tool invocation | 2026‑03‑13 | 7 | 2026‑07‑26 | 标记 `clawsweeper‑needs‑product‑decision`，无 PR |
| #38520 | Pre‑compaction agent notification, structured handoff window, and deferral mechanism | 2026‑03‑07 | 6 | 2026‑07‑25 | 标记 `clawsweeper-recovery-stuck`，无 PR |

这些议题覆盖了**安全性、性能、可靠性**三个核心维度，且用户关注度居高不下。建议维护团队重点排期，避免这些长期悬置问题影响用户信心。

---

*日报生成基于 openclaw/openclaw 仓库公开数据，数据截取时间 2026‑07‑26 15:00 UTC。*

---

## 横向生态对比

好的，作为专注于AI智能体与个人AI助手开源生态的资深技术分析师，我已详细审阅您提供的2026年7月26日各项目动态。基于这些数据，现为您呈现一份横向对比分析报告。

---

### **个人AI助手/自主智能体开源生态全景分析（2026-07-26）**

#### **1. 生态全景**

当前，个人AI助手开源生态呈现出 **“核心平台高强度迭代，垂直项目加速分化”** 的态势。以OpenClaw为代表的全功能平台，尽管面临着因功能膨胀和社区规模扩大带来的质量与稳定性挑战，但其极高的活跃度（日更数百Issue/PR）印证了市场对通用智能体平台的强烈需求。与此同时，NanoBot、ZeroClaw等项目通过重大版本发布或架构革新，正试图在特定领域（如易用性、安全合规性、插件化）建立差异化优势。整个生态正处于从“功能可用”向“生产级可靠”过渡的关键时期，**安全性、性能稳定性和用户体验**已成为各项目关注的共同焦点。

#### **2. 各项目活跃度对比**

| 项目名称 | 24h Issues | 24h PRs | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 349 | 500 | 无 | **高强度但质量承压**：社区体量巨大，但多项P0 Bug未修复，积压问题较多。 |
| **NanoBot** | 1 | 7 | v0.3.0 | **健康、快速迭代**：重大版本发布，社区反馈链清晰，核心问题迅速定位。 |
| **Hermes Agent** | 50 | 50 | 无 | **高度活跃，修复迅速**：针对数据库损坏、客户端认证等核心Bug均有PR跟进。 |
| **PicoClaw** | 2 | 4 | 无 | **中等活跃，局部修复**：修复了关键挂起Bug，但Matrix通道严重问题待解。 |
| **NanoClaw** | 2 | 11 | 无 | **高活跃，聚焦内核**：2个严重Bug均已有修复，社区贡献者技术水平高。 |
| **IronClaw** | 11 | 19 | 无 | **高活跃，架构推进**：WebUI性能大幅优化，核心错误恢复架构在稳步推进。 |
| **LobsterAI** | 1 | 20+ | 无 | **清理与加固期**：大量旧Issue/PR被关闭，Windows平台安装安全加固。 |
| **Moltis** | 0 | 6 | 无 | **稳步推进**：Slack和ACP协议集成取得进展，但社区讨论度不高。 |
| **CoPaw (QwenPaw)** | 7 | 7 | 无 | **高活跃但Bug集中**：MCP传输配置硬编码Bug被3人重复报告，修复需加快。 |
| **ZeroClaw** | 19 | 50 | 无 | **发布前冲刺**：活跃度极高，安全配置陷阱被引爆，反馈与修复链条敏捷。 |
| **NullClaw, TinyClaw, ZeptoClaw** | 0 | 0 | 无 | **静默期**：过去24小时内无任何活动。 |

#### **3. OpenClaw在生态中的定位**

*   **优势与地位**：OpenClaw是当前生态中**社区规模最大、功能覆盖面最广**的通用智能体平台。其极高的Issue和PR数量（远超其他项目）直观反映了其庞大且活跃的开发者与用户基础。其技术路线试图覆盖从底层会话管理、内存系统、多通道集成到前端Web/桌面/移动端交互的**全栈体验**。
*   **技术路线差异**：与NanoBot、IronClaw等侧重WebUI和开发者体验的项目相比，OpenClaw更追求**功能的完备性和系统的可定制性**。这导致其代码库复杂度和维护成本更高，这点从每日大量的Bug和积压问题即可看出。
*   **社区规模对比**：其社区规模是其他项目的**10倍以上**。这意味着OpenClaw拥有最强的生态影响力，但同时也面临着更严峻的质量控制和社区治理挑战。其他项目（如NanoBot、ZeroClaw）更倾向于通过更聚焦的定位和更敏捷的迭代来建立自己的用户基础。

#### **4. 共同关注的技术方向**

多个项目均出现了高度相似的用户诉求，这构成了当前生态的**共性技术痛点**：

1.  **安全性：从功能到壁垒**
    *   **涉及项目**：OpenClaw, ZeroClaw, NanoClaw, Hermes Agent, IronClaw。
    *   **具体诉求**：内存信任标签（OpenClaw #7707）、MCP工具调用审批（OpenClaw #78308）、WhatsApp通道配置失效（ZeroClaw #9348）、容器沙箱加固（NanoClaw PR #2748）、桌面客户端认证循环（Hermes #71514）、GitHub PAT无限重试（IronClaw #6667）。安全已不仅是功能，而是能否用于生产环境的准入门槛。

2.  **性能与效率：优化永不停止**
    *   **涉及项目**：OpenClaw, Hermes Agent, IronClaw, CoPaw。
    *   **具体诉求**：会话上下文膨胀浪费Token（OpenClaw #67419）、数据库损坏与内存泄漏（Hermes #34385, #87109）、WebUI加载性能优化（IronClaw PR #6632）、运行时CPU高占用（CoPaw #6460）。用户对资源消耗（成本）和响应速度的敏感度日益提升。

3.  **运行时一致性与可靠性：反“幻觉”与反“挂死”**
    *   **涉及项目**：OpenClaw, NanoClaw, PicoClaw, Hermes Agent。
    *   **具体诉求**：SQLite快照恢复缺乏保证（OpenClaw #113306）、代理上下文缺失（NanoClaw #3134）、消息轮询逻辑Bug（NanoClaw #3132）、Matrix同步永久挂死（PicoClaw #3203）、消息路由混乱（Hermes #4928）。用户期望AI代理的行为是**可预测、可追溯和状态一致的**。

#### **5. 差异化定位分析**

| 项目 | 核心定位 | 关键差异点 | 目标用户画像 |
|---|---|---|---|
| **OpenClaw** | 全功能个人AI生产平台 | 社区规模最大，功能最全，支持多通道/多平台，可定制性最高 | 高级开发者、系统集成者、追求高度定制化的重度用户 |
| **NanoBot** | 极致易用的AI工作助手 | 一键启动WebUI，安装向导，流畅的流式体验，强调开箱即用 | 普通用户、AI新手、追求快速入门体验的个人用户 |
| **Hermes Agent** | 高可靠性的本地优先Agent | 强调数据库稳定性、桌面客户端体验、多会话管理，注重本地数据主权 | 注重隐私、依赖桌面端工作流、对数据一致性有高要求的用户 |
| **IronClaw** | 企业级可观测性与恢复力 | 架构现代化（Reborn），强调查错恢复（Error-recoverability）、成本可视化 | 开发运维人员、追求架构稳定和可演进性的团队用户 |
| **ZeroClaw** | 插件化/可演进的微内核Agent | “一切都是插件”架构，语言i18n，强调CI/测试纪律，近期发布v0.8.4 | 对Agent架构有深入理解、希望做二次开发或集成的开发者 |
| **CoPaw (QwenPaw)** | 融合阿里系生态的多模态Agent | 深度整合Qwen模型，支持reranker记忆搜索，强调浏览器/沙箱集成 | 阿里云/通义生态用户、需要强大本地知识管理和MCP支持的开发者 |
| **PicoClaw / Moltis** | 小众集成或协议桥接 | 广谱通道支持（Matrix/Simplex/Email）、强调异构网络集成 | 通讯协议爱好者、去中心化技术发烧友 |

#### **6. 社区热度与成熟度**

*   **第一梯队（极高度活跃，快速迭代阶段）**：**OpenClaw, Hermes Agent, ZeroClaw**。这些项目拥有庞大或反应迅速的社区，每日有大量Bug报告和代码贡献，正处于功能快速扩张或关键问题集中爆发的时期。
*   **第二梯队（高度活跃，局部优化/发布冲刺）**：**NanoBot, NanoClaw, IronClaw, CoPaw**。这些项目或因重大版本发布（NanoBot），或因核心功能修复而异常活跃，其开发节奏可预测，反馈闭环效率高。
*   **第三梯队（中低活跃度，质量巩固/清理阶段）**：**PicoClaw, LobsterAI, Moltis**。这些项目活跃度适中，正在进行“还债”（清理旧Issue）和“修窗”（修补特定问题），而非大范围的功能创新。
*   **第四梯队（静默期）**：**NullClaw, TinyClaw, ZeptoClaw**。这些项目暂无动态，可能处于长期维护或开发暂停阶段。

#### **7. 值得关注的趋势信号**

1.  **从“聊天”到“数字员工”的范式转移**：用户不再满足于简单的问答，而是期望AI代理能**可靠地执行任务**。这体现在对运行时一致性的极高要求（NanoClaw的上下文镜像）、对成本的控制（OpenClaw/ZeroClaw的资源滥用问题）以及对行为安全性的担忧（OpenClaw/ZeroClaw的审批与沙箱需求）。**Agent的可信执行环境已成为亟待破解的行业级难题**。

2.  **生产级部署的“最后一公里”挑战**：大量Bug集中在**升级回滚**（OpenClaw #108435）、**配置持久化**（ZeroClaw #9348）、**跨平台兼容性**（CoPaw Windows沙箱）等运维环节。这表明用户正在将AI Agent部署到真实的生产环境，而项目在**运维友好性**上的投入还远未跟上功能开发的速度。

3.  **异构Agent互联的早期萌芽**：Moltis项目支持ACP协议，ZeroClaw提倡“一切皆插件”，NanoClaw则有容器技能。这表明生态正在向**可互操作的Agent网络**演进，而非固守单一平台。未来，不同项目开发的Agent有望通过标准协议进行通信和协作，这将催生出全新的应用场景。

4.  **开发者体验成为竞争新维度**：NanoBot凭借“一键启航”在用户体验上获得优势，IronClaw大力优化WebUI加载性能，ZeroClaw则通过清理旧Issue来降低新贡献者的认知负担。在功能趋同的背景下，**降低开发、部署和使用的门槛**，将成为项目脱颖而出的关键。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，AI 智能体与个人 AI 助手领域开源项目分析师。以下是为 NanoBot 项目生成的 2026-07-26 项目动态日报。

---

# NanoBot 项目动态日报 | 2026-07-26

## 1. 今日速览

NanoBot 项目今日完成了一次重大版本发布 (`v0.3.0`)，标志着项目发展进入了新阶段。过去24小时内，社区协作活跃，共计关闭/合并了7个Pull Requests，并处理了1个历史Issue。新版本在功能、体验和稳定性上均有显著提升，同时也有3个待合并的PR正在解决关键的运行时问题。整体来看，项目健康度极高，正处于快速迭代和功能完善期。

## 2. 版本发布

### v0.3.0：代理获得自主性

- **发布链接**: [v0.3.0 Release](https://github.com/HKUDS/nanobot/releases/tag/v0.3.0)
- **核心更新**: 本次发布是项目发展的一个里程碑，自上一版本以来共合并了 **260个PR**，并迎来了 **38位新贡献者**。版本的核心关键词是“代理获得了自主性”（The agent gained agency）。
- **主要特性**:
    - **一键启动 WebUI**: 新用户可通过 `nanobot webui` 命令快速启动本地 WebUI、网关，并打开浏览器工作台，极大降低了入门门槛。
    - **安装向导优化**: 在桌面端新安装后，会自动打开 WebUI 引导流程，改善了开箱即用体验。
    - **流畅的流式传输**: 优化了 WebUI 的流式输出体验，通过状态驱动的视口平滑滚动，增强了阅读体验。
    - **兼容性窗口关闭**: 此版本被标记为“最终兼容性窗口”，对某些遗留配置的清理和迁移工作将推迟到 `v0.3.1`。
- **破坏性变更**: 发布说明中未明确列出破坏性变更，但明确了 `v0.3.0` 是处理旧版本配置兼容性问题的“最终窗口”。用户应检查自己的配置，并在升级后尽快完成迁移。
- **迁移注意事项**: 团队已将有计划的兼容性清理任务（如遗留会话路径、已废弃的配置项警告）推迟至 `v0.3.1`。用户无需立即进行手动干预，但应关注后续版本的迁移指南。

## 3. 项目进展

今日有多个关键 PR 被合并或关闭，项目在用户体验、质量保障和稳定性方面均取得进展：

- **WebUI 体验重塑**: [#5085](https://github.com/HKUDS/nanobot/pull/5085) 和 [#4696](https://github.com/HKUDS/nanobot/pull/4696) 的合并，分别解决了桌面端新安装的自动化引导问题和流式输出的视觉平滑问题，这是 `v0.3.0` 体验升级的核心。
- **基础设施与文档完善**: [#5082](https://github.com/HKUDS/nanobot/pull/5082) 重写了 README 文档，明确了 WebUI、网关和 CLI 等不同使用路径的区别，解决了新用户的困惑。 [#5081](https://github.com/HKUDS/nanobot/pull/5081) 完成了版本发布的准备工作，包含了版本号升级和 UI 微调。
- **测试与质量体系**: 一个长期悬而未决的 CI 测试覆盖率的 Issue [#1131](https://github.com/HKUDS/nanobot/pull/1284) 被关闭，同时相关的 CI 工作流 PR [#1284](https://github.com/HKUDS/nanobot/pull/1284) 也被合并。尽管该 PR 被标记为 [conflict]，但其关闭表明项目已具备或正在落实持续集成的质量保障体系。
- **子代理问题修复**: [#4954](https://github.com/HKUDS/nanobot/pull/4954) 修复了一个WebUI中的 Bug，确保了异步生成子代理时，结果能够正确地在界面上显示，解决了用户无法看到核心功能输出的问题。

## 4. 社区热点

今日社区讨论的焦点主要集中在**质量保障**和**核心稳定性**上。

- **热点 Issue**: [#1131 - CI Test Coverage](https://github.com/HKUDS/nanobot/issues/1131)
    - **状态**: 已关闭。
    - **分析**: 该 Issue 提出了关于项目是否具备自动化测试和 CI 静默的疑问。尽管该 Issue 创建于数月前，但其今日的关闭显示项目团队最终回应并解决了社区的关切。这反映出社区对项目长期健康度和代码质量的重视。

- **热点 PR**: [#4928 - fix(heartbeat)](https://github.com/HKUDS/nanobot/pull/4928) 和 [#5084 - fix(agent)](https://github.com/HKUDS/nanobot/pull/5084)
    - **状态**: 开放中。
    - **分析**: 这两项都是针对核心代理运行时机制的修复，且均被标记为 `priority: p1`（高优先级）。它们处理的是会话心跳路由和消息运行时上下文的正确性，这些问题直接影响多会话用户和 Agent 内部消息处理的可靠性。社区和开发者都高度重视这类影响核心体验的 Bug 修复。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在此前版本暴露的核心功能问题上，且均已有关联的修复 PR。

- **严重 (Critical/P1)**:
    - **消息上下文丢失**: [#5084](https://github.com/HKUDS/nanobot/pull/5084) 修复了 Agent 在处理来自用户的排队消息时，新消息无法继承正确运行时上下文的问题。此问题可能导致 Agent 错误地处理后续消息。
    - **心跳路由混乱**: [#4928](https://github.com/HKUDS/nanobot/pull/4928) 修复了在统一会话模式下，心跳信号（如“对方正在输入…”）未能路由到用户实际对话的最后一个频道的问题。这会影响多平台同步用户的体验。
    - **子代理界面不可见**: [#4954](https://github.com/HKUDS/nanobot/pull/4954) 修复了子代理运行结果在 WebUI 上不可见的问题，这是一个影响功能可见性的严重 Bug。

- **警告与清理**:
    - **配置废弃通知**: [#5083](https://github.com/HKUDS/nanobot/pull/5083) 将几个兼容性清理任务推迟至 `v0.3.1`，表明团队将该类非关键性问题去优先级，以集中精力完成更紧迫的发布。

## 6. 功能请求与路线图信号

- **沙箱环境增强**: PR [#4625 - feat(exec)](https://github.com/HKUDS/nanobot/pull/4625) 提出的允许为 `bwrap` 沙箱配置额外的绑定挂载根目录的功能请求仍处于开放状态。该功能允许用户将 `~/.local/bin` 等自定义工具目录安全地暴露给 Agent，对于需要运行自定义脚本的用户非常实用。考虑到 `v0.3.0` 刚发布，此特性很可能会被纳入下一个版本 `v0.3.1` 的考虑范围。

## 7. 用户反馈摘要

从已关闭的 Issue 和 PR 中可以提炼出用户的潜在声音：

- **对开箱即用体验的关注**: PR #5085 的合入以及 README 文档的重写 (#5082)，侧面反映出用户对新用户引导流程（特别是 WebUI 的一键启航）有明确需求，希望快速、直观地体验产品。
- **对基础测试质量的疑虑**: Issue #1131 虽然已关闭，但其长期存在表明社区希望项目在 CI 质量保障上有明确的策略和透明展示，这关乎用户对项目长期维护和稳定性的信任。
- **对核心 Agent 稳定性的高敏感度**: 针对 Agent 运行时上下文和心跳路由的 P1 修复，说明用户在日常使用中对这些“幕后”的机制非常敏感，任何消息丢失、错乱或状态显示不准确都会严重影响体验。

## 8. 待处理积压

- **长期开放的 PR**: [#4625 - feat(exec): allow extra bwrap bind roots](https://github.com/HKUDS/nanobot/pull/4625)
    - **创建时间**: 2026-07-01
    - **状态**: 已开放 25 天，仍未合并。
    - **建议**: 该 PR 是为高级用户提供安全沙箱扩展的重要功能，功能实现也相对独立。建议维护者评估其与 `v0.3.x` 系列计划的契合度，并给予反馈或推动其进入下一阶段的开发。

- **高优先级的开放 PR**: [#4928](https://github.com/HKUDS/nanobot/pull/4928) 和 [#5084](https://github.com/HKUDS/nanobot/pull/5084)
    - **创建时间**: 分别为 2026-07-14 和 2026-07-25。
    - **建议**: 这两个修复直接影响核心稳定性，且均为 P1 优先级。作为分析师，我强烈建议项目维护者优先审查并合并这两项 PR，以尽快解决生产环境中可能存在的严重问题，巩固 `v0.3.0` 的迭代成果。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 Hermes Agent 2026-07-26 的 GitHub 数据，我为您生成了以下项目动态日报。

---

### Hermes Agent 项目动态日报 | 2026-07-26

---

#### 1. 今日速览

今日项目社区活跃度 **极高**，共处理了 50 条 Issue 和 50 条 PR，显示出强大的社区参与和问题解决动力。核心热点集中在 **数据库稳定性和桌面客户端的连接认证问题**上，多个关于 `kanban.db` 和 `state.db` 损坏的 Bug 被反复提及。社区贡献者迅速响应，多个关键的 Bug 修复 PR 已于今日提交，特别是针对 **SQLite WAL 模式锁冲突** 和 **Windows 桌面网关认证循环** 的修复，体现了项目对稳定性的高度重视。尽管没有新版本发布，但密集的修复活动预示着一次重要的维护性发布即将到来。

#### 2. 版本发布

- **无新版本发布。**

#### 3. 项目进展

今日项目在稳定性、安全性和兼容性方面取得了重要推进，多个核心 Bug 被成功修复并合并。

- **桌面客户端连接与认证修复：**
  - **PR #71714** (`fix(desktop)`) 被关闭（已合并），修复了桌面客户端在连接远程认证网关时陷入启动循环（`401 no_cookie`）的问题。这是一个关键的回归修复，解决了 #71514、#71305、#71491 等多个用户报告的同类问题。
- **Gemini 模型流式调用修复：**
  - **PR #54355** (`fix(gemini)`) 被关闭（已合并），解决了 Gemini 模型在并行工具调用时可能因 SSE 流式拆分导致的密钥冲突问题，提升了多工具调用的稳定性。
- **链接标题显示优化：**
  - **PR #62020** (`fix(desktop,tui)`) 被关闭（已合并），修复了桌面和 TUI 界面中，链接标题始终被网络获取的标题覆盖的问题，现在能够保留用户或 Agent 自定义的链接文本。今天提交的 PR #71716 是此问题的补充修复。

这些修复表明项目正在通过社区和核心团队的共同努力，快速解决用户在实际使用中遇到的严重体验问题。

#### 4. 社区热点

今日社区讨论的焦点高度集中在数据库损坏和桌面客户端连接问题上，反映出用户对项目核心稳定性的强烈关注。

- **#34385 & #53819: Kanban 数据库并发损坏问题**
  - 这两个 Issue (#34385, #53819) 同为 `type/bug, comp/cron`，讨论 `kanban.db` 在并发多进程写入下出现的索引损坏。用户 `hairui-hermes` 和 `wernerhp` 都提供了详细的根因分析，是社区非常关心的稳定性隐患。目前有 PR #71724 正在尝试从根本上修复此问题。
- **#71576: Nous Portal 缓存策略导致成本问题**
  - 用户 `brandonm` 报告的 #71576 指出了 Nous Portal 未能正确实现 Anthropic 模型的路由粘性，导致缓存命中率仅为 **39%**（理论上应为100%），造成约 **2.3倍的成本增加**。这个问题直接触及用户的核心利益（成本），尽管为 P0 级别尚未修复，但引起了社区广泛关注。
- **#71418: 长期运行用户的压力测试反馈**
  - 用户 `eaglezzz0522-cloud` 分享了长达63天、54K会话的极限使用体验，虽然表达了对 Hermes 的喜爱，但指出了硬性限制。这类反馈对项目长期发展和架构优化极具价值。

#### 5. Bug 与稳定性

今日报告的 Bug 主要集中在数据库损坏、客户端启动失败和配置解析错误上，显示了项目在扩展性和兼容性方面的挑战。好消息是，绝大多数问题已有对应的修复 PR。

| 严重程度 | Issue # | 问题描述 | 状态 | 修复 PR |
| :--- | :--- | :--- | :--- | :--- |
| **P0** | #71576 | Nous Portal 未启用 Anthropic 模型的路由粘性，导致缓存成本增加 2.3 倍 | **待修复** | 暂无 |
| **P1** | #69784 | 内置 SQLite 3.50.4 存在 WAL 重置损坏 Bug，建议升级至 3.51.3 | **已关闭** | PR #70200 |
| **P2** | #48434 | Windows 桌面远程网关注册后，保存并重连失败 | **已关闭** | PR #71714 (关联修复) |
| **P2** | #71514 | 桌面端在连接认证网关时因 `401` 响应陷入启动循环 | **已关闭** | PR #71714 |
| **P2** | #71305 | 桌面端在远程自托管网关上更新后陷入启动循环 | **已关闭** | PR #71714 |
| **P2** | #71710 | 网关在 `model.default` 配置中不解析 `${VAR}` 环境变量 | **新开** | PR #71722 |
| **P2** | #71242 | Anthropic 适配器未正确传递缓存 token 数据，导致成本计算失真 7 倍 | **待修复** | 暂无 |
| **P3** | #34385 | Kanban 数据库在并发多进程访问下出现索引损坏 | **待修复** | PR #71724 (提议修复) |
| **P3** | #63386 | `state.db` 在 macOS 上出现 FTS 全文搜索索引损坏 | **待修复** | 暂无 |

#### 6. 功能请求与路线图信号

今天社区提出的新功能诉求更加聚焦于 Agent 能力的精确控制和可定制性。

- **精确的委派控制 (Delegation Profiles):**
  - **Issue #71727** 和 **PR #71728** 提出了“命名委派配置”的概念。这允许用户为 `delegate_task` 定义一组完整的、带名称的模型和凭证组合，避免 Agent 在委派任务时选择不兼容的模型/端点组合，是 Agent 开发中一个非常实用的功能性增强。预计其被纳入下一版本的可能性很高。
- **实时时间感知 (Turn-level Live Time Context):**
  - **Issue #10421** 提议为 Agent 的每一轮对话提供确切的“当前”时间/日期信息，而不是仅依赖会话开始时间。这对于需要时间敏感决策的任务（如规划、股票查询）至关重要。此需求评论和点赞数很高，表明这是社区共识度较高的功能痛点。

#### 7. 用户反馈摘要

- **极限使用下的性能瓶颈:** 用户 `eaglezzz0522-cloud` (#71418) 在经历了54K会话的极限使用后，报告了Session搜索速度下降和本地存储膨胀的问题。这提示项目需要优化长期运行下的数据管理和检索性能。
- **桌面端连接体验是核心痛点:** 多个关于桌面端无法连接、陷入启动循环的反馈（#48434, #71514, #71491）表明，云/远程网关的连接体验是用户高频使用的核心场景，稳定性问题严重影响了用户对产品的信任度。
- **对数据库损坏的担忧:** 用户 `hairui-hermes` 和 `wernerhp` 对 `kanban.db` 损坏的详细分析（#34385, #53819）展示了专业用户在遇到数据问题时的深度投入和挫败感，社区对数据库健壮性的诉求非常迫切。
- **对成本控制的敏感性:** 用户 `brandonm` 指出的缓存成本问题 (#71576) 和 `datanerdie` 指出的 Anthropic Token 成本计算失真问题 (#71242) 表明，随着项目被用于更多生产级场景，成本计量和优化的需求正成为社区关注的焦点。

#### 8. 待处理积压

- **LSP 子进程泄漏问题:**
  - **Issue #25016** (创建于 2026-05-13)：项描述了 LSP 管理器存在 `_idle_timeout` 但缺少回收机制，导致长期运行的网关进程因 LSP 子进程泄漏而内存持续增长（约 200MB/个）。这是一个中等严重性但影响范围广泛的积压问题，涉及 Agent 核心功能的稳定性。建议维护者优先评估是否可以将此问题与近期数据库修复的 Sprint 结合处理。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-07-26

## 1. 今日速览

过去24小时内，PicoClaw 项目保持中等活跃度：共更新2个 Issue 和4个 Pull Request，无新版本发布。一个关于 `SplitMessage` 挂起的 Bug 已通过 PR #3295 修复并合并；Matrix 同步循环断连无重连的严重 Bug（#3203）仍在讨论中，尚无修复方案。社区贡献者继续推动新功能（如 Simplex 通道类型、Google Calendar 集成），但部分旧 PR 长期未合并。整体来看，项目在 bug 修复和功能扩展上均有进展，但需关注长期未响应的积压 PR。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

过去24小时合并/关闭了3个 PR，项目在以下方面取得推进：

- **修复消息分割挂起**（#3295，已合并）：PR #3295 修复了当 fenced-code 块头部信息字符串超过 `maxLen` 时 `SplitMessage` 函数发生无限挂起的问题。通过回退到有界原始分割确保始终能继续执行，并增加了回归测试。该合并提升了消息分片稳定性。
- **集成 Email 工具、日历与系统状态概览**（#339，已于2026-07-25合并）：这个持续近半年的功能 PR 终于被合并，新增了 Google Calendar 集成、增强的 Email 轮询与内容抓取，以及 GitHub 工具和系统状态概览。这是一个较大的功能扩展。
- **支持 9router 网关响应与 Linux ARMv7 构建目标**（#3205，于2026-07-25合并）：修复了 openai_compat provider 无法解析 9router 网关响应的问题，并为 launcher 添加了 ARMv7 构建目标，便于在 Raspberry Pi 3 B+ 上运行。

此外，仍有1个开放 PR：
- **新增 Simplex 通道类型**（#3193，开放中）：自2026-06-27创建，最近更新于2026-07-25，尚未合并。

## 4. 社区热点

**Issue #3203 — Matrix sync loop 无重连逻辑**  
链接：https://github.com/sipeed/picoclaw/issues/3203  
评论数最多（6条），获 👍 2 次，是社区最关注的问题。用户 `weissfl` 报告 Matrix 通道的 `/sync` 长轮询在发生网络中断或 homeserver 重启后会永久死亡，且因主进程存活无法触发 systemd 自动重启，导致服务静默失效。社区成员在评论中讨论了可能的临时方案（如 `systemd` watchdog 或内部心跳检测），但均未转化为 PR。该 Bug 严重影响 Matrix 用户的生产可用性，亟需核心开发者介入。

**Issue #3294 — `/list models` 只显示当前模型**  
链接：https://github.com/sipeed/picoclaw/issues/3294  
用户 `2suige-coder` 指出配置了多个模型后，`/list models` 命令仅显示当前使用的模型和 provider，与命令名称和描述不符。这是一个用户体验方面的缺陷，暂无 PR 关联，属于较易修复的查询逻辑 bug。

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|----------|----------|------|------|
| 🔴 严重 | #3203 | Matrix sync loop 无重连逻辑，网络/服务中断后静默死亡 | 开放，无修复 PR |
| 🟡 中等 | #3294 | `/list models` 仅显示当前模型而非全部已配置模型 | 开放，无修复 PR |
| 🟢 已修复 | #3295 | `SplitMessage` 在 fenced-code 头部超长时无限挂起 | 已于今日合并 |

## 6. 功能请求与路线图信号

- **Simplex 通道支持**（PR #3193）：社区贡献者 `dim` 为 PicoClaw 添加了 Simplex 聊天协议的支持，这是继 Matrix、Telegram、Email 之后的新通道类型。该 PR 已开放近一个月无更新，可能由于维护者审阅耗时或需要更多测试。若合并，将显著扩展项目支持的通信网络。
- **Google Calendar、Email 工具、系统状态概览**（已合并 PR #339）：此功能长期被用户期盼，合并后用户可通过 PicoClaw 执行日历查询、邮件收发和系统监控，增强了作为个人助理的实用性。
- **ARMv7 构建支持**（已合并 PR #3205）：满足 Raspberry Pi 3 B+ 等老旧 ARM 设备的运行需求，扩展了项目部署场景。

## 7. 用户反馈摘要

- **Matrix 用户痛点**（#3203）：用户 `weissfl` 描述了因缺乏重连逻辑导致的服务间歇性不可用，系统管理员无法察觉，需手动重启。该问题在家庭服务器和低稳定性网络环境下尤为突出。
- **模型列表困惑**（#3294）：用户 `2suige-coder` 期望 `/list models` 能展示所有配置的模型列表以方便切换或管理，但实际行为与直觉相悖，影响配置管理效率。
- **长期等待的集成**（PR #339 评论历史）：该 PR 自2月提交，期间经过多次讨论与修改，最终于7月25日合并，评论中有用户表达对日历集成功能的感谢。

## 8. 待处理积压

- **PR #3193 — Simplex 通道类型**（2026-06-27 创建，2026-07-25 最后更新）  
  链接：https://github.com/sipeed/picoclaw/pull/3193  
  该 PR 添加了全新的通信通道，但维护者近一个月无评论或合并操作。建议项目维护者尽快审阅或给出反馈，避免贡献者流失。

- **Issue #3203 — Matrix 重连逻辑**（2026-07-02 创建，持续活跃）  
  链接：https://github.com/sipeed/picoclaw/issues/3203  
  尽管社区已提出多种解决思路（如增加内部心跳、使用 systemd watchdog），但尚无核心开发者认领或提交修复 PR。作为严重 Bug，应优先安排开发资源。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，根据您提供的NanoClaw项目数据，我已为您生成以下2026年7月26日的项目动态日报。

---

# NanoClaw 项目动态日报 | 2026-07-26

## 今日速览

项目今日进入**高活跃度开发与修复周期**。过去24小时内，共有11个Pull Request待处理，其中**10个处于待合并状态**，数量激增，表明有大量代码改动等待审核。同时，社区报告了**2个关键Bug**，均已获得修复性PR，反馈链条清晰且响应迅速。虽然无新版本发布，但项目在**核心代理上下文一致性、容器安全加固**以及**原生应用集成**等方面取得了显著进展，展现了良好的项目健康度和维护者响应能力。

## 版本发布

**无新版本发布。**

项目当前暂无新版本于今日发布。

## 项目进展

今日项目主要进展集中在安全性与核心逻辑修复方面。虽然合并/关闭的PR较少，但一个重要的安全加固PR已经关闭，标志着该项目在多租户安全隔离方面迈出坚实一步。

-   **[CLOSED] 容器安全加固 - PR #2748** (`boazdori`): 该PR已被合并/关闭。它为每个会话代理容器默认启用了 `--cap-drop=ALL`、`--security-opt no-new-privileges:true` 和 `--pids-limit 2048` 等安全配置。此举作为纵深防御策略，能有效限制即使被攻破的容器所能调用的Linux内核能力，并防止其进行fork炸弹攻击。这是提升多代理场景下宿主安全性的重要里程碑。 [查看详情](https://github.com/nanocoai/nanoclaw/pull/2748)

## 社区热点

今日社区最活跃的讨论均源于两个新报告的Bug，并立即催生了对应的修复PR。开发者们对代理运行时状态的一致性和消息处理逻辑表达了高度关注。

-   **热点 Issue & PR：代理上下文缺失问题**
    -   **Issue #3134** (`brianjcohen`): 用户报告了一个关键问题：当“主机”（Host）代表代理发送消息（如审批卡、拒绝提示）时，这些消息不会出现在该代理的上下文中。这意味着代理对自己发送过的内容缺乏记忆，可能导致后续决策失误。 [查看详情](https://github.com/nanocoai/nanoclaw/issues/3134)
    -   **PR #3135** (`brianjcohen`): 该用户迅速提交了修复PR，提出在代理上下文中“镜像”主机代表代理发送的消息，从而解决了代理的“失忆”问题。 [查看详情](https://github.com/nanocoai/nanoclaw/pull/3135)
    -   **分析**: 这反映出社区对 **AI代理运行过程的可追溯性和状态一致性** 有极高要求。用户（特别是开发者）期望代理能完全理解自己经历过的对话，即使是系统代发的消息也不例外。

-   **热点 Issue & PR：消息轮询逻辑Bug**
    -   **Issue #3132** (`buzali`): 用户发现了一个严重的轮询逻辑Bug。代理在查询后跟随的轮询（follow-up poll）会错误地将不符合触发条件（`trigger=0`）的消息拉入活跃查询中，绕过了“积累门”（accumulate gate）。这可能导致代理基于不完整或不相关的消息做出反应。 [查看详情](https://github.com/nanocoai/nanoclaw/issues/3132)
    -   **PR #3133** (`buzali`): 该用户附上了修复PR，确保在 `processQuery` 的跟随轮询路径上也正确检查 `trigger=1` 条件，与外部批次循环保持一致的逻辑。 [查看详情](https://github.com/nanocoai/nanoclaw/pull/3133)
    -   **分析**: 这表明代理的消息处理管道存在 **细微但关键的竞态条件或逻辑分支不一致**。社区不仅发现了问题，还定位到了具体的代码行（`container/agent-runner/src/poll-loop.ts`），体现了很高的技术水平。

## Bug 与稳定性

今日共报告2个Bug，均已获得修复PR。严重程度均较高，涉及核心运行时逻辑。

1.  **[严重] 代理上下文不完整 - Issue #3134**：主机代发消息未进入代理上下文，影响代理行为一致性。 **已有修复PR:** [#3135](https://github.com/nanocoai/nanoclaw/pull/3135)
2.  **[严重] 消息轮询逻辑缺陷 - Issue #3132**：跟随轮询路径未遵循 `trigger=1` 门控，导致不符合条件的消息被处理。 **已有修复PR:** [#3133](https://github.com/nanocoai/nanoclaw/pull/3133)

## 功能请求与路线图信号

今日虽无全新的功能请求，但从待合并的PR中，我们可以看出项目在未来版本中可能吸纳的功能方向：

-   **原生应用/流程自动化集成（技能系统强化）**: `PR #3128` 新增了一个“航班值机”容器技能（Container Skill）。这暗示了路线图正在朝着 **将NanoClaw与真实世界的自动化流程深度绑定** 的方向发展，使代理能操作标准化的在线服务。 [查看PR](https://github.com/nanocoai/nanoclaw/pull/3128)
-   **开发者体验增强**:
    -   `PR #2211` 提议增加“工具可见性”技能，让代理调用工具的过程实时展示在对话中。这提升了调试和交互的透明度。 [查看PR](https://github.com/nanocoai/nanoclaw/pull/2211)
    -   `PR #3124` 修复了当MCP服务器不可用时的错误报告，提升了用户体验。 [查看PR](https://github.com/nanocoai/nanoclaw/pull/3124)

## 用户反馈摘要

从今日的Issues和PR讨论中，可提炼出以下用户痛点与使用场景：

-   **核心痛点：运行时状态不透明**。用户（`brianjcohen`, `buzali`）通过提交高质量Bug报告的方式，强烈反馈了“代理不知道自己说了什么”、“代理在错误的时间点拾取了错误的消息”等问题。这表明开发者在将NanoClaw用于复杂、多轮、状态敏感的自动化任务时，对运行时上下文的一致性和可预测性有很高的要求。
-   **使用场景：生产级部署的合规与安全**。PR #2748 的关闭以及PR #3129、#3130 和 #3131 的提出，表明用户群体（如 `boazdori`, `gavrielc`）正在将NanoClaw推向更严肃的生产环境。他们对**安全性（容器逃逸防护、敏感目录挂载限制）、数据完整性输入校验** 以及**运维清理（卸载脚本的完备性）** 有明确需求。
-   **满意之处**：尽管Bug存在，但社区响应迅速，用户提出的问题几乎立即有修复PR跟进，这种 **“发现即修复”** 的模式让贡献者感到满意和高效。

## 待处理积压

-   **长期未响应的功能/技能PR**: `PR #2211` (**tool-visibility skill**) 自5月3日创建，虽于7月25日刚有更新，但在长达三个月未合并的状态下，作者通过Fork自行维护。这是一个有价值的**开发者体验改善**特性，长期处于等待审核状态。维护者需评估其优先级，避免因PR堆积消耗社区贡献者的积极性。 [查看PR](https://github.com/nanocoai/nanoclaw/pull/2211)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是根据您提供的 IronClaw 项目 GitHub 数据生成的 2026-07-26 项目动态日报。

---

## IronClaw 项目动态日报 — 2026-07-26

### 1. 今日速览

项目保持高活跃度，24小时内处理了11条Issue和19条PR，表明开发与社区反馈循环健康。核心进展集中在 **WebUI 性能与可访问性优化** 以及 **错误恢复（error-recoverability）这条主轴任务** 上。多个针对用户痛点（如取消运行状态错误、自动化列表闪烁）的修复PR已成功合并，体现了快速迭代能力。此外，关于 **GitHub认证循环** 和 **Telegram/Slack集成引导** 的Issue被提出，揭示了用户体验中尚存的“最后一公里”问题。

### 2. 版本发布

*无*

### 3. 项目进展

今日合并/关闭了多项重要PR，显著提升了应用稳定性和性能，推进了架构重构。

- **WebUI 性能与可访问性**
  - **PR #6632 ([近合并]**: 实现了**路由级代码拆分**，将初始JS包体积从 **1,227 kB 锐减至 377 kB (gzip 后从 349 kB 降至 116 kB)**，极大地改善了首次加载体验。
  - **PR #6624 ([合并]**: 修复了**扩展配置弹窗的键盘焦点** 问题，现在弹窗能正确捕获并恢复焦点，提升了键盘可访问性。
  - **PR #6626 ([合并]**: 修复了切换自动化过滤器时**完整骨架屏闪烁** 的问题，通过保留已有数据实现了无闪烁切换。
  - **PR #6627 ([合并]**: 修复了**取消运行失败后聊天状态错误** 的问题，确保当后端取消请求失败时，前端仍能正确显示运行状态和停止控件。
  - **PR #6680 ([合并]**: 修复了根导航时**工作区（workspace）树状态丢失** 的问题，提升了导航体验的连贯性。

- **架构与代码质量**
  - **PR #6669 ([合并]**: 将**扩展主机（Extension Host）** 的拥有权从组合模块（composition）中移出，清理了依赖关系，使架构更加清晰。
  - **PR #6673 ([合并]**: 引入了**生产代码结构死代码检测机制**，确保新的死代码抑制项无法通过CI，维护了代码库的整洁度。
  - **PR #6670 ([合并]**: 清理了11份过时的Reborn架构文档，并整合了当前最新的设计指南，降低了新贡献者的理解成本。

- **核心功能 (Reborn 与错误恢复)**
  - **PR #6677 ([待合并]**: 为 **错误恢复（recoverability）** 主线任务 (Issue #6284) 贡献了关键代码，实现了编译期强制的错误分类矩阵，是模型能从100%的中断错误中恢复的关键一步。
  - **PR #6678 ([待合并]**: **产品命令管道（/model, /status）** 在 Slack、Telegram、WebChat 上端到端生效，实现了命令声明一次、所有平台自动适配的架构目标，这是 Reborn 架构的重要里程碑。

### 4. 社区热点

- **`#6284` - [EPIC] 错误恢复终局之战**
  - **链接**: [Issue #6284](https://github.com/nearai/ironclaw/issues/6284)
  - **分析**: 此 Issue 是整个项目最核心的路线图任务之一，目标是让模型能从它遇到的100%的运行错误中恢复。虽然评论数不多，但 **PR #6677** 和 **PR #6674** 直接为其贡献代码，表明它是开发团队当前的工作重心。这反映了项目在追求模型自主性和鲁棒性上的决心。

- **`#6667` - 被拒绝的 GitHub PAT 导致认证提示无限循环**
  - **链接**: [Issue #6667](https://github.com/nearai/ironclaw/issues/6667)
  - **分析**: 用户反馈了糟糕的认证体验。当使用的GitHub个人访问令牌无效时，系统未能向用户显示任何错误信息，而是反复弹出认证请求。这引起了社区关注，因为它直接影响了用户的信任和基础功能使用。该Issue目前处于开放状态，尚无关联的Fix PR。

### 5. Bug 与稳定性

| 严重程度 | 问题描述 | Issue 链接 | Fix PR 状态 |
| :--- | :--- | :--- | :--- |
| **高** | **GitHub PAT 被拒后无限循环认证**，用户无法得知原因 | [#6667](https://github.com/nearai/ironclaw/issues/6667) | 无 |
| **中** | **取消运行失败后，前端显示空闲但后端仍在运行**，用户与界面状态不一致 (已修复) | [#6620](https://github.com/nearai/ironclaw/issues/6620) | PR [#6627](https://github.com/nearai/ironclaw/pull/6627) (**已合并**) |
| **中** | **扩展配置弹窗无法正确捕获焦点**，键盘用户可Tab到弹窗背后 (已修复) | [#6621](https://github.com/nearai/ironclaw/issues/6621) | PR [#6624](https://github.com/nearai/ironclaw/pull/6624) (**已合并**) |
| **低** | **切换自动化过滤器会显示全屏加载骨架屏**，体验突兀 (已修复) | [#6622](https://github.com/nearai/ironclaw/issues/6622) | PR [#6626](https://github.com/nearai/ironclaw/pull/6626) (**已合并**) |
| **低** | **工作区（workspace）树状结构在根导航时状态丢失** | [#6680](https://github.com/nearai/ironclaw/pull/6680) | PR [#6680](https://github.com/nearai/ironclaw/pull/6680) (**已合并**) |

### 6. 功能请求与路线图信号

- **WebUI 启动性能优化** (Issue [#6628](https://github.com/nearai/ironclaw/issues/6628)): 由社区成员 `italic-jinxin` 提出，并已由同一作者通过 PR [#6632](https://github.com/nearai/ironclaw/pull/6632) 完成，JS 包体积大幅降低。该功能已被快速纳入项目，体现了及时响应用户反馈的能力。
- **集中化管理 Rust 依赖** (Issue [#6675](https://github.com/nearai/ironclaw/issues/6675)): 建议利用 Cargo workspace 的 `[workspace.dependencies]` 统一依赖版本。此建议获得2个 👍，属于代码质量和可维护性改进，路线图信号明确，预计很快会被采纳。
- **签名功能 Phase B: 签名意图 + 按Agent密钥生命周期** (PR [#6672](https://github.com/nearai/ironclaw/pull/6672)): 这是一个大型PR，推进了 Ledger 复兴计划。它引入了Agent对交易进行加密证明的能力，属于高级安全功能，虽然尚未合并，但显示了项目向更高安全等级演进的长远规划。
- **v1 发布前清单：集成引导与配置** (Issues [#6671](https://github.com/nearai/ironclaw/issues/6671), [#6668](https://github.com/nearai/ironclaw/issues/6668)): 用户反馈了Telegram和Slack集成过程中的引导空白和死胡同问题，表明项目在打磨v1版本的用户体验，特别是新手引导流程方面，仍有改进空间。

### 7. 用户反馈摘要

- **用户配置受阻**: 用户 `thisisjoshford` 在配置 **Telegram** (Issue [#6671](https://github.com/nearai/ironclaw/issues/6671)) 和 **Slack** (Issue [#6668](https://github.com/nearai/ironclaw/issues/6668)) 时遇到了困惑。前者在直接操作时提示“需要管理员配置”，而管理员配置入口又很深，用户感到困扰：“The only way to reach the admin bot-token setup is to... scroll to the bottom.” 后者则抱怨Agent本身不知道Slack可以连接，这属于典型的引导空白。
- **糟糕的认证流程**: 同样是 `thisisjoshford`，他在使用**GitHub PAT** 时遇到了无限循环的认证提示，深感挫败：“the provider‘s rejection is never surfaced — the user has no way to know their token is bad.” 用户期望至少能看到失败的具体原因。
- **性能提升获认可**: 虽然没有直接的用户评论，但 PR [#6632](https://github.com/nearai/ironclaw/pull/6632) 将JS包体积减少近**70%**，这类优化通常会受到用户，特别是网络条件较差用户的欢迎。

### 8. 待处理积压

- **`#5598` - chore: release** 
  - **链接**: [PR #5598](https://github.com/nearai/ironclaw/pull/5598)
  - **说明**: 这是一个由CI bot创建，已开放超过3周的发布PR，其中包含 `ironclaw_common` 和 `ironclaw_skills` 的破坏性变更。长时间未合并可能阻塞了依赖这些库的下游项目。建议维护者评估并尽快处理此发布。

- **`#6284` - [EPIC] 错误恢复终局之战** 
  - **链接**: [Issue #6284](https://github.com/nearai/ironclaw/issues/6284)
  - **说明**: 作为该项目最宏大的EPIC，虽然已有相关PR，但其完成度与时间线值得持续关注。任何相关的讨论或阶段性成果都将是社区关注的焦点。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为 LobsterAI 项目分析师，根据您提供的 2026 年 7 月 26 日的数据，我为您生成以下项目动态日报。

---

# LobsterAI 项目动态日报 | 2026-07-26

## 今日速览

今日项目活跃度**中高**。最显著的特征是**大量积压的旧 Issue 和 PR 被集中清理并关闭**，总数达 19 项，而新提议仅为 1 项。这表明项目维护者在进行一次重要的“技术债务”清理工作。同时，**两项关于 Windows 平台安装和修复的关键 PR 被合并**，提升了应用的稳定性和安全性。整体来看，项目正在持续推进，但新功能开发节奏放缓，重心转向现有工作的收尾和平台健壮性加固。

## 项目进展

今日合并/关闭的 PR 中有两项核心工作值得关注：

1.  **Windows 平台安装器安全加固**
    - **PR [#2383](https://github.com/netease-youdao/LobsterAI/pull/2383) fix: windows install root foreign content protection** 和 **PR [#2384](https://github.com/netease-youdao/LobsterAI/pull/2384) fix(installer): harden Windows install and update recovery** 被合并。这两项修复专注于增强 Windows 安装程序的安全性，防止外部内容篡改，并强化了安装与更新过程中的恢复机制。这是提升用户在多平台，特别是 Windows 系统上体验稳定性的关键一步。

2.  **核心模型支持扩展**
    - **PR [#2381](https://github.com/netease-youdao/LobsterAI/pull/2381) feat: support kimi k3** 被合并，标志着项目已成功集成对 “Kimi K3” 模型的支持，这是持续扩展 AI 模型后端能力的重要进展。

此外，项目还合并了 9 个与 UI/UX 增强相关的“陈旧” PR，这些 PR 对应的功能（如工具调用批量操作、时间戳显示等）现已正式并入主线，显著提升了 Cowork 会话的用户体验。

## 社区热点

今日社区讨论热度较为分散，且主要集中在已关闭的旧 Issue 上。但有一个新开的 Issue 反映了用户的即时需求：

- **热点 Issue**： **[#2385 [OPEN] 对话框添加文件只能添加文件，不能添加文件夹](https://github.com/netease-youdao/LobsterAI/issues/2385)**
    - **状态**：仅有一人报告，但这是过去24小时内唯一的**新开放 Issue**。
    - **诉求分析**：用户期望能像其他 AI Agent（如 Claude Projects）一样，在对话中直接通过 “@” 或选择弹窗来引用整个文件夹，而不仅仅是单个文件。这说明用户在工作流中需要处理更复杂的文件结构，且对“文件夹级”上下文加载有明确需求。

## Bug 与稳定性

今日报告的 Bug 数量极少，且没有严重崩溃或回归问题。唯一的异常情况是一个功能缺失请求：

- **功能缺失 (轻度)**：**Issue [#2385 [OPEN]](https://github.com/netease-youdao/LobsterAI/issues/2385)**，报告了“无法添加文件夹作为附件”的限制。这被视作一项待开发的功能，而非程序错误。

尽管无新 Bug 报告，但昨日合并的两个 Windows 安装器修复 PR 暗示了项目在安装环节存在潜在的不稳定性问题，现已得到解决。

## 功能请求与路线图信号

今日清理的 8 个陈旧 Issue 恰好代表了此前社区呼声较高的体验优化方向。这些请求均已通过对应的 PR 实现，并随代码合并成为正式功能，极有可能纳入下一正式版本发布中。

- **已实现并合并的功能，间接指明路线图方向**：
    - **批量 ToolUse 展开/折叠**：提升多工具调用场景下的交互效率。
    - **会话列表错误状态指示**：增强会话健康状态的可视性。
    - **会话列表按时间分组**：优化大量会话的管理和组织。
    - **用户消息时间戳**：补充消息元数据，提升可追溯性。
    - **方向键回溯历史消息**：对标终端/聊天应用，提升输入效率。
    - **消息内容全文搜索**：替代仅标题搜索，大幅提升检索能力。
    - **Markdown 导出**：满足用户二次编辑和文本处理需求。
    - **MCP 服务器 JSON 配置导入**：简化高级用户的服务器配置流程。

而新出现的 **Issue #2385 (文件夹附件)** 则代表了一个全新的、更为精细的功能需求，可能会成为下一阶段的讨论重点。

## 用户反馈摘要

从今日关闭的 Issue 评论和 PR 摘要中，可以提炼出用户的普遍痛点：

- **操作效率与体验**：用户普遍反映在 Cowork 会话中，面对多工具调用时需要逐个点击操作`[#1326]`，且无法通过键盘高效回溯指令`[#1341]`，这影响了调试和迭代效率。
- **信息透明度**：用户希望在会话列表中能**一眼识别出错的会话**`[#1330]`，并能**知晓每条消息的具体发送时间**`[#1339]`，以更好地理解对话节奏和排查问题。
- **数据管理与导出**：用户表达了将对话**导出为纯文本格式**`[#1345]`进行二次编辑的强烈需求，说明截图已经不能满足工作流需求。同时，**搜索功能仅限标题**`[#1343]`严重限制了信息找回的效率。

核心诉求是：**将 LobsterAI 从一个功能可用的工具，打磨成一个高效、透明、信息结构化的专业工作平台**。今日大量旧 Issue 的关闭，正是项目组对此类反馈的系统性回应。

## 待处理积压

目前项目没有积压数月的陈旧 Issue。唯一待处理的关键项是：

- **[#2385 [OPEN] 对话框添加文件只能添加文件，不能添加文件夹](https://github.com/netease-youdao/LobsterAI/issues/2385)**：作为全场唯一的 Open Issue，它已成为项目在用户交互方面的首要待办事项。它虽非紧急 Bug，但直接影响了用户将 LobsterAI 作为项目级工作流的体验。项目维护者应评估其实现复杂度，并判断是否将其加入开发路标。

---

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-07-26）

## 1. 今日速览

过去 24 小时内，Moltis 项目未产生新 Issue，但 Pull Request 活跃度为 `高`。共处理 6 条 PR，其中 2 条已合并/关闭，4 条仍处于开放状态等待审查。无新版本发布。总体来看，项目在 **集成层（Slack、Nostr/ACP 协议）** 和 **文档规范** 两方面持续稳步推进，核心功能开发节奏健康。

## 2. 版本发布

（无）

## 3. 项目进展

今日合并/关闭的 2 条 PR 标志着项目在 **Slack 交互体验** 和 **开发规范** 上的重要改进：

- **#1165 [已合并] feat(slack): acknowledge messages with reactions and add reaction triggers**  
  为 Slack bot 添加了消息确认反应（acknowledgement reactions），解决了 Slack Bot 无法显示“正在输入”提示导致的用户不确定性。同时新增入站反应触发器，并修复了线程回复中一个已被证实的错误消息问题。  
  链接：https://github.com/moltis-org/moltis/pull/1165

- **#1167 [已关闭] docs: forbid Claude session URLs in commits and PRs**  
  扩展了 `CLAUDE.md` 中的 git 工作流规则，明确禁止在提交信息和 PR 描述中包含 `Claude-Session:` 等 AI 辅助会话链接，进一步规范协作流程（仅文档变更）。  
  链接：https://github.com/moltis-org/moltis/pull/1167

这两条 PR 的完成使项目在 **用户反馈信号** 和 **代码纪律** 上向前迈进一步。

## 4. 社区热点

当日虽未形成大量评论热帖，但以下两条开放 PR 因涉及核心协议扩展，值得关注：

- **#1169 [开放] feat(acp): expose Moltis as an ACP agent over stdio**  
  作者：penso。该 PR 将 Moltis 从仅作为 ACP 客户端的角色扩展为 **ACP 代理端**，允许任何 ACP harness（如 Zed、buzz-acp）将 Moltis 用作代理。这是项目架构的关键补全，社区对“双向 ACP”功能的需求由来已久。  
  链接：https://github.com/moltis-org/moltis/pull/1169

- **#1168 [开放] feat(nostr): add NIP-29 group chat support for Buzz channels**  
  作者：penso。为 `moltis-nostr` 添加对 Buzz（Block 的开源 AI 工作空间）的 NIP-29 群聊支持，使 Moltis 能够作为人类与 AI 共存团队频道中的平等成员。该项目与 Nostr 生态的整合持续深化。  
  链接：https://github.com/moltis-org/moltis/pull/1168

这两条 PR 背后反映了社区对 **异构代理集成** 和 **去中心化协作** 的强烈诉求。

## 5. Bug 与稳定性

当日无新报告的高严重性 Bug。但 PR #1165 在合并过程中修复了一个线程回复中的“错误消息”问题（confirmed wrong-message bug），该修复已随该 PR 合并生效。无其他待处理崩溃或回归问题报告。

## 6. 功能请求与路线图信号

当日开放的数条 PR 均属于新功能请求的直接实现：

- **ACP 代理端暴露（#1169）**：补全 Moltis 的 ACP 双角色能力，是下一版本可能包含的核心改进。
- **Nostr NIP-29 群聊支持（#1168）**：对接 Buzz 平台，标志着项目向 Nostr 生态迈进的重要一步。
- **Slack 消息阶段的反应反馈与 Block Kit 渲染（#1166）**：在 #1165 基础上进一步提供更丰富的交互反馈，包括排期、取消、投递失败等真实状态的处理。该 PR 目前仍在开放中，大概率会与 #1165 合并下线版本。
- **zvec 向量数据库内存后端（#1158）**：由社区开发者 demyanrogozhin 贡献的实验性后端，基于 Zvec 和 redb，可配合本地 llama-cpp 嵌入模型使用，功能门控在 `zvec` 特性下。该 PR 表明社区对 **轻量级、本地优先内存** 方案有明确需求。

以上 PR 若合并，将使 Moltis 成为一个 **更具互操作性的 AI 代理框架**。

## 7. 用户反馈摘要

当日无新 Issue 产生，因此无直接用户评论。但从 PR 描述中可以提取间接用户痛点：
- Slack Bot 无法显示输入状态 → 用户因缺乏反馈信号而混淆 → #1165/#1166 通过反应机制解决。
- 缺乏 ACP 代理端能力 → 外部 harness 无法将 Moltis 作为代理使用 → #1169 填补空白。
- Nostr 原生群聊缺失 → 需对接 Buzz 等协作工具 → #1168 满足该场景。

这些需求均已在开发中，社区整体满意度预计随这些 PR 的合并而提升。

## 8. 待处理积压

- **#1158 [长期开放] feat(memory): add zvec vector database memory backend**  
  创建于 2026-07-17，至今已开放 9 天，无新评论。该 PR 是社区贡献，涉及实验性后端，可能需要更多审查与测试才能合并。提醒维护者关注其与现有 `redb` 后端的兼容性及性能对比。  
  链接：https://github.com/moltis-org/moltis/pull/1158

- **#1166 [开放中] feat(slack): …phases, reconnect supervision, and Block Kit**  
  已于 #1165 合并后继续开发，暂无阻塞，但需协调与已合并更改的冲突。建议尽快安排 review。  
  链接：https://github.com/moltis-org/moltis/pull/1166

- **#1168、#1169** 目前状态良好，未出现响应延迟。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报 — 2026-07-26

**数据来源**: [github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**统计时段**: 2026-07-25 至 2026-07-26  UTC

---

## 1. 今日速览

- **整体活跃度**: 高。过去24小时共产生7条新Issue和7个PR，开发与社区反馈均处于活跃状态。
- **核心Bug集中爆发**: 同一底层问题（MCP驱动硬编码SSE传输）被三位用户重复报告（#6470、#6469、#6468），表明该bug影响范围广且用户响应强烈。
- **功能推进**: 两项关于记忆搜索reranker的PR（#5691、#5692）于今日被合并关闭，为版本发布扫清障碍；另有5个待合并PR持续进展。
- **无新版本发布**: 项目未发布任何新Release，当前稳定版仍为v2.0.1。
- **社区支持需求**: 出现纯新手求助（#6467）及模型连接故障（#6464），说明用户基础在扩大但门槛问题仍需关注。

---

## 2. 版本发布

无。最新稳定版为[QwenPaw v2.0.1](https://github.com/agentscope-ai/QwenPaw/releases)（Windows exe安装器）。

---

## 3. 项目进展

### 已合并/关闭的PR（重要里程碑）

| PR | 标题 | 摘要 | 链接 |
|----|------|------|------|
| [#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691) | feat(console): add reranker config UI for reme0.4 memory search | 为记忆搜索添加reranker可视化配置面板，支持模型名、Base URL、API Key、温度等设置，含完整中英文i18n（16个键）。 | [PR#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691) |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | feat(memory): add reranker for search results on reme0.4 | 在reme0.4混合检索（BM25+向量）后增加reranker重排阶段，大幅提升记忆搜索结果相关性。 | [PR#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) |

**项目整体向前迈进的幅度**:  
两个reranker相关PR的合并标志着QwenPaw的记忆搜索能力从“初步检索”进入到“智能重排”阶段，对需要高精度语义匹配的场景（如长期对话、知识管理）是重要增强。社区用户可立即在Web UI中配置reranker，无需手动修改配置文件。

### 待合并PR（5个）

| PR | 标题 | 状态 | 链接 |
|----|------|------|------|
| #6365 | fix(console): run test scripts on Windows | 首次贡献者修复Windows下npm脚本兼容性问题 | [PR#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) |
| #6276 | feat(browser): unified browser — one SDK, any backend | 统一浏览器控制SDK，支持多后端（控制面/执行面分离） | [PR#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) |
| #6399 | feat: add reranker UI config panel to ReMeLightMemoryCard | 为ReMeLightMemoryCard组件添加reranker配置面板（在#5691基础上补充） | [PR#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) |
| #6463 | feat(ci): deploy the website from the release orchestrator | 修复发布后官网（qwenpaw.agentscope.io）未自动更新的CI流程 | [PR#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) |
| #6462 | docs(sandbox): clarify native Windows sandbox support | 文档纠错：说明QwenPaw已原生支持Windows沙箱（AppContainer等），不再需WSL2 | [PR#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) |

---

## 4. 社区热点

### 最活跃讨论：MCP传输配置硬编码 Bug (#6470, #6469, #6468)

- **#6470**（2条评论，0个👍）: 用户 `JohnyLe` 定位到 `_setup_transport` 方法硬编码调用 `mcp.client.ss...`，导致所有配置为 `streamable_http` 的服务器连接受阻。  
  [Issue#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)

- **#6469/#6468**（各1条评论）: 另两位用户报告相同错误“Failed to query tools from MCP server: Session terminated”，经诊断确认根因一致。  
  [Issue#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469) | [Issue#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468)

**分析**:  
该Bug影响所有使用Streamable HTTP传输的MCP服务器，是v2.0.1的严重回归。三位用户同时报告说明该问题具有普遍性，但截至今日尚无任何Fix PR。社区协作方式：第一位报告者已提供根因（文件位置+行号），后续报告者进行了交叉验证。建议维护者优先合并或创建一个修正PR。

### 其他高关注度Issue

| Issue | 标题 | 评论数 | 链接 |
|-------|------|--------|------|
| #6460 | Edge+Wayland下高CPU占用 | 2条 | [Issue#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) |
| #6464 | 连接测试失败：API error when connecting to model 'xxx' | 1条 | [Issue#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) |

---

## 5. Bug 与稳定性

按严重程度排列，是否已有Fix PR：

| 严重程度 | Issue | 标题 | 已有Fix PR? |
|---------|-------|------|-------------|
| **严重** | #6470 / #6469 / #6468 | MCP驱动忽略transport配置，硬编码SSE客户端 | ❌ 无 |
| **中等** | #6460 | Edge+Wayland下单标签高CPU占用，怀疑大结果集渲染/WebSocket推送 | ❌ 无（仅社区分析） |
| **中等** | #6464 | 连接测试失败：API error when connecting to model 'xxx'（Pro/Free模型下拉为空） | ❌ 无（环境：AgentScope Platform部署） |
| **低** | #6467 | 新手搭建节点失败（与QwenPaw核心无关，疑似网络代理配置） | N/A |

**关键提示**:  
- 重复报告表明MCP传输Bug需优先处理，建议在[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)中统一跟踪。
- #6460的高CPU问题与ComfyUI工作流场景相关，可能涉及前端渲染优化或WebSocket频率控制，需要性能 profiling。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 标题 | 社区热度 | 链接 | 潜在纳入版本 |
|-------|------|---------|------|-------------|
| #6466 | Feature: Allow agent to send clickable folder/file path buttons in chat | 1条评论，清晰需求 | [Issue#6466](https://github.com/agentscope-ai/QwenPaw/issues/6466) | 可纳入v2.0.2小版本（前端改动，风险低） |
| #6463 | feat(ci): deploy the website from the release orchestrator | 已提交PR | [PR#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) | 即将合并，属于CI改进 |
| #6462 | docs(sandbox): clarify native Windows sandbox support | 已提交PR | [PR#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | 即将合并，文档优化 |

**路线图信号**:  
- reranker功能（#5691/#5692）已完成核心UI+后端，但#6399（补充UI配置面板）仍在Open状态，预计下一版会完整合入。
- 统一浏览器SDK（#6276）是一项较大跨度的重构，仍在review阶段，可能进入v2.1计划。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

1. **MCP配置硬编码问题** (JohnyLe)  
   > “MCP driver在建立transport连接时硬编码使用了`ssc_client`，完全忽略了YAML配置文件中指定的`transport: streamable_http`。”  
   > 反馈专业，包含根因分析，表现出用户对MCP协议实现的深入理解。

2. **高CPU占用** (dayofyear)  
   > “打开QwenPaw首页…单个Edge标签页CPU占用持续走高，风扇加速。”  
   > 用户系统为Linux+Wayland+Edge，已排除日常浏览，锁定为QwenPaw页面触发。痛点：长时间停留时影响机器性能。

3. **模型连接失败** (albertfengjiajun)  
   > “QwenPaw v2.0.1无法连接到任何模型……聊天界面模型下拉列表为空。”  
   > 用户是AgentScope Platform上的部署者，表明该版本可能存在后端配置兼容性问题，影响Pro/Free用户。

4. **新手求助** (izr9)  
   > “我按照这个视频操作，想搭建一个翻墙上网的节点。为什么最后节点访问是-1？”  
   > 用户可能是低技术背景，将QwenPaw误用于代理搭建（也可能与功能误解有关）。建议项目组考虑增强新手引导文档。

5. **UI体验改善建议** (Ra-M497)  
   > “当agent返回文件路径时，用户需要手动复制，建议输出可点击按钮打开文件夹。”  
   > 诉求明确，属于小投入高回报的易用性改进。

**总体满意度**: 用户对QwenPaw的功能深度（如MCP支持、reranker）认可，但稳定性（传输Bug、高CPU）和文档清晰度（新手问题）是当前主要槽点。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 最后更新 | 提醒 |
|------|------|------|----------|----------|------|
| **重要Bug（多次报告）** | [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver ignoring transport config | 2026-07-26 | 今日 | 已获三份用户确认，急需fix |
| **首次贡献者PR（待review）** | [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) | fix(console): run test scripts on Windows | 2026-07-22 | 2026-07-25 | 开发者`patrick-andstar`首次贡献，已等待4天，建议尽快review |
| **长期未关闭的PR（25天）** | [#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691) | feat(console): add reranker config UI for reme0.4 memory search | 2026-07-01 | 今日已合并 | ✅ 已关闭 |
| **长期未关闭的PR（25天）** | [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | feat(memory): add reranker for search results on reme0.4 | 2026-07-01 | 今日已合并 | ✅ 已关闭 |
| **文档改进（待合并）** | [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | docs(sandbox): clarify native Windows sandbox support | 2026-07-25 | 今日 | 无reviewer，提醒维护者合并 |

**说明**: 两个积累25天的PR终于被合并，是项目健康度的正面信号；但#6365等待review时间偏长，对于首次贡献者可能打击积极性。建议项目组建立“新贡献者24小时内首次响应”的SLA。

---

*本日报由AI自动生成，数据截止2026-07-26 UTC。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 ZeroClaw (github.com/zeroclaw-labs/zeroclaw) 项目数据，为您生成了 2026年7月26日的项目动态日报。

---

# ZeroClaw 项目每日动态 - 2026-07-26

## 1. 今日速览

今日项目活跃度极高，**更新量达到近期峰值**。过去24小时内，共产生19条Issue和50条PR，反映出一个大型开源项目在发布前夜的密集协作状态。尽管未发布新版本，但社区在安全与配置合规性（尤其是WhatsApp Web通道）、运行时稳定性和测试基础设施方面投入了大量精力。值得注意的是，今日出现了多个高优先级（P1）和影响严重（S1/S2）的Bug，且都已迅速获得开发者的响应和修复PR，显示出项目对稳定性问题的重视。

## 2. 版本发布

- **无**

## 3. 项目进展

今日合并或关闭了少量但关键的项目，修复了重要问题并推进了代码清理进程：

- **[PR #9123 - 已关闭] fix(plugins): host-stamp channel plugin routes**：修复了插件通道路由的归属问题。此PR是插件系统（Wasmtime/WIT）完善的关键一步，它确保了从插件发出的消息能被正确路由和溯源，为后续更复杂的插件交互奠定了基础。
- **[PR #9270 - 已关闭] fix(web/deps): resolve npm audit advisories**：及时响应了每日的npm审计失败报告 [Issue #9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235)，通过了三个高危依赖漏洞。这维护了项目的供应链安全底线。
- **[Issue #8962 - 已关闭] [Bug]: zeroclaw-runtime tests flake under parallel execution**：该长期存在的运行时测试间歇性失败问题终于被关闭。这通常意味着其根源已被修复，对提升CI的稳定性和开发者信心至关重要。

**项目状态**：从40多小时前（2026-07-24）开始，项目进入了为 `v0.8.4`（[跟踪Issue #8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)）做准备的密集开发阶段。大量的Bug修复和功能PR（如[PR #9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376)）表明代码库即将进入冻结期并进行发布。

## 4. 社区热点

今日讨论最热烈的议题集中在**安全配置陷阱**和**架构演进**上。

- **最具争议性 Issue：[Issue #9348 - [Bug]: WhatsApp Web answers every DM and every group under mode = business] (https://github.com/zeroclaw-labs/zeroclaw/issues/9348)**
    - **热度**：6条评论，所有Bug中讨论最多。被标记为 **S1 - 安全风险** 和 **P1**。
    - **分析**：该问题揭示了一个“安全反直觉”的配置漏洞。当用户将WhatsApp通道设置为“business”模式时，`dm_policy` 和 `group_policy` 等限制性配置**完全失效**，导致AI代理会回复所有未过滤的消息。这直接挑战了用户对配置项“所见即所得”的信任，可能引发严重的数据泄露事故。相关修复PR [PR #9354](https://github.com/zeroclaw-labs/zeroclaw/pull/9354) 已迅速提交，显示了项目对安全类反馈的极高响应速度。

- **最具深度的技术讨论：[Issue #6489 - [Feature]: "Everything is a plugin"](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)**
    - **热度**：持续获得5条评论，且被标记为 `no-stale`。
    - **分析**：这是一个长期存在的RFC，提议将“集成”（Channels, Providers等）和“插件”（Wasm组件）的概念统一。今日仍有讨论，表明社区对简化架构和统一扩展生态有持续诉求。这个宏大构想是项目未来高可扩展性的基石，但短期内会因其复杂性而决策缓慢。

## 5. Bug 与稳定性

今日报告的Bug数量多且严重，主要集中在**安全、配置与运行时**三大领域。好消息是，针对这些Bug的高质量修复PR也已同步提交。

**按严重程度排列：**

- **S1 - 安全风险 (Risk: High)**
    - **[Issue #9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)**：WhatsApp Web配置失效（如上文所述）。**已有修复PR: [PR #9354](https://github.com/zeroclaw-labs/zeroclaw/pull/9354)**

- **S2 - 行为退化 (Risk: High / Medium)**
    - **[Issue #9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)**：运行时核心库测试在master分支上19/20次失败，且有全局互斥锁中毒问题。严重影响CI可靠性。
    - **[Issue #9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373)**：对等代理（peer-agent）间的消息传递未进行成本追踪（cost-tracking），导致预算控制功能失效。
    - **[Issue #9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239)**：`config patch --json` 命令在某些错误路径下输出非JSON格式的纯文本错误，破坏了自动化工具集成。
    - **[Issue #9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)**：本地化（i18n）不完善，配置元数据在非英语界面上未翻译。

- **S3 - 次要问题 (Risk: Medium / High)**
    - **[Issue #9374](https://github.com/zeroclaw-labs/zeroclaw/issues/9374)**：CLI的 `run()` 函数在多处退出路径上未正确发送Agent生命周期结束事件（AgentEnd）。
    - **其他**：[Issue #9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) (可验证意图的约束检查绕过凭据链验证), [Issue #9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) (嵌套属性set_prop的错误信息不明确).

## 6. 功能请求与路线图信号

今日新提出的功能请求多为 **“补全性”** 和 **“基础设施优化”**，旨在填补v0.8.4版本的功能缺口。

- **强信号（可能纳入v0.8.4）：**
    - **[PR #9377 - feat(i18n): complete Chinese (zh) translations for all UI keys](https://github.com/zeroclaw-labs/zeroclaw/pull/9377)**：补全中文翻译，直接回应了[Issue #9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)的问题。国际化是近期热点。
    - **[PR #9371 - ci(tests): parallelize runtime stress gate](https://github.com/zeroclaw-labs/zeroclaw/pull/9371)**：优化CI流程，并行化运行时压力测试，以加速发布流程。
    - **[PR #9376 - chore(release): cut v0.8.4](https://github.com/zeroclaw-labs/zeroclaw/pull/9376)**：最直接的发布准备PR，目标是实现自微内核拆分后的首次crates.io发布。这是当前最重要的功能。

- **长期信号：**
    - **[Issue #9330 - RFC: AI-assisted PR pre-review and re-review](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)**：提议集成AI进行代码审查。这表明开发者社区在探索如何利用AI工具来管理项目自身不断增长的代码复杂度。
    - **[Issue #6489 - "Everything is a plugin"](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)**：尽管是长期规划，但其作为跟踪器的活跃度表明其优先级不会降低。

## 7. 用户反馈摘要

- **安全配置困惑 (Issue #9348)**：用户`belumume`报告，WhatsApp Web的配置文档和实际行为严重不符，将看似安全的`dm_policy` 等配置置于“business”模式下完全忽略。这引发了用户对配置系统可信度的担忧，“a config that reads as locked down behaves as fully open” 是能让任何运维人员感到棘手的典型安全陷阱。
- **测试环境痛点 (Issue #9357)**：开发者`AngryPacifist`报告了在标准测试环境下运行 `cargo test` 的糟糕体验——19/20次失败，且一个失败测试会“毒化”全局状态，导致后续测试全部失败。这严重影响了开发效率和CI的稳定性。
- **功能缺失：CLI创建的Cron任务 (Issue #9340)**：用户`AngryPacifist`指出，通过CLI创建的定时任务默认没有输出交付方式（`delivery.mode = "none"`），导致任务结果被“静默丢弃”。开发者认为这是一个“`ok`”状态，但用户直观上认为这是一个Bug，因为“无事发生”并未得到提示。

## 8. 待处理积压

以下是一些长期开放、可能影响项目健康度但更新较少的重要议题，提醒维护者关注：

- **高优先级（P1）待解决：**
    - **[Issue #9348 - WhatsApp Web配置失效](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)**：虽然已有修复PR，但尚未合并。此S1安全漏洞应被优先处理。
    - **[Issue #9239 - 命令 `config patch --json` 输出错误](https://github.com/zeroclaw-labs/zeroclaw/issues/9239)**：影响自动化工具链集成。
    - **[Issue #9340 - CLI创建的Cron任务无输出](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)**：影响用户体验。
    - **[Issue #9357 - 运行时测试大面积失败](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)**：阻碍了日常开发和版本发布。

- **长期未决架构RFC（需官方决策）：**
    - **[Issue #6489 - “一切都是插件”架构](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)**：已开放近三个月，作为对未来发展方向的规划，需要维护者给出阶段性结论或更明确的实施时间线。

- **需要作者回应的搁置PR：**
    - 检查今日所有标记为 `needs-author-action` 的PR（例: #8496, #9194, #8561, #8486, #7821, #8438）。其中， **[PR #8438 - feat(cron): add shell_output_format](https://github.com/zeroclaw-labs/zeroclaw/pull/8438)** 由项目的主要贡献者（principal contributor）提交，但其变更可能影响 `v0.8.4` 的范围，应等待原作者的最终回应和决策。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*