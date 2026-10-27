# AI CLI 工具社区动态日报 2026-09-19

> 生成时间: 2026-09-19 13:24 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-19）

## 1. 生态全景

当前 AI CLI 工具已从"能否用"进入"能否信任"的阶段：**多代理架构的健壮性、权限与沙箱边界、失败可见性**取代基础功能，成为各社区最集中的痛点。横向标准化正在加速——AGENTS.md 在 Claude Code 正式落地，标志跨工具代理指令规范的共识成形。平台差异（尤其 Windows）仍是普遍短板，多家工具在 Windows/ConPTY/浏览器集成上集中暴露问题。订阅计费、上下文窗口与额度透明度开始成为影响用户留存的关键变量，而非单纯的技术问题。整体呈现"架构层密集重构、交互层补齐成熟工具能力"的过渡期特征。

---

## 2. 各工具活跃度对比

| 工具 | Issues 动态 | PR 动态 | Release 情况 | 核心节奏特征 |
|---|---|---|---|---|
| **Claude Code** | 10 条热点（含 #6235 关闭，5174 👍） | 8 条（全部列示） | v2.1.278 / v2.1.277（AGENTS.md 支持） | 标准化落地 + Cowork/桌面端稳定性问题集中 |
| **OpenAI Codex** | 10 条热点（#9203 达 454 👍/83 评论） | 10+ 条（多为 copyberry[bot]，均 CLOSED） | rust-v0.155.1 稳定版 + alpha.3–.7 | 高频迭代，Windows 问题与认证链路为焦点 |
| **Gemini CLI** | 10 条热点（多条 p1） | 10 条列示 | v0.62.0-nightly | 代理可靠性为第一优先级，架构向持久化演进 |
| **GitHub Copilot CLI** | 48 条更新（选 10 条） | **0 条** | v1.0.87-0 | Issue 侧活跃，批量关闭长期问题，PR 静默 |
| **Kimi Code CLI** | 7 条（6 条关闭） | **0 条** | 无 | 低频，HTTP header 类连接问题批量关闭 |
| **OpenCode** | 10 条热点（#2242 达 91 评论/77 👍） | 10 条列示 | 无新 Release | 计费异常 + v2 迁移回归双主线 |
| **Pi** | 37 条更新（热点 10 条） | 13 条更新 | 无 | Issue/PR 双高活跃，TUI 性能与 provider 兼容 |
| **Qwen Code** | 10 条热点（多条 P1） | 10 条列示 + 多条 CI | v0.24.1 + Desktop + TS SDK（含 Breaking Change） | 功能密度最高，Web Shell/Goal 架构扩张 |
| **DeepSeek TUI** | 10 条热点 | 10 条列示 | 无 | ACP 集成缺陷为核心，多项可靠性债集中关闭 |

**数据侧观察**：Issue 更新量上 Pi（37）、Copilot CLI（48）居前；Release 活跃度上 Qwen Code、Claude Code、Codex 明显领先；PR 活跃度上 Codex、Pi、OpenCode 较高，Kimi 与 Copilot CLI 当日 PR 为 0。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **沙箱与权限边界** | Claude Code、OpenCode、Codex、Gemini CLI | OpenCode #2242（91 评论）要求对齐 seatbelt 隔离；#49347 Windows 权限规则被绕过；#49954 未解析命令跳过权限检查；Codex 密集提交 Seatbelt/XPC 沙箱 PR |
| **可撤销与安全网** | Codex、Gemini CLI、OpenCode、Copilot CLI | Codex #9203 请求恢复 `/undo`（454 👍）；Copilot CLI #1675 的 `git clean -fd` 删除未跟踪文件；Gemini #22672 劝阻 `git reset`/`--force` |
| **静默失败显式化** | Gemini CLI、Pi、Qwen Code、Claude Code、DeepSeek TUI | Gemini #22323 子代理误报成功；Pi #9354/#9770 静默丢弃/返回空；Qwen #12220 LSP 错误被吞；Claude #92987 审查结果被 stderr 覆盖 |
| **跨代理标准化 / 扩展体系** | Claude Code、Codex、Pi | Claude AGENTS.md 落地并提交 `mods/agents-md` 源码；Codex 插件/MCP/子代理架构重构；Pi 扩展可追加 system prompt（#9434） |
| **配额与计费透明** | Claude Code、OpenCode、Codex、Gemini CLI | Claude #73770 statusline 暴露周配额、#93894 单次审查耗尽 $100 额度；OpenCode 五条计费 Issue；Codex #45236 周配额重置日漂移 |
| **状态/会话持久化** | Gemini CLI、Qwen Code、OpenCode、Pi | Gemini #29402 状态写入失败安全、#29393 文件化任务跟踪；Qwen #12212 会话写入锁错误不分类；Pi #9754 worktree 会话本地恢复 |
| **平台一致性（Windows 尤为突出）** | Codex、Gemini CLI、Pi、OpenCode、Claude Code | Codex Windows Computer Use/Chrome/更新链路全面失效；Pi #9129 进程树杀死失败；OpenCode #49969 Windows EACCES |
| **模型/Provider 目录同步** | Pi、Gemini CLI、OpenCode | Pi #9616 GLM 目录过期、#9737 缺 `deepseek-v4.1-flash`；Gemini #29217 显式模型被自动升级；OpenCode #25495 第三方模型拒绝深层 schema |

**最强共识**：**"失败必须可见"** 与 **"权限边界必须一致"** 两条，横跨至少 5 家工具的社区反馈。

---

## 4. 差异化定位分析

**Claude Code** — 定位为**可编程平台**。以 AGENTS.md 标准化 + mods/插件体系（#91870，204 评论）为双引擎，同时向 Cowork 云会话与桌面端扩展。目标用户偏向企业与重度团队协作，当前阵痛集中在云会话权限模型与桌面端磁盘/VM 卫生。技术路线上坚持插件式扩展（`mods/` 目录与 `claude plugin test`）。

**OpenAI Codex** — 定位为**多端一体化 + 底层加固**。TUI/CLI/桌面/iOS 远程控制全栈覆盖，PR 侧由 bot 主导进行沙箱、网络代理、子代理指令传播的架构级重构。目标用户覆盖广泛但对 Windows 支持明显落后。特色是"稳定版 + 高频 alpha"的双轨发布。

**Gemini CLI** — 定位为**代理可靠性优先**。将子代理误报成功、无限挂起等列为 p1，同时推进 AST 感知搜索（符号级导航）与文件化持久化。技术路线清晰：从"上下文驱动"转向"符号级 + 状态持久化"，目标用户偏重代码理解场景。

**GitHub Copilot CLI** — 定位为**企业级采纳**。#1285 组织级 Agent、#2543 并发子 Agent 显示从单人走向企业多 Agent 编排；但当日 PR 为 0、大批长期问题集中关闭，迭代节奏明显慢于同类。

**Kimi Code CLI** — 定位为**轻量稳定接入**。当日仅处理连接类与咨询类 Issue，无版本、无 PR，社区规模最小。核心矛盾是 HTTP header 合法性等基础健壮性，第三方 provider（OpenCode Go）适配是新增问题源。

**OpenCode** — 定位为**桌面/Web 全形态 + 多上游聚合**。当前处于 v2 迁移阵痛期，痛点集中在计费状态不一致与布局/workspaces 回归。技术路线上插件（session 级 toast）、多 provider（Zen/OrcaRouter）并重。

**Pi** — 定位为**终端体验极致化**。Issue/PR 双高活跃，热点围绕 TUI 渲染性能（长会话高 CPU、每帧重绘）、扩展生态、终端兼容（Orca/Kitty-image）。目标用户是高频长会话开发者与扩展作者。

**Qwen Code** — 定位为**全栈开发环境**。Web Shell（会话搜索、worktree、SSH 工作区）、Desktop、TS SDK 同步扩展，并有明确 Breaking Change 管理。功能密度最高，同时 CI flake 治理投入也最大。

**DeepSeek TUI** — 定位为**编辑器集成（ACP）驱动**。核心战场是 `serve --acp` 的配置与审批策略一致性，面向无人值守/编辑器驱动场景。当前处于可靠性债集中偿还期（幽灵配置、误导性错误信息）。

---

## 5. 社区热度与成熟度

**高热度 + 高迭代（快速演进期）**
- **Pi**（37 Issues + 13 PR）、**Qwen Code**（多版本发布 + 架构级 Breaking Change）：迭代密度最高，仍在大幅调整核心架构。
- **OpenAI Codex**（稳定版 + 5 个 alpha + 10+ PR）：发布节奏最快，但底层重构频繁导致透明度有限（alpha 无变更说明）。

**高热度 + 收敛期（成熟度上升）**
- **Claude Code**：AGENTS.md 标准化落地、插件体系成形，进入"平台化"阶段，但 Cowork/桌面端稳定性仍是短板。
- **Gemini CLI**：已将问题明确分级（p1/p2），说明项目治理相对成熟。

**中等热度 + 稳定维护**
- **OpenCode**：Issue 活跃但处于 v2 迁移阵痛，风险来自"升级即回归"。
- **GitHub Copilot CLI**：Issue 侧活跃（48 条），但当日 PR 为 0，批量关闭长期问题，反映"清账"而非"扩张"。

**低热度 / 低频**
- **Kimi Code CLI**：7 条 Issue 中 6 条关闭，无版本无 PR，社区最小。
- **DeepSeek TUI**：Issue/PR 适中，但问题集中在明确的技术债项，治理响应快。

**成熟度综合判断**：按"发布纪律 + 问题分级 + PR 透明度"衡量，**Claude Code、Gemini CLI、Qwen Code** 治理最规范；**Codex** 迭代最快但透明度欠缺；**Kimi** 与 **Copilot CLI** 当日维护信号偏弱。

---

## 6. 值得关注的趋势信号

1. **"失败必须可见"正在成为硬标准**
   从 Gemini 子代理误报成功、Qwen LSP 吞错、Pi 静默丢弃、到 Claude 审查结果被覆盖——五家工具同时暴露同类问题。对开发者的参考价值：**在选型时应把"错误可观测性"作为评估维度**，静默失败的工具在生产环境排障成本极高。

2. **权限模型的跨平台一致性是被低估的风险点**
   OpenCode Windows 上 catch-all 拒绝规则被跳过（#49347）、扫描器无法解析即跳过权限检查（#49954），说明"安全边界依赖解析路径"是系统性隐患。开发者应对**多平台部署的权限配置做独立验证**，不能假设一处生效即处处生效。

3. **AGENTS.md 标准化落地，跨工具协作成本下降**
   Claude Code v2.1.277 正式支持并提交插件源码，Codex/Pi 也在做元数据归因（Pi #9488）。这预示着**代理指令与上下文可在工具间流转**，团队可减少重复配置。

4. **计费与额度的"付费即不可用"正在侵蚀信任**
   OpenCode 五条计费 Issue（付款成功仍报余额不足）、Claude 单次审查耗尽月额度（#93894）、Codex 周配额重置日漂移（#45236）——**额度模型从技术问题升级为商业信任问题**，按模型分层配额与周限替代会话限的讨论是明确风向。

5. **上下文窗口配置能力成为模型能力释放的瓶颈**
   Copilot CLI #3355（Opus 4.6 被限制 200K，原生 1M，削减 80%）、Gemini #29217（显式模型被自动改写）。**工具对模型的适配能力开始反向制约模型价值**，选择工具时需关注其上下文 tier 配置是否透明可控。

6. **TUI 渲染性能在长会话下成为体验分水岭**
   Pi #7730（macOS 长会话 100% CPU）、#9549（每帧重绘占满单核）说明**终端 UI 的增量渲染能力**直接影响高频用户的留存，这是常被忽视但反馈强烈的工程投入方向。

7. **平台差异（Windows/ConPTY/Wayland）仍是普遍欠账**
   Codex Windows 全面失效、Pi #9129 进程树、Gemini #21983 Wayland 浏览器代理、多处 ConPTY 修复——**跨平台终端与显示服务器支持是当前最系统性的技术债**，Windows 用户在选择工具时应优先确认目标功能是否已在该平台验证。

8. **CI flake 治理成为隐性成本**
   Qwen Code 多条跨月挂起的 autofix PR 与 #12253（机器可读的未处理错误记录）显示，**测试信号噪声已成为大规模项目常态负担**，这对评估项目"工程健康度"提供了新的观察指标。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills｜数据截止 2026-09-19
