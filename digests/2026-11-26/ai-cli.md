# AI CLI 工具社区动态日报 2026-11-26

> 生成时间: 2026-11-26 19:39 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-11-26）

## 1. 生态全景

当前 AI CLI 工具已进入"能力竞赛让位于工程可靠性"的阶段：今日八个活跃项目中仅四个有版本动作（Copilot CLI 三个补丁、OpenCode v2.4.2、Qwen Code v0.28.7、Codex 一个 alpha 标签），其余均无发布，社区讨论重心普遍落在**回归、会话状态、缓存与成本**而非新功能。**Agent/子代理执行模型**成为跨工具的共同战场——Claude Code、Codex、Gemini CLI、OpenCode 四家同日均出现子代理或 agent 自主性问题。**Prompt cache 与用量可解释性**被多个社区当作一等公民问题对待，直接关联成本感知。整体看，生态正从"能不能跑"转向"能不能被信任、被管理、被审计"。

## 2. 各工具活跃度对比

> 注：以下为各日报在 2026-11-26 过去 24 小时窗口内**明确列出**的条目数；部分工具日报声明窗口内条目不足 10 条或未提供精确统计，按原文口径标注。

| 工具 | Release 情况 | 热点 Issues（列出） | 重要 PR（列出） | 备注 |
|---|---|---|---|---|
| **Claude Code** | 无 | 10 条（另列 4 条值得留意） | 3 条（原文说明"仅 3 条，未凑满 10"） | PR 侧更新量最少 |
| **OpenAI Codex** | `rust-v0.174.0-alpha.7`（无变更说明） | 10 条（另列 2 条） | 10 条（均 CLOSED，`copyberry[bot]` 提交） | PR 评论数缺失 |
| **Gemini CLI** | 无 | 10 条（另列 3 条） | 10 条（另列 3 条） | P1 级 Bug 多条仍 open |
| **GitHub Copilot CLI** | v1.0.117-0/-1/-2 三个补丁 | 10 条（含 OPEN/CLOSED/triage 混合） | **0 条**（原文明确"过去 24 小时无 PR 更新"） | 发布节奏最快 |
| **Kimi Code CLI** | — | — | — | **过去 24 小时无活动** |
| **OpenCode** | v2.4.2 | 10 条（另列 5 条） | 10 条（另列 3 条） | 核心回归 + MCP 修复并行 |
| **Pi** | 无 | 10 条 | 10 条（另列 2 条） | 多条标 CLOSED/no-action |
| **Qwen Code** | v0.28.7 + SDK TS v0.1.36 | 10 条（CI 工单为主） | 10 条（另列 CI/安全 2 条） | 50 条更新 Issue 中多为 CI 追踪 |
| **DeepSeek TUI** | 无 | **3 条**（全部） | **2 条**（全部） | 样本量最小 |

**数据要点**：
- 单条 Issue 互动峰值：Codex #58530（56 评论 / 83 👍）、OpenCode #64073（37 评论）为当日最高热度。
- Copilot CLI 是唯一"三连发版但零 PR"的工具，说明走内部/非公开 PR 流程。
- DeepSeek TUI 与 Kimi Code CLI 处于明显的低活跃区间。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **Promp

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-26）

## 1. 热门 Skills 排行

注：所提供的 PR 数据中评论数均为 `undefined`、👍 均为 0，因此无法据此判断 PR 层面的真实关注度。以下按更新活跃度与修复的 issue 覆盖面，并结合对应 Issue 的讨论热度选取；所有 PR 当前状态均为 **OPEN**。

| Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|
| **webapp-testing**（#1980 / #1976） | Web 应用自动化测试脚本集 | 安全性与正确性：#1980 指出 `with_server.py` 使用 `shell=True` 存在命令注入风险；#1976 修复 `element_discovery.py` 中 textarea/select 被误报为 text | OPEN |
| **docx**（#1792 / #1734） | Word 文档处理（修订接受、批注） | #1792 修正 LibreOffice 超时被误报为成功；#1734 检测孤立批注 | OPEN |
| **skill-creator**（#1298 / #1681 / #1997） | 创建、评估、打包 Skill | 触发评估的可靠性是焦点：Windows 兼容、并行 worker 交叉匹配（关联 Issue #1352）、YAML frontmatter 解析、脚本独立执行 | OPEN |
| **mcp-builder**（#1742） | 构建 MCP 服务器 | 适配 `mcp>=2.0.0` 的 API 重命名（`streamable_http_client`）与自定义 headers 配置（Fixes #1668） | OPEN |
| **xlsx**（#2019） | Excel 表格处理 | 修复工作表级 defined names 与别名在外部链接风险检测中的漏报（Fixes #2013） | OPEN |
| **claude-api**（#1730 / #1950） | Claude API 使用指南 | 修复失效文档链接；更新 Python `pause_turn` 恢复逻辑（SDK 1.1.0 起支持自动恢复） | OPEN |
| **pptx**（#1975） | PPT 处理与缩略图 | 参数校验前置（`--cols < 1` 提前报错，Fixes #1809） | OPEN |
| **algorithmic-art**（#1977） | 生成式/算法艺术 | 修复 `wrapAround()` 负数处理错误（Fixes #1897） | OPEN |

链接：
- https://github.com/anthropics/skills/pull/1980
- https://github.com/anthropics/skills/pull/1976
- https://github.com/anthropics/skills/pull/1792
- https://github.com/anthropics/skills/pull/1734
- https://github.com/anthropics/skills/pull/1298
- https://github.com/anthropics/skills/pull/1681
- https://github.com/anthropics/skills/pull/1997
- https://github.com/anthropics/skills/pull/1742
- https://github.com/anthropics/skills/pull/2019
- https://github.com/anthropics/skills/pull/1730
- https://github.com/anthropics/skills/pull/1950
- https://github.com/anthropics/skills/pull/1975
- https://github.com/anthropics/skills/pull/1977

## 2. 社区需求趋势

从 Issues 观察，社区诉求集中在以下方向：

- **安全与信任边界（讨论最热）**：Issue #492（46 条评论）指出社区 Skill 以 `anthropic/` 命名空间分发，存在冒充官方 Skill 的信任边界滥用风险。这是当前最集中的议题。
  https://github.com/anthropics/skills/issues/492
- **组织级 Skill 共享与分发**：Issue #228（17 条评论，👍8）要求 Claude.ai 支持组织内直接共享 Skill，替代手动下载并上传 `.skill` 文件的方式。
  https://github.com/anthropics/skills/issues/228
- **Skill 评估/触发机制可靠性**：Issue #556（13 条评论）报告 `run_eval.py` 触发率为 0%；Issue #1352 报告并行 worker 导致错误的低触发率。说明“Skill 能否被正确触发”是普遍痛点。
  https://github.com/anthropics/skills/issues/556
  https://github.com/anthropics/skills/issues/1352
- **上下文/状态管理类新 Skill**：Issue #1329 提议 `compact-memory`，用符号化记法压缩长时间运行 Agent 的状态。
  https://github.com/anthropics/skills/issues/1329
- **输出质量治理**：Issue #1385 提议“推理质量闸门”流水线（预任务校准 → 对抗审查 → 交付验证）。
  https://github.com/anthropics/skills/issues/1385
- **Agent 治理/安全模式**：Issue #412（已关闭）曾提议 `agent-governance` Skill，覆盖策略执行、威胁检测、信任评分与审计追踪。
  https://github.com/anthropics/skills/issues/412
- **文档/艺术类 Skill 的描述与资源问题**：Issue #2064 指出 `theme-factory` 描述未说明“何时使用”；Issue #1487 指出 `claude-api` 单次调用注入约 156k tokens，耗尽上下文窗口。
  https://github.com/anthropics/skills/issues/2064
  https://github.com/anthropics/skills/issues/1487

## 3. 高潜力待合并 Skills

以下 PR 均为 OPEN，且与活跃 Issue 或长期未合并的活跃分支相关联，近期落地可能性较高（仅基于所给材料判断，不代表维护者立场）：

- **PR #1742 mcp-builder**：直接修复 Issue #1668，适配 mcp>=2 API，影响面明确。
  https://github.com/anthropics/skills/pull/1742
- **PR #1977 / #1976 / #1975（作者 gerardrecinto）**：三项均为小范围 bug 修复，各自绑定 Issue #1897 / #1891 / #1809，改动边界清晰。
  https://github.com/anthropics/skills/pull/1977
  https://github.com/anthropics/skills/pull/1976
  https://github.com/anthropics/skills/pull/1975
- **PR #2019 xlsx**：修复 Issue #2013，涉及外部链接风险的漏报。
  https://github.com/anthropics/skills/pull/2019
- **PR #1681 skill-creator**：修复脚本独立执行的 `ModuleNotFoundError`，且更新时间较新（2026-11-19）。
  https://github.com/anthropics/skills/pull/1681
- **PR #1980 webapp-testing**：移除 `shell=True` 的安全修复，属高风险问题。
  https://github.com/anthropics/skills/pull/1980
