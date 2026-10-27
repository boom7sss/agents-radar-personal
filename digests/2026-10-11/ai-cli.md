# AI CLI 工具社区动态日报 2026-10-11

> 生成时间: 2026-10-11 09:18 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-11）

## 1. 生态全景

当前 AI CLI 工具生态整体处于"功能快速扩张、稳定性债务集中暴露"的阶段：今日 9 个工具中仅 OpenCode、Qwen Code 发布新版本，其余全部零 Release,社区讨论高度集中于阻断性缺陷而非新能力。**跨平台可靠性（尤其 Windows）与沙箱隔离误伤**成为最普遍的共同痛点，Claude Code、OpenAI Codex、GitHub Copilot CLI 三家均出现"命令在请求前即失败"级别的阻断问题。与此同时，**上下文管理与长会话正确性**（压缩、transcript、token 预算）在几乎所有工具的讨论中高频出现，说明 agent 的"记忆层"正取代单纯的模型能力成为竞争焦点。多 Agent / 子代理体系的语义正确性与可观测性是 Qwen Code、Gemini CLI 的主战场，而 v1→v2 迁移摩擦则集中体现在 OpenCode。

---

## 2. 各工具活跃度对比

| 工具 | Issues 动态 | PR 动态 | Release | 数据完整度说明 |
|---|---|---|---|---|
| **Claude Code** | TOP 10 + 多条关闭（#57295 等 8 条） | 2 条（1 OPEN / 1 CLOSED） | 无 | 高热老 Issue 持续（#26302 评论 49、#62699 👍76） |
| **OpenAI Codex** | TOP 10，带 windows-os 标签占绝大多数 | 11 条**全部 CLOSED**，作者均为 copyberry[bot] | 无 | Windows 沙箱问题 #51601 评论达 120 |
| **Gemini CLI** | TOP 10（多为 agent 可靠性） | 10 条（5 OPEN / 5 CLOSED，含 4 条性能优化） | 无 | 性能 PR 有明确基准数据（如 291.95ms→10.26ms） |
| **GitHub Copilot CLI** | 20 条更新，精选 10 条 | **0 条** | 无 | 当日关闭多项历史遗留（#2494 等 6 条） |
| **Kimi Code CLI** | **0 条** | 1 条（CLOSED，文档类） | 无 | 低活跃，仅文档补充 |
| **OpenCode** | TOP 10 + 新增 triaging 多条 | 10 条（含生态重提交 4 条） | **v1.19.0** | #8501 👍244、#27167 👍153，全站点赞最高 |
| **Pi (pi-mono)** | TOP 10 | 6 条（全部可归纳） | 无 | 稳定性类 Issue 热度最高（#10031 评论 28） |
| **Qwen Code** | TOP 10（Managed Agent 主线） | 10 条 + 进行中多条 | **v0.25.1-preview.2** 与 nightly | #12380 评论 51，架构设计类讨论最集中 |
| **DeepSeek TUI** | 8 条（全部列出） | 4 条（全部列出） | 无 | 含 3 条 `needs-triage` 新问题 |

> 注：Kimi Code CLI 与 OpenCode 为仅有的两条 Release 相关动态来源，前者实际无 Release、仅 1 条文档 PR；数据均严格取自所提供材料，未作外部补充。

---

## 3. 共同关注的功能方向

### 3.1 上下文 / 长会话正确性（覆盖 6+ 工具）
- **Claude Code**：`/compact` 二次执行导致 transcript 二次增长（#92089）；assistant 文本静默丢失（#80662，已关闭）。
- **OpenAI Codex**：压缩过程中 `retain: true` 的客户端工具输出仍被裁剪（PR #52937）。
- **Gemini CLI**：多笔 PR 优化历史压缩与快照查找（#29517、#29512、#29515、#29516）。
- **OpenCode**：自动压缩后 agent 不再确认、丢失原始目标（#41358）。
- **Qwen Code**：token 管理缺少 recall / task-success 门（#12333）、工具结果大小核算（#13652）。
- **Pi**：GPT-6 Astra 压缩触顶摘要输出上限（#9512）。

### 3.2 沙箱 / 权限策略的可解释性与灵活性（覆盖 3+ 工具）
- **Claude Code**：Auto mode 分类器拒绝常规代码编辑（#101202）；worktree guard 拒绝 pwsh/cmd（#97774）；沙箱在大目录下冻结输入（#99976）。
- **OpenAI Codex**：Windows 沙箱共享冲突（#51601 / #51969）；`exec_command` 被拒却无解释（#50884）；希望规则支持更强 Starlark（#15214）。
- **Pi**：`node --watch` 下沙箱桥接中断（#10726）。

### 3.3 子代理 / 多 Agent 语义正确性
- **Gemini CLI**：子代理触及 MAX_TURNS 却报 GOAL 成功（#22323，"假成功"最危险）；模型不愿主动使用 skills/sub-agents（#21968）。
- **Qwen Code**:agent 身份维度（#13785）、任务取消与子任务事件流（#13746）、结果污染（#13874）。
- **Claude Code**：Auto mode 与沙箱误判阻断 agent 写码（#101202）。

### 3.4 TUI 可观测性与渲染
- **Claude Code**：图形协议内联图片（#79706）、浅色主题幽灵文本（#101207）、鼠标点击失效（#101200）。
- **GitHub Copilot CLI**：常驻上下文窗口用量（#1953，👍11）、OSC 7501 状态上报（#5112）。
- **DeepSeek TUI**：后台长任务不可见（#6944）、Bash 操作可检视可停止（#6931）。
- **Gemini CLI**：终端 resize 无闪烁渲染（#21924）。

### 3.5 认证 / 企业环境可用性
- **GitHub Copilot CLI**：企业托管策略刷新失败（#5109）、MCP OAuth issuer 校验被拒（#5082）、refresh token 轮换不当（#5079）。
- **DeepSeek TUI**：ChatGPT 登录因 originator 参数被拒（#6925）。

### 3.6 平台一致性（Windows 集中爆发）
Claude Code（#26302 UI 卡顿）、OpenAI Codex（沙箱/连接/Computer Use 全线）、GitHub Copilot CLI（git 启动失败 #5094、winget 冲突 #5096）、DeepSeek TUI（Windows 10 1607 启动崩溃 #6953）均指向 Windows 端成熟度缺口。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 桌面 + TUI 全工作流、插件/Skill 体系 | 广泛开发者，偏重日常编码 | 强沙箱隔离与分类器管控，核心痛点即管控过严 |
| **OpenAI Codex** | 桌面 App + Computer Use + 多 Agent | 注重 GUI 与浏览器自动化的团队 | 强调 app-server、durable chat、MCP 生态；Windows 可靠性欠账大 |
| **Gemini CLI** | 子代理体系、原生 bash 能力对齐 | Gemini 3 生态用户 | 主张顺应模型"原生 bash 用户"特性（#19873）、AST 感知工具（#22745） |
| **GitHub Copilot CLI** | 企业环境、MCP、IDE 集成 | 企业开发者（托管策略为主） | 自更新 + MCP OAuth + ACP 模式；企业链路是差异化重点 |
| **OpenCode** | TUI 交互、会话目标、插件钩子 | 开源社区、追求可控性的用户 | 即将进入 OpenCode 2，以 v1→v2 迁移为结构性主线 |
| **Pi (pi-mono)** | 扩展 SDK、多 provider 适配 | 扩展开发者、多模型用户 | 强调扩展 API 契约（#9432、#10705）、Linux 原生分发 |
| **Qwen Code** | Managed Agent 架构、Multi-Agent | 平台级/托管场景 | 架构最"重型"：slice 化交付、runtime-broker、worktree 管理 |
| **DeepSeek TUI** | 后台任务、Workflow 运行时 | 长任务/工作流用户 | 关注任务可见性与失败信息可操作性 |
| **Kimi Code CLI** | 文档与配置语义 | 早期用户 | 当前活跃度最低，仅补齐 AGENTS.md 语义文档 |

**核心分野**：Claude Code / Codex / Copilot CLI 走"**产品级强管控**"路线，以沙箱与策略保障安全，代价是误伤与阻断；Gemini CLI / Pi / OpenCode 走"**能力开放 + 扩展生态**"路线，代价是配置不生效与语义模糊；Qwen Code 走"**架构先行**"路线，投入最重但反馈聚焦设计而非体验。

---

## 5. 社区热度与成熟度

**高活跃 / 高热讨论**
- **OpenCode**：单项点赞最高（#8501 👍244、#27167 👍153），且为当日少数有 Release 的工具，社区驱动力最强。
- **Qwen Code**：架构设计讨论最深（#12380 评论 51），Issue/PR 双线密集，处于强架构迭代期。
- **OpenAI Codex**：单 Issue 评论峰值最高（#51601 评论 120），但反映的是稳定性危机而非生态繁荣。

**活跃但暴露成熟度缺口**
- **Claude Code / GitHub Copilot CLI**：老 Issue 长期悬置（#26302、#16579 👍53 自 4 月创建仍未解），且当日均有大量关闭项，处于"修复收敛与新增痛点并行的平台期"。

**快速迭代 / 架构推进期**
- **Qwen Code**（v0.25.1-preview + nightly 双线）、**OpenCode**（v1.19.0 指向 v2）、**Pi**（扩展 SDK 1.1.0 语义打磨）。

**低活跃**
- **Kimi Code CLI**：过去 24 小时 0 Issue、仅 1 条文档 PR，处于维护/静默期。

**成熟度信号**：OpenAI Codex 当日 11 条 PR 全部为 bot 提交且 CLOSED、GitHub Copilot CLI 当日关闭多项历史遗留（#2494、#4614、#3866 等），显示部分项目正从"止血"转向"清账"；而 Windows 与沙箱类问题的高评论量则说明基础可靠性仍是最大短板。

---

## 6. 值得关注的趋势信号

1. **"假成功"比失败更危险**：Gemini CLI 子代理中断报成功（#22323）、Codex 长回合重连后"未确认恢复即完成"（#52694）——调度层与用户都会据此做出错误决策。**建议**：为 agent 编排引入"终态可验证"契约，而非依赖 `status` 字段。

2. **强管控沙箱正在吞噬可用性**：三家主流工具均出现策略误伤（Claude Code #101202/#97774、Codex #50884/#49453、Pi #10726）。**建议**：安全策略需要"拒绝原因可操作 + 白名单可配置"，而非单向拦截。

3. **上下文层成为新的性能战场**：Gemini CLI 单日 4 笔数组复杂度优化（291.95ms→10.26ms、414.20ms→17.91ms）、Codex 保留策略修复、Qwen token 预算门，说明**长会话性能优化已有可量化收益**，是低成本高回报投入方向。

