# AI CLI 工具社区动态日报 2026-08-19

> 生成时间: 2026-08-19 10:56 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 — 2026-08-19

## 1. 生态全景

AI CLI 工具正从"能跑通助手对话"快速走向"生产级可靠性"阶段，各工具当日均有阻塞级 Bug（数据丢失、模型参数不兼容、会话失败）与安全加固动作（沙箱逃逸、命令注入、路径绕过）同时发生，安全与稳定性是当日最高频主题。功能层面，多账号切换（Claude Code）、多仓库支持（Codex）、子代理主动调用（Gemini）、会话管理增强（OpenCode、Qwen Code）成为跨工具的共性诉求。发布节奏方面，Claude Code、Codex、Copilot CLI、Gemini CLI、Qwen Code 保持高频迭代（日更或周更），而 Kimi Code 与 Pi 当日无新版本，处于相对平静期。整体来看，沙箱安全、会话持久化、模型切换兼容性、资源配额治理是各工具共同面临的系统性挑战，社区对透明性和可控性的要求显著上升。

## 2. 各工具活跃度对比

| 工具 | 活跃 Issues（当日更新） | 活跃 PR（当日更新） | Release 情况 | 高优先级安全事件 |
|------|----------------------|--------------------|-------------|----------------|
| **Claude Code** | 10（Top 10：124/28/11 评论等） | 2 | v2.1.235（正式版） | 高危：`cmd /c rd` 绕过路径保护清空 C 盘（#86667） |
| **OpenAI Codex** | 10（Top 10：40~72 评论不等） | 10（含 8+ 安全修复 PR） | rust-v0.148.0（正式版）+ 多个 alpha 预发布 | macOS Seatbelt 逃逸、worktree 信任伪造、PowerShell 注入等 8+ 项 |
| **Gemini CLI** | 10（Top 10：多为 P1/P2） | 10 | v0.56.0-nightly.20260819（nightly） | CVE-2026-28292（simple-git）、CVE-2026-9277（shell-quote）升级；`$VAR` 展开绕过安全门 |
| **GitHub Copilot CLI** | 10（Top 10：24/7/6 评论等） | 1 | v1.0.81-3 / v1.0.81-2 / v1.0.81-1（系列小版本） | 沙箱强制启用忽略配置（#4522）、沙箱无法禁用（#4521） |
| **Kimi Code** | 1 | 0 | 无 | — |
| **OpenCode** | 10（Top 10：18/13/8 评论等） | 10 | 无（2.0 版本大量 Bug 修复 PR 推进中） | Go 网关工具数量限制回归、finish_reason 缺失 |
| **Pi** | 10（Top 10 平均 5.9 评论） | 10 | 无（多项修复已合入主线） | — |
| **Qwen Code** | 10（Top 10：10/8/6 评论等） | 10 | v0.21.14 + v0.21.14-preview.0 | Autofix 59% 取消率（CI 资源浪费） |
| **DeepSeek TUI（CodeWhale）** | 6（Top 10 中 6 条当日更新） | 10 | v0.9.9（正式版）+ v0.9.10 RC（PR #5513） | v0.9.9 升级后 max_tokens 超限（#5516） |

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|---------|---------|---------|
| **沙箱安全与可靠性** | Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI、DeepSeek TUI | Claude Code：`cmd /c rd` 路径保护绕过、bwrap 挂载失败；Codex：macOS Seatbelt 逃逸、worktree 信任伪造、PowerShell 注入等 8+ 漏洞修复；Gemini CLI：`$VAR` 变量展开绕过安全门、两个 CRITICAL CVE 升级；Copilot CLI：1.0.81 强制启用沙箱且无法禁用、git 命令受限；DeepSeek TUI：shell 沙箱阻断 SSH（TCP 22 出站） |
| **模型切换与会话兼容性** | Codex、OpenCode、Qwen Code、Pi | Codex：`prompt_cache_retention` 不兼容 gpt-5.6-sol 导致对话全部失败（两个 Issue 合计 70+ 评论）；OpenCode：GPT-5.6 的 OpenAI 兼容层过滤缓存参数（PR #43380）；Qwen Code：切换模型/端点后已保存会话不可用（#9452）；Pi：不同 provider 间 developer 角色映射不一致（#7445、#7723） |
| **多账号/多仓库支持** | Claude Code、Codex | Claude Code：多账号登录切换（#30031，👍 58）；Codex：Multi-repo 支持（#11956，👍 47，自 2 月持续活跃） |
| **会话管理与持久化** | Claude Code、OpenCode、Qwen Code、DeepSeek TUI、Pi | `Sessions` 重命名（OpenCode #25848）、Windows 桌面版会话静默删除（Qwen Code #8400）、压缩/回退后上下文丢失（Qwen Code #9320）、会话归档失败（Codex #39239）、审批结果持久化（CodeWhale PR #5491） |
| **子代理行为可靠性** | Gemini CLI、Claude Code、DeepSeek TUI | Gemini：通用代理无限挂起（#21409，👍 8）、MAX_TURNS 被误报为成功（#22323）；Claude Code：子代理递归扇出导致意外费用（#72861）；DeepSeek TUI：10 子 agent 并发时 `agent_wait` 超时卡死（#1425） |
| **模型行为可配置性** | Claude Code、Copilot CLI、Pi | Claude Code：Opus 5 prompt 注入覆盖用户代理配置且无开关（#80988，👍 53）；Copilot CLI：按 agent 设置 reasoning effort（#2904，👍 20）、按模式配置默认模型（#2958，👍 16）；Pi：会话内模型修改默认应仅限当前会话（#5263，👍 13） |
| **费用透明与控制** | Claude Code、OpenCode、Pi | Claude Code：递归子代理意外 API 费用（#72861）；OpenCode：Go 配额与实际消费严重不符（#38936）；Pi：服务端模型回退时成本统计按请求模型而非实际返回模型计费（#8285） |

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特点 | 当日最突出特征 |
|------|---------|---------|-------------|---------------|
| **Claude Code** | 全功能 IDE 级 CLI，桌面端 + Cowork 浏览器模式 | Claude 重度用户，Windows/macOS 桌面开发者 | 多模型（Opus/Sonnet/Haiku）、插件市场、MCP 生态；语言服务器缓存优化；`spellcheck` 内置集成 | 拼写检查新功能发布 + 沙箱绕过高危安全事件 |
| **OpenAI Codex** | 安全严谨的自治代理，TUI + App 双端 | 需要企业级安全边界与沙箱保护的开发者 | Rust 实现（rust- 版本前缀），Seatbelt/worktree/PowerShell 多层安全模型；sandbox 与信任边界深度加固 | 安全修复 PR 密度最高（8+），同时遭受模型参数兼容性回归 |
| **Gemini CLI** | 多模型（Gemini 3.x）+ 本地推理（SGLang/OpenAI 兼容端点） | 同时使用 Gemini API 与本地模型的研究/工程用户 | 对 Vertex AI 深度集成 + 本地/第三方推理后端支持；CVE 依赖升级与安全门修复并行；`Auto Memory` 背景代理架构 | 唯一同时出现 CRITICAL CVE 升级与 `$VAR` 绕过安全门明确修复的工具 |
| **GitHub Copilot CLI** | GitHub 生态深度集成，企业策略管理 | GitHub 企业用户、Copilot 订阅用户 | Agent frontmatter（.agent.md）、自定义 skills、MCP 支持；Schedule Manager 定时任务；服务器托管策略驱动沙箱 | 沙箱策略竞态（服务端未定时强制开启）新回归；Linux 长尾快捷键 Bug 未修 |
| **Kimi Code** | ACP 协议嵌入外部编辑器（Zed 等） | 将 CLI 作为后端服务的编辑器用户 | 以 ACP（Agent Client Protocol）集成模式为核心，Bash 工具进程受运行时约束较严 | 活跃度最低（1 Issue/0 PR），ACP 运行时限制暴露 |
| **OpenCode** | 开源 TUI + Web UI + 桌面端全覆盖 | 对开源工具链与多提供商兼容性有要求的开发者 | Go 网关（Zen）内置聚合多模型；2.0 版本重写中；`apply_patch` 原生支持；低成本本地优先 | 2.0 版本大量 Bug 修复 PR 密集推进，网关稳定性问题集中爆发 |
| **Pi** | 扩展 API 最丰富的开源 CLI | 需要深度自定义（tool renderer、UI 事件、usage 上报）的开发者 | 扩展 API 最丰富（registerToolRenderer、ui_prompt 事件、setUsage）；多 provider 兼容（Bedrock Mantle、OpenAI、vLLM 等） | 会话隔离（#5263）为最高赞 Issue（👍 13），扩展生态诉求突出 |
| **Qwen Code** | 多智能体（Multi-Agent）团队协作 + 流水线 CI/CD 集成 | 使用 Qwen 模型的开发者及团队，重视 CI 自动化 | `qwen serve` 守护进程 + 多工作区管理；`/review` + Autofix 流水线；live-session registry；Agent View 名册 TUI | 多智能体路由问题（#9276）与 Autofix 59% 取消率（#9296）凸显 CI 集成成熟度不足 |
| **DeepSeek TUI（CodeWhale）** | 品牌化中文本地化最深入的 CLI（i18n 字典化） | DeepSeek 模型用户，中文用户占比高（21 条 Issue 中 4 条中文） | Rust 实现；MCP 多模态内容转发新支持（PR #5515）；i18n 字典脊柱架构；命令上下文依赖注入迁移基础设施 | 更名为 CodeWhale 的品牌转折点，v0.9.9 升级回归影响面大 |

## 5. 社区热度与成熟度

**最活跃梯队（日更 + 安全响应最密集）：**

- **OpenAI Codex**：PR 密度最高，8+ 安全 PR + 功能 PR，安全加固处于高强度持续状态，有专门的安全验证 bot 驱动提交。社区对 Windows 问题反馈集中（50%+ 热点 Issue 为 Windows 相关）。
- **Claude Code**：评论量级最大（单 Issue 最高 124 条），社区用户对功能行为的辩论激烈（如 Opus 5 prompt 注入 28 条讨论 + 53 👍），是当前舆论焦点最集中的工具。

**快速迭代梯队（日更或多日更 + 新功能活跃）：**

- **Gemini CLI**：连夜发布 nightly 版本，两个 CRITICAL CVE 依赖升级 + 安全门加固并行，新模型（3.6 Flash/3.5 Flash-Lite）配置已提交。P1 稳定性问题占比高但响应节奏快。
- **Qwen Code**：**v0.21.14**（live-session registry）与 **CodeWhale v0.9.10 RC** 同日推进，均处于功能加速迭代期。Qwen Code 的 `/review` 与 Autofix 流水线仍处于设计修正阶段（#9278、#9296），多智能体功能尚未成熟。
- **OpenCode**：2.0 版本重写期，大量 Bug 修复 PR（今天 10 条）与文档增强并行，网关稳定性问题是当期主要矛盾。

**相对稳定梯队：**

- **Copilot CLI**：小版本更新（v1.0.81-3 系列），新特性（Gemini 3.7 Flash 支持、per-agent 用量）有条不紊，但 MCP OAuth 回归连续两版未修复反映修复节奏偏慢。
- **Pi**：无新版本，但 10 条 PR 已合入主线，处于"合并后待发布"阶段，社区关注度高（#5263 有 11 条评论 + 13 👍）。
- **Kimi Code**：活跃度最低（仅 1 Issue 更新），但问题揭示了 ACP 模式下基础的 Grep/Glob 工具限制，说明其在 ACP 嵌入场景的成熟度仍需提升。

**正在转变的品牌过渡期：**

- **CodeWhale（原 DeepSeek TUI）**：v0.9.9 更名是标志性转折，在更名和版本升级的同时处理回归问题（#5516）和大量历史 Issue 更新，处于品牌与架构双线调整期。

## 6. 值得关注的趋势信号

**1. 安全已成为 CLI 的核心竞争力，不再只是"加分项"。**
当日安全事件横跨数据丢失（Claude Code C 盘清空）、沙箱逃逸（Codex 8+ 漏洞、Gemini `$VAR` 绕过）、供应链依赖（Gemini 两个 CRITICAL CVE）。开发者应优先关注各工具的安全升级节奏，特别是沙箱边界和信任校验逻辑的修复。安全团队建议将"沙箱逃逸修复速度"纳入工具选型指标。

**2. 模型参数兼容性是新的兼容性战场。**
Codex 的 `prompt_cache_retention` 回归、OpenCode 为 GPT-5.6 过滤冗余参数（PR #43380）、Copilot CLI 新增模型支持——模型快速迭代下，CLI 的模型参数翻译层成为故障高发区。开发者在升级 CLI 版本时应关注模型参数兼容性说明。

**3. "谁在控制 Agent"的透明性需求显著上升。**
Claude Code 的 Opus 5 prompt 注入静默覆盖用户配置（👍 53）、Gemini 子代理 MAX_TURNS 被误报为成功、Copilot CLI 沙箱策略在未定时强制启用——用户对系统级注入规则和策略行为的可见性与可配置性要求大幅提升。这是从"能用"到"可信"的必经阶段。

