# OpenClaw 生态日报 2026-11-22

> Issues: 298 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-11-22 17:52 UTC

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

# OpenClaw 项目日报 · 2026-11-22

## 1. 今日速览

过去 24 小时项目维持高位活跃：**298 条 Issue 更新**（新开/活跃 232，关闭 66）、**500 条 PR 更新**（待合并 301，已合并/关闭 199），无新版本发布。关闭率约 22%（Issue）与 40%（PR），说明维护吞吐在追赶，但**待合并 PR 积压（301 条）仍是最突出的健康度风险**。今日讨论集中于 Windows/macOS 安装与升级链路故障、Gateway 内存与崩溃环路、以及记忆/会话生命周期正确性。整体判断：**工程活跃度高、修复节奏正常，但跨平台升级体验和长期挂起的 P0/P1 问题需要管理层介入。**

## 2. 版本发布

无新版本发布（Releases 为空）。注：多条 Issue 评论中提到 `v2026.11.5` / `v2026.11.6` 已包含部分修复（见 #141474），但今日无新发布事件。

## 3. 项目进展

今日已合并/关闭 PR 共 199 条。评论可见的关键落地项：

- **PR #203559 [CLOSED]** `fix(agents): harness history moves only at compaction` — 插件 harness（Codex app-server、Agents API、Muse）现与内嵌 runner 使用相同的历史读取守卫，历史仅在压缩时推进，消除跨 harness 行为不一致。(openclaw/openclaw PR #203559)
- **PR #203571 [CLOSED]** `fix: progress refresh stalls while a background command runs` — 修复活跃 agent 轮询后台进程时刷新停滞；已同步以 **PR #203580** 重新提交至 main（release 修复回移）。(openclaw/openclaw PR #203571 · PR #203580)
- **PR #203572 [CLOSED]** `refactor(infra): check exec approvals once at commit` — 消除同一命令 exec 审批被检查两次的重复逻辑，降低策略竞态面。(openclaw/openclaw PR #203572)
- **PR #203574 [CLOSED]** `fix: prioritize recommended models in picker search` — 模型搜索同分匹配时优先推荐模型（关联 #201450 更大范围搜索改造）。(openclaw/openclaw PR #203574)
- **Issue #141474 [CLOSED]** 确认 `sessions_yield` 卡死问题已由 #164445 修复并进入 stable `v2026.11.5`/`v2026.11.6`，settlement/swarm 测试套件在 tag 与 main 上通过。(openclaw/openclaw Issue #141474)
- **Issue #185578 [CLOSED]** Gateway 堆内存单调爬升（约 25 MiB/h）问题已关闭（标注 not-repro-on-main）。(openclaw/openclaw Issue #185578)

整体评价：今日推进以**稳定性修复与内部一致性重构**为主，无重大功能落地；升级可靠性（#203555、#203578、#203486）方向已有多条 PR 在途但尚未合并。

## 4. 社区热点

