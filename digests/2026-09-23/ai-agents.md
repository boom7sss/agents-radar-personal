# OpenClaw 生态日报 2026-09-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-23 12:11 UTC

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

# OpenClaw 项目动态日报 — 2026-09-23

## 1. 今日速览

今日 OpenClaw 仓库维持极高活跃度：过去 24 小时 Issues 更新 500 条（新开/活跃 461、关闭 39），PR 更新 500 条（待合并 393、已合并/关闭 107），无新版本发布。讨论重心集中在 2026.9.2–9.5 版本引入的稳定性回归上，涵盖 SQLite WAL 无限增长导致网关启动失败、MCP 初始化超时崩溃、消息丢失与投递异常等问题。多条 P1/P0 问题已具备可复现证据并进入修理队列，同时有多条结构性修复 PR 提交待评审，整体呈现"高活跃、修复提速但积压仍重"的状态。文档与媒体提供商重构类 PR 显著增多，显示项目在稳定性之外同步推进内部整洁度与扩展性。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日已合并/关闭 107 条 PR，其中值得关注的包括：

- **#156357 [CLOSED] `perf(secrets): reuse upstream TLS trust and connections`**（Telegram 通道）— 解决受保护 HTTPS 转发每次请求重新解析 CA 包、新建 TLS 连接的性能浪费，托管命令现在复用上游连接与已解析 TLS 信任链。
  https://github.com/openclaw/openclaw/pull/156357

- **#156316 [CLOSED] `docs(skills): prevent junk tests and add subsystem test-pruning campaigns`** — 针对 agent 反复添加"复述实现"的冗余测试，建立可重复的子系统测试清理工作流。
  https://github.com/openclaw/openclaw/pull/156316

- **Issue #156009 [CLOSED]** — 2026.9.5 上插件构建收尾导致 `ERR_MODULE_NOT_FOUND` 并反复重暂存、产生约 44 GB 临时文件的事故已关闭。
  https://github.com/openclaw/openclaw/issues/156009

- **Issue #141747 [CLOSED]** — 关于运行时脚手架（`<system-reminder>`）每轮注入约 686 tokens 且无法关闭的问题已关闭。
  https://github.com/openclaw/openclaw/issues/141747

此外，多条大型修复 PR 已进入"等待维护者查看"状态，包括子代理并发隔离（#156381）、1Password 授权不阻塞网关（#156000）、飞书 markdown 表格模式（#147886）、网关超大帧拒绝（#123122）、Doctor 演练前检查插件迁移数据（#156326）。这些若合入，将直接改善多会话隔离、消息投递正确性与升级安全性。

---

## 4. 社区热点

今日评论最活跃的议题集中在"崩溃-循环"与"消息丢失"两类：

- **#143524（60 评论，P0）** Agent SQLite WAL 在数天内增长至 1.4–2.8 GB 且从不 checkpoint，导致网关启动被阻塞（Windows，2026.9.2/9.3）。作者实测达到 2865 MB。这是今日讨论量最高、影响面最广的问题，直指 agent 数据库长期运行健康度。
  https://github.com/openclaw/openclaw/issues/143524

- **#144911（29 评论，P1）** stdio MCP server 初始化超过 30s 超时后触发子进程清理路径的未处理拒绝（"service child cleanup identity lost"），使整个 Gateway 进程崩溃。已具备明确复现路径与修复形态。
  https://github.com/openclaw/openclaw/issues/144911

- **#142585（18 评论，P0）** 从 2026.7.1-2 升级至 2026.9.3 时，Doctor 拒绝有效的旧版 workspace 与 attestation 导入，构成迁移阻断型回归。
  https://github.com/openclaw/openclaw/issues/142585

- **#139847（18 评论，P1）** 回复运行进行中收到的消息被丢弃（"Reply operation has no active tool authority snapshot"），2026.9.2 回归。
  https://github.com/openclaw/openclaw/issues/139847

- **#68596（16 评论，8 👍）** 唯一的显著点赞型需求：为长思考模型（kimi-k2.5、DeepSeek-R1）提供可配置的流式看门狗超时阈值，避免 30s 无更新即重置状态。
  https://github.com/openclaw/openclaw/issues/68596

**诉求分析**：社区焦点正从单点功能转向"长时运行的可靠性"——WAL 膨胀、子进程泄漏（#97616）、zombie 累积、长会话中写/执行工具参数静默丢失（#53408）均指向同一主题：OpenClaw 在持续高负载下的资源与状态管理仍需加固。

---

## 5. Bug 与稳定性

按严重程度排列：

**P0 / 崩溃-循环类**
- **#143524** SQLite WAL 无限增长阻塞网关启动（Windows，2026.9.2/9.3）— 尚无 fix PR，标记 `needs-maintainer-review`。
  https://github.com/openclaw/openclaw/issues/143524
- **#142585** Doctor 拒绝合法旧版 workspace/attestation 导入（2026.9.3 回归）— 标记 `needs-info`。
  https://github.com/openclaw/openclaw/issues/142585

**P1 / 消息丢失与崩溃类**
- **#144911** MCP 初始化超时导致 Gateway 崩溃 — 标记 `fix-shape-clear`、`queueable-fix`、`source-repro`，修复条件已齐备。
  https://github.com/openclaw/openclaw/issues/144911
- **#139847** 活跃回复期间到达的消息被丢弃（2026.9.2 回归）— 已有 linked PR 开启。
  https://github.com/openclaw/openclaw/issues/139847
- **#131150** 网关重启后全部 Slack 账号 DM 静默丢失（多账号 socket 模式，2026.8.1）。
  https://github.com/openclaw/openclaw/issues/131150
- **#97616** hook/tool 子进程未回收导致 zombie 累积与运行时退化。
  https://github.com/openclaw/openclaw/issues/97616
- **#128067** beta.7 现场报告：6 类可靠性缺陷（持久化、投递、重启恢复）。
  https://github.com/openclaw/openclaw/issues/128067

**P2 / 行为与体验类**
- **#155728** 插件产物捕获对大型二进制资产双缓冲（Codex 约 544 MiB 分配突发）— 标记 `fix-shape-clear`、`queueable-fix`。
  https://github.com/openclaw/openclaw/issues/155728
- **#143980** Docker 沙箱 agent 上 `taskSuggestions.accept` 因 `cwd` 不可用失败。
  https://github.com/openclaw/openclaw/issues/143980
- **#151962** 幽灵用户消息：运行时内部字符串被当作真实用户提示提交且未落库（WeChat 桥接）。
  https://github.com/openclaw/openclaw/issues/151962
- **#143278** Heartbeat 内部输出泄漏到 Telegram 用户聊天（2026.9.3）。
  https://github.com/openclaw/openclaw/issues/143278
- **#127239** deepseek-v4-flash 上下文窗口静默回退到硬编码 200k，而非目录中的 1M。
  https://github.com/openclaw/openclaw/issues/127239

**已有 fix PR 支撑的**：#139847、#142037、#140455、#120735 等均带 `linked-pr-open` 标记，说明修复通道已打开但尚未合入。

---

## 6. 功能请求与路线图信号

今日活跃的功能请求中，以下几项结合已有 PR 判断较可能进入后续版本：

- **#68596（8 👍）流式看门狗超时可配置**：唯一高赞需求，有明确用户场景（长思考模型），且实现面小，具备进入下一版本的条件。
  https://github.com/openclaw/openclaw/issues/68596
- **#6757 代理自触发上下文压缩（self-compact tool）**：与 #137613（CLI 后端禁用预压缩内存刷新）议题相互关联，反映社区对上下文生命周期主动控制的强烈需求。
  https://github.com/openclaw/openclaw/issues/6757
  https://github.com/openclaw/openclaw/issues/137613
- **#6599 `/models test-fallback` 命令**：用于验证模型回退链，与今日 PR #152489（插件 LLM 补全停留在被限流的首个 auth profile）属同一痛点域——回退与限流行为需要可见性。
  https://github.com/openclaw/openclaw/issues/6599
  https://github.com/openclaw/openclaw/pull/152489
- **#63930 支持 Anthropic advisor 工具（beta 服务端工具）**：属向前兼容型集成请求，短期内更可能被标记为产品决策项而非立即落地。
  https://github.com/openclaw/openclaw/issues/63930
- **#6625 子代理优雅超时（超时前预警）**：与 #156381（按会话隔离子代理并发）方向一致，后者已在评审中，前者可作为下一步演进。
  https://github.com/openclaw/openclaw/issues/6625
  https://github.com/openclaw/openclaw/pull/156381
- **#132781 用最新 commentary 作为进度草稿标签**：体验优化类，具备产品决策依赖。
  https://github.com/openclaw/openclaw/issues/132781

---

## 7. 用户反馈摘要

- **升级即踩坑**：多位用户报告从 2026.7.1-2 升级到 2026.9.x 后遭遇回归（#142585 Doctor 拒绝导入、#143278 heartbeat 泄漏、#139847 消息丢弃），升级路径的兼容性验证成为最集中的抱怨点。
- **长时运行不稳定**：Windows 单网关用户（#143524）实测 WAL 达 2865 MB；13 天、约 310k tokens 的 WeChat 桥接会话出现"从未发送过的用户提示"（#151962）；15+ 轮重工具会话后写/执行工具静默丢失全部参数（#53408）——反映长会话与长进程下的状态与资源管理薄弱。
- **多账号/多代理部署复杂**：19 个 Slack 账号的部署在网关重启后 DM 全丢（#131150）；多代理网关 3 周记录出 6 类可靠性缺陷（#128067）。
- **平台差异明显**：Windows（Scheduled Task 无法无人值守运行，#143757）、macOS Homebrew（插件构建 tmp churn，#156009）、FreeBSD（前台更新路径，#149882）均有独立问题，跨平台一致性仍需投入。
- **满意点**：媒体提供商与内置扩展的覆盖面持续扩张（今日 PR #156406 一次性覆盖 openai、minimax、together、xiaomi、elevenlabs 等大量扩展），显示生态集成是项目的确定性优势。

---

## 8. 待处理积压

以下为创建时间较早、影响重大但今日仍在活跃更新的长期议题，建议维护者优先分诊：

- **#53408（创建于 2026-03-24，P2，15 评论）** 长对话后写/执行工具参数静默丢失 — 已标记 `clawsweeper-recovery-stuck`，缺明确修复方向。
  https://github.com/openclaw/openclaw/issues/53408
- **#6599（创建于 2026-02-01，P3，12 评论）** `/models test-fallback` 命令 — 长期挂起于产品决策，但对应痛点（回退链不可验证）已由 #152489 再次印证。
  https://github.com/openclaw/openclaw/issues/6599
- **#6757（创建于 2026-02-02，P2，9 评论）** 代理自触发上下文压缩 — 与今日活跃的 #137613 同题材，具备合并处理价值。
  https://github.com/openclaw/openclaw/issues/6757
- **#6625（创建于 2026-02-01，P3，7 评论）** 子代理优雅超时 — 与评审中的 #156381 属同方向，可一并规划。
  https://github.com/openclaw/openclaw/issues/6625
- **#97616（创建于 2026-06-29，P1，16 评论）** hook/tool 子进程泄漏与 zombie 累积 — 与今日崩溃类问题（#144911 子进程清理路径）存在潜在关联，建议合并排查。
  https://github.com/openclaw/openclaw/issues/97616
- **#131150（创建于 2026-08-27，P1，9 评论）** Slack DM 重启后静默丢失（19 账号部署）— 已标记 `clawsweeper-recovery-stuck`。
  https://github.com/openclaw/openclaw/issues/131150
- **#128067（创建于 2026-08-23，P1，7 评论）** beta.7 六类可靠性缺陷现场报告 — 证据充分但仍在累积。
  https://github.com/openclaw/openclaw/issues/128067
- **PR #118303（创建于 2026-08-02，`waiting on author`）** MiniMax M3 图像调用改走 MiniMax VL — 自动修复 PR，等待作者响应。
  https://github.com/openclaw/openclaw/pull/118303
- **PR #97339（创建于 2026-06-28，`waiting on author`）** cron 扁平日志字段与畸形工具参数归一化 — 附带了完整复现证据文件，等待作者推进。
  https://github.com/openclaw/openclaw/pull/97339
- **PR #123122（创建于 2026-08-13）** 网关发送前拒收超大请求帧 — 已于 2026-09-23 完成 rebase 修复冲突，处于"可评审"状态。
  https://github.com/openclaw/openclaw/pull/123122

---

**健康度小结**：项目提交与评审吞吐强劲（日更新量达 500/500），修复形态清晰的 P1 问题（#144911、#142037、#140455、#143980、#155728）均已进入 `queueable-fix`，说明问题响应机制运作正常。主要风险在于 2026.9.x 系列的升级回归密度偏高（P0 两例、P1 多例），以及 Windows 平台与长时运行的资源管理缺陷尚无明确修复 PR，建议下一版本优先处理 WAL checkpoint 与子进程清理两条主线。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告（2026-09-23）


## 1. 生态全景

