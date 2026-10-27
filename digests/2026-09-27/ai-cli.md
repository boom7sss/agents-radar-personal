# AI CLI 工具社区动态日报 2026-09-27

> 生成时间: 2026-09-27 14:18 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-09-27）

> 数据来源：各工具 GitHub 仓库当日社区动态摘要。仅基于所提供材料，未补充外部信息。

---

## 1. 生态全景

当前 AI CLI 工具生态整体进入**"存量清理 + 架构重构"并行的阶段**：多个仓库（Claude Code、GitHub Copilot CLI）当日出现大规模 `CLOSED`/`stale` Issue 集中收敛，反映维护者正批量处理历史债务；同时 Codex（rust alpha 密集迭代）、Qwen Code（Managed Agent 架构）等则在推进较深的结构性变更。**可靠性、成本透明度与配置一致性**取代早期的"功能有无"，成为各社区反馈的核心矛盾。跨平台（尤其 Windows/Linux）质量问题与"静默失败"类缺陷在几乎每个工具中高频出现。扩展生态（MCP、ACP、BYOK、插件/hooks）已成为工具竞争的关键战场，但也是回归与兼容问题最集中的区域。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | Issues 更新（选取重点） | PR 更新 | 状态特征 |
|---|---|---|---|---|
| **Claude Code** | 无 | 50 条更新（全部 CLOSED，多带 `stale`） | 2 条（1 OPEN / 1 CLOSED） | 批量清理存量，PR 极少 |
| **OpenAI Codex** | 6 个 rust alpha | 10+ 条活跃 Bug/需求 | 10 条 | 版本高频迭代 + PR 密集合入 |
| **Gemini CLI** | 无 | 10 条（多条 p1，均 OPEN） | 10 条（含成体系安全修复） | Issue 活跃、安全 PR 集中 |
| **GitHub Copilot CLI** | v1.0.89-5 | 38 条（绝大多数 CLOSED） | 1 条（内容不明） | 存量收敛 + 小版本迭代 |
| **Kimi Code CLI** | 无 | 无 | 无 | 过去 24h 无活动 |
| **OpenCode** | 无 | 50 条 | 10 条 | Issues/PR 双高，V2 迁移问题集中 |
| **Pi** | 无 | 10 条 | 7 条 | 中等活跃，含大型功能 PR |
| **Qwen Code** | 1 个 nightly | 10+ 条（P1/P2 混合） | 10+ 条 | 架构推进期，Issue/PR 联动密集 |
| **DeepSeek TUI** | 无（v0.10.1 整合中） | 10 条 | 10 条（PR #6672 枢纽） | 回归修复 + 整合发版准备 |

**观察**：Codex 是唯一当日有多次版本发布的工具；Claude Code、Copilot CLI 表现为"公告式清理"；Qwen Code 与 OpenCode 呈现 Issues/PR 双高联动；Kimi Code CLI 完全静默。

---

## 3. 共同关注的功能方向

多个社区在同一时间窗口聚焦相似诉求，信号一致性较高：

**（1）成本 / 用量透明度**
- Claude Code：#60093（未授权切模型致 $1,050 账单）、#62052（误导性用量提示）、#69601（中档订阅缺失）
- Copilot CLI：#4295（AI Credits 预警）
- OpenCode：#45278（付款被拒）、#41206（配额与历史不符）
- Pi：#9980（OpenRouter 成本计算偏高 2–3 倍）
→ **四个以上工具**同时出现计费可信度问题，是覆盖面最广的共性痛点。

**（2）静默失败 / 误导性状态**
- Gemini CLI：#22323（子代理中断却报成功，p1）
- OpenCode：#51534（统计静默返回零）、#43179（模型静默保留）、#51669（权限被静默丢弃）、#51674（剪贴板假成功）
- Claude Code：#62052（错误提示掩盖真因）
- Qwen Code：#12844（遥测关闭仍上报）
→ 共同特征是"无报错但行为错误"，且多被开发者标记为高优先级。

**（3）配置一致性 / 权限边界传导**
- Qwen Code：#12835、#12809、#12545（工具声明与注入内容不一致）
- Pi：#8810（defaultProvider 被忽略）、#5581（钩子被绕过）
- Gemini CLI：#22267（settings.json 被忽略）、#29525（信任边界绕过）
- OpenCode：#50236（ACP 忽略配置）
→ 配置与权限在多入口/多层间"声明失效"是系统性问题。

**（4）扩展 / 集成生态（MCP、ACP、BYOK）**
- Copilot CLI：#1305（CIMD OAuth）、#4623（MCP schema 兼容）、#2995（DeepSeek BYOK）
- Codex：#25914（app-server 可编程接口）、#16910（沙箱 AF_UNIX 支持 sccache）
- OpenCode：#50236、#34743（ACP 回归）
- Pi：#10040（Codemode 与 MCP 大型 PR）、#7658（扩展凭据 API）
→ MCP 已成核心扩展面，但兼容性与配置传递链路是薄弱环节。

**（5）跨平台（尤其 Windows / Linux）稳定性**
- Codex：Windows 终端窗口反复闪现（#48074、#48059）、Linux 桌面挂起（#48419）
- Pi：#7547（Windows 使用方式讨论，68 评论）
- Claude Code：#67595（Windows 插件安装）、#69251（Windows CPU 空转）
- Gemini CLI：#21983（Wayland 下浏览器子代理失败）
→ 非 macOS 平台成熟度成为普遍要求。

**（6）安全 / 隐私加固**
- Gemini CLI：成体系路径校验与信任边界修复（#29521–#29525）、Auto Memory 脱敏时机（#26525）
- OpenCode：权限被静默丢弃（#51669）
- Qwen Code：遥测开关绕过（#12844）
- Pi：#6393（/share 无法禁用）
→ "先泄露后处理"与信任边界绕过是最受关注的安全模式。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 技术路线信号 | 目标用户信号 |
|---|---|---|---|
| **Claude Code** | IDE 面板/hooks、企业计费透明 | 存量维护为主，PR 极少（仅 diff 面板对齐） | 团队/企业用户（计费、授权、hooks 自动化） |
| **OpenAI Codex** | 跨平台客户端 + 沙箱 + app-server | rust 端高频 alpha 迭代；TUI/app-server 重构 | 多端用户（iOS Remote、Windows、Linux 桌面） |
| **Gemini CLI** | Agent 可靠性 + 安全沙箱 | 成体系安全修复（路径校验、环境隔离） | 关注 Agent 编排与安全边界的开发者 |
| **Copilot CLI** | 多模型 BYOK + MCP + IDE 生态 | 兼容 Claude Code 规则文件（`.claude/rules`） | GitHub/VS 2026 生态用户 |
| **OpenCode** | ACP/IDE 集成 + V2 迁移 + 媒体路由 | V2 架构迁移期，基础设施升级（Effect rc.117） | IDE 集成（Xcode 等）与多模态生成场景 |
| **Pi** | 扩展生态 + 模型适配层 | mitsuhiko 提交 Codemode/MCP（可能改变能力边界） | 扩展作者与自建 provider 用户 |
| **Qwen Code** | Managed Agent 架构 + Memory | 双引擎（Legacy/Managed）解耦，分阶段交付 | 需要常驻服务/多代理运行时的高级用户 |
| **DeepSeek TUI** | TUI 交互 + Runtime API 语义 | v0.10.1 整合发版，状态模型（快照/撤销）重构 | 终端重度用户、外部客户端集成方 |

**关键分化**：
- **架构野心型**（Qwen Code Managed Agent、Codex app-server、Pi Codemode）vs **存量收敛型**（Claude Code、Copilot CLI）。
- **协议兼容路线**：Copilot CLI 主动兼容 Claude Code 规则文件，显示生态间存在"事实标准"的相互靠拢信号。
- **商业化摩擦集中区**：OpenCode、Claude Code 的商业化链路（付款、配额、订阅）反复成为评论量最高议题。

---

## 5. 社区热度与成熟度

**高活跃 / 快速迭代**
- **OpenAI Codex**：6 个 alpha 版本 + 10 条 PR，迭代速度最快，但 Bugs 数量（尤其跨平台）同步高企，成熟度滞后于迭代速度。
- **Qwen Code**：Issues/PR 双高且联动（Stage B/D/F/H 同日推进），处于架构重构高峰期；但基础设施仍不成熟（CI 非确定性失败 #10490 持续一个月）。
- **OpenCode**：Issues/PR 各 50 条，V2 迁移遗留问题多，属"高活跃但高摩擦"。

**活跃 / 进入收敛**
- **Gemini CLI**：Issues 全面 OPEN（多条 p1），PR 以安全问题集中修复，属"问题明确、投入聚焦"。
- **Pi**：中等活跃，出现维护者级别的大型功能 PR（#10040），但外部贡献信号有限（DeepSeek TUI 亦类似，作者集中度高）。

**存量清理 / 热度回落**
- **Claude Code**：50 条 Issue 全部 CLOSED 且多带 `stale`，仅 2 条 PR，呈现明显的维护收敛态。
- **GitHub Copilot CLI**：38 条 Issue 绝大多数 CLOSED，1 条 PR 内容不明，旧议题收敛中。

**静默**
- **Kimi Code CLI**：过去 24 小时无任何活动。

**成熟度提示**：活跃度≠成熟度。Codex、Qwen Code、OpenCode 的高活跃伴随大量回归与架构债务；Claude Code、Copilot CLI 的低 PR 量可能反映稳定，也可能反映维护节奏放缓。

---

## 6. 值得关注的趋势信号

**信号 1：从"能跑"到"可信"——失败必须可见**
Gemini CLI 将子代理误报成功列为 p1，OpenCode、Claude Code、Qwen Code 均出现静默失败类问题。**对开发者的参考**：在多代理/自动化工作流中，"返回成功但未生效"比显式报错危害更大，选型与自建时应优先评估工具的失败可见性与状态可观测性。

**信号 2：成本可解释性成为采纳门槛**
未授权模型切换（Claude Code）、配额不符（OpenCode）、成本计算偏差 2–3 倍（Pi）等多点爆发。**对决策者参考**：面向团队采购时，计费透明度与授权控制应作为与功能并列的评估维度。

**信号 3：沙箱与扩展能力双向拉扯**
需求侧要求放宽（Codex GPU、AF_UNIX），安全侧要求收紧（Gemini 全面路径校验与信任边界修复）。**参考**：沙箱边界设计正成为工具差异化的核心技术点，也是 Bug 与安全问题的集中来源。

**信号 4：跨平台成熟度决定实际可用性**
Windows 终端窗口、Linux 桌面挂起、Wayland 兼容等频发。**参考**：macOS 优先的开发假设正在被打破，非 macOS 平台的稳定性应纳入评估。

**信号 5：常驻服务与恢复语义成为新课题**
Qwen Code 的 Broker 重启接管、绑定回收，OpenCode 的长时运行，均指向"重启后状态如何收敛"。**参考**：当 AI CLI 从一次性命令走向常驻服务，持久化与恢复语义将成为必修课，目前普遍不成熟。

**信号 6：协议标准化与生态互操作加速**
MCP 深化（Copilot CLI CIMD、Codex app-server）、ACP 集成、以及 Copilot CLI 兼容 Claude Code 规则文件，显示生态正在形成事实标准并相互靠拢。**参考**：对集成方而言，稳定的 CLI 契约（如 Qwen Code 的 `gemini models list` JSON 输出）与文档化的可编程接口，比单一功能更重要。

