# AI CLI 工具社区动态日报 2026-11-11

> 生成时间: 2026-11-11 17:55 UTC | 覆盖工具: 9 个

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

# AI CLI 工具社区横向对比分析报告（2026-11-11）

## 1. 生态全景

当前 AI CLI 工具生态已从“能力竞赛”转入“工程化与信任建设”阶段：今日 7 个工具中仅 3 个有新 Release，社区讨论却密集指向回归问题、权限语义、计费透明度与会话生命周期等成熟度议题。Desktop/远程控制与 Windows 平台成为跨工具的共同脆弱面，多个社区出现“自动更新即回归”的集中反馈。与此同时，子代理/技能可控性、MCP 生态兼容、沙箱隔离构成新一轮能力竞争焦点。整体看，头部工具（Codex、Claude Code、OpenCode）的社区规模已足以形成独立的主帖治理模式，而 Qwen Code、Kimi/DeepSeek 系正以 ACP、托管 Agent 等路线切入差异化赛道。

## 2. 各工具活跃度对比

| 工具 | Release（24h） | Issues（源材料覆盖） | PR（24h 更新） | 备注 |
|---|---|---|---|---|
| Claude Code | 无 | 10 条热点（另列 4 条） | 1 条（CLOSED） | 无 Release；热点最高 #27302（307 评论/461 👍） |
| OpenAI Codex | 7 个（6 alpha + `rust-v0.167.1`） | 10 条热点（另列 2 条） | 10 条（均 CLOSED，同机器人提交） | Release 说明极简 |
| Gemini CLI | 2 个（v0.69.0-preview.0、v0.68.0） | 10 条热点 | 10 条 | 二进制/媒体处理修复集中 |
| GitHub Copilot CLI | 2 个（v1.0.110-0、-1） | 源材料展示 20 条（24h 共更新 37 条） | 1 条（OPEN，文档类） | PR 活动极低 |
| Kimi Code CLI | 无 | 无（24h 无活动） | 无 | — |
| OpenCode | 无 | 10 条热点（另列 4 条） | 10 条 | 免费额度主帖 353 评论 |
| Pi | 无 | 10 条热点（另列 3 条） | 10 条（多为 CLOSED 修复） | P0 provider 兼容问题 |
| Qwen Code | 4 个（v1.0.0-preview、v0.27.2、preview.0、SDK v0.1.32） | 10 条热点 | 11 条 | CI 失败追踪达 317 评论 |
| DeepSeek TUI | 无 | 10 条热点（另列 3 条） | 10 条（多条已合入） | 集中在 v0.10.3 验收 |

> 注：Issues 列仅计源材料展示的热点条目，非工具全量；PR 列的“10 条”为日报选取上限，不代表真实总数。

## 3. 共同关注的功能方向

**① 权限模型的可控性与一致性** —— 覆盖面最广的跨工具议题。
- Claude Code：Bypass 模式仍弹审批（#103832）、allow 规则无法清除审批卡（#107454）
- Codex：Full access 控件消失或“名义生效、实际受限”（#60058、#58677）
- Copilot CLI：`/allow-all` 无法抑制 bash 提示（#2955）
- DeepSeek TUI：ACP 会话 `sandbox_mode/ask` 被忽略（#6992）
共性诉求：UI 展示与真实执行策略严格一致，auto/bypass 语义可预期。

**② 沙箱与文件系统隔离**
- OpenCode：#2242（112 评论/84 👍，对标 macOS seatbelt）为全生态 👍 最高安全诉求
- DeepSeek TUI：#4955 要求零沙箱/可降级
- Gemini CLI：#19873 沙箱与 bash 意图路由
- Codex：#19676 bwrap 内 GPU 不可用

**③ 计费/配额透明度**
- OpenCode：#59387 主帖 353 评论，付费账户误报限流（#63159、#62529）
- Codex：#41220 元追踪器持续约两个半月
- Copilot CLI：#4802 配额被清空、付费后仍无模型

**④ 子代理/技能的可控性**
- Gemini CLI：手动激活技能（#21165）、模型不主动调用（#21968）、误报成功（#22323）、挂起（#21409）
- Pi：扩展承载架构之争（#10386）、MCP 工具跨会话丢失（#11996）
- Codex：子代理独立模型选择（PR #60773）

**⑤ MCP 生态兼容**
- Claude Code：本地 stdio MCP Apps 渲染回归（#108122）
- Copilot CLI：OAuth issuer 尾斜杠（#4606）、协议版本锁死（#4888）、stdio 服务器被静默丢弃（#4920）
- Codex：MCP 配置刷新未应用会话覆盖（PR #60730）、refresh token 无限重试（#39054）

**⑥ 静默失败与可诊断性**
- Pi：bash 输出全丢（#12062）、max_tokens 钳到 1（#11988）
- OpenCode：DNS 失败导致模型段无声消失（#63323）
- Qwen Code：lint 空转却以 0 退出（#16954）

**⑦ Claude Code 生态兼容作为迁移抓手**
- OpenCode：#12472 原生兼容 Claude Code Hooks（24 评论/42 👍），此前已兼容 CLAUDE.md 与 skills
- DeepSeek TUI：将 Claude Code、Codex、Kimi、Qwen Code 作为外部 Agent 注册运行（#7279、#7293）

**⑧ Windows / 跨平台质量**
- Codex：20 条热门 Issue 过半带 `windows-os`
- Copilot CLI：剪贴板、小键盘、Entra 登录崩溃多点集中
- Claude Code：#96918、#97341、#93239、#109087 集中于 Windows
- DeepSeek TUI：中文输入法（#2323）、`/undo` Windows 验收未闭环（#6970）

## 4. 差异化定位分析

| 工具 | 功能侧重 | 技术路线信号 | 目标用户画像 |
|---|---|---|---|
| **Claude Code** | Desktop 体验与 Remote Control、多账号身份体系 | 以 CLI 能力为基准反向补齐 Desktop（主题、排队、快捷键） | 重度桌面/跨设备协作的专业开发者；需求以 👍 投票表达（#27302 461 👍） |
| **OpenAI Codex** | 浏览器/Computer Use 自动化、远程 SSH、Cloud 环境 | Rust 类型化工具链（`ContextWindowId`、schemars 派生 schema）、Git credential helper | 团队级 Cloud/远程工作流用户；内部工具链整理密集 |
| **Gemini CLI** | Agent/子代理行为、AST 感知工具链、ACP 对齐 | 与 CLI 行为对齐 ACP（截断、并行调度、session/close）；Gemini 3 bash 亲和性沙箱提案 | 非交互客户端/SDK 集成方；重视代码库映射精度 |
| **GitHub Copilot CLI** | 权限与实验性凭据遮蔽、MCP 接入 | 保守迭代（单版本 patch 为主），PR 活动极低 | 企业/Windows-WSL 环境开发者；付费配额敏感 |
| **OpenCode** | 免费层运营、Agent 沙箱、Claude Code 兼容 | 独立进程守护（PTY daemon）、provider 发现逻辑、v2 迁移 | 免费/低价尝鲜用户与自建 provider 者；社区投票驱动强 |
| **Pi** | 多 provider 适配正确性、扩展生态、终端渲染 | provider catalog 语义正确性、Radius 存储后端、codemode 链式处理 | 扩展开发者与终端极客（Kitty 协议、剪贴板、TUI 图像） |
| **Qwen Code** | Managed Agent 托管会话、Web Shell 宿主平台 | Java 控制面 + Runtime worker、Browser WS→PTY 中继、外部工作区执行 | 托管式/嵌入式 agent 平台方；1.0 预览期 |
| **DeepSeek TUI** | ACP 优先、多 provider 兼容、国际化 | 以 ACP 将外部 Agent 纳入自身会话；gix 替代 git CLI（目标 v0.11） | 本地中文用户与多 Agent 编排者；外部贡献者活跃 |

**关键分化点**：Codex 与 Qwen Code 走“托管/远程执行 + 类型化工程”路线；OpenCode、Pi、DeepSeek TUI 走“多 provider 兼容 + 开放扩展”路线；Claude Code 则以 Desktop 体验与身份体系构建壁垒，其生态正被 OpenCode 通过 hooks 兼容主动蚕食迁移成本。

## 5. 社区热度与成熟度

**高热度社区（规模化但摩擦显性）**
- **OpenCode**：单帖 353 评论 + 112 评论/84 👍 安全诉求，热度最高，且已形成“主帖集中收口”的治理模式，但计费误判对付费转化构成直接威胁。
- **Claude Code**：461 👍 的需求帖显示投票规模领先，但回归问题密集（多条带 `has repro`）指向 Desktop 自动更新的稳定性欠账。
- **Codex**：Windows 问题成体系（过半 Issue 带 `windows-os` 标签），元追踪器长期 OPEN 缺阶段性结论，易积累不满；但 #56655 关闭获 86 👍，说明明确修复结论能被积极认可。

**快速迭代阶段（工程投入密集）**
- **Qwen Code**：v1.0.0-preview 发布，Managed Agent 方向 11 条 PR 同日推进（Web 终端、文件系统挂载、外部工作区）；但 CI 信噪比是最大痛点——#14724 达 317 评论、#16371 指出“夜间红为轮换性时序失败”，属于基建治理滞后于功能速度的典型形态。
- **Pi**：P0 问题（#12019、#11999）与当日合入修复 PR 数量均高，`robopipi[bot]` 驱动的修复闭环较快，处于“问题发现-修复”高频循环。
- **DeepSeek TUI**：外部贡献者（luochen211、Aboysky）集中提交修复批次，多条已合入；但大量 Issue 停留 `status:awaiting-release`，跨平台验收成为发布瓶颈。

**低活跃/静默**
- **Kimi Code CLI**：过去 24 小时无活动。
- **GitHub Copilot CLI**：Issue 更新 37 条但 PR 仅 1 条文档类变更，修复闭环可见性弱（社区对“无关闭说明、无关联 PR”表达不满），迭代节奏最保守。

**成熟度判断**：Codex 与 Gemini CLI 的 PR 侧呈现“类型化/契约化”工程特征（schemars 派生 schema、快照覆盖、ACP 对齐），成熟度最高；Qwen Code、Pi 功能推进最快但基建与验收承压；OpenCode 社区规模最大但计费信任是成熟度短板。

## 6. 值得关注的趋势信号

**① “自动更新即回归”成为系统性风险**
Claude Code（#108122、#103335、#107454、#93239、#108996）、Codex（#51524、#57641、#60047 P0 远程不可用）均以“更新后开始失败”为触发条件。对开发者的参考价值：在生产工作流中应锁定版本、延后自动更新，并关注带 `has repro` 的 Issue 作为先行指标。

**② 权限 UI 与实际策略脱节是最高频的信任类痛点**
Codex 的 Full access 名义/实际不一致、Claude Code 的 bypass 仍弹卡、Copilot 的 allow-all 失效，共同指向“用户无法从界面判断真实权限边界”。这意味着无人值守自动化目前仍不可全信，需在外部加审计层。

