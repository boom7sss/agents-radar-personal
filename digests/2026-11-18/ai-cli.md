# AI CLI 工具社区动态日报 2026-11-18

> 生成时间: 2026-11-18 18:52 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-11-18）

## 1. 生态全景

当前 AI CLI 工具生态已从“能否运行”进入“能否可信地长期运行”的阶段：各项目社区的讨论重心高度一致地转向回归缺陷、静默失败、上下文成本与权限边界等工程可靠性议题，而非新功能提案。头部项目（Claude Code、OpenAI Codex）已具备稳定的双周级发布节奏，并开始重构审批、沙箱、遥测等底层链路；中腰部项目（Qwen Code、OpenCode、Pi）处于内核重写或版本跃迁期，功能与稳定性压力并存。与此同时，MCP 已成为事实上的扩展标准，但其认证链路（OAuth/Entra）与上下文开销正成为跨工具的共同瓶颈。

## 2. 各工具活跃度对比

| 工具 | Issues（今日相关） | PR（今日更新） | Release | 活跃度判断 |
|---|---|---|---|---|
| Claude Code | 10+ 热点，含大量回归 | 1（文档修复） | v2.1.327 | 高热、低代码产出 |
| OpenAI Codex | 10+，远程控制为主 | 10（沙箱/Guardian/遥测） | rust-v0.170.0 稳定版 + 多个 alpha | 最高（发布+重构并行） |
| Gemini CLI | 10+，几乎全为 `area/agent` | 10（ACP/Windows/安全修复） | 无 | 高，且修复导向明确 |
| GitHub Copilot CLI | 10+，MCP OAuth 集中 | 0 | v1.0.114 / v1.0.114-0（无细节） | 中，PR 侧停滞 |
| Kimi Code CLI | 0 | 1（已关闭文档 PR） | 无 | 极低 |
| OpenCode | 10+，免费额度帖近 400 评论 | 10（性能/权限/单进程） | v2.3.2 + v2.3.1 | 高，连续热修 |
| Pi (pi-mono) | 10，Windows/缓存为主 | 8（TUI/模型刷新） | 无 | 中高，P0 修复密集 |
| Qwen Code | 10，CI 失败占前列 | 10（Agent Loop 切片） | 无 | 高但噪声大（CI） |
| DeepSeek TUI | 4 | 14（含 dependabot 批量） | 无（v0.10.3 受阻） | 中低，发布受阻 |
| 合计 | — | — | 5 个 Release | — |

> 注：Issues/PR 数量为各日报中呈现的当日相关条目数，非仓库全量；Kimi Code CLI 与 Copilot CLI 的 PR 侧数据缺失/为零，已在表中如实标注。

## 3. 共同关注的功能方向

**① MCP 健壮性（覆盖最广）**
- Claude Code：进程孤儿（#1935）、OAuth refresh_token 缺 `scope`（#89862）。
- Copilot CLI：非第一方 HTTP 服务器认证静默失败（#4017）、code→token 交换不执行（#5350）、Entra 127.0.0.1 回调被拒（#5040）。
- OpenCode：远程 MCP 失败一次后永不重试（#52237）。
- Codex：同名 MCP 服务器跨环境实验特性、MCP trace span（#62320）。
- 共性诉求：生命周期可控、失败可见、可重试。

**② 上下文窗口与成本治理**
- Codex：工具目录全量下发即击穿窗口（#61679）；Copilot CLI：工具定义膨胀至约 260K tokens 致默认档不可用（#5151）。
- OpenCode：1M 上下文模型从不自动压缩（#50574）；Pi：压缩阈值与实际用量不一致（#10583、#12035）。
- 共性诉求：按需加载、可靠压缩、精确计量。

**③ 提示缓存与计费透明度**
- OpenCode：GPT-6.2 系统提示未缓存导致逐步重复计费（v2.3.2 修复）；Pi：工具注册顺序改变致缓存击穿（#11529）、6.2 缓存复用低于 6.1（#12273）。
- Claude Code：Team 套餐档位缺失（#47509，202 👍）。

**④ 权限与安全边界**
- OpenCode：deny browser 仍暴露 44 个工具（#54044）、grep 绕过 read 规则（#64623）。
- Gemini CLI：抑制破坏性 git 命令（#22672）、shell 展开前保留确认（#30338）。
- Codex：Guardian 证据链重构（#62309/#62310/#62314）。

**⑤ “静默失败”不可接受（共同情绪）**
Gemini CLI 子代理误报 success（#22323）、`mcp add` 解析错误仍返回 0（#30331）、Copilot CLI 认证“无认证无报错无弹窗”、Claude Code 静默移除 `subagentStatusLine`（#109446）——四家社区独立提出同一诉求。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| Claude Code | 企业团队套餐、IDE 集成、子代理可视化 | 重度 agentic 编码的专业团队 | 闭源分发 + 强 MCP；被社区对标 Rust 化（空载约 180 MB） |
| OpenAI Codex | 远程控制/移动端、沙箱、Guardian 审批、语音 | 跨设备与自动化工作流用户 | Rust 重写；沙箱后端抽象化（Seatbelt/token/ProcessContainer）、OTel 遥测 |
| Gemini CLI | 子代理体系、ACP 宿主集成、AST 代码理解 | 编辑器/编排器集成方 | 事件驱动 + ACP 协议为核心接入面；零依赖沙箱探索 |
| Copilot CLI | MCP OAuth/Entra 企业认证、企业策略治理 | 企业（Azure/Entra）环境 | 托管策略驱动；上下文与策略强耦合 |
| Kimi Code CLI | IDE 集成文档 | — | 数据不足以判断 |
| OpenCode | 免费层、多模型接入、本地单进程 | 成本敏感的个人开发者、低内存设备 | TS 桌面 + TUI；权限按工具粒度过滤 |
| Pi (pi-mono) | 多 provider、持久化（pi-durable）、终端体验 | 自托管/多模型玩家 | 嵌入式 SDK + 提供商聚合（新增 6 家） |
| Qwen Code | 统一 Agent Loop 内核、托管 Agent、无障碍/i18n | 平台化与自建 Harness 方 | 1.0 Preview 事件驱动内核切片上 main；强 CI 门禁 |
| DeepSeek TUI | 网关兼容、TUI 本地化 | 中文用户、第三方网关用户 | Provider descriptor 扩展、快照/undo 一致性 |

**关键分野**：Codex 与 Gemini CLI 在“协议/内核层”（Rust 沙箱、ACP）投入最深；Copilot CLI 走“企业策略优先”；OpenCode/Pi 走“多模型与成本优先”；Qwen Code 走“内核统一 + 平台化”。

## 5. 社区热度与成熟度

- **最活跃**：OpenAI Codex（稳定版发布 + 10 条底层重构 PR + 远程控制议题高评论）、Claude Code（Issues 声量最大但 PR 侧几乎停滞，呈“社区驱动、维护滞后”特征）。
- **快速迭代**：Qwen Code（1.0 内核切片式合入，2026-11-21 冻结前有明确时间压力）、OpenCode（同日连发 v2.3.1/v2.3.2 并伴随 Windows 回归，速度快但质量覆盖承压）、Gemini CLI（PR 密集修复，无发布）。
- **成熟稳定但存隐患**：Codex 已进入“平台化重构”而非补丁阶段，成熟度最高；Claude Code 版本迭代稳定但回归信任受损。
- **低活跃/停滞**：Kimi Code CLI（Issues 0、PR 仅 1 条已关闭文档）、DeepSeek TUI（v0.10.3 被单条认证缺陷阻塞，PR 多为 dependabot）。
- **噪声信号**：Qwen Code 的 CI 失败 Issue 评论量居首（#14724 达 457 条），反映门禁机制而非用户需求热度，需在评估活跃度时剔除。

## 6. 值得关注的趋势信号

1. **从“功能竞赛”转向“可靠性竞赛”**：头部工具今日 PR 几乎全为沙箱抽象、审批证据链、遥测 span、崩溃恢复——底层工程质量成为下一阶段护城河。对开发者的参考：选型时应把“回归修复速度与迁移说明”纳入评估维度。

2. **MCP 的“最后一公里”是企业认证**：Entra ID/回环回调/并发登录在 Copilot CLI 集中爆发，说明 MCP 生态的可用性瓶颈已从协议转向 OAuth 实现细节。企业用户应优先验证目标 IdP 的回调注册与 token 刷新路径。

3. **上下文预算逼近硬上限**：工具定义达 260K tokens（Copilot CLI）、全量目录击穿窗口（Codex）表明“扩大窗口”不是解法，“按需加载 + 可靠压缩”才是方向。开发者应关注各工具的 MCP 工具懒加载与压缩触发条件。

4. **提示缓存成为隐性成本变量**：工具注册顺序、模型版本差异即可改变缓存命中率（Pi 实测 6.1 缓存 12,800/12,931 vs 6.2 的 3,968/12,931），提示缓存不再是“厂商内部优化”，而是可被用户操作影响的成本因素。

5. **权限语义一致性是信任底座**：deny 声明与实际暴露工具不一致（OpenCode 44 个浏览器工具）、破坏性命令未被抑制（Gemini CLI）——多工具社区同步提出，预示“声明式权限 + 实测校验”将成为标配。

6. **可观测性诉求上升**：Codex 的 OTel 头刷新、MCP trace、插件推荐延迟指标，与 Qwen Code 的会话 JSONL 完整性、Pi 的上下文用量校准，共同指向“让失败可测量、可归因”。对技术决策者的参考：优先选择已暴露结构化日志与指标的工具，以降低运维盲区。

7. **发布节奏与数据缺口提示**：5 个 Release 中仅 2 个（Codex 稳定版、OpenCode）具备可核验的更新内容，Copilot CLI 与部分 alpha 仅标“Fixes and changes”——发布说明质量本身正成为工程成熟度的观察指标。

---

*说明：本报告严格基于所提供各工具日报数据生成，未对截断、缺失或未核验的条目做推断补充；Kimi Code CLI 因数据为 0/1 条，仅作活跃度判断，未纳入功能与定位的实质比较。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-18）

## 1. 热门 Skills 排行（Pull Requests）

> 注意：所给数据中所有 PR 的“评论”字段均为 `undefined`（无有效评论数），因此无法按评论数真实排序。以下按“近期更新活跃 + 涉及核心功能”综合选取，不代表评论量排名。所有状态均为 **OPEN**。

1. **mcp-builder 修复（mcp>=2 兼容）** — PR #1742
   功能：适配 `mcp>=2.0.0` 的导入重命名（`streamable_http_client`）及通过 `create_mcp_http_client` / `http_client` 配置自定义 headers。
   热点：MCP SDK 升级导致的破坏性变更兼容。
   状态：OPEN（2026-09-08 建，2026-10-08 更新）
   链接：anthropics/skills PR #1742

