# AI CLI 工具社区动态日报 2026-09-16

> 生成时间: 2026-09-16 12:07 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-16）

> 数据来源：各工具 GitHub 仓库当日社区动态摘要。仅基于所提供材料整理，未作外部补充。

---

## 1. 生态全景

当前 AI CLI 工具生态已整体进入**"可靠性打磨期"**：八个工具中没有一个在讲新范式，讨论重心普遍转向回归 bug、状态语义诚实性、计费准确性与跨平台适配。**上下文/会话管理与 Agent（尤其子代理）编排**成为最普遍的战场，几乎所有工具都在同一批问题上迭代。与此同时，模型目录数据同步、用量计量与缓存计费正确性等"看不见的基础设施"问题开始集中浮出水面，反映这些工具已被用于真实生产任务而非演示场景。生态分层也已明显：头部工具以高频 alpha 迭代推进（Claude Code、Codex、Gemini CLI、Qwen Code），而部分工具处于发布前质量收尾状态（DeepSeek TUI、OpenCode）。

---

## 2. 各工具活跃度对比

| 工具 | Issues（本期列出/更新） | PR（本期列出/更新） | Release | 今日热度最高信号 | 迭代阶段 |
|---|---|---|---|---|---|
| **Claude Code** | 10 条热点（另有 3 条关闭） | 2 条（均 CLOSED） | v2.1.273 | #90542 规则契约失效（31 评论） | 高频发版，回归密集 |
| **OpenAI Codex** | 10 条热点（另有 3 条） | 约 12 条（多为 bot 合并） | 4 个 alpha（0.155.0-alpha.7~10） | #41290 Windows/WSL 项目失败（71 评论/52👍） | 稳定版前集中修整 |
| **Gemini CLI** | 10 条热点 | 10 条（部分关闭） | nightly + preview + v0.60.0 正式版 | #22323 子代理误报成功（p1） | 多通道并行发布 |
| **GitHub Copilot CLI** | 10 条热点（多条今日关闭） | **0 条** | v1.0.85（Vim 模式全面开放） | #1322 子代理可观测性（25👍，已关闭） | 功能落地 + 生态打磨 |
| **Kimi Code CLI** | **仅 2 条** | **0 条** | 无 | #2647 配额失控重试 14 小时 | 低频、样本稀疏 |
| **OpenCode** | 10 条热点 | 10 条（含 3 条关闭） | 无 | #37012 保留旧布局（66👍） | PR 活跃、发版停滞 |
| **Pi** | 10 条热点 | 10 条（含 3 条关闭） | 无 | #8061 上下文预算（inprogress） | 密集修复、未发版 |
| **Qwen Code** | 10 条热点 | 10 条 | v0.23.5-preview.0 | #11500 TUI 崩溃 React #185（16 评论） | 高频迭代 + 补 CI |
| **DeepSeek TUI** | 10 条热点 | 10 条（6 条关闭） | 无（v0.9.14 准备期） | #5316 Crate 拆解 EPIC（28 评论） | 发布前质量收尾 |

**关键观察：**
- **发版节奏差异悬殊**：Codex 单日推 4 个 alpha，Gemini CLI 三通道齐发；而 Kimi、OpenCode、Pi、DeepSeek TUI 当日零 Release。
- **PR 活跃度两极**：Codex（bot 批量合并）、Gemini CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI 均在 10 条以上；Copilot CLI 与 Kimi CLI 为 0。
- **样本量警示**：Kimi Code CLI 当日仅 2 条 Issue，趋势判断的代表性有限，阅读时需打折。

---

## 3. 共同关注的功能方向

### 3.1 上下文 / 会话管理（出现频率最高）
- **Claude Code**：#33323 任务队列、#63190 延迟消息、#73661 队列消息 FIFO 逐条处理
- **Pi**：#8061 上下文预算忽略 maxTokens 预留、#9602 compaction 因 thinking 消息溢出
- **Qwen Code**：#11969 思考模型压缩失败（COMPRESSION_FAILED_EMPTY_SUMMARY）
- **Gemini CLI**：`AgentLoopContext` 属性在对象展开中被保留（nightly 修复）
- **诉求共性**：回合中不打断地排队后续输入 + 上下文预算/压缩的稳健性。

### 3.2 子代理 / 多代理编排可靠性
- **Gemini CLI**：#22323 达 MAX_TURNS 误报 success（p1）、#21409 generalist agent 无限挂起（8👍）、#21968 模型不主动用 skills/sub-agents
- **OpenCode**：#13715 嵌套子代理权限请求静默挂起（31👍）、PR #47107 task-parallel 并发子任务、#43282 暴露合法子代理 ID
- **DeepSeek TUI**：#6277 worker 报告轮次被子代消耗、#6244 Fleet 角色选择器阻塞、#6276 steer 回执谎报成功
- **Claude Code**：#84223 子代理 transcript 缺 usage 导致 token 低估约 2/3
- **Codex**：app-server 队列状态系统性缺陷（#44781、#45019）

### 3.3 计费、配额与用量可见性
- **OpenCode**：#37790、#42883、#42969、#39989、#40236 支付成功但订阅未激活/余额异常（群发性）
- **OpenAI Codex**：#44894 周额度消耗异常 5 倍、#27598 额度显示与实际拦截不一致
- **Pi**：#9457 1h 缓存按 5m 费率计费（4👍）、PR #6881 优先采用 provider 上报成本
- **Claude Code**：#93596 Opus 5 输出 token 增长 2-7 倍、#84223 usage 低估
- **跨工具共识**：计量不准确直接侵蚀付费用户信任，是当前最高风险议题之一。

### 3.4 Windows / WSL / 跨平台适配
- **OpenAI Codex**：#41290 Windows+WSL 项目创建删除失败（71 评论，当日最高情绪点）、多条 `windows-os` 标签
- **Claude Code**：#63527 映射驱动器会话历史为空、#93782 WSL2+VS Code 粘贴回归
- **Gemini CLI**：PR #29247 Windows `isWithinRoot` 大小写不敏感、#21983 Wayland 下 browser subagent 失败
- **Pi**：PR #9655 Windows ConPTY 鼠标追踪时序
- **判断**：Windows/WSL 已是跨工具公认的缺陷密度最高平台。

### 3.5 文件编辑安全门禁（DeepSeek TUI 尤为突出）
- **DeepSeek TUI**：#6202 ast-grep-core 语法门、#6204 Rust `syn::parse_file` 校验、#6206 TOML/JSON 配置解析门、#6205 编辑后格式化归一化
- **Gemini CLI**：PR #29244 工具文件写入原子化 + 同路径串行化（防并发编辑静默丢失）
- **共性诉求**：编辑落地前发现缺陷，而非下次构建才暴露。

### 3.6 沙箱与安全边界
- **OpenAI Codex**：PR #45837 隐藏 WSLg 重复 root、#45865 拒绝路径式回退文件名、#45928 限制解析错误内容边界
- **Gemini CLI**：PR #29249 路径守卫同级前缀绕过、PR #29354 rootless podman `--userns=keep-id`
- **Copilot CLI**：#4854 沙箱"允许本地网络"设置无效、#4846 dev tool access 绕过文件策略
- **Claude Code**：#89561 PreToolUse hook "ask" 在 auto 模式下无效

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | CLAUDE.md 规则契约、hooks/权限语义、LLM 网关请求头 | 深度定制 agent 行为的工程团队 | 强调规则遵从与企业网关集成；回归与规则失效并存 |
| **OpenAI Codex** | 沙箱路径语义、app-server 生命周期、TUI 会话级控制 | 跨平台团队、远程开发、桌面端用户 | Rust 重写 + app-server 架构；沙箱安全收紧明显，alpha 高频 |
| **Gemini CLI** | Sub-agent 编排成熟化、AST 代码理解、Memory 隐私 | 大型代码库 + 扩展生态开发者 | A2A server + 多通道发布；架构级 EPIC 多（零依赖沙箱、AST 感知） |
| **GitHub Copilot CLI** | Vim 模式、插件/skills 生态、可观测性 | GitHub 生态既有开发者 | 依托 GitHub 平台；插件体系进入"可用性打磨"，当日零 PR |
| **Kimi Code CLI** | 配额/错误终止策略、会话组织 | Moonshot 生态用户 | 数据极稀疏，问题反馈渠道分散至 CLI 仓库 |
| **OpenCode** | UI 布局偏好、桌面端、并行子任务、轻量模型路由 | 桌面端 + 终端双栖用户 | 订阅制商业化（Stripe）；PR 活跃但发版停滞，计费同步是最大风险 |
| **Pi** | 扩展 API 深化、缓存/计费正确性、模型目录同步 | 扩展开发者、成本敏感生产用户 | 强扩展生态（ModelRuntime/事件退订）；provider 元数据驱动 |
| **Qwen Code** | 多模态媒体管道（omni）、远程/容器 IDE 集成 | 本地部署 + 远程开发用户 | Electron→Tauri 迁移；TUI/Ink 渲染稳定性是当前最大痛点 |
| **DeepSeek TUI** | 文件编辑安全门禁、命令契约架构收敛、TUI 性能 | TUI 重度用户、生产环境部署 | Rust crate 拆解（EPIC-005）+ 发布前质量收尾 |

**定位分化的三条主线：**
1. **企业/深度定制派**（Claude Code、Codex）：规则、沙箱、网关、权限语义。
2. **扩展/生态派**（Gemini CLI、Pi、Copilot CLI）：插件、skills、扩展 API、sub-agent 编排。
3. **商业化/终端体验派**（OpenCode、Qwen Code、DeepSeek TUI、Kimi）：UI 布局、计费同步、多模态、本地模型兼容。

---

## 5. 社区热度与成熟度

**社区热度（按可量化信号）：**
- **最高情绪集中度**：OpenAI Codex #41290（71 评论/52👍）、OpenCode #37012（66👍）与 #17318（49 评论/37👍）——议题分歧小、参与量大，属"全社区共鸣"级。
- **高赞但已关闭**：Copilot CLI #1322（25👍）、#2904（23👍）——需求已被响应，反映社区与维护者较同步。
- **高评论长帖**：Claude Code #90542（31 评论）、DeepSeek TUI #5316（28 评论，EPIC）——偏深度讨论而非情绪宣泄。

**成熟度分层：**
| 层级 | 工具 | 判断依据 |
|---|---|---|
| **快速迭代期** | Codex、Gemini CLI、Qwen Code | 高频 alpha/nightly 发布，架构级 EPIC 并行推进 |
| **功能落地期** | Copilot CLI、Claude Code | 新功能（Vim、网关头）落地，同时回归与长期 Issue 收尾 |
| **修复打磨期** | Pi、OpenCode、DeepSeek TUI | 无 Release 但 PR 密集，集中在正确性修复与发布前收尾 |
| **观察样本期** | Kimi Code CLI | 当日仅 2 条 Issue，无法评估迭代强度 |

**成熟度反直觉信号**：Pi 和 OpenCode 在无发版的情况下 PR 活跃度与 Codex/Gemini 相当，说明**这些工具的工程节奏集中在"修 bug 不发布"阶段**，用户升级体验可能滞后于代码进展。DeepSeek TUI 的 `main` Lint 长时间红灯但 PR rollup 显示绿色（#6268），暴露 CI gate 配置削弱可见性的流程隐患——这是成熟度的负向信号。

---

## 6. 值得关注的趋势信号

### 信号 1：Agent 状态语义诚实性成为核心竞争力
多个工具出现"系统谎报成功"的同类缺陷：Gemini CLI #22323（子代理误报 GOAL success）、DeepSeek TUI #6276（steer 回执谎报投递）、Pi #9577（被 SIGKILL 的 bash 仍 resolve 成功）。**对开发者的参考价值**：在自动化流水线中，不能假设工具返回的 success 是真实的 success，需自行设计验收与超时边界。这将是评估 agent 框架成熟度的关键新维度。

