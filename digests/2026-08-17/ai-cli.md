# AI CLI 工具社区动态日报 2026-08-17

> 生成时间: 2026-08-17 01:41 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告 — 2026-08-17


## 一、生态全景

当前 AI CLI 工具生态已进入**多工具并存、快速迭代的成熟竞争期**。各工具的核心关注点高度趋同：性能与稳定性（Windows 输入卡顿、终端渲染回归）、MCP 协议兼容性、会话/上下文管理、subagent 可观测性与可靠性。安全问题（PII 脱敏、配额计费、沙箱权限）正在从辅助话题上升为核心诉求。值得注意的分化信号是：大厂工具（Claude Code、Codex、Gemini CLI）在修复回归与完善生态，而开源/半开源工具（OpenCode、Pi、Qwen Code、CodeWhale）则以更高的迭代频率推进架构级演进。整体来看，**执行可靠性与透明度**取代功能数量成为社区第一诉求。


## 二、各工具活跃度对比

| 工具 | 更新 Issues 数 | 更新 PR 数 | Release 情况 | 社区热度信号 |
|------|------|------|------|------|
| Claude Code | 10+ | 3 | 无新版本 | #18435 获 730 👍（多账户管理） |
| OpenAI Codex | 50+ | 15（约 12 个已合入） | 无新版本（最新 26.810.x） | Windows 卡顿 3 个 Issue 累计 120+ 👍 |
| Gemini CLI | 10+ | 10+ | v0.56.0-nightly（含 1 个 tsconfig 修复） | P1 Bug 集中：Subagent 误报、通用代理挂起 |
| Copilot CLI | 10 | 未明确 | 无新版本 | 1.0.80 OAuth 回归（#4490） |
| Kimi Code CLI | 4 | 3（1 个已合并） | 无新版本 | PR #864 `--starting-prompt` 已合并 |
| OpenCode | 10 | 10+（部分已合入） | 无新版本 | Ctrl+C 退出问题 49 👍 持续发酵 |
| Pi | 10 | 10+（多数已合入） | 无新版本 | 模型目录校准 + Token 计费修复为双主线 |
| Qwen Code | 10 | 10+ | v0.21.11-nightly（autofix 门控 + E2E 回归通过） | 多智能体批量 P2 Bug 集中爆发 |
| DeepSeek TUI (CodeWhale) | 10 | 10+ | v0.9.8 正式版；品牌化为 CodeWhale | 5 个新 PR 聚焦"诚实性"修复 |


## 三、共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **Subagent 可观测性与可靠性** | Claude Code、Codex、Gemini CLI、Qwen Code、CodeWhale | 子代理终止原因正确上报（Gemini #22323）、subagent 轨迹可分享（Gemini #22598）、subagent 级 model/effort 实时可见（Claude Code #72287）、subagent 配额耗尽（Codex #35463）、子代理行为不可控（Gemini #22093）、角色与实际权限脱节（CodeWhale #5123） |
| **会话管理 UX** | Claude Code、Codex、Kimi CLI、OpenCode、Copilot CLI | 会话删除/重命名/分组/排序（Claude Code #72185、Kimi #1783、OpenCode #42940）、多账户/多 Profile 切换（Claude Code #18435）、会话按工作区隔离（Codex #25319）、恢复会话保留原 Agent（Copilot #4489）、会话恢复后连接 ID 失效（Copilot #4505） |
| **Windows 平台稳定性** | Codex、Copilot CLI、Kimi CLI、Pi、OpenCode | 输入延迟/冻结（Codex #20214/#38546/#28855）、MCP OAuth socket 10013（Copilot #4463）、插件更新文件锁（Copilot #4488）、PowerShell 跨盘符路径错误（Kimi #2600）、Windows 终端击键换行（Pi #6300） |
| **MCP 协议兼容性** | Claude Code、Copilot CLI | draft-07 outputSchema 被拒（Claude Code #86142）、EmbeddedResource 丢失（Claude Code #72271）、OAuth issuer 不匹配回归（Copilot #4490）、并发令牌刷新竞态（Copilot #4472） |
| **安全与合规** | Claude Code、Gemini CLI、Codex、CodeWhale、Qwen Code | PII/Secrets 脱敏（Claude Code #72156、Gemini #26525）、权限配置静默忽略（Codex PR #38919）、破坏性命令自我保护（Gemini #22672）、autofix 与不可信代码共享主机（Qwen Code #9089）、沙箱挂载灵活性（CodeWhale #5456） |
| **终端渲染兼容性** | Claude Code、Pi、Qwen Code、CodeWhale | tmux 渲染乱码（Claude Code #74122）、tmux 严重闪烁（Qwen Code #8962）、宽屏渲染不铺满（CodeWhale #5322/#5436）、终端无故回滚（Pi #5023） |
| **上下文/配额管理** | Claude Code、Pi、Copilot CLI、Codex | 上下文预算忽略输出 token 预留（Pi #8061）、内存看门狗误触发压缩至 OOM（Copilot #4506）、缓存 token 计费偏差（Pi #8218/#8119）、1M 上下文窗口不可用（Codex #38917） |
| **计费与配额透明度** | Codex、OpenCode、Pi、CodeWhale | 子代理一夜耗尽整周配额（Codex #35463）、付费余额被免费额度限制拦截（OpenCode #33318）、付费模型全部失败（OpenCode #36506）、配额重置日期异常（Codex #38900）、会话成本显示"诚实化"（CodeWhale #5450/#5459） |
| **崩溃/卡死类稳定性** | OpenCode、Gemini CLI、Qwen Code、CodeWhale | 流错误后无限卡 "thinking"（OpenCode #32366）、通用代理挂起（Gemini #21409）、Shell 执行后卡 "Waiting input"（Gemini #25166）、TUI 崩溃自动退出（CodeWhale #5424）、agent-tab 渲染错误致会话崩溃（Qwen Code #9290） |


## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特色 |
|------|---------|---------|-------------|
| **Claude Code** | MCP 生态完善、桌面端体验、TUI 精细打磨 | 重度 Claude 用户、桌面端团队协作 | 最大的社区关注基数（730👍 级别的需求）和成熟插件体系；当前在协议兼容性和回归修复上投入较多 |
| **OpenAI Codex** | 桌面应用、TUI 体验、IDE 集成 | Windows 桌面端开发者、VS Code 用户 | 问题点集中在桌面端稳定性；PR 迭代节奏快（一天合入 12 个 PR）；`codex doctor` 网络诊断强化为差异亮点 |
| **Gemini CLI** | Subagent 执行可靠性、Auto Memory 记忆系统 | 使用 Google 模型的 agentic 开发者 | 有明确 P1/P2 问题分级体系；引入 "SSR Agent"（自动修复代理）批量解决历史问题，是该生态独有的工程化模式 |
| **Copilot CLI** | MCP OAuth 认证链路、会话生命周期 | GitHub 生态深度用户 | 插件依赖管理、并发刷新锁等工程细节最受关注；回归测试与并发控制是当前短板 |
| **Kimi Code CLI** | 基础 CLI 功能完善 | 轻量用户、中文开发者 | 社区规模最小；功能诉求集中在 Session 管理入口缺失、跨盘符兼容性等基础体验；记忆层建设对标 OpenClaw 分层体系 |
| **OpenCode** | V2 架构打磨、Web UI、终端 UX | 多设备/远程开发用户 | V2 版本处于密集稳定性打磨期（无头命令加载库、临时文件泄漏）；付费模型可用性与计费逻辑引发信任危机；自动化 PR 清理流程获社区认可 |
| **Pi** | 模型目录校准、多供应商 API 聚合、扩展生态 | 重度多模型用户 | 最多样化的模型供应商接入（GLM、Qwen、Kimi、xAI、MiniMax 等）；令牌计费准确性（缓存 token 1/120 计费）是差异化技术深度 |
| **Qwen Code** | 多智能体协作、`/review` 评审管线自动化 | 阿里生态、SWE-bench 基准关注者 | 唯一每日发布 nightly 并附带 E2E 基准回归（SWE-bench Verified 500/500 通过）的工具；多智能体协作仍处"能跑但不可靠"阶段 |
| **DeepSeek TUI (CodeWhale)** | TUI"诚实性"、bwrap 沙箱、国际化 | Linux 系统级开发者、DeepSeek 生态用户 | 品牌化后进入快速迭代期；"估算数字标注来源 + 可配置"是独特的 UI 哲学；沙箱深度可调 + 多语言文件对照表体现工程深度 |


## 五、社区热度与成熟度

**成熟期工具（社区规模大、需求集中在体验精细化与回归修复）：**

- **Claude Code** — 社区基数最大，760+ 高赞需求持续发酵；议题从功能新增转向协议兼容与回归修复，是典型的成熟期特征。
- **OpenAI Codex** — Issues 和 PR 活跃度双高（50+ Issues / 15 PR），但核心痛点（Windows 卡顿）存在 4 个月未解决，已出现"投诉疲劳"风险。
- **Copilot CLI** — 活跃度中等，问题集中在 OAuth 认证与 Windows 平台，虽无新版本但修复已跟进。

**快速迭代期工具（版本节奏快、架构级演进仍在进行）：**

- **Gemini CLI** — 每日 nightly 发布 + "SSR Agent"自动化修复模式，工程化程度高，但 Subagent 可靠性与挂起问题密集暴露。
- **OpenCode** — V2 架构处于打磨期，高频合入 PR 但稳定性痛点（卡死、付费模型故障）集中。
- **Qwen Code** — 每日 nightly + 完整 E2E 基准回归，多智能体处于"能跑但不可靠"阶段，社区反馈密度高。
- **CodeWhale (DeepSeek TUI)** — 品牌化后迭代极快，v0.9.8 发布 + 5 个"诚实性"修复 PR + 架构级统一 Hook 提案并行推进；宽屏渲染、sudo 等连续 v0.8→v0.9 回归表明还处于稳定性爬坡期。
- **Kimi CLI** — 社区规模最小、活跃度有限，但合并了有价值的 `--starting-prompt` 功能；基础体验问题（Session 管理、跨盘符）仍有大量待办。
- **Pi** — 活跃且聚焦；模型目录校准与 Token 计费精确度是差异化优势，扩展 API 健壮性（并发竞态、事件生命周期）处于完善阶段。


## 六、值得关注的趋势信号

**1. 可观测性成为第一优先级。"诚实性"是新的竞争力指标。**
CodeWhale 的"诚实性"修复（上下文窗口、成本显示标注来源与配置键）与 Codex 的 `codex doctor` 网络诊断增强（#38918/#38827）、Gemini 对 Subagent 终止原因正确上报（#28815）指向同一方向：**用户不再接受估算值或静默失败，要求可追溯、可验证、可配置**。开发者做工具选型时应重点考察各工具的日志透明度与错误上报机制。

**2. MCP 协议兼容性是最大的生态摩擦点。**
Claude Code 与 Copilot CLI 同时在 MCP 层遭遇问题（draft-07 拒绝、OAuth issuer 不匹配、并发刷新竞态、socket 10013），说明 MCP 标准仍处于快速演进的早期阶段。**建议关注 MCP 兼容矩阵并预留协议适配层**。

**3. Subagent 从"能跑"到"可靠"是下一阶段竞争焦点。**
Gemini（误报成功、挂起）、Qwen Code（任务派发、提示词矛盾）、CodeWhale（工具契约与角色不符）、Codex（配额耗尽）在同一维度上暴露问题。Subagent 的**执行透明度、终止语义、资源配额控制**是当前最脆弱也最有空间的部分。

**4. 计费精确度正在成为信任分水岭。**
Pi 修复缓存 token 按 1/120 计费却按全额计入 totals（#8218）、Kimi 的 `cached_tokens` 归类（#8119）、Codex 的子代理一夜耗尽配额（#35463）、OpenCode 的付费余额被免费额度拦截（#33318）——四起计费问题横跨不同工具生态。**定价透明度与用量统计准确性直接影响付费意愿，开发者需对工具的实际消耗有预期管理手段**。

