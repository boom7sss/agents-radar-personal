# AI CLI 工具社区动态日报 2026-10-14

> 生成时间: 2026-10-14 14:02 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-14）

## 1. 生态全景

当前 AI CLI 工具正从"单机编码助手"向"可编排的多 Agent 运行时 + 跨端远程控制"演进，社区反馈的重心已从功能有无转向**可靠性、上下文成本与行为一致性**。今日各工具的版本迭代节奏明显分化：Codex、Gemini CLI、Copilot CLI 高频发布，而 Kimi Code CLI 无活动、OpenCode 与 DeepSeek TUI 无新版本。同时，**V2/架构级迁移与回归**（OpenCode V2、Qwen Code Managed Agent）成为多个项目的主线，社区对"升级即断链"的容忍度极低。

## 2. 各工具活跃度对比

| 工具 | Release 情况 | 热点 Issue 规模 | PR 动态 | 今日主线 |
|---|---|---|---|---|
| **Claude Code** | v2.1.299（新增环境变量 + 空闲自动压缩） | 10 条精选，多条 👍200+ | 3 条更新，均 CLOSED | 缓存/上下文成本优化、cyber 过滤器误报集中关闭 |
| **OpenAI Codex** | 3 个 rust alpha（.9/.10/.11） | 10 条精选，#25178 88 评论 | 10 条，多为 `copyberry[bot]` 可靠性修复 | Windows 兼容性、上下文/压缩一致性 |
| **Gemini CLI** | 3 个（v0.64.0/v0.65.0-preview.0/nightly） | 10 条精选，含 3 个 P1 | 10 条（含 1 条已关闭） | Agent 挂起与误报成功、安全加固 |
| **GitHub Copilot CLI** | 4 个（v1.0.97~v1.0.98-2） | 10 条精选 | **0 条** | 新模型 JSON 报错、ACP 一致性、BYOK |
| **Kimi Code CLI** | 无活动 | — | — | — |
| **OpenCode** | 无发布 | 10 条精选 | 10 条（多为 contributor） | V2 迁移回归、MCP 凭证迁移 |
| **Pi** | 无发布 | 10 条精选 | 10 条（含多条 CLOSED） | 新模型适配、溢出检测真实性 |
| **Qwen Code** | 2 个（v0.25.2-preview.0/nightly） | 10 条精选 | 10 条 | Managed Agent 分阶段交付、CI 稳定性 |
| **DeepSeek TUI** | 无发布（v0.10.2 收尾） | 10 条精选 | 10 条 | Windows 缺陷、状态/凭据一致性 |

> 注：各工具源数据均提供了 10 条精选 Issue，不代表总量可比；PR 数据以源数据实际条目为准。

## 3. 共同关注的功能方向

- **上下文 / Token 成本控制**（Claude Code、Codex、Gemini CLI、Pi、OpenCode）
  - Claude Code #66115 空闲超时压缩 → v2.1.299 落地；Pi #10840（272K vs 500K）、#10885（llama.cpp 溢出未识别）、#10879（HTTP 413 漏判）；Codex #53309 历史推理重复计数致过早压缩、#53752 单日 2400 万 token。
  - 诉求高度一致：**溢出检测需覆盖更多真实失败信号，压缩预算需准确**。

- **IDE / 远程控制集成一致性**（Claude Code、Codex、Gemini CLI、Qwen Code）
  - Claude Code #24726（自动附加）、#99032（CLAUDE.md @import）、#36146（面板 UI）；Codex #36040（iOS Remote 回归）、#27565（类远程控制需求）；Gemini CLI #29744（IDE 重连）；Qwen Code #14184（Web Shell 移动端）。

- **Agent 可靠性与"静默失败"**（Gemini CLI、Copilot CLI、Codex、Pi）
  - Gemini CLI #22323（MAX_TURNS 误报 success）、#21409（generalist agent 永久挂起）；Copilot CLI #5140（headless 退出码 0 但空响应）；Pi #10944（JSON 无效却用前缀继续执行）。

- **BYOK / 自定义模型与 provider 兼容**（Copilot CLI、Codex、Pi）
  - Copilot CLI #4358（模型发现）、#4950（强制 temperature=0）、#4936（凭据命令）；Codex #45914（`call_id` 未持久化）、#45640（云端 MCP 缺失）；Pi #10913（凭据感知的模型解析）。

- **Windows / 非主流平台兼容**（Codex、Copilot CLI、DeepSeek TUI、Gemini CLI）
  - Codex（截图、ADB 沙箱、设置加载）、Copilot CLI（OAuth 循环 #5134、系统级安装 #5129）、DeepSeek TUI（#6652/#6970/#6976）、Gemini CLI（PowerShell 替换误判）。

- **新模型快速适配**（Copilot CLI、Pi、Claude Code）
  - Gemini 4 Argon（Copilot CLI #5139 报 400 / Pi #10890）、GPT-6（Pi #10930 保留 prompt cache）、Claude 5.5 系列（Copilot CLI #5139 / Pi #10908）。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | IDE 深度集成、hooks/plugins 扩展系统、缓存成本 | Claude 订阅用户、VS Code 用户 | 官方闭源产品 + GitHub 社区反馈驱动 |
| **Codex** | 远程控制、Computer Use、记忆/上下文边界 | 跨端（桌面+iOS）、自建 provider 开发者 | Rust 核心、alpha 快速迭代、bot 主导 PR |
| **Gemini CLI** | Agent 编排、AST 感知代码理解、沙箱安全 | 开源贡献者、Linux/容器用户 | TS/开源、EPIC 驱动的方向性议题 |
| **Copilot CLI** | 企业部署、BYOK、ACP 模式 | 企业团队、自托管模型用户 | 闭源、企业合规与自托管并重 |
| **OpenCode** | V2 架构、TUI/desktop、多模态 | 桌面/TUI 重用户、插件开发者 | 开源、V2 大版本迁移（引入回归） |
| **Pi** | 多 provider 网关、嵌入式 SDK、TUI 细节 | 高级用户、服务端/嵌入式部署者 | 多模型网关优先、SDK/durable 层 |
| **Qwen Code** | Managed Agent 分阶段架构、Java 运行时 | 平台集成方、企业后端 | TS agent loop + Java broker、路线图驱动 |
| **DeepSeek TUI** | TUI crate 模块化、Runtime API | TUI 用户、IDE 扩展开发者 | Rust 拆分重构、cargo 分发 |

## 5. 社区热度与成熟度

- **高热度活跃迭代**：Codex（88 评论的 #25178、大量 bot PR）、Gemini CLI（3 个 P1 议题）、Pi（50/18 条更新）。这些项目处于**问题密集但响应快速**的阶段。
- **稳定期 + 精细打磨**：Claude Code 与 Copilot CLI 版本节奏规律，社区反馈集中在体验细节（IDE 一致性、订阅识别），但 Copilot CLI 今日 PR 为 0，可能存在审核瓶颈。
- **架构转型阵痛期**：OpenCode V2、Qwen Code Managed Agent 均处大版本/大架构推进中，社区反馈以**回归与迁移断裂**为主，是新用户风险最高的阶段。
- **数据不足**：Kimi Code CLI 过去 24 小时无活动；DeepSeek TUI 无新发布但 Issue/PR 更新密集，处于补丁收尾。

## 6. 值得关注的趋势信号

1. **"静默成功"比崩溃更危险** —— Copilot CLI #5140（退出码 0）、Gemini CLI #22323（误报 success）、Pi #10944/#10628（失败却提示成功），已是跨工具共识。**对 CI/自动化用户：应增加独立的结果校验层，不能只信任退出码或 Agent 自报状态。**

2. **上下文成本进入"可预测性"阶段** —— 从"省 token"转向"预算准确"，Pi 的溢出漏判与 Codex 的重复计数说明：**成本敏感团队需关注工具的压缩触发条件是否透明。**

3. **升级路径成为迁移风险点** —— OpenCode V2（配置/凭证/工具三项断裂）、Qwen Code Managed Agent 分阶段交付说明：**大版本升级前应逐项验证配置发现、MCP 认证、工具暴露三类行为。**

4. **平台兼容从"支持"转向"一致"** —— Windows 在 Codex/Copilot CLI/DeepSeek TUI 三处均为缺陷高发区，且多为"同命令不同权限结果不一致"。**企业 Windows 用户建议观望或逐项验证。**

5. **BYOK 用户要求"一等公民"待遇** —— 强制采样参数、单模型限制、凭据启动器依赖（Copilot CLI 三项叠加），是自托管场景的共性痛点；**需评估工具对 OpenAI 兼容 provider 的配置面完整度。**

6. **新模型"发布即可用"缺口** —— Gemini 4 Argon 上线当日即报 400（Copilot CLI #5139 / Pi #10890），提示**新模型支持需等待一轮补丁再启用。**

7. **安全过滤器误伤合法开发** —— Claude Code 大量 `[Bug][cyber]` 集中关闭 + Gemini CLI 破坏性操作防护（#22672），显示安全分类器与开发场景的平衡仍在校准。

---

*本报告严格基于所提供的 GitHub 数据整理；未在源数据中出现的评论数、点赞数、总量等不作推断。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-14）

> 说明：本报告仅基于供给数据。PR 的评论数在原数据中均为 `undefined`（未提供），因此"热度"以 Issue 侧讨论、PR 更新活跃度与关联度综合判断，并已明确标注。

---

## 1. 热门 Skills 排行（PR 侧）

| # | Skill | 功能 | 讨论热点 | 状态 |
|---|-------|------|---------|------|
| 1 | **skill-creator 系列修复** | Skills 自身的评估/打包工具链 | 多份 PR 与 Issue 交叉指向同一批问题：触发评估误报、Windows 失败、YAML frontmatter 解析 | OPEN |
| 2 | **mcp-builder 修复** | MCP 服务器构建与评估 | `mcp>=2` API 重命名（`streamable_http_client`）、自定义 header、evaluation.py 对真实服务器 0/N 打分 | OPEN |
| 3 | **proofcore-contract-auditor** | 智能合约静态审计 + TON 链上存证 | Web3 审计方向的新 Skill | OPEN |
| 4 | **document-typography** | 生成文档的排版质控 | 孤词换行、寡行段落、编号错位 | OPEN |
| 5 | **scnet-hpc** | SCNet HPC 集群操作（SSH + Slurm） | 科研计算场景的 profile 化工作流 | OPEN |
| 6 | **AWT（AI Watch Tester）** | AI 驱动的 E2E 浏览器测试 | 给 Claude 视觉与浏览器控制能力 | OPEN |
| 7 | **md2video-audio** | Markdown 直编译为带配音的 MP4 | 零成本视频生成 | OPEN |
| 8 | **skill-quality-analyzer / skill-security-analyzer** | Skills 元技能（质量 + 安全分析） | 元层面治理工具 | OPEN |

