# AI CLI 工具社区动态日报 2026-09-07

> 生成时间: 2026-09-07 13:01 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向分析报告 — 2026-09-07


## 一、生态全景

当前 AI CLI 工具生态处于 **功能深化与稳定性阵痛并存** 的阶段：头部工具（Claude Code、Codex、Gemini CLI、Copilot CLI）已从"能用"进入"规模化使用"期，社区反馈重心从功能缺失转向 **可靠性、权限安全与平台一致性**——Windows 平台文件锁/进程泄漏、会话状态机卡死、ACP 权限绕过回归等系统性问题开始集中爆发。与此同时，**跨工具工作流兼容**（Plan 模式对齐、MCP 配置互导、共享编码计划格式）成为多家社区共同诉求，工具间生态壁垒正在被用户主动打破。中小型工具（Kimi、Qwen、Pi、DeepSeek-TUI/CodeWhale）则各择赛道——垂直场景深耕、Web Shell 架构、多 Provider 适配、IDE 生态补位——以差异化换取生存空间。


## 二、各工具活跃度对比

本统计基于各项目 GitHub Issues/PR 当日动态摘要，反映 2026-09-07 单日快照。

| 工具 | 热点 Issues | 活跃 PR | Release | 社区关注焦点 |
|------|------------|---------|---------|-------------|
| Claude Code | 10+（Function Hooks 79👍 居首） | 无新增，历史社区 PR 批量更新 | 无 | Function Hooks 插件架构、Windows 文件锁故障族、IDE 上下文控制权 |
| OpenAI Codex | 10+（"at capacity" 多模型集体报错） | 10+ 合并（Guardian 审批收敛为主） | 无 | 模型容量错误、Windows 会话历史冻结、审批/安全策略扩展 |
| Gemini CLI | 10+（子代理假成功、通用代理挂起） | 16 个 PR 合并关闭（含 P1 修复） | v0.60.0-nightly.20260907 | Agent 可靠性、Auto Memory 隐私、符号链接兼容 |
| GitHub Copilot CLI | 10+（会话管理、ACP 权限回归） | 3 个新 PR（均 OPEN） | 无 | 多会话管理缺陷、ACP 权限回归、MCP 连接生命周期 |
| Kimi Code CLI | 4（Plan 模式、工具死循环） | 1（社区贡献，待 Review） | 无 | Plan 模式落地、跨工具兼容、自主行动失控 |
| OpenCode | 10+（Go 订阅 429 故障、配额误判） | 10+（provider compaction 三连） | 无 | 服务稳定性、provider 压缩、权限判断服务端化 |
| Pi | 10+（Windows 征集 57 评论居首） | 10+ 合并（Copilot Astra 路由修复等） | 无 | Provider/新模型兼容、取消/中断可靠性、Windows 体验 |
| Qwen Code | 10+（后台 Shell 丢输出、conhost.exe 泄漏） | 10+（CI/Web Shell/记忆系统） | 3 个（v0.23.1-preview.1/.2 + cua-driver） | Web Shell 后台自动化、MCP 子进程生命周期、TUI 架构迁移 |
| DeepSeek-TUI (CodeWhale) | 10+（v0.9.12 回归族） | 10+（单 PR 修五缺陷） | 无 | 回归修复、并发可靠性、ACP schema 合规 |


## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 | 热度信号 |
|------|---------|---------|---------|
| **会话/上下文持久化** | Claude Code、Copilot CLI、Kimi、Qwen、Gemini CLI | CLI 重启间保持上下文、多会话开发工作流、历史可靠恢复 | #91913 (CC)、Ghost 会话 (Codex #41987)、多会话并发受限 (Copilot #4742/#4756)、会话级 turn 导航 (Qwen #10750)、EPIC-005 架构重构 (CodeWhale) |
| **Agent 可靠性/取消语义** | Gemini CLI、Pi、Qwen、Copilot CLI、Kimi | 子代理假成功、挂起、取消不生效、shell 卡死、工具死循环 | Gemini #22323/#21409/#25166、Pi #8823/Esc 取消、Qwen #11119、Kimi #2637、Copilot #4755 会话状态机死锁 |
| **权限/审批可扩展性** | Codex、Copilot CLI、OpenCode、Claude Code | 统一审批路径、ACP 权限控制、--yolo 可用性、插件权限断言 | Codex Guardian 收敛 4 PR、Copilot #4537 权限回归、OpenCode #47754/#46530、Claude Code Function Hooks #91870 |
| **跨工具工作流兼容** | Kimi、Pi、DeepSeek-TUI | coding plan 互导、MCP 配置互通、ACP schema 合规 | Kimi #2252 (Codex /goal 对齐)、#1356 (MCP 互导)、Pi #5732 (allowCommands)、CodeWhale #5969 JetBrains ACP |
| **Windows 一等公民体验** | Claude Code、Codex、Copilot CLI、Pi、Gemini CLI、Qwen | 文件锁、进程泄漏、DPI、shell 路径、功能对齐 | CC #53247/#73694/#91763 (文件锁族)、Codex #28919/#42661/#40902、Qwen #11303 conhost 泄漏、Copilot #4756 |
| **模型容量/路由透明化** | Codex、OpenCode、Pi | 容量状态展示、自动故障转移、正确端点路由 | Codex #43398 系列、"at capacity" 报错、OpenCode 429/403 系列、Pi #9209 Copilot 路由 |
| **上下文压缩工程化** | OpenCode、Claude Code、Qwen | provider compaction、Function Hooks、结构化记忆召回 | OpenCode #47322-47324 三连 PR、Qwen #10183 结构化召回 PR |


## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线/平台 |
|------|---------|---------|--------------|
| **Claude Code** | 插件系统生态（hooks/plugins）、IDE 扩展（VS Code/Cursor）、桌面端（Claude Desktop/Cowork） | 深度插件开发者、多 IDE 工作流重度用户 | 插件架构为核心竞争力；Function Hooks 提案若落地将显著拉大与竞品的深度差距 |
| **OpenAI Codex** | 模型能力贯通（GPT-5.5/6 系列）、Guardian 安全审查体系、MCP 生态 | Pro/企业级用户（Pro 20x 配额持有者反馈集中） | 安全架构投入最大（Guardian 统一审批决策路径）；桌面端多平台同步发力但 Windows/ macOS 质量不齐 |
| **Gemini CLI** | 子代理/skills 调度、Auto Memory 记忆系统、沙箱隔离 | Google 生态开发者、自动化工作流用户 | 模型 bash 亲和力 + OS 沙箱路线（#19873 方向）；Nightly 高频迭代；Auto Memory 隐私问题突出 |
| **GitHub Copilot CLI** | ACP (Agent Client Protocol) 扩展、桌面应用多会话、MCP 集成 | GitHub 生态深度用户、需要托管策略的企业开发者 | 深度绑定 GitHub/ACP 生态；版本迭代引发的会话生命周期 & 权限回归问题最为集中 |
| **Kimi Code CLI** | Plan 模式/执行流程控制、跨工具兼容 | 追求"可控性"的开发者、多工具并用者 | 快速跟随头部功能（Plan//goal）并强调互操作性；社区体量小但诉求精准 |
| **OpenCode** | Go 订阅服务、provider 模型路由、compaction、插件 API | 追求开源 + 服务化组合的用户 | Remotion 系创始人主导（nexxeln 活跃）；provider compaction（有损压缩 + 自动调度）为全行业最系统的上下文管理方案 |
| **Pi** | 多 Provider 兼容层（Copilot/OpenRouter/Bedrock/Gemini）、TUI/CLI 双形态 | 多 Provider 并用的高级用户、Rust TUI 生态偏好者 | 迁移至 earendil-works 后走开源聚合层路线；最大的差异化是"非绑定单一 AI 供应商"；Windows 未受官方一等支持（社区征集 #7547 57 评论） |
| **Qwen Code** | Web Shell/daemon 后台自动化、CUA driver、记忆系统 | Alibaba 云/百炼生态用户、Web 端自动化场景 | 独有的 Web Shell 架构投入（静态工作流可视化、并发 daemon）；Robot 自动修复占比高，官方驱动特征明显 |
| **CodeWhale (原 DeepSeek-TUI)** | 并发基础设施（fleet 角色）、ACP/VS Code IDE 集成 | DeepSeek 用户；追求轻量 TUI 的开发者 | 由 DeepSeek-TUI 演进，仓库已更名 CodeWhale；社区小、beta 特征明显，但修复速度极快（单 PR 修五缺陷）；Fabric 模型角色体系在设计中 |


## 五、社区热度与成熟度评估

- **Claude Code 社区规模最大、但在"信任流失"风险期**：高赞 issue（225👍/197👍）积压数月无官方回应，社区自发 PR 批量涌入但官方合入节奏不明。成熟度最高，但官方响应质量正成为最大变量。
- **Codex 社区活跃度高，安全架构最成熟**：Guardian 体系系列 PR 显示维护团队对安全边界的持续投入是有体系的。核心风险在服务端容量（Pro 高配额用户的 429 类错误）与 Windows 桌面端质量参差。*注：各工具中 Codex 是唯一出现高度一致的""at capacity""服务端容量事件的工具。*
- **Copilot CLI 处于"版本迭代阵痛期"**：1.1.15/1.0.83 系列版本集中引入会话生命周期缺陷（#4742、#4755、#4756）+ ACP 权限回归（#4537），社区对安全相关回归敏感度极高。快速迭代速度与质量控制失衡已形成负反馈。
- **Gemini CLI 迭代节奏最快（Nightly 每日发布）**：合并关闭 16 个 PR（含多个 P1/P2 安全修复），处理效率在各工具中居前。但核心 Agent 可靠性 bug（假成功、挂起、shell 卡死）持续存在，说明功能扩张速度与核心链路稳定性之间的张力。
- **Pi 社区"小而精"且工程质量稳定**：多项高阶缺陷当日修复关闭（取消失效、端点路由、宽字素死循环），其多 Provider 兼容能力在行业中具备独有地位，但 Windows 仍是明确短板。
- **Qwen Code 官方驱动、Robot 自动修复角色重**：连续 preview 版本 + 大量 CI/自修复 PR，产品化节奏清晰，但社区 issue 中 Qwen 系独有的平台计费问题（#44）持续引发关注。
- **CodeWhale（原 DeepSeek-TUI）修复敏捷度极高**：v0.9.12 回归集中于单日提出了 5 个针对性修复 PR，其中包含一次修五项缺陷的复合 PR（#5989），适合尝鲜者跟踪但不宜生产环境重度依赖。
- **Kimi Code 和 OpenCode 体量较小**：Kimi 当前处于"功能跟随 + 快速收敛"阶段，核心痛点集中在 Plan 模式与生态割裂；OpenCode 服务端稳定性（Go 订阅 429 故障 + 配额判断缺陷）是当前最大信任危机。


## 六、值得关注的趋势信号

1. **Windows 平台体验已成为行业级共同短板**。Claude Code（文件锁）、Codex（DPI/功能缺失）、Qwen（conhost.exe 泄漏）、Copilot（会话强制归档）、Pi（shell_path 忽略）在同一日出现大量 Windows 缺陷报告，提示"Windows 一等公民支持"是所有 AI CLI 工具的共性技术债。对 Windows 重度用户而言，各工具 Windows 分支的成熟度是重要选型考量维度。

2. **架构级插件/记忆能力正在分化赛道**。Claude Code 的 Function Hooks（79👍）和 OpenCode 的 provider compaction（三连 PR）是"上下文工程"的两条路线——前者通过深度插件化改造 Agent 行为，后者通过压缩与持久化优化长会话管理——值得跟踪哪条路线会被更多工具效仿。

3. **取消/中断语义成为 Agent 自动化的隐形瓶颈**。Pi（Esc 取消、steering 打断）、Gemini（MAX_TURNS 假成功）、Qwen（pre-aborted 队列阻塞）同日反馈同类问题——Agent 在长时间任务中的"用户控制权"（随时可打断、可恢复、不会假完成）将成为 CI/自动化场景可用性的硬门槛。

4. **社区驱动的"跨模型保险"趋势浮现**。Kimi #2252（plan 互导 Codex）、#1356（MCP 跨端配置）、CodeWhale 的 ACP schema 合规、Pi 的多 Provider 兼容层——用户正在主动推动一套工具链的多模型供应商灵活切换，跨工具配置/计划文件的开放互操作标准需求在生态层面持续累积。对技术决策者的含义是：选择深度绑定单一供应商的工具，需评估其配置和产物是否可迁移至其他工具链（例如基于开放协议的 Plan/MCP 而非私有格式）。MCP 作为配置标准、ACP 作为 agent 协议标准的扩散值得持续跟踪。

5. **模型容量与配额透明化是服务化 AI CLI 的共同弱点**。Codex（at capacity）、OpenCode（429/403）、Copilot（模型能力校验缺失）暴露了工具側对供应商/服务端容量状态缺少透传机制——开发者需要的是模型路由/容量状态可观测性，而非面对同一段错误文本手动尝试。

6. **自动化修复机器人已成为开源维护的常态力量**。Qwen 的 qwen-code-dev-bot 和 Claude Code 的社区贡献者 AZERDSQ131 均为显著信号——对评估者而言，官方是否配备自动修复机器人或社区维护者能否持续批量提交高质量 PR，是判断项目长期健康度的有效指标之一。

---

*数据来源：各工具官方 GitHub 仓库 Issues/PR（2026-09-07 更新快照）。所有标题、链接、评论/点赞数均取自所提供素材，未做补充或臆测。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-07 | 来源：anthropics/skills 官方仓库**