**5. Windows 桌面端稳定性集体欠债。**
Codex（输入卡顿三部曲）、Copilot（文件锁/socket 错误）、Kimi（跨盘符路径）、Pi（Windows 终端换行）、Claude Code（AskUserQuestion 误触）——几乎所有大型工具都在 Windows 端有未解决的核心体验问题。**对 Windows 重度用户而言，当前没有完美的开箱即用选择**。

**6. 自动化修复代理（SSR Agent）成为新的工程模式。**
Gemini CLI 的 "SSR Agent" 已批量修复跨区域历史 Issue，OpenCode 的 automated-pr-cleanup 也获得社区认可。这一模式预示 AI CLI 工具自身的开发运维正在被 AI 原生工作流渗透。


**给技术决策者的核心建议：** 短期选择，优先考虑可观测性与错误恢复能力（宁可报错也不要无声卡死）；中期布局，为 MCP 兼容性和多模型供应商预留抽象层（参考 Pi 的模型目录设计）；长期关注，Subagent 资源配额与执行透明度的能力差异将成为工具分化的重要分水岭。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-08-17）

## 一、热门 Skills 排行（按社区关注度）

| # | Skill（PR） | 功能 | 社区热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评测修复**（#1298） | 修复 `run_eval.py` 恒报 0% recall 的问题，使描述优化循环不再对抗噪声 | 该问题已有 #556 等 10+ 独立复现，是 skill-creator 生态最痛的点；涉及 Windows 流读取、触发检测和并行 worker 三个层面 | OPEN |
| 2 | **document-typography**（#514） | 生成文档的排版质量控制：孤字换行、孤儿段落、编号错位 | 直击 AI 生成文档的普遍痛点；与已有 docx/pdf 等文档类 skill 形成互补 | OPEN |
| 3 | **frontend-design 重构**（#210） | 重写前端设计 skill，提升指令清晰度和可执行性，确保单次对话内可操作 | 社区对 skill "人味重、机器味轻" 的普遍诉求（同 #202 对 skill-creator 的批评） | OPEN |
| 4 | **skill-quality-analyzer + skill-security-analyzer**（#83） | 两个元技能：五维度质量评估（结构/文档/示例/资源/…）+ 安全分析 | 呼应社区对 skill 质量和安全的双重关切（尤其 #492 的信任边界问题） | OPEN |
| 5 | **self-audit 推理质量门**（#1367） | 交付前审计：先做机械性文件验证，再做四维度推理审计（按损害严重性排序） | 与 #1385（三阶段质量门管线提案）呼应，体现社区对输出质量治理的系统性思考 | OPEN |
| 6 | **ServiceNow 平台 skill**（#568） | 覆盖 ITSM/ITOM/ITAM/SecOps/FSM/SPM/CSDM/IntegrationHub 的广义平台助手 | 企业级平台覆盖的典型代表；更新至 8/12，仍在活跃迭代 | OPEN |
| 7 | **testing-patterns**（#723） | 全栈测试模式：Testing Trophy 模型、单元测试 AAA 模式、React 组件测试 | 补全了官方集合中测试领域的空白，覆盖"测什么 vs 不测什么"的决策框架 | OPEN |
| 8 | **pyxel 复古游戏开发**（#525） | 配合 pyxel-mcp，支持 Python 像素风/8-bit 游戏的工作流（写→运行→截屏→迭代） | MCP server 与 skill 结合的范例，开发周期较长（3月至今）仍在演进 | OPEN |

## 二、社区需求趋势（来自 Issues）

1. **安全与信任治理**（#492，43 评论）：社区强烈关注以 `anthropic/` 名义分发的社区 skill 冒充官方带来的信任边界滥用——这是当前评论量最高的 Issue，也是整个生态最紧迫的系统性风险。

2. **组织级共享与分发**（#228，16 评论）：要求支持组织内直接共享 skill 库或分享链接，而非目前"下载 .skill 文件 → Slack/Teams 传输 → 手动上传"的低效路径。

3. **触发评测可靠性**（#556，12 评论）：`claude -p` 从不触发 skill/command（所有查询 0% 触发率），直接质疑 skill-creator 的自动化闭环是否可信。

4. **去重复与规格合规**（#189，6 评论）：`document-skills` 和 `example-skills` 两个插件内容相同导致重复安装；新生 PR #1538 正在推动两个 skill 回归 Agent Skills 规范（name 字段与目录不匹配）。

5. **上下文窗口效率**（#1487，4 评论）：`claude-api` skill 单次注入约 156k tokens，直接耗尽上下文窗口——用户需要的是按需加载而非贪心注入的设计原则。

6. **新方向提案**：#1329 compact-memory（符号化压缩 agent 状态，降低长对话上下文占用）、#412 agent-governance（AI agent 系统的策略执行/威胁检测/信任评分/审计追踪）、#16 将 Skills 暴露为 MCP 协议接口——后两者尚未关闭，仍可参与讨论。

## 三、高潜力待合并 Skills（近期可能落地）

- **skill-creator 修复链**（#1298、#1099、#1050）：三个 PR 分别修复 Windows 子进程、编码和触发检测问题。社区对该生态位的修复意愿极强（#556 + 多个 PR），是合并概率最高的方向。🔗 [#1298](https://github.com/anthropics/skills/pull/1298) | [#1099](https://github.com/anthropics/skills/pull/1099) | [#1050](https://github.com/anthropics/skills/pull/1050)

- **testing-patterns**（#723）：官方集合缺少测试类 skill，填补空白且设计完整，社区讨论积极。🔗 https://github.com/anthropics/skills/pull/723

- **self-audit**（#1367）：已进入 v1.3.0，且有配套提案 #1385 讨论三阶段质量门管线，说明作者在持续推进。🔗 https://github.com/anthropics/skills/pull/1367

- **ServiceNow**（#568）：大型企业平台 skill，8 月仍在更新，维护活跃度高。🔗 https://github.com/anthropics/skills/pull/568

- **document-typography**（#514）：小而有价值的补丁型 skill，文档质量是普遍痛点，合并成本低。🔗 https://github.com/anthropics/skills/pull/514

- **ODT 格式支持**（#486）：补全 OpenDocument 格式族（.odt/.ods），与既有 docx/pdf 形成完整文档矩阵。🔗 https://github.com/anthropics/skills/pull/486

- **plan-file-hygiene**（#1479）：解决规划产物无生命周期的累积问题，对应 #1417；问题定位精准，社区有明确共识。🔗 https://github.com/anthropics/skills/pull/1479

## 四、Skills 生态洞察

社区当前最集中的诉求是 **"让 skill 生态可信、可测、可控"**——对外防范冒充官方 skill 的信任边界滥用（#492），对内要求评测闭环真正有效（#556 及其修复 PR 链）、上下文按需加载（#1487）、重复内容去重合并（#189），并推动 skill 归回规格标准（#1538）——一句话：**不是缺更多功能，而是缺质量保证机制和治理基础设施。**

---

# Claude Code 社区动态日报 — 2026-08-17

## 今日速览

今日无新版本发布，社区讨论热度主要集中在多账户管理需求（#18435，已获730个👍）、MCP 协议兼容性问题（draft-07 被拒、EmbeddedResource 丢失）以及 TUI 在特定终端/复用器下的渲染回归。功能需求层面，会话管理体验（排序、重命名、分组、清理）与 subagent 可观测性成为高频诉求；安全与上下文管控（PII 脱敏、全局感知超限）也引发关注。

## 社区热点 Issues

以下为今日更新中最值得关注的 Issue（按关注度与影响面排序）：

1. **[#18435] [FEATURE] 在 Claude Desktop 中管理多个 Claude 账户并支持轻松切换**（👍 730，评论 167）
   长期悬而未决的高赞需求，支持多账户/多 Profile 切换，解决团队和多重身份用户的核心痛点。社区讨论热度极高，是当前社区最期待的桌面端功能。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/18435)

2. **[#86142] MCP 服务器声明 draft-07 outputSchema 即被拒绝："unsupported dialect"**（评论 11）
   macOS 平台 bug，MCP 服务器只要声明 draft-07 的 outputSchema，会在客户端分发前被整段拒绝，服务器完全不可用。直接影响大量依赖旧版 JSON Schema 的既有 MCP 生态兼容。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/86142)

3. **[#70062] [BUG] 'claude-api' skill 消耗整个上下文**（评论 11）
   Linux 平台已复现，某 skill 将所有上下文吞掉，导致会话无法继续，影响实际使用。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/70062)

4. **[#71547] AskUserQuestion 对话框鼠标单击即自动提交，无确认步骤**（👍 21，评论 10）
   TUI/IDE 集成中误触风险高，单击不经确认直接提交答案，容易造成误操作。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/71547)

5. **[#74122] [BUG] TUI 在 tmux 内渲染乱码（v2.1.200 回归）**（评论 8）
   macOS 回归 bug：v2.1.200 起 TUI 在 tmux 内文本损坏、无法自动重绘，只有强制刷新（切 pane 或 resize）才恢复。重度 tmux 用户受影响明显。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/74122)

6. **[#71700] Kitty 键盘协议用终端名白名单而非 CSI ? u 能力探测，Alacritty 被误伤**（评论 8）
   Linux 平台已复现：应依据 CSI ? u 能力声明启用协议，而非按终端名做白名单，导致支持该协议的 Alacritty 被拒绝。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/71700)

7. **[#72156] /feedback 提交前应允许对 PII/Secrets 进行脱敏/审计**（评论 9）
   安全增强：反馈机制可能附带敏感信息，社区呼吁在提交前进行脱敏或 scrubbing 处理。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/72156)

8. **[#75392] `claude plugin install --scope project` 覆盖 installed_plugins.json 而非合并**（评论 8）
   macOS 回归 bug：项目级插件安装时直接覆盖配置文件，导致已有插件丢失。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/75392)

9. **[#76870] LSP 工具静默返回不完整结果（冷索引竞态 + 文件状态过期）**（评论 6）
   首次查询早于语言服务器完成索引即返回截断结果；另有文件状态过期问题。需两项独立修复。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/76870)

