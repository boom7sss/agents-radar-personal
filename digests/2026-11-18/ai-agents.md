# OpenClaw 生态日报 2026-11-18

> Issues: 417 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-18 18:52 UTC

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

# OpenClaw 项目日报 · 2026-11-18

## 1. 今日速览

项目今日处于**高活跃、高负载**状态：24 小时内 Issues 更新 417 条（新开/活跃 320、关闭 97），PR 更新 500 条（待合并 278、合并/关闭 222），并发布 1 个 `extended-stable` 版本。讨论热度集中在**持久化/转录存储、Gateway 生命周期、更新与安装路径**三条主线上，多个 P0/P1 缺陷长期未收敛。同时可见一批清理性 PR（文档、UI 文案、locale 刷新）由机器人批量提交，说明维护带宽正被大量小修与积压分流。整体健康度：**贡献端强劲，但稳定性修复的合并速度落后于问题发现速度**，尤其是会话状态与消息丢失类问题。

## 2. 版本发布

**v2026.10.33**（gateway-only `extended-stable`，项目当前的 LTS 等价通道）

- 基于 2026 年 10 月末的 OpenClaw 代码线；
- 包含关键安全更新、可靠性与性能修复，以及新模型支持等功能。
- 摘要未披露具体破坏性变更与迁移步骤，建议发布方补充：**版本号跳跃说明、gateway-only 的兼容边界、升级前需检查的配置项**。本次未提供可引用的破坏性变更信息，不做推断。

## 3. 项目进展

今日合并/关闭的 PR 中，较有价值的方向：

- **#200905（已关闭）** 配对提示修正：未配对的 CLI/TUI 客户端不再被误导执行 `devices approve --latest`，改为提示在 Gateway 主机上批准。链接：openclaw/openclaw PR #200905
- **#200783（已关闭）** `oc-path` 扩展支持以孤立 CR 作为换行的 Markdown 读写，修复 frontmatter 解析与行偏移错误。链接：openclaw/openclaw PR #200783
- **#201379（已关闭）** Control UI 本地化文件刷新，经保护分支检查流程完成。链接：openclaw/openclaw PR #201379
- **#188397（已合并，作为背景提及）** 数据库迁移到 PostgreSQL 时按行整块复制导航行，为 #201374 的搜索行批处理铺路。链接：openclaw/openclaw PR #201374

Issues 端今日关闭 97 条，其中包含若干已被更新解决的老问题（如 #192667 报告者确认 macOS 设置卡顿与深色主题输入可见性在升级至 2026.11.5 后均消失；#194451 `/think` 指令杀死回合的问题关闭）。**整体推进幅度：中小**——以体验修正与外围修复为主，核心存储与生命周期问题仍在排队。

## 4. 社区热点

按评论数排序的高热议题：

| 议题 | 热度 | 核心诉求 |
|---|---|---|
| #191944 macOS 上 `gateway stop` / `--force` 均失败（“Process ancestry could not be fully inspected”） | 37 评论 | 运维可操作性：停止服务的兜底路径缺失 |
| #119720 同步式 agent 持久化与转录维护阻塞 Gateway 事件循环 | 28 评论 | 规模化下的架构性瓶颈 |
| #197083 安装后 Doctor 的 WAL 发布校验失败，11.3 更新半完成 | 23 评论 | 更新事务性与可回滚性 |
| #123792 CLI 后端下助手回合重复渲染 | 20 评论 | 转录呈现一致性 |
| #182891 Prompt 缓存从不复用（`cache read dropped N -> 0`） | 19 评论 | 成本与延迟 |
| #153426 **P0** `MEMORY.md`/`USER.md` 被 provenance 棘轮静默永久排除注入 | 18 评论 | 记忆可信度与可恢复性 |

链接：openclaw/openclaw Issue #191944、#119720、#197083、#123792、#182891、#153426

**分析**：高热议题几乎全部指向“**用户看不见的状态**”——服务停不掉、更新停在半途、记忆被静默丢弃、缓存静默失效。社区诉求不是新功能，而是**可诊断性与可恢复手段**（reason code、CLI 恢复命令、诊断输出）。PR 端讨论集中在 UI 打磨与安装引导（#201296 Mac 首启简化为欢迎页+单次 AI 选择、#200329 未连接模型时引导至 setup）。

## 5. Bug 与稳定性

按严重程度排列：

**P0**
- **#153426** 记忆根文件被 provenance 棘轮静默排除，无诊断、无 CLI、无恢复路径；涉及安全审查与产品决策，**暂无 fix PR**。链接：openclaw/openclaw Issue #153426

**P1**
- **#119720** 同步持久化阻塞事件循环，影响 message-loss 与 crash-loop；已有部分修复落地（#140231 移除不必要的溢出恢复），**主体未收敛**。
- **#196199** 自 2026.10.10 起的回归：Codex helper 完成无法恢复父代理，暂停目标并锁死用户；状态 needs-info，**无 fix PR**。
- **#152965** 热重载非 channel 插件会 dispose 全部 channel 插件且不重连，切断活跃流并丢入站消息；**无 fix PR**。
- **#167557** 延迟插件数据/设置迁移永不收敛（“managed handoff lease database identity changed”）；**无 fix PR**。
- **#181120** macOS Gateway 主线程阻塞于关闭 worker MessagePort 导致无响应；**无 fix PR**。
- **#196505** `memory index` 因 worker 容量上限中止而不重试，约 864 MiB 语料永不完成；**无 fix PR**。
- **#201373（PR，待合并）** 修复 `sessions_send` 超时后仍阻塞回合；标记 merge-risk: message-delivery，等待作者。链接：openclaw/openclaw PR #201373

**P2（代表性）**
- #123792 回合重复渲染（session-state / ux-friction）
- #182891 缓存读取归零（envelope 重写、runtimeContextCarrier 变化）
- #177094 webchat 系统通知镜像挤占末条回答
- #161158 `gateway restart` 成功却报失败且退出码为 0，60s 就绪预算硬编码
- #201383 安装器在输出末尾埋没 PATH 修复提示
- #201381 `openclaw dashboard` 在交付未成功前即宣称配对链接已包含

**已有 fix PR 关联**：#164065（Telegram requireMention 不拦截裸斜杠命令）与 #177633（会议双向音频采集超时）均标记 linked-pr-open。

## 6. 功能请求与路线图信号

- **可诊断性**：#127195 十六处调用点抛出字节相同的 “changed while starting work”，无 reason code——与 #191944、#161158 同属一类，**具备合并为“错误码体系”工作的条件**。
- **恢复工具**：#170562 请求 Doctor 支持列出并清理滞留的 requester settle wake，避免手改状态库。
- **可观测性**：#169428 请求在 `/usage full` 页脚暴露 `model.auth_label`。
- **可访问性**：#154524 将聊天消息暴露为标题以便屏幕阅读器导航。
- **首启体验**：#201296（Mac 首启压缩为欢迎页+单个 AI 选择器）与 #200329（未连接模型时引导 setup）已提交 PR，**最有可能进入下一版本**。
- **UI 细化**：#201375、#201376、#201378、#201308 均为小改动，落地概率高。

## 7. 用户反馈摘要

- **更新流程是最大痛点**：#197083（WAL 校验失败后半完成）、#200756（Windows beta.2→beta.4 在 package-swap 处失败且回滚树变更）、#201361（被中断的更新在下次普通 update 时被静默 settle）、#167557（迁移永不收敛）共同指向：**更新缺乏事务语义与明确的人工介入路径**。
- **平台差异明显**：macOS 集中于服务停止与主线程阻塞（#191944、#181120）；Windows 集中于插件暂存与包交换（#162585、#200756）；Linux/npm 集中于迁移与索引（#167557、#196505）。
- **记忆与上下文可信度**：#153426 与 #182891 反映用户对“静默降级”高度敏感——记忆被排除、缓存被丢弃都无任何提示。
- **满意信号**：报告者在跟进时主动确认修复（#192667 明确指出两个症状在 2026.11.5 后消失），说明稳定通道的更新确有实效。
- **多代理/多渠道是主流场景**：多个报告来自多代理、多 channel、长会话（13 天 / ~310k token）部署，问题多在规模化后才显形。

## 8. 待处理积压

长期未响应且影响较大的议题，建议维护者优先分诊：

- **#112638**（2026-07-22 创建）`session.maintenance` enforce 模式无法约束存储上限，thread/channel 条目豁免回收，已标记 stale、needs-product-decision。
- **#119720**（2026-08-05）P1 事件循环阻塞，跨三个多月仍在讨论。
- **#127195**（2026-08-21）十六处同文案错误缺 reason code，需产品决策。
- **#141172**（2026-09-07）run 在首次 session commit 前死亡导致 `agent.run.started` 永久泄漏。
- **#153426**（2026-09-20）P0 记忆根文件被排除，同时需要安全审查与产品决策，**优先级与挂起时长最不匹配**。
- **#161158**（2026-09-29）`gateway restart` 误报失败且退出码为 0，就绪预算不可配置。
- PR **#186955**（2026-10-28）cron 父运行结束时子任务被终止，标记 merge-risk: security-boundary，等待维护者裁定行为变更。

**建议**：为上述 P0/P1 建立明确的 owner 与目标版本，并对 stale 但影响稳定性的条目移出 stale 流程，避免长期挂起削弱社区对问题跟踪的信心。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告（2026-11-18）

## 1. 生态全景

当前生态呈现明显的“活跃度两极分化”：OpenClaw、ZeroClaw、Hermes Agent、CoPaw 四个项目处在高负载运行区间，单日 Issues/PR 更新量级在 50 条上下，而 PicoClaw、NanoClaw、LobsterAI 处于中等强度，NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw 当日零活动。跨项目的共性矛盾高度一致——**问题发现速度普遍快于修复合并速度**，多个项目出现“新增与活跃 Issue 远多于当日关闭量”的输入输出失衡（Hermes 45 活跃对 5 关闭；ZeroClaw 40 活跃对 10 关闭）。技术焦点已从“能不能跑”转向“**运行中看不见的状态**”：会话持久化、上下文预算、审批门禁、更新事务性成为各项目共同的高热议题。同时，外部生态（AI/ML API、OneCLI、Kimi K3.1 Pro 等）主动对接与兼容适配，说明该品类已具备第三方生态位。

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃·关闭） | PR（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 320 活跃 · 97 关闭（共 417） | 278 待合并 · 222 合并/关闭（共 500） | v2026.10.33（gateway-only extended-stable） | 贡献端强劲；P0/P1 修复合并落后于问题发现，存储与生命周期类问题长期排队 |
| **ZeroClaw** | 40 活跃 · 10 关闭 | 48 待合并 · 2 合并/关闭 | 无 | CI 安全任务失败致合并队列停滞（#12320），吞吐严重受限；安全线清理有实质进展 |
| **Hermes Agent** | 45 活跃 · 5 关闭 | 46 待合并 · 4 合并/关闭 | v0.23.2+canary | 输入远大于输出，待审队列持续加压；P1/P2 稳定性问题多为长期项 |
| **CoPaw** | 8 活跃 · 7 关闭（共 15） | 19 待合并 · 15 合并/关闭（共 34） | v2.3.0.post1（另有 2.3.1b1 版本号推进） | 迭代快、安全加固落地（#7757、#8028）；但补丁版引入 3 条当日回归 |
| **NanoClaw** | 7 活跃 · 3 关闭 | 12 待合并 · 10 合并/关闭（共 22） | 无正式版（rc.2 发布 PR 已关闭） | 响应快，多条 Bug 当日即有 fix PR；活动集中于单一贡献者的 WebUI 领域 |
| **NanoBot** | 6 条更新 | 11 待合并 · 14 合并/关闭（共 25） | 无 | 活跃但集中化；核心 Agent/记忆/工具链无重大合并；出现 PR 相互回滚（#6708→#6712） |
| **LobsterAI** | 2 条更新 | 8 条更新（7 关闭/合并） | 无 | 以清理 stale 积压为主；安全修复（#2590 命令注入）仍挂起约 2.5 个月 |
| **PicoClaw** | 1 关闭 | 4 关闭（0 待合并） | 无 | 维护日，负载轻；安全 Issue #3456 以 stale 关闭且无对应 fix PR，需复核 |
| **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** | 无活动 | 无活动 | 无 | 当日静默（本报告不对其活跃度外推） |

