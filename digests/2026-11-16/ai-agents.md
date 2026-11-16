# OpenClaw 生态日报 2026-11-16

> Issues: 382 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-16 20:31 UTC

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

# OpenClaw 项目动态日报 — 2026-11-16

## 1. 今日速览

项目今日维持高活跃度：过去24小时 382 条 Issue 更新（新开/活跃 261，关闭 121）、500 条 PR 更新（待合并 227，合并/关闭 273），并发布 2 个版本。合并/关闭 PR 数（273）略高于待合并量，表明维护吞吐基本覆盖新增流入，但待合并队列仍偏大。风险侧集中于 Gateway 与迁移/更新流程：多个 P0/P1 级崩溃、卡死与更新验证失败问题仍未关闭。社区讨论热度最高的 Issue 集中在插件加载阻塞、SQLite WAL 检查点与 macOS/Windows 更新失败，属于稳定性而非新功能诉求。

## 2. 版本发布

**v2026.11.4（稳定版）**
- 内容：220 commits、125 PR、90 contributors；官方同时提供 Release notes 与 changelog 两种格式（链接在原始说明中被截断）。
- 破坏性变更与迁移注意事项：所给材料中未提供，无法确认。

**v2026.11.5-beta.4（预发布）**
- 亮点：材料中 "Highlights" 章节为空。
- 变更：Telegram widgets — 将交互式 widget 渲染为 Telegram 消息（#196991，致谢 @obviyus）。
- 修复：Transcripts and attachments — 在并发数据库准备期间保持 transcript 读取可用，并释放已完成的 SQLite 读取器。
- 注：v2026.11.5-beta.3 在 Windows 上出现更新验证失败（见第 5 节 #199617），升级前需留意。

## 3. 项目进展

今日合并/关闭 PR 共 273 条，材料中明确列出的关闭项包括：
- PR #199109 [CLOSED] fix(signal)：修复含非英文字符或 `|` 的链接在 Signal 中被重复显示（编码副本加括号）的问题，关闭 #199107。
- PR #200242 [CLOSED] fix(auth)：修复身份路径查找迁移后 `main` 无法通过类型检查/打包的问题（自 9e66164c0ce 起）。
- Issue #166133 [CLOSED]：MCP tool_call 包装器将整型参数强制转为字符串的缺陷已关闭。
- Issue #171122、#167652、#137613、#128090、#165685 等转为关闭。

整体判断：今日合并以修复类为主（Signal 链接、构建修复、MCP 参数类型），另有 v2026.11.5 线针对 transcript/SQLite 读取器的稳定性修复落地；尚无明显的大型功能里程碑合入。

## 4. 社区热点

- **#160959 [OPEN, P0]** Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归）— 评论 **83**（今日最高）。插件生成捕获（#144252）引入的事件循环阻塞，影响启动等场景。https://github.com/openclaw/openclaw/issues/160959
- **#164294 [OPEN, P2]** Gateway 状态库 WAL 自动检查点从未完成，被进程内 reader 固定。评论 41。https://github.com/openclaw/openclaw/issues/164294
- **#191944 [OPEN, P2]** macOS 上 `gateway stop` 与 `--force` 均因 "Process ancestry could not be fully inspected" 失败。评论 34。https://github.com/openclaw/openclaw/issues/191944
- **#143017 [OPEN, P2]** Prompt-cache：持久会话重写前缀的五种方式，实测 21.3M cache-write tokens，基于 949 条线上捕获请求。评论 18。https://github.com/openclaw/openclaw/issues/143017
- **PR #200222 [OPEN, P2]** fix: 在慢文件系统上保持凭据诊断响应性（steipete，标注 ready for maintainer look）— 今日新开的高优先级修复。https://github.com/openclaw/openclaw/pull/200222

诉求分析：热点几乎全部指向 **运行时稳定性与可运维性**（事件循环阻塞、SQLite/WAL、进程与权限检查），而非功能扩展；同时 prompt-cache 成本类报告反映用户对 token 实际计费的高度关注。

## 5. Bug 与稳定性

按严重程度：

**P0 / 崩溃循环**
- #160959 Gateway 捕获大型外部插件时阻塞分钟级（P0, crash-loop）— 未见 fix PR。https://github.com/openclaw/openclaw/issues/160959
- #169844 Control UI 在 Windows 上更新 Gateway 卡在 "Activating"，Scheduled Task 被禁用且 gateway 停止（P0, crash-loop, ux-release-blocker）— 未见 fix PR。https://github.com/openclaw/openclaw/issues/169844

**P1**
- #163029 2026.9.7 仍在 turn 中途重载外部插件，主线程 40–70 s 停顿（尽管已含 #160658）— 未见 fix PR。https://github.com/openclaw/openclaw/issues/163029
- #140455 google-meet 2026.9.2 在现行 Meet 上 agent 语音失效，含 circular-JSON 通话内崩溃。https://github.com/openclaw/openclaw/issues/140455

**P2 / 更新与状态一致性问题**
- #197083 安装后 Doctor WAL 发布验证失败，2026.11.3 更新处于部分完成状态，且拒绝回滚（state-migrated-no-rollback）。https://github.com/openclaw/openclaw/issues/197083
- #199617 Windows 从 2026.11.5-beta.2 升级到 beta.3 两次失败，报 `gateway-stop-unverified`（今日活跃）。https://github.com/openclaw/openclaw/issues/199617
- #164294 WAL 自动检查点从未完成。https://github.com/openclaw/openclaw/issues/164294
- #191944 macOS gateway stop/stop --force 失败。https://github.com/openclaw/openclaw/issues/191944
- #172969 `registerCliBackend` 缺少 `modelProvider` 时被静默丢弃，错误表现为 "Invalid URL"。https://github.com/openclaw/openclaw/issues/172969
- #161158 `gateway restart` 对成功重启报失败但退出码为 0，60s 就绪预算硬编码不可配置。https://github.com/openclaw/openclaw/issues/161158
- #166964 请求方 authority 被撤销后子代理完成投递永久失败且无 revoke 原因日志。https://github.com/openclaw/openclaw/issues/166964

**关联修复 PR（今日）**
- #200222 凭据诊断在慢文件系统上冻结 Gateway — 待维护者审阅。https://github.com/openclaw/openclaw/pull/200222
- #200249 子代理结果在请求方 transcript 中的投递修复。https://github.com/openclaw/openclaw/pull/200249
- #200231 从已保存 origin facts 恢复子代理完成授权（P1, XL）。https://github.com/openclaw/openclaw/pull/200231
- #200250 exec 服务上限只统计真实服务。https://github.com/openclaw/openclaw/pull/200250

## 6. 功能请求与路线图信号

- **#138366** 允许内存槽拥有者驱动 Dreams 页面（在 `MemoryPluginCapability` 中增加 `dreaming` provider）— 与 #157827（REM 证据短期存储引用不一致）同属记忆子系统，方向一致但均需产品决策。https://github.com/openclaw/openclaw/issues/138366
- **#128090** Review 文件查看器增加 Markdown 渲染预览（👍 4，今日关闭）— 已关闭，是否纳入下版未知。https://github.com/openclaw/openclaw/issues/128090
- **#165685** 为 registry 判定不可续的 collector 提供机器可读 `reason`（今日关闭）。https://github.com/openclaw/openclaw/issues/165685
- 已开 PR 支持的新能力：**#197402** 在模板设置与新会话中推荐 agent 任务；**#141004** 将运行时 skill 使用观测写入审计日志；**#200234/#200235** Control UI 语音电平时间线与听写进度；**#198550** Tavily `baseUrl` 支持私有/内网主机（标注兼容性与安全边界风险）。综合看，下一版本更可能包含 UI/语音体验与审计可观测性类改动，而非记忆插件能力扩展。

## 7. 用户反馈摘要

- **更新/迁移体验是最大痛点**：Windows 与 macOS 用户反复报告更新卡死、验证失败、部分完成无法回滚（#169844、#199617、#197083、#191944），并伴随 "Doctor 报告已验证但 gateway 挂起"（#167652）的不一致。
- **性能感受直接**：大型插件导致 Gateway 启动被阻塞数分钟（#160959）、40–70 s 主线程停顿（#163029）、macOS 设置页在打开会话后变卡且深色主题下输入框不可见（#192667）。
- **可靠性细节**：上下文溢出预估器较计费值高估约 2.3–2.6 倍（#101929）；`memory_search` 在远程 embedding 卡住时 15s 挂起且无超时/重试配置（#136405）；CLI 后端上预压缩记忆刷新被禁用（#137613）。
- **诊断信息不足**：十六处调用点抛出同一字符串 "changed while starting work" 而无原因码（#127195）；子代理投递失败无撤销原因日志（#166964）— 用户明确要求可机器解析的错误信号。

## 8. 待处理积压

长期开放且今日仍无 fix PR 的重要项：
- **#114414** [P3] Dated TODO sweep（bot 生成）— 自 2026-07-27 起长期开启，列出过期 CI/TODO 项，建议清理。https://github.com/openclaw/openclaw/issues/114414
- **#101929** [P2] 上下文溢出预估器高估（2026-07-08 起），仅 1 👍。https://github.com/openclaw/openclaw/issues/101929
- **#118793** [P2] Claude CLI 会话限额错误不触发模型回退链（2026-08-03 起）。https://github.com/openclaw/openclaw/issues/118793
- **#127195** [P2] 16 个调用点无原因码（2026-08-21 起，需产品决策）。https://github.com/openclaw/openclaw/issues/127195
- **#136405** [P2] `memory_search` 无超时/重试（2026-09-02 起）。https://github.com/openclaw/openclaw/issues/136405
- **#160959 / #169844** 两个 P0 自 9 月底/10 月中持续开放，建议优先指派。另 227 条 PR 待合并，其中 #198961、#198966、#198944 等测试整合 PR 处于 HOLD（无合格替换），建议明确取舍以免长期占用评审带宽。

---
*说明：以上内容严格基于所提供的 OpenClaw GitHub 数据；未在材料中出现的破坏性变更、发布链接完整地址、PR 评论数等未作推断。*

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析（2026-11-16）

## 1. 生态全景

生态整体处于“高活跃、高摩擦”并存阶段：头部项目（OpenClaw、CoPaw、Hermes Agent、ZeroClaw、NanoClaw）单日 Issues+PR 更新量均在 40–500 条区间，管线充实，但合并吞吐普遍落后于提交速度。社区讨论重心已从“功能扩展”系统性地转向运行时稳定性、成本计量可信、静默失败可观测性三大议题。多个项目同时出现插件子系统、MCP 集成与上下文/成本预算的缺陷簇，说明生态在能力扩张后正进入基础工程偿还期。与此同时，PicoClaw、IronClaw 及多个“过去24小时无活动”项目（NullClaw、TinyClaw、Moltis、ZeptoClaw）形成明显的长尾静默层，生态分层显著。

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃 · 关闭） | PR（待合并 · 合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 261 · 121 | 227 · 273 | 2（v2026.11.4 稳定 + v2026.11.5-beta.4） | 高吞吐、吞吐基本覆盖流入；但 2 个 P0 长期未修，待合并队列偏大 |
| **ZeroClaw** | 14 · 0 | 47 · 3 | 0 | 提交远快于合入（47:3），依赖链阻塞合并，Windows 测试长期失败 |
| **NanoClaw** | 10 · 1 | 24 · 19 | 0 | 评审闭环良好，但 setup/add-onecli 一带出现静默失败病灶簇 |
| **CoPaw** | 28 · 15 | 31 · 12 | 0 | 关闭率 35%，但 4 条 2.3.0 高危回归无 fix PR，架构级 PR 积压 |
| **Hermes Agent** | 48 · 2 | 39 · 11 | 1（canary） | 报告累积快于关闭，跨平台连接与资源泄漏问题多 |
| **LobsterAI** | 2 · 0 | 10 · 6 | 1（2026.11.16） | 迭代稳定、安全响应及时（当日报当日 PR），stale 积压需注意 |
| **NanoBot** | 1 · 2 | 5 · 16 | 0 | 健康度良好，集中清理 7 周老 PR，CI 性能优化启动 |
| **IronClaw** | 1 · 0 | 0 · 0 | 0 | 代码合入为零，单条功能请求零响应 |
| **PicoClaw** | 0 · 0 | 2 · 2 | 0 | 维护/清理节奏，2 条低风险 PR 被 stale 阻塞 |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | — | — | — | 过去 24 小时无活动 |