当日生态呈现明显的"头部拥挤、长尾分化"格局：以 OpenClaw 为核心的智能体运行时生态已形成多个衍生与镜像项目（LobsterAI、NanoClaw、ZeroClaw 等），各项目共享相近的架构语汇（网关、插件、MCP、cron/SOP、上下文压缩），但在渠道接入、部署形态与安全模型上各有侧重。当日最普遍的工程痛点是"长时运行可靠性"——SQLite WAL 膨胀、子进程泄漏、压缩链路死锁、transcript 无限增长等问题在至少四个项目中同时出现，说明这是当前自主智能体架构的共性技术债。与此同时，多租户/团队部署（CoPaw #7318、Hermes 多 profile 网关）与无人值守场景下的审批与权限边界（ZeroClaw S0 问题、OpenClaw 子代理隔离）正成为社区最集中、最具方向性的诉求。整体看，生态已从"功能拼装"进入"运行时长与状态管理"的深水区，但多数项目的修复落地速度落后于缺陷发现速度。


## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃·关闭） | PR（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500 更新（461·39） | 500 更新（393·107） | 无 | 高活跃，修复提速但积压仍重；P0 升级回归密集 |
| **CoPaw** | 34（16·18） | 21（12·9） | 无 | 良好，关闭量略高于新开；会话级静默失效无 fix PR |
| **Hermes Agent** | 50（50·0） | 50（45·5） | 无 | 讨论旺盛但"开得多关得少"，审查带宽失衡 |
| **ZeroClaw** | 9（9·0） | 39（37·2） | 无 | 需求/缺陷发现快于修复落地；3 条 S0 无 fix PR |
| **NanoClaw** | 3（1·2） | 27（16·11） | 无 | 中性偏积极；gateway 重构未收口，外围回归显现 |
| **NanoBot** | 6（—） | 43（15·28） | 无 | 健康，维护者清理快；压缩链路为局部系统性缺陷 |
| **LobsterAI** | 0 | 11（2·9） | **2026.9.22** | 工程活跃、社区静默；Issue 通道连续零输入 |
| **IronClaw** | 0 | 3（3·0） | 无 | 偏低，净积压；#8092 挂起 13 天 |
| **PicoClaw** | 6（全部存量） | 6（1·5） | 无 | 低活跃，以 stale 清理为主；存在"清理而非解决"风险 |
| **Moltis** | 0 | 1（1·0） | 无 | 维护性静默，仅 Dependabot 依赖升级 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 当日无活动 |

> 数据口径：OpenClaw 更新量以"条"计且封顶显示为 500，实际吞吐显著高于其他项目；其余项目为当日 24 小时完整计数。


## 3. OpenClaw 在生态中的定位

**规模与体量**：OpenClaw 是当日生态中唯一达到"日更新量 500/500"量级的项目，其单日 PR 吞吐（合并/关闭 107）已超过所有其他项目当日的 PR 更新总和。评论最活跃议题达 60 条（#143524），远超其余项目最高评论量（Hermes #88584 的 134 条虽更高，但属跨仓库流程议题，非技术缺陷讨论）。从绝对规模看，OpenClaw 是生态的参照基准，LobsterAI、NanoClaw、ZeroClaw 等均在问题描述、PR 编号引用、上游补丁回移中明确以 OpenClaw 为上游。

**技术路线差异**：

- **与 LobsterAI 的关系**——LobsterAI 采取"上游同步而非分叉"策略，今日多条改动（#2754 降级启动、Kimi K3 maxTokens）明确标注为回移上游 OpenClaw PR（#150016、#150312），说明 OpenClaw 在网关容错、插件可用性策略上是事实标准来源。
- **与 NanoClaw / ZeroClaw 的关系**——两者在凭据网关（Iron Proxy）、插件 WASM ABI、审批生命周期等方向上独立演进，说明 OpenClaw 生态之下已出现"共享语汇、各自实现"的分化。
- **相对优势**——生态覆盖面是 OpenClaw 的确定性优势（今日 PR #156406 一次性覆盖 openai、minimax、together、xiaomi、elevenlabs 等多家媒体提供商），同时其 issue 标签体系（`fix-shape-clear`、`queueable-fix`、`source-repro`、`clawsweeper-recovery-stuck`）显示其问题响应机制已高度工程化，这是多数衍生项目尚未建立的。

**主要短板**：2026.9.x 系列的升级回归密度偏高（P0 两例：WAL 膨胀 #143524、Doctor 拒绝导入 #142585），且 Windows 平台与长时运行资源管理两条主线尚无明确修复 PR，这与 LobsterAI 今日刚发布的"Windows 网关恢复"补丁形成对照——说明平台级稳定性是 OpenClaw 当前最需要加固的环节。


## 4. 共同关注的技术方向

以下方向在多个项目中同时涌现，构成生态级技术议题：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩链路治理** | NanoBot（#5849 死锁、#5879 大 read_file 中断、#5870 通知重复）；Hermes（#99943 窗口被钳制、#117915 阈值覆盖）；CoPaw（#7628 预算超出、#7853 媒体块不裁剪、#7733 自主驱逐）；OpenClaw（#6757 自触发压缩、#137613 禁用预压缩） | 压缩需有 token 预算保护、通知去重、增量工具结果归类、媒体块裁剪；部分项目已提出"由 agent 参与驱逐决策"的架构级诉求 |
| **长时运行的资源与状态管理** | OpenClaw（#143524 WAL 膨胀、#97616 子进程泄漏）；NanoClaw（#3732 transcript 无限增长）；CoPaw（#7534 消费者卡死）；NanoBot（#5664 摘要缓存无界增长） | 长会话/长驻容器下的资源回收、状态轮转、队列消费者生命周期 |
| **无人值守场景的审批与权限边界** | ZeroClaw（#10968 无人值守回合无 ApprovalManager、#11058 高风险命令豁免，均 S0）；OpenClaw（#156381 子代理并发隔离）；CoPaw（#7767 `on_acting` 从不触发） | cron/heartbeat/SOP/spawn 等自动触发路径必须仍受审批约束，安全语义不得因入口不同而降级 |
| **多租户 / 多 profile 部署** | CoPaw（#7318 路线图征集，32 评论）；Hermes（多 profile 网关系列）；OpenClaw（#131150 19 个 Slack 账号）；NanoClaw（安装级容器隔离） | 从个人助手转向团队部署，需要 profile 隔离语义一致、密钥管理、共享存储（NFS+SQLite 并发） |
| **渠道成熟度** | ZeroClaw（WhatsApp 语音/Markdown）；OpenClaw（Telegram/飞书/WeChat 桥接）；CoPaw（飞书频道集中清理）；Hermes（企微卡片、Telegram 链接预览） | 文档承诺语义与实际行为需一致（`suppress_voice`、`force_voice`、`allowed_commands` 均出现"静默失效"） |
| **更新/升级链路鲁棒性** | NanoClaw（#3869 清单式打包崩溃）；Hermes（#119466 更新后崩溃循环、#120014 清理期 TypeError）；OpenClaw（#142585 迁移阻断）；NanoBot（#5881 新校验规则破坏多实例） | 自更新流程是用户信任度最薄弱环节，"清单式打包"在快速演进代码库中易失配 |
| **静默失败可观测性** | CoPaw（#7715 misleading 错误）；Hermes（#119769 仅写日志、#120115 克隆后静默 not available）；ZeroClaw（#10599 cron 未执行状态）；NanoClaw（#3868 resume 静默失败） | 用户反复强调"要么正确工作，要么响亮报错"，错误传播链条不足是共性不满 |


## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能智能体运行时，媒体提供商与内置扩展覆盖面最广 | 开发者 / 自建部署者 | 网关 + 插件 + MCP 架构，问题标签体系最工程化；规模化渠道接入 |
| **CoPaw** | QwenPaw Hub 多租户、Console 会话 | 团队 / 协作部署 | 引入异步存储契约（SQLite/PostgreSQL）、Hub 多租户、共享聊天工作区 + xterm 终端；今日测试覆盖率至 73.79% |
| **Hermes Agent** | 多 profile 网关、Desktop 富客户端 | 深度个人用户 / 多 profile 运营 | multiplex gateway 架构，重点在 profile 隔离与 Desktop 渲染一致性；今日 50/50 更新显示其为讨论最活跃的衍生项目 |
| **NanoClaw** | Iron Proxy 凭据网关、容器级会话隔离 | 安全敏感型部署者 | 每会话独立容器/microVM（Apple Container 路线）、凭据 vault、MCP 策略强制；gateway 重构批次未收口 |
| **ZeroClaw** | 渠道矩阵（WhatsApp/Discord/email）、SOP/cron | 多渠道运营者 | WASM 插件 ABI、egress 授予仪式、S0 级安全模型；栈式 PR 依赖导致积压 |
| **LobsterAI** | cowork 交互体验、订阅商业化 | 中文用户 / 网易生态 | 明确"上游同步"策略（回移 OpenClaw 补丁），差异在界面与商业化层 |
| **NanoBot** | WebUI 用量可视化、第三方 provider 接入 | 轻量个人用户 | 压缩链路为核心议题；HKUDS 出品，今日由 io.net 官方贡献 provider |
| **PicoClaw / IronClaw / Moltis** | 嵌入式 / WebUI 本地化 / WASM 运行时 | 细分场景 | 活跃度低，以存量清理或依赖维护为主 |

**结构性观察**：生态已分化为三层——OpenClaw 作为上层全功能运行时；Hermes、CoPaw、NanoClaw、ZeroClaw 作为各有专攻的同层竞争者；LobsterAI、PicoClaw 等作为依赖或镜像层。区分度最高的维度是"凭据/权限架构"（NanoClaw 的 vault 与 Iron Proxy、ZeroClaw 的 egress 仪式）与"隔离模型"（容器 vs microVM vs 进程）。


## 6. 社区热度与成熟度

**第一层：快速迭代期（高活跃 + 高变更量）**
- **OpenClaw**——日吞吐 500/500，正处于功能扩张与回归修复并行的阶段；升级回归密度偏高是其快速迭代的代价。
- **Hermes Agent**——50/50 但合并仅 5 条，讨论与提交远超评审能力，处于"贡献旺盛、审查瓶颈"的典型状态。
- **CoPaw**——关闭量略高于新开，测试覆盖率冲刺（+3.28pp）与许可证合规清理并行，属健康的成长期。

**第二层：质量巩固期（中低活跃 + 修复为主）**
- **NanoClaw**——11 条合并以"修漏 + 依赖对齐"为主，gateway 重构待收口。
- **NanoBot**——28 条合并/关闭 vs 15 条待合并，维护者清理节奏快，但压缩链路为局部系统性缺陷面。
- **LobsterAI**——发布 2026.9.22，9/11 PR 已合并，但 Issue 通道连续零输入，社区参与度与工程活动严重脱节。
- **PicoClaw**——6 条更新中 5 条带 stale，以自动化清理为主，存在"清理而非解决"风险（#3373 无对应 fix PR）。

**第三层：静默或维护态**
- **IronClaw**（3 待合并、净积压）、**Moltis**（仅 Dependabot）、**NullClaw / TinyClaw / ZeptoClaw**（零活动）。

**成熟度判据**：真正的成熟标志不是活跃度，而是"缺陷发现→修复落地"的闭环速度。今日只有 OpenClaw 与 NanoBot 展示出清晰的 `fix-shape-clear` / 当日开当日关的闭环能力；ZeroClaw 有 3 条 S0 问题无任何 fix PR，是其成熟度的主要扣分项。


## 7. 值得关注的趋势信号

**对 AI 智能体开发者的参考价值：**

1. **"长时运行"已成为第一技术门槛**。WAL 膨胀（OpenClaw 实测 2865 MB）、transcript 无限增长（NanoClaw #3732）、消费者卡死（CoPaw #7534）、摘要缓存无界（NanoBot #5664）在四项目并发出现，说明智能体的主要失效模式已从"功能不对"转向"跑久了会坏"。**建议**：在架构设计早期就为持久层引入 checkpoint、轮转与预算保护，而非事后修补。

2. **压缩子系统的系统性缺陷面**。NanoBot（#5849/#5879/#5870）、Hermes（#99943/#117915）、CoPaw（#7628/#7853/#7733）三项目的压缩问题共享同一根因族：预算保护缺失、增量工具结果未归类、通知未去重、媒体块被跳过。**这是当前最值得投入的系统级修复方向**，单一项目内的零散修复易导致语义不一致。

3. **无人值守 ≠ 无审批**。ZeroClaw 两条 S0（#10968、#11058）揭示：当自动触发路径（cron/heartbeat/SOP/spawn）绕过 ApprovalManager 时，安全模型会静默降级。这对所有将智能体投入生产自动化的团队是直接警示——**审批必须在所有入口一致生效，安全语义不得因入口不同而降级**。

4. **静默失败比显式崩溃更危险**。跨项目高频出现"配置正确但不生效"（ZeroClaw 三个文档语义失效、CoPaw 飞书配置不生效）、"错误信息掩盖真实原因"（CoPaw #7715）、"仅写日志用户不知情"（Hermes #119769）。**建议**：将可观测性（错误传播、响亮的失败模式）视为与功能同等的产品需求。

