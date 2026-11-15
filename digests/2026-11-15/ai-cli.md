# AI CLI 工具社区动态日报 2026-11-15

> 生成时间: 2026-11-15 17:13 UTC | 覆盖工具: 9 个

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

> 数据窗口：2026-11-15 ｜ 来源：各工具 GitHub 社区动态摘要（仅基于所提供材料，未补充或推测未提供的事实）

---

## 1. 生态全景

当前 AI CLI 工具生态已从"功能上线竞赛"进入**稳定性、安全与可控性打磨期**：今日十个数据源中仅 Qwen Code 有实际版本发布，其余均为 Issue/PR 层面的缺陷清理与架构重构。各家社区痛点高度收敛——**静默错误、配置写了不生效、权限与沙箱判定不可预测、跨平台（尤其 Windows/Linux 桌面）兼容缺陷**反复出现在高赞议题中。与此同时，多条主线正在进行结构性演进：Qwen Code 的 1.0 共享 agent loop 内核分面并入、OpenCode 的 v2/2.3.0 迁移与 CLI 原生化、Codex 的 rollout 预算与跨后端状态隔离。安全侧出现两个明确信号：Claude Code 的"污点触发出网封锁"提案，以及 Gemini CLI 与 Qwen Code 同日出现的 CI 门禁试探性 PR，说明供应链与提示注入防护正被社区主动推向议程。

---

## 2. 各工具活跃度对比

> 说明：材料中部分工具仅给出热点条目而非全量计数，下表按"材料所载"如实标注，"约数/未载明"处不虚构精确数字。

| 工具 | Issues（材料所载） | PR（材料所载） | Release | 当日主要特征 |
|---|---|---|---|---|
| **Claude Code** | 10 条热点（含合并条目，另列多条"其他"） | 0（无 PR 更新） | 无 | 讨论型活跃，语音/a11y 与权限判定为主 |
| **OpenAI Codex** | 10 条热点 | 10 条（多为 copyberry[bot] 批量，标记 CLOSED） | 无 | PR 侧活跃但以已关闭的机器人批量提交为主 |
| **Gemini CLI** | 10 条热点 | 10 条（含 2 条安全 PoC，已关闭） | 无 | 小型修复+文档纠错，含 CI 试探 PR |
| **GitHub Copilot CLI** | 10 条热点 | 0（无 PR 更新） | 无 | 纯 Issue 驱动，认证失效为最热 |
| **Kimi Code CLI** | 无活动 | 无活动 | 无 | 过去 24 小时无活动 |
| **OpenCode** | 10 条热点（#59387 单帖 369 评论） | 10 条 | 无 | 单帖热度极高，v2 稳定性为主 |
| **Pi** | 33 条获更新（约 2/3 已关闭），列 10 条热点 | 2 条 | 无 | Issue 集中清理日 |
| **Qwen Code** | 10 条热点（#14724 达 381 评论） | 10 条 | **v0.27.4 + desktop-v0.27.4 + sdk-typescript-v0.1.34** | 唯一有发布，1.0 内核迁移主线 |
| **DeepSeek TUI** | 6 条（另有 2 条更新于 11-14） | 1 条（文档） | 无 | 低活跃度，缺陷与终端兼容 |

**关键读数**：评论量峰值集中在 Qwen Code #14724（381 条，CI gate 判定）、OpenCode #59387（369 条，免费额度汇总帖）、Codex #49383（58 条，Windows 截图失败）、Gemini #22323（13 条，子代理误报成功）——但注意**评论量与问题严重性不等价**，前三者更像"汇总入口"或"长期未收敛"，后者才是单点硬缺陷。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求（据材料） |
|---|---|---|
| **权限/安全判定可预测性** | Claude Code、OpenAI Codex、Gemini CLI、OpenCode | Claude Code 权限规则漏报/误拦（#79771、#100730、#103819）；Codex 自动化丢弃命名权限配置（#50120）；Gemini 受污染命令不应生成 always-allow（#30196）；OpenCode 插件工具无法按名授权（#64051） |
| **沙箱与执行隔离** | Claude Code、Gemini CLI、OpenCode、Codex | Claude 污点触发出网封锁（#110140）；Gemini 零依赖 OS 沙箱（#19873）、破坏性命令抑制（#22672）；OpenCode MXC 沙箱化 shell（PR #64093）；Codex macOS workspace-write 拒绝合法重命名/删除（#40565） |
| **进程/资源生命周期治理** | Codex、OpenCode、Pi、Claude Code | Codex MCP 子进程泄漏致 Linux 内存线性增长（#25015）；OpenCode PTY 守护进程 5 秒重试（#64080）、后台服务重启循环（#64069）；Pi Windows 进程树清理（PR #11854）；Claude 手柄致主进程单核 100%（#99021） |
| **Windows 平台质量** | Codex、OpenCode、Pi、Claude Code | 各家材料中 Windows 缺陷密度最高：Codex 截图/浏览器/Chrome 配置（#49383、#56645、#42520、#41665）；OpenCode 路径大小写分裂（#52501）；Pi 安装器误判（#12172） |
| **错误如实透传 / 可观测性** | Codex、OpenCode、Pi、DeepSeek TUI | Codex 自定义状态栏（#17827，👍220，全场最高赞）；OpenCode 移动端额度错误被吞（#64079）；Pi 诊断日志缺结构性根因（注：该条属 DeepSeek TUI #7328）；DeepSeek TUI 失败根因需结构化 |
| **子代理/Agent 行为可靠性** | Gemini CLI、OpenCode、Qwen Code、Pi | Gemini 子代理中断误报成功（#22323）、挂起（#21409）、主动性不足（#21968）；OpenCode 恢复前台子代理（#64073）；Qwen 子代理批量审批仅渲染一个对话框（#17332）；Pi 同消息内工具调用并发导致乱序（#11950，P0） |

> 更正说明：上表"可观测性"行中"诊断日志缺结构性根因"实为 **DeepSeek TUI #7328**，非 Pi；Pi 的相关项为默认模型/上下文元数据不一致（#11021、#8810）。

---

## 4. 差异化定位分析

- **Claude Code — 交互体验与安全架构先行者**。议题重心在语音/TTS 无障碍（#42700）、Remote Control 跨设备、Cowork 云会话权限边界，以及"污点触发出网封锁"这类架构级安全提案。目标用户偏向重度交互与跨设备协作用户，路线偏**体验+安全并重**。

- **OpenAI Codex — 工程化与成本治理**。PR 侧集中体现 rollout 预算准入/中断/小数额度/MCP 钩子计费（#61582、#61579、#61580）、Cloud 会话标题与流恢复（#61600、#61599）、跨后端状态隔离（#61596）。可见其**更强调平台化能力、成本可控与后端一致性**，Issue 端则暴露 Windows Computer Use 与浏览器集成的落地阻力。

- **Gemini CLI — 子代理体系与执行环境重构**。主议题围绕 subagent 可靠性（#22323、#21409）、AST 感知工具（#22745）、围绕模型 bash 亲和性重构沙箱（#19873），并有系统性 workstream-rollup。定位偏**Agent 内核与效率研究**，社区对"失败必须可见"诉求强烈。

- **GitHub Copilot CLI — 协议对齐与企业集成**。核心矛盾是 ACP/非交互路径与交互式 CLI 的能力不对齐（#4275、#5354、#5466），并涉及云代理、认证与配额透明度。目标用户是**平台/客户端集成方与企业用户**（GHEC 数据驻留场景出现于 #4930）。

- **OpenCode — 桌面+移动全端与插件生态**。同时覆盖 TUI、Desktop、移动端与插件（OpenTUI 0.9.0 破坏性变更、tree-sitter 自定义语言、CLI 原生化移植 PR #63477）。定位偏**多端一体化与可扩展插件平台**，当前承受 v2/2.3.0 升级阵痛。

- **Pi — 扩展 provider 与 codemode 执行语义**。围绕 models.json/provider 元数据、`ctx.ui` 扩展接口、codemode 批处理调度。偏**可编程/可扩展的开发者工具**，Issue 清理节奏快。

- **Qwen Code — 架构迁移与托管运行时**。1.0 共享 agent loop 分面并入（#17362、#17336）、Managed Agent/Hosted Workspace/远程 broker、Web Shell。是**唯一当日有发布**的工具，路线最"平台化+托管化"。

- **DeepSeek TUI — 轻量终端工具，稳定性优先**。议题集中在诊断日志、用量记账容量边界、密钥脱敏性能、GNOME/VTE 终端兼容。社区规模最小，处于**打磨基础可靠性**阶段。

---

## 5. 社区热度与成熟度

- **讨论热度最高**：Qwen Code（#14724，381 条）、OpenCode（#59387，369 条）、Codex（#49383，58 条、#17827 获 👍220）。但 Qwen 与 OpenCode 的高评论更接近**汇总帖/CI 自动巡检**，反映流程治理而非单点功能热度。

- **社区最"重"、反馈质量最高**：Claude Code 与 Gemini CLI 的议题多为带复现、带标签、聚焦单点的缺陷与提案，**开发者对"失败可见性"的要求最具体**，社区成熟度高。