**③ 计费可观测性正从边缘问题升级为核心留存问题**
OpenCode 付费账户 30% 用量即限流、ChatGPT 用量有余却报 `subscription_sharing_usage_limit_exceeded`、Copilot 配额清空——付费用户对误报零容忍。技术决策者应把配额同步逻辑纳入选型评估，而非仅看能力。

**④ 沙箱“过刚”与“缺失”两极分化**
OpenCode 缺沙箱导致用户不敢在敏感目录运行（84 👍），DeepSeek TUI 沙箱过刚干扰日常 shell（#4955），Codex bwrap 内 GPU 不可用。趋势是沙箱需**可配置、可降级、可解释**，而非单一开关。

**⑤ 子代理可靠性取代“能否用”成为新评价维度**
Gemini CLI 的误报成功/无限挂起、Qwen Code 的验证-修复循环提案（#16941）、Pi 的扩展工具跨会话丢失——社区从“agent 能改”转向“改完能否可靠自证正确”。programmatic tool calling、clean-context verifier 等提案值得提前跟踪。

**⑥ ACP 正成为多 Agent 互操作的事实候选标准**
DeepSeek TUI 以 ACP 纳入 Claude Code/Codex/Kimi/Qwen Code，Gemini CLI 密集对齐 ACP 与 CLI 行为（#30234、#30236、#30232）。对平台方的参考：非交互客户端体验将取决于 ACP 侧的能力完整度，而非仅 CLI。

**⑦ 生态兼容的“迁移成本战”已开打**
OpenCode 兼容 CLAUDE.md/skills 后瞄准 hooks（42 👍），DeepSeek TUI 直接托管外部 Agent 会话。Claude Code 的生态护城河正被以“兼容其格式”的方式低成本渗透，这对工具选型意味着切换成本将持续下降。

**⑧ MCP 成熟度仍是集成摩擦主源**
OAuth 动态客户端注册、issuer 匹配、协议版本兼容、stdio 服务器生命周期——Copilot CLI 的集成类问题频率已高于核心推理功能。建议在 MCP 接入方案中预留协议降级与重连策略。

---

*本报告仅基于所提供 2026-11-11 各工具社区动态摘要，未补充源材料之外的数据、版本或指标；各工具 Issues/PR 数量为日报展示条目数，非仓库全量。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-11）

> 数据说明：本次提供的 PR 列表未包含有效评论数/点赞数（均为 `undefined` 或 0），PR 排序无法据评论量复核；Issues 评论数为实际数据。下文 PR 的“关注度”以更新活跃度、修复对象影响面和关联 Issue 为依据，均标注为推断。

## 1. 热门 Skills 排行

1. **skill-creator 修复系列**（#1298、#1681、#1997、#556、#1352）
   功能：官方 Skill 创建/评估工具链的缺陷修复与增强。
   热点：触发评估（trigger eval）在并行 worker 下出现系统性假阴性；Windows 下 `select()` 失败；YAML frontmatter 解析偏差；`package_skill.py` 无法独立执行。
   状态：PR #1298、#1681、#1997 均为 OPEN；Issue #556、#1352 为 OPEN。
   链接：https://github.com/anthropics/skills/pull/1298 ｜ https://github.com/anthropics/skills/pull/1997 ｜ https://github.com/anthropics/skills/issues/1352

2. **docx 文档处理修复**（#1792、#1734、#2018）
   功能：Word 文档修订/批注处理脚本。
   热点：LibreOffice 超时被误报成功、孤儿批注检测、`merge_runs.py` 生成无效 XML（命名空间丢失）。
   状态：PR #1792、#1734 为 OPEN；Issue #2018 为 OPEN。
   链接：https://github.com/anthropics/skills/pull/1792 ｜ https://github.com/anthropics/skills/issues/2018

3. **mcp-builder**（#1742）
   功能：MCP 服务器构建 Skill。
   热点：适配 `mcp>=2.0.0` 中 `streamable_http_client` 重命名与自定义 header 配置方式变更。
   状态：OPEN（关联 #1668）。
   链接：https://github.com/anthropics/skills/pull/1742

4. **webapp-testing**（#1980、#1976）
   功能：Web 应用测试脚本。
   热点：`shell=True` 带来的命令注入风险、`element_discovery.py` 对 textarea/select 的识别错误。
   状态：均为 OPEN（分别关联 #1891 等）。
   链接：https://github.com/anthropics/skills/pull/1980 ｜ https://github.com/anthropics/skills/pull/1976

5. **claude-api 文档维护**（#1730、#1950、#1487）
   功能：Claude API 使用指南 Skill。
   热点：失效文档链接修复、Python SDK 1.1.0 后 `pause_turn` 自动恢复的指引更新；Issue #1487 反映该 Skill 单次注入约 156k tokens、耗尽上下文窗口。
   状态：PR #1730、#1950 为 OPEN；Issue #1487 为 OPEN。
   链接：https://github.com/anthropics/skills/pull/1950 ｜ https://github.com/anthropics/skills/issues/1487

6. **xlsx 外部链接修复**（#2019）
   功能：Excel 重算脚本。
   热点：`external_links_at_risk` 遗漏工作表级定义名与别名，产生假阴性。
   状态：OPEN（关联 #2013）。
   链接：https://github.com/anthropics/skills/pull/2019

7. **新增原创 Skill 提案**（#1245、#1703、#525、#1771、#1615、#514）
   功能：Notion 规格转实现、Markdown 转视频配音、Pyxel 复古游戏、智能合约审计（TON）、SCNet HPC、文档排版质检。
   热点：覆盖垂直场景，但评论数据缺失，社区讨论热度无法量化。
   状态：均为 OPEN。
   链接：https://github.com/anthropics/skills/pull/1703 ｜ https://github.com/anthropics/skills/pull/525 ｜ https://github.com/anthropics/skills/pull/514

## 2. 社区需求趋势

- **信任边界与安全治理（最热）**：#492（46 条评论）指出社区 Skill 以 `anthropic/` 命名空间分发、冒充官方 Skill；#412 曾提案 agent-governance 安全模式（已关闭）。安全是社区讨论最集中的议题。
  https://github.com/anthropics/skills/issues/492 ｜ https://github.com/anthropics/skills/issues/412
- **组织级 Skill 分发与共享**：#228（17 条评论、8 👍）希望 Claude.ai 支持组织内共享 Skill 库，替代手工上传 `.skill` 文件；#189 反映插件内容重复占用上下文。
  https://github.com/anthropics/skills/issues/228 ｜ https://github.com/anthropics/skills/issues/189
- **Skill 评估与质量控制**：#556（13 条评论、7 👍）、#1352 聚焦触发率评估失真；#202（已关闭）要求 skill-creator 从“文档式说明”转为“可执行指令”；#1385 提案三阶段推理质量门控。
  https://github.com/anthropics/skills/issues/556 ｜ https://github.com/anthropics/skills/issues/1385
- **上下文与 Token 效率**：#1487 揭示 claude-api Skill 单次注入约 156k tokens。
  https://github.com/anthropics/skills/issues/1487
- **Skill 描述可发现性**：#2064 指出 `theme-factory` 描述只说明“做什么”而缺少“何时使用”，影响自动触发。
  https://github.com/anthropics/skills/issues/2064
- **平台/账户能力**：#1143（15 👍）请求更改账户邮箱，属于平台功能诉求而非 Skill 方向；#62 反映 Skill 丢失问题。
  https://github.com/anthropics/skills/issues/1143

## 3. 高潜力待合并 Skills

以下 PR 更新活跃、修复目标明确，具备近期落地潜力（均为 OPEN，合并时间无法从数据推断）：

- **#1975 / #1976 / #1977**（gerardrecinto）：小型确定性修复——ppt.py 的 `--cols` 参数校验、textarea/select 识别、`wrapAround()` 取模修正，均关联已存在的 Issue（#1809、#1891、#1897），更新至 2026-10-18 至 10-27。https://github.com/anthropics/skills/pull/1975
- **#1980**（Pcmhacker-piro）：移除 webapp-testing 中 `shell=True`，安全类修复，更新至 2026-11-01。https://github.com/anthropics/skills/pull/1980
- **#1950**（dhairyajangir）：跟进 Python SDK 1.1.0 的 `pause_turn` 恢复能力，更新至 2026-11-10，为列表中最新的 PR。https://github.com/anthropics/skills/pull/1950
- **#1997 / #1681**（skill-creator 系列）：分别修复 YAML 解析与脚本直执行问题，后者更新至 2026-10-24。https://github.com/anthropics/skills/pull/1681
- **#2019**（xlsx 外部链接）：关联 #2013，更新至 2026-11-03。https://github.com/anthropics/skills/pull/2019
- **#2108**（文档状态澄清）：更新至 2026-11-03，涉及 README 中文档类 Skill 快照状态的说明。https://github.com/anthropics/skills/pull/2108

## 4. Skills 生态洞察

**社区当前最集中的诉求是“让 Skills 可信且可被正确触发”——即通过命名空间治理、评估工具修复和元数据规范，解决信任边界、触发率失真与上下文膨胀三大基础问题；相比之下，新增垂直 Skill 的呼声明显弱于对官方基础设施的修复需求。**

---

# Claude Code 社区动态日报（2026-11-11）

> 数据来源：github.com/anthropics/claude-code

## 今日速览

过去 24 小时无新版本发布，社区讨论完全集中在 Issue 区。Desktop 应用（尤其 Code 标签页和 Remote Control）成为问题集中爆发的区域：权限审批、MCP 组件渲染、会话队列与重连等多项回归同日更新。需求侧最受关注的是多 Connector 账号支持（#27302），累计 307 条评论、461 个 👍，热度远超其他条目。

## 版本发布

过去 24 小时内无新 Release，本节省略。

## 社区热点 Issues

1. **#27302 多 Connector 账号支持（OPEN，307 评论 / 👍461）**
   允许同一 Connector 绑定不同账号，覆盖 Claude 与网页版 Claude Code。这是今日互动量最高的需求，持续从 2026-02 讨论至今，反映多账号/多工作区场景的普遍性。
   https://github.com/anthropics/claude-code/issues/27302

2. **#108122 Desktop 4.23118.0 后本地 stdio MCP Apps 不再渲染（OPEN，10 评论）**
   自动更新后 `ui://` 资源在 Chat 中不再被读取，工具被调用但仅返回文本。属于明确的 MCP 回归，影响依赖本地 MCP 服务器构建 UI 的开发者。
   https://github.com/anthropics/claude-code/issues/108122

3. **#103832 Bypass 模式下 start_session 仍需两次审批（OPEN，13 评论）**
   `mcp__ccd_session__start_session` 在 Bypass 权限模式下依然弹出对话框，且 own_initiative 需二次批准，削弱了 Bypass 模式的意义。
   https://github.com/anthropics/claude-code/issues/103832

