# AI CLI 工具社区动态日报 2026-07-22

> 生成时间: 2026-07-22 03:20 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告

**报告日期**: 2026-07-22  
**分析范围**: Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI (CodeWhale)  
**分析依据**: 各工具官方 GitHub 仓库当日社区动态

---

## 1. 生态全景

当前 AI CLI 工具整体处于 **功能快速扩展与稳定性阵痛并存** 的“早期规模化”阶段。MCP（Model Context Protocol）已成为行业事实标准，但核心链路的可靠性问题（调用丢失、Schema 兼容、超时）普遍存在，制约了生态信任。子代理/多 Agent 系统被视为下一代能力焦点，但行为不一致（挂起、误报成功、不听指令）是几乎所有工具的共性痛点。跨平台体验分化严重——Mac 生态相对成熟，Windows/Linux 用户频繁遭遇性能退化、沙箱回滚和渲染问题。开源项目（Pi、Qwen Code、DeepSeek TUI）社区贡献活跃、迭代速度快，而闭源工具（Claude Code、Codex）依赖官方团队，问题修复节奏较慢，但商业支持更完善。

---

## 2. 各工具当日活跃度对比

| 工具 | 热点 Issues 数 | 重要 PR 数 | 版本发布 | 社区互动强度（评论/👍） |
|------|---------------|-----------|----------|------------------------|
| Claude Code | 10 | 10 | v2.1.217 | 高（最多99👍，57条评论） |
| OpenAI Codex | 10 | 10 | v0.145.0 | 高（最多18评论，13👍） |
| Gemini CLI | 10 | 10 | v0.52.0-nightly | 高（最多12评论，12👍） |
| GitHub Copilot CLI | 10 | 1 | v1.0.74-0 | 中（最多26👍，但PR仅1个） |
| Kimi Code CLI | 5 | 1 | 无 | 低（最多2👍，评论少） |
| OpenCode | 10 | 10 | 无 | 中（最多12👍，多篇文章） |
| Pi | 10 | 10 | v0.81.1 | 高（最多43👍，30评论） |
| Qwen Code | 10 | 10 | v0.20.1 | 高（最多11评论，P1标签） |
| DeepSeek TUI | 10 | 10 | 无（v0.9.1冲刺） | 高（最多16评论，密集修复） |

**简要解读**：  
- **Kimi Code CLI** 当日活动最少，只有5个issue和1个PR，社区规模有限。  
- **GitHub Copilot CLI** 虽然issue讨论热度高（MCP支持诉求26👍），但PR提交量极低，显示官方响应可能滞后。  
- 其余7个工具均保持高密度社区活动，显示了AI CLI领域的竞争激烈程度。

---

## 3. 共同关注的功能方向

| 关注方向 | 涉及工具 | 具体诉求 |
|----------|----------|----------|
| **MCP 可靠性** | Claude Code, Copilot CLI, Kimi Code, OpenCode, Pi | 工具调用静默丢失、Schema格式被拒、远程OAuth认证断连、连接恢复 |
| **子Agent行为一致** | Claude Code, Gemini CLI, Copilot CLI, Qwen Code, DeepSeek TUI | 子Agent挂起/误报成功、不听禁用指令、达到上限后状态错误 |
| **跨平台稳定性** | Claude Code（Windows/MSIX）、Codex（WMI/taskkill）、Gemini CLI（Wayland）、Qwen Code（Windows ACP）、Pi（外部编辑器卡顿） | 特定OS上的性能退化、崩溃、无法启动 |
| **模型参数兼容性** | Claude Code, Gemini CLI, Qwen Code, Kimi Code | 特定模型（如thinking-only）因强制参数错误返回400；BYOK模型不支持推理相关选项 |
| **配置持久化与用户控制** | OpenCode（MCP状态重启丢失）、Pi（压缩策略缺陷）、Claude Code（权限频繁弹窗）、Qwen Code（MEMORY.md写入被拒） | 用户设置不被尊重、状态不持久、缺乏细粒度控制 |
| **长会话/上下文管理** | Copilot CLI（5MB序列化限制）、Claude Code（自动压缩失效）、Pi（压缩超100%才触发） | 长会话卡死、自动压缩逻辑不生效、Token预算不足 |
| **安全性** | Gemini CLI（RCE漏洞紧急修复）、Pi（SDK retry不可中断锁死）、Claude Code（sandbox回归） | 远程代码执行、资源锁死、沙箱过严导致功能不可用 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 | 关键短板 |
|------|----------|----------|--------------|----------|
| **Claude Code** | 企业级AI开发助手，深度绑定Anthropic模型 | 企业团队、远程协作 | MCP协议深度支持，远程控制功能，桌面端与CLI统一 | 闭源、MCP可靠性问题突出，sandbox回归影响Linux |
| **OpenAI Codex** | OpenRouter生态旗舰，高性能Rust实现 | OpenAI重度用户、多IDE扩展 | 子代理分页历史、跨工具迁移、Windows沙盒机制 | Windows性能风暴（WMI、taskkill循环）、Xcode扩展认证 |
| **Gemini CLI** | Google云原生开发伴侣，强调安全与自动DevOps | Google生态、安全敏感团队 | A2A协议、自动PR生成流水线、评估基础设施 | 子Agent挂起/误报频繁、认证回退缺陷 |
| **GitHub Copilot CLI** | GitHub Copilot订阅用户的CLI扩展 | GitHub重度用户、企业 | MCP集成、模型切换命令、Fleet子代理 | 功能更新慢（今日仅1PR），5MB序列化卡死，僵尸进程 |
| **Kimi Code CLI** | Moonshot面向中国市场的轻量CLI | 中国开发者 | 简洁TUI，支持中文场景 | 社区规模小，MCP和模型兼容性Bug多，修复慢 |
| **OpenCode** | 开源多提供商智能编码终端 | 追求开源、多模型组合的开发者 | 支持DeepSeek、Google、MiniMax等，Web UI+TUI双模式 | 付费服务上游被拒问题严重，MCP状态清理丢失 |
| **Pi** | 可扩展的本地优先AI开发平台 | 偏爱本地LLM、注重隐私的开发者 | 原生llama.cpp集成、扩展系统、OAuth多平台、SDK | 本地模型超时/崩溃、压缩策略缺陷、依赖管理混乱 |
| **Qwen Code** | 阿里云原生、功能全面的开源AI CLI | 中国及全球开发者，Java生态 | 子代理恢复、Web Shell、自定义技能目录、Java SDK | 模型参数兼容性有待优化、自动记忆写入阻塞 |
| **DeepSeek TUI (CodeWhale)** | 极致TUI体验、社区驱动的快速迭代 | TUI爱好者、注重交互效率 | 快速修复用户痛点（Enter延迟、滚动、工作目录）、/skills统一管理 | 未正式发布v0.9.1，功能成熟度较低 |

---

## 5. 社区热度与成熟度

**第一梯队（高热度、高成熟度）**：  
- **Claude Code / OpenAI Codex / Gemini CLI**：拥有最大规模的用户基数和社区讨论（100+👍 issue常见），版本更新固化，商业支持成熟。但问题也最多，用户对稳定性的抱怨持续升温。  
- **Qwen Code**：开源项目活跃，PR/Issue密度高，团队响应迅速，已进入日常稳定迭代阶段（v0.20.1正式版）。

**第二梯队（中热度、快速迭代）**：  
- **Pi**：社区热度高（43👍），但成熟度略逊于前三个，团队仍在打磨核心功能（压缩、OAuth）。  
- **DeepSeek TUI (CodeWhale)**：社区贡献活跃（10+ PR/天），但尚未发布正式版，bug修复与功能开发并进，处于“赶工”冲刺阶段。  
- **OpenCode**：用户基数增长，但付费用户上游问题暴露了商业模式的脆弱性。

**第三梯队（低热度、边缘化风险）**：  
- **GitHub Copilot CLI**：作为Copilot生态附属，独立迭代速度慢（今日仅1PR），长期MCP需求未响应，可能被边缘化。  
- **Kimi Code CLI**：社区规模最小，问题反馈不及时，存在“工具可用但用户无力”的风险。

---

## 6. 值得关注的趋势信号

### 6.1 MCP 协议走向成熟，但“最后一公里”仍是最大瓶颈
几乎所有工具都在集成MCP，但调用丢失、Schema格式被拒、认证断连等问题普遍存在。这意味着**开发者信任耗尽的临界点**——如果工具不能保证MCP工具调用的一致性，生态扩展将停滞。建议工具团队优先投资**端到端MCP可靠性测试**和**透明的调用日志**。

### 6.2 子Agent系统从“锦上添花”变为“关键痛点”
多个工具（Gemini CLI、Claude Code、Qwen Code）都因子Agent行为不可预测被用户强烈吐槽。**错误的状态报告（误报成功/永久挂起）比直接失败更危险**，因为它掩盖了真正的错误。未来子Agent需要更好的：  
- 实时状态面板（可见性）  
- 中断/恢复能力（控制性）  
- 失败原因透明（可诊断性）

### 6.3 安全性成为差异化竞争要点
Gemini CLI 的 RCE 紧急修复、Pi 的 SDK retry 锁死、Claude Code 的 sandbox 回归，均表明 **安全已从“可选项”变为“必备项”** 。开发者对“沙箱过严阻碍功能”和“沙箱过松导致风险”都高度敏感。最佳实践是 **分层权限模型**（类似移动端权限请求，但提供“记住决策”选项）。

### 6.4 Windows/Linux 体验严重滞后于 macOS  
即便是最成熟的 Claude Code 和 Codex，Windows 用户也面临更新崩溃、WMI 耗尽、滚动失效等问题。对于跨平台工具，**非 Mac 平台的回归测试覆盖不足**已成为常态。建议用户选择工具时优先检查目标 OS 的 issue 趋势，工具团队应设立 Windows/Linux CI 黄金路径。

### 6.5 开源模式 vs 闭源模式的博弈加剧
- **开源优势**：Pi、Qwen Code、DeepSeek TUI 等通过社区贡献快速解决高频痛点（如 DeepSeek TUI 的 Enter 延迟修复仅用一天）。  
- **闭源优势**：Claude Code、Codex 提供更稳定的商业支持和深度模型集成。  
- **趋势预测**：未来市场可能出现“**核心闭源 + 插件开源**”的混合模式，如 Copilot CLI 目前的策略。

### 6.6 用户对“配置控制权”的诉求井喷
从“禁止冗长注释”到“禁用自动子Agent”到“自定义推理字段”，社区要求工具提供 **更细粒度的行为配置**，而非“一刀切”。这反映了 AI CLI 从“新奇玩具”到“日常开发工具”的转变——用户希望工具适应自己的工作流，而非反向改造工作流。

---

**总结**：2026年7月，AI CLI 工具生态正处于**从“能用”到“好用”的艰难跨越期**。MCP 和子Agent是共识能力基石，但可靠性缺失正在消耗用户信任。跨平台、配置灵活性、安全隔离是三个亟待攻克的壁垒。对于开发者而言，选择工具时应优先考虑其 **社区响应速度和未来路线图**，而非仅看当前功能列表。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，以下是根据您提供的截至 2026-07-22 的数据，生成的 Claude Code Skills 社区热点报告。

---

## Claude Code Skills 社区热点报告 (数据截止 2026-07-22)

### 1. 热门 Skills 排行