- **快速迭代/迁移中**：Qwen Code（1.0 内核迁移）、OpenCode（v2/2.3.0 + CLI 原生化）、OpenAI Codex（预算与后端隔离持续演进）处于**高迭代、高回归风险**阶段，升级阵痛已显（OpenCode #64069、#64021）。

- **清理期/稳态**：Pi（33 条更新，约 2/3 关闭）、DeepSeek TUI（低活跃、缺陷粒度小）偏维护节奏。

- **当日无活动**：Kimi Code CLI。

- **供给侧健康度提示**：Qwen Code 出现大量 deflake 自动 issue 与 PR、Gemini CLI 与 Qwen Code 同日出现 CI 门禁试探 PR，说明**CI 噪声与 runner 信任边界**已成为多工具共同治理成本。

---

## 6. 值得关注的趋势信号

1. **"失败必须可见"成为跨工具共识**：子代理中断误报成功（Gemini #22323）、认证过期需重启（Copilot #4929）、移动端额度错误被吞（OpenCode #64079）、英文散文是唯一可读根因（DeepSeek TUI #7328）——**结构化错误与状态透传**是开发者信任的基础设施，选型时应优先考察其诊断与错误契约能力。

2. **安全从"能力"转向"默认策略"**：污点出网封锁、受污染命令不生成 always-allow、外部 PR 一次性 runner 隔离、sandboxPolicy 一致性（Codex #50120）——**安全护栏"写了要生效"**正成为硬要求，而非可选特性。

3. **配置一致性是隐性技术债**：`settings.json` 覆盖失效、`contextManagement` 被丢弃、excludeTools 文档误导（Gemini）、models.json 声明能力不足（Pi）——多处"文档写了但无效"涉及安全语义，**易造成错误的安全感**，是评估工具可靠性的关键切入点。

4. **成本与配额透明化**：Codex rollout 预算体系、Copilot 后台压缩消耗高级请求（#2068）与模型 token 统计/能力不一致（#4927）、OpenCode 免费额度沟通——**元数据自洽**直接影响依赖它做预算路由的下游客户端。

5. **Windows 与 Linux 桌面是共同短板**：Windows（Codex/OpenCode/Pi/Claude）与 Wayland/GNOME-VTE（Gemini #21983、DeepSeek #7343/#7344）缺陷密集，**跨平台一致性尚未补齐**，对以 Windows 或 Linux 桌面为主力环境的团队构成实际采用风险。

6. **供应链与 CI 信任边界进入视野**：同日 Gemini 与 Qwen 出现针对 workflow 门禁的试探性 PR 及外部 PR 执行贡献者脚本的风险议题，**fork 代码在 CI 中的执行边界**需维护者持续关注——对自建 CI 的团队同样适用。

**对决策者的简要建议**：若追求交互与安全前沿，关注 Claude Code；若重平台化与成本治理，考察 Codex 与 Qwen Code（后者当日唯一有发布）；若需多端与插件生态，评估 OpenCode 但需接受 v2 迁移期波动；对跨平台/企业集成，Copilot CLI 的协议对齐与 Codex/Gemini 的子代理可靠性应作为实证验收项。**所有选型均建议以"错误可见性、配置是否真生效、沙箱/权限判定可预测性"作为实证验收清单。**

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-15）

> 说明：提供的 PR 数据中评论数均为 `undefined`，因此“热门 Skills 排行”按更新时间与议题关联度综合选取，评论活跃度依据 Issues 数据。所有内容仅基于所给材料。

---