4. **Windows 成熟度是行业级缺口**：从安装、更新、沙箱到渲染，Windows 问题在 4 个工具中同时高频出现。**建议**：跨平台团队应将 Windows 纳入 CI 一等公民，而非事后补丁。

5. **v1→v2 迁移成本显性化**：OpenCode 生态插件因仓库迁 V2 重新提交（#54475、#54474 等 4 条）、环境变量兼容断裂（#36990），**建议**：破坏性升级需提供兼容层与迁移指南，否则将流失贡献者。

6. **企业认证链路是差异化高地**：Copilot CLI 的企业托管策略、MCP OAuth、refresh token 轮换问题反复出现，而其他工具几乎未触及。**建议**：面向企业市场的工具应将身份/证书/代理场景作为产品级能力。

7. **开发者已开始关注 token 成本**：Copilot CLI #5111（淘汰图像导致 prompt-cache 前缀反复重写）、Qwen 工具结果三层大小核算——**成本敏感度上升**，缓存效率正成为与功能并列的评价维度。

8. **高共识配置需求长期积压**：Codex 默认 shell（#16579 👍53）、聊天宽度（#16669 👍36）自 4 月创建至今 OPEN，提示**高赞低复杂度需求若长期不响应，会持续消耗社区信任**。

---

*本报告严格基于 2026-10-11 所提供九份社区日报整理，所有 Issue 编号、评论数、点赞数、版本号与链接均取自原始材料，未作外部补充或推测。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：github.com/anthropics/skills（截至 2026-10-11）

---

## 1. 热门 Skills 排行（按社区讨论热度）

> 注：所给 PR 数据的评论数字段均为 `undefined`，以下排序综合了 PR 更新频率、关联 Issue 热度与所属主题的社区关注度。

**① mcp-builder 兼容性修复（PR #1742）**
修复 `mcp>=2.0.0` 中 `streamablehttp_client` 重命名为 `streamable_http_client`、以及自定义 HTTP headers 需通过 `create_mcp_http_client` 配置的问题。关联 Issue #1668，是 MCP 生态升级后的刚需修复。
状态：OPEN | 链接：anthropics/skills PR #1742

**② skill-creator 触发评估隔离与跨平台修复（PR #1298）**
解决触发评估误报/无效评分：多 worker 命令探测冲突、Windows 下 subprocess pipe 的 `select()` 失败、无关工具中断扫描等。skill-creator 是社区反馈最密集的模块。
状态：OPEN | 链接：anthropics/skills PR #1298

**③ skill-creator eval viewer 安全加固（PR #1961）**
针对本地评估页面（渲染不可信模型输出）修复脚本注入、DNS rebinding、跨站 POST、HTML 转义三类安全缺口。与 Issue #1394（display-path XSS）呼应。
状态：OPEN | 链接：anthropics/skills PR #1961

**④ proofcore-contract-auditor：智能合约审计 Skill（PR #1771）**
面向 Web3 开发者，对 Solidity 与 Rust 智能合约做静态分析，并将审计证明锚定到 TON 区块链。
状态：OPEN | 链接：anthropics/skills PR #1771

**⑤ md2video-audio：Markdown 转视频（PR #1703）**
零成本将 Markdown 文档编译为带拟真人声配音的 MP4 视频。
状态：OPEN | 链接：anthropics/skills PR #1703

**⑥ notion-spec-to-implementation + quantitative-resume-auditor（PR #1245）**
前者把产品/技术规格拆解为可执行的 Notion 任务（含验收标准），后者为简历量化审计。
状态：OPEN | 链接：anthropics/skills PR #1245

**⑦ scnet-hpc：超算集群操作 Skill（PR #1615）**
通过 profile 化 SSH 与 Slurm 工作流操作 SCNet HPC 集群，覆盖连接、分区、内存、模块与加速器指引。
状态：OPEN | 链接：anthropics/skills PR #1615

**⑧ docx / webapp-testing / algorithmic-art 系列修复（PR #1792 / #1976 / #1977）**
LibreOffice 超时改为报错并校验输出（#1792）、元素发现正确报告 textarea/select（#1976）、`wrapAround()` 负数取模修正（#1977），均直接 Fixes 对应 Issue。
状态：OPEN | 链接：PR #1792 / PR #1976 / PR #1977

---

## 2. 社区需求趋势（来自 Issues）

- **官方命名空间与信任边界安全**（Issue #492，43 评论）：社区 Skill 以 `anthropic/` 名义分发，存在冒充官方 Skill、诱导用户授予高权限的风险。这是讨论量最高的议题。
  https://github.com/anthropics/skills/issues/492

- **组织内 Skill 共享 / 共享库**（Issue #228，16 评论，👍8）：期望 Claude.ai 支持组织级 Skill 共享，免去下载 `.skill` 文件再手动上传的流程。
  https://github.com/anthropics/skills/issues/228

- **评估与触发机制可靠性**（Issue #556 👍7、#1352 👍2、#1383、#1390、#1487）：`run_eval.py` 触发率 0%、多 worker 交叉匹配产生假阴性、benchmark 静默失败、`claude-api` 单次注入约 156k token 挤爆上下文——社区对评估工具链的正确性与上下文成本高度敏感。
  https://github.com/anthropics/skills/issues/556 ｜ /issues/1352 ｜ /issues/1487

- **Agent 治理与推理质量**：#412 提出 agent-governance（策略执行、威胁检测、信任评分、审计追踪，已 CLOSED）；#1385 提出三段式推理质量门（预任务校准 → 对抗评审 → 交付验证）。
  https://github.com/anthropics/skills/issues/412 ｜ /issues/1385

- **Skill 提案方向**：#1329 提出 compact-memory（面向长时运行 agent 的符号化紧凑状态表示），反映对上下文/记忆管理的诉求。
  https://github.com/anthropics/skills/issues/1329

- **文档类 Skill 与企业集成**：#189 指出 `document-skills` 与 `example-skills` 安装内容重复导致上下文重复；#1175 探讨通过 Agent Skills 处理 SharePoint Online 文档时的安全与上下文窗口问题。
  https://github.com/anthropics/skills/issues/189 ｜ /issues/1175

---

## 3. 高潜力待合并 Skills

以下 PR 仍在 OPEN，但更新活跃、与高热度问题强关联，可能近期落地：

| PR | 主题 | 亮点 |
|---|---|---|
| #1742 | mcp-builder 兼容修复 | 关联 Issue #1668，更新至 2026-10-08 |
| #1298 | skill-creator 触发评估隔离 | 更新至 2026-09-16，直击评估可靠性痛点 |
| #1961 | eval viewer 安全加固 | 创建于 2026-10-03，最新安全类贡献 |
| #1681 | skill-creator 脚本可直接执行 | 修复 `ModuleNotFoundError`，作者与 #1742 相同 |
| #1730 | claude-api 死链替换 | 3 个 404 链接已用 `curl` 验证为 HTTP 200 |
| #1245 / #1703 / #1771 | 新功能类 Skill | 更新至 2026-09 下旬，功能完整度较高 |

链接：PR #1742 ｜ PR #1298 ｜ PR #1961 ｜ PR #1681 ｜ PR #1730

> 说明：所给数据中所有 PR 的评论数均为 `undefined`，无法据此确认"评论活跃"；上表的"高潜力"判断基于更新日期、问题关联度与提交完整度。

---

## 4. Skills 生态洞察

**一句话总结：社区当下最集中的诉求，是官方 Skill 工具链的"可信与可靠"——包括命名空间/权限的信任边界、评估与触发机制的准确性、以及安全与上下文成本控制，其次才是新功能类 Skill 的扩展。**

---

# Claude Code 社区动态日报（2026-10-11）

## 1. 今日速览

今日无新版本发布，社区讨论集中在多平台 BUG 与工作流阻断问题上。Windows 桌面端性能回退（#26302）与 Linux TUI 复制失效（#62699）两条老 Issue 持续高热，评论数与点赞数领先；`/compact` 二次执行导致 transcript 二次增长（#92089）暴露核心上下文管理逻辑缺陷。同时，auto mode 分类器与沙箱隔离的误判问题在当日集中出现，直接影响开发者让 Agent 写代码与执行命令。

## 2. 版本发布

过去 24 小时无新 Releases。

## 3. 社区热点 Issues（TOP 10）

1. **#26302 [OPEN] Claude Desktop 1.1.3189 在 Windows 上严重 UI 卡顿与鼠标抖动**（评论 49，👍 47）
   Windows 桌面端更新后的性能回退，长期未修复且评论量最高，说明影响面广、用户积怨明显。https://github.com/anthropics/claude-code/issues/26302

2. **#62699 [OPEN] Linux TUI 无法用 `Ctrl+Shift+C` 或右键菜单复制输出文本**（评论 48，👍 76）
   当日点赞数最高，直击终端用户最基础的复制粘贴工作流，属于高频刚需痛点。https://github.com/anthropics/claude-code/issues/62699

3. **#92089 [OPEN] 同一进程内第二次 `/compact` 会重新追加已被压缩的历史，transcript 呈二次增长**（评论 8，含复现步骤）
   影响长会话上下文管理，可能导致 token 消耗异常与性能退化，是核心技术层缺陷。https://github.com/anthropics/claude-code/issues/92089

4. **#101202 [OPEN] Auto mode 分类器拒绝常规代码编辑，阻断后端 DTO/Controller 更新**
   当日新建，分类器误判导致 Agent 无法写入任何代码，直接阻断开发工作流。https://github.com/anthropics/claude-code/issues/101202

5. **#97774 [OPEN] Worktree 隔离拒绝所有带参数的 pwsh/powershell/cmd 调用**（👍 1）
   作者指出该 guard 已有多个同类报告（#84530、#95611 等），说明隔离策略误伤范围在扩大。https://github.com/anthropics/claude-code/issues/97774

6. **#99976 [OPEN] 在文件数量庞大的目录中执行沙箱 shell 命令会冻结输入**（Linux，👍 1）
   在约 110 万文件的目录下卡顿数秒，仓库内无此现象，指向沙箱扫描机制的性能瓶颈。https://github.com/anthropics/claude-code/issues/99976

7. **#101200 [OPEN] TUI 中鼠标点击无效，须先进入 agent view 再返回才恢复**
   当日新建，属于影响交互可用性的界面回归问题。https://github.com/anthropics/claude-code/issues/101200

8. **#101203 [OPEN] VS Code 扩展 2.1.296 + Linux Remote（vscode-server）+ claude-opus-5-5 问题**
   当日新建，涉及 VS Code Remote 场景与新模型的组合环境，值得关注其后续定位。https://github.com/anthropics/claude-code/issues/101203

9. **#79706 [OPEN] [FEATURE] 支持终端图形协议实现内联图片显示**（👍 9）
   TUI 中呼声较高的增强需求，反映社区对更丰富终端渲染能力的期待。https://github.com/anthropics/claude-code/issues/79706

