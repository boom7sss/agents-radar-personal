# OpenClaw 生态日报 2026-08-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-11 02:08 UTC

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

# OpenClaw 项目动态日报 — 2026-08-11

## 一、今日速览

- 过去 24 小时共发生 **500 条 Issue 更新**（新开/活跃 438 条，关闭 62 条）与 **500 条 PR 更新**（待合并 330 条，合并/关闭 170 条），无新版本发布；整体处于**极高活跃度**状态。
- 今日 Bug 主题集中在三块：**消息重复投递**（Telegram/Feishu/Discord 多路径重复回复）、**OAuth 刷新超时/假死**（Codex、anthropic claude-cli、OpenAI 继承认证）、**session 状态同步与消息静默丢失**（#121058 以 48 条评论成为今日最热 Issue）。
- 积极信号：Telegram 重复回复（#86519、#96242）与 Gateway HTTP 拒连（#109145）等 P1 问题已关闭；Ollama max thinking 支持 PR（#121074）已合并。
- 隐忧：Issue 关闭率仅约 **12.4%**（62/500），积压继续增长；#121058 在 #116277 关闭后仍复现，说明消息丢失类问题尚未根治。
- 待合并 PR 达 330 条，其中认证边界（#93952、#94719、#112932）与 SQLite 稳定性（#120595）等高风险修复等待审查，建议维护者优先处理。

---

## 二、版本发布

今日无新版本发布（0 releases）。上轮版本为 2026.7.x 系列，当前处于 beta 收敛阶段。

---

## 三、项目进展

24 小时内共 **170 个 PR 被合并/关闭**。在展示的高关注 PR 中，**#121074（Ollama max thinking 支持）已合并**，为 GLM 5.2、DeepSeek V4 等云模型补上 `off/low/medium/high/max` 完整推理档位，`max` 不再被静默降级为 `high`。

尚在队列中的重点 PR 描绘出近期路线图：