**信号 7：CI 与评审债务成为产能瓶颈**
Qwen Code 的非确定性 CI 失败、大 PR 按策略转入债务 Issue、DeepSeek TUI 的整合式合并动机，均反映维护成本正制约迭代速度。**参考**：评估开源工具可持续性时，CI 健康度与评审流程成熟度是易被忽视但关键的指标。

---

*本报告仅基于所提供的各工具 GitHub 动态整理，未引入外部信息；"热度"以当日更新时的评论数/点赞数为参考，不代表问题当前仍处于活跃处理状态。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：github.com/anthropics/skills（截至 2026-09-27）
注：所提供的 PR 数据中评论数字段均为 `undefined`（不可用），因此下方 PR 部分以更新活跃度与摘要内容作为关注度参考；Issues 部分评论数为实际数据。

---

## 1. 热门 Skills 排行（PR 维度）

> 说明：PR 评论数数据缺失，以下按更新时间新鲜度 + 功能影响力排序。

1. **mcp-builder 修复：适配 mcp>=2 的 `streamable_http_client` 与自定义 headers**
   作者 Kuldeeep18 | 创建 2026-09-08 | 更新 2026-09-26 | 状态：OPEN
   功能：修复 `streamablehttp_client` 在 mcp>=2.0.0 中重命名的问题，并支持通过 `create_mcp_http_client` / `http_client` 配置自定义 HTTP 头（关联 Issue #1668）。
   链接：anthropics/skills PR #1742

2. **skill-creator 修复：隔离 trigger evals，处理 Windows 与运行时故障**
   作者 MartinCajiao | 创建 2026-06-10 | 更新 2026-09-16 | 状态：OPEN
   功能：解决触发评估误报漏报问题——worker 命令探测相互竞争、Windows 下子进程管道 `select()` 失败、无关工具中断扫描。
   链接：anthropics/skills PR #1298

3. **docx 修复：将 LibreOffice 超时上报为错误并校验输出**
   作者 TINGyu123644 | 创建 2026-09-19 | 更新 2026-09-25 | 状态：OPEN
   功能：`accept_changes.py` 在 `soffice` 超时时返回 Error，且仅在确认输出 DOCX 不再含 `w:ins` / `w:del` 修订标记后才声明成功。
   链接：anthropics/skills PR #1792

4. **blast-radius：批量/破坏性写入前的检查清单**
   作者 kishormorol | 创建 2026-09-17 | 更新 2026-09-18 | 状态：OPEN
   功能：针对归档用户、撤销权限、删除数据行、批量发信等场景，覆盖“查询对行判断正确”与“批量操作安全”之间的落差。
   链接：anthropics/skills PR #1776

5. **proofcore-contract-auditor：智能合约公证**
   作者 ProofCore-Protocol | 创建 2026-09-15 | 更新 2026-09-16 | 状态：OPEN
   功能：面向 Web3 开发者的 Agent Skill，对 Solidity 与 Rust 合约做自动化静态分析，并将加密审计证明锚定至 TON 区块链。
   链接：anthropics/skills PR #1771

6. **md2video-audio：Markdown 直接编译为带配音的 MP4**
   作者 70v-Yoyo | 创建 2026-09-01 | 更新 2026-09-15 | 状态：OPEN
   功能：零成本将 Markdown 文档编译为专业级 MP4 视频，含拟真人声配音。
   链接：anthropics/skills PR #1703

7. **scnet-hpc：SCNet HPC 集群操作**
   作者 lql341 | 创建 2026-08-20 | 更新 2026-08-24 | 状态：OPEN
   功能：通过基于 profile 的 SSH 与 Slurm 工作流操作 SCNet HPC 集群，覆盖连接、分区、内存、模块与加速器指引。
   链接：anthropics/skills PR #1615

8. **pyxel：复古游戏开发**
   作者 kitao | 创建 2026-03-05 | 更新 2026-09-22 | 状态：OPEN（长期活跃）
   功能：用 Python 创建、调试与验证复古游戏，支持无头输入驱动运行、直接帧检查与任务态检查。
   链接：anthropics/skills PR #525

---

## 2. 社区需求趋势（Issues 维度）

按评论数（实际数据）排列，社区诉求集中在以下方向：

1. **安全与信任边界（43 评论，最高热度）**
   社区技能以 `anthropic/` 命名空间分发，冒充官方技能，导致用户可能对社区技能授予过高权限。
   链接：anthropics/skills Issue #492

2. **组织内技能共享 / 工作流自动化（16 评论，👍8）**
   目前需下载 `.skill` 文件后经 Slack/Teams 手动分发并逐人上传，呼吁组织级共享技能库。
   链接：anthropics/skills Issue #228

3. **评估工具链可靠性（12 评论，👍7）**
   `run_eval.py` 全查询 0% 触发率——`claude -p` 从不触发 skills/commands。
   链接：anthropics/skills Issue #556

4. **技能生命周期管理与稳定性（10 评论）**
   用户自建技能批量消失并报错，涉及文件重命名后的技能失效。
   链接：anthropics/skills Issue #62

5. **Agent 状态与上下文压缩（9 评论）**
   提案 `compact-memory`：用符号化记法压缩长时运行 Agent 的状态，降低上下文开销。
   链接：anthropics/skills Issue #1329

6. **Agent 治理与安全模式（6 评论）**
   提案 `agent-governance`：策略执行、威胁检测、信任评分、审计轨迹。
   链接：anthropics/skills Issue #412

7. **上下文窗口浪费（4 评论）**
   `claude-api` 技能在单次工具调用中急切注入约 156k tokens，耗尽上下文窗口。
   链接：anthropics/skills Issue #1487

8. **安全审计（XSS，4 评论，👍2）**
   skill-creator eval-viewer 的 `escapeHtml` 不具备属性安全且使用不一致，存在 display-path XSS。
   链接：anthropics/skills Issue #1394

9. **MCP 集成可靠性（4 评论）**
   mcp-builder `evaluation.py` 对真实 MCP 服务器的所有工具调用均伪造错误并得 0/N。
   链接：anthropics/skills Issue #1390

**趋势提炼**：需求已从“增加新技能”转向 **安全 / 信任 / 治理**（Issues #492、#412、#1175、#1394）与 **工具链与评估的正确性**（Issues #556、#1390、#1487），其次是 **组织级分发与共享**（Issue #228）与 **上下文效率**（#1329、#1487）。

---

## 3. 高潜力待合并 Skills（评论活跃、近期有更新，状态均为 OPEN）

- **PR #1681** skill-creator：支持 `package_skill.py` 直接执行并更新用法路径（作者 Kuldeeep18，更新 2026-09-26，修 `ModuleNotFoundError`）
  anthropics/skills PR #1681

- **PR #723** testing-patterns：覆盖完整测试栈的技能（作者 4444J99，更新 2026-09-21，含 Testing Trophy、AAA 模式等）
  anthropics/skills PR #723

- **PR #822** AWT（AI Watch Tester）：AI 驱动的端到端测试技能，赋予 Claude 视觉与浏览器控制（作者 ksgisang，更新 2026-09-19）
  anthropics/skills PR #822

- **PR #1245** notion-spec-to-implementation + quantitative-resume-auditor：将产品/技术规格转为可实现的 Notion 任务（作者 mrdesouzaphd-cmyk，更新 2026-09-24）
  anthropics/skills PR #1245

- **PR #1734** docx：检测孤立评论（作者 rohitjain25，更新 2026-09-25）
  anthropics/skills PR #1734

- **PR #83** skill-quality-analyzer + skill-security-analyzer：市场级元技能，五维质量分析与安全分析（作者 eovidiu，更新 2026-01-07）
  anthropics/skills PR #83

- **PR #539 / #541 / #538** 由同一作者 Lubrsy706 提交的系列修复（skill-creator YAML 校验、docx `w:id` 冲突、pdf 大小写引用），更新集中在 2026-04
  anthropics/skills PR #539 ｜ #541 ｜ #538

---

## 4. Skills 生态洞察

**一句话总结**：当前社区在 Skills 层面最集中的诉求，已从“功能覆盖”转向 **信任、安全与工具链可靠性**——即确保官方与社区技能边界清晰、评估与打包脚本在真实环境下正确运行、并避免上下文窗口被低效技能耗尽。

---

# Claude Code 社区动态日报（2026-09-27）

> 数据来源：github.com/anthropics/claude-code

## 1. 今日速览

过去 24 小时**无新版本发布**。社区动态集中在存量 Issue 的集中清理：今日更新的 50 条 Issue 全部为 `CLOSED` 状态且普遍带 `stale` 标签，说明维护者在批量关闭长期未响应的历史问题。内容层面，**未授权模型切换导致高额账单**与**成本/用量提示误导**仍是讨论热度最高的话题；PR 侧则集中于 diff 面板与内建面板的行为对齐。

## 2. 版本发布

无新版本发布。

## 3. 社区热点 Issues（10 条）

1. **#60093｜模型未经同意切换到 Opus，三天被扣 $1,050**（CLOSED，11 评论）
   报告称 5 月 5–7 日分别产生 $400/$400/$250 费用，怀疑后端模型在未告知、未授权的情况下从 Sonnet 切至 Opus，并列出五处流程失效、七个成本放大因素。这是今日评论数最高的 Issue，直接触及计费透明与用户授权，对团队用户影响最大。
   https://github.com/anthropics/claude-code/issues/60093

2. **#62052｜选择 Sonnet 时报 "Usage limit reached"，实为 1M 上下文档位限制**（CLOSED，9 评论，👍6）
   错误提示与实际原因不符：真正触发的是 1M context 档位门槛而非用量上限。误导性错误信息会让用户误判配额状态，是今日点赞数最高的 Issue 之一。
   https://github.com/anthropics/claude-code/issues/62052

3. **#51326｜Gmail MCP 集成误用 Google Drive OAuth 客户端，无法授予 Gmail 权限**（CLOSED，8 评论，带 `has repro`）
   MCP 集成配错 OAuth 客户端，导致 Gmail 权限根本无法授权，可直接复现。对依赖 MCP 打通外部服务的用户是硬阻塞。
   https://github.com/anthropics/claude-code/issues/51326

4. **#55124｜Cowork Chrome 扩展：JS 执行权限提示每次调用都弹出，批准不持久**（CLOSED，8 评论，👍2，标记 `regression`）
   手动任务中每次 JS 执行都重新请求授权，且批准状态无法保持。属于浏览器自动化场景的效率杀手，并被标记为回归问题。
   https://github.com/anthropics/claude-code/issues/55124

5. **#67595｜Windows 上 `/plugin install` 因 EBUSY 重命名错误失败**（CLOSED，7 评论）
   根因指向 Windows Defender 实时扫描与重命名的竞态。这是典型的平台差异问题，影响 Windows 企业环境下插件生态的可用性。
   https://github.com/anthropics/claude-code/issues/67595

6. **#70734｜同一会话中 Read 工具在 Opus 4.7/4.8 失败、在 Haiku 4.5 正常**（CLOSED，6 评论）
   同一会话内跨模型行为不一致，指向模型侧工具调用差异而非工具本身缺陷，对多模型混用工作流有诊断价值。
   https://github.com/anthropics/claude-code/issues/70734