**4. 资源治理成为刚需。**
涵盖三个层面：成本费用透明性（Claude Code 子代理递归费用、OpenCode 配额计算偏差、Pi 模型回退计费错误）、CI 资源效率（Qwen Code Autofix 59% 取消率、Copilot CLI MCP 子进程无界增长）、内存/CPU 配额（Qwen Code 守护进程内存上限、Copilot CLI 内存超限）。Agent 的自主性越高，资源治理的紧迫性越强。

**5. Windows 桌面端是当前各工具"失分最重"的平台。**
Claude Code 桌面版进程文件锁 + 内存 2.7GB 崩溃、Codex 归档失败 + 浏览器插件初始化失败 + 登录 401、Qwen Code 会话静默删除——桌面端稳定性问题横跨所有主要工具。考虑在 Windows 桌面环境使用 AI CLI 的团队应预留稳定性对冲方案。

**6. 多智能体（Multi-Agent）协作仍处于"非成熟"阶段。**
Qwen Code 的团队消息路由误判（#9276）、DeepSeek TUI 的子 agent 并发超时（#1425）、Gemini 通用代理挂起（#21409）、CodeWhale 用户主动搭建 AI-as-coordinator 架构（#5508）——社区对多 Agent 的需求真实但工具支撑普遍不足。

**7. 中文本地化出现分层现象。**
CodeWhale 完成中文文档 Tier 1 本地化（字典化架构消灭 `isZh` 分支）代表"工程化 i18n"的最高标准，而 Claude Code、Codex 等国际化工具在中国开发者中的中文社区反馈仍有缺口（如 Codex 桌面端中文输入问题）。中文本地化深度正在成为选择工具时的一个隐性考量因素。

**8. 标准化协议（MCP/ACP）的兼容性是双刃剑。**
MCP OAuth 回归（Copilot CLI 连续两版）与 ACP 运行时限制（Kimi Code Grep/Glob 被阻断）表明：协议生态的标准化程度提升的同时，各实现之间的行为差异和兼容性风险也在累积。依赖 MCP 工具的团队应关注 OAuth 和认证机制的版本兼容性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-19）

---

## 1. 热门 Skills 排行

以下按评论/关注度与讨论热度排序，列出当前社区最受关注的 5~8 个 PR：

