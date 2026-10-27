# OpenClaw 生态日报 2026-10-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-08 15:01 UTC

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

# OpenClaw 项目日报 · 2026-10-08

## 1. 今日速览

项目今日维持高强度运转：过去 24 小时 Issue 更新 500 条（新开/活跃 394、关闭 106），PR 更新 500 条（待合并 335、合并/关闭 165），并发布 2 个版本（稳定版 v2026.9.9 与热修复版 v2026.10.1-beta.2）。从标签分布看，今日活跃度集中在 **稳定性与资源治理**：多个 P0/crash-loop 类 Issue 持续更新（如 #97616 僵尸进程泄漏、#156571 磁盘占满、#156712 修复子进程无法退出），说明内核/网关资源管理是当前最痛的区域。合并侧以文档、会话持久化、模型目录与内存优化类 PR 为主，配合"安全更新"主题推进。整体健康度：**活跃度极高，但增量功能推进慢于稳定性修复**，处于版本发布前的"清障"阶段。

---

## 2. 版本发布

### v2026.9.9（稳定版）
- **GPT-6.1 Sol 支持**：更新托管 Codex app-server 及其内置模型目录，使原生 Codex 会话可发现并运行 GPT-6.1 Sol（#161446、#163560）。贡献者 @IstiqlalBhat、@fuller-stack-dev、@vincentkoc、@RomneyDa。
- **更安全的更新**：release note 中提及"inspect l..."（原文截断），结合今日 P0 Issue #164066（2026.9.8 托管更新回滚、Doctor 拒绝激活）判断，此版本重点在**更新/激活流程的安全性加固**。
- 链接：openclaw/openclaw Releases · v2026.9.9

### v2026.10.1-beta.2（beta 热修复）
- 相对上一 npm beta 频道版本 2026.10.1-beta.1 的**累积 40 个提交**，明确定位为**热修复 beta**，而非 10 月累计说明的重复。
- Highlights 提及"Updates and Doc..."（原文截断）。
- 链接：https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.1 （对比基线）

> **迁移提示**：由于 v2026.9.8 存在托管更新回滚问题（#164066），建议升级路径直接评估 v2026.9.9 或 2026.10.1-beta 频道；旧工作区升级（如 2026.7.1-2 → 2026.9.x）需留意 Doctor 对 legacy workspace/attestation 的处理（#142585）。**未见明确的破坏性 API 变更声明**，但模型目录与更新流程行为有变化，建议升级前备份 `$OPENCLAW_HOME` 与配置 include 路径。

---

## 3. 项目进展

今日合并/关闭的重要 PR（含已关闭）：

- **#167128 [CLOSED] fix(models): 在 models list 中显示目录认证拒绝**（作者 tianhaotian）
  `openclaw models list` 此前在 provider 目录认证被拒时会静默显示空/部分目录，现已修复为用户可见提示。链接：openclaw/openclaw PR #167128
- **#137729 [CLOSED] 未加保护的 `.trim()` 调用崩溃修复**（作者 daddyclint82）
  修复每个 agent turn 都会执行的两条路径中对 possibly-undefined 字段调用 `.trim()` 导致的 TypeError，属于 **P1 崩溃回归的关闭**，评级 🦞 diamond lobster。链接：openclaw/openclaw Issue #137729
- **#164066 [CLOSED] 2026.9.8 托管更新回滚问题**（作者 DasX）
  即激活 Doctor "undergoing offline maintenance" 拒绝模式，标记为 ux-release-blocker 后关闭。链接：openclaw/openclaw Issue #164066
- **#41199 [CLOSED] A2A 通信工具参数冲突**（作者 chouxiaozi1989）
  长期 stale 的 agent-to-agent `sessions_send`/`message` 参数冲突问题关闭。链接：openclaw/openclaw Issue #41199

**推进程度评估**：今日合并侧更多是**清理与稳定性收敛**（认证可见性、崩溃修复、更新链路关闭），而非新功能落地。同时有多条大型 PR 进入"ready for maintainer look"状态，为下一版本积蓄动能（详见第 6 节）。

---

## 4. 社区热点

按评论数排序的活跃讨论：

| 条目 | 状态 | 评论 | 主题 |
|---|---|---|---|
| #97616 | OPEN | 19 | 僵尸子进程累积与运行时退化 |
| #142585 | OPEN | 19 | 2026.9.3 Doctor 拒绝合法 legacy workspace/attestation |
| #80319 | OPEN | 17 | QA 工具默认值套件混淆 Codex 原生工具与动态工具 |
| #68596 | OPEN | 17 | 可配置流式看门狗超时阈值 |
| #156571 | OPEN | 14 | model-catalog worker 泄漏 tmp 捕获（1–3 GB/min） |

**诉求分析**：
- **稳定性恐慌**：#97616（👍1）与 #156571、#156674、#156712 构成一组"资源泄漏/占用"集群，用户报告从僵尸进程到磁盘占满、再到网关事件循环阻塞，指向**长时间运行下内核资源回收机制不足**。
- **升级信任危机**：#142585（P0、ux-release-blocker）与 #164066 反映用户对**升级/迁移路径**的强烈不信任——Doctor 拒绝合法配置、托管更新回滚，直接打击升级意愿。
- **可配置性质疑**：#68596（👍8，为今日👍最高）显示用户在使用 kimi-k2.5、DeepSeek-R1 等长思考模型时被 30s 看门狗反复打断，诉求是**让硬编码阈值可配置**。
- 链接：openclaw/openclaw Issue #97616 · openclaw/openclaw Issue #142585 · openclaw/openclaw Issue #68596 · openclaw/openclaw Issue #156571

---

## 5. Bug 与稳定性

按严重程度排列（附是否已有 fix PR）：

### P0 / crash-loop / release-blocker
1. **#156571** model-catalog worker 泄漏 `openclaw-plugin-build-*` 源捕获，1–3 GB/min 填满磁盘（2026.9.5 回归）。标签 `clawsweeper:manual-only`、`needs-info` → **无新 fix PR**。链接：openclaw/openclaw Issue #156571
2. **#156712** `openclaw triage` 修复子进程不干净退出，持有 gateway-lifecycle 锁，阻塞应用重启（评级 🐚 platinum hermit）。→ **无新 fix PR**。链接：openclaw/openclaw Issue #156712
3. **#156674** 2026.9.5 macOS 网关资源压力（8 GiB VM，长寿命 Codex worker），停止网关可恢复。→ **无新 fix PR**。链接：openclaw/openclaw Issue #156674
4. **#160959** 网关在捕获大型外部插件时阻塞数分钟（2026.9.6 回归，源自 #144252）。→ **源码可复现，无新 fix PR**。链接：openclaw/openclaw Issue #160959
5. **#142585** Doctor 拒绝合法 legacy workspace setup 与 attestation 导入（2026.7.1-2 → 2026.9.3 迁移阻断）。→ 长期开放，无新 fix PR。链接：openclaw/openclaw Issue #142585

### P1（崩溃 / 消息丢失 / 会话状态）
- **#97616** hook/tool 子进程未回收 → 僵尸累积、运行时退化（19 评论，今日最热）。→ 无新 fix PR。链接：openclaw/openclaw Issue #97616
- **#118839** "restart recovery claim changed before agent adoption" 在 2026.7.2-beta.7 复现（WebChat → Telegram 绑定会话）。→ 无新 fix PR。
- **#157647** Claude CLI 后台化 Bash turn 静默，命中无输出看门狗（v2026.9.6）。→ 无新 fix PR。
- **#112259** 可见入站频道 turn 被静默丢弃（零负载 dispatch 无重试/死信/用户可见失败）。→ needs-info。
- **#121558** Cron 隔离运行将 claude-cli 运行叙事融合进宣告消息（maintainer 标签）。→ 有 linked PR open。
- **#84983** 原生 cron agent-turn 触发饱和网关事件循环（高严重度，可致所有聊天传输数分钟无响应）。→ 无新 fix PR。
- **#140455** google-meet 2026.9.2 agent 语音损坏（循环 JSON 通话崩溃 + 音频路由）。→ needs-live-repro。

### 已关闭（今日）
- **#137729**（P1 崩溃）已关闭 ✅
- **#164066**（P0 更新回滚）已关闭 ✅

**趋势判断**：资源泄漏类（进程/磁盘/事件循环）是今日最大的稳定性风险簇，且多数**尚无 fix PR**，建议维护者优先排期。

---

## 6. 功能请求与路线图信号

结合已有 PR 判断可纳入下一版本的方向：

- **运行状态与 accepted-send 契约**：PR #162872 `feat(native): add run status and accepted-send contracts`（vincentkoc，ready for maintainer look），是原生客户端活动注册前置，**信号强**。链接：openclaw/openclaw PR #162872
- **MXC 沙箱策略独立选择**：PR #164935 `feat(mxc): let agents select separate sandbox policies`（依赖 #166632），回应 #78096 的按 agent 隔离诉求，带 `merge-risk: compatibility/security-boundary`。链接：openclaw/openclaw PR #164935
- **Cron 保留运行记录 CLI 可读**：PR #167253 `feat(cron): read retained run transcripts from the CLI`（Closes #167242），**可预期进入下一版本**。链接：openclaw/openclaw PR #167253
- **频道身份链接管理**：PR #164607 在现有 Profile 中管理 channel identity links。链接：openclaw/openclaw PR #164607
- 用户侧需求（尚无直接 PR）：**可配置流式看门狗超时**（#68596，👍8）、**`/models test-fallback`**（#6599）、**A2A 单向 dispatch 模式**（#44309）、**按 agent 的 agentToAgent/会话可见性作用域**（#59149）、**多索引 embedding 记忆 + 模型感知 failover**（#63990）、**agent 自触发上下文压缩**（#6757）、**单网关多 Teams bot**（#71058）、**Anthropic advisor 工具支持**（#63930）。

---

## 7. 用户反馈摘要

- **升级路径最痛**：多位用户在 2026.7.x → 2026.9.x 迁移中遭遇 Doctor 误拒（#142585），并在 2026.9.5→9.8 托管更新中经历回滚（#164066），直言"合法配置被拒"，反映**升级/激活流程的可预测性不足**。
- **长时运行退化**：僵尸进程（#97616）、tmp 磁盘暴涨（#156571）、网关事件循环被 cron/插件捕获阻塞（#84983、#160959）——用户场景多集中在**长期在线、多插件、cron 密集**的部署，核心痛点是"跑一段时间就慢/崩"。
- **长思考模型被打断**：#68596 用户抱怨使用 kimi-k2.5、DeepSeek-R1 时看门狗 30s 告警频繁触发，希望阈值可配。
- **推理流渲染缺失**：#88079 反馈 WebChat 中 Kimi Code 与 DeepSeek Reasoner 的 `reasoning_content` 不显示，仅 MiniMax 正常。
- **跨频道消息静默丢失**：#112259、#101793（Signal 中工具调用前的助手文本被丢弃）、#142037（Slack 顶层回复被记为 mute）——**消息可靠性**是反复出现的抱怨。
- **正向信号**：GPT-6.1 Sol 支持（v2026.9.9）与"更安全的更新"被列为首要亮点，说明模型接入速度与更新安全性是用户关注的两端。

---

## 8. 待处理积压（长期未响应，提醒维护者）

- **#6599**（创建 2026-02-01，👍1，P3）`/models test-fallback` 命令，stale + needs-product-decision。链接：openclaw/openclaw Issue #6599
- **#6757**（2026-02-02，👍2）agent 自触发上下文压缩，needs-product-decision。链接：openclaw/openclaw Issue #6757
- **#41199**（2026-03-09）A2A 参数冲突 —— 今日已 CLOSED ✅
- **#44309**（2026-03-12，👍1）A2A 单向 dispatch 模式，stale + needs-maintainer-review。
- **#44965**（2026-03-13，👍1）流重复保护（Halt & Confirm），stale。
- **#48709**（2026-03-17）Gemini 2.5 Pro textSignature 膨胀 + think 标签，stale，session-state/message-loss。
- **#53408**（2026-03-24，👍2）长对话后 write/exec 工具参数被静默丢弃，needs-info，仍无 fix PR。链接：openclaw/openclaw Issue #53408
- **#59149**（2026-04-01，👍2）按 agent 的可见性/agentToAgent 作用域，需安全评审，有 linked PR open。
- **#63990**（2026-04-10，👍1）多索引 embedding 记忆，needs-product-decision。
- **#71058**（2026-04-24，👍1）单网关多 Teams bot，needs-product-decision。
- **#68596**（2026-04-18，👍8）流式看门狗阈值可配 —— **今日最高赞待办**，建议优先响应。
- **#97616 / #84983 / #112259** 等 P0/P1 虽非"长期无响应"（今日仍在更新），但**无 fix PR** 且评论持续增长，同样需排期。

链接汇总：openclaw/openclaw Issue #68596 · openclaw/openclaw Issue #53408 · openclaw/openclaw Issue #48709

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**数据日期：2026-10-08**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态已进入**规模化后的"稳定性清算期"**：头部的 OpenClaw、ZeroClaw、Hermes Agent 单日 Issue/PR 更新均达 47–50 条量级，但当日合并率普遍低于 5%，供给端（贡献产出）已明显快于需求端（评审吞吐），评审带宽成为全生态的共同瓶颈。技术竞争焦点从"能否接入更多模型"转向**长时运行的资源治理**（进程/磁盘/事件循环泄漏）与**状态可见性**（消息是否排队、失败是否可见、成本是否可测），OpenClaw、ZeroClaw、PicoClaw、LobsterAI 不约而同出现"静默丢弃/静默失败"类投诉。安全边界成为第二个共识战场：沙箱后端（firejail/bubblewrap/Vault）、凭证作用域与插件载荷加固在 ZeroClaw、Hermes、Moltis 同时爆出 P0/P1 问题。生态格局呈"一超多强"：OpenClaw 以体量充当事实参照系，其余项目在渠道、部署形态、评测或 UI 透明度上做差异化切分。

---

## 2. 各项目活跃度对比（2026-10-08）

