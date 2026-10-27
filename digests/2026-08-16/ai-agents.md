# OpenClaw 生态日报 2026-08-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-16 01:43 UTC

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

# OpenClaw 项目动态日报 — 2026-08-16

## 1. 今日速览

OpenClaw 项目今日保持高活跃度，24 小时内产生 500 条 Issue 更新和 500 条 PR 更新，其中新开/活跃 Issue 478 条，待合并 PR 452 条。今日发布了 `v2026.8.1-beta.2` 版本，核心亮点为 **Secret egress host binding**（密钥出口主机绑定）安全加固，以及 GPT-5.6 Ultra 模型支持。项目整体处于高速迭代状态，但需注意 P1 级 Bug 数量较多（消息丢失、会话状态损坏类问题反复出现），社区对三个高频痛点——**静默回复失败、会话状态异常、内存无界增长**——表达了强烈关注。Control UI 与 Gateway 基础设施的持续重构（多 PR 推进）显示项目正从功能扩展转向体验与稳定性优化阶段。

---

## 2. 版本发布

### v2026.8.1-beta.2

**🔒 安全亮点**

- **Secret egress host binding**：将每个共享存储的 secret 绑定到精确的 HTTPS 目标主机（CLI、Gateway RPC、Control UI 全链路覆盖），未绑定的 sentinel 替换将在明文出口前 fail-closed 失败。该机制可有效防止密钥经未授权通道外泄。感谢 @shakkernerd 的贡献。

**🤖 模型支持**

- **GPT-5.6 Ultra 及运行时切换**：新增对 GPT-5.6 Ultra 模型的支持，并引入运行时切换能力（详情需查看完整 release notes）。

> ⚠️ **注意**：此版本为 beta 版本，涉及安全关键路径（secret 绑定）变更，生产环境升级前建议在测试环境充分验证 secret 配置兼容性。

---

## 3. 项目进展

> 说明：数据快照未标记"合并于今日"的 PR，以下根据 PR 状态（ready for maintainer look / waiting on author）、关联 Issue 关闭情况及修复性质，判断为今日或近期推进的关键变更窗口。合并精确时间以 GitHub 为准。

### 高优先级修复窗口