### 信号 2：计费/配额正确性正在成为信任危机点
OpenCode（至少 5 条计费 Issue 群发）、Codex（额度显示与拦截不一致）、Pi（1h 缓存按 5m 计费）、Claude Code（token 低估 2/3）——**四个独立工具同时出现计量问题**。对技术决策者的参考价值：依赖这些工具做成本核算时，应交叉验证 provider 账单与实际用量，并将"以 provider 上报数据为准"（如 Pi #6881 的方向）作为采购评估项。

### 信号 3：模型目录数据同步是隐藏的技术债
Pi 今日最密集的主题（#9485、#9616、#9294、#9566、#9629）全部指向"内置目录与 provider 实际能力脱节"。**参考价值**：当模型迭代速度超过工具目录更新速度时，会触发大规模静默失败。自建模型接入或使用新模型的团队需预留适配时间。

### 信号 4：Windows/WSL 是跨工具公认短板
Codex、Claude Code、Gemini CLI、Pi、Qwen Code 均有 Windows/WSL 相关 Issue 或修复。**参考价值**：Windows 为主的团队在选型时需对跨平台一致性保持预期管理，并在升级前关注版本级回归（多条 Issue 精确指认版本，如 Claude Code 的 2.1.269/2.1.270）。

### 信号 5：沙箱安全边界正在系统性收紧
Codex（3 个安全 PR）、Gemini CLI（路径绕过修复）、Copilot CLI（沙箱策略 Issue）——维护方正主动收紧边界。**参考价值**：升级时需留意路径、文件名、网络策略相关的**行为变更**，尤其是依赖自定义 provider 或非标准工作目录的团队。

### 信号 6：子代理编排从"能用"走向"可信"
Gemini CLI、OpenCode、DeepSeek TUI、Claude Code、Codex 五个工具都在处理子代理/队列的生命周期问题（权限挂起、预算耗尽、排队消息丢失）。**参考价值**：多代理工作流已具备实用价值，但可靠性边界尚未稳定，关键任务应保留人工检查点。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，数据截止 2026-09-16。说明：所给数据中 PR 的评论数均显示为 `undefined`，因此"热门"排行以下方 Issues 中实际互动量、PR 更新活跃度与主题重要性综合判断；所有结论仅基于所提供材料。

## 1. 热门 Skills 排行

1. **pyxel（复古游戏开发）** — PR #525 [OPEN]
   为 Python 复古游戏提供创建、调试与验证流程，支持确定性 headless 运行与逐帧检查。创建于 2026-03-05，更新至 2026-09-16，是名单中长周期持续维护的 Skill。
   https://github.com/anthropics/skills/pull/525

2. **md2video-audio（Markdown 转视频）** — PR #1703 [OPEN]
   零成本将 Markdown 文档编译为带拟真人声配音的 MP4 视频。9 月初提交、9 月中旬仍活跃更新。
   https://github.com/anthropics/skills/pull/1703

3. **proofcore-contract-auditor（智能合约审计）** — PR #1771 [OPEN]
   面向 Web3 开发者，对 Solidity 与 Rust 合约做自动化静态分析，并将审计证明锚定到 TON 区块链。2026-09-15 创建、09-16 更新，为最新提交之一。
   https://github.com/anthropics/skills/pull/1771

4. **document-typography（排版质量控制）** — PR #514 [OPEN]
   解决 AI 生成文档的孤儿换行、孤行段落、编号错位等排版问题。属于覆盖所有文档场景的基础设施型 Skill。
   https://github.com/anthropics/skills/pull/514

5. **Hivemind（多智能体编排）** — PR #1628 [OPEN]
   让 Claude Code 作为唯一规划者/审查者，将机械性工作委派给免费模型上的 headless opencode worker，以降低 token 成本。
   https://github.com/anthropics/skills/pull/1628

6. **ODT（OpenDocument 支持）** — PR #486 [OPEN]
   创建、填充、读取 .odt/.ods 并转换为 HTML，补齐 LibreOffice/ODF 生态缺口。
   https://github.com/anthropics/skills/pull/486

7. **scnet-hpc（高性能计算集群运维）** — PR #1615 [OPEN]
   通过 profile 化 SSH 与 Slurm 工作流操作 SCNet HPC 集群，属垂直领域基础设施 Skill。
   https://github.com/anthropics/skills/pull/1615

8. **skill-quality-analyzer / skill-security-analyzer（元技能）** — PR #83 [OPEN]
   对 Skill 本身做五维质量分析与安全分析，是生态自我治理类提案，创建于 2025-11-06，周期较长。
   https://github.com/anthropics/skills/pull/83

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界（最高热度）** — Issue #492（43 评论）：社区 Skill 以 `anthropic/` 命名空间分发，存在冒充官方、诱导提权的信任边界风险。
  https://github.com/anthropics/skills/issues/492
  相关：Issue #1175 关注 SPO 文档场景下的安全与上下文窗口问题。
  https://github.com/anthropics/skills/issues/1175

- **组织级分享与分发** — Issue #228（16 评论，👍8）：希望在 Claude.ai 内直接做组织内 Skill 共享，而不是发 .skill 文件＋手动上传；Issue #189（👍9）反馈 document-skills 与 example-skills 安装内容重复。
  https://github.com/anthropics/skills/issues/228
  https://github.com/anthropics/skills/issues/189

- **评估与触发机制可靠性** — Issue #556（12 评论，👍7）：`run_eval.py` 中 `claude -p` 从不触发 skills/commands，所有查询触发率为 0%。这是多个 PR（#1298、#1769）共同针对的根因。
  https://github.com/anthropics/skills/issues/556

- **上下文窗口效率** — Issue #1487：`claude-api` Skill 单次工具调用注入约 156k tokens，直接耗尽上下文；Issue #202（已关闭）批评 skill-creator 文档化、冗长，损害 token 效率。
  https://github.com/anthropics/skills/issues/1487
  https://github.com/anthropics/skills/issues/202

- **质量与评审流水线** — Issue #1385 提出"任务前校准 → 对抗式评审 → 交付验证"三道门；Issue #412（已关闭）提出 agent-governance 安全治理模式。
  https://github.com/anthropics/skills/issues/1385
  https://github.com/anthropics/skills/issues/412

- **平台与协议兼容** — Issue #29 询问如何在 AWS Bedrock 上使用 Skills；Issue #16 提议将 Skills 暴露为 MCP 接口。
  https://github.com/anthropics/skills/issues/29
  https://github.com/anthropics/skills/issues/16

- **记忆与状态管理** — Issue #1329 提议 compact-memory，用符号化记法压缩长时运行 agent 的状态。
  https://github.com/anthropics/skills/issues/1329

## 3. 高潜力待合并 Skills（活跃 PR）

- **PR #1769 — Fix skill-creator trigger detection (0% recall)**：直接修复 Issue #1721，与高热度 Issue #556 同源，9 月中旬仍在更新，落地优先级高。
  https://github.com/anthropics/skills/pull/1769

- **PR #1298 — fix(skill-creator): isolate trigger evals, handle Windows/runtime failures**：覆盖触发器评估误判与非触发混淆问题，同为 skill-creator 核心链路修复。
  https://github.com/anthropics/skills/pull/1298

- **PR #1742 — fix(mcp-builder): 支持 mcp>=2 streamable_http_client 与自定义 header**：修复 Issue #1668，属版本兼容性硬需求。
  https://github.com/anthropics/skills/pull/1742

- **PR #1724 — mcp-builder: 评估默认模型更新为 claude-sonnet-5** / **PR #1607 — claude-api: 标记四个退役模型 ID**：均为对齐最新模型状态的时效性修复，合并阻力小。
  https://github.com/anthropics/skills/pull/1724
  https://github.com/anthropics/skills/pull/1607

- **PR #1765 — fix(office): 将 redlining diff 按 UTF-8 解码**（修复 Issue #1707）与 **PR #1734 — 检测 docx 孤儿批注**、**PR #541 — 修复 docx tracked change w:id 与书签冲突导致文档损坏**：文档类修复集中且问题明确。
  https://github.com/anthropics/skills/pull/1765
  https://github.com/anthropics/skills/pull/1734
  https://github.com/anthropics/skills/pull/541

- **PR #538 — fix(pdf): 修正 SKILL.md 大小写敏感文件引用**、**PR #539 — fix(skill-creator): 校验含 YAML 特殊字符的未加引号 description**：低风险高确定性的小修复。
  https://github.com/anthropics/skills/pull/538
  https://github.com/anthropics/skills/pull/539

## 4. Skills 生态洞察

**当前社区最集中的诉求是"可信与可用"：一手抓 Skill 的身份/安全边界（命名空间冒充、权限滥用），一手抓评估触发与上下文开销等基础机制缺陷——新 Skill 的丰富度已不是瓶颈，机制可靠性与信任治理才是。**

---

# Claude Code 社区动态日报（2026-09-16）

## 今日速览

今天社区动态集中在三方面：新版本 v2.1.273 为 LLM 网关引入了一组可选的请求头提示（通过环境变量开启）；一批围绕会话队列、IDE 集成与回归问题的 Issue 持续升温，其中 #90542 关于 CLAUDE.md 规则契约被全面违反的长帖讨论最多；Windows/VS Code/WSL 环境下的回归 bug 仍是高发区。

## 版本发布

**v2.1.273**
- 为 LLM 网关新增请求头：`x-claude-code-request-class`、`x-claude-code-agent-type`、`x-claude-code-prev-tool-durations`、`x-claude-code-compaction`、`x-claude-code-context-compacted`，需通过 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 显式开启。
- 新增一项通知机制（发布说明原文在此处被截断）。
- 链接：https://github.com/anthropics/claude-code/releases

## 社区热点 Issues

1. **#90542 [OPEN] CLAUDE.md 规则契约完全失效（31 条评论）** — 用户报告一份 700 行、正确加载的 CLAUDE.md 规则在 4.5 小时会话中被 Opus 5 逐条违反，包括模型自己刚引用过的规则；摘要提到 9 项杜撰原因、将过期状态断言为当前、静默跳过验收步骤。这是目前评论最多的话题，反映对规则遵从与状态可信度的高度担忧。
   链接：https://github.com/anthropics/claude-code/issues/90542

2. **#33323 [OPEN] 任务队列：排队多个 prompt/任务（19 条评论，48 👍）** — 社区长期高赞需求，希望在复杂项目中预先排入 3-5 个后续任务并顺序/并行执行，而非逐个等待。高 👍 数说明这是普遍工作流痛点。
   链接：https://github.com/anthropics/claude-code/issues/33323

3. **#63527 [OPEN] VS Code 扩展在映射的 Windows 驱动器上会话历史为空（13 条评论，9 👍）** — 带复现步骤的 IDE 集成 bug，影响 Windows + VS Code 用户的会话可见性。
   链接：https://github.com/anthropics/claude-code/issues/63527

4. **#93782 [OPEN] 2.1.269 回归：WSL2 + VS Code 集成终端中听写工具粘贴失效（10 条评论，6 👍）** — 明确标注为 2.1.268 正常的回归，涉及 TUI、IDE、WSL 多个标签，属近期版本质量问题。
   链接：https://github.com/anthropics/claude-code/issues/93782

5. **#63190 [OPEN] 延迟消息：回合结束时再投递输入（8 条评论，14 👍）** — 目前回合中发送消息只能作为 interrupt 注入并改变任务轨迹，社区希望有非打断式的排队投递方式。
   链接：https://github.com/anthropics/claude-code/issues/63190