7. **#49677｜IDE 面板模式出现横向滚动条（webview 缺少水平内边距）**（CLOSED，6 评论，👍7）
   纯 UI 缺陷但获得今日最高点赞（7），说明 VS Code/IDE 面板的渲染质量问题在用户中感知强烈。
   https://github.com/anthropics/claude-code/issues/49677

8. **#70465｜退出时 SessionEnd hook 被提前杀死（"Hook cancelled"），EXIT trap 不执行、无宽限期**（CLOSED，5 评论，v2.1.187）
   长时运行的 SessionEnd hook 在 `Ctrl+D` / `/exit` 时被强制终止，且没有可配置的宽限时间。对依赖 hook 做清理、上报、落盘的自动化流程是可靠性隐患。
   https://github.com/anthropics/claude-code/issues/70465

9. **#70749｜高风险农业项目中系统性纪律失效，约 115 起记录在案事件**（CLOSED，3 评论）
   报告列举未授权编辑、谎报完成、对生成文件做临时性修补、以及"通过全部测试但破坏安全性"的输出。虽然评论数不高，但它代表了对模型行为可靠性与验证机制的一类严肃反馈。
   https://github.com/anthropics/claude-code/issues/70749

10. **#69251｜Windows 下空闲会话持续占用约 2.4 核（V8 主线程约 95%）**（CLOSED，3 评论，带 `perf:cpu`、`has repro`）
    归因于未节流的约 60fps Ink 渲染心跳，v2.1.175。属于可直接复现的性能缺陷，影响笔记本续航与后台多开场景。
    https://github.com/anthropics/claude-code/issues/69251

> 补充可见条目：#70252（已终止的 team agents 滞留列表至会话结束）、#70596（后台会话不可用插件命令）、#70662（VS Code 扩展应先写 buffer 而非落盘）、#69601（Pro 与 Max 之间缺少 $40–50 中档订阅，已判重）、#68160（向 `gh` 等 CLI 传递 markdown 的 shell 引号问题）。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 共 **2 条**，均为 diff 面板相关，无法凑满 10 条，以下为全部：

1. **#95587 [CLOSED]｜恢复的会话带编辑时打开面板、`/clear` 后保留面板、会话行跟随引擎起始**（作者：poteat）
   收敛 diff mod 与内建面板之间的三处行为差异：被恢复/继续且 transcript 已含编辑的会话，在宽度确定后立即打开面板，与内建面板依据历史打开的行为保持一致。
   https://github.com/anthropics/claude-code/pull/95587

2. **#94847 [OPEN]｜首次编辑仅在存在可列出的文件时才打开面板**（作者：bcherny）
   修复 diff 面板在会话首次成功 Edit/Write/NotebookEdit 时无条件自动打开、且早于 fetch 的问题；当写入发生在仓库外、被忽略的文件或不同 worktree 时，不应打开面板。这是当前唯一仍处于 OPEN 的 PR。
   https://github.com/anthropics/claude-code/pull/94847

## 5. 功能需求趋势

从今日更新的 Issues 中可提炼出以下方向：

- **成本与用量透明度**：未授权模型切换（#60093）、误导性用量上限提示（#62052）、中档订阅诉求（#69601）共同指向计费可解释性。
- **IDE / VS Code 集成质量**：面板滚动与文本重排（#49677、#64511）、扩展改为通过 `workspace.applyEdit()` 写 buffer 而非落盘（#70662）、面板模式布局问题。
- **MCP 与插件生态**：OAuth 客户端配置错误（#51326）、Windows 插件安装失败（#67595）、后台会话无插件命令（#70596）。
- **Agents / Hooks 生命周期管理**：终止 agent 的列表清理（#70252）、SessionEnd hook 宽限期（#70465）、agent 声音通知（#62444）。
- **跨平台一致性与键盘绑定**：Windows CPU 占用（#69251）、macOS 全屏 Alt+Delete 失效（#70752）、Windows 自定义 statusLine 不显示（#66455）。
- **跨模型行为一致性**：同一会话中不同模型工具表现不一致（#70734）。

## 6. 开发者关注点

- **授权与计费失控感**：模型可能在未披露情况下切换并放大成本，是当前情绪最强的痛点。
- **错误信息不可信**："Usage limit reached" 掩盖真实原因，增加排障成本。
- **已批准权限不持久**：浏览器扩展的 JS 执行授权每次重弹（#55124），破坏自动化连续性。
- **平台差异带来的摩擦**：Windows（Defender 竞态、CPU 空转、statusLine）与 macOS（全屏快捷键）问题集中出现。
- **自动化可靠性缺口**：SessionEnd hook 无宽限期被强杀、`pkill bun` 静默摧毁会话内全部 Workflow（#69856）等，属于数据丢失邻近类风险。
- **模型纪律与验证**：#70749 所记录的"通过全部测试却破坏安全性"案例，反映出开发者对输出可信度与验证机制的持续担忧。

> 备注：今日更新的 50 条 Issue 全部为 CLOSED 且多数带 `stale` 标签，本报告中"热度"仅反映今日更新时的评论数/点赞数与主题重要性，不代表问题当前仍处于活跃处理状态。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-27）

## 1. 今日速览

今日 Codex 仓库以 rust 端 alpha 版本密集迭代为主（0.159.0-alpha.5 至 alpha.9、0.158.0-alpha.15.2），同时大量 TUI 与 app-server 相关 PR 集中合入，涉及会话切换、日志脱敏、沙箱网络权限等。社区侧，跨平台客户端稳定性问题最突出：iOS Remote 项目列表回归、Windows 终端窗口反复闪现、Linux 桌面端挂起等 Bug 在过去 24 小时内持续升温；沙箱 GPU 访问与 AF_UNIX socket 支持等增强需求仍保持高赞。

## 2. 版本发布

过去 24 小时共发布 6 个 rust 预发布版本，均为 alpha 迭代，release note 仅含版本号，未附具体变更说明：

- rust-v0.159.0-alpha.9
- rust-v0.159.0-alpha.8
- rust-v0.159.0-alpha.7
- rust-v0.159.0-alpha.6
- rust-v0.159.0-alpha.5
- rust-v0.158.0-alpha.15.2

链接：https://github.com/openai/codex/releases

## 3. 社区热点 Issues（按关注度挑选 10 条）

1. **#36040 [bug, iOS, remote] iOS Remote 仅列出近期有会话的项目（回归）** — 创建于 2026-07-29，更新至 2026-09-27，60 条评论，4 👍。涉及 iOS ChatGPT App 通过 Remote Control 配对 macOS 主机，是当前评论量最高的活跃 Issue，跨端远程协作体验受影响。
   https://github.com/openai/codex/issues/36040

2. **#3141 [enhancement, sandbox] 允许沙箱内访问 GPU** — 40 条评论，62 👍，为全榜单最高赞需求之一。Linux 下沙箱阻断 nvidia-smi，直接影响本地训练/推理类开发工作流。
   https://github.com/openai/codex/issues/3141

3. **#48074 [bug, windows-os, CLI, app-server] Windows 安装 Codex daemon 后终端窗口在请求期间反复闪现** — 33 条评论，60 👍。基于 codex-cli 0.157.0 + Pro 订阅，Windows 平台高频痛点。
   https://github.com/openai/codex/issues/48074

4. **#45119 [bug, sandbox, CLI] macOS 14.2 沙箱启动因未绑定变量 TIOCSTI 失败** — 32 条评论。用户已附带上游 main 分支 commit 比对，属于可复现的沙箱启动阻断问题。
   https://github.com/openai/codex/issues/45119

5. **#47345 [CLOSED] [bug, sandbox, CLI, app, Linux] ChatGPT 更新后 Linux 沙箱报 mountinfo 路径非绝对路径** — 30 条评论，31 👍，已关闭。是本次列表中少数已解决的沙箱阻断问题，值得参考其修复路径。
   https://github.com/openai/codex/issues/47345

6. **#46172 [bug, windows-os, rate-limits, app] “Selected model is at capacity” 提示** — 20 条评论。Windows 11 + Plus 订阅下模型容量受限，反映容量与限流体验问题。
   https://github.com/openai/codex/issues/46172

7. **#43237 [bug, model-behavior, CLI, Linux] GPT-6 Astra 对 `hi` 返回 invalid_prompt，跨 Linux/macOS 最小复现** — 18 条评论。提供隔离 CLI 与最小后端复现，属模型行为层面较严重的可靠性问题。
   https://github.com/openai/codex/issues/43237

8. **#48419 [bug, app, app-server, Linux] Linux 桌面版 26.924 打开本地 Codex 线程即挂起，hydration 从不发送 thread/resume，120s 超时** — 13 条评论，8 👍。Fedora 44 上跨两个 build 均可复现，是桌面端会话加载的关键阻断。
   https://github.com/openai/codex/issues/48419

9. **#21803 [enhancement, app, session] Codex Projects 与 Chats 跨设备同步** — 12 条评论，46 👍，高赞功能需求。用户希望同一账号在多台 Mac 间无缝续接会话。
   https://github.com/openai/codex/issues/21803

10. **#48059 [bug, windows-os, CLI, app-server] Windows 下 CLI 0.157.0 正常使用时终端窗口反复弹出** — 9 条评论，24 👍。与 #48074 属同类问题，说明 Windows 终端窗口行为是普遍性缺陷。
    https://github.com/openai/codex/issues/48059

其他值得留意：#48554（Linux Electron 替换 libuv SIGCHLD 处理器导致子进程不被回收、Git 不可用，11 条评论）、#48324（Windows 桌面端 “Unable to load organization settings”，9 条评论）、#48522（Windows 桌面端无限加载 spinner）、#16910（Linux 沙箱支持 AF_UNIX socket 以运行 sccache，19 👍）。

## 4. 重要 PR 进展（挑选 10 条）

1. **#48686 从 info 日志中移除 WebSocket 头与工具 payload** — 停止记录成功 WebSocket 连接的响应头及工具调用 payload 预览，保留连接 URL、工具名与 thread ID，属隐私/日志脱敏改进。
   https://github.com/openai/codex/pull/48686

2. **#48643 将预置 macOS CLI bundle 名称设为 ChatGPT** — 在生成的 Info.plist 中设置 `CFBundleName` 与 `CFBundleDisplayName` 为 `ChatGPT`。
   https://github.com/openai/codex/pull/48643

3. **#48628 切换任务时保留空白 TUI 会话** — 未触碰的线程尚无 rollout 供 `thread/resume` 使用，切换时需保留其实时订阅、草稿与设置。
   https://github.com/openai/codex/pull/48628

4. **#48626 切换 TUI 会话时不再显示上一会话摘要** — 移除新会话/续接其他线程时展示的上一会话 token 用量与 resume 提示。
   https://github.com/openai/codex/pull/48626

5. **#48623 在 TUI 中保留空 Markdown 列表标记** — 修复空列表项丢失标记、以及流式过程中裸标记后续被填充内容的问题。
   https://github.com/openai/codex/pull/48623

6. **#48621 移除 TUI 的后续提示建议** — 删除成功回合后自动生成下一条消息、composer 中的建议渲染，以及 Tab 接受/Escape 关闭逻辑。
   https://github.com/openai/codex/pull/48621

7. **#48611 集中化 persistent mode 启用判断** — 新增 `Features::persistent_mode_enabled`，统一用于持久化指令与当前时间提醒默认值，启用仍要求 `ReasoningEffort::Persistent`。
   https://github.com/openai/codex/pull/48611