> 说明：NanoBot 材料未拆分 Issue 新开/关闭明细；LobsterAI 与 PicoClaw 仅给出汇总条数。

## 3. OpenClaw 在生态中的定位

**规模优势明确。** OpenClaw 单日 Issues 更新 417 条、PR 更新 500 条，量级约为第二名 ZeroClaw / Hermes（各 50 条量级）的 **8–10 倍**；其 222 条当日合并/关闭量也远超其他项目的合并吞吐，说明它具备实际维护带宽，不只是“输入大”。在材料覆盖的项目中，OpenClaw 是唯一披露**独立 LTS 等价通道**（gateway-only `extended-stable`，v2026.10.33）的项目，版本治理成熟度领先。

**技术路线差异。** OpenClaw 的问题谱系最“重”——涉及 PostgreSQL 迁移、Gateway 生命周期、WAL 发布校验、provenance 棘轮、多 channel 热重载，典型部署为**多代理、多 channel、13 天 / ~310k token 的长会话**。相较之下 NanoClaw 聚焦容器 + Slack + 多 provider 接入链路，PicoClaw 面向硬件侧（sipeed），CoPaw 强调插件化瘦身与国内 IM（钉钉/飞书/微信）集成。OpenClaw 走的是**通用可规模化网关**路线，覆盖面最宽，也因此承担了最多的架构性缺陷。

**社区规模的另一面。** 其高热议题评论数（37、28、23、20、19、18）显著高于其他项目（多数 0–11 条），社区讨论深度最强；但在同一材料中，**最新 Issue 列表中未出现 OpenClaw 的用户贡献者构成信息**，故不对“贡献者集中度”作对比推断。可以确认的是：OpenClaw 的 P0（#153426 记忆根文件被静默排除）已挂起自 2026-09-20，优先级与挂起时长最不匹配，这是规模领先项目典型的治理债。

## 4. 共同关注的技术方向

**（1）静默失败与可诊断性——覆盖面最广的共识**
- OpenClaw：#153426 记忆被 provenance 棘轮静默排除；#182891 缓存读取静默归零；#127195 十六处相同错误文案无 reason code
- NanoBot：#6649 Dream 上下文静默截断至 1000 字符；#5402 token 估算低估致合并从不触发
- ZeroClaw：#9770 `cron update` 静默吞掉六列变更；#9896 Memory 状态显示与实际后端不符
- Hermes：#147839 单次 20s 超时污染存储、用户只见 “No reply”；#119070 限流后状态粘滞永久阻塞
- LobsterAI：#3090/#3114 已保存的 executionMode 被静默降级为 local
- CoPaw：#8806 从未发送的 user 消息驱动 agent 循环执行
> 共同诉求：**reason code、可诊断输出、静默降级必须可见**。

**（2）会话状态与持久化的正确性**
- OpenClaw：#119720 同步持久化阻塞事件循环；#123792 回合重复渲染
- Hermes：#147839 超时污染会话存储；#155114 后台进程回执缺退出时间
- NanoClaw：PR #4462 单轮回答多个排队输入导致回复路由落后
- ZeroClaw：PR #12503 auto_save 固定键覆盖（#12508/#12506 并行实现待统一）
- NanoBot：#6704 `message()` 草稿在下一轮丢失

**（3）更新 / 安装的事务性与可回滚性**
- OpenClaw：#197083 WAL 校验失败致更新半完成、#200756 Windows 包交换失败回滚树变更、#201361 被中断更新被静默 settle
- NanoClaw：#4454 无 Bun 主机跳过类型检查（已有 fix #4461）
- CoPaw：#8812 `qwenpaw update` 后钉钉/飞书频道默认不可用
- LobsterAI：Windows 产物编码与链接打开方式（#3109）

**（4）上下文预算与缓存成本**
- OpenClaw：#182891 prompt 缓存从不复用
- ZeroClaw：#12401 keep_tool_context_turns 破坏 Claude thinking-signature；#11696 人格文件改动击穿全部会话缓存
- Hermes：#147220 委派子智能体 prompt-cache TTL 诉求（已关闭）；#136167 token 膨胀对小 VRAM 本地模型不友好
- NanoBot：#6718 Kimi K3.1 Pro 下 96 token 预算硬编码导致标题生成失败

**（5）安全门禁与审批 —— 其中“失败开放”是跨项目共性风险**
- PicoClaw：#3456 重载时审批钩子初始化失败后网关继续无门禁执行工具（**fail-open**，以 stale 关闭且无 fix PR）
- LobsterAI：PR #2590 MCP stdio 命令未校验 shell 元字符、URL 直传 `shell.openExternal`（挂起约 2.5 个月）；#3096 `localfile://` 无根目录白名单
- CoPaw：#8028 标记内联 Office COM 自动化；#7757 破坏性命令分类器；PR #8810 补齐 shell 发邮件/HTTP 写/上传审批
- ZeroClaw：PR #12449 远程 MCP OAuth 2.1 + PKCE；Windows 安装器跳过 SHA256 校验（#12122）
- Hermes：PR #29373 / #124063 两份重叠的 Mattermost 审批按钮实现均待决策
- NanoBot：#6701 NUL 字节主机名致 getaddrinfo 截断（已有 fix #6716）；PR #5405 手动触发技能防自动预加载（挂起约 3 个月）
> 诉求：**失败必须 fail-closed，安全修复不应长期挂在 needs-decision**。

## 5. 差异化定位分析

| 维度 | 代表项目 | 关键差异 |
|---|---|---|
| **通用规模化网关** | OpenClaw | 多代理/多 channel/长会话，PostgreSQL、Gateway 生命周期、LTS 通道；缺陷谱系最“重” |
| **插件化精简架构** | CoPaw | 官方路线图 #8808“非核心功能插件化”，三条 XXXL PR（MCP / 本地模型管理 / Whisper）为关键路径；国内 IM 集成（钉钉/飞书/微信） |
| **CI/运行时工程化** | ZeroClaw | Rust 栈，聚焦 CI 门禁、依赖安全公告（RUSTSEC）、provider 兼容与插件 wake dispatch/OAuth |
| **桌面 + 订阅生态** | Hermes Agent | Hermes Desktop（macOS DMG 等）、Kanban、委派子智能体、多平台机器人群（WhatsApp/Mattermost） |
| **容器 + 多 provider 接入** | NanoClaw | Claude/Codex/Cursor/OneCLI 多提供方安装链路，Slack 渠道，容器基础镜像演进 |
| **轻量 / 硬件侧** | PicoClaw | sipeed 背景，provider 输出清洗（thinking 标签剥离），维护节奏平缓 |
| **应用层体验** | LobsterAI | Cowork 执行模式、产物预览与编码（GBK CSV）、OpenClaw 兼容层（#3113） |
| **渠道连续性** | NanoBot | WebUI 与渠道会话互通（PR #6714）、Dream 记忆、技能治理 |

目标用户分层亦清晰：OpenClaw / ZeroClaw / CoPaw 面向**自托管运维者与企业集成方**；Hermes 与 LobsterAI 面向**桌面日常用户**；NanoClaw / NanoBot 面向**快速接入多模型的轻量部署者**；PicoClaw 面向**硬件与嵌入式场景**。

## 6. 社区热度与成熟度

**第一层：高负载迭代期（问题与修复同时高速涌入）**
- **OpenClaw**：合并吞吐最高（222），但仍被积压分流；核心 P0/P1 未收敛。
- **ZeroClaw**：最典型的“**质量门禁卡住吞吐**”——CI 安全任务失败致 48 条 PR 无法落地，属可定位、可解的单点阻塞。
- **Hermes Agent**：46 条待合并 + 多条 `needs-decision` 长期挂起（#29023 近 6 个月、#119070 讨论最热但未决），决策瓶颈大于技术瓶颈。
- **CoPaw**：发布节奏最快（当日发补丁版 + 推进 2.3.1b1），但**发布质量门禁需关注**——补丁版当日引出窄屏裁剪、日志刷屏、频道失效三条回归。

**第二层：质量巩固期 / 收敛期**
- **NanoClaw**：围绕 rc.2 的稳定性收敛，多提供方安装回归修复集中，响应节奏快。
- **LobsterAI**：单日清理 3 条自 2026-10-04 挂起的 stale PR，属积压整理，无新功能落地。
- **NanoBot**：WebUI 体验迭代为主，但出现 PR 相互回滚，上线节奏不稳。

**第三层：低频维护 / 静默**
- **PicoClaw**：仅清理 8 个月前的批量汇总 PR；安全 Issue 以 stale 关闭，需复核关闭原因。
- **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw**：当日无活动。

## 7. 值得关注的趋势信号

**（1）“静默降级”正成为用户信任的最大杀手。** 六个以上项目同时出现“不报错但结果不对”的报告——记忆被排除、缓存归零、配置被吞、执行模式被降级、草稿丢失。对开发者的参考：**把可观测性当作功能而非运维附属品**，在降级路径上强制输出 reason code 与恢复命令，比新增能力更能留住用户。

**（2）更新流程缺乏事务语义是跨项目系统性缺陷。** OpenClaw 的“半完成更新”“静默 settle”、CoPaw 的“补丁版引入回归”、NanoClaw 的“无 Bun 跳过类型检查”指向同一工程要求：**发布需具备事务性、回滚路径与人工介入点**。对开发者的参考：把“失败要显式失败”写入安装/更新脚本的错误处理约定（CoPaw PR #4434 类取向）。

