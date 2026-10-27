# AI CLI 工具社区动态日报 2026-07-15

> 生成时间: 2026-07-15 02:55 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告 (2026-07-15)

## 1. 生态全景

当前 AI CLI 工具生态正处于**功能深化与社区矛盾激化并存**的阶段。一方面，各工具以周级迭代快速落地多会话管理、子代理支持、MCP 生态集成等关键能力；另一方面，社区对**成本失控、模型自主行为不可控、UI 回归与平台兼容性**的不满日益集中。Claude Code 与 GitHub Copilot CLI 的“Fable 模型配额黑洞”与“400 错误泛滥”成为当日最严重的使用信任危机；OpenCode 的 v2 UI 迁移则暴露了“创新与稳定”的平衡难题。整体竞争已从“能否用”转向“好用、可控、省钱”，用户体验与平台可靠性成为决胜关键。

## 2. 各工具活跃度对比

| 工具 | 今日 Issues (精选数) | 今日 PR 数 (合入/合并) | 今日 Release | 社区总热度(👍+评论总量估算) |
|------|---------------------|-----------------------|---------------|---------------------------|
| Claude Code | 10 (高赞/热门) | 9 (多项OPEN/CLOSED) | 2个小版本 | 极高 (54👍+26评论等) |
| OpenAI Codex | 10 (top10) | 10 (当日合入) | 5个Alpha+1个稳定 | 高 (103👍+46评论等高赞) |
| Gemini CLI | 10 | 10 (数项OPEN/合并) | 1个nightly | 中高 (配额问题持续发酵) |
| GitHub Copilot CLI | 10 (当日新增近20条) | 无新PR | 2个小版本 | 极高 (33👍+26评论等) |
| Kimi Code CLI | 2 | 3 (全部合并) | 无 | 低 (TPS限流问题1评论) |
| OpenCode | 10 | 10 (多项合并) | 2个小版本 | 高 (37👍+20评论等) |
| Pi (pi-mono) | 10 | 10 (含多项合并) | 1个版本(breaking) | 中高 (16评论+8👍等) |
| Qwen Code | 10 | 10 (多项合并) | 1正式+1nightly+1SDK | 中高 (23评论+5👍等) |
| DeepSeek TUI (CodeWhale) | 10 | 10 (全部合并) | 无 | 中 (35评论, 但非顶级) |

**解读**：
- **Claude Code** 和 **GitHub Copilot CLI** 社区活跃度最高，但负面反馈集中（Bug/成本问题）。
- **OpenAI Codex** 和 **OpenCode** 的 PR 密度极高，团队响应快，但 OpenCode 因 UI 迁移引发大量回归投诉。
- **Kimi Code CLI** 和 **DeepSeek TUI** 相对安静，但后者当天有大量质量修复。
- **Pi** 和 **Qwen Code** 稳步推进特性，社区热度中等但讨论质量高（RFC+深度技术讨论）。

## 3. 共同关注的功能方向

