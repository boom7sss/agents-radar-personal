# AI CLI 工具社区动态日报 2026-08-28

> 生成时间: 2026-08-27 20:41 UTC | 覆盖工具: 9 个

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

**报告日期：2026-08-28**  
**覆盖工具：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（CodeWhale）

---

## 1. 生态全景

当前 AI CLI 工具已从"能跑通一个 Demo"全面进入**稳定性与安全性的攻坚阶段**。各工具在 2026-08-28 当日均有 1-2 个版本发布或处于发布集成的关键节点（Claude Code v2.1.247、Codex rust-v0.150.1、Gemini CLI nightly v0.59.0、Copilot CLI v1.0.81），但社区反馈的焦点高度集中于**平台兼容性（尤其是 Windows）、长会话稳定性、安全机制"静默失败"**三大类问题。与此同时，各工具围绕 **MCP 生态深化、TUI 交互体验、多智能体可靠性、token 用量透明度** 等方向展开了密集的迭代与社区讨论。整体呈现"功能上量、质量承压"的态势，各工具在核心能力趋同的前提下正在通过差异化定位（如 Codex 的沙箱安全、Gemini 的零信任加固、Pi 的 TUI 细节）争夺开发者生态位。


## 2. 各工具活跃度对比

| 工具 | 今日活跃 Issues | 新增/更新 PR | Release 情况 | 社区活跃度评估 |
|------|:---:|:---:|:---:|------|
| **Claude Code** | 10+（Top10 合计超 200 评论） | 2（另有补充观察） | **v2.1.247**（正式版） | ★★★★★ 极高，150+ 总评论，历史级热点 #42776 |
| **OpenAI Codex** | 10+（Top10 合计超 180 评论） | **10 个已合并** | **rust-v0.150.1**（补丁） + 8 个 alpha | ★★★★★ 极高，Windows 故障集中爆发 |
| **Gemini CLI** | 10+（Top10 合计约 60 评论） | **10 个（含已合并）** | **v0.59.0-nightly** | ★★★★☆ 高，安全修复与技术提案密集 |
| **GitHub Copilot CLI** | 10+（Top10 约 40 评论） | 0（24h 内无更新） | **v1.0.81**（正式版） + 2 个预发布 | ★★★★☆ 高，插件生态加速但稳定性问题增多 |
| **Qwen Code** | 10+（Top10 约 40 评论） | **10 个** | 无新版本 | ★★★☆☆ 中高，多智能体修复进入闭环 |
| **OpenCode** | 10+（Top10 合计约 80 评论，43👍 高赞） | **10 个**（kitlangton 主导，重构/测试为主） | v1.18.23 引发回归讨论（该版本于此前发布） | ★★★★☆ 高，1.18 改版引发社区反弹 |
| **Pi** | 10+（Top10 约 45 评论，14👍 最高赞） | **10 个**（8 个已合并） | v0.84.3 出现回归（已修复多数） | ★★★★☆ 高，TUI 细节改进活跃 |
| **DeepSeek TUI (CodeWhale)** | 10+（Top10 约 40 评论） | **10 个**（含 1 个大型集成分支） | v0.9.12 集成分支推进中（未发新版本） | ★★★★☆ 高，0.9.12 发布准备期热议 |
| **Kimi Code CLI** | 2 | 0 | 无 | ★☆☆☆☆ 极低，24h 窗口内数据量有限 |

**说明：** 活跃度评估综合 Issues 评论/👍数量、PR 密集度和版本发布节奏。Kimi Code CLI 因 24h 窗口数据量过少，评估仅供参考。


## 3. 共同关注的功能方向

### 3.1 Windows 平台稳定性（涉及 5+ 工具，最紧迫）
| 工具 | 具体诉求 |
|------|---------|
| **Claude Code** | 桌面应用重启失败（#42776，140 评论）、窗口置顶（#88093）、进程残留 |
| **OpenAI Codex** | 启动失败（#40752，84 评论）、认证丢失（#39170）、发送卡死（#40968）、GPT-5.6 握手失败 |
| **Copilot CLI** | 键盘快捷键与提示不一致（#3760）、stdio MCP 启动失败（#3576） |
| **Pi** | PowerShell 命令前缀被破坏（#8688） |
| **Qwen Code** | LM Studio 本地模型兼容性（#10065） |

### 3.2 长会话稳定性与资源失控
| 工具 | 具体诉求 |
|------|---------|
| **Copilot CLI** | FileWatch 事件循环 13GB 日志（#4612）、事件存储耗尽触发 OOM（#4639） |
| **OpenCode** | Bun 在 Windows 上运行 12h 后 RSS 达 45GB（#35847） |
| **Gemini CLI** | 通用代理无限挂起（#21409）、shell 命令执行后卡死（#25166） |
| **Claude Code** | 跨会话消息被静默禁用（#86567、#89401） |

### 3.3 静默失败 → 显式反馈（涉及 4+ 工具，开发者最不满）
| 工具 | 具体诉求 |
|------|---------|
| **Claude Code** | 安全规则静默丢弃（#87627）、跨会话消息静默禁用 |
| **Gemini CLI** | 子代理 MAX_TURNS 被误报为成功（#22323） |
| **Copilot CLI** | managedSettings 故障闭合导致 MCP 服务器被清空（#4602） |
| **Codex** | 事件流中暴露工具/技能目录（#31088） |

### 3.4 MCP 生态深化（4 个工具积极布局）
- **Codex**：扩展可处理 MCP 工具结果、MCP 启动宽限可配置（2 个 PR）
- **Gemini CLI**：MCP 配置 fail-closed、filter mcpServers（#29099）、SSRF 修复（#29081）
- **Copilot CLI**：MCP 2026-07-28 协议全面落地、Windows 下 stdio MCP 启动问题
- **DeepSeek TUI**：MCP 登录恢复（#5643）、密钥作用域设计（#5637）

### 3.5 Token/用量透明度
- **Codex**：子代理 token 计入根目标、按活跃模型解析 token 预算（2 个 PR）
- **OpenCode**：周/月配额与使用历史不一致（#41206）
- **DeepSeek TUI**：per-thread usage 端点（#5626/#5641）、工具/MCP 成本归因（#5553）
- **Copilot CLI**：模型上下文窗口计算不准确（#4638）

### 3.6 多智能体/子代理可靠性
- **Gemini CLI**：子代理 MAX_TURNS 误报成功（#22323）
- **Qwen Code**：Agent Team 消息队列/事件桥接/资源回收密集修复（#10148、#10069、#10209）
- **Copilot CLI**：Rubber duck 审查缺乏可审计记录（#4621）
- **Codex**：子代理 token 用量归因（#41183）

### 3.7 会话管理体验
- **Claude Code**：/clear 未重置会话名、/exit 语义变化（#61172、#89586）
- **Copilot CLI**：--resume 后插件 hooks 丢失（#4629）
- **OpenCode**：1.18.23 升级后会话丢失


## 4. 差异化定位分析

### 4.1 功能侧重

| 工具 | 核心定位 | 当前重心 |
|------|---------|---------|
| **Claude Code** | 全功能专业级 Agent CLI | **插件生态 + 桌面端体验**；技能（skill）支持完善、插件配置项持续扩充 |
| **OpenAI Codex** | 安全优先的 Agent 运行时 | **沙箱安全 + MCP 扩展能力 + 移动端远程**；Guardian 安全机制持续收紧 |
| **Gemini CLI** | 多提供商 Agent 统一入口 | **零信任安全加固 + 文件系统服务抽象 + 非交互模式**；MCP SSRF 修复、fail-closed 策略 |
| **Copilot CLI** | 企业级会话与插件编排 | **插件仪表盘全面开放 + Hooks 增强 + MCP 协议落地**；会话恢复性能优化 |
| **Qwen Code** | 多智能体团队协同 | **Agent Team 快速迭代 + Web Shell 运维化 + autofix 闭环**；E2E 基础设施稳定性 |
| **OpenCode** | 开源可自托管的 Go 工具 | **TUI 布局灵活性 + 测试基础设施加固**；大量重构与测试改进 |
| **Pi** | TUI 细节体验领导者 | **TUI 交互打磨 + 可配置压缩 + OpenAI 兼容层**；扩展事件系统 |
| **DeepSeek TUI** | 多提供商中立的高性能 TUI | **0.9.12 发布冲刺 + 代码质量清理 + 插件体验对齐 Claude Code** |
| **Kimi Code CLI** | 极简轻量级 CLI | 活跃度低，处于维护平稳期 |

### 4.2 目标用户

- **Claude Code / Codex / Copilot CLI**：职业开发者 + 企业团队，功能全、生态重，适合深度集成进正式工作流
- **Gemini CLI**：多提供商切换的重度用户、容器/安全敏感环境开发者
- **Qwen Code**：多智能体协同的团队用户、开源社区贡献者
- **OpenCode**：偏好开源自托管、需要自定义能力的技术团队
- **Pi**：TUI 重度用户、追求交互细节与轻量部署的个人开发者
- **DeepSeek TUI**：多提供商用户（尤其 DeepSeek/Moonshot）、构建性能敏感的高频开发者
- **Kimi Code CLI**：Kimi API 生态用户、轻量需求

### 4.3 技术路线

| 工具 | 语言/运行时 | 架构特色 |
|------|-----------|---------|
| **Claude Code** | TypeScript/Node | 插件与技能体系成熟，桌面端为辅 |
| **OpenAI Codex** | Rust | 沙箱隔离 + Guardian 审查机制，桌面/移动端布局中 |
| **Gemini CLI** | TypeScript/Node | 多云中立，FileSystemService 抽象，nightly 高频迭代 |
| **Copilot CLI** | TypeScript/Node | 企业级插件仪表盘，hooks + OpenTelemetry 集成 |
| **Qwen Code** | TypeScript/Node | 多智能体（Agent Team）+ 自动代码审查闭环（autofix） |
| **OpenCode** | Go + Effect (TS) | 单二进制分发，Effect 函数式框架 |
| **Pi** | TypeScript/Node（Bun） | Kitty 图形协议、原生滚动、对 OpenRouter 等聚合商兼容 |
| **DeepSeek TUI** | Rust | 单体 crate（~683k 行），正在推进重量级拆分重构 |
| **Kimi Code CLI** | Go | 极简依赖，主打轻量快速 |


## 5. 社区热度与成熟度

### 5.1 高热度 + 高成熟度（第一梯队）

**Claude Code** 和 **OpenAI Codex** 社区规模最大、讨论最活跃。Claude Code 的 #42776 创下 140 条评论的历史热度，Codex 的 Windows 故障单日收获 84 条评论。两工具的成熟度体现在功能迭代速度（双向并行）与生态宽度上。但高热度也伴随**稳定性回归频发**——Windows 桌面端故障集中爆发说明用户群体广泛，质量问题被高度放大。

### 5.2 快速迭代 + 安全驱动（第二梯队）

**Gemini CLI** 以 nightly 为节奏，每日大量 PR 聚焦安全加固（SSRF、fail-closed、环境变量净化），处于"安全声誉建设期"。**Copilot CLI** 正式开放插件仪表盘并发版 v1.0.81，正从"CLI 工具"向"插件平台"演进，但长会话稳定性问题集中出现，属于生态扩张期的阵痛。**DeepSeek TUI** 处于 0.9.12 发布冲刺期，社区讨论集中在代码质量与性能，是社区最关注构建体验的工具之一。

### 5.3 迭代活跃但社区规模中等（第三梯队）

**Qwen Code** 的多智能体功能处于快速修复期，自动代码审查闭环（autofix）是一个值得关注的工程文化信号。**OpenCode** 的社区围绕 1.18 UI 改版有强烈反弹（43 👍 的保留旧布局诉求），但 PR 以重构为主，功能发展平稳。**Pi** 的 TUI 细节改进活跃（选择复制、滚动历史、overlay 选区），社区偏向深度用户。

### 5.4 低活跃度

**Kimi Code CLI** 过去 24 小时仅 2 条 Issue，无 PR/Release，处于相对平稳期。数据窗口过短，不排除是偶发现象。


## 6. 值得关注的趋势信号

### 6.1 "静默失败"正在成为最严重的信任危机