**（3）安全修复被长期挂在决策队列，是当前最危险的结构性风险。** PicoClaw 的 fail-open 审批问题以 stale 关闭、LobsterAI 命令注入 PR 挂起 2.5 个月、Hermes 两份重叠审批实现待决策、NanoBot 手动技能 PR 挂起约 3 个月。对开发者的参考：**安全类条目应移出 stale / needs-decision 常规流程**，设明确 owner 与目标版本。

**（4）上下文折叠与缓存优化的“降本机制正在制造新故障”。** ZeroClaw #12401/#11696 与 OpenClaw #182891 共同显示：为省 token 而做的上下文折叠、system prompt 重建，会击穿 provider 的签名/缓存机制，导致会话永久失败或成本反升。对开发者的参考：**预算策略必须按模型适配**（NanoBot #6718 的硬编码 96 token 即为反例），并保留“降本失败可回退”的开关。

**（5）多 provider 与外部生态接入成为常态摩擦点。** NanoClaw 的 Codex/Cursor/OneCLI 安装回归集中爆发、NanoBot 的 Kimi K3.1 Pro 适配、CoPaw 的 Hub 网关 preset 失败（#8718）、LobsterAI 的 HTTP 403 账号策略——生态方主动对接（#6705 AI/ML API 方提出接入）说明品类已有生态位，但**兼容层缺少统一的错误可读性与按模型适配策略**。

**（6）多代理 / 多渠道 / 长会话是主流生产场景，问题在规模化后才显形。** OpenClaw 的 13 天 / ~310k token 部署、ZeroClaw 的兄弟工作区权限越级（#12144）、Hermes 的远程网关会话映射（#149979）表明：**最小权限模型、跨渠道会话连续性、超长会话的容量边界**将成为下一阶段架构竞争的核心。

**（7）国际化与 CJK 场景是被低估的工程债。** CoPaw PR #8133（中文标点处 Markdown 强调边界解析）评审超 5 周、LobsterAI 的 GBK CSV 乱码——对面向中文用户的开发者具有直接参考价值。

---

**一句话结论**：本生态已越过“功能演示”阶段，进入**可靠性、可诊断性与安全治理**的深水区；决定项目长期竞争力的，不再是能力清单的长度，而是对“静默失败”的消除速度与对安全积压的裁决效率。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报（2026-11-18）

## 1. 今日速览

过去24小时内，NanoBot 共更新 6 条 Issue、25 条 PR，无新版本发布，整体活跃度处于较高水平。PR 侧更新量显著，单日 25 条，其中 14 条已合并或关闭、11 条待合并；但绝大部分来自少数贡献者的 WebUI 相关提交，集中在 UI/性能与启动流程，项目活动呈现明显的集中化特征。当日关闭的两条 Issue 分别涉及 Dream 记忆上下文截断和 token 估算低估的长期缺陷，说明维护者正在清理存量稳定性问题。新报告的 Issue 以安全类问题（NUL 字节主机名）和与新模型兼容性（Kimi K3.1 Pro）为代表，属于集成层面的新风险点。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 以 WebUI 优化与缺陷修复为主：

- **#6708 [CLOSED]** perf(webui): batch startup recovery and authenticate before React — 启动恢复批处理并提前鉴权，但作者自注「端到端目标未达成」，属半成品的性能改进。
- **#6712 [CLOSED]** fix(webui): restore startup flow while keeping recovery batching — 回滚 #6708 中影响 Windows 首次新建对话速度的启动流程改动，保留恢复批处理，属于对前序 PR 的回归修正。
- **#6711 [CLOSED]** perf(webui): avoid redundant diff bundle assets — 去除无 Markdown 时对 Markdown 解析器的下载，消除 diff worker 中 Shiki 语言/主题资源的重复打包。
- **#6709 [CLOSED]** feat(webui): expand long drafts and refine chat scrollbars — 长草稿展开与聊天滚动条UI改进。
- **#6710 [CLOSED]** fix(webui): style focus after sidebar topic rename — 修复侧栏会话重命名后按 Enter 出现异常焦点框。
- **#6682 [CLOSED]** fix(webui): support SSH with a configured public WebSocket URL — 支持 HTTPS 反向代理场景下的 SSH 连接。

整体判断：项目今日推进主要是 WebUI 体验与启动性能的迭代，核心 Agent/记忆/工具链能力无重大合并；#6708 → #6712 的回滚反映出性能改动在上线节奏上仍不稳定。

## 4. 社区热点

今日讨论热度整体偏低（各条评论数多为 0–2），最受关注的是：

- **#6704 [OPEN]** A drafted message() notification disappears from the next conversation turn（评论 1，2026-11-18）— 用户生成 `message()` 草稿通知后，该内容在下一轮对话中丢失，无法复现原文与细节。诉求核心是会话回放对工具草稿的处理语义。已有对应修复 PR #6717 提交。链接: HKUDS/nanobot Issue #6704
- **#6649 [CLOSED]** Dream 仅能看到 history.jsonl 中每条累计检查点的前 1000 字符（评论 2，2026-11-13→11-18）— 自 #5610 起每条 compaction 追加完整累计检查点，但 `build_dream_prompt` 仍截断，导致记忆丢失。链接: HKUDS/nanobot Issue #6649
- **#5402 [CLOSED]** token 合并从不触发，tiktoken 估算持续低估实际 API token 数（评论 2，2026-08-16→11-18）— 持续三个月的存量 bug 今日关闭。链接: HKUDS/nanobot Issue #5402

分析：热点集中在「记忆/上下文」与「token 预算」两条主线，用户对 Nanobot 长期记忆与上下文管理的正确性高度敏感；同时社区反馈周期偏长（#5402 历时约三个月）。

## 5. Bug 与稳定性

按严重程度排列：

**高 — 安全问题**
- **#6701 [OPEN]** `resolve_url_target()` 允许含 NUL 字节（`\x00`）的主机名，导致 macOS/POSIX 上 `getaddrinfo` 发生 C 层截断。链接: HKUDS/nanobot Issue #6701 — **已有 fix PR #6716**（在 DNS 解析前拒绝控制字符与空白字符）。

**中 — 会话数据一致性**
- **#6704 [OPEN]** `message()` 草稿通知在下一轮对话中丢失。链接: HKUDS/nanobot Issue #6704 — **已有 fix PR #6717**（保留字面工具草稿与时间标题）。

**中 — 模型兼容性**
- **#6718 [OPEN]** Kimi K3.1 Pro 下 WebUI 自动标题生成因 96 token 预算耗尽而失败，话题停留在 "Untitled"（主回复正常）。链接: HKUDS/nanobot Issue #6718 — 暂无 fix PR，属新增的第三方模型适配问题。

**已关闭（存量）**
- **#6649 [CLOSED]** Dream 上下文截断至 1000 字符。
- **#5402 [CLOSED]** token 估算低估导致合并从不触发。

## 6. 功能请求与路线图信号

- **#6705 [OPEN]** 请求将 AI/ML API 官方托管 MCP server 加入 MCP 预设列表，免去用户手工输入 URL。链接: HKUDS/nanobot Issue #6705 — 属低成本的生态集成类需求，实施门槛低，但当前无对应 PR，进入下一版本取决于维护者预设列表治理策略。
- **PR #6714 [OPEN]** feat(webui): 从侧栏继续频道会话 — 允许在 WebUI 中继续 Telegram 等渠道发起的会话，解决跨端上下文丢失。链接: HKUDS/nanobot PR #6714 — 功能完整度高，是本日最可能落地的功能增量。
- **PR #5405 [OPEN]** feat(skills): 支持仅手动触发的技能 — 为部署、发布等有副作用的技能提供用户独占模式，避免被 `always: true` 自动预加载。链接: HKUDS/nanobot PR #5405 — 自 2026-08-16 起长期开放，属安全相关的技能治理需求，值得推进。
- **PR #6680 [OPEN]** fix(mcp): 隔离 MCP server 启动与重试 — 慢速或不响应的 MCP server 不再阻塞普通聊天，10 秒报告慢启动、60 秒取消未完成启动。链接: HKUDS/nanobot PR #6680 — 直接改善 MCP 生态可用性。

## 7. 用户反馈摘要

- **记忆可靠性是核心痛点**：#6649 与 #5402 均围绕上下文与 token 预算的「静默失败」，用户难以察觉记忆被截断或合并未触发，反映出可观测性不足。
- **跨渠道连续性需求明确**：#6704 中用户在准备 `message()` 调用后发现草稿丢失，PR #6714 中用户希望从 WebUI 继续 Telegram 会话，共同指向「会话状态在渠道与轮次间不连续」这一真实使用场景。
- **新模型集成是持续摩擦点**：#6718 显示用户通过 OpenAI 兼容接口接入 Kimi K3.1 Pro 时遭遇硬编码 96 token 预算限制，说明标题生成等辅助调用缺少按模型适配的预算策略。
- **生态方主动对接**：#6705 由 AI/ML API 方主动提出，表明项目已具备吸引第三方 MCP 服务方接入的生态位。
- **满意度信号**：存量 bug #5402、#6649 今日关闭，反映维护者对长期反馈的响应在改善，但反馈到关闭的周期仍偏长。

## 8. 待处理积压

- **PR #5405 [OPEN]** feat(skills): support manual-only invocation — 自 2026-08-16 创建、今日仍有更新，已开放约三个月，涉及副作用技能的安全治理。链接: HKUDS/nanobot PR #5405
- **PR #6194 [OPEN]** test: allow durable delivery and shutdown to finish on CI — 自 2026-10-13 创建，已随 #6614 调整测试范围并合并 main，仍在等待合并，属 CI 稳定性阻塞项。链接: HKUDS/nanobot PR #6194
- **PR #6686 [OPEN] [conflict]** refactor(gateway): consolidate startup — 存在合并冲突，且与今日 #6708/#6712/#6713 的启动流程改动高度重叠，建议先协调启动相关 PR 的合并顺序，避免重复返工。链接: HKUDS/nanobot PR #6686
- **Issue #5402 / #6649 虽已关闭**，但同类「静默截断/估算偏差」问题已反复出现，建议维护者补充回归测试或增加可观测性问题模板，防止复发。

**项目健康度小结**：提交活跃度高但集中于单一贡献者的 WebUI 领域，核心模块合并较少；当日安全类问题均有对应 fix PR，响应及时；主要风险在于 PR 之间的相互回滚（#6708→#6712）以及积压约三个月的技能治理与 CI 稳定性 PR。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-11-18

## 1. 今日速览

项目今日维持高活跃节奏：过去 24 小时 50 条 Issue 更新（新开/活跃 45、关闭 5）、50 条 PR 更新（待合并 46、合并/关闭 4），并有 1 个 canary 版本发布（v0.23.2+canary.20261118T064620Z）。整体呈“输入远大于输出”的状态——新增与活跃 Issue/PR 数量远超当日关闭/合并量，待审队列持续加压。讨论热度集中在会话持久化、Kanban 重派与限流判定、桌面端/网关会话错配三类稳定性问题。当日关闭的 5 个 Issue 涉及桌面终端光标跳动、ACP 后台进程回调路由、委派子智能体 prompt-cache 等，说明部分修复已进入收割期。健康度总体可控，但 P1/P2 稳定性问题集中且多为长时间未解（部分 Issue 自 5 月延续至今），需要维护者优先分诊。