5. **多租户/团队部署是确定性演进方向**。CoPaw #7318 的 32 条评论、Hermes 多 profile 网关的密集问题、CoPaw #7954 异步存储契约（面向 NFS 上 SQLite 的并发问题），共同指向"从个人桌面走向协作部署"的拐点。NFS + SQLite 的组合在多实例场景下已被证明不可靠，**存储后端的异步化与关系型化是可预见的基础设施重构**。

6. **更新链路是用户信任度的薄弱环节**。NanoClaw #3869（清单式打包崩溃）、Hermes #119466（更新后崩溃循环）、NanoBot #5881（新校验规则破坏多实例）几乎同期出现。**建议**：将"清单式打包"改为整树提取，将破坏性配置校验规则提前一版本公告，并为自更新流程建立回滚与冒烟验证。

7. **生态正在形成"事实标准层"**。OpenClaw 的补丁被 LobsterAI 主动回移，其问题标签体系、网关容错策略（降级启动保留基础会话）成为上游参照。**对于新入场者，评估"是否与 OpenClaw 生态对齐"可能比自建全套更务实**；对于 OpenClaw 本身，则需在保持扩张速度的同时解决 2026.9.x 升级回归与平台一致性两条主线。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-23

## 1. 今日速览

项目今日保持**高活跃度**：过去24小时 Issues 更新 6 条、PR 更新 43 条（待合并 15、已合并/关闭 28），无新版本发布。合并/关闭量（28）显著高于待合并存量（15），说明维护者清理节奏较快，积压未失控。今日讨论高度集中在**上下文压缩（context compaction）链路**——包括 Telegram 重复通知、自动压缩死锁、大 read_file 结果导致回合中断等一系列相关问题，且多条已出现对应 fix PR。另有 0.3.5 版本的配置目录校验规则引发用户明确反弹，属于需要优先澄清的回归类反馈。

## 2. 版本发布

今日无新版本发布，无相关更新内容、破坏性变更或迁移说明可报告。

## 3. 项目进展

今日合并/关闭的 PR 覆盖多条产品线：

- **#5851 [CLOSED] feat(webui): add usage ranges, activity calendar and model breakdowns** — 扩展 token 用量详情，加入 7/30/365 天与保留历史区间、可键盘访问的活动日历、实际 provider/model 拆分及每日数值表。https://github.com/HKUDS/nanobot/pull/5851
- **#5871 [CLOSED] feat(linear): improve native agent UX** — 同时支持 Linear 提及与委派 issue，补充 OAuth 回调与 channel/runtime 状态文案、授权工作区健康检查、scope 可见性与安全撤销。https://github.com/HKUDS/nanobot/pull/5871
- **#5875 [CLOSED] feat(providers): add IO Intelligence (io.net) provider** — 由 io.net 官方贡献，使 NanoBot 用户可开箱使用 IO Intelligence 推理。https://github.com/HKUDS/nanobot/pull/5875
- **#5883 [CLOSED] fix(agent): preserve state for required Codex compaction** — 修复 Codex 恢复请求超预算时，governor 提前摘要并清空 provider state、导致 Codex 无法执行原生压缩的问题。https://github.com/HKUDS/nanobot/pull/5883
- **#5813 [CLOSED] fix(webui): clear stale restart prompt after reconnect** — 网关重启后 WebUI 会残留重启前的 `requires_restart` 快照，现已刷新设置。https://github.com/HKUDS/nanobot/pull/5813
- **#5878 [CLOSED] fix(agent): log mid-turn injected messages** — 回合中注入消息此前只记录数量、缺少内容，现补充预览。https://github.com/HKUDS/nanobot/pull/5878
- **#5882 [CLOSED] docs: correct context compaction behavior and document /compact** — 修正文档中"压缩保留最近消息原文"的过时描述，并补充 `/compact` 说明。https://github.com/HKUDS/nanobot/pull/5882

**整体推进评估**：今日进展集中在 WebUI 用量可视化、第三方 provider 接入（io.net）、以及压缩/Codex 相关的正确性修复，属于"体验增强 + 稳定性修补"并行推进，未见架构级变更。

## 4. 社区热点

今日评论最集中的是压缩相关问题：

- **#5870 [CLOSED] [priority: p1] Telegram: context compaction completion notice is repeated multiple times**（3 条评论）— 用户在同一对话中观察到 6 次以上 `Context compacted.` 提示。https://github.com/HKUDS/nanobot/issues/5870
- **#5879 [OPEN] Large read_file results survive compaction as unsummarized delta and abort the turn**（2 条评论）— 历史摘要成功后，新返回的工具结果仍可能超限并中断回合。https://github.com/HKUDS/nanobot/issues/5879
- **#5849 [OPEN] Auto-compaction deadlock: summarize_transcript has no token-budget guard**（2 条评论）— 自动压缩路径无 token 预算保护，历史超预算后无法自愈。https://github.com/HKUDS/nanobot/issues/5849
- **#5405 [OPEN] feat(skills): support manual-only invocation**（更新至今日）— 为有副作用的技能（部署、发布）引入仅手动调用模式。https://github.com/HKUDS/nanobot/pull/5405

**诉求分析**：围绕压缩的三条问题指向同一根因族——通知去重、预算保护、增量工具结果归类。这已构成一个**局部系统性缺陷面**，而非孤立 bug。PR #5780 已提出停止发送后台压缩通知（保留 `/compact` 场景），与该问题域直接对应。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| P1 | #5870 Telegram 压缩完成通知重复多次 | 已关闭 | 相关 PR #5780 处理通知可见性 https://github.com/HKUDS/nanobot/pull/5780 |
| 高 | #5849 自动压缩死锁：`summarize_transcript` 无 token 预算保护，超预算后无法恢复 | 开放中 | 未见直接 fix PR |
| 高 | #5879 大 `read_file` 结果作为未摘要 delta 存活，导致回合中断 | 开放中 | 相关 PR #5824 处理超长行分页 https://github.com/HKUDS/nanobot/pull/5824 |
| 中 | #5881 [bug] 0.3.5 强制 `_nanobot` 目录移出 workspace，多实例启动被拒 | 开放中（今日新开） | 无 |
| 中 | WebUI 重启后残留过期重启提示 | 已关闭 | #5813 https://github.com/HKUDS/nanobot/pull/5813 |

**注意点**：#5849 被作者描述为"一旦历史超预算便永远无法恢复"，属于可导致会话不可用的严重缺陷，目前尚无对应 fix PR，建议优先响应。此外 #5881 反映 0.3.5 新增校验规则为**破坏性变更**，影响多实例工作流，但今日未发布新版本，说明该规则已在既有 0.3.5 中生效。

## 6. 功能请求与路线图信号

- **视频输入支持** — #5869 [enhancement, feature request, priority: p2] 用户指出当前视频仅存盘并传路径给 LLM，希望接入支持视频输入的 omni 模型。https://github.com/HKUDS/nanobot/issues/5869
- **仅手动调用的技能** — PR #5405 提议为部署/发布类技能加显式用户触发模式，避免被自动广告或 `always: true` 预加载。该 PR 自 8-16 起开放至今，已标记 conflict，落地取决于冲突解决进度。https://github.com/HKUDS/nanobot/pull/5405
- **心跳共享会话** — PR #4551 提议新增 `gateway.heartbeat.isolatedSession`（默认 `true`），允许心跳复用目标会话上下文。自 6-26 起长期开放。https://github.com/HKUDS/nanobot/pull/4551
- **WebUI 图片结果投递** — PR #5848 聚焦在回复末尾投递截图与生成图片。https://github.com/HKUDS/nanobot/pull/5848

**判断**：#5869 属新增能力诉求，暂无可复用 PR，短期内进入下一版本的可能性取决于维护者是否接受视频模态优先级。其余均为已有 PR 推进中的存量功能。

## 7. 用户反馈摘要

- **负面（压缩体验）**：#5870 用户明确表述"最初在同一段对话中看到六份副本，之后还有更多"，说明 Telegram 渠道的压缩提示已构成明显干扰。
- **负面（升级受阻）**：#5881 用户以中文提出质疑——"同一个实例 workspace 为啥要把 `_nanobot` 单独放出去？"，反映 0.3.5 的目录校验规则与用户既有多实例部署方式冲突，且规则缺乏充分解释。
- **中性/期待（功能缺口）**：#5869 用户认可当前"存盘+给路径"的降级方案，但指出 omni 模型已普及视频输入能力，期望获得原生支持。
- **满意度信号**：今日多条 fix PR 被快速合并/关闭（如 #5883、#5813、#5878、#5882），显示维护者对报告问题响应及时，社区修复闭环速度较好。

## 8. 待处理积压

以下条目长期开放且今日仍有更新，建议维护者关注：

- **#4551 [OPEN] feat(heartbeat): add isolated_session config** — 创建于 2026-06-26，已开放近三个月，标记 conflict。https://github.com/HKUDS/nanobot/pull/4551
- **#5405 [OPEN] feat(skills): support manual-only invocation** — 创建于 2026-08-16，标记 conflict/priority: p2。https://github.com/HKUDS/nanobot/pull/5405
- **#5664 [OPEN] fix(agent): bound idle summary cache** — 创建于 2026-09-04，解决被遗弃会话导致摘要缓存无界增长的问题，标记 conflict。https://github.com/HKUDS/nanobot/pull/5664
- **#5780 [OPEN] fix: stop sending context compaction notifications** — 与今日 P1 问题 #5870 直接相关，建议优先推进以闭环该问题域。https://github.com/HKUDS/nanobot/pull/5780
- **#5849 [OPEN] Auto-compaction deadlock** — 今日开放的重要严重缺陷，尚无 fix PR，属最高优先级待办。https://github.com/HKUDS/nanobot/issues/5849

**健康度提示**：多个长期 PR 均带 `conflict` 标记，提示部分积压源于合并冲突未解而非评审分歧，清理成本可能低于预期。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-09-23

## 1. 今日速览

今日项目维持极高活跃度：过去 24 小时 50 条 Issue 更新全部为新开或活跃状态，关闭数为 0；PR 侧 50 条更新中 45 条待合并、仅 5 条合并/关闭，合并吞吐明显低于提交速度，积压压力上升。讨论热度高度集中在多 profile 网关（multiplex gateway）与 Desktop 渲染/会话状态两类问题，最高单帖评论数达 134。无新版本发布，社区修复（PR）大量指向同期 Issue，说明维护者响应链条存在但落地滞后。整体健康度：讨论与贡献旺盛，但"开得多、关得少"，需关注审查带宽瓶颈。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 5 条，但展示清单中未包含已合并条目明细，故仅从待合并队列观察推进方向。当前队列中已有若干高价值集成候选，一旦合入将直接改善稳定性：

- **PR #120103** — 修复多路复用网关下 cron、kanban、ledger 及 adapter 后台路径误读 LAUNCH profile 的问题，一次性关闭 #119858、#119859、#119973、#119242 并接管多个 salvage PR。这是今日覆盖面最广的修复。
- **PR #120158** — 修复手动 `/compress` 后将后端 home 目录写入 system prompt、导致下次 resume 未命中 prompt cache 的问题。
- **PR #120161** — 修复 `hermes serve` 在 `HERMES_BACKEND_READY` 之前向 stdout 写入 JSON-RPC 帧的问题。
- **PR #120156** — 修复就地压缩归档越界（归档了压缩面未持有的行）的问题。
- **PR #120163** — 让端口绑定失败的 gateway 在启动时"响亮失败"，而非静默挂起且 `systemctl is-active` 仍报 active。

## 4. 社区热点

- **Issue #88584**（评论 134）— 计划中的 Nous-to-Enterkey 合并因 `cron/jobs.py` 冲突被阻塞，dashboard updater 停留在上一个已测 Enterkey 版本。标签为 invalid/comp/cron/P3，但评论量为全场最高，说明跨仓库集成流程是社区持续关注焦点。
  https://github.com/NousResearch/hermes-agent/issues/88584
- **Issue #119003**（评论 27）— 多路复用网关下 kanban dispatch/reconcile 静默销毁真实任务行，替换为畸形 `t_running` 占位符。属数据破坏类问题。
  https://github.com/NousResearch/hermes-agent/issues/119003
- **Issue #119540**（评论 7）— Desktop 已完成回复间歇性重复渲染或乱序（已核实持久化行本身干净，属渲染侧问题）。
  https://github.com/NousResearch/hermes-agent/issues/119540

诉求分析：讨论热度集中在(1) 跨仓库/发布流程的可控性，(2) multiplex profile 架构下的状态隔离，(3) Desktop 前端渲染一致性。三者均非配置层面的小瑕疵，而是架构一致性议题。

## 5. Bug 与稳定性

按严重程度排列：

**P0**
- **Issue #119466** — `hermes update` 后 venv editable-finder 陈旧，gateway 以 `ModuleNotFoundError: No module named 'hermes_platform'` 崩溃循环（systemd 系统单元）。暂无对应 fix PR 列出。
  https://github.com/NousResearch/hermes-agent/issues/119466

**P2（数据/状态破坏类）**
- **Issue #119003** — kanban 任务行被静默销毁并替换为畸形占位符（multiplex gateway）。
  https://github.com/NousResearch/hermes-agent/issues/119003