跨 5+ 工具，开发者对"- 功能被静默禁用、安全规则被静默丢弃、代理误报成功"的容忍度降到最低。Claude Code 的跨会话消息静默禁用、Gemini 子代理 MAX_TURNS 被误报为 GOAL 成功、Copilot CLI 的瞬时抖动导致整个工具链瘫痪——这类问题破坏了用户对工具"如实汇报"的基本信任。**参考建议：** 开发者评估工具时，应重点考察其错误报告机制是否有显式反馈、失败闭合如何处理。

### 6.2 Windows 桌面端是当前最大的体验洼地

Claude Code（v2.1.247 仍未修复桌面重启故障）、Codex（同一个更新批次引发 5+ 个独立故障）、Copilot CLI（快捷键误导、MCP 启动失败）、Pi（PowerShell 前缀破坏）——Windows 平台的问题在几乎每个工具中都占据 Top 5 讨论榜。**参考建议：** Windows 用户在选择工具时需关注目标工具的 Windows CI 覆盖度；工具团队需将 Windows 桌面端生命周期纳入发布阻断考核。

### 6.3 安全机制正在从"尽力而为"走向"强制兜底"

Gemini CLI 的 fail-closed 工作区信任、Guardian 默认工具调用延迟阈值从 3 降至 2、Codex 拒绝超大的已审查终端输入、Qwen Code 的写重定向 fail-closed——安全策略全面趋向"宁可拒绝，不可放过"。这对工具可用性有一定副作用（误伤合法场景），但社区整体欢迎该方向。**参考建议：** 开发者应关注工具的 fail-closed 策略是否会阻断自身合法工作流，做好预案。

### 6.4 MCP 正在成为 AI CLI 的"标配扩展协议"

Codex 在 2 个 PR 中深化 MCP 扩展能力（工具结果处理、启动宽限配置）、Copilot CLI 全面落地 MCP 2026-07-28 协议、Gemini CLI 在 MCP OAuth 中发现 SSRF 漏洞并修复、DeepSeek TUI 在 MCP 登录恢复和密钥作用域上密集改进。MCP 已成为连接 CLI 与外部工具/数据源的事实标准。**参考建议：** 开发者选择 CLI 时，评估其 MCP 协议版本支持与扩展机制（如是否支持自定义 MCP server、如何处理 MCP 工具错误），并在安全敏感场景中优先选择已对 MCP SSRF 等风险进行加固的工具。

### 6.5 多智能体的"可靠性"而非"能力"成为新瓶颈

Qwen Code 的 Agent Team 大量边界 bug 修复、Gemini CLI 子代理误报、Copilot CLI 的 rubber duck 审查记录缺失——多智能体协作的功能已普遍可用，但可靠性（状态汇报的准确性和可审计性）是其走向生产环境的真正瓶颈。**参考建议：** 依赖多智能体自动化工作流的用户，应优先选择状态汇报透明、可审计性强的工具。

### 6.6 Token 用量透明度成为企业采用的前提

Codex 将子代理 token 归入根目标、OpenCode 的配额不一致报告、DeepSeek TUI 的 per-thread usage 端点、Gemini CLI 的状态栏限流数据提案——在 token 成本敏感的企业环境下，工具的用量计算与展示范式正在从"黑盒"走向"可归因、可审计"。**参考建议：** 企业采购时，将用量透明度与配额控制能力纳入评估标准。

### 6.7 构建/编译性能成为高频 CI 场景的隐形门槛

DeepSeek TUI 的 683k 行单体 crate（#5249）是整个列表中唯一被开发者社区集中讨论构建性能的工具——每次修改全包重编译，直接拉低 PR 迭代速度。这与其他工具（如 Codex 的 Rust 多 crate 架构、Copilot CLI 的模块化设计）形成对照。**参考建议：** 关注目标工具的模块化程度与构建时间，这直接影响其迭代速度与社区贡献活跃度。

### 6.8 非交互式/headless 能力成为新竞争点

Gemini CLI 新增 `/stats` 非交互模式输出支持（#20536）、Copilot CLI 的插件仪表盘在非交互场景下的行为差异（#4433）、Codex 的 `codex exec --json` 事件流暴露工具目录（#31088）——CLI 工具正在从"交互式终端工具"延伸到 **CI/自动化管道** 的编排层。**参考建议：** 有自动化集成需求的团队，应评估目标工具在非交互模式下的完整性与稳定性。


## 附录：核心数据快照

| 指标 | 数值 |
|------|------|
| **报告覆盖工具数** | 9 个 |
| **当日发布/推进版本数** | 5 个正式版/补丁 + 多个预发布/nightly + 2 个集成分支 |
| **Top Issues 合计（9 工具）** | 约 70+ 条 |
| **Top PR 合计（9 工具）** | 约 52 个 |
| **最高热度 Issue** | Claude Code #42776（👍70 · 💬140） |
| **最严重资源问题** | OpenCode Bun 内存泄漏（RSS 峰值 45.29 GB）|
| **最大安全修复** | Gemini CLI MCP OAuth SSRF（#29081）|
| **共同痛点（跨 5+ 工具）** | Windows 稳定性 · 长会话资源失控 · 静默失败 |

---

*报告基于 2026-08-28 各工具 GitHub 仓库公开数据编制。数据窗口为过去 24 小时（部分工具包含近 2-3 日热点）。Kimi Code CLI 因当日数据量过小，分析仅供参考。连接与指标以官方仓库为准。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-28）

## 1. 热门 Skills 排行