## 3. OpenClaw 在生态中的定位

- **规模优势**：单日 PR 更新 500 条、Issue 更新 382 条，量级远超其他项目，维护吞吐（合并/关闭 273）已基本覆盖流入，是生态中唯一具备“高流入 + 高吞吐”双高特征的项目。
- **发布节奏**：当日同时发布稳定版与多个 beta（材料中提及 beta.3→beta.4），是表中唯一维持正规版本通道的项目，工程成熟度领先。
- **技术路线差异**：以 Gateway 为核心运行时、SQLite/WAL 状态库、外部插件捕获为架构支点；社区的痛点（#160959 插件捕获阻塞事件循环、#164294 WAL 检查点被 reader 固定）正是这一架构的代价——将复杂度集中到单一网关进程，换取统一运维面。
- **社区规模对比**：高讨论量 Issue 达 83 / 41 / 34 评论，远超 Hermes（最高 8）、CoPaw（最高 15）、ZeroClaw（最高 6），说明其用户基数与讨论深度处于生态第一梯队；Prompt-cache 成本类报告（#143017，基于 949 条线上请求、21.3M cache-write tokens）显示其用户中存在重度生产使用者。
- **相对短板**：两个 P0（#160959、#169844）自 9 月底/10 月中持续开放且无 fix PR，大项目“关键路径修复调度”压力可见。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **插件子系统稳定性** | OpenClaw（#160959 捕获阻塞、#163029 中途重载停顿）、CoPaw（#8764 SDK 1.1、#8469 MCP 插件化、#8431 Whisper 插件化）、ZeroClaw（#12216 多插件注册源、#12484 插件目录移除失败）、LobsterAI（#3102 插件归档解压超时、#3101 provider catalog 异步误用） | 插件加载/卸载不得阻塞主线程，生命周期由宿主统一管理，插件源需可扩展 |
| **成本计量与预算可控** | ZeroClaw（#11204 成本不入库、#11585 上限需重启、#12477 mode 被忽略）、OpenClaw（#143017 prompt-cache 重写前缀、#101929 上下文溢出预估高估 2.3–2.6 倍） | 成本必须准确落账、预算策略必须生效、超限后可恢复而非重启 |
| **静默失败 → 可观测性** | NanoClaw（#4415 报告已送达实为入队、#4408 退出码 0、#4364 队列丢消息告警）、Hermes（#156356 Feishu 静默失聪、#147208 Cloud 无日志、#120203 错误被吞）、CoPaw（#7709/#8762/#8711 定时任务静默失败）、OpenClaw（#166964 子代理投递失败无 revoke 原因、#127195 16 处无原因码） | 失败必须可见、可机器解析；拒绝“成功但实际未成功” |
| **跨平台（尤其 Windows）兼容** | OpenClaw（#169844、#199617 更新失败）、ZeroClaw（#12483/#12484 定时测试长期红）、NanoBot（#5925 Windows 换行）、Hermes（#156504 Windows Telegram、#148290 Vulkan mmap）、LobsterAI（#3102 macOS 解压超时） | 更新/执行/测试在 Windows 上反复失败，平台债务累积 |
| **MCP 集成健壮性** | NanoBot（#6680 慢 MCP 阻塞聊天、#5923 base64 误判）、Hermes（#155773 MCP 绑定 >30s 失败无回退）、OpenClaw（#166133 tool_call 整型转字符串已修）、CoPaw（#8469） | MCP 启动需隔离与超时，参数类型需严格 |
| **多 agent / 多 profile 资源治理** | Hermes（#146538 66 profile 元数据风暴、#146772 进程泄漏）、LobsterAI（#3105 dreaming 未按 agent 划分、#3104 系统会话游离）、NanoClaw（#4413 模块顺序依赖） | 规模扩大后出现状态归属不清与资源泄漏 |
| **认证与安全边界** | CoPaw（#8695 反代绕过认证、#7859 提示注入删技能）、LobsterAI（#3096 localfile 任意路径读取）、ZeroClaw（#12373/#12422 只写式凭据）、Hermes（#149872 正则误报、#152947 隐私分享） | 本地/自托管场景的认证绕过与文件协议作用域是共同风险点 |

## 5. 差异化定位分析

- **OpenClaw**：面向生产部署的“网关中心”型运行时；功能最全、社区最大、发布最规范，代价是架构复杂度与关键路径 P0 风险最高。目标用户为重度自托管与企业级个人部署者。
- **CoPaw**：定位最接近 OpenClaw 的完整平台（插件 SDK、会话存储、MCP/Whisper 插件化、移动端 PawApp、Linux 桌面打包），路线图明确朝“能力插件化 + 宿主统一生命周期”演进；但 2.3.0 回归集中，处于“架构升级阵痛期”。
- **Hermes Agent**：偏多渠道（Telegram/Feishu/Lark/Matrix/ACP）与 Desktop 体验，用户群体高度集中于 66 profile 级自托管进阶用户；痛点集中在长期运行后的隐性退化。
- **ZeroClaw**：Rust 系、强调成本控制与企业凭据安全（外部云保险库、作用域密钥引用）；当前成本子系统既不准也不可控，是核心信誉风险。
- **NanoClaw / NanoBot**：轻量、聚焦“边缘输入正确处理 + 频道适配层硬化”，修复粒度小但覆盖面广（文件 I/O、网络、通知、频道、调度）；NanoBot 另有 CI 性能治理意识（#6684 以 150 次运行数据论证 13m54s 中位耗时）。适合追求稳定轻量部署的用户。
- **LobsterAI**：产品化程度最高（消息编辑/版本历史、1M tokens 上下文、PPT 引导创建、桌面伴生），采用 OpenClaw 作为插件/后端依赖（`@openclaw/discord`、`ensure-openclaw-plugins`），是“上层产品 + 下层 claw 生态”的典型组合。
- **IronClaw / PicoClaw / 静默层**：IronClaw 仅提出 registry provider failover 需求；PicoClaw 处于 stale 清理；其余四个项目当日零活动，定位信息不足以进一步比较。

## 6. 社区热度与成熟度

- **第一层 · 快速迭代 + 高成熟度**：OpenClaw（唯一双高 + 正规发布）、LobsterAI（小体量但当日发布、当日安全修复、产品化最完整）。
- **第二层 · 快速迭代、质量偿还中**：CoPaw（关闭率 35% 但高危回归未清）、ZeroClaw（提交远快于合入，47:3）、Hermes（累积快于关闭）、NanoClaw（响应快、病灶簇明确）。
- **第三层 · 质量巩固 / 清理阶段**：NanoBot（集中清理 7 周老 PR，CI 提速）、PicoClaw（stale 刷新 + 8 个月批量 PR 关闭）。
- **第四层 · 低活跃 / 静默**：IronClaw（仅 1 条 Issue，零响应）、NullClaw / TinyClaw / Moltis / ZeptoClaw（当日无活动）。
- **成熟度信号**：OpenClaw 的“合并覆盖流入”、LobsterAI 的“当日报当日修”、NanoBot 的“CI 数据驱动优化”代表成熟实践；ZeroClaw 的“Windows 测试长期红灯被习以为常”、PicoClaw 的“8 个月批量 PR 滞留”、Hermes 的“高讨论 Issue 开放数月”则代表流程健康度警戒线。

## 7. 值得关注的趋势信号

1. **“可信计量”成为新竞争维度**：ZeroClaw 三条成本缺陷 + OpenClaw prompt-cache/溢出预估偏差共同表明，成本可观测性正从“附带功能”变为用户信任的基础设施；对开发者而言，token 计费链路需与运行时预算策略解耦设计，默认值必须真实生效。
2. **静默失败正在被系统性清算**：NanoClaw 5/8 缺陷属“失败映射为成功”、Hermes 四类“静默失聪/无日志”、CoPaw 定时路径无兜底——行业共识正在形成：错误必须机器可解析（OpenClaw #127195、#165685 即为呼应）。
3. **插件/MCP 成为稳定性主战场**：OpenClaw、CoPaw、ZeroClaw、LobsterAI 同时出现插件加载阻塞、解压超时、注册源扩展、SDK 重构需求；下一步的架构分化点在于“宿主统一管理生命周期”能否标准化（CoPaw SDK 1.1 是最明确的路线图信号）。
4. **Windows 平台债务被普遍低估**：至少 5 个项目存在 Windows 更新/执行/测试失败，且部分已形成“长期红灯”惯性；对跨平台智能体产品，Windows 验证应前置到 CI 门禁。
5. **安全边界从“外网防护”转向“本地协议与代理信任”**：CoPaw 反代绕过认证、LobsterAI localfile 任意路径读取、ZeroClaw 只写式凭据（不暴露密钥给 agent）、Hermes 正则误报——本地/自托管场景的信任模型是下一轮安全设计的核心。
6. **规模化的隐性成本**：Hermes 66 profile 元数据风暴与进程泄漏、LobsterAI 多 agent 状态归属混乱表明，多实例/多 agent 部署的治理能力（隔离、归属、回收）将成为企业侧选型的关键差异项。

---

*说明：本报告所有数据与结论均严格基于所提供的各项目 2026-11-16 快照；未在材料中披露的 PR 合并/关闭细节、Issue 关闭原因、评论数及交叉项目事实均未作推断。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报（2026-11-16）

## 1. 今日速览

项目今日维持高强度开发节奏：24 小时内 21 条 PR 更新，其中 16 条合并/关闭、5 条待合并，无新版本发布。Issues 仅 3 条变动（1 开 2 关），用户侧新增报告仅 #6678 一条功能性 Bug。值得注意的是，关闭的 PR 中有约 10 条由同一作者（2gg-bit）于 9 月下旬提交，今日集中清理，说明维护者正在消化积压的老 PR；待合并 PR 则集中在 WebUI 与 MCP 的稳定性修复。整体健康度良好，CI 性能优化（#6684）表明项目已进入对大规模回归成本的主动管理阶段。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 PR 以正确性修复为主，覆盖多个执行路径：

