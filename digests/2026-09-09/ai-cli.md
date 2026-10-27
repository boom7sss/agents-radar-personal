# AI CLI 工具社区动态日报 2026-09-09

> 生成时间: 2026-09-09 11:51 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向分析报告

**报告日期：** 2026-09-09
**分析范围：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（9 款主流 AI CLI 工具）


## 1. 生态全景

当前 AI CLI 工具生态正处于 **功能快速迭代与稳定性承压并存的阶段**。头部工具（Claude Code、Codex、Gemini CLI）版本发布频繁（三者在过去 24 小时内合计发布 10+ 版本），但社区反馈中"昨天还好好的"类回归问题密度显著上升——Claude Code 的 gateway 回归、Codex 的 Alt+P 崩溃、Copilot CLI 的 MCP 超时压缩等均指向测试覆盖不足的系统性隐忧（Claude Code 将 issue 生命周期从 14 天放宽至 90 天即是对复杂 bug 追踪窗口不足的间接回应）。安全机制是另一突出矛盾：Claude Code 的 ClAudit、Codex 的安全审查系统在"安全兜底"与"不打断合法工作流"之间频繁误伤，单日安全误报类 issue 即超过 15 条且多为 session-halted 级别。与此同时，社区对**代理可靠性**（状态误报、无限挂起、会话不可恢复）的容忍度正在降至临界点——多个工具（Gemini CLI、Copilot CLI、OpenCode）均出现"代理上报成功但实际未完成任务"或"会话卡死无恢复路径"的 p1 级缺陷，这已成为影响开发者对代理自动化信任的首要障碍。各工具间的差异化定位初显：Claude Code 偏企业级多 agent 编排、Codex 强在桌面端与语音、Gemini CLI 面向代理自主性探索、OpenCode 走模型兼容性广度路线，但**会话生命周期管理与代理状态可信度**是当前普遍存在的核心短板。


## 2. 各工具活跃度对比

| 工具 | 活跃 Issues | 热议 Issues（高赞/高评论） | PR 数 | Releases | 热度信号 | 社区规模 / 状态 |
|------|------------|---------------------------|-------|----------|----------|----------------|
| Claude Code | 10+（当日新建 2 条） | #66402（14👍）、#91784（13👍）、#92958（19 评论） | 1 | 2 版本（v2.1.265/266） | 高热度 issue 集中在多 agent 配置污染与 Windows 兼容性 | 大型 / 稳定迭代 |
| OpenAI Codex | 10+（含 2 条新重复报告） | #41513（14👍/42 评论）、#34306（14👍）、#25271（34 评论） | 14 | 4 个 alpha 预发布 | 今日最活跃 PR 侧（14 条，全部合并），桌面端问题密集 | 大型 / 快速迭代 |
| Gemini CLI | 10+ | #21409（8👍）、#22323（13 评论）、#21968 | 10 | 3 版本（正式+预览+nightly） | 社区提案质量高（含 4 条 Auto Memory 系列），PR 集中在可靠性修复 | 中型 / 快速迭代 |
| GitHub Copilot CLI | 10+ | #13（76👍已关闭）、#4756（19👍）、#4742（10 评论） | 2 | 2 补丁版本 | Vim 模式落地是本日最大事件，桌面端会话并发限制为最大痛点 | 大型 / 稳定迭代 |
| Kimi Code CLI | 4（2 条当日新建） | #2638（当日新建，认证 500） | 2 | 0 | 热度最低，RTL 支持缺口与登录故障为主 | 小型 / 缓慢迭代 |
| OpenCode | 10+ | #6231（231👍 长期第一）、#47902（V2 工具参数损坏）、#48090 | 10 | 1 补丁版本（v1.18.30） | 模型兼容性与 V2 加固为两大主线 | 中型 / 快速迭代 |
| Pi | 10 | #8823（10 评论）、#7444（10 评论）、#9052（3👍） | 10 | 未发布（0.62.0 预期） | OpenCode 兼容性连锁故障密集关闭，性能对标竞品 | 中型 / 稳定迭代 |
| Qwen Code | 10 | #8662（33 评论） | 10 | 2 版本（v0.23.2/v0.23.1）+ SDK v0.1.11 | daemon/Web Shell 集成能力为焦点 | 中型 / 快速迭代 |
| DeepSeek TUI | 10 | （无突出高赞） | 3 | 0 | 热度最低，成本可观测性诉求集中 | 小型 / 早期迭代 |

**备注：** 今日总活跃度最高的依次为 Codex（14 PR + 4 版本）、Gemini CLI（10 PR + 3 版本）、OpenCode（10 PR + 1 版本）、Qwen Code（10 PR + 2 版本）；Kimi Code CLI 与 DeepSeek TUI 活跃度最低，均无新版本发布。社区规模维度：Claude Code 与 Copilot CLI 的热门 issue 点赞量远超其他工具（单条最高分别达 76👍 与 231👍 的 OpenCode 则为需求累积型），头部效应显著。


## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|----------|
| **会话/上下文稳定性与恢复** | Gemini CLI、Copilot CLI、OpenCode、Claude Code | ① 代理状态误报（Gemini #22323 未执行即报 success；OpenCode #47487 会话无恢复路径）；② 长会话崩溃或劣化（Copilot #4664 堆内存溢出 / #4612 死循环 / #4764 一小时后失效）；③ 上下文中毒与中断恢复（Gemini PR #29265） |
| **安全/审查机制误伤合法工作** | Claude Code、Codex、Gemini CLI | Claude Code 单日 ClAudit 误报 12+ 条 session-halted 级 issue；Codex #34306（14👍 网络安全请求被拦截）；Gemini #22672（呼吁增加破坏性命令安全护栏，方向相反但同为安全机制讨论）；Pi #5982（强制脱敏反伤开发） |
| **Windows 平台稳定性** | Claude Code、Codex、Copilot CLI、Qwen Code | ① Windows 系统更新破坏核心功能（Claude Code #92958 Plan9 挂载失效；Qwen Code #11410 本地模型 400）；② 桌面端会话并发限制（Copilot #4742/#4756，19👍）；③ Windows 本地项目可靠性（Codex #42215/#41552） |
| **多 Agent/多会话编排的细粒度控制** | Claude Code、OpenCode、DeepSeek TUI | Claude Code #66402（14👍）要求 fleet 视图下 per-agent 配置独立 model/effort；OpenCode #38550/#24298 要求人工干预 Agent 待办与转向；DeepSeek TUI #6013 目标独立验证门 |
| **自定义模型/Provider 兼容性** | OpenCode、Copilot CLI、Codex、Pi、Qwen Code、DeepSeek TUI | OpenCode #6231（231👍）模型自动发现；Copilot #2943（14👍）OpenRouter 支持；Codex #24879 硬编码审查模型名与自定义 Provider 不兼容；Pi #9326/#9230 x-opencode-session 头连锁故障；Qwen Code #10530 llama-server 兼容性；DeepSeek #6009 目录分页缺失 |
| **成本/用量可观测性** | DeepSeek TUI、Pi、Claude Code | DeepSeek #5976 cost unknown/#6011 全局 token 诊断；Pi #8125 WebSocket 降级致缓存失效 + #6881 Provider 报告成本替代估算；Claude Code 遥测补充 user.email/groups 字段 |
| **认证与授权机制可靠性** | Kimi CLI、Gemini CLI、Copilot CLI | Kimi #2638 设备流返回 HTTP 500；Gemini PR #29163 macOS Seatbelt 认证崩溃；Copilot #4753 会话恢复时 MCP 连接超时缩短（16s→1s）；Claude Code #92974 后台权限弹窗只有 Deny 按钮 |


## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 | 当前关键短板 |
|------|---------|----------|-------------|-------------|
| **Claude Code** | 企业级多 Agent 编排（agents/fleet, Cowork, Routines） | 企业开发团队、深度 CLI 用户 | 插件体系扩展中（多插件目录、自托管 marketplace 诉求）；遥测体系完善；企业网关（LLM-gateway）场景明确 | 更新引入回归频率上升；配置作用域语义混乱（全局 vs 会话）；ClAudit 大规模误报；Windows 设备功能稳定性 |
| **OpenAI Codex** | 多形态桌面端 AI 编程助手（App/CLI/语音/Computer Use） | 桌面端开发者、OpenAI 生态用户 | Rust 核心 + 桌面应用；凭据代理（credential brokering）体系当日 6 个 PR 集中加固；Python SDK 持续扩展 | Windows 系缺陷比例最高（约半数热门 issue）；安全审查硬编码 OpenAI 自有服务假设；模型可切换性差 |
| **Gemini CLI** | 代理自主性探索型 CLI | Linux/开源开发者 | Subagent/通用代理架构 + Auto Memory 记忆系统 + A2A 协议 + skills 体系；nightly 持续发布研发推进 | 代理状态可信度差（误报 success、无限挂起）；浏览器子代理 Linux 支持不足；shell 执行不透明（曾静默清空 git 配置） |
| **GitHub Copilot CLI** | 依托 GitHub 生态的 CI/会话管理 + 桌面并发控制 | GitHub 重度用户、多分支并行开发者 | 桌面应用与 CLI 协同；远程会话/任务仪表盘集成（Mission Control）；tgrep 索引器；MCP + OAuth | 当前版本会话并发限制直接阻塞多任务工作流；长会话稳定性系统性问题；MCP 版本间回归 |

| **OpenCode** | 模型兼容性广度优先的开放 CLI | 本地模型用户（LM Studio/Ollama）、多 Provider 开发者 | OpenAI-compatible 端点为中心 + Zen 托管；V2 架构积极加固中；社区驱动模型适配（DeepSeek 系列当日多 PR 成链）；CLI/TUI/桌面端多形态 | V2 回归频出（工具参数损坏、功能缺失）；Agent 会话救援机制缺失（读图超限即卡死）；XDG 规范违规 |
| **Pi** | 多 Provider 聚合与异步任务导向客户端 | 同时使用多家模型 API 的开发者、远程任务管理需求 | AGENTS.md 标准化 (pi-mono)；Qwen/Codex/OpenCode/Anthropic 多方 Provider 适配；Gondolin 云运行时 + 代码评审 agent；WebSocket/SSE 流式控制 | Provider API 上游变更引发连锁故障；WebSocket 重试逻辑覆盖不足；启动性能低于竞品 |
| **Qwen Code** | 以 daemon/Web Shell 为核心的集成型 CLI + SDK 双轨 | 服务端部署与自建集成方案的开发者 | daemon 架构 + Web Shell 前端；SDK TypeScript 配套发布；本地模型（llama-server）支持；REST/SSE API 暴露集成能力 | llama-server 兼容性问题反复出现；后台 shell 输出回收缺陷（P1）；本地模型在 Windows 环境脆弱 |
| **DeepSeek TUI** | 聚焦成本透明与 TUI 交互打磨的轻量 CLI | 成本敏感型个人开发者 | 基于 CodeWhale fork；模型目录驱动 (Ollama live-catalog)；OpenRouter 原生支持；多线程 Enhancer 提案（fleet 防停滞、goal gates、全局诊断），用户提案深度高 | 无当日新版本；成本黑盒（连已编目模型都显示 unknown）；模型列表分页缺失导致丢数据 |

**补充说明：** 生态中还存在纯 TUI 终端交互方向（DeepSeek TUI 基于 CodeWhale fork）与本地模型优先方向（Qwen Code 的 llama-server 支持、OpenCode 的本地端点自动发现诉求），两者代表去云化/自托管的替代路线。


## 5. 社区热度与成熟度

**头部稳定迭代型（企业级用户基础扎实，社区规模大，反馈集中且质量高）：**
- **Claude Code**：Release 节奏稳定（2 版本/日），Issue 点赞密度高但单条热度低于 Codex/Copilot。多 agent 编排（fleet/agents）与自托管生态为差异化讨论焦点。Issue 管理策略趋缓（stale 14→90 天），显示对复杂 bug 的追踪意愿加强。
- **GitHub Copilot CLI**：Vim 模式落地（76👍 长期第一的功能请求）标志着社区声音对路线图的实质影响，但桌面版会话并发问题（19👍）显示 1.1.15 版本引入的回归正在侵蚀用户信任。

**快速迭代型（版本更新最密集，社区诉求分散但方向感强）：**
- **OpenAI Codex**：过去 24 小时发布 4 个 alpha 版本、合并 14 个 PR，迭代速度全场第一。PR 集中在基建攻坚（凭据代理 6 个 PR 成体系），但大量 Windows 桌面端 issue 积压未决（最长已 3 个月+），显示广度扩张快于深度打磨。
- **Gemini CLI**：单日发布 3 个版本（正式版+preview+nightly），p1 bug 识别与修复节奏紧。社区提案质量高、代码定位精确（如 role.rs:64-98），反映用户群体技术深度强。
- **OpenCode**：V2 加固期特征明显（单日多个 V2 专属缺陷 + holny 一人提交 6 条修复 PR）。231👍 的 #6231 说明本地模型用户的长期核心诉求未获回应。
- **Qwen Code**：daemon/SDK 双轨推进积极（单日 2 版本 + SDK 3 版本），P1 bug（#11119 会话回收）在当日提出、当日即有对应修复 PR（#11467），修复响应速度值得肯定。

