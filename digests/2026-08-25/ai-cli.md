# AI CLI 工具社区动态日报 2026-08-25

> 生成时间: 2026-08-25 11:00 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向分析报告 — 2026-08-25

## 1. 生态全景

当前 AI CLI 工具整体处于**功能扩张与稳定性拉锯**阶段：既有核心编码协作能力的持续增强（多代理、上下文管理、IDE 深度集成），也伴随大量认证、跨平台兼容、资源失控等基建层面的回归问题。社区关注焦点正从"模型能力"转向"工程可靠性"——挂起、假成功、配额误差、进程泄漏成为高频痛点。生态层面呈现明显的**功能趋同**：多工具同时在补多代理编排、上下文压缩、MCP 集成、Web Shell/桌面端产品化。与此同时，**成本透明化**（token 归因、计费可视化）正在成为新兴的社区需求分野。整体态势健康但竞争激烈，工具间的差异化窗口正在收窄。

## 2. 各工具活跃度对比

| 工具 | 今日活跃 Issues | 今日 PR 更新 | Releases | 社区活跃评级 |
|------|:---:|:---:|------|:---:|
| Claude Code | 10 个热点（开放 5/关闭 5） | 4 | v2.1.245（修复 glibc 2.44 崩溃） | ★★★★★ |
| OpenAI Codex | 12 个热点 | 15+（copyberry[bot] 批量合入） | rust-v0.150.0-alpha.8（预发布） | ★★★★★ |
| Gemini CLI | 10 个热点 | 10 | v0.56.0-nightly + v0.57.0-preview.1 | ★★★★☆ |
| GitHub Copilot CLI | 10 个热点 | 1（且为无效 PR） | v1.0.81-9（/model 留存警告） | ★★★☆☆ |
| Kimi Code CLI | 1 条更新 | 0 | 无 | ★☆☆☆☆ |
| OpenCode | 10 个热点 | 10 | v1.18.23 + v1.18.22（一日两版） | ★★★★☆ |
| Pi | 10 个热点 | 10 | v0.84.3（PowerShell 工具） | ★★★★☆ |
| Qwen Code | 10 个热点 | 10 | v0.22.0-nightly | ★★★★☆ |
| DeepSeek TUI (CodeWhale) | 10 个热点 | 10 | 0.9.12 分支持续集成中，v0.9.11 已发布 | ★★★★☆ |

**补充说明：**
- Claude Code 和 OpenAI Codex 在问题讨论深度（高评论数、多 👍）上领先；
- Kimi Code CLI 今日近乎静默（仅 1 条 issue 更新、0 PR），社区活跃度明显低于其余工具；
- OpenCode 迭代最快（24 小时内双版本发布），但核心阻塞问题（付费模型 503）持续月余未解决；
- Copilot CLI 虽背后是 GitHub 大厂生态，但社区 PR 参与度极低，今日仅 1 条疑似误操作 PR。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|----------|
| **MCP 集成可靠性** | Copilot CLI、Claude Code、Gemini CLI、Qwen Code | OAuth 认证回归（#4490/#4582）、60s 硬编码超时（#4421）、重连假成功（Qwen #9944）、进程泄漏（Codex #34614）——几乎所有工具在 MCP 链路上都有暴露 |
| **上下文压缩与长会话可靠性** | Kimi Code、Codex、Claude Code、DeepSeek TUI、Pi | Kimi #2523（压缩重开已删任务）、Codex #38931（压缩导致重复调研）、Claude #69274（Opus 幻觉消息）、DeepSeek #4394（compaction 契约）、Pi #8581（消息队列状态卡住）——"压缩后状态保持"是共识性痛点 |
| **多代理/子代理编排** | Claude Code、Codex、Gemini CLI、Qwen Code、DeepSeek TUI | 重复 worker 实例失控（Claude #55586）、子代理状态不可见（Codex #16900）、Agent 挂起（Gemini #21409）、background agent 协调失败（Qwen #8097）、子代理审批持久化（DeepSeek #5584） |
| **成本可见性与 token 归因** | DeepSeek TUI、Copilot CLI、OpenCode、Pi | /context 按工具显示 token 成本（DeepSeek #5553）、OTel span 计费属性（Copilot #4224）、当日会话总成本展示（OpenCode #39807）、token 节省插件（opencode-prewalk、opencode-senses） |
| **跨平台一致性（Windows/Linux）** | 几乎所有工具 | Windows 沙箱（Codex #10601）、Windows MCP 残留进程（#34614）、Wayland browser agent（Gemini #21983）、PowerShell 5.1 vs pwsh 不一致（Pi #8582）、Windows CI 修复（Qwen #9728） |
| **Bash 工具透明性与语义保真** | Claude Code、Pi | shadow 函数 opt-out（Claude #69736/#88279）、CRLF/LF 混合文件被改写（Pi #8544）、shell snapshot 泄漏（Claude #76171） |
| **IDE 集成深度** | Claude Code、Codex、Gemini CLI | VS Code worktree 并行会话（Claude #69554）、完整编辑器标签页打开会话（Codex #20951）、VS Code IDE 助手的 Disposable 修复（Gemini #28764） |

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术/产品路线 |
|------|---------|---------|---------------|
| **Claude Code** | **企业级 agent 编排平台** | 中大型团队、需要复杂 agent 拓扑与 IDE 深度集成的专业开发者 | 多 agent 拓扑（Agent Teams）、插件生态、管控面（policy）对齐；Bash 工具注入（shadow 函数）是其特色也引发最大争议；版本迭代稳定、stale 清理机制成熟 |
| **OpenAI Codex** | **全平台桌面/移动端 AI 编程助手** | 覆盖从 iOS 远程控制到 Windows 桌面端的全场景用户，强调 Pro 订阅与多端同步 | 桌面端 + 移动端 + VS Code 扩展的产品矩阵；多代理 v2、transcript v2 等功能开关驱动架构迭代；大量内部 bot 提交 PR 显示产品化进程快于社区化 |
| **Gemini CLI** | **Google 生态的深度 agent 工作流** | GCP/Google 生态开发者，依赖无头模式与脚本自动化 | A2A 协议、Plan Mode、扩展（settings.json 覆盖）、依赖零依赖 OS 沙箱的方向探索；更强调模型（Gemini 3）的 bash 原生能力 |
| **GitHub Copilot CLI** | **企业合规导向的 MCP 中心化工具** | GitHub 企业用户、需要成本审计和审批控制的团队 | 与 GitHub 生态深度绑定（Guardian 审批操作、cloud 模式）；MCP 接入是最核心的能力扩张方向；社区 PR 参与度最低，更像"发布驱动" |
| **Kimi Code CLI** | **极简任务生命周期管理** | 对轻量级、低配置需求敏感的开发者 | 整体活跃度极低，v0.6.3 版本基线持续已久；关注上下文压缩的任务状态一致性 |
| **OpenCode** | **高性能 TUI + 桌面端双形态** | 对 TUI 体验和插件生态有要求的开发者；关注 token 成本优化 | 2.0 重大 UI 重构（TUI 状态机）、插件 API 正处稳定性攻坚期、路由（AI Gateway）多提供商支持；社区贡献者活跃度高 |
| **Pi** | **跨模型通用适配的 agent 运行时** | 多模型混用（OpenRouter、Kimi、DeepSeek、Vertex）的开发者；需要灵活 provider 配置的团队 | 适配层驱动模型中立性、TUI 组件化、扩展 API 补全、Windows 支持是当前主线；"哪个模型好用就用哪个"的 provider-agnostic 路线 |
| **Qwen Code** | **重多代理与 review 管线的知识工作者工具** | Qwen 模型用户、依赖 review/验证管线与 Web Shell 的团队 | /review 管线容器化安全加固、multi-agent roadmap、Web Shell 功能对齐、goal-draft 技能；开发节奏积极（autofix/takeover 自动化） |
| **DeepSeek TUI (CodeWhale)** | **Rust 高性能 TUI + 架构治理样板** | 对 TUI 极简体验和多 provider 支持有要求的开发者；关注代码可维护性的 Rust 社区 | TUI crate 分解（EPIC-005）、provider 中立化审计、control socket 外部控制面、审批收据持久化；架构治理与功能交付并行，社区协作模式值得关注 |

## 5. 社区热度与成熟度

**第一梯队（高活跃 + 影响面大）：**
- **Claude Code**：社区讨论深度和问题质量最高，高赞 issue 持续积压（#36146 近 6 个月、38 👍 未解决），stale 批量关闭机制运行成熟——既有深度又有秩序；
- **OpenAI Codex**：问题数量与 PR 密度全场最高，但大量内部 bot 提交显示其更接近"产品团队主导、社区反馈为辅"的模式；认证回归（#39162，55 评论）暴露大版本快速迭代的副作用。

**第二梯队（中高活跃 + 差异化路线）：**
- **Gemini CLI**：社区参与度高（PR 细致、安全修复主动），但挂起/死锁类稳定性问题反复出现，处于"功能先进、稳定性追赶"阶段；
- **Pi**：社区活跃且维护者响应快（当日修复 PR 密集合入），模型适配层的工作量显示其野心是"全模型通用"；
- **Qwen Code**：多代理和 review 管线投入突出，P0 级需求（#9784）当日即有动作，处于快速迭代期；
- **DeepSeek TUI (CodeWhale)**：架构治理最透明（EPIC 体系、里程碑 tracker），社区协作规范（rebase 保留原作者署名），处于从"能用"走向"能维护"的转型期；
- **OpenCode**：迭代最快（24h 双版本）但核心阻塞问题悬置，社区对修复周期已有不满情绪（#41470、#36506 持续数周），属于"快速试错"风格。

**第三梯队（低活跃）：**
- **Kimi Code CLI**：近乎静默，关键 bug 一月余仅 1 条评论且官方未介入；若持续如此将快速边缘化。
- **GitHub Copilot CLI**：PR 参与度极低（单日仅 1 条无效 PR），更像"官方发布、社区提报"的单向模式。

## 6. 值得关注的趋势信号

**① 多代理编排从"能用"走向"可信"**
Claude #55586（151 个重复 worker）、Codex #16900（子代理状态不可见）、Qwen #8097（协调失败）、Gemini #21409（Agent 无限挂起）——所有工具的社区都在磕多代理可靠性。**信号**：如果您的团队依赖多代理编排，务必在落地前验证资源隔离与状态一致性边界。

**② "假成功"问题成为信任杀手**
从 Claude #88279（grep 静默忽略 .gitignore 导致"文件不存在"无法验证）到 OpenCode #41470（剪贴板提示成功未复制）、#40094（打开错误项目）再到 Qwen #9944（MCP 重连假成功）——**虚假的成功反馈比直接报错危害更大**。**信号**：任何改动建议在关键路径上增加"执行后验证"步骤，而非仅信任工具返回的状态。

**③ 成本透明化成为新刚需**
DeepSeek TUI 的 /context 归因工具、Copilot CLI 的 OTel 计费属性、OpenCode 的当日总花费展示和 token 节省插件——从"人肉估算"到"工具级归因"是明确的趋势。**信号**：随着多家模型共存成为常态，按 token 和按工具的成本核算将成为企业选型的核心考量。

