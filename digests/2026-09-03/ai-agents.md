# OpenClaw 生态日报 2026-09-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-03 10:05 UTC

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

### OpenClaw 项目动态日报 — 2026-09-03

#### 1. 今日速览

今日 OpenClaw 仓库活跃度极高：过去 24 小时内 Issues 与 PR 各新增/更新 500 条，其中新开或活跃 Issue 322 条、待合并 PR 330 条，社区提交与维护者评审均处于高频状态。热点集中在多代理会话状态管理、消息丢失/幻觉输出、以及资源泄漏三类问题上，且多数 P1 级 Bug 已进入维护者评审阶段。今日无新版本发布，但存在多个指向 `2026.8.x` 系列的回归报告，版本稳定性是当前主要关注点。

#### 2. 版本发布

过去 24 小时内无新版本发布。

#### 3. 项目进展

今日无 PR 被合并的记录，但存在多条标记为 "👀 ready for maintainer look" 的待合并 PR，已完成实现并等待维护者最终评审，值得关注：

- **修复恢复子代理任务状态**（[#136780](https://github.com/openclaw/openclaw/pull/136780)）：重放终止的 detached-task 投影，补充了中断恢复所有权栅栏的回归测试，直接解决会话恢复后子任务悬挂问题。
- **插件热管理能力**（[#135599](https://github.com/openclaw/openclaw/pull/135599)，XL 规模）：实现无需重启 Gateway 即可管理与重载插件，涉及几乎所有核心扩展与多数官方渠道，是提升运维体验的重要基础设施变更。
- **适用于瘦音频客户端的原生实时 talk 支持**（[#134003](https://github.com/openclaw/openclaw/pull/134003)，XL 规模）：为 Web UI 等薄客户端增加原生实时语音能力，跨 openai/codex/copilot 扩展。
- **macOS 本地节点认证隔离**（[#137048](https://github.com/openclaw/openclaw/pull/137048)）：防止本地节点跨 Gateway 复用角色级设备令牌，属安全边界修复。
- **ACP 中止原因透传**（[#132378](https://github.com/openclaw/openclaw/pull/132378)）：让 IDE 用户能看到工具校验失败后的中止原因，而非仅显示 cancelled。

另有 170 条 PR 被合并/关闭，但因未提供具体列表，上述为今日活跃且有明确状态的变更。

#### 4. 社区热点

讨论热度最高的 Issues 集中在以下几条，均获得 7-13 条评论：

- **[#121953](https://github.com/openclaw/openclaw/issues/121953) Cron 任务在 DeepSeek 上停摆（13 评论）**：`[cron:<jobId> <name>]` 前缀导致 DeepSeek API 边缘节点处理延迟数十秒至分钟。反映跨模型兼容性对自动化任务可靠性的影响。
- **[#126360](https://github.com/openclaw/openclaw/issues/126360) 显式多代理所有权下 AgentSelectionRequiredError 刷屏（12 评论）**：logbook 插件、Control UI 全局 RPC 与系统代理轮次均缺少 agentId 目标，显式所有权模式在真实多代理部署中引发系统性报错。
- **[#132762](https://github.com/openclaw/openclaw/issues/132762) overflow-retry 成功后未投递最终结果（12 评论）**：多阶段文档工作中重试以 toolResult 作为最终消息"成功"结束，但用户未收到结果——数据面可靠性问题。
- **[#49876](https://github.com/openclaw/openclaw/issues/49876) Cron 会话在工具失败时输出幻觉结果（11 评论，👍 1）**：Stale 老 issue（2026-03 提出），今日仍有讨论，说明长期未解决且用户持续关注。
- **[#97616](https://github.com/openclaw/openclaw/issues/97616) 子进程未回收致僵尸进程累积（10 评论，👍 1）**：hook/tool 子进程泄漏导致运行期性能退化，被标记为回归。

核心诉求可归纳为：**自动化（Cron）场景下的模型兼容性与失败语义**、**多代理所有权的完整实现**、**消息/会话状态不丢失**。

#### 5. Bug 与稳定性

按严重程度排列（P0 > P1 > P2）：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| P0 | [#123327](https://github.com/openclaw/openclaw/issues/123327) | 共享状态 WAL checkpoint 覆写 SQLite 索引页，ext4 上两次数据损坏（Raspberry Pi 5） | 无，需维护者关注 |
| P0 | [#107330](https://github.com/openclaw/openclaw/issues/107330) | 2026.7.1 更新崩溃（已关闭，属历史版本） | 已关闭 |
| P1 | [#135704](https://github.com/openclaw/openclaw/issues/135704) | iMessage 反射绕过 echo 缓存被当作新消息（消息丢失/重复） | 无，fix-shape-clear 待队列 |
| P1 | [#135970](https://github.com/openclaw/openclaw/issues/135970) | codex 插件缺 node_modules，Managed app-server 无法启动 | 无，有 source-repro |
| P1 | [#136183](https://github.com/openclaw/openclaw/issues/136183) | ssh 命令执行挂起（2026.8.1 回归，8.2 仍存在） | 无 |
| P1 | [#136113](https://github.com/openclaw/openclaw/issues/136113) | claude-cli 后端在 stdout >50KB 时返回空响应（11/25 轮次丢失，已关闭） | 已关闭 |
| P1 | [#49876](https://github.com/openclaw/openclaw/issues/49876) | Cron 会话幻觉输出（安全 + 消息丢失） | 无，需安全评审 |
| P1 | [#123799](https://github.com/openclaw/openclaw/issues/123799) | Codex compact 404 影响生产部署，需求升级/回退指引 | 无，需产品决策 |
| P1 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏致僵尸累积（回归） | 无 |
| P2 | [#124911](https://github.com/openclaw/openclaw/issues/124911) | Compaction reserveTokensFloor 忽略模型上下文窗口 | 无 |

与这些 Bug 对应的修复 PR 有：[#137105](https://github.com/openclaw/openclaw/pull/137105)（memory_search 在 Linux EMFILE 后 stale）、[#137147](https://github.com/openclaw/openclaw/pull/137147)（node.invoke 截止时间受时钟漂移影响）、[#137224](https://github.com/openclaw/openclaw/pull/137224)（看板控件过期状态显示错误）、[#136410](https://github.com/openclaw/openclaw/pull/136410)（/status 区分历史运行时与当前 pin）、[#137230](https://github.com/openclaw/openclaw/pull/137230)（飞书 webhook 拒绝过量并发读取）。

#### 6. 功能请求与路线图信号

- **内容型提示注入扫描**（[#79168](https://github.com/openclaw/openclaw/issues/79168)，7 评论）：对工具输出做内容级注入检测，被标记需安全评审，已有结构隔离但缺内容检测——安全路线上的可能方向。
- **Skill Capability Manifests v0**（[#74594](https://github.com/openclaw/openclaw/issues/74594)，7 评论）：RFC 提议让技能能力在执行前可见，关系到 [#125570](https://github.com/openclaw/openclaw/issues/125570)（技能更新覆写 description 致路由失效）暴露的可发现性缺陷。
- **ACP 技能上下文注入**（[#43564](https://github.com/openclaw/openclaw/issues/43564)，7 评论）：让 OpenClaw 技能注入 ACP 会话。此项若能落地，需要与大型 PR [#135599](https://github.com/openclaw/openclaw/pull/135599) 保持兼容。
- **ACP 默认线程绑定预设**（[#79281](https://github.com/openclaw/openclaw/issues/79281)，6 评论）：第三方渠道为支持线程绑定各自重复实现约 870 行代码。属架构级优化信号，短期内纳入下一发版概率较低，但属于高杠杆重构。
- **自托管 STT/TTS 网关路由**（[#45508](https://github.com/openclaw/openclaw/issues/45508)，7 评论，👍 2）：最受关注的功能请求，webchat 的语音能力目前完全依赖浏览器 API。

#### 7. 用户反馈摘要

- **显式多代理模式存在系统性缺陷**：[#126360](https://github.com/openclaw/openclaw/issues/126360) 用户报告在 6 代理显式所有权配置下，日志系统、UI 与系统轮次均无法解析目标代理，报错刷屏——说明该模式离生产可用尚有距离。
- **幻觉输出问题困扰长期用户**：[#49876](https://github.com/openclaw/openclaw/issues/49876) 自 2026-03 提出至今已近半年仍未解决，用户认为在工具失败时应干净失败而非"编造看似合理的输出"。
- **生产部署缺乏升级保障**：[#123799](https://github.com/openclaw/openclaw/issues/123799) 用户明确表示"我们是受影响的生产部署"，需要可操作升级指引而不只是代码修复。
- **质量高反馈**：[#124911](https://github.com/openclaw/openclaw/issues/124911) 由 Scott Hanselman 的 agent 代发，指出现有自适应 compaction helper 只出现在错误消息中而非实际生效——说明即使在知名用户场景中，运维细节问题也会被真实触发。

**满意度信号**：多起"Built from main 上仍可复现"（[#126360](https://github.com/openclaw/openclaw/issues/126360)、[#136183](https://github.com/openclaw/openclaw/issues/136183)）表明修复验证充分；但同时出现多条标注 "regression" 的 2026.7.1-8.2 问题（[#136113](https://github.com/openclaw/openclaw/issues/136113)、[#136183](https://github.com/openclaw/openclaw/issues/136183)、[#107727](https://github.com/openclaw/openclaw/issues/107727)），提示近两个版本引入的回归较多。

#### 8. 待处理积压

- **[#49876](https://github.com/openclaw/openclaw/issues/49876)（2026-03-18 开启，P1，安全 + 消息丢失）**：Cron 会话幻觉输出问题已存在近 6 个月，期间持续有人参与讨论，至今未有 fix PR 或闭环。鉴于涉及安全（用户可能收到伪造输出），建议维护者优先处理。
- **[#47597](https://github.com/openclaw/openclaw/issues/47597)（2026-03-15 开启，今日关闭）**：subagent 支持 streamTo="parent"，关闭于今日，属长期未决后关闭项。
- **[#123327](https://github.com/openclaw/openclaw/issues/123327)（2026-08-13 开启，P0 数据损坏）**：WAL checkpoint 覆写 SQLite 页导致数据损坏，至今无 fix PR，也未标记为需产品决策——数据损坏类问题应优先响应。
- **[#123799](https://github.com/openclaw/openclaw/issues/123799)（2026-08-14 开启，P1）**：上游修复已合入但生产用户缺乏升级路径，需要维护者主动提供可操作的迁移指引。
- **[#135970](https://github.com/openclaw/openclaw/issues/135970) 与 [#135704](https://github.com/openclaw/openclaw/issues/135704)（2026-09-02 开启，均标记 source-repro）**：codex 插件与 iMessage 通道问题进入队列等待修复，建议尽快安排。

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期：2026-09-03**

## 1. 生态全景

个人 AI 助手开源生态正处于**高活跃度的密集迭代期**，当日全部活跃项目合计产生约 210+ 条 Issue 更新与 190+ 条 PR 更新，其中 OpenClaw 与 Hermes Agent 构成第一梯队（日更新量各超百条）。生态整体呈现三个特征：一是**稳定性与可靠性成为首要矛盾**——多个项目同时爆发回归问题（OpenClaw 2026.7.1-8.2 系列、Hermes Desktop 启动崩溃、NanoBot WebUI 卡死），版本快速迭代带来的质量回退正在消耗社区信任；二是**自动化（Cron）与多代理编排的正确性**是跨项目共性痛点（OpenClaw、Hermes、CoPaw），幻觉输出与任务悬挂直接影响生产可用性；三是**架构级重构信号密集涌现**——ZeroClaw 的 RFC 系列、OpenClaw 的插件热管理与 ACP 线程绑定预设、NanoClaw 与 CoPaw 的扩展点请求，均指向生态正从"单体可用"向"平台化/可扩展"演进。安全类问题（沙箱绕过、凭据链验证、提示注入)在 OpenClaw、Hermes、CoPaw、NanoClaw、ZeroClaw 均有出现，安全治理已成为全生态共同挑战。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 待合并 PR | 合并/关闭 PR | Release | 健康度评估 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 322 活跃 | 500 总更新 | 330 | 170 关闭/合并 | 无 | ⚠️ 高活跃但回归较多，P0 数据损坏无修复，Cron 幻觉问题积压近 6 个月 |
| **Hermes Agent** | 50（31 新开/活跃） | 50（45 待合并） | 45 | 5（多为重复关闭） | 无 | 🔴 Desktop 启动崩溃影响面扩大（8+ 独立报告），需紧急热修复 |
| **NanoBot** | 少量 | 29 | 21 | 8 | 无 | ✅ 快速闭环（#5512 约 10 天修复），稳定性持续改善 |
| **CoPaw** | 26（16 活跃） | 29（20 待合并） | 20 | 9 | **v2.2.0 + v2.2.0-beta.7** | ✅ 偏高；安全 Issue 处理透明度不足（#7511 当日关闭未披露原因） |
| **IronClaw** | 3 | 22（15 待合并） | 15 | 7 | 无 | ✅ 高吞吐交付，CI 效能与类型安全改造稳步推进 |
| **ZeroClaw** | 50 | 50 | 大量 | 6 | 无 | ✅ 高深度架构讨论 + 密集安全 patch，RFC 机制运行良好 |
| **LobsterAI** | 6（1 新开） | 9 | 5 | 4 | 无（版本合入主干） | ⚠️ 多条 3 月底 stale Issue 长期未决，响应速度存疑 |
| **NanoClaw** | 3 | 8 | 7 | 1 | 无 | ⚠️ PR review/merge 延迟明显，供应链安全修复受阻 |
| **Moltis** | 2 新开 | 3 | 3 | 0 | **2 个补丁版** | ✅ 问题定位-修复响应闭环快（同日双 Issue 即出 PR） |
| **PicoClaw** | — | — | — | — | — | ⚪ 24h 无活动 |
| **NullClaw** | — | — | — | — | — | ⚪ 24h 无活动 |
| **TinyClaw** | — | — | — | — | — | ⚪ 24h 无活动 |
| **ZeptoClaw** | — | — | — | — | — | ⚪ 24h 无活动 |

---

## 3. OpenClaw 在生态中的定位

- **优势**：OpenClaw 在生态中体量绝对领先——单日 322 条活跃 Issue 与 330+ 待合并 PR 远超其他项目（第二梯队 Hermes 约 45 条待合并）。其维护者评审流转速度快、Issue 分类规范（P0-P2、source-repro 标记、ready-for-maintainer 队列），社区反馈闭环机制成熟。支持跨 openai/codex/copilot 等扩展的横向兼容能力及插件热管理（#135599）等基础设施投入，在服务运维体验上是生态标杆。
- **技术路线差异**：OpenClaw 强调**插件化扩展 + 多代理显式所有权**的架构路线，并率先推进 ACP（Agent Client Protocol）技能注入与 IDE 生态对接。与 Hermes Agent（桌面优先、本地推理深度集成）和 CoPaw（面向 Hub 多用户自托管）路线方向不同。
- **社区规模与压力**：大规模也带来"规模之痛"——Issue/PR 堆积量是生态最大，P1 级回归问题在 2026.7.1-8.2 系列集中出现，P0 数据损坏（#123327）至今无修复 PR，安全相关的 Cron 幻觉问题（#49876）积压近 6 个月，表明维护者带宽与社区吞吐量存在结构性紧张。与 NanoBot 的快速闭环（10 天修完 WebUI 卡死）相比，OpenClaw 的高吞吐在"修复可达性"上有所欠缺。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **自动化任务（Cron）的可靠性与失败语义** | **OpenClaw**（#121953 跨模型延迟、#49876 幻觉输出）、**Moltis**（钩子系统补全）、**Hermes**（本地推理失败误分类） | 工具失败时应干净失败而非"编造看似合理的输出"；Cron 场景需模型兼容性与失败可诊断性 |
| **多代理编排的完整所有权/主动性** | **OpenClaw**（#126360 显式所有权报错刷屏）、**CoPaw**（#7450 主 agent 不主动查子 agent 状态）、**Hermes**（#97681 Bot 群聊与 Desktop 解耦） | 多代理部署中目标解析、状态同步、生命周期解耦均未达生产可用 |
| **上下文/记忆生命周期管理** | **ZeroClaw**（RFC #6850、#9103 分离存储与生命周期策略）、**NanoBot**（#5586 ephemeral 上下文块）、**CoPaw**（#7527 压缩时保留 persona）、**Hermes**（#52261 压缩误判） | 细粒度的上下文进入历史/压缩的控制权，避免静默丢失或破坏性压缩 |
| **错误/失败的可诊断性与透明化** | **IronClaw**（#8009 MCP 错误折叠、#8041 FailureKind 误用）、**OpenClaw**（#132378 ACP 中止原因透传）、**ZeroClaw**（#10523 静默截断）、**Hermes**（#52261 错误分类） | 错误被规范化到"机器可处理"时不应牺牲人类排查所需的原始信号 |
| **第三方模型/工具链兼容性** | **OpenClaw**（#121953 DeepSeek 边缘延迟）、**CoPaw**（#7531 OpenCode API 变更、#7513 deepseek 工具混合错乱、#7505 LAN LLM 不稳定）、**Hermes**（本地推理 llama.cpp/LM Studio）、**NanoBot**（Codex 缓存亲和性） | 外部 API 变更、非标准模型行为、本地推理环境导致的生态断点频繁出现 |
| **前端/渠道类型安全与可观测性** | **IronClaw**（#8039 移除 64 个组件 @ts-nocheck）、**NanoClaw**（delivery 不感知连接状态）、**Hermes**（TUI 配额显示）、**CoPaw**（#7529 Langfuse 输出为空） | 前端类型黑洞清理、运行时状态感知、监控集成完整性 |
| **安全治理** | **CoPaw**（#7511 沙箱绕过、#7443 危险指令逃逸）、**NanoClaw**（#3492 minimumReleaseAge 门禁失效）、**Hermes**（PR #64508 凭据泄漏旁路）、**OpenClaw**（#79168 提示注入扫描）、**ZeroClaw**（#9328 凭证链验证缺失） | 安全类 Issue 在多个项目中处于"高严重度但低响应优先级"状态 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道（iMessage/飞书/Telegram 等）、插件化、ACP 协议兼容 | 开发者/运维者、IDE 深度用户 | 插件热管理 + 多代理显式所有权 + ACP 生态 |
| **Hermes Agent** | Desktop 优先 + 本地推理（llama.cpp/LM Studio）+ Bot 群聊 | Desktop 重度用户、本地推理用户、自托管部署 | Electron 前端 + 多 profile gateway；模型自动纠偏、多搜索后端 |
| **NanoBot** | WebUI 简洁体验 + SDK 流式可靠性 + 多渠道 | 追求轻量易用、前端体验优先的个人用户 | 轻量网关 + 前端体验精细打磨 + SDK 事件保序 |
| **CoPaw（QwenPaw）** | 多用户 Hub 自托管 + 记忆系统 + 移动端 | 团队/多用户部署、Qwen 模型用户 | v2.2.0 推出 workspace 级访问控制；面向 Hub 多租户 |
| **IronClaw** | Rust 核心 + WebUI 类型安全 + CI 效能 | Rust 技术栈开发者、对工程质量要求高者 | Reborn 测试流水线、hermetic Cargo 缓存、类型安全 ratchet |
| **ZeroClaw** | 架构 RFC 驱动开发 + 安全沙箱 + WASM 插件 | 关注长期架构演进与安全合规的早期采用者 | 会话/文件/记忆抽象上移至 runtime 层；RFC 驱动设计（10+ RFC 活跃） |
| **LobsterAI** | IM 集成 + CoWork 协作 + 内置浏览器 | 网易生态用户、IM 工作流集成者 | 绑定 openclaw 版本内核；应用内浏览器 + MCP bridge |
| **NanoClaw** | 轻量快速 + 供应链安全关注 | 轻量部署者、对依赖安全敏感者 | 供应链门禁（minimumReleaseAge）但当前失效 |
| **Moltis** | 钩子/生命周期扩展 + 推理等级对齐 | 依赖事件钩子做观测/审计的开发者 | 进程级事件模型（每次事件一个进程），日期滚动发布节奏 |

---

## 6. 社区热度与成熟度

**第一梯队：高吞吐、大规模 — 但处于"迭代质量巩固"的阵痛期**
- **OpenClaw**（500+ 日 PR 更新）：社区规模最大、维护者评审最活跃，但回归集中爆发（2026.7.1-8.2 系列）、安全类长期积压（#49876 近 6 个月）显示"规模不等于成熟度"。
- **Hermes Agent**（100 条更新）：Desktop 启动崩溃 8+ 独立报告同日爆发、尚无合并修复——处于"快速迭代但验证不充分"的典型阶段。

**第二梯队：高活跃但高质量闭环**
- **IronClaw、ZeroClaw、CoPaw**：三者均保持 20-50 条日更新水平，且具备较好的工程纪律（IronClaw 的类型安全 ratchet + CI 重构；ZeroClaw 的 RFC 流程；CoPaw 当日 Bug 修复快速合入如 #7523）。ZeroClaw 处于**架构演进期**（10+ RFC 活跃、含 Revision 5-10 级反复修订）；IronClaw 处于**工程基建加固期**；CoPaw 处于**产品形态升级期**（Hub 多用户落地）。
- **NanoBot**：更新量中等（29 PR）但在稳定性上表现最优秀——WebUI 卡死问题 10 天内闭环、SDK 事件保序已合并，体现了"小步快跑、验证充分"的成熟节奏。

**第三梯队：中低活跃或存在瓶颈**
- **Moltis**：日更新量最小但效率高（双 Issue 当日即有修复 PR），处于早期但良性循环阶段。
- **LobsterAI**：活跃度中等，但 3 月底的 stale Issue/PR 积压 5 个月以上，快速迭代能力存疑。
- **NanoClaw**：贡献者有热情（单日 3 条新 PR）但 review 与合并延迟严重，供应链安全修复悬置。
- **PicoClaw、NullClaw、TinyClaw、ZeptoClaw**：当日无任何活动——或处于静默期，或已实质上停止活跃开发。

---

## 7. 值得关注的趋势信号

1. **自动化任务语义的正确性是下一个"生产可用"门槛**。OpenClaw 的 Cron 幻觉（近 6 个月未解决）、Hermes 的 Telemetry profile 丢历史、Moltis 的钩子不派发——多个项目在"无人值守运行"场景暴露出系统性缺陷。对开发者启示：将 agent 用于 Cron/定时任务前，需评估"工具失败时是否有干净的失败语义与重试边界"，以及在 headless 部署下会话持久化与状态恢复是否经过充分验证。这是自主智能体从"陪聊"走向"干活"的关键分水岭。

2. **"错误分类"正取代"错误检测"成为可观测性新前线**。IronClaw 的 FailureKind 语义错配把模型"送进无法恢复的状态"、OpenClaw 的中止原因透传让 IDE 用户只见 cancelled 不见原因、ZeroClaw 的 Bootstrap 静默截断——框架的错误分类词表需要与真实域语义精确对齐，否则引导模型误判并陷入无效重试循环。开发者在构建 agent 框架时，应设计结构化的错误通道（reason + context + retriable flag）而非扁平化错误码。

3. **桌面端生命周期与云端服务解耦成为刚需**。Hermes 的 #97681（关 Desktop 后 Bot 应继续工作）、CoPaw 的 #7519（手机远程访问桌面端）——用户越来越将 agent 定位为"7x24 的服务器服务"而非"打开即用的桌面应用"。这提示新项目架构时优先考虑 headless 部署 + GUI 作为控制面板而非运行时依赖。

4. **前端类型安全正在从"最佳实践"变为"基础设施"**。IronClaw 一次性移除 64 个组件的 @ts-nocheck 并引入 ratchet 防回潮机制——这是工程纪律向"可执行约束"演进的信号，值得工程团队借鉴。

5. **供应链安全门禁在实践中难以真正落地**。NanoClaw 的 minimumReleaseAge 配置连续两条 PR（#2973 错改、#3492 修正后仍待合并）均指向"文档承诺与配置实际未生效"——说明安全门禁的验证机制需要 test coverage 兜底，而非仅靠配置存在。

6. **第三方模型/API 兼容性是全生态持续失血点**。OpenClaw 的 DeepSeek 边缘延迟、CoPaw 的 OpenCode API 强制新 header、Hermes 的本地推理错误误分类——模型服务商和 API 提供方的行为变化高频破坏 agent 框架的既有假设。开发者在选择 agent 框架时，应评估其对多模型后端/非标准模型行为的容错能力。

7. **安全报告的响应透明度正在影响社区信任**。CoPaw #7511 安全沙箱被突破当天即关闭但未披露原因，同类 #7443 仍无维护者回应；Hermes 的凭据旁路 PR 开放近两个月。安全类 Issue 在多数项目中处于"严重度最高、响应优先级最低"的倒挂状态，建议维护团队建立安全响应的明确 SLA。

---

*本报告基于 2026-09-03 各项目公开 GitHub Issue/PR 数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-09-03

## 1. 今日速览
项目保持高活跃度，过去 24 小时 PR 更新达 29 条，其中 8 条已合并/关闭、21 条仍待处理。过去一天 GitHub 全站有较多 issue 更新。本周显著进展集中在 WebUI 稳定性（#5514/#5512 已修复关闭）、SDK 流式事件可靠性（#5635 已合并）以及多通道消息处理修复（#5634 已合并）。值得关注的是，WebUI 流状态在 Gateway 重启后卡死的问题已通过 #5514 完成修复并闭环对应 issue。暂无新版本发布，但从合并节奏看接近下一个版本的候选窗口。待合并 PR 数量（21 条）偏高，建议维护者关注积压情况。

## 3. 项目进展
今日合并/关闭的 PR 聚焦于以下修复，整体推动项目稳定性向前一步：
- **WebUI Gateway 重连后流状态卡死修复**（#5514，已关闭，修复 #5512）：清除 Gateway 重连过程中产生的过期 `isStreaming` 状态，解决前端收不到 `goal_status: idle` 推送而导致的永久 spinner。
- **会话回复超时任务失败可观测性**（#5515，已关闭）：避免 `SendSessionReply` 超时任务中的消息总线错误被静默丢弃，新增回归测试覆盖消息总线故障场景。
- **Tool Hints 纯文本值长度限制**（#5629，已关闭）：修复 `format_tool_hints()` 对非路径/非命令类型的纯文本值（如 `grep` 模式、`web_search` 查询）不尊重 `max_length` 的问题。
- **SDK 流关闭时事件保序**（#5635，已关闭）：队列满时不再丢弃最早未读事件，而是等待空间后再写入，确保 completion 哨兵到达前的事件不丢失。
- **Codex prompt 缓存亲和性保持**（#5632，已关闭）：使用同一 SHA-256 派生的会话路由键作为 Codex `session-id` 和 Responses `prompt_cache_key`，同时尊重显式 `extraBody.prompt_cache_key` 覆盖。
- **渠道层去重指纹缓存有界化**（#5634，已关闭）：限制 `ChannelManager._origin_reply_fingerprints` 的内存无界增长，避免长时间运行网关的内存膨胀。

[pull #5514](https://github.com/HKUDS/nanobot/pull/5514) · [pull #5515](https://github.com/HKUDS/nanobot/pull/5515) · [pull #5629](https://github.com/HKUDS/nanobot/pull/5629) · [pull #5635](https://github.com/HKUDS/nanobot/pull/5635) · [pull #5632](https://github.com/HKUDS/nanobot/pull/5632) · [pull #5634](https://github.com/HKUDS/nanobot/pull/5634)

## 4. 社区热点
- **#5586**（Open，2 条评论）：用户提出让运行时上下文块（runtime-context block）可选择不参与历史持久化（即 `ephemeral` 块）。该需求涉及消息生命周期管理，评论数虽不多，但触及隐私/敏感数据不入库的使用诉求，值得关注。

[issue #5586](https://github.com/HKUDS/nanobot/issues/5586)

## 5. Bug 与稳定性
按严重程度排列（高 → 低）：

1. **[已修复] WebUI 在 Gateway 重启后永久卡在 spinner**（#5512，已关闭）：前端收不到 `goal_status: idle` 推送导致 `isStreaming` 无法复位，直接影响用户界面可用性。已有对应 PR #5514 关闭修复，修复已合入。
   [issue #5512](https://github.com/HKUDS/nanobot/issues/5512) · [PR #5514](https://github.com/HKUDS/nanobot/pull/5514)
2. **[已修复] SDK 流关闭时事件丢失**（对应 PR #5635）：关闭已满的事件队列为写入 completion 哨兵腾空间，导致最早未读事件被丢弃，可能导致下游消费事件不完整。
3. **[在修] Codex OAuth token 存储在平台数据目录而非 NanoBot 持久目录**（PR #5446，Open）：与 NanoBot 持久化设计不一致，可能造成 token 在数据目录迁移/重建时丢失。
4. **[在修] 入站 allowlist 通配符未生效**（PR #5472，Open）：Signal 私聊与群组的 allowlist 策略门禁未正确支持 `*` 通配符，已有修复 PR 并附回归测试。

## 6. 功能请求与路线图信号
- **[功能请求] 运行时上下文块的 `ephemeral` 选项**（#5586）：要求 runtime-context 块可选择不入历史、不随会话行持久化、不重放。这可能与隐私、临时代理注入等使用场景相关。结合现有代码路径（`agent/loop.py` 的 `append_runtime_context`），该需求需改动持久化逻辑，实现成本较大，暂无对应 PR 跟进，短期进入下一版本的可能性偏低。
- **Telegram 富消息流式支持**（PR #5614，Open）：实现 Telegram 渠道的富消息流式发送与最终消息正确发送，属于渠道能力增强。PR 作者自述尚未充分 review，实际合入时间不确定，属于明确的功能推进信号。
- **WebUI 移动端键盘与流式发送优化**（PR #5640，Open）+ **iOS PWA 点击与状态栏修复**（PR #5641，Open）：同一位作者连续提交 2 个移动端 WebUI 优化，覆盖触屏换行、发送按钮行为及 iOS PWA 首击被 `:hover` 吞掉的问题。移动端体验的信号明显，悬而未决的还有 TUI 配对提示等稳定性改动（#5639）。

## 7. 用户反馈摘要
- **WebUI 稳定性是用户痛点**：issue #5512 报告了 Gateway 重启后 WebUI 前端卡死、无法继续对话的明确症状（"spinning state"、isStreaming 无法复位）。该 issue 今天已关闭，用户等待周期约 10 天，属于 24h 内快速闭环的正面案例。
- **运行时上下文块的持久化语义带来负担**：来自 #5586 的反馈——当前 runtime-context 块只有"追加进用户消息、进 session 行、每轮重放"一条生命周期，缺少对上下文进入历史记录的细粒度控制，突出敏感/临时上下文的使用困难。
- 从问题观察来看，通信渠道类（Signal、Telegram、Matrix）的 PR 与 issue 较多反映了渠道适配是当前社区的重要方向。

## 8. 待处理积压
以下为长期挂起、近 24h 有更新但尚未合入的重要 PR，请维护者优先评估：

- **#5334**（Open，创建于 2026-08-11）：`fix(channels): preserve indentation across message splits`。信号通道长消息拆分时缩进丢失、需要硬拆分时产生纯空白分片的问题。挂起 23 天，涉及 Signal 消息格式语义。
- **#5385**（Open，创建于 2026-08-13）：`fix(matrix): complete Element SAS request flow`。补齐 Matrix Element SAS 验证流程（现代 `m.key.verification.request` 接受、`ready`/`done` 握手时序）。挂起 21 天。
- **#5446**（Open，创建于 2026-08-19）：`fix(codex): persist OAuth tokens in Nanobot data directory`。Codex OAuth token 存储位置与 NanoBot 数据目录不一致。挂起 15 天且标记 `conflict`，需要 rebase。
- **#5485**（Open，创建于 2026-08-22）：`fix: restore LangSmith tracing for native providers`。LiteLLM 迁移原生 SDK 后缺少 LangSmith tracing 回调，需在原生客户端边界重新包装。挂起 12 天。

[PR #5334](https://github.com/HKUDS/nanobot/pull/5334) · [PR #5385](https://github.com/HKUDS/nanobot/pull/5385) · [PR #5446](https://github.com/HKUDS/nanobot/pull/5446) · [PR #5485](https://github.com/HKUDS/nanobot/pull/5485)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-09-03

## 今日速览

过去 24 小时 Hermes Agent 项目活跃度极高，共产生 50 条 Issue 更新（31 条新开/活跃，19 条关闭）和 50 条 PR 更新（45 条待合并）。最引人关注的事件是 Desktop 主进程启动崩溃问题集中爆发——至少 8 个独立 Issue/PR 指向同一根因（`rememberLog` 在 `hermesLog` 初始化前被调用），该问题已获修复 PR，但截至发稿尚未合并，属于今日最优先事项。此外，项目无新版本发布，核心 Agent 层、Gateway 层和 Desktop 层均有新增修复 PR 涌入。总体评估：社区活跃、问题响应迅速，但**阻塞性启动缺陷的影响面正在扩大**，需尽快合并修复并发布补丁版本。

## 项目进展

今日无 PR 被合并（5 条关闭/合并的更新中，关闭项均为重复 Issue 而非 PR 合入），但多个关键修复 PR 已就绪待合并，反映项目正处在"修复批量就绪、等待合入"的阶段：

- **[PR #102059](https://github.com/NousResearch/hermes-agent/pull/102059)（待合并）**：修复本地压缩路径忽略 `codex_responses_compact_threshold` 配置的问题（关联 Issue #101867）。此前该阈值仅在原生（服务端）压缩时生效，本地压缩完全无视此设置，修复后两者行为将一致。
- **[PR #102058](https://github.com/NousResearch/hermes-agent/pull/102058)（待合并）**：将本地推理（llama.cpp、LM Studio 等）模型加载失败的 HTTP 500 错误归类为不可重试错误，允许回退，避免无意义的重复请求。直指 Issue #52261 中本地推理场景的核心痛点。
- **[PR #94130](https://github.com/NousResearch/hermes-agent/pull/94130)（已关闭）**：修复单 profile Gateway 上 webhook 裸路径请求 404 的问题，使 `/webhooks/<route>` 正确路由到网关自身的服务 profile 而非默认 profile。该 PR 状态为 CLOSED，可能已被合入或取代，建议维护者确认。
- **[PR #102055](https://github.com/NousResearch/hermes-agent/pull/102055)（待合并）**：为 `web_search` 和 `web_extract` 增加 Perplexity Search API 后端（通过 `PERPLEXITY_API_KEY` 启用），填补此前 PR #9192 留下的空白，丰富工具链的搜索后端选择。

## 社区热点

1. **[Issue #66616 — Skills index 过期告警（146 条评论）](https://github.com/NousResearch/hermes-agent/issues/66616)**
   自动化巡检机器人报告 Skills Hub 依赖的索引文件已滞后 29.8 小时（阈值 26 小时），状态为 degraded。该 Issue 自 7 月 18 日创建以来持续被机器人更新、评论数高达 146 条，是当前关注度最高的自动化告警，但至今仍处于 OPEN 状态。**背后诉求：项目基础设施的自动化巡检链路本身需要维护，长时间未解决可能导致社区对项目自治能力的信任度下降。**

2. **[Issue #97681 — Desktop 关闭后 Bot 群聊应继续工作（23 条评论）](https://github.com/NousResearch/hermes-agent/issues/97681)**
   用户期望从笔记本、家庭服务器或 VPS 部署的 Bot 加入同一群聊后，关闭 Desktop 不应中断会话。Issue 指出 gateway 拥有的权限、同 gateway runner 和跨 gateway 传输已在 `main` 分支就绪——但功能尚未完整落地。**背后诉求：Desktop 应作为"控制面板"而非"运行时依赖"，用户希望 7x24 小时在线的 Bot 服务与 GUI 生命周期解耦。**

3. **[Issue #101941 — Desktop 主进程启动崩溃（10 条评论，4 个 👍）](https://github.com/NousResearch/hermes-agent/issues/101941)**
   今日新开但迅速成为热点的崩溃报告，在 24 小时内聚集 10 条评论。用户 Heybinshao 准确定位到回归引入的提交 `c401756a6`（#91545，pool sizing 改为实时设备偏好）。**背后诉求：社区对近期 Desktop 变更的回归风险已形成共识——多个用户独立报告了相同堆栈，强烈期待维护者尽快合入修复并发布热修复版本。**

## Bug 与稳定性

### 严重度：P0 — 阻断性启动崩溃（影响面最大）

**Desktop 主进程因初始化顺序错误崩溃（8+ 独立报告）**

提交 `c401756a6`（"fix(desktop): pool sizing as a live device preference in Settings"，#91545）在 Electron 主进程中引入了变量提升（hoisting）相关的初始化顺序缺陷：`rememberLog` 函数在 `hermesLog` 数组声明之前即被调用（经由 `readPersistedPoolLimits()` 的 ESM 导入路径），抛出的异常 `TypeError: Cannot read properties of undefined (reading 'push')` 在窗口创建前直接终止主进程。受影响平台覆盖 macOS（Intel/arm64）、Windows 11 和 Linux。至少 8 个独立 Issue 报告了相同堆栈：

| Issue | 平台 | 报告者 | 状态 |
|---|---|---|---|
| [#101941](https://github.com/NousResearch/hermes-agent/issues/101941) | 跨平台 | Heybinshao | OPEN（首个报告，评论最多） |
| [#101989](https://github.com/NousResearch/hermes-agent/issues/101989) | Windows 11 | ClausVienna | CLOSED (duplicate) |
| [#101993](https://github.com/NousResearch/hermes-agent/issues/101993) | 跨平台 | aioliaray | CLOSED (duplicate) |
| [#101996](https://github.com/NousResearch/hermes-agent/issues/101996) | macOS | jmpc73 | CLOSED (duplicate) |
| [#101999](https://github.com/NousResearch/hermes-agent/issues/101999) | 跨平台 | Manfred-R | CLOSED (duplicate) |
| [#102005](https://github.com/NousResearch/hermes-agent/issues/102005) | macOS arm64 | muhammetakyuz01-web | CLOSED（含修复 PR 引用） |
| [#102018](https://github.com/NousResearch/hermes-agent/issues/102018) | 跨平台 | gsurenull | CLOSED（含修复 PR 引用） |
| [#102040](https://github.com/NousResearch/hermes-agent/issues/102040) | Windows | 3617916-creator | CLOSED (needs-repro) |

**修复状态**：Issue #102005 和 #102018 的关闭备注中提到了修复 PR，今日有多个修复 PR 提交：

- **[PR #102005（作者 muhammetakyuz01-web）](https://github.com/NousResearch/hermes-agent/issues/102005)**：标题为 "rememberLog pushes to hermesLog before its declaration (use-before-init)"
- **[PR #102040（作者 3617916-creator）](https://github.com/NousResearch/hermes-agent/issues/102040)**：标题为 "module init order bug" 的修复

该 PR 已关联到最早报告 Issue #101941，但尚未标记为合并。**维护者需立即合入并发布热修复版本，该问题影响面已覆盖所有桌面端用户。**

另外 Issue [#101996](https://github.com/NousResearch/hermes-agent/issues/101996) 和 [#101960](https://github.com/NousResearch/hermes-agent/issues/101960) 为重复报告，均已正确关闭。值得注意的是 #101960 的作者 khoalx18 还直接发起了修复 PR（[#101960 PR](https://github.com/NousResearch/hermes-agent/pull/101960)），但该 PR 状态为 CLOSED，可能是替换成了更好的实现。

### 严重度：P1 — 功能回归

1. **[Issue #92279（已关闭，duplicate）— Telegram profile 路由会话每轮丢失全部历史（P1）](https://github.com/NousResearch/hermes-agent/issues/92279)**
   0.20.1→0.20.5 的回归问题：当 `gateway.profile_routes` 路由到具名 profile 时，消息正确持久化在 profile 自己的 `state.db` 中，但 agent 的缓存探针/重建仍读取主存储，导致**每一轮对话都丢失全部历史**。在 8 月 22 日创建后延宕 12 天才被处理，今日标记为 duplicate 并关闭——需确认是否已被真正的修复 PR 解决，而非仅因重复报告被关。

2. **[Issue #96792（已关闭）— macOS Desktop "Timed out waiting for Hermes backend port announcement (90000ms)"（P1）](https://github.com/NousResearch/hermes-agent/issues/96792)**
   `waitForDashboardPort` 中的 stdout 监听器竞态条件导致误报后端死亡，触发无限重启循环。此问题与 #74874（8 月 1 日关闭）相似但根因不同。今日关闭，建议确认修复是否已合入主分支。

### 严重度：P2 — 功能缺陷

1. **[Issue #101975（OPEN）— 模型切换自动将未收录模型纠正为近似模型（如 gemini-3.8-flash → gemini-3.6-flash）](https://github.com/NousResearch/hermes-agent/issues/101975)**
   用户通过 `/model` 指定尚不在提供商模型目录中的模型时，Hermes 会自动模糊匹配并替换为另一个已存在但不同的模型，用户可能无感知地使用了错误的模型。今日新开，暂无 PR。

2. **[Issue #102013（OPEN）— 回合完成提示音过小 & Windows repack 可能留下不完整的 win-unpacked](https://github.com/NousResearch/hermes-agent/issues/102013)**
   两个独立问题合并报告：提示音在常规扬声器上几乎听不见（增益预设约 0.02-0.07 过低）；Windows Electron repack 可能产出不完整安装包。今日新开，暂无 PR。

### 严重度：P3 — 低优先级缺陷

1. **[Issue #85177（OPEN）— Desktop GUI 中回答 clarify 多选提示后助手消息从视图中消失](https://github.com/NousResearch/hermes-agent/issues/85177)**（8 月 13 日开，至今未修复，更新于 9 月 3 日）
2. **[Issue #52261（OPEN）— 本地推理 400 错误被误分类为 context_overflow 触发破坏性压缩/重置循环](https://github.com/NousResearch/hermes-agent/issues/52261)**（6 月 25 日开，注释 7 条，已有 PR #102058 待合并）
3. **[Issue #77216（OPEN）— kanban_attach 无本地路径选项，内联 base64 有截断风险](https://github.com/NousResearch/hermes-agent/issues/77216)**
4. **[Issue #77437（OPEN，needs-repro）— 切换到 TERMINAL/REVIEW 标签再切回会清空会话视图](https://github.com/NousResearch/hermes-agent/issues/77437)**
5. **[Issue #97762（OPEN）— 自动更新后 Desktop 侧边栏只显示分组标题但零会话](https://github.com/NousResearch/hermes-agent/issues/97762)**（需清空 Local/Session Storage 才能恢复，8 月 29 日开）

## 功能请求与路线图信号

1. **[PR #102055 — Perplexity Search API 加入 web_search/web_extract 后端](https://github.com/NousResearch/hermes-agent/pull/102055)**
   通过 `PERPLEXITY_API_KEY` 启用，用户在 hermes tools 界面选择 Perplexity 即可将两个工具路由到新后端。延续社区对多搜索后端的一贯诉求（#9192 等），已从"请求"变为"就绪 PR"，很可能进入下一版本。

2. **[PR #101983 — TUI 实时显示 provider 配额](https://github.com/NousResearch/hermes-agent/pull/101983)**
   将 `/usage` 的配额信息常驻显示在 branding 面板和状态栏，避免用户需要反复手动查询。对 API 成本敏感用户（尤其重度agent用户）是切实的体验改进。

3. **[PR #47937 — Desktop 乌克兰语翻译](https://github.com/NousResearch/hermes-agent/pull/47937)**
   6 月 17 日创建的老 PR，今日仍有更新。注册 uk 及 uk-UA locale 别名、扩展 Locale 类型。i18n 覆盖持续扩大。

## 用户反馈摘要

- **启动崩溃是最集中的痛点**：多位用户（Heybinshao、Manfred-R、ClausVienna、gsurenull 等）在同一时间段、不同平台、相同或不同 Hermes 版本上独立报告了同一崩溃。ClausVienna 使用的版本为 **0.17.0**（commit c3e9b28a4），而其他用户在 0.21.0 上复现——**意味着问题可能已存在多个版本**（由 `c401756a6` 引入并随版本分发）。Manfred-R 准确指出问题始于该提交：Electron 主进程在模块评估期间（窗口创建前）即崩溃，没有任何 GUI 界面出现。用户在等待修复期间完全无法使用 Desktop，影响迫切。
- **本地推理用户关注资源管理与错误分类**：Jp Cruz（jp-cruz）在 Issue #52261 中从"本地推理、资源受限"角度深入调查了本地模型加载失败被误判为上下文溢出并触发破坏性压缩/重置的问题——对本地用户而言，这类误判不仅浪费算力，还会导致对话状态不可恢复地丢失。
- **Telegram profile 用户会话历史丢失**：Issue #92279 暴露出 profile 路由场景下的数据一致性问题。用户 joebrans-elixus 描述的每轮丢失全部历史的现象对重度 Telegram 用户打击巨大——需要确认 duplicate 关闭背后是否已有有效修复。
- **桌面端信息架构争议**：Issue #97681 显示，用户将 Hermes Agent 定位为可编程部署的长期运行服务（VPS/homelab），Desktop 在会话生命周期中的中心地位反而成为障碍，关闭 Desktop 即中断 Bot 群聊不符合直觉。

## 待处理积压

以下 Issue/PR 长期未获得维护者回应或修复，建议关注：

1. **[Issue #66616 — Skills index 过期告警（146 条评论，7 月 18 日开）](https://github.com/NousResearch/hermes-agent/issues/66616)**：自动化巡检机器人已持续跟踪该索引滞后问题超过 6 周，状态仍为 degraded。这是基础设施健康度问题，优先级虽为 P3，但 146 条评论说明其已消耗大量机器人/自动化资源，值得根治。

2. **[Issue #85177 — Desktop 回答 clarify 多选后助手消息消失（8 月 13 日开）](https://github.com/NousResearch/hermes-agent/issues/85177)**：GUI 层可见的交互缺陷，影响日常使用体验。三周未获响应，今日有更新（可能是维护者查看）。

3. **[PR #64508 — terminal 工具关闭凭据泄漏旁路（7 月 14 日开）](https://github.com/NousResearch/hermes-agent/pull/64508)**：安全问题。`terminal` 工具缺少 `read_file` 中已有的凭据保护——被 `read_file` 阻止读取凭据的 agent 可以通过 `terminal`（如 `cat`）读取 `auth.json`、`.env`、`mcp-tokens/` 等敏感文件。安全边界类 PR 已开放近两个月仍未合并，需要维护者优先评估。

4. **[PR #47937 — Desktop 乌克兰语翻译（6 月 17 日开）](https://github.com/NousResearch/hermes-agent/pull/47937)**：两个半月未合入。持续收到 rebase 更新（今日有活动），说明贡献者在积极维护，需要维护者给予回应（合入或说明原因）。

5. **[Issue #77437 — TERMINAL/REVIEW 标签切换后会话视图空白（8 月 3 日开）](https://github.com/NousResearch/hermes-agent/issues/77437)**：一个月前报告，标记 needs-repro，今日仍无实质进展。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-03

## 1. 今日速览

NanoClaw 项目今日保持中等偏活跃的开发节奏。9 月 3 日有 3 条 Issue 更新（其中两条由 fork 维护者提出，讨论扩展网关与邮件槽位的抽象能力），并有 8 条 PR 处于活跃状态，其中 3 条为新提交的修复 PR（涉及发送投递重试、任务调度延迟、API 文档集成）。值得注意的是，今日有两条围绕供应链安全（minimumReleaseAge 门禁）的 PR 形成关联：此前合并关闭的 #2973 发现配置未被正确读取，新 PR #3492 在同一位置进行修正。此外，今日关闭了 1 条 PR（#2973，标记为已合并/关闭）。仓库维护者的主力 merge 节奏仍需观察 — 目前仍有大量 PR 处于待合并状态。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日有一条 PR 被合并/关闭，但属于供应链安全修复的回归问题：

- **[PR #2973 fix(supply-chain): activate the minimumReleaseAge gate (hoist out of `pnpm:` key)](https://github.com/nanocoai/nanoclaw/pull/2973)** [CLOSED] — `sturdy4days` 试图将 `pnpm-workspace.yaml` 中的 `minimumReleaseAge: 4320` 从 `pnpm:` 键下移动到顶层，以真正启用"新发布包需等待 3 天才能被拉取"的安全机制。此 PR 于 7 月 7 日创建，9 月 3 日关闭。

**项目整体进度**：核心进展集中在供应链安全领域，但修复并未真正生效 — 同领域的新 PR（#3492）发现 `CLAUDE.md` 中承诺的 minimumReleaseAge 门禁实际未生效，旧 PR 的修复方向可能不正确，新 PR 在 8 月 23 日发起，仍待合并。建议维护者优先审阅该安全相关修复。

## 4. 社区热点

今日讨论热度最高的条目是：

- **[Issue #3529 update-nanoclaw skill refresh: local adapters fail validation or get overwritten, no opt-out](https://github.com/nanocoai/nanoclaw/issues/3529)** — 2 条评论，作者 `glifocat` 长期参与（同时是 PR #3427 的作者）。该问题讨论了更新流程中 `src/channels/index.ts` 的信道导入被误判为"来自 skill"，导致用户自定义适配器被覆盖或更新校验失败，且没有退出选项。

**深度分析**：`glifocat` 的"两个场景"案例（Case 1: 自定义适配器阻断更新）反映了部分高级用户深度定制代码后，与官方自动更新机制发生的冲突。该作者同时在 PR #3427 中提交了 fix（告知 agent send_card 会丢弃回调按钮），说明其问题不只一个，可能涉及不同模块的 skilling 系统设计。社区需要官方明确"自定义代码边界"或引入 opt-out 机制。

## 5. Bug 与稳定性

按严重程度排列：

**🔴 高 — 供应链安全门禁失效**
- **[PR #3492 fix(pnpm): turn the minimumReleaseAge gate on (hoist out of the pnpm: key) + regression test](https://github.com/nanocoai/nanoclaw/pull/3492)** [OPEN] — `amit-shafnir` 指出 `CLAUDE.md` 声称新发布包需等待 3 天才能被拉取，但实际配置未生效（之前 #2973 的修改方向有误），需要真正关闭被发布日篡改的供应链风险窗口。已有回归测试，待合并。

**🟠 中 — 发送投递机制缺陷**
- **[PR #3703 fix: delivery spends no attempt on an adapter that reports itself disconnected](https://github.com/nanocoai/nanoclaw/pull/3703)** [OPEN] — `santisiri` 发现 `ChannelAdapter.isConnected()` 虽属于契约的一部分，但投递逻辑从未调用它。当 adapter 已断开时，系统仍会消耗全部 3 次尝试机会而失败。新提交，fork 修复已存在。

**🟠 中 — 任务调度延迟**
- **[PR #3702 fix: tasks run feeds the reconcile queue so the run starts now, not at the next resync tick](https://github.com/nanocoai/nanoclaw/pull/3702)** [OPEN] — `santisiri` 指出 `ncl tasks run` 插入 due 行后未喂给 reconcile 队列，导致任务必须等到下一个周期性 resync tick 才真正启动。（与 #3703 同作者，9 月 3 日一天内提交 2 条 fix PR。）

**🟡 低 — WhatsApp 图片读取失败**
- **[PR #3113 fix(whatsapp): stage inbound media where the container can read it](https://github.com/nanocoai/nanoclaw/pull/3113)** [OPEN] — `CrAzyScreamx` 修复容器无法读取 WhatsApp 入站媒体临时文件的问题。创建于 7 月 21 日，至今已有 44 天未合并。

**🟡 低 — send_card 存在误导行为**
- **[PR #3427 fix(agent-runner): tell the agent send_card drops callback actions](https://github.com/nanocoai/nanoclaw/pull/3427)** [OPEN] — `glifocat` 修复 agent 被告知 send_card 支持聊天 SDK bridge 实际会丢弃的回调操作，但仍报成功的问题。

**🟡 低 — 挂载安全旁路**
- **[(PR #3680 fix(mount-security): close allowlisted-extra mount bypass in validateSpec](https://github.com/nanocoai/nanoclaw/pull/3680))** [OPEN] — `prathish-ks` 修复 validateSpec 中 allowlisted-extra mount 的绕过问题（安全相关）。8 月 30 日创建。

## 6. 功能请求与路线图信号

- **[Issue #3704 受保护的 session-assembly hook（SqliteAgentMailbox 子类化）](https://github.com/nanocoai/nanoclaw/issues/3704)** — `davekim917` 维护着一个 fork，通过 `src/mailbox/compose.ts` 注册自定义 `AgentMailbox` 子类以扩展对 SQL 表、列和触发器。该提议聚焦向核心代码库增加一个 protected 的 session-assembly hook（明确允许子类化实施）。

- **[Issue #3701 网关声明式凭证通道（validateSpec credential lane）](https://github.com/nanocoai/nanoclaw/issues/3701)** — 同一位作者运行着 24 个 agent 组，每组独立凭证，在网关模型下（OneCLI、proxy 边界按请求注入）。作者认为现有的 `contributedEnv` driver seam 基本适配其需求，但希望 validateSpec 能够显示声明凭证通道。

**路线图信号**：两位 fork 维护者（`davekim917` 一人提出两个）在表达相同诉求 — **核心架构需要更完整的扩展点设计**，包括 compose-time（mailbox 组装）与 spec-time（credential 声明）的均可定制。如果在单周内形成两个 parallel requests，可以考虑在下个版本引入 spec'd extension interface 讨论。

## 7. 用户反馈摘要

从今日活跃条目中提炼的用户声音：

- **高级用户在定制与自动更新之间存在摩擦**（Issue #3529）：`glifocat` 报告其"自己的 adapter"被更新流程干扰或校验失败，且没有退出更新中 skill refresh 的方式。反映核心 CLI 更新机制的刚性。在评论中（推断）表达了其对当前 update-nanoclaw 行为的阻断性不满 — "two things break"。
- **自动更新同步于安全补丁的联动压力**：`sturdy4days`（#2973）、`amit-shafnir`（#3492）连续两条 PR 指向同一个 pnpm 配置问题，反映社区对供应链风险的警觉度高，同时希望 CLAUDE.md 文档与实际行为的一致性。
- **投递与运行时行为与实际通道状态脱节**（PR #3703）：`santisiri` 观察到即便 adapter 断开，send 尝试仍会消耗尝试次数，其痛点显然在于"资源浪费/错误管理体验"，希望框架能够自行感知底层连接状态。

## 8. 待处理积压

⚠️ 以下条目已连续超过一周未获得维护者响应，建议优先关注：

| 条目 | 等待时长 | 类型 | 说明 |
|------|------|------|------|
| [PR #2973](https://github.com/nanocoai/nanoclaw/pull/2973) (CLOSED — 需确认合并状态) | ~2 个月 | 供应链安全 | 最终关闭但可能未真正生效，与 #3492 冲突，建议明确状态 |
| [PR #3113](https://github.com/nanocoai/nanoclaw/pull/3113) (WhatsApp 修复) | 44 天 | 功能 Bug | 长期未获 review |
| [Issue #3529](https://github.com/nanocoai/nanoclaw/issues/3529) | 9 天 | 用户反馈 | 需要维护者对"skill refresh 覆盖本地代码"表达立场 |
| [PR #3427](https://github.com/nanocoai/nanoclaw/pull/3427) | 13 天 | 功能 Bug | 来自同一活跃用户的修复，等待合并 |
| [PR #3573](https://github.com/nanocoai/nanoclaw/pull/3573) (AIML API 接入请求) | 7 天 | 新集成 | Docs 型集成请求，隔日又更新过 |
| [PR #3680](https://github.com/nanocoai/nanoclaw/pull/3680) (挂载安全) | 4 天 | 安全修复 | 距今日窗口略短，但安全相关建议优先处理 |

---

**项目健康度总结**：NanoClaw 社区活跃，外部贡献者对核心基础设施（供应链安全、连接生命周期）的关注度持续上升。当前主要瓶颈是 PR review 与 merge 延迟，尤其是安全相关修复建议优先处理。两个 fork 维护者同步提出的架构扩展建议（#3701/#3704）值得维护团队将其纳入路线图讨论。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 — 2026-09-03

## 1. 今日速览

IronClaw 在 2026-09-03 呈现活跃且多线程的开发状态：24 小时内累计有 3 条 Issue 更新与 22 条 PR 更新，其中合并/关闭 7 条、待合并 15 条，显示出高吞吐的交付节奏。值得关注的是，维护者 `italic-jinxin` 牵头的前端类型安全改造系列（#8037–#8040）与 `BenKurrek` 提交的多项修复/基础设施优化已形成规模化合并浪潮；同时两条新开 Issue（#8009、#8041）指向 MCP 错误诊断与工具失败语义两个可靠性痛点，预示着新一轮可靠性加固方向。本项目保持既定的文档工程化（`docs/internal` 设计驱动）与 CI 效能优化并举的高活跃轨道。

## 2. 版本发布

本日无新版本发布。

## 3. 项目进展

今日合并/关闭了 7 条 PR，关键进展如下：

| PR | 状态 | 要点 | 链接 |
|---|---|---|---|
| **#8039** refactor(webui): type production components and hooks | ✅ Closed | 移除 64 个生产组件/钩子/页面及相关 helper 的 `@ts-nocheck`，补充 React Query、outlet-context、DOM、定时器、ref、setup-flow 与认证 payload 的显式类型，并新增最小化环境 type 声明。这是 WebUI 类型安全大改造的核心一环 | [查看](https://github.com/nearai/ironclaw/pull/8039) |
| **#8051** fix(reply): the answer is the current model call's text; earlier calls are narration | ✅ Closed | 修复 Slack/Telegram 回复内容错位问题——此前模型将分析叙述误作为最终回复。原理：**"answer" 永远是当前模型调用的文本**，早期调用均为叙述性输出 | [查看](https://github.com/nearai/ironclaw/pull/8051) |
| **#8050** ci: stop cold-compiling every Reborn lane | ✅ Closed | 彻底重构 Reborn 测试流水线：启用稳定 hermetic Cargo home、push-only 共享缓存、稳定工具链、并引入"warm in-place mutation gate"，消除每个 PR/merge-queue 全部依赖闭包的冷编译浪费（参考运行中三批重档位一次任务重复编译两次） | [查看](https://github.com/nearai/ironclaw/pull/8050) |
| **#8045** fix(ci): wait for CLI listener readiness in smoke tests | ✅ Closed | CLI smoke-test 就绪检测由 banner 改为真实 loopback TCP 连接确认；将重复的 5 秒重试逻辑收敛到单一有界私有连接器，消除 flaky 冒烟测试 | [查看](https://github.com/nearai/ironclaw/pull/8045) |
| **#8003** chore(deps): bump everything-else group (17 updates) | ✅ Closed | Rust 依赖大版本批量升级（含 uuid 1.24.0→1.26.0、base64 等 17 项） | [查看](https://github.com/nearai/ironclaw/pull/8003) |

**当日合并亮点归纳**：WebUI 大规模类型安全落地（#8039 单 PR 覆盖 64 个组件）意味着生产代码全面跳出 `@ts-nocheck` 的"类型黑洞"，配合 #8037 的默认分支基线 ratchet 机制可防止回潮——这是从编码规范到可执行约束的一次完整闭环。CI 侧 #8050 和 #8045 并行缓解 Rust 冷编译等待与 CLI 冒烟测试抖动问题，直接提升全仓库回归效率。

## 4. 社区热点

当前社区讨论集中在 3 个议题（24h 无评论破纪录 PR——口径上以评论数为基准均未超过 1，但 #8009 为唯一带评论的活跃 Issue）：

**#8009 MCP egress errors flatten to "response_error"（Issue，OPEN，24h 评论 1）**
[查看 Issue](https://github.com/nearai/ironclaw/issues/8009)
- 作者 `pranavraja99` 指出现行 `mcp_http_error` 将所有 `RuntimeHttpEgressError` 折叠为稳定原因码，底层 reason 与字节计数全部丢失，导致 hosted-MCP 发现失败时调用者只收到单一的 `"response_error"` token——**无上下文、不可诊断**。这是典型的可观测性缺口：错误被规范化到"机器可处理"程度的同时，牺牲了人类排查所需的 raw signal。

**#8035 Remove `@ts-nocheck` from WebUI production components（Issue，CLOSED）**
[查看 Issue](https://github.com/nearai/ironclaw/issues/8035)
- `italic-jinxin` 发起并已关闭，对应 PR #8037/#8039/#8040 已完成合并/待合并。意图：清空 Chat、Settings、Extensions、Admin、Automations、Logs、Jobs、Projects 等全部生产前端模块中的 `@ts-nocheck`。展示了一条"Issue 驱动→PR 批量落地"的高效协作模式。

**#8041 Wrong `FailureKind` sends model into unrecoverable state（Issue，OPEN）**
[查看 Issue](https://github.com/nearai/ironclaw/issues/8041)
- `standardtoaster` 指出 `FailureKind` 封闭词表中的语义错配：`InputEncode` 本意是"参数写错，改后重试"，实际若用于表达非输入类故障，模型会被引导进无法恢复的循环。与 #7985（memory read 中 missing document 误报 input 编码错误）形成呼应——**这是跨模块的系统性错误分类误用问题**。

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | 问题 | 状态 | 对应修复 |
|---|---|---|---|
| 🔴 高 | **#8041** 工具失败类型错配（wrong `FailureKind`）会把模型送去无法恢复的状态。如 `InputEncode`（参数错→重试）被用于表达其他类型的域故障，模型将在错误假设下无限重试/误判 | OPEN，无 PR | 无对应修复，需审视 FailureKind 与 host runtime 映射 |
| 🟡 中 | **#8009** MCP egress 错误全部折叠为 `"response_error"`，丢失底层 reason 与字节计数，无法诊断 hosted-MCP 发现失败 | OPEN，24h 内获 1 条评论 | 无 |
| 🟢 低 | **#8035** 生产组件残留 94 处测试侧 `@ts-nocheck`（合并范围含测试基础设施） | CLOSED | #8037/#8039/#8040 合计移除；#8040 单 PR 移除全部 94 条测试侧指令 |
| 🟢 低 | CLI smoke-test 就绪探测不实（banner 即通，端口未监听） | CLOSED | #8045 已修复（TCP 回环就绪确认） |
| 🟢 低 | **#8051** Slack/Telegram 回复把早期叙述性模型输出当最终答案返回（"Let me find the conversation first."） | CLOSED | #8051 已修复 |

**可靠性信号判断**：#8009 与 #8041 虽低危频发但指向系统根基——前者是错误路径上的信息保全问题，后者是封口词表与被映射域语义的系统性错配，建议尽快排期定位根因。

## 6. 功能请求与路线图信号

**可能纳入下一版本的功能与验证信号：**

- **MCP 错误信息保留（#8009）**：错误折叠丢上下文已获讨论热度，叠加 `anonymous` 评论者的推进，预计会推动 egress 层引入结构化原因字段/字节计数透传的 fix；方向与 #8041 的 FailureKind 语义校准需求叠加后，可能形成一轮错误模型重构。
- **前端运行时类型校验（#8038，XL size，OPEN）**：请求构建前先拒绝缺失的 thread/run/gate 标识符，并用运行时解码器（runtime decoders）替换宽松 JSON 传输——落地后所有 API 边界将具备 pre-invocation 拒绝能力，可作为错误上报质量的先决基础。
- **Session-event transport 统一 + web-app run-completion 通知（#8010，XL size，OPEN）**：按批准的设计文档端到端实现统一 WebUI 会话事件传输（typed stream contract + bearer 鉴权多路复用 SSE），并将 web-app run 完成推送到端侧——需求源是终端用户在 web-app run 完成时希望得到主动通知的使用场景，指示交互性延伸方向。
- **知识图谱基线 refresh 流程自动化（#7988，CI bot 每日生成）**：已由 nightly workflow 自动刷新代码库记忆快照，保障 agent 侧代码记忆体与默认分支的最新状态对齐，预计将持续稳定运转。

## 7. 用户反馈摘要

来自 Issue 评论与 PR 摘要的真实声音提炼：

**正向信号：**
- Slack/Telegram 集成在 live QA（SHA `51582d3930`）中暴露"双语音混用"问题，维护者 `BenKurrek` 在 #8051 中明确定义 **"answer = current model call's text，earlier calls 一律算 narration"** 并修复——这类"渠道端内容串扰"修复直接提升多平台用户体验的一致性感知。
- CI 重构（#8050）以实测数据兜底（三组参考运行对比冷编译开销），说明开发者对"等待 CI"的高成本有切肤之痛，自动化基建投入获得正反馈。

**痛点信号：**
- hosted-MCP 服务发现失败时，用户（作者 `pranavraja99`）对只能拿到扁平 `response_error` 表达强烈不满——**"完全无法诊断"是明确的存在性痛点**，字节计数等原始信号的缺失使得远端 egress 排障几乎盲测。
- 模型端工具失败后的语义错配（#8041）被指为"把模型送进无法自救的境地"，暗示代理框架中的错误语义对用户体验已是实质性影响项。
- 用户对前端 `@ts-nocheck` 堆积形成共识性不满（#8035 一次性清除 134 处指令），既成编码负担直接转化为维护痛点。

## 8. 待处理积压

提醒维护者关注下列长期未决项：

| 长期项 | 已开盘 | 当前状态 | 建议 |
|---|---|---|---|
| **#7985** fix(memory): missing document 应视为域失败而非 malformed request（`MemoryServiceError::input()` 误映射 `FailureKind::InputEncode`，误导模型重试） | 2026-08-28 | OPEN，近 5 日无维护者回复 | 与 #8041 属同一根源，若确认合并处理可显著降低模型的无效重试行为；已具备 `standardtoaster` 提供的可合并修复，建议排期审查 |
| **#7835** chore(deps): bump actions group 5 项更新（含 anthropics/claude-code-action 1.0.183→1.0.210 等） | 2026-08-23 | OPEN，10 日未合并 | CI 依赖低风险但连续滞后；同类 #8003（17 项 rust 升级）、#8049（19 项 rust 升级）已陆续合入或排队中，可考虑将 #7835 与该组批量合并以压缩存量 |
| **#8010** feat(webui): session-event transport 统一 + 运行完成通知（XL，risk: medium） | 2026-08-31 | OPEN，无阻塞性评论 | 设计已批准近 3 周，属大变更需 review 窗口；该功能与 #8037–#8040 类型改造有重叠代码面，建议在类型合并稳定后立即推进避免冲突反弹 |
| **#7988** CI bot 每日刷新代码库知识图谱 | 2026-08-29 | OPEN，weekly refreshed | 自动化 bot 型 PR 高频产生但积压；建议建立 bot-PR 的 auto-merge 阈值（如测试全绿即自动合入）降低维护负担 |

---

*本日报基于 IronClaw（github.com/nearai/ironclaw）2026-09-03 的 GitHub 实时数据生成，所有条目以原始 issue/PR 内容为准。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

```markdown
# LobsterAI 项目动态日报 — 2026-09-03

## 1. 今日速览

项目今日活跃度中等。24小时内共有 6 条 Issue 更新与 9 条 PR 更新，其中新开 Issue 1 条（#2601），关闭 Issue 2 条（均为数日前创建后今日标记关闭的 stale 条目）。PR 方面，今日合并/关闭 4 条（含 1 条 release 分支合并，代表 2026.8.31 版本发布工作已合入主干），另有 5 条长期积压的 PR 处于待合并状态。无新版本发布（Release tag 层面）。值得关注的是，多条 3 月底创建的 stale Issue/PR 至今仍在 with no resolution，项目在技术债清理和响应速度上存在一定风险信号。

## 2. 版本发布

过去 24 小时无新 Release 发布。（注：今日合并的 PR #2600 为 2026.8.31 版本发布准备分支，其合入标志着该版本内容已进入主干。）

## 3. 项目进展

今日合并/关闭的 4 条 PR 覆盖了 UI 文案、IM 布局、核心功能和版本发布四个方面：

- **新版本合入（#2600）**：[Release: 2026.8.31](https://github.com/netease-youdao/LobsterAI/pull/2600) 由维护者 fisherdaddy 提交并合并。该 PR 聚合了引导式首次运行体验、Library 浏览加速、模型生成视频分享、登录/配额提示优化及 Windows 安装包加固等多项改动，标志着 2026.8.31 版本全面合入主干。
- **交互式内置浏览器回归（#2602）**：[feat(browser): restore interactive in-app browser](https://github.com/netease-youdao/LobsterAI/pull/2602) 合入，为 2026.9.4 release line 恢复应用内 Agent 浏览器，同时恢复浏览器 MCP bridge、持久化 profile 及加密凭据存储和审批门控自动填充能力。
- **IM 机器人卡片布局优化（#2599）**：[fix(im): improve bot card layout](https://github.com/netease-youdao/LobsterAI/pull/2599) 合入，多实例机器人卡片限制为两列响应式排布，空添加卡片保持紧凑并垂直居中。
- **多实例配额文案修正（#2603）**：[fix(i18n): refine voice quota exhausted copy](https://github.com/netease-youdao/LobsterAI/pull/2603) 合入，更新中文语音配额耗尽提示文案，对齐免费试用订阅描述和时间格式化。

## 4. 社区热点

今日唯一新开的 Issue 获得了最多结构性关注：

- **#2601 [Support rendering MCP Apps / Prefab UI in the desktop client](https://github.com/netease-youdao/LobsterAI/issues/2601)**：由 duyuntaoGG 提出，讨论度最高（含 1 条维护者评论）。诉求是让桌面客户端支持渲染遵循 `io.modelcontextprotocol/ui` 规范（如 PrefectHQ Prefab / FastMCP）的 MCP 服务器返回的交互式 HTML UI。这是 MCP 生态向"应用化"演进的重要信号，用户希望 LobsterAI 客户端能在此方向保持生态兼容，对 Agent 能力的沉浸式呈现具有前瞻意义。

## 5. Bug 与稳定性

今日更新的开放 Issue 中集中暴露出三类并发与一致性问题，均来自 3 月底报告、至今仍开放：

- **高严重度 — CoWork 并发重入导致消息损坏/重复（#1089）**：[CoworkRunner startSession/continueSession 无重入保护](https://github.com/netease-youdao/LobsterAI/issues/1089)。IPC 层以 fire-and-forget 方式调用异步方法，同一 sessionId 并发调用可导致流式消息损坏和重复。**状态**：3 月底报告，无明确 fix PR 在途；但今日 PR #1087（修复 continueSession 重复错误消息）与其同域，属渐进式缓解。
- **高严重度 — Prefetch 异步回调 turnToken 未校验（#1088）**：[Prefetch 异步回调不校验 turnToken，可能跨轮次污染](https://github.com/netease-youdao/LobsterAI/issues/1088)。`prefetchChannelUserMessages` 异步恢复后未校验 turn 归属，可能导致跨轮次消息注入。**状态**：开放中，1 条评论，无对应 PR。
- **中严重度 — 版本管理风险（#1082）**：[package.json 中 openclaw.version 固定 v2026.3.2 不支持新版本](https://github.com/netease-youdao/LobsterAI/issues/1082)。用户反馈策略性版本锁定存在合规风险。**状态**：开放中。

今日另有 2 条 Issue（#1556 文档 404、#1552 Markdown 预览文件卡片功能请求）被标记为 stale 后关闭。

## 6. 功能请求与路线图信号

- **文件预览功能请求（#1552）**：[AI 产物 Markdown 预览及文件卡片支持](https://github.com/netease-youdao/LobsterAI/issues/1552)（今日关闭，属 stale 清理）。核心诉求是 Write 工具完成后展示常驻文件卡片（FileCard），支持 Markdown/HTML 产物的应用内预览，避免全文粘贴占用对话空间。这一需求与 PR #2602 恢复内置浏览器的方向同属"AI 产物可视化"主线，值得维护团队在后续迭代中重新评估（尽管该 Issue 已关闭）。
- **MCP Apps / Prefab UI 渲染支持（#2601）**：新需求，指向客户端对 MCP UI 扩展规范的兼容。若纳入路线图，将显著提升桌面客户端作为"Agent 工作台"的交互上限。

## 7. 用户反馈摘要

- **文档可访问性**：#1556 报告官方 IM 机器人配置指南链接 404，说明文档更新维护存在断裂，影响新用户上手路径。
- **合规压力（来自真实业务场景）**：#1082 中用户提到"国家互联网应急中心有要求更新到最新版本"，表明部分用户（或用户所在组织）受监管要求驱动，对 LobsterAI 内置依赖的版本锁定策略（openclaw.version 2026.3.2）有显式更新诉求，存在合规风险顾虑。
- **错误体验冗余**：PR #1087（待合并）指出 continueSession 失败时用户会看到两条格式不一致的错误消息，造成困惑——反映错误提示路径的展示逻辑有待统一。

## 8. 待处理积压

以下条目已存在 5 个月以上、技术价值明确但仍处于开放且无明确时间表的状态，建议维护者优先介入：

- **PR #1078（2026-03-30）**：[定时任务失败时向 IM 推送告警](https://github.com/netease-youdao/LobsterAI/pull/1078)。解决成功/失败通知不对称问题，功能面完整，5 个月未合入。
- **PR #1079（2026-03-30）**：[Cowork「当前进程」右侧面板（工具记录 + diff 视图）](https://github.com/netease-youdao/LobsterAI/pull/1079)。~400 行实现，功能描述详细，与 Agent 可观测性直接相关，长期未合入。
- **Issue #1088 / #1089（2026-03-31）**：并发与异步回调安全类严重缺陷，分别涉及 Prefetch turn 校验缺失和 CoworkRunner 重入保护缺失，5 个月未关闭且无对应修复 PR 合入，对会话数据一致性构成潜在威胁。
- **PR #1081（2026-03-30）**：[MCP 同步提示国际化 & 编辑弹窗滚动条圆角修复](https://github.com/netease-youdao/LobsterAI/pull/1081)。属小而明确的 UI 完善型改动，长期滞留。
- **PR #1087（2026-03-31）**：[继续会话失败时重复错误消息修复](https://github.com/netease-youdao/LobsterAI/pull/1087)。与 #1089 同域，有独立的体验修复价值，长期未合入。
- **Issue #2601（2026-09-03）**：[MCP Apps / Prefab UI 渲染支持](https://github.com/netease-youdao/LobsterAI/issues/2601)。新开但方向明确，若视为路线图信号，建议维护者尽早给出方向性回应，避免进入新一轮 stale 清退。
```

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-03

## 1. 今日速览

Moltis 项目今日保持健康的开发活跃度：24 小时内产生 2 个新 Issue、3 个待合并 PR 及 2 个版本发布。核心亮点来自贡献者 GTanger 提交的 `fix(hooks): complete lifecycle dispatch` PR（#1257），直接针对今日报告的两个问题——hook 生命周期未派发及 tool_call_id 缺失——体现了快速修复闭环能力。当前无已合并 PR 和已关闭 Issue，但配套修复 PR 已在流程中，项目处于"问题已定位、修复待合入"的集中推进期。

## 2. 版本发布

今日发布 **2** 个新版本，均为补丁级滚动版本：

- [20260902.03](https://github.com/moltis-org/moltis/releases/tag/20260902.03) — 最新版本
- [20260902.02](https://github.com/moltis-org/moltis/releases/tag/20260902.02)

注意：版本号格式看似为日期滚动构建（`YYYYMMDD.NN`），同一天内有多个构建号递增，暗示高频 CI 发布节奏。发布说明未提供详细变更日志，建议关注 PR #1253/#1257 的合入状态以判断上述版本是否已包含对应改动。

## 3. 项目进展

今日无已合并 PR。当前 3 个 PR 均处于开放状态，其中值得重点跟踪的包括：

- **[#1257 fix(hooks): complete lifecycle dispatch](https://github.com/moltis-org/moltis/pull/1257)** — 核心修复 PR：补齐 `AgentEnd`、`MessageSending`、`MessageSent` 钩子的实际派发逻辑，并为 `BeforeToolCall`、`AfterToolCall`、`ToolResultPersist` 增加可选的 `tool_call_id`。该 PR 直接回应 Issue #1255 和 #1254，一旦合入将解决生命周期钩子失效的缺陷。
- **[#1253 feat(reasoning): add max effort level](https://github.com/moltis-org/moltis/pull/1253)** — 功能增强：在共享 `ReasoningEffort` schema 中新增 `max` 等级，支持 `@reasoning-max` 模型后缀解析，并通过 OpenAI Codex Responses API 透传，同时为不支持最高等级的服务商做钳制处理。

开发者的核心投入集中在三点：Agent 生命周期钩子系统完整性、多服务商推理等级（reasoning effort）对齐、前端依赖安全更新。

## 4. 社区热点

今日无高评论量或高反应量的讨论帖，所有 Issue/PR 评论数均为 0。但以下两条最具关注价值：

- **[Issue #1255: AgentEnd 等钩子声明但从未派发](https://github.com/moltis-org/moltis/issues/1255)** — 指出核心生命周期钩子形同虚设，这对依赖钩子机制做观测、日志或拦截的用户影响深远，虽无显式热度指标，但性质严重。
- **[PR #1253: 添加 max 推理等级](https://github.com/moltis-org/moltis/pull/1253)** — 功能型 PR，反映推理能力上限扩展的前沿需求。

两者的共同点：都出自同一贡献者 GTanger（今日 2 个 Issue + 2 个 PR），显示其对该项目代码库有深度理解。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | Fix PR |
|---------|-------|------|---------|
| 高 | [#1255](https://github.com/moltis-org/moltis/issues/1255) | `AgentEnd`、`MessageSending`、`MessageSent` 三个生命周期钩子已声明但从未被派发，用户在 Agent 生命周期关键节点无法通过钩子感知事件 | ✅ [#1257](https://github.com/moltis-org/moltis/pull/1257) 已提交 |
| 中 | [#1254](https://github.com/moltis-org/moltis/issues/1254) | 进程级事件模型中缺少稳定的工具调用 ID，无法跨钩子关联同一次 tool call 的完整链路 | ✅ [#1257](https://github.com/moltis-org/moltis/pull/1257) 已提交 |

两条 Issue 均已在相同版本（`20260902.01`）中复现，且修复 PR 均已存在，预计将在下一轮合并窗口中解决。

## 6. 功能请求与路线图信号

- **[稳定工具调用 ID（Issue #1254）](https://github.com/moltis-org/moltis/issues/1254)** — 用户希望在钩子负载中暴露稳定的 `tool_call_id` 以便端到端关联一次工具调用。对应 PR #1257 已实现该需求（含向后兼容的 JSON payload 设计），有较大概率在下一版本（`20260902.04+`）中落地。
- **[max 推理等级（PR #1253）](https://github.com/moltis-org/moltis/pull/1253)** — 向 `ReasoningEffort` schema 新增 `max` 等级并透传至 OpenAI Codex Responses API。若合入，将为需要深度推理的 Agent 任务打开更高能力上限，并引入 `@reasoning-max` 模型后缀语法，属面向高级用户的 API 扩展。

## 7. 用户反馈摘要

今日无评论内容可供提炼（所有 Issue/PR 评论数均为 0）。有限信号来自提交者 GTanger 在 Preflight Checklist 中的复现陈述：

- 用户在官方最新版 `moltis 20260902.01` 上完整复现了钩子不派发的问题，且已预先排查过现有 Issue 库，确认无重复报告——表明排查流程规范、报告质量高。
- 钩子系统"进程级、每次事件一个进程"的设计是用户提出 `tool_call_id` 需求的根本驱动场景，暗示真实部署可能依赖多进程钩子链路做审计追踪。
- 报告者主张 `tool_call_id` 的加入需保持旧 JSON payload 兼容性，反映用户对大版本破坏性变更的敏感度较高。

## 8. 待处理积压

当前数据集中无明显长期未响应的积压项——所有双 Issue 和 3 个 PR 均为近 24 小时创建。以下为需维护者优先关注的动作项：

- 及时 review 并合入 **[#1257](https://github.com/moltis-org/moltis/pull/1257)**，该 PR 同时解决 #1254 和 #1255 两个未关闭 Issue，建议通过 PR 描述中引用的方式关联关闭。
- 确认 **[#1256](https://github.com/moltis-org/moltis/pull/1256)（dependabot 提交的 browserslist 安全更新）** 可安全合入，属常规依赖维护。
- 评估 **[#1253](https://github.com/moltis-org/moltis/pull/1253)** 是否纳入下一里程碑，该功能涉及 schema 变更与模型后缀解析，建议补充测试覆盖"不支持 max 的服务商钳制"逻辑后再合入。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报

**日期：2026-09-03**


## 1. 今日速览

项目今日活跃度极高：24小时内共产生 26 条 Issue 更新（16 条活跃）和 29 条 PR 更新（20 条待合并），并发布 2 个新版本（v2.2.0 正式版及 v2.2.0-beta.7），标志着 QwenPaw Hub 多用户自托管能力正式落地。社区反馈以 Bug 报告为主，其中**安全沙箱绕过（#7511）** 与 **危险指令逃逸（#7443）** 两条安全相关 Issue 引发最多关注，但前者已被关闭。项目合并节奏良好，9 条 PR 于今日合并或关闭，同时有多个功能 PR（移动端体验、原生记忆管理等）处于 Open/Review 状态，整体健康度**偏高**，唯安全类问题的处理透明度值得关注。


## 2. 版本发布

### v2.2.0（正式版）

**核心新功能：QwenPaw Hub**
- 支持自托管多用户 QwenPaw Hub，提供本地进程或 Docker 两种运行时
- 引入工作区级访问控制、凭据管理与反向代理支持 ([PR #7112](https://github.com/agentscope-ai/QwenPaw/pull/7112))

> ⚠️ 数据概览中 release notes 内容被截断（"QwenPaw Data - D..."），建议维护者补全，以便用户了解完整变更清单及是否存在破坏性变更。

### v2.2.0-beta.7（预发布）

**包含的修复：**
- `fix(memory)`: 标准化不同后端间的 embedding 维度差异 ([PR #7465](https://github.com/agentscope-ai/QwenPaw/pull/7465)) — 直接关联 Issue #7469 中报告的后台 embedding 任务报错问题
- `fix(webui)`: 为 M 系列组件添加深色模式覆盖（内容截断）

**迁移注意事项：** beta.7 包含 embedding 维度修复，建议使用 ReMe 长期记忆 + OpenAI 兼容 embedding 后端的用户优先升级验证。


## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 内容 | 意义 |
|---|---|---|
| [#7520](https://github.com/agentscope-ai/QwenPaw/pull/7520) | `feat(agent)`: 新增 protected execution contract，并拆分 Goal 模式中的 complete/blocked 状态判断 | 为工作区 prompt 化铺路，改进 Agent 执行合同语义 |
| [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | `feat(memory)`: 新增 Auto Fin 作为定时长期记忆源，升级 ReMe 至 0.4.1.11 | 长期记忆框架功能扩展，修复运行时状态收集 |
| [#7523](https://github.com/agentscope-ai/QwenPaw/pull/7523) | `fix(chat)`: 流式输出期间同步会话 ID 映射 | 直接回应 Issue #7512（会话切换被阻塞），支持多会话在生成中自由切换 |
| [#7522](https://github.com/agentscope-ai/QwenPaw/pull/7522) | `chore`: 版本号升至 2.2.1b1 | 新迭代开发已启动 |

### 值得关注的待合并 PR

- **QwenPaw Mobile 原生移动端体验**（[#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)，标注 DO NOT MERGE，Expo/React Native，覆盖 Android/iOS）
- **Make Skill v2**（[#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509)，审批准入的 script-based 技能发布工作流，标记 Ready for Merge）
- **PowerContext 可插拔长期记忆后端**（[#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)，first-time contributor，Under Review 已超两周）

**小结：** 项目在会话稳定性（#7520、#7523）、记忆系统（#7441）两个方向均有关键推进，且 v2.2.0 的 Hub 能力落地意味着产品形态正在从单机工具向多用户服务平台演进。


## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 状态 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#7511 安全沙箱被突破](https://github.com/agentscope-ai/QwenPaw/issues/7511) | 7 | ✅ CLOSED (09-03) | 用户声称沙箱被绕过，附知乎分析链接；关闭原因和数据未见披露 |
| 2 | [#7450 主-agent 不主动查子-agent 状态](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 7 | Open | 多子 agent 任务中，主 agent 被动等待用户询问"进度如何"才同步子任务状态，影响复杂任务执行效率 |
| 3 | [#7443 危险指令易逃逸](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 6 | Open | 安全对齐问题：危险指令可通过某种方式绕过模型安全限制 |
| 4 | [#7417 Console 流重复文本块](https://github.com/agentscope-ai/QwenPaw/issues/7417) | 6 | ✅ CLOSED | 前端 Console 流式输出期间重复显示大段文本，结束时有聚合副本 |

**分析：** 今日讨论热度集中于**安全与治理**（#7511、#7443、PR #7525）以及**多 Agent 任务编排体验**（#7450）。其中 #7450 与 #7441（Auto Fin 记忆）方向一致——Agent 自动化程度不足是当前用户的核心痛点。安全类 Issue 的讨论虽多但更新信息少（#7443 已 3 天无维护者回应），建议团队保持透明沟通。

**值得注意的矛盾点：** Issue #7511（安全沙箱被突破）在报告当天即被关闭，而同源 Issue #7443 仍处于打开状态且无维护者回应。关闭 #7511 是否意味着确认误报、已修复还是重复报告？社区需要明确说明。


## 5. Bug 与稳定性

### 🔴 高危

| Issue | 描述 | 状态 |
|---|---|---|
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | **安全沙箱被突破**（含外部分析链接），当天即被关闭 | 已关闭，未见修复 PR 关联 |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | **危险指令可绕过安全限制**（v2.1.0，含知乎演示链接），已 Open 3 天无维护者回复 | ⚠️ 暂无 fix PR 关联 |
| [#7525](https://github.com/agentscope-ai/QwenPaw/pull/7525) | 治理策略修复：CRITICAL 安全发现曾被 `GovernancePolicy.evaluate()` 无条件立即拒绝，与安全 UI 配置相矛盾（修复 #7496） | 有 fix PR（今日新增） |

### 🟡 中危

| Issue | 描述 | 关联修复 |
|---|---|---|
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe 后台 embedding 任务失败 — `as_embedding:default accessed before start()`（v2.2.0b5） | ✅ PR #7465 已合入 beta.7 |
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | v2.2.0-beta.7 Desktop 中 `/memory/status` 返回 500 | 暂无 fix PR |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | 访问局域网 LLM Server 频繁 client disconnect，导致重试直至超时 | 暂无 fix PR |
| [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531) | OpenCode API 新增强制 `x-opencode-session` header 要求，当前集成可能失效 | 暂无 fix PR |
| [#7529](https://github.com/agentscope-ai/QwenPaw/issues/7529) | 启用 Langfuse 监控后工具输出（Observation output 字段）为空 | ✅ 有 fix PR #7532（待合并） |
| [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console 流式输出期间出现大段重复文本，结束时追加聚合副本（v2.2.0b3） | 已关闭，疑似修复 |
| [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513) | deepseek-v4-pro 对话中工具调用与 QwenPaw 混合出错 | 暂无 fix PR |

### 🟢 低危

| Issue | 描述 | 状态 |
|---|---|---|
| [#7467](https://github.com/agentscope-ai/QwenPaw/issues/7467) | 2.2.0b3 Desktop 中 loop.rubric 强制确认回合与 Console 自动折叠交互异常，隐藏首条实质回复 | 已关闭 |
| [#7512](https://github.com/agentscope-ai/QwenPaw/issues/7512) | v2.1.0 中会话生成期间无法切换（与 #7512 同类） | ✅ 已修复于 PR #7523 |
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | 合并 PR #7337（max_tokens→max_output_length 迁移）后自定义 Provider 模型加载失败 | 已关闭 |
| [#7528](https://github.com/agentscope-ai/QwenPaw/issues/7528) | 废弃 Issue（内容为空） | 已关闭 |

**观察：** 今日 Bug 修复合入速度较快（#7469→beta.7、#7512→#7523），Langfuse 输出为空的问题已有针对性 PR（#7532）。**最紧迫的未决风险仍然是 #7443**——安全绕过的严重性最高、Open 时间最长且无人响应。


## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 对应/可能对应 PR | 预估纳入版本 |
|---|---|---|---|
| 手机远程连接桌面端（查看/切换会话、收发消息、处理工具调用审批、工作区文件访问） | [#7519](https://github.com/agentscope-ai/QwenPaw/issues/7519) | [PR #7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)（QwenPaw Mobile，Expo/React Native） | 📅 较远期（PR 标注 DO NOT MERGE，处于早期） |
| 远程 WebUI 首次加载对话内容提速 | [#7518](https://github.com/agentscope-ai/QwenPaw/issues/7518) | 暂无对应 PR | ❓ 未知 |
| 支持消息按钮交互（上一轮返回选项按钮、点击后继续对话 + 自定义 channel） | [#7533](https://github.com/agentscope-ai/QwenPaw/issues/7533) | 暂无对应 PR | ❓ 未知 |
| Native 上下文压缩时保留 agent persona/对话风格 | [#7527](https://github.com/agentscope-ai/QwenPaw/issues/7527) | 暂无对应 PR | ❓ 未知 |
| PowerContext 可插拔记忆后端 | [PR #7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | 本身即为功能 PR（first-time contributor） | 待 Review，状态不明 |

**其他信号：**
- QwenPaw Creator app-plugin（[PR #7486](https://github.com/agentscope-ai/QwenPaw/pull/7486)）：运行时通知总线 + 异步委派、多时间轴 A/B 对比、T2V/I2V/S2V 调度、专业媒体 prompt、Windows hardening 及 Docker 部署，功能丰富但内容宽泛，建议维护者拆细评审
- QwenPaw Hub 多用户能力（v2.2.0）上线后，预计会收到更多关于**工作区权限管理**与**多租户隔离**的反馈


## 7. 用户反馈摘要

**核心痛点：**

1. **多 Agent 任务缺乏主动性**（#7450）：用户指出 gpt-sol 场景下主 agent 在子 agent 卡住时不会主动介入，必须用户主动追问才检查状态。"长时间没有任务动静"——Agent 自主性不足直接影响复杂任务的可用性，是高价值优化方向。

2. **安全信任受损**（#7443、#7511）：用户连续提交安全绕过报告并附第三方安全分析，说明其在主动进行安全测试。虽然 #7443 目前仅 0 👍 且评论未进一步增长，但安全报告的响应速度会影响核心用户的信任度。

3. **LAN 环境下 LLM 访问不稳定**（#7505）：用户使用 LM Studio Server + qwen3.8 flash next 时遭遇 client disconnect 导致频繁重试直至超时。反映 LAN 部署场景的健壮性待加强（可能与 keep-alive 或超时配置有关）。

4. **第三方 Agent/工具链集成兼容性**（#7431 codex 接入空响应、#7513 deepseek 工具混合错乱、#7531 OpenCode API 变更）：多个 Issue 指向第三方生态对接的脆弱性。其中 #7531 属于**外部 API 变更导致的不兼容**，需要项目方主动跟进上游。

5. **移动/远程访问需求强烈**（#7519、#7518）：用户期望通过手机访问桌面端查看/审批工具调用——当前"离开电脑即失联"的限制影响 Agent 的实用性。

**正面信号：**
- 多数 Bug（#7452、#7512、#7474）在 1-3 天内得到关闭或修复，用户反馈处理效率尚可
- #7523 的修复直接回应用户诉求（生成中切换会话），社区可见正反馈

**Langfuse 监控用户**（#7529）：工具执行正常但追踪中 output 为空，虽不影响核心功能但影响可观测性信任度——已有 PR 跟进，属积极信号。


## 8. 待处理积压

### ⚠️ 高优先级（安全/稳定性）

| 项目 | 天数 | 说明 |
|---|---|---|
| [#7443 危险指令逃逸](https://github.com/agentscope-ai/QwenPaw/issues/7443) | Open 3 天 | 安全绕过报告，**无任何维护者回应**，建议立即响应并评估 |
| [#7080 PowerContext 记忆后端](https://github.com/agentscope-ai/QwenPaw/pull/7080) | PR Open 17 天 | first-time contributor 的功能 PR，长时间无 reviewer 回应可能导致贡献者流失 |
| [#6936 工具参数 string 类型强转](https://github.com/agentscope-ai/QwenPaw/pull/6936) | PR Open 22 天 | 处理模型输出数字却被 schema 声明为 string 导致的校验失败，影响面广（LLM 工具调用），Under Review 状态超 3 周 |

### 中优先级

| 项目 | 天数 | 说明 |
|---|---|---|
| [#7378 QwenPaw Mobile](https://github.com/agentscope-ai/QwenPaw/pull/7378) | Open 6 天 | 标注 DO NOT MERGE，功能方向明确（与 #7519 用户诉求对齐），建议明确时间线以管理社区预期 |
| [#7431 codex 接入空响应](https://github.com/agentscope-ai/QwenPaw/issues/7431) | Open 3 天 | 第三方 agent 接入较深度的问题，涉及火山方舟网关，建议主动跟进避免用户流失 |

### 观察

- **Issue #7450（主-agent 主动性）** 为 Open 状态且评论活跃（7 条），如近期无对应 PR，建议维护者标注计划或给出临时 workaround（如"定期主动查询"配置项），提升用户对路线图的可见度。
- PR #7509（Make Skill v2）已标记 "Ready for Merge"，但未在今日合并列表中，留意其后续合入时间。

---

*数据来源：CoPaw 仓库（github.com/agentscope-ai/CoPaw）Issue 与 PR 元数据、Release notes。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-09-03

## 1. 今日速览

ZeroClaw 项目今日保持高活跃度，过去 24 小时共产生 50 条 Issue 更新和 50 条 PR 更新。RFC 讨论持续主导社区生态，多个高风险的架构级提案（#9487、#9488、#6850）正处于密集修订与评审阶段。值得关注的信号包括：多条 `needs-author-action` 标记的 PR 等待作者回应（如 #10566、#10552），同时社区在网关功能（图片上传 #10544、`/upload` 命令 #10578）与多模态管线修复上呈现集中的开发投入。OpenSSL/依赖更新 PR #10587 已进入 rebase 阶段。整体项目健康度良好，讨论深度与工程推进并重。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

过去 24 小时合并/关闭的 PR 为 6 条（未展示细节数据），主要贡献集中在以下已提交的待合并 PR（风险标记暗示多数尚未合并，仍在评审管道中）：

- **Discord 转录通道修复** (#10494)：修复 Discord 通道转录管理器未绑定路由的转录 provider 的问题，预计修复了基于全局配置空白导致的组配置缺陷。
- **email/IRC TLS 依赖门控重构** (#10493)：将 email 和 IRC 通道的 TLS 依赖改为可选门控，减少默认构建体积；已标记为 stacked on #10467。
- **zerocode 日志路径展示** (#10474)：在事件负载不可用时显示当前日志路径；已进入待合入状态。
- **运行时集成信息 i18n 本地化** (#10472)：将集成信息界面文案接入 Fluent 目录，避免硬编码英文。
- **RFC 流程与 AI 辅助评审修订**：#9330（AI-assisted PR review SOP）与 #10366（PR review 证据与 freshness warning）均在同日更新至接受状态，反映出评审流程在 ZeroClaw 协作中的核心地位。
- **跨通道图片能力补全**：#10544 增加 web dashboard 图片上传端点与拖放 UI——此前 Telegram/Signal/Matrix/Discord 均可向 agent 发送图片，Web 端是缺口之一。

> 注意：以上多数 PR 仍标注为 OPEN 状态，实际合入需后续确认。

---

## 4. 社区热点

以下为过去 24 小时讨论最活跃的议题（按评论数排序）：

- **#9487 RFC: Runtime-owned conversation sessions and transport surface adapters** — 32 条评论。零爪架构中将会话所有权从通道/UI 层上移到 runtime 层，并引入传输适配器接口。已到 Revision 5，且明确指出 Revision 4 的投票作废重开，说明维护组对该方案讨论强度很高。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9487

- **#6850 RFC: Decouple memory lifecycle policy from storage backends** — 25 条评论。提议分离持久存储与内存生命周期策略（合并与治理），避免 `Memory` trait 承担过多职责。已获接受（status:accepted）。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6850

- **#9488 RFC: Unified file and attachment architecture for conversation surfaces** — 25 条评论。统一各对话表面对文件与附件的处理方式，同样是 Revision 10 级别的反复修订。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9488

- **#6996 RFC: Granular sandbox policy - filesystem restrictions** — 23 条评论。提出更细粒度的沙箱文件系统策略，对齐应用层路径准入与 OS 层沙箱后端（Bubblewrap/Landlock/Seatbelt）之间的漂移。
  https://github.com/zeroclaw-labs/zeroclaw/issues/6996

- **#9103 RFC: separate authoritative memory storage from optional enrichment connectors** — 19 条评论。在 2026-08-01 Core REVISE 投票后由维护者接管修订。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9103

- **#8396 RFC: Make wire protocol first-class in provider construction and onboarding** — 19 条评论。将 wire protocol 作为 provider 构造的一等公民。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8396

**热点背后**：过去数月集中讨论的核心可归纳为两类——(1) 将会话、文件、内存生命周期等横切能力从 channel/UI/工具层抽象到 runtime 层； (2) 通过 RFC 流程明确安全边界（沙箱、特权模型、multimodal 内容管线）。两者均直接服务于 ZeroClaw 向更大规模安装和更多渠道混合部署演进的需要。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| S2 | #10523 | Bootstrap 文件在 6000 字符处被截断，且操作者不可见（compact_context 下 AGENTS.md 等文件受影响，无感知截断风险较高） | OPEN | 无 |
| S2 | #10068 | 交互式 agent 会话上下文被限制在 32k，忽略配置 `max_context_tokens = 131072` | OPEN，已接受，in-progress | 无 |
| — | #9328 | `verifiable-intent` 约束评估未验证凭证链（可能造成信任边界被绕过，security 领域影响较大） | OPEN，in-progress | 无（需 maintainer 关注） |

新增 bug 类 PR（待合入的修复票）需注意：

- **#10555 fix(runtime): stop promoting path listings into image markers** — 修复将工具结果中的目录路径误转为 `[IMAGE:...]` 多模态标记的问题，避免导致 UI 将路径列表当图片处理。标记 needs-maintainer-review、risk:high。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10555

- **#10564 fix(providers): evict images per image, not per message** — 修复多图片消息中 max_images 计数以消息为单位导致图片未按张数正确逐出的问题。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10564

- **#10552 fix(providers): thread operator multimodal config into provider adapters** — 修复 provider 适配层独立 `prepare_messages` 时未将 operator 多模态配置传入的问题，导致 IMAGE 标记展开后实际没走配置允许的策略。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10552

---

## 6. 功能请求与路线图信号

- **RFC #9487 (会话表层与传输适配器)**、**#9488 (文件与附件统一架构)**：这两份 RFC 互为配套，是零爪向"统一、后端无关"架构迈进的信号；如获通过，将触及会话/附件在各 channel 间的一致语义。
- **RFC #10050 — Verbatim channel send**: 允许通过 gateway 直发消息而无需 agent 介入，弥补 47 个 `/api/*` 路径中无一条支持"原样发送"的空缺。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10050
- **RFC #10222 — Opt-in single-tool provider rounds**: 进入交互式 agent 与工具 loop 的模型控制权返回粒度改造，考虑到"工具批间无控制权返回"的体验限制。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10222
- **PR #10563 — Re-sample and flag replies claiming unreceipted actions**: 针对模型"叙述完成动作却未产生工具调用"的场景进行重采样与标记——可视为 tool_receipts 机制的安全补充，具备进入 vNext 的安全增强特征。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10563
- **PR #10544 + #10578 — Web 图片上传能力**: Web 端补齐了"与 agent 共享图像"的最后一公里；#10578 加入 `/upload` 斜杠命令，键盘可达性友好。这两个 PR 组合基本可确认 gate 下一版本 web 侧的多模态支持。
- **RFC #7822 — WASM 插件生命周期观察订阅 (PluginCapability::Observer)**: 插件系统向可观察性能力演进，维护者已接管修订并推进至 Revision 2。
  https://github.com/zeroclaw-labs/zeroclaw/issues/7822

---

## 7. 用户反馈摘要

- 多位用户明确指出"**Web 是唯一不能传图给 agent 的渠道**"（最初在 PR #10544 与相关 issue 中反复出现）；与 Telegram/Signal/Matrix/Discord 对比后认为该缺口的修复优先级高。
- #10068：交互式 agent 会话的 32k 上限与配置的 131072 严重不符，用户称"会话显示 ctx 15,538/32,000"，导致大上下文被无提示压缩，造成降级场景（Severity S2）。
- #10523/10507 类 issue/PR 评论中透露出对**静默截断/静默失败**的强烈不满——Bootstrap 文件 6000 字符截断在操作层看不到任何提示、WIT 版本错配也"read as a mysterious failure"，用户希望工具链给出可诊断的错误而非无声吞掉。
- 配置项 `compact_context` 下较长的 `AGENTS.md / SOUL.md / IDENTITY.md`（如编排 prompt 的组织用户）是 #10523 的重点影响人群，期望至少获得告警提示或可配置的截断长度。

---

## 8. 待处理积压

- **RFC #8692 — Maintainer decision queue for RFCs and design issues**：为 RFC/设计问题建立维护者决策队列的跟踪 issue 本身已悬置一个多月（7-04创建）。考虑到当前 10+ RFC 均挂在 `needs-maintainer-review` 下，这个队列工具若不被推进，拥堵可能进一步恶化。
  https://github.com/zeroclaw-labs/zeroclaw/issues/8692
- **Bug #9328 — verifiable-intent 不验证凭证链**：涉及安全领域、有 accepted/in-progress 标记，13 条评论仍无维护团队明确接管声明。安全凭证链缺口可能影响敏感操作响应，建议优先推进。
  https://github.com/zeroclaw-labs/zeroclaw/issues/9328
- **Bug #10523 — Bootstrap 截断对操作者不可见**：9 月 1 日创建，截止当前仍未见到关联 fix PR 或维护者评论。属于 S2 级别且对 prompt 工程影响直接，需要尽快接线。
  https://github.com/zeroclaw-labs/zeroclaw/issues/10523
- **PR #10566 / #10552 / #10555** 标记 `needs-author-action`——三处均涉及多模态内容安全或合规，虽为功能增强但停在等待作者修改，已连续 ≥1 天未动；建议提交方尽快补齐测试或回应 reviewer 请求。
  https://github.com/zeroclaw-labs/zeroclaw/pull/10566
  https://github.com/zeroclaw-labs/zeroclaw/pull/10552
  https://github.com/zeroclaw-labs/zeroclaw/pull/10555

---

**整体健康度评估**：ZeroClaw 本周期的核心特征为“高深度架构讨论 + 密集的安全/多模态 patch 管道”。RFC 机制运行良好（多个高热度提案均在安全推进），但维护者评审队列较长、部分关键安全 bug 缺乏明确 owner，值得项目组在接下来一周内关注 backlog 清理与决策节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*