4. **#107454 Remote Control 写工具在 auto 模式下弹审批卡（OPEN，7 评论）**
   自 11 月 4 日起，`claude-code-remote` 的写调用在 auto 模式下被服务端审批卡拦截，且 allow 规则无法清除，直接影响跨会话自动化。
   https://github.com/anthropics/claude-code/issues/107454

5. **#108996 Desktop 自动更新重启导致 Remote Control 会话丢失（OPEN，2 评论 / 👍1）**
   macOS 每次自动更新重启后，本地 Code 会话不再通过 Remote Control 提供，iOS 端将其归入 Archived 且无法恢复。
   https://github.com/anthropics/claude-code/issues/108996

6. **#103335 Code 标签页 Tab 提示建议消失（OPEN，20 评论 / 👍24）**
   自 2026-10-13 更新后，回复后的建议提示不再出现，社区评论数在本批中排第三，属于高频使用的交互功能退化。
   https://github.com/anthropics/claude-code/issues/103335

7. **#93239 Enter 键从"排队"变为"中断"（OPEN，6 评论）**
   Windows 端回归：Claude 工作时按 Enter 打断而非排队。与 #92988、#96608 同属桌面端消息排队/快捷键体系缺失问题。
   https://github.com/anthropics/claude-code/issues/93239

8. **#92988 Desktop 无法在回合结束前排队消息（OPEN，8 评论）**
   指出 CLI 有 `chat:queueSubmit`，Desktop 无对应能力，Ctrl+Enter 被绑定为 Interrupt，属于功能对等缺口。
   https://github.com/anthropics/claude-code/issues/92988

9. **#103931 空闲压缩未在 200K+ 空闲会话触发（OPEN，2 评论）**
   与 2.1.299 changelog 描述不符：200K+ token 会话空闲约 54 分钟未见压缩，在 2.1.305 上受控复现失败，关系到缓存过期与成本。
   https://github.com/anthropics/claude-code/issues/103931

10. **#79305 Desktop 支持自定义主题/强调色（OPEN，32 评论 / 👍95）**
    请求与 CLI 自定义主题系统对齐，当前仅亮/暗/高对比三档，是桌面端体验类需求中 👍 最高的一条。
    https://github.com/anthropics/claude-code/issues/79305

其余值得留意的条目：**#96918**（CLOSED）Windows Desktop 桥接"未连接"导致云会话与定时任务失败；**#97341** Cowork 定时任务设置在 Windows 无法保存；**#109087** Windows Alt+V 粘贴图片因每次调用 PowerShell 耗时约 1.5 秒；**#109065** btw 侧聊派生的会话在侧边栏挂错父级。

## 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新，未能凑满 10 条，以下为全部内容：

1. **#26230 Feature/path validation hooks（CLOSED）**
   作者 gabrilend。拦截 agent 工具调用中的相对路径，以更好支持安全沙箱。该 PR 已关闭，未见合并说明；对关注 agent 沙箱与路径安全的开发者有参考价值，但不应视为已落地能力。
   https://github.com/anthropics/claude-code/pull/26230

## 功能需求趋势

- **多账号与身份体系**：#27302 以绝对热度领先，同一 Connector 多账号、跨会话身份边界是当前最大诉求；#108830 的身份验证表单重定向循环也属同一方向。
- **Desktop 与 CLI 功能对等**：自定义主题（#79305）、消息排队与快捷键可配置（#92988、#96608）、Enter 行为（#93239）反复出现，社区明确以 CLI 现有能力作为参照系。
- **权限模型精细化**：Bypass 模式下仍弹审批（#103832）、allow 规则无法清除审批卡（#107454），显示用户希望 auto/bypass 语义更一致、规则优先级更可预期。
- **Remote Control 与跨设备连续性**：更新重启丢失会话（#108996）、桥接断开（#96918），远程控制可靠性是桌面端新出现的需求方向。
- **MCP 生态兼容**：本地 stdio 服务器的 MCP Apps 渲染回归（#108122），影响以 MCP 构建自定义 UI 的开发者。
- **终端与性能细节**：kitty graphics 探测仅按名称识别 kitty/ghostty（#99566）、Windows 图片粘贴延迟（#109087），反映 TUI 兼容性与平台性能仍被持续关注。

## 开发者关注点

- **回归问题密集出现在 Desktop 更新后**：#108122、#103335、#107454、#93239、#108996 均指向某次自动更新引入的行为变化，且多条带 `has repro`，说明自动更新带来的稳定性风险是当前最集中的痛点。
- **权限与自动化冲突**：用户设置 Bypass/auto 后仍被审批卡打断，规则又无法覆盖，直接阻碍无人值守流程。
- **会话状态可靠性**：排队、父级归属（#109065）、重连与归档恢复，多处问题共同指向会话生命周期管理不透明。
- **平台差异**：Windows 端问题尤为集中（#96918、#97341、#93239、#109087），涉及桥接登录、Cowork 定时任务与 TUI 性能，Windows 开发者体验需优先补齐。
- **压缩/缓存策略需可配置**：#103931 与 #105775 从不同角度指出空闲压缩行为与 changelog 不符且缺少桌面开关，建议改为 opt-in 并提供 UI 控制，关系成本与可预期性。
- **需求侧仍以投票表达优先级**：#27302（461 👍）与 #79305（95 👍）显示社区倾向用点赞而非评论表达强需求，可作为路线图排序信号。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-11-11

> 数据来源：github.com/openai/codex

## 1. 今日速览

今日共有 7 个版本发布，其中 6 个为 alpha 预发布，正式补丁为 `rust-v0.167.1`。社区讨论高度集中在 Windows 平台的稳定性问题上，涉及 Computer Use、VS Code 扩展、桌面端沙箱与远程连接；同时，配额异常与"Full access 实际降级为受限沙箱"两类问题持续发酵，成为跨平台共性痛点。PR 侧则出现一批同日合并的内部工具链整理（历史/笔记工具 schema、模型 ID 持久化、MCP 配置刷新等）。

## 2. 版本发布

- **rust-v0.167.1**（正式补丁）：Changelog 仅提供 `rust-v0.167.0...rust-v0.167.1` 对比链接，未给出具体变更条目。
  https://github.com/openai/codex/releases
- **rust-v0.169.0-alpha.11 / alpha.10 / alpha.9**：0.169 系列连续迭代的 alpha 版本，发布说明无详细内容。
- **rust-v0.167.0-alpha.4.2**：0.167 系列的 alpha 后续版本。

⚠️ 说明：本轮 Release 说明均极为简短，无法从提供材料中判断具体功能变更，建议读者直接查阅上述 Changelog 对比链接。

## 3. 社区热点 Issues（10 条）

1. **#41220 [Meta] 配额异常消耗与用量统计不一致（跨报告追踪）**
   作者 FromAriel，91 条评论、21 👍，自 2026-08-27 持续更新至今。该 Issue 汇总了大量用户报告的统一症状：订阅配额或已购额度以明显快于历史基线的速度消耗。作为元追踪器，它反映的是平台层面的计费信任问题，社区参与度最高，值得优先关注。
   https://github.com/openai/codex/issues/41220

2. **#51524 [Windows] Computer Use 卡在 `get_window_state`，无法获取浏览器 URL**
   88 条评论。10 月 6 日后原本可用的 Windows 计算机使用能力突然无法检查浏览器窗口（Chrome 与 Edge 均受影响），窗口枚举正常但状态读取即中断。这是自动化能力回归，影响面广。
   https://github.com/openai/codex/issues/51524

3. **#56655 [CLOSED] VS Code 扩展 26.51021.22027 UI 无法启动**
   87 条评论、86 👍，是本批中点赞数最高的 Issue，且已关闭。Windows 环境下扩展 UI 无法加载，属于高影响面问题，点赞量说明大量用户踩坑；已关闭意味着修复已落地或已有结论。
   https://github.com/openai/codex/issues/56655

4. **#57641 [Windows] CLI `@Browser` 报 "browser access host is unavailable"**
   51 条评论、34 👍。桌面端更新至 26.1023.6123.0 后，Windows 11 + Brave 环境下 CLI 浏览器访问失效。浏览器集成是 Codex 的核心工作流之一，该项受阻影响较大。
   https://github.com/openai/codex/issues/57641

5. **#50428 [Windows] 持久化对话 turn/start 与 thread/fork 失败（AbsolutePathBuf 缺少 base path）**
   44 条评论。可读取已绑定的持久/云端会话，但纯文本提交与同目录 fork 在执行前即失败。属于会话持久化路径反序列化缺陷。
   https://github.com/openai/codex/issues/50428

6. **#50182 [CLI] `codex cloud` 无法发现当前 Cloud 环境**
   28 条评论、22 👍。CLI 0.160.0、ChatGPT 认证下，CLI 与桌面端无法枚举现有 Cloud 环境。对依赖 Cloud 执行环境的团队工作流影响直接。
   https://github.com/openai/codex/issues/50182

7. **#39054 [MCP/Auth] 被拒的 refresh token 仍被视为"可用"，导致无限重试且不提示重新认证**
   22 条评论、12 👍。在 0.140.0～0.147.0 及 0.148.0-alpha.20 上均可复现。这是鉴权状态机缺陷，会造成静默失败，且对使用 MCP 的开发者影响明显。
   https://github.com/openai/codex/issues/39054

8. **#60058 [Windows] "Full access" 控件消失，命令运行器仍保留受限网络并阻断 SSH**
   12 条评论。新建会话显示 Full access，但实际执行上下文为 workspace-write + 受限网络。权限 UI 与实际生效策略不一致，属于安全与信任层面的隐患。
   https://github.com/openai/codex/issues/60058

9. **#58677 [macOS] 创建会话后 Full access 控件消失，会话仍受限**
   11 条评论、3 👍。与 #60058 同源症状，出现在 macOS Desktop 26.1027.51404。说明"Full access 名义生效、实际受限"是跨平台问题，而非单一系统缺陷。
   https://github.com/openai/codex/issues/58677

10. **#60047 [macOS] P0 回归：SSH 远程项目启动后永不重连，应用空白、输入框无响应**
    6 条评论。桌面端 26.1103.32239 更新后出现，作者明确标注为 P0 回归，内置 CLI 为 0.167.0-alpha.3。远程开发场景几乎不可用。
    https://github.com/openai/codex/issues/60047

补充关注：**#19676**（workspace-write 沙箱 bwrap 命名空间内无 `/dev/nvidia*`，GPU 不可用，7 👍）；**#56771**（VS Code Remote SSH 下 webview 永不就绪，`renderer_ready_timeout`）。

## 4. 重要 PR 进展（10 条）

> 说明：下列 PR 均为 `copyberry[bot]` 提交，创建与更新日期同为 2026-11-11，状态均为 **CLOSED**；评论数在数据中为 `undefined`，故不作社区热度推断。

1. **#60784 集中化同步 Guardian reviewer 选择**：通过 `select_synchronous_reviewer` 统一隔离评估与审批评审中的 reviewer 查找与延迟配置解析逻辑。
   https://github.com/openai/codex/pull/60784