6. **#93596 [OPEN] Opus 5 在 xhigh 下几乎每次请求都思考、输出 token 增长 2-7 倍（4 条评论）** — 自 9 月 11 日 UTC 01:30-03:30 起，在客户端与设置未变的情况下出现，涉及成本与模型行为，值得关注是否影响计费。
   链接：https://github.com/anthropics/claude-code/issues/93596

7. **#94349 [OPEN] VS Code 2.1.270 回归：从聊天头部重命名会话立即回退（4 条评论，4 👍）** — 又一个精确版本定位的回归问题，IDE 用户体验受损。
   链接：https://github.com/anthropics/claude-code/issues/94349

8. **#84223 [OPEN] 子代理 transcript 常缺最终累计 usage，token 统计低估最多约 2/3（3 条评论）** — 带复现，直接影响用量核算与成本可见性，对依赖 transcript 做统计的团队尤其关键。
   链接：https://github.com/anthropics/claude-code/issues/84223

9. **#94466 [OPEN] Desktop Commander MCP 在 Cowork/Code 会话中失败："Version negotiation failed"（1 条评论）** — 标注为回归，跨 Windows/macOS、涉及 MCP、Cowork、Desktop 多区域，反映 MCP 与共享池会话的兼容问题。
   链接：https://github.com/anthropics/claude-code/issues/94466

10. **#89561 [OPEN] PreToolUse hook 的 "ask" 权限决策在 auto 模式下无阻断效果（1 条评论）** — 涉及 hooks 与 permissions 的安全语义，若在非交互模式下 "ask" 被静默忽略，可能带来意料之外的放行。
    链接：https://github.com/anthropics/claude-code/issues/89561

其他值得留意：#50529（cron 表达式增加 IANA 时区字段，已关闭）、#70329（会话自动标题锁定在被打断的首条消息，已关闭）、#83014（advisor agent 强制恢复失败代理，已关闭并标记 stale）。

## 重要 PR 进展

本次数据仅提供 2 条 PR 记录，均来自同一作者 poteat、涉及 `mods/diff`，且均为 CLOSED：

1. **#94653 [CLOSED] diff：首次编辑只在布局可停靠的位置打开面板** — 修复 `mods/diff` 在终端宽度达到 144 列时，无论布局能否停靠都在 Claude 首次成功编辑后打开面板的问题；在主屏幕（`CLAUDE_CODE_NO_FLICKER=0`）下不应发生停靠。
   链接：https://github.com/anthropics/claude-code/pull/94653

2. **#94594 [CLOSED] diff：仅在自带面板会运行时执行 git，而非会话启动时** — 修复 `mods/diff` 在 `session.start` 钩子中固定仓库的问题（一次 `git rev-parse` 加一次全工作区 `git status --porcelain -z --untracked-files=all`，且均为 await），该行为会阻塞引擎接收首个 prompt。
   链接：https://github.com/anthropics/claude-code/pull/94594

说明：过去 24 小时内更新的 PR 仅此 2 条，无法凑满 10 条，此处按实际数据呈现，不作虚构补充。

## 功能需求趋势

从全部 Issues 标签与摘要中可提炼出以下方向：

- **输入与会话编排**：任务队列（#33323）、延迟消息（#63190）、队列消息按 FIFO 逐条处理而非合并（#73661）——核心诉求是"回合中不打断地安排后续工作"。
- **IDE 集成质量**：VS Code 会话历史（#63527）、会话重命名回归（#94349）、WSL 集成终端粘贴回归（#93782）——IDE 与终端环境组合成为 bug 高发地带。
- **Agent 视图与可发现性**：`claude agents`（FleetView）增加按名称/prompt 的搜索与过滤（#64575）。
- **成本与用量可见性**：Opus 5 输出 token 异常增长（#93596）、子代理 transcript 缺 usage 导致低估（#84223）。
- **权限与安全语义**：PreToolUse hook 的 "ask" 在非交互模式下的阻断行为（#89561）。
- **平台与网络环境适配**：Windows 映射驱动器、WSL2、mosh 等非标准终端（#86515 SGR 2 faint 渲染问题）。
- **调度与自动化**：定时触发 cron 增加时区字段（#50529）。
- **可访问性与国际化**：为英文文本（尤其 thinking 块）提供逐词对照翻译（#87810）。

## 开发者关注点

- **规则遵从与状态可信度**：#90542 揭示的不只是单条规则失效，而是模型杜撰原因、把过期状态当作当前状态、跳过验收步骤，这类问题会直接削弱对 agent 自主执行的信任。
- **回归频发的版本节奏**：多个 Issue 精确指认版本（2.1.269、2.1.270），并给出"前一版本正常"的对照，说明升级带来的兼容性与体验回退是当前高频痛点。
- **Windows / WSL / 非标准终端是重灾区**：路径大小写、映射驱动器、集成终端粘贴、桌面端卡死（#87366）、插件加载失败（#74912）等集中在此类环境。
- **计量不准确影响成本决策**：子代理 usage 缺失与 xhigh 下 token 激增，使开发者难以可靠预估和归因开销。
- **非交互模式下的权限语义**：hooks 返回 "ask" 被忽略，意味着自动化流程中的"人工确认"意图可能落空，需谨慎设计。
- **等待中的高频体验改进**：队列化输入、回合末投递、agent 会话可搜索，都是评论数与 👍 数长期累积但尚未落地的需求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-16）

## 今日速览

今日 Codex 仓库密集推送 4 个 `rust-v0.155.0-alpha.7 ~ alpha.10` 预发布版本，迭代节奏明显加快。社区侧热度最高的仍是 **Windows/WSL 环境切换导致项目创建与删除失败**（#41290，71 条评论、52 个赞），同时"app-server queued follow-up no longer exists"类问题在两个独立 Issue 中持续发酵，指向 app-server 队列状态的系统性问题。合并侧，一批 `copyberry[bot]` 提交集中修复了沙箱路径 URI、权限摘要、TUI 会话级模型选择等底层行为。

---

## 版本发布

过去 24 小时内连续发布 4 个 alpha 版本，均属 `rust-v0.155.0` 预发布通道：

- `rust-v0.155.0-alpha.7`
- `rust-v0.155.0-alpha.8`
- `rust-v0.155.0-alpha.9`
- `rust-v0.155.0-alpha.10`

Release 说明仅包含版本号本身，**未附带变更日志**，具体改动需结合同期 PR 判断。这种高频 alpha 推送通常对应 0.155.0 稳定版发布前的集中修整期。

---

## 社区热点 Issues