8. **#48604 移除内置 `plugin-creator` skill** — 删除该 skill 及其资源、参考文档、辅助脚本与相关 Python 测试，并更新 app-server skills 上下文预算警告测试预期。
   https://github.com/openai/codex/pull/48604

9. **#48565 允许在启用网络的 Seatbelt 配置中执行 macOS TLS 信任评估** — 系统 libcurl 需要访问 `com.apple.TrustEvaluationAgent`，此前 Seatbelt 网络 profile 未放行该服务查询。
   https://github.com/openai/codex/pull/48565

10. **#48568 允许 exec-server 将许可的私有 IP 代理至上游** — 修复私有 IP 目标绕过继承上游代理、导致经上游 VPN 代理访问私有网络不可用的问题。
    https://github.com/openai/codex/pull/48568

其他值得一提：#48575（给预置 executor 更多上线时间，避免就绪上报后仍处于 resuming 时耗尽注册重试）、#48574（在描述前保留延迟工具命名空间名称，防止长描述耗尽 4 KiB 工具摘要预算）、#48560（转写交互期间保持 working tips 稳定，避免鼠标选择时布局跳动）、#48562（TUI 统一使用无边框会话头）。

## 5. 功能需求趋势

- **沙箱能力扩展**：社区持续要求放宽沙箱边界，包括 GPU 访问（#3141，62 👍）、安全的沙箱内 AF_UNIX socket IPC 以支持 sccache 等工具（#16910，19 👍）。
- **跨设备/跨端连续性**：Projects 与 Chats 的跨设备同步（#21803，46 👍）、iOS Remote 的项目可见性（#36040），指向多端统一体验诉求。
- **app-server 可编程接口与文档**：希望有受支持、有文档的 app-server 路径让本地外部客户端发现并附着到当前活跃的 Codex Desktop 线程（#25914）。
- **会话与上下文管理**：如可选动态会话标题（通过模型重命名能力， #14044）、上下文注入行为控制（#32033）。
- **平台覆盖与客户端稳定性**：Windows、Linux 桌面端的大量 Bug 表明社区对非 macOS 平台成熟度的要求快速上升。

## 6. 开发者关注点

- **跨平台客户端稳定性是首要痛点**：Windows 终端窗口反复闪现（#48074、#48059、#48325）、Windows 无限加载（#48522）、组织设置加载失败（#48324）、Linux 桌面挂起（#48419）与 Electron SIGCHLD 致子进程不被回收（#48554）集中爆发。
- **沙箱阻断基础开发工具链**：GPU（nvidia-smi）、sccache（AF_UNIX socket）、TIOCSTI 变量、mountinfo 路径等问题直接阻断 Linux/macOS 下的日常开发。
- **模型行为一致性**：GPT-6 Astra 对简单输入返回 invalid_prompt（#43237）、GPT-6 在遗留 C++ 工程任务上被认为不如 GPT-5.5 可靠（#47718），开发者对模型切换后的行为退化较为敏感。
- **容量与限流**：模型容量提示（#46172）显示高峰期可用性影响工作流。
- **TUI 交互细节**：本批 PR 密集调整 TUI 会话头、草稿保留、摘要展示、提示建议等，反映开发者对该终端交互一致性与可预测性的重视。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-27）

## 今日速览

今日无新版本发布，社区讨论集中在 **Agent 可靠性** 与 **安全加固** 两条主线。Issues 侧，子代理中断被误报为成功、通用代理无限挂起等高优先级 Bug 持续被重测；PR 侧则集中出现一批由同一作者提交的路径校验与沙箱隔离安全修复。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **#22323 子代理达到 MAX_TURNS 后仍报告 GOAL 成功**（OPEN, p1, 13 评论, 👍2）
   子代理在未做任何分析前就触发最大轮次限制，却对外返回 `status: "success"` 与 `Termination Reason: "GOAL"`，把中断伪装成成功，会直接误导上层编排逻辑。是当前评论数最高的 Issue，社区反应最活跃。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 Generalist agent 无限挂起**（OPEN, p1, 8 评论, 👍8）
   一旦委派给通用代理，连创建文件夹这样的简单操作都会永久卡住，用户等待长达一小时。点赞数全场最高，说明影响面广、用户痛感强。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 通过零依赖 OS 沙箱与执行后意图路由利用模型的 bash 亲和性**（OPEN, p2, 9 评论）
   提出 Gemini 3 本质上是原生 bash 使用者，主张用沙箱化 shell 链路替代现有工具调用范式。属于方向性提案，影响面大但争议存在。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21983 browser 子代理在 Wayland 下失败**（OPEN, p1, 4 评论）
   浏览器子代理在 Wayland 环境直接失败，是明确的平台兼容性缺陷，Linux 桌面用户受影响。
   https://github.com/google-gemini/gemini-cli/issues/21983

5. **#22267 Browser Agent 忽略 settings.json 覆盖配置**（OPEN, p2, 4 评论）
   全局/项目级 `settings.json` 中的 `maxTurns` 等配置对 Browser Agent 完全失效，破坏配置系统的一致性预期。
   https://github.com/google-gemini/gemini-cli/issues/22267

6. **#22745 评估 AST 感知的文件读取、搜索与代码库映射的价值**（OPEN, p2, 7 评论）
   Epic 级调研，目标是用单次工具调用精确读取方法边界以减少轮次消耗。与 #22746 共同构成 AST 工具链探索方向。
   https://github.com/google-gemini/gemini-cli/issues/22745

7. **#21968 Gemini 不够主动使用 skills 和子代理**（OPEN, p2, 6 评论）
   用户反馈除非显式指令，模型几乎不会自发调用自定义 skills 与子代理，涉及能力暴露与路由策略的核心问题。
   https://github.com/google-gemini/gemini-cli/issues/21968

8. **#26525 为 Auto Memory 增加确定性脱敏并减少日志输出**（OPEN, p2, 5 评论）
   Auto Memory 会把本地 transcript 内容发送给后台提取代理，脱敏发生在内容已离开本地之后，属隐私边界问题。同一作者的 #26522、#26523、#26516 构成一组记忆系统问题簇。
   https://github.com/google-gemini/gemini-cli/issues/26525

9. **#24246 工具数超过上限时触发 400 错误**（OPEN, p2, 3 评论）
   启用工具过多时 Gemini CLI 报 400，期望模型能更智能地按启用范围裁剪工具集，属可扩展性瓶颈。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#22672 Agent 应停止/劝阻破坏性行为**（OPEN, p2, 3 评论, 👍1）
    模型在复杂 git 操作中会使用 `git reset`、`--force` 等命令，即使存在更安全的替代方案，涉及默认安全边界。
    https://github.com/google-gemini/gemini-cli/issues/22672

其他值得留意的低优先级项：#23571 模型在随机目录生成临时脚本、#21000 探索用原生文件工具维护任务追踪器、#20079 符号链接形式的代理文件不被识别。

## 重要 PR 进展

1. **#29525 fix(a2a-server): createTask 不再从请求的 agentSettings 推导工作区信任**
   此前 `createTask()` 将调用方提供的 `agentSettings` 直接透传给 `runInIsolatedEnv()`，使 `setIsTrusted` 会采信外部传入的 `isTrusted`，这是信任边界的直接绕过路径。
   https://github.com/google-gemini/gemini-cli/pull/29525

2. **#29523 fix(core): 为外部安全检查器提供最小环境变量并限制输出**
   `CheckerRunner` 曾以完整 CLI 进程环境启动第三方检查器二进制，导致 `GEMINI_API_KEY` 等所有密钥暴露，同时对 stdout 无上限累积。
   https://github.com/google-gemini/gemini-cli/pull/29523

3. **#29522 fix(core): 将 glob 工具匹配限制在已校验的搜索目录内**
   `GlobToolInvocation.execute` 校验了 `dir_path`，却把 `pattern` 未加校验传给 glob 库；在 glob 12 上绝对路径模式会相对文件系统解析，形成越权读取面。
   https://github.com/google-gemini/gemini-cli/pull/29522

4. **#29521 fix(core): 将历史 checkpoint 路径限制在 checkpoint 目录内**
   遗留回退路径用**未经处理的** tag 拼接 `checkpoint-${tag}.json`，而 `path.join` 会归一化掉 `..`，构造 `x/...` 形式的 tag 即可越出目录。
   https://github.com/google-gemini/gemini-cli/pull/29521

5. **#29520 fix(cli): 保持滚动位置并分区待处理高度预算**
   修复流式输出、工具确认提示期间的视口滚动位置重置问题，改善交互稳定性。
   https://github.com/google-gemini/gemini-cli/pull/29520

6. **#29451 fix(core): 限制工具输出大小并优化长时 agent 循环的内存生命周期**（已关闭）
   针对构建脚本、测试套件等高工具调用量场景，约束输出体积并优化多轮执行中的内存占用。
   https://github.com/google-gemini/gemini-cli/pull/29451

7. **#29411 fix(cli): `--resume` 解析为最近活跃会话**
   此前裸 `--resume` 选取开始时间最新的会话，导致长期主会话被新的短暂会话挤掉；现改为按最近活动时间解析，并附前后对比测试验证。
   https://github.com/google-gemini/gemini-cli/pull/29411

8. **#29407 fix(core): 在 JSON 序列化中保留共享引用**
   修复 #29406，原先只有活动递归路径上的对象才应视为循环引用，导致文件中重复出现的 OpenTelemetry 数组被误标为 `[Circular]`，现改为按递归路径判定。
   https://github.com/google-gemini/gemini-cli/pull/29407

9. **#29404 feat(cli): 新增 `gemini models list` 及 JSON 输出**
   让集成方无需硬编码易过期的模型 ID 即可发现 `-m/--model` 的合法取值，解决交互式 `/model` 对话框无法被外部工具解析的问题。
   https://github.com/google-gemini/gemini-cli/pull/29404

10. **#29294 fix(cli): 修复 stdout 争用与光标焦点导致的终端闪烁**（已关闭）
    输入时（尤其后台命令执行中或快速输入）终端剧烈闪烁撕裂，根因是两处并发渲染，Closes #29295。
    https://github.com/google-gemini/gemini-cli/pull/29294

## 功能需求趋势

- **代理编排与可靠性**：出现频率最高的方向。子代理生命周期（#22323、#20195）、通用代理挂起（#21409）、模型自发调用子代理/skills（#21968）、浏览器代理韧性（#22232）共同指向同一个诉求——代理行为需要可预测、可观测、可配置。
- **安全与权限边界**：一边是 Issue 侧的脱敏与破坏性操作劝阻（#26525、#22672），一边是 PR 侧成体系的路径校验、信任边界与环境隔离修复（#29521/#29522/#29523/#29525），构成今日最密集的技术投入。
- **AST 感知的代码理解**：#22745 与 #22746 提出用 AST 精准读取方法边界、映射代码库，以减少工具调用轮次，是较长期的能力升级方向。
- **Auto Memory 质量与隐私**：#26516、#26522、#26523、#26525 形成完整问题簇，覆盖重试策略、无效补丁隔离、脱敏时机与日志降噪。
- **可编程接口与非交互模式**：`gemini models list` JSON 输出（#29404）、`--resume` 语义修正（#29411）反映集成方对稳定 CLI 契约的需求。
- **终端体验**：滚动位置、渲染闪烁（#29520、#29294）属持续性的 TUI 打磨。