| 项目 | Issue 更新（新开/活跃·关闭） | PR 更新（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 500（394·106） | 500（335·165） | ✅ v2026.9.9 稳定版 + v2026.10.1-beta.2 | 极高活跃；功能推进慢于稳定性清障；资源泄漏簇无 fix PR |
| **ZeroClaw** | 47（46·1） | 50（48·2） | ❌ | 高活跃、极低合并率；沙箱安全簇（4 条 p1）全无 fix |
| **Hermes Agent** | 50（47·3） | 50（45·5） | ✅ v0.21.6 补丁 | 高活跃；install/update 子系统为最大风险热点 |
| **CoPaw** | 27（15·12） | 26（21·5） | ❌ | 高热度、评审拥堵；"Issue 已关、fix PR 未合"风险窗口 |
| **NanoBot** | 4（约3·1） | 46（19·27） | ❌ | 健康态；代码推进快于问题积压，Response API 收敛主线 |
| **LobsterAI** | 1 | 22（7·15） | ❌ | 积压清理积极（清 3 月旧 PR）；新功能平缓 |
| **PicoClaw** | 2 | 7（7·0） | ❌ | 低活跃、全 stale；问题诊断充分但审查停滞 |
| **IronClaw** | 2（2·0） | 3（3·0） | ❌ | 静默推进；0 合并，Sendblue 提案+实现并行出现 |
| **NullClaw** | 0 | 3（3·0） | ❌ | 低-中；PR 队列积压，核心 PR #971 滞留 3 个月+ |
| **NanoClaw** | 1（1·0） | 1（1·0） | ❌ | 低位但结构健康；1 个高严重度持久化 Bug 无 fix |
| **Moltis** | 1（0·1 关闭） | 0 | ❌ | 低位；安全类 Issue #1177 无修复记录即关闭，闭环存疑 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | ❌ | 无活动 |

> 注：OpenClaw 数据量级为其余项目 10 倍以上，"500 条"为其日报上限值。空白项表示当日无该类活动。

---

## 3. OpenClaw 在生态中的定位

**社区规模**：体量级断层领先。单日 Issue 更新 500 条（NanoBot 4 条、Hermes 50 条），当日发布 2 个版本（稳定 + 热修 beta），是唯一维持"日更级"发布节奏的项目，事实上充当生态参照系（LobsterAI 的 `chat.send`、`traceparent` 传递、执行模式沙箱映射均依赖 OpenClaw）。

**优势**：
- **模型接入速度**：v2026.9.9 即落地 GPT-6.1 Sol（托管 Codex app-server 模型目录），生态中唯一。
- **协议层成熟度**：A2A 通信、cron、频道身份链接等能力已被下游复用。
- **生态吸附力**：LobsterAI、PicoClaw 等衍生项目直接复用其运行时与沙箱语义。

**技术路线差异**：
- 以"**网关（gateway）为中心**"的长时在线架构，天然放大资源回收问题（僵尸进程 #97616、事件循环阻塞 #84983、tmp 磁盘暴涨 #156571）——这是其体量的代价，也是当前最大痛点簇。
- 相比 Hermes 的"安装/更新子系统"视角、ZeroClaw 的"Rust + 多沙箱后端"视角，OpenClaw 更强调**协议与托管模型目录**的统一。
- 更新/激活流程（Doctor、attestation）为其独有复杂性，也是升级信任危机来源（#142585、#164066）。

**短板**：当日合并侧无功能落地，全部为稳定性收敛（认证可见性、`.trim()` 崩溃、更新回滚关闭），处于"版本前清障"阶段，增量功能蓄势于 ready-for-maintainer-look 队列（#162872、#167253）。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **上下文压缩（compaction）节流与幂等** | NanoBot（#6106、#5781、#6084）、OpenClaw（#6757） | 空会话自触发 compaction、Dream 任务 25–111 分钟空转、compaction 提示刷屏；缺节流与可配置开关 |
| **静默失败 / 消息丢失可见性** | PicoClaw（#3408、PR #3412）、OpenClaw（#112259、#101793）、NanoClaw、CoPaw | 忙碌时消息静默排队/丢弃、失败 turn 无提示、队列满无反馈；诉求集中为"queue/events surface" |
| **长时运行资源泄漏** | OpenClaw（#97616 僵尸进程、#156571 磁盘、#84983 事件循环）、CoPaw（#7722 三重内存路径）、Hermes | 长时间在线、多插件、cron 密集部署下"跑一段时间就慢/崩" |
| **沙箱 / 安全边界可信度** | ZeroClaw（#11540 bubblewrap 静默降级、#11594 firejail_args 假生效）、Hermes（#133856 API key 误判 OAuth）、Moltis（#1177 Vault 端点缺认证） | 配置"已设置但不生效"、静默降级、认证缺失，安全边界不可信 |
| **可配置性与"配置不生效"** | OpenClaw（#68596 看门狗阈值）、NanoBot（#5781 maxIterations 被忽略）、ZeroClaw（#11599 native_tools 被忽略） | 硬编码阈值需可配；配置声明后行为无反馈或与文档不符 |
| **Provider 能力静态声明** | NanoBot（#5204）、ZeroClaw（#11599）、Hermes（#49449） | 逐模型打补丁导致重复劳动，需统一的请求 API / 上下文上限声明机制 |
| **成本/用量可观测性** | LobsterAI（#2814 已合入）、ZeroClaw（#11535）、OpenClaw（#2814 呼应） | 每轮 Token/缓存命中/Trace ID 展示，让隐式调用可见 |
| **iMessage/SMS 渠道扩展** | IronClaw（#8130 + #8127）、NanoBot（#6081 Sendblue） | 两项目同日出现 Sendblue 通道提案，渠道差异化竞争显现 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构差异 |
|---|---|---|---|
| **OpenClaw** | 网关 + 协议 + 托管模型目录 | 长时在线、多插件、cron 密集部署者 | 长生命周期网关；Doctor/attestation 更新流程；最大生态 |
| **ZeroClaw** | 安全沙箱 + 多频道 + 插件系统 | 安全敏感的企业/自托管运维者 | Rust；firejail/bubblewrap 多沙箱后端；RFC/ADR 治理流程 |
| **Hermes Agent** | 安装/更新工具链 + 插件目录 + 连接器 | 桌面端 / Docker / Cloud 多形态用户 | `hermes pm` 工具链、Desktop hand-off、PM runtime；Nous 身份体系 |
| **CoPaw** | 多租户 Hub + 评测 + 插件市场 | 团队部署 / 内网离线 / 混合路由 | 多租户 2.2.0、Harbor 评测（GAIA/SWE-bench）、XL 级插件化 |
| **NanoBot** | Provider / Responses API 兼容层 | 多 provider 接入开发者 | SSE 流式事件路由、Session/Skills/SDK 防御性修复 |
| **PicoClaw** | Web UI 透明度 | 嵌入式/轻量部署（Sipeed） | Web UI 状态可见性为主线；子智能体编排 |
| **IronClaw** | 渠道扩展 + 工具选择 | 通信渠道直连需求者 | loop-host embeddings 工具选择；host-owned credentials |
| **LobsterAI** | Office 产物 + Cowork 成本可观测 | 办公场景（网易有道） | 复用 OpenClaw 运行时；积分/Token/Trace 单轮展示 |
| **NanoClaw** | 持久化一致性 | 容器化部署 | `outbound.db` 恢复路径；channel 弱网自愈 |
| **NullClaw** | 流式原生工具调用 | SSE 流式 provider 集成方 | agent loop 解耦 stream callback 与原生工具 |
| **Moltis** | Vault / 安全 | 密钥管理敏感场景 | Vault 解锁/恢复端点 |

**关键分野**：OpenClaw/ZeroClaw/Hermes 走"重运行时 + 工具链"路线；NanoBot/NullClaw/IronClaw 走"轻量 + 协议适配"路线；PicoClaw/LobsterAI 走"复用 OpenClaw 底座 + 垂直场景"路线。

---

## 6. 社区热度与成熟度分层

**T1 · 快速迭代 + 高热度（规模扩张期）**
- **OpenClaw**：日更版本、500 级更新量，但功能推进让位于稳定性清障。
- **Hermes Agent**：补丁版本汇总约 2,100 PR，install/update 子系统风险突出。
- **ZeroClaw**：48 待合并 PR，安全簇积压，治理 Tracker 高热（#8692 15 评论）。
- **CoPaw**：34 评论路线图讨论（#7318）、21 待合并 PR，评审拥堵。

**T2 · 质量巩固 / 结构性收敛**
- **NanoBot**：Review 吞吐良好（27/46 合并），主线为 Provider 协议收敛，属健康巩固。
- **LobsterAI**：集中清理 3 月旧 PR（15 条合并/关闭），新功能平缓。
- **OpenClaw**（同时属于 T1）：合并侧全为稳定性收敛，处于"版本前清障"。

**T3 · 低活跃 / 审查停滞（吞吐待打开）**
- **PicoClaw**：7 条 PR 全 stale，0 合并，但修复方案已覆盖全部已诊断 Bug，一旦开审可批量关闭。
- **NullClaw**：核心 PR #971 滞留 3 个月+。
- **IronClaw / NanoClaw / Moltis**：低位推进，各有 1 个高优先未修复议题。
- **TinyClaw / ZeptoClaw**：无活动。

**成熟度判断**：NanoBot 的"高合并率 + 低 Issue 积压"是生态中最健康的信号；OpenClaw/Hermes/ZeroClaw/CoPaw 处于"体量已大、评审成瓶颈"的典型扩张期；PicoClaw/NullClaw 属"方案待审"型停滞。

---

## 7. 值得关注的趋势信号

**信号一：评审带宽成为生态级瓶颈，而非开发能力。**
ZeroClaw 合并率 4%、CoPaw 21:5、IronClaw 0 合并、PicoClaw 全 stale、NullClaw 连续无合并。多个项目出现"已诊断 + 已修复但不合入"（CoPaw #8010 积压 10 天、#7869 积压 20 天）。**对开发者参考**：贡献 PR 前应评估目标项目的 review 吞吐，超大 PR（XL/XXXL）在拥堵期落地概率显著下降。

**信号二：Context 压缩成为新一代架构级风险点。**
NanoBot 三条热点全指向 compaction（API 费用激增、任务空转、提示刷屏），并有 `dream.maxIterations` 配置被忽略。**对开发者参考**：compaction 需内置节流、幂等与可配置开关，否则在空会话与长会话两端都会失控，且直接传导为用户成本焦虑。

**信号三："配置了但不生效"正在侵蚀安全与信任。**
ZeroClaw `firejail_args` 假生效、bubblewrap 静默降级；NanoBot `maxIterations` 被忽略；ZeroClaw `native_tools` 被静默忽略；Hermes API key 被误判身份。**对开发者参考**：安全敏感项必须"生效或显式报错"，静默降级是比失败更严重的设计缺陷。

**信号四：成本可观测性从"nice to have"升级为刚需。**
LobsterAI 将每轮 Token/Trace 落至单轮粒度（#2814），OpenClaw 用户量化出 78% 提示词重复注入（#2440），NanoBot 用户因 API 用量异常不安（#6106）、ZeroClaw 恢复 turn 成本归因（#11535）。**对开发者参考**：单轮粒度的用量与成本展示将成为个人 AI 助手的默认期望。

**信号五：Provider 能力静态声明将取代逐模型打补丁。**
NanoBot #5204（p1，挂起 68 天）本可避免今日三条 GPT-6/muse-spark 路由 PR 的重复劳动；ZeroClaw、Hermes 均有同类需求。**对开发者参考**：多 provider 项目应尽早引入"每模型声明其支持的请求 API 与上下文上限"的元数据层。

**信号六：渠道从"聊天"扩展到"生活通道"。**
IronClaw 与 NanoBot 同日出现 Sendblue iMessage/SMS，且 IronClaw 强调 host-owned credentials、白名单配对、认证 webhook。**对开发者参考**：渠道扩展正从 Slack/Discord/Telegram 向 SMS/iMessage 这类需凭证责任边界设计的通道延伸，安全模型需前置设计。

**信号七：Web UI 透明度成为独立竞争力。**
PicoClaw 以 #3406 系列（诚实工作指示器、全局会话侧边栏、队列状态）系统化推进；CoPaw 出现 21 条待合并 UI/性能 PR；ZeroClaw 报告 backdrop-filter 逐帧 GPU 占用。**对开发者参考**：状态可见性与渲染性能是可被用户直接感知的体验分水岭，与后端稳定性同等重要。

---

*本报告所有结论均基于 2026-10-08 提供的各项目 GitHub 动态数据，未引入外部信息；对数据截断或缺失处均已相应保留而未作推断性补全。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报（2026-10-08）

## 1. 今日速览

NanoBot 今日维持高强度开发节奏：过去 24 小时共 46 条 PR 更新（27 条合并/关闭，19 条待合并），Issues 更新仅 4 条，呈现"代码推进快于问题积压"的典型健康态。合并/关闭的 PR 高度集中于 **Provider / Responses API 兼容层**，覆盖 xAI Grok、OpenAI Codex、GitHub Copilot GPT-6、OpenCode Go muse-spark 等多条接入链路，说明官方 Responses 协议收敛是当前主线工程。同时 Session/Skills/SDK 侧出现多项防御性修复（打包失败保护、导入校验顺序、JSON 结果摘要），体现维护者对数据安全的关注。今日无新版本发布，仍有 1 条 Open Issue 与 19 条待合并 PR 需要推进。

---

## 2. 版本发布

今日无新版本发布。当前用户反馈中出现的版本为 **nanobot v0.3.5**（见 Issue #6084、#6088）。

---

## 3. 项目进展

今日合并/关闭 27 条 PR，核心推进方向如下：