**1. Skill Creator 修复套件 (Multiple PRs: #1298, #1099, #1050, #1323, #362, #361)**
   - **功能**: 这是对核心工具 `skill-creator` 的系列修复，旨在解决其在 Windows 平台上不可用以及评估逻辑 (run_eval.py) 存在严重缺陷的问题。这是当前社区最核心的痛点。
   - **社区讨论热点**: 所有问题都指向基础设施的可用性。社区成员反复遭遇 `recall=0%` 的错误（#556），导致技能描述优化循环完全失效。Windows 兼容性问题也让大量开发者无法正常使用。讨论集中在修复 `run_eval.py` 的触发检测逻辑、修复 Windows 子进程和编码问题。
   - **当前状态**: **Open**。尽管多个 PR (#361, #362) 已修复部分字符编码问题，但核心的评估循环缺陷仍需更多 PR 来解决。

**2. document-typography (#514)**
   - **功能**: 为生成的文档提供排版质量控制，修复孤儿词、寡段、编号错位等 AI 生成文档的常见排版问题。
   - **社区讨论热点**: 这是一个高度实用且泛化性强的需求。社区认可该 Skill 解决了 AI 生成内容在专业文档交付中的“最后一公里”问题，具有普适性。
   - **当前状态**: **Open**。等待合并，受到有正式文档需求的用户关注。

**3. testing-patterns (#723)**
   - **功能**: 提供一个全面的测试模式 Skill，涵盖测试哲学（Trophy 模型）、单元测试、React 组件测试、集成测试等。
   - **社区讨论热点**: 代表社区对提升代码质量标准化工具的高度兴趣。该 Skill 旨在指导 Claude 遵循最佳实践进行测试，而非仅提供示例代码。
   - **当前状态**: **Open**。内容丰富，方向明确，是提升代码库可靠性的重要技能。

**4. self-audit (#1367)**
   - **功能**: 一个元技能，用于在交付前对 AI 输出进行审计。分为两步：机械文件验证和四维度推理质量门控。
   - **社区讨论热点**: 社区对 AI 输出质量的可信度和可控性非常关注。这个 Skill 试图在 Agent 内部建立一个自我审查机制，类似于“思想钢印”，是一个新颖且前瞻性的尝试，引发了关于 Agent 可靠性的深层讨论。
   - **当前状态**: **Open**。作为较新的 PR，虽然评论数不多，但其议题 (#1385) 已有跟进，表明其思路得到了社区的严肃对待。

**5. skill-quality-analyzer & skill-security-analyzer (#83)**
   - **功能**: 一对元技能，用于评估其他 Skills 的质量（结构、文档等五个维度）和安全性。
   - **社区讨论热点**: 这些技能与社区对 Skill 安全性和质量标准化的担忧高度相关（见 Issue #492）。它们旨在建立一套 Benchmark，帮助开发和审核更好的 Skills。
   - **当前状态**: **Open**。已有较长时间，但仍然是构建技能生态健康度不可或缺的一环。

**6. ODT skill (#486) & Pyxel skill (#525)**
   - **功能**: ODT 技能支持 OpenDocument 格式的创建、填充和转换，满足开源办公生态需求；Pyxel 技能则是为复古游戏开发这一垂直领域提供专业化支持。
   - **社区讨论热点**: 代表了 Skills 生态的横向扩展。前者是对文档格式的全面覆盖，后者则展示了 Skills 可以深入到特定创作领域，体现平台多功能性。
   - **当前状态**: **Open**。策略上是冷门但稳固的需求。

**7. color-expert (#1302)**
   - **功能**: 提供专业的颜色知识 Skill，涵盖 ISCC-NBS、Munsell、XKCD 等繁杂的命名系统和色彩空间选择指导。
   - **社区讨论热点**: 这是一个典型的“AI 擅长乱说，但有了专业工具就能做对”的场景。社区发现 Claude 在颜色细节上常出错误，此 Skill 旨在通过引入结构化知识来纠正。
   - **当前状态**: **Open**。近期活跃，受到设计师和数据可视化领域用户的欢迎。

### 2. 社区需求趋势

- **安全与信任**: 这是社区最强烈的呼声。核心 Issue **#492 (Security: Community skills distributed under anthropic/ namespace)** 拥有 43 条评论，详细讨论了对官方命名空间下社区技能的安全信任边界担忧，用户害怕授予恶意技能过高的权限。这暴露出技能分发机制的安全设计缺口。
- **协作与效率**: **#228 (Enable org-wide skill sharing)** 以 14 条评论位居第二，开发者急需在企业组织中直接分享和复用 Skills，而不是通过文件传输的原始方式。这反映了 Skills 从个人工具向团队协作产品演进的强烈需求。
- **稳定与可用性**: 与 `skill-creator` 相关的 Issue（**#556**、**#1169**、**#1061**）获得了大量反馈，显示了社区对开发工具稳定性的不满。`run_eval.py` 的 0% 召回率 BUG 直接打击了用户创建高质量 Skills 的积极性。
- **Agent 治理与可靠性**: 社区对 Agent 行为的安全与可控性持续关注，例如 **#412 (agent-governance)** 讨论 Agent 的策略执行、威胁检测，而 **#1385 (Reasoning Quality Gate Pipeline)** 则从推理质量验证角度切入。用户不再仅满足于功能实现，而是追求可靠的交付物。
- **专业技能深度**: 除了通用的 “document-*” 系列，用户开始需要特定领域的专家级技能，如**颜色科学**、**排版**、**测试模式**。这表明社区正从广度覆盖转向深度垂直化。

### 3. 高潜力待合并 Skills

以下 PR 评论活跃，解决了关键问题且有强烈的社区需求，预计近期可能合并：

- **#1298 (fix(skill-creator): run_eval.py always reports 0% recall)**：这是修复核心缺陷的最直接、最全面的 PR。合并后将解决 `skill-creator` 的“测量噪声”问题，直接影响开发者体验，优先级最高。
- **#1367 (feat(skills): add self-audit)**：代表 Agent 可靠性管理的未来方向，且有详细的设计和跟进 Issue，具备成为官方推荐最佳实践的潜力。
- **#1385 (Reasoning Quality Gate Pipeline)**：虽然是一个议题，但直接承继 #1367，将验证流程系统化为三阶段管线，展现了社区对 Agent 质量管控框架的系统性思考。
- **#514 (Add document-typography skill)**：功能独立、解决用户实际痛点、与现有 “document-*” 生态互补，合并阻力小，能快速获得社区回报。
- **#723 (Add testing-patterns skill)**：直接对标开发流程中最重要的测试环节，内容详实，一旦合并将成为提升项目质量的关键技能。

### 4. Skills 生态洞察

**当前社区最集中的诉求是：从“能用”向“可靠、安全、可协作”转型，基础设施（skill-creator）的稳定性已成为制约整个技能生态健康发展的瓶颈。**

---

好的，作为专注于AI开发工具的技术分析师，我根据您提供的GitHub数据，为您生成了2026年7月22日的Claude Code社区动态日报。

---

# Claude Code 社区动态日报 | 2026-07-22

## 今日速览

今日社区最核心的动态是 **MCP（Model Context Protocol）工具调用在桌面端出现大面积、多类型的隐蔽故障**，多个Issue报告工具在通过用户审批后“神秘失踪”，无法到达本地服务器，严重影响工作流可靠性。此外，macOS远程控制自动重连失效、新版沙箱导致Linux root用户Bash崩溃等问题也引发了大量讨论。版本更新v2.1.217带来了emoji快捷输入和会话写入失败警告两项实用小功能。

## 版本发布

- **v2.1.217**
    - **新功能**: 在输入框中添加了表情符号短代码自动补全功能（如输入 `:heart:` 插入 ❤️，输入 `:hea` 显示建议）。可使用 `emojiCompletionEnabled` 设置禁用。
    - **改进**: 当会话记录（transcript）写入失败（如磁盘已满）或由于继承问题导致会话保存关闭时，现在会显示警告。

## 社区热点 Issues

1.  **#34255 [BUG] 远程控制自动重连失效 — 连接静默断开且无法恢复**
    - **重要性**: 🔥🔥🔥🔥🔥 社区最关注的问题，拥有99个👍和57条评论，表明大量用户受到严重影响。远程控制是Claude Code的重要功能，断连后无法自动恢复会完全中断远程工作流。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/34255)

2.  **#79992 [BUG] macOS: 文件系统类MCP工具调用在审批后静默丢失**
    - **重要性**: 🔥🔥🔥🔥🔥 **这是今日最关键的BUG之一**。问题描述非常详细，指出文件操作类MCP工具在通过用户审批后，请求从未到达本地MCP服务器。这类问题直接破坏了MCP生态的信任基础，用户授权后操作不执行，可能导致数据不一致或任务失败。多位用户提交了类似报告（#79971, #80010），表明这是一个近期出现的普遍性问题。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/79992)

3.  **#78826 [BUG] MCP服务器连接成功，但其工具从未暴露给模型**
    - **重要性**: 🔥🔥🔥🔥 类似#79992，但问题更底层，工具根本不出现在模型的选择列表中。这表明MCP的工具发现或注册流程存在缺陷，对第三方MCP服务集成的开发者影响极大。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/78826)

4.  **#72215 [BUG] 全屏渲染模式下无滚动条且滚动完全失效**
    - **重要性**: 🔥🔥🔥🔥 Windows用户的核心体验问题。在全屏模式下无法查看历史输出，使得调试和审查变得极其困难。评论数较多，显示该问题影响面广。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/72215)

5.  **#79606 [BUG] 新版沙箱回归：默认 `--cap-drop ALL` 导致Linux root用户所有Bash命令执行失败**
    - **重要性**: 🔥🔥🔥🔥 这是一个严重的回归问题。增强沙箱安全性固然好，但直接破坏root用户的基础功能是不可接受的，会立即阻断所有以root身份运行的用户。社区反应迅速，该Issue在短时间内获得了关注。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/79606)

6.  **#76357 [BUG] Windows (MSIX) 更新失败，导致应用无法启动，需重启电脑**
    - **重要性**: 🔥🔥🔥 每次更新都会触发，属于严重阻塞性问题。对于Windows用户，更新软件是常态，此问题将极大损害更新体验和用户信任。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/76357)

7.  **#79921 [BUG] Claude Code桌面端和VS Code扩展会话冻结**
    - **重要性**: 🔥🔥🔥 问题描述了一个奇怪的现象：本地会话会在接收到另一个会话的输入后才解冻。这暗示了底层的事件循环或进程通信存在全局锁或竞态条件，诊断难度高，影响范围广。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/79921)

8.  **#65961 [BUG] Claude 默认生成冗长的代码注释，且无法通过指令禁止**
    - **重要性**: 🔥🔥🔥 这直接关系到代码质量和开发者体验。强制性的冗长注释会带来噪声，降低代码可读性。该问题获得了33个👍，表明很多开发者有相同困扰，期待精细化的输出控制。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/65961)

9.  **#79916 [BUG] Claude Code CLI 无法使用 Fable 5 模型，尽管拥有有效订阅**
    - **重要性**: 🔥🔥🔥 桌面端可用，但CLI不可用，这造成了体验分裂。对于依赖CLI进行自动化或脚本操作的用户来说，这是一个严重的功能缺失。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/79916)

10. **#62135 [BUG] 允许规则下，只读Bash命令仍然请求权限**
    - **重要性**: 🔥🔥🔥 权限系统“报假警”会严重拖慢工作流，尤其对于 `curl`、`gh api` 这类高频命令。此问题持续未解决，说明权限判断逻辑可能存在问题。
    - [GitHub链接](https://github.com/anthropics/claude-code/issues/62135)

## 重要 PR 进展

1.  **#80008 [PR] 新增“Twilight”插件：规范优先的设计/实现技能**
    - **内容**: 提交者演示了一种通过“设计、实现、焦点堆栈”策略来解锁Claude高级功能的思路。虽然PR自认为需要大幅修改，但它为社区提供了一种新的插件开发模式参考。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/80008)

2.  **#79898 [PR] 新增Claude Apps Gateway 在AWS上的部署示例**
    - **内容**: 提供了在AWS上使用Amazon Bedrock部署Claude Apps Gateway的参考工件，与现有的GCP示例互补，方便用户在AWS生态中部署企业级网关。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79898)

3.  **#79889 [PR] 修复: 使Hook入口点无需 `CLAUDE_PLUGIN_ROOT` 环境变量即可运行**
    - **内容**: 修复了hookify插件的路径设置问题，使得脚本在没有设置环境变量的情况下也能正确导入模块，提高了插件的健壮性和易用性。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79889)

4.  **#79873 [PR] 修复: `event: prompt` 规则从未触发**
    - **内容**: 修复了hookify插件中一个关键BUG。由于Claude Code在 `prompt` 事件中传递的payload键名是 `prompt` 而非 `user_prompt`，导致监听该事件的所有规则均无效。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79873)

5.  **#79647 [PR] 修复: 解决hookify导入不依赖插件目录名的问题**
    - **内容**: 修复了因插件目录名非 `hookify` 而导致的导入失败问题。通过调整导入逻辑，增强了插件的命名灵活性。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79647)

6.  **#79645 [PR] 修复: 以UTF-8编码读取规则和转录文件**
    - **内容**: 修复了在Windows平台上因默认编码（cp1252）与UTF-8不匹配而导致规则文件和转录文件读取失败的问题，解决了跨平台兼容性。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79645)

7.  **#79644 [PR] 修复: 在插件Hook命令中引用 `${CLAUDE_PLUGIN_ROOT}`**
    - **内容**: 修复了macOS上由于路径包含空格导致的Shell命令执行失败问题，通过在变量外添加引号，解决了因路径分割导致脚本找不到的问题。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79644)

8.  **#79643 [PR] 文档: 对齐 `/commit-push-pr` 命令描述与实际行为**
    - **内容**: 修复了文档错误。该命令实际上只检查当前分支，不会查看 `git log`，因此PR描述是基于暂存区和工作区的变更，而不是分支间的commit。对于依赖此文档的用户非常重要。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79643)

9.  **#79642 [PR] 文档: 修正插件市场名为 `claude-code-plugins`**
    - **内容**: 修正了插件开发文档中错误的市场名称，避免开发者使用错误的命令安装插件。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79642)

