# AI CLI 工具社区动态日报 2026-09-06

> 生成时间: 2026-09-06 11:20 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 — 2026-09-06

## 1. 生态全景

当前 AI CLI 工具已从"单会话代码助手"演进为**多智能体协作平台**——Claude Code、Codex、Gemini CLI 等头部工具均在围绕跨会话消息传递、Subagent 编排和会话生命周期管理投入大量工程资源。与此同时，**数据安全与写入确认机制**成为全行业最突出的信任短板：Claude Code 本周出现 3 起无确认文件覆写导致的数据丢失报告，Gemini CLI 与 Qwen Code 各自暴露了安全钩子在特定路径下失效的问题。值得注意的是，**"远程控制本地会话"**正成为跨工具的共同呼声（Kimi Code #1282 获 32👍、Copilot CLI 移动端渲染问题持续 3+ 月未解、Claude Code 跨设备同步 Issue 评论 17 条），反映出开发者对"离开终端不断线"的强烈诉求。整体而言，各工具正处于**功能扩张（多智能体、MCP 生态、语音）与稳定性治理（发布流水线、跨平台兼容、状态同步）并行的阶段**。

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issues（热点） | PR（重要进展） | 高频问题主题 |
|---|---|---|---|---|
| **Claude Code** | v2.1.263（补丁） | 11 个（含 3 个今日新开） | 4 个 OPEN | 数据丢失(3起)、跨会话通信回归、deep-research 输出异常 |
| **OpenAI Codex** | 无 | 10 个（含 1 个 Meta Issue） | 10 个（密集合并） | Windows 平台配额消耗异常、WSL 切换故障、后台进程资源失控 |
| **Gemini CLI** | v0.60.0-nightly（每夜版） | 10 个（含 2 个 P1） | 10 个（已合并为主） | Subagent 状态误报、无限挂起、SSE 事件丢失、MCP OAuth 加固 |
| **GitHub Copilot CLI** | 无 | 12 个（含 2 个今日关闭） | 无 | BYOK 成本激增 5 倍、企业模型同步滞后、工具调用静默失效 |
| **Kimi Code CLI** | 无 | 4 个活跃 | 1 个 OPEN | 远程控制（32👍 高热度）、登录态频繁失效 |
| **OpenCode** | 无 | 10 个（含 2 个今日新开） | 10 个（含 3 个今日合并） | 计费误判、会话中断无法恢复、技能启用/禁用机制 |
| **Pi** | v0.85.1（GPT-6 Astra 支持） | 10 个（含 1 个 76 评论高热度） | 10 个（含 5 个今日更新） | Codex 连接可靠性、跨提供商协议差异、Windows 适配征询 |
| **Qwen Code** | v0.23.1-preview.0 + nightly | 10 个（含 3 次发布失败报告） | 10 个 | CI/发布流水线三连失败、hook 在 --continue 后失效、WebShell 功能补全 |
| **DeepSeek TUI** | 0.9.12 dogfooding 修复期 | 10 个（6 个今日关闭/新开） | 10 个（7 个已合并） | Fleet 多智能体死锁、computer-use 平台后端、错误对用户不可见 |

## 3. 共同关注的功能方向

**(1) 数据安全与写入护栏** — 跨工具最集中的痛点

| 工具 | 具体诉求 |
|---|---|
| **Claude Code** | #64559/#72666/#78273 三起无确认 rm/覆写导致数据丢失 |
| **Gemini CLI** | #22672 Agent 应主动阻止破坏性命令；#26525 Auto Memory 脱敏时机滞后 |
| **OpenCode** | #41909/#47579 运行时切换逐步骤审批模式 |
| **Pi** | #9227 新增按调用确认的自定义工具示例 |
| **Qwen Code** | #11180 skill 的 PreToolUse hook 在 --continue 后失效 |

**(2) 跨设备/会话连续性** — 多工具用户的核心诉求

| 工具 | 具体诉求 |
|---|---|
| **Claude Code** | #81658 跨平台同步故障（17 评论）；#47926 跨设备恢复会话（6👍） |
| **Codex** | #26836 项目文件夹重命名后更新工作目录；#43178 legacy resume 与迁移协调 |
| **Kimi Code** | #1282 远程控制本地会话（32👍，全场最高） |
| **Copilot CLI** | #3498 GitHub Mobile 远程会话渲染（持续 3+ 月） |
| **Pi** | 终端无故滚动/回退（#5023，19 评论） |

**(3) 多智能体编排可靠性** — 各工具处于不同成熟阶段

| 工具 | 具体问题 |
|---|---|
| **Claude Code** | #92258/#91139 跨会话消息回归 + 杀死后台任务 |
| **Gemini CLI** | #22323 Subagent MAX_TURNS 后误报 GOAL 成功（P1）；#21409 无限挂起（P1） |
| **Copilot CLI** | #3894 agentStop 误触发导致 /review 永不结束 |
| **OpenCode** | #39196 子代理失败无 task_id，父代理无法恢复 |
| **DeepSeek TUI** | #5906 parked 子代理无限持有写权限（死锁） |

**(4) MCP 生态稳定性与安全** — 多个工具在加固

| 工具 | 具体方向 |
|---|---|
| **Gemini CLI** | #29117 MCP OAuth 强制 RFC 9207 Issuer 校验（已合并） |
| **Copilot CLI** | #4695 OAuth token 缓存键重复导致频繁重认证 |
| **OpenCode** | #39164 MCP 工具未发送给本地模型（tools 数组为空） |
| **DeepSeek TUI** | rmcp 2.2.0 → 3.2.0 升级 + OAuth transport 移植 |

**(5) 模型提供商/网关兼容性阵痛** — 新模型接入伴随适配问题

| 工具 | 具体问题 |
|---|---|
| **Pi** | #4945 Codex 连接卡死（76 评论，32👍）；#9212 sonnet-5 经网关 13% 参数截断；#9209 GPT-6 Astra 路由错误 |
| **Copilot CLI** | #4692 企业默认模型 CLI 不可用 |
| **OpenCode** | #35112 6MB 请求体限制阻断 Qwen3.7Plus 图片输入 |
| **Claude Code** | #76489 deep-research synthesize 返回占位符 "test" |

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 | 当前阶段 |
|---|---|---|---|---|
| **Claude Code** | 深度 Agent 能力（deep-research、多会话协作） | 专业开发者、研究型工作流 | 内置 Skill/Agent 生态、跨平台同步 | 成熟但稳定性承压（数据丢失、回归频发） |
| **OpenAI Codex** | TUI 会话管理、guardian 安全架构、原生语音 | ChatGPT Pro/Enterprise 用户 | Bazel 构建收敛、配置服务端中心化（guardianv2）、客户端瘦身 | 架构重构期（工程 PR 密集合并） |
| **Gemini CLI** | Agent 可靠性治理、MCP 安全加固 | Google 生态开发者、多提供商用户 | 每夜版快速迭代、Claude Code 迁移兼容（hook 单位换算） | 快速迭代期（P1 问题活跃但修复节奏快） |
| **Copilot CLI** | 企业 GitHub 生态集成 | GHEC 企业客户、GitHub 深度用户 | 与 VS Code/Desktop 生态对齐、远程会话 | 企业功能追赶期（落后于 IDE 客户端） |
| **Kimi Code CLI** | 轻量终端体验 | 个人开发者、Moonshot API 用户 | 社区规模小、聚焦单一高赞诉求 | 早期阶段（活跃度最低） |
| **OpenCode** | 开源可自托管、技能/偏好 API | 开源社区、本地模型用户 | 技能治理（enable/disable API）、DB 存储层加固 | 功能扩展 + 基础设施修复并行 |
| **Pi** | 多提供商接入（LLM Gateway、Meta/Muse） | 多模型路由用户、扩展开发者 | 扩展机制深化（ModelRuntime 暴露、按调用确认） | 生态扩张期（新模型/新提供商密集接入） |
| **Qwen Code** | WebShell 可视化、工作流管理 | VS Code 生态用户、Alibaba 云开发者 | 发布流水线自动化（当前不稳定）、工作区级扩展隔离 | 功能冲刺期（WebShell 重投入） |
| **DeepSeek TUI** | Fleet 多智能体编排、computer-use 插件 | Rust 社区、多智能体工作流用户 | 严格 dogfooding 驱动（问题→PR→合并数小时闭环）、crate 架构重组 | 密集修复期（0.9.12→0.9.13） |

## 5. 社区热度与成熟度

**高热度（大量讨论 + 明确产品方向）**

| 工具 | 热度信号 | 社区特征 |
|---|---|---|
| **Claude Code** | Issue 评论最高 17 条、数据丢失问题获 8 条评论仍被关闭 | 最成熟（v2.x），但社区对安全信任出现裂痕；维护者在批量清理积压 Issue |
| **Pi** | #4945 达 76 评论 + 32👍（全场最高）、官方主动发起 Windows 调查 | 快速成长、维护者响应积极（多个 PR 当日修复当日合并/关闭） |
| **Gemini CLI** | P1 Issue 获 8👍、PR 当日密集合并 | 迭代节奏最快（每夜版）、社区对 Agent 可靠性有高预期 |
| **OpenAI Codex** | Meta Issue 追踪配额异常（19 评论）、Windows bug 40 评论 | 处于架构收敛期，社区反馈量大但方向分散 |

**中度活跃（聚焦特定方向）**

| 工具 | 活跃信号 | 特征 |
|---|---|---|
| **OpenCode** | 今日 3 个 PR 合并、Issue 集中于计费/会话恢复 | Bug 修复节奏稳定 |
| **DeepSeek TUI** | 今日 7 个 PR 合并、6 个 Issue 关闭 | 小型项目但修复效率极高（dogfooding 驱动） |
| **Qwen Code** | 10 个 Issue 中 3 个为发布失败报告 | 功能开发快但 CI 流水线不稳定，自动化告警堆积 |
| **Copilot CLI** | 12 个 Issue 但今日无 PR | 更新放缓，Issue 长期开放（移动端 3+ 月、agentStop 2+ 月） |

**低活跃（社区规模小）**

| 工具 | 信号 |
|---|---|
| **Kimi Code CLI** | 仅 4 个活跃 Issue + 1 个 PR；单一高赞功能占主导 |

## 6. 值得关注的趋势信号

**① 自动化 Agent 的"安全护栏"正从可选项变为必需品**
Claude Code 一周内 3 起无确认覆写数据丢失（#64559/#72666/#78273），Gemini CLI 提出 Agent 主动阻止破坏性命令（#22672），Qwen Code 暴露 --continue 后安全钩子失效（#11180），OpenCode 与 Pi 则已分别落地运行时审批切换（#47579）和按调用确认机制（#9227）。**信号**：默认拒绝（deny-by-default）的写入策略和不可绕过的审批链正在成为下一代 CLI 的核心安全基线。

**② 跨设备"远程接管"成为下一波产品分水岭**
Kimi Code #1282（远程控制本地会话，32👍 为其社区最高）、Claude Code #81658 与 #47926、Copilot CLI #3498（移动端渲染，3+ 月未解）——不同规模工具都在收到同一诉求。**信号**：能将 CLI 会话无缝延伸到手机/浏览器的产品将获得显著差异化优势，Codex 的"配置服务端中心化"（#43113/#43177）正是在为这一能力铺路。

**③ 多智能体（Subagent/Multi-Agent）的"终态可信度"是当前最大的可靠性瓶颈**
Gemini CLI #22323（MAX_TURNS 后误报 GOAL 成功）、Copilot CLI #3894（agentStop 误触发挂起）、DeepSeek TUI #5906（parked 子代理死锁）、Claude Code #92258/#91139（跨会话消息杀死后台任务）——四个工具各自独立暴露了子代理生命周期管理缺陷。**信号**：状态误报比功能缺失更危险——它会直接破坏自动化流水线对 Agent 的信任。能提供确定性终态判定和可恢复句柄（如 OpenCode #39196 请求的 task_id）的工具将在企业级自动化场景中胜出。

**④ 成本可见性成为企业采纳的关键考量**
Copilot CLI BYOK 模式下提示缓存被静默禁用导致成本增加约 5 倍（#4720），Codex 用户报告配额消耗差异最高达 9 倍（#41220 Meta Issue），OpenCode 订阅用户被误判超额限流（#47547）。**信号**：随着 BYOK/企业密钥模式普及，模型提供商的缓存命中率和用量计费透明度正成为开发者用脚投票的依据。CLI 工具需要提供本地 token 消耗的可验证证据链。

