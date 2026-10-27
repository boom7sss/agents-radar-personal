# OpenClaw 生态日报 2026-08-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-26 11:02 UTC

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

# OpenClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

过去 24 小时 OpenClaw 仓库保持高度活跃：共产生 500 条 Issue 动态（314 条新开/活跃，186 条关闭）与 500 条 PR 动态（257 条待合并，243 条已合并/关闭），总吞吐量达 1000 条，属于热络的健康节奏。今日无新版本发布，核心焦点集中在**机器人（clawsweeper）自动筛查驱动的维护流程**与**核心会话/消息传递可靠性修复**上：一方面大量标注 `clawsweeper:no-new-fix-pr` 的积压问题仍待人工决策；另一方面本轮合并的 243 个 PR 正在系统性消解会话隔离（session-state）、消息交付（message-delivery）与安全边界（security-boundary）风险。值得关注的是，过去 24 小时新开的一批 P1 级 bug（如 #114234 锁不可释放、#112259 消息静默丢弃）均指向会话持久化与进程生命周期管理两大薄弱环节。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的重要 PR 呈现出三条清晰的主线：

### 3.1 安全边界强化
- **[已合并] PR #116489 — `feat(security): require acknowledgement for install policy warnings`**：为 `security.installPolicy` 引入 `warn` 返回值，使得可疑插件/技能安装需经授权操作者确认后放行。涉及 CLI 交互与 macOS/Control UI 多端，标记为 `merge-risk: 🚨 security-boundary`，是大版本安全基线的重要拼图。
- **[已合并] PR #120900 — `feat(ui): review install policy warnings`**：作为 #116489 的 UI 配套，在 Control UI 中实现了"已认证管理员可审阅安装策略警告并选择继续安装"的完整闭环。

### 3.2 消息交付可靠性
- **[已合并] PR #126424 — `fix(gateway): keep conversation delivery within agent bindings`**：修复了对话交付可能越过 agent 绑定的隐患，涉及 Discord、iMessage、Matrix、Mattermost、Slack、Telegram、飞书等全部主流渠道，是消息路由正确性的重要修复，标记 `merge-risk: 🚨 security-boundary` 与 `message-delivery`。

### 3.3 工具链/开发者体验
- **[已合并] PR #123975 — `fix(scripts): clean up tsgo process trees on timeout or signal`**：修复 `tsgo` 包装器在收到信号后遗留编译进程树的问题，并为操作者提供有界超时执行路径。
- **[已合并] PR #128995 — `feat: make full session actions available from chat header`**：Web UI 的聊天头部菜单补齐了置顶、标记未读、设置图标、拷贝会话 ID、移动至群组等完整会话操作。

### 3.4 其余今日新开但值得关注的高质量 PR
- **PR #130069（新开）`refactor(normalization): consolidate seconds conversion`**：统一 seconds→milliseconds 转换逻辑，消除双份维护。
- **PR #129606（新开）`fix(google): retain provider-returned response model`**：修复 Google 系（Gemini/Vertex）alias 请求在会话记录中丢失实际模型版本的问题。
- **PR #129904（新开）`fix(webchat): document attachments disappear after refresh`**：修复 WebChat 刷新后文档附件丢失问题，直接关闭 #129898。

---

## 4. 社区热点

以下为今日评论与互动最集中的议题，反应出社区的核心关切：