2. **#60773 为每个 subagent turn 解析已保存的 Daybreak 选择**：允许子代理使用与父代理不同的模型及不同访问计划，并保证保存的选择按子代理模型解析。
   https://github.com/openai/codex/pull/60773

3. **#60771 在保存历史中保留面向模型的 ID 分配**：恢复 ID 序列需要分配序号，Responses API 负载仍要求字符串 ID。
   https://github.com/openai/codex/pull/60771

4. **#60770 由类型化请求派生 history / notes 工具 schema**：用 `serde` + `schemars` 的 Rust 请求类型替换手写 JSON schema，工具描述由文档注释派生。
   https://github.com/openai/codex/pull/60770

5. **#60763 在新会话中通过附件交接已批准的计划**："Yes, clear context and implement" 将已批准计划存为 app-server 附件，并提交引用该附件的短提示。
   https://github.com/openai/codex/pull/60763

6. **#60759 修复线程搜索中的 Unicode 无大小写匹配**：仅做小写化会漏掉希腊字母 sigma 变体及 `ß` 与 `ss` 的匹配，改用 Unicode 默认大小写折叠。
   https://github.com/openai/codex/pull/60759

7. **#60757 在线程持久化中全面使用类型化 context window ID**：`ContextWindowId` 贯穿会话元数据、压缩检查点、rollout 记录与线程创建，替代字符串转换。
   https://github.com/openai/codex/pull/60757

8. **#60753 为 history / notes 工具契约增加快照覆盖**：新增 `bundled_tool_contracts` 测试，对全部九个 history/notes 动作的默认工具规格序列化结果做快照。
   https://github.com/openai/codex/pull/60753

9. **#60746 为已有 Codex 登录增加 Git credential helper**：新增隐藏命令 `codex git-credential`，通过 Git 的 `authtype` 协议把基于文件的 ChatGPT 登录作为临时 Bearer 凭据提供。
   https://github.com/openai/codex/pull/60746

10. **#60730 在 MCP 配置刷新时应用会话级 app 覆盖**：修复此前刷新 MCP 配置后仍保留会话 app 覆盖、导致连接器审批变更未在既有会话生效的问题。
    https://github.com/openai/codex/pull/60730

其他可留意：**#60735** 保留工具输出中的文件型音频（此前会被降级为文本 file ID）；**#60721** 用功能开关约束插件推荐缓存预热。

## 5. 功能需求趋势

基于本期 Issues 主题标签与内容，社区关注方向可归纳为：

- **Windows 平台质量成为首要矛盾**：20 条热门 Issue 中超过半数带 `windows-os` 标签，覆盖 app、extension、CLI、sandbox、app-server 各子系统，说明 Windows 端在桌面应用、浏览器集成、WSL 模式与沙箱注册上存在成体系的稳定性欠账。
- **浏览器 / Computer Use 自动化是核心工作流**：涉及窗口状态读取、浏览器访问主机、Chrome 扩展页面操作、本地浏览器开关等多条独立故障线，说明"AI 操作浏览器"已被大量用户纳入日常使用。
- **远程与连接能力（`remote`/`connectivity`）优先级上升**：SSH 远程项目重连、VS Code Remote SSH webview 就绪、Remote Control 校验失败等，均指向分布式开发场景。
- **权限模型的可解释性需求**：多条 Full access 与实际执行策略不一致的报告，说明用户需要 UI 展示与真实沙箱策略严格一致。
- **配额与用量透明度**：#41220 元追踪器的长期活跃表明计费可观测性是持续诉求。
- **沙箱能力边界**：GPU 在 bwrap 命名空间内不可见，反映对沙箱内硬件加速支持的期待。

## 6. 开发者关注点

- **"UI 显示"与"实际生效"脱节**：Full access 控件消失或名义生效（#60058、#58677）是最高频的信任类痛点，用户无法从界面判断真实权限边界。
- **静默失败与缺少可操作的错误提示**：MCP 被拒 refresh token 无限重试（#39054）、浏览器访问主机不可用（#57641）、`get_window_state` 直接中断（#51524），均缺少引导用户自愈的明确提示。
- **回归问题的密集出现**：多条 Issue 明确以"更新后开始失败"为触发条件（#51524、#57641、#60047），开发者对桌面端自动更新的回归风险敏感，尤其是 P0 级别的远程项目不可用。
- **跨平台体验落差**：Windows 与 macOS 在权限控件、远程连接上出现同源但不同表现的问题，跨平台一致性仍是长期诉求。
- **对修复进展的可见性需求**：#56655 已关闭且获 86 👍，说明社区会积极认可明确的修复结论；相对地，长期 OPEN 的元追踪器（#41220 已持续约两个半月）缺乏阶段性结论容易积累不满。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-11）

## 今日速览
今日发布 v0.69.0-preview.0 与 v0.68.0，新增 `/stats` 每日 token 用量热力图，并修复模板中 `$` 字面量被替换的问题。社区讨论高度集中在 Agent/子代理行为：子代理误报成功、generalist agent 挂起、技能无法手动激活等。PR 侧以 core/ACP 的稳定性修复为主，涉及二进制注入、工具输出截断、并行工具调用等。

## 版本发布
- **v0.69.0-preview.0**
  - 修复 core/cli 在模板占位符替换时保留字面 `$` 字符（PR #30136）。
  - 新增 `/stats` 热力图子命令，按日展示 token 使用量（PR 由 @jvargassanchez-dot 提交，链接在发布说明中被截断）。
- **v0.68.0**
  - 包含 v0.67.0-preview.0 与 v0.66.0 的变更日志（PR #29990、#29992）。
  - 更新 README，明确 Gemini CLI 的范围、限制与工具说明。

## 社区热点 Issues
1. **#21165 允许像 /commands 一样手动激活 skills**（34 评论，OPEN，p2/enhancement）
   社区呼声最高的功能之一：用户希望输入 `/skill-name` 主动触发已安装技能，而非依赖模型自动判断。
   https://github.com/google-gemini/gemini-cli/issues/21165
2. **#22323 子代理 MAX_TURNS 恢复被误报为 GOAL 成功**（13 评论，OPEN，p1/bug）
   `codebase_investigator` 在未做任何分析即达轮次上限时仍报告 `success`/`GOAL`，掩盖中断，影响结果可信度。
   https://github.com/google-gemini/gemini-cli/issues/22323
3. **#19873 利用模型 bash 亲和性的零依赖 OS 沙箱与执行后意图路由**（9 评论，OPEN，p2/enhancement，effort/large）
   提出围绕 Gemini 3 原生 bash 使用习惯设计沙箱与路由，属架构级方向性提案。
   https://github.com/google-gemini/gemini-cli/issues/19873
4. **#21409 Generalist agent 无限挂起**（8 评论，👍8，OPEN，p1/bug）
   一旦委派给 generalist agent 即永久卡住，连创建文件夹这类简单操作也复现，等待可达一小时，用户共鸣明显。
   https://github.com/google-gemini/gemini-cli/issues/21409
5. **#21968 Gemini 不够主动使用 skills 与子代理**（7 评论，OPEN，p2/bug）
   与 #21165 呼应：模型很少自发调用自定义技能/子代理，反映技能路由策略存在问题。
   https://github.com/google-gemini/gemini-cli/issues/21968
6. **#22745 评估 AST 感知的文件读取、搜索与代码库映射**（7 评论，OPEN，p2/feature）
   EPIC 级调研，目标是减少工具调用轮次、提升方法边界读取精度。
   https://github.com/google-gemini/gemini-cli/issues/22745
7. **#22267 Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）**（5 评论，OPEN，p2/bug）
   AgentRegistry 虽读取配置，但 Browser Agent 完全无视全局/项目级覆盖。
   https://github.com/google-gemini/gemini-cli/issues/22267
8. **#21983 browser 子代理在 Wayland 下失败**（4 评论，👍1，OPEN，p1/bug）
   Linux Wayland 环境兼容性问题，影响桌面端浏览器代理可用性。
   https://github.com/google-gemini/gemini-cli/issues/21983
9. **#24246 工具数超过 128 时出现 400 错误**（3 评论，OPEN，p2/bug）
   期望 CLI 对启用工具做更智能的范围限制，而非直接报错。
   https://github.com/google-gemini/gemini-cli/issues/24246
10. **#22598 希望通过 `/chat share` 查看子代理轨迹**（2 评论，👍1，OPEN，p3/feature）
    子代理轨迹已记录但难以访问，影响行为审阅与评测。
    https://github.com/google-gemini/gemini-cli/issues/22598

## 重要 PR 进展
1. **#30220 修复会话预览丢失 Unicode 并剥离 ANSI 片段**（CLOSED，关联 #29915）
   保留非 ASCII 字符（国际文字、重音、emoji）并正确清除 ANSI 转义序列。
   https://github.com/google-gemini/gemini-cli/pull/30220
2. **#30241 截断工具响应时保持注入的二进制数据完整**（OPEN）
   修复 #30180 引入的回归：大于约 48KB 的音频/视频 `read_file` 报 400 “Base64 decoding failed”。
   https://github.com/google-gemini/gemini-cli/pull/30241
3. **#30230 保留合成二进制 ack，使注入音视频保持独立轮次**（OPEN，p1）
   修复 Gemini 3 + Code Assist 下 `read_file` 音视频报“Requests ending with a model turn are not supported”。
   https://github.com/google-gemini/gemini-cli/pull/30230
4. **#30228 模型对工具轮次空响应后保留中断占位符**（OPEN，p2）
   修复 400 错误及用户提示被静默并入 functionResponse 轮次的问题。
   https://github.com/google-gemini/gemini-cli/pull/30228
5. **#30234 ACP 对模型的大工具输出进行截断，与 CLI 行为对齐**（OPEN）
   `Session.runTool` 未经过 scheduler，导致大段 shell/MCP 输出被完整发送。
   https://github.com/google-gemini/gemini-cli/pull/30234
6. **#30236 ACP 支持并行工具调用，对齐 CLI Scheduler**（OPEN）
   当前 ACP prompt 循环串行等待每次调用，多搜索/多请求场景显著变慢。
   https://github.com/google-gemini/gemini-cli/pull/30236
7. **#30232 ACP 支持 session/close 以释放会话**（OPEN，area/non-interactive）
   补上 SDK 路由所需的 `unstable_closeSession`，此前返回 -32601。
   https://github.com/google-gemini/gemini-cli/pull/30232
8. **#30239 层级别名解析到首个模型时保留其配置**（OPEN）
   修复 `applyModelSelection` 重新解析导致自定义 `generateContentConfig` 丢失。
   https://github.com/google-gemini/gemini-cli/pull/30239
9. **#30246 在 Windows 上为 cmd.exe 的 `/ide install` CLI 路径加引号**（OPEN）
   修复编辑器 CLI 位于含空格路径时 VS Code 伴生扩展安装失败。
   https://github.com/google-gemini/gemini-cli/pull/30246