> 说明：PR 列表中的评论数字段均显示为 `undefined`，因此本报告对 PR 部分以更新活跃度、影响范围与摘要内容作为关注度依据，并明确标注；It is not possible to verify PR comment counts from the supplied data.

---

## 1. 热门 Skills 排行（PR）

由于所提供的 PR 数据中评论数均为 `undefined`，以下排序基于**更新活跃度 + 功能影响力 + 社区关联 Issue 的讨论热度**综合判断，而非精确评论数。

**1. skill-creator 触发器评估修复（PR #1298）**
功能：修复 skill-creator 触发评估中的假阴性/无效评分问题——并行 worker 探测竞争、Windows 下 subprocess pipe 的 `select()` 失败、运行时故障被误判为非触发。
热点：这是 skill-creator 工具链的核心可靠性问题，与 Issue #556（触发器 0% 触发率）、PR #1769（recall 0%）形成同一问题簇，是社区反馈最密集的领域。
状态：OPEN｜更新 2026-09-16
https://github.com/anthropics/skills/pull/1298

**2. mcp-builder 兼容 mcp>=2（PR #1742）**
功能：适配 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的改名，以及通过 `create_mcp_http_client`/`http_client` 配置自定义 header。
热点：直接修复 Issue #1668，属 MCP 生态升级带来的破坏性变更适配，影响所有 mcp-builder 用户。
状态：OPEN｜更新 2026-09-17
https://github.com/anthropics/skills/pull/1742

**3. AWT — AI Watch Tester E2E 测试 Skill（PR #822）**
功能：为 Claude 提供视觉与浏览器控制能力，执行端到端测试。
热点：AI 驱动的测试生成是社区长期诉求方向；该 PR 从 2026-03-31 持续更新至 2026-09-19，是列表中更新最"新鲜"的长期开放 PR 之一。
状态：OPEN｜创建 2026-03-31，更新 2026-09-19
https://github.com/anthropics/skills/pull/822

**4. Hivemind — 零成本多智能体编排（PR #1628）**
功能：让 Claude Code 将机械性工作委派给运行免费模型的 headless opencode worker，Claude Code 保持唯一规划者/审查者/合并者角色。
热点：回应"昂贵模型应只做规划"的成本优化诉求，是 agent 编排方向的新提案。
状态：OPEN｜更新 2026-08-24
https://github.com/anthropics/skills/pull/1628

**5. Pyxel — 复古游戏开发 Skill（PR #525）**
功能：指导 agent 用 Python 创建、调试、验证复古游戏，包含确定性 headless 运行、逐帧检查与任务特定状态检查。
热点：老牌开放 PR（2026-03-05 创建），持续更新至 2026-09-16，说明作者仍在积极维护。
状态：OPEN｜更新 2026-09-16
https://github.com/anthropics/skills/pull/525

**6. document-typography — 文档排版质量控制（PR #514）**
功能：防止 AI 生成文档中的孤词换行、孤行段落、编号错位等排版问题。
热点：面向"AI 生成文档质量"的通用痛点，与文档类 Skill 生态（docx/pdf/odt）形成互补。
状态：OPEN｜更新 2026-03-13
https://github.com/anthropics/skills/pull/514

**7. scnet-hpc — HPC 集群运维 Skill（PR #1615）**
功能：通过 profile-based SSH 与 Slurm 工作流操作 SCNet HPC 集群。
热点：面向科研/高性能计算垂直场景的 Skill，代表专业化方向。
状态：OPEN｜更新 2026-08-24
https://github.com/anthropics/skills/pull/1615

**8. skill-quality-analyzer + skill-security-analyzer（PR #83）**
功能：为 marketplace 的 example-skills 增加两个元技能——从五个维度评估 Skill 质量的工具，以及安全分析工具。
热点：与 Issue #492（命名空间信任边界滥用）呼应，指向 Skill 质量与安全的元层治理。
状态：OPEN｜更新 2026-01-07
https://github.com/anthropics/skills/pull/83

---

## 2. 社区需求趋势（来自 Issues）

**① Skill 质量评估与安全治理（最高热度）**
Issue #492 是本次数据中评论最多的议题（43 条评论），聚焦社区 Skill 冒充 `anthropic/` 官方命名空间带来的信任边界漏洞。与之呼应的是 PR #83 的质量/安全分析器，以及 Issue #189（document-skills 与 example-skills 安装内容重复，9 个 👍）。
https://github.com/anthropics/skills/issues/492 ｜ https://github.com/anthropics/skills/issues/189

**② Skill 评估工具链的可靠性**
Issue #556（`run_eval.py` 中 `claude -p` 从不触发 skills/commands，全查询 0% 触发率，12 条评论 / 7 👍）、PR #1769（trigger 报 0% recall）、PR #1298 构成同一问题簇，说明 skill-creator 的评估闭环是社区实际使用中最大的阻塞点。
https://github.com/anthropics/skills/issues/556

**③ 组织级 Skill 共享与分发**
Issue #228 提出在 Claude.ai 内实现组织内 Skill 共享（16 条评论 / 8 👍），当前需手动下载 `.skill` 文件再经 Slack/Teams 传递。这是评论数第二高的需求。
https://github.com/anthropics/skills/issues/228

**④ 上下文窗口与 token 成本控制**
Issue #1487 报告 `claude-api` skill 单次工具调用即注入约 156k tokens，耗尽上下文窗口。这与 PR #1628（Hivemind 用免费模型跑机械工作）指向同一诉求：Skill 的 token 效率与成本。
https://github.com/anthropics/skills/issues/1487

**⑤ 治理/安全/质量类新 Skill 提案**
Issue #412（agent-governance：策略执行、威胁检测、信任评分、审计追踪）与 Issue #1385（三阶段推理质量门：前置校准 → 对抗审查 → 交付验证）代表社区希望 Skill 覆盖 AI 输出的质量与合规层。
https://github.com/anthropics/skills/issues/412 ｜ https://github.com/anthropics/skills/issues/1385

**⑥ 平台集成与工具化**
Issue #29（AWS Bedrock 上如何让 Skills 工作）、Issue #16（将 Skills 暴露为 MCP）、Issue #1175（SharePoint Online 文档处理的权限与上下文窗口顾虑）反映对运行平台广度与既有系统集成的需求。
https://github.com/anthropics/skills/issues/29 ｜ https://github.com/anthropics/skills/issues/16

**⑦ 文档 / 记忆 / 压缩**
Issue #1329 提出 compact-memory skill（用符号记法压缩长期运行 agent 的状态）；PR 侧有 ODT（#486）、docx 孤立评论检测（#1734）等文档处理方向。
https://github.com/anthropics/skills/issues/1329

---

## 3. 高潜力待合并 Skills（活跃但未合并的 OPEN PR）

以下 PR 均为 OPEN 状态且近期有更新，落地可能性较高：