- **Windows 换行保真**：[#5925](https://github.com/HKUDS/nanobot/pull/5925) 为 `write_file` 等三条写入路径指定 `newline=""`，修复 `\r\n` 被二次转换导致的重复回车。
- **网页抓取去重误判**：[#5926](https://github.com/HKUDS/nanobot/pull/5926) 不再将整条 URL 小写化，保留路径/查询参数的大小写敏感性，避免误拦截合法请求。
- **通知评估器类型安全**：[#5927](https://github.com/HKUDS/nanobot/pull/5927) 在接收模型参数处校验布尔类型，修复字符串 `"false"` 被 `bool()` 判为真、导致静默检查误发通知。
- **邮件解码鲁棒性**：[#5928](https://github.com/HKUDS/nanobot/pull/5928) 对未知字符集捕获 `LookupError`，回退 UTF-8 替换解码，避免收件轮询中断。
- **Telegram 命令参数**：[#5931](https://github.com/HKUDS/nanobot/pull/5931) 保留换行/制表符分隔参数，新增 12 项回归用例。
- **工具参数校验**：[#5965](https://github.com/HKUDS/nanobot/pull/5965) 修正 `type: "null"` 的宽松校验，并让 nullable 参数先校验 enum。
- **图片 base64 非 ASCII**：[#5923](https://github.com/HKUDS/nanobot/pull/5923) 补捕获 `ValueError`，防止 MCP 将整条响应误判为 malformed。
- **cron 夏令时**：[#5922](https://github.com/HKUDS/nanobot/pull/5922)（p1）未设时区时改用本地时区规则，消除季节性时钟切换导致的 1 小时偏差。
- **日志流关闭语义**：[#5921](https://github.com/HKUDS/nanobot/pull/5921) 禁止已关闭的 `RotatingTextOutput` 重开文件。
- **WebUI 自定义背景**：[#6674](https://github.com/HKUDS/nanobot/pull/6674) 新增图片选择器（预览、移除、模糊、背景控制）。
- **Issue 关闭**：[#6660](https://github.com/HKUDS/nanobot/issues/6660)（OpenAI 已退役图像模型仍在列表）、[#6635](https://github.com/HKUDS/nanobot/issues/6635)（MiniMax H3-Image 支持）已关闭。

**整体推进**：这些修复主要落在"边缘输入不被正确拒绝或正确保留"这一层；单项影响面都不大，但合计覆盖了文件 I/O、网络、通知、频道、provider、调度与日志等主干路径，属于稳定性层面的实质改善。

---

## 4. 社区热点

今日数据中未出现评论数或 👍 明显聚集的讨论（Issues 最高 1 条评论，PR 评论数未披露）。可关注的条目：

- [Issue #6678](https://github.com/HKUDS/nanobot/issues/6678)：响应最快的当日新 Bug（当日开、当日即有对应 fix PR）。
- [PR #6684](https://github.com/HKUDS/nanobot/pull/6684)：以 150 次近期 CI 运行（117 次 PR 运行，11/12–11/16）为论据，指出浏览器测试中位耗时 13m54s、p95 为 17m21s，反映贡献者对前端回归等待时间的不满，是今日最具数据支撑的诉求。

**分析**：社区注意力正从"单点功能"转向"工程体验"——CI 时长、WebUI 生命周期显示、MCP 启动隔离，均为开发者日常摩擦点，而非终端用户可见的新能力。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 条目 | 状态 | Fix PR |
|---|---|---|---|
| 中（数据/计算正确性） | [#6678](https://github.com/HKUDS/nanobot/issues/6678) 经 Responses API 恢复会话时，导入的供应商报价更新被忽略，仍按旧价计算 | OPEN | 有，[#6681](https://github.com/HKUDS/nanobot/pull/6681) 待合并 |
| 中（WebUI 状态） | [PR #6683](https://github.com/HKUDS/nanobot/pull/6683) 报告会话轮次已完成但仍显示活动响应 | OPEN | 即该 PR |
| 中（MCP 可用性） | [PR #6680](https://github.com/HKUDS/nanobot/pull/6680) 慢/无响应 MCP 服务器阻塞普通聊天；拟 10s 报告慢启动、60s 取消 | OPEN | 即该 PR |
| 低（配对） | [PR #6682](https://github.com/HKUDS/nanobot/pull/6682) HTTPS 反向代理后 SSH 快速配对误报 `incompatible_gateway` | OPEN | 即该 PR |
| 低（已修复） | [#6660](https://github.com/HKUDS/nanobot/issues/6660) 已退役的 `gpt-image-1`/`dall-e-3`/`dall-e-2` 仍出现在模型列表 | CLOSED | 已处理 |

今日无崩溃或 p0 级回归报告；唯一的功能性新 Bug #6678 已有配对 fix PR，闭环速度快。

---

## 6. 功能请求与路线图信号

- **新图像模型接入**：[#6635](https://github.com/HKUDS/nanobot/issues/6635) 请求支持 MiniMax H3-Image / H3-Image-Highspeed（现有客户端仅覆盖旧 `image-01`）。Issue 已关闭，结合 [#6660](https://github.com/HKUDS/nanobot/issues/6660) 关闭，判断图像模型清单正在被校正与扩展；下一版本可能包含新的图像 provider 支持，但数据中未见对应 PR，**是否已实现无法确认**。
- **WebUI 个性化**：[#6674](https://github.com/HKUDS/nanobot/pull/6674) 自定义背景已关闭（合并或关闭未注明），若为合并，将在下一版本体现。
- **MCP 隔离与超时策略**：[#6680](https://github.com/HKUDS/nanobot/pull/6680) 提出的 10s/60s 阈值若合并，会成为 MCP 网关的默认行为约定。
- **CI 加速**：[#6684](https://github.com/HKUDS/nanobot/pull/6684) 属工程基建，非用户功能，但会直接影响后续版本的合并吞吐。

---

## 7. 用户反馈摘要

- **模型生命周期不同步**（#6660）：用户指出上游已退役模型仍在选择列表中，调用即失败。痛点在于 nanobot 的模型清单未跟随 provider 的弃用公告（作者引用了 OpenAI 弃用页面，其中 gpt-image-1 于 2026-10-23 退役，dall-e-3/dall-e-2 于 2026-05-12 退役）——属"配置面与真实能力脱节"类反馈。
- **会话状态一致性**（#6678）：用户通过 `bot.sessions.ingest()` 成功导入新报价（$25），返回快照中已可见，但下一次回答仍按旧价计算。场景是"导入 → 续答"的 SDK 集成用法，反映出用户对"写入即生效"的强预期；根因（native continuation 仅重放已保存项与待处理输入）已由 #6681 定位。
- **多平台输入保真**：集中关闭的 #5925/#5928/#5931 对应 Windows 换行、邮件未知字符集、Telegram 多行参数等真实使用摩擦，说明跨平台/跨频道输入处理是长期痛点集中区。

今日无负面情绪集中爆发，也无明确"满意"类正面反馈被记录。

---

## 8. 待处理积压

- **老 PR 清理接近尾声但仍需关注**：#5925–#5931、#5965 等 9 月下旬提交的 PR 历时约 7 周才于今日关闭，说明历史积压已被消化；建议维护者复盘为何这批 p1/p2 修复排队如此之久。其中 [#5922](https://github.com/HKUDS/nanobot/pull/5922) 标记 p1（cron 夏令时偏差），延迟近两个月关闭，风险偏高。
- **待合并的 5 条 PR 全部为今日创建**（#6680、#6681、#6682、#6683、#6684），暂无逾期迹象；建议优先评审 #6681（关联当日 OPEN Bug #6678）与 #6684（CI 门禁耗时数据充分，收益面广）。
- **Issue #6635 关闭原因未在数据中注明**（无评论、无 👍）：若为"无对应实现而关闭"，用户需求实际未满足，建议在下一版本路线图中明确 MiniMax H3-Image 的支持状态。

*说明：本日报仅基于所提供的 GitHub 数据；PR 的"合并 vs 关闭"、Issue 关闭原因及评论数未披露处，均未作推断。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-11-16

## 1. 今日速览

项目今日保持高强度活跃：过去 24 小时 Issues 更新 50 条（新开/活跃 48、关闭仅 2），PR 更新 50 条（待合并 39、合并/关闭 11），并发布 1 个 canary 版本。讨论焦点集中在**跨平台连接可靠性**（Telegram、Feishu/Lark WebSocket、ACP 网关）、**多 profile 下的性能与资源泄漏**，以及 **Desktop 会话/文件面板状态管理**。积压结构值得注意：多条高讨论量 Issue 已开放数周至数月（最早可追溯至 6 月 #50798），表明部分领域修复周期偏长。整体健康度：开发吞吐正常，但社区报告的稳定性问题累积速度略高于关闭速度。

## 2. 版本发布

**v0.23.1+canary.20261116T070005Z**（canary 通道，发布日期 2026-11-16）
- 提供 Hermes Desktop 下载（含 macOS Apple Silicon DMG 等，完整构建表由 `HERMES_BUILDS_TABLE` 占位）。
- 数据中未包含具体变更日志、破坏性变更或迁移说明，暂无法评估升级风险。
- 提醒：该版本为 canary 预发布，用户 Issue 中同时出现 v0.23.1 stable（commit `3b42157858` / `3b42157`）报告的问题，stable 与 canary 行为差异需对照验证。

## 3. 项目进展

今日合并/关闭 11 条 PR，其中可见的关闭项：

- **#149872 [CLOSED]** `fix(redact)`：修正 `agent/redact.py` 中 `_TELEGRAM_RE` 将 AWS ARN 的「12 位账号:30+ 字符资源名」误判为 Telegram bot token 的正则误报。→ https://github.com/NousResearch/hermes-agent/pull/149872
- **#152947 [CLOSED]** `fix(cli)`：`hermes debug share` 上传失败时，改为优先建议私有 `--nous` 支持通道，并在 CLI 参考中补充私有/公开/本地三种分享方式的隐私说明。→ https://github.com/NousResearch/hermes-agent/pull/152947
- **Issue #145201 [CLOSED]**：Buzz Desktop 托管 agent 无法回复的 ACP 网关回归（`BUZZ_*` 凭证被丢弃，重开 #76243）已关闭。→ https://github.com/NousResearch/hermes-agent/issues/145201

其余 9 条合并/关闭 PR 未在样本中列出。今日推进以**安全/隐私细节修正与凭证类回归收口**为主，属维护性收敛，未见到大规模功能落地。

## 4. 社区热点

按评论数排序的高讨论条目：

| 条目 | 热度 | 核心诉求 |
|---|---|---|
| [#146538](https://github.com/NousResearch/hermes-agent/issues/146538) 多 profile 下 Gateway 持续 34k–99k 次/秒文件系统元数据操作 | 8 评论 | Windows 单进程服务 66 个 profile 时占用满核、内核池增长；诉求为消除 skills 签名遍历/重复枚举/未缓存 realpath 的冗余 IO |
| [#156504](https://github.com/NousResearch/hermes-agent/issues/156504) Telegram getFile/send_voice 全部超时 | 7 评论 | 连接池中的陈旧连接导致语音/图片丢失，而独立客户端 50ms 可达；诉求为连接健康检查与超时配置 |
| [#91813](https://github.com/NousResearch/hermes-agent/issues/91813) Bot Mode 需暴露 bot 级实时会话转录 | 7 评论 / 👍3 | 多 agent 协作时仅显示「thinking…」过于不透明，要求可监督性 |
| [#137843](https://github.com/NousResearch/hermes-agent/issues/137843) 切换会话后 Desktop 文件面板永久 loading | 6 评论 | 文件树状态被重置且无重载路径 |
| [#156511](https://github.com/NousResearch/hermes-agent/issues/156511) `skill_manage` 在无 SKILL.md 的目录上死锁 | 5 评论 | create 与 write_file 互相拒绝，目录永久不可达 |

**分析**：热点呈三条主线——(a) 资源效率与长稳运行（#146538、#146772）；(b) 多渠道连接层健壮性（Telegram、Feishu、Matrix）；(c) 可观测/可监督（#91813）。用户群体以**自托管、多 profile、多渠道部署**的进阶用户为主，痛点高度集中于「长期运行后的隐性退化」。

## 5. Bug 与稳定性

按影响排序（均未见明确关联 fix PR，除注明外）：

**高**
1. [#147208](https://github.com/NousResearch/hermes-agent/issues/147208) **[P2] Hermes Cloud 实例 OFFLINE/Reconnecting 持续 5 天，Stop 无效、无法重启或查看日志** — 托管服务完全不可用，影响最大。无 fix PR。
2. [#156504](https://github.com/NousResearch/hermes-agent/issues/156504) **[P2] Telegram 陈旧连接池导致语音/图片收发全超时**（Windows 11, v0.23.1 stable）— 消息丢失。无 fix PR。
3. [#145201](https://github.com/NousResearch/hermes-agent/issues/145201) **[P2] 回归：Buzz Desktop ACP harness 丢失 `BUZZ_*` 凭证，无法回复** — **已关闭**。

**中**
4. [#156356](https://github.com/NousResearch/hermes-agent/issues/156356) **[P2] Feishu/Lark WS 客户端在 TCP 半死连接上永久卡死（无 socket 超时）**，网关静默失聪直至重启。
5. [#137843](https://github.com/NousResearch/hermes-agent/issues/137843) **[P2] Desktop 切换会话后文件面板永久 loading**。
6. [#156511](https://github.com/NousResearch/hermes-agent/issues/156511) **[P2] `skill_manage` 在无 SKILL.md 的目录上死锁**。
7. [#155773](https://github.com/NousResearch/hermes-agent/issues/155773) **[P2] ACP `session/new` 在网关绑定 MCP server 超过 30s 时失败，且无本地回退**。
8. [#156462](https://github.com/NousResearch/hermes-agent/issues/156462) **[P2] Anthropic 模型发现使用不刷新的 OAuth token，过期后静默隐藏新模型**。
9. [#132611](https://github.com/NousResearch/hermes-agent/issues/132611) **[P2] Group Chat 长回合被固定 deadline 终止，timeout=0 无法关闭托管房间截止**。
10. [#148923](https://github.com/NousResearch/hermes-agent/issues/148923) **[P2] 群组头像忽略已迁移的 bot avatar key**。
11. [#156192](https://github.com/NousResearch/hermes-agent/issues/156192) **[P2] Docker 集成下 hermes-workspace 卡在 mode=portable，dashboard 与 /api/mcp 不可用**。
12. [#150372](https://github.com/NousResearch/hermes-agent/issues/150372) **[P2] #140398 的修复导致单机 TUI 朗读被误拒**（本地 TTS + afplay 场景回归）。
13. [#151405](https://github.com/NousResearch/hermes-agent/issues/151405) **[P2] Desktop GPT-Live 在未确认语音送达前丢弃已完成的回答**。

**性能/资源泄漏**
14. [#146538](https://github.com/NousResearch/hermes-agent/issues/146538) **[P2]** 多 profile 文件系统元数据操作风暴（见热点）。
15. [#146772](https://github.com/NousResearch/hermes-agent/issues/146772) **[P2] `computer_use` 每会话的 cua-driver 进程对不调用 `close()` 的一次性会话永不释放**。

**低**
16. [#156049](https://github.com/NousResearch/hermes-agent/issues/156049) **[P3]** 仅有 legacy `connection.json` 时 Desktop Bot Mode「New group chat」保持禁用。

**关联修复 PR（均 OPEN，未合并）**：
- [#156672](https://github.com/NousResearch/hermes-agent/pull/156672) cron 进度戳 ledger 锁不再暂停正在运行的任务；
- [#124998](https://github.com/NousResearch/hermes-agent/pull/124998) macOS launchd 网关重启 ThrottleInterval 误失败恢复；
- [#148290](https://github.com/NousResearch/hermes-agent/pull/148290) Windows/Vulkan 本地模型溢出权重改用 mmap；
- [#115162](https://github.com/NousResearch/hermes-agent/pull/115162) bot-relay 每个 Desktop 独立 roster/outbox。

## 6. 功能请求与路线图信号

| 功能请求 | 信号强度 | 相关 PR / 判断 |
|---|---|---|
| [#91813](https://github.com/NousResearch/hermes-agent/issues/91813) Bot Mode 组活动暴露 bot 级实时会话转录 | 较高（7 评论、👍3、带 sweeper 标签） | 尚无对应 PR，属 Design 阶段 |
| [#156498](https://github.com/NousResearch/hermes-agent/issues/156498) Matrix 支持 `/model --room / --thread` 持久化模型，且 thread 优先于 room | 中（当日新开） | 无 PR；与现有 `/model --global` 语义衔接清晰，落地成本较低 |
| [#156229](https://github.com/NousResearch/hermes-agent/issues/156229) 无 MCP 回调的 Codex 原生 Kanban worker（当前回调 pre-exec EPERM） | 中（集成类） | 与 [#156561](https://github.com/NousResearch/hermes-agent/pull/156561)（Kanban review claim 技能解析失败时拒绝）方向相关 |
| [#119286](https://github.com/NousResearch/hermes-agent/pull/119286) Dashboard 展示未应用的 config-schema 迁移数量 | 中（已有 PR） | 数据已具备（`config_version` / `latest_config_version`），属低风险小特性 |
| [#102776](https://github.com/NousResearch/hermes-agent/pull/102776) 折叠重复的模型回退/鉴权错误提示 | 中（已有 PR） | 直接改善 provider 故障时的通知噪音 |
| [#156673](https://github.com/NousResearch/hermes-agent/pull/156673) 插件目录新增 relatedb-memory（双时态长期记忆） | 中（当日新开 PR） | 已声明首次使用从 Hugging Face 下载嵌入模型 |

**判断**：下一版本最可能纳入的是**已有 PR 且改动局部化**的项（#119286、#102776、#156672、#156561）。Matrix 房/线程级模型与 Bot Mode 转录属中长周期需求。

## 7. 用户反馈摘要

- **部署形态**：多数抱怨来自**进阶自托管场景**——单进程服务 66 个 profile（#146538）、docker-compose 多容器（#50798、#156192）、跨机 URL 连接的 Desktop（#156049）、Windows 11 + Telegram 群组话题（#156504）。
- **最大不满：静默失败与不透明**。Feishu 网关「静默失聪直至重启」（#156356）、Cloud 实例 Stop 无效且无日志（#147208）、Dashboard 加载失败被 `.catch(() => {})` 吞掉（[#120203](https://github.com/NousResearch/hermes-agent/pull/120203)）、Bot Mode 只显示「thinking…」（#91813）——四者指向同一诉求：**失败必须可见、可诊断**。
- **长稳运行与资源占用**是重复出现的主题（#146538 满核 + 内核池增长；#146772 进程泄漏）。
- **配置持久化困惑**：`/model` 仅会话级、`--global` 全局生效，Matrix 用户缺少中间粒度（#156498）；`hermes memory setup` 丢弃非密钥 schema 答案（[#117924](https://github.com/NousResearch/hermes-agent/pull/117924)）。
- **可感知的满意点**：安全与隐私方向的收口获得配合（debug share 私有通道建议 #152947）；本地模型在 Windows/Vulkan 的可用性有人持续投入改进（#148290）。

## 8. 待处理积压（提醒维护者关注）

**开放时间最长的 Issue**
1. [#50798](https://github.com/NousResearch/hermes-agent/issues/50798)（2026-06-22 创建，5 评论 / 👍3）— docker-compose 自托管下 sandbox 技能的 bind-mount 源使用容器内 `HERMES_HOME` 而非宿主机路径，导致挂载为空；沙箱执行受限，影响自托管核心可用性。
2. [#91813](https://github.com/NousResearch/hermes-agent/issues/91813)（2026-08-21）— Bot Mode 转录可监督性，讨论充分但近 3 个月无落地。

**开放时间较长的 PR**
3. [#117982](https://github.com/NousResearch/hermes-agent/pull/117982)（2026-09-21）— `/api/status` 用 SQL 统计活跃会话，替代「取 50 条再过滤」导致的系统性低估；修复面小、收益明确。
4. [#117924](https://github.com/NousResearch/hermes-agent/pull/117924)（2026-09-21）— `hermes memory setup` 持久化 provider 答案。
5. [#102776](https://github.com/NousResearch/hermes-agent/pull/102776)（2026-09-04）— 折叠回退/鉴权错误通知。
6. [#123911](https://github.com/NousResearch/hermes-agent/pull/123911)（2026-09-26）— Dashboard YAML 编辑器按原文保存，保留注释与固定默认值。
7. [#120203](https://github.com/NousResearch/hermes-agent/pull/120203)（2026-09-23）— Sessions 页区分「加载/搜索失败」与「空列表」。

**观察**：上述多条 PR 均出自同一贡献者（jonpol01），形成一批**同质化的 Dashboard/CLI 正确性修复**，单点质量改动小但合并节奏偏慢；建议集中评审以防贡献者流失并加速质量债务清理。另注意 #149132（跨 profile store 的会话所有权围栏）已按两轮 review 返修，属 area/billing 与 area/sessions 的高敏感改动，需优先给出结论。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-16

## 1. 今日速览

今日项目整体活跃度偏低：Issues 零更新、零新版本发布，仅 4 条 PR 发生更新。其中 2 条为长期挂起的 `stale` PR 被刷新（#3466、#3463），另 2 条（#1546、#1544）为 3 月创建、今日被关闭的批量合并型 PR。未见新功能合入，项目处于维护与清理节奏，健康度中性——积压清理持续推进，但缺乏实质性新进展。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 2 条 PR 均为批量合并型，且创建时间为 2026-03-14，今日才被关闭：

- **PR #1546 [CLOSED]** — 合并 #1480 #1479 #1478 #1473 #1467
  https://github.com/sipeed/picoclaw/pull/1546
- **PR #1544 [CLOSED]** — 合并 #1514 #1513 #1512 #1510 #1509
  https://github.com/sipeed/picoclaw/pull/1544

说明：数据中未披露这些 PR 是"已合并"还是"直接关闭"，也未提供被合并子 PR 的具体修复内容，因此无法确认功能是否真正落地。从形态看，这是对一批旧 PR 的积压清理动作，对项目向前推进的实质贡献需以主分支实际变更为准。

## 4. 社区热点

今日**无任何 PR 附带评论数据（评论数均为 undefined）、反应数均为 0（👍 0）**，不存在可识别的讨论热点。Issues 侧亦无讨论。社区互动处于静默状态。

## 5. Bug 与稳定性

今日无 Issues 上报，无崩溃/回归报告。唯一与缺陷相关的信号是待合并的修复 PR：

- **PR #3463 [OPEN] [stale] fix(skills): deduplicate installed skills per root, not by frontmatter name** — 修复 #3462：当两个已安装 skill 共享相同 frontmatter `name` 时，`picoclaw skills install` 及智能体 `install_skill` 工具会报错 `registry archive is not a valid skill`，即使二者内容不同。属**中等严重度**功能可用性缺陷，已有 fix PR 但处于 stale 状态。
  https://github.com/sipeed/picoclaw/pull/3463

## 6. 功能请求与路线图信号

- **PR #3466 [OPEN] [stale] feat(tools): send X-Pplx-Integration header on Perplexity web search** — 为 Perplexity 搜索提供方在现有硬编码 `https://api.perplexity.ai/chat/completions` 请求上追加静态请求头 `X-Pplx-Integration: picoclaw`。该改动范围小、仅作用于既有请求路径，属于易合入的集成标识类改进，但已 stale。
  https://github.com/sipeed/picoclaw/pull/3466

今日无新功能请求提交。结合上述两条 stale PR 判断，#3463（skill 去重修复）与 #3466（集成请求头）均为低风险改动，具备纳入下一版本的条件，但需维护者先解除 stale 状态。

## 7. 用户反馈摘要

今日无 Issues 评论数据可供提炼。可间接从 PR 摘要读取的真实痛点：

- **skill 安装冲突**：用户安装共享同名 frontmatter 的不同 skill 时被错误拒绝，影响自定义 skill 生态的正常使用（#3463）。
- **第三方搜索集成标识**：希望 Perplexity 请求中携带 picoclaw 集成标识（#3466），提示存在对外集成可观测性/合规标识的需求。

## 8. 待处理积压

以下 PR 长期未合入且已被标记 `stale`，建议维护者优先处置：

- **PR #3466**（创建 2026-11-09，更新 2026-11-16，stale）— 集成请求头，改动小、风险低。
  https://github.com/sipeed/picoclaw/pull/3466
- **PR #3463**（创建 2026-11-06，更新 2026-11-16，stale）— 关联缺陷 #3462 的修复，影响 skill 安装可用性。
  https://github.com/sipeed/picoclaw/pull/3463

另需关注：今日关闭的 #1546、#1544 均为堆积近 8 个月的批量合并 PR，反映历史 PR 流水线存在长期滞留问题；Issue #3462（#3463 的修复对象）在本次数据中未出现在 Issues 列表，其当前状态需另行核实。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-16

> 数据来源：NanoClaw (github.com/qwibitai/nanoclaw) GitHub 公开数据。以下所有条目均基于本次提供的 Issue/PR 摘要，未做外部补充。

---

## 1. 今日速览

项目今日活跃度**高**：Issues 更新 11 条（新开/活跃 10，关闭 1），PR 更新 43 条（待合并 24，已合并/关闭 19），**无新版本发布**，整体处于密集修修补补与硬化阶段而非功能冲刺阶段。Issue 报告高度集中：`foxsky` 一人提交 8 条 bug 报告，多数直指 `setup`/`add-onecli`/宿主生命周期等基础设施路径，且均标注"在 `main` 与 `v2026.11.0-beta.3` 上代码未变"。PR 侧以 `glifocat` 的修复链条为主，多个 PR 为前序评审意见的 follow-up（#4360→#4368/#4369、#4403→#4418），体现出较强的代码评审闭环。整体健康度：**响应快、修复链完整，但 `setup` 与 `add-onecli` 一带的失败静默类问题形成明显病灶簇**。

---

## 2. 版本发布

今日无新版本发布（Releases 为空）。相关背景：多个 Issue 与 PR 均以 `v2026.11.0-beta.3` 为参照版本，说明该 beta 仍在推进中；其正式发布不在本次数据范围内。

---

## 3. 项目进展

今日合并/关闭的 PR 共 19 条，以下为有摘要的关键项：

| PR | 状态 | 进展 |
|---|---|---|
| [#4403](https://github.com/nanocoai/nanoclaw/pull/4403) fix(setup): 报告 npm 失败，并在迁移时从 `~/.local/bin` 查找 pnpm | CLOSED | 修复 #4373 批准评审中的三点，其中两点为真实 bug |
| [#4387](https://github.com/nanocoai/nanoclaw/pull/4387) fix(setup): WhatsApp 配对后连接关闭时保留链接 | CLOSED | 消除配对后误提示"删除新链接"的误导 |
| [#4367](https://github.com/nanocoai/nanoclaw/pull/4367) fix(discord): 宿主无点击关闭卡片时清除按钮 | CLOSED | Discord 审批卡片行为对齐已点击场景 |
| [#4360](https://github.com/nanocoai/nanoclaw/pull/4360) fix(gchat): 智能体消息行按原样显示而非加粗标签 | CLOSED | 修复 Google Chat 审批卡片标签伪装问题 |
| [#4368](https://github.com/nanocoai/nanoclaw/pull/4368) / [#4369](https://github.com/nanocoai/nanoclaw/pull/4369) fix(cards)/fix(channels): 拆分卡片行不再伪装成标签 | CLOSED | 由 Codex 在 #4360 评审中发现，分别覆盖 cards 与 channels 双胞胎改动 |
| [#4364](https://github.com/nanocoai/nanoclaw/pull/4364) fix(chat-sdk): 队列内入站消息丢失时告警 | CLOSED | 补上 queue 模式（GitHub、Linear、Resend）静默丢弃的可观测性 |
| [#4356](https://github.com/nanocoai/nanoclaw/pull/4356) fix(channels): Google Chat 卡片标签加粗 + Discord 转义 | CLOSED | #4156 评审的两点 follow-up |
| [#4366](https://github.com/nanocoai/nanoclaw/pull/4366) test(channels): 覆盖回复拆分循环并固化重试行为 | CLOSED | 无行为变更，补齐此前无测试的拆分循环 |

**整体推进判断**：今日合入的是一轮**面向频道适配层（Google Chat / Discord / WhatsApp / Chat SDK）的正确性与可观测性硬化**，以及 `setup` 脚本的失败可解释性改进。项目在"少静默失败、少误导提示"方向上稳步前进，但尚未触及核心交付语义层面的改动（见第 4 节 #4419）。

---

## 4. 社区热点

本次数据中 PR 评论数均为 `undefined`，Issue 评论数最高仅 1 条，**今日无高热度讨论**。相对值得关注的三项：

1. **[Issue #4413](https://github.com/nanocoai/nanoclaw/issues/4413)（1 条评论）** — `community-portal` 注册测试假定门户是最后一个 barrel 模块，任何追加的生命周期模块都会导致测试失败。**诉求**：测试对模块拼接顺序的隐式依赖应被消除，否则会阻挡后续扩展。
2. **[PR #4419](https://github.com/nanocoai/nanoclaw/pull/4419)（OPEN，glifocat）** — 长回复拆分后重试从失败的分片续发，避免已发送部分重复。**诉求**：直接对应今日多条频道层问题的共同根因——**部分失败后的重试语义不清**。
3. **[Issue #4417](https://github.com/nanocoai/nanoclaw/issues/4417)（0 评论）** — WhatsApp 审批卡片改为"一键投票"回答。**诉求**：手机端输入精确斜杠命令成本过高。

---

## 5. Bug 与稳定性

按严重程度排列（依据摘要描述的失败后果）：

| 级别 | Issue | 问题 | 是否已有 fix PR |
|---|---|---|---|
| **高** | [#4415](https://github.com/nanocoai/nanoclaw/issues/4415) | WhatsApp 适配器：发送失败/离线时消息入内存队列却**被报告为已送达**；队列无过期；flush 可能丢消息 | 未见对应 PR |
| **高** | [#4409](https://github.com/nanocoai/nanoclaw/issues/4409) | add-onecli 复用已有网关时**从未写入 `ONECLI_API_KEY`**，审批客户端发送空 bearer token | 未见对应 PR |
| **高** | [#4408](https://github.com/nanocoai/nanoclaw/issues/4408) | add-onecli `setup.ts` 在网关就绪检查失败（`STATUS: failed`）时仍**退出码 0** | 未见对应 PR |
| **中高** | [#4410](https://github.com/nanocoai/nanoclaw/issues/4410) | add-onecli：`onecli` 读取失败被当作"无网关"，**回落至安装器** | 未见对应 PR |
| **中** | [#4412](https://github.com/nanocoai/nanoclaw/issues/4412) | 宿主停止/重启后遗留 install 级 `docker events` 监听进程，**每轮宿主运行泄漏一个进程** | 未见对应 PR |
| **中** | [#4411](https://github.com/nanocoai/nanoclaw/issues/4411) | 启动熔断器在成功启动后**不清零崩溃计数**，仅优雅关闭才清除 | 未见对应 PR |
| **中** | [#4414](https://github.com/nanocoai/nanoclaw/issues/4414) | setup 本地提交遗留不匹配的升级标记，**无任何提示** | 未见对应 PR |
| **中** | [#4413](https://github.com/nanocoai/nanoclaw/issues/4413) | community-portal 注册测试依赖模块顺序，追加生命周期模块即失败 | 未见对应 PR |

**共性诊断**：上述 8 条中 5 条属于同一模式——**失败被静默映射为"成功"或"无异常状态"**（#4415 报告已送达、#4408 退出 0、#4410 回落安装器、#4409 空 token、#4414 无提示）。相关 Issue 均明确标注在 `main`(67335cdd) 与 `v2026.11.0-beta.3` 上代码未变，说明问题持续存在于最新分支。

**注**：PR #4418（`fix(setup): Node 无法启动时说明原因，并指出 pnpm 缺失的真实原因`）与 #4371（Arch 镜像上 `pacman -S jq` 失败、"jq 说明只列 5 个技能但实际 13 个运行 jq"）属于同方向的 setup 可解释性修复，但**不对应上表任何一条具体 Issue**。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 潜在落地信号 |
|---|---|---|
| WhatsApp 审批卡片"一键投票"回答 | [#4417](https://github.com/nanocoai/nanoclaw/issues/4417) | **有部分信号**：同作者的 [PR #4416](https://github.com/nanocoai/nanoclaw/pull/4416) 已在改 `answerPendingQuestion` 的匹配逻辑（支持 `/option` 后跟备注、支持 RTL 标记后接命令），是同一痛点的不同解法，二者是否合并成型尚未可知 |
| signal-cli Linux pin 升级到 0.14.10 | [#4400](https://github.com/nanocoai/nanoclaw/issues/4400)（由 github-actions[bot] 创建） | 上游已警告超过三个月的发布可能停止工作，属**时效性维护项**，优先级应偏高；本次数据中未见对应 PR |

---

## 7. 用户反馈摘要

- **真实痛点（移动端可用性）**：#4417 指出在 WhatsApp 上，`ask_question` 卡片（安装审批、凭据审批、任意智能体提问）**只能通过输入精确斜杠命令回答**，在手机上"很慢"。这是本次数据中唯一从终端用户使用场景出发的诉求。
- **真实痛点（信任与可观测性）**：#4415 的核心不满不是消息丢失本身，而是**丢失被报告为已送达**；#4364 也针对 queue 模式静默丢消息补告警。用户对"系统说成功但实际没成功"的容忍度明显很低。
- **真实痛点（安装路径健壮性）**：#4408/#4409/#4410/#4414 反映 add-onecli 与 setup 在多条失败分支上**不报错或报错不准确**，对自托管用户排查成本高。
- **满意信号**：本次数据未包含任何正面评价或功能赞扬类评论，无法归纳满意点。

---

## 8. 待处理积压

以下为长期未闭环项，建议维护者优先分诊：

1. **[PR #3113](https://github.com/nanocoai/nanoclaw/pull/3113)（OPEN，CrAzyScreamx，创建于 2026-07-21）** — `fix(whatsapp): 将入站媒体暂存到容器可读取的位置`。**已开放近 4 个月**，今日仍有更新，属本次数据中最长的待合并项。鉴于今日多条 WhatsApp 问题（#4415、#4416、#4417）集中出现，该 PR 值得优先评审。
2. **[PR #4199](https://github.com/nanocoai/nanoclaw/pull/4199)（OPEN，glifocat，创建于 2026-10-23）** — `fix(add-onecli): 在 Linux 上把 OneCLI 管理 API 与 Postgres 发布到 127.0.0.1`。**开放逾 3 周**，与今日 add-onecli 病灶簇（#4408/#4409/#4410）同区域，建议与这些 Issue 合并统筹。
3. **[Issue #3911](https://github.com/nanocoai/nanoclaw/issues/3911)（今日 CLOSED）** — `ncl groups restart --id <其他 group>` 重启的是调用者而非目标。创建于 2026-09-25，标签 `triage/unresolved`，**关闭时评论数为 0**，未附关闭说明。作为一条涉及 `cli_scope: global` 权限边界的 bug，建议确认关闭理由是否已记录。

---

*说明：本报告所列严重程度排序为基于 Issue 摘要描述后果的编辑判断，非项目官方分级；PR 评论数字段在源数据中为 undefined，故未做热度排序。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-11-16

## 1. 今日速览

今日 IronClaw 活跃度处于低位：过去 24 小时仅 1 条 Issue 更新（新开/活跃 1 条，关闭 0 条），PR 更新为 0，无新版本发布。唯一动态是 #8173 提出的多 provider failover 需求，指向 `NEARAI_FALLBACK_MODEL` 仅对 NEAR AI 后端生效的设计局限。项目在代码合并与发布维度今日无推进。整体健康度平稳，但维护吞吐量为零，需关注积压消化节奏。

## 2. 版本发布

今日无新版本发布，省略。

## 3. 项目进展

今日无合并或关闭的 PR，也无 PR 处于待合并状态，项目代码合入与功能推进为零。唯一进展信号来自 Issue #8173 对新场景的识别（registry provider 之间的故障转移），尚未进入实现阶段。

## 4. 社区热点

今日社区讨论量极低，唯一活跃条目为：

- [#8173 Support failover between registry providers (e.g. Ollama → Ollama)](nearai/ironclaw Issue #8173) — 作者 n4s3r，创建并更新于 2026-11-15，评论 0，👍 0。

诉求分析：用户希望在主 provider 为 Ollama 等 registry provider 时，也能走 fallback 路径。现有 `NEARAI_FALLBACK_MODEL` 仅覆盖 NEAR AI 后端，`crates/domains/ironclaw_llm/src/lib.rs` 中的 failover 逻辑通过 `create_llm_provider_with_con...`（摘要截断）构建 fallback，未覆盖 registry provider 场景。该需求反映本地/自托管模型部署场景下的高可用诉求，但今日无任何讨论互动。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告。

#8173 属于功能缺口而非缺陷：failover 机制对 registry provider 不生效，在主 provider 故障时无法自动切换，存在可用性风险。当前严重程度为中等，尚无 fix PR。

## 6. 功能请求与路线图信号

- **多 provider 故障转移（#8173）**：请求将 fallback 机制从 NEAR AI 后端扩展到 registry provider（如 Ollama → Ollama 等组合）。链接：nearai/ironclaw Issue #8173。

纳入下一版本的可能性评估：今日无任何关联 PR，且该 Issue 无评论、无反应，缺乏维护者响应信号，短期内进入路线图的确定性低。是否纳入取决于维护者对 registry provider 高可用场景的优先级判断，现有数据不足以支持进一步推断。

## 7. 用户反馈摘要

可提炼的信息仅来自 #8173 的 Issue 描述：

- **痛点**：`NEARAI_FALLBACK_MODEL` 的适用范围与用户实际使用的 provider 组合不匹配，registry provider 用户无法获得 fallback 能力。
- **使用场景**：以 Ollama 等 registry provider 作为主模型后端，并期望具备故障转移。
- **满意度信号**：该 Issue 暂无评论与点赞，无法判断社区共鸣程度；今日无其他用户反馈可供归纳。

## 8. 待处理积压

今日数据仅覆盖过去 24 小时，且无长期未响应的条目信息。#8173 虽为新建 Issue，但处于零评论、零响应状态，建议维护者确认其与现有 failover 设计的边界，避免长期滞留。其余积压项需结合更长周期数据评估。

---

**数据说明**：本日报仅基于 2026-11-16 提供的过去 24 小时快照生成；PR 与 Release 均为空，相关分析受限于样本量，不代表项目长期趋势。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-11-16

## 1. 今日速览

今日项目活跃度较高：发布 1 个新版本（2026.11.16），PR 更新 16 条（待合并 10、已合并/关闭 6），Issues 更新 2 条且均为新开、无关闭。合并侧以 Agent/OpenClaw 生命周期、浏览器策略、PPT 引导创建等功能修复为主，开源协作推进积极。安全方面出现一条值得关注的高危报告：`localfile://` 协议可读取任意绝对路径（Issue #3096），当天已有 fix PR #3103 提交。待合并队列中 6 条为同一作者当日提交的修复 PR，另有多条 stale 积压（#1181、#2668）持续延迟。整体健康度：迭代节奏稳定，安全响应及时，但 stale 积压与待合并 PR 堆积需注意。

## 2. 版本发布

**LobsterAI 2026.11.16**（发布于 2026-11-16，issue 链接见 Issue #3094 的社区背景）

- **核心更新**：消息编辑与版本历史切换；行内朗读（inline read-aloud）；任务全文搜索；上下文窗口可选，最高 1M tokens；启动速度提升；桌面伴生体验优化。
- **破坏性变更**：所提供的发布说明节选未披露任何破坏性变更。
- **迁移注意事项**：所提供的发布说明节选未披露迁移注意事项；上下文窗口上限提升至 1M tokens，但未说明是否涉及配置项变更。

> 注：发布说明仅提供节选（并在 "switch between ver..." 处截断），以上仅覆盖可见内容。

## 3. 项目进展

今日合并/关闭的关键 PR：

- **#3098 [CLOSED] fix(agents): 修复 Agent 创建与删除生命周期** — 解决 gateway bundle 与延迟加载 dest 模块持有两份数据库句柄缓存导致删除时句柄占用的问题，并处理手动创建 Agent 时显示名称生成身份与已删除 Agent 保留身份冲突的问题；增加打包策略标识与脚本时间戳校验使旧 bundle 缓存失效。https://github.com/netease-youdao/LobsterAI/pull/3098
- **#3095 [CLOSED] fix(browser): 将 Chrome UA 与 CDP attach 限定作用域，避免 Cloudflare 循环验证** — 将 UA 覆盖限定到 `accounts.google.com`，防止 UA/指纹不一致引发 Cloudflare 挑战循环。https://github.com/netease-youdao/LobsterAI/pull/3095
- **#3072 [CLOSED] feat(ppt): 可配置首页示例与引导式封面创建** — PPT 首页由文字快捷入口改为可配置可视化示例卡片，可试用预设内容或自定义并生成可编辑封面。https://github.com/netease-youdao/LobsterAI/pull/3072
- **#3019 / #3020 [CLOSED] 依赖升级** — univer 组 34 项更新（@univerjs/core 1.0.2 → 1.3.1 等）、docx-editor 组 2 项更新。https://github.com/netease-youdao/LobsterAI/pull/3019 · https://github.com/netease-youdao/LobsterAI/pull/3020

**整体推进度**：Agent 生命周期与浏览器兼容性是本日主要稳定性收益；PPT 功能线继续向引导式体验演进；依赖侧完成一次较大跨度的 univer 升级。

## 4. 社区热点

- **Issue #3096 [OPEN]** `localfile://` 协议处理器无根目录白名单，可服务任意绝对路径（涉及 `src/main/artifactLocalFileProtocol.ts:69` 路径解析与 `:170` 响应）。评论 2 条，为本日互动最多的 Issue。背后诉求：本地文件协议的作用域安全边界。https://github.com/netease-youdao/LobsterAI/issues/3096
- **Issue #3094 [OPEN]** 账号被禁用后的解封申诉（手机号登录，桌面端提示「账号已被禁用」；用户自述曾通过本地反向代理调用内置模型接口，推测触发风控，已完成整改）。评论 1 条。背后诉求：风控误伤的个人本地使用场景与申诉通道。https://github.com/netease-youdao/LobsterAI/issues/3094

> 说明：今日 PR 的评论数字段均为空，因此本节以 Issue 互动为主。

## 5. Bug 与稳定性

按严重程度排列：

1. **【高·安全】#3096 `localfile://` 任意绝对路径读取** — 无根目录允许列表，任意类型文件均可被服务；已有 fix PR **#3103**（将协议限制为沙箱化本地媒体，Fixes #3096）。https://github.com/netease-youdao/LobsterAI/issues/3096 · https://github.com/netease-youdao/LobsterAI/pull/3103
2. **【中】#3102 OpenClaw 插件归档解压超时** — macOS 安装 `@openclaw/discord@2026.8.1` 报 `extract tar timed out after 120000ms`，导致 `ensure-openclaw-plugins` 中断，后续 wecom、weixin、popo、nim、bee、email 插件全部缺失；fix PR **#3102** 已提交（各平台延长解压超时）。https://github.com/netease-youdao/LobsterAI/pull/3102
3. **【中】#3098 Agent 创建/删除生命周期缺陷** — 数据库句柄重复缓存与身份冲突；**已关闭/合并**。https://github.com/netease-youdao/LobsterAI/pull/3098
4. **【中】#3095 Cloudflare 挑战循环** — UA 与 CDP attach 作用域过宽，**已关闭/合并**。https://github.com/netease-youdao/LobsterAI/pull/3095
5. **【低】#3101 OpenClaw 异步 provider catalog builder 索引 max tokens 失败** — `buildHuggingfaceProvider` 为 async 且期望 API key 字符串，被同步调用方式误用；fix PR **#3101** 待合并。https://github.com/netease-youdao/LobsterAI/pull/3101
6. **【低】#3105 dreaming 状态/日记未按 agent 划分，日记加载错误未暴露** — fix PR **#3105** 待合并（显式传 `agentId`，默认 `main`）。https://github.com/netease-youdao/LobsterAI/pull/3105
7. **【低】#3104 OpenClaw 系统 agent 产生游离本地会话** — 忽略 `agent:openclaw:main` 等系统会话键；fix PR **#3104** 待合并。https://github.com/netease-youdao/LobsterAI/pull/3104
8. **【低】#3100 应用内浏览器标签页被空闲清理关闭** — 禁用 `lobster-in-app` profile 的 idle tab cleanup；fix PR **#3100** 待合并。https://github.com/netease-youdao/LobsterAI/pull/3100

## 6. 功能请求与路线图信号

- **PPT 引导式创建**（#3072，已关闭）：首页可配置示例卡片 + 生成可编辑封面，已进入主线，后续可能继续扩展模板体系。https://github.com/netease-youdao/LobsterAI/pull/3072
- **1M tokens 上下文窗口可选 + 任务全文搜索 + 消息编辑版本历史**（2026.11.16 版本）：已在最新版本落地，属于近期路线图的高优先级能力。
- **release/2026.11.17 分支同步**（#3099，OPEN）：将 main 最新修复（4 个提交、13 个文件，含 1 个合并提交，已实际试合并无冲突）同步至下一版本分支，保留 release 上的 PPT 与浏览器修复。说明 11.17 版本的修复集合已开始成形。https://github.com/netease-youdao/LobsterAI/pull/3099
- 账号申诉（#3094）属运营/风控流程诉求，非代码功能信号。

## 7. 用户反馈摘要

- **风控与合规痛点**（#3094）：用户为在本地工具中调用模型，将内置模型接口通过本地反向代理转发，导致账号被禁用；用户已停止全部反向代理并清理本地配置。反映出个人本地集成场景与风控策略之间存在摩擦，且用户对误封的申诉预期较高。https://github.com/netease-youdao/LobsterAI/issues/3094
- **安全边界关注**（#3096）：社区成员主动给出精确代码位置（`artifactLocalFileProtocol.ts:69` / `:170`），关注本地文件协议缺乏根目录白名单的风险。
- **多 Agent 场景暴露的可用性问题**（#3105、#3104）：第二个 agent 存在后 dreaming 状态归属不清、系统 agent 会话出现在用户列表中，属于规模扩大后的体验瑕疵。

## 8. 待处理积压

- **#1181 [OPEN] [stale] fix(cowork): 在会话列表中隐藏 OpenClaw 主 agent 会话** — 创建于 2026-04-01，更新于 2026-11-16，长期停留。问题为内部使用的 `[OpenClaw]` 硬编码标题会话出现在面向用户的 Cowork 列表中，造成困惑；建议与今日的 #3104（忽略系统 agent 会话）一并评估，两者问题域高度重叠。https://github.com/netease-youdao/LobsterAI/pull/1181
- **#2668 [OPEN] [stale] chore(deps-dev): @sinclair/typebox 0.34.49 → 0.34.52** — 创建于 2026-09-14，更新于 2026-11-16，仍待处理。https://github.com/netease-youdao/LobsterAI/pull/2668
- **#3037 [OPEN] chore(deps-dev): electron 43.5.0 → 43.8.7** — 创建于 2026-11-09，更新于今日，为当前待合并依赖升级中最早的一条，建议排期。https://github.com/netease-youdao/LobsterAI/pull/3037

> 提醒：当前 10 条待合并 PR 中，6 条为同一作者（fisherdaddy）当日提交的 OpenClaw/主进程修复，建议集中评审以降低堆积风险。

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

# CoPaw 项目日报 — 2026-11-16

> 数据来源：agentscope-ai/CoPaw（GitHub Issue/PR 链接中显示为 QwenPaw 仓库路径，按原文保留）

## 1. 今日速览

- 过去 24 小时 Issues 更新 43 条（新开/活跃 28、关闭 15），PR 更新 43 条（待合并 31、合并/关闭 12），无新版本发布。
- 活跃度处于高位：讨论与代码提交并行推进，Issue 关闭率达 35%，表明维护者在持续清理存量问题。
- 待合并 PR 中有 6 个标记为 XL/XXL/XXXL 量级（插件 SDK、会话存储重构、MCP 插件化、Whisper 插件化），评审压力集中在架构级变更上。
- 本日关闭的问题中既有真实缺陷修复（安装镜像、微信通道、检查点导航、定时任务输出），也有被标记 `invalid` 的报告，说明社区报告质量参差。
- 2.3.0 版本相关回归（附件路径、认证绕过、模型网关）仍未关闭，是当前健康度最需关注的风险面。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 12 个，以下为可见的代表性条目：

- **#8704 [CLOSED] [first-time-contributor, size/XS] fix(install): use the selected PyPI mirror when seeding the venv** — 修复 `scripts/install.sh` 中 `uv venv --seed` 未使用所选 PyPI 镜像的问题，对应 Issue #8698（升级 2.3.0 失败）的根因之一。
  https://github.com/agentscope-ai/QwenPaw/pull/8704
- 其余 11 个合并/关闭 PR 未在提供的数据中列出摘要，无法进一步说明内容。

整体推进评估：本日合并以小型修复为主（含一个 XS 级首次贡献者 PR），架构级 PR（#8764 SDK 1.1、#8532 会话存储、#8469 MCP 插件化、#8431 Whisper 插件化）均仍处于 OPEN/Under Review 状态，项目主线能力尚未落地。

## 4. 社区热点

按评论数排序的讨论焦点：

1. **#8071 [OPEN] Plugin-facing theme extension point（15 条评论）** — 控制台主题系统（#7741）已支持用户自定义 6 套内置配色，但插件只有一个 `theme.set(...)` 旋钮。作者主张为插件开放语义 token 覆盖层。
   https://github.com/agentscope-ai/QwenPaw/issues/8071
   诉求分析：这是"插件生态深度"议题——第三方开发者要求与官方功能对等的 UI 定制能力，与 #8764 插件 SDK 1.1 的扩张方向一致，可能需要在 SDK 层面统一设计而非单点打补丁。
2. **#7709 [CLOSED] 定时任务经常无输出，结果被折叠在步骤或 thinking 中（7 条评论）** — v2.2.1 用户反馈，正常对话亦偶发。
   https://github.com/agentscope-ai/QwenPaw/issues/7709
3. **#7859 [CLOSED] 工具结果 system-reminder 中持续出现提示注入，指示智能体删除全部技能（6 条评论）** — 跨 20+ 轮、多会话复现，来源未在本地磁盘找到。
   https://github.com/agentscope-ai/QwenPaw/issues/7859
   诉求分析：这是本日最值得警惕的安全类报告，涉及 system-reminder 通道的注入防护边界。

PR 侧评论数据缺失（`comments: undefined`），无法据此排序；但按体积与标签，**#8532（会话存储重构）** 与 **#8764（插件 SDK 1.1）** 标记为 Under Review/新提交，属评审热点。
https://github.com/agentscope-ai/QwenPaw/pull/8532 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8764

## 5. Bug 与稳定性

按严重程度排列（均标注是否有可见 fix PR）：

**高 —— 安全**

- **#8695 [OPEN] [2.3.0] 同主机反向代理绕过 API 认证**：`QWENPAW_AUTH_ENABLED=true` 且已注册用户时，经同主机反代到达后端的请求被当作本地 CLI 请求，跳过 bearer token 校验（回环白名单 + `trusted_proxies` 为空）。未见对应 fix PR。
  https://github.com/agentscope-ai/QwenPaw/issues/8695
- **#7859 [CLOSED] 持久性提示注入导致智能体删除全部技能** — 已关闭，关闭原因未在数据中说明。
  https://github.com/agentscope-ai/QwenPaw/issues/7859

**高 —— 功能阻断/回归**

- **#8655 [OPEN] [2.3.0-beta.1 引入] Windows 附件路径被截断为盘符根（`C:\`）**，文件保存正常但图片无法加载，beta.3 仍复现。未见 fix PR。
  https://github.com/agentscope-ai/QwenPaw/issues/8655
- **#8718 [OPEN] [2.3.0] Hub 模型网关对 Anthropic/MiniMax 预设立即失败**：`provider_headers()` 调用了不存在的 `request_headers()`，`main` 分支同样存在。未见 fix PR。
  https://github.com/agentscope-ai/QwenPaw/issues/8718
- **#8755 [OPEN] 共享前端、两个智能体、两个微信号：升级后凭据重复，仅一个通道可运行**。未见 fix PR。
  https://github.com/agentscope-ai/QwenPaw/issues/8755
- **#8709 [CLOSED] [2.3.0] 微信通道无法启动（`ACCOUNT_IN_USE`），发送成功被报为 `PLATFORM_RESULT_UNKNOWN`** — 已关闭；相关加固 PR **#8772 fix(channels): harden WeChat delivery and prevent cron reload deadlocks** 仍 OPEN。
  https://github.com/agentscope-ai/QwenPaw/issues/8709 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8772

**中 —— 可用性/数据一致性**

- **#8705 [OPEN] cron 任务 token 用量未写入 `turns.jsonl`**，用量面板统计缺失 cron 消耗。
  https://github.com/agentscope-ai/QwenPaw/issues/8705
- **#8762 [OPEN] 定时任务第二次模型调用报 `APIConnectionError`**，手动触发同一任务则成功（11/13–11/16 连续 4 次失败）。
  https://github.com/agentscope-ai/QwenPaw/issues/8762
- **#8727 [OPEN] Responses 续写摘要仍失败**：模型默认推理占满 4000 token 输出预算时，`disable_thinking=True` 在 OpenAI Responses 协议下不生效。
  https://github.com/agentscope-ai/QwenPaw/issues/8727
- **#8711 [OPEN] 建议 RetryChatModel 在 HTTP 200 但流以空/仅 thinking 结束时自动重试一次**（enhancement）。
  https://github.com/agentscope-ai/QwenPaw/issues/8711
- **#8747 [CLOSED] [v2.3.0] 控制台侧边栏丢失「检查点」入口**：导航 `parentId` 指向已移除的 `core.agent-group`。
  https://github.com/agentscope-ai/QwenPaw/issues/8747

**低 —— 体验/性能**

- **#8736 [OPEN] 子智能体完成误触发"回复完成"桌面通知**（2.3.0 与 `main`/2.3.1b1 均已验证存在）。
  https://github.com/agentscope-ai/QwenPaw/issues/8736
- **#8706 [OPEN] 创作助手输入每键卡顿**：AgentDock 全量重渲染并重复解析会话 Markdown，无 memoization。
  https://github.com/agentscope-ai/QwenPaw/issues/8706
- **#8745 [OPEN] PawApp 移动端三问题**：session 隔离误导、发送报错、输入法遮挡。
  https://github.com/agentscope-ai/QwenPaw/issues/8745
- **#8773 [CLOSED] [invalid] history.db 从不收缩**：`auto_vacuum=NONE`，retention purge 只 DELETE 不 VACUUM。被标记为 invalid，但技术描述具体，建议维护者复核判定。
  https://github.com/agentscope-ai/QwenPaw/issues/8773

**稳定性小结**：今日报告的 4 条高危问题（#8695、#8655、#8718、#8755）均无对应 fix PR，且多数在 `main` 上仍可复现；#8678（限制 query error dump 的规模与保留期）作为缓解措施仍在等评审，值得优先推进。
https://github.com/agentscope-ai/QwenPaw/pull/8678

## 6. 功能请求与路线图信号

结合已有 PR 判断落地可能性：

- **插件主题扩展点（#8071）** — 与 **#8764 插件 SDK 1.1**（身份、权限、协调、资源生命周期由宿主管理）方向一致，具备纳入 SDK 层面统一设计的可能性；但目前无专门 PR，短期落地概率中低。
  https://github.com/agentscope-ai/QwenPaw/issues/8071 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8764
- **cron 任务级推理控制（#8476）** — PR 为 `JobRuntimeSpec` 增加 `thinking_level` 与可选 `thinking_budget`，关闭 #8439。若合入将成为下一版本调度能力的明确增量。
  https://github.com/agentscope-ai/QwenPaw/pull/8476
- **空响应自动重试（#8711）** — 属小型健壮性增强，暂无对应 PR，但与 #8705/#8762 等"定时任务静默失败"类问题同源，存在被合并处理的可能性。
  https://github.com/agentscope-ai/QwenPaw/issues/8711
- **运行时 base-path 部署（PR #8719）** — 新增 `QWENPAW_BASE_PATH`，修复 #8714，面向自托管/子路径部署场景。
  https://github.com/agentscope-ai/QwenPaw/pull/8719
- **Linux 桌面打包（PR #8444）** — 为 Tauri 构建增加 deb 与 AppImage，填补 Linux 无桌面产物的空白。
  https://github.com/agentscope-ai/QwenPaw/pull/8444
- **MCP 插件化（PR #8469）与本地 Whisper 插件化（PR #8431）** — 显示路线图正朝"能力插件化、宿主统一管理生命周期"演进，与 SDK 1.1 构成同一主线。
  https://github.com/agentscope-ai/QwenPaw/pull/8469 ｜ https://github.com/agentscope-ai/QwenPaw/pull/8431

## 7. 用户反馈摘要

**典型使用场景**

- **家庭共用一个桌面前端、多个智能体、多个微信号**（#8755）：真实的多用户共享部署场景，当前凭据模型无法支撑。
- **多智能体 + 多个 cron 任务 + 收件箱通知**（#7480）：5 个 agent 型 cron 任务均开启 `save_result_to_inbox`，属于重度自动化用户。
- **项目工作区内使用创作助手**（#8706）：内容创作型工作流，对输入响应延迟极敏感。
- **自托管于 Docker/Linux，经同主机反代暴露**（#8695、#8727）：企业/自建部署占比明显。

**主要痛点**

- **"静默失败"是最集中的不满**：#7709（定时任务无输出）、#8762（仅定时触发报错）、#8711（200 但无内容）、#8705（用量漏记）指向同一体验缺口——定时/无人值守路径缺乏可观测性与兜底重试。
- **升级路径不稳**：#8698（镜像导致安装中断）、#8747（升级后入口消失）、#8655（beta 引入的附件回归），升级摩擦反复出现。
- **移动端体验欠打磨**（#8745）：session 隔离语义误导、发送报错、输入法遮挡。
- **性能细节**：#8706 每键卡顿，根因明确（重复解析 Markdown、无 memoization）。

**满意/正向信号**

- 用户报告质量高，多条附带源码路径、行号与版本比对（#8711、#8718、#8736、#8705、#8736 的 AI 披露说明），说明核心用户群具备读源码能力并愿意回馈。
- 首次贡献者活跃：#8704（已合并）、#8678、#8476 三条 PR 带 `first-time-contributor` 标签。

**不满信号**

- #8763 反馈 `platform.agentscope.io` 在 zh-CN 环境下中英混排、专有名词误译，i18n 一致性受质疑（该 issue 被标记 `invalid`）。
  https://github.com/agentscope-ai/QwenPaw/issues/8763

## 8. 待处理积压

长期未响应或长期滞留的重要条目（按创建时间排序）：

- **#7709**（创建 2026-09-11，今日关闭）— 定时任务无输出，历经约 2 个月才关闭。
- **#7480**（创建 2026-09-02，今日关闭）— cron 非计划补发 / cancelled 不写收件箱 / console 自动已读，滞留约 2.5 个月。
- **#7859**（创建 2026-09-18，今日关闭）— 提示注入导致删除技能，安全类问题滞留近 2 个月。
- **#8071**（创建 2026-10-01，仍 OPEN，15 条评论）— 插件主题扩展点，讨论充分但无明确归属，建议给出路线图答复。
  https://github.com/agentscope-ai/QwenPaw/issues/8071
- **PR #8444**（创建 2026-10-26，OPEN，size/L）— Linux deb/AppImage 打包，21 天未合入。
  https://github.com/agentscope-ai/QwenPaw/pull/8444
- **PR #8431**（创建 2026-10-26，Under Review，size/XXXL）— 本地 Whisper 插件化。
  https://github.com/agentscope-ai/QwenPaw/pull/8431
- **PR #8469**（创建 2026-10-28，OPEN，size/XXXL）— MCP 插件化。
  https://github.com/agentscope-ai/QwenPaw/pull/8469
- **PR #8476**（创建 2026-10-28，OPEN，first-time-contributor，size/L）— 任务级 `thinking_level`，首次贡献者 PR 已等待 19 天，建议优先给出评审反馈以免流失贡献者。
  https://github.com/agentscope-ai/QwenPaw/pull/8476
- **PR #8477**（创建 2026-10-28，Under Review，size/L）— 技能池安装改为原地 rename。
  https://github.com/agentscope-ai/QwenPaw/pull/8477
- **PR #8532**（创建 2026-11-02，Under Review，size/XXXL）— append-only 会话存储、分页历史与 Turn fork，已评审 14 天，属最关键的架构级积压。
  https://github.com/agentscope-ai/QwenPaw/pull/8532

**维护者建议关注顺序**：① #8695 认证绕过与 #8655/#8718 两条 2.3.0 回归；② 4 个 XXXL 级插件化/存储重构 PR 的评审排期；③ #8071 的路线图定性答复。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-16

## 1. 今日速览

ZeroClaw 今日活跃度**高**：过去 24 小时 Issues 更新 14 条（全部为新开/活跃，0 关闭）、PR 更新 50 条（47 条待合并，仅 3 条合并/关闭），无新版本发布。Issue 侧呈现出明显的**成本计量与预算控制集中爆发**特征——OpenRouter 成本不落账(#11204)、成本上限触发后需重启守护进程(#11585)、`cost.enforcement.mode` 被忽略(#12477)三条问题指向同一子系统。PR 侧待合并积压严峻（47:3 的合入比），且多条大型 PR 存在显式依赖链（#12408 → #12490；#12481/#12482 依赖 #12408），合并节奏成为当前主要瓶颈。此外新增两条 Windows 平台测试失败(#12483、#12484)，平台兼容性债务持续累积。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日仅 3 条 PR 被合并/关闭，数据未提供其具体标题与内容，故不展开。

从待合并 PR 的状态看，项目推进方向集中在以下几块，但**均尚未落地**：

- **凭据与密钥管理**：形成一条依赖链——#12408（Web 端管理作用域 HTTP 凭据）需先合入，其后 #12490（支持 `Authorization: Token` 形式凭据，面向 DefectDojo API v2）；#12481（OpenBao 凭据写入）依赖 #12408；#12482（1Password Connect / Azure Key Vault / AWS Secrets Manager / Google Secret Manager 外部云保险库写入）依赖 #12481。这条链路对应 Issue #12373 与 RFC #12422。
- **Provider 修复**：Anthropic thinking 请求回放失败修复(#12479)、Anthropic 服务端回退用量与计价(#12478)、兼容 provider SSE 在 EOF 处接受完整 `data: [DONE]` 哨兵(#12277)。
- **运行时应修复**：委托子智能体获取当前时间(#12488)、provider 分派门禁的 CI 修复(#12493)、`zeroclaw estop` 在无实际执行路径时拒绝启动(#12491)。
- **插件生态**：支持多插件注册源(#12216)。

**健康度判断**：管线内容充实，但合并吞吐显著落后于提交速度，建议维护者优先清理依赖链头部 PR（#12408）以解锁后续三条。

## 4. 社区热点

按评论数排序：

| 条目 | 评论 | 链接 |
|---|---|---|
| Issue #11204 OpenRouter 成本显示 $0.00 | 6 | zeroclaw-labs/zeroclaw Issue #11204 |
| Issue #12005 PowerShell 方言拒绝含裸 `@` 的命令 | 5 | zeroclaw-labs/zeroclaw Issue #12005 |
| Issue #10073 退役 `StoragePolicy::Rolling` | 4 | zeroclaw-labs/zeroclaw Issue #10073 |
| Issue #12373 只写式 WebUI 凭据管理 | 4 | zeroclaw-labs/zeroclaw Issue #12373 |
| Issue #12391 `runtime-trace.jsonl` 跨重启丢失事件 | 3 | zeroclaw-labs/zeroclaw Issue #12391 |
| Issue #11585 触发成本上限后仅能靠重启清除 | 3 | zeroclaw-labs/zeroclaw Issue #11585 |

**背后的诉求**：热点高度聚焦于**可观测性与成本的信任危机**——用户无法相信 Dashboard 上的花费数字(#11204)、无法信任追踪日志的完整性(#12391)、无法在不重启的情况下恢复被成本限制锁死的工作流(#11585)。同时 #12005 反映 Windows 用户在受控命令执行（allowlist 的邮件 CLI）上的实际阻塞，属于"安全策略正确但实现过严"的典型。凭据管理双条目(#12373、#12422)则显示企业侧用户正主动推动安全模型演进。

## 5. Bug 与稳定性

按严重程度排列（严重度依据 Issue 自带标签）：

**S1 / 工作流阻塞**
- **#12477** `cost.enforcement.mode` 被解析但不被运行时读取，即使默认 `"warn"` 模式，超预算也直接中断回合。运行时/守护进程组件。**未发现对应 fix PR**。
  zeroclaw-labs/zeroclaw Issue #12477

**S2 / 功能降级（高危标签 risk:high）**
- **#11204** OpenRouter 全部 token 被归为"free tok"，`usage.cost` 从未入库，约 90 次请求 / 2.1M token 后成本仍为 $0.00。priority:p1、status:accepted。**未发现对应 fix PR**；相关但不同的问题是 #12478（Anthropic 回退计价）。
  zeroclaw-labs/zeroclaw Issue #11204
- **#11585** 成本上限触发后只能靠重启守护进程恢复，`cost.allow_override` 从未被读取。priority:p1、status:in-progress、risk:high。**未发现对应 fix PR**。
  zeroclaw-labs/zeroclaw Issue #11585
- **#10073** 默认存储策略 `StoragePolicy::Rolling` 存在严重性能问题，拟并入 Rotating 并扩展 `/api/logs` 跨段文件查询。status:in-progress。
  zeroclaw-labs/zeroclaw Issue #10073
- **#12391** 繁忙守护进程上 `runtime-trace.jsonl` 出现数小时覆盖缺口，疑似握手缓冲/队列丢弃/静默写入器问题。
  zeroclaw-labs/zeroclaw Issue #12391
- **#12476** 自 #11901 起，网关经 `ServeTasks::spawn` 将为每个连接写 INFO 日志，淹没运行时追踪。**回归**。
  zeroclaw-labs/zeroclaw Issue #12476
- **#12492** Dashboard 聊天忽略运行时 profile 的 thinking 设置，`native_thinking = true` 时不下发原生 thinking 配置。
  zeroclaw-labs/zeroclaw Issue #12492
- **#12489** cron 调度器等待整批到期任务，一个长任务拖慢所有其他 cron 任务（0.9.0 与 master 均复现）。
  zeroclaw-labs/zeroclaw Issue #12489
- **#12005** PowerShell 方言拒绝参数中含裸 `@` 的任意命令，导致已加白名单的邮件 CLI 不可用（0.8.6，Windows）。
  zeroclaw-labs/zeroclaw Issue #12005

**S2 / 平台稳定性（Windows）**
- **#12484** 插件目录已消失时 `remove()` 失败，因 `rename_new` 丢失 `ErrorKind::NotFound`；自 2026-10-31 起每次 Scheduled Platform Tests 均失败。
  zeroclaw-labs/zeroclaw Issue #12484

**S3 / 轻微**
- **#12483** `a_stopped_gateway_releases_its_port_before_its_drain_ends` 在 Windows 每次定时测试均失败。
  zeroclaw-labs/zeroclaw Issue #12483

**观察**：四条成本相关缺陷(#11204、#11585、#12477，以及关联的 #12478 PR)构成一个系统性风险——**成本控制既不准也不可控**。建议维护者按"先让计量正确(#11204) → 再让策略生效(#12477) → 再让恢复可行(#11585)"的顺序集中攻坚。

## 6. 功能请求与路线图信号

- **只写式凭据目录与作用域密钥引用**（#12373，已有 Draft PR #12402 覆盖；配套 RFC #12422）。已有完整 PR 链 #12408 / #12490 / #12481 / #12482 支撑，**最有可能进入下一版本**。
- **多插件注册源**（PR #12216）：允许 `ZEROCLAW_PLUGIN_REGISTRY_URL` 接受 JSON 数组，公私仓库并用；跨搜索与缓存保留来源身份。标记 needs-author-action、size:XL，需作者推进。
- **会话所有权原子声明抽象**（PR #10412）：将原子 agent 所有权声明/接管抽为共享 `SessionBackend` 契约，SQLite 等后端实现。标签含 breaking-change、priority:p1，是架构级变更。
- **Zerocode 规范化 provider 模型配置**（PR #12452）：在配置、Quickstart 与聊天选择中使用规范化注册表 RPC 编辑器与精确模型引用。
- **日志存储策略重构**（#10073）：退役 Rolling、吸收行数上限至 Rotating、扩展 `/api/logs` 跨段查询。
- **运行时分派与时间感知**：委托子智能体获得当前时间(#12488)；`estop` 在无执行路径时拒绝启动(#12491)，属安全性收敛。

## 7. 用户反馈摘要

- **成本可观测性不可信**：用户跑完约 2.1M token 后 Dashboard 仍显示 $0.000000，直接影响预算决策与团队信任。
- **预算控制"只进不出"**：达到 `cost.daily_limit_usd` 后每一轮都失败，唯一出路是改配置并重启守护进程——对常驻服务而言体验不可接受。
- **审计日志缺口的合规风险**：生产环境守护进程在 agent 明确持续工作的情况下仍出现数小时 trace 空白（#12391）。
- **Windows 用户体验落后**：受控命令执行误伤含 `@` 的邮件 CLI(#12005)、插件移除失败(#12484)、端口释放测试长期红灯(#12483)——三次提及自 10 月底起的定时测试持续失败，说明平台测试红灯已被习以为常，是流程健康度信号。
- **企业安全诉求上升**：用户希望在不向 agent 暴露密钥本身的前提下授权其调用外部服务（#12422），并推动凭据写入与云保险库集成。
- **可感知的易用性缺陷**：Dashboard 聊天不继承 thinking 设置(#12492)、子智能体"编造"当前时间(#12488)等，属于让用户对 agent 能力产生怀疑的细节问题。

## 8. 待处理积压

- **Issue #10073**（创建于 2026-08-18，已 90 天）：默认存储策略性能问题 + `/api/logs` 跨段查询，status:in-progress 但无对应 PR 记录。涉及所有未配置实例的默认行为，影响面广。
  zeroclaw-labs/zeroclaw Issue #10073
- **PR #10412**（创建于 2026-08-27，已 81 天）：`SessionBackend` 会话所有权契约，breaking-change + priority:p1 + risk:high + size:XL。长期悬挂且标记破坏性变更，越晚合入迁移成本越高。
  zeroclaw-labs/zeroclaw PR #10412
- **Issue #11204**（创建于 2026-09-27，已 50 天）：OpenRouter 成本不入库，priority:p1、risk:high、status:accepted 却无 fix PR。
  zeroclaw-labs/zeroclaw Issue #11204
- **Issue #11585**（创建于 2026-10-06，已 41 天）：cost.allow_override 从不被读取，status:in-progress 但无 PR。
  zeroclaw-labs/zeroclaw Issue #11585
- **PR #12037 / #12113**（创建于 2026-10-25 / 10-30）：均为 docs 类"有界例外"提案（外部记忆 rerank 接线、按渠道工具限制），size:XS 却长期未合，建议快速了结。
  zeroclaw-labs/zeroclaw PR #12037 ｜ zeroclaw-labs/zeroclaw PR #12113
- **PR #12216**（创建于 2026-11-03，size:XL，needs-author-action）：多插件注册源，需作者响应以解除阻塞。
  zeroclaw-labs/zeroclaw PR #12216

---

*数据口径：过去 24 小时 Issues 更新 14 条、PR 更新 50 条（展示评论数最多的 15 条）、Release 0 个；本报告中"未发现对应 fix PR"仅基于所提供的 PR 列表判断。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*