**Provider 协议层（本日最大主题）**
- [#5863](https://github.com/HKUDS/nanobot/pull/5863) / [#5834](https://github.com/HKUDS/nanobot/pull/5834)：`consume_sse_with_reasoning` 补齐 `response.reasoning_text.delta/.done` 事件处理，与 `consume_sdk_stream` 行为对齐（均标记 `conflict`，Fixes #5833）。
- [#6051](https://github.com/HKUDS/nanobot/pull/6051)：按 `item_id` 路由 Responses 工具参数事件，修复 `response.function_call_arguments.delta/.done` 的流式归属问题（标记 `regression`）。
- [#6020](https://github.com/HKUDS/nanobot/pull/6020)：修复 OpenAI SDK 3.8.0 下 `model_dump()` 未使用 `by_alias=True` 导致 `async_` 字段序列化错误。
- [#5935](https://github.com/HKUDS/nanobot/pull/5935)：将 GitHub Copilot GPT-6 路由至 Responses API，并保留 Responses-only 模型于发现目录。
- [#6105](https://github.com/HKUDS/nanobot/pull/6105) / [#5906](https://github.com/HKUDS/nanobot/pull/5906)：OpenCode Go 的 `muse-spark-*-contributor` 模型改走 Responses，规避 `/chat/completions` 返回 500 的问题。

**数据安全与 SDK 健壮性**
- [#6047](https://github.com/HKUDS/nanobot/pull/6047)：打包失败不再截断/删除既有可用归档，改为临时文件 + 成功后再替换。
- [#6048](https://github.com/HKUDS/nanobot/pull/6048)：`SessionClient.ingest` 改为先校验并复制全部输入再变更 session，避免失败导入被持久化。
- [#5590](https://github.com/HKUDS/nanobot/pull/5590)：对超大 JSON 工具结果做根标量/嵌套容器尺寸摘要，保留完整落盘输出。

**WebUI**
- [#6089](https://github.com/HKUDS/nanobot/pull/6089)：以内置目录选择器替换原生工作区选择器，统一圆角样式并精简编辑器操作（标记 `webui`、`feature`）。

**整体判断**：项目在"多 provider 兼容性"这一长期痛点上取得成批推进，属于结构性改进而非零散修补；但多条 PR 带有 `conflict` 标记，暗示同一文件的并行改动较多，后续合并可能需人工解冲突。

---

## 4. 社区热点

今日评论数最多的话题：

- [#6106](https://github.com/HKUDS/nanobot/issues/6106)（CLOSED，4 条评论）— 空会话上 compaction 反复触发并自我触发，用户报告 API 调用量异常飙升。
- [#5781](https://github.com/HKUDS/nanobot/issues/5781)（CLOSED，4 条评论）— Dream 定时整合任务陷入 25–111 分钟循环，反复读取同两个文件，接近 200 次工具调用上限。
- [#6084](https://github.com/HKUDS/nanobot/issues/6084)（OPEN，1 条评论）— Slack 频道 compaction 提示以两条永久消息形式刷屏。

**诉求分析**：三条热点全部指向同一根因域——**记忆/上下文压缩（compaction）机制缺乏节流与幂等控制**。用户关切的不仅是消息噪音（#6084 的体验层面），更是成本与稳定性（#6106 的 API 费用异常、#5781 的长时间空转）。这是当前社区最集中、最具共识的痛点，且 #6106 在创建当日即被关闭，说明修复响应速度较快。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#6106](https://github.com/HKUDS/nanobot/issues/6106) 空会话触发 compaction 并自我循环，导致 API 调用异常激增 | 已关闭 | 未见对应 PR 列出 |
| 🟠 中 | [#5781](https://github.com/HKUDS/nanobot/issues/5781) Dream 整合任务 25–111 分钟循环、重复 read_file，`dream.maxIterations` 已废弃/被忽略，实际套用全局 200 次上限 | 已关闭 | 未见对应 PR 列出 |
| 🟠 中 | [#6107](https://github.com/HKUDS/nanobot/pull/6107)（OPEN）大体积内联图片批次延迟首响应事件、诱发传输超时；同时修复 Codex 传输恢复 | 待合并 | 本 PR 即修复 |
| 🟡 低 | [#6088](https://github.com/HKUDS/nanobot/issues/6088) WebUI 暗色模式下 Delete 按钮对比度过低（`--destructive: 0 62.8% 30.6%`） | 已关闭 | 未见对应 PR 列出 |
| 🟡 低 | [#6038](https://github.com/HKUDS/nanobot/pull/6038)（OPEN）已批准的 Signal DM 配对身份未通过 DM 策略校验，文本被清空或重复配对 | 待合并 | 本 PR 即修复 |

**回归提示**：[#6051](https://github.com/HKUDS/nanobot/pull/6051) 明确标记为 `regression`，属"修复即回归"类，说明 Responses 事件路由此前存在不完整实现。

**待验证**：两条已关闭的高/中严重度 Issue（#6106、#5781）在本次数据中未见对应 fix PR 编号，建议维护者确认其关闭方式（是否由其他 PR 一并修复或标记为无法复现）。

---

## 6. 功能请求与路线图信号

- **Slack compaction 提示可配置**（[#6084](https://github.com/HKUDS/nanobot/issues/6084)，OPEN）：用户请求新增 `showCompactionNotices` 开关或改为原地编辑而非发送两条永久消息。目前建议方案已明确到 API 层面，具备直接落地条件，且与 #6106 的 compaction 主线高度协同。
- **Sendblue iMessage / SMS 通道**（[#6081](https://github.com/HKUDS/nanobot/pull/6081)，OPEN）：新增原生 Sendblue channel，支持通过 iMessage/SMS 与 agent 对话，配套包含免费账号注册、手机/联系人验证、模型前置条件与设置指南。该 PR 自 10-05 起仍在待合并状态，是当前最完整的渠道扩展提案。
- **按模型预设声明请求 API**（[#5204](https://github.com/HKUDS/nanobot/pull/5204)，OPEN，`priority: p1`）：为每个模型预设声明其支持的请求 API 并在 WebUI 中暴露，避免 Copilot GPT-6、Responses-only 自定义网关模型被错误路由到 Chat Completions 导致带函数工具的推理失败。此 PR 创建于 2026-08-01，已挂起逾两个月，且今天合并的 #5935、#6105、#5906 均为其"逐模型打补丁"的临时方案——**建议优先推进该 PR 以收敛重复劳动**。

**路线图推断**：compaction 节流/可配置、静态 provider 能力声明、新消息通道三者最可能进入下一版本；compaction 相关改动因同时命中热点 Issue 与稳定性风险，优先级最高。

---

## 7. 用户反馈摘要

- **成本敏感度高**：用户 SPHINXUSS 明确描述"隔夜空置会话后 API 用量异常"，反映出用户对后台隐式调用缺乏可见性与控制手段的强烈不安（[#6106](https://github.com/HKUDS/nanobot/issues/6106)）。
- **长时间任务静默失控**：BrianMwangi21 详述 Dream 任务 25–111 分钟循环与 200 次工具调用，且指出 `dream.maxIterations` 配置被忽略，属于"配置无效"这一类高挫败感反馈（[#5781](https://github.com/HKUDS/nanobot/issues/5781)）。
- **渠道体验细节未打磨**：ccaryotakis 指出 Slack（Socket Mode）下每次 compaction 产生两条永久消息，且 `idleCompactAfterMinutes` 会加剧该现象（[#6084](https://github.com/HKUDS/nanobot/issues/6084)）。
- **无障碍/视觉问题被注意到**：zshanpatel 提交暗色模式对比度问题并附上具体 CSS 变量值，反馈质量高、可复现性强（[#6088](https://github.com/HKUDS/nanobot/issues/6088)）。
- **总体情绪**：用户在报告问题时普遍附带版本号、环境与配置细节，说明用户群体技术成熟度较高；不满集中于"后台行为不可控 + 配置不生效"，而非功能性缺失。

---

## 8. 待处理积压

- [#5204](https://github.com/HKUDS/nanobot/pull/5204) — **`priority: p1`，创建于 2026-08-01，已挂起 68 天**。作为 provider API 声明机制的顶层方案，本可避免今日三条 GPT-6/muse-spark 路由 PR 的重复修补。**建议优先 review。**
- [#6038](https://github.com/HKUDS/nanobot/pull/6038) — 创建于 2026-10-04，Signal 已批准 DM 配对身份被策略拒绝，涉及消息丢失，待合并。
- [#6081](https://github.com/HKUDS/nanobot/pull/6081) — 创建于 2026-10-05，Sendblue 通道，功能完整度高但已停留 3 天待合并。
- [#6107](https://github.com/HKUDS/nanobot/pull/6107) — 今日新开，涉及图片批次性能与 Codex 传输恢复，同时带 `bug`、`performance`、`documentation` 多标签，需关注其范围是否过大而拖慢评审。
- [#6084](https://github.com/HKUDS/nanobot/issues/6084) — 当前唯一仍处 OPEN 的 Issue，自 10-06 起 1 条评论，具体方案已明确，**建议维护者给出明确采纳/拒绝表态**。

**健康度补充提醒**：今日关闭的 PR 中至少 3 条（#5863、#5834、#6051）带有 `conflict` 标记，反映 Responses 解析相关文件存在多路并行修改。建议维护者评估是否需要在合并窗口上做协调，以降低后续 rebase 成本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 — 2026-10-08

## 1. 今日速览

过去 24 小时项目维持高强度活跃：50 条 Issue 更新（47 条新开/活跃、3 条关闭）、50 条 PR 更新（45 条待合并、5 条已合并/关闭），并有 1 个新版本 v0.21.6 发布。当日流量高度集中在 **安装/更新（area/install-update）** 主题上——Issue 前 20 名中有超过半数带有该标签，且大量指向 Desktop 更新交接（hand-off）与 `hermes pm` 工具链的失败路径，形成明显的稳定性热点。同时，插件目录（Plugin Catalog）类 PR 持续活跃，社区提交了语音、记忆等新插件条目。总体判断：**迭代节奏快、社区贡献旺盛，但安装/更新子系统是本周期最突出的健康度风险点**。

---

## 2. 版本发布

### v0.21.6（2026-10-08）
- 性质：**补丁版本**。将 v0.21.5 之后合并的约 **2,100 个 PR** 汇总为一个稳定 tag，用于 Docker 与 Hermes Cloud。
- 官方说明：该窗口的完整精选发布说明将随 **v0.22.0** 一同提供。
- 发布说明主体为 build 表格占位符（`<!-- HERMES_BUILDS_TABLE -->`），数据源中未见具体条目。
- **破坏性变更 / 迁移注意事项**：所给材料中未提供相关信息，无法确认。

链接：NousResearch/hermes-agent v0.21.6

---

## 3. 项目进展（今日合并/关闭）

所给数据中，PR 侧 5 条已合并/关闭记录未列出标题；今日快照中可确认关闭的重要 Issue 为：

- **#134765 [CLOSED] Bundled `solstice` provider plugin fails to load — No module named 'httpx'**
  与仍处 OPEN 状态的同源 Issue #134107 描述同一症状（插件顶层 httpx 导入失败、警告污染终端/TUI）。该条关闭表明修复路径已存在，但需注意：**#134107 仍开放且评论数更高（32 条）**，说明问题本身尚未在大范围用户侧被判定为彻底解决。
  链接：NousResearch/hermes-agent Issue #134765

其余合并/关闭 PR 内容在所给材料中不可见，无法评估具体推进的功能。整体上，当日可见的"向前推进"信号主要来自 **插件目录条目更新**（如 #135167 memtomem v0.6.7→v0.6.8、#134468 voicestudio、#135165 Antfly Lite、#135142 hermes-dreaming 2.2.0），属于生态扩展而非核心功能落地。

---

## 4. 社区热点

| 排名 | 条目 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | #125727 [OPEN] Automated Nous integration is blocked（acp_adapter、agent 等多文件冲突） | 33 | 0 | Issue #125727 |
| 2 | #134107 [OPEN] solstice provider 在 stripped PM runtime 中加载失败（顶层 httpx 导入，警告泄漏到 TUI） | 32 | 1 | Issue #134107 |
| 3 | #133992 [OPEN] macOS Desktop 更新交接拒绝自己的 `hermes update`（custodian + 秒级 delegate） | 21 | 2 | Issue #133992 |
| 4 | #16004 [OPEN] max tool-call 迭代耗尽后的可配置有界 auto-continue | 18 | 2 | Issue #16004 |
| 5 | #122425 [OPEN] Managed env workspace 副本随更新漂移、缺安装元数据、无 pm sync | 14 | 0 | Issue #122425 |

**诉求分析：**
- 榜首 #125727 是一场**调度式合并的冲突阻塞**，涉及 `acp_adapter/permissions.py`、`agent/*` 等核心路径——属于仓库内部集成流程问题，而非终端用户功能，但占据最高讨论热度。
- #134107 / #133992 代表两类**用户体验直接受损**的问题：终端/ TUI 渲染被警告污染，以及桌面端更新按钮"100% 失败"。这类问题因可见性极强，天然吸引大量评论。
- #16004 则是**功能期望型**讨论（agent 在迭代预算耗尽后如何优雅收尾），评论与点赞分布显示它有真实的长会话场景支撑。

---

## 5. Bug 与稳定性

按严重程度排列（P1 优先）：

### P1
- **#133856** [OPEN] Anthropic 以 `sk-ant-usr-` 开头的 API key 被误判为 OAuth token，导致按量付费 key 被赋予 Claude Code 身份（`agent/anthropic_credentials.py::_is_oauth_token()`）。标签含 `sweeper:risk-security-boundary`、`area/billing`。**材料中未见 fix PR。** → Issue #133856
- **#79087** [OPEN] Windows 桌面：runtime probe 超时把健康安装误判为首次运行引导，并提议覆盖重装。含 `sweeper:risk-platform-windows`。（作者已在正文中撤回"双后端"的原始判断。）→ Issue #79087

### P2
- **#133992 / #134268 / #134602** [均为 OPEN] — **同一根因的三连报**：Desktop 更新交接传错了自己的 PID / 拒绝了自身持有的 marker，导致 `hermes update` 以 exit 2 自锁、桌面端无限重试。涉及 macOS/posix。三个 Issue 分别有 21 / 3 / 3 条评论，**说明该缺陷影响面广且持续复现**。→ #133992 / #134268 / #134602
- **#122425** [OPEN] Managed env workspace 副本不被 `hermes update` 重新同步，导致两套 runtime 行为分叉，`pm doctor` 崩溃。→ Issue #122425
- **#134029** [OPEN] `hermes pm update node` pin 解析 HTTP 404（node 26.10.0 的 lock/mirror 漂移）。→ Issue #134029
- **#125537** [OPEN] `hermes pm gc` 测量的是执行中快照的 install key，因此静默地什么也没回收（报告成功）。→ Issue #125537
- **#131961** [OPEN] Windows + 托管 Python 3.14.7 下 `hermes update` 失败（uv 无法安装 firecrawl-anydoc，"Missing .dist-info directory"）。→ Issue #131961
- **#85840** [OPEN] `hermes update` 吞掉 uv/pip stderr，把 Python 依赖失败误报为 "Git update failed"。→ Issue #85840
- **#102081** [OPEN] Linux 终端执行 `hermes desktop` 报长日志错误。→ Issue #102081
- **#134858** [OPEN] Cron 的 `no_agent` 每日任务在调度层被静默跳过（第 3 次发生），无 executions.db 记录、无 fire lock，同级任务正常。含 `sweeper:risk-automation`。→ Issue #134858

### P3
- **#134107** [OPEN] solstice 插件 httpx 导入失败，警告经继承的 stderr 泄漏并打乱 TUI 布局（同源 #134765 已关闭）。→ Issue #134107
- **#133435** [OPEN] 已提交的 `package-lock.json` 固定了 18 个高危 npm 漏洞（undici、electron、axios、js-yaml 等），本地无法修复。→ Issue #133435
- **#72668** [OPEN] Telegram adapter 把 `_redact_telegram_error_text(error)` 写进了 logger 的**格式字符串**而非参数位，错误日志实际未脱敏。→ Issue #72668
- **#135131** [OPEN] `tools.lazy_deps.install_specs` 在运行时安装已退役后无条件抛 ImportError，使插件（如记忆 provider）误判依赖不可用。**已有 fix PR：#135162**（"the retired install_specs shim answers from import truth"）。→ Issue #135131 / PR #135162

---

## 6. 功能请求与路线图信号

- **#16004** 可配置的有界 auto-continue：当 tool-call 迭代预算耗尽时，允许在边界内继续而非直接进入无工具的总结。（P2，needs-decision）
- **#118873** kanban：释放 `needs_input`（人类决策）阻塞时要求显式人工确认；与 #114163 互补，属更窄的"释放时门禁"。
- **#135151** [PR，blocked]" TUI 与 CLI 管理命名连接器账户：`/connectors` 与 `hermes connectors`，支持列出/重命名/添加/重连/移除托管应用的多个命名账户。需在 #135097 之后合并。
- **#135143** [PR] 连接器首次使用时的访客身份：没有 Nous 账户的用户首次请求应用时，Hermes 自动为其创建免费 Nous 身份（CLI、TUI、消息网关与所有桌面构建）。堆叠在 #135072 之上。

**纳入下一版本的可能性判断：** #135151 与 #135143 是同日提交、彼此堆叠且带 P2/security-boundary 标签的活跃 PR，最有可能进入 v0.22.0 窗口；#16004 与 #118873 均带 `needs-decision`，短期落地概率低。

---

## 7. 用户反馈摘要

- **安装/更新是最大痛点**：大量用户报告更新失败、更新无法重入、更新后环境不一致。#133992 作者明确指出"每一次"从桌面 Update 按钮发起的更新都以 exit 2 失败；#134268 描述"一次重启后便无限循环重试"。这类反馈指向更新交接机制（hand-off）的 PID/marker 语义存在系统性缺陷。
- **平台差异明显**：Windows 侧集中在 Python 3.14 + uv 依赖安装与 runtime probe（#79087、#131961）；macOS 集中在桌面更新与 posix hand-off；Linux 桌面启动报错（#102081）。
- **错误信息质量差**：多个 Issue（#85840、#125537）指出失败被误报或静默成功——"misreported as Git update failed"、"reports success while collecting nothing"，用户难以自诊断。
- **长会话体验期待**：#16004 的讨论显示 ACP/VS Code 与长时网关会话中，迭代预算耗尽后缺少优雅收尾，用户希望可配置的有界继续。
- **正面信号**：社区持续提交插件目录条目（voicestudio、Antfly Lite、hermes-dreaming、memtomem），说明扩展生态的贡献意愿健康。

---

## 8. 待处理积压

以下条目创建时间早、影响面大且仍处 OPEN，建议维护者优先关注：

| Issue | 创建日期 | 已积压 | 说明 |
|---|---|---|---|
| #16004 | 2026-04-26 | 约 5.5 个月 | tool-call 迭代预算耗尽后的 auto-continue，18 条评论，仍 `needs-decision` |
| #72668 | 2026-07-27 | 约 2.4 个月 | Telegram 错误日志未脱敏（格式字符串误用），修复成本低但长期未动 |
| #79087 | 2026-08-05 | 约 2 个月 | Windows 健康安装被误判为首次运行并可被覆盖重装（P1） |
| #85840 | 2026-08-14 | 约 1.8 个月 | `hermes update` 吞 stderr、误报失败阶段 |
| #102081 | 2026-09-03 | 约 1 个月 | Linux 终端 `hermes desktop` 报错 |
| #49449 (PR) | 2026-06-20 | 约 3.6 个月 | 修正 Copilot/Codex 各模型上下文与输出上限的低报（1M vs 200K） |
| #115337 (PR) | 2026-09-18 | 约 3 周 | 复活 cron 逐任务回退退出（`no_fallback: true`）+ Telegram 中间气泡清理，带 `needs-decision` |

**维护者提示：** #72668（一行格式字符串修复）与 #79087（P1、Windows 平台）是性价比最高的两条积压项；PR #49449 涉及模型能力元数据准确性，悬置时间最长，建议给出明确结论（合并或关闭）。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-10-08

## 1. 今日速览

过去24小时项目维持**中等偏低的活跃度**：无新版本发布，无 PR 被合并或关闭，7 条待合并 PR 与 2 条 Issue 均为更新而非新增处置。全部 7 条 PR 与 2 条 Issue 均带有 `[stale]` 标记，说明这些工作已长时间搁置，今日的更新主要来自评论或轻微同步，而非实质推进。贡献者 `racso2609` 是当前最活跃的参与者，同时提交了 1 条 Issue 和 4 条 PR，均围绕 Web UI 的会话、状态与队列可见性问题，形成了一条清晰的主题线。整体来看，项目处于**积压等待审查**状态，社区侧的问题诊断与修复方案已相对充分，但合并侧停滞明显。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目在代码层面没有可验证的向前推进。待处理的 7 条 PR 覆盖 Web UI 性能与体验、Agent 错误可见性、OAuth 作用域修复、DeltaChat 实现清理等方向，但均停留在 open 状态。其中两处（PR #3410、PR #3412）直接对应今日两条 open Issue，形成"问题—修复"配对，只待审查合并。

- PR #3410 — `fix(pico/web): surface steering queue state so queued/dropped messages are no longer invisible`（作者 racso2609）：sipeed/picoclaw PR #3410
- PR #3412 — `fix(agent): make a failed turn visible to the user`（作者 racso2609）：sipeed/picoclaw PR #3412

## 4. 社区热点

今日两组讨论热度接近，被更新的 Issue 各累积 2 条评论，👍 均为 0，反映讨论以问题澄清为主而非广泛共鸣。

- **Issue #3408** — `[BUG] Web UI: messages sent while the agent is busy are queued invisibly and dropped silently when the queue is full (no UI feedback) + request for a queue/events surface`（racso2609）：sipeed/picoclaw Issue #3408。诉求核心是**透明性**：忙碌状态下发送的消息被静默排队、队列满时被静默丢弃，用户没有任何 UI 反馈。该 Issue 明确提出了"queue/events surface"的界面需求。
- **Issue #3409** — `[stale] Scheduling primitive used as a wait mechanism for background subagents triggers an unwanted autonomous-loop tick`（rogeriomarino2014-ship-it）：sipeed/picoclaw Issue #3409。诉求指向**后台子智能体调度语义**：把调度原语（`ScheduleWakeup` / cron 风格唤醒）约 300s 当作纯等待手段使用，意外触发了非预期的自主循环 tick。

两者分别反映 Web UI 反馈缺失与 Agent 内部调度语义混用两类深层问题。

## 5. Bug 与稳定性

按严重程度排列：

**中高 — 消息静默丢失（Issue #3408）**
Web UI 在 agent 忙碌时，用户消息被作为 steering 输入排队且不显示在聊天中，队列满时被静默丢弃，全程无 "queued / agent busy" 反馈，用户感知为消息"消失"。
已有 fix PR：PR #3410（暴露 steering 队列状态）。
链接：sipeed/picoclaw Issue #3408 | sipeed/picoclaw PR #3410

**中 — 后台子智能体调度误触发自主循环（Issue #3409）**
子智能体驱动开发场景下，用调度原语作短延时等待，触发非期望的 autonomous-loop tick。
暂无对应 fix PR。
链接：sipeed/picoclaw Issue #3409

**中 — 失败的 turn 对用户不可见（PR #3412）**
描述指出：产生不出回复的 turn 会让用户面对静默；错误通知虽由 `maybePublishError` → `formatProcessingError` 生成，但在输出路径的三个环节被丢弃。
已有 fix PR：PR #3412。
链接：sipeed/picoclaw PR #3412

**中低 — Web UI 大量文本时卡顿（PR #3347）**
修复聊天区域文本量大时 Web UI 卡顿；作者已构建并测试 `picoclaw-launcher`，称桌面与移动端 Brave 浏览器均不再卡顿。
已有 fix PR：PR #3347。
链接：sipeed/picoclaw PR #3347

**中低 — OAuth token 刷新硬编码作用域（PR #3378）**
`RefreshAccessToken` 原本始终发送 `"openid profile email"`，覆盖了 `OAuthProviderConfig.Scopes` 中按提供商配置的作用域。
已有 fix PR：PR #3378。
链接：sipeed/picoclaw PR #3378

## 6. 功能请求与路线图信号

来自 Issue #3408 的明确需求是**队列/事件可视化界面（queue/events surface）**。该需求已有对应实现路径：

- **PR #3411** — `feat(web): honest, state-driven working indicator`，声明实现 #3406 的 **part 1**：用诚实的、状态驱动的工作指示器替换 Web UI 中固定轮换的 "thinking" 文案（原 `components/chat/typing-indicator.tsx` 显示跳动圆点 + 微光条 + 4 条轮换短语）。链接：sipeed/picoclaw PR #3411
- **PR #3413** — `feat(web): global multi-channel session sidebar`，声明为 #3406 的 **Part 2-A**：将 Web UI 的会话列表从仅显示 `pico` 会话的头部下拉框，升级为全局多通道会话侧边栏。链接：sipeed/picoclaw PR #3413
- **PR #3410** — 将 steering 队列状态暴露给用户，直接回应 #3408 的"静默"痛点。

综合判断：**Web UI 的透明度与状态可见性**是当前最成体系的功能方向，由 #3406 串联、由 PR #3410/#3411/#3412/#3413 分阶段实现，是最有可能成组进入下一版本的内容。

另有一条结构性建议：**PR #3222** — `refactor(deltachat): cleanup implementation, documentation -200LOC`（trufae），删除遗留特性与回退逻辑及过时测试、改用官方 relay list 网站替代硬编码副本、移除基于密码的邮件配置（密钥须存于 jsonrpc）、重命名 `invite_link` → `join_invite_li...`。链接：sipeed/picoclaw PR #3222。该重构涉及配置方式的破坏性调整，若纳入版本需注意迁移说明。

## 7. 用户反馈摘要

- **痛点一：不可见即不存在。** Issue #3408 的用户体验描述非常具体——忙碌时发送的消息"排队为 steering 输入且从不显示在聊天中"，没有"已排队 / agent 忙碌"提示，消息看起来凭空消失；队列满时更是被静默丢弃。这是典型的反馈缺失导致的信任损耗。
- **痛点二：失败静默。** PR #3412 描述"一个没有产出回复就死掉的 turn，让用户只能盯着沉默"，且错误通知实际已生成、却在输出路径的多个环节被丢弃——说明问题出在传递链路而非生成环节。
- **痛点三：界面卡顿影响可用性。** PR #3347 作者自述修复后"桌面和移动浏览器（均为 Brave）都不再卡顿"，侧面反映此前大量文本场景下 Web UI 卡顿是实际使用障碍。
- **使用场景线索：** Issue #3409 揭示用户在实际使用**子智能体驱动开发**（派发后台 implementer/reviewer 子智能体）时，会借助调度原语做等待，说明后台多智能体编排已是真实的日常用法，而非理论场景。

## 8. 待处理积压

以下条目均标记 `[stale]`，且创建时间距今较久，建议维护者优先关注：

1. **PR #3222** — DeltaChat 清理重构，创建于 **2026-07-03**，已积压约 3 个月，是最久未处置的一条，且涉及配置与密钥存储方式的调整。
   链接：sipeed/picoclaw PR #3222
2. **PR #3347** — 修复 Web UI 卡顿，创建于 2026-08-27，作者称已自行构建测试通过，等待审查。
   链接：sipeed/picoclaw PR #3347
3. **PR #3378** — OAuth 作用域修复，创建于 2026-09-12，属配置正确性问题。
   链接：sipeed/picoclaw PR #3378
4. **Issue #3408 / PR #3410 / PR #3411 / PR #3412 / PR #3413** — Web UI 可见性主题系列，创建于 2026-09-29 至 09-30，其中 #3410、#3412 已构成"问题—修复"闭环，具有成组审查的价值。
   链接：sipeed/picoclaw Issue #3408 | sipeed/picoclaw PR #3410 | sipeed/picoclaw PR #3411 | sipeed/picoclaw PR #3412 | sipeed/picoclaw PR #3413

**健康度提示：** 项目当前的主要风险不在需求侧而在**审查与合并吞吐**。7 条待合并 PR 全部标为 stale、今日零合并，而已有修复方案覆盖了今日全部已诊断的 Bug；一旦审查通道打开，可一次性关闭多条积压并显著改善 Web UI 体验。建议维护者为 `racso2609` 的 #3406 系列指定统一审查窗口。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-08

## 1. 今日速览

过去 24 小时项目活跃度处于**低位但结构健康**的状态：共 2 条动态（1 Issue + 1 PR），全部为 OPEN，无合并、无关闭、无新版本发布。当日新增 Issue #4056 聚焦宿主重启后 `outbound.db-journal` 无法恢复导致的只读轮询永久失败，属数据一致性与持久化层面的稳定性问题。当日 PR #4055 针对 channel 网络故障重试机制提出改进，属长期健壮性增强。当日两条更新均无评论、无点赞，社区互动几乎为零，说明流量主要来自核心开发者而非外部用户。整体判断：**项目维持低强度推进，无破坏性变更风险，但需关注持久化路径上的潜在缺陷。**

---

## 2. 版本发布

今日无新版本发布，本节省略。

---

## 3. 项目进展

今日**无已合并或已关闭的 PR**，项目代码主线未向前推进。

唯一待合并 PR 为：

- **PR #4055** [OPEN] [area/channels] `fix(channels): re-arm a channel whose setup keeps failing on the network`
  - 作者：jsboige ｜ 创建：2026-10-07
  - 链接：https://github.com/qwibitai/nanoclaw/pull/4055
  - 内容：现有 `initChannelAdapters` 仅在 `SETUP_RETRY_DELAYS_MS`（2s/5s/10s，累计约 17s）内重试失败的 `adapter.setup()`；网络抖动若超过该窗口，则记录 `Failed to start channel adapter` 并在整个生命周期内放弃该 channel。该 PR 提出对持续失败的 channel 进行重新武装（re-arm）。

该改动虽未合并，但指向一个长期存在的健壮性短板，一旦合入将显著提升 channel 在弱网环境下的自愈能力。项目整体今日前进幅度：**0 个已落地变更**。

---

## 4. 社区热点

今日**无高互动内容**：唯一 Issue #4056 与唯一 PR #4055 的评论数分别为 0 与 undefined，点赞数均为 0。

- Issue #4056：https://github.com/qwibitai/nanoclaw/issues/4056
- PR #4055：https://github.com/qwibitai/nanoclaw/pull/4055

诉求分析：两条动态均非用户讨论驱动，而是**由核心贡献者主动提交的稳定性/健壮性问题**（mshirel 与 jsboige）。这表明当前项目的推动力来自维护者自身对系统可靠性的审查，而非外部社区反馈。社区参与度指标（评论、点赞、反应）今日全部为空，值得关注。

---

## 5. Bug 与稳定性

今日报告 1 个 Bug，按严重程度排列：

### 高严重度｜Issue #4056 [OPEN]
- 标题：`bug: stranded outbound.db-journal after host reboot is never recovered; readonly poll fails every tick forever`
- 作者：mshirel ｜ 创建/更新：2026-10-08 ｜ 评论：0 ｜ 👍：0
- 链接：https://github.com/qwibitai/nanoclaw/issues/4056
- 问题描述：若宿主（或整个 VM）在容器写入 `outbound.db` 的过程中宕机，残留的 `outbound.db-journal` **永远不会被恢复**，因为在新的容器被拉起之前，没有任何进程会以读写模式重新打开该数据库。其后果是只读轮询（readonly poll）会**在每一个 tick 上永久失败**。
- 影响面：数据持久化与恢复路径；故障具有"永久性"特征（不会自愈），需人工干预或架构级修复。
- 是否有 fix PR：**暂无**。今日仅 PR #4055 为 channel 重试相关，与本 Issue 无直接关联。

严重程度评估：该问题涉及崩溃后状态无法恢复 + 持续失败循环，虽触发条件依赖宿主非正常关机，但一旦触发将导致持久性功能瘫痪，建议列为优先处理项。

---

## 6. 功能请求与路线图信号

今日**无用户提出的新功能需求**。两条动态均为缺陷修复与健壮性增强，不构成新功能路线图信号。

可纳入下一版本判断的候选：

- **PR #4055（channel 网络失败重试）**：属健壮性修复，若通过评审，逻辑上适合纳入下一个补丁/维护版本，用于改善弱网环境下的 channel 可用性。
- **Issue #4056（outbound.db-journal 恢复）**：属稳定性缺陷，若修复方案明确，亦应优先于新功能进入下一版本；但今日尚无配套 PR，无法判断排期。

---

## 7. 用户反馈摘要

今日两条动态**均无评论内容**，无法提炼真实用户痛点、使用场景或满意度评价。

从 Issue/PR 摘要本身可间接观察到的技术痛点（非用户直接反馈，仅作参考）：

- 宿主重启/宕机后的**数据恢复缺口**：`outbound.db-journal` 残留无人回收，导致只读路径持续报错（Issue #4056）。
- **网络抖动下的 channel 生命周期管理不足**：短窗口重试失败后 channel 会被永久放弃（PR #4055）。

以上为提交者描述的技术问题，不代表广泛的用户反馈结论。

---

## 8. 待处理积压

今日数据中：

- Issue #4056 与 PR #4055 **均为当日或前一日（2026-10-07 / 2026-10-08）新提交**，创建时间距今不超过 1 天，**尚不属于长期未响应的积压项**。
- 其中 **Issue #4056 无任何评论、无 fix PR**，处于新开待响应状态，建议维护者优先评估。
- 数据未提供更早的未关闭 Issue/PR 清单，**无法识别长期积压项目**。

---

**数据说明**：本日报所有内容均基于 2026-10-08 提供的 NanoClaw GitHub 数据（1 Issue、1 PR、0 Release），未引入外部信息。今日项目健康度：活跃度低，无破坏性变更，但存在 1 个高严重度未修复 Bug 需持续跟踪。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-10-08

## 1. 今日速览

今日项目无新版本发布，Issues 侧完全静默（0 条新开/活跃/关闭），但 PR 侧有 3 条处于 OPEN 状态且当日均有活动，是今日唯一活跃面。三条 PR 均由同一作者 vernonstinebaker 提交，其中两条为当日新建（#1050、#1049），一条为长周期 PR 的持续更新（#971，创建于 2026-06-29）。整体活跃度评估：**低—中**，社区讨论量为零，维护者与贡献者的注意力集中在待合并 PR 队列上。需注意 #971 已开放超过三个月仍未合并，存在积压风险。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

今日**无合并或关闭的 PR**（已合并/关闭：0），项目在代码主干层面未向前推进。所有进展停留在"待合并"阶段：

- #971 [OPEN] feat(streaming): native tool calls during SSE streaming（创建 2026-06-29，更新 2026-10-08）
  链接: nullclaw/nullclaw PR #971
  目标：将原生工具调用支持与流式路径解耦。此前只要挂载了 stream callback，agent loop 就会禁用原生工具，导致支持流式原生工具的 provider 无法真正发出工具调用。
  状态判断：方向明确但已滞留 3 个月以上，属当前最重要的未落地功能。

三条 PR 的状态均为待合并，因此**今日对项目功能面无实质推进**，仅体现为审查队列的更新。

## 4. 社区热点

今日无 Issues，且所有 PR 的评论数与点赞数均未采集到有效值（`undefined` / 👍 0），**不存在可量化的讨论热点**。

从内容权重看，最值得关注的是：

- #971（流式原生工具调用）——链接: nullclaw/nullclaw PR #971
  分析：该 PR 触及 agent loop 的核心调度逻辑，涉及"stream callback 存在与否决定原生工具开关"这一设计缺陷，影响所有希望边流式输出边执行工具调用的 provider 集成方。滞留时间长，潜在影响面大。
- #1050（reasoning_mode 配置）——链接: nullclaw/nullclaw PR #1050
  分析：面向推理模型（Qwen3 reasoning variants、GLM、R1 等）的实用性改进，解决推理内容被浪费的问题。
- #1049（Discord 心跳计时修复）——链接: nullclaw/nullclaw PR #1049
  分析：影响 Discord 集成的稳定性，属基础设施类修复。

由于今日没有任何 Issue 评论数据，无法从社区讨论角度提炼更多诉求，上述判断仅基于 PR 摘要本身。

## 5. Bug 与稳定性

今日无新报告的崩溃或回归 Issue。唯一明确以修复为目标的 PR 是：

- **中等严重度 — Discord 心跳调度漂移**：#1049 [OPEN] fix(discord): schedule heartbeats from the wall clock
  链接: nullclaw/nullclaw PR #1049
  问题：Discord 心跳线程通过累计 `sleep(100ms)` 迭代次数推进 deadline，而非测量真实流逝时间。操作系统定时器合并（timer coalescing）在后台守护进程中尤为激进，导致每次 sleep 实际耗时超出预期，心跳调度持续漂移。
  修复状态：**已有 fix PR（#1049）**，当日新建并更新，尚待合并。
  影响面：长期运行的后台守护进程场景下，可能引发心跳不准时导致的连接异常。

另需标注，#971 的摘要指出此前"stream callback 存在即禁用原生工具"属既有行为缺陷，但该问题以功能增强 PR 形式提出，未单独立 Bug Issue。

## 6. 功能请求与路线图信号

今日无用户提出的新功能请求（Issues 为 0）。基于现有 PR 可识别的路线图信号：

- **流式 + 原生工具调用并行能力（#971）**
  链接: nullclaw/nullclaw PR #971
  若合并，将解锁"支持流式原生工具的 provider 真正发出 tool calls"，属对 agent 执行能力的实质性扩展。因开放时间最长且触及核心 loop，判断为**下一版本的高优先级候选**，但需维护者先推动审查。

- **reasoning_mode 配置项（#1050）**
  链接: nullclaw/nullclaw PR #1050
  摘要显示 provider 侧已具备相应能力，PR 的目的是把"仅推理无内容"的响应（`finish_reason=length` + `content:null` + 有 `reasoning_content`）暴露出来。这是对推理模型生态（Qwen3 reasoning、GLM、R1）的适配信号，**具备进入下一版本的合理性**，前提是配置项设计与现有 config 体系统一。

- **Discord 集成稳定性（#1049）**
  链接: nullclaw/nullclaw PR #1049
  属修复类，通常是低争议、易合并项，**较可能被优先纳入**。

## 7. 用户反馈摘要

今日 Issues 数量为 0，**无用户评论可供提炼**，因此无法提供真实用户痛点、使用场景或满意度反馈。所有 PR 的评论字段均为空值，亦无来自审查者的公开反馈可引用。

需要说明的是：本报告中的问题描述（如推理模型耗尽 completion budget、Discord 心跳漂移、流式场景下原生工具被禁用）均来自 PR 作者自述的摘要，属**贡献者视角**，不能等同于终端用户反馈。

## 8. 待处理积压

**高优先级：**

- #971 [OPEN] feat(streaming): native tool calls during SSE streaming
  作者: vernonstinebaker | 创建 2026-06-29 | 更新 2026-10-08
  链接: nullclaw/nullclaw PR #971
  已开放约 3 个月零 9 天仍未合并，且今日仍在更新，说明作者持续维护但审查未闭环。涉及流式与工具调用核心路径，建议维护者优先给出审查意见或明确取舍。

**常规关注：**

- #1050 [OPEN] feat(config): add reasoning_mode to surface reasoning-only responses（当日新建）
  链接: nullclaw/nullclaw PR #1050
- #1049 [OPEN] fix(discord): schedule heartbeats from the wall clock（当日新建，修复类）
  链接: nullclaw/nullclaw PR #1049

两条当日新建 PR 暂无积压风险，但 PR 队列已达 3 条待合并且连续无合并动作，若审查节奏持续滞后，#1050 与 #1049 可能演变为新的积压项。

---

**数据完整性说明**：本报告所有内容均基于所提供的 NullClaw GitHub 数据。今日 Issues 数据为空，PR 的评论数与点赞数未采集到有效值，因此第 4、7 部分无法给出量化讨论结论；链接以数据中提供的 `nullclaw/nullclaw PR #xxxx` 形式呈现。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-08

## 1. 今日速览

过去 24 小时 IronClaw 无新版本发布，整体处于「无合并、无关闭」的静默推进状态：2 条新 Issues 全部开放，3 条 PR 全部待合并，合并/关闭量为 0。活跃度以「新增输入」为主（Issues 与 PR 更新共 5 条），但缺乏产出端动作（0 合并、0 关闭、0 发布），说明维护者的评审吞吐是当前主要瓶颈。值得注意的是，Issue #8130（Sendblue 扩展提案）与 PR #8127（Sendblue 扩展实现）同日出现在同一功能方向，显示贡献者已自发形成「提案 + 实现」的并行推进。项目健康度信号中性：贡献者供给稳定，但积压的待合并 PR 数量在增加。

## 2. 版本发布

今日无新版本发布，本节省略。

## 3. 项目进展

今日无合并或关闭的 PR，项目在代码主干层面没有向前推进。当前 3 条 PR 均处于 OPEN 待评审状态：

- [PR #8127](https://github.com/nearai/ironclaw/pull/8127) — Sendblue iMessage/SMS 扩展（作者 lookevink，创建于 2026-10-06，更新 2026-10-08）
- [PR #8119](https://github.com/nearai/ironclaw/pull/8119) — loop-host 基于 embeddings 的可选工具选择（作者 CjS77，创建于 2026-09-29，更新 2026-10-08；标签 size: XL、risk: medium、scope: docs、scope: dependencies、contributor: new）
- [PR #8128](https://github.com/nearai/ironclaw/pull/8128) — dependabot 依赖升级 urllib3 2.7.0 → 2.8.0（/tests/e2e，创建于 2026-10-07）

其中 #8119 从 9 月 29 日创建至今仍未合并，属于需要重点关注的积压项（详见第 8 节）。

## 4. 社区热点

今日所有 Issues/PR 的评论数与点赞数均为 0（PR 评论数在数据中标记为 undefined），因此严格意义上不存在讨论热度集中点。从内容关联度看，最值得关注的是围绕 Sendblue 的一对条目：

- [Issue #8130](https://github.com/nearai/ironclaw/issues/8130) — Proposal: optional Sendblue iMessage/SMS extension with host-owned credentials
- [PR #8127](https://github.com/nearai/ironclaw/pull/8127) — feat: add Sendblue iMessage and SMS extension

两者均由通信渠道方向切入，诉求是把 IronClaw 接入 iMessage/SMS 直连对话。Issue 文本强调「host-owned credentials（主机侧持有凭证）」以及配置 Sendblue 线路、注册带认证的接收 webhook、配对白名单电话号码等流程，反映用户对「渠道扩展 + 凭证责任边界」的双重关注。此外 [Issue #8129](https://github.com/nearai/ironclaw/issues/8129) 为每日失败分类报告，属自动化例行条目。

## 5. Bug 与稳定性

今日无明确的崩溃或回归 Bug 报告。与稳定性相关的主要是 [Issue #8129](https://github.com/nearai/ironclaw/issues/8129)「Daily ironclaw failure taxonomy — 2026-10-08」：该条目标注 clawbench 套件有 128 个 non-pass，并指出该次运行的非通过项「主要由某个 b...」主导（摘要在此处被截断，无法确认根因类别）。

严格按严重程度排列，当前可确认的稳定性事项仅此一项，且属于基准测试层面的失败归类，未提供对应的 fix PR。需注意：由于摘要截断，无法判断是否存在单一高优 bug 主导失败分布，建议维护者查阅完整报告链接（详见 Issue #8129 中引用的 clawbench run）。

## 6. 功能请求与路线图信号

今日共有两项功能方向的新增输入：

1. **Sendblue iMessage/SMS 扩展**（[Issue #8130](https://github.com/nearai/ironclaw/issues/8130) + [PR #8127](https://github.com/nearai/ironclaw/pull/8127)）
   实现已存在，覆盖电话配对、认证接收 webhook、终端回复、DM 目标存储，并复用现有 host 生命周期与会话路径，同时保留两套 Sendblue A...（摘要截断）。判断：这是「提案与实现同日出现」的方向，具备被纳入下一版本讨论的条件，但 Issue 与 PR 的评论数均为 0，尚缺少维护者表态。

2. **loop-host 可选工具选择**（[PR #8119](https://github.com/nearai/ironclaw/pull/8119)）
   在会话首次模型调用前，由分类器挑选用户消息可能需要的 deferred tools，并与核心工具一起向模型宣告。该 PR 标签含 size: XL 与 risk: medium，创建已逾一周（2026-09-29），属于功能性较强但评审成本高的改动。

以上均无官方路线图确认，是否进入下一版本无法从现有数据判定。

## 7. 用户反馈摘要

今日两条新 Issues 的评论数均为 0，无可提炼的评论内容。从 Issue/PR 正文可观察到的需求侧信息为：

- 用户希望 IronClaw 支持 iMessage/SMS 直连对话，并要求凭证由 host 侧持有、接收 webhook 需认证、电话号码需白名单配对（[Issue #8130](https://github.com/nearai/ironclaw/issues/8130)、[PR #8127](https://github.com/nearai/ironclaw/pull/8127)）——指向「外部通信渠道接入」与「安全边界」两类诉求。
- 基准运行中存在大量 non-pass（clawbench 128 项），相关归类信息由每日自动化 Issue 输出（[Issue #8129](https://github.com/nearai/ironclaw/issues/8129)），反映持续的质量追踪机制在运转，但摘要截断未能呈现具体不满点。

满意度/不满意信号：今日数据中无正向或负向的明确用户评价。

## 8. 待处理积压

- [PR #8119](https://github.com/nearai/ironclaw/pull/8119) — 创建于 2026-09-29，至 2026-10-08 仍为 OPEN，已积压约 9 天；标签为 size: XL、risk: medium，且带有 contributor: new，属于高评审成本 + 新贡献者组合，建议维护者优先给出评审意见以避免贡献者流失。
- [PR #8127](https://github.com/nearai/ironclaw/pull/8127) — 创建于 2026-10-06，已积压 2 天，与 Issue #8130 配套，建议与提案一并评审。
- [PR #8128](https://github.com/nearai/ironclaw/pull/8128) — dependabot urllib3 2.7.0 → 2.8.0，创建于 2026-10-07，属低风险依赖更新，可快速处理以清理队列。

未发现长期未响应的 Issue（今日两条 Issue 均为 2026-10-08 新开）。

---

**数据说明**：本报告所有结论均基于 2026-10-08 提供的 Issue/PR 元数据与摘要文本；部分摘要（#8129、#8127、#8128）在数据源中被截断，涉及截断处均已在文中标注，未做推断性补全。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-08

## 1. 今日速览

今日项目呈现"清理积压 + 局部推进"的双轨状态：PR 更新量达 22 条，其中 15 条被合并或关闭，且绝大多数是标记 `[stale]` 的 3 月旧 PR，说明维护者正在集中清理长期积压。真正的新增量集中在 #2814（Cowork 每轮用量追踪）与 #2813（PPT 缩略图面板优化）两个当日创建并当日关闭的 PR 上，均指向 `release/2026.9.24`。Issue 侧仅有 1 条更新，即 #2440 的系统提示词重复注入问题，活跃度低但该问题本身值得重视。无新版本发布。整体健康度评估：**积压清理积极，新功能推进平缓，稳定性问题存在但未扩散**。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 中，当日创建当日关闭的两条最具实质意义：

- **[#2814](netease-youdao/LobsterAI PR #2814)** `feat(cowork): trace LLM requests and show per-turn usage`（CLOSED）：将 `feat/llm-turn-usage` 合入 `release/2026.9.24`，在 Cowork 每轮回复中展示实际积分消耗，并支持查看模型请求、Token、缓存命中率与 Trace ID 明细。实现方式为每轮对话生成并持久化 W3C Trace ID，通过 OpenClaw `chat.send` 与本地模型代理传递 `traceparent`。**这是今日对用户可见价值最高的改动**，首次把"成本可观测性"落到单轮对话粒度。
- **[#2813](netease-youdao/LobsterAI PR #2813)** `feat(office): show slide thumbnails pane by default with compact collapsible header`（CLOSED）：修复 artifact 面板中 PPT 缩略图列表固定 184px 宽、挤占默认 560px 面板导致幻灯片偏小的问题，并改为默认展示缩略图面板 + 可折叠紧凑头部。

此外，一批 3 月旧 PR 被批量关闭，其中部分属于实际修复（见下节）。需注意这些关闭的 PR 摘要中未标注是否已合入主干，**建议维护者确认关闭原因（合并 / 拒绝 / 超时）**，避免有效修复被静默丢弃。

## 4. 社区热点

今日整体讨论热度偏低，所有展示的 Issue/PR 均为 0 👍，评论数在数据中多为 `undefined`（未采集到有效评论量）。相对而言：

- **[Issue #2440](netease-youdao/LobsterAI Issue #2440)**：唯一有更新的 Issue，1 条评论，是今日社区侧唯一实质讨论点。
- **[PR #610](netease-youdao/LobsterAI PR #610)** `feat(cowork): refactor prompt input with structured composer`（OPEN，stale）：对 Cowork 输入框做输入内核重构，从 `textarea + 字符串拼接` 转向结构化 composer，以支持资源引用语义。虽无评论数据，但这是积压中**技术野心最大**的 PR，牵涉输入层架构，若长期悬置将与新功能产生冲突。
- **[PR #725](netease-youdao/LobsterAI PR #725)** `feat(cowork): 消息书签/收藏系统 + 全局书签视图`（OPEN，stale）：完整的两级书签架构（会话级 + 全局侧边栏视图）。
- **[PR #736](netease-youdao/LobsterAI PR #736)** / **[PR #749](netease-youdao/LobsterAI PR #749)**：两条针对 Cowork 流式输出重渲染的性能 PR 存在明显重叠（均围绕 `MarkdownContent` / `AssistantMessageItem` 的 `React.memo`），#749 已关闭，#736 仍 OPEN。

**背后诉求**：积压 PR 高度集中在 **Cowork 输入体验、消息可管理性（书签/回滚）、流式渲染性能**三条主线，说明社区对"长会话可用性"的诉求最强烈。

## 5. Bug 与稳定性

按严重程度排列：

**高｜[Issue #2440](netease-youdao/LobsterAI Issue #2440) — 桌面端系统提示词重复注入**
- 现象：桌面端 `lobsterai` 通道每个新会话首条用户消息中注入 `[LobsterAI system instructions]` 块，其中 **78% 的内容与 `workspace-main/AGENTS.md` 中 app 托管段落逐字重复**，等于同一套指令让模型读两遍。
- 实测依据：样本来自 `state/agents/main/sessions/<id>.trajectory.jsonl` 的 `trace.artifac...` 字段（摘要截断）。
- 影响：直接浪费上下文窗口，可能稀释有效指令权重，并抬高每轮 token 成本——**恰与今日合并的 #2814（用量可观测）形成互相印证**：Token 浪费问题现在更容易被用户量化看到。
- 状态：**OPEN，尚无 fix PR**。自 2026-08-05 创建至 2026-10-07 更新，存在时间较长，建议优先处置。

**中｜模型连接测试误报失败（已有历史修复）**
- [PR #599](netease-youdao/LobsterAI PR #599)（CLOSED，stale）针对 Issue #592：测试连接显示失败但实际聊天正常。根因有三：未加 `stream: false` 导致智谱默认 SSE 流式响应解析不匹配、429 限频被误判为失败、错误消息匹配写死只认一种（`context_length_exceeded` 未覆盖）。该 PR 为已关闭状态，**需确认其修复是否真正落地**，否则该误报仍会影响用户配置体验。

**低｜Cowork 会话重复错误提示**
- [PR #647](netease-youdao/LobsterAI PR #647)（CLOSED，stale）：`continueSession` 非 `ENGINE_NOT_READY` 错误时，用户会看到两条重复的系统错误消息，源于错误处理块重复。属体验瑕疵，非崩溃。

今日无新增崩溃或回归报告。

## 6. 功能请求与路线图信号

结合今日 PR 与已合入的 `release/2026.9.24`，可能的下一版本方向：

| 功能 | 依据 PR | 纳入可能性判断 |
|---|---|---|
| Cowork 每轮积分/Token/Trace 用量展示 | [#2814](netease-youdao/LobsterAI PR #2814)（已合入 release/2026.9.24） | **已确认进入下一版本** |
| PowerPoint 缩略图面板默认展示 + 可折叠头部 | [#2813](netease-youdao/LobsterAI PR #2813)（CLOSED） | 高，同批推进 |
| 斜杠命令唤起技能选择弹窗 | [#603](netease-youdao/LobsterAI PR #603)（CLOSED，stale） | 中，已关闭但需确认合并状态；体验接近 Slack/VS Code |
| 模型 API 格式"自动检测" | [#762](netease-youdao/LobsterAI PR #762)（CLOSED，stale） | 中，降低 DeepSeek/智谱/MiniMax 配置门槛，与 #599 同属连接配置体验线 |
| 输入框结构化 composer 重构 | [#610](netease-youdao/LobsterAI PR #610)（OPEN，stale） | 低-中，架构级改动，长期未推进 |
| 消息书签/收藏系统 | [#725](netease-youdao/LobsterAI PR #725)（OPEN，stale） | 低-中，功能完整但积压 6 个月以上 |
| 消息回滚 + 编辑重生成 | [#697](netease-youdao/LobsterAI PR #697)（CLOSED，stale） | 中，属长会话核心能力 |
| 遵循配置的执行模式（local/auto/sandbox） | [#738](netease-youdao/LobsterAI PR #738)（OPEN，stale） | 中，涉及 OpenClaw 沙箱映射正确性，偏正确性修复 |

**判断**：短期路线图由 #2814 与 #2813 主导，聚焦**成本可观测性 + Office 产物体验**；中长期社区诉求集中在 Cowork 输入与消息管理，但因相关 PR 大量积压，落地节奏存在不确定性。

## 7. 用户反馈摘要

从今日可见数据中提炼的真实痛点：

- **上下文被浪费（#2440）**：用户通过轨迹文件自行实测，量化出 78% 重复率与 4,425 字符规模——这是典型的高投入型用户，其诉求是"指令只注入一次"，#2814 上线的用量展示会让这类浪费更直观。
- **配置门槛高、错误提示误导（#599 / #762）**：用户在为同事配置 GLM-4.7 时遭遇"测试失败但实际可用"，反映模型连接测试的判定逻辑对非技术用户不友好；#762 的"自动检测"正是对该痛点的产品化回应。
- **长会话难以回顾（#725）**：用户明确提到"长对话或多个会话时经常丢失关键决策、代码片段或重要指令"。
- **流式输出卡顿（#736 / #749）**：每条 streaming chunk 触发 Redux 更新并重渲染全部历史 assistant 消息，是性能敏感用户的直接抱怨。
- **技能发现路径单一（#603）**：此前激活技能只有点击工具栏拼图按钮一种方式，用户希望获得键盘驱动的快速检索。

满意度方面，数据中未包含正面评价内容，不做推断。

## 8. 待处理积压

以下 PR 均为 2026-03 创建、2026-10-08 仍有更新但状态为 OPEN，积压已超 6 个月，建议维护者明确表态（合并 / 关闭 / 请求更新）：

1. **[PR #547](netease-youdao/LobsterAI PR #547)** `test: add coworkFormatTransform unit tests (35 cases)` — 补充 `normalizeProviderApiFormat`（5 例）、`mapStopReason`（7 例）等核心模块测试，属**低风险、高收益**，长期悬置尤为可惜。
2. **[PR #610](netease-youdao/LobsterAI PR #610)** `feat(cowork): refactor prompt input with structured composer` — 输入内核重构，积压越久与其他输入类改动的冲突成本越高。
3. **[PR #725](netease-youdao/LobsterAI PR #725)** `feat(cowork): 消息书签/收藏系统 + 全局书签视图` — 功能完整、含 3 个新增文件。
4. **[PR #736](netease-youdao/LobsterAI PR #736)** `perf(cowork): 为 MarkdownContent 添加 React.memo` — 与已关闭的 #749 高度重叠，建议二选一并说明取舍。
5. **[PR #738](netease-youdao/LobsterAI PR #738)** `fix: honor configured execution mode` — 修正 `executionMode` 被硬编码为 `local` 的问题，恢复 OpenClaw 沙箱映射，含单元测试，属**正确性缺陷修复**，优先级应高于其 stale 标签所示。

另需关注 **[Issue #2440](netease-youdao/LobsterAI Issue #2440)**：创建近两个月、仅 1 条评论、无 fix PR，是当前唯一活跃的稳定性议题，建议纳入近期排期。

---

*注：本日报所有内容均基于所提供的 GitHub 数据，PR 评论数在原始数据中多为 `undefined`，故未对讨论热度做超出数据的推断；部分 PR 标注为 CLOSED 但未说明是合并还是拒绝，相关结论已相应保留。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报（2026-10-08）

## 1. 今日速览

项目今日活跃度处于**低位**：过去 24 小时内 PR 更新为 0，无新版本发布，仅记录到 1 条已关闭的 Issue（#1177）。唯一动态是一起安全类 Bug 的关闭，标题指向 Vault 解锁/恢复端点缺失认证（CWE-306），但数据中未提供关闭说明、关联 PR 或评论内容。由于当日无代码合并、无发布、无待合并 PR，项目推进情况无法从本次数据中评估。整体健康度：**维护节奏平稳但缺乏增量证据，需关注安全类问题是否真正闭环**。

## 2. 版本发布

今日无新版本发布，本节不适用（数据中"最新 Releases"为空）。

## 3. 项目进展

今日无 PR 更新，无合并或关闭的 Pull Request，因此无可统计的功能推进或修复成果。唯一的进展信号是 Issue #1177 由 OPEN 转为 CLOSED：

- [#1177 [bug] Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)](https://github.com/moltis-org/moltis/issues/1177) — 已于 2026-10-08 更新为 CLOSED

说明：该 Issue 创建于 2026-07-30，至关闭历时约 70 天。由于数据中无关联 fix PR、无关闭评论、无合并记录，**关闭是否对应实际代码修复无法确认**，建议维护者补充关闭原因（如 fix commit、误报、重复等）。

## 4. 社区热点

今日唯一有更新的条目为 Issue #1177（[链接](https://github.com/moltis-org/moltis/issues/1177)），但其评论数为 0、👍 为 0，不构成社区讨论热点。

从 Issue 摘要可见的诉求方向（基于提交者填写的 Preflight Checklist）：

- 提交者已确认检索过既有 bug issue、确认使用最新版本，属于遵循规范流程的正式报告；
- 问题本身归类为 **CWE-306：关键功能缺少身份验证**，涉及 Vault 解锁与恢复端点，指向凭据/密钥管理路径的访问控制设计，属于安全敏感区域。

由于无评论与反应数据，**无法判断社区对该问题的关注程度或争议点**，不对其影响面作进一步推断。

## 5. Bug 与稳定性

今日记录到的 Bug 类条目共 1 条，且已关闭：

| 严重程度 | 条目 | 状态 | 是否有 fix PR |
|---|---|---|---|
| 高（安全类，CWE-306 认证缺失） | [#1177 Vault Unlock/Recovery Endpoints Missing Authentication](https://github.com/moltis-org/moltis/issues/1177) | CLOSED（2026-10-08） | 数据中未显示，无法确认 |

说明：

- 该条目标签为 `bug`，涉及 Vault 解锁/恢复端点认证缺失，属于安全与稳定性交叉领域；
- 数据中未提供崩溃、回归类问题记录；
- 是否附带修复补丁：**未知**（今日 PR 更新为 0，若修复经 PR 合入，应不发生在今日）。

## 6. 功能请求与路线图信号

今日无新增功能请求类 Issue，也无任何 PR 更新，因此**没有可用于判断下一版本纳入项的输入**。

关于 #1177 的唯一可提取的信号是安全加固方向（Vault 端点的认证校验），但该条目为 Bug 而非功能请求，且数据未显示其修复实现路径，故不推断其是否进入下一版本。

## 7. 用户反馈摘要

本次数据中可提取的真实用户反馈极为有限，仅来自 Issue #1177 的 Preflight Checklist（作者 Practice100101）：

- **使用场景**：涉及 Vault 的解锁（Unlock）与恢复（Recovery）流程，即用户需要访问受保护的密钥/凭据存储；
- **痛点指向**：用户认为这些端点在缺少认证的情况下可被访问，属于安全层面的不满意点；
- **流程满意度正面信号**：提交者主动勾选"已检索既有 issue""使用最新版本"，说明项目的 Issue 模板与检索引导被有效使用。

由于该 Issue 评论数为 0，**没有从评论中提炼到的其他痛点、使用反馈或满意/不满意评价**。

## 8. 待处理积压

今日数据仅覆盖过去 24 小时，未提供完整的开放 Issue / PR 列表或存续时长信息，因此**无法识别长期未响应的重要条目**。

仅能提示一项需维护者自查的事项：

- [#1177](https://github.com/moltis-org/moltis/issues/1177)：由创建（2026-07-30）到关闭（2026-10-08）历时约 70 天，且关闭时无评论、无关联修复记录。建议维护者确认该安全类问题的处置闭环是否完整，避免出现"关闭但未修复"的隐患；若已修复，建议补充修复说明或关联 commit/PR 以便追溯。

---

**数据边界说明**：本日报所有内容均基于所提供的 2026-10-08 GitHub 数据快照。由于当日 PR 更新为 0、无新版本、Issues 仅 1 条且评论与反应均为 0，部分章节（版本发布、项目进展、功能请求、待处理积压）缺少可分析的素材，报告中已相应标注而非作推测性补充。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-08

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 活动数据
> 注：部分 Issue 链接在原始数据中显示为 `agentscope-ai/QwenPaw`，本报告按原文保留。

---

## 1. 今日速览

过去 24 小时项目维持**高活跃度**：Issues 更新 27 条（新开/活跃 15，关闭 12），PR 更新 26 条（待合并 21，合并/关闭 5），无新版本发布。合并/关闭量偏低（PR 仅 5 条收口、Issues 关闭 12 条），而待合并 PR 积压至 21 条，说明**贡献产出速度明显快于评审吞吐**。社区讨论集中在 2.2.0 多租户 Hub 的后续路线（#7318，34 条评论）以及 DeepSeek/文件内容块导致会话持续 400 的稳定性问题上。整体判断：**需求侧热度高、供给侧评审出现拥堵**，健康度中性偏好，但需关注维护者带宽。

---

## 2. 版本发布

无新版本发布，本节略。

---

## 3. 项目进展

今日已合并/关闭的 PR 数量为 5 条，数据中明确可见的已关闭 PR：

- **#8050 [CLOSED] `fix(chats): resolve a DST-aware process timezone for transcript timestamps`**（作者 BeiMu-new）
  修复 `_process_local_tz()` 使用 `datetime.now().astimezone().tzinfo` 返回固定偏移时区、导致转写时间戳在夏令时切换后整体偏移的问题。对应 Issue #8046。
  https://github.com/agentscope-ai/CoPaw/pull/8050

- **#8127 [CLOSED] `fix(console): refine desktop settings UI`**（作者 zhaozhuang521）
  统一桌面端 “Settings / Models” 页头样式，与 “Agents”“Safety” 等页面保持一致，并收敛模型页头部覆盖层作用范围。
  https://github.com/agentscope-ai/CoPaw/pull/8127

**推进幅度评估**：今日收口以小型 UI 与时间戳正确性修复为主，未见大型功能落地。真正体量较大的变更（如 #8132 评测工作流与 QwenPaw Index、#8128 将 Hub 迁移到插件体系）仍处于 OPEN 状态，属于“已在路上、尚未进入主干”。项目今日向前推进**约半步**：稳定性细节改善，但结构性能力尚未合入。

---

## 4. 社区热点

| 排名 | 条目 | 状态 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | #7318 QwenPaw Hub 多租户版 2.2.0 已发布，下一步做什么？ | OPEN | 34 | 4 | https://github.com/agentscope-ai/CoPaw/issues/7318 |
| 2 | #7884 压缩后刷新前端，历史信息无法全量加载 | CLOSED | 9 | 0 | https://github.com/agentscope-ai/CoPaw/issues/7884 |
| 3 | #7722 内存耗尽三重路径（无界流缓冲 / keep-alive 实例堆叠 / doom-loop 门控绕过） | OPEN | 7 | 0 | https://github.com/agentscope-ai/CoPaw/issues/7722 |
| 4 | #8022 `send_file_to_user` 内容块 + 空 assistant 消息污染上下文，后续请求对所有模型持续 400 | CLOSED | 5 | 0 | https://github.com/agentscope-ai/CoPaw/issues/8022 |
| 5 | #7883 工具返回 PDF 被序列化为 OpenAI 嵌套 file part，DeepSeek 返回 400 | CLOSED | 5 | 0 | https://github.com/agentscope-ai/CoPaw/issues/7883 |

**诉求分析**：
- **#7318** 是本日唯一的路线图级讨论，也是唯一有正向反应的条目（👍 4）。社区从“个人 AI 助手”向“团队多租户部署”演进的意愿明确，维护者主动征集方向，属于健康的路线图共建信号。
- **#7884 / #8022 / #7883 / #8042 / #8064** 构成一条清晰的**同源问题簇**：媒体/文件内容块在上下文中的存储与回放方式存在设计缺陷，一次污染即导致会话永久不可用。这是当前社区最主要的挫败感来源，且多条已被关闭，说明修复链路正在收口。
- **#7722** 由用户给出受控复现与最小修复建议，质量较高，但评论数仅 7 且仍为 OPEN，未看到对应 fix PR。

---

## 5. Bug 与稳定性

按严重程度排列（严重度依据影响范围与会话可恢复性判断）：

**P0 — 会话永久损坏 / 服务不可用**
- **#8022 [CLOSED]** `send_file_to_user` 产生的 file/image 内容块与空 assistant 消息污染会话上下文，导致后续请求对所有模型持续返回 400，未按模型能力降级 content。
  https://github.com/agentscope-ai/CoPaw/issues/8022
  已有 fix PR：**#8010 [OPEN]** `fix(agents): recover from media payload rejections instead of failing`（Fixes #8009，指出被拒的媒体块会留在存储上下文中并在每次请求重放）——**需评审合并**。
  https://github.com/agentscope-ai/CoPaw/pull/8010
- **#8064 [CLOSED]** DeepSeek provider 下 `send_file_to_user` 发送 PDF 后会话永久损坏，后续请求全部 400 `file must have a file_id or file_data`。影响 deepseek 直连及经聚合器路由的模型。
  https://github.com/agentscope-ai/CoPaw/issues/8064
- **#7883 [CLOSED]** 在 2.2.1 上仍可复现：#7597 号称在 #7621 修复，用户在 2026-09-19 复现并提交。**属回归/修复不彻底**。
  https://github.com/agentscope-ai/CoPaw/issues/7883
- **#8042 [CLOSED]** 工具输出文件被自动回灌为模型输入，模型不支持该格式时触发 Internal error。
  https://github.com/agentscope-ai/CoPaw/issues/8042

**P1 — 资源耗尽 / 性能退化**
- **#7722 [OPEN]** 容器内存耗尽（约 1MB/s 填充后挂起/OOM），根因为三条独立路径：无界流缓冲、keep-alive 实例堆叠、doom-loop 门控绕过。用户提供受控复现与最小修复。
  https://github.com/agentscope-ai/CoPaw/issues/7722
  **未见对应 fix PR。**
- **#8115 [OPEN]** 桌面控制台冷启动挂起约 11s（等待后端 14711 端口），后台启动完成前为“降级视图”，完整启动需 16–25s；WebView2 进程可在后端存活时静默死亡。
  https://github.com/agentscope-ai/CoPaw/issues/8115
- **#8135 [OPEN]** 控制台大面积 `backdrop-filter`（12–28px）在流式输出时逐帧重算模糊，造成持续 GPU 占用，iGPU 上尤为明显。
  https://github.com/agentscope-ai/CoPaw/issues/8135
  已有 fix PR：**#8137 [OPEN]** 新增官方 “reduced effects” 档位。
  https://github.com/agentscope-ai/CoPaw/pull/8137

**P2 — 功能性缺陷**
- **#8074 [CLOSED]** OpenAI provider 对 gpt-6 系列连接测试返回 400，`_uses_max_completion_tokens` 白名单仅匹配 `gpt-5*` / `o<digit>*`；用户在 `main` 上确认未修复。
  https://github.com/agentscope-ai/CoPaw/issues/8074
- **#8129 [OPEN]** 图片缩放丢失 EXIF 方向信息，触发 `QWENPAW_MAX_IMAGE_PIXELS` 时 JPEG 在模型请求中方向错误。
  https://github.com/agentscope-ai/CoPaw/issues/8129
  已有 fix PR：**#8136 [OPEN]** `fix(media): preserve EXIF orientation during image resizing`。
  https://github.com/agentscope-ai/CoPaw/pull/8136
- **#8122 [CLOSED]** 2.2.2 beta4 Windows 桌面端设置界面布局错乱。
  https://github.com/agentscope-ai/CoPaw/issues/8122
- **#8120 [OPEN]** 2.2.2b4 多设备频繁出现“页面加载失败”。
  https://github.com/agentscope-ai/CoPaw/issues/8120
- **#8116 [OPEN, invalid/need-info]** 消息队列重复投递：已处理的消息后续仍被再次发送。
  https://github.com/agentscope-ai/CoPaw/issues/8116

**P3 — 体验/显示**
- **#7948 [CLOSED]** Web 控制台设计影响用户输入。
  https://github.com/agentscope-ai/CoPaw/issues/7948
- **#8046 [CLOSED]** `_process_local_tz()` 冻结当前 UTC 偏移，DST 切换后转写时间戳偏移。
  https://github.com/agentscope-ai/CoPaw/issues/8046

**小结**：本日 Bug 面呈现**“一条主线 + 多点散布”**。主线是媒体/文件内容块回灌缺陷（#7883 → #8022 → #8042 → #8064），四条均已在今日关闭，但其修复 PR（#8010）**尚未合并**，存在“Issue 已关、根因修复未入主干”的风险窗口，建议维护者优先对齐。性能类问题（#8115、#8135）用户已给出可操作方案并配 PR，属可快速回收的收益。

---

## 6. 功能请求与路线图信号

| Issue / PR | 需求 | 状态 | 落地可能性判断 |
|---|---|---|---|
| #8015 | 支持配置自定义 Skill / Plugin 市场源（自托管 · 内网 / 离线部署） | OPEN | **高**。对应 PR **#8128 [OPEN, size/XL]** `feat(skill): Move hub to plugins` 已把 Hub 变为可通过插件系统安装/移除，新增 `hub` 插件类型，直接打通扩展点。 |
| #2865 | 聊天对话框显示自定义 Agent 名称，并支持通过图片 URL 设置 Agent 头像 | CLOSED | **已收口**。属长期需求（创建于 2026-04-03）今日关闭。 |
| #8114 | 增加“推理强度”设定，限制高思考倾向模型 | CLOSED | 今日关闭，具体实现路径未在数据中体现。 |
| #7318 | QwenPaw Hub 多租户版后续方向征集 | OPEN | 路线图级输入。配套 **#8132 [OPEN, size/XXXL]** `feat: add release evaluation workflows and QwenPaw Index` 提出公开发布评测流程与模型/SDK 评测索引（Harbor 运行 GAIA validation、SpreadsheetBench Verified、SWE-bench Verified）。 |

**判断**：下一代版本的能力重心可能落在**插件化 Hub / 市场源可配置**（#8015 + #8128）与**可评测性建设**（#8132）上。前者解决内网/离线部署这一明确的企业侧卡点，后者是项目首次系统性引入公开评测基线，属于治理层面的能力补齐。二者体量均大（XL/XXXL），短期内不会随小版本落地。

---

## 7. 用户反馈摘要

**不满与痛点**（情绪强度由高到低）：

1. **聊天历史“说没就没”** —— #7884 用户直言“现在聊天记录的历史这么短么？讨论过的问题，回头往上翻，看不到了？？？咱聊天记录多存点，做不到么？知道这个体验多差么？？？”；#8134 再次追问聊天记录与大模型上下文窗口的关联机制。**同一用户 `happieme` 在 #7884、#8116、#8134 连续发难，属高价值但已出现流失风险的活跃反馈者，建议专人跟进。**
   https://github.com/agentscope-ai/CoPaw/issues/8134
2. **会话一次性被“毒死”** —— #8022 / #7883 / #8064 / #8042 多个用户独立复现同一条媒体内容块问题，且 #7883 明确指出“号称已修复但 2.2.1 仍可复现”，对修复质量的信任受损。
3. **页面加载失败影响日常使用** —— #8120 用户表示“非常容易出现页面加载失败的情况，我几台设备都遇到了，非常影响体验”。
4. **高思考模型过度“思考”** —— #8114 用户请求加推理强度限制，“3.8 这种模型，太爱思考了，要限制一下”。

**使用场景信号**：
- **团队/多租户部署**：#7318 明确提到社区反复要求“a better way to run it for a team”。
- **内网/离线/air-gapped 环境**：#8015 指出内置市场源在隔离网络中不可用，需要自托管镜像。
- **跨 Provider 组合使用**：DeepSeek、OpenAI、Ali 兼容网关均出现在 Bug 报告中，说明用户实际在混合路由环境下运行。
- **桌面端 + 多设备**：#8115、#8120、#8122 集中反映 Windows 桌面端（2.2.2 beta4 / b4）的启动与渲染体验问题。

**满意/正面信号**：#7318 获得 4 个 👍 与 34 条讨论，是唯一有明显正向反馈的条目，说明多租户 Hub 方向本身获得社区认可；另有多个 Issue 由用户借助 CoPaw Agent 自动整理提交（#8022、#7883 均附 AI 提交声明），反映出用户愿意投入成本做高质量复现。

---

## 8. 待处理积压

**高优先级（有修复但未被评审）**
- **#8010 [OPEN]** `fix(agents): recover from media payload rejections instead of failing`（创建 2026-09-28，已积压 10 天）。直接对应今日关闭的 #8022 / #8064 所描述的会话永久损坏根因，但尚未合并，导致已关闭的 Issue 缺少实际落地。
  https://github.com/agentscope-ai/CoPaw/pull/8010
- **#8007 [OPEN, Under Review, ready-for-human-review]** `fix(task_tracker): register run only after the producer task exists`（创建 2026-09-28，已积压 10 天）。已标记 ready-for-human-review 但仍在等待人工评审。
  https://github.com/agentscope-ai/CoPaw/pull/8007
- **#7869 [OPEN, Under Review]** `fix(providers): carry the session header on connection checks`（创建 2026-09-18，已积压 **20 天**）。Under Review 状态长期未推进。
  https://github.com/agentscope-ai/CoPaw/pull/7869
- **#7964 [OPEN, Under Review]** `fix(observability): Langfuse tool observation never records tool output`（创建 2026-09-24，已积压 14 天）。可观测性缺陷，影响 100% 的正常工具调用记录。
  https://github.com/agentscope-ai/CoPaw/pull/7964

**高优先级（无 fix 的严重 OPEN Issue）**
- **#7722 [OPEN]** 内存耗尽三重路径（创建 2026-09-12，已积压 **26 天**）。用户提供了受控复现与最小修复，但至今无关联 PR，且仍在更新（2026-10-08）。
  https://github.com/agentscope-ai/CoPaw/issues/7722
- **#2865** 已于今日关闭，但从创建（2026-04-03）到关闭历时约 6 个月，反映出长期功能请求的周转周期偏长。

**维护者行动建议**：当前 21 条待合并 PR 对 5 条收口，评审带宽已构成明确瓶颈。建议优先清理上述 4 条已带 `Under Review` / `ready-for-human-review` 标记的修复 PR——其中 #8010 与今日集中关闭的媒体内容块问题直接相关，最应优先处理；#7869 已积压 20 天，属最长的评审滞留项。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报（2026-10-08）

## 1. 今日速览

ZeroClaw 今日维持**高活跃度**：过去 24 小时 Issues 更新 47 条（新开/活跃 46，关闭 1），PR 更新 50 条（待合并 48，合并/关闭 2）。**无新版本发布**，代码流向以存量 PR 审查为主，合并率极低，待合并队列持续膨胀。当日讨论集中于安全沙箱失效（firejail/bubblewrap 共 4 条相关 Bug）与多模态图片处理两条主线。多个高优先级（p1）问题处于 `status:accepted` 但无对应 fix PR，稳定性风险需要关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日仅 2 条 PR 合并/关闭，进展有限：

- **Issue #10769 [CLOSED]** — Harden plugin payload opens against concurrent ancestor replacement
  插件载荷打开的并发祖代替换加固问题已关闭（源自 PR #9134 的后续任务），插件系统运行时安全向前推进一步。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10769

**整体评估**：当日合并/关闭量占 PR 更新量的 4%，48 条待合并 PR 形成明显积压，项目当日净推进幅度较小，主要处于审查与讨论阶段。

---

## 4. 社区热点

讨论最活跃的条目（按评论数）：

| 条目 | 评论 | 状态 | 链接 |
|---|---|---|---|
| Issue #8692 维护者决策队列 Tracker | 15 | OPEN | https://github.com/zeroclaw-labs/zeroclaw/issues/8692 |
| Issue #9887 超大图片降采样而非丢弃 | 5 | status:blocked | https://github.com/zeroclaw-labs/zeroclaw/issues/9887 |
| Issue #9549 用 llmfit 引导本地模型选型 | 4 | status:accepted | https://github.com/zeroclaw-labs/zeroclaw/issues/9549 |
| Issue #11554 路径标记图片每轮重复发送 | 4 | priority:p1 | https://github.com/zeroclaw-labs/zeroclaw/issues/11554 |

**诉求分析**：最高热度仍是治理类 Tracker（#8692、#8691），反映社区对 RFC/ADR 决策流程透明度的持续关注；技术层面，**多模态图片链路成为焦点**——#9887（超限图片被直接拒绝）与 #11554（历史图片标记每轮重发导致模型描述"幻影新图"）指向同一套图片处理与历史折叠机制，用户希望配置项更可调、行为更可预期。

---

## 5. Bug 与稳定性

按严重程度排列：

**S0 - 数据丢失/安全风险**
- **#11540** bubblewrap 沙箱在 Linux 上检测失败，静默回退到应用层沙箱（p1，security:bubblewrap，`status:accepted`）。无 fix PR。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11540

**S1 - 工作流阻塞**
- **#11539** firejail 报 `invalid --nowheel command line option`（p1，`status:accepted`）。无 fix PR。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11539
- **#11538** firejail 报 `invalid private directory`，日志不透明（p1，`status:accepted`）。无 fix PR。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11538
- **#10863** Telegram 无限重试被拒语音更新，阻塞后续消息投递（p1，来自生产事故报告）。无 fix PR。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10863
- **#11180** 测试不稳定：`llm_request_payload_off_still_carries_prefix_fingerprints` 在并行运行时读到其他测试记录（p2，`status:in-progress`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11180

**S2 - 行为降级**
- **#11594** `firejail_args` 被文档与 schema 公开，但从未真正传入 firejail 调用（p1，security:policy）。安全配置存在"假生效"风险。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11594
- **#11554** 早期路径标记图片在后续每轮被重发，模型描述出"幻影新图"（p1，多频道 Telegram/Discord/Signal）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11554
- **#9592** `model_routing_config` 更新 provider alias 后仍探测旧配置（p1，`status:in-progress`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9592

**S3 - 次要**
- **#11586** ZeroCode 侧栏在守护进程重启后把失败会话标绿（p3）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11586
- **#11360** 插件包锁文件对其他本地账户可读，可被占用导致安装/移除失败（p3）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11360

**结论**：今日无任何上述 Bug 附有对应 fix PR。**沙箱后端（firejail/bubblewrap）连续 4 条安全相关 Bug 均处于 accepted 未修复状态**，是当前对项目健康度威胁最集中的区域。

---

## 6. 功能请求与路线图信号

**已有 PR 支撑、落地可能性较高：**
- **#11144** `fix(memory): narrow credential URL scan`（PR OPEN）— 收窄凭据扫描误报，直接回应内存威胁扫描器对普通文本的过度标记。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11144
- **#11592** `feat(security): add glob patterns for file_read path filtering`（PR OPEN）— 为 `file_read` 增加 glob 路径过滤，弥补当前只能做目录级放行的缺口。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11592
- **#11599** `fix(providers): honor native_tools configuration for compat families`（PR OPEN）— 修复 `native_tools` 仅对 Groq 生效、对 OpenAI 兼容族被静默忽略的问题。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11599
- **#11535** `fix(agent): restore cost attribution in AgentEnd usage annotations`（PR OPEN）— 恢复 turn 成本归因。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11535

**仍在设计/待作者响应阶段：**
- **#9549** [Feature] 借助 llmfit 引导本地模型选型并补充 ZeroClaw 配置文档（accepted，operator-ux）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9549
- **#11553** [Feature] 按频道可靠合并拆分入站消息（含附件保留批次、per-channel debounce）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11553
- **#11138** [Feature] 在受限委派中定义调用方工具级审批语义。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11138
- **#11254** [RFC] A2A 协议 crate（zeroclaw-a2a），标签 `needs-author-action`。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11254
- **#11325** [Feature] Windows 命名管道服务端校验，使 CLI 授权改动实时生效（`status:blocked`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/11325

**信号判断**：图片/多模态配置放宽（#9887）、频道消息合并（#11553）、本地模型选型引导（#9549）三者若推进，将显著改善操作者体验（operator-ux），但当前均受 `blocked`/`needs-author-action` 制约。

---

## 7. 用户反馈摘要

- **沙箱"配置了但没生效"是核心痛点**：#11594 报告 `firejail_args` 被文档承诺却从未应用；#11540 报告 bubblewrap 检测失败后静默降级。用户（maacruz、tunglambk）明确表达对安全边界可信度的担忧，且 #11538 指出"日志完全不透明"，排障困难。
- **生产环境真实事故**：#10863 引用了 RO-mix 在 PR #10 中报告的生产事故——被持续拒绝的语音更新会阻塞 Telegram 长轮询，影响后续所有消息投递。
- **多模态行为不符合预期**：#9887 指出超过 `multimodal.max_image_size_mb`（默认 5 MiB）的图片被直接拒绝，用户希望改为降采样并支持用 0 关闭限制；#11554 描述模型会反复描述"新"图片，属明显体验缺陷。
- **配置语义不一致**：#11599 反映 `native_tools` 对 OpenAI 兼容族被静默忽略，用户设置了但无任何反馈。
- **正面信号**：#10769（插件并发加固）已关闭，#11247–#11251 等一批来自 trusted contributor 的测试补强 PR 持续在队列中，说明社区仍在稳定贡献质量改进。

---

## 8. 待处理积压

**长期未合并的重点 PR：**
- **#10412** `feat(session): extract the atomic session-ownership claim into a shared SessionBackend contract`
  创建于 2026-08-27，已挂 `needs-author-action`、`do-not-merge`、`breaking-change`、`size:XL`、p1，积压超 6 周。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10412
- **#11144** `fix(memory): narrow credential URL scan` — 创建 2026-09-26，`needs-author-action`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11144
- **#11535** `fix(agent): restore cost attribution` — 创建 2026-10-05，`needs-author-action`。
  https://github.com/zeroclaw-labs/zeroclaw/pull/11535

**长期挂起的 Tracker / 决策类 Issue：**
- **#8692** 维护者决策队列（创建 2026-07-04，15 条评论，仍在更新）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **#8691** ADR 清单与已接受 RFC 决策记录（创建 2026-07-04，`status:in-progress`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8691
- **#9887** 超大图片降采样（创建 2026-08-10，`status:blocked` + `status:parking-lot`）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9887
- **#9549** llmfit 本地模型选型引导（创建 2026-07-29，accepted 逾 2 个月未落地）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9549

**维护者提示**：建议优先处理 p1 安全沙箱簇（#11540/#11539/#11538/#11594），它们相互关联且均无 fix PR；同时 #10412 作为 XL 级 breaking-change，长期滞留会影响 session 所有权模型的后续演进。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*