| PR | 内容 | 状态 |
|---|---|---|
| [#122177](https://github.com/openclaw/openclaw/pull/122177) | **fix(browser): restore shared tabs after relay reconnect** — 修复浏览器扩展重连后共享标签页丢失问题（关闭 #122121），P1 级 | 👀 待维护者审阅 |
| [#124162](https://github.com/openclaw/openclaw/pull/124162) | **fix: disconnection watchdog in provider lifecycle owner** — 修复 Discord 网关断线后 event-loop 停滞导致无限期失聪的问题，P1 级 | 📣 需补充验证 |
| [#124334](https://github.com/openclaw/openclaw/pull/124334) | **fix(gateway): prevent idle CPU spikes on multi-agent hosts** — 修复多 agent 部署下 Gateway 空闲时 CPU 100-140%、RSS 达 1.8-2.7GB 及 HTTP/RPC/WebSocket 超时问题，实测 11-agent 环境 strace 捕获约 27,680 次异常调用 | ⏳ 等待作者 |
| [#124329](https://github.com/openclaw/openclaw/pull/124329) | **fix(gateway): omit internal class names from RPC failures** — 修复 Gateway CLI 错误信息暴露内部 JS 类名的问题，优化排障体验 | 👀 待维护者审阅 |
| [#121871](https://github.com/openclaw/openclaw/pull/121871) | **fix(chat): stop duplicating a channel reply into two bubbles** — 修复 Telegram 消息在 Control UI 中因 reasoning 内容被渲染为两个重复气泡的问题（关闭 #121643） | 👀 待维护者审阅 |
| [#121799](https://github.com/openclaw/openclaw/pull/121799) | **fix(gateway): usage.status no longer waits on provider HTTP** — 修复 Usage 页面在冷缓存时阻塞于 provider HTTP 长达 6395ms 的问题（关闭 #120043） | 👀 待维护者审阅 |

### Control UI 系列重构（@vyctorbrzezowski 主导）

| PR | 内容 | 状态 |
|---|---|---|
| [#124336](https://github.com/openclaw/openclaw/pull/124336) | `openclaw audit` 命令展示被拒绝过滤器的合法取值 | 👀 待维护者审阅 |
| [#123682](https://github.com/openclaw/openclaw/pull/123682) | 侧边栏告警合并为安静面板 | ⏳ 等待作者 |
| [#123572](https://github.com/openclaw/openclaw/pull/123572) | 聊天头部整合项目与会话身份 | ⏳ 等待作者 |
| [#123666](https://github.com/openclaw/openclaw/pull/123666) | 侧边栏自定义改为事务性提交 | ⏳ 等待作者 |
| [#123582](https://github.com/openclaw/openclaw/pull/123582) | 统一侧边栏账户页脚与身份菜单 | 👀 待维护者审阅 |
| [#123874](https://github.com/openclaw/openclaw/pull/123874) | 聊天侧栏合并为标签页面板（关闭 #123286） | 👀 待维护者审阅 |
| [#124123](https://github.com/openclaw/openclaw/pull/124123) | 聊天记录中工具活动分组展示 | 👀 待维护者审阅 |
| [#124335](https://github.com/openclaw/openclaw/pull/124335) | 会话图标网格选择器 | 👀 待维护者审阅 |

### 其他值得关注

- [#124222](https://github.com/openclaw/openclaw/pull/124222)：Telegram `/models` 选择器确认消息改为富文本通道发送（关闭 #123886）
- [#124223](https://github.com/openclaw/openclaw/pull/124223)：修复 Azure Speech 产品文档链接 404
- [#119700](https://github.com/openclaw/openclaw/pull/119700)：修复 CI 中 Crabbox 就绪阶段误判认证失败
- [#121391](https://github.com/openclaw/openclaw/pull/121391)：修复 setup 工具写/读退役配置键
- [#123853](https://github.com/openclaw/openclaw/pull/123853)：维持网关断连期间会话的 incognito 身份标识（修复 #123852）
- [#123573](https://github.com/openclaw/openclaw/pull/123573)：在创建会话时明确 incognito 语义（锁定图标易混淆）

**综合判断**：项目今日主要推进了 Gateway 稳定性（CPU spike、断线重连、provider 阻塞）、安全审计体验、以及 Control UI 的大规模体验重构，整体向"稳定 + 易用"方向进阶。

---

## 4. 社区热点

| Issue | 评论数 | 核心诉求 |
|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) [CLOSED] | 96 | **静默回复失败在 #116277 关闭后仍持续发生**。监控 cron 持续记录新故障，用户质疑 issue 被过早关闭。<br>**信号**：关闭 issue 前需充分验证修复覆盖全部故障模式 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 66 | **Realtime 语音会话可持有无界 provider 与 consult 状态**。资源上限以"条目数/取消信号"而非硬性所有权边界表达，慢速/突发行为下可能无限累积（P1，diamond lobster 评级） |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 53 | **记忆信任标记（Memory Trust Tagging）**。按来源（用户命令/网页抓取/第三方技能）标记记忆可信度，防止恶意指令通过不可信内容注入记忆（记忆投毒防御），P2 已挂 6 个月 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 49 | **工具调用间的文本泄漏到消息通道**。内部处理输出（错误处理、进度 narration）被当作用户可见消息发送到 Slack/iMessage 等，P1 安全+体验问题 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 29 | **子代理完成结果静默丢失**——无重试、无通知、无自动重启（E31/E42/E45 错误路径） |

**诉求分析**：社区热度集中在"消息投递可靠性"与"会话状态完整性"两大维度，且多个高热度问题（#121058、#25592、#44925）均指向"静默失败"——即系统出错但不给用户任何可见反馈。这是个人 AI 助手场景下最影响信任度的问题类型。

---

## 5. Bug 与稳定性

### 🔴 P1 级（严重）

| Issue | 问题 | 修复 PR |
|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) [已关闭] | 静默回复失败在 #116277 修复后仍复发（无 queued reply payload） | 无（issue 已关闭但故障继续） |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime 语音会话状态无界增长 | 无 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏至消息通道（安全+UX） | 无 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失，无重试/通知（E31/E42/E45） | 无 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway 空闲堆内存增长至 1073MB+，cron 静默失败（macOS） | 无（与 #124334 相关） |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows 下 vitest teardown EBUSY（agent 状态 DB 句柄未释放） | 无 |
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev 通道更新失败：`EUNSUPPORTEDPROTOCOL workspace:*`（updater 用 npm，仓库需 pnpm） | 无 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 隔离 cron agentTurn 全部 fallback 模型耗尽（setup 超时） | 无 |
| [#90711](https://github.com/openclaw/openclaw/issues/90711) | launchd plist StandardErrorPath 硬编码 /dev/null，网关 stderr 全丢（5.28 回归） | 无 |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 自动更新后运行中网关引用旧 hashed bundle（内存模块图过期） | 无 |
| [#74378](https://github.com/openclaw/openclaw/issues/74378) | Windows 上 CLI 命令执行后 node.exe 进程残留 | 无 |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移后通道会话存储 SQLite 为空（0 字节），破坏 MS Teams 主动发送 | 无 |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update` 产生混合所有权，doctor 随后覆盖配置 | 无 |
| [#83337](https://github.com/openclaw/openclaw/issues/83337) | 插件/核心版本漂移导致通道静默失效 | 无 |
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | 预置 SOUL.md/IDENTITY.md 导致首次运行自动完成 bootstrap 并删除用户 BOOTSTRAP.md | 无 |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | 自动模式下并发群消息仅投递最后一条回复（WhatsApp） | 无 |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | sessions_yield 恢复回复记录但未投递，用户收到子代理摘要而非父回复 | 无 |

### 🟡 P2 级（中等，选列）

| Issue | 问题 | 修复 PR |
|---|---|---|
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | sessions_yield 子代理唤醒在低上下文占用时压缩父分支（回归） | 无 |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | bootstrap 文件每轮重新注入，浪费 20-30% token | 无 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | memory_index_chunks / memory_embedding_cache 无保留策略，磁盘将被填满 | 无 |
| [#50165](https://github.com/openclaw/openclaw/issues/50165) | 子代理在底层工作未完成时显示为已完成 | 无 |
| [#62328](https://github.com/openclaw/openclaw/issues/62328) | node:sqlite 缺少 FTS5 模块——内存关键词搜索静默降级 | 无 |
| [#107814](https://github.com/openclaw/openclaw/issues/107814) | gpt-5.3-codex-spark 对必需工具调用输出空参数对象 | 无 |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) | 压缩重试产生孤儿 fork，破坏 parentId 链重建 | 无 |

**趋势判断**：P1 级别中约 80% 的问题暂无对应修复 PR，且多数为**静默失败/数据丢失**类型，反映了运行时状态管理（会话、消息、内存）仍是最薄弱的环节。

---

## 6. 功能请求与路线图信号

### 可能纳入下一版本（已有实现 PR）

| 功能 | 请求 Issue | 实现 PR |
|---|---|---|
| Control UI 侧边栏/聊天体验统一重构 | [#123286](https://github.com/openclaw/openclaw/issues/123286) 等 | #123682、#123572、#123666、#123582、#123874、#124123、#124335 等（vyctorbrzezowski 系列） |
| 审计命令友好错误提示 | — | [#124336](https://github.com/openclaw/openclaw/pull/124336) |
| 会话图标网格选择 | [#124034](https://github.com/openclaw/openclaw/issues/124034) | [#124335](https://github.com/openclaw/openclaw/pull/124335) |

### 高热度待定功能（无实现 PR）

| 功能 | Issue | 评论 | 挂起时长 |
|---|---|---|---|
| 记忆信任标记（防投毒） | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 53 | ~6 个月 |
| 全动态模型发现（OpenRouter） | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 10 | ~6 个月 |
| 基于来源目录而非 agent 索引记忆（消除同 workspace 重复向量库） | [#95724](https://github.com/openclaw/openclaw/issues/95724) | 6 | ~2 个月 |
| 多槽位记忆架构 | [#60572](https://github.com/openclaw/openclaw/issues/60572) | 6 | ~4 个月 |
| 基于标题感知的 chunking + 实体提取 | [#44395](https://github.com/openclaw/openclaw/issues/44395) | 7 | ~5 个月 |

**路线图信号**：用户对**记忆层**的关注度显著——从防投毒、多槽位、去重到语义 chunking，反映出 agent 长期记忆正在成为核心瓶颈。Control UI 重构系列 PR 暗示下一 beta 版本将包含大幅 UI 更新。

---

## 7. 用户反馈摘要

- **可靠性是最大痛点**：多个 issue（#121058、#25592、#44925、#92186、#90944、#87109）反映同一模式——agent 在 UI 中显示"已回复"，但消息从未真正送达，或内部处理文本被误发。社区对"静默失败"表达了明显不满情绪。
- **内存与资源管理**：Gateway 堆内存随运行时间无界增长（#87109：558MB→1073MB+）、SQLite 无保留策略（#114612）、bootstrap 文件每轮浪费 20-30% token（#67419），反映了长跑部署的资源稳定性问题。
- **生产环境使用活跃**：用户在家庭/业务场景深度使用 Telegram、Home Assistant、自动化 cron（#73537 作者评价"genuinely become part of our daily workflow"），并期待生产就绪稳定性标签。
- **安全敏感度高**：#7707 记忆投毒防御和 #25592 工具间文本泄漏获得大量讨论，用户对 agent 安全边界（尤其是接入第三方内容和外部渠道时）有明显不安全感。
- **Windows/macOS 平台体验差距**：#74378（Windows node.exe 进程残留）、#119796（Windows EBUSY）、#90711（launchd stderr 被丢弃），跨平台质量参差。

---

## 8. 待处理积压

### 长期未响应/陷入停滞的重要 Issue

| Issue | 问题 | 挂起时长 | 备注 |
|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 记忆信任标记 | ~6 个月 | 53 条评论，涉及安全核心 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 全动态模型发现 | ~6 个月 | 生态瓶颈 |
| [#45771](https://github.com/openclaw/openclaw/issues/45771) | 内置 pace-aware 速率限制 | ~5 个月 | 自主循环烧穿 API 配额 |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏至消息通道 | ~6 个月 | P1 + 安全 |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | A2A 单向 dispatch 模式 | ~5 个月 | 避免回复乒乓 |
| [#30381](https://github.com/openclaw/openclaw/issues/30381) | chatCompletions 忽略 model（当 x-openclaw-agent-id 存在） | ~5 个月 | 影响网关兼容性 |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | sessions_yield 压缩父分支（回归） | ~3 个月 | P1 数据丢失 |

### 今日新增待关注

- [#121058](https://github.com/openclaw/openclaw/issues/121058)：虽然已关闭，但 96 条评论反映问题持续复发，**建议维护者重新开启并深入排查根因**。
- [#123073](https://github.com/openclaw/openclaw/issues/123073)（dev 更新通道 pnpm/npm 协议冲突）——影响开发者体验，修复路径清晰。

---

## 项目健康度评估

| 维度 | 状态 |
|---|---|
| 活跃度 | 🟢 极高（500+/500+ Issue/PR 更新） |
| 发布节奏 | 🟢 稳定（beta 版本迭代） |
| 安全加固 | 🟢 积极（secret binding、RPC 错误清理） |
| P1 修复率 | 🟡 偏低（多数 P1 无修复 PR） |
| 长期功能推进 | 🟡 记忆/模型发现等核心请求长期搁置 |
| 回归风险 | 🔴 多个回归类问题（#86684、#91931、#90711、#74378） |
| 社区满意度 | 🟡 活跃但"静默失败"类问题侵蚀信任 |

**总结**：OpenClaw 正处于"高速迭代但稳定性承压"的阶段。安全硬化和 UI 重构进展显著，但消息投递与状态管理类 P1 问题长期未解决，可能成为项目从"可用"走向"可信赖"的关键卡点。建议维护者优先推进 #121058 重新评估与 #25592 的修复工作。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向分析报告

**日期：2026-08-16**


## 1. 生态全景

个人 AI 助手与自主智能体开源生态处于"高速迭代但稳定性承压"的成长阶段。以 OpenClaw 为代表的头部项目日更新量达 500+ Issue / 500+ PR，但 P1 级问题主要集中在"静默失败"（消息丢失、会话状态异常）与内存无界增长，反映出运行时状态管理仍是全行业最薄弱的环节。与此同时，安全加固成为各项目共识——OpenClaw 的 Secret egress host binding、Moltis 的路径穿越与签名验证修复、NanoBot 的 exec.allowPatterns 绕过修复、ZeroClaw 的 SSRF 防护与 webhook 审计加固在同日密集推进。社区对记忆层（防投毒、多槽位、跨会话持久化）与多通道接入（Telegram/WhatsApp/Discord/Matrix）的诉求持续升温，多个项目同步出现"从单会话对话向多会话工作区演进"的产品形态信号。


## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 今日合并/关闭 PR | 新版本 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（478 活跃） | 500（452 待合并） | 未标注具体数 | v2026.8.1-beta.2 | 🟡 高速迭代但 P1 修复率低，静默失败类问题侵蚀信任 |
| **NanoBot** | 6 | 16（9 待合并） | 7 | 无 | 🟡 中等活跃，安全漏洞（#5305）无修复，token 合并系统性偏差 |
| **Hermes Agent** | 50（41 活跃） | 50（36 待合并） | 14 | 无 | 🟢 高度活跃，安全加固集中涌现，多项 P1 关闭 |
| **PicoClaw** | 0 | 2（均待合并） | 0 | 无 | 🔴 低活跃，2 条 PR 搁置 8 天，WhatsApp 通道持续中断 |
| **NanoClaw** | 0 | 22（19 待合并） | 3 | 无 | 🟢 活跃开发期，Telegram 集成落地，但 PR 单日积压 19 条 |
| **NullClaw** | 1 | 1 | 0 | 无 | 🟢 平稳迭代，主动优化（PR #987），无 Bug 洪水 |
| **IronClaw** | 27（21 关闭） | 12（5 合并/关闭） | 5 | 无 | 🟢 性能优化稳步收尾，但测试基础设施可靠性削弱信任 |
| **LobsterAI** | 18（16 stale 关闭） | 5（4 dependabot） | 0 | 无 | 🔴 低活跃维护期，安全漏洞状态未确认，付费链路受阻 |
| **TinyClaw** | — | — | — | — | ⚪ 24 小时无活动 |
| **Moltis** | 0 | 16（14 合并/关闭） | 14 | 无 | 🟢 高活跃合并状态，安全加固与生态扩张并行 |
| **CoPaw** | 9（1 关闭） | 10（0 合并） | 0 | 无 | 🟡 需求旺盛但审查积压，10 个开放 PR 零合并 |
| **ZeptoClaw** | — | — | — | — | ⚪ 24 小时无活动 |
| **ZeroClaw** | 46 活跃 | 44 待合并 | 6 | 无 | 🟢 架构讨论与安全加固并行，Anthropic 回退栈完整落地 |


## 3. OpenClaw 在生态中的定位

**优势**：OpenClaw 是当前生态中活跃度与社区规模绝对领先的项目（日更新量 500+/500+，远超 Hermes Agent 的 50/50 与 NanoBot 的 6/16）。其发布节奏稳定（beta 版本迭代），安全加固走在前列——Secret egress host binding 覆盖 CLI、Gateway RPC、Control UI 全链路，fail-closed 机制设计严谨。Control UI 大规模体验重构（8+ PR 并行推进）表明项目正从功能扩展转向体验与稳定性优化阶段。

**技术路线差异**：OpenClaw 采用 Gateway + Control UI + 多通道适配的架构，强调跨平台（CLI/桌面/Web）统一体验；与 NanoBot 的 WebUI 协作路线（@mention 引用、临时侧会话、拖拽整理）相比，OpenClaw 更侧重 Gateway 基础设施稳定性（CPU spike 修复、断线重连、provider 阻塞消除）与安全审计体验。

**社区规模与差距**：与其他项目对比，OpenClaw 的社区讨论深度最高（单 Issue 最高 96 条评论），用户覆盖家庭/业务深度使用场景（Telegram、Home Assistant、自动化 cron）。但其 P1 问题约 80% 无对应修复 PR，长期功能请求（记忆信任标记、全动态模型发现）搁置达 6 个月，在"从可用走向可信赖"的卡点上与 Hermes Agent（安全 PR 集中涌现、多项 P1 关闭）形成对比。


## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **记忆层架构升级** | OpenClaw、NanoBot、Hermes Agent、LobsterAI、ZeroClaw | 记忆信任标记防投毒（OpenClaw #7707，53 评论）、多槽位记忆（OpenClaw #60572）、跨会话搜索与持久化（Hermes #8457）、基于来源目录记忆消除重复向量库（OpenClaw #95724）、Agent 记忆体系构建（LobsterAI #2046/#2041） |
| **静默失败治理** | OpenClaw、NanoBot、CoPaw、Hermes Agent | 静默回复失败复发（OpenClaw #121058，96 评论）、工具调用间文本泄漏至消息通道（OpenClaw #25592）、子代理完成静默丢失（OpenClaw #44925）、complete_goal 无限循环（NanoBot #4864）、视频帧静默丢弃（CoPaw #7059）、压缩后误导性"磁盘满"（Hermes #82001） |
| **多通道/多身份支持** | OpenClaw、PicoClaw、NanoClaw、CoPaw、ZeroClaw、Hermes Agent | WhatsApp 通道 405 断线（PicoClaw #3320）、Telegram 集成落地（NanoClaw #3269）、Matrix 会话按发送者隔离（CoPaw #7001）、Discord 提及触发线程（ZeroClaw #7849）、Discord 功能对齐 API v10（Hermes #79564） |
| **安全边界加固** | OpenClaw、NanoBot、Moltis、ZeroClaw、Hermes Agent | Secret egress host binding（OpenClaw）、exec.allowPatterns 绕过修复（NanoBot #5305，高危无修复）、zip 路径穿越与节点配对签名验证（Moltis #1180/#1179）、SSRF 防护（ZeroClaw #8713，Hermes #71735）、审批超时不应 collapse to deny（Hermes #81048） |
| **后端稳定性与性能** | OpenClaw、NanoBot、IronClaw、ZeroClaw | Gateway 空闲 CPU 100-140%（OpenClaw #124334）、心跳停滞致容器误杀（NanoClaw #3251）、数据库写入放大优化（IronClaw epic #7591）、cron 任务墙钟超时锁持有（ZeroClaw #9320） |

**核心洞察**：可靠性（"出错时用户必须知道"）是生态面临的最大信任危机，记忆层则被多个项目同时认定为下一阶段的核心瓶颈。


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构差异 |
|---|---|---|---|
| **OpenClaw** | 全功能个人 AI 助手（多通道、Control UI、cron、子代理） | 深度个人用户/家庭自动化 | Gateway 中心化架构，强调整体体验统一 |
| **Hermes Agent** | 安全优先的桌面端 agent（MCP 深度集成、审批机制） | 开发者为中坚、桌面客户端用户 | 安全边界（SSRF、审批、引用跟踪）系统化加固 |
| **NanoBot** | WebUI 协作/多会话工作区演进 | 偏好 Web 界面、需多会话管理的用户 | 会话协作（@mention）、侧会话、拖拽式组织的前沿实验 |
| **NanoClaw** | 频道适配器与权限策略精细化 | 多频道/多 bot 身份共存的群组场景 | 频道注册拦截器、跨会话上下文模块（扇出/回填） |
| **IronClaw** | Agent 性能与架构治理（prepared-context turns、Tier1/2 优化） | 关注规模化运行效率的开发者 | 数据库写入放大削减、编码工具面 `read/write/edit/glob/grep/bash` 统一 |
| **Moltis** | 安全加固 + 连接器生态（日历/邮件/频道）+ 远程沙箱 | 对安全基线敏感的企业/个人 | Coder 远程 sandbox、Slack 原生任务卡片 |
| **CoPaw** | 多媒体处理（视频）/数据应用运行时 | 多模态交互、数据分析场景用户 | DataPaw 原生运行时、视频透传/帧传递 |
| **ZeroClaw** | 架构级 RFC 驱动演进 | 关注协议兼容与生态接轨的开发者 | Chat Completions 兼容层 RFC、运行时会话所有权、统一附件架构 |
| **PicoClaw** | 对话开销优化（prefix caching） | 对成本/延迟敏感的个人用户 | 动态上下文块后移、WhatsApp 适配 |
| **NullClaw** | 长时运行稳定性（系统提示词分片、循环防护） | 长时间本地工具链场景用户 | 缓存友好前缀 + 工具输出压缩 + 循环检测 |


## 6. 社区热度与成熟度分层

**快速迭代期（功能扩张优先）**：OpenClaw（日更新 500+/500+）、ZeroClaw（46 活跃 Issue/44 待合并 PR）、NanoClaw（22 PR/日，连续 12 PR 批次提交）。

**质量巩固与安全加固期**：Hermes Agent（安全 PR 集中涌现、MCP 韧性修复、多项 P1 关闭）、Moltis（14 PR 合并，安全 + 连接器 + 迁移收尾）、IronClaw（性能优化 epic 收尾、架构切换完成）。

**WebUI 体验竞速期**：NanoBot（会话协作/临时侧会话/拖拽组织三线并行）、OpenClaw（Control UI 8+ PR 并行重构）、CoPaw（视频功能缺陷闭环修复）。

**低活跃/维护期**：PicoClaw（2 条 PR 搁置 8 天、WhatsApp 通道中断）、LobsterAI（16 条 stale 关闭、核心开发停摆）、TinyClaw/ZeptoClaw（无活动）。


## 7. 值得关注的趋势信号

**1. "静默失败"成为全行业信任杀手。** OpenClaw #121058（96 评论）、NanoBot #4864、CoPaw #7059、Hermes #82001 高度同构——出错但无可见反馈。对 AI 智能体开发者而言，**显式失败（explicit failure）应成为设计原则**：任何错误路径都必须对用户可见，否则信任一旦流失极难修复。

**2. 记忆层被集体认定为下一核心瓶颈。** 从 OpenClaw 的记忆信任标记（防投毒）、多槽位架构、基于来源目录去重，到 NanoBot 的 token 合并策略偏差（#5377/#5402）、Hermes 的跨会话搜索、LobsterAI 的"记忆系统是 Agent 进化的最大瓶颈"分析——记忆的安全性（防投毒）、准确性（token 估算）与结构化（声明式 vs 轨迹式）正在成为差异化竞争的关键。

**3. 多会话工作区形态正在形成。** NanoBot（@mention 会话协作、临时侧会话、拖拽整理）、NanoClaw（跨会话上下文扇出/回填、DM 线程规范化）、Hermes（跨会话并发同步）、OpenClaw（session identity 整合）——多个独立项目同步指向"从单会话对话到多会话工作区"的产品演进。

**4. 测试基础设施可靠性成为可信度的前置条件。** IronClaw 的 Live Canary 连续 30/30 全红且根因为 harness 缺陷（#7679）、ZeroClaw 的 cron 测试 ETXTBSY 导致 CI 必需检查失败（#9965）、CoPaw 的 10 个开放 PR 零合并——**当 CI 信号不可信时，回归检测能力与外部贡献意愿同步受损**。建议各项目将测试基础设施自身可靠性纳入优先治理项。

**5. 生态兼容（协议层）需求浮现。** ZeroClaw 最热 RFC（#8603，21 评论）提议 Chat Completions 兼容层以接入 Open WebUI/LobeChat/Continue.dev 等既有工具链；IronClaw 新增 Typed ToolChoice 提案（#7672）消除跨 provider 隐式语义差异；Moltis 将 OpenAI reasoning 调用路由至 Responses API（#1198）。**Agent 框架正在从"自成一体"走向"融入既有 LLM 工具生态"。**

**6. 安全加固从"外围"走向"内核"。** 从路径穿越、SSRF、签名验证，到更精细的 Secret egress host binding（OpenClaw）、exec.allowPatterns 绕过（NanoBot）、审批超时语义（Hermes #81048）、三态 risk-profile allowed_tools 修复（ZeroClaw #9753）——**安全机制的正确性（而非仅存在性）正在成为社区审查的新焦点**。

**7. 外部贡献者管理决定生态长期活力。** CoPaw 的 10 个开放 PR 中 7 个来自首次贡献者且零合并；PicoClaw 的 2 条 PR 搁置 8 天未获回应；Moltis 的外部贡献者明确表示"想用但希望先合入安全修复"——**合并节奏与响应及时性正在成为影响社区贡献者留存的关键变量**。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-16

## 1. 今日速览

项目活跃度较高：过去24小时共有6条 Issue 更新和16条 PR 更新。其中有 9 个 PR 处于待合并状态、7 个已关闭/合并，主要集中于 WebUI 体验优化、内存与会话状态管理、以及新模型提供方支持。值得关注的是，本周连续出现 3 个与 token 合并（consolidation）相关的 Bug 报告（#5377、#5402、#4467），其中 #5377 和 #5402 直接暴露了该系统在 token 估算与实际计数之间的偏差问题，尽管 #5379 已合入相关修复，但系统性问题仍需持续观察。安全方面，`exec.allowPatterns` 绕过漏洞（#5305）属于高危问题，目前尚未有公开的修复 PR。此外，新增了对 DashScope 原生协议（#5398）、OrcaRouter 网关（#5328 已合并）等新 provider 的支持，显示了项目向外扩展生态的积极态势。

## 2. 版本发布

过去24小时无新版本发布。

## 3. 项目进展

今日共有 7 个 PR 关闭/合并，其中修复类居多，另有 1 个新 provider 功能合入。此外还有 9 个 PR 处于打开状态，WebUI 相关新功能占比较高，可能被纳入下一个里程碑。

### 已合并/关闭（重要进展）

| PR | 类型 | 说明 |
|---|---|---|
| [#5328](https://github.com/HKUDS/nanobot/pull/5328) feat(providers): add OrcaRouter | 新 Provider | 将 OrcaRouter 作为命名网关 Provider 接入，单端点汇聚 150+ 模型（OpenAI、Anthropic、Google、DeepSeek、Qwen、MiniMax、xAI），并支持网关级零信任安全。对多模型用户是显著增强。 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) fix(memory): preserve full consolidation input | 内存修复 | 将原先有损的 consolidation 截断改为无损耗的分块（lossless bounded chunks），且仅在所有 chunk 成功后才写历史。直接回应 #5377 的截断问题。 |
| [#5371](https://github.com/HKUDS/nanobot/pull/5371) fix(webui): hide assistant actions until turn end | WebUI 修复 | 解决了 Agent turn 未结束时误显示 copy/fork 操作的问题，改善交互一致性（对应 #5368）。 |
| [#5369](https://github.com/HKUDS/nanobot/pull/5369) fix(plugins): revalidate cached skill roots | 插件/安全修复 | 修复插件包变更后缓存 skill 路径未失效的问题，阻止受限项目下读到已被替换的插件文件。属于安全相关的回归修复。 |
| [#5370](https://github.com/HKUDS/nanobot/pull/5370) fix(agent): bound per-session file state lifecycle | 资源泄漏修复 | 限制 FileStateStore 的生命周期，避免高基数 API/temporary session 导致表无限增长，并解决 `/new` 后状态残留问题。 |
| [#5376](https://github.com/HKUDS/nanobot/pull/5376) fix(cron): keep scheduler alive when persistence fails | 稳定性修复 | 修复 `CronService._save_store()` 抛错导致调度器永久挂掉的静默故障，防止磁盘满/权限问题杀死整个 cron 调度。 |
| [#5397](https://github.com/HKUDS/nanobot/pull/5397) fix(webui): preserve range selection and turn timing | WebUI 修复 | 支持 macOS Shift 范围选择、保持 turn timing 与 guidance 发送的关联，改善会话操作体验。 |

### 尚在开放中的关键 PR（通往下一版本的候选）

- [#5358](https://github.com/HKUDS/nanobot/pull/5358) feat(webui): session collaboration via mentions — 会话间 @ 协作，让 agent 可以引用和选择 peer session。**WebUI 协作新功能。**
- [#5364](https://github.com/HKUDS/nanobot/pull/5364) feat(webui): temporary side conversations — 新增 `/side` 临时侧会话，支持多标签页孤立状态 + 主/侧并行发送。**值得期待的交互增强。** 有 conflict 标记。
- [#5389](https://github.com/HKUDS/nanobot/pull/5389) feat(webui): drag-and-drop session organization — 拖拽排序/成组。有 conflict 需解决。
- [#5398](https://github.com/HKUDS/nanobot/pull/5398) feat(providers): DashScope 原生协议 — 解锁 thinking 模式等完整参数面。社区呼声较高的新 provider。
- [#5400](https://github.com/HKUDS/nanobot/pull/5400) refactor(models): unify preset names — 统一 configuration/WebUI/命令/会话/runtime 中的模型预设名，并支持 WebUI 内重命名。**对用户体验影响面大。**
- [#5401](https://github.com/HKUDS/nanobot/pull/5401) fix(webui): mutations reconnect-safe — WebUI 断线重连后不再导致 mutation 重复执行。

**项目整体向前迈进的判断**：除继续高频修复稳定性/回归问题外，今日可见多个面向用户体验的大块新功能进入 PR 阶段（会话协作、临时侧会话、拖拽整理），说明项目在积累稳定性的同时正加快前沿 WebUI 体验布局。

## 4. 社区热点

今日讨论最活跃的是 **Issue #4864 "Endless loop for <tool_call> <function=complete_goal>"**（5 条评论，👍1）。该问题最早在 7 月 9 日提出，至今仍在更新，说明用户在持续关注和推动。核心诉求是：`complete_goal` 工具在 gateway 端把 recap 参数从 JSON 对象序列化为裸字符串，导致工具调用陷入死循环——这是用户在实际使用中遇到的阻碍性 Bug，直接影响 agent 完成任务的可靠性。

**Issue #4467 "Dream should update existing workspace skills"**（2 条评论，👍1）虽然未进入最新热点榜，但结合评论增长看，同样反映了社区对 `Dream` 功能重复生成技能的长期不满，用户希望「增量更新既有 skill」而非每次全量新建，诉求集中在工作流维护效率上。

**Issue #5402 "Token consolidation never triggers"**（8月16日新开，0 评论）虽然暂未形成讨论热度，但直接指向系统核心的 token 估算偏差问题，可能与 #5377 形成合力，值得维护者尽快关注（详见第 5 节）。

整体来看，社区最关心的三个方面：**Agent 执行可靠性与循环问题、token 合并策略的准确性、以及 WebUI 会话管理的效率**。建议维护者在 issue 中给出明确回应，尤其是对 #4864 和 #5402 这两个可能导致用户流失的阻塞性问题。

## 5. Bug 与稳定性

今日报告/更新的 Bug 按严重程度排列如下：

| 严重程度 | Issue | 描述 | FIX PR |
|---|---|---|---|
| 🔴 严重（安全） | [#5305](https://github.com/HKUDS/nanobot/pull/5305) [Security] | `exec.allowPatterns` 允许列表绕过，可通过 OpenAI 兼容 API 实现链式 shell 命令执行（多条命令拼接连贯执行）。攻击者可利用该漏洞在受限环境下执行非白名单命令。 | ❌ 暂无公开 fix PR |
| 🔴 严重（阻塞） | [#4864](https://github.com/HKUDS/nanobot/pull/4864) [bug] | `complete_goal` 工具参数序列化错误（recap 被解析为裸字符串而非 JSON），导致工具调用陷入无尽循环。2026-07-09 提出，至今未关闭。 | ❌ 暂无明确 fix PR |
| 🟠 中高 | [#5402](https://github.com/HKUDS/nanobot/pull/5402) [bug] | tiktoken 估算持续低估实际 API token 数，导致 token consolidation 永远不触发。系统核心功能失效。8月16日新开，0 评论。 | ❌ 暂无；[#5379](https://github.com/HKUDS/nanobot/pull/5379) 为 consolidation 截断问题提供了修复，但未解决估算偏差 |
| 🟠 中高 | [#5377](https://github.com/HKUDS/nanobot/pull/5377) [bug] | Consolidation 截断归档输入但推进完整消息批次，导致消息丢失。8月13日报告。 | ✅ [#5379](https://github.com/HKUDS/nanobot/pull/5379) 已合入（lossless bounded chunks） |
| 🟡 中低 | [#4467](https://github.com/HKUDS/nanobot/pull/4467) [enhancement] | Dream 每次运行都创建重复 skill，而非更新既有 workspace skill。 | ❌ 暂无 |
| 🟢 已解决 | [#5368](https://github.com/HKUDS/nanobot/pull/5368) [bug] | WebUI 在 Agent turn 仍在运行时显示 copy/fork 操作，造成完成信号冲突。 | ✅ [#5371](https://github.com/HKUDS/nanobot/pull/5371) 已合入 |

**重点关注**：

- **#5305** 允许绕过的安全漏洞建议优先处理，因为无公开修复 PR，且属于攻击向量明确的高危问题。
- **#5402** 与 **#5377** 指向同一个全局问题——consolidation 的 token 估算与截断逻辑在多个层面不可靠。#5379 只解决了**截断丢消息**，未解决**估算不触发**。若 #5402 属实且影响面大，可能需要在未来版本中重构 token 估算策略或提供手动触发入口。
- **#4864** 自 7 月 9 日至今已超过一个月未有明确修复，可能已是阻碍部分用户的关键问题。

## 6. 功能请求与路线图信号

今日用户提出/活跃的功能请求：

| Issue/PR | 请求内容 | 已有 PR 或路线图信号 |
|---|---|---|
| [#4467](https://github.com/HKUDS/nanobot/pull/4467) | Dream 应增量更新既有 workspace skills，而非每次创建副本 | 暂无对应 PR，属长期待办 |
| [#5291](https://github.com/HKUDS/nanobot/pull/5291)（开放中 PR） | 持久化 subagent 对话转录（工具调用、结果、推理步骤） | 已进入实现阶段，含测试，优先级 p2 |
| [#5358](https://github.com/HKUDS/nanobot/pull/5358)（开放中 PR） | WebUI 会话协作（@mention 引用 peer session） | 已在实现中，含稳定身份色 |
| [#5364](https://github.com/HKUDS/nanobot/pull/5364)（开放中 PR） | 临时侧会话（/side），多标签页支持 | 已在实现中，但有 conflict 需要解决 |
| [#5389](https://github.com/HKUDS/nanobot/pull/5389)（开放中 PR） | 拖拽式会话分组/排序 | 已在实现中，有 conflict |
| [#5398](https://github.com/HKUDS/nanobot/pull/5398)（开放中 PR） | DashScope (Bailian) 原生协议支持 | 已在实现中，待合并 |
| [#5400](https://github.com/HKUDS/nanobot/pull/5400)（开放中 PR） | 统一模型预设名（config/WebUI/命令/会话/runtime） | 已在实现中，影响面广 |

**路线图信号判断**：WebUI 会话管理（协作、侧会话、拖拽）已成为明显的主线发展方向，多个 PR 同时推进说明该项目正在从「单会话对话」向「多会话工作区」形态演进。模型 provider 生态也在持续扩大（DashScope 原生协议、OrcaRouter 网关）。较大的改动（#5400 预设名统一）因涉及面广，可能会进入下一个 minor 版本。

## 7. 用户反馈摘要

从今日 Issues 及评论区提炼的用户声音：

| 反馈来源 | 用户痛点 / 诉求 | 分析 |
|---|---|---|
| [#4864](https://github.com/HKUDS/nanobot/pull/4864) 评论区 | `complete_goal` 在最近的 gateway 更新后出现参数序列化回归（JSON→裸字符串），导致工具循环报错，任务无法结束。 | 用户实际使用中受到的阻塞，来自一次非预期的更新回归。这类问题易造成信任流失。 |
| [#4467](https://github.com/HKUDS/nanobot/pull/4467) | 用户每天都用自定义 workspace skill 做日常流程，每次跑 Dream 后都会产生新副本，积累了混乱；希望「会话间增量改进同一技能」。 | 反映重度用户对 skill 生命周期管理的真实需求——不是「每轮重新生成」，而是「持续迭代同一个技能」。 |
| [#5402](https://github.com/HKUDS/nanobot/pull/5402) | 用户发现 tiktoken 估算远低于实际 API 返回的 token 数，consolidation 永远不触发，token 成本逐轮上涨。 | 用户在真实 API 使用中观察到估算偏差问题，属于成本敏感场景的切实痛点。 |
| [#5377](https://github.com/HKUDS/nanobot/pull/5377) | 归档时截断输入但推进整批消息，导致部分早期对话内容被静默丢弃。 | 对依赖长上下文工作流的用户而言是数据完整性隐患。#5379 已修复截断方式。 |

**总体评价**：用户对项目功能推进整体是积极态度，但近期出现了若干「更新引入回归」的苗头，#4864 和 #5377 都指向这一点。建议维护者在每次版本发布前增加针对工具参数序列化和会话状态迁移的回归测试。此外，#4467 和 #5402 所反映的「优化已有功能而非不断新增」的呼声也值得注意——用户更在意的是现有核心链路（技能管理、token 控制）的稳定性与可控性。

## 8. 待处理积压

以下为长期未解决、但影响面较大的 Issue 或 PR，建议维护者优先关注：

| Issue/PR | 创建时间 | 状态 | 积压原因 / 提醒 |
|---|---|---|---|
| [#4864](https://github.com/HKUDS/nanobot/pull/4864) Endless loop in complete_goal | 2026-07-09 | Open，1个月+ | 社区持续关注（5 评论），属用户阻塞性问题。建议优先给出排查/修复计划或 workaround。 |
| [#4467](https://github.com/HKUDS/nanobot/pull/4467) Dream 应更新既有 skills | 2026-06-23 | Open，近2个月 | 长期功能请求，反映核心用户真实需求。建议纳入路线图评估。 |
| [#5305](https://github.com/HKUDS/nanobot/pull/5305) exec.allowPatterns 绕过 | 2026-08-09 | Open，7天 | 安全漏洞，无公开 fix。建议紧急处理并评估是否需要安全公告。 |
| [#5402](https://github.com/HKUDS/nanobot/pull/5402) Token consolidation 不触发 | 2026-08-16 | Open，刚提交 | 虽为新 Issue，但因与 #5377 同源且影响 token 成本，建议尽快评估与 #5379 的覆盖范围差异。 |

**建议动作**：

1. 对 **#5305** 启动安全评审流程，评估影响范围并准备紧急修复发布。
2. 对 **#4864** 给出明确的排查进展或临时 workaround，降低用户等待焦虑。
3. 对 **#5402 + #5377** 进行系统性排查 consolidation 的 token 估算偏差问题，评估是否需要替换估算方案。
4. 将 **#4467** 加入路线图，与 [#5291](https://github.com/HKUDS/nanobot/pull/5291)（subagent 转录持久化）一起考虑「会话/技能持久化」模块的优先级。

---

*数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库，统计时间窗口为 2026-08-15 至 2026-08-16。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-16

## 1. 今日速览

项目过去24小时保持高度活跃，共产生100条 Issue/PR 更新（50条 Issue，50条 PR），其中41条新开/活跃 Issue，36条 PR 待合并。今日无新版本发布。值得关注的是，多项长期存在的 Windows 平台更新锁文件问题（#83569、#77394）已有关闭或持续跟进，且安全类 PR 集中涌现——包括 approval 拒绝规则强化（#76063）、SSRF 防护（#71735）、管道远程内容执行检测（#87362）等，表明维护团队正在系统性地加固安全边界。此外，会话状态（session-state）相关修复仍是今日 PR 主旋律（#86784、#86785、#86786、#87326），项目正积极推进多客户端并发会话的稳定性与压缩机制优化。

## 3. 项目进展

今日合并/关闭了14个 PR，以下为值得关注的进展：

- **PR #32962 已合并 (fix(mcp))**：WSL2 子进程 PID 跟踪 + MCP 子进程韧性修复（salvage #10250）。解决 WSL2 下 /proc children 文件为空导致 MCP 快照功能失效的问题，并增强 MCP 子进程的容错能力。对应 Issue #32962 同步关闭。

- **PR #87367 (fix(mcp))**：当 /proc children 文件为空时回退到 `ps --ppid` 方案，修复 WSL2 内核下 `_snapshot_child_pids()` 永远返回空集合的缺陷。这是对 #32962 合并前的补充提交。

- **已关闭 Issue #78647 (COMPLETE)**：大型文件分解史诗任务（20/20 完成）正式关闭。该 Epic 覆盖仓库级 god-file 分片治理，标记为 "all god files are sharded, never reverted"，表明项目架构重构的阶段性目标已达成。

- **已关闭 Issue #83683 (P1 regression)**：Windows 桌面端重启后 gateway 未被重新拉起，导致 WeChat/QQ/Telegram 静默失联的回归问题已关闭，相关修复已合入。

- **已关闭 Issue #83569 (P1)**：Windows 上 `hermes update` 自锁 `cryptography._rust.pyd` 导致更新失败的问题已关闭，但 #77394 指出修复未覆盖 respawned gateways，仍在追踪中。

- **已关闭 Issue #50530**：google-antigravity 遗留 P2 集成问题汇总（子代理崩溃/并发掉线/400错误）已关闭，标注 `cannot-reproduce`。

整体来看，项目在 MCP 兼容性、会话状态管理、桌面端稳定性三个方向上取得了实质推进。36个 PR 仍待合并，其中多个安全相关 PR（#76063、#71735）已持续逾两周，值得关注。

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 状态 | 核心诉求 |
|------|----------|--------|------|----------|
| 1 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | 79 | CLOSED | 大文件分解 Epic 收官，社区对 god-file 治理的长期关注 |
| 2 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 37 | OPEN | Skills 索引过期（29.8h > 26h 限制），自动化探针持续报警，已近一月未修复 |
| 3 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | 33 | CLOSED | Windows 桌面端重启后 gateway 不复活的 P1 回归，社区关注度高 |
| 4 | [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) | 21 | OPEN | 持久会话内存 + 跨会话搜索 + 自动压缩的功能请求，四月提出至今未实现 |
| 5 | [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | 19 | CLOSED | 压缩后 agent flush 不采用 live continuation，误导性"磁盘满"错误 |

**热点分析**：社区对**会话状态持久化与恢复**的诉求最为强烈——#8457（持久会话内存）、#82001（压缩后会话延续）、#66616（索引过期）均指向基础设施的稳定性与用户体验断层。特别是 #8457 自4月提出以来积累21条评论仍未获得实现，而 #87326 PR（lean tail mode + 压缩召回评估）可能部分回应此需求。另外 #66616 的 Skills 索引过期问题已持续30天未修复，自动化巡检持续报警，对开发者体验有直接影响，建议优先处理。

## 5. Bug 与稳定性

### P1（严重）

- **[#87329](https://github.com/NousResearch/hermes-agent/issues/87329) (OPEN, 2026-08-16)** — `hermes mcp login <server>` OAuth 回调端口冲突导致无头主机上无法完成交互登录（v0.20.1 回归，#5344 引入）。单次调用发出两个授权 URL，随后绑定回调端口即崩溃。暂无 fix PR。

- **[#77394](https://github.com/NousResearch/hermes-agent/issues/77394) (OPEN, 2026-08-03)** — Windows `hermes update` 在 main 分支仍失败：暂停的 gateway 进程仍持有 `_rust.pyd` 锁，#73684 的修复未覆盖 respawned gateways（v0.19.1 验证）。已有修复 PR #83569 合并但在部分场景仍复现，持续追踪中。

- **[#51327](https://github.com/NousResearch/hermes-agent/issues/51327) (OPEN, 2026-06-23)** — Linux 桌面端从 .desktop 启动器运行时，Electron chrome-sandbox 缺少 setuid 4755 导致静默失败（无窗口无报错）。已近两个月未关闭。

### P2（中等）

- **[#87292](https://github.com/NousResearch/hermes-agent/issues/87292) (OPEN, 2026-08-15)** — 慢速本地模型（>16 TPS）出现两类超时：WinError 10053 连接中止 + "Provider has been unresponsive"。暂无 fix PR。

- **[#87356](https://github.com/NousResearch/hermes-agent/issues/87356) (OPEN, 2026-08-16)** — `cronjob` 工具的 update schema 缺少 model/provider 参数（虽然 handler 支持），导致 agent 无法通过工具修复 drift-guard。

- **[#81048](https://github.com/NousResearch/hermes-agent/issues/81048) (OPEN, 2026-08-07)** — Tier 1 安全缺陷：审批超时被误认为是用户明确拒绝。静默应保持 pending 而非 collapse to deny。

- **[#86027](https://github.com/NousResearch/hermes-agent/issues/86027) (OPEN, 2026-08-14)** — SQLite 3.46.1 创建的 `messages_fts_trigram` FTS5 索引在 SQLite 3.53.4 下被报告为 malformed，影响 v0.18.2 → v0.20.1 升级路径。标记为 duplicate。

- **[#83379](https://github.com/NousResearch/hermes-agent/issues/83379) (OPEN, 2026-08-10)** — 部分模型（Qwen 为主）把假工具调用写成文本而非结构化 `tool_calls`，导致解析失败。

### P3（较低）

- **[#84350](https://github.com/NousResearch/hermes-agent/issues/84350) (OPEN)** — `hermes kanban show` 在纯文本模式下崩溃（`Cannot operate on a closed database`）。

- **[#66746](https://github.com/NousResearch/hermes-agent/issues/66746) (OPEN, 👍1)** — Telegram Rich Messages 将裸 `$` 美元金额解析为 LaTeX 数学公式，导致财务数据显示错乱。

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 相关 PR | 纳入可能性 |
|----------|-------|---------|------------|
| **持久会话内存 + 跨会话搜索 + 自动压缩** | [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) | #87326 (lean tail mode + 压缩召回评估) | **较高** — #87326 直接回应压缩议题，若 land 后可能推动 #8457 实现 |
| **Discord 功能对齐 (API v10)** | [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | #87358 (Discord 线程速率限制修复) | **较高** — meta-issue 驱动多项子 PR，项目有系统性推进计划 |
| **自动推理模式（ChatGPT 风格）** | [#40306](https://github.com/NousResearch/hermes-agent/issues/40306) | 无 | 较低 — 6月提出后仅2条评论，无 PR 信号 |
| **per-task 模型/provider 覆盖（batch delegate）** | — | [#87366](https://github.com/NousResearch/hermes-agent/pull/87366) | **高** — 已提交 PR，混合廉价/前沿模型的用法有明确价值 |
| **技能可发现性增强**（ghost suggestions/悬停描述/开关） | — | [#86940](https://github.com/NousResearch/hermes-agent/pull/86940) | **高** — 直接改善 CLI/Desktop 日常体验，已提交 PR |
| **签名短期下载票据**（外部查看器访问大门控 dashboard） | — | [#87145](https://github.com/NousResearch/hermes-agent/pull/87145) |**中** — 针对 WPS Office 等场景，解决真实用户痛点 |

## 7. 用户反馈摘要

- **会话状态/多客户端并发仍是痛点**：多个 Issue（#69107、#70694、#8457）反映了 TUI 与 REST 网关客户端同时操作同一 session 时，缺乏同步提示、turn finality 语义丢失等体验问题。用户 Crong-Gabia 明确表示"获得对方写入了新轮次的指示"是基本需求。

- **压缩后体验断裂**：Issue #82001 的用户 Al3xand3r1987 遇到压缩后 agent turn 失败且被误导性提示"磁盘满"的问题，尽管磁盘健康。这类误导性错误消息严重损害信任感。

- **Windows 用户持续承压**：#77394 和 #83569 暴露了 Windows 平台上更新流程的深层锁冲突问题。用户 AlexanderKuzikov 指出即使官方修复已合入，respawned gateway 仍可复现锁定。

- **安全机制需更精细**：#81048 的用户 Red-MPL 指出审批超时被误判为显式拒绝，在红色决策语义下（silence 应保持 pending）这是 Tier 1 安全缺陷。

- **对慢速本地模型的支持不足**：#87292 的用户 BadWolf-63 反馈 >16 TPS 的本地模型遭遇连接中断和 provider 无响应，这类场景对本地优先用户非常重要。

## 8. 待处理积压

### 长期未响应的关键 Issue（超过 30 天未关闭）

| Issue | 创建时间 | 持续天数 | 严重度 | 说明 |
|-------|----------|----------|--------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) SKills 索引过期 | 2026-07-18 | **29天** | P3 | 自动化巡检持续报警，Skills Hub 依赖的索引已超时未重建。近一月未得到修复 |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) Linux 桌面静默失败 | 2026-06-23 | **54天** | P1 | Electron sandbox 权限问题，用户点击图标后无任何反馈。至今无 fix |
| [#58619](https://github.com/NousResearch/hermes-agent/issues/58619) 桌面端无限 serve 进程 | 2026-07-05 | **42天** | P2 | 重连时旧进程不清理，API 错误时将以每 15-30 分钟一个的速度累积。已有 `--replace` 建议，未实现 |
| [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) OAuth MCP 中途掉线 | 2026-06-20 | **57天** | P2 | Honeycomb MCP 在长会话中 drop，`RuntimeError` + 120 秒挂起，严重影响生产使用 |
| [#40306](https://github.com/NousResearch/hermes-agent/issues/40306) 自动推理模式 | 2026-06-06 | **71天** | P3 | 功能需求，社区仅2条评论，无实施信号 |

### 长期未合并的 PR

| PR | 创建时间 | 持续天数 | 说明 |
|----|----------|----------|------|
| [#76063](https://github.com/NousResearch/hermes-agent/pull/76063) 审批拒绝规则强化 | 2026-08-01 | **15天** | 安全相关，关闭 #76037。quote-aware 命令前缀匹配，无明显阻塞原因 |
| [#71735](https://github.com/NousResearch/hermes-agent/pull/71735) SSRF 防护 | 2026-07-26 | **21天** | 安全相关，堵住 dashboard 端点探测云元数据的 SSRF 路径 |

---

*报告生成时间：2026-08-16 | 数据来源：Hermes Agent GitHub 仓库 (NousResearch/hermes-agent)*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-08-16

## 1. 今日速览

PicoClaw 项目在 2026-08-15 至 08-16 期间整体活跃度偏低：过去 24 小时无新 Issue 或关闭记录，Issue 最新动态停留在 0 条；PR 方面有 2 条处于开放待合并状态，均为 8 月 7 日创建且已 8 天未获后续推进。无新版本发布。项目今日处于**低活跃**状态，维护节奏趋缓，但 2 条待合并 PR 分别涉及 AI 对话系统的性能优化与 WhatsApp 通道的稳定性修复，值得关注其后续合并进展。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无 PR 被合并或关闭，故核心分支无实质变更。处于待合并状态的 2 条 PR 分别代表两条近期推进方向：

- **对话性能优化（PR #3321）**：将每次请求的动态上下文块（当前时间、运行时、会话信息等）从系统消息前部移至历史之后，以保留 prefix caching 的缓存命中率。该修复有助于降低每轮对话推理的 token 消耗与延迟，对个人 AI 助手场景的响应速度有直接收益。
- **WhatsApp 通道修复（PR #3320）**：升级 `whatsmeow` 依赖以解决客户端版本过期（错误码 405）导致的原生 WhatsApp 通道连接即断线问题，属于外部依赖驱动的适配性修复。

两者均已在 8 月 7 日发出但至今未被 review/合并，若本周内仍无维护者推进，将对项目在对话缓存性能与多通道接入完整性方面形成阶段性停滞。

## 4. 社区热点

今日无新增 Issue 或评论活动，两条开放 PR 的评论数均为 undefined（无实际讨论记录），未产生社区互动热点。值得注意的是 PR #3321 与 #3320 的作者均为个人外部贡献者（grrowl），且均为功能性实质修复，社区对多通道（WhatsApp）接入和对话成本优化的诉求正通过这些 PR 间接体现，但缺少维护者的及时响应可能影响外部贡献者持续参与意愿。详见 [PR #3321](https://github.com/sipeed/picoclaw/pull/3321)、[PR #3320](https://github.com/sipeed/picoclaw/pull/3320)。

## 5. Bug 与稳定性

今日无新 Bug 报告。但 PR #3320 揭示了一个**已知且持续存在**的稳定性问题：

- **严重程度：高** — WhatsApp 原生通道因客户端版本被服务端拒绝（错误码 405），表现为 socket 连接成功约 5 秒后被断开且无自动重连，致使该通道持续不可用。此问题由外部依赖版本过旧触发，已有对应修复 PR（#3320 待合并），但尚未落地，用户侧若依赖 WhatsApp 通道则目前处于中断状态。详见 [PR #3320](https://github.com/sipeed/picoclaw/pull/3320)。

## 6. 功能请求与路线图信号

当日无新功能请求。从待合并 PR 可提炼两条路线图信号：

- **对话成本与性能优化**（PR #3321）暗示当前上下文拼接方式已影响缓存效率，项目小组正关注长对话场景下的推理开销问题，这可能是后续版本优化服务端对话引擎的前奏。
- **多通道兼容性**（PR #3320）表明项目在持续适配 WhatsApp 等第三方 IM 平台的协议变更，外部通道接入的可靠性是当前迭代重点之一。若该 PR 被合入，建议将 whatsmeow 版本锁定策略纳入维护文档，避免同类问题复发。

## 7. 用户反馈摘要

今日无新增 Issue 评论，缺乏可直接引用的用户声音。但据现有 PR 描述可间接推断：

- 使用 WhatsApp 通道的用户正面临通道不可用的实际问题（连接即断、无重连），影响日常消息收发场景；
- 长对话场景的高 token 消耗是真实痛点，外部贡献者主动提出优化方案意图改善使用成本；
- 两条 PR 均出自同一外部贡献者，提示社区存在主动参与意愿，但 8 天无维护者回应可能削弱其后续贡献动力。

## 8. 待处理积压

| 项目 | 说明 | 状态 |
|---|---|---|
| [PR #3321](https://github.com/sipeed/picoclaw/pull/3321) | 移动动态上下文至历史之后以保留 prefix caching，已创建 9 天 | 待维护者 review/合并，存在 stale 标记 |
| [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) | 升级 whatsmeow 修复 WhatsApp 通道 405 错误，已创建 9 天 | 待维护者 review/合并，存在 stale 标记；对应线上通道持续受影响 |

两条 PR 均已 8 天以上未被操作且被标记 stale，建议维护者优先评审 PR #3320（涉及对外可用通道的修复），其次推进 PR #3321（性能优化）以避免外部贡献流失。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-16

## 今日速览

NanoClaw 今日活跃度较高，集中在 PR 提交层面：过去 24 小时共有 22 条 PR 更新，其中 3 条已合并/关闭，19 条待合并。核心贡献者 gavrielc 连续提交了 12 个 PR，覆盖频道注册拦截、跨会话上下文、权限策略扩展、容器稳定性修复等多个领域，显示项目正处于功能快速迭代期。Issue 方面无新增或更新，社区讨论热度较低。今日无新版本发布。

---

## 项目进展

过去 24 小时共合并/关闭 3 条 PR：

| PR | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) | fix(poll-loop): stopped loops leaked their active query's follow-up poller | ✅ 已关闭（已修复） | 修复了轮询循环在停止后遗留活动查询的 500ms 后续轮询器问题，根因是 `runPollLoop` 仅在迭代间检查 `config.signal`，而循环通常停在保持开启的流上 |
| [#37](https://github.com/nanocoai/nanoclaw/pull/37) | Rename to DotClaw and switch from WhatsApp to Telegram | ✅ 已关闭 | 将项目从 nanoclaw 重命名为 dotclaw，并用基于 Telegraf 的 Telegram 机器人替换 WhatsApp 集成（注：该项目为早期 PR，今日关闭） |
| [#3269](https://github.com/nanocoai/nanoclaw/pull/3269) | feat(channels): add Telegram channel integration | ✅ 已合并 | 新增 Telegram 频道适配器（`@chat-adapter/telegram`），包含配对流程和 Markdown 清理器。1483 个测试全部通过，TypeScript 构建干净。这是标记者为 rudysmets7-strid 的 PR，已合入主分支 |

**推进评估**：Telegram 频道集成（#3269）的合并是今日最实质性的功能落地，将直接扩大 NanoClaw 可接入的通讯平台覆盖面。轮询循环泄漏修复（#3268）则消除了一个在长时间运行会话中可能积累资源的稳定性隐患。

---

## 待合并 PR 矩阵（核心贡献者 gavrielc 系列）

以下 PR 均于 2026-08-15 创建，为同一作者连续提交的功能批次，按编号聚类：

**频道与适配器层**
- [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) — 频道注册表热启动：新增 `startChannelAdapter(key)`，重放启动四步骤，让新注册的适配器无需重启即可激活
- [#3261](https://github.com/nanocoai/nanoclaw/pull/3261) — 可选适配器能力扩展：`setTyping` 支持状态行与来源标记（工具推导 vs 智能体撰写）、`setThreadTitle`、`setSuggestedPrompts`
- [#3262](https://github.com/nanocoai/nanoclaw/pull/3262) — Chat SDK 桥接层的 DM 线程规范化：支持应用上下文捕获、DM 线程 ID 归一化、`dm-opened` 钩子

**权限与会话管理层**
- [#3266](https://github.com/nanocoai/nanoclaw/pull/3266) — 频道注册卡片拦截缝隙：模块可按频道类型注册拦截器，在注册卡构建前消费升级
- [#3260](https://github.com/nanocoai/nanoclaw/pull/3260) — 新增 `decline_notify` 未知发件人策略：礼貌拒绝 + 单行通知所有者，无需审批卡片
- [#3256](https://github.com/nanocoai/nanoclaw/pull/3256) — `messaging_groups.detached_at` 迁移（migration 022）：标记 bot 被移出会话的时间，投递层拒绝发送至已脱离的会话
- [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) — 修复出站投递解析错误：正确解析发送者自身的频道行而非任意兄弟实例

**跨会话与容器稳定性**
- [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) — 跨会话上下文模块：会话消息扇出、DM 回填、回声裁剪、新增 `ncl sessions history` 命令
- [#3254](https://github.com/nanocoai/nanoclaw/pull/3254) — 两阶段入站批次选择：上下文行不再挤占或驱动轮次
- [#3252](https://github.com/nanocoai/nanoclaw/pull/3252) — 修复空闲容器无心跳文件时豁免绝对上限杀死的问题
- [#3259](https://github.com/nanocoai/nanoclaw/pull/3259) — 技能应用序号剥离、无头浏览器 URL 暴露、继承脚本提取三个小修复

**其他贡献者**
- [#3253](https://github.com/nanocoai/nanoclaw/pull/3253)（simonechecchia）— 修复 opencode 组推理强度未在模型配置中生效
- [#3251](https://github.com/nanocoai/nanoclaw/pull/3251)（DawoudIO）— 修复 rate-limit 期间心跳停滞导致容器被误杀
- [#3250](https://github.com/nanocoai/nanoclaw/pull/3250)（chiptoe-svg）— 移除遗留的 Markdown 清理器（将粗体降级为斜体）

---

## 社区热点

今日无新增 Issue，PR 的评论数据未明示具体数值，难以排序热点。从 PR 类型和内容分布看，**Telegram 集成**（[#3269](https://github.com/nanocoai/nanoclaw/pull/3269)）与**跨会话上下文**（[#3257](https://github.com/nanocoai/nanoclaw/pull/3257)）是两个最受关注的方向。前者意味着项目正在扩展实际可用的通讯频道；后者则直接回应了多会话协作场景的需求——消息在不同会话间的扇出与回填是群组智能体的核心诉求。

---

## Bug 与稳定性

按严重程度排列：

| 严重度 | 问题描述 | 状态 |
|---|---|---|
| 🔴 **高** | **心跳停滞致容器误杀**（[#3251](https://github.com/nanocoai/nanoclaw/pull/3251)）：Claude API 限流期间心跳文件仅在接收 API 事件时更新，导致 30+ 分钟停滞，可触发误判的 stale-container 杀死 | 已有修复 PR（DawoudIO） |
| 🔴 **高** | **空闲容器豁免上限杀死**（[#3252](https://github.com/nanocoai/nanoclaw/pull/3252)）：无 `.heartbeat` 文件的运行中容器可永久豁免绝对上限杀死 | 已有修复 PR（gavrielc） |
| 🟡 **中** | **轮询循环泄漏**（[#3268](https://github.com/nanocoai/nanoclaw/pull/3268)）：停止的循环遗留活动查询的后续轮询器（500ms 周期），已修复 | ✅ 已关闭 |
| 🟡 **中** | **入站批次的上下文积压**（[#3254](https://github.com/nanocoai/nanoclaw/pull/3254)）：`getPendingMessages` 按最新 N 条选择，若上下文（trigger=0）行比到期的任务行更新，任务会被挤出批次导致唤醒但工作永远不达 | 已有修复 PR（gavrielc） |
| 🟡 **中** | **Discord 附件不可读**（[#2752](https://github.com/nanocoai/nanoclaw/pull/2752)）：粘贴的文本（自动转为 `message.txt`）和图片仅以 `[file: …]` 占位符到达智能体，无可读字节或路径 | 已有修复 PR（chubbicorn245），待合并，创建于 2026-06-12 |
| 🟢 **低** | **Telegram 粗体降级为斜体**（[#3250](https://github.com/nanocoai/nanoclaw/pull/3250)）：遗留的 Markdown 清理器将 `**bold**` 渲染成 _italic_ | 已有修复 PR（chiptoe-svg），待合并 |

---

## 功能请求与路线图信号

今日无用户提交的正式功能请求（Issues 为 0），但 gavrielc 的 PR 批次本身即是路线图的强信号，可预示下一版本的优先级：

1. **多频道/多身份支持深化**：`detached_at` 迁移（#3256）、实例解析修复（#3255）和热启动适配器（#3263）共同指向一个更健壮的多频道、多 bot 身份共存架构
2. **群组多会话协作**：跨会话上下文模块（#3257）配合 DM 线程规范化（#3262），表明群组场景下的上下文同步是核心方向
3. **权限策略精细化**：`decline_notify` 第四种未知发件人策略（#3260）和注册卡片拦截缝隙（#3266），说明权限管理正在从"一刀切"走向可配置化
4. **容器生命周期治理**：三个容器相关修复（#3251、#3252、#3268）显示稳定性仍是当前阶段的重点投入

---

## 用户反馈摘要

今日无新 Issues 或评论数据可供提炼。仅能从 PR 摘要中获取间接信号：

- [DawoudIO（#3251）](https://github.com/nanocoai/nanoclaw/pull/3251)明确描述了生产环境痛点：**API 限流持续 30+ 分钟时容器被误杀**，说明有用户在长时间运行场景中遭遇了实际的稳定性问题
- [chiptoe-svg（#3250）](https://github.com/nanocoai/nanoclaw/pull/3250)指出的**粗体→斜体**问题表明 Telegram 消息格式正确性已被使用者注意并愿意提交修复
- [chubbicorn245（#2752）](https://github.com/nanocoai/nanoclaw/pull/2752)描述了 Discord 附件在智能体中"裸引用"的问题——**有字节无路径**，直接导致智能体无法处理文件内容，该 PR 自 2026-06-12 起已积压两个月

---

## 待处理积压

| 项目 | 创建时间 | 积压时长 | 建议 |
|---|---|---|---|
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) — Discord 附件 URL-only 暂存修复（chubbicorn245） | 2026-06-12 | **65 天** | 功能性问题直接影响 Discord 用户的使用体验，且修复逻辑已完整（chat-sdk 桥接层下载附件后暂存），建议尽快安排 review 并合入 |
| 其余 18 条待合并 PR 均为 2026-08-15 创建 | 1 天 | 正常范围内，但数量集中（19 条），建议维护者按"容器稳定性 → 权限 → 频道"的优先级分批合入，避免长时间堆积产生冲突 | — |

> **整体健康度评估**：项目处于活跃开发期，提交节奏快、覆盖面广，但 Issues 侧活跃度为零可能意味着外部用户反馈渠道利用率不足。当前最大的风险是 PR 积压数量（19 条）集中在单日涌入，建议维护团队优先处理修复类 PR（#3251、#3252、#3254），再处理功能扩展批次（#3256~#3266）。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期**: 2026-08-16 | **数据区间**: 2026-08-15 ~ 2026-08-16

---

## 1. 今日速览

NullClaw 项目在过去 24 小时内保持温和活跃：共新增 **1 条 Issue**（#988，功能增强类）和 **1 条 PR**（#987，Agent 循环优化），均于 8 月 15 日创建并处于开放状态。无新版本发布，无 PR 合并或 Issue 关闭，项目整体处于"提交活跃、合并待办"的状态。值得关注的是 #987 涉及 Agent 系统提示词分片与历史压缩优化，属于基础设施层面的性能改进，建议维护者优先审阅。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**今日无已合并/关闭的 PR**，但有一项重要 PR 处于待审状态：

- **[#987] feat(agent): loop hygiene for long local tool-heavy runs** — 作者: vernonstinebaker
  - 将系统提示词拆分为"缓存友好的稳定前缀 + 可变时间戳尾部"（新增 `buildStablePrefix`、`buildVariableTail`、`stablePrefixHash` 函数），有望提升长会话场景下的缓存命中率
  - 新增工具输出压缩模块（`result_compress.zig`），在注入历史前压缩工具输出，同时 observer 日志仍保留完整输出
  - 增加每轮相同调用的循环防护逻辑，提升长时间、本地工具密集场景下的稳定性

  **评估**: 若合并，将直接改善 Agent 在长时间运行、工具调用频繁场景下的 token 消耗与上下文管理效率，属于对核心执行路径的实质优化。
  [查看 PR](https://github.com/nullclaw/nullclaw/pull/987)

---

## 4. 社区热点

今日无高讨论量 Issue/PR（#988 和 #987 均为 0 条评论、0 个 👍）。相对突出的是：

- **[#988] [enhancement] proxy support** — 用户 anpic 提出为 providers 增加 HTTP(s) 和 SOCKS(5h) 代理支持。

  **诉求分析**: 该需求表明有用户在网络受限或需要代理访问 provider API 的环境中部署 NullClaw。虽然当前评论数为 0，但代理支持对于企业/受限网络环境下的部署是常见刚需，建议关注后续讨论热度。
  [查看 Issue](https://github.com/nullclaw/nullclaw/issues/988)

---

## 5. Bug 与稳定性

**今日无 Bug 报告**。已提交的 PR #987 中包含的工具输出压缩与循环防护改进，暗示开发者在主动预防长时运行场景下的稳定性问题（如上下文膨胀、重复调用），属于前瞻性修复而非用户报告的问题。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 可能纳入下版本的理由 | 冲突/协同 |
|---------|------|---------------------|----------|
| HTTP(s) + SOCKS(5h) 代理支持 | Issue #988 | 部署灵活性需求，实现成本相对可控（网络层改造），对特定用户群价值高 | 与现有 provider 架构相关，需评估各 provider 传输层抽象 |

**路线图关联判断**: 由于 #988 刚创建且无讨论热度，短期内纳入的可能性较低；相比之下 PR #987 已提交具体实现，更可能先进入主分支。代理支持或可在后续版本中作为网络层增强项纳入。

---

## 7. 用户反馈摘要

今日 Issue/PR 均无评论区内容，**无直接用户反馈文本可用**。从提交内容本身可推测的使用场景信号：

- PR #987 面向"long local tool-heavy runs"，表明有用户/开发者在长时间本地工具链场景下遇到了上下文膨胀或性能退化问题（不排除为开发者自身驱动的优化）
- Issue #988 表明存在代理网络环境下的部署需求

项目维护者可通过在 #988 下提问（部署环境、期望支持的具体 provider 列表）来获取更精确的用户画像，帮助评估该需求的优先级。

---

## 8. 待处理积压

今日数据未提供 Open Issues/PRs 的全量列表展示其年龄分布，但从当前可见数据来看：

- **PR #987** — 创建于 8 月 15 日，0 条评论，等待维护者审阅。考虑到其改动涉及核心执行路径（系统提示词拆分、历史压缩），建议优先安排 Code Review，避免长时间滞留。
  [查看 PR](https://github.com/nullclaw/nullclaw/pull/987)
- **Issue #988** — 刚创建，尚不属于"积压"，但若长期无人回应，建议维护者至少给出是否接受的初步回应，避免社区冷落感。

---

**项目健康度总结**: 今日活动量中等偏低（1 入 1 出，无合并），处于平稳迭代节奏。没有 bug 洪水，PR #987 展示了主动优化意愿，项目整体健康状况良好。当前最需关注的是确保 #987 不被搁置太久，以及在 #988 上回应社区需求信号。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-08-16

> 数据来源：IronClaw (github.com/nearai/ironclaw) GitHub 仓库
> 统计周期：过去 24 小时（截至 2026-08-16）

---

## 1. 今日速览

项目今日处于**高频开发与稳定性治理并行**的状态。过去 24 小时内 Issue 更新 27 条（其中 21 条关闭）、PR 更新 12 条（5 条合并/关闭），无新版本发布。**最值得关注的信号是**：昨日合并的 PR #7634（prepared-context turns 切换）触发了 5 个新的跟进 Issue（#7671-#7675），均由核心贡献者提交，指向性能边界与架构治理问题；与此同时，性能优化系列（Tier 1/Tier 2，epic #7591）持续收尾，3 个相关 PR 已合并。社区活跃度较高，但 Issue 评论数整体偏低（多数仅 0-1 条），讨论深度有待观察。整体项目健康度良好，正处于"大功能落地 + 性能打磨"的阶段。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭了 5 个 PR，核心推进集中在 **性能优化（减少数据库写入放大）** 和 **架构收敛** 两个方向：

**性能优化（epic #7591 系列）— 已合并**

- **[PR #7628] perf(processes): remove heartbeat journal churn** — 已关闭/合并。实现了 #7591 中独立安全的心跳子集：停止为每次心跳追加 `ProcessJournalKind::Heartbeat` 日志行（对应 #7593），心跳租约时间戳以物化进程行为准，并将跑者心跳间隔从 5s 调整为 15s（对应 #7599）。预计每个长驻进程每天减少约 2,880 行永久日志，后台心跳负载降低约 67%。
- **[PR #7629] perf: reduce trigger and outbound state writes** — 已关闭/合并。将 trigger 运行历史保留期裁剪从每次 Running 状态更新移至初始 fire claim（对应 #7595），同时在恢复路径保留完成时裁剪以保证严格保留语义。预计每次触发减少 2-3 次无条件相关子查询 DELETE。
- **[PR #7676] perf(threads): coalesce thread index touches** — 已关闭/合并。将突发性线程活跃触摸聚合并为有界写入，按配置间隔刷新最新待写时间戳以保持侧边栏优先级，通过单调 CAS 更新保证多 worker 正确性（对应 #7596，预计每次 turn 最多 7 次 CAS 行重写收敛为每间隔 1 次）。

**架构收敛与工具链 — 已合并**

- **[PR #7634] feat(unbound-turns): complete the switchover to prepared-context turns** — 已关闭/合并（作者 BenKurrek）。完成 unbound-turns 模型的全面切换，#7633 中记录的每个 follow-up 均在此交付，并运行了 71 条符合性审计。该 PR 同时是今日 5 个新 Issue 的触发源。
- **[PR #7670] chore(agents): refresh codebase knowledge graph** — 已关闭/合并（ironclaw-ci bot）。CI 自动刷新代码库知识图谱基准快照，属例行维护。

**整体评估**：性能优化系列稳步推进，Tier 1 的三项"纯浪费"削减已全部落地；unbound-turns 切换的完成标志着架构演进的重要里程碑（但其后续影响正在扩散，见下文）。

---

## 4. 社区热点

今日 Issue 总体评论数偏低，但以下条目因讨论密度或影响面值得关注：

- **[Issue #467] Trajectory benchmark system for agent quality evaluation**（OPEN，4 条评论）— [链接](https://github.com/nearai/ironclaw/issues/467)
  这是今日评论最多的 Issue（尽管创建于 3 月初）。提议构建基于真实用户场景 + 真实 LLM 调用的轨迹评测系统，用硬断言（工具选择、响应内容、成本、延迟）+ LLM-as-judge 双层标准评估。该 Issue 跨 5 个月仍保持活跃，反映社区对**可量化的 Agent 质量评估体系**的持续关注。

- **[Issue #3236] [Reborn] Define same-thread follow-up and steering policy**（CLOSED，3 条评论）— [链接](https://github.com/nearai/ironclaw/issues/3236)
  涉及 Reborn 同线程后续消息与显式转向（如 `/btw`）的语义定义。虽已关闭，但作为 P2 建议级 Issue，暗示 **对话控制语义** 是社区反复触碰的难点。

- **[PR #7679] fix(live-qa): stop harness bugs reddening green canary runs**（OPEN，XL 规模）— [链接](https://github.com/nearai/ironclaw/pull/7679)
  报告 Live Canary 已连续 30/30 次全红，但根因是 **harness 缺陷误伤了正确产品行为**（如 `qa_10h_slack_email_hallucination_guard` 等用例的失败率数据）。这反映出测试基础设施的可靠性问题已成为影响项目信心的重要因素，值得优先关注。

---

## 5. Bug 与稳定性

**高优先级（影响线上/阻塞运行）**

- **[Issue #5239] Scheduler treats stale terminal heartbeat as runner failure**（已关闭）— [链接](https://github.com/nearai/ironclaw/issues/5239)
  Railway 日志显示 `turn_scheduler` 在运行已完成（终态）后将过期心跳误判为调度失败，触发错误的终止路径并尝试 `Co...`（恢复操作）。虽已关闭但值得确认修复方式。

- **[Issue #5237] Reborn hosted debug logging floods Railway with Cranelift/Wasmtime compiler DEBUG output**（已关闭）— [链接](https://github.com/nearai/ironclaw/issues/5237)
  设置 `IRONCLAW_REBORN_LOG=debug` 时，低层 Wasmtime/Cranelift 编译器目标产生高量 DEBUG 日志，可能淹没 Railway 日志系统。

**中优先级（功能缺陷/数据正确性）**

- **[Issue #6821] IronHub search: free-text matches read as a complete catalog listing**（已关闭）— [链接](https://github.com/nearai/ironclaw/issues/6821)
  Agent 对"IronHub 上可安装什么"的问答仅报告 3 个工具（实际签名目录有 18 个），且列出的 21 个技能中有 20 个并非目录条目。**信息检索语义严重偏离**，影响用户体验。

- **[Issue #6835] MCP auth failures never raise a re-auth gate**（已关闭）— [链接](https://github.com/nearai/ironclaw/issues/6835)
  `McpError::AuthRequired` 被归类为 `Client` 而非 `AuthRequired`，导致 MCP 鉴权失败不会触发重新认证门控。同条件下 WASM lane（测试已固定）与 MCP lane 行为相反。

- **[Issue #4992] Local-dev SSO access mismatch can make Railway automations fail before run/thread creation**（已关闭）— [链接](https://github.com/nearai/ironclaw/issues/4992)
  Railway 托管的 local-dev 实例可创建定时自动化任务，但触发时在 turn run/thread 创建前就失败（WebUI 显示 `ERROR` / `No thread attached` / `0% visible runs`）。

**低优先级（代码卫生/潜在风险）**

- **[Issue #6726] extension host: `register_generic_channel_outbound_targets` can be a no-op with every test tier green**（已关闭）— [链接](https://github.com/nearai/ironclaw/issues/6726)
  该函数替换为 no-op 后所有测试层仍通过，是 #6681 审计中唯一存活的 mutant（52 个 mutant 中 39 个被捕获、12 个不可行）。**测试覆盖存在盲区**。

**今日新增 Bug（来自 #7634 review 跟进）**

- **[Issue #7675] E2E: qa_6c gmail-to-sheet flake cascades across the whole provider-contracts session**（OPEN）— [链接](https://github.com/nearai/ironclaw/issues/7675)
  两个独立问题：live Gmail/emulate leg 间歇性能力失败；单个 flake 级联导致整个 provider-contracts 会话变红。

**修复 PR 状态提示**：今日合并的 #7628/#7629/#7676 分别覆盖了 #7593/#7595/#7596 的修复；#7675/#7671 等新 Issue 暂未见对应修复 PR。

---

## 6. 功能请求与路线图信号

今日未收到来自外部用户的新功能请求，但以下内部 Issue/PR 提供了清晰的路线图信号：

**大概率进入下一版本**

- **[PR #7678] perf(capabilities): persist invocation state at gate and terminal edges**（OPEN）— [链接](https://github.com/nearai/ironclaw/pull/7678)
  将能力调用状态保持在工作进程本地，仅在完成/失败/审批阻塞/鉴权阻塞等终态边缘原子化物化，同时保留租约栅栏的跨 worker 恢复。这是对能力调用状态持久化模型的重新设计，方向明确且已有实现。

- **[PR #7651] feat(automations): add deterministic no-result suppression**（OPEN）— [链接](https://github.com/nearai/ironclaw/pull/7651)
  要求 `trigger_create` 必须由模型根据用户措辞推导 `result_delivery`，仅在明确"仅通知匹配/变更/结果"意图时启用抑制，中性措辞确定性回退到 `deliver`。**将目前隐式的行为选择显式化**，是产品行为规范化的重要一步。

- **[PR #7677] perf(threads): fold message lookup indexes into message rows**（OPEN）— [链接](https://github.com/nearai/ironclaw/pull/7677)
  将消息精确查找键存储为消息条目上的索引投影，替代每消息 1-3 条兄弟条目行，同时向后兼容旧布局。与 #7676 方向一致，共同构成 thread 存储层的全面瘦身。

- **[PR #7491] feat(coding): omp core-tool contract + engines + benchmark arm**（OPEN）— [链接](https://github.com/nearai/ironclaw/pull/7491)
  统一编码工具面：六个精确裸名 `read`/`write`/`edit`/`glob`/`grep`/`bash`，移除旧的派生 `builtin__*` 拼写与混合新旧表面。这是对 Agent 编码工具交互模型的**决定性简化**。

**路线图信号（新 Issue 方向）**

- **[Issue #7672] Typed ToolChoice: retire the overloaded tool_choice string** — [链接](https://github.com/nearai/ironclaw/issues/7672)
  当前 `tool_choice: Option<String>` 在所有 provider 编码器中用字符串匹配 "auto"/"required" 等，建议改为类型化枚举，消除跨 provider 的隐式语义差异。

- **[Issue #7673] BudgetLedger accounting refinements** — [链接](https://github.com/nearai/ironclaw/issues/7673)
  修复截断启动窗口双重计费（先扣可见调用数再 invoke），并在终态持久化计费记录。表现为保守超计（提前停止、绝不超限）。

- **[Issue #7674] Architecture tests: symbol-level allowlist for the openai-compat → threads edge** — [链接](https://github.com/nearai/ironclaw/issues/7674)
  现有依赖边界测试仅门控 crate 级边，建议增加符号级白名单，精确控制路由 crate 可导入的符号。

---

## 7. 用户反馈摘要

今日 Issues 评论量整体偏低，以下提炼可获得的真实信号：

- **测试基础设施可靠性削弱信任**（来自 #7679）：Live Canary 连续 30/30 次全红，且根因多为 harness 缺陷而非产品缺陷。维护者直言"harness bugs reddening green canary runs"，这反映了 **CI 信号噪声过大** 的问题——当测试结果不可信时，开发者的回归检测能力会显著下降。

- **Agent 检索/搜索行为与用户预期偏差明显**（来自 #6821）：在真实预览部署中，Agent 对"IronHub 上可安装什么"的回答仅覆盖实际目录的 1/6（3/18），并将非目录条目混入结果。**自由文本搜索被当作完整目录列举**，表明 Agent 对"列举 vs 搜索"两种查询意图的区分能力不足，直接影响用户对 Agent 能力的信任。

- **本地开发与生产环境行为不一致**（来自 #4992）：同一套配置在本地开发模式与 Railway 托管环境下，SSO 访问控制行为不同，导致自动化任务在托管环境提前失败。**环境一致性**是用户（开发者）反复遇到的痛点。

- **调试日志过度输出干扰生产观测**（来自 #5237）：开启 debug 日志后，底层 WASM 编译器的大量时序日志淹没有效信息。开发者需要在"可观测性"与"日志噪声"之间取得更好平衡。

---

## 8. 待处理积压

- **[Issue #467] Trajectory benchmark system for agent quality evaluation**（OPEN，5.5 个月）— [链接](https://github.com/nearai/ironclaw/issues/467)
  创建于 2026-03-02，跨度 5 个多月仍仅 4 条评论。作为 Agent 质量评估的基础设施提案，长期未获推进。考虑到项目正处于大量行为变更（unbound-turns、编码工具面统一、automations 语义显式化）的窗口期，**该基准系统恰好可以成为这些变更的回归标尺**，建议维护者重新评估优先级。

- **[Issue #5588] reborn: track QA-discovered production follow-ups removed from PR #5380**（已关闭，0 条评论）— [链接](https://github.com/nearai/ironclaw/issues/5588)
  创建于 2026-07-03，记录从 #5380 中移出的生产行为变更，需要以独立 PR 逐个跟进。虽然 Issue 本身已关闭，但其跟踪的 follow-up 是否全部完成值得确认，尤其是有多个子项（原文提到 commit `a61696655` 移出了若干变更）。

- **[Issue #7675] E2E: qa_6c gmail-to-sheet flake cascades across sessions**（OPEN，今日新开）— [链接](https://github.com/nearai/ironclaw/issues/7675)
  今日刚创建，但已确认"单个 flake 级联导致整个 session 变红"的模式性问题。若不加隔离机制，未来每个 flake 都会持续消耗排查时间，建议尽快设计故障隔离策略。

- **[PR #7516] feat(webui): operator surface for the IronHub agent link**（OPEN，4 天，新贡献者）— [链接](https://github.com/nearai/ironclaw/pull/7516)
  来自新贡献者 `neo-sky` 的 XL 规模 PR，为 WebUI 添加 IronHub agent 链接的操作面。当前仅能通过 CLI 获取注册 URL 和安装共享密钥，该 PR 将此能力带到 Extensions 页面。**外部贡献者的 XL 规模 PR 值得维护者及时跟进**，避免因响应延迟打击贡献意愿。

---

*报告生成时间：2026-08-16 | 数据范围：过去 24 小时 | 数据源：nearai/ironclaw GitHub 仓库*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-16

## 1. 今日速览

过去24小时内 LobsterAI 仓库活动以 **Issue 自动关闭为主**（16 条 stale 关闭，仅 2 条活跃状态），PR 侧 4 条 dependabot 依赖升级待合并、1 条手动提交的 cron 子 agent 修复 PR 已被关闭。当前**无新版本发布**，无新增手动 PR 提交，社区讨论热度较低。整体判断：项目处于**维护期**，活跃度偏低，核心开发节奏放缓，建议关注 stale bot 批量关闭后是否仍有遗留问题需要跟进。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日无新合并的 PR。值得注意的是一条**已关闭**的功能性 PR：

- **[PR #2234 [CLOSED] fix(openclaw): cron yield descendant finalization](https://github.com/netease-youdao/LobsterAI/pull/2234)**（作者: btc69m979y-dotcom，更新: 2026-08-15）
  - 修复 `sessions_yield` 后子 agent 完成事件无法驱动父 agent 继续执行的问题，阻止 yielding 状态下 requester steering 将 completion 事件写入已结束的 run，并在 cron finalization 阶段增加 yield continuation 循环，覆盖普通会话并行、cron 并行、cron 串行三种子 agent 场景。
  - 该 PR 状态为已关闭（非合并），不排除被关闭后等待重新提交或已以其他方式合入。

其余 4 条待合并 PR 均为 dependabot 自动提交的 CI 依赖升级（见第 8 节积压部分），不涉及功能推进。

## 4. 社区热点

今日讨论热度整体偏低，所有 Issue 评论数在 2-4 条之间。相对活跃的条目：

- **[Issue #1849 追问时会出现无限NO_REPLY或者输出几个文字就直接不输出了](https://github.com/netease-youdao/LobsterAI/issues/1849)**（4 条评论）— 用户报告任务被提前 complete 但模型仍在输出，导致页面无数据响应。该问题已因 stale 自动关闭。
- **[Issue #1878 IM机器人 微信接口 配置扫码后无法输入验证码](https://github.com/netease-youdao/LobsterAI/issues/1878)**（4 条评论）— 微信扫码后要求输入 6 位数字验证码，但客户端无输入界面，导致配置无法完成。
- **[Issue #1903 会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903)**（3 条评论，**仍为 OPEN 状态**）— 用户无法通过会员登录使用网易付费模型，建议改进登录方式。

其中 **Issue #1903 是今日唯一仍处于开放状态的活跃 Issue**（非 stale 自动关闭），反映付费会员登录链路存在阻碍用户体验的问题，值得维护者优先关注。

## 5. Bug 与稳定性

今日无新报告的 Bug。以下为因 stale 自动关闭的历史 Bug 清单（按严重程度排列）：

| 严重程度 | Issue | 问题描述 | 状态 |
|---------|-------|---------|------|
| 🔴 高（安全） | [Issue #1885] 邮箱 SKILL 路径穿越漏洞（imap-smtp-email 的 `downloadAttachments` 未过滤附件名） | 已关闭（stale） |
| 🔴 高 | [Issue #1903] 会员登录频繁失败，无法使用付费模型 | **仍开放** |
| 🟡 中 | [Issue #1849] 追问时无限 NO_REPLY 或输出中断 | 已关闭（stale） |
| 🟡 中 | [Issue #1993] 桌面端 AI engine connection lost，IM Bot 正常 | 已关闭（stale） |
| 🟡 中 | [Issue #1971] 会话页含超长元素（如 Mermaid）时虚拟滚动异常 | 已关闭（stale） |
| 🟢 低 | [Issue #2017] 本地运行提示未检测到内置 OpenClaw runtime | 已关闭（stale） |
| 🟢 低 | [Issue #1988] 更新后阿里百炼 qwen3.6-plus 被强制指向网易模型 | 已关闭（stale） |

以上问题均无关联的 fix PR 处于打开状态。其中**安全问题 #1885**（路径穿越）虽然已 stale 关闭，但若未实际修复，建议维护者确认修复状态并重新打开或补充说明。

## 6. 功能请求与路线图信号

今日无新提交的功能请求。以下为 stale 关闭的历史需求（仍可视为路线图信号）：

- **[Issue #1880 希望增加 Hermes Agent 功能](https://github.com/netease-youdao/LobsterAI/issues/1880)** — 参照 Open WebUI，将 Hermes Agent 与 OpenClaw 集成。
- **[Issue #2016 建议增加 openhuman 引擎功能](https://github.com/netease-youdao/LobsterAI/issues/2016)** — 希望接入 openhuman 引擎。
- **[Issue #2046 Agent 记忆体系（仍开放）](https://github.com/netease-youdao/LobsterAI/issues/2046)** — 建议将 session 标题/元数据持久化到文件系统，Agent 无法感知历史对话。
- **[Issue #2036 为 OpenClaw gateway 增加 agent:turn/agent:loop 事件](https://github.com/netease-youdao/LobsterAI/issues/2036)** — 支持主循环每轮结束后广播，实现实时落盘。
- **[Issue #2039 Dreaming 开关（/dreaming on）存在 upstream bug](https://github.com/netease-youdao/LobsterAI/issues/2039)** — 需 memory-core schema 允许 `dreaming` 属性才能彻底解决。
- **[Issue #2041 记忆系统是 Agent 进化的最大瓶颈](https://github.com/netease-youdao/LobsterAI/issues/2041)** — 对照 self-evolver 现状的深度分析，指出轨迹记忆已有但声明式/结构化记忆有差距。

结合 **[PR #2040 中对 OpenClaw 五大薄弱点的分析](https://github.com/netease-youdao/LobsterAI/issues/2040)**（记忆缺失、安全漏洞、Token 成本、部署繁琐等），**Agent 记忆体系**是目前社区反馈最集中的方向，多个 Issue 从不同角度指向同一诉求，建议纳入下一版本路线图评估。

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户反馈：

- **付费链路是核心痛点**：会员登录失败导致无法使用付费模型（#1903），直接影响付费用户体验，建议优先修复。
- **微信渠道配置受阻**：微信扫码后需要输入验证码但客户端无输入界面（#1878），属于阻断性体验问题。
- **模型路由不透明**：阿里百炼用户反映更新后 qwen3.6-plus 被强制指向网易模型且配置文件无效（#1988），用户对模型选择的控制权诉求明显。
- **桌面端连接稳定性**：桌面应用频繁报 AI engine connection lost，但 IM Bot 连接正常（#1993），怀疑桌面端特有的连接管理问题。
- **UI 体验差距**：用户反馈界面相比竞品"过于丑"（#1836），另有 UI 细节建议（skeleton screen #1920、空状态图标 #1921），说明用户对视觉完成度有期待。
- **记忆能力不足**：用户需手动维护 Agent 记忆，跨 session 信息丢失导致重复劳动（#2046）。

## 8. 待处理积压

以下为长期未响应或仍处于 OPEN 状态的重要条目，建议维护者关注：

| 类型 | 条目 | 创建时间 | 备注 |
|------|------|---------|------|
| Issue | [Issue #1903 会员登录频繁失败](https://github.com/netease-youdao/LobsterAI/issues/1903) | 2026-05-07 | 仅存的活动 Issue（OPEN 未 stale），影响付费用户 |
| Issue | [Issue #2046 Agent 记忆体系产品建议](https://github.com/netease-youdao/LobsterAI/issues/2046) | 2026-05-25 | OPEN 状态，高价值路线图输入 |
| Issue | [Issue #1885 邮箱 SKILL 路径穿越漏洞](https://github.com/netease-youdao/LobsterAI/issues/1885) | 2026-05-06 | 安全漏洞，虽 stale 关闭但未确认修复 |
| PR | [PR #2164 trufflehog 3.88.30 → 3.95.5](https://github.com/netease-youdao/LobsterAI/pull/2164) | 2026-06-15 | dependabot，安全扫描依赖升级，已搁置近 2 个月 |
| PR | [PR #2165 actions/checkout v4 → v6](https://github.com/netease-youdao/LobsterAI/pull/2165) | 2026-06-15 | dependabot，CI 依赖升级，Major 版本变更需人工确认 |
| PR | [PR #2166 dorny/paths-filter v3 → v4](https://github.com/netease-youdao/LobsterAI/pull/2166) | 2026-06-15 | dependabot，CI 依赖升级 |
| PR | [PR #2167 actions/stale 9.1.0 → 10.3.0](https://github.com/netease-youdao/LobsterAI/pull/2167) | 2026-06-15 | dependabot，CI 依赖升级 |

**健康度简评**：项目当前处于低活跃维护期，无新版本、无新功能 PR、无新 Bug 报告。16 条 Issue 被 stale bot 批量关闭，需确认其中是否存在"已修复但未关闭说明"或"真实仍需处理"的遗漏。核心风险点是安全漏洞（#1885）状态未确认、付费登录链路（#1903）仍未解决，以及 4 条 dependabot 安全相关依赖升级滞留近两个月未合入。建议维护者优先处理 #1903 与 #1885 的状态确认。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报（2026-08-16）

## 1. 今日速览

昨日 Moltis 项目处于高活跃度合并状态：24 小时内 16 条 PR 中有 14 条被合并或关闭，仅 2 条待合并，无新版本发布、无新开 Issue。值得关注的是，合并的 PR 覆盖多条并行的安全加固（路径穿越修复、节点配对签名验证、恢复短语规范化）、多项功能增强（Slack 原生任务卡片、Coder 远程沙箱、命令面板发起 agent 对话等），同时 4 条与 `openclaw` 组织迁移相关的 PR 被集中合入，标志着项目生态正在系统性完成品牌/仓库迁移收尾。项目整体呈现出"密集合并、存量消化、质量加固"的健康状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共合并/关闭 14 条 PR，按主题分组如下：

**安全加固（合并 3 条）：**
- [#1180 fix(security): harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180) —— 修复恶意 zip 或 HuggingFace 仓库可导致任意文件写入（覆盖 config/credentials/scripts 并实现代码执行）的两类安全缺陷，涉及 `clawhub.rs` 的 Zip 解压路径校验
- [#1179 fix(gateway): verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179) —— 将 `node.pair.verify` 绑定到服务端签发的 pending 请求，禁止调用者自供 key/challenge
- [#1186 fix(vault): normalize recovery phrase before hashing](https://github.com/moltis-org/moltis/pull/1186)（待合并）—— 恢复短语哈希前统一规范化（去连字符、大写），修复大小写/格式不一致导致的解封失败

**Bug 修复（合并 4 条）：**
- [#1182 fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182) —— 修复 #1132，`main` 会话现可同普通会话一样删除/归档
- [#1191 fix(sandbox): point gogcli module path at the openclaw org](https://github.com/moltis-org/moltis/pull/1191) —— 修复沙箱构建失败（gogcli 仓库迁移至 openclaw org 导致 go.mod 路径失效），对应 Issue #1189
- [#1192 fix(skills): point wacrawl install metadata at the openclaw org](https://github.com/moltis-org/moltis/pull/1192) —— 同上，修复 wacrawl skill 的 Go install 回退路径
- [#1194 fix(scripts): guard empty bash array expansions for macOS bash 3.2](https://github.com/moltis-org/moltis/pull/1194) —— 修复 macOS 上 `just local-validate-full` 因空数组展开报 unbound variable 的错误

**新功能开发（合并 4 条）：**
- [#1190 Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190) —— 新增跨 provider 的连接器持久化层，支持原子快照、调度、投影、受限本地全文搜索；引入只读 CalDAV、Gmail、Himalaya v2 连接器
- [#1195 Add Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195) —— 以 Slack 原生 plan/task 卡片形式渲染工具生命周期更新，使用不透明运行 ID 保护隐私，失败流自动清理
- [#1197 Start agent chats from command palette](https://github.com/moltis-org/moltis/pull/1197) —— 命令面板可直接发起 agent 对话，创建新会话并发送查询
- [#1198 Route OpenAI reasoning tool calls through Responses](https://github.com/moltis-org/moltis/pull/1198) —— 带函数工具 + `reasoning_effort` 的请求路由到 Responses API，保留 Chat Completions 兼容行为

**搜索与体验优化（合并 2 条）：**
- [#1196 Fix ClawHub skill search results](https://github.com/moltis-org/moltis/pull/1196) —— 消除逐结果元数据请求导致的 RPC 超时，直接消费搜索元数据，协调 owner 限定重装
- [#1199 Add Coder remote workspace sandbox support](https://github.com/moltis-org/moltis/pull/1199)（待合并）—— 新增 Coder 沙箱后端，通过 REST API 创建临时 workspace，经重连 PTY WebSocket 执行命令，支持模板、预设、TTL 等配置

**依赖更新（合并 3 条）：**
- [#1200 chore(deps): bump npm_and_yarn group（postcss、js-yaml）](https://github.com/moltis-org/moltis/pull/1200)
- [#1184 chore(deps-dev): bump undici 7.28.0 → 7.29.0](https://github.com/moltis-org/moltis/pull/1184)

**项目里程碑判断：** 本轮合并呈现出三个信号：安全基线在系统性补强（路径穿越、签名验证、密钥派生）；`openclaw` 组织迁移的遗留路径问题正在被逐一清除；连接器生态（日历/邮件/频道）与远程沙箱（Coder）进入快速扩展期，项目正从"core 打磨"转向"生态扩张"阶段。

## 4. 社区热点

今日评论数最多的 Issue 为 [#1132 "main" session can't be deleted/archived](https://github.com/moltis-org/moltis/issues/1132)，由 vvuk 于 6 月 18 日提出，今日被 [#1182](https://github.com/moltis-org/moltis/pull/1182) 合入修复。该 Issue 的核心诉求是 `main` 会话（默认主会话）不支持删除/归档，对高频用户的使用流程构成阻碍，反映了用户在真实工作中对会话管理的刚需。

其余 PR 评论普遍较少，说明社区讨论热度集中在少量核心问题上，整体讨论节奏健康。

## 5. Bug 与稳定性

今日无新报告 Bug（新开活跃 Issue 为 0），以下为存量 Bug 的修复进展：

| 严重程度 | Issue | 状态 |
|---|---|---|
| **严重（潜在代码执行）** | 恶意 zip/HuggingFace 仓库任意文件写入 | 已由 [#1180](https://github.com/moltis-org/moltis/pull/1180) 修复合入 |
| **严重（安全）** | 节点配对签名可自供 key/challenge | 已由 [#1179](https://github.com/moltis-org/moltis/pull/1179) 修复合入 |
| **中等** | gogcli URL 迁移导致沙箱构建全面失败 | [#1189](https://github.com/moltis-org/moltis/issues/1189) 已由 [#1191](https://github.com/moltis-org/moltis/pull/1191) 修复 |
| **中等** | wacrawl skill 安装路径失效 | 已由 [#1192](https://github.com/moltis-org/moltis/pull/1192) 修复 |
| **中等** | 恢复短语格式差异导致 vault 解封失败 | 待合并：[#1186](https://github.com/moltis-org/moltis/pull/1186) |
| **低** | `main` 会话无法删除/归档 | [#1132](https://github.com/moltis-org/moltis/issues/1132) 已由 [#1182](https://github.com/moltis-org/moltis/pull/1182) 修复 |
| **低** | macOS bash 3.2 空数组展开报错 | 已由 [#1194](https://github.com/moltis-org/moltis/pull/1194) 修复 |

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。从合并 PR 看，连接器生态（日历、邮件、频道历史）与 Coder 远程沙箱已实际落地，推测与规划中的"多平台连接"与"远程开发环境"路线方向一致。此外，[#1198](https://github.com/moltis-org/moltis/pull/1198) 对 OpenAI reasoning 模型调用路径的适配，反映了对下一代推理模型兼容性的前瞻布局。

## 7. 用户反馈摘要

今日有效用户反馈主要来自两个维度：

- **安全关切（tsauvajon 贡献者视角）：** 在 [#1179](https://github.com/moltis-org/moltis/pull/1179) 和 [#1180](https://github.com/moltis-org/moltis/pull/1180) 中，贡献者明确表示"我想用 Moltis，但希望能先合入几个安全修复"，体现了外部贡献者对项目安全基线的重视，这既是对当前安全短板的一次集中反馈，也是对项目未来信任度的投资。
- **功能缺失（vvuk 用户视角）：** [#1132](https://github.com/moltis-org/moltis/issues/1132) 中用户指出 `main` 会话无法删除/归档的问题，强调默认会话在真实工作流中对会话管理构成的阻碍。

## 8. 待处理积压

- **PR [#1186](https://github.com/moltis-org/moltis/pull/1186)（vault 恢复短语规范化）**：8 月 9 日创建，已等待 7 天，与 #1179/#1180 同属安全加固批次，建议优先跟进合入。
- **PR [#1199](https://github.com/moltis-org/moltis/pull/1199)（Coder 远程沙箱）**：8 月 15 日创建，体量较大，涉及新增后端与文档，建议安排 reviewer 尽早审阅以防产生大型 diff 冲突。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-08-16**


## 1. 今日速览

CoPaw 今日活跃度较高，过去 24 小时新增/更新 9 条 Issue（其中 1 条关闭）、10 条待合并 PR，无新版本发布。值得关注的是，今日提交的 PR 全部处于开放待审状态，未发生任何合并或关闭，代码审查积压风险正在上升。Issue 侧集中在 v2.1.0 的多媒体处理（视频透传、图片会话恢复）、OAuth2 凭证轮换、后台任务回调等实际功能缺陷上；PR 侧则呈现出社区贡献者主导的特征——10 个开放 PR 中 7 个标注为 first-time-contributor，外部开发者参与度高，但合并效率成为当前瓶颈。整体项目处于"需求旺盛、功能迭代活跃、审查通道拥挤"的状态。

## 2. 版本发布

过去 24 小时无新版本发布。当前最新版本为 v2.1.0（依据 Issue 中用户反馈版本号）。

## 3. 项目进展

过去 24 小时**无 PR 被合并或关闭**，10 个 PR 全部处于待审查状态。因而今日无新增功能落地。不过，待审 PR 中蕴含着多项实质性的项目推进，值得重点关注：

- **PR #6940**（cyruszhang，首个贡献者）：为 CoPaw 新增原生 DataPaw 应用运行时与持久化分析工作区，附带截图与独立 infra 仓库链接，是本次最大的结构性变更，涉及面广、审查成本高。
- **PR #6302**（wangfei010313）：统一 provider 发现、模型元数据、模型路由与 agent 模型控制，引入目录驱动的 provider 模型系统和能力感知路由，属于架构级重构，已开放 26 天仍未合并。
- **PR #6623**（cocoakekeyu，首个贡献者）：修复 ACP 传输层中通知与 prompt 响应竞态导致的最终文本丢失问题，修复 #6625，已标记 "Under Review" 但仍未合入。
- **PR #7001**（LUOSENGWA，首个贡献者）：为 Matrix 群组房间按发送者隔离会话与记忆，修复用户 A 的指令被用户 B 看到的隐私隐患。

项目整体处于"提交密集、合并停滞"的阶段，架构级 PR（#6940、#6302）与多个高价值修复（#6623、#7001、#7061）等待维护者审查。

## 4. 社区热点

- **Issue #6476 — Matrix 端到端加密不可用**（已关闭，3 条评论）：用户报告 matrix-nio 需要 olm 库解密加密消息，系统提示三步安装流程（apt 安装 libolm-dev → uv pip install matrix-nio[e2e] → 依赖 vodozemac），但问题在今日关闭，建议验证是否已在某个 PR 或版本中解决。

- **Issue #3915 — Console WebUI 虚拟滚动**（已开放超 3 个月，3 条评论，1 👍）：长对话导致全量 DOM 渲染严重卡顿，用户要求引入虚拟滚动或分页渲染。该需求已存在 111 天仍无对应 PR，是最"老"的开放功能请求。

- **PR #6940 — DataPaw 原生应用运行时**（10 个 PR 中讨论价值最高，附截图）：为 CoPaw 添加数据分析应用运行时与持久化工作区，是当前最大的功能增量，社区期待度较高。

此外，xiaoka76 同日在 #7059 和 #7060 连续提交了两个视频相关的 Bug，并立即提交了修复 PR #7061，形成一条完整的缺陷闭环链路，值得维护者优先响应。

## 5. Bug 与稳定性

按严重程度排列：

**高严重度 — 功能完全失效：**

- **Issue #7059 — view_video 工具结果视频块被静默丢弃**（作者: xiaoka76 | 链接）：调用 view_video 返回成功但模型从未收到任何视频帧，无报错无警告，完全静默失败。影响 OpenAI Responses API / Volcengine Ark。**已有修复 PR #7061**（同作者提交，指出 #6495 引入的两个缺陷：promotion gate 失效 + 视频帧未传入模型上下文）。

**中严重度 — 功能部分失效或数据丢失：**

- **Issue #7051 — Console 会话重载后图片附件丢失**（作者: big-bunny-ball | 链接）：图片在首次发送时正常，关闭并重开会话后缩略图损坏、只剩纯文本回退。影响 v2.1.0 桌面端。无对应 PR。
- **Issue #7053 — OAuth2 refresh 不轮换 refresh_token**（作者: sunboy0523 | 链接）：对使用旋转式 refresh token 的远程 MCP 服务器（如 XMind），OAuth2AuthCodeProvider 刷新 access_token 但从不持久化新的 refresh_token，且无主动续期，远程 MCP 永久退化为手动重新认证。无对应 PR。
- **Issue #7060 — view_video 内联媒体上限硬编码 2MB**（作者: xiaoka76 | 链接）：provider 的 max_inline_media_bytes 设置对视频路径无效，超过 2MB 的视频被替换为文本占位符。与 #7059 同源，建议合并处理。
- **Issue #6476 — Matrix 端到端加密不可用**（已关闭 | 链接）：matrix-nio 需要 olm 库，安装过程依赖系统级 libolm-dev。今日已关闭，需确认修复方式。

**低严重度 — 体验缺陷：**

- **Issue #7055 关联 PR #7055** — agent 类型 cron 任务的 `--text` 更新静默失败：命令返回 rc=0 且输出任务 JSON 看似成功，但 prompt 实际未变更。修复 PR 已提交。

## 6. 功能请求与路线图信号

今日提交的功能请求集中在以下方向，结合已有 PR 判断纳入下一版本的可能性：

- **插件 system_prompt 权限控制**（#7052，用户: xiaohushi512）：公司场景下插件 UI 有自己的提示词，不希望提交会话后在 CoPaw 界面中被用户看到。诉求集中在企业级提示词保密，很可能与 CoPaw 的插件权限模型扩展方向契合，但目前无对应 PR。

- **后台任务回调/通知机制**（#7056，用户: TanKenglim）：当前 submit_to_agent 派发任务后只能轮询 check_agent_task，缺少完成时的自动通知。用户已通读源码列出三个相关文件（agent_management.py、console.py、config.py），分析深入。该功能在多 agent 编排场景下有明确价值，参考现有 `qwenpaw cron` 的调度链路，纳入路线图的概率较高。

- **恢复 WebUI 原生上下文策略选项**（#7058，用户: manjieqi）：v2.1.0 移除了 console 中的 scroll/native 上下文策略选择器，但后端仍完整支持 native（LightContextConfig.strategy），用户被锁定在 scroll。属于回归性需求，实现成本低（后端已支持），大概率快速合入。

- **Console WebUI 虚拟滚动**（#3915，用户: jfh1945815）：已开放 111 天，虽无直接 PR，但 PR #7049 为 GET /chats/{chat_id} 添加了 limit/before 分页参数，正是为虚拟滚动铺路的基础设施改造。两者应配合考虑，虚拟滚动仍有落地可能。

## 7. 用户反馈摘要

从今日 Issue 评论与描述中提炼的用户之声：

- **视频能力是当前最痛点**：xiaoka76 在同一日连报两个视频相关 Bug（#7059、#7060），且二者互为因果——2MB 硬编码上限导致大视频被省略，静默丢弃又导致模型看不到任何帧。用户对"静默失败"的挫败感明显，反复强调"no error, no warning, a completely silent failure"。好在修复 PR #7061 已及时提交，反馈闭环较快。

- **企业用户对提示词保密有硬需求**：xiaohushi512 在 #7052 中明确"不想提交会话后在 qwenpaw 的会话界面被用户看到"，代表了插件开发者在 B 端落地时的隐私诉求，是商业化场景中的真实信号。

- **OAuth2 旋转凭证是远程 MCP 的致命伤**：sunboy0523 指出 XMind 等使用旋转 refresh_token 的 MCP 服务器，CoPaw 一旦刷新 access_token 就会丢失 refresh_token，导致永久降级为手动重认证，用户体验严重受损。

- **社区贡献者参与的积极性高但等待时间过长**：10 个开放 PR 中 7 个是 first-time-contributor，包括修复 #6625 的 cocoakekeyu（已标记 Under Review 15 天）、修复视频缺陷的 xiaoka76 等。多位贡献者的 PR 已开放多日未获审查反馈，长此以往可能挫伤外部贡献意愿。

- **cron 更新的"假成功"现象**：lcq225 在 PR #7055 中精确描述了这一痛点——rc=0 + 任务 JSON 输出看似成功，实际 prompt 未改变，命令行工具的信任度因此受损。

## 8. 待处理积压

**长期未响应的重要 Issue：**

- **Issue #3915 — Console WebUI 虚拟滚动**（开放 111 天 | 链接）：1 个 👍，3 条评论。长对话场景的严重性能问题，已持续逾三个月无实质进展。PR #7049 的分页基础设施与本需求直接相关，建议将两者绑定处理。

**长期未合并的关键 PR（按等待时长排序）：**

- **PR #6302 — 统一 provider 发现、模型元数据与路由**（开放 26 天 | 链接）：架构级重构，引入目录驱动的 provider 模型系统、运行时模型发现、能力感知路由与 fallback 支持。此 PR 长期滞留可能阻塞其他依赖其接口变更的 PR。
- **PR #6623 — 修复 ACP 通知竞争导致最终文本丢失**（开放 15 天，已标记 Under Review | 链接）：修复 #6625，已进入审查阶段但尚未合入。
- **PR #6940 — DataPaw 原生应用运行时**（开放 4 天 | 链接）：最大的结构性变更，含独立 infra 仓库，建议尽早安排专人审查以避免后续 PR 在数据模型上产生分叉。

**建议**：当前 10 个开放 PR 全部零合并，且其中 7 个来自首次贡献者。高审查负担与外部贡献者的耐心之间存在张力，建议维护者优先处理 #7061（缺陷修复）、#6623（已 Under Review）和 #7055（CLI 假成功），再集中资源评审 #6302 与 #6940 两个架构性 PR，以恢复社区的合并节奏。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-16

## 1. 今日速览

ZeroClaw 项目今日保持高热度的协作态势：过去24小时内有46个 Issue 处于活跃状态，44 个 PR 待合并，社区讨论聚焦于多项高风险 RFC（特别是 Chat Completions 协议兼容、统一附件架构、运行时会话所有权等架构级议题）。值得关注的是，由 @IftekharUddin 提交的 Anthropic 服务端回退（server-side fallback）四连 PR（#9262/#9263/#9265/#9266）与配套渠道通知 PR（#9268）已全部合并关闭，标志着 Anthropic 拒绝/回退栈的完整落地。与此同时，安全与稳定性修复（SSRF 防护、webhook 审计加固、cron 任务超时）持续提交，项目整体呈现"架构讨论与安全加固并行"的健康态势。请特别注意：今日**无新版本发布**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（共 6 个）

**最显著的进展：Anthropic 服务端回退功能栈完整合并**（@IftekharUddin，5 个 PR 全部关闭）：

| PR | 标题 | 功能贡献 |
|---|---|---|
| [#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) | feat(providers): surface native anthropic refusals as typed errors | 将 Anthropic HTTP 200 安全拒绝（`stop_reason: "refusal"`）识别为类型化 `AnthropicRefusalError`，不再把空拒绝当作成功 |
| [#9263](https://github.com/zeroclaw-labs/zeroclaw/pull/9263) | feat(providers): route refusals through client-side fallback entries | 让现有客户端可靠性层将类型化拒绝分类为 `is_non_retryable`，并路由到回退条目 |
| [#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265) | feat(providers): opt-in anthropic server-side fallback requests | 新增 Anthropic 专属配置字段 `server_fallback_models`，支持 Anthropic 在单次 API 调用内用另一模型完成被拒绝回合 |
| [#9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266) | feat(providers): detect anthropic server-side fallback responses | 宽容解析 `NativeChatResponse.model` 与 `AnthropicUsage.iterations`，识别实际服务模型 |
| [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) | feat(channels): surface safeguard fallback notices | 在频道编排器的 post-loop 区域向用户呈现回退安全通知 |

**项目整体向前推进评估**：Anthropic 拒绝→客户端回退→服务端回退→用户通知的完整链路已打通，显著增强了对 Anthropic 模型安全拒绝场景的容错能力。此外，此前合入的 #9738（zerocode 相关）与 #9692/#9688（SOP pane 相关）为 TUI 功能增量铺平了道路，相关后续 PR（#9739、#9694、#9693）已在待合并队列中。

---

## 4. 社区热点

### 🔥 最热议题：#8603 — RFC: ZeroClaw Chat Completions profile（21 条评论）

> [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)

**核心诉求**：当前 ZeroClaw 仅通过 WebSocket、ACP 和渠道 webhook 暴露 agent 能力，大量 OpenAI Chat Completions 协议的客户端（Open WebUI、LobeChat、Continue.dev、Aider、LangChain、OpenAI SDK 等）无法接入。该 RFC 提议增加 Chat Completions 兼容层。

**分析**：这是今日评论数最高的议题，表明社区对"生态兼容"有强烈诉求——用户希望将 ZeroClaw 无缝接入已有的 LLM 工具链，而非为每个工具单独适配。该 RFC 标有 `needs-maintainer-review` 和 `risk:high`，若被接受，将为项目打开巨大的集成生态。

### 🔥 高关注：三连架构 RFC 讨论串（#9487 / #9488 / #9600，合计 33+ 条评论）

| Issue | 标题 | 评论数 |
|---|---|---|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 17 |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture for web chat and channels | 16 |

**分析**：这两项 RFC 由 @NiuBlibing 提出，分别讨论"运行时拥有会话所有权 + 传输适配层"和"统一附件架构"。从修订历史看，#9487 的 Revision 2（2026-08-03）已进入所有权边界确认阶段，两者均被列入 #8692 维护者决策队列。这表明项目正在为多渠道（web/ACP/渠道）的统一会话与附件模型做架构铺垫，属于前瞻性设计工作。

### 🔥 数据驱动信号：#9621 — 分阶段产品遥测 RFC（5 条评论，新方向）

> [Issue #9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621)

**核心诉求**：维护者 @Audacity88 提出，当前做出功能去留决策时缺乏"功能是否被真实使用"的数据支撑。例如 #9103 在决定 Lucid 与 Qdrant 的去留时，无法确认生产使用情况。RFC 提议采用分阶段、opt-in、经维护者审查报告的产品遥测方案。

**分析**：这是一个值得注意的信号——项目在高速演进后，开始关注"哪些功能真正被使用"的度量问题，预示着未来可能对低使用率功能进行裁剪或重构。

---

## 5. Bug 与稳定性

### 严重级别：P1

| Issue | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | cron custom-shell test hits ETXTBSY under parallel runtime gate，导致无关 PR 的必需检查失败 | OPEN，`status:accepted` | 无专门 PR，但影响 CI 可靠性 |
| [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) | 审批卡片无位置信息，单条消息产生多个卡片时操作者在点击前无法区分 | OPEN，`follow-up` | 无 |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS 桌面应用重启后可能出现空白或无窗口（S1 - 工作流阻塞） | **CLOSED** | 已关闭，但未展示修复详情 |

### 严重级别：P2/P3

| Issue | 标题 | 状态 |
|---|---|---|
| [#9470](https://github.com/zeroclaw-labs/zeroclaw/issues/9470) | Reliable 回退遥测归属错误：使用量未归因到实际承担成本的 provider/model，用户可见回退通知描述错误 | OPEN，`follow-up`（源自 PR #9424/#9447 评审） |
| [#7870](https://github.com/zeroclaw-labs/zeroclaw/issues/7870) | Agent 运行时选项可能从第一个配置的 provider 泄漏（而非选中的 provider） | OPEN，`status:accepted` tracker |

### 安全相关修复（有对应 PR）

- **[#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)** `fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate` — 修复 `[file_download].url` 绕过 SSRF 验证、可静默路由到 `127.0.0.1` / `169.254.169.254` 等内网地址的问题（`needs-author-action`，待合并）
- **[#9995](https://github.com/zeroclaw-labs/zeroclaw/pull/9995)** `fix(hooks): harden webhook audit exports` — 在应用字节限制前擦除 webhook 审计参数中的常见凭据、provider token 模式和内联图片标记（`needs-author-action`，待合并）
- **[#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753)** `fix(config): distinguish absent vs empty risk-profile allowed_tools` — 修复三态问题：省略=不限制、`[]`=全部拒绝、非空=封闭集合。此前显式空列表会"失败开放"（`needs-author-action`，待合并）

---

## 6. 功能请求与路线图信号

### 高概率进入下一版本（已有对应 PR 或已 accepted）

| 信号 | 对应 Issue/PR | 说明 |
|---|---|---|
| **Hailo-Ollama 原生支持** | [PR #9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | 新增 `HailoOllamaModelProvider`，支持 Hailo-Ollama `/api/chat` 与 `/api/tags`，含验证、请求塑形、生命周期与诊断（XL 规模，`needs-author-action`） |
| **Cron 任务墙面钟超时** | [PR #9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | 修复 cron agent 任务无墙钟上限导致 sqlite `locked_at` 锁永久持有的问题（P1，`needs-author-action`） |
| **Reliable 拒绝尝试精确归账** | [PR #10003](https://github.com/zeroclaw-labs/zeroclaw/pull/10003) | 精确保留被拒绝/接受的 Reliable 尝试的 provider/model 用量，跨重试、故障转移、错误、取消、超时、流恢复与语义拒绝（XL，新提交） |
| **独立委托者目标思考** | [PR #10021](https://github.com/zeroclaw-labs/zeroclaw/pull/10021) | 将解析后的目标运行时 profile 思考策略应用于 agentic 独立委托者（今日新提交） |

### 社区呼声高但尚无 PR 的功能需求

| 需求 | 对应 Issue | 说明 |
|---|---|---|
| **Chat Completions 协议兼容** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 最热 RFC（21 评论），等待维护者评审 |
| **Gemini Live 实时语音通道** | [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | 已重写为 broker 契约（Revision 2），等待作者行动 |
| **桌面端 computer-use 支持** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 屏幕感知 + 无障碍数据 + 鼠标键盘输入控制 |
| **Windows shell 宿主评估** | [#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) | 是否从 `cmd.exe` 切换/支持 PowerShell（5.1/7+）可选 |
| **Agent Plugins 1.0 标准加载** | [#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) | 支持 `plugin.json` + `skills/` + `mcp.json` 社区插件包 |

---

## 7. 用户反馈摘要

### 真实痛点

- **泄露检测器误伤公共区块链地址**（[#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)）：用户 @bitsbyritik 报告，出站泄露检测器的高熵启发式将**公共**区块链地址（如支付请求 URL）判定为敏感信息并打码，导致支付链接不可用。用户明确指出这是"误报而非 bug——检测器按设计工作，但设计本身需要例外定义"。这反映了**安全检测精度（误报率）** 是实际部署中的关键痛点。

- **Cron 文档缺失且无法指定模型**（[#7762](https://github.com/zeroclaw-labs/zeroclaw/issues/7762)）：用户 @touhidurrr 希望为低优先级定时任务指定最便宜的模型（如 Gemma），但文档站完全没有 cron 文档，也找不到为 cron 指定模型的配置方式。**文档缺口影响功能采用**。

- **macOS 桌面端权限检测与窗口异常**（[#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)，已关闭）：macOS 15.7.7 上安装后无法检测授权权限、响应迟滞、显示空白页，重启后窗口消失。S1 工作流阻塞，已关闭。

### 开发体验反馈

- **CI 耗时过长**（[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)）：PR CI 即使小改动也需 15-20 分钟，关键路径通常来自 Rust 构建缓存未命中与作业调度不当。已 `status:accepted`，属于社区普遍认同的改进方向。

- **CI 门卫缺乏动机注释**（[#9512](https://github.com/zeroclaw-labs/zeroclaw/issues/9512)）：用户 @JordanTheJet 建议为每个定制 CI 门卫（`repo-structure`、`zerocode-rpc-boundary`、`nix-hash-drift`、`installer-drift`）标注其对应的历史问题/事故，避免后人困惑。**这是对项目可维护性的直接反馈**。

### 功能建议（渠道方向）

- **Discord 提及触发线程模式**（[#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849)）：机器人被提及后自动创建 Discord 线程继续对话，避免共享频道被跟进问题刷屏。
- **wecom_ws 主动消息**（[#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824)）：当前 wecom_ws 渠道仅支持被动响应，需要通过 `zeroclaw channel send` 支持主动推送及媒体文件。

---

## 8. 待处理积压

### 长期未决的高价值 RFC（需维护者关注）

| Issue | 标题 | 创建时间 | 已开放天数 | 标签 | 需要关注原因 |
|---|---|---|---|---|---|
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance, conversation binding, and reply contract for internally initiated agent turns | 2026-05-26 | **82 天** | `priority:p2`, `needs-maintainer-review`, `risk:high` | 13 条评论，已完成 Revision 2 和边界澄清，等待维护者决策 |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC: Security posture, credential boundaries, and universal ingress policy | 2026-05-27 | **81 天** | `priority:p2`, `needs-maintainer-review`, `risk:high` | 13 条评论，横跨凭据处理、运行时隔离、入口信任等安全控制面，需维护者明确方向 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support for desktop screen interaction and input control | 2026-05-25 | **83 天** | `priority:p2`, `needs-author-action`, `risk:high` | 9 条评论但长期无作者跟进，桌面场景是重要差异化功能 |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | RFC: Realtime speech-to-speech channel for Gemini Live | 2026-07-06 | 41 天 | `needs-author-action`, `risk:high` | Revision 2 已重写为 broker 契约，等待作者更新 |

### 阻塞维护者决策队列（Tracker #8692）

> [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — "Maintainer decision queue for RFCs and design issues"

该 tracker 是 RFC 和设计问题的维护者决策队列。当前至少有 #8603、#9487、#9488、#9103、#9621、#6954、#6971、#8780、#6909、#9598、#9810 等 11+ 个 RFC 在队列中等待接受/拒绝/推迟/拆分决定。**建议维护者优先处理队列中开放时间最长的 #6954 和 #6971，避免社区提案长期悬而未决**。

### 需作者跟进的 PR

以下 PR 均标记 `needs-author-action`，长时间未更新，需提醒作者继续推进：

- [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)（SSRF 修复，XL，自 07-04）
- [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)（gateway 保持 agent 回合活跃，P1，自 07-11）
- [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)（Hailo-Ollama 支持，自 07-17）
- [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320)（cron 超时，P1，自 07-23）
- [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)（herdr 代理报告集成，自 06-26）
- [#9995](https://github.com/zeroclaw-labs/zeroclaw/pull/9995)（webhook 审计加固，P1，自 08-14）

---

*数据来源：[ZeroClaw GitHub 仓库](https://github.com/zeroclaw-labs/zeroclaw)，数据采集截至 2026-08-16。*


</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*