# OpenClaw 生态日报 2026-08-14

> Issues: 486 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-14 02:26 UTC

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

# OpenClaw 项目动态日报 / 2026-08-14

## 今日速览

过去24小时OpenClaw仓库保持极高活跃度：486条Issue更新（新开/活跃324，关闭162），500条PR更新（待合并374，已合并/关闭126），无新版本发布。消息投递可靠性（静默失败、子代理结果丢失）与多智能体编排稳定性是社区反馈最集中的痛点，其中[#121058](https://github.com/openclaw/openclaw/issues/121058)已累积92条评论，用户对“issue关闭但问题依旧”表达了明显不满。PR侧呈现两条主线：内存子系统的架构级改造（授权契约、Phase 1C读隔离）和安全边界修复（跨渠道审批泄漏、多用户网关目录越权）。整体判断：项目迭代节奏快，但P1级可靠性债务仍在持续累积。

## 项目进展

今日已合并/关闭126条PR。从高关注PR来看，主要推进方向如下：

**内存子系统架构演进**（当日最重头的技术方向）
- [#121421 docs(memory): add multiplayer memory design and implementation plan](https://github.com/openclaw/openclaw/pull/121421)：为多玩家记忆建立公开设计文档，区分私人/对话/角色/共享记忆受众
- [#121422 feat(plugin-sdk): add memory authorization contract](https://github.com/openclaw/openclaw/pull/121422)：定义可序列化的插件SDK授权契约，作为Phase 0A基础
- [#121423 feat(memory): inspect selected authorization surface in shadow mode](https://github.com/openclaw/openclaw/pull/121423)：以影子模式检查授权运行时形态，不改变遗留行为
- [#121945 fix(memory): complete Phase 1C read isolation](https://github.com/openclaw/openclaw/pull/121945)：内容读取全面切换到授权运行时/上下文契约

**Anthropic 上下文管理**
- [#123402 feat(anthropic): opt-in server-side compaction](https://github.com/openclaw/openclaw/pull/123402)：引入可选的Anthropic服务端压缩（compact-2026-01-12），降低对客户端压缩重写前缀的依赖，有望保护warm prompt cache

**安全修复**
- [#122517 fix(approvals): prevent cross-channel exec approval leak to Telegram](https://github.com/openclaw/openclaw/pull/122517)：修复跨渠道exec审批请求落入Telegram的单独合格账户问题（P1）
- [#123421 fix(sessions): hide unowned host catalogs on multi-user gateways](https://github.com/openclaw/openclaw/pull/123421)：非管理员此前可列出主机用户的Claude Code/Codex等会话目录，存在越权信息暴露
- [#123216 feat(secrets): authenticated egress substitution proxy](https://github.com/openclaw/openclaw/pull/123216)：使secret类型存储值可被agent派生的`curl`、`gh`等子进程安全使用

**会话与CLI**
- [#123424 feat(sessions): legacy-main session migration engine](https://github.com/openclaw/openclaw/pull/123424)：一次性、所有者感知的`agent:main:*`旧会话迁移引擎，为未来从配置名单中移除main铺路
- [#122705 fix: clear CLI binding after manual compaction](https://github.com/openclaw/openclaw/pull/122705)：修复手动`/compact`后下一轮仍恢复压缩前CLI后端绑定的问题
- [#122344 fix(models): make picker discovery profile-aware](https://github.com/openclaw/openclaw/pull/122344)（已关闭）：模型选择器发现逻辑按运行时auth-profile排序

**Slack 与 UI**
- [#123426 [BACKPORT] fix(slack): keep global settings and monitor state live](https://github.com/openclaw/openclaw/pull/123426)：将两条已合入的Slack主分支修复backport到2026-07-31分支
- 移动端与Web UI多项修复：暗色模式跟随（[#123408](https://github.com/openclaw/openclaw/pull/123408)）、深链接大小写路由（[#123207](https://github.com/openclaw/openclaw/pull/123207)）、通知位置调整（[#123423](https://github.com/openclaw/openclaw/pull/123423)）、会话桌面按钮跳转修正（[#123412](https://github.com/openclaw/openclaw/pull/123412)）等

## 社区热点

- **[#121058 Silent reply failures still recurring after #116277 closed](https://github.com/openclaw/openclaw/issues/121058)（92条评论）**：用户报告#116277关闭后，监控cron仍在持续记录静默回复失败的新发生事件，包括关闭当天。核心诉求是可靠性问题必须有可验证的闭环，而非“关闭issue了事”。目前无fix PR。
- **[#7707 Feature Request: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)（48条评论）**：为记忆条目按来源（用户命令/网页抓取/第三方技能）添加信任等级，防止恶意指令藏在不可信内容中污染agent后续行为。这属于AI agent安全的基础设施需求，社区关注度高但已搁置6个月。
- **[#25592 Text between tool calls leaks to messaging channels](https://github.com/openclaw/openclaw/issues/25592)（48条评论，P1）**：agent在工具调用之间产生的内部文本（错误处理、处理确认、叙述）被当作可见消息路由到Slack/iMessage等渠道，既是UX问题也是信息泄漏。创建近半年，目前无fix PR。

## Bug 与稳定性

以下按严重程度排列（P1优先）：

| 级别 | Issue | 问题摘要 | 修复状态 |
|------|-------|----------|----------|
| P1 | [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败在#116277关闭后仍复发，无队列化reply payload | 无fix PR |
| P1 | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏到消息频道，内部处理被用户可见 | 无fix PR |
| P1 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失：无重试、无通知、无自动重启 | 无fix PR |
| P1 | [#47975](https://github.com/openclaw/openclaw/issues/47975) | 子代理会话完成不销毁，主会话变无响应 | 无fix PR |
| P1 | [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory插件阻塞回复；QMD引导初始化可压垮多agent网关（diamond lobster） | 无fix PR |
| P1 | [#91363](https://github.com/openclaw/openclaw/issues/91363) | 隔离cron一致“LLM request failed”，模型请求未达provider（👍6） | 无fix PR |
| P1 | [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat消息进入transcript但不触发回复（diamond lobster） | 无fix PR |
| P1 | [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子代理完成投递在direct-announce超时/drain/孤儿清理时丢失 | 无fix PR |
| P1 | [#95553](https://github.com/openclaw/openclaw/issues/95553) | 预算触发压缩硬编码约60秒上限，忽略`compaction.timeoutSeconds` | 无fix PR |
| P1 | [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update`产生混合文件所有权，doctor随后覆写配置 | 无fix PR |
| P1 | [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth刷新约10秒，导致cron/heartbeat超时失败 | 有linked-pr-open |
| P1 | [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多agent并发add/config互相覆盖、会话锁失效、子任务脱离 | 有linked-pr-open |
| P1 | [#121953](https://github.com/openclaw/openclaw/issues/121953) | DeepSeek对`[cron:]`前缀消息降优先级，cron turn停顿达分钟级 | 有linked-pr-open |
| P1 | [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev频道更新失败：npm不认识`workspace:*`协议，应用pnpm | 待处理（fix-shape-clear） |
| P2 | [#43747](https://github.com/openclaw/openclaw/issues/43747) | 内存管理“混乱”：3人团队各实例行为完全不一致（sqlite/文件/云端） | 无fix PR |
| P2 | [#114612](https://github.com/openclaw/openclaw/issues/114612) | `memory_index_chunks`和`memory_embedding_cache`无保留策略，最终填满磁盘 | 无fix PR |
| P2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool子进程泄漏，zombie积累导致运行时降级 | 无fix PR |
| 安全 | [#91283](https://github.com/openclaw/openclaw/issues/91283) | `minSecurity`等级顺序反转，`full`被当作最严格而非最宽松 | 已关闭（修复状态待确认） |

## 功能请求与路线图信号

- **记忆信任标签（[#7707](https://github.com/openclaw/openclaw/issues/7707)）**：内存投毒防御需求讨论度极高，与正在推进的记忆授权契约（[#121422](https://github.com/openclaw/openclaw/pull/121422)）方向一致，后续版本纳入概率大。
- **可配置性扩展**：[#45758](https://github.com/openclaw/openclaw/issues/45758)支持YAML配置格式；[#45501](https://github.com/openclaw/openclaw/issues/45501)可配置session启动消息；[#33102](https://github.com/openclaw/openclaw/issues/33102)为`--deliver`设置默认值。反映用户希望OpenClaw更贴合个人工作流。
- **成本可观测性（[#9016](https://github.com/openclaw/openclaw/issues/9016)）**：将OpenRouter按消息费用暴露给agent，使agent可在回复中附加成本信息。
- **自托管语音（[#45508](https://github.com/openclaw/openclaw/issues/45508)）**：webchat“朗读”和“语音输入”硬编码使用浏览器Web Speech API，忽略openclaw.json中的TTS/STT配置，自托管语音方案不可见。
- **投递队列TTL（[#16555](https://github.com/openclaw/openclaw/issues/16555)）**：为持久化投递队列增加TTL，避免网关重启后陈旧消息刷屏。
- **崩溃恢复阶梯（[#79165](https://github.com/openclaw/openclaw/issues/79165)）**：网关进入crash-loop时按递进策略恢复，而不是依赖KeepAlive无限重启同一份状态。
- **已出现落地信号的请求**：服务端压缩（[#123402](https://github.com/openclaw/openclaw/pull/123402)）、secret出口代理（[#123216](https://github.com/openclaw/openclaw/pull/123216)）、内存授权契约（[#121422](https://github.com/openclaw/openclaw/pull/121422)）均在今日PR中给出实现，大概率进入下一版本。

## 用户反馈摘要

- **“我从未看到任何内存以相同方式管理”**（[#43747](https://github.com/openclaw/openclaw/issues/43747)）：3人团队使用OpenClaw，一个实例做chunking/embedding存sqlite，另一个存文件，第三个存云端。同版本行为一致性是用户的基本期待。
- **静默失败是最大的信任杀手**（[#121058](https://github.com/openclaw/openclaw/issues/121058)、[#44925](https://github.com/openclaw/openclaw/issues/44925)、[#67777](https://github.com/openclaw/openclaw/issues/67777)等多个独立报告）：没有报错、没有重试、没有通知的消息丢失，在真实工作流中比显式报错更令人困扰。
- **“所有exec输出渲染为图片，无法复制、搜索、引用”**（[#105342](https://github.com/openclaw/openclaw/issues/105342)，已关闭修复）：Telegram渠道上`ls`、`docker ps`等命令输出全部图片化，这类交互细节直接影响日常可用性。
- **多智能体并发仍然不可靠**（[#43367](https://github.com/openclaw/openclaw/issues/43367)、[#43374](https://github.com/openclaw/openclaw/issues/43374)）：用户尝试并行4个agent时“所有LLM API调用同时超时”，而同样的API用curl即时响应——内部瓶颈而非provider问题。
- **备份功能对大型安装失效**（[#42273](https://github.com/openclaw/openclaw/issues/42273)，已关闭修复）：4GB以上的`.openclaw`目录时备份命令静默死亡，已标记already-fixed，用户可验证新版本。

## 待处理积压

以下高优Issue长期未关闭，建议维护者优先关注：

- [#25592](https://github.com/openclaw/openclaw/issues/25592)（P1，diamond lobster，48评论，2026-02-24创建）：工具调用间文本泄漏到消息频道，近6个月无fix PR。
- [#7707](https://github.com/openclaw/openclaw/issues/7707)（48评论，2026-02-03创建）：记忆信任标签功能请求，讨论热度高但无后续行动。
- [#44925](https://github.com/openclaw/openclaw/issues/44925)（P1，27评论，2026-03-13创建）：子代理完成静默丢失，与[#67777](https://github.com/openclaw/openclaw/issues/67777)、[#92433](https://github.com/openclaw/openclaw/issues/92433)同族，建议合并根因处理。
- [#43367](https://github.com/openclaw/openclaw/issues/43367)（P1，13评论，2026-03-11创建）：多智能体编排不稳定，有linked-pr-open，需持续跟踪合入进展。
- [#47975](https://github.com/openclaw/openclaw/issues/47975)（P1，10评论，2026-03-16创建）：子代理会话持久化导致主会话无响应。
- [#72015](https://github.com/openclaw/openclaw/issues/72015)（P1，diamond lobster，10评论，2026-04-26创建）：active-memory阻塞回复、QMD引导压垮网关。
- [#91363](https://github.com/openclaw/openclaw/issues/91363)（P1，10评论，👍6，2026-06-08创建）：隔离cron一致失败，社区关注度较高。
- [#97983](https://github.com/openclaw/openclaw/issues/97983)（P1，diamond lobster，9评论，2026-06-30创建）：iOS/WebChat消息不触发回复，移动端核心路径受影响。

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告（2026-08-14）

---

## 1. 生态全景

过去 24 小时，生态内 10 个活跃项目共产出约 **700 条 Issue 更新、770 条 PR 更新和 4 个版本发布**（Hermes v0.20.1、NanoClaw v2.2.0、IronClaw v1.2.0、CoPaw v2.1.0），整体处于高密度迭代期。OpenClaw 以单日 486 条 Issue / 500 条 PR 断层领先，构成生态核心参照系，但其 P1 可靠性债务（静默失败、子代理丢失）也集中暴露了整个品类的共性问题。各项目不约而同地在**记忆架构**（授权契约、信任标签、持久化连接器）、**供应链安全**（镜像签名、CSPRNG）与**成本优化**（服务端压缩、schema 预算）三个方向投入。国内生态加速融入：CoPaw（阿里 AgentScope 系）与 LobsterAI（网易有道）推动国产模型对接，DeepSeek 兼容性问题在多项目中出现。总体判断：生态正从"功能竞赛"转向**可靠性、安全性与成本工程的深水区**。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 健康度评估 |
|---|---|---|---|---|
| OpenClaw | 486（活跃 324 / 关闭 162） | 500（待合并 374 / 合并关闭 126） | 无 | ⚠️ 高速迭代，但 P1 可靠性债务持续累积 |
| Hermes Agent | 50（活跃 47 / 关闭 3） | 50（待合并 41 / 合并关闭 9） | v0.20.1（patch） | ⚠️ 迭代快，桌面端 gateway 误杀回归是核心风险 |
| IronClaw | 50 | 50 | v1.2.0（stable） | ✅ 架构重构与稳定发布并行，健康度高 |
| ZeroClaw | 50（74% 新增/活跃） | 50（80% 评审中） | 无（v0.8.x） | 🟡 安全加固周期，RFC 决策队列积压 |
| CoPaw | 46（活跃 29 / 关闭 17） | 50（待合并 31 / 合并关闭 19） | v2.1.0 + beta.5 | ⚠️ 功能速度快，但 2.1.0 回归与安全报告增多 |
| NanoBot | 11（活跃 10 / 关闭 1） | 31（合并关闭 9） | 无 | ✅ 高活跃高响应，稳定性修复闭环快 |
| NanoClaw | 2（新开 1 / 关闭 1） | 19 | v2.2.0 | 🟡 供应链安全突出，外部 PR 积压超 3 个月 |
| LobsterAI | 2（均 Open） | 10（合并关闭 6） | 无 | 🟡 UI/运营迭代中，测试补全类 PR 积压 4.5 个月 |
| PicoClaw | 2 | 9（6 个 Dependabot 待合并） | 无 | 🟡 依赖自动化良好，但核心 Issue 官方无响应 |
| Moltis | 1 | 4（均待合并） | 无 | 🟡 贡献活跃，维护者 review 滞后 |
| NullClaw / TinyClaw / ZeptoClaw | 0 | 0 | 无 | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**核心参照系，社区规模断层领先。** 单日 486 条 Issue 更新 ≈ 其余 9 个活跃项目之和的 2.3 倍；单条 issue（#121058）92 条评论，超过多数项目全日讨论总量。

**技术路线的差异化优势：**

- **全渠道覆盖最广**：Telegram / Slack / iMessage / WeChat / QQ / Discord / WebChat 等，且有移动端与 Web UI 的持续修复（暗色模式、深链接路由、通知位置）。
- **内存架构走在生态最前沿**：已落地"多玩家记忆设计文档 + 插件 SDK 授权契约 + Phase 1C 读隔离"的组合，直接回应多用户场景下的记忆隔离与越权风险；记忆信任标签（#7707）等高热度提案与其方向一致。
- **前瞻性集成**：Anthropic 服务端压缩（保护 warm prompt cache）、secret 出口代理（让 agent 派生的 curl/gh 安全使用凭据），均为生态内首个实现。
- **安全修复响应快**：跨渠道审批泄漏（P1）、多用户网关目录越权均在当日给出 PR。

**相对短板：** P1 级可靠性债务集中在**消息投递确认**（静默失败无队列、子代理结果丢失）与**多智能体并发稳定性**（#43367），且社区已出现"issue 关闭但问题依旧"的信任情绪（#121058）。相比 NanoBot 的"当日 bug 当日修"、ZeroClaw 的"安全审计闭环"，OpenClaw 的修复吞吐量虽大，但**可验证闭环**不足。

**与同类差异化**：Hermes 桌面优先（Desktop + TUI）、IronClaw 走 kernel 化（pluggable loops）、CoPaw 绑定 Qwen 生态，而 OpenClaw 是唯一试图覆盖"全渠道 + 多智能体编排 + 插件生态 + 内存治理"全栈的平台型项目——这是其社区规模优势的来源，也是其可靠性债务复杂度高于同行的原因。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求（代表 issue/PR） |
|---|---|---|
| **静默失败与投递可靠性** | OpenClaw、NanoBot、Hermes、CoPaw、ZeroClaw | 消息/任务丢失无报错、无重试、无通知；cron 单次持久化失败即永久死亡（NanoBot #5373）；桌面重启误杀 gateway 后不拉起（Hermes #83683）；多步任务中断需手动"继续"（CoPaw #6921）；headless 会话路径未持久化（ZeroClaw #9929） |
| **记忆架构与安全** | OpenClaw、NanoBot、Hermes、NanoClaw、IronClaw、Moltis、ZeroClaw、LobsterAI | 多玩家记忆授权/读隔离（OpenClaw #121421-121423）；记忆信任标签防投毒（OpenClaw #7707）；会话归档截断导致内容永久丢失（NanoBot #5377）；跨会话记忆不可靠（IronClaw #7185）；持久化连接器层（Moltis #1190）；Hindsight 长期记忆集成（NanoClaw #2420） |
| **供应链与安全边界** | OpenClaw、NanoBot、NanoClaw、ZeroClaw、CoPaw | 镜像签名从"仅供参考"升级为强制门禁（NanoClaw #3238/#3158/#3241）；配对码切换 CSPRNG（NanoClaw #3229）；dashboard 路径穿越与会话队列竞态同日修复（ZeroClaw #9969/#9674）；exec.allowPatterns 被 shell 链式命令绕过（NanoBot #5306）；插件静默创建 cron 的权限缺口（CoPaw #6916） |
| **MCP 工程化** | NanoBot、NanoClaw、IronClaw、ZeroClaw、OpenClaw、LobsterAI | schema token 预算机制（NanoBot #5388）；Apps 元数据与内嵌 UI（NanoBot #5386）；per-server disabledTools 与 cwd 支持（NanoClaw #2624/#3231）；自定义 MCP 认证流程卡死（IronClaw #7626/#7627）；Agent Plugins 1.0 标准加载（ZeroClaw #9810） |
| **多会话/多智能体并发** | OpenClaw、CoPaw、Hermes、NanoBot | 并发 agent 互相覆盖、LLM 调用内部瓶颈（OpenClaw #43367）；并发会话状态写入错误 session 文件（CoPaw #7011）；spawn 父子会话持久化（CoPaw #7004）；cron 独立 session key 防上下文串扰（NanoBot #4550） |
| **上下文成本优化** | OpenClaw、ZeroClaw、NanoBot、Hermes | 服务端压缩保护 prompt cache（OpenClaw #123402）；稳定 session_id 获取 OpenRouter 缓存折扣（ZeroClaw #9631，👍6）；MCP schema 预算（NanoBot #5388）；provider 用量/成本数据归一化（Hermes #85769） |
| **国产模型生态** | CoPaw、Hermes、OpenClaw、PicoClaw | 阿里云百炼 token plan（CoPaw #6973）；DeepSeek 不支持 response_format 导致标题生成 400（Hermes #83390）；DeepSeek 对 cron 前缀降优先级（OpenClaw #121953）；ASR 模型绕过名称限制通用化（PicoClaw #3331） |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构/路线 | 关键差异点 |
|---|---|---|---|---|
| **OpenClaw** | 全渠道 + 多智能体编排 + 记忆治理 | 个人/团队全渠道重度用户 | 插件 SDK、内存授权契约、Anthropic 服务端压缩 | 唯一全栈平台化路线；社区最大但可靠性债务最重 |
| **Hermes Agent** | 桌面优先（Desktop/TUI）+ 语音/技能 | 桌面端重度用户 | Python 栈；Desktop app + gateway 进程模型 | 桌面集成最深；当前最大痛点是 gateway 生命周期管理 |
| **IronClaw** | Agent Kernel、pluggable loops | 云托管/开发者 | Rust；unbound-turns 模型；NEAR AI Cloud 生态 | 架构最激进——从"agent 实现"转向"可插拔 kernel"；v1.2.0 稳定版与 #7482 Epic 重构并行 |
| **NanoBot** | 轻量高响应 + MCP 深耕 | 个人开发者 | 模块化；cron/consolidation 可靠性修复密集 | bug 修复闭环速度生态最快（当日报当日修）；健康度标杆 |
| **NanoClaw** | 供应链安全 + Agent 插件化 | 团队/企业 | Agent Plugins 1.0.0；镜像签名强制门禁 | 安全自动化链路最完整（验证→签名→自动 bump）；外部贡献治理是短板 |
| **ZeroClaw** | 安全优先 + RFC 驱动 | 安全敏感用户 | Rust；v0.9.0 安全加固周期；RFC 决策队列 | 安全审计闭环好（p1 修复当日合并）；但大量 RFC 与 p1 PR 滞留在决策/作者补料状态 |
| **CoPaw** | Qwen 生态 + OS Shell 桌面化 | 国内用户/开发者 | QwenPaw OS Shell；App Center 统一目录 | 国产模型集成诉求最集中（百炼、CopilotKit）；2.1.0 后回归与安全误报问题需止血 |
| **LobsterAI** | 产品运营导向（签到/积分/企业版） | C 端用户/企业 | Electron 系 renderer；UI 统一重构中 | 网易系；功能迭代偏产品运营而非底层基础设施；测试基建积压 4.5 个月 |
| **Moltis** | 长期记忆与跨渠道数据接入 | 数据重度用户/知识工作者 | 持久化连接器层（CalDAV/Slack/Discord/Matrix/Teams） | 连接器持久化方向生态内唯一；但 review 吞吐不足，PR #1190 已等 3 天无评审 |
| **PicoClaw** | 轻量个人助手 | 个人轻量用户 | Go；Web UI + ASR | 依赖维护自动化良好；但 WebUI 长会话卡顿 24 天无官方响应 |

---

## 6. 社区热度与成熟度

**活跃度分层：**

- **第一梯队（日均 40+ 更新，快速迭代期）**：OpenClaw（486/500）、Hermes（50/50）、IronClaw（50/50）、ZeroClaw（50/50）、CoPaw（46/50）。这五个项目贡献了生态约 95% 的讨论量。
- **第二梯队（日均 1-31，质量巩固期或瓶颈期）**：NanoBot（11/31）、NanoClaw（19 PR）、LobsterAI（10 PR）、PicoClaw（9 PR）、Moltis（4 PR）。NanoBot 处于"质量巩固 + 高响应"的最佳状态；NanoClaw/ZeroClaw 处于安全能力建设的高质量产出期。
- **第三梯队（无活动）**：NullClaw、TinyClaw、ZeptoClaw——可能处于静默开发或事实停滞，建议观察后续版本发布节奏再评估。

**阶段判断：**

- **快速迭代/功能扩张**：OpenClaw（内存子系统重构、多玩家记忆）、Hermes（Box 技能、MiniMax TTS、STT 增强）、CoPaw（OS Shell、多项目目录、数据导入）、IronClaw（pluggable loops、性能优化系列）。
- **质量巩固/安全加固**：ZeroClaw（v0.9.0 安全周期，多个 p1 修复当日闭环）、NanoClaw（供应链自动化闭环）、NanoBot（cron 持久化、会话存档一致性修复）。
- **评审瓶颈型**：Moltis（4 个 PR 全部待 review，含阻塞性构建修复）、LobsterAI（测试 PR 积压 4.5 个月）、NanoClaw（外部 PR 等待 98 天/95 天）、ZeroClaw（SSRF 安全 PR 搁置 40 天）。**维护者吞吐量正在成为生态健康度的下一个瓶颈。**

---

## 7. 值得关注的趋势信号

1. **可靠性 > 功能，静默失败是第一信任杀手。** 跨 5 个项目的最高频 P1 投诉都是"无报错、无重试、无通知的丢失"（OpenClaw #121058、NanoBot #5373、Hermes #83683、CoPaw #6921、ZeroClaw #9929）。趋势：**队列化投递确认、可观测性钩子、失败重试/通知将成为 AI 助手的标配能力**，开发者应将其视为与模型能力同等重要的一等公民。

2. **记忆安全从功能走向基础设施。** OpenClaw 的授权契约/读隔离落地 + 信任标签提案（#7707，48 评论）+ ZeroClaw 记忆生命周期解耦 + Moltis 持久化连接器，共同指向同一判断：**记忆投毒防御（来源信任分级、多用户隔离、插件写入鉴权）是 AI agent 的下一个安全主战场**。设计记忆系统时应把授权模型前置，而非事后补救。

3. **上下文成本工程化成为规模化第一约束。** 三条独立路径同时出现：OpenClaw 的 Anthropic 服务端压缩、ZeroClaw 的 OpenRouter session_id 缓存复用（👍6）、NanoBot 的 MCP schema 预算。**token 成本已从账单问题变为架构约束**——compaction、缓存亲和性、schema 裁剪应写入默认架构评审清单。

4. **供应链安全正在"默认化"。** NanoClaw 把镜像签名从"仅供参考"升级为可强制门禁（可替代人工 approving review）；ZeroClaw 同日合并两个 p1 安全修复并关闭一个认证绕过 issue；CSPRNG 替换与 SSRF 防护在 4 个项目中独立出现。**对开发者建议：签名验证、熵源安全、路径穿越防护应进入 CI 强制检查，而非依赖贡献者自觉。**

5. **多智能体并发是系统性短板，无人完全解决。** OpenClaw #43367（并发覆盖/锁失效）、CoPaw #7011（并发写错 session 文件）、Hermes 五连 P1（gateway 生命周期）、NanoBot #4550（cron 上下文串扰）——**并发状态隔离与子代理生命周期管理是当前生态最不成熟的技术面**，也是差异化机会最大的方向。

6. **国产模型生态从"能用"转向"深度集成"。** DeepSeek 的 response_format 兼容性、cron 消息优先级问题同时出现在 Hermes 与 OpenClaw；阿里云百炼计费集成在 CoPaw 呼声高涨；PicoClaw 用户要求 ASR 模型选择自由化。**国内开发者对"模型路由可配置、计费可对接、行为可预期"的需求正在超过功能数量本身。**

7. **本地优先与隐私控制回归。** Hermes 的原生客户端请求（#35966）、IronClaw 的本地文件桥（#2117）、ZeroClaw 的本地推理硬件支持（#9109）、PicoClaw 语音自托管诉求，形成对"第三方平台依赖 + 云端锁定"的反弹。**混合部署（本地数据平面 + 云端模型平面）可能是下一轮产品分化的关键卖点。**

8. **外部贡献者 backlog 是普遍隐忧。** NanoClaw 外部 PR 等待 98 天、ZeroClaw SSRF 安全 PR 搁置 40 天、LobsterAI 测试 PR 积压 4.5 个月、Moltis 阻塞性修复无 review。**对生态维护者的警示：活跃度与合并吞吐量的剪刀差正在消耗社区信任**——建议设立外部 PR 的 SLA（如 7 天初评）或批量 triage 机制。

---

**一句话总结**：个人 AI 助手生态正处于"功能富余、可靠性稀缺"的转折点——谁能率先把**静默失败、记忆安全、上下文成本、供应链信任**这四件事做成默认可验证的工程能力，谁就能在下一阶段建立真正的护城河。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-14

## 今日速览

过去 24 小时 NanoBot 项目保持高度活跃：共产生 11 条 Issue 更新（其中 10 条新开/活跃、1 条关闭）和 31 条 PR 更新（其中 9 条已合并/关闭）。最值得关注的是社区围绕 **cron 调度器持久化故障导致永久失效**（#5373）和 **会话存档失败引发状态不一致**（#5377/#5378）两个核心稳定性问题展开了密集的修复提交，反映出维护者对生产环境可靠性的高度重视。此外，MCP 生态（schema 预算、Apps 元数据、Telegram 贴纸）和 WebUI 体验优化（会话协作、文件夹选择器）仍是功能迭代的主要方向。整体来看，项目处于**高活跃、高响应**状态，健康度良好。

---

## 版本发布

今日无新版本发布（最新 Releases 为空）。

---

## 项目进展

今日合并/关闭的 PR 共 9 条，涉及以下关键推进：

### 1. WebUI 体验完善
- **PR #5381 — 原生工作区文件夹选择器（已合并）**：为本地托管的 WebUI 会话添加 macOS/Windows/Linux 原生文件夹选择能力，仅在内网回环连接时启用，同时保留手动路径输入作为远程访问的备选方案。这填补了 WebUI 本地文件操作体验的空白。
  https://github.com/HKUDS/nanobot/pull/5381
- **PR #5384 — 恢复纯转录会话历史展示（已合并）**：修复了仅有展示转录（display transcript）而无规范会话 JSONL 时侧栏无法发现历史会话的问题，并确保规范会话元数据始终优先，避免有损重建模型上下文。
  https://github.com/HKUDS/nanobot/pull/5384

### 2. Cron 调度器稳定性修复（迭代与合并）
- **PR #5374 / #5375（均已关闭）**：针对 #5373 的 cron 调度器永久失效问题提交了两版修复，后续被更完善的 **PR #5376** 取代（仍在开放中）。关闭的 PR 表明该问题已进入稳定的修复通道。
  https://github.com/HKUDS/nanobot/pull/5374
  https://github.com/HKUDS/nanobot/pull/5375

### 3. 长期挂起 PR 的清理（关闭，未合并）
- **PR #4556 — Dream consolidation 接入 model_override（已关闭）**：解决 #4029，让 Dream 周期性记忆整合时能使用独立配置的模型。该 PR 自 6 月 26 日开启，今日关闭。
  https://github.com/HKUDS/nanobot/pull/4556
- **PR #4550 — cron 每次运行使用独立 session key（已关闭）**：修复 #4082，避免 cron 任务重复使用同一 session key 导致上下文串扰。同样为 6 月底的 PR，今日关闭。
  https://github.com/HKUDS/nanobot/pull/4550

> 注：PR #4556 和 #4550 的关闭原因未在数据中明确标注（可能因冲突被取代），但其修复目标已由后来更完整的方案（如 #4549、#4551 仍在开放中）承接。总体而言，今日关闭的 PR 表明项目在**清理历史技术债方面迈出了实质性一步**。

---

## 社区热点

今日讨论最活跃的 Issue 集中在以下议题：

### 1. #5373 Cron 调度器永久失效（评论 1，关联 3 个 PR）
**核心诉求**：一次持久化失败（磁盘满、权限变化、文件锁）即可让 cron 调度器**静默且永久地死亡**——异常从 `_on_timer` 抛出后，因 `_arm_timer()` 位于 `try/finally` 之外，下一个 tick 永远不会被触发。用户对这类"单点故障导致长期静默失联"的稳定性问题反馈强烈。
https://github.com/HKUDS/nanobot/issues/5373

### 2. #5298 MCP 大型工具集的 schema 上下文成本（评论 1，有对应 PR #5388）
用户 `kuaijiemei` 关注到大型 MCP 工具集对模型上下文的巨大消耗：`ToolRegistry.get_definitions()` 将所有 MCP schema 无差别传给 provider，导致 token 成本居高不下。这代表了 **MCP 工具集规模化后对资源控制的需求**。
https://github.com/HKUDS/nanobot/issues/5298

### 3. #5289 Telegram 贴纸与会话内消息反应（评论 1，有对应 PR #5387）
**核心诉求**：Telegram 渠道完全不支持贴纸（`send_sticker` 从未被调用），入站贴纸显示为空消息；反应（reaction）仅作为内部确认存在。用户希望获得完整的 Telegram 表达能力。
https://github.com/HKUDS/nanobot/issues/5289

### 4. #5366 WebUI Agent 活动文本本地化（评论 1）
用户 `ZhouJ-sh` 指出 WebUI 虽然支持语言切换，但 Agent 活动区域的文本（如 "Working for…"、"Searching files…"）仍为英文硬编码。这是**国际化/本地化进程中的具体遗漏**。
https://github.com/HKUDS/nanobot/issues/5366

---

## Bug 与稳定性

按严重程度排列今日报告的 Bug：

| 严重度 | Issue/PR | 问题描述 | 是否有 Fix PR |
|--------|----------|----------|--------------|
| 🔴 高（安全） | [#5306](https://github.com/HKUDS/nanobot/issues/5306) （已关闭） | `exec.allowPatterns` 可被 shell 链式命令绕过，导致意外的命令执行。属于安全漏洞，今日关闭（可能已修复或转入安全流程）。 | 待确认 |
| 🔴 高（稳定性） | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | cron 调度器因单次持久化失败而**永久死亡**，`_arm_timer()` 位于异常保护之外，后续任务全部静默停止。 | ✅ [PR #5376](https://github.com/HKUDS/nanobot/pull/5376)（开放中，比已关闭的 #5374/#5375 更完善） |
| 🟠 中（数据一致性） | [#5378](https://github.com/HKUDS/nanobot/issues/5378) | `Session.enforce_file_cap()` 在调用归档回调**之前**就变更了会话状态；若归档失败，内存中的会话已丢失溢出数据，后续成功保存也无法恢复。 | ✅ [PR #5380](https://github.com/HKUDS/nanobot/pull/5380) |
| 🟠 中（数据一致性） | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | `Consolidator.archive()` 将输入截断到 token 预算内，但调用方仍将 `last_consolidated` 推进至整个批次，导致被截断的内容**永久丢失**且不会重试。 | ✅ [PR #5379](https://github.com/HKUDS/nanobot/pull/5379) |
| 🟡 低（WebUI） | [#5368](https://github.com/HKUDS/nanobot/issues/5368) | Agent 回合仍在生成时，copy/fork 按钮就已出现，形成"完成信号冲突"（活动仍显示 Working，但操作按钮已可用）。 | 暂无 |

**其他稳定性相关 PR**（今日提交/更新）：
- **PR #5382 — Windows 下 os.replace() 瞬时 PermissionError 重试**：`JsonlSessionStore.save()` 在 Windows 上遇到 `[WinError 5]` 时会导致整个 gateway 崩溃（heartbeat cron 的定期保存中遇到两次）。该 PR 增加了重试逻辑。
  https://github.com/HKUDS/nanobot/pull/5382
- **PR #5383 — 规范会话文件访问的序列化**：为同一 sessions 目录上的 JSONL 读取/写入引入全局锁，并协调多个指向同一目录的 `SessionManager` 实例，防止并发写坏。
  https://github.com/HKUDS/nanobot/pull/5383

> **小结**：今日 Bug 集中在 **"持久化/归档失败导致状态丢失或进程死亡"** 这一主题上，且每一项都已有或正在有对应的修复 PR，可见项目对数据安全和调度可靠性的响应非常积极。

---

## 功能请求与路线图信号

### 1. MCP 生态增强（已有明确 PR 对应）
- **#5298 MCP schema 预算机制** → [PR #5388](https://github.com/HKUDS/nanobot/pull/5388) 已提交：为模型可见的 MCP 工具 schema 设置可选的字节预算，默认关闭，按确定性规则选取子集，且不影响工具的注册与可执行性。**预计纳入下一版本。**
- **#5251 MCP Apps host 支持（WebUI 内嵌 UI）** → [PR #5386](https://github.com/HKUDS/nanobot/pull/5386) 已提交：将 MCP Apps 的结果元数据与丰富的调用结果字段从模型可见文本中分离，通过工具进度事件传递结构化数据。**WebUI 内嵌 App UI 的能力已看到落地路径。**
  https://github.com/HKUDS/nanobot/issues/5251

### 2. Telegram 交互能力扩展
- **#5289 贴纸支持 + Agent 主动消息反应** → [PR #5387](https://github.com/HKUDS/nanobot/pull/5387) 已提交：暴露入站贴纸的 `file_id`、emoji、set name，并在完整回复为贴纸标记时复用该贴纸发出。**有较大概率纳入下一版本。**

### 3. WebUI 协作与可用性
- **#5358（PR）会话协作 via mentions**：为持久化 WebUI 会话分配服务端持有的稳定 `@name`，可在 composer 中通过提及选择对等会话。这是将 WebUI 从单人工具推向**协作平台**的重要信号。
  https://github.com/HKUDS/nanobot/pull/5358
- **#5366 Agent 活动文本本地化**：用户 `ZhouJ-sh` 明确提出 UI 语言切换后 Agent 活动文本仍为英文的问题，预计会在后续国际化迭代中覆盖。

### 4. Agent 记忆系统提案（外部推广类）
- **#5372 ViBo 记忆系统集成提案**：外部开发者 `vnbochkarev-netizen` 推荐其 ViBo 记忆系统（含免费试用）。这代表了用户对"跨会话持久记忆"的真实需求，但带有明显推广性质，需维护者谨慎评估其与现有记忆/整合方案的关系。
  https://github.com/HKUDS/nanobot/issues/5372

---

## 用户反馈摘要

- **稳定性痛点明确**：多个用户（`rickererer`、`dajiaohuang`）深挖了"失败后静默不退"和"失败后状态已损坏"这两类问题，说明生产环境中持久化/归档失败并非理论风险，而是实际发生过的事件（如 PR #5382 的 Windows 错误在 2026-08-11 一天内出现两次）。
- **MCP 成本诉求真实**：用户 `kuaijiemei` 对大型 MCP 工具集的上下文开销给出了具体观察，说明这一诉求来自实际使用场景而非理论推演。
- **Telegram 功能缺口**：用户对贴纸和反应的支持诉求清晰，且当前实现中"入站贴纸显示为空消息"是明显的体验缺陷。
- **WebUI 细节反馈**：`ZhouJ-sh` 连续提交了 #5366（本地化）和 #5368（运行中复制/分叉按钮）两个前端细节问题，显示用户对 UI 完成度的要求较高，同时也说明 WebUI 正在被更重度地使用。
- **Matrix 设备信任问题持续未解**：#4841 自 7 月 7 日提出，且今日仍有更新（8 月 13 日），但Issue 仍开放。用户 `orrinwitt` 在 Element 客户端中遇到 bot 设备"不受信任"的告警，且缺乏 SAS 验证路径——这是长期未关闭的老问题（详见下文"待处理积压"）。

---

## 待处理积压

以下列出长期未响应或值得维护者重点关注的历史项：

### 1. ⚠️ #4841 Matrix bot 设备信任问题（开放 38 天，今日有更新）
**Issue**：`e2eeEnabled: true` 时 bot 在 Element 中始终显示为 "Untrusted"，且无跨签名或 bot 发起的 SAS 验证路径。
**状态**：今日有更新（8 月 13 日），但无对应 PR。
**建议**：功能完整性 / 安全信任问题，涉及 E2EE 体验，建议尽快评估并排期。
https://github.com/HKUDS/nanobot/issues/4841

### 2. ⚠️ PR #4549 / #4551 — Heartbeat 增强（已开放 49 天）
- **PR #4549**：为 heartbeat 增加 `model_override` 配置，允许使用更便宜的模型。
- **PR #4551**：增加 `isolated_session` 配置，允许 heartbeat 在目标聊天会话中共享上下文。
**状态**：两者自 6 月 26 日开启至今未合并，今日有更新但无明确推进动作。
**建议**：这两个 PR 是用户可感知的功能增强（降低 heartbeat 成本 + 上下文可选共享），建议维护者明确合并意向或给出反馈。
https://github.com/HKUDS/nanobot/pull/4549
https://github.com/HKUDS/nanobot/pull/4551

### 3. ⚠️ PR #4550 / #4556 生命周期过长后关闭（已关闭）
这两个 PR 均为 6 月 26 日开启、今日关闭（见"项目进展"），虽已关闭，但其修复事项（cron 会话隔离、Dream 模型覆盖）是否已完全落地到主干，建议在后续 Release 说明中向社区同步。

---

**日报生成时间**：2026-08-14
**数据来源**：HKUDS/nanobot GitHub Issues & PRs（截至 2026-08-14 的过去 24 小时更新）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-14

## 1. 今日速览

- 24 小时内项目保持高活跃：50 条 Issue 更新（47 条新开/活跃，3 条关闭），50 条 PR 更新（41 条待合并，9 条已合并/关闭），并发布 v0.20.1 补丁版本。
- 当前社区最集中的痛点是**桌面端启动/重启误杀消息网关**：至少 5 个 P1 级 Issue 指向同一回归点，Windows 和 macOS 用户均报告 WeChat/QQ/Telegram 在桌面应用重启后静默，必须手动拉起 gateway。
- 已合并/关闭的 PR 主要修复了桌面端截图粘贴失败、推理内容渲染崩溃、工具缓存类型边界等问题；另有多个 STT/TTS/唤醒词、会话搜索、Discord 路由修复 PR 等待合并。
- 长期存在的 TUI 弹窗不可见问题（#69592）仍未解决，已影响 `/sessions`、`/switch`、`/resume` 等核心会话流程。
- 项目整体迭代速度很快，但平台集成稳定性（桌面端、Windows、macOS、Gateway 生命周期）是当前最主要的健康度风险。

## 2. 版本发布

### v2026.8.13 / Hermes Agent v0.20.1
- 发布日期：2026-08-13
- 性质：Patch release，将 v0.20.0 以来约 656 个 PR 汇总为稳定标签，面向 Docker 镜像、托管部署以及按最新 tag 安装的下游消费者。
- 迁移注意：官方未标注破坏性变更；但已知 0.20.0 存在桌面端 gateway 重启回归，升级到 v0.20.1 后建议重点验证桌面应用重启时 gateway 能否被正确拉起。

链接：[Release v2026.8.13](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.13)

## 3. 项目进展

今日关闭/合并的重要 PR（截至数据时间）：

- [#84155 fix(desktop): persist dropped screenshot bytes before attach](https://github.com/NousResearch/hermes-agent/pull/84155)  
  修复 macOS Finder 截图拖入桌面端后提交时报 `image not found` 的问题，现在会先持久化临时文件再附加。

- [#67257](https://github.com/NousResearch/hermes-agent/pull/67257) / [#67251](https://github.com/NousResearch/hermes-agent/pull/67251)  
  fix: desktop crash on reasoning content (RangeError) + py39 compat + profile pin  
  修复桌面端因渲染 reasoning/thinking 内容导致无限递归、启动崩溃的问题，同时补充 Python 3.9 兼容与 profile pin。

- [#85707 fix(cache): establish typed tool-schema boundary before planned_tools[-1]](https://github.com/NousResearch/hermes-agent/pull/85707)  
  在原生工具缓存路径中先规范化工具 schema 类型，再写入 `cache_control` marker，避免越界或类型错误。

值得关注的待合并 PR：

- [#85769 fix(usage): normalize every provider cache/usage wire shape in normalize_usage](https://github.com/NousResearch/hermes-agent/pull/85769)  
  整合 5 个重叠 PR，修复 provider 缓存/用量数据结构不同导致 token 统计被归零、成本估算不准的问题。

- [#85767 feat(skills): add bundled Box productivity skill](https://github.com/NousResearch/hermes-agent/pull/85767)  
  新增 Box 云文件管理技能，通过官方 `@box/cli` 和 REST fallback 覆盖搜索、元数据、Box AI、Hubs、Webhooks 等能力。

- [#85771 feat(tts): add a MiniMax chunked-PCM streaming provider](https://github.com/NousResearch/hermes-agent/pull/85771)  
  为 `tts.provider: minimax` 增加 chunked-PCM 流式能力，避免远程 gateway 场景下一次性发送数 MB base64 音频。

- [#85764 fix(session-search): recall /new-reset sessions in the current lineage](https://github.com/NousResearch/hermes-agent/pull/85764)  
  修复 `/new` 重置会话后 session_search 无法召回上一夜会话内容的问题。

- [#85765 fix(discord): preserve thread routing for progress edits](https://github.com/NousResearch/hermes-agent/pull/85765)  
  修复 Discord 长任务进度消息编辑时从线程误发到父频道的问题。

- [#85766 fix(desktop): stop Sessions list bounce at date dividers](https://github.com/NousResearch/hermes-agent/pull/85766)  
  修复虚拟化 Sessions 列表在日期分割线附近跳动、无法聚焦的问题。

## 4. 社区热点

- [#66616 Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616)（25 评论）  
  自动新鲜度探针发现 `/docs/api/skills-index.json` 已落后 29.8 小时（限制 26 小时），社区围绕 CI 重建链路和索引可靠性展开讨论。

- [#83683 Desktop restart reaps the live gateway but never relaunches it](https://github.com/NousResearch/hermes-agent/issues/83683)（20 评论）  
  用户集中反馈桌面应用重启后消息网关被强杀且不自动拉起，WeChat/QQ/Telegram 全部静默，是当前第一痛点。

- [#84834 Webhook Revolution — graph-gated repair campaign (meta-issue)](https://github.com/NousResearch/hermes-agent/issues/84834)（16 评论）  
  社区提出对整个 webhook 表面进行 5×2×3 修复战役，覆盖 ingress、execution、delivery、configuration、管理 UI、部署和文档，属于大型重构倡议。

- [#69592 /sessions and /models overlays invisible with ambient widget dock](https://github.com/NousResearch/hermes-agent/issues/69592)（12 评论）  
  TUI 用户反映 `/sessions`、`/switch`、`/resume`、`/models` 等核心流程在 ambient widget 存在时不可用，且 `/reload` 静默失效。

- [#83390 Auxiliary title_generation fails on DeepSeek](https://github.com/NousResearch/hermes-agent/issues/83390)（9 评论，2 👍）  
  配置 `provider: auto` 或显式路由 DeepSeek 时，辅助标题生成因 `response_format` 不被支持而返回 HTTP 400。

## 5. Bug 与稳定性

### P0 / P1（严重回归 / 服务不可用）

- [#83683 Desktop restart reaps the live gateway but never relaunches it (P1)](https://github.com/NousResearch/hermes-agent/issues/83683)  
  0.20.0 回归，桌面应用每次重启都会 force-kill 正在运行的消息 gateway 且不再启动。暂无修复 PR。

- [#85344 macOS: _reap_unsupervised_gateway_orphans kills launchd-supervised gateway (P1)](https://github.com/NousResearch/hermes-agent/issues/85344)  
  桌面 serve 启动时向 launchd 托管的 `ai.hermes.gateway` 发送 SIGTERM，导致 macOS 上 gateway 被误杀。暂无修复 PR。

- [#85368 gateway process repeatedly killed (SIGKILL, suspected_oom=False) (P1)](https://github.com/NousResearch/hermes-agent/issues/85368)  
  Windows 上 gateway 在启动后或数小时后被 SIGKILL，消息平台持续离线直到手动重启。暂无修复 PR。

- [#84855 Permission denied to kill orphaned gateway PID (P1)](https://github.com/NousResearch/hermes-agent/issues/84855)  
  Hermes Desktop 启动时尝试收割孤儿 gateway 但权限不足，导致 Windows 上 gateway 被关停且无法正常接管。暂无修复 PR。

- [#85044 Windows Desktop serve startup reaps standalone gateway and never restarts it (P1)](https://github.com/NousResearch/hermes-agent/issues/85044)  
  通过 `hermes gateway install` 安装的 Scheduled Task 托管 gateway，在每次桌面 serve 启动时被杀死且不重启。暂无修复 PR。

- [#81639 _canonicalize_api_tool_calls mutates stored history (P0, 已关闭)](https://github.com/NousResearch/hermes-agent/issues/81639)  
  工具调用参数被替换为 `{}` 并写入持久化历史，导致会话卡死在 reasoning-only 响应；已作为重复关闭，需确认根治修复是否已合入。

### P2（功能受损 / 平台兼容）

- [#83846 ZIP fallback deletes the built desktop app and never rebuilds it](https://github.com/NousResearch/hermes-agent/issues/83846)  
  Windows 非系统盘更新时回退 ZIP 包，但删除了已构建的桌面应用且不重建，之后更新一直显示 “Already up to date”。

- [#52339 Terminal update rebuilds Desktop locally but leaves /Applications/Hermes.app stale](https://github.com/NousResearch/hermes-agent/issues/52339)  
  macOS 上终端 `hermes update` 只更新 repo 内构建产物，不更新已安装的 `.app`，产生 split-brain 状态。

- [#83427 browser_exec crashes: pydantic_core ModuleNotFoundError](https://github.com/NousResearch/hermes-agent/issues/83427)  
  桌面端因 PYTHONPATH 指向 Hermes 自身 venv，Browser Use 模式的每次调用都崩溃。

- [#80117 SQLite POSIX lock conflict causes APIConnectionError](https://github.com/NousResearch/hermes-agent/issues/80117)  
  `sqlite_safe_read` 拒绝读取同一进程内已有活跃连接的 state.db，导致 gateway 出现 APIConnectionError。

- [#72064 oneshot -z has no way to skip built-in memory injection](https://github.com/NousResearch/hermes-agent/issues/72064)  
  `--ignore-rules` 被静默忽略，oneshot 模式无法跳过内置记忆注入。

- [#76267 Windows sync_back drops remote sandbox file changes](https://github.com/NousResearch/hermes-agent/issues/76267)  
  远程终端销毁后 `sync_back` 在 Windows 主机上丢失远端文件编辑，技能/配置/缓存变更可能静默丢失。

- [#85406 vision_analyze fails for sandbox-side paths on Windows host + Docker](https://github.com/NousResearch/hermes-agent/issues/85406)  
  Windows 主机 + Docker 终端时，`Path()` 把 POSIX 路径 `/workspace/...` 转换成反斜杠，导致容器内 exec-read 失败。

- [#83340 hermes cron run reports 'failed' without executing the job](https://github.com/NousResearch/hermes-agent/issues/83340)  
  桌面应用 shell 中执行 `hermes cron run` 时报 failed，但任务实际没有被执行。

- [#85104 Desktop: same assistant message rendered twice in chat view](https://github.com/NousResearch/hermes-agent/issues/85104)  
  数据库只存储一条记录，前端渲染层却出现同一消息显示两次，属于 UI 渲染问题。

- [#85745 Desktop: profile tab switch shows wrong session list](https://github.com/NousResearch/hermes-agent/issues/85745)  
  从默认 profile 切到 bubu profile 时，会话列表仍显示默认 profile 的会话，且 WS 未连接到 bubu 后端。

### P3 / 低严重度

- [#66616 Skills index stale/degraded](https://github.com/NousResearch/hermes-agent/issues/66616)  
  skills-index.json 超过 26 小时未更新，影响文档站和技能发现，属于 CI/部署链路问题。

- [#83390 DeepSeek title_generation HTTP 400](https://github.com/NousResearch/hermes-agent/issues/83390)  
  DeepSeek 当前不支持 `response_format` 类型，辅助标题生成请求失败。

- [#84058 Desktop composer caret lost when tool call starts](https://github.com/NousResearch/hermes-agent/issues/84058)  
  macOS 桌面端用户正在输入时，工具调用一开始光标即消失，需要重新点击输入框。

考虑优先级：**桌面端 gateway 收割逻辑是当前最需要紧急修复的模块**，相关 P1 重复 Issue 数量多、影响面广，但尚未看到对应修复 PR。

## 6. 功能请求与路线图信号

- [#84834 Webhook Revolution (meta-issue)](https://github.com/NousResearch/hermes-agent/issues/84834)  
  社区提出的大型 Webhook 修复/重构战役，很可能成为下一个版本的核心路线图之一。

- [#4438 Rich Spreadsheet Skill (xlsx/csv)](https://github.com/NousResearch/hermes-agent/issues/4438)  
  建议内置结构化 Excel/CSV 处理技能，避免 agent 每次从零摸索 `openpyxl`/`pandas`，已开放 4 个月，尚未实现。

- [#67798 Make lifecycle hooks a shared runtime contract across all execution surfaces](https://github.com/NousResearch/hermes-agent/issues/67798)  
  希望将当前 gateway 独占的 `HookRegistry` 扩展为 CLI、TUI、Desktop、Cron、插件等所有执行表面共享的运行时契约。

- [#35966 Native desktop/mobile client app](https://github.com/NousResearch/hermes-agent/issues/35966)  
  当前最受欢迎的功能请求（4 👍），希望直接连接本地 Gateway/API Server，摆脱对第三方消息平台的依赖。

- [#71023 Live upgrade — zero-downtime update](https://github.com/NousResearch/hermes-agent/issues/71023)  
  希望更新 Hermes 时不杀死运行中的子代理，避免升级导致任务中断。

- [#75539 Add "Move session to project" action in Desktop](https://github.com/NousResearch/hermes-agent/issues/75539)  
  桌面端增加“移动会话到项目”的操作，解决项目归属修正问题。

- [#33049 Make credential pool exhaustion TTL configurable](https://github.com/NousResearch/hermes-agent/issues/33049)  
  `EXHAUSTED_TTL_*_SECONDS` 目前是硬编码常量，建议配置化。

- [#85418 Memory provider proposal: local-first, zero-dependency agent memory](https://github.com/NousResearch/hermes-agent/issues/85418)  
  社区开发者基于 Hermes 构建了本地优先的记忆层，并提议与 Hermes 集成。

已有对应 PR 的功能信号：

- Box 生产力技能：[#85767](https://github.com/NousResearch/hermes-agent/pull/85767)
- MiniMax TTS 流式 Provider：[#85771](https://github.com/NousResearch/hermes-agent/pull/85771)
- STT 可配置 beam_size 与启动 prewarm：[#85773](https://github.com/NousResearch/hermes-agent/pull/85773)
- Desktop 语音停顿时间配置修复：[#85772](https://github.com/NousResearch/hermes-agent/pull/85772)

## 7. 用户反馈摘要

- **桌面端 Gateway 稳定性是目前最强烈的负面反馈**：#83683 用户描述“WeChat/QQ/Telegram go completely silent until the gateway is manually restarted”；#85044 用户指出官方安装的独立 gateway 被桌面启动流程误杀。
- **Windows 更新路径让用户困惑**：#83846 用户反馈“desktop app silently disappears”，开始菜单和桌面快捷方式指向已删除的 Hermes 应用；#52339 用户则遇到终端更新与 `/Applications/Hermes.app` 不一致的 split-brain。
- **TUI 问题持续时间太长**：#69592 用户更新状态为 “Day 13 since this broke”，对 `/sessions`、`/models` 等核心流程不可用表示明显不满。
- **平台兼容性阻碍工具使用**：#85406 的 Windows + Docker 路径问题、#83427 的 Browser Use 崩溃，都导致用户无法使用 `vision_analyze` 和浏览器自动化。
- **积极信号**：在 [#85418](https://github.com/NousResearch/hermes-agent/issues/85418) 中，用户感谢维护者解决了 Chrome DevTools blank-profile 问题（“fixed it for good. Thank you again”），并表示基于 Hermes 构建了内存层，说明社区有深度使用者和正向回馈意愿。

## 8. 待处理积压

- [#69592 TUI overlays invisible with ambient widget dock (P1)](https://github.com/NousResearch/hermes-agent/issues/69592)  
  2026-07-22 开启，已持续超过三周，影响 `/sessions`、`/switch`、`/resume`、`/models` 等 TUI 核心流程，目前没有修复 PR。

- [#4438 Rich Spreadsheet Skill](https://github.com/NousResearch/hermes-agent/issues/4438)  
  2026-04-01 开启，8 条评论，尚未有实现或维护者决策。

- [#35966 Native desktop/mobile client app](https://github.com/NousResearch/hermes-agent/issues/35966)  
  2026-05-31 开启，4 👍，长期处于路线图待定状态。

- [#33049 Credential pool exhaustion TTL configurable](https://github.com/NousResearch/hermes-agent/issues/33049)  
  2026-05-27 开启，3 条评论，建议纳入配置重构。

- [#52339 Terminal update leaves Desktop app stale](https://github.com/NousResearch/hermes-agent/issues/52339)  
  2026-06-25 开启，6 条评论，macOS 更新一致性未解决。

- [#66616 Skills index stale](https://github.com/NousResearch/hermes-agent/issues/66616)  
  自动探针连续报警，虽属基础设施问题，但影响文档站和 skills 发现，建议优先排查 `.github/workflows/skills-index.yml` 与 `deploy-site.yml` 的执行情况。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw 项目日报 — 2026-08-14

### 1. 今日速览

过去 24 小时项目共发生 2 条 Issue 更新和 9 条 PR 更新，无新版本发布。PR 动态以 Dependabot 自动依赖升级为主：6 个新的 Go 依赖升级 PR 待合并，3 个被新版本替代的旧升级 PR 关闭，无人工功能代码合并。社区侧讨论最集中的是 Web UI 长会话输入卡顿问题（#3281，5 条评论），并有 1 条新的功能请求（#3331，ASR 模型扩展）。整体活跃度中等，依赖维护自动化节奏良好，但缺少核心功能推进；#3281 已开放 24 天且暂无官方回复，Issue 响应速度值得关注。

### 2. 版本发布

今日无新版本发布。

### 3. 项目进展

今日没有功能性的 PR 被合并。被关闭的 3 个 PR 全部来自 Dependabot 自动化维护，因同一依赖的更新版本 PR 已提交而被标记为 stale 关闭：

- [PR #3305](https://github.com/sipeed/picoclaw/pull/3305)：`aws-sdk-go-v2/service/bedrockruntime` 1.53.3 → 1.56.2（被新的 [PR #3336](https://github.com/sipeed/picoclaw/pull/3336) 替代至 1.57.1）
- [PR #3306](https://github.com/sipeed/picoclaw/pull/3306)：`aws-sdk-go-v2/config` 1.32.25 → 1.32.33（被新的 [PR #3335](https://github.com/sipeed/picoclaw/pull/3335) 替代至 1.32.35）
- [PR #3304](https://github.com/sipeed/picoclaw/pull/3304)：`anthropic-sdk-go` 1.55.1 → 1.61.0（被新的 [PR #3334](https://github.com/sipeed/picoclaw/pull/3334) 替代至 1.62.0）

同期新增 6 个待合并 PR（[#3336](https://github.com/sipeed/picoclaw/pull/3336)、[#3335](https://github.com/sipeed/picoclaw/pull/3335)、[#3334](https://github.com/sipeed/picoclaw/pull/3334)、[#3332](https://github.com/sipeed/picoclaw/pull/3332)、[#3333](https://github.com/sipeed/picoclaw/pull/3333)），覆盖 AWS SDK、Anthropic SDK、Matrix 客户端库等核心依赖，均指向 2026 年 8 月上游最新版本。这批更新将为后续人工功能开发提供更稳固的基础依赖环境，但项目今日未向用户交付可见的功能或修复。

### 4. 社区热点

[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) 是今日讨论最活跃的议题（5 条评论，1 👍）：用户报告 PicoClaw Web UI 在单会话历史较长时，输入框出现明显卡顿。该问题直接命中 Web 端核心交互体验，在高频使用场景下影响很大，评论区已有一定讨论，但尚未见官方或维护者给出排查结论或临时方案。

[Issue #3331](https://github.com/sipeed/picoclaw/issues/3331) 是一项新提出的功能请求，要求支持任意实现了 `/audio/transcriptions` 端点的模型，而非仅限于名称匹配 `*-whisper-*` 的模型。该请求虽然是新提交（0 条评论），但反映了用户对语音转写功能在模型选择自由度上的明确诉求。

### 5. Bug 与稳定性

- **[中高] Web UI 长会话输入卡顿**（[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)）：在会话历史稍长时输入框严重迟滞，影响核心聊天体验。复现路径明确（长历史 + 持续输入），目前暂无关联修复 PR，需官方确认是否为前端渲染性能瓶颈（如消息列表未虚拟化）。
- **[低] pnpm-lock.yaml 解析失败**（[PR #3318](https://github.com/sipeed/picoclaw/pull/3318)）：`web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 在 `packages` 和 `snapshots` 两处重复声明，导致前端依赖安装报 `ERR_PNPM_BROKEN_LOCKFILE`。虽不影响运行时，但阻塞前端开发环境搭建，修复 PR 已被打上 stale 标签，存在被忽略的风险。

### 6. 功能请求与路线图信号

- **ASR 模型通用化**（[Issue #3331](https://github.com/sipeed/picoclaw/issues/3331)）：用户建议增加 `whisper-transcription: true` 之类的配置项，让任何兼容 `/audio/transcriptions` 接口的模型都能被 ASR 流程使用，而不是被 `*-whisper-*` 命名模式排除在外。该请求实现成本较低（仅涉及 `asr.go` 的判断逻辑），但直接回应了用户对更快、更新的语音转写模型的期待，具备进入下一版本的可能性。
- **依赖升级趋势**：Anthropic SDK 跳级更新至 1.62.0、Matrix 客户端库升级至 0.29.0，说明项目正在跟进上游生态。若后续结合社区需求在语音、Web UI 性能方面有对应 PR，将形成更强的版本更新叙事。

### 7. 用户反馈摘要

- **长会话性能痛点**（[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)）：用户反馈"会话历史稍长"后输入框变得卡顿，说明当前 Web UI 的消息渲染策略在长上下文场景下存在明显性能瓶颈。此类问题会直接影响重度用户对 Web 端的整体满意度。
- **模型选择受限**（[Issue #3331](https://github.com/sipeed/picoclaw/issues/3331)）：用户明确表达对现有 whisper 系列模型"太旧、太慢"的不满，希望绕过名称限制、使用更新的 STT 模型。这反映出语音转写场景下用户对速度和准确率的双重需求，而非仅满足于"能用"。

### 8. 待处理积压

- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)**（开放 24 天，最后更新于 8 月 13 日）：Web UI 长会话输入卡顿，社区已有讨论但官方未介入。建议尽快复现并给出修复方案或临时缓解措施（如限制单次渲染消息数、引入虚拟滚动）。
- **[PR #3318](https://github.com/sipeed/picoclaw/pull/3318)**（开放 9 天，已被标记 stale）：pnpm-lock.yaml 重复键修复。该问题直接导致前端依赖安装失败，若不及时合并，后续任何 Web 前端开发都会被阻塞。
- **6 个 Dependabot PR 待合并**（[#3332](https://github.com/sipeed/picoclaw/pull/3332)、[#3333](https://github.com/sipeed/picoclaw/pull/3333)、[#3334](https://github.com/sipeed/picoclaw/pull/3334)、[#3335](https://github.com/sipeed/picoclaw/pull/3335)、[#3336](https://github.com/sipeed/picoclaw/pull/3336)）：虽为当天新开、风险较低，但建议维护者按批次及时 review/merge，避免堆叠成新的 stale PR，减少自动化维护噪音。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 · 2026-08-14

## 1. 今日速览

过去 24 小时 NanoClaw 保持高强度迭代：共 2 条 Issue 更新、19 条 PR 更新，并正式发布 v2.2.0。核心团队在供应链安全上集中发力，把镜像签名验证从“仅供参考”升级为“可强制门禁”；Agent 模板正式迁移为 Agent Plugins 1.0.0 目录格式，并支持 `ncl groups create --template <ref>` 对已有 group 做插件原地更新。Issue 方面，1 个新功能集成 bug 在 24 小时内闭环（#3234），另收到 1 个来自外部用户的审批流程缺陷报告（#3235）。整体活跃度评级：**高**。主要风险点是外部贡献 PR 的 review 积压（#2346、#2420 已等待超 3 个月）。

## 2. 版本发布 · v2.2.0

📦 [v2.2.0](https://github.com/nanocoai/nanoclaw/releases) 今日正式发布（发布 PR：[#3237](https://github.com/nanocoai/nanoclaw/pull/3237)）。

### 核心更新

- **Agent 模板插件化**：模板由旧格式迁移为 Agent Plugins 1.0.0 目录结构（[#3220](https://github.com/nanocoai/nanoclaw/pull/3220)），setup wizard 同步接入模板流程与首个 agent 的插件 stamping（[#2909](https://github.com/nanocoai/nanoclaw/pull/2909)）。
- **插件原地更新机制**：`ncl groups create --template <ref>` 在目标 group 已携带该模板插件时，行为由“创建重复 agent”变为原地更新。dry run 会打印每个插件所拥有 surface（插件文件、skills、MCP 配置等）的变更计划。这是本次发布描述中明确标出的亮点。
- **安全修复**：Telegram 配对码生成从 `Math.random()` 切换为 CSPRNG，并扩大配对码空间（[#3229](https://github.com/nanocoai/nanoclaw/pull/3229)）。
- **CI/供应链**：`verify-agent-image` 改为在所有 PR 上运行（[#3238](https://github.com/nanocoai/nanoclaw/pull/3238)），补齐发布者身份/issuer 配置使签名验证真正生效（[#3158](https://github.com/nanocoai/nanoclaw/pull/3158)），签名验证结果可作为 approving review（[#3241](https://github.com/nanocoai/nanoclaw/pull/3241)，默认关闭）。

### 破坏性变更与迁移注意事项

- **模板格式迁移**：`feat!`（breaking）意味着旧模板结构不再兼容，需要按 Agent Plugins 1.0.0 目录规范重组。使用自定义模板的团队应在升级前完成模板迁移。
- **stamp-time 安全加固**：模板在应用时的符号链接、capabilities、secret 处理均做了加固（[#3220](https://github.com/nanocoai/nanoclaw/pull/3220)），可能有新的权限/路径约束。
- **已知遗留问题**：模板创建的 agent group id 在 v2.2.0 中可能缺少 `ag-` 前缀，导致与 OneCLI 集成失败（[#3234](https://github.com/nanocoai/nanoclaw/issues/3234)）。该 Issue 已关闭，修复是否进入 v2.2.0 需查看具体 patch 版本。

## 3. 项目进展

### 供应链安全链闭环（核心团队主导）

| PR | 内容 |
|---|---|
| [#3238](https://github.com/nanocoai/nanoclaw/pull/3238) | `verify-agent-image` 从仅监听 `versions.json` 路径改为在所有 PR 运行，使其能够成为 required status check |
| [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) | 修复签名验证因缺少 `AGENT_IMAGE_SIGNER_IDENTITY` / `_ISSUER` 变量而每次跳过的根因，接入发布者真实身份 |
| [#3241](https://github.com/nanocoai/nanoclaw/pull/3241) | 发布者签名可以代替人工 approving review（`AGENT_IMAGE_AUTO_APPROVE=true` 时生效，默认只报告不批准） |
| [#3240](https://github.com/nanocoai/nanoclaw/pull/3240) | AWS worker 验证并提升镜像后，通过 `repository_dispatch` 自动打开 `versions.json` bump PR |
| [#3236](https://github.com/nanocoai/nanoclaw/pull/3236) | agent 镜像重新固定到 `hardened-2026-08-13`，本次包含项目自研内容，而非仅基础镜像刷新 |
| [#3239](https://github.com/nanocoai/nanoclaw/pull/3239) / [#3242](https://github.com/nanocoai/nanoclaw/pull/3242) | 两个标记 DO NOT MERGE 的 smoke/live-fire 测试 PR，已按计划关闭 |

**意义**：agent 镜像从“验证 → 签名批准 → 自动 bump PR”的完整自动化链路已基本打通，发布流程中“最后一步人工点击”正被可验证签名取代。

### 核心功能推进

- **Agent Templates → Agent Plugins 1.0.0**（[#3220](https://github.com/nanocoai/nanoclaw/pull/3220) + [#2909](https://github.com/nanocoai/nanoclaw/pull/2909)）：模板功能完成架构级迁移，setup wizard 可基于模板完成首个 agent 的插件 stamping。
- **插件 MCP 工作目录支持**（[#3231](https://github.com/nanocoai/nanoclaw/pull/3231)）：Codex 与 OpenCode 两个 provider 的配置写入器均支持插件 MCP 的 cwd 字段。
- **per-server disabledTools**（[#2624](https://github.com/nanocoai/nanoclaw/pull/2624)）：`McpServerConfig` 支持按单个 MCP server 禁用指定工具。

### Bug / 稳定性修复

- **Telegram 配对码 CSPRNG**（[#3229](https://github.com/nanocoai/nanoclaw/pull/3229)）：安全修复，已合入 v2.2.0。
- **数据库 migration 021**（[#3145](https://github.com/nanocoai/nanoclaw/pull/3145)）：为已有 messaging-group wirings 回填缺失的 channel destinations，保留既有 destination 与自定义本地名，跳过已含 destination 的 wiring。

## 4. 社区热点

### 最受关注 Issue：自动化发送者触发无限审批卡（[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)）

外部用户 pentar69 报告了一个策略设计缺口：当消息组配置 `unknown_sender_policy = 'request_approval'` 时，**平台 webhook 和其他 bot**发送的消息也会像人类一样触发审批门禁。对于重复性 webhook，这会产生**无界审批卡**——消息无法被合理批准，拒绝也无法持久化，会反复出现。该 Issue 创建于 8/13，目前无评论、无修复 PR。其背后诉求是：审批策略需要区分“人类未知发送者”和“自动化发送者”，并需要 denial 持久化机制（例如记住并屏蔽该 sender）。对于运行 bot 工作流的用户，这是一个**阻塞性缺陷**。

### 快速闭环案例：模板 group id 缺 `ag-` 前缀（[#3234](https://github.com/nanocoai/nanoclaw/issues/3234)）

账号 avital-nanoco 报告：`ncl groups create --template <ref>` 生成的 agent group id 是裸 `randomUUID()`，而 `--folder` 路径生成的是 `ag-<uuid>`。该 id 被直接用作 OneCLI agent 标识，裸 UUID 以数字开头时会被 OneCLI `ensureAgent` 拒绝。Issue 创建于 8/12，8/13 即关闭，体现了项目对自身新功能（v2.2.0 模板插件化）引入的集成 bug 响应迅速。

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 高 | **自动化发送者触发无限审批卡**（[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)）：webhook/bot 消息生成无法合理处理、拒绝也不持久的审批卡 | 未修复，无关联 PR |
| 高 | **Telegram 配对码使用 `Math.random()`**（[#3229](https://github.com/nanocoai/nanoclaw/pull/3229)）：配对码熵源不安全，已切换 `crypto.randomInt` 并扩大空间 | 已合入 v2.2.0 |
| 中 | **模板 group id 缺 `ag-` 前缀**（[#3234](https://github.com/nanocoai/nanoclaw/issues/3234)）：导致 OneCLI `ensureAgent` 拒绝 | 已关闭 |
| 中 | **已有 wiring 缺 channel destinations**（[#3145](https://github.com/nanocoai/nanoclaw/pull/3145)）：migration 021 回填，保留现有 destination 与自定义本地名 | 已合入 |

## 6. 功能请求与路线图信号

### 待审查的外部功能 PR

- [**CLI 有界 JSON 标准输入**（#3218）](https://github.com/nanocoai/nanoclaw/pull/3218)：作者 zvi-fried 为 host/container 的 `ncl` 客户端新增 `--stdin-json` 输入模式，不改动现有请求帧、daemon dispatcher 和授权逻辑。CLI 自动化场景的实用增强，8/9 创建，尚待 review。
- [**/add-hindsight 记忆集成 skill**（#2420）](https://github.com/nanocoai/nanoclaw/pull/2420)：作者 carstenf 将 NanoClaw v2 agent group 接入 Hindsight 长期记忆引擎，PR 内包含 bundled MCP wrapper。体量较大，等待架构评审。
- [**未知 slash 命令按普通聊天处理**（#2346）](https://github.com/nanocoai/nanoclaw/pull/2346)：作者 SidhayaPravda618 修复未知命令被 SDK 当作 passthrough 后响应被静默丢弃的问题。

### 路线图信号

- **Agent 插件化生态**：v2.2.0 的模板→插件迁移是架构级变化，后续第三方模板/插件将统一遵循 Agent Plugins 1.0.0 目录规范。
- **供应链安全自动化**：镜像验证 → 签名批准 → 自动 bump PR 链路已基本打通，下一阶段可能是让 `AGENT_IMAGE_AUTO_APPROVE` 默认开启。
- **MCP 仍是集成优先方向**：codex/opencode provider 的 MCP cwd 支持（[#3231](https://github.com/nanocoai/nanoclaw/pull/3231)）与 per-server disabledTools（[#2624](https://github.com/nanocoai/nanoclaw/pull/2624)）同日合入，说明 MCP 配置能力在持续补齐。

## 7. 用户反馈摘要

- **pentar69（[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)）**：使用场景是消息组开启 `request_approval` 后接入 webhook/bot 发送者。反馈痛点：审批卡不可合理批准、拒绝不持久，自动化消息链路被完全卡死。
- **avital-nanoco（[#3234](https://github.com/nanocoai/nanoclaw/issues/3234)）**：使用 v2.2.0 模板功能时发现 `--template` 与 `--folder` 生成的 group id 格式不一致，破坏与 OneCLI 的集成。该问题已关闭。
- **chiptoe-svg（[#3229](https://github.com/nanocoai/nanoclaw/pull/3229)）**：贡献者自行发现并修复了 Telegram 配对码的随机数熵源问题，说明社区对安全敏感点有主动审查意识。该贡献已随 v2.2.0 发布。

## 8. 待处理积压

当前开放 6 个 PR 中有 1 个为 DO NOT MERGE 测试（[#3242](https://github.com/nanocoai/nanoclaw/pull/3242)），1 个为核心团队 CI 修正（[#3243](https://github.com/nanocoai/nanoclaw/pull/3243)），其余 4 个为外部/文档 PR。Issue 侧仅有 #3235 一个开放项，无长期未响应 Issue。

| 项目 | 等待时长 | 说明 |
|---|---|---|
| [formatter 未知 slash 命令修复 #2346](https://github.com/nanocoai/nanoclaw/pull/2346) | 98 天 | 涉及未知命令响应被静默丢弃的消息丢失 bug，作者已给出完整实现；建议维护者优先 review 或明确修改意见 |
| [Hindsight 记忆集成 skill #2420](https://github.com/nanocoai/nanoclaw/pull/2420) | 95 天 | 体量较大，含 bundled MCP wrapper，需要架构级评审；同时是观察“Agent 插件化后如何接纳第三方能力”的样例 |
| [CLI stdin JSON 输入 #3218](https://github.com/nanocoai/nanoclaw/pull/3218) | 5 天 | 较新的外部功能 PR，尚无 review 迹象，建议尽快进入评审队列 |
| [skills 文档修正 #3230](https://github.com/nanocoai/nanoclaw/pull/3230) | 2 天 | 小文档修复，指向已退役的 data/env mirror，低风险，可直接合入 |

**维护者提醒**：外部贡献 backlog（#2346、#2420）已超过 3 个月，是当前项目健康度上最明显的短板。若继续拖延，可能影响外部贡献者的积极性；建议至少给出阶段性 review 反馈。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-14

## 1. 今日速览

过去 24 小时项目活跃度极高：50 条 Issue 与 50 条 PR 更新，**v1.2.0 稳定版正式发布**，同时围绕 `#7482`「Pluggable agent loops」Epic 完成了一轮大规模任务拆解与整合（一次性新建/关闭约 20 个子 issue）。主线架构层面，「unbound-turns」模型进入切换收尾阶段（PR #7633 已关闭，#7634 接力补全）——这是继 "Reborn" 之后项目在 agent 执行模型上的又一次结构性变更。此外，社区贡献者持续输出：Nostr 主机函数（#7184）、ACP serve CLI（#7513）、文档事实测试（#7378）等多条 PR 均在推进中。整体判断：**处于架构重构与稳定发布并行的密集开发期，健康度高**。

## 2. 版本发布

**ironclaw-v1.2.0（2026-08-13）** — [Release 链接](https://github.com/nearai/ironclaw/releases)

- **性质**：由已验证的 `1.2.0-rc.3` 候选版本直接晋升为稳定版，RC1–RC3 的全部已验证功能与修复随本版发布。
- **本次修复重点**：运行时容器镜像现预装 `curl`，确保容器内 HTTP 健康检查可正常执行（此前 orchestrator 探测 worker 时会因缺少 curl 而失败）。
- **破坏性变更**：未在 Release Notes 中提及，属常规 minor 版本晋升。
- **迁移注意事项**：无额外步骤。建议用户直接升级，同时留意后续围绕 `#7482` 的重构可能引入的配置格式变化。

## 3. 项目进展

### 核心架构推进
| PR | 状态 | 说明 |
|---|---|---|
| [#7625](https://github.com/nearai/ironclaw/pull/7625) | CLOSED | **v1.2.0 晋升**：同步更新包清单与 lockfile，RC1–RC3 变更日志合并至稳定版条目 |
| [#7633](https://github.com/nearai/ironclaw/pull/7633) | CLOSED | **unbound-turns 端到端切换**：将 thread 提升为协调器工作单元、实现 prepared-context 接收门、移除 kernel 层的 reply routing |
| [#7634](https://github.com/nearai/ironclaw/pull/7634) | OPEN | **unbound-turns 收尾**：堆叠于 #7562/#7633，补齐 seeded history、OpenAI-compat 门面、强制 tool_choice、run 上限等全部后续项 |

### 功能与修复
- **[#7163](https://github.com/nearai/ironclaw/pull/7163)（CLOSED）**：docx/xlsx/pptx 结构化编辑 + HTML 渲染 PDF，并修复 #7109 引入的文本日志回归——补齐了文档 round-trip 能力。
- **[#7590](https://github.com/nearai/ironclaw/pull/7590)（CLOSED）**：修复 live-canary 中 bundled-skill 标记 owner 与运行时 mint 不一致的问题（首次运行即发现并修复）。

### 性能优化（今日集中提交，均在评审中）
- [#7628](https://github.com/nearai/ironclaw/pull/7628)：移除 heartbeat journal churn，缩减 turn-runnner 性能日志。
- [#7629](https://github.com/nearai/ironclaw/pull/7629)：减少 trigger 与 outbound 状态写入——只在初始 fire 时裁剪 run-history。
- [#7630](https://github.com/nearai/ironclaw/pull/7630)：新增 `db-write-measurement` 压力测试预设，量化单次用户 turn 的 Postgres 写入。
- [#7631](https://github.com/nearai/ironclaw/pull/7631)：用唯一的 `CoalescingEventSink` 合并 runtime 里程碑写入。

> 性能系列 PR 对应 issue #7591 的 Tier 3 优化项，方向为**降低每 turn 的 Postgres 写入放大**，是规模化的前置条件。

### Epic #7482 工作分解
8 月 13 日，`#7482`（Pluggable agent loops）从 Epic 拆解出约 20 个子 issue（#7605–#7624），并已完成一轮 consolidation：

- **已整合为三个实施 issue**：[#7621](https://github.com/nearai/ironclaw/issues/7621)（egress edge）、[#7622](https://github.com/nearai/ironclaw/issues/7622)（foreign-harness 执行）、[#7623](https://github.com/nearai/ironclaw/issues/7623)（capability 访问与 rollout）。
- **v0 先行项**：[#7624](https://github.com/nearai/ironclaw/issues/7624) 被标记为「唯一现在就该做的 pluggable-loops 工作」——以 claude-code 为 loop 的 ACP 执行器，dev-only yolo 模式。
- 其余拆解 issue（#7606–#7620）均已关闭，说明被上层 issue 吸收或触发条件未成熟。

## 4. 社区热点

| 条目 | 类型 | 评论数 | 关注点 |
|---|---|---|---|
| [#7482](https://github.com/nearai/ironclaw/issues/7482) | Epic | 6 | **Pluggable agent loops**：IronClaw 定位从「agent 实现」转为「kernel」，loop 变为可插拔 harness |
| [#6257](https://github.com/nearai/ironclaw/issues/6257) | Bug | 4 | PDF 发送/生成报 `attachments.mime_type` 非法，已关闭 |
| [#2117](https://github.com/nearai/ironclaw/issues/2117) | Enhancement | 2（1👍） | 本地文件/MCP bridge daemon，解决云托管时无法访问本地笔记本文件的问题 |
| [#7185](https://github.com/nearai/ironclaw/issues/7185) | Bug | 2 | 跨会话记忆不可靠召回，来自 Champions 周会多位测试者反馈 |

**分析**：社区当前最核心的诉求是 **agent loop 的开放性与可替换性**（#7482 体系）——用户希望把 claude-code、pi、codex 等外部 harness 引入 IronClaw 的沙箱与审计体系，而非被内置 loop 绑定。其次是**本地资源访问**（#2117），在云托管场景下尤其迫切。

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 高 | [#7626](https://github.com/nearai/ironclaw/issues/7626) | 自定义 MCP 需浏览器/邮箱认证时，连接过程卡死 | 新上报，无 fix PR |
| 高 | [#7627](https://github.com/nearai/ironclaw/issues/7627) | GitHub 扩展在输入任意无效凭据后仍显示「已连接」 | 新上报，无 fix PR |
| 中 | [#7185](https://github.com/nearai/ironclaw/issues/7185) | 跨会话记忆不可靠，影响法律等领域多轮工作 | OPEN，无 fix PR |
| 中 | [#6257](https://github.com/nearai/ironclaw/issues/6257) | PDF 附件 MIME 类型非法，导致生成/发送失败 | CLOSED（修复已验证？） |
| 中 | [#7589](https://github.com/nearai/ironclaw/issues/7589) | NEAR AI Cloud Sonnet-5 持续 3 天返回 500 | CLOSED（关联 cloud-api#920） |

**风险提示**：#7626 与 #7627 均为认证链路问题，直接影响外部工具接入体验，且目前无人认领，建议尽快 triage。

## 6. 功能请求与路线图信号

- **路线图主线 — Pluggable loops（#7482）**：v0 限定为 claude-code ACP harness（[#7624](https://github.com/nearai/ironclaw/issues/7624)），后续 phase-0 扩展至 pi、codex（[#7613](https://github.com/nearai/ironclaw/issues/7613)），并配套 pinned agent 镜像（[#7616](https://github.com/nearai/ironclaw/issues/7616)）。ACP 相关早期实现可见 PR [#7513](https://github.com/nearai/ironclaw/pull/7513)（`acp serve` 命令，支持 streaming 与 cancel）。
- **本地文件桥接**：[#2117](https://github.com/nearai/ironclaw/issues/2117) 提出 `ironclaw-bridge` 守护进程，针对 Obsidian vault、本地项目目录等场景。该 issue 已积压 4 个月且有 👍，但属独立能力，可能排期靠后。
- **Web UI 暴露版本号**：[#7580](https://github.com/nearai/ironclaw/issues/7580)——用户无法从界面得知 Reborn 版本，属于低成本 UX 改进，大概率排入下个迭代。
- **Nostr 集成**：[PR #7184](https://github.com/nearai/ironclaw/pull/7184) 新增 WASM 工具沙箱的 Nostr 签名主机函数（BIP-340 Schnorr）。

## 7. 用户反馈摘要

- **认证流程是当前最大体验痛点**（#7626、#7627）：浏览器/邮箱验证流程卡死、无效凭据不报错，两个问题都来自真实用户汇报，且都发生在「连接外部服务」这一关键路径上。
- **记忆连续性影响实际工作**：#7185 中法律领域的测试者明确表示「agent 无法访问之前对话中的信息」，说明当前记忆机制在跨会话场景下不可靠，直接影响专业场景可用性。
- **文档处理需求强烈**：#6257 的 PDF 报错虽已关闭，但反映了用户对「生成/发送 PDF」这类日常办公能力的高频使用——#7163 的结构化文档编辑能力正是对这一需求的正面回应。
- **版本可见性**：#7580 用户找不到 Reborn 版本号，侧面说明当前 Web UI 在运维信息展示上仍有不足。

## 8. 待处理积压

| 条目 | 类型 | 创建时间 | 状态 | 备注 |
|---|---|---|---|---|
| [#2117](https://github.com/nearai/ironclaw/issues/2117) | 本地文件/MCP bridge | 2026-04-07 | OPEN（2 评论） | 积压超 4 个月，社区有明确需求，建议排期评估 |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | 依赖升级 tokio-tungstenite 0.30 | 2026-08-02 | OPEN | 12 天未合并，跨 tokio 生态 minor 升级 |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | Nostr 主机函数 | 2026-08-04 | OPEN | 新贡献者提交，与 WASM 工具沙箱接口相关，需 maintainer review |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | wasm 组依赖升级 | 2026-08-05 | OPEN | 9 天未合并 |
| [#7378](https://github.com/nearai/ironclaw/pull/7378) | doc-fact 契约测试（doc-truth 3/5） | 2026-08-07 | OPEN | 等待合入，该系列是 docs 可信度工程的一部分 |
| [#7464](https://github.com/nearai/ironclaw/pull/7464) | Telegram linked device 绑定 | 2026-08-10 | OPEN（XL） | 4 天未 review，XL 规模建议拆分或加速流程 |

---

**项目健康度评估**：发布节奏正常（RC → Stable 验证闭环），架构演进有清晰的 issue 分解与分阶段实施计划，性能优化开始系统化推进。需关注两点：一是 #7626/#7627 两个认证 bug 的响应速度；二是 #2117 代表的本地-云桥接需求长期积压，以及部分贡献者 PR（#7184、#7378）等待 review 时间偏长，可能影响社区贡献意愿。

*数据来源：GitHub nearai/ironclaw，统计窗口 2026-08-13 至 2026-08-14。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-14）

> 数据来源：github.com/netease-youdao/LobsterAI | 统计周期：2026-08-13 至 2026-08-14

## 1. 今日速览

过去 24 小时项目整体活跃度较高：共更新 2 条 Issue（均为 Open），10 条 PR（其中 6 条已关闭/合并，4 条仍处于打开待合并状态）。最明显的信号是用户通过 Issue #2489 直接催更"v4pro"，说明社区对新版本已有较强期待，而今日无 Release 发布，版本节奏或将成为近期关注焦点。开发侧，renderer 相关 UI 重构和企业版（enterprise edition）功能是今日推进的主要方向。测试补全类 PR 长期积压的问题依然存在，值得维护者关注。

## 2. 版本发布

今日无新版本发布（Latest Releases 为空）。

值得留意的是，Issue #2489 出现了用户"快更新v4pro！"的催促，且该 Issue 创建于今日、目前仍为 Open 状态。结合 PR #2485 描述中提到的 `release/2026.7.30` 分支尚未合入 `main`，当前可能正处于版本规划或发布前的整合阶段，后续版本动态值得密切跟踪。

## 3. 项目进展

今日 6 条 PR 已关闭/合并，主要集中在 UI 统一、活动运营和企业版功能三条线：

**UI/UX 重构与统一（贡献者：fisherdaddy）**
- [PR #2488](https://github.com/netease-youdao/LobsterAI/pull/2488)：重构 cowork btw 和管理 UI，涉及 renderer 与 cowork 两个模块。
- [PR #2487](https://github.com/netease-youdao/LobsterAI/pull/2487)：将 skills 和 mcp 视图合并为统一的 skills-and-connectors 视图，降低了导航复杂度。
- [PR #2486](https://github.com/netease-youdao/LobsterAI/pull/2486)：统一 MCP 卡片/详情与 kits、skills 的视觉样式，抽离共享组件 `CardOverflowMenu` 与 `managementTypography`，并新增 `McpCard`、`McpDetailModal` 组件。

这三条 PR 同一位作者在一天内连续合入，说明客户端 UI 层正在进行一轮系统的体验统一与重构，项目界面一致性有望明显提升。

**活动运营能力（贡献者：btc69m979y-dotcom）**
- [PR #2485](https://github.com/netease-youdao/LobsterAI/pull/2485)：将每日签到活动调整为 evergreen（常驻）形态，补充活动状态自动同步、签到入口状态刷新，并将积分入口改为跳转网页端积分详情。定向 Vitest 7/7 通过，ESLint 零警告，构建通过。

**企业版功能（贡献者：liugang519）**
- [PR #2484](https://github.com/netease-youdao/LobsterAI/pull/2484)：企业版（enterprise edition）功能 PR，涉及 renderer、docs、main、openclaw 四个模块。PR 描述中的 Summary 和 Changes Made 仍为模板占位内容，具体改动细节待后续跟踪。

**历史 Bug 修复（贡献者：choyuenga）**
- [PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232)：修复定时任务首次执行结果不推送 UI 的问题。根因是 `cronJobService.ts` 的 `pollOnce()` 中 `previousRunAtMs > 0` 条件导致首轮执行被跳过，属于逻辑边界问题，现已修复并关闭。

整体来看，客户端 UI 统一、常驻签到运营、企业版三条线是当前最明确的推进方向。今日合入内容以优化和功能迭代为主，无重大破坏性变更。

## 4. 社区热点

**Issue #2489（今日最受关注）：[快更新v4pro！](https://github.com/netease-youdao/LobsterAI/issues/2489)**

- 作者：nimamasl114514 | 创建于 2026-08-14（今日）
- 评论：1 | 👍：0

这是今日唯一的新开 Issue，直接表达了用户对 v4 Pro 版本的迫切期待。虽然信息量不大，但来自真实用户的版本催促具有很强的信号意义——说明用户对当前版本能力不满足，或对 v4 Pro 已有明确预期。数据上今日确实无新版本发布，该诉求与版本节奏直接挂钩。建议项目组评估 v4 Pro 的排期透明度，考虑在 Issue 中给予回复以安抚用户预期。

**Issue #1162（持续活跃）：[为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试](https://github.com/netease-youdao/LobsterAI/issues/1162)**

- 作者：MaoQianTu | 创建于 2026-03-31 | 更新于 2026-08-13
- 评论：1

该 Issue 今日仍有状态更新（虽被标记 stale），描述了两个核心模块（记忆文件管理、AI 时间上下文 Prompt）此前零测试覆盖的风险，并附带 75 个测试用例的完整实现方案。虽然已积压四个半月，但今天仍在被关注和更新，说明社区有持续参与者愿意完善测试基建。

## 5. Bug 与稳定性

今日未发现新增的严重 Bug、崩溃或回归报告。以下两条为稳定性相关的近期动态：

- **[PR #1232（已关闭）](https://github.com/netease-youdao/LobsterAI/pull/1232)：修复定时任务首次执行结果不推送 UI 的问题。** 该 Bug 影响用户首次运行定时任务时的实时反馈，此前必须等到第二次执行才能看到结果。已合入修复，稳定性 +1。
- **[PR #1163（打开，stale）](https://github.com/netease-youdao/LobsterAI/pull/1163)：补全"立即运行"交互反馈，引入乐观更新与 Gateway 状态同步。** 解决的问题是定时任务"立即运行"按钮无 loading 状态、需等待最长 15 秒轮询才反馈，用户容易重复点击。属于交互层面的体验缺陷修复，已提供完整方案，但仍待维护者 review。

无新增需要优先处理的 Bug。

## 6. 功能请求与路线图信号

**v4 Pro 发布请求（高优先级信号）**
- [Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489)：用户直接请求"快更新v4pro"。目前项目最新 Release 为空，且 PR #2485 提到旧版签到功能尚未合入 `main`，说明主干分支可能正在积累一批功能等待统一发版。v4 Pro 的具体能力边界尚不明确，但结合今日合入的 UI 重构、企业版、常驻签到三块功能，下一版本大概率会包含这些内容。

**Evergreen 常驻签到（已合入）**
- [PR #2485](https://github.com/netease-youdao/LobsterAI/pull/2485)：将签到从限时活动调整为常驻形态，并复用服务端与管理端能力。这反映出产品侧在强化用户运营和留存机制，预计会成为后续版本的标配功能。

**企业版（enterprise edition）**
- [PR #2484](https://github.com/netease-youdao/LobsterAI/pull/2484)：涉及四个模块的企业版功能，虽描述为空模板，但模块跨度较大（renderer / docs / main / openclaw），预期是面向 B 端客户的商业化能力扩展。这是明确的路由线信号，后续值得持续关注。

**测试基建（长期信号）**
- [Issue #1162](https://github.com/netease-youdao/LobsterAI/issues/1162) 和 [PR #1165](https://github.com/netease-youdao/LobsterAI/pull/1165)、[PR #1156](https://github.com/netease-youdao/LobsterAI/pull/1156) 表明社区正在推动为 `openclawMemoryFile`、`localTimeContextPrompt`、`commandSafety`、`coworkMemoryJudge` 等核心模块补齐单元测试。这些模块直接关系到 AI 记忆质量和命令执行安全，测试补全可有效降低回归风险，建议优先处理。

## 7. 用户反馈摘要

基于今日 Issue 与 PR 描述，可提炼以下真实用户声音：

- **版本期待强烈**：[#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) 用户直接发出"快更新v4pro！"的呼声，说明现有版本已无法满足部分用户的预期，或用户已听闻 v4 Pro 相关能力并急于使用。
- **"立即运行"交互反馈缺失**：[PR #1163](https://github.com/netease-youdao/LobsterAI/pull/1163) 中描述了用户在点击定时任务"立即运行"后无任何视觉反馈、状态需等 15 秒轮询才刷新的痛点，且容易造成重复点击。这是真实使用场景中影响操作确定性的体验问题，值得优先修复。
- **定时任务首轮执行结果丢失**：[PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232) 暴露了定时任务首次执行后 UI 不更新的问题，用户需要等到第二次执行才能看到结果，属于感知明显的功能缺陷（现已修复）。
- **核心模块测试缺失的开发侧担忧**：[Issue #1162](https://github.com/netease-youdao/LobsterAI/issues/1162) 和 [PR #1156](https://github.com/netease-youdao/LobsterAI/pull/1156) 中，贡献者明确指出 `commandSafety`（危险命令检测）和 `openclawMemoryFile`（记忆管理）等关键模块"零测试覆盖"——前者误判将导致 AI 静默执行 `rm -rf` 等破坏性命令，后者可能导致记忆错乱，这是开发/维护视角对项目健康度的恳切提醒。

## 8. 待处理积压

以下 Issue/PR 已长期未获合入或响应，建议维护者关注（均有完整实现与验证）：

**测试补全类（创建于 2026-03-31，已积压约 4.5 个月）**

| 编号 | 类型 | 内容 | 备注 |
|---|---|---|---|
| [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) | Issue | 为 `openclawMemoryFile` 和 `openclawLocalTimeContextPrompt` 补充 75 个 Vitest 单元测试 | 零测试覆盖，有完整测试方案 |
| [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) | PR | 对应 #1162 的实现，75 个测试已写完 | 待 review |
| [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) | PR | 为 `commandSafety` 和 `coworkMemoryJudge` 补测试（关联 #1154） | 涉及危险命令检测与记忆质量门卫，安全相关 |

**定时任务体验优化类**
- [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163)（stale，创建于 2026-03-31）：补全"立即运行"按钮的交互反馈、乐观更新与 Gateway 状态同步，有明确的用户痛点背景和完整技术方案。

**功能修复类**
- [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166)（stale，创建于 2026-03-31）：防止自定义 agent 重名，避免 agent 列表出现歧义。改动范围在 renderer 层，方案成熟。

这些 PR 均已标记为 stale 但长期未关闭或合并，代码可能已过期或产生冲突。考虑到其中测试补全类直接关系到核心模块的安全性，建议至少将 #1156 和 #1165 纳入近期 review 计划。

---

*报告完*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-14

## 1. 今日速览

过去 24 小时内，Moltis 共更新 1 条 Issue、4 条 PR，无新版本发布。4 条 PR 全部处于待合并状态，其中 3 条由同一社区贡献者提交，集中修复 macOS 脚本兼容性与 openclaw 组织重定向导致的构建问题；另 1 条为大型功能 PR，旨在引入持久化连接器层。整体社区提交活跃度中等偏高，但维护者侧缺少 review/merge 反馈，存在 wait-time 拉长与构建链路持续阻塞的隐患。项目本身无回归报告，健康度总体良好。

## 2. 版本发布

无新版本发布（Latest Releases 为空）。

## 3. 项目进展

今日**无 PR 合并或关闭**，均为待合并状态，暂无新的代码进入主干。但 4 条活跃 PR 代表了项目两个明确的推进方向：

- **功能增量**：[PR #1190](https://github.com/moltis-org/moltis/pull/1190) 提出了一个规模较大的连接器增强，为 CalDAV、Slack、Discord、Matrix、Microsoft Teams 等渠道增加持久化、原子快照、调度、投影和本地全文搜索能力。该 PR 将显著扩展 Moltis 作为 AI 助手的记忆与数据接入边界。
- **工程稳健性修复**：PR #1194、#1192、#1191 分别修复 macOS bash 3.2 脚本崩溃和外部工具链 openclaw 重定向后的安装路径失效问题，属于开发者体验和构建可靠性的重要补丁。

尽管今日无合并事件，但这批 PR 一旦完成 review 合入，将同时带来功能面扩展与构建链稳定性提升。

## 4. 社区热点

今日各 Issue/PR 均无评论，讨论热度偏低，但仍有需要重点关注的对象：

- **[PR #1190 — Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190)**（penso，8/11 创建，8/13 更新）是当前规模最大、影响面最广的 PR。它引入了 connector 持久化和跨平台消息历史支持，反映了社区对 AI 助手长期记忆、跨渠道数据沉淀的核心诉求。该 PR 值得维护者优先安排架构评审。

- **[Issue #1193 — Flaky test: push fanout timeout assertion races under full-suite load](https://github.com/moltis-org/moltis/issues/1193)** 虽无评论，但在全量测试中 2/3 概率失败，直接关联 CI 稳定性，是潜在社区信心影响点。

整体来看，今日社区热点不是“讨论热度”驱动，而是“提交内容重量级”驱动，PR #1190 是核心关注项。

## 5. Bug 与稳定性

今日报告的 4 个问题中，3 个已有对应修复 PR，1 个为 flaky test 尚无修复，按严重程度排列如下：

| 严重程度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [Issue #1191](https://github.com/moltis-org/moltis/pull/1191) — `moltis sandbox build` 在**所有**预构建镜像上失败，原因是 gogcli 模块路径已迁移至 openclaw org，旧路径被 GitHub 重定向拦截 | 有 fix PR | [PR #1191](https://github.com/moltis-org/moltis/pull/1191) |
| 🔴 高 | [Issue #1192](https://github.com/moltis-org/moltis/pull/1192) — wacrawl skill 的 Go install fallback 同样因 openclaw 重定向而损坏，安装失败 | 有 fix PR | [PR #1192](https://github.com/moltis-org/moltis/pull/1192) |
| 🟠 中 | [Issue #1194](https://github.com/moltis-org/moltis/pull/1194) — macOS bash 3.2 下 `just local-validate-full` 因空数组展开触发 `unbound variable`，本地验证流程中断 | 有 fix PR | [PR #1194](https://github.com/moltis-org/moltis/pull/1194) |
| 🟡 低 | [Issue #1193](https://github.com/moltis-org/moltis/issues/1193) — `push::tests::fanout_is_bounded_and_times_out_a_hung_endpoint` 在全量套件负载下间歇性超时失败，2/3 次复现 | 待调查 | 暂无 |

前三项修复 PR 均已在 8/13 提交，等待 review 合入；其中 #1191/#1192 属于阻塞性构建缺陷，建议优先处理。

## 6. 功能请求与路线图信号

最具路线图价值的信号来自 [PR #1190](https://github.com/moltis-org/moltis/pull/1190)，该 PR 提出：

- 引入 provider-neutral 连接器持久化层与原子快照；
- 增加 CalDAV 只读数据接入；
- 可复用的 Slack、Discord、Matrix、Teams 消息历史数据集；
- 本地全文搜索（bounded search）与投影能力。

这表明社区对 AI 助手“长期记忆 + 多平台历史数据接入”的需求正在上升，且已有人着手实现。结合 Moltis 作为个人 AI 助手平台的定位，该功能极有可能被纳入下一版本的核心能力。此外，其余三个修复 PR 虽属 bug 修复范畴，但也暗示了项目对 macOS 开发者体验与外部依赖稳健性的持续打磨，是下一版本工程质量的潜在组成部分。

## 7. 用户反馈摘要

今日 Issue/PR 均无直接讨论评论，但从提交者描述的复现场景中可以提炼出真实痛点：

- **macOS 开发者工具链不适配**（PR #1194）：bash 3.2 是 macOS 系统默认版本，触发 `set -u` 下空数组报错导致本地校验流程完全不可用。这表明项目脚本对非 GNU Bash 环境的兼容性需要常态化检查。
- **外部依赖迁移导致下游断裂**（PR #1191、#1192）：openclaw org 的迁移使 `go install` 在 GitHub 重定向时失败，直接阻断 sandbox 构建和 skill 安装。用户对“重定向看似可用但实际不可用”的体验比较敏感。
- **全量测试偶发超时**（Issue #1193）：flaky test 仅在完整 workspace 负载下出现，提示测试并发模型与超时阈值可能需要调优，影响开发对 CI 结果的信任度。

整体反馈集中在“构建可复现性”和“开发流程稳定性”两个方向，说明外部贡献者已开始深入参与项目基础设施层的打磨。

## 8. 待处理积压

今日无长期无人响应的历史遗留 Issue/PR，但有以下风险信号需要维护者关注：

- **[PR #1190](https://github.com/moltis-org/moltis/pull/1190)** 已开放 3 天（8/11 创建）且无任何 review 标记。该 PR 涉及面大，越晚评审，后续冲突和返工成本越高。
- **[PR #1191](https://github.com/moltis-org/moltis/pull/1191) 与 [PR #1192](https://github.com/moltis-org/moltis/pull/1192)** 直接修复当前阻塞所有用户 `sandbox build` 的缺陷，建议优先合并，避免影响面扩大。
- **[Issue #1193](https://github.com/moltis-org/moltis/issues/1193)** 已确认为 flaky test，但尚无 assignee 或 fix 方案，建议至少先标记为 known issue 或调整 CI 重试策略，防止全量验证假失败消耗开发者时间。

> **总结**：Moltis 当前处于“外部贡献活跃、维护侧响应滞后”的阶段。功能 PR 与修复 PR 并存，项目功能面与工程健康度均有提升潜力，但 review 和 merge 的及时性将成为近期项目健康度的关键变量。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-14

> 数据源：github.com/agentscope-ai/CoPaw（数据内部链接指向 agentscope-ai/QwenPaw，本报告以数据源实际链接为准）

---

## 1. 今日速览

- 过去 24 小时共更新 **46 条 Issue**（新开/活跃 29，关闭 17）、**50 条 PR**（待合并 31，已合并/关闭 19），并发布 **2 个新版本**（v2.1.0 正式版 + v2.1.0-beta.5），整体处于发布后的高频迭代期。
- v2.1.0 正式版带来 **QwenPaw OS Shell** 桌面窗口化能力，但同日出现多个 2.1.0 回归反馈（如并发会话状态写错文件 [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)、Windows TUI 启动失败 [#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007)），稳定性需持续关注。
- 社区讨论最集中的三类诉求是：**多步骤任务中断后不自恢复**（#6921，6 条评论）、**国内模型/云服务对接**（#6973，5 条评论）、**安全与误报问题**（#6992、#6847、#6916）。
- 待合并 PR 已达 **31 条**，其中包含 session 多项目目录（#6976）、spawn 父子会话持久化（#7004）、Matrix 会话隔离（#7001）等有价值的功能贡献，社区提交活跃但审阅 backlog 值得关注。
- 综合评估：项目功能迭代速度很快，社区参与度高，但 2.1.0 发布后回归类 Bug 和安全类报告明显增多，项目健康度处于 **“高速前进、需要补稳定性和安全信任”** 的阶段。

---

## 2. 版本发布

### v2.1.0（正式版）

- 新增 **QwenPaw OS Shell**：应用支持在可移动、可缩放的窗口中打开，配备启动器（launcher）、任务栏、通知中心和布局保存功能（[PR #6645](https://github.com/agentscope-ai/QwenPaw/pull/6645)）。
- **App Center 与市场应用统一目录**：已安装应用和市场应用共享同一套应用目录（catalog）。

### v2.1.0-beta.5

- fix(chats)：修复 dict 类型模型响应的处理（[PR #6816](https://github.com/agentscope-ai/QwenPaw/pull/6816)，修复 #6813）。
- fix(memory)：简化长期记忆运行指引（[PR #6942](https://github.com/agentscope-ai/QwenPaw/pull/6942)，by @jinliyl）。
- docs(website)：更新 Files workspace 相关文档。

### 破坏性变更与迁移注意事项

- 从历史 Issue 看，升级路径存在风险：
  - [#6047](https://github.com/agentscope-ai/QwenPaw/issues/6047)：2.0.0 升级后新 chat 会错误复用旧会话，涉及 `chats.json` 排序与 session index 不同步。
  - [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100)：`pip install --upgrade` 后 agent 的 `agent.json` 被覆盖为空/下游配置（`active_model` 被重置等）。
  - [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)：2.1.0 下并发 session 状态写入错误文件（该用户已回滚 2.0.1 作为 workaround）。
- **建议升级前备份**：`agent.json`、`chats.json`、`history.db`，并在生产环境先小范围验证 2.1.0。

---

## 3. 项目进展

今日已合并/关闭的 PR 中有以下值得关注：

- **fix(chats): chat history 分页 + GZip 压缩**（[PR #6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)，关闭）——修复长会话（1MB+）接口 30s 超时问题，对慢网络用户是实质性改善。
- **fix(mission): MissionGate 服务端强制 `max_iterations`**（[PR #6652](https://github.com/agentscope-ai/QwenPaw/pull/6652)，关闭）——修复任务模式不限制子代理派发数量、导致 54+ 子会话的问题（原配置 20）。
- **fix: Auto-Dream 集成容错**（[PR #6884](https://github.com/agentscope-ai/QwenPaw/pull/6884)，关闭）——单个无效/空 schema 不再拖垮整个 Auto-Dream 任务，提升外部集成鲁棒性。
- **feat(channels): 可选依赖按需安装**（[PR #6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)，关闭）——Channel 相关 SDK 从默认依赖中剥离，减轻安装体积。
- **chore: 更新 v2.1.0 release notes**（[PR #6994](https://github.com/agentscope-ai/QwenPaw/pull/6994)，Open；[PR #6989](https://github.com/agentscope-ai/QwenPaw/pull/6989)，Closed）——两个 PR 均为发布说明更新，后一个已关闭。

整体来看，今日合并/关闭的 PR 聚焦在**聊天接口性能、任务模式资源上限、集成容错、依赖管理**四个方面，属于对 2.1.0 正式版发布后的质量打磨。

---

## 4. 社区热点

**#6921（6 条评论）— 多步骤任务完成后无提示中断**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6921)）
> 用户反馈 agent 在执行多步任务时，输出类似 “Now 2.1, 3.1, 3.2. Let me do all three.” 后便停止，无任何可见提示，需要用户说“继续”才会恢复。

这是当前社区对 **Agent 自动化完整性** 最集中的不满，直接影响用户对项目“智能体”属性的信任。

**#6973（5 条评论）— 支持阿里云百炼 token plan**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6973)）
> 用户希望 QwenPaw Creator 可以对接阿里云百炼的 token 套餐。

国内开发者对**国内云厂商计费体系集成**的需求很强烈，属于高频诉求。

**#6811（5 条评论，已关闭）— OpenAI Responses 续写摘要问题**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6811)）
> 上下文滚动 evict 旧会话时，同步调用主模型生成续写摘要，忽略 `disable_thinking`，且把 60 秒取消误报为 malformed output。

反映 **OpenAI Responses provider 与上下文压缩机制之间的兼容性**仍不完善。

**#6847（4 条评论）— 相同的任务，QwenPaw 被杀软拦截，WorkBuddy 不会**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6847)）
> 用户反馈杀软经常强制关停 QwenPaw 进程，并附上大量截图。

杀毒误报会影响用户对应用安全性的感知，值得从**打包签名、行为模式、官方文档说明**等角度紧急回应。

**#6882（4 条评论，已关闭）— 如何集成 CopilotKit**（[Issue](https://github.com/agentscope-ai/QwenPaw/issues/6882)）
> 用户询问集成方式和示例。

社区对**与主流前端 AI 组件库（CopilotKit）的集成能力和文档**有持续需求。

---

## 5. Bug 与稳定性

### 严重&安全类

| Issue | 描述 | 状态 | 修复 PR |
|---|---|---|---|
| [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) | 0.0.0.0 暴露 8088 端口、插件安装 API 无鉴权、插件可任意命令执行，被外部利用植入后门 | 已关闭（invalid） | 无 |
| [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) | 插件可在无确认下静默创建 cron 任务并注入用户可见消息（权限模型缺口） | 已关闭 | 无 |

> 第 6992 号虽然被标记为 invalid，但涉及**端口暴露和无鉴权**的严重指控建议维护者给出一份公开说明或修复记录，否则容易在社区中留下安全疑虑。

### 高影响（2.1.0 相关）

- **[#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)（新开）**：Agent 状态在并发会话下写入错误的 session 文件，2.1.0 回归，macOS/Feishu 长连接环境复现。**无关联 fix PR。**
- **[#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007)（新开）**：Windows Desktop TUI 启动会话即报 `transport: Connection closed`，因打包的 qwenpaw.exe 拒绝 `-m qwenpaw acp`。**无关联 fix PR。**
- **[#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008)（新开）**：Anthropic 模型端误判历史图片为 sensitive（error 1026），导致长历史会话中断，人工复核无违规内容。**无关联 fix PR。**
- **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)（活跃）**：多步骤任务无提示中断需要“继续”才能恢复。**无关联 fix PR。**

### 中等影响

- **[#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951)（活跃）**：Scroll 压缩后重新进入会话，压缩前聊天记录不可见，仅显示 eviction index。压缩不应破坏用户可见 transcript。**无关联 fix PR。**
- **[#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955)（活跃）**：v2.0.1 pip 安装版概率性启动崩溃，Windows asyncio 栈回溯。**无关联 fix PR。**
- **[#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005)（新开）**：启用 Shabox 后 UV 无法写入 `~/.cache/uv`，需手动在 policy.yaml 添加 `Write(~/.cache/uv/**)`。**已有 workaround，无正式修复。**
- **[#7009](https://github.com/agentscope-ai/QwenPaw/issues/7009)（新开）**：Cloudflare Tunnel + monitor 插件触发 Pod 终止误报（“reverse proxy or mining-related processes detected”），用户认为是 false positive。

### 有修复/已关闭

- [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811)（已关闭）：OpenAI Responses continuation 摘要忽略 `disable_thinking`、误报取消问题。
- [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)（仍 Open）：上下文压缩丢失 `tool_call` 结构，导致 400 错误。长期存在，与 [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) 的分页/压缩性能优化相关，但核心结构保留问题未完全解决。

---

## 6. 功能请求与路线图信号

### 已有对应 PR、大概率进入下一版本

- **session-scoped 多项目目录**（[PR #6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)）：允许一个 chat 同时绑定多个项目目录，首个目录为主目录。回应了用户对多项目工作区的需求。
- **spawn 父子会话链接持久化**（[PR #7004](https://github.com/agentscope-ai/QwenPaw/pull/7004)）：前台 `/console/chat` 和后台 `/console/chat/task` 都会将 spawn 关系写入 `ChatSpec.meta`。
- **Matrix 群组内按 sender 隔离 session 和 memory**（[PR #7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)）：修复 Matrix 群组所有成员共享一个上下文/记忆的问题。
- **从其他 Agent 导入数据**（[PR #6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)）：支持从 Codex、Qoder 导入 instructions、settings、skills、plugins 和最近工作。

### 社区新提出的功能需求

- **[#7012](https://github.com/agentscope-ai/QwenPaw/issues/7012)**：会话级模型选择，多并行会话可各自绑定不同模型（“一个省钱，一个处理复杂任务”）。需求明确，与 [PR #6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) 的统一 provider/模型路由方向可能协同演进。
- **[#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973)**：支持阿里云百炼 token plan，国内计费集成。
- **[#6970](https://github.com/agentscope-ai/QwenPaw/issues/6970)**：可嵌入的 Chat 子页面（无侧栏/头部）、URL 携带 API key 免鉴权、session 列表支持按日期/sessionId 精确筛选。
- **[#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013)**：统一工具面板——文件变更 Diff、本地 Web 服务预览、交互式 Web Terminal，形成 Agent 开发闭环。
- **[#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)**：第三方记忆方案 ViBo（加密、97.5% token 节省）。社区提交的产品提案，需要维护者评估是否纳入官方路线。
- **[#6945](https://github.com/agentscope-ai/QwenPaw/issues/6945)**：智能模式下对话写入沙盘之外失败，用户希望明确“智能”是否只能审批，还是应支持执行。

---

## 7. 用户反馈摘要

- **任务中断是核心痛点**（[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)）：用户对 agent “规划完就停、需要催继续”的行为感到困惑，多步自动化体验打折。
- **无后台/守护模式**（[#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010)）：`qwenpaw app` 仅前台运行，SSH/脚本启动时命令一直卡住不返回，对服务器端部署用户不友好。
- **会话级模型选择需求强烈**（[#7012](https://github.com/agentscope-ai/QwenPaw/issues/7012)）：用户明确提到“免费模型省钱、强模型处理复杂任务”，希望 UI 上直接支持而非依赖 `/model` 命令。
- **对杀软拦截非常敏感**（[#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)）：用户已横向对比 WorkBuddy，杀软强制关停直接影响可用性和信任度。
- **模型端误审核令人沮丧**（[#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008)）：Anthropic 误判正常历史图片为敏感内容，中断长会话，用户认为是“模型端/平台端问题”，但也希望 CoPaw 侧有容错策略。
- **升级路径仍需优化**（[#6047](https://github.com/agentscope-ai/QwenPaw/issues/6047)、[#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100)）：升级后配置覆盖、会话错乱问题频繁，反映升级流程需要更强的迁移检查和备份提示。
- **正面反馈**：功能丰富度获得认可（#6585 “非常不错的项目”）；企业级用户已在使用（#6970 提交者来自 HundSun，用于测试与工具链建设）。

---

## 8. 待处理积压

| 类型 | 编号 | 创建时间 | 说明 |
|---|---|---|---|
| Issue | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 2026-07-08 | 上下文压缩丢失 `tool_call` 结构导致 400 错误，已持续 1 个多月仍 Open |
| PR | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 2026-07-21 | 统一 provider discovery / model metadata / routing 的大型 PR，仍在 Open，需维护者评估进度 |
| PR | [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) | 2026-08-05 | OneBot 入站媒体本地化，处于 Under Review 已 9 天，无合并进展 |
| Issue | [#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003) | 2026-08-13 | 第三方 ViBo 记忆方案提案，值得官方回复是否纳入评估 |
| Issue | [#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992) | 2026-08-13 | 安全报告虽被关闭（invalid），但未被社区遗忘，建议维护者公开发布结论，避免信任损耗 |

---

**数据统计口径**：以上数据基于 2026-08-13 至 2026-08-14 的 GitHub Issue / PR / Release 活动。所有链接可直接跳转查看实时状态。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-14

> 数据来源：GitHub（过去 24 小时 50 条 Issue 更新 + 50 条 PR 更新）

---

## 1. 今日速览

过去 24 小时 ZeroClaw 保持**极高活跃度**：50 条 Issue 更新（74% 为新增/活跃讨论）、50 条 PR 更新（80% 仍在评审中），说明项目正处于 **v0.9.0 安全加固周期** 的关键讨论阶段。当日无新 Release，版本仍停留在 v0.8.x 系列。值得关注的是，多条 **p1 级安全修复 PR 已快速合并**（包括网关 dashboard 资产目录穿越修复、会话队列序列化修复），以及 **高危 shell 命令策略 RFC（#7155）** 和 **Goal mode v1 RFC（#8303）** 仍在激烈讨论中——前者已进入维护者确认的收窄范围，后者是当前社区讨论热度最高的话题。整体来看，项目健康度良好，安全意识强，但大量 RFC 囤积在 `needs-maintainer-review` 状态，决策吞吐是当前瓶颈。

---

## 2. 版本发布

**无新版本发布。** 最近一次 Release 仍为 v0.8.x 系列（具体版本号未在本数据窗口内产生更新）。

---

## 3. 项目进展

过去 24 小时共 **10 个 PR 被合并/关闭**，其中值得关注的有：

| PR | 类型 | 要点 |
|---|---|---|
| [#9969 fix(gateway): contain filesystem dashboard assets](https://github.com/zeroclaw-labs/zeroclaw/pull/9969) | 安全修复 (p1) | 修复文件系统型 dashboard 静态资源路径穿越风险：先规范化路径，再确认解析后仍位于配置的发行根目录内，拒绝 symlink 逃逸。由 distinguished contributor 提交，当日即合并。 |
| [#9966 fix(container): match nested fixture manifests by glob](https://github.com/zeroclaw-labs/zeroclaw/pull/9966) | CI/构建修复 | 修复 Dockerfile 依赖预取阶段 `crates/*/Cargo.toml` 单层 glob 无法匹配嵌套成员的问题，避免容器构建漏掉子 crate 清单。 |
| [#9674 fix(infra): preserve session queue serialization during eviction](https://github.com/zeroclaw-labs/zeroclaw/pull/9674) | 稳定性修复 (p1) | 在会话槽位 map 仍处于锁定时注册会话请求，防止空闲驱逐在 pending 计数可见前移除已选槽位；用 RAII guard 跟踪 pending 注册。 |
| [#9709 fix(tts): clean up Edge TTS temp output on every error path](https://github.com/zeroclaw-labs/zeroclaw/pull/9709) | 稳定性修复 | 修复 Edge TTS 在“子进程成功退出但读文件失败”的中间路径上遗留临时 MP3 文件的问题。 |
| [#9705 fix(config): allow config set on existing hyphenated cron aliases](https://github.com/zeroclaw-labs/zeroclaw/pull/9705) | 配置修复 | 允许 `config set cron.<alias>.name` 作用于已加载的含连字符 cron 别名（此前被误拒绝，与 TOML 加载器行为不一致）。 |
| [#9639 docs(architecture): document provider routing lifecycle](https://github.com/zeroclaw-labs/zeroclaw/pull/9639) | 文档 | 新增基于源码的 provider 路由生命周期文档，覆盖 profile 构造、hint 路由、重试/回退顺序、冷却、流式恢复等。 |
| [#9932 ci(codeql): drop rust/hard-coded-cryptographic-value](https://github.com/zeroclaw-labs/zeroclaw/pull/9932) | CI 改进 | 从 CodeQL 配置中排除 `rust/hard-coded-cryptographic-value` 查询——该查询在 `cfg(test)` 下产生 27 条全部为误报的“critical”告警。 |

**综合判断：** 本窗口内的合并以「安全加固 + 稳定性/技术债清理」为主——尤其是 **#9969 网关资产路径穿越** 和 **#9674 会话队列竞态** 两个 p1 级高危修复，说明项目在向 v0.9.0 迈进的过程中正在系统性地收敛已知风险面。同时，当日还有一条 **p1 级安全 Bug（#9389，未认证 POST /api/pair 锁定机制可被攻击者头操纵）已被关闭**，佐证安全审计工作正在闭环推进。

---

## 4. 社区热点

### 4.1 讨论热度 Top 3

| Issue | 评论数 | 状态 | 核心话题 |
|---|---|---|---|
| [#8303 RFC: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | 20 | 🟡 OPEN，p2，RFC，risk:high | 讨论度最高。提出需要一种可跨越多轮 agent turn 的持久化目标追求机制。早期方案将重启交接、渠道准入、Web、异步子工作耦合进首个交付，作者旨在收窄范围。 |
| [#7155 RFC: 高危 shell 命令确认层级 + Claude Code 风格命令策略](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | 18 | 🟡 OPEN，p1，RFC，needs-maintainer-review，risk:high | 已修订至第 3 版，按维护者要求收窄到 shell 策略契约本体，并应用了 Phase 0 范围澄清。是当前安全策略讨论的主战场。 |
| [#8692 Tracker: 维护者 RFC 决策队列](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 13 | 🟡 OPEN，p2，tracker | 作为 RFC/设计 issue 的决策队列，暴露了目前大量提案积压在等待维护者裁决的现状。 |

### 4.2 背后诉求分析

- **安全策略的“可操作化”诉求（#7155）：** 社区在反复打磨“高危命令确认层级 + allow/ask/deny 策略”的契约边界，说明用户真实需要的是 **可配置、可审计、不阻塞正常流程** 的命令拦截机制，而非一刀切的禁用。
- **架构复杂度的收敛压力（#8303）：** 讨论焦点是“如何把多轮目标追求做成仅限前台的 bounded 工作，而不与 Web/异步子任务/重启恢复纠缠”。反映出项目在功能快速膨胀后，正在经历 **边界重划和模块解耦** 的阵痛。
- **决策积压已成社区共识（#8692）：** 该 tracker 本身就是社区对维护者决策速度的直接反馈。多个 RFC 依赖维护者拍板才能继续推进（详见第 8 节）。

---

## 5. Bug 与稳定性

### 高危

| Issue | 状态 | 说明 | Fix PR |
|---|---|---|---|
| [#9389 未认证 POST /api/pair 锁定基于攻击者可控 header](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) | ✅ CLOSED (p1) | 审计发现配对接口的锁定机制以攻击者提供的 header 为 key，可被用来对任意目标进行锁定耗尽。已关闭，表明已修复。 | 已随修复关闭 |
| [#9328 verifiable-intent 未验证凭证链即求值约束](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | 🟡 OPEN (p2, in-progress, accepted) | `vi_verify` 的 `evaluate_constraints` 直接信任调用方传入的 fulfillment 对象，未先经链上验证。参考实现中 `check_constraints` 只跑在密码学已验证的值上。**风险面较大，需持续跟进。** | 暂无 |
| [#9929 headless SOP 步骤得到 session path 但从未持久化](https://github.com/zeroclaw-labs/zeroclaw/issues/9929) | 🟡 OPEN (p1, blocked, accepted) | `drive_headless_run` 给每个 headless SOP 步骤构建了 `sop-{run_id}-step-{n}` 会话路径，但从未写入 session store。S2 级降级行为。 | 关联 [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203)（仍在评审中） |

### 中危

| Issue | 状态 | 说明 |
|---|---|---|
| [#9951 WeChat 渠道代码及其 51 个单元测试从未在 CI 编译/运行](https://github.com/zeroclaw-labs/zeroclaw/issues/9951) | ✅ CLOSED (p2) | `channel-wechat` 特性不在任何 CI feature 组合中，导致代码与测试长期“隐形”。 |
| [#9366 WhatsApp Web 接受 `approval_timeout_secs` 但从不读取](https://github.com/zeroclaw-labs/zeroclaw/issues/9366) | ✅ CLOSED (p2) | 配置项被校验、被接受，但两个传输层均未实际使用该超时。已从 #9348 拆分后独立关闭。 |

### 低危（均已随修复关闭）

- [#9710 桌面端截图临时文件存在两条遗漏清理路径](https://github.com/zeroclaw-labs/zeroclaw/issues/9710)（p3）
- [#9706 Edge TTS 存在一条省略清理的临时文件路径](https://github.com/zeroclaw-labs/zeroclaw/issues/9706)（p3）
- [#9643 wit/VERSIONING.md 未说明 enum 新增变体对已编译插件的破坏性](https://github.com/zeroclaw-labs/zeroclaw/issues/9643)（p1，文档类已关闭）

---

## 6. 功能请求与路线图信号

结合 v0.9.0 公开 tracker（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）与当前 issue/PR 状态，以下功能请求具有明确的纳入信号：

### 大概率进入 v0.9.0（状态为 accepted + 安全主线）

| Issue | 状态 | 说明 |
|---|---|---|
| [#7155 高危 shell 命令确认层级 + 命令策略](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | accepted 方向明确，维护者已介入范围收窄 | v0.9.0 工具策略的核心提案 |
| [#9598 SOP capability 权限契约](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) | 🟡 OPEN，blocked，RFC Rev 3 | 要求 `required_permissions` 成为权威，同时避免建立第二套授予体系。 |
| [#9887 超大图片降采样而非丢弃，且允许用 0 禁用多模态限制](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 🟡 OPEN，blocked + accepted | 恶意内容仍拒绝，但正常超大图将降采样后继续。产品体验改进明确。 |
| [#9945 browser 工具暴露 16/100+ 命令，iframe/对话框/标签页/表单控件不可达](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | 🟡 OPEN，blocked + accepted | 需要与 agent-browser 后端能力对齐，定位为高优先级能力缺口。 |

### 架构演进方向（RFC 阶段，决策中）

| Issue | 状态 | 核心主张 |
|---|---|---|
| [#9487 Runtime-owned 会话与传输适配器](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | needs-maintainer-review | 会话由运行时持有，所有入口统一走 `InboundAction`；引入持久化准入与歧义结果语义。 |
| [#6850 内存生命周期策略与存储后端解耦](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | needs-author-action | 将 consolidation/governance 从 `Memory` trait 中拆出，避免各网关重复实现。 |
| [#9810 加载 Agent Plugins 1.0 skill/MCP 包](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) | blocked, needs-maintainer-review | 支持 `plugin.json + skills/ + mcp.json` 的厂商中立插件标准。 |
| [#9880 类型化 resolved peer policy](https://github.com/zeroclaw-labs/zeroclaw/issues/9880) | blocked, needs-maintainer-review | 用类型系统替代 `Vec<String>` 字符串文法表达授权策略。 |

### 用户体验/降本类需求

| Issue | 状态 | 说明 |
|---|---|---|
| [#9631 向 OpenRouter 发送稳定 session_id 以获 prompt-cache 折扣](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) | 🟡 OPEN，blocked，p2 | 直击成本痛点：系统提示与工具 schema 每一轮都重复计费。社区呼声较高（👍 6，评论 6 条）。 |
| [#9895 提供按 provider 分组、分页的 Telegram /model 选择器](https://github.com/zeroclaw-labs/zeroclaw/issues/9895) | accepted | 解决移动端路由多时文本命令难以操作的问题。 |
| [#5907 为 ZeroCode 编码工作流提供可选 LSP 支持](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | needs-author-action | 用户认为 LSP 可显著减少本地模型编码幻觉。等待作者补充设计细节。 |

---

## 7. 用户反馈摘要

从近期 Issues/PR 评论中提炼的真实用户声音：

- **成本敏感度高（#9631）：** “一次对话产生几十次 LLM 请求，系统提示和工具 schema 每次都在重放”——用户已明确感受到 OpenRouter 计费压力，且给出了技术可行的解法（session_id 复用缓存）。
- **能力落差认知（#9945）：** 浏览器工具“只暴露 16 个动作，而后端有 100+ 命令”。用户对 iframe 内页面、JS 对话框、标签页管理无法操作表示明显不便。
- **安全与易用性的平衡诉求（#7155、#9887）：** 用户并非反对安全限制，而是希望 **策略可配置、可解释**（#7155 的多轮修订就是逐字打磨契约），以及 **“合法大图不要直接丢弃”**（#9887）。
- **本地模型用户的编码痛点（#5907）：** “LSP 是 agent 降低幻觉的兜底机制”，尤其对本地模型场景，用户希望获得与 Claude Code / OpenCode 对等的 LSP 能力。
- **配置行为的“反直觉”反馈（#9705、#9366）：** 配置项“被接受但从未生效/被误拒绝”是用户最容易产生挫败感的一类问题——两起均已在本次窗口内修复关闭。

---

## 8. 待处理积压

### 长期未响应 / 等待作者行动

| 项目 | 创建时间 | 类型 | 说明 |
|---|---|---|---|
| [#5907 可选 LSP 支持](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | 2026-04-19 | Issue，p2，needs-author-action | 已积压 **近 4 个月**。提案方向被社区认可，但作者未补充细化设计，处于停滞。 |
| [#8713 file_download SSRF 防护（allowed_private_hosts opt-in）](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | 2026-07-04 | PR，p1 安全，XL，needs-author-action | **高危安全 PR** 搁置超过 40 天。当前 `file_download.url` 完全绕过 SSRF 校验，请维护者加速推动。 |
| [#9013 TodoWrite 显示配置从 daemon 迁入 zerocode](https://github.com/zeroclaw-labs/zeroclaw/pull/9013) | 2026-07-12 | PR，refactor，needs-author-action | 架构清理性质的破坏性变更（`!`），等待作者处理冲突/反馈。 |
| [#9109 Hailo-Ollama 原生支持](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | 2026-07-17 | PR，enhancement，XL | 新增本地推理硬件支持，PR 体量大（XL）且在持续更新，但尚未获得维护者正式评审。 |
| [#9420 Anthropic 存储 OAuth profile 支持](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | 2026-07-26 | PR，enhancement，XL，needs-author-action | 来自 trusted contributor，涉及渠道/配置/文档多面，需要作者补充信息后进入评审。 |

### 处于 Blocked 状态 / 等待维护者决策

| 项目 | 说明 |
|---|---|
| [#9631 OpenRouter session_id](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) | 等待架构决策：session_id 归属权（与 #9487/#9600 会话运行时化相关） |
| [#9598 SOP 权限契约](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) | 等待维护者确认 Rev 3 的路径划分（临时 owner/风险画像 vs 完整共享权限） |
| [#9810 Agent Plugins 1.0 加载](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) | 依赖维护者对插件安全边界的裁定 |
| [#9880 resolved peer policy 类型化](https://github.com/zeroclaw-labs/zeroclaw/issues/9880) | 需要维护者拍板是否将其纳入 v0.9.0 破坏性变更 |
| [#9929 headless SOP 会话未持久化](https://github.com/zeroclaw-labs/zeroclaw/issues/9929) | p1 级 bug，被 #9203 的评审进度卡住 |
| [#9945 browser 工具扩展](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | accepted 但 blocked，需与 agent-browser 后端对齐策略 |
| [#9527 Rust 工具链升级至 1.97.1](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) | 例行升级，已 17 天，needs-author-action，等待作者补齐 26 个 CI 对齐项 |

---

**总体评价：** ZeroClaw 在 24 小时内完成了 **多项 p1 级安全修复的合并闭环**，Issue/PR 双 50 条的更新量说明社区参与度极高。项目当前处于 v0.9.0 安全加固与架构收敛并行的关键窗口期——真正的风险不在于活跃度，而在于 **大量已收窄的 RFC 和 p1 级修复 PR 滞留在等待维护者裁决/作者补料状态**。建议维护者优先调度 #8713（SSRF，p1）、#8692 决策队列、以及 #9420/#9109 两个 XL 级增强 PR 的评审资源。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*