| 方向 | PR | 说明 |
|---|---|---|
| **系统级 QR 设置链路** | [#119341](https://github.com/openclaw/openclaw/pull/119341) / [#119342](https://github.com/openclaw/openclaw/pull/119342) / [#119344](https://github.com/openclaw/openclaw/pull/119344) / [#114173](https://github.com/openclaw/openclaw/pull/114173) / [#118169](https://github.com/openclaw/openclaw/pull/118169) | 打通 Gateway→system-agent→Control UI 的 QR 契约，Signal 账号可通过 setup QR 直接关联 |
| **认证稳定性** | [#93952](https://github.com/openclaw/openclaw/pull/93952)（有界 auth refresh）、[#112932](https://github.com/openclaw/openclaw/pull/112932)（仅重灌 tombstoned OAuth）、[#94719](https://github.com/openclaw/openclaw/pull/94719)（运行时读取 claudeCodeVersion） | 修复 OAuth 挂起导致整条 lane 假死、陈旧 UA 导致 bearer 失败 |
| **基础设施** | [#120595](https://github.com/openclaw/openclaw/pull/120595) | Docker Desktop/OrbStack 上 virtiofs 后端 SQLite 改用 rollback journal，根治 `database disk image is malformed` 崩溃循环 |
| **消息不丢失** | [#120419](https://github.com/openclaw/openclaw/pull/120419) | pre-adoption ingress 卡住时重新入队而非静默丢弃 |
| **进程管理** | [#121108](https://github.com/openclaw/openclaw/pull/121108) | 枚举并终止 attach 进程的子孙 PID，修复退出残留 |
| **UI/UX** | [#121734](https://github.com/openclaw/openclaw/pull/121734)（chat header 展示项目/图标）、[#121792](https://github.com/openclaw/openclaw/pull/121792)（热 session 切换 266ms→更快） | 提升 Control UI 可用性 |
| **新功能** | [#121586](https://github.com/openclaw/openclaw/pull/121586)（Chrome 扩展零点击引导）、[#121459](https://github.com/openclaw/openclaw/pull/121459)（受限浏览器可申请管理员权限） | 降低上手门槛 |

此外，代码健康度重构持续推进：#121566（拆分 2225 行 Claude live-session 模块）、#121366（统一 coercion helpers）、#121536（移除 Sqlite 命名残留）、#121544、#121716。

---

## 四、社区热点

今日讨论最集中的 Issue（按评论数排序）：

1. **[#121058 Silent reply failures still recurring（48 评论）](https://github.com/openclaw/openclaw/issues/121058)** — 新开 2 天即登顶：`#116277` 关闭后静默回复失败仍持续复现，监控 cron 在 issue 关闭后继续记录新发生（含 8/9 当天），且**没有 queued reply payload**。社区诉求集中在：修复未被真正验证、失败完全无观测性。

2. **[#7707 Memory Trust Tagging by Source（34 评论）](https://github.com/openclaw/openclaw/issues/7707)** — 已积压 6 个月的老 feature：按来源（用户命令/网页抓取/第三方 skill）给记忆条目打信任标签，防止恶意指令通过不可信内容污染记忆。带 `needs-product-decision`、`needs-security-review`，社区持续关注。

3. **[#48788 centralized filename encoding utility（20 评论）](https://github.com/openclaw/openclaw/issues/48788)** — 飞书中文文件名 UTF-8/Latin-1 误读已修，但社区要求架构级方案统一处理 Shift-JIS/EUC-KR/GB18030 等多编码，覆盖所有 channel adapter。

4. **[#22438 Tiered bootstrap file loading（18 评论）](https://github.com/openclaw/openclaw/issues/22438)** — 分层加载 bootstrap 文件以节省 token，已有 linked PR，社区讨论度高。

5. **[#86519 Telegram 重复回复 2-10 次（15 评论，已关闭）](https://github.com/openclaw/openclaw/issues/86519)** — 5.20 更新后的回归，5.22 降为 2-3 次仍未根治；今日关闭说明已有修复落地。

6. **[#42475 Per-agent cost budget（14 评论）](https://github.com/openclaw/openclaw/issues/42475)** — Gateway 层按 agent 实施日/月费用上限，防止 runaway spend，已有 linked PR。

**热点诉求分析**：社区当前最强烈的三个信号是——① **消息可靠性**（重复/丢失/静默失败，多个 P1 聚集）；② **认证链路健壮性**（OAuth 刷新成为各类故障的公共根因）；③ **治理能力**（记忆安全、成本配额、备份排除规则），反映出 OpenClaw 用户正从个人玩具向生产级部署迁移。

---

## 五、Bug 与稳定性

### 🔴 高严重度（P1 / 数据丢失 / 主线程阻塞）

| Issue | 问题 | 证据 | Fix PR |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败在 #116277 关闭后仍复现，无 queued payload | 48 评论，监控 cron 持续报警 | ❌ 无 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | transcript reconcile 在持续写入下 livelock，同步重建阻塞 Node 主线程数十秒，**所有 channel 停摆** | source-repro，13 评论 | ❌ 无 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | `write` 工具无 append 模式，隔离 cron 会话**覆写共享文件**（如 `memory/YYYY-MM-DD.md`） | 12 评论，1👍 | 有 linked PR |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息写入 transcript 但不触发/不投递回复 | 2👍，9 评论 | ❌ 无 |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | `anthropic:claude-cli` OAuth 刷新在 #73682 修复后依然死路，**全部 agent 流量** failover | 2👍，7 评论 | ❌ 无 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth probe 成功但刷新耗时 >10s，cron/heartbeat 10s 超时失败 | 2👍，9 评论 | ❌ 无 |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动 1-vCPU 下从 beta.1 到 beta.7 **回归 ~2.5 倍** | 8 评论，稳定复现 | ❌ 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未被 reap，僵尸进程累积导致运行时劣化 | 7 评论 | [#121108](https://github.com/openclaw/openclaw/pull/121108)（相关） |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A `sessions_send` 目标 agent 可回调，导致**重复消息** | 13 评论，source-repro | 有 linked PR |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后 `write`/`exec` 参数被**静默丢弃**（空 arguments） | 2👍，11 评论 | ❌ 无 |

### 🟡 中严重度（P2 / 特定场景）

- [#119796](https://github.com/openclaw/openclaw/issues/119796)：Windows 下 vitest teardown EBUSY（agent SQLite 句柄未释放）
- [#120735](https://github.com/openclaw/openclaw/issues/120735)：Telegram 贴纸以原始 file ref 到达，未落盘、无描述，agent 完全不可见
- [#82662](https://github.com/openclaw/openclaw/issues/82662)：隔离 cron `agentTurn` 报 `setup timed out before runner start`，6 个 fallback 全灭
- [#57356](https://github.com/openclaw/openclaw/issues/57256)：`openclaw status --deep` 误报 mem0 memory unavailable（实际 gateway 工作正常）
- [#45494](https://github.com/openclaw/openclaw/issues/45494)：LLM 持续 500 时 cron 不快速失败，耗尽 180s 超时窗口
- [#50490](https://github.com/openclaw/openclaw/issues/50490)：飞书群 `/activation mention` 切换无效，仍响应所有消息

### ✅ 今日闭环

- [#86519](https://github.com/openclaw/openclaw/issues/86519)（P1，Telegram 重复回复 2-10x）已关闭
- [#96242](https://github.com/openclaw/openclaw/issues/96242)（P1，三条独立路径致 Telegram 重复消息）已关闭
- [#109145](https://github.com/openclaw/openclaw/issues/109145)（P1，Gateway HTTP listen 但不 accept 连接）已关闭
- [#114690](https://github.com/openclaw/openclaw/issues/114690)（Discord 在 Codex 原生压缩后同轮二次发送）已关闭
- [#90789](https://github.com/openclaw/openclaw/issues/90789)（claude-cli 合成 `"No response requested."` 致 Telegram 全静默）已关闭

---

## 六、功能请求与路线图信号

### 社区呼声最高（按 👍 + 评论综合）

- **[#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)**（34 评论，P2）— 记忆防投毒；已带安全审查标签，或为下一记忆安全里程碑
- **[#27445 `announceTarget` option](https://github.com/openclaw/openclaw/issues/27445)**（5👍，12 评论，P1，linked PR）— 子代理完成通知改走"用户消息"路由到父会话，支持多步编排，**很可能进入下一版本**
- **[#28300 主题定制系统](https://github.com/openclaw/openclaw/issues/28300)**（5👍，6 评论，P3）— Control UI 预设主题 + 自定义主题工作室
- **[#33413 Slack 工具级进度展示](https://github.com/openclaw/openclaw/issues/33413)**（3👍，8 评论）— 将静态 "is typing..." 改为当前运行工具名
- **[#38568 上下文占用率注入 system prompt](https://github.com/openclaw/openclaw/issues/38568)**（2👍，6 评论）— 让 agent 感知 `context=49%`，实现自我节流

### 治理/生产化需求（与 PR 呼应）

- **成本管控**：[#42475](https://github.com/openclaw/openclaw/issues/42475) per-agent 日/月预算，Gateway 层强制 — linked PR 已开
- **备份排除**：[#40786](https://github.com/openclaw/openclaw/issues/40786) 类 .gitignore 排除规则，避免备份携带 node_modules 与 `.env` — linked PR 已开
- **上下文控制**：[#22438](https://github.com/openclaw/openclaw/issues/22438) bootstrap 分层加载以省 token — linked PR 已开
- **会话快照**：[#13700](https://github.com/openclaw/openclaw/issues/13700) `/session save|load` 检查点 — 7 评论，无 PR
- **记忆基建**：[#16670](https://github.com/openclaw/openclaw/issues/16670) onboarding 强制配置 Memory/Embedding，否则 `memory_search` 静默不可用；[#48993](https://github.com/openclaw/openclaw/issues/42648) 记忆写入流水线（分类/去重/合并/冲突处理）

### 已进入 PR 队列、预计随下版本发布

- **Ollama max thinking**（#121074 已合并）
- **零点击 Chrome 扩展引导**（#121586）
- **Signal QR 关联账号**（#118169/#119344）
- **受限浏览器申请管理员权限**（#121459）
- **memory-wiki `wiki_open_items` 工具**（#105550）— 暴露未解决问题与矛盾列表
- **virtiofs SQLite rollback journal**（#120595）— Docker Desktop/OrbStack 用户 waitlist 很长

---

## 七、用户反馈摘要

**最痛的场景：**
- **重复消息制造噪音**：Telegram 用户在 5.20 更新后收到 2-10x 重复回复（#86519）；Feishu 在限流降级后出现两条最终回复（#49381）；A2A 回调导致重复（#39476）。用户原话痛点："Upgrading reduced severity but did not fully fix"——说明部分修复只减轻未根治。
- **静默失败不可观测**：#121058 的监控 cron 在 issue 关闭后仍持续报警；#90789 中 `"No response requested."` 占位让整轮 Telegram 无声无息。用户需要的是**失败可发现、payload 可追踪**。
- **自托管被锁在门外**：#92516 指出容器化部署无法使用外部化 channel 插件（msteams 等），`openKeyedStore` 仅信任内置插件且无官方途径信任自托管 channel——"Providers work, but channel plugins do not"。
- **OAuth 成为公共瓶颈**：#89278 中 probe 成功但 cron 超时；#98702 继承的 OpenAI OAuth 在主 agent 可用、子 agent 被拒；#83598 修复后仍死路。用户对"部分成功"的认证状态尤其困惑。
- **长会话参数丢失**：#53408 在 15+ 轮后 `write`/`exec` 空参数；#114690 在 compaction 后同轮二次发送。用户对工具调用在长上下文中的可靠性信心下降。

**积极的反馈信号：**
- #121074（Ollama max thinking）合并且覆盖 GLM 5.2/DeepSeek V4，云模型用户诉求得到满足。
- 多个用户给重复消息修复的关闭评论点赞（#96242 2👍、#86519 1👍），说明闭环速度被认可。

---

## 八、待处理积压（提醒维护者关注）

### 高优 Issue（长期未关闭 / 今日最热）

| Issue | 创建时间 | 积压 | 状态 |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) 静默回复失败复现 | 2026-08-09 | 2 天即 48 评论 | ❌ 无 fix PR，**建议立即响应** |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 2026-02-03 | **6.5 个月** | 需 product decision + security review |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) 统一文件名编码工具 | 2026-03-17 | ~5 个月 | 20 评论，无 fix PR，PR #48578 仅覆盖 UTF-8 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) 分层 bootstrap 加载 | 2026-02-21 | ~6 个月 | linked PR 已开 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) agent 成本预算 | 2026-03-10 | ~5 个月 | linked PR 已开 |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) 子代理按 spawn 限制工具 | 2026-02-12 | ~6 个月 | 安全相关，需 security review |
| [#14747](https://github.com/openclaw/openclaw/issues/14747) lane 等待诊断阈值可配置 | 2026-02-12 | ~6 个月 | 硬编码 2s 阈值对 60-120s cron 任务误报 |

### 卡住的 PR（等待 proof / 作者响应 / 维护者审查）

- [#94719](https://github.com/openclaw/openclaw/pull/94719)（P1，anthropic UA 修复）— 自 6/19 起标记 `needs-real-behavior-proof`
- [#93952](https://github.com/openclaw/openclaw/pull/93952)（P1，auth refresh 有界化）— 6/17 起 `needs proof`，直接影响 #89278/#83598 类故障
- [#105550](https://github.com/openclaw/openclaw/pull/105550)（memory-wiki 新工具）— 7/12 起 `needs proof`
- [#112932](https://github.com/openclaw/openclaw/pull/112932)（P1，tombstoned OAuth 重灌）— `waiting on author`

### 健康度小结

项目活跃度极高，但**认证刷新**与**消息投递**两大子系统持续产出 P1 回归，建议成立专项治理；Issue 积压（关闭率 12.4%）与 PR 待审（330 条）双重承压，其中 6 条 P1 修复 PR 卡在 `needs proof` 而非技术阻塞，值得优先分配 reviewer 资源。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告（2026-08-11）

## 一、生态全景

数据窗口内，13 个追踪项目中 11 个有实际动态，整体处于**极高活跃期**：OpenClaw 以单日 500 条 Issue + 500 条 PR 的体量一骑绝尘，IronClaw、ZeroClaw、CoPaw、Hermes Agent 形成第二梯队。各项目不约而同把资源投向**消息可靠性、认证健壮性、安全边界与成本治理**，说明生态正从“能跑通”转向“能生产”。但多数项目 Issue 消化速度追不上新增速度（OpenClaw 关闭率 12.4%、ZeroClaw 仅 2%），**积压问题是当前生态共同瓶颈**。

## 二、各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 健康度评估 |
|---|---:|---:|---|---|
| **OpenClaw** | 500（活跃 438 / 关闭 62） | 500（待合并 330 / 合并关闭 170） | 0 | 极高活跃；关闭率 12.4%、330 条待审 PR，认证与消息子系统 P1 聚集 |
| **IronClaw** | 50（活跃 25 / 关闭 25） | 50（待合并 33 / 合并关闭 17） | v1.1.1-rc.1 | 高产出；Issue 关闭率 50%，v1.1.0 收尾；33 条 PR 积压、客户 Bug #6257 搁置 23 天 |
| **ZeroClaw** | 50（活跃 49 / 关闭 1） | 50（待合并 48 / 合并关闭 2） | 0 | 高活跃但失衡；关闭率仅 2%，2 条 S0 + 10+ 条 P1 安全项无修复 PR |
| **CoPaw** | 39（活跃 33 / 关闭 6） | 50（待合并 33 / 合并关闭 17） | 0 | v2.1.0 发布前密集修复；Bug 响应快，但流式 UI、IME 等问题仍集中 |
| **Hermes Agent** | 50（活跃 44 / 关闭 6） | 50（待合并 40 / 合并关闭 10） | 0 | 高活跃；Windows 启动回归为最大风险，安全类积压增加 |
| **NanoBot** | 4（新开 1 / 关闭 3） | 24（待合并 14 / 合并关闭 10） | 0 | 健康；Issue 关闭率 75%，WebUI 重构与 MCP OAuth 落地 |
| **LobsterAI** | 1（自动关闭 1） | 34（待合并 14 / 合并关闭 20） | 0 | 健康；PR 合并率 59%，cowork 体验与网关稳定性双线推进 |
| **NanoClaw** | 3 | 20（待合并 10 / 合并关闭 10） | 0 | 良好；社区贡献活跃，消息去重与配对码安全响应快 |
| **PicoClaw** | 4（活跃 2 / 关闭 2） | 9（待合并 2 / 合并关闭 7） | 0 | 中等偏上；7/9 合并率好，安全加固落地，2 个 PR 待审查 |
| **Moltis** | 3（新开 3） | 2（待合并 2） | 0 | 中等偏低；PR 合并慢，apple-container 后端问题集中 |
| **NullClaw** | 1（关闭 1） | 1（待合并 1） | 0 | 低活跃但稳定；核心依赖 PR 近 2 个月未合并 |
| **TinyClaw** | 0 | 0 | 0 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 无活动 |

## 三、OpenClaw 在生态中的定位

- **社区规模断层第一**：单日 1000 条 Issue/PR 更新，约为 IronClaw、Hermes、ZeroClaw 等第二梯队的 10 倍；仅待合并 PR（330 条）就超过其他项目当日 PR 总量。
- **技术路线**：以 Gateway + system-agent + Control UI 为核心骨架，强调多平台渠道（Telegram/Feishu/Discord/Signal）、多 provider 认证继承（Codex/Claude/OpenAI）、SQLite 本地存储与会话一致性。当前主要矛盾是**认证刷新与消息投递**两个子系统的 P1 回归，而非功能缺失。
- **生态角色**：LobsterAI 直接维护其网关稳定性，NanoClaw/PicoClaw/ZeroClaw 在消息去重、认证安全、远程执行边界上做同类加固，命名与议题高度映射 OpenClaw。**OpenClaw 事实上是该生态的“主干参照系”**。
- **优势**：渠道覆盖最广、社区反馈循环最快、路线图最清晰（QR 设置链、有界 OAuth 刷新、消息不丢失、virtiofs SQLite 修复）。
- **风险**：12.4% 的 Issue 关闭率与 330 条待审 PR 说明审查合并是瓶颈，长期可能拖慢生态迭代并流失贡献者。

## 四、共同关注的技术方向

### 1. 消息可靠性与失败可观测性
涉及项目最多、优先级最高，具体体现为：

- **OpenClaw**：Telegram/Feishu 重复投递、静默回复失败（#121058 两天 48 评论）、A2A 回调重复消息。
- **NanoClaw**：平台复用消息 ID 导致入站消息被静默丢弃（#3226）、定时任务报错不可见（#3223）。
- **IronClaw**：loop-host 重放去重（#7336）、投递成功但无 vendor ref 被误报为失败（#7473/#7476）。
- **NanoBot**：推理阶段随机重复同一短语（#5327）。
- **PicoClaw**：超大 fence header 导致 `SplitMessage` 无限挂起（#3295）。

**核心诉求**：消息不重复、不丢失、失败可追踪，需要投递确认、幂等去重和 payload 级可观测性。

### 2. 认证健壮性与凭据安全

- **OpenClaw**：OAuth 刷新超时/假死导致整条 lane 阻塞（#89278、#83598）；认证边界修复 PR 积压（#93952、#94719、#112932）。
- **Hermes Agent**：桌面子进程继承默认 profile 凭据（#68367）、环境清理多个绕过点（#77463）、WhatsApp bridge 泄密（CVSS 8.2）。
- **NanoClaw / PicoClaw**：Telegram 配对码使用 `Math.random()`、存储权限过宽（#3225/#3229）。
- **ZeroClaw**：未认证 `POST /api/pair`（#9389）、LINE 群消息绕过 allowlist（#9392）。

**核心诉求**：认证流程不能成为单点故障；凭据不得跨进程/会话继承；默认拒绝而非默认放行。

### 3. 记忆、上下文与成本治理

- **OpenClaw**：Memory Trust Tagging 防投毒（#7707）、per-agent 成本预算（#42475）、bootstrap 分层加载省 token（#22438）。
- **NanoBot**：结构化 token 用量接口（#5299）、Dream 记忆整理 23 分钟耗 10M+ token（#5324）。
- **ZeroClaw**：knowledge graph 无 per-agent 归属，任意 agent 可读写他人知识（S0 #9647）。
- **CoPaw**：ReMe 记忆系统升级，reranker、embedding 热更新持续推进。
- **Hermes Agent**：1M 上下文压缩阈值修正（#83523）。

**核心诉求**：记忆安全隔离、上下文可管理、成本可见可限。

### 4. 供应链与沙箱安全

- **ZeroClaw**：插件 wasi:http 出站无目标策略（#9395）、git `-C`/`--git-dir` 绕过审批门（#9627）、RUSTSEC 依赖处理。
- **Hermes Agent**：技能安装固定 commit SHA + fail-closed 校验（#83597）。
- **PicoClaw**：远程 exec 默认禁用，启用后逐次批准（#3297）。
- **IronClaw**：vendor 审查 pin 缺失、架构审计批量关闭。

**核心诉求**：默认禁止、供应链可复现、沙箱边界可审计。

### 5. 多实例互通与多租户隔离

- **NullClaw**：用户自建 `a2a_call` 工具调用远程 agent（#700）。
- **Hermes Agent**：多租户方案已由社区 fork 生产验证数月（#34352）。
- **OpenClaw**：Signal 账号 QR 关联设置链路、受限浏览器申请管理员权限。

**核心诉求**：跨实例互操作协议、profile/租户级数据隔离。

### 6. WebUI/桌面端“诚实呈现”

- **CoPaw**：流式输出直到结束才一次性显示（#6820）、助手消息耗时显示与实际严重不符（#6826）、无限 CSS 动画导致 20% CPU（#6828）。
- **Hermes Agent**：黑窗口无日志，已通过 renderer 崩溃诊断修复（#83567）。
- **NanoBot**：WebUI 认证 WebSocket 化、事件投影重构。
- **OpenClaw**：Control UI 热会话切换性能优化。

**核心诉求**：实时状态可见、进度显示真实、崩溃可观测。

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术特征 |
|---|---|---|---|
| **OpenClaw** | 全能型生产级个人 AI 网关 | 重度自托管个人/小团队 | Gateway + system-agent + Control UI；多通道、多 provider、SQLite 本地存储 |
| **IronClaw** | 企业/团队级 AI 工作区 | 企业客户、NEAR 生态 | 统一 ChannelAdapter、Telegram MTProto 关联设备、logprobs 可观测、Doc-Truth 文档校验 |
| **ZeroClaw** | 安全审计驱动的 agent 平台 | 安全敏感部署 | ZeroCode/SOP/Web dashboard；大量 P1 安全审计项，RFC 治理流程重构中 |
| **CoPaw** | 桌面优先的 AI 助手 + 记忆系统 | 中文桌面用户 | Console UI、ReMe 记忆、Creator 插件；v2.1.0 发布前密集修复 |
| **Hermes Agent** | 多 profile 桌面 + 技能系统 | 桌面重度用户/团队 | Desktop + TUI/CLI；技能锁 SHA、turn-lease 租约、多租户需求浮现 |
| **NanoBot** | 轻量 WebUI + MCP 生态 | 开发者 | 事件投影、认证 WebSocket 化、MCP SDK v2、OrcaRouter |
| **NanoClaw / PicoClaw** | 轻量/嵌入式 Claw 变体 | DIY、Raspberry Pi、特定渠道用户 | 简化架构；Telegram 富消息、配对码加固、远程 exec 默认禁用 |
| **LobsterAI** | 协作场景 + OpenClaw 兼容层 | 协作团队 | cowork 交互增强；Vite/React 前端 + OpenClaw 网关稳定性修复 |
| **Moltis** | 沙箱化浏览器自动化 | 需要隔离运行的 agent 用户 | CDP screencast 浏览器 UI；apple-container 后端仍不稳定 |
| **NullClaw** | 极简 A2A 互操作实例 | 实验用户 | 已实现 A2A 服务端，缺少客户端调用能力 |

## 六、社区热度与成熟度

### 第一梯队：日更新 ≥ 50 Issue/PR

| 项目 | 阶段特征 |
|---|---|
| **IronClaw** | **质量巩固阶段**：Issue 关闭率 50%，v1.1.0 史诗批量关闭，发布 v1.1.1-rc.1，治理审计落地快 |
| **OpenClaw** | **快速迭代 + 质量追赶**：功能推进快，但关闭率 12.4%，认证/消息 P1 反复，330 条 PR 积压 |
| **CoPaw** | **发布前密集修复**：v2.1.0 文档已备，Bug 响应快，但严重问题仍多 |
| **Hermes Agent** | **快速迭代 + 回归应急**：Windows 启动回归数小时内出修复 PR，但安全积压渐增 |
| **ZeroClaw** | **安全加固初期**：发现问题能力极强，消化能力极弱，关闭率 2%，处于失衡状态 |

### 第二梯队：日更新 10-34 PR

- **NanoBot、LobsterAI、NanoClaw、PicoClaw**
- 共同特征：**质量巩固 + 架构整理**。NanoBot Issue 关闭率 75%，LobsterAI PR 合并率 59%，PicoClaw 集中清理 stale PR。

### 第三梯队：低活跃维护期

- **Moltis、NullClaw**
- 合并节奏慢，核心 PR 长期悬置（Moltis #531 已 133 天、NullClaw #956 近 2 个月），需要维护者明确态度。

### 无活动

- **TinyClaw、ZeptoClaw**

## 七、值得关注的趋势信号

1. **消息投递已从“功能”升级为“可靠性工程”**
   重复回复、静默丢失、失败不可观测是跨项目头号痛点。开发者应在设计之初就内置投递确认、幂等去重、失败 payload 追踪，而不是事后打补丁。

2. **认证和凭据边界是最大单点故障与安全短板**
   OAuth 刷新超时、子进程凭据继承、弱随机配对码、未认证端点，说明“认证链路”的健壮性与“凭据默认不跨边界”已成为生产级 agent 的准入门槛。

3. **成本可观测性和配额治理成为刚需**
   NanoBot 单次异常消耗 10M+ token、OpenClaw 提出 per-agent 预算、Hermes 调整压缩阈值——**当 agent 开始长时间自主运行时，成本失控比功能缺陷更致命**。

4. **记忆安全与上下文治理是下一波竞争焦点**
   记忆投毒标签、knowledge graph 隔离、记忆写入流水线、reranker 与 embedding 热更新，都在指向同一目标：**让 agent 的记忆可溯源、可隔离、可干预**。

5. **“诚实呈现”正在成为 UI 信任基础**
   用户对“实际思考 2 分钟但界面显示几秒”“流式输出最后一次性出现”“滚动被自动滚动覆盖”的容忍度极低。实时、真实、可中断的状态展示，将直接影响用户对 agent 可靠性的判断。

6. **Agent 安全正从“外部攻击面”转向“供应链与工具调用边界”**
   技能锁 SHA、远程 exec 默认禁用、插件出站策略、git 绕过审批门——**Agent 能执行越强的操作，供应链与沙箱治理就越关键**。这是从个人玩具走向企业部署的必经之路。

7. **多实例互通与多租户是尚未满足的架构缺口**
   用户已开始自建 A2A 客户端、fork 多租户实现并运行数月。生态正从“单实例 agent”向“相互调用的 agent 网络”演进，抢先提供标准互操作层者将获得下一阶段红利。

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 — 2026-08-11

---

## 1. 今日速览

过去 24 小时项目活跃度较高，共 4 条 Issue 更新（1 新开 / 3 关闭）与 24 条 PR 更新（14 条待合并 / 10 条已合并或关闭），无新版本发布。今日工作重心明显集中在 **WebUI 架构重构**（事件投影、设置服务域拆分、认证 WebSocket 化）与 **稳定性修复**（无意义编辑限制、Docker 能力保留、会话覆盖防护）。值得注意的是，MCP OAuth 网页授权功能今日已有关闭的 PR（#5316），与用户此前提交的 Issue #5297 形成呼应，说明该需求已被快速接纳并实现。整体项目健康度良好，修复与重构节奏紧凑，但存在部分长期未合并 PR 的积压问题（详见第 8 节）。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共合并/关闭 10 个 PR，主要集中在以下几个方向：

### 🎨 WebUI 重构与体验优化
- **[#5315] fix(webui): improve UX recovery and empty states** — 保留工作区聊天创建失败时的首个提示与拒绝路径，支持键盘聚焦恢复与挂起交互锁定；同时优化认证挑战为局部密码标签 + 可见性切换 + 连接操作，减少用户摩擦。
- **[#5317] fix(webui): move mutations to authenticated WebSocket requests** — 将 WebUI 状态变更操作从 GET/query-string/custom-header 迁移至经认证的 WebSocket 请求/响应帧，废弃不安全路径，提升安全性（P1）。
- **[#5318] refactor(webui): extract deterministic event projection helpers** — 抽离 `useNanobotStream` 中的确定性折叠函数，使推理完成时间成为显式输入而非在投影辅助函数内读时钟，提升可测试性与可预测性。
- **[#5321] refactor(webui): make gateway own settings services** — 引入网关持有的设置服务，明确配置路径与序列化原子读改写操作；将 WebUI OAuth 流程状态迁移至网关作用域注册表，并通过网关组合注入依赖。
- **[#5319] refactor(agent): replace reflective runtime state access** — 使用显式 `RuntimeControl` 协议与 `AgentRuntimeControl` 适配器替换 `MyTool` 的反射式循环状态包装，暴露精确的允许列表快照，并脱敏凭据字段（安全相关）。

### 🔌 MCP 能力扩展
- **[#5316] feat(mcp): add browser OAuth for remote servers** — 为远程 Streamable HTTP 与 SSE MCP 服务器添加基于浏览器的 OAuth 认证（官方 MCP SDK），内置 Xmind、Notion、Linear 一键预设，并支持自定义服务器选择 None/OAuth/Headers 认证方式。

### 🐛 修复与稳定性
- **[#5325] fix(files): reject no-op edits** — 拒绝 `old_text` 与 `new_text` 完全一致的 `edit_file` 调用，返回明确错误信息而非报告成功，并补充回归测试（关联 Issue #5324）。
- **[#5310] fix(weixin): honor forced QR login** — 修复强制微信登录时未清空已配置/持久化凭据的问题，现在 CLI 与 WebUI 均可强制进行全新 QR 登录流程。

### 🧰 其他
- **[#5320] fix(docker): restore capabilities for privilege drop** — 保留 `cap_drop: ALL` 的同时恢复 root 引导路径所需的 3 个 capabilities，并在 CI 中增加隔离临时 home 目录检测（P1）。

**项目整体评估**：项目正在向更模块化、更安全的架构演进，WebUI 事件流与设置管理逐步走向规范化；MCP OAuth 浏览器授权的落地直接回应了社区呼声；同时基础设施（Docker、认证通道）的加固提升了项目整体可靠性。

---

## 4. 社区热点

### 今日讨论最活跃 Issue： #5297 — MCP OAuth 网页授权功能请求（3 条评论，已关闭）
- **链接**：[HKUDS/nanobot Issue #5297](https://github.com/HKUDS/nanobot/issues/5297)
- **诉求分析**：用户需要为需要网页授权的 MCP 服务（如 Xmind API）提供配置支持，建议通过 gateway 获取授权信息，并支持远程 IP/域名访问场景。该请求与今日合并的 PR #5316（browser OAuth for remote servers）高度契合，说明社区需求已被快速响应并纳入实现。

### 值得关注的 Issue： #5324 — Dream 记忆整理无限循环 Bug（2 条评论，已关闭）
- **链接**：[HKUDS/nanobot Issue #5324](https://github.com/HKUDS/nanobot/issues/5324)
- **诉求分析**：用户报告 Dream 记忆整理任务异常运行 23 分钟，消耗超过 10M token，对成本影响敏感。该问题已由 PR #5325（拒绝无意义编辑）修复，展示了社区对稳定性问题的高敏感度和快速修复能力。

### PR 侧关注点
虽然 PR 评论数为 `undefined`（平台未展示评论数据），但从变更内容与优先级标签看，以下 PR 获得了较高关注：
- **[#5323] refactor(webui): split settings backend by domain**（标记 conflict，需解决冲突）
- **[#5179] Migrate MCP integration to SDK v2 with legacy compatibility**（标记 conflict，P1）
- **[#5257] fix(agent): bound sustained-goal continuation**（标记 conflict，P2）

这些涉及架构调整的 PR 可能需要维护者协调冲突与合并策略。

---

## 5. Bug 与稳定性

### 🔴 高严重度

- **Issue #5300 — MCP 连接失败未隔离 + anyio cancel scope 跨任务崩溃**（Closed）
  - **链接**：[Issue #5300](https://github.com/HKUDS/nanobot/issues/5300)
  - **现象**：远程 MCP 返回 HTTP 530 时，MCP 客户端异常处理路径触发 `RuntimeError: Attempted to exit cancel scope in a different task than it was entered in`，导致网关进程崩溃/卡死、残留任务泄漏、CPU 飙升。
  - **状态**：今日该 Issue 已关闭，但暂无明确关联修复 PR，建议维护者确认具体修复版本或回归验证方式。

- **Issue #5324 — Dream 记忆整理在 edit_file 接受无意义编辑时陷入无限循环**（Closed）
  - **链接**：[Issue #5324](https://github.com/HKUDS/nanobot/issues/5324)
  - **现象**：`edit_file` 接受 identical `old_text`/`new_text` 调用，导致 Dream 记忆整理任务无限循环，23 分钟消耗 10M+ token。
  - **状态**：✅ 已由 [PR #5325](https://github.com/HKUDS/nanobot/pull/5325) 修复，该 PR 今日已合并，拒绝 no-op 编辑并补充回归测试。

### 🟡 中严重度

- **Issue #5327 — Nanobot 推理过程中重复输出相同消息**（Open）
  - **链接**：[Issue #5327](https://github.com/HKUDS/nanobot/issues/5327)
  - **现象**：模型在推理阶段随机重复输出同一短语（如 "Good points, let me investigate the issue"），不具确定性。
  - **状态**：新开 Bug，无对应修复 PR，可能涉及推理循环逻辑或采样参数问题，需进一步排查。

### 🟢 防护性修复（PR 侧）

- **[PR #5271] fix(session): prevent stale background task saves from overwriting session data**（Open，P0）
  - 防止 `maybe_generate_webui_title` 等后台任务在 `/new` 会话切换后持旧 `Session` 引用覆盖新会话数据。目前待合并，属高优先级预防性修复。

- **[PR #5329] fix(exec): guard bare and named-user home paths**（Open）
  - 修复 `ExecTool` 路径提取中未识别裸 `~` 与 `~user` 等 shell 扩展形式导致的越界问题，属安全性加固。

---

## 6. 功能请求与路线图信号

### 已由 PR 承接的功能
- **MCP 浏览器 OAuth 授权**：[Issue #5297](https://github.com/HKUDS/nanobot/issues/5297) 请求的网页授权功能已由 [PR #5316](https://github.com/HKUDS/nanobot/pull/5316) 实现（今日合并），说明该功能已纳入近期路线图。
- **结构化 token 用量记录**：[PR #5299](https://github.com/HKUDS/nanobot/pull/5299)（Open）新增 `GET /api/settings/usage/records?day=YYYY-MM-DD` 接口，可诊断 token 消耗明细，回应用户对成本透明化的潜在诉求。
- **Agent Plugins 与 CLI Apps 集成**：[PR #5288](https://github.com/HKUDS/nanobot/pull/5288) 推动插件化边界标准化，使 nanobot 保持通用宿主定位，属于长期架构演进信号。
- **OrcaRouter 网关提供商**：[PR #5328](https://github.com/HKUDS/nanobot/pull/5328) 新增 OpenAI 兼容路由网关支持，丰富多模型接入选项，便于用户通过单一端点访问 150+ 模型。

### 路线图信号
- 今日多个 WebUI 重构 PR（#5315、#5317、#5318、#5321、#5323）表明项目正着力于 WebUI 的模块化与安全模型升级，后续版本可能强化多用户、多会话管理能力。
- MCP 集成向 SDK v2 的迁移（[PR #5179](https://github.com/HKUDS/nanobot/pull/5179)）仍未合并，若落地将改善 MCP 兼容性与传输层安全性。

---

## 7. 用户反馈摘要

### 成本敏感性与异常感知
- **Issue #5324**：用户明确报告 10M+ token / 23 分钟的异常消耗，表达了对资源浪费的强烈关注。此类反馈说明**成本可观测性**与**异常熔断机制**对用户信任至关重要，建议后续增强相关监控与告警能力。

### 远程与网页授权需求迫切
- **Issue #5297**：用户提出 MCP 服务（如 Xmind）需要网页授权，但项目当时无法完成该流程。诉求中同时考虑了非本机场景（gateway 远程访问），表明用户部署环境多样化，需要灵活的认证机制。

### 微信登录体验
- **PR #5310** 的修复表明用户对强制 QR 登录场景存在实际使用痛点——此前配置或持久化凭据会干扰登录流程，导致无法切换账号或强制重新认证。

---

## 8. 待处理积压

### 高优先级待合并 PR
- **[#5271] fix(session): prevent stale background task saves from overwriting session data**（P0，Open since 2026-08-06）
  - **链接**：[PR #5271](https://github.com/HKUDS/nanobot/pull/5271)
  - 防止后台任务覆盖新会话数据，与用户数据安全直接相关，建议优先评审。

- **[#5179] Migrate MCP integration to SDK v2 with legacy compatibility**（P1，Open since 2026-07-30）
  - **链接**：[PR #5179](https://github.com/HKUDS/nanobot/pull/5179)
  - 长期未合并且标记 conflict，涉及 MCP 底层迁移，建议维护者协调解决冲突。

### 其他待关注
- **[#5257] fix(agent): bound sustained-goal continuation when the turn goes idle**（P2，Open since 2026-08-05）
  - **链接**：[PR #5257](https://github.com/HKUDS/nanobot/pull/5257)
  - 修复目标延续机制无界循环问题，与 token 成本及稳定性相关。

- **[#5299] feat(api): expose structured token usage records**（Open since 2026-08-08）
  - **链接**：[PR #5299](https://github.com/HKUDS/nanobot/pull/5299)
  - 对成本透明度有直接帮助，且与 #5324 用户痛点呼应。

- **[#5292] fix(matrix): reply to the room-level user event that started the turn**（Open since 2026-08-08）
  - **链接**：[PR #5292](https://github.com/HKUDS/nanobot/pull/5292)
  - 修复 Matrix 房间级回复不关联用户消息的问题，影响聊天交互体验。

> 整体来看，今日项目各项指标较为健康——Issues 关闭率高、WebUI 重构有序推进、MCP OAuth 功能快速落地。但长期存在的冲突 PR 与高优先级会话修复仍未合并，建议维护者优先处理标记 `conflict` 的 PR 并加速 P0/P1 合并节奏，以维持社区信任与迭代效率。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 — 2026-08-11

> 数据窗口：过去 24 小时（GitHub 更新）｜数据源：NousResearch/hermes-agent

---

## 1. 今日速览

过去 24 小时项目活跃度极高：共 50 条 Issue、50 条 PR 更新，其中 44 条 Issue 处于新开/活跃状态，40 条 PR 待合并，另有 6 个 Issue 关闭、10 个 PR 合并/关闭。今日最突出的事件是 **Windows Desktop 在 v0.20.0 更新后出现大规模启动回归**，多个独立用户报告 backend 进程秒退（exit 0）、boot 循环、Repair 无效，社区已在数小时内提交至少 2 个针对性修复 PR（[#83611](https://github.com/NousResearch/hermes-agent/pull/83611)、[#83604](https://github.com/NousResearch/hermes-agent/pull/83604)），响应速度很快。安全方面，"子进程凭据继承"类问题形成明显集群，社区已发起整合 campaign epic（[#83565](https://github.com/NousResearch/hermes-agent/issues/83565)）。桌面端稳定性改进（renderer 生命周期诊断与崩溃恢复）已合并落地。今日无新版本发布。

---

## 2. 版本发布

无（过去 24 小时新版本发布数为 0）。

---

## 3. 项目进展

今日合并/关闭的 PR 主要集中在**桌面端稳定性、会话租约加固、技能安装可复现性**三个方向：

| PR | 内容 | 状态 | 意义 |
|---|---|---|---|
| [#83567](https://github.com/NousResearch/hermes-agent/pull/83567) | fix(desktop): 为所有窗口（secondary/instance/HUD/quick-entry 等）附加 renderer 崩溃诊断 + 崩溃循环预算恢复 | 已合并 | 修复 [#81290](https://github.com/NousResearch/hermes-agent/issues/81290) 一类"黑窗口无日志"问题，桌面端可观测性显著提升 |
| [#81533](https://github.com/NousResearch/hermes-agent/pull/81533) | fix(desktop): 为所有 BrowserWindow 挂载 render-process-gone/unresponsive/oom 诊断 | 已合并 | 与 #83567 配套，peer 窗口崩溃不再"永久黑屏且无痕" |
| [#67626](https://github.com/NousResearch/hermes-agent/pull/67626) | fix(gateway): turn-lease idle 谓词改为 waiter-aware（#67401 审计后续） | 已关闭（合并） | 消除会话租约在"等待者存在但锁空闲"场景下的潜在竞态 |
| [#83597](https://github.com/NousResearch/hermes-agent/pull/83597) | feat(skills): GitHub 分支/PR 安装固定到 commit SHA，含锁来源与 fail-closed 校验，188 个测试通过 | 已关闭（合并） | 技能供应链可复现性与安全性提升 |
| [#82676](https://github.com/NousResearch/hermes-agent/pull/82676) | test(gateway): 用行为矩阵钉死 final-send 抑制契约 | 已关闭（合并） | 纯测试加固，无行为变更 |

对应关闭的 Issue：`#81547`（dashboard fd leak）、`#77276`（孤儿 gateway，P1）、`#83603`（Windows boot loop，标记关闭）、`#81290`（黑窗口）、`#83479`（Home 区无新建会话入口）。

**整体判断**：项目今日在"修 Windows 回归"的同时，仍保持桌面端诊断能力、会话租约正确性、技能安装安全三条线的稳定推进，工程节奏健康。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 热度信号 |
|---|---|---|---|
| 1 | [#78647 Epic: Shard all 20 god files](https://github.com/NousResearch/hermes-agent/issues/78647) | 66 | 仓库级重构史诗，确立"god file 必须拆分、不可回退"的 2026-08 政策，讨论热度断层第一 |
| 2 | [#34352 Solving the Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352) | 21 👍2 | 提出多租户隔离诉求，称 memory 操作绕过 hook 系统，已在生产环境 fork 运行数月 |
| 3 | [#68367 Desktop-spawned 子进程继承 Tlon 凭据](https://github.com/NousResearch/hermes-agent/issues/68367) | 5 | 桌面子进程树携带默认 profile 凭据，导致已禁用平台被意外连接 |
| 4 | [#77164 env scrub 仅按名称形状启发式过滤](https://github.com/NousResearch/hermes-agent/issues/77164) | 4 | 安全类，指出非"凭据形状"的已应用 secret 会泄露给子进程 |
| 5 | [#83562/#83548/#83555/#83583 Windows 启动回归集群](https://github.com/NousResearch/hermes-agent/issues/83562) | 各 2-3 | 同一故障多用户报告，构成今日最大用户声音 |

**诉求分析**：热点背后是两类核心诉求——① **架构债务清理**（god-file 拆分 66 条评论，社区对可维护性高度关注）；② **多租户与安全边界**（凭据隔离、子进程环境清理，反映企业级/多用户部署需求正在上升）。Windows 回归集群则说明桌面端发布质量是当前用户最敏感的触点。

---

## 5. Bug 与稳定性

按严重程度排列（含修复状态）：

### 🔴 严重（P1/CRITICAL）

- **[#83312](https://github.com/NousResearch/hermes-agent/issues/83312)（P1）DeepSeek 会话永久卡死**：assistant 消息携带 `tool_calls: []` 空数组后，所有后续消息均被 HTTP 400 拒绝，会话不可恢复。**已有修复 PR [#83600](https://github.com/NousResearch/hermes-agent/pull/83600)**（在 wire 边界剥离空 tool_calls）。
- **[#77463](https://github.com/NousResearch/hermes-agent/issues/77463)（标记 CRITICAL）子进程环境清理存在多个绕过点**：TUI host 在 scrub 后 `env.update(os.environ)` 重新注入、LSP 全量环境、`_HERMES_FORCE_` 解包、Docker forward-env，共 6 个发现。**尚无修复 PR**。

### 🟠 高（P2）

- **Windows 启动回归集群（今日新增）**：
  - [#83555](https://github.com/NousResearch/hermes-agent/issues/83555) serve 的 parent-death watchdog 在 uv trampoline venv 下自退出 → **修复 PR [#83611](https://github.com/NousResearch/hermes-agent/pull/83611)**（先确认父进程死亡再自杀）
  - [#83583](https://github.com/NousResearch/hermes-agent/issues/83583) 同根因（ppid 不匹配而非身份校验）→ **修复 PR [#83604](https://github.com/NousResearch/hermes-agent/pull/83604)**
  - [#83562](https://github.com/NousResearch/hermes-agent/issues/83562) 手动运行正常但 Desktop 报 `backend exited (0)`，Repair 流程多次失败
  - [#83548](https://github.com/NousResearch/hermes-agent/issues/83548) 更新后 Desktop 崩溃，TUI 正常
  - [#83603](https://github.com/NousResearch/hermes-agent/issues/83603) v0.20.0 更新后 boot loop（已关闭，应与上述重复）
- **[#83569](https://github.com/NousResearch/hermes-agent/issues/83569) Windows `hermes update` 自锁 `cryptography._rust.pyd`**：更新进程自身 import cryptography 导致文件被映射，任何 cryptography 升级 100% 失败（os error 5）。**无修复 PR**。
- **凭据/安全泄露（P2）**：[#82936](https://github.com/NousResearch/hermes-agent/issues/82936) 多 profile 复用下默认 profile 的 secret 泄露给 secondary profile 的 terminal/Kanban 子进程；[#38079](https://github.com/NousResearch/hermes-agent/issues/38079) WhatsApp bridge 子进程未清理 operator 环境（CVSS v4.0 8.2 High）。**均无修复 PR**。
- **[#83455](https://github.com/NousResearch/hermes-agent/issues/83455) /refine 拒绝已完成 Desktop 会话**：内存 agent 缓存缺失时把持久化会话误判为空对话。
- **[#81518](https://github.com/NousResearch/hermes-agent/issues/81518) 透明代理后连接池积累半死连接**：cron API TTFB 飙到 20-219s，清理逻辑漏掉 request clients。

### 🟡 中（P3）

- [#83573](https://github.com/NousResearch/hermes-agent/issues/83573) `curator adopt --dry-run` 对已托管技能误报 "would adopt"。
- [#83580](https://github.com/NousResearch/hermes-agent/issues/83580) 归档技能不可恢复：**51/62 个归档技能无法通过 CLI 恢复**（`curator restore` 拒绝 mv 路径命名）。**已有修复 PR [#83613](https://github.com/NousResearch/hermes-agent/pull/83613)**。
- [#60961](https://github.com/NousResearch/hermes-agent/issues/60961) Langfuse 插件 placeholder key 静默失败（无 trace、无报错，标记 duplicate）。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 状态/信号 |
|---|---|---|
| **多租户支持**（memory 隔离、fork 免维护） | [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) | 21 评论 + 2 👍，P3/needs-decision，社区有生产验证经验，是重大路线图候选 |
| **子进程凭据继承治理 campaign** | [#83565](https://github.com/NousResearch/hermes-agent/issues/83565) | 今日新建的 meta-epic，将 #77027 类问题统一收口，预示后续有一批安全 PR 会集中合入 |
| **内置 gateway 自愈**（SIGTERM 后自重启 + 死 WebSocket 检测） | [#83522](https://github.com/NousResearch/hermes-agent/issues/83522) | P2/needs-decision，直击 Discord 静默掉线等运维痛点，很可能进入下一版本 |
| **Slack 频道成员无需 DM 权限即可发起任务** | PR [#83504](https://github.com/NousResearch/hermes-agent/pull/83504) | 已实现待合并，精确到 channel 的授权策略，属权限模型完善 |
| **`hermes release-notes` 交互式版本查看命令** | PR [#66178](https://github.com/NousResearch/hermes-agent/pull/66178) | 已实现待合并（P3），实现 #64133 |
| **god-file 全面拆分** | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) 及 [#78640](https://github.com/NousResearch/hermes-agent/issues/78640)-[#78643](https://github.com/NousResearch/hermes-agent/issues/78643) | 已定为仓库政策，涉及 20 个文件（最大 7,461 行），属确定性的架构演进方向 |
| **大上下文压缩阈值修正** | PR [#83523](https://github.com/NousResearch/hermes-agent/pull/83523) | 1M context 不再等到 500K 才压缩，默认绝对触发上限 256K，已实现待合并 |

**判断**：安全硬化（凭据隔离）和可靠性（gateway 自愈、Windows 启动修复）是近期主线；多租户是最大但尚未进入决策的功能变量；god-file 拆分是已确定的长线重构。

---

## 7. 用户反馈摘要

挖掘自今日 Issue 评论的真实用户声音：

- **Windows 用户对更新体验不满**："更新后 Desktop 无法启动，Repair 流程多次尝试均复现同一失败。"（[#83562](https://github.com/NousResearch/hermes-agent/issues/83562)）——Desktop 更新通道缺少回滚/降级机制，用户被迫手动处理。
- **多租户用户已 fork 自救**："Memory 操作完全绕过 hook 系统，不 fork 核心就无法租户隔离——我们已带修复在生产环境跑了好几个月。"（[#34352](https://github.com/NousResearch/hermes-agent/issues/34352)）——说明核心架构层对多租户支持不足，用户愿意贡献代码。
- **技能管理 CLI 可信度受损**："51/62 个归档技能通过文档化 CLI 路径无法恢复。"（[#83580](https://github.com/NousResearch/hermes-agent/issues/83580)）——dry-run 与 restore 均与真实状态不一致，用户强调"没法回答最基本的问题"。
- **DeepSeek 用户会话被永久堵死**："从那一刻起，该会话的每一条后续消息都在投递前失败。"（[#83312](https://github.com/NousResearch/hermes-agent/issues/83312)）——对依赖 DeepSeek 的日常用户影响严重。
- **/refine 误判**："对话已持久化且可见，但命令把内存缓存缺失当成空会话。"（[#83455](https://github.com/NousResearch/hermes-agent/issues/83455)）——状态判定逻辑与用户可见状态不一致。
- **正面反馈**：Desktop 黑窗口问题（#81290）随今日诊断 PR 合并而修复，说明用户上报的可复现崩溃获得了闭环解决。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未获响应或停留决策期，提醒维护者关注：

| 编号 | 创建时间 | 搁置天数 | 说明 |
|---|---|---|---|
| [#5908](https://github.com/NousResearch/hermes-agent/issues/5908) kimi-coding base_url 不重新解析 | 2026-04-07 | ~126 天 | 老版本创建的 credential 池条目静态 base_url 导致连接错误，P2，2 👍 |
| [#34352](https://github.com/NousResearch/hermes-agent/issues/34352) 多租户方案 | 2026-05-29 | ~74 天 | 社区呼声高、有生产验证，仍停在 needs-decision |
| [#38079](https://github.com/NousResearch/hermes-agent/issues/38079) WhatsApp bridge 环境清理 | 2026-06-03 | ~69 天 | 安全类（CVSS 4.0 High），长期无 PR |
| [#60961](https://github.com/NousResearch/hermes-agent/issues/60961) Langfuse 占位 key 静默失败 | 2026-07-08 | ~34 天 | 标记 duplicate 但未见合并去向 |
| PR [#66178](https://github.com/NousResearch/hermes-agent/pull/66178) release-notes 命令 | 2026-07-17 | ~25 天 | 功能完整，卡在 P3/needs-decision |
| PR [#72428](https://github.com/NousResearch/hermes-agent/pull/72428) Docker 可见缓存路径 | 2026-07-27 | ~15 天 | 修复 Docker 内 web_extract/browser_snapshot 路径错位，P2 |
| PR [#75063](https://github.com/NousResearch/hermes-agent/pull/75063) Kanban 升级时唤醒来源会话 | 2026-07-30 | ~12 天 | Telegram 等推送平台用户已收到通知但主会话仍沉睡 |
| [#81518](https://github.com/NousResearch/hermes-agent/issues/81518) 代理后连接池半死连接 | 2026-08-08 | ~3 天 | 影响 cron 稳定性，TTFB 最高 219s，P2 |

---

*报告生成时间：2026-08-11 ｜ 数据窗口：过去 24 小时 ｜ 项目健康度评估：活跃度极高，社区响应迅速；Windows 发布回归是当前最大风险点；安全类积压需加速处理。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 — 2026-08-11

## 今日速览

过去 24 小时内 PicoClaw 项目保持稳健的迭代节奏：共发生 4 条 Issue 更新（2 条新开/活跃、2 条关闭）与 9 条 PR 更新（7 条合并/关闭、2 条待处理）。项目没有发布新版本，但聚合了多项高价值变更，包括远程提示/执行边界的安全加固、Telegram 表格原生渲染、消息分片挂起修复，以及模型级配置增强。值得特别关注的是，一批带有 stale 标记的 PR 在本日集中关闭，说明维护者正在集中清理积压。整体判断：项目活跃度中等偏上，核心系统稳定性与安全边界是当前主线，社区外部贡献占比较大，治理流程正在有序运转。

## 版本发布

今日无新版本发布，此部分略过。不过需要留意，已合并的 PR #3297 将配置迁移至 schema v4，属于潜在的破坏性变更，维护者需在下一个正式版本发布时妥善写明迁移注意事项。

## 项目进展

今日关闭/合并的 7 个 PR 可从稳定性、渠道体验、安全与配置四个维度观察项目推进：

- **安全边界加固（重要）**：PR #3297 [`fix(security): harden remote prompt and exec boundaries`](https://github.com/sipeed/picoclaw/pull/3297) 合并，将远程发送者和聊天元数据放入规范化 user-role envelope，不再混入 provider system instructions；远程 exec 默认禁用，启用后需每次独立批准，并在执行时再次执行 origin 策略校验。这是一次典型的安全纵深防御升级，对多租户/远程控制场景意义重大。
- ** 渠道能力增强（功能向）**：PR #3327 [`feat(telegram): render tables with native rich messages`](https://github.com/sipeed/picoclaw/pull/3327) 合并，Telegram 渠道不再将 GFM/HTML 表格降级为等宽代码块，而是通过 Bot API 富消息原生渲染，覆盖 send/reply/topic/edit 场景。该 PR 从创建到关闭仅 1 天，反应了渠道侧的快速迭代节奏。
- **稳定性修复**：PR #3295 [`fix(channels): prevent SplitMessage hang on oversized fence headers`](https://github.com/sipeed/picoclaw/pull/3295) 合并，修复了当开闭围栏代码块信息字符串超过 `maxLen` 时 `SplitMessage` 无限挂起的问题，回退逻辑保证消息分片始终向前推进。此外，PR #3326 修复了 `web/frontend/pnpm-lock.yaml` 中重复的 `semver@7.8.5` 条目，解除了 `CI ERR_PNPM_BROKEN_LOCKFILE` 故障。
- **配置系统完善**：PR #2132 [`feat(config): support model-specific max_tokens and fix config key…`](https://github.com/sipeed/picoclaw/pull/2132) 合并，`gateway.go` 不再使用 provider 的 `modelID` 覆盖 `Defaults.ModelName`，查找键与运行时 ID 解耦，并引入模型级 `max_tokens` 覆盖能力。这为多模型配置的可靠性补上了关键短板。
- **本地化与杂项**：PR #3296 补齐了捷克语 code wrap 标签；PR #1547 合并了来自 #1466/#1465 两个开放补丁的修复，属于清理类操作。

综合来看，项目在安全、渠道富消息、长文本稳定性三个维度同时向前迈进，配置系统也借此做了一次必要的去耦合，为未来复杂多模型调度打基础。

## 社区热点

今日讨论最密集的 Issue 是 [#3301](https://github.com/sipeed/picoclaw/issues/3301)（评论 3）：**通过 dispatch rules 路由到非默认 agent 的会话中，`/clear` 与自动压缩失效**。该问题由 j-v 在 7 月 29 日报告，涉及 0.3.1 / Raspberry Pi / Discord+Telegram / DeepSeek 环境，用户配置了规则将聊天路由到非默认 agent，却发现核心会话管理指令失效。这反映了「路由别名」与「会话生命周期管理」两条子系统之间的集成盲区，也是多 agent 拓扑兴起后常见的配置语义不一致问题。

另一热点是 [#3298](https://github.com/sipeed/picoclaw/issues/3298)（评论 2）：AI Router 维护者主动提案，希望在 OpenAI-compatible 层之外提供「命名 provider 预设」，让用户可以直接选择 AI Router 而非手动填写 `api_base`。该 Issue 今日被关闭，可能指向已以某种形式解决方案（例如引导使用通用 openai 配置），但其背后诉求值得关注：**提供方生态正在快速出现，主动集成可显著降低用户接入门槛**。

此外，[#3294](https://github.com/sipeed/picoclaw/issues/3294) 也获得 2 条评论并关闭：用户配置了多个模型，但 `/list models` 只显示当前模型，命令名与输出不符。该问题虽为 UI 级，但直接触发了用户对配置透明度的预期。

## Bug 与稳定性

按严重程度排序：

1. **[严重] 工具重复失败导致的静默死循环（#3311）** — 报告中一位用户在 Telegram 中要求 agent 执行 git 命令，agent 在每次工具调用都得到相同错误（如 git 未凭据）时，安静地重试直到 `max_tool_iterations`，用户始终未收到任何答复。生产环境中“静默烧数分钟”的体验对 agent 产品是致命的。**已有对应修复 PR #3312**（今日仍处待合并状态），方案是识别连续相同错误后提前终止本轮并返回错误摘要。
2. **[中等] 非默认 agent 的会话控制失效（#3301）** — dispatch rules 将聊天路由到非默认 agent 后，`/clear` 和自动压缩不生效。属于功能层面回归或路由与状态管理之间的未对齐。当前无修复 PR 关联。
3. **[中等] `SplitMessage` 在超大 fence header 下挂起（#3295）** — 已被今日合并的修复解决。当开围栏代码块信息字符串超过 `maxLen` 时，分片器无法收敛，导致发送线程挂起。修复增加了有界 raw split 回退，确保消息总会被发送。已合并。
4. **[低] `/list models` 只显示当前模型（#3294）** — 命令名暗示“列出所有配置模型”，实际只返回当前激活模型与 provider。体验型缺陷，已关闭（可能关闭时已与用户沟通临时绕过方式）。
5. **[低] web 前端 lockfile 损坏（#3326）** — `pnpm install --frozen-lockfile` 因重复映射键失败，已在今日合并的 PR 中修复。

整体来看，昨日没有新的崩溃级回归；两项未决 Bug 均处于“待验证/待合入”状态而非“无人认领”状态。

## 功能请求与路线图信号

- **模型配置粒度提升（已落地）**：PR #2132 的合入为每个模型独立设置 `max_tokens` 铺平了道路，同时修正了配置键语义混乱的根源。这是对社区长期围绕「多模型配置行为不一致」类反馈的系统性回应。
- **提供方预设集成（需求明确）**：[#3298](https://github.com/sipeed/picoclaw/issues/3298) 表明用户希望绕开手动 `api_base`，让 AI Router 这类网关可被直接选中。综合 `openai` 通用 provider 与命名预设的折中方案，很可能进入下一版本的功能候选。
- **Telegram 富文本消息（已落地）**：#3327 的合并说明项目在渠道消息「原生感」上下功夫，后续可能向 Slack、Discord 等渠道推广同类能力。
- **远程调用安全模型（路线图级）**：#3297 将远程 exec 的默认策略收紧为「默认禁用 + 逐步批准」，这预示着后续版本会围绕远程 agent 使用场景构建完整的审批与审计体系。

## 用户反馈摘要

- **“静默失败”是最令人沮丧的体验**：#3311 的评论者明确指出「turn can spin silently for many minutes… user never receives an answer」。对于 agent 类工具，用户可接受执行失败，但不可接受无反馈的长时间等待。这是对「工具错误可视化与早期终止」功能的强烈真实需求。
- **路由配置的高阶用户正在增加**：#3301 的使用者展示了多 agent / dispatch rules 的典型生产配置，说明“路由到非默认 agent”并非边缘用法，而是逐步走向主流；这类用户对 `/clear`、自动压缩等会话管理能力的完整支持有硬性预期。
- **提供方集成商主动关注 PicoClaw**：#3298 来自 AI Router 维护者，主动提出贡献预设，表明外部生态已开始将 PicoClaw 视作可接入的 agent 基础设施——这是项目扩展性的正面信号。
- **配置可见性影响信任**：#3294 反映出当「配置了多个模型」与「命令只反馈一个模型」并存时，用户的第一反应是怀疑系统悄悄降级或忽略了配置，而不是功能未实现。配置透明度直接影响用户对 agent 系统的信任度。

## 待处理积压

以下是在 24 小时窗口外仍处于开放状态、且已被打上 stale 标记的条目，提醒维护者关注：

- **[OPEN] PR #3314** — `Fix: agent not able to execute shell command added to customAllowPatterns`。修复 `customAllowPatterns` 被默认 deny 规则覆盖的问题，涉及 shell 安全边界与用户自定义授权的优先级冲突。自 8 月 3 日创建，已等待 8 天。
- **[OPEN] PR #3312** — `fix(agent): stop turn early on repeated identical tool failure`。直指今日最严重 Bug #3311 的修复，自 8 月 2 日创建，已等待 9 天，且无 review 痕迹。建议优先处理。
- **[OPEN] Issue #3301** — 路由到非默认 agent 后 `/clear` 与会话压缩失效，反馈于 7 月 29 日，仍无关联修复 PR。
- **[OPEN] Issue #3311** — 重复工具失败静默循环，已有修复 PR 但未合入。

另外注意到，今日合并/关闭的 7 个 PR 全部带有 stale 标记且多数创建于 7 月下旬——这批历史积压能在一天内集中清理，说明维护者正在主动消化 stale 队列。如果能在接下来的一周内完成 #3312 的 review 与合入，将极大缓解当前最尖锐的稳定性投诉。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## 今日速览

过去 24 小时 NanoClaw 保持高活跃度：20 条 PR 动态中 10 条被合并/关闭、10 条待合并，3 条 Issue 更新，无新版本发布。合并内容集中在权限日志隐私加固、消息投递去重、模块化重构与文档规范，项目处于稳定性打磨与架构整理期。新开 Issue 聚焦“消息被静默丢弃”等可靠性问题，其中 #3226 在 24 小时内即获得对应修复 PR #3224，响应迅速。Telegram 配对码安全成为社区关注点，两位贡献者分别提交了修复 PR（#3225、#3229）。整体评估：社区贡献活跃、维护者响应及时，项目健康度良好。

## 项目进展

过去 24 小时共 10 条 PR 被合并/关闭，重点集中在以下几个方面：

**可靠性修复**
- [#3228 fix: deduplicate turn-scoped chat delivery](https://github.com/nanocoai/nanoclaw/pull/3228)（已关闭）— 修复同一轮对话内聊天消息重复投递问题。这与新 Issue #3075 中“入站消息重复插入错误”的现象可能同源，是消息链路可靠性的重要修复。

**权限与隐私加固**
- [#3222 feat(permissions): add opt-in privacy-safe DM logs](https://github.com/nanocoai/nanoclaw/pull/3222)（已关闭）— 为 DM 日志新增可选的隐私安全模式，默认保留原有详细日志。
- [#3215 fix(permissions): redact DM resolution logs](https://github.com/nanocoai/nanoclaw/pull/3215)（已关闭）— 在 DM 解析日志中脱敏用户 ID、句柄等标识信息。

**架构重构（为后续扩展铺路）**
- [#3186 refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186)（已关闭）
- [#3213 refactor(channels): register question renderers](https://github.com/nanocoai/nanoclaw/pull/3213)（已关闭）
- [#3214 refactor(host): unify module lifecycle hooks](https://github.com/nanocoai/nanoclaw/pull/3214)（已关闭）
- [#3212 refactor(db): add module migration registry](https://github.com/nanocoai/nanoclaw/pull/3212)（已关闭）

这批重构完善了 host/channel/db 模块的扩展点，使后续新增技能、渠道和数据库迁移更加规范化，为 Agent Plugins、远程 MCP 等大型特性提供了更干净的架构基础。

**文档规范**
- [#3216 docs(hardened-image): note that install_packages covers apt and npm only](https://github.com/nanocoai/nanoclaw/pull/3216)（已关闭）— 明确 `install_packages` 仅覆盖 apt/npm 包，避免用户使用误区。
- [#3211 docs(skills): define single-responsibility integration rule](https://github.com/nanocoai/nanoclaw/pull/3211)（已关闭）— 为技能集成定义单职责规则。

另有 [#3219 Telegram and container env](https://github.com/nanocoai/nanoclaw/pull/3219) 被关闭/合并，但标题与目标描述较模糊，建议维护者在合并记录中补充细节以便追溯。

## 社区热点

今日社区聚焦在以下三组主题：

**消息可靠性（Issue + 修复 PR 联动）**
- [#3226 Inbound messages silently dropped when a platform reuses a message id](https://github.com/nanocoai/nanoclaw/issues/3226) — 作者 dweekly 详细描述了平台复用消息 ID 导致入站消息被静默丢弃的现象，并附带根因分析。该 Issue 发布后迅速获得修复 PR [#3224 fix(session-db): preserve inbound messages across platform ID reuse](https://github.com/nanocoai/nanoclaw/pull/3224) 的响应，且两者为同一作者，是典型的“用户报障 + 社区直接贡献代码”模式。
- [#3223 Scheduled-task turns that error produce an unroutable error message that is silently dropped](https://github.com/nanocoai/nanoclaw/issues/3223) — 指出定时任务触发的 agent turn 报错时，错误消息因缺少路由字段被静默丢弃。这与今日合并的 #3228 同属消息投递链路问题，社区对“错误是否可见”的关注度明显上升。

**Telegram 配对码安全（两个独立 PR）**
- [#3225 fix(telegram): harden pairing code generation and store permissions](https://github.com/nanocoai/nanoclaw/pull/3225) — 使用 CSPRNG 生成配对码，并加固配对目录/存储文件权限。
- [#3229 fix(telegram): generate pairing codes with a CSPRNG, not Math.random()](https://github.com/nanocoai/nanoclaw/pull/3229) — 仅针对随机源问题的安全修复。

两位贡献者在同一天提交了覆盖范围重叠的修复（#3225 包含 #3229 的内容），维护者应尽早协调合并，避免社区重复工作。

**远程 MCP 支持（长期主线）**
- [#3092 feat: support remote Streamable HTTP MCP servers](https://github.com/nanocoai/nanoclaw/pull/3092) 与配套的 [#3221 feat(providers): remote Streamable HTTP MCP servers for codex and opencode](https://github.com/nanocoai/nanoclaw/pull/3221) 持续推进，反映社区对 MCP 生态扩展有明确需求。

## Bug 与稳定性

按严重程度排列：

1. **高：[#3226 平台复用消息 ID 导致入站消息静默丢弃](https://github.com/nanocoai/nanoclaw/issues/3226)**
   - 影响：用户消息完全到不了 agent，且无任何可见提示，严重影响可用性。
   - 状态：已有修复 PR [#3224](https://github.com/nanocoai/nanoclaw/pull/3224)（待合并）。

2. **高：[#3223 定时任务报错产生的错误消息被静默丢弃](https://github.com/nanocoai/nanoclaw/issues/3223)**
   - 影响：定时任务在 provider/model 报错时，操作者完全不知情，任务失败不可观测。
   - 状态：暂无对应修复 PR，需要设计错误路由逻辑。

3. **中：[#3075 长时间运行后日志静默丢失 + 入站消息重复插入错误，且无 systemd 单元](https://github.com/nanocoai/nanoclaw/issues/3075)**
   - 影响：WSL2 + Docker 环境下长时间运行出现重复插入和日志丢失，同时缺少 systemd 单元，自托管运维不便。
   - 状态：已存在 25 天，暂无直接 fix PR；今日合并的 #3228 可能部分缓解重复投递问题。

4. **中：[#3229 / #3225 Telegram 配对码使用 Math.random() 且存储权限过宽](https://github.com/nanocoai/nanoclaw/pull/3229)**
   - 影响：配对码可预测，存在被暴力猜测的安全风险；配对存储文件权限位可能过于宽松。
   - 状态：两个修复 PR 均待合并。

## 功能请求与路线图信号

以下功能在今日 PR 中体现，可能被纳入下一版本：

- **远程 Streamable HTTP MCP 服务器支持**
  [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) 已在引擎和 Claude provider 中实现远程 MCP 配置，新配套 PR [#3221](https://github.com/nanocoai/nanoclaw/pull/3221) 为 codex/opencode provider 补齐支持，是 MCP 集成的一个重要里程碑。

- **Agent 模板升级为 Agent Plugins 1.0.0**
  [#3220 feat!: agent templates become Agent Plugins 1.0.0 directories](https://github.com/nanocoai/nanoclaw/pull/3220) 为破坏性变更，将模板迁移为目录化插件格式；[#2909](https://github.com/nanocoai/nanoclaw/pull/2909) 则添加安装向导和首个 agent 生成流程。模板特性将进入正式化阶段。

- **CLI 支持从 stdin 读入 JSON**
  [#3218 feat(cli): accept bounded JSON from stdin](https://github.com/nanocoai/nanoclaw/pull/3218) 为 host 和容器内 ncl 客户端新增 `--stdin-json` 输入模式，方便脚本化调用，对自动化运维是实用的增强。

- **权限隐私日志开关**
  [#3222](https://github.com/nanocoai/nanoclaw/pull/3222) 引入 opt-in 的隐私安全 DM 日志模式，已在合并流程中，预计很快进入主线。

## 用户反馈摘要

- [#3075（libellebilai-collab）](https://github.com/nanocoai/nanoclaw/issues/3075)：用户在 WSL2 Ubuntu + Docker Desktop 部署场景下，报告了长时间运行后“日志静默丢失”和“入站消息重复插入错误”，并明确提到“没有 systemd unit 被安装”。这反映了准生产/自托管用户对部署规范性和可观测性的真实需求。
- [#3226（dweekly）](https://github.com/nanocoai/nanoclaw/issues/3226)：作者用一句很形象的话概括了消息丢失的体验——“从用户角度，这与‘agent 忽略了我’无法区分”。用户感知是可靠性问题的最终度量，值得团队高度重视。
- [#3223（chiptoe-svg）](https://github.com/nanocoai/nanoclaw/issues/3223)：指出“operator never learns the task failed”，将定时任务失败不可见的问题描述得非常清楚，代表了运维型用户的核心痛点。

共同点：用户不仅上报问题，还提供了详细环境、根因分析和复现路径，说明社区参与质量较高，愿意协助官方排障。

## 待处理积压

以下 Issue/PR 已存在较长时间，建议维护者关注：

- **[#3075 长稳运行后日志丢失与重复插入问题（2026-07-17 创建，已 25 天）](https://github.com/nanocoai/nanoclaw/issues/3075)**
  同时还牵扯 systemd 单元缺失，属于企业级部署的可靠性问题，长期搁置会影响用户信任。目前无明确 fix PR。

- **[#2909 模板安装向导与首个 agent 生成流程（2026-07-02 创建，已 40 天）](https://github.com/nanocoai/nanoclaw/pull/2909)**
  这是模板特性“part 2 of 2”，直接关系到 #3220 Agent Plugins 的落地进度，长期未合并会阻塞模板功能正式发布。

- **[#3092 远程 Streamable HTTP MCP 服务器支持（2026-07-19 创建，已 23 天）](https://github.com/nanocoai/nanoclaw/pull/3092)**
  新配套 PR #3221 已出现，说明社区仍在持续推进，但核心 PR 等待时间较长，建议优先 review。

- **[#3193 Telegram Chat SDK 更新以支持富消息（2026-08-06 创建，已 5 天）](https://github.com/nanocoai/nanoclaw/pull/3193)**
  随着 Telegram 渠道使用量上升，该更新会直接影响用户消息体验。

另外，新提交的修复 PR（#3224、#3225、#3229）建议尽快处理，避免与积压 PR 产生合并冲突或拉长安全窗口期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 — 2026-08-11

## 1. 今日速览
过去 24 小时内，项目活跃度较低但保持稳定：共 1 条 Issue 更新（#700 被关闭），1 条 PR 更新（#956 待合并），无新版本发布，无新 Issue 开启，无 PR 被合并。整体来看，社区讨论集中在 A2A 协议客户端能力上，而项目日常维护以依赖更新为主，未见战略性功能的大幅推进。

## 2. 版本发布
无。

## 3. 项目进展
- **无 PR 合并或关闭**：今日没有重要 PR 被合并到主干，说明核心开发进度较平缓。
- **依赖更新 PR 待处理**：[PR #956](https://github.com/nullclaw/nullclaw/pull/956)（Docker 镜像依赖 Alpine 3.23 → 3.24）今日再次更新，仍处于待合并状态。虽然这是 Dependabot 自动触发的维护性 PR，但长期未合并可能影响 CI/构建链的安全性与可维护性。
- **相关 Issue 关闭**：[Issue #700](https://github.com/nullclaw/nullclaw/issues/700)（Add a2a_call client tool）被关闭，表明该功能提案已进入收尾阶段，可能已通过其他方式实现或解决。

## 4. 社区热点
- **Issue #700（已关闭）**：[Add a2a_call client tool for calling remote agents](https://github.com/nullclaw/nullclaw/issues/700)
  - 1 条评论，1 个 👍，是今日唯一有实质讨论的条目。
  - 背景：NullClaw 已实现 A2A 协议（v0.3.0）服务端，但缺少客户端侧实现。用户 `georgeglarson` 自建了一个 `a2a_call` 工具，用于向远程 Agent 发送 `message/send` JSON-RPC 请求，并希望官方支持。
  - 数据分析：这反映出用户对跨实例 Agent 互通有明确需求，且社区愿意贡献实现。该 Issue 关闭后，建议维护者关注是否有对应的 PR 或后续路线图安排。

## 5. Bug 与稳定性
- **今日无新增 Bug、崩溃或回归报告**。未发现需要紧急处理的不稳定问题。

## 6. 功能请求与路线图信号
- **A2A 客户端功能（Issue #700）**：用户明确提出需要客户端侧调用远程 Agent 的能力，并已提供实现思路。虽然该 Issue 已关闭，但这是重要的路线图信号——表明 NullClaw 在“服务端”之外，可能应规划“客户端”能力，以实现多实例协同、外部 Agent 调用等场景。相关后续 PR 值得优先跟进。

## 7. 用户反馈摘要
- **使用场景**：用户运行两个 NullClaw 实例（一个公共门卫，一个私人个人 Agent），需要让它们能互相调用。
- **痛点**：NullClaw 目前只支持 A2A 协议的服务端，缺少客户端；用户需要绕过该限制，自行编写 `a2a_call` 工具。
- **反馈态度**：用户给出的是建设性提案，并附带了实现（”I've built...”），说明社区对项目有较高参与意愿，但对现有功能的完整性仍存有期待。

## 8. 待处理积压
- **PR #956（长期未合并）**：[ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)
  - 创建于 2026-06-15，至今已接近两个月，最近更新于 2026-08-10，仍未合并。
  - 虽然只是依赖升级，但长时间滞留可能意味着 CI 测试失败、维护者无暇处理或存在其他阻塞因素。建议维护者确认状态，避免基础依赖持续滞后。

> 报告基于 GitHub 公开数据，时间范围为 2026-08-10 至 2026-08-11，所有信息均附原始链接，供进一步核查。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-11

## 1. 今日速览

过去 24 小时（截至 2026-08-11）IronClaw 保持高强度迭代：**50 条 Issue 更新**（新开/活跃 25、关闭 25），**50 条 PR 更新**（待合并 33、已合并/关闭 17），并发布 **1 个紧急补丁候选版本**。项目呈现"架构治理清理 + 下一代功能落地"双主线：一批 8/4 架构审计 Issue 集中关闭（#7145/#7147/#7149/#7150/#7151 等），同时统一通道模型（#7477）、Telegram 关联设备（#7464）、存储 profile 无关化（#7456）等 XL 级 PR 密集提交。v1.1.0 范围多个史诗（#6941/#6727/#6483/#6484/#6485）关闭，版本收尾信号明确。健康度提示：**33 条 PR 待合并形成一定积压**，且仍有一条开放 23 天的高优先级客户 Bug（#6257）无关联修复 PR。

## 2. 版本发布

### ironclaw-v1.1.1-rc.1（2026-08-10）

**定位**：1.1 系列的紧急补丁候选版本，重点覆盖五类已知问题：

- **Channel 投递与配对（pairing）修复**
- **IronHub / 自定义 MCP 兼容性**
- **WebUI 流式输出稳定性**
- **持久化检索（durable retrieval）**
- **从 1.0.0 与 1.1.0 两个稳定前序版本安全升级**

**迁移注意事项**：Release Notes 明确提示 *"Upgrading from 1.0.0. Stop all writers"*——从 1.0.0 升级需先停止所有写入方，暗示升级涉及存储格式变更或写锁要求，**升级操作需预留停机窗口并严格遵循官方升级流程**。

## 3. 项目进展

### 已合并/关闭的重要项

| 项目 | 说明 |
|---|---|
| [PR #7381](https://github.com/nearai/ironclaw/pull/7381)（已关闭） | **Doc-Truth 管线设计记录**（doc-truth PR 5/5），对应 Issue #7317 关闭。为"代码-文档一致性"建立了确定性校验机制 |
| [PR #7336](https://github.com/nearai/ironclaw/pull/7336)（已关闭） | **loop-host steering 重放去重**：持久化消费窗口 + 队列序列去重，防止延迟消息触发重复模型迭代与重复回复 |
| [Issue #7145](https://github.com/nearai/ironclaw/issues/7145) 等 5 条架构审计 Issue | 8/4 架构审计产出批量关闭：extension_host→loops 重分层、架构棘轮数据不一致、同层耦合无默认防护、vendor 审查 pin 缺失、composition 质量门污染。**架构债务清理节奏加快** |
| [Issue #6941](https://github.com/nearai/ironclaw/issues/6941)、[#6727](https://github.com/nearai/ironclaw/issues/6727)、[#6483](https://github.com/nearai/ironclaw/issues/6483)、[#6484](https://github.com/nearai/ironclaw/issues/6484)、[#6485](https://github.com/nearai/ironclaw/issues/6485) | **v1.1.0 五个史诗关闭**：模型自助技能、自定义 MCP 连接、Telegram 产品完备性、规范化消息操作、通道感知对话。v1.1.0 范围收尾明显 |

### 待合并的重大改动（项目前进方向）

- **[PR #7477](https://github.com/nearai/ironclaw/pull/7477)（XL）统一通道模型**：每个通道一个 `ChannelAdapter`，统一 inbound/replies/notifications 三路口径，web-app/Slack/Telegram 全量切换。实现设计文档 §12 items 1–11 + §13 强制校验，是通道架构的里程碑式重构。
- **[PR #7456](https://github.com/nearai/ironclaw/pull/7456)（XL）持久化存储 profile 无关化**：根目录直接挂载于 `IRONCLAW_REBORN_HOME`，杜绝 profile 切换导致"数据看起来丢失"的问题，并引入安全信封防止降级切换。
- **[PR #7464](https://github.com/nearai/ironclaw/pull/7464)（XL）Telegram 关联设备**：MTProto linked-device 认证、会话托管与标准操作工具，用户可在 Telegram 设置中查看/撤销已关联设备。
- **[PR #7468](https://github.com/nearai/ironclaw/pull/7468)/[#7469](https://github.com/nearai/ironclaw/pull/7469)（XL×2）logprobs 可观测性**：本地 sidecar 捕获 per-token logprobs（默认关闭、字节级兼容），随后降采样为 envelope confidence 聚合以满足 Trace Commons 2MiB 摄取限制。
- **[PR #7471](https://github.com/nearai/ironclaw/pull/7471)（XL）进程租约恢复**：`lease_expired` 时安全运行不再被误判为失败，并隔离 journal 心跳专用连接池，根治心跳与数据面争抢连接的问题。
- **[PR #7474](https://github.com/nearai/ironclaw/pull/7474)（XL）QA 断言可靠性修复**：一次性修复 #7246/#7247/#7294 三个"agent 断言未验证状态"的 Railway-QA 缺陷，每个修复前均有确定性复现。

## 4. 社区热点

- **[Issue #7137](https://github.com/nearai/ironclaw/issues/7137)（12 评论，最高）**：live-canary CI 产物体积失控——QA-3 703MB、QA-10 975MB、QA-2-workflow 1.46GB，单次运行总产物超 5GB。核心诉求是 **CI 效率与 GitHub Actions 存储配额消耗**。已有机器人 PR [#7466](https://github.com/nearai/ironclaw/pull/7466)（排除可再生的 homes/workspace/日志/Playwright trace）直接响应此问题，但仅做了产物裁剪，长期需从"上传什么"转向"为什么生成这么大"。
- **[Issue #7317](https://github.com/nearai/ironclaw/issues/7317)（3 评论）**：Doc-Truth 验证管线提案，直指"稳定版破坏性变更先于文档发布"（如 `origin_gate_matrix` 变为强制字段但文档未更新）。该提案已通过 PR #7381 完成设计落地，反映社区对**发布可信度**的强烈诉求。
- **[Issue #7145](https://github.com/nearai/ironclaw/issues/7145)/[#7147](https://github.com/nearai/ironclaw/issues/7147)/[#7151](https://github.com/nearai/ironclaw/issues/7151)（各 2-4 评论）**：BenKurrek 架构审计系列，核心论点是"治理机制本身需要被治理"——share-based 预算导致 god crate 重新膨胀、三层 PR 各持不同 baseline、同层耦合 68 条活跃边无默认防护。这批 Issue 集中关闭说明维护者已积极消化审计结果。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 问题 | 状态 |
|---|---|---|---|
| 🔴 高 | [#6257](https://github.com/nearai/ironclaw/issues/6257) | 发送/生成 PDF 报 `Invalid value (attachments.mime_type)`，客户经 Slack #x-ai-product-feedback 反馈 | **开放 23 天，无 fix PR** |
| 🟠 中 | [#7476](https://github.com/nearai/ironclaw/issues/7476) | MODEL 投递路径 `classify_delivery_outcome` 忽略 `Failed` 的 `vendor_message_refs`，部分投递证据丢失（#7475 修复的是通知路径，模型路径待覆盖） | 开放，需跟进 |
| 🟠 中 | [#7473](https://github.com/nearai/ironclaw/issues/7473) | `post_notice` 将"已投递但无 vendor ref"折叠为"未投递"，导致已收到 connect-nudge 的用户被重复打扰 | 修复 PR [#7475](https://github.com/nearai/ironclaw/pull/7475) 待合并 |
| 🟠 中 | [#7246](https://github.com/nearai/ironclaw/issues/7246)/[#7247](https://github.com/nearai/ironclaw/issues/7247)/[#7294](https://github.com/nearai/ironclaw/issues/7294) | QA 中 agent 断言未经验证的状态（自动化状态、调用方扩展鉴权、记忆召回） | PR [#7474](https://github.com/nearai/ironclaw/pull/7474) 批量修复 |
| 🟠 中 | [#7471](https://github.com/nearai/ironclaw/pull/7471)（PR） | 运行因 `lease_expired` 用户可见地死亡，根因是心跳与数据面共享 max-size-2 Postgres 池，读突发导致心跳饿死 | 修复 PR 待合并 |
| 🟢 低 | [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack 反复重连后认证流进入 broken state，只能卸载重装恢复 | 已关闭 |
| 🟢 低 | [#6834](https://github.com/nearai/ironclaw/issues/6834) | near.foundation 账户 Slack 集成设置失败 | 已关闭 |

**重点关注**：#6257 是唯一仍开放的高优先级客户可见 Bug，且无关联修复 PR，建议优先排期。

## 6. 功能请求与路线图信号

- **AI 对话即配置（Epic [#7046](https://github.com/nearai/ironclaw/issues/7046)）**：管理员通过 AI 聊天配置全部工具/通道/扩展，与 #7044 channel-first onboarding 联动。**判断**：契合项目"AI-first"定位，但依赖稳定通道模型（#7477）合入，大概率进入 v1.2+。
- **Extensions vNext（Epic [#7354](https://github.com/nearai/ironclaw/issues/7354)）**：Web Push、富消息、Telegram 用户会话、Signal 通道，**目标日期 2026-08-14**。PR #7464（Telegram 关联设备）正是其组成部分，预计未来数天将密集合入。
- **存储 profile 无关化（Epic [#7467](https://github.com/nearai/ironclaw/issues/7467)）**：涉及存量用户数据"可见性"安全，实现 PR #7456 已就绪，**大概率进入 v1.1.1 或 v1.2**。
- **LLM logprobs 可观测性（[#7468](https://github.com/nearai/ironclaw/pull/7468)/[#7469](https://github.com/nearai/ironclaw/pull/7469)）**：默认关闭的本地捕获 + 降采样聚合，为 Trace Commons 提供置信度数据，属于中期可观测性投资。
- **公司知识库 Company Brain FDE（Epic [#7465](https://github.com/nearai/ironclaw/issues/7465)）**：新开史诗暂无描述，命名暗示企业级知识库预研启动，方向信号值得关注。
- **设计系统（Epic [#7038](https://github.com/nearai/ironclaw/issues/7038)）**：Storybook + AI-first Design System，标注 v1.3.0，仍处提案阶段。

## 7. 用户反馈摘要

- **PDF 生成功能受损（[#6257](https://github.com/nearai/ironclaw/issues/6257)）**：用户在 Slack #x-ai-product-feedback 反馈"无法发送/生成 PDF"，报错指向 `attachments.mime_type` 校验失败。**该问题已持续 23 天未修复**，涉及核心文件传输场景，用户可感知度高，且当前无任何公开进展，存在满意度风险。
- **AGENTS.md 编辑"假成功"（[#3762](https://github.com/nearai/ironclaw/issues/3762)）**：标记 suggested_P1 / customer，开放近 3 个月。用户在 WebUI 编辑 `AGENTS.md` 保存成功，但当前及未来会话的系统提示词均不更新。**"保存成功但行为不变"的隐性失效**比显式报错更易消耗用户信任。
- **Slack 认证状态机脆弱（[#5882](https://github.com/nearai/ironclaw/issues/5882)）**：反复断开/重连后进入"Waiting for Slack..."死等，浏览器回调返回 Authorization failed，唯一恢复路径是卸载重装扩展。虽已关闭，但暴露了认证流程缺少自恢复能力。
- **重复连接引导骚扰风险（[#7473](https://github.com/nearai/ironclaw/issues/7473)）**：内部开发者在审查中发现，已收到 connect-nudge 的用户可能因 vendor ref 缺失而再次收到重复通知。此路径在 Web Push（始终无 ref）和 Slack（postMessage 成功但无回执）场景下高发。

## 8. 待处理积压

| 类型 | 编号 | 积压时长 | 说明 |
|---|---|---|---|
| PR | [#5101](https://github.com/nearai/ironclaw/pull/5101) | **52 天** | `ci: reuse cargo-component installer in live canary`——S 级小改动（pin installer 版本），长期未合入亦未关闭，建议维护者明确处理 |
| Issue | [#3762](https://github.com/nearai/ironclaw/issues/3762) | **85 天** | P1 客户问题（AGENTS.md 编辑不更新系统提示词），无 assignee、无修复 PR，建议在 v1.3.0 排期中给出明确承诺 |
| Issue | [#6257](https://github.com/nearai/ironclaw/issues/6257) | **23 天** | 高优先级客户 Bug（PDF MIME 校验），唯一未闭环的高优项，建议立即排期 |
| Issue | [#7038](https://github.com/nearai/ironclaw/issues/7038) / [#7046](https://github.com/nearai/ironclaw/issues/7046) | 8 天无新动态 | 设计系统与 AI 对话配置两大 v1.3.0 史诗，等待规划确认 |

---

**整体健康度评估**：项目处于 **高活跃 + 高产出** 状态，架构治理与功能交付双线并进，v1.1.0 收尾、v1.1.1 补丁、v1.2+ 蓝图三层节奏清晰。主要风险集中在两点：**① 33 条待合并 PR 的评审积压**可能拖慢关键路径（尤其 XL 级 #7477/#7456）；**② 客户可见 Bug #6257 长期无主**，与同期快速关闭的内部治理 Issue 形成反差，建议平衡内外部投入。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 — 2026-08-11

## 1. 今日速览

过去 24 小时项目整体活跃度高：共 34 条 PR 更新，其中 20 条已合并/关闭、14 条仍待合并；Issues 侧仅 1 条存量问题被自动关闭，无新建 Issue，无新版本发布。开发主要聚焦两条主线：cowork 模块的交互体验增强（附件卡片、活动分组折叠、快捷键、流式加载指示器统一）与 OpenClaw 网关键稳定性与运行时可靠性修复。整体项目健康度良好，但 14 条待合并 PR（含大量依赖升级）需维护者及时跟进 review。

## 2. 版本发布

今日无新版本发布。

## 3. 项目进展

今日合并/关闭了 20 个 PR，主要集中在以下方面：

**cowork 交互体验增强**
- [#2472 feat: cowork activity group collapse](https://github.com/netease-youdao/LobsterAI/pull/2472)：支持活动分组折叠，改善长会话浏览体验
- [#2471 feat(cowork): render submitted file attachments as clickable cards](https://github.com/netease-youdao/LobsterAI/pull/2471)：提交的非图片附件不再退化为纯文本路径，而是渲染为文件类型卡片（图标 + 文件名 + 类型），与图片预览保持一致
- [#2469 feat(cowork): add collapse-agent-tasks shortcut and allow modifier shortcuts while typing](https://github.com/netease-youdao/LobsterAI/pull/2469)：新增折叠代理任务快捷键，并支持输入过程中使用修饰键快捷键
- [#2468 refactor(cowork): unify streaming loading indicators](https://github.com/netease-youdao/LobsterAI/pull/2468)：统一流式加载指示器，减少 UI 状态碎片化

**OpenClaw 稳定性与运行时修复**
- [#2454 fix(openclaw): stop tool-loop guard from killing legitimate polling](https://github.com/netease-youdao/LobsterAI/pull/2454)：修复工具循环保护机制误杀合法轮询请求的问题
- [#2470 fix(openclaw): surface provider runtime failures on late chat error](https://github.com/netease-youdao/LobsterAI/pull/2470)：修复迟到聊天错误被误判为陈旧工具失败而吞掉真实 Provider/LLM 运行时故障的问题（如空闲超时故障转移）
- [#2467 fix(python-runtime): repair stale pip shims on Windows runtime upgrade](https://github.com/netease-youdao/LobsterAI/pull/2467)：修复 Windows 运行时升级后 pip shim 残留旧版本的问题；健康检查原先仅验证文件存在，现改为在打包和启动时收敛到统一模板
- [#2466 Fix/renderer init ipc stall retry](https://github.com/netease-youdao/LobsterAI/pull/2466)：修复渲染进程初始化时 IPC 卡死的重试机制

**依赖升级（今日合并）**
- [#1766 chore(deps-dev): bump vite from 5.4.21 to 8.0.13](https://github.com/netease-youdao/LobsterAI/pull/1766)
- [#1764 chore(deps): bump react-dom from 18.3.1 to 19.2.6](https://github.com/netease-youdao/LobsterAI/pull/1764)
- [#1763 chore(deps-dev): bump @vitejs/plugin-react from 4.7.0 to 6.0.1](https://github.com/netease-youdao/LobsterAI/pull/1763)

整体来看，项目在 cowork 使用体验和 OpenClaw 网关稳定性两条线上同步推进，且完成了 Vite 8 / React 19 等基础设施升级的技术债清理，前进步伐扎实。

## 4. 社区热点

今日 Issue 和 PR 侧整体讨论热度不高。

- **Issue [#1243 [BUG] qwen-portal-auth 插件配置循环写入导致网关频繁重启](https://github.com/netease-youdao/LobsterAI/issues/1243)** 共 2 条评论，是今日唯一有评论的 Issue，但已于今日因 stale 自动关闭。该问题描述严重（网关每 5-20 分钟重启一次），却因长时间无响应被系统关闭，可能暗示问题已通过其他途径缓解，但仍建议维护者确认。
- **PR [#2452 fix(openclaw): preserve provider for slashed model ids](https://github.com/netease-youdao/LobsterAI/pull/2452)** 由社区开发者 ump45nose 于 8 月 7 日提交，修复带斜杠模型 ID（如 `custom_0` + `deepseek-ai/DeepSeek-V4-Flash`）的 Provider 前缀丢失问题。该 PR 已开放 4 天仍未合并，是今日值得关注的社区贡献。
- **PR [#2473 feat(cowork): add right-click context menu for local file links](https://github.com/netease-youdao/LobsterAI/pull/2473)** 是今日新开且仍开放的功能 PR，为本地文件链接添加右键菜单（打开方式/另存为/复制路径/复制内容/复制图片/在文件夹中显示），体现项目对本地文件工作流的持续强化。

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|------|---------|
| 高 | [#1243 qwen-portal-auth 插件配置循环写入导致网关每 5-20 分钟重启](https://github.com/netease-youdao/LobsterAI/issues/1243)，影响所有模型（包括非 Qwen 模型），Windows 10/11 用户受影响，伴 "AI 引擎正在启动网关..." 弹窗 | 今日因 stale 自动关闭，未标注修复版本 | 无直接关联 PR；[#2454](https://github.com/netease-youdao/LobsterAI/pull/2454) 和 [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470) 或已在后台缓解同类问题，需维护者确认 |
| 中 | [#2454 工具循环保护误杀合法轮询](https://github.com/netease-youdao/LobsterAI/pull/2454) | 已合并 | — |
| 中 | [#2470 迟到聊天错误吞掉真实 Provider 运行时故障](https://github.com/netease-youdao/LobsterAI/pull/2470) | 已合并 | — |
| 中 | [#2467 Windows 运行时升级后 pip shim 残留旧版本](https://github.com/netease-youdao/LobsterAI/pull/2467) | 已合并 | — |
| 低 | [#2466 渲染进程初始化 IPC 卡死重试机制](https://github.com/netease-youdao/LobsterAI/pull/2466) | 已合并 | — |

整体来看，今日未报告新的用户侧 Bug，已合并的多个修复均指向 OpenClaw 运行时稳定性，方向明确。

## 6. 功能请求与路线图信号

今日未收到用户新功能请求，但以下 PR 释放了明确的路线图信号：

- **cowork 本地文件工作流强化**：[#2473 本地文件链接右键菜单](https://github.com/netease-youdao/LobsterAI/pull/2473) 提供 open-with / save-as / copy-path / copy-image / reveal-in-folder 等操作，结合今日已合并的 [#2471 附件卡片渲染](https://github.com/netease-youdao/LobsterAI/pull/2471)，可以判断下一版本将重点完善 cowork 场景中的文件处理体验。
- **自定义模型/模型 ID 兼容性**：[#2452 保留斜杠模型 ID 的 Provider 前缀](https://github.com/netease-youdao/LobsterAI/pull/2452) 反映社区用户对 `deepseek-ai/DeepSeek-V4-Flash` 这类带路径模型 ID 的使用需求，修复后自定义 Provider 与模型 ID 将能正确解析。
- **快捷键与操作效率**：[#2469 折叠代理任务快捷键、输入时允许修饰键快捷键](https://github.com/netease-youdao/LobsterAI/pull/2469) 已合并，显示项目在提升重度用户操作效率上的投入。
- **依赖现代化**：多個 dependabot PR（[#2465 vite 8.2.1](https://github.com/netease-youdao/LobsterAI/pull/2465)、[#2464 react-dom 19.2.8](https://github.com/netease-youdao/LobsterAI/pull/2464)、[#2463 @vitejs/plugin-react 6.0.5](https://github.com/netease-youdao/LobsterAI/pull/2463)、[#2462 mermaid 11.16.1](https://github.com/netease-youdao/LobsterAI/pull/2462)）尚待合并，反映项目在持续推进前端技术栈现代化。

## 7. 用户反馈摘要

- **Issue [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243) 的用户反馈**：用户安装任意模型（包括非 Qwen 模型）后，网关每 5-20 分钟自动重启一次，并伴随 "AI 引擎正在启动网关..." 弹窗，严重影响正常使用。用户期望配置稳定、网关不无故重启。该问题影响 Windows 10/11 平台，但今天因长期无响应被 stale 自动关闭，无法确认问题是否已在后续版本修复。
- 今日 PR 侧无用户直接反馈评论。

## 8. 待处理积压

**待合并 PR（14 条）**，需维护者重点关注：

- [#2473 feat(cowork): add right-click context menu for local file links](https://github.com/netease-youdao/LobsterAI/pull/2473)（今日新开，功能完整度较高）
- [#2452 fix(openclaw): preserve provider for slashed model ids](https://github.com/netease-youdao/LobsterAI/pull/2452)（社区提交，已开放 4 天）
- 依赖升级类（均需人工 review，含大版本变更）：
  - [#2465 vite 5.4.21 → 8.2.1](https://github.com/netease-youdao/LobsterAI/pull/2465)
  - [#2464 react-dom 18.3.1 → 19.2.8](https://github.com/netease-youdao/LobsterAI/pull/2464)
  - [#2463 @vitejs/plugin-react 4.7.0 → 6.0.5](https://github.com/netease-youdao/LobsterAI/pull/2463)
  - [#2462 mermaid 10.9.8 → 11.16.1](https://github.com/netease-youdao/LobsterAI/pull/2462)（跨大版本，建议重点验证渲染兼容性）
  - [#2461 eslint-plugin-react-hooks 5.2.0 → 7.1.1](https://github.com/netease-youdao/LobsterAI/pull/2461)
  - [#2460 rimraf 5.0.10 → 6.1.3](https://github.com/netease-youdao/LobsterAI/pull/2460)
  - [#2459 @nodesecure/js-x-ray 14.3.0 → 16.0.0](https://github.com/netease-youdao/LobsterAI/pull/2459)

**长期未响应 Issue**：目前无长期未响应的重要 Issue（唯一 stale Issue #1243 今日已自动关闭）。建议维护者对 #1243 做一次回归验证，确认网关频繁重启问题是否已在 2026.4.1 之后的版本中修复，避免同类问题在社区中复发。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 — 2026-08-11

## 今日速览
过去 24 小时 Moltis 项目保持中等活跃度：共 3 条 Issue 更新（全部为 Bug 报告），2 条 PR 保持待合并状态，无新版本发布。Issue 侧的问题全部集中在沙箱后端领域，其中 apple-container 相关占 2/3，表明该后端目前是社区使用的热点与痛点。PR 侧无新提交、无合并，两个开放中的 PR（#1182、#531）持续逾期未合并，合并节奏偏慢。整体来看，项目正处于“功能收尾 + 稳定性修补”并行阶段，但 apple-container 相关的稳定性问题值得维护者优先关注。

---

## 版本发布
无。最新 Releases 为空，过去 24 小时内没有新版本发布。

---

## 项目进展
今日 **没有 PR 被合并或关闭**，但有两个待合并 PR 值得关注：

- **[PR #1182] fix(sessions): allow deleting and archiving the main session**（作者：shixi-li，更新于 2026-08-11）  
  修复 #1132：现在 `main` 会话可以像其他会话一样被删除和归档。移除了 `delete_impl` 和 `is_archivable_entry` 中的 `main` 守卫，同时保留了当前活跃通道会话的归档限制。该 PR 解决了会话管理中的一个长期限制，若合并将改善用户对默认会话的控制能力。

- **[PR #531] feat(browser): interactive browser viewing UI with CDP screencast**（作者：penso，更新于 2026-08-10）  
  该 PR 在 Settings > Browser 页面新增完整浏览器查看与交互 UI，支持通过 CDP screencast 实时查看浏览器会话，支持鼠标/键盘/滚动交互，并提供会话历史与操作日志，以及按 Agent 隔离的浏览器配置文件。这是 Moltis 在浏览器自动化与可视化方向上的重要功能推进。

尽管今日没有合并动作，这两个 PR 一旦落地，将分别补全会话管理和浏览器交互两块核心能力。但需注意，两个 PR 都已开放较长时间（#531 已超 4 个月），建议维护者明确其状态并推动合入。

---

## 社区热点
今日讨论热度最高的是 **[Issue #1185]**: [Bug]: Apple Container 1.x sandbox starts but Moltis treats it as not running（作者：mikz，3 条评论），这是过去 24 小时内唯一有评论互动的 Issue。用户反馈 apple-container 1.x 沙箱实际已启动，但 Moltis 内部将其标记为“未运行”，导致后续流程无法正常进行。

背后的诉求分析：该问题直指运行时状态检测逻辑的可靠性——Moltis 可能过度依赖特定状态字段或轮询条件来判断沙箱存活，与 apple-container 1.x 的实际行为存在兼容性差距。这类问题若不能及时修复，会影响所有使用 apple-container 后端的用户对系统状态的信任度。

其余两个新 Issue（#1188、#1189）和两个 PR 当前没有评论，可能与报告时间较短有关。

---

## Bug 与稳定性
今日共报告 3 个 Bug，均未有关联的修复 PR，按严重程度排列如下：

| 严重程度 | Issue | 描述 | 分析 |
| --- | --- | --- | --- |
| 高 | [#1188](https://github.com/moltis-org/moltis/issues/1188) | [Bug]: resource limits not applied for apple-container backend | 资源限制（CPU/内存/磁盘等）未生效，可能导致沙箱配额失效，在多租户或生产环境下存在资源耗尽风险。暂无对应 fix PR。 |
| 高 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | [Bug]: Apple Container 1.x sandbox starts but Moltis treats it as not running | 沙箱实际已启动但被误判为未运行，直接影响依赖状态判断的用户工作流。该 Issue 已有 3 条评论，社区有一定关注度。暂无对应 fix PR。 |
| 中 | [#1189](https://github.com/moltis-org/moltis/issues/1189) | [Bug]: Sandbox build failing due to wrong gogcli github URL | 构建沙箱时 gogcli 的 GitHub URL 配置错误，导致构建过程直接失败，阻断开发环境搭建。属于低复杂度修复，但至今无对应 fix PR。 |

整体来看，Bug 集中指向 **apple-container 后端的成熟度**，包括状态检测、资源限制和构建依赖三个方面，建议维护者优先排查该后端。

---

## 功能请求与路线图信号
今日没有用户明确提出全新功能需求的 Issue，但从 Bug 和已有 PR 中可以读出两条路线图信号：

1. **apple-container 后端亟需系统性完善**  
   3 个 Bug 中有 2 个与该后端直接相关（状态误判 + 资源限制失效），另一个（gogcli URL）也是沙箱构建链的问题。这表明 apple-container 后端距离生产可用仍有距离，下一版本很可能需要针对该后端做一轮集中稳定性修复。

2. **浏览器交互 UI 是下一版本的重要候选功能**  
   [PR #531](https://github.com/moltis-org/moltis/pull/531) 已开放超过 4 个月且持续更新，功能体量较大（CDP screencast、交互操作、会话历史、Agent 隔离等）。若该 PR 被合入，将是一项重要的功能里程碑，且有望进入下一版本发布计划。维护者应尽快决定其归属。

此外，[PR #1182](https://github.com/moltis-org/moltis/pull/1182) 所修复的 main 会话删除/归档问题，回应的是用户对会话管理灵活性的需求，属于体验优化类功能，合并优先级应高于新功能开发。

---

## 用户反馈摘要
由于 Issue 评论内容未完全展开，以下基于标题与描述信息进行提炼：

- **真实痛点确认（#1185）**：用户 mikz 在最新版本上仍会遇到沙箱启动状态误判问题，说明该 Bug 并非版本落后导致，而是当前实现中的实际缺陷。考虑到 Preflight Checklist 中已搜索过现有 issue，用户对项目有预期但受挫于稳定性。
- **部署与配额诉求（#1188）**：用户 holgzn 报告 apple-container 后端资源限制不生效，反映出用户对资源可控性和安全隔离有明确要求，这可能来自生产环境或多用户使用场景。
- **构建体验受阻（#1189）**：gogcli URL 配置错误导致构建失败，直接影响用户快速上手和 CI/CD 流程，属于“入场级”摩擦，虽不复杂但容易被忽略。
- **整体情绪**：目前无明显负面情绪表达，用户更多是在生产使用中发现问题并反馈，说明 Moltis 在真实场景中已被认真使用，社区反馈质量较高。

---

## 待处理积压
以下重要 Issue/PR 长期未获合并或响应，提醒维护者关注：

- **[PR #531](https://github.com/moltis-org/moltis/pull/531) — feat(browser): interactive browser viewing UI with CDP screencast**  
  开放时长：**133 天**（自 2026-03-31）。这是一个大型功能 PR，持续更新至 8 月 10 日，但仍处于开放状态。建议维护者明确路线图归属，要么安排合入，要么给出阶段性反馈，避免长期悬置导致社区贡献流失。

- **[PR #1182](https://github.com/moltis-org/moltis/pull/1182) — fix(sessions): allow deleting and archiving the main session**  
  开放时长：**10 天**（自 2026-08-01），更新于 8 月 11 日。该 PR 修复了一个已被明确报告的 Issue（#1132），代码改动较小且方向明确，建议尽快审查合并。

- **[Issue #1185](https://github.com/moltis-org/moltis/issues/1185) — apple-container sandbox 状态误判**  
  创建于 8 月 8 日，已有 3 条评论但无维护者响应标记。该问题影响核心运行状态判断，应尽快确认并分配修复。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 — 2026-08-11

## 1. 今日速览

过去 24 小时 CoPaw 仓库保持**高度活跃**：共更新 Issues 39 条（新开/活跃 33，关闭 6）、PR 50 条（待合并 33，关闭/合并 17），无新版本发布。Issue 侧集中在 Bug 报告（前端 UI 反馈、MCP 工具调用、稳定性问题），PR 侧较快速响应，针对用户反馈已出现多个修复 PR 被提出，包括 IME 输入崩溃（#6889）、聊天时间线显示（#6845）、严格 OpenAI 兼容供应商兼容性（#6809）等。值得注意的是项目正在准备 v2.1.0 发布文档（PR #6875），整体处于**大版本发布前的密集修复与社区反馈期**。

## 2. 版本发布

今日无新版本发布，但 PR #6875（打开中）正在为 QwenPaw v2.1.0 更新英文/中文 release notes、添加 2026-08-11 新闻条目并同步 README，说明 **v2.1.0 正式版本发布在即**。

## 3. 项目进展

今日共有 17 条 PR 合并或关闭，以下为状态为 CLOSED 的关键 PR（由于数据未标注区分 merged/unmerged，以下统称“已关闭”），涉及多个重要修复：

- **#6809 fix(providers): sanitize Chat Completions content for strict providers** — 针对 #6803 报告的问题（OpenAI 兼容接口携带 `input_text` 类型等内部字段被 StepFun 等严格供应商拒绝），清理发送内容。**高质量修复，直接对应社区反馈。** （https://github.com/agentscope-ai/QwenPaw/pull/6809）
- **#6878 feat(console): add hidden-folders toggle to project directory picker** — Console 项目目录选择器新增隐藏文件夹显示开关（https://github.com/agentscope-ai/QwenPaw/pull/6878）
- **#6615 fix(config): handle corrupted agent config and invalid JSON** — 提高 `load_agent_config()` 对损坏/非法 JSON 的健壮性，避免深层错误直接抛给用户（https://github.com/agentscope-ai/QwenPaw/pull/6615）
- **#6398 feat: add reranker support for ReMe memory search (backend)** — ReMe 记忆搜索新增 reranker 后端支持，可过取候选 + 重排序，提高结果质量（https://github.com/agentscope-ai/QwenPaw/pull/6398）

仍在审查/开放中的高价值 PR 也体现了整体功能推进：

- **#6399 feat: add reranker UI config panel** — 对应 #6398 的前端配置面板（https://github.com/agentscope-ai/QwenPaw/pull/6399）
- **#6772 feat(memory): add embedding hot updates and Daily Paper to ReMe Light** — 扩展 ReMe Light 的 Embedding 配置、定时任务与索引维护能力（https://github.com/agentscope-ai/QwenPaw/pull/6772）
- **#6870 feat(creator): 大型聚合 PR** — Creator 插件设置中心、技能、mm-plugins 编排、异步媒体生成、跨平台加固，插件版本升至 2.3.7（https://github.com/agentscope-ai/QwenPaw/pull/6870）
- **#6880 feat(console): unify apps, plugins, and skills in the marketplace** — 将应用/插件/技能市场统一到 `/market` 页面（https://github.com/agentscope-ai/QwenPaw/pull/6880）

**综合来看：** 今日项目在有多个主线（v2.1.0 发布、ReMe 记忆系统升级、Creator 插件整合、前端 Console 重构）并行的同时，对社区反馈的 Bug 响应速度较快，多个新打开的 PR 直接对应前两日报告的问题，项目正处于活跃迭代中。

## 4. 社区热点

今日讨论热度最高（评论数最多）的 Issues ：

- **#6782 Docker 版 2.0.1 插件市场/应用市场提示“维护中”**（9 条评论）——用户反馈最集中、影响面最大的问题。Docker 部署用户体验中断，多位用户跟帖印证，说明该问题可能具有普遍性。（https://github.com/agentscope-ai/QwenPaw/issues/6782）
- **#6803 OpenAI-compatible 请求被严格供应商拒绝**（6 条评论）——StepFun 400 Unrecognized chat message，涉及协议兼容性。（https://github.com/agentscope-ai/QwenPaw/issues/6803）
- **#6811 OpenAI Responses continuation summary 忽略 `disable_thinking` 且误报 60 秒取消**（5 条评论）——长对话滚动摘要阻塞主对话，影响核心体验。（https://github.com/agentscope-ai/QwenPaw/issues/6811）
- **#6826 助手消息结束时间显示异常**（5 条评论）——实际思考 2 分钟，界面显示仅几秒。前端计时逻辑引起多用户共鸣。 （https://github.com/agentscope-ai/QwenPaw/issues/6826）

**背后诉求分析：** 热点问题集中在“实际使用感受与界面呈现不一致”（时间显示、市场状态）和“外部服务集成失败”（严格 API 供应商、MCP 工具）。这些都直接影响用户对产品的信任度和可用性，值得优先处理。

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复状态 |
|---------|-------|------|---------|
| 🔴 严重 | #6814 | macOS 上打开 Scroll `history.db`（WAL 模式）触发 SIGBUS 崩溃（`sqlite3WalFindFrame` FS pagein 22）| 无 PR，待排查（https://github.com/agentscope-ai/QwenPaw/issues/6814） |
| 🔴 严重 | #6820 | 前端 UI 不显示模型的输出、工具调用、思考过程，全部完成后才一次性显示 | 无 PR，可能涉及流式渲染回归（https://github.com/agentscope-ai/QwenPaw/issues/6820） |
| 🔴 严重 | #6811 | OpenAI Responses 续写摘要忽略 `disable_thinking`，阻塞主对话并误报“60 秒取消为格式错误” | 无 PR（https://github.com/agentscope-ai/QwenPaw/issues/6811） |
| 🟠 高 | #6803 | OpenAI-compatible 请求携带 `input_text` content type + 原始流式字段，被 StepFun 等严格供应商拒绝（400）| ✅ PR #6809 已关闭（见进展部分） |
| 🟠 高 | #6885 | v2.1.0b2 中文 IME compositionEnd 时 Console UI 崩溃，消息队列不可用 | ✅ PR #6889 已在今日提出（https://github.com/agentscope-ai/QwenPaw/issues/6885） |
| 🟠 高 | #6826 | 助手消息结束时间显示异常（实际耗时与 UI 显示不一致）| ✅ PR #6845 已提出（https://github.com/agentscope-ai/QwenPaw/issues/6826） |
| 🟠 高 | #6780 | v2.0.1 闲置几十分钟后卡死，只能杀进程重启 | 无 PR（https://github.com/agentscope-ai/QwenPaw/issues/6780） |
| 🟠 高 | #6828 | Console 前端空闲时持续重绘（~20% CPU），根源为无限 CSS 动画 | 无 PR（https://github.com/agentscope-ai/QwenPaw/issues/6828） |
| 🟡 中 | #6821 | 多轮对话中 `reasoning_content` 未回传导致 400 BadRequestError | 无 PR（https://github.com/agentscope-ai/QwenPaw/issues/6821） |
| 🟡 中 | #6810 | Windows 安装/更新时未终止占用安装目录的进程（NSIS 弹多个“无法打开要写入的文件”）| 无 PR（https://github.com/agentscope-ai/QwenPaw/issues/6810） |
| 🟡 中 | #6813 | `consume_model_response` 在 agentscope 2.x ChatResponse 上抛 `KeyError: '__aiter__'`，自动标题生成失败 | 无 PR（https://github.com/agentscope-ai/QwenPaw/issues/6813） |
| 🟢 低/已解决 | #6871 | 历史消息时间戳时区偏移 +8h（已关闭）| ✅ 已关闭（https://github.com/agentscope-ai/QwenPaw/issues/6871） |

**总结：** 今日 Bug 覆盖范围广，其中流式 UI、IME 输入、记忆库崩溃、Docker 市场不可用是用户感知最强烈的问题。好消息是多个已有关联修复 PR 已进入审查流程。

## 6. 功能请求与路线图信号

- **ReMe 记忆/重排序功能持续落地**：PR #6398（backend reranker）已关闭，#6399（rounter UI）仍在审查，PR #6772 为 ReMe Light 加入 Embedding 热更新和 Daily Paper。说明 **ReMe4 路线图正在按计划推进**（Issue #6840 询问 ReMe4 roadmap，可结合 PR 进展回答）。
- **用户强烈要求的“后台任务面板折叠/收纳”**（#6876，已关闭）：用户建议默认折叠或收纳到独立区域，不阻塞聊天主窗口。虽 Issue 已关闭，但该体验问题仍然存在，值得在 v2.1.0 中考虑。（https://github.com/agentscope-ai/QwenPaw/issues/6876）
- **MCP 工具调用质量持续受关注**：配置化超时（#6724）、tool not found（#6405）、数字字符串被强转（#6839）三个不同维度的问题。开发者已在 PR #6869 中修复 `task_timeout` 被 LLM 序列化未数字字符串的问题，但 MCP 生态整体稳定性还需进一步改善。
- **会话内 shell 命令可观测性**：#4237 提出在聊天内增加 running-commands panel（查看/杀死/延长命令超时），截止目前仍开放，评论数 4，可视为中高优先级的长期功能请求。（https://github.com/agentscope-ai/QwenPaw/issues/4237）
- **本地化/细节体验**：#6585 请求增加“已接收字符数”动态提示的关闭开关（避免闪烁影响注意力）。这是一个小改动、收益明确的功能，建议尽快加入。（https://github.com/agentscope-ai/QwenPaw/issues/6585）
- **窗口大小/位置记忆**：#4634 请求重启后恢复上次窗口尺寸，目前仍开放。（https://github.com/agentscope-ai/QwenPaw/issues/4634）
- **Auto-Dream 容错增强**：#6841 报告单个单元失败导致整任务 error，PR #6884 已提出“make Auto-Dream integration resilient”，很有望合入。（https://github.com/agentscope-ai/QwenPaw/issues/6841）
- **会话标题自动刷新**：#6881 请求 auto-memory 更新后自动刷新会话标题。（https://github.com/agentscope-ai/QwenPaw/issues/6881）

## 7. 用户反馈摘要

- **Docker 版本体验创伤**（#6782）：“插件市场、应用市场始终提示维护中，无法使用”——中文用户占比高，影响插件生态吸引力。需尽快验证 Docker 版本中的应用市场连通性。（https://github.com/agentscope-ai/QwenPaw/issues/6782）
- **被安全软件误杀**（#6847）：“Qwenpaw 在执行任务的时候，经常会被杀软拦截，甚至强制关停 Qwenpaw 进程”。这是桌面 Agent 产品常见的信任建立问题，可考虑补充数字签名、降低可疑行为模式。（https://github.com/agentscope-ai/QwenPaw/issues/6847）
- **MCP 工具名与参数处理困惑**（#6405 / #6839）：“tool 名字变成 `[mcp-key]__[tool_name]`，但总提示找不到”“总是将像数字的字符串以数字格式传参，导致调用失败”——MCP 兼容性是 2.0 升级后最大的用户失分点之一。（https://github.com/agentscope-ai/QwenPaw/issues/6405 / https://github.com/agentscope-ai/QwenPaw/issues/6839）
- **任务耗时展示与心理预期偏差**（#6826 / #6585）：“实际思考耗时 2min，但页面显示仅几秒”“字符不断变动闪的眼睛疼”——用户对“真实状态可见性”有强烈需求，希望 UI 呈现更诚实的进度反馈。
- **对产品方向的正向反馈**：用户称赞项目“非常不错”（#6585），同时基于桌面端使用体验积极提功能建议（#4634、#6876），说明核心用户群对 CoPaw 粘性较强，愿意参与共建。

## 8. 待处理积压

以下为开放时间较长、当前仍处于打开状态且响应度较低的 Issue / PR，建议维护者关注：

- **#4237 [Feature] In-chat observability for running shell commands**（创建于 05-12，62 天未关闭）——功能需求完整度高，若能纳入后续版本将显著提升专业用户对 Shell 工具的可控性。（https://github.com/agentscope-ai/QwenPaw/issues/4237）
- **#4634 [Feature Request] 窗口大小和位置记忆**（创建于 05-22，54 天未关闭）——低实现成本、高频触达的小功能。（https://github.com/agentscope-ai/QwenPaw/issues/4634）
- **#5992 [PR] Add per-session model overrides**（创建于 07-12）——实现“单 Agent 不同会话使用不同模型”的核心功能扩展，等待 review 中，已经一个月以上。（https://github.com/agentscope-ai/QwenPaw/pull/5992）
- **#6405 [Question] MCP 工具总是提示 Tool not found**（创建于 07-23）——虽然是 Question 但背后是不少人遇到的升级稳定性问题，后续有 4 条讨论但无官方结论。（https://github.com/agentscope-ai/QwenPaw/issues/6405）
- **#6398 / #6399 ReMe reranker 前后端 PR**（创建于 07-23）——后端已关闭，前端 #6399 仍在“Under Review”，考虑到这属于 ReMe4 路线图关键能力，建议推动合入。（https://github.com/agentscope-ai/QwenPaw/pull/6399）
- **#6764 [PR] feat(ci): gate main mergeability on tests**（创建于 08-06）——防止主分支测试变红仍可合并的问题，对工程质量有长期价值，等待合并与规则集导入。（https://github.com/agentscope-ai/QwenPaw/pull/6764）

---

*本日报基于 2026-08-11 当日 GitHub 数据生成，所有链接均指向 CoPaw 仓库（github.com/agentscope-ai/CoPaw，Issues/PRs 页面）。数据指标反映过去 24 小时的项目动态。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 — 2026-08-11

## 今日速览

过去 24 小时项目活跃度极高：共 50 条 Issue 更新、50 条 PR 更新，但消化速度明显滞后——仅关闭 1 条 Issue、合并/关闭 2 条 PR，积压持续扩大。安全审计驱动的高优先级问题大量涌入，目前仍有 10+ 条 `priority:p1` 及 2 条 S0 级（数据丢失/安全风险）Issue 处于开放状态，且多数尚无对应修复 PR。社区讨论重心集中在 RFC 治理流程重构和配置能力补全上，项目正处在「安全加固 + 治理提效」的双线程爬坡阶段。无新版本发布，整体处于 0.8.x 迭代周期的高频修复期。

---

## 项目进展

今日合并/关闭的 PR 数量有限，但释放了两个信号：

- **[PR #9904](https://github.com/zeroclaw-labs/zeroclaw/pull/9904)（已合并）**：chore(security): ignore RUSTSEC-2026-0247 (bitmaps unmaintained)。RustSec 公告 `bitmaps` 仓库已归档且无安全升级路径，项目通过 ignore 策略先行解除 CI 阻断，属于临时性缓解措施。相关依赖的长期替换方案值得后续跟踪。
- **[PR #8301](https://github.com/zeroclaw-labs/zeroclaw/pull/8301)（已关闭）**：test(hardware): cover catalog tool name format。为硬件目录工具名格式添加回归测试，纯测试变更，无生产代码影响。

其余 48 条 PR 仍处于待合并状态，其中大量 `needs-author-action` 标签的 PR 等待作者回应，合并瓶颈不在维护者审查，而在贡献者侧的迭代跟进。项目整体今日向前推进的幅度较小，但安全维护动作（RUSTSEC 处理）和测试基建的补强仍在持续。

---

## 社区热点

**#6808 — RFC: Work Lanes, Board Automation, and Label Cleanup（[Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)）｜评论 23 条**

今日最热 Issue。该 RFC 已迭代至 Rev. 24，讨论围绕看板自动化、工作流泳道（Work Lanes)以及标签清理展开，本质诉求是**降低维护者手工路由负担**。评论数持续攀升说明社区对治理效率提升有强烈共识，但裁决仍在推迟（Ratification deferred），落地周期较长。

**#7100 — RFC: Per-model capability & context-window config（[Issue #7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)）｜评论 13 条**

模型能力（vision）、上下文窗口、运行预算和 UI 展示的数据来源长期不一致——Provider 家族默认值可能对单模型误报 vision 支持，未设置的 alias 回退到 32K token 但实际模型可能支持更多。该 RFC 提出统一的 per-model 配置层，反映用户对**多模型混用场景下配置精细度**的刚需。

**#8692 — Maintainer decision queue tracker（[Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）｜评论 12 条**

面向维护者的 RFC/设计问题决策队列跟踪器，与 #6808 形成呼应。大量 RFC 积压待裁决，社区正在通过流程工具化来缓解治理瓶颈。

**#9397 — RFC: Treat empty WhatsApp allowed_groups as permit-none（[Issue #9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)）｜评论 12 条**

安全相关 RFC：当前 WhatsApp Web 频道 `allowed_groups` 为空列表时默认放行所有群组，提案改为「空列表 = 全部拒绝」。该讨论热度高，说明用户对频道安全默认值的敏感度正在上升，并与今日多条安全审计 Issue 形成同频共振。

**共性分析**：四个热点议题两个指向治理流程、两个指向配置/安全语义——社区当前的主要矛盾是**项目规模扩大后决策效率下降**，以及**安全边界需要更严格的默认值**。

---

## Bug 与稳定性

### S0 — 数据丢失/安全风险

| Issue | 描述 | 状态 |
|---|---|---|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | Knowledge graph 无 per-agent 归属，任意 agent 可读写其他 agent 的知识 | 开放，in-progress，暂无 fix PR |
| [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | Matrix 频道直构 homeserver URL，绕过 `.well-known/matrix/client` 标准发现机制（8/9 新建） | 开放，accepted，暂无 fix PR |

### S1 — 工作流阻断

- **[#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425)**：运行中的 SOP 作业无取消/停止入口，Web 仪表盘只能查看无法干预。`in-progress`。
- **[#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)**：Docker Compose 部署后 gateway 仍绑定 loopback，端口映射后连接被拒。`in-progress`。
- **[#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231)**：Docker runtime 命令被嵌套在第二层 Docker 沙箱中执行，导致自定义配置下工作流不可用。`in-progress`。

### 安全审计系列（`priority:p1`、`domain:security`）

今日集中暴露了多条由同一审计者（belumume）提交的安全问题，均有详细代码定位，但**全部尚无对应修复 PR**：

- **[#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393)**：Bluesky 和 Reddit 频道无发送者授权，且无中央网关覆盖。
- **[#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395)**：插件 wasi:http 出站请求无目标策略限制。
- **[#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)**：LINE 群消息绕过 allowlist 与配对握手。
- **[#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389)**：未认证的 `POST /api/pair` 接口将速率为限制建立在攻击者可控 header 上。
- **[#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)**：命令审计日志默认「启用」但实际不写入任何内容。
- **[#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627)**：git 通过 `-C`/`--git-dir` 等全局选项绕过风险分类器与审批门。

### S2/S3 及流程类

- **[#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)**：daemon reload 未挂载在 SIGUSR1 上，降级安全警告提示的信号实际会杀死 daemon（S2）。
- **[#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796)**：`cron --help` 中 add-at/add-every/once 示例仍为无效写法（S2）。
- **[#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)**：`[sop] sops_dir` 文档声称有默认值，但 daemon 以 `is_some()` 门控整个 SOP 子系统，导致静默不加载。
- **[#9844](https://github.com/zeroclaw-labs/zeroclaw/issues/9844)**：Dashboard CPU 指标展示的是 daemon 进程数据，而非 ZeroCode 自身（S3）。

---

## 功能请求与路线图信号

**可能纳入下一版本（已有对应实现中 PR）**：

- **[#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) → [PR #9583](https://github.com/zeroclaw-labs/zeroclaw/pull/9583)**：在 CI 中对 rustdoc 警告设门禁。PR 采用 `.cargo/config.toml` 统一注入 `-D warnings` 的方式，已进入 lint job，落地概率高。

**处于 `in-progress` 状态、方向明确的功能**：

- **[#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)**：Codex CLI `extra_args` 削弱沙箱时给出警告。安全与可用性的平衡，已进入实质推进。
- **[#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339)**：为远程 MCP 服务器支持自定义 CA 证书。企业内网私有 CA 场景的刚需。
- **[#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345)**：PR 每次更新时自动重算 `size:*` 与 `risk:*` 标签，减少维护者手工维护成本。

**设计/文档类**：

- **[#9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047)**：明确 ZeroCode Code 面板会话历史与 agent 持久记忆的隔离关系。
- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)**（RFC）与 **[#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)**（RFC 流程精简）：若通过，将显著改善治理效率，进而加速其他积压 RFC 的裁决。

---

## 用户反馈摘要

- **RFC 流程过重**：社区在 [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) 中直指现行流程「比它要服务的决策本身更慢、更笨重」——7 天讨论期 + 广泛一致同意要求 + 人工投票统计，已经拖累架构决策速度。
- **文档与实现不一致带来的挫败感**：`sops_dir` 默认值不生效（[#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)）、cron 帮助文本示例错误（[#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796)）、Matrix 不走标准发现协议（[#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855)）——用户在配置/部署阶段反复踩坑，属于**可感知的工程成熟度短板**。
- **部署受阻的「最后一公里」**：Docker Compose 端口不可达（[#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)）和 Docker 嵌套沙箱（[#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231)）直接阻断用户上手，severity 均为 S1，应优先处理。
- **本地小模型体验不佳**：[#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) 反馈 Ollama + llama3.2 场景下 ZeroCode 将用户问候误判为协议/日志载荷，本地轻量模型的 Prompt 构造仍有优化空间。
- **WebChat 交互细节**：[#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) 指出流式输出时自动滚动覆盖用户手动滚动，浏览历史内容体验受阻。

---

## 待处理积压

### 长期未合并的 `needs-author-action` PR（等待作者响应，维护者侧已就绪）

| PR | 内容 | 风险 | 等待时长 |
|---|---|---|---|
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | file_download SSRF 门新增 `allowed_private_hosts` 白名单开关 | high | 7/4 创建，已超 5 周 |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | 网关新增 OpenAI Chat Completions 端点（XL 级变更） | high | 6/29 创建，已超 6 周 |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron 作业增加墙钟超时并释放锁 | high | 7/23 创建 |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 保持 agent turn 在 viewer 断开后继续运行 | high | 7/11 创建 |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | Matrix single_message 流式进度草稿（XL） | high | 6/28 创建 |

### 已标记 `stale-candidate` 的 PR（濒临关闭风险）

- **[#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546)**：CLI 状态片段本地化，`p3`，6/30 创建。
- **[#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576)**：OpenAI STT 凭据支持环境变量回退（#7899 的修复），7/1 创建。
- **[#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655)**：ZeroCode Code 面板整合重构（XL），7/3 创建。

### 长期开放未解决的高优 Issue

- **[#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842)**：Codex CLI 沙箱弱化警告，4/17 创建，已近 4 个月，仍为 `in-progress`。
- 6 条 `priority:p1` 安全审计 Issue（[#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393)、[#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395)、[#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)、[#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389)、[#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)、[#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627)）自 7/26 起陆续提交，历经两周仍无对应修复 PR，建议维护者优先分配人力或明确排期。

---

**项目健康度小结**：社区活跃度高、问题反馈质量好（尤其安全审计系列附详细代码定位），但 Issue 关闭率（2%）、PR 合并率（4%）均偏低，叠加 10+ 条高危安全项无修复 PR，项目正处于「高速发现问题、低速消化问题」的失衡期。建议下阶段优先合并 [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)（SSRF 修复）并推动安全审计系列进入修复排期，同时加快 RFC 治理改革以疏通决策通道。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*