10. **#101207 [OPEN] 浅色主题下 prompt suggestion 幽灵文本与输入文字同色**
    当日新建，建议增加主题 token；虽为小问题但影响浅色主题用户的可读性。https://github.com/anthropics/claude-code/issues/101207

> 另注：多条 Issue 于今日被关闭，包括 **#57295**（模型用 @Human 试图引起项目所有者注意）、**#79919**（GUI 端 prompt suggestions 不显示）、**#80662**（Opus 4.8 + interleaved thinking 下 assistant 文本从 transcript 静默丢失）、**#79952**（配置编辑忽略 `CLAUDE_CONFIG_DIR`）、**#80802**（插件 skill 未注入 SKILL.md 正文）、**#100256 / #100287**（标记为 duplicate）。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 共 2 条，全部列出：

1. **#79150 [OPEN] docs: 使 code-review README 与当前基于验证的命令保持一致**（作者 Codeturion，创建 2026-07-19，更新 2026-10-11）
   文档仍描述已被移除的流水线：git blame/历史 agent、0-100 置信度打分与 80 阈值，以及"过滤…"的 Configuration 章节，需与现有命令对齐。https://github.com/anthropics/claude-code/pull/79150

2. **#101131 [CLOSED] security-guidance: 与 claude-plugins-official 同步（2.0.13）**（作者 mhegazy，更新 2026-10-10）
   此前本仓库的 `security-guidance` 副本仍为 2.0.0，marketplace 条目显示 1.0.0 且描述为最初的 reminder hook，本次完成版本同步。https://github.com/anthropics/claude-code/pull/101131

## 5. 功能需求趋势

基于本次可见 Issues，社区关注方向集中在：

- **TUI 体验增强**：终端图形协议内联图片显示（#79706）；浅色主题幽灵文本颜色 token（#101207）。
- **插件与 Skill 体系完善**：插件目录提交时允许作者为审核者添加备注（#98317）；插件 skill 未注入 SKILL.md 正文的长期问题（#80802，已关闭）。
- **命令易用性**：内置 slash 命令应大小写不敏感，或错误提示应给出近似匹配建议（#79981，已关闭）。
- **桌面 / GUI 功能对齐**：prompt suggestions 在 CLI 可用但 GUI 端始终不显示（#79919，已关闭）。

## 6. 开发者关注点

- **性能与交互回归**：Windows 桌面端 UI 卡顿（#26302）、沙箱命令在大目录下冻结输入（#99976）、TUI 鼠标点击失效（#101200），均直接影响日常使用流畅度。
- **基础工作流阻断**：Linux TUI 文本无法复制（#62699）为当日点赞最高问题；Auto mode 分类器拒绝常规代码编辑（#101202）使 Agent 无法完成写码任务。
- **沙箱 / 隔离策略误伤**：worktree guard 拒绝 pwsh/powershell/cmd 调用（#97774）与沙箱冻结（#99976）表明隔离与安全策略过于严格，需在安全与可用性之间重新平衡。
- **上下文与 transcript 正确性**：`/compact` 二次压缩导致历史重复追加、transcript 二次增长（#92089），以及此前 assistant 文本静默丢失（#80662），反映出上下文管理的正确性问题受到核心用户密切关注。
- **配置一致性**：配置编辑忽略 `CLAUDE_CONFIG_DIR`（#79952，已关闭）、macOS 权限提示仅显示版本号（#100256，已关闭），属于长期存在的环境一致性瑕疵。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-11）

## 今日速览

今日无新版本发布，社区讨论几乎全部集中在 **Windows 平台可靠性问题**上——sandbox 初始化失败、Computer Use 无法识别浏览器 URL、以及响应流断连是三大焦点。评论数最高的 Issue #51601 已积累 120 条评论，反映 Windows app 更新后的沙箱阻塞问题波及面较广。PR 侧则以内部维护性改动为主（全部来自 copyberry[bot] 且均为 CLOSED 状态），涉及 TUI、MCP 依赖升级与检索/压缩逻辑的保留策略。

> 说明：本期 Releases 区无内容，按任务要求省略该部分。


## 社区热点 Issues