- **PR #525 pyxel**（作者 kitao）：新增 Pyxel 复古游戏开发 Skill，创建于 2026-03-05，至 2026-11-01 仍在更新，是长期活跃的新 Skill 提案。
  https://github.com/anthropics/skills/pull/525
- **PR #2108 docs**：澄清文档类 Skill 的快照状态与同步关系，引用可核验的导出里程碑（#1447、#330）。
  https://github.com/anthropics/skills/pull/2108

## 4. Skills 生态洞察

**当前社区最集中的诉求是“可信与可控”：既要解决 Skill 的身份信任与共享分发（#492、#228），也要保证 Skill 能被正确触发、正确评估且不失控占用上下文（#556、#1352、#1487）。**

---

# Claude Code 社区动态日报（2026-11-26）

## 1. 今日速览

今日无新版本发布，社区讨论集中在三类问题：**Desktop 应用工作区隔离缺陷**（worktree 的 skills/MCP 配置被主检出覆盖）、**计费与用量异常**（多条新增投诉指向额度消耗与实际输出不符），以及 **Opus 5.5 的 agent 行为偏差**（auto 模式提前停步、违反已加载的长度规则）。PR 侧最受注目的是对 stale bot 误关可复现 Issue 的治理提议，以及两个长期滞留的"开源 Claude Code"提取类 PR。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#44657 — Subagent Write 工具拒绝特定命名的 .md 文件**（35 👍，17 评论，今日评论数最高）
   子代理写入以 `report`/`summary`/`findings`/`analysis` 开头的 `.md` 时被硬编码拦截，且无关闭开关。社区反应强烈，属于对 Agent 工具可用性的直接限制，Linux 平台反馈集中。
   https://github.com/anthropics/claude-code/issues/44657

2. **#97410 — 移动端远程控制不显示提示建议**
   Android/iOS 平台 UI 增强请求，10 条评论说明远程控制场景使用面广，提示建议缺失影响移动端操作效率。
   https://github.com/anthropics/claude-code/issues/97410

3. **#97341 — Windows Cowork 无法保存定时任务设置**（含复现步骤）
   报错"请在本机重新登录"，但同一台机器通过云会话登录正常，属于认证状态不一致问题，阻塞 Cowork 的 routines 功能使用。
   https://github.com/anthropics/claude-code/issues/97341

4. **#112473 — 输出较短但用量异常偏高**（今日新建，8 条评论，Windows + VS Code，标记 regression）
   教育类短输出场景下消耗异常，属回归问题，与后续几条计费类 Issue 形成同日聚集。
   https://github.com/anthropics/claude-code/issues/112473

5. **#106598 — 周限额一天耗尽并产生 155 美元额外用量费用**
   用量计数疑似缺陷，直接涉及费用，是当前成本类反馈中影响最重的一条。
   https://github.com/anthropics/claude-code/issues/106598

6. **#99145 — Desktop：worktree 会话加载主检出的 .claude/skills**
   与官方文档（自 2.1.277 起 worktree 只加载自身 skills）不符，含复现步骤，macOS 平台。
   https://github.com/anthropics/claude-code/issues/99145

7. **#111761 — Desktop 创建的 worktree 中 MCP 服务器运行在主检出，worktree 的 .mcp.json 被忽略**
   与 #99145 同类不同面（MCP 侧），说明 worktree 配置隔离是系统性缺口而非孤例。
   https://github.com/anthropics/claude-code/issues/111761

8. **#112597 — HTTP MCP：启动期 tools/list 被中断后不重试，服务器永久停留在 connecting**（今日新建，含复现）
   连接成功但整个会话无工具可用，属于 MCP 稳定性关键缺陷。
   https://github.com/anthropics/claude-code/issues/112597

9. **#112594 — Desktop：插件来源的 MCP 服务器其 MCP Apps 视图从不渲染**（今日新建，含复现）
   `anthropic/hasUiResource` 仅对非插件服务器设置，直接影响插件生态中 MCP Apps 的可用性。
   https://github.com/anthropics/claude-code/issues/112594

10. **#112591 — auto 模式下 Opus 5.5 每步后停下等待而非继续**（今日新建）
    同一作者另有 #112564 指出 Opus 5.5 声称已准备发布却违反自己加载的长度规则，共同反映新模型在 agent 自主执行上的行为一致性问题。
    https://github.com/anthropics/claude-code/issues/112591

其他值得留意：#90558（`/goal` Stop hook 在 `allowManagedHooksOnly` 下的管理开关）、#109330（将子代理提升为独立主会话）、#112595（Desktop Rewind 误停所有后台子代理）、#112596（沙箱化信息安全教学项目被安全策略误判）。

## 4. 重要 PR 进展（3 条，均列出）

1. **#112436 — 不对可复现 / 高影响 Issue 标记 stale**（今日更新）
   为 `has repro`、`reproduced`、`data-loss`、`high-priority` 标签的 Issue 增加豁免。与 #109330 中"被 stale bot 关闭"的抱怨形成呼应，是治理层面最有实际价值的一条。
   https://github.com/anthropics/claude-code/pull/112436

2. **#41518 — Fully Open Source Claude Code**（3 月创建，今日仍有更新）
   从 npm 包内 57MB 的 `cli.js.map` 提取 1906 个 TypeScript 源文件，并补上 Bun 打包配置与模块 shim。属于长期滞留的社区提案，非官方路线图内容。
   https://github.com/anthropics/claude-code/pull/41518

3. **#41447 — feat: open source claude code**
   同类开源提案，一次关联关闭多个历史 Issue（#59、#456、#2846、#22002、#41434），与 #41518 诉求重合。
   https://github.com/anthropics/claude-code/pull/41447

> 说明：过去 24 小时内更新的 PR 仅 3 条，故未凑满 10 条。

## 5. 功能需求趋势

- **Agent / 子代理可控性**：子代理文件写入限制需可配置（#44657）、子代理提升为主会话（#109330）、Rewind 不应终止后台子代理（#112595）。
- **工作区隔离正确性**：worktree 的 skills 与 MCP 配置必须来自 worktree 自身（#99145、#111761），这是文档已承诺但实现未达成的能力。
- **移动端与远程控制**：移动端提示建议展示（#97410）、`/remote-control` 命令缺失与 `--remote-control` 失效（#106787）。
- **Hooks 与权限治理**：在托管钩子限制下允许内置 Stop hook 或提供管理端开关（#90558）。
- **MCP 插件生态**：MCP Apps 视图对插件服务器的支持（#112594）、HTTP MCP 连接重试（#112597）。

## 6. 开发者关注点

- **计费透明度是第一痛点**：同日出现 #112473（回归导致消耗异常）与 11 月初延续至今的 #106598（周限额一天耗尽、155 美元额外费用），开发者希望获得可解释的用量明细。
- **Desktop 应用是缺陷高发区**：worktree 隔离（skills、MCP）、子代理状态传递（#112598）、Rewind 副作用（#112595）、MCP Apps 渲染（#112594）、Chrome 扩展断连（#112593）等多条集中在 Desktop/Code tab，且普遍标注 `has repro`。
- **新模型行为一致性受质疑**：Opus 5.5 相关三条（#112591、#112564、#112549）都指向"模型不遵守已给出的计划、规则或用户偏好"，agent 场景下可预测性比能力更受关注。
- **维护流程本身被质疑**：stale bot 误关有复现的 Issue 引发明确反弹，直接催生 PR #112436；同时 #109330 提到此前请求曾被 stale bot 关闭。
- **安全策略误伤正当用途**：沙箱化信息安全教学项目被 safeguard 标记（#112596），开发者希望有可申诉或白名单路径。

*本期数据来源：github.com/anthropics/claude-code，统计窗口为 2026-11-26 过去 24 小时。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-11-26

## 1. 今日速览

今日无正式版本发布，仅推送 `rust-v0.174.0-alpha.7` 预发布标签（无变更说明）。社区讨论集中在两个方向：一是 Plus 订阅的用量与访问权限诉求（#58530 评论 56、👍83，为当日热度最高），二是 11 月 21 日 Windows 更新的回归问题（#62943）。PR 侧以 TUI 渲染/终端兼容性修复和 Guardian V3 审查链路完善为主，多数由 `copyberry[bot]` 提交并已关闭。

## 2. 版本发布

- **rust-v0.174.0-alpha.7**：仓库发布 `0.174.0-alpha.7`，Release 说明仅为版本号本身，未提供更新内容。属 alpha 预发布，暂无可用变更摘要。

## 3. 社区热点 Issues（10 条）