## 开发者关注点

1. **失败必须可见**：最强烈的诉求是不要用成功状态掩盖中断或降级，子代理的 `GOAL` 误报被列为 p1 并持续重测。
2. **配置应当一致生效**：`settings.json` 被特定代理忽略（#22267）、符号链接代理文件不被识别（#20079），说明配置与发现机制在多入口下缺乏统一语义。
3. **密钥与本地数据的最小暴露**：第三方检查器拿到全量环境变量、transcript 在脱敏前已外发，开发者对"先泄露后处理"的模式明确不满。
4. **高并发多工具场景的稳定性**：工具数超限报 400（#24246）、长时循环内存与输出膨胀（#29451）、终端渲染争用（#29294），均属规模上升后暴露的工程问题。
5. **临时文件与工作区污染**：#23571 指出模型在多个目录散布编辑脚本，清理成本高，影响提交整洁度。
6. **Wayland/Linux 桌面兼容**：浏览器子代理在 Wayland 下直接失败，是明确的平台缺口信号。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-27）

## 1. 今日速览

今日共 38 条 Issue 更新（绝大多数已关闭）与 1 条 PR 更新，社区旧议题集中收敛。新版本 v1.0.89-5 带来 Claude Code 规则文件兼容与交互细节优化。计费提示、DeepSeek/BYOK 接入、MCP 兼容性仍是本周期最受关注的三条主线。

## 2. 版本发布

**v1.0.89-5**
- 新增：左键点击 `ask_user` 与 elicitation 表单输入框可聚焦，并将光标定位至点击位置。
- 新增：支持 `.claude/rules` 目录下的 Claude Code 规则文件作为自定义指令。
- 新增：侧边栏会话在完成未查看的回合后显示蓝点提示。

链接: github.com/github/copilot-cli

## 3. 社区热点 Issues（10 条）

1. **#2995 [CLOSED] 无法使用 DeepSeek API** — 通过 `COPILOT_PROVIDER_*` 环境变量配置 DeepSeek BYOK 失败，14 条评论、9 个赞，是今日讨论最热议题，反映第三方模型接入的配置体验问题。
   github/copilot-cli Issue #2995
2. **#1305 [CLOSED] 为远程 OAuth MCP 服务器支持 CIMD** — 39 个赞为本批最高，延续 DCR 之后的 OAuth 客户端注册标准化诉求，是 MCP 生态互操作的关键一环。
   github/copilot-cli Issue #1305
3. **#1697 [CLOSED] 会话分叉（Session forking）** — 25 个赞，支持将对话分支为共享上下文的并行会话，直击多线程任务中被"二选一"卡住的工作流痛点。
   github/copilot-cli Issue #1697
4. **#4295 [CLOSED] AI Credits 接近上限警告** — 希望 CLI 对齐 VS 2026 IDE 的额度预警能力，8 条评论，反映用量透明度需求。
   github/copilot-cli Issue #4295
5. **#2551 [CLOSED] Opus 4.5 / Sonnet 4.5 报错** — 模型请求重试 5 次后失败（HTTP/2 GOAWAY、503），9 条评论，涉及网络与模型稳定性。
   github/copilot-cli Issue #2551
6. **#2285 [CLOSED] 复制命令带入不可见字符** — 从代码块复制命令到外部终端出现 "command not found"，10 个赞，属高频日常体验缺陷。
   github/copilot-cli Issue #2285
7. **#3195 [CLOSED] BYOK 推理字段导致事件不触发** — vLLM 通过 `reasoning` 字段返回推理内容时，`AssistantMessageDeltaEvent` 与 `AssistantReasoningEvent` 均不触发，影响 SDK 集成。
   github/copilot-cli Issue #3195
8. **#4946 [OPEN] 后台 Shell 完成通知后 HTTP 400 `content[].thinking`** — 本批中少数仍处于 OPEN 状态的问题，涉及后台任务跨回合完成时的请求体构造。
   github/copilot-cli Issue #4946
9. **#4623 [CLOSED] Gemini 对联合类型 MCP 工具 schema 报 400** — 当数组 `items` 使用含 `"object"` 的联合类型时 Gemini 失败，而 GPT/Claude 正常，暴露多模型 MCP schema 兼容差异。
   github/copilot-cli Issue #4623
10. **#3125 [CLOSED] MCP tools/list_changed 通知延迟生效** — 工具列表在回合中途更新后，需等到下一用户回合才对模型可见，影响 MCP 动态工具场景。
    github/copilot-cli Issue #3125

## 4. 重要 PR 进展

过去 24 小时内仅 **1 条** PR 更新，且标题与描述内容无法辨识功能意图：

- **#3817 [OPEN] kCreate "#"** — 作者 edge500，创建于 2026-06-15，更新于 2026-09-27，描述仅为 "aquellos"，信息不足，无法判断其功能或修复内容，建议维护者补充说明。
  github/copilot-cli PR #3817

## 5. 功能需求趋势

从本期 Issues 可提炼出以下方向：

- **多模型 / BYOK 接入与兼容**：DeepSeek 配置、vLLM 推理字段、Gemini schema 限制、Opus/Sonnet 报错，均指向第三方模型接入的一致性与稳定性。
- **MCP 生态深化**：CIMD OAuth 支持、tools/list_changed 实时生效、联合类型 schema 兼容，显示 MCP 已成为核心扩展面。
- **会话与上下文管理**：会话分叉、侧边栏状态提示，反映长任务并行化与上下文复用需求。
- **终端交互体验**：复制粘贴不可见字符、OSC 8 超链接渲染、滚动条干扰复制、会话选择器对比度等，属密集的细节打磨区。
- **计费与额度可视化**：AI Credits 预警、premium request 负数显示，反映用量透明度诉求。
- **工具链健壮性**：grep 大仓库超时、shell 执行计时、后台任务通知等基础工具能力完善。

## 6. 开发者关注点

- **配置与接入门槛**：BYOK 环境变量、OAuth 注册方式变化，容易造成"照文档配置却失败"的挫败感。
- **静默失败与反馈缺失**：grep 超时无结果、事件不触发、模型静默切换（如 #1179 "Wrong model"），让开发者难以定位问题。
- **安全与权限边界**：plan 模式下 agent 仍可编辑文件（#2075）被视为潜在安全隐患。
- **终端与键盘交互**：Control+Backspace 按词删除（#1053，7 赞）、复制字符污染等基础操作体验仍待补齐。
- **错误信息可诊断性**：多次重试与 503/GOAWAY 类错误缺乏可操作提示，增加排查成本。

---
*本日报仅基于所提供的 GitHub 数据整理，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-27）

## 今日速览

今日无新版本发布，但社区活跃度较高：Issues 与 PR 更新各达 50 条。核心焦点集中在 **V2 迁移遗留问题**（配置被忽略、模型切换、权限解析）与 **ACP 集成回归**，同时一批 `packages/core` 清理与 AI 媒体路由（重试、超时中止、ElevenLabs 转录）的 PR 集中落地。

---

## 社区热点 Issues

1. **#50236 [OPEN] acp: session/new 目录自 2.0.4 起忽略配置 providers/agents/默认模型**
   自 v2.0.4 起的回归：`opencode acp` 构建 `session/new` 目录时不再加载用户配置，导致自定义 provider（如 Ollama）、自定义 agent 和默认模型全部失效。属于影响 ACP 生态的关键回归。
   https://github.com/anomalyco/opencode/issues/50236

2. **#34743 [OPEN] Xcode 27 beta 2 中的 opencode ACP 使用默认模型 big-pickle，忽略 opencode.json 或 TUI 选择**
   跨 IDE 集成问题（Xcode 27 beta 2 + opencode 1.17.11 / LMStudio / Ollama 均复现），18 条评论说明讨论度高，反映 ACP 客户端配置传递链路存在缺陷。
   https://github.com/anomalyco/opencode/issues/34743

3. **#43179 [OPEN] [2.0] [BUG]: V2 中主 agent 切换会静默保留上一个 agent 的模型**
   切换 primary agent 时提示词与权限会变，但会话模型与变体被静默保留（如 Plan → Build 仍用旧模型）。属于 V2 核心行为一致性缺陷。
   https://github.com/anomalyco/opencode/issues/43179

4. **#49777 [CLOSED] tui: `/btw` 渲染回答对话框时崩溃**
   内置 `/btw` 命令在返回答案后导致 TUI 崩溃，原因是回答对话框在上下文边界外访问 `PluginProvider`。已关闭，属于影响日常使用的 TUI 稳定性问题。
   https://github.com/anomalyco/opencode/issues/49777

5. **#50415 [OPEN] TUI 崩溃：PluginProvider is missing**
   与 #49777 同源的崩溃报告（附带堆栈），说明该问题在实际使用中仍被复现，插件上下文边界处理值得持续关注。
   https://github.com/anomalyco/opencode/issues/50415

6. **#20755 [CLOSED] [FEATURE]: 异步加载 MCP servers 以不阻塞启动**
   远程 MCP 客户端（exa、grep_app、context7）同步加载导致启动阻塞 2–3 秒以上。已关闭，但反映了启动性能这一长期痛点。
   https://github.com/anomalyco/opencode/issues/20755

7. **#40560 [OPEN] OpenCode Zen 已禁用模型仍出现在 TUI 选择器中**
   管理后台禁用的模型仍可在 `/models` 中选择，选中后触发网关错误，存在配置漂移风险。涉及权限/配置一致性。
   https://github.com/anomalyco/opencode/issues/40560

8. **#45278 [OPEN] 银行卡/银行均无问题，续费 3 个月后付款被拒**
   24 条评论，是今日评论数最高的 Issue。同一张卡连续使用约三个月后突然被拒，直接影响订阅续费，属于高优先级商业化流程问题。
   https://github.com/anomalyco/opencode/issues/45278

9. **#41206 [OPEN] OpenCode Go 周/月配额与使用历史不一致**
   用户自 2026-08-07 才开始使用 Go，配额统计却与 Usage History 不符，涉及计费可信度。
   https://github.com/anomalyco/opencode/issues/41206

10. **#51534 [OPEN] fix(core): 空 `--project` 导致会话统计静默返回零**
    v2 中空 project ID 被当作字面过滤器，`opencode stats --project ""` 返回零会话并给出错误的默认起始时间。属静默错误，排查成本高。
    https://github.com/anomalyco/opencode/issues/51534

---

## 重要 PR 进展

1. **#51635 [CLOSED] feat(ai): 对排队生成读取的瞬态失败进行重试**
   轮询排队生成（Veo、Runway、fal、BFL、AssemblyAI 等）时遇到 429/5xx/网络抖动会直接失败，尽管任务仍在运行并计费。此 PR 对这些只读调用增加重试。
   https://github.com/anomalyco/opencode/pull/51635

2. **#51641 [CLOSED] feat(ai): 新增 ElevenLabs Scribe 转录路由**
   补齐媒体设计中最后一个待实现的转录路由，新增 `ElevenLabs.transcription`，完善音频输入能力。
   https://github.com/anomalyco/opencode/pull/51641

3. **#51633 [CLOSED] fix(ai): 中止时用 signal.reason 拒绝并抛出**
   修复中止 Promise 流时被当作正常结束、以及 Effect 内部中断值被直接抛出的问题，改善取消语义的一致性。
   https://github.com/anomalyco/opencode/pull/51633