10. **[#72181] 桌面应用无法从 "Recent" 文件夹列表移除条目**（👍 15，评论 7）
    Windows 桌面端 UI 缺陷：旧项目路径无法清理。
    [查看 Issue](https://github.com/anthropics/claude-code/issues/72181)

## 重要 PR 进展

今日仅 3 个 PR 更新，均为 8 月 16 日创建：

1. **[#87125] Create python-package-conda.yml** — 新增 conda 打包工作流。
   [查看 PR](https://github.com/anthropics/claude-code/pull/87125)

2. **[#87079] fix(security-guidance): 使 ** glob 模式匹配零深度路径** — 修复 `**/*.ts` 无法匹配顶层文件导致安全规则静默失效的问题。
   [查看 PR](https://github.com/anthropics/claude-code/pull/87079)

3. **[#87077] fix(pr-review-toolkit): 修复所有 agent 中无效的 YAML frontmatter** — 未加引号的标量包含冒号被解析为嵌套映射，导致 agent 加载元数据为空。
   [查看 PR](https://github.com/anthropics/claude-code/pull/87077)

## 功能需求趋势

从全部 Issues 提炼的社区主要功能意向：

- **桌面端体验增强**：多账户切换（#18435）、Recent 列表清理（#72181）、侧边栏分组手动排序（#72126）、Pinned/Recents 侧栏（#72366）——会话管理是桌面端最大诉求。
- **会话管理 UX**：会话排序、搜索、重命名、删除（#72185），消息队列计数显示（#72232）。
- **可观测性**：subagent 级 model/effort 实时可见（#72287）、"Watch live run" 链接 traceback 不清晰（#84567）。
- **MCP 生态与协议完善**：支持 draft-07 outputSchema（#86142）、Anthropic API content blocks 转发 EmbeddedResource（#72271）、honor MCP Annotations.Audience（#72239）。
- **Hook 与权限系统**：UserPromptSubmit 支持 "handled" 决策（#72327）、additionalDirectories 支持 glob（#72138）、更多频率的本地 routines（#72152）、/feedback 集成 GitHub Issue（#72155）。
- **安全与上下文管理**：库 PII/Secrets 脱敏（#72156）、上下文超限保护（#70062）。

## 开发者关注点

- **回归问题高发**：TUI 在 tmux 渲染乱码（#74122）、插件安装覆盖配置（#75392）均为近期版本回归，社区对稳定性有较高期待。
- **终端兼容性**：Kitty 键盘协议按名称白名单而非能力探测（#71700），期望尊重标准能力声明而非硬编码终端名。
- **TUI 交互与误触**：AskUserQuestion 单击即提交（#71547）、Plan mode 解释被自动弹出覆盖（#72320）。
- **静默失败与不透明性**："Watch live run" traceback 不清晰（#84567）、LSP 静默截断（#76870）、--cloud 创建 bundled session 而非绑定 GitHub（#81776），皆反映开发者对执行透明度的高要求。
- **上下文与权限安全**：skill 吞上下文（#70062）、反馈含 PII（#72156）、安全 glob 静默失效（#87079），代理自主性与审计能力是核心关注。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-17

## 1. 今日速览

过去 24 小时虽无正式版本发布，但社区活跃度极高：总共跟踪到 50+ 个更新的 Issues 和 15 个 PR。**Windows 平台桌面应用的系统级输入延迟/卡顿问题成为今日绝对焦点**，多起高赞报告（#20214、#38546、#28855）均指向此问题，且非性能资源不足所致。维护侧通过 copyberry[bot] 在一天内合入约 12 个 PR，覆盖 TUI 体验、权限模型加固和 `codex doctor` 诊断能力增强，响应速度较快——但 Windows 卡顿这一核心痛点仍未在 PR 中看到对应修复。

## 2. 版本发布

过去 24 小时内无新版本发布（最新用户上报版本号为 26.810.x 系列）。

## 3. 社区热点 Issues（10 个精选）

### #20214 — Codex App 在 Windows 11 上频繁冻结/卡顿（106 评论，85 👍）
- **链接**: https://github.com/openai/codex/issues/20214
- **状态**: OPEN（自 4 月 29 日创建至今未关闭）
- **内容**: 用户报告在 Ryzen 5 5600 + 32GB RAM 的 Windows 11 Pro 上，最新 Microsoft Store 版本 Codex App 频繁冻结/卡顿。作者认为系统资源充足，问题疑似软件自身缺陷。
- **关注原因**: 评论数及点赞数双高，是当前社区反馈最强烈的单一问题，且持续数月未解决，已严重影响 Windows 用户信任度。

### #38546 — Windows 下以非管理员运行时引起全局鼠标卡顿（31 评论，13 👍）
- **链接**: https://github.com/openai/codex/issues/38546
- **状态**: OPEN
- **内容**: Codex/ChatGPT 桌面版（版本 26.810.41047）在非提权模式下运行会导致系统级鼠标光标严重卡顿，持续数秒。
- **关注原因**: 与 #20214 症状高度关联，但聚焦于"非管理员模式"这一具体复现条件，为维护者定位根因提供了重要线索——很可能与权限或 Windows 消息循环处理有关。

### #25319 — 将 VS Code Chat 会话作用域限定到当前工作区（29 评论，62 👍）
- **链接**: https://github.com/openai/codex/issues/25319
- **状态**: OPEN（feature request）
- **内容**: 请求 VS Code 扩展中的聊天/会话历史按当前打开的工作区/项目进行隔离，避免多个项目共享混乱的全局历史。
- **关注原因**: 62 👍 表明 IDE 集成工作流在社区中重要性极高。会话隔离是提升多项目开发者体验的关键基础设施。

### #20864 — 桌面版因扫描全部 `~/.codex/sessions` 文件而变卡（21 评论）
- **链接**: https://github.com/openai/codex/issues/20864
- **状态**: OPEN
- **内容**: 桌面应用未使用桌面可见的会话索引/状态，而是遍历全部 rollout 文件，导致应用变慢/卡顿。报告者同时拥有 Pro 和 Business 订阅，在 macOS arm64 上复现。
- **关注原因**: 直接指出性能瓶颈的架构根因，与 #20214 的表现可能互为因果，对性能修复具有高参考价值。

### #23200 — 支持无头 Linux 远程主机（18 评论，48 👍）
- **链接**: https://github.com/openai/codex/issues/23200
- **状态**: OPEN（enhancement）
- **内容**: 希望 Codex 移动端（iOS）能直接作为控制层，连接常驻的 Linux 服务器（通过 SSH），而不要求个人桌面应用保持在线。
- **关注原因**: 48 👍 位列功能请求榜首，反映开发者大量使用 SSH 服务器作为主要开发环境，移动端控制远程无头主机的需求强烈。

### #28855 — 新版桌面版引起间歇性系统输入延迟（20 评论，20 👍）
- **链接**: https://github.com/openai/codex/issues/28855
- **状态**: OPEN
- **内容**: 版本 26.611.8604.0 在 Windows 上引起间歇性全系统输入延迟，尤其在应用启动/重开及特定时段。日志干净、插件已禁用，排除外部干扰。
- **关注原因**: 与 #20214、#38546 组成"Windows 输入卡顿三部曲"，进一步佐证该问题为普遍性而非个例。

### #35463 — 子代理一夜耗尽整周配额（11 评论）
- **链接**: https://github.com/openai/codex/issues/35463
- **状态**: OPEN
- **内容**: 使用 gpt-5.6-sol 及 subagent 时，后台子代理一夜之间耗尽整周配额，且用量计数显示异常（Pro 20x 订阅）。怀疑使用量统计逻辑存在严重缺陷。
- **关注原因**:涉及计费与配额安全，属于用户最敏感的信任问题，"配额耗尽且计数异常"若属实影响恶劣。需官方尽快核实。

### #28248 — 断电后 Windows 沙箱全部读操作失败（11 评论，6 👍）
- **链接**: https://github.com/openai/codex/issues/28248
- **状态**: OPEN
- **内容**: 断电后，Windows 沙箱对所有文件读操作应用"deny-read ACL"策略，导致全部读操作失败，必须手动修复权限。
- **关注原因**: 持久化状态损坏问题，触发条件为意外断电这一常见场景，影响面广且容错性差，值得优先处理。

### #38929 — macOS 启动桌面应用瞬间拉高 mds_stores 至 250-700% CPU（新建，P0 标记）
- **链接**: https://github.com/openai/codex/issues/38929
- **状态**: OPEN（2026-08-17 创建，1 评论）
- **内容**: macOS 26.5.2 上启动 Codex 应用（26.810.52044）后，系统 mds_stores 进程（Spotlight 索引）CPU 占用飙升至 250-700%，主机完全不可用，直至强制退出应用。作者标记为 P0 级别。
- **关注原因**: 今日新建、标记为 P0，说明问题极端严重（主机级瘫痪）。虽是新报告，但一旦传播开影响面巨大，官方需立即响应。

### #38917 — 文档宣称的 1M context window 在 CLI/桌面版不可用（3 评论）
- **链接**: https://github.com/openai/codex/issues/38917
- **状态**: OPEN（2026-08-17 创建）
- **内容**: 用户引用 GPT-5.6 Sol 支持 1M token 上下文窗口的官方声明/X 帖子，但实测 Codex CLI 与桌面应用中无法启用该配置，认为文档与实现不符。
- **关注原因**: 涉及官方文档一致性与功能承诺兑现，对依赖大上下文做大型代码库分析的开发者影响重大，属高价值澄清类问题。

---

## 4. 重要 PR 进展（10 个精选）

### #38921 — TUI 成功命令活动紧凑化展示
- **链接**: https://github.com/openai/codex/pull/38921
- **亮点**: 将连续成功的 agent/unified-exec 启动命令分组显示为 `Ran N commands`，保留完整记录，在交互边界/失败后/满 32 条时自动落盘。显著提升 TUI 长会话可读性。

### #38919 — 拒绝废弃的 app-server 权限配置文件字段
- **链接**: https://github.com/openai/codex/pull/38919
- **亮点**: 安全性修复。此前反序列化会静默忽略未知字段（如已移除的 `permissionProfile`），导致客户端请求的权限设置被悄悄忽略。现在改为显式报错。

### #38918 — 改进 `codex doctor` 网络诊断
- **链接**: https://github.com/openai/codex/pull/38918
- **亮点**: 使用 Codex 路由感知的 HTTP 客户端探测推理端点（含代理/自定义 CA），并细分 TLS、代理认证、代理配置、DNS 解析、超时等故障类别。大幅提升网络排障效率。

### #38916 — 兼容旧版 `:project_roots` 权限条目
- **链接**: https://github.com/openai/codex/pull/38916
- **亮点**: 兼容性修复。重命名前的权限配置仍含 `:project_roots`，若按未知 token 处理会静默丢弃文件系统限制。现在正确识别并解析，防止权限配置降级。

### #38894 — TUI 新增工作目录切换命令
- **链接**: https://github.com/openai/codex/pull/38894
- **亮点**: 新增 `/cd [path]` 命令，支持在空闲本地会话中切换工作目录并保留会话历史、重新加载项目配置。相对路径从当前目录解析。提升 TUI 多项目操作灵活性。

### #38902 — 支持按环境生效的 shell 变量策略
- **链接**: https://github.com/openai/codex/pull/38902
- **亮点**: 每个 `EnvironmentConfig` 现在携带独立的 `ShellEnvironmentPolicy`，应用于 shell 命令、用户 shell 任务及 unified exec。此举强化了多环境下的安全边界策略隔离。

### #38837 — TUI composer 组件共享编辑器键盘映射
- **链接**: https://github.com/openai/codex/pull/38837
- **亮点**: 通过 Arc 共享编辑器部分的 RuntimeKeymap，使文本域与 composer 使用同一快照，避免自定义按键绑定在两个组件间不一致。

### #38830 — 隔离外部编辑器缓冲区与沙箱可写路径
- **链接**: https://github.com/openai/codex/pull/38830
- **亮点**: 安全加固。外部编辑器缓冲区文件可能包含 composer 当前文本，不应放入受限文件系统策略允许写入的目录。现移至受保护的 `editor` 目录下。

### #38827 — `codex doctor` 增加端点保护产品检测
- **链接**: https://github.com/openai/codex/pull/38827
- **亮点**: 自动检测 macOS 和 Windows 上常见的端点保护（EDR/杀软）产品，并说明需要验证哪些 Codex 排除项。解决安全软件干扰 Codex 但难以排查的运维痛点。

### #38893 — 独立恢复线程时间戳最大值
- **链接**: https://github.com/openai/codex/pull/38893
- **亮点**: 修复状态初始化逻辑：使用独立标量子查询分别加载 `updated_at_ms` 和 `recency_at_ms` 的最大值，避免两个最大值来自不同线程时导致数据错乱。

---

## 5. 功能需求趋势

从全部 Issues 中提炼的社区最关注功能方向（按呼声高低排序）：

1. **性能与稳定性优化（最优先）** — Windows 系统级输入卡顿/冻结（#20214、#38546、#28855）、macOS Spotlight 索引飙升（#38929）、会话文件扫描导致延迟（#20864），三个平台均有严重性能问题。
2. **IDE/编辑器工作流增强** — VS Code 会话按项目隔离（#25319）、TUI 键盘快捷键快速切换推理强度和模型（#26819）。
3. **远程/移动端架构扩展** — 无头 Linux 远程主机支持（#23200）、iOS Remote 控制大型线程超时（#38787），移动端作为"控制层"的愿景仍受限于桌面应用必须在线的架构。
4. **会话/上下文管理精细化** — TUI 撤销/重做（#2379）、会话续接能力韧性（#38856 compact 404 问题）、ChatGPT-Codex 双向上下文共享（#32519）。
5. **配额与计费透明度** — 子代理耗尽整周配额（#35463）、周限额重置日期异常（#38900），新模型（gpt-5.6-sol）+ subagent 组合下的用量统计准确性存疑。

## 6. 开发者关注点

- **Windows 桌面端输入延迟是压倒性第一痛点**：三个独立报告（#20214、#38546、#28855）累计 130+ 评论、120+ 赞，且官方在 4 个月内未给出明确修复结论，已出现"投诉疲劳"风险。
- **配额/计费安全焦虑升温**：新模型 + subagent 组合下"一夜耗尽配额"（#35463）及"重置日期异常"（#38900）直接触碰用户经济成本底线，这类问题若处理不透明极易引发信任危机。
- **文档与实际功能一致性投诉**：1M 上下文窗口不可用（#38917）与安全审计中"未知字段被静默忽略"（对应 PR #38919）两类问题性质不同但同为信任杀手——一个是宣称过度，一个是静默失败。
- **正面声音**：TUI/CLI 功能迭代速度获得认可（/cd 命令、状态紧凑显示、doctor 诊断增强均为社区高频请求），但桌面应用（尤其是 Windows 端）的稳定性修复节奏滞后，形成明显反差。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-17

## 一、今日速览

今日 Gemini CLI 发布 v0.56.0-nightly 版本，主要修复 SSR Agent 的 TypeScript 编译配置问题。社区活跃度集中在 **Subagent 执行可靠性** 与 **Auto Memory 安全性和效率** 两条主线，多个 P1 级 Bug 持续获得维护者关注和修复推进。另有一批“SSR Agent”（自动修复代理）提交的 PR 正在批量解决历史遗留问题。

---

## 二、版本发布

**v0.56.0-nightly.20260817.g9a15c45fb** — 仅包含一项变更：[PR #28813](https://github.com/google-gemini/gemini-cli/pull/28813) 为 `packages/cli` 的 `tsconfig.json` 添加 `composite` 标志，修复根级构建因 `evals/tsconfig.json` 引用 `../packages/cli` 而失败的问题。

- 完整变更日志：[compare/v0.56.0-nightly.20260816...v0.56.0-nightly.20260817](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260816.g2a87e7be1...v0.56.0-nightly.20260817.g9a15c45fb)

---

## 三、社区热点 Issues（Top 10）

1. **Subagent 达到 MAX_TURNS 恢复后被误报为 GOAL 成功** · [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)（P1，12 评论）
   - `codebase_investigator` 子代理在达到最大轮次后被中断，却在恢复期间报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实的中断原因。社区最关注的问题之一，已有对应修复 PR 提交。

2. **通用代理（Generalist agent）挂起** · [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)（P1，8 评论，👍8）
   - 委派给通用代理后 Gemini CLI 无限挂起，连简单的文件夹创建操作也会卡死。用户不得不等待一小时以上后手动取消。明确指示不使用子代理可绕过此问题——当前最高赞的 Bug。

3. **Shell 命令执行完成后卡在 "Waiting input"** · [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)（P1，4 评论，👍3）
   - 极简单的 CLI 命令执行完毕后，UI 仍显示命令活跃并“等待用户输入”，影响自动化流水线的稳定性，属核心（area/core）高频问题。

4. **浏览器子代理在 Wayland 下失败** · [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)（P1，4 评论）
   - Wayland 环境下 `browser_agent` 直接以 GOAL 终止而无法完成任务。Linux 桌面用户的体验瓶颈。

5. **Gemini 不主动使用 skills 和 sub-agents** · [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)（P2，6 评论）
   - 用户反映需要显式指示模型才会使用自定义 skills 和子代理，即使任务高度相关也不会自动调用。影响 agent 生态的实际落地价值。

6. **Auto Memory 无限重试低信号会话** · [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)（P2，5 评论）
   - 后台提取代理判断某会话为低信号而不读取后，该会话永不被标记已处理，导致持续的重复重试。内存系统效率问题。

7. **Auto Memory 日志缺少确定性脱敏** · [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)（P2，4 评论，area/security）
   - 本地转录内容先进入模型上下文后才提示模型脱敏，服务端日志可能记录敏感内容。安全合规方向的重要隐患。

8. **超过 400 个工具时出现 400 错误** · [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)（P2，3 评论）
   - 工具数量超限时报 400 错误，社区期望模型能智能裁剪启用的工具范围而非直接失败。工具生态扩展的潜在瓶颈。

9. **Agent 应阻止/劝阻破坏性操作** · [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)（P2，3 评论，👍1）
   - 复杂 git 操作中模型偶尔会使用 `git reset` 或 `--force` 等危险命令，社区希望 agent 优先选择更安全的替代方案。

10. **Subagent 轨迹应通过 `/chat share` 可见** · [Issue #22598](https://github.com/google-gemini/gemini-cli/issues/22598)（P3，2 评论，👍1）
    - 子代理轨迹虽被录制但不可访问，社区希望 `/chat share` 能导出子代理的完整执行轨迹，便于审查和评估。

---

## 四、重要 PR 进展（Top 10）

1. **[PR #28815](https://github.com/google-gemini/gemini-cli/pull/28815)**（P1，area/agent）— 修复 #22323：在子代理恢复期间保留原始终止原因（如 MAX_TURNS、TIMEOUT），避免误报为 GOAL 成功。直接回应今日最热 Issue。

2. **[PR #28848](https://github.com/google-gemini/gemini-cli/pull/28848)**（P2，area/security）— 非交互模式下 `refreshAuth()` 失败将给出清晰错误和专用退出码，不再输出无格式堆栈并以 1 退出。改善 CI 场景体验。

3. **[PR #28812](https://github.com/google-gemini/gemini-cli/pull/28812)**（P1，area/core）— 修复 #21477：为 `getProcessInfo()` 增加执行超时，防止在裸 Linux 终端（无 `ps` 可用）启动时 TUI 无限卡在 "Initializing..."。

4. **[PR #28847](https://github.com/google-gemini/gemini-cli/pull/28847)**（P3，area/agent）— 修复 #19239：更新 `/clear` 命令文档，明示其同时清除上下文，而非仅清屏。

5. **[PR #28820](https://github.com/google-gemini/gemini-cli/pull/28820)**（P2，area/extensions）— 修复 #26120：澄清隐私提示文案，使“选择加入/退出”选项与介绍性说明一致，消除误导。

6. **[PR #28814](https://github.com/google-gemini/gemini-cli/pull/28814)**（P2，area/platform）— 修复 #21919：修复集成测试文件中的 TypeScript strict-null 属性与联合类型检查错误。

7. **[PR #28843](https://github.com/google-gemini/gemini-cli/pull/28843)**（已合入）— 新增 `gemini --list-models` 标志：以 JSON 格式输出可用模型列表并退出，便于集成方程序化发现模型，无需进入交互式 REPL。

8. **[PR #28844](https://github.com/google-gemini/gemini-cli/pull/28844)**（已合入）— Homebrew 渠道弃用告警：`homebrew-core` 中的 gemini-cli 已弃用，文档增加提示引导用户改用 npm 安装，避免新用户装到不再更新的旧版本。

9. **[PR #28849](https://github.com/google-gemini/gemini-cli/pull/28849)** — Dependabot 批量更新 npm 依赖组，共 73 个包升级（含 `simple-git`、`@modelcontextprotocol/sdk` 等）。虽已关闭，但确认了依赖生态的例行维护节奏。

10. **[PR #28813](https://github.com/google-gemini/gemini-cli/pull/28813)**（今日发布版本所包含）— 为 `packages/cli` 添加 `composite: true` tsconfig 标志，修复根级构建/类型检查失败。今日 nightly 的唯一变更。

---

## 五、功能需求趋势

从今日活跃的 Issues 和 PR 中可提炼出以下社区关注方向：

1. **Subagent 可观察性与可靠性**（最高频）
   - 正确报告子代理终止原因（#22323）、子代理轨迹可分享（#22598）、bugreport 包含子代理上下文（#21763）——社区对“代理内部发生了什么”有强烈透明度需求。

2. **Agent 自主性与工具使用**
   - 希望模型更主动地使用 skills/sub-agents（#21968）、利用专门的 bash 亲和能力进行零依赖沙箱执行（#19873）、AST 感知的代码读写与搜索（#22745/#22746）。

3. **安全与合规**
   - Auto Memory 的日志脱敏（#26525）、对破坏性命令的自我保护（#22672）是安全维度的高频话题，另有刷新令牌失败的处理优化（#28848）。

4. **终端体验与稳定性**
   - 终端 resize 闪烁（#21924）、退出外部编辑器后终端损坏（#24935）、TUI 挂起（#28812）等 terminal 层问题持续积累。

5. **记忆系统（Auto Memory）工程化**
   - 低信号会话重试（#26522）、无效 patch 的隔离（#26523）、整体质量改进（#26516）——记忆功能的健壮性正在成为新的迭代重心。

---

## 六、开发者关注点

- **挂起/卡死问题最为普遍**：无论是通用代理挂起（#21409）、shell 命令卡在等待输入（#25166）、还是 TUI 初始化悬挂（#28812），执行可靠性是社区最痛的体验点。
- **子代理行为“不可控”**：开发者反馈子代理在未明确配置的情况下自行启用（#22093）、忽略 settings.json 覆盖（#22267）、以及恢复机制掩盖真实失败（#22323），反映出对子代理执行透明度和可控性的强烈需求。
- **安全红线意识上升**：对 Auto Memory 发送原始转录内容的安全性（#26525）和对破坏性 git 命令的担忧（#22672），说明用户开始在意 CLI 在敏感环境中的合规表现。
- **安装分发渠道变更需关注**：Homebrew 渠道弃用（#28844）意味着原有安装方式的用户需要迁移到 npm，值得留意下游影响。
- **“SSR Agent”（自动修复代理）批量作业**：多个由 joneba-google 提交的“SSR Agent”PR 正在系统性地修复跨区域（core/agent/platform/extensions）的历史 Issue，这是一种值得关注的自动化修复模式。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-17

## 今日速览
过去 24 小时社区活跃度集中在 **MCP OAuth 认证与 Windows 平台稳定性问题**（#4490、#4463），以及 **会话恢复与插件依赖管理** 两大主题。此外，一个涉及模型输出用词不当的 Issue（#4498）也引发了开发者对模型控制力的讨论。

## 社区热点 Issues
**1. [修复] SDK server 在无认证情况下报告就绪，导致 Slack 会话创建失败**
   Issue #4503 · 已关闭 · 5 条评论 · [链接](https://github.com/copilot-cli/issues/4503)
   用户从 Slack DM 调用 Copilot 时收到通用错误提示。根因是 SDK server 启动后即报告 ready，但其环境中缺少 `COPILOT_SDK_AUTH_TOKEN`，从未真正初始化认证。该问题已修复，但反映了 server 健康检查机制的盲区。

**2. [回归缺陷] Atlassian MCP OAuth 认证在 1.0.80 版本中损坏**
   Issue #4490 · 1.0.80（1.0.78 正常） · [链接](https://github.com/copilot-cli/issues/4490)
   报错指出授权服务器的 issuer 与元数据发现地址不匹配（RFC 8414 §3.3），属于 MCP OAuth 实现的回归问题。涉及认证与 MCP 两个核心模块，影响 Atlassian 生态用户。

**3. [Windows] MCP OAuth 间歇性失败，socket error 10013（权限被拒）**
   Issue #4463 · [链接](https://github.com/copilot-cli/issues/4463)
   远程 HTTP MCP server 的 OAuth 认证在浏览器授权流程打开前即间歇性失败，报 socket 10013 错误。Windows 平台特有，疑似端口绑定或防火墙策略冲突。

**4. [Windows] 多会话/VS Code 窗口打开时插件更新失败**
   Issue #4488 · [链接](https://github.com/copilot-cli/issues/4488)
   即使插件未被实际调用，其他无关进程持有的文件锁也会阻塞插件更新，返回 "Access is denied"。多开场景下更新链路过于脆弱。

**5. [严重] 内存压力看门狗在上下文占用 23% 时强制压缩，循环直至 OOM**
   Issue #4506 · [链接](https://github.com/copilot-cli/issues/4506)
   长会话中，进程级内存监控错误触发对话压缩（而非上下文压力触发），在 400k 窗口中仅 23% 使用率即反复压缩，最终导致 OOM。触发条件与收益严重不匹配。

**6. [一致性缺陷] 仓库级 enabledPlugins 在非交互模式（copilot -p）下被忽略**
   Issue #4507 · [链接](https://github.com/copilot-cli/issues/4507)
   `.github/copilot/settings.json` 中的 `enabledPlugins` 配置在交互式模式和 `copilot plugins list` 中生效，但在管道模式（`copilot -p`）下不生效，各入口行为不一致。

**7. [会话] 恢复会话后保留过期的连接 item ID，导致所有提示失败**
   Issue #4505 · [链接](https://github.com/copilot-cli/issues/4505)
   重新打开并恢复旧会话后，每条提示均报 `CAPIError: 400 input item ID does not belong to this connection`，重试和 `/fork` 均无法恢复。会话恢复机制存在状态残留。

**8. [数据错误] account.getQuota 返回请求时间戳作为 resetDate**
   Issue #4504 · [链接](https://github.com/copilot-cli/issues/4504)
   JSON-RPC `account.getQuota` 响应中的 `resetDate` 实为请求发起时间，而非配额重置时间，影响依赖该字段进行配额管理的客户端逻辑。

**9. [并发缺陷] 令牌刷新期间并发工具调用各自创建新 rmcp 服务，导致调用被取消**
   Issue #4472 · [链接](https://github.com/copilot-cli/issues/4472)
   当多个工具调用并发触发同一个 OAuth 受保护 Streamable HTTP MCP server 的令牌刷新时，每次刷新都会新建 `rmcp::service` 实例，导致在途调用因 "transport closed before the tool responded" 被取消。属并发锁缺失问题。

**10. [模型兼容] claude-haiku-4.5 子代理不支持 medium 推理强度**
    Issue #4473 · [链接](https://github.com/copilot-cli/issues/4473)
    内部路由到 `claude-haiku-4.5` 的子代理任务默认应用 `medium` 推理强度，该模型不支持此参数，直接报错。CLI 未按模型能力适配推理参数。

## 功能需求趋势
- **插件依赖管理**（#4487）：社区明确提出需要插件间（跨/同 marketplace）的依赖声明与自动解析安装机制，说明插件生态已进入需要工程化治理的阶段。
- **会话生命周期管理**（#4502、#4474）：用户希望支持取消归档（un-archive）已标记为 Done 的会话、恢复超时后被静默归档的 General Chat——会话数据的可逆操作成为高频诉求。
- **会话状态持久化**（#4489）：恢复旧会话时应自动恢复原使用的 Agent，而非要求用户手动重新选择，反映用户对会话连续性体验的要求在提升。

## 开发者关注点
- **Windows 平台稳定性**是最集中的痛点，覆盖插件更新文件锁（#4488）与 MCP OAuth socket 错误（#4463）。
- **会话恢复可靠性**问题突出：恢复后连接 ID 失效（#4505）、Agent 未自动选中（#4489）等，均导致用户需要手动干预或完全无法继续。
- **MCP OAuth 链路脆弱**：1.0.80 回归（#4490）与并发刷新竞态（#4472）并存，认证链路需要在回归测试与并发控制上补强。
- **模型行为可控性**（#4498）：模型在代码命名中使用 "enslaved" 等不当词汇且无干预途径，开发者期望更强的输出约束或审查机制。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-17

## 今日速览

过去24小时无新版本发布，社区焦点集中在 **Session 管理缺失**、**Windows/PowerShell 路径兼容性** 以及 **记忆层（Memory Layer）优化** 三项核心诉求上。值得注意的是，PR #864（`--starting-prompt` 标志）已被合并关闭，为命令行启动流程带来改进。

## 版本发布

过去24小时内无新版本发布。

## 社区热点 Issues

过去24小时内更新4条Issue，按关注度精选如下（全部条目）：

### 1. [Feature Request] 添加 /delete 命令删除 Sessions（#1783）
- **作者**: proccl | **更新**: 2026-08-16 | **评论**: 6 | 👍: 1
- **重要性**: 社区呼声最高的功能之一。目前删除 session 需手动操作 `~/.kimi/sessions/` 目录，无 CLI 入口；涉及 Session 列表管理、磁盘空间清理和安全删除敏感信息三大场景。
- **社区反应**: 6条评论，用户持续关注，1个赞表明有明确需求。
- **链接**: [Issue #1783](https://github.com/MoonshotAI/kimi-cli/issues/1783)

### 2. [bug] Windows PowerShell7 默认D盘启动时路径无法找到（#2600）
- **作者**: RooKichenn | **创建**: 2026-08-11 | **更新**: 2026-08-16 | **评论**: 5
- **重要性**: 影响 Windows 用户的核心可用性问题。0.33 版本在 PowerShell7 从 D 盘默认目录启动时找不到路径，属于跨盘符工作目录的兼容性缺陷。
- **社区反应**: 5条评论，问题仍处于开放状态，未见官方回复记录。
- **链接**: [Issue #2600](https://github.com/MoonshotAI/kimi-cli/issues/2600)

### 3. [enhancement] 优化记忆层并完善文档（#1478）
- **作者**: hahy36 | **创建**: 2026-03-17 | **更新**: 2026-08-16 | **评论**: 4
- **重要性**: 大项目记忆管理痛点。用户反馈模型中仅见 `agent.md`，而参考文档缺乏记忆层说明；引用 OpenClaw 的记忆体系（SOUL.md/USER.md/MEMORY.md）作对比。对长期项目的上下文连续性至关重要。
- **社区反应**: 4条评论，问题持续数月仍开放，社区对大项目场景记忆需求的关注度上升。
- **链接**: [Issue #1478](https://github.com/MoonshotAI/kimi-cli/issues/1478)

### 4. 定时任务（CronCreate）无用户可见管理入口（#2605）— 已关闭
- **作者**: WilliamLambertCN | **创建**: 2026-08-16 | **更新**: 2026-08-16 | **评论**: 1
- **重要性**: 指出由 `CronCreate` 工具创建的定时任务在 TUI 中**完全没有管理入口**：无 `/cron` 命令，`/tasks` 面板不显示调度任务，文件仅持久化在 `~/.kimi-code/cron/` 下，普通用户无处发现与操作。
- **社区反应**: 条目今日已被关闭，提示入口问题可能已在构建中或即将被处理。
- **链接**: [Issue #2605](https://github.com/MoonshotAI/kimi-cli/issues/2605)

## 重要 PR 进展

过去24小时内更新3条PR，全部列出：

### 1. [已合并] feat: `--starting-prompt` 标志，无退出地提示（#864）
- **作者**: stebbins | **更新**: 2026-08-17（今日合并关闭）
- **功能**: 新增 `--starting-prompt` / `-s` 标志，支持在启动时直接传入提示词，无需进入交互模式再退出；关闭了相关 issue #887。
- **链接**: [PR #864](https://github.com/MoonshotAI/kimi-cli/pull/864)

### 2. fix(web): 处理 SessionProcess.send_message 中的 BrokenPipeError（#2324）
- **作者**: Ricardo-M-L | **创建**: 2026-05-19 | **更新**: 2026-08-16 | 状态: 开放
- **修复**: `src/kimi_cli/web/runner/process.py` 中向 `process.stdin` 写入时未防护子进程已退出的情况，在 `start()` 与写入间无 `BrokenPipeError` 保护，可能导致崩溃。
- **链接**: [PR #2324](https://github.com/MoonshotAI/kimi-cli/pull/2324)

### 3. fix(string): 在长度检查前去除换行符（shorten_middle）（#2449）
- **作者**: Ricardo-M-L | **更新**: 2026-08-16 | 状态: 开放
- **修复**: `shorten_middle` 在 `remove_newline=True` 时对短文本提前返回，尚未去除换行符，导致 `extract_key_argument` 渲染的单行摘要中残留 `\n`。
- **链接**: [PR #2449](https://github.com/MoonshotAI/kimi-cli/pull/2449)

## 功能需求趋势

从最近更新（含历史高活跃）的 Issues 中提炼，社区关注方向包括：

- **Session 管理增强**：删除命令缺失（#1783）、列表过多难以管理、敏感信息安全清理
- **记忆层（Memory Layer）建设**：大项目上下文连续性差，缺乏 SOUL/USER/MEMORY 式的分层长期记忆（#1478）
- **定时任务（Cron）管理能力**：需 `/cron` 命令或 `/tasks` 面板集成，多入口可管理调度任务（#2605）
- **Windows/powershell 跨盘符兼容性**：非 C 盘启动路径解析失败（#2600）
- **命令行交互效率**：`--starting-prompt` 标志已被合并，体现对快速启动/非交互式调用的需求

## 开发者关注点

- **入手门槛**：Session 删除、记忆管理等核心操作缺乏 CLI/TUI 入口，需手动编辑本地 JSON/目录，普通用户难以发现与操作。
- **稳定性**：web runner 中的 `BrokenPipeError` 与字符串处理缺陷显示子进程生命周期管理和文本渲染的健壮性仍需加强。
- **Windows 生态适配**：PowerShell 默认目录非系统盘时触发路径错误，跨平台支持需更细粒度测试。
- **可观测性**：定时任务、记忆文件虽持久化在本地但无 UI 呈现，用户"无从得知"文件位置，反馈重复出现。
- **文档透明度**：记忆层相关文档仅覆盖 `agent.md`，参考文档与功能实现之间存在脱节。

---

> 说明：以上内容全部基于提供的 GitHub 数据，无额外虚构信息。所列条目均附官方链接，可直接跳转获取最新讨论状态。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode 社区动态日报 — 2026-08-17

### 今日速览

过去24小时 OpenCode 仓库无新版本发布，社区讨论热度集中在三点：Web UI 与桌面端的"卡在 thinking 状态"一类稳定性问题反复出现；付费 Zen 模型计费与额度回退逻辑引发多起争议；V2 CLI 无头命令加载 OpenTUI 并泄漏临时文件的问题获得开发者共鸣。功能需求方面，会话收藏/置顶、Web 项目自动同步呼声较高。

### 社区热点 Issues

1. **[UX] Ctrl+C 不应退出 OpenCode — 与通用复制快捷键冲突** (👍 49, 评论 16)
   依然是最受关注的 UX 问题，Windows/Linux 用户习惯性按 Ctrl+C 复制文本时误退出应用。该问题自 1 月提出以来持续发酵，社区期待官方重新设计中断快捷键。[链接](https://github.com/anomalyco/opencode/issues/7957)

2. **所有付费 OpenCode Zen 模型报 'Upstream request failed'，免费模型正常**
   付费模型（如 MiniMax-M3、deepseek-v4-flash）全部失败，免费模型和 Go 模型正常，用户无法使用已付费服务，影响面覆盖所有付费 Zen 模型。[链接](https://github.com/anomalyco/opencode/issues/36506)

3. **剪切板 "Copied to clipboard" 提示无效（VSCode Server/Docker 环境）**
   在 Docker 内使用 VSCode Server 时提示复制成功但实际未写入系统剪切板，影响远程开发场景。[链接](https://github.com/anomalyco/opencode/issues/41470)

4. **Zen 付费余额仍触发每日免费额度限制**
   用户充值 $20 后不到 1 小时仍被提示"Free usage exceeded"，计费回退逻辑疑似存在缺陷，涉及用户资金使用体验。[链接](https://github.com/anomalyco/opencode/issues/33318)

5. **[FEATURE]: Web UI 从服务器自动同步项目**
   新设备打开 OpenCode Web 时无法自动获取服务端已有项目，需重复创建。社区获得 15 个 👍 支持，多设备开发者需求明确。[链接](https://github.com/anomalyco/opencode/issues/13626)

6. **桌面端对慢速本地 Provider 触发 5 分钟 Headers Timeout**
   即使配置 `"timeout": false` 仍被强制 5 分钟中断，本地大模型推理场景受影响严重。[链接](https://github.com/anomalyco/opencode/issues/26602)

7. **TUI 退出后鼠标转义序列残留乱码**
   退出 opencode 后终端出现大量 `35;89;19M` 类乱码，影响终端后续使用体验。[链接](https://github.com/anomalyco/opencode/issues/20458)

8. **流式错误后 UI 无限卡在 "thinking" 状态，无错误提示无恢复**
   流中断（socket 关闭、AI_APICallError）后界面永久卡死，需重启应用恢复。同类问题在多个 Issue 中反复出现，是当前最集中的稳定性痛点。[链接](https://github.com/anomalyco/opencode/issues/32366)

9. **[2.0] v2 CLI 无头命令加载 OpenTUI 并泄漏临时文件**
   `--version`、`--help`、`service status` 等无需 TUI 的命令仍加载 13.1 MiB 的 `libopentui.so` 且每次进程均残留临时文件，频繁调用将累积磁盘占用。为 V2 专项问题。[链接](https://github.com/anomalyco/opencode/issues/37671)

10. **zsh 补全不提示顶层 flags（--continue, --session, --fork）**
    新提交的 bug 报告，`opencode <TAB>` 仅列出子命令而遗漏所有根级选项。[链接](https://github.com/anomalyco/opencode/issues/42913)

### 重要 PR 进展

1. **[2.0] docs: 重新组织 v2 文档** (已合并)
   新增 CLI 专项页面（配置、Provider、主题、按键绑定、插件），并将 `terminal.copy_on_select` 统一为 `terminal.copy`。[链接](https://github.com/anomalyco/opencode/pull/42947)

2. **refactor(app): 桌面端改用当前 session 消息流** (进行中)
   移除桌面端 V2 session 消息流与旧版 `Message`/`Part` 双轨并存的冗余结构。[链接](https://github.com/anomalyco/opencode/pull/42766)

3. **fix(app): 降低 session spinner CPU 占用** (已合并)
   将 25 个逐点 CSS 透明度动画替换为单一预渲染 APNG 时间线，保留原有姿态与 reduced-motion 行为。[链接](https://github.com/anomalyco/opencode/pull/42952)

4. **fix(app): 渲染 Code Mode 执行内容** (进行中)
   新增桌面端 Code Mode 专用渲染器，展示子工具进度、输入摘要、失败状态与运行时错误，并补充元数据解析测试。[链接](https://github.com/anomalyco/opencode/pull/42949)

5. **chore(util): 记录 spawn 的进程日志** (已合并)
   在 info 级别记录每次 cross-spawn 进程的启动信息（可执行文件、参数、工作目录），不包含环境变量与 stdin，便于诊断进程异常。[链接](https://github.com/anomalyco/opencode/pull/42948)

6. **fix(app): 修正后台子代理状态判定** (已合并)
   仅在父工具完成且返回 running 子结果后才将 V2 子代理归类为后台，保留旧版 `task` 元数据行为。[链接](https://github.com/anomalyco/opencode/pull/42944)

7. **fix(core): 内容过滤时展示拒绝类别与原因说明** (已自动清理关闭)
   当 Anthropic 返回 `stop_reason: "refusal"` 时，不再显示单一硬编码消息，改为透出具体拒绝类别与解释。[链接](https://github.com/anomalyco/opencode/pull/37392)

8. **fix: apply_patch 移动文件时检查目标路径权限** (已自动清理关闭)
   此前仅按源路径请求编辑权限，现改为同时校验移动目标路径，补上权限校验缺口。[链接](https://github.com/anomalyco/opencode/pull/37386)

9. **fix: 修复 share 导入失败时错误返回成功状态** (已自动清理关闭)
   URL 无效或分享请求失败时不再返回成功，避免误报。[链接](https://github.com/anomalyco/opencode/pull/37387)

10. **fix(tui): 隐藏模型循环切换命令（不出现在命令面板）** (已自动清理关闭)
    应维护者要求，将模型循环 keybind 从命令面板中移除，避免误触发。[链接](https://github.com/anomalyco/opencode/pull/37363)

### 功能需求趋势

- **会话管理增强**：会话收藏/置顶（#42940）、持久化有序会话审阅导航（#42863）相继提出，反映长会话用户对组织与回溯工具的需求。
- **Web UI 体验补齐**：Web 项目自动同步（#13626）获得 15 👍，多设备场景下 Web 端功能完整性成为关注点。
- **终端 UX 细节打磨**：Ctrl+C 退出的改键诉求（#7957，👍 49）与 Wispr Flow 语音听写无法输入（#34499）显示输入交互仍是高频痛点。
- **V2 专项问题开始积累**：无头命令加载 OpenTUI（#37671）、前后台 shell 重启语义（#36348）等 V2 专属 issue 表明 2.0 版本正在经历密集的稳定性打磨期。
- **新模型适配跟进**：Qwen 3.8 拒绝多系统消息（#42909）等兼容性问题提示社区对新模型接入需求活跃。

### 开发者关注点

- **"卡死"类问题最集中**：流错误后无限 thinking（#32366、#36370、#40468、#40625）、Provider 500 静默失败（#38644）、空响应静默停止（#41469）——多个 Issue 指向同一类根因：异常路径缺乏错误透出与状态恢复机制。开发者明确表达了"宁可报错也不要无声卡死"的诉求。
- **付费可靠性存疑**：#36506（付费模型全挂）与 #33318（付费余额不生效）组合引发对计费与模型可用性的信任危机，这类问题对用户付费意愿伤害最大。
- **网络与本地环境适配不足**：不稳定网络导致永久 stall（#40625）、本地 Provider 被强制 5 分钟超时（#26602）、Docker 内剪切板失效（#41470）——远程/容器/弱网开发场景的支持短板明显。
- **对自动化质量控制的认可**：多批 [automated-pr-cleanup] 与 [contributor] 标记的 PR（权限校验、日志、状态分类等）连续合入，社区对机器人驱动的低风险修复流程接受度较高，反馈积极。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-17

## 今日速览

昨日与今日 Pi 社区聚焦于**性能优化与多模型支持**两条主线：大缓冲区下提示符编辑器响应缓慢、终端无故回滚等性能问题获得较多讨论；同时围绕 GLM 系列、Qwen 系列、Kimi、xAI 等模型的目录校准与路由修复贡献了大量 PR。此外，供应商目录超时、缓存 token 计费偏差等基础设施问题也在持续修复中。

---

## 社区热点 Issues

### 1. [性能] 提示符编辑器在大缓冲区下响应极慢
**#8029** [OPEN] `[bug, inprogress]` · 评论 9
当提示符输入框包含大量文本（例如 7000 行）时，单次方向键操作耗时随文本量线性增长，实测单次按上键耗时 1650ms。这是编辑器核心交互路径上的明显性能瓶颈，社区关注度高。
链接: https://github.com/earendil-works/pi/issues/8029

### 2. [性能] 终端无故回滚至会话开头
**#5023** [CLOSED] · 评论 14
用户反馈终端在模型工作期间随机跳转至会话开头并快速滚动回末尾，无需任何用户交互。该问题持续近三个月，累计 14 条评论，反映了终端渲染稳定性方面的深层隐患。
链接: https://github.com/earendil-works/pi/issues/5023

### 3. [模型目录] GLM-5.2 目录错误覆盖正确上下文窗口
**#7870** [OPEN] `[inprogress]` · 评论 3
远程目录覆盖导致 `z-ai/glm-5.2` 被错误解析为 262k 上下文窗口，实际模型支持 1M 上下文（OpenRouter 实测 1,048,576）。目录数据的准确性直接影响用户的实际体验。
链接: https://github.com/earendil-works/pi/issues/7870

### 4. [TUI] Windows 输入行每次击键重绘为换行
**#6300** [OPEN] · 评论 7
Windows 终端（cmd.exe 与 Windows Terminal）下每个字符都出现在新行中。Windows 平台的 TUI 渲染适配问题持续影响开发者使用体验。
链接: https://github.com/earendil-works/pi/issues/6300

### 5. [API] `sendMessage()` 绕过 `before_agent_start` 事件
**#5581** [OPEN] `[inprogress]` · 评论 4 · 👍 1
带 `triggerTurn: true` 的自定义消息直接调用 `_runAgentPrompt` 而非 `prompt()`，导致 `emitBeforeAgentStart` 被绕过。这破坏了扩展事件管道的语义一致性，对依赖生命周期事件的扩展开发者有实际影响。
链接: https://github.com/earendil-works/pi/issues/5581

### 6. [TUI] 编辑工具渲染大 diff 时崩溃
**#8036** [OPEN] · 评论 3
`edit` 工具在渲染 ~14.5MB 的 diff 时导致交互式 TUI 崩溃，会话恢复时同样崩溃。大数据量场景下的 TUI 渲染健壮性是需要关注的工程问题。
链接: https://github.com/earendil-works/pi/issues/8036

### 7. [模型目录] GLM-5.3 缺少 thinking level 配置
**#8190** [CLOSED] · 评论 2
`glm-5.3` 在 `zai` / `zai-coding-cn` 上未配置 `thinkingLevelMap` 和 `supportsReasoningEffort`，导致请求中从不发送 `reasoning_effort`。推理强度调节功能对 GLM 用户有直接影响。
链接: https://github.com/earendil-works/pi/issues/8190

### 8. [API] openai-completions 无法往返非加密 reasoning_details
**#7994** [OPEN] · 评论 3
OpenRouter 的 870 次基准测试发现 Pi 仅解析 `reasoning.encrypted` 条目，无法往返 `signed-text` 形式。涉及协议兼容性的细节问题，对大模型 API 聚合层有直接影响。
链接: https://github.com/earendil-works/pi/issues/7994

### 9. [上下文管理] 上下文预算忽略输出 token 预留
**#8061** [OPEN] · 评论 2 · 👍 1
输入仅达窗口 78% 时请求仍被提供方拒绝，且自动压缩重试同样失败。上下文预算管理未考虑输出 token 预留，压缩恢复机制也需要修复。
链接: https://github.com/earendil-works/pi/issues/8061

### 10. [模型目录] Qwen Token Plan 目录需对齐
**#8194** [CLOSED] · 评论 2
`qwen-token-plan` 与 `qwen-token-plan-cn` 应统一暴露八个模型的文本目录（含 deepseek-v4 系列、GLM-5.2、qwen3.6/3.7/3.8 系列）。内置目录不完整导致用户无法发现可用模型。
链接: https://github.com/earendil-works/pi/issues/8194

---

## 重要 PR 进展

### 1. fix(coding-agent): 缓存 token 仅按计费量计入 totals
**#8218** [CLOSED] · sebbuntu
缓存 token 按输入价格的 1/120 计费，原先按全额计入导致 totals 膨胀约 120 倍，使压缩预算过早触发。修复后 `tokens.total = billable only`，显著改善上下文压缩时机的准确性。
链接: https://github.com/earendil-works/pi/pull/8218

### 2. fix(coding-agent): 流式期间将非 turn 自定义消息延迟到 turn 结束
**#8209** [CLOSED] · alexkalinohooijunyi — 修复 #8166
流式输出期间 `triggerTurn: false` 的自定义消息会直接压入实时消息数组，破坏 tool_calls→tool 的相邻关系，导致 DeepSeek 400 错误。此 PR 将此类消息延迟至当前 turn 结束。
链接: https://github.com/earendil-works/pi/pull/8209

### 3. fix(coding-agent): 重试挂起的 pi.dev 目录刷新
**#8204** [CLOSED] · enzofrasca — 修复 #8198
pi.dev 目录接口间歇性接受 TLS 后不返回任何字节，此前整个刷新仅有一个 15s 超时控制。此修复增加了单次请求超时与重试机制，避免单个供应商挂起阻塞全部刷新。
链接: https://github.com/earendil-works/pi/pull/8204

### 4. fix: Kimi 缓存 token 统计
**#8119** [CLOSED] · cristinaponcela — 修复 #8075
Kimi 的 OpenAI 兼容接口在顶层 `usage.cached_tokens` 中报告缓存命中，此前 Pi 将其忽略并按普通输入计费。现在将 `cached_tokens` 纳入 `rawUsage` 并正确归类为缓存读取。
链接: https://github.com/earendil-works/pi/pull/8119

### 5. feat(ai): xAI 模型改走 Responses API，默认 Grok 4.6
**#8124** [CLOSED] · Jaaneek
默认改用 Responses API 而非 Completions，并附上用户代理信息。默认 xAI 模型从 Grok 4.5 升级至 Grok 4.6。
链接: https://github.com/earendil-works/pi/pull/8124

### 6. feat(ai): MiniMax 图像生成（图生图）后端
**#8193** [CLOSED] · octo-patch
此前图生图（image-to-image）没有 MiniMax 后端，导致图像生成端点两个区域均不可用。新增 `minimax-images` API 模块并注册到运行时图像 API 注册表。
链接: https://github.com/earendil-works/pi/pull/8193

### 7. feat(auth): 新增 Kiro OAuth 设备登录
**#8217** [CLOSED] · fanbaoyu1024
支持 Kiro OAuth 设备码登录与刷新，注册 Kiro 提供方、模型目录与运行时路由，并处理 `authorization_pending`、`slow_down`、致命 OAuth 错误、超时及异常 `expiresIn` 响应。
链接: https://github.com/earendil-works/pi/pull/8217

### 8. [DRAFT] 新 harness 开发分支
**#8076** [CLOSED (DRAFT)] · davidbrai
davidbrai 提交的开发分支，包含新的 harness 实现。虽未合并，但值得关注其演进方向。
链接: https://github.com/earendil-works/pi/pull/8076

---

## 功能需求趋势

| 方向 | 相关议题 | 说明 |
|------|---------|------|
| **模型目录校准与扩展** | #7870, #8190, #8194, #8206, #8220 | GLM 系列上下文窗口/推理级别、Qwen Token Plan 目录对齐、Grok 默认模型升级、GLM-4.6V 视觉模型缺失，均为供应商目录维护的高频需求 |
| **性能优化** | #8029, #5023, #6300 | 提示符编辑器大缓冲区响应、终端滚动稳定性、Windows 输入行为，终端核心路径性能是社区痛点 |
| **API 协议兼容性** | #7994, #5581, #8166, #8061 | OpenAI 兼容层对 reasoning_details 往返、事件生命周期语义、消息注入时序、上下文预算边界处理，均属协议细节打磨 |
| **扩展生态系统** | #8215, #8213, #8214, #8222 | 包安装并发竞态、agent 生命周期 veto 机制、RPC 参数补全暴露、工具参数 schema 校验，扩展 API 的健壮性和能力扩展是活跃方向 |
| **供应商可靠性** | #8198, #8204 | pi.dev 目录端点超时与检索机制，基础设施稳定性持续受关注 |

---

## 开发者关注点

- **上下文窗口元数据准确性问题**（#7870）：远程目录覆盖内置正确配置，导致 1M 上下文的模型被限制为 262k。目录数据的可信度与校验机制需要加强。
- **缓存计费偏差**（#8218, #8119）：缓存 token 按 1/120 计费却以全额计入 totals，导致压缩预算过早触发。此修复对控制推理成本有实际收益。
- **消息注入时序竞态**（#8166, #8209）：流式期间注入自定义消息会破坏 tool_calls→tool 相邻关系，导致后续每轮请求都被提供方拒绝（400）。此类竞态问题对扩展开发者尤其致命。
- **上下文预算未预留输出 token**（#8061）：输入仅占 78% 即被拒绝，且压缩重试同样失败，说明预算计算与恢复策略均需调整。
- **目录刷新缺乏超时控制**（#8198, #8204）：单供应商挂起可阻塞整个模型目录更新，需引入逐请求超时与重试。
- **模糊或不明确的界面提示**（#8221）：消息队列提示使用 Alt+Enter，但该快捷键已被全屏切换占用，UI 文案与快捷键绑定需要一致性审查。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-17

## 今日速览

昨日发布 v0.21.11-nightly 版本，核心改动为 autofix 默认拒绝式 footprint 门控及 Web Shell 相关修复，并完成 DSW SWE-bench Verified (500) 与 Terminal-Bench 2.0 (89) 的完整 E2E 回归。社区热点集中在多智能体协作的批量 Bug 反馈（leader 消息、任务派发、提示词矛盾等），`/review` 命令的收敛机制与并发工作树竞争问题成为开发自省焦点。

## 版本发布

**v0.21.11-nightly.20260817.195128a17a** — [Release 说明](https://github.com/QwenLM/qwen-code/releases)

- `feat(autofix)`: deny-by-default footprint gate 与 positional window censuses（[PR #9156](https://github.com/QwenLM/qwen-code/pull/9156)）
- `fix(web-shell)`: 相关修复
- DSW E2E 回归：SWE-bench Verified (500) 全部通过、Terminal-Bench 2.0 (89) 通过，版本基准 v0.21.12

## 社区热点 Issues（Top 10）

1. **[#9276](https://github.com/QwenLM/qwen-code/issues/9276) 团队成员无法向 leader 发送普通消息**（P2，multi-agent）
   调用普通状态消息被误判为 shutdown 请求并报错。多智能体协作核心链路故障，5 条评论，社区反应积极。

2. **[#9291](https://github.com/QwenLM/qwen-code/issues/9291) 不支持图片 MIME 可中断 Responses 兼容会话**（P2，core）
   真实 `.heic` 图片被转发导致端点校验失败。与 [PR #9295](https://github.com/QwenLM/qwen-code/pull/9295) 修复直接关联，3 条评论。

3. **[#9290](https://github.com/QwenLM/qwen-code/issues/9290) 打开报错的 agent-team 标签页导致交互会话崩溃**（P2，multi-agent）
   会话崩溃无降级。对应 [PR #9292](https://github.com/QwenLM/qwen-code/pull/9292) 的渲染错误边界修复，3 条评论。

4. **[#9282](https://github.com/QwenLM/qwen-code/issues/9282) 手动分配团队任务不触发派发**（P2，multi-agent）
   `task_update({in_progress, owner: alice})` 成功但 Alice 收不到任务。对应 [PR #9289](https://github.com/QwenLM/qwen-code/pull/9289)，3 条评论。

5. **[#9283](https://github.com/QwenLM/qwen-code/issues/9283) agent-team 提示词与实际自动派发行为矛盾**（P2，multi-agent）
   运行时自动转发最终答案，但普通/plan 提示词要求显式 `send_message`。对应 [PR #9284](https://github.com/QwenLM/qwen-code/pull/9284)，3 条评论。

6. **[#9089](https://github.com/QwenLM/qwen-code/issues/9089) autofix PAT 作业与不可信分支代码共享主机**（P1，security）
   需要在 runner 级隔离，无法在 Actions step 内解决。P1 安全级别值得关注，5 条评论。

7. **[#9278](https://github.com/QwenLM/qwen-code/issues/9278) `/review` 发布时收敛建议设计**（P2，feature-request）
   fatal 回路问题完整设计记录，涉及失控评审回路阻尼机制，3 条评论。

8. **[#5966](https://github.com/QwenLM/qwen-code/issues/5966) 0.19.3 UI 中文输入法完全无效**（P2，UI，待信息补充）
   老问题 6 月底至今仍未解决，社区持续受影响，5 条评论。

9. **[#8962](https://github.com/QwenLM/qwen-code/issues/8962) tmux 下无法使用（严重闪烁）**（P2，UI）
   tmux/远程场景闪烁严重，仅极小窗口可用。持续 5 天无修复，3 条评论。

10. **[#9294](https://github.com/QwenLM/qwen-code/issues/9294) 请求将 ClawMetry 加入 Ecosystem 文档**（P3，docs）
    开源本地可观测性仪表盘，附带 Qwen Code 适配器，2 条评论，2 小时前创建。

## 重要 PR 进展（Top 10）

1. **[#9228](https://github.com/QwenLM/qwen-code/pull/9228) 收窄 serve-ab 自托管 wipe 到 A/B 检出目录**（autofix/takeover）
   修复自托管 ECS 上误删整个共享工作区（含 ~900MB 根 `.git` 历史）的问题。多个自动 defer 的发现由此带出。

2. **[#9267](https://github.com/QwenLM/qwen-code/pull/9267) 从 PR diff 构建增量评审范围**（refactor）
   替换 `fetch-pr` 中的 containment oracle，改为逐步收窄，避免事后证明失败。

3. **[#9279](https://github.com/QwenLM/qwen-code/pull/9279) 在发布边界执行已解析的严重级别下限**（feat）
   Critical-only 楼层（含第 6 轮自适应默认）时，Suggestion 自动移入 deferral 列表。

4. **[#9292](https://github.com/QwenLM/qwen-code/pull/9292) 收容 agent-tab 渲染错误而非退出会话**（fix/cli）
   针对 [#9290](https://github.com/QwenLM/qwen-code/issues/9290)，将渲染错误放入非致命边界降级显示。

5. **[#9295](https://github.com/QwenLM/qwen-code/pull/9295) 省略模型端点无法安全消费的图片媒体**（fix/core）
   针对 [#9291](https://github.com/QwenLM/qwen-code/issues/9291)，在转发前检测 MIME 与可解码性。

6. **[#9289](https://github.com/QwenLM/qwen-code/pull/9289) 将手动分配的任务派发给所属成员**（fix/core）
   针对 [#9282](https://github.com/QwenLM/qwen-code/issues/9282)，增加直接派发路径（mailbox 此前无对应类型）。

7. **[#9284](https://github.com/QwenLM/qwen-code/pull/9284) 对齐 agent-team 提示词与 TeamCreate 描述**（fix/core）
   针对 [#9283](https://github.com/QwenLM/qwen-code/issues/9283)，让普通/plan 提示词与运行时自动转发行为一致。

8. **[#9211](https://github.com/QwenLM/qwen-code/pull/9211) 给 PR 评审工作树租约加锁**（fix/review）
   针对 [#9205](https://github.com/QwenLM/qwen-code/issues/9205)，评审会话持有工作树时双重锁，防止并发删除。

9. **[#9226](https://github.com/QwenLM/qwen-code/pull/9226) Aone Code 读取路径 — 第二评审平台 Provider**（feat）
   基于 remote 检测 `gitlab.alibaba-inc.com` 或 `…/codereview/<id>`，复用现有读子命令。

10. **[#9262](https://github.com/QwenLM/qwen-code/pull/9262) 增长预算超限改为审计而非停止**（feat/autofix）
    原先超限即升级人工决策并停止；现在接管轮次转为审计路径，继续推进代码变更。

## 功能需求趋势

- **多智能体协作（multi-agent）稳定性**：leader 消息、任务派发、提示词一致性等一批 P2 Bug 集中涌现——#9276、#9282、#9283、#9290——目前仍处于"能跑但不可靠"阶段。
- **`/review` 评审管线的自治化与收敛**：围绕评审轮次上限、deferral 机制、工作树并发锁、增量范围计算等出现大量自动 defer 与改进（#9259、#9278、#9205 等），社区对评审自治管线的工程质量关注度极高。
- **Accessibility/终端兼容性**：tmux 下严重闪烁（#8962）持续未修复，中文输入法问题（#5966）悬置近两月，说明终端渲染层仍存在体验缺口。
- **认证方式扩展**：新增 GitHub Copilot 认证请求（#9275），社区对多模型来源接入持续有需求。
- **本地可观测性**：外部项目 ClawMetry 请求加入 Ecosystem（#9294），说明开发者对 Qwen Code 本地运行数据的深度洞察有真实场景需求。

## 开发者关注点

- **终端渲染稳定性是最大痛点**：tmux 闪烁、中文输入法失效、UI 不定期报错构成了交互体验的主要阻塞项，且定位困难、进展缓慢。
- **多智能体模式处于早期脆弱阶段**：消息路由和任务派发链路存在多处盲点，手动操作（如 `task_update` 指定 owner）与自动派发行为不一致，开发者在真实使用中频繁踩坑。
- **`/review` 管线复杂但迭代活跃**：评审轮次上限策略与 deferral 记录让自动化评审"每过一轮都在付出更多成本"，社区正通过设计文档（#9278）和 deferral 机制（#9259、#9285 等）系统性收敛失控回路。
- **CI/自托管基础设施问题频繁**：工作树竞争删除（#9205）、工作区误删（#9228）等表明自托管 ECS 池的安全与并发保护仍需加固。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-17

## 今日速览

项目已正式品牌化为 **Codewhale**（Shannon Labs），v0.9.8 发布，legacy `deepseek-tui` npm 包正式弃用。社区活跃度高：当日 5 个新 PR 聚焦 TUI "诚实性"修复（上下文窗口、成本显示、排版宽度）与 sandbox 增强；多个回归 bug（sudo、宽屏渲染、崩溃）引起关注并已获修复。

---

## 社区热点 Issues（精选 10 条）

**1. #5123 — Agent spawn 配置项过多，builder 角色被标记为只读并自阻塞**
标签：bug / workflow-runtime / subagents / ux
创建 08-03，更新 08-16，评论 6
社区反应：dogfood 发现的核心流程缺陷——被标记为 `builder` 的会话实际工具契约是只读的，导致无法执行分配的任务，讨论焦点是统一 spawn 配置模型。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5123)

**2. #5056 — 后台 verifier 测试不稳定，12 个未分类的 #[ignore] 测试**
标签：bug / reliability
创建 08-02，更新 08-17，评论 5，今日更新
社区反应：全套并行 CI 下两个核心 verifier 测试持续 flake（`verifier.rs:1302`、`:1490`），`/workspace-sensitive` fixture 也有问题；release 前需稳定测试基础设施。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5056)

**3. #5424 — v0.9.7: Codewhale TUI 崩溃（0.9.7）**
标签：bug
创建 08-16，更新 08-16，评论 5（高热度新 issue）
社区反应：通过 `codewhale --continue` 正常加载工作区后，等待一分钟左右程序自行退出；用户期望有 crash log 和优雅退出，当前版本影响正常使用。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5424)

**4. #5322 — 回归：输出区域在宽终端不铺满（v0.8.65 可）**
标签：bug（CLOSED）
创建 08-11，更新 08-16，评论 5
社区反应：v0.8 中 transcribe 区随终端宽度扩展，v0.9 被限制在最大宽度导致窄栏 + 右侧大片空白；已随 #5436 关闭（PR #5446 修复，prose 宽度增至全宽）。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5322)

**5. #2693 — HarnessPosture: 模型特定的上下文与子代理策略**
标签：documentation / enhancement / context
创建 06-03，更新 08-16，评论 6，今日更新
社区反应：v0.8.53 测试后提出——DeepSeek V4 与小米 MiMo v2.5 显示受益于 cache-heavy 前缀稳定的起始 prompt；核心诉求是按 provider/model 路由显式化 harness 策略而非一刀切。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/2693)

**6. #1917 — 通用 PreToolUse/PostToolUse hook 层（Cancel/Pause/Resume）**
标签：bug / documentation / enhancement
创建 05-22，更新 08-16，评论 5
社区反应：从 #1886-#1900 分析中提炼的统一架构模式，为所有 action 类型提供可回滚 Cancel、Pause、Resume 能力；跨 issue 共识度较高，是架构级提案（🚧 多标签，长期开放中）。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/1917)

**7. #5426 — v0.9.9: 给 scouts/reviewers 一个可用的只读 shell（拆分 classifier）**
标签：bug（CLOSED）
创建 08-16，更新 08-16，评论 2，v0.9.9 已关闭
社区反应：只读 agent 与 TUI 只读模式通过 `is_parallel_readonly_command` gate 每个 bash 调用——该 classifier 为父进程的并行 auto-approve 构建、过紧导致 scouts 无法运行 `git log` 等基础命令；随 #5438 修复。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5426)

**8. #5403 — main 分支双平台全红：macOS plugin_e2e_acceptance、Windows NSIS provisioning**
标签：main 健康
创建 08-15，更新 08-16，评论 2
社区反应：继 #5395 防止 main 相互取消后 4 个已完成 run 双平台全红（含 `ee1f9cb9e` 等 4 个 commit）；核心阻断项。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5403)

**9. #5413 — 回归：sudo 不可用（v0.8.65 正常）**
标签：bug（CLOSED）
创建 08-16，更新 08-16，评论 2
社区反应：wheel 组内 `sudo -n true` 在 v0.9.7 下失败（MAX Full Access 下亦如此）；已关闭（快速修复）。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5413)

**10. #5436 — 宽终端下 prose 约 105 列换行、tool cell 全宽，transcript 偏左**
标签：TUI / UX（CLOSED）
创建 08-16，更新 08-17，今日更新
社区反应：`PROSE_MAX_MEASURE = 105` 将用户/助手/推理 prose 限制在 105 列，宽屏下右半边死区明显；随 PR #5446 `transcript.prose_measure` 可配置修复。
[查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5436)

---

## 重要 PR 进展（精选 10 条）

**1. #5459 — TUI 全面"诚实化"：上下文窗口 / 输出上限 / 遥测来源标注**
标签：fix / 全新
摘要：对每个渲染"估算数字"的面板做诚实性检查——未验证的数字仍驱动真实预算，但会标注来源并关联可修复的配置键（#5239 #5440 #5441）。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5459)

**2. #5458 — Agent 工具 schema 精简至 12 个字段（原 33 个）**
标签：feat / subagent
摘要：模型侧 `agent` 工具仅发布 `action/prompt/type/profile/name/agent_id/message/detached/worktree/write_roots/resume_from/until` 12 个字段；被移除字段仍保留 parse-accept 以兼容进度文件——大幅降低模型误用面。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5458)

**3. #5456 — bwrap sandbox 容器基础组件 + 可配置额外绑定根**
标签：feat / sandbox
摘要：Linux bwrap 默认挂载私有 `/dev`、`/proc`、`/tmpfs /tmp`，修复 `/dev/null` 写失败（EROFS）问题；新增 `bwrap_ro_roots`、`bwrap_rw_roots` 可配置根，解决 #5410（Zig + 系统库链接场景）。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5456)

**4. #5446 — Prose 全宽渲染 + `transcript.prose_measure` 上限**
标签：fix / TUI
摘要：移除 `PROSE_MAX_MEASURE = 105` 对 user/assistant/thinking 文本的截断，修复宽终端右侧 1/3 死区问题（#5436）；保留可配置上限供窄屏使用。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5446)

**5. #5445 — DSH 响应方言路由修复（pi-ai openai-responses）**
标签：fix / integrations
摘要：`codewhale integrations dsh plan` 拒绝默认 DeepSeek 路由 `deepseek/deepseek-v4-flash`（endpoint `responses`）；此 PR 让 `dsh-llm-deepseek` 支持 Responses 方言，打通 v4-flash 全链路。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5445)

**6. #5450 — 恢复会话成本显示（实时定价不可验证时）**
标签：fix / TUI
摘要：会话成本不再永远保持 `unverified_live_pricing`——当 `api.codewhale.net/session` 返回 503 `control_plane_not_attached` 时走诚实路径（显示标记 + 关联配置键修复）；超驰 #5402（cherry-pick 并修正 co-author 格式）。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5450)

**7. #5457 — Agent focus 自动评审收据测试去 flake**
标签：test / PTY
摘要：macOS CI 不稳定源 `agent_focus_pty::auto_review_gates_a_workers_call_and_the_receipt_shows_in_focus`，修复焦点转移后 Enter 未聚焦 worker 的问题（frame 截断块分析）。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5457)

**8. #5438 — Scout 姿态门必须遵循 #5428 的只读 shell**
标签：fix / fleet
摘要：新构建（main @ 4b40ecbe）中 scout 的 `git log`、`git status` 等 3 个标准检查命令被全部拒绝——此 PR 修复只读 shell 与并行 auto-approve classifier 的冲突，落实 #5426 机制。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5438)

**9. #5444 — `/rename` 和 `/title` 支持首轮中途生效**
标签：fix / session
摘要：首次对话轮次完成前只有 crash checkpoint（`sessions/<id>.json` 尚未创建）；`rename_with_manager` 只加载主文件故重命名静默失效——此修复让中途命名落盘到 checkpoint。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5444)

**10. #5449 — Claude Code 功能对齐参考文档**
标签：docs / design
摘要：新增 `docs/design/CLAUDE_CODE_PARITY.md`：Agent/Workflow 工具、JS 脚本 API、journal replay、`/loop`、plugins/skills/agents/hooks 布局与单一 `Bash` 工具的实际行为对照表，基于运行会话直知。
[查看 PR](https://github.com/Hmbown/CodeWhale/pull/5449)

---

## 功能需求趋势

**1. 配置外置与显式化**：`HarnessPosture` 按模型定制上下文策略（#2693）、可配置模型可见 read/tool-result 大小限制（#5367）——需求从"fix 当前配置"转向"将架构中硬编码的模型策略开放为可配置层"（#4173 亦在推进反硬编码注册表）。

**2. Sandbox 深度可调**：#5410 bwrap 自定义额外根目录、/dev/null 白名单（#5456 已实现）——Linux 用户做系统级开发（Zig 链接系统库）触发 sandbox 灵活度需求；预期后续会出现更多权限/挂载点可配置请求。

**3. 架构级统一（hook/生命周期层）**：#1917 的 PreToolUse/PostToolUse 统一层长期开放且有 5+ 评论；社区共识倾向以跨 action 的统一任务生命周期管理替代碎片化特判，属于中长线演进信号。

**4. i18n 完整化**：#5452 新增 8 个 README 翻译（fr/de/zh-TW/hi/tr/it/pl/ar）、#5454 添加 7 个完整 web 词典 + RTL——项目已进入国际化冲刺阶段。

**5. DSH（DeepSeek Shell）集成完善**：#5434/#5445 打通 Responses 方言路由；DeepSeek 生态新工具（dsh）的接入是当前集成方向重点。

---

## 开发者关注点

- **回归质量**：连续两日出现 v0.8→v0.9 视觉/功能回归——宽屏渲染（#5322/#5436）、sudo 失效（#5413）。开发者对 v0.9.7 稳定性敏感，崩溃（#5424）在当日新 issue 中获 5 条评论，属高热度。
- **数字"诚实性"成共识**：上下文窗口、输出上限、成本显示（#5241/#5450/#5459）——社区不要求删掉估算值，而要求"标注 + 可配置 + 可追溯"。
- **"Scout"与 subagent 只读模式的可用性**：多个 issue（#5123/#5426/#5438）指向工具契约与实际执行能力脱节——角色标注（builder/scout）与底层真实权限不一致是当前架构最痛的体验问题。
- **CI 可靠性影响发版信心**：#5056（verifier flake）、#5403（main 双平台全红）是 release 前的老大难，开发者（含 owner）在 #5056 上有 12 个未分类 ignore 测试待处理——测试稳定性是社区预期 v0.9.9 应解决的优先级。
- **依赖升级噪音**：dependabot 持续批量升级（rmcp 2.2→3.1、tower-http 0.6→0.7、rusqlite 0.39→0.40、thiserror 2.0.19→2.0.20）——升级节奏对 TUI 这种输入/渲染敏感型工具有回归风险，社区密切关注。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*