1. **#58530 [enhancement, rate-limits] 12 月用量限制：为 Plus 保留 ChatGPT High 与 Codex/Work 访问** — 作者 HoshizoraArchive，评论 56、👍83，当日互动最高。围绕订阅层级与用量配额的长期争议，反映付费用户对能力可用性的敏感度。链接：openai/codex Issue #58530
2. **#62943 [bug, windows-os, sandbox, app] 11/21 更新回归：新会话丢失权限与执行位置选择器，Max 推理档位消失** — 评论 38、👍18。Windows 端近期更新的核心回归，影响新会话配置与推理档位选择。链接：openai/codex Issue #62943
3. **#18396 [CLOSED] [enhancement, TUI] 增加隐藏工具调用/输出的方式** — 评论 31、👍63，为当日点赞数最高的需求。终端输出被工具调用淹没的体验问题，已关闭，说明有对应处理。链接：openai/codex Issue #18396
4. **#43803 [bug, tool-calls, app] `request_user_input_async` 问题卡在回合最终消息渲染时被自动关闭，问题无法作答** — 评论 20、👍15。交互式提问机制与消息渲染时序冲突，直接影响人机协作流程可靠性。链接：openai/codex Issue #43803
5. **#63042 [bug, windows-os, app] Windows：Work Local/Cloud 选择器在线时消失、离线时重现** — 评论 18、👍12。与 #62943 同属 Windows Work 模式回归群，状态相关 UI 逻辑异常。链接：openai/codex Issue #63042
6. **#39421 [bug, CLI, skills, Linux] Marketplace 升级残留泄漏：41 天 559 GB / 4,972 个孤儿目录** — 评论 15。磁盘泄漏量级严重（此前最高记录为 #29994 的 277 GB），指出 curated clone 有清理 janitor 而 marketplace 没有。链接：openai/codex Issue #39421
7. **#43965 [enhancement, app, imagen] 暴露内置 image_gen 实际使用的图像模型并支持模型选择（Images 2.5）** — 评论 14、👍36。图像生成能力透明度与可配置性诉求，点赞较高。链接：openai/codex Issue #43965
8. **#42291 [enhancement, app, session] 支持平铺/分屏下的多个独立会话** — 评论 11、👍7。多会话并行是一类结构性产品需求，涉及同窗口多 pane 的一等公民支持。链接：openai/codex Issue #42291
9. **#63869 [bug, app] ChatGPT 桌面端加载首页后不久反复提示 "ChatGPT hit a snag"** — 评论 10。自 11 月 25 日起出现、间歇性复现，影响 macOS（Intel）多版本。链接：openai/codex Issue #63869
10. **#25507 [bug, windows-os, app, computer-use] Windows Computer Use 不可用：缺少 nativePipe，未注入 `SKY_CUA_NATIVE_PIPE_DIRECTORY`** — 评论 9。插件已启用但 Node REPL 运行时拿不到 native 桥接，属长期未解的 Windows 能力缺口。链接：openai/codex Issue #25507

> 另可关注：**#63403**（Windows managed sandbox 阻断 DNS 与个人 skill 安装，评论 4）、**#62977**（MCP reload 触发误报 OSC 7501 完成信号，评论 3）。

## 4. 重要 PR 进展（10 条）

以下 PR 均为 2026-11-26 创建、当日更新的 **CLOSED** 状态，作者为 `copyberry[bot]`，评论数未提供。

1. **#64204 插入 TUI 历史时批量写入终端** — 针对行缓冲 stdout 在长历史回放中每换行 flush、退化为大量小写入的问题，改用有界缓冲。与 Issue #39268（TUI 历史插入逐行 flush）呼应。链接：openai/codex PR #64204
2. **#64202 平滑 TUI 推理标题切换** — shimmer 激活时按节奏采样，避免流式推理摘要过早替换状态标题导致难读。链接：openai/codex PR #64202
3. **#64199 修复历史部分加载时的 TUI 提示编辑** — 处理早期回合延迟返回结果时提示计数错乱的问题。与 Issue #56062 同类。链接：openai/codex PR #64199
4. **#64195 在 Apple Terminal 重绘后保留 TUI 行底色** — 解决 erase 序列绘制空格背景色在后续重绘中被清除的问题。链接：openai/codex PR #64195
5. **#64193 跨隐藏推理保持 TUI 工具调用分组** — 跳过仅存在于转写中的推理摘要，避免命令被拆成多个工具组。链接：openai/codex PR #64193
6. **#64192 Wayland 会话支持 PRIMARY 选择** — 此前设置 `WAYLAND_DISPLAY` 即禁用 PRIMARY，导致无法发布选中文本或中键粘贴。链接：openai/codex PR #64192
7. **#64187 从根会话配置 Guardian V3 shadow 审查** — 修复 shadow 审查忽略根会话提供的 Guardian V3 设置、沿用默认路由与检索指令的问题。链接：openai/codex PR #64187
8. **#64157 使用 Guardian V3 评估已记录的工具调用** — `thread/guardianReview` 此前即使配置了 Guardian V3 仍走转写审查器，现统一为同一审查路径。链接：openai/codex PR #64157
9. **#64166 限制 Guardian v3 shadow board 存储的证据量** — shadow 路由会把同一证据存入多个通道，新增按根会话上限，默认 32 MiB。链接：openai/codex PR #64166
10. **#64164 为 workspace-write 配置添加紧凑文件系统上下文** — 通过 opt-in 的 `features.compact...` 消除可写路径下重复生成只读元数据条目。链接：openai/codex PR #64164

其他值得留意：**#64184**（新增 Statsig 更新与评估指标，改善 gate 返回 false 时的可诊断性）、**#64179**（测试并记录 MCP message board 通知投递，覆盖内存 board 经 host `notify` 回调的独立路径）、**#64160**（校验 Guardian 转写中人工批准的来源）、**#64159**（简化工具执行器生命周期，移除高阶生命周期约束）。

## 5. 功能需求趋势

- **TUI/终端体验**：隐藏工具调用输出（#18396，👍63）、推理标题与工具分组的渲染连贯性、Apple Terminal/Wayland 终端兼容——是当日需求与 PR 最集中的方向。
- **订阅与用量策略**：Plus 层级的模型访问与配额（#58530）热度最高，属商业策略层面的诉求。
- **Windows 平台稳定性**：11/21 更新引发的一组回归（#62943、#63042、#63403），涉及会话配置、执行位置选择器、sandbox 网络与 skill 安装。
- **模型选择与透明度**：内置图像模型的实际型号暴露与多模型选择（#43965）。
- **多会话工作流**：分屏/平铺并行会话（#42291）。
- **本地资源治理**：Marketplace 升级残留清理（#39421），与既有 curated clone 清理机制对齐。

## 6. 开发者关注点

- **Windows 端回归集中爆发**：多个 11 月更新后的 issue 指向权限/执行位置选择器消失、Max 推理档位缺失、sandbox 阻断 DNS，且相互引用（#63403 明确类比 #62982），提示同一批 UI 与 sandbox 改动引入的系统性问题。
- **磁盘与资源泄漏**：Marketplace staging 目录 41 天累积 559 GB，且清理 janitor 覆盖不全，属可复现的运维级问题。
- **交互可靠性**：异步提问卡片被回合收尾渲染自动关闭（#43803），使问题无法作答，影响 agent 与用户确认环节。
- **CLI 会话一致性**：`/resume` 相关缺陷反复出现（#34972 会 fork 出新 thread ID、#62961 切账号后 picker 漏列本地会话、#56062 恢复后拒绝编辑提示），指向会话索引与转写状态管理的脆弱性。
- **能力可用性**：Windows Computer Use 长期无法初始化（#25507），以及 Remote Control 在 Mac 上无法启用（#38095），反映平台特性落地不均衡。

---
*本报告仅基于所提供 GitHub 数据整理，未补充外部信息；alpha 版本与 PR 评论数等缺失字段按原文保留。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-11-26

## 1. 今日速览

今日无新版本发布，社区讨论几乎全部集中在 `area/agent` 子代理系统上：多条 P1 级 Bug 仍处于 open 状态，包括子代理达到最大轮次后误报为成功、通用代理无限挂起、Wayland 下浏览器子代理失败。同时有一批修复代理稳定性（工具超时、grep 输出截断、Web 搜索挂起）的 PR 正在推进。

## 2. 版本发布

过去 24 小时无 Release 记录。

## 3. 社区热点 Issues（10 条）

1. **#22323 [P1] 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（14 条评论）
   `codebase_investigator` 在未做任何分析前就达到最大轮次上限，却返回 `status: "success"`。这是代理可观测性与正确性的核心缺陷，讨论热度最高。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] 通用代理挂起**（8 条👍）
   一旦 CLI 交给 generalist agent，即使创建文件夹这样的简单操作也会无限挂起，用户等待达一小时。高点赞说明影响面广，属于阻塞级问题。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [P2] 通过零依赖 OS 沙箱与执行后意图路由利用模型的 bash 亲和性**
   指出 Gemini 3 模型原生擅长链式调用 POSIX 工具，建议重构执行架构以发挥这一能力。属于大型增强提案，方向性意义强。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 [P2] 评估 AST 感知的文件读取、检索与代码映射**
   探索通过 AST 精确读取方法边界，减少工具轮次。与 #22746 形成一条 EPIC，是提升代理效率的重要方向。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 [P2] Gemini 不会主动使用技能和子代理**
   用户反馈除非显式指令，模型几乎不会自发调用自定义 skill 与 subagent。这直接影响代理体系的实用价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#21983 [P1] Wayland 下浏览器子代理失败**
   平台兼容性阻塞问题，绑定 `agent/browser`，对 Linux 桌面用户影响直接。
   https://github.com/google-gemini/gemini-cli/issues/21983

