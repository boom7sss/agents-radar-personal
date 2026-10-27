# AI CLI 工具社区动态日报 2026-07-23

> 生成时间: 2026-07-23 03:27 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-07-23）

---

## 1. 生态全景

当前 AI CLI 工具正处于 **“大规模集成与质量收敛”** 阶段。各工具不再满足于基础的代码补全或对话生成，而是纷纷转向**多代理协作、上下文持久化、模型成本控制、沙箱安全**等生产者级能力的构建。社区反馈显示出**对“可预测性”和“可控性”的强烈渴求**：无论是 Claude Code 的 Fable 5 计费混乱，还是 Gemini CLI 的子代理状态误报，抑或 DeepSeek TUI 的启动崩溃，都指向一个核心矛盾——用户期待工具能像稳定基础设施一样可靠，而当前迭代速度仍快于质量保障。生态整体呈现 **“头部快速迭代、中部争夺差异化、尾部专注垂直场景”** 的格局。

---

## 2. 各工具活跃度对比

| 工具 | 今日热点 Issues 数 | 重要 PR 数 | 版本发布数 | 备注 |
|------|-------------------|------------|------------|------|
| Claude Code | 10 | 10 | 1 (v2.1.218) | 高赞 Issue 号众多，社区互动密集 |
| OpenAI Codex | — | — | — | 数据采集失败，无法参与对比 |
| Gemini CLI | 10 | 10 | 3 (nightly/preview/stable) | 安全修复与企业级 Agent 热点突出 |
| GitHub Copilot CLI | 10 | 2 | 3 (1.0.74 系列) | PR 数少，但 Issue 量丰富，模型成本控制需求强 |
| Kimi Code CLI | 4 | 3 | 0 | 活跃度较低，聚焦第三方兼容与中文平台 Bug |
| OpenCode | 10 | 10 | 0 | 高热度功能请求如自动模型发现、自定义系统提示 |
| Pi | 10 | 10 | 0 | Provider 扩展与重试机制改进为主 |
| Qwen Code | 10 | 10 | 0 (仅预发布) | CI 稳定性、安全泄露修复密集 |
| DeepSeek TUI (CodeWhale) | 10 | 10 | 0 (v0.9.1 候选) | 技能管理器统一化、TUI 启动崩溃 |

*注：Issues 与 PR 均选取日报中精选的热门条目，非仓库全部总量，但可反映当日社区关注度。*

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 具体诉求 |
|----------|---------|---------|
| **模型选择与成本控制** | Claude Code（Fable 5 计费 Bug）、Gemini CLI（子代理不按配置使用模型）、Copilot CLI（Auto 模型池可配置、子代理信用明细）、Kimi Code（子代理独立模型选择）、OpenCode（自动发现模型） | 用户希望灵活管控模型组合，避免意外超支，并希望计费逻辑透明一致。 |
| **后台任务与子代理管理** | Claude Code（后台子代理无法关闭、对话上下文共享）、Copilot CLI（zombie 进程积累、子代理信用消耗明细）、Gemini CLI（子代理状态误报、挂起）、Qwen Code（side-query 副作用） | 子代理行为状态报告必须准确，用户需要能够干预、关闭或审计代理任务，防止资源泄漏。 |
| **跨平台体验一致性** | Claude Code（Desktop 无实时干预功能）、Copilot CLI（Windows 退出崩溃、WSL2 剪贴板）、Qwen Code（Web Shell 移动端不可用）、DeepSeek TUI（macOS Dropbox/File Provider 问题、Windows PATH 覆盖） | 用户期望在不同操作系统、终端模拟器、甚至浏览器上获得一致且稳定的核心交互体验。 |
| **安全与凭证保护** | Qwen Code（Shell 子进程环境变量泄露）、Gemini CLI（变量注入漏洞 GHSA-wpqr-6v78-jr5g）、Copilot CLI（BYOK 认证回归）、Pi（OAuth 重试失败、mTLS CORS 策略） | 凭证、令牌、配置泄露风险持续存在，社区要求工具默认采取最小权限原则，且重试/错误处理必须安全。 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线/独特点 |
|------|---------|----------|----------------|
| **Claude Code** | 代码审查后台化、长时间对话上下文管理、Fable 5 新模型推广 | 重度 AI 编码用户、Anthropic 付费订阅者 | 强 Agent 生态（子代理后台运行）、Claude.ai 与 CLI 串联、插件系统 |
| **Gemini CLI** | 多 Agent 协作（A2A）、子代理框架、自动评估与分类（caretaker-triage） | Google Cloud 开发者、企业级 Agent 编排需求方 | 高度模块化（子代理、技能、评估）、Google 联邦身份集成、安全修复频繁 |
| **GitHub Copilot CLI** | 模型池自定义、子代理信用审计、企业认证（BYOK/ACP） | GitHub 企业用户、多模型成本敏感团队 | 深度嵌入 GitHub 生态（MCP 策略、Enterprise 组织策略）、终端渲染 React 化 |
| **Kimi Code CLI** | 多模型兼容（第三方 API）、子代理独立模型、中文平台适配 | Moonshot AI 用户、国内开发者 | 轻量级，专注第三方 API 兼容性修复，快速响应社区 PR |
| **OpenCode** | 多 Provider 自动发现、自定义系统提示、Plugin Hook 架构 | 本地模型发烧友、高度定制化用户 | 开源优先，社区驱动（123👍 自定义提示）、强调用户对上下文的完全控制 |
| **Pi** | Provider 扩展（StepFun、Bedrock Mantle）、Constrained Sampling、Agent 测试框架（AgentHarness） | 高级开发者、希望自建工具链的用户 | 技术前瞻性强（约束采样、Prompt Cache 优化）、扩展接口丰富（session metadata 暴露） |
| **Qwen Code** | 企业级可观测性（ARMS）、Web Shell Git 模式、无状态生成接口 | 阿里云生态用户、CI/CD 自动化场景 | 与阿里云深度绑定（遥测、ARMS）、强调 CI 稳定性和安全补丁的完整性 |
| **DeepSeek TUI (CodeWhale)** | 技能管理器统一化、TUI 信息密度优化、多区域 Provider 路由 | 追求终端体验精细化的开发者、中国区用户 | TUI 交互极致打磨（可拖拽分隔线、色彩语法）、技能系统为差异化核心 |

---

## 5. 社区热度与成熟度

- **最活跃、用户基础最广**：**Claude Code** 和 **OpenCode**。前者的 Issues 获得近百点赞（#13843 获 99👍）、评论频繁；后者因高度开源和自由度高，社区参与度极高（#6231 获 185👍，#7101 获 123👍且已关闭，暗示功能已进入开发）。
- **快速迭代、企业导向**：**Gemini CLI** 和 **Qwen Code**。Gemini 有 Google 支撑，每天多版本发布，但子代理稳定性问题暴露迭代速度与质量间的矛盾。Qwen Code 同样高频修复，但 CI 连续失败显示内部流程仍需优化。
- **新兴力量、垂直深耕**：**Pi** 和 **DeepSeek TUI (CodeWhale)**。Pi 技术储备强（约束采样、Provider 扩展），但社区规模相对较小。CodeWhale 以 TUI 体验见长，技能管理器统一化为亮点，但 Windows 安装器破坏 PATH 等基础问题严重，成熟度尚低。
- **中型成熟社区**：**GitHub Copilot CLI** 和 **Kimi Code CLI**。Copilot CLI 依托 GitHub 生态，Issue 数量可观但 PR 较少，说明主要由官方团队主导开发。Kimi Code 活跃度有限，但第三方 API 兼容修复响应快。

---

## 6. 值得关注的趋势信号

1. **“子代理透明度”成新信任基石**：多个工具同时出现子代理状态误报（Gemini #22323）、任务无法关闭（Claude Code #66202）、任务链不透明（Copilot CLI #4207）。趋势表明，**用户不再满足于黑盒式自动代理，要求工具报告每一步的详细状态、成本与原因**。这对 Agent 框架的观测性基础设施提出了明确要求。

2. **模型计费与配额逻辑正成为用户体验的“高压线”**：Claude Code 的 Fable 5 计费 Bug 密集爆发（#80408、#80409、#80382），Copilot CLI 需要子代理信用明细（#4207），Kimi Code 也有 TPD 误限流（#2318）。**计费透明性一旦出错，会迅速侵蚀用户信任**。工具需要建立实时、一致的配额仪表盘，并支持用户干预和离线审计。

3. **跨平台兼容性仍是“最后一公里”的泥潭**：macOS 下 Dropbox 不可读（DeepSeek TUI）、Windows 退出崩溃（Copilot CLI）、WSL2 剪贴板错误（Copilot CLI）、Linux tmux 命令检测失败（Copilot CLI）——问题分散但影响深重。**对于想要大规模推广的工具，Windows 和 Linux 非标准终端环境必须作为一等公民测试**。

4. **安全基线正在从“功能可选”上升为“默认强制”**：Qwen Code 的环境变量泄露修复、Gemini CLI 的命令注入漏洞修复、Copilot CLI 的 BYOK 认证回归——这些都不是新问题，但社区响应速度和补丁深度在提升。**面向企业的工具必须默认开启最小权限沙箱，且提供详尽的审计日志**，否则难以通过内部安全审查。

5. **本地化与区域化 Provider 支持成差异化竞争点**：CodeWhale 新增 minimax-cn、Qwen Code 对齐阿里云 ARMS、Kimi Code 配合 Moonshot 官方 API、Pi 新增 StepFun——**在中国市场或区域模型上，工具正快速整合本地 API 生态**。全球化工具（如 Claude Code、Gemini CLI）若想进入新市场，也需提供类似的“本地基石”模型路由。

6. **社区自主性增强：用户希望深度定制底层行为**：OpenCode 的“自动发现模型”与“自定义系统提示”获得超百赞，Pi 的 Constrained Sampling 和暴露 session metadata、Copilot CLI 的 Auto 模型池配置——**用户不再满足于预设清单，要求能够注入自己的逻辑、控制工具的组合与行为**。这预示着 AI CLI 将向“可编程开发平台”演进，而非单纯的对话助手。

---

*报告基于 2026-07-23 各工具 GitHub 社区数据生成，部分指标为当日快照，不代表长期趋势。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，根据提供的 `anthropics/skills` 仓库数据（截至 2026-07-23），以下是为您生成的 Claude Code Skills 社区热点报告。

---

## Claude Code Skills 社区热点报告

### 1. 热门 Skills 排行

以下是通过 Pull Request 评论热度和关注度衡量的最受社区关注的 5 个 Skills。

1.  **#1298: [OPEN] fix(skill-creator): run_eval.py 始终报告 0% 召回率**
    *   **功能**: 修复 `skill-creator` 工具中的核心评估脚本 `run_eval.py`。该脚本是优化技能描述的关键环节，但目前存在严重 Bug，导致无论描述质量如何，评估结果都是 0% 召回率，使优化流程失效。
    *   **社区讨论热点**: 社区对**技能描述优化环节的失效**极为关注。该 PR 直指技能创作工具链中的关键瓶颈，修复了 Windows 兼容性、触发检测逻辑和并发工作器等多个深层次问题。
    *   **当前状态**: Open
    *   **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **#514: [OPEN] 新增 document-typography 技能**
    *   **功能**: 为AI生成的文档提供排印质量控制，包括解决“孤行”（orphan word wrap）、“寡段”（widow paragraphs）和编号错位等常见问题。
    *   **社区讨论热点**: 社区对 **AI 生成文档的“最后一公里”交付质量**有强烈要求。用户普遍认为排版问题降低了 AI 输出的专业度，该技能直接回应了这一痛点。
    *   **当前状态**: Open
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **#1367: [OPEN] 新增 self-audit 技能 (v1.3.0)**
    *   **功能**: 一个通用型技能，在 AI 输出交付前进行“机械文件验证”和“四维推理质量审查”，旨在确保输出文件的完整性和最终成果的逻辑严密性。
    *   **社区讨论热点**: 社区高度关注 **AI 输出的可靠性和质量保证**。该技能提出的双阶段审核（先验证文件存在性，再审计推理质量）概念新颖，讨论集中在如何量化审计标准及与其他技能协同。
    *   **当前状态**: Open
    *   **链接**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