## 2. 版本发布

**v0.23.2+canary.20261118T064620Z**（Release Date: November 18, 2026）

- 上游材料仅提供版本号、发布日期与下载表结构（Hermes Desktop，macOS Apple Silicon DMG 等条目，含被截断的资源链接），**未给出变更日志、破坏性变更或迁移说明**，故无法评估更新内容与迁移注意事项。
- 性质为 canary（金丝雀）预发布通道构建，非稳定版。
- 相关信号：当日有用户报告“Desktop 0.23.2 集成终端光标水平跳动”（Issue #157373，已关闭），可作为对照 0.23.2 线稳定性的参考，但该 Issue 是否与本次 canary 构建相关，材料中无证据。

## 3. 项目进展

当日合并/关闭的 PR 为 4 条、关闭 Issue 5 条，但上游仅列出一条被合并/关闭的具体 PR：

- **PR #157522**（OPEN，作者 teknium1，标签 ci-reviewed）— 修复开发工作树 `.venv` 被交叉指向的问题：此前某 worktree 的 venv 链接到另一 checkout 时，每次 `git commit` 会将该 venv 重新指向自身，导致另一 checkout 静默运行本树代码；现改为 git hooks 不再执行 `uv run`，直接启动 lefthook。**注：该 PR 状态为 OPEN，归入“待合并”更准确。**
- 已关闭 Issue 中值得关注：
  - #147220（Feature，已关闭）：`delegation.cache_ttl`，使委派子智能体可用 1h prompt-cache 层。
  - #154712（Feature，已关闭）：允许不强制 64k 上下文。
  - #157364（Bug，已关闭）：ACP（T3 Code）后台进程完成轮的回复误投递到网关 local 会话。
  - #157373（Bug，已关闭）：Desktop 0.23.2 集成终端光标跳动。

**评估**：当日可见的“向前推进”体量有限（材料中未展示其余 3 条已合并/关闭 PR 的内容），净进展被新增 45 条活跃 Issue 抵消。项目处于“修复与新增同步涌入”的阶段。

## 4. 社区热点

- **Issue #119070**（P2，28 评论，最热）— https://github.com/NousResearch/hermes-agent/issues/119070
  Kanban 卡片的工作轮曾被限流、重试后成功，却被 `check_respawn_guard` 永久判定为 `blocker_auth`，评审者永不启动。诉求：限流/鉴权失败状态需要“成功即清除”的复位语义，而非粘滞状态机。
- **Issue #147839**（P1，11 评论）— https://github.com/NousResearch/hermes-agent/issues/147839
  单次 20 秒 `worker_receipt_timeout` 污染会话存储并毁掉整个回合，用户只看到“No reply”。诉求：超时应为可恢复错误，而非回合级致命错误。
- **Issue #149979**（P2，8 评论）— https://github.com/NousResearch/hermes-agent/issues/149979
  远程网关下，Bot Chat 会话的聊天媒体下载报“Session not found”（涉及非默认 profile 的隐藏 Bot Chat 会话）。
- **Issue #109375**（P2，7 评论，needs-repro）— https://github.com/NousResearch/hermes-agent/issues/109375
  Kanban 与 Group Bot Chat 的短生命周期运行时中，技能后台审查可能丢失。
- **Issue #29023**（P2，6 评论）— https://github.com/NousResearch/hermes-agent/issues/29023
  WhatsApp 回复机器人检测失败：botIds 与 quotedParticipant 的设备后缀不匹配。自 2026-05-20 起长期活跃。
- **PR #152969**（OPEN，P2）— https://github.com/NousResearch/hermes-agent/pull/152969
  Anthropic thinking-only 恢复改为逐级升级，而非重复发送字节相同的请求（接续 #152372/#115590）。

**背后诉求**：讨论热度几乎全部指向**会话状态与会话路由的正确性**（限流状态、超时、profile/会话 ID 映射、平台端 bot 识别），而非新能力。用户对“静默失败”（无回复、无报错、永久阻塞）的容忍度最低。

## 5. Bug 与稳定性

按严重程度：

**P1**
- #147839 会话持久化：单次 20s receipt 超时污染存储并毁掉回合（用户见“No reply”）。**未见对应 fix PR**（材料中无）。

**P2（有对应/相关 fix PR）**
- #155114 已完成后台进程的持久回执缺失退出时间，导致陈旧终端标签永不过期 → **已有 fix PR #157521**（persist exit time in durable receipt）。
- #149979 桌面（远程网关）Bot Chat 会话媒体下载失败“Session not found” → 未见 fix PR。
- #156470 浏览器版 webapp 中 `ctx.os.pickOpenPath` 返回暂存上传路径而非所选文件 → 未见 fix PR。
- #157438 OpenViking catalog 插件 2.1.2 在 `agent/message_content.py` 移除后导入失败，且启动时隐藏了导入原因 → 未见 fix PR（当日新报）。
- #157167 `idle_timeout_seconds` 停掉的 stdio MCP 服务器，导致 Cron 任务丢失其工具（当日新报） → 未见 fix PR。
- #144581 回合内就地压缩把带图回合的 agent-only 文本存为用户行，重载后图片显示为占位文字 → 未见 fix PR。
- #119070 Kanban 卡片被 `blocker_auth` 永久滞留（见社区热点）。
- #29023 WhatsApp reply-to-bot 检测失败（设备后缀不匹配）。

**P3 / 已关闭**
- #157373（已关闭）Desktop 0.23.2 集成终端光标水平跳动（Windows）。
- #153928（P3）单条用户消息被投递为多个回合（网关侧重投递；存储侧已正确去重）——材料显示“storage correctly deduped”，指向网关层问题。

**另有**：PR #157493 修复 Windows 上客户端在 accept 前重置导致监听端口永久关闭的问题；PR #155705 修复桌面端在大仓库上 `repoStatus` 堆积 20+ 并发 `git diff` 子进程导致卡死/崩溃。两者均为稳定性改进，仍待合并。

## 6. 功能请求与路线图信号

- **#91505**（P3，needs-decision）— 最小权限子智能体升级（作用域审批令牌）+ 确定性 agent-loop 测试框架。属架构级提案，短期难落地。
- **#117715**（P2，needs-decision）— 桌面端自定义链接处理器与内联本地文件导航。
- **#92577**（P3）— headless 网关平台会话中审批提示无监听者，需 `approvals.cron_mode` 式受配置治理的模式。与 PR #29373（Mattermost 交互审批按钮）、#124063（Mattermost 原生 exec-approval 按钮 + ntfy 升级）、PR #150330（不重启网关激活已配对 WhatsApp）形成同一方向的多个 PR，**审批 UX 在非终端平台的补全最可能进入下一版本**。
- **#17215**（P2）— 通过 agent 调用 shutdown/reboot，并希望为现行无条件黑名单留一个可回滚开关。
- 其他方向：PR #149772 网关原生 `/refresh` 斜杠命令；PR #97523 在 `session_search` 输出中暴露 `display_metadata`；PR #154545 在 tag 构建中产出 Linux AppImage 且不阻塞发布（CI/分发改进）。
- 已关闭的功能请求 #147220、#154712 显示，prompt-cache 与上下文上限相关的可配置化诉求正在被逐步吸收。

## 7. 用户反馈摘要

- **静默失败最伤人**：用户反复描述“看到的只有 No reply”“无报错”“永久阻塞”（#147839、#119070），诊断成本高。
- **本地/小内存用户受压**：#136167 指出 token 膨胀严重、对小 VRAM 本地模型不友好；#154712 抱怨被强制 64k 上下文而其机器与模型均不支持——两者共同指向“默认值对本地模型过于激进”。
- **桌面端作为日常界面**：用户将其用于订阅笔记/源码导航（#117715）、多机远程网关（#149979）、大仓库工作区（PR #155705），对终端与文件交互的稳定性敏感。
- **多平台机器人群**：WhatsApp 群（#29023）与 Mattermost（#29373/#124063）用户希望获得与 Telegram/Discord 同等的原生审批按钮体验。
- **插件生态耦合风险**：#157438 显示内部模块（`agent/message_content.py`）移除后，官方 catalog 插件直接导入失败，且启动日志掩盖原因——用户期望明确的兼容性提示。

## 8. 待处理积压

- **#29023**（创建 2026-05-20，P2，6 评论）— WhatsApp reply-to-bot 检测失败，已近 6 个月，带 `needs-decision` 与 sweeper 风险标记。https://github.com/NousResearch/hermes-agent/issues/29023
- **#17215**（创建 2026-04-29，P2，4 评论）— shutdown/reboot 能力被无条件黑名单化且无回滚开关。https://github.com/NousResearch/hermes-agent/issues/17215
- **#92577**（创建 2026-08-22，P3，needs-decision）— headless 网关审批无监听者。https://github.com/NousResearch/hermes-agent/issues/92577
- **#91505**（创建 2026-08-21，P3，needs-decision）— 子智能体最小权限升级方案。https://github.com/NousResearch/hermes-agent/issues/91505
- **#119070**（创建 2026-09-22，P2，28 评论，needs-decision）— 讨论最热但长期未决，建议优先给出状态机复位方案。
- **PR #29373 / #124063**（均创建 2026-05-20 / 2026-09-26，Mattermost 审批按钮，两份重叠实现，均带 `needs-decision` 与 `risk-security-boundary`）— 建议合并方向、择一推进，避免长期双线维护。
- **PR #97523**（创建 2026-08-29，P2，sweeper:risk-session-state）— `session_search` 暴露 `display_metadata`，已挂起近三个月。

**给维护者的提醒**：当日待合并 PR 达 46 条，且多个高评论 Issue 长期停留在 `needs-decision`。建议对 `needs-decision` 队列做一次集中裁决，并在 canary 发布说明中补齐变更日志，以便社区判断升级风险（本次材料中的 Release 正文缺少该部分）。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报（2026-11-18）

## 1. 今日速览
今日 PicoClaw 无新版本发布，24 小时内共 5 条 Issue/PR 状态变更（1 Issue 关闭、4 PR 关闭），无新开 Issue 或新增待合并 PR。活跃度偏低，属于清理积压为主的维护日：关闭项多为 2026 年 3 月创建的旧 PR 与一条沉寂的 stale 安全 Issue。值得注意的信号是没有新的合并动作进入主线之外的功能开发，说明当前处于收尾/整理阶段。

## 2. 版本发布
无新版本发布（Releases 为空），本节省略。

## 3. 项目进展
今日关闭的 4 个 PR 均标注为 CLOSED，无明确合并说明，进展评估以关闭类型为准：