7. **#22267 [P2] Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**
   `AgentRegistry` 虽加载配置，但浏览器代理完全无视全局/项目级覆盖，配置系统一致性存在缺口。
   https://github.com/google-gemini/gemini-cli/issues/22267

8. **#24246 [P2] 工具数量超过 128 时触发 400 错误**
   虽然标题为 128，正文描述为超过 400 个工具时报错。暴露了工具集合规模管理缺乏上限控制的问题。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 [P2] 代理应停止/抑制破坏性行为**
   模型在复杂 git 操作中会使用 `git reset` 或 `--force`，在存在更安全替代方案时仍如此。属于安全与信任层面的关键反馈。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#22186 [P1] get-shit-done 输出钩子导致崩溃**
    在输出接近完成时反复崩溃，说明钩子执行与输出回传路径存在竞态或异常处理缺陷。
    https://github.com/google-gemini/gemini-cli/issues/22186

其余可关注：#23571 模型在随机目录生成临时脚本；#20079 symlink 形式的 agent 文件不被识别；#22598 子代理轨迹应可通过 `/chat share` 查看。

## 4. 重要 PR 进展（10 条）

1. **#30415 [P1] 为 Web 搜索增加时限并在中止时停止重试**
   针对 #29594 的挂起问题，`google_web_search` 此前无限期等待模型请求。直接改善代理卡死体验。
   https://github.com/google-gemini/gemini-cli/pull/30415

2. **#30212 [P3] 新增可按工具配置的调用超时 `tools.callTimeout`**
   默认 0 表示禁用，超时触发工具的 `AbortSignal` 并以可恢复的 `TOOL_CALL` 错误结束。属于代理健壮性的基础设施。
   https://github.com/google-gemini/gemini-cli/pull/30212

3. **#30487 修复 ACP 审批模式更新被拒绝时的未处理 Promise**
   `handleApprovalModeChanged` 使用 `void` 丢弃了 `sendUpdate()` 的返回值，连接关闭时会产生未处理拒绝。
   https://github.com/google-gemini/gemini-cli/pull/30487

4. **#30400 修复 ACP 模式在沙箱内启动时挂起**
   沙箱启用时 `gemini --acp` 不响应初始化请求，导致 ACP 客户端挂起。影响所有 IDE/编辑器集成场景。
   https://github.com/google-gemini/gemini-cli/pull/30400

5. **#30339 在 ACP 模式下暴露 BeforeAgent 钩子拒绝与停止原因**
   修复钩子拒绝或 `continue: false` 时客户端无感知的问题（#30114、#30132）。
   https://github.com/google-gemini/gemini-cli/pull/30339

6. **#30353 统一 ACP 模式的 token 用量追踪与配额元数据**
   在取消轮次时保留 `PromptResponse.usage`，解决两处统计不一致（#24280、#27985）。
   https://github.com/google-gemini/gemini-cli/pull/30353

7. **#30109 [P2] 限制 grep_search 输出体积并提示模型收窄检索**
   原先仅限制匹配条数（默认 100）而非行长度，长日志或压缩代码会向模型倾泻大量文本。
   https://github.com/google-gemini/gemini-cli/pull/30109

8. **#30459 修复扩展 Git 操作因配置路径受限而失败**
   自 0.70.0 起所有 Git 扩展的 `install`/`update` 都报 `allowUnsafeConfigPaths` 错误，属回归修复。
   https://github.com/google-gemini/gemini-cli/pull/30459

9. **#30268 修复 taint/build 文件检查不识别 YOLO 模式**
   让 `--approval-mode=yolo` 下自主运行不再被误拦截，涉及 `PolicyEngine` 与安全策略一致性。
   https://github.com/google-gemini/gemini-cli/pull/30268

10. **#30470 新增 `gemini-2.5-flash-image` 内置模型配置**
    使 Nano Banana 图像生成模型可通过 `--model` 与 `/model` 选择，扩展模型能力面。
    https://github.com/google-gemini/gemini-cli/pull/30470

其他：#30419 修正目录结构截断标记；#30473 修复历史压缩字节预算计算；#30375 修复文档内部链接。

## 5. 功能需求趋势

- **子代理（Subagent）体系成熟化**：本日最集中方向，涵盖本地子代理 Sprint、`codebase_investigator` 改名与能力改进、代理示例库建设，以及子代理轨迹可观测性（#20195、#18282、#18283、#22598）。
- **代理执行架构优化**：利用模型的 bash 亲和性、引入 AST 感知的文件读取/检索/代码映射，目标是减少工具轮次、提升准确性（#19873、#22745、#22746）。
- **配置系统一致性**：代理模块不遵守 `settings.json` 覆盖（#22267）、symlink agent 不被识别（#20079），反映配置加载路径需要统一。
- **安全与破坏性行为约束**：抑制 `git reset`/`--force` 等高风险命令，并让策略引擎与 YOLO 模式正确协同（#22672、PR #30268）。
- **ACP / IDE 集成稳定性**：多条 PR 集中修复 ACP 协议下的挂起、审批反馈缺失与 token 统计问题，说明 ACP 已成为主要集成通道。
- **模型与工具规模管理**：工具数量超限导致 400 错误（#24246）、grep 输出无上限（PR #30109），指向上下文与工具集规模的系统性治理。

## 6. 开发者关注点

- **稳定性优先**：挂起与崩溃类问题占据高优先级席位——通用代理无限挂起、Web 搜索无超时、vite 交互式提示卡死、输出钩子崩溃。开发者最需要的是"不卡死"的确定性行为。
- **代理行为的可信度**：代理中断被报告为成功（#22323）直接损害对执行结果的信任，是当前最突出的正确性痛点。
- **平台兼容性**：Wayland 下浏览器子代理失败，以及 Windows 路径含空格导致 `/ide install` 失败（PR #30246）等平台问题仍有存量。
- **模型不主动使用代理能力**：多个反馈指出模型不会自发调用 skill 与 subagent，社区期望通过提示与评测（behavioral eval）推动模型更合理地委派任务。
- **配置与可观测性缺口**：配置覆盖被忽略、子代理轨迹难以查看分享，开发者在调试代理行为时缺少必要手段。
- **工作区卫生**：模型在随机目录生成临时脚本，给提交前的清理带来额外负担（#23571）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-26）

## 1. 今日速览

过去 24 小时发布了 1.0.117 系列的三个补丁版本（-0 / -1 / -2），重点在模型选择器预警、扩展权限说明、恢复会话时连接 Connector 等细节体验修正。Issues 侧活跃度集中在**权限与审批一致性**（并行会话覆盖审批、ACP 模式审批、URL 截断）、**会话状态可靠性**（会话卡死、远程会话切换与自动发布失败）以及**沙箱与 MCP 兼容性**三类问题，今日新增多条 triage 状态报告（沙箱下 Cypress 崩溃、模型工具调用超时、规则遵循失败）。过去 24 小时无 PR 更新。

## 2. 版本发布

**v1.0.117-0**
- 新增：显式工具暴露（explicit tool exposure），自定义 agent 可主动选择启用工具。
- 修复：在 GitHub 登录尚未完成时恢复 CLI 会话，加载已连接的 Copilot Connectors；后台 agent 在 CLI 重启并恢复会话后可继续对话。
- 链接：https://github.com/github/copilot-cli/releases

**v1.0.117-1**
- 改进：`/model` 选择器展示服务公告并标记即将退役的模型，让用户在选型前看到预警。
- 修复：当仓库将模型绑定到不可用的 provider 时，显示错误而非静默切换 provider；新的会话 checkpoint 公告时机修正。
- 链接：https://github.com/github/copilot-cli/releases

**v1.0.117-2**
- 修复：`copilot help extensions` 不再声称自有与插件扩展会随 `-p` 加载；扩展只有在启动已获批准（`--allow-all-tools` / `--yolo` 或此前保存的批准）时才会在该场景启动。
- 修复：内置搜索在 Copilot 传入 `line` 等参数时不再失败。
- 链接：https://github.com/github/copilot-cli/releases

## 3. 社区热点 Issues

