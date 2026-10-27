# OpenClaw 生态日报 2026-07-11

> Issues: 437 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-11 03:20 UTC

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

# OpenClaw 项目日报 (2026-07-11)

---

## 1. 今日速览

过去 24 小时，OpenClaw 项目保持高度活跃：共更新 **437 条 Issue**（其中新开/重激活 250 条，关闭 187 条）和 **500 条 Pull Request**（待合并 329 条，已合并/关闭 171 条）。尽管没有新版本发布，但社区提交了大量 Bug 修复与功能增强 PR，尤其在内存泄漏、会话稳定性、多通道兼容性等方向取得实质进展。值得注意的是，P0 级内存泄漏问题 (#91588) 仍未关闭，同时有多条 P1/P2 级回归报告集中出现，项目健康度需持续关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭了 171 个 PR，以下为展示数据中涉及的重要关闭项（部分已在当日合并或标记关闭，代表功能推进或修复落地）：

| PR 编号 | 标题 | 状态 | 要点 |
|--------|------|------|------|
| [#104090](https://github.com/openclaw/openclaw/pull/104090) | fix(release): support frozen validation targets | 已关闭 | 修复版本发布流程中冻结验证目标的逻辑，提升发布可靠性 |
| [#104084](https://github.com/openclaw/openclaw/pull/104084) | feat: add conversation identity modes | 已关闭 | 新增对话身份模式，支持区分个人/服务/外部会话，完善受众路由 |
| [#103332](https://github.com/openclaw/openclaw/issues/103332) | [Bug]: openclaw can not run with codex/gpt5.6 in pi | 已关闭 | 修复 Codex 与 GPT-5.6 兼容性回归，Pi 运行时恢复正常 |
| [#99681](https://github.com/openclaw/openclaw/issues/99681) | Discord plugin does not auto-reconnect after 1006 WS close | 已关闭 | 解决 Discord 插件 WebSocket 断开后不自动重连的问题，避免强制重启 |
| [#68691](https://github.com/openclaw/openclaw/issues/68691) | Sandbox zombie processes remain under PID 1 | 已关闭 | 修复沙箱僵尸进程累积问题，降低 pids.max 风险 |
| [#85714](https://github.com/openclaw/openclaw/issues/85714) | Agent's final agent_message stranded when LLM forgets to call delivery tool | 已关闭 | 修复 LLM 未调用消息工具导致回复滞留的问题，增加回退投递机制 |
| [#44749](https://github.com/openclaw/openclaw/issues/44749) | Concurrent allow-always approvals silently lose allowlist entries | 已关闭 | 解决允许列表并发写入丢失条目的竞态条件 |
| [#91283](https://github.com/openclaw/openclaw/issues/91283) | minSecurity inverted — security="full" session override clamped | 已关闭 | 修复 minSecurity 等级反转的安全逻辑错误 |
| [#78362](https://github.com/openclaw/openclaw/issues/78362) | Control UI CSP blocks Zod Function() constructor | 已关闭 | 修复 Control UI 中 CSP 策略阻止 Zod 评估的问题 |
| [#27984](https://github.com/openclaw/openclaw/issues/27984) | Telegram: files ~5-20MB cause silent deadlock | 已关闭 | 解决 Telegram 中等大小文件导致整聊锁死的死锁问题 |

此外，多个长期开放的 PR 今天获得了维护者审查或作者回复（如 #88504 多槽记忆架构、#95604 Discord 子代理进度反馈、#101248 子代理原生路由等），项目核心功能打磨持续推进。

---

## 4. 社区热点

以下 Issue 在过去 24 小时吸引了最多讨论（评论数排名前列），反映了用户当前最关注的问题：

| Issue | 标题 | 评论数 |👍 数 | 核心诉求 |
|-------|------|--------|------|----------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs sometimes render as image attachments and become unreadable to the agent | 20 | 2 | 长时间运行的 ANSI 工具输出被错误渲染为图片占位符，导致智能体不可读，属于严重的可观测性缺陷 |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | [Bug]: embedded prompt cache breaks across room-event, policy, and Responses boundaries | 16 | 1 | 回归：嵌入式会话的 prompt 缓存跨越房间事件、策略变更等边界时丢失连续性，影响长会话响应一致性 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Feature Request: Masked Secrets - Prevent Agent from Accessing Raw API Keys | 15 | 4 | 呼声高：增加“掩码密钥”功能，允许智能体使用 API 密钥但不暴露明文，防范提示注入泄漏 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Critical: Gateway Memory Leak — RSS grows from 350MB to 15.5GB over days, causing repeated OOM crashes | 15 | 1 | 严重内存泄漏：Gateway 进程 RSS 在数日内从 350 MB 飙升至 15.5 GB，引发 OOM 杀死和重启循环，用户强烈要求修复 |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | [Feature]: Per-agent memory-wiki vault configuration | 13 | 10 | 高赞功能：多智能体场景下需要为每个智能体独立配置记忆知识库，而非全局共享 |

**分析**：讨论焦点集中在 **安全增强**（密钥掩码）、**稳定性**（内存泄漏、缓存失效）和 **多智能体架构灵活性**（独立记忆知识库、子代理路由）三大方向。安全类 Issue 虽然评论数高，但至今未有关联 PR 合并；内存泄漏问题尤为紧迫，已经持续一个月。

---

## 5. Bug 与稳定性

按严重程度排列，今日活跃的重要 Bug 列表（包含回归、崩溃、数据丢失等）：

| 严重级 | Issue | 标题 | 已有 Fix PR？ | 详情 |
|--------|-------|------|---------------|------|
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — RSS 350MB→15.5GB, OOM crashes | ❌ 无 | 持续近一月，导致 Gateway 反复崩溃重启，影响所有用户 |
| **P0** | [#101763](https://github.com/openclaw/openclaw/issues/101763) | Hosted Molty: model selector doesn't persist — dotted id claude-opus-4.8 | ❌ 无 | 模型选择器未持久化，导致 API 收到非法模型 ID，所有回复失败 |
| **P1** | [#102175](https://github.com/openclaw/openclaw/issues/102175) | Embedded prompt cache breaks across boundaries | ❌ 无 | 回归，影响长会话缓存连续性 |
| **P1** | [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs render as image attachments, unreadable | ❌ 无 | 智能体无法读取工具返回的文本内容 |
| **P1** | [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp session stalls on long model_call | ✅ 有 PR #103562 修复 | 长模型调用导致会话僵死，回复无法投递 |
| **P1** | [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries exhaust before replacement server ready | ❌ 无 | Codex 后端启动重试耗尽导致调度失败 |
| **P1** | [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap grows to 1073MB+ at idle, cron fails silently | ❌ 无 | 内存持续增长，cron 任务静默失败 |
| **P1** | [#90684](https://github.com/openclaw/openclaw/issues/90684) | Feishu (non-Discord) should apply sanitizeAssistantVisibleText() | ❌ 无 | 飞书等渠道未过滤内部 XML 标签，泄漏 LLM 内部结构 |
| **P1** | [#70903](https://github.com/openclaw/openclaw/issues/70903) | Persistent file-based provider cooldown blocks user after billing recovery | ❌ 无 | 计费恢复后仍被持续冷却，改单用户无法使用 |
| **P2** | [#103332](https://github.com/openclaw/openclaw/issues/103332) | openclaw can not run with codex/gpt5.6 in pi | ✅ 已关闭 | 已快速修复 |

**注意**：多个 P1/P0 级别 Bug 至今无关联 Fix PR，尤其是 #91588（内存泄漏）和 #101763（Molty 模型选择器），需要维护团队优先投入。

---

## 6. 功能请求与路线图信号

根据今日活跃的 enhancement 标签 Issue 及关联 PR，以下功能需求获得较多关注或已有 PR 准备合并，有望进入下一版本：

| 功能 | Issue/PR | 用户/开发动态 | 路线图参考 |
|------|----------|---------------|-------------|
| **掩码密钥安全** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 高赞（4👍），持续 5 个月 | 安全审查已标记，尚未有 PR |
| **文件系统沙箱配置** | [#7722](https://github.com/openclaw/openclaw/issues/7722) | 4👍，讨论活跃 | 需产品决策，暂无 PR |
| **Webhook 会话复用/多轮支持** | [#11665](https://github.com/openclaw/openclaw/issues/11665) | 11 评论，已有 PR #104084 涉及会话身份模式 | 关联 PR 已关闭，功能可能通过 conversation identity modes 解决 |
| **子代理原生 announceTarget 路由** | [#101248](https://github.com/openclaw/openclaw/pull/101248) | 今天有更新，等待维护者查看 | 解决子代理完成结果直接返回父会话，避免通过渠道宣布 |
| **多槽记忆角色架构** | [#88504](https://github.com/openclaw/openclaw/pull/88504) | 今日仍有活动，XL 规模 | 拆解内存职责（事实回忆、自动捕获、压缩等），已 ready for maintainer look |
| **可配置思考/推理块格式** | [#8913](https://github.com/openclaw/openclaw/issues/8913) | 5 评论 | 请求按渠道自定义推理块显示方式（Telegram 斜体难读） |
| **执行审批拒绝优先于允许列表** | [#101276](https://github.com/openclaw/openclaw/pull/101276) | 今天有更新，等待作者 | 引入 denylist 机制，增强安全边界 |
| **CJK 中文工具结果截断预算** | [#104055](https://github.com/openclaw/openclaw/pull/104055) | 今日创建，P2，需要验证 | 针对中/日/韩文密集字符优化 token 预算 |
| **session:end 内部钩子事件** | [#10142](https://github.com/openclaw/openclaw/issues/10142) | 5 评论，已有 PR #104084 相关 | 用于工作流编排系统（如 Temporal）信号回调 |

**趋势**：安全与权限管理（密钥掩码、文件沙箱、审批策略）成为社区最强音；多智能体间的路由和隔离（子代理、记忆库）也是高频需求；此外，CJK 国际化优化开始进入 PR 阶段，显示项目全球用户增长。

---

## 7. 用户反馈摘要

从今日活跃的 Issue 评论中提炼的典型用户痛点和使用场景：

- **工具输出不可读**（#99241）：用户反馈“智能体看不到工具返回的 stdout/stderr 文本，只能看到图片占位符”，严重影响工具链自动化，特别是长时间运行的脚本或 ANSI 输出场景。
- **WhatsApp 会话僵死**（#84569）：“当模型调用耗时 120-240 秒，后续消息排队但最终会话终止，回复从未送达”，对于 WhatsApp 这种即时通讯渠道非常影响体验。
- **内存泄漏导致 cron 静默失败**（#87109）：“cron 任务无输出、无推送、无错误上报，只有重启才能恢复”，运维用户表示难以排查。
- **飞书渠道未过滤内部标签**（#90684）：“Discord 做了，但飞书直接发送 `<invoke name=...>` 等原始 XML”，造成终端用户看到技术污染。
- **模型选择器 Bug 生产阻塞**（#101763）：“页面上选择模型后，API 总是发带点的模型 ID，无法使用任何一个智能体”，该问题被标记为 Beta 发布阻止者。
- **OAuth 令牌刷新无重试**（#8673）：“网络瞬断直接导致整个智能体失败，希望加入自动重试”。
- **Telegram 中等文件死锁**（#27984 已关闭）：“发送 5~20MB 文件后整个聊天永久锁定，只能重启”，该 Bug 今日关闭，用户应感谢修复。

总体来看，用户对稳定性和可观测性不满意，但对功能的积极反馈（如记忆库配置请求的高赞）显示社区仍在积极参与功能构思。

---

## 8. 待处理积压

以下为长期未响应或未修复的重要 Issue/PR，建议维护团队优先审视：

| 编号 | 标题 | 创建时间 | 状态 | 影响 | 注意 |
|------|------|----------|------|------|------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | P0: Gateway Memory Leak — RSS 15.5GB OOM | 2026-06-09 | OPEN，无 PR | 所有用户 | 严重性最高，已持续超过一个月，无任何关联修复 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Feature: Masked Secrets | 2026-02-06 | OPEN，等待安全审查 | 安全 | 五个月无进展，社区高赞 |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Feature: Filesystem Sandboxing Config | 2026-02-03 | OPEN，需要产品决策 | 安全 | 四个月无进展 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook session reuse multi-turn | 2026-02-08 | OPEN，有 PR 关联但未合并 | 用户 | 功能文档与实际行为不一致 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | P1: Gateway heap grows to 1073MB+ at idle | 2026-05-27 | OPEN，需要维护者审查 | 稳定性 | 与 #91588 相关，但未标记同一根因 |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | Persistent provider cooldown blocks user after billing recovery | 2026-04-24 | OPEN，需要决策 | 用户体验 | 计费恢复后仍需手动清除冷却 |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | P0: Molty model selector doesn't persist | 2026-07-07 | OPEN，无 PR | Beta 发布阻止 | 新近报告，但无响应 |
| [#7524](https://github.com/openclaw/openclaw/issues/7524) | groupScope option to consolidate group sessions into main | 2026-02-02 | OPEN，需要安全审查 | 功能 | 用户期望群聊可与主会话合并 |
| [#6890](https://github.com/openclaw/openclaw/issues/6890) | Ralph Loop max iterations in agent config | 2026-02-02 | OPEN，需要审查 | 功能 | 已有全局配置，但请求细粒度控制 |

这些积压项若长期无更新，可能影响社区信心。建议维护团队优先投入资源攻克 #91588 内存泄漏和 #101763 模型选择器 Bug，并对安全增强类 feature 给出明确路线图反馈。

---

*报告生成时间：2026-07-11 23:59 UTC*  
*数据来源：OpenClaw GitHub 仓库 (github.com/openclaw/openclaw)*

---

## 横向生态对比

好的，作为您的资深技术分析师，我已仔细审阅了2026年7月11日各主要开源AI智能体项目的社区动态，并为您生成了以下横向对比分析报告。

---

### AI智能体与个人AI助手开源生态横向分析报告 (2026-07-11)

#### 1. 生态全景

当前，个人AI助手/自主智能体开源生态正经历一轮 **“分化加剧，修复与创新并行”** 的深度整合期。**OpenClaw** 作为生态的核心参照与“母体”，其庞大但略显臃肿的体量正面临严峻的稳定性挑战（如长期未解的内存泄漏），这为其他项目提供了差异化突围的机会。**NanoBot** 和 **IronClaw** 等项目将重心放在具体的**用户交互体验**和**运行时稳定性**上，通过精细化打磨来构建护城河。而 **CoPaw** 和 **ZeroClaw** 则通过重大版本发布和架构RFC，展现出引领下一波技术浪潮的野心。整体来看，生态正从早期的“功能堆叠”阶段，转向 **“稳定性、安全性、精细化控制”** 的高质量发展阶段，同时社区对 **多模型灵活调度、多智能体协作、长上下文管理** 等高级特性的需求日益迫切。

#### 2. 各项目活跃度对比

| 项目名称 | Issues (活跃/总数) | PRs (待合并/已合并关闭) | 今日发布 | 健康度评估 |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 250 / 437 | 329 / 171 | ❌ 无 | **稳定但承压**：社区贡献极活跃，但P0级内存泄漏等重大Bug积压，影响长期信心。 |
| **NanoBot** | 5 / 8 | 24 / 18 | ❌ 无 | **快速迭代，质量巩固**：社区活跃，编辑工具与WebUI体验持续优化，Ollama性能问题是核心痛点。 |
| **Hermes Agent** | 50 / 50 | 48 / 2 | ❌ 无 | **高压演进，社区响应快**：Bug集中爆发，但贡献者迅速提交修复方案，项目处于急剧变化期。 |
| **PicoClaw** | 1 / 3 | 17 / 1 | ❌ 无 | **贡献活跃，整合缓慢**：社区贡献质量高（OAuth修复、WhatsApp功能），但项目合并效率低，可能挫伤贡献者积极性。 |
| **NanoClaw** | 1 / 3 | 15 / 11 | ❌ 无 | **高强度开发，进展良好**：核心团队主导重构，方向明确（通道架构、持久内存），社区贡献有序。 |
| **NullClaw** | 2 / 2 | 0 / 0 | ❌ 无 | **开发停滞，问题凸显**：无任何代码合并，但出现严重安全漏洞（A2A路由），需紧急处理。 |
| **IronClaw** | 36 / 36 | 50 / 50 | ❌ 无 | **修复与强化关键期**：社区与核心团队都聚焦于Reborn运行时稳定性，多个P1级Bug待修复，健康度一般。 |
| **LobsterAI** | 1 / 3 | 5 / 9 | ✅ **有 (v2026.7.10)** | **稳定迭代，有版本发布**：修复多项问题，支持子Agent协作，但新版本引入多Agent配置覆盖Bug。 |
| **Moltis** | 0 / 0 | 1 / 0 | ❌ 无 | **低活跃**：项目活动降至冰点，仅有单一模型支持PR待处理。 |
| **CoPaw** | 43 / 43 | 43 / 43 | ✅ **有 (v2.0.0 Stable)** | **高迭代、高关注度、高阵痛**：重大版本发布带来架构升级，但伴随大量严重Bug，稳定性面临挑战。 |
| **ZeroClaw** | 18 / 18 | 45 / 5 | ❌ 无 | **功能密集开发期**：开发活动频繁，RFC讨论火热（协议统一），但高危Bug和工作流阻塞问题仍未解决。 |
| **TinyClaw / ZeptoClaw** | 0 / 0 | 0 / 0 | ❌ 无 | **休眠**：完全无活动。 |

#### 3. OpenClaw 在生态中的定位

- **生态核心与“母体”参照**：OpenClaw 无疑是当前生态中**社区规模最大、功能最全、代码体量最庞大**的项目。其每日数百个Issue和PR的活跃度，是其他项目的数倍甚至数十倍，是当之无愧的生态中心。其他许多项目（如 NanoClaw, PicoClaw, NullClaw）从命名到设计哲学都有其影子，可视为针对特定场景的“分叉”或“轻量级实现”。
- **技术路线：全面但负重**：OpenClaw 追求功能的全面性，但其技术路线也带来了“大而全”的代价。当前社区反映最强烈的就是**稳定性问题**（尤其是Gateway内存泄漏），这已成为其最大短板。相比之下，NanoBot 通过专注编辑工具和WebUI体验，在特定领域建立了优势；PicoClaw 则通过在OAuth和WhatsApp等具体集成点的深耕，展现了社区解决实际问题的热情。
- **社区规模对比**：OpenClaw 的社区规模是断层式领先的，这既是其最大的资源，也是其最大的挑战。其他项目（如IronClaw, Hermes Agent）虽然社区规模较小，但讨论更聚焦，开发者与维护者的沟通链路更短，问题响应和决策速度可能更快。CoPaw 和 ZeroClaw 则通过发布重大版本或发起架构性RFC，成功吸引了大量的社区讨论和注意力，在特定时间窗口内热度极高。

#### 4. 共同关注的技术方向

以下需求在多项目中涌现，是当前行业的核心痛点与机遇：

1.  **多会话/多角色模型灵活调度**：
    - **涉及项目**：**NanoBot** (`#4253`), **Hermes Agent** (`#58731`), **PicoClaw** (`PR #3200`), **LobsterAI** (`#2293`)。
    - **具体诉求**：用户不再满足于全局模型配置，要求**按会话、按 Agent 角色、甚至按子任务**来覆盖或选择模型，以平衡成本、速度、隐私和能力。这是迈向“精细化AI资源管理”的第一步。

2.  **独立且可配置的记忆/知识库系统**：
    - **涉及项目**：**OpenClaw** (`#63829`), **IronClaw** (`PR #5974`), **NanoClaw** (`PR #3012`)，**CoPaw** (记忆功能Bug修复)。
    - **具体诉求**：从“全局共享记忆”向 **“每智能体独立记忆库”** 演进，并要求支持人类可编辑、可索引、可持久化的知识存储方式（如Memory-Wiki或Episodic Memory）。

3.  **安全与权限的精细化管理**：
    - **涉及项目**：**OpenClaw** (`#10659` 密钥掩码), **NullClaw** (`#974` A2A路由漏洞), **CoPaw** (`#5947` MCP权限失效), **NanoBot** (`#4776` 重启命令漏洞)。
    - **具体诉求**：社区安全意识普遍觉醒，需求从简单的API密钥保护，扩展到**多租户上下文隔离、细粒度的工具调用审批、命令执行授权**等层面。

4.  **CJK（中日韩）等非英语场景的深度优化**：
    - **涉及项目**：**OpenClaw** (`PR #104055`, 工具结果截断预算), **CoPaw** (`#5950`, 中文记忆文件embedding错误)。
    - **具体诉求**：随着全球用户增长，**对多语言（尤其是CJK密集字符）的token预算、渲染支持、存储兼容性**提出了更高要求，这是国际化发展的必然挑战。

#### 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | IronClaw | CoPaw | ZeroClaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心功能侧重** | **全能平台**：聊天、自动化、多功能网关。 | **开发者的AI Copilot**：侧重代码编辑、文件操作、CLI交互。 | **任务驱动的自动化引擎**：强调Routine、Run的稳定性和恢复能力。 | **个人与企业级助手**：侧重桌面体验、MCP集成、团队协作(Cowork)。 | **连接器与协议枢纽**：专注多渠道、多Agent通信，协议统一。 |
| **目标用户** | 高级开发者、希望掌控一切的“极客”。 | **开发者**，尤其是软件工程师和DevOps。 | **企业用户**、追求高可靠自动化流程的团队。 | **重度个人用户**和**企业员工**，注重开箱即用的桌面和IM体验。 | **系统集成商**、需要构建多Agent或产品化应用的开发者。 |
| **技术架构差异** | **单体+插件**：核心庞大，通过插件扩展。 | **轻量核心**：聚焦于核心交互体验，功能更精炼。 | **稳定优先**：架构改造围绕提升运行时韧性和错误恢复。 | **AgentScope生态**：深度绑定AgentScope框架，拥抱其2.0架构变革。 | **协议驱动**：将协议统一和标准化作为架构演进的核心。 |

#### 6. 社区热度与成熟度

- **快速迭代与创新阶段**：**CoPaw**（v2.0发布，功能与Bug并存）、**ZeroClaw**（协议RFC，架构演进）、**NanoClaw**（通道架构重构）。这些项目敢于进行重大变更，社区讨论激烈，发展方向明确但伴随阵痛。
- **质量巩固与精细化运营阶段**：**OpenClaw**、**NanoBot**、**LobsterAI**。这些项目社区活跃度高，但重心已从堆砌功能转向修复大量Bug、优化交互细节、提升系统稳定性。这是从“能用”走向“好用”的关键阶段。
- **高度活跃，面临攻坚挑战**：**IronClaw**, **Hermes Agent**。社区贡献非常活跃，但大量P1级Bug和工作流阻塞问题积压，项目的“抗压能力”和核心开发者的投入程度将决定其未来是起飞还是陷入泥潭。
- **沉寂或维护模式**：**NullClaw**, **Moltis**。项目活跃度低，发展陷入停滞，需要外部刺激或核心维护者回归才能重新激活。

#### 7. 值得关注的趋势信号

1.  **“长上下文”幻觉的破解与应对**：社区普遍认识到“无限上下文”并非万能，普遍开始探索**结构化记忆**（IronClaw的情节记忆）、**上下文压缩优化**（OpenClaw的CJK预算）和**智能工具检索**（IronClaw的Per-turn检索）等解决方案，以在性能和成本之间找到平衡。

2.  **从“单一Agent”到“Agent Mesh”的架构演进**：OpenClaw (`#10659`)、NullClaw (`#974`) 和 ZeroClaw (`#8798`) 不约而同地暴露了多Agent通信中的安全问题或提出了统一的通信协议。这表明，个人AI助手正从单兵作战，向**多Agent协作、与外部服务集成**的“Agent Mesh”网络时代迈进，**协议标准化与安全隔离**成为此阶段的核心基础设施。

3.  **“可集成性”成为竞争力新维度**：ZeroClaw 提出的 OpenAI Chat Completions 兼容端点，以及 PicoClaw 对 ARM 架构的支持，表明项目不再局限于自身生态，而是通过提供**标准化接口（如HTTP API）和扩展硬件兼容性**，来降低用户和第三方开发者的集成成本。这将是决定项目能否成为生态平台的关键。

4.  **用户对“知情批准”的强烈诉求**：Hermes Agent (`#61249` 审批栏截断) 和 CoPaw (`#5954` 权限模式繁琐) 的反馈显示，用户希望在自动化执行时拥有**更清晰、更可控的最终决策权**。功能性的“有”已不能满足要求，交互上的“好用”和“安全可信”变得至关重要。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-07-11

## 1. 今日速览

过去24小时项目保持高活跃度：共处理 **8 条 Issues**（新开/活跃 5 条，关闭 3 条），**42 条 Pull Requests**（待合并 24 条，已合并/关闭 18 条）。无新版本发布。核心关注点集中在**会话级模型覆盖、Ollama 缓存优化、编辑工具精确性提升**以及**安全与稳定性修复**。多个长期讨论的功能（如子代理模型 override、cron 模型预设）已有对应 PR 尝试落地，尽管部分因冲突被关闭，但表明社区正在积极推进。

## 2. 版本发布

无新版本发布。

## 3. 项目进展（今日合并/关闭的重要 PR）

今日共有 18 个 PR 被合并或关闭，以下为关键进展：

- **修复 Dream 空提交**：[#4873](https://github.com/HKUDS/nanobot/pull/4873) — 跳过无实际文件变更时的周期性 Git 提交，避免仓库堆积空提交。同时对 `finally` 中的真实编辑保留审计能力。
- **增强 edit_file 行提示精确性**：[#4635](https://github.com/HKUDS/nanobot/pull/4635) — 将 `line_hint` 从“最近匹配”改为“精确一致性守卫”，拒绝未覆盖指定行的替换请求，大幅减少编辑基准中的误替换。
- **WebUI 输入体验改进**：
  - [#4876](https://github.com/HKUDS/nanobot/pull/4876) — 在响应进行中时，允许第二次按 Enter 引导已排队提示，并自动解除快捷键冲突。
  - [#4877](https://github.com/HKUDS/nanobot/pull/4877) — 为文件预览和差异视图添加 Prism 语法高亮，支持行号和增加/删除背景。
- **CLI 终端兼容性修复**：[#4832](https://github.com/HKUDS/nanobot/pull/4832) — 修复 Shift+Enter 导致原始转义字符转储的回归问题，改用 CSI-u 序列正确处理。
- **安全与稳定性修复**：
  - [#4842](https://github.com/HKUDS/nanobot/pull/4842) — 在 MCP 关闭过程中捕获 `asyncio.CancelledError`，避免超时导致的崩溃（P1）。
  - [#4843](https://github.com/HKUDS/nanobot/pull/4843) — 推迟 MCP 重连期间的陈旧栈清理，修复网关崩溃（P1）。

此外，多个 PR 正在等待合并，涵盖子代理结果聚合模式、内存归档、执行会话隔离等功能，项目整体在**编辑基准、WebUI 交互、安全防御**三个维度取得实质性进展。

## 4. 社区热点

### 最受关注的 Issues

1. **[#4253](https://github.com/HKUDS/nanobot/issues/4253)**（6 条评论）—— 用户 `rombert` 请求支持**按会话覆盖模型**，以便在 OpenRouter（快速）和本地 llama.cpp（隐私/慢速）之间按需切换，反映多模型使用场景的强需求。
2. **[#4867](https://github.com/HKUDS/nanobot/issues/4867)**（3 条评论）—— 用户 `The-Markitecht` 强烈抱怨每次调用 Ollama 时额外增加约 60 秒延迟（由于 NanoBot 添加了动态 prompt 前缀，导致无法利用 Ollama 的 prompt 缓存）。该用户指出“32GB VRAM 下完全不可用”，属于**性能瓶颈**。

### 讨论密集的 PR

- **[#4626](https://github.com/HKUDS/nanobot/pull/4626)**（feat(memory): add opt-in eager consolidation）—— 开启一个可选的主动记忆合并功能，能在响应后即时归档对话，与 #2604 相关，是长上下文管理的铺垫。
- **[#4855](https://github.com/HKUDS/nanobot/pull/4855)**（feat(channels): add guided setup flows）—— 为频道配置增加图形化引导界面，支持飞书助手管理，社区对易用性提升反馈积极。

**诉求分析**：模型灵活切换与性能优化是当前社区最迫切的呼声。用户期望在保持隐私可控的同时，获得与云端模型相当的响应速度。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有修复 PR |
|----------|-------|------|---------------|
| **严重** | [#4776](https://github.com/HKUDS/nanobot/issues/4776) | `/restart` 命令零授权检查，任何配对用户可 DoS 整个进程，杀死所有会话 | 无（安全漏洞，需紧急处理） |
| **高** | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Ollama 调用因 prompt 前缀不一致导致每轮额外 60 秒延迟，严重影响本地模型可用性 | 无（功能增强需求） |
| **中** | [#4835](https://github.com/HKUDS/nanobot/issues/4835) | WebUI 首条消息可能错误发送到已有聊天（竞争条件） | 已关闭（可能已修复） |
| **中** | [#4872](https://github.com/HKUDS/nanobot/issues/4872) | Dream 每次运行不管是否有变更都创建 Git 空提交 | 已修复 [#4873](https://github.com/HKUDS/nanobot/pull/4873) |
| **低** | [#4634](https://github.com/HKUDS/nanobot/issues/4634) | edit_file 在多重匹配时错误替换（主导失败模式） | 已修复 [#4635](https://github.com/HKUDS/nanobot/pull/4635) |

另外，[#4842](https://github.com/HKUDS/nanobot/pull/4842) 和 [#4843](https://github.com/HKUDS/nanobot/pull/4843) 两个 P1 PR 仍在等待合并，分别解决 MCP 关闭和重连崩溃问题。

## 6. 功能请求与路线图信号

以下功能在 Issue 中提出，对应 PR 已存在（部分仍为 Open 或已关闭但包含冲突），表明可能被纳入后续版本：

| 功能 | Issue | 关联 PR | 状态 |
|------|-------|---------|------|
| **按会话覆盖模型** | [#4253](https://github.com/HKUDS/nanobot/issues/4253) | — | 待实现 |
| **保持精确 prompt 前缀以启用缓存** | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | — | 设计讨论中 |
| **子代理模型 override (spawn 工具)** | [#4231](https://github.com/HKUDS/nanobot/issues/4231) | [#4623](https://github.com/HKUDS/nanobot/pull/4623) | 冲突关闭，需重新设计 |
| **Cron 任务模型预设** | [#4378](https://github.com/HKUDS/nanobot/issues/4378) | [#4622](https://github.com/HKUDS/nanobot/pull/4622) | 冲突关闭，需重新设计 |
| **长任务持续目标（opt-in）** | — | [#4879](https://github.com/HKUDS/nanobot/pull/4879) | Open，P2 |
| **Hook 自动发现机制** | — | [#4878](https://github.com/HKUDS/nanobot/pull/4878) | Open，P2 |

**路线图信号**：项目正尝试通过 `spawn` 和 `cron` 的模型 override 来满足用户“多模型灵活调度”的需求，但冲突问题表明接口设计还需收敛。同时，`Ollama 缓存优化` 若被采纳，将显著提升本地推理体验。

## 7. 用户反馈摘要

- **多模型工作流痛点**（#4253）：用户 `rombert` 同时使用 OpenRouter 和本地模型，但只能全局切换，无法在每个对话中按隐私/速度需求选择模型，吐槽“很不方便”。
- **延迟容忍度见底**（#4867）：`The-Markitecht` 直言“因为 NanoBot 的动态前缀，相同的模型在本地用 32GB VRAM 跑起来却比云端慢”，每次对话额外 60 秒“完全不可用”。此反馈直接指向 Prompt 缓存机制设计缺陷。
- **自动化副作用**（#4872）：`alekwo` 指出 Dream 模式在无变更时也产生 Git 空提交，污染仓库历史。修复后用户应能获得更干净的 Git 记录。
- **安全风险担忧**（#4776）：`hamb1y` 对 `/restart` 缺乏授权感到不安，指出仅需通过 `is_allowed()` 即可杀死整个 bot 进程，可能被恶意利用。

整体而言，用户对**灵活性与性能**的满意度较低，而对**编辑工具精确性**和**WebUI 交互改进**（如高亮、引导）的期待较高。

## 8. 待处理积压

以下 Issue/PR 长期未得到回应或解决，建议维护者优先关注：

- **[#4253](https://github.com/HKUDS/nanobot/issues/4253)**（模型按会话覆盖）—— 从 6 月 8 日开启，已 1 个月+，社区多次评论。
- **[#4231](https://github.com/HKUDS/nanobot/issues/4231)**（spawn 模型 override）—— 6 月 7 日开启，关联 PR 冲突关闭后无新进展。
- **[#4205](https://github.com/HKUDS/nanobot/pull/4205)**（mailbox-backed 子代理结果）—— 6 月 5 日开启，至今 Open，功能涉及子代理通信改进。
- **[#4588](https://github.com/HKUDS/nanobot/pull/4588)**（工具输出压缩优化）—— 6 月 29 日开启，P2，对降低 token 消耗有直接帮助，但停留超 10 天无更新。
- **[#4776](https://github.com/HKUDS/nanobot/issues/4776)**（/restart 安全漏洞）—— 严重安全缺陷，截至今日无修复 PR，建议立即分配。

---

**总结**：NanoBot 项目在编辑工具、WebUI 等用户可见层面持续迭代，社区贡献活跃，但模型灵活性与性能优化需求尚未得到充分解决，且存在安全漏洞积压。项目健康度总体良好，但若不能尽快响应 #4776 和 #4867，可能影响核心用户留存。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 Hermes Agent 项目数据，为您生成了 2026-07-11 的项目动态日报。

---

## Hermes Agent 项目日报 | 2026年7月11日

### 1. 今日速览

项目今日活跃度极高，社区贡献热情高涨。过去24小时内，共有 **50 条 Issues** 和 **50 条 PR** 获得更新，显示出极强的社区参与度。虽然在编的PR待合并积压（48条）远多于已合并/关闭（2条），但大量新提交的修复方案表明项目维护者与社区正在积极应对新出现的问题。P1/P2级别的Bug报告集中爆发，尤其是关于多会话路由错误、Provider兼容性以及系统稳定性方面的问题，是当前项目需要重点关注的核心挑战。综合来看，项目处于一个**高迭代、高压力的快速演进期**，社区响应迅速，但合并速度和稳定性面临考验。

### 2. 版本发布

- **无新版本发布**

### 3. 项目进展

今日仅有 **2 个 PR** 被合并/关闭，进展相对缓慢。值得关注的是：

- **[PR #49401 - feat(plugins): support interactive clarify slash commands](https://github.com/NousResearch/hermes-agent/pull/49401)**（已合并）：此PR为插件系统增加了交互式（Slash）命令的支持，允许插件注册需要用户进一步确认或输入的交互式命令。这是一个重要的功能性改进，有望提升Gateway会话中插件的用户体验和灵活性。

- **另一个被关闭的PR** 未在列表中明确展示，推测为小规模修复或过期PR的清理。

**总结**：项目整体向前的步伐有所放缓，但核心基础设施（如插件系统）的改进仍在持续推进。当前社区的主要精力集中在解决昨日和今日新报告的紧急Bug上，而非快速合入新代码。

### 4. 社区热点

今日最受关注的议题集中在 **Provider兼容性** 与 **会话/消息路由稳定性** 两大方面。

- **[Issue #47714 - Desktop/TUI sessions fall back to OpenRouter when using named custom provider](https://github.com/NousResearch/hermes-agent/issues/47714)**（评论 8，👍 4）
    - **分析**：此问题获得了最多的点赞，说明大量桌面/TUI用户遇到了自定义Provider配置不生效的问题。社区的核心诉求是 **配置的确定性与可预期性**。用户期望通过 `config.yaml` 显式定义的自定义Provider能在所有界面（CLI、TUI、桌面、网关）中表现一致，而当前TUI/桌面端会话会静默回退到OpenRouter，导致用户付出了意外的成本或使用了错误的模型，并难以排查。

- **[Issue #27038 - Codex Responses API rejects replayed assistant message items with long id fields](https://github.com/NousResearch/hermes-agent/issues/27038)**（评论 10，👍 0）
    - **分析**：此问题是评论数最多的Issues之一，反映出会话恢复功能（Replay）的可靠性是社区痛點。当用户重启或继续一个包含Codex助手的会话时，由于消息ID过长导致API拒绝，这会直接**破坏用户体验的连续性**。社区希望能无缝地从之前的对话断点继续，而不是因为技术细节问题导致会话丢失或必须手动清理。

### 5. Bug 与稳定性

今日报告的Bug数量多且集中于核心功能，按严重程度排列如下：

- **严重（P1）**
    - **[Issue #54527 - Gateway message routing misdirects user input between TUI sessions](https://github.com/NousResearch/hermes-agent/issues/54527)**（已关闭）：多TUI会话下，用户输入被错误路由到其他会话，导致消息丢失。这是严重的数据完整性和用户体验问题。
    - **[Issue #32617 - xAI OAuth fallback after provider switch due to stale encrypted_content replay](https://github.com/NousResearch/hermes-agent/issues/32617)**（已关闭）：切换Provider后，旧的加密内容导致xAI接口400错误，迫使系统回退到OAuth流程，阻塞了正常通信。
    - **[Issue #52496 - [Dashboard] /api/model/set rewrites named custom provider custom:* to openrouter](https://github.com/NousResearch/hermes-agent/issues/52496)**（开放中）：此问题与 #47714 同源，证明Web Dashboard也存在相同的配置被改写Bug，影响范围更广。

- **中等（P2）**
    - **[Issue #60385 - MCP server processes leak on reconnect](https://github.com/NousResearch/hermes-agent/issues/60385)**（开放中）：MCP服务器进程在重连时未被清理，长期运行会导致系统资源耗尽，是潜在的稳定性炸弹。
    - **[Issue #62443 - delegate_task subagent always resolves to Groq/llama-3.3-70b-versatile (401)](https://github.com/NousResearch/hermes-agent/issues/62443)**（开放中）：子代理任务无视配置，总是解析到一个错误的Provider，导致认证失败。这直接破坏了委派任务功能。
    - **[Issue #61852 - Every auxiliary task silently fails on `provider: vertex`](https://github.com/NousResearch/hermes-agent/issues/61852)**（开放中）：所有辅助任务在Vertex AI Provider下均静默失败。此问题有 **两个并行的修复PR**（[#62440](https://github.com/NousResearch/hermes-agent/pull/62440), [#62444](https://github.com/NousResearch/hermes-agent/pull/62444)）被提出，表明社区对此非常重视，正在竞相修复。
    - **[Issue #60616 - hermes -z crashes with SIGABRT after response, only when memory.provider=honcho](https://github.com/NousResearch/hermes-agent/issues/60616)**（开放中）：使用Honcho内存Provider时，oneshot模式在完成任务后崩溃。这表明特定第三方服务的集成存在深层次的问题。

### 6. 功能请求与路线图信号

今日提出的功能请求反映了社区对 **精细化管理** 和 **协作边界** 的更高追求：

- **[Issue #58731 - Per-subagent model override in delegate_task](https://github.com/NousResearch/hermes-agent/issues/58731)**（开放中）：用户希望在委派任务中为不同的子代理分别指定模型，实现更灵活的“主从模式”资源调度。这是一个高级功能，与[PR #52627](https://github.com/NousResearch/hermes-agent/pull/52627)（阻止选择xAI媒体模型作为主模型）结合起来看，项目显然正在加强对模型选择的控制粒度。**此需求有较大可能被采纳，进入后续版本的路线图。**
- **[Issue #62339 - per-profile tab lease/registry so concurrent agents don't collide on the same tab](https://github.com/NousResearch/hermes-agent/issues/62339)**（开放中）：提出为浏览器标签引入“租约”机制，防止多个代理操作同一标签页导致冲突。这标志着项目正从单代理向多代理协作场景演进，**这是一个明确的长期路线图信号**。
- **[Issue #513 - Two-Phase Context Management](https://github.com/NousResearch/hermes-agent/issues/513)**（开放中）：这是一个持续被关注的特性请求（PR4个月前提出，今天仍有评论），提议借鉴Kilocode的思路，采用两阶段上下文压缩。这表明用户对上下文管理的成本和质量有较高要求，是一个持续的热点方向。

### 7. 用户反馈摘要

- **配置一致性痛点**：桌面/TUI/Dashboard的用户反复遇到自定义Provider配置被静默改写的问题，社区反馈的核心情绪是**沮丧和不信任**。用户希望配置是“所见即所得”的，任何隐式的 fallback 都应被明确警告和记录。
- **日志与隐私的担忧**：[Issue #46006](https://github.com/NousResearch/hermes-agent/issues/46006) 尖锐地指出了当用户按照流程上报Bug时，所使用的 `hermes debug share` 功能会未经妥善清理就将包含敏感信息的日志上传至公共Pastebin。这暴露了**项目在安全性设计和对用户隐私保护方面的疏忽**，需要立即引起维护者重视。
- **对审批功能的期望**：[Issue #61249](https://github.com/NousResearch/hermes-agent/issues/61249) 反馈桌面端的审批栏截断多行变更摘要，使得用户在审批前无法看清完整内容。这表达了用户对 **“知情批准”** 的强烈需求，尤其是在执行高风险的自动化操作时。

### 8. 待处理积压

- **[Issue #25016 - lsp: idle subprocesses are never reaped](https://github.com/NousResearch/hermes-agent/issues/25016)**（开放中，创建于 2026-05-13）：LSP子进程泄漏问题已有近两个月，伴随老生常谈，但没有PR提出解决方案。随着MCP进程泄漏问题（#60385）的出现，此类资源泄漏问题已成为系统稳定性的主要风险，**建议维护者优先处理**，或将两个问题关联起来统一解决。
- **[Issue #46006 - [Bug]: Security Issue when following the outlined Bug Report Procedure](https://github.com/NousResearch/hermes-agent/issues/46006)**（开放中，创建于 2026-06-14）：此安全日志泄露问题已存在近一个月，威胁用户隐私且可能阻碍Bug反馈流程。此问题重要性高且修复成本相对较低（可先增加警告并改进脱敏逻辑），**强烈建议维护者投入资源优先解决**。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 PicoClaw 数据，生成一份结构清晰、数据驱动的项目动态日报。

---

### PicoClaw 项目动态日报 | 日期：2026-07-11

---

#### 1. 今日速览
今日 PicoClaw 项目社区提交活跃度较高，共产生 18 个 Pull Request 和 3 个 Issue。值得关注的是，除了常规的依赖更新外，社区贡献集中在 **OAuth 兼容性**、**WhatsApp 原生功能**、**安全加固**以及**性能优化**四个关键方向。特别是 @greencabe 提交了针对 OAuth 刷新问题的 Issue 和配套的修复 PR，并新增了 WhatsApp 输入状态提示，展现了解决实际用户痛点的明确意图。然而，项目合并节奏依然缓慢（18个PR中仅合并1个），大量新功能和修复处于待审查状态，这可能导致社区贡献者的积极性受挫。

#### 2. 版本发布
**无**。

#### 3. 项目进展
今日合并/关闭的 PR 数量为 1 个，项目整体推进节奏较慢。

- ****
    - **PR #3179 - [CLOSED] fix(whatsapp): reconnect after websocket drops**
    - **摘要：** 这是一个重要的稳定性修复，主要针对WhatsApp通道的WebSocket断连问题。该PR实现了自动重连机制、合理的读写超时和心跳检测，以确保连接持续有效，并优化了消息处理流程，防止死连接占用资源。虽然该PR标记为 `[stale]` 且今天关闭，但其修复的内容对依赖WhatsApp的用户至关重要。（链接：sipeed/picoclaw PR #3179）

---

#### 4. 社区热点
今日社区讨论焦点主要集中在两个新提出的问题及其配套的解决方案，显示出社区在解决具体运行时问题上投入了较大精力。

- **OAuth 兼容性与并发安全问题**
    - **相关链接：**
        - Issue #3239: [OAuth refresh requests use incompatible provider semantics and can race](sipeed/picoclaw Issue #3239)
        - PR #3241: [fix(auth): make OAuth refresh provider-correct and concurrency-safe](sipeed/picoclaw PR #3241)
    - **分析：** @greencabe 提出了一个严重的运行时问题，指出当前的 OAuth token 刷新逻辑存在两个缺陷：1) 对所有提供商（如 OpenAI， Google）使用相同的 form 格式，而 OpenAI 期望 JSON；2) 并发刷新请求可能导致状态错误。该 Issue 与同一位作者提交的 PR #3241 形成完美呼应，表明作者不仅发现问题，还提供了完整的解决方案。这是一个高质量的社区贡献，反映了用户对集成多种 AI 服务的强烈需求。

- **树莓派用户的支持与兼容性**
    - **相关链接：**
        - PR #3205: [fix: support 9router gateway responses and add Linux ARMv7 build target](sipeed/picoclaw PR #3205)
    - **分析：** 该 PR 由 @sarwonous 提交，专门针对在树莓派 3B+ 上运行 PicoClaw 时遇到的兼容性问题。这暴露了几个痛点：1) 项目缺乏对 ARM 架构的支持；2) 部分第三方 API 网关（如 9router）的响应格式与标准的 OpenAI 接口存在差异。该 PR 的活跃评论（虽未显示数量，但其内容本身具有代表性）表明，边缘设备部署是 PicoClaw 的一个重要应用场景，社区对此有迫切需求。

---

#### 5. Bug 与稳定性
今天报告的 Bug 主要集中在系统稳定性和安全性方面，均有对应的修复 PR。

- **严重：OAuth 认证刷新失败 (Issue #3239)**
    - **描述：** `auth.RefreshAccessToken` 函数对所有 OAuth 提供商使用统一 form 负载，并硬编码了 `scope` 参数，导致 OpenAI 等期望 JSON 请求的提供商认证失败。此外，缺少并发保护，可能导致 token 刷新时出现竞态条件。
    - **状态：** 已有修复 PR #3241。
    - **链接：** sipeed/picoclaw Issue #3239

- **严重：标准库安全漏洞 (PR #3248)**
    - **描述：** 项目依赖的 Go 语言标准库版本已检出两个安全漏洞：`GO-2026-5856` (在 `crypto/tls`) 和 `GO-2026-4970` (在 `os`)。
    - **状态：** 已提交修复 PR，通过升级 Go 工具链版本到 1.25.12 来修复。
    - **链接：** sipeed/picoclaw PR #3248

- **严重：默认禁用 TLS 证书验证 (PR #3246)**
    - **描述：** MQTT 通道在代码中硬编码了 `InsecureSkipVerify: true`，这导致所有 MQTT 连接都跳过了 TLS 证书验证，面临中间人攻击的风险。
    - **状态：** 修复 PR 已提交，计划将其改为默认启用。
    - **链接：** sipeed/picoclaw PR #3246

- **中等：WhatsApp 网络超时 (Issue #3178)**
    - **描述：** 用户反馈使用WhatsApp的WebSocket连接时遇到超时问题。该Issue已被标记为 `[stale]` 并关闭。
    - **状态：** 已关闭。
    - **链接：** sipeed/picoclaw Issue #3178

---

#### 6. 功能请求与路线图信号
今日提交的新功能请求主要围绕提升用户体验和扩展平台兼容性，且大多已有对应的PR实现。

- **WhatsApp 原生输入状态 (Issue #3240 / PR #3242)**
    - **信号强度：高。** 用户需求清晰，提交者 @greencabe 同时提供了实现代码。该功能旨在解决用户发送消息后无反馈的问题，显著提升交互体验。

- **模型默认降级链 (PR #3200)**
    - **信号强度：中。** 支持用户在Web UI中配置一个模型列表作为备用，当一个模型不可用时自动切换到下一个。这提高了系统在 AI 服务不稳定时的可用性。

- **Agent 协作总线 (PR #2937)**
    - **信号强度：中。** 一个长期开放的高价值功能，引入了 Agent 间通信机制（邮箱、会话、权限等）。这表明项目正在向更复杂的多 Agent 协作架构演进。

- **Linux ARMv7 构建目标 (PR #3205)**
    - **信号强度：中。** 来自树莓派用户的强烈需求，扩展了项目的硬件兼容性，有助于吸引更多物联网和边缘计算领域的开发者。

---

#### 7. 用户反馈摘要
- **痛点：** 树莓派用户 @sarwonous 在尝试部署时遇到了无 ARM 架构构建包和第三方 API 兼容性问题（PR #3205）。另一用户 @Jh123x 报告了 WhatsApp WebSocket 的超时问题（Issue #3178），影响了基础功能的使用。
- **诉求：** 用户 @greencabe 明确提出两个痛点：1) OAuth 提供商兼容性差（Issue #3239）；2) 原生 WhatsApp 缺乏输入状态反馈（Issue #3240）。这些反馈都指向了用户在真实生产环境中遇到的集成与可用性问题。
- **满意之处：** 社区贡献者如 @corporatepiyush 正在积极进行代码层面的性能优化（PR #3243, #3244, #3245），表明项目代码库质量吸引了一定程度的高级贡献者参与。

---

#### 8. 待处理积压
以下 PR 和 Issue 长期未得到合并或回复，可能阻碍社区贡献者的积极性，建议维护者优先关注和审查。

- **长期未合并的 PR**
    - **PR #1951 (open, 2026-03-24):** 将安装脚本从文档仓库移动到主仓库。这是一个基础性的改进，却已搁置近4个月。 (sipeed/picoclaw PR #1951)
    - **PR #2937 (open, 2026-05-24):** Agent 协作总线，一个重大的架构改进。 (sipeed/picoclaw PR #2937)
    - **PR #3200 (open, 2026-07-01):** 模型默认降级链配置功能。 (sipeed/picoclaw PR #3200)
    - **PR #3193 (open, 2026-06-27):** 新增 Simplex 通道类型。 (sipeed/picoclaw PR #3193)

- **长期未处理的 Issue**
    - 尽管 #3178 已关闭，但其反映的WhatsApp稳定性问题值得长期关注。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-07-11

---

## 1. 今日速览

过去24小时项目处于**高强度开发与修复并行**的状态：共处理3个Issue（1个新开/活跃，2个关闭）、26个Pull Request（11个已合并/关闭，15个待合并），无新版本发布。核心团队主导了通道架构重构、持久内存系统、时间戳规范化等多项基础设施工作，社区贡献者也提交了Telegram富渲染、WhatsApp修复等有价值的变更。值得关注的是，多个长期遗留Bug（如CLI创建组/布线缺少数据库行）已关闭，但新报告的**共享技能符号链接阻塞问题** (#3001) 仍待解决。整体活跃度极高，项目健康度良好。

---

## 2. 版本发布

当日无新版本发布。

---

## 3. 项目进展

当日合并/关闭了11个PR，覆盖功能推进与稳定性修复，以下为重要合并项：

| PR | 标题 | 关键贡献 |
|----|------|----------|
| [#3015](https://github.com/qwibitai/nanoclaw/pull/3015) | fix: preserve phase context in live progress | 修复实时进度中阶段上下文丢失问题，确保测试计数正确 |
| [#3011](https://github.com/qwibitai/nanoclaw/pull/3011) | feat(channels): ChannelDefaults declarations for all adapters + WhatsApp shared-number fix | 所有适配器声明默认值，修复WhatsApp共享号码问题 |
| [#3010](https://github.com/qwibitai/nanoclaw/pull/3010) | feat: adapter-declared channel defaults (engage mode, threading, sender policy) | 核心架构重构：将频道行为决策权下放给适配器 |
| [#3009](https://github.com/qwibitai/nanoclaw/pull/3009) | Move channel formatting skills (whatsapp, slack) from trunk to the channels branch | 消除全局安装的技能冗余 |
| [#3006](https://github.com/qwibitai/nanoclaw/pull/3006) | fix: ISO storage + local-time display for all timestamps | 全仓统一时间戳存储为ISO-Z、显示为本地时间 |
| [#3005](https://github.com/qwibitai/nanoclaw/pull/3005) | fix: stamp task rows with ISO timestamps | 修复任务行时间戳与聊天时间戳不一致 |
| [#3004](https://github.com/qwibitai/nanoclaw/pull/3004) | Context preview tool: render the exact agent context per scenario | 新增上下文预览工具，便于开发者调试 |
| [#3003](https://github.com/qwibitai/nanoclaw/pull/3003) | docs(agent-browser): require bounded waits for custom conditions | 文档改进，防止浏览器技能无线等待 |

这些合并标志着项目在**通道抽象层、时间处理一致性、开发者工具链**三个方向迈出坚实一步。此外，持久内存系统（#3012、#3013）和任务单向交付（#2988）等大型功能虽未合并，但已进入最后审查阶段。

---

## 4. 社区热点

当日讨论最集中的议题集中在以下PR/Issue：

- **iMessage通道统一** — [#2999](https://github.com/qwibitai/nanoclaw/pull/2999) 提出将本地与托管后端统一为单个`imessage`通道，由一次安装完成，降低用户配置复杂性。该PR吸引了社区对通道扁平化架构的关注。
- **持久内存系统** — [#3012](https://github.com/qwibitai/nanoclaw/pull/3012) 与 [#3013](https://github.com/qwibitai/nanoclaw/pull/3013) 引入provider-agnostic持久内存树，实现跨代理提供商（包括Codex）的记忆共享。这是社区长期期待的能力，评论中多位贡献者讨论其与现有技能系统的集成方式。
- **时间戳规范化** — [#3006](https://github.com/qwibitai/nanoclaw/pull/3006) 解决存储/显示不一致的痛点，获得多位用户点赞，说明该问题影响面广。
- **Telegram原生富渲染** — [#2877](https://github.com/qwibitai/nanoclaw/pull/2877) 虽是旧PR（2026-06-28），但仍在该日被活跃讨论，体现社区对渠道呈现质量的持续需求。

**诉求分析**：用户对通道配置简洁性、代理记忆持久化、时间显示正确性有强烈期待，项目正通过架构重构积极回应。

---

## 5. Bug 与稳定性

当日报告的3个Issue及相关的Fix PR如下：

| Issue | 严重程度 | 状态 | 描述 | 对应Fix PR |
|-------|----------|------|------|------------|
| [#2415](https://github.com/qwibitai/nanoclaw/issues/2415) | Medium | **已关闭** | `ncl groups create`跳过`container_configs`行，导致首次生成失败报"Container config not found" | 未明确对应，但已关闭表明已修复 |
| [#2389](https://github.com/qwibitai/nanoclaw/issues/2389) | Medium | **已关闭** | 通过`bin/ncl`创建的布线未自动生成`agent_destinations`，导致回复被静默丢弃 | 未明确对应，但已关闭表明已修复 |
| [#3001](https://github.com/qwibitai/nanoclaw/issues/3001) | **High** | **开放** | 在共享技能重构前创建的群组保留陈旧技能副本，阻止受管符号链接更新，且无日志提示 | **已有对应PR**：[#3002](https://github.com/qwibitai/nanoclaw/pull/3002) 添加警告 |

**稳定性修复方面**，当日合并的PR中包括：
- [#2998](https://github.com/qwibitai/nanoclaw/pull/2998) 修复自修改MCP服务器负载在审批卡上的渲染问题
- [#2996](https://github.com/qwibitai/nanoclaw/pull/2996) 将缺失适配器的消息路由到重试路径
- [#2966](https://github.com/qwibitai/nanoclaw/pull/2966) 记录错误批次被标记为已完成时的日志

**关键风险**：Issue #3001 影响所有旧群组用户，建议维护者优先审查 #3002 并将其合入下一补丁版本。

---

## 6. 功能请求与路线图信号

当日未出现新的功能请求Issue，但从已合并/开放的PR可以清晰看出项目下一版本的重点方向：

| 方向 | 相关PR | 成熟度 |
|------|--------|--------|
| **通道架构统一** | [#2999](https://github.com/qwibitai/nanoclaw/pull/2999) (iMessage), [#3010](https://github.com/qwibitai/nanoclaw/pull/3010) (适配器声明默认值) | 高 — 已合并架构部分，iMessage还在审查 |
| **持久内存系统** | [#3012](https://github.com/qwibitai/nanoclaw/pull/3012), [#3013](https://github.com/qwibitai/nanoclaw/pull/3013) | 高 — 核心团队推动，待合并 |
| **任务系统重构** | [#2988](https://github.com/qwibitai/nanoclaw/pull/2988) “单门交付” | 中 — 已合并前序PR，此为第3/5部分 |
| **渠道丰富度** | [#2877](https://github.com/qwibitai/nanoclaw/pull/2877) (Telegram原生富渲染) | 中 — 长期开放，社区贡献 |
| **开发者工具** | [#3004](https://github.com/qwibitai/nanoclaw/pull/3004) (上下文预览工具) | 高 — 已合并 |

未被PR覆盖但值得关注的需求：用户可能期望更完善的迁移工具处理Issue #3001中的旧群组问题。

---

## 7. 用户反馈摘要

从已关闭的Issue评论中提取用户痛点：

- **CLI工具行为不完整** (#2415, #2389)：用户`glifocat`和`alexli-77`分别报告使用`bin/ncl`创建群组和布线时，缺少必要的数据库插入操作，导致功能“静默失败”——无错误提示，但容器无法启动或回复被丢弃。两者均已在本次日报周期内关闭，表明修复已完成。
- **升级后无声问题** (#3001)：用户`glifocat`指出，在2026-04-21的共享技能重构之前创建的群组，其技能内容永远不会收到更新，且日志没有任何提示。这种无声退化的用户体验极差，社区期待维护者快速采纳#3002（增加警告）并考虑自动迁移脚本。

整体反馈指向**初期用户对CLI和升级流程的信任度需要提升**，项目正通过问题修复和警告机制弥补。

---

## 8. 待处理积压

以下为开放时间较长或重要但尚未获得合并/回应的PR/Issue，建议维护者优先关注：

| 项目 | 类型 | 创建时间 | 当前状态 | 需关注原因 |
|------|------|----------|----------|------------|
| [#2877](https://github.com/qwibitai/nanoclaw/pull/2877) | PR (Feature) | 2026-06-28 | **开放，无审查评论** | Telegram原生富渲染，社区贡献，已等待13天，可能影响社区参与积极性 |
| [#2966](https://github.com/qwibitai/nanoclaw/pull/2966) | PR (Fix) | 2026-07-06 | 开放，等待合并 | 记录错误批次完成日志，提升可观察性，core-team标签但尚未合入 |
| [#3001](https://github.com/qwibitai/nanoclaw/issues/3001) | Issue (Bug) | 2026-07-10 | **开放，优先High** | 影响旧群组用户，已有对应PR #3002待合并 |
| [#2988](https://github.com/qwibitai/nanoclaw/pull/2988) | PR (Feature) | 2026-07-09 | 开放，无新动态 | 任务系统核心变更，前序已合并，此部分若延迟可能阻塞后2/5部分 |

此外，当日还有大量新开放的PR（如#2999, #3012等）等待审查，整体审查资源可能成为短期瓶颈。

---

*本日报基于 GitHub 公开数据自动生成，所有链接指向 `nanocoai/nanoclaw` 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

好的，作为AI智能体与个人AI助手领域开源项目分析师，现根据您提供的NullClaw项目数据，生成2026年7月11日的项目动态日报。

---

## NullClaw 项目日报 (2026-07-11)

### 1. 今日速览

今日项目整体活跃度中等偏下。在过去24小时内，项目未产生任何新的Pull Request或版本发布，代码合并与迭代处于停滞状态。社区讨论集中两个新报告的Bug上，其中关于Telegram频道因空闲停摆的问题（Issue #972）持续有反馈，而一个涉及A2A路由的严重安全漏洞（Issue #974）已被提出。整体而言，项目维护侧重于问题排查与安全修复，但开发产出较少。

### 2. 版本发布

无

### 3. 项目进展

项目当日无任何Pull Request被合并或关闭，核心代码库处于稳定但无新功能推进的状态。这表明项目可能正处于开发周期内的集中修复或为下一阶段迭代做准备。

### 4. 社区热点

**热点 Issue：#972 [BUG] Telegram 频道空闲后停止响应**
- **链接**: [Issue #972](https://github.com/nullclaw/nullclaw/issue/972)
- **分析**: 该问题自6月30日提出后，持续获得关注并在昨晚（7月10日）有新的更新。用户报告了Telegram集成在后台运行正常（如`ping`命令有效）但频道无响应这一“前端可用，后端不可用”的奇怪现象。核心诉求是解决通信渠道（特别是Telegram）在长时间空闲后出现的连接假死问题，这对于追求“Always-On”体验的AI助手项目至关重要。

### 5. Bug与稳定性

当日共报告2个新Bug，按严重程度排列如下：

**严重（A级）：#974 共享Bearer令牌导致跨用户任务和上下文重用**
- **链接**: [Issue #974](https://github.com/nullclaw/nullclaw/issue/974)
- **严重性**: 高。这是一个**安全漏洞**。虽然A2A路由受Bearer Token保护，但后续的权限验证仅依赖任务ID和调用者提供的`contextId`。若多个用户共享同一个有效Token（如Bob和Alice），Bob可以访问甚至重用Alice的会话上下文。这违背了基础的多租户安全隔离原则。
- **状态**: 新建，无相关修复PR。

**一般（B级）：#972 Telegram 频道因空闲而断开**
- **链接**: [Issue #972](https://github.com/nullclaw/nullclaw/issue/972)
- **严重性**: 中。影响Telegram渠道的稳定性，但后端服务本身无故障，不导致数据丢失。
- **状态**: 活跃讨论中，无相关修复PR。

### 6. 功能请求与路线图信号

**潜在功能需求（源于Bug）：**
1. **Keep-Alive / 心跳机制**: Issue #972 隐含了对**连接保活**功能的需求。用户期望系统能在空闲期间主动维持与第三方平台（如Telegram）WebSocket或长连接的心跳，避免被平台断开。
2. **会话上下文安全隔离（Tenant Isolation）**: Issue #974 揭示了**增强A2A路由权限模型**的强烈信号。社区需要确认，未来版本是否会引入基于用户身份（而非仅凭任务ID）的细粒度上下文隔离机制，或者对`contextId`进行加密签名以防止篡改。

### 7. 用户反馈摘要

从今日Issue评论中提炼的反馈如下：
- **Telegram渠道稳定性是核心痛点**: 用户 (i11010520) 在 Issue #972 中描述了“隔夜空闲后第二天早上频道失效”的场景，其使用模式（长时间后台运行）揭示了用户对AI助手**全天候可用性**的高度期待。用户在内核层面验证了`ping`命令有效，表明问题可能出在**Telegram长连接的重连逻辑**上，而非核心AI引擎。
- **对安全隔离的担忧**: 用户 (N0zoM1z0) 在 Issue #974 中提出了一个真实的安全攻击场景（Bob与Alice共享Token），展示了当前A2A路由设计在多用户环境下的薄弱环节。这反映了部分用户（可能来自企业或高级开发者群体）对**多账户隔离与数据安全性**的关注。

### 8. 待处理积压

以下为今日需维护者重点关注的未解决问题：

1. **Issue #974: [BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse**
    - **原因**: 这是一个直接影响多用户环境数据安全的严重漏洞。
    - **链接**: [Issue #974](https://github.com/nullclaw/nullclaw/issue/974)
    - **优先级**: **紧急**，建议尽快确认并标记为高优先级。

2. **Issue #972: [bug] telegram channel stop respond after some idle time**
    - **原因**: 该问题已存在超过一周，直接损害了Telegram渠道的用户体验，且近期有用户反馈，表明问题仍未解决。
    - **链接**: [Issue #972](https://github.com/nullclaw/nullclaw/issue/972)
    - **优先级**: **中等**，应安排修复。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，根据您提供的 IronClaw 项目 GitHub 数据，我为您生成了 2026-07-11 的项目动态日报。

---

## IronClaw 项目动态日报 — 2026-07-11

### 1. 今日速览

项目今日活跃度极高，Issues 与 PR 更新数量均处于近期高位（36 条 Issue、50 条 PR），表明社区反馈与开发活动都十分密集。核心开发团队正大力聚焦于 Reborn 运行时的稳定性与韧性，通过多组大型 PR 解决长期存在的工具调用失败、上下文压缩错误和模型恢复能力不足等顽疾。同时，社区贡献者也非常活跃，提交了包括 MCP 超时、持久化记忆和智能工具检索在内的数个重量级功能提案。尽管目前尚无新版本发布，但项目正处于一个关键的“修复与强化”阶段，为下一轮重大更新奠定基础。

### 2. 版本发布

无。

### 3. 项目进展

今日合并/关闭了多个对项目稳定性至关重要的 PR，显著提升了 Reborn 运行时的健壮性。

- **修复关键 Bug 与 Crash**:
    - **`#5967`**: **【关键修复】** 修复了因持久化卷上的无效扩展清单导致 Reborn 在启动时陷入崩溃循环（Crash-loop）的严重问题。现在启动时会优雅地跳过无效清单，而非中断整个加载过程。
    - **`#5895`**: **【重大修复】** 修复了在工具执行成功后仍因上下文压缩（Compaction）失败导致 Run 失败的长期 Bug。现在会将此类错误视为可恢复的提示步骤跳过，而非终止运行，极大地提高了长任务的成功率。
- **提升循环执行引擎性能**:
    - **`#5960`**: **【性能优化】** 将代理循环的默认迭代上限从 `32` 次提升至 `256` 次，以处理需要大量工具调用的复杂任务（如分析大型文档），避免中途失败。
- **重构与代码清理**:
    - **`#5950`**: **【架构改进】** 将生产环境的 LocalDev 能力端口（Capability-port）暴露给集成测试框架，解决了测试桩与生产代码不一致的问题，为未来更可靠的测试覆盖铺平了道路。
    - **`#5954`**: **【架构改进】** 引入了 `RunFailureReason` 分类器的基础设施（第一阶段），为所有终端 Run 失败提供统一的分类标准，是提升错误可恢复性的关键一步。
- **引入新技能**:
    - **`#5844`**: **【技能增强】** 在 Reborn 的系统提示中新增“计算”章节，明确指导代理在处理复杂的统计、聚合或单位转换时应使用工具进行计算，而不是依赖模型内部推理，这有助于减少模型“幻觉”并提高结果准确性。

社区贡献者（尤其 `tmartin2113`）提交了一系列高质量的功能 PR，虽未合并但表明了项目未来的发展方向。

### 4. 社区热点

今日讨论热度最高的议题反映了用户对基础功能可靠性与UI/UX一致性的高度关注。

- **`#5948`** **（5条评论）**: **【信息误报】** 助手错误地报告 GitHub 扩展已“激活”，尽管该扩展仅处于“已安装”状态。这暴露了助手状态检查与系统实际状态之间的脱节，用户对助手给出的确定性信息高度信任，此类误导会损害用户体验。
- **`#5747`** **（3条评论）**: **【交互问题】** 用户无法解除 Slack 的配对。`/pair`命令拒绝重新授权，且UI上没有任何“断开连接”的按钮。此问题虽已解决，但讨论热度表明用户对集成服务的控制权（特别是解绑操作）非常在意。

### 5. Bug 与稳定性

今日报告的 Bug 质量很高，涵盖了从 P1（严重）到 P3（一般）的各个级别，核心问题集中在代理行为异常和功能失效上。

**P1 (严重)**
- **`#5943`**: Slack DM 消息错误地发送到当前频道而非用户私信。这是一个功能性的严重错误，破坏了“私信”的语义。目前尚无关联修复 PR。
- **`#5946`**: 助手在创建自动化流程时，先修改了Google Sheet，然后才发现所需的 Slack 触发器不可用。这违反了“先检查，后执行”的原则，可能导致数据污染。目前尚无关联修复 PR。

**P2 (高)**
- **`#5836`**: 定时任务（Routine）因“No thread attached”错误每次都失败，成功率 0%。这是一个系统性的调度问题。
- **`#5834`**: 请求代理断开 Slack 连接时被错误拒绝，导致用户无法通过代理解除集成。
- **`#5885`**: 审批通知的点击行为错误，用户点击后无法看到审批消息/卡片，无法进行审批操作。
- **`#5944`**: Slack DM 投递静默失败，系统报告成功但消息并未送达，完全违背了用户预期。
- **`#5945`**: 长时间多工具调用后，Run 因“模型提供者不可用”而失败，可能掩盖了更深层的超时或资源问题。
- **`#5879`**: 错误横幅在后续成功 Run 后仍不消失，导致 UI 状态混乱，干扰用户判断。

**P3 (中)**
- **`#5947`**: 删除线程后，UI 侧边栏需用户手动刷新才能更新，前端响应性不足。
- **`#5891`**: 运行详情页面的“上次完成时间”显示的是当前运行的时间戳，具有误导性。

**关键构建/稳定性修复**
- **`#5966`** -> **`#5967`**: **【已修复】** 启动崩溃循环问题，破坏性极高。

### 6. 功能请求与路线图信号

社区贡献者 `tmartin2113` 提交的三个大型 PR 是今日最重要的路线图信号，它们共同指向一个更智能、更灵活的代理架构。

- **`#5973` (feat(mcp): per-server timeouts + background-job bridge)**: **【MCP 增强】** 为 MCP 服务器引入可配置的超时时间，并支持后台任务桥接。这是对 MCP 生态的重要扩展，使 IronClaw 能更好地与慢速或异步服务集成。
- **`#5974` (feat(memory): episodic memory — cross-session summaries + recall)**: **【记忆系统】** 引入“情节记忆”（Episodic Memory），自动将对话总结并索引，并在新对话中注入相关摘要。这是实现长期记忆和上下文感知的关键一步。
- **`#5972` (feat(tools): per-turn tool retrieval + find_tools discovery)**: **【工具检索】** 实现按轮次（Per-turn）的工具检索，通过向量相似度匹配，仅向模型提供相关的核心工具，而非所有工具。这能显著减少提示词长度，提升效率和模型焦点。

此外，核心开发者也提交了**`#5975`（检测提示缓存断裂并停止无效压缩）** 和 **`#5970`（基于用户的 MCP 注册存储）** 等功能 PR，显示项目正系统性地解决性能和扩展性问题。

### 7. 用户反馈摘要

从今日的 Issues 中可以提炼出用户的几类关键反馈：

- **信任与准确性受损**：用户对助手宣称的能力与实际能力之间的鸿沟感到困扰（`#5948`）。当助手错误地确认某功能已准备就绪时，会破坏用户对整个系统的信任。
- **关键集成不可靠**：Slack 集成是用户反馈的重灾区，包括无法解除配对 (`#5747`)、消息投递失败 (`#5944`) 和发送到错误渠道 (`#5943`)。这些基础功能的稳定性问题严重影响核心工作流。
- **自动化易用性差**：Routine 的 0% 成功率 (`#5836`) 和无法查看其运行日志 (`#5837`) 让用户可以“设置但无法依赖”自动化任务。创建 Routine 时暴露内部实现细节 (`#5707`) 也增加了用户困惑。

### 8. 待处理积压

以下为长期未关闭或今日新开但值得关注的重要 Issue，提醒维护者留意。

- **`#5741`** `[builtin.http.save can fail with OutputTooLarge]`：一个关于保存大 HTTP 响应失败的长期 Issue，对于需要抓取网页内容的场景影响较大。
- **`#5640`** `[Harness gap: no RecordingSecurityAuditSink...]`：一个关于集成测试缺口的技术债 Issue，阻碍了有效的测试覆盖。
- **`#5958`** `[Reborn loop executor: store I/O has no wall-clock bound...]`：一个关于存储 I/O 操作缺少硬性时间上限的性能问题，可能成为系统不稳定的潜在根源。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI 项目动态日报 (2026-07-11)

### 1. 今日速览

项目在过去 24 小时保持高活跃度，发布了 **2026.7.10 版本**，共合并/关闭 9 个 PR，涵盖多个领域的修复与增强。社区反馈方面，3 个 Issue 中有 1 个新报 Bug（多 Agent 下 `USER.md` 被覆盖，编号 #2293），引起讨论；另有 2 个长期未响应的功能需求仍处于开放状态。整体来看，项目在持续迭代稳定性的同时，已着手跟进社区呼声较高的 UI 体验改进（如会话列表分组、附件增强等）。

### 2. 版本发布

**LobsterAI 2026.7.10** 于昨日发布，主要新增特性包括：

- **子智能体协同**：支持委托子智能体协作（`feat(agents): support delegated subagent collaboration`）
- **协作用户可最小化权限提示**（`feat(cowork): add minimizable permission prompts`）

**破坏性变更**：无。

**迁移注意事项**：新版本涉及的子智能体协作功能可能需要用户重新配置 Agent 间的委托关系；权限提示窗口新增最小化按钮，行为会平滑升级，无需额外操作。

### 3. 项目进展

今日合并/关闭的重要 PR 集中在 **修复与质量改进** 及 **功能增强** 两个方向：

| PR | 类型 | 摘要 |
|----|------|------|
| [PR #2316](https://github.com/netease-youdao/LobsterAI/pull/2316) | 修复 | 修复 Windows 标题栏在侧边栏折叠时 Logo 被压缩的问题 |
| [PR #2315](https://github.com/netease-youdao/LobsterAI/pull/2315) | 修复 | 修复 Cowork 中排队状态的跟进协调器连接问题，确保应用最小化时也能处理排队跟进任务 |
| [PR #2314](https://github.com/netease-youdao/LobsterAI/pull/2314) | 修复 | 修复定时任务中企业微信/钉钉群 ID 大小写丢失问题，保留原生大小写 |
| [PR #2313](https://github.com/netease-youdao/LobsterAI/pull/2313) | 修复 | 修复 Cowork 排队操作中只提交选定项的问题，保留 FIFO 顺序 |
| [PR #2312](https://github.com/netease-youdao/LobsterAI/pull/2312) | 修复 | 修复 `askuser` 最小化状态丢失 |
| [PR #2311](https://github.com/netease-youdao/LobsterAI/pull/2311) | 修复 | 修复多 Agent 下 FTS-only 内存索引迁移问题 |
| [PR #2310](https://github.com/netease-youdao/LobsterAI/pull/2310) | 功能 | 为 Cowork 会话增加文件夹上下文附件支持（粘贴/拖拽本地文件夹作为提示附件） |
| [PR #2306](https://github.com/netease-youdao/LobsterAI/pull/2306) | 修复 | 修复 IM 群聊定时任务路由，过滤无效目标并迁移旧版公告任务 |
| [PR #2317](https://github.com/netease-youdao/LobsterAI/pull/2317) | 发布 | 版本发布 PR（Release/2026.7.8）|

整体来看，项目在 **Cowork 协作稳定性**、**定时任务 / IM 通道**、**多 Agent 内存管理** 方面有显著提升，并新增了文件夹附件等实用功能。

### 4. 社区热点

今日讨论最活跃的 Issue 为：

- **[#2293 [OPEN] 重启后，多个agent下的USER.md被覆盖替换的BUG？](https://github.com/netease-youdao/LobsterAI/issues/2293)** —— 作者详细描述了多 Agent 场景下 `USER.md` 被主 Agent 内容覆盖的行为，确认是近期更新引入的回归 Bug。已有 3 条评论，用户期望能对不同的 Agent 保留独立的 “关于你” 设置。该问题严重影响了多 Agent 使用流程，需优先排查。

此外，PR 中 **#2310 文件夹附件** 和 **#2315 排队协调器修复** 也获得较多关注（虽无直接评论，但从提交数量和更新频率可看出团队重点投入）。

### 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue/PR | 描述 | 状态 |
|----------|----------|------|------|
| **严重** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 多 Agent 下 `USER.md` 在重启后被主 Agent 覆盖 | 新报，无 fix PR |
| 一般 | [#1392 已关闭](https://github.com/netease-youdao/LobsterAI/issues/1392) | 部分定时任务开关点击无反应（已标记为 stale 并关闭） | 已关，推测已在某个版本修复 |
| 一般 | [#2293 附带问题](https://github.com/netease-youdao/LobsterAI/issues/2293) | 修改一个 Agent 设置影响其他 Agent | 同一条 Issue 描述 |
| 轻微 | [PR #2316](https://github.com/netease-youdao/LobsterAI/pull/2316) | Windows 标题栏 Logo 压缩（已修复并合并） | 已修复 |
| 轻微 | [PR #2312](https://github.com/netease-youdao/LobsterAI/pull/2312) | `askuser` 最小化状态丢失（已修复并合并） | 已修复 |

**稳定性评估**：团队对昨日出现的回归问题（如大小写、Logo 压缩、排队协调）响应迅速，多数已通过昨日 PR 修复并随版本发布。但 #2293 作为多 Agent 核心数据持久化问题，目前尚无修复 PR，需重点跟进。

### 6. 功能请求与路线图信号

今日活跃的功能需求（含已有对应 PR 的）：

| 需求 | 来源 | 状态 | 可能纳入下一版本？ |
|------|------|------|------------------|
| **会话列表按时间分组展示** | [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) + [PR #1338](https://github.com/netease-youdao/LobsterAI/pull/1338) | PR 已开放（stale 标签） | 高，已有完整实现 |
| **会话列表错误状态红点** | [PR #1331](https://github.com/netease-youdao/LobsterAI/pull/1331) | 开放（stale 标签） | 中，增强运维感知 |
| **MCP 自定义服务器 JSON 导入** | [PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336) | 开放（stale 标签） | 中，提升配置效率 |
| **定时任务支持工作日（周一至周五）** | [PR #1335](https://github.com/netease-youdao/LobsterAI/pull/1335) | 开放（stale 标签） | 高，社区常用需求 |
| **i18n 附件标签及 Escape 关闭** | [PR #1333](https://github.com/netease-youdao/LobsterAI/pull/1333) | 开放（stale 标签） | 低，属于已分配的 issue #1223 的后续 |

### 7. 用户反馈摘要

从 Issue #2293 的评论中可提取典型用户痛点：

> “我在软件里建立了多个agent，最近发现只要改了一个agent设置里的‘关于你’页面内容或者修改USER.md里的内容，其他agent里也同步进行了修改，这样就没法对不同agent建立不同的需求。”

用户使用场景为多 Agent 定制化配置，期望每个 Agent 保持独立的 `USER.md` 配置文件。此行为在最近更新前是正常的，新版引入了回归，用户表示“怀疑是最近更新时出现的一个bug”。侧面反映出项目用户群体中存在较多多 Agent 重度使用者。

### 8. 待处理积压

以下 Issue / PR 长期无进展，建议维护者关注：

| 项目 | 类型 | 状态 | 创建时间 | 最后更新 | 说明 |
|------|------|------|----------|----------|------|
| [#2293 多Agent USER.md覆盖](https://github.com/netease-youdao/LobsterAI/issues/2293) | Bug | Open | 2026-07-07 | 2026-07-10 | 严重回归，需优先分配资源 |
| [#1337 会话列表时间分组](https://github.com/netease-youdao/LobsterAI/issues/1337) | 功能需求 | Open | 2026-04-02 | 2026-07-10 | 已有对应 PR #1338，但被 stale 标记 |
| [#1331 错误状态红点](https://github.com/netease-youdao/LobsterAI/pull/1331) | PR | Open | 2026-04-02 | 2026-07-10 | 代码完整，需 review 与 merge |
| [#1336 MCP JSON导入](https://github.com/netease-youdao/LobsterAI/pull/1336) | PR | Open | 2026-04-02 | 2026-07-10 | 同上 |
| [#1275 依赖 CI 更新](https://github.com/netease-youdao/LobsterAI/pull/1275) | PR | Open | 2026-04-02 | 2026-07-10 | Dependabot 自动创建，需人工合并 |
| [#1276 依赖 CI 更新](https://github.com/netease-youdao/LobsterAI/pull/1276) | PR | Open | 2026-04-02 | 2026-07-10 | 同上 |

---

*本日报基于 LobsterAI 公开仓库实时数据生成，数据快照时间：2026-07-10 23:59 UTC。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-07-11

---

## 1. 今日速览

- 项目在过去24小时内**无新 Issue 提交或关闭**，社区讨论进入低活跃期。
- 仅有一项待合并的 Pull Request（#1146），专注于新增 GPT-5.6 系列模型支持，目前仍处于开放状态。
- 无新版本发布，主分支状态稳定，但缺乏新功能合并或 Bug 修复的动态。
- 整体活跃度较低，可能反映维护团队正在集中精力审核 #1146 或处于开发间歇期。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

**待合并 PR 对项目推进的意义：**

- **#1146 – Add GPT-5.6 model support**（[链接](https://github.com/moltis-org/moltis/pull/1146)）  
  该 PR 计划注册 GPT-5.6 的三个变体（Sol、Terra、Luna）至 OpenAI 及 OpenAI Codex 的回退目录，同时统一应用官方 API 的 1.05M 上下文窗口、ChatGPT/Codex 后端的 372K 限制，并替换已弃用的模型引用。  
  - **影响范围：** 模型注册、配置示例、provider 选择文档。  
  - **今日状态：** 仍处于开放待合并，尚未触发任何合并动作。若合并，将大幅提升对最新 OpenAI 模型的支持能力，为后续版本发布奠定基础。

> 项目总体未产生实质性推进，仅有一项 PR 待审核，无合并或关闭事件。

---

## 4. 社区热点

**唯一活跃的讨论焦点：**

- **#1146 – Add GPT-5.6 model support**（[链接](https://github.com/moltis-org/moltis/pull/1146)）  
  尽管评论数为 `undefined`（可能因 GitHub 接口未返回准确数据），但作为过去 24 小时内唯一的 PR 更新，它自然成为社区关注的核心。  
  - **背后诉求：** 用户/贡献者希望 Moltis 能尽快支持最新的 GPT-5.6 系列模型，以适应 OpenAI 近期发布的 API 变更（增大上下文窗口、淘汰旧模型）。此举可避免开发者手动配置回退逻辑，降低使用门槛。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告。**  
项目在稳定性方面无负面反馈，无崩溃、回归或严重问题被记录。当前唯一开放 PR 不涉及 Bug 修复。

---

## 6. 功能请求与路线图信号

- **#1146** 本身即是一项功能请求的实施：添加 GPT-5.6 模型支持。  
  该 PR 对应的功能大概率会被纳入下一个版本（若审核通过），因为它直接回应了 OpenAI 平台的最新变化，且属于基础模型适配类需求，优先级较高。

- 除此之外，无其他新功能请求被提出。

---

## 7. 用户反馈摘要

由于今日无新的 Issue 或 PR 评论（评论数为 `undefined`），无法提取具体用户反馈。  
从 #1146 的摘要来看，用户或贡献者希望保持与官方 API 同步，并清理已弃用的模型引用，这暗示了社区对**“配置准确性与时效性”**的潜在诉求。

---

## 8. 待处理积压

当前项目内所有 Issue 均处于清理后的状态（24 小时内未更新），但需关注以下长期积压可能性：

- **PR #1146** 自 2026-07-09 创建，已开放 2 天，未获得 Review 或合并。若继续无人处理，可能成为技术债。建议维护者尽快组织审查。

---

**总结：** 项目今日较为平静，核心事件是 #1146 的延续。建议维护团队优先处理该 PR，以保持项目对最新 OpenAI 模型的兼容性，并避免社区活跃度进一步下降。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为一名 AI 智能体与个人 AI 助手领域开源项目分析师，我将根据您提供的 CoPaw 项目（基于 QwenPaw 仓库数据）的 GitHub 数据，为您生成一份结构清晰、数据驱动的项目动态日报。

---

# **CoPaw 项目动态日报 | 2026-07-11**

**项目名称:** CoPaw (github.com/agentscope-ai/CoPaw)
**数据周期:** 2026-07-10 — 2026-07-11
**分析师:** AI Agent 分析师

## 1. 今日速览

今日 CoPaw 项目（基于 QwenPaw 仓库数据）进入 **v2.0.0 稳定版发布及初期适配** 的关键阶段。项目活跃度极高，过去24小时记录了43条 Issue 和43条 PR 的更新，并发布了3个新版本。虽然 v2.0.0 正式版带来巨大架构升级和核心特性，但同时也出现了由于 AgentScope 2.0 迁移及新功能引入导致的 **破坏性变更和若干严重 Bug**，例如桌面沙箱性能崩溃和 MCP 权限配置失效，社区用户反馈和问题报告非常集中。整体来看，项目处于 **高迭代、高关注度** 的快速演进期，但稳定性面临挑战。

## 2. 版本发布

过去24小时内共发布3个版本，核心是 **v2.0.0 稳定版** 的正式上线。

- **v2.0.0 (Stable):**
    - **更新内容**: 这是基于 AgentScope 2.0 的重构版本，是一次重大架构升级。Release 提及了核心重构、Runtime 2.0 等特性。
    - **破坏性变更**: **注意：** 此为重大版本升级。相关 Issue (如 #4727) 已明确这是一个 **Breaking Change**。用户需注意后端依赖从 AgentScope 1.x 迁移至 2.0，可能带来 API 变动、插件兼容性问题和配置迁移。
    - **迁移注意事项**: 用户反馈 (如 #5954, #5956) 显示，升级后可能遇到工作目录 `.mcp` 文件权限问题、旧版钉钉消息格式不兼容等问题。建议用户在升级前仔细阅读迁移指南（社区已在 #5948 中呼吁提供），并备份数据和自定义配置。

- **v2.0.0-beta.7:**
    - **更新内容**: 主要为 QwenPaw 2.0 官网主页更新，以及修复了 `ReMe` 记忆模块中 `session_id` 传播的 Bug。

- **v2.0.0-beta.6:**
    - **更新内容**: 新增了渠道模块的单元测试，修复了 `envelope` 中工具结果错误状态传递的问题。

## 3. 项目进展

今日项目主要进展体现在 **核心迁移完成后的稳定性修复与功能补全** 上。

- **核心迁移**: PR #5942 合并了 v2.0.0 版本号，标志着从 AgentScope 1.x 到 2.0 的后端迁移（#4727）正式进入稳定阶段。
- **记忆修复**: PR #5938 修复了记忆归档功能中 `session_id` 未传播的问题，确保了记忆摘要能被正确关联到对应会话。
- **MCP 工具配置**: PR #5949 针对 Issue #5947，修复了 MCP 工具访问策略更新后未能立即生效的问题。
- **工具结果截断**: PR #5953 引入统一方案，用于处理长工具结果的截断，旨在解决因截断提示导致模型逆向召回历史（#5946）的问题。
- **用户界面改进**: PR #5869 新增了在 TUI 和 Web 控制台中使用斜杠命令 (`/new`、`/history` 等) 的自动补全功能。
- **其他**: PR #5932 更新了 QwenPaw 2.0 的文档，PR #5931 引入了基于受限 token 的 Windows 沙箱。

**项目步伐**: 项目组通过快速合并修复 PR 来应对 v2.0.0 发布后暴露的稳定性问题，同时新功能（如 Windows 沙箱、UI 增强）也在持续集成中。

## 4. 社区热点

今日社区讨论热度极高，主要集中在 **v2.0.0 正式版的体验反馈和 Bug 报告**。

1. **[[Bug]: Desktop shell sandbox: icacls timeout ... (#5951)](https://github.com/agentscope-ai/QwenPaw/issues/5951)**: 5条评论，0赞。 该Issue指出了 **Windows 桌面壳沙箱的严重问题**：`icacls` 超时导致 `pwsh`进程无限递归，内存占用高达20GB，且无法关闭。用户表示需要回滚到 v1.1.12.post3。这是今天最严重的稳定性问题之一。
2. **[[bug] V2.0.0版本 MCP中禁用了某些子工具的访问,但是agent还是可以调用 (#5947)](https://github.com/agentscope-ai/QwenPaw/issues/5947)**: 4条评论，0赞。 用户报告 **MCP 工具的权限控制失效**，即使设置为“拒绝”，Agent 依然可以调用被禁用的工具。这是一个严重的权限逻辑 Bug。PR #5949 已提交修复。
3. **[[Bug]: 中文记忆文件触发 embedding 400 错误 (#5950)](https://github.com/agentscope-ai/QwenPaw/issues/5950)**: 3条评论，0赞。 中文用户遇到 **Embedding 模型因字符截断而非 Token 截断导致的请求错误**。这暴露了 v2.0.0 中多语言支持的一个具体缺陷。

**诉求分析**: 社区用户对新版本的热情和期待很高，但问题也非常集中。**稳定性、性能和安全** 是用户最关心的核心，尤其是 Windows 平台的桌面端体验和新引入的权限控制功能。

## 5. Bug 与稳定性

今日报告的 Bug 按严重程度排列如下：

- **严重 (导致不可用或数据损失):**
    - **#5951**: Windows 桌面壳沙箱导致 `pwsh`进程爆炸，内存耗尽，无法关闭。 **状态: 未修复，暂无PR。**
    - **#5856**: 工具调用结构 (`tool_call`) 在上下文压缩 (`context compaction`) 中丢失，导致 API 错误。 **状态: 未修复，暂无PR。**
    - **#5955**: v2.0.0 WebUI 中技能列表显示不全（20个限制），已禁用技能在页面不可见。 **状态: 未修复，暂无PR。**

- **中等 (功能异常或错误):**
    - **#5947**: MCP 工具访问控制策略 (允许/拒绝) 失效。 **状态: 已修复 (PR #5949)。**
    - **#5950**: 中文记忆文件因字符截断导致 Embedding 请求 400 错误。 **状态: 未修复，暂无PR。**
    - **#5952**: Auto-memory 后台任务因找不到 `agentscope.tool._builtin._scripts` 模块而失败。 **状态: 未修复，暂无PR。**
    - **#5946**: 长工具输出截断提示 (`<<<TRUNCATED...>>`) 错误地诱导 Agent 调用 `recall_history`，导致生成失败。 **状态: 修复中 (PR #5953)。**
    - **#5956**: 从 v1.x 升级后，包含旧版文件工具结果的钉钉会话加载失败 (Pydantic ValidationError)。 **状态: 未修复，暂无PR。**

## 6. 功能请求与路线图信号

今日社区提出以下新功能或改进需求，部分已有对应 PR：

| Issue / PR | 功能描述 | 社区价值 | 路线图信号 |
| :--- | :--- | :--- | :--- |
| [#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903) | *希望增加会话分组及导入导出功能* | **高**：改善多会话管理效率。 | **已有设计提案** [#5943](https://github.com/agentscope-ai/QwenPaw/issues/5943)，可能纳入下一版本。 |
| [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453) | *希望在桌面端支持 LaTeX 公式渲染 (KaTeX)* | **中**：提升学术/技术场景体验。 | 暂无关联PR，属长期需求。 |
| [#3569](https://github.com/agentscope-ai/QwenPaw/issues/3569) | *定时任务支持查看执行记录和编辑参数* | **中**：增强自动化任务管理的可观测性。 | 无近期进展，可能非当前优先。 |

**趋势**: 用户需求正从 “能用” 转向 “好用”，对 **数据管理（会话导入导出）、专业内容呈现（LaTeX）和自动化工具的可维护性** 提出了更高要求。

## 7. 用户反馈摘要

- **稳定性质疑**: 多位用户在 v2.0.0 发布后遭遇严重 Bug，#5951 和 #5955 的创建者明确表示了升级带来的挫败感，甚至建议 “回滚到旧版本”，这对新版本的推广构成挑战。
- **权限控制困惑**: 用户在 [#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954) 中反馈新设计的三种权限模式 (关闭/自动/智能) 操作繁琐，不够灵活。建议增加 “工具白名单+用户选择执行次数” 的简化模式。
- **多语言支持问题**: [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) 和 [#5956](https://github.com/agentscope-ai/QwenPaw/issues/5956) 都涉及中文场景的 Bug，表明非英文场景下的测试可能不够充分，影响了中文用户社区的使用体验。
- **升级路径要求**: 用户在 [#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948) 中明确提出，希望官方提供清晰的 v2.0.0 升级指南，特别是破坏性变更、历史数据兼容性等问题。这是社区对版本迁移的普遍焦虑。

## 8. 待处理积压

部分长期未解决或今日关键但未获得修复资源的问题，提醒维护者关注：

| Issue | 描述 | 持续时间 | 影响范围 |
| :--- | :--- | :--- | :--- |
| [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) | `FunctionCallOutput` 的 `call_id` 验证错误 (ValidationError) | 3个月 | 影响特定硬件 (RK3318) 上的 Linux 用户。虽已关闭，但未根本解决，且可能与 AgentScope 2.0 迁移相关。 |
| [#3437](https://github.com/agentscope-ai/QwenPaw/issues/3437) | 无法手动添加 Kimi Code 等第三方 API | 3个月 | 限制了用户选择模型供应商的自由度。 |
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | **Windows 沙箱内存爆炸** (今日新报) | 1天 | **严重**，影响 Windows 桌面版用户的核心使用。目前无任何 PR 关联，需 **高优先级** 介入。 |
| [#5956](https://github.com/agentscope-ai/QwenPaw/issues/5956) | **v2.0.0 升级后钉钉旧会话加载失败** (今日新报) | 1天 | **高**，影响从 v1.x 升级并依赖钉钉渠道的用户。目前无任何 PR 关联。 |

**维护者提醒**: 请重点关注 **#5951** 和 **#5956**，它们是 v2.0.0 发布后直接影响核心用户体验的稳定性问题。同时，提供一份清晰的 **v2.0.0 升级指南** 对于安抚社区情绪、降低迁移摩擦至关重要。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，以下是基于您提供的 ZeroClaw 项目数据生成的 2026-07-11 项目动态日报。

---

# ZeroClaw 项目动态日报 (2026-07-11)

**分析师:** AI Agent / OSS Analyst  
**数据来源:** ZeroClaw GitHub (github.com/zeroclaw-labs/zeroclaw)  
**数据时间:** 2026-07-10 ~ 2026-07-11

## 1. 今日速览

ZeroClaw 项目今日保持**极高活跃度**，尤其是在代码贡献和社区反馈方面。过去24小时内产生了**50条 Pull Request**和**18条 Issue**，开发活动频繁，但大量待合并PR与尚未修复的高危Bug并存，表明项目正处于密集的功能开发与修复阶段。社区对代理桥接协议的统一、Telegram Image 的 bug 修复、以及 Gemini 函数的兼容性问题表现出高度关注。项目未发布新版本，但多项功能与修复已接近就绪状态。

## 2. 版本发布

**(无)** 无新版本发布。

## 3. 项目进展

过去24小时内，项目成功合并/关闭了 **5个重要议题**，主要集中在代码质量提升和功能完善上，推动了项目的健康演进。

- **技能系统错误处理本地化:** 关闭了 `#8956` [refactor(skills): localize the pre-existing `skills install` error paths through Fluent](https://github.com/zeroclaw-labs/zeroclaw/issues/8956) 并合并了对应的 PR `#8957`。这标志着整个技能的安装和审计错误路径已全面转向 Fluent 本地化系统，提升了多语言环境的用户体验和代码一致性。
- **Web 网关新增功能:** 关闭了 `#8677` [Feature: Add uses_memory check box to web gateway](https://github.com/zeroclaw-labs/zeroclaw/issues/8677)。现在用户可以在 Web 管理界面上为自动化任务勾选“使用记忆”选项，增强了 Web UI 的功能完整性。
- **CLI 功能完善:** 关闭了 `#8397` [Feature: Expose per-cron-job `uses_memory` flag in CLI and cron_add/cron_update tools](https://github.com/zeroclaw-labs/zeroclaw/issues/8397)。此功能将 `uses_memory` 标志暴露到 CLI 和工具中，使得通过命令行或 Agent 脚本管理定时任务时也能精细控制内存上下文的使用。

这些进展表明项目正在**系统性地打磨现有功能**，补齐用户体验短板，同时提升代码的内部质量。

## 4. 社区热点

今日社区讨论最为活跃和关注度最高的话题集中在协议架构和关键功能 BUG 上。

- **[RFC] 统一 WebSocket 协议:** Issue `#8798` [RFC: Consolidate /ws/chat and /acp onto a single wire protocol](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) 提出了一个重大架构变更，即合并 `/ws/chat` 和 `/acp` 两条 WebSocket 信道。提议者认为当前的双协议架构冗余、难以维护，并增加了外部客户端集成的门槛。这一提议引发了关于协议统一成本和收益的讨论，反映了社区对**简化项目架构和提升开发者体验**的强烈追求。
- **[Bug] Telegram 多图请求异常:** Issue `#5514` [Bug: Agent request appends each subsequent image in each request when sending two or more images](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) 是今日评论最多的 Bug 报告。用户指出在 Telegram 上发送多张图片时，Agent 会将其解析为多次独立请求，导致输出重复消息。这是一个**影响核心用户体验**的交互问题，社区对其修复方案的关注度很高。

## 5. Bug 与稳定性

今日报告的 Bug 覆盖运行时、通道和用户界面，其中包含一个严重程度较高的崩溃问题。

**严重级别排序（高到低）：**

1.  **[S1 - 工作流阻塞] Gemini 函数调用失败:**
    -   **Issue:** `#8934` [Bug: Gemini function calls fail because thought_signature is dropped from assistant history](https://github.com/zeroclaw-labs/zeroclaw/issues/8934)
    -   **描述:** 使用 Gemini 模型进行函数调用时，后续请求因缺少 `thought_signature` 而被 Gemini API 拒绝。
    -   **影响:** 完全阻塞了使用 Gemini 原生函数调用的 Agent 工作流。
    -   **状态:** 无关联修复 PR。

2.  **[高风险] 技能审查分支崩溃导致 Daemon SIGSEGV:**
    -   **Issue:** `#8654` [Bug: skill-review fork panics (out-of-range slice) → daemon SIGSEGV](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)
    -   **描述:** 执行大量工具调用后，后台技能审查进程 fork 时因切片越界而发生恐慌，在 `panic = abort` 配置下导致整个 Agent 进程以 SIGSEGV 退出。
    -   **状态:** 已有一个修复 PR `#8680` 处于开放状态。

3.  **[功能阻塞] Telegram 命令注册失败:**
    -   **Issue:** `#8950` [Bug: Telegram setMyCommands rejected with BOT_COMMANDS_TOO_MUCH](https://github.com/zeroclaw-labs/zeroclaw/issues/8950)
    -   **描述:** 当 Agent 的技能/工具/内置命令超过 100 个时，Telegram 的 Bot 命令菜单注册失败（400 Bad Request），导致命令菜单完全失效。
    -   **影响:** 影响拥有大量工具的 Agent 在 Telegram 上的可用性。
    -   **状态:** 无关联修复 PR。

4.  **[S2 - 性能退化] 循环检测器深度克隆:**
    -   **Issue:** `#8936` [Bug: loop_detector::hash_value deep-clones the entire tool-args JSON tree](https://github.com/zeroclaw-labs/zeroclaw/issues/8936)
    -   **描述:** 循环检测器在每次工具调用时都深度克隆整个参数 JSON 树，导致不必要的内存分配和 RSS 膨胀。
    -   **影响:** 在长工具链对话中会显著降低性能。
    -   **状态:** 无关联修复 PR。

## 6. 功能请求与路线图信号

社区提出了多个具有前瞻性的功能请求，信号指向项目未来的发展方向。

- **协议标准化与外部集成:**
    - `#8798` 提出的统一 WebSocket 协议 (RFC)。此 RFC 如果被接受，将是一个**重大架构决策**。PR `#8486` (添加 OpenAI Chat Completions 端点) 和 PR `#8173` (Web 内应用升级) 均与提升外部集成能力和开发者体验相关。这些表明项目正**逐渐从单一的本地工具向一个可集成、可扩展的平台演进**。

- **遥测与可观测性增强:**
    - `#8933` [Feature: Add gen_ai.conversation.id for cross-turn session correlation in OTel export](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) 提出增加跨会话的关联 ID。这表明项目团队或用户正认真考虑在生产环境中部署和监控 ZeroClaw，这是项目走向成熟的标志。

- **媒体生成能力拓展:**
    - `#6563` [Feature: Comfy Cloud / ComfyUI as shared media provider](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) 请求将 ComfyUI（包括其云服务）作为一级媒体生成提供商。这预示着项目希望从单纯的对话代理，扩展到更强大的**多媒体内容生成**领域。

- **部署与运维优化:**
    - `#8958` [Feature: ACP agent selection via ?agent= query param](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) 是一个基于实际第三方客户端集成的需求，显示了社区对更灵活、标准化的多代理管理方案的需求。

## 7. 用户反馈摘要

从今日的 Issues 及评论中，可以提炼出以下真实用户痛点：

- **“Telegram 用户体验不佳”:** 用户 `aq-uua` 反馈发送多图却收到重复回复的问题 (`#5514`)，表明 **Telegram 通道的交互逻辑需要优化**。用户 `nikita-rulenko` 反馈命令注册失败 (`#8950`)，影响了依赖命令菜单的用户体验。
- **“文档与指南存在问题”:** 用户 `cr3a7ure` 在 `#8810` 中直言 “the documentation is wrong”（文档是错的），并指出 Telegram 示例是错误的。这是一个**直接且尖锐的用户负反馈**，提示维护者需要对官方文档进行审查和测试。
- **“外部客户端集成的困难”:** 用户 `metalmon` 在 `#8958` 中提到，其尝试使用第三方 ACP 客户端 (Thunderbolt) 进行连接，这驱动了多代理端点的需求。这反映了**社区正在尝试将 ZeroClaw 作为基础设施组件进行集成**，而非仅仅作为一个独立的聊天应用。
- **“对代码质量的关注”:** 用户 `wangmiao0668000666` 提交了一个关于循环检测器深度克隆的性能问题 (`#8936`)，这体现了**社区贡献者正在深入审查核心代码**，并关注潜在的性能瓶颈。

## 8. 待处理积压

以下项长期未得到有效解决或响应，值得维护者关注：

- **长期未解 Bug - Telegram 图片问题:**
    - `#5514` 报告于 2026-04-08，即使已产生一些讨论，但至今仍在开放状态。这是一个**接近 3 个月未解决的影响核心体验的 Bug**，可能需要引入新的维护者或调整优先级。

- **被阻塞的 PR - 等待作者操作:**
    - `#8571` [fix(delegate): skip global credential fallback for OAuth target providers](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) [需作者操作]
    - `#7960` [fix(tools): gate execute_pipeline sub-tool execution with per-agent ToolAccessPolicy](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) [需作者操作，且标记为停滞候选]
    - `#8486` [feat(gateway): add OpenAI chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) [需作者操作]
    - **分析:** 这几个 PR 都标记为 `needs-author-action`，且涉及Delegate代理授权、工具执行策略和 OpenAI 兼容端点等**关键功能**。这些 PR 的停滞可能阻碍了项目的重大进展，建议维护者主动联系原作者或考虑接管。

- **架构性 RFC 待决策:**
    - `#8798` (统一 WebSocket 协议) 是一个重大的架构变更提议。如果没有核心维护者的表态或决策路径，该议题可能长期停留在讨论阶段，导致社区贡献者无法确定开发方向。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*