**高活跃度新型工具（社区增长与交付质量需要同步验证）：**
- **Pi**：单日 10 个 PR 更新且 8 个已合并，其中多个修复直指社区痛点。OpenCode 强制添加 `x-opencode-session` 头引发的连锁故障（3 个独立 issue 当日集中解决）从暴露到修复周期短，说明上游 API 变动触发的社区协作修复机制已在生效。但社区反馈多个基础交互缺陷（Esc 中断不可靠、滚动慢）表明核心体验仍在打磨。

**低活跃/早期型（功能推进最慢但社区声音集中）：**
- **Kimi Code CLI**：单日仅 2 个新 issue、0 Release、2 个 PR（1 个等待审查中）。认证失效与 RTL 支持缺口为显著短板，需关注是否影响其在阿拉伯语市场与 macOS 用户中的可用性。
- **DeepSeek TUI**：无新版本，3 个 PR 均为外部贡献者提交且均未合并。社区的声音高度集中在成本可观测性（cost unknown、全局 token 诊断），且发起提案的用户具备深度代码定位能力（role.rs:64-98），但维护者的响应节奏需跟上才能将开源参与热情转化为合并落地。


## 6. 值得关注的趋势信号

1. **安全机制从"误报容忍"走向"用户信任危机"是全局性信号**：Claude Code（ClAudit 单日 12+ 条 session-halted）、Codex（#34306 获 14👍）与 Pi（强制脱敏反伤开发 #5982）同步出现安全过滤器大规模误报，且均可中断已授权的工作。AI CLI 安全机制正在经历从"规则够严"到"误报代价不可接受"的范式转换，能够提供可配置粒度 + 清晰解释 + 快速误报恢复路径的产品将获得差异化的信任优势。

2. **Agent 状态可信度成为代理自动化的信任瓶颈，最活跃的三款工具同病相连**：Gemini CLI #22323 未执行即报成功、#21409 无限挂起；Copilot CLI #4664 恢复即崩溃；OpenCode #47487 会话卡死无恢复路径——这已不是单一工具的问题，而是**整个代理架构在状态机设计与会话熔断机制上的系统性缺陷**。开发者若要依赖 AI CLI 跑无人值守任务（batch/CI + agent），需优先评估工具的状态上报透明度与故障自恢复能力；能够提供会话救援/降级/清理机制的产品将成为下一个竞争分水岭。

3. **自托管与企业代理部署成为不可忽视的一级市场，且生态位正在分化**：Claude Code 为 `CLAUDE_CODE_USE_GATEWAY` 回归问题 24 小时即发版修复，佐证企业 LLM-gateway 部署用户群体的重要性；OpenCode #90141 的"自托管 marketplace"诉求从内容分发走向独立产品形态；Pi 针对 OpenAI/OpenCode 上游 API 变更的快速适配，说明 provider 适配层的稳定性已成为企业选型的核心考量。

4. **Windows 平台是当前 AI CLI 最大的系统性短板，且非单一工具问题**：Claude Code（Windows 更新致 Plan9 挂载失效）、Codex（约半数热门 issue 为 Windows 专属）、Copilot CLI（1.1.15 会话并发回归获 19👍）、Qwen Code（系统更新后本地模型 400）均在其上折戟。Windows 企业用户在评估引入 AI CLI 工具时，需将平台稳定性纳入选型决策的最重要变量之一，并做好"跟随系统更新节奏、预留回滚方案"的预案——这也解释了为何 OpenAI 在 Windows 上的多条 issue（如 #42215、#25271）已持续开放 3 个月以上仍未合入修复。

5. **AI CLI 正在扩容集成面：从"终端工具"走向"开发工作流中枢"**：Python SDK 能力扩展（Codex）、SDK 与 CLI 双轨发布（Qwen）、浏览器子代理 + Computer Use（Codex + Gemini）、REST/SSE API 暴露（Qwen、Gemini a2a-server）——这些信号指向同一个行业方向：AI CLI 正在演化为可嵌入自有工具链的**开发智能体运行时**。对 ISV / 内部平台团队而言，评估其 SDK/API 的成熟度、versioning 策略与文档完整性，将比评估终端交互体验更具长期重要性。

6. **模型目录数据正确性与成本可观测性成为"元需求"**：OpenCode #6231 以 231👍 持续霸榜（本地 OpenAI 兼容端点模型自动发现），DeepSeek TUI #5976 cost unknown 与 #6011 的全局 token 诊断诉求、Claude Code 遥测补充 user.email 与 user.groups 字段、Pi #6881 以实际计费替代目录价估算——开发者对"这个工具调了哪个模型、花了多少钱、用的是不是最新模型"的可观测性要求，已从"加分项"变为"基本盘"。在 Prompt 链路上同时打通多个模型后端（自带模型 vs BYO 自带密钥 vs 代理网关统一提供）的工具更易在此获得竞争优势。

---

*本报告基于 2026-09-09 各工具公开 GitHub 仓库的 Issues/PRs/Releases 元数据与摘要文本生成，不代表官方立场，仅供参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-09）

---

## 1. 热门 Skills 排行

### 🥇 skill-creator 评测修复（PR #1298）— 关注度最高
- **功能**：修复 `run_eval.py` 在所有场景下报告 `recall=0%` 的严重缺陷——未将评测产物安装为真实 skill，同时修复 Windows 流读取、触发检测及并行 worker 问题
- **讨论热点**：关联 Issue #556（12 条评论、7 个 👍），超 10 人独立复现；该问题同时影响 `run_loop.py` 和 `improve_description.py`
- **状态**：Open（2026-06-10 创建）
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 document-typography 文档排版质检（PR #514）
- **功能**：针对 AI 生成文档的排版质量把控——修复孤行（1-6 词溢出到下一行）、孤段（节标题滞留页底）及编号错位
- **讨论热点**：直击 AI 生成文档的通用痛点，对文档类 skill 用户群吸引力大
- **状态**：Open（2026-03-04 创建）
- 🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### 🥉 ODT 文档处理（PR #486）
- **功能**：创建、填充、读取及转换 OpenDocument 格式文件（.odt/.ods），支持 ODT→HTML 解析；触发词覆盖 "ODT"、"ODS"、"ODF"、"LibreOffice document" 等
- **讨论热点**：填补 docx/pdf 之外的文档格式空白，LibreOffice 用户群刚需
- **状态**：Open（2026-03-01 创建）
- 🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