- **Issue #99943** — 压缩器上下文窗口在云 provider 上被 `model.ollama_num_ctx` 钳制，1M 窗口静默降至 65,536；自 v0.21.0 起引入。
  https://github.com/NousResearch/hermes-agent/issues/99943
- **Issue #117915** — 默认 `compression.threshold_tokens`（256,000）静默覆盖 `compression.model_thresholds` 的按模型比例，1M 窗口模型受影响。
  https://github.com/NousResearch/hermes-agent/issues/117915

**P2（功能故障类）**
- **Issue #119540** — Desktop 回复重复/乱序渲染（render 侧已验证）。
  https://github.com/NousResearch/hermes-agent/issues/119540
- **Issue #93349** — gateway 服务身份在不同 `HERMES_HOME` 根间冲突（macOS launchd label/plist 路径碰撞）。
  https://github.com/NousResearch/hermes-agent/issues/93349
- **Issue #109765** — cron 创建快照对具名 custom provider 有损，replay 将任务钉在 OpenRouter fallback。
  https://github.com/NousResearch/hermes-agent/issues/109765
- **Issue #120049** — Desktop 模型选择写入全局 config，忽略 per-profile `config.yaml`。
  https://github.com/NousResearch/hermes-agent/issues/120049
- **Issue #120014** — `hermes update`（v0.21.0 → v0.21.4）清理阶段抛 TypeError 并打印多余 "unknown toolset" 警告。
  https://github.com/NousResearch/hermes-agent/issues/120014
- **Issue #120083** — Desktop 图片轮次的 optimistic 用户气泡在每条已完成回复下方重复出现。
  https://github.com/NousResearch/hermes-agent/issues/120083
- **Issue #119886** — 默认 home 的 dashboard 重启被服务的 profile 时，实际重启的是 sticky `active_profile` 而非 multiplexer。
  https://github.com/NousResearch/hermes-agent/issues/119886
- **Issue #120023** — 会话中期压缩后 Desktop 实时转录乱序（全量重载可修复）。
  https://github.com/NousResearch/hermes-agent/issues/120023

**P3**
- **Issue #119217**（标记 duplicate）— multiplex gateway 下 `nous-auth-keepalive` 每 15 分钟记录 "no profile secret scope" WARNING。
  https://github.com/NousResearch/hermes-agent/issues/119217
- **Issue #119546** — `build_profile_secret_scope()` 依设计省略 provider 与 `API_SERVER_KEY`，导致每个 profile 需自行复制密钥，否则静默 fail closed。
  https://github.com/NousResearch/hermes-agent/issues/119546
- **Issue #119539** — `strip_profile_gate_env` 按名称"形状"（`_ALLOWED_`）删除运维环境变量，静默破坏 routed-profile `no_agent` cron 脚本。
  https://github.com/NousResearch/hermes-agent/issues/119539
- **Issue #120115** — `profile create --clone` 复制 `memory.provider` 但不复制 provider 配置目录，克隆后静默报 "not available"。
  https://github.com/NousResearch/hermes-agent/issues/120115
- **Issue #119769** — memory-provider 迁移结果仅写入 agent.log，`allow_lazy_installs: false` 时用户静默失去记忆能力。
  https://github.com/NousResearch/hermes-agent/issues/119769

**已有 fix PR 的对应项**：PR #120103 覆盖多路复用后台路径族群；PR #120158、#120156、#120161 分别针对压缩与 serve 输出；PR #120141 修复 `hermes doctor` 对 OAuth-only 安装的误报；PR #120157 修复 kanban CLI 路径的 worker-guard 绕过与评论作者伪造。

## 6. 功能请求与路线图信号

- **Polish 语言支持（Issue #96937）** — 提交者称约 3450 行、41 个章节的完整波兰语翻译已在本地测试就绪。属可直接落地的低风险本地化需求。
  https://github.com/NousResearch/hermes-agent/issues/96937
- **Gemini 原生企业网关支持（Issue #72952）** — 请求支持自定义 `/v1beta` base URL 与 auth header（v0.19.0 起存在使用摩擦），标注 needs-decision。
  https://github.com/NousResearch/hermes-agent/issues/72952
- **插件中间件与实时文本变换（PR #120170）** — 新增 per-registration 失败策略（`failure_mode="open"` 保持默认）与实时文本变换，面向隐私/安全插件，不改变默认行为，合入概率较高。
  https://github.com/NousResearch/hermes-agent/pull/120170
- **Desktop 工具调用显示新增 Hide 选项（PR #120131）** — 在 Product / Technical 之外提供第三档，隐藏常规工具活动。
  https://github.com/NousResearch/hermes-agent/pull/120131
- **Telegram 分域名链接预览抑制（PR #120162）** — 实现 #120029，新增 `link_preview_disabled_domains` 与逐消息覆盖。
  https://github.com/NousResearch/hermes-agent/pull/120162
- **企微模板卡片交互审批与模型选择器（PR #120167）** — DM 专用，命令审批卡片复用既有 `resolve_gateway_approval` 链路。
  https://github.com/NousResearch/hermes-agent/pull/120167

判断：上述 PR 均已具备实现且多为增量式、默认行为不变，是下一版本最可能纳入的候选；两个 Issue 型请求（#96937、#72952）则取决于维护者决策。

## 7. 用户反馈摘要

- **配置层级混乱是反复出现的痛点**：Desktop 模型选择写入全局 config 而忽略 per-profile 配置（#120049）、`profile create --clone` 遗漏 provider 配置目录（#120115）、多路复用下每个 profile 被迫重复密钥（#119546）、`strip_profile_gate_env` 按名称形状误删运维变量（#119539）——共同指向 profile 隔离语义在实现层未贯彻一致。
- **静默失败最令用户受挫**：memory 迁移结果只进日志（#119769）、克隆后插件"not available"却静默（#120115）、压缩窗口从 1M 被悄悄钳到 65,536（#99943）、gateway 绑定失败后 `systemctl` 仍报 active（PR #120163 描述的缺陷）——用户反复强调"要么正确工作，要么响亮报错"。
- **升级路径脆弱**：`hermes update` 导致的崩溃循环（#119466）与清理期 TypeError（#120014）说明自更新流程是用户信任度的薄弱环节。
- **Desktop 体验问题可复现且高频**：回复重复渲染、乱序、图片气泡重现已成多个独立 Issue（#119540、#120083、#120023），且用户已自行区分"持久化数据干净、渲染侧有问题"，反馈质量高。
- **满意度信号**：多个 Issue 来自长期深度用户（如 teknium1 提交的 #120115、#119769），提供了明确复现路径与版本/commit 信息，表明用户仍愿投入成本帮助改进。

## 8. 待处理积压

以下条目创建时间较早、至今仍为 OPEN 且今日再次被更新，建议维护者优先分流：

- **Issue #88584**（2026-08-17 创建，134 条评论）— 跨仓库合并阻塞，虽标 invalid/P3 但讨论量最高，长期悬置会持续消耗社区注意力。
  https://github.com/NousResearch/hermes-agent/issues/88584
- **Issue #72952**（2026-07-27 创建）— Gemini 企业网关支持，已挂 needs-decision 近两个月。
  https://github.com/NousResearch/hermes-agent/issues/72952
- **Issue #93349**（2026-08-24 创建）— gateway 服务身份跨 HERMES_HOME 冲突。
  https://github.com/NousResearch/hermes-agent/issues/93349
- **Issue #96937**（2026-08-28 创建）— 波兰语支持，翻译已就绪等待合入决策。
  https://github.com/NousResearch/hermes-agent/issues/96937
- **Issue #99943**（2026-09-01 创建）— 压缩窗口钳制回归，影响云 provider 大上下文模型。
  https://github.com/NousResearch/hermes-agent/issues/99943
- **PR #115997**（2026-09-19 创建，今日更新）— 修复 `save_config` 无法保留显式 null 值，静置中。
  https://github.com/NousResearch/hermes-agent/pull/115997

**流程层面提醒**：今日 50 条 PR 更新中 45 条待合并、仅 5 条关闭，且 50 条 Issue 更新零关闭，审查/合并带宽与提交速度已明显失衡。建议对已具备明确复现与修复的高价值项（如 PR #120103、#120163、#120141）优先安排审查，避免修复队列继续膨胀。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报（2026-09-23）

## 1. 今日速览

过去24小时 PicoClaw 无新版本发布，整体处于**低活跃度、以清理存量为主**的状态：Issues 与 PR 更新合计 6 条，全部为已有条目，无新开 Issue。当日关闭 2 个 Issue（均为 `stale` 标记的配置模块 Bug）与 3 个 PR（其中 2 个为对应的 stale 修复），待合并 PR 仅剩 1 条。两条被关闭的 Issue 均来自同一作者 sting8k，集中于 `pkg/config` 的敏感数据缓存并发问题与 `SaveConfig` 多 API Key 丢失问题，并各有对应修复 PR。唯一仍在开启状态的是 Keenable 搜索 provider 的功能型 PR，更新时间同为 2026-09-23。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

当日合并/关闭 3 个 PR，其中两个是对前述配置模块 Bug 的直接修复：

- **#3375 [CLOSED] fix(config): guard lazy sensitive-data cache against concurrent init** — 针对 `Config.sensitiveCache` 懒初始化缺乏同步保护的问题，使内部 `sync.Once` 无法保护自身创建过程，修复方向为对并发初始化加锁。链接：sipeed/picoclaw PR #3375
- **#3372 [CLOSED] fix(config): make the reaction tool configurable** — 修复 `reaction` 工具配置路径：该工具在 `agent_init.go` 中条件注册，但 `ToolsConfig.IsToolEnabled("reaction")` 缺少专门分支，回落到默认 `true`。链接：sipeed/picoclaw PR #3372
- **#3344 [CLOSED] Add Build Remote Agent phone pairing (gbr/1)** — 新增 Build Remote Agent 配对设备适配器，允许手机旁观察（spectate）桌面端 agent，协议为 `gbr/1`，需安装 MIT 许可的 `gbr-agent` v0.6.0+ 并通过 `gbr-agent pair`（二维码 + 8 位字符码）完成配对。该 PR 创建于 2026-08-23，历时约一个月后关闭。链接：sipeed/picoclaw PR #3344

从推进幅度看，当日进展主要体现在配置层稳定性修补与一个外部集成适配器的收尾，未触及核心功能迭代。

## 4. 社区热点

当日整体讨论热度很低，所有条目的 👍 均为 0，评论数据仅两条已关闭 Issue 有记录（各 2 条评论）：

- **Issue #3374**（2 条评论）与 **Issue #3373**（2 条评论）为当日唯一有评论沉淀的条目，且均为 stale 关闭。链接：sipeed/picoclaw Issue #3374 、sipeed/picoclaw Issue #3373
- PR 侧评论数未提供（`undefined`），无法量化讨论活跃度。

**诉求分析**：讨论集中于配置持久化与并发安全这一细分领域，反映出该模块的实际使用者（而非泛用户）在真实部署中遇到了数据丢失与竞态问题。但由于两条 Issue 均被标记 `stale` 后关闭，其"热点"更多是清理流程产生的可见度，而非社区自发的持续关注。

## 5. Bug 与稳定性

当日更新涉及 2 个 Bug，均已关闭，且均有对应修复 PR：

**高严重度 — 并发竞态导致 panic**
- **Issue #3374 [CLOSED] [BUG] Data race in Config.initSensitiveCache can return a nil replacer and panic FilterSensitiveData**
- 位置：`pkg/config/security.go:221-222`
- 问题：`Config.sensitiveCache` 懒创建时无任何同步保护，使其内部包含的 `sync.Once` 失效；两个 goroutine 可各自分配独立的 `SensitiveDataCache`，可能返回 nil replacer 并在 `FilterSensitiveData` 中 panic。
- 修复状态：**已有 fix PR #3375**（当日已关闭）。链接：sipeed/picoclaw Issue #3374

**高严重度 — 配置静默数据丢失**
- **Issue #3373 [CLOSED] [BUG] SaveConfig silently deletes every api_key after the first and leaves a dangling fallback**
- 问题：`model_list` 条目在包含多个 `api_keys` 值时，经一次普通 `LoadConfig` → `SaveConfig` 往返后会丢失首个之后的所有 key；保留下来的条目仍持有指向已不存在模型的 `fallbacks` 引用。
- 修复状态：数据中未显示与该 Issue 编号直接对应的独立 fix PR（#3372 处理的是 reaction 工具配置，非同一问题）。链接：sipeed/picoclaw Issue #3373

**低严重度 — 工具配置未生效**
- **PR #3372** 修复了 `reaction` 工具配置无法关闭的问题（配置分支缺失导致默认 `true`）。链接：sipeed/picoclaw PR #3372

## 6. 功能请求与路线图信号

当日唯一处于 OPEN 状态的新功能类条目：

- **PR #3370 [OPEN] [stale] feat(tools): add Keenable web search provider** — 将 Keenable（https://keenable.ai）加为 `web_search` provider，特点是**全新安装下无需 API Key 即可工作**：设置 `tools.web.keenable.enabled` 为 `true` 后，工具调用 Keenable 的公开端点（`POST /v1/search/pub...`）。链接：sipeed/picoclaw PR #3370