2. **skill-creator 触发评估修复** — PR #1298
   功能：隔离触发评估、修复 Windows 下 `select()` on subprocess pipes 及运行时失败被误判为非触发的问题。
   热点：Skill 评估准确性 / 跨平台稳定性。
   状态：OPEN（2026-06-10 建，2026-09-16 更新）
   链接：anthropics/skills PR #1298

3. **notion-spec-to-implementation + quantitative-resume-auditor** — PR #1245
   功能：将产品/技术规格转换为 Notion 中可执行的实现任务（含验收标准）；另一 skill 做量化简历审计。
   热点：工作流自动化（规格→任务）。
   状态：OPEN（2026-06-02 建，2026-10-15 更新）
   链接：anthropics/skills PR #1245

4. **webapp-testing: 移除 shell=True** — PR #1980
   功能：`with_server.py` 中避免将未净化的命令串传入 `system shell`。
   热点：安全（命令注入）。
   状态：OPEN（2026-10-06 建，2026-11-01 更新）
   链接：anthropics/skills PR #1980

5. **docx: LibreOffice 超时上报为错误** — PR #1792
   功能：`accept_changes.py` 超时不再误报成功，且校验输出 DOCX 无修订标记后才报成功。
   热点：文档处理可靠性。
   状态：OPEN（2026-09-19 建，2026-11-01 更新）
   链接：anthropics/skills PR #1792

6. **proofcore-contract-auditor** — PR #1771
   功能：对 Solidity/Rust 智能合约做静态分析，并将审计证明锚定到 TON 区块链。
   热点：Web3 方向的新 skill，生态扩展。
   状态：OPEN（2026-09-15 建，2026-09-16 更新）
   链接：anthropics/skills PR #1771

7. **pyxel 复古游戏开发 skill** — PR #525
   功能：用 Pyxel 创建、调试、验证 Python 复古游戏，支持无头输入驱动运行与帧检查。
   热点：较早期提案，长期保持更新。
   状态：OPEN（2026-03-05 建，2026-11-01 更新）
   链接：anthropics/skills PR #525

8. **claude-api: 修复失效文档链接** — PR #1730
   功能：替换 `academy-guide` 与 tool-use concepts 中 3 个 404 链接为规范 URL。
   热点：文档质量维护。
   状态：OPEN（2026-09-06 建，2026-10-04 更新）
   链接：anthropics/skills PR #1730

---

## 2. 社区需求趋势（Issues）

**安全与信任边界（最热）**
- Issue #492：社区 skill 以 `anthropic/` 命名空间分发，冒充官方 skill，产生权限授予的信任边界风险。46 评论为全榜最高。
  链接：anthropics/skills Issue #492

**组织内协作与分发**
- Issue #228：希望在 Claude.ai 内实现组织级 skill 共享（当前需手动下载/上传）。
  链接：anthropics/skills Issue #228
- Issue #189：`document-skills` 与 `example-skills` 插件内容重复，导致上下文重复占用。
  链接：anthropics/skills Issue #189

**评估与质量控制工具**
- Issue #556：`run_eval.py` 中 `claude -p` 在所有查询上 0% 触发 skill。
  链接：anthropics/skills Issue #556
- Issue #1352：`run_eval.py` 多 worker（默认 10）时 UUID 交叉匹配，产生假阴性触发率。
  链接：anthropics/skills Issue #1352
- Issue #202（已关闭）：skill-creator 应遵循最佳实践，减少冗长教学式内容。
  链接：anthropics/skills Issue #202

**上下文 / token 效率**
- Issue #1487：`claude-api` skill 单次工具调用急切注入约 156k tokens，耗尽上下文。
  链接：anthropics/skills Issue #1487
- Issue #1329：提出 `compact-memory`，用符号化记法压缩长时 agent 状态。
  链接：anthropics/skills Issue #1329

**新 Skill 方向提案**
- Issue #1385：推理质量门流水线（预任务校准→对抗审查→交付验证）。
  链接：anthropics/skills Issue #1385
- Issue #412（已关闭）：agent-governance（策略执行、威胁检测、信任评分、审计轨迹）。
  链接：anthropics/skills Issue #412

**文档/内容处理缺陷反馈**
- Issue #2064：`theme-factory` 描述只说明“做什么”而非“何时使用”。
  链接：anthropics/skills Issue #2064
- Issue #2018：`docx` 的 `merge_runs.py` 丢弃 run 级命名空间声明，写出非法 XML。
  链接：anthropics/skills Issue #2018
- Issue #1868：`slack-gif-creator` 的 `create_gradient_background()` 因插值比例 off-by-one 从不产生 `bottom_color`。
  链接：anthropics/skills Issue #1868

**明确的期待方向**：工作流自动化（规格→任务）、智能体治理与推理质量、上下文压缩、组织级共享、评估可靠性、文档/内容处理正确性、安全边界。

---

## 3. 高潜力待合并 Skills（OPEN 且近期活跃）

1. **PR #1980 webapp-testing 安全修复**（2026-11-01 更新）— 命令注入风险，修复面窄、价值高。
   链接：anthropics/skills PR #1980
2. **PR #1792 docx 超时处理修复**（2026-11-01 更新）— 误报成功问题，影响文档可靠性。
   链接：anthropics/skills PR #1792
3. **PR #2019 xlsx 定义名解析修复**（2026-11-03 更新，Fixes #2013）— 修复 worksheet 级定义名/别名的漏报。
   链接：anthropics/skills PR #2019
4. **PR #2108 README 文档澄清**（2026-11-03 更新）— 说明 document skills 快照状态与同步关系。
   链接：anthropics/skills PR #2108
5. **PR #1950 claude-api pause_turn 指引更新**（2026-11-10 更新）— 反映 Python SDK 1.1.0 自动恢复能力。
   链接：anthropics/skills PR #1950
6. **PR #1298 skill-creator 触发评估隔离**（2026-09-16 更新）— 直指 Issue #1352 类评估可靠性痛点。
   链接：anthropics/skills PR #1298

> 说明：数据未提供各 PR 的合并状态或维护者评审信号，“高潜力”仅基于活跃度与问题重要性推断，非确定性结论。

---

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是“**可靠与安全**”——一方面要求 skill 的评估、触发与文档处理不再误报/失效（评估准确性、上下文控制、XML/超时正确性），另一方面要求厘清官方与社区 skill 的信任边界与分发机制（`anthropic/` 命名空间滥用、组织级共享、插件去重）。

---

数据说明：所给数据中 PR 的评论数与点赞均为 `undefined`/0，Issues 才有明确评论数；本报告未引入任何数据之外的事实。

---

# Claude Code 社区动态日报（2026-11-18）

> 数据来源：github.com/anthropics/claude-code。以下内容严格基于所提供的数据。

## 1. 今日速览

今日发布 v2.1.327，新增 `/install-github-app` 仓库变更确认和 `claude mcp add-json` 从 stdin 读取配置的能力，后者可避免 token 出现在命令行。社区侧，Team 套餐缺少“Max 20x 等价层”的请求以 202 个 👍 和 76 条评论成为最热议题；同时多条关于回归（subagentStatusLine 被移除、Opus 5.5 体验下滑、keep-alive 失效）的 Issue 持续发酵。

## 2. 版本发布

**v2.1.327**
- `/install-github-app` 在修改仓库前增加确认步骤。
- 新增 `claude mcp add-json <name> -`，可从 stdin 读取 MCP 服务器 JSON，使 token 不必出现在命令行；该命令不可在 Claude Code 会话内使用。
- 恢复会话时，若存在更早的内容，会新增一行提示（发布说明在此处截断）。

## 3. 社区热点 Issues（10 条）

1. **#47509 [OPEN] Team 套餐需要 Max 20x 等价层** — 76 评论 / 202 👍
   CTO、技术负责人、资深开发者等重度用户反映 Team 的 Standard（1.25x Pro）与 Premium（6.25x Pro）之间缺少面向 agentic 编码的档位。是今日讨论量最大的议题。
   https://github.com/anthropics/claude-code/issues/47509

2. **#1935 [OPEN] 退出时 MCP 服务器未被正确终止，产生孤儿进程** — 51 评论 / 20 👍
   跨越 2025-06 至 2026-11 的长期 macOS 缺陷，带复现标记，影响面广且至今未解决。
   https://github.com/anthropics/claude-code/issues/1935

3. **#29017 [OPEN] VSCode 扩展丢失对话历史** — 35 评论 / 24 👍
   IDE 集成的核心可靠性问题，直接影响日常使用体验。
   https://github.com/anthropics/claude-code/issues/29017

4. **#109446 [OPEN] 2.1.323 移除 `subagentStatusLine` 且无替代方案** — 13 评论 / 39 👍
   标记为 regression：子代理的上下文、成本、模型和 effort 信息全部不可见，且无迁移路径，开发者对“静默移除”反应强烈。
   https://github.com/anthropics/claude-code/issues/109446

5. **#105477 [OPEN] Opus 5.5 自 10 月 19 日当周起回归，至 10 月 26–27 日不可用（Max 20x）** — 7 评论 / 21 👍
   付费用户报告模型质量退化且缺乏人工反馈渠道，反映模型侧问题的信任与支持链路风险。
   https://github.com/anthropics/claude-code/issues/105477

6. **#100353 [OPEN] 自 2.1.213 起一次连接错误即永久禁用 HTTP keep-alive** — 2 评论 / 1 👍
   带复现的 regression：长会话退化为 stream-idle-watchdog 卡顿与整段对话重发，直到重启。影响长时编码会话的稳定性与成本。
   https://github.com/anthropics/claude-code/issues/100353

7. **#89862 [OPEN] MCP OAuth 的 refresh_token 请求缺少 `scope`** — 4 评论 / 1 👍
   刷新后的 token 可能带错误 scope 导致服务端 401，是 MCP 鉴权链路上的实际阻塞点。
   https://github.com/anthropics/claude-code/issues/89862

8. **#109243 [OPEN] Windows 桌面版每次登录都是“短”会话（token 一天内过期）** — 7 评论
   与 Remote Control、Require trusted devices 相关，导致几乎每天需重新登录。
   https://github.com/anthropics/claude-code/issues/109243

9. **#98420 [OPEN] 对标 Codex CLI 的 Rust 化：Claude Code 空载约 180 MB** — 1 评论
   给出实测数据（空载约 181 MB、`claude -c` 恢复 34 秒后 320 MB），引发对 CLI 内存足迹的讨论；与 #105268（约 20 并发会话耗约 20 GB）同属性能方向。
   https://github.com/anthropics/claude-code/issues/98420