### 4️⃣ frontend-design 前端设计技能优化（PR #210）
- **功能**：全面修订 frontend-design skill，提升指令清晰度、可执行性与内部一致性——确保每条指令 Claude 可在单次对话中实际执行
- **讨论热点**：社区对 skill "可操作性"（非文档化、而是可执行）的高度关注
- **状态**：Open（2026-01-05 创建）
- 🔗 [PR #210](https://github.com/anthropics/skills/pull/210)

### 5️⃣ skill 质量/安全双分析器（PR #83）
- **功能**：新增两个元技能——`skill-quality-analyzer`（从结构、内容等五维度评估 skill 质量）和 `skill-security-analyzer`（安全审查）
- **讨论热点**：呼应 Issue #492 的社区安全担忧，是首次系统化引入 skill 自身的安全审查工具
- **状态**：Open（2025-11-06 创建）
- 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

### 6️⃣ Hivemind 零成本多智能体编排（PR #1628）
- **功能**：让 Claude Code 将机械化工作委托给运行免费模型的无头 opencode worker，Claude Code 保留规划者、审查者与合并者角色
- **讨论热点**：针对昂贵模型调用成本的降本方案，代表了社区对成本优化的前沿探索
- **状态**：Open（2026-08-21 创建）
- 🔗 [PR #1628](https://github.com/anthropics/skills/pull/1628)

### 7️⃣ testing-patterns 测试模式库（PR #723）
- **功能**：覆盖完整测试栈——Testing Trophy 模型、单元测试（AAA 模式、命名规范）、何时测 vs 何时不测等
- **讨论热点**：系统化测试方法论稀缺，社区对工程化测试指导的需求明确
- **状态**：Open（2026-03-22 创建）
- 🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

---

## 2. 社区需求趋势（来自 Issues）

| 方向 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| 🔒 **安全与信任边界** | #492（43 评论，最高） | 社区 skill 冒充官方在 `anthropic/` 命名空间分发，用户可能授予社区 skill 提权——信任边界漏洞 |
| 🏢 **组织级共享** | #228（16 评论，8 👍） | 企业内 skill 点对点分享（下载→聊天工具→手动上传）效率过低，要求 org 级共享库/目录 |
| 🐛 **skill-creator 可靠性** | #556（12 评论，7 👍） | eval 工具在所有查询上 0% 触发率，开发者无法验证优化效果 |
| 🧠 **上下文/记忆管理** | #1329, #1487 | 长运行 agent 的紧凑状态符号表达；`claude-api` skill 单次调用注入 ~156k tokens 耗尽上下文 |
| 🌐 **集成与互操作** | #29（Bedrock）、#16（Skills 暴露为 MCP） | 跨平台/跨工具运行，以及将 skill 能力协议化为 MCP API |
| 📁 **去重与配置** | #189（9 👍） | `document-skills` 与 `example-skills` 安装内容重复，浪费上下文窗口 |
| 📋 **治理与规范** | #202 | skill-creator 应从"开发者文档"转向"操作指南"，以提升 token 效率 |

---

## 3. 高潜力待合并 Skills（评论活跃、尚未合并）

| PR | Skill | 亮点 | 关注度 | 链接 |
|----|-------|------|--------|------|
| **#1615** | scnet-hpc（HPC 集群运维） | 基于 profile 的 SSH + Slurm 工作流 | 近两周新建 | 🔗 [PR #1615](https://github.com/anthropics/skills/pull/1615) |
| **#540/538/539/541/1050/1099** | 系列修复（docx/pdf/skill-creator） | Windows 兼容性 + 大小写敏感 + YAML 解析 + 文档损坏根因修复 | 多 PR 协同，针对性强 | 🔗 [PR #541](https://github.com/anthropics/skills/pull/541) |
| **#1627** | buffer-api（社交媒体 GraphQL 调度） | 跨 agent 通用（Claude/Codex/n8n），8 月新建 | 🔗 [PR #1627](https://github.com/anthropics/skills/pull/1627) |
| **#1367** | self-audit（交付前质量闸门） | 机械文件验证 + 四维推理审计，跨项目/跨模型通用 | 🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367) |
| **#1724** | mcp-builder 模型升级 | 默认模型迁移至 `claude-sonnet-5`，保持评测基准最新 | 9 月新建 | 🔗 [PR #1724](https://github.com/anthropics/skills/pull/1724) |
| **#1595** | UIZZE 合作 skill | 免费反 UI-slop 方向指导 + 可选认证 MCP | 🔗 [PR #1595](https://github.com/anthropics/skills/pull/1595) |
| **#1734** | docx 孤儿评论检测 | 9/6 最新提交，刚进入讨论期 | 🔗 [PR #1734](https://github.com/anthropics/skills/pull/1734) |

---

## 4. 生态洞察

**一句话总结**：社区最集中的诉求是"技能基础设施的质量与安全"——集中于两线：治理线上，社区要求官方解决命名空间信任问题（#492）与组织间分享机制（#228）；可靠性线上，则集中攻克 skill-creator 评测管道在 Windows 和触发检测上的系统性缺陷（#556 及 5+ 关联修复 PR），同时向"质量审查类元技能"（#83）探索，反映出对 skill 自身工程质量的高容忍度正在消失。

---

# Claude Code 社区动态日报 — 2026-09-09

## 今日速览

昨日发布 v2.1.266 和 v2.1.265 两个版本，主要修复 LLM-gateway 代理场景下的回归问题，并为 Claude Desktop/Cowork 补充用户身份遥测字段。社区侧，Windows 平台出现高热度问题——2026 年 9 月累积更新导致 Cowork 的 Plan9 共享挂载与 `device_bash` 在 ARM64/x64 上双双失效，作者已在五台机器上通过回滚完成 A/B 验证；同时 `/model` 与 `/effort` 命令误写全局配置、破坏 agents/fleet 视图的问题持续获得大量 👍。

## 版本发布

**v2.1.266** — [Release 链接](https://github.com/anthropics/claude-code/releases)
- 修复 v2.1.265 引入的回归：此前被忽略（除非同时设置 `ANTHROPIC_BASE_URL` 和 `ANTHROPIC_AUTH_TOKEN`）的未文档化环境变量 `CLAUDE_CODE_USE_GATEWAY`，在 2.1.265 中开始独立强制 Cloud-gateway 登录，现已恢复预期行为。

**v2.1.265** — [Release 链接](https://github.com/anthropics/claude-code/releases)
- 为 Claude Desktop 与 Cowork 经 Claude apps gateway 发送的遥测补充 `user.email` 与 `user.groups` 字段，与终端会话保持一致。
- `--plugin-dir` 现支持指向包含多个插件的文件夹：每个含 manifest 的子文件夹均会被加载，且支持运行时动态增删子插件。

## 社区热点 Issues

1. **[#92958] Cowork Windows: 9 月累积更新破坏 Plan9 share attach，`device_bash` 在 ARM64/x64 均失效**（评论 19 · 👍 1）— [链接](https://github.com/anthropics/claude-code/issues/92958)
   作者在五台机器上通过回滚 A/B 测试确认 KB5124012（ARM64 / 28000.2954）与 KB5124008（x64 / 26200.9445）为罪魁祸首。此问题直接导致 Cowork 设备功能在 Windows 平台不可用，影响面广且带可复现路径，是目前评论区最活跃的 bug 报告。

2. **[#66402] `/model` 与 `/effort` 篡改全局 settings.json，破坏 agents/fleet 视图**（评论 11 · 👍 14）— [链接](https://github.com/anthropics/claude-code/issues/66402)
   这两个命令会立即写入 `~/.claude/settings.json` 且作用域为全局，导致 fleet 视图下无法为不同 agent 配置独立的 model 与 effort。👍 数全场最高，反映多 agent 编排用户对"全局污染"的高度不满。

3. **[#91784] Auto 模式下 grep 工具仍弹授权请求**（评论 5 · 👍 13）— [链接](https://github.com/anthropics/claude-code/issues/91784)
   用户报告 Auto 模式本应自动放行，但 grep 工具（如对 `GxAccessClient.ts` 的搜索）仍反复打断会话请求授权，"昨天还没这问题"——疑似近期行为回归，打断频率高、严重影响自动化流程。

4. **[#92974] macOS 后台模式权限弹窗只有 Deny 按钮，无 Accept 选项**（评论 2）— [链接](https://github.com/anthropics/claude-code/issues/92974)
   新提交的 UI bug：后台模式权限弹窗无法授权，功能形同不可用。属当日新建 issue，值得关注后续修复节奏。

5. **[#90141] 自托管 marketplace：桌面应用拒绝非白名单 git host，认证 marketplace 依赖托管 settings**（评论 2）— [链接](https://github.com/anthropics/claude-code/issues/90141)
   自托管开发者工具厂商希望在每位客户的产品实例中直接托管匹配的 Claude skills，保证版本随实例同步并支持隔离。当前桌面端不允许非白名单 git 平台，认证型 marketplace 又强制走 managed settings，构成双重阻碍。

6. **[#76841] Routines: 移动端通知消失后无法列出/重开 routine 会话**（评论 3 · 👍 1）— [链接](https://github.com/anthropics/claude-code/issues/76841)
   Routines 触发后的会话入口仅存在于推送通知中，一旦通知划掉即彻底丢失入口，移动端缺少会话列表/历史恢复能力。

7. **[#91509] VS Code 扩展：schema 已声明 `showMessageTimestamps`、`timeFormat`、`timeZone`，但代码从未读取**（评论 2）— [链接](https://github.com/anthropics/claude-code/issues/91509)
   带可复现路径的文档/实现脱节问题，三项配置在 VS Code 扩展中形同虚设，用户按文档配置无任何效果。

8. **[#81512] Cowork device session 每 24–36h 强制登出（elevated_auth / session_stale_relogin），无人值守自动化被中断**（评论 4，今日关闭）— [链接](https://github.com/anthropics/claude-code/issues/81512)
   设备会话周期性过期且无自动续期机制，直接打断无人值守任务。今日标记关闭，但社区对其修复方案关注度不低。

9. **[#85371 等 12 条] ClAudit 安全过滤器大批误报，合法会话被 session-halted** — [代表性链接](https://github.com/anthropics/claude-code/issues/85371)（另见 #85368、#85366、#85356、#85358、#85374、#85359、#85361、#75823 等）
   同一作者（sworrl）批量上报 ClAudit 误报：被拦截内容均为合法安全工作（防御性安全审查、NFC 文件检查、钱包相关对话等），Flagging 模型涉及 Opus 4.8 与 Fable 5，严重级别均为 session-halted（阻断已授权工作）。今日这批 issue 集中关闭，若为集中修复则值得验证。

10. **[#77377] 模型会话中途回退至阿根廷 voseo 西班牙语，无视显式纠正**（评论 3 · 👍 1）— [链接](https://github.com/anthropics/claude-code/issues/77377)
    即便已在 CLAUDE.md/记忆中设定"中性西班牙语、避免 Rioplatense voseo"，模型仍会在会话中途回退使用"vos/querés/tenés"等变体，长会话中的指令遵循稳定性存疑。

## 重要 PR 进展

过去 24 小时仅有一条 PR 动态更新：

**[#63686] Bump stale and autoclose timeouts from 14 to 90 days**（已关闭）— [链接](https://github.com/anthropics/claude-code/pull/63686)
将 issue 生命周期脚本 `scripts/issue-lifecycle.ts` 中的 stale 标记与自动关闭超时从 14 天延长至 90 天。此举将显著减缓 issue 被自动标记 stale/关闭的速度，对上述大批量误报类 issue（如 #85371 系列）的持续追踪有利。由 caseyWebb 提交，已于 9 月 8 日关闭。

## 功能需求趋势

- **插件体系扩展（自托管/多插件目录）**：v2.1.265 支持 `--plugin-dir` 指向多插件文件夹，叠加 #90141 对自托管 marketplace 的诉求，社区正推动插件生态向"企业内网分发、实例级版本匹配"演进。
- **多 Agent 编排的细粒度配置**：#66402 高赞说明用户期望 fleet 视图中每个 agent 可独立配置 model/effort，而非被全局命令污染。
- **Windows 平台稳定性**：Windows 更新引发的 Cowork 故障（#92958）与历史 Windows issue 数量表明，该平台在设备会话与企业代理环境下的可靠性仍是明显短板。
- **移动端/后台任务的会话可恢复性**：#76841 与 #92974 分别指向移动端会话入口缺失与桌面端后台授权 UI 缺陷。
- **安全过滤器的可配置性与准确性**：ClAudit/AUP 误报成批出现且动辄 session-halted，社区期待更透明的规则解释与更宽松的误报恢复路径。

## 开发者关注点

- **更新引入回归的频率在上升**：v2.1.265 引入 gateway 回归后 24 小时内即被 v2.1.266 修复，但同周期内 #91784（Auto 模式授权行为突变）、#92958（Windows 更新破坏 Cowork 核心功能）等"昨天还好好的"类问题密集出现，开发者对变更的回归测试覆盖存在疑虑。
- **授权与安全机制存在摩擦**：Auto 模式下仍弹授权、后台权限弹窗缺 Accept、ClAudit 大规模误报并直接中断会话——多项机制在"安全兜底"与"不打断合法工作流"之间尚未找到平衡，已成为反馈最集中的痛点。
- **配置作用域语义混乱**：`/model`、`/effort` 等命令实际写入全局 `settings.json` 而非会话/agent 级作用域，与用户预期（per-agent 配置、fleet 独立编排）存在实质落差，且缺乏显式文档说明。
- **Issue 管理策略趋缓或为利好**：stale/autoclose 从 14 天放宽至 90 天，对需要长时间跨版本验证的复杂 bug（如 Windows 更新引发的问题、安全误报类）提供了更充裕的追踪窗口。
- **代理/网关环境仍是高频场景**：`CLAUDE_CODE_USE_GATEWAY` 回归修复说明企业级 LLM-gateway 部署是重要用户群，此类环境的兼容性测试不应因"未文档化"而被忽视。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-09

## 今日速览

Codex 今日密集发布了 4 个 Rust 预发布版本（0.154.0-alpha.7 → alpha.11），推进稳定性迭代。社区活跃度集中在 Windows 桌面端：桌面宠物点击穿透、Computer Use 无法识别 Chrome URL、本地项目同步失败等问题持续发酵。PR 侧则围绕凭据代理（credential brokering）、Python SDK 发布流程与 macOS 语音运行时打包展开修复。

## 版本发布

过去 24 小时内发布了 4 个预发布版本，均为 0.154.0 系列的增量 alpha 迭代，无明显功能性更新说明：

- [rust-v0.154.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.11)
- [rust-v0.154.0-alpha.10.2](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.10.2)
- [rust-v0.154.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.8)
- [rust-v0.154.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7)

## 社区热点 Issues

以下为最值得关注的 10 个 Issue（按评论热度与影响力综合排序）：

**1. Windows 桌面宠物点击穿透**（[#41513](https://github.com/openai/codex/issues/41513) & [#41535](https://github.com/openai/codex/issues/41535)）

> 内置宠物（Codey）和自定义宠物在 Windows 上变为"点击穿透"状态，无法拖拽。两个独立 Issue 分别获得 14 和 8 个 👍，共 42 条评论，是当前社区最热的 Bug 话题。

**2. Computer Use 无法识别 Chrome URL（Windows）**（[#25271](https://github.com/openai/codex/issues/25271)）

> 作者 livlojp 反馈即使在 `chrome://newtab/` 页面，Computer Use 也无法获取 Chrome URL。该问题已持续 3 个月以上仍处于开放状态，累计 34 条评论，是历史最久的活跃 Windows Bug。

**3. 本地项目"无法使用"错误**（[#42215](https://github.com/openai/codex/issues/42215)）

> Windows 11 用户反馈在包含 23 个源文件的 ChatGPT 项目中无法启动本地聊天，"project context sync repeatedly fails at filesystem stage"，26 条评论，0 赞——疑似小范围但影响严重的回归。

**4. 分页 Rollout 产生重复序号导致线程冻结**（[#41566](https://github.com/openai/codex/issues/41566)）

> 用户 SuperReaper1999 报告分页 rollout 在未完成回合后可能产生重复 ordinal，导致线程历史投影永久冻结。涉及核心技术问题，28 条评论。

**5. 安全策略误伤：正常的网络安全请求被拦截**（[#34306](https://github.com/openai/codex/issues/34306)）

> CLI（v0.144.6）用户反馈安全审查系统过度拦截内容，提示 "We take extra caution with cybersecurity requests"，实际请求为正常安全相关工作。14 个 👍、20 条评论，反映安全策略的误判问题受到开发社区广泛关注。

**6. WSL 工作区中 Node REPL 失败**（[#29639](https://github.com/openai/codex/issues/29639)）

> Windows 桌面 App 在 WSL 文件系统上工作时，自动生成的 `node_repl` MCP 服务器因 sandboxCwd 映射失败导致 Browser Use/Node REPL 不可用。23 条评论、7 个 👍。

**7. Alt+P 快捷键导致应用崩溃**（[#42683](https://github.com/openai/codex/issues/42683)）

> 最新版（26.901.22334）在 Windows 10 上使用 Alt+P 快捷键会直接崩溃退出。14 条评论，4 个 👍，属于桌面端基础功能缺陷。

**8. GPT-5.5 提示 404 Model not found**（[#29546](https://github.com/openai/codex/issues/29546)）

> 用户发现 gpt-5.5 在 Codex App/CLI 中返回 "Model not found"，而 gpt-5.4 正常工作。12 个 👍、9 条评论，指向模型后端同步问题。新的重复报告 [#43755](https://github.com/openai/codex/issues/43755) 于昨日再次提交，说明该问题在部分账户上尚未解决。

**9. 自动审查硬编码模型名称**（[#24879](https://github.com/openai/codex/issues/24879)）

> 自动审查功能使用硬编码的 `codex-auto-review` 模型名，与自定义 Provider（如 DeepSeek）不兼容。8 个 👍、9 条评论，是自定义模型路线的重要缺陷。

**10. Intel Mac 缺少 Computer Use 服务**（[#42514](https://github.com/openai/codex/issues/42514)）

> Intel Mac（x86_64）用户反馈最新版（26.901.20858）中 Computer Use 功能缺失。8 条评论、5 个 👍，平台覆盖缺口明显。

## 重要 PR 进展

过去 24 小时内 PR 全部由 `copyberry[bot]` 提交并已关闭（合并），集中在凭据代理、发布流程和打包修复三大方向：

**凭据代理（Credential Brokering）相关（6 个 PR）**

- [PR #44068](https://github.com/openai/codex/pull/44068) — 跨环境变量过滤保留凭据代理目标。修复环境变量过滤导致凭据注册被撤销的问题。
- [PR #44066](https://github.com/openai/codex/pull/44066) — 凭据代理扩展支持内嵌别名。可在标准凭据变量缺失时发现子环境中的凭据。
- [PR #44072](https://github.com/openai/codex/pull/44072) — 支持跨 Shell 快照的已配置凭据 Provider。即使环境策略对子进程隐藏了凭据信息，仍保留受信任目标提示。
- [PR #44077](https://github.com/openai/codex/pull/44077) — 重构凭据代理的隧道协议检测，将 TLS 前缀检测迁移至 `brokered_tunnel`。
- [PR #44089](https://github.com/openai/codex/pull/44089) — 支持明文 HTTP 隧道中的凭据代理，此前仅能拦截 TLS 流量。

**发布流程与构建（4 个 PR）**

- [PR #44067](https://github.com/openai/codex/pull/44067) — 在稳定版 CLI 发布后自动构建并发布 Python SDK 与 Runtime。
- [PR #44061](https://github.com/openai/codex/pull/44061) — 调整发布顺序：先构建 SDK 再发布 Runtime，避免 SDK 构建失败导致 Runtime 单独发布。
- [PR #44086](https://github.com/openai/codex/pull/44086) — Python SDK 新增"不可信外部消息"支持，允许来自其他 agent/工具的内容以工具级权限注入而不视为用户输入。
- [PR #44084](https://github.com/openai/codex/pull/44084) — Python SDK 暴露历史选择与按轮次选项，支持单轮覆盖服务层级并含运行时兼容性检查。

**macOS 语音运行时与其他修复（3 个 PR）**

- [PR #44062](https://github.com/openai/codex/pull/44062) — 修复语音运行时发布构建与打包，改用 Bazel `-c opt` 优化配置。
- [PR #44080](https://github.com/openai/codex/pull/44080) — 打包前将 macOS 语音运行时设为可写，解决 GNU tar 解压和签名失败。
- [PR #44070](https://github.com/openai/codex/pull/44070) — 拒绝 Data URL 中的空音频负载。
- [PR #44101](https://github.com/openai/codex/pull/44101) — 处理 macOS 发布打包中空语音参数的边界情况。
- [PR #44060](https://github.com/openai/codex/pull/44060) — Guardian 动作审查上限从 8,000 提升至 200,000 字节，但明确保留统一 exec stdin 的审核上限仍为 8,000 字节——在智能体代码量与安全性之间取平衡。

## 功能需求趋势

从今日活跃 Issues 中可以看出以下社区关注方向：

- **Windows 平台体验修复**：约半数热门 Issue 为 Windows 专属 Bug（App 崩溃、点击穿透、项目同步失败、WSL 映射缺失），反映 Codex 在 Windows 端的功能覆盖度与稳定性仍是最大短板。
- **桌面宠物（Pets）交互**：多个独立 Issue（#41513、#41535）报告宠物无法拖拽/点击穿透，"pet" 已成为一个显著增长的功能分类标签。
- **模型后端可用性**：GPT-5.5 "404 Model not found"（#29546、#43755）在多平台（App/CLI）与多账户类型（Plus/Pro）中出现，社区对模型切换的透明度和可靠性预期趋高。
- **自定义模型与 Provider 兼容性**：硬编码模型名、Azure Responses API 兼容等 Issue（#24879、#38573）展现开发者对 BYO（Bring Your Own）模型场景的强烈需求。
- **远程控制与 Business 账户支持**：Codex Remote 在 Business 账户上报错（#42575），子代理任务在远程搜索中不可见（#32614）。

## 开发者关注点

综合反馈内容，开发者最集中的痛点是：

1. **安全策略误判**（#34306）：获 14 👍 的高热度说明这不是个例。用户形容被拦截的请求属正常安全研究/开发工作，"同样提示出现多次且无法绕过"。
2. **Windows 项目操作可靠性**：#42215（项目上下文同步失败）、#41552（项目创建/删除失败）说明本地文件系统操作在 Windows 上存在系统性缺陷。
3. **模型选择与回退逻辑不透明**：404 错误未提供明确的降级路径或解释（#29546、#43755），开发者需要自行排查是模型下线、账户权限还是版本问题。
4. **安全审查与自定义 Provider 的冲突**：多个 Issue 指向 Codex 内置机制（审查、沙箱）为 OpenAI 自有服务设计的假设，在自定义 Provider、WSL、Azure 等场景频繁失效（#24879、#38573、#40060）。
5. **键盘快捷键与桌面基础交互回归**：Alt+P 崩溃（#42683）、Composer 在回复后消失（#42963）等基础桌面功能缺陷连续出现，用户对桌面端 QA 质量存疑。

> 注：本日报所有数据均来自 github.com/openai/codex 公开仓库在过去 24 小时的更新记录，分析基于 Issues/PRs 的元数据与摘要文本。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-09

## 今日速览

昨日发布了三个版本（含 nightly、preview 和正式版），主要修复 NTFS 路径处理、沙箱隔离及 Web 抓取路由等稳定性问题。社区讨论热度集中在子代理（Subagent）中断恢复、通用代理挂起、shell 命令卡死等可靠性议题，多个高优 bug 等待回归测试。

## 版本发布

**v0.59.0（正式版）** 及 **v0.60.0-preview.0**、**v0.61.0-nightly.20260909** 于昨日发布，关键变更包括：

- **fix(core)**: 缓解 NTFS 8.3 短文件名（SFN）路径问题（PR [#29116](https://github.com/google-gemini/gemini-cli/pull/29116)）
- **fix(cli)**: 沙箱容器内隔离 settings 目录（PR [#29216](https://github.com/google-gemini/gemini-cli/pull/29216)）
- **fix(core)**: 改进 Web 抓取工具的目标校验与连接路由（PR [#29120](https://github.com/google-gemini/gemini-cli/pull/29120)）
- **fix(core)**: MCP OAuth 流程强制实施 RFC 9207 issuer 识别

## 社区热点 Issues

### 1. [#22323 Subagent 达到 MAX_TURNS 后误报 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323)
`codebase_investigator` 子代理在尚未执行分析即达最大轮次时仍上报 `status: "success"`，掩盖了实际中断。13 条评论为今日最高，标记为 p1 bug，社区高度关注代理状态可信度问题。

### 2. [#21409 通用代理（generalist agent）无限挂起](https://github.com/google-gemini/gemini-cli/issues/21409)
即使创建文件夹等简单操作也会导致代理永久卡住，用户最长等待一小时无响应。获得 8 👍，为今日最高赞 Issue，p1 严重性，已列入需重新测试队列。

### 3. [#25166 shell 命令执行完毕后卡在 "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)
用户报告简单 CLI 命令完成后终端仍显示活动并等待输入。3 👍、4 条评论，属 p1 核心可靠性问题。

### 4. [#19873 利用模型 bash 亲和力：零依赖 OS 沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873)
提议利用 Gemini 3 模型的原生 bash 操作能力，通过系统沙箱与意图路由减少对通用代理的依赖。9 条评论显示该方向关注度高。

### 5. [#26525 Auto Memory 需确定性脱敏并减少日志](https://github.com/google-gemini/gemini-cli/issues/26525)
Auto Memory 在将本地转录发送给后台提取模型前缺乏确定性密钥脱敏，存在敏感信息泄露风险。5 条评论聚焦安全影响。

### 6. [#26522 Auto Memory 对低信号会话无限重试](https://github.com/google-gemini/gemini-cli/issues/26522)
提取代理决定不读取低信号会话时，该会话永远不会被标记为已处理，导致无限重试循环。影响资源效率。

### 7. [#21968 Gemini 不会主动使用 skills 和 sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)
用户观察 Gemini 几乎从不自主调用自定义 skills 与子代理，仅在显式指示时才使用。反映出代理自主决策能力的核心短板。

### 8. [#21983 browser 子代理在 Wayland 环境失败](https://github.com/google-gemini/gemini-cli/issues/21983)
浏览器代理在 Wayland 会话下无法运行，p1 bug，影响 Linux 桌面用户。

### 9. [#20079 ~/.gemini/agents/ 中符号链接不被识别为 agent](https://github.com/google-gemini/gemini-cli/issues/20079)
符号链接形式的 agent 定义文件无法被加载，限制配置灵活性。4 条评论讨论复现方式。

### 10. [#22672 代理应阻止/劝阻破坏性行为](https://github.com/google-gemini/gemini-cli/issues/22672)
复杂 git 操作或数据库维护时模型可能使用 `git reset`、`--force` 等危险命令，社区呼吁增加安全护栏。获得 1 👍。

## 重要 PR 进展

### 1. [#29265 fix(agent): 防止中断轮次导致会话上下文中毒（OPEN）](https://github.com/google-gemini/gemini-cli/pull/29265)
解决 SIGINT、超时或工具执行中断后污染聊天会话历史的问题。直接关联今日高热度 Issue #22323，是社区期待的修复方向。

### 2. [#29248 fix(cli): 确认操作后避免重复历史和遥测记录（OPEN）](https://github.com/google-gemini/gemini-cli/pull/29248)
修复 `/resume save <tag>` 等操作确认时因消息竞态导致命令历史与遥测重复的问题。

### 3. [#29163 fix(cli): 防止 git 仓库中 macOS Seatbelt 下认证崩溃（OPEN）](https://github.com/google-gemini/gemini-cli/pull/29163)
修复受限权限环境下 `useGitBranchName` 钩子导致启动崩溃的问题。跨 8/25 至 9/9 仍未合并，已收到提醒。

### 4. [#29156 fix(core): 停止在 shell 执行中清空用户 git 配置（OPEN）](https://github.com/google-gemini/gemini-cli/pull/29156)
撤销 #28792 引入的问题——每条 shell 命令将 `GIT_CONFIG_GLOBAL/SYSTEM` 指向 `/dev/null`，隐藏了用户的真实 git 配置。修复将保留用户环境。

### 5. [#29067 fix(a2a-server): 移除误导性安全方案和硬编码凭据（CLOSED）](https://github.com/google-gemini/gemini-cli/pull/29067)
修复 #29001。移除 `coderAgentCard` 中的误导性 `securitySchemes` 与 `security` 要求，使本地开发端点如实反映"无认证"设计。

### 6. [#29089 fix(core): BaseLlmClient 中转发 abortSignal 至 retryWithBackoff（CLOSED）](https://github.com/google-gemini/gemini-cli/pull/29089)
修复 `SessionSummaryService`、聊天压缩、分类器等客户端未正确传递中止信号的问题，避免取消操作后重试仍在后台运行。

### 7. [#29088 fix(vscode-ide-companion): MCP 流打开时正确解析 stop()（CLOSED）](https://github.com/google-gemini/gemini-cli/pull/29088)
`IdeServer.stop()` 因 MCP 长连接不释放而永不返回，该 PR 确保关闭期间 MCP 流可被正确终止。

### 8. [#29087 fix(cli): 防止并发扩展安装竞态（CLOSED）](https://github.com/google-gemini/gemini-cli/pull/29087)
两个 Gemini CLI 进程同时安装/更新同一扩展时可能交错写入文件与元数据。该修复增加协调机制。

### 9. [#29063 fix(core): 非交互模式下 Plan Mode 不再等待用户反馈（CLOSED）](https://github.com/google-gemini/gemini-cli/pull/29063)
修复 `gemini -p "..." -y` 等非交互会话中 Plan Mode 挂起的问题——工作流指示代理等待一个永远不会到达的用户回合。

### 10. [#29262 feat(ui): 备用缓冲模式动态切换开关（CLOSED）](https://github.com/google-gemini/gemini-cli/pull/29262)
修复 yoga-wasm 中的越界内存访问崩溃，消除退出备用缓冲时的重复页脚残留问题。注意：此为已关闭 PR，合并状态需确认。

## 功能需求趋势

- **代理可靠性与恢复机制**：多议题涉及代理状态误报（#22323）、挂起（#21409）、中断恢复能力不足等问题，社区对代理自我恢复与正确状态上报有强烈需求。
- **内存系统（Auto Memory）安全与效率**：SandyTao520 提出 4 个关联议题（#26525、#26522、#26523、#26516），覆盖脱敏、重试策略、无效补丁隔离等方面，反映记忆系统的安全与质量控制是当前关注焦点。
- **AST 感知工具**：#22745 追踪 AST 感知文件读取、搜索与代码库映射的调研，若落地可显著减少多轮调用，提升代理对代码的精确理解。
- **代理自主决策能力**：#21968（主动使用 skills/subagents）与 #19873（bash 亲和力与意图路由）均指向让模型更智能地调用工具而非依赖人工指示。
- **安全护栏**：#22672 要求代理在 git、数据库等场景中主动选择安全操作路径，避免破坏性命令。
- **配置灵活性与一致性问题**：#20079（符号链接识别）、#22267（settings.json 覆盖被忽略）等反映自定义配置的可靠性问题。

## 开发者关注点

- **代理状态可信度差**：多个 bug 中代理上报"成功"但实际未完成任务，或无限挂起无响应——这直接动摇了开发者对代理自动化信任。Issue #22323 与 #21409 是其中的代表。
- **高频出现的"卡死"类问题**：无论通用代理、shell 命令还是 Plan Mode，均有"挂起/等待输入"类报告（#21409、#25166、#29063），且部分为 p1 级别，正在影响日常使用体验。
- **Shell 操作透明性与环境保留**：PR #29156 修复了 shell 执行静默清除用户 git 配置的问题，反映开发者对 shell 环境的控制力和可预期性的看重。
- **浏览器代理在 Linux 桌面的可用性不足**：Wayland 失败、settings.json 覆盖被忽略等使浏览器子代理在非 macOS 环境下受限。
- **低效且不受控的临时文件行为**：模型在代码库各处生成临时编辑脚本的问题（#23571），对需要保持工作区清洁的提交流程造成负担。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 生成时间：2026-09-09*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-09

## 今日速览

昨日发布了两个补丁版本（v1.0.84-2 与 v1.0.84-3），其中 **Vim 模式正式面向所有用户开放**，解决了社区自去年 9 月以来的最高票功能请求（Issue #13，👍 76）。与此同时，桌面应用 1.1.15 带来的本地会话并发限制问题（Issues #4742、#4756）持续发酵，成为当前社区最集中的痛点。

---

## 版本发布（过去 24 小时）

### v1.0.84-3（补丁）
- 修复 `/copy` 命令在可用时未包含任务完成消息的问题
- 修复 OAuth 认证的 MCP 服务器在会话启动期间连接不稳定的问题

### v1.0.84-2（功能 + 补丁）
**新增：** Vim 模式全面开放，可通过 `/vim` 命令或设置 `editorMode` 为 `vim` 开启，输入时光标显示当前模式。

**改进：** 在受支持的 Windows 沙箱策略下，交互式 shell 命令现在会记录被阻止的访问行为。

---

## 社区热点 Issues（精选 10 条）

### 1. #13 [已关闭] CLI 输入应支持 vi/vim 模式 ⭐ 社区最高票
- **作者:** RyanHecht | **评论:** 11 | **👍:** 76
- [查看 Issue](https://github.com/github/copilot-cli/issues/13)
- **重要性：** 社区长期以来的头号功能请求，Vim 模式在 v1.0.84-2 中正式落地，Issue 已关闭，标志着键盘高效编辑需求获得官方回应。

### 2. #4742 [待分类] Desktop 1.1.15：无法在已有 Local 会话运行时创建第二个分支会话
- **作者:** DannyBe99 | **评论:** 10 | **👍:** 5
- [查看 Issue](https://github.com/github/copilot-cli/issues/4742)
- **重要性：** 桌面应用自动更新至 1.1.15 后出现回归——同一项目存在活跃 CLI 进程时，新建 Local 会话直接失败。影响多任务并行工作流，已进入 triage。

### 3. #4756 [打开] Windows：创建新 Local 会话前必须归档所有空闲项目会话
- **作者:** TomHarveyBCM | **评论:** 7 | **👍:** 19
- [查看 Issue](https://github.com/github/copilot-cli/issues/4756)
- **重要性：** 与 #4742 同源的 Windows 平台会话管理问题，社区高赞（19 👍）印证受影响面较大。用户被迫先归档旧会话才能新建，严重打断工作流。

### 4. #4612 [待分类] FileWatch 主机事件死循环冻结 TUI，debug 日志膨胀至 13 GB
- **作者:** tdihp | **评论:** 9 | **👍:** 1
- [查看 Issue](https://github.com/github/copilot-cli/issues/4612)
- **重要性：** 长时间运行的会话可能进入 `FileWatch` 事件紧循环，导致界面冻结且 debug 日志以 GB 级增长，属于稳定性严重缺陷。

### 5. #4664 [打开] 恢复大型会话时 JavaScript 堆内存溢出崩溃
- **作者:** shrijitnair | **评论:** 7 | **👍:** 2
- [查看 Issue](https://github.com/github/copilot-cli/issues/4664)
- **重要性：** 长会话 / 大上下文会话恢复即崩溃（V8 heap OOM），直接导致历史工作上下文不可用。与 #4612 同属会话生命周期稳定性问题群。

### 6. #4775 [待分类] Mission Control 仪表盘链接 404：路径指向不存在的 `/copilot/tasks/`
- **作者:** dai | **创建:** 2026-09-09 | **评论:** 3
- [查看 Issue](https://github.com/github/copilot-cli/issues/4775)
- **重要性：** 远程会话在仪表盘中生成的链接指向错误 URL（实际位于 `/agents/tasks/`），点击即 404。Web 端与会话管理集成出现断链。

### 7. #4753 [打开] v1.0.83 回归：会话恢复将 stdio MCP 连接超时从 ~16s 缩短至 ~1s
- **作者:** indeherb | **评论:** 3 | **👍:** 1
- [查看 Issue](https://github.com/github/copilot-cli/issues/4753)
- **重要性：** 明确的版本间回归——重启会话时初始化中的 MCP 服务器连接被提前取消，导致整个会话期间 MCP 工具静默不可用。需紧急回溯。

### 8. #2943 [打开] OpenRouter 集成支持
- **作者:** asule90 | **评论:** 3 | **👍:** 14
- [查看 Issue](https://github.com/github/copilot-cli/issues/2943)
- **重要性：** 社区对第三方模型路由（OpenRouter）的持续需求，14 👍 说明用户希望在 CLI 中获得更多模型提供方选择。

### 9. #2199 [打开] 增加 Ctrl+Backspace 删除整词快捷键
- **作者:** billkris-ms | **评论:** 3 | **👍:** 7
- [查看 Issue](https://github.com/github/copilot-cli/issues/2199)
- **重要性：** 输入体验的高频请求，与 #3858（Windows 平台同键无效）形成跨平台输入一致性诉求。Vim 模式落地后，普通模式编辑体验成为下一个焦点。

### 10. #4764 [待分类] 自动批准模式在约 1 小时后失效
- **作者:** trydis | **创建:** 2026-09-08 | **评论:** 1
- [查看 Issue](https://github.com/github/copilot-cli/issues/4764)
- **重要性：** 自动授权（assisted permissions）会话运行约 1 小时后静默停止工作，需重启新会话才恢复。直接影响长时间无人值守的自动化流程，属可靠性问题。

---

## 重要 PR 进展

### #4770 [打开] 文档：WebSocket 响应传输的退出机制
- **作者:** 1fanwang | [查看 PR](https://github.com/github/copilot-cli/pull/4770)
- **内容：** 当模型宣告支持 WebSocket 响应端点时 CLI 默认使用该传输。在网络屏蔽 WebSocket 或会话报 `400 input item ID does not belong to this connection` 错误时，用户目前无法绕回普通 HTTP 传输。该 PR 补充了相应的退出（opt-out）配置文档。

### #4761 [已合并] 安装脚本：报告不支持的操作系统
- **作者:** 1fanwang | [查看 PR](https://github.com/github/copilot-cli/pull/4761)
- **内容：** 修复 FreeBSD 上执行 `install.sh` 时误报 "Windows detected but winget not found" 的问题——此前除 macOS/Linux 外的所有系统都会落入 Windows 分支。现改为明确提示不支持该系统。

> 注：过去 24 小时仅有上述 2 条 PR 更新；其余 8 个 PR 位次暂无数据，仅列出已有记录。

---

## 功能需求趋势

从当前 Issues 中可提炼出以下社区关注方向：

| 方向 | 代表 Issues | 热度 |
|------|------------|------|
| **输入与编辑体验** | #13（Vim 模式 ✅）、#2199、#3858（Ctrl+Backspace） | 高（#13 达 76 👍） |
| **会话生命周期管理** | #4742、#4756、#4664、#4612、#4764 | 极高（多 issue 高赞 + triage） |
| **MCP 连接稳定性与 OAuth** | #4753、#4582、#4769 | 中高（连续版本回归） |
| **Windows / 桌面端体验** | #4756、#4771、#3858 | 中高（平台专项回归集中） |
| **模型与提供商扩展** | #2943（OpenRouter） | 中（14 👍 持续累积） |
| **插件生态系统** | #4487（依赖解析机制） | 中低（生态早期建设） |
| **搜索/索引工具** | #3976（tgrep OOM）、#4448（搜索卡死） | 中（大型仓库场景） |

---

## 开发者关注点

1. **桌面应用 1.1.15 的会话并发回归是本日最大痛点。** #4742 与 #4756 指向同一根因：一个项目同时仅允许一个活跃 Local 会话，且 Windows 上必须先归档才能新建。对于习惯多分支并行开发的用户，这一限制直接阻塞日常流程。

2. **长会话稳定性成为系统性风险。** 无论恢复时崩溃（#4664 堆内存溢出）、运行中死循环（#4612 FileWatch）还是一小时后静默失效（#4764），都指向会话状态随运行时间增长而劣化的问题。依赖长会话续接工作的深度用户受影响最大。

3. **MCP 连接可靠性出现版本间回退。** #4753 明确指出 v1.0.83 将会话恢复时的 MCP 握手超时从约 16s 压缩至 ~1s，导致 stdio MCP 服务器在恢复后被静默丢弃。OAuth 类问题（#4582、#4769）涉及 Entra ID 及重定向场景，配置复杂度高。

4. **键盘编辑效率是输入侧的核心诉求。** Vim 模式的全面开放回应了 #13 的长期等待，但社区在同一领域仍有积压需求（Ctrl+Backspace 在 #2199 与 #3858 中被反复提起），且期待与主流编辑器行为对齐。

5. **tgrep 索引器与搜索工具在大型仓库上存在稳定性隐忧。** #3976 反映 tgrep 守护进程无内存上限可致 OOM，#4448 显示内置搜索在某些环境下永久卡死，用户已开始编写本地 workaround（`~/.copilot/instructions/`），说明该问题已达影响生产力的程度。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-09-09

## 📌 今日速览

今日 Kimi CLI 暂无新版本发布，社区提交了 **2 个新 Issue**：Windows Terminal 下阿拉伯语（RTL）文本字符顺序反转问题，以及 CLI v0.42.0 在 macOS 上 `/login` 设备认证返回 HTTP 500 的问题。此外，昨日提交的 PR #2595（拒绝编辑非 UTF-8 文件）仍在等待审查，另有 1 个相关 Issue #2638 报告了登录失败问题。

---

## 🐛 社区热点 Issues

以下为近 24 小时内更新或创建的 4 个 Issue，供参考：

| # | 标题 | 状态 | 创建/更新 | 重要性说明 | 链接 |
|---|------|------|-----------|------------|------|
| 1 | **Arabic (RTL) text is character-reversed in interactive prompt** | 🟢 OPEN | 2026-09-09 | 新提交的 Bug。Windows Terminal 中阿拉伯语输入和 AI 回复均出现逐字符反转，影响 RTL 语言用户的核心交互体验，社区暂未回复 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2639) |
| 2 | **/login device auth fails with HTTP 500** | 🟢 OPEN | 2026-09-09 | 新提交的严重 Bug。CLI v0.42.0 在 macOS 上浏览器授权成功后，CLI 仍收到 HTTP 500，导致无法登录；问题同样影响 VS Code 扩展，且免费版账号可复现 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2638) |
| 3 | **VSCode扩展：@ 后应优先显示已打开文件** | ⚫ CLOSED | 更新 2026-09-09 | 已关闭的增强请求（创建于 2026-02-27，持续近 7 个月）。用户希望上下文引用（@）优先展示当前已打开文件，此需求反映 IDE 内高频文件切换的潜在场景 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/1270) |
| 4 | **Quote & Reply: comment on selected part of AI response** | ⚫ CLOSED | 更新 2026-09-09 | 已关闭的功能请求。用户期望在 Kimi Web 中对 AI 回复的任意片段进行引用、追问或批注，该模式类似 ChatGPT/Claude 的交互范式 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2601) |

---

## 🔧 重要 PR 进展

| # | 标题 | 状态 | 更新日期 | 内容说明 | 链接 |
|---|------|------|----------|---------|------|
| 1 | **fix(fetch): suppress duplicated extracted comment text** | ⚫ CLOSED | 2026-09-09 | 修复 `FetchURL` 网页提取时正文与评论内容重复的问题。通过 Trafilatura 区分 main text 和 comments，并补充了回归测试 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/1863) |
| 2 | **fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** | 🟢 OPEN | 2026-09-08 | 解决 #2591。当前 `StrReplaceFile` 会将非 UTF-8 字节错误替换后再写回，易造成非目标区域的数据损坏；该 PR 直接拒绝编辑非 UTF-8 文件以确保安全 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2595) |

---

## 📈 功能需求趋势

根据近期 Issue 分析，社区关注的核心方向包括：

- **IDE 集成**：VS Code 扩展的交互优化（如快捷键、上下文引用优先级）——Issue #1270
- **Unicode / 多语言支持**：RTL 文本渲染、UTF-8 文件编辑安全性——Issue #2639, #2595（关联）
- **网络推理与链接预览**：优化 URL 抓取后的信息提取质量——PR #1863
- **认证流程稳定性**：设备流授权（device flow）的可靠性——Issue #2638
- **交互范式增强**：对 AI 输出进行片段级引用、批注与追问——Issue #2601

---

## 💬 开发者关注点

- **RTL 语言适配缺口**：阿拉伯语用户无法正常使用交互式对话，核心体验受阻。
- **登录链路需加固**：浏览器授权成功但 CLI 端返回 HTTP 500，且同时影响编辑器扩展，说明认证端到端流程存在不稳定环节。
- **非 ASCII 文件编辑安全**：开发者担心 `StrReplaceFile` 在编辑含非 UTF-8 字符文件时导致不可逆的数据损坏，需加入更多防护性检查。
- **文件引用效率**：在使用 @ 引用时，期望系统优先推荐已在编辑器中打开的文件，进一步提升多文件编码效率。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-09

## 今日速览

今日社区讨论热度集中在 V2 版本回归缺陷（工具参数损坏、会话内容删除功能缺失）与模型兼容性问题（DeepSeek V4 输出上限、Zen 模型列表不完整）两大方向；v1.18.30 补丁版发布，修复了 Bedrock DeepSeek 模型 ID 解析与 Azure/OpenAI 提供商 SDK 兼容性。老牌 Issue #6231（模型自动发现）以 231 👍 持续领跑社区关注度。

## 版本发布

**v1.18.30**（补丁版）
- **改进**：为 GPT-6 模型新增 Astra 系统提示词
- **修复**：保留 Bedrock DeepSeek 模型的 ARN 形式模型 ID，确保正确解析（@YeEmrick）；更新 Azure 与 OpenAI 提供商 SDK 以纳入兼容性修复

## 社区热点 Issues（10 条）

**1. Auto-discover models from OpenAI-compatible provider endpoints**
作者：ochsec | 评论数最多与最高赞（54 评论 / 231 👍）
用户需手动逐一列出 LM Studio、Ollama 等本地 OpenAI 兼容端点后可用的模型，社区强烈呼吁自动发现能力。
[#6231](https://github.com/anomalyco/opencode/issues/6231)

**2. [2.0] tool calls: arguments corrupt across calls and schema-invalid calls can execute**
作者：zhiganov | V2 严重缺陷
同一会话中工具参数跨轮次损坏，`patch` 参数末尾出现内部序列化标记（`<|DELIM_AE|>step_type...`），且 schema 校验失败的调用仍可被执行。直击 V2 工具调用链路可靠性。
[#47902](https://github.com/anomalyco/opencode/issues/47902)

**3. [2.0] v2: selective session-content deletion is missing again after #48043**
作者：pascalandr | V2 回归
#44984 的替代 API 被移除后，V2 再次缺少按需删除工具/推理内容的能力；用户指出 CodeNomad 0.20.0 已采用该被移除 API，外部生态受影响。
[#48090](https://github.com/anomalyco/opencode/issues/48090)

**4. XDG Base Directory Spec violation — node_modules installed in ~/.config instead of ~/.local/share**
作者：ilyachch | 10 评论 / 9 👍
运行时依赖（node_modules 等）被装入 `~/.config/opencode`，违反 XDG 规范，影响 Linux 用户磁盘/配置管理。
[#27786](https://github.com/anomalyco/opencode/issues/27786)

**5. DeepSeek V4 output limit is capped at 32K**
作者：punkisnotdead3 | 对应 PR #38232 待合入
DeepSeek V4 声明 393,216 token 输出上限，但 `ProviderTransform.maxOutputTokens()` 对所有模型施加全局 32K 默认值，严重限制了长输出任务。
[#38236](https://github.com/anomalyco/opencode/issues/38236)

**6. DeepSeek-v4-flash-free model missing from OpenCode's Zen provider dropdown despite existing in /zen/v1/models API**
作者：MauPeCR | 8 评论
模型在 API 中存在且在配置中正确引用，但 Zen 模型下拉列表缺失该项（桌面端 1.18.2x）。同族问题 #48027 亦被报告（Big Pickle、DeepSeek V4 Flash Free 均缺失）。疑为列表硬编码或过滤逻辑缺陷。
[#43805](https://github.com/anomalyco/opencode/issues/43805)

**7. Agent accumulated 51 images via read tool, session bricked by provider 50-image count limit with no recovery**
作者：royalpinto007 | 3 评论
Agent 通过 read 工具累积 51 张图片，触发提供商 50 图像上限后会话陷入死循环，用户无法继续对话，无恢复路径。暴露 Agent 自我致障后的会话救援缺口。
[#47487](https://github.com/anomalyco/opencode/issues/47487)

**8. Manual todo management**
作者：vaproh | 9 评论 / 7 👍
当前 todo 列表只能由 Agent 修改，用户希望获得手动干预能力（新增/调整/删除待办项），以更好控制长任务执行方向。
[#38550](https://github.com/anomalyco/opencode/issues/38550)

**9. Allow forcing immediate reading of queued messages (steering)**
作者：omatheusmesmo | 7 评论 / 8 👍
用户希望在消息排队时可强制 Agent 立即处理（类似 Copilot VS Code 扩展行为），即 Agent 中断/转向（steering）控制增强。
[#24298](https://github.com/anomalyco/opencode/issues/24298)

**10. Session titles stopped auto-generating (stuck on 'New session - timestamp')**
作者：brendandebeasi | 已关闭但仍受关注
1 月初回归：会话标题不再自动生成，全部停在 "New session - 时间戳"；该回归影响会话管理效率。
[#7262](https://github.com/anomalyco/opencode/issues/7262)

## 重要 PR 进展（10 条）

**1. fix(provider): preserve DeepSeek V4 output limit**（OPEN）
作者：punkisnotdead3 | 修复 #38236
移除全局 32K 上限对 DeepSeek V4 的覆盖，使其使用声明的 384K/393,216 输出上限。与 v1.18.30 中 Bedrock ARN 修复配合，完善 DeepSeek 支持链。
[#38232](https://github.com/anomalyco/opencode/pull/38232)

**2. fix(opencode): add DeepSeek system prompt**（CLOSED）
作者：punkisnotdead3 | 修复 #38234
为 DeepSeek 模型提供专用系统提示词，替代当前的通用模板。DeepSeek 支持完善配套提交。
[#38229](https://github.com/anomalyco/opencode/pull/38229)

**3. fix(cli): pass --model through to the TUI entry**（CLOSED）
作者：holny | 修复 #47172
修复 `opencode --model <id> --prompt ...` 中 `--model` 参数未从 CLI 传递至 TUI 入口的问题。
[#47699](https://github.com/anomalyco/opencode/pull/47699)

**4. fix(client): back off reconnects when the stream never connects**（CLOSED）
作者：holny | 修复 #47062
事件流客户端原本以固定 1 秒间隔重试连接失败，现改为递增退避，减轻服务器压力。
[#47204](https://github.com/anomalyco/opencode/pull/47204)

**5. fix(core): clarify the read tool's offset validation error**（CLOSED）
作者：holny | 修复 #46807
模型会“幻觉”出负数偏移值，该 PR 为 read 工具的 offset 校验提供更明确的错误提示，利于模型自我修正。
[#47175](https://github.com/anomalyco/opencode/pull/47175)

**6. fix(core): hint when the skill tool is called with an agent name**（CLOSED）
作者：holny | 修复 #46568
当模型将子代理名称误传给 skill 工具时给出提示，改善 Agent 工具调用容错。
[#46940](https://github.com/anomalyco/opencode/pull/46940)

**7. fix(ai): honor chunkTimeout on HTTP SSE streams**（CLOSED）
作者：holny | 修复 #46692
此前 `chunkTimeout` 在提供商设置中可配置但从未在 HTTP SSE 流上生效，现修复为真正读取该值（注意与 #47204 的退避策略为两个独立机制）。
[#46802](https://github.com/anomalyco/opencode/pull/46802)

**8. fix(tui): exit cleanly when startup probes cannot reach the server**（CLOSED）
作者：holny | 修复 #36688
当后台服务器处于选举或冷启动时启动 TUI，此前可能出现非干净退出，现确保启动探针失败时优雅退出并提示。
[#46726](https://github.com/anomalyco/opencode/pull/46726)

**9. feat(core): carry compaction usage on the compaction message**（CLOSED）
作者：nexxeln
此前压缩（compaction）的 token 用量仅通过内部事件记录在会话总数中，用户无法感知单次压缩开销；现将用量信息挂载到压缩消息本身以增强反馈。
[#47974](https://github.com/anomalyco/opencode/pull/47974)

**10. fix(core): close websocket after provider error frame**（CLOSED）
作者：nexxeln
Responses WebSocket 收到 `error` 帧后传输层仍保留频道供复用，导致下一次交互写入已失效连接并触发 `provider.transport: WebSocket...` 失败；现在错误帧触发后主动关闭连接。
[#47973](https://github.com/anomalyco/opencode/pull/47973)

## 功能需求趋势

- **模型兼容性兜底**：围绕 DeepSeek V4 的系统提示词、输出上限（#38236）、模型 ID 解析（ARB 形式）形成完整修复链，社区对新模型接入的“最后一公里”打磨需求集中。
- **会话控制权回归用户**：Manual todo management（#38550）、强制消息读取/转向（#24298）等需求口径一致——用户在 Agent 自主执行流程中要求保留人工干预通道。
- **V2 稳定性复查**：工具参数损坏（#47902）、选择性内容删除回归（#48090）、远程路径解析（#47665）、Code Mode 目录缺失搜索/执行工具（#48108）等多个 V2 专属缺陷并发报告，提示 V2 当前处于活跃加固期而非功能扩张期。
- **模型自动发现**：#6231（231 👍）持续高位运行——本地 OpenAI 兼容端点（LM Studio/Ollama）模型的自动发现是长期未解决但需求最旺盛的方向。
- **TUI/桌面端体验微调持续**：右击粘贴（#36456）、spinner 可见性（#48128）、旧 UI 布局切换永久化（#38230）——社区对交互细节的长尾反馈量大但单点规模小。

## 开发者关注点

- **会话救援缺失**：#47487 中 Agent 因读图超限导致会话彻底卡死不可恢复，暴露了当前缺少“会话熔断/降级/清理”机制，是比功能缺失更严重的可靠性问题。
- **配置驱动与标准合规矛盾**：#27786（XDG 违反）与 #43805/#48027（Zen 模型列表与 API 不一致）代表两类基础问题——前者涉及标准合规与磁盘布局，后者指向模型元数据源单一化（列表硬编码而非动态拉取）。
- **提示缓存透明化**：#48116 报告 Go 端点下 `deepseek-v4-flash` 与 `qwen3.8-max` 无提示缓存而 `glm-5.2` 正常——成本敏感用户高度关注同一端点内的缓存策略差异化。
- **桌面端阻断性问题反馈集中**：#48104（无法批准命令执行，且上报者注明 1.18.29）、#48027（模型列表缺失）均来自桌面端，多个 Issue 长期未关联修复 PR，可能需官方确认下一桌面版排期。
- **社区维护 PR 审核节奏**：holny 一人提交了 5 条“needs:issue”标签的 bug 修复 PR（#47699/#47204/#47175/#46940/#46802/#46726），均已关闭但 PR 描述中“Issue for this PR”格式暗示被自动工具标记；此类机器人维护流程是否影响人工审核效率值得观察。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## 今日速览

Pi 社区近期最突出的动态集中在 **OpenCode 兼容性问题**（`x-opencode-session` 请求头缺失导致 400 MissingSessionID 报错）和 **WebSocket/流式连接稳定性** 两大方向，多个相关 Issue 和 PR 在近 24 小时内密集更新并关闭。此外，**性能优化**（启动延迟、滚动速度）与**新模型/Provider 支持**（LongCat、CrofAI、GLM）也是社区持续关注的话题。

## 社区热点 Issues

1. **[#9326] `@earendil-works/pi-ai` never sends the `x-opencode-session` header**（已关闭）  
   作者：marcomontalban | 评论：5 | 更新：2026-09-09  
   **为何重要**：库从未发送 OpenCode Zen 现在强制要求的 `x-opencode-session` 头，导致所有请求被拒（400 MissingSessionID），影响所有使用 `pi-ai` 的项目。  
   [链接](https://github.com/earendil-works/pi/issues/9326)

2. **[#9230] opencode-go provider does not send the `x-opencode-session` header**（已关闭）  
   作者：dorogoy | 评论：6 | 👍：1 | 更新：2026-09-09  
   **为何重要**：OpenCode Go 自 9 月 6 日起强制要求此头，请求缺失会报错；属上游 API 变更引发的兼容性回归，社区关注度高。  
   [链接](https://github.com/earendil-works/pi/issues/9230)

3. **[#9302] Out-of-loop summarization misses provider attribution headers**（已关闭）  
   作者：cad0p | 评论：4 | 更新：2026-09-09  
   **为何重要**：所有基于 opencode-family 的会话摘要与压缩操作均确定性失败（400 MissingSessionID），根因与以上两个问题同源，影响面广。  
   [链接](https://github.com/earendil-works/pi/issues/9302)

4. **[#8125] openai-codex: transient WebSocket failure pins session to SSE**（已关闭）  
   作者：ronind | 评论：3 | 更新：2026-09-08  
   **为何重要**：WebSocket 瞬时故障导致会话被永久锁定到 SSE，GPT-5.6 缓存读取量从 198K tokens 直接失效，引发性能与成本双重问题，修复后仍值得关注。  
   [链接](https://github.com/earendil-works/pi/issues/8125)

5. **[#8823] Esc during active streaming often fails to cancel the in-flight request**（已关闭）  
   作者：grelvshorem | 评论：10 | 更新：2026-09-08  
   **为何重要**：用户无法通过 Esc 可靠中断正在流式生成的请求，须等模型自然结束，严重影响交互效率，评论数最高，用户痛点明确。  
   [链接](https://github.com/earendil-works/pi/issues/8823)

6. **[#7444] WebSocket retry only handles two error codes**（已关闭）  
   作者：lkraider | 评论：10 | 更新：2026-09-08  
   **为何重要**：重试循环仅处理两种错误码，其他错误直接终止会话——这是 WebSocket 稳定性问题的根因之一，与 #8125 高度相关。  
   [链接](https://github.com/earendil-works/pi/issues/7444)

7. **[#9052] Fullscreen mode wheel scrolling is 3x slower**（开放中）  
   作者：yangfeng20 | 评论：7 | 👍：3 | 更新：2026-09-08  
   **为何重要**：全屏模式固定输入框体验良好，但滚动速度仅为普通模式的 1/3，目前获 👍 最多，核心体验问题。  
   [链接](https://github.com/earendil-works/pi/issues/9052)

8. **[#8928] Parallel pi startup reports "No API key found" for ~48s**（开放中）  
   作者：deandevz | 评论：5 | 更新：2026-09-09  
   **为何重要**：多进程启动时因另一 Provider 凭据过期导致启动阻塞约 48 秒，作者在生产环境排查了 3 小时，已定位到确定性触发方式。  
   [链接](https://github.com/earendil-works/pi/issues/8928)

9. **[#7445] openai-responses ties developer role selection to model.reasoning**（开放中）  
   作者：neavo | 评论：6 | 更新：2026-09-08  
   **为何重要**：`systemPrompt` 的发送角色（developer vs system）被错误绑定到 `model.reasoning` 配置，影响 prompt 语义正确性，已标记 `inprogress`。  
   [链接](https://github.com/earendil-works/pi/issues/7445)

10. **[#7739] Set a startup-time budget targeting jcode-comparable latency**（开放中）  
    作者：1am2syman | 评论：4 | 更新：2026-09-08  
    **为何重要**：对标 jcode 的启动性能，社区关注 Pi 0.62.0 与竞品在 PTY 交互启动延迟上的差距，属性能方向持续诉求。  
    [链接](https://github.com/earendil-works/pi/issues/7739)

## 重要 PR 进展

1. **[#9376] fix(ai): use reasoning_effort for Mistral-hosted GLM (zai-glm-5-2)**（已合并）  
   作者：Hugo-W  
   **内容**：修复 Mistral API 对 GLM-5.2 仅在 `reasoning_effort` 参数下生效推理能力的问题。  
   [链接](https://github.com/earendil-works/pi/pull/9376)

2. **[#9374] fix(coding-agent): reject reload during active session operations**（已合并）  
   作者：Amarnath10i  
   **内容**：在工具运行期间阻止 `reload`，避免 RPC 模式下扩展命令在工具执行中触发重载导致 wrapper 失效。  
   [链接](https://github.com/earendil-works/pi/pull/9374)

3. **[#9350] fix(coding-agent): fork-free executable lookup**（已合并）  
   作者：Jopie64  
   **内容**：移除 `findExecutableOnPath` 和 `commandExists` 中频繁 fork 子进程的开销，降低多线程主线程阻塞风险。  
   [链接](https://github.com/earendil-works/pi/pull/9350)

4. **[#9351] Fix the edit preview flicker on remote edits**（开放中）  
   作者：terrorobe  
   **内容**：修复远程编辑操作注入时工具行短暂闪红并误报 "Could not edit file" 的 UI 闪烁问题。  
   [链接](https://github.com/earendil-works/pi/pull/9351)

5. **[#9346] Fix/gondolin undici and hook**（已合并）  
   作者：alhajrisalem893-dev  
   **内容**：更新 Gondolin 的 undici 依赖（6.27.0 → 6.28.0）修复中危漏洞，并清理过时的 `packages/web-ui/*` hook 路径。  
   [链接](https://github.com/earendil-works/pi/pull/9346)

6. **[#9345] feat(ai): expose Anthropic OAuth usage reports**（已合并）  
   作者：AntiD2ta  
   **内容**：新增 Provider 中立的订阅用量报告 API 与 Anthropic OAuth 适配器，支持按 5 分钟 token 分区查询用量。  
   [链接](https://github.com/earendil-works/pi/pull/9345)

7. **[#9344] feat(coding-agent): add owner-safe UI overrides**（已合并）  
   作者：AntiD2ta  
   **内容**：新增主题、页脚与编辑器的 UI 覆写 API，按对象身份管理覆写归属，过期版本不覆盖生效设置。  
   [链接](https://github.com/earendil-works/pi/pull/9344)

8. **[#9341] fix(coding-agent): update runtime dependencies**（已合并）  
   作者：mitsuhiko  
   **内容**：升级运行时依赖（含 `minimatch`），保留 `diff`、`openai`、`highlight.js` 版本，重新生成锁文件。  
   [链接](https://github.com/earendil-works/pi/pull/9341)

9. **[#9337] fix(coding-agent): bound Case 3 compaction estimate and getContextUsage display**（已合并）  
   作者：Valentino-Sole  
   **内容**：将下游 fork 已修复的三个压缩估算与上下文用量显示问题移植回上游 main 分支，覆盖失败/中止分支场景。  
   [链接](https://github.com/earendil-works/pi/pull/9337)

10. **[#6881] feat(ai): use provider-reported cost when responses include it**（开放中，`inprogress`）  
    作者：R-Taneja  
    **内容**：当响应包含实际计费成本时，用 `usage.cost.total` 替代目录价估算；`openai-completions` 已在读 `usage.cost` 与 `cost_details`。  
    [链接](https://github.com/earendil-works/pi/pull/6881)

## 功能需求趋势

1. **OpenCode 生态合规适配**（#9326、#9230、#9302）：上游新增 `x-opencode-session` 强制要求后，多个库与 Provider 适配层未同步，社区密集修复中。
2. **新模型/Provider 接入**（#9308 LongCat、#3717 CrofAI、#9376 GLM via Mistral）：社区持续贡献第三方 Provider 内置支持，本期关注推理参数透传与认证方式兼容。
3. **交互体验细粒度优化**（#9052 全屏滚动速度、#8823 Esc 中断、#9351 编辑预览闪烁）：开发者从"能跑"转向"好用"，关注 UI 反馈与快捷键可靠性。
4. **性能对标竞品**（#7739 启动延迟/内存对标 jcode；#9350 减少 fork）：启动较慢与子进程开销被反复提及，成为性能优化明确方向。
5. **国产/新兴模型接入**（#9308 LongCat、#3717 集成 Kimi/GLM/Gemma/Qwen 等）：模型生态诉求多样化，Gateway 整合模式受青睐。

## 开发者关注点

1. **Provider 上游 API 变更导致连锁故障**：OpenCode Zen/Go 新增请求头要求后，pi-ai 库、opencode-go Provider、会话摘要压缩路径同时失联（三个独立 Issue 同根因），上游不兼容变动是痛点。
2. **WebSocket 连接稳定性**：重试逻辑覆盖错误码不足（#7444）、瞬时故障导致会话降级至 SSE（#8125），直接影响缓存命中率与使用成本。
3. **取消/中断操作不可靠**：Esc 无法及时中止流式请求（#8823），在长输出场景严重影响体验。
4. **auth.json 竞态与只读目录兼容**：#8928（并行启动因过期凭据阻塞 48 秒）、#6406（只读目录下读凭据仍需创建锁文件）——桌面端多进程/打包场景需要更完善的凭据管理策略。
5. **启动性能差距**：#7739 嵌入式 jcode 基准对比表格明确 Pi 0.62.0 在 PTY 交互启动延迟上的差距，用户期待设定对标预算。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-09

## 今日速览

Qwen Code 发布 v0.23.2，在 Web Shell 分屏会话导航方面做出改进。社区讨论聚焦于 daemon/Web Shell 相关的会话回收缺陷与集成需求，同时 SDK TypeScript v0.1.11 已发布。多个 Web Shell 视觉问题与 LSP 陈旧内容 bug 正在积极处理中。

## 版本发布

本次日报涵盖 v0.23.2、v0.23.1、v0.23.2-preview.0 及 SDK TypeScript v0.1.11/v0.1.10/v0.1.9 等过去 24 小时内发布的版本。

- **[v0.23.2](https://github.com/QwenLM/qwen-code/releases)**：官方版本，主要新增 feature：改进 Web Shell 分屏视图会话导航（PR #11250），SDK TypeScript v0.1.11（捆绑该 CLI 版本）。无已知破坏性变更。
- **[v0.23.1](https://github.com/QwenLM/qwen-code/releases)**：最新版本之一。重要变更：**破坏性变更**——移除 @qwen-code/webui 包（PR #9812）。
- **[v0.23.2-preview.0](https://github.com/QwenLM/qwen-code/releases)**：预览版，主要包含 CI 修复：隔离子进程密集的 E2E 测试，避免 fork 压力。

## 社区热点 Issues

1. **[#8662 — 将 TUI 渲染层从 ink 迁移至 OpenTUI](https://github.com/QwenLM/qwen-code/issues/8662)** [优先级 P3，已跟踪，33 条评论]
   当前基于 ink 7 + React 19 且包含~1037 行补丁的渲染器存在结构性缺陷，社区讨论热度高。属于 roadmap/terminal-ux 长期演进方向。

2. **[#11119 — serve：后台 shell 输出与唤醒通知在会话运行时回收后被静默丢弃](https://github.com/QwenLM/qwen-code/issues/11119)** [优先级 P1，10 条评论]
   严重 P1 bug：daemon 回收会话时后台 shell 输出丢失且会话被卡死。影响依赖 qwen serve 后台自动化任务的用户，需要关注。

3. **[#11328 — 跟进 provider 配置的 reasoning 边界情况](https://github.com/QwenLM/qwen-code/issues/11328)** [优先级 P2，被阻塞，4 条评论]
   官方持续推进 reasoning 能力的 provider 配置化呈现，表明模型推理配置方向处于活跃开发中。

4. **[#10530 / #10435 — 400 无法初始化 samplers（llama-server）](https://github.com/QwenLM/qwen-code/issues/10530)** [已关闭，7 条评论]
   多个用户报告 0.22.3 连接本地 llama-server（如 Qwen 3.8 27b、Qwen 3.6 35b）时出现 "failed to parse grammar" 崩溃，Pi 和 OpenCode 正常，是本地推理用户的高频问题。

5. **[#11465 — web-shell 视觉渲染不确定性问题](https://github.com/QwenLM/qwen-code/issues/11465)** [新提交，4 条评论]
   session-workflow-cockpit-light 在同一 commit 上渲染出现 1.31% 像素差异，影响 Web Shell 视觉回归测试可靠性。

6. **[#11358 — 支持托管自定义 Web Shell 分发版](https://github.com/QwenLM/qwen-code/issues/11358)** [4 条评论]
   集成商需求：希望 qwen serve 托管自己的预构建前端以替代内置 Web Shell，同时保留 daemon API。与 #11357/#11359 联动成为一个集成主题。

7. **[#11274 — daemon Skill 管理与 ACP child 解耦（跟踪）](https://github.com/QwenLM/qwen-code/issues/11274)** [4 条评论]
   明确按 PR ≤1000 行拆分演进。daemon 架构深化方向，值得关注后续 PR。

8. **[#11410 — Windows 11 更新后本地模型无法工作（API Error 400）](https://github.com/QwenLM/qwen-code/issues/11410)** [已关闭，4 条评论]
   Windows 用户在系统更新后 LM Studio/本地模型连接断开，是平台兼容性类问题代表。

9. **[#11205 — 审查：main 分支内容过滤屏缺失六项加固](https://github.com/QwenLM/qwen-code/issues/11205)** [4 条评论]
   安全相关：主分支过滤器丢失了读顺序、EACCES、U+FFFD、spawn 超时、候选上限、保留等 6 项加固，需要关注 git/安全实践。

10. **[#11453 — Web Shell 侧栏底部版本标签与图标重叠](https://github.com/QwenLM/qwen-code/issues/11453)** [3 条评论]
    窄宽度下端 UI 细节 bug，开发者在使用小窗格时可见。

## 重要 PR 进展

1. **[#11473 — 发布 sdk-typescript v0.1.11](https://github.com/QwenLM/qwen-code/pull/11473)**（chore/release）
   SDK TypeScript 自动发布 PR，捆绑 CLI 0.23.2，为 SDK 用户带来 Web Shell 导航改进及此前两项管理内存修复。

2. **[#11362 — 修复 CLI 中 fire-and-forget serve handler 的测试不稳定（配套 #11346）](https://github.com/QwenLM/qwen-code/pull/11362)**
   稳定性改进：修复 --token/--allow-origin 转发测试在 --local-control 模式下的执行时序问题。

3. **[#11467 — 修复 serve 中被驱逐的 SSE 客户端重连](https://github.com/QwenLM/qwen-code/pull/11467)**
   daemon 排队溢出后主动关闭 HTTP 响应，Web Shell 借助已有 bounded reconnect loop + Last-Event-ID 游标从中断处恢复，用户感知更平滑。

4. **[#11472 — 重启后恢复已配置的 channel](https://github.com/QwenLM/qwen-code/pull/11472)**
   修复 qwen serve 无显式 channel 参数启动时未恢复工作区已配置的启动 channels 的问题，显式选择仍优先。

5. **[#11424 — 在 RUM sink 中脱敏凭据错误文本](https://github.com/QwenLM/qwen-code/pull/11424)**
   所有 usage-statistics 中记录的事件统一经过单点脱敏步骤，避免凭据形式内容进入遥测上传队列。

6. **[#11395 — 修复 ACP child 终止后保留调用方持有的 mode](https://github.com/QwenLM/qwen-code/pull/11395)**
   确保 ACP child 终止且同一会话在相同工作区冷加载或恢复时，桥接层会重新应用 daemon API 调用者的审批模式。

7. **[#10906 — 在 Web Shell 任务详情中展示 Shell 与 Monitor 输出](https://github.com/QwenLM/qwen-code/pull/10906)**
   Monitor 的 stdout/stderr 于 Shell 捕获一起持久化，daemon 暴露 live-session 接口，用户直接在 Web Shell 中查看后台任务输出。

8. **[#11238 — 改进 Web Shell 会话概览导航和详情展示](https://github.com/QwenLM/qwen-code/pull/11238)**
   会话显示 workspace、branch 和 PR 及 distinct 审批/问题/运行/空闲状态，支持状态过滤与 branch/PR 搜索。

9. **[#10347 — 在 Ctrl+Y 不可用时自动重试瞬时网络错误（EOF）](https://github.com/QwenLM/qwen-code/pull/10347)**
   将 4xx 中实际是底层网络错误的请求（如 EOF、对端半途关闭）归类为可重试传输错误，复用现有 bounded auto-retry 机制。

10. **[#11356 — 将计划任务行标记移动到尾部元数据栏](https://github.com/QwenLM/qwen-code/pull/11356)**
    保留跨 active、分组、彩色、归档行的状态语义，将 leading 栏留给未读/运行状态等本职标记。

## 功能需求趋势

当前社区关注方向在 **daemon/Web Shell 集成能力**的加强（允许自定义前端分发[#11358]、支持配置化品牌定制/更名/Logo/favicon [#11357]、补充集成商用 REST/SSE API 文档 [#11359]），其次集中在：
- **本地推理稳定性**：llama-server 兼容性问题、sampler 初始化失败的修复和回归测试，Windows 本地模型连接问题
- **后台自动化**：后台 shell 输出回收与唤醒通知可靠性 [#11119]、autofix 与自动化回归测试
- **会话管理现代化**：会话概览可视化、状态可治理性 [#11238]、skill 管理与 ACP child 的解耦 [#11274]

## 开发者关注点

开发者反馈大多围绕：
- **daemon/集成**：渠道在 qwen serve 重启后无法恢复，自建 Agent 前端时托管自定义 Web Shell 能力缺失，以及 daemon REST/SSE API 文档不一致或无导航 ([#11399](https://github.com/QwenLM/qwen-code/issues/11399))
- **local model bug**：llama-server + samplers 崩溃相关问题反复出现（涉及多个 harness、多模型），用户已在 0.22.3 验证并寻求 workaround
- **Web Shell 细节**：可感知的视觉渲染不确定性问题（导致视觉回归测试碎片化）、侧栏窄宽度时版本号与操作图标重叠
- **LSP 内容的陈旧问题**：天然 LSP 查询在文件落盘编辑后返回旧版内容，“hover 仍然返回 number”在当前的展示中持续出现
- **平台兼容性**：Windows 11 系统更新后 API 400，且无明确规避方式

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-09-09

> 数据来源: github.com/Hmbown/DeepSeek-TUI

## 今日速览

过去24小时无新版本发布，主要动态集中在 Issue 与 PR 的持续更新。社区聚焦于模型目录与成本透明度（#5848、#5976、#6009）、TUI 会话管理与诊断体验优化（#6013、#6014、#6011），以及两项来自外部贡献者的功能性 PR（#6012、#5982）。多线程 Enhancer 提案（#6007、#6013、#6014、#6011、#6015）在昨日集中创建并获维护者回复，表明官方对批量体验升级持开放态度。

## 社区热点 Issues

过去24小时更新共 0 条？重新统计——清单显示 **10 条**，下面逐条分析：

**#5848 [OPEN] Extract y2 Ollama live-catalog default from the brand rewrite** — 维护者（Hmbown）提出将「Ollama 默认模型取自本地实时目录」这一真实修复，从品牌重写分支中剥离。涉及 provider_defaults.rs、models.rs 等核心文件，属架构清理，评论 4 条。
链接: https://github.com/Hmbown/Codewhale/issues/5848

**#5976 [OPEN] Cost shows unknown on Concentrate — billing/pricing coverage incomplete** — 创始人现场报告：Concentrate 作为已编目的可路由 Provider，成本却显示 unknown。暴露计费/定价覆盖不全且缺少守护机制，直接影响用户对成本的信任，评论 2 条。
链接: https://github.com/Hmbown/Codewhale/issues/5976

**#6007 [OPEN] feat(openrouter): native vendor selection for OpenRouter models** — OpenRouter 多供应商路由下缺少「锁定特定上游」的一等能力。诉求清晰、场景真实，社区热度 2 条评论，属高频需求。
链接: https://github.com/Hmbown/Codewhale/issues/6007

**#6009 [OPEN] /models returns partial model list — missing pagination support** — 单次 GET /v1/models 不处理 OpenAI 游标分页，只能取回第一页。当 Provider 模型量大时直接丢数据，属核心功能缺陷，评论 2 条。
链接: https://github.com/Hmbown/Codewhale/issues/6009

**#2955 [CLOSED] Align OpenAI Codex provider usage telemetry with Codex CLI** — 6月提出、昨日更新后关闭。目标是让 CodeWhale 的 Codex 用量遥测可与 Codex CLI 公平对比（缓存输入 token 与推理输出 token），属成本可观测性补全。
链接: https://github.com/Hmbown/Codewhale/issues/2955

**#6015 [OPEN] feat(fleet): adaptive anti-stall + wider read-only shell grammar** — 只读子代理（Scout/Reviewer/Planner）在默认参数下会停滞并空耗 token。提案要求默认改进而非依赖用户配置 `[subagents]`。8 个角色划分清晰（role.rs:64-98），评论 1 条。
链接: https://github.com/Hmbown/Codewhale/issues/6015

**#6014 [OPEN] feat(tui): Session Picker UX — hide empty sessions, highlight current, page-scroll** — 四个可用性缺口：空自动会话污染列表（0 messages、默认标题 "Session"）、当前会话无高亮、列表不支持翻页、面板过窄。切 session 最常用入口的体验短板，评论 1 条。
链接: https://github.com/Hmbown/Codewhale/issues/6014

**#6013 [OPEN] feat(goal): goal gates — independent verification of statuses** — 「Operate」目标循环模式缺少独立验证机制。提案加 gate 层验证 complete/blocked/needs_input/deferred/stalled，带 post-verify 阶段与 gate 韧性（默认不改变现有行为）。评论 1 条。
链接: https://github.com/Hmbown/Codewhale/issues/6013

**#6011 [OPEN] feat(tui): usage & tool diagnostics — per-component token accounting** — 会话成本与上下文是黑盒：现有 /tokens、/cost 均仅存活于会话内，「会话结束后无法回答...」。提案要全组件 token、缓存命中率、单工具消耗、压缩成本、工具调用错误的落盘诊断，评论 1 条。
链接: https://github.com/Hmbown/Codewhale/issues/6011

**#4168 [OPEN] Architecture D-4: add user-defined models config section** — 代号 D-4：增加 `[[models]]` 配置段，让本地/私有/自定义模型无需改编译目录即可注册。7月提出至今仍开放，是长期架构级诉求，评论 1 条。
链接: https://github.com/Hmbown/Codewhale/issues/4168

## 重要 PR 进展

过去24小时内更新共 3 条：

**#6002 [OPEN] Integrate Codewhale 0.9.13 contributor fixes and release verification** — 维护者 Hmbown 集成 0.9.13 贡献者修复，并在测试 CLI、TUI、Runtime API 与 Computer Use 时修补新问题。候选版本已含 Provider 目录分页与精确路由。
链接: https://github.com/Hmbown/Codewhale/issues/6002

**#6012 [OPEN] fix(session): skip runtime handoffs when deriving the auto title** — 贡献者 SparkofSpike：自动会话标题把内部运行时信封（如 `<codewhale:runtime_event kind="operate_contract">`）写进了标题而非真实提示词。Chat 模板兼容性迫使运行时消息混入，此 PR 跳过 handoff 消息取标题。
链接: https://github.com/Hmbown/Codewhale/issues/6012

**#5982 [OPEN] feat(tui): confirmed opt-out for model-bound key redaction ([redaction] model_bound)** — SparkofSpike 另一贡献：现有关键字脱敏强制开启，在开发浏览器扩展等场景（服务端回显含凭据样式文本）造成困扰。PR 提供按需确认的退出开关。
链接: https://github.com/Hmbown/Codewhale/issues/5982

> 注: 24 小时更新窗口内无新发布的 Release，故省略「版本发布」一节；可用 PR 仅 3 条，不足 10 条时按实际列出。

## 功能需求趋势

从全部 10 条 Issue 中可提炼 4 个方向：

**1. 成本与用量可观测性（最集中）** — #5976（cost unknown）、#6011（全局 token 落盘诊断）、#2955（Codex 遥测对齐）三条不同层面指向同一个诉求：成本不能只活在会话里，要可审计、可比较、可追溯。

**2. 目录/模型数据正确性** — #5848（Ollama 目录修复与品牌重写解耦）、#6009（分页缺失丢模型）、#6007（OpenRouter 供应商选择）均围绕「模型目录数据要全、要准、要可控」。

**3. TUI 交互与体验升级** — #6014（Session Picker 四缺口）、#6013（goal 独立验证门）、#6015（只读子代理防停滞）表明批量体验打磨期已至，默认行为优先于用户配置。

**4. 扩展性与可配置性** — #4168（用户自定义模型段）从 7 月持续开放至今，反映社区对「开箱即用目录 + 可扩展本地模型」的双轨诉求。

## 开发者关注点

- **成本黑盒是最大信任痛点**：创始人级别的 live-report（#5976）说明「连 Catalog 里都有的模型都显示 unknown」已影响决策层对产品的信任；会话外无法追溯用量（#6011）进一步放大问题。
- **模型列表不完整直接破坏核心工作流**：无分页导致模型缺失（#6009），会让用户误以为产品不支持某些模型。
- **默认值不合理的怨气正在积累**：#6015（子代理停滞空烧 token）与 #6014（空会话刷屏）都强调「不应要求用户改配置才能有合理体验」。
- **脱敏机制过强反伤开发**：#5982 展示强制脱敏在真实开发（浏览器扩展调试）中造成额外摩擦，需要「按需 + 确认」的弹性策略。
- **功能需求提案开始由单一作者批量提交**：#6007、#6011、#6013、#6014、#6015 均由同一用户（7jrxt42BxFZo4iAnN4CX）在 9-07/09-08 集中提出，内容深度与角色/代码定位（role.rs:64-98）都较高，代表有经验的深度用户在系统化推进体验改进。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*