**④ MCP 生态进入"扫雷期"**
几乎每个工具的 issue 榜都有 MCP 相关的问题：OAuth 回退、scope 缺失、60s 超时、重连假成功、进程泄漏。MCP 作为连接 AI 与外部工具的"标准协议"仍远未稳定。**信号**：采用 MCP 时应预留故障回退路径；建议锁定各工具的 MCP 版本并关注上游修复节奏。

**⑤ Windows 支持从"附加"变为"必答"**
Codex 的 Windows 沙箱问题持续数月、Pi 的 PowerShell 工具刚引入且有版本不一致、Qwen 在修 Windows/macOS CI、Copilot 的 Windows 归档失败——Windows 用户群体正在成为主流，跨平台一致性成为各工具无法回避的"必答题"。**信号**：如果您是 Windows 用户，建议在选择工具时重点考察沙箱、进程管理、文件路径处理三个维度的成熟度；对于工具维护者，Windows CI 绿灯应设为发布门禁。

**⑥ Bash 工具注入争议是"透明性 vs 便利性"的缩影**
Claude Code 的 find/grep shadow 函数引发的三连击议题（#69736、#88279、#76171）本质上是对"工具隐式改变命令语义"的反抗。**信号**：任何对开发者已知命令的隐式行为修改，都应提供 opt-out 机制并显式文档化——这是社区对工具透明性的底线要求。

---

*报告基于 2026-08-25 各工具 GitHub 社区动态摘要生成。链接与议题编号均可追溯至原文，如需进一步核实请查询各仓库当日活动记录。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据截止：2026-08-25 | 数据来源：github.com/anthropics/skills

## 1. 热门 Skills 排行

**① skill-creator 全链路修复（PR #1298）— 社区关注度最高**
- **功能**：修复 `run_eval.py` 在所有 Skill 描述下均报告 0% recall 的严重缺陷（关联 Issue #556，10+ 独立复现），含 Windows 流读取、触发检测及并行 worker 修复。
- **讨论热点**：skill-creator 评估链路在 Windows 上完全不可用，且该问题已有多个并行修复（PR #1099、#1050）同时存在，社区高度关切。
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/1298

**② document-typography（PR #514）— 文档质量类**
- **功能**：针对 AI 生成文档的排版质量控制——孤字换行（1-6 词溢出到下一行）、寡妇段落（节标题滞留页底）及编号错位。
- **讨论热点**：AI 生成文档的排版细节问题普遍存在，涉及所有行业用户。
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/514

**③ scnet-hpc（PR #1615）— HPC 运维类（最新）**
- **功能**：通过 profile 化的 SSH 与 Slurm 工作流操作 SCNet HPC 集群，涵盖连接、分区、内存、模块及加速器配置。
- **讨论热点**：HPC 场景逐步被社区纳入 Skills 范围，显示专业化垂直方向需求。
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/1615

**④ ODT（PR #486）— 文档处理类**
- **功能**：OpenDocument 文本创建、模板填充及 ODT→HTML 解析转换（.odt/.ods/.odf）。
- **讨论热点**：与 docx、pdf 等同属文档处理家族，补齐非微软办公格式兼容能力。
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/486

**⑤ Hivemind（PR #1628）— 多 Agent 编排类（最新）**
- **功能**：零成本多 Agent 编排，将机械化工作委派给基于免费模型的 headless opencode workers，Claude Code 仅保留规划、审查与合并。
- **讨论热点**：经济学驱动（降低 token 成本）的 Agent 编排设计；头less 多 Agent 编排趋势。
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/1628

**⑥ testing-patterns（PR #723）— 测试生成类**
- **功能**：覆盖完整测试技术栈——Testing Trophy 模型、AAA 模式、测试命名、纯函数、边界值等。
- **讨论热点**：社区对标准化测试方法论需求稳步上升，Skill 以"测试哲学+实操模式"双轨输出。
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/723

**⑦ ServiceNow 平台（PR #568）— 企业平台类**
- **功能**：综合型 ServiceNow 平台助手：ITSM、ITOM、ITAM/SAM Pro、FSM、HRSD/CSM、SPM、CSDM、IntegrationHub。
- **讨论热点**：企业软件与 AI Skills 结合日益紧密，企业平台集成类 Skill 开始出现。
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/568

**⑧ skill-quality-analyzer（PR #83）— 元 Skills 类**
- **功能**：Skill 自身质量分析器 + skill-security-analyzer（安全分析器），从结构、内容、安全等 5+ 维度评估 Claude Skills。
- **讨论热点**：社区开始关注 Skill 生态的"质量与安全"自举问题。
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/83

---

## 2. 社区需求趋势

| 方向 | 代表 Issue | 动态 |
|---|---|---|
| **安全性/信任边界治理** | #492（43 评论，最高） | 社区 Skill 被分发至 `anthropic/` 命名空间，产生信任边界滥用风险——为安全类 Skill 设计的呼声最高 |
| **组织级 Skill 共享** | #228（16 评论，8 👍） | 企业用户期望组织内直接共享 Skill 库，目前手动下载/上传流造成商业推广阻碍 |
| **评估工具链修复** | #556（12 评论，7 👍） | skill-creator 的 `run_eval.py` 触发率恒为 0%，是当前最高频功能缺陷 |
| **重复安装去重** | #189（6 评论，9 👍） | `document-skills` 与 `example-skills` 插件内容重复，挤占上下文窗口 |
| **内容治理** | #62 | Skill 文件因重命名等原因全部消失并报错——Skill 生命周期管理缺失 |
| **企业安全边界** | #1175 | 结合 SharePoint Online 的权限控制与上下文窗口管理 |
| **Agent 治理/推理质量** | #412、#1385、#1329 | agent-governance（策略执行/威胁检测/信任评分/审计追踪）、推理质量门禁流水线、compact-memory（符号化紧凑各代理状态）等新方向提案 |
| **跨平台兼容** | #12、#1362 | docx/ooxml 空白重格式化损坏文档、web-artifacts-builder 在 pnpm ≥10.1 上的硬阻塞错误 |

**核心需求总结**：社区最集中的诉求是（1）**安全与信任边界治理**（#492 为最高评论 Issue）、（2）**组织级共享与协作基础设施**、（3）**开发工具链的可靠性与跨平台兼容**、（4）**Agent 治理与推理质量控制**。

---

## 3. 高潜力待合并 Skills