10. **#91265 [OPEN] Cowork VM 在 Windows 引发内核池泄漏（Toke/File/SeAt）** — 5 评论
    带复现，导致系统级 UI 退化，是 Windows 平台较严重的稳定性问题。
    https://github.com/anthropics/claude-code/issues/91265

其他值得留意：**#87999 [CLOSED] VS Code 扩展增加 ghost-text 提示建议**（9 评论）已关闭；**#111011 [CLOSED] 第三方 hook 失败会锁死用户且无恢复途径**（11-18 当日创建并关闭），见第 6 节。

## 4. 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新，不足以挑选 10 个：

1. **#86537 [OPEN] 修复 CHANGELOG.md 中重复单词** — 作者 genesisdayabl-droid
   修正 `CLAUDE_BASH_NO_LOGIN`（1.0.124）条目中的 “to to” 重复，纯文档改动，无测试计划。
   https://github.com/anthropics/claude-code/pull/86537

## 5. 功能需求趋势

- **计费与套餐分层**：#47509 显示 Team 档位与重度 agentic 使用强度不匹配，是呼声最高的商业化需求（202 👍）。
- **IDE 集成体验**：VSCode 扩展的对话历史（#29017）与提示建议（#87999 已关闭）、桌面端插件/Mod 面板的窗格菜单（#104845）构成一组 IDE/桌面体验诉求。
- **性能与资源占用**：内存足迹（#98420、#105268）、并发会话开销、Windows 内核池泄漏（#91265）成为独立话题簇，并与 Codex CLI 的 Rust 实现形成对比参照。
- **MCP 生态健壮性**：进程生命周期（#1935）、OAuth scope（#89862）、插件 eval 沙箱加载插件自有 agents（#96121）、并发会话下的订阅鉴权（#105268）。
- **TUI/CLI 可定制性**：#97652 请求 `/color` 支持任意十六进制颜色（终端已支持 truecolor）；#109446 要求恢复子代理状态行信息。
- **工具可用性可控**：#93675 指出自 2.1.233 起 Task/Todo 工具在 Opus 4.8、Sonnet 5、Fable 5 及更新模型上默认关闭，需 `CLAUDE_CODE_ENABLE_TODO_TOOLS=1`，且无 settings 键可默认保留会话清单。

## 6. 开发者关注点

- **回归与“静默移除”最伤信任**：#109446（subagentStatusLine 无替代、无迁移）、#100353（keep-alive 一次性失效）、#105477（模型质量下滑）均指向同一情绪——变更缺少说明与回退路径。
- **失败模式可恢复性**：#111011 中，第三方（iTerm2）写入 `~/.claude/settings.json` 的 hook 在非 iTerm2 环境下失败，导致用户完全无法进入 Claude Code，需自行排查；该 Issue 当日即被关闭。
- **安全与凭据管理**：v2.1.327 的 stdin 读取 JSON 直接回应了“token 不上命令行”的诉求，是社区与产品方向一致的正面案例。
- **鉴权与会话持久性**：Windows 桌面版短登录（#109243）、macOS 桌面版因应用身份碎片化无法访问 Documents（#93747）反映权限/鉴权层的碎片化问题。
- **成本与容量**：昂贵档位下的模型退化（#105477）与高并发会话的内存成本（#105268）共同构成“付费价值感知”压力；#47509 的高赞进一步印证。
- **平台覆盖**：Issues 中 Windows（#105477、#109243、#91265）、macOS（#1935、#29017、#93747、#96121）、Linux（#89862、#100353、#111011、#98420）问题均衡分布，跨平台一致性仍是长期议题。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-11-18

## 1. 今日速览

今日 Codex 发布稳定版 **0.170.0**，核心亮点是 TUI 端实时语音通话的 WebRTC 协商，以及多环境同名 MCP 服务器的实验性支持；0.171/0.172 仍处于 alpha 阶段。社区侧最热的话题集中在**远程控制与移动端连接不稳定**（多个 Android/iOS 配对失败、断连），以及 Windows 沙箱和 MCP 上下文膨胀导致的问题。PR 层面则以 Guardian 审批链路、沙箱后端重构和遥测可观测性为主。

---

## 2. 版本发布