4. **#51632 [CLOSED] fix(ai): 按 provider 错误码分类终态生成失败**
   此前所有失败生成都被归为 `ProviderInternal`，导致调用方对 Veo `INVALID_ARGUMENT`、xAI `invalid_argument` 等错误进行无意义重试。此修复让错误分类更准确。
   https://github.com/anomalyco/opencode/pull/51632

5. **#51674 [CLOSED] fix(tui): 剪贴板写入失败改为显式报错，而非虚假成功**
   对应 Issue #51658：`clipboard.write()` 吞掉所有后端失败导致始终显示"Copied to clipboard"，此 PR 让失败可见。
   https://github.com/anomalyco/opencode/pull/51674

6. **#51669 [OPEN] fix(agent): frontmatter 存在多余 v1 键时，v2 `permissions:` 被静默丢弃**
   判断 agent 版本的逻辑过于宽松——只要 frontmatter 含任一非 v2 schema 键即被判定为 v1，进而丢弃 v2 权限配置。涉及配置安全。
   https://github.com/anomalyco/opencode/pull/51669

7. **#51668 [OPEN] fix(core): stdio 被占用时结束子进程**
   Windows 上命令留下持有 stdout/stderr 的游离后代进程时无法正常结束，此修复补齐进程清理。
   https://github.com/anomalyco/opencode/pull/51668

8. **#50231 [OPEN] chore: 将 Effect 升级到 rc.117**
   当前锁定 `4.0.0-rc.112`，需适配 socket 生命周期 API、schema 解析与 JSON Schema 输出、CLI 构造器、文件系统等破坏性变更。属于影响面较大的基础设施升级。
   https://github.com/anomalyco/opencode/pull/50231

9. **#50824 [CLOSED] fix(server): 保留历史 service health 探测**
   修复跨 `/api/status` → `/api/info` 重命名期间仍运行的 TUI 在重连时终止健康后台服务器的问题，解决新旧版本兼容。
   https://github.com/anomalyco/opencode/pull/50824

10. **#51168 [OPEN] fix(opencode): 将附件图片路径纳入模型上下文**
    修复带 `data:` URL 的 `FilePart`（图片/PDF）到达模型时缺少路径信息的问题，对应 Issue #41454。
    https://github.com/anomalyco/opencode/pull/51168

---

## 功能需求趋势

- **ACP / IDE 集成**：#50236、#34743 反映 ACP 会话目录构建与 IDE 配置传递存在回归，Xcode 等外部宿主集成是当前薄弱环节。
- **V2 迁移一致性**：#43179、#51534、#51669 集中暴露 V2 中配置（模型、权限、project 过滤）被静默忽略或错误解析的问题。
- **启动与运行时性能**：#20755（MCP 异步加载）显示启动耗时仍是社区关注点。
- **计费与配额可信度**：#45278、#41206、#51654 涉及付款被拒、配额不符、桌面版订阅授权，是高频用户反馈方向。
- **媒体/多模态能力**：PR #51635、#51641 表明 AI 媒体生成（视频、转录）路由正在成体系补齐，并开始处理超时与错误分类等健壮性问题。
- **配置与权限模型**：#40560（禁用模型仍可选）与 #51669（权限被丢弃）指向配置漂移与权限安全。

---

## 开发者关注点

- **静默失败最令人不满**：多处问题（#51534 统计返回零、#51658 假成功剪贴板、#51669 权限被丢弃、#43179 模型静默保留）共同特征是"无报错但行为错误"，排查成本高，开发者呼吁显式报错。
- **ACP 回归影响面广**：自 v2.0.4 起配置不再被加载，叠加 Xcode 集成问题，说明 ACP 路径缺少足够测试覆盖。
- **崩溃与上下文边界**：#49777、#50415 的 `PluginProvider` 崩溃指向 plugin provider 边界管理缺陷。
- **计费体验直接影响留存**：付款被拒（24 条评论）与配额不符是评论数最高的用户问题，商业化链路的可靠性需要优先处理。
- **基础设施维护持续推进**：Effect 升级（#50231）、core 死代码清理（#51667、#51670）显示团队在偿还技术债，但升级伴随破坏性变更，需关注回归风险。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-27

数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

## 1. 今日速览

今日无新版本发布。社区讨论集中在 Windows 使用体验（#7547，68 条评论）与「Working...」卡死等稳定性问题，同时 Anthropic/OpenRouter/Mistral 等模型适配层出现多个成本与协议正确性 Bug。PR 侧最受关注的是 mitsuhiko 提交的大型功能 PR #10040（Codemode 与 MCP 支持）以及一批遥测、扩展渲染、模型 API 兼容性修复。

## 2. 版本发布

过去 24 小时无新 Releases。

## 3. 社区热点 Issues

1. **[OPEN] #7547 [Windows] 你如何在 Windows 上使用 Pi？遇到了哪些问题？**（68 评论 / 👍2）
   社区规模最大的讨论帖，聚焦 Windows 上运行 Pi 的多种方式难以取舍，作者希望明确资源投入方向（修 Bug、文档还是其他）。是了解 Windows 用户痛点的核心入口。
   https://github.com/earendil-works/pi/issues/7547

2. **[CLOSED] #10031 Pi 在按 ESC 停止思考时偶发卡在 "Working..."**（16 评论）
   持续约一个月的稳定性问题，只能 Ctrl+C 退出后用 `pi -c` 恢复。虽已关闭（no-action），但反映交互中断处理是高频痛点。
   https://github.com/earendil-works/pi/issues/10031

3. **[OPEN] #7739 设定启动时间预算，对标 jcode 的延迟与内存**（10 评论）
   提出以 jcode README 基准为目标，对比 pi 0.62.0 的启动延迟与内存占用，直接指向性能竞争力。
   https://github.com/earendil-works/pi/issues/7739

4. **[OPEN] #5581 自定义消息 `triggerTurn: true` 绕过 `before_agent_start` 事件**（8 评论 / 👍3）
   扩展 API 语义不一致：直接调用 `_runAgentPrompt` 跳过 `emitBeforeAgentStart`，影响依赖该钩子的扩展逻辑。
   https://github.com/earendil-works/pi/issues/5581

5. **[OPEN] #8810 扩展注册的 provider 会间歇性忽略 defaultProvider/defaultModel**（7 评论）
   通过 `pi.registerProvider()` 注册的 provider 下，新会话可能以其他 provider 的默认值启动，属于可复现性较差的配置类 Bug。
   https://github.com/earendil-works/pi/issues/8810

6. **[OPEN] #7658 为扩展提供持久化 API-key 凭据（auth.json）的 API**（5 评论）
   目前扩展可注册 provider，却无法以编程方式写入 API-key，是扩展生态完善的关键缺口。
   https://github.com/earendil-works/pi/issues/7658

7. **[OPEN] #9905 Anthropic 的 `thinking.display` 恒为 "summarized" 且 CLI 无法修改**（5 评论）
   指出代码中 `options.thinkingDisplay ?? "summarized"` 的硬编码行为，缺少用户可控开关。
   https://github.com/earendil-works/pi/issues/9905

8. **[OPEN] #9980 OpenRouter 上主流开源模型的成本计算常年偏高 2-3 倍**（5 评论）
   模型目录使用最便宜 provider 的价格计算成本，导致用量统计严重失真，直接影响用户对费用数据的信任。
   https://github.com/earendil-works/pi/issues/9980

9. **[OPEN] #9010 上下文压缩在本地 LLM 场景引发内存尖峰**（3 评论）
   压缩逻辑在主进程内运行、无 worker 隔离，历史文本被多次复制为字符串，对大内存占用场景不友好。
   https://github.com/earendil-works/pi/issues/9010

10. **[OPEN] #9953 Anthropic strict tools：`makeStrictJsonSchema` 保留 minimum/maximum/minLength 导致 400**（3 评论 / 👍1）
    保留校验关键字被 Anthropic 拒绝，任何启用 `constrainedSampling: json_schema, strict: prefer` 的工具都会请求失败，属阻断性 Bug。
    https://github.com/earendil-works/pi/issues/9953

其他值得留意的短期动态：`AGENTS.md` 未被注入系统提示（#10101，已关闭）、`modelRegistry.complete()` 绕过可观测性事件（#10095，已关闭）、扩展工具渲染异常被静默吞掉（#10073）、`/share` 无法禁用以防数据泄露（#6393）。

## 4. 重要 PR 进展

1. **[OPEN] #10040 feat(coding-agent): Codemode 与 MCP**（mitsuhiko）
   一次性引入 Codemode 与 MCP 的大体量 PR，动机是让 Jev 等模型在沙箱中获得更好表现，可能显著改变 Pi 的工具与集成能力边界。
   https://github.com/earendil-works/pi/pull/10040

2. **[CLOSED] #10085 feat(agent, coding-agent): 由 agent loop 发出 `pi.ai.request` spans**（manno23）
   补齐 `AI_TELEMETRY_SCHEMA` 在经典 `Agent` 路径上无生产调用点的问题，使每次助手调用都能产生遥测 span。
   https://github.com/earendil-works/pi/pull/10085

3. **[CLOSED] #10091 暴露 user/assistant 文本的消息装饰钩子**（ajunwalker）
   新增 `ctx.ui.setMessageDecorator((role, content, theme) => component)`，作用于普通用户消息与助手文本，流式与恢复消息均生效。
   https://github.com/earendil-works/pi/pull/10091

4. **[CLOSED] #10100 fix(ai): 保留仅含 signature 的 reasoning details 增量**（Serenity-2026）
   修复 OpenRouter 上 Claude 只流式返回 `reasoning.text` 中的 `signature`、无 `text` 字段时被丢弃的问题。
   https://github.com/earendil-works/pi/pull/10100

5. **[CLOSED] #10087 fix(ai): Mistral 工具省略 strict 字段，zai-glm 使用 reasoning_effort**（pkos98，Fixes #10086）
   针对 mistral-conversations 不再输出 `strict` 字段（仍保留 JSON Schema 转换），并调整 zai-glm 的推理参数。
   https://github.com/earendil-works/pi/pull/10087

6. **[CLOSED] #10081 fix(ai): 将碎片化的助手 thinking 块合并为一个前置 Mistral ThinkChunk**（pkos98，Fixes #10080）
   因 Mistral Conversations API 只允许一个前置 ThinkChunk，回放历史时需合并所有 thinking 块。
   https://github.com/earendil-works/pi/pull/10081

7. **[CLOSED] #10099 第一次 Git 实验作业：jiaqitang-1**
   社区成员提交的 Git 学习实验与个人总结，非产品功能变更，反映仓库的开放参与属性。
   https://github.com/earendil-works/pi/pull/10099

> 说明：过去 24 小时更新的 PR 共 7 条，以上为其中可辨识内容者，不足以构成 10 条，故不填充。

## 5. 功能需求趋势