1. **[#5323](https://github.com/github/copilot-cli/issues/5323)（OPEN，8 评论，👍7）** 请求新增设置以禁用 agent checkpoint refs（`refs/agents/*`）。每轮 agent 交互都会用用户自己的 git 身份在仓库中写入 commit refs，是本日评论数最高的议题，涉及仓库污染与身份归属，社区共鸣明显。

2. **[#4755](https://github.com/github/copilot-cli/issues/4755)（OPEN，5 评论）** 队列消息在回合结束时到达会导致会话永久卡死（既不 idle 也不 running，无法再接收输入，仅能通过重启恢复）。属高严重度的会话状态机缺陷，影响长时间运行的交互。

3. **[#3563](https://github.com/github/copilot-cli/issues/3563)（CLOSED，4 评论）** 并行运行多个 CLI 会话时，"Always allow" 工具审批可能被另一会话静默覆盖（写入 `~/.copilot/permissions`）。已关闭，与今日 1.0.117-2 的扩展批准逻辑调整方向一致。

4. **[#5464](https://github.com/github/copilot-cli/issues/5464)（CLOSED，3 评论）** stdio MCP server 启动超过约 10 秒时，`server/discover` 探测超时后在同一连接上回退到 legacy `initialize`，被基于 MCP Python SDK 2.3.0 的服务端以 -32022 拒绝。MCP 生态兼容性的典型问题，已关闭。

5. **[#5047](https://github.com/github/copilot-cli/issues/5047)（CLOSED，2 评论，👍1）** 请求在 ACP 模式下暴露内置的辅助审批安全判定（assisted approval），让 T3 Code 等 ACP 客户端复用 Copilot 的自动批准策略。反映 ACP 作为集成入口的需求正在增长。

6. **[#5491](https://github.com/github/copilot-cli/issues/5491)（OPEN，1 评论）** `plugins.marketplaces.add` 对大型 marketplace 会完整克隆仓库（仅为了读一个 `marketplace.json`），无进度提示、忽略取消、退出后遗留 git 进程与暂存目录。插件分发生态的可运维性问题。

7. **[#5440](https://github.com/github/copilot-cli/issues/5440)（OPEN，2 评论，👍1）** 按 Agent Plugins 1.0.0 格式打包时，`com.github.copilot/rules/` 下的 `.instructions.md` 与 `applyTo` frontmatter 被静默忽略（skills、mcp.json、custom agents 可正常加载）。插件规范一致性问题。

8. **[#5577](https://github.com/github/copilot-cli/issues/5577)（OPEN，1 评论）** v1.0.115 下切换到另一台机器上的远程 CLI 会话时挂起，伴随内存持续增长与认证变更日志风暴。远程/分布式会话场景的稳定性风险。

9. **[#5588](https://github.com/github/copilot-cli/issues/5588)（OPEN，triage，今日新建）** Cypress 在 macOS 沙箱内运行组件测试时以 SIGSEGV 崩溃，沙箱外同一命令正常，放行 Cypress 缓存目录读写也无法规避。沙箱兼容性的新证据。

10. **[#5571](https://github.com/github/copilot-cli/issues/5571)（OPEN，1 评论）** 仅使用 GHE.com 登录（GitHub Enterprise Cloud，`*.ghe.com`）时自更新器失败："GitHub credential owner did not provide a token"，在 1.0.115-4/-7/-8 上均可复现。企业部署路径的阻塞问题。

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新（共 0 条），本期无内容可总结。

## 5. 功能需求趋势

- **权限与审批模型精细化**：禁用 checkpoint refs（#5323）、并行会话审批持久化冲突（#3563）、ACP 模式辅助审批（#5047）、ACP 读取账户配额（#5587）——社区希望审批策略可配置、可跨会话/跨客户端一致生效。
- **插件与扩展生态规范化**：Agent Plugins 1.0 的 rules/`applyTo` 支持（#5440）、marketplace 增量获取（#5491）、`copilot help extensions` 与 `-p` 加载语义澄清（v1.0.117-2）共同指向插件加载行为的可预期性。
- **会话可靠性**：卡死（#4755）、远程会话切换挂起（#5577）、`--add-dir` 下自动发布失败（#5355）、云存储故障时的本地回退（#3904）。
- **沙箱与平台兼容**：Windows 沙箱直连 TCP 被拦（#5580）、Linux 上 Perforce depot 通配符被误判为 UNC 路径（#5521）、macOS 沙箱下 Cypress 崩溃（#5588）。
- **可观测性与协议兼容**：OTel 指标缺少 `service.instance.id` 导致并发会话写入同一指标流（#5005）、MCP stdio 探测回退不兼容（#5464）、`/mcp` 服务名大小写敏感匹配（#5050）。

## 6. 开发者关注点

- **审批与权限的"静默失败"最受诟病**：并行会话覆盖审批（#3563）、权限提示截断含 `${VAR}` 的 URL（#5257）、扩展在 `-p` 下是否加载的说明误导（v1.0.117-2）——开发者需要审批状态可审计、提示内容完整准确。
- **会话状态不可恢复性成本高**：卡死会话只能重启（#4755）、远程切换挂起并伴随内存增长（#5577），在长任务与多机协作场景中直接影响可用性。
- **企业环境路径仍有阻塞**：GHE.com 专属登录下更新失败（#5571）会阻断企业用户的升级通道。
- **模型侧行为需要更透明的护栏**：`/model` 选择器已开始标记退役模型并展示服务公告（v1.0.117-1），但工具调用超时（#5590：`gemini-4-neon` 大工具调用超 60s 触发 `/chat/completions` 空闲超时）和模型/provider 不可用时的错误提示仍是关注点。
- **指令遵循质量**：CLI 反复忽略明确的提交指令与规则提醒（#5589），反映用户对 agent 规则系统实际约束力的怀疑。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-11-26）

## 1. 今日速览

今天最核心的动态是 **v2.4.2 发布**，为 GPT-6.2 系列引入专用 system prompt，并修复 OpenCode Go 接入后的模型选择问题。社区讨论则高度集中在一次 **核心回归** 上——PR #63382 / #63223 移除前台子代理执行引发连锁问题（Issue #66555、#64073），同时 MCP 连接/OAuth 与压缩（compaction）相关的缺陷依旧高频更新。PR 侧多位贡献者集中提交了 MCP 稳定性与 prompt cache 修复。

## 2. 版本发布

**v2.4.2**
- **GPT-6.2 System Prompt**：GPT-6.2 Sol、Astra 及 `gpt-latest` 别名改用专为 GPT-6.2 编写的 system prompt（[PR #66297](https://github.com/anomalyco/opencode/pull/66297)）。
- **OpenCode Go 接入修复**：连接 OpenCode 后，模型选择器可正确列出 OpenCode Go 模型。

## 3. 社区热点 Issues

1. **[#64073 ](https://github.com/anomalyco/opencode/issues/64073) 恢复前台子代理执行**（37 评论，👍13）— 今日讨论最热，反映子代理执行模式调整带来的广泛影响，社区诉求明确。
2. **[#66555 ](https://github.com/anomalyco/opencode/issues/66555) 重大回归：子代理被强制后台化**（5 评论）— 作者指出 PR #63382、#63223 强制所有子代理进入后台模式，与 #64073 同源，属当前最高优先级核心问题。
3. **[#59868 ](https://github.com/anomalyco/opencode/issues/59868) Copilot GPT-6 切换推理强度丢失 prompt cache**（8 评论）— 影响成本与延迟，直接关联今日 PR #66648。
4. **[#66602 ](https://github.com/anomalyco/opencode/issues/66602) HTTP 200 包装的 context-overflow 未被识别**（4 评论）— 导致手动压缩无法收缩摘要请求，会话越界后无法恢复。
5. **[#63439 ](https://github.com/anomalyco/opencode/issues/63439) 压缩摘要残留 commentary 阶段文本**（4 评论）— Responses 模型相关问题，与 #51997 同类。
6. **[#58319 ](https://github.com/anomalyco/opencode/issues/58319) MCP OAuth 缺少 scope 导致反复浏览器认证**（5 评论）— 已复现，直接影响远程 MCP 可用性。
7. **[#60583 ](https://github.com/anomalyco/opencode/issues/60583) MCP `resources/templates/list` 返回 404 触发无限重连**（4 评论）— 远程 MCP 工具间歇性不可用，影响 Code Mode。
8. **[#64464 ](https://github.com/anomalyco/opencode/issues/64464) 插件热重载期间工具短时消失**（4 评论，2.3.0）— `ctx.tool.list()` 与 `ctx.plugin.list()` 状态不一致。
9. **[#42839 ](https://github.com/anomalyco/opencode/issues/42839) CLI 无法启用持久化事件存储**（7 评论）— `ServerOptions.events.persist` 未通过运行时配置暴露，自 8 月持续未解。
10. **[#60352 ](https://github.com/anomalyco/opencode/issues/60352) Desktop V2 下 V1 会话无法使用免费模型**（7 评论，已关闭）— 升级迁移痛点，虽关闭但仍值得复盘。

其他值得扫一眼：**#66657 彩色 diff**、**#66596 /skills 按字母排序**、**#63922 原生备份/恢复命令**、**#66617 Windows PTY 超时命令残留**、**#65587 通知开关缺少无障碍名称**。

## 4. 重要 PR 进展

1. **[#66648 ](https://github.com/anomalyco/opencode/pull/66648) Copilot GPT 切换 effort 时保留 prompt cache** — 回应 #59868，避免 next request 丢弃缓存。
2. **[#66178 ](https://github.com/anomalyco/opencode/pull/66178) MCP OAuth 刷新时携带已授予 scope** — 关闭 #66175，修复登录约一小时后失效。
3. **[#66170 ](https://github.com/anomalyco/opencode/pull/66170) MCP 列表变更流被服务端结束后重新打开** — 关闭 #66072。
4. **[#62756 ](https://github.com/anomalyco/opencode/pull/62756) 断连时保留 MCP 工具并按需重连** — 解决工具“消失又变新”导致签名失效的问题。
5. **[#66656 ](https://github.com/anomalyco/opencode/pull/66656) 每个工具 schema 仅转换一次 JSON Schema** — 修复保存配置时服务器卡顿数秒、shell 命令超时。
6. **[#66176 ](https://github.com/anomalyco/opencode/pull/66176) 迁移后的 openai-compatible Claude 模型保留 prompt caching** — 关闭 #65400。
7. **[#66649 ](https://github.com/anomalyco/opencode/pull/66649) MCP skill 条目单次解析并类型化加载失败** — skill 域清理收尾。
8. **[#65261 ](https://github.com/anomalyco/opencode/pull/65261) 核心：agent widgets** — 允许 agent 在会话中展示交互式组件（PsychoScript 模板）。
9. **[#66660 ](https://github.com/anomalyco/opencode/pull/66660) TUI：溢出时隐藏的会话标签可用鼠标点击** — 关闭 #66659。
10. **[#66652 ](https://github.com/anomalyco/opencode/pull/66652) CLI-Rust：选区配色与 ACP 修复并重生成绑定** — 对齐 `dev` 分支。

另有 [#66650 脚本步骤计数（已关闭）](https://github.com/anomalyco/opencode/pull/66650)、[#64424 内联显示 Read 捕获图片](https://github.com/anomalyco/opencode/pull/64424)、[#66181 v1 文档波斯语本地化](https://github.com/anomalyco/opencode/pull/66181) 值得留意。

## 5. 功能需求趋势

- **子代理执行控制**：前后台模式可配置，是本周期最强烈的功能诉求（#64073、#66555）。
- **MCP 生态健壮性**：OAuth（scope/issuer）、资源列表、断连重连、prompt 参数校验，构成最大缺陷集群。
- **上下文/压缩可靠性**：溢出错误分类、摘要内容净化、commentary 文本过滤。
- **模型与推理参数**：GPT-6.2 system prompt、Copilot 推理强度切换、prompt cache 保持，反映对多模型成本敏感。
- **会话与配置持久化**：默认模型记忆（#49713）、事件持久化（#42839）、原生备份/恢复（#63922）。
- **TUI/CLI 体验打磨**：技能列表排序、彩色 diff、鼠标可达性、主题配色。
- **可访问性与本地化**：通知开关无障碍名称、波斯语 RTL 文档。

## 6. 开发者关注点

- **回归风险**：核心行为（前台子代理）被 PR 静默移除，社区要求可回退或可配置，提示核心变更需更明确的迁移说明。
- **缓存与成本**：多处 prompt cache 丢失问题（#59868、#66176）说明推理参数变更对缓存前缀极为敏感，是高频抱怨点。
- **MCP 稳定性**：OAuth 细节（scope 缺失、issuer 尾斜杠）与连接生命周期管理反复出错，贡献者已集中提交修复。
- **性能卡顿**：schema 重复转换导致服务器冻结数秒（#66656），属影响日常使用的隐性性能问题。
- **错误可诊断性**：MCP prompt 缺参报“not found”误导、HTTP 200 包装错误未被分类，反映错误分类与提示质量亟待提升。
- **平台一致性**：Windows（PTY、Desktop 免费模型）与 V1→V2 迁移问题持续出现，跨平台与升级路径是长期痛点。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-11-26）

## 1. 今日速览

今日无新版本发布，社区讨论集中在终端渲染与 TUI 稳定性（Kitty 图像丢失、Windows 键盘上报残留、footer 闪烁）以及会话生命周期问题。PR 侧最值得注意的是 mitsuhiko 提交的 `pi-durable` 对话永久删除能力（#12562、#12582），以及围绕遥测与 `DO_NOT_TRACK` 的文档/合规讨论。

## 2. 版本发布

过去 24 小时无新 Release。多处 Issue 仍以 1.6.0 / 1.6.1 为复现版本进行反馈。

## 3. 社区热点 Issues（10 条）

1. **[#12548][OPEN][inprogress] Kitty 图像丢失与终端 scrollback 被清空** — 连续输出多张图像时部分图像消失，追加图像还会清空 scrollback。这是今日评论数最多的 Issue（4 条），属于高频可见的 TUI 回归。
   https://github.com/earendil-works/pi/issues/12548

2. **[#12564][OPEN][inprogress] Windows 下进程异常退出后残留 Kitty 键盘上报，PowerShell 提示符不可用** — 即便在 regular 模式也复现，且是 #12133 的后续问题。对 Windows 用户影响严重（终端被"污染"）。
   https://github.com/earendil-works/pi/issues/12564

3. **[#12547][OPEN][prio:p0] `/reload` 或 resume 后工具列表重排导致 prompt cache 失效** — 被标为 p0：工具注册顺序变化会使下一次 Anthropic 请求完全错过缓存，并丢失此前的 thinking blocks。成本与上下文连续性双重影响。
   https://github.com/earendil-works/pi/issues/12547

4. **[#12546][CLOSED][no-action] `AgentSession.dispose()` / `ExtensionRunner.invalidate()` 仍持有闭包，阻止 GC** — SDK 长驻进程托管多会话时会持续泄漏直至 OOM。虽已关闭为 no-action，但暴露了会话释放语义的缺口。
   https://github.com/earendil-works/pi/issues/12546

5. **[#12580][CLOSED][bug, untriaged] Workspace watcher 为每个目录注册一个 `fs.watch`（chokidar 5, depth 12）** — 无数量上限、忽略列表不完整，中大型 `.NET` 目录下句柄开销显著。关系到打开大仓库时的资源占用。
   https://github.com/earendil-works/pi/issues/12580

6. **[#12593][CLOSED][bug, untriaged] 单词 "hello" 触发 4 次约 56k token 请求且 prompt cache 零命中（本地 omlx 后端）** — 疑似上下文/缓存构建路径问题，对本地推理用户影响直接。
   https://github.com/earendil-works/pi/issues/12593

7. **[#12561][CLOSED][bug] Bash 工具无默认超时** — 一个挂起命令让工具调用持续 2 小时 6 分 18 秒。属于高影响的安全/可用性缺口，建议尽快补默认超时。
   https://github.com/earendil-works/pi/issues/12561

8. **[#12527][CLOSED][no-action] 跨硬链接与目录别名的本地文件变更需串行化** — 内置 `edit`/`write` 对同一文件的重叠变更应共享队列（硬链接、symlink 目录）。并发写正确性问题。
   https://github.com/earendil-works/pi/issues/12527

9. **[#12506][CLOSED][no-action] 后台子进程 transcript sidecar 的工具结果载荷省略（opt-in）** — 实测 30 天内 12 个 sidecar ≥ 90 MB（最大 122.8 MB）。面向批量/后台 agent 场景的存储与性能诉求。
   https://github.com/earendil-works/pi/issues/12506

10. **[#12509][CLOSED][no-action] openai-responses：Kimi k3.1-pro 流式把单个函数调用拆成多个 output item** — 仅首个 item 带 `call_id`/`name`，重放请求出现 400 重复工具调用 ID。与 #12555 一起构成 Kimi/Bedrock 适配的一组问题。
    https://github.com/earendil-works/pi/issues/12509

## 4. 重要 PR 进展（10 条）

1. **[#12562][OPEN] feat(durable)!: 永久删除对话** — 新增 `Harness.deleteConversations(ids, context)`：阻止新工作、中止进行中的（含后台）任务后彻底删除。带 breaking 标记，值得重点评审。
   https://github.com/earendil-works/pi/pull/12562

2. **[#12582][OPEN] feat(chord,durable): StoreStorage 支持删除对话** — 为 #12562 的配套改动（stacked，需先评审 #12562），新增 `document.purge` store 写入。
   https://github.com/earendil-works/pi/pull/12582

3. **[#12535][OPEN] feat(ai): 新增 `pi-image` API** — 提供类似 `pi-messages` / `pi-decision` 的通用图像生成协议，并附各 provider 能力矩阵。生态扩展性意义较大。
   https://github.com/earendil-works/pi/pull/12535

4. **[#12574][OPEN] fix(ai): 重试 Bedrock "Too many tokens" 限流** — `formatBedrockError` 目前只识别一种 429 文案，另一种（`Too many tokens`）未被当作可重试限流。
   https://github.com/earendil-works/pi/pull/12574

5. **[#12539][CLOSED] feat(ai): GitHub Copilot 在 effort 与工具变更时保留 prompt cache** — 使 Copilot 复用 Anthropic/OpenAI 已支持的缓存保持形态。与 #12547 同属缓存连续性主题。
   https://github.com/earendil-works/pi/pull/12539

6. **[#12505][OPEN] fix(ai): 在 openai-completions 中重放 Copilot 的 `reasoning_opaque`** — 修复 Copilot 流式返回的 opaque 推理值被丢弃的问题（observed with claude-opus-5.5）。
   https://github.com/earendil-works/pi/pull/12505

7. **[#12557][CLOSED] feat(tui,coding-agent): 通过 OSC 7577 上报会话恢复命令** — 实现 Program Resume Protocol，终端重启后可在设置 `OSC7577_TOKEN` 的终端中恢复 pi。
   https://github.com/earendil-works/pi/pull/12557

8. **[#12556][CLOSED] feat(coding-agent): 安装遥测与归因遵循 `DO_NOT_TRACK`** — 起因是公开遥测审计将 pi 评为 C（无第三方 SDK/ID，但不遵守 DNT）。合规相关，值得关注后续是否重开。
   https://github.com/earendil-works/pi/pull/12556

9. **[#12584][CLOSED] / [#12589][CLOSED] docs(coding-agent): 遥测文档先增后撤** — #12584 新增 `telemetry.md`（列出对 `pi.dev` 的安装/更新 ping、版本检查、模型目录更新等），随后被 #12589 回滚。文档口径尚未定论，建议跟踪。
   https://github.com/earendil-works/pi/pull/12584 · https://github.com/earendil-works/pi/pull/12589

10. **[#12577][OPEN] fix(coding-agent): 在 `/tree` 导航时正确摘要所选 prompt** — 修复选择 "Summarize" 时被摘要条目收集范围错误，导致该 prompt 离开上下文且未被摘要。
    https://github.com/earendil-works/pi/pull/12577

另可留意 **#12592**（`!!` 输出不应计入上下文 token 估算）与 **#12579**（运行时切换 store outbox），均已完成关闭。

## 5. 功能需求趋势

- **Prompt cache 与上下文连续性**：`/reload` 工具顺序（#12547）、Copilot 缓存保持（#12539）、`!!` 输出误计入 token（#12592）、omlx 零缓存命中（#12593）——缓存是今日最密集的主题。
- **终端 / TUI 兼容性**：Kitty 图像与键盘上报（#12548、#12564）、footer 闪烁（#12560）、OSC 7577 会话恢复（#12557）。
- **会话与后台 agent 的生命周期管理**：GC 泄漏（#12546）、transcript sidecar 体积（#12506）、持久化任务 drain（#12512）、对话删除（#12562/#12582）。
- **工具调用的健壮性**：Bash 默认超时（#12561）、可恢复的截断输出（#12567）、自动补全失败不拖垮编辑器（#12566）、并发写串行化（#12527）。
- **模型 / provider 适配**：Kimi k3.1-pro 流式拆分（#12509）、Bedrock Kimi 推理回传（#12555）、Bedrock 限流文案（#12574）、图像生成协议（#12535）。
- **配置与可观测性**：`mcp.json` JSON Schema（#12563）、遥测与 `DO_NOT_TRACK`（#12556/#12584/#12589）。

## 6. 开发者关注点

- **缓存命中率被直接感知为成本与体验问题**：p0 级别的 #12547 说明系统提示的稳定排序是硬约束；任何动态注册都可能破坏它。
- **资源泄漏与无界增长**：会话 GC 不彻底（#12546）、watcher 每目录一个句柄（#12580）、transcript sidecar 近百 MB（#12506）、Bash 无超时（#12561）——长驻与大规模使用场景的稳定性短板。
- **平台差异（Windows / Bun standalone）**：#12564、#12515 显示 Windows 与独立 Bun 二进制路径与 Node/npm 构建存在行为分歧。
- **贡献流程摩擦**：#12521 反映 PR 被贡献者审批门自动关闭后缺少放行路径，影响外部贡献者体验。
- **透明度诉求**：围绕遥测文档的增删（#12584 → #12589）与 DNT 支持，社区希望有明确、稳定的官方口径。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-26）

## 1. 今日速览

今日发布 v0.28.7 补丁版本，并出现新的 TypeScript SDK 版本 0.1.36（内置 CLI 0.28.6）。社区动态重心仍在 CI 稳定性：50 条更新 Issue 中绝大多数是主分支 CI/E2E/Managed Agent 失败追踪工单，多条长期存在的失败单今日被关闭，同时新增了若干 OPEN 的失败追踪。Managed Agent 容错（Broker 故障转移、会话挂起/冷恢复）是今日 PR 侧最集中的技术主题。

## 2. 版本发布

**CLI v0.28.7**（同日有对应 release PR #18469 同步 package.json 与 CHANGELOG）
- Release notes 标记为 `qwen-release-notes:v2`，素材中未提供具体变更条目。
- 链接: https://github.com/QwenLM/qwen-code/pull/18469

**v0.28.6** Highlights（源自发布说明）
- 托管会话现可在等待工具审批、提问或后台任务时挂起，并在 Harness 崩溃后通过冷恢复继续（#17953、#18115）。
- 链接: https://github.com/QwenLM/qwen-code/pull/17953

**SDK TypeScript v0.1.36**
- 内置 CLI 版本为 0.28.6（说明中另出现 0.28.0 的记录，素材未说明原因）。

> 素材中的 Harness 内核支持、重复工具调用拒绝原因说明等条目未标注所属版本号，此处不归属到具体 release。

## 3. 社区热点 Issues

1. **#11680 [CLOSED] E2E Tests 主分支 CI 失败（107 评论）** — 自 2026-09-11 起追踪，今日关闭，是评论数最高的长期失败单，反映 E2E 稳定性长期未收敛。https://github.com/QwenLM/qwen-code/issues/11680
2. **#11678 [CLOSED] Qwen Code CI 失败（69 评论）** — 与 #11680 同期创建，今日关闭，Windows 测试任务被点名。https://github.com/QwenLM/qwen-code/issues/11678
3. **#18252 [CLOSED] E2E：cron 工具默认注册测试失败（+73，54 评论）** — 单次报告牵连 70+ 测试，说明失败具有共因。https://github.com/QwenLM/qwen-code/issues/18252
4. **#17934 [CLOSED] E2E：daemon 被 SIGKILL 后会话续接失败（41 评论）** — 直接关联托管会话崩溃恢复可靠性。https://github.com/QwenLM/qwen-code/issues/17934
5. **#18342 [OPEN] E2E Tests 主分支 CI 失败（31 评论）** — 今日仍开放的活跃失败追踪，值得跟进。https://github.com/QwenLM/qwen-code/issues/18342
6. **#13009 [CLOSED] E2E：cron-tools 默认注册（+42，27 评论）** — 带 `status/ready-for-agent`、`autofix/approved` 标签，说明自动修复流程已介入。https://github.com/QwenLM/qwen-code/issues/13009
7. **#18258 [OPEN] Managed Agent gate：MySQL 上进程崩溃不重复/不伪造（+28）** — 托管 Agent 故障门禁失败，与今日多条 Broker 容错 PR 呼应。https://github.com/QwenLM/qwen-code/issues/18258
8. **#18269 [OPEN] Managed Agent gate：Hook 取消/删除排空语义（+35）** — 涉及会话结束与删除时 Hook 只执行一次，属托管生命周期一致性。https://github.com/QwenLM/qwen-code/issues/18269
9. **#16860 [OPEN] Desktop Checks：容器初始化失败（Linux x64 RHEL 10 rpm）** — 与今日 PR #18473 的 rpm 构建根镜像重新锁定直接对应。https://github.com/QwenLM/qwen-code/issues/16860
10. **#18264 [OPEN] Qwen Code CI 失败（无测试识别）** — “无测试识别”类报告反复出现，说明失败归因链路本身存在缺口。https://github.com/QwenLM/qwen-code/issues/18264

> 注：多条 Issue 自带 “Provisional” 声明——主分支已推进到更新提交，若新运行通过则该失败可能已被覆盖。阅读时需区分“确认回归”与“待复核”。

## 4. 重要 PR 进展

**托管/容错**
1. **#18455 [CLOSED] Broker 故障转移后恢复托管 Turn** — 第二个 Java 副本接管 Runtime Broker 后，在工具结果落盘并校验原 prompt/checkpoint/activation 后恢复原 Turn。https://github.com/QwenLM/qwen-code/pull/18455
2. **#18463 [OPEN] 故障转移后恢复被中断的 Broker 轮询** — 状态轮询断连或超时时标记 Turn 可恢复。https://github.com/QwenLM/qwen-code/pull/18463
3. **#18450 [CLOSED] 跨会话 prompt 触发接收方 UserPromptSubmit Hook** — `create_sub_session` / `/send` 发送的 prompt 现被视为接收会话输入。https://github.com/QwenLM/qwen-code/pull/18450

**CLI / 会话**
4. **#18454 [OPEN] 无 sidecar 会话保留归档协调前缀** — 恢复确定性同步前缀，危险 sidecar 条目保持严格 fail-closed。https://github.com/QwenLM/qwen-code/pull/18454
5. **#8980 [OPEN] MAX_TOKENS 恢复后只记录一个合并 Turn** — 修复持久化记录与内存历史不一致；该 PR 自 2026-08 起开放至今。https://github.com/QwenLM/qwen-code/pull/8980

**模型与核心**
6. **#18201 [OPEN] 为 getGptReasoningCapabilities 补充 GPT-6 / 6.1 / 6.2 模型 ID** — 当前仅含 `gpt-6-astra`。https://github.com/QwenLM/qwen-code/pull/18201
7. **#18167 [OPEN] 将截断输出预算带入 subagent 与 ACP 拒绝信息** — 让各 harness 面（不只主循环）都能告知模型截断消耗。https://github.com/QwenLM/qwen-code/pull/18167

**桌面 / Web Shell**
8. **#18415 [OPEN] Rosetta 2 下引导用户改用 Apple Silicon 构建** — 通过 `sysctl.proc_translated` 检测翻译进程。https://github.com/QwenLM/qwen-code/pull/18415
9. **#18365 [OPEN] Web Shell 可选会话适配器** — 供嵌入宿主编排会话创建、历史恢复与提交。https://github.com/QwenLM/qwen-code/pull/18365
10. 已出现多条“过载/负载暂停”UI 相关 PR（如暂停任务创建并显示过载条），说明 daemon 负载准入正在向前端暴露。

**CI / 安全**
- **#18473 [OPEN]** 将 RHEL 10 rpm 构建根重新锁定到 Stream 10 当前摘要（旧摘要已被上游回收）。https://github.com/QwenLM/qwen-code/pull/18473
- **#18470 [OPEN]** 隔离 fork 评审模型凭据：用 Actions token 替代维护者级 bot PAT，真实模型密钥由 loopback 代理持有。https://github.com/QwenLM/qwen-code/pull/18470

## 5. 功能需求趋势

- **会话/运行时韧性**：挂起与冷恢复、Broker 故障转移、daemon 被 SIGKILL 后续接、跨会话 Hook 语义——今日最密集的方向。
- **托管 Agent（Managed Agent）生命周期一致性**：崩溃时不重复/不伪造结果、Hook 排空与一次性执行、MySQL 持久化门禁。
- **CI 基础设施健康度**：E2E、Managed Agent gate、Desktop Checks、RHEL rpm 构建根；“无测试识别”类报告提示失败归因需要改进。
- **Web Shell 嵌入式集成**：可选会话适配器、负载过载提示。
- **模型支持**：GPT 系列推理能力表更新。
- **桌面端可用性**：Apple Silicon / Rosetta 2 引导。

## 6. 开发者关注点

- **E2E 失败长期化**：9 月创建的 CI 工单到 11 月底才关闭，且单次失败可牵连 70+ 测试，共因排查成本高。
- **Provisional 报告噪音**：大量 CI Issue 自带“主分支已推进、若新运行通过可驳回”的声明，需要读者自行复核，增加了信号过滤负担。
- **自动修复闭环**：`autofix/approved`、`status/ready-for-agent`、`autofix/in-progress` 标签已用于 CI 失败工单，机器人驱动的修复流程成为常态。
- **凭据与供应链安全**：fork 评审凭据隔离、容器镜像摘要被上游回收导致的构建中断，都是需要主动维护的运维点。
- **长尾 PR**：#8980 自 2026-08 开放至今仍在更新，核心 transcript 一致性问题值得关注其是否被推进。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-26）

> 数据范围：github.com/Hmbown/DeepSeek-TUI 过去 24 小时内更新的 Releases / Issues / PRs。今日无新版本发布；共 3 条 Issue、2 条 PR 有更新。

---

## 1. 今日速览

今日社区焦点集中在 **TUI 渲染与上下文压缩（compaction）** 两条主线：一是 Linux 终端窗口聚焦时的全屏重绘闪烁问题被关闭（#7343），二是 compaction 相关的新缺陷被集中提交——既有误删用户轮次的正确性风险（#7562），也有缓存命中率偏低的性能问题（#7564）。PR 方面，一个修复 CJK 文本后内联 skill 补全不触发的体验问题（#7563）新开，另一个外部贡献者提交的 R5 耐久性与超时取消类缺陷修复已合并关闭（#7561）。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 社区热点 Issues

> 说明：过去 24 小时内仅有 3 条 Issue 有更新，远少于 10 条，以下为全部条目，按重要性排序。

**1) #7343 [CLOSED] TUI 在每次窗口聚焦时全屏擦除重绘，在无 DEC 2026 支持的终端上闪烁**
- 标签：`area:tui`、`os:linux`｜作者：scripting-drafts｜评论：4
- 要点：每次获得窗口焦点时，TUI 执行 `CSI 2J` 全屏擦除并整体重绘，且包裹在 DEC 2026 同步更新标记中；在未实现 DEC 2026 的终端（gnome-terminal/VTE）上表现为明显闪烁。
- 为何重要：这是影响 Linux 日常使用体验的可见渲染缺陷，已获 4 条评论并已关闭，说明已有明确结论或修复路径。
- 链接：codewhale-hq/Codewhale Issue #7343

**2) #7562 [OPEN] compaction：宽松扫描可能删除粘贴了摘要头的用户轮次**
- 标签：`area:tui`、`area:core`、`area:state`｜作者：asto18089｜评论：1
- 要点：定位在 `crates/tui/src/compaction.rs:330-345`；当压缩没有 provenance 标记检查点的历史时，宽松扫描可能误将包含摘要头的用户轮次当作摘要内容删除。
- 为何重要：属于**数据正确性**问题——会丢失用户输入，风险高于一般 UI 缺陷；目前仍在开放状态，已有 1 条讨论。
- 链接：codewhale-hq/Codewhale Issue #7562

**3) #7564 [OPEN] 上下文压缩缓存命中率偏低**
- 标签：`bug`、`area:tui`、`os:windows`、`area:state`｜作者：LmeSzinc｜评论：0
- 要点：依据 `.codewhale/audit.log`，compaction 阶段缓存命中约 20k，而未命中规模达 200k～800k。
- 为何重要：直接影响长会话的延迟与成本；与 #7562 同属 compaction 链路，显示该模块是当前质量薄弱点。暂无评论。
- 链接：codewhale-hq/Codewhale Issue #7564

---

## 4. 重要 PR 进展

> 说明：过去 24 小时内仅有 2 条 PR 有更新，远少于 10 条，以下为全部条目。

**1) #7563 [OPEN] fix(tui)：CJK 文本后打开内联 skill 补全**
- 标签：`bug`、`area:tui`、`contributor:external`｜作者：chuenchen309
- 内容：内联 skill 提及（消息中的 `/my-review` 或 `$my-review`）目前仅在前置字符为空白、ASCII 括号或引号时才弹出补全；中/日文文本字符间无空格，导致中文、日文输入后无法触发补全。该 PR 针对此触发条件做修复。
- 意义：改善非拉丁语系输入体验，属外部贡献者提交。
- 链接：codewhale-hq/Codewhale PR #7563

**2) #7561 [CLOSED] fix(util,engine)：解决剩余 R5 耐久性、grep 超时取消与有界 review 读取缺陷**
- 标签：`bug`、`area:tools`、`area:core`、`contributor:external`｜作者：NieZhuZhu
- 内容：补齐 #7461 中尚未处理的 R5 审计缺口（基于已合入 main 的 `1fa6548ce` 与 `7e003749f`），并补充行为回归测试，覆盖：
  - **R5-L10-01**（`crates/util/src/{utils,fs_confine...`）相关缺陷；
  - grep 超时取消；
  - 有界 review 读取缺陷。
- 意义：聚焦工具层耐久性与资源边界，已关闭（合并），并附带回归测试。
- 链接：codewhale-hq/Codewhale PR #7561

---

## 5. 功能需求趋势

基于当日数据（样本仅 3 条 Issue、2 条 PR，趋势判断置信度有限）：

- **上下文压缩（compaction）可靠性成为新的关注重心**：#7562（误删用户轮次）与 #7564（低缓存命中率）同日出现，分别指向正确性与性能两个维度，说明 compaction 正从"能用"走向"可信、高效"的打磨阶段。
- **终端兼容性与渲染体验**：#7343 反映 TUI 对终端能力（DEC 2026）的适配仍不完整，Linux 侧终端生态差异需要显式降级策略。
- **多语言 / CJK 输入体验**：#7563 表明内联补全等交互逻辑隐含 ASCII/空格假设，国际化输入场景存在系统性遗漏。
- **工具层健壮性**：#7561 涉及的 grep 超时取消、有界读取、耐久性修复，延续了 R5 审计驱动的稳定性治理路线。

---

## 6. 开发者关注点

- **数据安全优先于体验优化**：compaction 的宽松扫描误删用户轮次（#7562）是当前最需优先处理的问题，建议补充 provenance 判定与回归测试。
- **长会话性能与成本**：compaction 缓存命中偏低（#7564）在 Windows 平台被报告，需结合 `.codewhale/audit.log` 排查缓存失效原因。
- **终端能力探测与降级**：对不支持 DEC 2026 的终端（gnome-terminal/VTE）应避免全屏擦除重绘（#7343），减少可见闪烁。
- **国际化输入边界**：内联 skill 补全的触发条件需兼顾 CJK 无空格分词场景（#7563）。
- **审计缺口闭环**：R5 系列缺陷（#7561）已补齐并附回归测试，显示社区外部贡献者在推动审计项收敛，后续可关注是否仍有遗留项。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*