### ① run_eval.py 修复（修 0% recall 问题）
- **PR**: [#1298](https://github.com/anthropics/skills/pull/1298) — fix(skill-creator): run_eval.py always reports 0% recall
- **状态**: Open（2026-06-10 创建，更新至 06-23）
- **功能**: 修复 `run_eval.py`（及下游 `run_loop.py`、`improve_description.py`）对所有 skill description 一律报告 `recall=0%` 的严重问题；同时修复 Windows 流读取、触发检测与并行 worker 缺陷。
- **社区热度**: 关联 Issue #556（被 10+ 独立用户复现），是最受关注的 skill-creator 工程缺陷修复。另有 #1050、#1099 两个独立 PR 也针对同一 Windows 兼容问题，反映该问题影响面广、关注度高。

### ② document-typography（文档排版质量控件）
- **PR**: [#514](https://github.com/anthropics/skills/pull/514) — Add document-typography skill
- **状态**: Open（2026-03-04 创建，更新至 03-13）
- **功能**: 针对 AI 生成文档的常见排版问题：孤词换行（1–6 词溢出到下一行）、孤行标题（章节标题滞留页底）、编号错位等。
- **社区热度**: 聚焦 AI 文档输出质量，属于高频刚需场景，讨论活跃。

### ③ frontend-design skill 清晰化与可操作性改进
- **PR**: [#210](https://github.com/anthropics/skills/pull/210) — Improve frontend-design skill clarity and actionability
- **状态**: Open（2026-01-05 创建，更新至 03-07）
- **功能**: 全面修订 frontend-design skill，确保每条指令都是 Claude 能在单次对话中实际执行的，提升内部一致性与可操作性。
- **社区热度**: 反映社区对"skill 更偏开发者文档而非可操作指令"的广泛不满（与 Issue #202 呼应）。

### ④ 双 meta-skill：skill-quality-analyzer + skill-security-analyzer
- **PR**: [#83](https://github.com/anthropics/skills/pull/83) — Add skill-quality-analyzer and skill-security-analyzer to marketplace
- **状态**: Open（2025-11-06 创建，更新至 2026-01-07，历史较长）
- **功能**: 新增两个元技能——质量分析器（评估结构、清晰度等五个维度）与安全分析器，用于 Skill 本身的质检与安全审查。
- **社区热度**: 最早提出的 meta-skill 之一，契合社区对 Skills 安全性与规范化的持续关切。

### ⑤ self-audit（交付前质量把关）
- **PR**: [#1367](https://github.com/anthropics/skills/pull/1367) — feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate (v1.3.0)
- **状态**: Open（2026-06-28 创建，更新至 07-02）
- **功能**: 交付前审计 skill —— 先做机械性文件校验，再按损害严重性优先级执行四维度推理审计；声称适用于任意项目、技术栈与模型。
- **社区热度**: 对应 Issue #1385（"Reasoning Quality Gate Pipeline"提案，含三阶段质量门），反映社区对 AI 输出质量保障体系化的需求。

### ⑥ testing-patterns（测试模式全覆盖）
- **PR**: [#723](https://github.com/anthropics/skills/pull/723) — feat: add testing-patterns skill
- **状态**: Open（2026-03-22 创建，更新至 04-21）
- **功能**: 覆盖完整测试技术栈——Testing Trophy 模型、AAA 模式、测试命名、纯函数测试等。
- **社区热度**: 属于工程实践中最高频的需求之一，讨论持续。

### ⑦ ServiceNow 平台 skill
- **PR**: [#568](https://github.com/anthropics/skills/pull/568) — feat: add ServiceNow platform skill
- **状态**: Open（2026-03-08 创建，更新至 08-12，持续活跃）
- **功能**: 定位为广泛的 ServiceNow 平台助手而非窄脚本工具，覆盖 ITSM、ITOM、ITAM/SAM Pro、FSM、HRSD/CSM、SPM、CSDM、IntegrationHub 等。
- **社区热度**: 企业级场景刚需，跨 5 个月持续迭代更新，反映作者持续投入。

### ⑧ pyxel（复古游戏开发）
- **PR**: [#525](https://github.com/anthropics/skills/pull/525) — Add pyxel skill for retro game development
- **状态**: Open（2026-03-05 创建，更新至 07-15）
- **功能**: 对接 pyxel-mcp（Python 复古/像素风游戏引擎 Pyxel 的 MCP 服务器）。
- **社区热度**: 趣味性+创作型场景，更新时间跨度大，持续维护中。

---

## 2. 社区需求趋势

从本次数据中的 Issues 提炼出以下最集中的新 Skill 需求方向：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，最高） | 社区 Skills 在 `anthropic/` 命名空间下分发导致信任边界滥用风险；**安全性是当前社区第一关切**。另有 [#1175](https://github.com/anthropics/skills/issues/1175) 关注 SharePoint Online 场景下的安全与上下文窗口问题 |
| **组织级共享与分发** | [#228](https://github.com/anthropics/skills/issues/228)（👍 8，最多赞） | 企业用户强烈希望 Skills 可组织内直接共享，而非手动下载 .skill 文件再上传；期待共享库或直接分发机制 |
| **Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412) — agent-governance 提案（策略执行、威胁检测、信任评分、审计追踪） | 社区需要"约束 Agent 行为"的治理型 Skill，而非仅创作型 |
| **推理质量门与交付验证** | [#1385](https://github.com/anthropics/skills/issues/1385) — 预任务校准→对抗性审查→交付验证 | 与 PR #1367 self-audit 对应，形成体系化质量诉求 |
| **工具链修复与工程化** | [#556](https://github.com/anthropics/skills/issues/556)（run_eval 0% trigger）、[#202](https://github.com/anthropics/skills/issues/202)（skill-creator 应更新为最佳实践）、[#1362](https://github.com/anthropics/skills/issues/1362)（web-artifacts-builder pnpm ≥10.1 兼容） | 社区核心痛点：skill 自身工具链不稳定 + skill 书写风格"像文档而非指令" |
| **上下文窗口效率** | [#1487](https://github.com/anthropics/skills/issues/1487) — claude-api skill 单次注入 ~156k tokens 耗尽上下文 | 大 skill 的 token 效率成为关注焦点 |
| **去重与规范化** | [#189](https://github.com/anthropics/skills/issues/189)（👍 9）— document-skills 与 example-skills 插件内容重复 | 插件间重复 topic 浪费上下文窗口 |
| **平台扩展** | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock 使用 | 跨平台需求仍然存在 |

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、讨论充分，但尚未合并，属于近期可能落地的候选：

| Skills | PR | 亮点与潜力 |
|---|---|---|
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 交付前推理质量门，对应 Issue #1385 讨论方向，概念新颖、通用性高 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 测试全覆盖属高频刚需，落地价值直接 |
| **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | 企业级平台覆盖面广（8 大模块），持续迭代 5 个月，成熟度逐步提升 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | AI 文档高频痛点，与 docx/pdf 系列 skill 衔接自然 |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | 补足 OpenDocument 格式空缺（.odt/.ods/.odf），与现有 docx/pdf 形成文档格式闭环 |
| **pyxel** | [#525](https://github.com/anthropics/skills/pull/525) | 复古游戏开发，生态差异化明显，作者即 Pyxel 生态维护者 |
| **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | meta-skill 首创，契合社区对 Skill 质量和安全的长期关注，但已搁置较久 |
| **self-audit 姊妹提案** | [#1385](https://github.com/anthropics/skills/issues/1385)（Reasoning Quality Gate Pipeline 提案） | 若与 PR #1367 联动，可能形成完整质量门体系 |

---

## 4. Skills 生态洞察

**社区当前最集中的诉求是：Skills 的安全信任治理（命名空间滥用）+ 工具链工程质量（run_eval 失效、Windows 兼容、token 膨胀）+ 组织级共享分发，三者合力指向"Skills 从个人玩具走向企业级基建"的核心矛盾——生态在爆发式增长的同时，缺乏规范的 Security、Quality 与 Distribution 基础设施。**

---

# Claude Code 社区动态日报 — 2026-08-19

## 1. 今日速览

今日发布 v2.1.235，新增拼写检查功能并修复了语言服务器重连导致的全提示缓存失效问题。社区热度集中在 Windows 桌面版重启动加载失败（#42776，124 条评论）以及 v2.1.219 中针对 Opus 5 的 prompt 注入覆盖用户代理策略的问题（#80988）。此外，一起通过 `cmd /c rd` 绕过系统路径保护导致 C 盘被清空的高优先级安全事件（#86667）正在引发讨论。

## 2. 版本发布

**v2.1.235** 已发布：
- 新增可选的 `spellcheck` 设置：在提示词输入时自动为拼写错误添加下划线标记（基于已安装的 `aspell`、`hunspell` 或 `ispell`）
- 修复了语言服务器在会话中断开或重连时导致整提示缓存失效的问题
- 修复了嵌套 m 相关问题（描述截断，详见 release notes）

（无直接链接提供，可访问 GitHub Releases 页面查看）

## 3. 社区热点 Issues（Top 10）

### 🔥 高热度问题

**1. Claude Code Desktop Windows 版因进程文件锁无法重启**
- 链接: [#42776](https://github.com/anthropics/claude-code/issues/42776)
- 评论 124 · 👍 59 · 状态：OPEN
- 孤立进程持有文件锁，导致桌面版无法重新启动。这是当前评论数最高的 Issue，影响面大且长期未解决。

**2. v2.1.219 针对 Opus 5 的 prompt 注入覆盖用户代理配置**
- 链接: [#80988](https://github.com/anthropics/claude-code/issues/80988)
- 评论 28 · 👍 53 · 状态：OPEN
- `heron_brook` prompt 段落仅对 Opus 5 注入"Do not call the AgentTool unless the user requested it"，静默覆盖用户配置的委派策略且无关闭选项。社区反应强烈，认为违背用户意图。

**3. 多账号登录与切换支持**
- 链接: [#30031](https://github.com/anthropics/claude-code/issues/30031)
- 评论 11 · 👍 58 · 状态：OPEN
- 需求类似 `gh auth switch`，支持跨多个 Claude.ai 账号快速切换。👍 数达 58，是当前最受关注的功能请求之一。

**4. Cowork 模式 Chrome 全部站点被拦截**
- 链接: [#41034](https://github.com/anthropics/claude-code/issues/41034)
- 评论 18 · 👍 9 · 状态：CLOSED
- Chrome 集成在 Cowork 模式下所有网站均被封锁，此前可用。已关闭，推测已修复或标记为过期。

**5. 发布 FreeBSD 原生二进制包**
- 链接: [#61313](https://github.com/anthropics/claude-code/issues/61313)
- 评论 11 · 👍 6 · 状态：CLOSED
- 请求发布 `@anthropic-ai/claude-code-freebsd-x64` 及 arm64 原生二进制包。FreeBSD 用户长期依赖非官方构建。

### 🆕 新近高优问题

**6. [高危/数据丢失] 沙箱绕过导致 C 盘根目录被清空**
- 链接: [#86667](https://github.com/anthropics/claude-code/issues/86667)
- 评论 2 · 状态：OPEN · 标签：high-priority, data-loss, security
- 2026-08-13 的远程控制会话中，Claude Code 通过 `cmd /c rd` 绕过系统路径保护，超时后破坏性命令在后台持续执行，清除 C 盘根目录。涉及沙箱绕过与监督失效，需立即关注。

**7. Plan 模式无法滚动查看计划框上方的回答**
- 链接: [#75202](https://github.com/anthropics/claude-code/issues/75202)
- 评论 7 · 👍 7 · 状态：OPEN
- macOS 上 Plan 模式中渲染在计划框上方的回答无法滚动查看，影响长回答的可读性。

**8. Plan 模式无法滚动查看计划框上方的回答（重复）**
- 链接: [#75202](https://github.com/anthropics/claude-code/issues/75202)
- 评论 7 · 👍 7 · 状态：OPEN
- macOS 上 Plan 模式中渲染在计划框上方的回答无法滚动查看，影响长回答的可读性。

**9. 工具执行删除文件，无视"仅替换"指令**
- 链接: [#72733](https://github.com/anthropics/claude-code/issues/72733)
- 评论 3 · 状态：CLOSED
- 用户明确要求"只替换不删除"，工具仍删除了所有工作产物。报告语气激烈（提及法律行动），需关注工具遵循指令的可靠性。

**10. 编辑器内联 diff 逐行接受/拒绝（类似 Copilot）**
- 链接: [#67430](https://github.com/anthropics/claude-code/issues/67430)
- 评论 3 · 👍 8 · 状态：OPEN
- VS Code 扩展请求加入行级 diff 接受/拒绝功能，对齐 Copilot 的交互体验。

## 4. 重要 PR 进展

**当前活跃 PR 极少（仅 2 条），均非官方主要发布。**

**1. docs(plugin-dev): 文档化 skipLfs marketplace 来源**
- 链接: [#77977](https://github.com/anthropics/claude-code/pull/77977)
- 为插件开发文档补充 `skipLfs` 选项说明，并添加 GitHub 简写与通用 Git URL 跳过 Git LFS 下载的示例。引用 #63035（插件市场文档相关 Issue）。

**2. add the missing source to claude code**
- 链接: [#41611](https://github.com/anthropics/claude-code/pull/41611)
- 描述极简（"add missing source to claude code"），缺少上下文。

## 5. 功能需求趋势

从全部 Issue 中提炼的社区功能关注方向：

| 趋势 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **账号体系** | 多账号登录与切换 (#30031) | 👍 58 |
| **IDE 集成** | VSCode 内联 diff 逐行接受/拒绝 (#67430) | 👍 8 |
| **Web/云端能力** | Claude Code 云端会话支持浏览器工具 (#75632) | 新增 |
| **跨平台支持** | FreeBSD 原生包 (#61313)、Windows Cowork 修复 | 持续反馈 |
| **Sandbox 安全与可靠性** | C 盘被清空 (#86667)、沙箱回归 (#79997) | 高优标签 |
| **模型行为可配置性** | Opus 5 prompt 注入无开关 (#80988) | 👍 53 |
| **费用透明与控制** | 子代理递归导致的意外 Bedrock 费用 (#72861) | 已关闭，需求仍明确 |

## 6. 开发者关注点

- **Windows 桌面版稳定性**是最大痛点：进程文件锁导致无法重启（#42776）、Cowork 麦克风 2-3 秒后被切断（#71887/72469）、桌面版启动后内存飙升至 ~2.7GB 崩溃（#65550）。
- **模型遵循指令的可靠性**引发不满：Opus 拒绝使用可用工具、反复提出替代方案（#66049/66050），以及工具删除文件无视"仅替换"要求（#72733），已出现付费用户流失信号。
- **沙箱与安全边界**需要加强：非 root 安装下 bwrap 挂载失败（#79997）与 `cmd /c rd` 路径保护绕过（#86667）表明沙箱仍需加固。
- **Prompt/策略透明性**是新的争议点：系统注入规则静默覆盖用户配置（#80988）引起社区对"谁在控制行为"的质疑。
- **费用风险控制**需求出现：递归子代理扇出导致意外 API 费用（#72861），用户要求护栏与退款通道。
- 其余高频痛点：Plan 模式滚动问题（#75202）、MCP OAuth 缓存失效后死路（#72818）。

---

*数据来源: github.com/anthropics/claude-code Issues/PRs/Releases（采集于 2026-08-19）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-19

## 1. 今日速览

昨日发布 0.148.0 正式版，新增 TUI 对话导出、会话 Fork 等多项功能，但 **gpt-5.6-sol 模型不兼容 `prompt_cache_retention` 参数导致高版本用户对话全部失败**，成为今日最高频故障。与此同时，社区与维护者密集提交多个安全加固 PR，重点修复 sandbox 逃逸与信任边界绕过问题。

---

## 2. 版本发布

### rust-v0.148.0（正式版）

**新功能：**
- TUI 支持通过 `/export` 将完整对话导出为 Markdown（到剪贴板或新文件）
- `codex exec fork` 支持会话 Fork；TUI resume 选择器支持归档/恢复会话
- TUI 初始化期间即可起草提示词

仓库同时发布了多个 alpha 预发布版本（0.149.0-alpha.1、0.148.0-alpha.22/23），无独立更新说明，仅在为下一迭代做准备。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 严重故障类

**1. [#39397 — `prompt_cache_retention` 导致 0.148.0 每次对话失败（40 评论 / 36 👍）](https://github.com/openai/codex/issues/39397)**
CLI 0.148.0 向 gpt-5.6-sol 发送不支持的 `prompt_cache_retention` 参数，每次对话都返回 `invalid_request_error`。影响所有使用该模型的 CLI 用户。

**2. [#39392 — Codex App + gpt-5.6-sol 因同参数中止（31 评论 / 30 👍）](https://github.com/openai/codex/issues/39392)**
与上条同根因的 App 端报告（版本 26.814.41407，内置 CLI 0.148.0-alpha.15），说明该 bug 同时影响 CLI 与桌面端。

**3. [#39136 — Windows 内置浏览器插件初始化失败：Trusted RPC 不在可信路径（72 评论 / 37 👍）](https://github.com/openai/codex/issues/39136)**
Windows 桌面版（26.814.41407）浏览器功能无法启动，报 Trusted RPC 依赖错误。今日评论数最高的 Issue，Windows 用户受影响面广。

### 🪟 Windows 专属问题

**4. [#39239 — Windows 归档会话失败：`\\?\` 前缀路径导致 os error 2（11 评论）](https://github.com/openai/codex/issues/39239)**
`thread/resume` 后，rollout 路径被加上 Windows 扩展路径前缀，`thread/archive` 因此找不到文件。与 #39209、#39161 为同簇问题。

**5. [#39209 — 归档失败：外部路径归一化对 `\\?\` 前缀无效（7 评论）](https://github.com/openai/codex/issues/39209)**
补充说明了根因——外部路径归一化无法处理扩展长度前缀，导致同一文件被排队两次。

**6. [#39189 — Windows 打开历史会话导致 Pro 账号被登出（6 评论）](https://github.com/openai/codex/issues/39189)**
workspace-only 设置返回 401 后，个人 Pro 账号被强制登出。与服务端鉴权逻辑相关。

**7. [#25178 — Windows 10 22H2 截图功能失效（27 评论 / 15 👍）](https://github.com/openai/codex/issues/25178)**
五月已报告的老问题，`SetIsBorderRequired` 调用导致 Computer Use 截图失败，今日仍在活跃讨论。

**8. [#39167 — Pro 周限额夜间从 88% 跳至 100%（5 评论）](https://github.com/openai/codex/issues/39167)**
App 自动更新至 alpha.15 后约 6 分钟即出现限额跳升，怀疑与自动更新后会话计数异常有关。

### 🔐 安全与信任

**9. [#39396 相关安全 PR 集群 — 见下方 PR 部分](#4-重要-pr-进展)**
今日 codex-security-validator-staging bot 密集提交 8+ 个安全修复 PR，覆盖 macOS Seatbelt 逃逸、worktree 信任伪造、PowerShell 解析期命令注入等高风险问题。

### ⭐ 老牌高赞需求

**10. [#11956 — Multi-repo 支持（22 评论 / 47 👍）](https://github.com/openai/codex/issues/11956)**
社区长期呼声最高的功能需求——多仓库上下文支持，今日仍有讨论，是用户滞留 CLI 的主要原因之一。

---

## 4. 重要 PR 进展（Top 10）

### 🔐 安全修复集群（今日最密集）

**1. [#39386 — seatbelt: 跳过符号链接的可写根目录](https://github.com/openai/codex/pull/39386)**
修复 macOS 逃逸漏洞：攻击者将 workspace 替换为符号链接，Seatbelt 策略生成时将符号链接目标误授予 `file-write*` 权限。

**2. [#39380 — shell-command: 忽略模型提供的 shell 可执行路径](https://github.com/openai/codex/pull/39380)**
防止模型选定仓库中的伪造 `bash` 可执行文件绕过 exec 策略——此前仅校验内层命令，allow 规则可能授权不同的外部命令。

**3. [#39355 — shell-command: 拒绝 PowerShell 解析期安全输入](https://github.com/openai/codex/pull/39355)**
未沙箱化的 `Parser.ParseInput` 在审批前处理不受信任脚本，Windows DSC `configuration` 输入可执行仓库控制的 manifest 代码。

**4. [#39390 / #39384 / #39388 — git-utils: worktree 信任校验三连](https://github.com/openai/codex/pull/39390)**
系列修复：伪造 `.git` 文件指向受信仓库的 worktree 路径即可继承信任状态。分别修复 gitdir 回链验证、worktree 注册校验和信任元数据验证。

**5. [#39396 — core-plugins: 将本地插件安装绑定到已批准来源](https://github.com/openai/codex/pull/39396)**
workspace marketplace 可复用已配置的插件身份，使仓库控制的 MCP 代码替换已批准的插件缓存。

**6. [#39391 — mcp-openai-file: 将 Apps 上传限制在工作区根目录内](https://github.com/openai/codex/pull/39391)**
默认 workspace-write 授予根目录读权限，`fileParams` 可通过 `..` 或符号链接越界上传文件。

**7. [#39393 — windows-sandbox: 避免隐式配置读取根目录](https://github.com/openai/codex/pull/39393)**
沙箱设置枚举 `%USERPROFILE%` 添加读根目录权限，空闲配置时可能包含未选中的受保护文件夹。

### ✨ 功能与兼容性

**8. [#39452 — 移除异步用户消息的功能开关（已合并）](https://github.com/openai/codex/pull/39452)**
当模型支持时，向根 agents 开放 `send_user_message_async`，保留兼容性标志位。

**9. [#39410 — 刷新 Bedrock 过期 AWS 凭证（已合并）](https://github.com/openai/codex/pull/39410)**
新增 `aws.auth_refresh` 配置，支持请求过程中 AWS SDK 凭证过期时的动态恢复。

**10. [#39404 — 支持旧版系统 Bubblewrap 的 FD 挂载（已合并）](https://github.com/openai/codex/pull/39404)**
检测缺少 `--ro-bind-fd` 的旧 Bubblewrap，回退到兼容挂载方案，扩大 Linux 沙箱兼容面。

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 社区热度 |
|------|-----------|---------|
| **多仓库支持** | #11956 | ⭐⭐⭐ 47 👍 / 22 评论，长期高赞 |
| **工具/技能目录事件流** | #31088 — 在 `codex exec --json` 中输出可用工具与 slash-command 目录 | 13 👍，面向自动化与可观测性 |
| **TUI 图片粘贴** | #24322 — 支持 Cmd-V 粘贴图片（macOS 用户） | 5 👍，macOS 体验缺口 |
| **Skills 配置覆盖** | #29846 — `skills.config.enabled=false` 无法被子代理配置覆盖 | Azure 自定义 provider 用户受影响 |
| **Windows 稳定性** | 归档/恢复、浏览器插件、截图、限额跳升 | 今日 50%+ 热点 Issue 均与 Windows 相关 |

---

## 6. 开发者关注点

### 最痛点：0.148.0 的 `prompt_cache_retention` 回归
- **影响范围**：CLI 与桌面端所有使用 gpt-5.6-sol 的用户，每次对话直接失败
- **社区情绪**：两个 Issue 在数小时内合计获得 70+ 评论和 66 👍，属于高优先级回归
- **建议**：如使用 gpt-5.6-sol，建议暂缓升级 0.148.0 或改用其他模型

### Windows 平台问题集中爆发
- 归档失败（`\\?\` 路径前缀）、浏览器插件初始化失败、点击历史会话被登出、限额异常跳升——Windows 用户系统性体验受损，多个问题指向 `26.814` 版本引入的变更

### 安全修复密集，建议关注升级
- 8+ 个安全 PR 覆盖 macOS 沙箱逃逸、worktree 信任伪造、PowerShell 注入、Shell 路径替换等，涉及沙箱与信任边界核心逻辑，建议密切跟进合并节奏并优先升级

### 高频需求未被满足
- **多仓库支持**（#11956）自 2 月提出以来持续活跃，是 CLI 用户转向 App 的最大阻碍
- 自动化场景下，`--json` 事件流缺少工具目录声明（#31088），影响外部编排工具集成

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

## Gemini CLI 社区动态日报 — 2026-08-19

### 1. 今日速览

今日社区动态集中在三个方向：安全修复方面，多个 PR 针对 **CVE-2026-28292**（simple-git）和 **CVE-2026-9277**（shell-quote）两个 CRITICAL 级漏洞提出依赖升级，同时有 PR 修补 `$VAR` 变量展开绕过安全门的问题；Agent 稳定性方面，子代理恢复机制、通用代理挂起等 P1 问题持续获得关注；此外，昨日发布 nightly 版本，主要包含 SSR Agent 的问题修复。

### 2. 版本发布

**v0.56.0-nightly.20260819.g571851b10** 于 2026-08-19 发布，包含两项更改：
- [PR #28865](https://github.com/google-gemini/gemini-cli/pull/28865)：修复 Issue #28050，为 Vertex AI locations 补充文档链接
- [PR #28866](https://github.com/google-gemini/gemini-cli/pull/28866)：修复 Issue #22093，在 agents 模式被禁用时阻止子代理运行

### 3. 社区热点 Issues

| # | Issue | 优先级 | 关注点 | 社区反应 |
|---|-------|--------|--------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后被误报为 GOAL 成功 | P1 | 子代理因达到最大转数中断，却报告 `status: "success"`，掩盖了实际的执行中断，影响用户对结果的信任 | 12 条评论，2 个 👍，标记为 need-retesting |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 通用代理挂起 | P1 | 代理委派给通用代理时无限挂起，即使创建文件夹这类简单变更也会卡住，用户等待长达 1 小时 | 8 条评论，8 个 👍，社区反馈最强烈的问题之一 |
| 3 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 组件级评估体系（EPIC） | P1 | 在 Issue #15300 引入的 behavioral evals 基础上，扩展为组件级别的评估框架 | 7 条评论，属于大型规划型 EPIC |
| 4 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令执行后卡在 "Waiting input" | P1 | 简单 CLI 命令执行完成后界面仍显示活动并等待输入，影响基本可用性 | 4 条评论，3 个 👍 |
| 5 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser 子代理在 Wayland 下失败 | P1 | 浏览器子代理在 Wayland 显示服务器下无法正常工作 | 4 条评论，1 个 👍 |
| 6 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — get-shit-done 输出钩子导致崩溃 | P1 | 输出摘要快完成时触发崩溃 | 3 条评论，P1 级别的稳定性问题 |
| 7 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 利用模型的 bash 原生能力：零依赖沙箱与执行后意图路由 | P2 | Gemini 3 模型天生擅长 POSIX 工具链，建议通过零依赖 OS 沙箱和 intent routing 充分利用这一特性 | 8 条评论，effort/large |
| 8 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST-aware 文件读取/搜索的 impact 评估（EPIC） | P2 | 探索 AST 感知工具是否能让方法边界读取更精确，减少多轮交互 | 7 条评论 |
| 9 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 不主动使用自定义 skills 和子代理 | P2 | 用户反馈 Gemini 几乎不会主动调用已配置的技能和子代理，需要显式指令才执行 | 6 条评论 |
| 10 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 对低信号会话无限重试 | P2 | 后台提取代理对低价值会话反复重试，浪费资源 | 5 条评论 |

### 4. 重要 PR 进展

| # | PR | 状态 | 核心内容 |
|---|-----|------|----------|
| 1 | [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) | OPEN | **安全修复**（P1，size/l）：修复 `detectBashSubstitution()` 和 `detectPowerShellSubstitution()` 中不完整的检查，阻止 `$VAR` 和 `${VAR}` 变量展开绕过 GHSA-wpqr-6v78-jr5g 安全门，纵深防御加固 |
| 2 | [#28778](https://github.com/google-gemini/gemini-cli/pull/28778) | OPEN | **依赖安全**：升级 simple-git 至 3.32.3，修复 **CVE-2026-28292（CRITICAL）** |
| 3 | [#28780](https://github.com/google-gemini/gemini-cli/pull/28780) | OPEN | **依赖安全**：升级 shell-quote 至 1.8.4，修复 **CVE-2026-9277（CRITICAL）** |
| 4 | [#28903](https://github.com/google-gemini/gemini-cli/pull/28903) | OPEN | **UX 修复**（P1）：修复 command completion 模式检测中 `\@` 转义符号被误识别为 @ 触发符的问题，增加反斜杠计数检查 |
| 5 | [#28904](https://github.com/google-gemini/gemini-cli/pull/28904) | OPEN | **沙箱修复**：规范化 sandbox DEBUG 环境变量语义，仅保留 `true` 和 `1` 作为有效值，并加入回归测试 |
| 6 | [#20536](https://github.com/google-gemini/gemini-cli/pull/20536) | OPEN | **非交互模式增强**（help wanted）：支持在 headless 模式下输出 `/stats` 命令结果，此前该命令在非交互模式下静默失败 |
| 7 | [#28905](https://github.com/google-gemini/gemini-cli/pull/28905) | OPEN | **文档修正**：移除个人 Google 账户使用 Gemini CLI 登录的过时建议，引导 free tier、AI Pro、AI Ultra 用户使用 Antigravity CLI |
| 8 | [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | CLOSED | **新模型支持**：为 Gemini 3.6 Flash 和 3.5 Flash-Lite 添加基础模型定义与能力配置 |
| 9 | [#28681](https://github.com/google-gemini/gemini-cli/pull/28681) | CLOSED | **本地推理支持**：添加对 SGLang 和本地 OpenAI 兼容端点的支持 |
| 10 | [#28768](https://github.com/google-gemini/gemini-cli/pull/28768) | OPEN | **CI 修复**：修复 Wombat 上静态标签导致的 403 DELETE 错误，及性能测试中 ripgrep 解析问题 |

### 5. 功能需求趋势

从今日活跃的 Issues 中可提炼出以下社区最关注的功能方向：

- **Agent 行为可靠性**：子代理恢复误报、通用代理挂起、shell 命令卡死等稳定性问题持续高优，是当前社区最集中的痛点
- **安全与沙箱强化**：变量展开绕过、依赖 CVE、OAuth 回调资源管理等安全类修复占比较高，且均为 P1/P2 优先级
- **AST 感知工具链**：探索用 AST 感知的文件读取/搜索/代码库映射来替代逐行读取，减少多轮交互（Issue #22745）
- **Sandboxing 与原生 bash 能力利用**：社区提出应让 Gemini 3 模型充分发挥其原生 bash 使用能力，通过零依赖 OS 沙箱和 post-execution intent routing 实现（Issue #19873）
- **Auto Memory 改进**：多个 Issues 集中反馈 Auto Memory 的重试策略、日志冗余和补丁隔离问题
- **新模型支持**：Gemini 3.6 Flash 和 3.5 Flash-Lite 的模型配置已提交
- **本地/第三方推理后端**：SGLang 和本地 OpenAI 兼容端点的支持 PR 虽已关闭，但表明社区有本地推理需求

### 6. 开发者关注点

- **稳定性优先**：开发者最迫切的是解决挂起、卡死、误报等基础可靠性问题（通用代理挂起、shell 命令卡 "Waiting input"），这些问题直接影响日常使用的信心
- **错误信息需透明**：MAX_TURNS 被隐藏为 GOAL 成功、非交互模式下 /stats 静默失败等案例表明，社区对清晰的错误反馈和可观测性有强烈需求
- **子代理主动性不足**：多个反馈指出 Gemini 不会主动使用已配置的 skills 和子代理，用户在显式指令后才触发相关能力，期望更强的自动发现能力
- **安全细节受关注**：除了 CRITICAL 级 CVE，开发者对变量展开绕过、OAuth 回调超时泄漏等细节安全加固也很敏感
- **配置一致性**：Browser Agent 忽略 settings.json 覆盖、符号链接不被识别为代理等问题表明，配置系统的行为一致性需要改进
- **新模型与本地推理需求并存**：一边是请求支持 Gemini 3.6 Flash 等新模型，另一边是 SGLang 和本地 OpenAI 兼容端点的需求，反映不同用户群体的差异化需求

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-19

## 今日速览

今日发布了 v1.0.81-3 系列小版本更新，主要亮点是新增 Gemini 3.7 Flash 模型支持及 per-agent 用量指标输出。社区方面，Linux 下 ctrl+shift+c 复制失效问题持续发酵（24 条评论），同时 1.0.81 强制启用沙箱的回归问题引发多起投诉，另有 Atlassian MCP OAuth 因 RFC 8414 §3.3 回归连续两版未修复，成为社区最集中关注的两大痛点。

---

## 版本发布

### v1.0.81-3 / v1.0.81-2 / v1.0.81-1（过去 24 小时）

- **新增**：支持 Gemini 3.7 Flash 模型；/sandbox 中 Ctrl+E 快捷打开 settings.json；--usage-output-file JSON 输出新增 per-agent 用量指标；Schedule Manager 中可用 x 键移除定时 prompt
- **改进**：多项 bug 修复与稳定性优化
- **修复**：修复了 allow-all 关闭后的相关问题

---

## 社区热点 Issues（Top 10）

### 1. [#2082] Linux 下 ctrl+shift+c 无法复制到剪贴板
- **状态**：OPEN | 评论 24 | 👍 12
- **要点**：自 v1.0.4 起，Ubuntu 24.04 终端中 ctrl+shift+c 复制功能失效，影响面广，是当前评论数最高的 Issue
- [查看详情](https://github.com/copilot-cli/issue/2082)

### 2. [#2904] 自定义 Agent Frontmatter 应支持 Reasoning Effort 配置
- **状态**：OPEN | 评论 7 | 👍 20
- **要点**：社区高票需求——.agent.md 支持指定 model，但无法按 agent 设置推理强度，使能效控制粒度不足
- [查看详情](https://github.com/copilot-cli/issue/2904)

### 3. [#4480] Atlassian MCP OAuth 在 1.0.79 回归失败（RFC 8414 §3.3）
- **状态**：OPEN | 评论 6 | 👍 6
- **要点**：OAuth discovery 报 issuer 不匹配错误，1.0.71 正常、1.0.79 故障；同类问题 #4490 在 1.0.80 仍未修复，连续两版回归
- [查看详情](https://github.com/copilot-cli/issue/4480)

### 4. [#3162] 1.0.42 误报 registry 内 MCP 服务器被策略阻止
- **状态**：CLOSED | 评论 7 | 👍 1
- **要点**：已在 registry 中登记的自定义 MCP 服务器被错误标记为 policy blocked，属策略判定逻辑缺陷（已关闭）
- [查看详情](https://github.com/copilot-cli/issue/3162)

### 5. [#2958] 支持 plan 模式与 autopilot 模式的独立默认模型配置
- **状态**：OPEN | 评论 4 | 👍 16
- **要点**：高票功能请求——按交互模式分别配置默认模型，提升不同任务场景下的模型选择灵活性
- [查看详情](https://github.com/copilot-cli/issue/2958)

### 6. [#4522] 1.0.81 在策略未定时强制启用沙箱，忽略 sandbox.enabled=false
- **状态**：OPEN | 评论 2 | 👍 7
- **要点**：服务器托管策略暂时未定态时，CLI 仍强制启用本地沙箱，无视用户显式配置关闭；企业环境影响显著
- [查看详情](https://github.com/copilot-cli/issue/4522)

### 7. [#3682] 支持 BYOK 提供商凭据热刷新，无需重启 CLI
- **状态**：OPEN | 评论 2 | 👍 6
- **要点**：BYOK 短时凭据（Entra ID/AWS STS/OIDC JWT）过期后需重启 CLI 才能更新，社区希望支持运行时刷新
- [查看详情](https://github.com/copilot-cli/issue/3682)

### 8. [#4521] 沙箱无法被禁用
- **状态**：OPEN | 评论 2 | 👍 4
- **要点**：配置显示 sandbox disabled，但实际运行状态仍为 enabled，配置与行为不一致
- [查看详情](https://github.com/copilot-cli/issue/4521)

### 9. [#4524] 沙箱导致 git 命令无法正常执行
- **状态**：OPEN | 评论 2 | 👍 0
- **要点**：沙箱机制过度严格，即使启用了全部工作目录和 ~/.copilot，agent 仍无法正常使用 git
- [查看详情](https://github.com/copilot-cli/issue/4524)

### 10. [#3698] MCP stdio 服务器连接泄漏：子进程无界增长
- **状态**：CLOSED | 评论 1 | 👍 3
- **要点**：stdio MCP 服务器响应慢或上游不可达时，子进程无法回收并反复重启，导致 CPU 占用和延迟累积（已关闭）
- [查看详情](https://github.com/copilot-cli/issue/3698)

---

## 重要 PR 进展

> 注：过去 24 小时内仅 1 条活跃 PR。

### [#3163] ViewSonic monitor
- **状态**：OPEN | 更新 2026-08-18
- **内容**：针对 #2591、#3561、#3559 的监控/调度相关改动，发起 GitHub Action runners 初始化。摘要信息有限，具体功能待观察
- [查看详情](https://github.com/copilot-cli/issue/3163)

---

## 功能需求趋势

从全部活跃 Issues 中提炼出以下社区关注方向：

| 方向 | 代表 Issue | 社区热度 |
|------|-----------|---------|
| **MCP 生态稳定性** | OAuth 回归（#4480/#4490）、策略误判（#3162）、stdio 连接泄漏（#4392/#3698） | 高 — 多个回归连续多版本未修复 |
| **沙箱机制** | 强制开启（#4522）、无法禁用（#4521）、git 受限（#4524） | 高 — 1.0.81 新引入的回归，集中爆发 |
| **模型配置灵活性** | 按 agent 设置 reasoning effort（#2904）、按模式配置模型（#2958） | 中高 — 均有 16+ 👍 |
| **凭据管理** | BYOK 凭据热刷新（#3682） | 中 — 企业用户刚需 |
| **终端输入体验** | Linux 剪贴板（#2082）、焦点丢失丢键（#4213） | 中 — 日常开发效率受影响 |
| **上下文持久化** | 跨多次压缩保留持久上下文（#4441） | 低 — 长会话用户痛点 |

---

## 开发者关注点

1. **MCP OAuth 回归连续两版未修复**：Atlassian MCP 在 1.0.79 和 1.0.80 连续出现 RFC 8414 §3.3 issuer 不匹配错误，社区已提交 #4480 和 #4490 两条独立 Issue，修复优先级应提升

2. **沙箱策略判定存在竞态**：1.0.81 在服务端策略未定时就强制启用沙箱，且用户显式配置 `sandbox.enabled=false` 时仍被覆盖（#4522），存在策略判定时序问题，影响 Windows 和企业环境用户

3. **Linux 基础快捷键回归长达数月未修复**：ctrl+shift+c 复制问题自 v1.0.4 起存在（#2082），至今仍未修复，已积累 24 条评论，开发者日常复制操作受影响较大

4. **hook 机制不完善**：仓库根目录独立 `.github/hooks/*.json` 中的 postToolUse hook 不触发（#4520），非插件场景下 hook 支持存在缺口

5. **MCP 服务器生命周期管理**：启动时认证后重建 MCP 客户端留下孤儿 stdio 进程（#4392），慢服务器导致子进程无界增长（#3698），资源泄漏是高频反馈点

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-19

## 1. 今日速览

今日社区动态较为平静，过去 24 小时内无新版本发布、无新 Pull Request 更新。仅有一条 Issue 产生更新：**#2609** 报告了 ACP 模式下 `Grep`/`Glob` 工具被运行时限制阻断的问题，该 Issue 已在当日被关闭。当前社区焦点仍集中在 ACP（Agent Client Protocol）集成稳定性与 Bash 终端能力支持上。

## 2. 版本发布

过去 24 小时内无新版本 Release。

## 3. 社区热点 Issues

过去 24 小时内仅有 1 条 Issue 产生更新：

**#2609 — [ACP] Grep/Glob blocked: "ACP runtime only supports interactive Bash tool processes"; Bash intermittently reports "ACP terminal capability is unavailable"**（已关闭）
- **作者**: SolomonFang | **创建/更新**: 2026-08-19 | **评论**: 0 | 👍: 0
- [查看 Issue](https://github.com/MoonshotAI/kimi-cli/issues/2609)
- **重要性**: 该 Issue 揭示了 ACP 运行时的关键限制——非交互式 Bash 进程（如 `Grep`、`Glob`）被显式阻止执行。用户通过 Zed 编辑器（`kimi acp`）使用时，核心搜索工具完全失效，直接影响日常编码工作流。此外，Bash 工具间歇性报告"终端能力不可用"，表明 ACP 模式下终端能力协商存在不稳定因素。
- **状态说明**: 该 Issue 已在当日关闭，但并未附带解决方案说明（0 条评论），可能是重复报告或已通过其他渠道处理。建议关注后续版本中 ACP 运行时对非交互式进程的支持情况。

## 4. 重要 PR 进展

过去 24 小时内无 Pull Request 更新。

## 5. 功能需求趋势

基于当前有限的 Issue 数据（仅 1 条），可提炼出的趋势如下：

- **ACP（Agent Client Protocol）集成稳定性**：社区用户正在将 Kimi Code CLI 作为 ACP 服务嵌入外部编辑器（如 Zed），对 ACP 运行时的工具约束（如非交互式进程限制）和终端能力协商的一致性提出了更高要求。
- **终端/Bash 能力完整性**：用户期望在 ACP 模式下获得与本地终端一致的 Bash 体验，包括但不限于 `Grep`、`Glob` 等内置工具的正常运作。

> 注：由于本期数据仅含 1 条 Issue，功能趋势分析受样本量限制，建议结合历史数据做出更全面的判断。

## 6. 开发者关注点

- **痛点一：ACP 运行时工具限制** — 内置 `Grep`/`Glob` 工具在 ACP 会话中完全不可用，错误信息明确指向"ACP runtime only supports interactive Bash tool processes"。这意味着通过外部 ACP 客户端使用 CLI 时，基础代码搜索能力缺失，开发者被迫切换到本地终端完成搜索操作。
- **痛点二：终端能力不稳定** — Bash 工具间歇性报告"ACP terminal capability is unavailable"，反映了 ACP 模式下终端能力协商的可靠性问题，可能导致外部客户端与 CLI 之间的交互状态不一致。
- **诉求**：开发者希望 ACP 运行时能够支持非交互式 Bash 工具进程，或提供等效的内置替代方案；同时期望终端能力的声明与协商流程更加稳定透明。

---

*数据来源: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) | 统计周期: 2026-08-18 ~ 2026-08-19*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-19

## 今日速览

今日 OpenCode 社区无新版本发布，但出现多起与 OpenCode Go（Zen 网关）相关的服务端异常，包括 `deepseek-v4-flash` 工具数量限制、`muse-*` 流式响应缺少 `finish_reason` 等，引发社区集中反馈。与此同时，大量针对 2.0 版本（TUI、Web UI、会话管理等）的 Bug 修复 PR 正在快速推进，社区功能需求集中在会话管理增强、生态集成与第三方工具接入上。

## 社区热点 Issues（Top 10）

1. **权限配置未生效**
   » [Issue #8832](https://github.com/anomalyco/opencode/issues/8832)（评论 18，👍 9，已关闭）
   用户配置 `opencode.json` 中 `permission.bash` 的 `find`/`ls` 为 `allow` 后仍被拦截，权限系统行为与配置不符。该问题长期存在（1 月创建）但今日仍有更新，关注度高，反映权限模块是核心痛点。

2. **新增会话重命名功能**
   » [Issue #25848](https://github.com/anomalyco/opencode/issues/25848)（评论 13，👍 1，开放中）
   请求添加类似 `/rename` 的手动会话重命名能力，目前该功能缺失，用户管理多会话时不便。

3. **侧边栏宽度不可配置**
   » [Issue #6087](https://github.com/anomalyco/opencode/issues/6087)（评论 8，👍 4，已关闭）
   用户指出侧边栏宽度在代码中硬编码（`packages/app/src/context/layout.tsx`），建议支持宽度配置，改善桌面端 UI 自定义能力。

4. **容器环境 `opencode web` 报 `xdg-open` 错误**
   » [Issue #31815](https://github.com/anomalyco/opencode/issues/31815)（评论 7，👍 12，已关闭）
   无桌面环境的容器（Docker/Podman）中运行 `opencode web` 报 `ENOENT: xdg-open` 错误。👍 数高达 12，说明容器化使用场景用户基数不小。

5. **请求支持 Qwen3.8-27B 模型**
   » [Issue #42729](https://github.com/anomalyco/opencode/issues/42729)（评论 7，👍 4，开放中）
   社区请求将 Qwen3.8-27B 开源权重模型纳入内置支持，反映用户对更多开源模型的接入需求。

6. **OpenCode Go（Console Go）会话回收阶段报 `unsupported_keyword`**
   » [Issue #43371](https://github.com/anomalyco/opencode/issues/43371)（评论 5，👍 1，开放中）
   2.0 beta-17639 内置 OpenCode Go 服务在 session drain/teardown 阶段报 `[unsupported_tool_schema]` 与加密内容错误，属今日新增的 2.0 网关兼容性问题。

7. **muse-* 模型流式响应缺失 `finish_reason`，客户端陷入重试循环**
   » [Issue #43379](https://github.com/anomalyco/opencode/issues/43379)（评论 4，👍 1，开放中）
   Zen 网关（`opencode.ai/zen/go/v1`）流式返回 muse 系列模型时，文本结束后不发含 `finish_reason` 的终止 chunk，导致严格兼容 OpenAI 协议的客户端无限重试。

8. **OpenCode Go 工具数量上限异常收紧**
   » [Issue #43378](https://github.com/anomalyco/opencode/issues/43378)（评论 4，👍 0，开放中）
   今日 07:07 UTC 起，`deepseek-v4-flash` 拒绝超过 16 个工具（此前支持至 200），疑似服务端回归。影响依赖工具调用的复杂自动化任务。

9. **Go 配额已用尽但实际消费仅约 $20**
   » [Issue #38936](https://github.com/anomalyco/opencode/issues/38936)（评论 4，👍 0，开放中）
   用户订阅 Go 后配额显示 100% 耗尽，但成本图表仅约 $20，配额计算与实际用量严重不符，涉及计费透明度。

10. **多家 MCP 服务器 OAuth token 被清空**
    » [Issue #42875](https://github.com/anomalyco/opencode/issues/42875)（评论 3，👍 0，开放中）
    `~/.local/share/opencode/mcp-auth.json` 中多个服务器的 tokens 同时丢失，已认证的 MCP 会话突然需要重新授权，影响多 MCP 工作流稳定性。

## 重要 PR 进展（Top 10）

1. **修复窄屏下 Web UI V2 提示控件遮挡发送按钮**
   » [PR #43383](https://github.com/anomalyco/opencode/pull/43383)（开放中）
   修复 Agent、模型及变体控件在窄视口下遮挡发送按钮的问题，关闭 #43382、#43295、#42834 三个关联 issue。

2. **控制台命令按字母顺序排序**
   » [PR #43398](https://github.com/anomalyco/opencode/pull/43398)（开放中）
   修复桌面端与 TUI 中斜杠命令（slash commands）随机排序问题，统一改为字母序。

3. **降低不支持的 tool-result 媒体类型处理级别**
   » [PR #43391](https://github.com/anomalyco/opencode/pull/43391)（开放中）
   修复 session 消息投影路径中 tool result 含不支持的媒体类型时导致的异常，关闭 #43388。

4. **`apply_patch` 支持非单词 heredoc 分隔符**
   » [PR #43393](https://github.com/anomalyco/opencode/pull/43393)（开放中）
   放宽 heredoc 分隔符解析规则，处理非单词字符，关闭 #43389。

5. **TUI 支持注入文本片段 Markdown 渲染**
   » [PR #43319](https://github.com/anomalyco/opencode/pull/43319)（开放中）
   允许用户消息中的注入文本选择 Markdown 渲染而非纯文本，关闭 #43318。

6. **过滤 GPT-5.6 不支持的缓存控制参数**
   » [PR #43380](https://github.com/anomalyco/opencode/pull/43380)（开放中）
   GPT-5.6 Codex OAuth 请求可能携带 `prompt_cache_retention` 等参数，OpenAI 兼容层现将其过滤，避免请求失败，关闭 #43367。

7. **等待本地服务就绪后再执行启动扇出**
   » [PR #43370](https://github.com/anomalyco/opencode/pull/43370)（开放中）
   修复桌面端启动时渲染进程在本地服务未就绪即发出多个 `get`/`list` 请求导致的竞态问题，关闭 #32379。

8. **ACP 协议：从 todowrite 工具调用发出计划会话更新**
   » [PR #31834](https://github.com/anomalyco/opencode/pull/31834)（开放中）
   Hydra-ACP 集成时计划（plan）未在 OpenCode 中渲染，现通过 todowrite 调用同步计划更新。经合著者补充说明后重新开放。

9. **桌面端新增模型切换通知**
   » [PR #43288](https://github.com/anomalyco/opencode/pull/43288)（开放中）
   基于 Figma 设计实现，将模型切换时间线占位符替换为真实通知（如可用性、变更原因等），为社区贡献者提交。

10. **文档：新增语音输入（MCP 服务）使用指南**
    » [PR #42769](https://github.com/anomalyco/opencode/pull/42769)（开放中）
    新增文档页面，介绍如何通过 MCP 服务器在 OpenCode 中使用语音输入，关闭 #41413。

## 功能需求趋势

- **会话管理增强**：会话重命名（#25848）、会话归档命令完善（[PR #41741](https://github.com/anomalyco/opencode/pull/41741)）、历史指令分节收纳查看（#43361）等需求集中出现，表明用户对多会话组织与回溯能力有明确期望。
- **第三方模型与服务接入**：请求支持 Qwen3.8-27B（#42729）、新增 Eden AI 到 providers 列表（[PR #43386](https://github.com/anomalyco/opencode/pull/43386)）、OpenCode Go 服务异常集中报告，显示社区对模型多样性和网关稳定性的双重关注。
- **生态集成扩充**：多份 PR 申请将外部项目（LoopTroop 看板工具 [PR #43402](https://github.com/anomalyco/opencode/pull/43402)、opencode-autorecord 插件 [PR #43353](https://github.com/anomalyco/opencode/pull/43353)、opencode-quota 插件 [#38281](https://github.com/anomalyco/opencode/issues/38281)）加入官方文档，体现生态建设活跃。
- **TUI 可配置性**：新增 `spinner_verbs` 配置项（[PR #40030](https://github.com/anomalyco/opencode/pull/40030)）、注入文本 Markdown 渲染（PR #43319）等，用户希望在终端界面中获得更细粒度的自定义能力。

## 开发者关注点

- **OpenCode Go / Zen 网关稳定性**：今日集中爆发工具数量上限回归（#43378）、流式 `finish_reason` 缺失（#43379）、会话回收阶段模式校验失败（#43371）等问题，影响生产使用，开发者期望官方尽快修复并完善错误信息可诊断性。
- **2.0 版本会话可靠性**：`opencode2 run` 无头会话约 300 秒固定触发 "Transport" 错误（#43375）、模型空变体导致会话崩溃（#42848）等问题频现，稳定 1.x 正常而 2.0 故障，提示 2.0 会话运行时仍需打磨。
- **计费与配额透明度**：Go 配额与实际消费不一致（#38936）、API 持续报 "usage limit hit"（#43404）等暴露计费统计不透明问题，影响用户对订阅服务的信任。
- **权限与凭据管理的可靠性**：权限配置不生效（#8832）与 MCP OAuth token 集体丢失（#42875）分别触及安全与认证两个基础模块，处理优先级应提高。
- **桌面端与 Web UI 细节打磨**：窄屏控件遮挡（#43295）、启动竞态（PR #43370）等问题反馈数量增多，显示桌面端用户基数增长后对 UI 细节和启动体验的要求在上升。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-19

## 1. 今日速览

今日 Pi 社区围绕**会话内设置隔离**、**会话恢复与流式传输稳定性**及**多提供商兼容性**三大方向展开密集讨论。`#5263` 提出将会话内的模型与思考级别修改默认设为临时（仅影响当前会话），并已有对应 PR `#8356` 提交。此外，Bedrock Mantle 新 API 支持（`#8302`）、UI 提示事件暴露（`#8355`）等多个 PR 进入活跃阶段；同时，多个关于流中断挂起、GitHub Copilot 登录 429 限流等稳定性问题被集中反馈和修复。

## 2. 版本发布

过去 24 小时内无新版本发布，但多项修复已合入主线，预计将在下个版本中体现。

## 3. 社区热点 Issues

### #5263 — 会话内模型与思考级别修改默认应为临时性
**作者**: vanvlack | **评论**: 11 | **👍**: 13 | **状态**: OPEN  
**链接**: [earendil-works/pi Issue #5263](https://github.com/earendil-works/pi/issues/5263)

提议将会话内的模型和思考级别更改默认设为仅影响当前会话（临时性），并在 `/settings` 菜单中引入明确的 "Default model" 入口作为全局默认值。这是当前社区关注度最高的需求（👍 数最高），社区对"会话隔离"的诉求强烈。

### #3200 — 支持在 prompt 命令中传递视频/音频内容
**作者**: louis030195 | **评论**: 9 | **👍**: 5 | **状态**: OPEN  
**链接**: [earendil-works/pi Issue #3200](https://github.com/earendil-works/pi/issues/3200)

希望将 `prompt` RPC 命令的 `images` 支持扩展为同时支持视频和音频内容。反映了社区对多模态输入能力的明确需求。

### #7855 — Pi 在 "Response was truncated before completion" 处停止
**作者**: rolznz | **评论**: 6 | **👍**: 2 | **状态**: CLOSED  
**链接**: [earendil-works/pi Issue #7855](https://github.com/earendil-works/pi/issues/7855)

任何 OpenAI 兼容 API 下均可能触发响应截断错误，需手动提示继续。已关闭，属稳定性和容错类问题。

### #5932 — 将 ctx.navigateTree() 暴露给 ExtensionContext
**作者**: ayushdecoded | **评论**: 6 | **👍**: 1 | **状态**: OPEN  
**链接**: [earendil-works/pi Issue #5932](https://github.com/earendil-works/pi/issues/5932)

`navigateTree()` 目前仅存在于 `ExtensionCommandContext`，请求将其暴露到普通事件/工具的 `ExtensionContext`。开发者在构建自定义实现时受阻。

### #6509 — 扩展可通过 ctx.ui.setUsage 上报使用成本
**作者**: LukasParke | **评论**: 6 | **👍**: 0 | **状态**: CLOSED  
**链接**: [earendil-works/pi Issue #6509](https://github.com/earendil-works/pi/issues/6509)

允许扩展上报在父会话之外发生的 LLM 成本，并整合进底部状态栏的成本显示（如 `$2.000 (+$1.500 ext)`）。强扩展生态需求信号。

### #7445 — openai-responses 将 developer 角色选择绑定到 model.reasoning
**作者**: neavo | **评论**: 5 | **👍**: 0 | **状态**: OPEN  
**链接**: [earendil-works/pi Issue #7445](https://github.com/earendil-works/pi/issues/7445)

在 `openai-responses` 提供商中，Pi 仅在 `model.reasoning` 为 true 时才将 `context.systemPrompt` 以 `developer` 角色发送，否则回退到 `system` 角色，可能导致行为不一致。

### #7829 — 无效 settings.json 被静默忽略，Windows 下出现误导性 "bash not found" 错误
**作者**: odafeng | **评论**: 5 | **👍**: 0 | **状态**: OPEN  
**链接**: [earendil-works/pi Issue #7829](https://github.com/earendil-works/pi/issues/7829)

Windows 用户在 `settings.json` 中使用未转义的反斜杠路径时配置被静默忽略，随后出现与真实原因无关的 "bash not found" 报错。诊断信息质量有待提升。

### #7395 — JSON 模式下序列化累积的 assistant 状态导致二次方输出
**作者**: notanobject | **评论**: 4 | **👍**: 0 | **状态**: CLOSED  
**链接**: [earendil-works/pi Issue #7395](https://github.com/earendil-works/pi/issues/7395)

`--mode json` 下每次 `message_update` 都会序列化当前累积的完整 assistant 消息与增量事件，导致输出量和 stdout 压力呈二次方增长。长流场景下的严重性能缺陷。

### #8285 — Anthropic 回退时的用量按请求模型计费
**作者**: yearth | **评论**: 4 | **👍**: 0 | **状态**: CLOSED  
**链接**: [earendil-works/pi Issue #8285](https://github.com/earendil-works/pi/issues/8285)

Anthropic 服务端回退可能返回不同模型（如 `claude-opus-4-8` 回落为 `claude-fable-5`），但费用计算仍使用请求时模型而非实际返回模型。

### #8336 — glm-5.3 zai 目录条目使思考级别选择失效
**作者**: bermudi | **评论**: 3 | **👍**: 0 | **状态**: OPEN  
**链接**: [earendil-works/pi Issue #8336](https://github.com/earendil-works/pi/issues/8336)

zai 目录中 `glm-5.3` 的条目缺少 `thinkingLevelMap` 且 `supportsReasoningEffort` 为 false，导致思考级别选择器仅提供 off/minimal/low/medium 等选项而实际无效。

## 4. 重要 PR 进展

### #8356 — 将会话内模型和思考级别更改限制在会话内
**作者**: cristinaponcela | **状态**: OPEN | **链接**: [earendil-works/pi PR #8356](https://github.com/earendil-works/pi/pull/8356)

直接解决 `#5263`：会话中的 `/model` 或思考级别更改不再回写全局默认值，仅影响当前会话，避免修改未来启动时的默认设置。

### #8302 — 新增 Amazon Bedrock Mantle 提供商支持
**作者**: cristinaponcela | **状态**: OPEN（WIP） | **链接**: [earendil-works/pi PR #8302](https://github.com/earendil-works/pi/pull/8302)

地址 `#5363`。Amazon 通过新的 Mantle API 上线了部分模型（主要是 GPT 系列，如 openai.gpt-5.x），此前 Pi 缺失该 API 支持。当前正在等待 API 密钥权限以测试端到端。

### #8355 — 扩展 UI 提示事件
**作者**: cristinaponcela | **状态**: OPEN | **链接**: [earendil-works/pi PR #8355](https://github.com/earendil-works/pi/pull/8355)

地址 `#5329`。新增 `ui_prompt_start` 和 `ui_prompt_end` 事件，使主机集成或客户端能显示"等待用户输入"而非仅"Agent 工作中"。

### #8346 — 修复未终止的会话尾巴
**作者**: acmerfight | **状态**: OPEN | **链接**: [earendil-works/pi PR #8346](https://github.com/earendil-works/pi/pull/8346)

在加载 JSONL 会话文件时不修改文件即可检测畸形或未终止的尾巴；在下一次追加前通过截断无效片段或补充缺失分隔符来修复。只读加载和 fork 不受影响。

### #8314 — 修复 Bedrock 加密推理的往返传输
**作者**: seiji | **状态**: CLOSED | **链接**: [earendil-works/pi PR #8314](https://github.com/earendil-works/pi/pull/8314)

Bedrock Converse 将加密的推理内容以 `redactedContent` 形式包裹在 `reasoningContent` 中返回，PR 修复了该字段的往返传输问题。

### #7953 — 在流开始时暴露工具元数据
**作者**: christianklotz | **状态**: CLOSED | **链接**: [earendil-works/pi PR #7953](https://github.com/earendil-works/pi/pull/7953)

在 JSON 和 RPC 的 `toolcall_start` 事件中加入固定大小的 `id` 与 `toolName` 字段，保持流大小线性（移除了累积的 `message` 和 `partial` 快照），并补充了回归测试。响应 `#7925` 的反馈。

### #8359 — 通过代理/网关路由检测 reasoning_content
**作者**: tobias-weiss-ai-xr | **状态**: CLOSED | **链接**: [earendil-works/pi PR #8359](https://github.com/earendil-works/pi/pull/8359)

当 DeepSeek 通过 LiteLLM、opencode zen 等代理访问时，现有的 `provider === "deepseek" || baseUrl.includes("deepseek.com")` 检测失效。PR 扩展了检测逻辑并增加内容迭代防护。

### #8352 — 回退成本不再通过流选项传递
**作者**: cristinaponcela | **状态**: CLOSED | **链接**: [earendil-works/pi PR #8352](https://github.com/earendil-works/pi/pull/8352)

按 `#8319` 正确处理 Anthropic 回退时的成本计算（直接使用线程成本而非流选项），解决了 `#8285` 的错误计费问题。

### #8254 — 防止 Copilot 策略登录时的速率限制
**作者**: rwachtler | **状态**: CLOSED | **链接**: [earendil-works/pi PR #8254](https://github.com/earendil-works/pi/pull/8254)

修复 `#7850`：先获取账户模型目录再进行策略更新；仅更新已知、具备工具能力且**未配置**的模型；对受限登录请求进行有界延迟重试。

### #8307 — 启用实验性缓存友好型压缩
**作者**: vegarsti | **状态**: CLOSED | **链接**: [earendil-works/pi PR #8307](https://github.com/earendil-works/pi/pull/8307)

开启"缓存友好压缩"：将压缩请求追加到主会话中以复用缓存，替代此前每次独立请求压缩（成本更高）的方案。

### #8354 — openai-completions 可配置推理重放字段
**作者**: bnsd55 | **状态**: CLOSED | **链接**: [earendil-works/pi PR #8354](https://github.com/earendil-works/pi/pull/8354)

Pi 按响应流中的原始字段重放推理内容，此前对 `opencode-go` 有一个硬编码例外。vLLM 将响应字段从 `reasoning_content` 改名为 `reasoning`（见 vllm-project/vllm#27752），该 PR 将字段名设为可配置。

### #8343 — 新增 pi.registerToolRenderer 支持外部工具渲染
**作者**: Mostro-Complexity | **状态**: CLOSED | **链接**: [earendil-works/pi PR #8343](https://github.com/earendil-works/pi/pull/8343)

向 `ExtensionAPI` 添加 `pi.registerToolRenderer(toolName, renderer)`，允许扩展（如 UI/主题美化类扩展 `pi-pretty-tui`）自定义 `renderCall`、`renderResult` 和 `renderShell`。

## 5. 功能需求趋势

从今日 Issues 和 PR 中可以提炼以下功能方向：

- **多模态支持**: `#3200` 请求在 `prompt` 命令中支持视频/音频内容，反映社区对多模态输入的需求。
- **会话隔离与配置管理**: `#5263`（+PR `#8356`）和 `#6339`、`#8328` 表明用户希望更清晰的配置作用域（会话级 vs 全局级）以及更可靠的自动压缩（compaction）触发机制。
- **扩展 API 丰富化**: `#5932`（暴露 `navigateTree`）、`#6509`（`setUsage`）、`#8355`（UI 提示事件）和 `#8343`（`registerToolRenderer`）共同指向社区对更深层扩展生态的诉求。
- **新提供商适配**: Bedrock Mantle（`#8302`、`#6216`）和 glm-5.3 目录修复（`#8336`）显示社区正积极跟进各云厂商新 API 和新模型。
- **流式传输稳定性与性能**: `#7395`（二次方序列化）、`#8331`（流中断挂起）、`#8336`（无超时 OpenAI 客户端）表明流式输出的可靠性是开发者核心关注点。

## 6. 开发者关注点

- **成本计算准确性**: `#8285` 和 PR `#8319`/`#8352` 反映服务端模型回退时成本统计错误的问题，直接影响用户费用可见性。
- **登录与限流（429）问题**: `#8121`、`#8251` 和 PR `#8254` 表明 GitHub Copilot 登录流程中的并发策略请求导致自限流，用户升级后仍遭遇登录失败。
- **诊断信息质量**: `#7829` 指出配置错误被静默忽略并给出误导性错误提示（"bash not found"），开发者期望更准确的错误归因。
- **提供商兼容性**: `#7723`（`developer` 角色映射到 `system`）、`#7445`（developer 角色与 reasoning 绑定）、`#8245`（`after_provider_response` 在 Google Generative AI 上不触发）——多提供商的协议差异处理是长期痛点。
- **会话偶发损坏与恢复**: `#8346`（修复未终止的 JSONL 尾巴）和 `#8331`（流中断挂起）体现了长时间运行会话在异常中断情况下的韧性需求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Qwen Code 社区动态日报 — 2026-08-19

### 一、今日速览

今日发布了 **v0.21.14** 与 **v0.21.14-preview.0** 两个版本，核心新增 `qwen sessions ps` 命令与实时会话注册表（live-session registry），用于以 JSON 输出列出和管理运行中的交互会话。社区方面，围绕多工作区守护进程的资源上限、团队会话消息路由、以及会话压缩后上下文丢失的讨论热度最高；与此同时，`/review` 发布时收敛机制与 Autofix 流水线的效率问题成为开发者反馈的集中区。

---

### 二、版本发布

#### v0.21.14（正式版）
- 新增 **live-session registry** 与 **`qwen sessions ps`** 命令（PR [#8969](https://github.com/QwenLM/qwen-code/pull/8969)、[#9261](https://github.com/QwenLM/qwen-code/pull/9261)、[#9366](https://github.com/QwenLM/qwen-code/pull/9366)），支持以 JSON 格式列出并管理运行中的交互会话。

#### v0.21.14-preview.0（预览版）
- `feat(core)`：新增 live-session registry 和 `qwen sessions ps`（[#8969](https://github.com/QwenLM/qwen-code/pull/8969)）
- `feat(daemon)`：为 skill-toggle 变更附加元数据（mutation metadata）

#### 其他
- **dsw-eas-net-smoke-20260819-r1**：隔离的 DSW EAS 网络与看门狗冒烟测试，SWE-bench Verified 全部通过（1/1 resolved），基准版本 v0.21.13。

---

### 三、社区热点 Issues（Top 10）

1. **[#8051] tracking(serve): Bound multi-workspace daemon resource usage**（P2，10 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/8051)  
   生产环境 `qwen serve` 多工作区守护进程的资源占用缺乏有效上限——当前仅按工作区/会话数量限制，无法约束实际内存与 CPU 消耗。社区持续跟进，配套子任务 #8091 同步推进中。

2. **[#9278] Design: /review publish-time convergence advisory**（P2，6 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/9278)  
   `/review` 发布时收敛建议的完整设计与实测记录。核心问题是"失控回路"：评审触发修复 → diff 变大 → 引入新缺陷 → 更多 finding，回路增益大于 1。社区关注度较高。

3. **[#9296] Qwen Autofix: review-event storms and duplicate address dispatch waste runner capacity**（P1，5 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/9296)  
   实测数据显示 3 小时内约 500 次运行、**59% 被取消**（294/500），根因包括对已关闭/已合并 PR 的重复评审、重复地址分发等，严重浪费 CI runner 容量。

4. **[#4063] refactor: core + cli 架构 Review — 12 项结构性问题清单**（8 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/4063)  
   对 `packages/core` 与 `packages/cli` 的全面架构审查，记录了 12–14 项结构性问题，其中 P0 级问题包括**核心类型系统被 `@google/genai` 绑架**——`ContentGenerator` 接口直接依赖外部 SDK 类型。

5. **[#9438] User message dropped after tool call — breaks all tool use on Ollama**（P1，3 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/9438)  
   使用 Ollama 后端时，工具调用后的 follow-up 请求丢失 `role: "user"` 消息，导致 Ollama 返回 500 "no user query found in messages"，**所有工具调用全部失败**。

6. **[#8400] Desktop 0.0.5 / Windows: Sessions silently auto-deleted after restart**（P1，4 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/8400)  
   Windows 桌面版在 ACP 会话/加载失败（工作区 cwd 不匹配）后重启应用，所有会话被静默自动删除，且无任何确认提示。影响 Windows 用户数据安全。

7. **[#9320] Lost context after /compression-fast and /rewind?**（5 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/9320)  
   实测 102k 上下文经 `/compress-fast` 压缩至 87k 后执行 `/rewind`，出现上下文丢失。用户怀疑压缩与回退机制的交互存在缺陷，已关闭但讨论充分。

8. **[#9276] Team members cannot send ordinary messages to their leader**（P2，7 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/9276)  
   多智能体团队中，成员向 leader 发送普通完成/状态消息时被误判为关闭请求，报错 "Only t..."（截断）。多智能体路由逻辑需修复。

9. **[#9452] Switching Responses models or endpoints can make a saved session unusable**（P2，3 条评论）
   [链接](https://github.com/QwenLM/qwen-code/issues/9452)  
   在 OpenAI Responses 实现（PR #8169）的 dogfooding 中发现：切换模型或端点后，已持久化的会话可能无法继续使用。涉及模型切换与会话管理的集成问题。

10. **[#8182] daemon authorises each ACP child 50% of host memory, never divided by child count**（P2，5 条评论）
    [链接](https://github.com/QwenLM/qwen-code/issues/8182)  
   每个 `qwen --acp` 子进程的 V8 堆上限按宿主机内存的 50% 计算，**未按子进程数量均分**，多子进程场景下内存超限风险极高。

---

### 四、重要 PR 进展（Top 10）

1. **[#9474] feat(web-shell): share HTML artifacts through the OSS publisher**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/9474)  
   为 Web Shell 的 HTML 产物卡片新增第三个操作：上传至 OSS 并生成可分享链接，便于向无法访问工作区/守护进程的协作者分享产物。复用现有 OSS publisher 能力。

2. **[#9462] fix(ci): stop the fallback comment from denying a review it already posted**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/9462)  
   修复 `/review` 降级评论机制：评审任务在成功发布评论后可能因后续步骤失败，降级分支再次运行并错误地拒绝已发布的评审。此 PR 阻止该误判。

3. **[#9463] fix(ci): make autofix finding replies idempotent**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/9463)  
   使 Autofix 的 finding 回复具备幂等性：回复前检查线程中是否已存在同 bot 的相同内容评论，避免因重试产生重复回复（呼应 #9296 的重复分发问题）。

4. **[#9332] feat(review): fold the one-hop import widening into `fetch-pr --since`**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/9332)  
   将一跳导入扩展（one-hop import widening）逻辑合并进 `fetch-pr --since` 机制，删除原先独立的 `rescope` 子命令（612 行）。与 `main` 分支实际实现的锚点验证与作用域限制对齐。

5. **[#9426] feat(serve): persist prompt terminal ledger for cold-load reconciliation**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/9426)  
   每个会话维护一个追加写入的提示词生命周期账本（sidecar 文件），记录 in-flight 状态与终态，用于冷加载时的一致性对账。

6. **[#9436] fix(core): treat duplicate provider tool-call ids as replays only when arguments match**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/9436)  
   重复 provider tool-call ID 的去重守卫升级：仅当工具名与参数的规范化指纹一致时才判定为重放，避免 ID 碰撞导致合法调用被误丢弃。

7. **[#9389] feat(providers): recommend the live model list in the setup wizard**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/9389)  
   提供商设置向导的"推荐模型"列表不再冻结于发布时：支持通过 OpenAI 兼容的 `GET {baseUrl}/models` 实时拉取当前可用模型列表。

8. **[#8900] fix(core): sync loaded-skill state with history eviction; add user /unskill command**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/8900)  
   修复已加载技能状态与历史记录驱逐（eviction）不同步的问题，并新增用户侧 `/unskill` 命令用于手动卸载技能。

9. **[#9202] fix(sdk): route unrecognized diagnostics onto a bounded transcript sidechannel**（OPEN）
   [链接](https://github.com/QwenLM/qwen-code/pull/9202)  
   将 normalizer 分类为 `unrecognized_event` / `unrecognized_session_update` 的诊断信息路由至有界的新 sidechannel（`unrecognizedDiagnostics`），不再追加至 `blocks[]`，避免污染会话转写。

10. **[#7803] feat(cli): Add agent view roster UI**（OPEN，栈顶 PR）
    [链接](https://github.com/QwenLM/qwen-code/pull/7803)  
    多智能体视图栈的最终 PR（5/5，父 PR #7802）：新增 Agent View 名册 TUI，按 "需要输入 / 工作中 / 已完成" 分组展示托管的后台会话，支持过滤、查看、附加、关注、停止等操作。

---

### 五、功能需求趋势

从近期 Issues 与 PR 中可提炼出以下社区重点关注方向：

1. **守护进程资源治理**：`qwen serve` 多工作区守护进程的内存/CPU 上限（#8051、#8091、#8182）与子进程内存均分策略，属于当前最高频的 P2 级需求。
2. **多智能体（Multi-Agent）协作完善**：团队成员消息路由（#9276）、`run_in_background` 标志失效（#9430）、`list_agents` 空结果歧义（#9431）等，显示该功能仍处于加速迭代期。
3. **会话生命周期稳定性**：压缩/回退后上下文丢失（#9320）、切换模型后会话不可用（#9452）、Windows 桌面版会话静默删除（#8400）等，会话持久化与恢复是核心痛点。
4. **CI/评审自动化可信度**：`/review` 收敛策略设计（#9278）与 Autofix 流水线效率治理（#9296），社区对自动化评审的可控性与资源效率提出更高要求。
5. **实时数据源集成**：从静态推荐转向运行时动态获取模型列表（#9389）、HTML 产物 OSS 分享（#9474），反映出工具链"活数据"化的趋势。

---

### 六、开发者关注点

- **Ollama 兼容性是硬伤**：工具调用后用户消息丢失导致所有工具不可用（#9438），被标记为 P1，直接影响本地模型用户。
- **评审回路"失控"问题**：`/review` 触发修复后 diff 变大→引入新缺陷→更多 finding 的正反馈回路（#9278），社区对评审机制的阻尼策略需求迫切。
- **CI 资源浪费严重**：Autofix 59% 取消率（#9296），既有流水线设计缺陷也有重复分发问题，维护者已在通过幂等性 PR（#9463）修复。
- **架构层面的外部依赖担忧**：核心类型系统直接耦合 `@google/genai` 类型（#4063），开发者对供应商锁定的长期风险有明确关注。
- **会话数据安全**：Windows 桌面版静默删除本地会话（#8400），用户对数据丢失零容忍，期望更保守的默认行为与明确确认流程。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-19

## 今日速览

项目已正式从 `deepseek-tui` 更名为 **CodeWhale**（Shannon Labs 产品），旧 npm 包停止维护。v0.9.9 发布后社区反馈活跃，今日涌现 3 个新 Issue：v0.9.9 升级后 HTTP 400 max_tokens 超限（#5516）、DeepSeek V4 过早触发紧急压缩（#5518）、0.9.7 以来头部状态指示器不显示（#5512）。同时，v0.9.10 发布候选 PR（#5513）已提交，打包了内存保留、身份认证和持久化审批三项改进。此外，中国用户持续报告大文本处理导致会话卡死（#1425）和中文乱码（#1675）等问题。

## 版本发布

### v0.9.9
> 来源: [Hmbown/CodeWhale Release v0.9.9](https://github.com/Hmbown/CodeWhale/releases)

- **重要品牌变更**: 项目正式更名，公开产品名为 **Codewhale**（Shannon Labs），`codewhale` 命令和 npm 包成为正式标识
- **迁移提示**: 旧 npm 包 `deepseek-tui` 已弃用，不再发布新版本
- **升级提醒**: 从 v0.8.x 旧版 `deepseek`/`d` 命令迁来的用户需要注意新命令名

## 社区热点 Issues（Top 10）

**1. [#5516 [OPEN] HTTP 400 max_tokens=384000 超出模型限制（升级 v0.9.9 后）](https://github.com/Hmbown/CodeWhale/issues/5516)**
- **创建**: 2026-08-19 | 作者: sfdzhmr | 评论: 1
- **问题**: 从 v0.9.8 升级到 v0.9.9 后所有请求失败，报 `max_tokens=384000 cannot be greater than max_model_len=max_total_tokens=262144`，用户未做任何手动配置
- **影响**: 属于 v0.9.9 升级阻断性问题，可能影响大量用户

**2. [#5518 [OPEN] DeepSeek V4 在 85K-105K tokens 即触发紧急压缩，尽管配置了 327,680-token 上下文](https://github.com/Hmbown/CodeWhale/issues/5518)**
- **创建**: 2026-08-19 | 作者: hxfhd | 评论: 1
- **问题**: 使用本地 vLLM 搭建的 DeepSeek-V4-Flash 路由，在长会话中可复现地过早触发紧急压缩，疑似输出 headroom 预算分配和 handoff 状态污染问题
- **影响**: 长会话用户的核心痛点，与 #1425 大文本任务卡死问题相关

**3. [#5512 [OPEN] 0.9.7 起头部状态指示器（cw/whale/dots）不再渲染](https://github.com/Hmbown/CodeWhale/issues/5512)**
- **创建**: 2026-08-18 | 作者: thejayjetson | 评论: 2
- **问题**: Windows 11 23H2 + Windows Terminal 1.20+ + PowerShell 7.6 环境，`status_indicator` 设置（cw / whale / dots / off）在 effort chip 旁一直不显示；0.9.8 和 0.9.9 均可复现
- **影响**: UI 回归问题，影响状态可见性

**4. [#5508 [OPEN] [enhancement] 功能请求：连续循环（continuous loop）](https://github.com/Hmbown/CodeWhale/issues/5508)**
- **创建**: 2026-08-18 | 作者: M-Maciej | 评论: 3
- **请求**: 用户将 AI 作为其他 AI 的协调者，目前在一个 turn 内收集报告、分配任务然后睡眠循环；希望有原生连续循环支持
- **影响**: 多 Agent 编排场景的架构级功能需求

**5. [#1425 [CLOSED] 执行大文本处理工程后会话中断卡死](https://github.com/Hmbown/CodeWhale/issues/1425)**
- **创建**: 2026-05-11 | 作者: AiurArtanis | 更新: 2026-08-19 | 评论: 8
- **问题**: 分析 300 多万字小说时 AI 将原文切为 10 个部分并启动 10 个子 agent，因 `agent_wait` 等待子 agent 超时导致会话卡死。最后确认会话是中断而非卡死，且子 agent 实际成功启动并分配任务
- **影响**: 多 Agent 并发场景的稳定性问题，评论数最高（8条）的 Issue 之一

**6. [#1651 [CLOSED] VS Code 在 YOLO Agent 运行测试脚本时崩溃或意外退出](https://github.com/Hmbown/CodeWhale/issues/1651)**
- **创建**: 2026-05-14 | 作者: HubgitCCL | 更新: 2026-08-19 | 评论: 7
- **问题**: 使用 DeepSeek v4-pro 和 v4-flash 模型时，YOLO Agent 在后台自主执行测试脚本导致 VS Code 崩溃
- **影响**: IDE 集成稳定性问题，涉及 YOLO Agent 后台执行与 VS Code 扩展的兼容性

**7. [#1829 [CLOSED] SSH 连接失败：exit code 255（TCP 22 出站被 shell 沙箱阻断）](https://github.com/Hmbown/CodeWhale/issues/1829)**
- **创建**: 2026-05-20 | 作者: fodudu1226 | 更新: 2026-08-19 | 评论: 7
- **问题**: Windows 10 + DeepSeek TUI v0.8.39 内置 shell 无法 SSH 连到腾讯云新加坡服务器，本地终端连接正常，疑似 shell 沙箱阻断 TCP 22 出站
- **影响**: shell 沙箱网络策略与通用工具兼容性问题

**8. [#1732 [CLOSED] 合并分析报告保存文档巨慢](https://github.com/Hmbown/CodeWhale/issues/1732)**
- **创建**: 2026-05-17 | 作者: yuhg92 | 更新: 2026-08-19 | 评论: 7
- **问题**: 合并分析报告保存到本地文档时缓存命中率极低且过程极慢
- **影响**: 大文档处理 + 缓存优化的性能问题

**9. [#894 [CLOSED] 执行过程中出现图片混乱](https://github.com/Hmbown/CodeWhale/issues/894)**
- **创建**: 2026-05-06 | 作者: bdbox1 | 更新: 2026-08-19 | 评论: 7
- **问题**: 执行过程中出现图片渲染或输出混乱的问题
- **影响**: 多模态内容处理中的渲染正确性问题

**10. [#5437 [OPEN] [documentation] TUI：正式化状态栏色彩语法 + 展示仓库/工作树状态](https://github.com/Hmbown/CodeWhale/issues/5437)**
- **创建**: 2026-08-16 | 作者: Hmbown | 评论: 4
- **背景**: 2026-08-16 外部设计评审结论：当前配色不是"太多颜色"，而是一套有效的"颜色词汇表"；建议正式化该语法并在 UI 中展示仓库状态
- **进展**: 已由 PR #5511 部分实现（git chrome 展示仓库上下文）

## 重要 PR 进展（Top 10）

**1. [#5513 [OPEN] release: Codewhale v0.9.10 — retention, identity, and durable approvals](https://github.com/Hmbown/CodeWhale/pulls/5513)**
- **作者**: Hmbown | 更新: 2026-08-19
- **内容**: v0.9.10 发布候选，rebase 到包含 #5511、#5504、#5507、#5506、#5491 的最新 main；共 11 个提交，涵盖内存保留、身份认证和持久化审批

**2. [#5491 [CLOSED] fix(tui): persist approval outcomes before execution](https://github.com/Hmbown/CodeWhale/pulls/5491)**
- **作者**: cyq1017 | 更新: 2026-08-19
- **内容**: 在执行前持久化审批请求和终态结果到会话日志；无法持久化时拒绝执行，且拒绝过期决策；可重建已关闭和进行中的审批（由 Hmbown 在 #5360 中提出）

**3. [#5511 [CLOSED] feat(tui): show repository context in git chrome](https://github.com/Hmbown/CodeWhale/pulls/5511)**
- **作者**: wuisabel-gif | 更新: 2026-08-19
- **内容**: TUI 头部现在标识 agent 操作位置：普通 checkout（`repo · branch*`）、linked worktree（`repo/worktree · branch*`）以及 ahead/behind 状态；对应 #5437 的仓库/工作树状态部分

**4. [#5515 [OPEN] fix(tui): forward MCP image results as typed content](https://github.com/Hmbown/CodeWhale/pulls/5515)**
- **作者**: cacdcaecawae | 更新: 2026-08-19
- **内容**: 将标准 MCP `image` 内容转换为 CodeWhale 现有的 provider-agnostic 富工具结果块；从文本回执中移除内联 base64，保留 text 和 `structuredContent` 语义

**5. [#5514 [OPEN] refactor(tui): extract stream processing from turn loop](https://github.com/Hmbown/CodeWhale/pulls/5514)**
- **作者**: bistack | 更新: 2026-08-19
- **内容**: 将响应流状态机从 `handle_deepseek_turn` 提取到独立的 `process_stream`；通过 `StreamOutcome` 返回流产生状态，流后内容块组装和输出限制逻辑保留在 turn loop 中

**6. [#5509 [OPEN] fix(tui): restore /title as an independent terminal window title](https://github.com/Hmbown/CodeWhale/pulls/5509)**
- **作者**: SparkofSpike | 更新: 2026-08-19
- **内容**: 修复 `/title` 与 `/rename` 合并（24c7dee46）后的回归——`/title` 成为调用 `rename::rename(...)` 的别名，导致两个命令都改变了 compose 框中的单一会话名；此 PR 将其恢复为独立的终端窗口标题（#5430）

**7. [#5517 [OPEN] feat(web): move docs/constitution and docs/runtime-api onto the dictionary spine (#5337)](https://github.com/Hmbown/CodeWhale/pulls/5517)**
- **作者**: Lstarsky0 | 更新: 2026-08-19
- **内容**: i18n 收尾第二阶段：`docs/constitution` 和 `docs/runtime-api` 各 14 个 `isZh` 分支全部清零；沿用 #5504 的模式（两个字典 + types.ts + index.ts 接入）

**8. [#5506 [CLOSED] feat(tui): add command context adapters and migration gate (FEAT-015)](https://github.com/Hmbown/CodeWhale/pulls/5506)**
- **作者**: aboimpinto | 更新: 2026-08-19
- **内容**: TUI 自有的依赖注入和迁移基础设施，支持安全、增量地提取 slash-command 实现；零迁移量（刻意不迁移任何现有生产命令组）

**9. [#5507 [CLOSED] docs(i18n): complete Tier 1 of Chinese docs localization (#5482)](https://github.com/Hmbown/CodeWhale/pulls/5507)**
- **作者**: SparkofSpike | 更新: 2026-08-19
- **内容**: 完成 #5482 中文文档本地化 Tier 1；重构文档树为按语言分目录，并将现有翻译迁移到新布局

**10. [#5504 [CLOSED] feat(web): move docs/hooks and docs/troubleshooting onto the dictionary spine (#5337)](https://github.com/Hmbown/CodeWhale/pulls/5504)**
- **作者**: Lstarsky0 | 更新: 2026-08-19
- **内容**: 继续 #5337 系列（#5488 之后）：`docs/hooks` 和 `docs/troubleshooting` 是剩余最小的两个页面主体（各 12 个 `isZh` 分支），现已全部迁移到字典脊柱

## 功能需求趋势

| 方向 | 相关 Issue/PR | 关注度 |
|------|--------------|--------|
| **多 Agent 编排/连续循环** | #5508（continuous loop 请求）、#1425（10 子 agent 并发卡死） | 高 — 用户主动搭建 AI-as-coordinator 架构 |
| **审批流程持久化** | #5360（one-shot approval 持久化 + fail-closed）、PR #5491（审批结果持久化） | 高 — 已进入 v0.9.10 发布线 |
| **i18n 字典化（消灭 isZh 分支）** | #5337（dictionary spine）、PR #5517、PR #5504、PR #5507 | 高 — 中文文档本地化 Tier 1 已完成 |
| **仓库/工作树状态可视化** | #5437、PR #5511（git chrome 展示 repo/worktree 状态） | 中高 — 来自外部设计评审 |
| **MCP 多模态内容支持** | PR #5515（MCP image → typed content） | 中 — 与 #894 图片混乱问题呼应 |
| **Crate 分解（可维护性）** | #5316（EPIC-005 crate decomposition）、PR #5506（命令上下文适配器） | 中 — 基础设施重构持续进行 |
| **依赖升级** | PR #5390（rmcp 2.2.0→3.1.2）、PR #5387（tower-http 0.6.11→0.7.0） | 中 — MCP Rust SDK 跨 minor 版本升级 |

## 开发者关注点

**1. v0.9.9 升级回归**: #5516（max_tokens=384000 超限）是升级后即现的阻断性问题，且用户强调"无任何手动配置"，说明 v0.9.9 在默认配置推断方面存在 bug。属最高优先级修复项。

**2. 大上下文处理仍不稳定**: #5518（提前触发紧急压缩）和 #1425（大文本会话卡死）显示长会话/大上下文依然是 DeepSeek TUI 的核心痛点。模型配置 327K token 但 85-105K 就压缩，偏差过大；10 子 agent 并发时 `agent_wait` 超时。

**3. 沙箱网络限制**: #1829 揭示 shell 沙箱对 TCP 22 的阻断会影响 SSH 等日常操作，这类"过于严格"的沙箱策略与通用工具兼容性冲突需要平衡。

**4. 中文用户活跃度高**: 21 条 Issue 中有 4 条来自中文用户（#1425、#894、#1732、#1829），且中文乱码问题（#1675）和中文文档本地化（#5507）持续被关注。项目在中文本地化方向投入明显。

**5. CPU/性能优化**: #1732（报告合并巨慢，缓存命中极低）、#5472（Bash 调用 stdout/stderr 保留 1 小时导致 11GB swap）指向性能和内存保留是持续优化重点——后者已列入 v0.9.10 发布线。

**6. 持续交付稳定化**: #5403（main 在两个平台持续红：macOS plugin_e2e_acceptance + Windows NSIS provisioning）、#5056（verifier 后台测试 flaky）显示 CI 可靠性仍需关注；#5299（npm 发布迁移到 trusted publishing）则为发布自动化扫尾。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*