### 4.1 Token 上下文预算与工具模式开销（讨论热度最高）
- **[Issue #22438 — 17 条评论]** `feat: Tiered bootstrap file loading for progressive context control`：用户提出为大型工作区按层级加载 bootstrap 文件，以避免子代理与 cron 任务浪费上下文窗口。评论数与 `🌊 off-meta tidepool` 的社区评分形成有趣反差，说明该话题虽非官方优先级但痛点真实。
- **[Issue #14785 — 10 条评论]** `Reduce tool schema token overhead (~3,500 tok/session)`：每个会话固定支出 ~3,500 tokens 用于加载全量工具 JSON Schema。此议题拥有 `🦞 diamond lobster` 社区高分，与 #22438 共同构成对**上下文预算节约**的系统性诉求。

### 4.2 多代理编排稳定性
- **[Issue #43367 — 13 条评论，👍 1]** `Multi-agent orchestration is unstable`：用户 `waliddafif` 报告 `openclaw agents add` 在并发调用下不安全、会话锁失败、子任务脱离等问题，直接击中使用 CLI 进行并行编码的信任根基。

### 4.3 Kafka 级话题：跨渠道会话重建重复
- **[Issue #69208 — 13 条评论]** `Umbrella: duplicate transcript, replay, and context assembly across channels`：维护者 BradGroux 将 MSTeams、webchat、Telegram 等多个渠道的重复 transcript/replay/context 装配 bug 合并为伞形议题，标记 `P1` + `gold shrimp`，是明确的优先治理领域。

### 4.4 高票功能需求
- **[Issue #45758 — 9 条评论，👍 2]** `Feature Request: Support YAML as config file format`：尽管标记 `off-meta`，但获得 2 个 👍，反映 DevOps 用户对 YAML 配置的强烈偏好。该 Issue 今日**已关闭**。

---

## 5. Bug 与稳定性

按严重等级排列（P1 为最高）：

### 5.1 P1 — 会话状态与数据丢失风险（最高优先）
| Issue | 描述 | Fix PR 状态 |
|-------|------|-------------|
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 使用量刷新锁在容器重启后（复用 owner PID）**永久无法释放**，缓存冻结。`🦞 diamond lobster` | 🔴 无（linked-pr-open 标记但未见直接关闭 PR） |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见的外部渠道消息（iMessage DM 等）在零回复载荷分发时**被静默丢弃**，无重试/死信/用户可见错误。`🐚 platinum hermit` | 🔴 无 |
| [#108379](https://github.com/openclaw/openclaw/issues/108379) | 小米 MiMo (openai-completions) provider 产成**重复 assistant 生成尝试**，在 abort 前重复叙述文本。`🦪 silver shellfish` | 🔴 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/工具子进程**未回收（zombie 累积）**，导致运行时性能衰退。标记 regression。`🦐 gold shrimp` | 🔴 无 |
| [#80178](https://github.com/openclaw/openclaw/issues/80178) | `resolveCliAuthEpoch` 在本地凭据存储源翻转时**使所有活跃 CLI 会话失效**，即使身份未变。`🦞 diamond lobster` | 🔴 无 |
| [#79950](https://github.com/openclaw/openclaw/issues/79950) | 异步 `sessions_send` 结果**无法干净送达** Telegram 请求方会话，可能产生重复 wrapper。`🦞 diamond lobster` | 🔴 无 |
| [#84662](https://github.com/openclaw/openclaw/issues/84662) | Codex app-server 每轮将 OpenClaw runtime 上下文写入 native history，导致 `response.create` 输入**失控增长**。`🐚 platinum hermit` | 🔴 无 |
| [#56217](https://github.com/openclaw/openclaw/issues/56217) | 1Password secret provider 凭据解析失败时**进入 crash-loop**并耗尽服务账户 rate limit。`🦪 silver shellfish` | 🔴 无（linked-pr-open 标记） |

### 5.2 P2 — 行为回归与稳定性
| Issue | 描述 | Fix PR 状态 |
|-------|------|-------------|
| [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev 更新通道（git 安装）失败：`EUNSUPPORTEDPROTOCOL: workspace:*` — 仓库声明 `pnpm@11` 但 updater 使用 npm。`🦞 diamond lobster` | 🔴 无 |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron 任务在 LLM 持续 500 时**静默超时**而非快速失败。标记 regression。`🐚 platinum hermit` | 🔴 无 |
| [#77298](https://github.com/openclaw/openclaw/issues/77298) | Cron `consecutiveErrors` 在网关重启中断时错误递增，**掩盖真实失败率**（#50414 修复过冲）。`🦞 diamond lobster` | 🔴 无 |
| [#56692](https://github.com/openclaw/openclaw/issues/56692) | Telegram 群聊中多 agent 参与时，当前 agent 可能**误响应**发给其他 agent 的消息。`🐚 platinum hermit` | 🔴 无 |

### 5.3 值得关注的今日合并修复 PR（对应回合修复）
- **PR #130039（新开，P1）`fix(gateway): keep session events within their owning agent`**：直接修复 P1 会话隐私问题 — 延迟/排队的 Gateway 会话事件可能丢失 agent owner，未限定 key 会被解析到新的兼容 owner 上。`merge-risk: 🚨 session-state`、`security-boundary`。**🔵 进程中的修复**
- **PR #130080（新开）`fix(channels): preserve durable retries after reply abandonment`**：修复 Signal/Microsoft Teams 在 reply ownership 被放弃后立即重试而无持久化尝试计数/退避的问题。**🔵 进程中的修复**
- **PR #130076（新开）`fix(line): preserve quick replies after rejected rich messages`**：修复 LINE 富卡片被拒绝恢复为文本时 quick-reply actions 被静默丢弃的问题。**🔵 进程中的修复**
- **PR #130072（新开）`fix(compaction): share model-aware memory maintenance budgets`**：修复 8k/16k/24k 上下文窗口模型因固定减去 20k reserve 而**静默错过内存清理与预压缩**的问题。**🔵 进程中的修复**
- **PR #130067（新开，P1）`fix(amazon-bedrock-mantle): reuse GPT-5.6 prompt caches`**：关闭 #130061，在 Bedrock Mantle 中复用 GPT-5.6 prompt 缓存。`merge-risk: 🚨 auth-provider`。**🔵 进程中的修复**

---

## 6. 功能请求与路线图信号

### 6.1 高可能性进入下版本（已有 PR 支撑）
| 功能 | 对应 Issue | 对应 PR 状态 |
|------|-----------|-------------|
| 会话头部完整操作（置顶/未读/图标/ID/移动） | #128995 关联 | ✅ 已合并 |
| Install policy 警告确认机制（CLI + UI） | #116489 / #120900 关联 | ✅ 已合并 |
| 斜杠命令参数在 composer 中分段输入 | [#123306](https://github.com/openclaw/openclaw/pull/123356) 关联 | 🟡 PR #123356 打开中（`waiting on author`） |
| GPT-5.6 prompt 缓存复用（Bedrock Mantle） | #130061 | 🟡 PR #130067 打开中（`waiting on author`） |

### 6.2 社区高意愿但尚未进入开发
- **分层 bootstrap 文件加载**（#22438）：大工作区用户的核心诉求，直击 token 预算痛点。
- **工具 Schema 压缩**（#14785）：`🦞 diamond lobster` 高评分，若能实现将普惠所有用户。
- **YAML 配置支持**（#45758，已关闭）：社区呼声高（👍 2），但被标记 `off-meta`，短期内纳入的可能性较低。
- **每模型用量日志**（#13219）：用于成本追踪与模型组合优化，与 #9016（OpenRouter 成本暴露）叠加构成"可观测性"诉求。
- **技能优先级配置**（#50199）：智能技能选择，避免多技能竞争同一任务。

### 6.3 需要留意的新信号
- **SQLite schema v12 迁移推进**（PR #129876）：`fold singleton tables into config_machine_state` 是维护者接受的 SQLite 复杂度治理第三阶段。开源贡献者应关注此 PR 的架构影响（涉及 16 个标签订阅域），可能对自定义通道集成产生迁移影响。

---

## 7. 用户反馈摘要

### 7.1 真实痛点 ✅（高置信度）
1. **多代理并行不可靠**（#43367，👍 1）：
   > "I tried to orchestrate a small parallel coding batch from the OpenClaw CLI on `2026.3.8` and hit a cluster of failures that make multi-agent runs unreliable in practice: `openclaw agents add` appears unsafe when invoked concurrently..."

2. **Token 税太重**（#14785）：
   > "Every session loads the full JSON schemas for all available tools into context. Currently this costs **~3,500 tokens (13,972 chars)** — a fixed tax on every single session regardless of what the user is doing."

3. **Webchat 刷新丢附件**（PR #129904，关闭 #129898）：
   > "users receiving a document attachment from an agent through the WebChat `message` tool would see the attachment in the live reply, but lose it after reloading the conversation..."

4. **工具 Schema 的模型归属混乱**（#30381，👍 2）：
   > "When using the `/v1/chat/completions` endpoint with the `x-openclaw-agent-id` header... the gateway still validates the `model` field from the request body against its known models."

### 7.2 满意点 ✅
- **会话管理功能的补齐获得认可**：PR #128995（全量会话操作）的合并意味着"top-right header"管理瓶颈被消除。
- **安装策略警告确认机制**在 UI 与 CLI 双端落地，安全边界从"静默放行"升级为"可审计确认"，回应了 #116489 的需求。

### 7.3 不满/摩擦点 ⚠️
- **版本更新通道体验差**（#123073）：dev 通道更新失败（`EUNSUPPORTEDPROTOCOL`）直接阻断体验 dev/beta 版本的用户。
- **长尾 bug 的可见性不足**：#112259 用户强调"用户不可见"的静默失败比显式错误更伤信任。
- **群聊上下文混淆**（#56692）："the current agent can sometimes mis-handle context and respond to messages that were actually directed at a different agent" — 多 agent 聊天场景的认知负担仍是用户体验的核心矛盾。

---

## 8. 待处理积压

以下为长期未关闭的高风险议题，建议维护者优先关注：

### 8.1 超过 5 个月未解决的高分 P1
| Issue | 创建时间 | 状态要点 |
|-------|---------|----------|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) — [P1, gold shrimp] 伞形重复 transcript/context 装配 | 2026-04-20 | 已聚合跨渠道（MSTeams/webchat/Telegram）类型问题，等待产品决策 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) — [P1, silver shellfish] 多代理编排不稳定 | 2026-03-11 | 并发 add/config 覆盖、会话锁失败、子任务脱离，`linked-pr-open` 但 5+ 个月无修复 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) — [P1, diamond lobster] Delivery Queue 消息 TTL | 2026-02-14 | 网关重启后陈旧/孤儿消息泛滥，6 个月未动，等待产品决策 |

### 8.2 与今日新 PR 相关的"解锁链"
- **PR #130080（今日新开）** 明确标注 `Unblocks: #129978`，而 #129978 关联 #122864（Signal/Teams 重试语义），值得为即将进入的"Signal/Teams 交付重试一致性"改动预留 review 带宽。

### 8.3 维护者注意提醒 ⚠️
- **#114234（P1, diamond lobster）**：容器环境下 usage-cost 刷新锁**永久冻结**，直接影响"成本可见性"这一用户高频诉求（#13219、#9016）。已标记 `linked-pr-open`，但需要维护者确认对应 PR 是否真正解决 PID 复用问题，避免合并后重新打开。
- **#80178（P1, diamond lobster）**：`resolveCliAuthEpoch` 凭据存储翻转导致全量会话失效，涉及 CLI 会话体验的根因级修复，未标记任何 fix PR，积压风险高。

---

*本日报基于 OpenClaw 公开仓库 GitHub 数据自动生成，所有链接与事实均来自用户提供的原始数据。*

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-08-26**

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态正处于**快速迭代与架构收敛并行**的阶段。头部项目（OpenClaw）单日吞吐量达 1000 条 Issue/PR 动态，生态内部已形成明显分化：一部分项目（NanoBot、CoPaw、IronClaw）聚焦于质量基建与稳定性修复，另一部分（NanoClaw、ZeroClaw）则投入架构级重构（composer 收敛、依赖反转）。跨项目涌现的共性痛点高度一致——**长上下文稳定性、多代理并发可靠性、会话/消息交付一致性**是当前最集中的技术债务区域。同时，**本地模型支持**（Ollama 集成）、**轻量化/边缘部署**（worker 模式、家庭边缘网格）正在成为新的差异化竞争方向。

---

## 2. 各项目活跃度对比

| 项目 | Issues（新开/活跃） | Issues（关闭） | PR（待合并） | PR（合并/关闭） | Release | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 314 | 186 | 257 | 243 | 无 | 🟢 热络健康 |
| **NanoBot** | ~5（更新总量） | — | ~14（合并/关闭） | 14 | 无 | 🟢 快速迭代 |
| **Hermes Agent** | 41 | 9 | 43 | 7 | 无 | 🟡 高频产出，合并积压 |
| **CoPaw** | 36（更新总量） | — | 42（更新总量） | 13+ | **v2.1.1-beta.3** | 🟢 高质量冲刺 |
| **IronClaw** | 18 | 6 | 15 | 10 | 无 | 🟢 设计系统落地 |
| **ZeroClaw** | 35 | 6 | **50** | **0** | 无 | 🔴 合并通道阻塞 |
| **LobsterAI** | 1 | 1 | 1 | **13** | **2026.8.25 / 2026.8.21** | 🟢 健康 |
| **PicoClaw** | 4 | 0 | 1 | 0 | 无 | 🟡 平稳但有隐忧 |
| **NanoClaw** | 4 | 0 | 25 | 13 | 无 | 🟢 并行推进 |
| **Moltis** | 0 | 0 | 1 | 1 | **20260826.01** | 🟢 维护巩固期 |
| **NullClaw** | 1 | 0 | 0 | 0 | 无 | 🟡 低活跃 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 无 | ⚪ 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 无 | ⚪ 无活动 |

**关键数据点：**
- **ZeroClaw** 今日 50 条待合并 PR 全部未合入，最久可追溯至 7 月中旬，合并通道严重阻塞
- **Hermes Agent** 7 条合并 vs 43 条待合并，合并/待合并比低至 0.16
- **CoPaw** 单日 +1,148 个测试用例、+5.02pp 覆盖率，质量投入显著

---

## 3. OpenClaw 在生态中的定位

### 核心优势

- **生态规模绝对领先**：单日 1000 条动态（500 Issue + 500 PR），是 Hermes Agent 的 10 倍、CoPaw 的 13 倍
- **维护吞吐能力**：单日合并 243 个 PR，远超 Hermes（7）、CoPaw（13）、NanoClaw（13）
- **语义化分级体系**：`diamond lobster` / `gold shrimp` / `platinum hermit` 等社区评分标签形成精细的优先级治理机制
- **多协议消息路由**：Discord、iMessage、Matrix、Mattermost、Slack、Telegram、飞书全渠道覆盖

### 技术路线差异

- **会话隔离与安全边界**：#130039（会话事件 agent 归属）、#116489（install policy 警告确认）等 PR 标志着 OpenClaw 在**多代理会话隔离**和**安装可信链**上的治理深度远超同类
- **上下文预算管理**：工具 Schema 开销 ~3,500 tokens/会话（#14785）与分层 bootstrap 加载（#22438）构成系统性优化方向

### 社区规模对比

| 维度 | OpenClaw | Hermes Agent | CoPaw | NanoBot |
|---|---|---|---|---|
| 单日 Issue 动态 | 500 条 | 50 条 | 36 条 | 5 条 |
| 单日 PR 动态 | 500 条 | 50 条 | 42 条 | 28 条 |
| P1 级 Bug 存量 | 8 个 | 2 个 | 3 个 | 2 个 |
| 最热 Issue 评论数 | 17 条 | 12 条 | 11 条 | 5 条 |

**结论**：OpenClaw 在生态中处于**事实标准/超大规模领导者**地位，至少在数量级上是 Hermes Agent 的 10 倍、CoPaw 的 13 倍，在功能覆盖、渠道支持、安全性治理上均处于第一梯队。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **多代理并发/编排可靠性** | OpenClaw（#43367 并发 add 不安全）、NanoBot（#5152 子代理部分完成标注）、CoPaw（#6921 任务无提示中断）、Hermes（#69961 可信发送者 UID） | 并行调用下会话锁失败、子任务脱离、无提示中断需人工"继续" |
| **消息交付可靠性** | OpenClaw（#126424 消息路由修复、#112259 静默丢弃）、NanoBot（#5483 删除会话被重建）、Hermes（#90950 state.db 损坏）、CoPaw（#7218 chunked read 断开） | 跨渠道消息丢失/重复/延迟投递、WAL 损坏导致会话数据丢失 |
| **会话状态隔离与隐私** | OpenClaw（#130039 会话事件归属、#56692 群聊误响应）、CoPaw（#7193 记忆串会话）、Hermes（#89161 人格不生效）、NanoClaw（#3532 技能作用域失效） | 多 agent 共享上下文时的数据错乱、权限越界、人格/记忆混淆 |
| **长上下文稳定性** | OpenClaw（#14785 工具 Schema 开销）、CoPaw（#7218 长文本连接断开）、IronClaw（#7891 19.7s 单轮延迟）、Hermes（#84662 context 失控增长） | 上下文窗口超限、推理延迟膨胀、连接中断、Token 开销不可控 |
| **本地/边缘部署形态** | NanoClaw（#3546-3548 Ollama 支持）、PicoClaw（#3345 worker 模式）、NullClaw（#994 家庭边缘网格）、NanoClaw（#3538 容器边缘化） | 私有化部署、低资源设备（10-20MB 内存）、离线运行、数据隐私 |
| **配置管理体验** | OpenClaw（#45758 YAML 配置）、ZeroClaw（#10320 config set 无验证）、NanoClaw（#3525 向导无回显） | DevOps 用户对结构化配置的偏好、配置输入验证缺失 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道消息路由 + 多代理编排 + 安全边界 | 大规模部署、企业级、多平台集成 | 语义化 Issue 分级体系（lobster 等）、全渠道 gateway、进程级锁管理 |
| **NanoBot** | 轻量 WebUI + 长时任务 + 子代理 | 个人开发者、轻量部署 | AgentLoop 参数收敛重构、checkpoint 恢复显式化、gitstore 可追踪存储 |
| **Hermes Agent** | 桌面端（Electron/Tauri）+ 多渠道 + 远程后端 | 桌面优先用户、macOS 生态 | 多路复用配置档（personality）、VNC 控制、桌面端密钥安全（safeStorage） |
| **CoPaw** | 国产模型生态 + 群聊协作 + 企业级 | 中文用户、国产模型（火山/MiMo）用户 | 钉钉群共享会话上下文、可插拔记忆后端（OpenViking/PowerContext）、Tauri 桌面端 + Python 3.13 |
| **IronClaw** | WebUI 设计系统 + 通知中心 + 沙箱 | 开发者、需要持久化沙箱的用户 | Rust 工具链、WebUI 设计系统（Panel 组件）、Notification Center 持久化通知体系 |
| **ZeroClaw** | 零知识部署 + 网关 API + RFC 治理 | DevOps、需要大规模网关暴露能力的用户 | distroless 镜像、wire protocol 一等公民 RFC、依赖反转重构、46 个 `/api/*` 路径 |
| **NanoClaw** | 多 provider 合成器 + Ollama 本地模型 + 技能体系 | 本地模型用户、多 provider 高级用户 | Codex/OpenCode 合成器收敛、技能安装内联化（防符号链接竞态） |
| **LobsterAI** | 桌面 Client + 云端 Library + dsh 集成 | 网易生态用户、桌面重度用户 | Library 模块云分享、每日积分体系、Windows 安装器 |
| **PicoClaw** | 嵌入式/低资源设备 + 边缘智能 | RISC-V/ARM 板子、树莓派、旧手机 | 轻量 Go agent、10-20MB 内存运行、worker 模式提案 |
| **Moltis** | 远程沙箱 + 工具链巩固 | 需要隔离执行环境的开发者 | Coder 集成（REST API + PTY WebSocket）、Brave 搜索参数校验 |
| **NullClaw** | Zig 运行时 + WASM 适配器 + 极端轻量 | 微型设备、底层开发者 | 家庭边缘网格提案（RuntimeAdapter + 签名收据）、最小运行时体积 |

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代期（功能开发 + 稳定性双线并进）

| 项目 | 证据 |
|---|---|
| **OpenClaw** | 单日 1000 条动态、243 个 PR 合入、8 个 P1 修复 PR 新开 |
| **NanoBot** | 28 条 PR 更新、chengyongru 系统性重构（5 个 refactor PR 同日合入） |
| **CoPaw** | beta 高频发布（v2.1.1-beta.3）、单日 +1,148 测试用例 |
| **NanoClaw** | 核心团队 3 条 Ollama PR 垂直切片 + 13 条 PR 合入 |

### 🟡 质量巩固期（设计系统/基础设施/架构治理）

| 项目 | 证据 |
|---|---|
| **IronClaw** | WebUI 设计系统 Phase 1 收尾、Notification Center 5 个 PR 齐推、i18n 补齐 |
| **ZeroClaw** | 3 条 RFC 进入评审、依赖反转重构（95 天）、CI 跨平台矩阵推进中——但合并通道阻塞 |
| **LobsterAI** | 双版本发布频次稳定（8.21 / 8.25）、Library 能力合入、侧边栏图标重设计 |
| **Moltis** | 维护巩固期，工具参数校验修复、发布节奏稳定 |

### 🔴 低活跃/停滞风险

| 项目 | 证据 |
|---|---|
| **PicoClaw** | 修复 PR 停滞 9 天、2 个老 Issue 超 1 个月未处理、标记 stale |
| **NullClaw** | 单日仅 1 条 Issue、无 PR、无合并、无版本发布 |
| **TinyClaw / ZeptoClaw** | 24 小时无任何活动 |

---

## 7. 值得关注的趋势信号

### 趋势一：本地模型运行成为下一波差异化竞争点

**涉及项目**：NanoClaw（#3546-#3548 Ollama 垂直切片）、PicoClaw（#3345 worker 模式）、NullClaw（#994 家庭边缘网格）、NanoClaw（#3538 边缘部署）

**信号强度**：🔥🔥🔥 高——NanoClaw 核心团队已提交 3 条 PR 构成完整 Ollama 支持栈（provider 载荷 + engine 接入 + 单命令安装），预计下一版本即可落地。PicoClaw 与 NullClaw 的社区提案（worker 模式 / 家庭边缘网格）与 NanoClaw 的用户诉求（家庭服务器部署）指向同一方向：**个人 AI 从云端走向本地/边缘**。

**开发者价值**：如果本地模型支持在前端项目（NanoClaw、CoPaw）中快速普及，对于数据隐私敏感用户和离线场景需求，将形成对以云 API 为核心的开源项目（如 OpenClaw 依赖 GPT-5.6 等）的差异化替代。

---

### 趋势二：工具调用 Token 开销与上下文预算管理成为关键优化方向

**涉及项目**：OpenClaw（#14785 ~3,500 tokens/会话工具 Schema、#22438 分层 bootstrap）、IronClaw（#7891 49,152 字节未投影载荷）、Hermes（#84662 response.create 输入失控增长）、CoPaw（#7218 长文本连接断开）

**信号强度**：🔥🔥🔥 高——多个项目同时收敛到同一痛点：**工具 Schema 与上下文载荷的无序增长是长上下文不稳定性的根因**。IronClaw 的 19.7 秒单轮延迟中 19.2 秒为模型推理，直接归因于未投影的 24 KiB 头部载荷盲切。OpenClaw 的工具 Schema 压缩提案（#14785）获得 `diamond lobster` 高评分。**上下文预算成为系统性优化方向，而非单一项目问题。**

**开发者价值**：工具 Schema 精简（如 IronClaw 的有界结构感知投影）和分层 bootstrap 加载，将是未来 Agent 框架的核心竞争力之一。按需加载工具 Schema（而非全量注入）可能成为标准实践。

---

### 趋势三：AI 框架对"自主性与可靠性"的平衡成为关键矛盾

**涉及项目**：CoPaw（#6921 无提示中断）、IronClaw（#7892 123 秒工具死循环）、NanoBot（#5553 goal 完成后仍续跑、#5152 子代理部分完成）、OpenClaw（#43367 多代理并发不可靠）、ZeroClaw（#10324 cron 手动触发竞态）

**信号强度**：🔥🔥🔥 高——社区反馈中反复出现同一个矛盾：**Agent 要么"过度自主"（死循环、续跑、误响应），要么"自主性不足"（无提示中断需人工干预）**。CoPaw 最热 Issue（#6921，11 条评论）直指"任务无提示中断"；IronClaw 报告 123 秒的重复工具调用死循环；NanoBot 的 PR #5553 修复 goal 完成后仍注入续跑消息。**Agent 框架需要在"自主执行"与"人工确认"之间找到可配置的平衡点。**

**开发者价值**：为 Agent 增加"自主度可配置"参数（如自动确认阈值、无进度超时终止、部分完成显式标注）将成为基础能力需求，而非高级功能。

---

### 趋势四：安全边界从"防外部攻击"延伸到"防内部误配置"

**涉及项目**：OpenClaw（#116489 install policy 警告确认）、ZeroClaw（#9110 Lark 时序攻击、#10367 符号链接竞态）、LobsterAI（#95468 密钥解密为明文存储——注：此为 Hermes 数据）、NanoClaw（#3543 shell 注入、#3532 权限逃逸）、Hermes（#95468 密钥明文存储）

**信号强度**：🔥🔥 中高——安全关注的覆盖面正在扩大：从网络层（Lark 验证 token 时序攻击）到文件层（symbolic link 竞态）再到配置层（`config set` 越界写入）。NanoClaw 的 Dial 技能 shell 注入（#3543）与 Hermes 的密钥解密为明文（#95468）都暴露了**技能体系与桌面端存储的安全薄弱面**。社区对"安全默认值变更"的警觉（#95468 直接引发用户担忧）表明**安全回归会被迅速追责**。

**开发者价值**：在 Agent 框架中，技能安装的可审计性（install policy 警告确认）、步骤注入防护、密钥存储的加密默认值，将成为安全基线的必要组成部分。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-26

## 1. 今日速览

今日 NanoBot 项目活跃度极高：过去 24 小时产生 5 条 Issue 更新和 28 条 PR 更新，合并/关闭 14 条 PR，是近期合并密度较高的一天。**Chengyongru** 主导了一轮系统性重构（#5552、#5549、#5546、#5554），大幅精简 `AgentLoop` 参数管道与进程级状态，标志着内部架构持续收敛。稳定性方向也有实质进展：#5551 修复了 `read_session` 通配符查询导致空历史的回归，#5473 修复了 gitstore 同大小重写检测遗漏。同时，WebUI 通知铃声功能（#5547）与 AnySearch 搜索提供商接入（#5505）为社区期待的功能铺路。**项目整体处于快速迭代、重构与功能并进的健康状态。**

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 项目进展

今日合并/关闭的 PR 集中在**结构性重构**与**稳定性修复**两个方向：

**架构重构（chengyongru 主导）**

- [#5552 refactor(agent): make checkpoint recovery ownership explicit](https://github.com/HKUDS/nanobot/pull/5552) — 将检查点恢复交由 `AgentLoop` 生命周期边界直接调用，移除透传方法。
- [#5549 refactor(agent): remove loop iteration state](https://github.com/HKUDS/nanobot/pull/5549) — 移除进程级迭代状态及相关的回调管道，同时清理 `MyTool` 中对迭代细节的暴露。
- [#5546 refactor(agent): make run usage explicit](https://github.com/HKUDS/nanobot/pull/5546) — 移除全局 `_last_usage` 副作用通道，改为每次 run 的 hook 捕获，`/status` 端点感知对应调整。
- [#5554 refactor(agent): reduce loop and runner parameter plumbing](https://github.com/HKUDS/nanobot/pull/5554) — 复用已有 `RequestContext`，合并重复的 routing/session 参数，消除继续目标（sustained goal）的重复传递。
- [#5548 refactor(webui): isolate websocket application orchestration](https://github.com/HKUDS/nanobot/pull/5548) — 将 WebUI 的重连水合逻辑拆入独立投影器，入站信封与请求生命周期统一路由。

**功能修复**

- [#5551 fix(session): clarify read_session query semantics](https://github.com/HKUDS/nanobot/pull/5551) — 明确 `query` 为可选的**子串精确匹配**参数，空值/省略则返回最新可见消息，并拒绝 `*` 与 `.*` 通配符写法，附回归测试。
- [#5473 fix(gitstore): detect rapid same-size rewrites](https://github.com/HKUDS/nanobot/pull/5473) — 修复跟踪内存文件在快速同大小重写场景下 Dulwich 因 mtime 未变化而漏检内容更新的问题。

总体而言，重构方向显著降低了 `AgentLoop` 与 runner 之间的耦合度，将进程级隐藏状态逐一收敛为显式 per-run 数据；Bug 修复清除了会话查询语义与 Git 存储一致性的两个隐患，为后续功能迭代夯实基础。

## 4. 社区热点

- [Issue #5505 AnySearch 接入请求](https://github.com/HKUDS/nanobot/issues/5505)（5 条评论，OPEN）— 讨论焦点：AnySearch 团队主动提出以 API/MCP/Skill 三种方式接入，且支持**免密钥匿名配额**。这契合 NanoBot 用户对多搜索提供商可插拔接入的诉求，社区讨论热度明显。
- [#5524 WebUI 会话结束通知铃声](https://github.com/HKUDS/nanobot/issues/5524)（0 条评论，OPEN）— 虽评论数为 0，但**当天即有配套 PR #5547** 落地，属于社区提需求、维护者快速响应的典型闭环，讨论价值在 PR 侧。
- [#5532 autocompact.py 导入报错](https://github.com/HKUDS/nanobot/issues/5532)（1 条评论）— 用户在执行中文自然语言清内存指令时触发 `mask_session_key` 未导入，暴露了工具调用错误路径下的清晰度问题。
- [#5553 目标续跑失败后仍继续触发](https://github.com/HKUDS/nanobot/pull/5553)（OPEN）— 修复 `goal` 完成调用失败后仍注入续跑消息的缺陷，涉及 #4864，属于长时任务场景下的关键正确性问题，需关注合入进度。

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 处理状态 |
|---|---|---|---|
| P1 | [PR #5544 WebSocket listener 降级恢复](https://github.com/HKUDS/nanobot/pull/5544) | WebSocket 监听器绑定失败后无感知降级，需要本地监督管理并带退避重建 | 待合并（OPEN） |
| P1 | [PR #5553 goal 完成失败后仍续跑](https://github.com/HKUDS/nanobot/pull/5553) | 模型已完成目标但工具结果返回错误时，runner 仍反复注入续跑消息 | 待合并（OPEN） |
| P2 | [Issue #5532 autocompact 导入错误](https://github.com/HKUDS/nanobot/issues/5532) | 清理历史资源时 `mask_session_key` 未导入，工具调用报错 | 已关闭（CLOSED） |
| P2 | [Issue #5550 / PR #5551 read_session 空历史](https://github.com/HKUDS/nanobot/issues/5550) | 模型以 `*`/`.*` 通配符查询会话历史时返回空结果，属回归 | 已修复并合并（CLOSED） |
| P2 | [Issue #5527 unifiedSession 下侧栏标题为 Untitled](https://github.com/HKUDS/nanobot/issues/5527) | 启用 unifiedSession 后所有 turn 路由至共享会话，标题生成/持久化/变更通知错位，导致 WebUI 侧栏无法显示真实标题 | 已关闭（状态未明） |
| P2 | [PR #5483 删除的会话被延迟消息重建](https://github.com/HKUDS/nanobot/pull/5483) | 跨会话延迟消息/超时消息在会话删除后仍可能将其重建 | 待合并（OPEN，已持续 4 天） |
| P2 | [PR #5543 TUI 聊天连接失败提示](https://github.com/HKUDS/nanobot/pull/5543) | TUI 无法区分安静启动与持续不可用，且对重连成败反馈不明确 | 待合并（OPEN） |

## 6. 功能请求与路线图信号

- **WebUI 通知铃声**（[Issue #5524](https://github.com/HKUDS/nanobot/issues/5524)）— 已有对应 [PR #5547 feat(webui): play a notification sound when a turn completes](https://github.com/HKUDS/nanobot/pull/5547)（OPEN），默认关闭、页面可见时播放；该 PR 当天提交，**大概率进入下一版本**。
- **AnySearch 接入**（[Issue #5505](https://github.com/HKUDS/nanobot/issues/5505)）— 第三方团队已声明将提交 PR，支持免密钥匿名配额，与现有搜索提供商生态（API/MCP/Skill）直接对齐，**路线图信号强**。
- **会话焦点跨轮持久化**（[PR #5537 feat(my): persist session focus across turns](https://github.com/HKUDS/nanobot/pull/5537)）— 基于 `my` 工具新增 session 级 `focus` 值，支持跨轮重启后的连续性提示，修复 #3292。当前标记 **conflict**，需解决冲突后方可合入。
- **子代理部分完成结果标注**（[PR #5152 fix(subagent): mark partial completion results](https://github.com/HKUDS/nanobot/pull/5152)）— 子代理仍有兄弟任务在跑时可见结果应标注为不完整，避免模型误判。已开放近一个月，**需维护者评估合入优先级**。

## 7. 用户反馈摘要

- **长时任务等待体验差**：#5524 提出 WebUI 在 agent 长时间工具调用/文件编辑期间缺乏完成提示，用户必须盯屏或刷新才能感知新消息——代表真实会话场景下的反馈缺口。
- **中文自然语言指令触发底层报错**：#5532 中用户以"删除之前创建的所有资源并清理记忆"这类高层指令驱动时，直接在日志中暴露 `mask_session_key` 导入缺失，说明错误路径的容错与提示仍需加强。
- **会话语义歧义**：#5550 中模型以通配符方式查询历史，说明 LLM 对 `read_session` 可选参数的边界理解存在不可控性，修复方向（拒绝通配符、引导省略参数）符合降低歧义的目标；#5527 则反映 unifiedSession 语义与 WebUI 界面呈现之间的耦合问题。
- **正向反馈信号**：AnySearch 团队主动提交 PR 计划（#5505），说明项目在搜索提供商生态中的开放度与集成成本已具备吸引力。

## 8. 待处理积压

以下为挂起时间较长且当前仍 OPEN 的重要条目，**建议维护者优先关注**：

| 条目 | 状态 | 说明 |
|---|---|---|
| [PR #5152 子代理部分完成标记](https://github.com/HKUDS/nanobot/pull/5152) | OPEN，已近 30 天 | 涉及多代理场景下的结果正确性，建议尽快评审 |
| [PR #5483 删除会话被重建](https://github.com/HKUDS/nanobot/pull/5483) | OPEN，已 4 天 | 数据一致性风险（删除操作被延迟消息逆转），建议纳入 P1 评审 |
| [PR #5537 session focus 持久化](https://github.com/HKUDS/nanobot/pull/5537) | OPEN，标记 conflict | 功能价值明确（修复 #3292），需先解决冲突 |
| [Issue #5505 AnySearch 接入](https://github.com/HKUDS/nanobot/issues/5505) | OPEN | 第三方 contributor 计划提交 PR，建议提前沟通接口设计以避免返工 |

---

*数据来源：HKUDS/nanobot GitHub 仓库，统计窗口为 2026-08-25 至 2026-08-26。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-26

## 1. 今日速览

Hermes Agent 今日保持较高活跃度：24 小时内共产生 50 条 Issue 更新（41 条新开/活跃、9 条已关闭）和 50 条 PR 更新（43 条待合并、7 条已合并/关闭），无新版本发布。值得关注的是，多个来自不同方向的修复 PR 在同日提交（#95479-#95487 批次），覆盖终端隔离、委派回退链、看板审核判定等模块，表明维护者正在系统性清理积压问题。稳定性方面，macOS 相关缺陷（launchd 检查竞态、TCC 锚点 dyld 崩溃、SQLite 损坏复发）仍是当前最集中的技术债区域。社区讨论热度集中在本地 Ollama 流中断（12 评论）与 state.db 损坏（9 评论）两个长期问题上。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日关闭/合并的 PR 较少（7 条），其中包括：

- **[PR #84829] fix(cron): forward attach_to_session through cronjob handler**（已关闭，标记 duplicate）— 修复 cronjob 处理器未转发 `attach_to_session` 参数的问题，虽被标记为重复但确认了该缺陷的存在与解决方案方向。
  https://github.com/NousResearch/hermes-agent/pull/84829
- **Issue #90647（macOS 屏幕录制权限反复请求）已关闭**，标记为重复报告，说明该问题已有归并跟踪。
  https://github.com/NousResearch/hermes-agent/issues/90647
- **Issue #92064（多路复用次要配置档初始连接失败后永不重连）已关闭**，该 session-state 相关的消息投递缺陷得到解决。
  https://github.com/NousResearch/hermes-agent/issues/92064
- **Issue #95468（桌面端密钥解密为明文存储）已关闭**，该由 #95015 引入的安全回归已获响应处理。
  https://github.com/NousResearch/hermes-agent/issues/95468

此外，今日有 43 条 PR 待合并，其中 6 条为今日新提交的高质量修复（见下节），项目整体处于"高频产出、等待合并"的推进节奏。

## 4. 社区热点

| 条目 | 类型 | 评论数 | 主题 |
|------|------|--------|------|
| [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) | Bug | 12 | Hermes Client 约 1.5 秒后取消本地 LLM（Ollama）流式响应，触发 `<unused49>` token 循环 |
| [#90950](https://github.com/NousResearch/hermes-agent/issues/90950) | Bug | 9 | state.db 在 SQLite 3.53.1 上反复损坏 — WAL 侧车文件在并发写入下被 unlink |
| [#94335](https://github.com/NousResearch/hermes-agent/issues/94335) | Bug | 7 | `_stdio_children_dead()` 活体检查逻辑反转，oneshot (-z) 会话中所有 stdio MCP 调用被 fail-fast |
| [#69961](https://github.com/NousResearch/hermes-agent/issues/69961) | Feature | 7 | 为共享网关会话添加可信发送者 UID 信封 |
| [#76243](https://github.com/NousResearch/hermes-agent/issues/76243) | Bug | 6（👍2） | Buzz Desktop 管理的 Hermes agent 因 `BUZZ_PRIVATE_KEY` 被剥离而无法回复 |

**热点分析**：最热 Issue #87697 反映用户对本地 LLM 集成的核心体验不满——流式推理被客户端提前取消是实际使用中的阻断性问题。Issue #90950 则是数据安全层面的 P1 缺陷，多次损坏意味着用户会话数据存在实质性丢失风险。PR #95482（远程后端 Update 操作修复）值得注意的是它援引了 #90026/#90030 的链路，显示社区贡献者（@liuhao1024）此前的工作被后续作者 salvage 延续。

## 5. Bug 与稳定性

按严重程度排列：

**P1 严重**

- **[#94335] stdio MCP 调用被 fail-fast**（待修复，PR 未提交）— `_stdio_children_dead()` 活体检查逻辑反转（`if not psutil.pid_exists(pid)` 应为 `if psutil.pid_exists(pid)`），导致所有 stdio MCP 调用在 oneshot 会话中直接失败，属 #81995 引入的回归。
  https://github.com/NousResearch/hermes-agent/issues/94335
- **[#90950] state.db 反复损坏**（P1，待修复）— 前三次归因于已知漏洞的 SQLite 构建（≤3.51.2），最近一次在 3.53.1 上复发，WAL 侧车文件在并发写入下被 unlink。属 session-state 风险区。
  https://github.com/NousResearch/hermes-agent/issues/90950

**P2 中等级**

- **[#95425] macOS TCC anchor 复制解释器缺 libpython**（今日新报，PR 未提交）— `ensure_tcc_anchor()` 复制 uv 管理的 CPython 但未携带 `libpython`，导致每次执行 hermes 命令都触发 dyld 崩溃，阻断 macOS 上所有 CLI 操作。
  https://github.com/NousResearch/hermes-agent/issues/95425
- **[#95468] 桌面端密钥解密为明文存储**（已关闭）— #95015 将 keychain 加密改为默认关闭后，首次启动时桌面端将所有 safeStorage blob 解密为明文写入 userData。安全回归，已在当日关闭（修复或回滚待确认）。
  https://github.com/NousResearch/hermes-agent/issues/95468
- **[#94613] 安装/更新 E2E 自 8/13 起每日全红**（P2）— 沙箱 MITM 代理丢弃 npm TLS 连接（SSLEOFError），installer 全部路由在 `npm install` 中死亡，持续 13 天未恢复。
  https://github.com/NousResearch/hermes-agent/issues/94613
- **[#94743] macOS launchd 检查竞态**（P2）— `hermes update` 重启服务后立即报告 DOWN，因为 fleet 版本检查先于 launchd 替换 PID 完成。
  https://github.com/NousResearch/hermes-agent/issues/94743
- **[#87697] 本地 Ollama 流被取消**（P2，needs-repro）— 约 1.5 秒后客户端取消流式响应，触发 `<unused49>` token 循环，近期更新引入的回归。
  https://github.com/NousResearch/hermes-agent/issues/87697
- **[#92064] 多路复用次要配置档重连缺陷**（已关闭）— 初始连接失败后永不调度重连。
  https://github.com/NousResearch/hermes-agent/issues/92064
- **[#89161] 多路复用配置档人格不生效**（P2）— 次要配置档的 personality 从不注入 system prompt，所有配置档复用默认配置档的缓存提示词。
  https://github.com/NousResearch/hermes-agent/issues/89161
- **[#61457] 桌面端远程网关会话 Cookie 不持久**（P2）— basic-auth 登录后立即 401 no_cookie 循环。
  https://github.com/NousResearch/hermes-agent/issues/61457

**P3 较低**

- **[#76243] Buzz Desktop `BUZZ_PRIVATE_KEY` 被剥离**（P3，👍2）— 可初始化但无法回复。
  https://github.com/NousResearch/hermes-agent/issues/76243
- **[#92352] 桌面端切换网关不刷新会话列表**
  https://github.com/NousResearch/hermes-agent/issues/92352
- **[#92473] 重命名 Bot Chat 导致孤立会话**
  https://github.com/NousResearch/hermes-agent/issues/92473
- **[#95031] 桌面端 Routines 开关导航到 Open chat**
  https://github.com/NousResearch/hermes-agent/issues/95031
- **[#70797] macOS 上危险 rm 检测测试失败**（自引入起持续）
  https://github.com/NousResearch/hermes-agent/issues/70797
- **[#90647] macOS 反复请求屏幕录制权限**（已关闭，重复）
  https://github.com/NousResearch/hermes-agent/issues/90647

**已有关联 fix PR 的 Bug：**

- macOS 远程后端 Update 失败（`ModuleNotFoundError: yaml`）→ **[PR #95482](https://github.com/NousResearch/hermes-agent/pull/95482)** 待合并
- 桌面端 read_preview 读取陈旧文件标签页 → **[PR #95445](https://github.com/NousResearch/hermes-agent/pull/95445)** 待合并
- 终端前台守护误匹配 `site-packages/uvicorn/...` 路径 → **[PR #95481](https://github.com/NousResearch/hermes-agent/pull/95481)** 待合并
- 委派子任务丢弃回退链 → **[PR #95480](https://github.com/NousResearch/hermes-agent/pull/95480)** 待合并
- 共享终端快照导致执行血统泄漏 → **[PR #95479](https://github.com/NousResearch/hermes-agent/pull/95479)** 待合并

## 6. 功能请求与路线图信号

| Issue | 类型 | 评论/点赞 | 分析 |
|-------|------|-----------|------|
| [#69961](https://github.com/NousResearch/hermes-agent/issues/69961) 可信发送者 UID 信封 | Feature (P3) | 7 评论 | 共享网关会话缺少平台认证的发送者身份。已有 Slack `<@UID>` 窄实现，需推广到多平台，属平台抽象层演进方向 |
| [#69974](https://github.com/NousResearch/hermes-agent/issues/69974) 电子宠物虚拟照护系统（喂食/健康/交互） | Feature (P3) | 3 评论，👍2 | 将纯视觉吉祥物转变为可交互电子宠物。高社区热情但低优先级（innovation 标签），短期纳入可能性低 |
| [#84418](https://github.com/NousResearch/hermes-agent/issues/84418) 桌面端 UI 增加俄语 | Feature (P3) | 5 评论 | 国际化扩展，工作量小，可能随桌面端 i18n 基建完善而自然纳入 |
| [#77744](https://github.com/NousResearch/hermes-agent/issues/77744) 状态栏上下文百分比增量刷新 | Feature (P3) | 2 评论 | 在工具循环中逐步刷新 context %，替代仅在最终响应后刷新。提升 CLI/TUI 可用性 |
| [#76243](https://github.com/NousResearch/hermes-agent/issues/76243) Buzz Desktop 集成修复 | Bug (P3)，👍2 | 6 评论 | 第三方桌面端管理 Hermes 的兼容性问题，涉及 ACP 插件边界的密钥传递 |

**路线图信号**：今日 PR 批次（#95479-#95487）集中修复 session-state、委派链、终端隔离、看板审核等模块，暗示维护者正在为下一版本做稳定性收口。PR #95384（computer_use 诚实的后台优先宣传 + 每次调用削减 ~1,400 token）是值得关注的功能性改进，能显著降低工具调用成本。

## 7. 用户反馈摘要

- **本地 LLM 用户受影响严重**（#87697）：流式推理被客户端约 1.5 秒后取消，触发 `<unused49>` token 循环，直接阻断 Ollama 后端的使用。该问题在近期更新后出现，用户对回归感到挫败。
- **数据安全信任受损**（#90950）：state.db 在同一主机上多次损坏，前三次归因于已知漏洞的 SQLite 构建，最近一次在 3.53.1 上复发。用户会话数据面临实质丢失风险，P1 级别。
- **桌面端密钥处理回归引发担忧**（#95468）：「#95015 将 keychain 加密改为默认关闭后，首次启动时桌面端将所有 safeStorage blob 解密为明文写入 userData，包括网关令牌、CF Access 凭据」。安全敏感的默认值变更引发警觉。
- **macOS 用户面临多重阻断**：TCC anchor 导致的 dyld 崩溃（#95425）意味着每次执行 hermes 命令都会失败；launchd 检查竞态导致更新后误报 DOWN（#94743）；屏幕录制权限反复请求（#90647）。多个 macOS 专属缺陷叠加，影响该平台整体体验。
- **远程后端运维痛点**：Dashboard 的 Update 操作在 SSH 远程后端上因缺 `yaml` 模块直接失败（PR #95482），修复方案已就绪待合并。
- **electron 宠物社区活跃**（#69974，👍2）：用户希望在纯视觉吉祥物之上增加照护机制，让 Hermes 宠物"活起来"，显示社区对产品情感化设计的期待。
- **多路复用配置档体验不佳**（#89161、#92064）：次要配置档的人格不生效、初始连接失败后永不重连，多配置档用户的核心场景存在缺陷。

## 8. 待处理积压

| 条目 | 类型 | 等待时长 | 备注 |
|------|------|----------|------|
| [#61457](https://github.com/NousResearch/hermes-agent/issues/61457) 桌面端远程网关会话 Cookie 不持久 | Bug (P2) | 自 7/9 起 48 天 | basic-auth 登录后立即 401 loop，已加 needs-repro，但 48 天无实质进展 |
| [#69961](https://github.com/NousResearch/hermes-agent/issues/69961) 可信发送者 UID 信封 | Feature (P3) | 自 7/23 起 34 天 | 需求明确且有 Slack 窄实现可参考，但处于 needs-decision 状态搁置 |
| [#70797](https://github.com/NousResearch/hermes-agent/issues/70797) macOS 危险 rm 检测测试持续失败 | Test (P3) | 自 7/24 起 33 天 | 自引入起在所有 macOS 上失败，长期未修复的测试欠账 |
| [#76243](https://github.com/NousResearch/hermes-agent/issues/76243) Buzz Desktop `BUZZ_PRIVATE_KEY` 被剥离 | Bug (P3)，👍2 | 自 8/1 起 25 天 | 第三方桌面端集成失效，社区关注度高但优先级低 |
| [#78268](https://github.com/NousResearch/hermes-agent/pull/78268) lark-oapi 版本约束更新 | PR (P3) | 自 8/4 起 22 天 | `lark-oapi==1.6.8` 已从 PyPI 下架，新用户 `pip install hermes-agent[feishu]` 直接失败，PR 已提交 22 天未合并 |
| [#84286](https://github.com/NousResearch/hermes-agent/pull/84286) 配置凭据文件挂载的 deny-list 修复 | PR（安全，P2） | 自 8/12 起 14 天 | 修复 config-vs-registration 策略差距，属安全边界风险区，等待合并 |
| [#84297](https://github.com/NousResearch/hermes-agent/pull/84297) 桌面端看板附件预览 | PR (P3) | 自 8/12 起 14 天 | 功能完整但长期未审核 |
| [#88796](https://github.com/NousResearch/hermes-agent/pull/88796) 记忆预取隔离/终结修复 | PR（安全，P3） | 自 8/18 起 8 天 | 已与 upstream 分歧 15 个提交，rebuild 成本随时间增长，需尽快处理或关闭 |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

过去24小时内，PicoClaw 项目 Issues 更新 4 条（全部为活跃状态，无关闭），PR 更新 1 条（待合并，无合并/关闭），无新版本发布。项目整体活跃度偏低，但存在值得关注的社区提案和修复 PR。当前最突出的信号是：**一个 Slack 媒体上传 Bug 对应的修复 PR 已停滞 9 天**，以及**新提出的轻量级"worker 模式"提案可能为项目开辟新的边缘计算场景**。此外，两个老 Issue（Web UI 输入卡顿、MCP 连接失败导致挂死）持续收到讨论但尚未关闭，项目健康度处于"平稳但有隐忧"的状态。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

过去24小时内无 PR 被合并或关闭。唯一活跃的 PR 为 [#3340](https://github.com/sipeed/picoclaw/pull/3340)（由 octavioturra 提交），仍处于待合并状态，对应 Slack 媒体上传失败的修复。该项目当前无法确认是否有其他功能性进展被合入主线。

## 4. 社区热点

| 条目 | 类型 | 评论数 | 👍 | 状态 |
|------|------|--------|-----|------|
| [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI 输入卡顿 | Bug | 7 | 1 | OPEN, stale |
| [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP 连接失败导致挂死 | Bug | 7 | 1 | OPEN |
| [Issue #3338](https://github.com/sipeed/picoclaw/issues/3338) — Slack 不附带图片 | Bug | 2 | 0 | OPEN, stale |
| [Issue #3345](https://github.com/sipeed/picoclaw/issues/3345) — 轻量 worker 模式提案 | 功能提案 | 0 | 0 | OPEN |

**分析**：今日讨论热度最高的两个 Issue（#3281 和 #3269）均为影响核心聊天体验的稳定性问题，分别关注 **Web UI 历史记录长时的输入延迟**和 **MCP 连接失败导致整个 agent 循环挂死、聊天界面无响应**。两者评论数均为 7，侧面反映用户对 PicoClaw 在真实场景下稳定性的关切。值得注意的是 #3269 为 nightly build 上发现的问题，说明最新开发分支存在潜在的可靠性风险。另一条值得关注的动态是 [#3345](https://github.com/sipeed/picoclaw/issues/3345)，虽然尚无评论，但其提案方向（家⽤边缘设备上的轻量 worker 模式）可能代表社区正在探索 PicoClaw 的差异化使用场景。

## 5. Bug 与稳定性

按严重程度排列：

1. **高 — MCP 服务器连接失败导致 agent 循环挂死、聊天界面停止回复**（[#3269](https://github.com/sipeed/picoclaw/issues/3269)）
   - 影响：PicoClaw chat 界面完全无响应，用户无法继续对话；发生在 nightly build（git 2cf030d2）
   - 状态：OPEN，已有 7 条评论，无关联修复 PR

2. **中 — Slack 媒体上传始终失败**（[#3338](https://github.com/sipeed/picoclaw/issues/3338)）
   - 影响：`SendMedia` 构建 `slack.UploadFileParameters` 时未设置 `FileSize`，slack-go v0.23.1 在网络调用前即拒绝上传，错误提示 `file.upload.v2: file size cannot be 0`
   - 状态：OPEN，已有修复 PR [#3340](https://github.com/sipeed/picoclaw/pull/3340) 待合并，停滞 9 天

3. **低 — Web UI 输入明显卡顿**（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）
   - 影响：PicoClaw 0.3.1 Web UI 在会话历史较长时输入响应变慢，影响聊天体验
   - 状态：OPEN，已标记 stale，7 条评论，无关联修复 PR

## 6. 功能请求与路线图信号

**轻量级 worker 模式提案**（[#3345](https://github.com/sipeed/picoclaw/issues/3345)，作者 kvnloo）：

- **核心诉求**：面向低资源设备（RISC-V/ARM/MIPS 板子、树莓派、旧 Android 手机、可用内存约 10–20 MB 的机器）提供轻量化的 PicoClaw worker 模式，用于家庭边缘计算场景
- **项目契合度**：PicoClaw 的目标设备与提案中描述的低成本硬件高度重合，"跑在分布式 agent 系统忽视的设备上"这一痛点正是项目的差异化优势所在
- **纳入下一版本的可能性**：该提案目前处于初始阶段（无评论、无实现细节），短时间内进入主线可能性较低；但从产品定位看，这是一个值得维护者认真评估的方向——如果实施，可能显著拓宽 PicoClaw 的部署场景，并形成与通用 agent 框架的差异化壁垒。建议维护者关注该 Issue 并在 roadmap 中给出方向性回应。

## 7. 用户反馈摘要

- **MCP 集成稳定性是核心痛点**（来自 [#3269](https://github.com/sipeed/picoclaw/issues/3269) 反馈）：MCP 服务器连接失败会导致整个 agent 循环挂死，用户完全无法继续对话，说明 PicoClaw 在 agent 循环中对 **外部依赖（MCP server）的故障处理不足**，缺少超时/重试/降级机制
- **历史记录长时的输入体验需要优化**（来自 [#3281](https://github.com/sipeed/picoclaw/issues/3281)）：用户在会话历史较长时遇到 Web UI 输入卡顿，说明前端渲染或状态管理在大上下文场景下仍存在性能瓶颈，重构 Web UI 时需重点关注
- **Slack 集成未经过充分测试**（来自 [#3338](https://github.com/sipeed/picoclaw/issues/3338)）：`FileSize` 缺失是基本的 API 使用错误，说明集成测试覆盖不足；用户在真实 Slack 使用中必然受影响，若 Slack 是重点渠道，需要补全端到端测试

## 8. 待处理积压

- **[PR #3340](https://github.com/sipeed/picoclaw/pull/3340)**（待合并 9 天，已标记 stale）：修复 Slack 媒体上传失败（set FileSize），修复方案明确且代码量小。该 PR 长期停滞会持续影响 Slack 渠道用户体验，建议维护者尽快 review 合并
- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)**（创建于 2026-07-21，已超一个月，已标记 stale）：Web UI 输入卡顿在会话历史较长时出现，涉及 Web UI 核心交互体验，建议排查是渲染层还是状态管理层的问题
- **[Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)**（创建于 2026-07-20，已超一个月）：MCP 连接失败导致 agent 挂死，属于稳定性关键问题，且发生于 nightly build（当前开发分支），建议优先确认是否在最新版本中仍存在并给出修复计划

---

*日报生成时间：2026-08-26 | 数据来源：github.com/sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

NanoClaw 今日处于**高度活跃**状态，24 小时内 4 条新 Issues 全部为新开且未关闭，另有 38 条 PR 动态（25 条待合并、13 条已合并/关闭），表明核心团队与社区贡献者双线并进。核心团队（amit-shafnir 等）正集中推进 **Ollama 本地模型支持**（#3546、#3547、#3548）以及 **Codex/OpenCode 合成器收敛重构**（#3536、#3539、#3540），后者已全部合并。值得关注的是，新增 Issues 呈现集中趋势——同一作者 glifocat 连续提交 4 条与 **Dial 拨号技能和 Vercel 技能的 shell 注入漏洞及代理范围缺陷**相关的问题，指向技能（skills）体系的系统性能问题。Slack 房间交接与容器状态同步等稳定性修复也有多条已合入。整体项目在基础设施重构与安全性加固并行推进，健康度良好，但技能体系的安全与作用域问题已成为当前最突出的风险信号。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日共有 13 条 PR 已合并或关闭，其中以下合入的 PR 值得关注：

- **PR #3536** `[core-team] fix(compose): inline every instruction source into one project document`（已合并）— 将原本通过 `@` 导入指向 `/app` 符号链接的指令源全部内联到单一项目文档中，修复了 Claude Code 安全更新后外部导入被拦截的问题，确保 agents 获得此前缺失的能力指令。这是对核心指令分发机制的重要架构性修复。
- **PR #3539 / #3537** `[core-team] refactor(codex): keep the spec, drop the duplicated composer`（已合并）— 删除 Codex 自有的重复 composer，统一使用 trunk 共享 composer，修复了两种 composer 已发生漂移的问题（如 `cli_scope: disabled` 时错误传递 `ncl tasks` 手册）。
- **PR #3540** `[core-team] fix(opencode): run the agent session in the agent workspace`（已关闭）— 修复 `opencode serve` 继承 runner 工作目录（`/workspace/group`）而非 agent 工作空间（sibling 目录）的问题，使 OpenCode agents 从正确目录读取项目文档。
- **PR #3544** `[core-team] fix(slack): add explicit room handoffs`（已关闭）— Slack 房间交接功能的首轮提交，后续在 #3545 中重新开放，可能包含修订版本。
- **PR #61** `chore: add WhatsApp auth retry logic and additional Anthropic env vars`（已关闭）— 为 WhatsApp 认证增加自动重连逻辑，并补充 Anthropic 环境变量。
- **PR #3542** `fix: clear container_status drift at startup adoption`（开放）— 修复容器状态在启动继承时出现的漂移问题。

**核心进展信号**：`compose` 内联化（#3536）与 Codex 合成器收敛（#3539）两项合入表明项目正在系统性地解决 agent 指令传递的一致性问题，属于为多 provider 支持（Ollama 等）所做的底层准备。

## 4. 社区热点

今日评论量整体偏低（多数 Issue 与 PR 评论数为 0 或未披露），但从动态频率看，以下条目是社区参与度最高的：

- **PR #61** *(已关闭)* — WhatsApp 认证重试逻辑与环境变量补充，历时约 6 个月后于今日关闭，长期悬而未决的 PR 终获处理。链接: [PR #61](https://github.com/nanocoai/nanoclaw/pull/61)
- **PR #3525** *(开放)* — 修复 agent 作用域选择向导无法回显输入的问题，作者明确回应了核心团队对 #3432 的取舍，展示了社区与维护者之间的协作流程。链接: [PR #3525](https://github.com/nanocoai/nanoclaw/pull/3525)
- **PR #2431** *(开放)* — Slack 适配器的条件线程策略（DM 用顶层消息、频道用线程），已开放逾 3 个月仍未合并，是当前最受关注的长线 PR 之一。链接: [PR #2431](https://github.com/nanocoai/nanoclaw/pull/2431)
- **Issue #3538** — 提议将 NanoClaw 容器部署为家庭边缘节点，利用用户闲置的 PC、NAS 等设备，反映出用户对分布式轻量部署的真实需求。链接: [Issue #3538](https://github.com/nanocoai/nanoclaw/issues/3538)

**诉求分析**：社区层面呈现两种诉求——一是 **Slack 房间交接与线程策略**等实际工作流功能（#3545、#2431），二是将项目从单机 Docker 宿主延伸到**边缘/家庭服务器**（#3538）与**本地模型**（Ollama，对应 #3546-#3548）的部署形态扩展。

## 5. Bug 与稳定性

以下问题按严重程度排序：

| 严重程度 | Issue/PR | 描述 | 处理状态 |
|---------|----------|------|---------|
| **高（安全/认证绕过）** | [Issue #3543](https://github.com/nanocoai/nanoclaw/issues/3543) | `add-dial` 技能将 `{{owner_email}}` 未加引号拼接进 shell 命令——含撇号的邮箱会导致登录失败，shell 元字符可绕过验证。涉及 `add-dial/SKILL.md:196/203` 和 `add-dial-tool/SKILL.md:117/124` 两处 | 无 fix PR |
| **高（功能不可用）** | [Issue #3535](https://github.com/nanocoai/nanoclaw/issues/3535) | `add-vercel` 在每次会话目录中 rsync 真实技能副本，导致 spawn-time 符号链接同步被阻塞，锁定的副本始终指向陈旧的技能版本 | 无 fix PR |
| **中** | [Issue #3532](https://github.com/nanocoai/nanoclaw/issues/3532) | `/add-dial-tool` 的 per-agent 作用域对后续创建的 agent 失效——新 group 会默认获得该工具，绕过 OneCLI 网关的 block 规则 | 无 fix PR |
| **低** | [PR #3542](https://github.com/nanocoai/nanoclaw/pull/3542) | `container_status` 在启动继承时出现漂移，需启动时清理 | 已有修复 PR，开放中 |
| **低** | [PR #3311](https://github.com/nanocoai/nanoclaw/pull/3311) | 定时任务出错时错误被写入 `chat` 消息且复制了批次的路由字段，导致错误未正确路由给操作者 | 已有修复 PR（修复 #3223），开放中 |

三 条由 glifocat 提交的 Dial/Vercel 技能相关 bug（#3543、#3535、#3532）均**尚无对应修复 PR**，且指向的技能文件路径非常具体，建议维护者优先处理，因为它们涉及 shell 注入安全风险与权限逃逸问题。

## 6. 功能请求与路线图信号

核心团队正在推进的 **Ollama 本地模型支持**路线清晰可见，三条 PR 构成完整的垂直切片：

- **PR #3546** `[core-team] feat(ollama): local Ollama provider payload` — 新增 Ollama provider 载荷，使 agent group 可路由至本地 Ollama 守护进程，且避开 Claude Code 的每次调用提示前缀。
- **PR #3547** `[core-team] feat(providers): engine seams for registry providers that wrap the Claude path` — 为 registry providers（从 Ollama 开始）暴露 engine 接入点，使其无需修改 engine 文件即可包装内置 Claude 路径（按实例限定 SDK 工具等）。
- **PR #3548** `[core-team] feat(skills): ollama launch nanoclaw, the one-command local-model install` — 将 `ollama launch nanoclaw` 做成单命令安装、接线并启动本地模型助手。

如果这三条 PR 被合并，**下一版本大概率将正式支持本地模型运行**，对于数据隐私敏感用户和有离线需求的用户是重大利好。这与社区提出的边缘节点诉求（#3538）方向一致，后者可能成为后续版本候选。

## 7. 用户反馈摘要

- **技能安装流程存在多处硬编码缺陷**（#3543、#3535、#3532，作者 glifocat）：提交者直接定位到技能文件的精确行号，显示其深度使用并踩中了安装脚本对特殊字符、符号链接和迟建 agent 的边界情况处理不足，且反馈指出现有验证规则对 shell 元字符不设防。
- **向导交互体验问题**（PR #3525，作者 OmriBenShoham）："which agents may use Dial" 向导无法回显用户输入内容，社区贡献者主动修复，显示对 CLI 交互质量的关注。
- **对本地/边缘部署的明确诉求**（#3538，作者 kvnloo）：用户指出 NanoClaw 容器虽隔离但仍在单台 Docker 主机上运行，希望利用现有闲置家用设备（PC、NAS、家庭服务器）组成边缘工作节点，表达了对资源利用率和部署灵活性的期待。

## 8. 待处理积压

- **PR #2431** *(2026-05-12 创建，开放中)* — Slack 适配器条件线程策略（DM→顶层消息、频道→线程）。已悬置超过 3 个月，是当前最久的开放功能 PR，涉及 `ChannelAdapter` 接口变更，可能因设计决策或优先级问题被搁置。建议维护者回应进展或明确取舍。链接: [PR #2431](https://github.com/nanocoai/nanoclaw/pull/2431)
- **PR #61** *(2026-02-03 创建，今日关闭)* — WhatsApp 认证重试逻辑与环境变量补充，历时 6 个月才获处理，虽然结果已关闭，但期间社区缺乏响应。若关闭时未合并需关注后续跟进。链接: [PR #61](https://github.com/nanocoai/nanoclaw/pull/61)
- **PR #3311** *(2026-08-18 创建，开放中)* — 定时任务错误路由修复（对应 #3223）。已开放一周有余，错误路由至操作者属于稳定性关键路径，建议尽快合入。链接: [PR #3311](https://github.com/nanocoai/nanoclaw/pull/3311)

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

项目今日活跃度较低：过去24小时内仅有 1 条新 Issue（#994），无 PR 更新、无新版本发布。该 Issue 提出了基于现有 `RuntimeAdapter` 与签名收据构建家庭边缘网格的架构设想，具有较高的设计价值，但目前尚无评论和反馈。整体而言，项目处于稳定但节奏平缓的状态，维护者响应与社区讨论均有待激活。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 项目进展

过去24小时内无合并或关闭的 PR，项目代码层面无可见的功能推进。

## 4. 社区热点

今日唯一的活跃讨论为：

- [Issue #994：Household edge mesh using RuntimeAdapter workers and signed receipts](https://github.com/nullclaw/nullclaw/issues/994) — 作者 kvnloo，创建于 2026-08-25，0 评论，0 👍

该 Issue 虽无评论，但其内容值得关注：作者指出 NullClaw 已具备构建"家庭边缘网格"的异常成熟的基础组件——小型 Zig 运行时、`RuntimeAdapter` 与 `Peripheral` vtable、Docker/WASM 适配器、硬件发现、隧道、通道、工具以及严格的体积/内存约束。这反映了社区用户对 NullClaw 在家庭/边缘场景落地的强烈兴趣，且认可其架构底子。当前缺少维护者或其他用户的回应，该方向是否会获得官方背书仍待观察。

## 5. Bug 与稳定性

过去24小时内无 Bug、崩溃或回归问题报告。

## 6. 功能请求与路线图信号

今日唯一信号来自 [Issue #994](https://github.com/nullclaw/nullclaw/issues/994)：家庭边缘网格的架构提案。该需求建立在现有 `RuntimeAdapter` 工作线程与签名收据机制之上，属于对现有原语能力的组合式扩展，而非全新功能堆叠。考虑到 NullClaw 已具备 Docker/WASM 适配器、硬件发现、隧道与通道等基础能力，该方向的落地成本可能较低，若维护者认可，有望进入后续版本规划。

## 7. 用户反馈摘要

本次数据窗口内无 Issue 评论可供提炼，用户反馈证据不足。唯一可观察的信号来自 Issue #994 的论述本身：作者对项目现有架构给出了积极评价（"unusually good primitives"），认为其组件完备度超出同类项目，同时暗示这些能力在当前形态下尚未被充分组合利用。

## 8. 待处理积压

数据窗口内无长期未响应的 Issue 或 PR 记录。建议维护者关注今日唯一 Issue（[#994](https://github.com/nullclaw/nullclaw/issues/994)）的后续讨论，避免因低活跃期导致有价值的架构提案被搁置。

---

**项目健康度评估**：整体状态健康但活跃度偏低。无回归与 Bug 积压是积极信号；缺少 PR 合入与版本发布说明项目节奏暂缓，建议维护者通过回应 #994 或推进既有 PR 来维持社区参与度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报（2026-08-26）

## 1. 今日速览

过去 24 小时项目活跃度保持高位：共 24 条 Issue 更新（18 条活跃/新增，6 条关闭）和 25 条 PR 更新（15 条待合并，10 条已合并/关闭），但无新版本发布。核心开发集中在三条主线：**WebUI 设计系统落地**（多个修复 PR 已合入）、**通知中心能力扩展**（同一贡献者连提 5 个 PR 构建持久化通知体系）、以及**两个高风险性能缺陷的修复**（模型可见的 tool result 无界截断、agent-loop 工具循环调用）。值得注意的负面信号：两个性能 Bug 分别造成 **19.7 秒单轮推理延迟** 和 **123 秒的重复工具调用死循环**，均被标记为 `risk: medium`，但尚无正式 fix PR（其中 #7896 已提供修复方案正在审查中）。

---

## 3. 项目进展

### 已合并/关闭 PR（推进项）

| PR | 内容 | 影响 |
|---|---|---|
| [#7883](https://github.com/nearai/ironclaw/pull/7883) | Notification Center 加载时显示 loading shell（关闭 #7880） | 改善 WebUI 感知性能 |
| [#7877](https://github.com/nearai/ironclaw/pull/7877) | 新增 10 个非英语 locale 包中 Chat OOBE 文案及共享 Back/Continue 的本地化（关闭 #7870） | 完成暴露路由的 i18n 补全 |
| [#7881](https://github.com/nearai/ironclaw/pull/7881) | Extensions 页面的 Registry/Channels/Tools 标签迁移至共享 `Panel` 组件（关闭 #7878） | 设计系统 Phase 1 落地 |
| [#7802](https://github.com/nearai/ironclaw/pull/7802) | 移除 `IRONCLAW_OOBE_SUGGESTIONS` 环境变量，OOBE 建议始终启用 | 简化配置面 |
| [#7894](https://github.com/nearai/ironclaw/pull/7894) | 降低 CI 必需 scope checkout 传输量（partial-clone） | CI 性能优化 |

**总结**：WebUI 设计系统 Phase 1 的核心工作已收尾，i18n 覆盖补齐；通知系统开始进入"生产者契约加固"阶段。项目整体处于 **v1.4.0 周期的中期冲刺**。

---

## 4. 社区热点

### 最受关注 Issue

**[#7732 Epic: Persistent per-user sandbox with iron-proxy; defer loop executors](https://github.com/nearai/ironclaw/issues/7732)** — 10 条评论
- 诉求：当前 `builtin.shell` 虽已通过 Docker 路由到用户沙箱，但每次创建/销毁容器，缺少持久化的"用户计算机"。社区希望在 v1.4.0 中实现持久沙箱。
- 分析：这是平台级架构方向，讨论热度持续一周以上，是 v1.4.0 路线图中的最高优先级 item。

### CI 基础设施讨论

**[#7799 CI expedite T2（已关闭）](https://github.com/nearai/ironclaw/issues/7799)** — 4 条评论
- 内容：cargo-nextest 替换串行 `cargo test` 循环、JUnit 失败汇总、PR 并行度放开。已关闭，说明已落地或转向 PR #7898。

---

## 5. Bug 与稳定性

### 🔴 高风险（已有 fix PR 待合并）

| Issue | 严重度 | 描述 | Fix PR |
|---|---|---|---|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) perf(extensions) | **risk: medium** | 两封邮件的 `gmail.get_message` 导致 **49,152 字节** 未投影能力载荷被盲切 24 KiB 头切片，单轮 19.7s（19.2s 为模型推理） | [#7896](https://github.com/nearai/ironclaw/pull/7896) 有界结构感知投影路径 |
| [#7892](https://github.com/nearai/ironclaw/issues/7892) bug(agent-loop) | **risk: medium** | 模型 15 次发现延迟工具但从不调用，123s 运行中 31 次能力调用仅 4 个不同参数对，无终止守卫 | 暂无 fix PR，待排查 |

### 🟡 中风险

| Issue | 描述 |
|---|---|
| [#7862](https://github.com/nearai/ironclaw/issues/7862) | Telegram device-link 在 `telegram_api_id/api_hash` 未配置时报泛化错误，无具体指引（triage 中发现，相关修复见 #7897 中的 CX 改进） |

### 🟢 已关闭（已完成修复）

| Issue | 描述 |
|---|---|
| [#7880](https://github.com/nearai/ironclaw/issues/7880) | Notification Center 加载无 fallback → PR #7883 已合入 |
| [#7870](https://github.com/nearai/ironclaw/issues/7870) | WebUI 暴露路由 i18n 缺失 → PR #7877 已合入 |
| [#7878](https://github.com/nearai/ironclaw/issues/7878) | Extensions 遗留 `.v2-panel` → PR #7881 已合入 |

### ⚠️ 平台性问题

**[#6590 serve 在 Windows 上失败](https://github.com/nearai/ironclaw/issues/6590)** — 已持续 34 天未关闭，3 条评论。"workspace root must not overlap default skill root /skills" 错误影响 Windows 本地开发的两个 profile。

---

## 6. 功能请求与路线图信号

### 可能纳入下一版本（有配套 PR 支撑）

| Issue | 功能 | 配套 PR | 信号强度 |
|---|---|---|---|
| [#7893](https://github.com/nearai/ironclaw/issues/7893) | 每个自动化任务独立的 lessons 文件（`ironclaw.memory.automation_lessons_set` + fire-time 注入） | 暂无 | 高 — v1.4.0 阶段主动提出，与 memory 架构方向一致 |
| [#7875](https://github.com/nearai/ironclaw/issues/7875) | 扩展认证失效时发布 `AuthenticationRequired` 通知 | [#7901](https://github.com/nearai/ironclaw/pull/7901) | 高 — PR 已提交 |
| [#7872](https://github.com/nearai/ironclaw/issues/7872) | 通知中心覆盖自动化预运行失败、资源阻断等事件 | [#7899](https://github.com/nearai/ironclaw/pull/7899)、[#7900](https://github.com/nearai/ironclaw/pull/7900) | 高 — 3 个 PR 同时推进 |
| [#7867](https://github.com/nearai/ironclaw/issues/7867) | WebUI composer 语音输入 | 暂无 | 中 — Slack/Telegram 已支持语音，WebUI 是唯一缺口 |
| [#7895](https://github.com/nearai/ironclaw/issues/7895) | Settings UI 中增加 agent.md 人格编辑器 | 暂无 | 中 — 用户直接反馈配置困难 |

### 路线图信号

- **#7732**（v1.4.0 Epic）：持久化 per-user sandbox 是下一版本的核心方向
- **#6369**（Epic）：v1 遗留代码退役后的 Tier B 跟进仍在进行

---

## 7. 用户反馈摘要

| 来源 | 用户痛点/诉求 |
|---|---|
| [#7895](https://github.com/nearai/ironclaw/issues/7895) | 用户原话："me trying to set up personality with ironclaw..." — 人格（agent.md）配置入口难找，希望在 Settings 中提供专属编辑区 |
| [#7867](https://github.com/nearai/ironclaw/issues/7867) | WebUI 仅支持键盘输入；Slack/Telegram 均已支持语音，WebUI 成为体验洼地 |
| [#7892](https://github.com/nearai/ironclaw/issues/7892) | 实际使用中 agent 在 123 秒内反复调用相同工具组合无法跳出，用户感知为"卡死" |
| [#6590](https://github.com/nearai/ironclaw/issues/6590) | Windows 用户完全无法本地启动 `serve`，错误信息指向 skill root 重叠但无解决指引 |

---

## 8. 待处理积压

| 项目 | 类型 | 已持续 | 备注 |
|---|---|---|---|
| [#6590](https://github.com/nearai/ironclaw/issues/6590) Windows serve 启动失败 | Bug | **34 天** | 平台级阻塞，两个 profile 均受影响，需维护者优先级评估 |
| [#6369](https://github.com/nearai/ironclaw/issues/6369) v1 退役后 Tier B 跟进 | Epic | **37 天** | 持续更新中（8/26 有动态），但未见阶段性结论 |
| [#7892](https://github.com/nearai/ironclaw/issues/7892) agent-loop 死循环 | Bug（risk: medium） | 1 天 | 尚无 fix PR，需尽快定位终止守卫缺失问题 |
| [#7887](https://github.com/nearai/ironclaw/issues/7887) 扩展查找路径的设备链接引导缺陷 | Bug | 1 天 | [#7897](https://github.com/nearai/ironclaw/pull/7897) 已在审查中，覆盖两个 CX 场景 |

---

*数据来源：GitHub nearai/ironclaw 仓库，统计窗口 2026-08-25 至 2026-08-26。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报（2026-08-26）

## 今日速览

LobsterAI 今日活跃度处于高位：24小时内关闭/合并了13个PR、新发布2个版本，且存在1个待合并PR，显示团队正在快速迭代。主要进展集中在 Library 模块云端分享文件永久删除能力、登录引导与侧边栏体验优化、OpenClaw 心跳默认关闭等方向。Issues 侧新开1个波斯语RTL文本渲染需求，同时关闭1个历史遗留Bug。Windows 2026.8.26 版本正在筹备中（PR #2549），整体项目健康度良好。

---

## 版本发布

### LobsterAI 2026.8.25（2026-08-25 发布）

**更新内容：**
- 新增 Library 库能力（PR #2513）
- 增强跨平台缩略图与本地产物生命周期管理（PR #2524）
- 优化本地产物预览与操作体验（PR #2524）

**注意事项：** 该版本侧重 Library 模块基础能力建设，未标注破坏性变更。

参考链接：[Release 2026.8.25](https://github.com/netease-youdao/LobsterAI/releases) | [PR #2524](https://github.com/netease-youdao/LobsterAI/pull/2524) | [PR #2513](https://github.com/netease-youdao/LobsterAI/pull/2513)

### LobsterAI 2026.8.21（2026-08-21 发布）

**更新内容：**
- dsh 模块新增启用开关与工作台打开的使用分析埋点（PR #2515）
- dsh 版本升级至 0.1.1-rc.1（PR #2516）

参考链接：[Release 2026.8.21](https://github.com/netease-youdao/LobsterAI/releases) | [PR #2515](https://github.com/netease-youdao/LobsterAI/pull/2515) | [PR #2516](https://github.com/netease-youdao/LobsterAI/pull/2516)

---

## 项目进展

今日合入的13个PR覆盖多个模块：

**Library 云端分享能力（PR #2550）** — 这是今日最重的功能合并，新增分享文件永久删除接口与IPC、仅允许删除已停止分享并通过文件名二次确认、删除后同步云端列表与本地收藏、处理服务端不兼容与状态冲突数据校准，并修复了本地服务部署在账号切换和弹窗关闭后的重复触发问题，补充了自动化测试及服务端联调文档。同时为今日 Release 2026.8.25 贡献了 Library 底层能力（PR #2513、#2524）。

**OpenClaw 默认配置调整（PR #2537）** — 默认关闭 OpenClaw 后台心跳，新用户或未设置配置时生效，保留用户显式选择，并保持 Settings 与 OpenClaw 配置同步，增加低噪声心跳日志。这降低了默认资源占用。

**登录引导体验优化（PR #2546、#2547、#2545）** — 修复侧边栏登录推广提示在引擎启动完成前过早展示的问题：暂停自动隐藏计时器，待引擎启动遮罩清除后再展示5秒。另有登录引导相关修复（#2545、#2547）与设置项宽度调整（#2548）。

**侧边栏图标重设计（PR #2540、#2542、#2544）** — 重新设计侧边栏 Library 图标并统一风格应用。

**用户菜单新增每日积分领取入口（PR #2539）** — 并在 Cowork 模块中通过更醒目的暖色胶囊样式、更大礼物图标及适配减少动效偏好的入场动画强化启动积分活动入口展示（PR #2538）。

**Windows 安装器与构建（PR #2543、#2549）** — 修复 Web 安装器时序诊断问题；提交 Release/2026.8.26 构建分支（Windows 平台）。

**应用更新状态保持（PR #2551，待合并）** — 修复应用更新时保留就绪状态的问题，涉及 renderer 与 main 进程。

---

## 社区热点

今日最受关注的 Issue 为新开需求 [#2541 Persian (Farsi) text support in chat](https://github.com/netease-youdao/LobsterAI/issues/2541)，创建当日即获1条评论，涉及聊天输入框 LTR 方向导致波斯语输入不便，以及混合文本 RTL 渲染与 ZWNJ 半空格显示问题。此外，Issue #1152（corp 邮箱 IMAP 连接失败）在沉默多月后今日被再次更新（+1 评论），显示用户仍在等待处理进展。

---

## Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 |
|---------|----------|------|------|
| 中 | [#1183](https://github.com/netease-youdao/LobsterAI/issues/1183) | Windows 上 OpenClaw 网关启动反复超时，遮罩循环跳出；2026.3.31 版本引入 | 今日关闭（stale） |
| 中 | [#1152](https://github.com/netease-youdao/LobsterAI/issues/1152) | v2026.3.30 版本 corp 邮箱 IMAP 连接失败，用户自查配置无误 | 仍开放，今日有更新评论 |
| 低 | [PR #2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | 应用更新后就绪状态未保留 | 有 fix PR，待合并 |

**说明：** 今日关闭的 PR 中未出现针对上述开放 Bug 的修复；#1183 被标记为 stale 后关闭，但用户侧故障（OpenClaw 网关启动超时）是否在新版本彻底解决尚不明确。

---

## 功能请求与路线图信号

1. **波斯语/阿拉伯语 RTL 文本渲染支持（Issue #2541）** — 新建需求，涉及聊天输入框方向、混合文本双向渲染及 ZWNJ 半空格。目前无对应 PR，但作为国际化/无障碍能力，可能纳入后续 renderer 模块迭代。值得关注其评论热度以判断社区诉求强度。

2. **每日积分领取入口（PR #2539、#2538）** — 已合入用户菜单与 Cowork 活动入口强化，属于商业化/用户增长路径，预计随 2026.8.26 版本发布。

3. **云端分享文件永久删除（PR #2550）** — 已合入，补充了 Library 分享生命周期管理的能力闭环，服务端兼容处理也已完成，大概率进入下一版本。

4. **OpenClaw 心跳默认关闭（PR #2537）** — 已合入，为降低默认资源消耗而设，方向符合个人 AI 助手轻量化趋势。

---

## 用户反馈摘要

- **Issue #1152（IMAP 连接失败）**：用户表示配置与其他成功同事完全一致仍无法连接，附截图后无官方进一步排查回复，今日被再次顶起。此类环境差异化问题（corp 邮箱）建议官方提供抓包/日志排查指引。

- **Issue #1183（OpenClaw 网关循环启动）**：用户描述了明确复现路径（添加模型→调用→关闭开关→保存→回首页→飘红报错），故障体验直接中断工作流，问题持续近5个月后今日关闭，建议确认修复版本并回帖告知用户。

- **Issue #2541（波斯语支持）**：用户指出聊天输入框强制 LTR 与混合文本双向渲染问题，属于非英语用户的基础可用性诉求，社区暂无更多讨论，但属于明确的产品国际化缺口。

---

## 待处理积压

- **[Issue #1152](https://github.com/netease-youdao/LobsterAI/issues/1152)（2026-03-31 创建，已开放约5个月）** — corp 邮箱 IMAP 连接失败，今日仍有用户关注评论。长时间无官方修复或排查指引，属于积压问题，建议维护者至少回复排查建议或标记已知问题。

- 其余 Issues 均已在本日更新或有 PR 对应，暂无其他长时间无人响应的关键积压项。

---

*数据来源：LobsterAI GitHub 仓库（github.com/netease-youdao/LobsterAI），统计时间窗口为 2026-08-25 至 2026-08-26。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-26

## 1. 今日速览

Moltis 项目今日整体活跃度偏低：过去 24 小时无新增或更新的 Issues，PR 侧有 2 条动态，其中 1 条已关闭（#1245，Brave 搜索参数校验修复），1 条仍处于开放状态（#1199，Coder 远程工作区沙箱支持）。项目发布了新版本 `20260826.01`，表明发布节奏稳定。整体来看，项目处于维护巩固期，社区讨论热度较低，但核心功能修复仍在持续推进。

## 2. 版本发布

- **[20260826.01](https://github.com/moltis-org/moltis/releases/tag/20260826.01)** — 今日发布的新版本，版本号格式为日期标记。当前未提供详细的更新日志、破坏性变更说明或迁移指南。建议关注该 Release 页面获取后续补充的变更详情。

## 3. 项目进展

**[PR #1245](https://github.com/moltis-org/moltis/pull/1245)（已关闭）- fix(tools): validate Brave search parameters**

- 作者：rubenssoto，创建于 2026-08-25，关闭于 2026-08-26
- 该 PR 修复了 Brave 搜索工具的参数校验逻辑：仅在当前激活的搜索提供方为 Brave 时才暴露本地化参数，并在工具 schema 中使用 provider 支持的枚举类型；同时规范了国家、搜索语言、界面语言及 freshness 值的处理流程。
- 意义：提升了工具 schema 的准确性和参数校验的严格性，减少了因参数不合法导致的搜索失败，属于对工具层稳定性的增量优化。

今日另有 1 条 PR（#1199）仍处于开放状态，未发生合并或关闭动作。整体来看，项目今日完成了 1 项功能性修复的收尾，进展平稳。

## 4. 社区热点

今日社区讨论活跃度较低，无新增评论或高互动量条目。以下为近期相对值得关注的开放 PR：

- **[PR #1199](https://github.com/moltis-org/moltis/pull/1199)（开放）- Add Coder remote workspace sandbox support**
  - 作者：penso，创建于 2026-08-15，最后更新于 2026-08-25
  - 该 PR 为 Moltis 增加 Coder 沙箱后端，通过 REST API 创建临时工作区，并通过可重连的 PTY WebSocket 执行命令，支持模板 ID/名称、预设、富参数、TTL、环境别名等配置。该 PR 已开放 11 天，属于功能面较大的改动，值得社区关注和讨论。

## 5. Bug 与稳定性

- **搜索工具参数校验缺陷** — 通过 PR #1245 修复。当用户使用非 Brave 搜索提供方时，Brave 特有参数可能被错误暴露或传递非法值，导致搜索失败或行为异常。该问题已在今日通过参数校验与规范化逻辑修复，无遗留影响。

今日未发现其他新报告的 Bug、崩溃或回归问题。

## 6. 功能请求与路线图信号

**[PR #1199](https://github.com/moltis-org/moltis/pull/1199) — Coder 远程工作区沙箱支持**

- 该 PR 提出了一个明确的功能扩展方向：引入 Coder 作为新的远程沙箱后端，支持通过 REST API + PTY WebSocket 在临时工作区中执行命令，并支持模板、预设、TTL、环境别名等高级配置。
- 结合该 PR 已开放 11 天的状态，说明项目方已有远程沙箱容器的功能储备。若能合并，将显著扩展 Moltis 在多环境执行场景下的能力，有较大概率进入后续版本规划。

## 7. 用户反馈摘要

今日无新增 Issues 或评论，因此无法从中提炼新的用户反馈。从近期开放 PR 来看：

- **[PR #1199](https://github.com/moltis-org/moltis/pull/1199)** 的用户（penso）提出对 Coder 工作区支持的明确需求，涉及临时工作区创建、TTL 生命周期管理、环境别名等使用场景，反映了开发者对远程/隔离执行环境的需求在增长。

建议后续关注该 PR 的讨论动态，以获取更多来自维护者和社区的反馈信息。

## 8. 待处理积压

**[PR #1199](https://github.com/moltis-org/moltis/pull/1199) — Add Coder remote workspace sandbox support**

- 创建于 2026-08-15，已开放 11 天，最后更新于 2026-08-25。
- 该 PR 涉及功能面较大（新增后端集成、命令执行通道、参数配置体系），目前仍未合并或收到维护者的明确反馈。建议维护者安排评审，明确是否纳入后续版本路线图，避免长期积压导致分支冲突或需求过期。

---

*数据来源：[Moltis GitHub 仓库](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-26

> 数据来源：GitHub (agentscope-ai/CoPaw)，统计窗口：过去 24 小时

---

## 1. 今日速览

**活跃度：🔥 高**（24h 内 36 条 Issue + 42 条 PR 更新，发出 1 个新版本）

- 项目正处于 **v2.1.1-beta 系列迭代高峰期**，昨日发布 `v2.1.1-beta.3`，修复了控制台依赖、文档命名等问题。
- **质量基建成为主线**：多条 PR 集中在单元测试覆盖（+1,148 个测试用例）、CI 集成测试并行分片、本地测试脚本修复上，整体质量投入显著。
- **长上下文稳定性是当前最大痛点**：多个 issue 报告任务无提示中断、长文本推理连接断开、记忆串会话等问题，且涉及多个版本，值得优先排查。
- **桌面端打包问题集中暴露**：`_qwenpaw_remote_backend` 模块缺失、OpenSSL 3.0 老旧 TLS 栈、NSIS 卸载器自锁等问题，显示桌面分发链路需要加固。
- 多用户/企业级需求持续累积（#5780、#4702、#6335），已有相关 PR 在推进，但尚未形成完整方案。

---

## 2. 版本发布

### v2.1.1-beta.3（昨日发布）

**更新内容：**
- `chore(console)`: 将 `@agentscope-ai/chat` 依赖锁定至 1.1.72（PR #7257）
- `docs(loop-engineering)`: 修正 `PluginAPI` 大小写命名为 `PluginApi`（PR #7269）
- `test(integration)`: 扩展集成测试（PR #7269，内容截断）

**破坏性变更：** 无明确指示。

**迁移注意：** 锁定的 chat 依赖版本可能影响控制台扩展的兼容性；此外 #7311 报告 beta.2 存在 `_qwenpaw_remote_backend` 模块缺失导致所有工具不可用的问题，beta.3 是否已修复尚未确认，**升级用户建议先验证工具功能**。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 内容 | 影响 |
|---|---|---|
| [#7283](https://github.com/agentscope-ai/QwenPaw/pull/7283) | **备份任务在 SSE 断开后保持存活**，引入 app 级 `BackupManager`，带可重连的作业状态与心跳 | 大备份不再因前端断连而失败，数据可靠性提升 |
| [#7323](https://github.com/agentscope-ai/QwenPaw/pull/7323) | **修复 Windows NSIS 卸载器将自身识别为需终止进程的问题** | 解决安装/更新卡死问题（关联 #6810） |
| [#7208](https://github.com/agentscope-ai/QwenPaw/pull/7208) | **钉钉群聊支持共享会话上下文**，不再按成员隔离上下文 | 团队协作场景的重要功能改进 |

**整体评估**：今日合入的 PR 主要解决数据可靠性（备份）和 Windows 安装体验两个关键问题，同时推进了钉钉群聊协作能力，项目稳健向前。

---

## 4. 社区热点

| 议题 | 评论数 | 诉求分析 |
|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)（[Bug] 任务无提示中断，需说"继续"才恢复） | 11 | **最热 issue**。Agent 多步任务执行中"自己停止"且无提示，严重影响自动化完成度，是核心体验问题 |
| [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)（长文本/推理时 chunked read 连接断开） | 7 | 长上下文场景下的连接稳定性问题，配合自定义模型使用尤为明显 |
| [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258)（微信频道"不显示思考过程"设置无效） | 6 | 渠道配置项未生效，功能开关可靠性问题 |
| [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)（Windows 安装/更新被文件占用卡死） | 5 | 安装器体验问题，已有 PR #7323 修复，今日验证 |
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)（新增火山引擎与小米 MiMo 内置 Provider） | 5 | 国产模型接入诉求持续增长 |

**分析**：社区最关注的三件事——① Agent 自主执行可靠性（#6921），② 长上下文/长文本稳定性（#7218），③ 国产模型生态接入（#6490、#7277）。

---

## 5. Bug 与稳定性

### 🔴 高严重度

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) | v2.1.1b2 缺少 `_qwenpaw_remote_backend` 模块，**所有 agent 工具无法使用**（ModuleNotFoundError） | 无指定 PR，需紧急确认 beta.3 是否已修复 |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步任务执行中**无提示中断**，需用户手动说"继续"才恢复（评论 11 条） | 无，需排查调度器/上下文管理器 |
| [#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218) | 长文本/长推理时 `peer closed connection (incomplete chunked read)` 报错高频出现 | 无，可能与 SSE 或 Provider 超时相关 |

### 🟡 中严重度

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮对话报 400 "Referenced reasoning item not found or expired"，影响无状态上游（OpenCode Zen/Go Muse Spark） | 无 |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | 桌面端（Tauri）打包 Python 3.11 + OpenSSL 3.0.x，部分运营商网络 TLS 握手被重置，建议升级至 Python 3.13 | 无 |
| [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206)（已关闭） | v2.1.1-beta.1 手动 `/compact` 在 `compact_threshold_ratio == 0.9` 时报 pydantic ValidationError | 已关闭，验证修复 |
| [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | 2.1 网页版 Agent 自动搜索记忆错乱，搜到同一 agent 另一会话内容 | 无，Agent 记忆隔离问题 |

### 🟢 低严重度（体验类）

| Issue | 描述 |
|---|---|
| [#7306](https://github.com/agentscope-ai/QwenPaw/issues/7306) | 输入框多行时焦点自动下移，影响输入体验 |
| [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258)（已关闭） | 微信渠道"不显示思考过程"设置无效 |
| [#7262](https://github.com/agentscope-ai/QwenPaw/issues/7262)（已关闭） | 侧边菜单无响应 |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 落地信号 |
|---|---|---|
| **自定义 Provider 模型自动发现** | [#7305](https://github.com/agentscope-ai/QwenPaw/issues/7305) | ✅ 已有对应 PR [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320)（修复模型发现成功但配置流不可用），大概率纳入下个 beta |
| **可插拔长时记忆后端** | [#7252](https://github.com/agentscope-ai/QwenPaw/issues/7252)（OpenViking 后端）、[#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)（PowerContext 后端） | 🔶 两个提案并行推进，架构上通过 `BaseMemoryManager` 抽象支持，生态化方向明确 |
| **多用户/企业级账号管理（RBAC）** | [#5780](https://github.com/agentscope-ai/QwenPaw/issues/5780)、[#4702](https://github.com/agentscope-ai/QwenPaw/issues/4702)、[#6335](https://github.com/agentscope-ai/QwenPaw/issues/6335) | 📌 持续收到企业用户诉求，暂无明确排期，但音量足够高 |
| **火山引擎 Agent Plan + 小米 MiMo 内置 Provider** | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)（已关闭） | ✅ 已合入，与 PR #7277 的 Aliyun/Kimi 目录刷新一起扩充了国产模型生态 |
| **模型返回选项时弹窗点选** | [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279)（已关闭） | 体验类优化，属于持续打磨方向 |
| **运维首页布局优化** | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177)（已关闭） | 移动端操作入口位置等细节优化，已关闭但可追踪实现 |

---

## 7. 用户反馈摘要

**核心痛点：**
- **Agent 自主性不足**（#6921）："经常在输出类似 'Now 2.1, 3.1, 3.2. Let me do all three.' 后无提示就停止，需要说'继续'才会继续任务"——这是当前用户感知最强烈的缺陷。
- **长文本/长推理不可用**（#7218）："长文本、推理时间长的时候，出现以下报错比较高……我让自定义模型那边优化了超时等待，稍微好点了后，还是会出现"——用户已尝试自行缓解但问题仍在，对接自定义模型的用户受影响最大。
- **Windows 安装/更新体验**（#6810）："NSIS 连续弹出不止 4 个'无法打开要写入的文件'错误"——安装器层面已修复（PR #7323），但用户需等待新版验证。
- **记忆隔离问题**（#7193）："Agent 莫名暂停后说'继续完成未完成的任务'，开始搜索记忆出现错乱，搜索到了同一 agent 另一会话的内容，准备干另一会话的事儿"——记忆隔离是 Agent 可靠性的深层问题。

**满意之处：**
- pydantic ValidationError 回归（#7206）和侧边菜单无响应（#7262）等问题快速闭环，用户对响应速度有一定认可。

---

## 8. 待处理积压

| 项目 | 创建日期 | 天数 | 备注 |
|---|---|---|---|
| [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) — 任务跟踪与会话并发语义统一 | 07-20 | **37 天** | 涉及不同入口（CLI/控制台/频道）的并发行为不一致，属于架构层面问题，评论 4 条，尚无 assignee |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — 任务无提示中断 | 08-12 | 14 天 | 今日最热 issue（11 评论），无 assignee，无 fix PR |
| [#6569](https://github.com/agentscope-ai/QwenPaw/pull/6569) — 控制台抑制 detached TTY 后的 EIO/EPIPE 错误 | 07-30 | 27 天 | `ready-for-human-review` 状态停留较久，属低风险质量控制 PR，建议尽快走完评审 |
| [#7250](https://github.com/agentscope-ai/QwenPaw/pull/7250) — 本地测试运行器静默跳过测试套件 | 08-24 | 2 天 | 影响 CI 可信度的基础设施修复，建议优先合入 |

---

## 附：项目健康度评估

| 维度 | 状态 | 说明 |
|---|---|---|
| **迭代速度** | 🟢 优秀 | beta 高频发布 + 每日 40+ PR 活跃 |
| **问题响应** | 🟡 中等 | 新 issue 有 triage，但高热度 issue（#6921）无 assignee |
| **测试覆盖** | 🟢 明显改善 | 单日 +1,148 测试用例、+5.02pp 覆盖率，CI 并行化进行中 |
| **桌面端稳定性** | 🟡 有待加强 | beta.2 工具全挂 + OpenSSL 老旧问题同日出现 |
| **企业化进程** | 🟡 推进中 | 长期记忆生态 + 多用户需求，但无统一路线图 |
| **长上下文可靠性** | 🔴 最大风险 | 连接断开、任务中断、记忆错乱多个 issue 指向同一方向 |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-26

## 1. 今日速览

ZeroClaw 过去 24 小时保持高活跃度，共有 41 条 Issue 更新（35 条活跃/新开，6 条关闭）和 50 条 PR 更新（全部待合并），无新版本发布。值得注意的隐患是：**PR 合并数为 0**，50 条待合并 PR 中堆积了大量长期未合入的改动（最久可追溯至 7 月中旬），合并通道明显阻塞。Issue 侧，多个 P1 级安全/数据风险 Bug 仍处于开放状态（如 #10230 堆栈溢出、#9872 沙箱逃逸风险），另有 3 条新增 RFC 进入维护者评审队列。项目架构层正在进行多项深层重构（依赖反转、RFC 流程建设），但社区贡献者的 PR 长期得不到合入可能对贡献动力产生负面影响。

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 项目进展

今日 **无 PR 被合并或关闭**，50 条 PR 全部处于待合并状态。以下为本日值得关注的活跃 PR（均有更新动态，但仍在等待合入）：

| PR | 内容 | 状态 |
|---|---|---|
| [#10384](https://github.com/zeroclaw-labs/zeroclaw/pull/10384) | 将 distroless 基础镜像文档从 Debian 12 更新至 Debian 13，对齐 CIS Docker Benchmark | 🆕 今日新开，XS 级 |
| [#10383](https://github.com/zeroclaw-labs/zeroclaw/pull/10383) | 从 runtime 生成 SOP 语法参考文档，新增 `cargo generate sop-syntax` 命令 | 🆕 今日新开，L 级 |
| [#10367](https://github.com/zeroclaw-labs/zeroclaw/pull/10367) | 修复 skills 安装时的符号链接竞态漏洞（安全相关） | 今日更新，XL 级 |
| [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | 日志模块新增条目数轮转触发器和多段日志查询 | 今日更新，L 级 |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | ZeroCode 多会话窗格 + Agent 侧边栏 + 快速启动（XL 级功能） | 今日更新（创建于 8/4） |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | 图片像素级校验防止损坏图片导致 provider 请求失败 | 今日更新 |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | 将 Anthropic 不完整终止响应分类为类型化失败而非成功 | 今日更新（创建于 7/27） |
| [#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527) | CI 工具链升级至 Rust 1.98.0（8/20 稳定版），源码下限保持 1.96.0 | 今日更新 |

**核心观察**：功能开发活跃但交付停滞。本周累计待合并 PR 达 50 条，远超一周前的水平，维护者需要优先处理合入积压，否则大量功能改进将无法落地。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 分析 |
|---|---|---|---|
| 1 | [#8692 Maintainer 决策队列 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 14 | 社区对 RFC 和设计问题缺乏明确的维护者决策通道表达不满。该 Tracker 旨在建立 issue 级决策队列，反映项目在架构治理上的痛点 |
| 2 | [#8396 RFC: 将 wire protocol 提升为一等公民](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 13 | 高风险的架构级 RFC，讨论在 provider 构建和 onboarding 中如何规范化 wire protocol。涉及"ratified shape governance"，是近期最重要的架构讨论之一 |
| 3 | [#9965 并行运行时测试夹具加固](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | 9 | 测试基建问题，cron 调度器测试在多线程化后写入可执行 shim 导致不稳定。同日新增 flaky 测试报告 [#10371](https://github.com/zeroclaw-labs/zeroclaw/issues/10371)，测试可靠性问题持续累积 |
| 4 | [#10050 RFC: 网关 verbatim 频道发送（无需 agent 轮次）](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | 7 | 网关挂载了 47 个 `/api/*` 路径，但缺少不经过 agent 直接发送消息的能力。社区对网关 API 灵活性有明确需求 |
| 5 | [#10230 守护进程启动/重载堆栈溢出（P1）](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | 5 | S1 级工作流阻塞 Bug：ZeroCode 应用 Quickstart 配置时可导致 Tokio runtime worker 堆栈溢出。属于高风险稳定性问题 |

**诉求分析**：社区热点集中于三大主题——① 架构治理（RFC 决策流程、wire protocol 规范化）；② 测试基建可靠性（flaky 测试、并行运行时兼容性）；③ 网关 API 能力扩展（verbatim 发送、多路径统一）。

---

## 5. Bug 与稳定性

### 🔴 严重（P1 / S0-S1）

| Issue | 描述 | 状态 |
|---|---|---|
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | 守护进程启动/重载时 agent 初始化可导致堆栈溢出（S1 工作流阻塞） | 开放，待复现 |
| [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | bounded delegate 模式的 filesystem 操作解析到委托者工作区而非自身工作区（S2，但涉及安全沙箱） | 开放，已接受，P1，风险高 |
| [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | agent cron 任务间歇性将 `workspace_dir` 解析为 `/`（S0 数据丢失/安全风险） | ✅ 已关闭 |
| [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | cron 手动触发和历史读取存在 agent 重命名竞态（check-then-act） | 开放，已接受，P1 |
| [#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379) | ZeroClaw Desktop 无法取消正在进行的消息请求（S0 但 UI 层） | 开放，待复现（今日新开） |

### 🟡 中等（P2）

| Issue | 描述 | 状态 |
|---|---|---|
| [#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320) | `config set` 和 RPC `config/set` 持久化值跳过验证，可越界写入 | 开放，跟随 #10322 修复 |
| [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) | 弹性 provider 包装器的截断逻辑遮蔽了 OpenAI 兼容 provider 的上下文溢出恢复路径 | 开放 |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | 非英文 locale 下配置元数据仍显示为英文 | 开放，进行中 |

### 🟢 测试/可靠性

| Issue | 描述 | 状态 |
|---|---|---|
| [#10371](https://github.com/zeroclaw-labs/zeroclaw/issues/10371) | 并行测试下 `rpc::local` 并发启动测试 flaky（今日于 PR #10142 CI 中发现） | 开放 |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | 运行时写入可执行测试夹具加固任务 | 开放，进行中 |

### ✅ 今日已关闭

- **#9206**（cron workspace_dir 解析为 `/`，S0）：已关闭，应确认修复已验证
- **#9769**（日志持久化禁用时 withheld-capability 通知不可见）：已关闭
- **#10058**（ZeroCode 文件浏览器搜索模式导航失效）：已关闭
- **#8999**（小模型将 ZeroCode 流式用户轮次误认为日志/API 载荷）：已关闭

### 🔧 对应修复 PR（均待合入）

| PR | 修复目标 |
|---|---|
| [#10367](https://github.com/zeroclaw-labs/zeroclaw/pull/10367) | skills 安装符号链接竞态（安全） |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | cron agent 任务增加墙钟超时并释放锁（关联 #9206/#10324） |
| [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) | Lark 验证 token 比较改为常数时间（防止时序攻击） |
| [#9382](https://github.com/zeroclaw-labs/zeroclaw/pull/9382) | 空 `allowed_groups` 时 WhatsApp 群组准入策略修复 |
| [#9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504) | 上下文耗尽时显示终态通知（关联 #10329） |

---

## 6. 功能请求与路线图信号

### 新提出/持续活跃的 RFC

| RFC | 描述 | 状态 |
|---|---|---|
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 将 wire protocol 提升为 provider 构建和 onboarding 的一等公民 | 高风险，需维护者评审，13 条评论 |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | 网关 verbatim 频道发送（无需 agent 轮次） | 高风险，需维护者评审，7 条评论 |
| [#10346](https://github.com/zeroclaw-labs/zeroclaw/issues/10346) | 网关和频道未共享 heartbeat worker 的 MCP registry 缓存模式 — 每个 stdio MCP 服务器每次启动被连接 3 次 | 今日新开，需维护者评审 |

### 可能纳入下一版本的功能

| 功能 | 对应 PR/Issue | 分析 |
|---|---|---|
| ZeroCode 多会话窗格 + Agent 侧边栏 | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | XL 级功能，若合入将是 ZeroCode 的重大 UI 升级 |
| 日志条目数轮转 + 多段查询 | [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | L 级，新增配置键 `log_persistence_max_entries_per_segment` |
| Signal Note to Self 同步消息处理 | [#9326](https://github.com/zeroclaw-labs/zeroclaw/pull/9326) | 扩展 Signal 频道能力 |
| ZeroCode Option-Backspace 删除前一个词 | [#10078](https://github.com/zeroclaw-labs/zeroclaw/pull/10078) | 用户体验改进（macOS 惯例） |
| CI 增加 Windows/macOS 测试矩阵 | [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | 已接受、进行中，跨平台兼容性将成为下一个质量关口 |
| 反转 `zeroclaw-channels` → `zeroclaw-runtime` 依赖 | [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | 架构级重构，将 orchestrator 移入 runtime，已接受、进行中 |

---

## 7. 用户反馈摘要

- **网关 API 能力不足**（[#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)）：网关挂载了 47 个 `/api/*` 路径，但无一支持直接发送调用者提供的消息而无需 agent 轮次。用户需要更灵活的频道消息注入能力。
- **ZeroCode 与本地小模型交互体验差**（#8999，已关闭）：Ollama + llama3.2 下简单问候被解释为协议/日志数据，暴露了流式用户轮次对本地模型的适配问题。
- **配置写入缺乏验证**（[#10320](https://github.com/zeroclaw-labs/zeroclaw/issues/10320)）：用户通过 `config set` 可以持久化超出范围的值且 exit code 为 0，误导自动化脚本，属于开发者体验问题。
- **无法取消正在进行的消息**（[#10379](https://github.com/zeroclaw-labs/zeroclaw/issues/10379)）：ZeroClaw Desktop 的取消/停止按钮在 AI 处理期间为灰色不可点击。S0 级反馈（用户可能因此卡在长任务中）。
- **Delegation 沙箱边界不清**（[#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872)）：bounded 模式下 researcher 的 filesystem 操作解析到 executive_assistant 的 workspace，用户对沙箱隔离的有效性产生质疑。

---

## 8. 待处理积压

### ⚠️ 高风险 PR（安全/稳定性，等待合入）

| PR | 创建时间 | 等待天数 | 风险等级 |
|---|---|---|---|
| [#9110](https://github.com/zeroclaw-labs/zeroclaw/pull/9110) Lark 验证 token 常数时间比较 | 7/17 | 40 天 | 安全（时序攻击） |
| [#9382](https://github.com/zeroclaw-labs/zeroclaw/pull/9382) WhatsApp 空 allowed_groups 准入修复 | 7/26 | 31 天 | 安全 |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) 图片像素级校验 | 8/7 | 19 天 | 高（防止损坏图片导致请求失败） |
| [#10367](https://github.com/zeroclaw-labs/zeroclaw/pull/10367) skills 符号链接竞态修复 | 8/25 | 1 天 | 高（安全） |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) cron agent 任务墙钟超时 | 7/23 | 34 天 | 高（关联 S0 Bug #9206） |

### ⚠️ 长期未解决的重要 Issue

| Issue | 创建时间 | 等待天数 | 备注 |
|---|---|---|---|
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) 依赖反转重构 | 5/23 | 95 天 | 已接受、进行中，架构级 |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) CI 跨平台测试矩阵 | 6/10 | 77 天 | 已接受、进行中 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) wire protocol RFC | 6/27 | 60 天 | 高风险，需维护者评审 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer 决策队列 | 7/4 | 53 天 | 14 条评论，社区关注度高 |

### 维护者行动建议

1. **优先合入安全/稳定性 PR**：至少 4 条安全相关 PR 等待超过 19 天，其中 Lark 时序攻击修复已等待 40 天。
2. **处理 50 条 PR 合入积压**：创建合入批次评审（batch review），优先处理需要 `needs-maintainer-review` 的条目。
3. **响应 3 条新增 RFC**：今日新增 #10346（MCP registry 缓存）及 P1 级新 Bug #10379/#10371，需要维护者快速给出路径。
4. **关闭或推进决策队列**：#8692 作为维护者决策 Tracker 本身已等待 53 天，建议设定每周固定评审时间窗口。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*