4.  **#723: [OPEN] 新增 testing-patterns 技能**
    *   **功能**: 一个全面的测试技能，涵盖从单元测试（AAA模式）、React 组件测试（Testing Library）到端到端测试（Playwright）的完整测试栈，并包含测试哲学（Testing Trophy 模型）。
    *   **社区讨论热点**: **软件测试自动化**是开发者社区的核心需求之一。该技能的讨论集中于如何将测试最佳实践（如测试命名、纯函数测试）有效地编码为 AI 可执行的指令。
    *   **当前状态**: Open
    *   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)

5.  **#1302: [OPEN] 新增 color-expert 技能**
    *   **功能**: 一个自包含的色彩专业知识技能，覆盖 ISCC-NBS、Munsell、XKCD 等多种色彩命名系统，并提供色彩空间（如 OKLCH、OKLAB）的“何时使用”指南。
    *   **社区讨论热点**: 社区对**特定垂直领域的专业知识技能**有明确需求。该技能的亮点在于提供了一个精确、结构化的色彩知识库，而非通用建议，讨论核心在于如何确保该知识库的准确性和实用性。
    *   **当前状态**: Open
    *   **链接**: [PR #1302](https://github.com/anthropics/skills/pull/1302)

### 2. 社区需求趋势

从 Issues 的高热度讨论中，可以提炼出社区最期待的三个新技能或改进方向：

1.  **工具链可靠性：Skill Creator 的严重 Bug 修复**
    *   **代表 Issue**: #556、#1169、#1061、#202
    *   **趋势分析**: **安全和信任**是核心。大量 Issue 集中反馈了 `skill-creator` 工具（特别是 `run_eval.py`）在 Windows 平台和多字节字符处理上的严重 Bug，导致技能评估和优化功能失效。社区迫切需要一个**稳定、跨平台且经过良好测试的技能创作工具链**。这已不是对某个新技能的需求，而是对基础设施的修复需求。
    *   **链接**: [Issue #556](https://github.com/anthropics/skills/issues/556)

2.  **安全与治理：社区技能的品牌冒用与权限边界**
    *   **代表 Issue**: #492、#1175
    *   **趋势分析**: **安全和信任**是核心。社区对 `anthropic/` 命名空间下混入非官方技能表示严重担忧。这涉及到用户可能因品牌信任而授予过高权限的安全隐患。同时，对在技能内直接处理 SharePoint Online 等外部服务的权限逻辑也表示了安全顾虑。
    *   **链接**: [Issue #492](https://github.com/anthropics/skills/issues/492)

3.  **易用性与协作：技能的组织级共享**
    *   **代表 Issue**: #228
    *   **趋势分析**: **效率和标准**是关键。当前技能只能在个人账户间通过手动下载和上传 `.skill` 文件分享，流程繁琐。社区强烈呼吁引入**组织级的技能共享库或直接的分享链接**，以提升团队协作效率，这反映了 Skills 从个人工具向团队协作平台演进的趋势。
    *   **链接**: [Issue #228](https://github.com/anthropics/skills/issues/228)

### 3. 高潜力待合并 Skills

以下 PR 因社区讨论活跃、功能实用，且有明确的所属者，我判断它们极有可能在近期被合并。

1.  **document-typography (PR #514)**：直接解决了 AI 生成文档的普遍痛点，需求明确，价值清晰，社区期待度高。
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)

2.  **testing-patterns (PR #723)**：覆盖了开发者最核心的工作流之一，且结构完整。随着 AI 辅助编程深入，对高质量测试技能的需求会持续增长。
    *   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)

3.  **self-audit (PR #1367)**：提出了一种新颖的、提升 AI 输出可靠性的方法。如果能解决与其他技能（如 `skill-creator` 的评估功能）的潜在冲突，其通用性将具有很高价值。
    *   **链接**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

4.  **color-expert (PR #1302)**：作为垂直领域技能的范本，展示了如何将结构化知识高效编码。其成功落地将鼓励更多类似的专业技能贡献。
    *   **链接**: [PR #1302](https://github.com/anthropics/skills/pull/1302)

### 4. Skills 生态洞察

**一句话总结**: 当前社区最集中的诉求已从“新增花哨技能”转向“**确保基础技能创作工具的稳定性与跨平台兼容性**”，同时开始关注由此带来的**安全治理、协作效率和输出质量**等更成熟的生态问题。

---

好的，作为专注于 AI 开发工具的技术分析师，以下是基于今日 GitHub 数据生成的 **2026-07-23 Claude Code 社区动态日报**。

---

# 2026-07-23 Claude Code 社区动态日报

## 今日速览

社区今日迎来 **v2.1.218 版本发布**，重点优化了代码审查体验，将其改为后台子代理运行，避免阻塞对话。与此同时，随着 **Fable 5** 新模型在 Max 计划用户中推广，关于其使用限制和计费逻辑的 Bug 报告数量激增，成为社区讨论的焦点。

## 版本发布

### v2.1.218
- **主要更新**: 
    - **关键变更**: 将 `/code-review` 命令重构为**后台子代理**模式运行。这意味着代码审查工作不再填充当前对话，并且能够正确处理堆叠的斜杠命令，大大提升了同时进行多任务时的流畅性和上下文清晰度。
    - **辅助功能优化**: 新增对 `Option+Delete`、`Ctrl+W`、`Cmd+Backspace` 等操作的字词或行级删除操作的屏幕阅读器播报，提升了无障碍体验。

## 社区热点 Issues

1.  **#13843: [从 Claude.ai 共享对话上下文到 Claude Code]**
    - **为什么重要**: 社区呼声极高的功能请求（99 👍），旨在打通 Claude.ai 和 Claude Code 之间的生态壁垒。用户希望在 Claude.ai 上进行规划后，能将完整的对话上下文无缝迁移到 Claude Code 中继续编码。
    - **社区反应**: 评论数达 25 条，大家广泛讨论这种跨平台体验的潜在工作流和实现方式。
    - [查看详情](https://github.com/anthropics/claude-code/issues/13843)

2.  **#80002: [Bug] macOS 上 Filesystem 扩展无法被调起**
    - **为什么重要**: 已关闭的严重 Bug。用户发现 Claude Desktop 能够成功获取 Filesystem 扩展的工具列表（`tools/list` 成功），但永远无法调用具体的工具（`tools/call`），导致 Filesystem 功能完全失效，影响文件操作。
    - **社区反应**: 57 条评论，25 个 👍，说明大量 macOS 用户受到影响。
    - [查看详情](https://github.com/anthropics/claude-code/issues/80002)

3.  **#56897: [Bug] Max 订阅用户在订阅期内被降级至免费计划**
    - **为什么重要**: 涉及付费用户的核心权益。用户报告称其中途订阅被从 Max 降级到免费计划，这是一个需要紧急处理的计费与授权 Bug。
    - **社区反应**: 9 条评论，3 个 👍，虽然评论不多，但严重影响用户体验和信任。
    - [查看详情](https://github.com/anthropics/claude-code/issues/56897)

4.  **#80408: [Bug] Fable 5 在 Max 20x 套餐中错误地要求使用付费额度**
    - **为什么重要**: 新模型 Fable 5 的计费逻辑存在严重错误。Max 20x 套餐的用户本应享有 Fable 5 的免费使用额度，但系统却错误地提示需要额外购买积分。
    - **社区反应**: 新提交的 Bug，0 评论，但直接关系到新模型的用户采纳率。
    - [查看详情](https://github.com/anthropics/claude-code/issues/80408)

5.  **#80409: [Bug] Fable 5 在 Max 计划中错误地提示积分不足**
    - **为什么重要**: 与 #80408 类似，又一个关于 Fable 5 计费 Bug 的报告。用户用量仅 3% 即被告知“已达到 Fable 5 限制”，可能与后端配额统计逻辑错误有关。
    - **社区反应**: 新 Bug，0 评论，进一步证实 Fable 5 的计费/配额系统存在普遍性问题。
    - [查看详情](https://github.com/anthropics/claude-code/issues/80409)

6.  **#80382: [Bug] Fable 5 对 Max 用户显示矛盾的可用性信息**
    - **为什么重要**: UI/UX 问题。Max 用户在使用 Fable 5 时，系统界面显示“已到达限制”，但 `/usage` 命令可能显示仍有可用额度，信息不一致导致用户困惑。
    - **社区反应**: 新 Bug，0 评论，表明 Fable 5 的 UI 状态同步可能有问题。
    - [查看详情](https://github.com/anthropics/claude-code/issues/80382)

7.  **#80404: [Bug] Windows 休眠/唤醒后事件循环饥饿导致 CPU 高占用和输入延迟**
    - **为什么重要**: 影响 Windows 用户体验的性能 Bug。用户从休眠状态恢复后，Claude Code 会话会陷入无限 CPU 占用（约 200%），同时输入响应迟钝，严重影响使用。
    - **社区反应**: 4 条评论，社区怀疑此问题与之前 macOS 上的 #62308 为同一底层 bug。
    - [查看详情](https://github.com/anthropics/claude-code/issues/80404)

8.  **#77966: [Bug] Linux/IntelliJ 上 OAuth 登录陷入循环**
    - **为什么重要**: 影响 Linux 和 JetBrains IDEs 用户的登录体验。用户在“重新登录”后被重定向，但缺少关键的 state 参数，导致认证流程循环。
    - **社区反应**: 8 条评论，6 个 👍，跨平台的认证问题总是让大量用户头疼。
    - [查看详情](https://github.com/anthropics/claude-code/issues/77966)

9.  **#71726: [功能请求] 桌面版支持在任务执行中插入消息**
    - **为什么重要**: 功能不对等。CLI/TUI 版本支持在 Claude 工作时 “中途干预”，这一特性深受用户喜爱。但 Desktop 应用不具备此能力，导致在两个平台上工作流割裂。
    - **社区反应**: 16 个 👍，9 条评论，用户希望 Desktop 应用能获得与 CLI 同等的“实时引导”能力。
    - [查看详情](https://github.com/anthropics/claude-code/issues/71726)

10. **#66202: [功能请求] 允许用户标记后台代理任务为“已完成”或“关闭”**
    - **为什么重要**: 后台代理任务管理的痛点。当多个后台代理任务完成或不再需要时，用户无法主动将其从列表中移除，导致界面混乱。
    - **社区反应**: 9 个 👍，2 条评论，这是一个提升后台任务管理体验的关键功能。
    - [查看详情](https://github.com/anthropics/claude-code/issues/66202)

## 重要 PR 进展

1.  **#18217: [已关闭] 新增 `/planwith` 命令以支持内联规划模式**
    - **功能**: 为 `/plan` 模式增加内联参数支持。用户无需先激活 plan 模式再输入提示词，可以直接使用 `/planwith 为我设计一个用户登录模块` 一步完成操作，提升开发效率。
    - [查看详情](https://github.com/anthropics/claude-code/pull/18217)

2.  **#80326: [开放] 添加 “账户配置文件” 插件**
    - **功能**: 一个新的大型功能插件，允许用户为不同的 Claude 账户（个人/工作/客户）创建隔离的配置文件，通过插件命令即可轻松切换使用环境。
    - [查看详情](https://github.com/anthropics/claude-code/pull/80326)

3.  **#80241: [开放] 修复控制台自动滚动到顶部的 Bug**
    - **修复**: 修复用户报告的控制台在 Claude 输出新文本时，滚动条会自动回到顶部，导致用户丢失阅读进度的 Bug。
    - [查看详情](https://github.com/anthropics/claude-code/pull/80241)

4.  **#80263: [开放] 移除重复的插件提交，并修复发布问题**
    - **修复**: 插件开发者报告，插件提交显示为“已发布”但始终未出现在公共目录中。此 PR 旨在解决插件目录的同步问题，并清理重复的插件条目。
    - [查看详情](https://github.com/anthropics/claude-code/issues/80263)

5.  **#80196: [开放] 修复自动压缩功能不触发的问题**
    - **修复**: 用户报告 `auto-compact` 功能即使上下文已达 100% 也从不触发。此 PR 尝试修复该 Bug，以避免对话超出上下文窗口限制。
    - [查看详情](https://github.com/anthropics/claude-code/pull/80196)

6.  **#80195: [开放] 修复 Max 订阅用户立即到达使用限制的 Bug**
    - **修复**: 用户反馈在拥有 Max 订阅后，仍会立刻收到使用限制提示。PR 旨在修复配额计算和同步的逻辑错误。
    - [查看详情](https://github.com/anthropics/claude-code/pull/80195)

7.  **#80294: [开放] 修复文档中的失效链接**
    - **维护**: 使用 Wayback Machine 的存档修复了 `README.md` 中的 1 个失效外链，提升了文档的可用性。
    - [查看详情](https://github.com/anthropics/claude-code/pull/80294)

8.  **#80353: [开放] 改进 GCP 部署文档**
    - **文档**: 强化了 GCP 网关部署的文档，增加了在下载二进制文件后进行校验的最小化步骤，避免因下载不完整导致部署失败。
    - [查看详情](https://github.com/anthropics/claude-code/pull/80353)

9.  **#80112: [开放] 提升 Devcontainer 防火墙初始化脚本的弹性**
    - **修复**: 增强 `.devcontainer` 环境中的防火墙初始化脚本，使其在 DNS 解析临时失败时不会直接退出，增加了配置的健壮性。
    - [查看详情](https://github.com/anthropics/claude-code/pull/80112)

10. **#80229: [开放] 修复文档中的失效链接**
    - **维护**: 另一个使用 Wayback Machine 修复文档中失效链接的 PR，保持文档引用的准确性。
    - [查看详情](https://github.com/anthropics/claude-code/pull/80229)

## 功能需求趋势

- **Fable 5 模型相关的计费与配额问题**：这成为今日最热门的趋势。多个 Bug 报告（#80408, #80409, #80382）指出 Fable 5 对 Max 计划用户的计算逻辑存在严重错误，导致错误提示和功能阻断。社区急切希望 Anthropic 能尽快统一并修正相关后端逻辑。
- **跨平台体验一致性**：社区持续要求 Desktop 应用获得与 CLI/TUI 同等层次的功能，特别是“实时干预”（#71726）和更灵活的任务管理。这表明用户希望无论在哪种环境下，都能获得统一且流畅的交互体验。
- **打破生态孤岛，实现上下文共享**：以 #13843 为代表，用户希望打通 Claude.ai 和 Claude Code 之间的数据流，能在规划阶段和分析阶段无缝衔接，实现端到端的 AI 辅助开发工作流。

## 开发者关注点

- **Fable 5 计费的困惑**：Fable 5 的推广伴随着计费显示不一致、限额计算错误等问题，成为今日开发者的最大痛点。这不仅影响新模型的使用，也可能动摇用户对平台计费系统的信任。
- **会话管理与状态一致性**：多项 Bug 和功能请求反映了会话管理中的问题，包括：后台代理任务无法关闭（#66202）、中间插入消息不便（#71726）、订阅状态意外降级（#56897）以及休眠/唤醒后的性能问题（#80404）等。这些痛点都围绕着一个核心：**状态的一致性和可控性**。
- **沙箱与权限系统的兼容性**：虽然非今日焦点，但仍有关于 Linux 沙箱（#79997）和操作系统权限（#80412）的连续性问题。这表明，在复杂的开发环境中，Claude Code 的沙箱和安全机制仍需在各种边缘场景下进行适配和打磨。
- **本地化与辅助功能**：用户开始关注更细节的国际化体验，如韩文显示乱码（#80415）和无障碍功能（v2.1.218 的改进），表明社区正在成长并覆盖更广泛的用户群体。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

⚠️ 摘要生成失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是为你生成的 2026-07-23 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报  |  2026-07-23

## 今日速览

今日社区动态聚焦于**Agent 行为逻辑的可靠性**与**安全防护的增强**。`v0.53.0-preview.0` 版本修复了 Agent 间协作时可能引发`400 Bad Request`的关键问题，同时官方发布了针对变量注入绕过漏洞 (`GHSA-wpqr-6v78-jr5g`) 的安全修复 PR。在社区方面，关于**子代理 (Subagent)** 在达到最大步骤数后误报“成功”的 Bug (#22323) 引发了最多的讨论，暴露出系统在状态报告上的一个关键歧义点。

## 版本发布

### v0.52.0-nightly.20260723 (Nightly)
- **仓库**: google-gemini/gemini-cli
- **更新内容**:
    - `fix(core)`: 核心修复，**顺序验证缓存的凭证**并恢复`GOOGLE_APPLICATION_CREDENTIALS`回退机制，增强了认证的鲁棒性。
    - `feat(evals)`: 新增**评估覆盖率报告命令** (`eval coverage`)，有助于量化测试覆盖情况。

### v0.53.0-preview.0 (Preview)
- **仓库**: google-gemini/gemini-cli
- **更新内容**:
    - `fix(core, a2a)`: **关键修复**。解决了 Agent 间交互时，取消的工具响应被错误分组，以及连续角色未合并，导致 API 返回 **`400 Bad Request` 错误**的问题。
    - `feat(caretaker-triage)`: 实现了**基于 LLM 的分类编排器和容器构建**，这通常是用于自动化处理 Bug 分类的内部工具。

### v0.52.0 (Stable)
- **仓库**: google-gemini/gemini-cli
- **更新内容**:
    - `refactor`: 重构，从工作区**排除临时的 CI 配置文件**，可减少 Agent 在开发过程中处理无关文件的干扰。
    - `feat(caretaker-triage)`: 为分类工作器添加了核心基础模块，进一步巩固自动化运维能力。

## 社区热点 Issues

1.  **#22323**: 子代理达到最大轮次后，`Termination Reason` 却报告为"GOAL"(成功)，掩盖了真正的中断原因。
    - **重要性**: **极高**。这是一个严重的Agent逻辑误导问题，直接影响用户对任务执行情况的判断。社区有12条评论，讨论热度最高，表明这是开发者普遍遇到的痛点。
    - **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **#21409**: 通用代理 (Generalist agent) 在简单任务（如创建文件夹）时也会挂起，无法继续。
    - **重要性**: 高。这是一个影响基础可用性的 Bug，用户不得不手动禁止模型使用子代理来规避。获得 8 个 👍 和 8条评论，说明受影响的用户较多。
    - **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **#25166**: Shell 命令执行完成后，Gemini CLI 仍显示“等待输入”而卡住。
    - **重要性**: 高。严重影响交互体验，用户在命令结束仍需等待。获得 3 个 👍 和 4条评论，是核心模块 (area/core) 中的高频问题。
    - **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

4.  **#24353**: 关于建立**稳健的组件级评估**的跟踪议题 (EPIC)。
    - **重要性**: 高。尽管是内部跟踪议题，但表明开发团队正在努力构建更细致的评估体系，以量化和改进 Agent 行为。
    - **链接**: [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

5.  **#26522**: 自动记忆 (Auto Memory) 功能会**无限重试处理低信号量**的会话。
    - **重要性**: 中-高。资源的浪费行为，可能导致不必要的 API 调用和计算消耗。
    - **链接**: [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

6.  **#20079**: 用户自定义 Agent 的配置文件是**符号链接时，不被识别**。
    - **重要性**: 中。影响高级用户和特定开发环境设置，限制了 Agent 配置的灵活性。
    - **链接**: [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

7.  **#21968**: 报告 Gemini 在自主行动时，**很少使用**其技能 (skills) 和子代理。
    - **重要性**: 中。这表明 Agent 的工具调用策略不够智能，未能充分利用其自身能力，与“自主 Agent”的目标相悖。
    - **链接**: [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

8.  **#22093**: 自 v0.33.0 版本起，**子代理在未经授权的情况下运行**。
    - **重要性**: 中。一个明显的行为变更 Bug，触犯了用户的配置预期，破坏了用户对工具的控制权。
    - **链接**: [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

9.  **#22672**: Agent 需要**阻止或劝阻破坏性行为**，如在 Git 操作中使用 `--force`。
    - **重要性**: 中。反映了社区对 Agent 安全性的更高要求，希望它在执行风险操作前能更加谨慎。
    - **链接**: [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **#22745**: 评估**AST感知的文件读取、搜索和映射**的潜在价值。
    - **重要性**: 中。这是一个探索性议题，旨在通过更智能的代码理解方式，减少令牌浪费、提高 Agent 处理代码的精确度。
    - **链接**: [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

## 重要 PR 进展

1.  **#28472 (已合并)**: `fix(core)` - 修复了凭证缓存验证失败后，未正确回退到环境变量的问题。这是认证稳定性的关键补丁。
    - **链接**: [PR #28472](https://github.com/google-gemini/gemini-cli/pull/28472)

2.  **#28407 (已合并)**: `fix(core,a2a)` - **今日关键修复**。解决了 Agent 间协作时因工具响应处理不当导致的 `400 Bad Request` 错误。
    - **链接**: [PR #28407](https://github.com/google-gemini/gemini-cli/pull/28407)

3.  **#28403 (已合并)**: `fix(core)` - **安全修复**。修补了 `bash` 和 `powershell` 变量注入（例如 `$VAR` 和 `${VAR}`）的绕过漏洞 (`GHSA-wpqr-6v78-jr5g`)。
    - **链接**: [PR #28403](https://github.com/google-gemini/gemini-cli/pull/28403)

4.  **#28410 (已合并)**: `fix(core)` - 缩短了 MCP `tools/list` 发现的超时时间，防止在 MCP Server 无响应时，CLI 启动过程长时间卡死。
    - **链接**: [PR #28410](https://github.com/google-gemini/gemini-cli/pull/28410)

5.  **#28406 (已合并)**: `fix(availability)` - 修复了 API 密钥用户因模型 ID 未正确解析而无法访问预览模型 (`gemini-3-flash-preview`) 的问题。
    - **链接**: [PR #28406](https://github.com/google-gemini/gemini-cli/pull/28406)

6.  **#28469 (已合并)**: `fix(core)` - 在模型永久回退时，**轮换会话 ID**，解决了某些后端 (Code Assist) 在标准 `flash` 模型下拒绝重复会话请求的错误。
    - **链接**: [PR #28469](https://github.com/google-gemini/gemini-cli/pull/28469)

7.  **#28169 (已合并)**: `feat(evals)` - 实现了评估覆盖率报告命令，该命令通过梳理评估清单和工具注册表，报告内置工具的评估覆盖率。
    - **链接**: [PR #28169](https://github.com/google-gemini/gemini-cli/pull/28169)

8.  **#28309 (已合并)**: `fix(cli)` - 改进了终端 Markdown 渲染器对**中日韩 (CJK) 文本换行**和 `__bold__` 语法的支持，提升了东亚语言用户的体验。
    - **链接**: [PR #28309](https://github.com/google-gemini/gemini-cli/pull/28309)

9.  **#28485 (已合并)**: `fix(cli)` - 修复了 `gemini-3.5-flash` 模型在模型选择器中**对部分用户不可见**的问题，确保所有用户能访问该模型。
    - **链接**: [PR #28485](https://github.com/google-gemini/gemini-cli/pull/28485)

10. **#28447 (已合并)**: `docs(get-started)` - 为 Windows PowerShell 用户添加了故障排查指南，解决通过 npm 安装后 `gemini` 命令无法运行的问题，降低了入门门槛。
    - **链接**: [PR #28447](https://github.com/google-gemini/gemini-cli/pull/28447)

## 功能需求趋势

从今日的 Issue 和 PR 更新来看，社区最关注的功能方向集中在：
1.  **Agent 行为的可靠性与可控性**：大量议题集中在 Agent 自主决策的 Bug 上，如挂起、误报状态、不按配置执行、不使用技能等。社区迫切需要一个更稳定、可预测的 Agent。
2.  **安全与合规性**：`GHSA-wpqr-6v78-jr5g` 漏洞的修复和相关议题（阻止破坏性行为）显示了社区对 Agent 安全性日益增长的担忧。防止命令注入和限制危险操作是核心诉求。
3.  **评估与可观测性**：新增 `eval coverage` 命令和关于组件级评估的 EPIC 表明，无论是开发者还是内部团队，都在积极推动建立更完善的评估体系，以便客观衡量和改进 Agent 表现。
4.  **本地化与国际化和平台兼容性**：CJK 文本渲染的修复和 Windows 文档的完善，反映了全球化用户群的需求。Agent 配置不支持符号链接也暴露了跨平台兼容性问题。
5.  **自动记忆 (Auto Memory) 的智能化**：关于 Auto Memory 无限重试低信号会话的议题表明，社区希望该功能更加智能，避免浪费资源。

## 开发者关注点

综合开发者反馈，当前最令社区感到不便或焦虑的痛点包括：

1.  **Agent 状态报告不透明且具误导性**：#22323 是最典型的例子，Agent 在被中断后仍然报告成功，这会严重侵蚀用户的信任。
2.  **基础命令执行不稳定**：如 #21409（通用代理挂起）和 #25166（shell 命令完成后卡死）所示，即使是简单的创建文件夹或执行基本命令，也常常不稳定，严重影响了核心开发体验。
3.  **对 Agent 自主性的失控感**：Agent 不使用用户配置的技能 (#21968)、在用户禁用后仍自行启动子代理 (#22093)，这些都让开发者感到工具“不听话”，降低了工具的可控性。
4.  **安全保障力度不足**：`GHSA-wpqr-6v78-jr5g` 的漏洞以及更多关于阻止破坏性行为的诉求表明，开发者担心 Agent 在执行复杂任务（尤其是 Git 操作）时会不小心造成不可逆的损失。
5.  **Bug 报告缺乏代理上下文**：在“`/bug`”报告中仅包含主会话信息，而缺少子代理的内部细节 (#21763)，使得开发者难以在上报问题时提供有效信息，增加了问题排查的难度。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-07-23）

## 今日速览

今日发布了三个补丁版本（v1.0.74-1/2/3），新增 **Gemini 3.6 Flash** 模型支持、首屏启用沙箱提示，并修复了多路会话的对话框泄露问题。社区最热议题集中在对 **PDF 原生阅读**（👍33）和 **Auto 模型池自定义**（👍6）的功能呼吁；另一方面，**zombie 进程积累**、**React 渲染循环回归** 与 **Windows 退出崩溃** 等严重 Bug 引起开发者关注。

---

## 版本发布

过去 24 小时内发布了 **v1.0.74-3 / v1.0.74-2 / v1.0.74-1** 三个版本，均为缺陷修复与小幅改进：

- **✨ 新增**
  - 首次运行显示启用默认沙箱的闪屏引导
  - 增加对 Gemini 3.6 Flash 模型的支持
- **🔧 优化**
  - 多路会话（multiplexing）下，切换回某会话后不再漏出其他会话的打开对话框；符合条件的拾取器将自动重新打开
  - 交互式 `$` 快捷键现在支持 `op` 命令（细节待补全）
- **🐛 修复**（v1.0.74-2/-3）
  - 若干未标明具体内容的修复（“Fixes and changes”）

> GitHub Releases 记录：[查看完整变更](https://github.com/github/copilot-cli/releases)

---

## 社区热点 Issues（10 个精选）

### 1. [#443 – 内置 PDF 阅读支持](https://github.com/github/copilot-cli/issues/443)
- **标签**: `area:tools` • **👍 33** • **评论 6** • 创建于 2025-10-31，今日仍有更新
- **摘要**: 用户要求 Copilot CLI 原生支持 PDF 阅读。当前处理学术论文、技术文档等 PDF 内容时需自行安装 `pdftotext` 等工具，期望内置解析能力以简化工作流。
- **社区反应**: 持续收到高赞，开发组已标注 `area:tools` 但未分配，呼声强烈。

### 2. [#4016 – BYOK 在 `--acp` 模式下仍被拒绝（认证回归）](https://github.com/github/copilot-cli/issues/4016)
- **标签**: `area:authentication`, `area:non-interactive`, `area:models` • **👍 4** • **评论 5** • 今日更新
- **摘要**: 使用 `COPILOT_PROVIDER_*` 自定义模型提供方时，`copilot -p` 可免登录使用，但 `copilot --acp --stdio` 仍要求 GitHub 登录（`-32000 Authentication required`）。该问题曾于 #3048 和 #3902 修复，但在 1.0.61–1.0.68 中回归。
- **社区反应**: 企业用户受影响，期待尽快修复。

### 3. [#3534 – WSL2 ARM64 下 `/copy` 因 `cmd.exe` 引号错误而失败](https://github.com/github/copilot-cli/issues/3534)
- **标签**: `area:input-keyboard`, `area:platform-windows` • **👍 4** • **评论 5** • 今日更新
- **摘要**: WSL2 (ARM64) 上运行 `copilot` 时，所有通过 Windows 路径的剪贴板写入都会报 `clip.exe exited with code 1`。确认是 `cmd.exe` 在 1.0.55 中引入的引号处理 Bug。
- **社区反应**: 用户提供了详细分析，官方正在复现。

### 4. [#4163 – Copilot CLI 不回收子进程，僵尸进程累积](https://github.com/github/copilot-cli/issues/4163)
- **标签**: `area:platform-linux`, `area:tools` • **👍 2** • **评论 3** • 昨日更新
- **摘要**: 每个会话泄漏约 2 个僵尸进程/分钟，长期运行后 PID 下僵尸数量达到数十个。影响服务器和长期任务。
- **社区反应**: 用户提供了进程列表和复现步骤，属于内存/资源管理严重问题。

### 5. [#4206 – 环境 Footer 永远显示“Loading:” (MCP 策略阻塞)](https://github.com/github/copilot-cli/issues/4206)
- **标签**: `area:enterprise`, `area:mcp` • **👍 2** • **评论 2** • 今日更新
- **摘要**: 内置 GitHub MCP 握手在企业 MCP 策略下卡死，导致环境 Footer 显示“◎ Loading: 1 instruction, 40 skills, ...”，实际上已加载完成（`/env` 正常）。界面状态混乱。
- **社区反应**: 企业用户报告，可能与策略解析异步问题有关。

### 6. [#4218 – 允许用户配置 Auto 模式使用的模型池](https://github.com/github/copilot-cli/issues/4218)
- **标签**: `area:configuration` • **👍 6** • **评论 0** • 今日新建
- **摘要**: Auto 模式会选用计划下所有可用模型，但用户无法限制其范围。希望像 VS Code 那样支持配置允许的模型列表，以控制成本和行为可预测性。
- **社区反应**: 刚提交即获得 6 个赞，表明社区对模型成本控制有强烈需求。

### 7. [#4207 – 显示每个子代理的 AI 信用消耗明细](https://github.com/github/copilot-cli/issues/4207)
- **标签**: `area:agents` • **👍 6** • **评论 0** • 昨日创建
- **摘要**: 当前 `/usage` 仅显示累积消耗，不区分主代理、子代理和后台操作。请求显示每个子代理的单独消耗，便于成本审计。
- **社区反应**: 企业开发者和平台管理员积极支持。

### 8. [#4222 – 无限 React 渲染循环回归（#2802 回归）](https://github.com/github/copilot-cli/issues/4222)
- **标签**: `area:terminal-rendering` • **👍 0** • **评论 0** • 今日新建
- **摘要**: v1.0.72+ 在 VS Code 集成终端（原生 Windows）上再现了 #2802 的无限渲染循环，主界面冻结，输出被吞。退出后 `/resume` 才能看到之前的内容。
- **社区反应**: 该问题曾在 v1.0.31 修复，今次回归影响广泛。

### 9. [#4217 – Windows 退出时崩溃（libuv 异步句柄关闭问题）](https://github.com/github/copilot-cli/issues/4217)
- **标签**: `area:platform-windows` • **👍 1** • **评论 0** • 今日新建
- **摘要**: `copilot.exe` 在进程退出时一致崩溃，错误码 `0xc0000409`，`FAST_FAIL_FATAL_APP_EXIT`。WinDbg 分析显示为 `uv_async_send` 在关闭的句柄上触发。
- **社区反应**: 虽然点赞数不高，但属于严重稳定性 Bug。

### 10. [#4223 – tmux 中 Shell 命令完成始终检测不到](https://github.com/github/copilot-cli/issues/4223)
- **标签**: `area:platform-linux` • **👍 0** • **评论 0** • 今日新建
- **摘要**: 在 tmux 内运行 Copilot CLI，Shell 工具命令输出正常，但 CLI 始终认为“still running”，无法自动触发下一步。需手动中断。
- **社区反应**: 影响大量 tmux 用户，复现路径清晰。

---

## 重要 PR 进展

### 1. [#4228 – Withdrawn: 针对 #3534 的错误范围](https://github.com/github/copilot-cli/pull/4228)
- **状态**: 已关闭（今日合并后删除分支）
- **说明**: 提交者原本试图修复 #3534 的 WSL2 剪贴板问题，但该 PR 修改的是文档而非底层剪贴板运行时实现。已被指出范围错误后撤销，源分支已删除。
- **影响**: 无实际代码变更，但提醒社区需定位真正的实现模块。

### 2. [#3163 – ViewSonic monitor（疑似垃圾 PR）](https://github.com/github/copilot-cli/pull/3163)
- **状态**: 打开中（最后更新 2026-07-22）
- **说明**: PR 主题为“ViewSonic monitor”，内容仅一句话“###monitor for #2591,#3561,#3559 -initiate [GitHub action] //runners”。目前无 review、无合并，大概率是误提交或测试 PR。
- **影响**: 无实际贡献价值。

---

## 功能需求趋势

从今日更新的大量 Issues 中可提炼出以下社区最关注的功能方向：

1. **文档解析扩展**：原生支持 PDF 阅读（#443），减少对第三方工具的依赖。
2. **模型与成本控制**：
   - 允许用户限制 Auto 模式的模型池（#4218）
   - 要求子代理信用消耗明细（#4207）
   - 可配置请求错误重试次数（#4210）
3. **Agent 链式调用**：支持在提示词中间显式调用自定义 Agent，并保留上下文链（#4208）；为自定义 Agent 增加 `skill` 工具别名（#4209）。
4. **MCP 与上下文透明性**：`/context` 应反映实际的延迟加载成本而非全部 Schema（#4189）；MCP 手握手状态应正确结束（#4206）。
5. **终端交互增强**：发射 OSC 133 shell 集成序列，方便终端跳转到前一个提示或最终答案行（#3428）。
6. **配置灵活性**：为 context 窗口压缩添加可配置阈值（#1688）。

---

## 开发者关注点

开发者社区在今日反馈中集中反映了以下痛点：

- **稳定性回归**：React 无限渲染循环（#4222）、Windows 退出崩溃（#4217）、zombie 进程积累（#4163）表明近期版本稳定性下降，测试覆盖需加强。
- **跨平台兼容性**：WSL2 ARM64 剪贴板（#3534）、tmux 内命令完成检测（#4223）、tmux 内暗色主题不可见（#4212）等问题暴露了在非标准终端下的缺陷。
- **企业级认证与策略**：BYOK 在 ACP 模式下被拒绝（#4016）以及 MCP 策略导致的 Footer 卡死（#4206）影响企业客户的集成信心。
- **UI/UX 不完善**：通知功能导致 Windows 崩溃（#4219）、Permission Scanner 误判 git 命令路径（#4221）、Plan 模式错误阻止只读 gh 请求（#4220）等降低了工具易用性。
- **资源与成本管理**：缺乏子代理信用明细（#4207）和 Auto 模型池配置（#4218）使得成本审计和性能调优困难，大模型重度用户尤为关注。

---

*本日报基于 GitHub 公开数据自动生成，截至 2026-07-23 14:00 UTC。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报  
**2026-07-23**  
数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 今日速览

今天社区活跃度平稳，共产生 4 条新/更新 Issue 和 3 条 PR。**值得关注的动向**：第三方 API 兼容性 bug 迅速被修复（PR #2535 已提交）；中文 Windows 用户频遭编码崩溃（#2532）；社区对子代理模型独立选择的呼声上升（#2533）。无新版本发布。

---

## 版本发布

过去 24 小时无新 Release。

---

## 社区热点 Issues

### 1. `bug`: 第三方 API 报错 `prompt_cache_key` 参数不被支持  
**#2534** – 用户 dewrama 报告，升级到 0.29.0 后，使用 Nvidia NIM 等第三方 Kimi 兼容端点时，接口返回 400 Validation 错误，提示 `prompt_cache_key` 是非受支持参数。该问题影响所有非 Moonshot 官方 API 的用户，社区反馈迅速，同日已有相关 PR（#2535）提交修复。  
👉 [Issue #2534](https://github.com/MoonshotAI/kimi-cli/issues/2534)

### 2. `feature`: 子代理应支持独立模型选择  
**#2533** – 用户 bob0x-ai 提出，希望为多代理工作流中的每个子代理单独指定模型，从而将简单任务路由到廉价模型、复杂任务留给高性能模型，实现成本分级。该需求对高级用户场景（如 CI/CD 管道、自动化测试套件）有显著价值，目前无评论但获得开发者关注。  
👉 [Issue #2533](https://github.com/MoonshotAI/kimi-cli/issues/2533)

### 3. `bug`: 中文 Windows 下 stdout 重定向时启动崩溃（UnicodeEncodeError）  
**#2532** – 用户 BFour666 发现，在中文语言环境的 Windows 上执行 `kimi web` 且 stdout 被重定向（管道/文件）时，程序因无法编码 `➜`（U+279C）字符而立即崩溃。这对 CI/CD、日志收集以及终端重定向场景影响较大，需紧急处理。  
👉 [Issue #2532](https://github.com/MoonshotAI/kimi-cli/issues/2532)

### 4. `bug`: 组织级 TPD 限流错误（历史遗留，今日更新）  
**#2318** – 自 5 月 18 日创建的旧 Issue，今日被更新。用户报告 kimi 2.6 版本中 TPD（每日令牌数）计算不准，导致被误判限流。当前评论仅 1 条，但获得 2 个 👍，表明该问题在商用场景中仍有影响。  
👉 [Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)

---

## 重要 PR 进展

### 1. [修复] 将 `prompt_cache_key` 作用域限定为 Moonshot API  
**#2535** – 作者 Sanjays2402 针对 #2534 提交修复：所有第三方 Kimi 兼容端点不再发送 Moonshot 特有的 `prompt_cache_key` 参数，官方 API 保留缓存功能。已通过 Checklist 审核。  
👉 [PR #2535](https://github.com/MoonshotAI/kimi-cli/pull/2535)

### 2. [修复] 让 `StrReplaceFile` 的替换计数基于运行时内容而非原始内容  
**#2524** – 作者 Sreekant13 修复了文件替换工具（StrReplaceFile）的计数逻辑：之前的顺序编辑中，第二次替换的计数错误地基于原始文件，导致连锁编辑失效。PR 关联 #2526，已于 7 月 20 日提交，昨日有更新。  
👉 [PR #2524](https://github.com/MoonshotAI/kimi-cli/pull/2524)

### 3. [修复] Shell 命令等待分离子进程时不再阻塞直到超时  
**#2530** – 作者 ayaangazali 解决 #2468：当 shell 命令中包含后台进程（如 `some_daemon & echo done`）时，原逻辑会等 stdin/stderr EOF（最长超时时间）后才检查退出码，导致阻塞。修复后，前台 shell 路径将正确处理分离子进程。昨日有更新。  
👉 [PR #2530](https://github.com/MoonshotAI/kimi-cli/pull/2530)

---

## 功能需求趋势

从今日 Issue 和 PR 中可以提炼出社区关注的三个主要方向：

1. **多模型/多代理的灵活配置** – #2533 要求子代理可独立指定模型，体现了用户对成本控制和工作流编排的深度需求。  
2. **第三方 API 生态兼容性** – #2534 暴露出官方 CLI 对非 Moonshot 端点的参数传递过于激进，修复 PR 快速响应，说明社区对开放生态的期望很高。  
3. **跨平台稳定性** – #2532 的中文 Windows 编码问题连续出现（此前已有类似报告），表明平台适配仍是短板，尤其是在非英文环境下。

---

## 开发者关注点

- **第三方 API 集成时的参数隔离**：开发者 dewrama 的经历表明，在对接 Nvidia NIM 等第三方模型时，应主动过滤 Moonshot 独有参数，避免 400 错误。建议使用 CLI 时留意官方提供的兼容性文档。
- **Windows 终端编码兼容性**：中文 Windows 用户遇到 `UnicodeEncodeError` 问题普遍，临时方案是设置环境变量 `PYTHONIOENCODING=utf-8`，但根本修复需在 `print_banner` 函数中处理回退字符。
- **TPD 限额误判**：组织级用户在 2.6 版本中仍可能因 TPD 计算逻辑错误被限制（#2318），建议关注后续修复或主动联系客服手动调整配额。

---
*日报由 AI 自动生成，数据截止 2026-07-23 16:00 UTC。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，以下是基于您提供的 GitHub 数据生成的 2026 年 7 月 23 日 OpenCode 社区动态日报。

---

# OpenCode 社区动态日报 | 2026-07-23

## 今日速览

今日社区焦点集中于 **v1.18.4 版本的本地连接丢失回归问题**，同时多项关于模型兼容性（特别是 Qwen 系列）和会话管理的优化已通过 PR 修复或正在推进。社区对**自定义系统提示**和**自动发现模型**的热切需求持续高涨，相关功能讨论热度不减。

## 版本发布

暂无正式版本发布。今日仅有与 PR #38252 相关的验证视频上传，推测该 PR 正处于关键测试阶段。

## 社区热点 Issues

1.  **[#7101] 允许在全局、项目或自定义目录中设定自定义系统提示**
    -   **热度**: 👍 123 | 💬 35 | **已关闭**
    -   **重要性**: 社区呼声最高的功能需求之一。用户希望摆脱冗长且无法灵活切换的系统提示，类似 Reddit 讨论中提到的“更短的系统提示”方案。该 issue 的关闭可能预示着相关功能已进入开发或设计阶段。
    -   **链接**: [anomalyco/opencode Issue #7101](https://github.com/anomalyco/opencode/issues/7101)

2.  **[#6231] 从兼容 OpenAI 的提供商端点自动发现模型**
    -   **热度**: 👍 185 | 💬 30 | **开放中**
    -   **重要性**: 解决用户手动配置众多本地模型（如通过 LM Studio、Ollama 等）的痛点。获得高达 185 个点赞，表明这是使用本地模型的开发者们普遍面临的效率瓶颈。
    -   **链接**: [anomalyco/opencode Issue #6231](https://github.com/anomalyco/opencode/issues/6231)

3.  **[#38419] 桌面版 v1.18.4 意外丢失本地服务器连接**
    -   **热度**: 💬 2 (今日最新) | **开放中**
    -   **重要性**: 紧急回归问题。用户在更新到最新版后，与本地服务器的连接会在几次对话后突然中断。与 [#37233] 相似，暗示本地连接稳定性是近期版本的潜在风险。
    -   **链接**: [anomalyco/opencode Issue #38419](https://github.com/anomalyco/opencode/issues/38419)

4.  **[#37233] 将 OpenCode Desktop 置于后台长时间后，本地服务器变红**
    -   **热度**: 💬 2 | **开放中**
    -   **重要性**: 与 [#38419] 同属连接稳定性问题，很可能是同一底层 bug 的不同表现。长期后台运行后连接失效，严重影响工作流。
    -   **链接**: [anomalyco/opencode Issue #37233](https://github.com/anomalyco/opencode/issues/37233)

5.  **[#28965] [功能请求]: 为 F# 添加 wasm 语法高亮**
    -   **热度**: 💬 5 | **已关闭**
    -   **重要性**: 语言生态支持。尽管 F# 并非主流，但此请求表明社区对小众语言支持的需求，且已有公开可用的实现方案。
    -   **链接**: [anomalyco/opencode Issue #28965](https://github.com/anomalyco/opencode/issues/28965)

6.  **[#29017] [功能请求]: `cp` 工具**
    -   **热度**: 💬 5 | **已关闭**
    -   **重要性**: 开发者体验优化。模型频繁出现幻觉并调用虚构的 `cp` 工具，说明用户期望该功能成为内置能力，减少不必要的错误和重试。
    -   **链接**: [anomalyco/opencode Issue #29017](https://github.com/anomalyco/opencode/issues/29017)

7.  **[#29002] [功能请求]: 支持可配置的自动重命名会话功能**
    -   **热度**: 💬 3 | **已关闭**
    -   **重要性**: 会话管理优化。当前基于首条消息的自动命名在长对话中意义不大，导致在 `/sessions` 中难以找到所需会话。此需求直接关系到用户日常使用效率。
    -   **链接**: [anomalyco/opencode Issue #29002](https://github.com/anomalyco/opencode/issues/29002)

8.  **[#28991] [功能请求]: 支持将 ACP 代理作为 OpenCode 后端**
    -   **热度**: 👍 1 | 💬 3 | **已关闭**
    -   **重要性**: 架构与生态扩展。OpenCode 本身可作为 ACP 服务器，若也能消费其他 ACP 代理，将极大增强其灵活性和与更广泛 AI 生态系统的互操作性。
    -   **链接**: [anomalyco/opencode Issue #28991](https://github.com/anomalyco/opencode/issues/28991)

9.  **[#29060] Bug: `session list` 命令不显示历史会话**
    -   **热度**: 👍 1 | 💬 2 | **已关闭**
    -   **重要性**: 关键数据访问问题。用户数据库中有 238 条历史记录，但命令仅显示 2 条，这是一个影响会话检索的严重 bug。
    -   **链接**: [anomalyco/opencode Issue #29060](https://github.com/anomalyco/opencode/issues/29060)

10. **[#16560] Qwen3.5 模型报错“系统消息必须在开头”**
    -   **热度**: 💬 6 | **已关闭**
    -   **重要性**: 模型兼容性问题。今日有两个类似 issue (还有 [#20785], [#20813]) 同时被“关闭”，可能意味着相关修复已经合入或正在测试。该问题是 Qwen 系列模型用户的主要痛點。
    -   **链接**: [anomalyco/opencode Issue #16560](https://github.com/anomalyco/opencode/issues/16560)

## 重要 PR 进展

1.  **[#38432] fix(session): 在失败时最终确定助手消息**
    -   **状态**: **开放中**
    -   **重要性**: 修复了会话异常中断时，未完成的助手消息（assistant scaffold）可能成为“孤儿”记录的问题，保证了数据完整性。
    -   **链接**: [PR #38432](https://github.com/anomalyco/opencode/pull/38432)

2.  **[#38428] fix(core): 通过计算换行符数量实现读取高偏移量时跳过**
    -   **状态**: **开放中**
    -   **重要性**: 显著优化了在大型文件中从高行数开始读取的性能。通过跳过换行计数，避免了不必要的性能损耗，是核心工具体验的重要改进。
    -   **链接**: [PR #38428](https://github.com/anomalyco/opencode/pull/38428)

3.  **[#38424] fix(provider): 按 SDK 选择提示缓存键**
    -   **状态**: **开放中**
    -   **重要性**: 精细化处理不同 AI SDK 的提示缓存兼容性，解决了因缓存键不一致导致的功能异常或性能问题，是重要的兼容性补丁。
    -   **链接**: [PR #38424](https://github.com/anomalyco/opencode/pull/38424)

4.  **[#38423] feat(ai): 保留原始完成原因**
    -   **状态**: **开放中**
    -   **重要性**: 提升调试和透明度。当模型执行因 `max_output_tokens`、`content_filter` 等原因中止时，保留提供商返回的原始原因，有助于用户理解模型行为。
    -   **链接**: [PR #38423](https://github.com/anomalyco/opencode/pull/38423)

5.  **[#38433] feat(opencode): 添加 roll-call 命令**
    -   **状态**: **开放中**
    -   **重要性**: 用户友好的网络测试工具。开发者可通过 `roll-call` 命令便捷地测试可用文本模型的连接状态和延迟，解决了代理连接配置时的痛点。
    -   **链接**: [PR #38433](https://github.com/anomalyco/opencode/pull/38433)

6.  **[#38398] feat(tui): 添加调用令牌用量诊断**
    -   **状态**: **开放中**
    -   **重要性**: 面向性能的改进。在 TUI 中为每一步对话显示详细的 token 消耗（新建、缓存命中、总计），帮助用户了解成本，并识别缓存失效等问题。
    -   **链接**: [PR #38398](https://github.com/anomalyco/opencode/pull/38398)

7.  **[#38420] feat(opencode): 添加 `--no-project-instructions` 开关和环境变量**
    -   **状态**: **开放中**
    -   **重要性**: 安全与自动化。为自动化审查等场景提供了一种抑制项目仓库指令的方法，防止不可信的仓库指令被自动执行，保障了 CI/CD 等自动化流程的安全。
    -   **链接**: [PR #38420](https://github.com/anomalyco/opencode/pull/38420)

8.  **[#38401] fix(core): 为生成接口加载动态模型**
    -   **状态**: **已合并**
    -   **重要性**: 修复了 `/api/generate` 端点无法使用动态加载的 AI SDK 模型（如 Gemini 3.5 Flash）的问题。对 API 调用者至关重要。
    -   **链接**: [PR #38401](https://github.com/anomalyco/opencode/pull/38401)

9.  **[#38427] fix(ai): 归一化 Bedrock 缓存用量**
    -   **状态**: **已合并**
    -   **重要性**: 适配 AWS Bedrock 的缓存语义，正确计算输入 Token 构成，确保统计数字准确，避免误导用户。
    -   **链接**: [PR #38427](https://github.com/anomalyco/opencode/pull/38427)

10. **[#38430] refactor(tui): 加载原生 V2 主题**
    -   **状态**: **开放中**
    -   **重要性**: 主题系统的架构升级。允许直接处理 V2 主题文档，提高主题渲染的效率和灵活性，预示着新的主题系统即将到来。
    -   **链接**: [PR #38430](https://github.com/anomalyco/opencode/pull/38430)

## 功能需求趋势

通过对今日 Issues 的分析，社区最关注的功能方向如下：

1.  **系统提示与上下文管理**: **（热度最高）** 以 `#7101` 为代表，用户强烈要求更灵活、可配置的系统提示管理（全局、项目级、自定义目录）。
2.  **模型配置与自动发现**: 以 `#6231` 为代表，强烈要求简化与本地模型的对接流程，自动发现并填充模型列表是核心诉求。
3.  **CLI 与工具链优化**: 包括 `cp` 工具的内置 (`#29017`)、`roll-call` 测试命令、以及 `--no-project-instructions` 开关等，表明开发者对 CLI 的扩展和健壮性有更高期待。
4.  **会话管理增强**: 关注点在于让会话更易检索和管理，例如自动重命名 (`#29002`) 和修复 `session list` 命令的 bug (`#29060`)。
5.  **插件与生态扩展**: ACP 代理支持 (`#28991`) 和对插件 hook 更细粒度的控制 (`#22831`)，显示出向更开放、可组合的生态系统发展的趋势。

## 开发者关注点

从反馈的 Bug 和痛点来看，以下问题最受开发者关注：

1.  **本地服务器连接稳定性**: `#38419` 和 `#37233` 都指向了桌面版在特定情况下（新版更新、后台长时间运行）会丢失本地连接，这是当前最紧迫的稳定性问题。
2.  **模型兼容性排查**: 多个关于 Qwen 系列模型的问题（如“系统消息必须在开头”错误）已在今日被关闭，反映出这是一个近期频发但正在被解决的普遍问题。
3.  **核心编辑体验 Bug**:
    -   **TypeScript 泛型丢失**: `#21911` 中提及的 AI 编辑文件时剥离所有泛型的问题，严重影响代码质量，即使已关闭也值得关注。
    -   **todo 列表不更新**: `#28961` 中提到的模型未主动更新任务列表状态，影响任务跟踪的可靠性。
4.  **性能与资源占用**: 如 `#25490` 中 Windows 桌面版高内存占用（3-4GB），以及 `#25637` 中快捷键 `Cmd/Ctrl-A` 的失效，都是直接影响日常使用体验的痛点。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，各位开发者，以下是基于 GitHub 数据生成的 Pi 社区动态日报。

---

# Pi 社区动态日报 | 2026-07-23

## 今日速览

今日社区主要聚焦于 **Copilot Enterprise 兼容性问题** 以及 **Provider 重试机制与 OAuth 集成** 的改进。多个高优 Bug 得到修复，特别是关于外部编辑器启动速度、依赖扩展显示路径等开发者日常痛点。此外，**Constrained Sampling** 和 **Amazon Bedrock Mantle** 等新功能正在积极推进中。

## 社区热点 Issues

1.  **[#6768] Compaction using Copilot Enterprise not possible**
    - **重要性**: 极高。使用 Copilot Enterprise 授权的用户无法进行上下文压缩，直接导致核心功能受阻，获得了社区最多的点赞（👍: 9）。
    - **社区反应**: 开发者确认该问题并已标记为 `bug`，正在积极处理。
    - **链接**: [Issue #6768](https://github.com/earendil-works/pi/issues/6768)

2.  **[#6911] OpenAI SDK retries sleep full Retry-After (days) and Escape cannot abort**
    - **重要性**: 高。这是一个潜在的严重问题，当 API 返回 429 错误时，SDK 的重试机制会完全遵守 `Retry-After` 头（可能长达数天），且用户无法通过 Escape 中断，导致会话假死。
    - **社区反应**: 已关闭，相关修复 PR [#6980](https://github.com/earendil-works/pi/pull/6980) 已提交。
    - **链接**: [Issue #6911](https://github.com/earendil-works/pi/issues/6911)

3.  **[#6992] OAuth refresh 502 is not retried because lazyStream drops ModelsError.cause**
    - **重要性**: 高。OAuth 令牌刷新遇到 502 错误后无法自动重试，属于内部契约不匹配。这会影响到所有使用 OAuth 认证的用户（如 GitHub Copilot）。
    - **社区反应**: 已关闭，开发团队已定位问题。
    - **链接**: [Issue #6992](https://github.com/earendil-works/pi/issues/6992)

4.  **[#6989] [P0] File mutation preconditions run before the per-file queue**
    - **重要性**: 高。当并行执行文件修改工具时，前置条件检查（如 `beforeToolCall`）会在所有操作开始前统一运行，这可能导致前置条件在错误的文件状态上执行，产生竞态条件。
    - **社区反应**: 标记为 P0 优先级，已关闭。
    - **链接**: [Issue #6989](https://github.com/earendil-works/pi/issues/6989)

5.  **[#6621] Prevent accidental cache invalidation due to dynamic system prompt**
    - **重要性**: 中高。对本地运行大模型的用户至关重要。动态系统提示（如包含时间/路径）会导致 Prompt Cache 频繁失效，严重拖慢生成速度。
    - **社区反应**: 开发者提出了多种解决方案并进行讨论，已关闭。
    - **链接**: [Issue #6621](https://github.com/earendil-works/pi/issues/6621)

6.  **[#6774] Ctrl+G external editor is slow to launch when os.tmpdir() is crowded**
    - **重要性**: 中高。一个影响开发效率的痛点问题。当系统临时目录文件过多时，启动外部编辑器会变得非常缓慢。
    - **社区反应**: 开发团队已通过创建私有临时子目录的方式修复。
    - **链接**: [Issue #6774](https://github.com/earendil-works/pi/issues/6774)

7.  **[#6979] OAuth-authenticated Anthropic requests get billed as metered API usage**
    - **重要性**: 中。OAuth 登录的 Anthropic 用户请求被错误计费为按量付费，而非使用 Pro/Max 订阅额度，可能导致用户意外支出。
    - **社区反应**: 已关闭，正在调查中。
    - **链接**: [Issue #6979](https://github.com/earendil-works/pi/issues/6979)

8.  **[#6940] OpenRouter cache breakpoint stops before tool results**
    - **重要性**: 中。通过 OpenRouter 使用 Anthropic 模型时，连续工具调用场景下缓存断点位置不正确，导致缓存失效，增加成本。
    - **社区反应**: 已标记为 `last-read`，开发者正在复现和定位。
    - **链接**: [Issue #6940](https://github.com/earendil-works/pi/issues/6940)

9.  **[#6988] setHiddenThinkingLabel: support per-block callback**
    - **重要性**: 中。扩展开发者希望为模型隐藏的思考块（thinking block）提供更精细的标签控制，以区分不同来源（如扩展）的思考过程。
    - **社区反应**: 功能请求，已关闭并进行讨论。
    - **链接**: [Issue #6988](https://github.com/earendil-works/pi/issues/6988)

10. **[#6982] MRU model switching**
    - **重要性**: 低-中。一个小而美的体验优化。用户希望能在最近使用的模型之间快速切换，而非按字母顺序循环。
    - **社区反应**: 功能请求，得到了社区的初步认可。
    - **链接**: [Issue #6982](https://github.com/earendil-works/pi/issues/6982)

## 重要 PR 进展

1.  **[#6980] fix(ai): make provider retries abortable**
    - **内容**: 修复了 Issue #6911 的核心问题，用可中断的重试逻辑替代了 OpenAI/Anthropic SDK 的默认重试行为，并加入了最大重试延迟限制。
    - **链接**: [PR #6980](https://github.com/earendil-works/pi/pull/6980)

2.  **[#6984] feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream**
    - **内容**: 修复了 Bedrock 提供商无法识别新版 Claude 模型（如 Sonnet-5）自适应思考模式的问题，允许用户强制启用该格式。
    - **链接**: [PR #6984](https://github.com/earendil-works/pi/pull/6984)

3.  **[#6987] fix(tui): align grapheme widths with terminal cells**
    - **内容**: 尝试修复终端中字符宽度计算不准的老大难问题，提升 TUI 的渲染效果。
    - **链接**: [PR #6987](https://github.com/earendil-works/pi/pull/6987)

4.  **[#6967] feat(coding-agent): expose session metadata to bash tools**
    - **内容**: 将当前会话的元数据（会话 ID、文件、Provider、模型等）作为环境变量暴露给 Bash 工具执行环境，方便外部脚本识别上下文。
    - **链接**: [PR #6967](https://github.com/earendil-works/pi/pull/6967)

5.  **[#6916] feat(agent): add AgentHarness execution tools**
    - **内容**: 引入新的 `AgentHarnessTool` 抽象，允许在工具执行时携带任意应用特定上下文，是未来扩展 Agent 能力的重要基础。
    - **链接**: [PR #6916](https://github.com/earendil-works/pi/pull/6916)

6.  **[#6341] feat(ai): support constrained sampling**
    - **内容**: 增加对约束采样的支持，允许工具请求 Provider 按照 JSON Schema 生成结构化的参数，提高工具调用的准确性。这是一个重要的新能力。
    - **链接**: [PR #6341](https://github.com/earendil-works/pi/pull/6341)

7.  **[#6960] feat(ai): add StepFun providers**
    - **内容**: 新增了 4 个 StepFun（阶跃星辰）Provider，分别为国内、国际、预付费和文件处理场景提供原生支持。
    - **链接**: [PR #6960](https://github.com/earendil-works/pi/pull/6960)

8.  **[#6927] Add native OpenRouter OAuth support**
    - **内容**: 为 OpenRouter 增加了原生 OAuth 支持，使用 PKCE 流程，简化用户通过 OpenRouter 使用模型时的认证过程。
    - **链接**: [PR #6927](https://github.com/earendil-works/pi/pull/6927)

9.  **[#6903] fix(coding-agent): speed up external editor launch**
    - **内容**: 通过将临时文件写入隔离的子目录而非 `os.tmpdir()` 来解决启动慢的问题（对应 Issue #6774）。
    - **链接**: [PR #6903](https://github.com/earendil-works/pi/pull/6903)

10. **[#6964] fix(coding-agent): display path of sibling dependent extensions**
    - **内容**: 修复了在 Windows 上，通过 npm 包安装的依赖扩展路径显示错误的问题（对应 Issue #6619）。
    - **链接**: [PR #6964](https://github.com/earendil-works/pi/pull/6964)

## 功能需求趋势

- **Provider 生态扩展**: 社区对集成更多 AI 模型的诉求持续高涨，如 **Amazon Bedrock Mantle**、**StepFun**、并对现有 Provider（如 OpenRouter 的 OAuth、AWS Bedrock 的自适应思考模式）进行深度优化。
- **API 与基础设施**: **Constrained Sampling** 的引入表明社区正从“能用”向“用好”迈进，寻求更精确、可控的工具调用。同时，对重试、缓存、错误的处理机制提出了更高的鲁棒性要求。
- **平台集成与用户体验**: 出现了 **VS Code Extension** 的社区自建项目，以及针对 **OAuth** 登录、**MRU 模型切换** 等体验优化请求，表明社区正围绕 Pi 构建更完整的开发者工作流。
- **性能与资源消耗**: 对 **Prompt Cache** 无效化、**外部编辑器启动慢** 等性能问题的关注度很高，尤其是在本地模型场景下。

## 开发者关注点

- **痛点**: **Provider 兼容性** 是最大的痛点，特别是在自托管、OAuth、非主流模型（如 Copilot Enterprise）场景下，经常出现各种意想不到的错误。**网络错误处理**（如 429, 502）的不完善也导致用户体验受损。
- **高频需求**: 开发者普遍希望 Pi 能更**智能化地管理资源**（如缓存、临时文件），并增强**可观测性**（如暴露会话元数据、更详细的日志路径）。**扩展开发体验**（如结构化审批请求、精细化的 thinking label 回调）也是高频关注点。
- **值得关注的问题**: 并行工具调用中的**竞态条件**（Issue #6989）是一个较为隐蔽但影响重大的问题，需要所有插件的开发者留意。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-23

## 📌 今日速览

- **CI 与发布流程持续承压**：过去24小时内，`main` 分支 E2E 测试失败（#7516）、核心测试套件全红（#7537）以及两次 nightly 发布失败（#7549、#7555）接连出现，社区维护者与自动化机器人正在密集修复。
- **核心 Bug 修复进入收尾**：因 `side-query` 强制关闭 `enable_thinking` 导致 TokenPlan 端点 400 的 P1 级 Bug（#7284）已关闭，配套的重试机制 PR（#7534）正在审查。
- **新功能预览**：Web Shell 新增 Git 模式选择器（#7471）、服务端新增无状态 workspace 级生成接口（#7552），为多工作流场景铺路。

---

## 🔖 版本发布

过去24小时内无正式产品发布。唯一可见的 Release 为 `v0.0.0-benchmark-poc.20260722.1`，这是一个用于验证 GitHub Actions → ECS Benchmark Worker → GitHub 结果发布通道的临时预发布，不包含用户功能变更。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#7284 [P1 已关闭] side-query 强制 `enable_thinking=false` 导致 400 错误](https://github.com/QwenLM/qwen-code/issues/7284)
- **重要性**：高优先级 Bug，影响所有使用 `web_fetch`、分类器等需要实现“思考”功能的端点。
- **社区反应**：获5条评论，已修复并关闭。修复后需注意重试逻辑的完备性。

### 2. [#7537 [P1 已关闭] 核心测试套件在 `main` 上全红：fork 调度测试永不触发 `registry.complete`](https://github.com/QwenLM/qwen-code/issues/7537)
- **重要性**：阻塞所有 PR 的 CI 检查，导致每个 PR 的 `Test (ubuntu-latest, Node 22.x)` 任务均为红色。
- **社区反应**：已确认并关闭，但根本原因需跟踪。

### 3. [#6601 [P1 已关闭] Shell 子进程继承敏感环境变量导致凭据泄露](https://github.com/QwenLM/qwen-code/issues/6601)
- **重要性**：安全漏洞，`QWEN_SERVER_TOKEN` 等可能被 `printenv` 获取。
- **社区反应**：已合并修复 #7256，后续 #7527 进一步覆盖钩子、工具发现等子进程。

### 4. [#7489 [已关闭] VS Code Companion：文件选择器插入 `@filename` 但模型未收到图片](https://github.com/QwenLM/qwen-code/issues/7489)
- **重要性**：影响 VS Code 扩展用户上传图片的体验，属于核心交互 Bug。
- **社区反应**：3条评论，已关闭，但需确认修复版本。

### 5. [#6577 [开放] Windows PowerShell/Terminal 中 Alt+V 无法粘贴截图](https://github.com/QwenLM/qwen-code/issues/6577)
- **重要性**：Windows 用户常用功能失效，持续未修复（标签 `welcome-pr`）。
- **社区反应**：3条评论，无活跃进展，社区期待贡献者接手。

### 6. [#5958 [开放] Web Shell 输入编辑器在移动浏览器上不可用](https://github.com/QwenLM/qwen-code/issues/5958)
- **重要性**：跨平台易用性 Bug，当通过手机浏览器访问 `qwen serve` 时输入框无法交互。
- **社区反应**：3条评论，仍处于 `needs-triage` 状态。

### 7. [#7516 [已关闭] 主 CI E2E 测试失败 (Commit d064bd7dcf98)](https://github.com/QwenLM/qwen-code/issues/7516)
- **重要性**：直接导致 main 分支不稳定，自动生成 issue 但已关闭。
- **社区反应**：5条评论，机器人自动创建并分配标签。

### 8. [#7264 [开放] 冷启动延迟优化：剩余惰性加载候选](https://github.com/QwenLM/qwen-code/issues/7264)
- **重要性**：P2 性能增强，esbuild 审计显示 ACP 子进程热启动时需解析 2420 个模块（17.24 MiB）。
- **社区反应**：3条评论，开发路线图明确，需持续优化。

### 9. [#6820 [开放] RuntimeError: memory access out of bounds (WASM)](https://github.com/QwenLM/qwen-code/issues/6820)
- **重要性**：罕见但严重的运行时崩溃，堆栈指向 wasm 函数，影响使用特定终端的用户。
- **社区反应**：2条评论，需排查 Node.js 版本兼容性。

### 10. [#7520 [开放] npm 12 兼容性：全局模式导致更新检查失败](https://github.com/QwenLM/qwen-code/issues/7520)
- **重要性**：随着 Node.js 26 发布，npm 12 的全局行为变化将影响更新流程。
- **社区反应**：1条评论，已确认根因并欢迎 PR。

---

## 🚀 重要 PR 进展（Top 10）

### 1. [#7552 [开放] feat(serve): 添加 workspace 级无状态生成接口](https://github.com/QwenLM/qwen-code/pull/7552)
- **内容**：新增 SSE 端点，无需活跃 session 即可通过工作空间 ACP 子进程进行模型生成，支持取消和生命周期固定。
- **影响**：为批量、无状态和自动化场景开放核心能力。

### 2. [#7471 [开放] feat(web-shell): 新增 Git 模式选择器](https://github.com/QwenLM/qwen-code/pull/7471)
- **内容**：在 Web Shell 新会话流中嵌入 Git 工作流选择器（当前分支 / 新分支 / 无 Git），提升团队协作体验。
- **影响**：改善多分支开发场景的组织效率。

### 3. [#7527 [开放] fix(core): 从钩子和工具发现子进程中剥离守护进程密钥](https://github.com/QwenLM/qwen-code/pull/7527)
- **内容**：将 `sanitizeChildEnv()` 应用到 `hookRunner.ts`、`toolDiscovery.ts` 和 `scheduleRunner.ts`，防止凭据泄露。
- **影响**：#6601 的完整修补，覆盖剩余攻击面。

### 4. [#7534 [开放] fix(core): 当提供商要求 thinking 时重试请求](https://github.com/QwenLM/qwen-code/pull/7534)
- **内容**：在 OpenAI 兼容端点收到 HTTP 400（需 `enable_thinking=true`）时，自动重建请求重试一次，并记住模型能力。
- **影响**：直接解决 #7284 的 core 层修复，提高 side-query 鲁棒性。

### 5. [#7556 [WIP] 修复 v0.20.1-nightly 发布失败](https://github.com/QwenLM/qwen-code/pull/7556)
- **内容**：由 Copilot 自动创建，针对 #7555 的发布失败问题。
- **影响**：即时修复 nightly 发布管道，稳定 CI。

### 6. [#7536 [开放] feat(core): 对齐 GenAI 遥测与阿里云 ARMS](https://github.com/QwenLM/qwen-code/pull/7536)
- **内容**：根据 OpenTelemetry GenAI 语义惯例和 ARMS LLM Trace，对齐 LLM、工具和 Agent span 属性。
- **影响**：企业级可观测性增强，便于接入阿里云监控。

### 7. [#7530 [开放] refactor(core): 简化系统提示缓存层级](https://github.com/QwenLM/qwen-code/pull/7530)
- **内容**：将缓存的系统指令合并为单个聚合，仅保留 `stable`、`context`、`volatile` 三个字符串键；移除每个片段标记、角色和层级对象。
- **影响**：降低内存开销，提高缓存命中率。

### 8. [#7541 [开放] fix(core): 保留禁用的 reasoning effort](https://github.com/QwenLM/qwen-code/pull/7541)
- **内容**：当 side-query 禁用 thinking 时，保留显式配置的 `reasoning_effort: "none"`，其他值仍照常移除。
- **影响**：修复 #7284 遗留的配置丢失问题。

### 9. [#7490 [开放] fix(autofix): 跳过 Prepare 步骤时重试，而非终止 PR](https://github.com/QwenLM/qwen-code/pull/7490)
- **内容**：当基础/基础设施失败（发生在 agent 运行之前）时，不再永久终止 PR，而是重试。
- **影响**：提高自动修复流程的鲁棒性，减少人工介入。

### 10. [#7550 [开放] fix(cli): review 覆盖率报告使用作者的单位，而非 chunk ID](https://github.com/QwenLM/qwen-code/pull/7550)
- **内容**：`/review` 命令的覆盖率披露改为按 PR 作者的文件逻辑单位排序展示，不再暴露底层 chunk ID。
- **影响**：提升代码审查的可读性和开发体验。

---

## 📈 功能需求趋势

综合分析过去24小时更新的 Issues 和 PRs，社区主要聚焦以下方向：

1. **企业级集成与可观测性**  
   - 提议“企业外部内存集成框架” (#7449，P3)  
   - 对齐阿里云 ARMS 的 GenAI 遥测 (#7536)  
   - 工具输出预算、可观测性及构件生命周期管理 (#7306，P2)

2. **自动化与 CI/CD 增强**  
   - 多次发布失败后，社区提出“AI 辅助发布 notes 超时后降级显示” (#7523)  
   - Autofix 流程改进：重试跳过 Prepare、自动更新基于过时 main 的分支 (#7554)  
   - 磁盘清理机制用于 npm 更新残留 (#7524)

3. **多平台与移动端体验**  
   - Web Shell 在移动浏览器上的输入框不可用 (#5958)  
   - Windows Alt+V 粘贴截图失效 (#6577)  
   - Web Shell 新增 Shadow DOM 隔离 (#7551) 和 `renderChatHeader` 插槽 (#7553)

4. **安全与凭证管理**  
   - Shell 子进程环境变量泄露 (#6601) 的后续加固 (#7527)  
   - `git clean` / `git checkout` 等危险命令的守卫增强 (#7531)

5. **新功能：计划可视化与子 Agent 关联**  
   - 提案：普通会话中可视化计划 DAG，并将 Todo 节点链接到子 Agent 执行 (#7525，P2)

6. **性能优化**  
   - 冷启动延迟：剩余惰性加载候选 (#7264)  
   - 系统提示缓存简化 (#7530)

---

## 🛠️ 开发者关注点

- **CI 不稳定性**：过去24小时内 E2E 测试、核心测试套件、两次 nightly 发布依次失败，开发者普遍担忧 CI 的可靠性。建议维护者优先修复 #7537 的根本问题并加强发布前检查。
- **npm 12 / Node 26 兼容性**：多个 Issue 报告更新检查、全局命令失效 (#7520, #7543)，提示需要及时适配新版 Node.js 的包管理行为变化。
- **侧查询（side-query）副作用**：`enable_thinking` 强制关闭引发的 400 错误及 reasoning effort 丢失，是本次日报中修复次数最多的热点（#7284、#7534、#7541）。
- **环境变量泄露的长期治理**：尽管 #7256 已合并，仍有 @chinesepowered 发起 #7527 补全剩余子进程路径，表明社区对安全审计要求严格。
- **终端 UI 杂谈**：Linux 终端闪烁 (#6137)、WASM 越界崩溃 (#6820) 和 TUI 恢复后空白区域 (#7485) 持续存在，影响部分用户的日常使用。

---

*数据采集截止时间：2026-07-23 12:00 UTC。本日报由 AI 自动生成，请以 GitHub 仓库最新状态为准。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-07-23

> 数据来源：[Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)

---

## 📌 今日速览
v0.9.1 发布冲刺进入收尾阶段，昨日关闭了大量 release-blocker issue，但今天又暴露出多个关键 bug，包括 **TUI 启动后立即退出**（#4716）、**大粘贴内容字节损坏**（#4719）以及 **设置菜单遗留 DeepSeek 印记**（#4717）。社区讨论核心集中在技能管理器的统一化落地（PR #4679 已合并）和工具层边界检查的可靠性上。Windows 安装器覆盖 PATH 的问题（#4685）也引发广泛关注。

---

## 🔥 社区热点 Issues（10 条）

### 1. #2870 — EPIC: 命令边界重构（17 💬）
- **摘要**：跟踪将命令边界重构拆分为可合并的小层，参考 PR #2851。是 v0.9.2 的规划基石。
- **重要性**：长期架构设计，社区核心贡献者关注。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/2870)

### 2. #4227 — 帮助贡献者搭建开发环境的技能工作流（12 💬）
- **摘要**：提案一个 Skill，自动拉取最新 main、cargo build、运行测试等，降低新贡献者门槛。
- **重要性**：社区协作友好型工具，响应项目高迭代速度（10+ PR/天）。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4227)

### 3. #2889 — Work Agent 行：展示真实的子代理详情与活动（已关闭，8 💬）
- **摘要**：恢复被删除的 issue #2694，要求在侧边栏展示代理的详细状态（任务、活动、子代理）。已作为 v0.9.1 的一部分实现。
- **重要性**：UX 关键设计，社区设计方向来源。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/2889)

### 4. #2886 — 为工具生命周期添加 Gherkin 验收 E2E 测试（已关闭，7 💬）
- **摘要**：在命令重构前增加工具生命周期的测试覆盖率，确保重构安全。
- **重要性**：质量保障基础，被标记为 release-blocker。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/2886)

### 5. #4691 — v0.9.1: 发布模型调用的默认技能包（已关闭，4 💬）
- **摘要**：交付与 Kimi Code、Devin CLI、Claude Code 对等的一等奖技能包，包含 interview、plan、implement 等 15 个端用户技能。
- **重要性**：v0.9.1 核心功能，昨日已通过 PR #4695 合并。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4691)

### 6. #4684 — `danger-full-access` 未禁用工具层工作区边界检查（2 💬）
- **摘要**：即使设置 `sandbox_mode = "danger-full-access"`，工具层（read_file 等）仍强制边界检查，导致全局技能无法访问。
- **重要性**：严重安全/功能缺陷，需要紧急修复。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4684)

### 7. #4085 — macOS File Provider 下无法读取 ~/Library/CloudStorage/Dropbox/（4 💬）
- **摘要**：CodeWhale 在 Dropbox 路径下无法读、写、搜索文件。非沙箱问题，推测为文件系统事件处理缺陷。
- **重要性**：影响 macOS 用户云存储工作流。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4085)

### 8. #4685 — Windows 安装器覆盖用户 PATH 环境变量（1 💬）
- **摘要**：CodeWhaleSetup.exe 在安装时直接覆盖用户 PATH，导致其他工具失效。
- **重要性**：严重破坏 Windows 用户环境，急需修复安装脚本。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4685)

### 9. #4716 — TUI 启动后立即退出（[Process completed]）（今日新开）
- **摘要**：在 macOS Fresh terminal 中运行 `codew` 或 `codewhale` 瞬间退出，v0.9.1 候选版本。标记为 stop-ship。
- **重要性**：阻塞 v0.9.1 正式发布，必须立即定位。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4716)

### 10. #4719 — 大粘贴提示在提交前字节损坏（今日新开）
- **摘要**：粘贴长多行提示后，路径被截断、字符丢失，导致模型接收错误内容。
- **重要性**：破坏基本输入功能，影响所有重度用户。
- [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4719)

---

## 🚀 重要 PR 进展（10 条）

### 1. #4722 — fix(tui): 在详情中展示完整的编辑预览（今日新开）
- **内容**：保持紧凑的 `edit_file` 审批卡，在 Alt+V 详情页懒加载完整的 `-/+` 搜索替换预览。
- **重要性**：改善 TUI 编辑操作的透明度。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4722)

### 2. #4679 — feat(skills): 统一 /skills 管理器（已合入）
- **内容**：交付 v0.9.1 技能面板，支持 inventory、audit、install、update、remove、trust。
- **重要性**：核心功能里程碑，社区期待已久。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4679)

### 3. #4714 — chore(deps): 修复 npm lockfiles 以解决 Dependabot 警报
- **内容**：`npm audit fix --package-lock-only` 解决 17 个开放警报（7 高 10 中）。
- **重要性**：安全合规，释放 release-blocker。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4714)

### 4. #4711 — fix(tui): 聚焦 v0.9.1 chrome 在 todo 和代理上（已合入）
- **内容**：顶部条只显示活动 Todo 和子代理；添加可拖拽分隔线；使用主题感知的配色。
- **重要性**：UX 改进，减少信息噪音。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4711)

### 5. #4695 — feat(skills): 默认 CodeWhale 技能包 v5（已合入）
- **内容**：捆绑 15 个端用户技能（interview, plan, debug 等），支持模型和用户两种入口。
- **重要性**：v0.9.1 默认技能集，与竞品对齐。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4695)

### 6. #4694 — fix(kimi): 对 K3 模型 ID 交叉配对失败关闭（已合入）
- **内容**：将 base URL + model ID 视为唯一路由，对 `kimi-k3` 和 `k3` 的交叉使用报错。
- **重要性**：防止用户意外使用错误 API 组合。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4694)

### 7. #4693 — fix(tui): Work 摘要生命周期、可操作标题与顶部层次修复（已合入）
- **内容**：近期摘要 4s 过期；非持久化 shell 失败从 Work 表面移除；展示更多正文。
- **重要性**：修复多个 v0.9.1 release-blocker，提升信息层级。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4693)

### 8. #4675 — 集成 CodeWhale v0.9.1 运行时与发布表面（已合入）
- **内容**：合并运行时简化、空 Work 修复、最终 TUI 色彩语法（cool mode / warm permission）。
- **重要性**：v0.9.1 集成大 PR，包含多项关键改进。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4675)

### 9. #4508 — 刷新官网与 README 产品截图（已合入）
- **内容**：用新的规范截图替换旧版，并确保 README 与网站 PNG 字节一致。
- **重要性**：文档与品牌展示同步。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4508)

### 10. #4686 — feat(minimax): 新增中国区/Token Plan 提供商路由（待合入）
- **内容**：新增 `minimax-cn` 和 `minimax-anthropic-cn` 两个路由，指向 api.minimaxi.com。
- **重要性**：扩展中国区用户模型选择，响应社区需求。
- [查看 PR](https://github.com/Hmbown/CodeWhale/pull/4686)

---

## 📊 功能需求趋势

从近 24 小时的 Issues 中可看出社区关注的核心方向：

1. **技能管理器统一化**：围绕 `/skills` 命令合并项目管理、全局、兼容根目录，避免 `/reskill` 平行命令家族（#4651 已关闭，PR #4679 已合入）。
2. **多提供商与区域化支持**：新增 minimax-cn、TelecomJS 等中国区提供商（#4370、#4686），也有对 K3 模型 ID 路由的严格校验（#4694）。
3. **工具层沙箱与边界控制**：`danger-full-access` 未完全失效（#4684）暴露了沙箱架构的漏洞，用户期待清晰的权限模型。
4. **TUI 信息密度与视觉节奏**：多个 Issue 关注工作区（Work）信息过载、重复提示、裁剪预览等（#4701、#4718、#4722 等）。
5. **跨平台文件系统兼容性**：macOS File Provider（#4085）、Windows 安装器 PATH 覆盖（#4685）表明用户对稳定安装和文件操作高度敏感。
6. **模型设置与自动切换透明性**：`/provider` 启动失败（#4682）、非 DeepSeek 提供商下仍显示遗留 fallback 设置（#4717、#4720）反映了配置管理的混乱。

---

## 🛠 开发者关注点（痛点与高频需求）

- 💥 **安装体验差**：Windows 安装器直接覆盖用户 PATH（#4685），严重破坏开发环境；macOS 下 Dropbox 路径不可读（#4085）影响云同步工作流。
- 🚫 **TUI 启动崩溃**：v0.9.1 候选版本在 macOS 新终端中瞬间退出（#4716），阻止了用户升级验证。
- 🩹 **大粘贴损坏**：长提示被截断/字节丢失（#4719），直接导致后续对话出错。
- 👀 **信息过载**：Work 表面残留“Option+V 查阅”重复提示、推理状态堆叠（#4718），降低阅读效率。
- 🔒 **安全模型不一致**：`danger-full-access` 未能真正解放工具层（#4684），与用户预期相悖。
- 📋 **设置菜单历史包袱**：非 DeepSeek 提供商下仍显眼展示“DeepSeek fallback model”（#4717），造成困惑；模型自动切换不透明（#4720）。
- 🐧 **社区协作门槛**：项目 PR 密度高，新贡献者需要自动化环境搭建工作流（#4227）以降低接入成本。

> 注：以上 Issues/PRs 均来源于 [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) 仓库，部分描述与原有“DeepSeek TUI”品牌可能存在映射关系，日报中保持一致使用 CodeWhale 当前官方名称。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*