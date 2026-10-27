# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 03:12 UTC

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

# OpenClaw 开源项目日报 — 2026-08-05

## 1. 今日速览

过去 24 小时，OpenClaw 社区活跃度维持高位：共更新 500 条 Issues（新开/活跃 447 条，关闭 53 条）与 500 条 PR（待合并 372 条，已合并/关闭 128 条）。**尽管今日无新版本发布，但 PR 合并/关闭量达 128 条，表明修复与重构管线仍保持稳定输出。** 社区讨论高度集中在三类主题：Subagent 任务完成投递的静默丢失、Realtime voice 会话的资源边界失控、以及各类 P1 级回归问题（网关崩溃、迁移失败、消息丢失）。值得注意的是，大量 P1/钻石龙虾评级的问题长期停留在 `needs-maintainer-review` 状态，维护者响应速度正成为项目健康度的主要瓶颈。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

过去 24 小时共有 **128 条 PR 被合并或关闭**，主要集中在以下方向：

### 🎯 关键功能推进
- **macOS 原生 App 能力补齐**：[PR #119321](https://github.com/openclaw/openclaw/pull/119321) 为 macOS 端新增 realtime Talk relay，使原生麦克风/播放会话可复用 Gateway 的 Talk 生命周期，并修复了此前启动失败与麦克风恢复错误被隐藏的问题（合入后 macOS 语音链路正式对齐 iOS）；[PR #118505](https://github.com/openclaw/openclaw/pull/118505) 在 macOS 状态菜单中新增 Voice & Talk 设置入口，并改用 Gateway 的 `talk.catalog` 就绪结果而非本地凭据猜测，提升配置可靠性。

### 🛠️ 稳定性修复（已验证待合并）
- **回复队列解除阻塞**：[PR #119402](https://github.com/openclaw/openclaw/pull/119402) 修复了模型多次请求后仍无语义输出时，队列回复被永久阻塞的问题——此前机械性的尝试完成逻辑阻止了 no-progress 时钟触发恢复机制。
- **媒体附件误删**：[PR #119127](https://github.com/openclaw/openclaw/pull/119127) 修复了 `attachments.ttlHours` 的通用 mtime 清扫误入 `media/outgoing`、导致聊天历史中被引用的附件原件被删除、SQLite 中仅剩孤儿记录的问题。
- **TaskFlow 查找错误**：[PR #119130](https://github.com/openclaw/openclaw/pull/119130) 修正 `tasks flow show/cancel` 的 owner-key 解析逻辑——此前会命中已终结的 flow 而忽略仍在运行的同 owner 旧 flow。

### 🧹 代码质量与性能优化
- **启动性能**：[PR #119374](https://github.com/openclaw/openclaw/pull/119374) 将 xAI 插件的图片/视频/语音/实时对话/ OAuth 等可选能力运行时改为延迟加载，显著降低其作为插件导入开销最大来源之一的影响。
- **LOC 削减**：维护者 steipete 持续推进"生产代码量削减"活动，[PR #119416](https://github.com/openclaw/openclaw/pull/119416) 统一图片/视频几何归一化逻辑，[PR #119438](https://github.com/openclaw/openclaw/pull/119438) 合并 Telegram 出站动作/编辑/主题/富消息的重复合约与目标解析。

> ⚠️ 说明：列表仅展示了评论数最多的 30 条 PR，其余合并/关闭记录未在本次数据中完整披露。

---

## 4. 社区热点

### 🥇 最热 Issue：#116277 — DeepSeek v4 Flash 静默回复失败（104 条评论，已关闭）
[Issue #116277](https://github.com/openclaw/openclaw/issues/116277) — 2026-07-30 报告，8 月 4 日关闭。模型 `deepseek/deepseek-v4-flash` 在收到 Telegram 群组消息后静默失败，仅向用户抛出一条泛化的 "No reply was generated for this message" 兜底文案，无任何错误细节。104 条评论表明该问题在多个部署环境中被频繁复现，用户对「静默失败」模式的容忍度极低，核心诉求是：**失败时必须暴露原因与可操作的恢复路径，而非丢出一条无信息的兜底话术**。

### 🥈 次热 Issue：#116201 — Realtime voice 状态无限增长（58 条评论，OPEN）
[Issue #116201](https://github.com/openclaw/openclaw/issues/116201) — 实时语音会话以「条目数量」而非「硬所有权边界」作为资源上限，在慢速/停滞/突发场景下会保留已废弃的 consult 工作、大型 provider 帧与 pre-ready 音频，导致会话状态无界膨胀。讨论中社区普遍认为这是 **Realtime 架构从原型走向生产必须解决的第一优先问题**，并期待产品决策层给出明确的 ownership 模型。

### 🔥 共鸣点：Subagent 完成丢失三连发
- [#44925](https://github.com/openclaw/openclaw/issues/44925)（23 条评论）：Subagent 完成被静默丢弃，无重试、无通知、无自动重启
- [#67777](https://github.com/openclaw/openclaw/issues/67777)（10 条评论）：直接 announce 超时 / drain / orphan prune 时完成投递丢失
- [#92433](https://github.com/openclaw/openclaw/issues/92433)（9 条评论）：announce 转向后 requester run 已结束，完成被静默丢弃

三个 issue 的 root cause 均指向 `subagent-announce-delivery.ts` 中「优先同步直投、失败后条件回退、最后直接丢弃」的设计缺陷。这已成为社区公认的 **Agent 编排可靠性头号问题**，用户普遍反馈"结果丢失比不执行更糟糕"。

---

## 5. Bug 与稳定性

### 🔴 P0（升级阻断）
- **[#112395](https://github.com/openclaw/openclaw/issues/112395)**：从 2026.6.11 升级到 7.1 后，启动迁移 preflight 永久阻塞网关——迁移表与 lease 均为空，DB 显示健康但实际无法启动。**状态：OPEN**（diamond lobster，已有 linked PR，需验证）；升级用户强烈建议暂缓至修复发布。

### 🟠 P1（核心功能受损）

| Issue | 问题描述 | 状态 |
|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash 静默失败，输出泛化兜底文案 | 已关闭（104 条评论） |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker 永久抑制 Discord/WhatsApp，文档化的恢复路径（channels.start）以 WebSocket 1006 失败 | 已关闭 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话 transcript 投影重建死循环占用主线程，所有通道传输停滞数十秒 | OPEN，source-repro |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | 网关主线程从启动即被 plugin-metadata 快照与 fs statting 占满，本地 RPC 以 1006 死亡 | OPEN，needs-info |
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败：`no such column: entry_valid`，网关拒绝启动（2026.7.2） | OPEN，linked PR |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Anthropic 凭据恢复后，workspace-state 迁移残留导致主 agent 拒绝所有 turn | OPEN，recovery-stuck |
| [#116010](https://github.com/openclaw/openclaw/issues/116010) | 所有持久会话被硬编码截断在 128k 上下文，忽略模型与 contextTokens 配置 | OPEN，linked PR |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | 模型完成后 `chat.send` 因 stale expectedLeafEntryId 被持续拒绝（"thread switched branches"） | OPEN，linked PR |
| [#116116](https://github.com/openclaw/openclaw/issues/116116) | Anthropic 生成 catalog.json 违反自身 schema，触发所有 `openclaw models` CLI 崩溃 | OPEN，linked PR |

### 🟡 已有关联修复 PR 的进展
- **Slack 静默事件丢失**：[PR #119395](https://github.com/openclaw/openclaw/pull/119395) 修复了临时 API 失败导致 App Home/Agent View/Assistant 事件被吞的问题，现转为用持久化 durable 队列重新驱动。
- **排队回复阻塞**：[PR #119402](https://github.com/openclaw/openclaw/pull/119402) 解除机制已就绪，待 proof。
- **adapter 身份未返回误判**：[PR #119169](https://github.com/openclaw/openclaw/pull/119169) 将 `adapter_returned_no_identity` 重新归类为 `potentially_visible`，避免把已发送的回复误判为"未发送"而补发重复消息（merge-risk: 🚨 message-delivery）。

---

## 6. 功能请求与路线图信号

### 🌱 高潜需求（社区呼声较高）

| 功能 | Issue/PR | 信号强度 |
|---|---|---|
| **Control UI MathJax/LaTeX 渲染** | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 10 👍，9 条评论，P2，5 个月未动 |
| **YAML 配置文件支持** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 2 👍，9 条评论，P3 |
| **自托管 STT/TTS 接入 WebChat** | [#45508](https://github.com/openclaw/openclaw/issues/45508) | 2 👍，7 条评论，diamond lobster |
| **集中式多编码文件名处理工具** | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 1 👍，20 条评论，已有 PR #48578 修复 UTF-8 个案 |
| **内容级提示注入扫描（工具输出）** | [#79168](https://github.com/openclaw/openclaw/issues/79168) | 1 👍，6 条评论，需 security-review |

### 🧭 路线图信号
- **macOS/iOS 语音闭环**：PR #119321 与 #118505 落地后，OpenClaw 跨端 Realtime 语音基础设施基本成型，下一步大概率是 Android 端补齐。
- **插件生态开放**：[#71736](https://github.com/openclaw/openclaw/issues/71736) 提出 Control UI 插件贡献槽（chat modes、approval cards、event classifiers、input guards）——这是 SDK 化的关键一步，虽仍为 RFC，但被标记为 diamond lobster。
- **SDK/容器 QA 体系化**：[#118785](https://github.com/openclaw/openclaw/issues/118785) 由维护者 vincentkoc 主导，对 23 个容器 ID 与 31 个外部 app SDK ID 建立 primary QA proof 追踪，说明项目正在系统化收编外部生态接入质量。

---

## 7. 用户反馈摘要

### 😠 明确痛点
1. **静默失败是最大信任杀手**
   在 [#116277](https://github.com/openclaw/openclaw/issues/116277) 中，多位用户指出"与其发送毫无信息的兜底文案，不如明确告知模型错误原因"，104 条评论中出现了大量"我们不得不在日志里自己翻原因"的抱怨。
2. **内存管理的行为不一致**
   [#43747](https://github.com/openclaw/openclaw/issues/43747) 中，用户在 3 人团队里观察到 3 种完全不同的记忆管理方式——一个做 chunking/embedding 入库 SQLite，另一个用 Lanczos 索引，第三个什么都没配置但也能工作。"到底哪个是对的？"反映出功能文档与默认行为的割裂。
3. **Cron 失败通知轰炸导致警报疲劳**
   [#90595](https://github.com/openclaw/openclaw/issues/90595)：hot reload 与重试期间重复发送 "failed" 通知，用户反馈"一天收到几十条无意义告警，已经不相信这个系统了"。
4. **群聊会话持久化缺失**
   [#45573](https://github.com/openclaw/openclaw/issues/45573)：166+ 条消息的群聊最终只落库 1 个会话，用户无法回溯历史上下文，P2 但影响面广。

### 😊 正面信号
- PR #119402/#119169/#119127 的快速响应获得多位用户肯定（"终于有人处理这条老问题了"）。
- macOS 端 realtime Talk 与 Voice & Talk 设置面板的提交（#119321/#118505）被社区视为"原生体验在认真补齐"的积极信号。

---

## 8. 待处理积压（⚠️ 需维护者关注）

以下问题长期未获有效推进，按创建时间排序，已严重超出合理响应周期：

| Issue | 创建时间 | 周龄 | 优先级/评级 | 状态标签 |
|---|---|---|---|---|
| [#9016](https://github.com/openclaw/openclaw/issues/9016) OpenRouter 用量成本暴露给 agent 运行时 | 2026-02-04 | 26 周 | P2, off-meta | needs-product-decision |
| [#42840](https://github.com/openclaw/openclaw/issues/42840) Control UI 支持 MathJax/LaTeX | 2026-03-11 | 21 周 | P2, off-meta, **10 👍** | needs-product-decision |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) 内存管理行为混乱（回归） | 2026-03-12 | 21 周 | P2, gold shrimp | needs-maintainer-review |
| [#44134](https://github.com/openclaw/openclaw/issues/44134) Google Antigravity 频繁工具 schema 重载触发误封号 | 2026-03-12 | 21 周 | P1, platinum hermit | needs-live-repro |
| [#44431](https://github.com/openclaw/openclaw/issues/44431) Browser 工具 7 项实际自动化改进 | 2026-03-12 | 21 周 | P2, off-meta | needs-product-decision |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) Discord 路由/提及门控回归（stable） | 2026-03-13 | 21 周 | P1, platinum hermit | needs-live-repro |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent 完成静默丢失（2 👍，23 评论） | 2026-03-13 | 21 周 | **P1, diamond lobster** | needs-maintainer-review, needs-product-decision |
| [#45501](https://github.com/openclaw/openclaw/issues/45501) `session.resetPrompt` 可配置启动消息 | 2026-03-13 | 21 周 | P2, off-meta | needs-product-decision |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) YAML 配置支持 | 2026-03-14 | 21 周 | P3, 2 👍 | needs-product-decision |
| [#46031](https://github.com/openclaw/openclaw/issues/46031) Copilot 忽略 `auth.order`（首个 profile 恒胜出） | 2026-03-14 | 21 周 | P2, platinum hermit | linked PR open |

**重点警示**：`#44925` 作为 diamond lobster 级 P1 issue，已持续开放 21 周且社区共鸣极强（#67777/#92433 同源问题也均处于 needs-maintainer-review 状态），该问题直接动摇 OpenClaw 作为多 Agent 编排平台的核心信任基础。建议在下一版本中优先给出产品决策与修复排期。

---

*日报数据来源：openclaw/openclaw 仓库 2026-08-05 快照。所有链接均指向 GitHub 对应 Issue/PR。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期：2026-08-05**
**数据范围：13 个开源项目的 GitHub 社区动态**

---

## 1. 生态全景

个人 AI 助手开源生态正处于**规模分层与共性瓶颈并存的快速迭代期**。头部项目（OpenClaw、IronClaw、ZeroClaw、CoPaw）单日 PR/Issue 流量维持在 40-500 条量级，而尾部多个 Claw 系衍生项目已进入停滞或维护期，生态呈现明显的"马太效应"。跨项目盘点显示，**Agent 任务编排可靠性（Subagent 结果丢失）、安全边界（密钥泄漏、越权访问）、MCP/工具调用错误语义、新模型适配滞后**是当前全行业最集中的痛点，而非单一项目的偶发问题。与此同时，**PR 评审积压**成为普遍性治理瓶颈——社区贡献供给充沛，但维护者带宽严重不足，OpenClaw（372 条待合并）、Hermes（48 条）、ZeroClaw（48 条）均面临"合不过来"的困境。值得关注的是，头部项目正不约而同地从"功能铺量"转向**安全边界收敛 + 协议生态兼容 + 长稳运行治理**阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 · 关闭） | PRs（待合并 · 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（447 · 53） | 500（372 · 128） | 无 | 🔴 规模断层第一，但评审积压严重，维护者响应成瓶颈 |
| **IronClaw** | 50（38 · 12） | 50（33 · 17） | 无（1.1.0-rc.1 冲刺中） | 🟢 发布前冲刺，CI 门禁经 sabotage-test 验证，工程治理成熟 |
| **ZeroClaw** | 42（40 · 2） | 50（48 · 2） | 无 | 🟡 安全响应快（3 个 S0 已确认），但 48 条 PR 待合并，决策积压 |
| **CoPaw** | 29（17 · 12） | 47（28 · 19） | v2.1.0-beta.1 测试期 | 🟢 活跃迭代，修复节奏稳，但 beta 回归问题需优先处理 |
| **Hermes Agent** | 50（47 · 3） | 50（2 · 48） | 无（v0.20.0 后有回退报告） | 🔴 提交活跃但合并停滞，48 条待审，P0 未响应 |
| **NanoBot** | 5 | 26（7 · 19） | 无 | 🟢 合并效率约 73%，WebUI 集中打磨，健康度良好 |
| **LobsterAI** | 1 | 15（5 · 10） | **Release 2026.8.3 已合入 main** | 🟡 产品功能迭代快，但存在 model key 泄漏安全隐忧 |
| **PicoClaw** | 3（2 · 1） | 4（2 · 2） | 无 | 🟡 中等偏低，2 个高优 Bug 尚无 fix PR |
| **NanoClaw** | 0 | 5（4 · 1） | 无 | 🟡 关键 Discord 修复（#3185）待合并，合并周期长 |
| **NullClaw** | 0 | 1（1 · 0） | 无 | 🔴 grok-cli PR 等待 7 天无响应，贡献者流失风险 |
| **Moltis** | 0 | 1（1 · 0） | 无 | ⚪ 仅 Dependabot 活动，实质停滞 |
| **TinyClaw** | 0 | 0 | 无 | ⚪ 完全停滞 |
| **ZeptoClaw** | 0 | 0 | 无 | ⚪ 完全停滞 |

---

## 3. OpenClaw 在生态中的定位

**社区规模断层领先**：OpenClaw 单日 500 条 Issue + 500 条 PR 的流量是第二梯队（IronClaw/ZeroClaw/CoPaw）的 10 倍，NanoBot/LobsterAI 的 20-30 倍，小型项目的百倍以上。这使其事实上成为生态的**参照系与风向标**——其议题讨论（如 Subagent 交付可靠性）会迅速在同类项目中引发共鸣。

**技术路线差异**：OpenClaw 的核心架构是**统一 Gateway + 跨端 Realtime 语音闭环 + 插件延迟加载**。macOS/iOS 语音链路对齐（PR #119321/#118505）和 xAI 插件可选能力延迟加载（PR #119374）表明其正在从"通道聚合器"升级为"多端一致的 Agent 运行时"。相比 IronClaw 的 Rust + 工程治理导向、ZeroClaw 的协议互操作导向，OpenClaw 走的是**全功能覆盖 + 平台级体验统一**的路线。

**核心瓶颈**：**维护者响应速度与社区规模不匹配**。大量 diamond lobster 级 P1 问题（如 #44925 Subagent 静默丢失，21 周未决）长期停留在 `needs-maintainer-review`，372 条待合并 PR 形成巨大积压。这是生态规模效应的反面——贡献者越多，治理复杂度越高。IronClaw 通过 sabotage-test 自动化门禁缓解了这一问题，值得 OpenClaw 借鉴。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Agent 编排可靠性（静默失败）** | OpenClaw（#44925/#67777/#92433 Subagent 完成丢失）、NanoBot（#5237 MCP 错误 envelope 被忽略）、Hermes（#78932 MEDIA 投递失败仅记 warning）、IronClaw（#6284 错误可恢复性终局） | 失败必须暴露原因与恢复路径，拒绝无信息兜底文案；"结果丢失比不执行更糟糕"已成社区共识 |
| **安全边界与密钥管理** | LobsterAI（#1202 model key 泄漏）、NanoBot（#4784 全局 os.environ 密钥交叉污染）、ZeroClaw（#9565/#9647/#9646 三个 S0 越权/未鉴权）、Hermes（#79046 PYTHONPATH 泄漏）、CoPaw（#6692 日志脱敏） | AI agent 需建立敏感信息边界与归属校验机制；安全从"功能"上升为"生存底线" |
| **MCP/工具调用错误语义** | NanoBot（#5237）、PicoClaw（#3269 MCP 连接失败挂起）、ZeroClaw（工具调用格式解析）、OpenClaw（Subagent 交付） | 需区分"工具调用失败"与"业务返回错误"，错误 envelope 应透传至模型，而非静默吞掉 |
| **新模型适配滞后** | NanoBot（#5235 Opus 5 硬编码名单）、ZeroClaw（DeepSeek DSML #9723、Qwen tools #9477、Anthropic 工具图片 #9757）、CoPaw（DeepSeek 思考模式 #6667）、NullClaw（grok-cli provider #981） | 模型 API 发布周期快于适配周期，硬编码难以持续；需要协议解析抽象层与模型能力自描述 |
| **上下文/记忆/资源边界** | OpenClaw（#116010 128k 硬编码、Realtime 状态无限增长 #116201）、IronClaw（#7185 记忆跨对话不可靠）、Hermes（#79017 prompt cache 连续性）、CoPaw（#6700 超大工具输出卡死、#6699 技能 token 开销）、ZeroClaw（#6850 内存生命周期解耦） | 长会话治理、上下文预算、状态所有权模型成为下一轮竞争焦点 |
| **评审积压与贡献者等待** | Hermes（48 条待合并，zyz 集群 8 条 PR 零评审）、ZeroClaw（48 条待合并）、OpenClaw（372 条）、NanoClaw（#3185 高优修复未合入）、NullClaw（#981 等待 7 天） | 贡献供给充沛但维护者带宽稀缺；能建立高效评审流程的项目将获得更大社区红利 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键特征 |
|---|---|---|---|
| **OpenClaw** | 全能型参考实现：多通道 + 跨端 + 插件生态 | 重度自托管者、插件开发者、多平台用户 | 统一 Gateway + Realtime 语音跨端闭环 + 插件延迟加载；TypeScript 生态 |
| **IronClaw** | 生产级工程治理：发布管线、CI 门禁、架构 Epic | 追求可靠性/可审计的团队用户 | Rust + 分层 crate + sabotage-test 硬约束 CI；架构审计驱动开发 |
| **ZeroClaw** | 协议互操作与安全加固：A2A、Chat Completions、多模型解析 | 希望通过标准协议接入外部客户端的开发者 | 协议兼容层优先 + 社区源码审计驱动安全修复；Rust |
| **CoPaw** | AgentScope 生态下的多 Agent 协作与审批流 | 研究/学术用户、多模型并行场景 | Python + AgentScope 框架；安全审批多通道适配是薄弱点 |
| **Hermes Agent** | Windows 桌面体验、插件接口扩展、本地优先 | Windows 用户、桌面端自动化需求 | Gateway + 子进程管理；Windows CI 与隔离部署待完善 |
| **NanoBot** | 轻量多通道助手：Telegram/Mattermost/WeCom/Matrix | 中小团队、多平台 bot 运维者 | 轻量级 Python 实现；WebUI 活跃迭代，权限模型趋向简化 |
| **LobsterAI** | 产品化 C 端客户端：活动运营、Artifact 管理 | 终端消费者用户 | 客户端 + 云端服务；产品功能迭代快，安全策略待跟进 |
| **PicoClaw / NanoClaw / NullClaw 等** | 小型/衍生实现，聚焦单一平台或简化场景 | 特定平台用户、极简需求者 | 多为 Claw 系简化版；活跃度低，关键修复依赖上游参考 |

---

## 6. 社区热度与成熟度分层

**第一梯队：快速迭代 + 功能扩张期（高活跃，单日 PR/Issue 40+）**
- **OpenClaw**：规模第一，功能推进与社区讨论均极为活跃，但治理瓶颈开始制约效率
- **IronClaw**：发布前冲刺节奏，CI 门禁与架构治理成熟度生态最高，是"质量巩固 + 功能收尾"的典范
- **ZeroClaw**：安全缺陷修复响应快（S0 均在 24-48h 内确认），同时 RFC 讨论密度极高，处于"安全边界收敛 + 协议兼容"双线并行期
- **CoPaw**：beta 迭代节奏健康，修复合入速度快，但 v2.1.0b1 桌面端/浏览器回归需在正式版前解决

**第二梯队：质量巩固 + 特定方向攻坚期（中高活跃）**
- **NanoBot**：合并效率高（73%），WebUI 体验统一与权限模型简化是当前主线，属于"小步快跑"的健康状态
- **LobsterAI**：产品功能迭代积极（积分活动、Artifact 控制），但安全事件（key 泄漏）是悬顶之剑
- **Hermes Agent**：提交端极为活跃但合并端几乎停滞（2/50），处于"贡献溢出"的病态活跃状态，P0 问题未获响应

**第三梯队：维护期 / 停滞期（低活跃或零活跃）**
- **PicoClaw**：每日有少量合并，但 2 个高优 Bug（MCP 挂起、WebUI 卡顿）长期无 fix，社区反馈正在积累
- **NanoClaw**：Issue 积压为零、PR 提交零星，关键 Discord 修复被搁置，处于"有产出但无节奏"状态
- **NullClaw / Moltis**：仅剩外部贡献者或 Dependabot 的零星活动，维护者近乎缺位
- **TinyClaw / ZeptoClaw**：24h 完全无活动，实质停滞

---

## 7. 值得关注的趋势信号

### 信号一："大声失败"（Fail Loudly）成为 Agent 架构的核心契约
OpenClaw 的 #116277（104 条评论）与 Subagent 三连发、NanoBot 的 MCP 错误 envelope、Hermes 的 MEDIA 丢弃、IronClaw 的错误可恢复性终局——**四个独立项目在同一周内指向同一原则**：Agent 系统必须暴露失败原因与恢复路径，无信息兜底文案正在被社区视为"不可接受"。对开发者而言，**错误语义设计应作为与功能并列的一等公民**，而非事后补丁。

### 信号二：开源安全审计 "红队化" 正在加速
ZeroClaw 的 3 个 S0 级缺陷（Webhook 未鉴权、知识图谱越权、会话工具越权）全部来自外部贡献者的源码审计，且在 24-48 小时内被官方确认。LobsterAI 的 model key 泄漏由用户连续诱导复现并附完整日志。**开源 AI 项目的安全质量正被社区用红队思维检验**，项目方应建立漏洞响应 SLA 并主动邀请安全审计——这比被动等待更有利于品牌信任。

### 信号三：模型适配周期成为新的"兼容性税"
NanoBot 的 Opus 5 硬编码名单、ZeroClaw 的 DeepSeek DSML/Qwen tools/Anthropic 工具图片、CoPaw 的 DeepSeek 思考模式、NullClaw 的 grok-cli——新模型发布后的格式兼容问题已形成**持续的维护债务**。可维护的适配层（协议解析抽象、模型能力自描述、子串名单配置化）将取代逐个打补丁的方式，成为 Agent 框架的标配能力。

### 信号四：安全与互操作正在取代"跑通 Demo"成为竞争焦点
ZeroClaw 的 Chat Completions profile 以 16 条评论位居社区热度榜首，A2A 协议已进入 Phase 1 落地；IronClaw 用 sabotage-test 验证 CI 门禁有效性；CoPaw 在日志脱敏上补上回归测试。**项目竞争已从"能做什么"转向"能否安全可靠地做"**。早期采用者会关注功能，但规模化采用者会要求：密钥不泄漏、操作有审计、边界有校验、协议可互操作。

### 信号五：评审效率是下一阶段生态的分水岭
Hermes（48 条待合并）、ZeroClaw（48 条）、OpenClaw（372 条）、NullClaw（7 天无响应）——**贡献供给充沛，维护者带宽成为稀缺资源**。IronClaw 的 sabotage-test 自动门禁提供了一种解法：用自动化减少人工 review 的"信任成本"。能建立高效评审流程的项目将获得更大的社区红利，而持续不响应的项目正面临贡献者流失的恶性循环（NullClaw 单 PR 等待 7 天、Hermes 8 条 PR 零评审已露苗头）。

### 信号六：长会话与记忆治理进入深水区
OpenClaw 的 Realtime 状态无限增长、CoPaw 的超大工具输出卡死与技能 token 开销（系统提示词占比 25-30%）、IronClaw 的记忆跨对话不可靠、Hermes 的 prompt cache 连续性——**"能用"和"长稳运行"之间的鸿沟正在显现**。上下文预算、状态所有权、缓存连续性、按需技能加载，这些"资源边界"问题将定义下一代 Agent 框架的竞争力。

---

**结论**：个人 AI 助手开源生态正处于从"功能竞赛"到"治理竞赛"的转折点。OpenClaw 以绝对规模领先但需解决评审瓶颈；IronClaw 在工程治理上树立标杆；ZeroClaw 在安全响应速度上表现突出；而 MCP 错误语义、密钥安全、模型适配、长会话资源边界是横跨所有层级的共性机会点。对于技术决策者，选择项目时应优先评估其**错误暴露机制、安全边界设计、评审响应速度**，而非单纯的功能列表——因为这些才是决定生产可用的真正门槛。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-05

## 今日速览

过去24小时内，NanoBot 项目保持了稳健的迭代节奏。**PR 活动尤为活跃**，累计 26 条更新，其中 19 条已成功合并/关闭，合并效率较高（约 73%）；仍有 7 条 PR 待合并，积压压力不大。Issues 方面更新 5 条，含 1 个安全相关报告（API 密钥全局环境变量污染）和多个 bug，社区反馈渠道畅通。当日无新版本发布，项目处于持续集成分支迭代阶段，整体健康度良好。

---

## 版本发布

本日无新版本发布。

---

## 项目进展

过去 24 小时内，共有 19 条 PR 被合并或关闭，是近期合并最密集的一天，主要集中在 WebUI 打磨、会话权限重构和通道修复三大方向。

### 重要合并/关闭

- **[PR #5238 refactor(session): remove request-scoped access grants（P1，已合并）](https://github.com/HKUDS/nanobot/pull/5238)** — 移除 #5211 引入的请求作用域 `Tool.available()` 授权层，删除 `SessionAccessScope` 抽象，回归 `Tool.enabled()` 单一构造开关。这是一次架构简化，降低了会话工具调用的权限管理复杂度。

- **[PR #5233 feat(mattermost): separate group policy for threads and expose in WebUI（P2，已合并）](https://github.com/HKUDS/nanobot/pull/5233)** — 在 Mattermost 通道中新增 `groupPolicyInThread` 配置，允许线程和主频道设置不同的 @提及 要求，并在 WebUI 中同步暴露。这是对 #4459 的跟进完善。

- **[PR #5210 feat(webui): support trusted proxy bootstrap auth（P1，已合并）](https://github.com/HKUDS/nanobot/pull/5210)** — 为 `/webui/bootstrap` 增加可信上游代理认证路径，适配 Cloudflare Tunnel + Cloudflare Access 使用场景，要求 TCP 直连 peer 匹配显式配置的 IPv4/IPv6 CIDR。

- **[PR #5222 fix(telegram): keep fenced code intact when language has special chars（P2，已合并）](https://github.com/HKUDS/nanobot/pull/5222)** — 修复 Telegram 消息中 `c++`、`objective-c` 等包含特殊字符的语言标签导致代码块被错误截断的问题。

- **[PR #5223 fix(wecom): fall back when filename sanitization strips everything（P2，已合并）](https://github.com/HKUDS/nanobot/pull/5223)** — 修复 WeCom 媒体文件名净化后为空字符串时，写入目标变为目录而非文件的边界问题。

**WebUI 批量修复合并（均来自 chengyongru 与 Re-bin）**：

- [#5244 fix(webui): render markdown in prompt rail previews](https://github.com/HKUDS/nanobot/pull/5244)
- [#5245 fix(webui): align timestamp tooltip styles](https://github.com/HKUDS/nanobot/pull/5245)
- [#5243 fix(webui): align automation metadata with timestamps](https://github.com/HKUDS/nanobot/pull/5243)
- [#5242 fix(commands): reject malformed slash commands](https://github.com/HKUDS/nanobot/pull/5242)
- [#5241 fix(webui): refine inline token highlights](https://github.com/HKUDS/nanobot/pull/5241)
- [#5239 feat(webui): add integrated Vite dev mode](https://github.com/HKUDS/nanobot/pull/5239)
- [#5240 refactor(webui): unify floating controls](https://github.com/HKUDS/nanobot/pull/5240)
- [#5250 fix(webui): feather clipped activity edges](https://github.com/HKUDS/nanobot/pull/5250)

> 八条 WebUI 相关 PR 在同一时间段内高频合并，表明团队正在进行一次集中的前端体验统一与打磨。值得注意的架构信号：`#5242` 拒绝非法斜杠命令（不再向 LLM 转发）+ 命令建议、`#5239` 引入一键 Vite dev 模式降低了贡献者门槛。

### 整体评估

过去 24 小时的核心推进方向可以概括为：**WebUI 体验收敛**（样式统一、命令处理、时间戳对齐、Markdown 预览）+ **权限模型简化**（移除请求作用域授权）+ **通道兼容性修补**（Telegram、WeCom、Mattermost）。

---

## 社区热点

### 讨论最活跃

- **[Issue #4784 Security: Provider API keys leaked between providers via global os.environ mutation（2 条评论）](https://github.com/HKUDS/nanobot/pull/4784)** — 尽管已存在近一个月，该安全 issue 仍是当前讨论焦点。核心问题：`OpenAICompatProvider._setup_env()` 将 API key 直接写入全局 `os.environ`，gateway 类型 provider 会**覆盖**已有值，非 gateway 类型使用 `setdefault` 时则可能被旧值**阻塞**。这在多 provider 共存的部署中会造成密钥串用/泄露。社区关注度高，但目前**尚无对应修复 PR**。

- **[Issue #5235 Anthropic: Opus 5 configuration by Nanobot always rejected on the API（已关闭）](https://github.com/HKUDS/nanobot/issues/5235)** — 关联新发布的 claude-opus-5 模型：由于 `omit_temperature` 子串列表仍停留在 `("opus-4-7", "opus-4-8", "sonnet-5", "fable")`，未包含 `"opus-5"`，导致每次请求仍带 temperature 参数而被 API 拒绝。**该 issue 已在 24 小时内被关闭**，修复应已合入。

### 热点分析

1. **新模型适配滞后**：#5235 暴露了硬编码模型名单的问题——新模型发布后需手动更新子串列表。这不是第一次出现（之前 Opus 4.x 系列也有类似问题），社区对模型清单的可维护性有期待。

2. **MCP 错误处理体验差**：[#5237 MCP tool returns "data not found" envelope → agent ignores it](https://github.com/HKUDS/nanobot/issues/5237) 反映了一个深层问题：当 MCP 服务器在 `CallToolResult.content` 中返回业务错误封装（如 `{"code": 404, "msg": "data not exist"}`）且 `isError = False` 时，agent 会将其视为成功调用，导致 LLM 无法感知失败，只能空等 `tool_timeout`。**这对 MCP 生态的使用体验有显著影响**。

---

## Bug 与稳定性

### 按严重程度排序

| 严重程度 | Issue/PR | 问题描述 | 状态 |
|---------|----------|---------|------|
| **高（安全）** | [#4784 Provider API keys leaked via global os.environ mutation](https://github.com/HKUDS/nanobot/issues/4784) | gateway provider 的 API key 直接覆写全局 `os.environ`，/ 非 gateway 则被 `setdefault` 阻塞，存在密钥串用风险 | **开放中**，无对应 fix PR |
| **高（功能阻塞）** | [#5237 MCP tool returns error envelope → agent ignores it](https://github.com/HKUDS/nanobot/issues/5237) | MCP 返回业务错误时 agent 不识别，白等 `tool_timeout` 超时 | **开放中**，无对应 fix PR |
| **中（兼容性）** | [#5235 Opus 5 config rejected by API](https://github.com/HKUDS/nanobot/issues/5235) | `omit_temperature` 名单未含 `opus-5` | **已关闭**（已修复） |
| **中（兼容性）** | [#5247 Matrix bot does not auto-join when invited](https://github.com/HKUDS/nanobot/issues/5247) | nio 的 `Api.join()` 发送空 body POST，Continuwuity 服务器返回 `M_BAD_JSON` | **已有 fix PR [#5248](https://github.com/HKUDS/nanobot/pull/5248)，待合并中** |
| **低（体验/工程）** | [#5246 .gitignore leaves memory/.cursor and history.jsonl untracked](https://github.com/HKUDS/nanobot/issues/5246) | memory 工作区的 `.gitignore` 规则 `!memory/` 和 `!memory/MEMORY.md` 不足以覆盖子目录，导致 `.cursor` 和 `history.jsonl` 不受版本控制 | **开放中** |

### 值得注意的待合并修复 PR

- **[PR #5156 fix(telegram): recover from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156)** — 修复 Telegram 轮询在网络抖动后永久静默停滞的问题（对应 #5171），已在生产环境观察到实际影响，当前仍处于 OPEN 状态，建议维护者关注合并时机。
- **[PR #5248 fix(matrix): send non-empty POST body on room join](https://github.com/HKUDS/nanobot/pull/5248)** — 与 #5247 配套的修复，已在队列中。
- **[PR #5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)** — 虽然这是新功能，但它引入了新的 provider 依赖，需要维护者仔细审查。

---

## 功能请求与路线图信号

### 明确的功能需求信号

- **[Issue #5246 [enhancement] memory workspace .gitignore refinement](https://github.com/HKUDS/nanobot/issues/5246)** — 建议调整 memory 相关 `.gitignore` 规则，让 `memory/.cursor` 和 `memory/history.jsonl` 被正确跟踪或忽略。问题虽小但影响日常开发体验，whisperity 提交了这一改进建议。

- **[Issue #5247 Matrix auto-join（间接功能需求）](https://github.com/HKUDS/nanobot/issues/5247)** — 用户 orrinwitt 在提交 bug 的同时通过 PR #5248 提供了一个兼容性修复方案，隐含对 Matrix 通道稳定性的期待。

- **[Issue #5237 MCP 错误透传机制（间接功能需求）](https://github.com/HKUDS/nanobot/issues/5237)** — MCP 调用时区分"工具调用失败"和"业务返回错误"，这可能是 MCP 工具协议层的一个增强点：是否应该默认检查 `content` 中的错误 envelope？或者是否支持用户自定义错误检测规则？

### 路线图判断

从今天合并的 PR 来看，以下方向可能是下一版本的重点：

1. **WebUI 开发者体验**（#5239 Vite dev 模式、#5249 视觉一致性）：团队正在降低 WebUI 贡献门槛，暗示前端可能迎来更多功能和更大规模的社区贡献。
2. **权限模型简化**（#5238 移除请求作用域授权）：从"每个请求都做权限校验"回归到"构建时切换"，说明会话工具的实际使用场景中，请求级授权过于繁琐，**设计上更倾向信任客户端**。
3. **通道扩展与兼容性**（#5233 Mattermost 线程策略、#5248 Matrix、#4919 Telegram 自定义 Bot API、#5223 WeCom）：多通道支持仍在稳步扩展中，特别是 #4919 的 Telegram Bot API 自定义能力已经开放了近一个月，**有望在后续版本落地**。
4. **新 Provider**（#5234 mst-python 元搜索集成）：元搜索聚合思路如果被接受，可能成为 Web search 的新选项——聚合多个搜索源并用 RRF 融合结果，提高覆盖率。

---

## 用户反馈摘要

从近期 Issues 和 PR 评论中提炼的真实用户声音：

- **「Opus 5 发布后无法直接使用」**（来自 #5235）：用户 whisperity 指出新模型发布后，Nanobot 的硬编码名单未能及时跟进，导致 Opus 5 配置**每次请求都被 API 拒绝**。这已是第二次出现类似问题（此前 Opus 4.7/4.8 也有温度相关兼容性修复），反映出社区对模型适配速度的敏感性。好消息是 issue 已被快速关闭，修复已合入。

- **「MCP 工具失败时 agent 无法感知」**（来自 #5237）：Lucky314159 描述了一个令人沮丧的场景：MCP 工具明明返回了 `{"code": 404, "msg": "data not exist"}`，但 agent 却认为调用成功，既不重试也不告知用户，直到 `tool_timeout` 触发。这类问题会让用户感觉 agent "很笨"，**对基于 MCP 构建的业务应用信任度有负面影响**。

- **「Matrix 机器人加不进房间」**（来自 #5247）：orrinwitt 使用 Continuwuity 作为 homeserver 时，机器人无法自动加入被邀请的房间。原因是 nio 发送空 body 的 POST 请求，而 Continuwuity 拒绝空 body。虽然提了 PR，但说明 **NanoBot 对非主流 homeserver 的兼容性测试有待加强**。

- **「API 密钥在多 provider 场景下有交叉污染风险」**（来自 #4784）：虽然评论数不多（2条），但该问题涉及安全，影响面较大——在多 provider 部署时，gateway provider 的 `os.environ[...] = api_key` 直接覆盖同名变量，可能导致 A 服务的密钥被 B 服务意外读取。社区期望的解决方案可能是**将 provider 的 env 隔离到进程级或请求上下文中**，而不是直接在全局 `os.environ` 上写入。

---

## 待处理积压

### 长期未合并的 PR

| PR | 创建时间 | 状态 | 说明 |
|----|----------|------|------|
| [#1776 fix(telegram): add group_mode config field to TelegramConfig](https://github.com/HKUDS/nanobot/pull/1776) | 2026-03-09（近 5 个月） | **conflict** | Pydantic 模型缺失 `group_mode` 字段的修复。虽然代码支持该配置但模型未声明，导致配置被静默忽略。当前处于冲突状态，需要维护者解决冲突后合入。 |
| [#4919 feat(telegram): support custom Bot API base URL and extra headers](https://github.com/HKUDS/nanobot/pull/4919) | 2026-07-14（22 天） | OPEN | 实现 #4702，支持自建 Telegram Bot API 服务器/企业网关。功能完整且测试覆盖，但仍在等待审查。 |
| [#5156 fix(telegram): recover from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156) | 2026-07-29（7 天） | OPEN | 修复 Telegram 轮询静默停滞的生产问题，对应 issue #5171。 | 
| [#5184 feat(webui): add Quick Chat and Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184) | 2026-07-30（6 天） | OPEN | 新增 Quick Chat 和 Temporary Chat 两个 WebUI 功能，涉及前端交互设计变更，需要较多 review 时间。 |
| [#5234 feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234) | 2026-08-03（2 天） | OPEN | 集成 mst-python 元搜索 provider，引入新依赖，需重点审查。 |

### 值得维护者关注的信号

- **Telegram 相关的三件套**（#1776 配置、#4919 API 自定义、#5156 轮询恢复）都处于等待状态，Telegram 通道的维护效率可能要打个问号。如果这些 PR 全部合入，Telegram 通道的完整度将有明显提升。
- Issue #4784 的安全问题**没有关联的修复 PR**，虽然 issue 本身已有 2 条评论，但关注度仍然不足。建议维护者明确给出修复方向的 roadmap 或在 issue 中回应社区。
- Issue #5237 MCP 错误处理问题属于协议语义层面，修复可能涉及较大改动，建议维护者至少先做一个**文档说明**或 **warning 日志提示**，缓解用户痛点。

---

> **摘要**：NanoBot 在过去 24 小时保持了高强度的迭代节奏，尤其 WebUI 领域有 8 条 PR 集中合入，项目视觉一致性和开发者体验进步明显。安全方面 #4784 的密钥污染问题值得优先关注；MCP 错误处理（#5237）是下一个可能的协议层改进方向。合并队列中 Telegram 相关 PR 积压较久（最老 #1776 已开放约 5 个月），建议维护者安排一轮专项 review。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-05

## 今日速览

过去 24 小时项目活跃度极高：Issue 更新 50 条（47 新开/活跃，3 关闭），PR 更新 50 条（48 待合并，仅 2 合并/关闭），发布 0 个新版本。Issue 侧以 Bug 报告为主（约 60%），功能讨论集中在插件接口扩展与记忆管理；PR 侧 zyz619963502zyz 贡献者集群提交了 11 条质量较高但长期待审的 PR。主要隐忧是**合并吞吐量远低于提交速度**，48 条 PR 处于待合并状态，评审积压严重。同时今日出现一条 P0 级 Bug（#79017，提示词缓存连续性丢失），需维护者优先关注。

## 版本发布

今日无新版本发布。上一版本为 v0.20.0（build 2026.8.3），当前已有两条针对该版本的回退问题报告（#79047 API 服务性能回退、#79040 更新进程不退出），建议维护者评估是否需出补丁版本。

## 项目进展

今日合入/关闭的 PR 数量有限（2 条），但多个长期未决 PR 获得更新，显示社区贡献仍然活跃：

- **[PR #66076]（已关闭）** fix(tui): hide npm console window during TUI dependency install on Windows — 修复 Windows 下 TUI 依赖安装时弹出 npm 控制台窗口的问题，使用 `windows_hide_flags()` 统一了 Windows 子进程行为。该 PR 提了 19 天后关闭，推测被合入或经评审后超集处理。
  
- **[PR #74300]（活跃）** test: make Windows test suite work — 修复 Windows CI/开发环境下 50+ 测试因 POSIX 专属原语（`signal.SIGKILL`、`os.geteuid`、`fcntl`、`pty` 等）导致的收集/运行失败，增加平台辅助函数。若合入可显著提升 Windows 平台的测试覆盖率。

- **[PR #79046]（新提交，活跃）** fix(gateway): stop leaking PYTHONPATH to subprocesses — 直接修复 `_ensure_windows_gateway_venv_imports()` 修改全局 `os.environ["PYTHONPATH"]` 导致 gateway 生成的子进程（包括聊天会话中打开的 bash 终端）继承错误环境的问题。注意该 PR 与 7 月 3 日提交的 **[PR #57470]** 修复同一问题，社区出现重复提交，建议维护者优先处理其中一个。

- **[PR #73955]（活跃）** fix(compression): align compute-host RPC timeout — 修复上下文压缩时模型侧超时（支持 profile 感知的 300 秒下限）与计算主机 RPC 硬编码超时不匹配的问题。

另有 7 条 zyz619963502zyz 于 7 月 28 日提交的 PR（#73308、#73332、#73380、#73424、#73445、#73453、#73457、#73467）已进入第 8 天未获评审，涵盖技能错误信息保留、Google Chat 多配置文件隔离、工具桥接恢复、桌面端时间戳/查找栏修复等，积压情况需要关注。

## 社区热点

今日讨论热度集中在以下 Issue：

- **[Issue #64182]（21 评论）** Tracking: Plugin Interface Expansion — 插件接口扩展跟踪问题，从 Discord 社区线程提炼的路线图计划。目标是让长期排队贡献者能稳定发布插件。这是当前社区最关注的架构演进方向。

- **[Issue #64231]（17 评论）** lifecycle-event catalog, hook taxonomy, and batch disposition of pending hook PRs — 直接关联 #64182，提出定义统一生命周期事件目录与钩子验收标准，对 12+ 个待处理 observer-hook PR 做批量分类/救治。两条合计 38 评论，说明插件生态治理是社区的最大共识痛点。

- **[Issue #46199]（7 评论，2👍）** Windows 便携/隔离部署指南请求 — 用户明确表示需要官方支持的部署模式，关注减少全局 PATH 写入和持久化变更，体现安全敏感型用户在 Windows 桌面上采用 Hermes 的障碍。

- **[Issue #75791]（5 评论）** Windows 11 25H2 下 `hermes dashboard --status` 误报无进程 — 实际 dashboard 正常监听 127.0.0.1:9119，检测逻辑在 25H2 上失效。已影响 Windows 用户对 CLI 状态查询的信任。

## Bug 与稳定性

按严重程度排列（含 P0/P1/P2 关键问题）：

### P0
- **[Issue #79017]** prompt_cache_key 在上下文压缩会话轮换后失去连续性，缺少逻辑缓存作用域概念。为 #78941/PR #78959 的已知取舍，但会破坏长会话缓存命中率。暂无 fix PR。**这是今日最需要维护者决策的问题。**

### P1（已关闭）
- **[Issue #18594]（已关闭）** `get_hermes_home()` 在 profile 模式下静默回退至 `~/.hermes`，导致跨配置文件数据损坏。今日关闭，修复已合入。

### P2
- **[Issue #79047]** 升级至 0.20.1 后 API 服务模式请求延迟增加约 3.3 秒，疑似 `get_tool_definitions()` 缓存被绕过。暂无 fix PR。
- **[Issue #78406]** openai-api provider 在中途连接断开后需耗尽重试预算才重建传输，导致恢复延迟；生产中观察到峰值 161 次/天的 `RemoteProtocolError`。暂无 fix PR。
- **[Issue #75801]** OpenCode Go `gpt-5.6-luna` 缺失 `finish_reason` 触发 4 次虚假“网络中断”续传，且桌面端裁剪掉流式答案。暂无 fix PR。
- **[Issue #76457]** `hermes config set` 将字符串列表写成 JSON 字符串字面量而非 YAML 列表，破坏下游 `_coerce_allow_set` 消费。暂无 fix PR。
- **[Issue #77047]** `read_file` 在 1000 字节采样边界落在多字节字符中间时，将合法 CJK UTF-8 文件误判为二进制。暂无 fix PR（已标记重复）。
- **[Issue #78122]** 回归：`max_in_progress` 被按看板独立执行而非网关级全局执行，各看板独立 SQLite 数据库导致上限失效。已定位到 `bc6d86b15c1...`。暂无 fix PR。
- **[Issue #78932]** 被拒绝的 MEDIA 投递路径仅记 warning，模型仍认为发送成功 — 消息发出但附件丢失，且模型不知情。影响消息投递可信度。暂无 fix PR。
- **[Issue #78862]** Cron 任务使用推理模型（如 deepseek-v4-flash）非流式调用时，600 秒推理下限与 600 秒 cron 超时竞争，fallback 永不触发。暂无 fix PR。
- **[Issue #79044]** Slack 通道目录发现可能无限期阻塞入站消息启动。暂无 fix PR。
- **[Issue #53328]** 桌面端每次启动全盘扫描 git 仓库，无配置可限制或禁用（有 1👍，3 评论）。相关功能请求 #64615 与之对应，暂无 fix PR。

### P3（安全相关）
- **[Issue #77950]** root `overrides` 将 `brace-expansion` 固定为 5.0.8，受 GHSA-rgw5-rvv9-x895（高危 DoS）影响，`npm audit fix` 无效。暂无 fix PR。
- **[Issue #79021]** `hermes doctor` 报告 3 个高危 npm 构建期工具漏洞，自动修复失败。暂无 fix PR。

上述 Bug 对应的 fix PR 大多已由 zyz619963502zyz 在 7 月 28 日批量提交（#73424、#73445、#73453、#73457、#73467、#73955 等），但**尚在待合并队列中**。建议维护者优先评审这批 PR，可一次性关闭多个高影响 Bug。

## 功能请求与路线图信号

今日收集到的关键功能信号：

| 需求 | 来源 | 热度/状态 | 路线图潜力 |
|---|---|---|---|
| 插件接口扩展与生命周期钩子分类 | [#64182] + [#64231] | 38 评论，needs-decision | 高 — 已有明确治理计划，待决策 |
| 项目级记忆池（全局 + 每项目） | [#16833] | 4 评论，创建于 4 月 | 中 — 与今日新提交的 PR #79045（Honcho 会话结束统一记忆）方向互补 |
| 禁用自动项目/仓库发现 | [#64615] + [#53328] | 4 评论 + 1👍 | 中 — 桌面端隐私/性能诉求，Issue #53328 已有用户支持 |
| 桌面端显示订阅/token 用量 | [#78997] | 1 评论 | 低 — 用户明确提到“长会话中需避免超限中断” |
| DeepSeek v4 Flash Responses API 支持 | [#79039] | 新开待决策 | 中 — 配合 #78862 推理模型超时问题，可一并评估 |
| Hermes 分布式编排器 RFC（远程大脑 ↔ 本地节点） | [#79042] | Draft，needs-decision | 低（远期） — 架构级提案，当前积压严重时不宜启动 |

**判断**：插件接口扩展（#64182/#64231）和记忆管理（#16833 + #79045 ）是最可能进入下一版本的方向。前者需要先对 12+ 待审 PR 做批量决策，后者已有具体 PR 提供实现路径。

## 用户反馈摘要

从今日活跃 Issues 中提炼的用户真实反馈：

- **Windows 部署体验仍是主要摩擦点**（#46199、#75791、#79047 等相关）：用户明确要求“官方支持的便携/隔离部署方案”，并对 25H2 上 `dashboard --status` 的误报表示困惑。安全敏感型用户希望减少对主机 PATH 和持久化配置的改动，这一诉求在多个 Windows Issue 中反复出现。
- **桌面端自动扫描全部 Home 目录引发隐私担忧**（#53328）：评论指出 “Projects Paradigm 严重缺乏文档说明”，用户希望至少有配置项能关闭或限制扫描范围。有用户给出了 1 个 👍 表示支持。
- **升级后出现性能回退**（#79047）：报告明确指出 0.15.1 → 0.20.1 后 api_server 请求创建变慢约 3.3 秒，社区对这类回归非常敏感。
- **安全告警的“狼来了”效应**（#79021、#77950）：`hermes doctor` 持续报告 3 个高危 npm 漏洞但自动修复失败，同时 root overrides 让 `npm audit fix` 变成 no-op，用户对“无法消除的警告”感到挫败。
- **CJK 内容被误判为二进制**（#77047）：多为中文用户报告，读文件工具在 1000 字节采样边界遇到多字节字符时错误返回 “Binary file”。这对东亚语言用户是一个高频率、低严重度但影响体验的缺陷。
- **Cron 静默死亡影响生产运维**（#78862）：三个任务同时死于超时，用户（brian-doherty）在 issue 中提供了观察到的错误日志，指出 fallback 机制完全未起作用，生产可用性受限。

## 待处理积压

以下 Issue/PR 长期未获响应或决策，建议维护者关注：

1. **[Issue #16833]** 项目级记忆池 — 4 月 28 日创建，至今 3 个月，4 评论，1👍。今日有相关 PR（#79045）出现，是推进的时机。
2. **[Issue #46199]** Windows 便携/隔离部署指南 — 6 月 14 日创建，更新至 8 月 5 日（评论 7，2👍），仍是 OPEN 状态且无里程碑指派。
3. **[Issue #51684]** Feishu `FEISHU_ALLOWED_USERS=*` 不适用于审批卡片点击 — 6 月 24 日创建，标记 duplicate 但问题本身未修复。
4. **PR #73308 / #73332 / #73380 / #73424 / #73445 / #73453 / #73457 / #73467（8 条）** — zyz619963502zyz 于 7 月 28 日批量提交，每条都带多个 risk sweeper 标签，涉及技能系统、回退冷却、谷歌聊天多配置文件安全等，已 8 天零评审。**这是目前最集中的贡献者等待队列。**
5. **[PR #26859]** Discord 运行时状态刷新 — 5 月 16 日创建，近 3 个月未合并。虽然标签带 `sweeper:blast-moderate`，但长期搁置会削弱社区对 gateway 多平台支持更新的信心。
6. **[PR #68667]** 桌面端 Profiles 激活按钮 — 7 月 21 日提交，修复 #39971，属低风险 UX 改进，15 天未获评审。

---

**总结**：项目社区活跃度高、Issue 讨论质量好，但 PR 评审效率是当前最大瓶颈 — 48 条待合并中包括多条可直接关闭 8-10 个高影响 Bug 的修复。建议维护者优先（a）响应 P0 #79017；（b）全量评审 zyz619963502zyz 的 7·28 批次 PR；（c）对 #79046 与 #57470 的重复提交做合并取舍。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-05

## 1. 今日速览

过去 24 小时 PicoClaw 保持中等活跃度：3 条 Issue 更新（2 条开放、1 条关闭），4 条 PR 更新（2 条待合并、2 条合并/关闭），无新版本发布。当日有两项修复完成合并：OAuth 登录在真实回调环境下的稳定性修复（#3280）、Anthropic 提供商 prompt cache token 指标捕获修复（#3251）。与此同时，两个社区反馈度较高的 Bug——Web UI 长会话输入延迟（#3281）与 MCP 连接失败导致 agent 挂起（#3269）——仍未出现对应修复 PR，值得维护者优先关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 2 个 PR 均为修复类，分别提升了认证流程的健壮性与 token 使用量的可观测性：

- [PR #3280 [已合并] fix(auth): make browser OAuth login survive real-world callback conditions](https://github.com/sipeed/picoclaw/pull/3280) — 修复 `picoclaw auth login --provider <oauth-provider>` 在 headless/远程环境下反复失败的问题，覆盖授权码被烧毁、流程被迫重新开始等四个独立故障原因。该合并显著改善了 AI 助手在无头服务器/远程部署场景下的命令行认证体验。
- [PR #3251 [已合并] fix(providers): capture the prompt cache token usage in Anthropic providers](https://github.com/sipeed/picoclaw/pull/3251) — 修复 Anthropic SDK provider 与 Anthropic Messages API provider 丢弃 Claude 返回的缓存 token 指标的问题，使运维人员能够判断 prompt cache 是否真正生效、优化成本。

此外，今日新开 PR [#3317](https://github.com/sipeed/picoclaw/pull/3317) 将同样的缓存 token 可见性扩展至 LLM response 的调试输出层，与 #3251 形成方向一致的持续改进。整体来看，项目正围绕「部署体验」和「可观测性」两个轴心稳步推进。

## 4. 社区热点

| 议题 | 类型 | 评论数 | 👍 | 状态 |
|------|------|--------|-----|------|
| [#3182 Android version](https://github.com/sipeed/picoclaw/issues/3182) | Bug | 6 | 0 | 已关闭（stale） |
| [#3281 Web UI chat input is very laggy with long history](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 3 | 1 | 开放 |
| [#3269 MCP server connection failure causes agent loop hang](https://github.com/sipeed/picoclaw/issues/3269) | Bug | 3 | 1 | 开放 |

评论数最高的 #3182 是本月 26 日在 stale 机制下被关闭的 Android 版本 Bug，关闭前积累 6 条评论，说明 Android 端可用性确有真实用户需求，但未能获得有效修复跟进。#3281 与 #3269 虽评论数不及 #3182，但均被用户标记 👍 认可，分别代表 Web UI 长会话性能退化与第三方服务（MCP）连接故障导致的核心功能停滞。三个议题共同勾勒出当前社区最关心的三个场景：Android 端到端可用性、Web 端长时间使用的流畅度、与外置工具/服务集成时的错误隔离。

## 5. Bug 与稳定性

按严重程度排序：

| 严重程度 | Issue | 摘要 | 是否有 fix PR |
|----------|-------|------|---------------|
| 🔴 高 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server 连接失败 → agent 循环挂起 → 整个聊天界面停止回复用户 | 无 |
| 🟠 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框在会话历史稍长后变得非常卡顿（版本 0.3.1） | 无 |
| ⚪ 低（已关闭） | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android 端无法启动服务、无法从设置更改路径 | 无（stale 关闭） |

#3269 影响核心交互链路，且对应版本为 nightly（git 2cf030d2），涉及 Qwen3 模型，属于集成场景下较严重的稳定性缺口。当前无修复 PR 挂起，建议维护者优先复现并隔离 MCP 错误。

## 6. 功能请求与路线图信号

- [PR #3299 Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299) — 新增 Exa 作为原生 `tools.web` / `web_search` provider，使用 Exa 的 `POST /search` API（`type: "auto"`、`contents.highlights`），并通过 `startPublishedDate` 支持现有的 `d/w/m/y` 时间范围过滤。该 PR 目前开放且无评论，若被合入，将为用户提供新的网络搜索后端选项。
- [PR #3317 feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/pull/3317) — 在「LLM response」调试日志中的 `usage` 对象中补充缓存 token 字段，针对 DeepSeek 等通过 Cloudflare AI Gateway 上报缓存元数据的提供商。由于 #3251 已同日合并，此 PR 是对缓存可观测性能力的进一步泛化，方向一致且有实际场景支撑，纳入下一版本的概率较高。

## 7. 用户反馈摘要

- **Android 用户（#3182）**：报告应用无法启动服务、在设置中无法修改路径，并附带截图与日志。该 Issue 评论数达 6 条，却在没有修复的情况下因 stale 关闭，用户侧可能会感受到「反馈被放弃」的挫败感。
- **Web UI 用户（#3281）**：用户在 0.3.1 版本中反馈输入框随同会话历史增长而变得「very laggy」，环境为 Go 1.25.11 + PicoClaw Web 端，属于长对话场景下的典型体验痛点。
- **集成/高级用户（#3269）**：用户使用 nightly 版本与 Qwen3，发现 MCP 服务器连接失败会导致 agent 循环挂起、聊天界面彻底停止回复。该用户依赖外部 MCP 服务进行深度集成，对失败隔离有明确需求。

整体满意度信号偏中性：核心功能在推进（OAuth 修复、缓存指标合并），但 Web 长会话性能与 MCP 故障隔离的反馈已出现真实用户的 👍 认可，需要产品侧积极响应。

## 8. 待处理积压

| 类型 | 编号 | 创建时间 | 积压天数 | 备注 |
|------|------|----------|----------|------|
| Issue | [#3269 MCP 连接失败导致挂起](https://github.com/sipeed/picoclaw/issues/3269) | 2026-07-20 | 16 天 | 高严重度，无 fix PR，影响核心链路 |
| Issue | [#3281 Web UI 输入延迟](https://github.com/sipeed/picoclaw/issues/3281) | 2026-07-21 | 15 天 | 中严重度，无 fix PR，影响长会话体验 |
| PR | [#3299 添加 Exa 搜索 provider](https://github.com/sipeed/picoclaw/pull/3299) | 2026-07-26 | 10 天 | 已 10 天无评论、无维护者响应 |
| Issue | [#3182 Android 无法启动](https://github.com/sipeed/picoclaw/issues/3182) | 2026-06-26 | — | 已 stale 关闭，但 6 条评论说明需求仍然存在 |

建议维护者优先处理 #3269 与 #3281 两个仍未解决的高优 Bug，并至少对 #3299 给出接受/拒绝的明确反馈，避免社区 PR 长期悬置。对于 Android 端问题，可考虑以「收集更多环境信息 + 创建跟踪 Issue」的方式重新置顶，而不是直接由 stale 机制关闭。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-05

> 说明：本文 GitHub 链接采用项目官方仓库路径 `qwibitai/nanoclaw`（数据源提供的 `nanocoai/nanoclaw` 疑似笔误，已修正）。

## 1. 今日速览

过去 24 小时 NanoClaw 没有新增或关闭的 Issue（现有 Issue 积压为 0），共有 5 条 PR 处于活跃状态，其中 4 条待合并、1 条已关闭/合并。无新版本发布。整体来看，项目处于**中等偏上的开发活跃度**：Bug 修复（Discord 审批问题）与新功能开发（Dial 频道集成）同步推进，Issue 管理健康，但部分 PR 已挂起超三周，合并节奏略显滞后。

## 2. 版本发布

无新版本发布，本周暂无用户可见的版本变更。

## 3. 项目进展

**已关闭/合并 PR：**

- **#3154 [closed] fix(agent-runner): give scheduled tasks current run time** — 为定时任务注入其实际计划执行时间（`process_after`），并在任务到达 agent 时生成仅限任务使用的 `current_time`（含星期信息），旧数据回退到创建时间。该修复完善了定时任务的时态语义，属于 agent-runner 的核心逻辑改进。  
  https://github.com/qwibitai/nanoclaw/pull/3154

**高价值待合并 PR（进展但尚未合入）：**

- **#3185 fix(discord): strip `\n` delimiter in webhook interaction custom_id** — 解决 Discord 审批按钮全部失效的严重问题，是等待合并的高优先级修复。  
  https://github.com/qwibitai/nanoclaw/pull/3185

- **#3186 refactor: add host seams for skill-owned capabilities** — 引入“宿主缝”（host seams）以支持 skill 自有能力的扩展，为后续插件化能力开放打基础。  
  https://github.com/qwibitai/nanoclaw/pull/3186

整体而言，项目在调度任务正确性、Discord 交互可靠性和架构可扩展性三方面均有推进，但#3185 这类直接影响用户体验的修复尚未合入主分支，建议优先处理。

## 4. 社区热点

过去 24 小时无高评论/高反应的 Issue 或 PR（评论数据未更新），但以下 PR 因影响力较强值得关注：

- **#3185 [OPEN] fix(discord)**: 直接关联“所有 Discord 审批都被拒绝”的严重问题，涉及每一位使用 Discord 审批流的用户，预计合入时会引发较大讨论和关注。  
  https://github.com/qwibitai/nanoclaw/pull/3185

- **#3186 [OPEN] refactor**: 涉及架构层面的能力边界调整，是长期可维护性的关键演进信号，容易在核心贡献者之外吸引架构评审意见。  
  https://github.com/qwibitai/nanoclaw/pull/3186

诉求分析：社区当前最关心的是**交互可靠性和平台集成扩展**，一方面需要修复现有渠道（Discord）的阻断性问题，另一方面持续探索新渠道（Dial）以拓宽连接能力。

## 5. Bug 与稳定性

**严重程度：高**

- **#3185 — Discord 审批操作全部错误拒绝**：在 Discord 中点击 `ask_question`/审批卡片上的任何按钮都会解析到错误选项，用户点击 Approve 实际仍被拒绝。根因是原始 HTTP 交互（webhook）路径中解码 `custom_id` 时未剥离 `\n` 定界符，导致参数错位。  
  已有修复 PR：#3185（待合并）  
  https://github.com/qwibitai/nanoclaw/pull/3185

无其他崩溃、回归或新报告 Bug。该问题属于阻断级缺陷，强烈建议纳入下一个补丁版本。

## 6. 功能请求与路线图信号

当前无新的功能类 Issue，但两条 PR 传递了明确的路线图信号：

- **#3041 feat(channels): add Dial channel adapter (SMS + AI voice calls)** — 为 NanoClaw 增加 **Dial 渠道适配器**，支持短信和 AI 语音电话两种接入方式。  
  https://github.com/qwibitai/nanoclaw/pull/3041

- **#3050 feat(setup): add Dial to the channel picker + wizard/skills** — 将 Dial 集成进交互式设置向导和频道选择器，并新增对应的 `runChannelSkill` 模型。两条 PR 配套实现，说明 **Dial 渠道很可能是下一版本的核心新特性**之一。  
  https://github.com/qwibitai/nanoclaw/pull/3050

此外 #3186 的重构（host seams for skill-owned capabilities）为未来第三方 skill 能力扩展提供了架构基础，方向与多渠道策略一致。

## 7. 用户反馈摘要

当前 Issue 评论区无新增数据，以下反馈从 PR 内容中提取：

- **Discord 审批流程不可用**：用户在实际使用中遭遇“点击批准却被拒绝”的严重问题，影响自动化审批工作流的可信度（来自 #3185 描述）。该问题属于真实使用场景中的阻断点，反馈者已提交修复。
- **新渠道集成诉求**：Dial 渠道的引入（#3041/#3050）表明用户对**短信 + AI 语音电话**这类非聊天式触达路径存在明确需求，典型场景可能包括电话通知、SMS 审批、离线告警等。

## 8. 待处理积压

以下 PR 长期未合并，建议维护者优先关注：

- **#3050 [OPEN] feat(setup): add Dial to the channel picker + wizard/skills**  
  创建于 2026-07-14，已开放 22 天。功能配套 #3041，合入顺序应统筹安排。  
  https://github.com/qwibitai/nanoclaw/pull/3050

- **#3041 [OPEN] feat(channels): add Dial channel adapter (SMS + AI voice calls)**  
  同样创建于 2026-07-14，开放 22 天。作为新渠道核心代码，长期未合并可能导致分支冲突和功能验证成本上升。  
  https://github.com/qwibitai/nanoclaw/pull/3041

- **#3186 [OPEN] refactor: add host seams for skill-owned capabilities**  
  创建于 2026-08-04，属于较新但架构影响面大的重构，需要及时评审以避免与 #3041/#3050 的合并冲突。  
  https://github.com/qwibitai/nanoclaw/pull/3186

- **#3185 [OPEN] fix(discord): strip `\n` delimiter**  
  虽然是新 PR，但属于高优先级 Bug 修复，应尽快合并并发布补丁。  
  https://github.com/qwibitai/nanoclaw/pull/3185

---

**项目健康度小结**：Issue 积压为零，PR 提交活跃，关键修复可快速产出；主要风险在于高影响 PR（#3185）和功能型 PR（#3041/#3050）的合并周期较长，建议维护团队在下一次版本规划中优先释放这些成果。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

过去 24 小时内，NullClaw 项目处于**低活跃度**状态：无新增或关闭的 Issues，唯一动态是 PR #981 的更新（该 PR 仍处于待合并状态）。无新版本发布，无 Bug 报告。整体来看，社区讨论与开发节奏放缓，但一条新增 provider 的 PR 已在等待维护者 Review，表明外部贡献者仍在持续投递功能代码，项目尚未陷入停滞。

---

## 2. 版本发布

过去 24 小时无新版本发布，故本节省略。

---

## 3. 项目进展

过去 24 小时内**无 PR 被合并或关闭**，但有一条 PR 仍处于待合并状态，值得关注：

- **#981 [OPEN] feat(provider): add grok-cli provider for xAI Grok CLI**  
  该 PR 新增了一个基于本地 CLI 的 provider，委托给 xAI Grok 命令行工具，遵循与现有 `codex-cli` / `gemini-cli` / `claude-cli` 相同的 spawn-per-request 模式。创建于 07-29，最近一次更新为 08-04，目前尚无维护者回复或合并动作。  
  🔗 [PR #981](https://github.com/nullclaw/nullclaw/pull/981)

整体来看，项目今日未向前合并任何功能，仍停留在“积压待处理”阶段，合并节奏需关注。

---

## 4. 社区热点

今日唯一活跃的 PR 为上述 #981，但**评论数据未显示（undefined）**，无法确认是否存在实质性讨论。该 PR 是近期唯一由外部贡献者发起的 provider 扩展，其存在说明部分用户对 xAI Grok 本地 CLI 接入有实际需求。

- 🔗 [PR #981](https://github.com/nullclaw/nullclaw/pull/981)

---

## 5. Bug 与稳定性

过去 24 小时内**无任何 Bug、崩溃或回归问题被报告**，项目稳定性当前无明确负面信号。

---

## 6. 功能请求与路线图信号

PR #981 是当前路线图最明确的信号：

- **新增 grok-cli provider**：允许 NullClaw 通过本地 `grok` CLI 调用 xAI Grok，复用现有的 CLI 派生模式（与 Codex、Gemini、Claude 的 CLI 接入方式一致）。由于该 PR 尚未合并，暂未进入正式版本路线图，但若被接受，下一版本将支持第五个本地 CLI 后端，扩展多模型接入生态。

- 🔗 [PR #981](https://github.com/nullclaw/nullclaw/pull/981)

---

## 7. 用户反馈摘要

由于今日无 Issue 活动、PR 评论数未公开，无法从评论中直接提炼用户痛点或使用场景。从 PR #981 的描述可间接推断：

- 用户环境需要**本地 CLI 调用而非 API**的方式接入 xAI Grok；
- 用户期望以**统一抽象**的方式管理多种 CLI provider（codex / gemini / claude / grok），降低切换成本。

---

## 8. 待处理积压

当前最重要的积压项是 **PR #981**：

- 创建于 2026-07-29，更新于 2026-08-04，已持续 7 天未有维护者介入；
- 处于 **Open** 状态，功能完整（含摘要），属于“等待 Review”状态；
- 若长期无人处理，可能导致外部贡献者流失。

**提醒维护者**：尽快对 PR #981 进行 Review 或合并，或明确告知贡献者下一步需求，以维持项目社区贡献积极性。

🔗 [PR #981](https://github.com/nullclaw/nullclaw/pull/981)

---

> **健康度总评**：项目当前活跃度较低，无 Bug 压力，但合并通道存在未响应积压。社区贡献信号存在，需要维护者及时响应以保持项目发展节奏。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-05

## 1. 今日速览

过去24小时项目活跃度极高：**50条 Issue 更新（38条新开/活跃，12条关闭）** 与 **50条 PR 更新（33条待合并，17条已合并/关闭）** 并行推进，呈现典型的 1.1.0-rc.1 发布前冲刺状态。核心工作集中在三方面：**Release 阻塞修复**（Windows ACL/CI 身份变量、迁移保真度）、**架构一致性收尾**（CI 门禁 sabotage-test、同层依赖边清理）、**新功能设计落地**（通道投递工具、自动化手动触发、Nostr WASM 函数）。无新版本发布，但 `1.1.0-rc.1` 的发布管线已被多个 PR 显式提及，预期近期将有版本产出。值得注意的风险信号：**33 条 PR 待合并** 与 **多条架构审计类 Issue（#7145、#7147、#7151）** 堆积，表明技术债务清理与功能开发在竞争合并带宽。

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#7156](https://github.com/nearai/ironclaw/pull/7156) | Enforcement: same-layer edge inventory, composition absolute-LOC ceiling, D-E vendor census, ratchet slack（**已合并**） | 四个 CI 门禁缺陷全部经过 **sabotage-test**（故意引入违规→验证变红→恢复→验证变绿），修复了"绿色 CI 无意义"的问题。这是对 #7149/#7151/#7150/#7147 四个审计问题的落地，CI 健康度实质性提升。 |
| [#7167](https://github.com/nearai/ironclaw/pull/7167) | fix(ci): unbreak per-package clippy on bin-only crates；classify `.gitignore`（**已合并**） | 修复 `--lib` 标志在 bin-only crate 上导致硬错误的问题。此前首个只改动 `ironclaw`（bin-only）的 PR 会因标志错误而非 lint 报错直接退出。 |
| [#7197](https://github.com/nearai/ironclaw/pull/7197) | ci: pass Windows identity variables to release smoke（**已合并**） | 解决 Windows 上 `USERNAME is unset` 导致 release 冒烟失败的问题。作者主动缩小了 PR 范围，避免在 release 分支上改动已有行为。 |
| [#7200](https://github.com/nearai/ironclaw/pull/7200) | fix(composition): stop icacls writing to CLI stdout on Windows（**已合并**） | 第四个 Windows 发布阻塞缺陷。修复后 preflight 成功通过编译、`--version`、`--help`、`profile list --json` 全部检查，是 1.1.0-rc.1 前最后一块拼图之一。 |

### 项目整体推进

- **Release 管线**：Windows 平台的 4 个阻塞缺陷中已修复 2 个（#7197、#7200），剩余问题在 [#7198](https://github.com/nearai/ironclaw/pull/7198)（1.0.0-rc.1 → 1.1.0-rc.1 无损迁移）和 [#7048](https://github.com/nearai/ironclaw/pull/7048)（WASM 诊断净化）的待合并队列中。
- **架构治理**：`#7156` 的合并标志着 CI 门禁从"存在但可绕过"转为"经过攻击性测试的硬约束"。`#7181`（Waves 0–4 batch 2）正在队列中，完成注册归零、adapter-registry 迁移等系列动作。
- **功能前瞻**：`#7157`（显式通道投递工具，XL 级，两车道模型）与 `#7198`（无损迁移）处于待合并状态，是 1.1.0 的主要新功能储备。

---

## 4. 社区热点

### 讨论最活跃的 Issues

| Issue | 评论数 | 状态 | 核心诉求 |
|---|---|---|---|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) [CLOSED] | 15 | 已关闭 | **错误可恢复性终局**：要求每次运行中的错误都满足可恢复性契约——(a) 运行存活 (b) 模型看到错误 (c) 错误信息包含原因与成功条件 (d) 模型有机会行动 (e) 不报告假性非成功。**v1.1.0 的核心质量目标**，15 条评论说明讨论深入且达成共识后关闭。 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) [CLOSED] | 4 | 已关闭 | **Hermetic 能力与旅程测试平台**：需要机械地回答"每个受支持能力和关键用户旅程是否有确定性的、有意义的覆盖"。社区对可量化测试覆盖的需求强烈。 |
| [#7119](https://github.com/nearai/ironclaw/issues/7119) [CLOSED] | 4 | 已关闭 | **clippy 包集依赖问题**：`cargo clippy -p ironclaw -p ironclaw_reborn_config` 在干净 main 上失败。该 issue 直接催生了 #7167 的修复，是社区驱动 CI 改进的典型案例。 |
| [#7145](https://github.com/nearai/ironclaw/issues/7145) | 3 | 打开 | **extension_host→loops 重分层规模估算修正**：指出不能按文件数衡量架构翻转的工作量，应从"四个端口残留"出发。体现资深维护者对架构治理的精细化思考。 |
| [#7144](https://github.com/nearai/ironclaw/issues/7144) | 2 | 打开 | **代码审查工具误报**：CodeRabbit 对 17,470 行被移动的 `contribution.rs` 产生 29 条"新问题"线程，实际是旧代码的迁移而非新增。引发对代码审查工具在大型重构中效用的讨论。 |

**热点分析**：今日讨论高度集中在 **工程治理**（CI 可信度、架构测量方法）与 **发布质量**（错误恢复、测试覆盖）两个主题上，Twitter/X 上常见的"功能求点赞"类讨论较少。Issue #7119 → PR #7167 的链路显示了社区从发现问题到修复的短周期闭环。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 高 | [#6752](https://github.com/nearai/ironclaw/issues/6752) | **实例删除失败**，重新登录卡在 "Loading your agents..."。阻塞用户对实例的生命周期管理，影响面大。 | **无 fix PR** |
| 🔴 高 | [#7168](https://github.com/nearai/ironclaw/issues/7168) [CLOSED] | **Agent 安装的技能不可见**：`skill_install` 返回成功但技能不出现在 Settings→Skills，也无法激活。局部复现，功能完整性受损。 | 已关闭（修复已合入或判定为重复） |
| 🟠 中 | [#7192](https://github.com/nearai/ironclaw/issues/7192) | **WebUI 乐观消息渲染顺序错乱**：用户消息暂时显示在 agent 回复下方，对话阅读顺序颠倒。 | 无 fix PR |
| 🟠 中 | [#7191](https://github.com/nearai/ironclaw/issues/7191) | **builtin.time 解析缺陷**：agent 调用 `parse("24 hours ago")` 失败，返回晦涩的 `input_error()`。生产中已观察到 agent 因时间计算错误而失败。 | 无 fix PR（有提案：增加相对偏移算术 + 类型化错误） |
| 🟠 中 | [#7115](https://github.com/nearai/ironclaw/issues/7115) | **Legacy-Slack 迁移被死环境变量门控**：entrypoint.sh 检查已不存在的 `IRONCLAW_REBORN_SLACK_ENABLED`，导致按文档操作会跳过迁移。 | 无 fix PR |
| 🟡 低 | [#7103](https://github.com/nearai/ironclaw/issues/7103) | **延迟追踪字段无条件计算**：即使关闭延迟追踪，编码工具 JSON 仍在计算字节数，属性能浪费。 | 无 fix PR |
| 🟡 低 | [#7104](https://github.com/nearai/ironclaw/issues/7104) | **提取器错误语义错误**："未找到文本"被报告为 Failed 而非 Empty，误导模型判断。作者特意 filed 而非直接 patch，因涉及模型可见文本变更。 | 无 fix PR |
| 🟡 低 | [#7146](https://github.com/nearai/ironclaw/issues/7146) | **121 处错误的 tracing target 语法**：`target = "…"`（字段）而非 `target: "…"`（元数据），导致对应 filter 看不到事件，可观测性受损。 | 无 fix PR |
| 🟡 低 | [#7147](https://github.com/nearai/ironclaw/issues/7147) | **架构 ratchet 在 main 上存在未跟踪 slack**：基线值未被强制约束，三个开放 PR 持有同一基线的三个不同值。 | 已由 #7156 修复 |

**趋势观察**：今日 Bug 修复节奏明显加快，尤其是 **release 阻塞类缺陷**（#7167、#7197、#7200）在24小时内全部解决。#7191 和 #7192 属于"从真实生产线程/用户反馈中发现"的实用型 Bug，体现了项目从真实使用数据驱动修复的成熟度。#7146 这类"系统性误用 API"的批量问题，建议通过一次全局机械替换 PR 处理，效率更高。

---

## 6. 功能请求与路线图信号

### 新提出的功能需求

| Issue | 需求 | 可能的版本信号 |
|---|---|---|
| [#7194](https://github.com/nearai/ironclaw/issues/7194) | **共享频道作为外发投递目标**：agent 可枚举 Slack 频道并可 `send_message`，但无法设置为投递目标。补齐投递层能力缺口。 | 与 #7157（显式通道投递工具，XL 级 PR 待合并）直接相关，**大概率进入 1.1.0**。 |
| [#7193](https://github.com/nearai/ironclaw/issues/7193) | **自动化手动触发（run-now）**：为 trigger 域、产品表面、能力、WebUI 增加"立即运行"能力，目前只有 list/pause/resume/rename/delete。 | L 级增强，**可能是 1.1.0 或 1.2.0 的功能**。已有配套 E2E 测试 PR #7059 支持自动化生命周期，表明该领域在推进。 |
| [#7177](https://github.com/nearai/ironclaw/issues/7177) | **Deferred 工具检索的 schema-aware 排名**：当前只按名称+描述做固定匹配，未利用 canonical capability 词汇。 | 与 Reborn progressive disclosure 直接相关，**suggested_P2，可能在 1.1.0 窗口内**。 |
| [#7191](https://github.com/nearai/ironclaw/issues/7191) | **builtin.time 相对偏移算术**：支持"24 hours ago"类自然语言输入，替换 `input_error()` 为类型化错误。 | 明确标注为 Bug+Fix，**suggested_P2**，属于改善 agent 基础工具可靠性的重要补丁。 |
| [#7183](https://github.com/nearai/ironclaw/issues/7183) | **每用户 LLM 模型选择**：目前仅管理员可配，用户希望自助选择。 | 来自 Champion 反馈，**v1.1.0 路线图候选**。 |
| [#7105](https://github.com/nearai/ironclaw/issues/7105) | **评估独立 identity/session + 支付服务**：将 cloud API 的支付问题抽离为专用服务。 | **v1.2.0 路线图候选**，属于架构级演进，短期内不会落地。 |
| [#6731](https://github.com/nearai/ironclaw/issues/6731) | **IronHub 集成**（将工具/技能市场接入 IronClaw）。 | 已有文档 PR #6965 铺垫 **docs/hub/**，功能落地仍需时间，**v1.1.0 后的重要方向**。 |

### 路线图判断

- **1.1.0 明确候选**：#7194（通道投递 + #7157 实现）、#7193（自动化触发 + #7059 测试）、#7177（工具检索排名改进）。
- **v1.2.0+ 信号**：#7105（支付/身份服务化）、#6731（IronHub 集成）、#3773（目标 crate 架构落地）。

---

## 7. 用户反馈摘要

### 来自真实使用场景的痛点

| 来源 Issue | 用户反馈 | 解读 |
|---|---|---|
| [#6752](https://github.com/nearai/ironclaw/issues/6752) | 尝试删除 IronClaw 实例 "calm-hor..." 时报错，重新登录卡在 "Loading your agents..."。 | **实例生命周期管理**的可靠性问题，直接影响用户对云服务的信任。 |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | **记忆跨对话不可靠**：多名测试者独立观察到，前一个对话建立的上下文在后续对话中无法被可靠召回（Devon 的 legal 场景、marketing 场景均有出现）。 | 这是 **长期记忆/上下文持久化**的核心痛点，Champions 周会反馈，严重度较高。 |
| [#7183](https://github.com/nearai/ironclaw/issues/7183) | **模型选择权限**：营销团队 Jeremy 反馈"没有途径切换模型，只能等管理员（Tobias）配置"。 | **用户自主权**需求，与多租户产品形态的成熟度相关。 |
| [#7180](https://github.com/nearai/ironclaw/issues/7180) | **网页抓取时灵时不灵**：Michael（builder ops）报告 agent 在数据检索时有时用 `http` 工具而非 `web_search`，成功率不稳定。 | **工具选择的正确性**问题，与 #6565（技能发现与路由）直接相关。 |
| [#7199](https://github.com/nearai/ironclaw/issues/7199) | 社区用户 PostChairmanLock 建议：记录"候选技能存在但未被选择" vs "被选择并改变了最终答案"，以度量技能选择的实际收益。 | 来自外部开发者的**可观测性建议**，呼应 #6565 对技能路由度量的需求。 |
| [#7178](https://github.com/nearai/ironclaw/issues/7178) | （内部）1.0.0-rc.1 → 1.1.0-rc.1 **升级目前非无损**，需要保证线程、消息、OAuth 别名等完全迁移。 | 升级路径的**数据完整性**是用户无感升级的前提，已在 #7198 PR 中解决。 |

### 总体用户情绪

用户对 **IronClaw 的核心 agent 能力持认可态度**（自动化、通道消息等已可用），但对 **可靠性**（记忆召回、抓取稳定性）和 **自主性**（模型选择、手动触发）有明确改进预期。Champions 周会成为重要反馈渠道，建议维护团队跟踪 #7185、#7183、#7180 的解决进度，这三个问题直接影响用户对产品的长期信心。

---

## 8. 待处理积压

### 长期未响应的关键事项

| 类型 | 编号 | 创建时间 | 已开放时长 | 说明 |
|---|---|---|---|---|
| Epic | [#3773](https://github.com/nearai/ironclaw/issues/3773) | 2026-05-19 | **79天** | **Land the IronClaw Target Crate Architecture**。目标是为物理 crate 布局、依赖图、权限边界、CI 执行提供统一目标架构。虽被 #7145/#7147/#7151 等子任务逐步推进，但 Epic 本体仍开放，架构级目标尚未完全达成。 |
| Epic | [#6565](https://github.com/nearai/ironclaw/issues/6565) | 2026-07-23 | 13天 | **Reliable Skill Discovery, Routing, and Activation**。21 条验收标准，四条属他人开放工作（#6638、#4428、#5581、#4543），被 #6941 拆分后进度仍不明确。技能路由稳定性直接影响用户反馈的 #7180。 |
| PR | [#5598](https://github.com/nearai/ironclaw/pull/5598) | 2026-07-03 | **33天** | **chore: release**，涉及 `ironclaw_common` 0.4.2→0.5.0（⚠ breaking）、`ironclaw_skills` 0.3.0→0.4.0（⚠ breaking）。长期未合并，阻塞下游 crate 的版本更新。建议维护者决策：是否拆分发布或加速 review。 |
| PR | [#5101](https://github.com/nearai/ironclaw/pull/5101) | 2026-06-20 | **46天** | **ci: reuse cargo-component installer in live canary**。替换低权限环境的 `cargo install` 为 pinned `taiki-e/install-action`，对 CI 可复现性有直接改进，优先级被新 PR 挤占。 |
| Issue | [#6947](https://github.com/nearai/ironclaw/issues/6947) | 2026-07-31 | 5天 | **classify-test-scope.sh 对 ironclaw_product 错误分类**：glob 规则早于 product-crate 合并，导致 Reborn 作用域的 crate 被误判为 legacy-only。影响 CI 测试范围判断的准确性。 |
| Epic | [#6731](https://github.com/nearai/ironclaw/issues/6731) | 2026-07-27 | 9天 | **Integrate IronHub into IronClaw**。文档 PR #6965 已就绪但功能仍无排期，属战略方向但执行节奏不明确。 |

### 积压风险提示

- **架构类 Epic（#3773、#6565）与功能开发竞争同一批核心维护者**（BenKurrek、ilblackdragon、serrrfirat 的 PR/Issue 高度重叠），建议明确各 Epic 的当前 owner 与下一里程碑，防止"开放但无人推进"。
- **release PR #5598 开放 33 天** 是明显的流程瓶颈，应优先解决，否则 `ironclaw_common` 的 breaking changes 可能导致后续依赖升级连锁延迟。
- **#6947 属于 CI 基础设施缺陷**，5 天未响应尚可接受，但若继续拖延，会导致 Reborn 相关 crate 的测试覆盖统计长期失真。

---

*本日报基于 2026-08-05 的 GitHub 数据生成，所有链接均指向 nearai/ironclaw 仓库的对应 Issue/PR。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-05）

## 1. 今日速览

过去 24 小时，LobsterAI 共有 **1 条 Issue 更新、15 条 PR 更新**，其中 10 条 PR 已合并/关闭、5 条待合并，**无新版本发布**。项目整体处于高频迭代状态：**Release 2026.8.3 已合并入 main**，涵盖积分活动、登录体验、Artifact 自动预览控制、模型错误处理优化等多项能力；同时多个围绕“启动积分活动”的打磨 PR 仍在持续提交（#2427、#2428、#2432、#2433）。值得警惕的是，安全类问题开始显现：Issue #1202 报告 agent 存在泄漏 model key 的风险，目前尚无修复 PR。总体而言，项目活跃度较高、功能推进节奏快，但需尽快处理安全线索与若干长期积压的陈旧 PR。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日最重要的事件是 **Release 2026.8.3 集成 PR #2430** 合并入 `main`，将以下改动带入主线：

- 原生“积分奖励活动”能力；
- 首次运行登录流程优化（#2429）；
- Artifact 自动预览开关（#2425）；
- 模型错误处理增强（#2426）；
- Windows 安装器可靠性改进。

其他已合并/关闭的重要 PR：

- **[#2426]** 将模型“过载/容量不足”错误从通用速率限制中拆分为独立的 `ModelOverloaded` 分类，避免用户被误导后立即重试。
- **[#2425]** 新增设置项，允许用户禁用 Artifact 自动预览，同时保留手动预览能力。
- **[#2427]** 将启动积分活动的海报与 CTA 素材打包进客户端，由本地资源渲染弹窗，但仍由服务器控制可用性、时机和奖励发放。
- **[#2428]** 补全启动积分活动埋点字段，完整记录登录跳转 URL 及各类失败原因。
- **[#2432]** 禁用最终奖励自动弹窗，改为用户手动领取，减少重复打扰。
- 依赖更新：React 19.2.4（#1283）、@headlessui/react 2.2.9（#1282）、react-syntax-highlighter 16.1.1（#1284）已合并，技术栈保持现代化。

这些改动让项目在活动运营、用户控制权和错误信息可理解性方面都有明显进展。

## 4. 社区热点

最受关注的是 **Issue #1202**：《agent泄漏model key信息，存在敏感信息泄漏风险》。用户 `blueb0ne` 演示了通过连续诱导询问，即可让 agent 逐步透露配置文件位置、环境变量以及 model key 信息，并附带了完整日志包。该 Issue 创建于 4 月 1 日，8 月 4 日被 stale 机制再次标记更新，是当前唯一活跃 Issue，也是安全风险最高的话题。其背后诉求很明确：AI agent 必须建立敏感信息边界，拒绝回答与密钥相关的诱导性问题。

此外，**PR #2433** 今日新开，继续打磨启动积分活动体验，包括裁剪海报白边、显示本地化领取失败提示并保留原始错误用于分析。这反映出社区对活动展示细节和错误反馈质量的高度关注。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🔴 高 | **Agent 泄漏 model key 敏感信息**（[#1202](https://github.com/netease-youdao/LobsterAI/issues/1202)）：用户可诱导 agent 获取密钥相关信息，存在严重安全风险。 | 仍 Open，无修复 PR，需紧急设计安全策略 |
| 🟠 中 | **模型容量过载被误报为速率限制**（[#2426](https://github.com/netease-youdao/LobsterAI/pull/2426)）：此前 “overloaded/capacity” 错误被归入通用 rate-limit，导致用户收到错误提示后盲目重试。 | 已合并修复，新增 `ModelOverloaded` 独立分类 |
| 🟡 低 | **最终奖励自动弹窗打扰用户**（[#2432](https://github.com/netease-youdao/LobsterAI/pull/2432)）：活动最终奖励海报会自动弹出，干扰操作。 | 已合并修复，改为手动领取 |

## 6. 功能请求与路线图信号

- **永久隐藏侧边栏广告**（[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)，源自 Issue #2342）：用户不再满足于逐条关闭广告，要求提供“Settings → General”中的永久开关。该 PR 仍待合并，是下个版本呼声较高的功能。
- **控制 Artifact 自动预览**（[#2425](https://github.com/netease-youdao/LobsterAI/pull/2425)）：今日已合并，表明“减少自动行为打扰”成为产品优化方向。
- **启动积分活动体验优化**（[#2427](https://github.com/netease-youdao/LobsterAI/pull/2427)、[#2428](https://github.com/netease-youdao/LobsterAI/pull/2428)、[#2433](https://github.com/netease-youdao/LobsterAI/pull/2433)）：素材本地化、埋点完善、失败提示友好化，说明项目正在将活动模块做深做细。
- **安全边界**（[#1202](https://github.com/netease-youdao/LobsterAI/issues/1202)）：用户实例表明 agent 需要具备密钥脱敏/拒答能力，该需求很可能推动安全功能进入路线图。

## 7. 用户反馈摘要

- 在 [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) 中，用户明确指出“agent 应该拒绝透露相关 key 信息”，并提供了完整复现步骤与日志，属于真实且急迫的安全痛点。
- [PR #2433](https://github.com/netease-youdao/LobsterAI/pull/2433) 的改动透露，此前活动领取失败时展示原始服务器错误，用户难以理解；新方案改为本地化通用提示，同时保留原始错误供分析。这符合“面向用户的消息要友好，面向开发的信息要可观测”的诉求。
- 来自 [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) 的需求显示，侧边栏广告的反复出现已影响日常使用，用户希望“永久关闭”，而非每次手动关闭单个横幅。

## 8. 待处理积压

以下 Issue/PR 已长时间未获推进，建议维护者优先处理：

- **[Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202)**：敏感信息泄漏，虽已 stale，但安全风险高，等待安全方案或修复 PR。
- **[PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205)**：修复 session 重命名失败时无错误提示的问题，自 4 月起已 open 并 stale，改动量小，适合快速合入。
- **[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)**：dependabot 提出的 electron 40.2.1 → 43.2.0 大版本升级，已 open 4 个多月，需评估兼容性后决定合并或关闭。
- **[PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)**：隐藏侧边栏广告的永久设置，功能需求明确，已等待约 2 周，待 reviewer 推进。
- **[PR #2431](https://github.com/netease-youdao/LobsterAI/pull/2431)**：今日新开但描述为空，标题为 “Liuzhq/fix rlog 202683”，需作者补充改动说明，否则容易成为新的积压项。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-05

---

## 1. 今日速览

- 过去24小时**无新增或关闭的Issue**，**无新版本发布**，Issue侧活动完全停滞。
- 仅有的1条PR更新来自Dependabot，对 `/website` 目录下的 `undici` 依赖进行补丁级升级，目前处于待合并状态。
- 无合并/关闭的PR，项目代码库今日未发生任何实际变更。
- 从数据看，今日项目活跃度**极低**，社区互动几近于零，整体处于**相对安静**的维护期，或为集中开发前的间歇期。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

- **无合并/关闭的PR**，因此今日没有功能推进或Bug修复合并至主分支。
- 唯一活跃的PR为 [#1184](https://github.com/moltis-org/moltis/pull/1184)，由Dependabot提交，将 `/website` 目录下的 `undici` 从 `7.28.0` 升级至 `7.29.0`。该PR属于依赖维护范畴，尚未合并，不影响当前主分支功能。
- 整体来看，项目主分支今日无实质变化，停留在依赖管理层面。

---

## 4. 社区热点

- 今日唯一PR [#1184](https://github.com/moltis-org/moltis/pull/1184) 暂无评论、无点赞，讨论热度为零，不具备社区热点特征。
- 该PR为常规依赖更新升级，从侧面反映维护方对运行时安全与依赖新鲜度的关注，但未引发社区讨论。

---

## 5. Bug 与稳定性

- 今日**无新报告的Bug、崩溃或回归问题**。
- 无相关修复PR。

---

## 6. 功能请求与路线图信号

- 今日**无新功能请求**。
- 未观察到新的路线图信号。

---

## 7. 用户反馈摘要

- 今日无Issue评论可供分析，**无真实用户反馈数据**。

---

## 8. 待处理积压

- 今日无长期未响应的Issue或PR积累。
- 值得关注的待办项为已打开的依赖更新PR [#1184](https://github.com/moltis-org/moltis/pull/1184)：该PR更新 `undici` 至 `7.29.0`，建议维护者及时审查并合并，以维持 `website` 目录依赖的安全性与稳定性。
- 从整体积压情况看，项目维护状态良好，不存在明显被忽视的社区反馈。

---

*报告基于2026-08-05 GitHub公开数据生成，数据维度有限，结论仅反映当日时间窗口内的项目状态。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-05

> 数据来源：github.com/agentscope-ai/CoPaw ｜ 统计区间：2026-08-04 ~ 2026-08-05

---

## 1. 今日速览

过去 24 小时项目保持高活跃度：共更新 29 条 Issue（新开/活跃 17 条，关闭 12 条）和 47 条 PR（待合并 28 条，合并/关闭 19 条），无新版本发布。社区讨论焦点集中在安全审批在非 Web UI 通道不可用（[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)、[#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)）以及 GPT-5.6 prompt caching 支持（[#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)）。同时，多个稳定性修复 PR 已合入，包括时间戳时区处理（[#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685)）、日志脱敏（[#6692](https://github.com/agentscope-ai/QwenPaw/pull/6692)）和 CI 测试修复（[#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678)）。v2.1.0-beta.1 仍处于测试反馈期，桌面端和浏览器 SDK 出现若干回归问题（[#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)、[#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)），整体项目处于正常的 beta 迭代节奏。

---

## 2. 版本发布

**无新版本发布。** 最近一个版本为 v2.1.0-beta.1（Beta），相关安装验证任务 [#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656) 已关闭。

---

## 3. 项目进展

今日共 19 条 PR 合并/关闭，以下为推进了关键功能或修复的代表性 PR：

### 核心稳定性修复
- **[#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) fix(timestamp): improve timestamp handling in agentscope_msg_to_message** — 修复 [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301)：naive UTC 时间戳被误当作本地时间处理导致时区转换错误，已合入。
- **[#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) fix(scroll): use SystemMsg for compressed memory placeholder in _rebuild_context** — 修复 [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541)：scroll 压缩注入的占位消息角色为 `user` 导致 DeepSeek 等 API 返回 HTTP 400，改为 `SystemMsg` 解决。
- **[#6692](https://github.com/agentscope-ai/QwenPaw/pull/6692) fix: avoid logging conversation command arguments** — 不再在 INFO 日志中输出原始对话命令参数（如 `/compact` 的敏感内容），仅保留命令名，并添加了回归测试，提升隐私安全性。

### 集成测试与 CI 修复
- **[#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) fix(ci): install Playwright Chromium for the integration suite** — 解决 nightly 全量测试因缺少 Chromium 可执行文件导致的 7 个 browser 集成测试失败。
- **[#6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) test(integration): align import-local with #6487 and widen a flaky poll window** — 对齐 `/import-local` 源目录守卫（必须位于 `$HOME` 下），并放宽一个不稳定轮询窗口。
- **[#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) test(integration): fix chrome contract mismatches and add missing p-tier markers** — 修复 PR 门禁的 p-tier 标记空洞，避免集成测试绕过门禁。

### 安全机制收尾
- **[#4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) feat(security): Mac OS file path white list** — 经过近三个月的评审，该 macOS 文件路径白名单 + `sandbox-exec` 防护方案于今日关闭，为后续安全功能铺路。

**整体评价：** 今日合入的 PR 集中在稳定性、安全性和测试基建，没有大型新功能合入，但为 v2.1.0 正式版扫除了多个已知障碍。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 13 | 支持 GPT-5.6 prompt caching 参数 |
| 2 | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | 12 | Console 通道不渲染安全审批提示 |
| 3 | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 6 | 任务产出物按任务目录隔离 |
| 4 | [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | 5 | DeepSeek 思考模式多轮对话失败 |

**分析：**

- **[#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) GPT-5.6 prompt caching 支持**：用户希望在多轮 Agent 循环中复用缓存前缀以减少延迟和成本，这是模型 API 演进带来的自然诉求，预计会进入 providers 层的能力适配队列。
- **[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) Console 通道安全审批提示缺失**：这是在终端场景下使用 QwenPaw 的严重 UX 缺陷——当 agent 执行 `rm`/`del` 等高危命令时，console 通道不渲染审批请求，用户完全无感知，agent 等待 300 秒后超时被拒。该 Issue 已关闭，但说明安全审批的多通道适配仍需加强。
- **[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) 任务产出物目录混乱**：用户对 media 目录堆积大量文件不满，建议按任务隔离产出物，与 PR [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504)（统一项目目录解析）方向一致。

---

## 5. Bug 与稳定性

按严重程度降序排列：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | **v2.1.0b1 桌面版向子进程注入 PYTHONHOME，导致所有 python 子进程崩溃**（`encodings ModuleNotFoundError`） | 无 |
| 🔴 高 | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | **微信 iLink 通道：一次性 context_token 被 typing indicator 消耗，导致回复被拒（ret=-2）且“正在输入”状态卡死** | 无 |
| 🔴 高 | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) | **超大工具输出导致历史会话加载卡死**（数 MB 输出被完整保存进上下文），建议增加输出截断和历史消息分页 | 无（已关闭，需跟进） |
| 🔴 高 | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | **浏览器 SDK `open()` 总是失败**：`WireProtocolError: Target crashed`，会话已连接但每次打开页面即崩溃 | 无（可能与 [#6669](https://github.com/agentscope-ai/QwenPaw/pull/6669) 相关） |
| 🟠 中 | [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) | Console 通道不渲染安全审批提示，高危命令静默超时 | 已关闭 |
| 🟠 中 | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | `cron pause/resume` 状态不持久化，重启后丢失 | ✅ [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) |
| 🟠 中 | [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测用 false 覆盖已文档化的图片/视频能力 | 无 |
| 🟠 中 | [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | App Center 安装 qwenpaw-creator 失败：插件顶层模块 `utils` 命名冲突 | ✅ [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) |
| 🟠 中 | [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | DeepSeek 思考模式多轮失败：`reasoning_content` 在 OpenAI formatter 跳过 ThinkingBlock 后缺失 | 无 |
| 🟡 低 | [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) | Token usage 持久化在瞬时写失败后不重试，导致计数丢失 | 已关闭 |

---

## 6. 功能请求与路线图信号

以下用户需求与已有 PR/实现存在关联，可能被纳入后续版本：

| 需求 | Issue | 关联 PR/现状 | 判断 |
|---|---|---|---|
| **频道启动重试与健康检测** | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | ✅ [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) 已实现 Matrix 启动重试 | 高概率合入 |
| **按需加载技能（On-Demand Skill Loading）** | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | 27+ 技能时描述占用 8k-10k tokens（系统提示词 25%-30%） | 路线图重点候选 |
| **任务产出物按任务目录隔离** | [#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) | 与 PR [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) 项目目录统一模型方向一致 | 可能合并推进 |
| **内置 Volcengine Agent Plan 和 Xiaomi MiMo 提供商** | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 新增两个内置 provider，含 API 端点修复 | 等待维护者评审 |
| **一个 agent 同时使用多个模型并行跑** | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | 多模型独立运行后汇总结果，模型事实核验场景 | 路线图信号，暂无 PR |
| **GPT-5.6 prompt caching 参数支持** | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 需在 Responses API provider 增加缓存参数透传 | 取决于官方 API 稳定性 |
| **全局规则（类似 .agent/.claude）** | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) | 需要置顶的全局系统提示词机制 | 设计讨论中 |
| **对话框拖入文件直接读取原路径** | [#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) | 与 PR [#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492)（保留上传文件名）相关 | 部分实现 |

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼出以下真实用户声音：

- **安全审批通道适配是当前最大痛点**：多个用户反馈在非 Web UI 通道下无法审批高危命令——console 通道完全不渲染（[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)），微信通道只能看到 console-only 对话框、5 分钟自动拒绝（[#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)）。这让 `rm`、`kill` 等命令在移动场景下形同虚设。
- **文件管理体验需要改善**：有用户指出任务产出物全部堆积在 media 目录、拖入文件需要先上传复制再读取、文件多时无法完整显示文件名（[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)、[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)、[#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)）。这些反馈集中在"本地优先"的使用习惯上。
- **模型层稳定性问题影响信任**：DeepSeek 思考模式在多轮对话中丢失 `reasoning_content`（[#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667)）、免费模型频繁 429 限流打断任务（[#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674)），用户希望有自动重试和退避机制。
- **v2.1.0b1 的桌面端回归让用户犹豫升级**：PYTHONHOME 注入导致 Python 子进程崩溃（[#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)）和浏览器 SDK 打开页面必崩（[#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)）都来自 beta 用户，期望在正式版前修复。
- **技能系统 token 开销大**：有用户反馈 27+ 个启用技能时，描述信息占了系统提示词的 25-30%，"每个对话都重复消耗这些 token"（[#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)），希望按需加载。

---

## 8. 待处理积压

以下 Issue/PR 已开放一段时间且未得到解决，建议维护者关注：

| 类型 | 编号 | 标题 | 创建时间 | 备注 |
|---|---|---|---|---|
| Issue | [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | 如何使用 loongsuite 添加 LLM trace | 2026-08-01 | 已 4 天无维护者回应，AgentScope 生态集成问题 |
| Issue | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | 2.0 新版本自动压缩无法触发记忆 | 2026-08-01 | 已有 PR [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) 待合并 |
| Issue | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | 希望一个 agent 可以同时使用多个模型 | 2026-07-24 | 12 天无维护者回应，路线图级需求 |
| Issue | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 添加 Volcengine Agent Plan 和 Xiaomi MiMo providers | 2026-07-27 | 9 天无维护者回应，新 provider 请求 |
| PR | [#6331](https://github.com/agentscope-ai/QwenPaw/pull/6331) | chore(console): 指定 Node.js 版本要求 | 2026-07-22 | first-time-contributor，2 周未合并 |
| PR | [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | feat: 为 ReMe 记忆搜索添加 reranker 支持 | 2026-07-23 | Under Review 状态，后端实现已完成 |

---

**一句话总结：** 项目活跃度高且修复节奏稳定，但 v2.1.0b1 暴露的桌面端与浏览器回归（[#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697)、[#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)）以及安全审批多通道适配是当前最需要优先解决的问题。

*本报告由 AI 自动生成，数据来源于 CoPaw GitHub 仓库公开信息。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-05

> 数据窗口：过去 24 小时 | 数据源：[ZeroClaw GitHub 仓库](https://github.com/zeroclaw-labs/zeroclaw)

## 1. 今日速览

过去 24 小时 ZeroClaw 保持高活跃：42 条 Issue 更新（新开/活跃 40，关闭 2）、50 条 PR 更新（待合并 48，合并/关闭 2），无新版本发布。项目正处于 **"架构 RFC 密集讨论 + 安全缺陷集中修复"** 双线并行阶段：社区围绕 Chat Completions 协议兼容（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）、Goal 模式（[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)）、shell 命令策略（[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)）等大型设计提案展开高密度讨论，同时 3 个已确认的 S0 级安全缺陷（Webhook 未鉴权、知识图谱越权、会话工具越权）进入修复/追踪流程。整体健康度评估：**社区活性强、安全响应快**，但 48 条待合并 PR 与大量 `needs-author-action` / `needs-maintainer-review` 状态的 RFC 构成明显的决策积压，是当前项目的主要瓶颈。

## 2. 项目进展

**今日合并/关闭动态：**
- PR 合并/关闭 2 条，具体清单未在 Top-20 列表中展开；可确认的定案是 MoA 虚拟模型 provider RFC（[#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)）关闭，该提案经 10 条评论后结束讨论周期（是否采纳需待后续 Release Notes 确认）。
- Issue 关闭 2 条，其中另一条未在 Top-30 列表中展示。

**合并队列中持续推进的关键 PR（反映整体前进方向）：**

| 方向 | PR | 推进内容 |
|---|---|---|
| A2A 协议 | [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | Phase 1 落地：4 个 `a2a_*` 工具 + A2A v1.0 共享 wire model + 默认关闭的 `[a2a.client]` 配置，落实 RFC #9106 的 6 项维护者立场 |
| Provider 兼容 | [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743) | 将 modalities 解析器接入 `capabilities_for_model`，修复 #8733 中 vision 能力检测无生产调用方的问题 |
| Provider 兼容 | [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) | 解析 DeepSeek 系模型的 DSML / `<\|tool_call\|>` 工具调用信封 |
| Provider 兼容 | [#9757](https://github.com/zeroclaw-labs/zeroclaw/pull/9757) | Anthropic 工具结果图片改为嵌套 blocks 传递（此前图片根本无法到达模型） |
| 安全加固 | [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) | 修复 browser 工具 `screenshot` 任意文件写入逃逸，补上 `is_path_allowed` / `resolve_tool_path` 校验（P1） |
| 安全加固 | [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) | 命令审计日志默认改为禁用并警告显式开启者，遵循"安全诚实性"方向（P1，修复 #9391） |
| 稳定性 | [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | cron agent 任务增加墙钟超时，避免悬挂 run 永久占用 sqlite 锁（P1） |
| 稳定性 | [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | `config/set` 失败时事务化回滚自动创建的 map 别名（P1） |
| 稳定性 | [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) | JSONL 会话迁移改为重试安全：变更锁 + SQLite 事务 + 原子收据 + no-clobber 归档 |
| ZeroCode UI | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | 多会话窗格 + agent 侧边栏 + 侧边栏启动 quickstart（依赖 #9738） |
| 工具解析 | [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) | 兼容 Qwen2.5-Coder 将调用包裹在 `<tools>` 声明标签下的输出格式 |
| 可观测性 | [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | 历史裁剪事件暴露 token 统计（`tokens_before`/`tokens_after`），修复 #9619 |
| 评估体系 | [#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224) | 新增重复 live runs + `pass@k` / `pass^k` + 误差棒 |
| CI | [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) | 例行构建工具链升至 Rust 1.97.1，源码下限保持 1.96.0 |

**整体判断**：安全/稳定性修复占开放 PR 约一半，是当前投入最集中的方向；互操作性（A2A、OpenAI-compatible 能力检测、多模型工具调用解析）是第二大主线。项目正从"功能铺量"转向 **"安全边界收敛 + 协议生态兼容"** 阶段。

## 3. 社区热点

**讨论最活跃议题 Top 5：**

| 排名 | 议题 | 评论 | 状态 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#8603 RFC: Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 16 | OPEN · p2 · needs-maintainer-review | 以 OpenAI Chat Completions 协议暴露 agent 能力，接入 Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK 等现成客户端 |
| 2 | [#8303 RFC: Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 15 | OPEN · p2 · needs-maintainer-review | 跨多个 agent turn 的有界目标执行（bounded foreground work），首个实现边界因膨胀而被收窄 |
| 3 | [#7155 RFC: 高危 shell 命令确认层级](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 14 | OPEN · p1 · needs-maintainer-review | Claude Code 风格 allow/ask/deny 命令模式策略；Rev 3（08-05）已按维护者 scope review 收窄为规范性的 shell-policy 契约 |
| 4 | [#9488 RFC: 统一附件架构](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 13 | OPEN · p2 · needs-maintainer-review | 统一 web 聊天与各 channel 的附件处理链路 |
| 5 | [#8568 MoA 虚拟模型 provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | 10 | CLOSED | Mixture-of-Agents 聚合/裁判模型，已定案关闭 |
| 5 | [#6850 RFC: 内存生命周期与存储解耦](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 10 | OPEN · needs-author-action | `Memory` trait 应只管存储，consolidation/governance 等生命周期决策不应由各 gateway/channel 重复实现 |
| 5 | [#9487 RFC: 运行时拥有的会话与传输适配层](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 10 | OPEN · p2 · needs-maintainer-review | Rev 2 已批准与 #9488/#9600 的 ownership boundary，所有迁移入口统一提交 `InboundAction` |
| 5 | [#7141 RFC: 可插拔入站认证与 canonical principals](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 10 | OPEN · p1 · in-progress | OIDC + 可插拔 provider 身份架构（Rev 7），面向 Identity & Access 里程碑 |

**诉求分析**：社区关注度集中在两大主题——**协议互操作**（#8603 高居榜首，用户明确要求"协议标准化而非平台锁定"）与**安全可控**（shell 命令策略、入站认证、会话归属权）。值得注意 #9487/#9488/#9600 三个议题正在做系统性的归属权收敛（runtime-owned sessions、attachments、persistence），说明架构层在主动消除"多方改同一契约"的混乱，这是项目走向成熟的积极信号。

## 4. Bug 与稳定性

**已确认的严重问题（按严重程度排序）：**

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| P0 / S0 | [#9565 Webhook 处理器不 fail-closed](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | WhatsApp Cloud / Linq / WATI 三个入站 webhook handler 在 `crates/zeroclaw-gateway/src/lib.rs` 中未认证调用者即分发消息，攻击者可控消息可直达 agent | in-progress；相关 PR [#6622](https://github.com/zeroclaw-labs/zeroclaw/pull/6622) 仅覆盖 WhatsApp LID allowlist 测试，非直接修复 |
| P1 / S0 | [#9647 知识图谱无 per-agent 归属](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | `knowledge` 工具暴露全局共享知识图谱，任意 agent 可读写其他 agent 的知识 | accepted · follow-up |
| P1 / S0 | [#9646 会话/频道工具越权](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | `sessions_list/history/send`、`discord_search` 等接受模型提供的 `session_id`/`channel_id` 且无归属校验，可跨 agent 访问 | accepted · follow-up |

**已有修复 PR 的 Bug：**

- **任意文件写入逃逸**（browser 工具）→ [PR #9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362)（P1）
- **cron 任务悬挂致 sqlite 锁不释放** → [PR #9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)（P1）
- **`config/set` 失败残留半成品配置** → [PR #9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281)（P1）
- **命令审计日志"名不副实"** → [PR #9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410)（P1，修复 #9391）
- **JSONL 会话迁移不可重试** → [PR #9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715)
- **上下文耗尽时 agent 静默闲置** → [PR #9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504)
- **Codex CLI 危险 extra_args 无提示** → [PR #9548](https://github.com/zeroclaw-labs/zeroclaw/pull/9548)
- **模型工具调用格式兼容**：DeepSeek DSML（[#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723)）、Qwen `<tools>` 包裹（[#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477)）、Anthropic 工具图片丢失（[#9757](https://github.com/zeroclaw-labs/zeroclaw/pull/9757)）

**观察**：今日无新增崩溃/回归类报告；3 个 S0 级缺陷均来自社区源码审计（"verified by source inspection"），且已被官方快速确认（accepted/in-progress），说明外部安全审计是该项目质量保障的重要补充力量，也提示核心安全边界（认证、归属、路径校验）仍需系统性加固。

## 5. 功能请求与路线图信号

**最可能进入下一版本的候选：**
- **A2A 出站客户端**（RFC [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) → [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)）：Phase 1 已实现且配置默认关闭，属渐进式落地，预计随近期版本合并。
- **Chat Completions profile**（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）：16 条评论、社区热度第一，接入 OpenAI 生态的边际价值大，维护者 review 后大概率进入实现队列。
- **统一会话/附件/持久化边界**（[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) / [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) / [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)）：ownership boundary 已在 Rev 2 获批，是架构收敛的前置条件，可能以批量 PR 形式推进。

**已接受但迟迟未实现：**
- **cron 前置条件门**（[#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)，4 月 10 日提出，status:accepted）：轻量 pre-hook（exit 0/10/其他）设计，117 天无对应 PR，建议提升优先级。
- **Webhook 分发集中化**（[#8586](https://github.com/zeroclaw-labs/zeroclaw/issues/8586)，status:accepted）：与 P0 Bug #9565 的安全修复直接联动。

**长期讨论中的设计提案：**
- Goal mode v1（[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)，15 评论）
- 插件权限/配置/secrets 模型（[#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)）、WASM 插件生命周期 hooks（[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)）
- 插件自有 Kanban 板（[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)）、ZeroCode 迁移中保留 Todo tracker 配置（[#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)）
- 统一 slash-command 注册表（[#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)）、无重启热应用配置（[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)）
- 工作区内部 `.zeroclawignore`（[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)）、精细化沙箱策略（[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)）、安全决策管线（[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)）
- 平台化 Web UI：Rust→Wasm 替换 React/Vite（[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)，p3，获 1 👍）

**路线图信号判断**：**互操作层（A2A + OpenAI 协议兼容）与安全架构（认证 #7141、插件权限 #8398、沙箱 #6996）** 是下一阶段的两条主线；MoA（#8568）已关闭，短期大概率不会以 RFC 形态重启。

## 6. 用户反馈摘要

- **安全审计者的不信任感**：JordanTheJet 与 metalmon 通过源码审计报告了 3 个 S0 级缺陷，措辞直接（"attacker-controllable messages"、"S0 - data loss / security risk"），反映核心贡献者对当前安全模型的门槛预期较高。正面信号是这些报告均在 24–48 小时内被官方确认。
- **"协议标准化而非平台锁定"的强烈诉求**：发起人 REL-mame 在 #8603 中列出 Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK 等一串希望接入的生态客户端——这是本次数据中社区共鸣最强的需求（16 条评论）。
- **多模型真实使用痛点**：用户在 DeepSeek、Qwen、Anthropic 模型上均遇到工具调用格式问题，其中 DeepSeek 的 DSML 信封被当作原始文本展示给用户（[#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723)），不仅是兼容性缺陷，更直接劣化对话体验。
- **自托管长稳运行痛点**：cron 悬挂致锁不释放（#9320）、`config/set` 失败致配置污染（#9281）、JSONL 迁移重试不安全（#9715）、上下文耗尽时 agent 无提示地"装死"（#9504）——这些是生产环境长稳运行才会踩到的坑，说明 0.x 阶段的生产就绪度仍在爬坡。
- **对 RFC 范围控制的认可**：#7155 Rev 3 按 @Audacity88 的 scope review 将规范范围收窄回 shell-policy 契约本身，社区形成了"避免架构膨胀"的共识性工作方式，这对项目长期可维护性是正面信号。

## 7. 待处理积压

**长期未合并的 PR：**
- [PR #6622 WhatsApp LID allowlist 测试覆盖](https://github.com/zeroclaw-labs/zeroclaw/pull/6622)（P1，84 天）：维护者已刷新分支并保留 fail-closed 用例，仍滞留队列；与 P0 级 #9565 同属 WhatsApp 通道安全范畴，建议优先合并。
- 其余 47 条待合并 PR 多为 7 月下旬创建，尚在合理 review 窗口；但 [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)（A2A Phase 1）、[PR #9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224)（eval 体系）等 XL 级 PR 已超 10 天，需要维护者排期确认。

**等待作者响应（needs-author-action）的 RFC——作者侧积压：**
- [#6653 模拟安装的宿主架构策略](https://github.com/zeroclaw-labs/zeroclaw/issues/6653)（p3，83 天）
- [#6850 内存生命周期与存储解耦](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)（p2，75 天）
- [#6971 安全 UX 与凭据边界](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)（p2，70 天）
- [#6996 精细化沙箱策略](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)（p2，69 天）
- [#7822 WASM 插件生命周期 hooks](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)（p2，49 天）
- [#7897 无重启热应用配置](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)（p3，49 天）
- [#7929 统一 slash 命令注册](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)（p2，48 天）
- [#8398 插件权限模型](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)（p2，39 天）
- [#8424 `.zeroclawignore` / 工作区内 forbidden paths](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)（p2，38 天）

**等待维护者决策（needs-maintainer-review）的高优先级项：**
- [#8603 Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（p2，16 评论，社区最热）
- [#8303 Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)（p2，15 评论）
- [#7155 shell 命令策略](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)（p1，14 评论）
- [#7141 可插拔入站认证](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)（p1，10 评论）
- [#7100 每模型能力与上下文窗口配置](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)（p1）
- [#9487 / #9488 会话与附件架构](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)（p2，各 10+ / 13 条评论）

**维护者提醒**：维护者决策队列 tracker（[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)，9 条评论）本身就是为缓解上述积压而设，但目前该 tracker 也在等待决策。建议优先处理 3 个 P1 级 review（#7155、#7141、#7100）与 3 个 S0 级安全 Bug（#9565、#9647、#9646）的修复排期——前者决定社区最关心的功能方向，后者直接关系自托管用户的数据安全。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*