---

## 一、热门 Skills 排行（按社区关注度）

### 1. skill-creator 修复 — Windows 评测崩溃与 0% recall 问题（多 PR 聚焦）
GitHub: [#1298](https://github.com/anthropics/skills/pull/1298) · [#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050)
- **功能**：`run_eval.py` 是 skill-creator 的评测脚本，当前在 Windows 上完全无法使用，且对所有 description 均报 `recall=0%`（对应 Issue #556，已有 10+ 独立复现）。
- **讨论热点**：Windows 子进程读取崩溃、`claude` CLI 在 Win 下报 `[WinError 2]`、编码问题、评测 artifact 安装方式缺陷。
- **状态**：全部为 OPEN，且 #1298 引用了早期 PR #1099/#1050 的方案但未合并，存在多 PR 重复修复同源问题的情况。

### 2. document-typography — 文档排版质量控制
GitHub: [#514](https://github.com/anthropics/skills/pull/514)
- **功能**：检测 AI 生成文档中的排版问题：孤行（1–6 个词溢出到下一行）、标题滞留页面底部、编号错位等。
- **讨论热点**：这一需求覆盖面广——所有生成 PDF/文档的 Skill（pdf、docx、pptx 等）均受影响，社区认可度高。
- **状态**：OPEN（自 2026-03-04 起）。

### 3. ODT Skill — OpenDocument 创建、模板填充与转换
GitHub: [#486](https://github.com/anthropics/skills/pull/486)
- **功能**：支持 .odt/.ods 文件的创建、填充、读取及转 HTML，触发词覆盖 ODT/ODS/ODF/OpenDocument/LibreOffice 等。
- **讨论热点**：填补了 document-skills 全家桶中缺失的 ODT 环节，与已有 docx/pdf/pptx skill 互补。
- **状态**：OPEN（2026-03-01 提交）。

### 4. pdf/docx 修复 — 文件引用大小写与 tracked change 冲突
GitHub: [#538](https://github.com/anthropics/skills/pull/538) · [#541](https://github.com/anthropics/skills/pull/541)
- **功能**：修复 SKILL.md 中 8 处大小写不匹配的引用；修复 docx tracked changes 与已有书签的 `w:id` 共享 ID 冲突。
- **讨论热点**：PDF 的修复看似琐碎但会导致 skill 在大小写敏感文件系统（Linux/macOS）上完全失效；docx 修复解决真实文档损坏问题。
- **状态**：均为 OPEN。

### 5. mcp-builder 评估工具 — 序列化缺陷与模型更新
GitHub: [#1724](https://github.com/anthropics/skills/pull/1724) · [#1602](https://github.com/anthropics/skills/pull/1602)
- **功能**：修复 evaluation.py 对真实 MCP server 全部评分 0/N 的缺陷（对应 Issue #1390），并将默认模型从 `claude-3-7-sonnet` 更新为 `claude-sonnet-5`。
- **讨论热点**：TextContent 不可 JSON 序列化导致工具调用被伪造为失败——这直接影响 mcp-builder 的可信度。
- **状态**：双双 OPEN。

---

## 二、社区需求趋势（来自 Issues）

### 1. 安全与信任边界（最受关注、评论最多）
Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论）—— 社区技能在 `anthropic/` 命名空间下分发，伪装官方技能，制造信任边界漏洞，用户可能因此授予社区技能过高权限。这是当前社区最强烈的安全诉求。
> 关联：#62 用户技能无故丢失报错、#1175 SharePoint 文档的权限与上下文窗口担忧。

### 2. 企业级共享与协作
Issue [#228](https://github.com/anthropics/skills/issues/228)（16 评论，👍8）—— 在 Claude.ai 与 Claude Code 中实现组织级 skill 直接共享，替代当前"下载文件 → Slack 传 → 手动导入"的流程。

### 3. 评测/元技能生态成熟化
Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论，👍7）—— skill-creator 的 run_eval.py 评测工具全线失灵。社区对"如何可靠评测一个 Skill"有强烈需求，这关系到整个生态的可用性。
> 关联：Issue #202（CLOSED）要求 skill-creator 从"文档式的说明"改写为"Claude 可直接听话执行的指令"。

### 4. 重复内容去重
Issue [#189](https://github.com/anthropics/skills/issues/189)（👍9）—— `document-skills` 与 `example-skills` 插件安装内容完全一致，导致 Claude Code 上下文中出现重复 skill。

### 5. 新方向提案
- Issue [#1329](https://github.com/anthropics/skills/issues/1329) — **compact-memory**：符号化表示以压缩长运行代理的 Agent 状态。
- Issue [#1385](https://github.com/anthropics/skills/issues/1385) — **推理质量门控流水线**：任务前校准 → 对抗性审查 → 交付验证三阶段。
- Issue [#412](https://github.com/anthropics/skills/issues/412)（CLOSED）— **agent-governance**：AI 代理系统的策略执行、威胁检测与审计。

---

## 三、高潜力待合并 Skills（近期可能落地）

### 1. testing-patterns — 全栈测试模式
GitHub: [#723](https://github.com/anthropics/skills/pull/723)
**2026-03-22 → 2026-04**（近 1 个月有活跃讨论且未见结构性反对）——覆盖测试哲学（Testing Trophy）、单元测试 AAA 模式、测试命名、纯函数边缘用例等。当前实现程度高、直接可用的概率较大。

### 2. Hivemind — 零成本多代理编排
GitHub: [#1628](https://github.com/anthropics/skills/pull/1628)
**2026-08-21 → 08-24 持续更新**——Claude Code 仅做规划/审查/合并，将机械劳动派发给 headless opencode 工作者（运行免费模型）。若官方认可该方向，将成为降低 Agent 成本的关键节点。

### 3. claude-api 模型退役更新
GitHub: [#1607](https://github.com/anthropics/skills/pull/1607)
**非常简单且低风险**——标记 `claude-opus-4-1` 等四个已退役模型 ID。修复 Issue #1603，合并可能性高。

### 4. self-audit — 机械验证 + 四维推理质量门控
GitHub: [#1367](https://github.com/anthropics/skills/pull/1367)
**2026-06-28 → 07-02 持续更新**——通用工具型 Skill：交付前先机械校验文件，再按危害优先级做四维推理审计。作者另有配套提案 Issue #1385（4 评论），存在官方采纳该方案为 skill-creator 内置环节的可能。

### 5. web-artifacts-builder 环境适配
GitHub: [#1362](https://github.com/anthropics/skills/issues/1362)（对应修复 PR 未列出）
**3 个独立问题**——pnpm ≥10.1 硬阻塞、favicon 残留、字体未内联。修复链路清晰，一旦 PR 提出即可快速收敛。

---

## 四、Skills 生态洞察

**当前社区最集中的诉求是：让 skill-creator 等元工具链在 Windows 上稳定可用并产出可靠评测，即"先修好造 Skill 的工具"，在此基础上才有安全治理与组织级分发、以及由 Agent 生成内容的品质管控（排版、推理质量门控）的空间。**

---

# Claude Code 社区动态日报 — 2026-09-07

## 今日速览

过去 24 小时无新版本发布，社区焦点集中在两大方向：一是 Windows 平台 Claude Desktop 的更新/启动故障（多起 issue 相互关联，涉及文件锁与驻留进程），二是高热度功能提案持续发酵——Function Hooks（#91870，79👍/126 评论）成为目前最受关注的插件能力扩展方向，有望大幅提升插件系统深度。

---

## 社区热点 Issues（Top 10）

**1. Function Hooks — 让插件强大 10 倍** 🔥
- **#91870** | 创建 2026-09-03，更新 2026-09-07 | 126 评论 / 79 👍
- 提议引入"Function Hooks"机制，通过带副作用追踪的参数化 `$` 对象深度修改 Claude Code 行为，并基于注册顺序的 `next` 延续模型实现组合。`area:hooks` + `area:plugins` 双标签，是当前社区最热门的架构级提案。
- 链接: https://github.com/anthropics/claude-code/issues/91870

**2. Claude Desktop (Windows 11) 窗口始终置顶，无设置可关**
- **#85891** | 创建 2026-08-11，更新 2026-09-07 | 89 评论 / 197 👍
- Windows 11 上 Desktop 窗口始终绘制在其他应用之上，无内建开关禁用。197 个 👍 表明受影响的用户面很广，已连续近一个月未解决，社区不满情绪在累积。同主题的 #87895 今日被关闭(标记 invalid)。
- 链接: https://github.com/anthropics/claude-code/issues/85891

**3. VS Code 扩展：增加禁用"自动附加打开文件/选区"的设置**
- **#24726** | 创建 2026-02-10，更新 2026-09-07 | 71 评论 / 225 👍
- 这是全仓库 👍 数最高的 open 增强请求之一：用户希望控制扩展是否自动将当前打开文件或选中代码附加到对话上下文。225 赞 + 持续 7 个月未解决，IDE 工作流控制权诉求强烈。
- 链接: https://github.com/anthropics/claude-code/issues/24726

**4. [Windows] Claude Desktop 崩溃后无法启动 — 残留 Silo/Job Object 需注销或重启恢复**
- **#53247** | 创建 2026-04-25，更新 2026-09-07 | 69 评论 / 29 👍
- App 崩溃后遗留的 Silo/Job Object 导致后续启动全部失败，报 HRESULT 0x80070020，只能注销或重启系统。与今日另外两条 Windows 启动/更新失败 issue 高度相关，疑似同根因族。`platform:windows` 与 `area:desktop` 双重标记。
- 链接: https://github.com/anthropics/claude-code/issues/53247

**5. "Environment Contributions" 警告反复出现**
- **#3301** | 创建 2025-07-10，更新 2026-09-07 | 46 评论 / 72 👍
- 每次打开 Cursor/VSCode 集成终端都会弹出扩展需要重启终端以贡献环境变量的警告。已存在超过一年仍未修复。IDE 扩展生态(Cursor + VSCode)的稳定性问题长期未被重视。
- 链接: https://github.com/anthropics/claude-code/issues/3301

**6. Cowork: 新建项目丢失"Choose a folder"——Chat/Cowork 合并后上下文菜单被替换**
- **#76694** | 创建 2026-07-11，更新 2026-09-07 | 13 评论 / 17 👍
- Chat/Cowork 合并之后，新建项目的目录选择能力被降级为"类 Chat 的仅上传知识"菜单。macOS 平台，标记 `area:cowork` + `area:desktop`。功能合并引发的 UX 回归。
- 链接: https://github.com/anthropics/claude-code/issues/76694

**7. [Windows] AppX 更新失败 "another program is using this file" (0x80073d02) — CoworkVMService 持有包文件锁**
- **#73694** | 创建 2026-07-03，更新 2026-09-07 | 8 评论 / 3 👍
- `cowork-svc.exe` 持有包文件句柄导致 AppX 更新/重启失败。与 #53247、#91763 同属 Windows 平台文件锁问题族。已存在两个月，7 月 3 日报告至今未修复。
- 链接: https://github.com/anthropics/claude-code/issues/73694

**8. [Windows/MSIX] `git fsmonitor--daemon` 继承 AppX 容器 Job，阻塞新版重启**
- **#91763** | 创建 2026-09-03，更新 2026-09-07 | 5 评论 / 1 👍
- 新报告：Claude Code 派生的 `git fsmonitor--daemon` 继承了 AppX 容器 job，在更新强制关闭后存活并阻塞新版本重启（0x80070020）。提供根因分析与免重启 workaround。与上面几条 Windows 更新故障形成证据链。
- 链接: https://github.com/anthropics/claude-code/issues/91763

**9. 虚假系统通知在 prompt 组装层被注入（"Exited Plan Mode"/"Auto Mode Active"）**
- **#80818** | 创建 2026-07-24，更新 2026-09-07 | 4 评论
- 观察期长达一个月（v2.1.186–v2.1.218），在 Plan Mode 之外反复出现伪造的 "Exited Plan Mode"/"Auto Mode Active" 系统通知，怀疑在 prompt 组装层注入。涉及 harness 层消息完整性问题，需官方排查。
- 链接: https://github.com/anthropics/claude-code/issues/80818

**10. regression: `includeCoAuthoredBy: false` 失效，Claude-Session trailer 仍被追加**
- **#91546** | 创建 2026-09-02，更新 2026-09-07 | 2 评论 / 2 👍
- 用户已设置 `includeCoAuthoredBy: false`，`Claude-Session:` trailer 仍被写入 commit 消息、session URL 仍出现在 PR 描述中。明确标注为 #66504 的回归，涉及 Git 集成元数据合规性。影响团队协作场景的提交记录整洁度与归属策略。
- 链接: https://github.com/anthropics/claude-code/issues/91546

---

## 重要 PR 进展

今日无新增 PR；过去 24 小时更新的 PR 均为历史提交的社区维护类修复（多为 6 月中旬提交、近两日被触达更新），由贡献者 AZERDSQ131 批量提交，集中在 plugins 目录与内部脚本。以下按主题归类列出较重要的 10 个：

**安全性修复（值得重点关注）：**

**1. security-guidance: 阻断符号链接逃逸（本地文件泄露漏洞）**
- **#68689** | 2026-06-15
- 恶意仓库可通过提交符号链接指向任意本地文件的 `.claude/claude-security-guidance.md` 造成本地文件泄露，此 PR 修复该漏洞。安全评审应优先合入。
- 链接: https://github.com/anthropics/claude-code/pull/68689

**2. security-guidance: `**` glob 应匹配零深度路径**
- **#87079** | 2026-08-16（唯一一条 8 月后提交的 PR）
- 因 `glob_match` 委托给 `fnmatch`，`**/*.ts` 要求字面 `/`，导致顶层文件被 `security-patterns.json` 规则静默排除，与文档承诺 "`**` 匹配任意深度" 不符。可能造成安全扫描盲区，建议优先合入。
- 链接: https://github.com/anthropics/claude-code/pull/87079

**3. plugin-dev: test-hook.sh 经由 stdin 重定向规避 shell 注入**
- **#68786** | 2026-06-16
- 修复 `test-hook.sh` 中 `$TEST_INPUT` 嵌入单引号于双引号 `bash -c` 字符串所引入的 shell 注入风险。
- 链接: https://github.com/anthropics/claude-code/pull/68786

**Windows 兼容性修复：**

**4. security-guidance: Windows 上剥离 Python 版本探测的 CRLF**
- **#68701** | 2026-06-15 — Windows 下 Python 输出 `\r\n` 导致脚本判断失败，跨 learning-output-style 与 security-guidance 两个插件修复。
- 链接: https://github.com/anthropics/claude-code/pull/68701

**5. hookify: 新增 Python wrapper 并在 Windows 上规范化插件根路径**
- **#68699** | 2026-06-15 — `CLAUDE_PLUGIN_ROOT` 中的反斜杠破坏内联 bash 脚本；Microsoft Store 的 `python3` stub 在非 TTY 下静默返回 exit code 49，均在此修复。
- 链接: https://github.com/anthropics/claude-code/pull/68699

**6. security-guidance: Windows 上规范化 CLAUDE_PLUGIN_ROOT 路径分隔符**
- **#68694** | 2026-06-15 — 同上问题，修复六处 hook 命令中的 `$CLAUDE_PLUGIN_ROOT` 引用。
- 链接: https://github.com/anthropics/claude-code/pull/68694

**插件/脚本正确性修复：**

**7. ralph-wiggum: 防护 bash 3.x (macOS) `set -u` 下 PROMPT_PARTS 展开崩溃**
- **#68702** | 2026-06-15 — macOS bash 3.x 默认启用 `set -u`，空数组 `${PROMPT_PARTS[*]}` 展开触发 unbound variable 错误。
- 链接: https://github.com/anthropics/claude-code/pull/68702

**8. hookify: 修复 shadowed `field` 变量与内联 dict 逗号解析**
- **#68686** | 2026-06-15 — `Rule.from_dict()` 局部变量 `field` 遮蔽 dataclasses 模块级 `field` 导入，另修复内联 dict 逗号解析错误。
- 链接: https://github.com/anthropics/claude-code/pull/68686

**9. plugin-dev: hook JSON 输出至 stdout、收紧 su\* glob、修复 CI 检测与 JSON 注入**
- **#68785** | 2026-06-16 — 三个示例 hook 脚本（validate-bash.sh 等）存在向 stderr 写 hook 响应等参考实现级 bug。
- 链接: https://github.com/anthropics/claude-code/pull/68785

**10. scripts/gh.sh: 拒绝空查询的 search issues 命令**
- **#68682** | 2026-06-15 — 空查询会产生无意义 API 调用，增加明确报错信息。
- 链接: https://github.com/anthropics/claude-code/pull/68682

**其他值得注意的 PR：**
- **#68707** feat(bug-reporter)：新增 `/bug` 斜杠命令，支持直接在终端内对 anthropics/claude-code 仓库提交 bug report（6-15 提交，已关闭）。
- **#68693** fix(scripts)：`closeIssueAsDuplicate` 的 PATCH 会整体替换 label 集合，改为增量追加 `duplicate` 标签。
- **#39043**（PR #39043，2026-03-25，OPEN）：从 Frontend Design Skill 中移除 "retro-futuristic" 风格推荐，作者 t3dotgg 备注 "Trust me on this one."——已 open 近半年，属社区驱动的 skill 内容修正。

---

## 功能需求趋势

**1. 插件系统深度扩展（最高热度）**
- **Function Hooks** (#91870, 79👍) 是目前头号架构级提案：通过带副作用追踪的 `$` 对象 + 注册顺序 continuation 模型（`next`），实现安全且可组合的深度修改能力。
- 同时出现 **Harness 强制对抗性提交审查门禁**（#90887, unbypassable PreCommit），社区在主动探索 hooks 的安全边界与治理能力。

**2. IDE 集成精细化控制**
- 呼声最高的需求是"控制权"：禁用自动附加文件/选区到上下文（#24726, 225👍/71评论）、VSCode 多选区增量添加（#33058）、以及**转录视图模式**（Summary/Normal/Verbose，隐藏工具调用噪音，#73413）。方向一致：用户希望掌控 IDE 中上下文的组装方式与信息密度。

**3. 持久化上下文/多会话记忆**
- #91913（2026-09-03 创建）：请求在 CLI 重启间保持上下文/记忆，支持多会话开发工作流。与模型选择（Sonnet vs Opus 能力差异）的抱怨同现，反映长周期任务中对状态延续的核心诉求。

**4. 模型能力与内存管理**
- 涉及 macOS 平台与 `area:model`/`memory` 标签的 #91913 同时隐含对跨会话状态管理的需求，提示平台 + 模型双维度的优化方向正在形成议题。

---

## 开发者关注点（痛点总结）

**1. Windows 平台更新/启动故障已成系统性痛点（最紧急）**
- 至少 4 条在近日活跃的 issue 指向同一根因族：残留的 Job Object / AppX 容器进程（Silo、CoworkVMService、git fsmonitor--daemon 等）持有文件锁，导致更新或重启失败（0x80070020 / 0x80073d02），轻则需注销、重则需重启系统。覆盖 #53247（69 评论）、#73694、#91763、#92099（7/4 新报告）。
- 该问题已持续 4 个月+（最早 4 月 25 日），无官方修复迹象；多条 issue 已附上根因分析和 workaround，官方响应速度与质量是当前最大不满来源。

**2. 高热度 issue 长期无人处理，信任在流失**
- #24726（225👍，7 个月）、#85891（197👍，近 1 个月）、#3301（72👍，超 1 年）均无官方介入迹象。尤其是 197 赞的 Windows 置顶问题今日其"重复 issue"#87895 被标记 invalid 关闭，可能进一步激化情绪。

**3. 功能回归与静默行为变更**
- 两个典型案例：`includeCoAuthoredBy: false` 回归致 Claude-Session trailer 重新出现（#91546，明确标注 #66504 regression）；Chat/Cowork 合并后丢失文件夹选择能力（#76694）。功能合入缺少回归测试与变更通知。

**4. 虚假系统通知污染上下文**
- #80818：在 Plan Mode 之外注入伪造 "Exited Plan Mode"/"Auto Mode Active" 通知，持续一个月跨越多个 CLI 版本。破坏用户对模型输出的信任，指向 harness 层消息组装缺陷。

**5. 社区力量在填补官方空缺**
- AZERDSQ131 连续提交 10+ 条高质量修复 PR，覆盖安全（符号链接逃逸、shell 注入）、Windows 路径兼容、macOS bash 3.x 兼容等，多为 plugins 与内部脚本。这批 PR 中 9 条已关闭，社区维护活跃但官方合入节奏未知——侧面反映官方维护资源向其自有插件生态倾斜不足。

---

*数据来源: github.com/anthropics/claude-code (Issues/PRs 更新于 2026-09-07)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-07

## 今日速览

今日社区最突出的信号是**多个 GPT-5.5/GPT-6 系列模型集中报出 "Selected model is at capacity" 容量错误**（#43398、#43375、#43337），且与用户订阅等级、剩余额度和本地网络环境无明显关联，指向服务端容量或配额判定问题，是当日影响面最广的事件。与此同时，**Windows 桌面应用的会话历史渲染损坏类 Bug 持续高频出现**——多个 Issue 指向同一根因（分页 rollout 在中断回合后产生重复序号，导致线程历史投影永久冻结），开发者已向维护者给出较完整的复现路径。PR 方面则密集推送了 Guardian（审查）策略路由、审批决策路径合并与 TUI 会话恢复的稳定性加固，涉及 36 个合并/关闭的 PR，但均未标注关联 Issue。

## 社区热点 Issues（10 个）

1. **多模型集体报错 "Selected model is at capacity"（#43398）** — Pro 20x 用户报告 codex-cli 0.153.4 下 GPT-5.5、GPT-5.6-Sol、GPT-6 Astra 全部不可用，仅 5.4-mini 正常。同日 #43375（无赞）、#43337（含 gpt-6-astra、gpt-5.6-luna）独立确认相同现象，几可断定不是个别模型波动。👍 5，评论 12。链接：https://github.com/openai/codex/issues/43398

2. **Windows Codex App 缺失 "Control other devices" 设置项（#28919）** — 自 6 月 18 日创建至今持续高热，Pro 用户报 Windows 版设置 > Connections 下找不到远程控制入口，与 macOS 版功能不对齐。👍 59，评论 64。链接：https://github.com/openai/codex/issues/28919

3. **VS Code 扩展中 Markdown 本地链接被默认浏览器劫持（#12661）** — Windows 上点击响应中的 file:// 链接总是打开 Edge 而非 VS Code 编辑器标签，影响日常文档跳转效率，是编辑器集成反馈中评论最长的条目之一。👍 44，评论 49。链接：https://github.com/openai/codex/issues/12661

4. **Windows 桌面应用会话历史永久冻结（#41566）** — 分页 rollout 回合未完成时生成重复序号，导致线程历史投影（thread history projection）永久停摆，Plus 用户遇到后只能新建会话。同根因的 #42027（fork 后复现）、#42387（崩溃后复现）也于今日被更新，构成一个低频但严重的稳定性 Bug 族。链接：https://github.com/openai/codex/issues/41566

5. **Windows Pets 输入区域偏移 + 重启后穿透（#42661）** — 双显示器（副屏竖置）+ 125% DPI 缩放下，宠物窗口的输入热区与实际渲染位置错位；重启系统后宠物窗口不再响应点击。属于典型的多显示器 DPI 适配问题，宠物功能虽属边缘，但 3 个 👍 表明仍有关注。链接：https://github.com/openai/codex/issues/42661

6. **Java NIO Selector.open 回归：回环连接建立失败（#40902）** — 26.820.60940 版本起，Windows 桌面应用内运行 Java 进程时，Selector.open() 报 "Unable to establish loopback connection"。对使用 JVM 生态的开发者是硬阻塞，定位为版本回归，Pro 用户已给出详细环境。👍 3，评论 13。链接：https://github.com/openai/codex/issues/40902

7. **应用内 Browser 插件引导失败（#35224）** — macOS 上 node_repl 拒绝 node:process 导入，导致 Browser 插件始终停留在初始化阶段，无法发现或控制浏览器标签页。评论 12，影响浏览器自动化相关的工作流。链接：https://github.com/openai/codex/issues/35224

8. **macOS 桌面应用出现无法删除的 "Ghost" 会话（#41987）** — 删除会话后标题仍残留于侧边栏且无法清除，影响会话管理和界面整洁度。Plus 用户（Apple Silicon）报，评论 9。链接：https://github.com/openai/codex/issues/41987

9. **macOS OAuth token 交换失败（#41434）** — Codex CLI 在 macOS 上 OAuth 令牌交换阶段持续失败，而同机 curl 访问同一 /oauth/token 端点却成功，指向客户端网络栈或证书处理差异而非服务端故障。评论 9。链接：https://github.com/openai/codex/issues/41434

10. **全局 Control+Space 快捷键冲突（#42258）** — macOS 上 Codex Pet 注册的 Control+Space 与系统输入源切换快捷键冲突，会意外唤起宠物窗口，影响中文等多输入法用户的日常输入。👍 23，评论 5，点赞数说明痛点覆盖面较广。链接：https://github.com/openai/codex/issues/42258

## 重要 PR 进展（10 个）

1. **Centralize Guardian context mode and checkpoint policy（#43458）** — 在会话构造时统一解析 `GuardianContextMode`，使历史保留、回放、证据捕获、压缩与评审消费共享同一策略来源，消除多处定义导致的漂移。链接：https://github.com/openai/codex/pull/43458

2. **Route approvals through the extension decision API（#43432）** — 允许审批扩展在缓存审批、同步审查与用户提示三者间选择处理工具/权限请求，核心层仍强制 Guardian 审查。架构上收紧了扩展审批的口子。链接：https://github.com/openai/codex/pull/43432

3. **Keep Guardian review evidence consistent and reject stale approvals（#43442）** — 修复父级压缩与 Guardian 检查点选择并发时可能丢失审查证据的问题，并拒绝回合期间到达的新指令或答案对应的过期审批。链接：https://github.com/openai/codex/pull/43442

4. **Route MCP elicitations through the shared approval decision path（#43447）** — MCP 请求改用统一 `decide_approval` 路径，携带生效的审批策略、审查者及同步审查要求，与内置工具的审批行为对齐。链接：https://github.com/openai/codex/pull/43447

5. **Notify opted-in stdio MCP servers of auth changes（#43428）** — 新增实验性 `codex/auth-change` 能力通告；MCP 服务器选择接收后，鉴权变化时推送 `notifications/codex/authChanged` 事件，便于长驻会话同步登录态。链接：https://github.com/openai/codex/pull/43428

6. **Pin V8 release manifests and prevent published release replacement（#43444）** — V8 下载清单的校验和本身缺少可信摘要记录，本 PR 在仓库中固定受信清单摘要，并禁止已发布版本被覆盖替换，属供应链安全加固。链接：https://github.com/openai/codex/pull/43444

7. **Avoid WebSocket connection waits in Guardian v2 classification（#43408）** — 没有健康连接池时，Guardian v2 分类会等待新 WebSocket 完成握手而卡住；改为 HTTP 流式通道，规避潜在长时间挂起。链接：https://github.com/openai/codex/pull/43408

8. **Use app-server metadata for TUI session restoration（#43360）** — TUI 会话恢复改为从应用服务器元数据解析工作目录与恢复/fork 目标，而不是在事件派发中同步执行初始化，降低 TUI 线程栈耗尽风险。链接：https://github.com/openai/codex/pull/43360

9. **Defer resume picker and directory changes to a fresh TUI stack（#43376）** — 会话切换所需的内嵌服务器初始化与配置加载转交新 TUI 栈执行，避免事件派发期间因栈空间不足导致崩溃。链接：https://github.com/openai/codex/pull/43376

10. **Add diagnostic labels to shell snapshot capture metrics（#43454）** — 为 shell 快照失败指标增加 `purpose`（execution…）等诊断标签，使失败原因与重试次数在指标上可区分，提升可观测性。链接：https://github.com/openai/codex/pull/43454

## 功能需求趋势

- **会话历史可靠性与可恢复性**：开发者在 Windows/macOS 两个平台均报告项目与会话在重启后消失（#19615）、Ghost 会话无法删除（#41987）、崩溃后历史无法渲染（#42387），CRDT/rollout 序号一致性成为稳定性改进的关键路径。高频出现说明数据持久化本身是刚需。
- **Windows 平台功能对齐**：控其他设备设置项缺失（#28919）、Pets 窗口输入区域错误（#42661）、Java NIO 回环回归（#40902）等均集中于 Windows 桌面端，表明该平台发布节奏快于质量收敛，用户期望的是一等公民体验。
- **模型容量透明化**："Selected model is at capacity" 在多模型、多账号、多平台上同日反复出现（#43398、#43375、#43337），社区要求服务端提供容量状态或自动故障转移，而非由用户逐个手动切换模型。
- **审批与安全策略可扩展性**：今日 PR 的方向（#43432、#43447、#43442）显示维护者正将 Guardian 审批收敛为统一决策路径，社区对 MCP 集成自动化和安全边界的控制力需求正在上升。
- **快捷键与输入法共存**：Control+Space 冲突（👍 23）说明桌面宠物类功能的全局快捷键注册需考虑输入源切换、远程桌面等多键场景的系统级冲突。

## 开发者关注点

- **单点故障集中在会话投影逻辑**：分页 rollout 的序号设计在回合中断时产生不一致（#41566、#42027、#42387），直接冻结历史渲染；开发者给出极具体的复现步骤（版本、操作系统、操作序列），维护者应优先修复并回归测试 fork、压缩、崩溃恢复三条路径。
- **"at capacity" 报错是当日最大可用性障碍**：三个独立 Issue 指向同一现象（#43398、#43375、#43337），且与 **Pro 20x 的高配额用户** 高度相关。这类错误即使在 "capacity error" 分类下被合并处理，也应给出服务端侧的状态页或重试策略，而不是让用户面对多个模型逐一尝试。
- **Windows 版本质量是负面反馈集中地**：从扩展的 file:// 链接处理（#12661）、Pets 的 DPI 偏移（#42661）、Java 回环回归（#40902）到 UI 字号被强制重置（#39781），Windows 端高频出现的都是一些非功能性但每天可见的小缺陷，累积成明显的平台口碑差。
- **OAuth 与鉴权链路需要跨平台回归矩阵**：macOS 的 OAuth token 交换失败（#41434）与 stdio MCP 的 auth-change 通告（#43428）同日出现，说明鉴权是 CLI、桌面应用、MCP 三方共用的薄弱环节。开发者建议维护者建立跨平台鉴权自动化测试矩阵，而非依赖用户逐台报告。
- **新模型发布后的容量压力需要提前沟通**：GPT-6 Astra / GPT-5.6 系列在容量报错中的集中出现，提示每次新模型上线或灰度放量时，应在 Codex 客户端内直接展示容量状态，而不是让用户面对难以分辨的同一段错误文本。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-07

## 1. 今日速览

今日发布了 v0.60.0-nightly.20260907 版本，同时有约 16 个此前提交的 PR（含多个 P1 修复）在今日被合并关闭。社区热点集中在 Agent 可靠性问题：**子代理达到最大轮次后被误报为成功**（#22323）、**通用代理挂起**（#21409）以及 **shell 命令执行后卡在等待输入**（#25166）仍是开发者反馈最强烈的痛点。此外，Auto Memory 相关的安全和日志问题（#26522、#26523、#26525）在今日出现密集更新，值得关注。

## 2. 版本发布

**v0.60.0-nightly.20260907.g85aca163f**（Nightly 版本）

- [发布链接](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260906.g85aca163f...v0.60.0-nightly.20260907.g85aca163f)
- 更新内容：Nightly 发布，无详细变更日志；对应的版本号自动提升 PR（#29233）已开启。

---

## 3. 社区热点 Issues（Top 10）

### #22323 — 子代理达到 MAX_TURNS 被误报为 GOAL 成功（P1, Bug）
- [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **要点**：`codebase_investigator` 子代理已达到最大轮次、尚未做任何分析，却被报告为 `status: "success"`、`Termination Reason: "GOAL"`，掩盖了中断事实。
- **社区反应**：13 条评论，多人关注，@matei-anghel 报告。状态为"需重新测试"。

### #21409 — 通用代理（generalist agent）挂起（P1, Bug, 👍8）
- [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **要点**：委派给通用代理时无限挂起，简单操作如创建文件夹也会卡住长达 1 小时。
- **社区反应**：8 条评论、8 个 👍，是近期最受关注的 Bug 之一，已在 bot 三轮处理中。

### #25166 — shell 命令执行完仍卡在 "等待输入"（P1, Bug, 👍3）
- [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **要点**：简单 CLI 命令执行结束后界面仍显示活动并等待用户输入，反复出现。
- **社区反应**：4 条评论、3 个 👍，状态为 bot 已分类、待重新测试。

### #26525 — Auto Memory 需确定性的机密信息脱敏并减少日志（P2, Security）
- [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)
- **要点**：Auto Memory 将本地转录内容发送给后台提取代理时，机密信息在模型脱敏前就已上传，需改为确定性脱敏。
- **社区反应**：5 条评论。今日有更新，安全相关负责人 SandyTao520 持续跟踪。

### #26522 — Auto Memory 对低信号会话无限重试（P2, Bug）
- [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)
- **要点**：会话只有在提取代理成功读取文件后才被标记为已处理；低信号会话可能被无限跳过和重试。
- **社区反应**：4 条评论。与 #26525/#26523 同属 Auto Memory 系列问题。

### #26523 — 无效 Auto Memory inbox 补丁被静默跳过（P2, Bug）
- [Issue #26523](https://github.com/google-gemini/gemini-cli/issues/26523)
- **要点**：格式错误、越界等无效补丁被静默跳过，后台代理无法感知，建议"浮出"或隔离这些补丁便于排查。
- **社区反应**：3 条评论。今日与 #26522 同步更新。

### #21968 — Gemini 不会自主使用 skills 和子代理（P2, Bug）
- [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **要点**：Gemini 几乎不会主动调用自定义 skills 和子代理，除非显式指令；这让 Agent 能力大打折扣。
- **社区反应**：6 条评论，等待重新测试中。

### #19873 — 利用模型 bash 亲和力做零依赖 OS 沙箱与意图路由（P2, Enhancement）
- [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)
- **要点**：Gemini 3 模型天然擅长 POSIX 工具链操作，建议通过零依赖 OS 级沙箱 + 执行后意图路由来释放其能力。
- **社区反应**：9 条评论，标记 effort/large。

### #22745 — AST 感知的文件读取/搜索/映射评估（P2, Feature）
- [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- **要点**：EPIC 追踪 AST 感知工具的价值评估——精确读取方法边界、减少调用轮次等。Gundermanc 创建。
- **社区反应**：7 条评论，持续更新中。

### #20079 — `~/.gemini/agents/` 下符号链接不被识别为 agent（P2, Bug）
- [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)
- **要点**：agents 目录下的 symlink `.md` 文件不会被识别为 agent，限制了工作流中对 agent 配置的版本管理和多仓共享。
- **社区反应**：4 条评论，需补充信息（status/need-information）。

---

## 4. 重要 PR 进展（Top 10）

### #28975 — 修复符号链接工作区根目录下 glob 返回空结果（已关闭, P2, size/m）
- [PR #28975](https://github.com/google-gemini/gemini-cli/pull/28975)
- **内容**：macOS 下 `/tmp`（/private/tmp 的符号链接）等场景中，glob 匹配不到任何文件的问题。
- **作者**：LizunovSergey

### #28971 — 保持截断的 MCP 工具名唯一（已关闭, P2, size/m）
- [PR #28971](https://github.com/google-gemini/gemini-cli/pull/28971)
- **内容**：MCP 工具名超过 API 长度限制时分别截断为首 30/尾 30 字符，但该变换非单射，可能导致两个工具名重复。此 PR 保持截断后名称唯一。

### #28983 — 检测混合行尾，而非单条 CRLF 即判定整个文件为 CRLF（已关闭, P2）
- [PR #28983](https://github.com/google-gemini/gemini-cli/pull/28983)
- **内容**：修复 `detectLineEnding()` 中只要出现一个 `\r\n` 即把文件判定为 CRLF 的误判。
- **作者**：shoemoney

### #28973 — Sandbox 镜像从 EOL 的 node:20-slim 升级至 node:22-slim（已关闭, P1, Security）
- [PR #28973](https://github.com/google-gemini/gemini-cli/pull/28973)
- **内容**：Node.js 20 已于 2026-04-30 停止安全维护，沙箱 Dockerfile 的基础镜像升级至 node:22-slim。修复 #28584。

### #28972 — 防止 `formatTruncatedToolOutput` 在非正 maxChars 下产生损坏输出（已关闭, P1）
- [PR #28972](https://github.com/google-gemini/gemini-cli/pull/28972)
- **内容**：缺少 `maxChars > 0` 保护，负数预算会生成损坏的工具输出。修复 #28620。

### #29209 — 跳过非数字后台进程 PID 行（已关闭, P2, size/s）
- [PR #29209](https://github.com/google-gemini/gemini-cli/pull/29209)
- **内容**：避免警告行被当作 PID 解析产生 `NaN` 进入 `llmContent`，并补充回归测试。

### #28982 — 新增 Build Remote Agent 手机配对示例扩展（已关闭, gbr/1 协议）
- [PR #28982](https://github.com/google-gemini/gemini-cli/pull/28982)
- **内容**：作为示例扩展（非核心），让手机上的 Build Remote Agent 可远程查看 Gemini CLI 会话。协议保持 gbr/1。

### #28978 — 补充文档中缺失的 HookDecision 值（已关闭, P3, Documentation）
- [PR #28978](https://github.com/google-gemini/gemini-cli/pull/28978)
- **内容**：hooks/reference.md 规范表此前只记录了部分 `HookDecision` 值，现补齐 `"allow"` / `"approve"` 等全部类型。

### #29134 — 保护当前会话不被删除（开启中, P2）
- [PR #29134](https://github.com/google-gemini/gemini-cli/pull/29134)
- **内容**：修复 `--delete-session` 可能误删当前活动会话的问题，仅在文件名匹配短 ID 后缀时判定。修复 #29133。
- **作者**：mikemikimike

### #29137 — 批量升级 npm 依赖（开启中, 77 项更新, size/xl）
- [PR #29137](https://github.com/google-gemini/gemini-cli/pull/29137)
- **内容**：Dependabot 批量升级，涉及 simple-git 3.28.0→3.36.0、`@modelcontextprotocol/sdk` 等 77 个包。

---

## 5. 功能需求趋势

从 Issues 中可提炼出社区目前的四大功能关注方向：

1. **Agent 自主决策能力提升**
   - Gemini 不会主动调用子代理/skills（#21968），以及"模型创建临时脚本散落各处"（#23571）等，反映模型对现有工具链利用不足。

2. **零依赖 OS 级沙箱与更细粒度的工具控制**
   - #19873 提出利用 Gemini 3 的原生 bash 能力配合 OS 沙箱做执行后意图路由；#22745 则评估 AST 感知的文件读取与映射是否能减少调用轮次。

3. **健壮性与可观测性增强**
   - 开发者持续要求 Agent 及时暴露中断/失败状态（#22323）、不静默跳过错误（#26523）以及在低信号任务上不无限循环（#26522）。

4. **Bash/Shell 执行可靠性**
   - 多条 Issue（#25166、#19873）表明 shell 执行完成后仍卡在"等待输入"、后台进程/任务执行输出解析错乱等问题频繁困扰用户，是当前体验的最大短板。

## 6. 开发者关注点

汇总开发者反馈中的高频痛点：

- **"假成功"状态报告**：子代理因 MAX_TURNS 中断却被报告为 GOAL 成功（#22323），严重影响 CI/自动化可靠性。
- **Shell 执行卡死**：命令结束后界面不返回（#25166）、通用代理挂起（#21409）。
- **符号链接支持问题**：workspace 根目录（#28975）和 agents 目录（#20079）中的 symlink 均存在不被识别的问题。
- **工具过多导致 400 错误**：当启用工具超过 128 个时（工具总数相关）请求报 400（#24246），期望更智能的工具选择。
- **破坏性操作需约束**：Gemini 偶尔会使用 `git reset` 或 `--force` 而不选用更安全的替代方案（#22672）。
- **MCP 与浏览器代理的配置兼容性**：浏览器代理忽略 `settings.json` 中的 overrides（#22267），在 Wayland 环境下失败（#21983）等。
- **Auto Memory 数据安全**：转录内容在脱敏前就发送给模型（#26525），社区对隐私风险敏感。

---

> 注：所有内容均基于 2026-09-07 GitHub 数据，重点条目来自 Issues/PR 的更新时间和评论热度，未涉及的数据未收录。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-07

## 今日速览

今日社区出现多项阻塞性 bug 报告，集中在 **多会话管理（Local workspace 冲突、会话永久卡死）**、**ACP 模式下权限绕过回归** 与 **MCP 连接超时/中断** 三个方向，并伴随一个严重的 **Windows 端会话存档强制要求** 新问题。无新版本发布，仅有 3 个新 PR 处于开放状态。

## 社区热点 Issues

### 1. 桌面应用 1.1.15 无法在运行中创建第二个 Local（branch）会话
- [#4742](https://github.com/github/copilot-cli/issues/4742) — *OPEN, 评论 6, 👍 0*
- 自动更新至 **1.1.15** 后，同一项目已有运行中的 Local 会话时，新建会话直接失败并报 “This project already has an active Local workspace”。多会话并行工作流被阻断。

### 2. Windows 端要求先归档所有空闲项目会话才能新建 Local 会话
- [#4756](https://github.com/github/copilot-cli/issues/4756) — *OPEN, 评论 1, 👍 0*
- Windows + app 1.1.15 + CLI 1.0.83-5 环境：新建会话前被迫逐一归档所有 idle 会话，否则无法继续。与会话管理的 bug 呈集中爆发趋势（与 #4742 类似）。

### 3. 会话永久卡死：队列消息在回合结束时到达导致状态机入死锁
- [#4755](https://github.com/github/copilot-cli/issues/4755) — *OPEN, 评论 0, 👍 0*
- 会话回合结束瞬间若收到 queued-lane 消息，会进入"既非 idle 也非 running"的永久 wedged 状态：无法接受输人、app 显示已停止、队列消息被静默丢弃，唯一恢复方式是重启应用。

### 4. --yolo / --allow-all 被 fail-closed 策略误禁 —— 即使账户无任何托管策略
- [#4757](https://github.com/github/copilot-cli/issues/4757) — *OPEN, 评论 2, 👍 0*
- 账户策略解析为 **absent**（不存在）的情况下，CLI 仍启用 fail-closed 姿态并禁用 bypass-permissions 模式，导致 `--yolo` 功能整个会话内无法使用。

### 5. ACP 模式回归：#845 修复失效，工具调用再次被自动批准
- [#4537](https://github.com/github/copilot-cli/issues/4537) — *OPEN, 评论 2, 👍 2*
- 自 **1.0.81-1** 起，ACP 模式下 agent 不再发送 `session/request_permission`，Shell 命令、文件编辑/删除均无人值守执行。权限安全模型的直接回归，社区关注度高。

### 6. 会话恢复导致 stdio MCP 连接被强杀（超时从 ~16s 降至 ~1s）
- [#4753](https://github.com/github/copilot-cli/issues/4753) — *OPEN, 评论 1, 👍 1*
- v1.0.83 相比 v1.0.82，恢复会话时前台强制关闭仍在初始化的 MCP server 连接，整个会话内这些 server 永久不可用。

### 7. Azure MCP learn=true 调用 180 秒超时（1.0.83-5 vs 1.0.80 的 0.2 秒）
- [#4749](https://github.com/github/copilot-cli/issues/4749) — *OPEN, 评论 0, 👍 0*
- Azure MCP 层次化工具发现的性能严重劣化：同一调用从 ~0.2s 退化到 180s 超时。版本回归迹象明显。

### 8. ACP: session/prompt 无条件中止会话，杀死后台子 agent
- [#4555](https://github.com/github/copilot-cli/issues/4555) — *OPEN, 评论 1, 👍 0*
- ACP 模式下 `session/prompt` handler 首个动作即调用 `session.abort()`（交互式 TUI 无此行为），导致运行中的后台 sub-agents 全部被取消。

### 9. 删除已驱逐的（evicted）会话时静默失败：重启后重新出现
- [#4754](https://github.com/github/copilot-cli/issues/4754) — *OPEN, 评论 0, 👍 0*
- UI 上删除已从内存会话映射中驱逐的会话看似成功，但 `data.db` 无任何写入，重启后会话重新出现，ON DELETE CASCADE 从未触发。数据一致性 bug。

### 10. 多仓库 collection 项目：成员仓库默认分支不同则永不关联 worktree
- [#4709](https://github.com/github/copilot-cli/issues/4709) — *OPEN, 评论 1, 👍 0*
- 同一文件夹包含多个独立仓库时（main vs master 混用），agent 创建的会话永久不可用——worktree 关联逻辑未覆盖默认分支不一致的场景。

## 重要 PR 进展

今日仅 3 个新开放 PR，无合并或更新动态。

### 1. [#4746](https://github.com/github/copilot-cli/pull/4746) — 实验性 next-action 扩展原型 (*OPEN*)
- 新增可选实验性 SDK 扩展示例，用于模型推断的下一步行动（next best action），位于 `examples/next-best-action/`，**不修改已安装 CLI**。

### 2. [#4739](https://github.com/github/copilot-cli/pull/4739) — 文档提案：终端拥有的 macOS 通知 (*OPEN*)
- 定位 macOS 通知点击问题，附带一个 MIT 许可的终端通知实现示例与可移植回归测试。明确为 **参考提案，非 CLI 变更**。

### 3. [#4748](https://github.com/github/copilot-cli/pull/4748) — Add joke cli (*OPEN*)
- 无摘要信息，功能不明确，社区价值待评估。

## 功能需求趋势

基于 Issues 内容，社区最关注的功能方向：

- **认证与权限模型升级**：`--yolo` 被 fail-closed 误杀（#4757）、ACP 权限回归（#4537、#4555）均直指 bypass-permission 机制不稳定，需求集中在更细粒度、可预测的授权策略上。
- **桌面应用多会话管理**：#4742 与 #4756 均涉及 Local 会话并发受限，用户明确期望支持并行运行多个 Local（branch）工作区。
- **输入体验完善**：键盘布局支持（德语键盘 @ 输入 #1999）与标准文本选择快捷键（Shift+Arrow、Ctrl+A，#2644）长期未解决，属于高频交互痛点。
- **MCP 生态稳定性**：#4753 的 stdio 连接强杀、#4749 的 Azure learn=true 超时、#4681 的 User-Agent 缺失，反映 MCP 在认证、连接生命周期和 header 透传三个维度均有缺口。
- **插件作用域扩展**：#1665（已关闭但获 18 👍）说明项目级/仓库级插件作用域的呼声持续存在。

## 开发者关注点

- **权限回归敏感度极高**：#4537（ACP 自动批准工具调用）获得较高社区共鸣，安全相关回归比其他 bug 更容易被点亮和响应。
- **会话状态机健壮性不足**：#4755（永久 wedged）、#4754（删除失效）与 #4742/#4756（并发受限）叠加，佐证近期版本在会话生命周期管理上存在系统性缺陷，涉及状态机、DB 写入与 UI 三层不一致。
- **MCP 连接生命周期被忽视**：从 16s 到 1s 的超时收紧属于典型的隐性破坏性变更（#4753），开发者期望此类资源管理行为变化有显式的配置控制或发布说明。
- **aarch64 兼容性问题悬而未决**（#827 关闭但仍被关注）：npm 包与 GitHub Releases 的预编译二进制在 ARM 平台上长期不可用，对新平台支持的需求未得到响应。
- **/refine 等斜杠命令缺少模型能力校验** (#4747)：向 gpt-4o-mini 等不支持 reasoning effort 的模型发送 `reasoning_effort` 参数直接导致 400 错误，需要命令侧加护栏。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-09-07

## 今日速览
今日社区焦点集中在 **plan/规划模式** 与 **编码计划跨工具兼容** 的功能诉求上，两条相关长周期 Issue（#2252、#1354）均于今日前后关闭并收获社区高赞，反映官方正在落地相关能力。此外，一条新提出的 **Agent 循环调用 Bug**（#2637）尚待官方响应。

## 版本发布
过去 24 小时内无新版本发布。

## 社区热点 Issues
> 说明：当前活跃 Issue 总量较少，以下按关注度与时效性择优列出。

1. **[#1354] 请求增加 Plan 模式 (plan mode)** — ★ 社区高赞
   - **作者**: panzhiyi87-droid | **👍 7** | 评论 1 条 | 2026-03-06 创建，2026-09-07 更新（已关闭）
   - **为什么重要**: 该诉求已积压半年，用户反映即使借助 skills 尝试实现规划流程，Kimi Code 仍会在讨论完成前自主行动，暴露出**执行控制顺序**的核心痛点。今日关闭推测与官方落地 plan 能力相关，是社区最高赞的开放功能请求之一。
   - [Issue #1354](https://github.com/MoonshotAI/kimi-cli/issues/1354)

2. **[#2252] 增加 /goal 命令并支持将 coding plan 导入 Codex** — ★ 跨工具诉求
   - **作者**: DuskLin | **👍 2** | 评论 9 条 | 2026-05-13 创建，2026-09-06 更新（已关闭）
   - **为什么重要**: 用户希望对齐 Codex 的 `/goal` 工作流（Claude Code 已在 138 版本跟进），并对 Kimi 的 coding plan 无法导入 Codex 表示不解。9 条评论显示讨论热度较高，反映社区对**主流编程平台间工作流互通**的迫切需求。
   - [Issue #2252](https://github.com/MoonshotAI/kimi-cli/issues/2252)

3. **[#2637] Agent 陷入重复 Read-tool 循环，无法执行 Edit 调用** — 新提交 Bug
   - **作者**: devalirzayev | 评论 0 条 | 2026-09-07 创建（打开中）
   - **为什么重要**: 影响 **0.41.0** 版本核心编码链路，Agent 卡在反复读取文件的死循环中，导致代码编辑能力失效。作为最新上报的阻塞性缺陷，可能影响当前版本用户的实际开发效率，需要官方优先确认。
   - [Issue #2637](https://github.com/MoonshotAI/kimi-cli/issues/2637)

4. **[#1356] 无缝迁移其他主流 Agent CLI 的 MCP Skill 配置** — 配置生态
   - **作者**: deshes | 2026-03-06 创建，2026-09-07 更新（已关闭）
   - **为什么重要**: 作者同时使用 Claude CLI、Cursor、Windsurf、Continue 等工具，希望 Kimi CLI 能直接兼容这些主流的 MCP（Model Context Protocol）配置，降低多工具切换成本。今日关闭推测官方已在配置兼容性上取得进展。
   - [Issue #1356](https://github.com/MoonshotAI/kimi-cli/issues/1356)

## 重要 PR 进展
1. **[#2636] 通过缓存与路径优化重构 get_share_dir** — 最新提交
   - **作者**: gugu8intel-i9 | 2026-09-07 创建（打开中）
   - **内容**: 优化共享目录获取函数，引入缓存机制并完善路径处理逻辑。属于自发提交的社区贡献，尚未获得官方 Review。
   - [PR #2636](https://github.com/MoonshotAI/kimi-cli/pull/2636)

## 功能需求趋势
> 基于近期活跃 Issues 分析（数据窗口内样本有限，趋势具有指向性）：

- **执行流程控制（Plan 模式前置审查）** — 多条 Issue（#1354、#2252）指向同一主题：用户需要在模型动手改代码之前先进行**规划讨论并确认**，避免过高自主性带来的不可控修改。
- **跨工具工作流兼容** — 出现两个方向：① 生成 / 导入标准化的 **coding plan**（对齐 Codex）；② 复用 Claude Code、Cursor 等工具的 **MCP Skill 配置**，降低切换成本。
- **稳定性与工具调度修复** — Bug #2637 暴露了核心编码链路（Read → Edit）在某些条件下可能陷入死循环，属于影响编码闭环的基础可靠性问题。

## 开发者关注点
- **核心痛点 — 自主行动失控**：社区反馈中最强烈的声音来自 `plan mode` 请求——Kimi Code 经常在规划讨论尚未结束时**擅自开始执行**，导致开发者无法按预期节奏控制编码流程。
- **高频痛点 — 生态割裂**：多名深度用户同时使用 Codex、Claude Code、Cursor 等竞品，对 Kimi **不支持其计划文件与 MCP 配置的导入**表示困惑，希望实现"一次配置、多端共享"。
- **即时影响 — 0.41.0 工具循环缺陷**：最新 Bug 报告显示 Agent 出现读取死循环，直接阻断 Edit 操作，该反馈尚待官方确认修复时间表。
- **诉求正反馈信号**：Plan 模式和 /goal 相关 Issue 均在 9 月 6-7 日关闭，建议关注官方 Changelog，确认功能是否已在新版本或内部版本中落地。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode 社区动态日报 — 2026-09-07

### 1. 今日速览
OpenCode Go 订阅服务昨日发生持续数小时的 **HTTP 429 故障**（#47613），并伴随多起 429/403 配额误判报告（#47747、#47761、#40343、#47614），成为今日社区最集中的痛点。功能方面，核心开发者 nexxeln 连续提交三个 provider compaction（模型压缩）相关 PR（#47322、#47323、#47324），系统性推进上下文管理能力。

---

### 2. 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 链接 |
|---|------|------|-----|------|
| 1 | **Go subscription: HTTP 429 outage on 2026-09-06 (multi-hour retry-after) — compensation requested** | 13 | 0 | [查看](https://github.comanomalyco/opencode/issues/47613) |
| | 付费用户在 09-06 遭遇 `opencode.ai/zen/go/v1/messages` 端点长达数小时的 429 故障，服务完全不可用。作者已明确要求补偿，需官方尽快回应。 | | | |
| 2 | **[BUG] MCP tools connected but not exposed to agent** | 10 | 3 | [查看](https://github.comanomalyco/opencode/issues/33027) |
| | MCP 服务器 `pdfrag` 连接成功且 `tools/list` 返回 6 个工具，但 agent 不可见，工具调用链路疑似断裂。该问题已存在近三个月仍未解决，涉及 MCP 与 agent 核心集成。 | | | |
| 3 | **Opencode randomly stops responses** | 9 | 4 | [查看](https://github.comanomalyco/opencode/issues/34473) |
| | v1.17.11 桌面版在使用 big pickle 模型时随机中断响应，无堆栈错误，仅播放完成音效后静默停止，影响基本可用性。同为持续数月的未解旧 issue。 | | | |
| 4 | **GitHub Copilot provider shows zero models** | 9 | 5 | [查看](https://github.comanomalyco/opencode/issues/42083) |
| | opencode 1.18.15（Arch）上 `github-copilot` provider 尽管 `auth login` 成功，模型列表却为空（`model_picker_enabled: false`）。社区呼声最高，可能与 Copilot 侧策略调整有关。 | | | |
| 5 | **[CLOSED] Feat: Automatically run `aws sso login` when credentials need to be refreshed** | 9 | 14 | [查看](https://github.comanomalyco/opencode/issues/1934) |
| | 已有 14 个 👍 的高赞需求，希望凭证过期时自动触发 `aws sso login`。此 issue 今日仍被更新，虽已关闭但值得追踪收敛方案。 | | | |
| 6 | **Opencode (Windows) ignores NODE_EXTRA_CA_CERTS** | 6 | 4 | [查看](https://github.comanomalyco/opencode/issues/17798) |
| | Windows 下企业代理场景中，OpenCode 忽略 `NODE_EXTRA_CA_CERTS` 环境变量，导致内部证书不可信、TLS 拦截失败，影响企业内网使用。 | | | |
| 7 | **Auto mode causes repeated false permission notifications in terminals** | 3 | 0 | [查看](https://github.comanomalyco/opencode/issues/47545) |
| | Auto 模式下权限已自动批准却反复弹出通知，产生大量噪音。对应修复 PR #47754 今日已提交，预计下周合入。 | | | |
| 8 | **[Bug] OpenCode Go: some models return 403 Forbidden while others work** | 3 | 5 | [查看](https://github.comanomalyco/opencode/issues/40343) |
| | Go 订阅下部分模型返回 `403 Forbidden: {"model":"<model>"}`，订阅有效且未达限额。错误信息与 429 故障高度相关，疑似同一后端路由问题。 | | | |
| 9 | **Weekly usage quota stays maxed out (100%) even after new monthly billing cycle starts** | 2 | 0 | [查看](https://github.comanomalyco/opencode/issues/47614) |
| | 新账期月配额已重置，周配额仍显示 100% 耗尽，配额计数逻辑缺陷直接阻断用户正常使用，优先级应提至 P0。 | | | |
| 10 | **open code go 429（#47747） / muse-spark-1.3-contributor 429 all day（#47761）** | 3+2 | 0 | [查看 #47747](https://github.comanomalyco/opencode/issues/47747) / [查看 #47761](https://github.comanomalyco/opencode/issues/47761) |
| | 两起独立的 OpenCode Go 429 报告与 #47613 同源合并，涉及 `rate_limit_exceeded`，进一步坐实服务端限流或配额系统故障。 | | | |

---

### 3. 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 链接 |
|---|------|------|------|
| 47324 | **feat(core): schedule provider compaction automatically** — 在安全 Session 边界自动触发 provider 模式压缩，阈值可选且受模型输入上限约束，无阈值时默认取上限 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/47324) |
| 47323 | **feat(core): support explicit provider compaction** — 新增 `compaction: { mode: "local" \| "provider" }` 策略，默认仍为本地压缩，手动压缩操作经由完整 Core 模型准备链路执行 | CLOSED | [查看](https://github.com/anomalyco/opencode/pull/47323) |
| 47322 | **feat(core): persist provider compaction context** — 持久化压缩后的 provider 上下文，携带版本化的模型/路由/端点溯源信息，支持在兼容原生窗口安全重放而无需删除历史 | CLOSED | [查看](https://github.com/anomalyco/opencode/pull/47322) |
| 47754 | **fix(opencode): decide auto permission approval on the server** — 将 Auto 权限判断从客户端移至服务端，修复客户端提前批准后仍触发通知的问题（closes #47545） | OPEN | [查看](https://github.com/anomalyco/opencode/pull/47754) |
| 47635 | **fix(opencode): resolve markdown agent prompts** — 修复 Markdown agent/mode loader 覆盖 frontmatter `prompt:` 字段的 bug（closes #47616） | OPEN | [查看](https://github.com/anomalyco/opencode/pull/47635) |
| 47789 | **fix(tui): drop key events with no name before keymap matching** — 过滤无名称按键事件（如 Device Status Report 回复 `ESC[0n`），避免误触发按键映射（closes #42408） | OPEN | [查看](https://github.com/anomalyco/opencode/pull/47789) |
| 47786 | **feat(desktop): use base menu selection styling** — 桌面端菜单选中态统一改用基础样式，视觉设计更新 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/47786) |
| 46530 | **feat(plugin): expose permission assertions** — 在 Effect/Promise 插件中新增 `ctx.permission.assert(input)`，并在 tab 操作与文件读取前内置权限校验 | OPEN | [查看](https://github.com/anomalyco/opencode/pull/46530) |
| 47774 | **fix: delete sessions with missing directories and report api errors** — 修复删除存储目录已丢失的会话时 `realPath` ENOENT 报错；同时将 API 错误正确上报 | CLOSED | [查看](https://github.com/anomalyco/opencode/pull/47774) |
| 47783 | **docs: add Persian (fa) README translation** — 新增波斯语 README，由社区贡献者首次发起（closes #47775） | OPEN | [查看](https://github.com/anomalyco/opencode/pull/47783) |

---

### 4. 功能需求趋势

- **Provider 上下文压缩（Compaction）**：nexxeln 一次性提交三连 PR（#47322/#47323/#47324），实现 provider 模式有损压缩、自动调度与上下文持久化，是当前最系统的功能推进方向；工作流覆盖面从手动到自动、从本地到原生，意图将压缩机制做成一等公民。
- **权限系统精细化**：#47754 将 Auto 模式权限判断移至服务端（消除误通知），#46530 为插件 API 增加权限断言原语，社区逐步完善权限声明与执行模型。
- **README 多语言国际化**：#47775/#47783 请求并提交波斯语翻译，继既有翻译语种之外新拓展 fa 支持。
- **生产力细节优化**：TUI 层持续小修小补——无名字按键事件过滤（#47789）、Dialog 选中值真假处理（#47782）、Dialog 底部 footer 透出（#47780）、桌面端菜单样式统一（#47786），均为提升日常使用顺滑度的琐碎但高频体验项。

---

### 5. 开发者关注点

- **Go 服务稳定性优先**：9 月 6 日 ~9 月 7 日集中爆发多起 429/403——长时中断（#47613）、单模型 403（#40343）、单模型全天 429（#47761）、周配额不重置（#47614），叠加 `x-opencode-session` 丢头报错（#47755），社区对 OpenCode Go 服务端限流与配额计费系统的质疑明显升温，补偿诉求已出现（#47613）。
- **MCP 工具可见性 bug 长期未决**：#33027 文档充分、复现清晰（连接成功但 agent 拿不到工具），发起至今近 3 个月仍开放，反映 MCP 工具接入链路存在系统性问题而非简单配置错误——建议维护者优先排查 provider 注册到 agent 工具列表的时序与命名空间隔离。
- **旧 issue 持续回温**：AWS SSO 自动登录（#1934，👍14，关闭后仍被提及）、Copilot 模型列表为空（#42083，👍5）、Windows 企业证书（#17798）等经典痛点，开发者在缺少官方 roadmap 时倾向用“重开 + 高赞”维持可见度。
- **多语言与桌面端精细化诉求并存**：Persian 翻译被提出（#47775）意味着国际化覆盖仍被社区视为短板；桌面与 web 字体可调（PR #27684，关闭 3 个关联 issue）及菜单样式统一（#47786），说明桌面端视觉与交互细节是活跃贡献区。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-09-07

## 今日速览

今日 Pi 仓库（迁移至 earendil-works/pi）无新版本发布，但合并了多项关键修复，其中 Copilot GPT-6 Astra 模型路由问题（#9209/#9277）在今日通过 PR #9253 关闭闭环，获得社区高度关注。此外，多起高阶 bug 今日被关闭，涉及 CLI 取消流式请求失效、TUI 渲染与并发控制等方向，显示核心工程质量持续加固。

---

## 社区热点 Issues（Top 10 精选）

**1. Windows 兼容性痛点：使用方式与反馈征集**
[#7547](https://github.com/earendil-works/pi/issues/7547) — [OPEN]，57 条评论，🔥 热度最高
- **摘要**：作者 petrroll 发起 Windows 使用体验征集，讨论 Pi 在 Windows 上的多种运行方式，希望集中精力修复关键 bug 和优化文档。该话题评论数远超其他 Issue，官方通过社群调研方式收集反馈。
- **关注度**：57 条评论为全库最高，反映 Windows 用户基数庞大且需求分散。

**2. AgentSession 结算/延续与 assistant-tail 生命周期 bug 元问题**
[#5886](https://github.com/earendil-works/pi/issues/5886) — [OPEN]，11 条评论
- **摘要**：由 mitsuhiko 发起，汇总「后运行逻辑」一类反复出现的 bug（会话结算/继续、assistant-tail 生命周期相关），属于影响 Agent 会话稳定性的系统性技术债。
- **关注度**：跨月讨论持续至今，👍 4，社区对长期稳定性问题有较高诉求。

**3. Gemini 3.x 模型工具调用因缺 thought_signature 失败**
[#6996](https://github.com/earendil-works/pi/issues/6996) — [CLOSED]，9 条评论
- **摘要**：Gemini 3.x（如 gemini-3.5/3.6-flash）在工具调用时因 history 缺少 `thought_signature` 报错。今日关闭表明问题已获修复或定位。
- **关注度**：新模型兼容性问题直接阻塞 Gemini 用户，修复价值高。

**4. Fullscreen 模式滚轮速度比常规 TUI 慢 3 倍**
[#9052](https://github.com/earendil-works/pi/issues/9052) — [OPEN]，6 条评论
- **摘要**：全屏模式固定输入框的滚动体验明显劣化，属交互可用性问题。
- **关注度**：👍 3，TUI 体验优化类问题受关注度较高。

**5. OpenRouter `:free` 模型 400 错误（max_tokens 超上限）**
[#8760](https://github.com/earendil-works/pi/issues/8760) — [OPEN]，5 条评论，标记 `inprogress`
- **摘要**：Pi 发送 `max_tokens` 等于模型目录 `maxOutputTokens` 值，超过上游免费模型的硬性上限导致请求失败。
- **关注度**：影响开源/免费模型用户面广，已标 `inprogress` 待修复。

**6. Esc 取消流式请求不可靠**
[#8823](https://github.com/earendil-works/pi/issues/8823) — [CLOSED]，5 条评论
- **摘要**：流式生成中按 Esc 无法可靠中止 HTTP 请求，需等待 Provider 自然结束。今日关闭标记修复完成，改善 CLI 交互控制体验。

**7. GitHub Copilot GPT-6 Astra 路由到错误端点**
[#9209](https://github.com/earendil-works/pi/issues/9209) — [CLOSED]，5 条评论
- **摘要**：`gpt-6-astra` 被路由至 `/chat/completions`，Copilot 拒绝并返回 `unsupported_api_for_model`。今日由 PR #9253 修复（改走 Responses 端点）。
- **关注度**：Copilot 新版模型接入断点，修复及时。

**8. Bedrock OpenAI 模型拒收嵌套工具图片**
[#8643](https://github.com/earendil-works/pi/issues/8643) — [OPEN]，5 条评论
- **摘要**：OpenAI 模型在 Bedrock 上要求工具结果图片提升至同级别用户内容块。提交者已备好修复 + 回归测试（同 openai-completions 的做法），待上游接受。多模态工作流关键缺口。

**9. Agent 重试间隔应封顶以应对长期瞬态故障**
[#8826](https://github.com/earendil-works/pi/issues/8826) — [OPEN]，4 条评论
- **摘要**：建议为 coding-agent 的指数退避加重试上限配置，避免长时间上游故障时无限拉长重试间隔。适用于 CI 等自动化场景。

**10. Windows shell_path 配置被忽略并强制使用 WSL bash**
[#9229](https://github.com/earendil-works/pi/issues/9229) — [CLOSED]，4 条评论
- **摘要**：Windows 上即便禁用 WSL 功能，配置的 `shell_path` 仍被忽略，优先选择 WSL bash。易致非 WSL 环境开发者执行失败，已关闭表示修复或标记完成。

---

## 重要 PR 进展（Top 10 精选）

**1. `fix(ai)`：Copilot GPT 模型改走 Responses 端点（修复 astra 问题）**
[PR #9253](https://github.com/earendil-works/pi/pull/9253) — 已合并
- 修复 #9209（gpt-6-astra 被路由到 Chat Completions 端点被拒）。由于 GitHub 目录已无 gpt-4 模型，本次变更被视为安全的前瞻性调整。
- **关键性**：恢复 Copilot 系列模型可用性，直接回应用户反馈。

**2. `fix(agent)`：agentLoop 拒绝时以错误终止流**
[PR #9269](https://github.com/earendil-works/pi/pull/9269) — 已合并
- `agentLoop()`/`agentLoopContinue()` 此前对同步抛错未设 rejection 处理，本次修正为以错误对象结束流（如 OAuth 刷新失败等场景）。降低 Agent 被静默挂起风险。

**3. `fix(coding-agent)`：允许扩展自定义 Provider 流式输出**
[PR #9272](https://github.com/earendil-works/pi/pull/9272) — 已合并
- 仿照 `complete(...)` 暴露 `stream(...)`/`streamSimple(...)` 方法，修复 #8964。扩展生态通往持久/流式能力的关键补丁。

**4. `feat(coding-agent)`：运行中及时应用转向消息（打断当前回合）**
[PR #9259](https://github.com/earendil-works/pi/pull/9259) — 已合并
- 长耗时工具执行（慢依赖安装/长构建）期间，用户发送的 steering 消息不再排队等待自然结束，而是主动中断运行回合以立即生效。交互反馈显著更敏捷。

**5. `docs`：编写 Docker Sandbox 章节并新增模式表格行**
[PR #9077](https://github.com/earendil-works/pi/pull/9077) — 已合并
- 按 #8788 需求，在 `containerization.md` 新增 `## Docker Sandboxes` 章节及对应表格条目，无结构变更。补充隔离模式文档覆盖度。

**6. `fix(tui)`：修复不能分割的宽字素导致的 wordWrapLine 无限递归**
[PR #9270](https://github.com/earendil-works/pi/pull/9270) — 已合并
- 过度宽的 segment 递归重排到单个 emoji/CJK（宽度 2）且 maxWidth=1 时导致递归死循环。今日关闭修复、降低 TUI 稳定性风险。

**7. `feat(tui)`：打断进行中的回合以尽早应用转向消息**
[PR #9259](https://github.com/earendil-works/pi/pull/9259) — 已合并
- 同 #3 功能，确保 TUI 下的用户转向指令能及时生效，避免输入反馈滞后。

**8. `feat(ai)`：新增 `sendStrictToolField` 兼容开关**
[PR #9261](https://github.com/earendil-works/pi/pull/9261) — 已合并
- 部分 Anthropic 兼容网关（AWS Bedrock 代理等）要求严格格式 input_schema 但拒绝逐工具 `strict` 字段。通过开关解耦发送逻辑，提升网关兼容性。

**9. `feat(extensions)`：`sendUserMessage` 支持 `allowCommands` 选项**
[PR #5732](https://github.com/earendil-works/pi/pull/5732) — 已关闭（未合并显示）
- 扩展注入提示可选择启用斜杠命令与模板扩展，为 session 恢复场景铺路。长周期 PR，当前以关闭状态结束。

**10. `fix(coding-agent)`：修复 Diff 渲染中缩进丢失**
[PR #9274](https://github.com/earendil-works/pi/pull/9274) — 待审查（OPEN）
- 行内渲染器可在前置内容插入后丢失已删除行的缩进。视觉精确性问题，影响代码审阅体验。

---

## 功能需求趋势

从全部 Issues 中提炼出的社区方向集中在以下 4 类：

1. **Provider/新模型兼容性持续承压**（频次最高）
   - 新模型需特殊路由/端点（Copilot GPT-6 Astra、Claude Opus 5）或新字段（Gemini `thought_signature`、OpenRouter `strict`/`max_tokens`）→ 印证 Pi 需对齐多 Provider 快速演进 API。

2. **Windows 与多平台运行修整需求旺盛**
   - 覆盖运行路径多（shell_path、WSL、路径碰撞、滚动/输入框性能），大量历史 Windows issue 仍保持开放性，官方正以调研形式推动聚合共识。

3. **TUI 交互体验打磨**
   - 滚动速度、Esc 响应、自适应端到端细节优化、输入反馈实时性为 Top 反馈对象；近期多个 PR 均已指向打断-响应链路提升。

4. **Provider 取消/重试与失败分类标准化**
   - 取消（cancel/abort/steering）与长中断（backoff 上限、terminal failure 分类）说明 Agent 场景追求可预设、可预测的失败边界与用户主导的及时干预能力。

---

## 开发者关注点

1. **Cancellation 可靠性高频提及**：Esc 取消、prompt 打断、运行中 steer——开发者对「控制权」的敏感性正在升高。
2. **受限端点与签名（max_tokens/strict 字段）导致的阻塞**：免费模型、Bedrock 代理对严格字段约束反映内部模型目录与实际供应商策略不一致。
3. **服务化/注册流程存在的信息空隙**：gallery regex 缺失修复（#9073）、ID 编码冲突——多目录识别有待统稿。
4. **Windows 与多 provider 代差仍含摩擦**：shell 标准偏差与跨运行环境一致性继续是高频痛点。该方向仍有 50+ 条开放 issue 反映出持续关注度。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-07

## 一、今日速览

今日 Qwen Code 发布两个 preview 版本（v0.23.1-preview.1 / .2）及 cua-driver-rs v0.20.4，核心更新为 **Web Shell 动态工作流可视化与管理**的 UI 功能和性能优化。社区最热议题集中在 **Web Shell/daemon 架构下的 Bug**（如后台 Shell 输出静默丢失待修复、Windows 端 conhost.exe 进程泄漏）以及 **TUI 渲染引擎 ink → OpenTUI 迁移**这一长期跟踪议题。自动修复机器人（qwen-code-dev-bot）持续贡献多个 CI/UI 修复 PR，整体开发活跃度高。

---

## 二、版本发布

### v0.23.1-preview.2
- **功能**: `feat(web-shell)`: 动态工作流的可视化与管理组件 (@qqqys)
- **性能**: `perf(web-shell)`: 派生 Session 工作流工程逻辑优化

### v0.23.1-preview.1
- 包含与上述相同的改动（功能 + 性能优化）

### cua-driver-rs v0.20.4（CUA Driver 预编译二进制）
- **macOS**: 已签名公证的 universal 二进制 + `QwenCuaDriver.app`
- **Linux**: 未签名（x86_64 + arm64，最低 glibc 2.31）
- **Windows**: 未签名 UIAccess worker + 原生 SDK (x86_64 + arm64)

### v0.23.0-nightly.20260906.92a8a8d179
- 包含相同的 Web Shell 工作流改动与优化

> 所有版本的核心更新围绕 **Web Shell 中动态工作流运行的可视化与任务管理**展开（PR #10594）。

---

## 三、社区热点 Issues（精选 10 条）

### 1. [P3/增强] TUI 渲染层 ink → OpenTUI 迁移（跟踪）— **#8662**
- **热度**: 25 条评论 · 创建于 2026-08-07，持续更新
- **摘要**: 当前 TUI 基于 ink 7 + React 19，带有约 1037 行自定义 patch 和 Virtual Viewport 模式，长期维护成本高。该跟踪 Issue 讨论迁移至 OpenTUI 的架构方案。
- **关注原因**: 影响 TUI 整体架构走向，是长期演进方向。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/8662)

### 2. [Bug] serve: 后台 Shell 输出与唤醒通知在会话回收时被静默丢弃 — **#11119**
- **热度**: 8 条评论 · P1 高优先级
- **摘要**: `qwen serve` 的 Web Shell 会话中，后台 shell 持续产生输出，但会话运行时回收后输出和通知被静默丢弃，导致会话卡死。
- **关注原因**: P1 阻断性问题，直接影响后台自动化场景可用性。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/11119)

### 3. [Bug/性能] Windows 下 qwen-cli 泄漏 conhost.exe 进程（12 小时积累 ~347 个 / 2.8GB）— **#11303**
- **热度**: 3 条评论 · P1 · 今日新提交
- **摘要**: Qwen Code Companion (VS Code 扩展) 内嵌的 qwen-cli 在 Windows 上泄漏无头 ConPTY 进程，12 小时可达 347 个进程 / 2.8GB。
- **关注原因**: Windows 用户严重性能问题，P1 且为今日新报告。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/11303)

### 4. [Bug] MCP: 取消长时间运行的 stdio 工具调用会杀死 MCP 服务器且不可恢复 — **#11272**
- **热度**: 3 条评论 · P2 · 今日提交
- **摘要**: Channel 部署（钉钉）中发现，取消长时间运行的 stdio MCP 工具调用会导致 MCP server 进程被杀且无法在 Channel 模式下自动恢复。
- **关注原因**: MCP 生态稳定性关键缺陷，影响生产部署。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/11272)

### 5. [Bug] serve: Channel 所有权模型不覆盖 home 目录工作区读取用户级配置 — **#11186**
- **热度**: 3 条评论 · P2 · 今日更新
- **摘要**: 当 `qwen serve` 绑定 home 目录时，设置加载器禁用 workspace 作用域，将共享设置文件归属到 user 作用域，导致多 Channel 场景配置隔离问题。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/11186)

### 6. [Bug/历史] 百炼收费陷阱 — **#44**
- **热度**: 20 条评论 · 已关闭（讨论中）
- **摘要**: 用户反馈仅几个问题即产生 11 元费用，质疑收费透明度。该 Issue 持续被更新（最近更新 2026-09-07），说明社区对计费问题的持续关注。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/44)

### 7. [Bug/P2] pre-aborted tool 请求可能阻塞在无关的活跃批次之后 — **#11146**
- **热度**: 4 条评论 · P2 · 今日更新
- **摘要**: `CoreToolScheduler.schedule()` 可能让已取消的请求仍排队等待当前批次完成。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/11146)

### 8. [Bug/P2] Agent 误解 shell 输出为空 — **#3361**
- **热度**: 6 条评论 · 更新于今日
- **摘要**: shell 命令执行成功且 UI 可见输出，但 agent 判定输出为空（OpenAI 兼容 API 场景）。
- **关注原因**: 跨场景核心正确性缺陷，存续时间较长（4 月至今）。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/3361)

### 9. [增强] web-shell: 增加会话级轮次导航 — **#10750**
- **热度**: 3 条评论 · P2 · in-progress
- **摘要**: 为 Web Shell 添加 Codex 风格会话级 turn 导航，可跳转至会话链中任意持久化轮次。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/10750)

### 10. [Bug/P1] /effort 未传播至 OpenAI 兼容后端 — **#11227**
- **热度**: 3 条评论 · P2
- **摘要**: 对本地 NInfer 等 OpenAI 兼容后端，`/effort` 仅更新 Qwen Code 侧推理配置，未同步到实际请求头/参数。
- [GitHub](https://github.com/QwenLM/qwen-code/issues/11227)

---

## 四、重要 PR 进展（精选 10 条）

### 1. CI: Linux E2E 改用 Vitest forks — **#11290**（新，OPEN）
- **内容**: 将每个 sandbox 的 3 个 Linux E2E shards 替换为一个作业的 3 个 Vitest forks，同级并发且降低自托管开销。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/11290)

### 2. fix(goal): 验证器未响应的 checkpoint 计为 stall — **#11304**（新，OPEN）
- **内容**: 证据窗口溢出导致的 checkpoint 失败将计入 stall 上限，修复仅有部分失败形态参与活跃度判定的缺陷。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/11304)

### 3. feat(web-shell): 统一会话来源列表 — **#11262**（新，OPEN）
- **内容**: 为上传文件、工作区文件引用与 HTTP(S) 链接添加统一的 Sources 列表，附件无需迁移元数据即可继续被发现。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/11262)

### 4. feat(serve): 允许并发独立 daemon 及会话 fencing — **#11207**（OPEN）
- **内容**: 允许更新后 daemon 共享 Conversations 并并发使用独立 session，同时保留单写者租约语义。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/11207)

### 5. feat(web-shell): Session Workflow 依赖可导航 + UI 精简 — **#10938**（OPEN，autofix）
- **内容**: 完善 #8583 后 Plan DAG 的导航、形状和文档空白，简化步骤优先级的展示结构。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/10938)

### 6. CI: 修复泄漏的 E2E sandbox 容器 — **#11264**（CLOSED）
- **内容**: 为每个 Docker E2E job 分配独立 owner label，测试退出后仅强制移除带有该标签的容器。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/11264)

### 7. 核心: 自动重试网络瞬时 EOF 错误 — **#10347**（OPEN，autofix）
- **内容**: 将封装了底层网络错误的 4xx（如 400 EOF）归类为可重试传输错误，复用有限自动重试机制。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/10347)

### 8. 核心: 为延迟工具调用保留 prompt cache — **#10410**（OPEN，autofix）
- **内容**: 用两步桥接取代延迟工具 schema 直接暴露：`tool_search` 提供 schema 预览而不变更工具列表，`tool_call` 校验并调用。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/10410)

### 9. 内存: 结构化按需召回 — **#10183**（OPEN，autofix）
- **内容**: 将自动记忆从扁平长 prompt 演化为结构化 push/pull 协议，提供二级 ref/title 树和查询聚焦元数据。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/10183)

### 10. CLI: 输出语言文件不可写时不再崩溃 — **#10455**（OPEN，autofix）
- **内容**: 当全局配置目录（只读 home 或 root 残留目录）无法写入时，CLI 不再启动失败。
- [GitHub](https://github.com/QwenLM/qwen-code/pull/10455)

---

## 五、功能需求趋势

1. **Web Shell 交互能力深化**: 动态工作流可视化、会话级 turn 导航、独立 Sources 列表，构成 Web Shell 持续迭代主线。
2. **后台自动化与 daemon 语义完善**: 大量 issue/PR 围绕 background agents 的恢复、会话回收边界、并发 daemon fencing——后台自动化是现阶段核心投资方向。
3. **语义记忆系统**: 社区明确请求本地/语义化记忆（MCP server bundle 或 embedding recall），并已有对应结构化召回 PR（#10183, #10684）。
4. **跨后端兼容性**: `/effort`、自定义请求头等特性对 OpenAI 兼容第三方后端的传播——社区广泛使用本地/非 Qwen 推理后端。
5. **TUI 架构现代化**: 从 ink 迁移到 OpenTUI 的长期规划，社区关注结构性重构以提高终端 UX 扩展性。
6. **窗口（Windows）平台稳定性**: conhost/ConPTY 进程泄漏等可感知的性能与可靠性议题开始高频出现。

---

## 六、开发者关注点

1. **可靠性优先**: 多个 P1/P2 bug 集中在 daemon/web-shell 的后台任务状态同步（#11119、#11118）、MCP 子进程生命周期（#11272）以及 Windows 端资源泄漏（#11303）。
2. **取消语义的一致性**: CoreToolScheduler 与流式 shell 的取消/中断路径有多个坑（#11146、#11272）。
3. **第三方后端支持**: 开发者使用 NInfer、GLM 等 OpenAI 兼容后端，希望 Qwen Code 的特性对后端透明传递（#11227、#10995）。
4. **计费透明度**: #44 长期持有关注，社区对平台接入成本敏感，期待模型/API 用量透明展示。
5. **多框架多端体验一致性**: 大量浏览器/VS Code/终端多入口语义差距（服务回收、TTY、配置作用域）仍在收敛中，是反馈集中于——Web Shell、VS Code Companion 与 CLI 的用户场景逐步扩张所伴随的真实摩擦。

---

> 数据来源: [GitHub QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 统计窗口: 2026-09-07

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-09-07

## 今日速览

今日社区动态围绕 **v0.9.12 回归缺陷修复** 与 **CodeWhale 仓库架构演进** 双线并行。核心焦点是：多行粘贴被拆分为独立消息、`allow_insecure_http` 配置键失效、ACP `initialize` 响应违反 schema 导致 JetBrains 客户端无法连接，以及 R1 回合预算/`[goal]` 步骤预算等新增强需求。维护者今日提交了多条针对性修复 PR，社区活跃度集中在 Fabric 模型角色与长期记忆增强讨论上。

## 社区热点 Issues（Top 10）

**1. EPIC-005: CodeWhale TUI Crate Decomposition（Umbrella）**
🔗 [Hmbown/Codewhale Issue #5316](https://github.com/Hmbown/Codewhale/issues/5316) | 💬 22 评论
仓库架构级重构的总跟踪（Umbrella）Issue，涵盖所有子 EPIC 与 FEAT。评论数全库最高，表明社区对模块划分方案的参与度与关注度极高。持续更新中。

**2. [bug] Multiline paste split into separate messages per line（v9.12 回归）**
🔗 [Hmbown/Codewhale Issue #5981](https://github.com/Hmbown/Codewhale/issues/5981) | 💬 5 评论
今日新建，报告 v9.12 中 Y-7 修复引入的回归：多行粘贴被逐行拆分为独立消息而非保留换行。影响日常交互编辑体验，已确认将粘贴突发检测门控改为 `!use_bracketed_paste` 是致因。已有 PR #5993 修复中。

**3. [enhancement] Continuous Self-Learning from Dialog（Automatic Skill Evolution）**
🔗 [Hmbown/Codewhale Issue #5860](https://github.com/Hmbown/Codewhale/issues/5860) | 💬 5 评论
提议从对话中自动提取模式并进化为 `SKILL.md`，解决知识静态化问题。反映了社区对"长期记忆/自动成长"能力的需求，是近期 enhancement 中讨论度最高的方向之一。

**4. [bug] `serve --acp` initialize 响应违反 ACP schema — JetBrains IDEA 无法连接**
🔗 [Hmbown/Codewhale Issue #5969](https://github.com/Hmbown/Codewhale/issues/5969) | 💬 4 评论
`sessionCapabilities.list` 为布尔值而非对象，严格客户端（JetBrains IDEA）握手失败。已有 PR #5978 修复并将 `load` 能力移除。集成兼容性问题对 IDE 用户影响直接。

**5. [bug] Parallel-execution flakes in codewhale-tui lib suite（tracking）**
🔗 [Hmbown/Codewhale Issue #5929](https://github.com/Hmbown/Codewhale/issues/5929) | 💬 4 评论
六个测试在负载下失败、单独运行通过。维护者已拆出两个相关子修复 PR（#5988、#5990），是当前测试稳定性主线索之一。

**6. [enhancement] feat(tui): make 0.9.12 bottom chrome configurable；`/statusline` 失效**
🔗 [Hmbown/Codewhale Issue #5950](https://github.com/Hmbown/Codewhale/issues/5950) | 💬 3 评论
0.9.12 将 TUI 底部硬编码为两行（posture bar + metrics line），旧 `/statusline` 配置机制失效。社区要求可配置化与恢复持续可见上下文，属 UI/UX 定制能力诉求。

**7. [documentation] EPIC(docs): 文档审查与中文全量本地化**
🔗 [Hmbown/Codewhale Issue #5482](https://github.com/Hmbown/Codewhale/issues/5482) | 💬 3 评论
面向快速增长的中文用户群，EPIC 级文档中文本地化任务。持续更新中，显示国际化方向优先级在提升。

**8. [enhancement] allow_insecure_http config key removed in 0.9.12**
🔗 [Hmbown/Codewhale Issue #5991](https://github.com/Hmbown/Codewhale/issues/5991) | 💬 2 评论
配置键在 0.9.12 被静默移除，导致 LAN/internal 明文 HTTP provider 不可用。已有 PR #5995 修复。对本地部署用户影响面较大。

**9. [bug] Cost shows "unknown" on Concentrate — provider billing/pricing coverage incomplete**
🔗 [Hmbown/Codewhale Issue #5976](https://github.com/Hmbown/Codewhale/issues/5976) | 💬 1 评论
创始人实时反馈：Concentrate 路由在指标条中显示 cost: unknown。Provider 计费/定价覆盖不全且无防护机制。成本可见性缺陷，影响用户路由决策。

**10. [enhancement] feat(goal): goal/operate runs被交互式 max_steps 截断 — add goal-scoped step budget**
🔗 [Hmbown/Codewhale Issue #5994](https://github.com/Hmbown/Codewhale/issues/5994) | 💬 1 评论
Goal 运行被文档标注为无界（默认 `max_continuations=0` 即无限），但实际运行被交互式 `max_steps` 截断。语义不一致缺陷，已有 PR #5996 配套文档修复。

## 重要 PR 进展（Top 10）

**1. fix(engine): never dispatch a tool call whose arguments were truncated**
🔗 [Hmbown/Codewhale PR #5983](https://github.com/Hmbown/Codewhale/pull/5983)
关闭 #5986。修复工具调用被 provider 输出限制截断后，可能被静默补全为合法 JSON 并**执行**的安全隐患 — 对 `write` 操作意味着文件被部分内容覆盖。关闭/已合并。

**2. fix: five recorded defects — queue data loss、ACP schema、metrics path、fleet roles、goal-loop bound**
🔗 [Hmbown/Codewhale PR #5989](https://github.com/Hmbown/Codewhale/pull/5989)
关闭 #5969。一次性修复五项已记录缺陷（并发会话队列数据丢失、ACP schema、metrics 路径、fleet roles、goal-loop bound），每项单独修复后对抗性审计复合效果再落地。覆盖范围最广的修复 PR。

**3. fix(acp): advertise session list as an object and drop the nested load capability**
🔗 [Hmbown/Codewhale PR #5978](https://github.com/Hmbown/Codewhale/pull/5978)
关闭 #5969。JetBrains ACP 客户端握手失败的直接修复：将 `sessionCapabilities.list` 从 `true` 改为 `{}` 对象，并移除嵌套的 `load` 能力。

**4. fix(config): honor allow_insecure_http per provider again**
🔗 [Hmbown/Codewhale PR #5995](https://github.com/Hmbown/Codewhale/pull/5995)
关闭 #5991。恢复 0.9.12 被丢弃的 `config.toml` 每-provider `allow_insecure_http` 键，此前仅环境变量 `CODEWHALE_ALLOW_INSECURE_HTTP` 生效。修复 llama.cpp 私网 IP 等场景。

**5. fix(tui): re-arm the paste-burst heuristic until bracketed paste is verified**
🔗 [Hmbown/Codewhale PR #5993](https://github.com/Hmbown/Codewhale/pull/5993)
关闭 #5981。修复 0.9.12 粘贴回归：即使终端接受 `EnableBracketedPaste`，仍可能以独立消息形式传递粘贴内容；恢复粘贴突发启发式检测。

**6. feat(tui): confirmed opt-out for model-bound key redaction（`[redaction] model_bound`）**
🔗 [Hmbown/Codewhale PR #5982](https://github.com/Hmbown/Codewhale/pull/5982)
新增 `[redaction] model_bound` 确认式退出开关，供开发场景（如构建浏览器扩展需要原始 API key）绕过强制凭据脱敏算法。**外部贡献者 SparkofSpike** 提交。

**7. fix(vscode): make the extension's send path work, and close the security holes**
🔗 [Hmbown/Codewhale PR #5987](https://github.com/Hmbown/Codewhale/pull/5987)
关闭 #5834。VS Code 扩展**从未成功启动过一次会话** — `startTurn` 仅接受 HTTP 200/202，而运行时 `start_thread_turn` 唯一返回 `StatusCode::CREATED`。同时修复安全漏洞。

**8. feat(fleet): surface worker deliverables via summary and saved-session reply**
🔗 [Hmbown/Codewhale PR #5946](https://github.com/Hmbown/Codewhale/pull/5946)
Fleet 任务完成时若仅产生文本，原本返回无意义收据；此 PR 在有界交付摘录中携带 `visible_final_answer_excerpt`，让工作线程产出可见。外部贡献者 **gaord** 提交。

**9. docs: the legacy project was DeepSeek-TUI, not "DeepSeek CLI"**
🔗 [Hmbown/Codewhale PR #5984](https://github.com/Hmbown/Codewhale/pull/5984)
无 Issue 纯文档修正：`LICENSE` 与 app-server 注释中版权归属项目名由 **"DeepSeek CLI Contributors"** 更正为 **"DeepSeek-TUI"**，无行为变更。

**10. chore(gh): allowlist @goransh-walia in the contribution gate**
🔗 [Hmbown/Codewhale PR #5985](https://github.com/Hmbown/Codewhale/pull/5985)
贡献门控 allowlist 配置，使外部贡献者 CI 运行无需人工审批。此前 #5870 每次推送将全部 7 个 workflow 停驻在 `action_required`，导致 PR 两次被误读为停滞。

## 功能需求趋势

- **IDE 生态集成**：JetBrains ACP（#5969、#5978）与 VS Code 扩展（#5987、#5992）两条线同时活跃 — ACP schema 合规是严格客户端接入的关键；README 新增社区 VS Code GUI 前端链接，GUI 化需求显著上升。
- **Fleet/多智能体模型角色体系**（#5915、#5955、#5989、#5946）：provider → model → shortlist → role 流程设计在推进，但 per-task 子代理模型选择（含成本分级）仍缺失。
- **可配置性回归**：v0.9.12 引入的硬编码（底部 chrome #5950、`allow_insecure_http` #5991）引发密集讨论 — 既有配置项（`/statusline`、`request_user_input` 限制 #5949、compaction summarizer 提示词 #5956）在每次 shell 重构中容易被"杀死"，需在重构时保留配置层。
- **Goal 运行语义修正**（#5994、#5996）：文档宣称无界但实际被交互 `max_steps` 截断，需要独立的 goal-scoped 步骤预算与更完整的 `docs/CONFIGURATION.md` 文档。

## 开发者关注点

- **回归风险**：v0.9.12 集中暴露了多个"重构中丢失细节"类回归 — 粘贴处理（#5981）、HTTP 配置键（#5991）、TUI 底部配置（#5950），提示需要为关键路径建立回归测试网。
- **测试基础设施**：并行执行碎片（#5929）、2MiB 线程栈溢出（#5988，nextest 的进程隔离掩盖了该问题）、Windows 时间戳剪枝测试固定 6s 超时（#5990）互相交织，库级测试鲁棒性已成为维护者首要技术债。
- **GitHub 协作摩擦**：#5985 allowlist 配置确保外部贡献者的 CI 不再停驻于人工审批；#5953 fleet 向导模型过滤无匹配时 panic 也是一类"空结果未处理"的复用缺陷。
- **脱敏机制缺乏可开发性**（#5982）：强制凭据脱敏在开发场景造成障碍，需确认式退出 — 安全默认与开发可操作性之间需平衡。
- **品牌/项目名混乱**：仓库由 DeepSeek-TUI 演进为 CodeWhale，但 LICENSE 及文档注释仍残留旧名（#5984），社区需要清晰的命名边界。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*