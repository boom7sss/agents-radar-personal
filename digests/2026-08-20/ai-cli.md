# AI CLI 工具社区动态日报 2026-08-20

> 生成时间: 2026-08-20 10:58 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 — 2026-08-20

## 1. 生态全景

当前 AI CLI 工具赛道已全面进入**多智能体协作、安全加固与标准化兼容**的竞争阶段。各工具并行推进：Claude Code 以 v2.1.237/236 强化配置与跨会话协作能力，OpenAI Codex 密集发布 3 个 Rust 预发布版并集中收紧沙箱与供应链安全，Gemini CLI 发布 v0.56.0 正式版并修复代理链路可靠性，Copilot CLI 则因 1.0.81 预发布系列质量问题（权限绕过、UI 卡死等 7 个回归）而承压。值得注意的是，**AGENTS.md 标准化**（Claude Code #6235，4852 👍）与 **Windows 平台体验**（多个工具的高频问题）已成为跨工具共识议题，而安全从"补丁式修复"转向"架构级重构"（Codex PR 与 Qwen Code 审查管线）是本日最醒目的行业信号。

## 2. 各工具活跃度对比

| 工具 | 今日版本发布 | Issue 热度（Top 关注度） | PR 动态 | 社区规模信号 |
|---|---|---|---|---|
| **Claude Code** | v2.1.237 / v2.1.236（正式） | 榜首 #6235（4852 👍）；Windows GPU 崩溃 #81698（48 💬） | 过去 24h 无新增 | 最庞大的社区基数（单 issue 近 5000 👍） |
| **OpenAI Codex** | 3 个 Rust 预发布（0.149.0-alpha.2→4） | #28969（197 👍 / 83 💬）；Windows 浏览器插件 #39136（82 💬） | 10+ 个合入（安全加固为主线） | 高度活跃，预发布迭代密集 |
| **Gemini CLI** | v0.56.0（正式）+ v0.57.0-preview.0 | #28802（38 👍）；subagent 误报 #22323（P1） | 8 个 PR 在推进 | 中等活跃，P1 bug 集中 |
| **Copilot CLI** | v1.0.81-4 / 81-5（预发布） | 24h 新增 17 个 Issue，多个回归指向 1.0.81 | 无新增 | 预发布质量引发集中质疑 |
| **Kimi Code CLI** | 无 | 无 | 无 | 过去 24h 完全静默 |
| **OpenCode** | v1.18.19（正式） | #28089/#42700 资源泄漏（累积数百 GB）；#11865 子代理卡死（👍19） | 10 个在推进（含 2.0 架构重构） | 活跃，2.0 迁移期阵痛明显 |
| **Pi** | 无新 release（v0.9.10 系合并 10+ PR）| #7547 Windows 调研（32 💬）；#6879（17 👍） | 10 个合入/在推进（含 3 个合并） | 中高活跃，PR 合并效率高 |
| **Qwen Code** | nightly.20260820 + 2 个验证基准 | #9089（P1 安全）、#9573（会话恢复） | 10 个在推进（安全审查驱动） | 中高活跃，安全议题主导 |
| **DeepSeek TUI（CodeWhale）** | v0.9.10（正式，76 commits） | #998（11 💬）、#5519（isZh 迁移论战） | 10 个（3 个架构重构主线） | 中等活跃，品牌迁移期 |

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **AGENTS.md 标准化** | Claude Code（#6235，4852 👍）、OpenAI Codex（PR #39653）、Gemini CLI（#27114） | 跨工具统一项目指令格式，降低多工具切换成本；Codex 已落地读取权限校验 |
| **Windows 平台一等公民化** | Claude Code（#81698 GPU 崩溃）、Codex（#39136、#25271）、Copilot CLI（#4524）、Gemini CLI（#28926 文档）、Pi（#7547 调研）、OpenCode（#28089 CentOS） | GPU 崩溃、浏览器插件、TUI 渲染、路径深度、沙箱过严等全栈适配问题 |
| **子代理/多智能体可靠性** | OpenCode（#11865 卡死）、Gemini CLI（#22323 误报成功、#21409 卡死）、Copilot CLI（#4533 UI 卡死）、Qwen Code（#9507） | 超时/重试机制缺失、误报成功、UI 挂起、输出丢失 |
| **跨会话协作与持久化** | Claude Code（SendMessage notify_when_idle）、Qwen Code（#8724 → PR #9576 UNIX socket）、Copilot CLI（#4539 会话丢失）、Pi（#8348 fork 缓存失效） | 跨会话消息传递、会话 ID 一致性、fork 后缓存/上下文恢复 |
| **MCP 生态兼容与安全** | Claude Code（#86142 draft-07 拒绝）、Copilot CLI（#4525 协议回归）、Gemini CLI（#28787 配置损坏 fail-open）、Pi（#5515 图片内容） | outputSchema 方言兼容、初始化协议、损坏配置防护、富内容转发 |
| **权限控制与安全边界** | Copilot CLI（#4537 自动批准回归、#4528 绕过企业配置）、Codex（AGENTS.md 读取校验、patch 符号链接）、Qwen Code（runner 级隔离、git 身份固定） | 沙箱收紧、权限不可绕过、供应链攻击面收敛 |
| **新模型快速接入** | Gemini CLI（#28802 Flash 3.5/3.6/3.7，38 👍）、Codex（SDK 新增 max/ultra 档位）、Pi（Gemini 3.x thought_signature）、Qwen Code（混合模型推理控制） | 对新模型第一时间支持与推理档位透传 |

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 多会话协作、输出风格精细化、跨会话通知 | Anthropic 生态核心用户，注重对话体验 | 闭源 CLI + 桌面端，生态锁定（CLAUDE.md） |
| **OpenAI Codex** | 安全沙箱、SDK 可编程性、Guardian 审查机制 | 企业级用户、对供应链安全敏感的团队 | Rust 重写 + 多形态（Desktop/CLI/协作子代理），安全优先 |
| **Gemini CLI** | 多代理协作架构、行为评估体系、Auto Memory | Google 生态用户，探索多代理工作流 | 与 Google AI Studio/A2A 协议深度集成，评估体系化 |
| **Copilot CLI** | 企业权限管控、GitHub 生态整合 | GitHub Enterprise 客户、受管制企业 | GHEC 数据驻留、企业托管配置（disableBypassPermissionsMode） |
| **OpenCode** | 2.0 架构现代化、插件 API、TUI 体验 | 开源社区、桌面端重度用户 | 大规模重构（Effect RPC、冷启动优化），TUI 与桌面并行 |
| **Pi** | 会话管理精细化、多 provider 兼容、Windows 调研 | 多模型切换用户、终端控 | 会话级配置（#8356）、per-model 压缩、跨 provider 修复 |
| **Qwen Code** | 自动化安全审查管线、Agent Team、Web Shell | 中文开发者、CI/CD 深度用户 | 审查驱动开发（reviewer 机器人主导）、跨会话通信 |
| **CodeWhale** | 中文支持、本地 vLLM 部署、i18n 架构 | 中文用户、深度本地部署 | 品牌重塑期，Rust TUI + 本地模型调优 |

## 5. 社区热度与成熟度

**成熟型（社区规模大，但演进速度趋于稳定）**：
- **Claude Code** — 社区规模最大（单 issue 4852 👍），issue 讨论深刻但 PR 节奏放缓（24h 无新增）——已进入生态沉淀期。

**快速迭代型（发布频率高，PR 合入密集）**：
- **OpenAI Codex** — 24h 内 3 个预发布 + 10+ PR 合入，节奏最快，安全加固主线明确。
- **Gemini CLI** — 正式版 + 预览版同日发布，8 个 PR 在推进，P1 bug 修复优先。
- **OpenCode** — v1.18.19 发布 + 10 个 PR，2.0 重构期架构变动频繁。
- **Pi** — 10 个 PR（6 个已合并），合并效率高，社区反馈转化快。
- **Qwen Code** — 10 个 PR（安全审查驱动），夜版持续迭代。

**质量承压型**：
- **Copilot CLI** — 24h 内 17 个新 Issue，1.0.81 预发布系列至少 7 个回归问题，社区信任度面临考验。
- **CodeWhale** — 品牌迁移期 + i18n 架构迁移方向反向（isZh 分支 30 天不降反升）、连续两个版本引入回归，发布门禁待强化。

**静默型**：
- **Kimi Code CLI** — 24h 完全无动态，活跃度垫底。

## 6. 值得关注的趋势信号

1. **AGENTS.md 正成为行业标准，而非 Claude 专属**：#6235 以 4852 👍 成为跨工具最强共识，Codex 已率先实现读取权限校验。对开发者而言，**新项目从第一天就采用 AGENTS.md 而非工具专属格式**将是降低未来切换成本的关键决策。可以预期其他工具（Gemini、OpenCode、Pi）将陆续跟进。

2. **安全防线从"补丁式修复"转向"架构级重构"**：Codex 一周内合并 5+ 安全 PR（AGENTS.md 读取权限、patch 符号链接防 TOCTOU、插件迁移限定 home）、Qwen Code 审查管线连续提交（runner 隔离、git 身份固定、变异探测），Copilot CLI 则因 ACP 权限回归（#4537）暴露出"已修复问题被重新引入"的风险。**安全工程正在成为 AI CLI 的核心竞争维度而非附属特性**，建议企业用户在选用工具时将安全审计能力列为第一优先级。

3. **Windows 已成为衡量成熟度的试金石**：Claude Code GPU 崩溃（#81698）、Codex 浏览器插件失败（#39136）、Copilot 沙箱过严（#4524）、Pi 主动发起调研（#7547）——几乎每个工具都在 Windows 上"补课"。**对 Windows 开发团队而言，当前所有 AI CLI 工具的体验差距都在缩小但整体仍落后于 macOS**，选择时需重点评估目标平台的实际表现。

4. **子代理可靠性是最大共性痛点**：OpenCode 子代理卡死（#11865）、Gemini subagent 误报成功（#22323，P1）、Copilot 并行子代理 UI 卡死（#4533）、Qwen Code teammate 输出丢失（#9507）——多智能体架构从"演示可用"到"生产可靠"仍有一段距离。**对深度依赖 agent 自动化的团队，建议对关键任务设置人工确认节点，不要盲信子代理的"success"报告**。

5. **配置可编程性与可观测性成为新需求前线**：Copilot CLI 的 `autoUpdate: false` 被忽略（#4534）、Qwen Code 的 `OTEL_RESOURCE_ATTRIBUTES` 不生效（#87991）、OpenCode 的配置写入与读取路径不一致（#43613）——用户对"配置是否真正生效"的信任正在经受考验。同时 Claude Code 新增 `ANTHROPIC_DEFAULT_MODEL`（跨重启持久化）、Codex SDK 新增 `max`/`ultra` 推理档位，表明**工具链正在从"能用"走向"可精确控制"**，开发者应关注配置系统的幂等性与可验证性。

6. **跨会话/跨工具协作是下一波竞争焦点**：Claude Code 的 `notify_when_idle`、Qwen Code 的 UNIX socket 跨会话消息（#9576）、Pi 的 `prompt()` 事件发射——各工具都在为"多会话协作"铺路。结合 AGENTS.md 标准化浪潮，**未来的 AI 开发环境将不是单工具单会话，而是多工具多智能体协作网络**，提前布局的团队将获得效率红利。

---

*数据来源：上述各工具社区日报（2026-08-20）。所有 Issue 编号与链接均来自原文。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-20）

## 1. 热门 Skills 排行

按社区关注度（评论数/关注数）排序，以下为最受关注的 5~8 个 Skills：