| Skill | PR | 近期更新 | 判断依据 |
|---|---|---|---|
| skill-creator 触发器评估修复 | [#1298](https://github.com/anthropics/skills/pull/1298) | 2026-09-16 | 修复核心工具链可靠性，对应高热度 Issue 簇 |
| mcp-builder mcp>=2 兼容 | [#1742](https://github.com/anthropics/skills/pull/1742) | 2026-09-17 | 修复破坏性变更（Fixes #1668），影响面广 |
| blast-radius（批量/破坏性写操作前检查清单） | [#1776](https://github.com/anthropics/skills/pull/1776) | 2026-09-18 | 2026-09-17 新提交，最新活跃 |
| proofcore-contract-auditor（智能合约静态分析 + TON 链上审计存证） | [#1771](https://github.com/anthropics/skills/pull/1771) | 2026-09-16 | 2026-09-15 新提交，Web3 垂直方向 |
| AWT AI Watch Tester（E2E 测试） | [#822](https://github.com/anthropics/skills/pull/822) | 2026-09-19 | 持续维护近 6 个月，数据中最晚更新 |
| md2video-audio（Markdown → 带配音 MP4） | [#1703](https://github.com/anthropics/skills/pull/1703) | 2026-09-15 | 零成本、产出形态新颖 |
| office redlining UTF-8 修复 | [#1765](https://github.com/anthropics/skills/pull/1765) | 2026-09-14 | 修复 #1707，非 ASCII 内容跨平台问题 |
| mcp-builder 评估默认模型升级至 claude-sonnet-5 | [#1724](https://github.com/anthropics/skills/pull/1724) | 2026-09-07 | 默认值过时（claude-3-7-sonnet-20250219），改动小、价值明确 |

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是"可靠性"：一方面要求 skill-creator 的触发评估与 mcp-builder 的工具链真正可用、可复现，另一方面要求 Skill 的分发、命名与质量有可信的边界——这两个诉求的热度都显著高于新增功能型 Skill 的提案。**

---

### 数据局限说明
- 所提供 PR 数据的评论数均为 `undefined`，无法据此做精确热度排序；第 1 节排序为综合判断结果。
- 所提供 Issues 数据中，#202、#412、#1175 状态为 CLOSED，其余为 OPEN。
- 所有功能描述与状态均直接取自所提供摘要，未做外部补充或推断。

---

# Claude Code 社区动态日报（2026-09-19）

## 今日速览

AGENTS.md 支持正式落地：v2.1.277 加入 AGENTS.md 读取支持，而社区呼声最高的 Issue #6235（5174 👍）同日关闭，PR #95409 已提交 `agents-md` mod 源码。Cowork/云会话与桌面端成为 Bug 重灾区，今日多条高关注问题集中在 git proxy 拦截推送、工作区 VM 无法启动、沙箱磁盘不清理等基础设施稳定性上。

## 版本发布

**v2.1.278**
- Claude API 与 Enterprise 用户，以及 Bedrock、Vertex、Foundry、网关环境下，auto 模式默认改用服务端分类器，且不收取分类器开销；Bedrock、Vertex、Foundry 及网关可通过 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 退出。

**v2.1.277**
- 新增 AGENTS.md 支持：项目中没有 CLAUDE.md 时，Claude Code 改为读取 AGENTS.md，可在 `/config` 的 "Project instructions" 中修改（Bedrock、Vertex、Foundry 暂不支持）。
- 新增 `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1`，用于将网关代理视为出口边界的 Claude 应用网关。

## 社区热点 Issues

1. **[#6235] 支持 AGENTS.md（已关闭）** — 5174 👍、405 条评论，本仓库热度最高的话题。作者指出 Codex、Amp、Cursor 等正围绕 agents.md 标准化，CLAUDE.md 过于 Claude Code 专属。随 v2.1.277 发布正式关闭。
   https://github.com/anthropics/claude-code/issues/6235

2. **[#91870] Mods：让 Claude 扩展性提升 10 倍（OPEN）** — 204 条评论。社区更新显示团队已承诺在数周内发布，插件/hooks 扩展机制是当前最受期待的能力。
   https://github.com/anthropics/claude-code/issues/91870

3. **[#76248] Cowork 云会话 git proxy 阻断所有推送（OPEN）** — 自 2026-07-10 起，即使使用自带的细粒度 PAT 也无法推送到未授权仓库集，疑似 `CCR_TEST_GITPROXY` 灰度引入，直接阻断远程协作工作流。
   https://github.com/anthropics/claude-code/issues/76248

4. **[#92710] Cowork (macOS) 新项目只能绑定单个文件夹（OPEN）** — 2026-09-06 起行为变更，Context 仅接受文档，静默破坏重度用户长期构建的多文件夹项目，且文档仍描述旧行为。
   https://github.com/anthropics/claude-code/issues/92710

5. **[#84125] 交互式会话中 LSP 工具被从所有子代理工具集裁剪（OPEN）** — LSP 在父代理和 `-p` 模式子代理中可用，但交互式会话里子代理完全无法访问，影响代码理解类子任务。
   https://github.com/anthropics/claude-code/issues/84125

6. **[#92987] security-guidance：提交审查结果被内层 CLI 的 stderr 警告替换（OPEN）** — OAuth 订阅用户（无 ANTHROPIC_API_KEY）的 agentic commit/push 审查能产出 findings，但结果体无法送达模型，安全审查实际失效。
   https://github.com/anthropics/claude-code/issues/92987

7. **[#73770] statusline 暴露按模型周配额（OPEN）** — 希望将 Opus/Sonnet/Fable 的周限额度接入 statusline 的 stdin JSON，便于自定义状态栏展示与 `/status` 一致的用量。
   https://github.com/anthropics/claude-code/issues/73770

8. **[#93650] Cowork (Windows) 工作区 VM 永不启动（OPEN）** — 服务无限等待 `configure`，客户端每秒重连一次，Windows 端 Cowork 完全不可用。
   https://github.com/anthropics/claude-code/issues/93650

9. **[#92158] 桌面端本地代理沙箱（每个约 300MB）从不清理（OPEN）** — `local-agent-mode-sessions` 下每次子代理/任务运行累积一个目录且任务结束后不删除，磁盘每天被填满。
   https://github.com/anthropics/claude-code/issues/92158

10. **[#93894] Fable 5.1 中等强度单次代码审查耗尽 $100/月订阅配额（OPEN）** — 反映高成本模型与订阅额度模型之间的冲突，用户直接对比 OpenAI 同档位的周限模式。
    https://github.com/anthropics/claude-code/issues/93894

其他值得留意：#88391 桌面端提示建议在 2.1.229 后静默消失（回归）；#93688 Linux 桌面自生成的 .desktop 条目破坏 `claude://` 登录握手；#94787 桌面端行内 `\( ... \)` 数学超 58 字符静默失效。

## 重要 PR 进展

1. **[#94847] diff：首次编辑仅在确有文件可列时打开面板（OPEN）** — 修复面板在首次 Edit/Write/NotebookEdit 时早于拉取就打开，导致仓库外写入、被忽略文件或其他 worktree 写入也误触发。
   https://github.com/anthropics/claude-code/pull/94847

2. **[#95488] diff：停靠面板先读仓库再打开，不再停留在 "Loading diff"（CLOSED）** — 使首次编辑和 `/diff` 都能直接落地为已填充内容（行、"No changes" 或 "Diff unavailable"）。
   https://github.com/anthropics/claude-code/pull/95488

3. **[#95476] diff：首次编辑仅在主循环且开启 checkpointing 时自动打开（CLOSED）** — 子代理编辑或关闭 checkpointing 的会话不再自动打开；引擎遗留的等待打开会被撤回。
   https://github.com/anthropics/claude-code/pull/95476

4. **[#95423] diff：被工具标记为只读的 shell 命令不再触发重新拉取（OPEN）** — 与内置面板对齐，仅对可能产生写入的命令（如 `ls`、`git status`、`cat`、grep 之外的命令）重新拉取。
   https://github.com/anthropics/claude-code/pull/95423

5. **[#95198] mods/diff：将 openPane 返回类型改为 unknown（CLOSED）** — 配合 `$.ui.open` 即将返回结果对象，保持当前与下一版兼容编译。
   https://github.com/anthropics/claude-code/pull/95198

6. **[#95417] mods/agents-md：引擎不附加内容时 Read 不附加嵌套 AGENTS.md（CLOSED）** — 在 `--bare`（设置 `CLAUDE_CODE_SIMPLE`）或 `CLAUDE_CODE_DISABLE_ATTACHMENTS` 下保持一致行为。
   https://github.com/anthropics/claude-code/pull/95417

7. **[#95409] mods/agents-md：AGENTS.md 项目指令 mod（CLOSED）** — 新增 `mods/agents-md` 源码，含 manifest、`hooks/` 模块、`claude plugin test` 测试与 README，布局对齐 `sec-default`、`diff`、`telemetry`。这是 AGENTS.md 支持在插件体系中的正式实现。
   https://github.com/anthropics/claude-code/pull/95409

8. **[#51452] 更新 README.md（CLOSED）** — 重写文案以去除 AI 写作痕迹（填充短语、宣传性语言、浅层分析），精简标题、简化安装块并修复失效的 npm 徽章。
   https://github.com/anthropics/claude-code/pull/51452

（过去 24 小时内更新的 PR 共 8 条，以上为全部。）

## 功能需求趋势

- **跨代理标准与扩展性**：AGENTS.md 标准化（#6235）已落地；紧随其后的是 mods/插件扩展体系（#91870，204 条评论），社区希望 Claude Code 成为可编程平台而非封闭工具。
- **CLI 与报告能力**：`/insights` 的日期范围（#82928）、时间跨度可配置（#78067）、按项目作用域（#95543）三条请求集中出现，社区希望用量洞察可按窗口和项目切分。
- **可观测性与配额透明**：statusline 暴露按模型周配额（#73770），与 #93894 的配额耗尽投诉共同指向用量可见性的需求。
- **IDE / 浏览器与远程控制集成**：Chrome 集成在 remote-control 派生会话中缺失（#74671）、file_upload 拒绝本地路径（#69127）显示集成能力与真实行为不一致。

## 开发者关注点

1. **Cowork / 云会话的稳定性与权限模型**：git proxy 授权仓库集、单文件夹绑定、Windows VM 无法启动等问题集中在同一产品面，且多处为静默行为变更或与文档不符，开发者最反感的是"无提示的破坏性变更"。
2. **数据与磁盘卫生**：桌面端沙箱目录（#92158）从不清理、会话数据丢失后项目从侧栏消失（#83826），影响长期使用者的日常信任。
3. **静默失败类 Bug 频发**：数学公式渲染（#94787）、提示建议消失（#88391）、安全审查结果被 stderr 覆盖（#92987）、文件上传拒绝合法路径（#69127）——共同特征是失败无提示，排障成本高。
4. **订阅成本与额度模型**：$100/月档位单次审查即耗尽配额（#93894）引发对按模型分层配额、周限替代会话限的讨论。
5. **平台差异与回归**：#93688（Linux .desktop 握手）、#88391（2.1.229 回归）、#93650（Windows）表明各平台体验与版本回归是持续痛点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-19）

## 1. 今日速览

过去 24 小时内，Codex 仓库持续高频迭代：稳定版 `rust-v0.155.1` 发布，修复了新本地 TUI 会话默认开启 reasoning summaries 导致部分提供商拒绝请求的问题；同时 `0.156.0-alpha.3` 至 `alpha.7` 多个预发布版本密集推出。社区侧，Issue 讨论高度集中在 **Windows 平台功能失效**（Computer Use、Chrome 集成、更新流程）与 **认证/配额异常**两大方向，其中 `/undo` 功能回归请求以 454 👍、83 条评论成为今日热度最高议题。PR 队列由 `copyberry[bot]` 主导，集中在沙箱安全、网络代理与插件/子代理架构重构。

---

## 2. 版本发布

**rust-v0.155.1（稳定版）**
- **Bug 修复**：新建本地 TUI 会话默认不再启用 reasoning summaries，修复了不支持该特性的提供商拒绝请求的问题；用户显式设置的 reasoning-summary 配置仍会被尊重。（#46467）
- 完整变更日志：https://github.com/openai/codex/compare/rust-v0.155.1

**预发布版本**：`rust-v0.156.0-alpha.3`、`alpha.4`、`alpha.5`、`alpha.6`、`alpha.7` 均已发布，Release notes 内容仅为版本号，未附具体变更说明。

---

## 3. 社区热点 Issues（按评论数排序）

1. **#9203 [enhancement, TUI, session] 请恢复 `/undo` 功能** — 83 评论 / 👍454
   用户希望在 Codex 误删未纳入 git 跟踪的文件、或修改未提交内容时能够回退，作者称已多次“踩坑”。这是今日互动量最高的 Issue，社区对可撤销操作的需求非常强烈。
   https://github.com/openai/codex/issues/9203

2. **#25178 [bug, windows-os, app, computer-use] Windows 10 22H2 上 Computer Use 截图失败** — 70 评论 / 👍28
   调用 `SetIsBorderRequired` 后，任何带截图的 `get_window_state` 都在捕获前失败。Windows 端 Computer Use 能力被大面积阻断。
   https://github.com/openai/codex/issues/25178

3. **#36040 [bug, iOS, remote] iOS 远程控制回归：仅列出有近期会话的项目** — 50 评论 / 👍3
   ChatGPT iOS 应用通过 Remote Control 连接 macOS 主机时项目列表不完整，属于明确的回归问题。
   https://github.com/openai/codex/issues/36040

4. **#25828 [bug, auth, CLI] 手机验证码无法发送** — 35 评论 / 👍7
   印尼地区用户无法完成 Codex 登录，卡在 `auth.openai.com/add-phone` 环节，提示“无法向该号码发送验证码”。涉及账号可用性，影响面广。
   https://github.com/openai/codex/issues/25828

5. **#27117 [bug, windows-os, CLI] Windows 独立更新继承 PSModulePath，导致 Get-FileHash 失败** — 34 评论 / 👍26
   更新动作即使从 pwsh 启动也会调用 `powershell.exe`，环境污染导致哈希校验失败，直接破坏自更新链路。
   https://github.com/openai/codex/issues/27117

6. **#24990 [bug, auth] ChatGPT 登录流程无法使用** — 28 评论 / 👍24
   ChatGPT Plus 付费用户无法通过官方宣传的 ChatGPT 登录流程访问 Codex，且 `codex login` 与 `--device-auth` 均失败。付费权益与登录链路不一致的问题。
   https://github.com/openai/codex/issues/24990

7. **#21670 [bug, windows-os, app, skills, app-server, browser] Windows 桌面版 Chrome 插件与 Browser Use 挂起，插件卸载报 os error 5** — 16 评论 / 👍7
   浏览器自动化桥接不稳定，Chrome 插件打开 HTTPS 页面缓慢且不可靠。
   https://github.com/openai/codex/issues/21670

8. **#42520 [bug, windows-os, app, app-server, browser] Chrome 集成未生成 chrome-native-hosts-v2.json，升级后遗留陈旧 latest junction** — 12 评论 / 👍1
   新版（26.901.1978.0）安装后原生消息主机配置文件缺失，浏览器集成无法完成注册。
   https://github.com/openai/codex/issues/42520

9. **#45317 [bug, windows-os, auth, custom-model, app, browser] Chrome 浏览器集成拒绝 API-key 认证** — 11 评论
   BrowserSkill 0.2.1 报“unsupported Codex auth method: apikey”，更新后浏览器扩展被识别但无法枚举或读取页面。
   https://github.com/openai/codex/issues/45317

10. **#46436 [bug, windows-os, app, computer-use] Windows Computer Use 无法枚举原生应用** — 7 评论
    新版 26.909.12148 上应用枚举失败，与 #25178 一同表明 Windows Computer Use 仍处于不可用状态。
    https://github.com/openai/codex/issues/46436

> 其他值得留意：#42531（macOS 桌面端 Chat 模式在 Pro 达限后卡在 Instant）、#45236（Pro 20x 周配额重置日被无故从 9/15 移至 9/19）、#42025（durable-rollout 拒绝 token_count 事件导致会话历史消失）、#41044（macOS 桌面端认证循环）、#24533（websocket 提前关闭导致会话断连）、#44767（CLI 0.154.0 在 tmux 内启动挂起）。

---

## 4. 重要 PR 进展

以下 PR 均由 `copyberry[bot]` 提交，状态均为 CLOSED，日期为 2026-09-19。

1. **#46583 在 macOS Seatbelt 配置中拒绝 XPC 服务查询**
   收紧 macOS 沙箱策略，禁止 XPC 服务查找。
   https://github.com/openai/codex/pull/46583

2. **#46580 让 Guardian 审查基于已应用的指令快照**
   共享线程指令可能在动作生成后、 Guardian 审查前发生变化，轮询实时 provider 会导致审查者看到不一致的指令，此 PR 固定审查基准。
   https://github.com/openai/codex/pull/46580

3. **#46579 启动时将会话命令中心限制为最近 10 个会话**
   将初始最近会话种子数从 20 减至 10，并通过共享 `RECENT_SESSION_LIMIT` 统一分页、收集与最终截断逻辑。
   https://github.com/openai/codex/pull/46579

4. **#46578 修复独立网络代理策略初始化**
   向 `build_config_state` 传入 `Platform::native()`，满足其必需的 executor OS 参数，并按宿主平台校验 socket 路径。
   https://github.com/openai/codex/pull/46578

5. **#46577 允许线程指令 provider 向子代理共享更新**
   子代理继承已应用的指令快照，后续 provider 更新无法触达运行中的后代；此 PR 提供显式共享机制。
   https://github.com/openai/codex/pull/46577

6. **#46575 保留沙箱后代的 Windows 包标识**
   原先包上下文传播仅限已验证的 `codex-command-runner.exe`，现扩展至其他打包调用方，使其可传递 OS 分配的标识。
   https://github.com/openai/codex/pull/46575

7. **#46574 TUI 中异步问题到达时通知用户**
   新问题到达时发送 `async-question` 通知，遵循既有通知设置，并优先于 turn 完成通知。
   https://github.com/openai/codex/pull/46574

8. **#46573 新增带 JSON 配置的独立网络代理二进制**
   提供 `codex-network-proxy --config <PATH>`，使网络策略代理无需完整 Codex 权限配置即可运行。
   https://github.com/openai/codex/pull/46573

9. **#46571 在临时目录中保留 macOS Seatbelt 排除项**
   隐式临时目录授权可能绕过文件系统限制并触及受保护的项目元数据，移动祖先目录还可能使受保护路径脱离原有范围。
   https://github.com/openai/codex/pull/46571

10. **#46570 按认证模式标记远程模型拉取耗时**
    为 `codex.remote_models.fetch_update.duration_ms` 增加 `auth_mode` 标签，区分 `api_key` 与 `chatgpt` 等模式。
    https://github.com/openai/codex/pull/46570

> 其余 PR：#46572（MCP 扩展增加 turn 启动时的云插件发现）、#46569（为 exec 与 TUI 请求设置显式 turn trigger）、#46568（使用捕获的环境状态做权限与守护进程恢复）、#46567（分离插件目录列举与包解析）、#46566（线程不可用时仍允许恢复类命令）。

---

## 5. 功能需求趋势

- **可撤销与安全网**：#9203 请求恢复 `/undo`，反映出随着 Codex 具备文件修改与命令执行能力，用户对“误操作回滚”的需求从体验层面上升为核心诉求。
- **跨平台一致性（Windows 尤为突出）**：今日 Issues 中 Windows 相关条目占比极高，覆盖 Computer Use 截图与枚举、Chrome/浏览器集成、独立更新流程、桌面 GUI 消息超时、app-server 拒绝自身 feature key、子代理面板信息缺失等。
- **远程与多端协同**：iOS Remote Control 项目列表回归（#36040）、Windows 桌面将已连接的 Remote 状态标记为失败（#44504）、桌面端会话历史投影失败（#42025）。
- **认证与配额透明度**：手机验证码无法发送（#25828）、ChatGPT 登录流程失败（#24990）、桌面端认证循环（#41044）、API-key 在浏览器集成中被拒（#45317）、周配额重置日异常漂移（#45236）、Pro 限流后 Chat 模式降级（#42531）。
- **自定义模型与插件/扩展体系**：#45317 涉及 `custom-model` 标签，配合 PR 侧对插件目录、云插件发现、MCP 扩展的密集重构，显示插件生态与自定义模型支持正处于架构调整期。
- **网络稳定性**：websocket 提前关闭导致流中断（#24533）、stream 失败与 safety-check 延迟（#44961）。

---

## 6. 开发者关注点

- **高频痛点集中在 Windows**：从更新链路（PSModulePath 污染导致 `Get-FileHash` 失败）、浏览器集成（配置文件缺失、API-key 被拒）、到 Computer Use（截图与枚举双双不可用），Windows 用户当前可用性明显落后于其他平台。
- **认证链路是访问门槛**：多个 Issue 显示付费用户（Plus / Pro）仍无法完成登录或手机验证，属于“付费即不可用”的严重体验断裂，且跨越印尼、以及桌面端 macOS/Windows 多个区域与平台。
- **自更新可靠性受质疑**：更新后的遗留 junction、版本回滚可修复认证循环（#41044）等反馈，说明升级路径本身可能引入回归，用户被迫依赖版本回退。
- **TUI/CLI 基础体验仍需打磨**：`/undo` 缺失、tmux 内启动挂起（#44767）、异步问题通知（PR #46574）等，显示交互层仍在补齐成熟工具应有的能力。
- **架构层改动活跃但透明度有限**：`0.156.0-alpha.*` 连续多个预发布版本未附变更说明，而 PR 侧正进行沙箱（Seatbelt/XPC、Windows 包标识）、网络代理、插件与子代理指令传播等底层重构，开发者若跟踪行为变化需自行比对提交。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-19）

## 今日速览

今日发布 v0.62.0-nightly.20260919 夜间版本，主要包含版本号推进与 ConPTY 进程退出生命周期修复。社区侧，Agent 可靠性问题持续占据焦点：子代理在达到 MAX_TURNS 后被误报为成功、通用代理无限挂起、浏览器子代理在 Wayland 下失败等问题均处于 p1 优先级且持续有讨论。PR 层面出现较多针对状态持久化、AST 感知搜索与文件化任务跟踪的提案，反映核心架构正在向更稳健的持久化与符号级导航演进。

## 版本发布

**v0.62.0-nightly.20260919.gcfbcaa8df**（nightly）
- 版本号从 0.62.0-nightly.20260918.g9450ade79 推进（PR #29383，@gemini-cli-robot）
- `fix(core)`：同步 ConPTY 进程退出生命周期并加固 PTY 输出收尾（@jvargassanchez-dot）
- 链接：https://github.com/google-gemini/gemini-cli/releases

## 社区热点 Issues

1. **#22323 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（p1，13 评论）
   `codebase_investigator` 在未做任何分析即触达轮次上限时仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了中断事实。这会误导用户对代理结果的信任，是当前最受关注的正确性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 通用代理无限挂起**（p1，8 评论，8 👍）
   一旦 CLI 委派给 generalist agent 就会永久挂起，简单如创建文件夹的操作也会卡住，用户等待一小时仍需手动取消。点赞数最高，说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21983 浏览器子代理在 Wayland 下失败**（p1，agent/browser）
   在 Wayland 环境中 browser subagent 直接以「Browser Agent Finished」结束而无法工作，属于 Linux 桌面用户的阻断性问题。
   https://github.com/google-gemini/gemini-cli/issues/21983

4. **#22186 get-shit-done 输出钩子导致崩溃**（p1）
   在输出即将完成、打印用户摘要时反复崩溃 Gemini，属于输出处理路径的稳定性问题。
   https://github.com/google-gemini/gemini-cli/issues/22186

5. **#21968 Gemini 不够主动使用 skills 与子代理**（p2，6 评论）
   用户反馈除非显式指令，模型基本不会自行调用自定义 skills 和 sub-agents，即使任务高度相关。这直接关系到多代理能力的实际可用性。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#22745 AST 感知文件读取、搜索与映射的影响评估**（p2，7 评论）
   跟踪是否值得引入 AST 感知工具链，目标是以更少轮次精确读取方法边界、减少不必要的整文件读取，是代码理解能力演进的关键议题，今日已有对应 PR。
   https://github.com/google-gemini/gemini-cli/issues/22745

7. **#19873 通过零依赖 OS 沙箱与执行后意图路由利用模型的 bash 亲和性**（p2，9 评论）
   指出 Gemini 3 模型原生擅长链式调用 POSIX 工具，建议以沙箱方式充分释放这一能力，属于架构方向性的提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

8. **#26525 Auto Memory 需确定性脱敏并减少日志**（p2，area/security）
   Auto Memory 会读取本地会话记录并发送给后台提取代理，虽然提示词要求脱敏，但脱敏发生在内容已发出之后，存在隐私风险。
   https://github.com/google-gemini/gemini-cli/issues/26525

9. **#24246 工具数超过 128 时触发 400 错误**（p2）
   启用工具数过多时 Gemini CLI 会遇到 400 错误，期望代理能更智能地限定工具范围，属于规模扩展下的实用问题。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#22672 代理应停止/劝阻破坏性行为**（p2，1 👍）
    在复杂 git 操作中模型偶尔使用 `git reset` 或 `--force`，即使存在更安全的替代方案；维护数据库等资源时也有类似风险。
    https://github.com/google-gemini/gemini-cli/issues/22672

## 重要 PR 进展

1. **#29396 AST 感知结构化搜索工具**（p2，area/agent，size/xl）
   实现 #22745 所要求的 AST 工具，引入轻量正则式 AST 分析，让代理进行符号级精确定位，而非猜测行号或通读整文件。
   https://github.com/google-gemini/gemini-cli/pull/29396

2. **#29402 持久化状态写入失败安全**（p1，area/core）
   让 `PersistentState` 写入具备失败安全：先写入唯一临时文件、fsync，再原子替换，避免中断写入把 `state.json` 截断并静默清空状态。
   https://github.com/google-gemini/gemini-cli/pull/29402

3. **#29393 以持久化文件任务跟踪替代 WriteToDo**（p3，size/l~xl）
   用基于 TrackerService 的文件化 CRUD 任务系统取代纯上下文的 WriteToDo，解决上下文腐化、token 成本高与重启后记忆丢失问题（对应 #18836）。
   https://github.com/google-gemini/gemini-cli/pull/29393

4. **#29368 按 ID 解析 session/load，即使无可恢复内容**（p1，area/non-interactive）
   诊断指出报告中的两个现象仅其一为代理侧缺陷，修复了即使会话文件存在也加载失败的问题（Fixes #29288）。
   https://github.com/google-gemini/gemini-cli/pull/29368

5. **#29407 JSON 序列化保留共享引用**（p2，area/enterprise）
   修复 #29406：仅将处于当前 JSON 递归路径上的对象视为循环引用，使导出文件中重复出现的 OpenTelemetry 数组不再被替换成 `[Circular]`。
   https://github.com/google-gemini/gemini-cli/pull/29407

6. **#29404 新增 `gemini models list` 及 JSON 输出**（p3，area/non-interactive）
   让外部集成可发现 `-m/--model` 的合法模型 ID，避免硬编码过期 ID，因为交互式 `/model` 对话框无法被外部工具解析。
   https://github.com/google-gemini/gemini-cli/pull/29404

7. **#29208 agents.json 形状异常时回退为空**（已关闭，p2）
   损坏的 `agents.json`（合法 JSON 但结构错误，如 null、标量或数组）会导致 `isAcknowledged`/`acknowledge` 抛出 `TypeError` 或静默丢数据，现改为安全回退。
   https://github.com/google-gemini/gemini-cli/pull/29208

8. **#29217 不再改写显式选择的 gemini-2.5-flash**（已关闭，p1/p2）
   `isFlashModel()` 使用宽泛的 `endsWith('flash')` 匹配，会把用户显式固定的 2.5-flash 自动升级到 3.5-flash，现修正为尊重显式选择。
   https://github.com/google-gemini/gemini-cli/pull/29217

9. **#29200 运行时一致地执行 MCP 策略**（已关闭，p2）
   使 MCP 运行时策略检查与 CLI 的大小写不敏感、去空白服务器名匹配保持一致，并将显式为空的 `mcp.allowed` 列表视为 fail-closed。
   https://github.com/google-gemini/gemini-cli/pull/29200

10. **#29201 跨确认重试保留已批准的 shell 命令**（已关闭，p1/p2，area/security）
    修复 TOML 自定义命令含多个 `!{...}` shell 注入时，CLI 在命令间循环反复索要权限、永不收敛的问题（Fixes #29197）。
    https://github.com/google-gemini/gemini-cli/pull/29201

## 功能需求趋势

- **代理可靠性优先**：p1 级 issue 高度集中于子代理误报成功、通用代理挂起、浏览器代理失败等运行时稳定性问题，说明多代理架构的健壮性是当前最紧迫的方向。
- **代码理解走向符号级**：AST 感知的读取、搜索与代码库映射（#22745 及其 PR #29396）显示社区希望从整文件读取转向精确符号导航以降低轮次与 token 成本。
- **任务与状态持久化**：从 WriteToDo 转向文件化 CRUD 任务跟踪（#18836、#29393），以及 #29402 的状态写入失败安全，共同指向「重启不丢状态」的诉求。
- **模型与工具选择智能性**：工具超 128 个触发 400 错误（#24246）、显式模型选择被自动升级改写（#29217），反映用户期望代理和配置层更尊重显式意图。
- **安全与隐私内建**：Auto Memory 的确定性脱敏（#26525）、shell 包装器剥离（#29203）、破坏性命令劝阻（#22672）等，构成一条清晰的安全加固线。

## 开发者关注点

- **信任成本高**：代理「假装成功」（#22323）与无限挂起（#21409）会让用户无法判断任务是否真正完成，是反馈中情绪最强的痛点。
- **多代理能力未被自动触发**：skill 与 sub-agent 需显式指令才会使用（#21968），用户期望代理能自行判断何时委派。
- **文件系统与状态易损坏**：agents.json、state.json、symlink 形式的 agent 定义（#20079）等问题反复出现，开发者需要更健壮的持久化与容错路径。
- **本地环境适配**：Wayland 下浏览器代理不可用（#21983）、PTY/ConPTY 生命周期问题，显示跨平台终端与显示服务器支持仍需打磨。
- **清理与副作用控制**：模型在随机目录生成临时脚本（#23571）、使用 `git reset`/`--force` 等破坏性命令（#22672），增加了代码审查与清理负担。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-19）

## 1. 今日速览

今日发布 v1.0.87-0，引入 Auto 路由层级的启动默认值配置（含组织级策略），并改进了连续 steering 提示的合并与撤回编辑体验。Issue 侧更新活跃（共 48 条），一批长期存在的渲染、会话状态与上下文管理问题集中关闭；同时新出现的 MCP 远程服务器兼容性、桌面端会话崩溃等问题值得关注。今日无 PR 更新。

## 2. 版本发布

**v1.0.87-0**
- 新增用户级与托管（managed）的 **Auto 路由层级启动默认值**，支持严格的以及用户可覆盖的组织策略
- 同一模式下连续的 steering 提示将合并为一条待处理消息；在空输入框中按 **Up** 可将其取回编辑，包括粘贴的文本
- 链接：github/copilot-cli

## 3. 社区热点 Issues（精选 10 条）

1. **[OPEN] 组织级 Agent 不显示（#1285）** — 企业在 `{org}/.github-private` 中配置的 Agent 未在 CLI/VS Code 中出现，13 个 👍、10 条评论，企业采纳路径上的关键阻塞。
   https://github.com/github/copilot-cli/issues/1285

2. **[OPEN] Figma 远程 MCP 服务器加载失败（#4870）** — `mcp.figma.com` 认证成功但 `server/discover` 返回 `-32601` 被 CLI 当作致命错误，而 VS Code 中可用；11 个 👍，反映 MCP 错误处理与生态兼容性差距。
   https://github.com/github/copilot-cli/issues/4870

3. **[OPEN] 桌面端会话启动数分钟后崩溃（#4905）** — 报错 "GitHub credential registration is no longer available for this session"，导致 github-mcp-server catalog 过期并致命；涉及桌面应用 1.1.22 与捆绑 CLI 1.0.84-5。
   https://github.com/github/copilot-cli/issues/4905

4. **[CLOSED] Alpine Linux 上工具调用导致段错误（#107）** — 从 2025-09 持续至今、16 条评论，长期平台兼容性问题终于关闭。
   https://github.com/github/copilot-cli/issues/107

5. **[CLOSED] TUI 回合中途卡死（#4069）** — stdout 写 EIO、Rust JSON-RPC 传输 EPIPE，屏幕清空且 Ctrl+C/Ctrl+\ 无效，WSL2 + Windows Terminal 环境；9 个 👍，涉及核心运行时稳定性。
   https://github.com/github/copilot-cli/issues/4069

6. **[CLOSED] 并发子 Agent 事件破坏会话状态（#2543）** — 触发 `tool_use ids were found without tool_result blocks` 永久错误；多 Agent 场景下的会话一致性隐患。
   https://github.com/github/copilot-cli/issues/2543

7. **[CLOSED] Checkpoint 恢复永久删除未跟踪文件（#1675）** — `SnapshotManager.rollbackToSnapshot()` 执行 `git clean -fd`，存在数据丢失风险，属高危修复。
   https://github.com/github/copilot-cli/issues/1675

8. **[CLOSED] Rewind 在非 Git 仓库不可用（#1381）** — 使用 jj 等其他版本控制系统的用户无法使用 rewind，VS Code 端无此限制；11 个 👍。
   https://github.com/github/copilot-cli/issues/1381

9. **[CLOSED] Claude Opus 4.6 上下文被限制在 200K（#3355）** — 模型原生支持 1M tokens，被削减 80% 导致频繁自动压缩，暴露上下文窗口配置能力缺口。
   https://github.com/github/copilot-cli/issues/3355

10. **[OPEN] `--plugin-dir` 加载的 skills 未出现在 `/skills` 与 `/env`（#4886）** — 后端已发现但交互界面遗漏，插件开发者可观测性问题。
    https://github.com/github/copilot-cli/issues/4886

其他值得留意：**[OPEN] 关闭任务栏图标选项（#4839）** https://github.com/github/copilot-cli/issues/4839；**[CLOSED] 大指令文件导致自动压缩死循环（#3621）** https://github.com/github/copilot-cli/issues/3621。

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新（共 0 条），本节省略。

## 5. 功能需求趋势

- **企业级与多 Agent 管理**：#1285（组织级 Agent）、#2543（并发子 Agent 会话状态）显示社区正从单人使用转向企业部署与多 Agent 编排。
- **MCP 生态集成与容错**：#4870（Figma 远程服务器）、#4905（github-mcp-server catalog 过期）表明 MCP 被视为一等公民，但错误处理与生命周期管理尚不成熟。
- **模型与上下文配置**：#3355（Opus 4.6 上下文上限）、#3481（`contextTier=long_context` 未在启动时生效）反映对模型能力充分释放与显式配置的需求。
- **终端渲染与跨平台稳定性**：#3439、#4069、#2151、#3733 集中于 tmux/Cygwin、WSL2、Windows Terminal 等环境，跨平台 TUI 质量是持续热点。
- **VCS 无关的工作流**：#1381 显示 rewind/checkpoint 等能力被绑定在 Git 上，非 Git 用户（如 jj）存在明确缺口。
- **界面可控性与可观测性**：#4839（禁用任务栏图标）、#4886（插件 skills 未在 UI 展示）指向对 CLI 外观和内部状态的用户可控性诉求。

## 6. 开发者关注点

- **数据安全与破坏性操作**：#1675 的 `git clean -fd` 永久删除未跟踪文件、#3621 的无限压缩循环清空上下文，是最高优先级的风险类反馈。
- **会话状态可靠性**：#2543、#2655（`cwd`/`branch` 不再持久化到 session-store.db）、#1381 表明会话存储与恢复机制存在一致性问题。
- **权限与 hooks 语义**：#4237 中 `preToolUse` "ask" 拒绝时的 steering 消息被静默丢弃，影响自定义策略的可预期性。
- **非交互/CI 场景**：#3481 指出非交互式启动的上下文层级不稳定，影响脚本化与自动化使用。
- **临时性基础设施问题**：#3117 晚间频繁出现瞬时 API 错误与重试，可能与后端容量或网络相关。
- **平台细节体验**：#2151（WSL 提示文本颜色）、#3733（Windows 下 `Ctrl+G` 无法启动 `code-insiders --wait`）等小问题累积影响日常体验。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-19）

## 1. 今日速览

今日无新版本发布、无 PR 更新。过去 24 小时共有 7 条 Issue 更新，其中 6 条为历史遗留 Issue 集中关闭——值得注意的是，5 条与 HTTP header 非法字符/尾随空格导致的连接错误相关（#1266、#1368、#1364、#1371），说明这一批连接问题已得到处理。唯一新增的开放 Issue（#2653）报告了 OpenCode Go 提供商因缺失 `x-opencode-session` header 而返回 400 错误。

## 2. 版本发布

今日无新版本发布。

## 3. 社区热点 Issues

> 说明：过去 24 小时内更新的 Issue 共 7 条，以下全部列出（不足 10 条）。

1. **[OPEN] #2653 — OpenCode Go 因缺失 `x-opencode-session` header 返回 400**
   今日唯一新开且仍处于开放状态的 Bug。使用 OpenCode Go 提供商时请求失败并返回 `400 Error`，报告环境为 Windows。作为唯一未关闭的问题，最值得跟进。
   https://github.com/MoonshotAI/kimi-cli/issues/2653

2. **[CLOSED] #1266 — `platform.version()` 尾随空格导致 HTTP header 校验错误**
   环境明确（kimi-cli 1.15.0、Python 3.13.12、Ubuntu 22.04.5），👍 数最高（2），是这批连接类问题中最受关注的一条，已关闭。
   https://github.com/MoonshotAI/kimi-cli/issues/1266

3. **[CLOSED] #1371 — LLM provider error: Connection error**
   使用 `/login` 与 `kimi-for-coding` 模型，版本 1.17.0，Linux 环境下的连接错误，已关闭。
   https://github.com/MoonshotAI/kimi-cli/issues/1371

4. **[CLOSED] #1368 — `platform.version()` 含 `#` 字符导致 Linux 连接错误**
   与 #1266 同源的另一类非法 header 字符问题，涉及 kimicode plan，已关闭。
   https://github.com/MoonshotAI/kimi-cli/issues/1368

5. **[CLOSED] #1364 — Ubuntu 下非法 HTTP header 值导致连接错误**
   版本 1.17.0、Ubuntu 22.04.1 LTS、`kimi-for-coding`，属同一批 header 校验问题，已关闭。
   https://github.com/MoonshotAI/kimi-cli/issues/1364

6. **[CLOSED] #1495 — 增强需求：VSCode 扩展支持配置 Plan Mode 计划保存位置**
   请求新增配置项 `[paths] plans_dir = ".kimi/plans"`，指向 IDE 集成方向。虽已关闭但无评论，需求是否落地尚不明确。
   https://github.com/MoonshotAI/kimi-cli/issues/1495

7. **[CLOSED] #1442 — 如何开具发票 / 缺少开票入口**
   关于 kimi code 开票流程的咨询类 Issue，非技术缺陷。创建于 3 月，今日关闭。
   https://github.com/MoonshotAI/kimi-cli/issues/1442

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节无内容。

## 5. 功能需求趋势

从本次数据看，社区关注方向集中在两处：

- **连接稳定性与 HTTP 兼容性**：5 条 Issue（#1266、#1368、#1364、#1371、#2653）均围绕连接错误与 HTTP header 合法性，是本批次最突出的问题簇。其中历史问题多与客户端发送的 `platform.version()` 含非法字符相关。
- **IDE 集成与可配置性**：#1495 提出为 VSCode 扩展增加 Plan Mode 计划保存路径的配置能力，反映用户对 IDE 侧可定制路径的需求。
- **第三方提供商兼容**：#2653 指向 OpenCode Go 提供商的 session header 要求，提示多提供商适配是新的问题来源。

## 6. 开发者关注点

- **同类 Bug 集中出现**：多条 Issue 指向同一根因——客户端将包含尾随空格或 `#` 等非法字符的 `platform.version()` 写入 HTTP header，触发严格校验而连接失败。这类问题跨版本（1.15.0、1.17.0）反复出现，说明 header 值的清洗/转义环节值得重点加固。
- **第三方提供商适配**：#2653 显示接入非官方提供商（OpenCode Go）时，必需的 `x-opencode-session` header 缺失会导致 400，需在文档或实现中明确提供商特定要求（注：该 Issue 未提供版本、安装方式等环境信息）。
- **配置灵活性诉求**：用户希望通过配置文件自定义产出物路径（如 plans 目录），而非使用固定默认值。

---

*注：本日报严格基于所提供数据生成。Issue 标题原文为英文的不做改写翻译；链接指向 MoonshotAI/kimi-cli 对应编号。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-19）

## 1. 今日速览

今日无新版本发布。社区讨论持续聚焦在**付费/额度异常**（Go 订阅付款后仍显示余额不足、免费额度误判）与 **v2 迁移后的功能回归**（布局、workspaces、快捷键）两大主线。沙箱隔离（#2242）仍是长期热度最高的话题，累计 91 条评论、77 个 👍。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#2242] 是否有办法对 agent 进行沙箱隔离？**（91 评论 / 👍77）
   询问如何限制 agent 的终端命令访问当前目录之外的文件，并指出 gemini-cli、codex-cli 在 macOS 上使用 seatbelt，而 OpenCode 缺乏对等机制。这是当日互动量最高的 Issue，反映出**权限边界与安全隔离**是社区最强烈的长期诉求。
   https://github.com/anomalyco/opencode/issues/2242

2. **[#49433] 免费层只能在 OpenCode 内使用，但仍在报错**（45 评论 / 👍10）
   用户使用 1.3.17 版本时对任意模型都触发 "OpenCode's free tier can only be used from within OpenCode"。高评论量说明该错误影响面广、触发条件可疑，属于阻断性可用性问题。
   https://github.com/anomalyco/opencode/issues/49433

3. **[#37231] Console Go 上游请求失败**（已关闭，30 评论）
   所有 Go 模型返回 "Upstream request failed"，不限 CLI 或桌面端。虽已关闭，但讨论量大，说明上游稳定性问题曾大范围影响用户。
   https://github.com/anomalyco/opencode/issues/37231

4. **[#37790] Go 订阅付款成功但 workspace 显示余额不足**（22 评论）
   Stripe 付款已完成，工作区仍报 "Insufficient balance"，导致无法使用。属于**计费与账号状态不同步**的典型问题。
   https://github.com/anomalyco/opencode/issues/37790

5. **[#48973] reasoning `encrypted_content` was not issued to this caller**（11 评论 / 👍8）
   使用 Muse Spark 1.3 搭配 OpenCode Zen 时触发。属于模型推理内容与调用方不匹配的协议层错误，对使用推理类模型的用户影响直接。
   https://github.com/anomalyco/opencode/issues/48973

6. **[#37546] Web 端无法回退新布局，且新布局缺少 workspaces/worktrees**（7 评论 / 👍26）
   升级到 v1.17.19 以上后自动启用 "tabs on top" 布局，无 UI 可切回，且新布局未实现 git worktrees。👍 数高说明这是**升级体验倒退**的普遍不满。
   https://github.com/anomalyco/opencode/issues/37546

7. **[#49133] TUI：Tab 键不切换 agent，Shift+Tab 才是循环切换**（已关闭，7 评论）
   在 v2.0.3 上 Tab 对 agent 切换无响应。快捷键行为变更引发混淆，已关闭说明得到处理。
   https://github.com/anomalyco/opencode/issues/49133

8. **[#49365] 升级后出现 TypeError: undefined is not an object (evaluating 'a.name')**（6 评论）
   作者附上了干净的 DEBUG 日志，便于定位。属于升级导致的运行时崩溃，值得维护者跟进。
   https://github.com/anomalyco/opencode/issues/49365

9. **[#49347] Windows：`permission.bash` 拒绝规则被跳过，内建 bash 仍执行被禁命令**（3 评论）
   在 Windows 11 + 1.18.31 上，即使 agent 配置包含 catch-all 的 Bash 拒绝规则，subagent 仍可通过内建 bash 工具执行命令；同一配置在其他平台行为正常。这是**平台相关的权限绕过**，安全影响较高。
   https://github.com/anomalyco/opencode/issues/49347

10. **[#49723] [2.0] explore 子代理在 CLI 内被拒，general 代理用相同模型却正常**（3 评论）
    由 OpenCode CLI agent 自动生成的 bug 报告，指出内建 `explore` subagent 与 `general` 在相同模型下表现不一致，指向免费层校验逻辑与 subagent 上下文的耦合问题。
    https://github.com/anomalyco/opencode/issues/49723

其他值得留意：**[#49936]** Go 账户额度正常但 deepseek-v4.1-flash 返回 402（OrcaRouter 上游）；**[#49927]** 本周首次会话即报 Free Usage Exceeded；**[#49742]** CLI v2.0.8 缺失消息时间戳选项；**[#36279]** 请求通过 Homebrew 发布 v2（👍11）。

## 4. 重要 PR 进展

1. **[#49971] feat(cli)：通过可扫描的 app.opencode.ai 链接配对**（OPEN）
   为 CLI 与移动端配对引入可扫描链接，基于 #49291 堆叠，关联 iOS 参考分支。
   https://github.com/anomalyco/opencode/pull/49971

2. **[#49954] fix(core)：对扫描器无法解析的命令执行权限评估**（OPEN / needs:issue）
   修复当 shell 扫描器未解析出任何命令时跳过权限检查、命令被无检查执行的问题，关闭 #49948。安全相关。
   https://github.com/anomalyco/opencode/pull/49954

3. **[#49963] fix(event)：为 worktree 会话移除 SSE 流的目录过滤**（OPEN）
   修复 `/event` 处理按 `event.location?.directory` 过滤导致 worktree 会话事件丢失的问题，关闭 #49861。
   https://github.com/anomalyco/opencode/pull/49963

4. **[#49957] fix(update)：防止 rollout fallback 导致降级**（OPEN）
   当客户端已安装较新版本时，避免因所在 rollout cohort 回退而收到更旧的 inactive 构建；保留有意的主动回滚行为。
   https://github.com/anomalyco/opencode/pull/49957

5. **[#49955] fix(app)：将项目自动选择锚定到服务器的启动目录**（OPEN）
   修复从项目目录启动 `opencode web` 时 UI 自动跳转到其它陈旧项目的问题，关闭 #49947。
   https://github.com/anomalyco/opencode/pull/49955

6. **[#49945] fix(session)：暴露 drain 失败并检查 @mention 技能权限**（CLOSED / needs:issue）
   两项会话层修复：`terminal()` 使用 `Cause.hasInterrupts` 分类 drain 失败；并对 @mention 技能补上权限检查。关闭 #49740、#49891。
   https://github.com/anomalyco/opencode/pull/49945

7. **[#49969] fix(desktop)：Windows 应用启动 EACCES 时回退到 shell**（OPEN）
   在某些 Windows 环境下直接 `execFile` 解析出的 exe 返回 EACCES，改为通过 shell 启动，关闭 #49967。
   https://github.com/anomalyco/opencode/pull/49969

8. **[#49964] fix(app)：恢复移动端标签交互**（CLOSED）
   启用触摸驱动的会话标签重排（更大激活阈值）、将垂直标签重排限制在移动抽屉内、使标签右键菜单非模态化。
   https://github.com/anomalyco/opencode/pull/49964

9. **[#49962] feat(tui)：会话级插件 toast**（CLOSED）
   允许插件为 toast 打上 `sessionID` 标签，避免某会话的通知在用户查看其它标签时仍全局弹出。
   https://github.com/anomalyco/opencode/pull/49962

10. **[#49959] fix(serve)：绑定到所有可解析的 IP 地址**（OPEN）
    默认主机名可能解析到多个 IP，修复只绑定其一的限制，关闭 #49958。
    https://github.com/anomalyco/opencode/pull/49959

其他：**[#48638]** 加固 session diff、快照与写入路径以减少并行 agent 下的 worker 线程停顿；**[#49956]** subagent 置于右侧面板；**[#49968]** 文档澄清 `tools/` 为规范目录；**[#49779]/[#49960]** 修复快捷键搜索框焦点丢失。

## 5. 功能需求趋势

- **沙箱与权限控制**：#2242（沙箱隔离）、#49347（Windows 权限规则被绕过）、#49954（未解析命令跳过权限）共同指向社区对**命令执行边界与权限一致性**的强烈关注。
- **v2 布局与 workspaces 回归**：#37546、#39614 均指出 V2 UI 不支持 workspaces，而旧 SDK 提供 `experimental.workspace.*`；新布局无法回退且缺少 worktrees 支持，是升级阻力的核心。
- **CLI/TUI 功能对等**：#49742（v2 缺失消息时间戳）、#49133（Tab 切换 agent 行为变更）显示 v1 → v2 迁移中存在功能缺失与快捷键行为变化。
- **桌面端稳定性与跨平台**：#43355（Electron 渲染进程 ResizeObserver 循环导致 UI 冻结）、#48640（WSL 检测与安装因 `wsl.exe` 重展开 `$VAR` 而失败）、#49969（Windows EACCES）反映桌面端在 Windows/WSL 场景的可靠性短板。
- **分发渠道**：#36279 请求通过 Homebrew 发布 v2（👍11），说明用户希望摆脱 npm `next` 标签类的分发方式。
- **模型兼容性**：#25495（Kimi K2.6 拒绝嵌套深度 > 10 的工具 schema）反映第三方模型对工具 schema 的约束会直接破坏工具调用。

## 6. 开发者关注点

- **计费与额度状态不一致**是当日最高频痛点：#49433、#37790、#49768、#49927、#49936 分别覆盖免费层误判、Go 订阅付款后未生效、Account.Disabled、额度被误耗尽、上游 402 与账户额度不符。多条集中在**付款成功但服务不可用**，对信任度影响大。
- **权限模型存在可绕过路径**：Windows 上 catch-all Bash 拒绝规则被跳过（#49347），扫描器无法解析的命令直接跳过权限检查（#49954）。安全边界在不同平台/解析路径下不一致。
- **上游 provider 稳定性**：Console Go 上游请求失败（#37231）、Muse Spark/Zen 的 `encrypted_content` 错误（#48973）、OrcaRouter 上游 402（#49936）说明故障可能来自多级上游，用户难以自行排查。
- **升级即回归**：#49365（升级后崩溃）、#37546（布局无法回退）、#49742/#49133（功能与快捷键变化）显示用户对 v2 迁移期的兼容性与可回退性高度敏感。
- **高质量 issue 模板的价值**：#49365 作者主动提供完整 DEBUG 日志并指出此前 issue 缺少干净日志，提示维护者可通过强化日志采集要求提升定位效率。

---
*本日报仅基于所提供的 GitHub 数据整理，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-09-19

## 今日速览

过去 24 小时内 Pi 无新版本发布，但社区活动密集：37 条 Issue 更新、13 条 PR 更新，多数为 09-18/09-19 当日提交。热点集中在 TUI 渲染性能（长会话高 CPU、全屏重绘）、模型目录与 provider 兼容性（GLM Coding Plan、OpenCode Zen、openrouter baseUrl）两类问题；同日新增的多个 Issue 已被快速关闭，反映维护者响应速度较快。

## 版本发布

过去 24 小时内无新 Release。

## 社区热点 Issues

1. **#7730 [OPEN][bug] macOS 长会话高 CPU 占用** — 100%+ CPU、600–800MB 内存，疑似与上下文大小相关，16 条评论、10 个 👍，是当前讨论度最高的问题。
   https://github.com/earendil-works/pi/issues/7730
2. **#8928 [OPEN][inprogress] 并行启动时报 "No API key found" 约 48 秒** — 报告者提供确定性复现与计时数据，指向 auth.json 中其他 provider 的过期 OAuth 凭据；与 #1871、#4919、#6880 相关，对多进程生产环境影响大。
   https://github.com/earendil-works/pi/issues/8928
3. **#9652 [OPEN][bug] Anthropic Claude Fable 拒绝压缩请求** — `/compact` 因 `serializeConversation` 把 thinking block 转写进摘要提示词，被 `reasoning_extraction` 分类器拒绝，属新模型适配阻塞项。
   https://github.com/earendil-works/pi/issues/9652
4. **#9616 [CLOSED] zai-coding-cn 目录仍列出 8 个已下线模型** — GLM Coding Plan 已收敛至 GLM-5.3 / GLM-5.3-Flash，内置目录与 pi.dev 远端 overlay 过期，已关闭。
   https://github.com/earendil-works/pi/issues/9616
5. **#9725 [CLOSED][no-action] 0.85.1 回归：openrouter baseUrl 无法按文档覆盖** — 由 commit 4e69b0c 引起，影响文档中记载的 provider 覆盖用法。
   https://github.com/earendil-works/pi/issues/9725
6. **#9549 [OPEN] 大型 transcript 每帧重渲染，resize 时全量重发（占满单核）** — 由报告者本地 pi agent 起草并附测量数据，Windows Terminal 环境下可复现。
   https://github.com/earendil-works/pi/issues/9549
7. **#9690 [CLOSED] OpenCode Zen 拒绝 Pi 生成的 session ID** — Pi 0.85.1 内置 OpenCode provider 可能返回 HTTP 403，虽已发送 `x-opencode-session` 头，疑似会话 ID 生成方式不兼容。
   https://github.com/earendil-works/pi/issues/9690
8. **#9129 [OPEN][bug] Windows 下 bash 超时无法杀死管道进程** — `killProcessTree` 的 `taskkill /F /T` 对 Git for Windows (MSYS2) bash 无效，残留孤儿进程。
   https://github.com/earendil-works/pi/issues/9129
9. **#9354 [OPEN][inprogress] 无效 frontmatter 的 prompt 模板被静默丢弃** — 同样问题在 skills 上有警告、模板没有，属可发现性与一致性问题。
   https://github.com/earendil-works/pi/issues/9354
10. **#7885 / #7987 [CLOSED] npm search 未索引新发布的 pi-packages，gallery 缺失** — 影响 pi.dev/packages 画廊的包发现（自 8 月 4 日起无新包名），两位不同报告者的包均受影响。
    https://github.com/earendil-works/pi/issues/7885
    https://github.com/earendil-works/pi/issues/7987

另有若干当日新增并快速关闭的条目值得留意：#9757（`parseChunkUsage` 丢弃 provider 专有 usage 字段）、#9770（`find`/`grep` 无超时机制，被外部杀死时返回空结果且不报错）、#9773（`before_provider_request` 对压缩/分支摘要请求不触发）、#9774（device-code 登录对话框渲染二维码）、#9771（新增 qwen-token-plan 模型测试覆盖），以及 #9765 / #9766 两个 TUI/终端渲染细节问题。

## 重要 PR 进展

1. **#9776 [OPEN] Per thinking sampling parameters** — 新增 `samplingParamsByThinkingLevel`，为 thinking / 非 thinking 模式分别传递采样参数，回应多种开源模型的推荐配置。
   https://github.com/earendil-works/pi/pull/9776
2. **#9772 [CLOSED] 修复主屏 scrollback 清屏/回放与 ConPTY 自动换行漂移** — 针对 `tui-main-screen.ts` 的两处独立修复。
   https://github.com/earendil-works/pi/pull/9772
3. **#9329 [OPEN] 将 Orca 终端识别为 Kitty-image 可用** — 使 `TERM_PROGRAM=Orca` 下图片组件内联渲染而非退化为文本。
   https://github.com/earendil-works/pi/pull/9329
4. **#9434 [CLOSED] 允许扩展追加 session system prompt** — `session_start` handler 可返回 append-only 的 `systemPromptAppend`，带来源元数据与错误隔离。
   https://github.com/earendil-works/pi/pull/9434
5. **#5268 [CLOSED] 默认渲染硬件光标，失焦时提示符光标变空心** — 修复失焦窗口仍显示为激活状态的问题，历时近四个月的 PR 终于合入。
   https://github.com/earendil-works/pi/pull/5268
6. **#9096 [OPEN] 新增 Meta provider 与 Muse 订阅 OAuth** — 常规子 provider，但刷新机制特殊（API token 由 identity token 每日重签）。
   https://github.com/earendil-works/pi/pull/9096
7. **#8158 [OPEN] 升级 Mermaid 终端渲染** — 关闭 #8157、#7832。
   https://github.com/earendil-works/pi/pull/8158
8. **#9763 [OPEN] 新增 pi.dev 兼容性检查** — 将已批准的提交派发到内部 pi.dev 兼容性工作流，并上报稳定的 commit status，同时避免 PR 代码进入特权 `pull_request_target` 环境。
   https://github.com/earendil-works/pi/pull/9763
9. **#9762 [CLOSED] 防御扩展工具返回不合规结果导致的 TUI 崩溃** — 修复返回 `{ output: ... }` 而非 `{ content: [...] }` 时抛出的未捕获 TypeError。
   https://github.com/earendil-works/pi/pull/9762
10. **#9754 [CLOSED] 同仓库 worktree 视为同一项目并解析 session-dir 符号链接** — 使同一仓库不同 checkout 的 worktree 会话可静默本地恢复，而非跨项目恢复。
    https://github.com/earendil-works/pi/pull/9754

其他值得关注：#9483（工具 cwd 解析改为通过 `customCwd` opt-in，保留向后兼容）、#9488（为 Codex 补上规范的 session/thread/turn/window 归因元数据，便于跨工具续接与重试归因）、#9749（SDK 调用方可自定义交互式 resume 命令）。

## 功能需求趋势

- **新模型与 provider 目录同步**：GLM Coding Plan 收敛（#9616）、OpenCode Go 缺 `deepseek-v4.1-flash`（#9737）、Qwen Token Plan 新模型测试（#9771）、Meta Muse provider（#9096）、per-thinking-level 采样参数（#9776）。
- **性能与渲染**：长会话高 CPU（#7730）、大 transcript 每帧重绘（#9549）、主屏 scrollback 与 ConPTY 问题（#9772）、Mermaid 渲染升级（#8158）。
- **扩展生态与可发现性**：npm search / gallery 索引缺失（#7885、#7987）、扩展追加 system prompt（#9434）、SDK 定制 resume 命令（#9749）。
- **TUI 交互细节**：硬件光标失焦表现（#5268）、device-code 登录二维码（#9774）、拷贝时保留硬换行与软换行语义（#8019）、隐藏 thinking block 的空行渲染（#9765）。
- **平台兼容性**：Windows 进程树杀死（#9129）、macOS Terminal.app 泄露环境变量到窗口标题（#9766）、Orca 终端图片能力（#9329）。

## 开发者关注点

- **多进程 / 生产环境稳定性**：#8928 的 48 秒鉴权失败被报告者花约 3 小时在线上排查，过期 OAuth 凭据与并行启动的耦合是明确痛点。
- **静默失败缺乏反馈**：prompt 模板 frontmatter 无效被静默丢弃（#9354）、`find`/`grep` 被杀死时返回无错误空结果（#9770）、`parseChunkUsage` 丢弃未知 usage 字段（#9757）——共同指向"失败应可见"的诉求。
- **hook 覆盖不完整**：`before_provider_request` 对压缩/摘要请求不触发（#9773），扩展作者难以统一拦截所有 provider 请求。
- **目录漂移滞后**：多个 provider 的模型目录落后于上游（#9616、#9737），需要更快的同步或运行时探测机制。
- **平台差异**：Windows（进程树、ConPTY）与 macOS（Apple Terminal 标题泄露）双端的终端行为差异持续产生问题。
- **文档与行为不一致**：#9725 中按文档覆盖 `baseUrl` 失效，说明文档承诺与实现存在脱节。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-19）

## 1. 今日速览

今天 Qwen Code 发布了 **v0.24.1** 正式版、Desktop v0.24.1 和 TypeScript SDK v0.1.13（绑定 CLI 0.24.1），并引入了**破坏性变更**：Goal 功能不再发出 `active_goal` 流事件。社区侧，v0.24.0 升级带来的 `/cd` 命令回归 bug（P1）与 Web Terminal PTY 不可用问题（P1）是本日讨论热度最高的两个阻塞性故障；同时围绕 **Goal 运行时瘦身**、**会话管理与 daemon 健壮性**、**LSP 错误处理** 的成组问题与 PR 持续推进。

## 2. 版本发布

- **v0.24.1**（正式版）：同期发布 Desktop v0.24.1；关键变更见下方 Breaking Changes，另有 `feat(workflows)`、`feat(channels): add shared output modes` 等条目。注意 release note 主体内容在数据中不完整。
  https://github.com/QwenLM/qwen-code/releases
- **desktop-v0.24.1**：包含 `fix(cli): scope the ACP permission queue to the session`（#11802）与 `feat(channels): add shared output modes`。
  https://github.com/QwenLM/qwen-code/pull/11802
- **sdk-typescript-v0.1.13**：捆绑 CLI 版本 0.24.1（源码同分支构建）。
  https://github.com/QwenLM/qwen-code
- **v0.24.1-preview.0 / v0.24.0-nightly.20260918**：含 `docs(serve): record merged ACP boundary acceptance`（#12024）、`fix(ci): wait for the published export renderer before pack`。
  https://github.com/QwenLM/qwen-code/pull/12024

**Breaking Change**
- `refactor(goal)!: stop emitting the active_goal stream event`（#12181，@qqqys）：依赖该流事件的集成方需调整。
  https://github.com/QwenLM/qwen-code/pull/12181

## 3. 社区热点 Issues（按关注度挑选 10 条）

1. **#11872 [P1] Web Terminal 报 "PTY not available"**（10 条评论，macOS）
   `@lydell/node-pty` 已声明但未打包，且 macOS 代码签名阻止本地安装的 prebuild。这是 `qwen serve` / Desktop Web Shell 终端功能在 macOS 上的可用性硬阻塞，讨论最热。
   https://github.com/QwenLM/qwen-code/issues/11872

2. **#12224 [P1] v0.24.0 后 `/cd` 无法切换目录**
   即使无操作进行中，也报"响应或工具调用进行中"，属于升级引入的交互回归，直接影响日常工作流。
   https://github.com/QwenLM/qwen-code/issues/12224

3. **#12053 [P2] Goal 运行时瘦身：基于当前轮次证据判断完成**
   依据两个真实 `/goal-draft` 会话，提议砍掉证据目录与检查点，是当前 Goal 架构演进（"瘦身阶梯"）的源头讨论，关联多个 PR/Issue。
   https://github.com/QwenLM/qwen-code/issues/12053

4. **#12206 [P1, 已关闭] LSP 静默丢弃非 ASCII 响应**
   `Content-Length` 按字节与 UTF-16 字符串长度比较，导致 CJK 等响应被丢弃、返回空结果。对中文等非英语用户影响显著，已关闭说明修复推进较快。
   https://github.com/QwenLM/qwen-code/issues/12206

5. **#12220 [P2] LSP 服务器失败被伪装成"no results"**
   每请求错误被吞进空数组，只写 debug 日志，故障不可见——与 #12206 同属 LSP 可靠性主题。
   https://github.com/QwenLM/qwen-code/issues/12220

6. **#11847 [P3] 会话 recap 永远用英文生成**
   TUI 的 `recap:` 行与 daemon 的 `POST /session/:id/recap` 无法匹配对话语言，与 #12206 一起构成非英语用户的体验痛点。
   https://github.com/QwenLM/qwen-code/issues/11847

7. **#12212 [P2] 会话写入锁：多种失败共享 `session_writer_unavailable`**
   非优雅 kill daemon 后残留 `.claim` 导致该会话永久 503，且错误无法区分具体原因，daemon 可用性问题。
   https://github.com/QwenLM/qwen-code/issues/12212

8. **#12165 [P2] MCP OAuth 丢弃 `registrationUrl`，Atlassian 远程 MCP 无法连接**
   点击 Auth 即刻失败，属于 MCP 生态互操作性的实际阻塞。
   https://github.com/QwenLM/qwen-code/issues/12165

9. **#12217 [P2] `export const meta` 前的注释导致工作流脚本无法启动**
   正则锚点未容忍前置注释，且提示信息误导用户；已有对应修复 PR #12245。
   https://github.com/QwenLM/qwen-code/issues/12217

10. **#12249 [P3] 跨多工作区一次性列出会话目录**
    客户端展示多工作区任务历史时需逐个请求，请求引入 daemon 批量 API + SDK 方法，已有配套 PR #12254。
    https://github.com/QwenLM/qwen-code/issues/12249

其他值得留意的：**#12223** 权限规则应支持项目级覆盖用户级（`deny > ask > allow` 跨作用域问题，已关闭）、**#11878** Session Overview 不显示无工作区会话、**#12032** 系统提示的工具策略段落应与实际工具集对齐（已关闭）。

## 4. 重要 PR 进展（挑选 10 条）

1. **#12245 `fix(core)`: 允许工作流 meta 声明前有注释**（holny）
   直接修复 #12217，让 `//` 或 `/* */` 开头的脚本可正常编译。
   https://github.com/QwenLM/qwen-code/pull/12245

2. **#12255 `feat(serve)`: 支持无远程 daemon 的 SSH 工作区**（wenshao）
   可在 Web Shell 中添加 `ssh://user@host:port/path`，通过本地 daemon 完成读写、搜索、shell、Git 与交互式终端操作，扩展了远端开发场景。
   https://github.com/QwenLM/qwen-code/pull/12255

3. **#12254 `feat(daemon)`: 批量工作区会话目录**（samuelhsin）
   新增只读、能力可发现的批量 catalog API 与 TS SDK 支持，对应 #12249。
   https://github.com/QwenLM/qwen-code/pull/12254

4. **#12234 `feat(web-shell)`: 当前对话内搜索**（samuelhsin）
   会话时间线下方新增搜索入口，支持字面、大小写不敏感的用户/助手消息检索。
   https://github.com/QwenLM/qwen-code/pull/12234

5. **#12154 `feat(web-shell)`: git 对话框管理 worktree**（wenshao）
   新增第四个 "Worktrees" 标签页，展示主工作树、当前工作区、锁与缺失目录等徽标。
   https://github.com/QwenLM/qwen-code/pull/12154

6. **#12256 `fix(acp)`: 为 MCP 发现配置禁用 LSP**（dvd233）
   `qwen serve` 启动带 `--experimental-lsp` 的 ACP 子进程时，发现阶段不再启用 LSP，减少干扰。
   https://github.com/QwenLM/qwen-code/pull/12256

7. **#12162 `feat(acp)`: 程序驱动的会话可接收跨会话消息**（qqqys）
   由 `qwen --acp` 托管的会话（daemon 派生或编辑器直驱）不再拒绝其他会话的消息。
   https://github.com/QwenLM/qwen-code/pull/12162

8. **#12248 `fix(web-shell)`: Plan chip 消失时正确移交键盘焦点**（wenshao）
   回应 #12218 的三条评审建议，修复焦点随控件消失而丢失的可访问性问题。
   https://github.com/QwenLM/qwen-code/pull/12248

9. **#12175 `fix(web-shell)`: 窄面板下约束内联消息编辑器**（Lilian0122）
   让内联编辑器和 Cancel/Send 操作在聊天面板变窄时保持在气泡内。
   https://github.com/QwenLM/qwen-code/pull/12175

10. **#9305 `fix(ui)`: VP 内容底部对齐**（qwen-code-dev-bot）
    修复会话内容不足一屏时与输入框之间的空白间隙（#9300），属长期挂起的 autofix 项。
    https://github.com/QwenLM/qwen-code/pull/9305

此外多条 CI 稳定性 PR 持续更新（如 **#11134** macOS E2E 分片单次重试、**#11297** E2E checkout 重试、**#11001** 等待交互式 PTY 结束、**#10455** 输出语言文件不可写时不崩溃），说明基础设施 flake 治理仍是常态化投入。

## 5. 功能需求趋势

- **Web Shell / Desktop 能力扩张**：会话内搜索（#12234）、worktree 管理（#12154）、SSH 工作区（#12255）、批量会话目录（#12249/#12254）——Web/Desktop 正从"浏览器外壳"向完整开发环境演进。
- **Goal 架构重构**：以 #12053 为源头，围绕完成判定证据、旧卡片投影退役（#12179）、`active_goal` 事件移除（#12181）成体系推进，是当前最密集的架构级话题。
- **会话管理与 daemon 健壮性**：写入锁错误分类（#12212）、启动时锁目录盘点（#12213）、非优雅关闭的恢复文档（#12214）、会话 provenance 穿透投影（#12042）——围绕持久化与恢复的可靠性需求集中出现。
- **LSP / MCP 集成质量**：非 ASCII 响应（#12206）、错误被吞（#12220）、MCP OAuth 注册 URL（#12165）、ACP 下 LSP 与 MCP 发现的相互干扰（#12256）。
- **权限与安全模型细化**：项目级规则覆盖用户级（#12223）、非交互场景的权限设置。
- **国际化/语言一致性**：recap 强制英文（#11847）、LSP CJK 丢失（#12206），非英语用户体验开始被系统性提出。
- **多工作区/多会话协作**：跨会话消息投递（#12162）、跨工作区会话聚合。

## 6. 开发者关注点

- **升级回归是最大痛点**：v0.24.0 带来的 `/cd` 失效（#12224）属高频基础命令，v0.24.1 又含破坏性事件变更（#12181），建议团队关注升级路径的兼容性验证。
- **静默失败比报错更难排查**：LSP 空结果（#12206、#12220）、会话写入锁错误不分类（#12212）、工作流 meta 提示误导（#12217）反复出现同一模式——错误应显式暴露而非吞掉。
- **非英语（尤其中文）场景支持不足**：CJK 在 LSP 中直接丢失、recap 语言无法匹配，两者都直接影响 CJK 用户的日常使用。
- **打包与签名问题**：`@lydell/node-pty` 已声明未打包 + macOS 代码签名策略（#11872）导致 Web Terminal 完全不可用，属发布工程问题。
- **CI 基础设施 flake 长期占用精力**：多条 autofix PR（#9305、#10455、#11001、#11134、#11297、#11658）跨月挂起，加上 #12253 提出让测试分片输出机器可读的未处理错误记录以替代解析日志文本，反映 flake 分类与治理成本仍然很高。
- **权限模型语义争议**：`deny > ask > allow` 跨作用域无差别应用（#12223）引发对"项目级应覆盖用户级"的诉求，属配置语义层面的设计讨论。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-19）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内实际以 `Hmbown/Codewhale` 标识）

## 今日速览

今日无新版本发布。社区焦点集中在 **ACP（Agent Client Protocol）集成缺陷**：`serve --acp` 忽略配置与审批策略，导致无人值守会话卡在权限提示上，两条相关 Issue（#6310、#6337）均获更新。同时，一批由维护者 Hmbown 与贡献者 7jrxt42BxFZo4iAnN4CX 提交的配置/子代理/metrics 可靠性缺陷集中关闭，另有多条 TUI 平台兼容性测试失败问题被处理。

## 版本发布

过去24小时内无新 Release。

## 社区热点 Issues

1. **[#6310 OPEN] `serve --acp` 忽略 config.toml 的 sandbox_mode/ask，ACP 会话卡在 Work 姿态**
   环境：codewhale 0.9.13，macOS，通过 `codewhale serve --acp` 被 Paseo 拉起。属当前唯一仍开启的高优先级 ACP 问题，评论 4 条。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6310

2. **[#6337 CLOSED] v0.9.14：ACP adapter 忽略 --yolo/审批策略，无人值守会话停滞**
   维护者 Hmbown 亲自提出：编辑器经 ACP 驱动时，会话暴露了工具却从不执行——每次变更调用都停在 headless 客户端无法回应的权限请求后。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6337

3. **[#6364 CLOSED] 补全 marketplace skill 覆盖，让 WhaleWiki 可用于上手与变更评审**
   创始人要求的 marketplace 与 WhaleWiki 审计（2026-09-19）。确认 marketplace 缺少 14 个 Core skill 目录，Core generation 13 淘汰了 contributor-onboarding 相关内容。反映文档与生态建设正在被系统性梳理。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6364

4. **[#6315 CLOSED] metrics 的 Sub-agents 区块无数据源，子代理用量从未持久化**
   在 33 天内 593 次 `agent` 工具调用的机器上仍打印 `Sub-agents: (no data)`，`AgentStats` 存在两个独立数据空洞。影响用量可观测性。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6315

5. **[#6312 CLOSED] `[workflow] max_parallel_writes_without_worktree` 有配置无实现**
   该字段被解析、设默认值 `0`、由 `/config` 展示，但没有任何代码读取它——并行写隔离控制形同虚设。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6312

6. **[#6314 CLOSED] 工具 schema 未声明 cwd，失败信息却要求模型“specify cwd”**
   `worktree=true` 且工作区非单一 checkout 时，仓库通过扫描解析并拒绝 spawn，造成误导性报错。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6314

7. **[#6313 CLOSED] 已结束的子代理仍占用会话名，重试报 “already in use”**
   `agent(action="start", name=…)` 会拒绝任何被现行会话记录占用的名字（从前一会话恢复的记录除外）。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6313

8. **[#6362 OPEN] `configured_model_api_tests` 撑爆测试线程栈，中止 tui lib 测试套件**
   多处栈溢出各自以 SIGABRT 中止整个 lib 测试二进制，导致 `cargo test -p codewhale-tui --lib` 无法完成。为今日新开的开发者体验类问题。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6362

9. **[#6309 CLOSED] 用户请求恢复 YOLO 模式**
   用户 weifeng89 表示用 codewhale 做 IT 支持、deepseek V4 flash 在 terminalbench 得分高，但当前 operate 模式下逐次点击审批“非常烦人”。与 #6337 共同指向审批策略灵活性诉求。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6309

10. **[#6307 CLOSED] 鼠标选中自动复制测试在 main 上失败 / [#6346 CLOSED] Windows verbatim 路径前缀导致测试失败**
    两条 TUI 测试可靠性问题，分别涉及复制路径落地（#6228）后回归与 Windows `\\?\` 路径渲染差异，反映跨平台测试基线尚不稳定。
    https://github.com/Hmbown/DeepSeek-TUI/issues/6307
    https://github.com/Hmbown/DeepSeek-TUI/issues/6346

> 另有一条与项目无关的营销类垃圾 Issue（#6334 医疗计费），已被关闭。

## 重要 PR 进展

1. **[#6363 OPEN] fix(tui,exec)：视觉行光标、历史分离、显式 ink、headless 输入抑制**
   六个单一用途提交，每个附回归测试，将一次评审中发现的五个小缺陷打包但保留独立提交以便单独落地或摘取。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6363

2. **[#6365 OPEN] fix(tui)：按绘制列复制的 transcript、composer tabs、setup ink 测试**
   基于 #6363 叠放，含 3 项有效变更（两个中间提交先探索了 tab-stop 模型，随后被改为按绘制列）。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6365

3. **[#6361 OPEN] feat(runtime-api)：终端字节流、流恢复 + 幂等提交、pet 代理计数固定**
   为 `codewhale-app#61` 解锁两项 Core 能力：Engine 的“已认证字节输入输出、resize、退出与有界重放”终端字节流（#34），以及流恢复与幂等提交（#76）。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6361

4. **[#6353 CLOSED] feat(providers)：新增 CSDN 星图（StarMap）一级 provider**
   CSDN 在 `ai.csdn.net/api/model/v1` 提供 OpenAI 兼容端点，服务 Coding Plan 专用模型 `glm_for_coding`（出厂默认），并支持其他模型透传。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6353

5. **[#6354 CLOSED] fix(ci)：修复 main 的 Lint 并消除 mcp stdio marker 读取竞态**
   两个缺陷在 PR 汇总中不可见：`check-blocking-calls-budget` 对 PR 是 advisory（`continue-on-error: pull_request`）但对 push 致命；mcp 测试仅在特定条件下暴露竞态。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6354

6. **[#6352 CLOSED] feat(web)：从生成的 Shoreline tokens 解析 gpui 镜像**
   `globals.css` 原本手工维护 `--gpui-*` 主题镜像，已与真实 Shoreline 常量漂移（如 `--gpui-stage-raised` 引用了 mockup 值而非 `SHORELINE_ELEVATED_RGB`）。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6352

7. **[#6344 CLOSED] chore(deps)：docker/setup-buildx-action 4.3.0 → 4.4.0**
   https://github.com/Hmbown/DeepSeek-TUI/pull/6344

8. **[#6341 CLOSED] chore(deps)：docker/setup-qemu-action 4.3.0 → 4.4.0**
   https://github.com/Hmbown/DeepSeek-TUI/pull/6341

9. **[#6338 CLOSED] chore(deps)：docker/build-push-action 7.3.0 → 7.4.0**
   https://github.com/Hmbown/DeepSeek-TUI/pull/6338

10. **[#6359 OPEN] chore(deps)：windows group 升级 windows-core 0.62.2 → 0.100.0**
    跨大版本升级，值得关注对 Windows 平台构建与路径处理的影响（与 #6346 的 Windows 路径问题同域）。
    https://github.com/Hmbown/DeepSeek-TUI/pull/6359

> 其余 Dependabot 更新：nixpkgs（#6360）、fenix（#6356）、wrangler（#6358）、autoprefixer（#6357）、@types/node（#6355）。

## 功能需求趋势

- **ACP / IDE 集成成为首要战场**：本周期最集中的主题是 `serve --acp` 的行为一致性——配置生效（#6310）、审批策略透传（#6337）。这直接关系到编辑器侧无人值守使用。
- **审批与自主性控制（YOLO 模式）**：用户希望在高信任场景下减少逐次点击审批（#6309），与 ACP 审批策略问题同源。
- **可观测性与用量统计**：`metrics` 的 Sub-agents 与 provider usage receipts 数据缺失（#6315）暴露了多代理场景下的计量盲区。
- **多代理 / 子代理生命周期管理**：#6313（会话名占用）、#6314（worktree 解析与 cwd 报错）、#6312（并行写隔离配置失效）共同指向 subagent 系统的可靠性债。
- **新模型与 Provider 接入**：CSDN 星图携 `glm_for_coding` 进入一级 provider 序列（#6353），延续多模型后端扩展方向。
- **跨平台与测试基线**：Windows 路径前缀（#6346）、测试线程栈溢出（#6362）说明 CI 与跨平台稳定性仍是持续投入点。

## 开发者关注点

- **痛点：配置项“有文档、无实现”**。#6312 指出 `max_parallel_writes_without_worktree` 被解析、展示却无人读取，这类“幽灵配置”会严重误导使用者对隔离语义的预期。
- **痛点：误导性错误信息**。#6314 中工具 schema 不声明 `cwd`，失败信息却让模型去“指定 cwd”，属典型的可用性反模式，会浪费模型与人的迭代轮次。
- **高频需求：减少审批摩擦**。#6309 与 #6337 从用户与维护者两个方向同时反映——审批策略需要能被 headless / 无人值守模式正确继承。
- **可靠性诉求：测试套件不可信**。#6362 的栈溢出会中止整个 lib 测试二进制，#6307、#6346 的确定性失败，都意味着 `main` 上的测试信号噪声偏高。
- **文档与运行时不同步**：#6316 指出 SUBAGENTS.md 仍在六处记录已退役的 `token_budget` 字段（该字段在 `a7a8bdb33` / #6189、#6277 中移除），文档滞后于 `SpawnRequest`、`SubAgentTask`、`SubAgentSpawnOptions` 的实际形态。
  https://github.com/Hmbown/DeepSeek-TUI/issues/6316

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*