| 条目 | 热度 | 诉求 |
|---|---|---|
| [#191944](openclaw/openclaw Issue #191944) macOS `gateway stop` 失败（38 评论） | 最高讨论量 | macOS（Intel x64）上 stop/stop --force 均报 `ProcessInspectionError: Process ancestry could not be fully inspected`；用户需要可靠的服务停止/升级路径 |
| [#150635](openclaw/openclaw Issue #150635) 短期记忆淘汰致 dreaming 深阶段永不上推（30 评论） | 第二 | 短期召回库 512 条上限导致每夜驱逐已召回条目，记忆沉淀机制失效；标记 `needs-product-decision` |
| [#182891](openclaw/openclaw Issue #182891) Prompt 缓存从不复用（26 评论） | 高 | 每次请求 `cache read dropped N -> 0`，涉及 envelope 重写与 runtimeContextCarrier 变更，直接影响成本与延迟 |
| [#200606](openclaw/openclaw Issue #200606) 候选 Doctor 阻止升级（21 评论） | 高 | 2026.11.3 → 2026.11.5 更新在激活前因插件迁移输入冲突失败，`changed=[]` |
| [#169844](openclaw/openclaw Issue #169844) Windows 控制台更新卡在 “Activating”（14 评论，P0） | 高严重度 | 更新后 Scheduled Task 被禁用、gateway 停机、包未更新 |

分析：社区关注点已从“功能缺失”转向**升级/运维可靠性**（3 条热点均属此类）与**记忆机制的语义正确性**。前者是用户留存风险，后者是产品差异化能力的核心，二者都值得排期优先级。

## 5. Bug 与稳定性

按严重程度排列（标注 fix PR 状态）：

**P0 / 发布阻断**
- [#169844](openclaw/openclaw Issue #169844) Windows 控制台 Gateway 更新卡死、任务禁用、包未更新 — 无可见 fix PR。
- [#146860](openclaw/openclaw Issue #146860) Windows Scheduled Task `LogonType: InteractiveToken` 下更新交接无法取得进程起始标识，激活停滞 — 无 fix PR。

**P1 / 崩溃环路·会话状态**
- [#155563](openclaw/openclaw Issue #155563) service-child relay/anchor 与 MCP 子组在 agent 轮次结束后仍被保留（回归自 2026.9.5）— 无 fix PR，标记 `needs-product-decision`。
- [#196199](openclaw/openclaw Issue #196199) 自 2026.10.10 起 native Codex helper 完成后无法恢复父 agent，导致目标暂停 — 无 fix PR。
- [#190307](openclaw/openclaw Issue #190307) Gateway 重启后多 agent 永久 “degraded”（准入超时）— 无 fix PR。
- [#153899](openclaw/openclaw Issue #153899) 重启排空耗满 `TimeoutStopSec`，健康刷新对已关闭资源继续触发 — 无 fix PR。
- [#191476](openclaw/openclaw Issue #191476) Matrix 房间在 `image_generate` 完成后竞态新消息，卡在 “Plugin matrix consumer is closed” — 无 fix PR。
- [#166641](openclaw/openclaw Issue #166641) `web_fetch` 冷回退在主线程同步捕获无关插件，造成存活停顿 — 有 linked PR。
- [#169797](openclaw/openclaw Issue #169797) 单 CPU 主机内存约为 2026.9.4 的 2.5 倍、启动与首响应慢 3–5 倍 — 无 fix PR。
- [#125764](openclaw/openclaw Issue #125764) Telegram 出站网络失败单次即死信，通知静默丢失 — 无 fix PR。
- [#170928](openclaw/openclaw Issue #170928) Windows Gateway 启动需 7–9 分钟且就绪后间歇无响应 — 无 fix PR。
- [#128140](openclaw/openclaw Issue #128140) / [#136405](openclaw/openclaw Issue #136405) `memory_search` 固定 15s 超时，CLI 同类查询正常；无单次调用超时/重试配置 — 无 fix PR。

**P2 / 数据与 UX 摩擦**
- [#124306](openclaw/openclaw Issue #124306) exec 审批卡只标注语法风险，不提示目标是挂载点（data-loss）。
- [#160494](openclaw/openclaw Issue #160494) 绑定持久会话的 cron 在会话轮换时被准入拒绝，重试重复拒绝。
- [#166964](openclaw/openclaw Issue #166964) requester 权限撤销后子 agent 完成投递永久失败且无原因日志。
- [#160719](openclaw/openclaw Issue #160719) `sessions.delete` 返回 `ok:true/deleted:false`，残留 `session_windows` 行无法清理。
- [#112313](openclaw/openclaw Issue #112313)（已 CLOSED）出站队列死信终态不可读/重试/删除。
- [#195397](openclaw/openclaw Issue #195397) 工具调用后显式 `NO_REPLY` 被 settled-turn 兜底文本覆盖。

## 6. 功能请求与路线图信号

- **可配置的自动重置保留条数**：[PR #191580](openclaw/openclaw PR #191580) 已实现“自动 reset 保留最近 N 条消息”，但标注 `merge-risk: compatibility`、`needs proof`，合入需兼容性评审。
- **Telegram 群组选择性参与**：[PR #159478](openclaw/openclaw PR #159478) 让 agent 在多人对话中按语义判断是否参与，而非被动接收全部消息；XL 规模、长期在途。
- **Gateway 会话发送准入**：[PR #194376](openclaw/openclaw PR #194376) 为 `sessions_send` 唤醒引入网关侧准入，防止并发发送绕过批处理与限流。
- **Active Memory 升级委托插件**：[#151178](openclaw/openclaw Issue #151178) 当确定性通道无强命中时由插件决定是否深召回，标记 `linked-pr-open`，具备进入后续版本的条件。
- **长前台运行的可强制检查点**：[#138990](openclaw/openclaw Issue #138990) 静默时长或工具调用预算触发状态上报与让出。
- **WebChat/Talk 体验**：[#184803](openclaw/openclaw Issue #184803) 允许关闭或替换 Talk 通话口语化任务回执；[#103067](openclaw/openclaw Issue #103067) 集中会话命名并定义子 agent 生命周期与跨渠道持久化。

判断：#191580 与 #159478 最接近可合入状态；#151178 属产品决策项，需维护者表态。

## 7. 用户反馈摘要

- **升级链路是最大不满来源**：macOS stop 失败（#191944）、Windows Activating 卡死（#169844/#146860）、候选 Doctor 阻断（#200606）、pnpm 更新后再无法更新（#203486/#203458）构成一条连贯的“敢不敢升级”痛点。
- **记忆与召回可信度受质疑**：用户不仅报告超时（#128140/#136405），更指出语义层问题——dreaming 深阶段永不推进（#150635）、会话删除静默失败（#160719），说明对“状态说了算但实际没做”的不信任。
- **成本敏感**：Prompt 缓存零复用（#182891）被明确以请求级指标量化，属高价值反馈。
- **正面信号**：多条 Issue 评论（如 #141474、#160494、#160719）显示用户愿意配合复现、提供 `VACUUM INTO` 副本与 schema 证据，ClawSweeper 的复现请求得到响应，协作氛围健康；同时 `stale` 标记反复出现在 P1/P2 上，用户对长期无进展偶有不满。
- **跨平台差异显著**：Windows 与 macOS（Intel）问题占比高，Linux 侧相对稳定。

## 8. 待处理积压

长期未响应、需维护者关注的重点项：

- **P0 长期挂起**：[#169844](openclaw/openclaw Issue #169844)（2026-10-12 起，14 评论）、[#146860](openclaw/openclaw Issue #146860)（2026-09-13 起，12 评论，`needs-info`）— 均为 Windows 升级/激活阻断，超过 6 周无 fix PR。
- **stale 的 P1 会话状态问题**：[#153899](openclaw/openclaw Issue #153899)（2026-09-20）、[#155563](openclaw/openclaw Issue #155563)（2026-09-22）— 已标 `stale` 但影响 crash-loop，建议重新定级。
- **高评论、无决策**：[#150635](openclaw/openclaw Issue #150635)（30 评论，2026-09-17 起，`needs-product-decision`）、[#103067](openclaw/openclaw Issue #103067)（2026-07-09 起）、[#160494](openclaw/openclaw Issue #160494)（`needs-info`，用户已明确表示无法提供所请求的准入守卫信息）。
- **XL 规模长期未合并 PR**：[PR #194376](openclaw/openclaw PR #194376)、[PR #159478](openclaw/openclaw PR #159478)、[PR #192350](openclaw/openclaw PR #192350)（GitHub 集成插件化，依赖 #192349 且 `security-review-required`）— 涉及跨模块与安全评审，建议明确 owner 与时间表。
- **待合并 PR 总量 301 条**：建议对 `needs proof` / `waiting on author` 状态的 PR 设置自动超时提醒，防止评审带宽被稀释。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析 · 2026-11-22

## 1. 生态全景

今日生态整体呈"**高输入、低收敛**"状态：多数项目 PR 待合并量显著高于当日合并量，OpenClaw（301 条待合并）、Hermes Agent（43 条）、ZeroClaw（47 条）均面临评审带宽瓶颈。社区关注点已从"功能缺失"系统性转向**升级/运维可靠性、状态真实性与会话生命周期正确性**，OpenClaw、Hermes Agent、NanoClaw 三个活跃项目的高热 Issue 几乎全部属于此类。同时，**OpenAI 兼容 provider 接入**成为跨项目最一致的增量需求（PicoClaw、NullClaw、NanoClaw、Hermes Agent 均有对应 PR/Issue）。生态分层明显：少数项目处于高吞吐迭代期，多数进入低活跃维护或批量收尾状态。

## 2. 各项目活跃度对比

| 项目 | Issue 更新（新开/活跃·关闭） | PR 更新（待合并·合并/关闭） | Release | 健康度评估 |
|---|---|---|---|---|
| **OpenClaw** | 298（232·66） | 500（301·199） | 无 | 高活跃；PR 积压 301 条为最大风险，P0 升级阻断超 6 周无 fix |
| **Hermes Agent** | 50（50·0） | 50（43·7） | 无 | 高输入、零 Issue 关闭；统一网关遗留问题（#143547，85 评论）为焦点 |
| **ZeroClaw** | 10（6·4） | 50（47·3） | 无 | 贡献活跃但合并吞吐低；多条 XL/high-risk PR 挂起逾月 |
| **NanoClaw** | 6（4·2） | 25（19·6） | 无 | 吞吐良好；冷启动会话丢失（#4540）无 fix，19 条待合并需评审 SLA |
| **CoPaw** | 5（5·0） | 9（9·0） | 无 | 响应快（当日 Issue 当日出 PR）但**零合并**；3 条 XXL 级关联 PR 积压 |
| **LobsterAI** | 1（0·1） | 9（0·9） | 无 | 批量收尾 DSH 迁移验收；9 条均 CLOSED 但合并状态不明、无 release 承载 |
| **NanoBot** | 0 | 7（3·4） | 无 | 良好；WebUI 打磨为主，Issues 零输入需关注反馈通道 |
| **PicoClaw** | 2（1·1） | 4（1·3） | 无 | 偏低；6 条更新中 4 条带 `stale`，响应滞后 |
| **NullClaw** | 0 | 2（1·1） | 无 | 低活跃；唯一 provider PR 挂起 12 天 |
| **IronClaw** | 1（1·0） | 0 | 无 | 低活跃；仅 1 条 QA Bug 跟踪，无代码推进 |
| **Moltis** | 1（1·0） | 0 | 无 | 低位；MCP 协议硬编码为高影响兼容缺陷，无 fix |
| **TinyClaw** | 0 | 1（0·1） | 无 | 低噪声维护期；仅文档类 PR |
| **ZeptoClaw** | 0 | 0 | 无 | 过去 24 小时无活动 |

> 全生态今日 **零版本发布**，修复成果普遍缺少可验证的发行物。

## 3. OpenClaw 在生态中的定位

**规模优势显著**：OpenClaw 单日 Issue 更新（298）超过其余 12 个项目总和（164），PR 更新（500）亦为最高，社区体量处于生态第一梯队，约为 Hermes Agent 的 6 倍、ZeroClaw 的 10 倍。

**技术路线差异**：OpenClaw 采用"插件 harness + 内嵌 runner"双轨架构（见 #203559 统一历史读取守卫），并具备跨平台原生服务化能力（Windows Scheduled Task / macOS LaunchAgent），这是 Hermes Agent 统一网关、NanoClaw 容器化等路线所不同的侧重——OpenClaw 更强调**本地操作系统级集成与多渠道（Matrix/Telegram/WebChat）覆盖**。

**劣势同样源于规模**：301 条待合并 PR、多个跨平台升级 P0（#169844、#146860）挂起超 6 周，说明其社区吞吐已超出维护容量。相较之下，NanoClaw、NanoBot 规模小但当日合并率更高（40%、57%），**评审效率与体量呈反比**是 OpenClaw 需正视的结构性问题。

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级/安装可靠性** | OpenClaw（#191944、#169844、#200606）、NanoClaw（#4434 退出码假成功） | macOS stop 失败、Windows Activating 卡死、Doctor 阻断、安装脚本 exit 0 误导 |
| **状态真实性 / 静默失败** | Hermes（#158680 记忆写入假成功、#84059 重试承诺落空）、NanoClaw（#4540 会话静默丢失）、OpenClaw（#160719 删除返回 ok:true） | "报告成功但实际失败"成为跨项目最高频的用户不信任来源 |
| **记忆/上下文语义正确性** | OpenClaw（#150635 dreaming 深阶段不推进）、Hermes（#31584 memory-context 混同用户消息、#156951 压缩快照长期驻留） | 记忆注入边界与生命周期管理，兼有安全与成本双重含义 |
| **OpenAI 兼容 provider 扩展** | PicoClaw（#3470/#3471 LLMTR）、NullClaw（#1092 MartLLM）、NanoClaw（#4129 pi、#4210 llmman）、Hermes（#141227 models.dev 派生） | "一把 key 多模型"聚合网关需一等公民支持，而非覆盖配置 |
| **慢速本地模型的可调性** | IronClaw（#8172 超时配置）、CoPaw（#8649/#8647 本地引擎）、ZeroClaw（#12638 本地模型成本口径） | 自托管用户要求超时、GPU、成本展示适配本地部署 |
| **Prompt 缓存与成本** | OpenClaw（#182891 缓存零复用）、Hermes（#156822 语音路由割裂 cache） | 请求级成本指标被明确量化，直接影响留存 |
| **异步审批时序** | NanoClaw（#4538 3 分钟超时不匹配）、ZeroClaw（#12649 路由工具进审批门控） | 移动端审批者离场数小时，硬超时需改为可继续 |
| **MCP 生态成熟度** | Moltis（#1326 协议硬编码 2024-11-05）、NullClaw（#1052 MCP 示例）、LobsterAI（#3150 OAuth 2.1/SSE）、ZeroClaw（#12490 凭据族） | 协议版本协商、认证与凭据授权成为接入前提 |

## 5. 差异化定位分析

| 维度 | OpenClaw | Hermes Agent | NanoClaw | CoPaw | NanoBot / LobsterAI |
|---|---|---|---|---|---|
| **功能侧重** | 全渠道 + 记忆沉淀（dreaming）+ 插件 harness | 统一网关（CLI/TUI/Desktop/API/机器人/cron 单进程）+ Kanban | 容器化部署 + 多 provider + WhatsApp 渠道 | Web 控制台 + 本地推理引擎（llama.cpp/MLX） | NanoBot：WebUI 多语言交互；LobsterAI：DSH 迁移 + 桌面伴侣 |
| **目标用户** | 跨平台重度个人用户与运维者 | 多入口统一编排的团队/高级用户 | 自托管、rootless Docker 用户 | 面向企业内网/自托管的控制台用户 | NanoBot：轻量 WebUI 用户；LobsterAI：多分身进阶用户 |
| **技术架构关键差异** | 内嵌 runner + 插件 harness 双轨，OS 级服务化 | 单一网关进程收敛所有本地会话（迁移成本高） | 容器 + 网关双层，技能（`delivery/skill`）驱动 provider 扩展 | 前后端分离控制台 + `QWENPAW_BASE_PATH` 部署 | NanoBot：Agent Loop 可观测（#1190）；LobsterAI：project/expert 记忆作用域 |
| **今日核心矛盾** | 规模 vs 评审容量 | 网关迁移长尾 vs 关闭吞吐（0 Issue 关闭） | 安全修复到位 vs 运行时冷启动丢失 | 修复响应快 vs 零合并 | NanoBot：Issues 零输入；LobsterAI：CLOSED 状态与发布空窗 |

## 6. 社区热度与成熟度

**第一层｜高吞吐快速迭代**：OpenClaw、Hermes Agent、ZeroClaw、NanoClaw。共性为单日 PR 更新 ≥25 条、存在活跃的多 PR 特性线（ZeroClaw 的凭据族/XMPP、NanoClaw 的 provider 扩展）。风险在于积压——四者待合并 PR 合计 410 条，评审是共同瓶颈。

**第二层｜质量巩固与收尾**：CoPaw（Issue 当日响应但零合并，前端滚动/渲染子系统集中报障）、LobsterAI（DSH 迁移 6/6 一次性收尾，9 PR 全 CLOSED 待确认合并）、NanoBot（WebUI 交互一致性打磨，4 条合并全部为体验修复）。此层特征是**功能净增量让位于正确性修正**。

**第三层｜低活跃维护**：PicoClaw（4/6 带 `stale`）、NullClaw、IronClaw、Moltis、TinyClaw、ZeptoClaw。多数处于单条 Issue/PR 跟踪状态，存在响应延迟或反馈通道沉寂（NanoBot、TinyClaw Issues 零更新需核查采集完整性）。

**成熟度判断**：全生态尚无项目在今日发布版本，说明"代码推进—发行验证"之间存在普遍缺口；OpenClaw 的 `v2026.11.5/11.6` 已承载修复但用户仍在报告新版问题（#200606），反映**跨平台发行验证不足**是生态级成熟度短板。

## 7. 值得关注的趋势信号

1. **"失败诚实度"成为 Agent 产品的一等公民指标**。Hermes（#158680）、NanoClaw（#4434）、OpenClaw（#160719）在同日暴露"假成功"问题。对开发者的启示：状态机必须收敛到可观测终态，`ok:true` 类返回值需与实际副作用绑定，否则用户信任成本远高于功能缺失。

2. **长期异步交互打破"同步超时"假设**。NanoClaw #4538（审批 3 分钟 vs 离场 1–2 小时）与 OpenClaw #138990（长前台运行可强制检查点）指向同一结论：Agent 会话生命周期必须以小时/天为尺度设计，审批、投递、恢复均需可续而非硬失败。

3. **本地模型用户已成为独立群体，需要专门的配置面**。IronClaw #8172（超时）、CoPaw 三条本地引擎 PR、ZeroClaw #12638（本地模型成本显示 <$0.01）共同证明：默认超时、GPU 控制、成本口径均需为慢速/免费本地推理重新调参。

4. **MCP 从"能连"进入"协议版本与凭据治理"阶段**。Moltis #1326（2024-11-05 硬编码导致握手失败）、LobsterAI #3150（OAuth 2.1/SSE）、ZeroClaw #12490/#12408（默认拒绝 + 显式授予 + 只写 UI）显示 MCP 集成正从示例走向安全模型细化，协议协商能力将成为接入门槛。

5. **记忆注入的边界即攻击面**。Hermes #31584（memory-context 被当作权威用户消息）与 #158871（入站轮次溯源）形成一对：记忆/上下文的可信度需要显式建模与溯源，这已从产品问题上升为安全议题。

6. **跨渠道行为一致性成为用户验收标准**。ZeroClaw #10987 用户直接以 Signal 为参照要求 WhatsApp 对齐；OpenClaw 多渠道问题占比高。开发者应把"渠道对等性"纳入测试矩阵，而非逐渠道打补丁。

7. **XL 级 PR 的系统性积压正在稀释贡献者意愿**。ZeroClaw #11874/#11847（挂起逾月反复 rebase）、CoPaw #8649→#8647→#8648（强制合并顺序、13 天未评）、NanoClaw #3174（近 4 个月）。建议维护者对立项级 PR 明确 owner 与时间表，并对低风险 XS 改动（如 ZeroClaw #12265、#12656 安全升级）优先放行以解锁依赖链。

---

**对技术决策者的行动建议**：选择引入项目时，优先评估其**升级路径可靠性**与**状态终态收敛能力**（可用 OpenClaw #169844、NanoClaw #4540 作为压力测试样本）；对自研或二次开发者，应尽早建立"配置可调 + 失败显式 + 会话可续"三项基线，这三者在本日生态中覆盖了绝大多数高热缺陷的根因。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 · 2026-11-22

## 1. 今日速览

过去 24 小时项目共发生 7 条 PR 更新（4 条关闭/合并、3 条待合并），Issues 更新为 0，无新版本发布。合并/关闭的 4 条 PR 全部集中在 WebUI 体验修复上（侧栏焦点样式、失败渠道开关、桌面端消息操作、Agent Loop 观测），显示当前迭代重心是交互打磨与可观测性。待合并的 3 条 PR 中，两项为 WebUI 功能增强（消息编辑重发、内置命令多语言本地化），一项为 README 徽章补充。今日无 Issue 活动，社区问答与 Bug 上报处于静默状态，维护者应关注积压事项（见第 8 节）。整体健康度良好：CI 通过、修复节奏稳定，但缺少新 Issue 输入，可能意味着用户反馈通道或激励不足。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并 4 条 PR，均具实际推进价值：

- **PR #6751（已关闭）** WebUI 桌面端侧边栏直显消息操作，将复制回复从两步（打开 `…` 菜单再点复制）降为一次点击，同时避免在阅读栏常驻工具栏。 [链接](https://github.com/HKUDS/nanobot/pull/6751)
- **PR #6750（已关闭）** 修复按下 Enter 重命名侧栏主题后标题仍被矩形框包围的问题，改为下划线显示焦点，键盘用户可感知焦点回归。 [链接](https://github.com/HKUDS/nanobot/pull/6750)
- **PR #6748（已关闭）** 修复微信登录过期时渠道开关状态与实际不符的问题：此前点击开关会重试连接而非关闭渠道，现改为 Failed 徽章归徽章、开关反映用户可操作的意图。 [链接](https://github.com/HKUDS/nanobot/pull/6748)
- **PR #1190（已关闭，标记 conflict）** 为 Agent Loop 增加 observe 配置开关，启用后记录模型调用、工具调用、Skill 使用、SubAgent 启动等事件 Trace，并在 WebUI 中完整展示。该 PR 跨度较长（创建于 2026-02-25），今日关闭需确认是合并还是废弃；若为合并，则显著提升 Agent 调试可观测性。 [链接](https://github.com/HKUDS/nanobot/pull/1190)

整体看，项目在 WebUI 交互一致性与 Agent 运行可观测性两个方向各前进一步，规模属增量质量改进，无架构级变更。

## 4. 社区热点

今日无 Issue 评论数据，PR 评论数字段均为 `undefined`，👍 全部为 0，无法识别真实讨论热度。就内容权重而言，以下两条最值得关注：

- **PR #6323（OPEN，创建于 2026-10-20，今日更新）** WebUI 同会话内编辑并重发消息。作者标明当前 head `a51f1ea21`、基于 `main` 的 `0c45c7441`，20 项 CI 检查全部通过（含 `CI required`），属长期迭代、接近就绪的功能 PR。 [链接](https://github.com/HKUDS/nanobot/pull/6323)
- **PR #6747（OPEN）** 全部 17 个内置斜杠命令在 WebUI、TUI 与文字渠道中按读者语言返回结果；`/model` 切换成功时更新当前会话徽章，失败则保持不变；新增可保存回复。 [链接](https://github.com/HKUDS/nanobot/pull/6747)

背后诉求：用户对多语言一致性与"编辑—重发"这类高频交互能力的需求明确，重点在于减少操作摩擦，而非新增底层能力。

## 5. Bug 与稳定性

今日无 Issue 层面的 Bug 上报。PR 中体现的缺陷修复按影响排序：

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 中 | 微信登录过期后渠道仍处于启用态，但开关显示为关闭；点击开关会重试连接，用户无法关闭该渠道 | 已有 fix PR #6748（已关闭） | [PR #6748](https://github.com/HKUDS/nanobot/pull/6748) |
| 低 | 重命名侧栏主题后标题残留焦点矩形框，视觉上似仍在编辑态 | 已有 fix PR #6750（已关闭） | [PR #6750](https://github.com/HKUDS/nanobot/pull/6750) |
| 低（体验） | 桌面端复制回复需两次点击，较窄屏布局的一键复制更繁琐 | 已有改进 PR #6751（已关闭） | [PR #6751](https://github.com/HKUDS/nanobot/pull/6751) |

未发现崩溃或回归问题；两条 fix PR 均已关闭，建议确认对应代码已合入 `main`。

## 6. 功能请求与路线图信号

基于今日 PR，可判断以下功能接近或可能进入下一版本：

- **消息编辑与重发（PR #6323）**：CI 全绿、长期迭代，纳入下一版本的可能性最高。
- **内置斜杠命令多语言本地化（PR #6747）**：覆盖 WebUI/TUI/文字渠道共 17 个命令，并补充 `/model` 切换的会话状态反馈与可保存回复，属产品化完善，若评审顺利有望近期合入。
- **Agent Loop Trace 观测（PR #1190）**：已是可工作的原型（含 WebUI 详情展示截图），但今日以 `conflict` 状态关闭，需澄清是否将以新 PR 重提。
- **README 补充 Star History 徽章（PR #6752）**：纯文档/展示向，不改动封面、既有 shields、发布链接与公司 logo，合入成本低。 [链接](https://github.com/HKUDS/nanobot/pull/6752)

## 7. 用户反馈摘要

今日无 Issue 评论，无法从评论中提炼用户原话级的痛点与满意度。可间接从 PR 描述中读出的真实使用场景：

- 用户在移动/窄屏布局中已享受一键复制，桌面端却更繁琐，说明多端交互一致性是实际使用中的落差点。
- 微信渠道登录过期是真实发生的使用场景，且旧交互让用户"无法关闭失效渠道"，属易引发挫败感的状态管理问题。
- 用户需要在 WebUI 中回看 Agent 运行过程以调试（PR #1190 背景明确指出"当前 Agent Loop 运行过程不方便观测和调试"）。
- 非英语用户需要内置命令结果跟随读者语言，体现国际化用户的明确诉求。

## 8. 待处理积压

- **PR #6323（OPEN，自 2026-10-20 起，已一个月余）**：功能完整且 20 项 CI 通过，长期挂起易产生 rebase 成本与冲突风险，建议优先评审或明确阻塞原因。 [链接](https://github.com/HKUDS/nanobot/pull/6323)
- **PR #1190（以 conflict 状态关闭）**：投入较大、含完整 WebUI 展示的功能被关闭但无可见结论，建议在 PR 中说明处置方式（是否拆分重提），避免贡献者与关注者信息缺失。 [链接](https://github.com/HKUDS/nanobot/pull/1190)
- **PR #6747（OPEN）**：今日新开、优先级标为 p2，需关注是否与 #6323 在 WebUI 会话状态上有交叉，建议合并评审以避免冲突。 [链接](https://github.com/HKUDS/nanobot/pull/6747)

另需提醒：今日 Issues 更新为 0，但 PR 评论数均为 `undefined`，建议核查数据采集是否完整，以免漏判社区讨论热度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报（2026-11-22）

## 1. 今日速览

项目今日维持高活跃度：过去 24 小时 Issues 更新 50 条且全部为新开/活跃（关闭 0 条），PR 更新 50 条（待合并 43 条、合并/关闭 7 条），无新版本发布。讨论重心集中在统一网关（Unified gateway, #106742）合并后的遗留问题上，#143547 单条 Issue 已累积 85 条评论，是当前最主要的稳定性焦点。新提交的 PR 以针对性 Bug 修复为主（如记忆写入审批、PM 下载器、Desktop 实时会话绘制），同时有多条插件/MCP 目录条目类 PR。整体看：**输入流量大、关闭吞吐偏低**，积压风险值得关注。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 共 7 条，均为状态从 OPEN 变为 CLOSED，摘要中可见的主要有：

- **[CLOSED] #108381** `feat(cron): one Desktop delivery session per cron invocation` — 为 cron 任务增加 `desktop_delivery_enabled` 字段与 `desktop-session[:<name>]` 投递目标，cron 输出写入 Desktop 可见会话（source=`cron_desktop`）。推进了 cron 与 Desktop 交付链路的贯通。
  https://github.com/NousResearch/hermes-agent/pull/108381
- **[CLOSED] #158859** `fix(desktop): ignore non-sticky prompt-slot rows in the sticky-prompt clip` — 修复 Desktop 聊天中滚动时置顶提示下方出现遮挡正文的空白带问题。
  https://github.com/NousResearch/hermes-agent/pull/158859

其余 5 条合并/关闭 PR 未在提供的数据中列出标题，无法进一步说明。总体而言，今日合入量相对待合并队列（43 条）偏低，项目推进主要体现在 Desktop 体验修复与 cron 交付能力上。

## 4. 社区热点

| Issue/PR | 评论/👍 | 诉求分析 |
|---|---|---|
| [#143547](https://github.com/NousResearch/hermes-agent/issues/143547) Unified gateway (#106742) 合并后遗留问题 | 85 评论 / 1👍 | 10 月 14 日统一网关将所有本地会话迁入单一网关进程（覆盖 CLI、TUI、Desktop、API server、编辑器、消息机器人、cron、Kanban 等），合并后 main 上出现一系列问题，是当前社区最集中的讨论点。 |
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) 将 memory-context 视为背景上下文而非权威用户消息 | 14 评论 / 0👍 | 涉及 agent 对记忆注入内容与真实用户输入的区分，作者明确指出这可能构成潜在攻击面。 |
| [#134092](https://github.com/NousResearch/hermes-agent/issues/134092) cron 任务在 Bot Chat 投递完成后仍停留在 `delivery_queued` | 9 评论 / 0👍 | 状态机未收敛，影响用户对 cron 投递结果的判断。 |
| [#147631](https://github.com/NousResearch/hermes-agent/issues/147631) 子任务受阻后父 agent 静默停止未完成任务 | 8 评论 / 0👍 | 任务编排可靠性问题，用户期望父 agent 继续执行其他可执行工作或显式标记任务为 blocked。 |
| [#137843](https://github.com/NousResearch/hermes-agent/issues/137843) Desktop 切换会话后工作区文件面板永久卡在 loading | 7 评论 / 0👍 | 文件树状态重置后无重新加载路径，影响 Windows 打包版日常使用。 |

**信号**：热点几乎全部指向**网关/会话状态一致性**与**任务编排可靠性**，而非新功能；#143547 的长尾讨论说明统一网关的迁移成本仍在释放。

## 5. Bug 与稳定性

按影响面排列（据摘要判断严重程度）：

**高（数据/状态一致性、静默失败）**
- **[#158680](https://github.com/NousResearch/hermes-agent/issues/158680)**（v0.23.2）Memory 写入审批在持久化 pending 请求失败时仍报告成功，`stage_write()` 吞掉写失败。**已有 fix PR：[#158953](https://github.com/NousResearch/hermes-agent/pull/158953)**。
- **[#155638](https://github.com/NousResearch/hermes-agent/issues/155638)** Matrix 回执恢复死循环：`reconcile_pending()` 在 profile 作用域外抛 `UnscopedSecretError (MATRIX_HOME_ROOM)`，重试永不收敛。无 fix PR。
- **[#156822](https://github.com/NousResearch/hermes-agent/issues/156822)**（v0.22.2）语音路由 `auxiliary.voice_chat` 割裂 Anthropic prompt cache，语音轮次后的后台审查重写整个前缀，造成额外成本。无 fix PR。
- **[#31584](https://github.com/NousResearch/hermes-agent/issues/31584)** memory-context 被当作权威用户消息内容，存在混淆与攻击面风险。无 fix PR。

**中（功能不可用/错误行为）**
- **[#148767](https://github.com/NousResearch/hermes-agent/issues/148767)** Windows 上候选路径含 `nul` 时 `complete.path` 在 `ntpath.relpath` 抛 ValueError，整个 WS 请求被丢弃。无 fix PR。
- **[#108401](https://github.com/NousResearch/hermes-agent/issues/108401)** 设置 `HERMES_KANBAN_DB` 时 `kanban boards list` 每行都打印当前活跃看板的计数，且 `board=`/`--board` 失效。无 fix PR。
- **[#142712](https://github.com/NousResearch/hermes-agent/issues/142712)** 同一插件同时装在共享 home 与 profile home 时，`uv lock` 报 "Two workspace members are both named …"。无 fix PR。
- **[#84059](https://github.com/NousResearch/hermes-agent/issues/84059)** Kanban 超时/崩溃通知在熔断器决策前承诺 "will retry"，随后却 "gave up"。无 fix PR。
- **[#137843](https://github.com/NousResearch/hermes-agent/issues/137843)** Desktop 文件面板卡 loading（见社区热点）。无 fix PR。

**性能/其它**
- **[#158485](https://github.com/NousResearch/hermes-agent/issues/158485)** 远程 Desktop（macOS，SSH）重连时为**所有** profile 并发启动 `serve --isolated`（22 × ~240 MB），含用户未打开的 profile。无 fix PR。
- **[#158872](https://github.com/NousResearch/hermes-agent/issues/158872)** Desktop Capabilities 搜索无防抖，Skills 标签页每次按键在主线程同步重算 10.5 万行目录。无 fix PR。
- **[#156951](https://github.com/NousResearch/hermes-agent/issues/156951)** 压缩后的轮次结果在 `state_meta` 中保留完整快照直到会话被清理（90 天），远超 7 天重试窗口。

**已有 fix PR 的其它问题**
- **[#142328](https://github.com/NousResearch/hermes-agent/pull/142328)** Desktop 在活跃会话中切换模型后，composer 模型标签未重绘。
- **[#158912](https://github.com/NousResearch/hermes-agent/pull/158912)** Desktop 刷新/重开会话后，后端已启动的轮次被绘制两次（实时事件 + 历史记录）。
- **[#158955](https://github.com/NousResearch/hermes-agent/pull/158955)** `pm/downloader.py` 在大文件（约 198.5 MB 的 `chrome-win64.zip`）慢代理下载时陷入反复 thrash。

## 6. 功能请求与路线图信号

- **[#158871](https://github.com/NousResearch/hermes-agent/issues/158871)**（P3，11-22 新开）为已注册工具处理器提供可选启用的不可变入站轮次溯源，使操作员级消息插件能把动作绑定到引发当前轮次的唯一已认证人类消息。与 #31584 的上下文可信度议题同源，**可能被合并考虑**。
- **[#88141](https://github.com/NousResearch/hermes-agent/issues/88141)**（P3）为 `video_analyze` 增加原生视频快路径，当主模型支持视频输入时走多模态 tool-result 通道——对齐已有 `vision_analyze` 的成熟模式。
- **[#81136](https://github.com/NousResearch/hermes-agent/issues/81136)**（P3，1👍）Discord 线程自动归档时长可配置（默认 24 小时对长会话过短）。
- **[#156660](https://github.com/NousResearch/hermes-agent/issues/156660)**（P3）消息界面为 Ruby 工具调用显示 💎 图标，对齐 Python 的 🐍。
- **[#141227](https://github.com/NousResearch/hermes-agent/issues/141227)**（P2，1👍）补全 Anthropic 策划模型列表并改为从 models.dev 派生。

**对应 PR 判断**：
- **[#158940](https://github.com/NousResearch/hermes-agent/pull/158940)** Discord 语音频道 barge-in（用户说话打断机器人）——成熟度较高、诉求明确（关联 #129398、#141320），较可能进入下一版本。
- **[#11439](https://github.com/NousResearch/hermes-agent/pull/11439)** 按平台（Telegram/Slack/Discord）设置默认模型/提供商，含明确优先级规则；该 PR 自 4 月开放至今，标记 `blast-broad`。
- **[#107867](https://github.com/NousResearch/hermes-agent/pull/107867)** 完整的波兰语桌面语言包（约 4,300 行，沿用法语 locale PR 模式）。
- 插件/MCP 目录条目：[#158954](https://github.com/NousResearch/hermes-agent/pull/158954) delegation-gate 1.3.3、[#158949](https://github.com/NousResearch/hermes-agent/pull/158949) Ocean Security、[#158946](https://github.com/NousResearch/hermes-agent/pull/158946) nyx-wiki-recall、[#158334](https://github.com/NousResearch/hermes-agent/pull/158334) ceo-pack v0.5.0——属生态扩展，合并门槛较低。

## 7. 用户反馈摘要

- **可靠性与失败诚实度是核心痛点**：多条 Issue 指向系统"报告成功但实际失败"或"承诺后未兑现"——记忆写入审批假成功（#158680）、cron 交付状态不收敛（#134092）、Kanban 重试承诺落空（#84059）。用户对状态真实性的要求高于对新功能的需求。
- **任务编排期望落空**：#147631 中父 agent 在子任务受阻后直接结束轮次，用户期望它继续处理其他可执行工作或显式转入 blocked 状态。
- **上下文边界敏感**：#31584 作者自述细节超出理解范围、由 agent 代写请求，但仍意识到记忆注入与用户消息混同是"潜在威胁面"，说明终端用户已具备安全边界意识。
- **桌面端日常体验摩擦**：会话切换后文件面板卡死（#137843）、搜索输入卡顿（#158872）、模型标签不刷新（#142328）、对话内容被重复绘制（#158912）、空白带遮挡正文（#158859）——均为高频操作路径上的小问题。
- **成本敏感**：语音路由割裂 prompt cache（#156822）与压缩快照长期驻留（#156951）被视为易被忽视的账单/存储成本。

## 8. 待处理积压（提醒维护者关注）

长期未响应或长时间悬置的条目：

- **[#11439](https://github.com/NousResearch/hermes-agent/pull/11439)**（4 月 17 日开）按平台默认模型/提供商覆盖，标记 `blast-broad`、`risk-session-state`、`risk-compatibility`，开放超 7 个月。
- **[#34577](https://github.com/NousResearch/hermes-agent/pull/34577)**（5 月 29 日开）修复只读源（如 Nix store 0444/0555）复制的可变副本权限，涉及 `utils.py` 共享 helper，标记 `risk-security-boundary` 等多项风险标签。
- **[#81136](https://github.com/NousResearch/hermes-agent/issues/81136)**（8 月 7 日开）Discord 线程归档时长配置，仅 1👍。
- **[#84059](https://github.com/NousResearch/hermes-agent/issues/84059)**（8 月 11 日开）Kanban "will retry" 与熔断器决策不一致，跨多个版本仍未修复。
- **[#108401](https://github.com/NousResearch/hermes-agent/issues/108401)**（9 月 11 日开）`HERMES_KANBAN_DB` 下看板计数与 `--board` 失效。
- **[#107867](https://github.com/NousResearch/hermes-agent/pull/107867)**（9 月 11 日开）波兰语 locale，标记 `risk-compatibility`，已开放两月余。
- **[#137843](https://github.com/NousResearch/hermes-agent/issues/137843)**（10 月 13 日开）Desktop 文件面板卡 loading，7 条评论仍无 fix。
- **[#143547](https://github.com/NousResearch/hermes-agent/issues/143547)**（10 月 23 日开，85 评论）统一网关合并后问题追踪单，长期作为主协调点——建议明确里程碑与拆分子任务。
- **[#142712](https://github.com/NousResearch/hermes-agent/issues/142712)**（10 月 21 日开）重复插件源破坏 `uv lock`。

---

**健康度小结**：今日输入（50 Issues + 50 PR）远高于收敛（0 Issue 关闭、7 PR 关闭），且无版本发布。热点集中在统一网关遗留问题与状态一致性类缺陷上，修复意愿明确（多条已有配套 PR），但长期积压 PR 中数条带有广泛影响/安全边界标签，建议优先给出明确结论。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-11-22

## 1. 今日速览

过去24小时项目无新版本发布，共发生 6 条 Issue/PR 更新（Issues 2 条、PRs 4 条），整体活跃度偏低。Issues 侧呈现"一进一出"：新开 1 条已标记 `stale` 的功能请求（#3470），关闭 1 条同类 stale Issue（#3462）。PR 侧关闭 3 条、保留 1 条待合并（#3471），关闭项中包含一条跨 PR 汇总合并（#1555）和两条 OpenAI 兼容 provider 接入（#3464、#3431）。今日更新集中在"OpenAI 兼容 provider 生态扩展"与"skills 安装路径修复"两条主线上，但多数条目带有 `stale` 标签，说明存在响应延迟的迹象，项目健康度需要维护者关注积压清理节奏。

## 2. 版本发布

今日无新版本发布。数据中未提供可披露的发布内容、破坏性变更或迁移说明。

## 3. 项目进展

- **修复汇总合入**：#1555 `fix: merge PR #1390 #1389 #1383 #1381` 已关闭，该 PR 汇总合并了 4 个开放 PR 的修复内容。若相关信息属实，这是今日对代码库实质推进最大的一项，将多个待处理修复一次性收拢。链接：sipeed/picoclaw PR #1555
- **Provider 接入被关闭**：#3464（CloudGPU OpenAI 兼容 provider）与 #3431（Standard Compute provider）今日状态为 CLOSED，两条均带 `stale` 标签。需注意：摘要未说明是"合并关闭"还是"未合并关闭"，因此不宜认定为功能已落地。链接：sipeed/picoclaw PR #3464、sipeed/picoclaw PR #3431

整体看，今日项目在功能面上是"清理为主、推进为辅"：一条汇总修复关闭，两条 provider 提交关闭，真正的功能净增量有限。

## 4. 社区热点

今日整体讨论量很低，所有列出的 Issue/PR 点赞数均为 0，评论数以 2 条封顶：

- **Issue #3470**（[OPEN][stale] 请求将 LLMTR 作为 OpenAI 兼容 provider 纳入模型目录，2 条评论）链接：sipeed/picoclaw Issue #3470
- **Issue #3462**（[CLOSED][stale] skills 安装因 frontmatter name 冲突报错，2 条评论）链接：sipeed/picoclaw Issue #3462

背后诉求清晰：用户希望 PicoClaw 的模型目录能低成本接入更多"一把 key 打通多家模型"的 OpenAI 兼容网关，而非让用户手工覆盖其他 provider 配置；同时 skills 生态在多个 skill 共享同名 frontmatter 时出现安装阻塞，影响 agent 侧 `install_skill` 工具的可用性。两者分别指向"provider 扩展便利性"和"skills 分发可靠性"。

## 5. Bug 与稳定性

按严重程度排列：

1. **中高｜skills 安装失败**：Issue #3462，当已安装的另一个 skill 在 `SKILL.md` frontmatter 中使用相同 `name` 时，`picoclaw skills install` 与 agent 的 `install_skill` 工具均报错 `registry archive is not a valid skill`。该问题会直接阻断 skill 安装流程，影响 agent 能力扩展。该 Issue 今日已关闭，数据中未提供对应 fix PR 信息，修复是否已落地需进一步确认。链接：sipeed/picoclaw Issue #3462

今日无崩溃、回归类问题报告。

## 6. 功能请求与路线图信号

- **LLMTR provider**：Issue #3470 提出在模型目录中内置 `llmtr` provider（OpenAI 兼容网关，基址 `https://llmtr.com/v1`，单 key 访问其目录内模型）。已有配套 PR #3471（[OPEN][stale]）同日推进，实现方式为避免覆盖其他 provider 设置的命名条目。**该需求同时有 Issue 与 PR，是当前最接近落地的新功能**，但两者均带 `stale` 标签，能否进入下一版本取决于维护者是否继续跟进。链接：sipeed/picoclaw PR #3471
- **CloudGPU / Standard Compute provider**：对应 PR #3464 与 #3431 均已关闭，方向与 LLMTR 一致，若维护者希望统一 provider 接入规范，可考虑以同一套机制合并处理。

## 7. 用户反馈摘要

- **使用场景**：用户倾向于使用"一键多模型"的 OpenAI 兼容聚合网关来简化配置，明确表示当前已能通过覆盖配置的方式接入，但希望获得一等公民式的命名 provider 支持（Issue #3470）。
- **不满意点**：skills 注册表在名称冲突场景下校验过于严格且报错信息不精确，导致安装与 agent 工具调用失败（Issue #3462）。
- **贡献者反馈**：#3431 作者明确表示自己在 Standard Compute 工作，属于厂商主动提交 provider 接入，说明项目在 provider 扩展上有外部生态推动力。
- 今日无正面评价类评论数据可供提炼。

## 8. 待处理积压

- **PR #3471**（[OPEN][stale]，更新于 2026-11-21）：LLMTR provider，唯一待合并 PR，且已有对应 Issue #3470 形成需求闭环，建议优先评审。链接：sipeed/picoclaw PR #3471
- **Issue #3470**（[OPEN][stale]）：与上条同源，若 PR 无法合入应及时向用户说明替代方案。链接：sipeed/picoclaw Issue #3470
- **PR #1555**：2026-03-14 创建、2026-11-22 才关闭，跨度约 8 个月，且评论字段缺失，建议维护者核查该合并批次是否已完整覆盖 #1390/#1389/#1383/#1381 的修复意图，避免遗留问题。链接：sipeed/picoclaw PR #1555

**健康度提示**：今日 6 条更新中，4 条带 `stale` 标签，且关闭项多于合并项，反映出维护响应滞后与积压清理压力。建议对 provider 类 PR 统一评审标准，并缩短 stale 标记到最终处置的周期。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-11-22

> 数据来源：NanoClaw (github.com/qwibitai/nanoclaw) 过去 24 小时 GitHub 活动。下文链接按数据源标注为 `nanocoai/nanoclaw`。

## 1. 今日速览

项目今日处于**高活跃维护状态**：PR 更新 25 条（待合并 19 条、已合并/关闭 6 条），Issues 更新 6 条（新开/活跃 4 条、已关闭 2 条），无新版本发布。合并动作集中在安全依赖修复（WhatsApp/Baileys 漏洞）、安装脚本退出码错误与陈旧提示清理；新开 PR 多为小而精准的修复（邮件箱轮询、WhatsApp 凭据时序、容器文档技能选择）。风险面主要是 **Codex provider 的两个未解决 Bug** 和一条**冷启动会话丢失**的高影响报告，均指向 agent 运行时可靠性。整体健康度：贡献吞吐良好，但 19 条待合并 PR 的评审积压值得关注。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR：

- **#4516 [CLOSED] fix(whatsapp): Baileys 升级至 7.0.0-rc14** — 将 `channels` 分支移出受 GHSA-qvv5-jq5g-4cgg（消息伪造）影响的 rc.9，属安全修复。链接：nanocoai/nanoclaw PR #4516
- **#4434 [CLOSED] fix(add-onecli): 网关就绪检查失败时 setup 应失败** — 使 OneCLI 安装在就绪检查失败时以非零码退出，修正"STATUS: failed 却 exit 0"的误导性成功。链接：nanocoai/nanoclaw PR #4434
- **#2824 [CLOSED] fix: 从主种子提示中移除过时的 "Global Memory" 指令** — 清理陈旧提示噪音。链接：nanocoai/nanoclaw PR #2824

配套关闭的 Issues：#3941（Baileys 安全锁定，由 #4516 解决）、#4408（add-onecli 退出码，由 #4434 解决）。**向前推进度**：本轮合并覆盖安全、安装正确性、提示质量三类问题，均为"正确性修正"而非新能力，项目稳定性小幅净提升；新增能力仍卡在待合并队列中。

## 4. 社区热点

数据源未提供各条目的评论数具体数值（PR 评论数字段为 `undefined`），故按内容影响与更新密度判断热点：

- **PR #4129 [OPEN] feat(providers): 新增 pi agent provider（/add-pi）** — 10-19 创建、今日仍更新，是待合并队列中存续最久的特性 PR。链接：nanocoai/nanoclaw PR #4129
- **PR #3174 [OPEN] fix: 支持 rootless Docker 容器** — 08-01 创建，描述了两处"在 docker 组内不可见"的独立失败，指向真实部署盲区。链接：nanocoai/nanoclaw PR #3174
- **Issue #4538 [OPEN] [capability] 超越超时的审批：允许 agent 继续并响应迟到的点击** — 作者 carstenf 指出现状：OneCLI 审批约 3 分钟后超时拒绝，而审批者常离开手机 1–2 小时。链接：nanocoai/nanoclaw Issue #4538
- **Issue #3941 [CLOSED] Baileys 安全锁被 `/update-nanoclaw` 反复回钉** — 用户诉求是根因修复而非逐次打补丁，今日已由 #4516 回应。链接：nanocoai/nanoclaw Issue #3941

背后诉求：**部署灵活性**（rootless Docker、多 provider/本地模型）与**长时间异步交互的可靠性**（审批、会话延续）是社区最集中的两类期待。

## 5. Bug 与稳定性

按严重程度排序：

1. **【高】#4540 [OPEN] 冷启动转录轮换静默丢弃活跃会话，无交接** — 约 14 小时长会话触发用量上限后容器空闲，30 分钟后用户再发言时对话被静默丢失。属数据/上下文丢失类问题，**目前无对应 fix PR**。链接：nanocoai/nanoclaw Issue #4540
2. **【中】#4530 [OPEN] Codex: 短暂连接中断导致回复失败，尽管 Codex 会重试恢复** — main `080bd7809` + Codex 0.169.0；连接中断数秒时 Codex 发出 `error` 事件，NanoClaw 侧据此判定失败。**无 fix PR**。链接：nanocoai/nanoclaw Issue #4530
3. **【中】#4529 [OPEN] Codex 登录报 "already connected"，无法替换失效的 OpenAI 登录** — v2026.11.0；当网关内存储的凭据失效（API key 被撤销、ChatGPT 登录过期）时 agent 无法恢复。**无 fix PR**。链接：nanocoai/nanoclaw Issue #4529
4. **【已修复】#4408 / #3941** — add-onecli 退出码（#4434）与 Baileys 安全锁定（#4516）已于今日关闭。

已有 fix PR 的加固项（待合并）：**#4533** WhatsApp 在凭据写入完成前即报链接成功；**#4535** 邮件箱轮询重复读取历史；**#4534** 超时 `ncl` 调用的迟到回复残留在下一批消息中；**#4537** 容器 `CLAUDE.md` 与网关调整后的技能选择不一致。

## 6. 功能请求与路线图信号

- **迟到的审批应被接受**（#4538）：把审批超时从"硬拒绝"改为可继续执行，可能与 #4533/#4534 一类"异步时序正确性"修复同期进入队列，但属行为变更，需设计讨论。
- **新增 provider**：`/add-pi`（#4129，10-19 起待合并）、`/add-antigravity`（#4442，Google Antigravity CLI + Gemini，按组切换）、llmman 本地模型 provider + 工具（#4210）。三条均带 `delivery/skill` 与 `PR: Skill` 标签，是下一版本最可能落地的能力扩展。
- **rootless Docker 支持**（#3174）：影响自托管部署门槛，存续近 4 个月未合，建议优先裁决。

## 7. 用户反馈摘要

- **痛点：长会话不可靠**。14 小时工作会话 + 多次自动压缩 + 大量截图后，上下文在冷启动轮换中无提示丢失（#4540）——高频重度用户的核心不满。
- **痛点：移动端审批节奏不匹配**。审批者常离开手机数小时，3 分钟超时使其无法在场决策（#4538）。
- **痛点：provider 故障恢复弱**。Codex 的瞬时断连与凭据过期都会导致会话失败且无自动恢复路径（#4530、#4529）。
- **痛点：部署环境覆盖不足**。刻意使用 rootless Docker 的用户此前问题"未被暴露"，说明测试矩阵偏向特权 Docker（#3174）。
- **满意度信号**：用户愿意深入定位根因（42k+ 长 DM 中定位轮询问题、逐行比对 `setup.ts` 在 v2026.10.0 与 main 的行号偏移），并主动提交带模板的修复 PR，社区参与质量较高；安全类 Issue 用户明确要求"根因修复而非反复回钉"，维护方当日即回应，互动正向。

## 8. 待处理积压

- **PR #3174**（rootless Docker，2026-08-01 创建）— 存续近 4 个月，未被合并或关闭，涉及两处独立失败。链接：nanocoai/nanoclaw PR #3174
- **PR #2824**（移除陈旧 Global Memory 提示，2026-06-20 创建）— 今日已关闭，积压 5 个月，属清理类。链接：nanocoai/nanoclaw PR #2824
- **PR #4129**（/add-pi，2026-10-19 创建）、**PR #4210**（llmman，2026-10-23 创建）— provider 类特性 PR 长期待合并，建议统一评审标准以免同类 PR 各自堆积。链接：nanocoai/nanoclaw PR #4129 / PR #4210
- **Issue #3941**（2026-09-26 创建，今日关闭）— 安全锁自 9 月起悬置近两月，暴露安全类 Issue 的响应时效可改进。链接：nanocoai/nanoclaw Issue #3941
- **汇总**：19 条待合并 PR 中至少 4 条存续超过 3 周，建议维护者设定评审 SLA 或分批裁决，避免贡献者流失。

---
*说明：数据源未提供 PR 评论数字段、releases 为空、部分 Issue 摘要被截断；本报告仅依据所给材料，未推断未列出的指标或版本。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-11-22

## 1. 今日速览

今日 NullClaw 活跃度较低：过去 24 小时无 Issues 更新，无新版本发布，仅 2 条 PR 有动态（1 条待合并、1 条已关闭）。唯一实质性进展是文档类 PR #1052 被关闭，属边际贡献；长期挂起的 provider 接入 PR #1092 做了上游品牌迁移（UberLLM → MartLLM）并刷新了今日更新。整体判断：项目处于低活动状态，维护重心未见明显推进，需关注积压 PR 的合并节奏。

## 2. 版本发布

无新版本发布，本节省略。

## 3. 项目进展

- **PR #1052 [CLOSED] docs: add optional Parallel Search MCP example**（作者 georgeatparallel，创建 2026-10-09，更新 2026-11-22）
  该 PR 为 NullClaw 原生 HTTP transport 增加了一个可选的 Parallel Search MCP 示例，用户可将 server 条目合并进现有配置、重启后使用 `mcp_parallel_web_search` 与 `mcp_parallel_web_fetch`，且无需 Parallel API key 或本地依赖。
  链接: nullclaw/nullclaw PR #1052
  说明：数据未说明该 PR 是合并还是直接关闭，无法确认是否已进入主分支；从内容看属文档/示例类增量，对项目功能面推进有限。

今日无功能性 PR 合并，项目整体功能向前推进幅度很小。

## 4. 社区热点

今日无 Issues，两条 PR 的评论数与点赞数数据均缺失（评论为 undefined，👍 均为 0），无显著讨论热度。相对最受关注的是：

- **PR #1092 [OPEN] feat(providers): add MartLLM as an OpenAI-compatible gateway**（作者 al-global-tech）
  链接: nullclaw/nullclaw PR #1092
  该 PR 自 2026-11-10 创建、今日更新，已挂起约 12 天。其更新说明服务已由 UberLLM 更名为 MartLLM（站点 https://martllm.com，API base 为 https://api.martllm.com/v1，旧 uberllm.dev 地址仍可用）。
  背后诉求：第三方 OpenAI 兼容网关希望以 provider 形式接入 NullClaw，扩展模型接入渠道；但上游品牌更名带来的 URL/命名调整可能延长 review 周期，维护者需确认 PR 中命名与端点是否已同步更新。

## 5. Bug 与稳定性

今日无 Bug、崩溃或回归问题报告，无相关数据。

## 6. 功能请求与路线图信号

今日无新增功能请求 Issue。可从现有 PR 观察到的路线图信号：

- **OpenAI 兼容 provider 扩展**：PR #1092 表明社区有意通过兼容网关（MartLLM）接入更多模型服务。该 PR 为 OPEN 状态且仍在更新，具备被纳入后续版本的可能性，但需先解决命名/端点一致性及 review 积压问题。
- **MCP 生态示例**：PR #1052 显示 MCP（HTTP transport）示例是社区关注方向；该 PR 已关闭，是否以其他形式落地需维护者确认，暂不宜视为已纳入路线图。

## 7. 用户反馈摘要

今日无 Issues 评论数据，PR 评论数亦缺失，无法提炼真实用户痛点、使用场景或满意度反馈。仅能从 PR #1092 描述推断：贡献者关注第三方 LLM 网关的 OpenAI 兼容接入及服务品牌迁移对配置的影响。

## 8. 待处理积压

- **PR #1092 [OPEN]** — 创建于 2026-11-10，已挂起约 12 天，今日仅有上游更名更新，尚未见合并动作。建议维护者尽快给出 review 意见或明确接入规范（命名、端点、provider 注册方式）。
  链接: nullclaw/nullclaw PR #1092
- **PR #1052 [CLOSED]** — 自 2026-10-09 创建至 2026-11-22 关闭，历时约 6 周。建议维护者在关闭说明中明确原因（重复、范围不符或将以其他方式合入），避免贡献者重复投入。
  链接: nullclaw/nullclaw PR #1052

---

**数据完整性说明**：本次数据中 PR 评论数为 undefined、点赞均为 0，Issues 与 Releases 均为空，部分结论（如 PR #1052 的关闭原因、#1092 的合并前景）受限于数据无法进一步确认。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-11-22

## 1. 今日速览
过去 24 小时内，IronClaw 的活动量较低：只有 1 个 Issue 有更新（新开或活跃 1 条，已关闭 0 条），PR 更新 0 条，版本发布 0 个。唯一动态是一条 QA Bug（#8172）继续获得跟进，该问题针对慢速本地 LLM 场景下的模型调用空闲看门狗超时配置，有 1 条评论。整体来看，今日没有代码合并或发布的推进，项目处于以问题跟踪为主的低活跃维护状态。

## 2. 版本发布
今日无新版本发布。

## 3. 项目进展
今日没有合并或关闭的 PR，因此没有可记录的功能推进或修复落地。项目代码层面在最近 24 小时内没有前进。

## 4. 社区热点
今日讨论最活跃的问题是 **#8172 [qa-bug] Make PRIMARY_MODEL_CALL_IDLE_TIMEOUT configurable for slow local LLMs**（1 条评论）。
链接：nearai/ironclaw Issue #8172

该问题由 n4s3r 提出，涉及 Agent loop → 模型调用空闲看门狗（HostManagedLoopModelPort / LLM provider timeout）。核心诉求是：当用户接入响应较慢的本地 LLM 时，现有的固定空闲超时可能导致模型调用被误判为停滞；用户希望 `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` 可以配置。这反映出用户在使用自托管或本地模型部署时，对超时策略有可调性的实际需求。

## 5. Bug 与稳定性
- **[OPEN] #8172 [qa-bug]：为慢速本地 LLM 提供可配置的 PRIMARY_MODEL_CALL_IDLE_TIMEOUT**
  环境：hosted-staging (crab shack)；版本或提交：1.4.1；QA 测试日期：2026-11-15；创建于 2026-11-15，更新于 2026-11-22。
  影响面：影响 Agent loop 的模型调用空闲看门狗逻辑，慢速本地 LLM 场景下可能因超时策略触发问题。
  严重程度：中（属于可用性/配置问题，并非崩溃类回归，具体复现细节未在摘要中展开）。
  Fix PR：暂无（今日 PR 更新为 0）。
  链接：nearai/ironclaw Issue #8172

## 6. 功能请求与路线图信号
今日唯一的功能性诉求来自 #8172：将 `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` 变为可配置项，以适配慢速本地 LLM。
链接：nearai/ironclaw Issue #8172
由于今日没有相关 PR，暂无证据表明该需求已进入实现阶段，因此无法判断它是否会被纳入下一版本；它目前属于待评估的功能或配置增强信号。

## 7. 用户反馈摘要
从 #8172 中可以提炼出的真实痛点如下：
- 使用场景：用户在 hosted-staging (crab shack) 环境中，通过 Agent loop 接入慢速本地 LLM（HostManagedLoopModelPort / LLM provider timeout）。
- 痛点：固定的模型调用空闲超时（`PRIMARY_MODEL_CALL_IDLE_TIMEOUT`）对慢速本地模型不够友好，用户希望可以根据自身模型延迟调整该阈值。
- 满意度：摘要未体现明确的满意或不满表达。
数据限制：该 Issue 仅有 1 条评论，且评论内容未提供，因此无法进一步提炼更多用户情绪或反馈。
链接：nearai/ironclaw Issue #8172

## 8. 待处理积压
- **#8172**：创建于 2026-11-15，更新于 2026-11-22，仍为 OPEN，且无关联 PR。该问题已存在约一周，建议维护者评估是否给出可配置方案或明确处理计划。
  链接：nearai/ironclaw Issue #8172

> 说明：今日数据中 PR 与 Release 均为空，除 #8172 外没有其他可识别的长期未响应项，故积压提示仅覆盖该 Issue。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-11-22

## 1. 今日速览

今日项目呈**高强度收尾态势**：9 条 PR 全部合并/关闭，0 条待合并，说明维护者集中完成了一整批 DSH 迁移验收修复（#3144–#3152），工作流处于"批处理关闭"而非"分散评审"状态。Issues 侧仅有 1 条更新（#2779 关闭），无新开或活跃 Issue，社区提问量偏低。无新版本发布，说明上述修复尚未形成对外可用的发行物。综合判断：**内部开发活跃度极高，社区互动活跃度低，发布节奏滞后于代码推进**。

链接：https://github.com/netease-youdao/LobsterAI

## 2. 版本发布

今日无新版本发布。需注意：今日关闭的 9 条 PR 与 #2779 中提到的"内置 runtime 2026.8.1"问题相关，但尚无 release 承载这些修复，用户侧暂无法验证。

## 3. 项目进展

今日核心进展是 **DSH 迁移验收修复系列（`feat/migrate-openclaw-to-dsh`）6/6 全部关闭**，作者均为 fisherdaddy，并明确建议按 PR 1 → PR 6 顺序合并：

| PR | 内容 | 链接 |
|---|---|---|
| #3146 (1/6) | 启动门控、隔离、备份/恢复、打包加固 | [PR #3146](https://github.com/netease-youdao/LobsterAI/pull/3146) |
| #3147 (2/6) | 会话生命周期、goals、上下文压缩、权限 | [PR #3147](https://github.com/netease-youdao/LobsterAI/pull/3147) |
| #3148 (3/6) | 记忆的 project/expert 作用域、CRUD 迁移、梦境日记查看器 | [PR #3148](https://github.com/netease-youdao/LobsterAI/pull/3148) |
| #3149 (4/6) | Skills 运行时环境、邮件 skill、网页搜索沙箱、插件生命周期 | [PR #3149](https://github.com/netease-youdao/LobsterAI/pull/3149) |
| #3150 (5/6) | DSH MCP 同步、OAuth 2.1、SSE 桥、工具过滤、包路径 | [PR #3150](https://github.com/netease-youdao/LobsterAI/pull/3150) |
| #3151 (6/6) | 模型兼容、Office 编辑、定时任务、决策工具、companion | [PR #3151](https://github.com/netease-youdao/LobsterAI/pull/3151) |

另有 3 条独立 PR：
- **#3152** 定时任务工作目录绑定 + 重载时恢复未完成的 DSH 提示（基于 macOS Apple Silicon 真机端到端测试的后续修复）— [PR #3152](https://github.com/netease-youdao/LobsterAI/pull/3152)
- **#3144** 恢复 Plan 模型协议分发、thinking 与 kimi-k3 兼容（含 Anthropic 代理路径修复）— [PR #3144](https://github.com/netease-youdao/LobsterAI/pull/3144)
- **#3145** companion 皮肤"鲸一鸣""醒醒星"悬停动画视觉校准 — [PR #3145](https://github.com/netease-youdao/LobsterAI/pull/3145)

**评估**：一次性关闭 9 条 PR 表明迁移验收阶段基本收束，覆盖面从启动、会话、记忆、技能、MCP 到模型兼容，属于**结构性推进**而非增量修补。但全部为 [CLOSED] 且评论数为 undefined，无法从数据判断是否真正合入主干，建议维护者确认合并状态。

## 4. 社区热点

今日**无高互动条目**。评论数最多的为 Issue #2779（2 条评论），其余 PR 均无可见评论、👍 为 0。

- [Issue #2779](https://github.com/netease-youdao/LobsterAI/issues/2779)：多分身配置下"梦境日记"面板恒为空。作者 probe528-maker，2026-09-29 创建，2026-11-22 更新并关闭，**存续约 8 周**。

**背后诉求**：用户在多 agent 场景（5 个 agent、`agents.ownership = "explicit"`）下依赖记忆可视化能力，而内置 runtime 缺少 `doctor.memory.*` 的 ambient-owner 回退导致功能失效。该 Issue 长期挂起后随 #3148（梦境日记查看器）一并关闭，说明**记忆作用域问题是当前多 agent 用户的核心摩擦点**。

## 5. Bug 与稳定性

按严重程度排列：

1. **[中高] 梦境日记面板恒为空**（#2779，已 CLOSED）
   触发条件：内置 runtime OpenClaw 2026.8.1 (ea80657) + 多 agent 显式 ownership 配置。根因为缺 `doctor.memory.*` 的 ambient-owner 回退，摘要标注"上游已修，待跟进"。
   修复状态：疑似由 [PR #3148](https://github.com/netease-youdao/LobsterAI/pull/3148)（记忆作用域 + 梦境日记查看器）覆盖，但无明确关联声明。

2. **[中] 模型兼容性回归**（#3144）
   OpenClaw → DSH 迁移后丢失 Plan 模型的 per-model 协议分发、thinking 与 kimi-k3 兼容，影响 Claude Sonnet 5.5 等模型的代理路径。已有 fix PR：是。

3. **[中] 定时任务工作目录未绑定 / 重载丢失提示**（#3152）
   真机测试暴露，影响定时任务可靠性。已有 fix PR：是。

4. **[低] companion 悬停动画视觉错位**（#3145）
   纯 UI 层问题，已有 fix PR：是。

**结论**：今日 Bug 均有对应修复 PR，无未处理的高危崩溃类问题；主要风险集中在**迁移引入的兼容性回归**。

## 6. 功能请求与路线图信号

今日无用户新提功能请求。从已关闭 PR 可推断下一版本的潜在方向：

- **记忆体系产品化**：#3148 的 project/expert 作用域隔离 + 梦境日记查看器，直接回应多 agent 用户的记忆可见性需求，**最可能进入下一版本**。
- **MCP 生态强化**：#3150 的 OAuth 2.1、SSE 桥、差分同步，指向更完整的 MCP 接入能力。
- **模型层扩展**：#3144 的 per-model 协议分发与 kimi-k3 兼容，显示多模型供应商支持在持续加码。
- **Desktop Companion 定制化**：#3145 的皮肤动画校准，暗示桌面伴侣是差异化功能线。

以上均为**修复型 PR 衍生的能力信号**，非用户显式需求，路线图纳入判断需谨慎。

## 7. 用户反馈摘要

可用素材仅 Issue #2779：

- **使用场景**：macOS 27.0 arm64，LobsterAI 2026.9.23，5 个 agent 并行、显式 ownership 配置、指定 `systemAgent.agentId = "main"` —— 属于**进阶多分身重度用户**。
- **痛点**：在复杂多 agent 拓扑下，记忆/梦境功能的默认行为（ambient-owner 回退）缺失，导致面板空置，用户难以判断是配置问题还是缺陷。
- **不满意点**：Issue 从 9 月 29 日拖到 11 月 22 日才关闭，**响应周期偏长**；关闭时摘要仅说明"上游已修，待跟进"，未说明用户侧是否需要升级 runtime。
- 今日无正面反馈素材。

## 8. 待处理积压

- **#2779 关闭质量待确认**：关闭理由为"上游已修，待跟进"，但内置 runtime 版本（2026.8.1）是否已升级、用户是否需手动操作均未在数据中体现。建议维护者补充闭环说明并关联对应 release。
- **PR 合并状态不明**：#3144–#3152 共 9 条均为 [CLOSED]，评论数为 undefined，无法确认是"已合并"还是"关闭未合并"。若为后者，DSH 迁移的验收成果存在**丢失风险**，建议优先核实，尤其是被标注为需按序合并的 1/6–6/6 系列。
- **发布空窗**：今日 0 release，而当日关闭的修复覆盖启动、记忆、MCP、模型兼容等关键路径，建议尽快切版以便用户验证 #2779 是否真正解决。

---

*说明：本日报严格基于所提供数据生成，评论内容、合并状态、release 计划等未在数据中出现的信息均未作推断。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报 · 2026-11-22

## 1. 今日速览
今日项目活跃度处于低位：过去 24 小时无新增或活跃 Issues，无新版本发布，PR 侧仅有一项关闭记录。唯一动态为 PR #297 的关闭，内容为团队协作流程的文档补充，不涉及代码变更。整体来看，项目进入低噪声维护期，代码主干未见推进信号。

## 2. 版本发布
无新版本发布（过去 24 小时 Releases 数量为 0）。

## 3. 项目进展
- **[CLOSED] PR #297 — docs(teams): add optional public evidence handoff guide**（作者 georgeatparallel，创建 2026-11-17，更新 2026-11-22；👍 0）
  链接: TinyAGI/tinyagi PR #297
  该 PR 为文档类变更，说明研究者如何检索公开 Python 文档，并经由 TinyAGI 既有的 team 机制将原始 URL 与简短摘录转交给 writer。属于对团队协作使用方式的可选流程说明，未涉及功能实现或缺陷修复。
  评估：项目向前推进程度有限，仅完善了 team 工作流的文档覆盖，对代码能力与稳定性无直接影响。数据中未显示合并时间与合并状态细节，仅标注为 CLOSED。

## 4. 社区热点
今日无 Issues、无评论数据（评论字段为 undefined），PR 点赞数为 0。不存在讨论活跃或反应集中的条目，社区热度处于沉寂状态，无可分析的诉求信号。

## 5. Bug 与稳定性
今日未报告任何 Bug、崩溃或回归问题（Issues 更新 0 条）。无对应 fix PR。

## 6. 功能请求与路线图信号
今日无新增功能请求（Issues 新增 0）。唯一相关的信号来自 PR #297：其描述的“公开证据转交（public evidence handoff）”表明使用者已在实际场景中通过 TinyAGI 的 team 机制串联研究检索与写作环节。该方向目前以可选文档形式落地，是否进一步产品化（如内建证据引用传递）在现有数据中无支持证据，暂不应据此推断纳入下一版本。

## 7. 用户反馈摘要
今日无 Issues 评论可供提炼，无法确认用户痛点、满意或不满意之处。PR #297 的摘要间接反映了一个使用场景：研究者查证公开文档并把原始链接与摘录传递给写作者；但缺少评论与落地反馈，不作进一步推断。

## 8. 待处理积压
当前数据仅覆盖过去 24 小时窗口，未提供长期未响应的 Issue/PR 清单，无法识别积压项。建议维护者补充超期未处理条目的统计口径（如按创建时间排序的开放项），以便本栏目持续输出。

---
**健康度小结**：今日无故障、无破坏性变更、无未处理 PR 堆积；但同样缺少合并推进与社区互动，属于低活跃维护日。下一步关注点应为后续 Issues/PR 回流情况与是否有新版本计划。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-11-22

## 1. 今日速览
今日项目活跃度处于低位：24 小时内仅有 1 条 Issue 更新（新开 #1326），PR 更新为 0，新版本发布为 0。唯一新增问题指向 MCP 客户端协议版本硬编码，属于影响远程 MCP 服务器接入的兼容性缺陷。无代码合并活动，项目今日无功能或修复推进。整体看，社区信号量少但问题指向明确，需关注其修复优先级。

## 2. 版本发布
无新版本发布。

## 3. 项目进展
今日无合并或关闭的 PR，项目代码层面无向前推进。

## 4. 社区热点
今日唯一活跃条目为 Issue #1326（0 评论、0 👍），讨论度有限，但问题本身价值较高：
- [#1326](https://github.com/moltis-org/moltis/issues/1326) MCP 客户端仅支持协议 `2024-11-05`，而要求 `2025-06-18+` 的服务器（如 Basecamp）会拒绝 `initialize` 握手。
背后诉求：用户希望 Moltis 的 MCP 客户端支持协商更新的协议版本，以对接已弃用旧版本的主流远程 MCP 服务。

## 5. Bug 与稳定性
- 高：**MCP 客户端协议版本硬编码导致握手失败**（[#1326](https://github.com/moltis-org/moltis/issues/1326)）。`initialize` 请求体与 `MCP-Protocol-Version` 头部均硬编码 `2024-11-05`，已升级到 `2025-06-18+` 的远程服务器会直接拒绝连接，导致此类服务器在 Moltis 中完全不可用。目前无 fix PR。

## 6. 功能请求与路线图信号
暂无独立功能请求类 Issue。结合 #1326，可推断下一阶段的潜在改进是 MCP 协议版本协商机制（客户端声明支持的版本范围并处理服务端选择/拒绝），但当前无对应 PR，暂不能判断是否纳入下一版本。

## 7. 用户反馈摘要
- 痛点：Moltis 无法连接已弃用 `2024-11-05` 的远程 MCP 服务器（实例为 Basecamp），影响真实外部服务集成场景。
- 场景：用户通过 Moltis 接入第三方托管 MCP 服务，而非本地/自建服务。
- 满意度：无正/负面评价类评论可供提炼。

## 8. 待处理积压
今日数据中无长期未响应的 Issue/PR 记录，但 #1326 为当日新开、零评论、零修复 PR，建议维护者尽快评估协议版本协商的兼容性修复。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-11-22

> 数据来源：CoPaw (github.com/agentscope-ai/CoPaw) GitHub 活动
> 说明：Issues 与 PR 链接在原始数据中标注为 `agentscope-ai/QwenPaw`，下文按原样保留；项目标识请以仓库实际状态为准。

## 1. 今日速览

项目今日处于**高活跃但零产出闭环**状态：24 小时内 5 条 Issue 更新、9 条 PR 更新，但**无任何 PR 合并/关闭，也无新版本发布**。活跃度主要体现在讨论与修复提交上——多条 Issue 在报告后当天即获得对应修复 PR，说明响应链路通畅。但 9 条待合并 PR 中积压了 3 条 size/XXL 级大型 PR（最早自 11-05 起），评审吞吐是当前主要瓶颈。当日无功能类新 Issue，问题集中在 **Web 控制台前端可用性**与**本地模型引擎**两条主线。

## 2. 版本发布

今日无新版本发布。（最新用户报告版本为 `2.3.0.post1`，commit `ee58cb1a`）

## 3. 项目进展

**今日无 PR 被合并或关闭，项目代码主线未见推进。** 值得关注的是当日新提交、且与 Issue 一一对应的 4 条小体量修复 PR：

| PR | 规模 | 对应 Issue | 内容 |
|---|---|---|---|
| [#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854) | size/S | #8844 | 使会话历史区域可聚焦，支持方向键/翻页键滚动 |
| [#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853) | size/XS | #8848 | 上下文压缩失败时建议重试 `/compact` 而非 `/clear` |
| [#8855](https://github.com/agentscope-ai/QwenPaw/pull/8855) | size/XS | — | 修复 Plugin SDK 测试在 Windows 下的计时与编码问题 |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | size/XXL, Under Review | #8714 | 控制台运行时 base-path 部署支持（创建于 11-13，今日更新） |

其中 #8853 为 first-time-contributor 提交，社区贡献通道健康。

## 4. 社区热点

- **[#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674) 微信功能不完善**（3 条评论，今日评论数最高）：报告者列出 4 项问题——无输入中提示、无法拉入群聊、UI 与微信渠道不同步并报 `503 {"detail":"Channel Console not found"}`、桌面版微信中不出现机器人。该 Issue 创建于 2026-03-31，**持续近 8 个月仍在更新**，是当日唯一涉及消息渠道生态的讨论，反映跨渠道（微信）集成是长期痛点。

- **[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) iOS WebKit 长会话卡死**（2 条评论）：同日创建并获回应，讨论热度集中在性能类问题上。

**诉求分析**：今日讨论几乎全部围绕"前端体验层"——滚动、聚焦、溢出、渲染卡顿、提示缺失。用户对 CoPaw 的期待已从"能用"转向"日常可用"，Web 控制台成为体验短板。

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否已有 fix PR |
|---|---|---|---|
| **高** | [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) | iOS Safari/WebKit 打开或续接长会话时 Console 卡死，定位为 `UserMessageAnchors` 布局抖动与 `content-visibility:auto` 在 column-reverse 列表中的组合问题；涉及 `@agentscope-ai/chat ^1.2.0-beta` | 未见 |
| **高** | [#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674) | 微信渠道 `503 Channel Console not found`、UI 与渠道状态不同步 | 未见 |
| **中** | [#8856](https://github.com/agentscope-ai/QwenPaw/issues/8856) | 助手回复中表格/长行超宽内容被直接裁切，无横向滚动（`AssistantMarkdown-*.js` 中无 `overflow-x-auto`） | 未见 |
| **中** | [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844) | 会话列表不可键盘聚焦，方向键/PageUp/PageDown/Home/End 均无效 | ✅ [#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854) |

**观察**：4 条 Bug 中 3 条为 Web 控制台渲染/交互缺陷，且均集中在**滚动容器与消息列表**这一子系统；当前仅有 1 条获得修复 PR，说明前端问题发现速度已超过修复速度。

## 6. 功能请求与路线图信号

- **本地模型引擎可控化**（最明确的路线图信号）：[#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)（llama.cpp GPU 控制 + 运行时自动更新）、[#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647)（托管 MLX 引擎 + 自动更新）、[#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648)（控制台本地引擎/GPU/自动更新 UI）三条 PR **构成一个完整特性，且明确声明了合并顺序**（#8649 → #8647 → #8648）。若评审通过，将是下一版本的核心能力，指向"本地推理 + 免配置升级"的产品方向。

- **运行时 base-path 部署**：[#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) 通过 `QWENPAW_BASE_PATH` 支持非根路径部署，属面向自托管/企业内网场景的需求，已进入 Under Review。

- **上下文压缩的可用性改进**：[#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853) 虽为 small fix，但反映出用户对上下文管理操作的谨慎——误清上下文的代价过高。

暂无今日新提出的显式功能请求型 Issue。

## 7. 用户反馈摘要

- **"不知道它是否在干活"**（#2674）——缺少运行时反馈/打字提示，用户对 Agent 状态不可见产生焦虑，这是 Agent 类产品的通用体验痛点。
- **渠道能力预期落差**（#2674）——用户已将其添加为好友，却无法在群聊中找到机器人，且桌面版微信中机器人不出现；用户自述"不知以上是我设置不对还是 copaw 本身问题"，说明**渠道配置的引导文档或错误提示不足**。
- **误导性错误文案**（#8848）——压缩失败时提示 `/clear`，用户指出这会清除上下文导致信息丢失，建议改为重试 `/compact`；反馈者准确给出代码位置（`command_handler.py` 约 476-479 行），属深度用户。
- **键盘无障碍缺失**（#8844）——用户期望用键盘浏览对话，这是无障碍与效率用户的共同诉求。
- **移动端长会话不可用**（#8852）——iOS 用户的长对话场景直接卡死，影响高频日常使用。

**整体满意度判断**：反馈以"细节不完善"为主，而非架构性否定，说明产品核心能力获认可，体验打磨是提分关键。

## 8. 待处理积压

需维护者优先关注：

1. **[#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649) / [#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647) / [#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648)**——三条关联 PR 自 **2026-11-09** 起停留 13 天，合计规模为 L + XXL + XL，且存在强制合并顺序。长时间搁置会使分支持续产生冲突、增加集成成本，建议尽快给出评审结论或明确排期。
2. **[#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588)**（size/XXL，Under Review，创建于 **11-05**，已积压 17 天）——OpenViking 记忆插件后续清理、兼容性与关闭流程修复，属 #7613 的延续，是当日**最久未闭环的大体量 PR**。
3. **[#8617](https://github.com/agentscope-ai/QwenPaw/pull/8617)**（size/M，创建于 **11-07**，积压 15 天）——模型 provider 被禁用后回退处理，关联 #8579，规模不大但涉及核心模型创建路径，建议优先排入评审。
4. **[#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674)**——微信渠道问题存续约 8 个月，仍是活跃讨论，缺维护者结论性回复。
5. **[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)** / **[#8856](https://github.com/agentscope-ai/QwenPaw/issues/8856)**——当日新报的两条高/中严重度前端 Bug 尚无对应修复，建议纳入同一滚动/渲染子系统修复批次。

**健康度小结**：问题发现与初步响应环节表现良好（当日 Issue 当日有修复 PR），但**合并吞吐不足**——9 条 PR 零合并、多条大体量 PR 积压超两周，是当前项目节奏的主要风险点。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-11-22

## 1. 今日速览

ZeroClaw 今日无新版本发布，活动主要集中在 PR 队列：过去 24 小时 50 条 PR 更新中仅 3 条合并/关闭、47 条待合并，积压显著。Issues 侧 10 条更新中 4 条关闭、6 条新开/活跃，关闭项多为 Windows 平台修复与 WhatsApp 投票功能收尾。新报告的问题高度集中在两块：自主技能创建与频道路由工具注册（daemon/运行时），以及 Web 仪表盘（语音设置、语音自动发送、显示瑕疵）。整体看，贡献者活跃但合并吞吐偏低，维护者评审容量是当前项目健康度的主要约束。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

- **[#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987)（CLOSED）**：WhatsApp Web 投票票数将以 `[choice]<option>` 形式呈现给 agent，与 Signal 渠道对齐。此前 #10983 / #10984 已为 WhatsApp Web 渠道加入原生投票能力，本次补齐入站解析这一环。
- **[#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)（CLOSED，P1）**：`browser` 工具调用 `agent-browser` 子进程时缺乏挂钟超时与 `kill_on_drop`，在可用性探测与 `run_command` 两处均无界等待；与 #8560 同类缺陷。
- **[#12400](https://github.com/zeroclaw-labs/zeroclaw/issues/12400)（CLOSED，release:v0.9.1）**：修复/限定 `dashboard_core::tests::a_chat_whose_reply_end_cannot_be_written_ends` 在 Windows 上的失败，该测试由 #12244 引入。
- **[#12484](https://github.com/zeroclaw-labs/zeroclaw/issues/12484)（CLOSED）**：Windows 下插件目录已被删除时 `remove()` 因 `rename_new` 丢失 `ErrorKind::NotFound` 而失败，属于 `Scheduled Platform Tests` 的持续失败项。

需要说明：数据未列出今日具体合并的 3 条 PR 内容，上述为已关闭 Issue 所对应的推进项。另有一批由 CastelloBrancoTecnologia 主导的 XL 级 PR 今日仍在更新（见第 8 节），涵盖原生 Rust SSH 任务代理、浏览器凭据/TOTP 独立授权、XMPP 渠道、Http Authorization: Token 凭据等，是中长期能力建设的主线。

## 4. 社区热点

数据中未提供各条目的评论数与点赞数明细（PR 均为 `undefined`，Issues 除个别外均为 0），因此无法按讨论热度排序。可识别的互动信号如下：

- **[#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987)**（5 条评论，今日关闭）：跨渠道行为一致性是真实诉求——用户期望 WhatsApp 与 Signal 在 agent 感知层面表现对等。
- **[#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)**（4 条评论，P1，今日关闭）：子进程无界等待影响整个工作流（S1 级），是稳定性关注焦点。

## 5. Bug 与稳定性

按严重程度排列（今日新报告与活跃项）：

- **S1 / 工作流阻断** — [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)：browser 工具子进程无限等待；今日已关闭（fix 对应 PR 未在数据中标明）。
- **S2 / 行为降级** — [#12655](https://github.com/zeroclaw-labs/zeroclaw/issues/12655)：`[skills.skill_creation] enabled = true` 完全无效。三处不一致：提取器期待 OpenAI 函数包装格式、历史中存储的是扁平 tool call、输出指向 `data/skills`。无 fix PR。
- **S2 / 行为降级** — [#12633](https://github.com/zeroclaw-labs/zeroclaw/issues/12633)：未刷新的语音设置页会以陈旧记录整体覆盖（`{ ...prefs, ...patch }`），把设备切回浏览器服务识别。无 fix PR。
- **S2 / 行为降级** — [#12632](https://github.com/zeroclaw-labs/zeroclaw/issues/12632)：浏览器自行结束识别后 `capture.onend` 未清除静默计时器，导致听写结束后键入的文本被自动发送。无 fix PR。
- **未定级** — [#12649](https://github.com/zeroclaw-labs/zeroclaw/issues/12649)：频道不存在的频道路由工具（如 `git_forge`）仍被注册并进入审批门控（v0.9.0 / 6c78ba5 / Linux arm64 / Telegram）。无 fix PR。
- **S3 / 轻微** — [#12638](https://github.com/zeroclaw-labs/zeroclaw/issues/12638)：实际支出为 $0 的 agent 显示 “<$0.01 this month”。无 fix PR。
- **S3 / 轻微** — [#12630](https://github.com/zeroclaw-labs/zeroclaw/issues/12630)：Overview 的 Channels 卡片被三列等高的布局拉伸，只渲染约 4 个频道、其余留白。无 fix PR。

## 6. 功能请求与路线图信号

- **WhatsApp 投票入站呈现**（[#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987)）：已完成，与 Signal 对齐，后续可作为其他渠道的范式。
- **浏览器凭据分级授权**（[#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596)）：用户名/密码与 TOTP 授权互相独立、按精确 HTTPS origin 授予或撤销、默认禁用。进入下一版本的可能性较高，属安全模型细化，已有 WebUI 支持。
- **HTTP 凭据族扩展**（[#12490](https://github.com/zeroclaw-labs/zeroclaw/pull/12490)、[#12408](https://github.com/zeroclaw-labs/zeroclaw/pull/12408)、[#12402](https://github.com/zeroclaw-labs/zeroclaw/pull/12402)）：Authorization: Token、Basic/Bearer/X-API-Key、插件 TLS 凭据，均为“默认拒绝 + 显式授予 + 只写 UI”。这条线已形成体系，但均为 XL 待审。
- **XMPP 渠道（含可选 OMEMO）**（[#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847)）：跨渠道覆盖扩张，风险等级 high，尚在评审。

## 7. 用户反馈摘要

- **自主性可观测性不足**：`skill_creation` 静默失效（[#12655](https://github.com/zeroclaw-labs/zeroclaw/issues/12655)）——用户开了开关却得不到任何技能产出，属于配置无声失效，信任成本高。
- **UI 陈旧状态回写**：语音设置（[#12633](https://github.com/zeroclaw-labs/zeroclaw/issues/12633)）与语音自动发送（[#12632](https://github.com/zeroclaw-labs/zeroclaw/issues/12632)）都涉及“页面/浏览器事件不同步”，后者可能误发用户未想发送的文本，属于隐私敏感场景。
- **跨渠道体验不齐**：用户直接以 Signal 为参照要求 WhatsApp 对齐（[#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987)）。
- **免费本地模型的成本展示**：全部调用走免费本地模型的 agent 被标记 “<$0.01”（[#12638](https://github.com/zeroclaw-labs/zeroclaw/issues/12638)），说明本地部署用户群体真实存在，但成本口径未覆盖。

## 8. 待处理积压

- **[#11874](https://github.com/zeroclaw-labs/zeroclaw/pull/11874)**（2026-10-19 创建，长任务进度上报）、**[#11868](https://github.com/zeroclaw-labs/zeroclaw/pull/11868)**（重复工具调用拦截，依赖 #12265）、**[#11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869)**、**[#11859](https://github.com/zeroclaw-labs/zeroclaw/pull/11859)**、**[#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847)**（XMPP）、**[#11911](https://github.com/zeroclaw-labs/zeroclaw/pull/11911)**：均为 10 月中下旬开出的 XL/high-risk PR，已过一个月仍在反复合入上游、解冲突，评审与合并是主要阻塞。
- **[#12265](https://github.com/zeroclaw-labs/zeroclaw/pull/12265)**（risk:low，size:XS）：仅记录 #11868 的 Core Team 例外批准，却已挂起 16 天，且 #11868 正阻塞在其后——低风险小改动建议优先放行以解锁链路。
- **[#12418](https://github.com/zeroclaw-labs/zeroclaw/pull/12418)**、**[#12438](https://github.com/zeroclaw-labs/zeroclaw/pull/12438)**（原生 Rust task broker）：SSH 传输线两版并行推进，需关注收敛方向。
- **[#12656](https://github.com/zeroclaw-labs/zeroclaw/pull/12656)**（XS，依赖安全）：将 `url` 升至 2.5.9 处理 RUSTSEC-2026-0592，安全类 XS 改动建议尽快合并。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*