10. **#30107 终端换行时使认证 URL 可点击**（OPEN，p1/security，status/pr-nudge-sent）
    修复窄终端下登录链接被截断导致 response_type 等参数丢失。
    https://github.com/google-gemini/gemini-cli/pull/30107

## 功能需求趋势
- **技能与子代理的可控性**：手动激活（#21165、PR #29546）、提升模型自发调用率（#21968）、轨迹可见（#22598）、Sprint 规划（#20195）。
- **Agent 可靠性**：误报成功（#22323）、挂起（#21409）、忽略配置（#22267）、平台兼容（#21983）。
- **AST 感知工具链**：代码库映射与精确读取（#22745、#22746），以减少轮次、提升 investigator 能力。
- **安全与沙箱**：OS 沙箱与 bash 意图路由（#19873）、抑制破坏性命令（#22672）。
- **IDE/平台集成**：Windows `/ide install`（#30246）、VS Code 伴生扩展 Disposables（#29988）、worktree 跨认证重启保留（#30176）。

## 开发者关注点
- **子代理行为不可预期**：卡死、误报成功、不主动使用技能，是当前最集中的痛点，且多为 p1/p2 且标记 maintainer only。
- **二进制/媒体处理回归**：音视频注入与截断相关 400 错误集中出现，多个 PR 同日提交，说明为近期高优先级修复面。
- **ACP 与 CLI 行为不一致**：截断、并行调度、会话关闭等能力在 ACP 侧缺失，影响非交互客户端体验。
- **配置覆盖失效**：settings.json 对部分 Agent 不生效，削弱用户的配置控制力。
- **小处体验问题**：Unicode 预览丢失、登录链接换行截断、Windows 路径空格，虽为小修复但直接影响可用性。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-11）

## 1. 今日速览

今日发布 v1.0.110 两个补丁版本：新增实验性凭据提示（通过屏蔽对话框应答 git/ssh/sudo 密码），并修复 `--resume` 会话被过早标记为占用等交互问题。Issue 侧有 37 条过去 24 小时更新，Windows/WSL、认证、MCP、权限等方向仍有多个长期未决问题活跃；PR 侧仅 1 条更新。

## 2. 版本发布

**v1.0.110-1（修复）**
- `copilot --resume` 重开的会话一旦打开即被标记为占用，`copilot -p --resume` 和第二个窗口不再在会话空闲时写入（github/github/copilot-cli Releases）
- 自定义状态栏保留首行缩进，使各行对齐一致
- 控制字符显示相关修复（原文截断："Show control characters vis…"）

**v1.0.110-0**
- 新增（实验性）：在 Agent 命令中，可由屏蔽对话框应答 git、ssh、sudo 密码提示（需 `/experimental on` 开启）
- 改进：在 `/user switch` 中选择不可用账号时，显示恢复指引与重试操作；点击被展开的 reasoning 任意位置即可折叠

## 3. 社区热点 Issues

1. **#3534 [已关闭] WSL2 (ARM64) 下 `/copy` 因 cmd.exe 引号问题失败**（9 评论 / 👍7）——影响 WSL2 ARM64 用户剪贴板写入全部失败，历经数月获关闭，是本批评论最多的问题。https://github.com/github/copilot-cli/issues/3534
2. **#4802 [开放] PRU 配额被清空，疑似与启用 Assisted Permissions 相关**（9 评论）——涉及付费配额损失，对旧版按请求计费（Legacy PRU）的 Pro 用户影响直接。https://github.com/github/copilot-cli/issues/4802
3. **#5171 [开放] Windows NumLock 关闭时小键盘导航与 Delete 失效**（5 评论 / 👍1）——被明确标记为回归，影响 Windows Terminal 下的日常输入。https://github.com/github/copilot-cli/issues/5171
4. **#4606 [开放] Google Workspace MCP OAuth 因 issuer 尾斜杠不匹配失败**（4 评论 / 👍2）——认证在浏览器授权流程开始前即失败，阻断官方 MCP 端点接入。https://github.com/github/copilot-cli/issues/4606
5. **#2955 [开放] `/allow-all` 无法抑制 bash 工具执行提示**（4 评论 / 👍2）——自 4 月持续至今，权限配置与预期行为不一致。https://github.com/github/copilot-cli/issues/2955
6. **#5335 [开放] 反复出现 HTTP 422 网络安全风险标记，阻断正常本地排查 flaky 测试**（3 评论）——安全策略对合理开发调试造成误伤，已被跟进中（报告者为 MSFT 员工）。https://github.com/github/copilot-cli/issues/5335
7. **#5145 [开放] 思考模式返回 400：`reasoning_text` 必须回传**（3 评论 / 👍1）——自定义 OpenAI 兼容提供方（wireApi: "responses"，DeepSeek 模型）在后台 shell 退出后被中断，影响第三方模型接入。https://github.com/github/copilot-cli/issues/5145
8. **#4888 [开放][triage] MCP 客户端在成功 server/discover 后仍发送 legacy initialize**（3 评论）——双版本 MCP SDK 服务端会锁死连接到旧协议，属协议兼容性问题。https://github.com/github/copilot-cli/issues/4888
9. **#5256 [已关闭] 未登录时高 CPU 与反复 `gh auth token` 失败（无 gh 时更严重）**（2 评论）——无退避的紧循环重试，造成长时间高 CPU 占用。https://github.com/github/copilot-cli/issues/5256
10. **#4920 [开放][triage] 启动会话 ID 交换期间本地 stdio MCP 服务器被静默丢弃**（1 评论 / 👍1）——`--resume` 与 `/new` 均可复现，且已在多个版本重现。https://github.com/github/copilot-cli/issues/4920

其他已关闭问题值得留意：**#5088**（Windows Entra WAM 首次登录 MCP 服务器时 msalruntime.dll 崩溃 0xc0000005）、**#4570**（VS Code 运行时 Windows 插件安装/更新报 os error 5）、**#5284**（MCP OAuth 过期动态客户端注册被永久复用）、**#5312**（上下文窗口 rollover 后 checkpoint.md 缺失复现）。

## 4. 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新（未能凑满 10 条，按实际数据呈现）：

1. **#4770 [开放] 记录 WebSocket responses 退出选项**（作者 1fanwang，更新于 2026-11-10）——解决模型默认使用 WebSocket responses 端点、而该传输不可用（网络屏蔽 WebSocket 或出现 "400 input item ID does not be…" 错误）时缺少文档的问题，属文档补全类变更。https://github.com/github/copilot-cli/pull/4770

## 5. 功能需求趋势

- **MCP 生态成熟度**：OAuth（动态客户端注册、issuer 匹配）、协议版本兼容（server/discover 与 initialize）、本地 stdio 服务器在会话切换中的可靠性，构成最集中的问题簇。
- **Windows / WSL 平台适配**：剪贴板、小键盘导航、插件文件锁、Entra 登录崩溃等多点问题集中在 Windows 路径上。
- **权限与会话控制**：`/allow-all` 行为不一致、权限提示超时自动取消、`--resume` 会话占用等，反映对权限与会话状态可控性的需求。
- **配置可定制性**：如 #3352 提议的 `/config` 交互式设置编辑器（对标 Claude Code）、#5226 要求语音转写语言可配置，均指向"设置分散、硬编码"的痛点。
- **第三方模型/自定义提供方支持**：自定义 OpenAI 兼容提供方与 thinking 模式交互时出现 400 错误。
- **会话可见性**：#2330 提议在 `/session` 选择器中内联展示会话名称、最近使用与意图摘要。

## 6. 开发者关注点

- **稳定性与回归**：多个问题被明确标记为 regression（如 #5171 输入回归），且部分问题跨版本复现（#4920、#5312），开发者对修复闭环（无关闭说明、无关联 PR）表达不满。
- **付费与配额透明度**：#4802 的配额清空、#5419 的"升级付费后仍提示无模型可用"，直接触及账号与计费体验。
- **安全策略误伤**：#5335 的 HTTP 422 风险标记阻断正常调试，安全与可用性之间需要更细的边界。
- **输入与终端兼容细节**：Windows NumLock、`.inputrc` 中 Control-j 重映射导致 bash 命令挂起（#3422），反映终端层交互细节对实际使用影响很大。
- **第三方集成可靠性**：MCP 认证、第三方模型协议、插件安装等集成路径的问题频率高于核心推理功能，是当前社区摩擦的主要来源。

> 数据说明：本次 Issue 数据仅覆盖展示的 20 条（过去 24 小时共更新 37 条），PR 数据仅 1 条；未在源材料中出现的版本、链接或指标均未补充。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-11

## 1. 今日速览

今日无新版本发布，社区焦点集中在 **免费额度（Free tier）计费与限流异常**：主问题帖 #59387 评论数已达 353 条，同时多个独立 Issue 报告额度未重置、付费账户误报限流等问题。工程侧，核心贡献者密集提交了工具输出截断、权限安全与 Windows 进程守护相关的修复 PR。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#59387 免费额度问题主帖（353 评论，👍27）** — 官方汇总帖，集中收集 `Free usage exceeded`、`Free usage limit reached` 等报错。评论量极高，说明免费层问题是当前社区最大噪音源与不满来源。
   https://github.com/anomalyco/opencode/issues/59387

2. **#2242 Agent 沙箱能力缺失（112 评论，👍84）** — 用户询问能否限制 Agent 访问/修改当前目录外文件，并对比 gemini-cli、codex-cli 使用的 macOS seatbelt。👍数最高，反映安全隔离是长期高优诉求。
   https://github.com/anomalyco/opencode/issues/2242

3. **#12472 原生兼容 Claude Code Hooks（24 评论，👍42）** — 请求支持 `PreToolUse`、`PostToolUse`、`Stop` 钩子。OpenCode 已兼容 `CLAUDE.md`、skills 与相关环境变量，补上 hooks 将显著降低 Claude Code 用户迁移成本。
   https://github.com/anomalyco/opencode/issues/12472

4. **#63164 桌面端免费配额不重置（已关闭）** — 报告即使未发请求仍报 `Free usage limit reached`，且 UI 显示的重置时间每次检查都后移约一天。与 #59387 同属计费一致性问题。
   https://github.com/anomalyco/opencode/issues/63164

5. **#63159 付费账户误报限流（已关闭）** — OpenCode Go 账户仅用 30% 即触发限流，涉及 GPT-6 Luna 模型。付费用户体验直接受损。
   https://github.com/anomalyco/opencode/issues/63159

6. **#62529 ChatGPT 订阅共享限流误报** — 2.2.5 版 macOS 上简单 "Hello" 即被拒，服务端日志为 `subscription_sharing_usage_limit_exceeded`，但用户实际用量显示仍有余额。
   https://github.com/anomalyco/opencode/issues/62529