**rust-v0.170.0（稳定版）**
- 新增：TUI 中实时语音通话的 WebRTC 协商（[#61172](https://github.com/openai/codex/pull/61172)）
- 新增：OpenTelemetry HTTP exporter 的认证头自动刷新（[#61028](https://github.com/openai/codex/pull/61028)）
- 新增：跨环境使用同名 MCP 服务器的**实验性**支持（[#60905](https://github.com/openai/codex/pull/60905)）
- 包含若干 Bug 修复（release notes 未列出具体条目）
- 发布页：https://github.com/openai/codex/releases/tag/rust-v0.170.0

**其他动态**：`rust-v0.169.1` 仅含 chores，官方说明无已验证的更新要点，属维护性补丁。`rust-v0.171.0-alpha.13`、`rust-v0.172.0-alpha.1`、`rust-v0.170.0-alpha.4.2` 为预发布版本，暂无内容说明，不建议生产使用。

---

## 3. 社区热点 Issues（10 条）

1. **#39974 远程控制跨 Android/iOS 不稳定、频繁断连（Windows Desktop 正常）**
   31 条评论、7 👍，今日评论数最高。复现于三台手机、两个平台，说明问题不在单一设备，而在 Remote Control 中继/会话层。
   https://github.com/openai/codex/issues/39974

2. **#31925 恢复 macOS 的 Option+Space 快捷对话**
   30 条评论、**54 👍**，社区共鸣最强的需求。ChatGPT/Codex 应用合并后丢失高频快捷键，属体验回归。
   https://github.com/openai/codex/issues/31925

3. **#54685 Auto-review 在可信上下文缺失时错误拒绝跨任务审批**
   24 条评论。涉及 Guardian/审批安全逻辑的误判，直接影响自动化工作流的可用性。
   https://github.com/openai/codex/issues/54685

4. **#39856 Windows Remote：二维码配对成功但 Android 无法建立会话（`nextConnectionCount=0`）**
   19 条评论。与 #39974 相互印证，指向远端握手阶段的缺陷。
   https://github.com/openai/codex/issues/39856

5. **#42950 公开站点被 Cloudflare 拦截外部访问**
   18 条评论。Sites 功能的对外可用性问题，影响发布类工作流。
   https://github.com/openai/codex/issues/42950

6. **#58704 Linux 桌面语音：PipeWire 主增益被置零**
   14 条评论。语音播放异常偏小，与今日 0.170.0 的语音方向相关，值得联动排查。
   https://github.com/openai/codex/issues/58704

7. **#62212 不支持的音频工具输出导致后续纯文本轮次返回 HTTP 400**
   11-18 当日提交、8 条评论。会话被“污染”后持续报错，影响面较广。
   https://github.com/openai/codex/issues/62212

8. **#61679 Apps 工具目录随每次请求全量发送，新会话即超上下文窗口并触发自动压缩循环**
   3 条评论但技术影响重大：直接关系到上下文成本与稳定性，与今日“同名 MCP 服务器”实验特性相关。
   https://github.com/openai/codex/issues/61679

9. **#50920 Windows：取消的 turn-diff 快照在仓库留下超 774 GiB 的 `tmp_pack_*` 文件**
   3 条评论。磁盘被大量占用的严重问题，自动 `git add` 行为需重新设计。
   https://github.com/openai/codex/issues/50920

10. **#31991 增强：支持 Desktop 通过受管本地 App Server 进行移动端 SSH/Tailscale 直连**
    5 条评论、7 👍。社区希望绕开托管中继以降低延迟，是远程控制方向的明确功能诉求。
    https://github.com/openai/codex/issues/31991

> 其他值得留意的当日新报：#62296（CLI 将 shell 提示符间的文本渲染为多行删除线）、#62322（Agent 丢失用户意图、只诊断不追根因）。

---

## 4. 重要 PR 进展（10 条）

1. **#62331 将 Windows MXC 沙箱迁移到公开 V1 SDK**
   使用 V1 API 在 `ProcessContainer` 中启动命令并继承 stdio，替换旧沙箱接口。
   https://github.com/openai/codex/pull/62331

2. **#62317 将沙箱准备逻辑下沉到平台后端**
   `SandboxManager` 负责后端选择与共享准备，命令包装与会话建立交给 Linux / macOS Seatbelt / Windows token 等后端，为后续沙箱统一铺路。
   https://github.com/openai/codex/pull/62317

3. **#62310 同步审批采用 Guardian V3 board 证据**
   避免待审批动作在 Guardian V3 完成消息路由前就进入复核，从而漏掉撤销/续期信号。
   https://github.com/openai/codex/pull/62310

4. **#62309 同步审批使用已挂载的 Guardian reviewer**
   要求 reviewer 先补齐证据；若审批上下文在准备期间变化，首个裁决仍需复核。
   https://github.com/openai/codex/pull/62309

5. **#62308 抽出 Guardian 裁决执行与待审批动作上下文**
   将同步裁决执行收敛进 Guardian review session，统一管理证据准入与待路由清理。
   https://github.com/openai/codex/pull/62308

6. **#62314 授权证据限定在 agent fork 本地**
   防止把祖先会话的消息/审批误当作子 agent 自身的授权证据——与 #54685 类误判直接相关。
   https://github.com/openai/codex/pull/62314

7. **#62325 remote exec-server 接受入站 Noise 连接**
   此前 executor 只能出站连到 rendezvous relay；新增入站监听允许可达的 harness 直连，同时保留中继注册。呼应 #31991 的诉求。
   https://github.com/openai/codex/pull/62325

8. **#62320 为 MCP 绑定捕获与工具目录刷新加 trace span**
   区分启动、锁等待与目录处理耗时，正对 #61679 的上下文膨胀诊断需求。
   https://github.com/openai/codex/pull/62320

9. **#62326 在初始上下文装配阶段度量插件推荐延迟**
   新增 `codex.initial_context.plugin_recommendations_wait_ms` 指标，量化插件推荐对首轮延迟的影响。
   https://github.com/openai/codex/pull/62326

10. **#62332 在 TUI 内打开 Codex 会话链接 / #62335 错误页可进入命令中心**
    两者改善终端内导航与模型错误后的可恢复性；会话搜索结果链接无需离开终端即可打开。
    https://github.com/openai/codex/pull/62332 · https://github.com/openai/codex/pull/62335

> 另注：#14623（回滚时裁剪合成上下文）为 3 月提交、今日仍在更新的长期 OPEN PR，与上下文管理主题相关：https://github.com/openai/codex/pull/14623

---

## 5. 功能需求趋势

- **远程控制与移动端**：跨平台配对失败、断连、托管中继延迟偏高，社区希望支持本地 App Server + SSH/Tailscale 直连（#39974、#39856、#31991）。
- **上下文与成本治理**：工具目录全量下发导致超窗与压缩循环，“同名 MCP 服务器”实验特性也指向多环境配置管理（#61679）。
- **沙箱与权限模型**：Windows 受限权限配置下的启动失败、驱动器根路径报错、Work 全权限选择失效，反映权限语义不够可预期（#57659、#54695、#59528）。
- **桌面 UI/UX 回归**：快捷键丢失（#31925）、归档会话无法删除（#39839）、PDF 预览高 CPU（#58367）、应用内浏览器归属判断错误（#61464）。
- **语音能力**：CLI 端 WebRTC 已入稳定版，但桌面/移动端语音播放与音频工具输出仍有多处缺陷（#58704、#62212）。
- **Agent 行为质量**：意图跟踪、根因追问、授权证据归属等模型/编排行为问题开始成为显性议题（#62322、#54685）。

---

## 6. 开发者关注点

- **Windows 桌面是故障密度最高的平台**：沙箱、Chrome/Crashpad、驱动器权限、turn-diff 临时包堆积（#50920 的 774 GiB 尤其刺眼）。开发者需要更明确的权限诊断信息与更保守的文件系统副作用。
- **审批与自动化之间的摩擦**：Auto-review / Guardian 对“可信上下文”的判断过于严格，导致正常跨任务审批被拒；PR #62310/#62309/#62314 显示官方正在重构证据链路。
- **可观测性诉求上升**：多个 PR 围绕 OpenTelemetry 头刷新、MCP trace span、插件推荐延迟指标，说明社区与官方都在为“慢在哪”补测量。
- **上下文窗口是硬约束**：CLI 0.167 环境下工具目录全量注入即可击穿窗口，建议关注 MCP 工具的按需加载与压缩策略。
- **终端体验细节不可忽视**：TUI 渲染错误（#62296）与链接不可点（#62332）虽小，但直接作用于日常操作流。

*说明：以上内容仅基于所提供 GitHub 数据，未逐一核验正文之外的细节。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-18）

## 1. 今日速览

今日无新版本发布。社区讨论几乎全部集中在 `area/agent`：子代理（subagent）成功率误报、generalist agent 永久挂起、Browser Agent 配置失效等问题持续占据高优先级。PR 侧则以 ACP 模式的会话中途干预（mid-turn steering）、token 统计修复和若干 Windows/沙箱环境缺陷修复为主线。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#22323 [p1] 子代理 MAX_TURNS 恢复被误报为 GOAL 成功** — 13 条评论，今日讨论热度最高。`codebase_investigator` 在未做任何分析前即达到回合上限，却上报 `status: "success"` 和 `Termination Reason: "GOAL"`，直接掩盖了中断事实。这会污染上层编排与评测结果，是最值得优先修复的正确性问题。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [p1] Generalist agent 永久挂起** — 8 条评论、8 个 👍（今日点赞数最高）。用户报告一旦 defer 到 generalist agent，连创建文件夹这类简单操作都会卡死长达一小时。高赞说明影响面较广，"禁用 defer 到子代理"成为用户的绕行方案。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21968 [p2] Gemini 几乎不会主动使用 skills 和子代理** — 7 条评论。作者在明确指令时才会触发，相关任务场景下不会主动调用，意味着 subagent 架构的实际收益尚未兑现。
   https://github.com/google-gemini/gemini-cli/issues/21968

4. **#19873 [p2] 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由** — 9 条评论，是今日评论数第二的方案型 Issue。提出让 Gemini 3 以其原生偏好的 POSIX 工具链（`grep`、`cat`、`sed`、`awk`）探索和修改代码，属于方向性的架构议题。
   https://github.com/google-gemini/gemini-cli/issues/19873

5. **#22745 [p2] 评估 AST 感知的文件读取、搜索与代码库映射** — 7 条评论的 EPIC。目标是一次工具调用精确读取方法边界、减少回合数，是降低 token 与回合开销的关键探索。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 [p2] Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）** — 5 条评论。AgentRegistry 显然读取了配置但 Browser Agent 未生效，配置文件失效会削弱用户对代理行为的可控性。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#24246 [p2] 工具数超过 128 时触发 400 错误** — 3 条评论。摘要中同时出现"超过 400 个工具"的表述，工具数量上限与作用域裁剪逻辑需要更智能的处理。
   https://github.com/google-gemini/gemini-cli/issues/24246

8. **#22672 [p2] 代理应阻止/抑制破坏性行为** — 3 条评论。模型在复杂 git 操作中会使用 `git reset` 或 `--force`，即使存在更安全的替代方案，属于安全边界问题。
   https://github.com/google-gemini/gemini-cli/issues/22672

9. **#23571 [p2] 模型频繁在随机位置创建临时脚本** — 3 条评论。限制为 shell 执行后，模型会在多个目录生成编辑脚本，给干净提交带来大量清理开销。
   https://github.com/google-gemini/gemini-cli/issues/23571

10. **#21983 [p1] browser 子代理在 Wayland 下失败** — 4 条评论。与 #22232（浏览器 profile 锁的 fail-fast 策略）共同暴露 Browser Agent 在跨平台与环境恢复上的鲁棒性不足。
    https://github.com/google-gemini/gemini-cli/issues/21983

> 其他值得留意：#22186（`get-shit-done` 输出钩子导致崩溃，p1）、#22746（评估使用 AST 感知 CLI 工具映射代码库，推荐从 tilth 或 glyph 起步）、#22598（通过 `/chat share` 可视化子代理轨迹，便于评测）。

## 4. 重要 PR 进展（10 条）

1. **#30354 [CLOSED] ACP 支持回合中途干预（`_session/steering`）** — 修复 #30048。此前 ACP 模式下外部编辑器宿主只能等待整个多工具回合结束或中断，现在可以在回合进行中插入引导。
   https://github.com/google-gemini/gemini-cli/pull/30354

2. **#30353 ACP token 用量追踪与配额元数据标准化** — 修复 #24280、#27985：保留取消回合的 `PromptResponse.usage`，并统一 ACP 模式下的 token 统计口径。
   https://github.com/google-gemini/gemini-cli/pull/30353

3. **#30219 ACP 会话压缩后重载出现 400** — 将已完成/失败的工具调用记录到当前活跃 chat 而非压缩前的 chat 实例，避免工具调用挂到已移除的模型消息上。
   https://github.com/google-gemini/gemini-cli/pull/30219

4. **#30334 异步解析 PowerShell 命令，消除 UI 卡顿** — 修复 Windows 上 Shell 工具面板出现前 Thinking 动画与计时器冻结数秒的问题。
   https://github.com/google-gemini/gemini-cli/pull/30334

5. **#30338 保留含未解析展开的 shell 命令的 ASK_USER 决策** — `applyShellHeuristics()` 基于未展开文本分类，可能导致 bash 重写参数后绕过确认，属安全相关修复。
   https://github.com/google-gemini/gemini-cli/pull/30338

6. **#30335 不再用空字符串覆盖 `core.sshCommand`** — `getSafeGitEnv()` 将该项设为空串导致所有需要 SSH 的 git 操作直接失败。
   https://github.com/google-gemini/gemini-cli/pull/30335

7. **#30331 修复 MCP 环境变量中 `=` 与空值被截断** — `gemini mcp add -e KEY=value` 用 `split('=')` 解析，`TOKEN=abc=def==` 被静默存成 `"abc"` 且仍返回 0。
   https://github.com/google-gemini/gemini-cli/pull/30331

8. **#30115 [CLOSED][p2] 阻止自定义命令与提示替换中的 `$` 模式展开** — `{{args}}` 与 `${AgentSkills}`、`${SubAgents}` 等替换会误展开 `$$`、`$&`、`$1` 等 JS 替换模式，导致内容损坏。
   https://github.com/google-gemini/gemini-cli/pull/30115

9. **#30107 [CLOSED][p1] 终端换行时保持认证 URL 可点击** — 窄终端下登录链接被截断，丢失 `response_type` 等查询参数，影响登录流程。
   https://github.com/google-gemini/gemini-cli/pull/30107

10. **#30349 / #30348 性能与可访问性小改进** — 前者在模块作用域预编译脱敏与错误消息处理的正则、预计算敏感键模式；后者为 DevTools 复制操作增加勾选反馈与 `aria-label`。
    https://github.com/google-gemini/gemini-cli/pull/30349
    https://github.com/google-gemini/gemini-cli/pull/30348

> 另有测试补充 #30216（为 `isApiError`、`isStructuredError` 增加单测），以及若干长期 Stale 的版本号 bump 与 dependabot PR（#29196、#29403、#28450）今日被更新，建议清理。

## 5. 功能需求趋势

- **子代理体系成熟度**：几乎垄断今日讨论——成功率语义（#22323）、主动调用率（#21968）、迭代规划（#20195 Sprint 1）、轨迹可视与分享（#22598）、仓库内示例代理（#18283）、codebase_investigator 改名与增强（#18282）。核心诉求是从"能跑"走向"可观测、可评测、可信"。
- **AST / 结构化代码理解**：#22745 与 #22746 组成一条明确的探索线，目标是用 AST 感知工具降低回合数与 token 消耗。
- **编辑器与宿主集成（ACP）**：mid-turn steering、token/配额元数据、压缩会话恢复，表明 ACP 正成为外部编辑器与编排器的主要接入面。
- **沙箱与执行安全**：零依赖 OS 沙箱（#19873）、抑制破坏性命令（#22672）、shell 展开前的确认保留（#30338）。
- **业务工具控制面**：工具数超限（#24246）、`settings.json` 覆盖失效（#22267）、MCP 环境变量解析（#30331）。
- **跨平台稳定性**：Windows PowerShell UI 冻结、Wayland 下浏览器子代理失败、浏览器 profile 锁恢复。

## 6. 开发者关注点

- **"静默失败"最伤信任**：子代理失败被报成成功、`mcp add` 解析错误仍返回 0、配置项被忽略——开发者反复要求错误必须显式暴露，而非以 success 或 0 退出码掩盖。
- **挂起与无响应**：generalist agent 永久卡死（8 👍）与 vite 交互提示卡住（#22465）是体验层面最直接的痛点，用户已自行总结出"禁止 defer 到子代理"的绕行方案。
- **配置与安全默认值**：`settings.json` 不生效、`core.sshCommand` 被置空、`$` 模式误展开，均属于"默认行为不可预期"类问题，修复优先级应高于新功能。
- **工作区污染**：临时脚本散落、破坏性 git 命令，直接影响能否干净提交，是日常使用中的高频摩擦点。
- **评测与可观测性缺口**：多个 Issue 指向缺乏行为评测（#22465 明确要求新增 behavioral eval）与子代理轨迹不可见（#22598）。

---
*说明：以上内容均基于所提供的 GitHub Issues/PR 数据整理，未对摘要被截断的条目做补充推断。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-18）

## 1. 今日速览

过去 24 小时没有 Pull Request 更新，版本侧仅发布 v1.0.114 与 v1.0.114-0，更新说明均为"Fixes and changes"，无细节可展开。社区讨论高度集中于 MCP 的 OAuth 认证链路：非第一方 HTTP 服务器、Entra ID（含 macOS 与 Windows 平台）在多处环节失败，涵盖授权取消、code→token 交换未执行、回调参数被拒、浏览器会话重复弹出等。此外，企业策略与 MCP 配置的交互（"Registry only"策略、强制远程设置刷新）也引发多条后台稳定性问题。

## 2. 版本发布

- **v1.0.114**（2026-11-18）：更新说明仅标注 "Fixes and changes"，未提供具体条目。
- **v1.0.114-0**（2026-11-18）：更新说明同样仅为 "Fixes and changes"。

两个版本的说明均未列出修复项细节，建议关注后续 release notes 补充。

## 3. 社区热点 Issues（Top 10）

| # | 标题要点 | 评论 / 👍 | 关注理由 |
|---|---|---|---|
| [#4017](https://github.com/github/copilot-cli/issues/4017) | MCP OAuth（Desktop 应用）：非第一方 HTTP 服务器取消 host-token 后不再启动延迟的"运行时浏览器流"，无认证、无报错、无弹窗 | 7 / 3 | 今日评论最多。Atlassian、incident.io 等第三方服务器完全无法认证，且失败是静默的，最难排查。 |
| [#5250](https://github.com/github/copilot-cli/issues/5250) | macOS：Entra-broker MCP 服务器启动失败，并发登录被拒（"sign-in is already in progress"），被拒的缓存令牌无法恢复 | 4 / 0 | 涉及 Azure DevOps 与 WorkIQ 两个 Entra 保护的远端服务器，启动即失败。 |
| [#5350](https://github.com/github/copilot-cli/issues/5350) | 交互式 MCP OAuth：授权码已收到、成功页已返回，但 code→token 交换从不执行，服务器卡在 "Connecting" | 3 / 0 | 链路在最后一步中断，现象与 #4017 同属授权流程断裂。 |
| [#5155](https://github.com/github/copilot-cli/issues/5155) | 云代理："Registry only" MCP 策略会丢弃所有仓库配置的 MCP 服务器；代理桥接配置无法计算指纹 | 3 / 1 | 企业策略与仓库配置冲突，且无报错提示。 |
| [#5151](https://github.com/github/copilot-cli/issues/5151) | 回归：工具定义从 15K 膨胀到约 260K tokens 后，默认上下文档位的 Sol 模型在首个提示前即被拒绝（`compaction_static_context_blocked`） | 3 / 0 | 直接阻断 `gpt-5.6-sol`、`gpt-6.1-sol` 的默认档使用，属可用性级回归。 |
| [#5040](https://github.com/github/copilot-cli/issues/5040) | MCP OAuth：Entra 拒绝 127.0.0.1 回调（AADSTS50011），未找到 localhost host 覆盖配置 | 3 / 0 | 回环地址与 Entra 注册回调不匹配，影响 1.0.91。 |
| [#5380](https://github.com/github/copilot-cli/issues/5380) | 通过 `create_session` 创建的会话不启动扩展，直到用户切换过去 | 2 / 0 | 扩展工具、skills、hooks 全部缺失，影响会话自动化。 |
| [#5473](https://github.com/github/copilot-cli/issues/5473) | Windows：`copilot-keychain-chunk.*` 凭据残留累积，可能耗尽 Credential Manager | 2 / 0 | 风险外溢到整台机器——凭据库满后所有应用都无法保存凭据。 |
| [#5341](https://github.com/github/copilot-cli/issues/5341) | `forceRemoteSettingsRefresh` 策略下，启动或 `--resume` 可能无限挂起（"settings settlement deadline" 超时） | 2 / 0 | 企业托管用户遇到间歇性启动卡死（已关闭）。 |
| [#5134](https://github.com/github/copilot-cli/issues/5134) | Windows：MCP OAuth 初始化失控，反复打开浏览器会话，直至用户终止进程 | 2 / 1 | 属于可复现的启动阻塞（已关闭）。 |

其他值得关注：#5222（已禁用的 MCP 服务器仍被报告为"blocked by policy"且警告重复）、#5091（MCP 已连接仍反复重连并堆积提示）、#5195（选择自定义 agent 后，从第二次模型调用起 MCP 工具全部注入上下文）。

## 4. 重要 PR 进展

过去 24 小时内 **无 Pull Request 更新**（共 0 条），本部分无法基于所给数据展开。

## 5. 功能需求趋势

从本期 Issues 提炼，社区关注点集中在以下方向：

- **MCP 认证与 OAuth 健壮性（占比最高）**：非第一方 HTTP 服务器的浏览器流、交互式 code→token 交换、Entra ID 回调地址（127.0.0.1 与 localhost）匹配、并发登录互斥、缓存令牌失效后恢复。参见 #4017、#5350、#5040、#5250、#5134、#2960。
- **企业策略与配置治理**："Registry only"策略静默丢弃仓库级 MCP（#5155）、强制远程设置刷新导致挂起（#5341）、禁用服务器仍触发策略警告（#5222）。
- **启动与加载体验**：MCP、插件加载阻塞启动、应异步化（#5090）；重复的 MCP 连接与断连通知需要开关（#5034）；MCP 已连接仍反复重连（#5091）。
- **上下文与工具加载策略**：工具定义膨胀导致静态上下文被阻断（#5151）；自定义 agent 下 MCP 工具延迟加载失效（#5195）；子 agent 的工具发现被父级工具列表限制（#5191）。
- **会话与插件运行时**：`create_session` 不拉起扩展（#5380）；`/clear` 不终止 stdio MCP 子进程（#4697）；向插件暴露稳定的 turn ID（#5487）。
- **跨平台凭据管理**：Windows Credential Manager 残留（#5473）；Authorization header 长度上限不足（#2960）。

## 6. 开发者关注点

- **静默失败最伤调试效率**：MCP 认证失败往往"无认证、无报错、无弹窗"（#4017），或仅在 debug 级别记录（#5347 中交互模式报 "Connected Connectors could not be loaded"，而 headless `-p` 模式正常）。开发者普遍要求更清晰的错误提示与更易发现的日志。
- **Entra ID 集成是当前最大痛点**：多条 Issue 覆盖回调地址被拒、并发登录冲突、令牌交换缺失、header 长度限制，涉及 macOS、Windows 与 CLI 交互模式多个入口。
- **平台级副作用值得警惕**：Windows 凭据残留可耗尽 Credential Manager，影响整机所有应用（#5473）；这属于超出 CLI 本身范围的高优先级问题。
- **企业策略与本地配置的关系需要明确**：策略生效过程缺乏可观测性，配置被丢弃或挂起时难以判断原因。
- **性能与上下文预算**：工具定义增长到约 260K tokens 直接使默认上下文档位不可用（#5151），说明 MCP 工具规模的扩展正逼近上下文上限，需要在加载策略上做取舍。

---

*说明：第 2、4 部分受限于所给数据（release 说明无细节、PR 数为 0），未做补充推断。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-11-18）

## 1. 今日速览

过去 24 小时内，MoonshotAI/kimi-cli 仓库无新版本发布，也无 Issue 更新。唯一的动态是一条此前已关闭的文档类 PR（#1178）发生更新，内容涉及重写 Zed 编辑器中 Kimi CLI 的使用说明。整体社区活跃度极低，今日没有可分析的功能需求或开发者痛点信号。

## 2. 版本发布

过去 24 小时内无新版本发布，本节省略。

## 3. 社区热点 Issues

过去 24 小时内 Issues 更新数为 0，无内容可呈现。

## 4. 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新，不足 10 条，按实际数量列出：

- **#1178 [CLOSED] docs(ides): Replace instructions on how to use Kimi CLI in Zed**
  - 作者：yeskunall｜创建：2026-02-18｜更新：2026-11-18｜👍 0
  - 内容：文档变更（docs），针对 `ides` 目录，替换在 Zed 编辑器中使用 Kimi CLI 的说明。根据标题判断属于 IDE 集成文档的修订。
  - 说明：该 PR 状态为已关闭（CLOSED），非合并状态；评论数在数据中缺失（undefined），无法评估社区讨论情况。摘要仅含贡献模板文本，未提供具体改动细节。
  - 链接：MoonshotAI/kimi-cli PR #1178

## 5. 功能需求趋势

今日 Issues 更新数为 0，无足够数据提炼功能需求趋势。唯一可见的信号来自 PR #1178 的文档分类（`ides`），指向 **IDE 集成文档** 的维护，但单条已关闭的文档 PR 不足以构成趋势判断。

## 6. 开发者关注点

今日数据不足以总结开发者痛点或高频需求。仅可提示：PR #1178 的摘要文本为贡献模板内容，未包含实际需求描述，无法据此推断社区关注点。

---

**数据说明**：本报告严格基于所提供的 GitHub 数据。Issues 为 0 条、Releases 为 0 条，PR 仅 1 条且为已关闭的文档变更，因此第 3、5、6 部分无法按预期规模（各 10 条）展开，已如实标注数据缺口，未做推断性补充。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-18

## 今日速览

v2.3.2 与 v2.3.1 接连发布，分别针对 GPT-6.2 Prompt Caching 计费问题与超时 Shell 命令的处理策略做了修复。社区侧，免费额度（Free tier）主报告帖评论数已逼近 400，仍是最大声量来源；同时 v2 在 Windows 桌面端出现工具调用完全不执行、渲染器栈溢出的严重回归，值得优先关注。

## 版本发布

- **v2.3.2**：修复 GPT-6.2 在 Responses 路由下系统提示词不被缓存、每一步都按未缓存输入重复计费的问题。现在无论走 OpenAI API Key 还是 ChatGPT 登录，都会将系统提示词作为前置 developer message 发送。
- **v2.3.1**：Shell 命令超时后不再被直接杀死，而是转入后台继续执行并在完成后回报，利好长时间构建与测试。前台 `timeout: 0` 现在表示默认的 120 秒。

## 社区热点 Issues

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387) 免费额度问题主帖**（OPEN，391 评论，👍29）——集中收集 "Free usage exceeded" 等报错，是当前社区声量最大的线程，反映免费层稳定性仍是核心矛盾。
2. **[#64724](https://github.com/anomalyco/opencode/issues/64724) 模型输出 `<|im_end|>` 导致会话中断**（OPEN，6 评论）——在 2.3.2 上使用 Qwen3.8-Flash-Next 可复现，属 provider 解析层缺陷，影响新模型可用性。
3. **[#64676](https://github.com/anomalyco/opencode/issues/64676) Windows 桌面端 2.3.2 工具调用全部不执行**（OPEN，3 评论）——渲染器抛 `RangeError: Maximum call stack size exceeded`，回复退化为重复闭合标记，属版本级严重回归。
4. **[#52237](https://github.com/anomalyco/opencode/issues/52237) 远程 MCP 服务器失败一次后永不重试**（OPEN，21 评论）——macOS 休眠唤醒后连接进入永久 `failed` 状态，只能重启服务，影响 MCP 生态可靠性。
5. **[#50574](https://github.com/anomalyco/opencode/issues/50574) 1M 上下文模型从不自动压缩**（OPEN，5 评论）——压缩阈值受 `max(outputLimit, 32000)` 限制，provider 返回 400 也不被识别为上下文溢出。
6. **[#54044](https://github.com/anomalyco/opencode/issues/54044) 子代理 deny browser 仍暴露 44 个浏览器工具**（OPEN，4 评论）——授予 execute 后权限声明被绕过，属权限模型安全边界问题。
7. **[#64623](https://github.com/anomalyco/opencode/issues/64623) grep 工具绕过文件 read 权限规则**（CLOSED，4 评论）——仅按搜索模式校验权限，却以 `--hidden` 引用任意文件匹配行，同类权限缺口。
8. **[#63130](https://github.com/anomalyco/opencode/issues/63130) 全局 skills 目录位于慢速盘时插件激活永不完成**（OPEN，3 评论）——`/api/model` 持续 503，普通用户视角的启动阻塞。
9. **[#64073](https://github.com/anomalyco/opencode/issues/64073) 恢复前台子代理执行**（OPEN，19 评论，👍5）——v2 行为变更引发的功能回退诉求，讨论热度较高。
10. **[#23153](https://github.com/anomalyco/opencode/issues/23153) 支持用加密货币支付 Go 订阅**（CLOSED，38 评论，👍71）——今日点赞最高的 Issue，虽已关闭但支付方式诉求明确。

其他值得留意：[#39986](https://github.com/anomalyco/opencode/issues/39986)（打包 CLI 中外部 TSX 插件不生效）、[#56298](https://github.com/anomalyco/opencode/issues/56298)（第二个 ChatGPT 账号登录报 workspace scope denied）、[#24981](https://github.com/anomalyco/opencode/issues/24981)（显式代理配置需求，👍11）。

## 重要 PR 进展

1. **[#62158](https://github.com/anomalyco/opencode/pull/62158) 仅在配置输入变化时重载配置**——数据显示 14.5 小时内配置重载 32,214 次（约每 1.6 秒一次），累计 32 小时 span 时间，性能收益显著。
2. **[#64515](https://github.com/anomalyco/opencode/pull/64515) 按会话模型决定工具集与 Code Mode 归属**——在 `SessionContext.select` 中与权限过滤同批决策。
3. **[#64720](https://github.com/anomalyco/opencode/pull/64720) 新增 `opencode singleton` 进程内单进程模式**——面向低内存设备（作者提及 5.5 GiB RAM 的 Android 12 设备），尚未经人工评审。
4. **[#64725](https://github.com/anomalyco/opencode/pull/64725) ChatGPT 登录下 Astra 模型保持 272k 上下文**——修正模型窗口上限处理。
5. **[#64727](https://github.com/anomalyco/opencode/pull/64727) 移除实验性 Projects 侧边栏模式**——原用户自动迁移至 Consolidated 或 Customize。
6. **[#64728](https://github.com/anomalyco/opencode/pull/64728) 清理 Projects 侧边栏遗留翻译键**——从 63 个 locale 文件中移除 3 个键。
7. **[#64679](https://github.com/anomalyco/opencode/pull/64679) 修复空提示符下 pane 快捷键误触发**（Closes #64405）——无可用命令的 leader 序列末键不再被吞入输入。
8. **[#64726](https://github.com/anomalyco/opencode/pull/64726) 修复 2.3.x 转录链接点击失效**——针对鼠标报告移动事件时的链接解析回归。
9. **[#64732](https://github.com/anomalyco/opencode/pull/64732) 默认 worktree 移至 `TMPDIR/opencode`**——避免长期数据目录堆积临时工作树。
10. **[#59848](https://github.com/anomalyco/opencode/pull/59848) 容忍不可读的本地插件 manifest**（Fixes #59750）——单个损坏的 `package.json` 不再中断插件发现。

补充：[#63271](https://github.com/anomalyco/opencode/pull/63271)（桌面端启动时重试浏览器 attach）、[#59624](https://github.com/anomalyco/opencode/pull/59624)（翻页时保持 `/btw` 答复不关闭）。

## 功能需求趋势

- **权限与隔离模型**：浏览器工具、grep 读取规则两处绕过表明，按工具粒度的权限校验尚未覆盖子资源，社区对 agent 权限边界的关注上升。
- **MCP 与插件可观测性**：远程 MCP 无重试、TSX 插件加载失败、manifest 不可读即中断，指向插件生命周期的健壮性需求。
- **长上下文与大模型适配**：1M 上下文压缩失效、新模型 token 结束符处理、provider 认证与费用提示缺失（[#64702](https://github.com/anomalyco/opencode/issues/64702)），反映多模型接入的适配负担。
- **终端体验本地化**：TUI 字符串全为硬编码英文，而 app/desktop/console 已支持 17+ locale（[#37216](https://github.com/anomalyco/opencode/issues/37216)）。
- **性能与资源占用**：文件监听在 `/` 及各级 home 祖先目录重复订阅（[#64674](https://github.com/anomalyco/opencode/issues/64674)）、低内存设备单进程模式，均属资源效率诉求。
- **支付与订阅方式**：加密支付（👍71）为今日最高赞需求。

## 开发者关注点

- **v2 回归质量**：2.3.2 同日出现 Windows 桌面工具调用全失效与 TUI 链接点击失效，新版本验证覆盖需加强。
- **计费透明度**：GPT-6.2 缓存修复与"启用模型不提示需 API Key 及付费"（#64702）并列，说明成本可见性是高频痛点。
- **配置热重载开销**：32,214 次重载的实测数据是最具说服力的性能证据，开发者期待更细粒度的失效判定。
- **权限语义一致性**：deny 声明与实际暴露工具不一致，会直接削弱用户对 agent 安全模型的信任。
- **v2 行为变更的兼容性**：前台子代理执行被移除后引发 19 条讨论，提示破坏性变更需要迁移说明。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-18

## 1. 今日速览

今日无新版本发布，社区讨论集中在 Windows 使用体验（#7547，97 条评论）以及上下文窗口、压缩（compaction）与提示缓存（prompt cache）的一致性问题上。关闭了一批 P0 级崩溃与恢复类缺陷（#11956、#11460），同时新提交的 PR 主要修复 TUI 渲染、`/reload` 模型刷新和终端挂起处理等交互细节。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#7547 [OPEN] Windows 使用体验征集（97 评论）**
   https://github.com/earendil-works/pi/issues/7547
   指出 Pi 在 Windows 上有太多运行方式（终端、多路复用器等），难以决定应优先投入修 bug、写文档还是优化引导。评论量远超其他 Issue，说明 Windows 是当前社区最大的体验分歧点。

2. **#11021 [OPEN] ChatGPT 登录下 GPT-6.1 Sol 上下文仍为 272K（16 评论，👍8）**
   https://github.com/earendil-works/pi/issues/11021
   同一账号的模型目录显示默认 500K，但 Pi 1.3.0 仍报告 272K，导致可用上下文偏小。这是本批中点赞最高的 Issue，影响实际可用容量。

3. **#9656 [OPEN] Windows + Zellij 全屏下滚轮滚动的是提示历史而非对话记录（15 评论，👍6）**
   https://github.com/earendil-works/pi/issues/9656
   仅在 Windows → Alacritty → Zellij → Pi 链路复现，直接终端无此问题，属于典型的多路复用环境兼容缺陷。

4. **#11529 [OPEN] 工具顺序取决于注册顺序，可能击穿提示缓存**
   https://github.com/earendil-works/pi/issues/11529
   `getCurrentTools()` 按插入顺序返回；被移除后重新加入的工具会排到末尾，MCP 服务器中途连接等场景因此改变工具列表顺序，造成缓存失效。与 #12273 的缓存复用问题相互呼应。

5. **#12060 [OPEN] [inprogress, prio:p0] openai-codex：zstd 压缩的 SSE 请求返回 400，未压缩则通过**
   https://github.com/earendil-works/pi/issues/12060
   自 11 月 9 日起影响长会话；报告由 Pi 中运行的 AI 代理按 CONTRIBUTING.md 要求撰写，已被标为 P0 处理中。

6. **#12090 [OPEN] [durable] 允许取消处理器等待信号与截止时间**
   https://github.com/earendil-works/pi/issues/12090
   希望 Stop 之后，暂停中的工具能请求取消远端任务、保存检查点并等待信号，是 pi-durable 持久化能力的关键扩展。

7. **#10583 [OPEN] [durable] 按上报的上下文用量校准压缩保留量**
   https://github.com/earendil-works/pi/issues/10583
   当上报用量超过阈值但字符估算低于 `keepRecentTokens` 时会跳过压缩；中文等字符的 token 密度差异是主要诱因。

8. **#12035 [OPEN] 虚拟模型下阈值压缩在远低于窗口时就触发**
   https://github.com/earendil-works/pi/issues/12035
   虚拟模型经 `getPhysicalModel()` 返回 `undefined`，建议在上下文窗口未知时跳过阈值判断。与 #12265 同属虚拟模型/路由扩展场景。

9. **#12273 [CLOSED] GPT-6.2 Sol 的系统提示缓存复用低于 6.1**
   https://github.com/earendil-works/pi/issues/12273
   同一负载第 4 轮：6.2 缓存 3,968/12,931 tokens，6.1 为 12,800/12,931。已关闭，但它与其他缓存类问题一起说明缓存命中率是重点指标。

10. **#12289 [CLOSED] pi-ai 未重试 xAI “model is currently at capacity”**
    https://github.com/earendil-works/pi/issues/12289
    现有匹配器覆盖了 `model is at capacity` 但漏掉 `currently` 变体，导致开启重试也会直接结束回合。

另值得关注：#12282（llama.cpp 声明 image 输入但被注册为纯文本）、#11460（会话分支截断后恢复丢失内置工具，P0，已修复可用）、#11956（读取工具取消时 AbortError 导致退出，P0）。

## 4. 重要 PR 进展

1. **#12278 [OPEN] `fix(coding-agent): refresh scoped models on interactive reload`**
   https://github.com/earendil-works/pi/pull/12278
   `/reload` 现在会刷新 scoped models，`enabledModels` 的修改无需重启；启动时的 `--models` 仍优先。修复 #12277。

2. **#12283 [OPEN] `fix(coding-agent): handle external SIGTSTP like Ctrl+Z`**
   https://github.com/earendil-works/pi/pull/12283
   `kill -TSTP` 此前会挂起 Pi 但不恢复终端，现与 `Ctrl+Z` 走同一路径。修复 #12272。

3. **#12280 [OPEN] `fix(coding-agent): tree navigation no longer re-adds prompts to history`**
   https://github.com/earendil-works/pi/pull/12280
   `/tree` 选择器和扩展 `navigateTree` 均以 `populateHistory: true` 重渲染，导致每次导航重复写入提示历史。Closes #12279。

4. **#11370 [OPEN] `feat(ai,coding-agent): add DeepInfra, Nebius, Ollama Cloud, Scaleway, SiliconFlow, StepFun providers`**
   https://github.com/earendil-works/pi/pull/11370
   基于 #11369 堆叠，新增 6 家托管推理提供商，依据 models.dev 贡献活跃度和 issue 区需求选取。

5. **#10680 [CLOSED] `fix: support npm 12 pack JSON output`**
   https://github.com/earendil-works/pi/pull/10680
   npm 12 将 `npm pack --json` 由单元素数组改为按包名索引的对象，导致安装检查、发布演练、本地发布和打包失败；现已兼容。

6. **#12274 [CLOSED] `fix(tui): avoid input cursor flicker during streaming`**
   https://github.com/earendil-works/pi/pull/12274
   流式输出或页脚更新时输入光标高速闪烁，由三种渲染行为共同造成。

7. **#12275 [CLOSED] `fix(tui): stop repeated scrollback redraws from mutable tool rows`**
   https://github.com/earendil-works/pi/pull/12275
   长回复顶部滚出视口后（`firstChanged < prevViewportTop`）渲染器回退为全量滚动区重绘，现已修复。

8. **#12276 [CLOSED] `docs: annotate Pi agent source code for learning`**
   https://github.com/earendil-works/pi/pull/12276
   作者说明系误开，改动仅用于个人学习分支，已关闭。可作为社区学习 Pi 源码需求的侧证。

说明：本批共 8 个 PR，其余为上述条目，无更多可列。

## 5. 功能需求趋势

- **Windows 与多路复用终端兼容**：#7547、#9656 显示 Windows 原生、Alacritty/Zellij 组合是主要适配缺口。
- **上下文窗口与压缩策略**：#11021、#10583、#12035、#12265 集中指向虚拟模型、路由扩展与真实用量上报之间的压缩阈值不一致。
- **提示缓存稳定性**：#11529、#12273 表明工具注册顺序、模型版本差异都会影响缓存命中。
- **托管推理提供商扩展**：#11370 一次性引入 6 家提供商，多模型接入仍是活跃方向。
- **持久化与可中断执行**：#12090、#10583 反映 pi-durable 对取消语义与检查点的需求。
- **扩展能力**：#11932（`auto_retry_decision` 钩子）、#11450（assistant message transformer）显示扩展生态希望更深地介入重试与消息渲染。
- **本地模型能力识别**：#12282 要求正确读取 llama.cpp 的 `input_modalities`。

## 6. 开发者关注点

- **稳定性优先**：P0 崩溃（#11956 AbortError 退出、#11460 恢复丢工具）和 P0 请求失败（#12060）是最高优先级。
- **实际可用上下文**：窗口上报值与模型目录不一致、虚拟模型未知窗口，直接影响长会话可用性。
- **缓存与成本**：工具顺序和模型版本造成的缓存命中差异被视为性能与开销问题。
- **长驻会话内存**：#10642 指出嵌入式 SDK 中会话内存在压缩后不下降、resume 加载整文件，服务器长跑场景痛点明确。
- **终端交互细节**：光标闪烁、滚动重绘、恢复命令排版（#12237/#9515）、SIGTSTP 处理等小问题获多份 PR 快速修复。
- **文档与上手**：#7547 明确提出希望更好的文档与引导，以降低 Windows 用户的配置成本。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-11-18

> 数据来源：github.com/QwenLM/qwen-code ｜ 过去 24 小时无新版本发布

## 1. 今日速览

今日主线是 **1.0 Preview 的统一 Agent Loop 内核持续“切片式”合入 main**：Tracking Issue #17045 推进中，配套 PR #17745 让 OpenTUI 默认跑上共享 Agent Loop。同时 CI 健康度仍是最大噪声源——多条主分支 CI 失败/字节预算门禁问题占据讨论量前列，其中 #17741 字节预算溢出 429 字节导致所有 PR 继承三条红灯，已关闭。另有多条 P1 级会话记录损坏与托管 Agent 安全问题被集中跟进。

## 2. 版本发布

过去 24 小时无新 Release，略。

## 3. 社区热点 Issues（10 条）

1. **#14724 主分支 CI 失败：Managed Agent gate 无法定位测试**（457 评论，2026-10-19 创建）
   bot 自动创建、长期未收敛的 CI 追踪 Issue，评论量远超其他条目，反映 CI 失败定位机制本身存在盲区。
   https://github.com/QwenLM/qwen-code/issues/14724

2. **#11680 主分支 CI 失败：E2E Tests 无法定位测试**（81 评论）
   按 commit 逐条追踪的 E2E 失败 Issue，Linux 等 job 失败，长期挂起，是 CI 稳定性的老账。
   https://github.com/QwenLM/qwen-code/issues/11680

3. **#11678 主分支 CI 失败：Qwen Code CI 无法定位测试**（42 评论，autofix/in-progress）
   Windows 等 job 失败，自动修复仍在进行中，代表另一条长期未闭环的 CI 链路。
   https://github.com/QwenLM/qwen-code/issues/11678

4. **#17045 tracking(core)：将 1.0 Preview 的 loop kernel 逐面合入 main**（24 评论，P1，status/in-progress）
   最核心的路线图 Issue。1.0 Preview 已把 agent loop 重建为事件驱动内核、统一 `query()` 入口；本 Issue 跟踪按切片逐步上 main、逐步开放。作者 qqqys，并注明 2026-11-21 冻结前的时间压力。
   https://github.com/QwenLM/qwen-code/issues/17045

5. **#17747 Transcript JSONL 写入损坏：部分记录与下一条粘连，破坏父链（degraded_history）**（6 评论，P1）
   会话记录中两条同级记录被粘成一行、无换行导致父链断裂。直接影响会话历史可恢复性，是今日最值得优先修复的 P1 数据完整性问题。
   https://github.com/QwenLM/qwen-code/issues/17747

6. **#17371 verify-pr：跟踪 PR #17185“带残留风险合入”遗留项**（14 评论，P1，category/security）
   PR #17185 经 17 轮评审后按 land-with-residual-risk 合入，豁免审批的核心安全目标虽达成，但仍有残留风险待闭环，属安全流程透明化议题。
   https://github.com/QwenLM/qwen-code/issues/17371

7. **#17734 主分支 CI 失败：Managed Agent loop verification**（5 评论，当日新建，commit 980bb332a9c3）
   与 #17741 同源 commit，说明该 commit 同时触发了 loop 验证失败与字节预算溢出。
   https://github.com/QwenLM/qwen-code/issues/17734

8. **#17741 [CLOSED] main 自 980bb332a9 起 export 字节预算超限（2146529 > 2146100）**（4 评论，P1，已关闭）
   仅溢出 429 字节却阻塞单测构建，并让每个 PR 继承三条红灯——典型的“小数值门禁放大团队成本”问题，当日已关闭。
   https://github.com/QwenLM/qwen-code/issues/17741

9. **#17750 managed-agent-server：ToolPublicationContract 与 networknt json-schema-validator 2.x 不兼容**（4 评论，P2）
   依赖升级导致 `NoClassDefFoundError: SpecVersion$VersionFlag`，属于构建/依赖兼容性阻断，已有配套 PR #17752。
   https://github.com/QwenLM/qwen-code/issues/17750

10. **#17699 deflake：DingTalk 适配器 outbox 测试（R2-1）**（4 评论，P2）
    CI Failure Patrol 标记的不稳定测试，需区分“非确定性”与“真实 bug”，否则不应做稳定化处理——体现了仓库对 flaky 测试的严格判定原则。
   https://github.com/QwenLM/qwen-code/issues/17699

> 其他值得留意：#17727（托管会话首次提交 409 后被反重放永久拒绝，无恢复路径）、#17668（`read_file` 在 EOF 报出不存在行范围）、#15766（外部所有权谓词锁等待无上限，P1）、#17724（自定义主题 diff 块不可读）。

## 4. 重要 PR 进展（10 条）

1. **#17745 feat(core)：OpenTUI 默认运行在共享 Agent Loop 上**
   每个模型轮次与工具批次走与其他界面相同的 loop；可通过 `experimental.unifiedAgentLoop: false` 回退。是 #17045 落地的关键一环。
   https://github.com/QwenLM/qwen-code/pull/17745

2. **#17756 fix(core)：从断裂前缀的 JSONL 行中打捞完整后缀记录**
   增强 `recoverObjectsFromLine`，在早期记录字段被截断、花括号不平衡时抢救后续完整记录——与 #17747 的损坏问题直接对应。
   https://github.com/QwenLM/qwen-code/pull/17756

3. **#17752 fix(managed-agent-server)：适配 networknt json-schema-validator 2.x**
   切换到 `SchemaRegistry.withDefaultDialect(DRAFT_2020_12)` 并升级依赖，修复 #17750 的类缺失错误。
   https://github.com/QwenLM/qwen-code/pull/17752

4. **#17437 feat(i18n)：为 CLI 与 Web Shell 增加阿拉伯语支持及 RTL 布局**
   覆盖 CLI、Web Shell 及导出 HTML transcript 的完整阿语支持，含从右到左排版，是国际化范围最大的一次扩展。
   https://github.com/QwenLM/qwen-code/pull/17437

5. **#17749 feat(managed-agent)：会话挂起时保留空闲 MCP 连接**
   Hosted Harness 无状态化第二阶段：空闲会话挂起不再拆除 MCP 连接，重开时复用；默认关闭，由新配置开关控制。
   https://github.com/QwenLM/qwen-code/pull/17749

6. **#17500 feat(cli)：原生屏幕阅读器呈现模式**（autofix/takeover）
   可选的屏幕阅读器模式，含真实键盘控件与仅追加的语义输出；Ink 仍为默认，完成回复只播报一次。
   https://github.com/QwenLM/qwen-code/pull/17500

7. **#17711 fix(core)：为仅有副记录的会话补种，并清理 artifact-summary 残留**
   一次性关闭 #17518 评审遗留的六项低于 Critical 的残留，覆盖两条恢复路径。
   https://github.com/QwenLM/qwen-code/pull/17711

8. **#17377 feat(core)：为回退链跟踪模型可用性（Qoder 移植）**
   按 Option B 决策将 Qoder 预览线的模型可用性账本移植到 main，以正常规模的能力实现。
   https://github.com/QwenLM/qwen-code/pull/17377

9. **#17478 feat(managed-agent)：新增外部 Shell worker profile 与发布生产者 [17357 A/2]**
   从 #17357 拆分出的 worker 侧外部前台能力，基于当前 main 重建。
   https://github.com/QwenLM/qwen-code/pull/17478

10. **#16770 fix(cli)：结果在高度预算内时保留工具结果 Markdown**
    不再仅因消息带终端高度预算就降级为纯文本，避免可容纳内容被误降级。
    https://github.com/QwenLM/qwen-code/pull/16770

> 测试与健壮性侧补充：#17737（为 #17712 补 remote-access 准入与非 REST 关停排空的测试）、#17701（大文件冒烟测试行数断言改 `expect.poll`）、#16686（headless 终端错误结果保留 provider HTTP status）。

## 5. 功能需求趋势

- **会话管理与统一 Agent Loop**：`roadmap/session-management`、`1.x` 标签密集出现（#17045、#17284、#17747、#17237），是当前最集中的功能主轴。
- **托管 Agent（Managed Agent）与 Hosted Runtime**：涉及 worktree、MCP 连接复用、工具发布契约、反重放等，标签 `area: managed` 反复出现。
- **Web Shell 与 Codex 对齐**：worktree 保留/快照（P6）、可配置根目录（P7）等分阶段推进（#17237）。
- **无障碍与可访问性**：屏幕阅读器模式（#17500）、RTL/多语言（#17437），显示社区对非默认使用场景的投入上升。
- **主题与渲染定制**（#17724）、**CLI 渲染保真**（#16770）。

## 6. 开发者关注点

- **CI 可靠性是最高频痛点**：多条主分支 CI 失败 Issue 评论量居首（合计数百条），bot 自动追踪频繁出现“无法定位测试”的盲区；CI 失败追踪机制本身需要改进。
- **门禁的“小数值放大效应”**：#17741 仅溢出 429 字节就让所有 PR 继承三条红灯，开发者明确抱怨其阻塞面过宽。
- **会话数据完整性**：JSONL 记录粘连/截断（#17747、#17756）与 EOF 行范围误报（#17668）属于模型可见的错误输出，影响信任度。
- **依赖升级兼容性**：networknt 1.x→2.x 的 API 断裂（#17750/#17752）说明 SDK 依赖面需要更早的兼容性护栏。
- **恢复路径缺失**：托管会话 409 后重试被反重放永久拒绝（#17727），以及无上限的锁等待（#15766），共同指向“失败后可恢复性”的设计缺口。
- **flaky 测试治理原则明确**：按 #17699 所述，重跑通过视为非确定性、再次失败按真实 bug 处理，不做盲目稳定化。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-18）

> 说明：今日提供的数据中仅含 4 条 Issue 与 14 条 PR，无法按要求各挑选 10 条。以下按实际数据全量呈现，不补充数据源之外的信息。另外，数据来源标注为 github.com/Hmbown/DeepSeek-TUI，但条目链接均指向 codewhale-hq/Codewhale，下文按原文保留。

## 1. 今日速览

今日无新版本发布。v0.10.3 的发布节奏仍被一条 release-blocker 卡住：ChatGPT 认证在浏览器登录成功后仍校验失败（#7203）。同时 TUI 稳定性成为修复主线，快照等待和焦点重绘相关的冻结/闪屏问题已有对应 PR 合入。

## 2. 版本发布

无。

## 3. 社区热点 Issues

1. **#7203 [OPEN] ChatGPT 认证校验失败（0.10.2, Windows）**
   标签含 release-blocker、v0.10.3、status:awaiting-release，属于 v0.10.3 的发布阻塞项：浏览器登录成功，但报 `ChatGPT token signature or identity claims failed verification`，之后 `auth status` 仍显示异常。已有 6 条评论，讨论量最高。
   https://github.com/codewhale-hq/Codewhale/issues/7203

2. **#7365 [OPEN] opencode-zen 免费模型不可用（429 FreeUsageLimitError）**
   今日新建、暂无评论。opencode-zen 列表会展示 Zen 的免费模型 id，但网关校验精确 payload 与 TLS cipher 列表，因此这些条目在 Codewhale 中无法使用，属于三方网关兼容性问题。
   https://github.com/codewhale-hq/Codewhale/issues/7365

3. **#7357 [OPEN] 新 turn 开始时请求保存快照导致 TUI 冻结整个下一轮**
   当一轮结束与新一轮开始仅相隔数毫秒时，TUI 在整轮期间忽略按键、不渲染，只能关终端。直接影响交互可用性，已有 3 条评论。
   https://github.com/codewhale-hq/Codewhale/issues/7357

4. **#7304 [CLOSED] zh-Hans TUI 本地化缺陷**
   `/status` 标签错位，工具单元格、`/help`、`/diff` 与 composer 仍残留英文。该问题已关闭，对应修复 PR #7367 同日更新。
   https://github.com/codewhale-hq/Codewhale/issues/7304

## 4. 重要 PR 进展

**TUI 稳定性与状态**

1. **#7360 [CLOSED] fix(tui): bound terminal snapshot wait** — 将回合结束时的终端快照请求限制在既有的 2 秒 Engine 快照等待内；Engine 忙于新回合时 TUI 回到事件循环而非冻结。对应 #7357 的核心症状。
   https://github.com/codewhale-hq/Codewhale/pull/7360

2. **#7363 [CLOSED] fix(tui): recapture focus without erasing the viewport** — 把焦点重新捕获与显式清屏分离，避免在不支持 DEC 2026 的终端上出现中间空白屏。
   https://github.com/codewhale-hq/Codewhale/pull/7363

3. **#7366 [CLOSED] fix(snapshot): roll back partial file-scoped restores** — 文件级恢复中途失败时，利用既有安全快照回滚已尝试的 checkout 批次，避免 undo 报失败却残留改动。
   https://github.com/codewhale-hq/Codewhale/pull/7366

4. **#7362 [CLOSED] fix(engine): avoid rereading history for named-turn undo** — 修复命名回合 undo 重复加载全部历史的问题，长会话可省去一次全历史读取。
   https://github.com/codewhale-hq/Codewhale/pull/7362

**本地化**

5. **#7367 [CLOSED] fix(tui): translate tool labels, /help, /diff, composer and /status catalog text** — 关闭 #7304 遗留的 6 处硬编码英文字符串，15 个语言包全部补充新键，英文输出逐字节不变，zh-Hans 使用全角标点。
   https://github.com/codewhale-hq/Codewhale/pull/7367

**模型与 Provider**

6. **#7364 [CLOSED] fix(models): keep MCP tools with null-default optionals on the Moonshot route** — Moonshot（Kimi）路由下，带 `limit: int | None = None` 等可选参数的 MCP 工具此前会被丢弃，导致模型看不到该工具。
   https://github.com/codewhale-hq/Codewhale/pull/7364

7. **#7350 [OPEN] feat(providers): add TrustedRouter as a bundled descriptor row** — 以与 Opper 行（#7131）相同的形态，把 TrustedRouter（OpenAI 兼容网关、单 key 多实验室模型）加入内置 descriptor 行，配合 `/provider` 使用。
   https://github.com/codewhale-hq/Codewhale/pull/7350

**依赖与 CI（批量更新，均为 dependabot）**

8. **#7337 [CLOSED] jsonschema 0.57.0 → 0.61.2**
   https://github.com/codewhale-hq/Codewhale/pull/7337
9. **#7336 [CLOSED] lru 0.18.5 → 0.19.0**
   https://github.com/codewhale-hq/Codewhale/pull/7336
10. **#7330 [CLOSED] publish GitHub Action 版本提升**；另有 **#7335 setup-java 6.1.0→6.2.0**、**#7333 docker/login-action 4.7.0→4.8.0**、**#7332 action-gh-release 3.0.3→3.0.4**、**#7358 [CLOSED] 分片 PR CI 验证用草稿 PR（不合并）**
    https://github.com/codewhale-hq/Codewhale/pull/7330

## 5. 功能需求趋势

- **Provider / 网关兼容性**：TrustedRouter 内置接入（#7350）、opencode-zen 免费模型可用性（#7365）、Moonshot 路由的 MCP 工具保留（#7364），显示社区重点在扩展更多兼容网关与模型路由适配。
- **认证流程稳健性**：ChatGPT 登录后的 token 校验问题被标为发布阻塞，认证路径是当前版本门槛。
- **TUI 交互质量**：快照时序、焦点重绘、本地化文案三类问题集中出现，说明用户对交互细节与中文体验的敏感度较高。
- **状态与快照一致性**：文件级回滚、命名回合 undo 的性能与正确性（#7366、#7362）。

## 6. 开发者关注点

- **发布受阻**：v0.10.3 因 #7203 处于 awaiting-release，Windows 用户认证链路是当前最大风险点。
- **冻结类 bug 影响面大**：TUI 在新回合开始时冻结整轮（#7357），虽已有 #7360 限制等待时长，但需确认是否完全覆盖该时序场景。
- **第三方网关是“死胡同”体验**：列表中出现但实际不可用的模型条目（#7365）容易造成误判，需要更明确的可用性标识或过滤。
- **本地化仍需收尾**：zh-Hans 的标签错位与英文残留已通过 #7367 修复，但仍需验证 `/status` 对齐问题是否已在同一修复中解决（数据未说明）。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*