- **PR #1546**（作者 xuwei-xy）— 汇总合并修复 PR #1480 #1479 #1478 #1473 #1467。
  https://github.com/sipeed/picoclaw/pull/1546
- **PR #1558**（作者 xuwei-xy）— 汇总合并修复 PR #1344 #1342 #1341 #1331。
  https://github.com/sipeed/picoclaw/pull/1558
- **PR #1555**（作者 xuwei-xy）— 汇总合并修复 PR #1390 #1389 #1383 #1381。
  https://github.com/sipeed/picoclaw/pull/1555
- **PR #1450**（作者 treepudding）— `fix: strip thinking tags from OpenAI-compatible provider responses`，移除助手内容中泄漏的 thinking/reasoning 标签，防止内部推理文本暴露给终端用户，Fixes #1235。
  https://github.com/sipeed/picoclaw/pull/1450

其中 #1450 有明确的问题修复目标（推理内容泄漏），对面向终端用户的安全性与输出质量有直接价值；其余三个为批量汇总型 PR。需说明：数据中未提供这些 PR 是否实际合入主线的信息，无法确认代码已进入主干。

## 4. 社区热点
今日唯一有评论记录的是 Issue #3456（评论数 2），其余 PR 评论数未提供。

- **Issue #3456** [CLOSED] [stale] — Security: 重载时审批钩子（approval hook）重新初始化失败，导致网关在工具未受门禁的情况下继续提供服务。作者 EddieMurphy89，创建 2026-11-04，更新 2026-11-18。
  https://github.com/sipeed/picoclaw/issues/3456
  诉求分析：这是典型的“失败开放”（fail-open）安全语义问题——`/reload` 时若审批钩子初始化失败，网关未进入拒绝/降级状态，而是继续以无门禁方式执行工具调用。该 Issue 被标记 stale 后关闭，但摘要未显示是否已修复，存在被“静默关闭”的风险，建议维护者确认关闭原因（已修复 / 无法复现 / 过期）。

## 5. Bug 与稳定性
按严重程度排列：

1. **高 — Issue #3456（安全，fail-open）**：审批钩子重载失败后工具调用不受审批门禁约束，可能导致未经批准的工具执行。状态：CLOSED（stale），**未见到对应的 fix PR**。
   https://github.com/sipeed/picoclaw/issues/3456
2. **中 — PR #1450（信息泄漏）**：OpenAI 兼容 provider 响应中残留 thinking/reasoning 标签，内部推理文本可能暴露给用户。状态：CLOSED，PR 本身即为修复（Fixes #1235）。
   https://github.com/sipeed/picoclaw/pull/1450

今日无新报告的崩溃或回归问题记录。

## 6. 功能请求与路线图信号
今日数据中无新增功能请求 Issue。可推断的方向性信号：
- 审批/安全门禁的可靠性（#3456）指向对 reload 路径上 fail-closed 语义的需求，若能形成修复，可能成为下一版本的安全补丁项。
- provider 输出清洗（#1450）表明多 provider 兼容层的输出规范化仍是维护重点。
以上均为基于今日条目推断，**数据未提供任何已确认纳入下一版本的计划**。

## 7. 用户反馈摘要
今日可提炼的反馈有限（仅 #3456 有 2 条评论，评论正文未提供）：
- 安全关切：用户对 reload 流程中审批机制失效的场景表示关注，反映出在生产/网关场景下对“工具调用必须始终受控”的强需求。
- 输出质量：PR #1450 对应的 #1235 反映用户不希望看到模型内部推理标签污染面向用户的回复。
其余痛点、使用场景与满意度评价在本次数据中无据可依，不作推测。

## 8. 待处理积压
- **Issue #3456 的根因确认**：虽已关闭，但作为安全类 fail-open 问题，若关闭原因仅为 stale 而无修复，应重新评估。建议维护者补充关闭说明或重开跟踪。
  https://github.com/sipeed/picoclaw/issues/3456
- **批次汇总型 PR 的处理方式**：#1546、#1558、#1555 均创建于 2026-03-14、历时约 8 个月才关闭，且以“merge 多个 PR”的形式打包处理，反映 PR 积压与评审带宽问题。建议梳理被汇总引用的子 PR（#1480/#1479/#1478/#1473/#1467、#1344/#1342/#1341/#1331、#1390/#1389/#1383/#1381）当前状态，避免修复内容在打包关闭中丢失。
  https://github.com/sipeed/picoclaw/pull/1546 ｜ https://github.com/sipeed/picoclaw/pull/1558 ｜ https://github.com/sipeed/picoclaw/pull/1555

**健康度小结**：今日无新增 Issue/PR、无发布，负载轻；但关闭项以陈旧积压为主，且唯一安全 Issue 以 stale 关闭而无对应修复 PR，属于需要维护者复核的风险点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-11-18

## 1. 今日速览

今日项目活跃度**高**：过去 24 小时 Issues 更新 10 条（7 条新开/活跃、3 条关闭），PR 更新 22 条（12 条待合并、10 条已合并/关闭），无正式版本发布，但出现了 `v2026.11.0-rc.2` 发布 PR（#4466，已关闭）。讨论高度集中于**配置提供方（Codex / Cursor / OneCLI）在安装与设置阶段的体验问题**，报告者以同一位用户（glifocat）为主，说明 `v2026.11.0-rc.1` 的发布吸引了集中的回归测试反馈。维护方响应迅速，多条 Bug 当日即有关联 fix PR 或已关闭。

## 2. 版本发布

无正式版本发布。

值得一提：PR #4466（`chore(release): v2026.11.0-rc.2`，已关闭）为 2026.11.0 的第二个候选版本，基于 `main@634fa9ead`，自 `v2026.11.0-rc.1` 以来包含 9 个 PR。
- 链接：https://github.com/nanocoai/nanoclaw/pull/4466

> 注：以**正式 Release** 统计为准，rc 版本未列入"新版本发布"，其内容进展见下节。

## 3. 项目进展

今日合并/关闭的 PR 覆盖了安装体验、安全加固与容器基础镜像等多个方向：

| PR | 内容 | 影响 |
|---|---|---|
| #4465 (CLOSED) | `fix(add-codex)`：将 Codex `AGENTS.md` 上限从 32 KiB 提升至 64 KiB | 修复默认 Slack + Codex 安装下 39,393 字节的 AGENTS.md 被截断、导致 `ncl` 与 canvas 指令丢失（对应 Issue #4464） |
| #4461 (CLOSED) | `fix(update)`：主机无 Bun 时用固定版本 Bun 对 agent-runner 做类型检查 | 修复 `/update-nanoclaw` 在无 Bun 主机上跳过类型检查（对应 Issue #4454） |
| #4164 (CLOSED) | `fix(codex)`：使 OneCLI 背后的 Codex 内置图像生成可用 | 修复 OneCLI 的 `auth.json` 误报免费套餐导致图像生成失败（对应 Issue #4451） |
| #4377 (CLOSED) | `fix(mounts)`：拒绝挂载驱动自身保护的路径 | 提升挂载安全（关联 Issue #4458 的挂载安全问题） |
| #4300 (CLOSED) | `fix(agent-runner)`：不阻塞/跟随 Claude `settings.json` 上的链接 | 加固：防止 FIFO/符号链接/目录导致容器启动卡死 |
| #4303 (CLOSED) | `fix(scripts)`：让 CLI 入口在路径含空格或符号链接时正常运行 | 修复 10 个 CLI 脚本的入口判定问题 |

**推进幅度评估**：本批合并主要围绕 `v2026.11.0-rc.2` 的稳定性收敛，尤其是多提供方（Codex/OneCLI）安装链路的回归修复，项目在"发布就绪"方向上有实质推进；容器基础镜像升级（#3996，Node 24 / trixie）仍待合并。

## 4. 社区热点

> 说明：所给数据中 PR 评论数均为 `undefined`，👍 均为 0，**无法据实判定"评论最多/反应最多"**。以下按讨论价值与影响面列出关注点最高的条目，而非按精确评论数排序。

1. **PR #4164 — Codex 图像生成 (OneCLI)**，2026-10-21 创建，跨近一个月后于 11-18 关闭
   https://github.com/nanocoai/nanoclaw/pull/4164
   诉求：使用 OneCLI 做 ChatGPT 网关的用户希望 Codex 的内置图像生成能力在聊天中端到端可用。

2. **Issue #4464 — Codex 丢失 ncl/canvas 指令**
   https://github.com/nanocoai/nanoclaw/issues/4464
   每次容器启动即报错（已发生 9 次），影响面为默认 Slack 安装的所有 Codex 容器，讨论价值高。

3. **PR #4466 — `v2026.11.0-rc.2` 发布 PR（已关闭）**
   https://github.com/nanocoai/nanoclaw/pull/4466
   反映维护方对 rc 版本的快速迭代节奏。

## 5. Bug 与稳定性

按严重程度排列（是否已有 fix PR 已标注）：

**高 — 功能性中断**
- **#4464 [CLOSED]** Codex agents 在默认 Slack 安装下丢失 `ncl` 与 canvas 指令（AGENTS.md 超 32 KiB 上限）→ **已有 fix #4465（已关闭）**
  https://github.com/nanocoai/nanoclaw/issues/4464
- **#4451 [CLOSED]** OneCLI 背后的 Codex agents 无法生成图像 → **已有 fix #4164（已关闭）**
  https://github.com/nanocoai/nanoclaw/issues/4451
- **#4458 [OPEN]** `/add-rtk` 将主机二进制挂载到 `/usr/local/bin/rtk` 被挂载安全策略拒绝 → 相关加固 #4377 已关闭，但本 Issue 仍为 OPEN
  https://github.com/nanocoai/nanoclaw/issues/4458

**中 — 安装/更新流程缺陷**
- **#4454 [CLOSED]** 无 Bun 主机上 `/update-nanoclaw` 从不类型检查 agent-runner 源码 → **已有 fix #4461（已关闭）**
  https://github.com/nanocoai/nanoclaw/issues/4454
- **#4447 [OPEN]** 选择非 Claude 提供方后，设置流程刷屏 Docker 构建输出 → **已有 fix #4453（OPEN）**
  https://github.com/nanocoai/nanoclaw/issues/4447
- **#4448 [OPEN]** 仅当已安装并登录 Codex 时，Codex 安装才提供 setup debug helper → 未见对应 fix PR
  https://github.com/nanocoai/nanoclaw/issues/4448
- **#4450 [OPEN]** Cursor 安装没有 setup debugger → 未见对应 fix PR
  https://github.com/nanocoai/nanoclaw/issues/4450
- **#4449 [OPEN]** 设置中 Codex 登录时警告 `/tmp` 下的 helper 二进制 → **已有 fix #4455（OPEN）**
  https://github.com/nanocoai/nanoclaw/issues/4449