7. **#62761 DELETE /auth 后状态残留（severity:high，已关闭）** — `DELETE /auth/{id}` 删除凭据后，`GET /provider` 仍报告 connected；未知 id 也返回 200 true。属 `opencode serve` 的 API 一致性缺陷。
   https://github.com/anomalyco/opencode/issues/62761

8. **#53341 Ollama 发现超时硬编码（已复现）** — 远程 Ollama 的 `/api/tags` 响应超过 1 秒即报 `Unsupported package`。硬编码超时对 SSH 隧道/远程 GPU 场景不友好。
   https://github.com/anomalyco/opencode/issues/53341

9. **#63323 网络不稳定时 Go 模型静默消失** — 桌面 2.2.7 上 `models.opencode.ai` 解析失败（DNS ENOTFOUND）时，整个 OpenCode Go 模型段从选择器静默消失，缺乏错误提示。
   https://github.com/anomalyco/opencode/issues/63323

10. **#63186 TUI 中 Unicode 转义泄漏** — 交互式问题的选项标签/描述中捷克语变音符号被显示为字面 `\uXXXX`，影响非英语用户交互体验。
   https://github.com/anomalyco/opencode/issues/63186

其他值得留意：#56218（v2 根命令不再接受 `-m provider/model`，v1 回归）、#28642（FreeBSD 支持，已关闭）、#62765（本地模型能力不足）、#53192（TUI 显示每轮耗时）。

## 4. 重要 PR 进展

1. **#63272 fix(core): 显示超限工具输出的开头** — 工具输出超限（2,000 行 / 50 KiB）时保留整行并从顶部截断，修复超长首行导致模型拿不到任何内容的问题。
   https://github.com/anomalyco/opencode/pull/63272

2. **#63334 fix(core): 保存失败时保留截断预览**（已合并）— `ToolOutput.truncate()` 保存全文失败（如磁盘满）时，原先会导致结果丢失，现保留截断预览。
   https://github.com/anomalyco/opencode/pull/63334

3. **#63335 fix(core): 工具输出文件私有化** — `~/.local/share/opencode/tool-output` 下文件原为 0644、目录 0755，本机其他用户可读；修复为私有权限，属安全加固。
   https://github.com/anomalyco/opencode/pull/63335

4. **#63340 fix(update): 管理路由校验访问身份**（已合并）— 更新 worker 仅服务 `opencode.ai/update/*`，其余 host/path 返回 404，并移除旧 `update.opencode.ai` 挂载。
   https://github.com/anomalyco/opencode/pull/63340

5. **#63196 feat(process-daemon): Windows 管道模式**（已合并）— 为 Windows 进程守护新增 `create_pipe`，命令不创建控制台窗口。
   https://github.com/anomalyco/opencode/pull/63196

6. **#63346 refactor(process-daemon): 简化 Windows 管道模式** — 对 #63196 的后续清理，行为不变。
   https://github.com/anomalyco/opencode/pull/63346

7. **#63339 chore(process-daemon): 发布 0.5.1** — PTY daemon 0.5.1 版本，包含 Windows 管道模式。
   https://github.com/anomalyco/opencode/pull/63339

8. **#63343 fix(tui): 插件启停确认提示** — 从 `/plugins` 启用/禁用 TUI 插件现返回明确成功确认（Closes #56157）。
   https://github.com/anomalyco/opencode/pull/63343

9. **#63337 fix(app): 默认显示 Agent 切换器**（已合并）— 该设置本已存在，仅调整默认值为显示。
   https://github.com/anomalyco/opencode/pull/63337

10. **#61622 fix(app): 本地化摘要中分隔模型能力** — 修复简体中文下 `unit` 格式化器省略分隔符、导致能力摘要粘连的问题（Closes #61594）。
    https://github.com/anomalyco/opencode/pull/61622

其他：**#63325** 移除已停更的 beta 相关 SVG 与流程；**#63342** 将 `gitlab-ai-provider` 升至 6.24.0；**#63349** 支持回复中代码块换行与加宽；**#63347** 修复 RTL 下桌面拖拽区测量。

## 5. 功能需求趋势

- **Agent 安全与隔离**：沙箱/文件系统边界（#2242）、工具输出权限（#63335），是 👍 最高的方向。
- **Claude Code 生态兼容**：在规则、skills 已兼容的基础上，社区期待 hooks 系统对齐（#12472）。
- **计费与配额透明度**：免费层限流、重置时间、付费误报（#59387、#63164、#63159、#62529），已形成独立的"免费层主帖"治理模式。
- **远程/本地模型兼容性**：Ollama 发现超时（#53341）、本地模型能力不足（#62765）、OpenCode Go 模型静默消失（#63323），指向网络韧性与 provider 发现逻辑。
- **TUI/桌面体验细节**：耗时展示（#53192）、Unicode 渲染（#63186）、音频设备释放（#63155）、浏览器面板入口（#60444）。
- **跨平台支持**：FreeBSD（#28642）、Windows 管道与 RTL 拖拽修复。

## 6. 开发者关注点

- **免费额度与限流误判是当前最突出痛点**：多条 Issue 指向"未使用仍报限流""重置时间持续后移""付费账户误报"，且已由一个 353 评论的主帖集中收口，建议优先排查计费与配额同步逻辑。
- **付费用户对误报零容忍**：OpenCode Go 使用 30% 即被限流、ChatGPT 用量有余却报 `subscription_sharing_usage_limit_exceeded`，直接影响付费转化与留存。
- **Agent 默认权限边界不清**：缺乏沙箱机制导致用户不敢在敏感目录运行；工具输出文件权限问题（#63335）进一步放大了该担忧。
- **静默失败损害可诊断性**：模型段因 DNS 失败而无声消失（#63323）、认证状态删除后仍显示已连接（#62761），开发者希望获得明确错误而非静默降级。
- **v2 迁移存在回归摩擦**：`-m provider/model` 在根命令失效（#56218）、TUI 少显示思考过程（#57799），老用户迁移成本被反复提及。

---
*数据来源：github.com/anomalyco/opencode（Issues 与 PR 均为过去 24 小时内更新）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-11

## 1. 今日速览

过去 24 小时无新版本发布，但 Issue 与 PR 活动密集：多个 P0 级 provider 兼容性问题（github-copilot 的 Gemini 推理参数、ant-ling 模型 ID 失效）被提出，同时一批 `robopipi[bot]` 提交的修复 PR 当天合并关闭，覆盖 bash 输出丢失、MCP 工具恢复、HTML 导出转义等真实故障。整体看，社区重心在**模型适配正确性**与**会话恢复/扩展生态稳定性**两条线上。

## 2. 版本发布

过去 24 小时无 release，本节省略。

## 3. 社区热点 Issues