| 功能需求 | 涉及工具 | 社区主要诉求 |
|----------|---------|------------|
| **成本控制与配额透明度** | Claude Code (#77665 #76987)、Gemini CLI (#26860)、GitHub Copilot CLI (#4097) | Fable模型自动消耗配额、未请求却扣减、二进制diff导致会话膨胀。用户强烈要求可见的配额监控和“手动模式”防止自动行为。 |
| **会话/任务管理与恢复** | Claude Code (#66807)、OpenAI Codex (#33211 #33201)、GitHub Copilot CLI (#4054 #4127)、OpenCode (#36971 #36962) | 分支/重试/断点续传、上下文健康监控、跨项目移动线程、会话归档与恢复的跨平台兼容性。 |
| **子代理/多智能体控制** | Claude Code (#77655)、Gemini CLI (#22323)、OpenAI Codex (多个PR)、Pi (#6655 #6509)、Qwen Code (#5239) | 子代理视图渲染错误、最大轮次误报、通信机制弱、静默超时、费用报告独立显示。 |
| **MCP/插件生态与安全** | Claude Code (#73587)、GitHub Copilot CLI (#4096 #4122)、Pi (MCP缓存)、Qwen Code (#6895 #6923)、DeepSeek TUI (MCP SDK升级) | 权限规则被忽略、OAuth桥接失败、信任上下文传播、路径规范化绕过、文件描述符泄漏。 |
| **平台兼容性** | Claude Code (Windows更新崩溃)、OpenAI Codex (Windows浏览器崩溃、Ubuntu Bubblewrap)、Gemini CLI (macOS M4无限重启、Wayland)、GitHub Copilot CLI (Ubuntu密钥环)、OpenCode (VPS会话丢失)、Pi (npm版本兼容)、DeepSeek TUI (Android Termux、BSD) | Windows/Linux/macOS/移动端广泛存在阻塞性bug，跨平台稳定性仍是通用短板。 |
| **本地化与国际化** | DeepSeek TUI (#4369)、OpenCode (中文用户反馈) | 非英语用户增多，翻译准确性（如“Constitution”直译“宪法”）和流式中文渲染问题开始凸显。 |

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|------|------------|--------------|------------|---------------------|--------------|----------|----|----------|--------------|
| **定位** | 深度Agent开发助手（Fable模型自动规划） | 会话建模+可重试工作流 | Google生态深度集成 | 全栈助手+语音/桌面融合 | 国内推理模型优化 | 桌面级Claude Code替代 | 多模型聚合网关+子代理扩展 | 多工作区守护进程+企业级 | 轻量终端多模型支持 |
| **目标用户** | 高级开发者、Agent工作流用户 | 重度代码审查/自动化用户 | Google云/Android开发者 | GitHub重度用户+企业 | 国内Moonshot生态用户 | Claude Code用户迁移者 | 多模型偏好的技术玩家 | 大型项目多工作区团队 | 终端忠实用户/轻量使用 |
| **技术路线** | 自主Agent（Fable）+ 插件Hookify | Rust核心+Python SDK+前后端分离 | Node.js+Glang混合 | Rust+WASM+桌面原生 | Rust+推理参数精细控制 | Rust+Vue2→3迁移 | Rust+TUI+聚合API | Rust+TUI+守护进程 | Rust+TUI+MCP |
| **当前迭代重点** | 修复Fable成本与权限回归 | 会话分支/重试/状态解耦 | 安全+配额+子代理约束 | 语音/插件市场/会话持久化 | 推理参数透传+预算动态化 | 新UI迁移与功能回归修复 | 提供商扩展+子代理费用透明 | 多工作区+安全路径确认 | 文件索引性能+提供商扩展 |
| **社区情绪** | 愤怒（Fable失控） | 积极但Windows问题多 | 不满（配额消耗） | 活跃但400错误焦虑 | 安静稳定 | 强烈抵触新UI | 技术讨论热度高 | 务实讨论RFC | 中性略有抱怨 |
| **成熟度** | ⭐⭐⭐⭐（成熟但BUG多） | ⭐⭐⭐⭐（迭代极快） | ⭐⭐⭐（仍不稳定） | ⭐⭐⭐⭐（功能丰富） | ⭐⭐⭐（更新慢） | ⭐⭐⭐（UI变动风险） | ⭐⭐⭐⭐（稳定+开放） | ⭐⭐⭐⭐（稳步推进） | ⭐⭐⭐（轻量但完善中） |

**核心差异**：
- **Claude Code** 在自主Agent能力上最激进，但也是成本失控问题的典型代表。
- **OpenAI Codex** 和 **GitHub Copilot CLI** 背后有最强AI厂商资源，功能迭代速度最快，但平台兼容性较薄弱。
- **Pi** 和 **Qwen Code** 走“聚合+开放”路线，支持多模型切换，更注重架构灵活性与可扩展性。
- **DeepSeek TUI** 作为独立开发者项目，虽功能最轻，但社区反馈修复积极，尤其在跨平台支持上表现突出。

## 5. 社区热度与成熟度

- **最具影响力**：Claude Code（影响力最大但争议最多）、GitHub Copilot CLI（企业用户基础深厚，社区反馈密度高）、OpenAI Codex（PR数量最多，社区贡献活跃）。
- **增长潜力高**：Pi（多模型聚合+子代理生态）、Qwen Code（多工作区+守护进程模式）——两者架构创新较明确，社区讨论质量高。
- **成熟度较高但仍需打磨**：OpenCode（成熟的功能集，但v2 UI迁移伤了用户感情）、Gemini CLI（Google背书但社区信任较低）。
- **快速迭代但社区规模较小**：Kimi Code CLI（国内专注，更新节奏慢）、DeepSeek TUI（独立项目，合并PR效率高）。

## 6. 值得关注的趋势信号

1. **Agent 自主性与成本博弈进入关键期**：Fable 模型在 Claude Code 中的“自主发明工作流”且无法关闭，以及 Gemini CLI 的“未请求自动消耗配额”，表明当前 Agent 的控制机制严重不足。**开发者应关注“成本护栏”功能（配额上限、审批阈值、默认手动模式）的成熟度，否则 AI CLI 可能成为“烧钱黑洞”。**

2. **会话状态管理成为核心架构难题**：OpenAI Codex 一天合入5个PR专门处理会话分支/重试/中断，OpenCode 的 v2 UI 废弃侧边栏引起反弹——**会话的持久化、分支、恢复与跨设备同步是用户体验的基石，未来所有 CLI 工具都将在此深度投入。**

3. **MCP 生态进入信任与安全攻坚期**：多个工具同时修复 MCP 信任上下文传播、路径规范化绕过、文件描述符泄漏等问题。**MCP 正从“集成更多工具”转向“如何安全地集成”，开发者使用第三方 MCP 服务时需警惕权限提升风险。**

4. **本地化与国际化的“隐形门槛”凸显**：DeepSeek TUI 的中文翻译问题、OpenCode 的中文用户反馈、GitHub Copilot CLI 的多语言文档需求，**反映 AI CLI 工具的用户群体已从纯英语技术人群扩展至全球开发者，非英语体验将成为下沉市场的竞争关键。**

5. **终端 TUI 与桌面 GUI 的融合加速**：GitHub Copilot CLI 的 `/voice` 命令和画布交互、OpenCode 的桌面版迁移、Qwen Code 的 WebShell，**CLI 不再是纯文本终端，而是融合了语音、图形、远程控制的新一代开发交互中介。**

6. **Breaking Change 的代价日益增高**：Pi 的 v0.80.7 移除 `sendSessionIdHeader` 标志、OpenCode v2 UI 隐藏 Agent 切换——前者靠文档缓解，后者引发社区强烈反弹。**SDK/CLI 维护者应在不破坏现有工作流的前提下提供升级路径，并给予足够长过渡期，否则将严重磨损社区信任。**

---

本报告基于 2026-07-15 各工具 GitHub 社区动态分析生成，数据来源可靠，建议技术决策者结合自身团队的实际使用场景（如预算敏感度、平台偏好、Agent 自动化深度需求）选择最适合的工具。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为一名专注于 Claude Code 生态的技术分析师，以下是根据您提供的 GitHub 仓库数据分析生成的社区热点报告。

---

### Claude Code Skills 社区热点报告 (数据截止 2026-07-15)

#### 1. 热门 Skills 排行 (Top 5)

以下是根据 Pull Requests (PR) 的讨论活跃度（评论数）及社区关注度评选出的最受关注 Skills 动态。

1.  **`skill-creator` 修复: 解决 0% 召回率顽疾**
    *   **功能**: 修复 `run_eval.py` 脚本，该脚本负责评估 Skill 描述的质量。由于一个长期存在的 bug，导致所有评估结果都显示 0% 的召回率，使得描述优化循环失效。
    *   **社区热点**: 社区对此 bug 抱怨已久（关联 Issue `#556`），本次 PR 尝试一劳永逸地解决根因，包括 Windows 兼容性、触发检测逻辑和并行工作器等问题。由于 `skill-creator` 是社区开发者创建和优化自己 Skill 的核心工具，此 PR 的修复直接影响所有 Skill 贡献者的工作效率。
    *   **当前状态**: Open
    *   **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **`document-typography`: 文档印刷质量把控**
    *   **功能**: 一个专注于解决 AI 生成文档中常见排版问题的 Skill，如孤行、寡段和编号错位。
    *   **社区热点**: 社区普遍认为，这些美观性问题虽然微小，但严重影响专业文档的最终呈现质量。开发者分享了大量修复前后的对比案例，证明了该 Skill 对提升文档“高级感”有立竿见影的效果。讨论集中在是否应将此类视觉校验集成到更基础的文档技能中。
    *   **当前状态**: Open
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **`skill-creator` 集群: 多个 Windows 兼容性修复**
    *   **功能**: 这是一组高度同质化的 PR (包括 `#1298`, `#1099`, `#1050`, `#539`, `#362`, `#361`)，主要解决 `skill-creator` 相关脚本在 Windows 系统上无法运行的问题，如子进程调用失败、编码错误、YAML 解析错误等。
    *   **社区热点**: 这组 PR 成为了社区关注的焦点，凸显了 `skill-creator` 工具链对 Windows 用户极不友好的现状。大量 Windows 用户反馈无法正常使用评估和优化功能。社区讨论集中在原生跨平台支持的必要性，以及 Anthropic 官方对此问题的响应速度。
    *   **当前状态**: 全部 Open
    *   **链接**:
        *   [PR #1099](https://github.com/anthropics/skills/pull/1099)
        *   [PR #1050](https://github.com/anthropics/skills/pull/1050)
        *   [PR #362](https://github.com/anthropics/skills/pull/362)
        *   [PR #539](https://github.com/anthropics/skills/pull/539)

4.  **`self-audit`: 交付前的机械与推理质量关卡**
    *   **功能**: 引入一个在 AI 输出交付前进行“自审”的 Skill，先进行文件的机械验证（如确保文件存在），再进行四维推理质量审计。
    *   **社区热点**: 该提案触及了“AI 输出可靠性”这一核心痛点。社区开发者认为这是将 AI 输出从“玩具”变为“生产可用”的关键一步。讨论重点在于质量门禁的优先级和评分标准，以及如何避免审计过程本身过度消耗 token。
    *   **当前状态**: Open
    *   **链接**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

5.  **`testing-patterns`: 全面的测试模式技能**
    *   **功能**: 提供了一个覆盖完整测试栈的指导 Skill，包括测试哲学、单元测试、组件测试等。
    *   **社区热点**: 此 PR 直接对应当前 AI 编程的一个核心诉求：生成高质量、可维护的测试代码。社区不仅关注 Skill 内容的覆盖面（如对 React Testing Library 的支持），更深入讨论了 Skill 的 prompt 设计，如何引导 Claude 产出更符合“测试奖杯”理念的测试结构。
    *   **当前状态**: Open
    *   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)

---

#### 2. 社区需求趋势

从 Issues 的讨论中，可以提炼出以下几个社区最期待的新 Skill 方向：

*   **安全与治理**: 社区高度关注安全管理问题。`#492` (*Security: Community skills distribution under anthropic/ namespace*) 的 34 条评论位居榜首，反映了对官方身份冒用、权限滥用等“信任边界”风险的担忧。同时`#412` (*agent-governance*) 提案也说明社区对 Agent 系统的安全模式有明确需求。
*   **工作流与协作**: `#228` (*Enable org-wide skill sharing*) 获得了 14 条评论和 7 个👍，表明社区渴望将 Skills 从个人效率工具升级为团队协作资产，期待官方提供组织级共享方案。
*   **工具链稳定性与跨平台支持**: `#556` (*run_eval.py never triggers skills*) 和 `#1061` (*Windows compatibility*) 问题获得了大量关注。这表标志着社区正在从“会写 Skill”向“高效可靠地开发和评估 Skill”转变，对 `skill-creator` 等工具链的稳定性和跨平台兼容性提出了强烈要求。
*   **上下文窗口优化**: `#1175` (*Concerns regarding Security and Context Window*) 的讨论表明，在面对大量文档（如 SharePoint Online）时，开发者开始意识到 Skill 设计对 Token 消耗的巨大影响，如何编写“Context Window 友好”的 Skill 已成为高阶话题。
*   **特定领域深化**: 除了通用的 `testing-patterns` 和 `document-typography`，社区也展现出对特定领域 Skill 的兴趣，如 `#1329` (*compact-memory*) 提出的符号化记忆表示，旨在优化长运行 Agent 的上下文管理。

---

#### 3. 高潜力待合并 Skills

这些 PR 讨论活跃，技术价值高，有望在近期被官方合并或指导社区继续完善。

1.  **`self-audit` (PR #1367)**: 直击“AI 输出不可靠”痛点，概念新颖且实用，是提升生产级代码质量的关键组件。持续关注度极高。
    *   **链接**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

2.  **`testing-patterns` (PR #723)**: 覆盖全面，切合软件工程实际需求。若能通过审查并完善，将成为所有希望用 AI 辅助测试的开发者的必备技能。
    *   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)

3.  **`color-expert` (PR #1302)**: 这是一个小而美的领域专用技能，精准解决了 UI/UX 设计和数据可视化中对色彩知识的复杂需求。由于其自包含、高专业性的特点，合并概率很高。
    *   **链接**: [PR #1302](https://github.com/anthropics/skills/pull/1302)

4.  **`document-typography` (PR #514)**: 问题普遍、影响直观，修复方案清晰。解决了 AI 生成文档“质感不足”的硬伤，需求强烈。
    *   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)

---

#### 4. Skills 生态洞察

**当前社区最核心的诉求是提升 `skill-creator` 工具链的可靠性、跨平台兼容性和评估准确性，以支撑社区从“创意阶段”迈向“生产性开发”。**  安全性和组织级共享能力是仅次于稳定性的第二梯队关键需求。这表明 Claude Code Skills 生态正从“能做”向“好用、可信、可协作”的高速发展阶段转型。

---

好的，这是为你准备的 2026 年 7 月 15 日 Claude Code 社区动态日报。

---

# Claude Code 社区动态日报 | 2026-07-15

## 今日速览

今日社区的核心痛点是**Fable 模型的用量失控**（#76987、#77665）以及**持续的“连接中断”网络错误**（#69415），用户情绪较为激烈。小版本更新带来了实时计时器与权限规则的改进，同时 GitHub 上出现了大量关于**子代理视图渲染错误**和**工作树隔离**的回归性 Bug 报告。

## 版本发布

### v2.1.210
- **新增功能**：在折叠工具摘要行中添加了实时运行时间计数器，使得长时间运行的工具调用更直观，避免用户误以为卡死。
- **行为变更**：启动时增加警告，提示不要为 `Write(path)`、`NotebookEdit(path)` 和 `Glob(path)` 使用权限规则，应改用 `Edit(path)` 或 `Read(path)`。
- **链接**: [v2.1.210 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.210)

### v2.1.209
- **修复**: 修复了 `claude agents` 后台会话中被阻止的 `/model` 和其他对话框（回退了一个过于宽泛的保护机制）。
- **链接**: [v2.1.209 Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.209)

## 社区热点 Issues

1. **[BUG] 频繁的 API 连接中断导致的不可用问题** (Issue #69415)
   - **重要性**: 极高。该问题有高达 54 个 👍 和 26 条评论，证明了其普遍性和严重性。用户在 VSCode 和 WSL 环境下频繁遇到“连接中断”错误，导致工具完全无法使用。
   - **社区反应**: 用户纷纷跟帖报告类似问题，已确认存在了一段时间（创建于6月18日），社区期待官方尽快排查网络库问题。
   - **链接**: [Issue #69415](https://github.com/anthropics/claude-code/issues/69415)

2. **[BUG] Fable 模型在一个周末消耗了大量配额** (Issue #76987)
   - **重要性**: 高。这是一份情绪激烈的“周末事后分析”，用户抱怨 Fable 模型自主“发明”了工作流程，不仅没完成用户要求的任务，还消耗了大量配额。标题非常引人注目。
   - **社区反应**: 14 条评论表明用户对 Fable 的自主行为控制能力提出质疑，这是社区对 Agent 行为预期管理的典型负面反馈。
   - **链接**: [Issue #76987](https://github.com/anthropics/claude-code/issues/76987)

3. **[BUG] 每周配额在数小时内耗尽** (Issue #77665)
   - **重要性**: 高。用户报告在明确选择退出后，Fable 模型仍被自动选中，并在空闲时产生大量“cache_read”轮询，导致 Max 计划配额在 24 小时内被消耗 1.37B 个 token。这是严重的 Cost 控制 Bug。
   - **社区反应**: 这是对 #76987 的进一步数据支持，显示 Fable 的资源消耗问题是系统性的，而非偶发。
   - **链接**: [Issue #77665](https://github.com/anthropics/claude-code/issues/77665)

4. **[FEATURE] 上下文健康监控** (Issue #66807)
   - **重要性**: 中高。在长会话中，用户渴望一个类似“上下文健康”的监控面板，以了解当前 token 使用情况、哪些上下文即将被遗忘（滑动窗口问题）。这是一个高频需求，有 13 条评论支持。
   - **社区反应**: 开发者认为这是提升 Claude Code 在大型项目中使用体验的核心功能之一。
   - **链接**: [Issue #66807](https://github.com/anthropics/claude-code/issues/66807)

5. **[BUG] 桌面应用忽略权限允许规则** (Issue #73587)
   - **重要性**: 高。这是 Windows Desktop 用户遇到的严重回归问题：对任何操作，包括访问 Claude 自己的配置目录，都会弹出权限提示，完全无视 `permissions.allow` 规则。
   - **社区反应**: 评论指出该问题影响了基本的工作流，被视为关键阻塞性 Bug。
   - **链接**: [Issue #73587](https://github.com/anthropics/claude-code/issues/73587)

6. **[BUG] 协作桌面版“AskUserQuestion”UI 未渲染** (Issue #58750)
   - **重要性**: 中高。影响 macOS 协作模式体验：用户发起询问后，UI 没有弹出卡片，但错误地显示有未决请求，直到退出应用才自动“忽略”。
   - **社区反应**: 用户抱怨严重影响沟通体验，要求尽快修复。
   - **链接**: [Issue #58750](https://github.com/anthropics/claude-code/issues/58750)

7. **[BUG] Windows 更新失败并导致应用无法启动** (Issue #76357)
   - **重要性**: 高。Windows MSIX 安装版本在每次更新时都会因为文件锁问题失败，且必须重启电脑，非常影响用户体验。
   - **社区反应**: 用户反馈每更新一次就要重启一次电脑，沟通成本极高。
   - **链接**: [Issue #76357](https://github.com/anthropics/claude-code/issues/76357)

8. **[BUG] Advisor 误将真实输出识别为提示注入** (Issue #77548)
   - **重要性**: 中高。在 Agent 系统中，“Advisor”模型错误地将真实的工具执行结果识别为注入攻击，并拒绝执行后续操作。这涉及 Agent 信任基础的 Bug，影响 Agent 的稳定性。
   - **社区反应**: 开发者指出这是一种“信任校准”问题，可能影响依赖多 Agent 协同的复杂工作流。
   - **链接**: [Issue #77548](https://github.com/anthropics/claude-code/issues/77548)

9. **[BUG] 子代理视图显示主会话信息** (Issue #77655)
   - **重要性**: 中。在桌面应用中查看子代理（spawned subagent）时，UI 错误地渲染了主会话的模型、努力程度等配置，而非子代理本身的。这是一个典型的 UI 渲染 Bug。
   - **社区反应**: 影响对子代理状态的判断，虽不阻塞功能，但易造成混淆。
   - **链接**: [Issue #77655](https://github.com/anthropics/claude-code/issues/77655)

10. **[BUG] Desktop Diff 面板错误使用 'main' 作为基准** (Issue #77662)
    - **重要性**: 中。对于默认分支不是“main”的仓库，Diff 面板显示的是与“main”分支的差异而非仓库的默认分支。这是一个 Linux 平台的桌面问题。
    - **社区反应**: 用户不得不手动修改配置，增加了操作步骤。
    - **链接**: [Issue #77662](https://github.com/anthropics/claude-code/issues/77662)

## 重要 PR 进展

1. **[OPEN] claude-compare** (PR #77613)
   - **内容**: 一个名为 `claude-compare` 的新工具/功能，尚在早期阶段，PR 描述为空。值得关注其后续发展。
   - **链接**: [PR #77613](https://github.com/anthropics/claude-code/pull/77613)

2. **[OPEN] 修复插件开发验证脚本** (PR #77556)
   - **内容**: 修复了 `plugin-dev` 插件中的 hook-schema 验证脚本的两个 Bug：1）无法正确处理带扩`-`字符的 URL；2）无法处理多行的 `prompt` 字段。确保插件钩子能正确验证。
   - **链接**: [PR #77556](https://github.com/anthropics/claude-code/pull/77556)

3. **[OPEN] 修复 Hookify：匹配 Write 和 Prompt 规则** (PR #77492)
   - **内容**: 修正了 Hookify 系统，使其能够检查 `Write` 操作写入的文本内容，并正确映射简单的 Prompt 规则。增强了对文件和输入内容的规则匹配能力。
   - **链接**: [PR #77492](https://github.com/anthropics/claude-code/pull/77492)

4. **[CLOSED] 修复 Hookify：匹配 Write 和 Prompt 规则** (PR #77260)
   - **内容**: 与 #77492 功能相同，但被关闭后重新打开。这表明开发团队可能对此功能进行了重构或分支策略调整。
   - **链接**: [PR #77260](https://github.com/anthropics/claude-code/pull/77260)

5. **[OPEN] 修复停止钩子的 jq 错误处理** (PR #77443)
   - **内容**: 修复了 `stop-hook.sh` 脚本中，在开启 `set -e` 后，`jq` 命令失败导致的提前退出问题。通过引入临时文件来确保错误处理逻辑依然可达。
   - **链接**: [PR #77443](https://github.com/anthropics/claude-code/pull/77443)

6. **[OPEN] 修复 Issue 自动化遥测和过期输入** (PR #77442)
   - **内容**: 修复了三个自动化工作流的问题：1）遥测事件时间戳错误（1970年）；2）提交检查脚本错误地使用 GitHub 环境变量的原始时间戳；3）工作流输入参数中一个无效的布尔值。
   - **链接**: [PR #77442](https://github.com/anthropics/claude-code/pull/77442)

7. **[OPEN] 文档：同步安全插件清单** (PR #77439)
   - **内容**: 将安全指导插件的文档和 Marketplace 清单从 v1.0.0 更新到最新的 v2.0.0 格式，包括新的能力描述和作者信息。
   - **链接**: [PR #77439](https://github.com/anthropics/claude-code/pull/77439)

8. **[OPEN] 修复代码审查工具为叶子 Agent** (PR #77427)
   - **内容**: 将 `pr-review-toolkit` 插件中的代码审查 Agent 限制为“叶子 Agent”，即只能使用仓库检查工具，不能调用其他子 Agent，以防止其在审查过程中无限递归或产生过多开销。
   - **链接**: [PR #77427](https://github.com/anthropics/claude-code/pull/77427)

9. **[CLOSED] 文档：远程控制后台任务面板** (PR #76298)
   - **内容**: 更新了远程控制功能的文档，以说明新增的 Web/移动端后台任务面板，以及 v2.1.205 版本中引入的任务状态同步行为。该 PR 已被合并。
   - **链接**: [PR #76298](https://github.com/anthropics/claude-code/pull/76298)

## 功能需求趋势

- **Agent 可观察性与控制**：社区强烈要求增加对 Agent 行为的监控能力，包括“子代理视角” (#77655)、“父会话监控子会话” (#71773) 以及 “上下文健康监控面板” (#66807)。用户希望了解 Agent 在做什么、用了多少资源、以及其“思考”过程。
- **模型行为优化**：核心矛盾集中在 **Fable 模型**的自主与成本控制上。用户需要更强的机制来限制 Agent 的“主动性”，避免其在未经明确授权的情况下消耗大量配额或执行多余操作 (#76987, #77665)。
- **权限系统精细化**：对于 MCP 工具和 Shell 命令，用户希望有更智能的权限管理。例如，“已允许”的白名单钩子仍会触发确认 (#76238)，以及 Shell 变量展开时，应自动解析或跳过，而不是询问用户 (#77668)。
- **工作区与工作流隔离**：关于 `spawn_task` 的子 Agent 工作树（worktree）存在数据丢失风险 (#77661) 和远程跟踪分支被覆盖 (#77660) 的 Bug 报告频繁，社区对工作空间的隔离性稳定性要求日益提高。

## 开发者关注点

- **Fable 的信任危机与成本焦虑**：多个高热度 Issue 指向 Fable 模型在背景中自主行动且难以控制，导致 Token 和金钱成本的浪费。这是目前社区情绪中最大的痛点。
- **桌面应用的跨平台稳定性**：Windows 更新崩溃 (#76357) 、Linux 分支计算错误 (#77662) 以及 macOS 协作 UI 不响应 (#58750) 等问题表明，桌面应用的跨平台体验仍需完善。
- **连接与 API 错误**：频繁的“连接中断” (#69415) 和“锁已释放” (#77656) 等网络错误严重影响了开发者对工具的信任，被认为是最需要优先解决的可用性问题。
- **权限提示的 UI/UX 问题**：权限规则被忽略 (#73587)、允许选项不持久化 (#74715) 等问题，使得日常操作变得非常繁琐，用户期望有更清晰、更一致的“一次确认，长期有效”机制。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-15

---

## 今日速览

- 团队今日密集推送了 **8 个 PR**，重点围绕 **会话分支/重试/中断处理** 和 **会话状态与 I/O 解耦**，是 Codex CLI 与 TUI 体验的一次重大质量改进。
- 社区最热 Issue 仍是 **Azure Foundry 上 GPT-5.6-Sol 每轮失败**（#31870，46 评论），同时 **Windows 平台浏览器控制崩溃** 相关 Issue 持续高发，开发者反馈集中。
- 模型层面，PR #33173 正在将 **GPT-5.4 系列全面迁移至 GPT-5.6 Terra/Luna**，标志着新一轮模型切换。

---

## 版本发布

| 版本 | 标签 | 说明 |
|------|------|------|
| `rust-v0.145.0-alpha.12` | 最新 | Alpha 发布，无详细 Changelog |
| `rust-v0.145.0-alpha.11` | 最新 | Alpha 发布 |
| `rust-v0.145.0-alpha.10` | 最新 | Alpha 发布 |
| `rust-v0.145.0-alpha.9` | 最新 | Alpha 发布 |
| `rust-v0.144.4` | 稳定 | 仅内部杂务，**无用户可见变化** |
> 注：0.144.4 为 Python SDK 同步版的基础运行时，Python SDK 对应 PR #33213 已合入稳定发布。

---

## 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 赞 | 摘要 |
|---|------|------|----|------|
| [#31870](https://github.com/openai/codex/issues/31870) | Codex with GPT-5.6-Sol through Azure fails every turn | 46 | 39 | **Azure Foundry 用户**使用 GPT-5.6-Sol 时每轮都因 `X-OpenAI-Internal-Codex-Responses-Lite` 失败，影响面大，社区积极跟帖。 |
| [#17827](https://github.com/openai/codex/issues/17827) | Customizable status line | 28 | 103 | **高赞功能请求**：希望像 Claude Code 那样在 TUI 底部实时显示 token 用量、模型名、速率限制、git 分支等。 |
| [#30178](https://github.com/openai/codex/issues/30178) | Codex Desktop in-app Browser crashes the main app | 16 | 0 | **Windows 用户**在 WebView 导航时应用直接闪退，影响 Browser Use 功能。 |
| [#20783](https://github.com/openai/codex/issues/20783) | Blocking stop hook continuation can fail with invalid local message id | 15 | 4 | **停止钩子（stop hook）** 阻断后导致 Codex 轮次失效，触发 `Invalid 'input[118].id'` 错误。 |
| [#32683](https://github.com/openai/codex/issues/32683) | [Windows] Codex App crashes in CrBrowserMain when Browser Use opens a page | 14 | 3 | **Windows 新版 App** 使用 Browser Use 打开页面时崩溃，异常地址指向 `chrome.dll`。 |
| [#22857](https://github.com/openai/codex/issues/22857) | Better key authentication on SSH host remote connections | 13 | 14 | 用户希望 iOS/Desktop **远程 SSH 连接**支持更完善的密钥认证流程。 |
| [#28919](https://github.com/openai/codex/issues/28919) | Windows Codex app missing “control other devices” tab | 12 | 21 | **Windows App 远程控制功能缺失**：Settings > Connections 中找不到“控制其他设备”标签。 |
| [#29908](https://github.com/openai/codex/issues/29908) | apply_patch and managed sandbox fail with Bubblewrap errors on Ubuntu 24.04 | 10 | 0 | **Bubblewrap** 沙箱在 Ubuntu 24.04 上因 `loopback/userns` 错误导致 `apply_patch` 失败。 |
| [#26984](https://github.com/openai/codex/issues/26984) | MCP stdio servers leak pipe fds + orphan child processes → EMFILE | 9 | 2 | **MCP 服务泄漏文件描述符**，累积到 `EMFILE` 错误，影响长时间运行会话。 |
| [#29911](https://github.com/openai/codex/issues/29911) | Codex Desktop Creates Empty `.git` Directories, Then Triggers Windows Defender High CPU | 9 | 5 | **Windows Defender 高 CPU**：Codex 不断创建空 `.agenc` 和 `.git` 目录并扫描，触发 Defender 频繁检查。 |

---

## 重要 PR 进展（Top 10）

| # | 标题 | 合入时间 | 说明 |
|---|------|---------|------|
| [#33213](https://github.com/openai/codex/pull/33213) | Prepare Python SDK 0.144.4 stable release | 07-15 | **Python SDK 稳定版**：对齐 CLI 0.144.4，重新生成协议模型和通知注册表。 |
| [#33211](https://github.com/openai/codex/pull/33211) | Preserve thread context when retrying or editing turns | 07-15 | 引入 `beforeTurnId` 支持，TUI 回溯和安全重试时**保留原始线程上下文**。 |
| [#33209](https://github.com/openai/codex/pull/33209) | Separate session state from session I/O | 07-15 | 用 `Arc<Session>` 和 `SessionIo` 解耦，**会话状态与提交/事件分离**，提升架构清晰度。 |
| [#33207](https://github.com/openai/codex/pull/33207) | Retry safety-buffered turns on a forked thread | 07-15 | **安全缓冲轮次重试**：中断后先 fork 再重试，避免改写原始对话。 |
| [#33203](https://github.com/openai/codex/pull/33203) | Preserve in-flight state when restoring thread input | 07-15 | 保留**飞行中状态**（pending-steer 中断标志、运行中轮次、排队输入），线程恢复时不丢数据。 |
| [#33201](https://github.com/openai/codex/pull/33201) | Branch conversations when editing earlier TUI prompts | 07-15 | **编辑早期提示时分支对话**：不再原地回滚，而是 fork 出新对话，保留原始历史。 |
| [#33200](https://github.com/openai/codex/pull/33200) | Separate exec permission paths from core models | 07-15 | 分离**执行权限路径**与核心模型，使沙盒上下文能正确序列化为 URI。 |
| [#33198](https://github.com/openai/codex/pull/33198) | Keep interrupted prompts in conversation history | 07-15 | **中断提示保留在对话历史**：ESC/Ctrl-C 后留下无输出的中断项，并打开空白输入框。 |
| [#33187](https://github.com/openai/codex/pull/33187) | Honor workspace spend controls in rate-limit handling | 07-14 | 处理速率限制时**遵循工作区费用控制**，避免旧数据覆盖最新的工作区硬停止。 |
| [#33184](https://github.com/openai/codex/pull/33184) | Reuse MCP tool catalogs across sessions | 07-14 | **MCP 工具目录缓存**：跨会话重用未变 stdio MCP 服务器的工具列表，缩短新会话初始化时间。 |

---

## 功能需求趋势

1. **TUI 信息密度提升**： #17827 对可定制状态栏需求极强（103 👍），用户希望在终端实时看到 token、模型名、速率限制等。
2. **远程控制与 SSH 认证**： #22857 关注 iOS/Desktop 端远程控制 CLI 主机的密钥认证， #28919 更直接指出 Windows App 缺少“控制其他设备”入口。
3. **会话与项目管理**： #25498 要求桌面端提供项目注册、线程跨项目移动等功能，反映用户对**工作区组织**的诉求。
4. **快捷入口恢复**： #31925 和 #32689 要求恢复 macOS 上 `Option+Space` 唤起迷你 ChatGPT 对话的功能，表明统一 App 后用户对快捷启动的依赖。
5. **模型选择灵活性**： #19192 报告新建聊天时模型选择器失灵，且社区对模型下拉列表的易用性有改进期望。

---

## 开发者关注点

- **Windows 平台稳定性堪忧**：App 内嵌浏览器崩溃（#30178、#32683）、`apply_patch` 延迟 40–60 秒（#32477）、Windows Defender 高 CPU（#29911）等多起 Issue 集中爆发，影响 Windows 用户核心体验。
- **沙箱与系统兼容性**：Ubuntu 24.04 上 Bubblewrap 失败（#29908）暴露了内核版本兼容问题；macOS 上 `codex app` 忽略已安装 ChatGPT.app 并创建重复 App（#31944）。
- **MCP 与资源泄漏**：#26984 显示 MCP stdio 服务泄漏管道文件描述符和孤儿进程，长期运行后触发 `EMFILE`；#33184 的缓存方案虽已合入，但社区希望更彻底的资源回收。
- **会话性能瓶颈**：大活跃会话导致全局无响应（#21948）、图像密集型会话因 base64 嵌入 JSONL 导致崩溃（#28531）、SQLite 锁竞争导致多终端 TUI 冻结（#20213）——**会话状态管理**是高频痛点。
- **浏览器控制错误**：多个 Windows 用户反映“Cannot redefine property: process”（#32941、#33004），导致 Chrome 插件与 App 的浏览器控制初始化失败。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-15

## 今日速览

今日发布夜间版 v0.52.0-nightly。社区最强烈投诉的“配额自动消耗”问题（#26860）持续发酵，同时安全团队紧急合并了阻止 shell 变量注入的修复（PR #28403）。此外，多项关于代理行为矫正、输出上限和推理轮次限制的 PR 正在推进，社区对代理稳定性与安全性的关注度明显上升。

---

## 版本发布

- **[v0.52.0-nightly.20260715.gfa975395b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260715.gfa975395b)**  
  常规夜间版更新，不包含重大功能变更。  
  [完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260714.gfa975395b...v0.52.0-nightly.20260715.gfa975395b)

---

## 社区热点 Issues（10 条）

1. **#26860 – 配额被自动消耗，用户极度不满**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/26860)  
   **摘要**：用户发现未发起任何请求，配额却从 15% 升至 28%，问题持续两月未修复。社区 13 条评论，用户情绪激烈。  
   **标签**：p2 / bug / Stale

2. **#22323 – 子代理达到最大轮次后错误报告“成功”**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/22323)  
   **摘要**：`codebase_investigator` 子代理已触发 `MAX_TURNS`，却仍返回 `Termination Reason: "GOAL"`，误导主流程。  
   **标签**：p1 / bug / 维护者内部

3. **#25166 – Shell 命令执行后卡死“等待输入”**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/25166)  
   **摘要**：执行简单 CLI 命令后，CLI 显示“Awaiting user input”并永久挂起。4 条评论，3 个 👍。  
   **标签**：p1 / bug / core

4. **#23039 – macOS M4 Pro 上无限重启循环（Exit Code 41）**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/23039)  
   **摘要**：Agent 模式在 M4 Pro / Sequoia 上崩溃并无限重启，普通聊天正常。6 条评论。  
   **标签**：p3 / bug / macOS

5. **#25872 – Yolo 模式下浏览器代理仍需反复批准**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/25872)  
   **摘要**：即使启用 `yolo` 模式，浏览器代理每次工具调用都要求人类确认，失去自动运行初衷。8 条评论。  
   **标签**：p2 / bug / browser

6. **#21968 – Gemini 几乎不主动使用自定义技能和子代理**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/21968)  
   **摘要**：用户配置了 gradle、git 等技能，Gemini 仍用通用方法执行，除非显式指令。6 条评论。  
   **标签**：p2 / bug / agent

7. **#24208 – 非免费用户频繁 429 错误，模型响应极慢**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/24208)  
   **摘要**：付费用户遭遇持续限流，官方未予理睬，社区调侃“像被读了已读不回”。5 条评论。  
   **标签**：p2 / bug / enterprise

8. **#26522 – 自动记忆系统对低信号会话无限重试**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/26522)  
   **摘要**：由于提取代理跳过低信号会话，其索引未被标记为“已处理”，导致后续反复重试。5 条评论。  
   **标签**：p2 / bug / memory

9. **#21983 – 浏览器子代理在 Wayland 环境下失败**  
   [链接](https://github.com/google-gemini/gemini-cli/issues/21983)  
   **摘要**：在 Wayland 显示服务器上，浏览器代理启动即失败，报告 `GOAL` 但实际未工作。4 条评论。  
   **标签**：p1 / bug / browser / Wayland

10. **#22405 – CLI 首次命令后卡住不动**  
    [链接](https://github.com/google-gemini/gemini-cli/issues/22405)  
    **摘要**：登录正常，所有模型均如此。10 条评论，4 个 👍，用户表示上周还能用。  
    **标签**：p3 / bug / agent / need-retesting

---

## 重要 PR 进展（10 条）

1. **[#28403] fix(core): 阻止 `$VAR` 变量注入绕过**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28403)  
   **描述**：原有检测只拦截 `$()` 和反引号，现补充对 `$VAR` 和 `${VAR}` 的检查，修复 GHSA-wpqr-6v78-jr5g 安全漏洞。  
   **状态**：Open

2. **[#28401] fix(shell): 限制命令输出长度**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28401)  
   **描述**：设置输出上限，避免 `find /` 等大输出淹没模型上下文，防止令牌浪费和响应降级。  
   **状态**：Open（p1 / agent）

3. **[#28164] fix(core): 限制单次请求推理轮次上限**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28164)  
   **描述**：默认每轮用户请求最多 15 次推理循环，可配置，防止无限递归耗尽 CPU 和配额。  
   **状态**：Open（help wanted）

4. **[#28305] feat(evals): 添加工具调用格式化与失败摘要**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28305)  
   **描述**：评估失败时自动输出紧凑的时间轴（含参数、状态和错误），提升调试效率。  
   **状态**：Open

5. **[#28319] refactor(a2a-server): 路径信任检查与环境隔离**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28319)  
   **描述**：重构 `CoderAgentExecutor` 初始化流程，确保在加载工作区环境变量前完成路径信任校验，并引入 `AsyncLocalStorage` 隔离任务环境。  
   **状态**：Open

6. **[#24303] feat(diagnostics): 原生 V8 内存与性能分析套件**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/24303)  
   **描述**：GSoC 2026 提案，为 CLI 添加终端集成的性能与内存检查工具，便于定位内存泄漏。  
   **状态**：Open（维护者内部）

7. **[#28404] fix(core): 覆盖 genai 依赖中 google-auth-library 版本至 10.9.0**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28404)  
   **描述**：解决因上游依赖版本冲突导致的认证问题。  
   **状态**：Open

8. **[#28224] fix(cli): 避免截断显示字符串时分裂 emoji**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28224)  
   **描述**：使用 `str.length` 截断可能导致多字节 emoji 被拆分并显示乱码。改用更安全的截断方式。  
   **状态**：已合并

9. **[#28219] fix(cli): 支持读取带注释的 settings.json**  
   [链接](https://github.com/google-gemini/gemini-cli/pull/28219)  
   **描述**：父进程无法解析 JSONC 格式的配置文件时静默回退到默认值，现改用宽松解析。  
   **状态**：已合并

10. **[#28402] chore: 自动版本提升至 nightly**  
    [链接](https://github.com/google-gemini/gemini-cli/pull/28402)  
    **描述**：每日自动化发布的版本标记，无功能变更。  
    **状态**：Open

---

## 功能需求趋势

从所有 Issues 和 PR 中可以提炼出社区最关注的 5 个功能方向：

1. **代理行为可预测性与安全性**  
   - 阻止破坏性 git 操作（#22672）、绕过安全提示执行任意命令（PR #28403）、自动限制推理轮次（PR #28164）  
2. **浏览器代理增强**  
   - 无缝接管会话、锁恢复（#22232）、尊重用户配置中的 `maxTurns`（#22267）、Wayland 兼容（#21983）  
3. **自动记忆系统改进**  
   - 低信号会话跳过标记（#26522）、确定化脱敏与减少日志（#26525）、无效补丁隔离（#26523）  
4. **代码理解深度提升**  
   - AST 感知的文件读取与搜索（#22745、#22746）、组件级评估（#24353）  
5. **性能与成本控制**  
   - 命令输出上限（PR #28401）、减少令牌浪费（#25166）、限制子代理执行次数（#22323）、更好的限流反馈（#24208）

---

## 开发者关注点

- **配额神秘消耗**：多用户反馈未主动请求却持续扣减配额（#26860），严重削弱付费体验，官方尚无回复。  
- **代理“装死”问题**：执行命令后不返回结果（#25166）、首次思考后卡死（#22405）、无限重启（#23039），高频出现且影响日常工作流。  
- **安全漏洞阴影**：Shell 变量注入漏洞修复虽已提交（#28403），但社区担忧类似绕过仍可能存在，期待全面审计。  
- **Yolo 模式名不副实**：用户期望完全自动化，但浏览器代理仍需人工批准（#25872），降低自动化价值。  
- **Token 浪费**：命令输出无限制灌入上下文（PR #28401），以及自动记忆无限重试（#26522），导致 API 成本上升和响应变慢。  
- **平台兼容性**：macOS M4 Pro（#23039）、Wayland（#21983）仍有阻塞性 bug，影响特定硬件用户群体。

---

*数据来源：GitHub `google-gemini/gemini-cli` | 统计周期：2026-07-14 ~ 2026-07-15*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-15

## 今日速览

昨日迎来两个小版本迭代（v1.0.71-1 / v1.0.71-2），主要强化了语音模式、插件市场与 MCP 工具配置持久化。社区侧活跃度极高，24 小时内涌入了近 20 条新 issue，其中多个涉及会话持久化、应用画面渲染、ACP 协议兼容等核心痛点。此外，`#4118`（`/app` 不默认选择当前目录）在短时间内获得 33 个 👍，反映出用户对 CLI ↔ 桌面应用协作体验的强烈需求。

## 版本发布

### v1.0.71-2
- **新增**：`/voice devices` 子命令，可选择并持久化语音模式的麦克风设备
- **新增**：限制内置 agent 在任务与子 agent 中的可用性，提高安全性
- **新增**：支持 CLI 中基于扩展的画布（Canvas）交互
- **改进**：改进 `/chronicle cost-tips` 成本建议，提供更丰富的成本画像

### v1.0.71-1
- **新增**：通过 `settings.json` 持久化 GitHub MCP 工具集/工具配置（`githubMcpToolsets`、`githubMcpTools` 等）
- **新增**：`plugins marketplace` 子命令，支持列出、添加、删除插件市场
- **新增**：重启后持久化侧边栏会话状态
- **新增**：插件市场的浏览与更新命令
- **拆分**：部分功能拆分

## 社区热点 Issues（精选 10 条）

### 1. [#1274 – CLI 持续收到 400 错误：无效请求体](https://github.com/github/copilot-cli/issues/1274)
- **标签**：`area:tools`，**状态**：OPEN，**评论**：26，**👍**：11
- **重要性**：高频报错，近 95% 的代码审查请求均返回 400，严重影响核心功能。社区怀疑是服务端校验或 CLI 构造请求有误，严重阻塞日常使用。

### 2. [#4024 – 语音模式：所有内置 ASR 模型静默失败](https://github.com/github/copilot-cli/issues/4024)
- **标签**：`area:models`，**状态**：OPEN，**评论**：8，**👍**：0
- **重要性**：用户录制音频成功但转录始终为空，涉及 `nemotron` 系列三个模型。疑似 `MultiModalProcessor` 路由 bug，对语音交互构成致命缺陷。

### 3. [#443 – 功能请求：内置 PDF 阅读支持](https://github.com/github/copilot-cli/issues/443)
- **标签**：`area:tools`，**状态**：OPEN，**评论**：5，**👍**：33
- **重要性**：长期高赞需求（33 个 👍）。用户需手动安装 `pdftotext` 等工具才能处理 PDF，缺少原生支持限制了学术论文、技术文档等场景。

### 4. [#2165 – Ubuntu 密钥环支持损坏](https://github.com/github/copilot-cli/issues/2165)
- **标签**：`area:platform-linux, area:authentication`，**状态**：OPEN，**评论**：3，**👍**：21
- **重要性**：21 个 👍 表明 Linux 用户普遍受此困扰。文档错误、`secret-tool` 未安装导致认证失败，影响 Ubuntu 下 CLI 的登录体验。

### 5. [#4096 – 第三方 MCP 服务器显示“已连接”，但工具在 CLI 会话中缺失](https://github.com/github/copilot-cli/issues/4096)
- **标签**：`area:authentication, area:mcp`，**状态**：OPEN，**评论**：3，**👍**：2
- **重要性**：OAuth token 未正确桥接到 CLI 会话，导致 Atlassian Remote MCP 等集成无法使用，影响 MCP 生态的落地。

### 6. [#4097 – `apply_patch` 删除二进制文件后，会话历史永久超出 CAPI 5 MB 限制](https://github.com/github/copilot-cli/issues/4097)
- **标签**：`area:sessions, area:context-memory, area:tools`，**状态**：OPEN，**评论**：1，**👍**：1
- **重要性**：高危 bug。删除大文件时存储完整二进制 diff，导致会话累积超限，`/compact` 也无法缓解，属于严重的资源失控问题。

### 7. [#4054 – `/resume` 对非 GitHub 仓库（如 Azure DevOps）及非 Git 会话无效](https://github.com/github/copilot-cli/issues/4054)
- **标签**：`area:sessions`，**状态**：OPEN，**评论**：1，**👍**：0
- **重要性**：GitHub-centric 设计限制了企业用户（大量使用 ADO）的会话恢复能力，是平台兼容性的硬伤。

### 8. [#4118 – `/app` 命令不默认选择当前工作目录](https://github.com/github/copilot-cli/issues/4118)
- **标签**：`triage`，**状态**：OPEN，**评论**：0，**👍**：33
- **重要性**：发布不到一天即获 33 个 👍，是今日最热 issue。用户期望从 CLI 启动桌面应用时自动带入当前目录，无需手动浏览。

### 9. [#4127 – 用户 `user.abort` 事件取消后台 agent](https://github.com/github/copilot-cli/issues/4127)
- **标签**：`triage`，**状态**：OPEN，**评论**：0，**👍**：0
- **重要性**：新发现的架构问题：提交新 turn 时意外取消后台 agent，导致异步任务丢失且 agent ID 无法恢复，对多 agent 协作场景影响大。

### 10. [#4122 – 子 agent 解析相对 Markdown 链接时路径错误](https://github.com/github/copilot-cli/issues/4122)
- **标签**：`triage`，**状态**：OPEN，**评论**：0，**👍**：1
- **重要性**：自定义 agent 定义中引用的支持文档因路径解析错误无法加载，阻碍团队复用和维护 `.agent.md` 文件。

## 重要 PR 进展

过去 24 小时内无新 PR 或更新 PR。

## 功能需求趋势

从所有 Issues 中提炼出社区最关注的功能方向：

1. **语音与多模态增强**：`/voice` 模式下 ASR 模型失效、麦克风设备选择等，表明用户希望 CLI 成为真正的语音助手入口。
2. **深度 MCP 与插件生态**：第三方 MCP 工具桥接失败、插件市场功能（已在新版本中加入）以及 OAuth 认证短板，反映出生态扩展是当前重点。
3. **会话持久化与恢复**：会话丢失（`#4115`）、`/resume` 不支持非 GitHub 仓库、二进制 diff 导致超限，用户对会话可靠性要求极高。
4. **跨平台与集成体验**：Ubuntu 密钥环、Windows 更新后进程僵尸、macOS Dock 显示 Python、Snap 剪贴板权限等，平台兼容性需求密集。
5. **CLI 与桌面端协同**：`/app` 目录选择、画布（Canvas）渲染等，用户希望在终端和 GUI 间无缝切换。
6. **可定制性**：颜色主题自定义、输入框样式、提示交互（如双击 Enter 中断）等提升工作流体验的需求增多。

## 开发者关注点

- **400 错误泛滥**：`#1274` 是当前最突出的 bug，影响代码审查和日常对话，社区迫切期待修复。
- **会话大小失控**：`#4097` 指出 `apply_patch` 将删除的二进制文件全文存入历史，导致 5 MB 限制被突破，属于严重的内存/网络隐患。
- **认证与密钥管理**：Linux 密钥环（`#2165`）、第三方 MCP OAuth 桥接（`#4096`）、Git 凭据被禁用（`#4103`）是高频痛点。
- **忽略 `AGENTS.MD`/`memory`**：`#4123` 用户投诉 CLI 显式忽略自定义指令，影响 agent 的可靠性。
- **交互细节**：右键复制会连带边框字符（`#4116`）、`ctrl+x→b` 无法中断阻塞调用（`#4110`）、确认卡片无法关闭（`#4114`）等细微但频繁的体验问题。

> 以上日报基于 `github/copilot-cli` 2026-07-15 数据生成。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-15

> 数据来源：GitHub [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)
> 统计周期：过去 24 小时（2026-07-14）

---

## 今日速览

过去 24 小时内无新版本发布，但社区修复闭环加速：3 个 Pull Request 被合并，主要聚焦于 **Kimi 推理参数透传** 和 **上下文窗口预算动态化**。Issues 方面，一个关于组织级 TPD 限流的 Bug 持续被关注，另一个关于 fork 会话恢复导致输出损坏的问题已关闭（已修复）。

---

## 版本发布

无

---

## 社区热点 Issues（共 2 条）

### 1. [Bug] 组织级 TPD 限流，当前：1,505,241
- **Issue #2318**（[链接](https://github.com/MoonshotAI/kimi-cli/issues/2318)）
- **状态**：OPEN（创建 2026-05-18，更新 2026-07-14）
- **摘要**：使用 `kimi 2.6` 版本、`moonshot.ai` 平台及 `kimi2.6` 模型时，请求触发了组织级 TPD（每日 Token 处理量）限流。当前限流计数器高至 1,505,241，疑似 TPD 计算存在错误。
- **社区反应**：1 个评论，1 个 👍。该 Issue 自 5 月创建来近期再次被更新，说明仍在排查或等待修复，对使用 Kimi 2.6 模型的高频用户影响较大。

### 2. [Bug] fork 会话恢复导致输出损坏 (已修复)
- **Issue #2496**（[链接](https://github.com/MoonshotAI/kimi-cli/issues/2496)）
- **状态**：CLOSED（创建 2026-07-13，更新 2026-07-14）
- **摘要**：使用 `kimi 1.36.0` 版本、`kimi-for-coding` 模型时，通过 `kimi -r` 恢复一个 fork 会话会产生乱码或输出损坏。
- **社区反应**：无评论和点赞，但该 Issue 在 1 天内被创建并关闭，说明已被对应 PR 修复（见下文 PR #2494 相关？）。用户 KevinWang 反馈了明确的复现环境。

---

## 重要 PR 进展（共 3 条，全部于 2026-07-14 合并）

### 1. fix(kosong): 停止隐式发送 Kimi reasoning_effort 参数
- **PR #2499**（[链接](https://github.com/MoonshotAI/kimi-cli/pull/2499)）
- **作者**：RealKai42
- **摘要**：修复了在配置 `thinking.type` 时，会不必要地序列化遗留 `reasoning_effort` 参数的问题。现在调用者提供的 thinking effort 会作为独立 provider 状态精确保留，不再进行隐式钳位或反向映射。
- **意义**：增强了推理参数配置的透明度和准确性，避免因参数冲突导致异常。

### 2. fix(kosong): 保留空字符串 reasoning_content 作为 ThinkPart
- **PR #2498**（[链接](https://github.com/MoonshotAI/kimi-cli/pull/2498)）
- **作者**：bigeagle
- **摘要**：部分模型（如 `coding-model-okapi-0711-vibe`）在 assistant 消息中缺少 `reasoning_content` 字段时返回 400 错误。此 PR 将空字符串的 `reasoning_content` 正确地作为 `ThinkPart` 处理，避免空字段丢失导致 API 拒绝。
- **意义**：修复了因模型返回格式不一致导致的服务端 400 错误，提升了稳定性和兼容性。

### 3. fix(kimi): 使用剩余上下文作为 completion budget 默认值
- **PR #2494**（[链接](https://github.com/MoonshotAI/kimi-cli/pull/2494)）
- **作者**：RealKai42
- **摘要**：将 Kimi 请求的默认 completion budget 从固定的 32k provider 上限改为使用模型剩余上下文窗口大小。该动态限制仅应用于 Kimi 请求（包括被 ChaosChatProvider 包装的 Kimi），不影响其他 provider 及 `kosong.generate/step`。
- **意义**：更合理的资源分配，充分利用上下文长度，同时避免超出上下文窗口限制。对于长对话场景效果显著。

---

## 功能需求趋势

基于近期 Issues 和 PR 动向，社区关注的核心方向包括：

- **推理参数精确控制**：用户希望更透明地设置 `thinking` 相关参数，避免遗留参数的自动注入，PR #2499 和 #2498 直接回应了这一诉求。
- **上下文窗口的动态利用**：固定上限（如 32k）无法适应不同模型和对话长度，动态 completion budget（PR #2494）成为主流优化方向。
- **限流与配额透明度**：Issue #2318 暴露了组织级 TPD 限流统计潜在的 Bug，社区对配额计算的可视化和准确性有更严格要求。
- **会话恢复稳定性**：fork 会话的恢复（Issue #2496）曾出现输出损坏，这类核心流程的可靠性是高频使用者的底线需求。

---

## 开发者关注点

从近期反馈中总结出开发者的直接痛点：

1. **TPD 限流统计错误**：部分用户遭遇组织级速率限制，且当前限流数值异常高（150万+），怀疑内部计算逻辑有误，影响正常使用。
2. **模型返回格式兼容性**：不同 Kimi 模型在助理消息中是否提供 `reasoning_content` 字段并不一致，导致原本流畅的工作流被 400 错误打断（PR #2498 修复）。
3. **推理努力参数的隐式修改**：开发者期望自己传入的 `reasoning_effort` 被原样传递，而非被隐式钳位或重新映射，这一修复降低了调试排查的难度。
4. **固定上下文预算的浪费**：固定 32k 上限无法利用大模型的完整上下文，开发者呼吁更智能的预算分配策略（PR #2494 已落地）。

---

*日报由 AI 自动生成，仅供参考。如需进一步讨论，可访问对应 GitHub 链接参与社区讨论。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已经根据您提供的 GitHub 数据，为您整理出 2026 年 7 月 15 日的 OpenCode 社区动态日报。

---

## 📰 OpenCode 社区动态日报 | 2026-07-15

### 1. 今日速览

今日社区的核心焦点是 **OpenCode Desktop v2 新 UI 迁移**带来的阵痛。虽然 v1.18.1 修复了部分迁移问题，但大量用户反馈新布局隐藏了关键的 Agent（Plan/Build）切换功能，导致工作流受阻。与此同时，社区对新功能的贡献依然活跃，多个针对会话管理的 PR 正在推进。此外，对原生 Claude Code 钩子兼容性的呼声持续高涨。

### 2. 版本发布

**桌面端 v1.18.1 发布**
- **链接**: [v1.18.1 Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.1)
- **主要内容**: 此版本主要是一个热修复版本，修复了 `v1.18.0` 推出新布局后的一些问题。
    - **Bug 修复**:
        - 修正了设置中模型提供商分区之间的间距问题。

**桌面端 v1.18.0 发布**
- **链接**: [v1.18.0 Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.0)
- **主要内容**: 此版本完成了 **Desktop v2 迁移**，是一次重大的 UI 和架构更新。
    - **功能改进**:
        - 完成了 Desktop v2 迁移，包括对全新布局和首次启动引导的处理。
        - 提供了在过渡期间切换新旧布局的设置选项。
    - **Bug 修复**:
        - 修复了文件视图使用了错误背景色的问题。

### 3. 社区热点 Issues (Top 10)

这里，对新 UI 的抱怨占据了主导地位，同时一些深层次的功能请求也备受关注。

1.  **[BUG] "Upstream idle timeout exceeded"** ([#28957](https://github.com/anomalyco/opencode/issues/28957))
    - **热度**: 评论数最多 (20 条)，👍 3
    - **摘要**: 用户在执行 `writing-plans` 技能时，遭遇了“上游空闲连接超时”错误。这似乎是一个基础设施问题，但在特定情景下触发。
    - **社区反应**: 虽然创建较早（5月），但近期用户仍在更新，表明该问题在某些环境下仍未根除，亟需官方排查。

2.  **[FEATURE]Native Claude Code hooks compatibility** ([#12472](https://github.com/anomalyco/opencode/issues/12472))
    - **热度**: 👍 37 (最高赞)，评论 16 条
    - **摘要**: 用户要求 OpenCode 支持 Claude Code 自定义的 Hooks 系统（如 `PreToolUse`、`PostToolUse` 等）。目前 OpenCode 已兼容规则和技能，但 Hooks 是下一个关键集成点。
    - **社区反应**: 这个 issue 被广泛关注，是目前社区最有价值的呼声之一。它代表了社区对 **无缝迁移** 和 **高级定制能力** 的强烈渴望。

3.  **[FEATURE]Expose GitHub Copilot "Auto" option in model selector** ([#25239](https://github.com/anomalyco/opencode/issues/25239))
    - **热度**: 👍 14，评论 16 条
    - **摘要**: 用户希望 OpenCode 的模型选择器中能增加一个类似于 GitHub Copilot 的“Auto”智能推荐选项。
    - **社区反应**: 用户对更智能、更简洁的模型选择体验有明确需求，这能降低模型选择的认知负担。

4.  **[BUG] Desktop: wtf is the new tab layout** ([#36936](https://github.com/anomalyco/opencode/issues/36936))
    - **热度**: 👍 6，评论 10 条
    - **摘要**: 强烈吐槽 v1.18.0 新布局的标签页设计。标签页标题显示不全，导致用户无法辨认多个会话，严重影响日常工作流。
    - **社区反应**: 反应强烈，用户直接要求回退至 1.17 版本。这是新 UI 设计失败的典型案例。

5.  **[Bug] Desktop App v1.18.1 new layout hides agent (Plan/Build) switching UI** ([#36997](https://github.com/anomalyco/opencode/issues/36997))
    - **热度**: 今日创建，评论 6 条
    - **摘要**: 报告 v1.18.1 新布局中，用于切换 Agent（Plan/Build 模式）的关键 UI 被隐藏了。用户无法知晓当前处于哪种模式，也无法切换，`Tab` 键切换也受影响。
    - **社区反应**: 这是 **今日最严重的 Bug**，直接导致核心功能不可用。多个 Issue 都在反馈同类问题，表明 v2 UI 存在严重的可用性回归。

6.  **[FEATURE]:为什么要取消任务侧边栏，转而使用一个页面** ([#36986](https://github.com/anomalyco/opencode/issues/36986))
    - **热度**: 评论 6 条
    - **摘要**: 中文用户对 v2 UI 取消任务侧边栏、改为独立页面的做法提出质疑，认为这增加了操作步骤，降低了效率。
    - **社区反应**: 代表了高级用户对界面高效性的追求，认为侧边栏比单独页面更有利于多任务并行。

7.  **[Bug]: Agents not visible when switching with Ctrl+. + folders not expanding** ([#36979](https://github.com/anomalyco/opencode/issues/36979))
    - **热度**: 评论 5 条
    - **摘要**: Windows 用户在 v1.18.1 上报告了两个 UI 问题：使用快捷键切换 Agent 时无视觉反馈；中央文件浏览器无法展开文件夹。
    - **社区反应**: 该 Issue 进一步证实了 v2 UI 迁移在细节处理上问题频出，尤其是在不同平台上的表现。

8.  **[Bug] Session history not loading on home page using a VPS as server** ([#36971](https://github.com/anomalyco/opencode/issues/36971))
    - **热度**: 评论 4 条
    - **摘要**: 对于远程 VPS 用户，v1.18.1 更新后，主页无法加载会话历史记录，导致用户完全无法访问之前的聊天内容。
    - **社区反应**: 这是一个影响用户数据访问的关键问题，对于将服务部署在服务器上的用户是灾难性的。

9.  **[Bug] macOS x64 "baseline" binary requires AVX2/FMA** ([#29039](https://github.com/anomalyco/opencode/issues/29039))
    - **热度**: 长期 Issue，今日有更新，评论 4 条
    - **摘要**: macOS 上的“baseline”版本二进制文件强制要求 AVX2/FMA 指令集，导致在较老的 Ivy Bridge CPU（如 Core i7-3520M）上直接崩溃。
    - **社区反应**: 虽然创建较早，但今日的更新表明，老硬件兼容性问题仍未解决，影响部分用户的可用性。

10. **[Bug] GLM-5.2 中文流式输出 SSE chunk 碎片化** ([#36021](https://github.com/anomalyco/opencode/issues/36021))
    - **热度**: 评论 2 条
    - **摘要**: 中文用户反馈，使用 GLM-5.2 模型时，SSE 流式输出的中文被拆分成极小的碎片（1-3 汉字），导致客户端频繁换行，输出效果不佳。
    - **社区反应**: 该问题直指模型集成和流式处理的深度技术细节，对国内使用特定模型的开发者影响较大。

### 4. 重要 PR 进展 (Top 10)

1.  **fix(app): tolerate null session archive times** ([#36999](https://github.com/anomalyco/opencode/pull/36999))
    - **内容**: 修复了当远端服务返回 `null` 的归档时间时，会话列表不显示的问题。这是一个关键的向前兼容性修复。
    - **重要性**: 高。直接解决了 [#36971](https://github.com/anomalyco/opencode/issues/36971) 等问题的潜在根因，提升了与异构后端的兼容性。

2.  **refactor(llm): replace LLMError reasons with flat tagged union** ([#36691](https://github.com/anomalyco/opencode/pull/36691))
    - **内容**: 对 LLM 错误处理系统进行重大重构，将错误原因改为扁平化的标签联合体。
    - **重要性**: 中。这是一个深层次的架构优化，能让错误处理更精确、更易于扩展，为未来支持更多模型奠定基础。

3.  **fix(core): expand reasoning option variants** ([#36894](https://github.com/anomalyco/opencode/pull/36894))
    - **内容**: 扩展了各模型提供商的推理能力和预算映射，并添加了条件切换变体。
    - **重要性**: 高。这直接改善了用户对模型推理过程的控制粒度，是提升高级用户使用体验的重要步骤。

4.  **fix(codemode): canonicalize dotted tool paths** ([#36994](https://github.com/anomalyco/opencode/pull/36994))
    - **内容**: 修复了工具名称包含点时，路径解析失败导致工具无法使用的 Bug。
    - **重要性**: 高。这是一个精细但致命的 bug 修复，确保了工具系统的稳定性和 API 设计的灵活性。

5.  **refactor(tui): extract V1 theme definitions** ([#36969](https://github.com/anomalyco/opencode/pull/36969))
    - **内容**: 将旧的 V1 主题定义抽取出来，为 V2 主题系统的迁移做准备。
    - **重要性**: 中。这是 UI 重构计划的必要一环，为未来的现代化主题系统铺平道路。

6.  **fix(core): tolerate AlreadyExists in FSUtil.ensureDir** ([#36542](https://github.com/anomalyco/opencode/pull/36542))
    - **内容**: 修复了由于文件系统竞态条件，在并发场景下 `ensureDir` 因目录已存在而报错的问题。
    - **重要性**: 中。提升了文件系统操作的健壮性和可靠性。

7.  **fix(core): restore default model headers** ([#36975](https://github.com/anomalyco/opencode/pull/36975)
    - **内容**: 恢复默认的模型请求头，如会话亲和性、用户代理等，以确保与 V1 行为一致。
    - **重要性**: 高。这修复了 v2 迁移过程中可能丢失的向后兼容性，对依赖特定请求头的用户和插件至关重要。

8.  **perf(codemode): batch OpenAPI query parameters** ([#36978](https://github.com/anomalyco/opencode/pull/36978))
    - **内容**: 优化了 OpenAPI 查询参数的序列化方式，采用批量追加，避免二次幂重建。
    - **重要性**: 中。这是一个典型的性能优化，对于频繁调用 API 的场景会有显著提升。

9.  **feat(app): add archived sessions browser dialog** ([#36968](https://github.com/anomalyco/opencode/pull/36968) 等 5 个 feat)
    - **内容**: 由社区贡献者 `ohsalmeron` 提交了一系列 UX 改进，包括：归档会话浏览对话框、删除会话确认、侧边栏内联重命名、回复 Fork 按钮、一键上下文压缩按钮。
    - **重要性**: 中-高。这些 PR 集中回应了社区对会话管理的长期诉求，一口气解决了多个痛点 (`#36963`、`#36962` 等)，体现了社区贡献的高活力。

10. **fix(opencode): read cache write tokens from raw usage** ([#36752](https://github.com/anomalyco/opencode/pull/36752))
    - **内容**: 修复了通过 OpenAI 兼容网关使用 Anthropic 模型时，缓存写入费用被错误计算的问题。
    - **重要性**: 高。这直接影响了成本计费的准确性，对重度使用 Anthropic 模型的用户是“省钱”的关键修复。

### 5. 功能需求趋势

从今日的 Issues 和 PR 中，可以提炼出以下社区关注的功能方向：

- **Desktop v2 UI 的“救火”与优化**: 当前最大的需求是 **修复** v2 UI 带来的核心功能缺失（如 Agent 切换不可见、标签页截断）。社区对新 UI 的接受度较低，主要集中在功能回归而非美学改进。
- **原生 Claude Code 生态兼容**: 无论是自定义 Hooks 还是沿用已有的功能，社区强烈希望 OpenCode 能成为 Claude Code 的 **无缝替代方案**。这是 OpenCode 获取增量用户的关键策略。
- **会话管理的精细化**: 用户不满足于简单的聊天列表，而是需要强大的会话管理工具，如 **归档、重命名、分支（Fork）、一键压缩**。`ohsalmeron` 贡献的一系列 PR 恰好印证了这一点。
- **模型集成的深化与优化**: 从修复 GLM-5.2 的流式输出问题，到扩展各模型的推理能力选项，再到对 OpenAI 兼容网关的缓存计费修复，表明社区对 **模型兼容性、灵活性和准确计费** 有极高要求。
- **跨设备与远程 Server 的可靠体验**: 对 VPS 服务器会话历史丢失的 Bug 报告，凸显了用户在 **多端、远程、服务器化部署** 场景下的高标准。稳定的同步和数据访问是基石。

### 6. 开发者关注点

结合用户反馈，今天开发者的主要痛点集中在 v2 UI 迁移和突破性 Bug。

- **核心工作流断裂**: “Where is my Plan/Build button?” 是今天的核心灵魂拷问。v1.18.x 的新布局导致 Agent 切换、快捷键无响应，使得用户的核心编码工作流直接断裂。用户强烈要求要么修复，要么保留回退旧版的能力。
- **信息密度与效率降低**: 无论是标签页标题被截断、侧边栏被取消，还是文件浏览器不展开，开发者普遍认为新 UI 降低了信息密度和操作效率，出现了“脱裤子放屁”的不满情绪。
- **兼容性与稳定性问题**: 使用 VPS 和 Windows 平台的用户遭受了会话历史丢失和功能失效等严重问题。这表明 v2 迁移对边缘情况的处理不够充分，稳定性有待加强。
- **插件生态的脆弱性**: 有用户报告安装 `oh-my-opencode` 插件后导致客户端无法启动，暴露出插件系统的健壮性和安全隔离机制可能存在不足。
- **对“破坏性变更”的抵触**: 尽管 v2 迁移提供了新旧布局切换的选项，但默认启用并暴露了诸多问题，这种“硬切换”方式的变更管理引发了社区的强烈反弹。

---
*本日报由 AI 辅助生成，旨在为您提供快速准确的信息概览。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

好的，这是为你生成的 2026-07-15 Pi 社区动态日报。

---

# Pi 社区动态日报 | 2026-07-15

## 今日速览

今日社区焦点集中在 **v0.80.7 的 Breaking Change**，涉及会话亲和性配置的重大调整；与此同时，社区为解决 **OpenAI Codex 模型兼容性问题**（如 session-id 长度、模型 404）提交了多个修复；在功能需求方面，**音视频多模态支持**、**子代理扩展能力** 以及 **Amazon Bedrock 新模型接入** 是社区持续关注的热点。

## 版本发布

### **v0.80.7**
- **链接**: [v0.80.7 Release](https://github.com/earendil-works/pi/releases/tag/v0.80.7) *(假设链接)*
- **重要更新**: **Breaking Change!**
  - **配置变更**: 移除了 `models.json` 中的 `openai-responses` `compat.sendSessionIdHeader` 标志。会话亲和性（Session-affinity）行为现在由新的 `compat.sessionAffinityFormat` 参数控制。
  - **迁移指南**: 如果你之前使用了 `sendSessionIdHeader: false`，现在需要将其替换为 `sessionAffinityFormat: "openai-nosession"`。其他可用值包括 `"openai"`（默认）和 `"openrouter"`。

## 社区热点 Issues

1.  **[#5363] 新增Amazon Bedrock Mantle OpenAI兼容模型提供商**
    - **链接**: [Issue #5363](https://github.com/earendil-works/pi/issues/5363)
    - **摘要**: 社区强烈要求为 `packages/ai` 添加一个 `amazon-bedrock-mantle` 提供商。现有的 Bedrock 提供商使用 Converse API，而 Bedrock Mantle 模型使用不同的 OpenAI 兼容 API，无法兼容。该问题获得 8 个 👍 和 16 条评论，是近期最热门的特性请求之一。
    - **重要性**: **高**。这表明社区对扩展云服务商模型支持（特别是新推出的 Mantle API）有强烈需求。

2.  **[#6476] Bug: `httpIdleTimeoutMs` 在自托管 OpenAI 兼容提供商中失效**
    - **链接**: [Issue #6476](https://github.com/earendil-works/pi/issues/6476)
    - **摘要**: 用户反馈从 v0.80.3 升级到 v0.80.6 后，连接到自托管模型（如 vLLM）的请求会提前超时。尽管已显式设置了更大的 `httpIdleTimeoutMs` 值，仍会收到 `Error: The operation timed out` 错误。该问题被标记为 `inprogress`。
    - **重要性**: **高**。这是一个明显的回归问题，严重影响了使用本地/自托管模型的开发者。

3.  **[#6522] Bug: `max_completion_tokens` 缺少最小值限制导致 400 错误**
    - **链接**: [Issue #6522](https://github.com/earendil-works/pi/issues/6522)
    - **摘要**: 用户报告因为上游代理报告的上下文不准确，导致 Pi 自动计算出一个值为 1 的 `max_completion_tokens`，被上游 API 拒绝。问题在于 Pi 没有对 `max_completion_tokens` 设置下限。
    - **重要性**: **高**。这是一个直接导致 API 请求失败的 bug，影响范围较广。

4.  **[#6509] Feature: 扩展插件在底部栏报告额外费用**
    - **链接**: [Issue #6509](https://github.com/earendil-works/pi/issues/6509)
    - **摘要**: 提议添加 `ctx.ui.setUsage(key, usage)` 接口，允许子代理等扩展插件将它们在外部产生的 LLM 费用传回主会话，并在底部状态栏显示为 `$2.000 (+$1.500 ext)`。
    - **重要性**: **中高**。能显著提升扩展生态的费用透明度和用户体验，特别是对于复杂的代理工作流。

5.  **[#3200] Feature: 在 prompt 命令中支持视频/音频内容**
    - **链接**: [Issue #3200](https://github.com/earendil-works/pi/issues/3200)
    - **摘要**: 提议扩展 `prompt` RPC 命令，使其能像处理图片一样，将视频和音频内容转发给多模态大模型（如 Gemma 4, GPT-4o）。
    - **重要性**: **中高**。这是一个长期存在的需求（创建于 4月），反映了社区对多模态交互能力（特别是视频/音频）的持续关注。

6.  **[#6461] Feature: 为 xAI 添加 SuperGrok OAuth 登录**
    - **链接**: [Issue #6461](https://github.com/earendil-works/pi/issues/6461)
    - **摘要**: 用户希望 Pi 能像支持 Claude、Codex 一样，通过 OAuth 设备码登录 SuperGrok，而不是仅使用 API 密钥。已有相应 PR 提交（#6656）。
    - **重要性**: **中**。响应了付费订阅用户简化登录流程的需求，特别是 xAI 的模型质量得到社区认可后。

7.  **[#6600] Bug: `pi update --extensions` 被新版本 npm 阻塞**
    - **链接**: [Issue #6600](https://github.com/earendil-works/pi/issues/6600)
    - **摘要**: npm 11.16.0 默认禁止了安装脚本的执行，导致 Pi 的扩展更新流程（依赖于 npm 脚本）被阻塞。
    - **重要性**: **中高**。影响了所有使用最新 npm 版本的用户进行扩展更新，需要 Pi 适配新环境。

8.  **[#6621] Feature: 防止动态系统提示导致缓存失效**
    - **链接**: [Issue #6621](https://github.com/earendil-works/pi/issues/6621)
    - **摘要**: 用户在使用本地推理（如 AMD Strix Halo）时，因动态系统提示导致 LLM 缓存命中率下降，严重影响预填充速度。建议为系统提示增加一个稳定版本标识。
    - **重要性**: **中高**。对本地部署和高性价比推理场景的用户至关重要，直接关系到成本和响应速度。

9.  **[#5329] Feature: 暴露 Pi 等待用户输入的状态给主机集成**
    - **链接**: [Issue #5329](https://github.com/earendil-works/pi/issues/5329)
    - **摘要**: 主机集成（如 cmux）需要一个方法来区分 Pi 正在运行 AI 推理，还是等待用户对某个提示进行响应。
    - **重要性**: **中**。对改进 Pi 作为子进程运行时的交互体验和状态管理有积极意义。

10. **[#6655] Bug: 子代理静默超时导致长时间任务被杀死**
    - **链接**: [Issue #6655](https://github.com/earendil-works/pi/issues/6655)
    - **摘要**: 子代理扩展的默认 480 秒静默超时会杀死正在进行长任务的子代理，即使扩展自身有心跳机制。
    - **重要性**: **中高**。这是一个影响复杂代理任务可靠性的关键 bug，尤其是在使用子代理处理完整 Issue 时。

## 重要 PR 进展

1.  **[#6659] 修复: 截断 openai-codex 的 session-id 请求头**
    - **链接**: [PR #6659](https://github.com/earendil-works/pi/pull/6659)
    - **摘要**: 修复了 Issue #6630。将 `openai-codex` 的 `session-id` 和 `x-client-request-id` 请求头截断至 64 字符，与已截断的 `prompt_cache_key` 保持一致，解决了因 sessionId 过长导致请求失败的问题。

2.  **[#6656] 特性: 添加 xAI 订阅 OAuth 支持**
    - **链接**: [PR #6656](https://github.com/earendil-works/pi/pull/6656)
    - **摘要**: 为 Issue #6626 实现。添加了 xAI 的 OAuth 登录支持，但暂未包含 Grok 的附加工具（如图片生成）。

3.  **[#6651] 特性: 添加 xAI OAuth 并将 grok-4.5 路由至 Responses API**
    - **链接**: [PR #6651](https://github.com/earendil-works/pi/pull/6651)
    - **摘要**: 为实现 Issue #6461 的另一个 PR。添加了 xAI 设备码 OAuth，并将 `grok-4.5` 模型路由至 OpenAI Responses API 以支持推理能力。

4.  **[#6645] 修复: 停止向 OpenCode 的 OpenAI Responses 模型发送 session-id**
    - **链接**: [PR #6645](https://github.com/earendil-works/pi/pull/6645)
    - **摘要**: 修复了 Issue #6625。当使用 OpenCode Zen 提供商时，不再发送 `session_id` 等不支持的请求头，避免了 GPT-5.x 模型的 500 错误。

5.  **[#6594] 特性: SQLite 会话存储**
    - **链接**: [PR #6594](https://github.com/earendil-works/pi/pull/6594)
    - **摘要**: （进行中）一个重大的基础设施改进，引入了 SQLite 作为会话存储后端。有助于提升大数据量下的性能和内存管理。

6.  **[#6216] 特性: 添加 Amazon Bedrock Mantle 提供商**
    - **链接**: [PR #6216](https://github.com/earendil-works/pi/pull/6216)
    - **摘要**: （进行中）实现了 Issue #5363 的核心 PR，添加了对 Amazon Bedrock Mantle 的 OpenAI Responses API 支持，这是一个社区高度期待的新特性。

7.  **[#6584] 修复: 向摘要请求传递提供商选项**
    - **链接**: [PR #6584](https://github.com/earendil-works/pi/pull/6584)
    - **摘要**: 修复了 Issue #6555。确保会话压缩/摘要请求继承会话的传输设置（如 WebSocket），解决了因使用不同传输方式导致的模型访问问题。

8.  **[#6636] 特性: 刷新生成的模型目录**
    - **链接**: [PR #6636](https://github.com/earendil-works/pi/pull/6636)
    - **摘要**: 根据上游数据刷新了内置模型目录，新增了 GitHub Copilot 的 `gpt-5.6-luna`、`gpt-5.6-sol`、`gpt-5.6-terra` 等模型。

9.  **[#6635] 修复: 从 `content` 字段恢复 OpenAI 兼容模型的工具调用**
    - **链接**: [PR #6635](https://github.com/earendil-works/pi/pull/6635)
    - **摘要**: 修复了与 Ollama, LM Studio 等本地推理服务器的兼容性。当这些服务器将工具调用 JSON 放在 `content` 而非 `tool_calls` 字段时，Pi 现在也能正确识别和处理。

10. **[#6632] 修复: 关联 RPC 扩展结果**
    - **链接**: [PR #6632](https://github.com/earendil-works/pi/pull/6632)
    - **摘要**: 改进了扩展命令的 RPC 通信，将扩展的标准输出和错误与请求 ID 关联，使错误处理和反馈更加准确。

## 功能需求趋势

1.  **模型与提供商扩展**: 社区对 **Amazon Bedrock Mantle**、**xAI/SuperGrok OAuth**、**GitHub Copilot** 等新模型和提供商的支持呼声最高。这体现了用户渴望接入最前沿、最多样化的模型，并希望简化登录和付费流程。
2.  **多模态内容处理**: 除了传统的文本和图片，**音视频内容**在 prompt 命令中的支持需求持续存在。这预示着 Pi 正向着处理更复杂、更丰富的交互场景演进。
3.  **扩展生态增强**:
    - **子代理能力**: 社区希望扩展能更好地管理子代理，包括报告子代理的独立费用（#6509）和防止长时间任务被意外中断（#6655）。
    - **RPC 与集成**: 通过 RPC 暴露更多状态（如等待输入状态 #5329）和改善结果通信（#6632），以增强与宿主环境的集成能力。
4.  **性能与成本优化**: **提示缓存**（#5253, #6621）和本地推理性能（#6075 启动慢）是开发者持续关注的焦点。社区希望获得更好的缓存命中率和更快的推理速度。

## 开发者关注点

根据 Bug 和问题反馈，当前开发者的主要痛点和高频需求包括：

- **兼容性问题**: 升级后功能退化（#6476 超时），暴露了测试覆盖的不足。与特定服务器（OpenCode, OpenCode Zen, MiniMax）的协议不兼容问题（#6625, #6658）仍是高频修复点。
- **配置与 API 变更**: v0.80.7 的 Breaking Change 需要开发者关注迁移指南。session-id 长度限制（#6630）等细节问题也反映了 API 规范的重要性。
- **基础设施问题**: 新版本 npm 带来的兼容性（#6600），以及 Pi 自身的 Bug（如定时器超时 #6655, 崩溃日志路径硬编码 #6652）影响了用户体验。
- **模型特定问题**: 特定模型（如 `gpt-5.6-luna`）在不同提供商（OpenAI Codex, GitHub Copilot）下的访问问题集中爆发，表明模型路由和提供商适配的复杂性较高。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-15

---

## 今日速览

- **正式版 v0.19.10 发布**，带来了多工作区支持（ACP 传输、守护进程 worker、分屏会话等）；同时发布了配套的 TypeScript SDK v0.1.8。
- **社区对多工作区守护进程的 RFC（#6378）讨论热烈**（23 条评论），开发者期待统一管理多个项目空间；安全相关 Issue 集中爆发，包括 MCP 信任上下文传播、权限路径绕过等问题。
- **大量 PR 集中在 WebShell UI 改进、守护进程冷启动追踪、Shell 超时分类等关键优化**，团队正密集解决社区反馈的痛点和安全漏洞。

---

## 版本发布

### v0.19.10（正式版）

**Highlights**
- 多工作区支持现已覆盖 ACP 传输、守护进程 worker、分屏会话及工作区感知动作。
- 相关 PR：[#6621](https://github.com/QwenLM/qwen-code/pull/6621)、[#6635](https://github.com/QwenLM/qwen-code/pull/6635)、[#6746](https://github.com/QwenLM/qwen-code/pull/6746)

### v0.19.10-nightly.20260715.c538bd70d（每日构建）

- 文档优化：限制重复审查轮次后的 PR 范围（#6848）
- 新增 WebShell 工作区路径锁功能

### v0.19.9-preview.0（预览版）

- 包含与 nightly 相近的改动，为正式版做准备。

### sdk-typescript-v0.1.8（TypeScript SDK）

- 捆绑 CLI 版本 0.19.10，支持最新稳定功能。

---

## 社区热点 Issues（Top 10）

### 1. [#6378 – RFC: 支持单守护进程管理多个工作区](https://github.com/QwenLM/qwen-code/issues/6378)
- **重要性**：核心架构 RFC，现有模型为“1 守护 = 1 工作区 × N 会话”，社区希望扩展到多工作区，影响所有 daemon 用户。
- **社区反应**：23 条评论，讨论激烈，开发团队已部分实现（见 v0.19.10 Highlights），但仍需进一步讨论。

### 2. [#3696 – 全面的热重载系统（技能、扩展、MCP、配置）](https://github.com/QwenLM/qwen-code/issues/3696)
- **重要性**：影响开发效率的关键功能，允许运行时动态生效配置变更，无需重启会话。
- **社区反应**：已标记完成，但细节追踪中。

### 3. [#4748 – 优化守护进程冷启动和 qwen serve 快速路径延迟](https://github.com/QwenLM/qwen-code/issues/4748)
- **重要性**：daemon 启动耗时曾是瓶颈（2.5s vs CLI 0.7s），优化后仍需跟踪剩余差距。
- **社区反应**：开发团队持续跟进，5 条评论。

### 4. [#5979 – `/auth` 修改供应商配置后新会话仍报 401](https://github.com/QwenLM/qwen-code/issues/5979)
- **重要性**：认证配置在不重启时会话内生效，但新会话不继承，属于严重 UX 问题。
- **社区反应**：已关闭，5 条评论。

### 5. [#5219 – CI 集成测试未在 PR/合并时运行，回归只在发布时暴露](https://github.com/QwenLM/qwen-code/issues/5219)
- **重要性**：直接影响代码质量和发布稳定性，社区提出应提前运行测试。
- **社区反应**：已关闭，5 条评论。

### 6. [#6809 – Ctrl+S diff 预览在多行编辑时乱码](https://github.com/QwenLM/qwen-code/issues/6809)
- **重要性**：用户高频交互（权限对话框 diff）显示异常，影响日常使用。
- **社区反应**：4 条评论，待确认信息。

### 7. [#6149 – VP 模式打断链接交互，非 VP 模式内容溢出无法滚动](https://github.com/QwenLM/qwen-code/issues/6149)
- **重要性**：TUI 两种模式均有严重交互问题，影响体验。
- **社区反应**：4 条评论，待分类。

### 8. [#5239 – Subagent 与主会话通信机制弱，建议双向通信](https://github.com/QwenLM/qwen-code/issues/5239)
- **重要性**：多智能体场景下子任务完成无通知，主控无法感知子 agent 状态，用户被迫用文件监控绕行。
- **社区反应**：4 条评论，指向路线图 multi-agent 方向。

### 9. [#6914 – 分数值会话轮次/工具调用限制导致过早终止](https://github.com/QwenLM/qwen-code/issues/6914)
- **重要性**：配置验证缺失，0.5 这样的分数值通过验证但实际整数比较，导致会话被提前截断。
- **社区反应**：3 条评论，已提交 PR 修复。

### 10. [#6487 – `/remember` 后 Memory 索引陈旧，压缩后丢失](https://github.com/QwenLM/qwen-code/issues/6487)
- **重要性**：长期会话中记忆功能退化，影响连续对话质量。
- **社区反应**：3 条评论，欢迎 PR。

---

## 重要 PR 进展（Top 10）

### 1. [#6911 – feat(cli): 添加归档会话导出](https://github.com/QwenLM/qwen-code/pull/6911)
- **功能**：为已注册工作区提供只读的归档会话导出 REST 接口，支持 `GET /workspaces/:workspace/session/:id/archive/export`。

### 2. [#6854 – fix(core): 清理独立的关闭 thinking 标签](https://github.com/QwenLM/qwen-code/pull/6854)
- **修复**：当结构化推理后出现仅含 `</think>` 的可见通道时，抑制该标签，保留有效工具调用，避免断轮。

### 3. [#6846 – feat(core): 添加 PDF 视觉桥接回退](https://github.com/QwenLM/qwen-code/pull/6846)
- **功能**：为文本模型提供 PDF 视觉回退（通过 Vision Bridge），先提取文本，失败或单页过大时渲染转录。

### 4. [#6907 – feat(daemon): 追踪冷启动首次会话](https://github.com/QwenLM/qwen-code/pull/6907)
- **功能**：端到端跟踪 daemon 冷启动及首次会话建立耗时，帮助优化启动延迟。

### 5. [#6864 – fix(core): Shell 超时分类为工具错误](https://github.com/QwenLM/qwen-code/pull/6864)
- **修复**：前台 Shell 超时返回结构化 `EXECUTION_TIMEOUT` 错误，保留超时摘要、部分输出及截断指针。

### 6. [#6895 – feat(core): 传播受信任的调用上下文](https://github.com/QwenLM/qwen-code/pull/6895)
- **安全**：引入运行时 `InvocationContextV1`，识别 ingress、原生会话、根提示等，增强 MCP 信任链。

### 7. [#6923 – fix(core): 规范化限制性权限路径](https://github.com/QwenLM/qwen-code/pull/6923)
- **安全/修复**：文件权限规则现在比较工具提交的路径和规范化后的文件系统目标，解决 `..` 和符号链接绕过问题。

### 8. [#6899 – feat(cli): 更改默认审批模式为 auto](https://github.com/QwenLM/qwen-code/pull/6899)
- **体验**：将默认审批模式从 `default`（每次操作弹窗）改为 `auto`（LLM 分类器自动批准安全操作），减少弹窗干扰。

### 9. [#6893 – fix(core): 处理来自代理的未签名 Claude 推理块](https://github.com/QwenLM/qwen-code/pull/6893)
- **兼容性**：当非原生 Anthropic 端点返回无签名推理内容时，忽略该块，保留有效助手内容。

### 10. [#6880 – feat(web-shell): PR 自动发布视觉预览（截图 + 动图）](https://github.com/QwenLM/qwen-code/pull/6880)
- **CI/开发**：涉及 web-shell UI 的 PR 自动在评论中生成明/暗截图和流程 GIF，方便 reviewer 无需 checkout 即可查看渲染效果。

---

## 功能需求趋势

从过去 24 小时的 Issues 中，社区最关注的功能方向为：

1. **多工作区/守护进程管理**：RFC 讨论热度最高，开发者期望一个 daemon 管理多个项目，减少资源占用。
2. **热重载与运行时配置生效**：无需重启即可加载技能、扩展、MCP 变更，提升开发效率。
3. **安全与权限细粒度控制**：MCP 信任上下文传播、路径规范化、权限绕过修复成为当前修复重点。
4. **CI/CD 质量保证**：集成测试应在 PR 阶段运行，而非仅由 nightly 触发；自动视觉预览是正面实践。
5. **UI/UX 改进**：Diff 预览乱码、链接不可点、滚动问题、审批弹窗过多等“烦人”细节急需优化。
6. **Agent 通信机制**：子 agent 与主会话之间缺乏通知和双向通信，社区呼吁增强。
7. **外部集成扩展**：钉钉 Webhook 投递到单聊的需求（#6883）显示企业用户期望更多渠道支持。

---

## 开发者关注点

- **审批弹窗过多**：执行任务时每次工具调用都要弹窗确认，开发者希望仅在任务结束时统一提示（#6898），相关 PR #6922 已提出 `notificationMode` 配置。
- **升级检查不准确**：`/update` 命令在 v0.19.9 上报告“已是最新”，但实际 npm 已有 v0.19.10（#6857），PR #6887 正在修复。
- **内存增长无上限**：UI History 数组无限制增长，长时间会话后内存持续膨胀（#2128）。
- **多行编辑 Diff 乱码**：权限对话框中的 Diff 预览行被拼接（#6809），影响协作审批。
- **符号链接权限绕过**：文件权限规则不处理 `..` 和符号链接，存在安全隐患（#6915），PR #6923 正在修复。
- **冷启动延迟**：尽管已有优化，daemon 首次启动 + 首个会话耗时仍是用户痛点（#4748）。
- **记忆退化**：长期会话中 Memory 索引陈旧、压缩丢失内容（#6487），社区希望改进。

---

> 📎 所有链接均已附在对应条目中，可直接跳转 GitHub 查看详情。  
> 数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-07-15）

> 数据源：github.com/Hmbown/DeepSeek-TUI（代号 **CodeWhale**）

---

## 今日速览

- **核心性能修复落地**：`@` 文件索引导致终端卡死的 bug 已通过 PR #4367 修复，新增 wall‑clock 预算防止大目录扫描时 TUI 无响应。
- **MiniMax 新提供商正式合入**：PR #4354 为 DeepSeek TUI 添加了 MiniMax Messages 提供商，支持 M3 和 M2.7 模型，并附有完整定价元数据。
- **中文体验问题浮出水面**：多名中文用户反馈设置向导中“Constitution”被直译为“宪法”，且流式文本吐字速度远慢于模型响应，引发社区对本地化及终端渲染性能的讨论。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 社区热点 Issues（精选 10 条）

### 1. #4032 — Codewhale 不遵守“宪法”规则（OPEN）
- **作者：** stream2stream  
- **评论：** 35 👍: 0  
- **链接：** [Issue #4032](https://github.com/Hmbown/CodeWhale/issues/4032)  
**要点：** 用户事先提供了可执行脚本，但 Codewhale 仍自行编写临时脚本完成任务，且在被质疑时总能找到理由。这触及“Constitution”（用户规则）的执行机制，社区热度最高。

### 2. #4270 — 流式文本显示太慢（CLOSED）
- **作者：** AnonymousUser443  
- **评论：** 3  
- **链接：** [Issue #4270](https://github.com/Hmbown/CodeWhale/issues/4270)  
**要点：** 终端文字吐字速度远慢于模型输出（如 DeepSeek V‑Flash），且常出现输出完毕后突然“咻”地弹出大量文本。属于 TUI 渲染 pipeline 的关键性能瓶颈。

### 3. #4365 — `@` 文件监视导致终端卡顿/冻结（OPEN）
- **作者：** WavesMan  
- **评论：** 1  
- **链接：** [Issue #4365](https://github.com/Hmbown/CodeWhale/issues/4365)  
**要点：** 使用 `@` 监听非工作区的大目录时，模糊补全索引会同步拉取整个子树，在 pwsh7 下终端直接无响应。当日已通过 PR #4367 修复。

### 4. #4369 — [I18N] “Constitution” / “Code” 中文翻译不当（OPEN）
- **作者：** hmr-BH  
- **评论：** 1  
- **链接：** [Issue #4369](https://github.com/Hmbown/CodeWhale/issues/4369)  
**要点：** 设置向导中将规则（Constitution）翻译为“宪法”，代码（Code）翻译为“代”，不符合技术语境。属于本地化质量的一级反馈。

### 5. #4368 — 覆盖 Kimi baseUrl 时引发上下文限制（OPEN）
- **作者：** bruce6135  
- **评论：** 1  
- **链接：** [Issue #4368](https://github.com/Hmbown/CodeWhale/issues/4368)  
**要点：** 用户通过 `config.toml` 覆盖 Moonshot 下游 Kimi 服务的 baseUrl，但 TUI 未正确感知 provider 切换，导致上下文长度限制异常。

### 6. #4350 — Android Termux 下 Cargo 构建失败（CLOSED）
- **作者：** Michael2008S  
- **评论：** 2  
- **链接：** [Issue #4350](https://github.com/Hmbown/CodeWhale/issues/4350)  
**要点：** `rquickjs` 未提供 `aarch64‑linux‑android` 平台绑定，导致交叉编译失败。社区对移动端支持的需求持续存在。

### 7. #4345 — “key” 太不友好，不能放在终端内使用（CLOSED）
- **作者：** hutong9  
- **评论：** 2  
- **链接：** [Issue #4345](https://github.com/Hmbown/CodeWhale/issues/4345)  
**要点：** 用户反馈 API Key 配置需要跳出 TUI 在外部完成，不符合终端优先的工作流。希望能在 TUI 内直接输入 Key。

### 8. #4335 — 离线评分面板需感知 Provider 路由（CLOSED）
- **作者：** Hmbown  
- **评论：** 1  
- **链接：** [Issue #4335](https://github.com/Hmbown/CodeWhale/issues/4335)  
**要点：** 离线评分面板使用 model‑only 定价，忽略了实际 provider 路由，导致 OAuth 或不可度量的通道显示错误价格。已通过 PR #4351 修复。

### 9. #4318 — Cache‑write 费率被定价模块丢弃（CLOSED）
- **作者：** Hmbown  
- **评论：** 1  
- **链接：** [Issue #4318](https://github.com/Hmbown/CodeWhale/issues/4318)  
**要点：** Anthropic 等模型的 cache_write 写缓存成本是输入成本的 1.25~2x，但 `pricing.rs` 中硬编码为 0。金融类用户受影响严重。

### 10. #4208 — TUI 复制粘贴包含方框装饰字符（CLOSED）
- **作者：** eugenicum  
- **评论：** 2  
- **链接：** [Issue #4208](https://github.com/Hmbown/CodeWhale/issues/4208)  
**要点：** 从 TUI 终端复制文本时会带进 `█`、`╎`、`●` 等 Unicode 装饰符号，污染剪贴板内容。属于文本处理与终端渲染的交互缺陷。

---

## 重要 PR 进展（精选 10 条）

### 1. #3780 — 暴露上下文压缩门控配置（CLOSED）
- **作者：** nightt5879  
- **链接：** [PR #3780](https://github.com/Hmbown/CodeWhale/pull/3780)  
**内容：** 为 `config.toml` 增加 `[compaction].enabled` 和 `[seam_manager].enabled` 开关，替代原有的硬编码 `true`。用户现在可以按需关闭引擎级上下文压缩与 Seam 机制。

### 2. #4367 — 修复 `@` 文件索引卡顿（CLOSED）
- **作者：** LeoLin990405  
- **链接：** [PR #4367](https://github.com/Hmbown/CodeWhale/pull/4367)  
**内容：** 为非工作区目录的 `@` 补全索引增加 wall‑clock 预算，超过 500ms 后放弃扫描并回落至已有的本地结果。彻底解决大目录下的 TUI 冻结。

### 3. #4354 — 新增 MiniMax Messages 提供商（CLOSED）
- **作者：** octo‑patch  
- **链接：** [PR #4354](https://github.com/Hmbown/CodeWhale/pull/4354)  
**内容：** 完整的 MiniMax 集成，包括全局/中国 Base URL、M3 / M2.7 模型注册、上下文/模态/思考/定价元数据、路由与认证。扩展了 TUI 可调用的模型池。

### 4. #4351 — 评分面板成本绑定 Provider 路由（CLOSED）
- **作者：** nightt5879  
- **链接：** [PR #4351](https://github.com/Hmbown/CodeWhale/pull/4351)  
**内容：** 离线评分面板现在根据实际 provider+model 组合查价，OAuth、自定义、未知路由均会 `fail closed`，并暴露 `turn_end` 中的 provider 标识。

### 5. #4362 — 公共网站改为文档驱动（CLOSED）
- **作者：** Hmbown  
- **链接：** [PR #4362](https://github.com/Hmbown/CodeWhale/pull/4362)  
**内容：** 首页从市场/统计/提供商列表改为紧凑的文档入口，突出安装、运行时、提供商配置和版本指引。配合新的水下视觉系统提升可读性。

### 6. #4364 — 文档中心与 FAQ 页添加关键词搜索（CLOSED）
- **作者：** idling11  
- **链接：** [PR #4364](https://github.com/Hmbown/CodeWhale/pull/4364)  
**内容：** 为 docs 中心页和 FAQ 页加入客户端实时关键词搜索，支持中英文双重匹配，并添加 `/` 键盘快捷键聚焦输入框。

### 7. #4360 — 修复 BSD 系统浏览器打开问题（CLOSED）
- **作者：** ci4ic4  
- **链接：** [PR #4360](https://github.com/Hmbown/CodeWhale/pull/4360)  
**内容：** 为 NetBSD、FreeBSD、OpenBSD、DragonFly 补全了 `browser_open_command()` 平台分支，结束“在该平台不支持打开浏览器”的错误。

### 8. #4366 — 统一网站品牌字符串（CLOSED）
- **作者：** Hmbown  
- **链接：** [PR #4366](https://github.com/Hmbown/CodeWhale/pull/4366)  
**内容：** 将全站用户可见的品牌名称统一为“Codewhale”词标，移除目录名、仓库 URL 之外的遗留拼写差异。

### 9. #4338 — 依赖更新：actions/stale 10.3.0 → 10.4.0（CLOSED）
- **作者：** dependabot[bot]  
- **链接：** [PR #4338](https://github.com/Hmbown/CodeWhale/pull/4338)  
**内容：** CI 中自动关闭未响应 Issue 的动作更新到最新版，包含 bug 修复和改进。

### 10. #4342 — 依赖更新：rmcp 1.8.0 → 2.2.0（CLOSED）
- **作者：** dependabot[bot]  
- **链接：** [PR #4342](https://github.com/Hmbown/CodeWhale/pull/4342)  
**内容：** Rust MCP SDK 大幅升级，桥接了多项新特性与修复，为后续 MCP 扩展做准备。

---

## 功能需求趋势

从近期 Issue 和 PR 可以归纳出社区最关注的几个方向：

- **TUI 性能与交互流畅性**：流式文本显示速度、文件索引卡顿是当前第一痛点。社区期待更激进的异步渲染和 buffer 策略。
- **更完善的 I18N 与本地化**：中文翻译质量（宪法→规则、代码→编码）的反馈表明非英语用户已开始规模化使用，需要系统性国际化。
- **多模型/多提供商无缝切换**：MiniMax 的加入、Kimi baseUrl 覆盖导致的问题，以及定价路由绑定，都指向对灵活 provider 配置的强大需求。
- **跨平台支持**：Android Termux、BSD 系统、Windows pwsh7 等场景的 bug 修复频繁，说明用户群已从单一 Linux/macOS 扩展到多样环境。
- **配置能力开放**：用户希望更多内部开关（压缩、Seam、定价等）暴露到 `config.toml`，实现按需调优，而非依赖硬编码。

---

## 开发者关注点

- **终端渲染机制需优化**：`@` 索引同步扫描导致冻结、文本输出与模型响应不同步——开发者需要重新设计 TUI 的事件循环和渲染调度，避免阻塞 UI 线程。
- **复制粘贴的文本净化**：Unicode 装饰字符污染剪贴板影响日常使用，应考虑在选中时自动剥离非内容字符。
- **计费准确性压倒性需求**：Cache write 定价丢失、离线评分面板未感知 provider——开发者已意识到计费模块是信任基石，正在逐步修复。
- **Wizard 与终端内配置体验**：用户期望在 TUI 内完成 API Key 输入、模型选择等操作，无需切换到外部编辑器或浏览器。
- **移动/嵌入式平台构建门槛**：Android Termux 编译受阻、BSD 缺少浏览器打开支持——需要提供更完善的平台抽象和文档化的构建指南。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*