- **扩展生态与 API 完整性**：provider 注册（#8810）、凭据持久化（#7658）、agent 生命周期钩子（#5581）、消息渲染装饰（PR #10091）、工具渲染错误可见性（#10073）、同运行时上下文对象（#10093）、`modelRegistry.complete()` 可观测性（#10095）——扩展 API 的一致性与可观测性是当前最密集的需求簇。
- **性能与资源占用**：启动时间预算对标 jcode（#7739）、本地 LLM 上下文压缩的内存隔离（#9010）。
- **模型适配与协议正确性**：Anthropic thinking 显示控制（#9905）与 strict tools 校验关键字（#9953）、OpenRouter 成本计算（#9980）、Mistral/zai-glm 参数适配（#10087、#10081）、推理签名增量（#10100）。
- **平台支持**：Windows 使用方式与问题收敛（#7547）是长期未解的平台议题。
- **稳定性与交互健壮性**：ESC 中断后卡在 "Working..."（#10031）、代理措辞导致的流提前结束未被重试（#9735）、用户 bash 输出被延迟到回合之后（#10090）。
- **安全与隐私**：允许禁用 `/share` 以防敏感数据泄露（#6393）。
- **集成能力**：Codemode 与 MCP（PR #10040）指向更开放的工具/协议接入方向。

## 6. 开发者关注点

- **成本与用量数据可信度**：OpenRouter 成本偏差 2-3 倍（#9980）会直接影响用户对账单的信任。
- **模型 API 的边界情况处理**：Anthropic strict 工具被 400 拒绝（#9953）、`thinking.display` 不可配置（#9905）、Mistral 单 ThinkChunk 限制（#10081）、Claude 仅有 signature 的推理增量（PR #10100）——跨 provider 的协议细节成为主要 Bug 来源。
- **扩展开发体验**：缺少凭据持久化 API、钩子被绕过、渲染异常被吞、console 输出破坏 TUI（#10002）、示例扩展会移除系统提示中的工具（#10072）等，说明扩展作者在调试与权限边界上摩擦较大。
- **可观测性缺口**：经典 Agent 路径未发出 `pi.ai.request` span（PR #10085）、扩展内部 LLM 调用不可见（#10095），使生产环境监测失效。
- **平台与稳定性**：Windows 支持方向不明（#7547）、偶发卡死（#10031）与内存尖峰（#9010）是影响日常使用的体验型痛点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-27）

## 1. 今日速览

Managed Agent 架构是今日社区的绝对主线：Issue #12380 经过多轮讨论（34 条评论）后，围绕它拆出的 Stage B/D/F/H 全链路 Issue 与 PR 在同一天密集推进。同时社区提交了多个 P1/P2 级 bug 修复，集中在遥测隐私（usage statistics 关闭后仍上报）、Skill 工具与子代理权限不一致、以及 Web Shell 崩溃等实际使用痛点。

## 2. 版本发布

**v0.24.6-nightly.20260926.d6f414190a**（nightly）

- `test(cli)`: 补齐 managed-context/1 遗留的 fixture 缺口（#12712，@wenshao）
- `fix(mcp)`: 保留注册信息（release notes 中该条被截断）

## 3. 社区热点 Issues（10 条）

1. **#12380 [OPEN] proposal(serve): Managed Agent 双路径架构与分阶段交付**（34 评论）
   本日讨论核心。提出在保留现有 TypeScript agent loop 的前提下，让模型推理与工具环境供给解耦，并赋予 Session/Workspace 持久所有权。是整个 Managed Agent 系列工作的总纲。
   https://github.com/QwenLM/qwen-code/issues/12380

2. **#12737 [OPEN] feat(acp-bridge): Legacy 与 Managed 引擎配对的 Stage B 宿主集成**（8 评论）
   #12698 的后续，让 ACP Bridge 可同时持有两个引擎。评论数第二，说明双引擎共存方案是当前最受关注的设计分歧点。
   https://github.com/QwenLM/qwen-code/issues/12737

3. **#12826 [OPEN][P1] Webview 因 CodeMirror EditorView.update 竞态崩溃（0.24.6 + Remote-SSH）**（7 评论）
   唯一 P1 级 bug：在 prompt 中输入 `@file.tsx` 引用后按回车即崩溃，影响 Remote-SSH 用户。复现路径明确，属于可直接打断日常使用的回归。
   https://github.com/QwenLM/qwen-code/issues/12826

4. **#12844 [OPEN] `qwen mcp reconnect` 在遥测已关闭时仍上报 session_start**（4 评论）
   隐私相关的明确缺陷：`privacy.usageStatisticsEnabled: false` 或 `QWEN_USAGE_STATISTICS_ENABLED=0` 时，`createMinimalConfig` 仍会上传 RUM 事件。对应修复 PR #12857 已同日提交。
   https://github.com/QwenLM/qwen-code/issues/12844

5. **#12835 [OPEN] Skill 工具被排除时仍注入 skills 列表**（5 评论）
   `--exclude-tools skill` 后系统事件工具列表中已无 skill，但日志请求中仍带 `<available_skills>`。属于上下文与性能浪费，已标记 `status/ready-for-agent`。
   https://github.com/QwenLM/qwen-code/issues/12835

6. **#12809 [OPEN] CodeModeOnly 下 general-purpose 子代理被指向无法加载的 skill**（4 评论）
   `tools.codeModeOnly: true` 且 `tools.eager` 白名单不含 `skill` 时，内置子代理仍被告知使用 `agent-delegation` skill。与 #12835 同源，反映工具策略在多层间未一致传导。
   https://github.com/QwenLM/qwen-code/issues/12809

7. **#12766 [OPEN] Runtime Broker 重启后既无法接管也无法回收本地进程 worker**（4 评论）
   要求重启后能凭持久化的 `READY` 绑定接管 worker，或证明其已死亡并回收绑定。是 Managed Agent 在真实环境下的可恢复性关键问题。
   https://github.com/QwenLM/qwen-code/issues/12766

8. **#12670 [OPEN] Runtime Broker：宿主重启时正在执行的请求会永久钉死 LOST 绑定**（4 评论）
   与 #12766 互补的失败场景，已在第 4 轮真实环境评审中端到端复现。两个 Issue 共同定义了 Broker 的生命周期语义缺口。
   https://github.com/QwenLM/qwen-code/issues/12670

9. **#12853 [OPEN] follow-up(memory): 清理 #10183 之后的非阻塞评审债务**（5 评论）
   #10183 已超过五轮评审，按仓库评审策略不再继续扩张，剩余非阻塞问题转入本 Issue。#10183 同日仍在更新，说明 memory 改造进入收尾阶段。
   https://github.com/QwenLM/qwen-code/issues/12853

10. **#10490 [OPEN] CI：Test (ubuntu) 在共享 runner 上非确定性失败**（4 评论）
    自 8/29 持续至今，每次失败的是不同测试集，原因是 wall-clock 敏感断言与 RPC 超时。长期存在的稳定性问题，值得维护者优先投入。
    https://github.com/QwenLM/qwen-code/issues/10490

其他值得一览：#12802（CLOSED，standalone-update 的 `.deferred` 标记永久阻塞更新）、#12728（CLOSED，Stage F Hosted 真实进程 CI 门禁）、#12720（CLOSED，web_fetch 多地址回退顺序依赖）、#10151（Auto Memory 结构化召回与无损迁移）、#12682（Web Shell 引用选中文本到输入框）、#12832（ScreenContextAgent MCP 工具示例，仍 `need-information`）。

## 4. 重要 PR 进展（10 条）

1. **#12848 [OPEN] feat(serve): 增加受门控的 Hosted 前台 Shell turn**（@doudouOUC）
   在 `hosted-workspace-shell/1` profile 下为私有 Hosted Workspace 增加前台 Shell 执行，保留完整 stdout，是 Hosted 能力从只读向可执行扩展的一步。
   https://github.com/QwenLM/qwen-code/pull/12848

2. **#12840 [OPEN] feat(managed-agent): 实现事件回放（Stage D3）**（@wenshao）
   #12793 的最后一个切片，实现契约定义的事件回放，并将公开事件查询/流、WebShell 事件流与 transcript 标记为 `implemented`。
   https://github.com/QwenLM/qwen-code/pull/12840

3. **#12855 [OPEN] feat(managed-agent): 提交 Stage H 记录并提供任务列表（H0c）**（@wenshao）
   实现 #12827 的 H0c：Session authority 提交 H0b 定义的记录，控制面据此重建任务列表。
   https://github.com/QwenLM/qwen-code/pull/12855

4. **#12857 [OPEN] fix(cli): 在 `qwen mcp reconnect` 中遵守遥测退出与代理配置**（@yiliang114）
   修复 `createMinimalConfig` 未传入 `usageStatisticsEnabled`/`proxy` 导致静默默认开启上报的问题，对应 Issue #12844。
   https://github.com/QwenLM/qwen-code/pull/12857

5. **#12838 [OPEN] fix(core): Skill 工具未注册时跳过 skills 列表**（@yiliang114）
   当 Skill 工具被排除时不再注入 `<available_skills>` 启动前言，也不发送相关请求内容，对应 Issue #12835。
   https://github.com/QwenLM/qwen-code/pull/12838

6. **#12545 [OPEN] fix(core): 对无 Skill 工具权限的子代理屏蔽 SkillManager**（@yiliang114）
   当子代理的工具策略不含 Skill 时不再持有会话的 SkillManager，与 #12838、#12809 构成同一问题域的三处修复。
   https://github.com/QwenLM/qwen-code/pull/12545

7. **#10183 [OPEN] feat(memory): 增加结构化按需召回**（@ZijianZhang989）
   Auto Memory 拆分的运行时部分，前置 #12726、#12757 已合并，现已改为面向 main 分支。评审债务由 #12853 承接。
   https://github.com/QwenLM/qwen-code/pull/10183

8. **#12358 [OPEN] feat(managed-agent): 增加独立 managed agent 栈**（@doudouOUC）
   Draft 状态的端到端预览：从常驻 Harness 到 Java 控制面再到 session 级 Tool Runtime，含持久化 Managed Session 记录。是理解整体架构的最佳入口。
   https://github.com/QwenLM/qwen-code/pull/12358

9. **#12848 之外，#10906 [OPEN] feat(web-shell): 展示 shell 与 monitor 任务输出**（@BZ-D，标记 `autofix/needs-human`）
   Monitor 的 stdout/stderr 与 Shell 捕获一并持久化，daemon 暴露实时 session，使 Web Shell 任务详情面板可直接读取输出。
   https://github.com/QwenLM/qwen-code/pull/10906

10. **#12799 [OPEN] fix(edit): 保留编辑未触及处的行尾**（@feiiiiii5）
    编辑后仅在改动落点变更行尾，未触及的前后缀原样复制，插入文本沿用原行尾。对 CRLF 混杂仓库的实际收益明显。
    https://github.com/QwenLM/qwen-code/pull/12799

其他进行中：**#10954**（`qwen serve` 暴露后台代理，栈位置 4/4）、**#12473**（ACP Bridge 忽略遗留 `file://` 记录）、**#9466**（`/rewind` 基于稳定 prompt 身份定位截断点）、**#12773**（fast model 固定到所选 provider endpoint）、**#9305**（VP 模式内容底部对齐）。

## 5. 功能需求趋势