1. **[#10386] Durable 承载 coding-agent 扩展**（OPEN，7 评论，👍1）
   讨论让 pi-durable 以 AgentSession 运行时或 hook 对等方式承载扩展，是本周评论最多的开放议题，反映扩展运行时的架构之争。
   https://github.com/earendil-works/pi/issues/10386

2. **[#12019] github-copilot 的 Gemini 模型收不到 reasoning_effort**（OPEN，prio:p0）
   `--thinking` 对 `github-copilot/gemini-4-argon` 和 `gemini-3.8-flash` 完全无效，catalog 的 `compat.supportsReasoningEffort` 配置与 provider 行为不一致，属高优先级模型适配缺陷。
   https://github.com/earendil-works/pi/issues/12019

3. **[#11999] ant-ling provider 迁移到 Ling 3.x Flash**（OPEN，prio:p0）
   现有 Ling 2.6 / Ring 2.6 ID 在 API 侧已无法解析，provider 端到端不可用；作者请求获批后提交 PR，属"修好即恢复"的阻塞性问题。
   https://github.com/earendil-works/pi/issues/11999

4. **[#11988] 上下文估算超窗导致 max_tokens 被钳到 1，会话无法恢复**（CLOSED，no-action）
   长会话每个回复都被截断（`usage.output: 1`），重试无效，只能换会话。对长任务用户影响明显，已按 no-action 关闭，值得关注后续处理路径。
   https://github.com/earendil-works/pi/issues/11988

5. **[#12049] strict:"prefer" 对无类型数组项误启 OpenAI strict 采样**（CLOSED，untriaged）
   OpenAI Responses 拒绝 `items: {}` 的 schema，导致 `lsp_navigation` 等函数调用失败，说明 strict 模式的兼容层仍有语义误判。
   https://github.com/earendil-works/pi/issues/12049

6. **[#11996] 恢复会话时 tool_search 加载的 MCP 工具丢失**（CLOSED，bug + fix-available）
   `pi -c` 恢复时，扩展在 `session_start` 把自己工具下线会连带丢弃待恢复的 MCP 工具；已有对应修复 PR，是扩展生态可用性的典型痛点。
   https://github.com/earendil-works/pi/issues/11996

7. **[#12062] bash 工具在尾部为超长行时输出全丢**（CLOSED，2 评论）
   短首行 + 超缓冲区长度的一行会返回空结果，footer 显示 `[Showing lines 3-2 of 2]`，是 agent 观察工具输出时较危险的静默失败。
   https://github.com/earendil-works/pi/issues/12062

8. **[#11977] /login 明文显示 API Key 并以配置值存储**（CLOSED，no-action）
   输入/粘贴的 key 直接画在屏幕上（如 Cloudflare Workers AI 后续追问的行会保留为 `> <...`），属安全体验问题，社区已记录但未采取动作。
   https://github.com/earendil-works/pi/issues/11977

9. **[#11954] Claude 5.5 叙述块被渲染为隐藏 thinking，工具调用间文本丢失**（CLOSED，no-action）
   模型在工具调用前写的文本以 `thinking` block 返回（签名为 protobuf），导致用户看不到模型叙述，影响可解释性与多轮连贯性。
   https://github.com/earendil-works/pi/issues/11954

10. **[#11699] codemode 中内置工具不应截断**（OPEN，2 评论）
    codemode 的核心价值是在工具结果进 agent 前做链式处理，截断会破坏这一前提，属面向高级用法的重要开放讨论。
    https://github.com/earendil-works/pi/issues/11699

> 其他值得扫一眼：**[#4332] Cmd+V 应粘贴剪贴板图片**（macOS 终端 bracketed paste 为空时回退查剪贴板，👍2）、**[#10089] 支持 Kitty 剪贴板协议（OSC 5522）**用于 ssh/容器场景、**[#12014] 工具参数中的孤立代理项会破坏后续请求**。

## 4. 重要 PR 进展

1. **[#12059] p2 备份到 Radius**（OPEN，inprogress）
   继备份协调器之后，p2 除本地目录外可将各 Chord store 备份到 Radius，后者现已存储 Chord 会话历史。
   https://github.com/earendil-works/pi/pull/12059

2. **[#11990] Radius 会话同步适配器原型**（OPEN，inprogress）
   为 P2 的会话备份/恢复引入后端边界，避免协调逻辑耦合 Radius HTTP API，并补上 Chord 远程存储契约的 Radius 实现。
   https://github.com/earendil-works/pi/pull/11990

3. **[#12058] 修复 bash 尾部单行超长时输出丢失**（CLOSED）
   对应 Issue #12062，修正 `getSnapshotText()` 丢弃部分首行导致快照为空的问题。
   https://github.com/earendil-works/pi/pull/12058

4. **[#12054] 恢复 MCP 工具，仅隐藏扩展自有工具**（CLOSED）
   修复 `setActiveToolsByName()` 在扩展下线自身工具时误清空全部 pending 工具，对应 Issue #11996。
   https://github.com/earendil-works/pi/pull/12054

5. **[#12052] HTML 导出转换 OSC 8 超链接**（CLOSED）
   `/export` 此前只识别 SGR 码，终端超链接被原样输出为 `]8;;...` 文本；现正确转为可点击链接，对应 Issue #12003。
   https://github.com/earendil-works/pi/pull/12052

6. **[#12046] 修复独立二进制无法按 package.json main/exports 解析扩展依赖**（CLOSED）
   `bun build --compile` 默认关闭 `--compile-autoload-package-json`，导致 Shiki 等扩展依赖在运行时解析失败（对应 Issue #12012）。
   https://github.com/earendil-works/pi/pull/12046

7. **[#12055] 跳过 listDir 枚举期间被删除的条目**（CLOSED）
   修复只读 JSONL store 与活跃写入者共存时的 ENOENT 失败（如 `.reclaim` 文件竞态），对应 Issue #11994。
   https://github.com/earendil-works/pi/pull/12055

8. **[#12047] 全屏重绘时保留 Kitty 图片**（CLOSED）
   窗口缩放等全量重绘后不再丢失图片 placement，提升 TUI 图像显示稳定性。
   https://github.com/earendil-works/pi/pull/12047

9. **[#12053] chord 的可选 peer 依赖改用版本范围**（CLOSED）
   `react`/`ws`/`esbuild` 由精确版本改为 range，避免项目中已存在其他版本时 npm 校验失败。
   https://github.com/earendil-works/pi/pull/12053

10. **[#12051] 用运行 pi 的 Node.js 校验受管更新**（CLOSED）
    Windows 上 `install.ps1` 的启动器使用独立 Node 而不改 PATH，导致 `pi update` 校验环境与实际运行时不一致。
    https://github.com/earendil-works/pi/pull/12051

> 另：[#12044] find 忽略前导 `./` 的 glob、[#12045] Markdown 行内图片后的硬换行、[#12041] durable wait promise 提前标记 handled、[#12004] NVIDIA RTX 指南改用 `llama serve`（默认端口 9931）。

## 5. 功能需求趋势

- **模型/provider 适配**：Gemini 推理参数（#12019）、ant-ling 模型代际迁移（#11999）、strict 模式 schema 兼容（#12049）—— provider catalog 的语义正确性成为高频问题源。
- **扩展与工具生态**：Durable 承载扩展（#10386）、codemode 不截断（#11699）、MCP 工具跨会话保留（#11996）、扩展依赖解析（#12012/#12046）。
- **终端交互与剪贴板**：Cmd+V 图片粘贴（#4332）、Kitty 剪贴板协议（#10089）、alacritty 键盘事件重复（#12050）、Kitty 图片与超链接渲染（#12047/#12052）。
- **会话连续性**：上下文超窗导致会话卡死（#11988）、恢复会话时工具丢失（#11996）。
- **指令分层**：按场景拆分 `AGENTS_JAVA.md`/`AGENTS_INFRA.md` 等并有条件引用（#11933）。
- **请求准入控制**：为模型调用增加可选、可拒绝且不自动重试的 admission gate（#12057）。
- **存储后端扩展**：P2 备份/同步对接 Radius（#12059/#11990）。

## 6. 开发者关注点

- **静默失败最伤人**：bash 输出空白（#12062）、max_tokens 钳到 1 后重试无效（#11988）、工具参数中孤立代理项破坏后续请求（#12014）——均为"看起来成功、实际不可用"的模式。
- **密钥与隐私**：`/login` 明文回显并持久化 API Key（#11977）缺乏遮蔽，是安全体验上的明确缺口。
- **恢复/重载语义**：`pi -c` 与 `/reload` 下的工具状态、刷新取消竞态（#12030 全量 `ModelRuntime.refresh()` 取消在途 provider 刷新却报成功）让扩展作者难以推理。
- **模型输出形态差异**：Claude 5.5 将叙述文本放入 thinking block（#11954），说明跨 provider 的 block 分类处理需更稳健。
- **开放议题等待方向**：Durable 扩展承载（#10386）与 codemode 截断（#11699）仍处开放状态，是后续架构决策的信号位。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-11）

## 今日速览

Qwen Code 发布 **v1.0.0-preview**，首次预览将 Qoder 与 Qwen Code 的 agent 能力合并用于代码理解、实现、调试与测试，同时发布 v0.27.2 及 TypeScript SDK v0.1.32 稳定通道。CI 与测试稳定性仍是社区最大噪音源：多条 main 分支失败追踪 Issue 持续高评论，且出现“夜间红、测试轮换性失败”的系统性问题报告。Managed Agent 方向的 PR 密集推进（Web 终端、客户端文件系统挂载、外部工作区执行），显示托管式 agent 是当前工程投入的主线。

## 版本发布

- **v1.0.0-preview**：1.0 预览版上线，整合 Qoder 与 Qwen Code 的 agent 能力，覆盖代码理解、实现、调试与测试；支持 Qwen 与 Qoder 账号。官方提示预览期内接口、配置项与行为可能变动。
  https://github.com/QwenLM/qwen-code/releases
- **v0.27.2**：Web Shell 可配置微信、QQ、邮件渠道，含扫码登录、扫码进度、身份展示及（在支持的渠道上）登出。
  https://github.com/QwenLM/qwen-code/pull/16736
- **v0.27.2-preview.0**：包含 CI 修复（读取 base tip 上 prettier 的完整 ignore 集合）及 Agent Host 登记重试等修复。
  https://github.com/QwenLM/qwen-code/pull/16729
- **sdk-typescript-v0.1.32**：TypeScript SDK 发布，捆绑 CLI 版本 0.27.2。
  https://github.com/QwenLM/qwen-code/releases

## 社区热点 Issues

1. **#14724** Managed Agent gate CI 持续失败（"no test identified"），创建于 10-19、已积累 **317 条评论**，是仓库最长的失败追踪线程——反映该 gate 长期不可用。
   https://github.com/QwenLM/qwen-code/issues/14724
2. **#16371** 夜间 fault-gate / E2E 通道几乎每天失败，但每次触发的都是不同的时序敏感测试，逐条关闭单点 Issue 无法收敛——CI 不可信已从个案升级为模式问题（P1）。
   https://github.com/QwenLM/qwen-code/issues/16371
3. **#16425**（已关闭）workflow agent 的权限审批始终不渲染，运行无限挂起而状态栏仍显示等待审批，0.26.6 观测、0.26.8 复现——核心交互缺陷，影响多 agent 路线。
   https://github.com/QwenLM/qwen-code/issues/16425
4. **#16915** 用户报告任务因模型服务连接中断等两个错误无法继续，属 1.x 里程碑的会话管理问题，需补充信息；新版预览期稳定性反馈。
   https://github.com/QwenLM/qwen-code/issues/16915
5. **#15861** web-shell "Add Workspace" 目录选择器 smoke 测试确定性超时，且与 PR 无关，导致每个 PR 都要多付一轮失败归因成本（P1）。
   https://github.com/QwenLM/qwen-code/issues/15861
6. **#124**（已关闭）自托管 Qwen3-Coder-480B-A35B-Instruct 时工具调用几乎总是失败，获得 **7 个 👍**，是少见的社区高赞问题，重启并关闭说明自托管工具调用链路已处理。
   https://github.com/QwenLM/qwen-code/issues/124
7. **#14361** Managed Agent 的 Session store 间歇性以 400 拒绝 Hosted Shell turn，HostedShellLifecycleRecoveryIT 在 SDK Java 运行中 **41% 失败**——有量化数据的托管链路稳定性缺陷。
   https://github.com/QwenLM/qwen-code/issues/14361
8. **#16899** github_ci_only 类 PR 跳过 Prettier，导致仅格式问题也能绿着合入、再把 main 变红（#16872 已实际发生）。
   https://github.com/QwenLM/qwen-code/issues/16899
9. **#16954** macOS 下 `scripts/lint.js` 的入口守卫在 argv[1] 经过符号链接时静默空转，lint 以 0 退出但实际未运行。
   https://github.com/QwenLM/qwen-code/issues/16954
10. **#16941** 提出将“编辑 → 运行受影响检查 → 回灌失败 → 有界重试”做成 turn 级核心机制，并引入干净上下文的 verifier，而非依赖 skill——核心架构层面的重要讨论。
    https://github.com/QwenLM/qwen-code/issues/16941

## 重要 PR 进展

1. **#16866** 为 Managed Agent 会话新增交互式 Web 终端，通过 Java 控制面把浏览器 WebSocket 逐字节中继到 Runtime worker 的 PTY，补齐 `web_terminal` 的能力差距。
   https://github.com/QwenLM/qwen-code/pull/16866
2. **#16844** 让 Managed Agent 会话可挂载浏览器用户的本地文件系统，对齐 daemon 已有的本地文件能力（受托管控制面无 WebSocket、托管 harness 限制的约束）。
   https://github.com/QwenLM/qwen-code/pull/16844
3. **#15684** 在 #15654 物料化前置之上实现外部 Workspace 执行切片，含 `hosted-workspace-external-files/1` 准入与有界单查询 Workspace 发现。
   https://github.com/QwenLM/qwen-code/pull/15684
4. **#16955** 以双语文档记录 Managed Agent gate 为何暂不能设为 required check，以及如何度量其等待的条件。
   https://github.com/QwenLM/qwen-code/pull/16955
5. **#16953** 退役三个 InMemory runtime broker 仓库实现，把所有依赖测试迁移到 H2 上的 JDBC 实现（这些内存存储无生产调用方）。
   https://github.com/QwenLM/qwen-code/pull/16953
6. **#16957** 移除实验性 CSI 运行时引入后即无生产调用方的两处私有 CSI 证据工具（快照导出器与日志读取器）。
   https://github.com/QwenLM/qwen-code/pull/16957
7. **#16917** 将无凭据的 Web Shell 视觉捕获与 managed-host PR 构建路由到一次性 `ecs-qwen-ephemeral` 池，同仓与 fork PR 均覆盖。
   https://github.com/QwenLM/qwen-code/pull/16917
8. **#16594** 修复 detach 时绝不终态释放 config-scoped Hook owner（其 id 会在下次加载时重算），held-Runtime 的两条 drain 路径均改为保留。
   https://github.com/QwenLM/qwen-code/pull/16594
9. **#15923** 修复 Windows + Git Bash 下文件工具对 MSYS 路径的解析：`/tmp` 应映射到系统临时目录而非按字面解析。
   https://github.com/QwenLM/qwen-code/pull/15923
10. **#13771** Web Shell 将待处理编辑 diff 限制为每处改动约三行上下文并附文件相对 hunk 坐标，超大预览显式回退。
    https://github.com/QwenLM/qwen-code/pull/13771
11. **#15562** 桌面客户端跨重启持久化 Web Shell 已保存的 daemon 连接与 workspace-host 目录，经小型白名单 IPC 读取。
    https://github.com/QwenLM/qwen-code/pull/15562

## 功能需求趋势

- **Web Shell 作为宿主平台**：渠道配置（#16736）、模型选择器支持宿主内容插槽（#16893）、渠道白名单直接从已观测联系人中选取而非手输平台 ID（#16931）——趋势是把 Web Shell 做成可嵌入、可定制的宿主界面。
- **Agent 编排与验证机制**：programmatic tool calling，让 agent 在沙箱中以代码编排多工具并只返回结果（#16944）；以及把验证-修复循环提升为核心机制（#16941）。两者均指向"减少模型往返、提高确定性"。
- **Managed Agent 能力对齐**：Web 终端、客户端文件系统、外部工作区执行等 PR 集中补齐托管会话与 daemon 的能力差距。
- **跨平台/跨渠道兼容**：Windows MSYS 路径（#15923）、macOS 符号链接（#16954）、飞书入站文件覆盖（#15518）显示多渠道与多平台支持在持续补强。

## 开发者关注点

- **CI 信噪比是首要痛点**：自动 bot 生成的 main CI 失败 Issue 占据热榜多数（#14724 达 317 评论），#16371 明确指出夜间红是"轮换性时序失败"而非单一回归；#15861、#16899 反映基础设施问题让无关 PR 承担归因成本。社区诉求是系统性治理，而非逐条关闭。
- **托管链路稳定性**：Session store 间歇 400（#14361，41% 失败率）、权限审批不渲染导致挂起（#16425）等量化缺陷直接威胁 Managed Agent 可用性。
- **自托管/工具调用仍是信任基础**：#124 的高赞说明本地部署 Qwen3-Coder 的工具调用可用性对社区至关重要。
- **验证与正确性诉求上升**：从 #16941、#16944 可见开发者不满足于"agent 能改"，更关注"改完能否可靠自证正确"。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-11

> 数据来源：github.com/Hmbown/DeepSeek-TUI（数据中条目链接显示为 codewhale-hq/Codewhale）。今日无新 Release，动态集中在 v0.10.3 验收收尾与外部贡献者修复批次。

## 1. 今日速览

过去 24 小时无新版本发布，社区活跃度集中在 v0.10.3 的发布验收与「等待发布」状态 Issue 上。外部贡献者 luochen211 集中提交了一批健壮性修复与清理 PR（多处已合入关闭），Aboysky 也在今日提交了编码与显示相关修复。同时，0.10.3 的 ACP（Agent Client Protocol）方向持续扩展，出现将 Qwen Code 纳入外部 Agent 注册表的 PR。

## 2. 版本发布

无新版本发布。

## 3. 社区热点 Issues

1. **#4955 请求 local dev 零沙箱模式**（7 评论）— macOS Seatbelt 内核级沙箱持续干扰日常 shell 命令，作者称已用尽所有变通方案。沙箱可用性是本地开发的核心摩擦点。
   https://github.com/codewhale-hq/Codewhale/issues/4955

2. **#2323 中文输入法未适配**（6 评论）— Windows 下使用中文输入法时，拼音输入提示未隐藏、配置/危险操作确认界面输入异常。直接影响中文用户基础体验。
   https://github.com/codewhale-hq/Codewhale/issues/2323

3. **#6970 `/undo` 命令 Windows 严重 bug**（6 评论）— 属发布验收跟踪项，摘要显示源码与 macOS 路径已修复，Windows 最终验收仍开放。
   https://github.com/codewhale-hq/Codewhale/issues/6970

4. **#5093 将 Responses 方言策略抽到语言无关的一致性测试框架**（4 评论）— 维护者 Hmbown 发起，目标是将 Responses API 方言策略以数据形式定义，提升多提供商兼容的可测试性。
   https://github.com/codewhale-hq/Codewhale/issues/5093

5. **#6992 0.10.1 ACP 回归：sandbox_mode/ask 配置被忽略**（4 评论）— Paseo ACP 会话被强制沙箱化并需审批，属 ACP 首要方向上的关键回归。
   https://github.com/codewhale-hq/Codewhale/issues/6992

6. **#7085 内置 Runcrate 提供商**（4 评论）— 已实现、待确认发布，反映社区对扩展 provider 目录的持续需求。
   https://github.com/codewhale-hq/Codewhale/issues/7085

7. **#7252 Anthropic provider：tool_search 引入 `web.run` 后 400 报错**（3 评论）— 延迟工具名含点号触发 Anthropic 工具名校验失败，属多 provider 场景下的真实兼容缺陷。
   https://github.com/codewhale-hq/Codewhale/issues/7252

8. **#7279 0.10.3：通过 ACP 将已安装 Agent（Claude Code、Codex、Kimi 等）作为 Codewhale 会话运行**（3 评论）— 标记 good first issue，是 0.10.3「ACP 优先」路线的重要布局。
   https://github.com/codewhale-hq/Codewhale/issues/7279

9. **#7179 自定义 openai-compatible provider 输出预算被钳制**（3 评论）— 服务端接受 262K，却按托管目录上限 32K 截断，导致推理模型返回空终止。影响自建/代理部署场景。
   https://github.com/codewhale-hq/Codewhale/issues/7179

10. **#7274 健壮性：engine/tools/util/repl 中的 panic、glob 挂起与错误文本**（2 评论）— 通读源码后汇总的崩溃与挂起问题，逐个小 PR 跟踪，工程价值高。
    https://github.com/codewhale-hq/Codewhale/issues/7274

（另：#5092 已关闭，Responses API 行为转为 provider 画像化；#5618 计划在 v0.11 用 gix 替代内部 git CLI 调用；#7233 涉及代理凭据在畸形 HTTP(S)_PROXY 下可能写入日志，值得留意安全风险。）

## 4. 重要 PR 进展

1. **#7296 fix(repl)：stdout 按字节而非字符截断**（外部贡献，今日创建）— 原按 `limit-80` 字符截断，CJK 输出可超字节上限约 3 倍（1024 字节限制下返回 2886 字节）。
   https://github.com/codewhale-hq/Codewhale/pull/7296

2. **#7295 fix(util)：去掉上下文窗口标签的末尾零**— 修复 `1.50M`/`2.10M` 之类的显示格式错误。
   https://github.com/codewhale-hq/Codewhale/pull/7295

3. **#7294 feat(workflow)：用隔离 host oracle 验证封存候选**— 关联 #7250，维护者要求的可选评估器切片，含版本化 host 规格与 Git 基线。
   https://github.com/codewhale-hq/Codewhale/pull/7294

4. **#7293 feat(engine)：外部 Agent 注册表新增 Qwen Code**— 替代 #7279 中的 Gemini CLI 行，新增一行 `ExternalAgent` 并更新运行时文档。
   https://github.com/codewhale-hq/Codewhale/pull/7293

5. **#7291 fix(engine)：web fetch 与 web.run 的 HTML 实体只解码一次**— 原链式 `str::replace` 以 `&amp;` 开头，会二次解码页面刻意转义的文本。
   https://github.com/codewhale-hq/Codewhale/pull/7291

6. **#7290 fix(engine)：保留派生 RLM 会话名中的非 ASCII 字母**— 原仅保留 ASCII，导致 `docs/报告.txt` 与 `docs/总结.txt` 派生同名而第二次 `rlm_open` 失败。
   https://github.com/codewhale-hq/Codewhale/pull/7290

7. **#7276 fix(engine)（已合入）：搜索 include glob 线性时间匹配**— 消除 `*a*a*...*b` 类模式的回溯爆炸与每次尝试的 String 分配。
   https://github.com/codewhale-hq/Codewhale/pull/7276

8. **#7275 fix（已合入）：配置加载时拒绝负 retry 延迟**— 此前负值会在首次传输重试时 panic。
   https://github.com/codewhale-hq/Codewhale/pull/7275

9. **#7273 fix(tui)（已合入）：按显示宽度补齐/截断 CJK 文本**— 修正多字节文本导致的列错位与过度截断。
   https://github.com/codewhale-hq/Codewhale/pull/7273

10. **#7269 fix(tui)（已合入）：斜杠命令参数按任意空白解析，仅接受格式正确的后缀**— 修复全角空格、制表符、参数内占位文本等误解析。
    https://github.com/codewhale-hq/Codewhale/pull/7269

（另：#7262 为可选、仅评审的进化式编码搜索实验，仍为 Draft；#7277 让只读内置命令经 Runtime API 执行，已合入；#7286 为 models.dev 离线种子定时刷新，已合入。）

## 5. 功能需求趋势

- **多 Provider / 兼容层**：Responses API 方言画像化（#5092 已关闭、#5093 推进中）、Runcrate 内置（#7085）、openai-compatible 与 Anthropic 工具名兼容（#7179、#7252）。
- **沙箱可控性**：零沙箱/`--no-sandbox`（#4955）与 ACP 会话沙箱策略回归（#6992），显示本地开发对沙箱可配置性的强烈诉求。
- **ACP 与外部 Agent 集成**：以 ACP 为 0.10.3 首要方向，支持将 Claude Code、Codex、Kimi 及 Qwen Code 等作为 Codewhale 会话运行（#7279、#7293）。
- **国际化与显示正确性**：中文输入法（#2323）、CJK 显示宽度（#7273）、非 ASCII 会话名（#7290）、字节级截断（#7296）构成一组连续性修复需求。
- **性能与架构演进**：以 gix 替代内部 git CLI 读取（#5618，目标 v0.11）、glob 线性匹配（#7276）。
- **可靠性与安全**：panic/挂起治理（#7274）、代理凭据泄露风险（#7233）、undo/patch-undo 语义（#6970、#7216）。

## 6. 开发者关注点

- **沙箱过于刚性**：内核级沙箱在日常 shell 使用中频繁打断，社区要求可关闭或可降级。
- **多字节/中文场景的细节缺陷**：输入法交互、显示宽度、会话名去重、输出截断——小问题但影响面广。
- **Provider 兼容性的隐性钳制**：自定义 provider 被托管目录上限限制，推理模型静默失败，排查成本高。
- **状态机与撤销语义不严谨**：`/patch-undo` 忽略 `turn_id` 撤销错误回合，`/undo` 的 Windows 验收仍未闭环。
- **发布验收节奏**：大量 Issue 长期停留 `status:awaiting-release`，跨平台（尤其 Windows）验收成为发布收尾的主要瓶颈。
- **上下文与 token 经济学**：每次 goal 续跑重复发送完整 GoalSnapshot（#7172），社区期望更诚实、节省的上下文计数。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*