**纳入下一版本的可能性判断**：该 PR 自 2026-09-07 创建、2026-09-23 仍在更新，已被标记 `stale` 但仍保持 OPEN，说明尚未被关闭也未合并。其"零配置、无需 Key 即可用"的定位对降低新用户上手门槛有直接价值，但 stale 标记本身是纳入下一版本的负面信号——在维护者明确表态前，不宜视为已定路线图项。

## 7. 用户反馈摘要

可提炼的用户信号全部来自 sting8k 提交的两个配置 Bug（各 2 条评论，具体评论内容未提供，仅从摘要推断）：

- **痛点 1：安全过滤链路的可靠性**。用户在生产/并发场景下使用敏感数据过滤时遭遇 nil replacer panic，属于影响进程稳定性的实际问题。
- **痛点 2：配置读写的保真性**。多 API Key 场景是典型的故障转移/轮换用法，`LoadConfig` → `SaveConfig` 往返静默丢失 key 会造成难以察觉的线上故障，且残留的 `fallbacks` 悬空引用进一步恶化可诊断性。
- **评价倾向**：数据中未出现正面反馈、满意表达或使用场景描述；当日可见反馈均为否定性问题报告。需要说明的是，这两条 Issue 均带 `stale` 标记后关闭，其评论数与 👍 数（0）表明其未获得广泛的社区共鸣。

## 8. 待处理积压

- **PR #3370 [OPEN] [stale] feat(tools): add Keenable web search provider** — 创建于 2026-09-07，已滞留约 16 天，标记 stale 但仍未合并或关闭，且今日（2026-09-23）仍有更新。建议维护者明确表态：合并、要求修改或关闭，避免贡献者长期悬置。链接：sipeed/picoclaw PR #3370
- **Issue #3373 的修复缺口** — 该 Bug（`SaveConfig` 丢失 api_key 并留下悬空 fallback）已被 stale 关闭，但当日数据中未见对应 fix PR。若确无后续修复，存在问题被"清理而非解决"的风险，建议维护者确认是否已有其他 PR 覆盖。链接：sipeed/picoclaw Issue #3373
- **流程层面信号** — 当日 6 条更新中有 5 条带 `stale` 标记，且两条 Bug Issue 与两条 fix PR 同日被关闭，显示项目当前以自动化的陈旧条目清理为主要活动。建议关注 stale 策略是否正在关闭仍具技术价值的问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-09-23

## 1. 今日速览

今日 NanoClaw 保持高强度开发节奏：24 小时内 PR 更新 27 条（待合并 16、已合并/关闭 11），Issues 更新 3 条（1 新开/活跃、2 关闭），无新版本发布。主线活动集中在 **gateway / Iron Proxy 凭据体系重构**（#3815–#3818 系列）与 **update-nanoclaw 更新流程修复**两条战线，前者多条 PR 仍处 OPEN 状态，后者对应的 bug Issue #3869 今日已关闭。整体看，项目处于"大重构未收口 + 安装/更新链路补漏"的阶段，合并吞吐正常但待合并队列偏厚（16 条），健康度中性偏积极。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共有 11 条 PR 合并/关闭，主要推进方向：