链接：
- skill-creator 修复：[#1298](https://github.com/anthropics/skills/pull/1298) · [#1681](https://github.com/anthropics/skills/pull/1681) · [#1961](https://github.com/anthropics/skills/pull/1961) · [#1997](https://github.com/anthropics/skills/pull/1997)
- mcp-builder：[#1742](https://github.com/anthropics/skills/pull/1742)
- proofcore-contract-auditor：[#1771](https://github.com/anthropics/skills/pull/1771)
- document-typography：[#514](https://github.com/anthropics/skills/pull/514)
- scnet-hpc：[#1615](https://github.com/anthropics/skills/pull/1615)
- AWT：[#822](https://github.com/anthropics/skills/pull/822)
- md2video-audio：[#1703](https://github.com/anthropics/skills/pull/1703)
- skill-quality/security-analyzer：[#83](https://github.com/anthropics/skills/pull/83)

---

## 2. 社区需求趋势（Issues 侧）

- **信任与安全边界**（#492，46 评论，最高热度）：社区 skill 以 `anthropic/` 命名空间分发，冒充官方，造成权限授予的信任边界滥用。
- **组织级 Skill 共享**（#228，16 评论，👍8）：期望在 Claude.ai 内直接共享 skill 库，而非下载 .skill 文件经 Slack/Teams 手动上传。
- **Skill 评估工具链可靠性**（#556、#1352、#1383、#1390）：`run_eval.py` 触发率近乎 0%、并行 worker 交叉匹配 UUID、benchmark 静默失败等问题集中出现。
- **上下文窗口开销**（#1487）：`claude-api` skill 单次工具调用注入约 156k tokens，直接耗尽上下文。
- **Skill 治理与安全**（#1394、#1961）：eval-viewer 的 XSS / 转义不完整问题反复被提出。
- **新 Skill 方向提案**：agent-governance（#412，已关闭）、compact-memory 符号化压缩状态（#1329）、Reasoning Quality Gate Pipeline（#1385）。

链接：[#492](https://github.com/anthropics/skills/issues/492) · [#228](https://github.com/anthropics/skills/issues/228) · [#556](https://github.com/anthropics/skills/issues/556) · [#1487](https://github.com/anthropics/skills/issues/1487) · [#1394](https://github.com/anthropics/skills/issues/1394) · [#1329](https://github.com/anthropics/skills/issues/1329) · [#1385](https://github.com/anthropics/skills/issues/1385)

---

## 3. 高潜力待合并 Skills（评论活跃、尚未合并）

- **[#1961](https://github.com/anthropics/skills/pull/1961) skill-creator: harden eval viewer** — 2026-10-03 创建，10-11 更新；修补脚本逃逸、DNS rebinding、跨站 POST、转义问题。时效性最强。
- **[#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder: 支持 mcp>=2** — 修复 #1668，10-08 仍在更新。
- **[#1997](https://github.com/anthropics/skills/pull/1997) skill-creator: 正确解析 YAML frontmatter** — 10-10 创建、10-13 更新，直接关联评估与描述优化命令的正确性。
- **[#1771](https://github.com/anthropics/skills/pull/1771) proofcore-contract-auditor** — 9-15 创建、9-16 更新，新增 Web3 审计能力。
- **[#1792](https://github.com/anthropics/skills/pull/1792) docx: LibreOffice 超时改为报错并校验输出** — 避免误报成功。
- **[#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing: 移除 shell=True** — 安全加固。
- **[#1977](https://github.com/anthropics/skills/pull/1977) algorithmic-art: wrapAround() 修复** — 修复 #1897，处理负值取模。
- **[#1734](https://github.com/anthropics/skills/pull/1734) 检测 docx 孤立批注**（无摘要）。

---

## 4. Skills 生态洞察

**一句话总结**：当前社区在 Skills 层面的诉求已从"增加新 Skill"转向"治理与加固已有 Skill"——信任边界、评估工具链可靠性、以及上下文与安全开销，构成了最集中的三大焦点。

---

# Claude Code 社区动态日报（2026-10-14）

## 今日速览

今日发布 v2.1.299，新增 `CLAUDE_CODE_DISABLE_FILE_MENTIONS` 环境变量，并引入终端空闲自动压缩机制（对应社区长期呼吁的缓存成本优化）。社区侧，VS Code 扩展的自动附加行为（#24726，👍265）与消息队列模式（#50246，👍213）持续占据高热度，且大量 "cyber" 安全过滤器误伤类 Issue 于今日集中关闭。

---

## 版本发布

**v2.1.299**（链接: anthropics/claude-code Releases）
- 新增 `CLAUDE_CODE_DISABLE_FILE_MENTIONS` 环境变量：Claude 仅获取 `@` 文件提及的路径，由其文件工具自行读取，而非直接注入文件内容。
- 终端新增空闲压缩：200K+ token 的会话空闲约 54 分钟后会在触发前被压缩。
- 备注：该空闲压缩机制与 Issue #66115 中关于缓存过期成本的诉求方向一致。

---

## 社区热点 Issues

1. **#24726 [OPEN] VS Code 扩展：支持关闭打开文件/选区的自动附加**（👍265，评论92）
   高频诉求，涉及 IDE 集成的核心交互体验，长期位居评论榜首。
   https://github.com/anthropics/claude-code/issues/24726

2. **#69044 [OPEN] 用户反馈：数月日常使用中记录的重复性错误**（评论92）
   作者系统整理了长期使用中反复出现的问题，对稳定性排查有参考价值。
   https://github.com/anthropics/claude-code/issues/69044

3. **#50246 [CLOSED] 功能请求：消息队列模式——排队而非打断当前任务**（👍213，评论77）
   高赞需求，解决任务中途追加指令只能打断的痛点；今日状态为已关闭。
   https://github.com/anthropics/claude-code/issues/50246

4. **#36146 [OPEN] VS Code 扩展中首条用户消息固定在聊天面板顶部**（👍47，评论31）
   跨 Linux/VS Code 平台的 UI 缺陷，影响对话可读性。
   https://github.com/anthropics/claude-code/issues/36146

5. **#66115 [OPEN] 功能请求：空闲超时自动压缩以避免缓存过期成本**（👍21，评论18）
   直接关涉 prompt 缓存失效带来的重复上下文开销，与今日发布的空闲压缩机制呼应。
   https://github.com/anthropics/claude-code/issues/66115

6. **#98134 [OPEN] macOS 上有效的 Apple Max 20x 订阅仍被识别为 Pro**（评论15）
   订阅/鉴权类缺陷，直接影响付费用户权益。
   https://github.com/anthropics/claude-code/issues/98134

7. **#51537 [CLOSED] 提高/取消/可配置 persistHookOutput 的 10,000 字符限制（v2.1.89 引入）**（👍7，评论10）
   涉及 hooks 系统的 `additionalContext` 上限，影响扩展开发者的输出能力。
   https://github.com/anthropics/claude-code/issues/51537

8. **#99524 [OPEN] Linux：网络切换后，下一次请求在死连接上挂起 180s 才重试**（评论9，has repro）
   网络层稳定性问题，附带复现步骤，建议关注。
   https://github.com/anthropics/claude-code/issues/99524

9. **#99217 [OPEN] 插件 ui.render（AbovePrompt/Pane）在 Remote Control 的桌面/iOS 视图不渲染**（👍6，评论7）
   插件 UI 在远程控制会话中的跨端一致性缺陷。
   https://github.com/anthropics/claude-code/issues/99217

10. **#99032 [OPEN] VS Code 扩展忽略项目 CLAUDE.md 中的外部 @import（终端可加载）**（👍2，评论3，has repro）
    CLI 与扩展行为不一致，影响项目配置的可靠加载。
   https://github.com/anthropics/claude-code/issues/99032

> 另注：#88693、#88681、#88668、#88688、#88675、#88685、#88684、#88669、#88674 等多条 `[Bug][cyber]` 安全过滤器误报 Issue（均为作者 sworrl，标记 session-halted）于今日集中关闭；#82218 报告 Claude in Chrome 将 Shopee/Lazada 卖家中心判定为受限域名而放行 TikTok 卖家中心。

---

## 重要 PR 进展

过去 24 小时内更新的 PR 共 3 条，且均为 `CLOSED` 状态：

1. **#86870 [CLOSED] fix: 防止授权安全研究期间出现误报的 CVP 状态变更**（作者 JoTalbot）
   在 `security-guidance/hooks/review_api.py` 中于安全触发前增加任务上下文校验，扩展 `cap_diff_for_prompt()` 以纳入会话元数据（CVP 状态、教育/实验场景等）。
   https://github.com/anthropics/claude-code/pull/86870

2. **#85834 [CLOSED] fix: HackerOne 漏洞赏金计划访问问题**（作者 JoTalbot）
   修改 devcontainer.json 参数以确保 hookify 插件正确安装，从而支持访问 HackerOne 漏洞赏金计划。
   https://github.com/anthropics/claude-code/pull/85834

3. **#44393 [CLOSED] fix: 让 backfill-duplicate-comments 脚本遵循 DAYS_BACK 环境变量**（作者 Dogecito42）
   工作流虽传入 `DAYS_BACK`，但脚本此前完全忽略它并始终回退至 MIN/MAX_ISSUE_NUMBER；该修复按创建时间计算截止日期进行过滤。
   https://github.com/anthropics/claude-code/pull/44393

---

## 功能需求趋势

- **IDE 集成精细化**：VS Code 扩展的自动附加控制（#24726）、CLAUDE.md 外部 @import 加载一致性（#99032）、聊天面板 UI 缺陷（#36146）等，反映扩展行为与终端体验的对齐是持续焦点。
- **会话与成本控制**：空闲自动压缩（#66115，及今日 v2.1.299 的对应实现）、文件提及内容注入的可配置开关（v2.1.299 新增环境变量），显示社区与官方在上下文/缓存成本优化上持续投入。
- **交互模式演进**：消息队列模式（#50246，👍213）体现用户希望在不打断任务的前提下追加指令。
- **扩展系统能力**：hooks 输出上限（#51537）与插件 UI 跨端渲染（#99217）集中在 hooks/plugins 的可扩展性与一致性。
- **网络与平台稳定性**：网络切换后的挂起重试（#99524）、订阅识别（#98134）等平台层问题。

---

## 开发者关注点

- **安全过滤器误报**：大量 `[Bug][cyber]` 类 Issue（作者 sworrl）集中关闭，主题涵盖 Android 系统定制、分区恢复、签名密钥审计、反编译分析等，均标记为 session-halted（中断授权工作），凸显安全分类器对合法开发场景的误伤痛点；相关 PR #86870 亦尝试通过上下文校验缓解。另有 #82218 反映 Claude in Chrome 的域名分类不一致。
- **IDE 与 CLI 行为不一致**：#99032、#24726、#36146 集中指向 VS Code 扩展的配置加载与交互行为需与终端对齐。
- **付费与鉴权准确性**：#98134 的订阅等级误判直接影响用户权益。
- **长会话成本与缓存**：#66115 与 v2.1.299 的空闲压缩机制共同指向缓存过期带来的重复上下文成本。
- **网络健壮性**：#99524 的死连接挂起 180s 问题在带复现条件下仍开放，值得跟进。

*注：以上内容均基于所提供的 GitHub 数据整理，PR 评论数在源数据中标记为 undefined。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-14）

## 今日速览

今日 Codex 仓库连续发布三个 `rust-v0.163.0-alpha` 预览版本，同时合并了大量由 `copyberry[bot]` 提交的稳定性与可靠性修复 PR。社区侧最突出的问题集中在 **Windows 平台兼容性**（Computer Use 截图失败、沙箱策略冲突）以及 **远程控制与上下文管理**（iOS Remote 项目列表回归、历史推理重复计数导致过早压缩）。

---

## 版本发布

过去 24 小时内共发布三个 Rust 侧预览版本，均为同一 alpha 系列的连续迭代：

- **rust-v0.163.0-alpha.9**
- **rust-v0.163.0-alpha.10**
- **rust-v0.163.0-alpha.11**

三个版本的 Release 说明均仅为版本号本身，未提供详细更新日志。建议关注后续稳定版发布说明以了解具体变更。

---

## 社区热点 Issues

1. **[#25178](https://github.com/openai/codex/issues/25178) — Windows 10 22H2 上 Computer Use 截图失败**（88 评论，👍32）
   高热度长期问题。当调用 `SetIsBorderRequired` 后，`get_window_state` 在截图前即失败，但列举窗口、读取无障碍文本、发送键盘输入均正常。评论数与点赞数均为近期最高，说明 Windows 端 Computer Use 是核心痛点。

2. **[#36040](https://github.com/openai/codex/issues/36040) — iOS Remote 仅列出含近期对话的项目（回归）**（84 评论）
   使用 iOS ChatGPT 应用通过 Remote Control 连接 macOS 主机时，只显示近期有对话的项目，属功能回归。高评论数表明远程控制场景使用面广。

3. **[#27565](https://github.com/openai/codex/issues/27565) — 类 Claude Code 的远程控制功能需求**（15 评论，👍21）
   用户希望 CLI 支持 `/remote-control` 后直接通过移动端访问，免去 SSH 隧道。点赞数高，反映社区对轻量化远程访问的强烈期待。

4. **[#53752](https://github.com/openai/codex/issues/53752) — 自定义 Responses 提供方 + 子代理下初始上下文约 273k token、单日消耗 2400 万 token**（6 评论）
   新提交的高严重度问题，涉及定制模型接入与子代理时的 token 成本失控，对成本敏感团队影响重大。

5. **[#53309](https://github.com/openai/codex/issues/53309) — 0.162.0-alpha.17.2 中历史推理被重复计数，导致过早自动压缩**（4 评论，👍2）
   上下文预算计算缺陷直接影响长会话体验，会造成无谓的上下文压缩。

6. **[#45914](https://github.com/openai/codex/issues/45914) — `send_message_to_thread` 的 `function_call_output` 未持久化 `call_id`**（4 评论）
   破坏严格 Responses API 提供方的兼容性，属跨线程异步工具结果持久化协议问题，对自建提供方开发者尤为关键。

7. **[#38653](https://github.com/openai/codex/issues/38653) — 分页线程引导按条目数（最多 500）而非字节限制加载**（5 评论）
   单个大 turn 即可占满预算，导致打开转换后的分页任务耗时数十秒，性能问题明确。

8. **[#49355](https://github.com/openai/codex/issues/49355) — Windows 下 ADB 在 Full access 被拦截，显式批准却成功**（3 评论，👍1）
   同一条命令在不同权限模式下结果不一致，暴露 Windows 沙箱策略逻辑矛盾。

9. **[#45640](https://github.com/openai/codex/issues/45640) — 已启用的公网 HTTPS MCP 本地可用，但云端会话工具中缺失**（3 评论）
   MCP 在云执行环境中的配置同步问题，影响云端与本地行为一致性。

10. **[#53964](https://github.com/openai/codex/issues/53964) — Windows 桌面端工作区设置间歇失败 + 重装后 rollout 文件缺失**（3 评论，10-14 当日新建）
    当日新报问题，涉及设置加载与会话持久化双重故障，可靠性风险较高。

---

## 重要 PR 进展

今日合并（均已 CLOSED）的 PR 绝大多数由 `copyberry[bot]` 提交，围绕可靠性、取消传播与内存/上下文边界展开：

1. **[#53987](https://github.com/openai/codex/pull/53987) — 跳过过期 Guardian 授权重试的服务退避**
   过期授权需刷新本地证据，跳过退避可避免不必要的下次评审延迟。

2. **[#53969](https://github.com/openai/codex/pull/53969) — 避免守护进程重启测试中的重连竞态**
   修复 PTY 读取在重连提示被擦除时拆分重绘、导致 Enter 被抑制的问题。

3. **[#53963](https://github.com/openai/codex/pull/53963) — 用排除项与密文测试记忆提取预算**
   扩展两版记忆的第一阶段请求测试，覆盖推理、开发者消息与助手密文超出读取预算的场景。

4. **[#53947](https://github.com/openai/codex/pull/53947) — 调用任务取消时停止 rollout 读取**
   将调用方取消信号传播至 rollout 读取，避免异步任务被丢弃后仍继续解压与扫描历史。

5. **[#53940](https://github.com/openai/codex/pull/53940) — 为记忆提取限定 rollout 输入**
   从新到旧读取证据，最多保留 8 MiB 净化后的响应项与代理间通信，再恢复时间顺序。

6. **[#53932](https://github.com/openai/codex/pull/53932) — 压缩失败时保留会话历史**
   缓冲压缩输出，避免未完成的摘要写入会话历史与持久化 rollout。

7. **[#53908](https://github.com/openai/codex/pull/53908) — 任务移除期间保持代理面板可浏览**
   归档/删除任务不再阻塞面板导航，提升交互流畅度。

8. **[#53879](https://github.com/openai/codex/pull/53879) — 线程设置更新期间保留运行中 turn 的恢复信息**
   修复独立线程设置更新清除 continuation lineage、导致守护进程重启后无法恢复的问题。

9. **[#53872](https://github.com/openai/codex/pull/53872) — 在增量工具上下文窗口中刷新模型指令**
   修复同一模型的目录刷新后、活动指令仍为陈旧状态的问题。

10. **[#53845](https://github.com/openai/codex/pull/53845) — 修复 Unix 下守护进程更新器的 socket 绑定与引导就绪**
    避免 socket 路径超出 Unix 限制，并修复 bootstrap 在更新器手动步骤完成前即报成功。

---

## 功能需求趋势

从过去 24 小时更新的 50 条 Issue 中可提炼出以下方向：

- **远程控制与移动端集成**：#36040（iOS Remote）、#27565（类 Claude Code 远程控制）、#52201（语音请求本地浏览器控制）表明移动端与远程访问是持续热点。
- **Windows 平台兼容性**：大量 Issue 集中在 Windows（Computer Use 截图/光标、ADB 沙箱、工作区设置、rollout 文件、进程创建策略），是当前问题最密集的平台。
- **上下文与 token 成本管理**：#53752、#53309、#38653 均涉及上下文预算、重复计数与加载边界，反映长会话与子代理场景下的性能与成本焦虑。
- **自定义模型与 Responses API 兼容**：#53752、#45914 显示出对严格 Responses API 提供方与自定义模型接入的重视。
- **MCP 与云端执行一致性**：#45640 反映 MCP 配置在本地与云会话间的同步需求。
- **Computer Use**：#25178、#25200、#53053 显示该能力在 Windows 上仍不稳定（截图、系统光标、Chrome URL 识别）。
- **语音/Dots 集成**：#52201、#49829 涉及语音任务与 Dot 任务的可靠执行。

---

## 开发者关注点

- **Windows 平台稳定性是首要痛点**：截图、鼠标光标、ADB 沙箱策略、设置加载与文件持久化问题密集，且多为 OPEN 状态、部分可追溯至数月前。
- **权限/沙箱策略不一致**：同一条命令在 Full access 被拒、显式批准却成功（#49355、#53981），错误信息缺乏可操作性，影响自动化流程。
- **上下文与成本失控**：历史推理重复计数导致过早压缩（#53309）、自定义提供方下 2400 万 token 消耗（#53752），开发者对可预测的 token 预算有明确需求。
- **协议兼容性缺口**：`call_id` 缺失（#45914）、云端 MCP 工具缺失（#45640）破坏自建提供方与云执行环境的兼容。
- **远程/移动体验回归**：iOS Remote 仅显示近期项目（#36040）削弱远程控制可用性，与高赞的轻量化远程控制需求（#27565）形成呼应。
- **可靠性修复节奏加快**：今日大量 `copyberry[bot]` PR 聚焦取消传播、压缩失败保护、恢复信息保留等，显示团队正系统性处理稳定性与历史一致性问题。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-14）

## 今日速览

今日发布 3 个版本，包括 v0.65.0 正式版及 nightlies/preview 更新，核心围绕安全加固（不受信任文件夹的只读工作区设置）、会话恢复修复与 A2A 设置迁移。社区讨论热度集中在 **Agent 可靠性**：子代理挂起、MAX_TURNS 被误报为成功、browser subagent 失败等 P1 问题持续发酵。PR 侧则出现了大量针对下载流错误、IDE 重连、原子写入保护等边界场景的修复。

---

## 版本发布

**v0.64.0（正式版）**
- `refactor(a2a-server)`: 实现 V1 到 V2 的设置迁移逻辑
- `fix(acp)`: 桥接 `PromptResponse.usage` 并发送 `usage_update` 通知

**v0.65.0-preview.0**
- `fix(cli)`: 在不受信任的文件夹中强制只读工作区设置（安全相关）
- `fix(core)`: 恢复会话时避免重复的 tool response turns

**v0.65.0-nightly.20261014.g42c518220**
- `fix(cli)`: 修正展开 Unicode 字符时反向搜索的高亮索引
- `fix(core)`: 将仅含空白的 UTF-16/UTF-32 文件视为空文件

---

## 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 子代理 MAX_TURNS 后恢复被误报为 GOAL success（P1）**
   评论 13、👍 2。`codebase_investigator` 子代理在未做任何分析就触达最大轮次限制时，仍上报 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了中断事实。这是对 Agent 可信度的直接打击，评论数与优先级都居首。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 永久挂起（P1）**
   评论 8、👍 8（今日最高赞）。只要 CLI 委派给 generalist agent 就会无限挂起，甚至连创建文件夹这类简单操作也会卡住，用户等待长达一小时。高赞说明影响面广。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 通过零依赖 OS 沙箱与执行后意图路由释放模型的 bash 亲和力（P2 enhancement）**
   评论 9。提出利用 Gemini 3 原生 bash 使用倾向（链式调用 `grep`/`cat`/`sed`/`awk`）的架构级设想，属于方向性大议题。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST 感知的文件读取、搜索与映射影响（P2 EPIC）**
   评论 7。追踪 AST 感知工具能否用单次调用精确读取方法边界、减少轮次，是检索效率优化的关键探索。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不够主动使用 skills 和子代理（P2）**
   评论 7。用户反馈除非显式指令，模型几乎不会自主调用自定义 skills 与子代理，指向 Agent 编排的自动触发问题。

6. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent 在 Wayland 下失败（P1）**
   评论 4、👍 1。Linux Wayland 环境下 browser subagent 直接失败，影响桌面端自动化场景。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖（如 maxTurns）（P2）**
   评论 4。配置系统与 AgentRegistry 脱节，导致全局/项目级配置形同虚设。

8. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) get-shit-done 输出 hook 导致崩溃（P1）**
   评论 3。输出 hook 在打印用户摘要接近完成时反复使 gemini 崩溃，属于稳定性硬伤。

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 > 128 时遭遇 400 错误（P2）**
   评论 3。工具数量过多导致 API 报错，暴露工具范围管理的缺陷。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应阻止/劝阻破坏性行为（P2）**
    评论 3、👍 1。模型在复杂 git 操作中会使用 `git reset` 或 `--force`，需要更安全的替代与约束。

---

## 重要 PR 进展

1. **[#29750](https://github.com/google-gemini/gemini-cli/pull/29750) 加载 .env 后再解析 settings 占位符（P2, area/core）**
   修复 `loadSettings()` 加载顺序缺陷：此前 settings 在 `loadEnvironment()` 注入 `.env` 变量之前就已完成解析与校验，导致占位符失效。

2. **[#29749](https://github.com/google-gemini/gemini-cli/pull/29749) 原子写入尊重只读文件与硬链接（area/agent）**
   修复 #29499 引入的回归：`writeTextFile` 会静默覆盖只读文件并断开硬链接，因 rename 仅依赖目录权限、不检查目标属性。

3. **[#29608](https://github.com/google-gemini/gemini-cli/pull/29608) 网络搜索 30 秒超时（P1, area/agent）**
   解决 `GoogleSearch`/`WebFetch` 只传递调用方 abort signal，导致底层 LLM 调用不返回时 Agent 循环永久卡在 `Thinking...`。

4. **[#29744](https://github.com/google-gemini/gemini-cli/pull/29744) 允许 /ide enable 在 IDE 服务器重启后重连（area/core）**
   修复 VS Code「Developer: Reload Window」或扩展更新后，集成终端中的 CLI 显示 `🔴 Disconnected` 且 `/ide enable` 持续失败的问题。

5. **[#29748](https://github.com/google-gemini/gemini-cli/pull/29748) 文档说明容器沙箱中 IDE 集成不可用（docs）**
   明确 `GEMINI_SANDBOX=docker|podman|runsc|lxc` 时 `/ide status`、`/ide enable`、原生 diff 等功能在 IDE 位于宿主机时无法工作。

6. **[#29735](https://github.com/google-gemini/gemini-cli/pull/29735) 扩展 downloadFile 处理响应与写入流错误（P2, area/extensions）**
   此前仅依赖 `finish`，现改为在 HTTP 响应流与目标写入流失败时正确 reject。

7. **[#29746](https://github.com/google-gemini/gemini-cli/pull/29746) 修复 detectPowerShellSubstitution 的引号跟踪与误报（area/core）**
   修复 Windows 上双引号内转义字符（`\"`、`""`、嵌套单引号）导致命令替换误判的问题。

8. **[#29606](https://github.com/google-gemini/gemini-cli/pull/29606) 仅在合法 RFC 9110 token 前分割自定义 header（area/core）**
   修复 `parseCustomHeaders` 误拆包含 `,"name":` 的 JSON 元数据类 header 值（如 `x-portkey-metadata`）。

9. **[#29607](https://github.com/google-gemini/gemini-cli/pull/29607) 无报告时让 nightly eval 摘要失败（area/platform）**
   修复 `aggregate_evals.js` 在无 `report.json` 时记录「No reports found.」并退出 0 的静默失败问题。

10. **[#29745](https://github.com/google-gemini/gemini-cli/pull/29745) 启动性能分析（Test/argon startup profiling，已关闭）**
    探索 CLI 启动性能剖析，与 #21924 终端 resize 性能诉求呼应。（另：[#5819](https://github.com/google-gemini/gemini-cli/pull/5819) 子代理增量输出流式传输已关闭）

---

## 功能需求趋势

- **Agent 稳定性与可信度**：今日 P1/P2 Issue 大多围绕子代理挂起、误报成功、browser subagent 跨环境失败，社区对「Agent 说成功但实际失败」极度敏感。
- **AST 感知的代码理解**：[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 与 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 构成一个 EPIC 群，探索用 AST 工具（tilth、glyph）精确读取边界、减少轮次、增强 codebase_investigator。
- **IDE 集成与沙箱**：多个 PR（#29744、#29748）集中在 IDE 连接稳定性与容器沙箱限制，说明 IDE 集成是活跃迭代方向。
- **配置系统一致性**：settings.json 覆盖被忽略（#22267）、.env 加载顺序（#29750）、不受信任文件夹只读设置（v0.65.0-preview.0）均指向配置可靠性。

---

## 开发者关注点

1. **Agent 挂起是首要痛点**：generalist agent 永久挂起（#21409，8 👍）、网络搜索卡死（#29608）、子代理误报成功（#22323）共同反映「不可观测的卡死与错误状态」是当前最大阻力。
2. **安全与破坏性操作**：不受信任文件夹的只读强制、只读文件/硬链接保护、模型误用 `git reset`/`--force`（#22672）显示安全加固正成为重点。
3. **跨平台与跨环境兼容**：Wayland 下 browser subagent 失败、Windows 上 PowerShell 替换误判，跨环境健壮性需求明显。
4. **工具与配置的可控性**：工具数超限报 400（#24246）、配置被忽略（#22267）、skills/子代理不被自动调用（#21968），说明开发者希望更精细地控制 Agent 行为边界。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-14）

## 1. 今日速览

过去 24 小时共发布 4 个版本（v1.0.97、v1.0.97-3、v1.0.98-0/1/2 系列），核心变化是新增 **agent 作用域的声明式 hooks**、BYOK/远程插件市场认证重试，以及 `/ask` 答案的复制与重开能力。Issues 侧集中爆发了 **模型请求体 JSON 解析失败（Claude / Gemini Argon）**、**Windows MCP OAuth 失控循环**、**ACP 模式行为不一致** 等新问题，同时 BYOK 相关诉求（模型发现、凭据命令）持续升温。今日 PR 列表为空，无合并动态。

---

## 2. 版本发布

**v1.0.98-2** — [链接](https://github.com/github/copilot-cli/releases)
- 改进：`/ask` 答案支持 `Ctrl+E` 展开、`Ctrl+Y` 复制全文；可用 `/ask` 或 `/btw` 重新打开本会话中最近的已完成答案。
- 修复：在 Node 下丢失子进程退出信号时，命令 hooks 仍能可靠完成。

**v1.0.98-1** — [链接](https://github.com/github/copilot-cli/releases)
- 新增：支持 Gemini 4 Argon。
- 修复：分屏切换会话后 MCP 状态与 `/mcp` 命令保持同步；恢复会话时不再执行已废弃的待批准权限工作，仅继续活跃的权限请求。

**v1.0.98-0** — 常规修复与变更，无详细条目。

**v1.0.97 / v1.0.97-3**（2026-10-13）— [链接](https://github.com/github/copilot-cli/releases)
- 新增：为自定义 agent 提供 **agent 作用域的声明式 hooks**。
- 修复：远程插件市场与插件拉取在 HTTPS 认证失败后，使用已登录的 GitHub token 重试一次；TLS 拦截代理下缺少 `close_notify` 时流式响应能正常结束；修复带绝对路径的 GitHub SCP 远程地址解析。

> 注意：Gemini 4 Argon 刚在 v1.0.98-1 上线，同日即有 Issue #5139 报告其请求体 JSON 报错，建议观望后再启用。

---

## 3. 社区热点 Issues（精选 10 条）

1. **[#5139] Claude 模型与 Gemini Argon 报 HTTP 400 "request body is not valid JSON"** — [链接](https://github.com/github/copilot-cli/issues/5139)
   新提交即被 triage，Claude Sonnet 5.5 / Opus 5.5 在 CLI 中稳定失败，其他模型正常；与刚发布的 Gemini 4 Argon 支持叠加，可能影响新模型上线的可用性，属当日最高优先级信号。

2. **[#5140] Headless 模式在 `finish_reason: "tool_calls"` 但无工具调用时空响应退出 0** — [链接](https://github.com/github/copilot-cli/issues/5140)
   `-p` / `--no-ask-user` 下长任务被静默中断，退出码仍为 0，CI 场景下极易误判成功，是自动化流水线的隐患。

3. **[#5134] Windows 上 MCP OAuth 初始化失控，反复打开浏览器（Maximum update depth exceeded）** — [链接](https://github.com/github/copilot-cli/issues/5134)
   阻止 Windows 用户正常启动与认证，属阻塞级 bug，涉及 MCP + Windows 平台双热点。

4. **[#5133] ACP 模式忽略 `includeCoAuthoredBy: false`** — [链接](https://github.com/github/copilot-cli/issues/5133)
   同一提示在 `copilot -p` 下正常、`--acp` 下失效，提交仍带 `Co-authored-by: Copilot` 尾注，反映 ACP 路径与主路径行为分叉的系统性问题。

5. **[#5115] ACP 模式下 `/rename` 报告成功但不生效** — [链接](https://github.com/github/copilot-cli/issues/5115)
   已有 5 条评论，是 ACP 生态中被反复报告的会话管理缺陷，与 #5133 共同指向 ACP 实现的一致性问题。

6. **[#4950] BYOK 自定义 provider 被强制贪心采样（temperature=0）导致推理模型退化与静默挂起** — [链接](https://github.com/github/copilot-cli/issues/4950)
   涉及 1.0.81 起的采样参数硬编码，影响 vLLM 等自托管推理模型；对 BYOK 用户群影响面大，讨论仍在持续。

7. **[#4358] BYOK：从 provider 的 `/models` 端点填充 `/model` 选择器** — [链接](https://github.com/github/copilot-cli/issues/4358)
   9 个 👍，指出当前只能配置单一模型，`/models` 无法列出 provider 实际可用模型，是企业自托管场景的高票需求。

8. **[#5130] 企业环境持续弹出 "Managed account policy" 错误（自 1.0.94 起）** — [链接](https://github.com/github/copilot-cli/issues/5130)
   企业用户高频报错且长期未解，影响日常使用体验与合规团队观感。

9. **[#5129] 为企业部署提供 Windows 系统级安装包** — [链接](https://github.com/github/copilot-cli/issues/5129)
   当前安装到用户目录并从 `%LOCALAPPDATA%\copilot` 执行，与企业安全策略冲突，是落地推广的硬性阻碍。

10. **[#1724] 显示当前 TODO 状态** — [链接](https://github.com/github/copilot-cli/issues/1724)
    12 个 👍，为今日列表中呼声最高的功能需求；agent 内部维护的 TODO 列表对用户不可见，社区希望像 opencode 一样在侧栏呈现。

**其他值得关注**：[#4381](https://github.com/github/copilot-cli/issues/4381) Windows 通知角标清理后仍残留；[#4931](https://github.com/github/copilot-cli/issues/4931) 云 agent 内置 Playwright MCP 首次工具调用即已关闭；[#5131](https://github.com/github/copilot-cli/issues/5131) 用户打字时权限请求打断输入；[#5135](https://github.com/github/copilot-cli/issues/5135) 切换会话后 `/exit` 需输两次。

---

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 共 **0 条**，无进行中或已合并的 PR 动态可供分析。本部分省略。

---

## 5. 功能需求趋势

- **BYOK / 自托管增强**：模型发现（#4358）、采样参数可控（#4950）、凭据命令免启动器（#4936）三项诉求集中出现，社区希望 CLI 对 OpenAI 兼容 provider 提供更完整的配置面。
- **企业级部署与合规**：系统级 Windows 安装（#5129）、托管账户策略报错（#5130）、`includeCoAuthoredBy` 在 ACP 下失效（#5133），企业落地相关议题占当日显著比例。
- **ACP / 非交互模式一致性**：`/rename`（#5115）、co-authored 配置（#5133）、headless 退出码（#5140）——ACP 与 `-p` 路径的行为分叉成为新一类系统性问题。
- **MCP 稳定性**：OAuth 循环（#5134）、工具注册失败（#5101，已关闭）、会话切换后状态同步，MCP 仍是故障高发区。
- **交互体验**：展开思考（#5137）、打字时勿打断（#5131）、TODO 可视化（#1724）、答案复制与重开（已在 v1.0.98-2 落地），说明社区对终端交互体验的诉求在上升。
- **会话管理**：会话命名缺失（#5132）、嵌套会话导致重复 `/exit`（#5135），多会话工作流尚不稳固。

---

## 6. 开发者关注点

- **新模型支持存在落地缺口**：Gemini Argon 刚加入即报 400，Claude 5.5 系列同样失败（#5139），开发者需要"发布即可用"的验证闭环。
- **静默失败最伤自动化**：headless 模式 0 退出码（#5140）与流式中断无用量记录（#5138）导致 CI 与计费不可信，是比崩溃更难排查的问题。
- **BYOK 用户被"次等公民"对待**：强制 `temperature=0` 破坏推理模型、只能配一个模型、凭据依赖每次调用的启动器，三项叠加限制了自托管场景。
- **Windows 平台问题密集**：OAuth 循环、通知角标残留、系统级安装缺失、`%LOCALAPPDATA%` 执行限制，构成企业 Windows 用户的主要摩擦面。
- **ACP 模式可作为性受质疑**：多个命令在 ACP 下"报告成功但不生效"，建议使用者在 ACP 工作流中逐项验证关键操作。
- **企业策略提示噪音**：持续弹出的 "Managed account policy" 报错虽不阻塞，但会长期消耗用户信任。

---

*本日报仅基于 github.com/github/copilot-cli 在 2026-10-14 提供的 Releases 与 Issues 数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-14）

## 今日速览

今日无新版本发布，社区讨论聚焦于 **OpenCode V2 的迁移与回归问题**：v1 → v2 升级导致的配置发现、MCP OAuth 凭证迁移、工具暴露等兼容性断裂成为最集中的反馈。此外，TUI/desktop 端的渲染与交互缺陷（标签页冻结、剪贴板、消息重注入）以及 `big-pickle` 模型的推理内容泄漏问题持续受到关注。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 社区热点 Issues

1. **[OPEN] #42421 [2.0] [Feature]: add todo support for v2** — 评论 29 | 👍 5
   V1 中模型可通过 `todowrite`/`todoread` 读写原生 TODO 列表，V2 不再向模型暴露这些工具。这是今日讨论量最高的议题，直接关系到 V2 的 agent 能力对等性。
   https://github.com/anomalyco/opencode/issues/42421

2. **[CLOSED] #26846 Opencode segfaults in NixOS+WSL** — 评论 11 | 👍 16
   WSL 内运行 NixOS 时 `opencode --version` 直接段错误，点赞数最高，反映特定环境下的严重可用性问题（已关闭）。
   https://github.com/anomalyco/opencode/issues/26846

3. **[OPEN] #55324 [triaging] desktop: clicking any tab inside a project freezes the app / blank white screen** — 评论 10
   Desktop 应用中点击项目内任意标签页即导致应用无响应、白屏。当日新建的高优先级桌面端阻塞性缺陷。
   https://github.com/anomalyco/opencode/issues/55324

4. **[OPEN] #55204 Queued user message is re-injected into model context once per agent step after an interrupted run** — 评论 9
   运行中断/恢复后，同一条持久化用户消息会被多次注入模型上下文，属于对话状态一致性问题，可能影响成本与输出正确性。
   https://github.com/anomalyco/opencode/issues/55204

5. **[OPEN] #51812 First prompt after start has no MCP tools: tool list does not wait for pending MCP connections** — 评论 6
   `opencode serve` 或 `--standalone` 启动后第一条 prompt 不含 MCP 工具，第二条起才正常。影响自动化与脚本化调用的可靠性。
   https://github.com/anomalyco/opencode/issues/51812

6. **[OPEN] #54599 [reproduced] reasoning: opencode zen (big-pickle) inline `</think>` leaks into text content instead of a reasoning part** — 评论 5
   模型思维链偶发以 inline 形式混入可见 `content`，而不是作为独立 reasoning 部分存储。已被复现。
   https://github.com/anomalyco/opencode/issues/54599

7. **[OPEN] #54428 [reproduced] app: streaming delta re-parses the whole markdown block, and the DOM round-trip around it dominates the visible cost** — 评论 5
   单个 streaming delta 约耗 2ms 主线程时间，主要开销来自 HTML 重解析而非 store 遍历。属于前端性能类实测反馈。
   https://github.com/anomalyco/opencode/issues/54428

8. **[CLOSED] #55373 [v2 Regression] Linux system configuration /etc/opencode/opencode.json is not discovered** — 评论 5
   v2.0.26 无法自动发现 `/etc/opencode/opencode.json`，而 v1.19.0 正常。典型的 V2 回归，影响 Linux 系统级配置用户。
   https://github.com/anomalyco/opencode/issues/55373

9. **[OPEN] #55367 [2.0, reproduced] server (NixOS): watcher subscribes /nix/store as parent-directory watch... consuming ~523k inotify watches and causing system-wide ENOSPC** — 评论 4
   NixOS 下文件监听器将 `/nix/store` 当作父目录监控，耗尽约 52.3 万个 inotify watch 导致系统级 ENOSPC。严重环境相关缺陷，已复现。
   https://github.com/anomalyco/opencode/issues/55367

10. **[OPEN] #54879 [reproduced] migrate-v1: remote MCP OAuth tokens (mcp-auth.json) are not migrated; every OAuth remote server needs re-auth after upgrade** — 评论 4
    v1 → v2 升级不迁移远程 MCP OAuth 凭证，所有 OAuth 保护的服务器都需重新认证。迁移体验的关键痛点。
    https://github.com/anomalyco/opencode/issues/54879

---

## 重要 PR 进展

1. **#54366 [OPEN] feat(core): transcribe images for models without vision support**
   当所选模型无法读取图像时，V2 会将附件转写为文本形式，扩展无视觉能力模型的可用性（Closes #48332）。
   https://github.com/anomalyco/opencode/pull/54366

2. **#54088 [OPEN] [contributor] feat(app): add session turn navigator**
   在会话时间轴左缘添加逐轮次导航刻度，悬停预览 prompt 与最新回复末尾，点击跳转。改善长会话浏览体验。
   https://github.com/anomalyco/opencode/pull/54088

3. **#54426 [OPEN] [contributor] feat(app): show voice delegations from the iOS app as Voice messages**
   将 iOS 应用语音通话请求从纯文本 prompt 改为显式 “Voice messages”，提升语音输入的语义可读性。
   https://github.com/anomalyco/opencode/pull/54426

4. **#55416 [OPEN] feat(tui): resizable session sidebar with sidebar_width config**
   新增可调整宽度的会话侧边栏与 `sidebar_width` 配置（Closes #6087、#35513，关联 #52430）。
   https://github.com/anomalyco/opencode/pull/55416

5. **#55421 [OPEN] feat(tui): collapse long bash commands and optionally tail their output**
   折叠长 bash 命令并可选择只显示输出尾部。作者注明这是 v1 维护分支版本，v2 版将在其迁移插件系统后提交。
   https://github.com/anomalyco/opencode/pull/55421

6. **#55418 [OPEN] fix(app): stage dropzone blur to avoid idle backdrop cost**
   对 dropzone 的 blur 层做分阶段处理，降低空闲状态下的 backdrop 渲染开销（Closes #55422）。
   https://github.com/anomalyco/opencode/pull/55418

7. **#55403 [OPEN] [contributor] fix(client): preserve surviving input through committed reverts**
   修复 V2 Client 中输入内容在提交回滚时丢失的问题（Fixes #44357，从 #55315 拆分）。
   https://github.com/anomalyco/opencode/pull/55403

8. **#55406 [OPEN] fix(core): diagnose native agent fields in legacy agent sections**
   让 legacy `agent`/`mode` 段经由 V1 agent schema 解码时能正确诊断原生 agent 字段（Closes #54917）。
   https://github.com/anomalyco/opencode/pull/55406

9. **#55412 [OPEN] [needs:compliance] fix(core): include inline attachment names in model context**
   在粘贴的图像/PDF 作为 inline `FileAttachment` 时，为模型补充可见的 `Attached file: <name>` 文本部分。
   https://github.com/anomalyco/opencode/pull/55412

10. **#55416 / #55403 之外，#54277 [CLOSED] [contributor] feat(app): restore option arrow session tab navigation**
    恢复 v1 布局中的会话标签键盘导航：Option ↑/↓ 切换标签，Option Shift ↑/↓ 跳转至上/下一个未读标签。
    https://github.com/anomalyco/opencode/pull/54277

---

## 功能需求趋势

- **V2 功能对等与迁移**：TODO 工具缺失（#42421）、系统配置发现回归（#55373）、MCP OAuth 凭证未迁移（#54879）——社区强烈期待 V2 在升级路径上保持与 V1 的能力和行为一致。
- **MCP 集成稳定性**：首条 prompt 缺失 MCP 工具（#51812）、`mcp auth` 未真正走 OAuth 却报成功（#55138），显示 MCP 连接生命周期与认证语义是重点方向。
- **模型推理内容处理**：`big-pickle` 的 `</think>` 泄漏（#54599、#55268）指向 reasoning 与可见文本的隔离机制需要强化。
- **前端/TUI 性能与交互**：streaming delta 重解析（#54428）、dropzone blur 开销（#55418）、可调侧边栏（#55416）显示渲染性能与可定制布局是持续需求。
- **多模态与无视觉模型支持**：图像转写（#54366）与附件名注入（#55412）表明社区关注模型能力差异下的兼容处理。
- **平台/环境适配**：NixOS+WSL 段错误（#26846）、NixOS inotify 耗尽（#55367）、Windows 迁移脚本 glob 路径分割（#55125）——非主流平台的兼容性需求突出。

---

## 开发者关注点

- **升级即断链**：多位开发者反馈 v1→v2 升级后配置、凭证、工具行为发生变化，迁移路径缺少平滑过渡。
- **环境相关崩溃与资源耗尽**：NixOS 上的段错误与 inotify watch 耗尽属于系统级阻塞，影响面大且症状严重。
- **对话状态一致性**：中断恢复后消息重注入（#55204）、Anthropic 工具输入被作为原始字符串发送导致 400（#53865），影响长会话稳定性。
- **推理内容与可见文本边界**：`</think>` 泄漏问题被重复报告（#54599、#55268），开发者希望明确区分 reasoning 与 content。
- **启动时资源未就绪**：MCP 工具在首个 prompt 缺失（#51812）反映初始化时序问题，对脚本化/自动化用户尤为敏感。
- **文档与生态补充**：安装方式（mise，PR #55415）、生态插件登记（PR #55411）、模型列表清理（PR #55410）等文档类 PR 活跃，说明社区愿意参与维护。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-14

## 1. 今日速览

今天没有新版本发布，但社区活动密集：Issues 与 PR 各更新了 50 / 18 条。主线集中在两类问题——**模型上下文与溢出检测的真实性**（272K vs 500K、HTTP 413、llama.cpp 溢出未被识别）和**新一代模型（Gemini 4、GPT-6、Claude 5.5 系列）的推理参数适配**。同时，一批长期悬而未决的 TUI / RPC / SDK 稳定性问题在今天被关闭或推进。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues（10 条）

**[#10840 [CLOSED] openai-codex: GPT-6.1 Sol 在 Codex 默认窗口升至 500K 后仍使用 272K](https://github.com/earendil-works/pi/issues/10840)**（评论 9）
即便关闭扩展，Pi 仍显示 272K 上下文窗口，因为已安装的目录声明 `contextWindow: 272000`，导致压缩（compaction）预算停留在旧值。这是上下文管理准确性的核心问题，评论数最高。

**[#3808 [CLOSED] 让 Anthropic 订阅认证警告可关闭或可移除](https://github.com/earendil-works/pi/issues/3808)**（评论 9）
交互模式强制显示“第三方 harness 使用按 token 计费”的警告。这是一个持续近半年（创建于 4 月）的老需求，今天关闭，说明交互体验类诉求终于落地。

**[#10862 [OPEN] [bug] 鼠标选择激活时硬件光标跳到错误列（1.2.0）](https://github.com/earendil-works/pi/issues/10862)**（评论 7）
`showHardwareCursor: true` 时，光标位置通过零宽标记 `\x1b_pi:c\x07` 计算，导致列偏移错误。属于 TUI 渲染层的具体可复现缺陷。

**[#10867 [CLOSED] 提示模板丢弃空引号参数并使后续位置参数左移](https://github.com/earendil-works/pi/issues/10867)**（评论 6）
空引号参数被丢弃，导致后续参数整体前移，无法“使用第一个参数默认值同时提供第二个参数”，属静默改变 prompt 语义的高危问题。

**[#9887 [CLOSED] [bug] 行号为字符串时 `read` 工具调用的 TUI 渲染出错](https://github.com/earendil-works/pi/issues/9887)**（评论 6）
在 `openrouter:xiaomi/mimo-v2.6-flash` 上，模型将 `offset`/`limit` 生成为字符串，TUI 错误地做字符串拼接而非数值相加。反映**模型输出类型不确定性对工具层的冲击**。

**[#10642 [CLOSED] [last-read, no-action] 嵌入式 SDK：长生命周期会话内存永不释放](https://github.com/earendil-works/pi/issues/10642)**（评论 5）
OAR 项目在单个 Node 进程中托管多个 `AgentSession`，会话持续数天：压缩后条目常驻内存，resume 时加载整个文件。对**嵌入式 / 服务端部署**是重要信号。

**[#10470 [OPEN] RPC 的 new_session/switch_session/fork/clone 重复发出 session_start](https://github.com/earendil-works/pi/issues/10470)**（评论 5）
RPC 模式下四个会话操作均重复触发 `session_start` 事件，会破坏依赖事件计数的下游集成。

**[#10628 [OPEN] 全屏 TUI 的 OSC 52 复制被 tmux 吞掉（无 passthrough 包裹）](https://github.com/earendil-works/pi/issues/10628)**（评论 4，👍 4）
Pi 发出裸 OSC 52，tmux 拦截到自己的粘贴缓冲，不转发给客户端，但 Pi 仍提示“Copied!”。**今日点赞数最高的 Issue**，说明终端集成痛点有共识。

**[#10890 [CLOSED] [prio:p0] google-vertex: gemini-4-argon 请求 400 “Thinking budget is not supported”](https://github.com/earendil-works/pi/issues/10890)**（评论 3，👍 2）
`usesGoogleThinkingLevel` 未匹配 gemini-4，导致走到 `thinkingBudget` 路径被 Vertex 拒绝。被标记 p0，且有对应 PR 修复。

**[#10908 [OPEN] 分支摘要触及 token 上限：Opus/Sonnet 5.5 上省略推理回退到 effort "high"](https://github.com/earendil-works/pi/issues/10908)**（评论 2）
Haiku 4.5 可用但 5.5 不可用，`/tree -> summarize` 报 “generation hit the token cap and the summary is incomplete”。体现**新模型与既有摘要策略的不兼容**。

其他值得留意的：**[#10720](https://github.com/earendil-works/pi/issues/10720)**（Kimi Code 未走 OpenAI Chat Completions、缺原生工具加载）、**[#10879](https://github.com/earendil-works/pi/issues/10879)**（代理返回 HTTP 413 时 `isContextOverflow` 漏判）、**[#10885](https://github.com/earendil-works/pi/issues/10885)**（llama.cpp “Context size has been exceeded.” 未触发自动压缩）、**[#10613](https://github.com/earendil-works/pi/issues/10613)**（MCP `oauth.clientId` 不做 `${ENV}` 展开，而 clientSecret 会）。

---

## 4. 重要 PR 进展（10 条）

**[#10902 [CLOSED] fix(ai): 为 Gemini 4 模型使用 thinking levels](https://github.com/earendil-works/pi/pull/10902)** 与 **[#10899 [CLOSED] fix(ai): 对 Gemini 4 使用 thinkingLevel 线格式](https://github.com/earendil-works/pi/pull/10899)**（Fixes #10898）
扩展 `usesGoogleThinkingLevel()` 匹配 `gemini-4*`。这是对 #10890 p0 问题的直接修复。

**[#10930 [CLOSED] feat(ai): 在 OpenAI GPT-6 上切换 thinking level 时保留 prompt cache](https://github.com/earendil-works/pi/pull/10930)**
使用 API key 时，GPT-6 保持 `reasoning.effort` 固定，把 thinking level 作为 `configuration_update` 输入项发送，使先前条目在每次请求中可原样重建——**直接影响成本与延迟**。

**[#10945 [CLOSED] feat(coding-agent): 新增工具调用分组以隐藏/压缩多次调用](https://github.com/earendil-works/pi/pull/10945)**
类似 Codex，`ctrl+o` 在三种模式间切换（分组折叠等），面向结果导向、沙箱化的工作流。

**[#10938 [CLOSED] fix(coding-agent): 规范化 read 行区间标签](https://github.com/earendil-works/pi/pull/10938)**
处理数值字符串与 null 参数，并在 TUI、会话树、示例间共享格式化逻辑——正是 #9887 那类问题的收敛方向。

**[#10913 [CLOSED] fix(coding-agent): 通过统一的 provider 选择策略解析模型引用**（Fixes #10160）
修复 `--model provider/id` 在多个网关暴露同名 raw id 时按目录顺序选第一个、忽略凭据的问题。

**[#10944 [OPEN] fix(ai): 上报格式错误的最终工具调用参数，而非保留已解析前缀](https://github.com/earendil-works/pi/pull/10944)**
此前流式解析在 JSON 无效时只保留错误前的字段并照常执行工具；现在对已完成调用严格解析，失败则报错。**对工具调用安全性意义重大**。

**[#10918 [CLOSED] fix(coding-agent): 在 skill 忽略规则中保留行首 `/` 锚定](https://github.com/earendil-works/pi/pull/10918)**
修复扫描根目录时剥离前导 `/`，导致 `/*`、`!/commit-summarizer/` 类 gitignore 规则失效的问题。

**[#10934 [OPEN] fix(tui): 让裸 URL 在 CJK 标点处终止](https://github.com/earendil-works/pi/pull/10934)**（Fixes #10933）
修复中日韩标点被吞进 URL 的渲染问题，附带回归测试。

**[#10937 [OPEN] feat(durable): 支持带命名空间的 SQLite 存储](https://github.com/earendil-works/pi/pull/10937)**
为表与索引添加可选前缀，通过 `SqliteStorage.open()` 与 Cloudflare Durable Object helper 暴露。

**[#10914 [OPEN] docs: 将文档移至仓库根目录](https://github.com/earendil-works/pi/pull/10914)**
文档已覆盖 pi-ai、pi-durable 等，从 `packages/coding-agent/docs` 迁移到根 `docs/`。

其他：**[#10943](https://github.com/earendil-works/pi/pull/10943)**（Ant Ling 升级到 Ling 3.0/Ring 3.0 并对齐 DeepSeek 兼容层）、**[#10910](https://github.com/earendil-works/pi/pull/10910)** / **[#10906](https://github.com/earendil-works/pi/pull/10906)**（NVIDIA 默认模型切到 Nemotron 3.5 Super VL）、**[#10528](https://github.com/earendil-works/pi/pull/10528)**（Nix 打包重构）、**[#10909](https://github.com/earendil-works/pi/issues/10909)**（刷新固定版本的 provider SDK 与 TypeBox）。

---

## 5. 功能需求趋势

- **新一代模型快速适配**：Gemini 4（thinking level 线格式）、GPT-6（保留 prompt cache 的 thinking level 切换）、Claude Opus/Sonnet/Haiku 5.5（摘要 token 上限、无法关闭 thinking）、MiniMax-M3.1-Flash-Preview（目录缺失）、Ant Ling 3.0、NVIDIA Nemotron 3.5。目录与兼容层更新是持续高频工作。
- **上下文窗口与压缩的正确性**：272K/500K 窗口不一致、HTTP 413、llama.cpp 溢出文本未被识别，都指向同一诉求——**溢出检测与自动压缩需要覆盖更多真实失败信号**。
- **多 provider / 网关下的模型解析**：`--model provider/id` 的凭据感知选择、Kimi Code 与官方 CLI 的行为对齐。
- **嵌入式与服务端部署**：长生命周期会话内存、RPC 事件语义（session_start 重复）。
- **终端集成与 TUI 细节**：tmux 下 OSC 52 复制、硬件光标列计算、CJK 标点 URL 截断、工具调用分组显示。

---

## 6. 开发者关注点

1. **静默的正确性错误最危险**：空引号参数导致位置参数左移（#10867）、工具调用 JSON 无效却用前缀继续执行（#10944）、复制实际失败却提示成功（#10628）——这类“看起来成功”的行为是社区反复强调的痛点。
2. **配置与密钥展开的一致性问题**：MCP 中 `oauth.clientId` 不展开 `${ENV}` 而 `clientSecret` 展开（#10613）。
3. **模型输出的类型宽容度**：`read` 工具收到字符串 offset/limit 时的渲染崩溃（#9887、#10938）说明工具层需要更强的规范化。
4. **自定义扩展与会话状态的竞态**：`triggerTurn: true` 的自定义消息可在提交 prompt 仍处于准备阶段时启动运行（#10924）。
5. **打包与构建可靠性**：Nix `v1.2.0` tag 在 `installCheckPhase` 报 `Cannot find module 'esbuild'`（#10881），与正在进行的 Nix 重构（#10528）呼应。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-14）

## 今日速览

Managed Agent（托管代理）架构继续主导社区动态：Stage G 权威会话历史、D7 `java_durable` 准入配置被拆分为三个子切片推进，同时 SDK Java 主分支 CI 密集修复。社区侧，Claude 插件变量替换 Bug 在报告当天即被提交 PR 修复，Web Shell 移动端与终端 UI 问题成为新的反馈焦点。

## 版本发布

**v0.25.2-preview.0** 与 **v0.25.1-nightly.20261013.6212189f1f** 两个版本于过去 24 小时内发布，变更内容基本一致：修复 managed-agent 的 connector 与 broker 稳健性问题（源自 #12692 R2 review，PR #13330，作者 @wenshao），并引入 managed-agent H4e-b2 相关特性（发布说明中内容被截断）。

- PR #13330: https://github.com/QwenLM/qwen-code/pull/13330

## 社区热点 Issues

1. **#12380 Managed Agent 双路径架构与分阶段交付提案**（OPEN，60 条评论）
   定义保留现有 TypeScript agent loop、将模型推理与工具环境供给解耦的分阶段架构，是整个 managed-agent 路线图的顶层设计文档，也是今日绝大多数 Issue 的引用源头。评论数远超其他议题。
   https://github.com/QwenLM/qwen-code/issues/12380

2. **#12952 Stage G 权威会话历史、写入者隔离与接管**（OPEN，10 条评论）
   作为 #12380 的 Stage G 追踪器，目标是在移除 owner affinity 之前证明写入者隔离与接管能力，涉及会话所有权这一核心机制的可靠性。
   https://github.com/QwenLM/qwen-code/issues/12952

3. **#13847 Harness 在无 Runtime 工作的批次中崩溃会阻塞 lead Session**（CLOSED，8 条评论）
   仅有后台 Agent 启动或 team 调用的 Hosted Turn 不会提交任何"批次进行中"的持久记录，Harness 崩溃后 lead Session 被阻塞。该问题已关闭，对应修复 PR #14160 已提交。
   https://github.com/QwenLM/qwen-code/issues/13847

4. **#14182 Claude 插件 `${CLAUDE_PLUGIN_ROOT}` 仅在含 hooks 目录时被替换**（OPEN，7 条评论）
   指出 `performVariableReplacement` 只在插件存在 `hooks/` 时才运行，与 Claude Code 行为不符。报告当天即出现两个修复 PR（#14193、#14194），响应速度突出。
   https://github.com/QwenLM/qwen-code/issues/14182

5. **#13279 外部 supervisor 体验：从另一 agent runtime 驱动 qwen serve**（OPEN，6 条评论）
   用户以外部 agent runtime 将 `qwen serve` 作为长期自主任务的编码后端，提供了实地笔记与 recipe 方案，反映了非 IDE 集成场景的真实需求。
   https://github.com/QwenLM/qwen-code/issues/13279

6. **#14157 发布实验性 Hosted Java 参考发行版**（OPEN，5 条评论）
   提议为 `qwen-managed-agent-server` 及其内嵌 broker 提供独立于 npm CLI 的参考发行版，从受保护的 `main` 分支发布，是平台分发方向的关键提案。
   https://github.com/QwenLM/qwen-code/issues/14157

7. **#14054 Stage F 故障门 FG8-FG10 测试**（OPEN，5 条评论）
   针对 FG7 之后新启用能力补充多进程故障门测试，Stage F 退出条件按能力逐项书写，是质量保障层面的推进。
   https://github.com/QwenLM/qwen-code/issues/14054

8. **#13746 H4f 公开任务取消与子任务事件流**（OPEN，5 条评论）
   Stage H4 交付地图中的切片，涵盖公开任务取消以及子任务的 task-event 与 output-cursor 流，与 Stage H5 共享。
   https://github.com/QwenLM/qwen-code/issues/13746

9. **#14184 Web Shell 添加工作区对话框在手机视口不可用**（OPEN，4 条评论）
   iPhone Safari（约 393 CSS px 宽）下文件夹浏览器被压缩成一行、操作按钮位于折叠线以下，是移动端可用性的直接阻塞问题。
   https://github.com/QwenLM/qwen-code/issues/14184

10. **#13387 自定义命令将 `@{...}` 文件内容误解析为模板语法**（OPEN，4 条评论）
    当 `@{file}` 与 `{{args}}` 或 `!{...}` 组合使用时，被引用文件内容会被二次解析为命令模板语法，导致字面量被错误替换。已在等待人工处理。
    https://github.com/QwenLM/qwen-code/issues/13387

## 重要 PR 进展

1. **#14193 / #14194 修复 `${CLAUDE_PLUGIN_ROOT}` 替换**（CLOSED / OPEN）
   两个 PR 均针对 #14182，将 markdown 中的插件根路径替换改为每次 Claude/Qoder 来源安装时执行，不再依赖 `hooks/` 目录是否存在。
   https://github.com/QwenLM/qwen-code/pull/14193 ｜ https://github.com/QwenLM/qwen-code/pull/14194

2. **#14177 修复 MariaDB lane 的 schema 初始化与恢复 IT**（OPEN）
   使 `Runtime Broker and Managed Agent MariaDB / Java 21` 分支在 #13996 之后重新通过 schema 初始化，一次性修复四个层叠隐藏的问题。
   https://github.com/QwenLM/qwen-code/pull/14177

3. **#14160 将 team_plan_approval 纳入 journal-only 中断轮次结算**（OPEN）
   修复 #13847 的同族遗留问题：计划审批工具此前仍走旧的终态拒绝路径，现改为由 takeover 结算。
   https://github.com/QwenLM/qwen-code/pull/14160

4. **#14172 Linux 下 Ctrl+V 粘贴剪贴板文本**（OPEN）
   此前 TUI 中唯一的剪贴板读取路径是图像，导致文本或链接无法粘贴；现在剪贴板无图像时读取文本内容。
   https://github.com/QwenLM/qwen-code/pull/14172

5. **#14140 接受 RFC 1918/3927 之外的显式 Local Control 地址**（OPEN）
   将显式传入的 `--local-control-address` 视为运维意图，接受主机实际拥有的任意非内部、非回环 IPv4 地址。
   https://github.com/QwenLM/qwen-code/pull/14140

6. **#14178 修复 Java 积压与 schema/Hosted 测试失败**（OPEN）
   按分支串行化 SDK Java push，保留活跃 main/release 运行并取消被取代的 PR 运行；同时兼容 MariaDB 对裸 SQL 布尔值的数值表示。
   https://github.com/QwenLM/qwen-code/pull/14178

7. **#14083 让 `--disable-mcp-server` 排除项在重载后保持有效**（OPEN）
   修复 settings 热重载与 ACP `workspaceMcpReload` 路径仅从 settings 重建 MCP 排除集导致标志失效的问题。
   https://github.com/QwenLM/qwen-code/pull/14083

8. **#13969 为本地会话添加 FileChanged 通知钩子**（OPEN）
   为本地非托管会话新增通用 `FileChanged` hook，集成方可监视 cwd 文件名或注册绝对路径与递归目录。
   https://github.com/QwenLM/qwen-code/pull/13969

9. **#14117 将 LSP 诊断归属到显式扩展名所有者**（OPEN）
   将显式扩展名映射视为诊断归属证据，覆盖内置表之外的扩展名；未知 server-name 声明保持保守而非被猜测为文件扩展名。
   https://github.com/QwenLM/qwen-code/pull/14117

10. **#14186 采用 qwen-code-checks.xml 并修复全部 Checkstyle 违规**（OPEN）
    基于 alibaba/fastjson2 约定引入专用 Checkstyle 配置，修复 `src/main/java` 与 `src/test/java` 中全部 869 处违规。
    https://github.com/QwenLM/qwen-code/pull/14186

## 功能需求趋势

- **Managed Agent 架构体系化推进**：今日 Issue 高度集中于 #12380 的 Stage D7、F、G、H4 等分阶段交付，包括 `java_durable` 准入配置（#14122 及其 D7-1/D7-2/D7-3 子切片 #14168、#14166、#14167）、权威会话历史（#12952）、故障门测试（#14054）与任务取消流（#13746）。会话管理（session-management）与多代理（multi-agent）是出现频率最高的路线图标签。
- **平台分发与独立发行版**：#14157 提出独立于 npm CLI 的 Hosted Java 参考发行版，配合 roadmap/platform-distribution 标签，显示社区对非 Node 运行时的部署路径有明确诉求。
- **IDE 之外的集成场景**：#13279 展示以外部 agent runtime 驱动 `qwen serve` 的实际用法，属于文档与集成方向需求。
- **插件生态兼容性**：Claude 插件变量替换（#14182/#14193/#14194）与 LSP 诊断归属（#14117）反映对扩展生态行为一致性的关注。

## 开发者关注点

- **CI 稳定性成为高频痛点**：今日出现多条主分支 CI 失败追踪 Issue（#14125 SDK Java、#14126 `ManagedAgentServerIntegrationTest.retractionRenamesTheDeltaThatContinuedTheRetractedOne`、#14146 Hosted admission gates 因 409 `workspace_unavailable` 失败），并催生 #14177、#14178 等修复 PR。
- **构建与依赖问题**：#14110 报告 `packages/cli` 使用了 pinned `ink@7.0.3` 未导出的 API，`pnpm build` 产生 51 个 TypeScript 错误（该 Issue 已关闭并标记 need-information）。
- **UI/UX 细节反馈密集**：Web Shell 移动端对话框不可用（#14184）、slash 命令提交后丢失高亮（#14161）、终端 VP 模式短内容对齐问题（#9305）、一次性 system reminder 回显到用户消息（#11562）。
- **文本处理边界条件**：未闭合的 `<system-reminder>` 标签会静默截断用户消息剩余内容（#12961），属核心层解析逻辑的隐患。
- **运行时配置持久性**：`--disable-mcp-server` 在重载后失效（#14083）、CDP 重连退避未跨 MV3 service worker 重启保留（#14022），反映配置与状态在重载/重启场景下的可靠性问题。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-14）

> 数据来源：github.com/Hmbown/DeepSeek-TUI

## 1. 今日速览

今日无新版本发布，社区焦点集中在 v0.10.2 补丁版的发布收尾上。维护者 Hmbown 在 Issue #6094 与 PR #6968 中确认截至 2026-10-14 UTC 已有 **13 个贡献者 PR 合并**，并保留了原作者与源分支。同时，Windows 平台问题密集浮现：`/undo` 命令、TUI 长时间运行卡顿、`cargo install` 版本锁定失败等问题均有新增或更新。

## 2. 版本发布

过去 24 小时内无新 Release。

作为参考，Issue #6094 与 PR #6968 显示 v0.10.2 候选版本的 intake 仍在进行中；Issue #6910 记录了 v0.10.1 因 crates.io 10 MiB tarball 上限（HTTP 413）导致 tui/cli 卡住的打包阻塞问题。

## 3. 社区热点 Issues

1. **[#6094] Start here: what the next patch release covers, and how to help**（v0.10.2 tracking）
   维护者发布的补丁版入口帖，明确 13 个贡献者 PR 已按独立 PR 合并并保留原作者。是了解 0.10.2 范围与参与方式的权威入口。
   https://github.com/codewhale-hq/Codewhale/issues/6094

2. **[#5316] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**
   长期跟踪的 TUI crate 拆分总纲，33 条评论为今日更新 Issue 中最多。摘要提到 FEAT-027 已实现（草案 PR #6832），为 `/permissions`、`/sta...` 等命令引入共享 command Shapes。属于架构级重构主线。
   https://github.com/codewhale-hq/Codewhale/issues/5316

3. **[#6652] 长时间运行后 TUI 滚动卡顿（"like jelly"）**
   Windows 平台性能问题：内容部分已滚动、部分未滚动的撕裂感。11 条评论，说明复现门槛低但影响体验，是 TUI 渲染性能的核心反馈。
   https://github.com/codewhale-hq/Codewhale/issues/6652

4. **[#6910] Release: 在首次上传前守住 crates.io 10 MiB tarball 上限**
   带 `release-blocker` 与 `packaging` 标签，直接关系发布能否成功。0.10.2 候选更新称全部 **29** 个 workspace crate 的严格无上传预检已通过。
   https://github.com/codewhale-hq/Codewhale/issues/6910

5. **[#6970] `/undo` 命令的严重 bug（Windows）**
   执行 `/undo` 时 TUI 提示文件改动已回退，但对话状态不一致。属于数据一致性类高风险缺陷，已打 `needs-triage`。
   https://github.com/codewhale-hq/Codewhale/issues/6970

6. **[#6972] DeepSeek key 保存后被读回为缺失（root 与 `[providers.deepseek]` auth_mode 标记不匹配）**
   当 DeepSeek 不是当前活动 provider 时，重启后仍报凭据缺失。涉及配置层级与 auth_mode marker 的根因错配，与 PR #6974 直接对应。
   https://github.com/codewhale-hq/Codewhale/issues/6972

7. **[#6976] `cargo install codewhale-cli --locked --force` 始终安装 0.10.0**
   尽管命令指向更新，实际反复装回 0.10.0。影响升级路径，属于安装/分发体验的典型痛点。
   https://github.com/codewhale-hq/Codewhale/issues/6976

8. **[#6652 同类关注] Windows 平台问题集中**
   今日更新中 #6652、#6970、#6976 均带 `windows` 标签，反映 Windows 是当前缺陷高发平台，值得优先排查。
   https://github.com/codewhale-hq/Codewhale/issues/6652

9. **[#6970 / #6972] 两个 `needs-triage` 新 bug**
   同日内新增两条待分类缺陷，均涉及状态/凭据一致性，说明近期改动可能引入回归，需要快速分诊。
   https://github.com/codewhale-hq/Codewhale/issues/6970

10. **[#5316 / #6094] 架构与发布主线**
    两者分别是重构总纲与发布跟踪，评论与点赞最集中，是判断项目节奏的关键信号。
    https://github.com/codewhale-hq/Codewhale/issues/5316

## 4. 重要 PR 进展

1. **#6968 [OPEN] 0.10.2 candidate: endpoint-scoped catalog, tiered pricing and release verification**
   0.10.2 候选主 PR，涵盖 endpoint 级 catalog、分层定价与发布验证，并同步 13 个贡献者 PR 的合并状态。
   https://github.com/codewhale-hq/Codewhale/pull/6968

2. **#6973 [OPEN] refactor(commands): config 命令组采用可移植 Shapes（FEAT-028）**
   行为保持型大型重构，移除 `config` Slash Command Group 对具体 `App`/TUI 的依赖，改为 Shapes 连接。属 EPIC-005 拆分主线。
   https://github.com/codewhale-hq/Codewhale/pull/6973

3. **#6965 [OPEN] 0.10.2 slices: fail-closed tier pricing (#6396)、build-lock bypass 修复、Windows owner recovery (#6915)**
   承接已合并的 #6960，逐 slice 落地 0.10.2 决策；前两个 commit 已验证。
   https://github.com/codewhale-hq/Codewhale/pull/6965

4. **#6974 [CLOSED] fix(config): 在 DeepSeek root key 保存时写入 provider-table api-key marker**
   直接修复 Issue #6972 的根因：此前 `save_root_api_key_for_secret_slot` 只在 config root 写入 marker。
   https://github.com/codewhale-hq/Codewhale/pull/6974

5. **#6924 [CLOSED] feat(runtime): 每个 runtime store 一个控制端点，每个 workspace 一个 driver**
   为 Runtime API 实例提供 per-store Unix 控制 socket 与内核持有的 workspace lease，保留贡献者原始 commit 与测试。
   https://github.com/codewhale-hq/Codewhale/pull/6924

6. **#6959 [CLOSED] feat(api): 通过 Runtime API 读写 workspace 项目信任状态**
   让非 TUI 客户端（如作者正在开发的 VS Code 扩展）无需终端执行 `/trust on --save`。是 IDE 集成方向的重要铺垫。
   https://github.com/codewhale-hq/Codewhale/pull/6959

7. **#6977 [CLOSED] test(extension-host): 在默认 deadline 下 kill host**
   修复 `extension_host` 测试自 10-10 起在 windows-latest 上两次失败的问题（含一次 main）。
   https://github.com/codewhale-hq/Codewhale/pull/6977

8. **#6943 [CLOSED] chore(tui): 移除五个模块的全局 `#![allow(dead_code)]`**
   属 #5587 的一个切片，借 `cargo check -p codewhale-tui --all-targets` 暴露各模块真实死代码，提升代码健康度。
   https://github.com/codewhale-hq/Codewhale/pull/6943

9. **#6975 / #6958 / #6956 / #6966 [CLOSED] 系列测试稳定性修复**
   包括：15 个 loopback fixture 免受环境代理影响（#6975）；session picker 搜索不再依赖临时目录名（#6958）；worktree 移除时 git 失败不算测试失败（#6956）；三个审批等待上限放宽至 30s（#6966）。CI 稳定性是今日 PR 的隐性主线。
   https://github.com/codewhale-hq/Codewhale/pull/6975

10. **#6393 [OPEN] feat: source navigation echoes 与受保护的 fork-prefix 继承**
    保留 @AdityaVG13 的无索引源码导航 echo、有界工具输出与 fork-prefix 实验，并适配当前 Engine 与权限模型。
    https://github.com/codewhale-hq/Codewhale/pull/6393

## 5. 功能需求趋势

- **IDE / 非 TUI 客户端集成**：PR #6959 明确以"非 TUI 客户端（VS Code 扩展）"为动机，项目的 Runtime API 正被抽象为可被外部编辑器调用的接口，这是最清晰的新方向。
- **TUI 架构模块化**：EPIC-005（#5316）与 FEAT-028（#6973）持续推进 crate 拆分与命令 Shapes 化，目标是降低命令与 `App`/TUI 的耦合。
- **性能与渲染体验**：Issue #6652 反映长时间运行后的滚动卡顿（jelly/撕裂），是 TUI 性能类需求的主要缺口。
- **发布与分发可靠性**：Issue #6910（tarball 上限）、#6976（cargo install 固定旧版）显示打包与安装链路的稳定性已成为反复出现的方向。
- **Runtime API 能力扩展**：PR #6924（控制端点/workspace lease）与 #6959（项目信任读写）体现引擎能力正从 TUI 内部向 API 层外溢。

## 6. 开发者关注点

- **Windows 是当前缺陷重灾区**：今日更新的 7 条 Issue 中，`windows` 标签出现于 #6652、#6970、#6976；测试侧也集中在 windows-latest 失败（#6977、#6966）。建议优先补齐 Windows 测试与性能排查。
- **状态与凭据一致性是高频痛点**：#6972 的 auth_mode marker 错配、#6970 的 `/undo` 提示与对话状态不一致，同属"界面提示与实际状态不符"，会直接削弱用户对回退与凭据保存的信任。
- **升级路径体验差**：#6976 中 `cargo install --locked --force` 反复装回 0.10.0，可能让用户长期停留在旧版本。
- **发布前的回归防线需要加固**：Issue #6910 作为 `release-blocker` 仍在跟踪 tarball 上限；0.10.1 已因 HTTP 413 卡住 tui/cli，发布链路的前置校验是关键。
- **CI 稳定性消耗贡献者精力**：多条 `contribution-gate` 测试修复（#6956、#6958、#6966、#6975、#6977）显示"偶发失败"问题较为分散，涉及 subagent、sessions、extension-host、tui 多个模块。

---

*注：以上内容均严格基于所提供 GitHub 数据；评论数、点赞数等以原始数据为准，未标注的数据不作推断。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*