**低 — 提示与文案**
- **#4452 [OPEN]** Slack agent 欢迎语指向永不出现的建议提示 → **已有 fix #4456（OPEN）**
  https://github.com/nanocoai/nanoclaw/issues/4452

## 6. 功能请求与路线图信号

今日数据以 Bug 为主，明确的新功能请求较少，但以下方向信号明确：

- **建议提示与线程标题落地到 Slack**（#4452 / PR #4456）：onboarding 模块已调用 `setSuggestedPrompts` 与 `setThreadTitle`，但 Slack 桥接未实现。若 #4456 合并，将补齐这一"已设计未接通"的功能，具有纳入 rc.2 的合理性。
- **提供方无关的 setup 调试助手**（#4448、#4450、#4449）：反映路线图上应将 setup debug 助手从"Codex 已登录才可用"泛化为按提供方自适应。目前尚无对应 PR。
- **OneCLI 就绪检查失败应使 setup 失败退出**（PR #4434，OPEN）：体现"失败要显式失败"的产品取向，可能影响设置脚本的错误处理约定。
- **容器基础镜像 Node 24 / Debian trixie**（PR #3996，OPEN）：长期演进方向，非本轮 rc 阻塞项。

**下一版本（rc.2 及之后）较可能纳入**：#4456、#4453、#4455、#4434（均有 OPEN fix PR）；#4448、#4450 暂无 PR，大概率延后。

## 7. 用户反馈摘要

- **核心痛点：多提供方安装链路脆弱。** 用户（glifocat）报告的问题几乎全部集中在 "使用非 Claude 提供方（Codex / Cursor / OneCLI）安装后" 的设置与运行阶段，说明除默认 Claude 路径外的安装体验仍是薄弱环节。
- **使用场景：Linux 主机 + Slack 频道 + Codex 提供方 + OneCLI 网关**，这是本轮反馈最典型的配置组合。
- **版本对照清晰。** 多条 Bug 明确指出在 `v2026.11.0-rc.1` 与 `main@ab9551f01` 上均复现，表明用户在主动追踪候选版本。
- **不满意点：** setup 流程在失败时缺乏针对各提供方的调试抓手（无 Cursor debugger、Codex debugger 依赖预先登录），以及 Docker 构建输出刷屏。这属于"失败后可诊断性"不足的体验问题。
- **满意点：** 数据层面可见维护方响应快（多条 Bug 当日即有关联 fix PR 或关闭），但**所给 Issues 评论中未包含用户对修复结果的直接评价**，故不对满意度作过度推断。

## 8. 待处理积压

> 所给"最新 Issues"列表时间跨度仅 2026-11-17 至 11-18，故按 PR 建立时长与未响应情况识别积压：

- **PR #3996（OPEN，2026-10-02 创建，已近 7 周）** — 容器镜像升级至 `node:24.22.3-trixie-slim`。长期未合并，作为基础镜像变更影响面大，建议维护者明确是阻塞于兼容性验证还是排期。
  https://github.com/nanocoai/nanoclaw/pull/3996
- **PR #4462（OPEN，2026-11-18）** — 修复 provider 在单轮内回答多个排队输入导致回复路由落后的问题。涉及 agent-runner 核心，建议优先评审。
  https://github.com/nanocoai/nanoclaw/pull/4462
- **Issue #4448 / #4450（OPEN，无 fix PR）** — setup debug 助手缺失问题尚无对应 PR，建议纳入后续迭代，避免"非 Claude 提供方配置失败难诊断"的痛点长期存在。
  https://github.com/nanocoai/nanoclaw/issues/4448 · https://github.com/nanocoai/nanoclaw/issues/4450

---

**项目健康度小结**：活跃度高、响应节奏快，rc 版本处于快速收敛阶段；风险点在于**非 Claude 提供方安装链路的回归集中度**以及**个别长期未合并的基础设施 PR（#3996）**。建议下一轮评审优先处理 #4462、#4456、#4453、#4455，并补齐 #4448/#4450 的 setup 诊断能力。

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

# LobsterAI 项目日报（2026-11-18）

## 1. 今日速览

项目今日活跃度中等偏高：24 小时内 8 条 PR 更新、2 条 Issue 更新，无新版本发布。清理动作明显——7 条 PR 已合并/关闭，其中 3 条为自 2026-10-04 起挂起、带有 `stale` 标记的旧 PR，单日积压清理幅度较大。同时仍有安全相关修复（`localfile://` 路径越权读写、MCP stdio 边界加固）停留在已关闭或未合并状态，需要确认修复是否已真正落地。新开 Issue #3112 为账号封禁申诉，不属于代码问题，但涉及内置模型接口的合规使用风险。

## 2. 版本发布

无新版本发布。（因数据中未提供最新 Releases 信息，故不对此进行额外推断。）

## 3. 项目进展

今日关闭/合并的 PR 主要围绕 Cowork 执行模式配置与产物预览的可靠性：

- **PR #3114** [CLOSED] `fix(cowork): restore saved execution mode and honor explicit sandbox policy` — 修复 `executionMode` 写入 SQLite 后始终被读回 `local` 的问题，并保留原 #3090 作者署名，关联 issue #735。该修复使 `auto` 与 sandbox 策略重新生效，属于行为层面的重要纠正。
  https://github.com/netease-youdao/LobsterAI/pull/3114
- **PR #3090** [CLOSED] `fix(cowork): read stored executionMode instead of forcing local` — 同一问题的原始修复，其存储层改动已被 #3114 cherry-pick 吸收。
  https://github.com/netease-youdao/LobsterAI/pull/3090
- **PR #3113** [CLOSED] `fix(openclaw): compact skill catalogs and honor deliverable paths` — 在 OpenClaw v2026.8.1 中合并技能目录公共路径（保留精确定位、顺序与预算限制），并强化 Cowork 工作区按用户指定文件名/位置保存交付物、校验最终链接。
  https://github.com/netease-youdao/LobsterAI/pull/3113
- **PR #3109** [CLOSED] `fix(artifacts): support CSV encodings and in-app Windows links` — 修复 Windows 下 GBK CSV 预览乱码，以及 `C:/.../products.csv` 链接误调系统打开方式的问题；CSV/TSV 支持自动识别与手动编码切换，预览不写回原文件。
  https://github.com/netease-youdao/LobsterAI/pull/3109

整体来看，项目的推进主要来自稳定性与跨平台体验修复，没有新功能落地；清理 stale PR 有助于降低审阅队列的负担。

## 4. 社区热点

今日讨论量整体偏低（单条评论数最多为 2），热度集中在：

- **Issue #3096** [CLOSED] `localfile:// protocol handler serves any absolute path with no root allowlist`（2 条评论）
  https://github.com/netease-youdao/LobsterAI/issues/3096
  诉求核心是安全隐患：`src/main/artifactLocalFileProtocol.ts` 的路径解析（:69）与响应（:170）未设置允许根目录，协议处理器会把任意绝对路径当作文件返回。该 Issue 已关闭，但数据中未显示对应的修复 PR 编号，建议维护者确认修复提交与验证方式。
- **PR #2590** [OPEN] `fix(security): harden MCP stdio command and external URL boundaries`（更新于今日，创建于 2026-09-01）
  https://github.com/netease-youdao/LobsterAI/pull/2590
  指出 MCP stdio 的 command/args 从表单、JSON 导入、配置同步写入 `openclaw.json` 时缺乏 shell 元字符与命令路径校验，且 renderer 提供的 URL 被直接传给 `shell.openExternal`。这是仍待合并的安全边界加固，值得优先关注。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — 本地文件协议路径越权**：Issue #3096，`localfile://` 无根目录白名单，可读取任意绝对路径。状态：已关闭；数据中未见对应 fix PR 编号，需核实修复落地情况。
2. **高 — MCP 命令注入与外部 URL 边界缺失**：PR #2590，命令/参数未校验 shell 元字符，URL 未校验即调 `shell.openExternal`。状态：仍 OPEN，**尚无合并的 fix**。
3. **中 — Cowork 执行模式被强制降级**：PR #3090 / #3114，保存的 `executionMode` 读回恒为 `local`，导致 `auto`/sandbox 策略失效；恢复读取后还暴露出旧的 auto 相关逻辑问题。状态：已有 fix PR（#3114，已关闭/合并）。
4. **中 — Windows 产物预览问题**：PR #3109，GBK CSV 中文乱码，正文中的 `C:/...` 链接误走系统打开方式。状态：已有 fix PR（已关闭/合并）。
5. **低 — 推断产物卡片出现无效占位路径**：PR #2791，如 `render -o "…/demo.mp4"` 产生不可解析的卡片。状态：fix PR 已关闭/合并。
6. **低 — Cowork 长问题提示与上下文 tooltip 可读性**：PR #2792，长文本挤压选项区域。状态：fix PR 已关闭/合并。

## 6. 功能请求与路线图信号

今日没有明确的功能请求类 Issue，但以下 PR 体现了产品方向的调整：

- **PR #2790** [CLOSED] `feat(renderer): group model choices and improve conversation loading` — 模型目录按家族分组并支持折叠、重名模型展示原始路由、搜索覆盖分组内模型，同时修复会话历史加载卡住。属于可提升大规模模型目录可用性的改动，虽标记 `stale` 后被关闭，但该功能仍有较高用户价值，可能以新 PR 形式回归。
  https://github.com/netease-youdao/LobsterAI/pull/2790
- **PR #3113** 中“按指定文件名与位置保存交付物并校验最终链接”属于对 Agent 交付可靠性的要求，后续可能扩展为通用产物规范。

## 7. 用户反馈摘要

- **账号与使用合规**（Issue #3112，OPEN）：用户 uid 147357 通过手机号登录，2026-11-18 上午调用内置模型接口返回 HTTP 403 `code=40302`，`accountAccess.state=DISABLED`，提示“账号已停止提供服务”。用户自述曾在本机用第三方签到脚本定时调用 Lobster，初衷是为免去多账号切换。这反映出两类问题：一是内置模型接口的自动化调用策略需要更清晰的前置告知；二是封禁申诉流程应提供可自助查询的渠道，避免此类问题进入代码仓库的 Issue 列表。
  https://github.com/netease-youdao/LobsterAI/issues/3112
- **Windows 产物体验**（PR #3109 所述用户反馈）：同一内容的 GBK CSV 乱码、UTF-8 正常；正文中的本地路径链接被系统应用接管而非应用内预览。说明 Windows 用户的编码与链接打开方式是高频痛点。
- **配置持久化信任问题**（PR #3090/#3114、issue #735）：用户以为已选定的执行模式在重启后被静默降级为 `local`，属于“设置不生效”类体验问题，易被误判为功能缺失。

## 8. 待处理积压

- **PR #2590** [OPEN] `fix(security): harden MCP stdio command and external URL boundaries` — 自 2026-09-01 开启，已积压约 2.5 个月，今日仍有更新但未合并。涉及命令注入与外部 URL 边界，建议优先评审。
  https://github.com/netease-youdao/LobsterAI/pull/2590