- **更新流程修复闭环**：[PR #3750](https://github.com/nanocoai/nanoclaw/pull/3750)（fix(update): extract the whole scripts/ tree for the update controller）已关闭，直接对应 Issue #3869 中 `update-nanoclaw.ts prepare` 因 `git archive` 文件清单缺失 `scripts/provider-contract-verifier.ts` 而 `MODULE_NOT_FOUND` 崩溃的问题。
- **Codex 工具链升级链**：[PR #3866](https://github.com/nanocoai/nanoclaw/pull/3866)（等待 MCP server 启动后再开始首轮）、[PR #3867](https://github.com/nanocoai/nanoclaw/pull/3867)（将 `@openai/codex` 从 0.146.0 固定到 0.155.1）均已关闭，后者依赖前者先合并。
- **Agent 容器版本推进**：[PR #3868](https://github.com/nanocoai/nanoclaw/pull/3868) 关闭，将容器内 Claude Code 升级到 2.1.280、Agent SDK 升级到 0.3.280，并处理了自 2.1.267 起会话 system prompt 记录方式变化导致 resume 静默失败的问题。
- **Iron Proxy 兼容性补丁**：[PR #3872](https://github.com/nanocoai/nanoclaw/pull/3872) 关闭，修复 codex 0.155.1 经 Iron Proxy 时 WebSocket upgrade 被拒后的 401 / token refresh 400 问题。
- **Gateway 选择与配对**：[PR #3818](https://github.com/nanocoai/nanoclaw/pull/3818)（setup 阶段选择 gateway 而不改变 provider 登录）与 [PR #3494](https://github.com/nanocoai/nanoclaw/pull/3494)（Build Remote Agent `gbr/1` 手机配对适配器）已关闭。

综上，今日进展以"修漏 + 依赖版本对齐"为主，核心 gateway 架构重构（#3815/#3816/#3817）仍待合并，属于阶段性推进而非版本级跃迁。

## 4. 社区热点

- [Issue #3732](https://github.com/nanocoai/nanoclaw/issues/3732) **[OPEN]** — "Transcript rotation never runs for tasks that keep their container alive"，自 2026-09-07 起持续更新至今日，1 条评论。指出 `maybeRotateContinuation()` 仅在 `runPollLoop()` 中调用，即每个容器启动只执行一次，导致周期短于 30 分钟 idle 上限的定时任务长期不断轮转 transcript。典型的"长生命周期容器资源泄漏"诉求，且横跨两周仍未关闭。
- [PR #3503](https://github.com/nanocoai/nanoclaw/pull/3503) **[OPEN]** — "run agent sessions on Apple container instead of Docker (macOS)"，自 2026-08-24 延续至今并持续更新。每个会话使用独立 microVM 而非共享内核命名空间，反映 macOS 用户对更强隔离与平台原生运行时的需求。
- [Issue #3869](https://github.com/nanocoai/nanoclaw/issues/3869) **[CLOSED]** — 今日关闭的 update-nanoclaw 崩溃问题（1 条评论），当日即有对应修复路径。
- [PR #3873](https://github.com/nanocoai/nanoclaw/pull/3873) **[OPEN]** — 今日新开，修复 cutover 需等待最多 5 分钟轮询 `docker ps --filter label=nanoclaw-install=<slug>` 的问题，改变为直接停止本安装的容器。

热点整体指向两类诉求：**对外更新/切换流程的可靠性**，以及 **容器生命周期与隔离模型的精细化**。

## 5. Bug 与稳定性

按严重程度排列：

1. **[高] Issue #3869** — `/update-nanoclaw` 的 controller archive 清单缺少传递依赖，`prepare` 阶段以 `MODULE_NOT_FOUND` 崩溃（#3825 head）。**已有 fix PR**：[#3750](https://github.com/nanocoai/nanoclaw/pull/3750) 已关闭（提取整个 `scripts/` 树）。
2. **[高] Issue #3732** — 容器保活场景下 transcript rotation 永不执行，`maybeRotateContinuation()` 每容器启动仅调用一次。**状态：OPEN，暂无明确 fix PR**，需重点关注。
3. **[中] Issue #3862** — Iron Proxy 下 Codex 设备配对在全新 public-wizard 流程中无法 vault 登录（wizard 进程内 provider-contracts barrel 陈旧），影响 commit `290aa68` / #3825，Linux 宿主。**已关闭**；相关修复见 [#3872](https://github.com/nanocoai/nanoclaw/pull/3872)（已关闭）。
4. **[中] PR #3873** — cutover 阶段在 idle agent 容器运行时最长轮询 5 分钟。**已有待合并 fix PR**。
5. **[中] PR #3868** — Claude Code 自 2.1.267 起会话 system prompt 记录方式变化，静默破坏 resumed agents。**该 PR 已关闭**（修复随版本升级一并处理）。

## 6. 功能请求与路线图信号

- **Apple Container 运行时（macOS）**：[PR #3503](https://github.com/nanocoai/nanoclaw/pull/3503)，microVM 级隔离替代 Docker 共享内核命名空间，OPEN 已逾一月，是明确的平台化路线信号。
- **Gateway 体系重构（一系列）**：
  - [PR #3816](https://github.com/nanocoai/nanoclaw/pull/3816) — 将 OneCLI 抽为可安装 skill；
  - [PR #3817](https://github.com/nanocoai/nanoclaw/pull/3817) — 新增 Iron Proxy gateway skill（OneCLI 保持首选/默认，已有安装保留原 gateway）；
  - [PR #3815](https://github.com/nanocoai/nanoclaw/pull/3815) — 集中化 credential gateway 契约与人工审批生命周期；
  - [PR #3818](https://github.com/nanocoai/nanoclaw/pull/3818) — setup 阶段暴露 gateway 选择（已关闭）。
  这四者构成同一重构批次，若收口，很可能成为下一版本的主体变更。
- **手机端配对**：[PR #3494](https://github.com/nanocoai/nanoclaw/pull/3494) 的 `gbr/1` Build Remote Agent 适配器（QR + 8 位码），已关闭，属远程观测类能力。
- **MCP 策略与路由**：[PR #3551](https://github.com/nanocoai/nanoclaw/pull/3551)（按 group 强制 MCP 策略 + OneCLI gateway 路由）、[PR #3552](https://github.com/nanocoai/nanoclaw/pull/3552)（Codex 在 OneCLI 后仅允许 MCP），OPEN 已久，属安全/策略收敛方向。

## 7. 用户反馈摘要

- **更新链路脆弱**（#3869）：用户 bgao 反馈 `update-nanoclaw` 的 `git archive` 采用固定文件清单，上游 controller 新增的 import 未被覆盖即崩溃——反映"清单式打包"在快速演进的代码库中易失配，用户期望更新流程对上游变更更鲁棒。
- **长驻容器行为不符预期**（#3732，用户 TO-maschenborn，v2.1.53）：复发周期短于宿主 30 分钟 idle 上限的定时任务会保持容器存活，而 transcript rotation 仅在容器启动时触发一次，用户实际遭遇的是长期运行下的 transcript 无限增长。
- **新装向导中的 provider 契约陈旧**（#3862，用户 glifocat）：全新安装路径下 Codex 设备配对无法完成登录 vault，且该问题被标注在 #3825 head 与其所在的 #3817/#3818 gateway-seam 栈上——说明 gateway 重构期间的新装体验存在回归风险，用户对新装可用性敏感。
- **依赖版本落后**（#3867）：`/add-codex` 中的 Codex CLI 固定在 0.146.0，"落后两个月、18 个 release"，且自 0.147.0 起 MCP server 仅约 1 秒启动窗口导致首轮失败（#3866）——用户对工具链新鲜度与启动时序稳定性有明确诉求。

## 8. 待处理积压

以下条目已持续多日乃至数周未收口，建议维护者优先关注：

- [PR #3503](https://github.com/nanocoai/nanoclaw/pull/3503)（创建 2026-08-24，OPEN）— Apple Container 支持，跨月未决。
- [PR #3551](https://github.com/nanocoai/nanoclaw/pull/3551)（2026-08-26）、[PR #3552](https://github.com/nanocoai/nanoclaw/pull/3552)（2026-08-26）— 两项 MCP 策略/路由修复，均 OPEN 近一个月。
- [PR #3494](https://github.com/nanocoai/nanoclaw/pull/3494)（2026-08-23）— 手机配对适配器，今日刚关闭，可确认是否按预期落地。
- [Issue #3732](https://github.com/nanocoai/nanoclaw/issues/3732)（2026-09-07，OPEN）— 长驻容器 transcript rotation 缺陷，已逾两周且评论仅 1 条，尚无 fix PR。
- [PR #3815](https://github.com/nanocoai/nanoclaw/pull/3815)、[#3816](https://github.com/nanocoai/nanoclaw/pull/3816)、[#3817](https://github.com/nanocoai/nanoclaw/pull/3817)（均 2026-09-15，OPEN）— gateway 重构主体，决定后续版本形态，但已积压 8 天，且其引发的 #3862、#3872 等回归已显现，建议尽快评估合入顺序（#3818 已关闭可作参考）。

**整体健康度判断**：合并吞吐与响应速度正常（多条当日开、当日关），但待合并队列 16 条且含跨月 PR，重构批次未收口期间持续产生外围回归，是当前主要风险点。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-09-23

## 1. 今日速览

过去 24 小时 IronClaw 无新版本发布、无 Issue 更新，全部活动集中在 Pull Request 层面：3 条 PR 均处于待合并状态（#8108、#8092、#8107），合并/关闭数为 0。其中 2 条为当日新建（#8108、#8107），1 条为长期挂起的 WebUI 修复（#8092，创建于 2026-09-10，更新于 2026-09-22）。整体活跃度**偏低**：无社区讨论数据（评论数与点赞数据均未采集到），项目今日处于“代码提交有输入、评审与合并无输出”的净积压状态。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日无 PR 被合并或关闭，项目未通过合并动作向前推进。

待合并的三条 PR 分属两个方向：
- **Host Runtime 能力扩展**：#8108 为 `builtin.time` 增加 `operation: "shift"`，支持带符号的 `seconds`/`minutes`/`hours`/`days`/`weeks` 合并为单个 `TimeDelta`，应用于 `input` 或（省略 input 时）当前时间，输出格式与 `now` 对齐（`iso`、`utc_iso` 等）。该 PR 同时涉及 typed input 相关问题。
- **WebUI 本地化与输入体验**：#8107 新增意大利语（`it`）区域，成为第 12 个 WebUI locale；#8092 修复聊天输入框的 IME 组合输入问题。

链接：
- https://github.com/nearai/ironclaw/pull/8108
- https://github.com/nearai/ironclaw/pull/8092
- https://github.com/nearai/ironclaw/pull/8107

## 4. 社区热点

今日**无 Issue 活动、无评论数/点赞数数据**，三条 PR 的评论数均未采集（显示为 `undefined`），点赞均为 0。因此不存在可量化的“社区热点”。

从 PR 内容可推测的相对关注点：
- #8107 的摘要标明其回应了 Issue #7855 的本地化请求，说明存在用户侧的 locale 需求源头（Issue #7855 本身不在今日数据中，无法核验其状态）。
- #8092 自 2026-09-10 创建至 2026-09-22 更新，跨度 12 天仍未合并，是当前积压时间最长的一条。

链接：
- https://github.com/nearai/ironclaw/pull/8107
- https://github.com/nearai/ironclaw/pull/8092

## 5. Bug 与稳定性

今日无新 Issue 报告，未出现崩溃或回归报告。以下为待合并 PR 中所针对的既有问题，按影响面排序：

| 严重程度 | 问题 | 位置 | 是否已有 fix PR |
|---|---|---|---|
| 中 | IME 组合输入在聊天输入框中被命令菜单处理与 Enter 发送逻辑打断；Safari 在 `isComposing` 为 false 时仍需以 keyCode 229 判断确认 Enter | WebUI 聊天输入框 | 是，#8092（OPEN） |
| 低–中 | `builtin.time` 缺少 `shift` 操作；存在 typed input 相关问题 | Host Runtime | 是，#8108（OPEN） |

注：IME 问题主要影响中日韩等使用输入法组合输入的用户，属于影响特定用户群体验、不涉及数据安全的功能性缺陷。#8092 的修复方案明确保留原生 IME 组合按键交由浏览器处理，并在 Safari 场景下保留紧随其后的正常 Enter，避免误触发发送——方案描述较完整，但该 PR 已挂起 12 天。

链接：
- https://github.com/nearai/ironclaw/pull/8092
- https://github.com/nearai/ironclaw/pull/8108

## 6. 功能请求与路线图信号

今日无新功能请求（Issues 更新为 0）。结合已有 PR，可识别的路线图信号有两条：

1. **本地化持续推进**：#8107 使 `it` 成为第 12 个 WebUI locale，其摘要特别强调 `it.ts` 承载了**完整英文 key 并集**——即 `en.ts` 加上两个延迟注册的 sidecar 包（`device-link-translations.ts`、`inspector-translations.ts`）。这说明项目在扩展语言的同时对翻译 key 完整性有明确约束，后续新增 locale 很可能沿用同一模式。
2. **内建工具能力增强**：#8108 对 `builtin.time` 的 `shift` 扩展属于运行时基础能力的补齐，且输出结构与 `now` 对齐（`iso`、`utc_iso` 等），暗示团队在保持内建工具输出一致性的前提下做增量扩展。

上述两条均为已提交 PR 的方向，是否进入下一个版本取决于合并节奏——而今日合并数为 0，无法从数据判断目标版本。

链接：
- https://github.com/nearai/ironclaw/pull/8107
- https://github.com/nearai/ironclaw/pull/8108

## 7. 用户反馈摘要

今日无 Issue 评论数据可供提炼，无法呈现真实用户痛点、使用场景或满意度表述。

唯一可间接引用的用户信号来自 #8107 摘要中提到的 Issue #7855（意大利语 locale 请求）。该请求表明存在非英语用户群体希望获得母语界面，属于明确的本地化诉求。除此之外，无更多来自用户侧的一手反馈数据。

链接：
- https://github.com/nearai/ironclaw/pull/8107

## 8. 待处理积压

| 项目 | 创建日期 | 已挂起 | 状态 |
|---|---|---|---|
| https://github.com/nearai/ironclaw/pull/8092 | 2026-09-10 | 13 天 | OPEN，更新于 2026-09-22 |

#8092 是当前最需关注的积压项：它是今日唯一一条“非当日新建”的 PR，修复的是影响 IME 用户的实际可用性问题，且已跨过一次更新仍未合并，建议维护者优先安排评审。相比之下 #8107、#8108 均为 2026-09-22 当日新建，处于正常评审窗口内，暂不构成积压风险。

此外需提示：今日 Issues 更新为 0，若这一状态持续，可能意味着新问题未被提交，也可能意味着社区反馈渠道活跃度下降——仅凭单日数据无法区分，建议结合后续数日趋势观察。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-23

## 1. 今日速览

项目今日处于**高强度开发但零社区交互**的状态：24 小时内无任何 Issue 新建、活跃或关闭，讨论侧完全静默；但 PR 通道极为繁忙，11 条 PR 更新中 9 条已合并/关闭、2 条待合并，并伴随 1 个新版本 `2026.9.22` 发布。开发焦点集中在 OpenClaw 网关的启动容错与配置一致性、cowork 活动步骤渲染统一、以及订阅试用活动可见性扩展三条主线上。活跃度评估：**工程交付活跃度高，社区参与度低**，健康度整体稳定，但需关注 Issue 通道长期零输入是否意味着用户反馈入口失效或用户基数尚未形成讨论规模。

---

## 2. 版本发布

### LobsterAI 2026.9.22

Release 说明中列出的变更条目：

- `fix(im): restore native scheduled tasks and Feishu delivery` — 恢复原生定时任务与飞书投递能力（[PR #2737](https://github.com/netease-youdao/LobsterAI/pull/2737)）
- `fix(openclaw): recover Windows gateway exits and repair startup` — 修复 Windows 网关异常退出并修复启动流程（[PR #2737 相关条目对应链接](https://github.com/netease-youdao/LobsterAI/pull/2737)，release note 中该条链接被截断，未提供完整编号）

**破坏性变更**：Release 说明中未提及任何破坏性变更。
**迁移注意事项**：Release 说明中未提供迁移说明。

> 说明：Release 正文仅包含上述两条 `What's Changed`，其中第二条 PR 链接在提供的数据中被截断，无法确认完整 PR 编号，故不进行推断。

---

## 3. 项目进展

今日合并/关闭的 9 条 PR 中，以下为重点推进项：

**稳定性主线（OpenClaw 网关）**

- [PR #2754](https://github.com/netease-youdao/LobsterAI/pull/2754) `[CLOSED] fix(openclaw): 插件异常时降级启动并保留基础会话` — 解决 OpenClaw 8.1 在插件升级或校验失败时把修复告警升级为整个网关启动拒绝、导致健康模型也无法对话的问题。移植上游全局插件可用性策略：隔离失败插件并保留配置，核心配置、迁移租约与状态迁移错误仍拒绝启动；以版本补丁回移上游 [#150016](https://github.com/openclaw/openclaw/pull/150016)、[#150312](https://github.com/openclaw/openclaw/pull/150312)。
- [PR #2748](https://github.com/netease-youdao/LobsterAI/pull/2748) `[CLOSED] fix(openclaw): raise Kimi K3 maxTokens and localize stream wrapper` — 修复 Kimi K3 在 1,048,576 token 上下文窗口下输出被限制在 8,192 token 的问题，提升 maxTokens；并以本地 `kimiK3StreamWrapper` 实现替换对 openclaw plugin-sdk `createMoonshotKimiK3Wrapper` 的依赖。

**前端体验主线（cowork）**

- [PR #2756](https://github.com/netease-youdao/LobsterAI/pull/2756) `[CLOSED] feat(cowork): unify activity step rendering with turn timing` — 以单一 `ActivityStepLine` 组件取代 row/detail 两套活动变体，覆盖 thinking、commands、reads/edits、search、web、media、agent、todo、schedule 步骤；引入 `leadingTurnStartTimestamp` 支持分页载入的会话窗口。
- [PR #2749](https://github.com/netease-youdao/LobsterAI/pull/2749) `[CLOSED] feat(cowork): stream live per-step turn progress and diff stats` — 在工具调用仍在生成时提供实时活动详情（`isGenerating`、`liveEditDiff`），通过 `ActivityGroupBlock`/`ToolCallGroup` 与共享的 `toolDiffStats` 辅助函数呈现。
- [PR #2750](https://github.com/netease-youdao/LobsterAI/pull/2750) `[CLOSED] feat: cowork turn progress polish` — cowork 轮次进度打磨。

**功能与商业化**

- [PR #2753](https://github.com/netease-youdao/LobsterAI/pull/2753) `[CLOSED] feat(decision-model): add experimental Jev decision model tool` — 新增 BYO-key 决策模型服务（配置、客户端、MCP 工具处理器、IPC 桥接及 OpenClaw `lobster-decision` 扩展），设置 UI 置于实验特性分组下。
- [PR #2751](https://github.com/netease-youdao/LobsterAI/pull/2751) `[CLOSED] feat(subscription-trial): broaden campaign visibility` — 将一分钱体验活动弹窗展示范围扩展至匿名、已订阅及团队身份用户，购买资格仍由服务端与 Portal 校验，并新增服务端对接文档。

**其他**

- [PR #2752](https://github.com/netease-youdao/LobsterAI/pull/2752) `[CLOSED] feat: update dsh runtime to 0.1.5 rc.3` — 运行时升级（无摘要内容）。
- [PR #980](https://github.com/netease-youdao/LobsterAI/pull/980) `[CLOSED] [stale] Fix Incorrect Modifier Key for Shortcuts on macOS-issue 973` — 一条自 2026-03-27 创建、标记 stale 的 macOS 快捷键修饰键修复 PR 于今日关闭。

**整体判断**：项目今日在"网关容错能力"与"cowork 交互体验"两个方向上有实质推进，均属修复与打磨性质，未出现新的大功能模块；OpenClaw 相关改动多为上游补丁回移，说明当前策略是与上游保持同步而非分叉演进。

---

## 4. 社区热点

**今日无讨论热点。** 数据中所有 PR 的评论数均为 `undefined`、👍 均为 0，Issues 为 0 条。评论与反应数据缺失，无法据此判断社区关注焦点。

按更新量和涉及面看，最值得关注的条目为：

- [PR #2755](https://github.com/netease-youdao/LobsterAI/pull/2755) `[OPEN] fix(openclaw): reconcile config application before starting tasks` — 标签覆盖 renderer、docs、main、openclaw、cowork 五大区域，是当前唯一涉及配置一致性的开放修复。
- [PR #2727](https://github.com/netease-youdao/LobsterAI/pull/2727) `[OPEN] fix(user_plugins): persist OpenClaw entry hooks across sync (#2654)` — 关联 Issue #2654，跨 store / sync / plugin manager 三条路径。

**诉求分析**：从 PR 描述可读出的真实工程诉求是——**配置与插件状态在重启、同步、断电恢复等场景下不可靠**（#2755 指出"旧流程把 `config.set` 保存成功当作运行时已应用"，#2727 指出网关重启会丢失 entry hook 配置）。这是当前代码库最集中的结构性痛点，但因 Issue 通道无数据，无法验证其对应的用户侧反馈规模。

---

## 5. Bug 与稳定性

按严重程度排列（严重度依据问题影响范围推断，均在 PR 描述中有明确问题陈述）：

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 高 | OpenClaw 8.1 插件升级/校验失败会升级为整个网关启动拒绝，健康模型也无法对话 | 已修复并关闭 | [#2754](https://github.com/netease-youdao/LobsterAI/pull/2754) |
| 高 | Windows 网关异常退出、启动流程损坏 | 已随 2026.9.22 发布修复 | Release 2026.9.22（release note 中 PR 链接被截断） |
| 中 | 代理端口或模型配置更新后，新任务仍使用旧配置（`config.set` 保存成功被误认为已应用） | 待合并 | [#2755](https://github.com/netease-youdao/LobsterAI/pull/2755) |
| 中 | 原生定时任务与飞书投递失效 | 已随 2026.9.22 发布修复 | [PR #2737](https://github.com/netease-youdao/LobsterAI/pull/2737) |
| 中 | 网关重启后 OpenClaw entry hook 配置丢失 | 待合并 | [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) |
| 低 | Kimi K3 输出被限制在 8,192 token，与 1,048,576 上下文窗口不匹配 | 已修复并关闭 | [#2748](https://github.com/netease-youdao/LobsterAI/pull/2748) |
| 低 | macOS 快捷键修饰键错误（对应 issue 973） | 已关闭（stale） | [#980](https://github.com/netease-youdao/LobsterAI/pull/980) |

**回归风险点**：#2754 的降级启动策略与 #2755 的版本化 `config.apply` 放行条件，都改变了启动/放行的判定门槛，属于容易引入新边界问题的改动方向。今日无新增 Issue 报告，暂无回归证据。

---

## 6. 功能请求与路线图信号

今日**无用户提出的功能请求**（Issues 为 0 条）。可从已合并 PR 反推下一版本可能包含的能力：

- **决策模型工具（可能纳入下一版本）**：[PR #2753](https://github.com/netease-youdao/LobsterAI/pull/2753) 已合并，但 UI 明确置于"实验特性"分组下，属于 BYO-key 模式。判断：会随版本发布，但默认不暴露给普通用户。
- **cowork 实时步骤进度**：[PR #2749](https://github.com/netease-youdao/LobsterAI/pull/2749) 与 [PR #2756](https://github.com/netease-youdao/LobsterAI/pull/2756) 已合并，形成"实时流式进度 + 统一步骤渲染"的完整链路，下一版本大概率包含。
- **订阅试用活动扩面**：[PR #2751](https://github.com/netease-youdao/LobsterAI/pull/2751) 已合并，且新增了服务端对接文档，说明服务端接口可能同步上线。
- **配置一致性修复（大概率纳入）**：[PR #2755](https://github.com/netease-youdao/LobsterAI/pull/2755) 与 [PR #2727](https://github.com/netease-youdao/LobsterAI/pull/2727) 仍为 OPEN，若今日合并则进入下一版本，否则延后。

---

## 7. 用户反馈摘要

**今日无可提炼的用户反馈。** 过去 24 小时 Issues 更新为 0 条，无评论数据，PR 评论数亦为 `undefined`。

无法从本次数据中得出用户痛点、使用场景或满意度结论。唯一的间接信号来自 PR 作者对问题成因的描述（配置保存与运行时应用状态不一致、网关重启丢失插件钩子），但这属于开发者视角的技术判断，不等同于用户反馈，故不在此处归因于用户。

---

## 8. 待处理积压

**长期未响应的 PR：**

- [PR #980](https://github.com/netease-youdao/LobsterAI/pull/980) — `Fix Incorrect Modifier Key for Shortcuts on macOS-issue 973`，作者 blackberrier，创建于 **2026-03-27**，更新于 2026-09-23，标签含 `[stale]`。挂起近 6 个月后于今日关闭。建议维护者复盘：该修复对应 issue 973 的 macOS 快捷键问题，是否已由其他改动覆盖，或应重新提交。

**当前仍开放的 PR：**

- [PR #2755](https://github.com/netease-youdao/LobsterAI/pull/2755) — 创建于 2026-09-23，涉及配置一致性的核心修复，影响面覆盖 5 个区域，建议优先评审。
- [PR #2727](https://github.com/netease-youdao/LobsterAI/pull/2727) — 创建于 2026-09-20，更新于 2026-09-22，关联 Issue #2654，涉及 SQLite 持久化与磁盘同步重写，已挂起 3 天。

**结构性提醒：** Issues 通道连续零更新，意味着既无新问题上报也无存量问题清理。结合 PR #980 长达 6 个月的 stale 周期，建议维护者核查 Issue 与 PR 的响应 SLA，以及用户反馈入口是否畅通。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报（2026-09-23）

## 1. 今日速览

Moltis 今日整体活跃度处于低位：过去 24 小时无新版本发布，无 Issue 新开、活跃或关闭，无 PR 合并或关闭。唯一动态是一项待合并的依赖升级 PR（#1284），由 Dependabot 自动提交。从数据看，项目今日没有功能性推进，社区讨论侧无信号。项目处于维护性静默状态，无异常波动迹象，但也缺乏可见的开发节奏，建议结合更长周期数据判断健康度。

## 2. 版本发布

今日无新版本发布，本部分略。

## 3. 项目进展

今日无 PR 合并或关闭，项目在功能层面没有可见推进。唯一的待合并 PR 为：

- **PR #1284** [OPEN] chore(deps): bump wasmtime-wasi from 36.0.9 to 36.0.11（作者：dependabot[bot]，创建/更新于 2026-09-22）
  https://github.com/moltis-org/moltis/pull/1284

该 PR 属于 cargo 依赖组的常规升级，将 `wasmtime-wasi` 从 36.0.9 升至 36.0.11，来源项目为 bytecodealliance/wasmtime。截至今日仍处于开放待合并状态，尚未对主干产生实际影响。

## 4. 社区热点

今日无 Issues 更新；唯一 PR #1284 的评论数据未提供（显示为 undefined），点 👍 数为 0，不构成社区讨论热点。当前无任何可识别的用户讨论信号。

## 5. Bug 与稳定性

今日无新报告的 Bug、崩溃或回归问题，数据集中无相关 Issue。稳定性风险侧唯一可关注项是待合并的 `wasmtime-wasi` 依赖升级（PR #1284），该升级涉及 WASI 相关运行时组件，属于潜在的稳定性与兼容性相关变更，但本数据未提供其 release notes 的具体内容，无法评估影响范围，需维护者审阅后判断。

## 6. 功能请求与路线图信号

今日无用户提出新功能需求，无 Issues 记录。结合已有 PR 判断：唯一在途的 PR #1284 为依赖维护性质，不含功能语义，因此无法从中推断下一版本的功能方向。路线图信号今日为空。

## 7. 用户反馈摘要

今日无 Issues 评论数据，无法提炼用户痛点、使用场景或满意度反馈。本部分今日无内容可报告。

## 8. 待处理积压

数据集中仅有一条待处理项：

- **PR #1284** [OPEN]（创建于 2026-09-22，更新于 2026-09-22，👍 0）
  https://github.com/moltis-org/moltis/pull/1284
  仅积压 1 天，尚不构成长期未响应问题，但作为当前唯一的待合并项，建议维护者优先审阅以保持依赖时效性与 CI 绿灯状态。

> 说明：本日报仅基于所提供的 2026-09-23 GitHub 数据快照生成，未包含历史长周期数据，故无法评估“长期未响应”类积压项，也无从对项目健康度做趋势判断。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报（2026-09-23）

## 1. 今日速览

今日 CoPaw 保持高强度维护节奏：过去 24 小时内 Issues 更新 34 条（新开/活跃 16、关闭 18），PR 更新 21 条（待合并 12、合并/关闭 9），**关闭量略高于新开量，积压呈收缩态势**。无新版本发布，但围绕 v2.2.x 的上下文管理、存储后端、Console 会话持久化等方向的修复与功能 PR 密集推进，其中单元测试覆盖率库（#7941）将 `src/qwenpaw` 语句覆盖率从 70.51% 提升至 73.79%。社区讨论热度集中在多租户 Hub 的路线图征集（#7318，32 条评论）与一系列上下文/工具结果治理类 Bug。整体健康度良好：处理吞吐稳定，但多个与上下文裁剪、会话消费者卡死相关的**会话级静默失效问题**仍处于 OPEN 状态，需持续关注。

## 2. 版本发布

今日无新版本发布（Releases 为 0）。社区讨论中提及的 v2.2.0 / v2.2.2-beta 系列均为既存版本状态的背景信息，非今日新增发布。

## 3. 项目进展

今日合并/关闭的重要 PR（9 条合并/关闭中的关键项）：

- **[#7941] test(unit): make the batch-3 lock and portability tests cross-platform**（已关闭）— 单元测试覆盖冲刺第三批，新增 **47 个测试文件、2720 个用例**，将 `src/qwenpaw` 语句覆盖率从 **70.51% 提升至 73.79%（+3.28pp，+4200 条语句覆盖）**。这是今日对项目质量基座推进最实质的一项。
  https://github.com/agentscope-ai/CoPaw/pull/7941
- **[#7409] fix(agents): drop empty assistant text blocks**（已关闭）— 修复模型把全部补全 token 用于推理后产生空 `TextBlock(text="")` 并被持久化的问题，作用于 Issue #7402 描述的 Ark Responses API 400 报错链路。
  https://github.com/agentscope-ai/CoPaw/pull/7409
- **[#7563] fix(chat): distinguish model errors from transport failures**（已关闭）— 移除发送前的阻塞式模型检查，仅在后端明确返回 `MODEL_NOT_CONFIGURED` 时提示配置，保留网络/超时/鉴权/5xx 的独立语义。
  https://github.com/agentscope-ai/CoPaw/pull/7563
- **[#7927] fix(web): replace html2text with markdownify**（已关闭）— 将 `web_fetch` 的 HTML 转换依赖从 GPL-3.0-or-later 的 `html2text` 替换为 MIT 许可的 `markdownify`，属许可证合规层面的重要清理。
  https://github.com/agentscope-ai/CoPaw/pull/7927
- **[#7952] fix(hub): distinguish invitation redemption failure reasons**（已关闭）— 将 `InvitationService.redeem()` 中被合并为单一 `PermissionError` 的五类失败原因拆分，改善运维可诊断性。
  https://github.com/agentscope-ai/CoPaw/pull/7952
- **[#7940] feat(console): refine sidebar interactions and persist avatars**（已关闭）、**[#7955] docs(website): add download provenance and usage policy**（已关闭）。

**整体判断**：今日项目前进主要集中在"质量与合规"（测试覆盖、许可证、错误语义细化）三条线上，面向新能力的 PR（如 #7931 会话持久化、#7954 异步存储后端）尚处于 OPEN 待审状态。

## 4. 社区热点

- **[#7318] QwenPaw Hub 多租户版路线图征集**（OPEN，32 条评论，👍4，更新 09-23）
  项目方在 2.2.0 推出多租户 Hub 后主动向社区征集下一步方向，并关联早期多用户/管理端需求（如 #2324）。这是今日评论量最高的议题，反映**从"个人助手"向"团队部署"转型**是社区最集中的诉求。
  https://github.com/agentscope-ai/CoPaw/issues/7318
- **[#7853] ToolResultPruner 跳过媒体块导致 base64 无界累积**（OPEN，7 条评论）
  `prune_output` 仅处理 `type=="text"`，`view_image` 写入的不可变 base64 数据块永不裁剪，持续撑爆模型上下文。作者描述清晰、影响面广，是当前最受关注的技术 Bug 之一。
  https://github.com/agentscope-ai/CoPaw/issues/7853
- **[#2710] 定时任务完成后本地推送不显示**（已关闭，7 条评论）
  长期 Issue 于今日关闭，用户反馈"接口推送了消息但未被提示"。
  https://github.com/agentscope-ai/CoPaw/issues/2710
- **[#7576] RetryChatModel 硬编码 32768 context_size 回退**（已关闭，7 条评论）
  影响 v2.1.0–v2.2.0 全系列已发布版本的上下文适配问题，今日关闭。
  https://github.com/agentscope-ai/CoPaw/issues/7576

**诉求分析**：热点同时指向两条主线——**多租户/团队协作能力**（#7318）与**上下文窗口治理**（#7853、#7628、#7733、#7836）。后者在今日榜单中密集出现，说明长任务场景下的上下文管理已成为用户最痛的工程问题。

## 5. Bug 与稳定性

按严重程度排列（🔴 高 / 🟠 中 / 🟡 低）：

| 级别 | Issue | 状态 | 是否有 fix PR |
|---|---|---|---|
| 🔴 | **[#7534] 飞书会话 queue consumer 长驻卡死致会话静默无响应**（OPEN，5 评论）— 高优先级（priority=10）路径处理后 consumer 不再拉取、不崩溃、队列永不空，同会话新消息无法新建消费者。会话级静默失效，生产风险高。 | OPEN | 未见对应 PR |
| 🔴 | **[#7853] ToolResultPruner 跳过媒体块，base64 无界累积**（OPEN，7 评论） | OPEN | 未见对应 PR |
| 🟠 | **[#7628] Context compaction 仍可超出完整 provider 请求预算**（OPEN，5 评论，环境 2.2.0b7）— 触发与终态预算仅基于可见上下文而非完整请求。 | OPEN | 未见对应 PR |
| 🟠 | **[#7836] scroll 驱逐丢弃位于工具密集区间内的用户轮次**（OPEN，3 评论，👍1）— 活跃窗口丢失请求而 history.db 仍保留。 | OPEN | 未见对应 PR |
| 🟠 | **[#7715] Daily Paper 在 arxiv.org 不可达时静默失败**（OPEN，5 评论）— 无代理/端点配置，错误信息掩盖真实原因。 | OPEN | 未见对应 PR |
| 🟠 | **[#7767] 护栏插件构建的多个 Bug**（OPEN，3 评论）— Console 附件陈旧 blob、一次性 cron 误触发丢失、Console tail-drop、`on_acting` 从不触发。 | OPEN | 未见对应 PR |
| 🟡 | **[#7856] qwenpaw-pet 0.1.1 丢弃 `actor` 参数导致工具审批失效**（已关闭，4 评论） | CLOSED | 已解决 |
| 🟡 | **[#7402] 空 assistant output_text 污染会话历史**（已关闭，3 评论） | CLOSED | ✅ PR #7409 |
| 🟡 | **[#7947] `send_file_to_user` 在 Console 中不渲染文件卡片**（已关闭，3 评论） | CLOSED | 已解决 |
| 🟡 | **[#3037] 飞书频道 `filter_thinking`/`filter_tool_messages` 配置不生效**（已关闭，6 评论） | CLOSED | 已解决 |
| 🟡 | **[#2335] 飞书 WebSocket 断连无自动重连**（已关闭，3 评论） | CLOSED | 已解决 |
| 🟡 | **[#1010]、[#2869]、[#2841]、[#2414]、[#2710]、[#7576]** 等历史 Issue 今日集中关闭 | CLOSED | — |

**趋势观察**：今日关闭的 Bug 多为长期积压项（创建于 3–9 月），而**新报告的会话级静默失效与上下文治理问题基本无 fix PR 挂接**，是维护者下一步需优先补位的区域。飞书频道相关 Bug 今日集中关闭（#3037、#2335、#2841、#2414），该通道的稳定性历史欠账正在被系统性清理。

## 6. 功能请求与路线图信号

结合 OPEN PR 与功能类 Issue，以下需求具备较高落地概率：

- **会话转录持久化与分页** — PR **[#7931] feat(chat): add durable paginated transcript history**（OPEN），引入 per-session SQLite 转录存储、稳定游标与删除清理。与 Issue #7836 反映的"活跃窗口丢请求而 history.db 保留"问题方向一致，可能进入下一版本。
  https://github.com/agentscope-ai/CoPaw/pull/7931
- **异步存储后端与迁移基础** — PR **[#7954] feat(storage): add async backend contracts and migration foundation**（OPEN），针对多实例共享 NFS 上 SQLite 的数据库错误与连续性丢失问题，引入异步 SQLite/PostgreSQL 存储契约。与 #7318 的多租户方向强相关。
  https://github.com/agentscope-ai/CoPaw/pull/7954
- **Console 多标签终端** — PR **[#7861] feat(console): add authenticated multi-tab chat terminal**（OPEN），在共享聊天/文件工作区下新增懒加载 xterm 终端。
  https://github.com/agentscope-ai/CoPaw/pull/7861
- **OpenViking 记忆插件** — PR **[#7613] feat(memory): add OpenViking memory plugin**（OPEN，first-time-contributor，Under Review），提供自动召回、完整轮次持久化与 `memory_search` 工具，含中英文 Console 配置。
  https://github.com/agentscope-ai/CoPaw/pull/7613
- **Agent 自主上下文管理** — Issue **[#7733]**（OPEN，4 评论）提出由 agent 参与驱逐时机决策，与 #7628、#7836 构成同一主题簇，若被采纳将是上下文子系统的架构级演进。
  https://github.com/agentscope-ai/CoPaw/issues/7733
- **多 LLM 可配置化** — Issue **[#1010]**（今日 CLOSED）关于按任务选用不同 LLM 的诉求获得闭合，代表该方向已有落地路径。
  https://github.com/agentscope-ai/CoPaw/issues/1010

## 7. 用户反馈摘要

- **真实痛点集中在"静默失效"**：用户反复描述"运行数小时后突然静默卡死，无 Traceback、无提示"（#7534），以及"每天失败但只报 misleading 的 no returned content"（#7715）。可观测性与错误传播链条不足，是用户最不满的共性体验问题。
- **多用户/团队部署是明确场景**：#7318 中社区"反复要求更好的团队运行方式"，并关联早期多用户与管理员端需求（#2324），说明采用场景已从单人桌面扩展到协作环境。
- **成本与性能平衡诉求**：#1010 提出"不同规模/类型的 LLM 擅长的工作不同，单一模型难以兼顾，配置多模型也能更好平衡性能与成本"，代表进阶用户对模型路由的期待。
- **上下文管理的可预测性**：#7733 强调"agent 是唯一知道哪部分工作仍有效的角色，却对驱逐既无决定权也无预警"；#7836 进一步展示用户实际遇到的"实时窗口丢失请求"后果。
- **配置正确但不生效的挫败**：#3037 反映即使正确配置 `filter_thinking`/`filter_tool_messages`，思考过程与工具细节仍输出到飞书会话，体现配置语义与实现的一致性缺口（已关闭）。

## 8. 待处理积压

以下为创建时间较早、影响重要但今日仍处 OPEN 且无 fix PR 挂接的条目：

- **[#7377]**（创建 2026-08-28，6 评论）— Console 中 Agent Loop mode 配置在任务运行后不持久化，自动回退默认模式。已积压近一个月。
  https://github.com/agentscope-ai/CoPaw/issues/7377
- **[#7534]**（创建 2026-09-03，5 评论）— 飞书会话消费者卡死致静默无响应，属高严重度且无对应 PR。
  https://github.com/agentscope-ai/CoPaw/issues/7534
- **[#7628]**（创建 2026-09-08，5 评论）— 上下文压缩预算与实际 provider 请求不一致。
  https://github.com/agentscope-ai/CoPaw/issues/7628
- **[#7715]**（创建 2026-09-12，5 评论）— Daily Paper 静默失败，缺代理/端点配置。
  https://github.com/agentscope-ai/CoPaw/issues/7715
- **[#7767]**（创建 2026-09-14，3 评论）— 护栏插件构建的多项 Bug 合并报告，含 `on_acting` 从不触发。
  https://github.com/agentscope-ai/CoPaw/issues/7767
- **[#7613]**（PR，创建 2026-09-07，first-time-contributor，Under Review）— OpenViking 记忆插件等待审核，首次贡献者 PR 长期悬置可能影响新贡献者体验。
  https://github.com/agentscope-ai/CoPaw/pull/7613

**维护提示**：待处理队列已明显向"上下文/会话生命周期"主题聚集（#7534、#7628、#7733、#7836），建议以单一负责人或工作组形式集中处理，避免零散修复导致语义不一致；同时 #7613 作为首次贡献者 PR 已挂起超过两周，建议优先给出审核反馈。

---
*数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 公开数据，统计窗口 2026-09-22 至 2026-09-23。所有指标均取自所提供数据，未作外推。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-23

## 1. 今日速览

过去 24 小时 ZeroClaw 保持高位活跃：9 条 Issue 全部为新开或活跃状态，0 条关闭；39 条 PR 更新中 37 条待合并、仅 2 条合并/关闭。当日讨论焦点集中在**渠道（WhatsApp）与运行时权限/安全两个方向**——WhatsApp 语音与 Markdown 渲染相关 Issue 占新增近半，而安全侧出现两条 S0 级问题（无审批的无人值守智能体回合、高风险命令豁免）。合并侧几乎停滞，但待合并 PR 中多条属于插件/安全/CI 的长期堆叠（stacked）分支，说明代码在累积但未进入主干。**健康度评估：需求与缺陷发现速度高于修复落地速度，积压风险上升。**

## 2. 版本发布

无（过去 24 小时无新 Releases）。

## 3. 项目进展

今日仅有 2 条 PR 被合并/关闭，且数据未提供对应条目，暂无可见的重大功能推进。

值得关注的是待合并队列中的高价值条目（均于 2026-09-23 仍有更新）：

- PR #10746 — 插件安装时对 WASM 组件做 load-verify 校验宿主 WIT ABI，并为 egress 拒绝提供修复提示（`enhancement, runtime:wasm, topic:plugins`）。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10746)
- PR #10813 — 修复 headless SOP 步骤回合可驱动自身运行的问题（`topic:sop`）。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10813)
- PR #10836 — cron 声明迁移时同步存储的 owner。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10836)
- PR #10599 — 记录 cron 未执行状态，使静默失败可见。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10599)
- PR #9971 — Discord 成员按角色而非仅用户 ID 授权。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9971)
- CI 类小改动：#11064（Windows task-owner 恢复测试并行化）、#11063（CodeQL Rust 扫描 runner label 固定、退役 `CI_USE_BLACKSMITH`）。[#11064](https://github.com/zeroclaw-labs/zeroclaw/pull/11064) · [#11063](https://github.com/zeroclaw-labs/zeroclaw/pull/11063)

整体看，当日主干推进幅度接近零，工程能量集中在评审队列中。

## 4. 社区热点

- **Issue #10922（5 条评论，当日最高）**— WhatsApp Web 在自动 TTS 排队时忽略 `suppress_voice`。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10922)
- **Issue #10968（3 条评论）**— 无人值守智能体回合（cron / heartbeat / headless SOP / spawn_subagent）不构建 ApprovalManager，导致风险画像的工具审批静默失效，标记 S0 与 `risk:high`。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10968)
- **Issue #10985（3 条评论）**— 从 Dashboard 发起的回合拿到的是新建渠道实例，渠道支撑的工具无法触达 session 绑定的渠道，`status:in-progress`。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10985)
- **Issue #11052（3 条评论）**— 请求为 WhatsApp 渲染 thematic breaks 与 setext headings。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11052)

背后诉求：一是 **WhatsApp Web 渠道的成熟度**——语音抑制、强制语音、Markdown 渲染等细粒度行为均未按文档语义生效，反映该渠道正被真实生产使用；二是**无人值守场景的安全边界**——用户对 agent 在无人监督下仍应受审批约束有明确预期。

## 5. Bug 与稳定性

按严重程度排列（均标注是否有可见 fix PR）：

| 级别 | Issue | 问题 | Fix PR |
|---|---|---|---|
| S0 | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 无人值守回合无 ApprovalManager，风险画像工具审批静默失效（cron/heartbeat/headless SOP/spawn_subagent） | 无直接对应；相关 SOP 修复见 PR #10813 |
| S0 | [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058) | `allowed_commands` 字面命中可豁免 `block_high_risk_commands`，高风险命令无审批、无日志执行 | 无 |
| S0 | [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | Markdown 记忆后端 `store()` 并发重叠时静默丢失条目（`status:accepted`） | 无 |
| S2 | [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | Dashboard 回合无法经渠道工具触达 session 绑定渠道（`status:in-progress`） | 无 |
| S2 | [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | WhatsApp Web 排队自动 TTS 时忽略 `suppress_voice` | 无 |
| S2 | [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) | WhatsApp Web 忽略 `force_voice`，`send_via` 无法路由到语音 | 无 |
| Medium | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | daemon 从不注册 channel-map factory，webhook/cron/SOP 回合无渠道可用 | 无 |

**结论：今日无任何 S0/S2 问题存在已确认的修复 PR，安全与数据完整性风险处于裸露状态。**

## 6. 功能请求与路线图信号

- **Issue #11053 — RFC：将知识图谱提升为一等智能体记忆层**。当前 `knowledge_graph.rs` 与 `knowledge` 工具定位为"工具而非记忆"，需智能体主动调用；提议改为记忆层。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11053)
  → 与 PR #10391（delegate 文件系统工具尊重目标自身 workspace）、PR #10746/#9584（插件能力与 egress 授予）同属"运行时能力边界重构"方向，但该 RFC 暂无对应实现 PR，短期内进入版本的可能性偏低。
- **Issue #11052 — WhatsApp Markdown 渲染增强**。该请求直接建立在 PR #10475（Markdown-to-WhatsApp 转换器）之上，属于对已合入能力的增量补齐，**最有可能被纳入下一版本**。[链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11052)
- **PR #8909 — 网关与 Dashboard 插件能力目录**（`topic:plugins, size:XL`），属于插件栈的一部分，需自底向上合并。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8909)

## 7. 用户反馈摘要

用户（含 agent 自动上报）反馈的核心痛点集中在三点：

1. **文档语义与实际行为不一致**：`suppress_voice`、`force_voice`、`allowed_commands` 均在文档中承诺了特定语义，但实际路径未遵守（#10922、#11059、#11058）。这类"静默失效"比显式报错更危险。
2. **部署形态与权限模型错配**：daemon 部署下渠道仅在两个入口可用（#11055），Dashboard 回合拿不到绑定渠道（#10985），cron/headless 场景丢失审批（#10968）——用户在多入口（webhook/cron/SOP/Dashboard）混用时的预期与现实脱节。
3. **数据可靠性**：记忆后端并发写入丢数据（#10797）被标注为"reported by agent"，说明是自动化观测发现的，而非人工报告。

满意面：暂无用户明确表达满意的评论数据。

## 8. 待处理积压

以下 PR 更新时间虽为 2026-09-23，但创建时间已过去 1–3 个月且仍处 `needs-author-action` / `parking-lot` / 长期开放状态，建议维护者优先推进或明确处置：

- **PR #9567**（创建 2026-07-30，56 天）— email 渠道 Cc/Bcc 收件人支持，基于 stacked 分支。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9567)
- **PR #8909**（创建 2026-07-09，76 天，`size:XL`）— 插件能力目录，插件栈底层依赖。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/8909)
- **PR #9584**（创建 2026-07-31，`needs-author-action`）— 插件安装/列举的 egress 授予仪式。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9584)
- **PR #10133**（创建 2026-08-19，`status:parking-lot`）— 运行时运维路径去除 30 处 panic 候选。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10133)
- **PR #10210**（创建 2026-08-21，`needs-author-action`）— agent-browser 子进程等待加 deadline 与 kill_on_drop。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/10210)
- **PR #9971**（创建 2026-08-13，`needs-author-action`）— Discord 角色授权。[链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9971)

> 注：以上 PR 摘要中均标注基础分支为 `master`，多条需按栈自底向上合并，积压部分源于栈式依赖而非单纯评审延迟。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*