**⑤ 平台兼容性鸿沟持续扩大，Windows 成为重灾区**
Codex 热点 bug 中超半数为 Windows 相关（WSL 切换、内存池膨胀、日志写入），Copilot CLI 遭遇 Windows 25H2 沙箱不支持（#4652）与 WSL2 31GB 内存占用（#4694），Claude Code 参数替换 bug 标注 platform:windows，Gemini CLI 则处理 Wayland 下 browser agent 失败（#21983）。**信号**：各工具在 macOS/Linux 的成熟度已显著领先于 Windows/Wayland，Windows 开发者的体验落差正成为社区反馈的集中爆发点——这既是挑战也是早期采用者获取差异化价值的窗口。

---

*报告基于 2026-09-06 各工具 GitHub 仓库公开数据整理，所有引用 Issue/PR 编号与链接见各工具日报原文。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-06）

---

## 1. 热门 Skills 排行

以下为社区关注度最高的 PR（按评论数排序，数据源中未提供具体评论数值，以 👍、状态和讨论热度综合评估）：

**① skill-creator 评估链路修复（PR #1298）— [链接](https://github.com/anthropics/skills/pull/1298)**
- **功能**：修复 `run_eval.py` 对所有 skill 描述恒报 `recall=0%` 的严重缺陷（关联 Issue #556，10+ 独立复现），涉及 Windows 流读取、触发检测、并行 worker 等问题。
- **状态**：OPEN。因 cross-cutting 影响 `run_loop.py` 和 `improve_description.py`，是该仓库最核心的工具链缺陷修复。

**② document-typography 文档排版新 Skill（PR #514）— [链接](https://github.com/anthropics/skills/pull/514)**
- **功能**：对 AI 生成文档做排版质量控制，覆盖孤儿词换行（1-6 词溢出到下行）、孤行段落（标题滞留页底）、编号错位等高频问题。
- **状态**：OPEN，创建于 3 月，截至 9 月仍未合并。

**③ scnet-hpc 高性能计算集群运维 Skill（PR #1615）— [链接](https://github.com/anthropics/skills/pull/1615)**
- **功能**：通过 profile 化 SSH + Slurm 工作流操作 SCNet HPC 集群，覆盖连接、分区、内存、模块、加速器配置及作业调度。
- **状态**：OPEN（8 月下旬创建，仍活跃更新）。
- **关注点**：垂直领域深耕型 Skill，代表社区社区向专业计算场景延伸的趋势。

**④ Hivemind 零成本多智能体编排 Skill（PR #1628）— [链接](https://github.com/anthropics/skills/pull/1628)**
- **功能**：让 Claude Code 将机械性工作委托给运行免费模型的无头 opencode worker，Claude 仅保留规划、审查与合并角色，显著降低 token 成本。
- **状态**：OPEN（8 月下旬提交，近期热门）。

**⑤ ServiceNow 全平台 Skill（PR #568）— [链接](https://github.com/anthropics/skills/pull/568)**
- **功能**：覆盖 ServiceNow 的 ITSM、ITOM、ITAM/SAM、FSM、HRSD、CSDM、IntegrationHub 等全模块，定位为平台级助手而非窄脚本工具。
- **状态**：OPEN（3 月创建，8 月仍有更新）。跨越多模块设计使其讨论度持续走高。

**⑥ self-audit 推理质量门控 Skill（PR #1367）— [链接](https://github.com/anthropics/skills/pull/1367)**
- **功能**：交付前先做机械式文件验证，再按损害严重度优先级执行四维推理审计（v1.3.0）。声明适用任何项目/技术栈/模型。
- **状态**：OPEN。与提案型 Issue #1385 形成关联生态（见下文）。

**⑦ testing-patterns 全栈测试 Skill（PR #723）— [链接](https://github.com/anthropics/skills/pull/723)**
- **功能**：覆盖测试哲学（Testing Trophy 模型、测什么 vs 不测什么）、单元测试（AAA 模式、命名规范、纯函数）、边界测试及全栈测试模式。
- **状态**：OPEN。

**⑧ pyxel 复古游戏开发（PR #525）— [链接](https://github.com/anthropics/skills/pull/525)**
- **功能**：驱动 pyxel-mcp（Python 复古游戏引擎 Pyxel 的 MCP server），用于像素/8-bit 游戏创作。
- **状态**：OPEN。属于小众但社区粘性高的垂直方向。

---

## 2. 社区需求趋势

从 Issues 中可以提炼出几大方向：

- **安全与信任边界（最深关切）**：Issue #492（👍2，43 评论）直指社区 Skills 在 `anthropic/` 命名空间下分发造成的信任边界滥用。用户可能对冒充官方、实质来自社区的 Skill 授予越权权限。这是目前评论数最高的单一 Issue。
- **组织级 Skill 分发与共享**：Issue #228（👍8，当前最高赞 Issue）诉求在 Claude.ai 内直接组织级共享 Skill，替代手动下载 .skill 文件并经由 Slack/Teams 线下传递的原始流程。
- **Skill 文件可靠性**：Issue #62（10 评论）报告多个已创建 Skill 全部消失且报错（5 天内 10 条讨论，典型数据丢失焦虑）；Issue #189（👍9 — 全仓库最高赞）指 `document-skills` 与 `example-skills` 两个插件安装后内容完全相同，导致重复 Skill 挤占上下文窗口。
- **评估工具链稳定性**：Issue #556（👍7）所述 `run_eval.py` 恒 0% 触发率，直接催生了 3 个独立修复 PR（#1298、#1099、#1050），是当前单点问题扩散最广的缺陷。
- **长上下文与性能焦虑**：Issue #1487 报告 `claude-api` Skill 单次工具调用即注入 ~156k tokens 挤爆上下文窗口；Issue #1329 提议 compact-memory 符号化记忆编码以节省长期运行 agent 的上下文开销。
- **质量门控（Quality Gate）方法论**：Issue #1385 提出三关卡流水线（任务前校准 → 对抗性审查 → 交付验证），与 PR #1367 的 self-audit 构成方法论协同。
- **平台扩展**：Bedrock 支持（Issue #29）、MCP 化封装（Issue #16）等平台诉求长期存在但热度偏低。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、功能明确，可能近期落地：

1. **document-typography（PR #514）** — 直击 AI 生成文档的普遍排版痛点，跨文档类型通用。3 月创建至今仍 open，但功能诉求真实且影响面广。
2. **scnet-hpc（PR #1615）** — 近两周仍在更新（8/20→8/24），活跃度高。HPC 社区用户画像清晰，示范了专业领域 Skill 的写法。
3. **testing-patterns（PR #723）** — 全栈测试覆盖完整，若合并将直接填补官方 Skills 在测试工程方法论上的空白。
4. **self-audit（PR #1367）** — 已有明确版本号（v1.3.0）与配套 Issue #1385 的流水线提案，方法论完整度高。
5. **skill-quality-analyzer + skill-security-analyzer（PR #83）** — 直接从五维质量评估 + 安全分析两方向为生态提供元层治理工具，与 Issue #492 的安全关切形成呼应。
6. **skill-creator 三连修复（#1298/#1099/#1050）** — 分别从 Windows 崩溃（两个独立 PR）和 0% recall 根因入手，涉及仓库核心工具 skill-creator，合并优先级和概率都较高。
7. **claude-api 模型退役更新（PR #1607）** — 数据准确性修复（标记 4 个已退役模型 ID），属于低风险高一致性的合并。

---

## 4. Skills 生态洞察

**社区最集中诉求是"可治理性"——安全信任边界、质量验证工具、上下文资源节约与可测评的评估链路构成四大主轴**，其中安全（#492）和重复内容（#189）分别拿下评论数第一与点赞数第一，合计揭示了同一深层焦虑：在官方命名空间下快速增长的第三方 Skill 正挑战生态的信任模型与资源纪律，社区迫切需要的已不只是更多 Skill，而是治理与质量保障的"元层 Skill"。

---

# Claude Code 社区动态日报 — 2026-09-06

## 1. 今日速览

昨日发布补丁版本 v2.1.263，仅含常规 bug 修复。社区讨论焦点集中在跨会话消息传递可靠性、deep-research 工作流缺陷、以及多起涉及无确认文件覆写的数据丢失类问题。多个旧 Issue 在今日集中更新，标志着维护团队正在批量梳理积压问题。


## 2. 版本发布

### v2.1.263