- **Issue #3096** — 虽已关闭，但缺少可核对的关联 fix PR，建议补充修复提交引用，以便审计与验证。
  https://github.com/netease-youdao/LobsterAI/issues/3096
- **Issue #3112** — 账号申诉类问题，非代码缺陷，建议由客服/支持流程承接，并考虑在仓库增加 Issue 模板或自动分流说明。
  https://github.com/netease-youdao/LobsterAI/issues/3112

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

# CoPaw 项目日报 · 2026-11-18

> 数据窗口：过去 24 小时｜Issues 更新 15 条（新开/活跃 8，关闭 7）｜PR 更新 34 条（待合并 19，合并/关闭 15）｜新版本 1 个
> 注：本次提供的数据中，仓库标识在 Issues/PR 链接与 Release 正文中均显示为 `agentscope-ai/QwenPaw`，下文链接统一按数据原文给出。

## 1. 今日速览

项目今日处于**高活跃、以稳定性和安全加固为主轴**的状态：34 条 PR 更新、15 条 Issue 流转，并发布 v2.3.0.post1 补丁版本。合并/关闭侧集中在安全治理（破坏性命令与凭据守卫、Office COM 自动化拦截）和发布工程（版本号推进至 2.3.1b1）。但新版本也带来明显回归信号：窄屏消息裁剪、startup_diagnostic WARNING 刷屏、默认频道不可用等 3 条当日新开问题，均指向 2.3.0.post1。同时，围绕"插件化瘦身"的路线图讨论（#8808）与多条超大体积重构 PR（MCP、本地模型管理、Whisper 插件化）说明架构演进正在加速。整体健康度：**迭代速度快，但发布质量门禁需关注**。

## 2. 版本发布