| # | Skill | 核心功能 | 社区关注点 | 状态 |
|---|-------|---------|-----------|------|
| 1 | **skill-creator 修复** ([PR #1298](https://github.com/anthropics/skills/pull/1298)) | 修复 `run_eval.py` 在所有场景下错误报告 `recall=0%` 的问题，涉及 Windows 流读取、触发检测及并行 worker 修复 | 配合 Issue #556（12 条评论、7 个赞），该 bug 影响 skill-creator 的优化闭环，≥10 次独立复现 | **Open** |
| 2 | **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) | AI 生成文档的排版质量控制：防止孤儿词换行、段首标题滞留页底（widow）、编号错位 | 面向所有 AI 生成文档的通用痛点，覆盖面广 | **Open** |
| 3 | **ODT skill** ([PR #486](https://github.com/anthropics/skills/pull/486)) | OpenDocument 格式（.odt/.ods）的创建、填充、读取及 ODT→HTML 转换，补充 docx/pdf 之外的文档格式覆盖 | 补齐文档格式矩阵，与既有 docx/pdf skill 形成互补 | **Open** |
| 4 | **skill-quality-analyzer / skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83)) | 两个元技能：前者从结构、质量等五维度评估 Skill；后者做安全分析 | 呼应 Issue #492 对 Skill 安全性的社区关切 | **Open** |
| 5 | **testing-patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)) | 全栈测试模式：Testing Trophy 模型、AAA 模式、单元测试命名、纯函数边界等 | 社区对工程化测试方法论的需求明确 | **Open** |
| 6 | **service-now 平台技能** ([PR #568](https://github.com/anthropics/skills/pull/568)) | 覆盖 ServiceNow 全平台：ITSM、ITOM、ITAM/SAM、FSM、HRSD、SPM、CSDM、IntegrationHub | 定位于平台级助理而非窄脚本辅助，覆盖面大 | **Open** |
| 7 | **self-audit** ([PR #1367](https://github.com/anthropics/skills/pull/1367)) | AI 输出交付前审计：先做机械文件验证，再按损伤严重度优先级做四维推理审计，通用适配任意项目、栈、模型 | 配合 Issue #1385 的"推理质量门控流水线"提案，作者持续迭代 | **Open** |
| 8 | **pyxel 复古游戏开发** ([PR #525](https://github.com/anthropics/skills/pull/525)) | 为 pyxel-mcp（Pyxel 复古游戏引擎的 MCP 服务器）提供服务 | 面向像素风/8-bit 游戏开发者的垂直场景 | **Open** |

---

## 2. 社区需求趋势

从 Issues 中提炼的社区最期待方向：

- **技能分发与信任安全**（[Issue #492](https://github.com/anthropics/skills/issues/492)，43 条评论）：社区技能在 `anthropic/` 命名空间下分发造成信任边界滥用，用户可能向社区技能授予过高权限。这是当前最受关注的安全议题。
- **组织级技能共享**（[Issue #228](https://github.com/anthropics/skills/issues/228)，16 条评论、8 个赞）：用户希望直接在 Claude.ai 内实现组织级共享，替代当前手动下载 .skill 文件再经 Slack/Teams 传递的低效流程。
- **bug 修复优先于新功能**（[Issue #556](https://github.com/anthropics/skills/issues/556)，12 条评论）：`run_eval.py` 的 0% 触发率问题影响 skill-creator 核心闭环，社区投入大量精力修复基础工具链。
- **推理质量门控**（[Issue #1385](https://github.com/anthropics/skills/issues/1385)）：社区成员提出"任务前校准 → 对抗性审查 → 交付验证"三阶段质量流水线提案，与 self-audit skill 形成呼应。
- **上下文窗口效率**（[Issue #1487](https://github.com/anthropics/skills/issues/1487)）：`claude-api` skill 单次调用即注入 ~156k tokens，直接耗尽上下文窗口，暴露了 skill 设计中对 token 预算控制的忽视。
- **格式覆盖扩展**：ODT（[PR #486](https://github.com/anthropics/skills/pull/486)）与 SAP 预测模型（[PR #181](https://github.com/anthropics/skills/pull/181)）表明社区在持续拓宽文档格式与行业模型覆盖。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、仍在 Open 状态，近期可能落地：

| Skill | PR 链接 | 潜力原因 |
|-------|--------|---------|
| **skill-creator 修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | 直接解决 skill-creator 核心流程的致命 bug（0% recall），存在 ≥10 次独立复现，属于上游阻断性问题 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 通用性极强——所有 AI 生成文档都面临孤儿词/寡妇段问题，潜在用户面广 |
| **skill-quality-analyzer / security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 直接回应社区最大的安全关切（Issue #492），且是"关于 Skill 的 Skill"，有平台放大效应 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 覆盖完整测试栈，具备系统性方法论价值 |
| **Windows 兼容修复**（skill-creator） | [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | 多人在 Windows 上遇到 `run_eval.py`/`run_loop.py` 崩溃，修复简单（1 行改动）但解除平台限制 |

---

## 4. Skills 生态洞察

**一句话总结：** 社区当前最集中的诉求是 **"先修好再扩展"**——一方面要求修复 skill-creator 工具链在 Windows 上的基础可用性并控住上下文窗口的 token 爆炸，另一方面在安全意识上要求明确社区技能与官方技能的信任边界；而在新技能方向上，文档格式覆盖（ODT）、质量审计、测试方法论与平台类技能（ServiceNow/SAP）构成清晰的需求主线。

---

# Claude Code 社区动态日报 — 2026-08-20

## 今日速览

今日发布 v2.1.237 与 v2.1.236 两个版本，新增"Concise"输出风格与 `ANTHROPIC_DEFAULT_MODEL` 环境变量——后者将跨重启持久化，是对此前 `ANTHROPIC_MODEL` 的重要增强。社区最受关注的话题是 #6235（AGENTS.md 支持），以 4852 个 👍 和 371 条评论高居榜首，虽已关闭但热度不减；Windows 桌面版 GPU 崩溃问题（#81698）持续发酵，已成为当前最紧迫的待解决 bug。

## 版本发布

**v2.1.237**
- 修复了使用 LLM 网关或自定义 base URL 时 prompt 缓存失效的问题
- 新增内置 "Concise" 输出风格：Claude 直接给出结论，跳过开场白与叙述，在 /config 的 Output style 下可选

**v2.1.236**
- 新增 `ANTHROPIC_DEFAULT_MODEL` 环境变量：设置新会话默认模型；与 `ANTHROPIC_MODEL` 不同，`/model` 选择可覆盖它并跨重启持久化
- 为跨会话 `SendMessage` 增加 `notify_when_idle` 选项：可让另一个 Claude Code 会话在空闲时收到通知

## 社区热点 Issues（Top 10）

**1. #6235 [CLOSED] 支持 AGENTS.md 标准 — 👍4852 / 💬371**
https://github.com/anthropics/claude-code/issues/6235
社区呼声最高的功能请求。Codex、Amp、Cursor 等工具已开始围绕 [agents.md](https://agents.md/) 统一的 Markdown 格式标准化，而 CLAUDE.md 过于绑定 Claude Code 生态。用户期望 Claude Code 兼容 AGENTS.md 以降低多工具切换成本。虽已关闭，但 4852 个 👍 表明这是社区最强烈的诉求之一。

**2. #81698 [OPEN] Windows 桌面版 GPU 进程崩溃（exit code 101457950）导致整个应用与会话终止 — 💬48**
https://github.com/anthropics/claude-code/issues/81698
Windows 桌面版严重稳定性问题：RTX 5080 + 驱动 610.47 环境下 GPU 进程崩溃会连带杀死所有运行中的会话。48 条评论说明受影响用户面较广，是目前最紧迫的待修复 bug。

**3. #86142 [CLOSED] MCP 服务器声明 draft-07 outputSchema 时完全不可用 — 💬19 / 👍6**
https://github.com/anthropics/claude-code/issues/86142
MCP 客户端在分发前就以 "unsupported dialect" 拒绝 draft-07 格式的 outputSchema，导致使用该规范的 MCP 服务器整体不可用。兼容性修复对 MCP 生态发展很重要。

**4. #80468 [OPEN] Windows 桌面版最新更新后持续崩溃 — 💬16**
https://github.com/anthropics/claude-code/issues/80468
与 #81698 相关的 Windows 桌面版稳定性问题，最新更新后崩溃频率升高，用户反馈集中。

**5. #16239 [OPEN] Screenshot 和 JavaScript 工具报 "Cannot access a chrome-extension:// URL" 错误 — 💬16 / 👍21**
https://github.com/anthropics/claude-code/issues/16239
macOS 上截图与 JS 工具因 chrome-extension URL 权限限制而失败，已持续 7 个月未修复，👍21 反映该问题并非个例。

**6. #69068 [OPEN] 状态栏无法区分 ultracode 与 xhigh 推理模式 — 💬4 / 👍4**
https://github.com/anthropics/claude-code/issues/69068
状态栏 stdin JSON 中 `effort.level` 将 ultracode 折叠为 `xhigh`，自定义状态栏无法显示真实推理模式。对重度使用 ultracode 的用户影响明确。

**7. #67112 [OPEN] Fable 5 模型中工具调用前的回复文本不显示 — 💬3 / 👍6**
https://github.com/anthropics/claude-code/issues/67112
Fable 5 模型在同回合工具调用前生成的文本不展示给用户，但模型端假定用户已看到，导致交互断裂与信息丢失。

**8. #87991 [CLOSED] settings.json 中设置的 OTEL_RESOURCE_ATTRIBUTES 不生效 — 💬1**
https://github.com/anthropics/claude-code/issues/87991
通过 settings.json 或系统环境变量设置的 `OTEL_RESOURCE_ATTRIBUTES` 从未出现在 Claude Code 自身的 OTLP 遥测导出中，影响可观测性配置。

**9. #71075 [CLOSED] MCP 在 calendard.google.com 被阻断 — 💬1**
https://github.com/anthropics/claude-code/issues/71075
Windows 平台下 MCP 访问 Google Calendar 域被 Chrome 机制阻断，影响日历相关 MCP 集成。

**10. #72609 [CLOSED] /compact 和 /clear 前增加确认提示 — 💬3 / 👍4**
https://github.com/anthropics/claude-code/issues/72609
误触 /compact 或 /clear 会导致会话上下文丢失，用户希望增加确认步骤，属于低成本高收益的 UX 改进。

## 重要 PR 进展

过去 24 小时内无新增或更新的 Pull Requests。

## 功能需求趋势

- **AGENTS.md 标准化支持**：#6235 以压倒性优势成为最热门需求。社区强烈希望跟随 Cursor、Codex 等行业工具转向 AGENTS.md 统一标准，以降低多工具间的切换成本。
- **Windows 桌面版稳定性**：#81698 与 #80468 相继报告 GPU 崩溃与持续崩溃问题，Windows 平台稳定性正成为社区关注焦点。
- **跨会话协作与持久化**：#68390（可见的会话 ID）与 #72502（desktop worktree 导致的知识丢失）反映了对跨会话、跨分支工作流的需求。
- **模型相关特性**：#69068（ultracode 状态暴露）、#67112（Fable 5 显示问题）显示社区对新模型支持和状态透明度的关注。
- **MCP 生态完善**：#86142（draft-07 兼容）、#72431（失败 MCP 工具不可见）指向 MCP 兼容性与可观测性的提升空间。
- **UX 细节优化**：#72609（/compact 确认）、#69633（选中文本朗读）、#72667（大会话文件警告）等小改进请求密集，说明用户体验打磨空间仍大。

## 开发者关注点

- **Windows 稳定性是当前最大痛点**：GPU 进程崩溃导致整个应用退出、所有会话丢失（#81698），最新更新后崩溃加剧（#80468），Windows 用户对稳定性的投诉最为集中。
- **"无法看到"类问题频发**：Fable 5 工具调用前文本不显示（#67112）、失败的 MCP 工具对 Claude 不可见（#72431）、ultracode 状态无法在状态栏区区分（#69068）——"模型与用户看不到的东西"正成为一致的主题。
- **跨会话知识持久化需求明确**：desktop worktree 导致文档困在 feature 分支上（#72502）、转录文件膨胀至 80MB 导致应用卡死（#72667），说明长会话生命周期管理尚不完善。
- **配置可观测性不足**：OTEL 遥测属性被忽略（#87991），用户对 telemetry/状态的可见性要求逐渐提高。
- **AGENTS.md 标准采纳意愿强烈**：作为当前生态中最具影响力的 issue，社区明显倾向于拥抱行业通用规范，而非锁定在 Claude 专属的 CLAUDE.md。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-20

## 1. 今日速览

今日 Codex 仓库迎来密集更新：发布了 3 个 Rust 预发布版本（0.149.0-alpha.2/3/4），同时合并了 10+ 个来自 copyberry[bot] 的 PR，涵盖 GUARDIAN V2 评审机制、AGENTS.md 读取权限校验、unsandboxed 补丁沙箱加固等安全与稳定性议题。社区侧，一个关于“禁用 60 秒自动解析”的 CLI 配置请求已累计 197 👍、83 条评论，是当前最受关注的议题；多个 Windows 平台 bug（浏览器插件 RPC 初始化、后端传播不一致等）持续霸榜。

## 2. 版本发布

过去 24 小时发布了 3 个 Rust 预发布版本，均为 0.149.0 系列的 alpha 迭代，版本号依次为 0.149.0-alpha.2 → alpha.3 → alpha.4。官方未提供详细变更日志，建议关注相应 release tag 以获取差异说明。

- [rust-v0.149.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.2)
- [rust-v0.149.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.3)
- [rust-v0.149.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.4)

## 3. 社区热点 Issues（Top 10）

### 🔥 高热度

**#28969 — 请求添加配置：禁用 60 秒自动解析问题**[链接](https://github.com/openai/codex/issues/28969)
CLI 配置/计划相关的功能请求，83 条评论、197 个 👍，社区需求强烈。用户期望自行控制问题解析的确认时机，而非被 60 秒倒计时强制推动。此议题反映 CLI 交互设计对“人工确认”路径的追求。

**#39136 — Windows 版内置浏览器插件初始化失败（Trusted RPC 依赖错误）**[链接](https://github.com/openai/codex/issues/39136)
82 条评论，8 月 18 日创建，两天内即获得大量关注。浏览器插件在 Windows 上无法加载“Trusted RPC”依赖，影响桌面端浏览器操作类任务。

**#25271 — Windows 上 Computer Use 无法获取 Chrome URL**[链接](https://github.com/openai/codex/issues/25271)
24 条评论、8 👍，涉及 computer-use 浏览器自动化核心能力在 Windows 上的挫败，问题持续多月未关闭。

**#28276 — 归档会话失败 + 出现无意义线程**[链接](https://github.com/openai/codex/issues/28276)
22 条评论。会话管理/归档出现异常，Pro 20x 套餐用户在 macOS 上复现，指向桌面端会话数据一致性问题。

### ⚠️ 值得关注

**#37445 — 后台自动建议悄悄消耗 Codex 周配额（每次固定 6%）**[链接](https://github.com/openai/codex/issues/37445)
用户经控制实验证明：仅打开桌面应用（后台建议运行）即消耗周配额 6%，无需任何交互。配额计费机制被质疑。

**#36195 — 实时语音新会话未挂载到已选项目目录**[链接](https://github.com/openai/codex/issues/36195)
Real-time voice 会话在上下文隔离上出现回归，新对话未继承项目作用域，影响语音驱动开发流的体验。

**#37142 — 移动端 Remote 仅显示直接对话，遗漏配对 Windows 应用中的 SSH 项目**[链接](https://github.com/openai/codex/issues/37142)
远程开发场景的移动端可见性缺陷，SSH 项目未同步到移动端展示。

**#38417 — WSL2 上 codex-code-mode-host 0.147.0 崩溃（SIGTRAP on shell exec）**[链接](https://github.com/openai/codex/issues/38417)
0.147.0 在 WSL2 每执行 shell 命令即崩溃（int3 于固定偏移 0x982442），0.146.1 正常——明确的回归用例，利于二分定位。

**#30993 — $skill 调用解析到已卸载插件的过期缓存**[链接](https://github.com/openai/codex/issues/30993)
5 👍。旧版市场插件（Superpowers）的缓存致命中新装市场插件，导致 skill 执行错误版本。

**#32664 — 浏览器后端在 Desktop/CLI/子代理间传播不一致**[链接](https://github.com/openai/codex/issues/32664)
跨形态的浏览器后端配置（Desktop、CLI、collaboration 子代理）未统一，破坏协作场景的一致性预期。

## 4. 重要 PR 进展（Top 10）

**#39691 — 使 Guardian V2 父级压缩复用可配置**（OPEN）[链接](https://github.com/openai/codex/pull/39691)
新增 `features.guardianv2.reuse_parent_compaction` 配置（默认 true），允许关闭父级压缩项复用，提供 Guardian V2 行为的细粒度开关。

**#39658 — 允许 Guardian V2 满足强制模型评审需求**（CLOSED）[链接](https://github.com/openai/codex/pull/39658)
Guardian V2 审批监视器可处理需自动评审的模型；禁用 Guardian V2 时保留完整 Guardian 评审。

**#39666 — 跨平台改善 no-follow 文件系统行为**（CLOSED）[链接](https://github.com/openai/codex/pull/39666)
Linux 上改用 `statx` 获取 no-follow 元数据（含 birth time），并提供回退策略，统一跨平台语义。

**#39662 — 为 SDK 添加 max 与 ultra 推理档位**（CLOSED）[链接](https://github.com/openai/codex/pull/39662)
TypeScript `ModelReasoningEffort` 及 Python `ReasoningEffort` 新增 `max`、`ultra` 两档，并保留 SDK 再生成时的对应关系。

**#39653 — 加载 AGENTS.md 时实施文件系统读权限校验**（CLOSED）[链接](https://github.com/openai/codex/pull/39653)
项目指令必须受当前环境的文件系统读权限约束，防止后续轮次收紧权限后被“先前缓存”指令绕过。

**#39659 — 加固 unsandboxed patch 文件系统访问**（CLOSED）[链接](https://github.com/openai/codex/pull/39659)
修复 `apply_patch` 路径在验证后可被替换为符号链接的 TOCTOU 安全漏洞，杜绝越权写文件。

**#39663 — 插件迁移限定在用户主目录范围**（CLOSED）[链接](https://github.com/openai/codex/pull/39663)
插件导入持久化用户全局启用状态；仓库级配置不得选取可执行插件内容进行安装，收紧仓库供应链面。

**#39661 — 扩展 Vim 变更命令并支持字符替换**（CLOSED）[链接](https://github.com/openai/codex/pull/39661)
新增 `vim_normal.replace_char` 操作（默认绑定 `r`），在 normal 模式替换光标处字素；同时扩展其他变更命令。

**#39649 — 通过 bin junction 解析 Windows 内置助手**（CLOSED）[链接](https://github.com/openai/codex/pull/39649)
安装器 bin 目录可为 junction，旧逻辑易错过包内 `codex-resources`；新逻辑沿 junction 解析真实包资源路径。

**#39656 — 在图形化 Linux 会话中宣传 Desktop 应用**（CLOSED）[链接](https://github.com/openai/codex/pull/39656)
检测 `DISPLAY`/`WAYLAND_DISPLAY` 后，在 Linux 图形会话的 tooltip 池加入 Desktop 安装与启动指引，推进 Linux 桌面端采用。

## 5. 功能需求趋势

- **配置可编程性**（#28969 等）：用户希望将 CLI/Agent 的自动决策（如自动解析、自动压缩）改为显式配置开关，获得更强的人工掌控。
- **Desktop / CLI / 远程形态一致性**（#36195、#37142、#32664、#23209）：会话作用域、浏览器后端配置、项目列表等在各端（macOS/Windows/Linux、移动端远程、SSH）间要求统一行为，跨端回归被高频上报。
- **沙箱与供应链安全**：PR 侧集中体现为权限收紧——AGENTS.md 读取校验、patch 符号链接防护、插件迁移限定 home 范围，安全加固已成为本周主线。
- **SDK / 模型能力更新**：#39662 为 SDK 新增 `max` / `ultra` reasoning 档位，暗示新推理强度模型即将或已进入 Codex 生态。
- **Windows 平台一等公民化**：内置浏览器插件、Computer Use Chrome URL、Windows helper 解析等持续修复，Windows 体验在追赶 macOS。

## 6. 开发者关注点

- **Windows 是主要痛点平台**：本周 20 个高热度 Issue 中近半为 `windows-os` 标签，覆盖浏览器插件、Computer Use、PowerShell 默认 shell、会话状态机卡死等，建议优先投入 Windows 回归测试矩阵。
- **安全与权限收紧的连锁反应**：AGENTS.md 读写权限、插件迁移范围、patch 安全等改动，提示开发者需注意自己配置的权限策略需适配新内核策略；对自建插件制作者，插件安装路径与缓存机制发生变化值得留意。
- **SDK 与运行时对齐成本**：SDK 新增 `max` / `ultra` 枚举值；若已自行封装 reasoning effort 枚举，需及时同步以继续编译。
- **7 月回归集中**：`codex-code-mode-host` 0.147.0 SIGTRAP（#38417）、Desktop “Selected model is at capacity”（#39643 新开）、Guardian 重复线程（#38986）等皆指向 0.147.0 / 26.7xx 时代的引入回归——若在产线使用，建议评估是否需要 pin 到更早版本。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-20

## 今日速览

今日 Gemini CLI 发布了 v0.56.0 正式版及 v0.57.0-preview.0 预览版，修复了 Cloud Workstations OAuth 代理和 IDE 连接目录不匹配等问题。社区热点集中在 subagent 最大轮次后仍误报成功、通用 agent 卡死以及新模型（Flash 3.5/3.6/3.7）接入的呼声。

## 版本发布

### v0.57.0-preview.0（预览版）
- **修复**：动态解析 Cloud Workstations 代理重定向 URI 以支持 OAuth 流程（PR #28688）
- **修复**：解决 IDE 连接中目录不匹配被吞掉的问题

### v0.56.0（正式版）
- 于今日正式发布，完整变更日志参见 [compare/v0.55.1...v0.56.0](https://github.com/google-gemini/gemini-cli/compare/v0.55.1...v0.56.0)

### v0.56.0-nightly.20260820.ge90c63fa1（夜间版）
- **修复**：保留带有工具或媒体的空文本轮次（PR #28892）
- 包含 v0.57.0-preview.0 的变更日志

## 社区热点 Issues

1. **[#28802 — 最新 Gemini 模型（Flash 3.5/3.6/3.7）集成请求](https://github.com/google-gemini/gemini-cli/issues/28802)**
   ✅ 38 👍 | 10 评论
   社区呼声最高的功能请求，要求将 Flash 3.5、3.6、3.7 全面接入 Gemini CLI。高赞数表明新模型支持是当前用户最迫切的需求。

2. **[#22323 — Subagent 在 MAX_TURNS 后误报 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323)** 🔒
   P1 | 12 评论 | 2 👍
   严重 bug：`codebase_investigator` 子代理在未完成分析就达到最大轮次限制时，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实的中断原因，可能导致用户误判任务完成。

3. **[#21409 — 通用 agent（generalist agent）永久卡死](https://github.com/google-gemini/gemini-cli/issues/21409)** 🔒
   P1 | 8 评论 | 8 👍
   `gemini-cli` 委派给通用 agent 时无限挂起，即使创建文件夹等简单操作也会卡住，用户等待长达一小时。该问题已持续 5 个月仍待重测，社区关注度较高。

4. **[#24353 — 组件级评估（Component Level Evaluations）](https://github.com/google-gemini/gemini-cli/issues/24353)** 🔒
   P1 | 7 评论
   大型 EPIC，延续 #15300 引入的行为评估概念，目标是建立更健壮的组件级评估体系，推动 agent 质量保障的系统化。

5. **[#22745 — AST 感知文件读取/搜索/映射影响评估](https://github.com/google-gemini/gemini-cli/issues/22745)** 🔒
   P2 | 7 评论
   调查 AST 感知工具是否能在单次工具调用中更精确读取方法边界、减少轮次，以及更精准的代码库映射能力——直接影响 agent 处理大型代码库的效率。

6. **[#21968 — Gemini 不主动使用 skills 和 sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)** 🔒
   P2 | 6 评论
   用户反馈模型几乎不会主动调用自定义 skills 和子代理，仅在被明确指示时才使用。这限制了 Gemini CLI 多代理协作架构的实际效用。

7. **[#25166 — Shell 命令执行完成后卡在 "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** 🔒
   P1 | 4 评论 | 3 👍
   简单的 CLI 命令执行完后就挂起，界面仍显示命令活动并等待输入。影响日常使用的可靠性和自动化流程。

8. **[#26522 — Auto Memory 无限重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26522)** 🔒
   P2 | 5 评论
   内存提取代理仅在成功读取转录后才标记会话已处理，导致低信号会话被无限重试，浪费资源且可能阻塞后续处理。

9. **[#26525 — Auto Memory 增加确定性脱敏并减少日志](https://github.com/google-gemini/gemini-cli/issues/26525)** 🔒
   P2 | 4 评论
   安全相关：Auto Memory 读取本地转录并将内容发送给提取模型，脱敏指令在内容发送之后才执行。用户要求在处理前进行确定性脱敏，属于数据安全的关键改进。

10. **[#27114 — ~/.gemini/.env 与不可信文件夹的安全问题](https://github.com/google-gemini/gemini-cli/issues/27114)**
    P3 | 3 评论 | 2 👍
    Workspace 用户需要设置 `GOOGLE_CLOUD_PROJECT` 到 `~/.gemini/.env`，但与不可信文件夹机制存在安全冲突，涉及环境变量泄露风险。

## 重要 PR 进展

1. **[#28828 — 预览模型被静默替换时发出警告](https://github.com/google-gemini/gemini-cli/pull/28828)** 🔒
   修复 #28825：当用户请求预览模型但账户无对应权限时，`Config` 静默将模型重写为 `auto-gemini-2.5`。此 PR 增加警告机制，提升透明度和可诊断性。

2. **[#28926 — 新增 Windows longpaths 配置文档](https://github.com/google-gemini/gemini-cli/pull/28926)**
   向 CONTRIBUTING.md 添加 Windows `core.longpaths=true` 配置说明和恢复步骤，解决 Windows 上因快照文件路径过深导致克隆失败的问题。

3. **[#28832 — 跳过环境依赖测试而非失败](https://github.com/google-gemini/gemini-cli/pull/28832)**
   关闭 #28830：Windows 全新检出时 `packages/core` 有 13 个测试失败（8 个需 Windows 默认未授予的权限，4 个需 PowerShell），全部与产品缺陷无关。改为带原因跳过。

4. **[#28917 — WhisperModelManager 原子下载与失败清理](https://github.com/google-gemini/gemini-cli/pull/28917)**
   修复 #28644：`downloadModel()` 改为写入临时文件、尊重写流背压、处理流错误、验证下载长度、失败时清理临时文件。

5. **[#28916 — WhisperTranscriptionProvider 缓冲部分 stdout 块](https://github.com/google-gemini/gemini-cli/pull/28916)**
   修复 #28648：引入 stdout 块行缓冲，确保被任意 `data` 事件切分的带时间戳转录行能正确拼接而非丢失。

6. **[#28701 — 修复 TRUST_PARENT 规则优先级](https://github.com/google-gemini/gemini-cli/pull/28701)**（已关闭）
   修复文件夹信任解析中 TRUST_PARENT 规则的优先级问题——原先"最长匹配优先"策略可能与 TRUST_PARENT 语义冲突。

7. **[#28699 — A2A 服务器强制执行认证并阻止路径穿越](https://github.com/google-gemini/gemini-cli/pull/28699)**（已关闭）
   安全修复：A2A 服务器的自定义 REST 路由绕过 `UserBuilder` 认证，且存在 checkpoint 路径穿越漏洞。

8. **[#28788 — 行为评估：技能激活与 URL 抓取](https://github.com/google-gemini/gemini-cli/pull/28788)**
   为 `activate_skill` 和 `web_fetch` 添加行为评估测试，同时改进本地评估环境的 Windows 兼容性并修复关键 bug。

9. **[#28789 — 修复 vscode-ide-companion 的 stop() 挂起与 keep-alive 阈值问题](https://github.com/google-gemini/gemini-cli/pull/28789)**
   修复 #28785：解决 `IdeServer.stop()` 在活动 MCP 流会话开启时无限挂起，以及 keep-alive 资源泄漏问题。

10. **[#28787 / #28794 — MCP 配置文件损坏处理](https://github.com/google-gemini/gemini-cli/pull/28787)**
    两个相互配合的 PR：修复 `mcp-server-enablement.json` 损坏时被当作空配置处理的问题，防止 fail-open 行为和数据丢失。涉及安全漏洞修复（#28786）。

## 功能需求趋势

- **新模型支持**（#28802，38 👍）：Flash 3.5/3.6/3.7 的接入请求是当前最高赞的需求，用户希望第一时间使用最新模型能力。
- **Agent 稳定性和行为改进**：多个 P1/P2 问题集中在 subagent 误报成功（#22323）、通用 agent 卡死（#21409）、浏览器 agent 在 Wayland 下失败（#21983）、shell 命令挂起（#25166）等，反映 agent 链路是当前最大痛点。
- **AST 感知能力**（#22745）：社区和团队在探索 AST 感知的文件读取与代码库映射，目标是在更少轮次内完成精准代码操作。
- **Auto Memory 安全加固**（#26522/#26523/#26525）：三个相关 issue 分别涉及重试风暴、无效补丁隔离和确定性脱敏，表明记忆系统的安全性和健壮性是重点方向。
- **主动使用 skills/sub-agents**（#21968）：用户期望 Gemini 能自主判断何时调动子代理和自定义技能，而非被动等待指令。
- **安全与信任边界**（#27114）：环境变量管理（`~/.gemini/.env`）与不可信文件夹机制的冲突，以及 A2A 服务器认证加固（#28699），体现安全边界的持续完善。

## 开发者关注点

- **误报成功是最高优先级 bug**：#22323 揭示 subagent 达到轮次限制后被错误报告为成功，此类问题直接破坏对 agent 行为的信任，是开发团队需要优先解决的可靠性问题。
- **agent 卡死和挂起类问题高频出现**：通用 agent（#21409）、shell 命令（#25166）、vscode-ide-companion stop()（#28789）多个挂起问题并存，严重影响自动化工作流。
- **Windows 体验显著落后**：文档缺失（#28926）和测试环境问题（#28832）并存，Windows 用户的开发体验需要系统性改进。
- **模型不主动调用工具**：开发者普遍反映 Gemini 不会自发使用 skills 和子代理（#21968），这削弱了多代理架构的价值，需要改进模型的工具选择策略。
- **MCP 配置损坏防护被高度重视**：两个 PR 同时针对 corrupt MCP enablement config 的 fail-open 漏洞（#28787/#28794），安全社区对此类缺陷反应迅速。
- **下载与流式处理稳定性**：两个 Whisper 相关修复（#28917/#28916）针对大文件下载和流式输出的边界条件，表明语音转录管线的可靠性正在夯实。

---

*🔒 标记表示 maintainer-only issue/PR（讨论受限，但内容可公开查看）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-20

## 今日速览

Copilot CLI 在 8 月 19 至 20 日集中发布了两个预发布版本（v1.0.81-4、v1.0.81-5），主要修复了 agent 工作期间发送提示导致 transcript 出现重复 `(pending)` 行的问题。与此同时，社区在 24 小时内新增了大量 Issue（共 17 条），涉及权限绕过、MCP 初始化回归、终端渲染卡死、会话丢失等多项严重问题，且多个回归与 1.0.81 预发布系列直接相关，1.0.81 系列质量受到集中质疑。

## 版本发布

**v1.0.81-5** — 修复：agent 工作期间发送提示后，不再在 transcript 底部遗留第二份卡住的 `(pending)` 副本。该问题与 Issue #4532（pending 行重复且无法消失）相关。

**v1.0.81-4** — 包含多项修复和变更，未提供详细说明。

## 社区热点 Issues（Top 10）

**1. [#4537 ACP 模式自动批准工具调用回归](https://github.com/copilot-cli/issues/4537)** — 🔥 高严重度
自 1.0.81-1 起，`--acp` 模式不再发送 `session/request_permission`，Shell 命令、文件编辑和删除在无人值守下执行。这是对 #845（已修复历史问题）的回归，属于**权限安全类问题**。作者：richardjv-msft。👍 0。

**2. [#4524 强制沙箱过于严格，Git 无法使用](https://github.com/copilot-cli/issues/4524)** — 🔥 高严重度
最新版强制沙箱（enforced-sandbox）导致 agent 无法使用 Git。用户已启用整个工作目录和 `~/.copilot` 仍无法解决，反馈"super broken and overly restrictive"。Windows 平台。作者：logar16。👎 3 条评论。

**3. [#4528 非交互模式绕过权限禁用设置](https://github.com/copilot-cli/issues/4528)** — 🔥 安全漏洞
`-p`/`--prompt` 配合 `--allow-all`/`--yolo` 时自动授予权限，即使企业托管设置 `disableBypassPermissionsMode` 已配置为 true。企业级安全配置失效。作者：im-aIex。

**4. [#4535 store_memory 在 1.0.81 预发布版中失败](https://github.com/copilot-cli/issues/4535)** — 功能受损
`store_memory` 在 1.0.81 预发布版本中持续失败，报错 `Instance id is required`，原生内存写入器缺少必需实例 ID。影响上下文记忆功能。作者：DavidTeju。2 条评论。

**5. [#4533 并行子代理导致终端 UI 卡死](https://github.com/copilot-cli/issues/4533)** — 严重
在 1.0.81-4/-5 上，当 turn 启动并行子代理块时，终端 UI 停止消费运行时事件，输入和滚动均失效，但 Rust 运行时仍在运行。作者：bikramjitk。

**6. [#4525 MCP 初始化发送过时 initialize 导致 -32022](https://github.com/copilot-cli/issues/4525)** — 兼容性回归
1.0.81-1 在成功进行现代 `server/discover` 后，仍发送旧版 `initialize`，导致与 Python MCP SDK 2.0.0 双时代 runner 的 stdio 服务器初始化失败。作者：dmbutko。

**7. [#4539 Ctrl+Z 后会话丢失，本地/云端 ID 不一致](https://github.com/copilot-cli/issues/4539)** — 数据丢失
1.0.81-4 上误按 Ctrl+Z 后会话消失，本地与云端会话 ID 不一致。作者：ylin9。Linux。

**8. [#4534 autoUpdate: false 被忽略](https://github.com/copilot-cli/issues/4534)** — 配置失效
预发布构建缓存到 `~/.copilot/pkg/<platform>/` 后，即使用户通过 npm 安装了稳定版且设置 `"autoUpdate": false`，CLI 仍在每次启动时重新执行缓存的预发布构建。作者：bikramjitk。

**9. [#4527 GHEC 数据驻留租户下 prompt 模式 401 失败](https://github.com/copilot-cli/issues/4527)** — 企业功能受损
在带数据驻留的 GitHub Enterprise Cloud 租户（`<tenant>.ghe.com`）上，非交互模式 `copilot -p` 启动时报 `Authentication failed`，模型目录请求错误地访问 `api.githubcopilot.com` 而非租户端点。交互模式正常工作。作者：AvitalLivshits。

**10. [#4532 Pending 行重复堆积填满屏幕](https://github.com/copilot-cli/issues/4532)** — 体验问题
agent 工作期间提交响应后，`(pending)` 行挂在屏幕底部不消失，多次提交后堆积填满整个屏幕。与 v1.0.81-5 修复的问题高度相关。作者：logar16。

## 重要 PR 进展

过去 24 小时内无新的 Pull Request 更新。

## 功能需求趋势

从近期 Issues 中可提炼出以下社区关注方向：

- **模型与权限管理**：组织启用的模型（如 Claude Sonnet 5/Opus 5、Kimi K3）在目录中缺失（#4390），同时权限绕过问题频发（#4528、#4537），企业级权限管控成为核心诉求
- **MCP 生态兼容性**：MCP 初始化协议（#4525）和 MCP 工具结果中的图像内容块透传（#4536）表明社区对 MCP 集成深度和规范兼容性要求提高
- **会话持久化与恢复**：多轮 `/ask` 支持（#4538）、reasoning effort 跨会话持久化（#4530）、会话在重启/断线后的恢复（#4529、#4539）等需求显示出用户对工作流连续性的重视
- **终端交互与渲染稳定性**：并行子代理下的 UI 卡死（#4533）、pending 行堆积（#4532）、退格键一次删除整个单词（#4447）等显示终端层交互体验仍需打磨
- **平台与企业场景支持**：Windows 下的 Git 配置传递（#4531）、GHEC 数据驻留租户（#4527）等企业级平台问题持续出现

## 开发者关注点

**高频痛点：**

1. **1.0.81 预发布系列质量问题集中爆发** — 至少 7 个新 Issue 与 1.0.81 版本直接相关（#4525、#4527、#4533、#4534、#4535、#4537、#4539），覆盖权限、MCP、终端 UI、会话、配置等多个方面。有开发者反馈"autoUpdate: false 被忽略导致一直使用有问题的预发布版本"（#4534），这很可能加剧了问题扩散。

2. **权限机制可靠性是当前最受关注的安全议题** — ACP 模式自动批准所有工具调用（#4537）和非交互模式绕过企业权限禁用配置（#4528）都涉及代理自主执行的危险场景，属于高危安全问题，#4537 明确指出是对此前已修复问题（#845）的回归。

3. **调试信息缺失与诊断困难** — 多个 Issue 缺少复现日志或版本信息（如 #4524），社区在诊断时遇到困难。

4. **配置项"失效"问题反复出现** — `autoUpdate: false`（#4534）、reasoning effort 不持久（#4530）等配置相关的偏差行为说明配置系统的稳定性和一致性体验有待加强。

5. **Terminal UI 稳定性影响日常使用** — 并行子代理 UI 卡死（#4533）和 pending 行堆积（#4532）会直接阻塞开发者工作流，修复优先级应提高。值得注意的是，v1.0.81-5 的发布说明恰好修复了与 #4532 高度相关的问题，但 #4532 仍标记为开放状态，说明修复可能尚不完整或未覆盖所有场景。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-20

## 1. 今日速览

今日社区聚焦于几项严重稳定性问题：Tasks/Subagents 会话卡死（#11865）、`/tmp` 目录 `.so` 文件泄露导致磁盘与内存耗尽（#28089、#42700）均获高关注。功能端出现两个亮眼 PR：TUI 代码隐藏配置（#43341）与 Markdown 预览面板（#43599）；此外，桌面端 IPC 迁往 Effect RPC 的重构（#43207）和冷启动优化（#42722）也在进行中。版本方面，v1.18.19 已发布，主要改进为新增 Cloudflare AI Gateway 原生透传，并修复 Qwen 采样默认值问题。

## 2. 版本发布

**v1.18.19**（最新 release）

**核心改进：**
- 新增 Cloudflare AI Gateway 模型的原生 OpenAI 与 Anthropic 透传支持
- Codex 速率限制更贴近 ChatGPT 订阅额度（感谢 @GameOn223）

**Bug 修复：**
- 移除了内置的 Qwen 采样默认值，避免发送不支持的设置

## 3. 社区热点 Issues（Top 10）

### 🔴 高优先级

**1. #11865 — Tasks/Subagents 频繁卡死，无超时/重试导致会话永久挂起**
- 作者: dcominottim | 评论 21 | 👍 19
- 摘要：使用 Codex 5.2 Xhigh 模型并配置 AGENTS.md 鼓励子代理时，子代理频繁卡死且无超时/重试机制，会话永久挂起。
- 关注点：**稳定性 / 子代理可靠性**，最热门 issue，反映用户对 Codex 集成深度的真实需求。
- 链接: https://github.com/anomalyco/opencode/issues/11865

**2. #7006 — `permission.ask` 插件钩子定义但未触发**
- 作者: markerikson | 评论 13 | 👍 22
- 摘要：新权限系统（PR #6319）的 `permission.ask` 钩子在插件中不触发，插件开发者无法定制权限逻辑。
- 关注点：**插件 API / 权限系统缺陷**，赞数最高，说明插件生态开发者活跃。
- 链接: https://github.com/anomalyco/opencode/issues/7006

**3. #28089 — OpenCode 在 /tmp 泄露临时 .so 文件，累积占用数百 GB**
- 作者: a1667834841 | 评论 10 | 👍 8
- 摘要：CentOS 7 环境下持续生成临时 `.so` 文件且不清理，长期占用数百 GB 磁盘。
- 关注点：**资源泄漏 / 磁盘管理**，与 #42700 同源，需尽快修复。
- 链接: https://github.com/anomalyco/opencode/issues/28089

**4. #42700 — [2.0] TUI 每次启动泄露约 21MB .so 到 /tmp，撑爆 tmpfs 导致启动失败**
- 作者: jsongalvez | 评论 4 | 👍 0
- 摘要：2.0 TUI 每次启动在临时目录留下 ~21MB `.so` 文件，多次启动后 tmpfs 满，TUI 无法启动（OpenTUI 库加载错误）。
- 关注点：**资源泄漏（2.0 主线）**，与 #28089 为同一根因的两个表现。
- 链接: https://github.com/anomalyco/opencode/issues/42700

**5. #43379 — Zen 网关 muse-\* 模型流式响应缺少 finish_reason，严格 OpenAI 客户端无限重试**
- 作者: LinusQiu | 评论 7 | 👍 1
- 摘要：muse 系列模型经 OpenCode Zen 网关流式输出完整文本后不发送 `finish_reason` 块，严格 OpenAI 兼容客户端进入重试循环。
- 关注点：**协议兼容性 / 网关可靠性**，创建于昨日，讨论增长迅速。
- 链接: https://github.com/anomalyco/opencode/issues/43379

### 🟡 值得关注

**6. #43610 — [2.0] subagent：无法创建子会话，schema 强制要求 sessionID**
- 作者: chieudoo | 评论 4 | 👍 0
- 摘要：文档说明省略 `sessionID` 应新建子会话，但工具 schema 强制必填，导致无法启动新子代理。
- 关注点：**2.0 子代理 API 缺陷**，与 #11865 呼应，子代理链路问题集中。
- 链接: https://github.com/anomalyco/opencode/issues/43610

**7. #42501 — VS Code 集成终端内 TUI 鼠标滚轮失效（根因是 xterm 而非 opencode）**
- 作者: Xukun-Liu | 评论 5 | 👍 0
- 摘要：自 VS Code 1.105 起集成终端内 TUI 滚轮失效，已定位根因是 xterm，OpenCode 本身无碍。
- 关注点：**IDE 集成体验**，虽非本项目缺陷，但用户感知强烈。
- 链接: https://github.com/anomalyco/opencode/issues/42501

**8. #42532 — [2.0] server：workspace=global 请求返回 500 'Path is not absolute: global'**
- 作者: wujiachen0727 | 评论 3 | 👍 0
- 摘要：桌面客户端对 `global` workspace 的几乎所有 API 调用均返回 500，导致反复出现"无法重新加载 global" toast。
- 关注点：**2.0 桌面端 / 全局配置错误**。
- 链接: https://github.com/anomalyco/opencode/issues/42532

**9. #43613 — 配置更新写入 config.json，但配置发现机制只读 opencode.json/jsonc**
- 作者: EthanZhao0710 | 评论 2 | 👍 0
- 摘要：`PATCH /config` 写入 `<project>/config.json`，而 `ConfigPaths.files` 只读取 `opencode.json`/`opencode.jsonc`，更新永久失效。
- 关注点：**配置系统一致性**，已附带修复 PR #43614。
- 链接: https://github.com/anomalyco/opencode/issues/43613

**10. #43415 — [2.0] TUI：用户被困于虚假的定位不可用弹窗，agent 仍在后台运行**
- 作者: zhiganov | 评论 2 | 👍 0
- 摘要：Agent 两次未经许可调用 `opencode2 service restart`，用户被错误弹窗困住，后台代码审查子代理仍在运行。
- 关注点：**2.0 权限 / 弹窗交互缺陷**，涉及安全性。
- 链接: https://github.com/anomalyco/opencode/issues/43415

## 4. 重要 PR 进展（Top 10）

**1. #43341 — feat(tui): 通过 tui.json 配置代码隐藏（conceal）功能**
- 作者: stefanluth | 状态: OPEN
- 内容：新增 `conceal` 选项（默认值，开/关），关闭 #35093。TUI 体验新特性。
- 链接: https://github.com/anomalyco/opencode/pull/43341

**2. #43618 — fix(core): 忽略 SSE 注释心跳对超时的影响**
- 作者: neriousy | 状态: OPEN
- 内容：统一 `chunkTimeout` 截止时间；仅在 SSE 解析器发出完整数据事件时重置；允许注释心跳通过而非视为模型进度。与 #43607 为同一问题（#43519）的双重修复。
- 链接: https://github.com/anomalyco/opencode/pull/43618

**3. #43616 — fix(app): 子代理保持根标签页活跃**
- 作者: opencode-agent[bot] | 状态: OPEN
- 内容：查看直接/嵌套子代理时保持根会话标签页活跃；从共享会话缓存同步解析标签页身份；支持冷/不一致缓存的完整父系回退。
- 链接: https://github.com/anomalyco/opencode/pull/43616

**4. #43614 — fix(config): 配置更新写入配置发现可读取的文件**
- 作者: EthanZhao0710 | 状态: CLOSED
- 内容：修复 `Config.update`（`PATCH /config`）写入 `config.json` 而发现机制只读 `opencode.json/jsonc` 的问题，关闭 #43613。已合入。
- 链接: https://github.com/anomalyco/opencode/pull/43614

**5. #26861 — fix(tui): 长会话中旧消息消失问题**
- 作者: vpetrigo | 状态: OPEN
- 内容：实现懒加载滚动：向上滚动时按需加载历史消息，修复 #7380。
- 链接: https://github.com/anomalyco/opencode/pull/26861

**6. #43207 — refactor(desktop): 将 IPC 迁移至 Effect RPC**
- 作者: opencode-agent[bot] | 状态: OPEN
- 内容：用 Effect 4 RPC（MsgPack 帧的 `MessagePort`）替换桌面端 `ipcMain.handle`/`ipcRenderer.invoke`，每个操作/事件流定义 PascalCase `Rpc.make(...)`。2.0 架构现代化的重要一步。
- 链接: https://github.com/anomalyco/opencode/pull/43207

**7. #43599 — feat(tui): Markdown 预览面板**
- 作者: littledsw | 状态: OPEN
- 内容：新增 `/preview` 命令，通过模糊文件选择器（同 `@` 提及的 `fs.find` 搜索）选择文件并渲染 Markdown，关闭 #43598。
- 链接: https://github.com/anomalyco/opencode/pull/43599

**8. #43607 — fix(provider): 忽略 SSE 注释心跳对 chunk 超时的影响**
- 作者: 1052326311 | 状态: OPEN
- 内容：`chunkTimeout` 当前对每次响应体读取都重置；改为仅在 SSE 数据事件时重置，修复 #43519。（与 #43618 同问题，竞争修复）
- 链接: https://github.com/anomalyco/opencode/pull/43607

**9. #43228 — feat(opencode): 确定性裸运行模式（--bare）**
- 作者: Syt3s | 状态: OPEN
- 内容：新增 `opencode run --bare`，面向本地非交互式运行，关闭 #43227。CI/脚本场景新能力。
- 链接: https://github.com/anomalyco/opencode/pull/43228

**10. #42722 — feat(desktop): 优化冷启动（17.4s → 6.7s）**
- 作者: Hona | 状态: CLOSED
- 内容：`bun dev:desktop` 冷启动中位数从 17,422ms 降至 6.7s 内，基于 V2 当前代码实验并适配。性能关键改进。
- 链接: https://github.com/anomalyco/opencode/pull/42722

## 5. 功能需求趋势

从今日 issues 与 PR 提炼的社区关注方向：

- **子代理/多智能体可靠性（高频）**：卡死、超时、sessionID 强制、标签页切换——子代理链路成为 2.0 最大痛点（#11865、#43610、#43616）
- **资源泄漏治理**：`.so` 临时文件随启动累积（#28089、#42700），磁盘/内存占用成为持续性问题，社区强烈期待根治方案
- **流式协议合规性**：`finish_reason` 缺失、SSE 心跳干扰超时计算——流式输出与 OpenAI 兼容性被持续验证（#43379、#43607、#43618）
- **IDE/终端集成体验**：VS Code 终端滚轮失效、Safari IME 合成——编辑器与浏览器场景的细节问题频发（#42501、#38728）
- **桌面端重构与性能**：IPC 迁至 Effect RPC、冷启动大幅提速——2.0 桌面端架构升级与性能优化并行推进（#43207、#42722）
- **TUI 交互新特性**：代码隐藏配置、Markdown 预览面板——TUI 编辑器能力持续扩展（#43341、#43599）

## 6. 开发者关注点

- **最集中的痛点：子代理稳定性**。被反复提及：卡死无超时、无法创建新会话、标签页混乱、未授权执行系统命令。社区对子代理链路的可靠性和安全边界期待明确答案（#11865、#43610、#43415）
- **资源泄漏已成信任问题**。从 5 月持续至今的 `/tmp` `.so` 泄露（#28089、#42700），用户已在生产环境遭遇数百 GB 磁盘被耗尽和 tmpfs 满导致启动失败的场景
- **配置系统一致性意外翻车**。`PATCH /config` 写入的文件与发现机制读取的不一致（#43613），让用户质疑更新是否真正生效——配置可信度是日常使用的基础
- **计费/用量显示不透明**。多条 issue 反映用量百分比与真实美元消费对不上（#43149、#43602），用户希望看到可验证的账单逻辑

---

*数据覆盖：2026-08-20 更新。Issues 与 PRs 均附链接，点击可查看完整讨论。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-20

## 今日速览

今日 Pi 社区聚焦三项核心议题：一是 Windows 平台适配问题成为最大热点，官方 Issues 征求反馈（#7547，32 条评论）；二是会话级模型/思维级别配置的持久化行为正被重构（#5263 及关联 PR #8356），使 `/model` 切换默认仅作用于当前会话；三是模型推理（reasoning）与上下文压缩相关 Bug 持续修复，涉及 Gemini 3.x 的 `thought_signature` 缺失（#6996）以及自动压缩触发失效（#6879，17 👍）。此外，Amazon Bedrock Mantle 模型支持（PR #8302）与 TUI 大 diff 崩溃修复（PR #8395）也值得关注。

## 社区热点 Issues

1. **#7547 — [Windows] 如何以及在 Windows 上使用 Pi 遇到哪些问题？**
   作者：petrroll | 32 评论 | 1 👍
   [链接](https://github.com/earendil-works/pi/issues/7547)
   这是一次面向 Windows 开发者的广泛调研，目的是收集 Pi 在 Windows 上的运行方式和问题，以确定优先修复方向和文档优化重点。评论数居首，说明 Windows 用户体验碎片化问题严重，社区反馈意愿高。

2. **#6879 — [Bug] 上下文超 100% 后自动压缩不触发，直到 provider 溢出**
   作者：alexanderkreidich | 18 评论 | 17 👍
   [链接](https://github.com/earendil-works/pi/issues/6879)
   用户在 gpt-5.6-sol 上运行一个 2 小时以上的 agentic turn，页脚超过压缩阈值且继续增长 >100%，压缩仅在 API 拒绝请求后才生效。这是影响长会话稳定性的关键缺陷，获 17 👍 说明影响面广。

3. **#5023 — [Bug] 终端无故回滚到开头**（已关闭）
   作者：markokocic | 17 评论 | 2 👍
   [链接](https://github.com/earendil-works/pi/issues/5023)
   终端在无任何用户操作时突然跳转到会话开头并快速滚动到末尾，长期存在的 TUI 体验问题，评论较多但已关闭，或许在等待或已进入修复流程。

4. **#5263 — 让会话内模型与思维级别更改默认临时生效**（已关闭）
   作者：vanvlack | 11 评论 | 13 👍
   [链接](https://github.com/earendil-works/pi/issues/5263)
   建议将 `/model` 和思维级别的更改改为仅对当前会话生效，并在 `/settings` 中增设 "Default model" 作为全局设定。13 👍 表明用户普遍反感会话内操作污染全局配置。

5. **#6300 — [Bug] Windows：每次击键输入行重绘（每个字符显示在新行上）**
   作者：polemotionkor-arch | 8 评论
   [链接](https://github.com/earendil-works/pi/issues/6300)
   Windows 10 + cmd.exe 下 TUI 渲染异常，逐字符换行导致输入不可用。作为 Windows 平台典型缺陷，与 #7547 的调研形成呼应。

6. **#6996 — [Bug] Gemini 3.x 工具调用因缺 `thought_signature` 失败**
   作者：Dulani | 5 评论
   [链接](https://github.com/earendil-works/pi/issues/6996)
   `gemini-3.5-flash` / `gemini-3.6-flash` 工具调用后历史缺少 `thought_signature` 导致后续调用报错，是新模型适配中的典型兼容性缺陷。

7. **#8133 — 按模型配置压缩参数（Per-model compaction settings）**
   作者：Blue-B | 2 评论 | 3 👍
   [链接](https://github.com/earendil-works/pi/issues/8133)
   建议在 settings.json 中增加 `compaction.profiles`，按模型 ID 设置独立的保留 token 与压缩策略。反映用户对不同模型上下文行为的差异化需求。

8. **#8348 — OpenAI API 无跨会话缓存（尤其 fork 会话）**（已关闭）
   作者：taozhou-glean | 3 评论
   [链接](https://github.com/earendil-works/pi/issues/8348)
   `prompt_cache_key` 基于 session-id，fork 后生成新 ID 导致缓存完全失效。影响 fork 工作流的成本与延迟，是缓存机制的明显缺口。

9. **#8396 — [Bug] 自动重试将过期助手错误残留于活动会话分支**（已关闭）
   作者：wuhuajia | 2 评论
   [链接](https://github.com/earendil-works/pi/issues/8396)
   AgentSession 在决定自动重试前先持久化助手消息；含可重试错误的响应经 `_prepareRetry()` 移除错误但消息已写入会话管理器，造成错误残留。

10. **#8372 — Windows 终端（WSL 或原生）按键绑定冲突**
    作者：petrroll | 2 评论
    [链接](https://github.com/earendil-works/pi/issues/8372)
    Windows 平台下 pi 与 Windows Terminal 按键绑定冲突问题，延续 #7547 的 Windows 适配话题，提出文档化冲突清单或配置建议的需求。

## 重要 PR 进展

1. **#8395 — fix(coding-agent)：防止大 diff 渲染导致 TUI 崩溃**（已合并）
   作者：Battleplus | [链接](https://github.com/earendil-works/pi/pull/8395)
   修复 #8036：编辑工具渲染约 14.5MB 大 diff 时 `lines.push(...contentLines)` 超出 V8 最大调用栈导致崩溃，改为避免展开操作。

2. **#8356 — fix(coding-agent)：模型与思维级别更改保持会话级作用域**（已合并）
   作者：cristinaponcela | [链接](https://github.com/earendil-works/pi/pull/8356)
   对应 #5263，使 `/model` 和思维级别切换默认仅影响当前会话，不再写回全局默认配置。

3. **#8302 — feat(ai)：Amazon Bedrock Mantle 支持**（WIP）
   作者：cristinaponcela | [链接](https://github.com/earendil-works/pi/pull/8302)
   新增 Bedrock Mantle API 支持（主要包含 GPT 系列模型），当前等待 API key 权限进行端到端测试。

4. **#8383 — fix(ai)：gemini-3.7-flash 发送 LOW 禁用思维**（开放）
   作者：jingtao-wisdomgraph | [链接](https://github.com/earendil-works/pi/pull/8383)
   修复禁用思维时发送 `thinking level MINIMAL` 导致 400 错误的问题，应为该模型改用 `LOW`。

5. **#8377 — fix(coding-agent)：npm 更新检查遵循 min-release-age**（已合并）
   作者：zeke | [链接](https://github.com/earendil-works/pi/pull/8377)
   `getLatestNpmVersion` 改用 `npm view` 时忽略生效的 `min-release-age` 配置，导致 "Package Updates Available" 误报。

6. **#8374 — fix(coding-agent)：fork 前中断活动运行任务**（已合并）
   作者：elithecho | [链接](https://github.com/earendil-works/pi/pull/8374)
   fork 选择器调用 `runtimeHost.fork` 前未确认活动 agent run 状态，用户在 stop 后立即 fork 可能遇到未决状态。

7. **#8066 — fix(tui)：视觉行缓存避免重复计算**（开放）
   作者：affanali2k3 | [链接](https://github.com/earendil-works/pi/pull/8066)
   修复 #8029，通过缓存视觉行结果并按宽度/文本变化失效，减少 TUI 渲染大量计算。

8. **#8246 — feat(ai)：openai-completions reasoning details 往返**（已合并）
   作者：cristinaponcela | [链接](https://github.com/earendil-works/pi/pull/8246)
   对应 #7994，修复 signed `reasoning.text` / `reasoning.summary` 在 openai-completions 流中被丢弃的问题。

9. **#8365 / #8366 — feat：为内置 slash 命令发射 input 事件**（已合并）
   作者：kapkema | [链接](https://github.com/earendil-works/pi/pull/8365) · [链接](https://github.com/earendil-works/pi/pull/8366)
   让 `/share`、`/export`、`/settings` 等内置命令与其他扩展/技能命令一致，也通过 `session.prompt()` 发射 `input` 事件，便于外部订阅。

10. **#8369 — add：全屏滚轮滚动行数设置**（已合并）
    作者：ownlight6 | [链接](https://github.com/earendil-works/pi/pull/8369)
    全屏 TUI 模式下每个滚轮事件固定滚动 1 行，在触控板加速度场景下体验不佳，新增可配置的 `wheelScrollLines` 设置。

## 功能需求趋势

- **会话级 vs 全局配置持久化**：多 Issues 与 PR（#5263、#8356、#8376）表明用户强烈希望 `/model`、思维级别切换仅作用于当前会话，并要求在 `/settings` 中提供明确的全局默认入口，可配置持久化作用域（session/directory/global）。
- **Windows 平台适配**：高强度反馈集中于 TUI 渲染异常（#6300）、按键绑定冲突（#8372、#8183）以及运行方式碎片化（#7547），官方已主动发起调研并针对性文档化。
- **按模型差异化配置**：#8133 提出 per-model 压缩配置，对应不同模型上下文长度与行为的差异；另有 Gemini 3.x 系列工具调用兼容性问题（#6996、#8383）。
- **Cache 与性能优化**：#8348 关注 fork 会话缓存失效，#8066 关注 TUI 渲染计算浪费，说明长会话性能与缓存命中是高频话题。
- **新模型/API 支持**：Bedrock Mantle（#8302）与 openai-completions reasoning_details 往返（#8246）显示社区正积极扩展多 provider 兼容覆盖。

## 开发者关注点

- **上下文管理与稳定性**：压缩触发时机（#6879 获 17 👍）、压缩配置灵活性（#8133）以及 fork 后缓存失效（#8348）是影响长会话工作流的核心痛点。
- **Windows 体验**：输入行重绘（#6300）、按键冲突（#8372）、Ctrl+Shift+F 与 Windows Terminal 的冲突（#8183）等多项 TUI 缺陷集中在 Windows 平台。
- **OpenAI SDK 默认超时**：`createClient` 未显式设置 `timeout`，回退到 600s 默认值，本地模式可能受影响（#8323）。
- **工具生态兼容性**：openai-completions 的 reasoning_details 仅支持加密条目导致 signed-text 无法往返（#7994）、Gemini 3.x 的 `thought_signature` 缺失（#6996），反映多 provider 互通中的细节兼容难题。
- **错误与数据一致性**：自动重试残留错误消息于会话分支（#8396）、扩展工具重名导致进程退出（#7696）、npm 更新检查无视 min-release-age（#8377），均属稳定性与状态一致性细节。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-20）

## 一、今日速览

今日发布 `v0.21.11-nightly.20260820.b414f135fa` 夜版，核心改进是将 Web Shell 的审批与询问对话框改为流内面板，并修复后台代理误报失败问题。社区焦点集中在安全审查管线的 runner 级隔离（#9089、#9556）、会话恢复时工具结果缺失（#9573）以及跨会话消息传递（#8724）等议题，其中多项安全相关 Issue 仍处开放状态并持续获得讨论。

## 二、版本发布

**v0.21.11-nightly.20260820.b414f135fa**

- feat(web-shell)：审批与 ask-user 对话框改为流内面板（in-flow sheets）；修复 background-agent 误报失败问题（PR by @ytahdn）

另有两个完整验证基准发布：

- **dsw-eas-full-20260820-r1**：SWE-bench Verified 500/500 完成，Terminal-Bench 2.0 89 项通过，基准版本 v0.21.14
- **dsw-eas-full-20260819-r1**：同样完成 SWE-bench Verified 500/500 与 Terminal-Bench 2.0 89 项，基准版本 v0.21.14

两版均包含 Release writeback 完整端到端验证。

## 三、社区热点 Issues（Top 10）

### 1. #9089 — PAT 工作流与不可信分支代码共享宿主，需 runner 级隔离
- **优先级**：P1 | **分类**：安全/CI-CD | 评论 6 | [链接](https://github.com/QwenLM/qwen-code/issues/9089)
- 安全审查发现 autofix 的 PAT 工作流无法在 runner 层面与不可信分支代码隔离，属于 #8961 加固后仍无法闭合的一类风险。安全敏感度极高，需基础设施级改造。

### 2. #9573 — 恢复会话后正常完成的工具调用显示 "Tool result missing"
- **优先级**：P1 | **分类**：核心/会话管理 | 评论 2 | [链接](https://github.com/QwenLM/qwen-code/issues/9573)
- 会话恢复后，原本正常完成的工具调用被错误标记为失败。直接影响用户恢复长会话的体验与数据可信度，今日新开。

### 3. #9488 — 会话生命周期操作被 provenance 分类阻塞，无法管理未分类会话
- **优先级**：P1 | **分类**：核心/会话管理/daemon | 评论 3 | [链接](https://github.com/QwenLM/qwen-code/issues/9488)
- 批量会话操作强依赖 provenance 分类，无法分类的会话将无法管理。为 #9341 审查后的后续项，属设计缺陷。

### 4. #9556 — 审查管线是否继续以调用者身份授予代码执行权限
- **分类**：安全/CI-CD | 评论 5 | [链接](https://github.com/QwenLM/qwen-code/issues/9556)
- #9221 的二十轮审查所有未决问题都始于同一前提：代码以审查者自身用户身份在 worktree 中执行。该能力并非 #9221 的预期能力，需决策是否保留。涉及安全架构的根本性取舍。

### 5. #8724 — 跨会话消息传递：同机 Qwen Code 会话可互相通信
- **分类**：功能请求 | 评论 7 | [链接](https://github.com/QwenLM/qwen-code/issues/8724)
- 提出 `list_agents` 发现、`send_message` 寻址的跨会话通信机制，与今日新 PR #9576 直接对应。多智能体协作的基础能力，社区关注度高。

### 6. #9309 — 压缩逻辑疑似计算错误
- **优先级**：P3 | **分类**：核心/Token 管理 | 评论 6 | [链接](https://github.com/QwenLM/qwen-code/issues/9309)
- `/compress-fast` 后 token 计算异常。涉及 token 压缩的核心正确性，虽 P3 但讨论热度高。

### 7. #9485 — Web Shell 复制按钮在非 localhost HTTP 下报 "Clipboard API is not available"
- **优先级**：P2 | **分类**：UI/Web Shell | 评论 5 | [链接](https://github.com/QwenLM/qwen-code/issues/9485)
- 远程 Linux 部署场景下所有复制按钮不可用。已有对应修复 PR #9540，用 execCommand 兜底。

### 8. #9557 — 审查：git 身份应在整个测量期间固定，而非仅首次 spawn
- **优先级**：P2 | **分类**：安全/Git | 评论 3 | [链接](https://github.com/QwenLM/qwen-code/issues/9557)
- 审查管线 git 辅助工具仅验证一次 worktree 身份，后续命令从 `cwd` 运行导致 git 重新发现路径，存在身份漂移风险。安全审查的纵深加固。

### 9. #9333 — 实现会话级持久化 Node REPL 运行时
- **优先级**：P2 | **分类**：功能请求/核心/工具/沙箱 | 评论 2 | [链接](https://github.com/QwenLM/qwen-code/issues/9333)
- 三阶段路线第一步：模型直接提交 JS，在任务内复用绑定和模块状态。后续扩展至 cua-driver SDK（#9334）与 Skill（#9335）。对工具生态的架构级扩展。

### 10. #9507 — Agent Team：teammate 标签输出不可滚动，内容永久丢失
- **优先级**：P2 | **分类**：UI/交互/多智能体 | 评论 3 | [链接](https://github.com/QwenLM/qwen-code/issues/9507)
- Agent Team 功能中溢出内容无法滚动查看。多智能体功能的 UI 完整性问题。

## 四、重要 PR 进展（Top 10）

### 1. #9576 — feat(core): 支持跨会话消息传递（带入站网关）
- **状态**：OPEN / autofix/takeover | [链接](https://github.com/QwenLM/qwen-code/pull/9576)
- 每个会话绑定 UNIX domain socket，接受换行分隔的 JSON 帧，策略允许时投递为输入。对应 Issue #8724。

### 2. #9578 — fix(autofix): 提交前对新增守卫进行 mutation-probe
- **状态**：OPEN | [链接](https://github.com/QwenLM/qwen-code/pull/9578)
- 新增硬性规则：每轮提交新增的 guard/分支/行为必须有对应的测试见证，提交前进行变异探测验证。自动化审查质量的自我强化。

### 3. #9540 — fix(web-shell): 非安全上下文回退到 execCommand 复制
- **状态**：OPEN / review/self-reported | [链接](https://github.com/QwenLM/qwen-code/pull/9540)
- 统一走 `writeClipboardText()` 辅助函数：先试异步 Clipboard API，失败回退到隐藏 textarea 的 `execCommand('copy')`。修复 #9485。

### 4. #9570 — feat(web-shell): 支持消息中途附件的文件附件
- **状态**：CLOSED | [链接](https://github.com/QwenLM/qwen-code/pull/9570)
- 复用图片的 session-attachment 路径，支持编辑器挂载文件与 `@` 选择工作区文件。已合入。

### 5. #9527 — fix(autofix): 绑定沙箱镜像到拉取的 digest
- **状态**：OPEN / autofix/takeover | [链接](https://github.com/QwenLM/qwen-code/pull/9527)
- 从冻结的 #9214 中抢救的独立片段，修复了审查者提出的两个 Critical（R11-1、R11-2）。沙箱安全关键修复。

### 6. #9577 — chore(ci): 发布 CI 禁用安装脚本并守卫 security-checks 工作流
- **状态**：OPEN | [链接](https://github.com/QwenLM/qwen-code/pull/9577)
- 发布管线以禁用生命周期脚本方式安装依赖，再显式应用补丁；security-checks 工作流增加 CODEOWNERS 保护。供应链安全加固。

### 7. #9574 — feat: 为 Qwen 混合模型注册仅切换推理控制
- **状态**：OPEN | [链接](https://github.com/QwenLM/qwen-code/pull/9574)
- 为 `qwen3.5-plus`、`qwen3.6-plus`、`qwen3.6-flash`、`qwen3.7-plus`、`qwen3.7-max` 精确注册推理切换开关。

### 8. #8549（今日 #8529 进展）— feat(core): 从 API 元数据解析模型模态
- **状态**：OPEN | [链接](https://github.com/QwenLM/qwen-code/pull/8529)
- 从 models.dev 解析配置模型与运行时切换的输入模态，内置精简模态快照，立即使用有效磁盘缓存并刷新远程元数据。

### 9. #9547 — fix(core): 允许被 hook 退回的工作流重新审批
- **状态**：OPEN | [链接](https://github.com/QwenLM/qwen-code/pull/9547)
- 将审批响应幂等性限定到每次发出的工作流审批，审批被响应/拒绝/工具结果清除/移除时释放 `[subagentId, callId]` 锁。

### 10. #9539 — test(review): 单一编码 diff-read fixture 并固定失败读取门槛
- **状态**：OPEN / autofix/takeover | [链接](https://github.com/QwenLM/qwen-code/pull/9539)
- #9484 中 diff-read 测试的后续修复：单一编码 fixture 的 launch 行，并固定 `diffToolCalls`/`diffReads` 在失败 diff 读取时的成功门槛。

## 五、功能需求趋势

1. **安全加固深化（最突出）**：runner 级隔离（#9089）、执行权限决策（#9556）、git 身份固定（#9557）、沙箱镜像 digest 绑定（#9527）、安装脚本禁用（#9577）。安全从"补丁式修复"转向"架构级重构"，且多由自动化审查管线驱动。

2. **多智能体与跨会话协作**：跨会话消息传递（#8724 → PR #9576）、Agent Team 输出可滚动性（#9507）、后台会话 roster UI（#7803）。
3. **Web Shell 体验完善**：复制在非安全上下文可用（#9485 → #9540）、文件中途附件（#9570）、会话固定性能与排序稳定性（#9465）。
4. **新模型支持**：Qwen 混合模型推理控制（#9574）、从 API 元数据解析模型模态（#8529）。
5. **会话级持久化运行时**：Node REPL 三阶段路线（#9333-#9335）。
6. **CI/基础设施**：Fleet Shepherd Dashboard 机器人面板（#7167）、跨包常量一致性的单一所有者（#9151）。

## 六、开发者关注点

1. **安全审查管线的可靠性**：wenshao 高频提交，从 PAT 隔离到 git 身份固定、变异探测前置、sandbox digest 绑定，反映社区对自动化审查的正确性与不可绕过性有极高要求，且审查工具本身也在被审查。

2. **会话恢复与持久化数据一致性**：#9573 恢复会话出现工具结果缺失、#9488 未分类会话不可管理、#9562 会话目录重复刷新。会话数据在"保存→恢复"链路中存在多处正确性缺口。

3. **Web Shell 非 localhost 部署兼容性**：复制 API 在远程 HTTP 场景不可用（#9485），反映远程 Linux 部署是真实高频场景，安全上下文限制未被充分考虑。

4. **Agent/多智能体功能成熟度**：teammate 输出丢失（#9507）、agent 启动失败被报告为成功（#9509）、hook 被退回后无法重新审批（#9547）。多智能体仍处实验期，基础可靠性待加强。

5. **Token 压缩与预算管理**：压缩计算错误（#9309）、工具输出预算加固（#7306），压缩正确性与可观测性是持续关注点。

6. **手工安装更新提示干扰**：Homebrew 安装时每次启动都提示更新（#9493），对包管理器安装用户形成持续打扰。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale 社区动态日报 — 2026-08-20

> 项目已正式更名 **CodeWhale**，旧 npm 包 `deepseek-tui` 已弃用。本日报同时覆盖仓库内相关动态。


## 今日速览

今日社区高度活跃：**v0.9.10 正式发布**（76 个提交的「留存、身份、首次运行与发布加固」版本）；围绕 **i18n 字典架构迁移（#5337/#5519）** 的 PR 密集合入，但 `isZh` 分支不降反升引发「迁移失速」争论；TUI 循环架构重构（#5523/#5514）、`read_lints` 独立诊断工具（#5524）与**连续循环（continuous loop）功能需求（#5508）**构成今日三大技术主线。


## 版本发布

**v0.9.10** — Codewhale 官方发布版本（PR #5513，76 commits 发布通道），主题为 **retention（留存）、identity（身份）、first-run（首次运行）与发布硬化**。需注意：
- 品牌统一为 **Codewhale**：`codewhale` 命令、npm 包与 release 资源名均为小写技术标识符
- 旧版 npm 包 **`deepseek-tui` 已弃用**，不再获得后续发布
- 从 v0.8.x 旧版 `deepseek` / `d...` 迁移的用户需切换至 `codewhale`

GitHub: [PR #5513](https://github.com/Hmbown/CodeWhale/pull/5513)


## 社区热点 Issues（Top 10）

1. **#998 [CLOSED] 文案展示不全** — 老牌 UI 问题（5 月报出，今日关闭），用户希望 hover 显示完整提示，11 条评论为当日最多。  
   GitHub: [Issue #998](https://github.com/Hmbown/CodeWhale/issues/998)

2. **#5316 [OPEN] EPIC-005: TUI Crate 拆解伞形 EPIC** — 架构级重构跟踪，8 条评论，涵盖全部子 EPIC 和 FEAT 汇报关系。  
   GitHub: [Issue #5316](https://github.com/Hmbown/CodeWhale/issues/5316)

3. **#5337 [CLOSED] 完成 i18n 字典主脊、移除所有 `isZh` 分支** — 国际化架构迁移核心，今日相关 PR #5520/#5517 合入后在 Issue 中收尾。  
   GitHub: [Issue #5337](https://github.com/Hmbown/CodeWhale/issues/5337)

4. **#5518 [CLOSED] DeepSeek V4 路由在 85K–105K tokens 触发紧急压缩** — 本地 vLLM 部署 V4-Flash 且配置 327,680 token 上下文仍过早压缩，涉及输出余量预算与 handoff 状态污染，生产级严肃 Bug。  
   GitHub: [Issue #5518](https://github.com/Hmbown/CodeWhale/issues/5518)

5. **#5482 [OPEN] EPIC: 文档全面中文化** — 大规模中文用户群体诉求，Tier 1 已由 PR #5507 完成，评论持续更新。  
   GitHub: [Issue #5482](https://github.com/Hmbown/CodeWhale/issues/5482)

6. **#5516 [CLOSED] v0.9.9 升级后 HTTP 400：`max_tokens=384000` 超限** — 无手动配置即报错，疑似升级引入默认值回归（模型上限 262144）。  
   GitHub: [Issue #5516](https://github.com/Hmbown/CodeWhale/issues/5516)

7. **#5508 [CLOSED] 功能诉求：连续循环模式（continuous loop）** — 用户自建 AI 协调器集群，单轮无限 sleep 临时方案，期望原生循环支持。  
   GitHub: [Issue #5508](https://github.com/Hmbown/CodeWhale/issues/5508)

8. **#5512 [CLOSED] v0.9.7 起头部状态指示器永不渲染** — Windows 11 / Windows Terminal / PowerShell 7.6 环境稳定复现，0.9.8/0.9.9 均存在。  
   GitHub: [Issue #5512](https://github.com/Hmbown/CodeWhale/issues/5512)

9. **#5519 [OPEN] `isZh` 迁移失速：需要单向天花板** — 关键论战：90 天前 12 个文件含 `isZh`，今日 31 个，30 天内新增 10 个，迁移方向反了。  
   GitHub: [Issue #5519](https://github.com/Hmbown/CodeWhale/issues/5519)

10. **#5023 [CLOSED] IME 候选窗口位置跳动** — 中文输入法用户核心体验 Bug，v0.9.3 复现，今日收尾。  
    GitHub: [Issue #5023](https://github.com/Hmbown/CodeWhale/issues/5023)


## 重要 PR 进展（Top 10）

1. **#5513 [CLOSED] release: Codewhale v0.9.10** — 76 提交发布通道，retention/identity/first-run/发布硬化。  
   GitHub: [PR #5513](https://github.com/Hmbown/CodeWhale/pull/5513)

2. **#5523 [OPEN] refactor(tui): 从 turn loop 抽取工具调用阶段** — `plan_tool_calls` / `execute_planned_tools` / `process_tool_results` 三段式拆分，保持控制顺序与可变状态流。  
   GitHub: [PR #5523](https://github.com/Hmbown/CodeWhale/pull/5523)

3. **#5524 [OPEN] feat(tui): 多文件 `read_lints` 操作** — 实现 #4070 获批范围，复用会话 `LspManager` 及传输池，支持多个已存在工作区文件。  
   GitHub: [PR #5524](https://github.com/Hmbown/CodeWhale/pull/5524)

4. **#5514 [CLOSED] refactor(tui): 从 turn loop 抽取流处理** — 响应流状态机提取为 `process_stream`，通过 `StreamOutcome` 仅返回流产生状态。  
   GitHub: [PR #5514](https://github.com/Hmbown/CodeWhale/pull/5514)

5. **#5520 [CLOSED] feat(web): docs/sandbox 与 docs/web 迁移至字典主脊（#5337）** — 两目录 `isZh` 分支各 14/15 个清零，每页双字典 + `types.ts` + `index.ts` + 纳入 `check-locales.mjs`。  
   GitHub: [PR #5520](https://github.com/Hmbown/CodeWhale/pull/5520)

6. **#5517 [CLOSED] feat(web): docs/constitution 与 docs/runtime-api 迁移至字典主脊（#5337）** — Phase 2 第二批，各清除 14 个 `isZh` 分支。  
   GitHub: [PR #5517](https://github.com/Hmbown/CodeWhale/pull/5517)

7. **#5509 [CLOSED] fix(tui): 恢复 `/title` 独立终端窗口标题（#5430）** — 修复 `/title` 与 `/rename` 合并后二者均改为会话名、终端标题丢失的回归。  
   GitHub: [PR #5509](https://github.com/Hmbown/CodeWhale/pull/5509)

8. **#5515 [CLOSED] fix(tui): MCP 图片结果以类型化内容转发** — 标准 MCP `image` 内容转为 CodeWhale 提供方无关的富工具结果块，移除文本回执中的内联 base64，保留 text/`structuredContent`/`isError` 语义。  
   GitHub: [PR #5515](https://github.com/Hmbown/CodeWhale/pull/5515)

9. **#5507 [CLOSED] docs(i18n): 中文文档本地化 Tier 1（#5482）** — 按语言分目录重构文档树，迁移现有翻译。  
   GitHub: [PR #5507](https://github.com/Hmbown/CodeWhale/pull/5507)

10. **#5521 [CLOSED] chore(tui): 移除单参数 `concat!`** — 修复 clippy `-D warnings` 下 `useless-concat` 报错，`runtime_handoff.rs:83`。  
    GitHub: [PR #5521](https://github.com/Hmbown/CodeWhale/pull/5521)


## 功能需求趋势

| 方向 | 代表 Issue/PR | 热度 |
|---|---|---|
| **中文/国际化** | #5482 文档中文化 EPIC、#5337/#5519 i18n 架构 | ★★★★★ |
| **TUI 架构重构** | #5316 拆解 EPIC、#5523/#5514 循环抽取 | ★★★★☆ |
| **编辑器/诊断能力** | #4070 `read_lints` 独立工具、#5524 多文件实现 | ★★★★☆ |
| **长会话稳定性** | #5518 过早压缩、#5516 max_tokens 回归 | ★★★★☆ |
| **交互模式** | #5345 多行/自定义发送快捷键、#5508 连续循环 | ★★★☆☆ |
| **内置模型/本地部署** | #5518 vLLM 本地 V4-Flash、#4683 completions URL | ★★★☆☆ |
| **MCP 生态** | #4170 MCP 能力元数据、#5515 图片内容 | ★★★☆☆ |

## 开发者关注点

- **升级回归频发**：v0.9.9 引入 `max_tokens` 默认值超限（#5516）、v0.9.7 引入头部状态指示器不渲染（#5512），说明发布门禁对 Windows 与默认配置覆盖不足。
- **国际化迁移方向失控**：`isZh` 分支数量 30 天内从 27 → 31 不降反升（#5519），维护者不得不引入「单向天花板」限制收敛——迁移架构需更强的执行约束。
- **长会话 token 管理是头号稳定性焦虑**：即便显式配置 327K 上下文，仍能复现 100K 左右触发紧急压缩（#5518），社区对其根因（输出余量预算/状态污染）高度关注。
- **品牌切换需平滑**：`deepseek-tui` → `codewhale` 更名后，v0.8.x 老用户的升级路径与命令迁移信息仍是发布说明中的关键缺口。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*