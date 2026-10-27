# OpenClaw 生态日报 2026-07-21

> Issues: 355 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-21 03:22 UTC

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

# OpenClaw 项目日报 2026-07-21

## 1. 今日速览

过去 24 小时内，OpenClaw 项目保持极高活跃度：共处理 355 条 Issue 更新（新开/活跃 226 条，关闭 129 条）和 500 条 PR 更新（待合并 375 条，已合并/关闭 125 条）。大量回归与可靠性 Bug 被集中报告，同时社区对内存安全、多通道信令抖动和权限模型的讨论持续升温。无新版本发布。

## 2. 版本发布

（无）

## 3. 项目进展

今日共合并/关闭 **125 条 PR**，以下为主要推进方向（展示评论数最多的前 30 条 PR 中已关闭的）：

- **[PR #106635] fix(clickclack): redact REST error details**  
  修复 ClickClack REST 失败时可能泄露凭证的问题，现已合并。  
  [链接](https://github.com/openclaw/openclaw/pull/106635)

- **[PR #111977] feat(dashboard): widget presentation contract, shared frame inset, and intrinsic auto height**  
  统一仪表盘 widget 的布局合约，解决聊天与面板宽度/高度不一致问题，已关闭（可能已合并）。  
  [链接](https://github.com/openclaw/openclaw/pull/111977)

此外，以下重要 PR 仍在等待合并或审查中（状态为 OPEN）：
- **[PR #112035](https://github.com/openclaw/openclaw/pull/112035)**：统一新线程文件夹与位置选择器，解决交互陷阱。
- **[PR #112037](https://github.com/openclaw/openclaw/pull/112037)**：Media picker 请求权限并保持宽度稳定。
- **[PR #111545](https://github.com/openclaw/openclaw/pull/111545)**：多语言本地化基础系列第 5 个 PR，覆盖 Telegram、WebUI、CLI 等。
- **[PR #109305](https://github.com/openclaw/openclaw/pull/109305)**：支持搜索和关注已签名的发布者 feeds，扩展插件分发能力。

## 4. 社区热点

当日讨论最活跃的 Issue 集中在**会话状态丢失**和**压缩循环**问题：

- **[#99241] Tool outputs sometimes render as image attachments (23 评论)**  
  长运行 / ANSI 工具输出被压缩为图片附件，导致 agent 无法读取 stdout/stderr。用户 `aaajiao` 报告此问题严重影响调试。  
  [链接](https://github.com/openclaw/openclaw/issues/99241)

- **[#88312] Regression: Codex app-server turn-completion stall (22 评论)**  
  `2026.5.27` 引入的回归，多工具 turn 频繁失败，已在 `#85107` 修复但仍复发，社区高度关注。  
  [链接](https://github.com/openclaw/openclaw/issues/88312)

- **[#7707] Feature Request: Memory Trust Tagging by Source (20 评论)**  
  提议按来源（用户命令、网页抓取、第三方 skill）标记记忆信任等级，防止记忆投毒。20 条评论反映了社区对安全性的强烈需求。  
  [链接](https://github.com/openclaw/openclaw/issues/7707)

- **[#87744] Codex-backed Telegram turns repeatedly time out (17 评论)**  
  升级到 `2026.5.27` 后 Telegram 会话频繁超时，影响广泛。  
  [链接](https://github.com/openclaw/openclaw/issues/87744)

## 5. Bug 与稳定性

当日报告的 Bug 数量多、优先级高，多标记为 P1 且影响 session-state 或 message-loss。以下按严重程度排列：

| 严重程度 | Issue | 描述 | 是否有 fix PR |
|---------|-------|------|-------------|
| 🔴 回归/P1 | [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex 应用服务器 turn-completion stall，2026.5.27 回归 | 已有 #85107 但复发 |
| 🔴 P1 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Telegram 会话反复超时 | 暂无明确 fix PR |
| 🔴 P1 | [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex 路径导致高延迟/钩子超时/启动中止 | 暂无 |
| 🔴 P1 | [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息只追加不触发回复 | 暂无 |
| 🟡 P1 | [#99241](https://github.com/openclaw/openclaw/issues/99241) | 工具输出渲染为图片不可读 | 暂无 |
| 🟡 P1 | [#78562](https://github.com/openclaw/openclaw/issues/78562) | 工具循环上下文溢出导致反复自动压缩 | 暂无 |
| 🟠 P1 | [#64810](https://github.com/openclaw/openclaw/issues/64810) | 心跳/异步事件吞掉进行中的回复 | 暂无 |
| 🟠 P2 | [#63216](https://github.com/openclaw/openclaw/issues/63216) | 同一会话键重复硬重置，即使 reserveTokensFloor 高 | 暂无 |
| 🟢 P2 | [#59662](https://github.com/openclaw/openclaw/issues/59662) | Anthropic Max 使用量警报作为助手消息发送到频道 | 已有 [#60381](https://github.com/openclaw/openclaw/issues/60381) 部分修复 |

另外，今日关闭的 Issue 中包括 **#108238**（中文用户报告 2026.7.1 中 cacheRead 误算入 totalTokens 导致误报上下文超限），该问题已修复。

## 6. 功能请求与路线图信号

社区提出的新功能需求主要集中在**安全性与权限模型**、**会话可靠性**和**跨后端兼容**方面：

| Feature Request | 核心诉求 | 相关 PR / 路线图信号 |
|----------------|----------|-------------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 防止记忆投毒攻击 | 暂无关联 PR |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | agent 使用 API key 但不可见 | 暂无 |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) Skill Permission Manifest (skill.yaml) | 技能权限声明标准 | 可能纳入下一版本 |
| [#80752](https://github.com/openclaw/openclaw/issues/80752) optional model override in CommitmentsConfig | 类似 active-memory 的模型覆盖 | 已有前例 [#75347](https://github.com/openclaw/openclaw/pull/75347) |
| [#84527](https://github.com/openclaw/openclaw/issues/84527) Add Antigravity CLI as backend | 替代已过时的 google-gemini-cli | 高赞（11👍），紧迫性高 |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) session:end internal hook event | 用于工作流编排 | 已有 linked PR |

值得注意的是，**#84527** 获得 11 个👍，且 Google 已宣布 Gemini CLI 将于 2026.6.18 停止服务，OpenClaw 需尽快适配 Antigravity CLI。

## 7. 用户反馈摘要

从高评论 Issue 中提炼的真实用户痛点：

- **会话可靠性的集体焦虑**：多个用户报告升级到 `2026.5.27` 后出现 turn-completion stall、Telegram 超时、iOS 消息无回复等问题，且回退到 `2026.5.26` 即可正常工作。这表明该版本引入的修改存在破坏性回归。
- **工具输出的“黑洞”**：用户 `aaajiao` 描述长 ANSI 输出被折叠成图片占位符后 agent 无法读取，等于工具白跑。
- **自动压缩的恶性循环**：用户 `EthanSK` 指出压缩成功后下一轮又立即溢出，导致用户看到反复“compacting context”而得不到最终回答。
- **多通道信令冲突**：`jackiedepp` 报告 Telegram 论坛话题中，心跳事件可以打断正在进行的用户回复并“吞掉”答案，严重影响对话一致性。
- **安全需求的呼声**：`LumenLantern` 和 `jmkritt` 分别要求记忆来源标记和密钥掩码，反映出用户对 prompt 注入和凭证泄露风险的担忧。

## 8. 待处理积压

以下 Issue/PR 长期未获得维护者响应，但影响面广，建议优先关注：

| 编号 | 类型 | 描述 | 创建时间 | 更新时间 | 备注 |
|------|------|------|---------|---------|------|
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | Bug P2 | Agent 承诺后续跟进但未启动任何操作 | 2026-03-31 | 2026-07-20 | stale，16 评论 |
| [#58514](https://github.com/openclaw/openclaw/issues/58514) | Bug P1 | Google Chat 空间消息被静默忽略 | 2026-03-31 | 2026-07-20 | stale，8 评论，有 linked PR |
| [#58775](https://github.com/openclaw/openclaw/issues/58775) | Bug P2 | google-vertex provider 被错误当作 google AI 别名 | 2026-04-01 | 2026-07-20 | stale，6 评论，有 linked PR |
| [#56733](https://github.com/openclaw/openclaw/issues/56733) | Bug P1 | Gateway 进程存活但事件循环冻结 | 2026-03-29 | 2026-07-20 | stale，6 评论 |
| [#58523](https://github.com/openclaw/openclaw/issues/58523) | Bug P2 | Slack 多工作区入站 DM 不达 OpenClaw | 2026-03-31 | 2026-07-20 | stale，7 评论 |
| [#8724](https://github.com/openclaw/openclaw/issues/8724) | Enhancement P2 | 每模型生成超时配置（Google 模型无限思考循环） | 2026-02-04 | 2026-07-20 | stale，5 评论 |
| [#71326](https://github.com/openclaw/openclaw/issues/71326) | Bug P1 | 跨 exec 调用文件读取陈旧（缓存竞争） | 2026-04-25 | 2026-07-20 | 已关闭，但回归性质值得回顾 |

**注**：今日没有新版本发布，但 PR 合并/关闭数量（125）为近期较高水平，表明维护者正在积极清理 backlog。然而大量 P1 Bug 仍未获得修复，社区等待下一补丁版本（如 `2026.7.2`）的释出。

---

## 横向生态对比

好的，作为一名专注于 AI 智能体与个人 AI 助手开源生态的资深技术分析师，以下是根据您提供的 2026-07-21 各项目动态数据生成的横向对比分析报告。

---

## 2026-07-21 个人 AI 助手开源生态横向对比分析报告

### 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于 **功能密集迭代与稳定性焦虑并存** 的阶段。**OpenClaw、Hermes Agent、ZeroClaw、IronClaw** 等头部项目在核心架构（持久化记忆、工具调用、SOP）上激进推进，但接踵而至的严重回归问题（尤其是会话状态丢失、推理循环、平台阻塞）凸显了快速迭代带来的质量风险。与此同时，**NanoBot、NanoClaw、PicoClaw** 等一批中坚项目在安全加固、多通道集成和边缘场景上取得扎实进展，社区开始关注 **Token 成本优化、跨平台一致性、权限信任模型** 等更具纵深性的议题。整体来看，生态正从“能跑”向“跑得可靠、跑得便宜、跑得安全”转变。

### 2. 各项目活跃度对比

| 项目 | 今日 Issues（新建/活跃） | 今日 PR（新建/活跃） | 今日 PR 合并/关闭 | 版本发布 | 健康度评估 |
|------|------------------------|---------------------|-------------------|----------|------------|
| **OpenClaw** | 226 | 500 | 125 | 无 | 🔴 **极高活跃**，大量 P1 回归待修复，存在社区焦虑 |
| **NanoBot** | 6 | 29 | 12 | 无 | 🟢 **高活跃，稳定**，Bug 响应快，积压少 |
| **Hermes Agent** | 50 | 50 | 4 | v0.19.0 (昨日) | 🟡 **极高活跃但混乱**，新版本引发严重打包事故和回归 |
| **PicoClaw** | 10 | 10 | 6 | 无 | 🟢 **较高活跃，稳定**，多语言/音频推进中 |
| **NanoClaw** | 6 | 20 | 6 | 无 | 🟢 **高活跃，快速安全响应**，所有Bug当日附修复PR |
| **NullClaw** | 0 | 0 | 0 | 无 | ⚪ **停滞**，唯一PR等待1个月未合并 |
| **IronClaw** | 40 | 41 | 27 | 无 | 🔴 **极高活跃**，核心重构收尾，UI/UX Bug集中爆发 |
| **LobsterAI** | 0 | 15 | 11 | 无 | 🟢 **稳定迭代**，依赖升级积压4个月需关注 |
| **TinyClaw** | 0 | 0 | 0 | 无 | ⚪ **无活动** |
| **Moltis** | 0 | 0 | 0 | 无 | ⚪ **无活动** |
| **CoPaw** | 16 | 41 | 10 | 无 | 🟡 **高活跃**，PR审查积压，推理复制Bug广泛 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ **无活动** |
| **ZeroClaw** | 大量（未精确计数，≥20） | 50 | 12 | 无 | 🔴 **极高活跃**，S0/S1 严重Bug密集，积压严重 |

*注：健康度评估综合考虑活动量、Bug 严重程度、社区反馈质量与维护响应速度。*

### 3. OpenClaw 在生态中的定位

- **优势**：社区规模与代码库成熟度遥遥领先（日均355条Issue、500条PR），功能覆盖面最广（多通道、仪表盘、记忆系统、本地化等），是其他项目（如NanoBot、PicoClaw）的重要参照系。
- **技术路线差异**：OpenClaw 强调平台化与插件化（Skill Manifest、Feeds订阅），与 Hermes Agent 的“快速迭代、社区驱动”风格不同；与 ZeroClaw 的“SOP + 持久化记忆”架构相比，OpenClaw 的记忆系统更倚重 Active Memory 与隐式上下文的折中方案。
- **核心短板**：近期 **2026.5.27 版本引入的回归严重**（turn-completion stall、Telegram 超时、会话状态丢失），社区出现“回退到 5.26 即可正常工作”的呼声。相比之下，NanoBot 和 NanoClaw 在安全与稳定性的快速响应上更胜一筹。OpenClaw 当前处于 **“功能领先，稳定性追赶”** 的尴尬期。

### 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---------|---------|---------|
| **安全性 / 权限/凭证保护** | OpenClaw, NanoBot, NanoClaw, ZeroClaw | REST 凭证泄露、记忆投毒、角色授予静默提权、API 密钥明文存储、沙箱自锁 |
| **会话可靠性 / 状态一致性** | OpenClaw, NanoBot, Hermes, IronClaw, CoPaw | turn-completion stall、工具输出黑洞、心跳事件吞掉回复、流式状态误报失败、子代理无限轮询 |
| **Token 成本优化** | Hermes, OpenClaw, NanoBot, CoPaw | 工具Schema预选以降低API调用开销、模型缓存断点、可禁用内置工具描述 |
| **跨平台兼容性** | ZeroClaw, PicoClaw, NullClaw | Windows 测试失败、Android服务不可用、AppImage 检测失效、Matrix无重连 |
| **多通道一致性** | OpenClaw, Hermes, NanoBot, ZeroClaw | CLI/Telegram/桌面会话上下文共享、网关路由错误、多平台消息被吞 |
| **工具调用逻辑改进** | CoPaw, OpenClaw, IronClaw | 多工具调用共享推理文本、工具循环压缩、JSON解析健壮性 |

### 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|----------------|
| **OpenClaw** | 全功能平台（仪表盘、多通道、插件生态） | 开发者/企业团队 | 高度模块化，Active Memory + 隐式上下文，REST/SSE网关 |
| **Hermes Agent** | 高性能、社区驱动、快速迭代 | 技术爱好者/早期采用者 | 激进发布节奏，MCP扩展集成，强调人与AI协作 |
| **ZeroClaw** | SOP 流程引擎、持久化记忆、沙箱安全 | 流程自动化/安全敏感用户 | SOP 里程碑架构，Landlock沙箱，Qdrant/SQLite记忆后端 |
| **IronClaw** | 后端架构重构、Reborn 转向 | 开发者/维护者 | 废弃 v1 代码，转向单一 Rust 内核，强调可维护性 |
| **NanoBot** | 多通道适配、低门槛部署 | 个人用户/轻运维团队 | 一键部署到 Render，Ollama/cache优化，子代理系统 |
| **NanoClaw** | 安全权限、渠道扩展（LINE/Dial） | 安全需求强烈的中大型团队 | 角色授予审批流，附件处理管线，CalDAV/whisper |
| **PicoClaw** | 轻量边缘、国际化、本地模型 | 嵌入式/非英语用户 | TTS（DashScope），日语本地化，ModelScope适配 |
| **LobsterAI** | 协作（Cowork）、AI皮肤、Windows体验 | 桌面用户/文创团队 | Electron应用，静默更新，HTML注释协作 |
| **CoPaw** | 浏览器控制、子代理编排、模型多样 | 浏览器自动化/多模型用户 | 统一浏览器 SDK，PawApp 插件化，支持多后端 |

### 6. 社区热度与成熟度分层

- **第一梯队（极高活跃，快速迭代，但质量波动）**  
  **OpenClaw、Hermes Agent、ZeroClaw、IronClaw** — 日均 PR/Issue 数量大，新功能与回归同步爆发，社区参与度极高，但亟需稳定化补丁。

- **第二梯队（高活跃，稳定推进）**  
  **NanoBot、NanoClaw、PicoClaw、LobsterAI、CoPaw** — 合并率高，Bug 响应快，功能迭代有序，无重大阻塞性回归，项目健康度佳。

- **第三梯队（低活跃或停滞）**  
  **NullClaw、TinyClaw、Moltis、ZeptoClaw** — 24小时内无任何贡献或Issue/PR更新，可能处于维护间歇期或用户群体极小。

### 7. 值得关注的趋势信号

1. **“花钱”焦虑催生 Token 优化刚需**  
   Hermes (#13332) 和 CoPaw (#6286) 均提出预选工具 Schema 以降低每次 API 调用成本，OpenClaw 社区也讨论模型缓存断点。**对推理成本的敏感性将从个人用户扩展到企业部署，成为功能差异化的重要点。**

2. **安全性从“附加属性”升格为“核心架构”**  
   NanoClaw 的权限审批链、ZeroClaw 的 Landlock 沙箱 + 内容扫描、OpenClaw 的记忆信任标记需求 — 安全不再是后补特性，而是与记忆、工具调用、通道集成深度绑定。**新的项目可能以“可证明的安全”作为核心卖点。**

3. **跨平台一致性是用户留存的关键**  
   多个项目报告 Windows/Android/AppImage 故障，以及 CLI、Telegram、桌面间会话割裂。用户期望“一个代理，处处连续”。**未来项目的竞争力将取决于对最少主流平台的全面覆盖与一致的上下文体验。**

4. **回归测试与 CI 质量门禁成为开发瓶颈**  
   ZeroClaw 的 `comment_hygiene_gate`、OpenClaw 的版本回退潮、Hermes 的 sdist 打包事故 — 快速迭代下，**测试覆盖不足和门禁僵化正在拖慢合并速度，甚至引发生产事故。** 这一趋势将推动项目引入更智能的回归检测和差异化测试矩阵（尤其是跨平台）。

5. **插件生态走向标准化**  
   Hermes 的 `hermes plugins search`、OpenClaw 的 Skill Manifest、NanoClaw 的 CalDAV 预置 — 社区级插件索引和声明式权限清单正在成为基础设施。**谁能率先建立高质量的社区插件市场，谁就能在生态粘性上领先。**

---

*报告结束。数据基于 2026-07-21 各项目 GitHub 仓库公开动态。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，这是根据您提供的 NanoBot 项目 GitHub 数据生成的 2026-07-21 项目动态日报。

---

## NanoBot 项目动态日报 | 2026-07-21

### 今日速览
过去24小时，NanoBot 项目保持了极高的开发活跃度，共有29条 PR 更新和6条 Issue 更新。项目重点集中在修复回归问题、增强系统稳定性以及推进多智能体协作等新功能的探索。社区在缓存优化、安全配置和多通道兼容性方面提出了具体诉求，并以高质量的 PR 形式贡献了解决方案。总体而言，项目处于快速迭代期，代码库健康度良好。

### 项目进展
今日有12个 PR 被成功合并或关闭，项目在以下几方面取得了关键进展：

- **核心架构与稳定性**：
    - [#5004 [CLOSED] fix(session): tolerate unsupported directory fsync](https://github.com/HKUDS/nanobot/pull/5004): 解决了在某些共享文件系统上因 `fsync` 操作失败导致会话状态异常的问题，提升了与NAS等异构存储的兼容性。
    - [#4993 [CLOSED] refactor(agent): unify internal turn lifecycle](https://github.com/HKUDS/nanobot/pull/4993): 合并了重要的重构PR，统一了内部消息（如子代理结果）和外部消息的处理流程，消除了代码重复，为后续开发奠定了更稳固的基础。
    - [#5008 [CLOSED] fix(providers): keep all images when merging consecutive multimodal …](https://github.com/HKUDS/nanobot/pull/5008): 修复了合并连续多模态用户消息时，由于角色交替规则导致图片丢失的bug，确保了图像信息流的完整性。

- **通道与部署**:
    - [#4937 [CLOSED] feat: add one-click deploy to render support](https://github.com/HKUDS/nanobot/pull/4937): 增加了对 Render 云平台的一键部署支持，降低了用户的自托管门槛。
    - [#4768 [CLOSED] fix(qq): add exponential backoff to WebSocket reconnect loop](https://github.com/HKUDS/nanobot/pull/4768): 修复了 QQ 频道在断网情况下产生大量日志的问题，引入了指数退避策略，提升了网络容错能力。

### 社区热点
今日社区讨论的焦点集中在两个核心诉求上：**性能优化**与**安全配置**。

- **性能与缓存** ([#4867 [CLOSED]](https://github.com/HKUDS/nanobot/issues/4867)): 该Issue获得了15条评论，是今日最活跃的话题。用户 `The-Markitecht` 报告 NanoBot 在使用 Ollama 时，每次交互都会导致60秒的额外延迟，使得本地模型“完全无法使用”。这背后是对 **Ollama 提示词缓存**功能的迫切需求。社区成员和开发者讨论了保留精确提示词前缀以启用缓存的方案。值得注意的是，今日已合并的相关文档 PR [#4998](https://github.com/HKUDS/nanobot/pull/4998) 表明，开发团队已迅速响应并提供了缓存诊断指南。
- **安全与密钥管理** ([#4803 [OPEN]](https://github.com/HKUDS/nanobot/issues/4803)): 该 Issue 指出 API 密钥以明文形式存储在配置文件中的安全隐患。虽然 `api_key` 字段设置了 `repr=False`，但依然会随着 `model_dump()` 被序列化。此外，今日新开的 PR [#5010](https://github.com/HKUDS/nanobot/pull/5010) 专门为此问题更新了安全文档，推荐使用环境变量引用而非明文存储，这表明开发团队对安全问题高度重视并快速响应。
- **多智能体协作** ([#5000 [OPEN]](https://github.com/HKUDS/nanobot/issues/5000)): 用户 `bingqilinweimaotai` 提出的“将子代理系统演变为多智能体协作系统”的建议，刚好是项目的第5000个Issue，颇具里程碑意义。该提案详细论述了当前系统作为后台任务代理的局限性，并描绘了具有持久身份和共享状态的下一代多智能体协作蓝图，引发了社区的关注和讨论。

### Bug 与稳定性
今日共处理6条Bug相关Issue，修复了多个回归问题。

| 严重程度 | Issue / PR | 状态 | 描述 | 修复状态 |
| :--- | :--- | :--- | :--- | :--- |
| 高 | [#4864 [OPEN]](https://github.com/HKUDS/nanobot/issues/4864) | 分析中 | `complete_goal` 工具调用进入死循环。用户指出可能是由于近期更新中工具参数序列化方式的改变，导致网关错误地将JSON对象解析为纯字符串。 | 无关联修复PR |
| 高 | [#4954 [OPEN]](https://github.com/HKUDS/nanobot/pull/4954) | 待合并 | WebUI 中有时无法显示子代理的最终输出（回归问题）。 | 已有修复PR [#4954](https://github.com/HKUDS/nanobot/pull/4954) |
| 高 | [#4988 [OPEN]](https://github.com/HKUDS/nanobot/pull/4988) | 待合并 | 后台任务（cron/本地触发器）在没有生成文本时，会错误地推送“无法产生最终答案”的提示信息。 | 已有修复PR [#4988](https://github.com/HKUDS/nanobot/pull/4988) |
| 中 | [#4767 [CLOSED]](https://github.com/HKUDS/nanobot/issues/4767) | 已修复 | QQ频道因网络问题（DNS故障）导致WebSocket重连循环，产生大量错误日志。 | 已合并修复PR [#4768](https://github.com/HKUDS/nanobot/pull/4768) |
| 中 | [#4982 [CLOSED]](https://github.com/HKUDS/nanobot/pull/4982) | 已修复 | 飞书通道在 `limit <= 0` 时，文本分割函数会陷入死循环。 | 已合并修复PR [#4982](https://github.com/HKUDS/nanobot/pull/4982) |
| 中 | [#4981 [CLOSED]](https://github.com/HKUDS/nanobot/pull/4981) | 已修复 | Telegram 通道在 `max_len <= 0` 时，Markdown分割函数会陷入死循环。 | 已合并修复PR [#4981](https://github.com/HKUDS/nanobot/pull/4981) |

### 功能请求与路线图信号
- **一键部署模板**：用户表达了降低部署门槛的强烈愿望。从 [#1503 (Dokploy)](https://github.com/HKUDS/nanobot/issues/1503) 的长期请求到今日新开的 PR [#5007](https://github.com/HKUDS/nanobot/pull/5007) 和刚合并的 [#4937 (Render)](https://github.com/HKUDS/nanobot/pull/4937) 来看，**支持更多平台的一键部署是近期重点方向**。
- **多智能体协作**：提案 [#5000](https://github.com/HKUDS/nanobot/issues/5000) 被标记为 `enhancement`，且获得了积极讨论。尽管目前尚无对应的PR，但这个里程碑式的Issue很可能会被纳入下一版本的路线图规划。
- **可配置工具网关**：PR [#5006 [OPEN]](https://github.com/HKUDS/nanobot/pull/5006) 提出了“守卫工具网关”（Guarded Tool Gateway）的概念，允许通道插件声明是否需要工具调用能力，并为子代理执行工具提供了一个更安全、上下文更一致的沙箱环境。这代表了安全架构和模块化设计的一个新方向。

### 用户反馈摘要
- **Ollama 用户痛点**：用户 `The-Markitecht` 指出了 NanoBot 在配合本地Ollama模型时的性能瓶颈，称其“完全无法使用”，并强调这是由提示词缓存失效导致的。这反映了本地模型用户对极致性能和低延迟的强烈需求。
- **部署便利性诉求**：用户 `xenstar` 在活跃近半年的 Issue [#1503](https://github.com/HKUDS/nanobot/issues/1503) 中再次表达了对Dokploy平台模板的期待，并愿意提供测试环境，表明社区中非技术用户对于“开箱即用”体验的渴望。
- **安全实践反馈**：用户 `hamb1y` 通过 Issue [#4803](https://github.com/HKUDS/nanobot/issues/4803) 指出了安全配置的隐患，这是一个专业且具有前瞻性的反馈，有效地推动了项目安全文档的完善。

### 待处理积压
- 🚨 **重要安全配置**：Issue [#4803](https://github.com/HKUDS/nanobot/issues/4803) (Security: API keys stored as plaintext) 自 7月6日开启以来，虽有文档PR [#5010](https://github.com/HKUDS/nanobot/pull/5010) 进行缓解，但核心的序列化问题（`model_dump()`）尚未从代码层面修复，其安全影响值得持续关注。
- ⏳ **长期待合并PR**：PR [#4954](https://github.com/HKUDS/nanobot/pull/4954) (fix(webui): keep late subagent turns visible) 和 PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) (fix(heartbeat): route unified sessions to last channel) 均被标记为 `conflict` (存在冲突) 且处于开放状态超过一周。这两项PR分别影响WebUI体验和心跳机制，建议尽快协调解决合并。
- 🚧 **长期功能请求**：Issue [#1503](https://github.com/HKUDS/nanobot/issues/1503) (Template for Dokploy) 已存在超过4个月，虽然今日有新的相关PR [#5007](https://github.com/HKUDS/nanobot/pull/5007) 提交，但该Issue本身仍处于开放状态，对等待的用户来说依然是一项待兑现的承诺。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，根据您提供的 Hermes Agent 项目数据，我为您生成了 2026-07-21 的项目动态日报。

---

### Hermes Agent 项目日报 - 2026年7月21日

---

#### 1. 今日速览

Hermes Agent 项目今日（2026-07-21）社区活动异常活跃，24小时内共产生50条Issue和50条PR，这在新版本发布后是典型的“峰后效应”。v0.19.0 “The Quicksilver Release”的发布引发了大量用户升级、反馈和问题报告，但同时也暴露了若干回归和兼容性问题。尽管社区贡献热情高涨（新开43条Issue、46条PR待合并），但项目维护者面临着巨大的审核与合并压力，积压风险显著升高。项目整体处于一个快速迭代与混乱共存的“成长痛”阶段。

#### 2. 版本发布

**v2026.7.20: Hermes Agent v0.19.0 (The Quicksilver Release)**
- **发布说明**：这是自v0.18.0以来的一次重大更新，包含了约2,245次提交、1,065个已合并PR，并关闭了约3,300个Issue。社区贡献者超过450人。
- **关键更新内容**：
    - 经过大规模重构和功能增强。
    - 发行说明的标题 `"Hermes is the mess"` 暗示了本次版本可能具有一些不稳定特性，旨在快速推进新功能。
- **破坏性变更与迁移注意事项**：
    - **高风险信号**：`#68311` 报告了一个严重的打包问题，自v0.13.0起的所有sdist包中，都包含了危险的测试文件，该测试文件会执行 `os.kill(-1, SIGTERM)` 并可能杀死用户会话。这属于严重的安全和打包事故，用户在使用任何版本的sdist安装时都需警惕。
    - **兼容性警告**：`#68000` 指出新版本中 `hermes doctor` 报告部分已被运行时使用的新配置键（如 `provider_routing`）为“未知”，表明文档和配置验证存在滞后。
    - **依赖冲突**：`#68338` 报告了 `cryptography` 库的版本冲突（v0.19.0要求 46.0.7，但用户环境可能安装了 49.0.0），提示用户升级或降级。
    - **建议**：任何从v0.18.x升级的用户，务必先检查 `hermes doctor` 的输出，并注意 `cryptography` 等核心依赖的版本锁定。生产环境建议暂缓升级，等待Bug修复版本。

#### 3. 项目进展

今日共有4个PR被合并/关闭，以及一些关键修复PR进入待合并状态，显示了项目在不同方面的进展：

- **安全修复**：
    - `#38017` [CLOSED]：修复了MCP（Model Context Protocol）依赖安装过程中的关键安全漏洞。
    - `#68301` [CLOSED]：社区提出的跨桌面与Telegram的会话桥接需求，虽被标记为重复，但其讨论为`#4335`提供了有价值的用户场景输入。

- **关键Bug修复（PR开放中）**：
    - `#65217` `fix(computer_use): ...`：针对电脑使用工具中JSON解析的健壮性修复，防止因模型输出异常导致崩溃。
    - `#68252` `fix(cli): preserve worktree quarantine on Windows`：修复了Windows平台上的git工作树隔离问题，对Windows用户稳定性至关重要。

- **功能推进（PR开放中）**：
    - `#68356` `feat(desktop): add named gateway connections`：允许用户在桌面端管理多个远程网关连接，增强了桌面应用的灵活性。
    - `#68357` `feat(tui): show the plan catalog in /subscription on Free`：改进了免费用户的UI体验，直接展示订阅方案。

项目整体上仍在持续推进安全加固、平台兼容性和用户界面改进。

#### 4. 社区热点

今日讨论最热烈、社区关注度最高的议题主要集中在**性能优化**和**跨平台体验**上。

- **#13332 [Feature: Hybrid Tool Pre-Selection]**: (8条评论, 4👍)
    - **链接**: [NousResearch/hermes-agent Issue #13332](https://github.com/NousResearch/hermes-agent/issues/13332)
    - **诉求分析**：该Issue提议采用RAG（检索增强生成）风格的语义+关键词混合模型来预选工具，以解决每次API调用都注入所有工具Schema导致的巨大Token开销（实测约14k Token）。这反映了用户对**降低推理成本**的核心诉求，是不增加额外LLM往返的优雅解决方案。该议题长期讨论热度不减，表明它是社区普遍存在的痛点。

- **#4335 [Feature: Cross-platform session context sharing]**: (8条评论, 2👍)
    - **链接**: [NousResearch/hermes-agent Issue #4335](https://github.com/NousResearch/hermes-agent/issues/4335)
    - **诉求分析**：用户希望在CLI、Telegram等不同平台间共享会话上下文。这揭示了深度用户**追求无缝、统一AI助手体验**的强烈需求。用户不希望在切换平台时与Agent“失忆”，这是当前网关架构与用户预期之间的核心矛盾。

#### 5. Bug 与稳定性

今日报告的Bug数量较多，按严重程度排列如下：

- **严重 (Critical / P1)**:
    - **`#68311` [Open]**: **打包错误**。发布的sdist包包含会杀死用户会话的测试文件。这是最严重的打包事故之一，影响所有使用sdist安装的用户。
        - **状态**: 无修复PR，属于发布流程的根本性问题。
    - **`#68339` [Open]**: **回归问题**。混合批量执行工具后，使用特定模型的Agent初始行为发生偏移，可能影响对话质量。
        - **状态**: 无修复PR，为近期提交的回归。

- **高影响 (High / P2)**:
    - `#2788` [Open]：Cron任务不运行或无日志记录，影响自动化功能。
    - `#34372` [Open]：BlueBubbles网关Webhook订阅了重复事件，导致每条iMessage被处理两次。修复PR `#37787` 可能与之相关。
    - `#68261` [Open]：TUI技能凭据提示可能被路由到错误的会话，破坏多会话并发场景的体验。
    - `#68192` [Open]：在非Git仓库的Project中创建新聊天时，桌面客户端崩溃。
    - `#68342` [Open]：桌面端模型选择器的手动覆盖选项会静默偏离 `config.yaml` 的配置，无任何视觉提示。
    - `#54863` [Open]：MCP工具名称超过AWS Bedrock的64字符限制，导致云平台不可用。

- **一般 (Moderate / P3)**:
    - `#3944` [Open]：Slack集成安装失败。
    - `#68338` [Open]：`cryptography` 库依赖版本冲突。
    - `#66611` [Closed]：桌面端更新对话框的关闭按钮无响应。

**结论**：今日Bug报告以P2级别为主，涉及跨平台、自动化、桌面客户端和云平台兼容性等多个核心功能。最值得警惕的是P1级别的打包问题 `#68311`，应被维护者列为最高优先级。

#### 6. 功能请求与路线图信号

今日涌现的功能请求主要围绕**插件生态系统**和**平台特定能力**。

- **插件生态成为核心焦点**：
    - `#64900` 和 `#64231`（由核心开发者teknium1提出）：旨在规范插件声明周期和扩展发送消息的能力。这表明项目维护者正主动推动插件系统的标准化和扩展性。
    - `#64181` (由teknium1提出)：提议建立社区插件索引和 `hermes plugins search` 命令，是“生态系统”路线图的关键一步，有可能成为下个版本的核心功能。

- **针对性能力扩展**：
    - `#68352` [Open]: 建议在 `image_generate` 工具中支持自定义分辨率和FAL API的 `guidance_scale` 参数。来源为社区，需求明确且技术实现相对独立，有较大概率被纳入。

- **被标记为“需决策”的功能**：
    - `#66736` [Open]: 建议为低频MCP服务器提供“只注入描述”的模式，以节省Token。思路与 `#13332` 类似，都是优化token开销的不同路径，项目需要做出方向性选择。

#### 7. 用户反馈摘要

从今天的Issue评论中，可以提炼出用户的主要反馈：

- **对性能的焦虑**：多条Issue（`#13332`, `#66736`）及评论都直接指向工具Schema注入带来的巨大Token开销，说明用户对API成本和响应速度非常敏感。
- **对多平台“一致性”的渴望**：`#4335` 的讨论反映出用户希望将Hermes Agent视为一个统一的实体，而非分散在各平台的独立实例。`#68261` 提到的会话路由错误则加剧了这种割裂感。
- **对“无感”无缝体验的期待**：用户不希望在切换设备时进行复杂配置。`#68301`（虽已关闭）和 `#4335` 都体现了“从一个桌面无缝切换到Telegram继续聊天”的朴素期望。
- **对“安静失败”的挫败感**：`#2788`（Cron无日志）、`#68342`（桌面端设置静默偏离）、`#68000`（`doctor`工具误报）等Bug都揭示了系统“静默出错”的问题，这会让用户难以排查问题，降低信任感。

#### 8. 待处理积压

以下Issue和PR长期处于未响应或未解决状态，可能对项目健康度产生负面影响：

- **Issue**
    - `#2788` [Open, 2026-03-24]: **Cron作业不运行或无日志**。已存在近4个月，这是核心自动化功能的严重缺陷，持续影响依赖定时任务的所有用户。
    - `#4256` [Open, 2026-03-31]: **支持可配置的按键绑定**。有6个👍，社区呼声高，但长期未获解决。对于依赖TUI/CLI的重度用户影响极大。
    - `#2228` [Open, 2026-03-20]: **系统错误消息可能以用户角色出现**。存在4个月，这是一个让用户感到困惑的UX bug，修复成本较低，但优先级似乎不高。

- **Pull Request**
    - **维护者审核积压**：今天有46个PR等待审核，这是一个非常高的数量。例如 `#37787` (Feishu修复), `#37788` (文档改进) 等，它们虽然是来自社区的贡献，但已经开放了近50天。建议项目核心团队集中精力处理这批PR，以避免打击社区贡献者的积极性。
    - `#65217` `fix(computer_use)`：安全相关的健壮性修复，应优先审核合并。
    - `#65217` `perf(state): ...`系列PR：由贡献者 `Soju06` 提交的一系列性能优化PR（`#65544`, `#65541`, `#65329` 等），覆盖会话搜索、数据库并发等关键技术点，若被合并将大幅提升大规模使用场景下的体验，建议尽快评审。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 | 2026-07-21

## 1. 今日速览
过去24小时项目活跃度较高，共处理10条Issue和10条PR，其中4条新Issue、6条关闭，待合并PR有5条。社区围绕**Antigravity provider的回归问题**（#3274）和**Google OAuth策略阻止登录**（#3278）讨论激烈，两者均已关闭但暴露了外部依赖风险。功能层面，日语本地化（#3273）、DashScope TTS（#3270）、模型列表更新（#3271）等PR已提交，表明项目在**多语言支持**和**音频能力**上持续推进。当日无新版本发布。

---

## 3. 项目进展
### 已合并/关闭的重要PR
- **[#3277 fix(tools): deferred-tool visibility heal + sliding TTL + SSE tool-call index fix](https://github.com/sipeed/picoclaw/pull/3277)**  
  修复工具发现机制中进程重启或TTL过期导致MCP工具从请求中消失的问题，引入滑动TTL和SSE工具调用索引修复。**当日唯一直接关闭的功能性修复PR**。
- **[#3192 chore(docker): bump goreleaser base images](https://github.com/sipeed/picoclaw/pull/3192)**  
  将GoReleaser Docker基础镜像从Alpine 3.21升级到3.23，与主Dockerfile保持一致。
- **[#3191 chore: remove duplicate build/ entry in .gitignore](https://github.com/sipeed/picoclaw/pull/3191)**  
  清理配置文件冗余项。
- **[#276 docs: improve readme](https://github.com/sipeed/picoclaw/pull/276)** / **[#277 feat: update `make deps` logic](https://github.com/sipeed/picoclaw/pull/277)**  
  两则较早的PR（2月提交）于今日被关闭，优化了文档可读性并防止依赖版本频繁更新。

### 待合并的重要PR（有可能进入下一版本）
| PR 链接 | 功能/修复说明 |
| ------- | -------------- |
| [#3273 feat(webui): add Japanese (ja) localization](https://github.com/sipeed/picoclaw/pull/3273) | 完整日语翻译（968行），配套dayjs本地化 |
| [#3270 feat: add DashScope TTS provider and WeChat audio file sending](https://github.com/sipeed/picoclaw/pull/3270) | 新增阿里云DashScope文本转语音，支持通过WeChat发送音频 |
| [#3271 chore(providers): update default model names to 2026-07 latest](https://github.com/sipeed/picoclaw/pull/3271) | 刷新9个Provider的默认模型ID（如OpenAI → GPT-5.6系列） |
| [#3254 fix(agent): prefer verbatim model matches over provider-alias splits](https://github.com/sipeed/picoclaw/pull/3254) | 修复模型引用解析中因别名拆分导致错误匹配的bug |
| [#3251 fix(providers): capture the prompt cache token usage in Anthropic providers](https://github.com/sipeed/picoclaw/pull/3251) | 捕获Anthropic provider中被丢弃的缓存token指标，便于运维监控 |

---

## 4. 社区热点
今日讨论最集中的议题集中在 **Antigravity Provider的兼容性** 和 **Google OAuth策略变更**，反映出社区对第三方认证稳定性的高度敏感。

- **[#3274 [CLOSED] Antigravity Provider回归问题](https://github.com/sipeed/picoclaw/issues/3274)**  
  `main@85dcfcc` 上antigravity provider出现 `INVALID_ARGUMENT` 错误，v0.3.1正常，确定为回归。作者honbou提供完整复现环境，2条评论，已关闭但未附带修复PR。社区关注点：**为什么回归？是否有隐式依赖变更？**

- **[#3278 [CLOSED] Google OAuth登录被策略阻止](https://github.com/sipeed/picoclaw/issues/3278)**  
  用户honbou报告 `auth login --provider antigravity` 时Google拒绝登录，提示“不符合OAuth 2.0安全策略”。已关闭，推测需要更新OAuth应用配置或更换认证端点。**这是外部策略层面的阻碍，可能影响所有使用Antigravity Provider的用户**。

- **[#3203 [OPEN] Matrix同步无重连逻辑](https://github.com/sipeed/picoclaw/issues/3203)**  
  `/sync` 长轮询在网络断开后永久死亡，但进程存活，systemd无法自动重启。已有3条评论、1个赞，标记为`stale`但未关闭。社区呼吁增加自动重连，否则生产部署不可靠。

---

## 5. Bug 与稳定性
按严重程度排列（P0最严重）：

| 严重等级 | Issue | 摘要 | 状态 | 对应修复PR |
| ------- | ----- | ---- | ---- | ---------- |
| **P0** | [#3278](https://github.com/sipeed/picoclaw/issues/3278) | Google OAuth策略阻止登录，Antigravity Provider不可用 | CLOSED | 无，需平台侧更新 |
| **P1** | [#3274](https://github.com/sipeed/picoclaw/issues/3274) | Antigravity `INVALID_ARGUMENT` 回归（主分支，v0.3.1正常） | CLOSED | 无直接修复PR，但可能存在隐式修正 |
| **P2** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix同步无重连逻辑，网络中断后永久静默 | OPEN (stale) | 无 |
| **P3** | [#3275](https://github.com/sipeed/picoclaw/issues/3275) | Launcher WebUI配置重写后 `model_list` 条目丢失 `api_keys` 等字段 | CLOSED | 无，推测为配置合并bug |
| **P4** | [#3230](https://github.com/sipeed/picoclaw/issues/3230) | Gemini API via OpenAI compat格式调用时缺少 `thought_signature` | CLOSED (stale) | 无直接PR，可能通过更新模型版本解决 |
| **P4** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Android版本无法启动服务，路径无法修改 | OPEN | 无，需Android端维护 |

**注意**：当日无与这些Bug直接关联的修复PR被合并，仅#3277修复了工具可见性相关bug，不影响上述问题。

---

## 6. 功能请求与路线图信号
社区当日提出了3项新功能需求，其中2项已有对应PR实现，显示出较高的采纳可能性：

1. **[#3276 [OPEN] Launcher: 支持外部管理的gateway（systemd）](https://github.com/sipeed/picoclaw/issues/3276)**  
   申请让Launcher检测并协同外部systemd管理的gateway进程，避免WebUI的Start/Stop按钮与系统服务冲突。**紧密关联部署运维场景**，目前无PR但需求明确。

2. **[#3272 [OPEN] 添加日语本地化](https://github.com/sipeed/picoclaw/issues/3272)** → **对应PR [#3273](https://github.com/sipeed/picoclaw/pull/3273)（待合并）**  
   社区贡献者honbou已提交完整翻译，包含968行JSON和dayjs本地化，预计下一个小版本即可支持日语界面。

3. **[#3229 [CLOSED] Anthropic对话缓存断点提案](https://github.com/sipeed/picoclaw/issues/3229)**  
   建议在 `anthropic-messages` provider中支持滚动缓存断点（breakpoints），以避免每次工具调用重复发送整个对话历史。虽然已关闭（stale），但该提案直击大模型token消耗痛点，可能在未来版本重新讨论。

4. **[#3231 [CLOSED] SearXNG搜索增加basicauth请求头](https://github.com/sipeed/picoclaw/issues/3231)**  
   用户要求支持请求头认证而非仅URL拼接。已关闭但未实现，后续若SearXNG部署增多可能重新激活。

**路线图信号**：项目正从三个方面扩展——**国际化**（日语）、**音频能力**（DashScope TTS、WeChat发送）、**模型兼容性**（更新默认模型ID）。

---

## 7. 用户反馈摘要
从Issue评论中提炼的真实用户痛点与诉求：

- **Android用户**（#3182）：无法在Android上启动服务，且设置中无法修改路径。用户已授予所有权限，但仍然失败。**核心诉求是Android平台的基本可用性**。
- **生产部署者**（#3203, #3276, #3275）：  
  - Matrix同步静默死亡导致agent失去响应而进程不退出，systemd无法检测（#3203）——希望添加自动重连或watchdog。  
  - Launcher与systemd gateway冲突（#3276）——希望Launcher支持“外部管理”模式。  
  - 配置重写丢失字段（#3275）——怀疑是Launcher WebUI写回时未保留所有字段，已关闭但用户可能仍有心理阴影。
- **API开发者**（#3274, #3278）：  
  - 升级主分支后Antigravity provider回归，影响依赖Google认证的服务。用户认为**回归测试不足**。  
  - Google OAuth策略变更导致认证流程被阻断，建议维护者更新OAuth应用或改用官方库。
- **积极贡献者**：honbou一日内提交了3个issues和1个PR（日语本地化），表明社区有高参与度，但也可能对解决速度有所期待。

**满意方面**：多名贡献者提交了高质量的PR（如#3277、#3254、#3271），社区协作氛围良好。

---

## 8. 待处理积压
以下为长期未解决或已标记为`stale`但仍有影响的重要议题，建议维护者关注：

| 类型 | 链接 | 创建时间 | 最后更新 | 影响 |
| ---- | ---- | -------- | -------- | ---- |
| **Bug** | [#3182 Android版本无法启动服务](https://github.com/sipeed/picoclaw/issues/3182) | 2026-06-26 | 2026-07-20 | 影响Android用户，无官方回复 |
| **Bug** | [#3203 Matrix同步无重连逻辑](https://github.com/sipeed/picoclaw/issues/3203) | 2026-07-02 | 2026-07-20 | 生产部署稳定性关键，已stale |
| **PR** | [#3254 模型引用解析修复](https://github.com/sipeed/picoclaw/pull/3254) | 2026-07-13 | 2026-07-20 | 待合并12天，涉及配置解析正确性 |
| **PR** | [#3251 Anthropic缓存指标捕获](https://github.com/sipeed/picoclaw/pull/3251) | 2026-07-12 | 2026-07-20 | 待合并13天，提升Anthropic用户可观测性 |

**特别提醒**：Issue #3182（Android）自6月26日起无任何官方回应，用户上传了截图但未获跟进；Issue #3203标记为`stale`但问题仍然存在，如果项目考虑了稳定性，应优先解决。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-07-21

---

## 1. 今日速览

过去24小时内，项目活跃度**极高**：共产生 **6 条新 Issue** 和 **20 条 PR 更新**，其中 **6 个 PR 被合并/关闭**，**14 个 PR 仍处于待合并状态**。社区贡献者集中提交了多项安全相关的 Issue 和修复 PR（涉及角色权限、审批流程），同时两个长期开放的渠道集成（LINE、Dial）和语音转写技能持续有进展。WhatsApp Cloud 的升级迁移问题也得到闭环修复。整体看，项目正处在**功能扩展与安全加固并行**的阶段，社区参与度与代码质量均表现良好。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 **6 个 PR** 主要覆盖以下方面：

- **容器镜像优化**  
  - [#3110](https://github.com/nanocoai/nanoclaw/pull/3110) (feat): 将 `caldav-mcp` MCP 服务器预置到 Agent 镜像中，方便用户一键启用 CalDAV 工具。  
  - [#3060](https://github.com/nanocoai/nanoclaw/pull/3060) (fix): 为容器启动参数添加 `--init`，解决 PID 1 僵尸进程回收问题。  
- **WhatsApp 与通道修复**  
  - [#3087](https://github.com/nanocoai/nanoclaw/pull/3087) (fix): 修复 WhatsApp 群组中手动 `@提及` 未触发 mention-mode 的问题。  
  - [#3108](https://github.com/nanocoai/nanoclaw/pull/3108) (fix): 修复 `chat-sdk-bridge` 在适配器无 `fetchData` 时无法重新填充附件数据的问题。  
  - [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) (fix): 为 WhatsApp Cloud 的实例重迁提供迁移文档与脚本。  
- **测试与依赖修复**  
  - [#1110](https://github.com/nanocoai/nanoclaw/pull/1110) (fix): 更新容器运行时测试以匹配实际实现。  
  - [#2642](https://github.com/nanocoai/nanoclaw/pull/2642) (fix): 将 `@chat-adapter/telegram` 锁定至 `4.26.0` 以解决 peer 依赖冲突。  

此外，**附件处理管线** 获得两次关键修复（#3108、#3109），显著改善了 Telegram 语音消息和 iMessage 本地附件的字节获取能力。

---

## 4. 社区热点

今日讨论热度最高的 Issue 和 PR 集中在 **角色权限与审批安全** 领域，由贡献者 **k-fls** 连续提交了 4 条 Issue 和 4 个对应修复 PR，形成了完整的攻击面分析-修复链条：

- [#3097](https://github.com/nanocoai/nanoclaw/issues/3097) 「Role grant silently confers GLOBAL admin when --group is omitted」 – 用户发现省略 `--group` 会静默授予全局管理员权限，触发安全讨论。  
- [#3098](https://github.com/nanocoai/nanoclaw/issues/3098) 「Approval cards for ncl commands echo the raw command line」 – 审批卡片只显示原始命令，缺乏可读的效果说明，社区认为降低了审批有效性。  
- [#3099](https://github.com/nanocoai/nanoclaw/issues/3099) 「Approval routing ignores privilege and can route a role-change to its own target」 – 审批可以路由给被变更者本人或低权限用户。  
- [#3100](https://github.com/nanocoai/nanoclaw/issues/3100) 「Revoking the sole remaining owner is not prevented」 – 系统没有最后管理员保护，可导致无主权状态。  

这些 Issue 发布后不到 24 小时，**k-fls 已分别提交修复 PR**（#3101、#3102、#3103、#3104），其中 #3101 和 #3103 被标记为 `[security]`，体现了社区对权限模型的快速响应能力。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---------|-------|------|--------------|
| 🔴 严重 | [#3100](https://github.com/nanocoai/nanoclaw/issues/3100) | 撤销最后一个 owner 无阻止，导致系统失去根信任 | ✅ [#3104](https://github.com/nanocoai/nanoclaw/pull/3104) |
| 🟠 高 | [#3099](https://github.com/nanocoai/nanoclaw/issues/3099) | 审批路由可以绕开权限等级，自审批成为可能 | ✅ [#3103](https://github.com/nanocoai/nanoclaw/pull/3103) |
| 🟠 高 | [#3097](https://github.com/nanocoai/nanoclaw/issues/3097) | 省略 `--group` 静默授予全局 admin，易导致权限提升 | ✅ [#3101](https://github.com/nanocoai/nanoclaw/pull/3101) |
| 🟡 中 | [#3098](https://github.com/nanocoai/nanoclaw/issues/3098) | 审批卡片仅回显原始命令，缺少可理解的效果说明 | ✅ [#3102](https://github.com/nanocoai/nanoclaw/pull/3102) |
| 🟡 中 | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) | whatsapp-cloud 升级后遗留 `messaging_groups` 行，导致 WhatsApp 静默不可用 | ✅ [#3106](https://github.com/nanocoai/nanoclaw/pull/3106)、[#3107](https://github.com/nanocoai/nanoclaw/pull/3107) |

所有今日报告的 Bug 均已附带修复 PR，且部分已合并（#3107、#3108），项目维护效率值得肯定。

---

## 6. 功能请求与路线图信号

今日最值得关注的功能请求：

- **LINE 官方账号集成**  
  - Issue [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) 提议增加 `/add-line` skill，对应已有 PR [#2918](https://github.com/nanocoai/nanoclaw/pull/2918)。贡献者 **joshm1230212** 同时提交了繁体中文 README（#2950），显示对东亚市场的重视。该 skill 可能进入下一个 minor release。

- **Dial 渠道（SMS + AI 语音通话）**  
  - PR [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) 和 [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) 分别实现 Dial 渠道适配器和 setup 向导集成，表明社区正尝试将 NanoClaw 扩展到电话场景。

- **语音转写离线方案**  
  - 长期开放的 PR [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) 基于本地 whisper.cpp 实现全渠道语音转写，无需云 API，今日仍被标记为 `PR: Skill`。若合并，将为隐私敏感用户提供重大能力。

此外，`caldav-mcp` 被预置到镜像中（#3110），意味着计划中的 `/add-caldav-tool` 功能正接近就绪。

---

## 7. 用户反馈摘要

从今天的 Issue 评论和 PR 描述中提炼出以下用户痛点与使用场景：

- **角色管理缺乏安全感**：贡献者 **k-fls** 的行为模式表明，高级用户对权限系统的“单点失败”和“误导式 API”感到不安，他们期望每个命令都应明确 scope 并在审批卡片中展示最终影响。
- **WhatsApp 升级断裂**：用户 **glifocat** 报告了生产环境升级后 WhatsApp 静默失效的问题，根源是数据库迁移未覆盖 `messaging_groups` 行，反映了 CI 流程中缺少从旧版本升级的集成测试。
- **附件处理边界情况**：Telegram 语音/音频笔记（来自 #2888）和 iMessage 本地附件（#3109）在没有 URL 的场景下字节丢失，说明当前的序列化方案对“本地存储 + 适配器无 fetchData”的场景处理不足。贡献者 **cfis** 两次修复体现了对这一痛点的重视。
- **繁体中文用户群存在**：Joshm1230212 提交了 README 繁体中文翻译，可能意味着已有或预期有台湾、香港用户。

---

## 8. 待处理积压

以下为长期开放、近期未获得核心团队关注的 Issue/PR，建议维护者优先评估：

| 编号 | 类型 | 标题 | 创建时间 | 最后更新 | 备注 |
|------|------|------|---------|---------|------|
| [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) | PR (Skill) | feat(skill): add /add-voice-transcription-chat-sdk | 2026-05-13 | 2026-07-20 | 已活跃 2 个月，需 code review |
| [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) | PR (Feature) | feat(channels): add LINE Official Account channel | 2026-07-03 | 2026-07-20 | 对应新 Issue #3096，可加快合并 |
| [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) | PR (Docs) | docs: add Traditional Chinese README | 2026-07-04 | 2026-07-20 | 低风险文档贡献 |
| [#3044](https://github.com/nanocoai/nanoclaw/pull/3044) | PR (Fix) | fix(channels): download inbound attachments that lost fetchData | 2026-07-14 | 2026-07-20 | 与 #3108 部分重叠，需确认是否被 supersede |
| [#3095](https://github.com/nanocoai/nanoclaw/pull/3095) | PR (Docs) | docs: rewrite branch maintenance guide | 2026-07-20 | 2026-07-20 | 文档型，可快速合并 |

---

**总结**：NanoClaw 在权限安全、通道扩展、附件处理三条线上同时取得扎实进展。社区贡献者活跃度创近期新高，且 Bug 修复响应速度快（今日所有报告 Bug 均有对应 PR）。建议核心团队尽快 review 并合并安全修复 PR（#3101–#3104）以及 LINE 渠道 PR（#2918），以巩固项目稳定性并兑现路线图承诺。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据你提供的 NullClaw 项目数据生成的 **2026-07-21 项目动态日报**。

---

### NullClaw 项目动态日报 | 2026-07-21

#### 1. 今日速览

- **开发活跃度低**：过去24小时内无任何新的 Issue 或 PR 被创建或关闭，项目进入静默期。
- **维护性工作为主**：唯一的动态是一条已存在一个多月的依赖更新 PR (#956)，等待合并。这表明项目当前仅在进行底层依赖的维护，无新功能开发或 Bug 修复。
- **社区参与停滞**：社区的提交、反馈和评论均为零，项目处于“待机”状态。
- **总体评估**: **低活跃度**。项目健康度处于中性偏下的水平，核心无明显 Bug，但由于缺乏新功能或社区互动，可能处于开发间歇期。

#### 2. 版本发布

无。项目在过去24小时内未发布新版本。

#### 3. 项目进展

- **今日无合并/关闭的 PR**，项目在功能引入或问题修复上无实质性推进。
- **待处理的主要进展**：PR #956 仍在等待合并。该 PR 将基础 Docker 镜像 `alpine` 从 3.23 升级至 3.24。虽然这属于例行维护，但它对确保 CI/CD 环境的稳定性与安全至关重要，是项目保持在最新技术栈上的关键一步。

#### 4. 社区热点

- **唯一讨论：Dependency Bump (PR #956)**
  - **链接**: [PR #956](https://github.com/nullclaw/nullclaw/pull/956)
  - **分析**: 作为今日唯一的活跃 PR，它并未引发真正意义上的社区讨论（评论和点赞均为0）。Dependabot 自动生成的 PR 反映出项目对基础环境安全的持续关注，但维护者未予及时响应。此 PR 的长期未关闭可能暗示维护力量有限或优先级较低。

#### 5. Bug 与稳定性

- **新报告的 Bug**：无。过去24小时内未报告任何新 Bug、崩溃或回归问题。
- **风险提示**：长期未合并的依赖更新 PR (#956) 本身不构成 Bug，但持续依赖旧版 `Alpine 3.23` 环境运行可能会在未来积累潜在的安全隐患。

#### 6. 功能请求与路线图信号

- **新增功能请求**：无。
- **路线图信号**：项目当前无任何路线图相关的提交或讨论。鉴于唯一的 PR 是基础设施升级，可以认为项目当前的重点在于**维护现有稳定性与兼容性**，而非添加新功能。

#### 7. 用户反馈摘要

- **直接用户反馈**：无。
- **间接反馈**：在没有任何新 Issue 或讨论的情况下，可以推测当前项目用户（或潜在用户）对项目的稳定性基本满意，或者项目处于使用率较低的状态。没有来自社区的功能请求或 Bug 反馈，是项目健康度中性偏冷的表现。

#### 8. 待处理积压

- **关键待合并 PR**: **#956** ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group
  - **创建时间**: 2026-06-15
  - **状态**: 已等待超过1个月，仍未合入。
  - **影响**: CI/CD 基础设施升级。
  - **建议**: **提醒维护者关注**。虽然是一个小型依赖更新，但长期未合并可能导致 CI 构建环境与后续新代码产生不兼容性。建议尽快集成。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是基于您提供的 IronClaw 项目数据生成的 2026-07-21 项目动态日报。

---

## IronClaw 开源项目动态日报 | 2026-07-21

### 1. 今日速览

今日 IronClaw 项目活跃度极高，呈现出明显的“重构收尾”与“稳定性修复”并行的态势。核心贡献者主导了多项大规模重构，特别是 PR #6375 成功删除整个 `v1` 遗留代码库，标志着项目向“Reborn”架构的过渡进入冲刺阶段。同时，社区和 QA 团队报告了大量 P2 级别的 Bug，主要集中在 UI/UX 和流式响应体验上，表明在重大重构之后，提升最终用户体验已成为当前工作重点。

- **活跃度评估**: **极高**。过去24小时合并/关闭了27个 PR，新开了40个活跃 Issue，开发节奏紧凑。

### 2. 版本发布

无新版本发布。值得注意的是，团队正在处理 `1.0.0-rc.1` 候选版本的相关问题 (PR #6383)，该版本准备已因 CI 问题受阻。

### 3. 项目进展

今日项目的核心进展是 **v1 遗留代码的正式下线和 Reborn 架构的全量部署**。以下是关键合并/关闭的 PR 及其影响：

- **里程碑事件：v1 遗留代码库退役 (PR #6375 - [CLOSED])**
  - **摘要**: 此 XL 规模、高风险 PR 彻底删除了旧版 `src/` 目录及其构建产物（`ironclaw-legacy` 二进制文件），并将所有生产部署配置（Railway, GCP systemd, Docker CI）切换至 Reborn 栈。这是自架构简化 RFC 提出以来最重大的代码库变更。
  - **价值**: 消除了历史技术债务，确保所有新功能、修复和性能优化都基于统一的 Reborn 架构，降低了长期维护成本。

- **核心模块“Turns”系统重构 (PR #6382 - [CLOSED])**
  - **摘要**: 对 `ironclaw_turns` 核心 crate 的文件存储和状态机代码进行了大规模清理。合并了重复的状态转换逻辑，删除了已不再使用的并行存储实现，并分解了巨型文件。紧随其后的是一个性能优化 PR (#6390 - [OPEN])，将持久化事件读取从 `O(全局事件总数)` 优化为 `O(当前线程事件数)`。
  - **价值**: 显著提升了作为项目核心的“线程/对话”系统的健壮性、可维护性和性能，为处理更长的对话历史奠定了基础。

- **CI 修复与配置清理 (PR #6379 - [CLOSED])**
  - **摘要**: 快速修复了因 #6375 合并导致的 `main` 分支 CI 失败。同时合并了 PR #6378，移除了 runner 模块中已废弃的特性标志。
  - **价值**: 保持了项目持续集成的健康度，确保了开发流水线的稳定。

### 4. 社区热点

今日社区讨论最集中的议题并非新功能，而是对 **错误处理和用户体验** 的困惑。以下 Issue 获得了最多评论，反映了用户的共同痛点：

- **#6190 - [bug_bash_P2] 用户上报多个冲突的错误提示消息**
  - **链接**: `nearai/ironclaw Issue #6190`
  - **热度**: 4条评论
  - **分析**: 用户反馈在单次失败的请求中，UI 会同时显示多个独立的错误横幅（如流错误、模型上下文限制错误），导致用户无法判断根本原因。这直接反映了 **错误聚合和展示逻辑的缺失**，是降低用户信任度的关键问题。

- **#6189 - [bug_bash_P2] 可重试的流式错误将成功完成的响应标记为失败**
  - **链接**: `nearai/ironclaw Issue #6189`
  - **热度**: 4条评论
  - **分析**: 即使响应看似成功完成，UI 仍然显示红色错误横幅。这表明 **流式响应的状态管理存在边界条件问题**，错误状态未能根据最终结果正确清除，造成了严重的信息误导。

- **#6274 - [OPEN] 完成 DeploymentConfig 作为主要编排配置**
  - **链接**: `nearai/ironclaw Issue #6274`
  - **热度**: 4条评论
  - **分析**: 作为架构简化的一部分，此 Issue 专注于将 `DeploymentConfig` 打造成唯一的配置入口。核心开发者在此展开了关于如何统一本地和生产运行时装配路径的深度技术讨论，是该重构路线图的核心一环。

### 5. Bug 与稳定性

今日 Issue 列表中 Bug 类型占据主导，绝大多数由 `[bug_bash_P2]` 标识，表明这是团队正在进行的 Bug Bash 活动的一部分。这些 Bug 集中在UI/UX体验和流式处理稳定性上，严重程度较高。

**严重性: P1 (高)**

- **#6348 - Gmail 扩展在重装后自动授权，无需用户同意**
  - **链接**: `nearai/ironclaw Issue #6348`
  - **摘要**: 卸载并重装 Gmail 扩展后，系统自动恢复了访问权限，并未弹出 OAuth 授权窗口。这是一个严重的安全与隐私漏洞。 **（暂无关联 Fix PR）**

- **#6360 - Provider 开通流程缺少返回导航**
  - **链接**: `nearai/ironclaw Issue #6360`
  - **摘要**: 在 CLI 中进行 Provider 开通时，一旦选择了一个 Provider并进入 API Key 输入步骤，用户无法返回上一步或切换 Provider。流程存在设计缺陷。 **（暂无关联 Fix PR）**

**严重性: P2 (中)**

- **#6350 - 助手意外切换回复语言**
  - **链接**: `nearai/ironclaw Issue #6350`
  - **摘要**: 用户用英文提问，但 AI 助手用乌克兰语回复。这是一个涉及语言模型上下文泄露或系统提示词配置的 Bug。

- **#6351 - 运行因检查点不可用/不可达而失败**
  - **链接**: `nearai/ironclaw Issue #6351`
  - **摘要**: 多工具请求因系统检查点暂时不可用而失败，影响核心功能的可靠性。

- **#6352 - 流式响应在返回页面后循环播放**
  - **链接**: `nearai/ironclaw Issue #6352`
  - **摘要**: 用户离开聊天页面再返回后，之前的流式响应内容会以块为单位循环播放，造成严重的UI视觉污染。

- **#6353 - 长助手消息被截断且无展开选项**
  - **链接**: `nearai/ironclaw Issue #6353`
  - **摘要**: 较长的助手回复内容在显示时被截断，且没有提供 “展开” 或 “查看更多” 的操作入口。影响信息获取完整性。

### 6. 功能请求与路线图信号

今日的功能需求主要集中在 **“Reborn” 架构下的能力补齐**。结合已有的 PR，以下信号表明这些是下一版本的重点：

1.  **IronHub 扩展的安装流程 (Issue #6320)**
    - **链接**: `nearai/ironclaw Issue #6320`
    - **信号**: 该项目明确基于早期设计 (#4479)，是构建 Reborn 原生扩展生态的第一步，很可能在 `1.0.0-rc.1` 或后续版本中推出。

2.  **WebUI 工作区重新设计与聊天优先的入门体验 (Issue #6324)**
    - **链接**: `nearai/ironclaw Issue #6324`
    - **信号**: 基于 #6162 和 #6163，目标是让首屏和工作区更符合 Reborn 的产品模型。这直接回应用户对复杂工作区导航的抱怨（如 #6334），是提升产品直观性的重要举措。

3.  **线程作用域的 MCP 会话与可编程配置 (Issue #6325)**
    - **链接**: `nearai/ironclaw Issue #6325`
    - **信号**: MCP（模型上下文协议）正在成为标准，此请求旨在提供更精细、更安全的 MCP 会话管理，是平台能力深化的体现。

### 7. 用户反馈摘要

从今日的 Issues 评论和描述中，可以提炼出以下用户痛点：

- **困惑于不明确的错误信息**: 用户对于“成功完成”的请求仍显示“失败”状态感到困惑，并对同时出现多个冲突的错误提示感到沮丧。这表明 **错误处理的用户体验设计是当前最大的短板**。
- **担心隐私和安全性**: Gmail 扩展重装后自动授权的 Bug 直接触动了用户对数据隐私和权限控制的敏感神经。用户期望一个明确的、用户主导的授权流程。
- **对核心功能可靠性的质疑**: 检查点不可用、流式响应循环、消息截断等问题直接影响用户对 AI 助手可靠性的信任。用户能容忍一些边缘 case，但此类基础功能的频繁故障会严重损害项目声誉。

### 8. 待处理积压

以下 Issue/PR 搁置时间较长或需要更多关注，建议维护者重点关注：

1.  **Issue #2277 - [scope: agent] ACP-backed 子线程后端**
    - **链接**: `nearai/ironclaw Issue #2277`
    - **状态**: 创建于 2026-04-10，长期开放，最近一次更新在 2026-07-20。
    - **重要性**: **高**。该 Issue 规划了 IronClaw 委托任务给外部编码代理（如 Codex, Droid）的能力，是实现“智能体编排”愿景的关键。虽然 Reborn 架构已落地，但此核心 Agent 特性仍待实现。

2.  **PR #5664 - [size: L] CI 依赖项批量更新**
    - **链接**: `nearai/ironclaw PR #5664`
    - **状态**: 创建于 2026-07-05，长期开放，被依赖更新机器人持续更新。
    - **重要性**: **中**。虽然为常规依赖更新，但涉及 `actions/checkout` 和 `claude-code-action` 等关键 CI 工具，长期不合并可能导致后续 CI 问题。

3.  **Issue #6329 - 分解 8,789 行的 extension_lifecycle.rs 文件**
    - **链接**: `nearai/ironclaw Issue #6329`
    - **状态**: 创建于 2026-07-20。
    - **重要性**: **中**。该文件严重违反了项目自身的代码规范（>3000行需分解），是潜在的维护噩梦，建议分配时间进行分解重构。

---
*数据来源： GitHub (nearai/ironclaw)。分析时间范围：2026-07-20 至 2026-07-21。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-07-21

---

## 1. 今日速览

- 过去 24 小时内项目提交活跃，共 **15 条 Pull Request** 更新，其中 **11 条已合并/关闭**，**4 条待合并**。
- 合并 PR 主要聚焦于 **Cowork 协作功能增强**（浏览器多注释、消息闪烁修复、滚动跳跃修复）、**Windows 平台体验**（静默更新、构建渠道入口）以及 **AI 皮肤创建流程** 优化。
- 无新 Issue 产生，无新版本发布，整体处于**稳定的迭代与修复阶段**，代码库健康度良好。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 11 个 PR 覆盖了以下关键功能的推进与修复：

### 🆕 新功能 / 增强
- **#2368** — [area: renderer, main, windows] **Windows 静默安装更新**  
  使用 PowerShell `Start-Process` 以 `/S` 参数启动 NSIS 安装器，支持静默升级并在完成后自动重启应用；对 UAC 被拒绝的情况提供本地化错误提示。  
  → 链接：https://github.com/netease-youdao/LobsterAI/pull/2368

- **#2367** — [area: build, windows] **显式 Windows 分发构建渠道入口**  
  新增 `dist-win-channel.cjs` 和 `dist-win-web.cjs` 脚本，确保构建时传入正确的 `keyfrom` 和 `web-installer` 环境变量，避免环境变量泄漏。  
  → 链接：https://github.com/netease-youdao/LobsterAI/pull/2367

- **#2366** — [area: renderer, docs, main, cowork, artifacts] **Cowork 支持浏览器多注释附件**  
  新增浏览器注释协议、webview preload 及截图资产存储 IPC；允许在内置浏览器中批量创建注释并保存裁剪截图；注释以草稿附件形式展示、排队、发送，并在 metadata 中传递结构化上下文。  
  → 链接：https://github.com/netease-youdao/LobsterAI/pull/2366

- **#2361** — [area: renderer, main] **AI 皮肤创建流程改进**  
  在“外观设置”中增加持久化 AI 皮肤创建入口与首次引导；打开 AI 皮肤设计器时优先放置简洁框架提示；保持皮肤工作流在多轮对话中可用。  
  → 链接：https://github.com/netease-youdao/LobsterAI/pull/2361

### 🔧 配置 / 内部改进
- **#2365** — [area: docs, main, openclaw] **配置热加载改为 RPC ack 而非文件监听**  
  提升配置更新时效性，避免文件系统轮询延迟。  
  → 链接：https://github.com/netease-youdao/LobsterAI/pull/2365

- **#1349** — [area: im] **POPO 连接测试增加真实 API 校验**  
  修复凭据验证 “永远通过” 的 bug，现在会实际调用 POPO API 验证 appKey/appSecret 有效性。  
  → 链接：https://github.com/netease-youdao/LobsterAI/pull/1349

### 🐛 稳定性修复
- **#2364** — 修复 Cowork 会话刷新时列表滚动跳跃问题  
  → https://github.com/netease-youdao/LobsterAI/pull/2364
- **#2363** — 修复 Cowork 即时消息周期性闪烁  
  → https://github.com/netease-youdao/LobsterAI/pull/2363
- **#2360** — 修复登录重试时本地回调丢失问题  
  → https://github.com/netease-youdao/LobsterAI/pull/2360
- **#2362** — 修复 Cron UI 界面 bug  
  → https://github.com/netease-youdao/LobsterAI/pull/2362
- **#2359** — 修复 Artifact 预览面板与输入区布局抖动  
  → https://github.com/netease-youdao/LobsterAI/pull/2359

> 小结：项目今日在 **协作（Cowork）** 和 **客户端体验（Windows/皮肤）** 两条线路上迈出了坚实步伐，同时修补了多个用户可见的交互问题。

---

## 4. 社区热点

今日无 Issue 讨论，PR 评论数和点赞数均为 0，因此缺乏直接的社区活跃指标。但从 PR 功能来看，以下两个 PR 可能引发社区关注：

- **#2366 “浏览器多注释附件”** — 该功能显著增强了 Cowork 场景下的协作能力，将浏览器中的内容直接以注释+截图形式引入对话，属于**高频用户场景**的刚需。  
  → https://github.com/netease-youdao/LobsterAI/pull/2366

- **#2361 “AI 皮肤创建流程改进”** — AI 皮肤是项目的个性化亮点，本次加入引导入口和持久化工作流，降低了用户使用门槛，可能受到**外观自定义爱好者**的欢迎。  
  → https://github.com/netease-youdao/LobsterAI/pull/2361

> 建议关注上述 PR 合并后用户是否在 Issue 区提出反馈。

---

## 5. Bug 与稳定性

今日所有已修复的 Bug 均已在同一日合并 PR，响应迅速：

| 严重程度 | 问题描述 | 修复 PR | 状态 |
|----------|----------|---------|------|
| 中 | Cowork 会话刷新时滚动位置异常 | #2364 | ✅ 已合并 |
| 中 | Cowork 即时消息周期性闪烁 | #2363 | ✅ 已合并 |
| 中 | 登录重试时本地回调丢失 | #2360 | ✅ 已合并 |
| 低 | Cron 用户界面显示错误 | #2362 | ✅ 已合并 |
| 低 | Artifact 预览面板与输入区布局闪动 | #2359 | ✅ 已合并 |
| 中 | POPO 连接测试虚假通过（凭据无效仍显示成功） | #1349 | ✅ 已合并 |
| 低 | Windows 更新时 UAC 拒绝提示不友好 | #2368（含修复） | ✅ 已合并 |

无新的崩溃或回归问题报告。

---

## 6. 功能请求与路线图信号

从今日合并的 PR 分析，以下方向可能被纳入近期路线图：

- **协作深度集成**：浏览器多注释附件（#2366）表明下一版本可能强化 **“浏览器内容管道入 Cowork”** 的能力，未来可能支持更多网页元素（如表格、代码片段）的采集与结构化传递。
- **AI 皮肤自主设计**：AI 皮肤创建入口与工作流改善（#2361）暗示项目正在构建 **从“使用皮肤”到“创造皮肤”** 的闭环，可能后续会开放皮肤分享或模板市场。
- **Windows 安装体验优化**：#2368 提升了静默升级和 UAC 错误提示，这是 **企业/团队部署场景** 的常见需求，未来可能增加组策略支持或安装日志。

用户虽未直接在今日提交新功能请求，但上述 PR 的源起很可能来自社区反馈，值得持续观察。

---

## 7. 用户反馈摘要

今日无新 Issue 或 PR 评论产生，无法提取直接的用户声音。但从修复类 PR 的描述中可以推测用户痛点：

- **痛点一**：Cowork 使用时消息闪烁、滚动异常（#2363、#2364），说明 IM 体验的流畅性是用户高频反馈点。
- **痛点二**：Windows 更新时 UAC 授权被拒绝后显示原始错误代码而非可读提示（#2368），表明用户对错误信息的可理解性敏感。
- **痛点三**：POPO 连接测试靠前端校验形同虚设（#1349），证实用户对配置验证的真实性有基本期望。

建议在后续版本中继续收集用户对 Cowork 消息稳定性的满意度。

---

## 8. 待处理积压

当前有 **4 个待合并的 Pull Request**，均为 Dependabot 发起的依赖更新，已停滞近 4 个月（均创建于 2026-04-02）：

| PR | 依赖 | 当前版本 → 目标版本 | 创建时间 | 备注 |
|----|------|---------------------|----------|------|
| #1277 | electron, electron-builder | 40.2.1 → 43.1.1 | 2026-04-02 | 跨大版本升级，需谨慎测试 |
| #1282 | @headlessui/react | 1.7.19 → 2.2.9 | 2026-04-02 | 可能涉及破坏性变更 |
| #1283 | react | 18.3.1 → 19.2.4 | 2026-04-02 | **重大版本升级**，需全面回归 |
| #1284 | react-syntax-highlighter | 15.6.6 → 16.1.1 | 2026-04-02 | 与 React 19 兼容性相关 |

> **⚠️ 提醒维护者**：以上依赖更新长期未合并，尤其是 React 19 和 Electron 43 的升级可能带来大量重构。建议规划专门的升级窗口，纳入下个里程碑。

此外，今日无长期未响应的 Issue 积压。

---

**报告总结**：LobsterAI 项目保持快速迭代节奏，今日主要以功能增强与 bug 修复为主，无明显风险。依赖升级积压是值得关注的潜在技术债，建议尽快安排评审。

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

# CoPaw 项目日报 — 2026-07-21

## 1. 今日速览

过去 24 小时内，CoPaw 社区保持高度活跃：**24 个 Issues 更新（16 个新开/活跃，8 个已关闭），41 个 PR 更新（31 个待合并，10 个已合并/关闭）**。无新版本发布。核心讨论集中在多工具调用推理重复、子代理无限轮询、桌面端启动挂起等稳定性问题上，同时社区积极提交新功能（如统一浏览器控制、自定义分组、新模型提供商）。PR 提交量远大于合并量，反映出开发团队正在密集审查与集成多项重大特性，项目整体处于功能叠加与 bug 修复并行的快速迭代期。

## 2. 版本发布

（今日无新版本发布。）

## 3. 项目进展

以下关键 PR 于今日完成合并或关闭，标志着项目在多个维度取得实质性推进：

- **浏览器控制统一化**：`#6150`（feat(pawapp): add pawapp sdk and kanban app）合并，为后续插件化应用奠定了基础；`#6276`（feat(browser): unified browser — one SDK, any backend）及 `#6157`（chrome extension plugin）仍在审查中，但架构已逐步落地。
- **记忆系统增强**：`#6235`（feat(memory): enhance ReMe Light index maintenance stability and chunking）合并，将索引重建改为显式维护，修复了并发落盘与分块问题，并升级 `reme-ai` 依赖至 `0.4.1.3`。
- **本地模型下载修复**：`#6290`（fix(local_models): adapt GGUF check to ModelScope SDK key change）合并，适配了 ModelScope 的 API 变更，解决了 `#6288` 报告的所有模型无法下载的问题。
- **推理中继修复**：`#6280`（fix(agents): align reasoning with tool segments）虽然尚未合并，但已进入审查阶段，针对 `#6257` 和 `#6282` 的推理重复问题提出了具体修正方案，预计很快合入。
- **其他稳定改进**：`#6291`（fix(console): load Monaco from local bundle）解决了离线环境无法代码预览的问题（关联 `#6261`）；`#6203`（fix(utils): bound and hide the Windows tasklist liveness probe）修复了 Windows 平台进程探针无超时的问题。

## 4. 社区热点

当前讨论最激烈的 Issues 和 PRs 如下：

- **#6257**「Multiple tool calls produce identical thinking output」[🔗](https://github.com/agentscope-ai/QwenPaw/issues/6257)  
  13 条评论，社区高度关注。用户指出当 Agent 在同一轮调用多个工具时，每个工具的 `thinking` 块内容完全相同，导致推理冗余且不可用。背后的核心诉求是要求 Agent 对每个工具调用生成独立推理，而非复制第一次的 thinking 文本。已有 PR `#6280` 尝试修复。

- **#5961**「v2.0.0 版本循环执行的问题」[🔗](https://github.com/agentscope-ai/QwenPaw/issues/5961)  
  8 条评论，用户使用 qwen3.7-plus 模型时发现 Agent 反复写入/删除，无法完成简单任务。该问题已于今日关闭，但讨论中暴露了 v2.0.0 中存在 gate/loop 语义模糊的深层隐患，相关重构已由 PR `#6101` 推进。

- **#4873**「同时开两个 subagent 导致主 agent 无限快速轮询」[🔗](https://github.com/agentscope-ai/QwenPaw/issues/4873)  
  5 条评论，创建于 6 月初，至今未关闭。用户反馈只能在 Dashboard 中断任务，飞书渠道无法打断。该问题是并发控制与任务跟踪的核心设计缺陷，PR `#6273` 提出了统一语义提案。

- **#6242**「Console embedding dimensions setting is not sent to OpenAI-compatible APIs」[🔗](https://github.com/agentscope-ai/QwenPaw/issues/6242)  
  3 条评论，用户希望 Console 中写入 `use_dimensions` 设置，但该字段未被暴露到持久化配置中，导致 embedding 维度设置不生效。需要后端配置栈的联动修改。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

| 严重等级 | Issue | 描述 | 是否有 Fix PR |
|----------|-------|------|---------------|
| 严重 | #6282 | 推理中继中第一个 ThinkingBlock 被复制到所有工具迭代，导致输出混乱 | 是（#6280 待合并） |
| 严重 | #6257 | 多工具调用共享同一 thinking 内容（核心推理逻辑错误） | 是（#6280 待合并） |
| 严重 | #6197 | QwenPaw Desktop 在 `nvidia-smi` 挂起时彻底卡死启动流程 | 无直接 PR，但 #6203 可缓解类似问题 |
| 严重 | #6246 | `_saved_tool_refs` 导致 `recall_history` 崩溃（文件名过长），已关闭 | 已修复（归类为 CLOSED） |
| 中 | #6255 | 聊天时随机报错 `BadRequestError: invalid parameter` | 未关联 PR，可能为模型输入格式错误 |
| 中 | #4873 | 两个 subagent 并行导致主 agent 无限轮询且无法在飞书端打断 | 无直接 PR，但 #6273 提出统一方案 |
| 中 | #6273 | 任务跟踪与同会话并发语义不一致，不同入口表现不同 | 提案中，暂无具体 PR |
| 低 | #6288 | 本地模型下载全部失败（已修复） | 是（#6290 已合并） |
| 低 | #6242 | Console embedding 维度设置未传递到 API（配置缺失） | 无 PR |

**稳定性总体评估**：核心推理相关的 Bug 有明确的修复 PR 在审，并发控制的系统性问题仍在设计阶段，桌面端启动挂起问题需进一步定位 nvidia-smi 异常处理。

## 6. 功能请求与路线图信号

今日社区提出了多项新功能需求，结合已有 PR 可判断以下方向最可能被纳入下一版本：

- **可定制性提升**：
  - `#6286` 支持禁用或自定义内置工具描述，以节省 token 消耗（高达 8k-10k tokens/次）。社区呼声很高，但暂无对应 PR。
  - `#6289` 和 `#6287` 要求会话分组/文件夹功能，方便管理历史对话。项目已有 PR `#5992`（per-session model overrides）和 `#6270`（user editable agent mode），侧栏增强正在规划。
  - `#6283` 要求自动附加当前真实时间到模型上下文，避免隔天重启时日期混淆。技术实现简单，很可能快速合入。

- **新模型与提供商**：
  - `#6285` 请求支持 `qwen3.8-max-preview` 模型。由于模型列表硬编码，需更新后端映射表。
  - `#6268` 提议新增 AIOnly 聚合平台（190+ 模型）作为内置提供商，已有多位贡献者表示愿意提交 PR，可能成为下一版亮点。

- **Human-in-the-Loop 工具**：
  - `#6274` 建议新增 `ask_user_question` 工具，在模糊场景暂停执行并向用户抛出选择题。该诉求在安全敏感场景广泛存在，但需要 Console 与后端双向交互，实现复杂度较高。

- **移动端适配**：
  - `#6281` 请求 Web 控制台适配移动端。该项目已有 Tauri 桌面端，移动端适配可能优先于独立 App，但暂无明确时间线。

- **插件化生态**：
  - PR `#6284` 新增 QwenPaw Creator（视频创作应用），`#6150` 的 PawApp SDK 已合并，意味着插件化生态正式启动，后续将吸引更多社区贡献。

## 7. 用户反馈摘要

从今日 Issues 和 PR 评论中提炼的真实用户声音：

- **推理复用困扰**：用户 `ShenWesley` 在 `#6257` 中直言“每个工具调用应该独立思考，而不是共享一段文字”。类似问题也出现在 `#6282` 中，用户 `rayrayraykk` 提供了详细复现步骤和日志。
- **记忆体系困惑**：用户 `xlg1024` 在 `#6222` 中询问 MEMORY.md 与 Dream digest 的定位差异，反映了两套记忆系统并存带来的使用障碍。官方可能需要输出更清晰的记忆分层说明文档。
- **并发控制痛点**：用户 `splash-li` 在 `#4873` 中指出“飞书侧无法打断轮询”，说明渠道集成中缺乏全局的中断/取消机制，影响日常使用。
- **离线使用需求**：多个用户提出对离线环境的支持，如 `#6291` 的 Monaco 编辑器离线加载、`#6261` 缺乏离线代码预览等。Desktop 用户尤其关注二进制包的断网可用性。
- **配置不够透明**：用户 `BLUE0818` 在 `#6242` 中“花了不少时间才发现 use_dimensions 没有被暴露”，体现 Console 配置项与后端行为的一致性不足。

## 8. 待处理积压

以下 Issues 和 PRs 长时间未获得足够关注或进展缓慢，建议维护团队优先评估：

| 条目 | 创建时间 | 最后活动 | 状态 | 重要性 |
|------|----------|----------|------|--------|
| `#4873` 同时开两个 subagent 导致无限轮询 | 2026-06-01 | 2026-07-20 | OPEN，5评论 | 严重功能缺陷，影响渠道用户 |
| `#5688` CSS Selector 前缀不匹配（ant- vs qwenpaw-） | 2026-07-01 | 2026-07-20 | OPEN，2评论 | 潜在样式冲突，但不影响功能 |
| `#5187` Windows 桌面 GUI 自动化（UIA + Tauri） | 2026-06-14 | 2026-07-20 | OPEN，无审查标签 | 大型功能，依赖其他 PR，需决定合并优先级 |
| `#5992` 按会话覆写模型设置 | 2026-07-12 | 2026-07-20 | OPEN，无审查标签 | 社区新贡献者，需 code review |
| `#6151` 后台工具调用卸载机制重构 | 2026-07-15 | 2026-07-21 | OPEN，审查中 | 关联 `#6056` 三个 bug，修复较关键 |
| `#6222` 记忆体系定位问题 | 2026-07-17 | 2026-07-20 | OPEN，2评论 | 文档/设计问题，影响用户理解 |

**维护者关注提醒**：`#4873` 已持续 50 天未关闭，且涉及核心并发逻辑，建议在 2.0.x 系列中优先解决；`#5187` 与后续 PR `#6157`、`#6276` 构成浏览器/桌面自动化完整链路，建议下周合并会议中重点推进。

---

*数据来源：GitHub (agentscope-ai/QwenPaw)，统计周期 2026-07-20 至 2026-07-21 UTC。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据提供的 ZeroClaw 项目数据，为您呈现 2026 年 7 月 21 日的项目动态日报。

---

### ZeroClaw 项目动态日报 | 2026-07-21

#### 1. 今日速览

ZeroClaw 项目今日保持高活跃度，开发与社区讨论齐头并进。`v0.9.0` 版本的核心功能正处于密集开发与联调阶段，尤其以 **SOP（标准操作程序）** 和 **持久化记忆** 两大模块进展最为显著。社区反馈集中在对 **Windows 平台兼容性**、**沙箱安全** 和 **工具链** 的打磨上，显示出项目在快速迭代功能的同时，稳定性与质量保证也开始成为焦点。然而，高并发的 PR 与 Issue 也导致合并率（24h内合并/关闭 12/50）偏低，存在一定的审查积压风险。

#### 2. 项目进展

今日合并或关闭了多项关键 PR，推动项目在核心功能和控制平面上迈出重要一步。

- **持久化记忆系统成熟化**：多个关联 PR 被合并，标志着 #8891 追踪的“持久化记忆”里程碑取得重大进展。核心改进包括：
    - **语义召回修复**：#8898 修复了持久化全局记忆无法跨会话进行语义召回的问题，确保了长期记忆的有效性。
    - **检索缓存引入**：#8897 为代理记忆添加了可选的检索缓存装饰器，通过缓存嵌入查询结果来优化性能，减少重复计算。
    - **类型化记忆分类**：#8900 实现记忆的类型化分类（如事实、偏好、关系）以及门控的类型化事实提取功能，使记忆系统更加智能和结构化。
- **SOP 控制平面升级**：虽然“SOP 里程碑”告示牌 (#8288) 相关的正式 PR (#8848、#8880) 尚在开放，但 #9030 的关闭（修复了嵌套步骤路径上的策略组装问题）确保了 SOP 在复杂流程中的可靠性，为最终达成 5/5 能力铺平了道路。
- **内容安全加固**：PR #8984 (feat(memory): scan memory content at write and recall boundaries) 已进入审查流程，该 PR 在所有记忆后端（SQLite、Qdrant 等）的写入和召回边界增加了内容扫描层，这是提升安全性的重要举措。

整体来看，项目核心引擎（记忆、SOP、安全）的稳定性与功能完备性得到了显著加强。

#### 3. 社区热点

本周社区讨论集中于两个长期、战略性功能，以及一个影响广泛的平台兼容性 Bug。

- **工作流与治理 (#6808)**：该 RFC 以 14 条评论高居榜首，讨论工作通道（Work Lanes）、看板自动化和标签清理的治理提案。社区正积极参与定义项目未来如何高效组织工作流，这反映了零爪项目对自身开发流程进行优化的承诺。
- **Windows 兼容性挑战 (#7462)**：报告在 Windows 11 上出现 74 项测试失败，引发了社区对服务器端 CI 只覆盖 Linux 环境这一现状的担忧（10 条评论）。此 Issue 成为 Windows 用户的痛点集合，凸显了完善跨平台测试矩阵的紧迫性。
- **异构代理互操作性 (#3566)**：对 A2A 协议支持的需求持续热度不减（9 条评论，7 个 👍）。社区期望 ZeroClaw 不仅能作为一个独立代理运行，更能无缝融入更广泛的代理生态系统，与 NanoClaw、OpenClaw 等协作。这很可能成为 `v0.9.0` 或 `v0.10.0` 的路线图核心。

#### 4. Bug 与稳定性

今日报告的 Bug 涉及多个方面，从严重阻塞到轻微不便不等，开发团队已迅速响应部分问题。

- **严重高危 (S1 - 流程阻塞 / S0 - 数据丢失)**：
    - **Landlock 沙箱自锁 (#9204)**：当 ZeroClaw 使用 Landlock 沙箱执行命令时，会锁定自身，导致 SQLite 访问等问题。**无对应 fix PR**。
    - **`web_fetch` 返回压缩垃圾 (#9207)**：该工具无法解压 gzip/brotli 等压缩格式，返回二进制乱码，导致智能体无法处理网络请求结果。**无对应 fix PR**。
    - **Cron 工作区目录解析为根目录 (#9206)**：带 `agent` 类型的定时任务间歇性将工作目录解析为 `/`，存在数据丢失或权限风险（严重性 S0）。**无对应 fix PR**。
    - **共享预算 TOCTOU 竞争 (#9192)**：并发场景下 `shared_budget` 存在时间差检查-时间差使用漏洞，可能导致原子整数回绕或 `unwrap` 恐慌。**无对应 fix PR**。
    - **CI 注释卫生检查失败 (#9216)**：Master 分支上的注释卫生门禁（`comment_hygiene_gate`）因包含 Issue 引用而失败，阻塞了其他 PR 合并。**无对应 fix PR**。
- **中等程度 (S2 - 行为降级 / S3 - 小问题)**：
    - **ZeroCode 复制包含 Markdown 标记 (#8664)** (**已关闭**)：复制代码块时会连同 Markdown 反引号一并复制，带来使用不便。修复已合入。
    - **ZeroCode 完成回合无输出 (#8644)** (**已关闭**)：Code 模式下回合完成但看不见助手输出。修复已合入。
    - **串口传输失步 (#9078)** (**已关闭**)：收到非匹配响应 ID 后，串口传输无法正确重新同步。修复已合入。
    - **ZeroCode 界面叠加层继承终端背景 (#8765)** (**已关闭**) 和 **鼠标复制干扰文字选择 (#8944)** (**已关闭**)：多个 UI 小问题已在上次发布周期中修复。
    - **ZeroCode 在 Windows 上启动问题 (#9117)** (**已关闭**)：未设置环境变量时无法启动。修复已合入。
    - **Discord 打字指示器卡死 (#9198)**：从 Web 仪表板重新加载守护进程后，Discord 上“智能体正在打字...”指示器永久卡住。**无对应 fix PR**。
    - **`zeroclaw desktop` 命令问题 (#9202)**：Linux 上的 AppImage 检测失效，且下载链接失效。**无对应 fix PR**。

**Bug响应摘要**：社区报告频率高，尤其是上周日（7月20日）集中爆发了 8 个新 Bug。尽管许多 UI 和配置类 Bug 已快速关闭，但运行时和安全性相关的严重 Bug（如沙箱、工具、Cron）仍在开放，亟待修复。

#### 5. 功能请求与路线图信号

社区对新功能的需求主要集中在提升智能体能力和开发生态上。

- **智能体评估工具（Eval Harness）**：以 #7065 为基础，今日新增了三个后续追踪 Issue：#9228 (评估仪表盘/趋势追踪)、#9227 (LLM 评估者校准工具)、#9226 (记忆播种与副作用评估器)。这表明社区在完成核心评估工具后，正积极推动将其深化和产品化，它极有可能成为 `v0.9.0` 或 `v0.10.0` 的重点 feature。
- **ACP 嵌入式资源与文件交付 (#9178)**：请求在智能体内实现文件交付能力，允许智能体将工作区文件作为 ACP 嵌入式资源返回。这补齐了智能体与文件系统交互的重要一环，提高了场景实用性，有望在后续版本中被采纳。
- **插件生态完善**：PR #8857 (scoped secrets) 和 #8855 (channel mirroring via plugin) 仍在开放，它们构建了底层的插件安全和能力框架。还有 `feat(gateway): webhook GET + challenge-echo` (#8949) 和 `refactor(providers): adopt typed builders` (#8854) 等重构，这些是提升开发者体验和扩展性的重要步骤，是项目走向更开放生态的基础。

#### 6. 用户反馈摘要

从 Issue 评论中提炼的真实用户反馈，折射出几个关键痛点：

- **“我以为我的记忆被删了”**：Issue #8837 的用户描述了一个令人困惑的场景：“我的智能体突然就丢失了上下文，开始做完全不一样的事情。” 这揭示了在记忆修剪逻辑上，用户对透明度和可控性的高要求。开发者已修复此问题，但修复仅仅“不静默修剪”可能还不够，用户需要更清晰的反馈机制。
- **“提示词里的工具调用是怎么工作的？”**：Issue #8675 的用户遭遇了提供商返回空回复的严重问题，最终定位是工具调用参数格式验证不达标。用户对“看不见”的机制（如工具调用参数序列化）失败但返回空回复感到极度困惑，这暴露了工具调用链缺乏足够的错误传播。
- **“这个 PR 为什么不能合并？”**：CI 注释卫生检查失败（#9216）虽然是技术门禁，但反映了社区对 CI 流程透明度和稳定性的期望。用户希望看到高质量、严格但合理的门禁来保证代码质量，同时也希望这些门禁能快速被修复，而不是成为合并的长期障碍。
- ****“我要用这个项目，但它在 Windows 上不好使。”**：** 从 #7462 的 74 个测试失败到 #9117 的启动问题，再到 #9206 的工作区目录错误，Windows 用户群体的声音非常响亮。这强烈表明，**跨平台**不仅是测试要求，更是用户采用和项目健康度的关键。

#### 7. 待处理积压

以下 Issue 和 PR 长期开放且重要性高，建议维护团队加快审查或沟通进度。

1.  **SOP HTTP 扇入未接线 (#6685)**：文档中宣传的 `POST /sop/*` 和 `/webhook` 端点功能尚未实现，持续 2 个月以上。这会导致使用文档配置的用户遭遇 `404` 错误，是**文档与实现严重脱节**的积压问题。
2.  **安全管理器组件混乱 (#8846)**：在 `#9204 Bug` 中提到的 Landlock 锁定问题，其根本原因可能与 `security/sandbox` 模块的设计有关。此 Issue 是项目安全性的核心模块，需优先处理。
3.  **v0.9.0 安全、认证与网关追踪 (#7432)**：此 Issue 是 `v0.9.0` 版本的**安全发布计划**，列出了多项破坏性变更。作为路线图追踪器，它不应“积压”，但需要维护者时刻关注其进度，确保安全功能按计划交付，避免拖延影响整体发布节奏。
4.  **需要作者操作的 PR**：多个 PR (如 #9030, #8855, #8313, #8880, #9099, #8949, #8713) 被标记为 `needs-author-action`。这表明存在沟通或技术上的阻塞点，维护者需要进行审查并提供具体反馈，以决定是驳回还是要求作者更新，避免PR陷入沉睡。

---
*备注：以上日报基于 2026-07-21 项目当天数据生成。部分 Issue/PR 排序基于评论和互动量，不代表全部社区参与度。建议结合具体技术细节和代码审查进行全面评估。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*