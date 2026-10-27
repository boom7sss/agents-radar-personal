# AI CLI 工具社区动态日报 2026-08-05

> 生成时间: 2026-08-05 03:12 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-05）

> 数据来源：各工具 GitHub 仓库 2026-08-05 社区日报，基于公开 Issues/PRs/Releases 统计，不代表官方路线图。

---

## 1. 生态全景

AI CLI 工具已从"模型聊天壳"全面进化为**工程化 agent 平台**，竞争焦点从模型能力转向稳定性、安全边界与生态集成。今日 9 款工具的动态呈现三条主线：**企业级诉求**（多账户、MCP 连接器、组织治理）集中爆发，**跨平台稳定性**（尤其 Windows）成为普遍短板，**安全漏洞**进入高频修复期（Gemini 双漏洞修复、Claude Code 权限绕过修复同日出现）。同时，Kimi、Qwen、DeepSeek TUI 等新兴工具正通过 **ACP 协议**押注 IDE/外部客户端集成，试图以协议层突破头部壁垒。整体判断：短期看稳定性，中期看生态，长期看 agent 可观测性与可治理能力。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues | 重要 PR | Release | 社区最强信号 |
|------|------------|---------|---------|-------------|
| **Claude Code** | 10 | 10 | v2.1.222（安全修复） | #27302 多 Connector 账户，335 👍 / 226 评论 |
| **OpenAI Codex** | 10 | 10 | 4 个 rust-v0.147.0-alpha | #11023 Linux 桌面支持，917 👍 / 199 评论 |
| **Gemini CLI** | 10 | 10 | 无（24h 内 26 PR/50 Issue） | 安全双修复（SSRF + 变量展开绕过） |
| **Copilot CLI** | 10 | 2 | v1.0.79-1（破坏性配置变更） | #1697 会话分叉，25 👍 |
| **Kimi Code CLI** | 6 | 3 | 无 | #2586 高上下文（500K tokens）指令漂移 |
| **OpenCode** | 10 | 10 | v1.18.13（RTL/PR 修复） | #27593 计费 402 错误，13 👍 |
| **Pi (pi-mono)** | 10 | 10 | 无 | #6768 企业 Copilot Compaction 失败，18 👍 |
| **Qwen Code** | 10 | 10 | 2 个 pre-release | #8102 确定性工具执行边界（17 评论） |
| **DeepSeek TUI** | 10 | 10 | 无（v0.9.4 train 领先 main 77 commits） | #5249 编译性能 Epic（6 个相关 Issue） |

**解读**：Claude Code 与 Codex 社区规模断层领先；Gemini CLI 短期 PR 密度最高；Copilot CLI 虽弱但版本稳定；Kimi 与 DeepSeek TUI 体量最小但技术方向明确。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 典型诉求 |
|------|---------|---------|
| **Windows/跨平台稳定性** | Claude Code（GPU 崩溃、MSIX 更新失败）、Codex（WMI 轮询卡顿）、Copilot（WSL2 按键错乱）、Kimi（IME 字符重复）、Pi（专项征集帖）、OpenCode（WSL 渲染） | 桌面端崩溃、更新死锁、终端兼容，是当前最集中的体验痛点 |
| **长会话与上下文可靠性** | Kimi（500K tokens 指令漂移）、Pi（Compaction 企业版失败）、Qwen（微压缩致缓存失效）、Claude Code（内存泄漏 15GB）、OpenCode/Gemini（挂起/假死） | 挂起无超时、压缩失败、上下文静默降级，直接打击自动化信任度 |
| **安全与权限边界** | Gemini（SSRF、变量展开绕过）、Claude Code（worktree 破坏性 git、hook 绕过）、Qwen（密码泄露、确定性执行提案）、DeepSeek（沙箱禁用诉求）、Pi（依赖漏洞） | 安全机制需前置设计而非事后修补 |
| **MCP/连接器生态** | Claude Code（个人账户被拒）、Copilot（FastMCP 不兼容）、Qwen（SSE 无限挂起）、Gemini（配置透明化）、DeepSeek（Registry 优先） | 协议兼容性、超时边界、配置可见性是共性缺口 |
| **子代理可靠性** | Gemini（MAX_TURNS 误报 GOAL 成功）、OpenCode（subagent 无限挂起）、Claude Code（effort 配置被忽略）、DeepSeek（checkpoint 恢复） | 误报状态、配置失效、中断不可恢复 —— 多代理场景可信度不足 |
| **ACP/IDE 集成** | Kimi（模型列表/切换）、Qwen（JetBrains 任务列表）、DeepSeek（ACP 工具执行）、Codex（扩展 prompt 丢失） | 新兴工具以 ACP 为差异化跳板，但客户端能力与 CLI 不对等 |
| **多账户/多身份** | Claude Code（Connector 多账户，335 👍）、Copilot（组织 Agent）、DeepSeek（多 API Key 按 provider 保存） | 多身份工作流是企业用户的硬需求 |
| **本地/自托管模型** | Gemini（SGLang）、Copilot（BYOK）、Pi/OpenCode（provider 中立） | 敏感代码不出本地，私有化部署需求上升 |

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线与差异化优势 |
|------|---------|---------|---------------------|
| **Claude Code** | 企业级 agent 平台 | Anthropic 付费用户、插件开发者 | TS 生态，**插件/Hook 系统最成熟**，Connector 企业身份矩阵；今日 PR 批量修复插件开发工具链，护城河在生态 |
| **OpenAI Codex** | OpenAI 官方全栈 agent | ChatGPT Pro/Team 订阅者 | **Rust 核心运行时**，日更 alpha 迭代激进；劣势是 Linux 桌面缺席（917 👍 的缺口） |
| **Gemini CLI** | 安全优先的 Google 系 agent | GCP/Gemini 用户 | TS，安全响应最快（双漏洞同日修复），**本地模型支持（SGLang）**与 AST 感知工具为长期方向 |
| **Copilot CLI** | GitHub 企业治理入口 | GitHub Enterprise 组织用户 | TS/Node，优势在组织 Agent 与企业策略绑定；劣势是迭代慢（单日 2 PR）、MCP 兼容性滞后 |
| **Kimi Code CLI** | ACP 协议先行者 | Moonshot 生态、ACP 客户端（Zed/Happy Coder） | 以 **ACP 协议**对接外部 IDE/移动端；当前体量小，核心待解决 500K 上下文可靠性 |
| **OpenCode** | 多模型中立层 | 开源社区、多 provider 用户 | **统一 Anthropic/Gemini/OpenAI 工具调用语义**（3 PR 同日合入），跨模型兼容性是其技术标签 |
| **Pi (pi-mono)** | 可嵌入 agent 内核 | 自托管 / 企业 Copilot 用户 | **RPC/服务端架构**（get_argument_completions、server session backend），向"内核化"演进 |
| **Qwen Code** | 模型+IDE 深度集成 | Qwen 用户、JetBrains 开发者 | daemon 架构，**JetBrains ACP 集成 + 浏览器扩展/语音预研**，功能面铺得最宽 |
| **DeepSeek TUI** | 原生 TUI 可编程运行时 | Rust 技术栈 / API 驱动用户 | **Rust + Runtime API**（goal/verifier/memory 端点），MCP Registry 优先策略；0.x 阶段，编译性能为头号工程 |

**总结**：头部拼生态与企业治理，中游拼多模型兼容与安全，新兴工具拼协议卡位与垂直场景。

## 5. 社区热度与成熟度

**Tier 1 — 成熟头部（社区规模大，生态完整）**
- **Claude Code**：今日 top issue 达 335 👍 / 226 评论，插件开发工具链由第三方批量贡献 PR，生态参与者最多；但 Windows 崩溃/内存泄漏等老问题积压，成熟度与稳定性不匹配。
- **Copilot CLI**：发版克制、用户群稳定，但 PR 仅 2 条且 1 条为机器人自动 PR，功能推进速度偏慢，社区期待值下降。

**Tier 2 — 高速迭代（日更/周更，功能与修复并行）**
- **Codex**：社区热度最高（917 👍），但 4 个 alpha/日说明尚未稳定，属于"高关注度 + 未定稿"状态。
- **Gemini CLI**：24 小时 26 PR / 50 Issue，安全修复与核心稳定性（/compress、shell 挂起）双线推进，工程执行力强。
- **OpenCode**：补丁发版 + 跨模型语义规范化 PR 群，治理规范（RTL、CI、migration 安全）在同体量项目中领先。
- **Qwen Code**：preview/nightly 双通道，功能预研（omni、voice、浏览器扩展）积极，但 ACP/IDE 集成明显落后 Claude Code/Codex。

**Tier 3 — 早期追赶（体量小，方向清晰）**
- **Pi**：企业 Copilot 兼容问题集中暴露，说明已进入企业验证阶段但未完全跑通；新 provider 接入速度快（当天需求当天 PR）。
- **Kimi**：Issue/PR 数量最少，但 #1282 远程控制（24 👍）与 #1283 记忆系统构成清晰的"下一代工作流"叙事。
- **DeepSeek TUI**：v0.9.x 仍在 0.x 阶段，维护者与社区共同把编译性能列为下版 Epic，技术路线（Rust + Runtime API）在 9 款工具中最具极客色彩。

## 6. 值得关注的趋势信号

1. **安全左移：从"修漏洞"到"默认安全"**。Gemini SSRF/变量展开绕过、Claude Code worktree 权限绕过、Qwen 密码明文泄露同日出现，且均为"设计缺陷"而非"实现 bug"。对开发者的参考：使用 agent 时应默认最小权限（Hook 审批、沙箱、网络隔离），并关注工具的威胁模型文档。

2. **上下文工程是新的体验分水岭**。Kimi 的 500K tokens 漂移、Pi 的 Compaction 企业版失败、Claude Code Hook 输出超 10K 静默丢弃、Qwen 微压缩致 prompt cache 失效——四个独立信号指向同一结论：**长会话的压缩/摘要/缓存策略将直接决定工具在真实项目中的可用性与成本**。选型时应重点评估工具的上下文治理能力（可配置摘要模型、显式警告、恢复机制）。

3. **Agent 可观测性决定自动化信任度**。Gemini subagent 被中断却报 `GOAL` 成功、DeepSeek File edit 假成功、OpenCode 统一 finish reason 语义——"过程可审计"正在取代"结果正确"成为 agent 质量的核心指标。建议开发者在搭建自动化质量门禁时，优先选用提供 step 级事件、模型归属、工具耗时注入的工具。

4. **ACP 协议成为新兴工具的入场券**。Kimi（模型切换/权限模式）、Qwen（JetBrains 任务列表）、DeepSeek（ACP 工具执行）均以 ACP 为切入点对接 Zed、JetBrains 等外部客户端；而 Codex 的 IDE 扩展 prompt 丢失反衬出头部在扩展稳定性上的投入不足。协议兼容性将决定下一代工具能否嵌入开发者既有工作流。

5. **多模型/本地模型支持从"可选"变"必备"**。Gemini 支持 SGLang、Copilot BYOK、Pi/OpenCode 持续接入新 provider——企业敏感代码场景推动"模型供应商中立"成为选型硬指标。

6. **AI 工具自身资源效率被纳入选型**。Codex macOS 触发 syspolicyd/trustd 资源失控、Qwen daemon 内存边界跟踪、DeepSeek 编译时间 Epic、Claude Code 内存泄漏至 15GB——工具吃掉的内存/CPU/编译时间正在成为开发者体验的一部分，轻量高效的工具将获得口碑优势。

---

**给决策者的三点建议**：① Windows/WSL 团队在选型时必须做平台回归测试，当前 9 款无一例外存在 Windows 反馈；② 企业采购优先考察多账户/组织治理/MCP 企业适配能力，而非单纯模型效果；③ 关注上下文压缩策略与配额消耗透明度（如 Claude Code 图像错误仍计费、OpenCode 402 误判），避免"花钱买错误"。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills | 截止 2026-08-05

## 1. 热门 Skills 排行

### ① skill-creator 评估链路修复 — PR #1298
- **功能**：修复 `run_eval.py` 对所有 skill 描述一律报告 `recall=0%` 的核心缺陷，涵盖 Windows 管道读取、触发检测、并行 worker 及测试文件隔离；该问题直接影响 `run_loop.py` 和 `improve_description.py` 的优化信号。
- **社区讨论**：10+ 独立复现，Windows 环境不可用，是当前社区最集中的技术痛点。同主题修复还有 #1099、#1050、#1323、#1261、#539。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/1298

### ② self-audit — 输出质量门 — PR #1367
- **功能**：先做机械文件验证（确认所有交付文件存在），再按损害严重度执行四维推理审计；声称与项目、技术栈、模型无关。
- **社区讨论**：社区对“让 Claude 在交付前自审”的需求上升，配套提案 Issue #1385，已迭代至 v1.3.0。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/1367

### ③ document-typography — 文档排版控制 — PR #514
- **功能**：解决 AI 生成文档中的孤词换行、段落悬空（标题落在页尾）、编号错位等排版问题。
- **社区讨论**：几乎每份 AI 生成文档都有排版瑕疵，但用户很少主动要求修复——属于“隐性质量”高价值技能。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/514

### ④ skill-quality-analyzer + skill-security-analyzer — PR #83
- **功能**：两个元技能，一个对 SKILL.md 做五维质量评分，一个做安全审查。
- **社区讨论**：与最高热度 Issue #492（命名空间信任边界）直接呼应，社区开始关注“如何审查一个技能”。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/83