**v2.3.0.post1**（Post 类型补丁版，Release Duty 验证 Issue 见 [#8807](https://github.com/agentscope-ai/QwenPaw/issues/8807)，验证截止 2026-11-18 12:25 UTC）

更新内容（据 Release 说明）：
- `feat(agent)`：将第三方 agent 抽取为插件（[PR #8426](https://github.com/agentscope-ai/QwenPaw/pull/8426)）
- `feat(console)`：后续草稿中引用回复选中内容（[PR #8609](https://github.com/agentscope-ai/QwenPaw/pull/8609)）
- `fix(console)`：恢复 Safari 相关修复（说明在所提供的材料中截至"restore Safari"处被截断，**其余内容未提供，无法确认**）

破坏性变更 / 迁移注意：
- 材料未声明破坏性变更。
- 但当日用户反馈显示升级后需注意：**钉钉、飞书频道默认不可用，需手动更新后才可用**（[#8812](https://github.com/agentscope-ai/QwenPaw/issues/8812)）；**窄屏下消息文字与超宽内容被裁剪**（[#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)）。建议升级前评估频道配置与 Console 展示设置。

## 3. 项目进展

今日合并/关闭的重要 PR：

- **[#7757](https://github.com/agentscope-ai/QwenPaw/pull/7757)（已关闭）fix(governance)**：在 `PolicyGuardedTool` 治理路径中启用共享的破坏性命令分类器（命中返回 `SAFETY_CHECKS_DESTRUCTIVE_COMMAND`），并修补系统凭据守卫缺口。→ 安全性实质提升。
- **[#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028)（已关闭）fix(security)**：标记 shell 命令中的内联 Office COM 自动化（PowerPoint/Excel/Word/Outlook.Application），直接回应 #8002 中"关闭沙箱 + auto 模式下误关用户 PowerPoint"的事故。→ 与 #8002 关闭形成闭环。
- **[#8809](https://github.com/agentscope-ai/QwenPaw/pull/8809)（已关闭）chore**：版本号推进至 **2.3.1b1**。→ 下一版本已进入准备阶段。

在途重点（尚未合并，但推进明显）：插件化主线包括 [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469)（MCP 插件化，XXXL）、[#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)（本地模型管理插件化，XXXL）、[#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)（本地 Whisper 转为 SDK 插件，XXXL）。**整体向前迈进约"一个补丁版 + 两个安全修复落地 + 三条插件化主干推进"**，但三条 XXXL PR 均长期未合，是后续节奏的关键变量。

## 4. 社区热点

| 条目 | 类型 | 热度信号 | 链接 |
|---|---|---|---|
| #8071 插件主题扩展点 | Feature | **21 条评论**，跨 10-01 至 11-18 持续讨论 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/8071) |
| #8808 让 QwenPaw 更轻、更易扩展 | enhancement | 👍 1，官方作者发起 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/8808) |
| #8806 上下文出现未发送的 user 消息 | Bug（已关闭） | 3 条评论，当日开当日关 | [链接](https://github.com/agentscope-ai/QwenPaw/issues/8806) |

诉求分析：
- **#8071** 是插件生态的核心缺口——Console 主题已允许用户选 6 套内置配色并自定义强调色等，但插件只有 `window.QwenPaw.chat.theme.set(...)` 一个开关，无法做语义 token 覆盖。21 条评论、近 7 周跨度，说明**插件开发者对"一等公民"扩展能力的需求强烈且持续**，与 #8808 的插件化方向高度共振。
- **#8808** 由核心贡献者提出，明确"逐步把非核心功能做成插件"，是官方路线图信号，值得作为下一版本预判依据。

## 5. Bug 与稳定性

按严重程度排列：

**高**
- **[#8806](https://github.com/agentscope-ai/QwenPaw/issues/8806)（已关闭）**：上下文中出现**从未发送过的 user 消息**并驱动 agent 反复执行工具，2~3 秒一轮循环且内容不重复。涉及 agent 控制回路正确性，属最高优先级；当日已关闭，但材料未给出对应 fix PR 编号。
- **[#8712](https://github.com/agentscope-ai/QwenPaw/issues/8712)（OPEN）**：重复工具调用永不中断——doom-loop 门控每次回复最多记录一次调用。**已有 fix PR [#8713](https://github.com/agentscope-ai/QwenPaw/pull/8713)**，记录回复期每次工具调用以让门控可触发。
- **[#8802](https://github.com/agentscope-ai/QwenPaw/issues/8802)（OPEN）**：同一轮连续调用 MCP 后 `MODEL_CONTEXT_LENGTH_EXCEEDED`，任务中断（基线 2.3.0b3，确切构建版本未确认）。**无 fix PR**。
- **[#8805](https://github.com/agentscope-ai/QwenPaw/issues/8805)（OPEN）[Performance]**：基础镜像 `deploy/entrypoint.sh` 缺少 #8654 已加入 Creator 入口的 `MALLOC_ARENA_MAX` 上限，v2.3.0 Docker 部署下主应用在 29 个 glibc arena 中占用 1.78 GB。**无 fix PR**。

**中**
- **[#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)（OPEN，当日新开）**：升级 v2.3.0.post1 后，窄屏下整条消息文字被裁剪，表格/代码块超宽内容同样裁切且无法横向滚动（375px 竖屏复现）。**疑似新版本回归**，无 fix PR。
- **[#8812](https://github.com/agentscope-ai/QwenPaw/issues/8812)（OPEN，当日新开）**：`qwenpaw update` 后 startup_diagnostic 以 WARNING 刷屏，钉钉/飞书频道默认不可用。**用户体验回归**，无 fix PR。
- **[#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709)（已关闭）**：2.3.0 微信频道无法启动（`ACCOUNT_IN_USE`），成功发送被报为 `PLATFORM_RESULT_UNKNOWN`。

**中低（均已关闭）**
- **[#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)**：Windows auto 模式 + 关闭沙箱时内联 Office COM `Quit()` 会关闭用户 PowerPoint（安全类，由 #8028 修复）。
- **[#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718)**：Hub 模型网关对 Anthropic/MiniMax 预设瞬间失败，`provider_headers()` 调用缺失的 `request_headers()`。
- **[#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736)**：子 agent 完成时误触发"回复完成"桌面通知。

**低（已关闭）**
- **[#7197](https://github.com/agentscope-ai/QwenPaw/issues/7197)**：自定义频道插件在 MCP 工具授权规则中选不到。
- **[#8798](https://github.com/agentscope-ai/QwenPaw/issues/8798)**：`kilo-auto/free` 模型 `MODEL_QUOTA_EXCEEDED`（第三方模型额度问题，非项目缺陷）。

## 6. 功能请求与路线图信号

- **插件主题语义 token 覆盖层**（[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)）：21 条评论、需求清晰。当前无对应 PR，但**契合 #8808 官方插件化方向**，下一版本纳入的可能性取决于 Console 主题层是否被纳入插件化批次——概率中等偏上。
- **官方插件化瘦身**（[#8808](https://github.com/agentscope-ai/QwenPaw/issues/8808)）：明确"逐步把非核心功能做成插件"。**三条在途 XXXL PR 与其一一对应**，是下一版本最可能的落地方向：
  - MCP 插件化 [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469)
  - 本地模型管理插件化 [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)
  - 本地 Whisper 插件化 [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)
- **安全治理细化**（[#8810](https://github.com/agentscope-ai/QwenPaw/pull/8810)，当日新开）：AUTO/SMART 模式下 shell 发邮件、HTTP 写请求、上传本地文件均需审批，补齐 Tool Guard 与治理规则盲区。**体量 S，最有可能快速并入 2.3.1**。
- **启动性能优化**（[#8804](https://github.com/agentscope-ai/QwenPaw/pull/8804)，当日新开）：延迟加载 Anthropic 与 Google GenAI SDK，避免构建 provider 目录时全量导入。**低成本、可直接受益，入版概率高**。

## 7. 用户反馈摘要

**真实痛点**
- **Agent 行为可控性**：#8806 与 #8712 共同指向"agent 不该自己转起来"——前者是幽灵 user 消息驱动循环执行，后者是重复调用检测失效。用户对**自主循环缺乏信任**，是需要优先解决的核心体验问题。
- **上下文预算管理**：#8802 显示单轮 20 次 MCP 调用后即触顶上下文，长链路 agent 工作流的容量边界不清晰。
- **大模型额度与第三方 provider 稳定性**：#8798（第三方免费模型配额）、#8718（Hub 网关 preset 直接失败）反映多 provider 场景下**报错可读性差、故障定位难**。

**使用场景**
- Windows 桌面端 + Office 自动化（#8002）、Docker 部署（#8709、#8805）、手机竖屏 375px（#8811）、自定义频道插件（#7197）、钉钉/飞书频道（#8812）——**部署形态与企业 IM 集成是主要落地场景**。

**满意度信号**
- 正面：v2.3.0 起"更轻、更易扩展"方向获社区认可（#8808 获 👍，核心开发者亲自推动）。
- 不满：升级后**连续出现 UI 裁剪、日志刷屏、频道失效**三类回归，且均为当日新开、尚无 fix PR——"补丁版引入新问题"可能损害用户对发布质量的信心。

## 8. 待处理积压

以下条目创建时间较早、仍有更新但长期未落地，建议维护者排期：

- **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)**（Feature，2026-10-01 创建，21 条评论，OPEN）：**积压近 7 周**，社区热度最高却无 PR 承接。建议明确是否纳入插件化批次并给出答复。
- **[#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469)**（XXXL，2026-10-28 创建，OPEN）：MCP 插件化主干 PR，三周未合，是 #8808 路线图的关键路径。
- **[#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)**（XXXL，2026-10-29 创建，OPEN）与 **[#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431)**（XXXL，2026-10-26 创建，`Under Review`）：同属插件化主干，建议拆分或明确评审人以免长期悬置。
- **[#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133)**（`Under Review`，2026-10-08 创建）：修复中文标点处 Markdown 强调边界解析（`**中文。**后面`）。**CJK 用户高频影响、体量 L 但收益明确**，评审已超 5 周。
- **[#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268)**（2026-10-16 创建，OPEN）：TaskTracker 运行完成回调无界、永不清理导致任务卡在 running；属稳定性问题，建议随 2.3.1 修复窗口一并处理。

**维护者行动建议**：优先为 #8811 / #8812 两条当日回归给出 fix 或明确回复；为 #8712 / #8802 / #8805 分配 owner；对 #8071 给出路线图层面的答复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-18

## 1. 今日速览

今日仓库处于高活跃、但**合并吞吐严重受限**的状态：过去 24 小时 50 条 Issue 更新（新开/活跃 40、关闭 10）、50 条 PR 更新，但仅 2 条被合并/关闭，48 条仍在待合并队列中，且无新版本发布。问题集中在多个 S1 级阻塞项：工具上下文折叠导致 Claude Opus 5.5 会话报 400（#12401）、CI 安全任务在每次构建中失败并连带 `CI Required Gate` 失败（#12320），后者直接解释了今日 PR 合并停滞。同时，一批安全类 Issue 在今日集中关闭（#9655、#12146、#12144、#12053、#12122、#12169、#12280、#9736），说明安全与权限线的清理取得实质进展。整体健康度评估：**代码质量与安全修复在推进，但 CI 门禁与 provider 兼容性问题构成当前主要风险，版本节奏被压制**。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 数量有限（2 条），但方向明确：

- **#12552 [已关闭]** `fix(deps): patch SMTP advisories with a bounded base64 duplicate` — 将 lettre 升级至 0.11.24、email-encoding 升级至 0.4.3，以应对 RUSTSEC-2026-0558 至 RUSTSEC-2026-0565 的 SMTP 安全公告，并将 base64 =0.22.1 注册为有界重复依赖。属于依赖安全层面的直接收敛。
  链接：zeroclaw-labs/zeroclaw PR #12552
- **#12503 [已关闭]** `fix(runtime): autosave each Agent user message under its own key` — 修复开启 `auto_save` 时所有用户消息写入固定键 `"user_msg"` 导致相互覆盖的问题。注意：#12508 与 #12506 仍在 OPEN，说明该修复存在并行实现，维护者需明确合并口径。
  链接：zeroclaw-labs/zeroclaw PR #12503

Issue 侧今日关闭的 10 条中，多项为安全/权限类问题（MCP SSE 端点重定向、文件上传权限越级、/api/docs 未固定第三方脚本、Windows 安装器跳过 SHA256 校验、SOP 取消授权中的 forwarded loopback 判定等），表明安全审查积压正在被系统性清理，这是项目健康度的正面信号。

## 4. 社区热点

- **#12401 [OPEN] [release:v0.9.1]** 工具上下文折叠（`keep_tool_context_turns`）导致 Claude Opus 5.5 在若干轮工具调用后因 thinking-signature 报 400，S1 级工作流阻塞，6 条评论居首。背后诉求：v0.9.0 引入的上下文折叠策略与 Anthropic thinking 签名机制不兼容，用户需要的是“省 token”不能以会话永久中断为代价。
  链接：zeroclaw-labs/zeroclaw Issue #12401
- **#9770 [OPEN]** `cron update` 静默丢弃声明式任务的六列变更（command、name、expression/schedule、session_target、allowed_tools、uses_memory），自 2026-08-05 持续至今，3 条评论。诉求：配置工具必须“报错或生效”，不能沉默吞掉用户改动。
  链接：zeroclaw-labs/zeroclaw Issue #9770
- **#9655 [CLOSED]** Telegram 审批卡片缺少位置标识，同一消息产生的连续卡片在点击前无法区分，3 条评论，今日关闭。反映多卡片审批交互的真实运维痛点。
  链接：zeroclaw-labs/zeroclaw Issue #9655
- **PR #12440 [OPEN]** `feat(plugins): add host-mediated agent wake dispatch (dispatch.wake)` — 引入 `wit/v0/dispatch.wit` 的 `wake(target-agent, prompt)` 接口，属 XL 高风险变更，是插件体系向 agent 间调度延伸的关键一步。
  链接：zeroclaw-labs/zeroclaw PR #12440
- **PR #12449 [OPEN]** 为远程 MCP 服务器提供通用 OAuth 2.1 授权码 + PKCE 登录（`oauth = true`），XL 规模，反映社区对远程 MCP 生产化认证的强需求。
  链接：zeroclaw-labs/zeroclaw PR #12449

## 5. Bug 与稳定性

**S1 — 工作流阻塞**
- **#12401** 工具上下文折叠破坏 Claude Opus 5.5 会话（thinking-signature 400）。**已有相关修复 PR #12506**（在预算投影与最终摘要中计入并发送折叠视图），但仍 OPEN。
  链接：Issue #12401 / PR #12506
- **#12320** 每次 CI 运行 `Security` 任务因 RUSTSEC-2026-0459（libsqlite3-sys 0.38.2，内置 SQLite 3.53.2）失败，连带 `CI Required Gate` 失败，**合并队列无法落地任何 PR**。无对应 fix PR，为今日最高优先级风险。
  链接：zeroclaw-labs/zeroclaw Issue #12320

**S2 — 行为降级**
- **#12504** Anthropic provider 回放无签名 thinking block，每次重试返回 `signature: Field required`。**已有 fix PR #12509**（重放时剔除空签名 thinking 行）。
  链接：Issue #12504 / PR #12509
- **#11696** 每轮从磁盘重建 system prompt，人格文件一改即击穿所有活跃会话的 prompt 缓存（成本问题）。无 fix PR。
  链接：zeroclaw-labs/zeroclaw Issue #11696
- **#11823** shell 扫描器（`split_unquoted_segments`，`crates/zeroclaw-config/src/policy.rs`）完全跳过 heredoc 体，导致未加引号分隔符 heredoc 中的命令替换未被检查。无 fix PR。
  链接：zeroclaw-labs/zeroclaw Issue #11823
- **#9896** 当生效后端为 sqlite 时，启动横幅与 `zeroclaw status` 仍显示 `Memory: none`，状态展示误导。无 fix PR。
  链接：zeroclaw-labs/zeroclaw Issue #9896

**已关闭（今日）**：#9655、#9736（RPC prompt 路径从不写入持久化 SessionState）、#12169、#12122、#12280、#12146、#12144、#12053。

## 6. 功能请求与路线图信号

- **多插件仓库支持**（#12109）：希望 `ZEROCLAW_PLUGIN_REGISTRY_URL` 支持逗号分隔的多个注册源。与 PR #12440（插件 wake dispatch）同属插件生态扩展线，具备纳入下一版本的潜力。
  链接：Issue #12109
- **HTTP Retry-After 支持**（#11768）：对 provider 429 遵循响应头退避，是 #10779 拆分出的剩余部分（配额分类切片在 #11767）。属于 provider 可靠性完善，落地成本较低。
  链接：Issue #11768
- **Docker 编码 CLI 工作区根 + 相对 cwd 契约**（#9914）：从 #9607 review 拆出的架构性约定，标记 risk:high，短期内更可能是设计推进而非快速合并。
  链接：Issue #9914
- **SOP run 取消 RPC `sops/cancel`**（#9685）：当前**明确 deferred**，需等 #9476 合并后在追踪器上重新激活，不应提前认领。
  链接：Issue #9685
- 结合 PR 判断：远程 MCP OAuth（#12449）已有完整实现，若能通过 CI 门禁，是最可能进入下一版本的能力项。

## 7. 用户反馈摘要

- **上下文折叠的双重代价**：#12401 用户指出 v0.9.0 后会话“一旦旧工具轮次离开保留窗口就永久失败”，而 #11696 用户则指出人格文件微小改动会让全部在线会话的 prompt 缓存失效——**降本机制本身正在制造可靠性与成本的双重损耗**。
- **静默失败最伤人**：#9770（cron update 吞掉六列改动）与 #9896（Memory 状态显示与实际后端不符）都属“不报错但结果不对”，用户需要的是可观测、可诊断的行为。
- **交互细节影响运维**：#9655（审批卡片无位置）与 PR #11660（输入框在整轮对话中被 disabled 导致失焦、每条消息需重新点击）说明 Web/渠道端的日常操作摩擦是高频反馈来源。
- **国际化与多代理场景**：#12144 反映兄弟工作区被授予 `Write` 却能读文件、上传其内容，用户对多代理权限模型的“最小权限”预期严格。
- **平台一致性**：#12122 指出 Windows 预构建安装路径跳过 SHA256 校验，与 install.sh 和 `zeroclaw update` 不一致，用户关注跨平台安全基线对等。

## 8. 待处理积压

- **#9770**（创建于 2026-08-05，已 3 个多月）：cron update 静默丢弃声明式任务六列变更，带 priority:p1 与 risk:high，仍未修复。
  链接：zeroclaw-labs/zeroclaw Issue #9770
- **#9736**（创建于 2026-08-04）今日已关闭，但同类长期项仍需关注：#9685 处于 deferred 状态，依赖 #9476 先行合并。
  链接：zeroclaw-labs/zeroclaw Issue #9685
- **PR #10391**（创建于 2026-08-26，近 3 个月未合）：`fix(delegate): keep a bounded delegate's workspace, tool ceiling and command policy bound beyond the turn`，XL 规模、risk:high，涉及 delegate 工具边界等关键安全语义，持续在 rebase master，建议优先安排 review。
  链接：zeroclaw-labs/zeroclaw PR #10391
- **PR #10391 之外**，PR #11857（sha2 0.10.9→0.11.0，dependabot，自 2026-10-19）与 PR #12277（SSE `[DONE]` 哨兵在 EOF 无换行时无法结束流，自 2026-11-06）均长期挂起，后者为 size:XS 的低风险修复但影响兼容 provider 的流式收尾。
  链接：PR #11857 / PR #12277
- **#12320** 虽非长期项，但它是今日所有 PR 积压（48 条待合并）的直接原因，应视为**最高优先级的积压解锁项**。
  链接：zeroclaw-labs/zeroclaw Issue #12320

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*