10. **#79640 [PR] 修复: 使用 `disable-model-invocation` 使命令仅供用户使用**
    - **内容**: 修复了 `ralph-wiggum` 相关命令的错误配置，使用了正确的配置键来防止模型触发用户指令，确保命令只能由用户发起。
    - [GitHub链接](https://github.com/anthropics/claude-code/pull/79640)

## 功能需求趋势

- **MCP 集成与可靠性**: 社区对MCP的关注度极高，但主要集中在**可靠性**上。多个Issue指出工具调用失败、工具不暴露、连接静默断开等问题。这显示MCP生态虽在扩展，但其核心通信与执行管道仍存在不稳定的隐患。
- **跨平台体验一致性**: Windows和Linux用户表达了强烈的不满情绪。Windows的更新崩溃(#76357)、全屏滚动问题(#72215)以及Linux的Sandbox回归(#79606)和主题跟随系统问题(#79995)表明，Claude Code在非macOS平台上的体验打磨仍需加强。
- **精细化行为控制**: 从“控制自动滚动行为”(#25042)到“禁止冗长注释”(#65961) 和“允许规则覆盖权限提示”(#62135)，社区期望更细致、可配置的AI行为控制，让工具更好地适应个人工作流，而非一刀切的模式。
- **模型访问与订阅管理**: Fable 5模型在CLI中不可用(#79916)以及Max计划升级后限额未更新(#79773)的问题，反映了订阅与功能权限之间的状态同步存在缺陷，影响了高价值用户的使用。

## 开发者关注点

- **MCP 工具调用黑洞**: **这是开发者当前最大的痛点**。多个Bug（#79992, #79971, #78826）均指向同一个问题：MCP工具在调用流程的某个环节被静默消耗，用户授权了但操作未执行。这个问题对依赖于MCP扩展开发能力的用户打击是毁灭性的。
- **稳定性与回归问题频发**: Sandbox更新导致全平台Bash崩溃（#79606）、会话随机冻结（#79921）、自动重连失效（#34255），这些问题直接动摇了开发者对工具稳定性的信心。新功能引入后，回归测试似乎未能覆盖所有边界情况。
- **核心功能体验不佳**: 权限系统反复弹出确认框（#62135, #78774）、UI交互组件（如AskUserQuestion）响应失灵（#78306, #79325）、代码注释输出无法控制（#65961），这些高频使用场景中的问题持续消耗开发者的注意力和耐心。
- **插件开发体验的碎片化修复**: 今日大量PR（#79889, #79647, #79645, #79644）都在修复hookify插件的基础设施问题，如路径、编码、变量引用等。这表明插件系统的初始设计和测试存在不足，而开发者社区正在积极地“填坑”，但官方应提供更稳定可靠的开发基础。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-22

---

## 今日速览

- **正式版 v0.145.0 发布**，带来实验性分页线程历史、子代理支持以及跨工具迁移能力。
- **Windows 平台性能风暴持续发酵**：多个高赞 Issue 报告 `taskkill.exe`/`conhost.exe` 无限制循环、WMI 耗尽、Git 探针 CPU 飙升等问题。
- **RTL 文字方向支持呼声再起**，阿拉伯语、波斯语用户期待原生渲染，相关 Issue 累计超 26 个 👍。

---

## 版本发布

### `rust-v0.145.0`（正式版）
- **新增实验性功能**：分页线程历史（支持高效恢复、搜索、持久化名称、子代理和记忆）。
- **扩展 `/import` 命令**：可迁移 Cursor 和 Claude Code 的 MCP 服务器、插件、会话、命令及项目配置。
- **同步发布**：`rust-v0.145.0-alpha.30` 和 `alpha.29` 为演进过程中的里程碑。

---

## 社区热点 Issues（10 条精选）

### 1. [#19504] 添加完整 RTL 文字方向支持
- **标签**：enhancement, app  
- **动态**：2026-04-25 创建，今日仍有讨论，评论 18，👍 18  
- **摘要**：阿拉伯语用户在 Codex 和 Chat 面板中遇到文本对齐、标点位置错误，要求原生 RTL 支持。  
- **链接**：[#19504](https://github.com/openai/codex/issues/19504)

### 2. [#33776] Windows 桌面版生成数百个 taskkill.exe / conhost.exe 进程
- **标签**：bug, windows-os, performance  
- **动态**：2026-07-17 创建，评论 17，👍 13  
- **摘要**：`ChatGPT.exe` 反复启动 `taskkill.exe` 和 `conhost.exe`（单次会话达 287 个），导致 WMI 查询风暴和 DWM 卡顿。  
- **链接**：[#33776](https://github.com/openai/codex/issues/33776)

### 3. [#34260] 无边界 taskkill/conhost 清理循环耗尽 WMI
- **标签**：bug, windows-os, performance  
- **动态**：2026-07-20 创建，评论 15，👍 8  
- **摘要**：Windows Desktop 进入无终止的进程清理循环，数百个 `taskkill` 同时查询 Win32_Process 使 WMI 配额耗尽，系统几乎瘫痪。  
- **链接**：[#34260](https://github.com/openai/codex/issues/34260)

### 4. [#28078] Xcode 27 Beta Codex 登录失败（ChatGPT Pro 账号）
- **标签**：bug, extension, auth  
- **动态**：2026-06-13 创建，评论 13，👍 11  
- **摘要**：Xcode 扩展中 Pro 账号需 OTP 验证后无法登录，而同 Mac 下的 Go 账号正常。影响 Xcode 27 beta 与 CLI 0.139.0 用户。  
- **链接**：[#28078](https://github.com/openai/codex/issues/28078)

### 5. [#29499] 启动后 WMI Provider Host 持续高 CPU
- **标签**：bug, windows-os, performance  
- **动态**：2026-06-22 创建，评论 12，👍 14  
- **摘要**：Codex App 启动即触发 WMI Provider Host 占据大量 CPU，怀疑与进程扫描/Git 元数据轮询有关。  
- **链接**：[#29499](https://github.com/openai/codex/issues/29499)

### 6. [#34014] 独立 Windows App 导致 WMI Provider Host 90-100% CPU
- **标签**：bug, windows-os, performance  
- **动态**：2026-07-18 创建，评论 9，👍 7  
- **摘要**：同一项目在 VS Code 扩展中正常，但在独立 App 中立即触发 WMI 高占用，疑似沙盒/文件扫描差异。  
- **链接**：[#34014](https://github.com/openai/codex/issues/34014)

### 7. [#21563] 波斯语 RTL 渲染不一致
- **标签**：bug, app  
- **动态**：2026-05-07 创建，评论 8，👍 8  
- **摘要**：混合波斯语/英语消息、标点及内联代码显示错乱，建议添加语言级方向设置。  
- **链接**：[#21563](https://github.com/openai/codex/issues/21563)

### 8. [#10733] 开源 Codex App 的呼声
- **标签**：enhancement, app  
- **动态**：2026-02-05 创建（今日仍有关注），评论 3，👍 14  
- **摘要**：社区对 CLI 和 VS Code 扩展开源表示赞赏，希望桌面 App 也开源，以便学习内部实现。  
- **链接**：[#10733](https://github.com/openai/codex/issues/10733)

### 9. [#34473] 无解析 Git 根目录导致无退避重试循环
- **标签**：bug, windows-os, performance  
- **动态**：2026-07-21 创建，评论 3，👍 0  
- **摘要**：Windows 上 Codex 遇到不可解析的 Git 根时进行无限制重试（142/168 次调用超时 60s），严重拖慢机器。  
- **链接**：[#34473](https://github.com/openai/codex/issues/34473)

### 10. [#34665] 云端规划循环消耗过量 CPU/RAM 且无线程级遥测
- **标签**：bug, model-behavior, performance  
- **动态**：2026-07-22 创建，评论 2，👍 0  
- **摘要**：长时间运行的云端目标持续进行规划/规范/编排，生成的代码量极少，且无性能遥测辅助排查。  
- **链接**：[#34665](https://github.com/openai/codex/issues/34665)

---

## 重要 PR 进展（10 条精选）

### 1. [#34669] 扩展 `codex-http-client` 使用文档
- **状态**：已关闭  
- **摘要**：明确 `codex-http-client` 为 `reqwest` 集成和出站请求策略的拥有者，并说明代理选择与连接复用方式。  
- **链接**：[#34669](https://github.com/openai/codex/pull/34669)

### 2. [#34667] 文档化 `PathUri` 驱动器字母规范化
- **状态**：已关闭  
- **摘要**：记录 Windows 路径中驱动器字母大小写规范化行为，减少因路径不一致导致的 Bug。  
- **链接**：[#34667](https://github.com/openai/codex/pull/34667)

### 3. [#34664] 分叉线程时保留审批者信息
- **状态**：已关闭  
- **摘要**：修复分叉持久化线程会丢失最近的审批者的问题，改为从完整历史中恢复。  
- **链接**：[#34664](https://github.com/openai/codex/pull/34664)

### 4. [#34655] 认证刷新时遵循配置的代理路由
- **状态**：已关闭  
- **摘要**：确保 ChatGPT Token 刷新请求使用与认证流量相同的代理策略，包括系统代理环境。  
- **链接**：[#34655](https://github.com/openai/codex/pull/34655)

### 5. [#34654] 为外部环境路径渲染 Turn Diff
- **状态**：已关闭  
- **摘要**：支持远程环境路径在 diff 中正确显示，保留 `PathUri` 值穿过补丁、显示根发现等环节。  
- **链接**：[#34654](https://github.com/openai/codex/pull/34654)

### 6. [#34651] 将核心测试支持迁移至共享 HTTP 客户端
- **状态**：已关闭  
- **摘要**：移除测试 crate 对 `reqwest` 的直接依赖，统一使用 `codex-http-client`。  
- **链接**：[#34651](https://github.com/openai/codex/pull/34651)

### 7. [#34644] 验证 Git 插件 SHA 检出
- **状态**：已关闭  
- **摘要**：修复 Git 可能将 SHA 解释为分支名的问题，在检出后验证 `HEAD` 是否匹配预期提交。  
- **链接**：[#34644](https://github.com/openai/codex/pull/34644)

### 8. [#34641] 强化沙盒执行中的管理代理设置
- **状态**：已关闭  
- **摘要**：使 Linux `bubblewrap` 沙盒内部可访问代理 socket 目录，并正确传递 `WS_PROXY`/`WSS_PROXY`。  
- **链接**：[#34641](https://github.com/openai/codex/pull/34641)

### 9. [#34630] 新增策略感知的 HTTP 客户端建造器
- **状态**：已关闭  
- **摘要**：提供 `HttpClientBuilder` 以配置默认头、重定向、Cloudflare cookie 存储和请求诊断，不暴露底层传输。  
- **链接**：[#34630](https://github.com/openai/codex/pull/34630)

### 10. [#34626] 根据模型上下文窗口缩放技能元数据预算
- **状态**：已关闭  
- **摘要**：将技能元数据字符限制改为按模型上下文窗口 2% 动态计算，上限 4000 token，适配不同模型。  
- **链接**：[#34626](https://github.com/openai/codex/pull/34626)

---

## 功能需求趋势

1. **RTL（从右至左）语言支持**  
   - 多个 Issue（#19504, #21563）要求原生支持阿拉伯语、波斯语，涉及文本方向、标点、内联代码渲染。社区反应积极（累计 26 👍）。

2. **跨平台性能优化（尤指 Windows）**  
   - 近半数高活跃 Issue 针对 Windows：`taskkill.exe`/`conhost.exe` 失控、WMI 高 CPU、Git 探针无限循环。用户期望默认关闭不必要的文件扫描、增加退避策略。

3. **IDE 扩展兼容性与认证**  
   - Xcode 27 Beta 的 OTP 登录失败（#28078）凸显不同订阅类型的认证差异，开发者希望扩展在主流 IDE（VS Code、Xcode、JetBrains）中表现一致。

4. **子代理/多 Agent 稳定性**  
   - #33777 报告 `spawn_agent` 可能挂起，子代理相关功能在 v0.145.0 虽被标记为实验性，但社区已开始反馈稳定性问题。

5. **开源透明度**  
   - #10733 获得 14 👍，用户希望桌面 App 也开源，以便审查安全、学习实现细节。

---

## 开发者关注点

- **Windows 生态环境痛点**：大量用户反馈应用启动后即触发 `git ls-files`、`taskkill` 等高频调用，导致整机卡顿。建议团队优先调查原因并加入重试限制/退避机制。
- **WMI Provider Host 问题**：多个 Issue（#29499, #34014, #33776）均指向同一根源——Windows 上沙盒/进程管理模块反复调用 WMI。急需根本性修复而非临时过滤。
- **认证与代理复杂性**：企业用户需要应对系统代理、MITM 环境，近期 PR 集中在认证代理路由的统一实现，可视为官方对代理问题的基础设施加固。
- **测试与迁移进度**：`copyberry[bot]` 批量提交的 PR 反映了团队正集中清理 HTTP 客户端依赖，将 `reqwest` 统一封装至 `codex-http-client`，降低后续维护成本。

---

*数据截止于 2026-07-22 23:59 UTC，来源：[github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我将根据您提供的 GitHub 数据，为您生成 2026 年 7 月 22 日的 Gemini CLI 社区动态日报。

---

# Gemini CLI 社区动态日报 | 2026-07-22

## 今日速览

今日社区的核心动态聚焦于**安全与稳定性修复**。昨日发布的 v0.52.0-nightly 版本紧急修复了 A2A 服务器中的一个关键远程代码执行（RCE）漏洞。同时，社区讨论的热点主要集中在代理（Agent）系统的行为一致性问题上，特别是子代理在达到上限后误报成功的 Bug 和在某些场景下无响应的故障。

## 版本发布

### v0.52.0-nightly.20260722.gc776c665b
- **核心变更**: 紧急修复了 `a2a-server` 中的一个严重安全漏洞。该漏洞涉及工作区信任和任务隔离的缺失，可能导致**远程代码执行（RCE）**。
- **影响**: 所有使用 A2A 协议进行代理间通信的用户都应立即更新，以防止潜在的环境污染或恶意代码执行。
- **链接**: [查看完整变更日志](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260721.gacae7124b...v0.52.0-nightly.20260722.gc776c665b)

## 社区热点 Issues

1.  **[#22323] 子代理达到最大轮次后误报成功** (优先级 P1)
    - **摘要**: 当 `codebase_investigator` 子代理因达到 `MAX_TURNS` 限制而中断工作时，它错误地将自身的退出原因报告为 `"GOAL"`（任务达成），并标记为 `"success"`。这完全掩盖了任务被系统中断的真相。
    - **重要性**: **严重误导用户**，让用户误以为任务已完成，而实际分析尚未进行。这暴露出 Agent 状态管理与用户反馈机制的缺陷。
    - **社区反应**: 获得了 12 条评论，是当日讨论最热烈的问题，开发者们普遍认为这是一个需要优先解决的逻辑 Bug。
    - **链接**: [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2.  **[#21409] Generalist Agent 挂起** (优先级 P1)
    - **摘要**: 当 Gemini CLI 将任务委派给 “generalist” 代理时，该代理会**永久挂起**（用户等待长达一小时后取消）。即使是简单的文件夹创建操作也会触发此问题。用户发现，手动指示模型不要使用子代理可以绕过此 Bug。
    - **重要性**: 严重影响核心功能的可用性，是流程自动化的“杀手级”障碍。获得 8 次点赞，表明大量用户深受其扰。
    - **链接**: [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3.  **[#25166] Shell 命令执行后卡死** (优先级 P1)
    - **摘要**: 在 Gemini 执行完一个简单且不需要交互的 Shell 命令后（如 `ls`），终端显示 `"Waiting input"` 并永久挂起，尽管命令本身已经完成。
    - **重要性**: 直接破坏了命令行使用体验，是开发者在日常交互中**高频遇到的痛点**。获得 3 次点赞，评论数 4 条，说明这不是偶发问题。
    - **链接**: [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

4.  **[#21983] Browser 子代理在 Wayland 环境下失败** (优先级 P1)
    - **摘要**: 浏览器子代理在 Wayland 显示服务器协议下无法正常运行，导致任务失败并报告 `"GOAL"`。
    - **重要性**: 许多现代 Linux 发行版默认使用 Wayland，此 Bug 直接屏蔽了大量 Linux 用户的 Browser Agent 功能。
    - **链接**: [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

5.  **[#22093] 子代理在未授权情况下自动运行** (优先级 P2)
    - **摘要**: 自 v0.33.0 版本更新后，即使配置文件中将代理模式设置为“禁用”，子代理（如 generalist）仍会在后台被调用执行任务。
    - **重要性**: **违反用户预期和安全边界**。用户明确要求只使用 MCP 功能，但工具仍然自作主张调用智能代理，可能引发动作污染和意外的资源消耗。
    - **链接**: [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

6.  **[#26522] Auto Memory 无限重试低信号会话** (优先级 P2)
    - **摘要**: Auto Memory 功能在处理低价值会话时存在逻辑缺陷。如果提取代理判断某会话“信号弱”而选择不处理，该会话会保持未处理状态，并在下次运行时被反复推送，导致无限循环。
    - **重要性**: 资源浪费和效率低下，可能阻塞 Auto Memory 的核心流程，使其无法处理真正有价值的会话。
    - **链接**: [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

7.  **[#20079] Agent 文件不支持符号链接** (优先级 P2)
    - **摘要**: 放置在 `~/.gemini/agents/` 目录下，用于定义子代理的文件，如果本身是一个符号链接（symlink），则不会被识别和加载。
    - **重要性**: 限制了用户管理和组织自定义代理文件的能力，与 Linux 系统的常规管理习惯不符。
    - **链接**: [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

8.  **[#24246] 工具数量超过 128 个时触发 400 错误** (优先级 P2)
    - **摘要**: 当启用或可用的工具超过 128 个时，Gemini CLI 会遇到 API 返回的 400 错误（请求错误）。
    - **重要性**: 制约了大型项目或插件生态下工具扩展的可行性。用户期望 Agent 能更智能地根据上下文筛选和激活工具。
    - **链接**: [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

9.  **[#23571] 模型随机创建临时脚本文件** (优先级 P2)
    - **摘要**: 由于 Model 被限制只能通过 Shell 执行操作，它倾向于在目录树的各个地方生成临时编辑脚本。这导致工作区变得混乱，难以清理。
    - **重要性**: 反映出一致性和清洁性的问题。用户期望模型将临时文件生成在指定或合理的临时目录中。
    - **链接**: [Issue #23571](https://github.com/google-gemini/gemini-cli/issues/23571)

10. **[#22672] Agent 应减少破坏性行为** (优先级 P2)
    - **摘要**: 模型在处理复杂 Git 操作或数据库迁移时，有时会使用 `git reset` 或 `--force` 等危险命令，而忽略了更安全的替代方案。
    - **重要性**: 安全与风险管理。社区希望 Agent 具备更强的“安全意识”，在执行潜在破坏性操作前进行风险提示或优先选择安全路径。
    - **链接**: [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

## 重要 PR 进展

1.  **[#28470] fix(a2a-server): 强制执行工作区信任和任务隔离以防止 RCE**
    - **状态**: 已合并 (CLOSED)
    - **内容**: 全面重构了 A2A 服务器的后端，通过重构启动序列、环境加载机制和引入强健的任务级隔离，修复了一个潜在的零点击远程代码执行 (RCE) 漏洞。
    - **链接**: [PR #28470](https://github.com/google-gemini/gemini-cli/pull/28470)

2.  **[#28403] fix(core): 阻止 $VAR 和 ${VAR} 变量扩展绕过安全检查**
    - **状态**: 开放中 (OPEN)
    - **内容**: 修复了 `detectBashSubstitution()` 和 `detectPowerShellSubstitution()` 函数的不完整检查，以封堵变量扩展模式可能绕过的安全漏洞 (GHSA-wpqr-6v78-jr5g)。这是一个重要的安全增强。
    - **链接**: [PR #28403](https://github.com/google-gemini/gemini-cli/pull/28403)

3.  **[#28401] fix(shell): 限制发送给模型的命令输出内容**
    - **状态**: 开放中 (OPEN)
    - **内容**: 为 Shell 工具增加了输出内容上限。之前，像 `find /` 这样的命令会产生大量输出（数百 KB），导致“token 爆炸”，烧毁额度并降低模型响应质量。此 PR 通过截断输出解决了这个问题。
    - **链接**: [PR #28401](https://github.com/google-gemini/gemini-cli/pull/28401)

4.  **[#28472] fix(core): 顺序验证缓存凭据并恢复 GOOGLE_APPLICATION_CREDENTIALS 回退**
    - **状态**: 开放中 (OPEN)
    - **内容**: 修复了 Gemini Code Assist Agent Mode 中的一个关键认证回退故障。该 Bug 导致 VS Code 中进程意外退出。PR 引入了对缓存凭据的逐次验证，并确保在主要认证方式失败后，能够正确回退到 `GOOGLE_APPLICATION_CREDENTIALS` 环境变量。
    - **链接**: [PR #28472](https://github.com/google-gemini/gemini-cli/pull/28472)

5.  **[#28469] fix(core): 模型回退时轮换 Session ID 以防止状态错误**
    - **状态**: 开放中 (OPEN)
    - **内容**: 修复了当模型永久回退（如回退到 `gemini-2.5-flash`）时的一个 Bug。如果立即在同一 Session ID 下重试，Code Assist 后端会返回 `"Please submit a new query"` 错误。此 PR 通过在回退时轮换 Session ID 来解决此问题。
    - **链接**: [PR #28469](https://github.com/google-gemini/gemini-cli/pull/28469)

6.  **[#28305] feat(evals): 添加工具调用格式化和失败摘要**
    - **状态**: 已合并 (CLOSED)
    - **内容**: 为行为评估（evals）增加了工具调用时间线格式化和失败概要分析。当评估失败时，测试运行器会自动在控制台中打印一个紧凑、编号的工具调用历史，包括参数、状态和错误信息，大大提升了调试效率。
    - **链接**: [PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305)

7.  **[#28169] feat(evals): 添加评估覆盖率报告命令**
    - **状态**: 已合并 (CLOSED)
    - **内容**: 新增 `eval:coverage` 命令，用于报告内置工具的评估覆盖率。该命令通过交叉引用评估清单中的工具引用与工具注册表，帮助开发团队发现未覆盖的功能，从而编写更全面的用例测试。
    - **链接**: [PR #28169](https://github.com/google-gemini/gemini-cli/pull/28169)

8.  **[#28433] feat(pr-generator-orchestrator): 实现迭代 Bug 修复状态机和工作容器入口点**
    - **状态**: 开放中 (OPEN)
    - **内容**: 首次提交了一个庞大的功能集合（`size/xl`）。它实现了 Gemini CLI 自动生成 PR 流程的核心编排层，包括 Firestore 并发锁定、迭代式 AI 编码与评估循环、ESLint 静态分析、差异限制验证等。这是一个迈向自动化 DevOps 的重要一步。
    - **链接**: [PR #28433](https://github.com/google-gemini/gemini-cli/pull/28433)

9.  **[#28431] feat(pr-generator-infra): 配置 Cloud Run 任务、Workflows 定义和 Dockerfile**
    - **状态**: 开放中 (OPEN)
    - **内容**: 作为 PR 生成流水线的基础设施部分，此 PR 引入了容器化运行环境、Cloud Run Job 规范和 Eventarc 触发的 Cloud Workflow 配置。标志着该功能已从代码逻辑走向生产化部署。
    - **链接**: [PR #28431](https://github.com/google-gemini/gemini-cli/pull/28431)

10. **[#28468] feat(caretaker): 新增 Triage Cloud Run 任务工作流**
    - **状态**: 开放中 (OPEN)
    - **内容**: 为“看门狗”功能新增了问题自动分类（Triage）的 Cloud Run 任务工作流定义。该工作流由 Pub/Sub 事件触发，执行分类任务并处理结果，是提升 Issue 管理效率的基础设施建设。
    - **链接**: [PR #28468](https://github.com/google-gemini/gemini-cli/pull/28468)

## 功能需求趋势

1.  **代理（Agent）可靠性与一致性**: 社区最强烈的呼声是解决 Agent 行为的“不可预测性”。包括子代理误报状态（#22323）、无限挂起（#21409、#25166）、不听指令（#22093）以及不自主使用已定义的技能（#21968）等。这反映出用户期望 Agent 的行为是确定性和可被信任的。
2.  **安全与沙箱隔离**: 安全是当下的焦点。除了紧急修复的 RCE 漏洞外，社区还提出了零依赖操作系统沙箱的概念（#19873），希望利用模型的原生 bash 能力，但同时通过沙箱和意图路由确保安全，这是一个长期被关注的重大需求。
3.  **评估与质量保障（Eval & QA）**: 项目正大力投资于评估基础设施。多个 PR 和 Issue 围绕如何创建更强大的组件级评估、可视化工具调用轨迹和评估覆盖率。这表明项目正在系统性地提升质量，而不仅仅是修复 Bug。
4.  **基础设施自动化**: 多个大型 PR（#28433, #28431, #28468）都在建设自动化的代码生成、审查和 Issue 处理流水线。这表明 Google 团队正在将 Gemini CLI 自身的管理和开发流程进行自动化，构建一个“吃自己的狗粮”的循环。
5.  **AST 感知工具**: 社区持续关注利用抽象语法树（AST）来提升文件读写、搜索和代码库映射的效率和精度（#22745, #22746）。这被视为减少 Token 消耗和提高 Agent 导航代码库能力的关键方向。

## 开发者关注点

- **“假成功”是最大的误导**: 开发者最讨厌的不是失败，而是“被欺骗”。当子代理达到上限却报告成功（#22323）时，严重破坏了用户对系统反馈的信任。
- **“卡住”比“报错”更令人崩溃**: Agent 无响应、无限挂起（#21409, #25166）是用户反馈中最核心的痛点。用户宁愿得到一个明确的错误信息，也不希望任务悬而未决，浪费时间去猜测和等待。
- **对安全边界的敏感**: 用户对 Agent 在未获明确许可的情况下擅自行动（#22093）非常警觉。开发者希望拥有一个“我可以信任你，但你必须听我的”的控制关系。
- **终端体验的“残留物”**: Shell 命令执行后的“幽灵”进程（#25166）和模型随意丢弃的临时脚本（#23571）破坏了工作区的整洁和可预测性，这对注重工作流秩序的开发者来说难以忍受。
- **调试手段的缺失**: 当子代理出现问题时，用户无法通过 `/bug` 报告获取子代理内部的上下文（#21763）。这导致开发者很难向项目维护者有效反馈问题，形成沟通壁垒。
- **配置的“主权”**: 用户手动设置了配置（如禁用子代理 #22093、设置最大轮次 #22267），却发现这些配置被 Agent 无视，这会造成极大的挫败感和失控感。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-22

## 今日速览
今日发布了 **v1.0.74-0**，新增 `/model plan` 命令用于在计划模式中切换模型，并改进了搜索匹配规则。社区中最热门的讨论集中在 MCP 连接故障（#2282 已关闭）、plan-mode 的 shell 命令回归（#4188）以及长期会话因 5MB 序列化限制无法继续（#4183）。同时，多条关于 MCP 资源/订阅支持和 BYOK 模型兼容性的长期需求仍在推进中。

---

## 版本发布
### v1.0.74-0
**新增**
- `/model plan`（或 `/model --plan`）命令：在计划模式下选择模型。可传入模型 ID、`off` 清除设置，或不传参打开选择器；退出计划模式后自动恢复会话模型。

**改进**
- 搜索匹配：即使空白字符不一致，恢复搜索也能匹配会话标题。

> 链接：[Release v1.0.74-0](https://github.com/github/copilot-cli/releases/tag/v1.0.74-0)

---

## 社区热点 Issues（10 条）

### 1. [#1305] 支持远程 OAuth MCP 服务器的 CIMD（设备码流程）  
**状态**: OPEN | **👍 26** | 评论 4  
**简介**: 现有 DCR 支持不覆盖所有 OAuth 场景，用户希望增加 CIMD 流程以兼容不支持 DCR 的 MCP 服务器。  
**链接**: [Issue #1305](https://github.com/github/copilot-cli/issues/1305)

### 2. [#4188] plan-mode 回归：阻止 shell 命令执行  
**状态**: OPEN | **👍 2** | 评论 3  
**简介**: 最新版本计划模式阻止了以往可用的 shell 命令（如 `gh` CLI），导致 `plan` 无法通过命令丰富计划内容，被认为是回归。  
**链接**: [Issue #4188](https://github.com/github/copilot-cli/issues/4188)

### 3. [#1518] 支持 MCP resources 和 prompts 原始类型  
**状态**: OPEN | **👍 14** | 评论 2  
**简介**: 当前仅支持 tools，缺少 resources 和 prompts，制约了 MCP 全功能集成。  
**链接**: [Issue #1518](https://github.com/github/copilot-cli/issues/1518)

### 4. [#4012] BYOK 模型不支持 `--reasoning-effort` 参数  
**状态**: OPEN | **👍 17** | 评论 2  
**简介**: 用户使用自定义 BYOK 模型时，传入 `--reasoning-effort max` 报错，影响高级推理场景。  
**链接**: [Issue #4012](https://github.com/github/copilot-cli/issues/4012)

### 5. [#2193] `/fleet` 子代理默认模型全局/项目级配置  
**状态**: OPEN | **👍 14** | 评论 3  
**简介**: 目前每次 `/fleet` 子代理需手动指定模型，希望支持全局或项目级的默认模型设定。  
**链接**: [Issue #2193](https://github.com/github/copilot-cli/issues/2193)

### 6. [#4183] 自动压缩无法阻止 5MB CAPI 请求体限制  
**状态**: OPEN | **👍 5** | 评论 2  
**简介**: 长会话虽未超 token 上限，但积累的工具调用历史导致序列化后超过 5MB，自动压缩策略无效，永久卡死。  
**链接**: [Issue #4183](https://github.com/github/copilot-cli/issues/4183)

### 7. [#2282] 无法连接 MCP 服务器（Windows WinGet 安装）  
**状态**: CLOSED | **👍 1** | 评论 11  
**简介**: 用户在 Windows 上通过 WinGet 安装后，内置 `github-mcp-server` 连接失败。该 Issue 已于今日关闭，推测已修复。  
**链接**: [Issue #2282](https://github.com/github/copilot-cli/issues/2282)

### 8. [#4163] Linux 平台子进程未回收，导致僵尸进程累积  
**状态**: OPEN | **👍 0** | 评论 2  
**简介**: `copilot` 进程不回收已结束的子进程，约 2 个/分钟产生僵尸进程，影响系统稳定性。  
**链接**: [Issue #4163](https://github.com/github/copilot-cli/issues/4163)

### 9. [#3976] 原生 `tgrep` 索引器在大 monorepo 上 OOM 杀主机  
**状态**: OPEN | **👍 0** | 评论 1  
**简介**: 启用 `copilot_cli_tgrep` 后，tgrep 守护进程无内存上限，索引大型仓库耗尽内存被系统 OOM-kill。  
**链接**: [Issue #3976](https://github.com/github/copilot-cli/issues/3976)

### 10. [#4206] 环境 footer 永久显示 "Loading: 1 instruction, 40 skills..."  
**状态**: OPEN | **👍 2** | 评论 1  
**简介**: 即使所有 agent/skill 已加载完毕，底部状态栏仍卡在 "Loading:" 状态，不切换为就绪。  
**链接**: [Issue #4206](https://github.com/github/copilot-cli/issues/4206)

---

## 重要 PR 进展

### [#3163] ViewSonic monitor  
**状态**: OPEN | 评论 0 | **👍 0**  
**简介**: 该 PR 描述为 "monitor for #2591,#3561,#3559" 并触发 GitHub Action，内容疑似机器人提交或误操作，与 Copilot CLI 核心功能无关。请谨慎参考。  
**链接**: [PR #3163](https://github.com/github/copilot-cli/pull/3163)

> 注：今日无其他实质性 PR 更新。

---

## 功能需求趋势

从近期 Issues 及标签统计，社区最关注的方向包括：

| 方向 | 代表 Issue | 关键词 |
|------|------------|--------|
| **MCP 协议扩展** | #1518, #3073, #1803 | resources, prompts, subscribe, notifications |
| **远程 OAuth 支持** | #1305, #4203 | CIMD, refresh token, registry policy |
| **模型配置灵活化** | #4012, #2193, #4209 | BYOK, reasoning_effort, fleet default, skill alias |
| **会话与内存管理** | #4183, #2595 | auto-compaction, 5MB limit, agent retention |
| **性能与可靠性** | #3976, #4163 | tgrep OOM, zombie reaping |
| **企业级特性** | #4005, #4205, #4207 | billing entity, org policy, credit breakdown |
| **自定义 Agent 增强** | #4209, #4208 | inline invocation, agent chaining, .agents discovery |
| **渲染与终端兼容** | #4212, #4213 | tmux, key events, pane unfocus |

---

## 开发者关注点

- **高频痛点**  
  - **MCP 连接与认证**：Windows 用户遇到内置 MCP 服务器首次连接失败（#2282 已修复），远程 OAuth 服务器刷新 token 交互繁琐（#4203）。  
  - **plan-mode 破坏性变更**：shell 命令被禁用导致计划流程断裂，需降级或等待补丁（#4188）。  
  - **长会话稳定性**：5MB 序列化上限使长时间工具对话永久失效，自动压缩无效（#4183）。  
  - **资源泄漏**：Linux 僵尸进程累积（#4163）、tgrep 索引器 OOM（#3976）影响生产环境使用。  
  - **环境状态不正确**：footer 卡在 "Loading:" 误导用户（#4206）。  
  - **BYOK 兼容性**：部分模型不支持 `reasoning-effort` 参数，且处理 `reasoning_content` 流式响应出错（#4196）。

- **高频请求**  
  - MCP resources/prompts 支持呼声极高（👍 累计 22+）。  
  - 子代理默认模型配置（#2193）和自定义 agent 技能别名（#4209）可显著提升工作流效率。  
  - 请求增加 per-subagent 信用消耗明细（#4207）以辅助成本核算。

> **日报生成时间**: 2026-07-22 UTC

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# 2026-07-22 Kimi Code CLI 社区动态日报

## 今日速览
过去24小时内无新版本发布，但社区反馈了5个活跃Issue和1个修复PR，涉及MCP Schema兼容性、模型Tool Calling失效、终端输入异常等多个关键问题。其中 **k2.5 模型在 Goal Mode 下无限循环** 和 **MCP工具名称/模式被API拒绝（HTTP 400）** 是当前最影响用户使用的两个严重Bug。

---

## 社区热点 Issues

### 1. MCP tool names & schemas rejected by Moonshot API (HTTP 400) — sanitize client-side before sending
- **Issue #2531** [OPEN]  
- **作者**: sbdsam | **更新**: 2026-07-22 | **评论**: 1  
- **摘要**: 使用 kimi-cli 1.49.0 + K3 模型时，MCP 工具定义中的 `parameters` 字段不符合 Moonshot API 的 JSON Schema 规范（例如 `anyOf` 中缺少 `type`）导致 400 错误。建议在客户端进行清洗。  
- **社区反应**: 已确认是 MCP 标准 Schema 与 Moonshot 专有格式的兼容问题，开发者急需解决以正常使用第三方 MCP 插件。  
- **链接**: [Issue #2531](https://github.com/MoonshotAI/kimi-cli/issues/2531)

### 2. [bug] 界面一直在各种抖动，莫名其妙重新从头渲染整个对话
- **Issue #2474** [OPEN]  
- **作者**: yudichimiantiao | **更新**: 2026-07-21 | **评论**: 1 | 👍 2  
- **摘要**: 在 Linux (x86_64) 上使用 Kimi Code CLI 0.19.2 + K2.7 Code Thinking 模型时，终端 UI 不断重绘整个对话历史，界面频繁抖动。  
- **社区反应**: 两个赞，且有用户遇到类似问题，推测与终端渲染逻辑或数据状态管理有关。  
- **链接**: [Issue #2474](https://github.com/MoonshotAI/kimi-cli/issues/2474)

### 3. [bug] 键盘右边的数字点击后，输入框没有反应
- **Issue #2529** [OPEN]  
- **作者**: woai3c | **更新**: 2026-07-21 | **评论**: 0  
- **摘要**: Windows 平台下，键盘右侧数字小键盘（Numpad）按键无法在输入框中输入数字，怀疑未监听对应按键事件。  
- **社区反应**: 暂无评论，但这是影响日常编码输入的直观问题。  
- **链接**: [Issue #2529](https://github.com/MoonshotAI/kimi-cli/issues/2529)

### 4. [bug] the output is too long when using the shell mode
- **Issue #2528** [OPEN]  
- **作者**: wenli7363 | **更新**: 2026-07-21 | **评论**: 0  
- **摘要**: Windows 上使用 Shell 模式时，输入 `!` 后输出过长，导致界面混乱。  
- **社区反应**: 可能涉及命令输出截断或滚动管理逻辑。  
- **链接**: [Issue #2528](https://github.com/MoonshotAI/kimi-cli/issues/2528)

### 5. k2.5 模型 tool calling 完全失效 + goal mode 无限循环（必现）
- **Issue #2527** [OPEN]  
- **作者**: lesteryan | **更新**: 2026-07-21 | **评论**: 0  
- **摘要**: 使用 k2.5 模型时，任何工具调用（如 Bash）均返回 "Tool not found"，且 Goal Mode 会陷入无限循环，尝试多种格式均失败。  
- **社区反应**: 问题严重，直接导致 k2.5 模型在该场景下不可用。  
- **链接**: [Issue #2527](https://github.com/MoonshotAI/kimi-cli/issues/2527)

---

## 重要 PR 进展

### fix(shell): stop blocking until timeout when a detached child holds the pipes
- **PR #2530** [OPEN]  
- **作者**: ayaangazali | **更新**: 2026-07-21  
- **摘要**: 修复 Shell 模式下因后台进程（如 `some_daemon & echo done`）持有管道导致 `_run_shell_command` 阻塞直到超时的问题。现在会提前检查退出码，避免前台进程被死等。  
- **影响**: 提升 Shell 模式中异步命令的响应性，修复 Issue #2468。  
- **链接**: [PR #2530](https://github.com/MoonshotAI/kimi-cli/pull/2530)

---

## 功能需求趋势
从本日活跃 Issues 可看出社区关注以下方向：
- **MCP 与 API 兼容性**：要求客户端自动清洗 MCP Schema 以适配 Moonshot 专有格式（#2531）。
- **终端交互健壮性**：小键盘输入、Shell 输出过长、UI 抖动等问题反映用户对基础输入/输出体验的迫切需求。
- **多模型 Tool Calling 一致性**：k2.5 模型 Tool Calling 完全失效导致 Goal Mode 无法使用，表明模型适配层存在严重 Bug，需尽快对齐不同模型的行为。

---

## 开发者关注点
- **核心痛点**：k2.5 模型在 Goal Mode 下的无限循环和工具调用失效（#2527）是当前最紧急的阻塞性问题，严重影响高级用户使用意图驱动的工作流。
- **高频诉求**：MCP 工具定义被拒（#2531）已有多人反映，需客户端增加 Schema 清洗逻辑或推动服务端放宽校验。
- **体验细节**：Linux/Windows 平台下的 UI 抖动（#2474）和键盘不响应（#2529）提示 UI 事件处理模块需要跨平台测试覆盖。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，以下是为您生成的 2026年7月22日 OpenCode 社区动态日报。

---

## OpenCode 社区动态日报 | 2026-07-22

### 今日速览

今日社区焦点集中在 **OpenCode Go 付费用户遇到的上游提供商请求被拒问题**，多个相关 Issue 表明该问题可能并非个例，引发广泛关注。此外，围绕 DeepSeek 模型和 TUI 的多个 Bug 修复和功能增强 PR 正在积极推进中，社区活跃度较高。

### 社区热点 Issues

1.  **付费用户“上游提供商拒绝请求”疑云扩散**
    **Issues:** [#38216](https://github.com/anomalyco/opencode/issues/38216), [#38195](https://github.com/anomalyco/opencode/issues/38195), [#38218](https://github.com/anomalyco/opencode/issues/38218), [#38215](https://github.com/anomalyco/opencode/issues/38215)
    **重要性:** ⭐⭐⭐⭐⭐
    **摘要:** 多名付费用户报告，所有 Go 订阅模型的请求均返回 `401 AuthError: Request blocked by upstream provider`，而免费模型可正常使用。问题在桌面端和 Hermes 上均有复现，开发者对此高度关注，急需官方确认和修复。

2.  **`/sessions` 命令作用域错误，显示全局会话**
    **Issue:** [#8836](https://github.com/anomalyco/opencode/issues/8836)
    **重要性:** ⭐⭐⭐⭐
    **摘要:** 用户在特定目录下使用 `/sessions` 命令时，应仅显示当前目录的会话，但实际上列出了所有历史会话。该问题已关闭，但获得 12 个赞，表明对工作目录隔离有强烈需求。

3.  **MCP 禁用状态在重启后丢失**
    **Issue:** [#13763](https://github.com/anomalyco/opencode/issues/13763)
    **重要性:** ⭐⭐⭐⭐
    **摘要:** 用户手动禁用的 MCP 在重启 OpenCode 后会被重新启用，导致用户需要重复操作。这是一个典型的用户态配置持久化问题，影响了用户使用体验。

4.  **自定义 Google Provider API Key 在运行时被丢弃**
    **Issue:** [#21738](https://github.com/anomalyco/opencode/issues/21738)
    **重要性:** ⭐⭐⭐⭐
    **摘要:** 用户配置了自定义 `baseURL` 的 Google AI Provider，模型可被发现并选中，但在实际请求 API 时，配置的 API Key 未被正确传递，导致请求失败。这影响了用户使用第三方代理或自建服务的需求。

5.  **请求 Cursor Rules/Agents 兼容性**
    **Issue:** [#18080](https://github.com/anomalyco/opencode/issues/18080)
    **重要性:** ⭐⭐⭐⭐
    **摘要:** 社区希望 OpenCode 能兼容 Cursor 生态中的规则/代理技能，以方便从 Cursor 迁移的用户。这反映了社区对于主流 AI 编辑器生态整合的期望。

6.  **希望增加禁止自动会话 Diff 摘要的选项**
    **Issue:** [#26035](https://github.com/anomalyco/opencode/issues/26035)
    **重要性:** ⭐⭐⭐
    **摘要:** 对于超长会话，自动生成的 diff 摘要会严重影响处理速度。用户希望增加配置项来关闭这一特性，以获得性能上的自主控制权。

7.  **流式错误块绕过重试机制，导致父进程永久等待**
    **Issue:** [#21979](https://github.com/anomalyco/opencode/issues/21979)
    **重要性:** ⭐⭐⭐
    **摘要:** 当 Provider 返回特定格式的错误 chunks 时（如 `{"error":...}`），OpenCode 无法正确处理，导致重试逻辑失效，进而造成父进程无限期等待。这是一个影响系统稳定性的关键 Bug。

8.  **中断主 Agent 不会停止后台子 Agent**
    **Issue:** [#28738](https://github.com/anomalyco/opencode/issues/28738)
    **重要性:** ⭐⭐⭐
    **摘要:** 实验性的后台子代理功能存在缺陷，用户中断主任务后，后台子代理仍在运行，可能导致资源浪费和任务冲突。

9.  **工作区重命名未同步到文件系统**
    **Issue:** [#14681](https://github.com/anomalyco/opencode/issues/14681)
    **重要性:** ⭐⭐⭐
    **摘要:** 用户在桌面应用中重命名工作区后，UI 显示新名称，但底层文件夹名称未同步更改。这是一个基础功能一致性问题，点赞数较高，说明不少用户关注。

10. **希望在聊天结束后，对 AI 修改的文件执行自定义命令**
    **Issue:** [#28891](https://github.com/anomalyco/opencode/issues/28891)
    **重要性:** ⭐⭐⭐
    **摘要:** 社区提出需求，希望在 AI Agent 完成修改后，能自动触发如代码格式化、Lint 检查等自定义脚本，以提高工作流的自动化程度。

### 重要 PR 进展

1.  **[PR #38229] 修复 DeepSeek 系统提示词冲突**
    **链接:** [#38229](https://github.com/anomalyco/opencode/pull/38229)
    **重要性:** ⭐⭐⭐⭐⭐
    **摘要:** 修复了 DeepSeek 模型因继承通用系统提示词而导致行为异常的问题。该 PR 旨在为 DeepSeek 使用正确的、非冲突的提示词，是提升特定模型可用性的关键修复。

2.  **[PR #38231] 修复 TUI shell 模式样式**
    **链接:** [#38231](https://github.com/anomalyco/opencode/pull/38231)
    **重要性:** ⭐⭐⭐⭐
    **摘要:** 核心贡献者 `jlongster` 提交的修复，解决了 V2 主题迁移后终端用户界面（TUI）中 shell 模式视觉样式丢失的问题，恢复了应有的高亮和标签显示。

3.  **[PR #38232] 保留 DeepSeek V4 模型输出长度限制**
    **链接:** [#38232](https://github.com/anomalyco/opencode/pull/38232)
    **重要性:** ⭐⭐⭐⭐
    **摘要:** 修复了全局设置的 32K 输出限制错误覆盖 DeepSeek V4 模型声明的 384K 输出长度的问题，确保模型能够发挥其长文本生成能力。

4.  **[PR #38031] 补充缺失的中文翻译**
    **链接:** [#38031](https://github.com/anomalyco/opencode/pull/38031)
    **重要性:** ⭐⭐⭐
    **摘要:** 社区贡献者提交了缺失中文翻译的补充，持续完善本地化工作，有利于提升中文用户的使用体验。

5.  **[PR #38067] 修复会话构建模式切换提醒的触发逻辑**
    **链接:** [#38067](https://github.com/anomalyco/opencode/pull/38067)
    **重要性:** ⭐⭐⭐
    **摘要:** 修复了一个性能问题：原先每次检查会话历史以决定是否提醒用户切换构建模式，现在改为通过检测上下文中的特定事件来触发，显著提升了效率。

6.  **[PR #34419] 桌面端新增面板布局切换设置**
    **链接:** [#34419](https://github.com/anomalyco/opencode/pull/34419)
    **重要性:** ⭐⭐⭐
    **摘要:** 计划在桌面端“设置-外观”中增加一个开关，允许用户将侧边栏（聊天/编辑器）从默认的右侧切换至左侧，增加了界面布局的自定义性。

7.  **[PR #38213] 修复时钟偏差导致的响应循环问题**
    **链接:** [#38213](https://github.com/anomalyco/opencode/pull/38213)
    **重要性:** ⭐⭐⭐
    **摘要:** 修复了因客户端和服务器时钟不一致，导致服务器返回错误响应，引发其重试并形成无限循环的 Bug。这是提升网络通信稳定性和健壮性的重要修复。

8.  **[PR #38227] 支持自定义模型推理字段**
    **链接:** [#38227](https://github.com/anomalyco/opencode/pull/38227)
    **重要性:** ⭐⭐⭐
    **摘要:** 新增了顶层 `reasoningField` 模型选项，允许用户定义和传递自定义的 AI 推理字段，增加了对不同模型 API 格式的兼容性。

9.  **[PR #38225] 修复原生 Windows HTTP 服务问题**
    **链接:** [#38225](https://github.com/anomalyco/opencode/pull/38225)
    **重要性:** ⭐⭐⭐
    **摘要:** 修复了在 Windows 系统上，OpenCode 基于 `node:http` 创建的 Server 虽然绑定端口成功但实际无法接受连接的问题，改用 `Bun.serve` 以解决此兼容性问题。

10. **[PR #37097] Web UI 中显示 Shell 命令执行时的实时输出**
    **链接:** [#37097](https://github.com/anomalyco/opencode/pull/37097)
    **重要性:** ⭐⭐⭐
    **摘要:** 改进了 Web UI 的体验：在 Shell 命令执行过程中，默认展开输出区域，让用户能看到实时的命令和输出，而不再是仅显示一个“Shell”标题和转圈图标。

### 功能需求趋势

- **模型兼容性与扩展性**：社区对 **DeepSeek**、**MiniMax** 等特定模型的支持和优化呼声很高，同时希望有更灵活的 **自定义 Provider** 配置和字段映射能力。
- **会话管理与工作流优化**：对于 `/sessions` 的作用域隔离、**子代理** 的生命周期管理、以及**会话后自动化**（如运行自定义脚本）的需求日益增长，表明用户希望获得更精细的控制和更自动化的流程。
- **UI/UX 增强**：除了常规的主题和布局自定义（如侧边栏位置、面板布局），社区对 **TUI** 的性能和功能（如实时进度指示器、工具执行时间戳）提出了更高要求。
- **性能与稳定性**：关于“上游提供商拒绝请求”和“流式错误处理”等问题的集中反馈，凸显了社区对核心链路稳定性和健壮性的高度关注。

### 开发者关注点

- **核心服务中断**：最严重的痛点集中在 **OpenCode Go 付费服务大面积不可用**，这不是一个简单的配置问题，很可能指向后端认证或计费服务的 Bug，开发者正在迫切等待官方修复。
- **配置持久化失效**：**MCP 状态**和 **工作区重命名**不持久的问题，反映出配置管理方面的不足，开发者期望自己的个性化设置能够被可靠地保存。
- **API 密钥安全与传递**：**自定义 Provider 的 API Key 在运行时被丢弃**是一个致命问题，直接导致服务不可用，严重影响了用户通过代理或自建 Gateway 接入模型的路径。
- **长时间运行任务的可见性和控制性**：无论是 Shell 命令还是子 Agent，用户都希望获得更清晰的**实时状态反馈**和**有效的打断机制**，目前的“黑盒”状态是开发者的主要痛点。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-22

数据来源：`github.com/earendil-works/pi`（原 `badlogic/pi-mono`）

---

## 今日速览

Pi 团队今日发布 **v0.81.1**，提供可验证的发布源存档与独立二进制重建指南；与此同时，**v0.81.0 的 local llama.cpp 模型管理** 功能引发大量反馈。社区围绕本地 LLM 栈的不稳定（超时、崩溃）、自动压缩策略缺陷以及 OAuth/外部编辑器体验展开了密集讨论。值得关注的还有多项针对 SDK 可用性与安全性的 PR 合并。

---

## 版本发布

### v0.81.1 — 可验证的发布源存档
- **新特性**：GitHub Releases 现在包含确定性、校验和的源存档，并提供从源重建独立二进制的说明。
- 链接：[Release v0.81.1](https://github.com/earendil-works/pi/releases/tag/v0.81.1) | [重建说明文档](https://github.com/earendil-works/pi/blob/v0.81.1/README.md)

### v0.81.0 — Local llama.cpp 模型管理
- **新特性**：支持连接 llama.cpp 路由器，搜索和下载 Hugging Face 模型，显式加载/卸载模型并展示进度。
- 链接：[Release v0.81.0](https://github.com/earendil-works/pi/releases/tag/v0.81.0) | [llama.cpp 文档](https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md)

---

## 社区热点 Issues（10 条）

1. **[#3357] [CLOSED] Official local LLM provider extension** — 提议从 `{baseUrl}/models` 动态获取模型列表，以 hook llama.cpp/Ollama/LM Studio。社区点赞 43，评论 30，表明本地模型接入是核心需求。  
   [链接](https://github.com/earendil-works/pi/issues/3357)

2. **[#6278] [CLOSED] [bug] New Claude models edit tool 20% 编辑失败** — 因 LLM 注入额外字段导致验证失败。影响新 Claude 模型体验。  
   [链接](https://github.com/earendil-works/pi/issues/6278)

3. **[#5653] [OPEN] Move off Shrinkwrap** — `pi-ai` 被重复打包导致模块级 `Map` 分离，触发 API 提供者注册异常。是长期依赖管理痛点。  
   [链接](https://github.com/earendil-works/pi/issues/5653)

4. **[#6915] [CLOSED] [bug] v0.81.0 更新后崩溃：streamFunction is not a function** — 恢复会话时抛出 `TypeError`，影响多人。v0.81.0 的回归 bug。  
   [链接](https://github.com/earendil-works/pi/issues/6915)

5. **[#6747] [OPEN] API for enhancing agent message markdown** — 允许扩展修改消息渲染而不影响 LLM 内容，用于公式渲染等。反映社区对可视化的需求。  
   [链接](https://github.com/earendil-works/pi/issues/6747)

6. **[#6774] [OPEN] Ctrl+G 外部编辑器启动慢** — 在 `os.tmpdir()` 拥挤时频繁写入导致延迟，建议使用私有的 `mkdtemp` 目录。  
   [链接](https://github.com/earendil-works/pi/issues/6774)

7. **[#6920] [CLOSED] [Bug] Autocomplete crash: value.startsWith is not a function** — 输入 `/` 时崩溃，涉及多个自动完成路径。影响日常交互。  
   [链接](https://github.com/earendil-works/pi/issues/6920)

8. **[#6879] [OPEN] auto-compaction 超过 100% 仍未触发** — 直到 API 拒绝请求（373k tokens）才压缩。批评当前触发策略，建议每次代理回合后检查。  
   [链接](https://github.com/earendil-works/pi/issues/6879)

9. **[#6911] [CLOSED] OpenAI SDK retry 睡眠数天且 Escape 无法打断** — 当 `maxRetries > 0` 时，SDK 使用非可中断的 `setTimeout` 睡眠整个 `Retry-After` 头（甚至几天）。极严重的资源阻塞。  
   [链接](https://github.com/earendil-works/pi/issues/6911)

10. **[#2557] [CLOSED] [bug] `tool_call` `edit` 冲突时仍触发事件且扩展无法检测** — 旧文本变成 `oldText` 但扩展无从知晓冲突，导致编辑乱序。  
    [链接](https://github.com/earendil-works/pi/issues/2557)

---

## 重要 PR 进展（10 条）

1. **#6916 [OPEN] feat(agent): add AgentHarness execution tools** — 引入 `AgentHarnessTool`，支持应用特定上下文（如 `ExecutionEnvironment`），为未来可扩展执行器铺路。  
   [链接](https://github.com/earendil-works/pi/pull/6916)

2. **#6935 [OPEN] feat(ai): add Kimi Code subscription OAuth login** — 为 `kimi-coding` 提供者增加 RFC 8628 设备授权流程，支持刷新令牌和重试。  
   [链接](https://github.com/earendil-works/pi/pull/6935)

3. **#6933 [CLOSED] fix(coding-agent): disable undici idle timeout for local LLMs** — 将默认 HTTP 空闲超时从 5 分钟改为 0（禁用），避免慢速本地 LLM（vLLM、llama.cpp）因 bodyTimeout 中断。  
   [链接](https://github.com/earendil-works/pi/pull/6933)

4. **#6936 [CLOSED] fix(coding-agent): add reentrancy guard to fork and clone operations** — 防止快速重复触发 `/fork` 导致多个克隆会话并发创建。  
   [链接](https://github.com/earendil-works/pi/pull/6936)

5. **#6901 [CLOSED] compaction & branch summarization follow retry policy** — 压缩与分支摘要现在使用重试策略，修复了单次流断开导致整个压缩失败的问题。  
   [链接](https://github.com/earendil-works/pi/pull/6901)

6. **#6912 [CLOSED] fix(ai): never enable OpenAI/Anthropic SDK Retry-After sleeps** — 强制 SDK 的 `maxRetries` 为 0，防止被 API 的多小时 `Retry-After` 锁死。  
   [链接](https://github.com/earendil-works/pi/pull/6912)

7. **#6927 [OPEN] Add native OpenRouter OAuth support** — 通过浏览器授权 + PKCE + 本地一次性回调实现 OpenRouter OAuth，返回用户控制的 API key。  
   [链接](https://github.com/earendil-works/pi/pull/6927)

8. **#6925 [CLOSED] fix(clipboard): await wl-copy exit code before claiming success** — `/copy` 命令现在等待 `wl-copy` 实际退出，避免在 Wayland 不可用时虚假成功。  
   [链接](https://github.com/earendil-works/pi/pull/6925)

9. **#6903 [OPEN] fix(coding-agent): speed up external editor launch** — 将外部编辑器临时文件改为 subfolder，避免 `os.tmpdir()` 拥挤时性能退化。  
   [链接](https://github.com/earendil-works/pi/pull/6903)

10. **#6902 [CLOSED] update deprecated github actions** — 将 `actions/checkout` 等升级到最新版本（Node 24），修复 CI 稳定性。  
    [链接](https://github.com/earendil-works/pi/pull/6902)

---

## 功能需求趋势

从近 24 小时活跃的 Issues 中可观察到以下社区关注方向：

| 方向 | 典型需求 | 相关 Issue |
|------|----------|------------|
| **本地模型集成** | llama.cpp、Ollama 动态模型列表管理；慢模型超时处理 | #3357, #6933, #6915 |
| **OAuth 与认证** | Kimi、OpenRouter 原生 OAuth，Bedrock bearer token 映射 | #6935, #6927, #6163 |
| **扩展系统增强** | 消息 markdown 增强 API；请求延期重载；事件上下文 | #6747, #6552 |
| **可靠性与可恢复性** | 压缩失败重试；SDK retry 可中断；编辑冲突检测 | #6901, #6912, #2557 |
| **编辑器体验** | 外部编辑器启动性能；自动完成崩溃；Tab 补全后空格问题 | #6774, #6920, #5593 |
| **跨平台兼容** | Windows 路径模式支持；Termux arm64 安装 | #6817, #6899 |

---

## 开发者关注点

近期用户反馈中高频出现的痛点和诉求：

- **v0.81.0 稳定性回归**：多个用户报告更新后崩溃（`streamFunction is not a function`，#6915），团队已迅速发布 v0.81.1 但仍需关注根本原因。
- **压缩策略缺陷**：自动压缩在上下文超 100% 后才触发，导致 API 拒绝请求（#6879）。开发者认为应在每次代理回合后检查。
- **SDK 重试陷阱**：OpenAI/Anthropic SDK 的 `Retry-After` 睡眠不可打断，且可长达数天，导致 Pi 进程完全锁死（#6911）。PR #6912 已修复，社区高度认可。
- **依赖管理混乱**：`shrinkwrap` 导致 `pi-ai` 重复出现，API 提供者注册错乱（#5653），社区呼吁彻底迁移出 shrinkwrap。
- **外部编辑器性能瓶颈**：当 `os.tmpdir()` 中存在大量文件时，`Ctrl+G` 启动延迟严重（#6774），建议切换到专用子目录。

---

*本日报基于 GitHub 公开数据自动生成，仅供技术交流参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-07-22

## 今日速览

- **正式版 v0.20.1 发布**：包含自动修复标签驱动接管等核心功能，无已知破坏性变更。
- **多个模态切换与工具调用 Bug 集中修复**：社区反馈的 `enable_thinking` 参数冲突、子代理模型突变、Web Shell Token 丢失等问题均已关闭。
- **社区功能需求持续聚焦**：会话管理、Web Shell 工作区选择器、背景子代理恢复等长期呼声较高的特性正在推进中。

---

## 版本发布

### [v0.20.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1) — 正式版
- **Highlights**：无破坏性变更。
- **Features**：`feat(autofix): label-driven takeover and release; fix forced-dispatch green no-op`（PR [#7165](https://github.com/QwenLM/qwen-code/pull/7165)）。
- 其他变更请参阅完整 changelog。

### [v0.20.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-preview.0) 与 [v0.20.0-nightly.20260722](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260722.b98306b7e)
- 新增遥测测试：`test(telemetry): Cover daemon metrics init ordering and document metricReader asymmetry`（PR [#7456](https://github.com/QwenLM/qwen-code/pull/7456)）。

### [cua-driver-rs v0.7.3](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.7.3)
- 预构建二进制包，支持相对坐标功能。
- **macOS**：已公证并签名；**Linux/Windows**：未签名（x86_64 + arm64）。

---

## 社区热点 Issues

挑选过去 24 小时内更新、且评论数较多或影响较大的 10 个 Issue：

### 1. [#7156](https://github.com/QwenLM/qwen-code/issues/7156) — [CLOSED] 子代理导致主会话模型突变（P1）
**症状**：修复 #7119 后，同一 400 错误通过不同代码路径重现：子代理执行期间主会话模型被静默切换。  
**社区反应**：11 条评论，已关闭。核心团队已定位根因并合入修复。

### 2. [#7316](https://github.com/QwenLM/qwen-code/issues/7316) — [CLOSED] OpenAI 对 toolCall 的特殊反应导致子代理不可用（P2）
**症状**：使用 `isolation: "worktree"` 时，部分 OpenAI 兼容模型为可选参数返回空字符串，导致验证失败。  
**社区反应**：5 条评论，已关闭。修复聚焦于 schema 兼容性。

### 3. [#7056](https://github.com/QwenLM/qwen-code/issues/7056) — [OPEN] VS Code 扩展连接 Qwen ACP 进程异常退出（Windows）
**症状**：`qwen-code-vscode-ide-companion` v0.19.11 在 Windows 上连接失败，ACP 进程退出码 0。  
**社区反应**：5 条评论，仍开放。疑似 Electron 选项传递问题，欢迎贡献。

### 4. [#7284](https://github.com/QwenLM/qwen-code/issues/7284) — [CLOSED] side-query 强制禁用 thinking 导致 TokenPlan 端点 400（P1）
**症状**：`runSideQuery`（用于 web_fetch、分类器等）始终发送 `enable_thinking: false`，对需要 thinking 的端点报错。  
**社区反应**：4 条评论，已关闭。修复已合并。

### 5. [#7306](https://github.com/QwenLM/qwen-code/issues/7306) — [OPEN] 强化工具输出预算、可观测性与工件生命周期（Phase 1 已完成）
**内容**：元 Issue，Phase 1 已合并（#7323），Phase 2-4 规划观测性、工件生命周期与预算演进。  
**社区反应**：4 条评论，仍开放。

### 6. [#7427](https://github.com/QwenLM/qwen-code/issues/7427) — [OPEN] Web Shell 工件面板自动刷新时频繁报错“Load artifacts failed”
**症状**：在 `qwen serve` web shell 中，工件面板每次自动刷新都弹出错误 Toast，影响体验。  
**社区反应**：4 条评论，开放中，欢迎贡献修复。

### 7. [#5540](https://github.com/QwenLM/qwen-code/issues/5540) — [OPEN] 允许恢复已完成的背景子代理（revive via send_message）
**内容**：背景子代理当前为一次性调用，完成后 `send_message` 硬失败。社区希望支持恢复已完成代理。  
**社区反应**：4 条评论，开放中，标注 roadmap/subagents-tools。

### 8. [#7049](https://github.com/QwenLM/qwen-code/issues/7049) — [CLOSED] 更新检查超时体验优化：警告代替错误，超时预算提升（P3）
**内容**：在部分网络环境下 `registry.npmjs.org` 访问慢，建议将超时报错改为警告并延长超时。  
**社区反应**：3 条评论，已关闭。相关修复已合并。

### 9. [#7287](https://github.com/QwenLM/qwen-code/issues/7287) — [OPEN] 自动记忆 MEMORY.md 未注册到 FileReadCache，导致首次写入被拒（P2）
**症状**：模型加载 `MEMORY.md` 后尝试写入时，因 `checkPriorRead()` 判定未读取而拒绝。  
**社区反应**：3 条评论，开放中。正在准备修复。

### 10. [#7440](https://github.com/QwenLM/qwen-code/issues/7440) — [CLOSED] web_fetch 工具完全不可用（P1）
**症状**：内部侧查询因 `enable_thinking` 参数错误而失败，导致任何 URL 都无法获取内容。  
**社区反应**：2 条评论，已关闭。根因同 #7284。

---

## 重要 PR 进展

挑选过去 24 小时内更新、且功能/修复影响较大的 10 个 PR：

### 1. [#7471](https://github.com/QwenLM/qwen-code/pull/7471) — [OPEN] feat(web-shell): 添加 Git 模式选择器
**内容**：在 Web Shell 新会话流程中增加统一的 Git 模式选择器，支持“当前分支”、“新分支”、“裸工作树”三种工作流。  
**重要性**：改善多人协作与版本管理体验。

### 2. [#7467](https://github.com/QwenLM/qwen-code/pull/7467) — [OPEN] feat(web-shell): 添加渲染文件预览
**内容**：为 Web Shell 审查面板中的 HTML/Markdown 文件提供即时预览（HTML 沙箱 iframe，Markdown 使用现有渲染器）。  
**重要性**：提升对生成内容的直观审查能力。

### 3. [#7453](https://github.com/QwenLM/qwen-code/pull/7453) — [OPEN] fix(acp-bridge): 关闭 #7400 自审后续问题
**内容**：修复 4 个问题：移除运行中 prompt 不再丢失终端、精确化传递终端状态、记录 reader 关闭传递、修复 token 事件前置格式化。  
**重要性**：核心 daemon prompt 终端的“恰好一次”语义保障。

### 4. [#7279](https://github.com/QwenLM/qwen-code/pull/7279) — [OPEN] feat(core): 传播可信 daemon 调用上下文
**内容**：为 daemon 发起的根 prompt 添加最小可信调用上下文，包括版本、会话 ID、prompt ID 等，并通过私有 ACP 子进程通道认证。  
**重要性**：增强安全性，防止伪造请求。

### 5. [#7468](https://github.com/QwenLM/qwen-code/pull/7468) — [OPEN] fix(core): 记录自动记忆索引读取到 FileReadCache
**内容**：当自动记忆 `MEMORY.md` 索引加载到系统提示时，将其注册到会话 `FileReadCache` 中，解决首次写入被拒的问题。  
**重要性**：直接修复 #7287 所述 Bug。

### 6. [#7395](https://github.com/QwenLM/qwen-code/pull/7395) — [OPEN] feat(cli): 支持通过设置自定义技能目录
**内容**：新增 `skills.directories` 设置，支持多个额外目录扫描技能（SKILL.md），便于跨工具共享技能。  
**重要性**：解决技能组织与共享的长期需求。

### 7. [#7388](https://github.com/QwenLM/qwen-code/pull/7388) — [OPEN] feat(daemon): 添加显式通道投递
**内容**：为 daemon 通知、agent prompt 终态、定时任务终态添加显式通道投递契约，认证调用者选择命名通道并指定用户/聊天目标。  
**重要性**：为多会话/多用户路由提供基础。

### 8. [#7408](https://github.com/QwenLM/qwen-code/pull/7408) — [OPEN] perf(web-shell): 优化长会话渲染
**内容**：当对话超过 500 UI 块且空闲、无 SSE 事件时，自动卸载移动端视图，保留侧边栏访问历史。  
**重要性**：显著提升长时间运行会话的 Web Shell 内存与响应性能。

### 9. [#7463](https://github.com/QwenLM/qwen-code/pull/7463) — [OPEN] feat(sdk-java): 添加 daemon 传输层
**内容**：为 Java SDK 添加 Java 11 daemon 传输层，支持线程作用域会话、分离 prompt 准入与终端完成。  
**重要性**：服务端 Java 集成的重要基础设施。

### 10. [#7459](https://github.com/QwenLM/qwen-code/pull/7459) — [OPEN] feat(core): 恢复背景 agent 列表
**内容**：当父会话再次打开时，恢复保留的背景 agent 列表（中断的 agent 标记为 paused，完成的标记为 completed）。  
**重要性**：解决 #5540 中提到的背景子代理恢复需求。

---

## 功能需求趋势

从近期 Issue 与 PR 中提炼社区最关注的功能方向：

- **会话管理与子代理增强**：恢复已完成的背景子代理（#5540）、子代理列表持久化（#7459）、子代理模型隔离（#7156）等持续受关注。
- **Web Shell 用户体验**：工作区选择器（#6700）、Git 模式选择器（#7471）、长会话渲染优化（#7408）、文件预览（#7467）等直观体验改进。
- **技能与多环境共享**：自定义技能目录（#7395）、工作区信任热更新（#7268）、跨工具技能复用。
- **模型与 Token 管理**：thinking-enabled 参数兼容性（#7284、#7440）、Token 用量记录准确性（#7384）、多区域 Token Plan 选择（#7252）。
- **CI/CD 与基础设施**：智能审查路由（#7469）、Java SDK 传输层（#7463）、发布流程自动化（#7474）。

---

## 开发者关注点

从开发者反馈中总结的痛点与高频需求：

- **模型参数兼容性混乱**：多个 Issue 反映内部操作（side-query、分类器）强制 `enable_thinking: false`，与 thinking-only 模型冲突，导致 400 错误。建议统一内部请求参数策略。
- **Windows 与 Docker 沙箱的 cwd 问题**：`qwen serve` 的 Docker 沙箱在 Windows 下传递无效工作目录，导致 shell 工具执行失败（#7139）。
- **更新检查超时与错误分类**：部分网络环境（如中国区）下 `registry.npmjs.org` 超时体验不佳（#7049），且错误分类逻辑未覆盖实际错误形状（#7423）。
- **Web Shell Token 丢失**：使用 `--token` 启动后页面刷新丢失 bearer token（#7301），需要持久化机制。
- **自动记忆写入阻塞**：`MEMORY.md` 因未注册到 FileReadCache 导致首次写入被拒，模型需重试才能成功（#7287）。
- **cron 解析器偏差**：`*/N` 步长在 day-of-month/week 上偏离 vixie 语义（#7452），影响定时任务可靠性。

---

*数据来源：GitHub QwenLM/qwen-code 仓库，截止 2026-07-22 UTC。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# CodeWhale TUI 社区动态日报 (2026-07-22)

> 基于 GitHub 项目 [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) 数据生成，本日报反映 DeepSeek TUI 相关社区的最新进展。

---

## 今日速览

- **v0.9.1 发布冲刺进入最后阶段**：团队在过去 24 小时内合并了 10+ 个修复 PR，涵盖 Enter 发送延迟、长输出无法滚动、子 Agent 工作目录错误等关键问题；同时 `/skills` 统一管理器已落地，标志着技能管理功能趋于稳定。
- **社区反馈集中于 UI 可用性和配置体验**：多个 issue 指出 TUI 卡顿、输出截断、自托管模型限流问题，已于今明两天得到快速修复。
- **新功能 PR 持续引入**：来自外部贡献者的 TelecomJS 提供商支持、HarmonyOS 构建适配等 PR 仍处于开放状态，社区参与活跃。

---

## 社区热点 Issues

以下挑选 10 个最值得关注的 Issue（含过去 24 小时更新）：

### 1. [#2870] EPIC: staged command-boundary refactor for #2791
- **状态**：OPEN | 评论 16 | 更新 2026-07-22
- **重要性**：v0.9.1 阻塞项，涉及命令边界的重构，直接影响子 Agent 调度和路由正确性。
- **社区反应**：作者 aboimpinto 持续跟踪拆分为多个可合并的小层，今日仍有更新。
- [链接](https://github.com/Hmbown/CodeWhale/issues/2870)

### 2. [#2766] UI refactor needed
- **状态**：OPEN | 评论 9 | 更新 2026-07-22
- **重要性**：用户抱怨输出难以复制、确认弹窗遮挡主界面，是 TUI 可用性的核心痛点。
- **社区反应**：多人参与讨论，今日有新的评论建议增加“复制到剪贴板”按钮。
- [链接](https://github.com/Hmbown/CodeWhale/issues/2766)

### 3. [#2889] Work Agent rows: real sub-agent details and structured current activity
- **状态**：OPEN | 评论 7 | 更新 2026-07-22
- **重要性**：v0.9.1 阻塞项，要求侧边栏的 Agent 行显示真实的子 Agent 详情和结构化活动，而非原始工具噪音。
- **社区反应**：Hmbown 重新提交了设计方向，社区期待该功能提升多 Agent 工作流的可操作性。
- [链接](https://github.com/Hmbown/CodeWhale/issues/2889)

### 4. [#4410] Restore xAI device-code OAuth login and surface endpoint errors
- **状态**：CLOSED | 评论 7 | 更新 2026-07-21
- **重要性**：xAI 设备登录失败，根本原因是硬编码的 OAuth 路径错误。已修复并合并，对 Grok CLI 用户至关重要。
- [链接](https://github.com/Hmbown/CodeWhale/issues/4410)

### 5. [#2886] Enhancement: add Gherkin acceptance E2E coverage for tool lifecycle
- **状态**：OPEN | 评论 6 | 更新 2026-07-22
- **重要性**：要求为工具生命周期增加 Gherkin 验收测试，是提高代码质量和回归防御的关键基础设施。
- **社区反应**：aboimpinto 持续推动，今日有追加的测试用例讨论。
- [链接](https://github.com/Hmbown/CodeWhale/issues/2886)

### 6. [#1917] Proposal: universal PreToolUse/PostToolUse hook layer
- **状态**：OPEN | 评论 5 | 更新 2026-07-22
- **重要性**：提出统一的钩子层以实现所有操作的取消/暂停/恢复，是架构层面的长期改进提案。
- **社区反应**：今日有工程师回复，认为该模式可复用于子 Agent 和 Workflow。
- [链接](https://github.com/Hmbown/CodeWhale/issues/1917)

### 7. [#4650] v0.9.1: Completion board, exact final dogfood, and no-publish release gate
- **状态**：OPEN | 评论 3 | 更新 2026-07-21
- **重要性**：v0.9.1 完成的集成看板，标记了最终 dogfood 测试和发布闸门，是团队当前工作重心。
- [链接](https://github.com/Hmbown/CodeWhale/issues/4650)

### 8. [#4603] Long output content cannot scroll — content truncated beyond viewport
- **状态**：CLOSED | 评论 3 | 更新 2026-07-21
- **重要性**：Windows 用户报告长输出无法滚动，严重影响日常使用。已通过 PTY 场景测试锁定修复。
- [链接](https://github.com/Hmbown/CodeWhale/issues/4603)

### 9. [#4605] Enter key send lag — UI freezes for hundreds of milliseconds
- **状态**：CLOSED | 评论 3 | 更新 2026-07-21
- **重要性**：多个版本存在的性能回归（0.6.x~0.9.0），Enter 发送消息时 UI 冻结 200~1200ms。已由社区贡献者 SamhandsomeLee 修复。
- [链接](https://github.com/Hmbown/CodeWhale/issues/4605)

### 10. [#4660] 添加自定义的提供商和大模型的配置方式 (feat request)
- **状态**：OPEN | 评论 1 | 更新 2026-07-21
- **重要性**：中文用户提出参考 kimi code 的配置方案，反映社区对灵活配置的强烈需求。
- [链接](https://github.com/Hmbown/CodeWhale/issues/4660)

---

## 重要 PR 进展

挑选 10 个重要的 Pull Request（过去 24 小时内更新）：

### 1. [#4679] feat(skills): unified /skills manager with audit and owned mutations
- **状态**：OPEN（2026-07-22 创建）
- **功能**：实现统一的 `/skills` 管理器，覆盖清单、审计、安装/导入、更新、移除、信任等操作。对接 v0.9.1 完成看板。
- **贡献者**：SamhandsomeLee
- [链接](https://github.com/Hmbown/CodeWhale/pull/4679)

### 2. [#4673] fix(shell): default no-cwd shell commands to context.workspace
- **状态**：CLOSED（2026-07-21 合并）
- **修复**：BashTool 未指定 `cwd` 时默认使用子 Agent 的工作树目录，解决子 Agent 命令在父仓库中误执行的问题。
- **贡献者**：fleitz
- [链接](https://github.com/Hmbown/CodeWhale/pull/4673)

### 3. [#4675] Integrate CodeWhale v0.9.1 runtime and release surface
- **状态**：OPEN（2026-07-21 更新）
- **功能**：集成 v0.9.1 运行时简化、空 Work 修复及最终 TUI 颜色语法（模式色/权限色）。
- **贡献者**：Hmbown
- [链接](https://github.com/Hmbown/CodeWhale/pull/4675)

### 4. [#4654] fix(tui): acknowledge Enter before slow send prep
- **状态**：CLOSED（2026-07-21 合并）
- **修复**：分离 UI 确认与慢速发送准备，按 Enter 后立即显示“Preparing”状态，消除 200~1200ms 冻结。
- **贡献者**：SamhandsomeLee
- [链接](https://github.com/Hmbown/CodeWhale/pull/4654)

### 5. [#4653] test(tui): lock long-output transcript scrolling with a PTY scenario
- **状态**：CLOSED（2026-07-21 合并）
- **修复**：通过 PTY 端到端测试锁定长输出滚动行为，确保内容不被截断且支持滚动。
- **贡献者**：Hmbown
- [链接](https://github.com/Hmbown/CodeWhale/pull/4653)

### 6. [#4652] feat(cli): add public --no-project-config for reproducible headless exec
- **状态**：CLOSED（2026-07-21 合并）
- **功能**：新增 `--no-project-config` 标志，使无头执行模式配置可重复，方便测试和 CI。
- [链接](https://github.com/Hmbown/CodeWhale/pull/4652)

### 7. [#4658] feat(runtime-api): add provider registry + switch endpoints
- **状态**：CLOSED（2026-07-21 合并）
- **功能**：新增三个运行时 API 端点，支持动态提供商/模型选择器和原子切换，避免配置覆盖问题。
- **贡献者**：gaord
- [链接](https://github.com/Hmbown/CodeWhale/pull/4658)

### 8. [#4656] fix(route): honor explicit limits for unknown local models
- **状态**：CLOSED（2026-07-21 合并）
- **修复**：自托管路由中，用户显式设置的输出限制不再被 4K 兼容性回退覆盖。
- **贡献者**：h3c-hexin
- [链接](https://github.com/Hmbown/CodeWhale/pull/4656)

### 9. [#4657] fix(streaming): report progress on idle timeouts
- **状态**：CLOSED（2026-07-21 合并）
- **修复**：流式空闲超时错误中包含已接收字节数和时序，帮助区分预填充停滞与部分输出中断。
- **贡献者**：h3c-hexin
- [链接](https://github.com/Hmbown/CodeWhale/pull/4657)

### 10. [#4370] feat: add TelecomJS provider support with configuration and catalog
- **状态**：OPEN（2026-07-21 更新）
- **功能**：添加电信江苏（TelecomJS）提供商支持，修复模型选择器只显示一个模型的问题。
- **贡献者**：baendlorel
- [链接](https://github.com/Hmbown/CodeWhale/pull/4370)

---

## 功能需求趋势

从今日 Issue 和 PR 中提炼出社区最关注的三大功能方向：

1. **统一技能管理**：`/skills` 命令成为中心管理入口，支持发现、安装、审计、信任等操作，社区贡献者积极参与实现。
2. **灵活的提供商/模型配置**：多个 issue（如 #4660、#4370）要求支持自定义提供商、自托管模型，并简化配置方式（参考 kimi code）。
3. **子 Agent 工作流可视化**：包括 Agent 行展示真实子 Agent 状态、活动结构、权限分离（#2889、#1917），以应对多 Agent 协作的复杂性。

此外，**跨平台兼容性**（HarmonyOS 构建 #4566）和 **UI 可用性**（滚动、延迟、复制）仍是持续关注点。

---

## 开发者关注点

开发者反馈的痛点与高频需求总结如下：

- **性能卡顿**：Enter 发送延迟、长输出截断是最高频的 UI 问题，已通过 #4653、#4654 修复。
- **工作目录混乱**：子 Agent 中使用 BashTool 时不指定 `cwd` 导致命令运行在父仓库，严重影响开发流程，已通过 #4673 修复。
- **自托管模型限制**：未知模型被 4K 输出限制误封，通过 #4656 修复，允许用户显式指定上限。
- **OAuth 登录失败**：xAI 设备码登录因路径硬编码出错，已修复（#4410）。
- **配置流程复杂**：用户希望像 kimi code 一样有更直观的提供商/模型配置界面（#4660）。
- **权限状态持久化**：模式/权限切换重启后丢失，有相关 issue 讨论（#4628），并被纳入 v0.9.1 合约。

> 总体来看，v0.9.1 发布前的这一周，社区和团队协作紧密，大量阻塞性问题被快速解决，TUI 的稳定性和可用性显著提升。预计不久后即可迎来正式发布。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*