### ⑤ testing-patterns — 全栈测试技能 — PR #723
- **功能**：Testing Trophy 模型 + 单元测试 + React 组件测试 + E2E，覆盖“什么该测、什么不该测”。
- **社区讨论**：测试是开发者最熟悉的高频场景，社区期待 Claude 按项目生成完整测试策略。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/723

### ⑥ pyxel — 复古游戏开发 — PR #525
- **功能**：基于 pyxel-mcp 的 8-bit/像素游戏工作流：编写 → 运行捕获 → 检查 → 迭代。
- **社区讨论**：由 pyxel/pyxel-mcp 作者 kitao 提交，代表了“Agent + 游戏引擎 + 可视化反馈”的新方向。
- **状态**：Open，持续更新至 2026-07-15
- **链接**：https://github.com/anthropics/skills/pull/525

### ⑦ color-expert — 色彩专业技能 — PR #1302
- **功能**：覆盖 ISCC-NBS、Munsell、RAL 等命名系统，以及 OKLCH/OKLAB/CAM16 的“何时用哪个”决策表。
- **社区讨论**：设计场景需要严谨的色彩科学支撑；作者为 ColorAide 维护者，专业度被社区认可。
- **状态**：Open，更新至 2026-07-21
- **链接**：https://github.com/anthropics/skills/pull/1302

### ⑧ plan-file-hygiene — 规划产物生命周期 — PR #1479
- **功能**：解决规划文件（plan 产物）无限堆积问题，提供清理、过期策略与生命周期管理。
- **社区讨论**：由 Issue #1417 引出，“planning artifacts accumulate with no lifecycle”这一表述获得广泛共鸣。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/1479

## 2. 社区需求趋势

### 安全与信任边界（最热 Issue，43 条评论）
- **#492**：社区维护的技能被放到 `anthropic/` 命名空间下分发，用户可能误以为官方背书并授予过高权限。期待官方建立分级标识或独立命名空间。
- 链接：https://github.com/anthropics/skills/issues/492

### 组织级共享与协作
- **#228**：当前技能只能手动下载/上传，无法在组织内直接共享；社区需要共享库或分享链接能力。
- 链接：https://github.com/anthropics/skills/issues/228

### 上下文窗口与记忆优化
- **#1487**：`claude-api` 技能单次注入约 156k tokens，直接挤爆上下文窗口——技能需要更严格的资源边界。
- **#1329**：compact-memory 提案，用符号化笔记压缩长任务 agent 的持久记忆，减少散文式记忆对上下文的消耗。
- 链接：https://github.com/anthropics/skills/issues/1487 · https://github.com/anthropics/skills/issues/1329

### 与 MCP 生态互通
- **#16**：希望把 Skill 的能力边界标准化并暴露为 MCP，借助同一协议打包、分发 AI 软件。
- 链接：https://github.com/anthropics/skills/issues/16

## 3. 高潜力待合并 Skills

基于更新活跃度与讨论热度，以下 PR 有较高近期落地概率：

1. **plan-file-hygiene（#1479）** — 7/25 创建、7/27 仍在更新，回应高频 Issue #1417，生命周期问题的社区呼声明确。
   https://github.com/anthropics/skills/pull/1479

2. **color-expert（#1302）** — 7/21 仍在迭代，专业作者背书，属于设计/前端类刚需。
   https://github.com/anthropics/skills/pull/1302

3. **pyxel（#525）** — 7/15 更新，库作者亲笔维护，交互闭环清晰，生态位独特。
   https://github.com/anthropics/skills/pull/525

4. **self-audit（#1367）** — 已迭代至 v1.3.0 并配套 Issue #1385，属于治理/质量门主题的领军者。
   https://github.com/anthropics/skills/pull/1367

5. **skill-creator 隔离修复（#1261）** — 针对临时命令文件污染用户实时项目的补救，7/8 仍活跃，是工具链可靠性拼图的一部分。
   https://github.com/anthropics/skills/pull/1261

## 4. Skills 生态洞察

> **社区当前最集中的诉求不是“更多新技能”，而是把技能开发基础设施做可靠——修复 `run_eval.py` 的评估失真，解决 `anthropic/` 命名空间下的信任边界问题——地基补齐后，新技能才会大量落地。**

---

# Claude Code 社区动态日报 — 2026-08-05

## 1. 今日速览

- 发布 **v2.1.222**，重点修复 worktree 隔离会话可执行破坏性 git 命令的安全漏洞，以及 PreToolUse 自动允许钩子绕过工具限制的问题。
- 社区最热议题仍是 **多 Connector 账户支持**（#27302，335 👍 / 226 条评论），讨论热度持续高位。
- 今日新涌现一批 **Windows Desktop GPU 进程崩溃与更新失败** 的集中反馈，成为最新高优信号。

---

## 2. 版本发布

### v2.1.222

- **修复**：worktree 隔离会话及其子代理此前可对主 checkout 运行破坏性 git 命令；现在隔离策略覆盖所有会话类型下的文件编辑与 Bash 操作。
- **修复**：PreToolUse auto-allow 钩子在后台代理任务中可绕过工具限制，现已修复。