| # | Skill | 功能简介 | 社区关注点 | 状态 |
|---|-------|---------|-----------|------|
| 1 | **skill-creator 修复** ([PR #1298](https://github.com/anthropics/skills/pull/1298)) | 修复 run_eval.py 恒报 0% recall 的严重 bug，涉及 Windows 流读取、触发检测与并行 worker 问题 | 关联 Issue #556（12 条评论、7 👍），超过 10 次独立复现，是 skill-creator 团队最痛的问题 | OPEN |
| 2 | **document-typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) | 对 AI 生成文档做排版质检：孤行词（1-6 词溢出）、孤立段落标题、编号错位 | 直击 AI 生成文档的普遍痛点，社区讨论热度高；3 月创建至今仍 open，跨度 4 个月+ | OPEN |
| 3 | **scnet-hpc** ([PR #1615](https://github.com/anthropics/skills/pull/1615)) | 通过 profile 化 SSH + Slurm 工作流操作 SCNet HPC 集群 | 最新高关注 PR（8 月末创建），社区对 HPC/科研计算场景兴趣明显 | OPEN |
| 4 | **ODT skill** ([PR #486](https://github.com/anthropics/skills/pull/486)) | OpenDocument 格式（.odt/.ods）的创建、填充、读取与转 HTML | 补充了现有 docx/pdf 之外的文档格式覆盖，讨论集中在 LibreOffice 生态兼容 | OPEN |
| 5 | **skill-quality/skill-security-analyzer** ([PR #83](https://github.com/anthropics/skills/pull/83)) | 两个 meta-skill：5 维度质量分析 + 安全分析，面向 Skill 本身做体检 | 社区对 Skill 质量标准化的需求旺盛，与 Issue #202（skill-creator 最佳实践）呼应 | OPEN |
| 6 | **frontend-design 改进** ([PR #210](https://github.com/anthropics/skills/pull/210)) | 重写 frontend-design skill，确保每条指令在单次对话中可执行 | 讨论聚焦 skill 指令的可操作性——不仅是"讲清楚"还要"能执行" | OPEN |
| 7 | **Hivemind 多 Agent 编排** ([PR #1628](https://github.com/anthropics/skills/pull/1628)) | 零成本多 Agent 编排：Claude Code 作为 planner/reviewer/merger，把机械工作委派给免费模型驱动的 headless workers | 最新热门 PR（8/21 创建），体现社区对降本增效 + 多 Agent 架构的强烈兴趣 | OPEN |
| 8 | **claude-api 模型退役更新** ([PR #1607](https://github.com/anthropics/skills/pull/1607)) | 将四个退役模型 ID（claude-opus-4-1 等）标记为 retired | 反映社区对模型生命周期管理的敏感度，修复了"legacy models 仍在 active 列表"的误报 | OPEN |

## 2. 社区需求趋势

- **✨ 高优先级：修复 skill-creator 评估管线** — Issue #556（12 评论、7 👍）反映核心痛点：`run_eval.py` 在所有查询上 0% 触发率，导致优化循环失效。至少 3 个独立 PR（#1298、#1099、#1050）在修同一问题。
- **🔒 安全与信任边界** — Issue #492（43 条评论，热度断层第一）：社区 Skill 在 `anthropic/` 命名空间下分发造成信任边界滥用风险。另有 Issue #1175 关注 SharePoint 文档处理中的安全与上下文窗口问题。
- **🏢 组织级 Skill 共享** — Issue #228（16 评论、8 👍）：当前 .skill 文件需手动下载/上传，社区强烈要求组织内直接共享的 skill library。
- **🧠 智能体能力演进** — 多 Agent 编排（Hivemind）、紧凑上下文记忆（compact-memory, #1329）、推理质量门控（#1385）、agent 治理（#412）、将 Skills 暴露为 MCP（#16）等方向热度上升。
- **📄 文档格式扩展** — 在 docx/pdf 基础上，ODT（#486）、typography 质检（#514）等补齐文档工作流短板。
- **⚠️ 稳定性问题** — Skills 消失（#62）、document-skills 与 example-skills 重复安装（#189）、claude-api 注入 156k tokens 撑爆上下文（#1487）、docx 空格重格式化导致文件损坏（#12）。

## 3. 高潜力待合并 Skills（评论活跃 + 未合并）

| Skill | PR | 亮点 | 落地概率评估 |
|-------|-----|------|-------------|
| **skill-creator 评估修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 0% recall 系统性 bug，关联 10+ 复现 | ⭐⭐⭐⭐⭐ 影响面最大，多个竞品修复 PR 并存，大概率合并其一 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 解决所有 AI 文档生成的排版硬伤 | ⭐⭐⭐⭐ 刚需明确，但等待窗口已超 5 个月 |
| **Hivemind 多 Agent 编排** | [#1628](https://github.com/anthropics/skills/pull/1628) | 零成本委派给免费模型，Claude Code 保持唯一决策者 | ⭐⭐⭐ 方向新颖符合趋势，但需要官方评估架构合规性 |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | HPC 集群操作标准化 | ⭐⭐⭐ 利基场景明确，垂直领域价值高 |
| **skill-quality/security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 双 meta-skill：质量 + 安全审计 | ⭐⭐⭐ 与 #492 安全议题呼应，安全维度可能加速评审 |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 机械验证 + 四维推理质量门控（v1.3.0） | ⭐⭐ 概念与 #1385 提案一致，质量门控是热点方向 |

## 4. Skills 生态洞察

> **当前社区最集中的诉求是"工具自身的可靠性与质量控制"**——从 skill-creator 评估管线失效（#556）、安全信任边界问题（#492）、重复安装（#189）到上下文窗口滥用（#1487），社区的核心注意力正从"创造更多 Skill"转向"让 Skill 本身更可信、更可控、更规范"，这标志着 Claude Code Skills 生态正从快速扩张期进入成熟治理期。

---

# Claude Code 社区动态日报 — 2026-08-28

## 今日速览

今日发布 v2.1.247，新增 `SendFeedback` 工具（Claude 可在会话出错时草拟反馈报告）及 `feedbackDrafts` 设置开关。社区方面，Windows 平台问题持续占据热点（桌面应用重启失败、进程残留、窗口置顶），跨会话消息在 Linux 用户命名空间环境被静默禁用、安全插件解析非映射 YAML 时静默丢弃安全规则等问题获得开发者的深度讨论与复现报告。

## 版本发布

**v2.1.247** —— 关键变更：

- **新增 `SendFeedback` 工具**：会话出错时，Claude 可代为草拟反馈报告，用户审核后可通过 `/feedback` 发送（可用 `feedbackDrafts` 设置关闭）。
- 新增 `{id, text, cooldownSessions, priority}` 条目、`tipsFile` 与 `label` 字段（完整变更未注明，属补充性配置项）。

## 社区热点 Issues（Top 10）

**1. [#42776] Claude Code Desktop 在 Windows 上因孤儿进程文件锁无法重启**
👍 70 · 💬 140 条评论（历史最高热度问题）
链接: https://github.com/anthropics/claude-code/issues/42776
重要性：创下极高评论数，说明大量 Windows 用户被此问题长期困扰；进程文件锁导致应用无法正常 relaunch，属于阻塞性桌面端缺陷。

**2. [#74260] Assistant 文本块在 thinking 块后静默丢失，transcript JSONL 缺失**
👍 25 · 💬 33 条评论 | 涉及 2.1.201 与 adaptive thinking
链接: https://github.com/anthropics/claude-code/issues/74260
重要性：数据丢失类缺陷影响可信度。TUI 与 bridged child session 均可复现，涉及 `claude-fable-5` 多轮输出完整性，属核心链路 bug。

**3. [#61172] `/clear` 未重置会话名，导致 `/resume` 出现重名会话**
👍 16 · 💬 12 条评论 | 已复现
链接: https://github.com/anthropics/claude-code/issues/61172
重要性：会话管理高频操作异常，重名会话降低恢复效率，开发者容易误选。

**4. [#88093] Claude Desktop（Windows）窗口始终置顶**
👍 14 · 💬 5 条评论
链接: https://github.com/anthropics/claude-code/issues/88093
重要性：桌面端交互阻塞性体验问题，虽评论少但获赞多，说明影响面广。

**5. [#30761] 语音模式：建议添加连续监听/自动切换模式，替代纯按键说话**
👍 14 · 💬 6 条评论（已关闭，功能请求）
链接: https://github.com/anthropics/claude-code/issues/30761
重要性：无障碍方向的高赞请求，服务于手部不便群体，push-to-talk 无法满足持续语音输入场景。

**6. [#86567] 2.1.232 socket 目录加固在 user-namespace/chroot 环境静默禁用跨会话消息**
👍 1 · 💬 5 条评论 | 回归缺陷，已复现
链接: https://github.com/anthropics/claude-code/issues/86567
重要性：安全加固导致的回归，对容器/隔离环境用户影响大；作者对比了 4 个相近 issue 排除不同原因，定位质量高。

**7. [#89812] Linux Desktop：`session_stale_relogin` 强制每日重新登录，Cowork 授权需二次登录**
👍 1 · 💬 3 条评论
链接: https://github.com/anthropics/claude-code/issues/89812
重要性：Linux 桌面端认证流程体验问题，Cowork 场景下重复登录并造成授权中断。

**8. [#89586] `/exit` 变为列出会话而非终止；重复 fork 后会话难以管理**
💬 4 条评论 | 通过 `/feedback` 提交
链接: https://github.com/anthropics/claude-code/issues/89586
重要性：会话管理行为近期改动疑似引入回归，直接影响核心交互。

**9. [#89523] 2.1.243 在 glibc 2.44（Arch）启动即 SIGSEGV，回退 2.1.241 正常**
💬 3 条评论 | 与 #89366 同签名
链接: https://github.com/anthropics/claude-code/issues/89523
重要性：启动即崩溃的打包兼容性问题，影响滚动发行版用户；作者提供了相关性分析，便于复现定位。

**10. [#87627] security-guidance 插件：非映射 YAML/JSON 配置静默丢弃全部用户安全规则**
💬 4 条评论 | 已复现（AttributeError）
链接: https://github.com/anthropics/claude-code/issues/87627
重要性：安全相关插件配置失效即静默降级，若用户依赖自定义安全规则将面临风险敞口，值得优先修复。

## 重要 PR 进展

> 注：数据源在“过去 24 小时更新”的 PR 列表中仅提供 2 条。以下为全部可获取条目，并额外基于 Issues 观察补充相关动态。请以官方合并记录为准。

**1. [#69226] 更新 frontend-design skill（已关闭）**
👍 0 | 更新于 2026-08-27
链接: https://github.com/anthropics/claude-code/pull/69226
内容：改进前端设计 skill，插件版本升至 1.1.0 以便已安装副本获取更新。对使用该 skill 的团队是直接增强。

**2. [#13437] fix(hookify)：Python 模块解析改用相对导入（开启中）**
👍 0 | 更新于 2026-08-26
链接: https://github.com/anthropics/claude-code/pull/13437
内容：hookify 插件在所有平台报 `No module named hookify`；根因为绝对导入假设 `PLUGIN_ROOT` 含 `hookify/` 子目录，实际直接含 `core/`。改用相对导入修复。对插件作者有参考价值。

**补充观察（与 PR 体系相关但来源于 Issues，需以官方 PR 为准）：**

- #83802：`test-hook.sh` 在无 `jq` 时误报合法 JSON 为非法，暴露 hook 开发脚本对 jq 的隐式依赖与失败闭环 — 提示官方需明确脚本依赖或优雅降级。
- #81940：建议把分作用域限流数据加入 statusline JSON 载荷，Fable 5 引入独立周限额后 `/usage` 显示两个周指标，状态栏只有聚合值 — 属于数据字段扩展方向的社区提案。

## 功能需求趋势

从 Issue 与讨论中提炼的核心方向：

1. **跨会话消息（Cross-session messaging）的健壮性**
   - 多用户 macOS 上默认 socket 目录 `/tmp/cc-socks` 被首个用户独占，其他用户消息被静默禁用（#89401）
   - Linux user-namespace/chroot 环境因 socket 目录所有权校验被禁用（#86567）
   - 方向：socket 目录策略需按用户隔离或更细粒度权限校验，同时修复多用户场景。

2. **会话管理体验优化**
   - `/clear` 与 `/exit` 行为异常（#61172、#89586）：/clear 未重置会话名；/exit 列出会话而非终止
   - 方向：会话重名防混淆、退出语义回归修复、重复 fork 后的合并/清理机制。

3. **安全与权限的可用性平衡**
   - 权限模式在 fork 后丢失、后台会话继承 auto/computer-use（#77649）
   - 安全插件静默降级（#87627）
   - 方向：安全机制需“安全失败”而非“静默失败”，并给出显式诊断。

4. **平台差异修复（Windows/Linux）**
   - Windows：桌面重启失败（#42776）、进程残留（#62107）、窗口置顶与复制失效（#88093、#43477）
   - Linux：glibc 2.44 启动崩溃（#89523）、每日重新登录（#89812）
   - 方向：按平台差异完善 CI 矩阵，重点覆盖 Windows 桌面端生命周期与 Linux 滚动发行版兼容。

5. **状态栏与诊断数据丰富化**
   - 分作用域限流数据（#81940）、hook 执行失败的可诊断性（#88830）
   - 方向：为第三方工具（状态栏、MCP）暴露更细粒度运行时数据。

## 开发者关注点

- **静默失败是最大痛点**：跨会话消息被静默禁用（#89401、#86567）、安全规则被静默丢弃（#87627）、桌面 hook 失败零诊断（#88830）——开发者要求此类问题必须给出显式提示与可排查日志。
- **Windows 桌面端长期不稳定**：#42776 拥有 140 条评论，叠加 #62107、#88093、#43477，Windows 用户对重启、复制、置顶、进程残留等基础体验修复诉求强烈。
- **“行为悄然变更”焦虑**：#89586（/exit 语义变化）、#61172（/clear 行为异常）均发生在近期版本，开发者对未在 release notes 中明示的行为变更感到不安，希望官方明确变更记录。
- **多用户/容器环境被低估**：macOS 多用户共享 socket、Linux user-namespace 环境、Arch 等滚动发行版均在 CI 之外暴露问题，社区希望官方增加对隔离环境的覆盖测试。
- **无障碍与输入多样性**：#30761 语音模式连续监听请求获 14 赞，表明开发者重视长期打字疲劳与无障碍场景，期待 push-to-talk 之外的持续聆听模式。

---

*本日报基于 2026-08-28 早间 github.com/anthropics/claude-code 仓库数据编制，PR 部分因当日更新列表仅含 2 条而依据 Issues 观察适当补充，请以官方合并状态为准。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-28

## 今日速览

今日发布补丁版本 `rust-v0.150.1`，修复了远程压缩任务中保留图片未计入 token 预算的问题。社区讨论热度集中在 Windows 桌面应用的多项故障（启动失败、认证丢失、发送卡死）以及移动端远程控制的稳定性问题上，Windows 平台体验成为当前最大痛点。PR 方面，围绕 MCP 扩展能力、Guardian 安全机制和 token 预算管理的多项改进已合并。

## 版本发布

**rust-v0.150.1**（补丁版本）

- **Bug Fix**: 远程压缩（Remote compaction）现在默认将保留的图像计入 token 预算，并按需裁剪更旧的图像（#41003）。
- 完整变更日志：[v0.150.0...v0.150.1](https://github.com/openai/codex/compare/rust-v0.150.0...rust-v0.150.1)

另有 8 个 alpha 预发布版本（0.150.0-alpha.12.x、0.151.0-alpha.x），未包含详细变更说明。

## 社区热点 Issues（Top 10）

### 1. [#40752] Windows 桌面应用更新后无法启动（评论 84 · 👍 51）
Windows 版 Codex 桌面应用在更新到 v26.820.60940 后启动失败，报错 "Unable to locate Codex CLI" 及 `.cmd` wrapper 上的 `spawn EINVAL`。当前社区最热的 issue，影响面较大。
[查看 Issue](https://github.com/openai/codex/issues/40752)

### 2. [#40700] Windows 桌面版无法启动：WindowsApps 内 codex.exe 重定位失败（评论 34 · 👍 2）
更新至 26.820.7780.0 后应用无法启动，问题定位为 MSIX 打包路径重定位失败。与 #40752 类似，属同批 Windows 故障。
[查看 Issue](https://github.com/openai/codex/issues/40700)

### 3. [#39170] Windows 桌面应用开启高级账户安全后 15-40 秒内丢失认证（评论 17 · 👍 19）
启用 Advanced Account Security 后，桌面应用在 15–40 秒内自动退出登录，而 CLI 保持登录状态。涉及认证链路在桌面端的问题。
[查看 Issue](https://github.com/openai/codex/issues/39170)

### 4. [#22925] iOS 移动端远程新线程无法选择 worktree 或起始分支（评论 8 · 👍 25）
从移动端发起远程任务时，缺少 worktree 执行和起始分支的选择能力。长期高赞需求，移动端功能完整性的代表性问题。
[查看 Issue](https://github.com/openai/codex/issues/22925)

### 5. [#40968] Windows 桌面端发送按钮无限旋转，提示无法提交（评论 8 · 👍 2）
26.820.7780.0 版本中发送按钮卡死、消息无法提交。又一起 Windows 专属故障。
[查看 Issue](https://github.com/openai/codex/issues/40968)

### 6. [#40943] Windows 桌面 GPT-5.6 报 "code-mode host exited during handshake"（评论 5 · 👍 0）
同一 Windows 版本下，GPT-5.6 在桌面端握手失败，但 GPT-5.5 桌面端和 GPT-5.6 CLI 均正常，指向桌面端与模型版本的兼容性问题。
[查看 Issue](https://github.com/openai/codex/issues/40943)

### 7. [#39678] Android 远程到 macOS 的 "No project" 聊天触发项目信任错误（评论 9 · 👍 5）
移动端发起无项目聊天时出现信任验证失败，与 #39855、#40002 同属远程信任链路问题。
[查看 Issue](https://github.com/openai/codex/issues/39678)

### 8. [#18712] 桌面端忽略 `plan_mode_reasoning_effort` 配置（评论 7 · 👍 14）
CLI 正确应用 Plan 模式的 reasoning effort 配置，但桌面端忽略该值，CLI 与桌面端行为不一致。
[查看 Issue](https://github.com/openai/codex/issues/18712)

### 9. [#31088] 在 `--json` 事件流中暴露工具与技能目录（评论 6 · 👍 13）
请求在 `codex exec --json` 中增加一等事件，声明模型可用的工具与技能/slash-command 目录，便于外部集成和理解模型能力边界。
[查看 Issue](https://github.com/openai/codex/issues/31088)

### 10. [#29070] Codex 应用无法读取终端（评论 16 · 👍 1）
Windows 平台上应用无法读取终端输出，持续两个多月仍无解决。
[查看 Issue](https://github.com/openai/codex/issues/29070)

## 重要 PR 进展（Top 10）

### 1. [#41202] 允许扩展处理 MCP 工具结果（已合并）
新增 `ToolLifecycleContributor::on_mcp_tool_result`，让扩展可访问执行的 MCP 工具上下文、重写后的参数和可变的服务端结果。
[查看 PR](https://github.com/openai/codex/pull/41202)

### 2. [#41199] MCP 可选启动宽限时间可配置（已合并）
新增 `mcp_optional_startup_grace_ms` 配置项（默认 1000ms），控制工具目录捕获等待可选 MCP 服务器的时间，设 0 可禁用等待。
[查看 PR](https://github.com/openai/codex/pull/41199)

### 3. [#41196] 改进沙箱、MCP 错误与缓存审批（已合并）
扩展 Windows 拒绝读取的 glob 到受保护目录；保留结构化的 MCP 工具和资源错误穿透 app-server 响应。
[查看 PR](https://github.com/openai/codex/pull/41196)

### 4. [#41195] 在 `ToolRouter` 中定稿模型特定工具计划（已合并）
修复规划候选模型工具时可能意外覆盖当前模型元数据的问题，确保 fallback 准备不影响已选模型的工具清单。
[查看 PR](https://github.com/openai/codex/pull/41195)

### 5. [#41183] 子代理 token 用量计入根目标（已合并）
将派生后代（含嵌套子代理）的 token 用量滚动计入根目标的用量统计，包括活跃和空闲状态下的进度核算。
[查看 PR](https://github.com/openai/codex/pull/41183)

### 6. [#41162] 按每个步骤的活跃模型解析 token 预算（已合并）
同一轮中模型设置可能随步骤变化，token 预算默认值、上下文窗口限制等需与当前步骤捕获的模型对齐。
[查看 PR](https://github.com/openai/codex/pull/41162)

### 7. [#41192] TUI 会话中保留恢复的权限配置文件（已合并）
修复恢复的 app-server 线程携带的权限配置在作为遗留沙箱模式覆盖发送时的信息丢失问题。
[查看 PR](https://github.com/openai/codex/pull/41192)

### 8. [#41158] 降低 Guardian V2 默认工具调用延迟（已合并）
默认 `max_tool_call_lag` 从 3 次工具调用降至 2 次，更早地让旧异步风险评分回退到严格审查。
[查看 PR](https://github.com/openai/codex/pull/41158)

### 9. [#41152] 无界 Guardian 父级压缩时默认失败关闭（已合并）
Guardian 分类不得在静默丢弃超出大小限制的父级压缩后继续执行，区分"缺失"与"超限"场景。
[查看 PR](https://github.com/openai/codex/pull/41152)

### 10. [#41159] 拒绝超大的已审查终端输入（已合并）
修复审查缩短后的 `write_stdin` 操作但发送完整输入时，未审查字节可能到达升级终端的安全漏洞。
[查看 PR](https://github.com/openai/codex/pull/41159)

## 功能需求趋势

1. **MCP 生态深化**：社区和官方 PR 均聚焦 MCP——扩展可处理 MCP 工具结果、可选服务器启动宽限可配置、错误信息结构化保留，MCP 正成为 Codex 扩展能力的核心通道。
2. **远程/移动端体验补全**：多个 issue 指向移动端远程控制的信任验证、worktree 选择、连接稳定性问题，移动端是当前功能短板最集中的方向。
3. **工具与能力可见性**：#31088 等需求表明开发者希望 Codex 在 JSON 事件流中暴露完整的工具、技能和 slash-command 目录，用于外部集成与调试。
4. **安全与权限精细化**：Guardian 多项 PR（更低的延迟阈值、无界压缩失败关闭、巨型输入拒绝）显示沙箱保护和终端审查在持续加强。
5. **模型/工具行为一致性**：桌面端与 CLI 在模型配置（如 `plan_mode_reasoning_effort`）上的行为差异，社区期望两端对齐。

## 开发者关注点

- **Windows 平台故障集中爆发**：从启动失败（#40752、#40700）、认证丢失（#39170）到发送卡死（#40968）、GPT-5.6 握手失败（#40943），Windows 桌面端在上周更新后出现一系列回归，是当前最急迫的稳定性问题。
- **CLI 与桌面端行为不一致**：同一配置（如 reasoning effort）在 CLI 与桌面端产生不同效果，开发者希望统一行为标准。
- **远程连接的信任验证链路脆弱**：Android/iOS 远程连接的路径大小写敏感、格式错误等问题反复出现，影响跨平台工作流。
- **token 用量核算透明度**：子代理 token 用量归入根目标、按活跃模型解析 token 预算等改进，回应了开发者对用量归因和预算控制的需求。
- **安全机制需兜底**：开发者认可 Guardian 和终端输入审查方向的收紧（更短延迟、失败关闭），但对功能可用性的平衡仍有要求。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-28

## 1. 今日速览

今日发布 nightly v0.59.0，核心修复是**阻止 MCP OAuth 元数据发现与认证中的 SSRF 漏洞**（#29081）。社区讨论热度集中在 Agent 可靠性问题：**子代理在到达 MAX_TURNS 后被误报为 GOAL 成功**、**通用代理无限挂起**，以及影响企业用户的 **Workspace 账号认证失败**。新增 PR 聚焦于文件系统服务路由与安全加固，体现了对扩展安全和核心稳定性的持续投入。

## 2. 版本发布

**v0.59.0-nightly.20260827.g3c311beac**
- 核心修复：阻止 MCP OAuth 元数据发现与认证流程中的 SSRF（服务端请求伪造）漏洞，PR #29081。

## 3. 社区热点 Issues

1. **[#22323] Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption** — `codebase_investigator` 子代理在达到最大轮次后仍返回 "success" 与 "GOAL" 终止原因，掩盖了实际中断，误导用户判断任务真实状态。评论 13 条，社区关注度高。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **[#21409] Generalist agent hangs** — 通用代理会无限期挂起，连简单的文件夹创建操作都无法完成，等待超 1 小时仍无响应。👍 8，为当前最高赞 Issue 之一。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **[#29101] Authentication failure blocking Enterprise Workspace accounts** — 企业 Workspace 账号按文档配置后遭遇认证失败，直接影响企业用户，创建于 08-26 迅速获得 7 条评论。
   https://github.com/google-gemini/gemini-cli/issues/29101

4. **[#25166] Shell command execution gets stuck with "Waiting input" after command completes** — 命令已执行完毕但界面仍显示挂起等待输入，高频出现于极简命令，影响日常使用效率。👍 3。
   https://github.com/google-gemini/gemini-cli/issues/25166

5. **[#22745] Assess the impact of AST-aware file reads, search, and mapping** — 探索 AST 感知工具的价值，以期单次调用精确定位方法边界、减少轮次。属大型增强方向 EPIC。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **[#19873] Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** — 利用 Gemini 3 模型的原生 bash 能力，通过零依赖沙箱与意图路由提升代码库探索效率。为 effort/large 增强提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

7. **[#21968] Gemini does not use skills and sub-agents enough** — 模型不会主动使用自定义 skills 和子代理，需显式指令才触发，影响自动化程度。
   https://github.com/google-gemini/gemini-cli/issues/21968

8. **[#22267] Browser Agent ignores settings.json overrides** — 浏览器代理完全忽略全局或项目级 settings.json 中的配置覆盖（如 maxTurns），与 AgentRegistry 的预期行为不符。
   https://github.com/google-gemini/gemini-cli/issues/22267

9. **[#22672] Agent should stop/discourage destructive behavior** — 模型在复杂 git 操作中可能使用 `git reset` 或 `--force` 等危险命令，社区建议在存在更安全替代方案时予以劝阻。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **[#20079] ~/.gemini/agents/filename.md is not recognized if it's a symlink** — 符号链接形式的 agent 定义文件无法被识别，影响配置文件管理的灵活性。
    https://github.com/google-gemini/gemini-cli/issues/20079

## 4. 重要 PR 进展

1. **[#29110] fix(core): route read_file content through FileSystemService** — `read_file` 绕过注入的 FileSystemService 直接读盘，与 `write_file`/`replace` 行为不一致。此修复统一 I/O 路由。
   https://github.com/google-gemini/gemini-cli/pull/29110

2. **[#29099] fix(core): enforce fail-closed workspace trust and filter mcpServers in restricted mode** — 在不可信/受限环境中强制 fail-closed 工作区信任解析，过滤仓库定义的 mcpServers，防止意外进程执行。
   https://github.com/google-gemini/gemini-cli/pull/29099

3. **[#28863] fix(extensions): prompt for consent on environment changes and sanitize runtime-altering environment variables** — 修复扩展更新可绕过用户同意、向 MCP 服务器进程注入未授权环境变量的问题。
   https://github.com/google-gemini/gemini-cli/pull/28863

4. **[#29106] fix(core): flush final SSE event on EOF without trailing blank line** — 修复 SSE 解析器在流结束无尾随空行时静默丢弃最终缓冲事件的问题，避免丢失 `finish` 等关键消息。
   https://github.com/google-gemini/gemini-cli/pull/29106

5. **[#29104] feat(cli): add [Skill] tag to slash command autocomplete suggestions and help** — 为技能支持的斜杠命令添加 `[Skill]` 标签，与现有 `[MCP]`、`[Agent]` 视觉风格保持一致，提升菜单可辨识度。标记为 help wanted。
   https://github.com/google-gemini/gemini-cli/pull/29104

6. **[#28827] fix(core): avoid false authentication errors for 401 substrings** — 修复 `isAuthenticationError` 将包含 "401" 子串的无关注值误判为认证失败的问题，仅在消息开头或 HTTP 上下文识别 401。
   https://github.com/google-gemini/gemini-cli/pull/28827

7. **[#28914] fix(core): inject on-retry nudge into conversation contents to preserve prefix caching** — 将重试提示从 systemInstruction 移至 contents 末尾（用户轮次后缀），保留静态提示前缀缓存，同时确保模型感知恢复提示。
   https://github.com/google-gemini/gemini-cli/pull/28914

8. **[#20536] feat(cli): support stats output in non-interactive mode** — 非交互模式下 `/stats` 命令因输出未达 stdout 而静默失败，此 PR 将 SessionMetrics 数据接入输出项。标记为 help wanted，累积关注度较高。
   https://github.com/google-gemini/gemini-cli/pull/20536

9. **[#27467] fix(core): handle multi-line escaped quotes in stripShellWrapper** — 修复 stripShellWrapper 无法正确解析含转义引号的多行命令（如 `bash -c "hg commit -m \"title\n\nbody\""`），改用 shell-quote 解析。
   https://github.com/google-gemini/gemini-cli/pull/27467

10. **[#28794] fix(cli): prevent fail-open and data loss on corrupt MCP enablement config** — 修复 `mcp-server-enablement.json` 损坏时可能导致的 fail-open 重启用与数据丢失漏洞。与 #28787 为同一问题的两个修复方案。
    https://github.com/google-gemini/gemini-cli/pull/28794

## 5. 功能需求趋势

从近期 Issues 与 PR 中可提炼出以下社区最关注的功能方向：

- **Agent 可靠性与可观测性**：子代理 MAX_TURNS 误报、通用代理挂起、浏览器代理配置不生效等问题频发，社区强烈期望更稳定的代理执行与更透明的状态汇报。
- **安全加固（零信任）**：SSRF 修复、MCP 配置 fail-closed、环境变量净化、损坏配置不 fail-open 等 PR 集中出现，安全已成为核心关注点。
- **文件系统与沙箱能力**：AST 感知文件读取、零依赖 OS 沙箱、FileSystemService 统一路由等方向表明社区希望模型更智能、更安全地操作文件系统。
- **Skills 与子代理的主动使用**：模型不会主动调用自定义 skills/sub-agents 是明确痛点，社区期待更智能的工具选择机制。
- **非交互模式增强**：`/stats` 输出支持等需求指向 headless/CI 场景下功能完备性的提升。

## 6. 开发者关注点

- **误报与状态透明性**：MAX_TURNS 被报告为 GOAL 成功会误导用户判断任务结果，开发者要求状态汇报如实反映中断原因。
- **挂起与卡死问题**：通用代理挂起、shell 命令执行后 "Waiting input" 卡死等问题严重影响日常使用体验，属最高频痛点。
- **配置灵活性受限**：符号链接的 agent 文件不被识别、浏览器代理忽略 settings.json 覆盖等问题限制了开发者自定义工作流。
- **危险操作防护**：开发者希望代理在 git 重置/强制操作等场景中主动选择更安全的替代方案。
- **企业级认证稳定性**：Workspace 账号认证失败直接影响企业采用，需要官方优先处理。
- **工具数量上限**：超过 128 个工具时遭遇 400 错误，社区希望代理能更智能地按需裁剪工具范围。


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-28

## 今日速览

Copilot CLI 发布 v1.0.81 稳定版，正式面向所有用户开放插件仪表盘（`/plugin`、`/mcp`、`/skills`），并全面落地 MCP 2026-07-28 协议支持。社区侧，长会话稳定性问题成为焦点：FileWatch 事件循环导致 13GB 调试日志的 issue 引发热议，同时多起与会话恢复、事件存储相关的故障报告集中出现。功能需求方面，社区持续呼吁官方 JSON Schema、设置持久化和可审计的审查记录。

## 版本发布

### v1.0.81（2026-08-27，正式版）
- **插件仪表盘全面开放**：所有用户可通过 `/plugin`、`/mcp`、`/skills` 命令访问；设置 `PLUGINS_DASHBOARD=false` 可退出（同时禁用 `copilot plugins` 命令）
- **MCP 2026-07-28 协议支持**：同步至 CLI、SDK、IDE 及内存客户端
- **Hooks 增强**：支持接收当前 OpenTelemetry 上下文

### v1.0.81-14（预发布）
- **改进**：恢复大型会话时优先显示近期历史，旧消息后台加载，显著提升恢复速度
- **修复**：重复调用 `read_agent` 时，除非指定 `since_turn`，现在始终返回完整回合历史

### v1.0.81-13（预发布）
- **新增**：Hooks 现在可接收当前 OpenTelemetry trace 上下文并生成关联 spans——输入新增 `traceparent`（span 含供应商状态时附带 `tracestate`）；命令 hooks 同时获得对应环境变量
- **修复**：子代理内 hooks 触发的生命周期事件（`hook.start`/`hook.end`）

## 社区热点 Issues（10 个）

**1. [#4639 — v1.0.80 事件存储耗尽触发重试风暴，导致 GC/压缩循环和 Node OOM](https://github.com/github/copilot-cli/issues/4639)** ⭐ 新
- **标签**：`triage`
- **重要性**：长会话在远程事件存储耗尽后，导出器持续尝试 500 事件批量刷新，反复触发内存压力与强制 GC，最终导致进程 OOM。直接关系 CLI 在长时间运行场景下的稳定性。
- **社区反应**：昨日新开，暂无评论，但严重性高。

**2. [#4612 — FileWatch 事件循环失控冻结 TUI，调试日志膨胀至 13GB](https://github.com/github/copilot-cli/issues/4612)** ⭐ 新
- **标签**：`triage`
- **重要性**：长时间运行/恢复的会话会进入紧循环，反复输出 `[DEBUG] No connection accepted a host event {"kind":"FileWatch"}`，直至 TUI 冻结、日志膨胀至 13GB。高度影响日常使用。
- **社区反应**：创建 1 天内获 5 条评论、1 个 👍，说明受影响的用户不少。

**3. [#4629 — `--resume` 恢复会话时插件 hooks 不加载](https://github.com/github/copilot-cli/issues/4629)** ⭐ 新
- **标签**：`sessions`、`plugins`
- **重要性**：同一插件在全新会话中正常触发所有 hooks，但通过 `--resume` 恢复后完全失效，直接破坏依赖 hooks 的自动化工作流。
- **社区反应**：昨日新开，1 条评论确认了该行为。

**4. [#3760 — Ctrl+Enter 实际输入换行而非发送，Ctrl+Q 才是入队键](https://github.com/github/copilot-cli/issues/3760)** 🔥 高热度
- **标签**：`input-keyboard`、`platform-windows`
- **重要性**：UI 提示与实际按键行为不一致，Windows 用户被反复误导，影响核心交互效率。
- **社区反应**：获 12 个 👍，是近期评论数最高的键盘相关问题之一，虽创建较早但仍持续引发关注。

**5. [#4602 — managedSettings 故障闭合导致 store_memory 全会话失效、MCP 服务器被清空](https://github.com/github/copilot-cli/issues/4602)** ⭐ 新
- **标签**：`enterprise`、`context-memory`、`mcp`
- **重要性**：单一根因（`serverFetchFailed` 瞬时抖动触发 managedSettings fail-closed）导致多个症状同时爆发——`store_memory` 全会话失败且所有 MCP 服务器被剥离。企业环境影响面广。
- **社区反应**：作者详细说明了与多个既有 issue 的关联，值得维护者合并排查。

**6. [#2712 — 速率限制行为的法律/金钱责任争议](https://github.com/github/copilot-cli/issues/2712)** 🔥 长期
- **标签**：`agents`、`models`
- **重要性**：当前速率限制系统可在无用户操作前提下自行触发限流（如 `/fleet`、后台 agents），作者质疑由此产生的法律与金钱责任归属。涉及产品策略层面。
- **社区反应**：6 条评论、4 个 👍，持续有人在关注和补充。

**7. [#2873 — Copilot Pro 订阅与 Opus 模型权限争议](https://github.com/github/copilot-cli/issues/2873)** 🔥 长期
- **标签**：`models`
- **重要性**：Pro 订阅用户突然失去 Opus 模型访问权，涉及订阅权益边界与多倍请求计费策略的透明度问题。
- **社区反应**：5 条评论持续追踪，作者明确表示可以接受请求倍数，但不能接受被完全禁用。

**8. [#4641 — 发布官方 settings.json JSON Schema](https://github.com/github/copilot-cli/issues/4641)** ⭐ 新
- **标签**：`triage`
- **重要性**：`~/.copilot/settings.json` 配置项持续增长，官方 Schema 将带来编辑器自动补全与校验，显著降低配置出错率。
- **社区反应**：昨日新开暂无评论，属于明确的工具链改进诉求。

**9. [#4621 — Rubber duck 审查缺乏可验证记录](https://github.com/github/copilot-cli/issues/4621)** ⭐ 新
- **标签**：`sessions`、`agents`
- **重要性**：审查意见、产生意见的模型、会话对每条意见的处理结果均随会话结束而消失，无法审计。对需要合规记录的团队是关键缺口。
- **社区反应**：暂 0 评论，但引用 #4380、#4432 佐证痛点，是代理功能成熟度的重要信号。

**10. [#4638 — 模型上下文窗口计算不应简单相加 prompt 与 output 上限](https://github.com/github/copilot-cli/issues/4638)** ⭐ 新
- **标签**：`triage`
- **重要性**：模型详情展示将 `max_prompt_tokens` 与 `max_output_tokens` 相加推导总上下文，可能超过实际 `max_context_window_tokens`，误导用户对模型容量的判断。
- **社区反应**：暂无评论，属技术准确性改进建议。

## 重要 PR 进展

过去 24 小时内无新增或更新的 PR。

## 功能需求趋势

从近期 Issues 中可提炼出以下社区核心诉求方向：

1. **长会话可靠性**：多起 issue（#4612、#4639）指向长时间运行/恢复会话时的资源失控——事件循环风暴、存储耗尽重试、GC 循环。这是当前最紧迫的稳定性短板。
2. **Hooks 生命周期完整性**：`userPromptTransformed` 对 steering 消息不触发（#4640）、`--resume` 后插件 hooks 全部丢失（#4629），hooks 机制在边界场景下的行为一致性成为焦点。
3. **配置与可观测性标准化**：官方 settings.json JSON Schema（#4641）、自动允许权限的持久化设置（#3877）、模型上下文信息准确展示（#4638），反映社区对"可配置、可预期、可审计"的追求。
4. **会话可审计性**：rubber duck 审查记录留存（#4621）、非交互模式下权限静默撤销问题（#4433），代理功能越发强大后，用户开始要求完整的操作留痕与权限透明度。
5. **MCP 协议完善**：Windows 下 stdio MCP 启动问题（#3576）、显式命令被改写为 pipx（#1385）、分页未跟随（#4006），MCP 生态兼容性仍在持续打磨中。
6. **模型访问策略透明度**：Pro 订阅与 Opus 模型权限（#2873）、速率限制责任归属（#2712），商业模式变动对 CLI 实际可用性的影响引发用户焦虑。

## 开发者关注点

- **Windows 平台体验**：键盘快捷键行为与 UI 提示不一致（#3760）、stdio MCP 服务器 `npx` 启动失败（#3576）——Windows 用户的高频痛点集中在输入体验和进程管理两个方向。
- **会话恢复的隐形代价**：`--resume` 虽然方便，但可能丢失插件 hooks（#4629）、触发 FileWatch 循环（#4612），"恢复比新建更危险"的体验需要尽快改善。
- **权限与配置的自动化诉求**：自动 `/allow-all`（#3877）与"非交互模式下写权限静默永久撤销"（#4433）形成鲜明对比——一边要更激进的默认放行，一边在真实的无人值守场景中被卡死。合理配置、外部策略注入的讨论会进一步升温。
- **诊断信号持续失真的隐患**：多起 issue 指向系统"失败闭合"（fail-closed）行为——瞬时网络抖动（#4602）、偶发验证错误（#4627）即可让整个会话工具链瘫痪。管理面与数据面解耦、配置缓存与自动恢复机制，将是企业用户最关心的演进方向。

---
*本日报基于 github.com/github/copilot-cli 在 2026-08-27 至 2026-08-28 期间的数据自动生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-28

## 今日速览

过去 24 小时内 Kimi Code CLI 仓库无新版本发布，也无新增 PR 合并。社区动态集中在 2 条 Issue 上：一条是开发者对 Kimi API 消息格式校验（tool_calls 与 content 空值冲突）的激烈吐槽，另一条是 cron 定时提醒触发导致历史回复消失的界面 Bug 反馈。

## 版本发布

过去 24 小时内无新版本发布，暂无可更新的发布内容。

## 社区热点 Issues（共 2 条）

过去 24 小时更新量较少，以下为全部在更 Issue：

1. **[#2621] 开发 Kimi API 都是吃 **** 的吗？**  
   作者: Valen-akm | 创建: 2026-08-27 | 👍: 1 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2621)  
   核心矛盾：模型返回的消息中 `content` 为空（仅含 `tool_calls`），开发者原样回传该消息时 API 返回 400 `text content is empty`。开发者对"同一消息出得去、回不来"的校验逻辑表达强烈不满，被迫为 Kimi 单独写空 content 兼容判断。该 Issue 暗示 API 层与 CLI 层在 tool calling 消息格式上存在一致性缺陷。

2. **[#2620] Cron fire mid-reply swallows the previous assistant reply; unrecoverable via Ctrl+O**  
   作者: tizerluo | 创建: 2026-08-26 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2620)  
   定时 cron 提醒在助手回复尚未结束时触发，导致屏幕上已生成的部分回复从可见记录中消失，且无法通过 Ctrl+O 或回滚恢复。该问题直接影响定时任务场景下的用户体验，属交互层状态管理缺陷。

## 重要 PR 进展

过去 24 小时内无 PR 更新，暂无可报告的进展。

## 功能需求趋势

基于当前有限的 Issue 样本，社区关注点集中在以下方向：

- **Tool Calling 消息格式兼容性**：要求 API 端对 `content` 为空但含 `tool_calls` 的消息提供一致的校验规则，避免开发者额外写兼容层。
- **交互可靠性（会话状态保持）**：在 cron 等异步事件触发时，必须确保已有聊天记录不丢失、可恢复。

## 开发者关注点

- **API 消息校验逻辑与实际产出不一致**：模型自身返回的消息再次提交时被拒绝，开发者被迫针对 Kimi 定制特殊处理逻辑，增加了接入成本。
- **异步事件与回复渲染的竞态问题**：定时提醒打断回复流会导致内容丢失，需要更稳健的状态管理或恢复机制。

---

*注：24 小时窗口内数据量有限（2 Issue / 0 PR / 0 Release），以上分析基于当前可用数据。如需更全面的趋势洞察，建议结合更长窗口的 Issue/PR 数据。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-28

## 今日速览

今日 OpenCode 社区最受关注的话题是围绕 1.18 版本新标签布局的反复讨论。一方面，标记为 `[needs:compliance]` 的 Issue #37527 已被关闭，但高赞的 #37012（43 👍）仍在强烈呼吁保留旧布局；另一方面，多个全新 Issue（#45580、#45592、#45596 等）于今日密集提交并关闭，反映出 1.18.23 升级后存在会话丢失、服务器鉴权等回归问题。此外，Bun 运行时在 Windows 上的严重内存泄漏、6MB 请求体限制等问题仍持续引发开发者关注。

## 社区热点 Issues（10 个）

**1. #37012 [FEATURE] 保留旧版布局选项** — [链接](https://github.com/anomalyco/opencode/issues/37012)
- **重要性**：目前评论数最高（40 条）且获 43 个 👍 的 Issue。用户指出旧布局能够从主窗口快速访问几乎所有功能，而新版本需要多层导航，代表了一大批老用户的共同诉求。
- **社区反应**：强烈支持，评论区存在广泛讨论，后续 Issue #37527（已关闭）也涉及同一主题。

**2. #27755 TypeError: Failed to fetch — 打开后无法发送任何提示** — [链接](https://github.com/anomalyco/opencode/issues/27755)
- **重要性**：这是一个存在了 3 个月以上的核心稳定性问题，打开后短时间内即出现 "Failed to fetch" 错误，导致所有后续输入无响应，严重影响正常使用。
- **社区反应**：8 条评论，属于高频复现的阻塞性问题。

**3. #37399 xAI Grok 4.5 生成无用的 bash true 工具调用** — [链接](https://github.com/anomalyco/opencode/issues/37399)
- **重要性**：模型行为异常导致大量无效工具调用，浪费 token 和时间。该问题直接影响 xAI Grok 4.5 用户的日常体验。
- **社区反应**：6 条评论，社区关注度一般，但问题本身具有代表性。

**4. #35240 项目重命名后服务器保留过期的 `project.worktree`** — [链接](https://github.com/anomalyco/opencode/issues/35240)
- **重要性**：影响远程桌面客户端的工作流，项目文件夹改名后远程客户端仍尝试重新打开已失效路径，属于功能性回归。
- **社区反应**：5 条评论，涉及 1.17.13 版本，部分用户可能已通过升级解决。

**5. #34344 免费模型无限量使用的漏洞** — [链接](https://github.com/anomalyco/opencode/issues/34344)
- **重要性**：安全问题——报告者确认免费模型的速率限制仅基于 IP 地址，通过切换 VPN 即可无限期绕过，任何人都可以持续使用免费模型资源。
- **社区反应**：5 条评论。此问题涉及服务端策略，建议社区重点关注。

**6. #41206 OpenCode Go 周/月配额与使用历史不一致** — [链接](https://github.com/anomalyco/opencode/issues/41206)
- **重要性**：计费/配额功能存在数据不一致问题，直接影响用户对订阅额度消耗的判断，具有经济影响。
- **社区反应**：4 条评论，报告者提供了具体时间线（8 月 7 日开始使用），便于复现核实。

**7. #35847 Bun 在 Windows 11 上运行约 12 小时后崩溃并伴随严重内存泄漏** — [链接](https://github.com/anomalyco/opencode/issues/35847)
- **重要性**：长期会话稳定性问题。RSS 峰值达到 **45.29 GB**，系统内存占用 9x%，导致整个系统不可用。这是一个严重的稳定性缺陷。
- **社区反应**：4 条评论，此类极端内存泄漏值得优先修复。

**8. #35112 6MB 请求体限制阻止合法图片输入（Qwen3.7Plus / OpenCode Go）** — [链接](https://github.com/anomalyco/opencode/issues/35112)
- **重要性**：请求体大小限制导致带图片的合法请求被拒，限制了多模态输入场景，影响功能完整性。
- **社区反应**：3 条评论，但获得 1 👍，建议调整或移除该限制。

**9. #44135 GPT 5.6 Luna 在 OpenCode Go 上返回 `[invalid_encrypted_content]` 解密错误** — [链接](https://github.com/anomalyco/opencode/issues/44135)
- **重要性**：新模型与 OpenCode Go 提供商之间的兼容性问题，上游响应无法解密或解析，可能导致该模型完全不可用。
- **社区反应**：3 条评论，属于较新出现的集成问题。

**10. #45580 OpenCode AI 自行执行更改，造成大量时间和用量浪费** — [链接](https://github.com/anomalyco/opencode/issues/45580)
- **重要性**：发布于 8 月 27 日（今日），描述 AI 在复杂项目中判定失误后擅自行动。此类问题涉及模型行为边界，是最敏感的用户痛点之一。
- **社区反应**：3 条评论，此问题刚发布，建议关注后续跟进。

## 重要 PR 进展（10 个）

所有今日 PR 均由贡献者 `kitlangton` 提交，集中于 core 与 TUI 模块的清理、重构和测试改进，无重大功能 PR。

**1. #45748 [test] 共享 selector 哨兵，消除 5 个 provider 测试套件的重复代码** — [链接](https://github.com/anomalyco/opencode/pull/45748)
- **内容**：统一 provider 测试中模拟 selector 的方式，消除将三字段记录哨兵强转为完整语言模型的做法。

**2. #45747 [refactor] 移除未使用的 instruction 导入** — [链接](https://github.com/anomalyco/opencode/pull/45747)
- **内容**：删除 `SessionInstructions` 模块中未被引用的 `DateTime` 导入，理清实际 Effect 依赖。

**3. #45746 [refactor] 在内部模块中导入规范 Schema 契约** — [链接](https://github.com/anomalyco/opencode/pull/45746)
- **内容**：仅消费浏览器安全 Schema 契约的内部模块，不再导入更广泛的 Core 运行时外观，使类型级依赖更清晰。

**4. #45745 [test] 使用可释放的会话测试夹具** — [链接](https://github.com/anomalyco/opencode/pull/45745)
- **内容**：三个 Session 测试边界手动复刻了 `Effect.acquireDisposable` 已有的异步释放协议，改为复用标准夹具；修复了 prompt 图片测试绕过共享临时目录的问题。

**5. #45743 [test] 简化 provider 测试夹具** — [链接](https://github.com/anomalyco/opencode/pull/45743)
- **内容**：移除 provider 测试中已提供但未消费的服务，并清理规范绑定测试中冗余的嵌套服务读取。

**6. #45742 [refactor] 移除未使用的 response stream 状态** — [链接](https://github.com/anomalyco/opencode/pull/45742)
- **内容**：Copilot Responses 流为每次函数调用存储的 tool name，经排查并无消费者使用，删除多余状态簿记。

**7. #45631 [refactor] 移除无效的类型化恢复逻辑** — [链接](https://github.com/anomalyco/opencode/pull/45631)
- **内容**：多个不可能失败的 Effect 操作被包裹在类型错误恢复中，但错误通道为 `never`，无法恢复缺陷或中断——清理此类无用包裹。

**8. #45741 [fix] TUI 问题提示改用主题主色** — [链接](https://github.com/anomalyco/opencode/pull/45741)
- **内容**：将问题标签页的 `?` 指示器从信息反馈色改为与选项一致的主题主色，PR 附有主题对比草稿。

**9. #45745 [test] 保证执行作用域在断言失败时也能被清理** — [链接](https://github.com/anomalyco/opencode/pull/45740)
- **内容**：两个执行生命周期测试在独立作用域构建层，但仅在断言成功后关闭作用域。若断言失败，会导致执行协调器层泄漏，包括一个永不休止的 drain —— 现保证始终清理。

**10. #45739 [refactor] 扁平化会话标题工厂** — [链接](https://github.com/anomalyco/opencode/pull/45739)
- **内容**：标题层构建私有依赖记录，再包裹仅有的生成方法以回传数据库，现移除重复的层接线与手写的 LLM 客户端子集。

## 功能需求趋势

从近期 Issues 中可提炼出以下社区重点需求方向：

- **布局与 UI 灵活性**：旧版布局的保留（#37012）、项目/会话侧边栏与标签页共存（#37273，16 👍）等需求呼声最高，说明 UI 改版（1.18）在社区中引发了对可用性的反弹。
- **稳定性和可靠性**：多个阻塞性问题（#27755）和长时间运行崩溃（#35847）显示，稳定性是用户最关心的核心基础能力。
- **移除或放宽大小限制**：6MB 请求体限制（#35112）制约了多模态（图片）协作场景，用户期望放开。
- **配额透明度**：OpenCode Go 配额与实际用量不一致（#41206）表明用户对模型用量透明度有更高期待。
- **新模型兼容性**：GPT 5.6 Luna（#44135）、Grok 4.5（#37399）等最新模型的接入仍存在较多兼容性问题，社区对新模型的支持速度有持续需求。

## 开发者关注点

- **布局回归是最大争议**：新版标签布局虽可切换回旧版，但围绕“默认值”“多项目支持”“侧边栏协同”的讨论持续升温，且触发了 `[needs:compliance]` 标签的介入。
- **1.18.23 升级后的回归值得警惕**：今日多个新提交的 Issue 同时指向 1.18.23（服务器 orange dot 401、会话丢失、AI 自行操作），且多被快速关闭，建议团队关注升级链路的回归测试。
- **内存与长期运行稳定性**：Bun 后端在 Windows 上的内存泄漏最终导致系统级的不可用，是高频场景（长时间开发）下的强烈痛点。
- **测试质量与代码卫生**：大量 PR 指向测试夹具的健壮性、断言失败后的资源泄漏、冗余 fixture 清理，反映出对测试可靠性的持续投入。
- **免费模型滥用**：VPN 绕过配额是一个潜在的资源滥用路径，社区主动上报说明有一定安全意识，建议考虑增加多维度限流策略。
- **代理（Subagent）权限规则有漏洞**：任务子代理继承父会话的 deny 规则时忽略规则顺序（#45078），以及拒绝自引用 session ID（#45364），涉及权限一致性问题，需谨慎处理。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-28

## 今日速览

今日社区焦点集中在 **v0.84.3 回归问题**：多个扩展加载失败（#8620）及 Google Vertex 代理错误（#8610，已通过 PR #8723 修复）；同时，TUI 交互体验是今日高频改进方向，**“禁用选择即复制”**（#7720）已由 PR #8731 实现。此外，**可配置的压缩（compaction）思考级别/模型**（#7553）对应的 PR #7602 已就绪，社区对新模型支持（qwen3.8-flash）关注度持续上升。

## 社区热点 Issues（Top 10）

1. **[#6922] 默认模型无法设置为 llama.cpp 模型**（CLOSED，👍14，评论12）
   启动时显示 "No models available"。该问题获 14 个 👍，为今日列表最高，解决 "starter" 场景。
   [链接](https://github.com/earendil-works/pi/issues/6922)

2. **[#8620] v0.84.3 回归：所有全局扩展报 "Cannot find module '@earendil-works/pi-coding-agent'"**（OPEN，评论5）
   升级到 0.84.3 后，`~/.pi/agent/extensions/` 中所有扩展无法加载。高影响回归，需尽快修复。
   [链接](https://github.com/earendil-works/pi/issues/8620)

3. **[#8444] `thinkingTokenBudgetField` 被忽略**（CLOSED，评论6）
   文档中说明的配置项不生效，支持 `supportsThinkingTokenBudget` 但字段名称无法更改。
   [链接](https://github.com/earendil-works/pi/issues/8444)

4. **[#8610] v0.84.3 回归：设置代理时 Google Vertex 报 'HttpsProxyAgent is not a constructor'**（CLOSED，评论4）
   设置 `https_proxy`/`http_proxy` 后所有请求失败。已由 PR #8723 修复。
   [链接](https://github.com/earendil-works/pi/issues/8610)

5. **[#7553] 为压缩功能配置独立的思考级别/模型**（OPEN，inprogress，评论9）
   自动/手动压缩无法使用独立思考级别，导致推理模型的思考预算被额外消耗。核心功能增强，获 PR #7602 支持。
   [链接](https://github.com/earendil-works/pi/issues/7553)

6. **[#5002] 支持全局 `~/.agents/AGENTS.md` 指令**（CLOSED，评论5）
   请求加载用户主目录下的全局指令文件，以便在项目间共享开发规范。
   [链接](https://github.com/earendil-works/pi/issues/5002)

7. **[#5329] 暴露 Pi 等待用户输入的状态**（CLOSED，👍9，评论3）
   Host 集成（如 cmux）需要区分"正在运行"与"等待用户输入"。已由 PR #8355 解决。
   [链接](https://github.com/earendil-works/pi/issues/5329)

8. **[#8728] DeepSeek 兼容端点（api.b.ai/sensenova）缺少 reasoning 内容兼容自动启用**（CLOSED，评论3）
   跨提供商重放时返回 400 错误。已由 PR #8732 修复。
   [链接](https://github.com/earendil-works/pi/issues/8728)

9. **[#8711] TUI 在 OpenRouter 流式输出时 100% CPU 占用并冻结**（CLOSED，评论2）
   GLM-5.3-flash 流式推理时 `reasoning_details` 存储为每 token 一个对象，导致性能瓶颈。
   [链接](https://github.com/earendil-works/pi/issues/8711)

10. **[#8688] Windows PowerShell 工具：每个命令前被添加游离的 `.`**（CLOSED，评论3）
    编码前缀与用户命令之间缺少分隔符，破坏首词，影响 Windows 用户核心体验。
    [链接](https://github.com/earendil-works/pi/issues/8688)

## 重要 PR 进展（Top 10）

1. **[#8731] feat(tui): 允许禁用复制功能，Ctrl+X 复制选中内容**（CLOSED）
    新增 `copyOnSelect` 设置（默认开启），关闭后 Ctrl+X 复制选中文本。解决 #7720，回应 TUI 高频需求。
    [链接](https://github.com/earendil-works/pi/pull/8731)

2. **[#8723] fix(coding-agent): 暴露 `https-proxy-agent` 具名导出**（CLOSED）
    修复 #8610 代理回归。通过新增构建插件生成独立 chunk，已通过 AI 生成测试验证。
    [链接](https://github.com/earendil-works/pi/pull/8723)

3. **[#8732] fix(ai): 跨模型重放至 DeepSeek 系列端点时保留 `reasoning_content`**（CLOSED）
    修复 #8728。向 DeepSeek 推理端点重放消息时同步保留推理内容字段，避免 400 报错。
    [链接](https://github.com/earendil-works/pi/pull/8732)

4. **[#8744] feat(tui): 可选 overlay 选区排除功能**（OPEN）
    增强全屏模式下选区行为，使复制文本来自 transcript 内容而非终端合成画面。
    [链接](https://github.com/earendil-works/pi/pull/8744)

5. **[#7602] feat(coding-agent): 可配置摘要模型与思考级别**（OPEN）
    为压缩和分支摘要添加独立模型与思考级别配置，修复 #7553。处理提供商错误与上下文窗口限制。
    [链接](https://github.com/earendil-works/pi/pull/7602)

6. **[#8734] feat(ai): OpenAI Responses 兼容提供商支持顶层 `instructions`**（OPEN）
    新增 `systemPromptFormat` 兼容选项（默认保持 `input`），配置后将动态系统提示移至顶层 `instructions`，不重复发送。
    [链接](https://github.com/earendil-works/pi/pull/8734)

7. **[#8355] feat(extensions): UI 提示事件**（CLOSED）
    新增 `ui_prompt_start`/`ui_prompt_end` 事件，解决 #5329，使客户端可显示 "Waiting for user input"。
    [链接](https://github.com/earendil-works/pi/pull/8355)

8. **[#8727] fix(tui): 保留屏幕外变化时的滚动历史**（CLOSED）
    将视口上方的主屏幕变化保存为原生滚动历史快照，避免重放导致的滚动丢失。
    [链接](https://github.com/earendil-works/pi/pull/8727)

9. **[#8743] fix(coding-agent): 忽略过期的工具图像转换**（CLOSED）
    将 Kitty 图像转换缓存绑定到源图像，忽略过期转换，仅渲染匹配当前图像的缓存结果。
    [链接](https://github.com/earendil-works/pi/pull/8743)

10. **[#8719] fix(ai): 空白工具结果视为空输出**（CLOSED）
    解决 Windows 下 `"\r\n"` 等空白工具结果被发送给提供商并被拒绝的问题。
    [链接](https://github.com/earendil-works/pi/pull/8719)

## 功能需求趋势

- **TUI 交互优化**：选择复制行为（#7720/PR #8731）、滚动保留（PR #8727）、Overlay 选区（PR #8744）— TUI 是当前最活跃的改进方向。
- **可配置的压缩/摘要**：为压缩和分支摘要设置独立思考级别与模型（#7553/PR #7602），反映推理模型用户对思考预算控制的核心诉求。
- **新模型支持**：qwen3.8-flash 加入 Token 计划（#8709），跨提供商 DeepSeek 模型兼容增强（#8728）。
- **扩展能力与事件系统**：UI 提示事件（#5329/PR #8355）、全局 AGENTS.md（#5002）、UI 对话框事件（#7147）— 社区对扩展生态的完善有持续需求。
- **代理与网络兼容性**：NO_PROXY 通配符/子域匹配（#8737）、Vertex 代理修复（PR #8723）— 企业网络环境下的稳定性需求明显。

## 开发者关注点

- **v0.84.3 回归问题集中爆发**：扩展加载失败（#8620）、Vertex 代理错误（#8610）均出现在该版本，开发者对发布质量高度敏感。
- **Windows 兼容性痛点**：PowerShell 工具的自由分散问题（#8688）再次暴露跨平台支持不足。
- **OpenAI 兼容层细节**：`tool_choice` 应在无工具时省略（#8649）、`thinkingTokenBudgetField` 不生效（#8444）、空白工具结果被拒绝（PR #8719）— 兼容层稳定性是核心关注点之一。
- **性能问题**：TUI 流式推理时 100% CPU（#8711）获用户点赞支持，性能回退容易引发集中反馈。
- **安全守卫误报**：`rm-outside-project` 对写入内容产生误报（#8722），需要更精细的上下文判断。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-28

## 今日速览

过去 24 小时无新版本发布，社区焦点集中在多智能体（Multi-Agent）功能的可靠性问题、E2E 测试基础设施稳定性，以及模型能力自动探测需求上。值得关注的是，多条与 Agent Team 相关的 bug 被关闭（#10211、#10209、#10069），显示团队正在快速修复此前的功能缺陷；同时 `/review` 命令的收敛机制改进（#10153、#9905）和 CI 网络可达性问题（#10242）也引发讨论。

## 社区热点 Issues

### 1. [#10272 — E2E: external-context mem0 tests hang at 'Connecting to MCP servers' (P1)](https://github.com/QwenLM/qwen-code/issues/10272)
macOS 与 ecs-qwen runner 上 MCP 连接测试挂起，ubuntu-hosted 通过。已被关闭，说明问题已处理或定位。5 条评论，P1 优先级表明对 CI 稳定性影响严重。

### 2. [#10065 — LM Studio 0.4.21: "failed to parse grammar" even with no MCP/tools](https://github.com/QwenLM/qwen-code/issues/10065)
Windows 下 Qwen Code v0.22.1 搭配 LM Studio 本地模型时，即使 tools 完全清空仍报解析错误，影响本地推理用户。5 条评论，仍在开放中。

### 3. [#10309 — Feature: probe actual modality support at model setup (feature-request)](https://github.com/QwenLM/qwen-code/issues/10309)
提议在模型配置时发送一次性的多模态探测请求，替代目前基于名称模式的静态猜测。与 #10270 直接相关，反映社区对模型能力自动检测的强烈需求。3 条评论，标注 need-discussion。

### 4. [#10270 — Modality auto-detection fails for new DeepSeek/GLM vision models (P2)](https://github.com/QwenLM/qwen-code/issues/10270)
新 DeepSeek/GLM 视觉模型不被识别，图片静默占位，需手动覆盖配置。已关闭，与 #10309 形成"问题-提案"闭环。3 条评论。

### 5. [#10148 — Agent View: deliver queued follow-ups from the provider, not the keyed composer (P2)](https://github.com/QwenLM/qwen-code/issues/10148)
来自 #10102 修复的 review 发现：Agent View 中跟随消息的队列存储与投递分离，仅在 AgentComposer 组件内触发 flush。多智能体功能 UI 层的架构问题，3 条评论。

### 6. [#9475 — Assistant reasoning updates mid-screen, messing up all the text (P2)](https://github.com/QwenLM/qwen-code/issues/9475)
TUI 渲染问题：推理内容更新导致屏幕中部文本错乱，工具调用输出卡在底部。打上了 welcome-pr 标签，适合社区贡献者接手。3 条评论。

### 7. [#8124 — Startup banner sometimes missing top lines on first paint (P2)](https://github.com/QwenLM/qwen-code/issues/8124)
启动横幅首帧渲染偶发性缺行，与 provider 更新时序相关。已开放近一个月，10 条评论为今日最多，属于 UI 渲染的间歇性问题，welcome-pr 标签。

### 8. [#9927 — Artifact updatedAt stays stale; write_file intermediates linger as missing (P2)](https://github.com/QwenLM/qwen-code/issues/9927)
内容更新不触发 updatedAt 变化（仅注册字段变化时更新），会话产物（artifact）状态管理存在缺陷。已关闭。4 条评论。

### 9. [#9981 — Deferred review findings from PR #9406](https://github.com/QwenLM/qwen-code/issues/9981)
自动审查循环（autofix loop）产生的待处理 review 发现清单。此类 issue 反映该仓库已建立自动化的代码审查-修复-追踪机制，可持续关注后续拆分出的具体问题。5 条评论。

### 10. [#10242 — E2E: GitHub-hosted runners cannot reach OPENAI_BASE_URL (Aliyun Beijing) (P2)](https://github.com/QwenLM/qwen-code/issues/10242)
CI 基础设施问题：GitHub-hosted runner 间歇性无法访问阿里云北京的模型端点，非代码回归。已关闭，4 条评论。与 #10036 PR 中迁移到 ECS runner pool 的策略相互呼应。

## 重要 PR 进展

### 1. [#10268 — fix(daemon): Cancel timed-out session initialization](https://github.com/QwenLM/qwen-code/pull/10268)
让 daemon 会话初始化预算全链路生效：bridge 发送绝对截止时间，子进程透传取消信号。解决超时会话挂起问题，与 #10272 测试挂起相关。

### 2. [#10307 — fix(cli): swallow synchronous goal-persistence throws at the startup gate](https://github.com/QwenLM/qwen-code/pull/10307)
修复目标运行时（goal-runtime）启动门处的同步持久化异常导致 E2E 测试全部挂起的根因。由 bot 提交，对应 #10298。

### 3. [#10226 — feat: shell support optional worktree](https://github.com/QwenLM/qwen-code/pull/10226)
为 shell 增加可选 worktree 支持，autofix/takeover 状态。水星（water-in-stone）提交，暂无评论、需维护者补充评审测试计划。

### 4. [#9636 — feat: add native advisor tool](https://github.com/QwenLM/qwen-code/pull/9636)
新增可选的原生 Advisor 工具：配置独立 Advisor 模型后，executor 可调用无参 `advisor {}` 获取第三方意见并继续原任务。多智能体的重要能力扩展。

### 5. [#10206 — fix(core): fail closed on unresolved shell write redirects](https://github.com/QwenLM/qwen-code/pull/10206)
安全修复：当写重定向目标无法静态解析（如 `>"$PWD/protected.txt"`）时，权限检查保持保守（fail closed），防止越权写入。SLP-DEV1 提交。

### 6. [#10122 — feat(autofix): circuit breaker for the takeover loop](https://github.com/QwenLM/qwen-code/pull/10122)
为自动修复接管循环增加熔断机制：review CLI 发布收敛诊断码，autofix 循环消费这些信号判断是否应退出接管。对应 #10107 的需求。

### 7. [#10049 — feat(skills): namespace extension skill registry keys by extension name](https://github.com/QwenLM/qwen-code/pull/10049)
扩展提供的技能注册键从裸名称改为 `<extension>:<name>` 限定格式，涉及 Skill 工具查找、`<available_skills>` 上下文块及斜杠命令注册。破坏性变更需关注。

### 8. [#9970 — perf(cli): reduce TUI render overhead](https://github.com/QwenLM/qwen-code/pull/9970)
TUI 渲染性能优化：虚拟视口模式启用增量输出，历史渲染体隔离到 memoized 状态切片。对应 #9475 等渲染问题的性能侧修复。

### 9. [#10066 — feat(serve): allow relocating session attachment storage via env var](https://github.com/QwenLM/qwen-code/pull/10066)
新增 `QWEN_SERVE_SESSION_ATTACHMENTS_ROOT` 环境变量，允许运维将 Web Shell 会话附件存储重定位到自定义目录。

### 10. [#9769 — feat(web-shell): unblock git update on dirty working tree](https://github.com/QwenLM/qwen-code/pull/9769)
Web Shell 的"Update Project"操作现在能处理脏工作区：pull 被未提交更改阻塞时，分支选择器提供可操作的替代路径而非死路。

## 功能需求趋势

从近期 Issue 中可以提炼出以下几个社区最关注的方向：

- **模型能力自动探测**（#10309、#10270）：用户期望 Qwen Code 在配置模型时自动探测其真实支持的能力（模态），而非依赖名称模式猜测。当前对 DeepSeek/GLM 视觉模型识别失败是直接诱因。
- **多智能体（Multi-Agent）体验完善**（#10148、#10069、#10209、#10211）：Agent Team 的消息队列、事件桥接、资源回收等边界条件正在密集修复，该功能处于快速迭代期。
- **代码审查智能化**（#10153、#9905）：社区希望 `/review` 不仅指出问题，还能携带修复前提（premises）并在多轮审查中追踪同一子系统的重复 Critical 发现。
- **Web Shell 运维能力**（#10066、#9769、#8583）：会话附件存储可配置、脏工作区 git 更新、实验性 Session Workflow 控制台——Web Shell 正在从预览走向生产可用。
- **CI 基础设施稳定性**（#10242、#10036、#10087）：GitHub-hosted runner 的网络可达性问题推动工作流向自托管 ECS runner pool 迁移，同时针对不同信任级别的 PR 分流。

## 开发者关注点

- **本地模型服务的兼容性**：LM Studio 用户遇到的问题（#10065）表明 OpenAI 兼容层对不同推理后端的支持仍存在盲区，尤其是工具/语法相关的边缘情况。
- **TUI 渲染的可靠性**：多条 UI 渲染问题（#8124、#9475）暴露了第一帧渲染和动态内容更新时的竞态条件，虽有性能优化 PR（#9970）在进行，但间歇性问题的排查难度高，repo 通过 welcome-pr 标签鼓励社区参与。
- **CI 与测试基础设施**：E2E 测试的挂起问题（#10272、#10307、#10242）占据了大量维护者注意力，涉及 macOS/自托管 runner 环境的差异、外部端点可达性、以及启动路径中的异常捕获。
- **多智能体功能边界条件**：Agent Team 相关的并发回收（#10209）、事件桥接竞态（#10211）、消息队列丢失（#10069）等虽已修复，但表明该功能在真实使用场景中仍处于成熟化早期，社区用户在积极反馈并驱动改进。
- **自动代码审查体系已在运转**：多个 autofix-deferred 类 issue（#9981、#10018、#10216）以及 PR 上的 autofix/takeover 和 review/self-reported 标签，显示该仓库已经建立了"自动审查 → 修复 → 追踪"的闭环，这类机制对大型开源项目的代码质量保障具有参考价值。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-28

> 数据来源：[github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（实际仓库：CodeWhale）


## 1. 今日速览

v0.9.12 集成分支（PR #5576）已进入"必须修复 + UX 修复"阶段，代码已完成发布阻断项修复，等待版本号与 RC 门槛。今日合并了 8 个 PR，涉及 MCP 登录恢复（#5643）、插件盘变更提示（#5660）、密钥链弹出修复（#5662）、Moonshot 工具降级（#5636/5646/5651）等。此外，多个新设计提案（#5633 路由工具投影、#5637 MCP 密钥作用域、#5625 非阻塞 peek 工具）正在征集中，社区正在讨论上下文压力警告、git 锁冲突等运行时痛点。


## 2. 版本发布

过去 24 小时无新 Release。


## 3. 社区热点 Issues（10 个）

1. **#5620 — 上下文压力警告是瞬态的，agent 不主动响应**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5620)  
   严重度：中（静默上下文退化）。用户反馈警告出现后立即消失，agent 不主动采取收缩操作，可能影响长会话质量。8 条评论，社区持续跟进。

2. **#5588 — 提供商中立性：18 个 DeepSeek 专属 gate 应该中立化**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5588)  
   审计 279 个文件中的 2,281 行，发现 18 个行为被 DeepSeek 硬编码但概念上应支持任意提供商。维护者已发起修复，影响多提供商兼容。

3. **#5586 — 拆分巨型文件：lib.rs (18.7k)、config.rs (12.3k)、client.rs (11.1k)、runtime_threads.rs (9.3k)**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5586)  
   用户在 0.9.12 清理通道中反复提出大文件维护痛点。生产代码中 4 个文件超过 9k 行，加上 20k 行测试文件，重构需求强烈。

4. **#5249 — Epic: v0.9.5 构建时通道——停止单体税**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5249)  
   682,959 行、620 文件的 codewhale-tui crate 占工作区 86%，每次编辑/提交/测试/发布都整包重编译。这是长期影响最大、呼声最高的性能痛点。

5. **#5587 — 死代码清理阶段 2-4：75 个 test-only 标记、约 242 个 stale allows**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5587)  
   阶段 1 已落地（e5ca0aa8），现在全量审计 379 个 `allow(dead_code)` 站点。社区关注代码质量提升与编译时间缩短。

6. **#5617 — 减少后台 git 命令运行，避免 git probes 持锁 `.git/index.lock`**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5617)  
   用户在使用 codewhale 时 `git commit` 偶尔失败，因为内部只读 git 探测持有 index.lock。直接影响日常开发流，3 条评论。

7. **#5618 — 用 gix (gitoxide) 替代内部 git CLI 读取**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5618)  
   #5617 的深化——shell out 到真实 git CLI 做所有内部读取，包括仓库徽章探测、工作区上下文等。替换为纯 Rust 实现可消除进程开销和锁问题。

8. **#5630 — Runtime store owner lock 阻止单机多 codewhale 会话**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5630)  
   v0.9.12 集成树引入机器级单例锁，用户 M-Maciej 反馈多会话场景直接受阻。发布前必须修复。

9. **#5637 — 将 MCP 密钥提供方限定到所属 runtime**  
   [链接](https://github.com/Hmbown/CodeWhale/issues/5637)  
   嵌入式宿主在 keyring 中存储 MCP 凭证，当前通过运行时修改环境变量传递，在多线程下不安全。新设计提案，1 条评论。

10. **#5633 — 统一请求分发前的路由特定工具投影**  
    [链接](https://github.com/Hmbown/CodeWhale/issues/5633)  
    不同提供商路由接受不同的工具 schema 子集和线格式，当前兼容性判断散落在各请求构建器中。需要统一设计，PR #5636/5646/5651 已在快速跟进。


## 4. 重要 PR 进展（10 个）

1. **#5576 — 0.9.12 集成：必须修复 + UX 修复（WIP）**  
   [链接](https://github.com/Hmbown/CodeWhale/pull/5576)  
   集成分支，已 gated 且代码完成发布阻断项。剩余工作：版本号 + changelog/RC 门槛。**这是当前最核心的进度追踪 PR。**

2. **#5655 — 将设置中 MCP 恢复升级为一等公民并可点击**  
   [链接](https://github.com/Hmbown/CodeWhale/pull/5655)  
   解决插件问题（无效清单、重复、过期 OAuth）无法从会话产品面诊断的问题。主分支恢复文案仍指向不存在的 `/mcp auth`。

3. **#5643 — 恢复 MCP 登录并还原欢迎动画**  
   [链接](https://github.com/Hmbown/CodeWhale/pull/5643)  
   将经过验证的 0.9.12 TUI 恢复工作合并到 main：替换过时的 composer 术语为清晰的发送/队列动作；Streamable HTTP OAuth 失败时指向真实的 `/mcp login <name>`。

4. **#5660 — 插件磁盘变更时提示 `/plugin reload`**  
   [链接](https://github.com/Hmbown/CodeWhale/pull/5660)  
   #5579 第一片（重载可发现性）：对插件包目录做指纹识别，出现/消失/重写时主动提示操作者。

5. **#5658 — 将会话启动中的 MCP 与插件引导显示为会话集**  
   [链接](https://github.com/Hmbown/CodeWhale/pull/5658)  
   此前首个 turn 显示 `working · 22s · 0 steps`，插件发现与全部 MCP server 顺序启动不可见。现在 UI 存储 `mcp_configured_count` 并展示启动状态。

6. **#5663 — 从提示词推荐插件，而非仅 `/plugin suggest`**  
   [链接](https://github.com/Hmbown/CodeWhale/pull/5663)  
   #5579 剩余 UX：用户写 Supabase 相关提示词且已有该插件时，直接 toast 提示下一步，无需手动输入命令。

7. **#5662 — 修复：账号会话不再弹出 Keychain**  
   [链接](https://github.com/Hmbown/CodeWhale/pull/5662)  
   每次启动 `codewhale web` 和 TUI 都触发 macOS Keychain 弹出，因未签名/重构建的二进制是新的 ACL principal。修复后避免残留的 `deepseek` 条目重复询问。

8. **#5636 / #5646 / #5651 — Moonshot 工具投影降级与救援**  
   [链接 #5636](https://github.com/Hmbown/CodeWhale/pull/5636) / [链接 #5646](https://github.com/Hmbown/CodeWhale/pull/5646) / [链接 #5651](https://github.com/Hmbown/CodeWhale/pull/5651)  
   按工具降级 Moonshot MFJS 兼容性失败，保留兼容工具而非整体失败；无兼容工具时省略 `tools`/`tool_choice`。#5646 救援贡献者补丁，因 merge-dirty 被 #5651 rebase 替代。

9. **#5626 / #5641 — 每个线程 usage 端点与会话成本持久化**  
   [链接 #5626](https://github.com/Hmbown/CodeWhale/pull/5626) / [链接 #5641](https://github.com/Hmbown/CodeWhale/pull/5641)  
   gaord（Ben Gao）贡献 `GET /v1/threads/{id}/usage`，从同一 provider-aware usage ledger 读取定价。#5641 是干净的 main rescue，保留原作者署名。

10. **#5608 — 聚焦转录体操作：y 复制内容、Y 复制元数据、Enter 全屏、r 原始 Markdown**  
    [链接](https://github.com/Hmbown/CodeWhale/pull/5608)  
   实现 #5551 的批准切片。当转录体聚焦且 composer 为空时，支持 `y` 复制内容、`Y` 复制元数据/收据。wuisabel-gif 贡献。


## 5. 功能需求趋势

| 趋势方向 | 代表 Issues/PRs | 热度 |
|---|---|---|
| **多提供商中立化** | #5588（18 个 DeepSeek gate）、#5633（路由工具投影）、#5636（Moonshot 降级） | 🔥 高 |
| **代码质量/可维护性** | #5586（拆分巨文件）、#5587（死代码清理）、#5249（构建时间） | 🔥 高 |
| **插件体验对齐 Claude Code** | #5579（主动推荐/热重载）、#5663（提示词推荐插件）、#5660（磁盘变更提示） | 🔥 高 |
| **Git 集成优化** | #5617（避免 index.lock 冲突）、#5618（gix 替换 git CLI） | 中 |
| **人工监督/操作面** | #5533（控制套接字）、#5625（非阻塞 peek 工具） | 中 |
| **MCP 体验** | #5655（设置面恢复）、#5658（启动可见性）、#5637（密钥作用域设计） | 中 |
| **运行时常驻修复** | #5620（上下文压力响应）、#5630（机器级单例锁） | 高（阻断性） |
| **成本可见性** | #5553（工具/MCP 成本归因）、#5626/5641（per-thread usage 端点） | 中 |


## 6. 开发者关注点

1. **构建/编译速度是最大痛点**。682k 行单体 crate 使每次修改都全包重编译（#5249），10k+ 行文件已成维护噩梦（#5586）。0.9.12 清理通道被社区高度期待。

2. **Git 锁冲突影响日常使用**。内部 git 探测与用户 `git commit` 竞争 `.git/index.lock`（#5617），社区转向提案直接用 gix 消除 CLI 子进程（#5618）。

3. **静默上下文退化需主动处理**。警告瞬间消失且 agent 不主动收缩（#5620），用户希望 agent 对上下文压力有明确的自动反应。

4. **多会话被机器级单例锁阻断**（#5630）。v0.9.12 集成引入的 owner lock 直接阻止单机多会话，被标记为发布阻断项。

5. **无缝超管/人工介入缺失**。用户提出控制套接字（#5533）和非阻塞“待处理用户输入”peek 工具（#5625），期望 mid-turn 人工指导能力。

6. **MCP/插件启动的可见性不足**。首个 turn 22 秒空转没有进度展示（#5658）；插件/MCP 故障无法从会话面诊断（#5655），恢复路径指向不存在的命令（`/mcp auth` vs `/mcp login`）。

7. **macOS Keychain 频繁弹窗**（#5662）。未签名二进制每次启动触发 ACL 弹窗，影响 web 和 TUI 双端体验。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*