- **变更内容**：Bug fixes and reliability improvements（错误修复和可靠性改进），无新功能说明。
- 链接：[anthropics/claude-code Releases](https://github.com/anthropics/claude-code/releases)


## 3. 社区热点 Issues

### #92258 — SendMessage/ListAgents 跨会话消息在 2.1.258 → 2.1.260 升级后失效（Windows 桌面版）
- 状态：OPEN | 评论 2 | 创建于 2026-09-05 | 标签：bug, regression, platform:windows
- **摘要**：版本升级后，Windows 桌面应用中跨会话 `SendMessage`/`ListAgents` 对等消息传递中断，影响多会话协作场景。这是一个新报告的回归问题，值得高优先级关注。
- 链接：[Issue #92258](https://github.com/anthropics/claude-code/issues/92258)

### #92457 — Skill/命令参数替换偏移一位，且仅支持 $0/$1
- 状态：OPEN | 评论 2 | 创建于 2026-09-06（今日） | 标签：bug, has repro, platform:windows
- **摘要**：当 skill 或命令携带参数调用时，加载器以 0 起始索引将 `$0`、`$1` 替换为 `args[0]`、`args[1]`，与文档中 `$1` 应代表第一个参数的约定不符。此外仅支持 $0/$1 两个参数，扩展性受限。附带可复现用例，属于明确的功能缺陷。
- 链接：[Issue #92457](https://github.com/anthropics/claude-code/issues/92457)

### #91139 — 跨会话消息投递会杀死接收会话中的后台 Bash 任务
- 状态：OPEN | 评论 2 | 创建于 2026-09-01 | 标签：bug, has repro, platform:macos
- **摘要**：多会话协同工作时，向某会话投递消息会导致其正在运行的后台 Bash 任务被终止。对有状态长任务执行影响严重，已附带复现步骤。
- 链接：[Issue #91139](https://github.com/anthropics/claude-code/issues/91139)

### #81658 — 跨平台同步故障，Cowork 会话与聊天记录消失
- 状态：OPEN | 评论 17 | 👍 4 | 创建于 2026-07-27 | 标签：bug
- **摘要**：桌面端/Web/Android 三端同步异常，导致 Cowork 对话和会话记录丢失，疑似服务端事故。这是当前评论数最多且仍然开放的问题，社区关注度高。
- 链接：[Issue #81658](https://github.com/anthropics/claude-code/issues/81658)

### #76489 — deep-research 工作流：synthesize 阶段返回字面占位符 "test" 而非真实报告
- 状态：OPEN | 评论 2 | 创建于 2026-07-10 | 标签：bug, duplicate, area:agents
- **摘要**：内置 `deep-research` 工作流跑完 103 个 agent、完成 21 个来源和 83 条 claim 提取后，最终综合阶段返回了字面占位符文本 "test"。管线前段全部正常，末端输出异常，怀疑为工作流模板缺陷。
- 链接：[Issue #76489](https://github.com/anthropics/claude-code/issues/76489)

### #89280 — deep-research：claim 验证预算饥饿问题且截断从不提示用户
- 状态：OPEN | 评论 1 | 创建于 2026-08-24 | 标签：bug, has repro, platform:macos, area:skills
- **摘要**：工作流将问题分解为 5 个角度后，缺少一手来源的角度在验证阶段预算被耗尽，且截断行为从未向用户暴露。涉及核心验证机制的设计缺陷。
- 链接：[Issue #89280](https://github.com/anthropics/claude-code/issues/89280)

### #47926 — 支持跨设备恢复 Claude Code 会话
- 状态：CLOSED（标记为 duplicate） | 评论 12 | 👍 6 | 创建于 2026-04-14
- **摘要**：用户希望在不同设备间无缝恢复 Claude Code 会话。该请求共获得 6 个 👍，是过去 24 小时更新中获赞最多的功能请求。虽被标记为重复而关闭，但反映了强烈的跨设备诉求（与 #81658 的同步抱怨相关联）。
- 链接：[Issue #47926](https://github.com/anthropics/claude-code/issues/47926)

### #64559 — Auto 模式在用户目录执行未请求的通配符 rm，无确认删除文件
- 状态：CLOSED | 评论 8 | 创建于 2026-06-01 | 标签：bug, data-loss, area:sandbox, area:permissions
- **摘要**：Auto 模式下 Claude Code 执行了用户未请求的通配符 `rm`，直接删除用户文件且无任何确认。尽管状态为 CLOSED（标记 stale），评论数达 8 条，说明用户对自动化模式的安全边界存在担忧。
- 链接：[Issue #64559](https://github.com/anthropics/claude-code/issues/64559)

### #78273 — Claude Code 未确认即覆写已有用户文件，造成不可逆数据丢失
- 状态：CLOSED | 评论 5 | 创建于 2026-07-16 | 标签：bug, data-loss, area:permissions
- **摘要**：Claude Code 未征询用户即覆写了包含用户原创数学研究内容的文件，无任何警告。这是同一周内第三起无确认覆写类数据丢失报告（与 #64559、#72666 模式相同）。
- 链接：[Issue #78273](https://github.com/anthropics/claude-code/issues/78273)

### #72666 — AI 通过 WriteAllText 传入 null $content 覆写并清空文件，无安全确认
- 状态：CLOSED | 评论 5 | 创建于 2026-07-01 | 标签：bug, data-loss, platform:windows
- **摘要**：AI 执行 `WriteAllText` 且传入 null `$content`，导致文件被清空且无安全确认机制介入。Windows 平台上的数据丢失问题，社区持续关注写入操作的安全护栏。
- 链接：[Issue #72666](https://github.com/anthropics/claude-code/issues/72666)


## 4. 重要 PR 进展

### #89404 — validate-agent.sh：修复 set -e 导致首个警告即中止的问题，停止误报有效 agent
- 作者：bcherny | 更新：2026-09-06 | 状态：OPEN
- **功能**：修复 plugin-dev skill 的 `validate-agent.sh` 因 `set -euo pipefail` 交互导致的三个问题——首个警告即中止、计数器递增触发异常退出、以及误报。关联公开 Issue #83803。
- 链接：[PR #89404](https://github.com/anthropics/claude-code/pull/89404)

### #87077 — 修复 pr-review-toolkit：修复所有 agent 中的无效 YAML frontmatter
- 作者：anishsamant | 更新：2026-09-06 | 状态：OPEN
- **功能**：每个 agent 的描述均为包含 `Daisy: "..."` 等对话行的未加引号标量。YAML 解析器将 `key: value` 视为嵌套映射，在当前位置非法。此 PR 修复该格式问题。
- 链接：[PR #87077](https://github.com/anthropics/claude-code/pull/87077)

### #87079 — 修复 security-guidance：使 ** glob 模式匹配零深度路径
- 作者：anishsamant | 更新：2026-09-06 | 状态：OPEN
- **功能**：`_glob_match` 委托给 `fnmatch` 后，裸 `*` 已可跨 `/`，导致 `**/*.ts` 需要字面 `/` 才能匹配。这使顶级文件被 security-patterns.json 规则静默排除，与文档承诺的 "** 匹配任意深度" 相矛盾。
- 链接：[PR #87079](https://github.com/anthropics/claude-code/pull/87079)

### #56176 — Claude/book outline bootstrap toolkit
- 作者：LOUSTA79 | 更新：2026-09-06 | 状态：OPEN
- **功能**：图示标题疑似包含乱码内容，主题为书籍大纲引导工具包。长期开放的 PR，活跃度有限。
- 链接：[PR #56176](https://github.com/anthropics/claude-code/pull/56176)


## 5. 功能需求趋势

| 方向 | 热度 | 代表 Issue |
|---|---|---|
| **跨设备/跨会话同步与恢复** | 🔥🔥🔥 高 | #81658（跨平台同步故障）、#47926（跨设备恢复会话，获 6 👍） |
| **数据安全护栏** | 🔥🔥🔥 高 | #64559、#72666、#78273 — 多起无确认文件写入/删除引发数据丢失，社区强烈要求默认安全确认机制 |
| **deep-research 工作流改进** | 🔥🔥 中 | #76489（synthesize 阶段占位符 bug）、#89280（验证预算饥饿） |
| **多 Agent/跨会话消息传递可靠性** | 🔥🔥 中 | #92258（2.1.260 回归）、#91139（消息杀死后台任务） |
| **权限系统完善** | 🔥 中 | #81569（PreToolUse 钩子对 MCP 调用不生效） |


## 6. 开发者关注点

1. **数据丢失恐惧是首要痛点**：本期更新中有 6+ 条与数据丢失/无确认写入相关的 Issue（#64559、#72666、#78273、#74670 等）。尽管多数已被标记关闭或 stale，但社区对 Auto 模式下 AI 的文件操作缺乏安全确认持续表达担忧，该问题紧迫性最高。

2. **跨设备会话连续性成刚需**：#81658 的跨平台同步故障引发了 17 条评论讨论，而 #47926 请求跨设备恢复会话获 6 👍。开发者期望在桌面、Web 与移动端之间获得一致、可靠的会话体验。

3. **多会话协作还不够成熟**：#92258、#91139 分别揭示了跨会话消息传递在 2.1.260 版本中的回归，以及消息投递杀死接收方后台任务的严重副作用。对于将 Claude Code 用于并行多会话工作流的开发者影响重大。

4. **deep-research 工作流输出可靠性存疑**：#76489 中 synthesize 阶段返回字面占位符 "test"（在 21 个来源、83 条 claim 验证完成后），以及 #89280 中验证预算分配不透明，打击了用户对该内置工作流的信任。

5. **技能/命令参数系统存在缺陷**：#92457 揭示参数替换索引约定与文档不符且仅支持 $0/$1 两个参数，影响 skill/plugin 开发者的扩展体验。

6. **安全机制存在绕过路径**：#81569 指出 PreToolUse 钩子在 MCP 工具调用时不被强制执行的漏洞，使管理员配置的 "ask" 权限可被绕过，涉及权限模型的核心信任基础。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-06

## 今日速览

今日 Codex 仓库无新版本发布，主要动态集中在社区反馈与内部工程推进：Windows 平台相关的配额消耗异常、WSL 切换故障等问题持续发酵并获得大量讨论；与此同时，一批围绕原生语音库 Bazel 构建支持、TUI 会话管理与 guardianv2 配置重构的 PR 密集合并，显示底层构建系统与架构治理正在加速收敛。

## 社区热点 Issues

**1. 请求新增设置以关闭 60 秒自动回复 [#28969](https://github.com/openai/codex/issues/28969)**  
87 条评论，204 👍 —— 社区强烈希望控制 CLI 提问后的自动 60 秒超时行为，属于高赞高讨论的头部诉求之一，说明用户对交互节奏控制有明确需求。

**2. Windows 下切换 Agent Environment 至 WSL 后项目创建与删除失败 [#41290](https://github.com/openai/codex/issues/41290)**  
40 条评论，30 👍 —— ChatGPT Pro 用户在 App 26.825.31414 上遇到 WSL 切换后的项目操作故障，影响面广且具备可复现路径，是 Windows 平台当前最活跃的 bug 之一。

**3. Codex 配额异常耗尽与用量核算不一致 — 跨报告追踪 [#41220](https://github.com/openai/codex/issues/41220)**  
19 条评论，9 👍 —— 该 Meta Issue 汇总了多份“配额/点数消耗速度远超历史基线”的报告，将分散个案收拢为同一症状族，提示计费或用量统计可能存在系统性缺陷。

**4. Windows 桌面端：子任务已完成但 read_thread 返回空列表 [#40014](https://github.com/openai/codex/issues/40014)**  
17 条评论 —— 对话 UI 与线程读取接口数据不一致，涉及桌面端会话同步的可靠性问题。

**5. MCP 服务器随会话启动导致无头浏览器进程堆积 [#21984](https://github.com/openai/codex/issues/21984)**  
15 条评论，5 👍 —— 长生命周期会话中 MCP 服务器被无条件拉起，即使工具未被实际调用，进程生命周期管理亟需优化。

**6. Windows 下 git ls-files 高频调用导致内存池持续增长 [#16786](https://github.com/openai/codex/issues/16786)**  
12 条评论 —— 老牌 Windows 性能问题仍在活跃，`ntfs.sys` nonpaged pool 的无界增长与进程反复 spawn 直接相关。

**7. RFC：面向自进化 Agent 的交互式指令蒸馏与规则代谢 [#40575](https://github.com/openai/codex/issues/40575)**  
11 条评论 —— 提出通过 `/learn` 机制将交互经验蒸馏至 AGENTS.md，属于架构级方向提案，社区讨论热度一般但值得关注其演进。

**8. 允许现有会话在项目文件夹重命名后更新工作目录 [#26836](https://github.com/openai/codex/issues/26836)**  
9 条评论，5 👍 —— 会话保存的绝对路径无法感知文件夹重命名，影响日常项目重组场景。

**9. 远程控制注册：Business 账号失败而 Personal 账号成功 [#42575](https://github.com/openai/codex/issues/42575)**  
6 条评论 —— 同一 Windows 设备上不同订阅类型的注册结果不一致，指向账号权限映射或企业策略差异。

**10. 桌面端宠物组件占据幽灵线程导致界面卡在 “Thinking” [#39178](https://github.com/openai/codex/issues/39178)**  
8 条评论 —— 隐藏的 avatarOverlay 持有已完成的线程而主界面未能感知状态迁移，典型的前端状态管理缺陷。

## 重要 PR 进展

**1. 允许在后台迁移开启时进行受保护的 legacy resume [#43178](https://github.com/openai/codex/pull/43178)**  
修复迁移维护锁阻止 TUI legacy resume 快捷方式的问题，确保滚动发布期间旧恢复路径可用。

**2. 全新 TUI 启动改用服务器模型默认值 [#43177](https://github.com/openai/codex/pull/43177)**  
避免客户端本地保存的模型与推理参数与 app-server 生效配置不一致，保证启动即采用服务端权威配置。

**3. 按模型能力在会话启动时门控实验性上下文 [#43147](https://github.com/openai/codex/pull/43147)**  
此前仅校验 provider 与账号资格而未检查模型支持能力，子会话还会错误继承 token 预算相关设置，本次统一补全。

**4. 添加 Windows MSVC Bazel 目标以构建原生语音库 [#43144](https://github.com/openai/codex/pull/43144)**  
为 x64 与 ARM64 增加显式构建、运行时准备与链接目标，语音功能的原生依赖链在 Windows 上开始走 Bazel 正式通道。

**5. 通过 Bazel 目标暴露 Windows 原生构建工具 [#43126](https://github.com/openai/codex/pull/43126)**  
修补 MSVC 运行时与 Windows SDK 仓库，使其工具二进制不再在 setup 阶段被丢弃，Bazel 消费方得以获得完整工具链。

**6. 为原生语音构建增加显式 Windows 工具选择 [#43125](https://github.com/openai/codex/pull/43125)**  
规避 Cygwin 的 `link.exe` 与 MSVC 同名工具冲突，搜索路径不再可能选中非预期工具或 SDK 输入。

**7. 要求装配语音辅助包前必须准备运行时 [#43121](https://github.com/openai/codex/pull/43121)**  
语音辅助的原生绑定在进入 `main` 之前就需加载共享库，helper-only 打包无法满足该前置条件。

**8. TUI 会话命令新增托管 worktree 创建能力 [#43120](https://github.com/openai/codex/pull/43120)**  
新增 `/worktree` 命令支持在新签出中开启会话或 fork 当前会话，并为 `/new` 提供当前签出与新 worktree 双选项。

**9. 经由 app-server 持久化 subagent 与 memory 选择 [#43113](https://github.com/openai/codex/pull/43113)**  
新线程的 subagent 与内存记忆启用提示改为经服务端配置写入，当前线程保持不变量，配置结果与错误均向用户回传。

**10. Guardian 线程上下文迁移至 `guardianv2` 配置 [#43104](https://github.com/openai/codex/pull/43104)**  
将 `features.guardian_thread_context` 替换为 `features.guardianv2.thread_context`，配置 schema 同步更新，为 guardianv2 架构让路。

## 功能需求趋势

- **会话生命周期治理**：工作目录重命名后的路径更新（#26836）、历史会话清理（#42236）、legacy resume 与迁移的协调（#43178），均指向会话状态持久化与路径管理的精细化。
- **交互控制权回收**：自动回答超时开关（#28969）、结构化提问工具扩展至 Default 模式（#29104），用户正在要求对 LLM 的主动行为有更细颗粒度的控制。
- **原生构建链 Bazel 化**：语音库相关 8 个 PR 均围绕第三方程式的 Bazel 目标、工具链声明与运行准备展开，工程上正系统性收口原生依赖管理。
- **架构配置收敛**：guardianv2 配置迁移（#43104）、服务端模型默认值（#43177）、经 app-server 保存用户选择（#43113），三箭齐发指向客户端瘦身与配置中心化。

## 开发者关注点

- **Windows 平台是问题高发区**：本日报涉及的高讨论 bug 中 Windows 相关占据大半，WSL 切换、磁盘占用高、日志写入频繁、内存池膨胀等问题的覆盖面与优先级正在变得不可忽视。
- **配额/用量核算信任危机**：#41220 Meta Issue 与 #41957 的 9 倍消耗差异报告说明 Plus 与 Pro 用户均对计费面板与本地 token 证据的一致性产生怀疑，涉及信任的顶层问题持续发酵。
- **后台进程资源纪律**：MCP 服务器激进启动、git ls-files 高频 spawn、TRACE 日志对 SQLite 的高频写入，多个独立 Issue 指向同一底层问题——后台进程对系统资源缺乏节制。
- **桌面端状态同步不一致**：UI 渲染状态与实际会话/线程状态脱节（#40014、#39178）在本周仍无修复迹象，此类问题直接影响桌面用户对工具的信任度。

- **MCP、子代理（subagent）与记忆机制向服务端配置迁移**：从 PR 看，订阅选择和功能开关正从本地 TUI 状态向服务端对齐，预示着 Codex 的职能边界正在被重构，用户选择可能在未来获得跨设备一致性。

---
*数据周期：2026-09-06 | 数据来源：[github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-06

## 今日速览

今日发布 v0.60.0-nightly.20260906 预览版，核心修复集中在 SSE 流结束事件丢失问题。社区围绕 Agent 可靠性展开激烈讨论，其中 Subagent 在达到 MAX_TURNS 后误报 GOAL 成功（#22323）与通用 Agent 无限挂起（#21409）两个问题获得了最多的关注和反馈。此外，一批有关 MCP OAuth 安全加固与技能加载器修复的 PR 也已合并。

## 版本发布

**v0.60.0-nightly.20260906.g85aca163f**
- 地址：https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260905.g85aca163f...v0.60.0-nightly.20260906.g85aca163f
- 说明：每夜预览版，包含当天合并的修复。

## 社区热点 Issues（Top 10）

1. **[#22323] Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功**
   链接：https://github.com/google-gemini/gemini-cli/issues/22323
   P1 严重程度 bug。`codebase_investigator` subagent 在达到最大轮次限制后，结果仍被标记为 `status: "success"` 且 `Termination Reason: "GOAL"`，实际并未完成任何分析。该问题隐藏了中断，可能导致父 Agent 基于不完整结果继续执行，风险较高。社区 13 条评论，被认为是当前最值得关注的可靠性问题。

2. **[#21409] 通用 Agent 无限挂起**
   链接：https://github.com/google-gemini/gemini-cli/issues/21409
   P1 bug 且获得 8 个 👍。当 CLI 委派给通用 Agent 时（如创建文件夹这类简单操作），会无限挂起长达一小时。用户反馈除非明确指示不要委派给子 Agent，否则基本不可用。

3. **[#22745] AST 感知文件操作影响评估**
   链接：https://github.com/google-gemini/gemini-cli/issues/22745
   P2 功能增强 EPIC。支持 AST 感知的文件读取与搜索，可在单次调用中精确定位方法边界，减少大量工具调用的轮次消耗。代表社区对降低 token 消耗和提升 Agent 感知精准度的需求方向。

4. **[#25166] Shell 命令执行完成后卡在 "Waiting input"**
   链接：https://github.com/google-gemini/gemini-cli/issues/25166
   P1 bug 获得 3 个 👍。简单 CLI 命令执行完成后 CLI 仍挂起并显示 "Awaiting user input"。高频复现，疑似核心调度逻辑缺陷，影响日常基础使用体验。

5. **[#19873] 利用模型的 bash 原生能力实现零依赖 OS 沙箱**
   链接：https://github.com/google-gemini/gemini-cli/issues/19873
   P2 增强提案。建议让 Gemini 3 充分发挥其作为原生 bash 用户的能力（链式 `grep`/`cat`/`sed`/`awk`），通过零依赖 OS 沙箱和安全策略，使模型按工具调用的执行意图智能选择被允许的操作。

6. **[#21968] Gemini 不会主动使用自定义 Skills 和 Subagents**
   链接：https://github.com/google-gemini/gemini-cli/issues/21968
   P2 bug。用户反馈即使存在高度相关的自定义技能和子代理，Gemini 基本不会自发使用。需要用户在提示词中频繁显式指定，极大削弱了自定义工作流的自动化价值。

7. **[#26525] 为 Auto Memory 增加确定性脱敏并减少日志记录**
   链接：https://github.com/google-gemini/gemini-cli/issues/26525
   P2 安全缺陷。Auto Memory 功能会将本地 transcript 发送给后台模型，而脱敏（红action secrets）是在内容传输之后才进行，存在敏感信息泄漏风险。同时提出需减少日志记录量。

8. **[#22672] Agent 应主动阻止/劝阻破坏性行为**
   链接：https://github.com/google-gemini/gemini-cli/issues/22672
   P2 行为约束建议。在复杂 git 操作（`git reset`、`--force`）或数据库维护场景下，模型偶尔会选用破坏性命令，即使存在更安全的替代方案。希望引入 Agent 安全护栏机制。

9. **[#20079] `~/.gemini/agents/` 下的符号链接不被识别为 Agent**
   链接：https://github.com/google-gemini/gemini-cli/issues/20079
   P2 功能缺陷。用户通过 symlink 方式将自定义 Agent 链接到 agents 目录后，CLI 无法识别该 Agent。影响到将 `.gemini` 与 `.agents` 双目录兼容的工作流方案。

10. **[#21983] Browser Subagent 在 Wayland 环境下运行失败**
    链接：https://github.com/google-gemini/gemini-cli/issues/21983
    P1 兼容性 bug。browser subagent 在 Wayland 显示服务器下始终执行失败。P1 定位说明该问题阻碍了 Linux Wayland 用户的浏览器自动化能力。

## 重要 PR 进展（Top 10）

1. **[#29106] fix(core): 修复 EOF 后无空行导致 SSE 事件丢失**
   链接：https://github.com/google-gemini/gemini-cli/pull/29106
   已合并。修复了 `requestStreamingPost()` 中 SSE 解析遇到连接中断或无尾随空行时丢了最后一个缓冲事件的问题（通常导致 `finishReason` 丢失）。

2. **[#29117] fix(core): MCP OAuth 流程强制实施 RFC 9207 Issuer Identification**
   链接：https://github.com/google-gemini/gemini-cli/pull/29117
   已合并。在 MCP OAuth 授权中新增 OAuth 2.0 授权服务器 Issuer 身份校验，确保响应源一致，防止 token 被意外路由。属于安全加固。

3. **[#29195] fix(checkpoint): 针对非数组 history 降级处理而非崩溃**
   链接：https://github.com/google-gemini/gemini-cli/pull/29195
   修复 `/resume` 恢复会话时，若 checkpoint 文件为合法 JSON 但 `history` 字段不是数组，会抛出原始 `TypeError` 导致崩溃。现在会校验结构并降级为空 checkpoint。

4. **[#29098] fix(cli): 保持 useInputHistoryStore 状态更新器纯净**
   链接：https://github.com/google-gemini/gemini-cli/pull/29098
   修复 React 状态更新器内嵌副作用问题。`addInput()` 原本在 updater 函数内调用 `setPastSessionMessages()` 及 `recalculateHistory()`，违反了 React 状态纯度要求，可能引发渲染异常。

5. **[#29205] fix(cli): MCP prompt 文本直接提交而非 JSON 编码**
   链接：https://github.com/google-gemini/gemini-cli/pull/29205
   提交 MCP prompt 响应文本时将不再经过 JSON 编码，保留内嵌引号和换行。新增回归测试，修复 MCP 服务器返回特殊字符时的输出异常。

6. **[#29125] fix(cli): hooks 迁移中 hook 超时由秒转毫秒**
   链接：https://github.com/google-gemini/gemini-cli/pull/29125
   修复 Claude Code 迁移到 Gemini CLI 时 hook 超时单位不一致问题。Claude Code 以秒计（默认 60），而 Gemini CLI 的 hook runner 以毫秒计（60000）。若不转换会导致超时立刻触发。

7. **[#29163] fix(cli): 修复 Git 仓库内认证时的启动崩溃**
   链接：https://github.com/google-gemini/gemini-cli/pull/29163
   P1 安全修复。当 Gemini CLI 在 macOS Seatbelt 等受限权限环境中的 Git 仓库内启动时，`useGitBranchName` hook 触发崩溃。已增强容错处理。

8. **[#28967] fix(cli): 修复静态刷新时清空终端回滚缓冲**
   链接：https://github.com/google-gemini/gemini-cli/pull/28967
   在标准终端模式（非 alternate buffer）下，`refreshStatic()` 错误调用 `stdout.write(ansiEscapes.clearTerminal)`，导致用户的终端回滚历史被清空。已修复。

9. **[#28968] fix(core): 符号链接目录去重，避免 skills 重复发现**
   链接：https://github.com/google-gemini/gemini-cli/pull/28968
   解决 Windows Junction 或 symlink 将 `.gemini` 链接到 `.agents` 时引发的重复扫描问题。修复后 CLI 只扫描一次目录树，消除 skills 重复注册。

10. **[#28966] docs(extensions): 修正 excludeTools 示例（此前从未生效）**
    链接：https://github.com/google-gemini/gemini-cli/pull/28966
    文档修复。此前示例中的 `run_shell_command(rm -rf *)` 这类精确名称匹配写法永远无法排除任何工具，已更新为裸工具名（bare tool name），命令级拦截应配置 policy engine。

## 功能需求趋势

- **Agent 可靠性治理**：大量 P1 issue 集中在 Agent 挂起（#21409）、中断被误报（#22323）、shell 命令执行卡死（#25166）等问题上，说明社区当前最迫切的需求是 Agent 执行状态的可预期性与正确的终态判定。
- **AST-aware 代码理解**：#22745 提出的 AST 感知文件读取/搜索/映射，旨在减少工具调用次数、降低 token 消耗，已成为 P2 规划方向。
- **安全与行为约束**：Auto Memory 脱敏时机问题（#26525）、危险 shell 命令的主动拦截（#22672）、git 仓库内启动崩溃（#29163）、MCP OAuth RFC 9207 加固（#29117）等多条线索指向安全策略和 Agent 行为护栏是下一阶段发力重点。
- **Skills/Subagent 生态可发现性**：#21968（不主动使用 skills）、#20079（symlink 不被识别）表明社区希望自定义技能和 Agent 能被模型自然地编排利用，而非靠显式指定。
- **环境兼容性**：Wayland 下 browser agent 失败（#21983）、macOS Seatbelt 环境崩溃（#29163）揭示跨平台系统环境的兼容性仍需持续投入。

## 开发者关注点

- **等待体验差**：Agent 执行挂起或停顿无反馈是高频痛点，用户希望有明确的进度指示或超时中断机制。
- **状态误报**：Agent 已完成（或失败）后 CLI 仍然显示等待输入或误报成功，直接破坏了自动化脚本的可靠性，是当前 P1 问题的共性根因。
- **Shell 操作可控性**：开发者明确不希望模型生成散落的临时脚本或执行带破坏性的 git/DB 操作。期待通过沙箱 + 意图路由 + 策略引擎的组合来适度"管住"模型的 bash 操作。

---
*本日报基于 google-gemini/gemini-cli GitHub 仓库公开数据生成，供技术评估参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-06

## 今日速览

今日无新版本发布或新 PR 合入，社区动态集中在 Issue 讨论与反馈上。值得关注的是，多个关键问题（包括 GHEC 数据驻留租户下 `copilot -p` 模式 401 认证失败、企业默认模型不可用、Windows 25H2 沙箱不支持等）仍在持续发酵或已于今日关闭，社区对 BYOK 模式下提示缓存被静默禁用（成本增加约 5 倍）以及远程会话 UI 兼容性问题的关注度较高。

## 社区热点 Issues

### 1. [#4527 — GHEC 数据驻留租户下 `copilot -p` 模式 401 认证失败（已关闭，👍 4）](https://github.com/github/copilot-cli/issues/4527)

**核心问题：** 自 1.0.81-1 起，在启用数据驻留功能的 GHEC 租户（`<tenant>.ghe.com`）上，非交互式提示模式（`copilot -p`）启动时因模型目录获取请求错误地指向 `api.githubcopilot.com` 而非租户端点而失败，交互模式不受影响。该问题已于今日关闭，说明修复方案已落地。尽管 Issue 已关闭，但考虑到其影响范围（企业数据驻留用户）和点赞数（4 个），仍值得企业用户关注验证。

### 2. [#4692 — 企业默认模型不可用（开放中，4 条评论）](https://github.com/github/copilot-cli/issues/4692)

**核心问题：** 用户在组织层面将默认企业模型设置为 `MAI-Code-1.1-Flash`，VS Code 和 GitHub Desktop 均能正确识别，但 CLI 报错提示该模型不可用。此问题与近期企业模型相关讨论形成了呼应，表明 CLI 在企业模型同步方面尚存在短板，值得企业管理员关注。

### 3. [#4695 — MCP OAuth token 缓存键重复导致频繁重新认证（开放中，5 条评论）](https://github.com/github/copilot-cli/issues/4695)

**核心问题：** 使用 OAuth（PKCE，公共客户端）的 HTTP 型 MCP 服务器在会话间无法可靠复用 token——缓存键哈希异常导致重复生成新条目，用户被迫频繁重新认证。这是目前评论数最多的开放 Issue 之一，影响了使用 MCP 生态的重度用户，涉及身份认证与 MCP 两个核心模块。

### 4. [#4720 — BYOK 模式静默禁用提示缓存，成本增加约 5 倍（开放中）](https://github.com/github/copilot-cli/issues/4720)

**核心问题：** Copilot CLI 1.0.82 在 BYOK 模式下发送的请求不携带提示缓存声明，导致整个会话中每次交互都全价重发完整上下文，成本约增加 5 倍。此问题对 BYOK（自带密钥）用户影响显著，直接关乎使用成本，预计会吸引较多关注。

### 5. [#4734 — 升级至 Desktop 2.98.0 / Runtime 1.1.15 后所有项目会话提示 "Worktree missing"（开放中）](https://github.com/github/copilot-cli/issues/4734)

**核心问题：** 应用自动升级后，所有基于 worktree 的项目会话（包括已有和新创建的）均显示"Worktree missing"。该 Issue 创建于昨天（9 月 5 日），更新于今日，属较新的回归性问题，影响面广（影响所有项目会话），需要官方尽快定位。

### 6. [#3894 — 子代理切换触发 `agentStop`，导致 `/review` 永不结束（开放中，👍 1）](https://github.com/github/copilot-cli/issues/3894)

**核心问题：** 用户注册的自定义 hook 在 `agentStop` 事件中执行指令改进逻辑，但子代理切换时也会触发该事件，导致 `/review` 流程无法正常结束/返回。该问题已开放两个多月仍未解决，涉及 agents 与 plugins 两大模块的交互逻辑，影响自定义工作流的稳定性。

### 7. [#4735 — 工具调用前的助手文本被误判为推理内容并折叠（开放中）](https://github.com/github/copilot-cli/issues/4735)

**核心问题：** 当模型在同一轮中输出大量推理块、多段用户可见文本和工具调用时，CLI 会将文本块误归为推理内容并以"Thought for Ns"形式折叠，用户永远看不到实际内容。此为昨日新提交的终端渲染相关缺陷，直接影响用户体验与对话可读性。

### 8. [#3498 — GitHub Mobile (Android) 无法渲染远程会话 UI（开放中，👍 3）](https://github.com/github/copilot-cli/issues/3498)

**核心问题：** Android 端 GitHub Mobile 能收到远程 CLI 会话的推送通知（WebSocket 正常），但会话内容无法在 UI 中渲染，仅显示静态确认页面。该问题自 5 月以来已开放超过三个月，获得 3 个点赞，移动端远程会话的兼容性问题持续未得到解决。

### 9. [#4706 — 工具调用间歇性输出畸形调用标记并无提示地静默失效（开放中）](https://github.com/github/copilot-cli/issues/4706)

**核心问题：** 工具/函数调用间歇性输出畸形调用标记（`court` / `<invoke>`），导致工具调用静默失败且无任何提示。值得关注的是，该 Issue 由 Copilot CLI 代理自身（Claude Opus 4.8）自动生成而非人工编写，环境为 1.0.82 版本——工具调用可靠性是 CLI 核心功能，此问题需尽快修复。

### 10. [#4694 — WSL2 下 CLI 消耗约 31 GB 内存和 57% CPU（开放中）](https://github.com/github/copilot-cli/issues/4694)

**核心问题：** 在 WSL2 中运行 Claude Opus 5（High Effort 模式）处理长会话时，上下文使用量约 47% 时内存占用达约 31 GB RSS、CPU 占用 57%。该 Issue 涉及 Linux 平台性能问题，虽未标明严重影响人数，但资源消耗量级已超出常规预期，需关注后续社区反馈。

### 11. [#4652 — Windows 25H2 上报 "Sandboxing is enabled but is not supported on this host"（开放中）](https://github.com/github/copilot-cli/issues/4652)

**核心问题：** 最新 Windows 25H2 构建版上使用 `copilot --experimental --sandbox` 时提示沙箱在此主机不受支持。该问题影响 Windows 最新版本用户对实验性沙箱功能的使用，目前已收到 2 条评论，处于 triage 阶段。

### 12. [#4677 — 非流式请求仍收到 `streaming: false` 的流式通知（已关闭）](https://github.com/github/copilot-cli/issues/4677)

**核心问题：** 在服务器模式下，`session.create` 请求中设置 `streaming: false` 后，仍会收到根代理的 `assistant.message_delta` 通知。该问题已于昨日/今日关闭，与 #4527 相同，表明团队正在推进一批服务器模式的修复。

## 重要 PR 进展

本时段内无新的 Pull Request 更新或合入记录。

## 功能需求趋势

从近期 Issues 中可以提炼出以下功能需求方向：

- **企业级能力完善**（#4692、#4272、#4527）：企业自定义模型、模型策略同步及数据驻留租户支持是持续关注的主题，尤其在 GHEC 场景下 CLI 的适配性落后于 VS Code 等其它客户端工具。
- **Prompt 缓存与成本控制**（#4720）：BYOK 场景下提示缓存失效直接造成约 5 倍成本增加，高效利用上下文缓存已成为高优先级诉求。
- **MCP 生态稳定性**（#4695）：MCP OAuth token 跨会话可靠复用问题直接影响使用体验，身份认证与缓存机制需要优化。
- **远程会话与移动端支持**（#3498、#4734）：远程会话 UI 在 GitHub Mobile 上的渲染问题长期存在，加上升级后 worktree 相关的回归性问题，移动/远程开发场景的稳定性亟待提升。
- **键盘交互与终端渲染**（#4736、#4735）：Ctrl+E 接受内联补全建议（对齐常见 Emacs 风格）是小型但明确的体验改进诉求；同时工具调用前的文本被误判为推理内容的问题也需修复。

## 开发者关注点

- **成本敏感度上升**：BYOK 模式下提示缓存被静默禁用导致成本增加约 5 倍（#4720），反映出开发者对自己密钥调用场景下的成本控制越来越敏感。
- **企业环境适配滞后**：CLI 在企业模型选择、数据驻留租户支持方面落后于 VS Code 和 GitHub Desktop（#4692、#4527），企业管理员期望 CLI 能与 GitHub 生态其它客户端保持一致行为。
- **工具调用可靠性是核心痛点**：畸形调用标记导致工具静默失效（#4706）、`agentStop` 误触发导致流程挂起（#3894）、文本被误折叠为推理内容（#4735）——这三类问题均直接损害了 CLI 作为代理工具的核心价值。
- **资源消耗与平台兼容性**：WSL2 下的高内存/CPU占用（#4694）以及 Windows 最新版本沙箱不可用（#4652），说明 CLI 在主流开发环境（WSL2、Windows 25H2）上的生产级稳定性仍待加强。

---

*本日报基于 GitHub Copilot CLI 仓库公开数据整理，数据截至 2026-09-06。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-09-06

## 今日速览

今日无新版本发布，但社区有 4 个活跃问题上榜，其中 **远程控制本地会话功能（#1282）** 持续升温（32👍、13 评论），成为当前社区最受关注的增强需求。PR 侧活跃度较低，有一项针对 Moonshot API 双编码参数的修复补丁（#2513）正在推进中。

**热门标签**：#1282 领先、远程控制呼声高

## 社区热点 Issues

1. **[Feature Request] Remote Control — 从手机/平板/浏览器继续本地会话**（#1282｜OPEN｜👍 32｜💬 13）
   该 Issue 提议为 Kimi Code CLI 增加远程控制能力，使用户能在离开电脑后，通过手机、平板或浏览器无缝接管本地会话，保障工作流连续性。这是当前社区点赞数最多的议题，充分反映用户对**移动场景与多设备协同**的强烈意愿，具备较高优先级的产品参考价值。
   👉 [MoonshotAI/kimi-cli Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

> 注：其余议题今日仅有关闭/内容更新，活跃度为 0~1 次互动，关注度相对有限，不在此单列推荐。如有需要可继续浏览仓库 Issue 列表获取更多背景。

## 重要 PR 进展

1. **修复 kosong 组件对双重编码工具调用参数的处理（#2513｜OPEN）**
   该 PR 旨在修复 Moonshot API 返回的 `function.arguments` 中嵌套数组/对象被字符串化（double-encoding）的问题。修复前，对响应仅做一次 `json.loads` 会导致 `todos` 等字段仍为字符串，从而引发 Pydantic 解析异常（`Input should...`错误）。PR 选择递归解码策略，对嵌套结构逐层还原，确保工具调用参数能被正确验证与解析，是提升 Agent 场景下调用稳定性的有力修复。PR 处于开放状态，代码改动值得关注。
   👉 [MoonshotAI/kimi-cli PR #2513](https://github.com/MoonshotAI/kimi-cli/pull/2513)

## 功能需求趋势

综合近 24 小时活跃 Issues，社区当前最关注的功能方向集中在：

- **远程/跨设备协同**：#1282 明确提出远程接管本地会话，紧跟开发者移动办公与设备间切换的长期需求
- **IDE 集成兼容性**：#1284（Windows 平台 Zed IDE ACP 面板无法启动）反映出 Windows 用户对编辑器内嵌体验的稳定性期望，仍是集成工作中不可忽视的一环

## 开发者关注点

- **多端工作流延续**：开发者期望会话不因离开终端而中断，对远程操作提出高需求
- **授权稳定性**：#1350 提到的“Authorization failed, please check your login status”提示频繁出现，表明登陆态保持是用户操作中的高频痛点
- **终端信息可视化**：#1349 反映 shell 提示符不再展示当前目录及 Git 分支，用户需求配置化显示，以便在交互中快速确认代码上下文

---
*数据窗口：2026-09-06 过去 24 小时，来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-06

## 今日速览

今日无版本发布，社区聚焦于多项 Bug 修复与功能增强。值得关注的是：订阅计费与请求限制问题（#47547、#35112）引发用户对配额计算逻辑的质疑；“技能”(Skills) 与“能力偏好”抽象成为 PR 主线（#47595、#43536 系列）；TUI 在多操作场景下的稳定性（#39570）、启动性能下降（#46976）等问题持续被报告。此外，数据库层面的修复（页回收 #47589、旧会话隐藏 #35750）表明底层存储迁移仍是隐患来源。

## 社区热点 Issues

**1. Go 订阅被阻断：月用量按各模型百分比求和显示 100%，而非实际金额 vs $60 上限**
- #47547 | 评论 4 | 👍 1 | 2026-09-06 更新
- 用户订阅被误判为超额（实际各指标为 0%，费用未超限），直指用量聚合逻辑缺陷，可能导致付费用户被错误限流。
- https://github.com/anomalyco/opencode/issues/47547

**2. 6MB 请求体限制阻断 Qwen3.7Plus 合法图片输入（OpenCode Go）**
- #35112 | 评论 4 | 👍 1 | 2026-07-03 创建
- 图片附件触发 Bad Request，6MB 上限过小，影响多模态模型实际使用，属于平台级限制问题。
- https://github.com/anomalyco/opencode/issues/35112

**3. 会话中途无法与任何模型交互，UI 无反馈**
- #47587 | 评论 2 | 2026-09-06 创建
- 用户发送提示后界面无回显、无法判断请求是否发出，属严重的会话稳定性问题。
- https://github.com/anomalyco/opencode/issues/47587

**4. @ 文件提及不包含启动后新建的文件**
- #32747 | 评论 15 | 👍 13 | 2026-06-17 创建
- 新文件需重启才能被索引，属高频工作流痛点，已完成一次模块调用。
- https://github.com/anomalyco/opencode/issues/32747

**5. MCP 工具未发送给本地 OpenAI 兼容模型（tools 数组为空）**
- #39164 | 评论 2 | 2026-07-27 创建
- 本地 Ollama 代理场景下 MCP 工具定义丢失，模型收不到工具导致只能返回纯文本——本地模型链路的核心缺陷。
- https://github.com/anomalyco/opencode/issues/39164

**6. TUI 多操作时崩溃（Windows git-bash + GitLab MCP）**
- #39570 | 评论 5 | 2026-07-29 创建
- 连续发起多个 MCP 请求（如 gitlab_list_merge_requests）后 TUI 崩溃，1.18.9 版本仍存在。
- https://github.com/anomalyco/opencode/issues/39570

**7. Mac 上近期版本启动明显变慢（M5 芯片）**
- #46976 | 评论 2 | 👍 1 | 2026-09-03 创建
- 仅配置一个 Chrome DevTools MCP，无插件，启动需数秒，与近期版本回归相关。
- https://github.com/anomalyco/opencode/issues/46976

**8. 大量内容写入时 TUI 卡在 “Preparing to write…”**
- #31916 | 评论 5 | 👍 1 | 2026-06-11 创建
- 写 150+ 行内容时 diff 渲染无界导致界面冻结，小内容正常——渲染性能瓶颈。
- https://github.com/anomalyco/opencode/issues/31916

**9. 前台子代理失败时不返回 task_id，父代理无法恢复会话**
- #39196 | 评论 6 | 👍 3 | 2026-07-27 创建
- 任务工具仅返回裸错误字符串，子代理部分工作成果丢失，需补充任务句柄。
- https://github.com/anomalyco/opencode/issues/39196

**10. 升级至 1.17.x 后旧会话被隐藏（迁移时 path 列未回填）**
- #35750 | 评论 3 | 2026-07-07 创建
- 1.14.29 → 1.17.14 升级后会话选择器只显示部分会话，反映迁移脚本完整性不足。
- https://github.com/anomalyco/opencode/issues/35750

## 重要 PR 进展

**1. fix(tui): 根据终端宽度动态扩展 DialogModel 尺寸**
- #47599 | 2026-09-06 | 修复 #47600
- DialogModel 固定为 “medium”（60 列），在宽屏终端下显示不充分，改为动态计算。
- https://github.com/anomalyco/opencode/pull/47599

**2. fix(core): 增量回收已删除的数据库页**
- #47589 | 2026-09-06 | 修复 #47591
- 处理数据库膨胀问题，相关 #31526、#33356 未在本修复范围。
- https://github.com/anomalyco/opencode/pull/47589

**3. fix(client): 流从未连接时按退避策略重连**
- #47204 | 2026-09-04 更新 | 修复 #47062
- 事件流客户端此前固定 1 秒重试，现改为退避策略，并处理长期无连接场景。
- https://github.com/anomalyco/opencode/pull/47204

**4. feat: 技能启用/禁用 + 偏好 API**
- #47595 | 2026-09-06 | 关联 #43536
- 新增全局技能启用/禁用机制，承接此前能力偏好抽象工作。
- https://github.com/anomalyco/opencode/pull/47595

**5. fix(core): 技能工具收到 agent 名称时给出提示**
- #46940 | 2026-09-03 更新 | 修复 #46568
- 当模型以子代理名称调用 skill 工具时，工具返回提示，避免静默失败。
- https://github.com/anomalyco/opencode/pull/46940

**6. fix(ai): HTTP SSE 流上遵循 chunkTimeout 配置**
- #46802 | 2026-09-02 更新 | 修复 #46692
- chunkTimeout 此前被提供方接受但从未读取，现已实际生效。
- https://github.com/anomalyco/opencode/pull/46802

**7. fix(console): 优雅处理 OAuth 回调错误**
- #47592 | 2026-09-06 | 修复 #47590、#40232、#39414
- 用户取消登录或回调出错时返回清晰错误提示，而非静默失败或崩溃。
- https://github.com/anomalyco/opencode/pull/47592

**8. feat(server): 单请求读取 Location 目录**
- #47578 | 2026-09-06
- `data.location.sync` 原需 13 次请求（1 个 get + 12 个 list），现合并为单请求，显著降低每次 /cd、会话挂载、重连时的开销。
- https://github.com/anomalyco/opencode/pull/47578

**9. [自动化] feat(i18n)：新增波斯语（fa）语言环境**
- #40387 | 2026-08-04 创建 | 2026-09-06 合并
- 补齐应用/UI/桌面端的波斯语翻译，基于 docs/glossary 的 fa 工作 #37184。
- https://github.com/anomalyco/opencode/pull/40387

**10. docs: 生态插件列表新增 opencode-memory-pro、rlm-opencode、oh-my-agentmemory**
- #47594 / #47596 / #47593 | 2026-09-06
- 三项文档 PR 扩充官方生态插件表，其中 oh-my-agentmemory 聚焦记忆策略指令注入（#47580 重复提交已关闭）。
- https://github.com/anomalyco/opencode/pull/47594
- https://github.com/anomalyco/opencode/pull/47596
- https://github.com/anomalyco/opencode/pull/47593

## 功能需求趋势

- **权限审批动态切换**：#41909（/approve on|off）与 #47579（/auto 命令）并行提出，社区希望运行时切换逐步骤审批模式，而不只是在启动时通过 `permission.mode` 固定。
- **技能/插件可治理性**：全局技能启用/禁用 API（#47595）与“能力偏好”抽象（#43536）先后落地，方向是让用户和模型都能按会话或全局开关能力项。
- **会话持久化与生命周期钩子**：#28695 要求会话生命周期上下文钩子以维持插件状态，配合 DB 迁移修复（#35750）与页回收（#47589），存储层稳定性成为社区关注重点。
- **国际化持续推进**：继 docs/glossary 的 fa 翻译后，应用层波斯语 PR 已合并，预计更多语言将跟进。
- **性能与启动时间**：#46976（Mac 启动变慢）、#31916（大 diff 渲染冻结）、#39570（TUI 多操作崩溃）三条线索指向 TUI 与核心渲染路径需要进一步优化。

## 开发者关注点

- **用量计费透明度**： #47547（Go 订阅被误阻断）与 #35112（6MB 请求体限制）均指向计费/配额系统逻辑不透明、阈值设置不合理。
- **会话恢复能力不足**：前台子代理失败后无 task_id（#39196），会话中途无法与模型交互（#47587），中断恢复机制不完善。
- **本地/代理模型兼容性**：MCP 工具数组为空（#39164）与第三方企业模型不可用（#34030）显示非官方模型接入链路仍有兼容缺口。
- **旧库与新版本的迁移断层**：旧会话被隐藏（#35750）、升级后资源占用飙升（#35009）、Termux 无法运行（#10504）三个关闭/进行中的问题均涉及版本升级的迁移或二进制兼容性。

---

以上为 2026-09-06 日报全部内容。所有信息均来源于 GitHub issue/PR 数据，点击链接可查看详情。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-09-06

## 今日速览

昨日发布 v0.85.1，带来 **GPT-6 Astra** 模型支持（通过 OpenAI API Key 与 Codex 订阅使用）。社区讨论热度集中在 `openai-codex` 连接可靠性问题（#4945，76 条评论），同时涌现多个关于模型网关（LLM Gateway、Meta/Muse）的新 PR，以及若干 TUI 与扩展机制的修复。

---

## 版本发布

### v0.85.1

**新功能：**

- **GPT-6 Astra** — 支持通过 OpenAI API Keys 和 OpenAI Codex 订阅使用。
    - [API Keys 文档](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys)
    - [OpenAI Codex 文档](https://github.com/earendil-works/pi/blob/v0.85.1/packages/cod...)

---

## 社区热点 Issues

### 1. openai-codex 连接可靠性问题
[#4945](https://github.com/earendil-works/pi/issues/4945) · 76 评论 · 👍 32 · 进行中

**摘要：** `openai-codex` / `gpt-5.5` 有时会让 TUI 卡在 "Working..." 状态，无流式文本、无工具调用、无错误提示，只能按 Escape 中断。

**值得关注：** 社区最高赞 Issue，评论数断层领先，影响核心交互流程；已持续 3 个多月仍未关闭，属于高频痛点。

### 2. Windows 使用体验调查
[#7547](https://github.com/earendil-works/pi/issues/7547) · 52 评论 · 👍 2 · 进行中

**摘要：** 维护者发起讨论，收集 Windows 上运行 Pi 的方式与问题，以确定优化方向（bug 修复、文档、发行策略）。

**值得关注：** 官方主动收集 Windows 生态反馈，直接决定后续资源分配，Windows 用户值得参与。

### 3. GPT-6 Astra 被路由到不受支持的 Chat Completions 端点
[#9209](https://github.com/earendil-works/pi/issues/9209) · 3 评论 · 已关闭

**摘要：** Pi 将 `github-copilot/gpt-6-astra` 路由到 `/chat/completions`，Copilot 返回 `400: model not accessible via /chat/completions`。

**值得关注：** 与 v0.85.1 新版模型直接相关，尽管已关闭，但说明 Astra 模型端点在 Copilot 下的接入仍存在问题，可能有后续修复。

### 4. Codex：图片密集型工具结果应改用文件引用
[#8617](https://github.com/earendil-works/pi/issues/8617) · 3 评论 · 进行中

**摘要：** 建议 Codex 场景下将图片字节保存在本地，出站时以 ChatGPT `file_id` 引用替代每次请求重放 base64。

**值得关注：** 直接关系到大模型工具调用的 token 开销与延迟，对重度使用视觉工具的用户影响明显。

### 5. sonnet-5 经网关调用约 13% 的编辑工具参数被截断
[#9212](https://github.com/earendil-works/pi/issues/9212) · 3 评论 · 已关闭

**摘要：** `anthropic/claude-sonnet-5`（经 `vercel-ai-gateway`）一周内 134 次 `edit` 调用中 18 次因参数截断（如 `{"p...`）导致 schema 验证失败，而 `fable` 为 0%。

**值得关注：** 输出 token 显示输入已完整生成但参数被截断，属供应商侧或网关侧问题，影响 Agent 工具链路的稳定性。

### 6. 终端无故回滚到会话开头
[#5023](https://github.com/earendil-works/pi/issues/5023) · 19 评论 · 👍 3 · 已关闭

**摘要：** 终端会突然跳转到会话开头并快速滚回底部，用户无任何操作。

**值得关注：** 高频出现但难以复现的 TUI 异常，长时间存在说明排查难度大，影响阅读长会话时的体验。

### 7. `PI_OFFLINE` 静默禁用所有模型发现
[#8684](https://github.com/earendil-works/pi/issues/8684) · 5 评论 · 进行中

**摘要：** `PI_OFFLINE` 文档声称只禁用启动时网络操作，实际还禁用了所有 provider 的模型目录网络发现。

**值得关注：** 文档与实际行为不一致，离线用户可能因不知道此副作用而困惑，属于文档/行为对齐问题。

### 8. 会话中途调用 skills 的需求
[#8457](https://github.com/earendil-works/pi/issues/8457) · 3 评论 · 👍 4 · 已关闭

**摘要：** Prompt templates 从 0.84 起支持首行之后中途调用并内联展开，skills 目前只支持在输入最开头以 `/skill:name args` 调用。

**值得关注：** 功能一致性需求，👍 4 说明有一定社区诉求。对应修复 PR #9214 已被合并，功能即将可用。

### 9. 为扩展暴露模型运行时
[#8791](https://github.com/earendil-works/pi/issues/8791) · 2 评论 · 👍 4 · 已关闭

**摘要：** 希望 `ExtensionContext` 以只读 `modelRuntime` 属性暴露其底层 `ModelRuntime`，支持构建隔离的进程内 Agent。

**值得关注：** 👍 4 为今日最高赞的功能请求之一，反映扩展开发者对模型层能力的深层需求。

### 10. 代理重试退避需要上限
[#8826](https://github.com/earendil-works/pi/issues/8826) · 3 评论 · 进行中

**摘要：** 建议为 coding-agent 的指数级代理重试延时增加可配置上限，使长重试在有限区间内稳定。

**值得关注：** 针对长时间上游中断场景的稳定性改进，代码审查类功能需求。

---

## 重要 PR 进展

### 1. 新增 LLM Gateway 与 DevPass 提供商
[#7610](https://github.com/earendil-works/pi/pull/7610) · 进行中

为 Pi 内置添加 LLM Gateway（OpenRouter 风格路由器）作为 `openai-completions` providers，由 LLM Gateway 团队贡献，替代被自动关闭的 #7480。

**关注点：** 新提供商意味着更多模型路由选择，值得网关用户关注。

### 2. TUI LaTeX 渲染回退 —— 需关注
[#8827](https://github.com/earendil-works/pi/issues/8827) · 进行中

含旧式字体切换（`\rm`、`\bf`、`\it`）的数学块整体回退为原始源码，而非渲染为 Unicode 数学符号。

**值得关注：** 对学术/数学写作场景影响较大，是一个相对小众但明确的渲染缺陷，已持续一周仍开放。

### 3. 新增 Meta Provider（Muse 订阅 OAuth）
[#9096](https://github.com/earendil-works/pi/pull/9096) · 进行中

解决 #7543，新增 Meta provider 及 Muse 订阅 OAuth 流，由其 API token 每日从身份令牌重新铸造、流式支持基本成型。

**值得关注：** 又一家大型供应商完成适配，扩展 Pi 的模型生态版图。

### 4. 新增 Nix flake
[#9137](https://github.com/earendil-works/pi/pull/9137) · 进行中

作者 mitsuhiko 添加 coding-agent 的 Nix flake（WIP）。

**值得关注：** NixOS 用户一直关注官方 Nix 支持，与 #9163 剪贴板简化同属改善 NixOS 构建链的工作。

### 5. 修正 OpenRouter `:free` maxTokens 超出基础模型限制
[#9224](https://github.com/earendil-works/pi/pull/9224) · 已关闭

OpenRouter `:free` 目录条目常宣称比基础模型更大的 maxTokens/contextWindow。Pi 默认取目录值作为请求 max_tokens，比如选择 `minimax/minimax-m3:free` 会发出约 943k 的请求而触发 GMIC...（截断）。

**关注点：** 修复免费模型因超出上下文限制而请求失败的问题，免费模型用户的实际痛点。

### 6. 在活动会话操作期间拒绝重载
[#9222](https://github.com/earendil-works/pi/pull/9222) · 进行中

RPC 模式下扩展命令可在工具运行时触发重载，导致工具执行成功后其包装器访问失效的 runner，Pi 误存并发送错误结果给模型。

**关注点：** 修复扩展/RPC 场景下的竞态条件，对扩展开发者和 RPC 用户影响大。

### 7. 保留宿主 UI 原型方法与 Proxy 陷阱
[#9219](https://github.com/earendil-works/pi/pull/9219) · 已关闭

`wrapUIPromptContext` 用 `{ ...ui }` 展开包装会丢失原型方法和 Proxy 陷阱，改为正确保留这些行为。

**关注点：** 这是对扩展 UI 上下文处理的内部修复，对外部扩展 API 兼容性有积极影响。

### 8. 中间句调用 skills 与 prompt templates
[#9214](https://github.com/earendil-works/pi/pull/9214) · 已关闭

对应问题 #8457：`/skill:name args` 和 `/template args` 可在输入中间展开内联，无需将消息拆开重发。

**关注点：** 解决了与 0.84 中 prompt templates 功能一致性的缺口，扩展了表达能力。

### 9. 新增按调用确认的自定义工具示例
[#9227](https://github.com/earendil-works/pi/pull/9227) · 已关闭

为有状态变更的自定义工具提供按次调用确认（显示工具名与参数、无确认时拦截）的 opt-in 示例，补充 `permission-gate.ts`。

**关注点：** 解决了自定义工具在不可信输出下的安全确认模式缺口，对扩展开发者和安全敏感用户重要。

### 10. 修正 RPC 扩展 UI 示例 CLI flag（重复提交）
[#9208](https://github.com/earendil-works/pi/pull/9208) / [#9204](https://github.com/earendil-works/pi/pull/9204) · 均已关闭

示例代码中使用 `--no-extension` 而非 `--no-extensions` 导致 agent 直接退出，示例无法运行。作者提交了两次（#9204 先关闭，#9208 后合并）。

**关注点：** 同日重复提交同类修复，说明审阅流程略绕，代码最终将进入主分支。

---

## 功能需求趋势

从今日 Issues 可以归纳出以下社区关注方向：

1. **模型提供商与路由扩展** — 新增 LLM Gateway（#7610）、Meta/Muse OAuth（#9096）显示社区持续扩充可接入模型生态的诉求。
2. **模型 API 互联的稳定性** — Codex 连接可靠性（#4945）、sonnet-5 网关截断（#9212）、Ollama 流错误（#9216）与 Copilot 端点匹配（#9209）等多起问题并发，反映多提供商场景下的互通验证是目前最大痛点。
3. **Agent 行为的可控性与稳健性** — 重试退避上限（#8826）、活动会话禁止重载（#9222）、OpenRouter 免费模型参数收敛（#9224）显示用户要求 Agent 在极端情况下更可预期。
4. **扩展机制的深化** — 暴露 ModelRuntime（#8791）、按调用确认的自定义工具（#9227）表明社区不只是用扩展，还要构建更复杂的安全与隔离逻辑。
5. **离线能力边界澄清** — `PI_OFFLINE` 的实际行为超出文档（#8684），离线用户希望环境变量的副作用透明可控。
6. **外部工具的集成与消费体验** — 图片以文件引用替代 base64 重放（#8617）、Nix 构建支持（#9137）反映用户希望 Pi 更好地适应其现有的工具链与基础设施。

---

## 开发者关注点

1. **模型供应商兼容性阵痛** — 新版 GPT-6 Astra 即引入路由错误（#9209），结合 #4945 的久拖未决，提示用户检查各模型的接入方式并注意服务端适配节奏。
2. **多提供商网关的传输差异不可忽略** — #9212（sonnet-5 13% 截断）说明即使模型列表宣称"标准协议"，路由中间层仍会引入实际差异，Agent 侧对结果 schema 校验不可放松。
3. **Windows 兼容性仍是一等公民问题** — 官方主动征询（#7547）但问题清单仍在累积（IME 候选窗口 #5200、终端滚动 #5023 等），建议 Windows 用户持续反馈具体环境与复现路径。
4. **扩展开发者的公共 API 变化** — #9219 修复了对象展开丢失原型方法/Proxy 陷阱的问题，而 #9222、#9227 则为 RPC 场景和自定义工具带来更稳的安全边界，扩展作者应关注相关升级。
5. **本地/离线场景的配置预期** — `PI_OFFLINE` 扩大副作用至模型发现（#8684）、Ollama 0.85.x 回归（#9216）提醒自托管模型用户在版本升级后主动回归流式与压缩行为。
6. **上游模型更新的被动适配** — OpenRouter `:free` 的目录数据不校验上下文（#9224）、Copilot 端点排斥 Chat Completions（#9209），说明供应商各自的目录/协议元数据并不可靠，Pi 在消费时应多做防御性校验。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-06

## 今日速览

WebShell 持续成为迭代重心，多个 PR/Issue 围绕其工作流可视化、Git 远端管理与会话状态同步展开热议；此外昨日连续两次 `v0.23.1-preview.1` 发布流程失败（集成 Docker 与质量检查环节），主分支 CI 亦出现失败，自动化运维告警集中爆发，值得维护者优先排查。

## 版本发布

### v0.23.0-nightly.20260905.0c945a6136
- **feat(web-shell)**: 可视化并管理动态工作流运行（PR #10594）
- **perf(web-shell)**: 派生会话工作流项目性能优化

### v0.23.1-preview.0
- 包含与 nightly 相同两项变更：工作流可视化与管理 + 会话工作流项目派生优化

## 社区热点 Issues

1. **[#11091] fix(export): mermaid (~6 MB) 仍被打平进导出的 transcript 渲染器** — 导出体积优化遗留问题。此前 PR #9812 已改为 unpkg 外链加载渲染器，但 ~6MB 的 mermaid 依然内联，严重影响导出文件体积。评论 7 条，社区关注度高。 [链接](https://github.com/QwenLM/qwen-code/issues/11091)

2. **[#9911] WebShell 切换后 VS Code 消息编辑与回退功能待恢复** — WebShell cutover（#9811）有意未恢复旧版 VS Code 逐消息编辑/回退交互。嵌入的 VS Code 主机仍以 ACP 为运行时边界，功能断裂影响日常编辑体验。 [链接](https://github.com/QwenLM/qwen-code/issues/9911)

3. **[#11096] main 构建的 export 指向 404 的 unpkg URL** — `@qwen-code/qwen-code@0.23.0` 发布早于 #9812 合并，tarball 中无 `export-transcript-document.js`，main 分支 `package.json` 同样为 0.23.0，导致导出的 HTML 引用 404 资源。发布顺序与依赖管理问题。 [链接](https://github.com/QwenLM/qwen-code/issues/11096)

4. **[#11178] SDK: transcript 规范化与重放时丢失用户 resource_link 附件** — TypeScript daemon UI 规范化层静默丢弃 ACP `user_message_chunk` 事件中的 `resource_link` 内容，会话重建后附件卡片丢失，影响历史记录完整性。 [链接](https://github.com/QwenLM/qwen-code/issues/11178)

5. **[#10378] vscode-ide-companion: 被取代的 daemon 子进程仍触发 onExit 误报崩溃横幅** — 已关闭但讨论仍持续（评论 3）。旧 daemon 子进程退出时机未处理，用户看到虚假的"Qwen Code 意外停止"提示。 [链接](https://github.com/QwenLM/qwen-code/issues/10378)

6. **[#11173 / #11170 / #11166] v0.23.1-preview.1 发布失败（三次自动报告）** — 发布工作流分别因 `integration_docker` 和 `quality` 任务失败。三连失败表明发布流水线存在系统性问题。 [链接](https://github.com/QwenLM/qwen-code/issues/11173) [链接](https://github.com/QwenLM/qwen-code/issues/11170) [链接](https://github.com/QwenLM/qwen-code/issues/11166)

7. **[#11180] `--continue` 后 skill 的 PreToolUse hook 停止生效** — Skill 的 `SKILL.md` 声明的安全门控 hook 在继续会话后失去约束力，而指令文本仍在上下文中。安全相关，需优先关注。 [链接](https://github.com/QwenLM/qwen-code/issues/11180)

8. **[#11176 / #11168] 主分支 CI 与 E2E 测试失败** — 主分支 `101b003f936c` 于测试报告前即失败（Test on ubuntu）；E2E 工作流在 `0e82a5889f56` 同样失败。自动化追踪中。 [链接](https://github.com/QwenLM/qwen-code/issues/11176) [链接](https://github.com/QwenLM/qwen-code/issues/11168)

9. **[#10046] PR #9891 延迟审查发现** — autofix 循环识别的遗留审查问题，修复超出原 PR 范围，等待维护者转化或处理。autofix 工作流持续产出此类积压。 [链接](https://github.com/QwenLM/qwen-code/issues/10046)

10. **[#10585] vscode/web-shell: request-id 绑定缺口测试覆盖** — PR #10534 延期的测试补充项（R3-2..R3-16），第三轮机器人全量扫描发现 17 项发现，当前 blocked 状态。 [链接](https://github.com/QwenLM/qwen-code/issues/10585)

## 重要 PR 进展

1. **[#11086] feat(serve): 将扩展作用域限定到工作区运行时** — 将全局扩展目录通过各工作区选定运行时暴露，将扩展状态协调到活跃工作区运行时，并提供工作区限定的 daemon/SDK 访问。当前 autofix/takeover 状态。 [链接](https://github.com/QwenLM/qwen-code/pull/11086)

2. **[#11169] fix(web-shell): 修复本地文件桥接的 trust-gate 与旁观者间隙** — 合并的 #10962 在最后一个审查轮次前已 squash 合并，四个修复仅存在于功能分支，此处补齐。 [链接](https://github.com/QwenLM/qwen-code/pull/11169)

3. **[#11177] feat(web-shell): 右侧栏新增 Context Usage 标签页** — 与 Token Usage 并排。新增 opt-in 头部操作（堆叠图层图标），可打开会话级别的上下文用量视图。 [链接](https://github.com/QwenLM/qwen-code/pull/11177)

4. **[#11163] feat(web-shell): 工作区分支选择器中管理 Git 远端** — 左侧边栏 git pill 或 composer 分支 chip 打开的 git popover 新增 **Manage Remotes** 面板，可列出远端并查看 fetch/push 地址。 [链接](https://github.com/QwenLM/qwen-code/pull/11163)

5. **[#10941] fix(web-shell): 保持 daemon 提示状态在静默期具有权威性** — 解决静默工具调用期间 observer 面板丢失运行状态的问题：三秒静默启发式在 daemon 仍报告 `hasActivePrompt=true` 时即错误判定 `promptStatus`。 [链接](https://github.com/QwenLM/qwen-code/pull/10941)

6. **[#10906] feat(web-shell): 显示 Shell 与 Monitor 任务输出** — 将 Monitor stdout/stderr 与现有 Shell 捕获一并持久化，daemon 暴露 live-session 数据供任务详情面板直接展示。 [链接](https://github.com/QwenLM/qwen-code/pull/10906)

7. **[#10938] feat(web-shell): Session Workflow 依赖可导航化 + 精简 chrome** — 补齐 #8583 后在导航、形态和文档上的缺口，并对 plan DAG 与 inspector 界面做设计优化。 [链接](https://github.com/QwenLM/qwen-code/pull/10938)

8. **[#10347] feat(core): 自动重试瞬态网络错误（EOF）** — 将 4xx 中实际为底层网络故障（如 `400 network error... EOF`）分类为可重试传输错误，使现有有界自动重试生效。 [链接](https://github.com/QwenLM/qwen-code/pull/10347)

9. **[#10687] fix(cli): 防止 channel pidfile 的 PID 复用风险** — pidfile 现在持久化 Linux 进程启动令牌，读取/信号/等待时校验。被复活的 PID 视为过期且不会向其新属主发送信号。 [链接](https://github.com/QwenLM/qwen-code/pull/10687)

10. **[#10455] fix(cli): 输出语言文件不可写时启动不崩溃** — CLI 每次启动向全局配置目录写入语言规则文件；目录只读或归属 root 时不再崩溃，改为优雅降级。 [链接](https://github.com/QwenLM/qwen-code/pull/10455)

## 功能需求趋势

- **WebShell 全功能补全**：GChat 显示在 web-shell 中成为 WebShell 核心面板；高需求集中在工作流运行可视化/管理（#10594）、Shell/Monitor 输出展示（#10906）、Git 远端管理（#11163）、上下文用量面板（#11177）、消息编辑/回退恢复（#9911）
- **构建系统与打包健壮性**：导出文件打包引发的 404（#11096）、mermaid 体积优化（#11091）反映构建发布管线中版本同步与产物完整性痛点
- **会话状态与数据保真**：`resource_link` 附件丢失（#11178）、daemon 提示状态权威性（#10941）指向 transcript/重放路径中的数据完整性需求
- **SDK/扩展体系空间化**：扩展作用域到工作区（#11086）表明多工作区运行时隔离成为明确架构方向

## 开发者关注点

- **CI/发布流水线不稳定**：`v0.23.1-preview.1` 三次发布失败（`integration_docker`、`quality`），主分支 CI 及 E2E 测试同步出现失败，自动化告警密集但缺少人工介入
- **hook 机制在会话延续后失效**：`--continue` 后 `PreToolUse` 不再执行（#11180），安全门控被绕过风险高
- **遗留审查债积累**：autofix-deferred 系列 Issue（#10046、#9695、#11008、#9751、#9774、#11147）规模持续增长，修复超出原 PR 范围，等待维护者认领或转化
- **静默期状态误判影响 UI 可靠性**：三秒无声即判定 `promptStatus` 终结导致 observer 面板状态丢失（#10941），事件流启发式需要更精准的判定策略

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-09-06

> 数据来源：github.com/Hmbown/DeepSeek-TUI（注：本次快照数据中仓库别名显示为 Hmbown/Codewhale）

## 今日速览

项目正处于 0.9.12 版本 dogfooding 后的密集修复期（目标 0.9.13），今日共有 30+ 个 Issue/PR 更新，核心围绕三大战役：**Fleet 多智能体体验优化**（parked 状态显示、claim 死锁、模型 shortlist)、**computer-use 插件 macOS/Windows 后端可靠性修复**，以及 **MCP/上下文管理问题**（登录态误报、压力提示瞬态、快照静默关闭）。此外工具注册表和测试隔离泄漏问题也在今日集中修复。

## 社区热点 Issues（10 个）

**1. Fleet claims 死锁：parked/cancelled 子代理无限持有写权限**（#5906，今日关闭）
- 子代理 parked 后即使被父代理取消，仍持有 write claim，导致后续 spawn（包括同一 worktree 的修补）全部阻塞。今日已通过 #5921/#5942 关闭 claim 部分，显示部分单独处理。
- 链接：https://github.com/Hmbown/Codewhale/issues/5906

**2. 快照静默失效：2GB 以上仓库 undo 功能关闭无人知晓**（#5930，今日关闭）
- 大仓库（>2GB 非排除内容或 >200k 条目）快照初始化失败仅写入 stderr，TUI 完全不显示，且 WARN 每轮重复。创始人实际会话中该警告出现 47 次。今日 #5935 已修复通知显示。
- 链接：https://github.com/Hmbown/Codewhale/issues/5930

**3. MCP 状态误报："8 failed" 实为 7 个 OAuth 登录过期**（#5926，今日新开）
- TUI footer 将所有未认证服务器统报为 "failed"，但 8 个失败中 7 个是 cloudflare 系 OAuth 登录过期，用户无路径区分和重新登录。PR #5938 已合入 chip 部分（分别计数），/mcp 排序和一键登录仍开放。
- 链接：https://github.com/Hmbown/Codewhale/issues/5926

**4. EPIC-005：CodeWhale TUI crate 分解总跟踪**（#5316，评论 22 条）
- 大型 umbrella issue，跟踪 TUI crate 结构化分解的所有子 EPIC 和 FEAT。整个项目架构重组的顶层入口，持续活跃。
- 链接：https://github.com/Hmbown/Codewhale/issues/5316

**5. 上下文压力提示瞬态化：agent 不主动响应**（#5620，评论 12 条）
- 上下文压缩压力警告是瞬态的，agent 不根据提示主动启动压缩或降级。评论最多也最久未关闭的 bug 之一（创建于 8/26），社区持续关注。
- 链接：https://github.com/Hmbown/Codewhale/issues/5620

**6. 并行执行 flake 跟踪：6 个测试负载下失败、单测通过**（#5929，今日新开）
- 同一晚全量测试各失败恰好一次，隔离运行全部通过。跟踪 codewhale-tui lib suite 的并行执行竞态问题，对 CI 稳定性至关重要。
- 链接：https://github.com/Hmbown/Codewhale/issues/5929

**7. 启动键击丢失：斜杠命令被截断后作为 prompt 发给模型**（#5925，今日关闭）
- 启动后立即输入 `/plugin install ...` 部分键击丢失，斜杠命令被损坏后作为普通 prompt 提交给模型。今日 PR #5943 已修复（启动探针期间保留 type-ahead）。
- 链接：https://github.com/Hmbown/Codewhale/issues/5925

**8. Fleet 模型 shortlist：provider → model → shortlist → role 流程**（#5915，今日新开）
- 创始人指示：需要让用户为子代理建立模型 shortlist，完整流程为 provider → model → shortlist（成为 fleet models）→ role。当前开放中，指导 0.9.13 Fleet 功能方向。
- 链接：https://github.com/Hmbown/Codewhale/issues/5915

**9. write_file 静默将 CRLF 转为 LF**（#5909，今日关闭）
- edit_file 保留行尾风格但 write_file 不保留，覆盖 CRLF 文件后行尾被静默转换。Windows 开发者关注，今日已关闭（修复方式见 PR 区）。
- 链接：https://github.com/Hmbown/Codewhale/issues/5909

**10. 测试隔离泄漏：onboarding 测试污染真实 ~/.codewhale**（#5932，今日新开）
- `tui::ui::tests` onboarding 测试未隔离 CODEWHALE_HOME，将 fixture provider 写入创始人真实配置文件。PR #5933 已提交修复（hermetic CI home）。
- 链接：https://github.com/Hmbown/Codewhale/issues/5932

## 重要 PR 进展（10 个）

**1. fix(computer-use)：macOS 权限探测透明化 + CGEvent 输入修复 + 前台守卫**（#5928，已合并）
- 关闭 #5917/#5927。三个修复：request_access 不再谎报权限（检查真实授权而非二进制存在）；CGEvent 输入实际生效；按键/输入仅发送给前台应用（修复了清理命令误杀创始人终端的严重事故）。
- 链接：https://github.com/Hmbown/Codewhale/pull/5928

**2. fix(tui)：启动 type-ahead 完整保留，杜绝斜杠命令被当 prose 重读**（#5943，已合并）
- 关闭 #5925。根因：三个启动探针（OSC 11 背景查询、kitty 图形查询、sixel DA 查询）在 raw mode 与 TerminalInputPump::spawn 之间读取 tty，吞掉用户输入。修复保证 type-ahead 完整性。
- 链接：https://github.com/Hmbown/Codewhale/pull/5943

**3. feat(agents)：parked 子代理显示为 parked 而非 "waiting for input"**（#5942，已合并）
- #5906 的显示半部分（claim 半部分已通过 #5921 关闭）。基于 #5921 落地的 parked_at_turn_end 记录工作，修复创始人报告的"2 sub agents waiting for input"误导。
- 链接：https://github.com/Hmbown/Codewhale/pull/5942

**4. fix(tui)：posture bar 恢复显示会话总工作时长**（#5920，已合并）
- 关闭 #5914。创始人报告多小时后固定区域无任何总时长显示。posture bar 恢复该指标。
- 链接：https://github.com/Hmbown/Codewhale/pull/5920

**5. rmcp 2.2.0 → 3.2.0 升级 + OAuth transport 移植**（#5924，已合并）
- 手工升级替代 Dependabot #5877（每次 CI 全红）。移植 crates/tui/src/mcp/oauth.rs 适配新版本。MCP 基础设施的重要依赖升级。
- 链接：https://github.com/Hmbown/Codewhale/pull/5924

**6. fix(tui)：快照关闭通知显示在 TUI 中 + 审批日志命名**（#5935，已合并）
- 关闭 #5930。快照关闭的一次性通知不再只进 stderr；审批失败时日志明确命名审批文件。
- 链接：https://github.com/Hmbown/Codewhale/pull/5935

**7. tools：registry builder 替换同名工具而非二次注册**（#5937，已合并）
- 关闭 #5934。修复 "Overwriting existing tool: File" 每会话 42 次的日志噪声——with_patch_tools 不再 push 第二个同名 Arc，而是替换。
- 链接：https://github.com/Hmbown/Codewhale/pull/5937

**8. test：隔离 onboarding 测试的 CODEWHALE_HOME**（#5933，开放中）
- Refs #5932。为 provider_key_validation_tests 增加 CODEWHALE_HOME 隔离 + CI hermetic home，防止测试污染真实用户配置。
- 链接：https://github.com/Hmbown/Codewhale/pull/5933

**9. feat(fleet)：通过 summary 和保存会话回复呈现 worker 产出**（#5946，开放中，外部贡献者 gaord）
- 当 Fleet 任务只产出文本时，不再回复无意义收据。执行器累积流式内容并附加截断摘要。
- 链接：https://github.com/Hmbown/Codewhale/pull/5946

**10. tools：agent tool 仅通告 schema 角色 + 提供商无关的 speech 工具注册一次**（#5947，开放中）
- 关闭 #5940/#5941。顶层描述提及 worker/scout/builder/verifier/consultant，但 type enum 实际只接受 schema 中角色。由只读 prompt/tool-catalog 审计发现。
- 链接：https://github.com/Hmbown/Codewhale/pull/5947

## 功能需求趋势

**Fleet/子代理管理**（最高热度）
- 模型 shortlist 流程（#5915，创始人直接指示）：provider → model → shortlist → role
- parked/cancelled 状态可视化与 claim 释放（#5906/#5942）
- 子代理纯文本产出的有意义汇总（#5946）
- Fleet 菜单简化，选项过多问题（#5888）

**computer-use 插件成熟化**
- macOS 后端全面修复（#5917/#5927 → #5928：权限如实探测、CGEvent 输入、前台守卫）
- Windows 后端缺陷——PowerShell 失败仍报成功、left_mouse_down 丢 press（#5908）
- live-install 流程闭环：/plugin install + MCP 连接 + look-act-verify（#5856）

**MCP UX 优化**
- 登录态与失败态区分，而非统一报 "failed"（#5926/#5938）
- 启动连接进度可感知——"20 connecting" 长时间停滞无进展指示（#5887）

## 开发者关注点

- **dogfooding 驱动开发**：大量问题来自创始人和维护者真实使用（0.9.12 dogfooding 报告 #5887/#5888/#5914/#5925），说明项目采用严格的"吃自己的狗粮"策略定位问题，且修复节奏快（问题报告 → PR → 合并往往在数小时内完成）
- **错误必须对用户可见**：快照静默关闭（#5930）、"8 failed" 误导性统计（#5926）、权限谎报（#5917）——多个问题指向"工具知道出错但用户不知情"，这是本轮修复的核心主题
- **会话时长等操作指标不可丢失**（#5914/#5920）
- **测试隔离与 CI 稳定性**：并行执行 flake（#5929）、测试写入真实配置（#5932）在一天内被同时暴露并快速响应
- **Windows 和 macOS 后端的 parity 与真实性**：平台差异持续暴露（CRLF vs LF #5909、PowerShell 失败静默 #5908、macOS 权限误判 #5917），跨平台质量是持续痛点

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*