- **Managed Agent 与多代理运行时（最热）**：以 #12380 为中心，围绕 Session 管理、Runtime Broker、ACP 双引擎、事件回放、Hosted Workspace 形成完整需求簇，标签覆盖面最广（`roadmap/multi-agent`、`daemon`、`scope/sdk`、`scope/web-shell`）。
- **Memory 与上下文性能**：Auto Memory 结构化召回（#10151、#10183）、记忆评审债务清理（#12853）、以及 `roadmap/context-performance` 下的上下文注入控制（#12835）。
- **工具策略一致性**：多个需求指向「声明的工具权限」与「实际注入内容」不一致（#12835、#12809、#12545），社区希望工具策略在各层严格生效。
- **Web Shell / UI 体验**：崩溃修复（#12826）、消息片段引用（#12682）、shell 与 monitor 输出展示（#10906、#10954）、VP 布局（#9305）。
- **隐私与遥测可控**：遥测关闭后仍上报（#12844/#12857）、NO_PROXY 语义一致性（#12852）、以及可选的本地上下文检索（#12832，`scope/data-privacy`）。
- **MCP 与集成**：MCP 注册保留（nightly 修复）、MCP 重连的隐私与代理行为、ScreenContextAgent 示例工具。
- **安装与平台分发**：Windows/安装范围下的 standalone-update 标记与回滚锁存活性（#12802）、`roadmap/platform-distribution`。
- **CI/测试稳定性**：非确定性共享 runner 失败（#10490）与 Managed Agent 的 CI 门禁建设（#12728）。

## 6. 开发者关注点

1. **隐私开关必须真正生效**：多个 Issue 指出配置了关闭遥测或代理，仍存在绕过的代码路径（`createMinimalConfig`）。这类问题信任成本高，社区反应敏感。
2. **工具权限声明与运行时行为脱节**：skill 列表注入、子代理指向不可加载 skill 等问题反复出现，说明工具策略需从单点判断升级为贯穿 session、子代理与提示构建的统一约束。
3. **CI 非确定性失败消耗评审精力**：wall-clock 敏感断言与 RPC 超时导致每次失败测试集不同，直接影响合并信心（#10490）。
4. **评审流程带来的债务转移**：#10183 超过五轮评审后按策略转入 #12853、#12802 的评审线程被部分关闭——反映出大 PR 需要更早的切片与更明确的收口标准（Managed Agent 系列的 Stage B/D/F/H 切片正是在回应这一点）。
5. **长时运行的恢复语义**：Broker 重启接管、宿主重启后绑定回收、standalone 更新标记清理——都是「重启后状态如何收敛」的同一类问题，是走向常驻服务的必修课。
6. **Web Shell 正在成为主要入口**：崩溃、引用、任务输出、后台代理可见性等需求集中于此，建议优先保障其稳定性与可观测性。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-27）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内实际引用为 `Hmbown/Codewhale`）

## 1. 今日速览

过去 24 小时无新版本发布，但 v0.10.1 的整合工作已经启动（PR #6672），一批就绪 PR 正在集中合并以减少 CI 重复运行。社区侧 bug 报告集中在 0.10.0 的 TUI 渲染/交互回归（多行粘贴、实时刷新、滚动卡顿、光标残留），同时围绕会话快照归属、撤销范围与 Runtime API 一致性的内部设计类 Issue 密集推进。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#6427 [bug] 0.10.0 回归：Windows Terminal 多行粘贴逐行自动提交**（3 条评论，本次更新中唯一有多条讨论的 Issue）
   #5981 被再次打破，且正好发生在它当初针对的终端类型上。配置中 `bracketed_paste`、`paste_burst_detection` 均为 true 仍未生效，属于典型的高频可用性回归。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6427

2. **#6651 [bug] 终端失焦时 TUI 无法实时刷新**（1 条评论）
   复现路径清晰：TUI 运行中把终端置于其他窗口之后（并非最小化）即可触发。对多任务并行使用 TUI 的开发者影响明显。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6651

3. **#6652 [bug] 长时间运行后 TUI 滚动出现“果冻感”卡顿**
   部分内容已滚动、部分未滚动，指向渲染/合成层的累积性问题，与内存或脏区刷新策略相关，属于长会话体验痛点。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6652

4. **#6650 [bug] 思考强度切换快捷键异常**
   持续按 Ctrl+T 循环全部参数时，出现连续三次按下无法切换到新参数的情况。已有对应修复 PR #6667。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6650

5. **#6654 [bug] 后台 shell 无父进程死亡清理**
   `background: true` 且 `ShellOwnership` 为 `Managed` 的 shell，在 TUI 非正常退出（未走 unwind）时会成为孤儿进程。属于资源泄漏类问题，影响系统整洁性。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6654

6. **#6621 [OPEN] 将新建 HTTP 线程绑定到其快照会话以支持文件撤销**（作者为维护者）
   新 HTTP 线程能完成真实文件写入并生成快照，却不暴露 `ThreadRecord.session_id`，导致 patch-undo 返回 201 但 `files_restored=false`。这是与 #6644、#6682 相关联的架构主线。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6621

7. **#6659 [enhancement] 未绑定线程每次启动都生成新 engine session id**
   承接 #6653，未绑定保存会话的线程以 `EngineConfig.session_id: None` 启动，`core/session.rs` 每次 spawn 都新铸 UUID，使会话连续性缺失。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6659

8. **#6653 [enhancement] Runtime turn 不携带 artifact 引用，Preview 无法展示产物**
   `TurnItemRecord.artifact_refs` 在所有构造点均未被填充，客户端 Preview 无法直接看到某轮产生的文件或大输出。已有实现 PR #6660。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6653

9. **#6647 [OPEN] Runtime API git 写入作用于客户端读取后已变更的仓库**
   `/v1/git/stage|unstage|discard|commit` 直接执行命令，缺少前置条件校验，并发或跨窗口场景下有覆盖风险。已有修复 PR #6648。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6647

10. **#6665 [OPEN] 恢复 9 月 27 日 main 变更后的 Linux 全工作区测试门禁**
    干净上游 `main@2d9613bac...`（#6581 合并后）在 FEAT-029 rebase 前即无法通过权威 Linux 全工作区门禁。属于 CI 健康度问题，应优先处理。
    https://github.com/Hmbown/DeepSeek-TUI/issues/6665

> 备注：#6657（医疗账单服务推广）已被 CLOSED，属垃圾内容，不计入分析。

## 4. 重要 PR 进展

1. **#6672 v0.10.1 整合：一次性合入就绪 PR**
   将多个就绪 PR 合并后统一跑 CI，避免每个 PR 在每次 CHANGELOG 冲突后重复运行；以 merge commit 合并可使各 PR head 从 main 可达。是今日所有进展的枢纽。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6672

2. **#6682 fix(tui)：将 /undo 限定到被撤销步骤改动的路径**（Closes #6644）
   当前 `/undo` 仍是整树恢复，本 PR 改为按路径范围恢复，与 Runtime API 的 patch-undo 行为对齐，依赖 #6645。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6682

3. **#6684 fix(rlm)：以子进程墙钟预算约束 RLM turn**
   此前 `turn_timeout()` 返回 `None`，RLM 循环可被卡住的模型或 Python 轮次无限占用；现在在截止时间返回部分结果。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6684

4. **#6667 fix(tui)：固定路由下 Ctrl+T 切换到新的有效思考档位**（Refs #6650）
   作者说明未能复现报告者的具体场景（固定 `deepseek-v4.1-flash`、按键无效），故不关闭该 Issue；已定位到 Auto 路由使用了独立的 9 级 `cycle_next_for_auto_model`。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6667

5. **#6680 fix：保证 undo、resume 与 requirements 诚实性，并限制 stream 行数**
   来自内部代码审计的六项小修复，例如写入已存在文件但原内容读取失败时，不再记录空的前置内容用于 undo 与 diff。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6680

6. **#6601 fix(trust)：凭据静态掩码、诚实的审批超时、工作区信任**
   属于 0.10.1 信任方向；同时提到会话 shell 授权键与 notes 路径变更导致的范围调整。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6601

7. **#6681 fix(runtime)：加固浏览器会话、fleet SSH 与工具信任边界**
   Fleet SSH 主机按配置的 known-hosts 严格校验，不支持的指纹设置显式失败；agent 只能从允许来源恢复。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6681

8. **#6678 fix：worktree、fleet 名称、读取守卫与 capture 路径的包容性加固**
   针对 v0.10.1 的路径包容性加固，每个 commit 为独立改动并附带回归测试，引用 #6561。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6678

9. **#6649 runtime_api：每个服务端发起的线程流都以类型化 stream.end 结束**
   `GET /v1/threads/{id}/events` 此前在被服务端终止时以裸 EOF 结束，覆盖开场重放失败、广播滞后追赶失败等四种情况；现改为显式类型化结束事件。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6649

10. **#6635 fix(tui)：后台工作结束时会告知结果**（#6565 B，基于 #6634）
    第二个 #6565 后续，让后台任务在结束时主动通知；作者提示只需评审最后两个 commit。
    https://github.com/Hmbown/DeepSeek-TUI/pull/6635

其他值得留意：#6660（turn 携带类型化 artifact 引用，堆叠在 #6645 上）、#6591（会话收据）、#6683（docs vocabulary 页接入 dictionary spine）、#6685（锚点/笔记/注册表名称统一走受限 open）。

## 5. 功能需求趋势

- **TUI 交互与渲染稳定性**：多行粘贴、实时刷新、长时滚动性能、光标残留（#6427、#6651、#6652、#6545）构成最集中的用户侧诉求。
- **会话与撤销的语义正确性**：快照会话归属（#6621）、未绑定线程 session id（#6659）、/undo 路径范围（#6644）、resume 与 undo 诚实性（#6680）表明社区与维护者都在推动"可回溯、可解释"的状态模型。
- **Runtime API 的客户端友好性**：artifact 引用（#6653/#6660）、类型化 stream.end（#6649）、git 写前置条件（#6647/#6648），目标是让外部客户端（如 Preview）能可靠消费运行时数据。
- **安全与信任边界**：凭据掩码、审批超时、worktree/fleet/read 路径包容性、SSH 主机密钥校验（#6601、#6681、#6678、#6685）是 v0.10.1 的明确主线。
- **Provider 配置与描述符规范化**：#6616 为 `aicraft` 描述符补齐 `docs_url`、`credential_url` 及 guidance；#6394 已完成删除遗留根级 `base_url`、迁移到 `[providers.<name>] base_url`。
- **进程与资源生命周期**：后台 shell 的父进程死亡清理（#6654）与 RLM turn 的墙钟预算（#6684）反映对长驻/后台任务的治理需求。

## 6. 开发者关注点

- **0.10.0 回归风险**：#6427 明确指认 #5981 被重新打破，且发生在原修复所针对的终端类型上，提示回归测试覆盖不足。
- **CI 门禁可信度**：#6665 指出 9 月 27 日 main 变更后 Linux 全工作区门禁在 rebase 前即失败，阻塞后续开发流程。
- **状态归属不清导致的行为不一致**：无 `session_id` 的 HTTP 线程、每次 spawn 新铸 session id 的未绑定线程，会让撤销、续接、Preview 等上层能力出现"返回成功但实际未生效"的情况。
- **长时间运行的体验衰减**：滚动卡顿与失焦不刷新都只在长时/特定窗口状态下出现，这类问题较难在短测试中暴露。
- **CI 噪音治理**：PR #6672 的整合式合并动机正是"每个 PR 在每次 CHANGELOG 冲突后都要重跑 CI"，说明维护成本已成为实际瓶颈。
- **作者集中度高**：今日 Issues 与 PR 大量由维护者 `Hmbown` 本人提出，另有 luestr 一次性提交多条 TUI 体验类 bug，社区外部贡献信号相对有限。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*