🔗 [Release v2.1.222](https://github.com/anthropics/claude-code/releases/tag/v2.1.222)

---

## 3. 社区热点 Issues（Top 10）

### 🔥 最热：多 Connector 账户支持
**[#27302] [enhancement] 在 Claude 与 Claude Code Web 中支持同一连接器的多账户**  
作者：nathanmargaglio · 更新：08-05 · 💬 226 · 👍 335  
社区持续呼吁支持多个 Connector 账户同时配置（如多个 Google Drive / GitHub 账户），目前只能反复切换，影响多身份工作流。  
🔗 https://github.com/anthropics/claude-code/issues/27302

### 高影响：图像处理错误消耗 API 额度
**[#62466] [bug] 反复出现 "Image couldn't be processed" API 错误并消耗使用限额**  
作者：3ct0s · 更新：08-05 · 💬 30 · 👍 20  
大量用户反馈图片处理失败仍计入 usage，直接消耗付费额度，且问题持续数周未解决。  
🔗 https://github.com/anthropics/claude-code/issues/62466

### Windows 桌面版严重崩溃
**[#53247] [bug] Claude Desktop 在 Windows 上无法启动 — 崩溃后遗留孤儿 Silo/Job Object，需注销或重启才能恢复（HRESULT 0x80070020）**  
作者：rnpacheco25-sudo · 更新：08-05 · 💬 13 · 👍 11  
崩溃后系统资源被残留进程锁死，普通重试无法恢复，影响极其恶劣。  
🔗 https://github.com/anthropics/claude-code/issues/53247

### 安全隐私：启动即访问 git origin
**[#21108] [bug] Claude 在未执行任何命令时于启动阶段访问 git origin 服务器**  
作者：robotrapta · 更新：08-05 · 💬 13 · 👍 15  
用户担心 IDE/CLI 启动即触发网络请求，涉及隐私与离线使用场景。  
🔗 https://github.com/anthropics/claude-code/issues/21108

### MSIX 浏览器窗格 GPU 崩溃
**[#81275] [bug] Claude Desktop MSIX 1.24012.9：打开应用内 Browser 窗格即崩溃，GPU 进程固定退出码 101457950**  
作者：oleksiiskrypka · 更新：08-05 · 💬 11  
Intel / NVIDIA / WARP 软件渲染下均复现，Cowork 浏览器预览功能不可用。  
🔗 https://github.com/anthropics/claude-code/issues/81275

### 内存泄漏导致卡死
**[#21378] [bug] 🚨 严重：20+ 分钟后内存泄漏至 15GB 导致进程冻结**  
作者：wilhelmsson424-jpg · 更新：08-05 · 💬 8 · 👍 12  
WSL2/Linux 环境长会话内存持续增长，最终整机卡死，已持续数月未关闭。  
🔗 https://github.com/anthropics/claude-code/issues/21378

### MCP 连接器拒绝个人账户
**[#53408] [bug] claude.ai Microsoft 365 连接器无法认证个人账户（Hotmail/Outlook/Live）**  
作者：sandy9214 · 更新：08-05 · 💬 7 · 👍 19  
OAuth 流程被 Microsoft 官方拦截，仅工作/学校账户可用，个人用户被排除。  
🔗 https://github.com/anthropics/claude-code/issues/53408

### PDF 误报密码保护
**[#66563] [bug] Read 工具将未加密的 pandoc/LaTeX PDF 误报为 "password-protected"**  
作者：IxI-Enki · 更新：08-05 · 💬 6  
文件实际无任何加密字典，Read 工具仍拒绝读取，影响文档解析类工作流。  
🔗 https://github.com/anthropics/claude-code/issues/66563

### 子代理 effort 配置被忽略
**[#64706] [bug] Agent 工具忽略子代理 .md 中的 `effort:` frontmatter，继承全局 effortLevel**  
作者：antrom99 · 更新：08-05 · 💬 5 · 👍 5  
多个子代理无法独立控制推理强度，自动化流程的质量/成本调节失效。  
🔗 https://github.com/anthropics/claude-code/issues/64706

### Windows MSIX 更新程序反复失败（今日新增）
**[#84005] [bug] Windows MSIX 更新反复失败：CoworkVMService 锁定自身文件（0x80070020），PreserveApplicationData 被拒（0x80073CFA），陈旧重试竞争（0x80070002）**  
作者：XeonWood · 更新：08-05 · 💬 1  
自动更新链路存在多重文件锁与残留状态竞争，用户无法升级到新版。  
🔗 https://github.com/anthropics/claude-code/issues/84005

---

## 4. 重要 PR 进展（Top 10）

### 插件开发工具链修复（作者 RerankerGuo 今日批量提交）

**[#84004] fix(plugin-dev): 限制 frontmatter 解析范围**  
只解析开头的 YAML frontmatter 块；修复 Markdown 正文中的 `---` 水平线导致解析越界的问题。  
🔗 https://github.com/anthropics/claude-code/pull/84004

**[#84003] fix(scripts): 传播顶层失败状态**  
`.catch(console.error)` 会吞掉脚本失败并让进程以成功状态退出；改为向上传播失败，同时保留日志输出。  
🔗 https://github.com/anthropics/claude-code/pull/84003

**[#83999] fix(scripts): 校验 gh 标志值**  
修复 `gh issue list --limit` 这类缺少取值的标志被透传、绕过参数校验的问题。  
🔗 https://github.com/anthropics/claude-code/pull/83999

**[#83995] fix(scripts): 校验 label 选项值**  
`--add-label` / `--remove-label` 现在会校验是否有实际标签名，避免 `$2: unbound variable` 内部错误或误吞后续参数。  
🔗 https://github.com/anthropics/claude-code/pull/83995

**[#83993] fix(scripts): 拒绝自引用重复**  
阻止 `comment-on-duplicates.sh` 将触发它的 issue 自身标记为重复并发表自引用评论。  
🔗 https://github.com/anthropics/claude-code/pull/83993

**[#83992] fix(plugin-dev): 断言期望的钩子决策（修复 #83800）**  
`test-hook.sh` 新增 `--expect allow|deny|ask` 参数，避免"本应拒绝却放行"的钩子被误判为测试通过。  
🔗 https://github.com/anthropics/claude-code/pull/83992

**[#83990] fix(plugin-dev): 报告缺少 jq 依赖（修复 #83802）**  
`jq` 未安装时之前的错误信息会误导为"无效 JSON"，现在会明确提示缺失依赖。  
🔗 https://github.com/anthropics/claude-code/pull/83990

### 文档与平台修复

**[#83374] docs(plugin-dev): 补充 MessageDisplay 流式语义文档**  
官方 Hook 开发技能中遗漏了 `MessageDisplay` 事件，此 PR 补齐触发描述、事件指引与速查表。  
🔗 https://github.com/anthropics/claude-code/pull/83374

**[#83738] Fix/83484 symlink 路径扩展**  
修复某些 Linux 安装场景下 `claude install` 生成指向 `%h/.local/share/...` 的坏符号链接问题。  
🔗 https://github.com/anthropics/claude-code/pull/83738

**[#83890] 新增 pylint CI 工作流**  
为仓库添加 pylint 静态检查工作流，改善 Python 代码质量门禁。  
🔗 https://github.com/anthropics/claude-code/pull/83890

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 信号强度 |
|------|-----------|---------|
| **多账户 / 多身份支持** | #27302 多 Connector 账户 | 🔥🔥🔥 335 👍，长期霸榜 |
| **Hook 系统的可配置与透明化** | #84022 可配置 persistHookOutput 阈值、#84021 超限静默丢弃、#83992 期望决策断言 | 🔥🔥 今日新增 3 条相关讨论 |
| **模型行为持久锁定** | #84020 防止模型从用户选择被切换 | 🔥 今日新增 |
| **跨平台一致性与沙箱隔离** | #21108 启动访问 git origin、#77605 浏览器跨机器无设备标识 | 🔥 安全/隐私驱动 |
| **MCP 连接器生态完善** | #53408 个人账户支持、#74902 Chrome 多 Profile 区分 | 🔥 连接器可用性短板 |

**解读**：社区不再只关心"能用"，而开始关注 **多账户并行、细粒度控制、安全边界透明化**。Hook 10K 输出限制问题在今日集中爆发（#84021 + #84022），说明记忆/上下文类插件开发者正遭遇硬编码瓶颈。

---

## 6. 开发者关注点

- **Windows Desktop 稳定性告急**：今日最新 Issue 中至少有 5 条与 Windows 平台相关——GPU 进程崩溃（#81275、#83130、#84023）、更新失败链路（#84005）、Cowork 开关灰置（#82574）、macOS Cowork 桥接每日掉线（#83933）。桌面端（尤其 Cowork 功能）被认为是当前最脆弱的部分。
- **静默数据丢失风险**：Hook 输出超过 10K 字符会被持久化到临时文件但**不注入上下文，且无任何警告**（#84021）。对于长期记忆类插件，这等于"悄悄失忆"，开发者强烈要求改为可配置阈值并增加显式信号。
- **API 配额被无效消耗**：#62466 图像处理错误仍在使用量计费，用户对"花钱买错误"非常不满。
- **配置不生效类问题**：子代理 `effort:` 被忽略（#64706）、OTEL headers 未应用到 traces exporter（#84024）、模型选择被自动切换（#84020）——开发者对"明明配置了却不生效"的容忍度正在降低。
- **安全与隐私敏感度上升**：#21108 启动时访问 git origin、#77605 浏览器被跨机器驱动无设备标识，均指向社区对 Claude Code 网络行为透明性的更高要求。

---

*本日报基于 github.com/anthropics/claude-code 公开数据生成，仅代表社区公开反馈，不代表 Anthropic 官方立场。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

## OpenAI Codex 社区动态日报 — 2026-08-05

### 今日速览

今日 Codex 仓库密集推送了 rust-v0.147.0-alpha 系列的 4 个迭代版本，持续打磨 Rust 核心运行时。社区层面，**Linux 桌面应用支持**的诉求保持最高热度（Issue #11023，获 917 👍 / 199 评论），同时 macOS 与 Windows 桌面端的性能/兼容性 bug 成为新的关注焦点。

---

### 版本发布

过去 24 小时内发布了 4 个 Rust 版本，均为 0.147.0-alpha 系列迭代，侧重点偏向底层运行时稳定性与内部功能验证：

| 版本 | 说明 |
|---|---|
| rust-v0.147.0-alpha.7 | 最新 alpha 版本，包含此前多个 alpha 的累积改进 |
| rust-v0.147.0-alpha.6.4 | 迭代版本，修复上个版本遗留问题 |
| rust-v0.147.0-alpha.6.3 | 迭代版本 |
| rust-v0.147.0-alpha.6.1 | 早期 alpha 迭代 |

> 鉴于均为 pre-release，建议开发者关注 0.147.0 正式版的发布说明，alpha 版本主要供社区提前验证新特性。

---

### 社区热点 Issues（10 个）

#### 1. Linux 桌面应用支持 —— 社区第一呼声
- **Issue:** [#11023](https://github.com/openai/codex/issues/11023) 
- **状态:** OPEN | 👍 917 | 💬 199
- **核心诉求:** 用户因 macOS 端性能问题（见 #10432）希望官方提供 Linux 桌面客户端，以在 Linux 桌面获得更稳定的 Codex 使用体验。该 issue 已持续 6 个月，社区关注度极高。

#### 2. macOS 桌面版 syspolicyd/trustd 资源失控
- **Issue:** [#25719](https://github.com/openai/codex/issues/25719)
- **状态:** OPEN | 👍 387 | 💬 81
- **核心问题:** Codex Desktop for macOS 反复触发系统组件 `syspolicyd`/`trustd` 的 CPU 和内存飙升，严重影响日常使用，是当前桌面端最严重的性能 bug 之一。

#### 3. WebSocket 升级成功后被 1008 Policy 关闭
- **Issue:** [#13041](https://github.com/openai/codex/issues/13041)
- **状态:** CLOSED | 👍 170 | 💬 74
- **核心问题:** 客户端与 `wss://chatgpt.com/backend-api/codex/responses` 的 WebSocket 连接在升级成功后立即被服务器策略码关闭，导致重连循环并回退 HTTPS。该问题影响 Linux Arch 等多平台用户。

#### 4. GPT-5.3 Codex Spark 报 "Unsupported parameter: reasoning.summary"
- **Issue:** [#31846](https://github.com/openai/codex/issues/31846)
- **状态:** CLOSED | 👍 37 | 💬 35
- **核心问题:** Codex App 在 GPT-5.3 Codex Spark 模型下请求失败，提示 `Unsupported parameter: reasoning.summary`。涉及 Pro 订阅用户，可能与新模型参数兼容性有关。

#### 5. VS Code/Cursor 扩展提交的 Prompt 随机消失
- **Issue:** [#25928](https://github.com/openai/codex/issues/25928)
- **状态:** OPEN | 👍 16 | 💬 23
- **核心问题:** Windows 平台上，Codex IDE 扩展（v3.6.31）中已提交的 Prompt 在进入队列前随机消失。ChatGPT Pro 20x 用户遇到，涉及 Cursor 与 VS Code。

#### 6. codex-cli 0.143.0 会话回归 bug
- **Issue:** [#31754](https://github.com/openai/codex/issues/31754)
- **状态:** OPEN | 👍 8 | 💬 14
- **核心问题:** 升级到 codex-cli 0.143.0 后，已有会话恢复失败，报错 `Unknown parameter: input[...].namespace`，而 0.142.0 工作正常。典型 CLI 回归问题。

#### 7. 交互式 `ask_user_question` 工具增强提案
- **Issue:** [#9926](https://github.com/openai/codex/issues/9926)
- **状态:** CLOSED | 👍 48 | 💬 27
- **核心诉求:** 新增结构化 Q&A 工具，让 Agent 以带约束选项的问卷形式向用户提问，替代自由对话来消除歧义，提升多轮协作效率。

#### 8. App 文件查看器不支持显示点文件/文件夹
- **Issue:** [#18299](https://github.com/openai/codex/issues/18299)
- **状态:** CLOSED | 👍 33 | 💬 14
- **核心诉求:** Codex App 右侧文件面板不显示 `.config`、`.codex` 等点文件，影响用户查看技能配置与项目自定义文件。

#### 9. Windows 桌面版全进程 PowerShell/WMI 轮询导致输入延迟
- **Issue:** [#36176](https://github.com/openai/codex/issues/36176)
- **状态:** OPEN | 👍 3 | 💬 7
- **核心问题:** Windows 桌面应用（26.721.4979.0）持续进行全进程 PowerShell/WMI 轮询，造成系统级输入延迟。用户通过本地补丁暂时缓解，官方正在跟进。

#### 10. 每周限额重置日期异常变更
- **Issue:** [#5999](https://github.com/openai/codex/issues/5999)
- **状态:** CLOSED | 👍 17 | 💬 43
- **核心问题:** Team 订阅用户发现每周限额重置日期从 Nov 3 变更为 Nov 7，与 `/status` 显示不符，涉及配额计算逻辑问题。

---

### 重要 PR 进展（10 个）

#### 1. 保持共享技能缓存在插件加载间的时效性
- **PR:** [#37000](https://github.com/openai/codex/pull/37000)
- **状态:** CLOSED
- **内容:** 按文件系统与插件快照身份缓存技能快照，合并相同缓存键的并发加载，避免复用过期插件数据。

#### 2. 在工具搜索中支持延迟自定义工具
- **PR:** [#36998](https://github.com/openai/codex/pull/36998)
- **状态:** CLOSED
- **内容:** 将顶级自由表单工具纳入工具搜索索引并标记为延迟加载，搜索结果以 Responses API `custom` 工具序列化，发现后再转回可执行工具规格。

#### 3. 为分页线程支持 `includeTurns` 读取
- **PR:** [#36993](https://github.com/openai/codex/pull/36993)
- **状态:** CLOSED
- **内容:** 为以分页形式存储历史记录的线程，重构出完整的投影轮次，满足 `thread/read` 加 `includeTurns: true` 的旧版全历史视图需求。

#### 4. 允许注入模型目录缓存
- **PR:** [#36992](https://github.com/openai/codex/pull/36992)
- **状态:** CLOSED
- **内容:** 新增公开异步 `ModelsCache` 契约，模型提供商和管理器可接收调用方提供的缓存实现，默认仍保留文件缓存。

#### 5. 移除遗留协作模式变体
- **PR:** [#36990](https://github.com/openai/codex/pull/36990)
- **状态:** CLOSED
- **内容:** 删除隐藏的 `PairProgramming` 和 `Execute` 模式，清理相关提示模板，将模式处理简化为 `Default` 与 `Plan` 两种。

#### 6. 为 exec-server 增加可选并发请求调度
- **PR:** [#36987](https://github.com/openai/codex/pull/36987)
- **状态:** CLOSED
- **内容:** 新增 `--concurrent-requests <COUNT>` 参数，支持本地和远程 exec-server 连接上的并发请求，避免长任务阻塞同一连接的健康检查和清理。

#### 7. 为 ChatGPT 请求增加进程级 PSP 路由
- **PR:** [#36986](https://github.com/openai/codex/pull/36986)
- **状态:** CLOSED
- **内容:** 新增隐藏全局 `--psp` 运行时标志，并穿透 TUI、exec、app-server、remote-control 及进程内启动路径，为第一方 ChatGPT 请求附加 `oai-chat-psp=true` cookie。

#### 8. 配置化 ChatGPT cookie 的 HTTP 客户端支持
- **PR:** [#36984](https://github.com/openai/codex/pull/36984)
- **状态:** CLOSED
- **内容:** 让 `HttpClientFactory` 携带额外 ChatGPT cookie 并在克隆工厂间共享存储，路由感知或显式启用的客户端可附加配置化 cookie。

#### 9. 启用 Amazon Bedrock 的远程压缩
- **PR:** [#36981](https://github.com/openai/codex/pull/36981)
- **状态:** CLOSED
- **内容:** 为不支持 v2 协议的提供商增加远程压缩能力，将 Bedrock 标记为仅 v1，在 v2 功能开启时也强制使用 `/v1/responses/compact`。

#### 10. 在 PR 正文中链接 Codex 归属声明
- **PR:** [#36963](https://github.com/openai/codex/pull/36963)
- **状态:** CLOSED
- **内容:** 将 PR 归属声明更新为带链接的 `Generated with [Codex](https://openai.com/codex/).`，并在恢复保存的上下文时识别和替换旧的无链接声明。

---

### 功能需求趋势

从今日活跃的 Issues 中可提炼出社区关注度最高的五个方向：

1. **Linux 桌面客户端支持** —— #11023 以 917 👍 高居榜首，是当前社区最强烈的功能诉求，已持续数月未见官方明确排期。
2. **跨平台性能与资源占用优化** —— macOS 端 `syspolicyd`/`trustd` 失控（#25719）、Windows 端 WMI/PowerShell 轮询卡顿（#36176）等问题频现，桌面端性能是体验的核心瓶颈。
3. **IDE 扩展稳定性** —— VS Code/Cursor 扩展的 prompt 丢失（#25928）、IDE Context RPC 序列化错误（#34920）等，反映 IDE 集成在 Windows 和复杂网络环境下仍不够可靠。
4. **自定义模型与第三方提供商兼容** —— #37009 提出 memory writer 向非 OpenAI 提供商发送硬编码模型请求的问题，社区对模型提供商可插拔性的需求上升。
5. **连接与认证可靠性** —— WebSocket 1008 Policy 关闭（#13041）、`OPENAI_API_KEY` 静默覆盖 OAuth 令牌（#15151）、远程 SSH 审批按钮失效（#34652）等问题，凸显连接链路是高频痛点。

---

### 开发者关注点

- **Windows 平台是 bug 高发区**：今日活跃的 50 个 issue 中，标注 `windows-os` 的占了约 1/3，覆盖启动失败（#13553）、命令执行错误（#15032、#19952）、任务创建超时（#33288）、远程连接失败（#25904）等，Windows 开发者反馈的系统性体验问题值得官方优先排查。
- **性能与资源占用成为敏感点**：macOS 的 `syspolicyd`/`trustd` 失控与 Windows 的全进程轮询均被明确贴上 `performance` 标签，开发者对桌面应用的后台资源占用容忍度极低。
- **CLI 回归问题影响升级意愿**：0.143.0 的会话兼容性回归（#31754）导致部分开发者停留在旧版本，也提醒官方在发布前需加强会话迁移与参数兼容性测试。
- **配置优先级导致隐性故障**：`OPENAI_API_KEY` 环境变量静默覆盖 OAuth 登录态（#15151）的问题虽已关闭，但类似的配置优先级混淆仍会在企业/代理环境中反复出现，建议提供更明确的诊断提示。
- **子代理与工具调用的稳定性**：`close_agent` 挂起（#31036）、内存写入器硬编码模型请求（#37009）等涉及多代理或工具链的问题开始浮现，表明社区正在将 Codex 用于更复杂的多代理场景，官方工具的边界与容错能力需要同步加强。

> 本文数据来源于 GitHub openai/codex 仓库公开信息，统计时间范围为 2026-08-04 至 2026-08-05（UTC）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-05）

## 今日速览

- **安全修复为今日主线**：PR #28691 修复了 GHSA-wpqr-6v78-jr5g 的变量展开绕过漏洞，PR #28557 修复了 `web-fetch.ts` 中的 SSRF 风险。
- **稳定性问题持续高热**：generalist agent 挂起（#21409，👍 8）与 shell 命令卡在 "Waiting input"（#25166，👍 3）讨论热烈；PR #28672 正在修复 `/compress` 会话重载损坏的问题。
- **Subagent 可靠性引发关注**：#22323 指出 subagent 在 MAX_TURNS 中断后被误报为 GOAL 成功，社区讨论活跃（12 条评论）。

## 社区热点 Issues

1. **[#22323] Subagent 在 MAX_TURNS 中断后被误报为 GOAL 成功**️⃣｜priority/p1
   `codebase_investigator` 子代理在尚未执行任何分析时就因 max_turns 被中断，但最终结果却显示 `status: "success"` 和 `Termination Reason: "GOAL"`。这种**错误的状态上报**会直接影响用户对结果的信任。
   链接：https://github.com/google-gemini/gemini-cli/issues/22323

2. **[#21409] Generalist agent 无限挂起**️⃣｜priority/p1，👍 8
   只要委托给 generalist agent，就连创建文件夹这种简单操作也会卡死。有用户等待 1 小时后被迫取消，**社区关注度极高**。临时方案是显式指示模型不要委托给子代理。
   链接：https://github.com/google-gemini/gemini-cli/issues/21409

3. **[#25166] Shell 命令执行完成后卡在 "Waiting input"**️⃣｜priority/p1，👍 3
   简单 CLI 命令已执行完毕，Gemini 仍显示命令活动并处于"等待用户输入"状态，严重影响日常批量操作体验。
   链接：https://github.com/google-gemini/gemini-cli/issues/25166

4. **[#26525] Auto Memory 需确定性脱敏并减少日志输出**️⃣｜priority/p2，area/security
   Auto Memory 会将本地 transcript 发送给后台提取模型，但脱敏是在内容进入模型上下文之后才执行的；且服务可能记录现有技能等敏感内容。属于**隐私/安全类高优先级反馈**。
   链接：https://github.com/google-gemini/gemini-cli/issues/26525

5. **[#21983] Browser subagent 在 Wayland 下失败**️⃣｜priority/p1，area/browser
   Wayland 环境下 browser subagent 直接失败（Termination Reason: GOAL），但无有效操作产出。Linux 桌面用户受影响范围较大。
   链接：https://github.com/google-gemini/gemini-cli/issues/21983

6. **[#22093] v0.33.0 之后 subagents 未经许可运行**️⃣｜priority/p2
   用户在所有配置中均禁用了 agents，但更新到 v0.33.0 后 generalist 等子代理仍被调用，**配置失效引发权限担忧**。
   链接：https://github.com/google-gemini/gemini-cli/issues/22093

7. **[#26522] Auto Memory 对低信号会话无限重试**️⃣｜priority/p2
   当提取 agent 判断会话为低信号而不读取时，该会话永远不会被标记为已处理，导致后台提取服务反复重试同一批会话，浪费算力。
   链接：https://github.com/google-gemini/gemini-cli/issues/26522

8. **[#22745] AST 感知的文件读取/搜索/映射价值评估（EPIC）**️⃣｜priority/p2
   跟踪 AST 感知工具是否能精确读取方法边界、减少 token 消耗、支持跨文件导航。这是**提升 agent 代码理解效率**的长期方向。
   链接：https://github.com/google-gemini/gemini-cli/issues/22745

9. **[#21968] Gemini 不会主动使用自定义 skills 和 sub-agents**️⃣｜priority/p2
   有用户配置了 gradle 与 git 的 skill 及清晰描述，Gemini 几乎从不主动调用。**自定能力的利用率低**成为普遍反馈。
   链接：https://github.com/google-gemini/gemini-cli/issues/21968

10. **[#22465] 创建 Vite 应用时卡在交互式提示**️⃣｜priority/p2
   命令在 `npm create vite` 的交互提示处卡死，社区建议补充 behavioral eval 并调整提示词策略。
   链接：https://github.com/google-gemini/gemini-cli/issues/22465

## 重要 PR 进展

1. **[#28691] 修复 $VAR/${VAR} 变量展开绕过漏洞（GHSA-wpqr-6v78-jr5g）**️⃣｜priority/p1，area/security
   修复 `detectBashSubstitution()` 与 `detectPowerShellSubstitution()` 中不完整的检查逻辑，并加固自动去重工作流。**高危安全修复，建议关注合入时机**。
   链接：https://github.com/google-gemini/gemini-cli/pull/28691

2. **[#28557] 修复 web-fetch.ts 中的 SSRF 漏洞**️⃣｜priority/p1，area/security
   `isBlockedHost` 此前仅同步检测字面 IP，域名可绕过检查解析到内网地址。本次改为异步 DNS 解析后再校验，闭合 `169.254.169.254` 等内网风险。
   链接：https://github.com/google-gemini/gemini-cli/pull/28557

3. **[#28672] 修复 /compress 会话重载失败与 quota 回退时工具响应丢失**️⃣｜area/core，area/agent
   `/compress` 后重载会话报 `Failed to load resumed session data`，同时修复 quota 限制触发时模型上下文损坏的问题。**涉及核心稳定性**。
   链接：https://github.com/google-gemini/gemini-cli/pull/28672

4. **[#28689] 解析 gaxios 流式请求的嵌套错误信息**️⃣｜area/core
   从 `error.cause.message` 中解包嵌套的 Google API 错误，使 rate limit 或容量耗尽等结构化错误能被正确展示，避免用户看到一堆 JSON 堆栈。
   链接：https://github.com/google-gemini/gemini-cli/pull/28689

5. **[#28681] 支持 SGLang 与本地 OpenAI 兼容端点**️⃣｜priority/p1，area/core,cli
   为偏好本地/自托管模型的用户提供 SGLang 后端支持，能有效降低敏感代码外泄风险。**方向符合企业私有化部署需求**。
   链接：https://github.com/google-gemini/gemini-cli/pull/28681

6. **[#28639] 修复 formatTruncatedToolOutput 的 maxChars 负数问题**️⃣｜priority/p1，area/core
   `maxChars <= 0` 时 `slice()` 返回负数索引导致工具输出膨胀 2 倍，现改为放行原内容并补充回归测试。
   链接：https://github.com/google-gemini/gemini-cli/pull/28639

7. **[#28640] ProjectIdRequiredError 指向过期文档链接**️⃣｜priority/p1，area/core
   修复 404 的 `goo.gle/gemini-cli-auth-docs` 短链接，同时补充 docs 重定向规则，降低新手配置 GCP 门槛。
   链接：https://github.com/google-gemini/gemini-cli/pull/28640

8. **[#28641] 修复窄终端下 ghost text 换行死循环**️⃣｜area/core
   CJK/emoji 等宽字符导致 `inputWidth` 比单个字符还窄时，`getGhostTextLines` 陷入无限循环。增加强制推进逻辑并添加回归测试。
   链接：https://github.com/google-gemini/gemini-cli/pull/28641

9. **[#28664] MCP 扩展更新：完整展示服务器配置并加固 stdio 环境**️⃣｜area/mcp
   此前仅展示 command/args/httpUrl，`env`、`cwd`、`headers` 等执行敏感字段既不展示也不参与变更判断；本次补全并增强提示透明性。
   链接：https://github.com/google-gemini/gemini-cli/pull/28664

10. **[#28597] 先加载环境变量再解析 settings 占位符**️⃣｜area/cli
    修复 `.env` 在 settings 展开后才加载的顺序竞争问题，避免 workspace 级变量无法在配置中引用。
    链接：https://github.com/google-gemini/gemini-cli/pull/28597

## 功能需求趋势

从近 24 小时更新的 50 条 Issues 和 26 条 PRs 中，可提炼出以下社区核心关注方向：

1. **Agent 行为可靠性与可观测性**：subagent 轨迹可视化分享（#22598）、/bug 报告包含子代理上下文（#21763）、组件级评估体系（#24353）等需求集中出现，说明社区已不满足于"能跑通"，而是要求**可诊断、可评估、可回溯**。
2. **零依赖沙箱与安全执行**：除了连续两个安全漏洞修复外，#19873 提出利用 Gemini 3 的原生 bash 能力做零依赖 OS 沙箱和意图路由，#22672 要求 agent 主动规避 `git reset --force` 等破坏性命令。安全与自主性之间的平衡是重点。
3. **记忆系统完善与隐私保护**：Auto Memory 相关的 #26516、#26522、#26523、#26525 构成一个完整的质量问题集合，涉及低信号过滤、非法 patch 隔离、确定性脱敏和日志削减。**记忆功能正从"有"走向"可用且安全"**。
4. **AST 感知的代码库工具链**：#22745 和 #22746（EPIC）持续跟踪 AST 感知读取、搜索与代码库映射，目标是通过一次工具调用精确获取方法边界、减少 token 消耗，并为 `codebase_investigator` 铺路。
5. **本地/自托管模型支持**：PR #28681 增加 SGLang 和 OpenAI 兼容端点支持，呼应社区对私有化部署和敏感代码不出本地的需求。

## 开发者关注点

- **挂起与假死是最大痛点**：generalist agent 挂起（#21409）、shell 命令卡在 "Waiting input"（#25166）、交互式提示卡死（#22465）——这些问题的共同特征是**无报错、无进度、只能手动取消**，对自动化工作流伤害极大。
- **错误状态上报的信任危机**：#22323 中 subagent 明明被中断却报 `GOAL` 成功，开发者担心这类误报会让自动化的质量门禁形同虚设。
- **配置与预期不一致**：v0.33.0 后 subagents 绕过禁用配置运行（#22093），browser agent 忽略 `settings.json` 的 maxTurns 覆盖（#22267），`.env` 与 settings 加载顺序颠倒（#28597）——**配置系统的确定性和优先级需要重建**。
- **安全漏洞持续出现**：从 SSRF（#28557）到变量展开绕过（GHSA-wpqr-6v78-jr5g），再到 Auto Memory 预脱敏缺失（#26525），开发者希望安全机制前置而非事后修补。
- **工具规模与上限问题**：超过 128/400 个工具时触发 400 错误（#24246），社区期待 agent 能**按需动态裁剪工具集**，而不是全量注入 context。

---
*日报基于 github.com/google-gemini/gemini-cli 公开数据整理，数据更新时间为 2026-08-05。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-05** | 数据来源：github.com/github/copilot-cli

---

## 1. 今日速览

今日发布 **v1.0.79-1**，包含一项破坏性配置变更（sandbox 权限项重命名）。社区讨论集中在三类话题：**MCP 服务器兼容性问题**（#4370、#2692）、**会话管理与状态丢失**（#4334、#1947），以及**企业级功能落地受阻**（#1285、#4005）。自定义主题（#1504）与会话分叉（#1697）仍是高赞的功能需求。

---

## 2. 版本发布

### v1.0.79-1
- **发布性质**：补丁版本，含一项破坏性变更
- **变更内容**：sandbox 设置项 `allowDevToolCaches` 重命名为 `allowDevToolAccess`
- **影响说明**：该设置的实际授权范围已扩大——不仅限于 dev-tool 缓存，还涵盖配置与注册表访问。旧 key 不再被读取且被静默忽略，因此原先显式设置 `false` 的用户将回退到默认值（开启）。需要手动重命名配置项。

🔗 [查看 Release](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues

### 🔥 高热度功能需求

1. **#1504 - 自定义主题支持**（👍 23 · 评论 8）
   用户希望 `/theme` 支持创建自定义主题并以 JSON 文件共享。获赞数说明主题定制是强需求，且该 issue 自 2 月创建以来持续有讨论。
   🔗 https://github.com/github/copilot-cli/issues/1504

2. **#1697 - 会话分叉（Session Forking）**（👍 25 · 评论 3）
   在复杂任务自然分叉时，可将当前会话分支为多个并行子会话并共享上下文。这是今日数据显示获 👍 最多的功能请求之一，开发者对多任务并行处理的需求迫切。
   🔗 https://github.com/github/copilot-cli/issues/1697

3. **#1947 - 云同步会话**（👍 6 · 评论 4）
   要求会话跨设备同步，解决 `~/.copilot/` 本地存储导致的多设备割裂问题，与企业开发者工作流相关。
   🔗 https://github.com/github/copilot-cli/issues/1947

4. **#2019 - 删除会话的命令**（👍 13 · 评论 2）
   请求提供命令从 `/resume` 历史中删除指定会话，属于会话管理的基础能力，获赞数不低。
   🔗 https://github.com/github/copilot-cli/issues/2019

### 🐛 值得关注的 Bug

5. **#4328 - WSL2 下 Ctrl+H 被误判为 Ctrl+Backspace**（评论 5）
   Windows Terminal 的 `WT_SESSION` 环境变量泄漏导致按键语义错乱，影响 WSL2 用户的日常输入效率。
   🔗 https://github.com/github/copilot-cli/issues/4328

6. **#4202 - view 工具报告文件不存在（v1.0.73 回归）**（评论 4）
   自 v1.0.72 起内置 `view` 工具对存在的文件报错，v1.0.71 正常。属于回归缺陷，影响非交互模式的可靠性。
   🔗 https://github.com/github/copilot-cli/issues/4202

7. **#4005 - 企业版记忆功能报错 "billing entity isn't selected"**（评论 4）
   企业环境下无法保存记忆（memory），其他功能正常。直接影响依赖持久上下文的企业用户。
   🔗 https://github.com/github/copilot-cli/issues/4005

8. **#4370 - MCP 初始化失败：server/discover 返回 -32602**（评论 1 · 最新 triage）
   v1.0.79-1 与 FastMCP 不兼容——CLI 发送的 `server/discover` 请求被 FastMCP 以 `-32602` 拒绝，CLI 将其视为致命错误。MCP 生态兼容性是高频痛点。
   🔗 https://github.com/github/copilot-cli/issues/4370

9. **#1285 - 组织级 Agent 不显示**（评论 7 · 👍 9）
   企业仓库 `.github-private` 中定义的 Agent 未在 CLI/VS Code 中出现。企业功能配置透明度不足，影响组织级 rollout。
   🔗 https://github.com/github/copilot-cli/issues/1285

10. **#4334 - Stashed Prompt 在切换会话后丢失**（评论 0）
    `Ctrl+S` 暂存的未提交输入在切换会话后被清空，`Ctrl+S` 恢复无内容。会话状态管理的又一缺陷。
    🔗 https://github.com/github/copilot-cli/issues/4334

---

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR，且均处于待处理状态：

1. **#4366 - 【需行动】copilot-cli 基础安全发现修复**（自动 PR）
   由 Vault 机器人创建，针对 `ci` 与 `production` 环境的基础安全发现进行整改。需要人工审查并替换 `<UPDATE_ME>` 占位值后合并。建议安全负责人优先处理。
   🔗 https://github.com/github/copilot-cli/pull/4366

2. **#4355 - Merge**（标题与描述不完整）
   该 PR 信息有限，标题仅为 "Merge"，暂无明确的功能描述或变更内容，可能出现异常，建议查看详情确认。
   🔗 https://github.com/github/copilot-cli/pull/4355

---

## 5. 功能需求趋势

从今日 Issues 中提炼出以下社区最关注的功能方向：

- **主题与终端渲染定制**：#1504 自定义主题获 23 👍，另有 #3898（OSC 11 黑色背景问题），说明用户对终端 UI 的可定制性和渲染正确性有持续诉求。
- **会话管理的深度改进**：云同步（#1947）、分叉（#1697）、删除（#2019）、stash 恢复（#4334）、sessionStart 钩子语义（#4365）——社区希望会话不只是"本地历史"，而是可组合、可恢复、跨设备的工作单元。
- **企业级部署支持**：#1285 组织级 Agent、#4005 billing 实体、#4349 企业策略校验、#4364 私有 CA 证书——企业在落地途中频繁遇到配置、鉴权、策略兼容问题。
- **MCP 生态兼容性**：#4370（FastMCP 的 server/discover）、#2692（Web Search MCP 报错）、#4349/#4364（企业 MCP 注册表）集中暴露 MCP 协议实现与服务端兼容的摩擦。
- **模型接入灵活性**：#4196 BYOK 的 `reasoning_content` 流式解析失败、#4139 自定义模型端点支持——用户希望自主选择模型供应商，但协议兼容性仍是瓶颈。

---

## 6. 开发者关注点

- **MCP 兼容性堪忧**：多起 Issue 指向 MCP 服务器接入失败（FastMCP、企业私有 CA、标准方法缺失），开发者在非标准 MCP server 上付出额外排障成本。
- **企业环境摩擦**：组织 Agent 不生效、billing 实体异常、策略枚举校验过于严格——企业用户在多租户配置下缺乏有效的诊断手段。
- **Windows/WSL2 体验欠佳**：Ctrl+H 按键错乱（#4328）、zellij 启动时输入框被转义序列污染（#4267）、原生 Windows 反复崩溃（#4026），Windows 平台稳定性问题积压。
- **配置变更的破坏性**：`allowDevToolCaches` 重命名且旧值被静默忽略，开发者担心此类 breaking change 在无提示情况下改变安全默认值。
- **"被忽略"的等待**：Windows 崩溃问题（#4026）自 5 月起跨 4 个版本未解决，高赞功能（#1504、#1697）长期处于 open 状态，社区对部分老 issue 的推进速度有焦虑。

---

> 注：PR 数据仅 2 条为当日更新，可能受仓库维护节奏影响；功能需求趋势基于全部 42 条 open/closed issues 的综合判断。
> 数据统计时间：2026-08-05

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-05

## 今日速览

今日社区动态集中于 **ACP 协议完善**、**长会话可靠性** 与 **Windows 输入兼容性** 三大方向。核心关注点为 #2586 报告的 Agent 在高上下文占用（约 500K tokens）下出现指令漂移与重复循环问题，另有 ACP 相关新特性请求与修复 PR 持续活跃。此外，#1282「远程控制」与 #1283「记忆系统」两大长期需求仍保持较高讨论热度，开发者对跨设备无缝协作与持久化上下文的诉求强烈。

## 社区热点 Issues

### 1. #2586 Agent 在高上下文占用时可靠性下降（约 500K tokens）
- **链接**: [MoonshotAI/kimi-cli Issue #2586](https://github.com/MoonshotAI/kimi-cli/issues/2586)
- **作者**: GrokBuildMJW | 创建: 2026-08-05 | 💬 1 | 状态: 已关闭
- **为什么重要**: 这是今日最值得关注的问题。报告指出，当会话上下文填充超过约 500K tokens（操作者实测阈值，非文档限制）后，Agent 在长时多步骤任务中会出现**重复工具调用循环、缺乏错误升级机制、指令偏离原始目标**。这直接关系到 Kimi CLI 在大型代码库/长任务场景下的可用性，可能导致用户中途丢失工作上下文。该问题虽已被关闭，但评论区记录的现象具有普遍参考价值。

### 2. #2587 会话正常推进时 Kimi CLI 异常退出
- **链接**: [MoonshotAI/kimi-cli Issue #2587](https://github.com/MoonshotAI/kimi-cli/issues/2587)
- **作者**: Sdongmaker | 创建: 2026-08-05 | 💬 0 | 状态: 开放
- **为什么重要**: 严重稳定性 bug。在**正常推进会话**（非极端场景）时 CLI 直接崩溃，且用户使用较新的 **v0.29.2**、K3 High 模型与 Windows 平台。问题尚未有评论或复现方案，但「正常使用即崩溃」会极大影响开发信任度，需要官方尽快定位。

### 3. #1282 功能请求：远程控制——从任意设备继续本地会话
- **链接**: [MoonshotAI/kimi-cli Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)
- **作者**: CatKang | 创建: 2026-02-27 | 更新: 2026-08-04 | 💬 12 | 👍 24 | 状态: 开放
- **为什么重要**: 社区热门需求之一（👍 24）。用户希望在手机、平板或浏览器上**无缝接管正在运行的本地会话**，保留完整上下文与执行状态。该问题长期在讨论，今日更新说明社区仍持续关注。对于需要「离开工位但仍要监控任务」的开发者/运维场景很有价值。

### 4. #1283 功能请求：记忆系统——跨会话持久化上下文
- **链接**: [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **作者**: CatKang | 创建: 2026-02-27 | 更新: 2026-08-04 | 💬 17 | 状态: 开放
- **为什么重要**: 呼声最高的增强之一。期望实现**自动记忆**（AI 维护的 notes）与**手动记忆**（用户自定义指令）两级机制，让 CLI 在多个会话间记住项目模式、用户偏好和有效上下文。与 #1282 协同，可组成完整的「持久化工作流」体验。讨论较多（17 条评论），社区对记忆边界和隐私策略存在深入探讨。

### 5. #2583 功能请求(ACP)：通告可用模型并支持会话中模型切换
- **链接**: [MoonshotAI/kimi-cli Issue #2583](https://github.com/MoonshotAI/kimi-cli/issues/2583)
- **作者**: tizerluo | 创建: 2026-08-04 | 💬 0 | 状态: 开放
- **为什么重要**: 面向 ACP 客户端生态（如 Happy Coder 移动端、Zed）的集成缺口。目前客户端在 `session/new` 时**无法获取可用模型列表**，也不能在会话中途切换到 `current_model_update` 等模型。这限制了客户端在不同任务中切换 K3/K3 High 等模型的灵活性，是 ACP 协议标准化过程中的关键补足。

### 6. #2584 Bug：Windows 上泰语（及其他 IME 输入法）字符重复
- **链接**: [MoonshotAI/kimi-cli Issue #2584](https://github.com/MoonshotAI/kimi-cli/issues/2584)
- **作者**: mgprona | 创建: 2026-08-04 | 💬 0 | 状态: 开放
- **为什么重要**: Windows 平台的输入法兼容性 bug。使用泰语等基于 IME 的语言输入时，字符会**重复出现**，影响提示符输入。同类问题已覆盖泰语，可能延伸至其他 IME 语言（如日语、中文）。Kimi CLI 的目标用户包括全球开发者，非英文输入体验需要被认真对待。

---

## 重要 PR 进展

### 1. #2200 fix(shell): 为长命令自动适配超时
- **链接**: [MoonshotAI/kimi-cli PR #2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)
- **作者**: he-yufeng | 创建: 2026-05-08 | 更新: 2026-08-04 | 状态: 开放
- **内容**: 针对 `git submodule` 清理、`git clone/fetch`、包安装、构建等**已知长耗时命令模式**，自动扩展 shell 超时时间；普通命令保持默认 60s；若调用者已指定更大的显式超时则沿用。
- **价值**: 对 CI/大项目自动化场景是重要体验修复。此前长命令频繁触发超时中断，影响安装、构建等日常操作稳定性。

### 2. #2585 feat(cli): 为子进程设置 AI_AGENT 环境变量
- **链接**: [MoonshotAI/kimi-cli PR #2585](https://github.com/MoonshotAI/kimi-cli/pull/2585)
- **作者**: complynx | 创建: 2026-08-04 | 更新: 2026-08-04 | 状态: 开放
- **内容**: 向 pip/uv 和独立二进制两个入口启动的子进程暴露 `AI_AGENT=kimi` 标识；若外层已显式设置非空值则保留。
- **价值**: 为 **CI/CD 流水线、包装器或编排工具**提供统一的 AI 工具识别标记，便于子进程感知自己运行在 Kimi 环境内并做出相应适配（如加载特定配置、改变日志格式）。生态友好型改进。

### 3. #2364 feat(acp): 支持权限模式切换
- **链接**: [MoonshotAI/kimi-cli PR #2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)
- **作者**: huntharo | 创建: 2026-05-24 | 更新: 2026-08-04 | 状态: 开放
- **内容**: 在 ACP 协议层为 Kimi 会话增加**权限模式切换**能力，会通告 `default...` 权限模型（描述不完整）。该 PR 基于 #2363 依赖栈，按顺序审查/合并。
- **价值**: 让 ACP 客户端（如 IDE、移动端）能够在会话中调整文件读写、命令执行的权限级别，对安全敏感的企业场景至关重要，也与 #2583 一起构 ACP 完整能力面。

---

## 功能需求趋势

从近 24 小时 Issue 及长期讨论中，社区最活跃的需求方向可归纳为：

| 方向 | 代表 Issue/PR | 说明 |
|------|-------------|------|
| **ACP 协议完善** | #2583、#2364 | 会话中模型切换、权限模式切换，面向外部 IDE/移动端客户端 |
| **长会话/上下文可靠性** | #2586 | 500K tokens 上下的稳定性、防漂移、防循环 |
| **记忆与持久化状态** | #1283 | 跨会话自动/手动记忆，项目模式与用户偏好 |
| **远程控制** | #1282 | 手机/浏览器接管本地会话，保持上下文 |
| **平台兼容性修复** | #2584、#2587 | Windows IME 输入、异常退出 |
| **生态工具链衔接** | #2585、#2200 | 环境变量标记 AI_AGENT、shell 超时自适应 |

其中 **ACP 相关**取代了此前的纯 IDE 插件集成，成为社区对外部工具链协同的新焦点；**记忆系统**与**远程控制**虽然是两个月前的旧 Issue，但讨论热度至今未减，说明核心工作流需求尚未被满足。

---

## 开发者关注点

1. **上下文填充量是体验分水岭（高优先级）**：以 #2586 为代表，约 500K tokens 是 Agent 可靠性的隐式临界点。超过后出现重复工具调用、指令漂移，且缺少自动升级机制。开发者普遍期望：
   - **显式文档化**上下文限制；
   - 达到阈值前**主动警告**；
   - 提供**恢复/降级策略**（如自动摘要压缩）。

2. **「正常使用」下的崩溃不可接受**：Kimi CLI v0.29.2 在常规会话推进中直接退出（#2587），表明稳定性回归监管需要加强。用户期望官方提供崩溃日志导出和自动上报机制。

3. **非英文输入体验被忽视**：Windows IME 输入法下字符重复（#2584）是典型国际化盲点。泰语之外，中文、日文等多字节 IME 用户可能受影响，社区希望官方在发布前建立 IME 回归测试矩阵。

4. **ACP 客户端能力缺失**：外部客户端无法发现模型列表、无法中途切换模型（#2583），且权限管理尚不完善（#2364）。开发者希望 ACP 实现与 CLI 本地能力对等，避免「瘦客户端」体验。

5. **子进程环境标识与超时控制是基础体验**：`AI_AGENT` 环境变量（#2585）与 shell 超时自适应（#2200）看似「小改动」，却直接决定 Kimi CLI 能否被 CI 编排工具或复杂构建脚本可靠调用。社区希望此类基础体验优先稳定。

---

*日报数据截至 2026-08-05，链接见各条目标题。无版本发布动态。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-05

## 1. 今日速览

今日发布 v1.18.13 补丁版本，主要修复了 TUI 中 GitHub PR review 上下文问题，以及 Desktop 端一系列 RTL（从右到左）布局缺陷。社区方面，付费/配额错误（402 Insufficient Balance）与模型挂起类 Issue 讨论热度最高，同时多个 PR 聚焦于 AI 工具调用语义的规范化（tool finish reason 分类）。值得关注的是，多个 PR 正在对齐 OpenAI-compatible、Anthropic、Gemini 等不同提供商的响应解析逻辑，表明项目正处于跨模型兼容性的系统性加固阶段。

## 2. 版本发布

### v1.18.13

**TUI**
- 修复：GitHub pull request reviews 现在会在上下文中包含 PR 编号和 URL。

**Desktop**
- 修复：多个标签页、抽屉、调整大小及标题栏交互中的 RTL 布局问题。
- 修复：共享 RTL UI 行为，如方向性图标。

## 3. 社区热点 Issues

### #27593 — Error: 402 Insufficient Balance（已关闭）
- **评论**: 17 | **👍**: 13
- **摘要**: 用户报告在 98% 会话配额可用的情况下，调用 ds4-flash 模型仍遇到 402 余额不足错误，当日仅消费 74 美分。切换其他模型则正常。
- **重要性**: 计费/配额判定问题影响用户信任，且涉及具体模型，可能是服务端或模型路由错误。高赞说明影响面广。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/27593)

### #30862 — 更新后卡死无响应（已关闭）
- **评论**: 12 | **👍**: 1
- **摘要**: 更新到最新版本后，CLI 和 GUI 均卡住无输出，但会话标题会变化，说明 LLM 在后台工作但响应未送达前端。
- **重要性**: 涉及 CLI/GUI 双端、升级回归、前后端通信中断，是影响核心使用流程的高严重度问题。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/30862)

### #20118 — Failed to run the query 'PRAGMA journal_mode = WAL'（已关闭）
- **评论**: 10 | **👍**: 11
- **摘要**: 用户在版本回退后遇到 SQLite 查询失败，数据库状态被新版本修改但缺少友好错误处理。
- **重要性**: 版本兼容与数据库迁移问题，涉及降级场景和错误处理改进方向，11 个 👍 说明社区认可该痛点。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/20118)

### #20234 — WSL 下思考过程逐词输出（已关闭）
- **评论**: 10 | **👍**: 4
- **摘要**: WSL 环境下，思考阶段输出变成每行一个单词。
- **重要性**: 针对 WSL/TTY 渲染的兼容性问题，影响特定平台用户体验。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/20234)

### #33028 — Subagents 在快速 bash 调用后无限挂起（开放中）
- **评论**: 9 | **👍**: 6
- **摘要**: Subagent（以及主 agent）在一次快速 bash 工具调用后无限挂起，流式请求既不完成也不超时，只能手动 Esc 或杀进程。涉及 glm-5.2 和 minimax-m3 两个不同模型。
- **重要性**: 跨模型复现说明问题可能出在工具调用后的流处理管线，而非特定模型；涉及流超时机制缺失。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/33028)

### #28704 — Zod 内部属性泄漏到发给 provider 的 JSON Schema（已关闭）
- **评论**: 5 | **👍**: 0
- **摘要**: Kimi k2.6 模型报 "JSON Schema not supported"，原因是数据中包含 Zod 内部属性（`_def`、`typeName` 等）。
- **重要性**: 暴露了工具 schema 序列化层的深层 bug，影响多个 provider 的兼容性，属于架构层面的修复。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/28704)

### #34214 — 会话中途冻结/无响应（开放中）
- **评论**: 5 | **👍**: 1
- **摘要**: 长时间会话中多次工具调用后，助手突然停止响应，UI 冻结，只能强杀进程。
- **重要性**: 长会话稳定性问题，影响重度用户日常使用。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/34214)

### #30963 — Migration 删除所有用户的完整事件日志（已关闭）
- **评论**: 4 | **👍**: 1
- **摘要**: PR #30785 引入的 migration 无条件执行 `DELETE FROM event` 和 `UPDATE session SET workspace_id = NULL`，用户同步到 dev 分支时数据被清空。
- **重要性**: 数据破坏性 migration，涉及数据安全，需确保未来 migration 具备条件判断。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/30963)

### #30920 — 异常退出后终端 raw mode 未恢复（已关闭）
- **评论**: 3 | **👍**: 0
- **摘要**: 在 "thinking" 阶段按 Esc 两次中止后，终端进入异常状态：每个按键都被视为 Ctrl 组合键，中文输入也受影响。
- **重要性**: 终端 UX 层面的关键缺陷，影响用户对应用稳定性的感知。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/30920)

### #30831 — `opencode completion` 输出被截断，生成无效 zsh 脚本（已关闭）
- **评论**: 3 | **👍**: 0
- **摘要**: `opencode completion` 在输出中途截断，生成的 zsh 脚本不完整，`eval "$(opencode completion)"` 模式会直接损坏用户 shell 环境。
- **重要性**: 影响 shell 集成安装流程且具有破坏性，属于工具链基础功能缺陷。
- [GitHub 链接](https://github.com/anomalyco/opencode/issues/30831)

## 4. 重要 PR 进展

### #40561 — chore: sync upstream-20260805（开放中）
- **作者**: androidand | **更新**: 2026-08-05
- **摘要**: 上游同步：205 个新 refs，领先 origin/dev 超过 20 个 commit。
- **重要性**: 说明项目在上游分支基础上持续快速演进。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40561)

### #40126 — feat(session): support Gemini image generation（开放中）
- **作者**: Eric-Guo | **更新**: 2026-08-05
- **摘要**: Gemini 可以返回内联图像数据，但 V2 未将其传递到会话管线。该 PR 补全了这一链路，Closes #40124。
- **重要性**: 新模型能力接入，扩展 OpenCode 多模态支持。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40126)

### #40537 — fix(opencode): make xAI OAuth device-only（已关闭）
- **作者**: rekram1-node | **更新**: 2026-08-05
- **摘要**: 移除 xAI loopback OAuth，改用 RFC 8628 设备流，支持本地和远程使用，同时移除 loopback server、PKCE 和 CORS 相关代码。
- **重要性**: 简化认证架构，提升远程场景可用性，减少维护面。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40537)

### #40541 — fix(llm): parse cache_creation_tokens from OpenAI-compat usage（已关闭）
- **作者**: nicole-liu-sh | **更新**: 2026-08-05
- **摘要**: OpenAI Chat 协议的 `mapUsage` 未解析 `prompt_tokens_details` 中的 `cache_creation_tokens`，导致 `cacheWriteInputTokens` 在 OpenAI-compatible 路径上始终为 0。该 PR 修复此问题，并添加了回归测试。
- **重要性**: 修复了通过代理（如 LiteLLM）使用时缓存计费不准确的问题，对成本跟踪很重要。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40541)

### #40558 — fix(core): unify patch path resolution（开放中）
- **作者**: kitlangton | **更新**: 2026-08-05
- **摘要**: 使用共享的 `LocationMutation` 路径规划契约处理 patch 源和移动目标，使 patch 授权和路径行为与 edit/write 保持一致。
- **重要性**: 统一路径解析逻辑，修复 patch 与 edit/write 行为不一致的边界情况，包括 symlink 和缺失祖先目录。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40558)

### #40545 — fix(opencode): add model attribution to run --format json step events（开放中）
- **作者**: macurandb | **更新**: 2026-08-05
- **摘要**: `step_start` / `step_finish` 事件缺少 model 字段，导致 headless consumer 无法按模型归因 token 或成本。Closes #40544。
- **重要性**: 完善 JSON 输出的可观测性，对自动化流水线和成本分析有价值。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40545)

### #40547 — fix(ai): derive Anthropic tool finish reason（开放中）
- **作者**: opencode-agent[bot] | **更新**: 2026-08-05
- **摘要**: 跟踪解析状态中已解码的客户端执行 Anthropic 工具调用，将 `end_turn`、`stop_sequence` 或缺失 reason 规范化为 `tool-calls`，同时保留 Anthropic 原始值在 `raw` 中。
- **重要性**: 规范 Anthropic 工具调用的完成语义，修复因 finish reason 不明确导致的会话中断。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40547)

### #40546 — fix(ai): preserve Gemini tool finish semantics（已关闭）
- **作者**: opencode-agent[bot] | **更新**: 2026-08-05
- **摘要**: 即使 Gemini 响应省略了 `finishReason`，只要解析到客户端工具调用，就将响应规范化为 `tool-calls`。同时保留 token、安全、无效输出等前置优先级。
- **重要性**: 避免因 Gemini 缺失 finishReason 导致工具调用异常终止。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40546)

### #40549 — fix(ai): classify malformed Responses tool calls（已关闭）
- **作者**: opencode-agent[bot] | **更新**: 2026-08-05
- **摘要**: 区分成功解码的 Responses 函数调用与畸形函数输入；仅含畸形客户端工具输入的响应规范化为 `error` 而非 `tool-calls`。
- **重要性**: 提高错误分类准确性，避免误将错误当作工具调用边界。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40549)

### #40551 — feat(tui): streamline tab navigation shortcuts（已关闭）
- **作者**: kitlangton | **更新**: 2026-08-05
- **摘要**: 采用 Slack/Mattermost 的会话 Tab 快捷方式约定：`Option+Up/Down` 切换上一个/下一个 Tab，`Option+Shift+Up/Down` 切换未读 Tab，同时保留 `Ctrl+Shift+Tab` / `Ctrl+Tab`。
- **重要性**: 改善多会话场景的导航体验，降低学习成本。
- [GitHub 链接](https://github.com/anomalyco/opencode/pull/40551)

## 5. 功能需求趋势

从近期 Issues 和 PR 中可以提炼出以下社区最关注的功能方向：

- **语音输入与听写支持**：多个 Issue（#4695、#9264、#11345）以及 #17425、#18226 均围绕插件化语音输入展开。虽然已存在浏览器原生语音识别方案，但插件扩展性受限，社区需要更底层的 API 支持。

- **子 Agent（Subagent）可视化与配置**：#22233 要求 UI 中展示子 Agent 运行状态（哪个在跑、在做什么、已运行多久）；#29626 提出 Agent 预设（presets）概念，避免每次手动配置。两者都指向子 Agent 体验的系统性优化。

- **远程服务器集成**：#17322 要求自动附加到远程 `opencode serve` 实例，减少手动操作。远程开发场景需求明确。

- **权限与循环控制可配置化**：#23531 要求 `doom_loop` 重复阈值可配置，当前硬编码的行为不能满足多样化的工具循环场景。

- **模型兼容性与提供商适配**：Issue 中反复出现模型不可用（#30951: nemotron-3-ultra-free 不支持）、模型列表变动（#30934: Opus 4.8 消失）、schema 不兼容（#28704）等问题；PR 侧密集修复 Anthropic/Gemini/OpenAI-compatible 的工具调用语义。社区对"写一次，处处运行"的模型抽象层有极高需求。

- **桌面端体验细节**：RTL 支持（本次 release 修复）、多标签导航（#40551）、Escape 聚焦输入框（#30887）等 UX 微优化持续涌现。

## 6. 开发者关注点

从 Issue 讨论和问题反馈中提炼的高频痛点：

- **计费与配额错误频发**：#27593（402 Insufficient Balance）和 #30950（订阅后仍报余额不足）是近期讨论热度最高的一类问题，涉及模型计费展示与实际扣费逻辑的不一致，以及免费/付费模型判定错误，直接导致用户无法正常使用，严重影响信任度。

- **会话挂起与无响应**：多个 Issue（#33028、#34214、#30862）都指向同一类问题——工具调用后流式请求既不完成也不超时，界面冻结，只能手动杀掉进程。这类问题复现路径多样、跨模型出现，是最影响日常体验的 bug 类别。

- **迁移与版本回退破坏数据**：#20118（降级后 SQLite 损坏）、#29799（Windows→WSL 数据库迁移后 Web UI 看不到会话）、#30963（migration 无条件下删除事件日志）均与数据持久化有关。开发者希望在升级/降级/迁移场景中获得更安全的兜底机制和清晰错误提示。

- **终端恢复能力不足**：#30920（异常退出后 raw mode 未恢复）、#30831（completion 脚本截断导致 shell 环境损坏）都是终端层面的"次生灾害"，一旦发生会直接破坏用户终端使用体验。

- **模型能力与目录一致性**：#30951（Zen 列出模型但请求时不可用）、#30934（升级后模型消失）说明模型目录与后端实际能力之间存在同步缺口，社区需要一个可靠的模型发现与验证机制。

- **RTL（从右到左）布局支持**：v1.18.13 修复了多组 RTL 问题，且有专门 PR（#40543）新增 RTL 开发技能文档。这表明项目已开始系统化支持阿拉伯语、希伯来语等 RTL 语言用户，并将其纳入开发流程规范。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-05

## 1. 今日速览

昨日社区最集中的讨论围绕 **Compaction 功能在企业版 Copilot / GHE 账号下大面积失败**（#6768、#7413、#7579），多个 issue 指向 421 与 "unknown stamp" 错误，正常对话不受影响。PR 侧则有多项新 Provider 接入（Cortecs、LLM Gateway）与 **可配置摘要模型** 的实现，#7553 在提出当天即被 PR #7602 关闭，社区响应速度很快。此外，Windows 支持问题被专门开帖征集反馈（#7547），mermaid 渲染需求也获得了对应 PR（#7624）。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

挑选了 10 个最有讨论价值或影响面最大的 Issue：

### 1. [#6768 [CLOSED] Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)
- **评论 19 / 👍 18**
- **影响面最广的 compaction 失败问题**：在 Copilot Enterprise 许可下压缩上下文会报 421 Misdirected Request（OpenAI 路径）或 Turn prefix summarization failed（Anthropic 路径）。该 issue 虽已关闭，但后续 #7413 #7579 又出现同类问题，说明企业级用户受影响较大。

### 2. [#7547 [OPEN] [Windows] How do you use Pi on windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)
- **评论 13**
- 维护者主动发起 Windows 使用问题征集帖，用于确定精力分配方向。Windows 是当前最大的平台痛点之一，从 #6817（find 通配符）、#7427（loadSkills RangeError）等可看出问题分散，这个 issue 将帮助维护者系统化梳理。

### 3. [#7161 [CLOSED] anthropic-messages never sends x-client-request-id, unlike all OpenAI paths](https://github.com/earendil-works/pi/issues/7161)
- **评论 10**
- Anthropic 路径缺少 `x-client-request-id` 请求头，导致按该 header 做会话亲和的网关（如双 Claude 账号轮询代理）无法正确分组会话。对使用网关的用户而言这是实际阻碍。

### 4. [#5023 [CLOSED] bug: terminal scrolls to beginning without reason](https://github.com/earendil-works/pi/issues/5023)
- **评论 11**
- 终端在模型输出过程中随机跳转到会话开头再快速滚动到底部，虽未复现固定步骤，但评论数高，说明类似体验问题并非个例。可能与 TUI 差分渲染器有关（见 #7616 的详细分析）。

### 5. [#7465 [OPEN] Add payload size to iTerm2 inline images](https://github.com/earendil-works/pi/issues/7465)
- **评论 7**
- iTerm2 的 OSC 1337 序列缺少 `size=` 参数，导致 `@xterm/addon-image@0.9.0` 静默拒绝渲染图片，Pi 在 xterm.js 终端里无法显示内联图片。PR #7612 已提交修复。

### 6. [#7413 [OPEN] Compaction fails on GHE.com enterprise accounts — "unknown stamp" error](https://github.com/earendil-works/pi/issues/7413)
- **评论 6**
- `/compact` 在 GHE.com 企业账号上每次失败，报 `unknown stamp "prod-cus-01"`。与 #6768 同属 compaction 企业版故障簇，正常对话可用，仅压缩失败，用户无法梳理长会话。

### 7. [#7244 [OPEN] Enhance `version` to show runtime (bun|node|deno ...)](https://github.com/earendil-works/pi/issues/7244)
- **评论 6**
- 不少 issue 由 bun 运行环境引起，但用户往往只报 OS/终端信息，不报告运行时。提议在 `version` 输出中附带 bun/node/deno 信息，以便快速定位环境相关 bug。

### 8. [#7553 [OPEN] Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)
- **评论 6**
- 自动压缩无条件复用会话当前的 thinking level，导致使用推理模型时摘要成本与主对话绑定。希望为压缩单独配置模型与思考级别。该需求在一天内被 PR #7602 实现并关闭。

### 9. [#7128 [CLOSED] [bug] New default PI_* guideline in system prompt over-encourages unnecessary bash calls](https://github.com/earendil-works/pi/issues/7128)
- **评论 6**
- 系统提示新增“检查 PI_* 环境变量”指令后，agent 倾向于频繁执行 `env` 类 bash 命令，即便任务不需要这些信息。这拖慢了任务执行并产生噪音输出，社区反馈较强烈。

### 10. [#7508 [CLOSED] OAuth refresh has no request timeout — freezes session for ~5 minutes](https://github.com/earendil-works/pi/issues/7508)
- **评论 5**
- 会话中途 token 刷新如果卡住（弱网/代理半开连接），会在跨进程凭据锁上挂起约 5 分钟，期间整个会话冻结。该问题对网络不稳定的用户影响严重，修复方向是给 OAuth 刷新加请求超时。

## 4. 重要 PR 进展

以下 10 个 PR 在功能、架构或修复层面值得关注：

### 1. [#7571 [CLOSED] feat(ai): add built-in Cortecs provider support](https://github.com/earendil-works/pi/pull/7571)
- 新增欧洲 AI 路由提供商 **Cortecs**（类似 OpenRouter），基于 models.dev 自动同步模型列表。欧洲用户多一个合规且可用的 provider 选择。

### 2. [#7610 [OPEN] feat(ai): add LLM Gateway and LLM Gateway DevPass providers](https://github.com/earendil-works/pi/pull/7610)
- 新增 OpenRouter 风格路由器 **LLM Gateway** 及其 DevPass 订阅作为内置 `openai-completions` provider。替代了先前被自动关闭的 #7480，继续推进该集成。

### 3. [#7602 [OPEN] feat(coding-agent): configurable summarization models](https://github.com/earendil-works/pi/pull/7602)
- 为 compaction 和分支摘要提供独立的模型 + thinking level 配置，并正确处理压缩时的 context window 限制。**直接关闭 #7553**，是社区高需功能。

### 4. [#7396 [CLOSED] feat(coding-agent): add server session backend](https://github.com/earendil-works/pi/pull/7396)
- 为 PiServer 增加持久化 session 后端（JSONL 存储 + 跨进程锁 + 崩溃恢复）。这是一个较大的架构增强，为 server 模式提供与 coding-agent 一致的状态管理能力。

### 5. [#7591 [CLOSED] refactor: update sqlite for lanes](https://github.com/earendil-works/pi/pull/7591)
- SQLite session 存储升级到 v2 harness 的 lane 语义：支持 lane 记录、移动、全局 facts 与分支缓存，并按表拆分分支缓存操作。为多分支/多 lane 会话铺路。

### 6. [#7612 [OPEN] fix(tui): add size param to iterm2 image encoder to support xterm.js image addon](https://github.com/earendil-works/pi/pull/7612)
- 修复 #7465：iTerm2 图片编码序列增加 `size=` 参数，满足 xterm.js 0.9.0 的校验，解决内联图片在 xterm.js 中无法渲染的问题。

### 7. [#7624 [OPEN] feat(coding-agent): render Mermaid diagrams](https://github.com/earendil-works/pi/pull/7624)
- 为 markdown 渲染 Mermaid 图表的实现（闭 #7623），帮助开发者在终端里直接查看架构图/流程图，减少“人眼看图”的成本。

### 8. [#7632 [OPEN] fix: retry transient management HTTP requests](https://github.com/earendil-works/pi/pull/7632)
- 对 pi.dev、gh releases、tools 等幂等管理请求增加重试，修复 #6675（管理接口瞬时失败导致的工具/版本获取异常）。不限制单次尝试超时，避免慢网络上延长等待。

### 9. [#7619 [OPEN] feat(coding-agent): resume failed turn by selecting it in /tree](https://github.com/earendil-works/pi/pull/7619)
- 在 `/tree` 里选中“已失败/已中断”的 assistant 条目可以直接重试该轮，错误记录保留在历史中，重试结果接在其下方。改善长会话中断恢复体验（闭 #7609）。

### 10. [#7621 [CLOSED] feat(rpc): expose argument completions via get_argument_completions](https://github.com/earendil-works/pi/pull/7621)
- 新增 RPC 命令 `get_argument_completions`，让嵌入客户端（如 Web UI pi-livecraft）能获取斜杠命令的子命令/参数补全，将 TUI 的自动补全能力开放给外部前端。

## 5. 功能需求趋势

从近期 Issue 和 PR 中可以提炼出以下社区关注方向：

- **企业级 / 托管服务兼容性**：Copilot Enterprise 与 GHE.com 的 compaction 失败占近期问题比例极高；同时 Cortecs、LLM Gateway 等新 provider 持续加入，表明企业用户和路由服务生态是扩展重点。
- **压缩机制的精细化控制**：#7553 的快速实现（PR #7602）说明用户希望把压缩作为一种可独立配置的“管道”，而不是简单复用会话参数。
- **模型生态扩展**：Grok 4.5 在 Copilot Business 不可见（#7560）、Deepseek 的 role 兼容问题（#7603）、Qwen Token Plan Individual 官方 provider（#7631）——社区对模型覆盖广度非常敏感。
- **终端 UI 与渲染能力**：mermaid 渲染、iTerm2/xterm.js 图片支持、TUI 滚动/跳转问题是持续的改进方向，涉及终端适配的细节工作。
- **可观测性与调试体验**：`version` 命令展示 runtime（bun/node/deno）、OAuth 错误信息脱敏（PR #7605）都反映了开发者在排查问题时的真实痛点。
- **RPC / 嵌入能力**：`get_argument_completions`、RPC over sockets（#7599）、暴露 provider 认证（#7590）表明社区正在把 Pi 从一个独立 TUI 工具向“可嵌入的 agent 内核”方向推进。

## 6. 开发者关注点

综合反馈中的高频痛点：

- **Compaction 是企业用户的头号问题**：421 Misdirected Request、unknown stamp 等多个错误码同时出现，且正常对话可用、仅压缩失败，导致长会话无法收敛，影响非常直接。
- **Windows 平台短板明显**：find 工具路径分隔符兼容、skills 加载 RangeError、终端滚动异常——Windows 用户需要更系统的适配，而非零散修复。
- **错误处理体验需打磨**：#7613 指出成功重试后仍残留红色 error 行让用户误判请求失败；#7508 的 OAuth 无超时问题则会直接卡死会话数分钟。
- **配置合并逻辑存在反直觉行为**：#7572 中项目级 `retry.provider` 直接覆盖全局对象而非递归合并，这会让用户以为的“局部覆盖”变成“全部丢失”。
- **依赖供应链安全**：#7628 披露 0.83.0 shrinkwrap 锁定存在已知漏洞的 `undici@8.5.0` 与 `brace-expansion@5.0.7`，建议尽快升级依赖并重新发布。
- **模型可见性与配额不一致**：#7560 中 Grok 4.5 在 Copilot Business 订阅列表里消失，暴露出不同订阅等级下模型准入逻辑的不可预测性。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 - 2026-08-05

## 今日速览
今日发布了两个预览/夜间版本（v0.21.6-preview.0 与 v0.21.5-nightly），主要包含浏览器扩展的 alpha 就绪诊断与 headless Goal 工作流文档。社区讨论集中在确定性工具执行边界（安全）、ACP/IDE 集成完整性、以及 MCP SSE 传输挂起问题上，释放了明显的稳定性信号。

## 版本发布

- [v0.21.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6-preview.0)
  - feat(browser-ext): add alpha readiness diagnostics by @yiliang114 in #6739
  - docs: document headless Goal workflows by @DragonnZhang
- [v0.21.5-nightly.20260805.32e274157](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.5-nightly.20260805.32e274157)
  - 包含上述相同的两项变更

## 社区热点 Issues

1. [#8102 [P3 安全] 确定性工具执行边界 —— 可信 Agent 运行时提案](https://github.com/QwenLM/qwen-code/issues/8102)
   - 评论 17 条，为当前讨论度最高 Issue。社区持续关注如何让运行时确定性约束、授权、观察与评估模型动作。

2. [#8519 [P2 Bug] tmux 中使用 qwen code 闪屏严重](https://github.com/QwenLM/qwen-code/issues/8519)
   - 11 条评论，影响 Linux 交互式终端用户，复现简单、反馈集中，属高频体验痛点。

3. [#8051 [P2 性能] 多工作区 daemon 资源使用边界跟踪](https://github.com/QwenLM/qwen-code/issues/8051)
   - 9 条评论，持续讨论中。仅靠数量限制无法约束请求体、WebSocket 组装等内存占用。

4. [#8136 [P2 安全] Provider 警告清理器截断含端口消息、泄露含 @ 密码](https://github.com/QwenLM/qwen-code/issues/8136)
   - sanitizeProviderWarning 存在两个由同一根因导致的 bug，涉及 /status 明文泄露风险。

5. [#8532 [P3 CI] 模拟磁盘满的错误日志被误读为 runner ENOSPC](https://github.com/QwenLM/qwen-code/issues/8532)
   - 错误路径单测故意抛出的 Error 被生产代码捕获后输出，流式写入 CI 日志造成误判。

6. [#8356 [P2 Bug] APIUserAbortError 后本地 session transcript 不再写入新轮次](https://github.com/QwenLM/qwen-code/issues/8356)
   - 影响 ACP/Web bridge 会话中的恢复与记录完整性，更新于 08-04。

7. [#8550 [P2 Bug] qwen mcp list 在 SSE server 未发送 endpoint 时无限挂起](https://github.com/QwenLM/qwen-code/issues/8550)
   - 新 Issue，无超时边界导致命令永久阻塞，PR #8555 已针对此提交修复。

8. [#8533 [P2 核心] Content[]/Part[] 无法安全编码按 provider 区分的推理回放契约](https://github.com/QwenLM/qwen-code/issues/8533)
   - 一个基础性问题，影响多 provider 推理过程的可靠回放，社区反响积极、讨论深入。

9. [#8544 [P2 ACP 集成] JetBrains 中 ACP Task List 不渲染](https://github.com/QwenLM/qwen-code/issues/8544)
   - 与 Claude Code/Codex 对比的差距，涉及 plan 更新、任务列表在前端呈现，社区呼声较高。

10. [#8452 / #8463 [P2 性能] 大小触发式微压缩反复使 prompt cache 失效](https://github.com/QwenLM/qwen-code/issues/8452)
    - 滚动重写稳态使 500k 字符阈值后 prompt 缓存几乎失效，直接影响长会话成本；#8463 为同一根因的姊妹 Issue。

## 重要 PR 进展

1. [#8414 fix(webui): 实时日志截断后恢复完整轮次](https://github.com/QwenLM/qwen-code/pull/8414)
   - 不改变 10k 事件/8 MiB 限额，但引入权威 prompt 归属标记，改善 SDK 消费方体验。

2. [#8512 feat(omni): 图像/音频/URL 输入扩展与 token 维度传输守卫](https://github.com/QwenLM/qwen-code/pull/8512)
   - omni 实验 S2 切片，覆盖完整模态输入面，含 URL 媒体源与二次归一化触发点。

3. [#8440 feat(channels): 群组配对支持](https://github.com/QwenLM/qwen-code/pull/8440)
   - 为群聊引入 stable chat ID 批准流程，保留发起人审计上下文，审批与用户级 approval 分离。

4. [#8350 feat(voice): 受信私有 ASR 基础 URL 白名单](https://github.com/QwenLM/qwen-code/pull/8350)
   - 默认拒绝非安全语音 URL，新增空列表精确 allowlist 以支持私有网络网关。

5. [#8442 fix: 为 proper-lockfile 调用添加 onCompromised 处理器](https://github.com/QwenLM/qwen-code/pull/8442)
   - 防止锁丢失时 daemon 进程崩溃，改为日志警告。

6. [#8490 feat(review): 测试 diff 的逆向依赖闭包，失败时回退全量套件](https://github.com/QwenLM/qwen-code/pull/8490)
   - 将 13–16 分钟 review 构建测试关键路径缩短至按 diff 依赖范围执行。

7. [#8423 feat(serve): 基于真实分母观测 daemon 与子进程内存](https://github.com/QwenLM/qwen-code/pull/8423)
   - 吸收 #8462 与 #8508 两个栈式依赖 PR，建模但暂不强制实施子进程堆分区。

8. [#8425 feat(core): Gemini 与 Vertex AI 共享压缩缓存](https://github.com/QwenLM/qwen-code/pull/8425)
   - 复用主会话前缀以利用 Google GenAI provider 托管隐式缓存，冷压缩路径保留为回退。

9. [#8482 fix(core): 从未投递的 MCP 调用应视为首次投递，而非重放](https://github.com/QwenLM/qwen-code/pull/8482)
   - 修复 main 分支自 #8387 合入后确定性失败的 auto-reconnect 测试。

10. [#8555 fix(cli): MCP SSE 静默启动超时](https://github.com/QwenLM/qwen-code/pull/8555)
    - 对整个连接尝试施加墙钟超时，到期走既有错误路径关闭传输，直接解决 #8550。

## 功能需求趋势

- **ACP / IDE 集成补齐**：连续提交了 #8513、#8514、#8542、#8546、#8544 等一揽子 ACP 相关请求，涵盖 usage_update 帧、reasoning effort 暴露、排队消息发送、session_info_update 帧与 task list 渲染，反映 JetBrains 用户的实际使用差距。
- **守护进程资源可控性**：沿 #8051、#8182 跟踪 daemon 与子进程的内存上限、ACp 子进程 V8 old-space 分配、按子进程数做除法等诉求。
- **MCP 可靠性**：SSE 无响应超时（#8550）与日志误报（#8532）是当前 MCP 生态最集中的问题点。
- **长会话与缓存稳定性**：微压缩不停促使缓存失效（#8452、#8463）以及 abort 后转录中断（#8356）持续被提上日程。

## 开发者关注点

- **JetBrains 集成体验**：ACP 会话中任务列表、上下文用量、消息排队与标题同步等多项功能对比其他 agent 存在缺口，希望尽快对齐。
- **长轮次转录/恢复一致性**：APIUserAbortError 后轮次丢失影响真实工作流，开发者期望回放/恢复行为可预期。
- **MCP 服务器过慢时无超时**：qwen mcp list 可永久挂起，单一 SSE endpoint 未返回即可卡死命令，开发者对兜底超时诉求强烈。
- **tmux 等终端兼容性**：闪屏问题在 Linux/tmux 场景高频出现，影响日常可用性。
- **安全与凭据处理**：Provider 警告对含特殊字符密码的暴露与截断问题，促使社区审视 /status 信息输出边界。
- **编辑可靠性回溯**：老 Issue #2460（edit failed 损坏代码）再次被更新，用户仍高度关注字符串匹配与工具调用的正确性回归。
- **CI 日志清洁度**：模拟错误被误读为 runner 环境故障，干扰 CI 故障定位。

---
以上日报基于 2026-08-05 GitHub 数据生成，Issue/PR 链接均指向 QwenLM/qwen-code 仓库对应条目。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-08-05）

## 今日速览

- 维护者集中提交 #5245–#5249 共 6 个构建性能 Issue，正式将「编译时间税」列为 v0.9.5 Epic；社区开发者也在 #4991 中表达了对 `codewhale-tui` 单体 crate 编译耗时的共鸣。
- v0.9.4 release train（#5135）已领先 `main` 77 个提交，Runtime API 扩展、MCP 管理与子代理恢复等一批增强 PR 正密集进入整合窗口。
- 上下文窗口静默降级（#5239/#5244）、多 API Key 管理（#5250）、File 编辑工具假成功（#5209）等可用性问题，成为社区反馈最集中的 Bug 类别。

## 版本发布

过去 24 小时内无新 Release。

## 社区热点 Issues

1. **[#4991] 讨论：编译时间与 TUI crate 单体问题** — 开发者在做 slash command 重构时持续等待编译，指出 `codewhale-tui` 占工作区 86% 体量（682,959 行/620 文件）且整体重编译；评论区 4 条互动，普遍感同身受。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4991)

2. **[#5249] Epic: v0.9.5 build-time lane（构建性能系列）** — 维护者一次性开出 6 个 Issue：git commit 触发全量 rebuild（#5245）、release profile 分层（#5246）、25 个集成测试二进制（#5247）、708 包依赖图裁剪（#5248）及总 Epic（#5249），将编译性能列为下版头号工程。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/5249)

3. **[#5244] 未知模型 ID 静默降级到 128K legacy context** — 维护者自述是 #5239 的残余类 bug：`context_window_for_model` 不认识新 ID 时，会无提示回落到 128K 默认值，1M 窗口模型被悄悄压缩；0.9.4 已缓解但未根治。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/5244)

4. **[#5239] 模型支持 1M 上下文，但工具只在 128K 触发压缩** — 用户附截图质疑：应支持显式设置 1M，而不是频繁执行上下文压缩；维护者已在 #5244 中承接修复合入 0.9.4。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/5239)

5. **[#5250] 只能保存一个 API Key** — 同时使用 DeepSeek 与 GLM 时，每次切换都要重新获取 key；希望按 provider 分别保存，而非覆盖旧 key。该 Issue 创建于今日，1 条评论。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/5250)

6. **[#5209] File(action=edit) 接受错误参数名并报告假成功** — 使用 `new_str` 等非标准参数时工具不报错，反而返回「Replaced」，实际文件未变更；导致每个位置需 3–5 次重编辑。评论 3 条，开发者反馈强烈。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/5209)

7. **[#4955] 请求 zero-sandbox / --no-sandbox 本地开发模式** — 内核级 Seatbelt 沙箱每天破坏 shell 命令，用户已穷尽 workaround，要求完全禁用沙箱；获得 1 👍 与 4 条评论。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4955)

8. **[#4978] Anthropic 兼容 API 偶发 HTTP 400 错误** — 使用 OpenModel 作为 Anthropic 兼容 provider 时，`'type' must be in ["enabled", "disabled", "auto"]` 错误无规律反复出现，重试可过但不稳定；6 条评论是今日 Issue 中互动最多。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/4978)

9. **[#5241] Pricing endpoint 返回 503，会话全部显示 unverified_live_pricing** — 从 0.8.67 升到 0.9.3 后成本显示失效，三种不同 provider/route 全部无定价；用户怀疑与 live pricing 接口兼容性有关。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/5241)

10. **[#5243] OAuth 登录后未采用刚铸造的 token** — 维护者 live dogfood 实测：完成 xAI 设备登录后会话仍未拿到凭证，必须回到 provider picker 手动按 `e`；要求登录流程一次到位。 [GitHub](https://github.com/Hmbown/CodeWhale/issues/5243)

## 重要 PR 进展

1. **[#5135] release: Codewhale v0.9.4 release train** — v0.9.4 整合主干，当前 77 commits ahead of `main`，包含 2026-08-01 全部 source candidate；替代早期 #5044，是当前发布状态的唯一入口。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5135)

2. **[#5242] feat(tui/subagent): 通过 followup 从 checkpoint 恢复中断子代理** — `interrupted_continuable` 子代理此前只保留 checkpoint 与 `continuation_handle`，无法真正续跑；本 PR 打通文档审查、多步搜索等长任务的中断恢复路径。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5242)

3. **[#5225] feat(acp): 通过 session/prompt 暴露 file/search/git/patch/shell 工具** — ACP server 此前只流式输出文本、不执行模型请求的工具调用，导致 Zed 等编辑器只能获得「聊天式 agent」；本 PR 让 ACP 驱动的 CodeWhale 具备真实代码编辑能力。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5225)

4. **[#5133] feat(runtime-api): 暴露持久 goal-loop 状态与完成控制** — v0.9.4 Runtime API 缺少 goal 资源；新增 `GET /v1/threads/{id}/goal` 等端点，使托管客户端可读取活动目标并驱动生命周期转换。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5133)

5. **[#5132] Runtime API: 暴露 verifier receipts 与 evidence** — 原来只有 `verifier_failed` 聚合计数器；新增 `/v1/fleet/runs/{run_id}/receipts` 等三个只读端点，可定位失败任务、原因并判断是否重试。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5132)

6. **[#5131] feat: Runtime API memory 端点** — 新增 `/v1/memory` 路由，提供有界的内存检查、作用域/来源查看与生命周期控制，补齐 Runtime API 对记忆的观测能力。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5131)

7. **[#5240] feat(tui/shell): 在工具内容中呈现真实 wait 耗时** — `duration_ms` 此前只存在工具元数据中、模型不可见；所有 wait 结果看起来完全相同，导致模型误判等待策略。本 PR 将真实耗时注入工具结果。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5240)

8. **[#5238] feat(mcp): MCP Registry 发现 + Registry-first 工具选择** — 模型在调用 `exec_shell`、自定义代码前，先查询公共 MCP Registry 寻找匹配的零环境 stdio server，减少手动实现倾向。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5238)

9. **[#5234] fix(tui): 鼠标捕获激活期间保持 alternate scroll off** — 修复对话内容超出屏幕时滚轮无法滚动 transcript、反而切换输入历史的 bug（#5223）；根因是 `recover_terminal_modes()` 同时启用了鼠标捕获与 xterm alternate-scroll。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5234)

10. **[#5095] fix(ohos): 重新引用包含空格的 Windows linker 参数** — rustc 将含空格的 Cargo linker 参数作为带引号字符串传递，但 cmd 的 `%*` 展开会剥掉引号；OpenHarmony SDK 在默认 `D:\DevEco Studio\...` 路径下 `--sysroot` 被错误拆分。 [GitHub](https://github.com/Hmbown/CodeWhale/pull/5095)

## 功能需求趋势

- **构建性能成为第一优先级**：维护者与社区共同聚焦编译时间，方向包括拆分单体 crate、解耦 git commit 与全量重建、release profile 分层（dist vs local gate）、合并集成测试 harness、裁剪 708 包依赖图。
- **沙箱走向灵活性演化**：从「强制沙箱」到「零沙箱模式」（#4955）、文件系统路径白名单（#5005，已关闭但代表明确需求），本地开发场景要求按需放开限制。
- **上下文窗口透明化**：未知模型 ID 不得静默降级到 128K，须显式提示 fallback 或允许用户配置 1M 窗口；维护者确认 0.9.4 已含缓解逻辑。
- **多 Provider / 多 Key 管理**：API key 按 provider 分离保存成为切换 DeepSeek、GLM、xAI 等模型的基础诉求。
- **可编程性持续扩展**：Runtime API 大批新增端点（goal、verifier receipts、memory、MCP server 配置、技能生命周期），配合 ACP 工具执行与 MCP Registry 优先策略，正在将 CodeWhale 从交互式 TUI 推进为可编程 agent 运行时。
- **子代理长任务恢复**：checkpoint 不只是「保留现场」，还要能被 followup 真正恢复执行（#5242），意味着长任务中断后可以低成本续跑。

## 开发者关注点

- **编译时间是最严重的日常摩擦**：单体 crate 68 万行，本地任意 commit 都会触发 TUI+CLI 全量重建，发布前还要承担 fat LTO 开销；维护者已集中排期解决。
- **工具「假成功」比报错更具破坏性**：File edit 接受错误参数名却报告替换成功；wait 耗时对模型不可见导致等待判断失真。这两类问题直接削弱模型对工具的信任。
- **沙箱对本地开发干扰过大**：Seatbelt 内核沙箱频繁破坏 shell 命令，已有用户为日常开发要求彻底关闭沙箱。
- **上下文窗口静默降级伤害信任**：1M 窗口模型在 128K 触发压缩且无任何提示，用户需自行排查才意识到 fallback 机制的存在。
- **OAuth 与成本显示等「最后一公里」体验欠佳**：OAuth 登录后不自动采用新 token；升级后定价接口 503 导致全部会话无成本数据，用户对可靠性的感知明显下降。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*