## 1. 热门 Skills 排行（PR 视角）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [PR #1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` | 修复 MCP≥2.0.0 的 `streamable_http_client` 重命名与自定义 header 配置 | 适配 MCP 2.x 破坏性变更，关联 Issue #1668 | OPEN（更新至 2026-10-08） |
| 2 | [PR #1298](https://github.com/anthropics/skills/pull/1298) `skill-creator` | 隔离 trigger evals，兼容 Windows 与运行时失败 | 触发评估误报、跨平台子进程问题 | OPEN（更新至 2026-09-16） |
| 3 | [PR #525](https://github.com/anthropics/skills/pull/525) `pyxel` | Pyxel 复古游戏开发、调试与验证 | 无头输入驱动运行、帧检查 | OPEN（更新至 2026-11-01） |
| 4 | [PR #1245](https://github.com/anthropics/skills/pull/1245) `notion-spec-to-implementation` + `quantitative-resume-auditor` | 规格转 Notion 任务；简历量化审计 | 规范→可执行任务拆解 | OPEN（更新至 2026-10-15） |
| 5 | [PR #1703](https://github.com/anthropics/skills/pull/1703) `md2video-audio` | Markdown 一键生成带配音 MP4 | 零成本视频生成流水线 | OPEN（更新至 2026-09-15） |
| 6 | [PR #1771](https://github.com/anthropics/skills/pull/1771) `proofcore-contract-auditor` | Solidity/Rust 合约静态分析 + TON 链上存证 | Web3 智能合约审计 | OPEN（更新至 2026-09-16） |
| 7 | [PR #514](https://github.com/anthropics/skills/pull/514) `document-typography` | 生成文档排版质控（孤词、寡段、编号错位） | AI 文档排版质量 | OPEN（更新至 2026-03-13） |

补充：多份文档类修复 PR 来自同一作者（gerardrecinto）：[#1977](https://github.com/anthropics/skills/pull/1977) `algorithmic-art` wrapAround、[#1976](https://github.com/anthropics/skills/pull/1976) `webapp-testing`、[#1975](https://github.com/anthropics/skills/pull/1975) `pptx`，均为聚焦单点的 bug 修复。

---

## 2. 社区需求趋势（Issues 提炼）

- **信任与安全边界**：[#492](https://github.com/anthropics/skills/issues/492)（46 评论）指出社区 Skill 以 `anthropic/` 命名空间分发，存在冒充官方、权限越界风险。社区最集中的基础设施级诉求。
- **组织级共享与分发**：[#228](https://github.com/anthropics/skills/issues/228)（17 评论，👍8）要求 Claude.ai 内组织级 Skill 库，替代手动下载 `.skill` 文件再上传的流程。
- **评估/触发机制可靠性**：[#556](https://github.com/anthropics/skills/issues/556)（13 评论，👍7，`claude -p` 触发率 0%）、[#1352](https://github.com/anthropics/skills/issues/1352)（并行 worker 交叉匹配导致假阴性）、[#202](https://github.com/anthropics/skills/issues/202)（CLOSED，skill-creator 应遵循最佳实践）。说明社区高度关注 Skill 能否被可靠触发。
- **上下文/Token 效率**：[#1487](https://github.com/anthropics/skills/issues/1487) 指出 `claude-api` 单次工具调用注入约 156k tokens，耗尽上下文窗口；同类诉求见 [#1329](https://github.com/anthropics/skills/issues/1329) `compact-memory`（长时 agent 的紧凑符号化状态）。
- **质量治理流水线**：[#1385](https://github.com/anthropics/skills/issues/1385) 提出“预任务校准→对抗评审→交付验证”三段质量门；[#412](https://github.com/anthropics/skills/issues/412)（CLOSED）`agent-governance` 覆盖策略执行、威胁检测、审计追踪。
- **文档类 Skill 稳定性**：多个具体 bug 集中在 docx/xlsx：[#2018](https://github.com/anthropics/skills/issues/2018) 命名空间丢失写出非法 XML、[#1868](https://github.com/anthropics/skills/issues/1868) 渐变插值越界。
- **Skill 描述质量**：[#2064](https://github.com/anthropics/skills/issues/2064) `theme-factory` 描述只讲“做什么”未讲“何时用”；[#189](https://github.com/anthropics/skills/issues/189) 指出两个插件内容重复导致上下文重复。

---

## 3. 高潜力待合并 Skills（评论活跃、尚未合并）

- [PR #1742](https://github.com/anthropics/skills/pull/1742) `mcp-builder` — 修复上游依赖破坏性变更，关联明确 Issue，落地价值高。OPEN
- [PR #1980](https://github.com/anthropics/skills/pull/1980) `webapp-testing` — 移除 `subprocess.Popen(shell=True)` 的命令注入风险（安全类修复，更新至 2026-11-01）。OPEN
- [PR #2019](https://github.com/anthropics/skills/pull/2019) `xlsx` — 修复 `external_links_at_risk` 工作表级定义名/别名的漏报（Fixes #2013）。OPEN
- [PR #1792](https://github.com/anthropics/skills/pull/1792) `docx` — LibreOffice 超时改为报错并校验输出（Fixes #1668 相关场景外，独立修复）。OPEN
- [PR #1997](https://github.com/anthropics/skills/pull/1997) `skill-creator` — 正确解析 YAML frontmatter 标量，避免 eval 收到失真元数据。OPEN
- [PR #1730](https://github.com/anthropics/skills/pull/1730) `claude-api` — 替换 3 个 404 文档链接（已 curl 验证 HTTP 200）。OPEN
- [PR #2108](https://github.com/anthropics/skills/pull/2108) 文档快照状态说明 — 澄清 document skills 的参考定位与同步关系（更新至 2026-11-03）。OPEN

> 注：上述 PR 评论数在材料中未给出（`undefined`），“活跃”依据为更新时间靠前与关联 Issue 明确。

---

## 4. Skills 生态洞察

**社区在 Skills 层面最集中的诉求，是可信分发与可靠运行：确保 Skill 来源不被冒充、组织内可安全共享，并保证触发评估与打包链路不误报、不越权。**

---

*数据来源：github.com/anthropics/skills（截至 2026-11-15）。*

---

# Claude Code 社区动态日报 · 2026-11-15

> 数据来源：github.com/anthropics/claude-code

## 1. 今日速览

过去 24 小时无新版本发布、无最新 PR 更新，社区动态集中在 Issues 讨论上。最活跃的是语音/无障碍反馈（#42700，41 条评论、69 👍），以及 Cowork 自动模式分类器误拦截账户所有者自身任务的问题（#100730，26 条评论）。另有多条带 `has repro` 的可靠复现缺陷持续更新，涉及文件写入内容被错误解码、终端鼠标捕获和 Chrome 扩展连接失败等，值得开发者重点关注。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues（10 条）

1. **#42700 语音回读 + Remote Control 语音模式**（OPEN，41 评论 / 69 👍）
   请求为响应增加 TTS 回读，并为 Remote Control 会话提供语音模式，标签涉及 `area:tui`、`area:a11y`。这是今日评论与点赞双高的话题，反映无障碍与语音交互需求正在升温。
   https://github.com/anthropics/claude-code/issues/42700

2. **#100730 自动模式分类器拦截所有者自己的定时任务**（OPEN，26 评论）
   Cowork 云会话中，自动模式分类器阻止账户所有者本人授权的 "Cowork Run Routine Now" 任务，并阻断其自有设备间文件传输；摘要提及这与 9 月 23 日左右起的回归相关。权限与自动化边界问题是当前争议焦点。
   https://github.com/anthropics/claude-code/issues/100730

3. **#72957 Write/Edit 静默解码 `\uXXXX`，破坏转义文本**（OPEN，16 评论，`has repro`）
   Linux 下 Write/Edit 工具在写盘前会把文件内容中的 `\uXXXX` 当作 JSON Unicode 转义解码，导致无法写入字面转义序列。对需要处理代码字符串、正则或配置文件的开发者影响直接，且已有复现。
   https://github.com/anthropics/claude-code/issues/72957

4. **#12676 视频输入支持**（OPEN，21 评论 / 46 👍）
   请求 Claude Code 支持视频输入（`area:tui`、`area:core`）。作为长期高赞需求，说明社区希望从纯文本/图像扩展到多模态输入。
   https://github.com/anthropics/claude-code/issues/12676

5. **#76110 Ctrl+点击输出链接打开两个重复标签页**（OPEN，21 评论，`has repro` / `reproduced`）
   Linux xfce4-terminal 下点击 Claude Code 渲染的链接会打开两个重复浏览器标签，而普通 `echo` 输出不会。属于 TUI 链接渲染层的特定缺陷。
   https://github.com/anthropics/claude-code/issues/76110

6. **#100114 Windows 桌面端重启后 Remote Control 未恢复**（OPEN，13 评论 / 8 👍）
   应用静默更新或重启后，已有会话的 Remote Control 不再恢复，手机端这些会话被移入 Archive。影响跨设备工作流连续性。
   https://github.com/anthropics/claude-code/issues/100114

7. **#99572 模型质量回退反馈：Claude 5.5 Opus 疑似退化至 Opus 5 水平**（OPEN，7 评论 / 10 👍）
   macOS 用户报告模型质量下降。虽为个案描述，但涉及模型体验回归，容易引发同类反馈聚集。
   https://github.com/anthropics/claude-code/issues/99572

8. **#108098 AskUserQuestion 隐藏同一轮次的助手文本**（OPEN，3 评论）
   CLI 弹出询问对话框时，同一轮次中助手已写的多行 Markdown（如 OLD/NEW diff）不可见，用户只能看到对话框。影响交互可解释性与审阅体验。
   https://github.com/anthropics/claude-code/issues/108098

9. **#110140 污点触发的出网封锁（Taint-triggered egress lockdown）**（OPEN，2 评论，今日创建）
   建议在沙箱会话摄入不可信内容后，自动拒绝其网络出网（`area:security`、`area:networking`、`area:sandbox`）。这是提示注入防护方向的架构性提案，值得安全关注。
   https://github.com/anthropics/claude-code/issues/110140

10. **#105390 / #109830 Claude in Chrome 权限与连接故障**（OPEN）
    #105390：已批准站点列表始终为空，"允许此站点"提示不出现，所有页面读取失败；#109830：Linux 下 CLI 始终无法连接扩展桥接，native host socket 在监听但客户端数为 0。两条合看，Chrome 集成在权限授予与跨平台连接上均有阻塞性问题。
    https://github.com/anthropics/claude-code/issues/105390
    https://github.com/anthropics/claude-code/issues/109830

**其他值得留意的更新**：#79771（Bash 显式 ask 权限规则未被遵守）、#94029（`claude attach` 忽略鼠标禁用环境变量）、#103819（worktree 隔离会话误拒含 `source`/`bind` 参数的普通命令）、#81068（已关闭：Bedrock 上 Opus 5 默认预算 200K，catalog 缺 `native_1m_3p`）、#102139（桌面端行内 `$…$` LaTeX 不渲染）、#99021（连接 Xbox 手柄时主进程单核 100%）、#106525（仅日语的会话里思考摘要偶现简体中文）。

## 4. 重要 PR 进展

过去 24 小时无 PR 更新，无可汇总内容。

## 5. 功能需求趋势

- **语音与无障碍**：#42700 的 TTS 回读 + 语音模式表明，语音交互与 a11y 是当前呼声最高的新方向之一。
- **多模态输入**：#12676 视频输入（46 👍）延续了从文本、图像向视频扩展的诉求。
- **安全与沙箱**：#110140 提出基于"污点"的出网封锁，反映出社区对提示注入与不可信内容隔离的架构级关注；#103819 的 worktree 隔离误判则说明隔离策略的精确性同样被关注。
- **远程与跨设备协作**：Remote Control 相关（#100114）与 Cowork 云会话（#100730）显示，跨设备会话延续、权限分类器边界是新的高频使用场景。
- **能力边界与模型行为**：视频输入、模型质量回退（#99572）、会话语言一致性（#106525）等，指向对模型能力与输出确定性的持续关注。

## 6. 开发者关注点

- **工具静默改写内容的风险**：#72957 属高优先级——Write/Edit 在未提示的情况下改写文件内容，可能造成难以察觉的数据损坏。
- **权限系统行为不一致**：#79771（显式 ask 规则未生效）、#100730（分类器过度拦截）、#103819（参数文本误触发安全判定）共同指向权限/安全判定存在误报与漏报，需要更可预测的规则。
- **跨平台缺陷集中**：Linux（#76110、#94029、#109830）、macOS（#102139、#99021、#108098）、Windows（#100114、#103819）均有带复现的缺陷，桌面端与 TUI 交互质量是普遍痛点。
- **第三方集成阻塞**：#105390 与 #109830 使 Chrome 集成在部分场景完全不可用，影响实际工作流。
- **可见性与可解释性**：#108098 中关键文本被对话框遮盖、#106525 中语言混入，都会削弱开发者对输出的信任与审阅效率。

---

说明：以上内容仅基于所提供的 GitHub 数据；未提供的版本号细节、修复归属与时间线相关信息均未作推测。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-15）

## 今日速览
今日无新版本发布。社区讨论集中在 Windows 平台问题：Computer Use 截图捕获失败、本地浏览器功能在 Work 设置中被禁用、Chrome 集成配置缺失等多个高评论 Issue 持续活跃。PR 侧由 copyberry[bot] 批量提交的 rollout 预算控制、Cloud 会话标题与流恢复、跨后端状态隔离等改进集中更新，多数标记为 CLOSED。

## 版本发布
过去24小时无新 Release。

## 社区热点 Issues

1. **#49383 Windows Computer Use 截图捕获失败**（58 评论）— FrameArrived 超时与 E_INVALIDARG 错误，是当前评论最多的 Issue，反映出 Windows Computer Use 功能的稳定性问题。
   openai/codex Issue #49383

2. **#17827 可自定义状态栏**（56 评论，👍220）— 当前点赞最高，用户希望 TUI 底部显示 token 用量、模型名、速率限制、上下文窗口等实时信息，对标 Claude Code 的同类能力。
   openai/codex Issue #17827

3. **#25144 允许禁用长提示自动转为 .txt 附件**（57 评论，👍88）— macOS App 的功能诉求，高互动量显示其对日常输入流程的实际影响。
   openai/codex Issue #25144

4. **#56645 Windows 本地浏览器在 Work 设置中被禁用**（36 评论）— 影响浏览器类工作流的可用性。
   openai/codex Issue #56645

5. **#42520 Windows Chrome 集成未生成 chrome-native-hosts-v2.json**（25 评论）— 安装完成但配置文件缺失，更新后遗留失效的 latest junction。
   openai/codex Issue #42520

6. **#34349 允许完全禁用 Pets**（25 评论，👍88）— 希望移除侧边栏 "Show Pet" 入口，反映对非核心 UI 元素的干扰性反馈。
   openai/codex Issue #34349

7. **#25015 app-server 子代理泄漏 MCP 进程导致 Linux 内存线性增长**（20 评论）— 子代理结束后 MCP 子进程仍存活，属资源泄漏类严重问题。
   openai/codex Issue #25015

8. **#60778 iOS Codex 显示 "No tasks yet"**（18 评论）— 已连接 Mac 主机但会话列表为空，历史对话仅能通过搜索访问。
   openai/codex Issue #60778

9. **#41665 Windows Desktop exec 静默使用 MSIX 虚拟化 AppData**（13 评论）— 未使用真实用户目录，可能导致路径与数据行为异常。
   openai/codex Issue #41665

10. **#50120 Windows 自动化心跳丢弃命名权限配置**（12 评论）— 定时任务回退到旧版 sandboxPolicy，存在权限模型一致性与安全风险。
   openai/codex Issue #50120

## 重要 PR 进展

1. **#61663 修复相对工作目录下的配置读取** — 基于最新加载配置的层级栈构造 `config/read` 响应，使 `cwd: "."` 等相对路径请求可用并反映外部配置变更。（CLOSED）
   openai/codex PR #61663

2. **#61619 归档任务时返回命令中心** — 归档当前任务不再等待服务器响应阻塞导航。（CLOSED）
   openai/codex PR #61619

3. **#61600 为 Cloud 会话启用自动标题** — 此前 Cloud 会话跳过 TUI 标题生成，现基于所选 Cloud 账户生成结构化标题。（CLOSED）
   openai/codex PR #61600

4. **#61599 上报 Cloud 流恢复失败并取消废弃读取** — 区分会话缺失、拒绝访问、登录变更等失败原因，替代通用重开提示。（CLOSED）
   openai/codex PR #61599

5. **#61596 按后端隔离 agent 概览刷新状态** — 修复切换后端时丢失分页队列或误用其他后端配额的问题。（CLOSED）
   openai/codex PR #61596

6. **#61595 将 TUI 历史项查找限定在所属回合** — 修复跨回合复用 ID 导致完成边界错位或历史项被隐藏。（CLOSED）
   openai/codex PR #61595

7. **#61587 为模型请求钩子增加 request ID 与尝试序号** — 便于在重试与模型回退间关联同一次生成的多次尝试。（CLOSED）
   openai/codex PR #61587

8. **#61582 在共享预算耗尽时拦截新的 rollout 工作** — 新请求、工具调用与自动回合均需感知预算停止，同时保留已消费的响应。（CLOSED）
   openai/codex PR #61582

9. **#61579 支持小数 rollout 预算与可配置上下文提醒**（11-14 提交）— 新增 `features.rollout_budget.limit_budget` 并保留 `limit_tokens` 兼容。（CLOSED）
   openai/codex PR #61579

10. **#61580 将同步 MCP 后置钩子成本计入 rollout 预算**（11-14 提交）— 允许成功的同步 `PostModelRequest` MCP 钩子返回 `extra_codex_rollout_budget_units` 并计入预算。（CLOSED）
    openai/codex PR #61580

## 功能需求趋势

- **可观测性与状态展示**：#17827 自定义状态栏（token、速率限制、上下文窗口）呼声最高（👍220），说明用户需要更强的运行态可见性。
- **输入与交互可控性**：#25144 长提示附件转换开关、#34349 禁用 Pets，均指向对自动化行为与非核心 UI 元素的控制权诉求。
- **浏览器与 Computer Use 集成**：Windows 相关 Issue（#56645、#42520、#56873、#56755）密集出现，浏览器路由与 Chrome 集成是当前功能落地的主要障碍面。
- **跨平台与移动端体验**：iOS 会话/项目列表为空（#60778、#60799）显示 Remote 冷启动与列表同步仍需完善。
- **Skill 与配置语义**：#23454 显式调用 `$skill` 忽略本地 explicit-only 技能，涉及技能发现机制的正确性。

## 开发者关注点

- **Windows 平台稳定性是最大痛点**：Computer Use 截图、浏览器可用性、MSIX 虚拟化路径、UI 冻结（#49611 cua_node rename_staging EPERM 重试循环）等集中在 Windows Desktop，问题数量与评论量均居前。
- **资源与权限一致性**：MCP 进程泄漏（#25015）、自动化丢弃命名权限配置（#50120）涉及长期运行稳定性与安全模型。
- **沙箱行为边界**：macOS workspace-write 沙箱拒绝可写目录内的重命名与删除（#40565），以及 Sites 助手凭据交接被自动审查阻断（#53487），反映沙箱策略与实际工作流的冲突。
- **预算与配额精细化管理**：PR 系列围绕 rollout 预算的准入、中断标记、小数额度与 MCP 钩子计费持续演进，显示成本控制在内部与社区层面均受重视。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-11-15

## 1. 今日速览

过去24小时无新版本发布，社区讨论高度集中在 **Agent/子代理（subagent）行为可靠性** 上：子代理 MAX_TURNS 中断被误报为成功、通用代理无限挂起等问题仍处于 P1 且反复“待复测”。PR 侧以小型 bug 修复与文档纠错为主，同时出现针对安全/CI 的可疑 PoC PR（已关闭）。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 社区热点 Issues（10 条）

1. **#22323 子代理 MAX_TURNS 中断被报告为 GOAL success**（P1，13 条评论）
   `codebase_investigator` 在未做任何分析即触及最大轮次限制时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实的中断原因。这是当前评论最多的问题，直接影响用户对子代理结果的信任。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 通用代理挂起**（P1，8 条评论，8 👍）
   一旦 CLI 交由通用代理处理，即使建目录这类简单操作也会无限挂起，用户等待长达一小时。高点赞说明影响面广，是当前最受用户抱怨的稳定性问题之一。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 利用模型的 bash 亲和性：零依赖 OS 沙箱与执行后意图路由**（P2，9 条评论）
   提案认为 Gemini 3 模型原生倾向以 POSIX 工具链探索代码库，应通过沙箱机制释放这一能力。属于架构层面的中长期方向讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 评估 AST 感知的文件读取、搜索与代码库映射**（P2 EPIC）
   探讨 AST 感知工具能否减少轮次、更精确读取方法边界，是提升 agent 效率的重要研究项；其子项 #22746 已建议以 tilth 或 glyph 作为起点。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 Gemini 不够主动使用 skills 与子代理**（P2）
   用户反馈除非显式指令，否则模型几乎不会自行调用自定义 skills/子代理。这关系到子代理体系能否真正发挥价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#22267 Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）**（P2）
   浏览器代理完全不读取全局/项目级配置覆盖，尽管 `AgentRegistry` 可见这些设置，属于配置体系一致性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 浏览器子代理在 Wayland 下失败**（P1）
   Linux Wayland 环境下的浏览器子代理直接失败。考虑到 Wayland 已是主流桌面默认，此问题影响大量 Linux 开发者。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 工具数超过 128 时出现 400 错误**（P2，需更多信息）
   启用工具过多时请求报 400，用户期望 agent 能更智能地裁剪工具范围。这与 MCP/扩展生态扩张带来的工具膨胀直接相关。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 Agent 应制止破坏性行为**（P2）
   模型在复杂 git 操作中会使用 `git reset`、`--force` 等命令，而存在更安全的替代方案。属于安全护栏类需求，对生产环境使用者尤为关键。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#23571 模型频繁在随机位置创建临时脚本**（P2）
    限制 shell 执行后，模型会在多个目录中散落编辑脚本，给清理和提交带来负担，反映沙箱与工作区约束设计的缺口。
    https://github.com/google-gemini/gemini-cli/issues/23571

## 4. 重要 PR 进展（10 条）

1. **#30307 fix(core): list_background_processes 省略 null 退出码**（P3，小）
   修复长期未解的 #29167：后台进程未结束时，模型会看到 `(Exit Code: null)`。
   https://github.com/google-gemini/gemini-cli/pull/30307

2. **#30306 fix(core): 扫描中途消失的子目录不再告警**（P1，小）
   消除因 `.gemini/projects.json.lock` 等瞬时消失目录导致的 `ENOENT` 警告噪音。
   https://github.com/google-gemini/gemini-cli/pull/30306

3. **#30267 fix(cli): 通过 CLI 可执行路径识别本地 git clone 安装**（中）
   修复在克隆目录外从源码运行时被误判为全局 npm 安装、从而触发意外后台 `npm install` 的问题。
   https://github.com/google-gemini/gemini-cli/pull/30267

4. **#30305 docs(extensions): 停止推荐永不生效的 excludeTools 写法**（P2）
   文档示例 `"excludeTools": ["run_shell_command(rm -rf)"]` 实际不拦截任何命令，属于会误导扩展作者的安全文档缺陷。
   https://github.com/google-gemini/gemini-cli/pull/30305

5. **#30196 fix(core): 阻止为受污染 shell 命令创建 always-allow 规则**（安全，中）
   对带不可信参数或构建文件已变更的命令选择“始终允许”后，不再保存覆盖所有同类命令的会话/持久规则。
   https://github.com/google-gemini/gemini-cli/pull/30196

6. **#30194 fix: `gemini models` 遗漏 `gemini-3.8-flash`**（P2，v0.67.0）
   `/model manage` 中可见的 `gemini-3.8-flash` 未出现在 `gemini models` 输出中，已附失败/通过测试验证。
   https://github.com/google-gemini/gemini-cli/pull/30194

7. **#30068 fix(cli): 将上下文管理设置转发给 core**（已关闭，小）
   文档化的 `contextManagement` 配置（如 400,000 token 的输出掩码阈值）此前被丢弃并回落至默认 50,000，属配置失效问题。
   https://github.com/google-gemini/gemini-cli/pull/30068

8. **#30301 docs(cli): 同步 CLI 参考中的 ACP 选项**（中）
   ACP 模式取代 Zed 集成后，文档仍列有 `--experimental-zed-integration` 等已不存在的参数。
   https://github.com/google-gemini/gemini-cli/pull/30301

9. **#30066 ci: package.json scripts 中的惰性 canary（安全 PoC，勿合并）**（已关闭）
   提交者自称用于 Google OSS VRP 验证的 PoC，替换 build 与集成测试脚本以演示工作流执行 fork 分支代码。已关闭，但对 CI 安全评审有参考价值。
   https://github.com/google-gemini/gemini-cli/pull/30066

10. **#30065 ci probe: 同一 fork 账号的第二个 PR**（已关闭）
    仅含标记文件，用于绕过首次贡献者工作流 `action_required` 限制，与上条同属对 CI 门禁的试探。
    https://github.com/google-gemini/gemini-cli/pull/30065

## 5. 功能需求趋势

- **子代理体系成熟化**：多个 workstream-rollup 议题（#20195 Sprint 1、#18283 仓库内代理示例、#18282 改进 codebase investigator、#22598 通过 `/chat share` 分享子代理轨迹）显示维护团队正系统性地补齐本地子代理能力与可观测性。
- **Agent 效率与上下文**：AST 感知读取/搜索/映射（#22745、#22746）被作为减少轮次的关键实验方向；#19873 主张围绕模型原生 bash 倾向重构执行环境。
- **安全护栏与沙箱**：破坏性命令抑制（#22672）、受污染命令的 always-allow 规则（#30196）、扩展 excludeTools 失效（#30305）共同指向“策略必须真实生效”的需求。
- **浏览器代理健壮性**：配置覆盖失效（#22267）、持久会话锁恢复（#22232）、Wayland 兼容（#21983）构成一组集中诉求。
- **配置一致性**：`settings.json` 覆盖、`contextManagement` 转发、`gemini models` 列表同步等，反映配置读取链路存在系统性缺口。
- **规模上限**：工具数量超限报 400（#24246）预示 MCP/扩展生态扩张后需要工具裁剪机制。

## 6. 开发者关注点

- **静默错误最伤信任**：子代理失败被报成成功（#22323）、挂起无超时（#21409），开发者更在意“失败要可见”，而非单纯功能缺失。
- **配置写了不生效**：`settings.json` 覆盖、`contextManagement`、扩展 `excludeTools` 均出现“文档写了但无效”，且部分涉及安全语义，容易造成错误的安全感。
- **副作用污染工作区**：随机位置的临时脚本（#23571）、意外后台 `npm install`（#30267），直接影响提交干净度与环境可预测性。
- **模型主动性不足**：skills 与子代理需要显式指令才触发（#21968），说明提示与工具编排策略仍需打磨。
- **平台兼容性**：Wayland 下的浏览器代理失败说明 Linux 桌面新默认环境的适配尚未完成。
- **CI/供应链安全**：同日出现两条针对工作流门禁的试探性 PR，提示维护者需持续关注 fork 分支代码在 CI 中的执行边界。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-15）

## 今日速览
今日没有新版本发布和 PR 更新，因此社区动态完全来自 Issue 讨论。最值得关注的是长期运行的 CLI 进程会永久丢失认证（#4929），已有 13 条评论但仍未解决，而 `/login` 无法恢复该进程，只能重启。ACP（Agent Client Protocol）与非交互路径的模型和配置无法对齐，这是一条贯穿多日的主线：上下文档位、Fusion 模型、模型价格元数据等接口，都没有与非交互路径对应的配置（#4275、#5354、#5466）。此外，影响个人用户和云代理的阻塞性问题仍集中在 `triage:needs-human`（需要人工跟进），半天内新增多条零评论的待处理 Issue。

## 版本发布
过去 24 小时内无新版本。

## 社区热点 Issues（10 条）

1. **#4929 进程内认证令牌停止刷新，所有提示失败直至重启**（OPEN，13 条评论，最热）
   重要原因：长时间运行进程会永久丢失认证，`/ask` 和普通提示全部返回授权错误，且 `/login` 无法恢复。这属于可用性硬伤，并牵涉 authentication 与 MCP 两个领域。
   链接：github/copilot-cli Issue #4929

2. **#4275 ACP 暴露 contextTier 作为会话配置项**（OPEN，8 条评论，👍5）
   重要原因：交互式 `/model` 可中途切换上下文档位，但 ACP 服务端没有对等能力。由 GitKraken 开发者提出，影响外部客户端集成的一致性。
   链接：github/copilot-cli Issue #4275

3. **#5323 增加禁用 agent checkpoint refs（refs/agents/*）的设置**（OPEN，6 条评论，👍2）
   重要原因：每次 agent 回合都在用户仓库中以用户自己的 git 身份创建 commit ref，会造成污染并带来身份归属问题，社区对此有明确诉求。
   链接：github/copilot-cli Issue #5323

4. **#5354 ACP 未公布 Copilot Fusion 及其档位配置**（OPEN，2 条评论，👍5）
   重要原因：Fusion 在交互式可用，但 ACP 只显示为 Auto，导致 T3 Code 等客户端无法展示 Fusion，属于模型能力暴露不一致。
   链接：github/copilot-cli Issue #5354

5. **#5283 个人 Copilot Free 账号受远程控制策略阻止远程环境托管**（OPEN，2 条评论，👍6，needs-human）
   重要原因：点赞数最高，而且阻塞免费个人用户的远程访问，影响面广，需人工跟进。
   链接：github/copilot-cli Issue #5283

6. **#4931 云代理内置 Playwright MCP 会话在首次工具调用时已关闭**（OPEN，2 条评论，👍1，needs-human）
   重要原因：错误被误报为需要浏览器 OAuth，且该问题在 #4378 的规避方案下仍然存在，云代理场景缺乏可行的恢复路径。
   链接：github/copilot-cli Issue #4931

7. **#4930 云代理查看图片即终止会话（CAPIError 400）**（OPEN，1 条评论，needs-human）
   重要原因：在 GHEC 数据驻留租户上，对任意图片调用 `view` 工具都会导致后续模型调用被拒，直接影响多模态工作流。
   链接：github/copilot-cli Issue #4930

8. **#2068 后台压缩消耗 1 次高级请求（VS Code 不消耗）**（CLOSED，1 条评论，👍5）
   重要原因：跨产品计费不一致，虽然已经关闭，但仍是用户关于配额成本的典型反馈。
   链接：github/copilot-cli Issue #2068

9. **#4927 GPT-6 Astra long_context 档位上报 872k 提示 token，而能力声明为 1,050k**（OPEN，1 条评论）
   重要原因：模型目录内部不一致（能力上限与计费 token 统计不一致），会影响依赖元数据做预算或路由的客户端。
   链接：github/copilot-cli Issue #4927

10. **#5464 stdio MCP 服务器在 `server/discover` 超时后回退失败（-32022）**（OPEN，0 条评论，当日新建）
    重要原因：启动慢于约 10 秒的 stdio MCP 服务器无法连接，同一连接上的 legacy `initialize` 回退被拒，影响自建 MCP 的兼容性。
    链接：github/copilot-cli Issue #5464

## 重要 PR 进展
过去 24 小时内无 PR 更新（共 0 条）。

## 功能需求趋势
- **ACP 与非交互路径对齐**：上下文档位（#4275）、Fusion 模型暴露（#5354）、模型元数据中补充上下文窗口和分档价格（#5466）、模型可用性拒绝（#2782）等，都是让 ACP 客户端与交互式 CLI 保持一致。
- **仓库与工作区整洁**：可控的 agent checkpoint refs（#5323）。
- **会话管理体验**：Sessions 侧栏跨文件夹展示活跃会话，并按文件夹排序或分组（#5463）。
- **终端个性化**：增加内置配色主题（#5465）。
- **模型目录可信度**：模型能力与计费统计需要自洽（#4927）。

## 开发者关注点
- **认证与恢复可靠性**是首要痛点：令牌过期后无法自愈，`/login` 无效，只能重启（#4929）。
- **云代理与远程访问阻塞**：Playwright MCP 会话提前关闭（#4931）、图片查看中断会话（#4930）、免费个人账号受远程策略限制（#5283），这三项都需要人工跟进。
- **MCP 兼容性与稳定性**：重复发现会误报“Found 0 tools”（#4773），stdio 超时回退失败（#5464）。
- **计费与配额透明度**：后台压缩消耗高级请求（#2068）、升级后仍显示无可用模型（#5419）、模型 token 统计与能力不一致（#4927）。
- **平台一致性问题延续**：Linux 剪贴板归属提示（#5218，关联 #3172）重新提交后仍存在。


</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-15

## 1. 今日速览

今日无新版本发布，社区讨论集中在 **v2/2.3.0 的稳定性问题**：Windows 平台的路径与后台服务反复成为故障源，PTY shell 调用的 5 秒固定延迟也有了对应修复 PR。免费额度（free tier）问题的集中讨论帖累计 369 条评论，仍是社区最大热点。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（10 条）

1. **#59387 免费额度问题主帖**（369 评论 / 👍28）
   免费层报错（"Free usage exceeded"、"limit reached" 等）的统一反馈入口，评论量远超其他议题，说明免费额度相关的用户体验问题覆盖面广。
   https://github.com/anomalyco/opencode/issues/59387

2. **#52237 远程 MCP 服务器连接失败后永不重试**（18 评论）
   远程 HTTP MCP 连接失败（如 macOS 休眠唤醒后）会永久停留在 `failed` 状态，新建会话或重启 TUI 都无法恢复，只能重启服务。已有对应 PR #64101 增加手动重连命令。
   https://github.com/anomalyco/opencode/issues/52237

3. **#64080 shell 每次工具调用卡顿约 5 秒**（7 评论，macOS）
   PTY 守护进程握手失败（`ECONNREFUSED /tmp/opencode-pty-<uid>/*.sock`）后每次调用都重试并回退，造成固定延迟。已由 PR #64087 修复。
   https://github.com/anomalyco/opencode/issues/64080

4. **#52501 Windows 路径大小写不敏感导致项目身份分裂**（9 评论）
   同一项目以不同大小写路径打开会生成第二个空项目，会话列表为空，MCP/插件重复初始化。Windows 平台长期问题的典型代表。
   https://github.com/anomalyco/opencode/issues/52501

5. **#64069 Desktop 2.3.0 后台服务 10–30 秒重启循环**（3 评论，Windows）
   导致 "socket connection was closed unexpectedly" / "Transport: Failed to fetch"，会话无法使用。
   https://github.com/anomalyco/opencode/issues/64069

6. **#64051 v2 插件工具无法按名称加入 agent 权限白名单**（5 评论）
   只有 `action: "*"` 通配符生效，插件工具无法精细授权，影响插件生态的安全配置能力。
   https://github.com/anomalyco/opencode/issues/64051

7. **#64073 恢复前台子代理执行**（6 评论，feature）
   社区要求保留阻塞式 subagent 调用的能力，与 #64096（2.3.0 改为始终后台执行）同向，反映 2.3.0 子代理行为变更带来的适配需求。
   https://github.com/anomalyco/opencode/issues/64073

8. **#48411 更好的执行权限与沙箱隔离**（👍6，长期 feature）
   社区对执行控制改进的诉求；已有 PR #64093 尝试用 MXC 沙箱化 agent shell 命令。
   https://github.com/anomalyco/opencode/issues/48411

9. **#61248 `claude-agent` provider 的插件上下文注入无法送达 Claude**（3 评论）
   通过 plugin context hooks 添加的系统提示未到达模型，与 v2 服务端插件文档描述不符。
   https://github.com/anomalyco/opencode/issues/61248

10. **#64079 移动端额度错误显示为通用报错**（3 评论）
    服务端已返回 `provider.free-limit` 等可读错误，移动端却只显示 "run stopped with an error"，属于错误信息透传缺失。
    https://github.com/anomalyco/opencode/issues/64079

*其他值得留意：#59664 TUI 剪贴板未实际复制却提示成功；#63944 Desktop renderer 在生成时崩溃（`Match/exhaustive: absurd`）。*

---

## 4. 重要 PR 进展（10 条）

1. **#64101 `feat(cli): add opencode mcp reconnect`**（OPEN）
   新增 `opencode mcp reconnect [name]`，为 #52237 提供 CLI 侧手动重连能力，解决失败 MCP 服务器无法恢复的问题。
   https://github.com/anomalyco/opencode/pull/64101

2. **#64087 `fix(core): stop retrying an unavailable PTY daemon per request`**（CLOSED）
   修复 PTY 守护进程不可用时每个请求都重试整个启动流程导致的 ~5 秒延迟，关闭 #64080。
   https://github.com/anomalyco/opencode/pull/64087

3. **#64093 `feat(core): sandbox agent shell commands with MXC`**（OPEN）
   对 agent 的 shell 命令进行沙箱化，回应 #48411 的沙箱执行诉求，并取代 #63599。
   https://github.com/anomalyco/opencode/pull/64093

4. **#64097 `feat(app,tui): prompt subagent sessions directly`**（OPEN）
   两个客户端均可直接向子代理会话发送 prompt，配合后端已有能力。
   https://github.com/anomalyco/opencode/pull/64097

5. **#64102 `feat(app): status chips for subagent rows in the new timeline`**（CLOSED）
   在新时间线中为子代理行添加状态标签，对齐已选定的 S3 设计。
   https://github.com/anomalyco/opencode/pull/64102

6. **#63477 `cli: port to native`**（OPEN）
   CLI 原生化移植，另见 opencode-native-preview 预览仓库。
   https://github.com/anomalyco/opencode/pull/63477

7. **#63989 `Opentui 0.9.0`**（OPEN）
   插件 markdown 代码块渲染器改为接收 OpenTUI 的 `MarkdownCodeBlock`（替代 marked 的 `Tokens.Code`），OpenTUI peer 依赖随之变更，属于插件 API 破坏性调整。
   https://github.com/anomalyco/opencode/pull/63989

8. **#63941 `fix(app): insert dropped text into the composer`**（OPEN）
   修复从其他应用拖拽选中文本到输入框时未插入的问题，关闭 #63924。
   https://github.com/anomalyco/opencode/pull/63941

9. **#59284 `feat(tui): load custom tree-sitter languages from config and plugins`**（OPEN）
   支持在 `cli.json` 与插件中配置运行时 tree-sitter 语言（URL 或相对路径），增强 TUI 语法高亮扩展性。
   https://github.com/anomalyco/opencode/pull/59284

10. **#61773 `feat(app): add a touch dock to the mobile composer`**（CLOSED）
    移动端输入区改造：发送按钮仅 28px 且回车行为依赖 iOS 自动大写，现统一收进底部触控坞。
    https://github.com/anomalyco/opencode/pull/61773

*文档类：#61124 收录 tokenjuice 输出压缩插件；#63547 收录 agent-manager；#64089 收录 xats。*

---

## 5. 功能需求趋势

- **子代理执行模型**：围绕 2.3.0 "始终后台执行"变更，出现恢复前台/阻塞式调用的需求（#64073、#64096），并伴随直接向子代理会话发 prompt 的能力（PR #64097）。
- **沙箱与执行权限**：#48411 持续获得点赞，PR #64093 用 MXC 落地 shell 沙箱，权限模型（如 #64051 插件工具白名单）成为配套焦点。
- **插件生态扩展**：插件权限按名授权、tree-sitter 自定义语言加载（PR #59284）、插件上下文注入（#61248）显示社区对插件能力深度与可控性的双重要求。
- **平台一致性（尤其 Windows）**：路径大小写（#52501）、后台服务重启循环（#64069）、PowerShell + Ollama（#64094）等，Windows 是当前缺陷密度最高的平台。
- **可观测性与错误提示**：移动端额度过期错误（#64079）、TUI 剪贴板假成功（#59664）反映"错误/状态如实透传"成为明确体验诉求。
- **性能**：PTY 重连导致的固定延迟（#64080）说明交互路径上的隐性等待是用户敏感点。

---

## 6. 开发者关注点

- **v2 / 2.3.0 升级阵痛**：子代理进度条不可见（#64021）、renderer 崩溃（#63944）、后台服务重启循环（#64069）等均在升级后出现，版本迁移的稳定性是当前最大痛点。
- **Windows 平台体验**：多个高评论 Issue 集中在 Windows 的路径处理、服务生命周期与本地模型（Ollama）集成。
- **免费额度沟通**：#59387 的 369 条评论显示免费层限制的提示语与错误类型需要更清晰的用户指引，而非仅靠单一汇总帖承接。
- **MCP 可靠性**：#52237 的"失败即永久失效"问题直接影响长时使用场景，社区自行推动了手动重连方案。
- **插件 API 稳定性**：OpenTUI 0.9.0（#63989）改变插件渲染器入参、插件工具权限无法按名配置，插件作者需关注兼容性。
- **权限与安全**：对精细授权与沙箱执行的诉求持续存在（#48411、#64051），并与新落地的沙箱 PR 相互印证。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-11-15）

## 1. 今日速览

今日无新版本发布，社区活动集中在 Issue 的集中清理：过去 24 小时内 33 条 Issue 获得更新，其中约 2/3 已关闭，涵盖 codemode、Windows 安装/进程管理、docs.pi.dev 链接 404 等多个问题。长期遗留问题仍在发酵，ChatGPT 登录下 GPT-6.1 Sol 上下文窗口仅显示 272K（#11021）和扩展注册 provider 的默认模型失效（#8810）仍为评论最热的开放 Issue。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#11021 [OPEN] openai：ChatGPT 登录下 GPT-6.1 Sol 仍按 272K 上下文处理，而账户模型目录为 500K**（14 条评论，👍8）
   最高的社区热度。同一账号的在线模型目录显示默认 500K，Pi 1.3.0 却只上报 272K，直接影响可用上下文。用户已明确复现路径。
   https://github.com/earendil-works/pi/issues/11021

2. **#8810 [OPEN] [bug] 扩展注册的 provider 在新会话中偶发忽略 defaultProvider/defaultModel**（11 条评论，👍5）
   通过 `pi.registerProvider` 注册的 provider 会导致新会话偶发落到其他 provider 的默认模型上，对依赖扩展提供模型的用户是配置可靠性问题，且已持续近三个月未关闭。
   https://github.com/earendil-works/pi/issues/8810

3. **#11950 [OPEN] [bug, prio:p0] 同一消息中的工具调用并发执行，read 可能早于 bash 结束**（7 条评论）
   P0 级并发缺陷：模型在同一 assistant 消息中同时发出 bash 与 read 时，read 会读到尚未写出的构建日志或输出图片。对 codemode 批处理场景影响明显。
   https://github.com/earendil-works/pi/issues/11950

4. **#9448 [OPEN] `pi auth check` 看不到扩展注册的 provider**（5 条评论，👍1）
   `auth check` 是脚本判断 provider 就绪的文档化方式，但对扩展 provider 报 `invalid_state`，影响非交互式流程的可用性。
   https://github.com/earendil-works/pi/issues/9448

5. **#12090 [OPEN] [durable] 允许取消处理器等待信号与截止时间**（4 条评论）
   希望 Stop 之后被挂起的工具能请求取消远端任务、保存检查点并等待信号或 deadline，属于 pi-durable 的语义增强需求。
   https://github.com/earendil-works/pi/issues/12090

6. **#11226 [OPEN] [bug] codemode 脚本声明名为 `tools` 的顶层变量时会在运行前失败**（3 条评论，👍1）
   命名冲突导致脚本无法执行。提报者同时说明自己刚从 Claude Code 迁移到 Pi，反馈具有一定代表性。
   https://github.com/earendil-works/pi/issues/11226

7. **#12154 [CLOSED] 最后压缩后超过约 12 万条目的会话无法加载：`buildContextEntries` 抛 RangeError**（2 条评论）
   长会话触发 `Maximum call stack size exceeded`，`ctx.getContextUsage()` 与 `pi --session` 启动均崩溃。已关闭，但对重度长会话用户是关键修复。
   https://github.com/earendil-works/pi/issues/12154

8. **#12184 [CLOSED] Google 适配器拒绝 Gemini 4 Hydrogen 公布的 xhigh 思考级别**（2 条评论）
   新模型第四档 `xhigh` 无法通过 `/thinking` 选择，反映新模型能力接入与 thinkingLevelMap 兼容性问题。
   https://github.com/earendil-works/pi/issues/12184

9. **#12140 [CLOSED] 无法在 models.json 中声明分类器（classifier）模型**（2 条评论）
   api 为 `typesafe-system-one` 的模型仍被注册为 chat 模型，说明 models.json 对非 chat 模型类型的声明能力不足。
   https://github.com/earendil-works/pi/issues/12140

10. **#12172 [CLOSED] bug(installer)：在 WSL 中运行的 install.sh 通过 /mnt/c PATH 识别到 Windows 安装**（2 条评论）
    WSL 会继承 Windows PATH，Windows 版 `pi` 启动脚本在 Linux 下可执行，安装器因此误判并提示重装/卸载，属于跨平台安装逻辑缺陷。
    https://github.com/earendil-works/pi/issues/12172

其他值得关注的已关闭项：#12167（codemode 在 ENOENT 后取消兄弟读操作时抛出未捕获 AbortError）、#12183（运行中升级 Node.js 导致 Windows 终端输入序列泄漏）、#12173 / #12192（docs.pi.dev 正文链接被重复加上 `/latest` 导致 404）、#12191（openai-codex HTTP 回退错误掩盖了先前的 WebSocket 失败）。

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR 更新，以下按重要程度列出：

1. **#11854 [OPEN] fix(coding-agent)：在 Windows 上杀掉 bash 命令的整个进程树**
   现有实现用 `taskkill /F /T /PID` 按父 PID 查找后代，会漏掉父进程已退出的子进程（例如 `(while true; ...)` 启动的循环）。该 PR 针对 Windows 工具进程清理不彻底的问题。
   https://github.com/earendil-works/pi/pull/11854

2. **#12178 [CLOSED] feat(coding-agent)：为 `ctx.ui.select` 增加 `description` 选项**
   `ExtensionSelectorComponent` 已支持 `description`，但未向上透传。作者用于需要为选项提供上下文的多选题工具。已关闭。
   https://github.com/earendil-works/pi/pull/12178

说明：数据中实际只有 2 条 PR，未凑满 10 条。

## 5. 功能需求趋势

- **模型与 provider 元数据正确性**：GPT-6.1 Sol 上下文窗口（#11021）、Gemini 4 Hydrogen 的 xhigh 级别（#12184）、models.json 中的分类器模型声明（#12140），共同指向模型目录、思考级别与模型类型声明需要更准确、更可配置。
- **扩展生态与可观测性**：扩展 provider 的默认模型（#8810）、`auth check` 可见性（#9448）、通过 `ctx.ui.setStatus` / 扩展状态接口发布原生 MCP 连接状态（#10871、#12074），显示社区希望扩展系统具备完整的运行时状态反馈。
- **codemode 执行语义**：并发 read/bash 顺序（#11950）、`tools` 变量冲突（#11226）、skill 读取在工具 UI 中被批处理隐藏（#12176）、批处理取消异常（#12167），说明 codemode 的调度与可读性仍是重点打磨方向。
- **长会话与持久化**：超大会话加载崩溃（#12154）、durable 取消处理器可等待信号和 deadline（#12090），反映长任务与可恢复执行的需求。
- **跨平台与安装体验**：Windows 进程树清理（#11854）、Windows 终端输入序列泄漏（#12183）、WSL 安装器误判（#12172）。
- **文档质量**：docs.pi.dev 的 `/latest/latest/` 重复前缀与 404（#12173、#12192）。

## 6. 开发者关注点

- **配置的确定性**：默认模型、上下文窗口、provider 可见性在扩展与登录场景下不一致，是开发者最直接的不信任来源。
- **工具调用的执行顺序**：P0 的 bash/read 并发问题会直接产生错误的文件读取结果，影响自动化脚本与构建日志分析。
- **长会话稳定性**：大条目数会话的 RangeError 属于阻塞级体验问题。
- **Windows / WSL 体验**：进程清理、终端渲染、安装器识别三处问题集中在同一平台，跨平台质量仍是短板。
- **新模型接入速度**：新模型上线后，思考级别、上下文窗口等能力没有同步到位，社区会很快提出。
- **文档链接可用性**：浅层但高频，已出现两个同类 404 Issue，修复成本低、收益明显。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-15）

## 1. 今日速览

今日核心主线是 **1.0 Preview 事件驱动 agent loop 内核逐步并入 main**：#17045 以逐 surface 方式落地，今日新增 headless（#17336）与 Ink TUI（#17362）两个默认启用 PR。同日发布 v0.27.4 及配套 desktop / SDK 版本，并新增 Managed Agent 客户端文件系统注册、Web Terminal 等能力。CI 稳定性与依赖安全问题仍是社区讨论量最大的议题。

## 2. 版本发布

- **v0.27.4**（CLI 主版本）：release notes 正文未提供具体变更明细。
- **desktop-v0.27.4**：包含 `feat(managed-agent): register client filesystems into managed sessions`（#16844）及 web-shell 测试相关改动。
- **sdk-typescript-v0.1.34**：捆绑 CLI 0.27.4，由与 SDK 同分支/ref 的源码构建。

Highlights 中的重点能力：**Managed Agent 会话可访问已授权的本地目录，并可在不持久化凭证与路径的前提下打开交互式 Managed Web Terminal**（#16844、#16866）。

## 3. 社区热点 Issues

1. **#14724** Main CI 失败：Managed Agent gate 未识别到测试，已累计 **381 条评论**，为当前最热议题，反映 gate 判定逻辑长期未收敛。
2. **#13078** 每日依赖 CVE 审计失败（52 条评论），与 #17099、#10850 共同构成依赖安全主线。
3. **#17045**（已关闭）1.0 Preview loop kernel 分片落地 main 的跟踪 issue，是整个 1.0 迁移的总纲。
4. **#17099** 追踪 11 月 11 日 Snyk 扫描的 29 项发现，涉及经 web-shell/SDK 引入的 13 个 npm 包及分阶段升级。
5. **#16514** 外部 PR CI 隔离：外部 PR 可执行贡献者控制的 CI 脚本，复用 self-hosted runner 存在凭证泄露与残留风险。
6. **#16425**（已关闭）Workflow agent 的权限审批请求不渲染，导致运行无限挂起；0.26.6 观察到、0.26.8 复现。
7. **#17332**（P1）auto 模式下 subagent 并行批量含多个审批请求时仅渲染一个对话框，其余孤立并冻结批次——与 #16425 同属审批渲染缺陷族。
8. **#15512** 外部 Hosted Workspace profile（phase 2），为 Broker 管理的 worker 引入托管工具能力。
9. **#15185** E2E 失败：`skill-hooks-resume` 中首会话被拦截的 gate 在 `--continue` 后仍拦截。
10. **#17298** 今日新报 E2E 失败（tui-memory-manager 等多处），标注为临时性报告，若 tip 运行通过可关闭。

此外，今日集中出现多条 **deflake 类 issue**（#17363、#17366、#17344、#17360、#17348、#17339），由 CI Failure Patrol 自动触发重跑并判定是否为真 bug。

## 4. 重要 PR 进展

1. **#17362** `feat(core)`：Ink TUI 默认运行在共享 agent loop 上，为 #17045 的 step 2（ink 条目）。
2. **#17336** `feat(core)`：headless 会话（`-p`、stream-json）默认运行在共享 agent loop 上（#17045 的 headless step 2）。
3. **#17228** `feat(web-shell)`：Codex 风格的托管理 worktree 会话，默认开启、detached，支持分支与 handoff。
4. **#17323** `feat(skills)`：SKILL.md 可通过 `mcp:` frontmatter 声明依赖的 MCP server，激活时提示未配置项。
5. **#17320** `feat(core)`：为模型提供 `get_context_remaining` 工具与自触发压缩路径。
6. **#17377** `feat(core)`：移植 Qoder 预览线的模型可用性 ledger，作为 fallback chain 的首个能力（Option B 集成决策）。
7. **#17255** `feat(core)`：精简 edit 工具输出，并为单文本编辑增加授权式 stale 恢复。
8. **#16023** `feat(managed-agent)`：跨会话共享常驻外部 Workspace，避免每轮会话重复 provision。
9. **#17347** `docs(users)`：新增 Web Shell 语音输入、Qwen Live 实时语音对话、图像生成三篇用户指南。
10. **#17342 / #17373 / #17370**：分别稳定 mem0 累积截止时间删除测试、web-shell 大文件 smoke 测试与 git-branches LF fixture，属测试稳定性清理。

## 5. 功能需求趋势

- **1.0 架构迁移**：共享 agent loop 内核按 surface 逐一转正（headless、Ink TUI 已就位，ACP、OpenTUI 等尚未切换），是当前最强的结构性方向。
- **Multi-agent 与审批交互**：workflow agent、subagent 批量审批的 UI 渲染问题反复出现（#16425、#17332），属 roadmap/multi-agent 下的高优先级缺口。
- **托管/外部运行时**：Managed Agent、Hosted Workspace、runtime-broker、DingTalk adapter 等构成"外部 worker + 托管会话"能力群（#16844、#15512、#16023、#17173）。
- **安全与 CI 隔离**：CVE 审计、npm 扫描结果跟踪、外部 PR 一次性 runner 隔离。
- **Web Shell 体验**：worktree 会话、Goal 状态可读性（#17349）、语音/Live/图像生成文档化。

## 6. 开发者关注点

- **审批对话框渲染缺陷是最高痛点的功能性 bug**：状态栏显示待审批但对话框不出现，或批处理中仅渲染最后一个请求，直接导致会话挂起。
- **CI 噪声过高**：flaky 测试触发大量自动 deflake issue 与 PR，dev-bot 与 review-bot 占据了 issue 列表的相当比例。
- **依赖安全积压**：#13078（自 2026-09-30 持续失败）、#10850、#17099 表明 CVE 审计与依赖升级路径需要系统性收敛，而非逐个修补。
- **self-hosted runner 的信任边界**：外部 PR 执行贡献者脚本的风险已被明确提出，需要一次性隔离执行环境。
- **Windows 与跨平台测试一致性**：`core.autocrlf` 导致 git-branches 测试失败（#17368），fixture 而非被测代码是根因。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-15）

> 数据来源：github.com/Hmbown/DeepSeek-TUI。今日过去 24 小时内无新版本发布；Issues 更新 6 条（另 #7344、#7343 更新于 11-14），PR 更新 1 条。以下条目数量少于模板要求的 10 条，因数据源实际仅提供上述条目，未做补充或推测。

## 1. 今日速览

今日无新版本。社区动态集中在稳定性与终端兼容性：状态/记账层的失败路径（诊断日志缺因、用量记录容量边界）占主导，另有 Windows 端密钥脱敏的性能问题与 Linux 终端（GNOME/VTE）的显示回退问题。唯一的 PR 为文档类，补充混合 Claude bundle 与宿主 hook 边界的说明。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

1. **#7328 Provider 失败时诊断日志无根因，错误卡片丢失已输入代码**（OPEN，更新 11-15，评论 1）
   - 重要性：Provider 请求分发后失败时，原因仅以英文散文形式存在于会话记录与 `codewhale receipts`，**从未进入诊断日志**，且该散文是唯一「机器可读」形态。直接影响问题定位与自动化处理。
   - 社区反应：1 条评论，标签涉及 tui/install/core/state。
   - 链接：codewhale-hq/Codewhale Issue #7328

2. **#7348 保留 256 条用量记录后，下一轮在分发前即失败；容量处理声称继续，retain 却拒绝记录**（OPEN，创建/更新 11-15）
   - 重要性：本地记账的准入失败导致模型尚未调用即结束回合，报错为 `usage publication has no reserved native journal slot`。属于可复现的硬性容量边界缺陷。
   - 社区反应：暂无评论，标签含 os:windows。
   - 链接：codewhale-hq/Codewhale Issue #7348

3. **#7347 密钥脱敏在每个模型请求上运行，普通文本下也偏慢**（OPEN，enhancement，创建/更新 11-15）
   - 重要性：`prepare_model_bound_request`（`crates/engine/src/client.rs`）每次请求都把对话中所有工具结果重新过一遍 `redact_model_bound_secrets`，成本随调用次数与内容增长而累积。属性能优化方向的明确切入点。
   - 社区反应：暂无评论。
   - 链接：codewhale-hq/Codewhale Issue #7347

4. **#7345 Codewhale MCP 已收录于 MCP ServerList**（OPEN，area:mcp，创建/更新 11-15）
   - 重要性：第三方目录主动收录并提出在 README 添加徽章，是生态可见度与集成的正向信号，决策点在维护者是否接受。
   - 社区反应：暂无评论。
   - 链接：codewhale-hq/Codewhale Issue #7345

5. **#7344 TUI：退出后 GNOME Terminal 背景保留自定义 Nord 主题色**（OPEN，os:linux，更新 11-14）
   - 重要性：退出后终端配置未恢复原配色（背景变为 `#ECEFF4`、前景 `#2E3440`），影响 Linux 桌面用户的日常使用体验。
   - 社区反应：暂无评论。
   - 链接：codewhale-hq/Codewhale Issue #7344

6. **#7343 TUI：每次窗口获得焦点都全屏擦除重绘，在不支持 DEC 2026 的终端上闪烁（gnome-terminal/VTE）**（OPEN，os:linux，更新 11-14）
   - 重要性：焦点变化即触发 `CSI 2J` 全屏擦除并用 DEC 2026 同步更新标记包裹重绘；不支持该序列的终端会出现闪烁。属终端兼容性渲染问题。
   - 社区反应：暂无评论。
   - 链接：codewhale-hq/Codewhale Issue #7343

## 4. 重要 PR 进展

1. **#7346 docs：说明混合 Claude bundle 与宿主 hook 边界**（OPEN，documentation, area:localization, contributor:external）
   - 内容：在 `docs/CLAUDE_PLUGIN_COMPAT.md` 及 `docs/zh_hans/CLAUDE_PLUGIN_COMPAT.md` 中新增具体的混合 bundle 示例，演示如 `deja-vu` 这类 bundle 的结构与边界。
   - 意义：涉及中文文档（localization），有助于插件兼容性说明的落地。
   - 说明：过去 24 小时内仅此 1 条 PR 更新。
   - 链接：codewhale-hq/Codewhale PR #7346

## 5. 功能需求趋势

基于本次提供的 Issues 归纳（均非新功能提案，多为缺陷与优化）：

- **可观测性与错误诊断**：#7328 指向失败根因需结构化进入诊断日志，而非仅存于英文散文。
- **状态/记账层的健壮性**：#7348 暴露用量记录容量与准入逻辑的不一致。
- **性能优化**：#7347 要求避免对每次请求重复执行全量脱敏。
- **跨平台终端兼容性**：Linux 侧集中出现（#7344 配色恢复、#7343 重绘闪烁），Windows 侧出现在 #7348、#7347 标签中。
- **生态集成**：#7345 反映第三方 MCP 目录的收录意愿。

## 6. 开发者关注点

- **失败路径可诊断性**：错误原因缺乏机器可读的结构化记录，且错误卡片丢失用户已输入的代码，抬高排障成本（#7328）。
- **边界条件导致回合中断**：达到 256 条用量记录后，下一轮在分发前即失败，且容量处理与 retain 行为自相矛盾（#7348）。
- **重复计算带来的性能损耗**：每请求重新脱敏全部工具结果，成本随对话增长（#7347）。
- **终端状态污染与闪烁**：退出后不恢复终端配色、焦点切换全屏重绘（#7344、#7343），集中在 GNOME Terminal/VTE 环境。
- **文档本地化与集成生态**：唯一 PR 聚焦 Claude 插件兼容文档及中文版本，第三方 MCP 目录提出收录徽章（#7346、#7345）。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*