1. **#51601 · Windows app 沙箱自校验时因共享冲突失败**（120 评论 / 👍30）
   Windows app 26.1002.51308（build 13417）更新后，所有命令执行在请求前即失败，原因是沙箱验证自身活动运行时文件时触发共享冲突。评论数居首，是今日最严重、影响面最广的阻断性问题。
   [openai/codex Issue #51601](https://github.com/openai/codex/Issue/51601)

2. **#25271 · Computer Use 在 Windows 上无法识别 Chrome URL**（55 评论 / 👍12）
   即使在 `chrome://newtab/` 页面也无法获取 URL，环境为 ChatGPT Plus + Windows 11。该问题自 5 月底创建至今仍未解决，持续时间长，值得持续关注。
   [openai/codex Issue #25271](https://github.com/openai/codex/Issue/25271)

3. **#52407 · Windows Dots：CUA MXC 启动器报 HRESULT 0x80070003**（32 评论 / 👍6）
   在直接 shell 恢复后启动器失败，环境为 Windows 25H2 build 26200.9457。属于 Computer Use 相关的新增故障，与 #25271 共同指向 Windows 端 CUA 稳定性。
   [openai/codex Issue #52407](https://github.com/openai/codex/Issue/52407)

4. **#16669 · 允许调整聊天内容宽度**（12 评论 / 👍36）
   请求在 Codex App 中支持可调聊天内容宽度，当前即便隐藏侧栏，正文依旧偏窄。👍 数在所有条目中最高，反映的是绕开平台差异的普遍 UI 诉求。
   [openai/codex Issue #16669](https://github.com/openai/codex/Issue/16669)

5. **#16579 · Windows：允许通过 config 配置默认会话 shell**（8 评论 / 👍53）
   当前默认使用 PowerShell，Git Bash 等用户难以切换默认 shell。👍 数为全场最高，是呼声最强的增强需求之一。
   [openai/codex Issue #16579](https://github.com/openai/codex/Issue/16579)

6. **#50428 · Windows 桌面端 durable chat turn/start 与 thread/fork 因 AbsolutePathBuf 反序列化失败**（27 评论 / 👍1）
   可读取绑定到 Windows 执行环境的 durable/cloud 聊天，但直接文本提交与同目录 fork 在执行前失败。涉及 app-server 序列化路径，属于核心会话能力问题。
   [openai/codex Issue #50428](https://github.com/openai/codex/Issue/50428)

7. **#51969 · Windows 沙箱初始化被运行中的 node_repl.exe / Swift DLL 阻塞（os error 32）**（13 评论 / 👍3）
   与 #51601 同属"共享冲突导致沙箱启动失败"一类，但明确指向打包运行时文件被占用，可帮助定位根因。
   [openai/codex Issue #51969](https://github.com/openai/codex/Issue/51969)

8. **#52919 · Windows Codex Desktop + VS Code 自 10 月 10 日起间歇性流断连与重连失败**（6 评论）
   版本 26.1007.2314.0，ChatGPT Pro，Windows 11 25H2。属于最新出现的连接性问题，且涉及 VS Code 集成场景。
   [openai/codex Issue #52919](https://github.com/openai/codex/Issue/52919)

9. **#52694 · Windows 桌面端 2h34 长回合反复重连、无有效进展**（5 评论）
   报告了一个持续 2 小时 34 分 20 秒的回合，期间 UI 显示重连尝试，最终在未确认恢复的情况下完成。结合 #52919，连接稳定性对长任务体验的影响值得重视。
   [openai/codex Issue #52694](https://github.com/openai/codex/Issue/52694)

10. **#32086 · 回归：Responses Lite 使延迟的 MultiAgentV1 工具不可达**（5 评论 / 👍3）
    Codex CLI v0.144.0，因 `tool_search` 被隐藏在 AdditionalTools 中，导致延迟加载的 MultiAgentV1 工具无法访问。问题定位在 planner 与 Responses 序列化代码路径，属于影响 subagent 能力的回归。
    [openai/codex Issue #32086](https://github.com/openai/codex/Issue/32086)


## 重要 PR 进展

> 提示：本期 11 个 PR **全部为 CLOSED 状态且作者均为 copyberry[bot]**，无一条处于 OPEN 或已合并可确认状态，以下按变更内容归类说明。

1. **#53049 · 为 app-server 请求添加连接绑定的回复句柄**
   解决服务端请求 ID 可跨连接复用的问题：保留的回复需指向发出请求的那个连接，即使 UI 选择之后发生变化。对多连接场景的正确性有直接意义。
   [openai/codex PR #53049](https://github.com/openai/codex/PR/53049)

2. **#52990 · 为 TUI 添加可搜索的 `/config` 偏好设置面板**
   将偏好分组为外观、通知、输入、会话、文本选择等标签页，支持搜索并链接到已有的主题、状态行、终端标题等设置。
   [openai/codex PR #52990](https://github.com/openai/codex/PR/52990)

3. **#52972 · 升级 `rmcp` 至 3.5.1 并加固生命周期测试**
   更新固定版本依赖与 Cargo/Bazel 锁文件，将 MCP handler 与 fixtures 迁移到 `ClientConfig` / `ServerConfig`。属于 MCP 生态的依赖对齐。
   [openai/codex PR #52972](https://github.com/openai/codex/PR/52972)

4. **#52968 · 终端输入排空超时时保护启动模态框**
   未完成的终端控制序列可能阻止缓冲输入在启动模态框出现前排空，此前传播该超时会中断模态框处理。
   [openai/codex PR #52968](https://github.com/openai/codex/PR/52968)

5. **#52967 · 复用并预热 WSL 剪贴板文本读取器**
   此前每次粘贴都会启动 PowerShell 进程，在 WSL 下进程创建可能挂起并阻塞共享剪贴板 worker；改为复用常驻进程。
   [openai/codex PR #52967](https://github.com/openai/codex/PR/52967)

6. **#52964 · 在原始粘贴突发期间延迟自有 transcript 重绘**
   原始粘贴可能以数千个字符、Enter、Tab 事件到达，此前在每次缓冲按键前重绘整个 transcript 会破坏 composer 的粘贴批处理。
   [openai/codex PR #52964](https://github.com/openai/codex/PR/52964)

7. **#52959 · 降低异步 TUI 测试的栈占用**
   大测试 future 即使直接传给 `Box::pin` 也可能占用调用者栈帧；新增非内联 `box_future` 辅助函数与 `boxed_future!` 宏。
   [openai/codex PR #52959](https://github.com/openai/codex/PR/52959)

8. **#52952 · 验证 code-mode 主机恢复期间的 reset 通知**
   扩展 `hung_grpc_stdio_host_is_reaped_and_the_session_recovers` 测试，断言主机替换后的首次执行会报告丢失的存储值与正在运行的单元格。
   [openai/codex PR #52952](https://github.com/openai/codex/PR/52952)

9. **#52937 · 在压缩过程中保留客户端标记的工具输出**
   客户端提供的工具输出可能携带任务指令；此前即使标记 `retain: true`，这些指令仍可能在压缩前被裁剪并从压缩结果中消失。属于上下文管理的重要修复。
   [openai/codex PR #52937](https://github.com/openai/codex/PR/52937)

10. **#52923 · 稳定 realtime steering 时间线测试**
    初始用户项会封存 realtime transcript 片段，若在完成前开始语音会拆分被测片段；改为等待其 `item/completed` 通知后再断言。
    [openai/codex PR #52923](https://github.com/openai/codex/PR/52923)


## 功能需求趋势

从本期 Issues 的标签与内容可提炼出以下方向：

- **Windows 平台体验为主导**：前 20 条热点中，带 `windows-os` 标签的占据绝大多数，涵盖 sandbox、app-server、Computer Use、connectivity、session 等多个子系统，说明 Windows 端的成熟度仍是社区最大关注缺口。
- **沙箱与权限策略可解释性**：
  - #50884 反映 `exec_command` 被以"blocked by policy"拒绝却无可行解释。
  - #15214 希望规则支持更强的 Starlark，#16579 希望可配置默认 shell。
  三者共同指向"沙箱规则不够灵活、拒绝原因不够透明"。
- **Computer Use / 浏览器自动化**：#25271、#52407、#49453、#37193 涉及 URL 识别、CUA 启动、站点放行被保存的拒绝覆盖、生成文件链接无法打开，构成完整的 CUA 可用性议题簇。
- **UI 可定制与信息可见性**：#16669（聊天宽度）、#52483（"More details" 菜单项丢失）、#19975（replay/fork 隐藏被引导的用户消息）——关注点集中在界面对内容与操作的暴露程度。
- **上下文与会话管理**：#50428（fork/durable chat 失败）、#50676（本地 Markdown 链接被改写为 `file:///%00/bad/path`）、#40879（分页聊天无法跨主机续接）、#19975（replay/fork 渲染），反映跨设备、跨会话的连续性仍是痛点。
- **IDE 与编辑器集成**：#52919 明确涉及 VS Code 场景，结合连接稳定性问题，属于潜在增长方向。


## 开发者关注点

- **Windows 沙箱的共享冲突是最集中的阻断点**：#51601（120 评论）与 #51969 指向同一类根因——沙箱在验证或使用自身打包的运行时文件（node_repl.exe、Swift DLL）时遭遇 Windows 共享违规（os error 32）。#52593 进一步报告可写工作区内 native realpath 返回 EPERM。这组问题共同导致"命令在执行前就失败"，对可用性影响最大。
- **连接稳定性影响长任务可信度**：#52919（自 10 月 10 日起间歇断连与重连失败）与 #52694（2h34 回合反复重连、最终未确认恢复即完成）显示，重连机制的行为与最终状态的一致性缺乏保证。
- **错误信息缺乏可操作性**：#50884 中 `exec_command` 被拒却无可行解释，与 #49453 中显式放行后仍被保存的会话级拒绝拦截，都让开发者难以自助排查。
- **工具调用与模型行为一致性**：#45289 报告 Codex 反复忽略指令并在聊天中暴露 Python/工具输出；#32086 的 Responses Lite 回归使延迟 MultiAgentV1 工具不可达。二者分别影响指令遵循与 subagent 能力。
- **高赞增强需求的长期积压**：#16579（默认 shell，👍53）与 #16669（聊天宽度，👍36）分别自 4 月初与 4 月初创建，至今仍为 OPEN，说明部分高共识配置类需求等待时间较长。

---

*本期数据来源：github.com/openai/codex。所有条目、版本号、评论数与链接均取自所提供材料，未作外部补充。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-11）

## 今日速览

今日无新版本发布。社区讨论几乎全部集中在 **agent / subagent 行为可靠性** 上：子代理状态误报成功、generalist agent 永久挂起、浏览器子代理忽略配置、以及调用频率低等问题占据 Issue 热榜前列。同时，一批针对核心路径的性能优化 PR（历史压缩、状态快照查找、转录索引缓存）集中进入评审或关闭状态。

---

## 社区热点 Issues

> 以下挑选 10 个最值得关注的 Issue，集中在 agent 可靠性、工具调用与模型行为方向。

**1. #22323 子代理触及 MAX_TURNS 却被报告为 GOAL 成功**（13 评论）
`codebase_investigator` 子代理在未做任何分析前就达到最大轮次限制，却返回 `status: "success"` 与 `Termination Reason: "GOAL"`，把中断伪装成成功。这是最危险的可靠性问题——上层调度器会据此做出错误决策。讨论量最高。
🔗 google-gemini/gemini-cli Issue #22323

**2. #19873 通过零依赖 OS 沙箱与执行后意图路由释放模型的 bash 能力**（9 评论）
提案指出 Gemini 3 模型本质上是「原生 bash 用户」，擅长串联 `grep`/`cat`/`sed`/`awk` 探索和编辑代码库。当前工具限制反而压制了模型的原生优势，属大型工作量增强项。
🔗 google-gemini/gemini-cli Issue #19873

**3. #21409 Generalist agent 永久挂起**（8 评论，👍 8）
一旦 CLI 转交给 generalist agent 就无限挂起，连「创建文件夹」这类简单操作也会卡死，用户等待一小时后被迫取消。高赞表明影响面广，属 P1 缺陷。
🔗 google-gemini/gemini-cli Issue #21409

**4. #22745 评估 AST 感知的文件读取、搜索与代码映射**（7 评论）
EPIC 级调研：AST 感知工具能否用单次调用更精确地读取方法边界、减少交互轮次。这是对 agent 效率有根本性影响的方向。
🔗 google-gemini/gemini-cli Issue #22745

**5. #21968 Gemini 不愿主动使用 skills 与 sub-agents**（7 评论）
模型除非被显式指令，否则基本不会自主调用自定义 skills 和子代理，即使任务高度相关。这直接削弱了多代理架构的投入产出。
🔗 google-gemini/gemini-cli Issue #21968

**6. #22267 Browser Agent 忽略 settings.json 覆盖项**（4 评论）
全局或项目级 `settings.json` 中的 `maxTurns` 等配置被 Browser Agent 完全忽略，AgentRegistry 的配置路径未生效。
🔗 google-gemini/gemini-cli Issue #22267

**7. #21983 browser 子代理在 Wayland 下失败**（4 评论，P1）
Linux Wayland 会话下 browser 子代理无法正常工作，影响桌面 Linux 用户的浏览器自动化能力。
🔗 google-gemini/gemini-cli Issue #21983

**8. #24246 工具数超过 128 个时触发 400 错误**（3 评论）
正文提到超过约 400 个工具时 Gemini CLI 报 400；当启用工具增多时缺乏合理的工具范围裁剪策略，是规模化工具生态的隐患。
🔗 google-gemini/gemini-cli Issue #24246

**9. #22672 Agent 应停止/抑制破坏性行为**（3 评论）
模型在复杂 git 操作中会使用 `git reset` 或 `--force`，即使存在更安全的替代方案；在维护数据库等资源时同样存在风险操作。安全边界议题。
🔗 google-gemini/gemini-cli Issue #22672

**10. #23571 模型频繁在随机位置创建临时脚本**（3 评论）
限制模型只能通过 shell 执行后，它会生成散落各目录的编辑脚本，给提交前的工作区清理带来显著开销。
🔗 google-gemini/gemini-cli Issue #23571

**其他值得留意**：#22186（get-shit-done 输出钩子导致崩溃，P1）、#21924（终端 resize 的高性能无闪烁渲染）、#22598（让子代理轨迹可通过 `/chat share` 查看）、#22465（创建 vite 应用时卡在交互式提示）。

---

## 重要 PR 进展

**1. #29709 修复 vscode-ide-companion 的 disposables 注册**（OPEN）
`activate()` 中两处注册被多余的括号变成逗号表达式，导致命令和监听器未被推入 `context.subscriptions`，资源无法释放。修复 #27790。
🔗 google-gemini/gemini-cli PR #29709

**2. #29708 修复 ACP session/load 历史回放时序**（OPEN）
`session/load` 在历史回放尚未写完时就返回响应，导致 ACP 客户端的 `session/update` 通知混入下一个提示的更新流，违反 ACP 规范要求的顺序。
🔗 google-gemini/gemini-cli PR #29708

**3. #29510 加固 Windows 子进程参数转义、防止命令注入**（CLOSED，安全）
在 `packages/core/src/utils/editor.ts` 中引入 `quoteCmdArg` 辅助函数，针对 `shell: true` 调用加固 Windows 参数引用，修复命令注入漏洞。
🔗 google-gemini/gemini-cli PR #29510

**4. #29621 保留子代理多模态工具响应分片**（OPEN）
当本地子代理把工具结果回传给模型时，作为 function response 兄弟节点存在的图像数据此前被丢弃，现已按类别跟踪响应分片数组予以保留。
🔗 google-gemini/gemini-cli PR #29621

**5. #29622 将 tildeifyPath 限定在路径段边界**（OPEN）
修复与主目录前缀相同的兄弟目录被错误显示为 `~` 下的问题，仅在路径完全匹配或为子路径时替换。
🔗 google-gemini/gemini-cli PR #29622

**6. #29517 将 truncateHistoryToBudget 的数组重建线性化**（CLOSED，性能）
`chatCompressionService.ts` 中新→旧遍历后恢复时间顺序的重建过程被优化为线性，降低历史截断开销。
🔗 google-gemini/gemini-cli PR #29517

**7. #29515 状态快照 ID 查找线性化**（CLOSED，性能）
两条快照路径均改用 `Set` 做已消费 ID 查找。本地合成基准（10,000 目标 / 5,000 已消费 ID）从 **291.95 ms 降至 10.26 ms**。
🔗 google-gemini/gemini-cli PR #29515

**8. #29516 缓存转录轮次索引**（CLOSED，性能）
用 `Map` 缓存轮次索引替代对每个节点调用 `indexOf()`，保持相对轮次标签与转录文本不变。10,000 文本节点基准从 **414.20 ms 降至 17.91 ms**。
🔗 google-gemini/gemini-cli PR #29516

**9. #29512 线性化聊天压缩历史重建**（CLOSED，性能）
用 `push()` 加最终反转替代反复 `unshift()`，避免数组元素反复搬移，同时保留消息顺序与「最新优先」的 token 预算优先级。
🔗 google-gemini/gemini-cli PR #29512

**10. #29705 时长格式化先取整再选单位**（OPEN，help wanted）
修复 `formatDuration`，使跨越单位边界的取整值使用下一单位显示，例如 `1000ms` 显示为 `1.0s`、`60.0s` 显示为 `1m`。
🔗 google-gemini/gemini-cli PR #29705

**其他**：#28781 为自动化的 nightly 版本号提升 PR（0.56.0-nightly.20260812.g5024443c7），已标记为 Stale。

---

## 功能需求趋势

从今日 Issues 与 PR 可提炼出以下方向：

- **子代理 / 多代理体系成熟化**：这是最密集的主题。涉及子代理状态语义正确性（#22323）、轨迹可观测性（#22598 通过 `/chat share` 暴露子代理轨迹）、本地子代理 Sprint 计划（#20195）、以及模型主动调用意愿不足（#21968）。
- **模型原生能力对齐**：主张顺应 Gemini 3「原生 bash 用户」的特性（#19873）、引入 AST 感知的读取/搜索/映射能力（#22745、#22746，后者建议以 tilth 或 glyph 为起点）。
- **浏览器自动化（browser_agent）可靠性**：配置覆盖失效（#22267）、会话锁自动接管与恢复（#22232）、Wayland 兼容（#21983）三条并行推进。
- **终端渲染与交互性能**：终端 resize 的高性能无闪烁渲染（#21924，迁移到 RenderStatic 并分批更新历史项）、时长格式化正确性（#29705）。
- **上下文与历史处理效率**：多笔 PR 集中优化历史压缩与快照查找的算法复杂度，说明长会话性能是持续投入方向。
- **安全与破坏性行为约束**：Windows 命令注入加固（#29510）、抑制 `git reset`/`--force` 等危险操作（#22672）。
- **IDE 集成**：vscode-ide-companion 的生命周期管理缺陷（#29709）显示该集成仍在打磨阶段。

---

## 开发者关注点

- **「假成功」比失败更危险**：子代理中断被误报为成功（#22323），会让调度层与用户都失去对执行结果的信任，这是当前最需要优先级处理的语义缺陷。
- **挂起类问题严重影响可用性**：generalist agent 永久挂起（#21409）在社区获得 8 个赞，说明这不是个例，而是高频阻断性问题。
- **配置不生效破坏可预期性**：`settings.json` 覆盖被 Browser Agent 忽略（#22267），使团队无法通过统一配置治理 agent 行为。
- **模型「不主动」与「乱动手」并存**：既不愿主动使用 skills/sub-agents（#21968），又会在不必要时使用破坏性命令（#22672）、在随机位置生成临时脚本（#23571）——开发者期望的是更精确的行为边界而非更多的能力开关。
- **工具规模化的天花板**：工具数超过约 128/400 个时触发 400 错误（#24246），提示需要更智能的工具范围裁剪机制。
- **长会话性能仍是投入重点**：多笔数组复杂度优化 PR 显示，历史压缩与快照查找是长对话场景下的既有瓶颈。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-11）

## 1. 今日速览

过去 24 小时内 **无新版本发布、无 PR 更新**，社区活动全部集中在 Issue 讨论上（20 条更新）。当日关闭了多项历史遗留问题（认证回归、macOS 诊断噪音、推理文本可读性等），同时新增多份关于 Windows 平台缺陷、MCP OAuth 认证与企业环境可用性的报告，Windows 与 MCP 相关问题是当前最集中的风险区。

## 2. 版本发布

无新版本发布。

## 3. 社区热点 Issues（精选 10 条）

1. **[#1953 OPEN] 常驻显示上下文窗口状态**（👍 11，评论 2）
   要求像"剩余请求数"一样在 UI 中常驻显示上下文占用。上下文接近上限时模型表现下降，用户希望提前感知。**今日更新且是本批中 👍 最高的需求**，代表性强。
   https://github.com/github/copilot-cli/issues/1953

2. **[#4946 OPEN] 后台 shell 完成通知后触发 HTTP 400 `content[].thinking`**
   后台 shell 命令跨越回合完成后，运行时投递的 `system.notification` 导致请求报 400。属于会话/模型层的**运行时正确性缺陷**，评论 7 条，讨论较活跃。
   https://github.com/github/copilot-cli/issues/4946

3. **[#5111 OPEN] 图像上限忽略 `modelCapabilities.limits.vision.max_prompt_images`，且每次淘汰都重写提示缓存前缀**
   运行时硬编码 50 张图像上限、覆盖最旧的工具结果图像，并因此反复重写 prompt-cache 前缀。**同时涉及成本（缓存失效）与正确性（忽略模型能力声明）**，是新提交的高质量缺陷报告。
   https://github.com/github/copilot-cli/issues/5111

4. **[#5094 OPEN] Windows 桌面版 1.1.27+ 无法启动自带 git（0x80070005），项目注册全部失效**
   启动即报 `Failed to spawn ... git`，导致所有项目注册流程中断。**影响面广、无绕过方案**，Windows 用户需优先关注。
   https://github.com/github/copilot-cli/issues/5094

5. **[#5096 OPEN] Windows 上 `/upgrade` 覆盖 winget 别名，winget 与"添加/删除程序"仍显示旧版本**
   内置更新器绕过 winget，直接写入二进制并覆盖其命令别名，造成版本管理混乱。**包管理器与自更新机制的冲突**，企业环境尤需注意。
   https://github.com/github/copilot-cli/issues/5096

6. **[#5109 OPEN] copilot-cli 在企业环境不可用**
   1.0.95 版本启动即报 "Managed account policy could not be refreshed"。**企业托管策略拉取失败直接阻断使用**，是 enterprise 场景的阻断级问题。
   https://github.com/github/copilot-cli/issues/5109

7. **[#5082 OPEN] MCP OAuth：Dataverse MCP 因 RFC 8414 issuer 校验被拒（login.windows.net vs login.microsoftonline.com）**
   授权服务器 issuer 与元数据发现 URL 不匹配，静态 `oauthClientId` 也无法绕过。**影响 MCP 生态与企业身份体系的互通**。
   https://github.com/github/copilot-cli/issues/5082

8. **[#5079 OPEN] 在新协议上发送 `ping`，并复用已轮换的 refresh token**（👍 1）
   桌面应用 MCP 会话以 `copilot-cli` 作为 `clientInfo`，协商新协议后仍发送 `ping`，且复用已轮换的刷新令牌。**协议一致性与令牌轮换合规性问题**。
   https://github.com/github/copilot-cli/issues/5079

9. **[#5049 OPEN] ACP 模式下 Computer Use 插件不可用（Windows, 1.0.91）**
   CLI 中已启用 Computer Use，但 ACP 会话报告该内置插件连同其 MCP server 不可用，尽管 `/computer` 命令被识别。**交互式与非交互式模式能力不一致**。
   https://github.com/github/copilot-cli/issues/5049

10. **[#5081 OPEN] 网络错误：invalid peer certificate: UnknownIssuer，重试 5 次后不可恢复**
    运行数分钟后模型请求持续失败且无法自愈。**TLS 证书链与企业代理/中间人场景的典型痛点**。
    https://github.com/github/copilot-cli/issues/5081

**其他值得留意的关闭项**：**[#2494 CLOSED]** `copilot login` 在密钥链不可用时自动代替用户确认 y/N 的回归问题（评论 12，本批讨论最多）；**[#590 CLOSED]** 请求提供 `copilot mcp` 子命令以对齐 Codex/Claude Code/Gemini CLI（👍 4）；**[#4614 CLOSED]** macOS MallocStackLogging 警告；**[#3866 CLOSED]** 深色背景下推理文本不可读；**[#4831 CLOSED]** claude-opus-5 粘贴一张图后无法再查看任何图像；**[#2746 CLOSED]** 用户输入与助手回复缺乏视觉区分。

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本部分无内容可报告。

## 5. 功能需求趋势

- **可观测性与状态提示**：常驻上下文窗口用量（#1953）是最受支持的需求，方向是让 agent 状态对用户透明。
- **终端集成与渲染**：OSC 7501 程序状态上报（#5112）、深浅色主题下推理文本可读性（#3866）、用户/助手输出视觉区分（#2746）反映 TUI 体验仍有明显缺口。
- **MCP 生态成熟度**：`copilot mcp` 子命令（#590）、MCP OAuth 校验（#5082）、MCP 协议行为一致性（#5079）显示社区期待 MCP 配置与认证的一等公民支持。
- **多模态能力边界**：图像数量上限与模型能力声明解耦（#5111）、视觉调用配额（#4831）指向多模态资源管理需要更精细的策略。
- **跨平台一致性**：Windows 相关条目（#5094、#5096、#5095、#5049）集中出现，平台差异是持续需求方向。

## 6. 开发者关注点

- **Windows 是当前最大的痛点集中地**：捆绑 git 无法启动、winget 与自更新冲突、超长路径权限拒绝（#5095，256 字符限制）、ACP 插件不可用，涉及安装、更新、权限、插件四个层面。
- **认证与身份链路问题反复出现**：企业托管策略刷新失败（#5109）、MCP OAuth issuer 不匹配（#5082）、refresh token 轮换处理不当（#5079）、早期密钥链提示回归（#2494）——认证是跨功能的高频故障源。
- **企业环境可用性待加强**：托管策略、私有 CA/TLS（#5081）、GitHub Enterprise 身份展示（#4666）等场景均缺乏顺畅路径。
- **运行时正确性与成本敏感度上升**：如 #5111 指出的缓存前缀重写，开发者已开始关注 token 成本与提示缓存效率，而不仅是功能是否可用。
- **好消息**：多项长期困扰用户的体验问题在今日集中关闭（登录交互、macOS 日志噪音、推理文本可读性、输入输出区分），TUI 体验类修复正在收敛。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-10-11）

## 1. 今日速览

过去 24 小时内，MoonshotAI/kimi-cli 无新版本发布、无 Issue 更新，社区讨论整体处于低活跃状态。唯一动态来自一条已关闭的文档类 PR #1718，补齐了 AGENTS.md 专题页、安全边界说明和首页导览。今日动态以文档完善为主，无功能或修复类变更。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

过去 24 小时内无 Issue 更新（共 0 条），无法提炼热点议题。

## 4. 重要 PR 进展

**#1718 [CLOSED] docs: 新增 AGENTS.md 专题页、安全边界说明和首页导览**
- 链接: https://github.com/MoonshotAI/kimi-cli/pull/1718
- 作者: liwang614 | 创建: 2026-04-02 | 更新: 2026-10-10 | 👍: 0
- 内容：新增页面 `docs/{zh,en}/customization/agents-md.md`，即 AGENTS.md 专题页，说明其与 README.md 的区别、加载行为（仅工作目录、大写优先）以及 `/init` 生成流程；同时补充安全边界说明和首页导览。
- 意义：这是当日唯一有更新的 PR，属文档层面的补充。AGENTS.md 的加载规则（仅工作目录、大写优先）此前缺少集中说明，对该文件行为存在疑问的使用者有一定参考价值。该 PR 已关闭。

> 说明：过去 24 小时内更新的 PR 仅此 1 条，不足 10 条，故未做筛选。

## 5. 功能需求趋势

过去 24 小时内无新增或更新的 Issue，缺乏可用于提炼功能方向的社区反馈数据，本部分暂无可分析内容。

## 6. 开发者关注点

从当日唯一动态（PR #1718）可以看出，社区在文档层面关注以下两点：
- **AGENTS.md 的行为语义**：其与 README.md 的区别、加载范围（仅工作目录）与优先级（大写优先），以及 `/init` 生成流程，是文档补齐的重点，说明使用者对该配置文件的生效方式存在理解成本。
- **安全边界说明**：文档中单独补充安全边界内容，反映项目在文档层面对权限与边界透明性的重视。

除此之外，当日无新增开发者反馈，无法总结其他痛点或高频需求。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-11）

## 1. 今日速览

OpenCode 发布 v1.19.0，核心亮点是引入 `opencode upgrade --major` 升级路径，明确指向 OpenCode 2，同时 TUI 增加 `/update` 命令。社区侧，会话目标（`/goal`）、粘贴文本展开、Bun 安装失败等议题持续高热，v1→v2 迁移带来的兼容性与生态插件重新提交成为今日 PR 的主要特征。

## 2. 版本发布

**v1.19.0**（[Release 页面](https://github.com/anomalyco/opencode/releases/tag/v1.19.0)）

- **Core / Improvements**：新增 `opencode upgrade --major`，可直接升级到 OpenCode 2。
- **Core / Bugfixes**：允许 OpenAI `ultrafast` 服务层级；在检查 PTY 是否存在之前，先校验 PTY 连接来源与 ticket。
- **TUI / Improvements**：新增 `/update` 命令，用于安装 OpenCode 更新。

## 3. 社区热点 Issues

1. **[#27167](https://github.com/anomalyco/opencode/issues/27167) [OPEN] 原生会话目标 `/goal`** — 81 评论 / 153 👍，今日讨论度最高。社区希望有原生的会话级目标机制，而非仅靠自定义斜杠命令。高赞表明这是被广泛期待的工作流能力。
2. **[#8501](https://github.com/anomalyco/opencode/issues/8501) [CLOSED] 展开粘贴文本** — 37 评论 / 244 👍，全站点赞最高。围绕 `[Pasted ~1 lines]` 占位符无法还原原文的痛点，现已被关闭。
3. **[#27906](https://github.com/anomalyco/opencode/issues/27906) [OPEN] v1.15.1+ 破坏 Bun 安装** — 26 评论。因 postinstall 生命周期脚本被 Bun 默认拦截，属直接影响安装链路的阻塞型问题。
4. **[#32747](https://github.com/anomalyco/opencode/issues/32747) [OPEN] `@` 文件提及不包含启动后新建的文件** — 19 评论。需重启才能索引新文件，影响日常上下文引用体验。
5. **[#16626](https://github.com/anomalyco/opencode/issues/16626) [OPEN] 新增 `session.stopping` 插件钩子** — 10 评论 / 12 👍。插件目前无法阻止 agent 循环停止，该需求今日已由 PR #54487 承接。
6. **[#41358](https://github.com/anomalyco/opencode/issues/41358) [OPEN] 自动压缩后 agent 不再确认、丢失原始目标** — 10 评论。长会话下自动压缩后的行为失控，属可靠性问题。
7. **[#39923](https://github.com/anomalyco/opencode/issues/39923) [OPEN] macOS + SSH 下 TUI 渲染回归** — 6 评论。相较 v1.15.13，字体、配色、对比度与布局全部异常，影响可用性。
8. **[#50257](https://github.com/anomalyco/opencode/issues/50257) [OPEN] 桌面端模型选择器对全部 V2 模型显示 "No reasoning"** — 4 评论。`capabilities.reasoning` 未被赋值，导致推理能力展示错误。
9. **[#36990](https://github.com/anomalyco/opencode/issues/36990) [OPEN] [2.0] 恢复 V1 非实验性环境变量兼容** — 4 评论。V2 未保留多个 V1 环境变量行为，涉及迁移破坏性变更。
10. **[#51089](https://github.com/anomalyco/opencode/issues/51089) [OPEN] `mcp.add` 早于工具注册表就绪返回** — 4 评论。MCP 服务连接与工具注册表刷新之间存在竞态，导致新服务器工具不可用。

> 补充：今日新增 [#54435](https://github.com/anomalyco/opencode/issues/54435)（MCP 检测不到，用户对比 Claude 可识别），以及多条 Go 配额类 [#54265](https://github.com/anomalyco/opencode/issues/54265)、[#54263](https://github.com/anomalyco/opencode/issues/54263)，均已进入 triaging。

## 4. 重要 PR 进展

1. **[#54487](https://github.com/anomalyco/opencode/pull/54487)** `feat(session): add experimental.stopping continuation hook` — 实现自然轮次结束前的延续投票，带限次的合成引导循环与持久计数器，对应 Issue #16626。
2. **[#54486](https://github.com/anomalyco/opencode/pull/54486)** `fix(core): hide newer Bedrock bare IDs that require inference profiles` — 延续 #48081 的 Bedrock 排除逻辑，隐藏需要推理配置文件的裸模型 ID（Closes #54485）。
3. **[#54463](https://github.com/anomalyco/opencode/pull/54463)** `feat(tui): 点击粘贴占位符以编辑或内联展开` — 直接回应 #8501 的高赞诉求；作者说明此为 v1 维护分支版本，后续将提交 v2 版本。
4. **[#54287](https://github.com/anomalyco/opencode/pull/54287)** `fix(app): 在首条消息前暴露 MCP 命令` — 部分修复 #54279，使 `/mcp` 及其快捷键在首条消息前可用。
5. **[#54481](https://github.com/anomalyco/opencode/pull/54481)** `fix(app): 在模型目录刷新时保留会话模型选择` — 避免目录刷新短暂缺失模型时，会话被静默回退到最近使用的其他模型。
6. **[#54482](https://github.com/anomalyco/opencode/pull/54482)** `fix: 在 /btw 侧问中携带附带的图片` — 修复侧问只能看到历史图片、看不到刚附上图片的问题。
7. **[#54466](https://github.com/anomalyco/opencode/pull/54466)** `feat(app): 从 composer 引用会话` — 输入 `@` 即可查找其他打开的会话标签与运行中的会话，补上会话间链接能力。
8. **[#54468](https://github.com/anomalyco/opencode/pull/54468)** `fix(tui): 当无匹配斜杠命令时提交以路径结尾的提示词` — 修复绝对路径结尾提示被误判为命令的问题（Closes #54190）。
9. **[#54248](https://github.com/anomalyco/opencode/pull/54248)** `refactor(ui): 用透明度脉冲替换文字微光扫过效果` — 替换 `text-shimmer` 的背景位移动画（Fixes #48708）。
10. **[#54331](https://github.com/anomalyco/opencode/pull/54331)** `docs: 修正 policy action 名称` — 文档示例中使用了被配置 schema 拒绝的 `permission`（Closes #54214）。

> 生态侧今日集中出现多个文档类 PR：[#54475](https://github.com/anomalyco/opencode/pull/54475) opencode-skills-tui、[#54474](https://github.com/anomalyco/opencode/pull/54474) opencode-dir-tree-tui、[#54473](https://github.com/anomalyco/opencode/pull/54473) opencode-secrets-env、[#54479](https://github.com/anomalyco/opencode/pull/54479) gutchapa-opencode-telegram，多为因仓库迁往 V2 而关闭后的重新提交。

## 5. 功能需求趋势

- **会话控制与 Agent 循环**：`/goal` 原生会话目标（#27167）、`session.stopping` 钩子（#16626）显示社区希望更细粒度地控制 agent 的停止与延续行为。
- **TUI / 输入体验**：粘贴文本展开（#8501）、粘贴阈值可配置（#15767）、TUI 渲染回归（#39923）、路径结尾提示提交（#54468）构成一组密集的交互体验议题。
- **模型与提供商扩展**：原生任务路由与推理变体选择（#51972）、桌面端 reasoning 能力展示（#50257）、Kiro (AWS) provider（PR #20491）、Bedrock 模型 ID 处理（#54486）。
- **V2 迁移与兼容性**：环境变量兼容恢复（#36990）、v1/v2 分支策略引发的生态插件重新提交，是当前结构性主线。
- **MCP 与工具生态**：MCP 检测失败（#54435）、`mcp.add` 竞态（#51089）、首条消息前暴露 MCP 命令（PR #54287）。
- **插件扩展能力**：插件无法阻止循环停止、无法参与延续决策，是插件体系的能力缺口。
- **本地记忆 / 个性化**：[#54266](https://github.com/anomalyco/opencode/issues/54266) 提出类似 workbuddy 的本地记忆体，期望跨会话保留偏好（如固定中文回复）。

## 6. 开发者关注点

- **安装与升级链路**：Bun 默认阻止 postinstall 脚本导致 v1.15.1+ 安装失败（#27906），叠加 v1.19.0 引入的 `--major` 升级路径，升级可靠性是当前最直接的使用门槛。
- **v2 迁移摩擦**：仓库迁往 V2 后，多个 v1 PR 被关闭并需重新提交（#54463、#54475、#54474、#54473、#54479），贡献者需承担额外的迁移成本。
- **上下文与长会话稳定性**：自动压缩后 agent 不确认、丢失原始目标（#41358），以及 `@` 提及不刷新新文件（#32747），共同指向上下文管理的可靠性。
- **Provider 层错误处理**：Anthropic 间歇性 400 `tool_use.input` 应为对象（#53865）、Copilot Opus 5.5 思考耗尽输出上限后静默结束（#54269），属难以复现但影响严重的模型交互缺陷。
- **计费与配额透明度**：多条反馈指出 Go/Go Plus 的按模型月度限额与控制台单一聚合仪表盘不一致，且实际用量远低于文档限额即被耗尽（#54265、#54263）。
- **本地化与 triaging 流程**：中文用户反馈（#54435、#54266）增多；同时大量新 Issue 带有 `[pending close, triaging]` 标记，反映分流压力。

---
*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-10-11）

## 今日速览

今日无新版本发布，但社区讨论集中在**稳定性与超时问题**上：Pi 在 ESC 中断思考后卡死（#10031）和 Anthropic 订阅请求在整点/半点挂起（#10019）两条高热度 Issue 持续更新。Linux 原生打包（.deb/.rpm）成为最集中的 PR 方向，同时 TUI 渲染、会话恢复丢失动态工具等回归问题被密集报告。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **[#10031](earendil-works/pi Issue #10031) [CLOSED] Pi 在 ESC 中断思考后偶发卡在 "Working..."** — 28 条评论、3 个赞，今日热度最高。用户报告该问题持续约一个月，只能通过 Ctrl+C 退出后用 `pi -c` 恢复，是影响日常使用的核心稳定性问题。
2. **[#10019](earendil-works/pi Issue #10019) [OPEN] Anthropic 订阅请求在 :00/:30 UTC 挂起** — 8 条评论，会话冻结、spinner 持续转圈，只能 Esc 取消或重启。疑似与请求时序相关的服务端交互问题，影响付费订阅用户体验。
3. **[#8036](earendil-works/pi Issue #8036) [OPEN] Edit 工具在渲染大 diff 时导致 TUI 崩溃** — 9 条评论。约 14.5 MB 的长行 diff 使交互式 TUI 崩溃，且会话恢复时同样触发，是长期未决的渲染性能边界问题。
4. **[#9512](earendil-works/pi Issue #9512) [last-read] GPT-6 Astra 最大推理下压缩触顶摘要输出上限** — 7 条评论、2 个赞。上下文溢出恢复因摘要命中 token 上限而失败，影响新模型高推理档位的长会话可用性。
5. **[#10705](earendil-works/pi Issue #10705) [OPEN] `agent_settled` 中调用 `abort()` 后仍执行已排队的续作** — 3 条评论。SDK 1.1.0 中 abort 成功返回但扩展排队的 continuation 仍发起 HTTP 请求，属于并发控制语义缺陷。
6. **[#9432](earendil-works/pi Issue #9432) [OPEN] 允许 `session_start` 扩展追加稳定系统提示上下文** — 3 条评论。扩展生态希望注入扩展自有指令到基础 system prompt，是插件能力的关键增强请求。
7. **[#10656](earendil-works/pi Issue #10656) [OPEN] DashScope/Qwen 429 `insufficient_quota` 被误判为不可重试的计费错误** — 4 条评论。阿里云该错误码实为瞬时限流，误分类导致无法自动重试，影响 Qwen 用户稳定性。
8. **[#10652](earendil-works/pi Issue #10652) [OPEN] OpenRouter GPT Image 2.5 Flare 图像生成失败** — 3 条评论。Pi 将图像模型发往 chat completions 接口返回 404，暴露多模态路由缺陷。
9. **[#10785](earendil-works/pi Issue #10785) [CLOSED] 恢复会话后动态激活的工具被丢弃** — 2 条评论。`defaultActive: false` 的可选工具在 resume 后失效，影响扩展工作流连续性。
10. **[#10775](earendil-works/pi Issue #10775) [CLOSED] github-copilot provider 在慢/不稳定网络下失败且无可调参数** — 2 条评论。硬编码 5s 超时、零重试、无进度提示，且无环境变量覆盖，反映 provider 网络韧性的普遍短板。

## 重要 PR 进展

1. **[#10789](earendil-works/pi PR #10789) feat(session): 合并 session-JSONL 写入系统调用** — 初始创建与重写改为单次写入承载全部缓冲条目，减少每条目一次 write 的开销，提升会话持久化性能。
2. **[#10784](earendil-works/pi PR #10784) / [#10782](earendil-works/pi PR #10782) feat(coding-agent): 新增 Linux .deb 与 .rpm 打包** — 关闭 #10783，让 Debian/RPM 用户通过原生包管理器安装，替代 `curl | sh` 的 npm 方式。
3. **[#10774](earendil-works/pi PR #10774) [OPEN] fix(tui): 在 herdr 中启用 kitty 图像** — 修复 1.1.0 中 herdr 内联图像失效的回归（#10573 曾使其返回 `images: null`）。
4. **[#10751](earendil-works/pi PR #10751) [OPEN] feat(coding-agent): 使用 pi.dev 配置 schema** — 将 pi.dev schema 端点作为生成配置的规范 `$id`，并用于内置主题与示例。
5. **[#10726](earendil-works/pi PR #10726) fix: 在 codemode 中忽略 Node watch 通知** — 修复 #10725，`node --watch` 下沙箱桥接因收到 worker 通道上的依赖通知而中断。

（过去 24 小时内更新的 PR 共 6 条，以上为全部可归纳条目。）

## 功能需求趋势

- **Linux 原生分发**：多个 Issue/PR（#10783、#10786、#10784、#10782）集中要求 .deb/.rpm 打包，替代 curl 安装。
- **扩展/插件系统能力**：session_start 注入系统提示（#9432）、虚拟模型路由（#10779）、动态工具生命周期（#10785）。
- **SDK 并发与生命周期正确性**：abort 语义（#10705）、system prompt 缺失（#10639）。
- **多模型/多模态支持**：GPT-6 Astra、OpenRouter GPT Image 2.5 Flare、DashScope/Qwen、github-copilot 等 provider 适配问题突出。
- **TUI 渲染健壮性**：大 diff（#8036）、Kitty 图像（#10788、#10774）、鼠标选择删除（#10777）。

## 开发者关注点

- **稳定性优先**：ESC 中断卡死（#10031）、Anthropic 请求挂起（#10019）是最高频痛点，直接影响核心对话流程。
- **超时与重试缺乏可配置性**：github-copilot（#10775）、DashScope 限流误判（#10656）显示硬编码网络参数与错误码分类需改进。
- **会话恢复一致性**：动态工具丢失（#10785）、TUI 恢复崩溃（#8036）说明 resume 路径存在系统性缺陷。
- **扩展 API 语义需明确**：`onPayload` 模型重定向责任（#10776）、abort 与 continuation 竞态（#10705）反映 SDK 契约文档与行为需澄清。
- **错误码分类精度**：429 `insufficient_quota` 被误判为不可重试，提示需按提供商细化限流/计费错误映射。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-11）

## 今日速览

Managed Agent 架构仍是社区最活跃的主线：从 H4b/H4f slice 的边界修复，到 Workspace mount 释放、多 Agent 身份维度，一批高优先级 Issue 在过去 24 小时内集中更新。与此同时，v0.25.1-preview.2 与 nightly 发布同步推进 agent Hosts 绑定修复。性能与稳定性问题（XML 工具调用恢复、非交互模式延迟、子 Agent 结果污染）继续成为开发者反馈焦点。

---

## 版本发布

**v0.25.1-preview.2** 与 **v0.25.0-nightly.20261010.9763580b84** 同期发布，主要变更一致：

- `fix(agents)`: 替换已选远程 Hosts 时不再丢失 bindings（@yiliang114，PR #13430）
- `test(core)`: 关闭 #12693 的 merge 后复查

---

## 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) proposal(serve): Managed Agent 双路径架构与分阶段交付**（51 评论）
   定义保留现有 TypeScript agent loop、将模型推理与工具环境供给解耦的分阶段架构，是当前讨论度最高的设计类 Issue，涉及 session-management、multi-agent、platform-distribution 多条路线图。

2. **[#13851](https://github.com/QwenLM/qwen-code/issues/13851) 非交互（headless/SDK）模式 result 延迟输出**（P1，4 评论）
   最终 `result` 需等待所有托管自动记忆任务（extract + dream）settle 才输出，每个任务消耗 28k–36k token；TUI 与 ACP 则立即返回。属于直接影响 SDK 消费方体验的 P1 缺陷。

3. **[#13746](https://github.com/QwenLM/qwen-code/issues/13746) feat(managed-agent): H4f 公开任务取消与子任务事件流**（5 评论）
   Stage H4 交付图的 H4f slice，与 Stage H5 共享，定义公开 task cancel 及子任务事件/输出游标流。

4. **[#13847](https://github.com/QwenLM/qwen-code/issues/13847) Harness 崩溃阻塞 lead Session**（P2，5 评论）
   当 Hosted Turn 的工具批次只有后台 Agent 启动、没有 Runtime 工作时，无持久化中途状态；Harness 崩溃会卡住主 Session。

5. **[#13492](https://github.com/QwenLM/qwen-code/issues/13492) XML 工具调用恢复丢弃含引号标记的外层调用**（P2，9 评论）
   PR #13515 已防止引号内标记被误派发，但外层调用恢复仍未完成，等待 PR #13579。

6. **[#13787](https://github.com/QwenLM/qwen-code/issues/13787) XML 恢复在大型多调用响应上重复前缀扫描**（P3，5 评论）
   已用有界 direct-parser 复现，属性能类缺陷，对长响应场景影响明显。

7. **[#13874](https://github.com/QwenLM/qwen-code/issues/13874) 子结果中继插入多余 `\n` 污染答案**（P2，4 评论）
   当其他事件拆分 child 的 output_text Part 时，父级 `tool_result` 可能混入子模型从未产生的换行，可破坏代码、JSON 或标识符。

8. **[#13785](https://github.com/QwenLM/qwen-code/issues/13785) Multi-Agent API：公开契约上的 agent 身份维度**（5 评论）
   让多 Agent 执行可归因、树形化、可中断，而非停留在无法被客户端归因的记录上。

9. **[#13865](https://github.com/QwenLM/qwen-code/issues/13865) `@` 文件补全在补充 Unicode 字符下破坏搜索查询**（P2，4 评论）
   当同一行前部或引用路径含补充平面 Unicode 字符时，Ink 与另一套交互实现均受影响。

10. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败**（17 评论）
    由 github-actions bot 触发，可能涉及新的高危漏洞，属需持续跟进的安全类问题。

其他值得留意：#13300（H0c 复查跟进，已关闭）、#13611（LSP diagnostics 复查遗留）、#13723（#13599 复查发现：读缓存失效与持久记录偏差）。

---

## 重要 PR 进展

1. **[#13893](https://github.com/QwenLM/qwen-code/pull/13893) feat(runtime-broker): 保留私有 CSI 本地进程边界**
   在存储解析、子进程启动、资源收养、持久注册等之前，于 Java 本地进程生命周期边界拒绝保留的私有 CSI 文件能力。

2. **[#13816](https://github.com/QwenLM/qwen-code/pull/13816) fix(managed-agent): 工具轮次进入 recovery blocked 时交还 Workspace mount**
   新增 broker 内部 `release-mount` 接口，仅释放托管 Workspace Session 持有的执行挂载。

3. **[#13872](https://github.com/QwenLM/qwen-code/pull/13872) fix(managed-agent): worktree 子运行在合并后 settle（#13753 I2 跟进）**
   处理开启 child Workspaces 前必须解决的复查遗留，并修复已停止的 worktree 运行未丢弃 worktree 的问题。

4. **[#13219](https://github.com/QwenLM/qwen-code/pull/13219) fix(managed-agent): 用终态约束重试循环**
   为 managed-agent 栈中原本无终态的异步重试循环引入预算与终态，修复一处永久卡死的投影。

5. **[#13325](https://github.com/QwenLM/qwen-code/pull/13325) autofix: 关闭 #12692 的 R2 关键复查发现**
   修复八项 Critical 发现，包括一处跨 store 方法的 InnoDB 锁序反转，均基于当前 main 复验。

6. **[#11854](https://github.com/QwenLM/qwen-code/pull/11854) feat: 混合代码模式**
   引入对齐 Codex 的 `tools.mode` 枚举：`direct`、`code_mode`、`code_mode_only`；`code_mode` 下普通工具仍可直接调用，同时暴露隔离的 `exec` JavaScript 工具。

7. **[#13526](https://github.com/QwenLM/qwen-code/pull/13526) feat(runtime): 私有 CSI 工具运行时执行**
   私有文件运行时按当前事务中的精确资源校验新文件历史批次，旧批次仍要求其唯一持久历史事务。

8. **[#13652](https://github.com/QwenLM/qwen-code/pull/13652) feat(core): 从生产到注入全程核算工具结果大小**
   工具结果携带 raw/processed/final 三层大小估算，跨现有输出削减边界，注入在每次新执行调用后记录一次。

9. **[#13681](https://github.com/QwenLM/qwen-code/pull/13681) feat(web-shell): 为轮次中途排队消息增加 Send now（已关闭）**
   轮次运行中输入的消息默认排队，新增立即发送动作。

10. **[#13894](https://github.com/QwenLM/qwen-code/pull/13894) fix(managed-agent): 在保留之前确定发布放置顺序**
    先限定实际持久化的 publication 与原始 Runtime，再选租户 placement，并在 retention、配额、Session writer 锁之前获取 placement。

其他进行中：#13839（FG7 channel 故障门）、#13737（rewind 按来源身份解析遗留轮次）、#13601（只读探索的收敛提醒）、#13748（ACP 桥接展示声明的 Channel 提交）。

---

## 功能需求趋势

- **Managed Agent / Multi-Agent 架构**：双路径架构（#12380）、任务取消与子任务事件流（#13746）、agent 身份维度（#13785）、mount 生命周期（#13816、#13709、#13847），构成当前最集中的需求簇。
- **会话与 Workspace 管理**：session-management、worktree 子运行、Linux 关闭/删除接受测试（#13871）等大量 slice 化推进。
- **上下文与性能**：token 管理缺少 recall / task-success 门（#12333）、XML 恢复重复扫描（#13787）、工具结果大小核算，指向上下文性能（roadmap/context-performance）持续受重视。
- **平台与分发**：Android Phase 2 回归与导出 UX（#13111）、web-shell 侧边栏固定工作区（#12444，已关闭）。
- **CLI / SDK / Headless**：非交互模式延迟（#13851）、SDK 范围缺陷（#13874）显示 SDK 与 headless 路径的一致性需求上升。
- **安全与依赖治理**：CVE 审计失败（#13078）提示依赖供应链是长期关注项。

---

## 开发者关注点

- **多 Agent 可观测性不足**：任务取消、事件流、身份归因、结果污染（#13874）等问题反复出现，开发者希望多 Agent 执行在公开契约上可归因、可中断。
- **Hosted Turn 的崩溃安全性**：多次出现"无 Runtime 工作的批次不提交持久状态"导致主 Session 阻塞（#13847、#13709），反映托管运行时对故障恢复的强需求。
- **性能回归的高频性**：XML 恢复的正则/前缀扫描成本、工具结果大小核算、token 预算缺少 recall 门，说明性能改动需要有可量化的验收标准。
- **非交互与 TUI 行为不一致**：headless/SDK 与 TUI/ACP 在 result 输出时机上差异，是 SDK 使用者最直接的痛点（#13851）。
- **复查遗留（review follow-ups）机制化**：大量 Issue 与 PR 以"R2 review findings""post-merge 复查"形式出现，显示项目在合并后质量控制上投入显著。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-11）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（实际链接指向 codewhale-hq/Codewhale）

## 1. 今日速览

过去24小时无新版本发布，社区动态集中在 **v0.10.2 候选版的缺陷修复** 上：后台长任务可见性、ChatGPT 登录修复、Bash 操作可观测性等问题密集更新。同时新提交了 3 条 `needs-triage` 级别的会话恢复/启动失败问题（含一条 Windows 平台启动崩溃），值得优先关注。PR 方面，针对 Workflow 死锁问题的修复（#6952）已跟进提交。

## 2. 版本发布

无。

## 3. 社区热点 Issues

> 说明：过去24小时内更新的 Issue 共 8 条，以下按重要性全部列出（不足 10 条）。

1. **[#6944](codewhale-hq/Codewhale Issue #6944) [bug, ux, v0.10.2] 后台长任务不可见 + Full Access 阻断后台 API**
   作者 Hmbown。长命令以前台 `bash` 调用发布后被静默转为后台执行，导致长时工作对用户和 agent 双方都"不可见"。涉及 Full Access 模式阻断唯一后台 API，影响核心可用性。评论 1 条。

2. **[#6925](codewhale-hq/Codewhale Issue #6925) [bug, providers] ChatGPT 登录因不支持的 originator 参数被拒**
   作者 Hmbown。0.10.1 的 ChatGPT 登录在登录前即返回 HTTP 400 `invalid_authorize_request`，2026-10-08 的匿名初始授权探测定位到一个多余的 query 参数。属认证阻断级问题，仍无评论。

3. **[#6931](codewhale-hq/Codewhale Issue #6931) [bug, tui, ux, v0.10.2] 每个 Bash/shell 操作可被检视和停止**
   作者 Hmbown。用户报告：长完成输出塌缩为 `N lines omitted ⌥V:output`，仍在运行的静默递归搜索显示 `run running · stale · no output`。属 TUI 可观测性缺陷。

4. **[#6945](codewhale-hq/Codewhale Issue #6945) [bug, workflow-runtime] verify gate 阻断自身角色导致运行死锁**
   作者 Hmbown。一个 verify gate 的 `blocks_role` 指向自己所属角色，导致该阶段在派发时被拒绝（`spawn rejected: workflow gate blocks role 'implement'`），应在 plan admission 阶段失败而非运行时死锁。已有对应 PR #6952。

5. **[#6955](codewhale-hq/Codewhale Issue #6955) [needs-triage] 超过 8 MiB 的会话文档无法 resume/fork，且拒绝信息未给出补救措施**
   作者 7jrxt42BxFZo4iAnN4CX。journal 是推高体积的部分，提示信息缺少可操作建议。属会话持久化可靠性问题。

6. **[#6954](codewhale-hq/Codewhale Issue #6954) [needs-triage] resume 拒绝仍保留原始 sub-agent handoff 的会话**
   作者 7jrxt42BxFZo4iAnN4CX。规范确认流程会比较 Engine 恢复后的消息与保存的文档，导致此类会话无法恢复。与 #6955 同属会话恢复主题。

7. **[#6953](codewhale-hq/Codewhale Issue #6953) [bug, needs-triage] Windows 10 1607 上 v0.10.1 无法启动**
   作者 LmeSzinc。从 v0.10.0 升级后，Windows 10 Pro 1607（build 14393.447）报加载期未解析导入 `DeriveCapabilitySidsFromName`（0xC0000139）。属平台兼容性阻断问题。

8. **[#6933](codewhale-hq/Codewhale Issue #6933) 在不支持的路由上隐藏原生 FIM**
   作者 Hmbown。五文件 FIM 包已在 canonical Engine main 上冻结，原生注册与执行使用同一路由谓词，使不支持或缺失的客户端不再 advertisement 原生 FIM 工具。

## 4. 重要 PR 进展

> 说明：过去24小时内更新的 PR 共 4 条，以下全部列出（不足 10 条）。

1. **[#6952](codewhale-hq/Codewhale PR #6952) [contribution-gate] fix(workflow): plan admission 阶段拒绝阻断自身角色的 gate**
   作者 Lstarsky0。直接修复 #6945 —— gate 同时 `role: "implement"` 与 `blocks_role: "implement"` 会锁死唯一能通过它的角色，导致该阶段派发时运行失败。

2. **[#6950](codewhale-hq/Codewhale PR #6950) [contribution-gate] feat(plugins): 插件 CLI 安装与应用内 OAuth 登录**
   作者 LIghtJUNction。延续 #6805 引入的托管式 OAuth AI provider，解决用户仍需单独终端命令登录、源码安装插件体验割裂的问题。

3. **[#6873](codewhale-hq/Codewhale PR #6873) [bot-authored] chore(deps): 2026-10-06 安全依赖升级**
   作者 devin-ai-integration[bot]。夜间安全扫描，将传递依赖 `source-map-js` 从 1.2.1 升至 1.2.2（经 `postcss@8.5.23` 引入），修复 GHSA-68fv-2mgg-jv7q。

4. **[#6393](codewhale-hq/Codewhale PR #6393) Draft: echolocation、token diet 与 fork-prefix 缓存继承**
   作者 AdityaVG13。设计讨论用工作草稿（非合并候选），方向已与维护者沟通且反馈积极，具体范围（diet 的边界、缓存继承的形态）仍在讨论。

## 5. 功能需求趋势

从本期 Issue 数据提炼，社区（尤其维护者本人）关注方向集中在：

- **TUI 可观测性**：长任务后台化后的状态可见性、Bash/shell 操作的可检视与可停止（#6944、#6931）。
- **会话持久化与恢复**：session 文档体积上限、resume/fork 的容错与补救提示、sub-agent handoff 兼容（#6955、#6954）。
- **工作流运行时正确性**：gate 语义与 plan admission 的校验前置（#6945）。
- **Provider 与认证**：ChatGPT 登录参数修复、应用内 OAuth（#6925、#6950）。
- **工具能力按路由收敛**：仅在不支持路由上隐藏原生 FIM（#6933）。
- **跨平台兼容性**：Windows 旧版启动导入失败（#6953）。

> 注：本期数据未出现 IDE 集成、新模型支持等方向的 Issue，不做推测。

## 6. 开发者关注点

- **失败信息要可行动**：多条 Issue 反复强调"拒绝未给出补救措施"（#6955、#6954），恢复失败应附带明确的解决路径。
- **错误应在最早阶段暴露**：workflow gate 死锁（#6945）暴露的是校验时机问题——应在 plan admission 而非运行期失败。
- **认证不应阻断使用**：ChatGPT 登录的 HTTP 400（#6925）属登录前阻断，优先级高。
- **平台兼容不容忽视**：Windows 10 1607 的 load-time import 崩溃（#6953）影响老系统用户的启动。
- **用户对 agent 内部执行缺乏可见性**：后台静默执行（#6944、#6931）是 TUI 场景下的高频体验痛点。

---
*日报基于 2026-10-11 过去24小时内更新的数据生成；链接沿用数据源提供的形式。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*