| Skill | PR | 社区关注度 | 潜力评估 |
|---|---|---|---|
| **skill-creator 评估链路修复** (#1298) | [链接](https://github.com/anthropics/skills/pull/1298) | 最热 PR；多个并行修复（#1099、#1050）；10+ 独立复现 | Windows 评估工具链完全不工作，合并优先级最高。需注意三个 PR 的方向协调 |
| **Hivemind 多 Agent 编排** (#1628) | [链接](https://github.com/anthropics/skills/pull/1628) | 新 PR（08-21 创建），8-24 仍活跃更新 | 零成本多 Agent 编排概念新颖，与社区降本诉求吻合 |
| **ServiceNow 平台** (#568) | [链接](https://github.com/anthropics/skills/pull/568) | 创建于 03-08，更新至 08-12，长跨度活跃 | 大型企业平台 Skill 覆盖广泛，社区对垂直领域深度 skill 认可度高 |
| **scnet-hpc** (#1615) | [链接](https://github.com/anthropics/skills/pull/1615) | 08-20→08-24 持续活跃，最新 PR 之一 | HPC 垂直方向需求逐步积累 |

**观察**：多个文档处理修复类 PR（#538、#541、#539）围绕 pdf/docx 的文件引用大小写、tracked change 冲突及 YAML 特殊字符问题，属于稳定的质量改进流，合并成本低、社区一致性高。

---

## 4. Skills 生态洞察

**一句话结论**：当前社区在 Skills 层面最集中的诉求是 **「安全性信信任边界治理 + 组织级共享基础设施 + 评估工具链可靠性」三线并进**——既关注 Skill 生态作为"可分发产品"的安全合规（#492、#228），也关注 Skill 开发自身工具链的工程化成熟度（#556、#1298），同时 Agent 治理与推理质量（#412、#1385、#1329）正成为新的增长曲线。

---

# Claude Code 社区动态日报 — 2026-08-25

## 📌 今日速览

今日发布 v2.1.245 修复 Linux 上 glibc 2.44 兼容性崩溃问题；社区讨论焦点集中在 VS Code 扩展首条消息固定、Agent Teams 重复 worker 实例、内置 `find`/`grep` shadow 函数不可关闭等长期未决问题上。多个老旧 Issues 于今日关闭（标记 stale），但部分未解决的核心问题仍保持开放。

---

## 🚀 版本发布

**v2.1.245**

- 修复了搭载 glibc 2.44 的 Linux 发行版（如 Arch Linux、CachyOS、Fedora Rawhide）上启动崩溃的问题

---

## 🔥 社区热点 Issues（Top 10)

### 1. [BUG] VS Code 扩展首条用户消息固定在聊天面板顶部
- **链接**: [#36146](https://github.com/anthropics/claude-code/issues/36146)
- **状态**: 开放 | 评论 27 | 👍 38
- **为何重要**: 高赞、评论最多的话题，持续近 6 个月的 VS Code 扩展 UI 问题仍未解决，影响日常使用体验。

### 2. [BUG] Agent Teams：单个 teammate 衍生 10-151 个重复 worker 实例
- **链接**: [#55586](https://github.com/anthropics/claude-code/issues/55586)
- **状态**: 已关闭 | 评论 14
- **为何重要**: 每个重复实例均占用完整上下文并主动编辑文件，属于严重的资源失控问题，今日以 stale 关闭但值得持续关注。

### 3. [ENHANCEMENT] 为内建 find→bfs / grep→ugrep shadow 函数增加 opt-out
- **链接**: [#69736](https://github.com/anthropics/claude-code/issues/69736)
- **状态**: 开放 | 评论 8
- **为何重要**: 社区对 Bash 工具中隐式注入 shadow 函数改变命令语义不满，要求提供退出机制。

### 4. [FEATURE] VS Code 扩展支持 `--worktree` 并行会话
- **链接**: [#69554](https://github.com/anthropics/claude-code/issues/69554)
- **状态**: 开放 | 👍 18
- **为何重要**: 对齐 Agent View 的并行工作流能力，是 IDE 集成方向的高票需求。

### 5. [BUG] Shell snapshot 向 stdout 泄漏函数定义
- **链接**: [#76171](https://github.com/anthropics/claude-code/issues/76171)
- **状态**: 已关闭 | 评论 4
- **为何重要**: 涉及 `declare -fx` 捕获机制的两个缺陷，影响 2.1.177 至 2.1.205 全版本，与今日修复的 Linux 稳定性问题同属 shell 层。

### 6. [BUG] MCP 403 insufficient_scope step-up 授权被丢弃并误报为 "token expired"
- **链接**: [#68720](https://github.com/anthropics/claude-code/issues/68720)
- **状态**: 已关闭 | 评论 4
- **为何重要**: 授权语义错误消息误导调试，属于 MCP 集成中的安全和可用性问题。

### 7. [BUG] Opus 4.8 编造不存在的用户消息
- **链接**: [#69274](https://github.com/anthropics/claude-code/issues/69274)
- **状态**: 已关闭 | 评论 4
- **为何重要**: 模型幻觉问题——为未请求的行为编造上下文理由并坚持其存在，引起对长会话可靠性的关注。

### 8. [BUG] `claude -p / --print` 与管控面存在 parity 差距
- **链接**: [#59108](https://github.com/anthropics/claude-code/issues/59108)
- **状态**: 已关闭 | 评论 4
- **为何重要**: 覆盖 hooks、permissions、skills、MCP、auth、subagents 的非交互模式一致性风险，对自动化场景影响深远。

### 9. [BUG] 嵌套 subagent 中 Agent 工具被剥离
- **链接**: [#80036](https://github.com/anthropics/claude-code/issues/80036)
- **状态**: 开放 | 评论 3
- **为何重要**: 与官方文档声明的嵌套深度上限（5 层）不符，实际调用失败，影响多级 agent 编排。

### 10. [BUG] Bash 工具注入的 `grep` 静默忽略 .gitignore 文件
- **链接**: [#88279](https://github.com/anthropics/claude-code/issues/88279)
- **状态**: 开放 | 评论 1
- **为何重要**: shadow 函数改变搜索语义而非仅实现，使"文件不存在"无法验证——高危误导性问题，需尽快处理。

---

## 📦 重要 PR 进展（全部 4 条）

### 1. validate-agent.sh 不因首个警告中止，并停止误判合法 agent
- **链接**: [#89404](https://github.com/anthropics/claude-code/pull/89404)
- **状态**: 开放
- **内容**: 修复插件开发技能自身 agent 文件无法通过校验的问题，根源为 `set -euo pipefail` 下 `((warning_count++))` 导致提前退出。修复 #83803。

### 2. 添加 Claude apps gateway 在 AWS 上的示例部署资源
- **链接**: [#79898](https://github.com/anthropics/claude-code/pull/79898)
- **状态**: 已关闭
- **内容**: 提供基于 Amazon Bedrock 运行 Claude apps gateway 的参考部署工件，配套文档即将发布。

### 3. 创建 pylint.yml
- **链接**: [#83890](https://github.com/anthropics/claude-code/pull/83890)
- **状态**: 开放
- **内容**: 新增 CI 配置（无更多细节，社区可关注后续变更）。

### 4. 文档：澄清插件 MCP 配置范围
- **链接**: [#75252](https://github.com/anthropics/claude-code/pull/75252)
- **状态**: 已关闭
- **内容**: 澄清插件 `mcpServers` 仅用于插件自带的 MCP server 定义，与 Claude Code 全局 MCP 配置分离。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **IDE 集成深度** | VS Code worktree 并行会话 (#69554)、spinner tips 渲染 (#73720)、思考块展开 (#73736) | 高 |
| **Bash shell 透明性** | find/grep shadow 函数 opt-out (#69736)、grep 语义改变 (#88279)、shell snapshot 泄漏 (#76171) | 高 |
| **Agent 系统可靠性** | 嵌套 subagent 工具继承 (#80036)、重复 worker 实例 (#55586)、agent registry 挂起 (#86764) | 中高 |
| **权限与模式执行力** | Plan 模式未强制 (#73717)、permission_mode 暴露到 statusLine (#77910) | 中 |
| **模型行为可预测性** | Opus 4.8 幻觉消息 (#69274)、模型意外切换 (#73735) | 中 |
| **自定义模型/Provider 支持** | Ollama 会话恢复回归 (#73165) | 低（已修复） |

---

## ⚠️ 开发者关注点

1. **Bash 内建 shadow 函数争议升温**：多个独立 issue（#69736、#88279、#76171）集中反映注入 `find`/`grep` shadow 函数改变工具语义的问题——从静默忽略 .gitignore 文件到 stdout 泄漏，开发者普遍要求 opt-out 机制或默认关闭。

2. **长期未决的高赞 issue 持续积压**：#36146（VS Code 首条消息固定）以 38 👍 的高热度开放近 6 个月未解决，社区对此类 IDE 基础体验问题修复速度感到不满。

3. **Agent 并发失控是近期新增的高危问题**：#55586 描述单个 teammate 衍生最多 151 个重复 worker 实例并同时编辑文件，虽已 stale 关闭，但此类资源失控问题对生产环境破坏力极大，建议关注是否有后续跟进。

4. **大批 7 月提交的 issues 今日批量关闭（标记 stale）**：包括 Plan 模式未强制、AskUserQuestion 超时、模型意外切换等多个疑似重复或无法复现的问题，社区重复提报现象明显，建议完善 issue 模板去重引导。

5. **非交互模式（`-p/--print`）的 parity 风险**被明确标记为产品边界问题（#59108），涉及 hooks、权限、MCP、subagents 等多个子系统，对 CI/CD 自动化用户的配置一致性影响值得警惕。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-25

## 今日速览

今日社区热度集中在 macOS 桌面端**会话打开即触发重新登录**的认证回归（#39162，55 条评论）以及 Windows 沙箱配置报错（#10601，47 条评论）。功能需求方面，**TUI 命令折叠开关**（#39903）以 40 个 👍 成为社区呼声最高的改动；与此同时，仓库合入了 15+ 个由 copyberry[bot] 提交的内部 PR，覆盖沙箱上下文重构、转录 v2 功能开关、Vim 模式点重复等方向。

## 版本发布

- **rust-v0.150.0-alpha.8** — 0.150.0-alpha.8 预发布版本。仓库未提供详细变更日志。

## 社区热点 Issues

1. **[#39162] macOS 端打开已有会话使 ChatGPT 认证失效并跳转登录页** — `bug` / `auth` / `app`
   自 26.814.41407 版本起，打开已有会话即导致认证失效并跳转登录。55 条评论、31 👍，为当前社区影响面最大的回归问题。此前 26.810.52044 版本正常。
   [GitHub](https://github.com/openai/codex/issues/39162)

2. **[#10601] Windows 上沙箱设置报错** — `bug` / `windows-os` / `sandbox`
   codex-cli 0.95.0 在 Windows 上沙箱初始化失败，47 条评论、13 👍。问题持续数月仍未关闭，Windows 沙箱稳定性是长期痛点。
   [GitHub](https://github.com/openai/codex/issues/10601)

3. **[#39903] 新增选项：禁用 "Ran N commands" 折叠，始终显示已执行命令** — `enhancement` / `TUI` / `CLI`
   用户希望 TUI 不折叠命令输出，获得 40 👍 和 24 条评论，是今日社区支持度最高的功能请求。
   [GitHub](https://github.com/openai/codex/issues/39903)

4. **[#20951] VS Code 扩展支持将会话以完整编辑器标签页打开** — `enhancement` / `extension`
   对标 Claude Code 的会话管理方式，43 👍、17 条评论。IDE 集成体验是社区持续关注的方向。
   [GitHub](https://github.com/openai/codex/issues/20951)

5. **[#39803] 完成回复或打开已有会话后反复出现登录页** — `bug` / `auth` / `app`
   Pro 用户报告与 #39162 高度相似的认证回归，17 条评论。怀疑为同一根因在桌面端多个版本上出现。
   [GitHub](https://github.com/openai/codex/issues/39803)

6. **[#40527] Pro 20x 周配额重置后消耗显著增加** — `bug` / `rate-limits`
   用户反馈重置前后相同用量下配额消耗速度不一致，7 条评论，可能涉及配额计费逻辑变更。
   [GitHub](https://github.com/openai/codex/issues/40527)

7. **[#39161] Windows 端无法归档会话（已关闭）** — `bug` / `windows-os` / `app`
   Windows 桌面版（MSIX 包）归档会话失败，14 👍、12 条评论。该问题今日已关闭，可关注修复版本。
   [GitHub](https://github.com/openai/codex/issues/39161)

8. **[#38931] 上下文压缩可将已完成计划变为进行中任务，导致重复调研循环** — `bug` / `context` / `plan`
   长任务中上下文压缩丢失执行状态，已完成工作被重新执行。5 👍、7 条评论，涉及长会话可靠性核心问题。
   [GitHub](https://github.com/openai/codex/issues/38931)

9. **[#29908] Bubblewrap loopback/userns 错误导致 apply_patch 与沙箱命令在 Ubuntu 24.04 失败** — `bug` / `sandbox` / `CLI`
   17 条评论，Bubblewrap 与 Ubuntu 24.04 内核配置的兼容性问题持续影响 Linux 用户。
   [GitHub](https://github.com/openai/codex/issues/29908)

10. **[#16900] 子代理状态查询与父子等待机制** — `feature request` / `subagent`
    父线程在子代理仍在处理时过早回退并重复执行任务，18 条评论，多代理编排可靠性需求。
    [GitHub](https://github.com/openai/codex/issues/16900)

11. **[#36040] iOS 远程控制仅列出近期有聊天的项目（回归）** — `bug` / `iOS` / `remote` — 17 条评论
    [GitHub](https://github.com/openai/codex/issues/36040)

12. **[#34614] Windows MCP 套件重复累积，进程树未正确清理** — `bug` / `mcp` / `performance` — 10 条评论
    [GitHub](https://github.com/openai/codex/issues/34614)

## 重要 PR 进展

1. **[#40587] 将 stop hooks 限定用于记忆整合** — 后台记忆整合不再触发项目完成检查或用户通知，避免误报完成状态。
   [GitHub](https://github.com/openai/codex/pull/40587)

2. **[#40551] 从 turn 环境派生沙箱上下文** — 新增 Windows 沙箱模式、私有桌面行为与 Landlock 选择，集中沙箱上下文构建逻辑，属沙箱架构重构。
   [GitHub](https://github.com/openai/codex/pull/40551)

3. **[#40521] Vim 模式新增点重复（dot-repeat）** — 绑定 `.` 重复上次完整编辑，覆盖删除、修改、替换、粘贴与插入模式。
   [GitHub](https://github.com/openai/codex/pull/40521)

4. **[#40511] 为中断 turn 新增 hooks** — 新增 `Interrupt` 钩子事件，在中断中止事件发出前触发，并先刷新 turn 转录。
   [GitHub](https://github.com/openai/codex/pull/40511)

5. **[#40509] 新增持久化线程产物模型** — 新增 `thread_artifacts` SQLite 表，支持类型化身份、JSON 载荷、级联删除与有序读取索引。
   [GitHub](https://github.com/openai/codex/pull/40509)

6. **[#40508] 在线程时间线中持久化实时事件** — 客户端可获得有界视图，保留语音、代理工作与 turn 生命周期事件顺序。
   [GitHub](https://github.com/openai/codex/pull/40508)

7. **[#40554] 注册 transcript v2 功能开关** — 新增交互式转录编辑器与 turn 选择 UI 的 `transcript_v2` 特性，默认关闭。
   [GitHub](https://github.com/openai/codex/pull/40554)

8. **[#40528] 在审批审查中表示终端输入** — 新增 `writeStdin` Guardian 操作，区分 `command` 与 `writeStdin` 两种执行审批请求。
   [GitHub](https://github.com/openai/codex/pull/40528)

9. **[#40523] 提供方认证命令失败后重试** — 初始凭证解析失败后，后续 401 仍给提供方一次有界重试机会。
   [GitHub](https://github.com/openai/codex/pull/40523)

10. **[#40585] 追踪多代理 v2 剩余工具分析** — 为 `send_message`、`followup_task`、`interrupt_agent`、`list_agents` 记录协作分析数据。
    [GitHub](https://github.com/openai/codex/pull/40585)

11. **[#40570] Windows 批处理别名保留 Unicode 路径** — 修复可执行路径含控制台代码页无法表示的字符时别名调用失败的问题。
    [GitHub](https://github.com/openai/codex/pull/40570)

12. **[#40539] 向上下文窗口注入历史笔记提示** — 注册 history-notes 扩展为上下文贡献者，从后端获取 `thread_hint`，非空提示不超过 4000 字节。
    [GitHub](https://github.com/openai/codex/pull/40539)

13. **[#40533] 将扩展提示路由至上下文窗口元数据** — 新增 `ContextWindow` 提示槽用于线程级扩展贡献，纳入 token 预算上下文窗口消息。
    [GitHub](https://github.com/openai/codex/pull/40533)

14. **[#40544] 图像生成分析包含透明背景** — 在图像生成事件参数中新增可选 `transparent_background` 值。
    [GitHub](https://github.com/openai/codex/pull/40544)

15. **[#40504] 按计划类型路由 cyber Trusted Access 链接** — Free/Go/Plus/Pro/ProLite 用户遇网络安全策略错误时跳转至个人 Trusted Access 页面。
    [GitHub](https://github.com/openai/codex/pull/40504)

## 功能需求趋势

- **TUI/CLI 可控性（#39903）**：用户要求对命令输出折叠行为提供配置开关，反映对 CLI 透明度和可控性的需求。
- **IDE 深度集成（#20951）**：VS Code 扩展将继续向 Claude Code 的编辑器标签会话模式对齐。
- **多代理编排可靠性（#16900）**：子代理状态可见性、父子等待机制是社区明确提出的能力缺口。
- **沙箱兼容性**：Windows 与 Ubuntu 24.04 上的沙箱问题持续占据 issue 榜单，跨平台一致性是刚需。
- **认证稳定性**：多个 auth 相关回归集中出现（#39162、#39803），认证链路健壮性成为当前最紧迫的稳定性主题。

## 开发者关注点

- **macOS 认证回归（#39162、#39803）**：打开历史会话即登出是最集中的痛点，影响日常使用。
- **Windows 沙箱（#10601）**：自 0.95.0 起长期未修复，Windows 用户被迫绕行。
- **配额计费透明度（#40527）**：用量与配额消耗不对应引发 Pro 用户对计费逻辑的质疑。
- **长任务状态保持（#38931）**：上下文压缩破坏计划执行状态，导致重复工作与 token 浪费。
- **Windows 进程管理（#34614、#40182）**：MCP 子进程残留与更新器重复下载 501.8 MB 的循环失败，暴露 Windows 端运行时管理的稳定性短板。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-25

## 1. 今日速览

今日发布了 `v0.56.0-nightly.20260825` 和 `v0.57.0-preview.1` 两个版本，主要包含 A2A 服务器错误清理与安全检查器声明修复。社区讨论焦点集中在 Agent 相关体验问题上：通用 Agent 挂起、MAX_TURNS 后误报成功、许可证认证报错等稳定性问题持续受关注。同时，安全修复（A2A 服务器硬编码凭据移除）成为今日 PR 更新的亮点。

## 2. 版本发布

**v0.56.0-nightly.20260825.g812f7a2bc**（Nightly）

- 修复 A2A 服务器在新消息轮次中清除过期的取消错误
- 在写入策略配置中声明顶级安全校验器

`#v0.57.0-preview.1`（Preview）

- 从 `release/v0.57.0-preview.0` 分支选拣修复提交，补齐补丁版本

> 完整变更日志：https://github.com/google-gemini/gemini-cli/releases

## 3. 社区热点 Issues

**🔴 高优先关注**

1. **许可证验证报错｜#28912** ⭐ 29 评论 / 7 👍
  登录时报 "You do not have a valid license of this product"，疑似非企业用户的误报。讨论热度极高，若影响面扩展将严重阻碍社区用户正常使用。
  https://github.com/google-gemini/gemini-cli/issues/28912

2. **通用 Agent 无限挂起｜#21409** ⭐ 8 评论 / 8 👍
  当 CLI 委派任务给通用 Agent 时永久挂起（简单建文件夹也卡死），用户需等待长达 1 小时并手动取消。高 👍 表明影响者众多。
  https://github.com/google-gemini/gemini-cli/issues/21409

3. **Shell 命令"等待输入"假死｜#25166** ⭐ 4 评论 / 3 👍
  命令执行完成后仍显示 "Awaiting user input" 并挂起，影响日常核心工作流。
  https://github.com/google-gemini/gemini-cli/issues/25166

4. **Wayland 下浏览器子 Agent 崩溃｜#21983**
  Browser Agent 在 Wayland 环境无法工作，影响 Linux 用户。
  https://github.com/google-gemini/gemini-cli/issues/21983

**🟡 值得关注**

5. **Subagent 恢复误报成功｜#22323** ⭐ 13 评论
  `codebase_investigator` 子 Agent 在被 MAX_TURNS 中断后仍报告 `status: "success"`，误导后续决策。已被标记 `need-retesting`。
  https://github.com/google-gemini/gemini-cli/issues/22323

6. **Gemini 不主动使用 skills 和 sub-agents｜#21968**
  用户反映模型几乎不会自发调用自定义技能和子 Agent，需要显式指令才会使用。
  https://github.com/google-gemini/gemini-cli/issues/21968

7. **Agent 未充分使用 bash 原生能力｜#19873**
  建议通过零依赖 OS 沙箱和"执行后意图路由"来发挥 Gemini 3 作为原生 bash 用户的能力。
  https://github.com/google-gemini/gemini-cli/issues/19873

8. **工具数量超过 128 时报 400 错误｜#24246**
  当工具数量过多时 Gemini CLI 会报 400 错误，社区期待 Agent 能智能裁剪工具范围。
  https://github.com/google-gemini/gemini-cli/issues/24246

9. **Auto Memory 无限重试低信号会话｜#26522**
  后台提取 Agent 跳过低价值会话时，不会被标记为已处理，导致无限重试，影响性能。
  https://github.com/google-gemini/gemini-cli/issues/26522

10. **Browser Agent 忽略 settings.json 覆盖配置｜#22267**
  全局或项目级 `settings.json` 中的 `maxTurns` 等配置对 Browser Agent 无效。
  https://github.com/google-gemini/gemini-cli/issues/22267

## 4. 重要 PR 进展

1. **移除危险的 `diff.external` 覆盖｜#28930** (P1, core)
  修复 PR #28792 引入的 git 环境问题，避免禁用外部 diff 工具导致配置冲突。
  https://github.com/google-gemini/gemini-cli/pull/28930

2. **A2A 服务器安全修复｜#29067** (security)
  移除 `coderAgentCard` 中误导性的安全方案声明和硬编码凭据，正确反映本地开发端点的未认证特性。此前 #29018 已关闭，此为重新提交。
  https://github.com/google-gemini/gemini-cli/pull/29067

3. **非交互模式下 Plan Mode 挂起修复｜#29063** (P1, core)
  解决 `gemini -p "... " -y` 非交互模式下 Plan Mode 永远等待用户输入的问题——该输入永远不可能到达。
  https://github.com/google-gemini/gemini-cli/pull/29063

4. **扩展环境变量安全加固｜#28863**
  修复扩展更新可能绕过用户同意检查、向 MCP 服务进程注入未授权环境变量的问题。
  https://github.com/google-gemini/gemini-cli/pull/28863

5. **默认忽略 `.gemini` 目录｜#28866** (P1, agent)
  在文件搜索中默认忽略 `.gemini` 配置目录，避免在包含该目录的工作区中产生混乱。
  https://github.com/google-gemini/gemini-cli/pull/28866

6. **大量依赖更新 + MCP 配置 + ECC 集成｜#28955** (P1, size/xl)
  大型 PR，涉及依赖升级和多项配置改进，值得关注最终合入内容。
  https://github.com/google-gemini/gemini-cli/pull/28955

7. **VS Code IDE 助手 Disposable 修复｜#28764** (已关闭)
  修复 `activate()` 中 `context.subscriptions.push()` 多包裹一层括号导致只注册最后一个 Disposable 的问题。
  https://github.com/google-gemini/gemini-cli/pull/28764

8. **Nightly 版本自动发布｜#29062**
  自动化版本发布流程的例行 PR。
  https://github.com/google-gemini/gemini-cli/pull/29062

9. **v0.57.0-preview.1 变更日志｜#29060**
  自动生成的 preview 版变更日志，供社区审阅。
  https://github.com/google-gemini/gemini-cli/pull/29060

10. **依赖升级 ws 8.18.3 → 8.20.1｜#27283** (已关闭)
    WebSocket 库安全性修复升级。
    https://github.com/google-gemini/gemini-cli/pull/27283

## 5. 功能需求趋势

- **Agent 智能化与自主性**：社区核心诉求是让 Agent 更"聪明"地决策——自发使用 skills 和子 Agent（#21968）、更充分地发挥模型 bash 原生能力（#19873）、智能限制工具范围避免报错（#24246）。社区期待 Agent 从"执行者"走向"决策者"。
- **安全与治理**：安全相关需求贯穿始终，包括 A2A 安全声明清理（#29067）、Auto Memory 的确定性脱敏和减少日志（#26525）、Agent 应主动制止破坏性 git 操作（#22672）、扩展环境变量注入防护（#28863）。
- **AST 感知的文件操作**：EPIC #22745 持续追踪 AST-aware 文件读取/搜索/代码地图的价值评估，旨在减少工具调用轮次、提高代码理解的精度。
- **Auto Memory 可靠性**：多个 issue（#26522、#26523、#26525）聚焦 Auto Memory 的重试逻辑、无效 patch 隔离和敏感信息脱敏，社区对后台内存提取的健壮性期待较高。
- **无依赖 OS 沙箱**：#19873 提出用零依赖沙箱来充分解锁模型的 bash 亲和力，是一个有前瞻性的架构方向。

## 6. 开发者关注点

**🔴 稳定性痛点（高频反馈）**

- **挂起与死锁**：通用 Agent 挂起（#21409）、Shell 命令假死"等待输入"（#25166）、非交互模式 Plan Mode 卡死（#29063 修复中）——稳定性问题是当前开发者最直接的痛点。
- **错误状态误报**：Subagent 被 MAX_TURNS 中断却报告 GOAL 成功（#22323），误导自动化流水线的后续决策。
- **跨平台兼容性**：Wayland 下 Browser Agent 崩溃（#21983）影响 Linux 桌面用户。

**🟡 配置与使用体验**

- **配置不生效**：Browser Agent 忽略 `settings.json` 中 `maxTurns` 等覆盖配置（#22267），开发者对配置系统的确定性存疑。
- **符号链接支持**：`~/.gemini/agents/` 下的 symlink 文件不被识别为 agent（#20079），影响使用 dotfiles 管理配置的用户。
- **工作区污染**：模型频繁在工作区随机创建临时脚本（#23571），增加清理负担。

**🔒 安全顾虑**

- 许可证误报（#28912）如为系统层面误判，将引发信任危机；A2A 服务器硬编码凭据问题虽已修复，但也提醒社区关注本地服务的安全性设计。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI 社区动态日报 — 2026-08-25

### 今日速览

今日发布 v1.0.81-9，在 `/model` 选择器中新增模型数据留存警告及对应链接。社区讨论集中在 MCP OAuth 认证回归、语音安装器私有源 401 错误，以及 subagent 调用缺失计费属性等三类问题上；同时多个垃圾/模板 Issue 被关闭，社区维护活跃。

### 版本发布

**v1.0.81-9** — 改进：在 `/model` 选择器中展示模型数据留存警告，并附带相关说明链接。

### 社区热点 Issues（精选 10 条）

1. **[#4490] Atlassian MCP OAuth 认证在 1.0.80 中失效（RFC 8414 §3.3 回归）** — [链接](https://github.com/github/copilot-cli/issues/4490)
   MCP OAuth 报错“authorization server advertised an issuer that does not match”，属 1.0.80 新引入的回归问题，影响 Atlassian 系 MCP 服务器的接入。已关闭。

2. **[#4035] 语音安装器失败：尝试从私有 Azure Artifacts 源拉取 Microsoft.AI.Foundry.Local.Core 1.2.3，收到 401** — [链接](https://github.com/github/copilot-cli/issues/4035)
   启用语音模式时，安装器错误指向私有源而非公共 nuget 源，导致 401。安装链路稳定性问题，属于高频阻塞型 Bug。

3. **[#4224] Subagent 调用的 OTel spans 缺少计费属性** — [链接](https://github.com/github/copilot-cli/issues/4224)
   `task` 工具或自定义 agent 的模型调用 span 缺少 `github.copilot.nano_aiu` 和 `github.copilot.cost` 属性，导致外部成本核算低估实际 AI 消耗。影响成本可视化与账务追踪，获 👍 1。

4. **[#4582] MCP OAuth authorize 请求遗漏 scope 参数（Entra ID，静态 oauthClientId 场景）** — [链接](https://github.com/github/copilot-cli/issues/4582)
   面向 Entra ID 的 MCP 服务器（静态 `oauthClientId` + `oauthPublicClient`），授权请求缺 `scope` 参数，触发 AADSTS900144。新增于 8/24，属于 MCP 认证链路的新问题。

5. **[#4421] MCP initialize 握手硬编码 60s 超时且无重试** — [链接](https://github.com/github/copilot-cli/issues/4421)
   60 秒超时后记录失败且整个会话不再拉起该服务器。npx 拉起的 stdio 服务器约 29% 的会话会失败且无法恢复，影响 MCP 扩展生态的可靠性。

6. **[#4577] /ask 命令仅支持单轮对话（已关闭）** — [链接](https://github.com/github/copilot-cli/issues/4577)
   用户希望 `/ask` 支持多轮追问而不污染主对话历史，属交互体验改进需求，当前已被关闭，后续演进待观察。

7. **[#4590] 多个扩展同时启用时，MCP host reload 导致 session hook processor 被 dispose** — [链接](https://github.com/github/copilot-cli/issues/4590)
   每个重启的扩展对同一会话调用 `session.resume`，SDK 连接被反复拆除，报“Hook processor is not configured for session id”。多扩展并存的稳定性问题。

8. **[#4593] Windows 上归档 worktree 会话失败（os error 32）** — [链接](https://github.com/github/copilot-cli/issues/4593)
   归档前未停止会话内的进程树，导致文件被占用无法删除。Windows 平台针对 worktree 会话的专属 Bug。

9. **[#4568] --cloud owner 选择挂起、重连崩溃、轮询触发 429** — [链接](https://github.com/github/copilot-cli/issues/4568)
   无仓库上下文时在 `Loading available owners...` 处无限挂起；有上下文时云任务创建但重连崩溃且轮询触发限流。--cloud 模式的多症状串联故障。

10. **[#4238] 失败的 GitHub MCP 工具详情中服务器标签逐字换行渲染** — [链接](https://github.com/github/copilot-cli/issues/4238)
    `(MCP: github-mcp-server)` 在失败详情中被约单字符宽列逐字换行，可读性极差。终端渲染的显示缺陷，体验相关，已关闭。

### 重要 PR 进展

> 过去 24 小时仅 1 条 PR 更新：**[#4573] Rename README.md to README.mdmain**（[链接](https://github.com/github/copilot-cli/pull/4573)，作者 phuongnam467）。该 PR 提议将 README.md 重命名为 README.mdmain，疑似误操作，内容为空，不具备实质合并价值，社区应留意其后续动向。

### 功能需求趋势

- **MCP 生态稳定性**：OAuth 握手、scope 参数、60s 超时、服务器重拉取等 MCP 接入问题频发，是当前最集中的待加固方向。
- **语音安装体验**：语音模式安装器对私有源的错误依赖暴露引导流程缺陷，社区期望安装链路更稳健。
- **计费与可观测性**：OTel span 缺计费属性说明社区正将 Copilot CLI 纳入成本核算体系，期望更透明的 AI 消耗数据。
- **多轮交互**：`/ask` 多轮支持的需求体现用户希望在不污染主会话的前提下进行深度追问。
- **Windows 平台适配**：归档 worktree 会话失败说明 Windows 下的进程/文件管理仍需平台专项优化。

### 开发者关注点

- **认证与授权回归**：Atlassian MCP OAuth 回归（#4490）与 Entra ID scope 缺失（#4582）表明认证链路是当前回归高发区，升级需谨慎。
- **高失败率场景**：npx 启动的 stdio MCP 服务器 29% 会话失败且不可恢复（#4421），属于影响面极大的可靠性痛点。
- **成本核算准确性**：subagent 调用缺计费属性（#4224）使外部成本追踪失真，开发者对 AI 用量透明度的诉求明确。
- **多扩展共存问题**：MCP host reload 重创会话 hook（#4590）提示多扩展场景下插件生命周期管理仍需打磨。
- **垃圾 Issue 清理**：8/24-8/25 批量关闭无实质内容的模板/垃圾 Issue，维护节奏正常，社区活跃度保持。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-25

## 1. 今日速览

今日社区整体偏冷，过去 24 小时无新版本发布、无新增或更新的 Pull Request。活跃焦点集中在 **Issue #2523**：Windows 用户报告了上下文压缩（Context compaction）导致已删除任务被自动重开的 bug，该 Issue 于今日获得更新，但仍处于开放状态。社区的核心痛点依然围绕任务生命周期管理与上下文处理稳定性。

## 2. 版本发布

过去 24 小时内无新版本发布。当前社区讨论基线版本为 v0.6.3（见 Issue #2523）。


## 3. 社区热点 Issues

过去 24 小时内仅 1 条 Issue 有更新，因其为今日唯一的活跃信号，给予重点关注：

| Issue | 标题 / 链接 | 重要性说明 |
|-------|-------------|------------|
| #2523 | [[bug] Context compaction bug — Kimi Code reopens an already completed and deleted task](https://github.com/MoonshotAI/kimi-cli/issues/2523) | **最高优先级。** 用户反映在 v0.6.3 中，上下文压缩机制会错误地重新打开已完成并删除的任务，导致任务栈混乱，严重干扰工作流。该 Issue 创建于 7 月 20 日，今日（8 月 25 日）更新，但尚无官方回应，仅有 1 条评论，社区反馈相对沉默，表明该问题可能仍未被广泛复现或修复优先级较低。环境：Windows 10.0.26200 x64，K2.7 coding 模型。 |


## 4. 重要 PR 进展

过去 24 小时内无新增或更新的 Pull Request，暂无重要 PR 进展可汇报。


## 5. 功能需求趋势

由于今日数据样本极少（仅 1 条 Issue），无法全面归纳趋势。基于现有数据，社区对以下方向表现出潜在关注：

- **上下文管理机制（Context Management）** ：上下文压缩（Compaction）过程中的任务状态校验是当前社区关注的直接痛点。
- **跨平台稳定性（Windows 专项）** ：本次报告的 bug 明确指向 Windows 环境（NT 10.0.26200 x64），暗示 Windows 平台下任务生命周期管理（Task lifecycle）可能存在兼容性风险。


## 6. 开发者关注点

- **任务生命周期可靠性**：社区开发者最核心的诉求是“已完成/已删除的任务不应被系统机制误重新激活”，这直接关系到长会话场景下的数据一致性和使用信心。
- **Bug 响应效率**：Issue #2523 自 7 月 20 日提出后，近一个多月仅产生 1 条评论且官方未介入，反映出开发者对“关键流程 bug 的响应周期”存在潜在不满。
- **版本更新频率预期**：以 v0.6.3 为基线，过去 24 小时无任何新版本发布或 PR 合并，社区可能期待更频繁的修复性补丁（hotfix）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-25

## 今日速览

今日 OpenCode 发布了 v1.18.23 补丁，修复了 Cloudflare AI Gateway 的路由问题；社区围绕"付费模型上游请求失败"（#36506）和"剪贴板复制失效"（#41470）两个高频问题的讨论热度持续走高。此外，"项目前缀冲突"类 Issue 出现双开（#40094 与 #44779），显示桌面端项目选择逻辑存在共性问题。生态方面，今日出现多个用于减少 token 消耗的插件提交（opencode-prewalk、opencode-senses），社区逐渐重视性能与成本优化。

## 版本发布

**[v1.18.23](https://github.com/anomalyco/opencode/releases/tag/v1.18.23)**（昨日同步发布 v1.18.22，今日小幅迭代）

- **核心 Bugfix——Cloudflare AI Gateway**:修复了第三方提供商的路由问题，使非 Workers 模型可通过 REST API 正常走网关；同时修复 Anthropic 模型将点分模型 ID（如 `claude-haiku-4.5`）转换为网关所需短横线格式的转换逻辑。
- **[v1.18.22](https://github.com/anomalyco/opencode/releases/tag/v1.18.22) 遗留内容**:移除 OpenCode Go 首月折扣相关的过时推广文案；修复服务端返回相对验证 URL 或基础路径时设备登录链接失效的问题；修复向不支持的 OpenAI 兼容提供商发送 `textVerbosity` 参数的问题。

## 社区热点 Issues

> 以下 10 个 Issue 按评论活跃度与影响面综合排序。

1. **[#41470 "Copied to clipboard" 提示却未真正复制](https://github.com/anomalyco/opencode/issues/41470)**
   Docker 环境的 VSCode Server 中复制无效，提示成功但无法粘贴。21 条评论，持续两周仍 open，属于影响面广的环境适配问题。

2. **[#36506 所有付费 OpenCode Zen 模型报 "Upstream request failed"](https://github.com/anomalyco/opencode/issues/36506)**
   免费 Zen 模型正常、付费全部 503，且已持续一个多月、16 条评论、3 👍（今日 Issue 中最高）。服务稳定性与计费链路问题优先级应最高。

3. **[#44857 [2.0] TUI 粘贴文本在问答输入框延迟数秒](https://github.com/anomalyco/opencode/issues/44857)**
   2.0 版本 TUI 中剪贴板粘贴出现 2~3 秒延迟，今日新开即获 6 评论，2.0 交互流畅度问题关注度高。

4. **[#44802 桌面端非 vision 模型执行截图验证时客户端冻结](https://github.com/anomalyco/opencode/issues/44802)**
   非视觉模型被 agent 自触发截图时客户端卡死且回滚无法恢复，功能流程的兜底逻辑缺失。

5. **[#44919 OpenCode Go 账号被误封为欺诈](https://github.com/anomalyco/opencode/issues/44919)**
   与今日 v1.18.22 移除首月折扣文案的修复直接相关，用户称刚订阅 "$5 首月" 即被封号，是当前最敏感的计费信任问题。

6. **[#39736 [2.0] 中断后已确认消息无法撤销（Message not found）](https://github.com/anomalyco/opencode/issues/39736)**
   消息被确认但未完成物化时触发中断，undo 失败且报错，2.0 TUI 状态机一致性 Bug。

7. **[#40094 桌面项目选择器前缀碰撞——打开 "foo-ios" 却选中 "foo"](https://github.com/anomalyco/opencode/issues/40094)**
   项目名互为前缀时无法准确打开目标目录。3 评论 + 1 👍，同日另有 [#44779](https://github.com/anomalyco/opencode/issues/44779) 提交相同问题，是桌面端确定性 Bug。

8. **[#44788 [2.0] 插件事件订阅始终接收不到任何事件](https://github.com/anomalyco/opencode/issues/44788)**
   beta 18050 上 `ctx.event.subscribe` 注册正常但事件零投递，context-hook 与合成注入均不达模型 prompt——2.0 插件生态的关键梗阻。

9. **[#44644 Agent 将临时文件写入 /tmp 而非约定的 /tmp/opencode](https://github.com/anomalyco/opencode/issues/44644)**
   与既有约定冲突导致权限流程受阻，看似小问题但影响 agent 自动化工作流顺畅度。

10. **[#44660 [FEATURE] V2 消息分页增加随机寻址元数据](https://github.com/anomalyco/opencode/issues/44660)**
    当前分页只有不透明游标，无法提供总位置信息与随机访问，是构建大型会话工具链的需求信号。

## 重要 PR 进展

1. **[#44928 [contributor] fix(ui): 修复堆叠对话框焦点恢复](https://github.com/anomalyco/opencode/pull/44928)**
   一次性关闭 8 个历史 UI 焦点相关 Issue（#44900、#43369、#41382、#41638、#41501、#40866、#40658、#36263），是今日合并价值最高的 UI 批量修复。

2. **[#44895 fix(opencode): 确定性的插件加载顺序与 Hook 错误隔离](https://github.com/anomalyco/opencode/pull/44895)**
   #44242 系列的第一切片（面向 #41372），解决插件加载不确定性与单个 hook 错误拖垮整体的问题，是插件系统稳定性的基建 PR。

3. **[#44898 fix(opencode): 小型/未报告模型上下文的诚实算术](https://github.com/anomalyco/opencode/pull/44898)**
   同一系列（#41372）的第二切片。上下文窗口计算失真会直接导致对话截断，值得关注后续切片进展。

4. **[#44938 [CLOSED] feat(tui): 中键粘贴 X11/Wayland 主选择区](https://github.com/anomalyco/opencode/pull/44938)**
   恢复 Linux 终端用户鼠标捕获前的中键粘贴传统手势，并新增 `readPrimary()` 剪贴板模块方法，符合 Linux 原生生交互。

5. **[#44933 [needs:compliance] fix(opencode): Terminal 事件退出的完成处理](https://github.com/anomalyco/opencode/pull/44933)**
   修复 Terminal 事件退出时的完成处理逻辑（Closing #44901），避免 agent 在终端执行完成事件上卡死或丢失状态。

6. **[#44912 [CLOSED] fix(provider): 处理 SSE reader 取消时的拒绝](https://github.com/anomalyco/opencode/pull/44912)**
   针对 Bun 1.4 的单测中发现 SSE reader 取消时的潜在竞态 Bug，运行时对 Bun 1.3 中性，但属真实潜在缺陷，且有跨版本兼容价值。

7. **[#43282 fix(core): 在 subagent 工具中暴露合法子代理 ID](https://github.com/anomalyco/opencode/pull/43282)**
   `subagent` 工具的 `agent` 字段此前描述含糊，现直接暴露合法 ID（Fixes #36761），降低 agent 编排的试错成本。

8. **[#43460 fix(core): 使用 schema 自身实例解码插件工具输入](https://github.com/anomalyco/opencode/pull/43460)**
   解决插件打包了不同版本 `effect` 时工具输入解码失败的问题（Closes #43322），是插件兼容性的关键修复。

9. **[#39807 feat(tui): 可选展示当日会话总成本](https://github.com/anomalyco/opencode/pull/39807)**
   侧栏已有单会话费用，本 PR 增加当日所有会话的总费用展示，无需再跑 `opencode stats --days 1`，对成本敏感用户是实用改进。

10. **[#44940 docs: 将 opencode-prewalk 加入生态插件列表](https://github.com/anomalyco/opencode/pull/44940)**
    新增 token 成本节省型插件（模型交接工作流），与 [#44200 opencode-senses](https://github.com/anomalyco/opencode/pull/44200) 一起代表社区在成本优化方向上的主动探索。

## 功能需求趋势

- **插件生态稳定性与可观测性**（#44788、#44895、#43460）：2.0 插件 API 事件投递异常、加载顺序不确定、Hook 错误未隔离——插件系统正处于稳定性攻坚期，社区对可预测的插件行为有强烈诉求。
- **成本控制与透明度**（#44940、#44200、#39807）：新增生态插件多围绕 token 节省；TUI 侧请求显示当日累计花费。成本可见性 + 主动降耗双轨并行。
- **2.0 TUI 交互体验打磨**（#44857、#39736、#44928）：粘贴延迟、中断状态下的 undo 失败、对话框焦点丢失，2.0 的 UI 状态机正在密集修复期。
- **桌面端项目/会话管理确定性**（#40094、#44779、#44932、#44930）：前缀碰撞、缺失目录会话恢复、归档会话搜索——桌面应用工程化补齐中。
- **Linux 终端原生体验回归**（#44938、#37692）：中键粘贴、Kitty 键盘协议，社区对 Linux 终端细节体验的坚持值得关注。

## 开发者关注点

- **服务稳定性与信任危机**："付费模型全部 503"（#36506）持续一个多月未解决 + "付费用户被误封"（#44919）叠加，付费链路稳定性和账号风控误伤已成为社区信任的核心风险点。
- **"假成功"类反馈是最大痛点**：剪贴板提示成功实际未复制（#41470）、会话打开看似成功实则进入错误项目（#40094/#44779）——这类不确定性的交互对开发者工作流的危害高于直接报错。
- **环境适配长尾问题**：Docker/VSCode Server 剪贴板、WezTerm 键盘协议、非 vision 模型截图冻结，异构环境下的兼容性测试需要加强。
- **对 Bug 修复周期的敏感**：多个 Issue（#41470、#36506）持续数周未 close，开发者反复顶帖，版本迭代速度虽快（24 小时内两个 patch），但核心阻塞问题的 ROI 分配值得关注。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-25

## 1. 今日速览

昨日发布 v0.84.3，引入原生 PowerShell 工具和更安全的管理更新机制，Windows 支持成为当日社区最热话题（#7547 获 48 条评论）。与此同时，围绕 OpenRouter 推理控制（#8454）、TUI 流式渲染缺陷（#8584）以及图像队列状态不同步（#8581）的修复 PR 密集合入，显示维护者正在快速收敛近期回归问题。

---

## 2. 版本发布

**v0.84.3** 主要更新：

- **PowerShell 工具**：在 Windows 上支持可选的原生 PowerShell 命令执行（详情见 [PowerShell Tool 文档](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool)）
- **更安全的管理更新**：分阶段、验证后原子化激活

> ⚠️ 注意：该版本引入了一个已知回归——通过 HTTP 代理调用 `google-vertex` 时抛出 `HttpsProxyAgent is not a constructor` 错误（见 Issue #8610）。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔥 高热度

1. **[#7547] Windows 使用体验集中反馈**（48 评论）  
   作者 `petrroll` 发起，收集 Windows 平台的使用方式和问题。Windows 开发者数量庞大但 Pi 的运行方式多样，社区正在帮助维护者确定修复优先级和文档优化方向。  
   → [GitHub](https://github.com/earendil-works/pi/issues/7547)

2. **[#8584] TUI 流式渲染行错乱**（6 评论，4 👍）  
   长时间工具输出后，assistant 文本被逐词换行渲染。影响核心交互体验，社区关注度高。  
   → [GitHub](https://github.com/earendil-works/pi/issues/8584)

### 模型与提供商适配

3. **[#8454] OpenRouter reasoning-mandatory 模型 400 错误**（已关闭）  
   当调用方省略 reasoning 参数时，适配器错误发送 `reasoning:{effort:"none"}`，导致如 `stealth/ox-alpha` 等强制推理端点拒绝请求。已有对应修复 PR（#8614/#8609）合入。  
   → [GitHub](https://github.com/earendil-works/pi/issues/8454)

4. **[#8537] Kimi (moonshotai-cn) 回放工具历史时 400 错误**（已关闭）  
   回放会话历史时出现孤儿 tool 消息、用户消息交错、重复 `tool_call_id` 三类问题，Kimi 对消息格式校验严格导致失败。  
   → [GitHub](https://github.com/earendil-works/pi/issues/8537)

5. **[#8546] DeepSeek 首个视觉模型未被内置目录收录**（已关闭）  
   `deepseek-v4-flash-vision-exp`（2026-08-21 发布）在 TUI/Web UI 中不可选，社区期望尽快纳入内置模型目录。  
   → [GitHub](https://github.com/earendil-works/pi/issues/8546)

6. **[#8541] OpenAI 兼容 429 被泛化为 `ERROR`**（已关闭）  
   `nous` 提供商的 429 容量错误只显示 `Error: ERROR`，完全丢失诊断信息。  
   → [GitHub](https://github.com/earendil-works/pi/issues/8541)

### Bug 与回归

7. **[#8610] v0.84.3 回归：代理环境下 google-vertex 调用失败**（已关闭）  
   设置 `https_proxy` 后调用 `gemini-3.7-flash` 立即报 `HttpsProxyAgent is not a constructor`，确认是 v0.84.3 引入的回归。  
   → [GitHub](https://github.com/earendil-works/pi/issues/8610)

8. **[#8582] 内置 PowerShell 工具在交互模式使用 5.1，`-p` 模式用 pwsh**（OPEN）  
   行为不一致：交互模式回退到 Windows PowerShell 5.1，即使已安装并配置 `pwsh.exe` 在 PATH 中。  
   → [GitHub](https://github.com/earendil-works/pi/issues/8582)

9. **[#8581] 仅图像消息导致 pendingMessageCount 卡住**（已关闭）  
   图像-only 的引导/跟进消息投递后，`AgentSession` 仍报告一条 pending；根本原因是队列中存了空字符串。已有修复 PR #8612。  
   → [GitHub](https://github.com/earendil-works/pi/issues/8581)

10. **[#8594] fd/rg 自动下载在共享出口 IP 后总是失败**（已关闭）  
    企业代理场景下匿名 GitHub API 配额（60 req/h per IP）被耗尽，导致新机器上无法下载 fd/rg。  
    → [GitHub](https://github.com/earendil-works/pi/issues/8594)

---

## 4. 重要 PR 进展（精选 10 条）

### 修复类

1. **[#8615] 保留交错的用户内容顺序**  
   修复 `sendUserMessage()` 中文本/图像块顺序丢失问题，确保 idle 提示和流式引导/跟进投递中保持原始顺序。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8615)

2. **[#8616] JPEG 非 EXIF APP1 段扫描修复**  
   遇到非 EXIF 的 APP1 段（如 XMP）时继续扫描，避免图像转换失败。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8616)

3. **[#8612] 清除已投递的图像-only 队列条目**  
   确保无文本消息投递后队列状态正确，`pendingMessageCount` 不再卡住。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8612)

4. **[#8613] 隔离并发会话分享**  
   每次 `/share` 使用独立临时目录，避免并发导出时互相覆盖或删除。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8613)

5. **[#8614] OpenRouter 推理控制参数推导**（已合入，修复 #8454）  
   根据模型要求正确推导 reasoning 控制参数，不再对 reasoning-mandatory 端点发送 `effort:"none"`。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8614)

6. **[#8605] 拼接 OpenAI completions 推理增量**  
   连续同类型（`text`/`summary`）的 reasoning delta 应拼接而非覆盖，与 OpenRouter 官方实现对齐。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8605)

7. **[#8570] 保留 Codex 线程亲和性请求头**  
   为 OpenAI Codex Responses 请求补充 `thread-id` 头，与已发送的 `session-id`、`x-client-request-id` 配合，改善上游线程亲和性。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8570)

### 功能改进

8. **[#8032] TUI 组件支持鼠标事件**  
   新增可选 `Component.onMouse(event)` 钩子，`TuiAltScreen` 对组件树进行命中测试并逐层传递事件。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8032)

9. **[#8356] 模型和思考级别变更改为会话级作用域**  
   修复 `/model` 或思考级别调整意外修改全局默认设置的问题（#5263），默认不再影响未来启动配置。  
   → [GitHub](https://github.com/earendil-works/pi/pull/8356)

10. **[#8604] `@` 文件自动补全添加 `--no-ignore`**  
    允许引用 `.gitignore` 中忽略的文件（如 `.env`、私钥），此前这些文件无法通过 `@` 引用。  
    → [GitHub](https://github.com/earendil-works/pi/pull/8604)

---

## 5. 功能需求趋势

从近期 Issues 可归纳出以下社区关注方向：

| 方向 | 代表性 Issue/PR | 趋势说明 |
|------|-----------------|----------|
| **Windows 一等公民支持** | #7547, #8582 | 多运行方式并存导致体验碎片化，社区要求统一 PowerShell 7 支持和更清晰的文档指引 |
| **新模型快速适配** | #8546, #8454, #8541 | DeepSeek 视觉模型、OpenRouter 强制推理模型等新端点持续涌现，内置目录和推理参数推导需要更自动化 |
| **会话管理精细化** | #8554（移动到新工作目录）、#8602（导入覆盖保护） | 开发者希望更灵活地管理会话生命周期，包括迁移、导入保护和避免误覆盖 |
| **扩展 API 能力补全** | #8596（只读压缩准备）、#6847（ToolExecution 类型导出） | 扩展开发者需要完整的公共 API 类型和上下文方法 |
| **TUI 交互体验** | #8584（渲染行错乱）、#8032（鼠标事件） | 流式渲染稳定性和交互方式（鼠标）是 UI 层面的核心诉求 |
| **性能与上下文优化** | #8583（重工具 schema 延迟加载） | 启动上下文过大影响体验，社区提出按需激活工具 schema 的方案 |

---

## 6. 开发者关注点

- **代理环境支持不足**：多个问题（#8594、#8610）指向代理/共享 IP 场景下的失败——fd/rg 自动下载受限、HTTPS 代理回归，说明企业环境是重要使用场景且需要更完善的测试覆盖。
- **模型差异造成的兼容性负担**：Kimi 严格的消息格式校验、OpenRouter 强制推理端点、DeepSeek 视觉模型——每新增一个提供商/模型都可能暴露适配层的隐性假设，社区希望维护者能主动补齐兼容层。
- **会话状态一致性**：图像-only 消息 pending 计数卡住（#8581）、并发 `/share` 互相覆盖（#8574）、`/import` 静默覆盖（#8602）——状态管理类 bug 集中在消息队列和文件系统边界的边缘情况。
- **CRLF/LF 混合文件被意外改写**（#8544）：`edit` 工具会统一改写未触及行的行尾，对使用混合行尾的项目造成字节级破坏——对代码编辑工具的修改语义提出了更严格的要求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-25

## 今日速览

今日发布夜间版 v0.22.0-nightly.20260825，修复 Web Shell 工作区上下文传递问题。社区讨论集中在多智能体协作缺陷（#8097）、`/effort max` 在 OpenAI 兼容提供商上导致会话崩溃（#9459）、以及 OOM 问题（#9198）三大高关注度 Bug 上。PR 方面，review 管线的容器安全加固（#9983）与新一轮自动修复接管（autofix/takeover）值得关注。

## 版本发布

**v0.22.0-nightly.20260825.22bb5e8b9f** — 本次夜间版包含一项修复：
- `fix(web-shell)`: 从概览面板打开会话时正确传递工作区 cwd（PR #9730）

## 社区热点 Issues（Top 10）

1. **[#8097] Background agent coordination gap** — 多后台 Explore 子代理并行运行时出现协调失败：父代理重复子代理工作、过早完成、`send_message` 无法中断通信。这是 multi-agent 路线图上的核心缺陷，8 条评论持续更新中。 [链接](https://github.com/QwenLM/qwen-code/issues/8097)

2. **[#9459] `/effort max` 在 OpenAI 兼容提供商上导致整个会话崩溃** — UI 提供 `max` 选项但所有 OpenAI 兼容提供商均拒绝该值，且 `clampReasoningEffort()` 未做钳制，一旦设置后续所有请求返回 400。P1 级别、已标记 ready-for-agent。 [链接](https://github.com/QwenLM/qwen-code/issues/9459)

3. **[#9198] Qwen 运行一周后 OOM（内存溢出）** — 用户报告在 1TB 内存服务器上运行一周后 OOM 退出，且 tmux 终端按键错乱。性能类问题，涉及 session/memory 管理，需维护者进一步信息。 [链接](https://github.com/QwenLM/qwen-code/issues/9198)

4. **[#9733] 循环检测误报导致无人值守会话不可恢复地终止** — 在合法且推进状态的 tool-call 序列（写脚本→运行→编辑→重验）上反复触发循环检测并终止回合，严重破坏自动化长任务。 [链接](https://github.com/QwenLM/qwen-code/issues/9733)

5. **[#8227] Windows 平台 @-file 读取缺少 O_NOFOLLOW 保护** — 安全类问题：Windows 上无 `O_NOFOLLOW` 等价物，符号链接/TOCTOU 防护明显弱于 Linux，且未测试。已标记欢迎 PR。 [链接](https://github.com/QwenLM/qwen-code/issues/8227)

6. **[#9784] `/review` 管线应整体运行在 fork 子代理上下文中** — P0 级增强，将 ~95k token 的 SKILL.md 及多轮验证逻辑全部隔离到子代理，避免用户上下文膨胀。roadmap/multi-agent 方向。 [链接](https://github.com/QwenLM/qwen-code/issues/9784)

7. **[#9944] MCP 重连报告成功但工具实际不可用** — HTTP 传输的 MCP 服务器重启后生成新 `mcp-session-id`，`qwen mcp reconnect --all` 显示成功但调用工具仍失败。MCP 集成链路完整性缺陷。 [链接](https://github.com/QwenLM/qwen-code/issues/9944)

8. **[#9927] Artifact `updatedAt` 不随内容更新而变化** — 会话 Artifact 的 `updatedAt` 仅在注册字段（标题、URL、sizeBytes）变化时移动，内容更新后时间戳不刷新；`write_file` 中间产物残留为 missing。 [链接](https://github.com/QwenLM/qwen-code/issues/9927)

9. **[#9005] Anthropic 协议流缺少 OpenAI 协议已有的流安全保护** — `anthropicContentGenerator` 缺少流安全机制，与 OpenAI 通道不对称。P1 核心问题，核心代码审查中。 [链接](https://github.com/QwenLM/qwen-code/issues/9005)

10. **[#8662] TUI 渲染层从 ink 迁移到 OpenTUI（追踪）** — 当前基于 ink 7 + React 19 的 TUI 有约 1037 行补丁代码及自定义 Virtual Viewport，结构性缺陷促使社区推动迁移。涉及 roadmap/terminal-ux。 [链接](https://github.com/QwenLM/qwen-code/issues/8662)

## 重要 PR 进展（Top 10）

1. **[#9983] fix(review): 将主机可信状态移出容器的可写面** — review 沙箱的安全加固：将 worktree lease 文件移出读写挂载目录，并阻止探测树恢复指向容器内部的管理条目。 [链接](https://github.com/QwenLM/qwen-code/pull/9983)

2. **[#9940] fix(review): 将发现的评论回填到对应线程并解决已修复项** — 多轮 review 中仍存在的问题以回复形式落在原始线程而非新建评论；已修复的问题自动标记解决。 [链接](https://github.com/QwenLM/qwen-code/pull/9940)

3. **[#9813] feat(triage): PR 打开或延迟时分配唯一责任人** — 解决 fork PR 命中审批护栏时仅 @mention、无人可见的问题，让 PR 进入 Assignee 过滤器。 [链接](https://github.com/QwenLM/qwen-code/pull/9813)

4. **[#9769] feat(web-shell): 在脏工作区时解除 git 更新阻塞** — "Update Project" 操作不再因未提交更改而中止；分支选择器会切换到可清理脏工作区的模式。 [链接](https://github.com/QwenLM/qwen-code/pull/9769)

5. **[#9739] feat(core): 绑定会话 shell 中通过 `gh pr create` 创建的 PR** — 补全会话↔PR 功能的最后绑定缺口：代理在 shell 中而非 Web Shell Git 对话框创建的 PR 现在也能被正确绑定。 [链接](https://github.com/QwenLM/qwen-code/pull/9739)

6. **[#10002] feat(core): 新增内置 goal-draft 技能** — 只读技能 `/goal-draft <intent>` 将模糊意图转化为 Goal verifier 可判定的 `/goal` 目标，先判断请求是否属于 Goal 类型。 [链接](https://github.com/QwenLM/qwen-code/pull/10002)

7. **[#9728] fix: 修复 Windows 和 macOS 测试线失败** — 修复导致两个平台 CI 红灯的测试失败，涉及多个产品修复、测试夹具修复和快照更新，为恢复两个平台 CI 线铺路。 [链接](https://github.com/QwenLM/qwen-code/pull/9728)

8. **[#9741] fix(review): 在探测树恢复前也过滤内容过滤器** — 替换 #9566，同一提交重新基于 main 分支。禁止在仓库本地配置定义内容过滤器时创建或重置 scratch-tree。 [链接](https://github.com/QwenLM/qwen-code/pull/9741)

9. **[#9717] feat(review): 新增 prose 执行审计与反框架审计** — 来自 #9655 事故复盘的两个审计视角：#9707 提案 3 和 4——检查 diff 触及指令文件（SKILL.md、agent 文件等）时正确生成与执行。 [链接](https://github.com/QwenLM/qwen-code/pull/9717)

10. **[#9406] feat(serve): 在无头守护进程主机上隐藏工作区 Browse 按钮** — 识别守护进程运行环境（macOS/Linux/Windows），无头模式下隐藏原生目录选择器入口。 [链接](https://github.com/QwenLM/qwen-code/pull/9406)

## 功能需求趋势

从今日 Issue 与 PR 中可以提炼出以下社区关注方向：

- **多智能体协作可靠性**（#8097、#9784）：后台子代理的协调、通信与上下文隔离是当前 roadmap 的核心，尤其 `/review` 在子代理中完整运行是明确的 P0 需求。
- **Web Shell 体验补全**（#9769、#9739、#10008、#10001）：从 git 更新解阻塞到 PR 绑定、推理模式选择、错误复制——Web Shell 的功能对齐与交互细节打磨密集推进。
- **Review 与验证管线强化**（#9983、#9940、#9717、#9741）：容器安全、线程管理、审计视角扩充——质量保障工具链是当前投入最大的方向之一。
- **跨平台一致性**（#8227、#9728）：Windows/macOS 的安全防护缺口和 CI 修复在持续补齐。
- **新技能与命令组织**（#10002、#9942）：「清晰/整洁」类诉求——如隐藏技能命令避免斜杠补全拥挤、goal-draft 帮助 agent 写出可判定目标。

## 开发者关注点

**高频痛点：**

1. **长任务稳定性** — 循环检测误报（#9733）、OOM（#9198）与无人值守运行的中断问题反复出现，自动化场景受影响最大。
2. **提供商兼容性** — `/effort max` 在 OpenAI 兼容提供商上的崩溃（#9459）说明 UI 暴露的能力与实际模型/服务商支持之间存在断层。
3. **缓存与性能** — 前缀缓存失效（#9230，已关闭）和 token 压缩异常（#9309，已关闭）表明开发者在持续关注成本与性能优化。
4. **MCP 连接可靠性** — 重连假成功（#9944）是集成链路的信任问题，影响第三方工具生态。

**建设性信号：** 多个问题已被标记为 `welcome-pr`（#8227）或已完成状态流转（`ready-for-agent`、`need-retesting`），显示维护者正在高效分流；`find-simplifications` 技能驱动的死代码/无用组件清理工作（#10000、#9997）也体现了社区在主动降低代码库维护成本。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-25

> 数据来源：[github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/CodeWhale)（实测仓库已更名/迁移为 CodeWhale，以下链接保持一致）

## 1. 今日速览

v0.9.12 集成分支（[#5576](https://github.com/Hmbown/CodeWhale/pull/5576)）已进入 code-complete 阶段，release blockers 全部合入，仅剩版本号与 changelog 门禁。社区侧值得注意的信号：一个全新安装场景下 MiniMax/Xiaomi 模型返回 404 的问题（[#5601](https://github.com/Hmbown/CodeWhale/issues/5601)）被用户独立发现并修复，反映多 provider 支持仍有兼容性隐患；同时开发者 @aboimpinto 主导的 TUI  crate 分解（EPIC-005，[#5316](https://github.com/Hmbown/CodeWhale/issues/5316)）和 PR 持续落地，架构治理进入实质性阶段。

## 3. 社区热点 Issues（Top 10）

1. **[EPIC-005: TUI Crate 分解（总跟踪）— #5316](https://github.com/Hmbown/CodeWhale/issues/5316)**
   评论 15 条，最热门。架构级重构的 umbrella issue，之下挂接多个子 EPIC/FEAT。社区关注度最高，说明大规模代码组织问题已成为核心痛点。
   
2. **[Provider 中立性审计：18 处 DeepSeek 专属门禁 — #5588](https://github.com/Hmbown/CodeWhale/issues/5588)**
   作者 Hmbown 全文审计了 279 个文件、2281 行中的 deepseek 字符串，识别出 18 处行为级 DeepSeek 门禁（概念上应为 provider-neutral）。反映多模型适配的战略方向。
   
3. **[Compaction 生存契约发布 — #4394](https://github.com/Hmbown/CodeWhale/issues/4394)**
   长期开放的可靠性议题，要求为上下文压缩机制发布并强制结构化生存契约。结合 4 条评论持续讨论，说明上下文管理在长会话场景的优先级很高。
   
4. **[v0.9.12 巨型文件分解（lib.rs 18.7k 行等）— #5586](https://github.com/Hmbown/CodeWhale/issues/5586)**
   作者直接列出 4 个超过 9k 行的生产文件。与 EPIC-005 呼应，是社区对可维护性诉求的直接证据。
   
5. **[v0.9.12 里程碑跟踪 — #5573](https://github.com/Hmbown/CodeWhale/issues/5573)**
   Release 门禁清单，P0 must-fix 集合目前已在集成分支上全部合入。是判断发布节奏的关键 issue。
   
6. **[全新安装 MiniMax/Xiaomi 模型返回 404 — #5601](https://github.com/Hmbown/CodeWhale/issues/5601)**
   中文用户报告，全新安装后首次配置 MiniMax 和 Xiaomi 模型报 404，推测为内置 URL 错误，DeepSeek 正常。典型的多 provider 兼容性 bug，直接影响新用户 onboarding。
   
7. **[TUI 聚焦块操作：y/Y/Enter/r 快捷键 — #5551](https://github.com/Hmbown/CodeWhale/issues/5551)**
   要求在 transcript 聚焦块上提供复制内容、复制元数据、全屏、raw markdown 查看等操作。已有关闭状态说明被采纳并由 PR #5608 实现。
   
8. **[Stale write-claims 锁死子代理命令执行 — #5562](https://github.com/Hmbown/CodeWhale/issues/5562)**
   Windows 环境下 write-claims 永久残留导致级联锁死，verifier 角色描述自相矛盾。多平台可靠性问题，已关闭（修复合入）。
   
9. **[/context 归因工具与 MCP server 的 token 成本 — #5553](https://github.com/Hmbown/CodeWhale/issues/5553)**
   要求 context inspector 按工具/MCP server 逐行显示 token 成本，用户可据此裁剪 MCP server。成本可见性成为刚需，已由 PR #5603 实现显示部分。
   
10. **[文档全面中文化 EPIC — #5482](https://github.com/Hmbown/CodeWhale/issues/5482)**
    中文用户基数增长驱动，要求 review/重构并全面本地化文档。社区多元化的直接信号。

## 4. 重要 PR 进展（Top 10）

1. **[v0.9.12 集成分支：must-fix + UX 修复（WIP）— #5576](https://github.com/Hmbown/CodeWhale/pull/5576)**
   0.9.12 周期的集成分支，release blockers 已全部合入，仅剩版本号与 changelog 门禁。当前最重要的 PR。
   
2. **[0.9.12 relay 集成：托管 Chat 与原生 runtime 线程统一 — #5606](https://github.com/Hmbown/CodeWhale/pull/5606)**
   托管 Chat 改用原生 runtime 线程（turn_operation_idempotency），附带 R2 approval 修复（MCP 工具按 kind 审计）。架构统一的关键一步。
   
3. **[TUI 显示工具与 MCP schema 成本（#5603 rebase）— #5611](https://github.com/Hmbown/CodeWhale/pull/5611)**
   Hmbown 将社区贡献者 @wuisabel-gif 的 #5603 rebase 到最新 main（#5604 合入后 CHANGELOG 冲突），保留原作者署名。社区协作的正面示例。
   
4. **[TUI 聚焦 transcript 操作 — #5608](https://github.com/Hmbown/CodeWhale/pull/5608)**
   实现 #5551 的聚焦切片：transcript 聚焦且 composer 为空时支持 `y`（复制内容）、`Y`（复制元数据/收据）等。UX 精细度提升。
   
5. **[Fleet roster 编辑可发现性 — #5604](https://github.com/Hmbown/CodeWhale/pull/5604)**
   修复 #5589：选中成员显示显式 `[edit]` 提示，footer 广告 `m model` 快捷键。解决"Enter 循环回到同一屏幕"的困惑。
   
6. **[FEAT-019：memory 组命令改为外部 command shapes — #5609](https://github.com/Hmbown/CodeWhale/pull/5609)**
   `/note`、`/memory` 命令组迁移到外部命令形态（FEAT-014/015 框架，沿用 FEAT-018 模式）。crate 分解规划中的执行步骤。
   
7. **[Windows verbatim 路径保留 — #5610](https://github.com/Hmbown/CodeWhale/pull/5610)**
   修复阻塞 FEAT-019 的两个 Windows CI 失败：POSIX word split 不破坏 Windows verbatim 路径操作数。跨平台完整性的工程质量保证。
   
8. **[修复 web 发布事实滞后 — #5612](https://github.com/Hmbown/CodeWhale/pull/5612)**
   `latest-published-release.json` 手工维护但从未写入，导致站点停在 v0.9.10 而 v0.9.11（2026-08-23 发布）未被反映。非表面问题——营销站点数据直接影响用户下载决策。
   
9. **[control socket 最终部分（Part D）— #5594](https://github.com/Hmbown/CodeWhale/pull/5594)**
   完成 opt-in、Unix-only、newline-framed JSON-RPC 控制套接字。监督式操作的外部控制面，适合无人值守/编排场景。
   
10. **[子代理审批收据持久化 — #5584](https://github.com/Hmbown/CodeWhale/pull/5584)**
    子代理审批提示此前可以仅基于内存决策授予工具调用而无可持久化的 Asked/terminal 证据；现继承会话审批收据存储并在执行前提交 Asked。安全审计完整性的重要补丁。

## 5. 功能需求趋势

- **Provider 中立化**（#5588、#5601）：从 "DeepSeek 专用" 走向多模型通用是战略主线，内置 URL 错误等兼容性 bug 是当前最大落地障碍。
- **上下文透明化**（#5553、#4394）：用户要求看到每个工具/MCP server 的 token 成本并据此裁剪；compaction 需要有结构化契约而非启发式。
- **代码可维护性**（#5316、#5586）：TUI crate 分解、巨型文件拆分是高活跃度议题，开发者已从"能跑"转向"能维护"。
- **TUI UX 精细化**（#5551、#5589）：快捷键体系、显式编辑提示、避免 Enter 死循环——关注焦点从功能缺失转向交互打磨。
- **监管与审计增强**（#5594、#5584）：控制套接字（外部监督）、生命周期 outbox、审批收据持久化——面向无人值守与合规场景的能力蓄力。
- **多语言支持**（#5482）：文档中文化 EPIC 反映用户基数的地理扩展。

## 6. 开发者关注点

- **跨平台可靠性**：Windows 用户报告的问题占比高——write-claims 锁死（#5562）、MiniMax/Xiaomi 404（#5601）、verbatim 路径 CI 失败（#5610）——都在 Windows 场景暴露。Windows 输出解码也在修复中（#5602）。
- **发布流程可预期性**：#5573 里程碑 tracker 与 #5576 集成分支让社区能追踪到 release 门禁状态；但 #5612 暴露了营销数据滞后问题，发布链路的信息同步需要自动化。
- **架构治理 vs 功能交付的平衡**：EPIC-005 分解和集成 PR（#5606）持续推进，但 10k 行级文件的存在仍使 bug 修复和测试变得脆弱（如 #5585 栈溢出测试）。
- **成本可见性**：360k tokens 级别的低效问题（如 #5595 中 347k tokens 无产出）转向通过 UI 层面的成本归因（#5553）解决，而非仅靠模型侧优化。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*