1. **[#41290](https://github.com/openai/codex/issues/41290)** — [Windows][WSL][26.825.31414] 切换 Agent Environment 到 WSL 后，项目创建与删除失败。**71 条评论、52 赞**，是今日社区情绪最集中的问题，说明 Windows + WSL 组合在 Codex 桌面端仍是高风险路径。

2. **[#44781](https://github.com/openai/codex/issues/44781)** — [Codex Desktop] 编辑并重发排队消息触发 "App-server queued follow-up no longer exists"。39 条评论、46 赞。与 #45019 同源，属于**影响日常对话流的阻塞性缺陷**。

3. **[#45019](https://github.com/openai/codex/issues/45019)** — 同一错误文案的独立报告（15 条评论、45 赞）。两个高赞 Issue 指向同一症状，说明问题覆盖面广而非个例。

4. **[#43398](https://github.com/openai/codex/issues/43398)** — GPT-5.5 / GPT-5.6-Sol / GPT-6 Astra 均报 "Selected model is at capacity"，仅 5.4-mini 可用。**多款高端模型同时不可用**，对 Pro 付费用户影响直接。

5. **[#13852](https://github.com/openai/codex/issues/13852)** — Supabase MCP 反复要求重新认证，OAuth token refresh 在 initialize 阶段失败。自 2026-03 创建、至今仍在更新，是**长期未收敛的 MCP 认证问题**。

6. **[#45925](https://github.com/openai/codex/issues/45925)** — `stream disconnected before completion` 为账号级现象，切换 ChatGPT 账号后失败率变化约 7 倍。该报告提供了**可量化的归因线索**，对排查连接层问题有参考价值。

7. **[#44894](https://github.com/openai/codex/issues/44894)** — GPT-6 Astra 周额度消耗速度突然变为正常的约 5 倍，且发生在付费 $80 重置之后。涉及**计费与配额透明度**，属高敏感议题。

8. **[#27598](https://github.com/openai/codex/issues/27598)** — VS Code 与 Codex Desktop 显示仍有 5h/7d 额度，却提示 "workspace is out of credits"。额度显示与实际拦截逻辑**不一致**。

9. **[#44767](https://github.com/openai/codex/issues/44767)** — Codex CLI 0.154.0 在 tmux 内启动时挂起。影响 Linux 终端重度用户（Organizational 订阅）。

10. **[#37969](https://github.com/openai/codex/issues/37969)** — macOS 上 SSH 连接主机无法在本地恢复部分线程，孤立 app-server 以 409 阻塞 Remote 配对。涉及**远程开发 + app-server 生命周期**的复合问题。

其他值得留意的还有 #45703（VS Code 持久化线程恢复失败："list_turns is not supported yet"）、#45919（Windows 新建本地聊天报 "Unknown local project"）、#35560（ChatGPT.exe 启动约 30 秒后静默退出）。

---

## 重要 PR 进展

今日合并的 PR 几乎全部来自 `copyberry[bot]`，主题集中在**沙箱路径语义、安全边界与 TUI 交互**：

1. **[#45863](https://github.com/openai/codex/pull/45863)** — 在权限配置的 workspace roots 中保留 executor 的 PathUri，避免把非本机路径约定转换为宿主路径导致语义丢失。

2. **[#45852](https://github.com/openai/codex/pull/45852)** — 权限摘要同样保留 executor 路径约定，不在宿主机文件系统命名空间下解释这些路径。

3. **[#45837](https://github.com/openai/codex/pull/45837)** — 在受限 Linux 沙箱中隐藏 WSLg 的重复 root，防止其绕过路径掩码暴露沙箱外文件系统内容。**安全相关，值得关注**。

4. **[#45865](https://github.com/openai/codex/pull/45865)** — 拒绝 `project_doc_fallback_filenames` 中的路径式回退文件名，避免探测 Windows 网络路径时泄露环境凭据。

5. **[#45928](https://github.com/openai/codex/pull/45928)** — 限制模型目录解析错误的内容边界，并对请求超时进行分类。修复了解析错误可能携带完整响应体与 payload 值的泄露风险。

6. **[#45822](https://github.com/openai/codex/pull/45822)** — 为 HTTP transport 增加可选的响应体大小上限，供接受 provider 控制模型目录的调用方在解码前设限。

7. **[#45831](https://github.com/openai/codex/pull/45831)** — TUI 支持**仅会话级**的模型与 reasoning 选择（新增 `s` 快捷键），不覆盖未来线程的已保存默认值。

8. **[#45845](https://github.com/openai/codex/pull/45845)** — 编辑较早的 TUI prompt 时通过 `thread/revert` 回退当前线程，移除所选 turn 及其后历史后在编辑器中恢复该 prompt，同时保留线程身份与设置。

9. **[#45854](https://github.com/openai/codex/pull/45854)** — 新增 `/daemon` 菜单，为本地后台服务器提供带包源选择和确认步骤的更新流程，替代原先跳转 shell 命令的提示。

10. **[#45849](https://github.com/openai/codex/pull/45849)** — 在 `tokio::select!` 循环间保持 app-server 关机信号 future 处于 pinned 状态，避免其他事件反复取消并重建该 future。**与当前大量 app-server 相关 Issue 直接相关**。

另有 #45823（release 依赖满足时执行 R2 发布，避免继承 GitHub Actions 默认 skip 语义）、#45825（时钟读取失败的非致命处理）、#45915（Code Mode wrapper 对 Guardian 模型策略透明化）等值得关注。

---

## 功能需求趋势

- **Windows/WSL 环境适配**：今日 Issue 中反复出现 `windows-os` 标签（#41290、#45709、#45919、#45896、#35560），涵盖项目创建、会话 ID 路由、浏览器/Computer Use 沙箱校验、进程静默退出等，Windows 已成为缺陷密度最高的平台。
- **app-server 稳定性与线程生命周期**：`app-server` 标签高频出现（#44781、#45019、#43468、#37969、#23996、#45703），核心症状集中在排队消息丢失、线程恢复失败、turn 事件路由到未知会话。
- **MCP 认证与集成体验**：#13852 反映出 MCP 工具的 OAuth 刷新流程在长周期使用中不可靠，是第三方工具生态接入的关键摩擦点。
- **计费与配额一致性**：#8581、#27598、#44894 集中反映额度显示、账单周期对齐、异常消耗三类问题，属付费用户的信任基础。
- **IDE 与 TUI 的会话控制**：#45831、#45845、#45703 显示社区希望在不改动全局默认的前提下，对单个会话的模型、reasoning 与历史做更精细的操作。

---

## 开发者关注点

1. **失败不可自诊断**：多个高频 Issue 的报错文案晦涩（如 "App-server queued follow-up no longer exists"、"Unknown local project"、"list_turns is not supported yet"），开发者难以自行定位是客户端、app-server 还是账号侧问题。

2. **平台一致性落差**：同一功能在 macOS、Windows、WSL、VS Code 扩展下的行为不一致（额度显示、沙箱状态、线程恢复），跨平台开发者需承担额外排查成本。

3. **账号级异常难归因**：#45925 用切换账号对比失败率的方式提供了可复现思路，但官方尚未给出系统性解释；#44894 的配额异常消耗同样缺少可核对的消耗明细。

4. **对沙箱安全的关注上升**：今日合并的多个 PR（#45837、#45865、#45928）均针对凭据泄露与沙箱逃逸路径，表明维护方正收紧边界，开发者升级时需留意路径与文件名相关的行为变化。

5. **长期未收敛问题消耗信任**：#13852（2026-03 创建）、#8571/#8581（2025-12 创建）、#23996（2026-05 创建）在今日仍有更新，说明部分问题已存在数月，社区对修复节奏存在预期落差。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-16）

## 今日速览

今日发布 v0.62.0-nightly、v0.61.0-preview.0 与正式版 v0.60.0，核心修复集中在 Web Fetch 连接路由、MCP OAuth 安全校验与 AgentLoopContext 状态保留。社区侧，子代理生命周期问题（误报成功、挂起、恢复）与 Auto Memory 隐私/质量问题是讨论最密集的两条主线。

---

## 版本发布

**v0.62.0-nightly.20260916.g6a466a7e2**
- `fix(core)`：确保 `AgentLoopContext` 属性在对象展开（object spread）过程中被保留（#29335）
- `fix(a2a-server)`：在 tasks metadata 端点遇到不支持的 store 时提前返回
- 链接：https://github.com/google-gemini/gemini-cli/pull/29335

**v0.61.0-preview.0**
- 包含 v0.60.0-preview.0 与 v0.59 的 changelog
- 版本号由 nightly 0.61.0-nightly.20260908.gc647533d6 提升而来
- 链接：https://github.com/google-gemini/gemini-cli/pull/29251

**v0.60.0（正式版）**
- `fix(core)`：改进 Web Fetch 工具的目标地址校验与连接路由（#29120）
- `fix(core)`：在 MCP OAuth 流程中强制实施 RFC 9207 issuer 标识
- 链接：https://github.com/google-gemini/gemini-cli/pull/29120

---

## 社区热点 Issues

1. **#22323 [p1] Subagent 达到 MAX_TURNS 被误报为 GOAL success**（13 条评论，👍2）
   子代理在尚未完成分析即触达轮次上限时，仍以 `status: "success"` 和 `Termination Reason: "GOAL"` 上报，掩盖了实际中断。这是 agent 可靠性中最需优先处理的语义正确性问题。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#19873 [p2] 通过零依赖 OS 沙箱与执行后意图路由利用模型的 bash 亲和性**（9 条评论）
   提议针对 Gemini 3 天生偏好的 `grep`/`cat`/`sed`/`awk` 等 POSIX 工具链行为，构建零依赖沙箱方案，属于架构级增强（effort/large）。
   https://github.com/google-gemini/gemini-cli/issues/19873

3. **#21409 [p1] Generalist agent 无限挂起**（8 条评论，👍8）
   每当 CLI 转交 generalist agent 后即永久挂起，连简单的创建文件夹也会卡死，用户等待长达一小时才取消。点赞数最高，说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

4. **#22745 [p2] 评估 AST 感知的文件读取、搜索与代码映射**（7 条评论）
   EPIC 级议题，探讨通过 AST 精确定位方法边界以减少工具调用轮次，可能显著改善大型代码库下的效率。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 [p2] Gemini 不够主动使用 skills 与子代理**（6 条评论）
   用户反馈除非显式指令，模型几乎不会自主调用自定义 skills 和 sub-agents，削弱了扩展机制的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#26525 [p2] Auto Memory 需要确定性脱敏并减少日志**（5 条评论）
   Auto Memory 会在脱敏之前就把 transcript 内容发送给后台抽取 agent，属隐私风险点。
   https://github.com/google-gemini/gemini-cli/issues/26525

7. **#25166 [p1] Shell 命令执行完成后仍卡在 "Waiting input"**（4 条评论，👍3）
   命令已结束但 UI 仍显示活跃并等待输入，直接影响日常交互体验。
   https://github.com/google-gemini/gemini-cli/issues/25166

8. **#21983 [p1] browser subagent 在 Wayland 下失败**（4 条评论）
   Linux Wayland 环境的浏览器子代理不可用，涉及显示服务器兼容性。
   https://github.com/google-gemini/gemini-cli/issues/21983

9. **#24246 [p2] 工具数超过 128 时触发 400 错误**（3 条评论）
   工具上下文膨胀导致请求失败，期望 agent 更智能地按启用状态收敛工具范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#22672 [p2] Agent 应阻止/抑制破坏性行为**（3 条评论，👍1）
    模型在复杂 git 操作中会使用 `git reset` 或 `--force`，即使存在更安全的替代方案。
    https://github.com/google-gemini/gemini-cli/issues/22672

---

## 重要 PR 进展

1. **#29354 [p2] fix(cli): rootless podman 沙箱使用 `--userns=keep-id`**
   修复 rootless podman 下挂载工作目录出现 `EACCES`、导致 `node-gyp` 无法重建原生依赖的问题。
   https://github.com/google-gemini/gemini-cli/pull/29354

2. **#29249 [p1] fix(core): 修复 `get_internal_docs` 路径守卫的同级前缀绕过**
   原守卫使用无路径分量边界的字符串前缀比较，可被同名前缀的兄弟目录绕过，属安全修复。
   https://github.com/google-gemini/gemini-cli/pull/29249

3. **#29244 [p1] fix(core): 工具文件写入原子化并串行化同路径写入**
   并行工具执行下，两个并发 `replace` 读取同一原始内容时会静默丢失编辑，此 PR 解决写冲突。
   https://github.com/google-gemini/gemini-cli/pull/29244

4. **#29247 fix(core): Windows 下 `isWithinRoot` 改为大小写不敏感**
   驱动盘符或目录大小写不一致时会错误拒绝合法路径，影响 ACP/IDE 文件系统路由。
   https://github.com/google-gemini/gemini-cli/pull/29247

5. **#29163 [p1] fix(cli): 防止在 git 仓库中认证时崩溃**（已关闭）
   修复 macOS Seatbelt 等受限权限环境下，`useGitBranchName` hook 挂载导致启动崩溃。
   https://github.com/google-gemini/gemini-cli/pull/29163

6. **#29156 fix(core): 停止在 shell 执行中清空用户 git 配置**（已关闭）
   `ShellExecutionService.prepareExecution` 曾将所有命令的 `GIT_CONFIG_GLOBAL`/`SYSTEM` 指向 `/dev/null`（源自 #28792），隐藏了用户真实配置。
   https://github.com/google-gemini/gemini-cli/pull/29156

7. **#29151 [p1] fix(core): 技能优先级与激活状态改为大小写不敏感**（已关闭）
   修复 `SkillManager` 中 skill 名大小写不一致时，覆盖优先级与激活跟踪失效的问题。
   https://github.com/google-gemini/gemini-cli/pull/29151

8. **#29155 fix(core): `isEmpty` 正确解码 BOM 内容**（已关闭）
   原先即使检测到 BOM 仍按 UTF-8 解码，导致 UTF-16/UTF-32 的纯空白 plan 文件被解析为 NUL 字符。
   https://github.com/google-gemini/gemini-cli/pull/29155

9. **#29248 fix(cli): 避免确认后产生重复历史与遥测**
   修复确认操作（如 `/resume save <tag>`）后 slash 命令历史与遥测重复记录的问题。
   https://github.com/google-gemini/gemini-cli/pull/29248

10. **#29353 [p2] docs(config): 修正环境变量脱敏设置说明**
    更正配置指南中的脱敏设置路径，并明确脱敏默认关闭、需显式启用。
    https://github.com/google-gemini/gemini-cli/pull/29353

---

## 功能需求趋势

- **Sub-agent / Agent 编排体系成熟化**：大量议题（#20195 Sprint 1、#21968 技能调用不足、#22232 会话接管与锁恢复、#22267 settings 覆盖被忽略、#21000 原生文件工具维护任务追踪）集中指向子代理的可靠性、可配置性与自主调度能力。
- **代码理解智能化**：#22745 的 AST 感知读取/搜索/映射 EPIC，反映社区希望减少工具调用轮次、提升大代码库检索精度。
- **沙箱与执行安全**：#19873 的零依赖 OS 沙箱、#22672 的破坏性命令抑制、#29354 的 podman 权限修复，构成执行环境的连续改进线。
- **Memory 系统的隐私与质量**：#26525、#26522、#26523、#26516 四条议题同时更新，覆盖脱敏时序、低信号会话重试、无效补丁隔离等。
- **工具上下文规模治理**：#24246 指出工具数超限触发 400 错误，指向工具选择与上下文收敛机制。
- **IDE / 跨平台支持**：#29247 的 Windows 路径大小写、#21983 的 Wayland 兼容、ACP/IDE 路由相关修复显示跨平台一致性仍是短板。

---

## 开发者关注点

- **可靠性优先于新功能**：多条 p1 议题（#21409 挂起、#22323 误报成功、#25166 卡在等待输入、#22186 输出 hook 崩溃）指向 agent 生命周期与状态机的稳定性缺口，且多数带有 `status/need-retesting`，说明修复后仍待验证。
- **状态语义必须诚实**：子代理在触达上限时不应以 success/GOAL 掩盖中断，开发者对可观测性与错误传播的准确性要求明确。
- **模型行为可控性**：不主动使用 skills/sub-agents、随意生成临时脚本（#23571）、过度使用破坏性 git 命令，都是"模型自主性"与"用户预期"之间需要调优的张力点。
- **安全与隐私默认值需审慎**：路径前缀绕过（#29249）、MCP OAuth issuer 校验、环境变量脱敏默认关闭（#29353）、Auto Memory 脱敏时序（#26525）共同说明默认配置下的安全边界仍受关注。
- **跨平台细节体验**：Windows 路径大小写、Wayland 浏览器代理、rootless podman 权限，均属影响可用性的高频环境适配问题。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-16）

## 1. 今日速览

今天发布 v1.0.85，Vim 模式正式面向所有用户开放，并新增可选择性启用上下文管理工具的 `/settings` 选项。社区侧，多条长期 Issue 集中关闭（推理强度配置、子代理工具调用详情、Windows 外部编辑器支持等），同时插件体系（skills 不可达、plugin skills 未注入）与沙箱策略问题仍是活跃讨论焦点。过去 24 小时无 PR 更新。

## 2. 版本发布

**v1.0.85**（2026-09-16）
- Vim 模式全面开放：通过 `/vim` 或设置 `editorMode` 为 `vim` 即可在输入框中启用模态编辑，输入时会显示当前模式。
- 新增 `/settings` 选项，可选择性为 agents 和 subagents 启用上下文管理工具。
- 另含 `transcriptView` 相关设置（原文信息不完整，未作推断）。

**v1.0.84-9**
- 新增：为 agents 和 subagents 提供上下文管理工具的 `/settings` 开关。
- 改进：减少大型本地会话历史的元数据扫描时间，代价是线程与内存占用上升。
- 修复：End 与 Ctrl+E 可将光标移动到折行末尾（原文被截断）。

## 3. 社区热点 Issues

1. **#2904 [CLOSED] 自定义 Agent YAML Frontmatter 应支持 reasoning effort**（评论 9，👍23）
   `.agent.md` 可固定 `model`，但无法按 agent 设置推理强度。高赞且已关闭，说明按 agent 精细化控制模型行为的需求获得响应。
   https://github.com/github/copilot-cli/issues/2904

2. **#1322 [CLOSED] 展示 subagent 工具调用详情**（评论 7，👍25）
   当前 subagent 运行信息过少，用户希望像 VS Code Copilot Chat 那样可下钻查看工具调用。本批 Issue 中点赞最高，可观测性诉求强烈。
   https://github.com/github/copilot-cli/issues/1322

3. **#2050 [CLOSED] Claude Sonnet 4.6 执行失败（CAPIError 503 / HTTP2 GOAWAY）**（评论 9，👍4）
   重试 5 次、累计等待约 84.7 秒仍失败，而 Gemini 3 Pro 无此问题。涉及模型可用性与网络稳定性，影响真实任务执行。
   https://github.com/github/copilot-cli/issues/2050

4. **#4438 [OPEN] `disable-model-invocation: true` 使 skill 完全不可达**（评论 6，👍7）
   `copilot skill list` 能看到该项目 skill，但模型的 `skill()` 工具返回 "Skill not found"，显式调用也失败——语义应为"仅手动"，而非"不可用"。
   https://github.com/github/copilot-cli/issues/4438

5. **#2243 [OPEN] Worktrees 应默认禁用**（评论 3，👍16）
   用户报告会话被交给 CLI 后产生大量代码却难以处理，主张 worktrees 仅应由人工显式启用。高赞，反映对自动修改工作区的担忧。
   https://github.com/github/copilot-cli/issues/2243

6. **#2734 [OPEN] 插件自动更新（全部或按插件）**（评论 3，👍13）
   市场插件更新后需手动检查与应用，容易长期运行带 bug 的旧版本。高赞且属插件生态基础设施。
   https://github.com/github/copilot-cli/issues/2734

7. **#3954 [OPEN] `explore` 工具硬编码 `gpt-5.4-mini`，忽略自定义/DeepSeek 配置**（评论 4，👍3）
   调用 `explore` 时无视已配置的自定义模型端点。对使用自建模型接入的用户影响直接，涉及配置一致性。
   https://github.com/github/copilot-cli/issues/3954

8. **#4765 [OPEN] 工作目录非仓库根时无法读取配置**（评论 2）
   在"多个 repo 并列、工作区本身不是 git 仓库"的结构下，CLI 无法读取 `.mcp.json` 或 hook 文件。影响 MCP 与 hooks 的实际可用性。
   https://github.com/github/copilot-cli/issues/4765

9. **#2753 [OPEN] 插件 skills 未进入主 agent 的 available_skills**（评论 2）
   `/skills` UI 正确显示全部 18 个 skill，但系统提示中的 `<available_skills>` 只含内置 skill，导致插件 skill 实际不可被发现。
   https://github.com/github/copilot-cli/issues/2753

10. **#4854 [OPEN] 本地沙箱"允许本地网络"设置无效**（评论 3）
    无论开关如何，`/sandbox policy` 均显示网络被阻止，`/restart`、`/reset` 与手动重启均无效。属新近反馈的沙箱策略问题。
    https://github.com/github/copilot-cli/issues/4854

> 其他值得留意：#4220（plan 模式误判只读 `gh api` 为可能修改工作区，已关闭）、#4846（启用"allow dev tool access"时沙箱文件策略被忽略，已关闭）、#1392（LSP 需要可配置的 `initializeTimeout`，已关闭）、#2778（询问 Claude Code 的 `/btw` 何时引入）、#3170（中文输入光标位置错误，已关闭）。

## 4. 重要 PR 进展

过去 24 小时内无 Pull Request 更新（共 0 条），本期不作展开。

## 5. 功能需求趋势

- **Agent / 模型细粒度控制**：按 agent 设置 reasoning effort（#2904）、`explore` 工具尊重自定义模型配置（#3954），指向"配置应被一致地遵守"。
- **可观测性**：subagent 工具调用详情（#1322）是最高赞需求之一，用户希望看到代理在做什么。
- **插件与 skills 生态**：插件自动更新（#2734）、`disable-model-invocation` 语义（#4438）、plugin skills 未注入提示（#2753），说明插件机制已进入"可用性打磨"阶段。
- **配置与 MCP 加载**：非仓库根目录读取 `.mcp.json`/hooks（#4765），反映多 repo 工作区场景未被覆盖。
- **沙箱与权限**：本地网络设置失效（#4854）、dev tool access 绕过文件策略（#4846）、plan 模式只读误判（#4220），安全边界与误报是持续主题。
- **编辑器与终端体验**：Vim 模式落地，但 Windows 外部 `.bat`/`.cmd` 编辑器（#1882）、中文输入光标（#3170）等输入层问题仍在收尾。

## 6. 开发者关注点

- **代理行为透明度不足**：subagent 执行细节不可见（#1322），是社区情绪最集中的痛点。
- **自动修改工作区的风险**：worktrees 默认行为引发对"代码被自动生成却难以收拾"的担忧（#2243）。
- **配置被静默忽略**：自定义模型、沙箱开关、skill 可见性等多处出现"设置了但不生效"，削弱信任。
- **插件/skill 生命周期不完整**：更新需手动、skill 不可达、未注入系统提示，阻碍生态规模化。
- **网络与模型稳定性**：CAPI 503 / HTTP2 GOAWAY 导致重试超时（#2050），直接影响长任务可靠性。
- **多仓库、非仓库根工作流的适配缺失**（#4765），对实际工程布局考虑不足。

---
*本日报仅基于 github.com/github/copilot-cli 提供的 Issues、Releases 与 PR 数据整理；部分 Issue/Release 原文存在截断，相关细节未作推测补充。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-16）

## 1. 今日速览

过去 24 小时内无新版本发布、无 PR 更新，社区动态集中在 Issue 区：一条是配额耗尽后会话失控重试的严重资源消耗问题（#2647），另一条是希望会话标题自动带创建日期前缀的功能建议（#2646）。前者暴露出配额错误终止逻辑的缺陷，值得维护者优先关注；后者属于易用性诉求，且提交者反映了 Kimi Work / Kimi Desktop 缺少公开 issue tracker 的问题。

## 2. 版本发布

过去 24 小时无新 Release，本节省略。

## 3. 社区热点 Issues

过去 24 小时内更新的 Issue 共 2 条，全部列出如下：

1. **[OPEN] 终端 403 "5-hour usage limit" 后会话持续消耗配额：子代理脱离父进程形成重试循环，隔夜调用 kimi CLI；主代理重试 14 小时**
   - 作者: gleb7499 | 创建/更新: 2026-09-16 | 评论: 0 | 👍: 0
   - 重要原因：报告描述了配额耗尽（`403 provider.auth_error: 5-hour usage limit`）后的三重异常行为——主代理对失败的 LLM 请求持续重试 14 小时以上而非终止会话、子代理脱离进程继续重试、并在隔夜持续调用 kimi CLI。这直接关系到配额计费、进程生命周期管理和错误终止策略，属于高优先级可靠性问题。
   - 社区反应：暂无评论与点赞，尚未形成讨论。
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2647

2. **[OPEN] 功能建议：Kimi Work 会话标题自动带创建日期前缀（YYYYMMDD）/ Feature request: auto-prefix Kimi Work session titles with creation date (YYYYMMDD)**
   - 作者: GH-Mason | 创建/更新: 2026-09-15 | 评论: 0 | 👍: 0
   - 重要原因：除功能诉求本身外，提交者明确指出找不到 Kimi Work / Kimi Desktop 的专门公开 issue tracker，参照 #2143 等先例提交至本仓库，并请求转交桌面端团队。这反映出跨产品反馈渠道的缺口，对社区协作有参考价值。
   - 社区反应：暂无评论与点赞。
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2646

> 说明：数据仅提供 2 条 Issue，无法凑足 10 条，故按实际数量全部列出。

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 共 0 条，本节省略。

## 5. 功能需求趋势

基于本期提供的 Issue 数据，可提炼出以下方向：

- **错误处理与资源/配额管理**：#2647 指向配额耗尽、鉴权失败后的会话终止与重试退避机制，是本期唯一涉及核心运行时行为的诉求。
- **会话管理与可用性**：#2646 提出会话标题自动加日期前缀，属于会话组织与检索体验的改进。
- **反馈渠道建设**：Kimi Work / Kimi Desktop 缺少专门公开 issue tracker，社区被迫将桌面端问题提交至 CLI 仓库，提示需要更清晰的产品分工入口。

> 注：本期样本量仅 2 条，以上趋势仅为对现有材料的归纳，不代表完整的社区需求分布。

## 6. 开发者关注点

- **失控重试导致配额被持续消耗**：配额错误后主代理长期重试、子代理脱离进程形成重试循环，且会在无人值守时段持续调用 CLI（#2647），是开发者最直接的痛点，涉及成本与稳定性。
- **长时任务缺乏中止边界**：14 小时以上的重试反映出会话缺少有效的失败终止与超时机制（#2647）。
- **会话可识别性**：希望标题自带创建日期以便区分与查找会话（#2646）。
- **问题无处可提**：桌面端产品缺少公开 issue 入口，用户只能借助 CLI 仓库并请求人工转交（#2646）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-16）

> 数据来源：github.com/anomalyco/opencode

## 今日速览

今日无新版本发布。社区活跃度集中在三类问题上：**OpenCode Go 订阅支付后未激活/余额显示异常**（多条 Issue 更新）、**会话与响应稳定性**（SSE 超时、响应随机中断、嵌套子代理权限挂起），以及 **Bedrock/Anthropic 等新模型的兼容性缺陷**。PR 侧以 core 层修复与桌面端体验改进为主，另有多个新增工具能力（并行子任务、轻量模型路由）等待评审。

---

## 社区热点 Issues

1. **[CLOSED] #17318 Error：SSE read timed out** — 49 评论 / 👍37
   使用 skill 进行头脑风暴时写入文件报 SSE 读超时，是今日讨论量最高的 Issue，长期未决后关闭，反映流式传输稳定性是核心痛点。
   https://github.com/anomalyco/opencode/issues/17318

2. **[OPEN] #37012 [FEATURE] keep legacy layout option** — 47 评论 / 👍66
   今日点赞最高，社区要求保留旧版布局（主窗口可直接访问大部分功能 vs 新版需多层导航），UI 改版引发的迁移摩擦明显。
   https://github.com/anomalyco/opencode/issues/37012

3. **[CLOSED] #37231 Error from provider (Console Go): Upstream request failed** — 21 评论
   所有 Go 模型在 CLI、桌面端等均返回上游请求失败，波及面广，属服务端可用性问题。
   https://github.com/anomalyco/opencode/issues/37231

4. **[OPEN] #37790 Go 订阅支付成功但工作区显示 "Insufficient balance"** — 21 评论
   Stripe 已扣款但余额未同步，用户完全无法使用服务。与 #42883、#42969、#39989、#40236 共同构成**计费状态同步缺陷群**。
   https://github.com/anomalyco/opencode/issues/37790

5. **[OPEN] #13715 嵌套子代理会话的权限请求静默挂起** — 15 评论 / 👍31
   子代理再生成子代理需要权限时，请求已发出但 TUI 从不渲染，会话永久挂起。高赞说明影响面不小，属 agent 架构层缺陷。
   https://github.com/anomalyco/opencode/issues/13715

6. **[CLOSED] #1735 自定义 provider 下 max_tokens 默认 32000** — 18 评论 / 👍12
   通过 OpenAI 兼容网关接入 Anthropic/OpenAI/Bedrock 时默认 token 上限不符合预期，长期 Issue 今日关闭。
   https://github.com/anomalyco/opencode/issues/1735

7. **[OPEN] #36826 DeepSeek V4 Flash 发送提示词报 "Unexpected server error"** — 14 评论
   新模型接入即报未知服务端错误，与 #48069（Bedrock GPT-6 Astra 读图后失败）同属**新模型适配缺口**。
   https://github.com/anomalyco/opencode/issues/36826

8. **[OPEN] #48069 Bedrock GPT-6 Astra 在 read 工具返回图片后失败** — 11 评论 / 👍3
   报错 "This model doesn't support the image field for user messages"，多模态工具链与模型能力声明不一致。
   https://github.com/anomalyco/opencode/issues/48069

9. **[OPEN] #45750 自定义 provider 名 + Anthropic 协议经代理时 prompt caching 失效** — 7 评论
   缓存命中率恒为 0%，直接影响成本与延迟，属自定义 provider 配置路径的细节缺陷。
   https://github.com/anomalyco/opencode/issues/45750

10. **[OPEN] #35870 Headless `opencode run` 启动后偶发挂起** — 5 评论
    引导完成后主线程停在 epoll_wait，永不创建会话，对 CI/自动化场景影响较大。
    https://github.com/anomalyco/opencode/issues/35870

---

## 重要 PR 进展

1. **[OPEN] #47107 feat(opencode): 新增 task-parallel 工具并发扇出子任务** — everest-an
   让主代理并行分发独立子任务，是 agent 编排能力的实质性扩展。
   https://github.com/anomalyco/opencode/pull/47107

2. **[OPEN] #46989 feat(core): 允许 agent 为轻量轮次选用小模型** — everest-an
   接入既有 `Catalog.model.small()` 解析，用于降低简单轮次的成本与延迟。
   https://github.com/anomalyco/opencode/pull/46989

3. **[OPEN] #49208 fix(acp): 保留 slash command 的 prompt 生命周期** — nexxeln
   修复 ACP 将 slash command 视为即时动作、`/init`、`/review`、MCP prompt 工作被提前结束的问题。
   https://github.com/anomalyco/opencode/pull/49208

4. **[CLOSED] #49298 fix(core): 打破 filesystem/search 运行时导入循环** — tstachl
   修复 nixpkgs 构建（1.18.30/1.18.31）每次提示词都在模型调用前报 `node.name` 未定义的问题。
   https://github.com/anomalyco/opencode/pull/49298

5. **[CLOSED] #49183 fix(core): 重试已确认的 websocket 读失败** — dbpolito
   针对 provider 已确认但读取失败的请求增加重试，直接关联连接可靠性。
   https://github.com/anomalyco/opencode/pull/49183

6. **[OPEN] #49326 fix(core): 规范化 webfetch 的 html media type** — Xuxyyy
   校验与返回的 media type 不一致（Fixes #49322）。
   https://github.com/anomalyco/opencode/pull/49326

7. **[OPEN] #49277 fix(core): 生成终端前清除 ARGV0** — zonemeen
   修复 AppImage 将 ARGV0 传给 zsh 后覆盖子命令 argv[0]、导致 Rustup 代理异常的问题。
   https://github.com/anomalyco/opencode/pull/49277

8. **[OPEN] #49317 fix(opencode): 保留响应模型元数据** — KarmCraft
   保留 AI SDK 结构信息，替代此前被自动清理关闭的 #42433。
   https://github.com/anomalyco/opencode/pull/49317

9. **[OPEN] #43282 fix(core): 在 subagent 工具中暴露合法子代理 ID** — argszero
   修复 subagent 工具对 `agent` 字段描述不清的问题（Fixes #36761），与 #13715 的子代理议题相呼应。
   https://github.com/anomalyco/opencode/pull/43282

10. **[OPEN] #48501 feat(desktop): 改进 Console 引导流程** — usrnk1
    优化桌面端 Console 认证与首个 provider 配置，直指新手接入体验。
    https://github.com/anomalyco/opencode/pull/48501

> 另：**[CLOSED] #49304 feat(tui): 复制格式化后的最后一条助手消息**（Yagi-Michael）新增 `messages.copy.formatted` 命令，属轻量体验改进。

---

## 功能需求趋势

- **UI/布局偏好保留**：#37012 以 66 赞成为社区最强声音，用户希望新版不强制替换旧布局。
- **桌面端能力补齐**：#37742 呼吁桌面 App 增加可点击的麦克风语音输入按钮（当前仅有 TUI 键位插件）。
- **多代理/并行编排**：#13715（子代理权限挂起）与 PR #47107（task-parallel）、#43282（子代理 ID）显示社区与官方都在推进多代理工作流。
- **新模型快速适配**：DeepSeek V4 Flash（#36826）、Bedrock GPT-6 Astra（#48069）等新模型存在接入缺陷。
- **成本与性能控制**：#45750（prompt caching 失效）、#1735（max_tokens 默认值）以及 PR #46989（小模型路由）共同指向 token 成本优化诉求。
- **Headless/自动化可用性**：#35870 反映 CI 与脚本化调用场景的稳定性需求。

---

## 开发者关注点

- **计费状态同步是最大信任风险**：至少 5 条 Issue（#37790、#42883、#42969、#39989、#40236）报告支付成功但订阅未激活、余额显示不足，部分已关闭但仍有 OPEN 项，需优先治理。
- **流式与连接稳定性**：SSE 读超时（#17318）、响应随机中断（#34473）、websocket 读失败（PR #49183）、headless 启动挂起（#35870）构成一组高频稳定性痛点。
- **`Unexpected server error` 高频出现**：#36826、#28370、#49325 等多条 Issue 反映该错误提示信息量过低，开发者难以自行定位。
- **自定义 provider 配置细节**：默认 token 上限、缓存不生效、媒体类型规范化等问题集中在自定义 provider 路径，说明该路径测试覆盖不足。
- **平台兼容性**：AppImage/ARGV0（PR #49277）、nixpkgs 构建崩溃（PR #49298）提示打包与发行渠道需加强验证。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-16

数据来源: github.com/badlogic/pi-mono

## 1. 今日速览

今日无新版本发布，社区讨论集中在**模型目录数据滞后**（OpenRouter DeepSeek V4.1、zai-coding-cn GLM-5.3）和**上下文预算/缓存计费正确性**两条主线上。多个长期 Issue 进入 `inprogress` 状态（#8061 上下文预算、#8928 并行启动鉴权），同时一批修复 PR 被关闭合并（Baseten 亲和头、精确 session-id 查询、TUI 鼠标追踪）。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#8061 [OPEN][inprogress] Context budget 忽略 maxTokens 输出预留**（9 评论，👍2）
   输入仅占约 78% 窗口却被 provider 拒绝，且自动 compact-and-retry 恢复在重试时同样失败。这是上下文预算计算的核心正确性问题，评论数最高，已标记 inprogress。
   https://github.com/earendil-works/pi/issues/8061

2. **#8928 [OPEN][inprogress] 并行启动时报 "No API key found" 约 48 秒**
   当 auth.json 中存在其他 provider 的过期 OAuth 凭证时，多进程场景下可确定性复现，作者提供了时序数据。影响 CI/多实例部署的可靠性。
   https://github.com/earendil-works/pi/issues/8928

3. **#9294 [CLOSED] claude-fable-5 内置 allowedFallbackModels 仍列出被 API 拒绝的 claude-opus-4-8**
   `--model claude-fable-5` 的每个请求都立即 400。模型目录与实际 API 能力脱节，已关闭处理。
   https://github.com/earendil-works/pi/issues/9294

4. **#9457 [CLOSED] bedrock-converse: 1h 缓存写入按 5m 费率计费**（6 评论，👍4）
   高赞 Bug，属计费准确性错误——1h 缓存写入成本被低估。对成本敏感的生产用户价值高。
   https://github.com/earendil-works/pi/issues/9457

5. **#9485 [OPEN] OpenRouter DeepSeek V4.1 暴露 xhigh 但隐藏 max（generate-models.ts 陈旧 pin）**
   目录把所有 `deepseek-v4` 模型固定为 `off/high/xhigh` 并禁用 `max`，对 0423 代正确但已过时。
   https://github.com/earendil-works/pi/issues/9485

6. **#9616 [OPEN] zai-coding-cn: GLM Coding Plan 仅提供 GLM-5.3 / GLM-5.3-Flash，目录仍列 8 个遗留模型**
   10 个模型中 8 个已不存在，请求直接失败。与 #9485 同属目录数据同步问题。
   https://github.com/earendil-works/pi/issues/9616

7. **#9571 [OPEN] provider retry: 畸形 Retry-After HTTP-date 导致立即重试（NaN 延迟）**
   `getRetryDelayMs` 在非数值 retry-after 时计算 `Date.parse` 得到 NaN，429 变紧凑循环重试。实现级细节明确，易修复。
   https://github.com/earendil-works/pi/issues/9571

8. **#8791 [OPEN] 向扩展暴露模型运行时**（👍5，最高赞功能请求）
   希望 `ExtensionContext` 提供只读 `modelRuntime` 属性，用于构建隔离的 in-process agent。反映扩展生态对更深层 API 的需求。
   https://github.com/earendil-works/pi/issues/8791

9. **#9602 [OPEN] Compaction 可能因包含早前请求已省略的 thinking 消息而溢出**
   本地 Qwen3.8（llama.cpp）长会话中 4 次触及 16,384 token 输出上限，compaction 计入被省略的 thinking 导致溢出。
   https://github.com/earendil-works/pi/issues/9602

10. **#9440 [CLOSED] `--session-id` 使用新 id 仍扫描全部 transcript**
    4K+ transcript 场景下启动耗时约 16s。影响大规模会话用户的启动性能。
    https://github.com/earendil-works/pi/issues/9440

其他值得留意：#9629（Baseten 不发送 session-affinity 头导致 KV cache 全部 miss）、#9654（read 工具即使只取一行也读入整文件，大文件可致内存崩溃）、#9216（Ollama qwen3.8:27b 流 terminated 回归 + 自动 compaction 不再重触发）。

## 4. 重要 PR 进展（10 条）

1. **#9662 [OPEN] fix(coding-agent): 用户 bash hook 出错时 fail closed**
   `user_bash` handler 抛异常时让 `!`、`!!` 与 RPC `bash` 命令失败，而非回退到本地 shell（显式返回 `undefined` 仍保留本地回退）。涉及破坏性行为变更并已文档化。
   https://github.com/earendil-works/pi/pull/9662

2. **#9601 [CLOSED] fix(coding-agent): 精确 session ID 不再扫描 transcript**
   对应 #9440，改为按 session ID 精确读取头信息，并权衡后选择同步实现以提升后续 cache hit。
   https://github.com/earendil-works/pi/pull/9601

3. **#9648 / #9646 [CLOSED] fix(ai): 从 sessionId 发送 Baseten session affinity 头**
   直接回应 #9629，恢复 KV cache 亲和性。
   https://github.com/earendil-works/pi/pull/9648

4. **#9434 [OPEN] feat(coding-agent): 允许扩展追加 session system prompt**
   `session_start` handler 可返回 append-only 的 `systemPromptAppend`，按扩展/handler 顺序收集，带 trim、来源元数据与错误隔离。
   https://github.com/earendil-works/pi/pull/9434

5. **#9630 [OPEN] feat(coding-agent): 事件 handler 支持 unsubscribe**
   修复 #8967，为扩展事件订阅提供退订能力（测试待补）。
   https://github.com/earendil-works/pi/pull/9630

6. **#9570 [OPEN] fix(ai): 将 TOO_MANY_TOOL_CALLS 映射为 error stop reason**
   `@google/genai@2.21.0` 新增该 FinishReason 成员，`google-shared.ts` 的穷尽 switch 未覆盖导致抛异常。
   https://github.com/earendil-works/pi/pull/9570

7. **#8635 [OPEN] fix(ai): 懒加载 setup 期间保留 aborted stop reason**
   修复 #8409，将 abort signal 透传过 lazy stream setup 包装器，已中止时把 setup 失败报告为 aborted，并补回归测试。
   https://github.com/earendil-works/pi/pull/8635

8. **#6881 [OPEN][inprogress] feat(ai): 优先采用 provider 上报的成本**
   响应含 billed cost 时以其作为 `usage.cost.total`，否则回退 `calculateCost`；覆盖 openai-completions 的 `usage.cost` 与 `cost_details` 等。与 #9457 计费议题同向。
   https://github.com/earendil-works/pi/pull/6881

9. **#8744 [OPEN] feat(tui): 可选的 overlay 选择排除**
   解决持久化扩展 UI（侧栏、HUD、状态栏）导致全屏复制退化为仅复制 transcript 的问题，允许 overlay 声明不参与选择。
   https://github.com/earendil-works/pi/pull/8744

10. **#9655 [CLOSED] fix(tui): 进入 raw mode 后再启用鼠标追踪**
    Windows ConPTY 会吞掉 raw mode 之前写入的鼠标 DECSET 序列，改到 `afterTerminalStart()` 发出。
    https://github.com/earendil-works/pi/pull/9655

其他：#9157（Session Tree 搜索光标显示）、#9301（device-code 浏览器/剪贴板操作确认，修复 #9282）、#8612（清除已投递的纯图片队列项）、#9663（SDK 示例与 README 弃用 `getModel`，改用 `modelRuntime`）。

## 5. 功能需求趋势

- **模型目录数据同步**：今日最密集的主题。#9485、#9616、#9294、#9566、#9629 均指向内置/远程 overlay 目录与 provider 实际能力（模型集合、上下文大小、成本、maxTokens、reasoning 档位）之间的漂移。
- **缓存与计费正确性**：#9457（1h 缓存按 5m 计费）、#8348（fork 会话无跨会话 prompt cache）、#9629（Baseten 亲和头丢失）、#6881（采用 provider 上报成本）构成一条清晰线索。
- **扩展 API 深化**：#8791（暴露 ModelRuntime）、#9434（追加 system prompt）、#9630（事件退订）、#8744（overlay 选择排除）显示扩展生态正从"能用"走向"可精细控制"。
- **上下文管理与 compaction 稳健性**：#8061、#9602、#9216 共同指向上下文预算、thinking 消息处理与自动 compaction 重触发机制。
- **provider 重试与错误分类**：#9571（NaN 退避）、#9585（"fail to touch upstream" 未被识别为可重试）、#9570（新 FinishReason 未映射）。

## 6. 开发者关注点

- **生产环境可靠性优先**：#8928 作者投入约 3 小时在 production 调试并行启动鉴权问题，这类多进程/CI 场景的确定性 bug 反馈质量明显偏高。
- **静默失败难以诊断**：#9577（被 SIGKILL/SIGTERM 杀死的 bash 工具仍 resolve 成功，只返回部分输出，调用方无法区分）、#9662（hook 出错时的回退语义）反映开发者需要明确的失败信号而非静默降级。
- **性能与资源问题**：#9440（4K+ transcript 启动约 16s）、#9654（read 工具整文件读入内存导致崩溃）是规模敏感用户的直接痛点。
- **计费透明度**：高赞的 #9457 及 #6881 表明用户对成本准确性敏感，倾向以 provider 上报数据为准。
- **平台兼容性**：#9655（Windows ConPTY）、#6995（kitty inline image 覆盖 overlay 的合成器渲染问题）显示终端/平台差异仍是持续的维护成本。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-16）

## 今日速览

今日最突出的问题是 TUI 稳定性：多个后台 agent 完成时触发 React #185 崩溃（#11500、#11732），相关 `useBoxMetrics` 循环防护修复仍在跟进（#11858）。VS Code Remote 环境下的 webview 连接问题集中爆发（#11556、#11976），IDE 远程集成成为当日焦点。同时 CI 基础设施问题（#11937、#11953）和会话压缩失败（#11969）持续消耗开发者精力。

---

## 版本发布

**v0.23.5-preview.0** 已发布，主要变更：
- test: 记录 Windows inode 门控隐藏的问题并解除一项跳过（#11853，@yiliang114）
- fix(cua): 保留 Linux 观测数据

链接: https://github.com/QwenLM/qwen-code/releases

---

## 社区热点 Issues

1. **#11500 [OPEN] TUI 多后台 agent 完成时静默退出（React #185）** — 16 条评论，当日最高。多个子 agent 相继完成时 Ink `useBoxMetrics` 布局监听 setState 循环导致未捕获错误，TUI 无提示退出。P1 级 UI 渲染缺陷，影响交互稳定性。
   https://github.com/QwenLM/qwen-code/issues/11500

2. **#8596 [OPEN] 废弃 Electron 桌面应用，将 desktop-shell 重命名为 desktop** — 9 条评论。路线图级讨论：Tauri 应用被定位为桌面端未来，涉及平台分发策略调整。
   https://github.com/QwenLM/qwen-code/issues/8596

3. **#11556 [CLOSED] vscode-ide-companion 0.23.1 在 Remote-SSH 下 webview 卡在加载** — 8 条评论。远程开发场景的 IDE 集成阻断问题，已关闭。
   https://github.com/QwenLM/qwen-code/issues/11556

4. **#11732 [OPEN] 0.23.3 原生 monitor 任务运行时崩溃（React #185）** — 7 条评论。与 #11500 同类失败模式，已在两个独立会话中复现，说明并非偶发。
   https://github.com/QwenLM/qwen-code/issues/11732

5. **#11976 [CLOSED] VS Code Remote（容器）webview 因动态端口绑定缺少 asExternalUri 而无法访问 workspace daemon** — 6 条评论。已标记 ready-for-human，属于 Remote 环境典型连接缺陷。
   https://github.com/QwenLM/qwen-code/issues/11976

6. **#11858 [OPEN] 加固 useBoxMetrics 循环防护：预算是按实例而 React 上限是按 root** — 6 条评论。来自 PR #11835 的评审发现 R1-2，是 #11500 崩溃的关联修复后续。
   https://github.com/QwenLM/qwen-code/issues/11858

7. **#11872 [OPEN] Web Terminal 显示 "[Error: PTY not available]"** — 5 条评论。`@lydell/node-pty` 声明但未打包，且 macOS 代码签名阻止本地预编译包，影响 macOS 平台与打包。
   https://github.com/QwenLM/qwen-code/issues/11872

8. **#11969 [OPEN] stripAnalysisBlock() 在 `</think>` 或摘要截断时丢弃整个摘要 → COMPRESSION_FAILED_EMPTY_SUMMARY** — 5 条评论。思考型模型（本地 Ollama 部署 Qwen3.8-27B）下自动压缩失败，影响会话管理。
   https://github.com/QwenLM/qwen-code/issues/11969

9. **#11995 [OPEN] Web Shell 会话恢复横幅误报：正常完成的轮次也会显示** — 4 条评论。当日新开，UI 状态判断准确性问题。
   https://github.com/QwenLM/qwen-code/issues/11995

10. **#12014 [OPEN] 误导性的 --system-prompt 标志** — 4 条评论。文档描述与实际行为不符，实际还会注入额外内容，属 CLI 文档类问题。
    https://github.com/QwenLM/qwen-code/issues/12014

---

## 重要 PR 进展

1. **#12019 [OPEN] feat(omni): 将多模态媒体管道集成到 main** — 整合已稳定的 `omni-experiment`：媒体识别与上传投递、处理策略与工具、媒体记忆与召回、存储治理，以及独立的上传/推理配置。当日新开的重磅功能 PR。
   https://github.com/QwenLM/qwen-code/pull/12019

2. **#12005 [OPEN] docs(daemon): 完善集成路径指南** — 补齐 daemon 集成选择器，覆盖全部七条已支持或规划中的路径，含可运行的 `qwen-serve-mcp` 配置与桥接环境变量说明。
   https://github.com/QwenLM/qwen-code/pull/12005

3. **#11988 [OPEN] fix(core): 压缩时剥离以原生 think 标签闭合的推理块** — 修复思考模型以原生标签而非提示要求字面标签闭合推理块时摘要被丢弃的问题，对应 #11969。
   https://github.com/QwenLM/qwen-code/pull/11988

4. **#11154 [OPEN] fix(cli): 全轮工具取消不再走错误路径** — `useReactToolScheduler` 全轮分支在 catch 中检查 `signal.aborted`，将中止的调度尝试归类为取消而非失败。已持续更新数日。
   https://github.com/QwenLM/qwen-code/pull/11154

5. **#11806 [OPEN] fix(cli): 关闭 OpenTUI 相对 ink 的十二处对齐缺口** — OpenTUI 渲染器迁移的后续，八处来自与 ink 同机对照真实假模型服务器的偏差，四处由扫描发现。
   https://github.com/QwenLM/qwen-code/pull/11806

6. **#12016 [OPEN] fix(ci): 容忍自托管 runner 上不可写的 docker 沙箱锁目录** — 针对 #12006，修复宿主机 flock 文件目录被 root 残留占用导致的 CI 失败。
   https://github.com/QwenLM/qwen-code/pull/12016

7. **#11989 [OPEN] fix(ci): 对从未启动的 main CI 任务重跑一次而非逐提交建 issue** — 识别"执行零步骤"的失败类别，避免为瞬时故障生成 autofix issue。
   https://github.com/QwenLM/qwen-code/pull/11989

8. **#10455 [OPEN] fix(cli): 输出语言文件不可写时不再导致启动崩溃** — 只读 home 目录或 root 残留导致全局配置目录无法创建时的启动健壮性修复，已标记 autofix/needs-human。
   https://github.com/QwenLM/qwen-code/pull/10455

9. **#12022 [OPEN] fix(goal): 保留原始证据并恢复无定论验证** — 目标完成时验证原始、按修订范围限定的证据，无需自动证据检查点；证据目录作为分页视图，原始 UUID 在新工具运行后仍可读取引用。
   https://github.com/QwenLM/qwen-code/pull/12022

10. **#9305 [OPEN] fix(ui): VP 内容底对齐，使空白位于顶部** — 对话内容适配视口时原为顶对齐，导致末条消息与输入框之间出现空隙（见 #9300）。
    https://github.com/QwenLM/qwen-code/pull/9305

---

## 功能需求趋势

- **IDE 与远程开发集成**：VS Code Remote-SSH、Dev Containers、webview 连接与端口绑定问题集中（#11556、#11976），远程 daemon + 本地客户端的开发工作流成为明确需求（#11475）。
- **UI 渲染稳定性**：Ink/OpenTUI 渲染循环、布局监听、确认弹窗视口等问题密集（#11500、#11732、#11858、#11806、#11658）。
- **多模态能力**：omni 媒体管道集成 PR #12019 显示多模态（媒体识别、上传、媒体记忆）正进入主干。
- **会话与上下文管理**：自动压缩在思考模型与小窗口部署下的失败（#11969、#7960）、会话恢复状态误判（#11995）反映出会话管理的稳定性诉求。
- **平台与打包**：macOS PTY/代码签名（#11872）、桌面端 Electron→Tauri 迁移（#8596）等平台分发议题持续存在。
- **Daemon/REST/SSE 集成文档**：面向集成方的 API 文档整理需求（#11359、#12005）。

---

## 开发者关注点

- **TUI 崩溃是当前最大痛点**：React #185 在多种场景（多后台 agent 完成、monitor 任务运行）下触发静默退出，且已被多次独立复现，修复涉及 Ink 补丁层面的循环防护，进展受关注。
- **远程/容器环境体验不佳**：VS Code Remote 下 webview 无法连到 workspace daemon、动态端口未使用 `asExternalUri`，直接影响远程开发者日常使用。
- **CI 基础设施噪声**：多项 PR/Issue 集中于修复 CI 抖动（#11937、#11953、#11989、#11134、#11588、#12016），说明频繁的瞬时失败与重复触发正在消耗维护成本。
- **思考型模型与本地部署的兼容性**：压缩路径对 `</think>` 等原生标签、小上下文窗口处理不当，阻碍本地推理模型的可靠使用。
- **文档与实际行为不一致**：`--system-prompt` 描述不准确（#12014）、daemon API 文档分散（#11359），反映文档质量是高频反馈点。
- **平台打包细节**：macOS 签名阻止本地 PTY 预编译包、打包遗漏依赖等，影响开箱可用性。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-16）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issues/PR 标题中显示为 Codewhale 仓库）

## 1. 今日速览

今天没有新版本发布，社区焦点集中在 **v0.9.14 发布前的质量收尾**：一方面是多条面向文件编辑安全性的改进（语法/格式/配置解析门禁）被关闭并纳入版本，另一方面是多个会话恢复、子代理预算与 steer 回执的可靠性缺陷被新开或仍在讨论中。同时，围绕 `#6213` 的一系列 TUI 性能优化 PR 密集合入，`main` 分支 Lint 红灯也被紧急修复以解除发布阻塞。

## 2. 版本发布

过去 24 小时无新 Release。但从 Issue/PR 标签可见社区正处于 **v0.9.14** 的发布准备期。

## 3. 社区热点 Issues

1. **#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition（28 条评论）** — 评论数最高的 umbrella 议题，涉及 C03–C10 的所有权、依赖顺序与完成证据，是整个 TUI crate 拆解的主线。
   https://github.com/Hmbown/Codewhale/issues/5316

2. **#6207 [OPEN] session picker 拒绝「runtime store 存在但不属于当前 host」的已保存会话（11 条评论）** — 用户无法在 TUI 中恢复已保存会话，报错 "This session belongs to another Runtime host"，影响会话恢复核心体验。
   https://github.com/Hmbown/Codewhale/issues/6207

3. **#6225 [OPEN] 新进程内无法 resume（6 条评论）** — 与 #6207 同源，给出明确复现步骤（/quit 后重开 → /resume → 选择旧会话即失败），说明这是可稳定复现的回归。
   https://github.com/Hmbown/Codewhale/issues/6225

4. **#6277 [OPEN] v0.9.14：worker 预留的报告轮次被其后代消耗，预算耗尽后什么都不返回（2 条评论）** — 子代理可靠性问题，`agent start` 承诺的部分报告回退机制在实际中被打破，直接影响多代理编排可信度。
   https://github.com/Hmbown/Codewhale/issues/6277

5. **#6276 [OPEN] v0.9.14：runtime API steer 回执谎报投递成功（1 条评论）** — 引擎未决定前就上报 steer 已送达，且可能被静默丢弃，客户端会向用户显示「已发送指引」但实际未生效。
   https://github.com/Hmbown/Codewhale/issues/6276

6. **#6244 [OPEN] Fleet 角色选择器在工具边界阻塞 agent 启动（生产环境 cw:768b024a）** — 模型调用 `agent(action=start)` 未带 role 时报 "role:general is ambiguous"，属于生产环境实测失败。
   https://github.com/Hmbown/Codewhale/issues/6244

7. **#6236 [OPEN] headless 运行中 `request_user_input` 永久等待** — 无应答者存在、禁用开关又移除了边界，`codewhale exec` 可能无限阻塞且不报错。
   https://github.com/Hmbown/Codewhale/issues/6236

8. **#6202 [OPEN] v0.9.14：在 tools 编辑路径嵌入 ast-grep-core，拒绝破坏语法的文件编辑** — 当前编辑以纯文本补丁落地，只有下次构建才暴露语法错误；该议题提出前置守卫。
   https://github.com/Hmbown/Codewhale/issues/6202

9. **#6145 [OPEN] 命令契约：完成 FEAT-02x 采用或合并 crates/command-contract** — 源自 0.9.14 重构待办，`crates/command-contract` 仅存形状（FEAT-014），实际 dispatch 仍在 `tui/src/commands/`，架构一致性问题。
   https://github.com/Hmbown/Codewhale/issues/6145

10. **#6015 [OPEN] feat(fleet)：自适应防停滞 + 更宽的安全只读 shell 语法** — 被纳入 Core 计划 C05/C06，涉及 fleet 行为默认值与 shell 语法白名单的扩展。
    https://github.com/Hmbown/Codewhale/issues/6015

**今日已关闭的相关修复（值得留意）**：#6190（steer 输入未作为最新历史项插入）、#6173（Gemini `/models` 报错）、#6165（`/hooks edit` 未暂停 TUI 输入线程导致按键被切分）、#6174（ACP session/new 返回的 provider 前缀 id 无法被 session/load 解析）。

## 4. 重要 PR 进展

1. **#6281 [OPEN] feat(mcp)：协商协议版本（2025-06-18）+ bundle 模式 dsh 转换器** — 各接口此前均广播 2024-11-05 版本，此为 #6280 的前半部分，2026-07-28 rmcp 层后续跟进。
   https://github.com/Hmbown/Codewhale/pull/6281

2. **#6279 [OPEN] fix(tui)：recommended_plugins 每引擎仅提示一次（Closes #6274）** — 新增 `RecommendedPluginGate`，使 `<recommended_plugins>` 片段在每个引擎生命周期内对同一插件最多建议一次。
   https://github.com/Hmbown/Codewhale/pull/6279

3. **#6284 [OPEN] test(runtime)：固定被中断轮次的待处理用户输入结算（Closes #6275）** — 补上最后一个未固定覆盖的轮次终止面，覆盖 interrupt 孪生场景。
   https://github.com/Hmbown/Codewhale/pull/6284

4. **#6273 [CLOSED] perf(tui)：停止每次防抖保存的两次会话深拷贝（#6214 T3）** — 每次 flush 原本深拷贝整个会话历史三次，属实打实的内存/CPU 浪费修复。
   https://github.com/Hmbown/Codewhale/pull/6273

5. **#6271 [CLOSED] v0.9.14 切片：#6213 T4/T5、#6244、#6235** — 四个独立切片各一 commit 独立验证；作者注明其中两个与 issue 原要求相左并说明了原因。
   https://github.com/Hmbown/Codewhale/pull/6271

6. **#6268 [CLOSED] fix(ci)：让 main 的 Lint 变绿，解除 0.9.14 发布门禁** — `main` 的 Lint 自当日 04:08Z 起变红，原因是四个 gate 被声明为 `continue-on-error`（仅 pull_request 事件），PR rollup 因此看起来是绿的。
   https://github.com/Hmbown/Codewhale/pull/6268

7. **#6270 [CLOSED] fix(ci)：为 telemetry_kill_switch_dispatch 设界，止住 Ubuntu 上的不稳定失败** — 属 #6269 的测试侧一半修复。
   https://github.com/Hmbown/Codewhale/pull/6270

8. **#6266 [CLOSED] perf(tui)：MCP 资源模板只编译一次而非每次调用（#6213 T7）** — `resource_uri_matches_template` 是授权检查路径，每调用重编译代价不低。
   https://github.com/Hmbown/Codewhale/pull/6266

9. **#6264 [CLOSED] perf(tui)：停止 shell、hook 与 cloud 路径上的按调用重建（#6208）** — 来自 `PERF-OPPORTUNITIES-20260915.md` §1 的五项机械式、行为保持的优化，关闭 #6208 清单。
   https://github.com/Hmbown/Codewhale/pull/6264

10. **#6262 [CLOSED] fix(app-server)：运行时桥重启后保留 stdio 线程映射（#6246）** — 配置更新会作废缓存的 runtime bridge，此修复避免 stdio→runtime 线程映射丢失。
    https://github.com/Hmbown/Codewhale/pull/6262

**其他值得关注的开放 PR**：#6096（FEAT-025，`/export` 走可移植命令契约，纯结构性迁移）、#6171（新增 AICraft OpenAI 兼容 provider 模板）、#6170（修复 Weixin bridge 无法按其文档运行的问题）。

## 5. 功能需求趋势

- **文件编辑安全门禁**：从 #6202（ast-grep-core 语法门）、#6204（用 `syn::parse_file` 做 Rust 精确语法校验）、#6205（编辑后格式化归一化以稳定后续锚点）、#6206（TOML/JSON 结构化配置解析门）构成一组完整方向——在编辑落地前而非下次构建时发现缺陷。
- **多代理/Subagent 可靠性**：Fleet 角色选择（#6244）、子代理预算与报告轮次（#6277）、自适应防停滞（#6015）显示 fleet 语义仍有很多边角失败。
- **TUI 性能**：#6208、#6213、#6214 三条性能清单密集产出 PR，覆盖深拷贝、模板编译、过滤项提升、按调用重建等。
- **会话生命周期与恢复**：#6207、#6225、#6174 集中暴露会话恢复的身份/主机归属问题。
- **命令契约与架构收敛**：#6145、#6096 指向 dispatch 逻辑与 shapes 契约的统一。
- **扩展集成**：MCP 协议版本协商（#6281）、新 provider 模板（#6171）、第三方 bridge（#6170）。

## 6. 开发者关注点

- **会话恢复的可预测性是当前最大痛点**：同一天内有 2 条独立 issue（#6207、#6225）指向 "belongs to another Runtime host" 导致的恢复失败，且复现路径明确。
- **静默失败与谎报成功**：#6276（steer 回执未如实反映投递）与 #6236（headless 永久等待、无任何等待提示）反映同一类问题——系统在失败时缺乏如实反馈。
- **CI 可信度**：`main` 的 Lint 能长时间红灯而 PR rollup 显示绿色（#6268），说明 gate 的 `continue-on-error` 配置削弱了可见性，这是流程层面的隐患。
- **重构待办积压**：FEAT-02x 命令契约（#6145）与 0.9.14 重构遗留项仍在清单中，且部分 issue 的实现被 PR 作者主动指出与其原始要求相左（#6271），说明工作量与描述之间存在偏差。
- **生产环境实测反馈已进入仓库**：#6244 明确标注生产 session id，说明部分缺陷来自真实运行而非测试推测。

---
*本日报仅依据上述 GitHub 数据生成，未包含数据源之外的版本、日期或链接。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*