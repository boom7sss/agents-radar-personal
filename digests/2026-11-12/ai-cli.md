# AI CLI 工具社区动态日报 2026-11-12

> 生成时间: 2026-11-12 18:21 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-11-12）

## 1. 生态全景

当前 AI CLI 工具生态已从「能否用」进入「可靠性与可治理」阶段：各工具今日的讨论重心普遍落在权限/沙箱正确性、成本额度透明度和跨平台稳定性上，而非新功能堆叠。多代理（subagent）编排成为事实上的主战场，Claude Code、Codex、Gemini CLI、Copilot CLI、OpenCode、Qwen Code 六个工具均有相关议题，但成熟度差异明显。底层安全模型正被系统性重构（Codex 的 `SandboxPolicy`→`PermissionProfile` 迁移、Gemini 的零依赖 OS 沙箱提案），说明厂商在为下一阶段的企业级采用补基础设施。同时，非 ASCII / 本地化与非交互式（脚本化、ACP）可靠性这类"长尾但要命"的问题在多个工具集中爆发。

## 2. 各工具活跃度对比

| 工具 | Issues（今日更新/活跃） | PR（今日更新/活跃） | Release | 备注 |
|---|---|---|---|---|
| Claude Code | 50 条 Issue 有更新（取评论最多 20 条归纳） | 0 | 无 | 无 PR 活动，纯社区讨论 |
| OpenAI Codex | 10+ 条热点（另有多条"值得留意"） | 10 条（均为 copyberry[bot] 提交、已 CLOSED） | 5 个（含 rust-v0.167.2 功能更新 + 4 个 alpha） | 版本节奏最快 |
| Gemini CLI | 10 条热点（多条 p1） | 10 条（含 1 条已 CLOSED） | 无 | 以核心稳定性修复为主 |
| GitHub Copilot CLI | 10 条热点（另有多条新报缺陷） | 0 | 2 个补丁（v1.0.110-3 / -2） | Issues 更新约半数为内部告警机器人 |
| Kimi Code CLI | 0 | 1 条（#1777 CLOSED） | 无 | 活跃度最低 |
| OpenCode | 10 条热点（主帖 #59387 达 362 评论） | 10 条（全部 OPEN）+ 若干 TUI 系列修复 | 1 个（process-daemon v0.5.2） | 免费层主帖热度极高 |
| Pi | 10 条热点 | 10 条（6 条 CLOSED、4 条 OPEN） | 无 | PR 多于 Issue 新增，偏修复 |
| Qwen Code | 10 条热点（多条 P1 CI 问题） | 10 条（1 条 CLOSED） | 1 个（v1.0.0-preview.1） | CI 稳定性为最大噪音源 |
| DeepSeek TUI | 16 条活跃（取 10 条） | 15 条评论较多（10 条已 CLOSED） | 无 | 当日 bug 多由单一用户提交、修复迅速 |

> 说明：各工具的数据统计口径不完全一致（部分为"评论最多 Top N"归纳，部分为全量），表中数据均取自各自日报的原始描述，未作跨口径换算。

## 3. 共同关注的功能方向

**（1）子代理/多代理编排的可靠性**
- Gemini CLI：子代理把 MAX_TURNS 中断误报为 success（#22323）、generalist agent 永久挂起（#21409）、子代理工具调用从任务树消失（PR #29859）。
- Copilot CLI：与已批准 `exit_plan_mode` 同轮启动的子代理无任何内置工具（#5243）、子代理无法认证 HTTP-OAuth MCP（#5437）。
- OpenCode：为子 agent 并发加上限（PR #63227）。
- Claude Code：跨用户会话互相对话的提案（#87954）。
- Qwen Code：`experimental.unifiedAgentLoop` 统一 loop 落地（#17045、#15327）。

**（2）权限与沙箱的可信度**
- Claude Code：`bypassPermissions` 长期失效的元级问题（#39523）。
- Codex：大批量 PR 从 legacy `SandboxPolicy` 迁移至 `PermissionProfile`（#61144/#61138/#61136/#61134）。
- OpenCode：拒绝 execute 权限反而暴露全部 MCP 工具（#63374）。
- DeepSeek TUI：拒绝规则被 `hash -p`、alias eval、多种启动器绕过（#7305）。
- Gemini CLI：模型偶发使用 `git reset --force`（#22672）。

**（3）成本与用量额度透明度**
- Claude Code：Windows 桌面版用量消耗加速而本地 token 下降（#108534，关联 #105621）。
- Codex：GPT-6.1 Sol 用量消耗异常加快（#60530）。
- OpenCode：免费层限流主帖 362 评论（#59387）、四周未用仍未解除限流（#63568）；并发上限 PR（#63227）。
- Copilot CLI：工具定义膨胀至约 260K token 致首个提示词即被拒（#5151）。
- Gemini CLI：models 列表把输出上限硬编码为 8192 的问题被修复为报告真实值（PR #30253）。

**（4）MCP 生态一致性与认证**
- Claude Code：桌面版未展示即拒绝 MCP elicitation 却声称支持（#105334）。
- Copilot CLI：Google Workspace MCP OAuth issuer 尾斜杠不匹配（#4606）、MCP `content` vs `structuredContent` 语义（#4515）。
- Pi：MCP OAuth 拿不到 refresh token（#10563）。
- DeepSeek TUI：MCP/LSP 把服务器请求误当回复（#7306）。
- Codex：app-server 为 subagent 泄漏 MCP 进程栈（#25015）。

**（5）非交互式 / ACP / 脚本化路径**
- Copilot CLI：ACP 会话不再索引历史（#5053）、`session/new` 返回模型声明不符（#5363）。
- Qwen Code：ACP 会话执行 curl 后失联（#17040）、ACP 回合调度托管 skill review（PR #16685）。
- Pi：Windows 下 `pi -p` 永不退出（#12068）、`pi auth check` 误报（#9448）。
- Gemini CLI：ACP 支持 `session/close`（PR #30232）、ACP 下触发 Hook（PR #30148）。

**（6）跨平台与非 ASCII 本地化**
- DeepSeek TUI：字节 vs 字符计数、zh-Hans 布局、非 ASCII 文件名/域名/脱敏等全链路问题集中爆发。
- Gemini CLI：Wayland、Windows 路径空格、Hangul IME 丢字（PR #30178）。
- Codex：Windows 问题占据评论榜前列（浏览器宿主、Computer Use、沙盒锁）。
- Pi：XDG 目录规范（#2870，75 👍）、GNU screen 颜色（#10618）。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线信号 |
|---|---|---|---|
| **Claude Code** | 连接器/账户多开、IDE Diff 审查、桌面端可配置性 | 企业多身份用户、IDE 重度用户 | 强调连接器生态与桌面/IDE 体验；底层权限机制存长期欠账 |
| **OpenAI Codex** | 平台级稳定性、沙盒权限模型重构、遥测/网络代理健壮性 | 服务化部署、跨平台桌面用户 | Rust 实现、系统性安全模型改造、可观测性补强 |
| **Gemini CLI** | Subagent 体系成熟化、AST 感知代码理解、执行环境沙箱 | Linux/开发者、Agent 扩展作者 | 从"能用"转向"可观测、可评估、可复用"；ACP 与 Hook 集成 |
| **GitHub Copilot CLI** | MCP 认证、ACP 集成、插件/规则体系、无障碍 | GitHub 生态、企业 Entra 用户 | 强调与 GitHub/ACP 生态的接口稳定性；回归问题频发 |
| **Kimi Code CLI** | 规则系统设计探索 | 贡献者/早期用户 | 活跃度极低，大型功能（三层规则）经长期讨论后关闭 |
| **OpenCode** | 免费层体验、远程/多设备、本地模型端点、TUI 编辑体验 | 个人开发者、重度 TUI 用户 | 快速迭代 v2 系列；关心成本控制与自托管 relay |
| **Pi** | Provider 适配层扩展性、扩展/插件 API、持久化 | 扩展开发者、多网关用户 | 偏修复节奏；强调 CLI 自动化退出码语义统一 |
| **Qwen Code** | 统一 Agent Loop、托管 Agent 能力补齐、会话管理 | 企业托管场景、Web Shell 用户 | 1.0 Preview 事件驱动内核切片落地；CI 工程健壮性是瓶颈 |
| **DeepSeek TUI** | ACP 接入外部 agent、国际化全链路、协议正确性 | 中文用户、多 CLI 聚合用户 | 把多家 CLI agent 统一为 Codewhale 会话；对非 ASCII 场景覆盖不足 |

## 5. 社区热度与成熟度

**热度最高**
- **Claude Code**：#27302 多账户连接器单帖 308 评论 / 464 👍，是本次样本中互动量最高的单项；但今日零 PR、零 Release，属"高讨论、低交付"状态。
- **OpenCode**：免费层主帖 #59387 达 362 评论，PR 队列 10 条全 OPEN 且 TUI 修复密集，是迭代最活跃的项目之一。
- **Codex**：5 个 Release + 10 条 PR，交付节奏最快，但 PR 均由机器人提交并已关闭，社区人工贡献信号弱。

**快速迭代阶段**
- **Qwen Code**（v1.0.0-preview.1 + 统一 loop 分片落地）、**OpenCode**（v2 系列 + 多项 core/TUI 修复）、**Gemini CLI**（p1 修复与 Subagent 工程化并行）、**DeepSeek TUI**（当日 bug 当日出 PR 并关闭）。

**成熟度隐忧**
- **Copilot CLI**：1.0.89 / 1.0.95 连续引入会话索引与子代理工具缺失回归，升级前验证不足；Issues 更新约半数为内部 Datadog 告警机器人，噪音干扰真实反馈追踪。
- **Claude Code**：`bypassPermissions` 9 个月未解、12+ 重复报告，反映核心缺陷修复周期长。
- **Pi**：P0 级崩溃边界（#10585 满 /tmp 即杀死进程）与脚本化可靠性问题并存。
- **Kimi Code CLI**：今日近乎静默，仅 1 条 PR 关闭，社区规模与活跃度明显落后于同侪。

## 6. 值得关注的趋势信号

**（1）"失败必须可见"成为跨工具的核心诉求。** Gemini CLI 最强烈的声音不是"不失败"，而是"失败不要伪装成成功"（#22323）；Pi 修复信号终止被误判为成功（#12089）；Copilot CLI 修复被中断响应标注为"不完整"（v1.0.110-2）。对开发者的参考：评估 CLI 工具时，应优先检查其非零退出码、中断状态与部分结果的语义是否可信，这直接决定自动化流水线能否依赖它。

**（2）沙箱/权限模型正在从"开关"走向"档案"。** Codex 的 `PermissionProfile` 迁移、Gemini 的零依赖 OS 沙箱提案、OpenCode 与 DeepSeek TUI 暴露的权限语义反转/绕过，共同说明业界在重新设计细粒度、可委派的权限边界。技术决策者应关注：allow-all 在父/子代理委派场景下的一致性，以及拒绝规则是否真正可达。

**（3）成本治理从"看账单"前移到"约束执行"。** OpenCode 为子 agent 并发设上限、Codex 引入 reasoning replay 遥测指标、Gemini 修正 token 上限报告值、Claude Code 多条额度异常报告——成本正从被动统计转为运行时约束与可观测性建设。对企业采购方，token 统计与计费口径的可对账性应纳入选型清单。

**（4）MCP 生态的信任度取决于认证与协议细节。** Google Workspace OAuth issuer 尾斜杠、MCP 请求/回复方向误判、`content` 与 `structuredContent` 优先级、elicitation 桌面/CLI 不一致——这些都是"不报错但不生效"或"实现与声明不符"的静默失效，比显式崩溃更难排查。接入 MCP 的团队应要求工具方提供校验与告警，而非默认信任声明。

**（5）非交互式与 ACP 是下一个集成战场。** 从 Copilot CLI、Qwen Code、Gemini CLI、Pi 的议题看，ACP 会话生命周期、脚本化退出码、headless 错误结构（Qwen PR #16686 新增 `status` 字段）正在成为集成方的硬需求。若你的工作流依赖 CI/CD 或第三方 Agent 编排，ACP 的成熟度是比交互体验更关键的选型指标。

**（6）非 ASCII / 本地化是被系统性低估的质量短板。** DeepSeek TUI 的"字节 vs 字符"反复踩坑、Gemini 的 Hangul IME 丢字、Codex 的 Windows 路径问题表明：CJK 与多语言用户在截断、脱敏、布局、域名匹配等多处遭遇失效。对面向中文/亚太团队的技术决策者，建议在选型验证阶段就用真实中文输入做一轮回归测试。

**（7）CI 稳定性本身已成为产品竞争力。** Qwen Code 多个 P1 显示"零测试执行即变红"、58 个 job 同时受影响，Copilot CLI 的内部告警机器人淹没社区反馈——工程健壮性与问题分栏能力，正直接影响外部贡献者与集成方的体验。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据截止 2026-11-12，来源：github.com/anthropics/skills）

> 说明：本次提供的 PR 数据中评论数字段均为 `undefined`，因此“热门 PR”排行按更新时间与议题热度综合排列；评论数仅 Issues 有可靠数据。

---

## 1. 热门 Skills 排行（PR）

1. **mcp-builder 兼容性修复**（#1742，OPEN）
   功能：适配 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名，并支持通过 `create_mcp_http_client` / `http_client` 配置自定义 HTTP 头。
   讨论热点：MCP 大版本升级后的破坏性变更，关联 Issue #1668。
   状态：OPEN（创建 2026-09-08，更新 2026-10-08）
   https://github.com/anthropics/skills/pull/1742

2. **skill-creator 触发评估修复**（#1298，OPEN）
   功能：隔离 trigger evals，修复 Windows 下 `select()` 对子进程管道失败、并行探针竞争、运行时失败被误判为非触发等问题。
   讨论热点：Skill 评估结果的可靠性（误报漏报、无效评分）。
   状态：OPEN（更新 2026-09-16）
   https://github.com/anthropics/skills/pull/1298

3. **notion-spec-to-implementation + quantitative-resume-auditor**（#1245，OPEN）
   功能：将产品/技术规格转换为 Claude Code 可执行的 Notion 任务；另一 Skill 用于量化简历审查。
   讨论热点：规格到任务的落地工作流、复合型 Skill 提交。
   状态：OPEN（更新 2026-10-15）
   https://github.com/anthropics/skills/pull/1245

4. **webapp-testing 安全性修复**（#1980，OPEN）
   功能：移除 `with_server.py` 中的 `subprocess.Popen(..., shell=True)`，消除命令注入风险。
   讨论热点：Agent 生成命令的安全性。
   状态：OPEN（更新 2026-11-01）
   https://github.com/anthropics/skills/pull/1980

5. **docx LibreOffice 超时处理**（#1792，OPEN）
   功能：`accept_changes.py` 在 `soffice` 超时时返回错误，并校验输出 DOCX 不再含 `w:ins` / `w:del` 修订标记。
   讨论热点：文档处理链路的“假成功”。
   状态：OPEN（更新 2026-11-01）
   https://github.com/anthropics/skills/pull/1792

6. **proofcore-contract-auditor**（#1771，OPEN）
   功能：面向 Web3 的 Solidity/Rust 智能合约静态分析，并将审计证明锚定到 TON 区块链。
   讨论热点：区块链 + Agent Skill 的跨域结合。
   状态：OPEN（更新 2026-09-16）
   https://github.com/anthropics/skills/pull/1771

7. **pyxel 复古游戏开发 Skill**（#525，OPEN）
   功能：用 Python 创建、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查。
   讨论热点：长期存活的社区贡献（2026-03 创建），近期仍在更新。
   状态：OPEN（更新 2026-11-01）
   https://github.com/anthropics/skills/pull/525

8. **xlsx 外部链接风险检测修复**（#2019，OPEN）
   功能：解析工作表作用域的定义名称与别名，消除 `external_links_at_risk` 的误报漏报。
   讨论热点：金融/表格场景的准确性。
   状态：OPEN（更新 2026-11-03）
   https://github.com/anthropics/skills/pull/2019

---

## 2. 社区需求趋势（来自 Issues）

- **Skill 分发与信任边界**（最热，46 评论）
  #492：社区 Skill 以 `anthropic/` 命名空间分发，冒充官方，存在权限授予被滥用的风险。反映社区对命名空间治理与审核机制的强烈诉求。
  https://github.com/anthropics/skills/issues/492
- **组织级 Skill 共享**（17 评论，👍8）
  #228：希望在 Claude.ai 内直接共享 Skill，而非下载 `.skill` 文件再手动上传。
  https://github.com/anthropics/skills/issues/228
- **Skill 评估/触发正确性**
  #556（13 评论）：`run_eval.py` 的 `claude -p` 触发率为 0%；#1352（6 评论）：`--num-workers > 1` 时 UUID 交叉匹配导致系统性假阴性。
  https://github.com/anthropics/skills/issues/556 ｜ https://github.com/anthropics/skills/issues/1352
- **上下文窗口效率**
  #1487：`claude-api` Skill 单次工具调用注入约 156k tokens；#2064：`theme-factory` 描述未说明“何时使用”。
  https://github.com/anthropics/skills/issues/1487 ｜ https://github.com/anthropics/skills/issues/2064
- **文档处理质量**：docx 合并 run 时丢失命名空间声明写出非法 XML（#2018）；pptx/文档类脚本的参数校验问题。
  https://github.com/anthropics/skills/issues/2018
- **Agent 记忆/状态压缩**：#1329 提议 `compact-memory`，用符号记法压缩长时 Agent 状态。
  https://github.com/anthropics/skills/issues/1329
- **输出质量治理**：#1385 提议“推理质量门”流水线（预任务校准 → 对抗性评审 → 交付验证）。
  https://github.com/anthropics/skills/issues/1385
- **Skill 去重**：#189（6 评论，👍9）指出 `document-skills` 与 `example-skills` 插件内容重复，浪费上下文。
  https://github.com/anthropics/skills/issues/189

> 注：#1143（修改账户邮箱）与 Skills 主题无关，不纳入趋势分析。

---

## 3. 高潜力待合并 Skills（活跃且未合并）

| PR | 内容 | 最近更新 | 落地看点 |
|---|---|---|---|
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 移除 `shell=True` | 2026-11-01 | 安全类小改动，易被合并 |
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx 外部链接风险修复（Fixes #2013） | 2026-11-03 | 有对应 Issue，改动边界清晰 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx 超时误报修复 | 2026-11-01 | 明确的正确性问题 |
| [#1950](https://github.com/anthropics/skills/pull/1950) | claude-api Python `pause_turn` 指导更新 | 2026-11-10 | 文档同步 SDK 1.1.0 行为，更新最活跃 |
| [#2108](https://github.com/anthropics/skills/pull/2108) | README 澄清文档 Skill 快照与同步关系 | 2026-11-03 | 治理类文档说明 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏 Skill | 2026-11-01 | 长期维护的完整新 Skill |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc（SCNet 集群 / SSH / Slurm） | 2026-08-24 | 垂直领域工作流类 Skill |

---

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是“可信赖的分发与可验证的正确性”**——包括命名空间/权限信任边界（#492）、组织内共享（#228）、以及评估脚本与文档处理脚本的误报漏报和“假成功”（#556、#1352、#1792、#2018），其次是上下文效率（#1487、#189）。

---

# Claude Code 社区动态日报（2026-11-12）

> 数据来源：github.com/anthropics/claude-code。过去 24 小时内无新 Release、无 PR 更新；50 条 Issue 有更新，以下基于评论数最多的 20 条归纳。

## 1. 今日速览

今日无版本发布与 PR 活动，社区讨论集中在已有 Issue 上。多账户连接器支持（#27302，308 条评论、464 点赞）继续是热度最高的话题，Google 账户多开需求也出现多个相关提案。权限与成本问题持续升温：`bypassPermissions` 长期失效的元级问题（#39523）与多条用量额度异常消耗报告同日活跃。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues（10 条）

1. **#27302 [FEATURE] 同一连接器支持多个账户（Claude / claude.ai/code）** — 评论 308，👍464。要求允许同一连接器绑定不同账户。全站热度最高，企业用户与多身份用户需求强烈。[链接](https://github.com/anthropics/claude-code/issues/27302)

2. **#33932 [FEATURE] VS Code 扩展增加类似 Copilot Edits 的 Diff 审查 UI** — 评论 52，👍223。IDE 内审阅改动是高频痛点，点赞数第二高，说明提交流程体验是社区重点。[链接](https://github.com/anthropics/claude-code/issues/33932)

3. **#39523 [META] bypassPermissions 模式根本性失效——9 个月记录、12+ 重复报告、无解决** — 评论 38，👍19。核心权限机制缺陷长期未修复，元级汇总帖说明用户耐心正在消耗。[链接](https://github.com/anthropics/claude-code/issues/39523)

4. **#93482 [BUG][data-loss] Cowork：device_commit_files 覆盖时报告成功，磁盘内容却落后一次提交（静默陈旧写入）** — 评论 23。带复现与数据丢失标签，属于高风险正确性问题。[链接](https://github.com/anthropics/claude-code/issues/93482)

5. **#96870 [BUG][perf:memory] Windows MSIX 桌面版：会话派生的每个进程在通过 AppData 下 junction 打开路径时泄漏内核非分页池（bindflt.sys 问题）** — 评论 16。定位到具体系统缺陷，影响长时间运行的 Windows 桌面用户。[链接](https://github.com/anthropics/claude-code/issues/96870)

6. **#100407 [FEATURE] Google 连接器：每个 Claude 账户允许多个 Google 账户** — 评论 11。与 #105526 同向，个人 Gmail + 多个 Workspace 账户是典型场景。[链接](https://github.com/anthropics/claude-code/issues/100407)

7. **#87954 [FEATURE] 跨会话对话通道：让两个用户的 Claude Code 会话互相对话** — 评论 11。区别于共享会话（#60082），指向多智能体协作的新形态需求。[链接](https://github.com/anthropics/claude-code/issues/87954)

8. **#105334 [BUG][macOS] 桌面版未展示即拒绝 MCP elicitation 请求，却声称支持 elicitation** — 评论 7，👍7。带复现；MCP 交互协议在桌面端实现不一致，影响 MCP 生态信任度。[链接](https://github.com/anthropics/claude-code/issues/105334)

9. **#108534 [BUG][area:cost] 2026 年 10 月中旬起 Windows 桌面版用量额度消耗加速，而本地 token 量下降（Team 计划）** — 评论 5。作者关联 #105621 等同类报告，成本异常是计费敏感话题。[链接](https://github.com/anthropics/claude-code/issues/108534)

10. **#96608 [FEATURE] 桌面版 Code 标签页：让 Enter 排队、Cmd+Enter 立即发送** — 评论 5，👍13。当前按键行为不可配置且忽略 `keybindings.json`，与 #89126 同属 TUI/桌面自定义能力诉求。[链接](https://github.com/anthropics/claude-code/issues/96608)

## 4. 重要 PR 进展

过去 24 小时内无 Pull Request 更新，本部分无内容。

## 5. 功能需求趋势

- **连接器与账户多开**：同一连接器支持多账户是当前最集中的需求方向，覆盖通用连接器（#27302）、Google Workspace（#100407）、claude.ai 连接器及向远程用户返回授权 URL（#105526）。
- **IDE 集成体验**：VS Code 扩展的 Diff 审查 UI（#33932）以高点赞反映对事务性代码审查流程的期待。
- **桌面端可配置性**：按键映射（#96608）、时间格式遵循 `timeFormat`/系统区域设置（#105405）、隐藏权限模式指示器（#89126）等细粒度定制需求密集。
- **多智能体会话协作**：跨用户会话通道（#87954）显示社区已超出单会话使用范畴。
- **后台调度可靠性**：`ScheduleWakeup` 在 `/loop` 外报告调度成功却从不触发（#82633），影响无人值守长任务。

## 6. 开发者关注点

- **权限与安全机制的可信度**：`bypassPermissions` 长期失效（#39523）动摇对权限控制的信任。
- **成本与额度透明度**：多条报告称用量消耗快于本地 token 统计（#108534、#105352），且时间跨越多平台、跨套餐（Team 与 Pro）。
- **数据正确性**：Cowork 静默陈旧写入（#93482）与长会话中历史轮次显示为 “[cleared]”、粘贴内容与截图被剥离出上下文（#107979）——后者影响模型对上下文的持续可见性。
- **平台特有问题**：Windows 上内核内存泄漏（#96870）、Git Bash 命令行约 8175 字符截断与反斜杠被 MSYS2 削减（#93618）、远程控制默认开启（#88094）；macOS 上桌面版自动更新会在工作中强制重启（#104422）。
- **MCP 一致性**：桌面版与 CLI 对 elicitation 的处理不一致（#105334），Chrome 扩展连接检测问题被标记为重复（#108935）。
- **桌面端自动更新控制权**：用户希望自行选择安装时机并持续提醒（#104422）。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-12）

## 1. 今日速览

今日发布 5 个版本，其中 rust-v0.167.2 包含实际功能更新：Codex 默认在 Google Cloud Vertex AI 上**增量发送工具更新**，并可通过 `incremental_tools_legacy_gcp = false` 关闭。社区侧，Windows 平台问题集中爆发——浏览器访问宿主不可用、Computer Use 导致全局 UI 卡顿、沙盒锁失败等占据评论榜前列。此外，PR 队列中出现大批量沙盒权限模型重构（legacy `SandboxPolicy` 向 `PermissionProfile` 迁移），显示底层安全模型正在系统性改造。

## 2. 版本发布

- **rust-v0.167.2**：Codex 在 Google Cloud Vertex AI 上默认增量发送工具更新；如需退回旧行为，在 `config.toml` 的 `[features]` 下设置 `incremental_tools_legacy_gcp = false`。（[#60617](https://github.com/openai/codex/pull/60617)、[#60848](https://github.com/openai/codex/pull/60848)）
- **rust-v0.170.0-alpha.1 / alpha.2、rust-v0.169.0-alpha.11.1、rust-v0.167.0-alpha.4.3**：均为 alpha 版本发布，说明中未提供具体变更内容。

## 3. 社区热点 Issues

1. **[#57641](https://github.com/openai/codex/issues/57641) 终端 CLI 中 @Browser 报"browser access host is unavailable"**（52 评论 / 35 👍）——桌面端更新后浏览器能力失效，Windows 11 + Brave 环境复现，是今日讨论量最高的 Issue。
2. **[#59855](https://github.com/openai/codex/issues/59855) Windows 桌面端恢复云托管会话报 AbsolutePathBuf 错误**（30 评论）——影响云会话续接，阻断正常工作流。
3. **[#39841](https://github.com/openai/codex/issues/39841) 工作区终端启动失败："setup refresh had errors"**（26 评论）——自 8 月持续至今仍未关闭，属长期未解阻塞问题。
4. **[#56941](https://github.com/openai/codex/issues/56941) Computer Use 后系统级 UI 卡顿，仅杀 codex-computer-use.exe 可恢复**（23 评论）——严重的资源泄漏/性能问题，影响整机可用性。
5. **[#57101](https://github.com/openai/codex/issues/57101) Computer Use 截图轮次结束后捕获权限与黄色边框残留**（21 评论）——隐私与状态清理缺陷，与上一条同属 Computer Use 稳定性问题。
6. **[#25015](https://github.com/openai/codex/issues/25015) app-server 为 subagent 泄漏 MCP 进程栈，Linux 上内存线性增长**（19 评论 / 5 👍）——长期运行的 app-server 存在资源泄漏，对服务化部署影响大。
7. **[#24610](https://github.com/openai/codex/issues/24610) 为已归档云会话增加显式删除控制**（17 评论 / 30 👍）——高赞隐私诉求：归档不等于删除，涉及数据留存合规。
8. **[#56928](https://github.com/openai/codex/issues/56928) macOS 上浏览器自动化不可用**（17 评论 / 18 👍）——与 #57641 同源症状，说明浏览器宿主问题是跨平台共性问题。
9. **[#59546](https://github.com/openai/codex/issues/59546) 内置自动化限制阻止监控外部 Web 系统，与计划任务文档冲突**（13 评论 / 18 👍）——文档与实现不一致，影响自动化场景落地。
10. **[#49243](https://github.com/openai/codex/issues/49243) Android Remote 无法读取/继续 PC 上的 Codex 会话**（8 评论 / 6 👍）——跨设备远程控制链路的关键断点。

其他值得留意：#41399（macOS 删除的对话仍留在侧栏）、#60192（Windows sandbox `helper_sandbox_lock_failed`）、#60530（GPT-6.1 Sol 用量消耗异常加快）。

## 4. 重要 PR 进展

1. **[#61156](https://github.com/openai/codex/pull/61156)** 在 DNSSEC 禁用时忽略 Hickory DNSSEC 相关安全通告，消除 `codex-network-proxy` 的无效告警噪声。
2. **[#61153](https://github.com/openai/codex/pull/61153)** 修复 code-mode 会话准入对代理 HTTP 503 的重试（503 返回纯文本/HTML 而非 gRPC 帧）。
3. **[#61144](https://github.com/openai/codex/pull/61144)** 从 `Config` 移除 legacy 沙盒策略 setter，改为显式设置权限档案与工作区根目录。
4. **[#61138](https://github.com/openai/codex/pull/61138)** 将文件系统 helper 的沙盒准备集中到 `SandboxManager::transform`，统一 Windows 直接 spawn 包装。
5. **[#61136](https://github.com/openai/codex/pull/61136)** 恢复会话时改用权限档案标签比较沙盒覆盖，继续兼容 `external-sandbox`。
6. **[#61134](https://github.com/openai/codex/pull/61134)** 在会话设置准入阶段归一化权限更新，保留既有默认行为。
7. **[#61028](https://github.com/openai/codex/pull/61028)** 为 OTLP HTTP exporter 增加可刷新请求头（`otel.headers_helper`），凭证轮换无需重建 OpenTelemetry provider。
8. **[#61018](https://github.com/openai/codex/pull/61018)** 将 HTTP 请求头 helper 执行抽取为共享 crate，保留 10 秒超时约束。
9. **[#61017](https://github.com/openai/codex/pull/61017)** 新增 reasoning replay 移除指标（`codex.responses.reasoning_replay`），打通采样遥测。
10. **[#60981](https://github.com/openai/codex/pull/60981)** 使响应式 MCP OAuth 刷新具备取消安全性，避免并发 401 时凭据持久化中断。

说明：本期列出的 PR 均为 copyberry[bot] 提交并已 CLOSED，评论数未提供；整体方向集中于**沙盒/权限模型统一、遥测与网络代理健壮性**。

## 5. 功能需求趋势

- **平台稳定性优先级最高**：Windows 与 macOS 桌面端问题占据 Issues 榜单绝大多数，集中在浏览器宿主、Computer Use、沙盒与终端启动。
- **沙盒与权限模型重构**：PR 侧大批量将 `SandboxPolicy` 迁移至 `PermissionProfile`，并统一文件系统 helper 的沙盒准备路径。
- **资源与进程管理**：MCP 进程栈泄漏（#25015）、Computer Use 进程残留（#56941/#57101）指向后台进程生命周期管理需求。
- **数据隐私与留存**：云会话显式删除（#24610，30 👍）是少数高赞 enhancement，反映企业/合规场景诉求。
- **跨设备与远程控制**：Android Remote（#49243）、iOS 任务列表为空（#60778）显示移动端与桌面端会话同步尚不完整。
- **可观测性与凭证管理**：OTLP 可刷新请求头、reasoning replay 指标、MCP OAuth 取消安全，说明运维与遥测能力在补强。

## 6. 开发者关注点

- **Windows 体验是最大痛点**：评论量前 5 的 Issue 中有 4 个带 `windows-os` 标签，涉及浏览器、Computer Use、沙盒锁与路径反序列化。
- **浏览器自动化不可用反复出现**："browser access host is unavailable" 在 Windows（#57641）与 macOS（#56928）分别出现，且均获较高点赞，属跨平台高频阻塞。
- **Computer Use 的可控性不足**：全局 UI 卡顿需手动杀进程、截图后权限与边框残留，用户缺乏对 Computer Use 资源占用的控制手段。
- **文档与实现不一致**：自动化限制与 Scheduled tasks 文档冲突（#59546），影响开发者对功能边界的判断。
- **长期未关闭的旧 Issue 累积**：#39841（2026-08 创建）、#25015（2026-05 创建）、#24610（2026-05 创建）仍在活跃更新，反映部分基础问题修复周期长。
- **用量与限流敏感**：GPT-6.1 Sol 用量消耗加快（#60530）、HTTP 429 阻断会话加载（#51478），开发者对配额透明度有明确需求。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-12）

## 今日速览

过去 24 小时无新版本发布，但社区活跃度集中在 **Subagent / Agent 行为可靠性**上：多个 p1 级 Bug（子代理把 MAX_TURNS 中断误报为成功、generalist agent 永久挂起、Wayland 下 browser subagent 失败）在今日均有更新。PR 侧则以核心稳定性修复为主，覆盖会话恢复、Windows `/ide install`、错误报告安全存储以及音频/视频注入导致的 400 错误。

---

## 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) p1｜子代理达到 MAX_TURNS 被误报为 GOAL 成功**
   `codebase_investigator` 在未做任何分析、达到回合上限时仍返回 `status: "success"`。这是最具危害性的语义错误——失败被掩盖成成功，会误导上层调度与自动化流程。13 条评论、状态为 need-retesting，说明已修复待复验，是今日最值得跟踪的 Issue。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) p1｜Generalist agent 永久挂起**
   连创建文件夹这类简单操作都会无限挂起，用户等待长达一小时。8 条评论、👍8，是本批 Issue 中点赞最高者，反映用户体验受损严重，且与 Subagent 调度稳定性直接相关。

3. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) p1｜browser subagent 在 Wayland 下失败**
   Linux Wayland 环境下的浏览器子代理不可用，属于跨平台支持缺口，影响 Linux 桌面开发者群体。

4. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) p1｜输出 Hook 导致进程崩溃**
   `get-shit-done` 输出钩子在即将完成时反复崩溃 Gemini，涉及 Hook 机制与输出流处理的稳定性。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) p2｜Gemini 不主动使用 skills 与 sub-agents**
   用户反馈除非显式指令，否则模型几乎不自主调用自定义 skills / 子代理。这直接关系到 Agent 生态的可用性上限，属于产品体验层面的核心问题。

6. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) p2｜利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由**
   提出 Gemini 3 模型原生擅长链式 POSIX 工具（grep/cat/sed/awk），应通过沙箱机制释放这一能力。属架构级增强提案，effort/large，9 条评论显示讨论热度。

7. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) p2｜评估 AST 感知的文件读取、搜索与代码映射**
   EPIC 型议题，目标是减少工具调用回合、更精确地读取方法边界。与 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)（调研 tilth / glyph 作为起点）配套，预示代码理解层的下一轮优化方向。

8. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) p2｜Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**
   配置系统与 AgentRegistry 脱节，用户配置形同虚设，属于可配置性缺陷。

9. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) p2｜Agent 应抑制破坏性操作**
   模型在复杂 git 操作中偶发使用 `git reset`、`--force` 等危险命令。安全边界问题，对生产环境使用尤为关键。

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) p2｜工具数超限触发 400 错误**
    标题写 >128 工具，正文描述 >400 工具时报 400 错误。无论阈值具体为何，暴露了工具作用域管理不够智能的问题，随 MCP 生态扩张会愈发突出。

---

## 重要 PR 进展

1. **[#30230](https://github.com/google-gemini/gemini-cli/pull/30230) p1｜保留合成的 binary ack，修复音频/视频 400 错误**
   修复 Gemini 3 模型下对音视频调用 `read_file` 时因 "Requests ending with a model turn are not supported" 报 400 的问题，保证注入媒体独立成回合。

2. **[#30259](https://github.com/google-gemini/gemini-cli/pull/30259)｜仅在 resumeChat 成功后再恢复工作区目录**
   避免会话恢复失败时残留工作区目录污染当前 `WorkspaceContext`，属状态一致性修复。

3. **[#30088](https://github.com/google-gemini/gemini-cli/pull/30088) p2 安全｜错误报告移出共享临时目录**
   错误报告含完整聊天历史，此前写入 `os.tmpdir()` 且使用默认权限。改为 `~/.gemini/tmp/error-reports/` 并限制为仅本人可读，是明确的安全加固。

4. **[#30258](https://github.com/google-gemini/gemini-cli/pull/30258)｜请求超时超过 300s 时同步放大 undici bodyTimeout**
   此前仅更新 `headersTimeout`，长请求下 body 读取仍按 300 秒默认值超时，修复后两者联动。

5. **[#30253](https://github.com/google-gemini/gemini-cli/pull/30253)｜models 列表报告准确的输出 token 上限**
   修复所有模型硬编码为 8192 的问题，已知 Gemini 2.5 / 3 模型改为报告 65536。对依赖该数值做预算的用户影响直接。

6. **[#30246](https://github.com/google-gemini/gemini-cli/pull/30246)｜Windows 下为 cmd.exe 的 IDE CLI 路径加引号**
   修复编辑器 CLI 位于含空格目录时 `/ide install` 失败的问题，Windows 平台体验修复。

7. **[#29859](https://github.com/google-gemini/gemini-cli/pull/29859) p2｜在任务树中显示正在执行的子代理工具调用**
   修复子代理工具调用在执行期间从任务树消失的问题，非根调度器更新将保留 `executing` 状态，直接改善可观测性。

8. **[#30148](https://github.com/google-gemini/gemini-cli/pull/30148)｜ACP 模式下触发 SessionStart 与 Notification 钩子**
   ACP 会话创建/恢复时触发 SessionStart，工具请求确认时触发 Notification，补齐 ACP 与 Hook 系统的集成。

9. **[#30232](https://github.com/google-gemini/gemini-cli/pull/30232)｜ACP 支持 session/close**
   客户端可主动释放会话，此前因 `GeminiAgent` 未实现 `unstable_closeSession` 而返回 `-32601 Method not found`。

10. **[#30178](https://github.com/google-gemini/gemini-cli/pull/30178)｜修复 IME 提交与回车同 tick 到达时丢字**
    解决韩文（Hangul）输入法在提交后立即回车时丢失最后一个音节的问题（如 `테스트` 变成 `테스`），对 CJK/IME 用户价值明显。

另注：[#30135](https://github.com/google-gemini/gemini-cli/pull/30135)（`/stats heatmap` 每日 token 用量热力图）已 CLOSED，[#30179](https://github.com/google-gemini/gemini-cli/pull/30179)（标题为 "Refs/heads/main"、p1 size/xl）描述为空，二者均不建议作为进展参考。

---

## 功能需求趋势

- **Subagent 体系的成熟化**：本批 Issue 中 `area/agent` 占绝对多数，涵盖本地子代理 Sprint（[#20195](https://github.com/google-gemini/gemini-cli/issues/20195)）、子代理轨迹可通过 `/chat share` 查看（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）、仓库内示例代理集（[#18283](https://github.com/google-gemini/gemini-cli/issues/18283)）。方向从"能用"转向"可观测、可评估、可复用"。

- **更聪明的工具与代码理解**：AST 感知读写/搜索（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）与工具数量治理（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）指向同一目标：减少无效回合、控制上下文规模。

- **执行环境与沙箱**：零依赖 OS 沙箱提案（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）试图把模型的原生 shell 能力纳入可管控边界，兼顾能力释放与安全。

- **浏览器自动化韧性**：会话接管与锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）、配置覆盖生效（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、平台兼容（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)），说明 browser_agent 正从实验走向工程化。

- **协议与集成（ACP / IDE）**：ACP 的 session 生命周期与 Hook 支持，以及 Windows IDE 安装路径问题，反映非交互式与 IDE 集成的持续投入。

- **企业/安全与可观测性**：错误报告权限收紧、telemetry 白名单扩展 `skill_name`（[#30010](https://github.com/google-gemini/gemini-cli/pull/30010)，已 CLOSED），说明企业场景诉求正在影响核心设计。

---

## 开发者关注点

- **失败必须可见**：最强烈的诉求不是"不失败"，而是"失败不要伪装成成功"（#22323 的 GOAL/success 误报是典型）。子代理的终止原因、中断状态需要如实上报。

- **挂起与超时类问题优先级最高**：generalist agent 挂起（#21409）、交互式提示卡死（[#22465](https://github.com/google-gemini/gemini-cli/issues/22465) 创建 vite app 时卡在交互提示）、输出钩子崩溃（#22186），共同指向缺少可靠的超时与中断兜底。

- **配置不被尊重**：settings.json 覆盖对 Browser Agent 无效（#22267），以及 `~/.gemini/agents/` 下符号链接不被识别为代理（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)），都属于"配置写了但不生效"类问题，排查成本高、挫败感强。

- **安全边界需要默认守护**：模型使用 `git reset` / `--force`（#22672）、在随机目录生成临时脚本污染工作区（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)，需人工清理后才能干净提交），开发者希望危险操作被主动劝阻而非事后补救。

- **跨平台与本地化细节**：Wayland 支持、Windows 路径空格、Hangul IME 丢字——这些不是大功能，但直接影响特定用户群能否正常使用。

> 说明：以上内容均基于提供的 GitHub 数据整理，未引入外部信息；Issue/PR 状态以数据中标注为准（如 need-retesting、CLOSED 等）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-12）

## 1. 今日速览

今日发布两个补丁版本（v1.0.110-3 / v1.0.110-2），集中修复 Entra 登录误报弹窗、无障碍体验与中断响应的标注问题。Issues 侧无 PR 活动，社区讨论集中在 MCP 认证、子代理工具权限、会话索引回归以及 BYOK 配置等方向；其中多条与 1.0.89 / 1.0.95 之后的版本回归相关，值得优先排查。

## 2. 版本发布

**v1.0.110-3** — Fixed
- Microsoft Entra 登录：当存在可用的组织账号时，不再弹出不必要的错误提示。
- Sessions 列表：屏幕阅读器可识别当前会话，并能播报会话需要关注或处于空闲状态。
- `/usage` 的模型行按终端宽度换行，而非断行。

**v1.0.110-2** — Fixed
- 被中断或失败的尝试所返回的部分响应与推理内容会被标记为“不完整”，同时保留其文本。
- 在已被删除的目录中启动 `copilot` 时，提示“目录已不存在”及恢复方法，不再抛出 Node 堆栈崩溃。

## 3. 社区热点 Issues

1. **[#4606 OPEN] Google Workspace MCP OAuth 因 `accounts.google.com` 尾斜杠 issuer 不匹配而失败**（评论 5，👍 2）
   Google 官方 Workspace MCP 端点在浏览器授权流程开始前即失败，属原生 HTTP MCP 认证问题，影响 MCP 生态接入。
   https://github.com/github/copilot-cli/issues/4606

2. **[#5053 OPEN] 1.0.89 回归：ACP 会话不再向 `session-store.db` 索引历史与用量**（评论 4，👍 1）
   从 1.0.88 升级后，完成的 ACP 会话不再填充本地会话与用量索引，影响非交互式工作流的数据可追溯性。
   https://github.com/github/copilot-cli/issues/5053

3. **[#4515 CLOSED] Copilot CLI 同时暴露 MCP `content` 与 `structuredContent`**（评论 4）
   当工具结果同时含两字段时二者都被加入上下文；按预期应优先使用 `structuredContent`。已关闭。
   https://github.com/github/copilot-cli/issues/4515

4. **[#5151 OPEN] 回归：工具定义从 15K 膨胀至约 260K token 后，默认上下文的 Sol 模型在首个提示词前即被拒绝**（评论 2）
   自 2026-10-14 起报 `compaction_static_context_blocked`，是上下文与工具定义膨胀的典型信号。
   https://github.com/github/copilot-cli/issues/5151

5. **[#5363 OPEN] ACP `session/new` 返回的 `model` 与实际运行模型不符**（评论 1）
   响应声明 `currentValue: "claude-sonnet-5.5"`，但客户端未显式设置前会话并不使用该模型，易误导 ACP 集成方。
   https://github.com/github/copilot-cli/issues/5363

6. **[#5243 CLOSED] 1.0.95 回归：与已批准的 `exit_plan_mode` 同轮启动的子代理无任何内置工具**（评论 1）
   子代理缺失 `powershell`/`bash`、`view`、`create` 等工具，直接影响代理编排可靠性。
   https://github.com/github/copilot-cli/issues/5243

7. **[#4467 OPEN] 长时间运行的代理会话耗尽事件存储，CLI 仍活跃但显示已取消**（评论 1，👍 1）
   多子代理项目会话导致远程事件存储耗尽，会话状态与交接不可靠。
   https://github.com/github/copilot-cli/issues/4467

8. **[#4922 OPEN] 功能请求：将已有聊天或会话附加到 Project**（评论 2）
   Project 会话与普通聊天彼此隔离，缺少把已开始对话归入 Project 的受支持方式。
   https://github.com/github/copilot-cli/issues/4922

9. **[#5287 OPEN] 为 `providers.json` 发布 schema**（评论 2）
   用户希望以 JSON Schema 明确 BYOK 提供方可配置的参数项，属可发现性与配置体验需求。
   https://github.com/github/copilot-cli/issues/5287

10. **[#5440 OPEN] Agent Plugins 1.0 的 `.instructions.md` 与 `applyTo` frontmatter 被静默忽略**（👍 1）
   使用 Agent Plugins 1.0.0 格式打包时，`com.github.copilot/rules/` 下规则不生效；同日还有 [#5441](https://github.com/github/copilot-cli/issues/5441)（子代理在工具执行前拒绝 /tmp 写入）与 [#5437](https://github.com/github/copilot-cli/issues/5437)（`task` 子代理无法认证 HTTP-OAuth MCP）等新报缺陷。
    https://github.com/github/copilot-cli/issues/5440

另注：过去 24 小时内更新中约半数为内部 Datadog `copilot-runtime-bazel-cache` 告警机器人工单（如 #5185、#5169、#5170、#5259），均已 CLOSED/RECOVERED，与产品功能无关。

## 4. 重要 PR 进展

过去 24 小时内无更新的 Pull Request（数据为 0 条），本节无内容可报。

## 5. 功能需求趋势

- **MCP 生态与认证**：Google Workspace OAuth issuer 不匹配（#4606）、子代理无法认证 HTTP-OAuth MCP（#5437）、MCP 结果字段语义（#4515），显示 MCP 认证链路是当前薄弱环节。
- **非交互式 / ACP 集成**：会话索引回归（#5053）、`session/new` 模型声明不一致（#5363），反映 ACP 作为集成接口的稳定性诉求上升。
- **代理与子代理编排**：子代理工具缺失（#5243）、长会话事件存储耗尽（#4467）、子代理权限判定（#5441）。
- **扩展与插件体系**：Agent Plugins 1.0 规则文件被忽略（#5440）；同时出现 vim mode 内 `:q` / `:model` 命令需求（#5442）。
- **BYOK 与配置可发现性**：`providers.json` schema（#5287）。
- **终端与无障碍体验**：VSCode Server 剪贴板复制问题（#3996）持续未解；本日版本已改进 Sessions 列表屏幕阅读器支持与 `/usage` 换行。

## 6. 开发者关注点

- **版本回归频发**：1.0.89、1.0.95 等版本先后引入会话索引与子代理工具缺失问题，升级前的回归验证是社区隐忧。
- **上下文与工具定义膨胀**：工具定义涨至约 260K token 导致默认上下文模型直接拒绝请求，静态上下文压缩策略需优化。
- **权限与工具调用的一致性**：父代理可写而子代理在工具执行前即拒绝写入，allow-all 语义在委派场景下不一致。
- **认证流程体验**：Entra 登录误报（已在 v1.0.110-3 修复）与 MCP OAuth 失败并列，认证是高频摩擦点。
- **静默失效**：插件规则文件、ACP 模型声明等“不报错但不生效”的问题比显式崩溃更难排查，建议增加校验与告警。
- **噪音治理**：内部告警机器人工单占据 Issues 更新列表，建议与社区问题分栏，便于追踪真实反馈。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-11-12）

## 1. 今日速览

今日社区活跃度较低：过去24小时无新版本发布，也无 Issue 更新，仅有 1 条 Pull Request 状态变更。该 PR（#1777）提出三层规则系统（three-tier rules system），其创建于 2026-04-07，今天状态更新为已关闭（CLOSED），但摘要未披露具体实现细节。

## 2. 版本发布

今日无新版本发布。

## 3. 社区热点 Issues

过去24小时内无 Issue 更新，无法提炼热点。为避免虚构内容，本节不作条目列举。

## 4. 重要 PR 进展

| PR | 状态 | 作者 | 内容 | 链接 |
|---|---|---|---|---|
| #1777 feat: three-tier rules system | CLOSED（今日更新） | Nemo4110 | 引入“三层规则系统”。PR 摘要仅包含贡献模板提示（要求先在 Issue 中与维护者讨论并获得确认），未提供功能实现的具体描述。 | MoonshotAI/kimi-cli PR #1777 |

说明：该 PR 创建于 2026-04-07，历时较长后于今日关闭，可能反映维护者对规则系统设计方向的取舍，但现有数据不足以判断关闭原因。

## 5. 功能需求趋势

仅基于今日数据，可见的唯一方向为**规则系统（rules system）**的相关设计探索（PR #1777 的“三层”结构）。因过去24小时无 Issue 数据，无法从社区讨论中提炼更广泛的功能趋势（如 IDE 集成、性能、新模型支持等）。

## 6. 开发者关注点

- **贡献流程门槛**：PR #1777 的摘要强调需先在 Issue 中与维护者讨论并获得确认，提示贡献者应遵循“先讨论、后提交”的流程。该 PR 以关闭告终且缺少细节，也说明大型功能改动（如规则系统重构）需要更充分的前期对齐。

---

*注：本日报严格基于所提供数据生成；因过去24小时无 Issue 更新、PR 仅 1 条，部分章节内容有限。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-12

## 1. 今日速览

今日最值得关注的是 **#63550 跨项目上下文污染**（severity:high）——用户在一次 C 代码库会话中收到完全无关的 Python/FastAPI 代码审计结果，涉及 v2 推理层，已关闭但影响严重。此外，免费额度问题主帖 #59387 评论数已累积至 362 条，反映出免费层体验仍是社区最大痛点。PR 侧活跃于 TUI 编辑器细节修复与核心工具调用链的修复。

## 2. 版本发布

**process-daemon v0.5.2**（protocol 8）
- 来源：`packages/process-daemon`
- 已发布至 npm：`@opencode/pty@0.5.2`
- 说明：本次为 PTY 相关包的版本更新，数据未提供更详细的变更说明。

## 3. 社区热点 Issues

1. **#59387 [OPEN] zen 免费层问题主帖**（评论 362 / 👍27）
   免费层问题的集中反馈帖，覆盖 `Free usage exceeded`、`Free usage limit reached` 等提示。评论量极高，是观察免费层体验的核心入口。
   https://github.com/anomalyco/opencode/issues/59387

2. **#63550 [CLOSED] 上下文被他人项目污染**（severity:high，评论 10）
   用户在进行 C 代码库工作时，最终响应中出现无关的 Python/FastAPI 代码审计结果。涉及 v2 推理层与 provider，属高严重度问题，虽已关闭但值得跟进根因。
   https://github.com/anomalyco/opencode/issues/63550

3. **#49982 [CLOSED] 配置变更时插件重载失败，静默丢弃自定义 agent 与命令**（评论 9）
   v2.0.9 后台服务模式下反复出现 `failed to reload plugins`，导致存量会话丢失自定义 agent 与命令直到重启。已标记 reproduced。
   https://github.com/anomalyco/opencode/issues/49982

4. **#50208 [OPEN] TUI 在 SSH + tmux 下复制提示不落到本地剪贴板**（评论 8）
   选中文本即提示"Copied to clipboard"，但本地剪贴板无变化。远程开发场景的高频痛点。
   https://github.com/anomalyco/opencode/issues/50208

5. **#63296 [CLOSED] 连接 OpenCode Console 后其他 provider 的模型不再显示**（评论 8）
   已用 API Key 接入 DeepSeek、OpenRouter 等，接入 Console 后模型列表异常。影响多 provider 用户。
   https://github.com/anomalyco/opencode/issues/63296

6. **#53762 [OPEN] OpenAI WebSocket 反复以 1000/1012 关闭**（v2.0.24，评论 6 / 👍3）
   responses 请求频繁中断，报 `WebSocket closed with code 1000/1012`。影响使用 OpenAI 的稳定性。
   https://github.com/anomalyco/opencode/issues/53762

7. **#53528 #63528 [CLOSED] 重载失败后会话无法选择 agent（"Agent not found"）**（评论 4）
   与 #62002 同一缺陷，2.2.7 + MATE Terminal 复现。与 #49982 同属插件重载失败引发的一类问题。
   https://github.com/anomalyco/opencode/issues/63528

8. **#63526 [CLOSED] 服务挂起：InotifyBackend 持锁自旋，subscribe 耗尽 Bun worker pool**（2.2.7 Linux，评论 3）
   后台服务停止响应所有会话工作，但 HTTP 健康检查仍正常——典型的"假存活"故障，排查困难。
   https://github.com/anomalyco/opencode/issues/63526

9. **#63374 [CLOSED] 拒绝 execute 权限反而在原生工具列表暴露全部 MCP 工具**（评论 4）
   权限语义与预期相反：拒绝后所有 MCP 工具以 `<server>_<tool>` 形式带完整 schema 暴露给模型。安全相关。
   https://github.com/anomalyco/opencode/issues/63374

10. **#47721 [OPEN] core 累积 52 张图片，超过 provider 上限 50**（2.0，评论 4）
    单会话反复迭代图片资源后触发 `exceeding the maximum of 50`。多模态长会话的容量边界问题。
    https://github.com/anomalyco/opencode/issues/47721

> 其他值得留意：#62893（Mermaid 图片节点不渲染）、#63541（删除弹窗悬停即消失，reproduced）、#63156（Web 端 Firefox Zen 下模态无法聚焦）、#28030（桌面端删除项目功能已闭合）。

## 4. 重要 PR 进展

1. **#63531 [OPEN] feat(app)：免费额度耗尽时以面板替换输入框**
   免费用户耗尽额度后，composer 被替换为常驻面板，显示重置时间并引导接入 provider 或订阅 Go。直接回应免费层痛点。
   https://github.com/anomalyco/opencode/pull/63531

2. **#63227 [OPEN] feat(core)：为子 agent 并发加上限**
   关闭 #63303、#27110，关联 #54935（成本问题，当前无上限）。对成本控制有直接意义。
   https://github.com/anomalyco/opencode/pull/63227

3. **#62769 [OPEN] feat(core)：可选的 SQLite 全文索引会话历史**
   默认关闭，需设 `experimental.sqlite_fts: true`；后台构建并保持更新。本 PR 仅建索引，搜索工具留待后续。
   https://github.com/anomalyco/opencode/pull/62769

4. **#63577 [OPEN] fix(tui)：默认不把工具结果图片字节留在会话存储中**
   在排查重度使用机器的 TUI 内存增长时发现。除非开启图片预览，否则丢弃图片字节，直接缓解内存问题。
   https://github.com/anomalyco/opencode/pull/63577

5. **#63578 [OPEN] fix(tui)：在 tmux 中通过 OSC 52 复制到显示该 pane 的客户端**
   关闭 #50208。tmux 会包裹 DCS passthrough 中的 OSC 52，此前未能正确透传到本地剪贴板。
   https://github.com/anomalyco/opencode/pull/63578

6. **#63444 [OPEN] fix(core)：在 Code Mode 中让插件工具修复生效**
   此前 `tool.execute.before` 可改写 Code Mode 调用输入，但改工具名无效；未知工具路径在 hook 之前就失败。
   https://github.com/anomalyco/opencode/pull/63444

7. **#63573 [OPEN] fix(core)：直接调用修复时遵循对外声明的工具名**
   当会话把 `preview` 声明为 `bash` 时，直接调用 `bash` 可能执行 `shell`。叠在 #63444 之上以复用工具清单。
   https://github.com/anomalyco/opencode/pull/63573

8. **#62743 [OPEN] feat(core)：通过 Unix socket 连接模型 provider**
   目前仅支持 TCP 连接 provider；本地 llama.cpp、Ollama、vLLM 或企业网关监听 Unix socket 时，只能靠 socat 桥接。
   https://github.com/anomalyco/opencode/pull/62743

9. **#63562 [OPEN] feat(tui)：在 prompt 中段用斜杠提及 skills**
   关联 #40689。此前 skills 只能在 prompt 开头提及，本 PR 允许中途引用。
   https://github.com/anomalyco/opencode/pull/63562

10. **#63582 [OPEN] fix(tui)：减少 session 标签页的加载开销**
    关联 #55948（现有会话标题需等待子分页完成）。改善大历史会话下的 TUI 响应。
    https://github.com/anomalyco/opencode/pull/63582

> TUI 编辑器系列修复（贡献者 jlongster）：#63275（复制选区内的 paste）、#63260（关闭命令面板后保留 Mini 草稿光标）、#63265（undo 恢复占位符时还原粘贴文本）、#63262（浏览 prompt 历史后恢复实时草稿）。

## 5. 功能需求趋势

- **远程与多设备访问**：#63484 提议自托管 relay，让移动设备通过中继发现并连接桌面实例，避免将桌面直接暴露到公网；#50208/#63578 指向 SSH + tmux 远程场景的剪贴板支持。
- **本地模型与自定义端点**：#62743 要求 Unix socket 方式连接 provider（llama.cpp、Ollama、vLLM、企业网关）。
- **TUI 插件与可定制性**：#61697 希望 TUI 插件能重设 session transcript 样式（目前只能加 footer、侧栏和面板）。
- **会话历史检索**：#62769 落地可选的 SQLite FTS5 索引，为后续搜索工具铺路。
- **成本与并发控制**：#63227 为子 agent 并发设上限，回应成本无约束的反馈。
- **桌面端管理能力**：#28030 提出桌面端删除项目功能（已闭合）。

## 6. 开发者关注点

- **免费层体验是最大痛点**：#59387 单帖 362 条评论；#63568 报告 4 周未使用后仍未解除限流，且等待 7 天后依旧提示 `free usage limit reached`；#63531 从 UI 侧给出正反馈。
- **插件重载失败引发连锁故障**：#49982、#63528 表明配置变更时插件重载失败会静默丢弃自定义 agent/命令，并导致 "Agent not found"，需重启才能恢复。
- **后台服务稳定性**：#63526 指出服务挂起时 HTTP 健康端点仍应答，但所有会话工作停滞，故障检测手段不足。
- **上下文正确性与隔离**：#63550 的跨项目上下文污染是最高严重度问题；#47721 的图片数量超出 provider 上限也属上下文管理边界。
- **权限语义**：#63374 显示拒绝 `execute` 权限却导致全部 MCP 工具暴露，权限模型与用户预期相反。
- **TUI 编辑体验**：粘贴、撤销、草稿、历史浏览等多处细节由同一贡献者集中修复，反映编辑器的状态管理问题较集中。
- **TUI 内存占用**：#63577 显示工具结果图片字节长期驻留，是重度用户的内存隐患。
- **平台安装与兼容性**：#63352 Windows 11 安装脚本要求 WSL 且无 npm 替代路径；#63156 Firefox Zen 下模态无法聚焦；#60444 桌面端 Browser 面板入口消失。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-11-12

> 数据来源：github.com/badlogic/pi-mono（Issues/PR 链接显示为 earendil-works/pi）。过去 24 小时无新 Release。

## 1. 今日速览

今天社区讨论集中在 Bug 清理与跨平台兼容：Windows 下 `pi -p` 无法退出、bash 临时文件错误导致进程崩溃、GNU screen 下 TUI 丢失颜色等问题均有进展。协议适配层有多项修复落地，包括 Anthropic 保留工具 schema 的 `additionalProperties`、对 “Connection closed.” 重试、Google 适配器支持自定义 fetch。PR 数量明显多于 Issue 新增，说明维护节奏偏向修复而非新增功能。

## 2. 版本发布

过去 24 小时无新版本。

## 3. 社区热点 Issues（10 个）

1. **#2870 [CLOSED] 遵循 XDG Base Directory**（28 评论，👍 75，今日最高热度）
   要求 Linux 下配置文件不再污染 home 目录，改用 `$XDG_CONFIG_HOME`。已关闭；高赞表明这是广泛共识的“体验债”。 https://github.com/earendil-works/pi/issues/2870

2. **#11026 [OPEN] pi-durable：永久删除对话**
   为持久化存储提供 `harness.deleteConversation(id, ctx)`，运行中先拒绝或中止。涉及隐私与存储生命周期，8 条讨论显示设计细节仍需敲定。 https://github.com/earendil-works/pi/issues/11026

3. **#10618 [OPEN] GNU screen 下 TUI 失去颜色**
   继承的 `COLORTERM=truecolor` 绕过了 screen 守卫，导致 24 位色判断失真。典型终端兼容性陷阱。 https://github.com/earendil-works/pi/issues/10618

4. **#10563 [CLOSED] MCP OAuth：Google 服务器拿不到 refresh token**
   需要允许 `mcp.json` 的 OAuth 条目附加授权参数（如 `access_type=offline`）。影响 Gmail/Calendar MCP 的长期可用性。 https://github.com/earendil-works/pi/issues/10563

5. **#12068 [CLOSED] Windows 下 `pi -p` 在工具调用 + 扩展 `pi.exec` 时永不退出**
   1.5.1/1.5.2 的阻塞性缺陷，直接影响非交互/脚本化使用场景。 https://github.com/earendil-works/pi/issues/12068

6. **#10585 [OPEN][prio:p0] bash 临时文件流错误仍会崩溃整个进程**
   满 `/tmp`（ENOSPC）或 EACCES 触发未捕获异常。P0 级别，说明 I/O 错误边界仍不够健壮。 https://github.com/earendil-works/pi/issues/10585

7. **#12060 [OPEN][prio:p0] openai-codex：zstd 压缩的 SSE 请求返回 400**
   同样的 body 未压缩可通过，问题自 11 月 9 日起出现于长会话。AI 代理撰写的报告，附有调查过程。 https://github.com/earendil-works/pi/issues/12060

8. **#12098 [OPEN] Anthropic message threads：重发后丢失 thinking blocks**
   字符串类型数值工具参数触发 `prefix_binding_mismatch`，影响 1.5.1 起默认启用的线程机制。 https://github.com/earendil-works/pi/issues/12098

9. **#9448 [OPEN] `pi auth check` 看不到扩展注册的 provider**
   被误报为 `invalid_state`，破坏了脚本化就绪检查这一文档化用法。 https://github.com/earendil-works/pi/issues/9448

10. **#7740 [OPEN] `/reload` 后 TUI 不再遵循自定义工具的 renderCall/renderResult**
    扩展加载顺序问题，与 `session_start` 注册的工具相互作用，影响扩展生态体验。 https://github.com/earendil-works/pi/issues/7740

## 4. 重要 PR 进展（10 个）

1. **#12103 [OPEN] 将自定义 fetch 传给 Google GenAI SDK 适配器**
   允许 `google-generative-ai`/`google-vertex` 转发 `options.fetch`，用于 HTTP 代理与 `Retry-After` 检查，与 Issue #12097 配套。 https://github.com/earendil-works/pi/pull/12103

2. **#12100 [CLOSED] 非严格模式保留 Anthropic 工具 schema 根级 `additionalProperties`**
   修复 `convertTools()` 重建 `input_schema` 时丢失字段的问题（对应 #12067）。 https://github.com/earendil-works/pi/pull/12100

3. **#12087 [CLOSED] grep/find 工具跳过 VCS 目录**
   原因：`--hidden` 使 `.git/` 被搜索，3 处 TODO 检索出 18 条匹配。 https://github.com/earendil-works/pi/pull/12087

4. **#12089 [CLOSED] 信号终止的 `pi.exec` 命令报为失败**
   修复 `code ?? 0` 把超时/中止误判为成功的问题。 https://github.com/earendil-works/pi/pull/12089

5. **#12094 [CLOSED] 新增 Neon AI Gateway provider**
   内置 `neon-ai-gateway`，以 `NEON_AI_GATEWAY_TOKEN` 与 `NEON_AI_GATEWAY_BASE_URL` 配置。 https://github.com/earendil-works/pi/pull/12094

6. **#11906 [CLOSED] 防止本地文件/会话读取中止时出现未捕获 AbortError**
   针对 codemode 中未 await 的 `tools.read` 与 `Execution.finish()` 中止竞态。 https://github.com/earendil-works/pi/pull/11906

7. **#12093 [CLOSED] 对 “Connection closed.” 类 provider 错误重试**
   网关中途断流时 `isRetryableAssistantError` 未命中，导致回合直接失败。 https://github.com/earendil-works/pi/pull/12093

8. **#12028 [OPEN] 将 `sendMessage` 的 triggerTurn 延迟到压缩结束**
   修复手动 compact 期间 `triggerTurn: true` 触发并发运行（对应 #10982）。 https://github.com/earendil-works/pi/pull/12028

9. **#12092 [CLOSED] 尾行过长时保留 bash 输出**
   修复短行 + 超长行场景下输出被完全丢弃、footer 行号错误（如 “Showing lines 3-2 of 2”）。 https://github.com/earendil-works/pi/pull/12092

10. **#12072 [CLOSED] 将 deferred Responses 工具归入 namespace**
    针对大工具目录减少未加载工具的描述 token 消耗（Vercel AI Gateway 场景）。 https://github.com/earendil-works/pi/pull/12072

## 5. 功能需求趋势

- **扩展与插件 API 完善**：公开 oauth/renderPage 工具函数（#6930）、扩展 provider 被 auth check 识别（#9448）、扩展 completion 的原子 enqueue-and-wake（#12073）、`/reload` 后渲染一致（#7740）。
- **provider 适配层扩展性**：自定义 fetch（#12097）、OAuth 授权参数（#10563）、namespace 化工具定义（#12072）、新网关接入（#12094）。
- **持久化与数据管理**：对话永久删除（#11026）、P2 备份到 Radius（#12059）、Radius 会话同步适配器（#11990）。
- **跨平台与终端兼容**：XDG 目录规范（#2870）、GNU screen 颜色（#10618）、Windows 进程退出（#12068）。
- **性能与 token 成本**：批量编辑复用归一化内容（#9545）、图片以 file_id 引用替代 base64 重放（#8617）、deferred 工具分组。

## 6. 开发者关注点

- **崩溃边界不足**：ENOSPC/EACCES 等 I/O 错误仍会以未捕获异常杀死进程（#10585，P0），是最高优先级痛点。
- **非交互/脚本化可靠性**：Windows 下 `pi -p` 挂起（#12068）、`pi auth check` 误报（#9448）、信号终止被当作成功（#12089）——说明 CLI 自动化路径的退出码与状态语义需要统一梳理。
- **配置写入静默失败**：只读 `settings.json` 下修改看似成功实则未生效（#10168），对 Nix/home-manager 用户尤其困扰。
- **provider 重试与流式健壮性**：压缩请求 400（#12060）、thinking blocks 丢失（#12098）、连接中断不重试（#12093），显示多网关环境下流式传输处理仍有gap。
- **扩展生命周期一致性**：注册时机、重载顺序与状态检查在多处引发问题，扩展作者需要更确定的加载语义。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-11-12

## 今日速览

v1.0.0-preview.1 发布，修复订阅账号登录后无法使用订阅模型的问题，并将订阅模型目录与 thinking-budget 映射跟 Qwen Code 0.2 对齐。CI 稳定性成为今日最大噪音源：hz3 节点 /tmp inode 耗尽、构建产物下载超时、E2E 测试失败等 P1 问题集中更新，多条 PR 检查在未执行测试的情况下变红。核心侧，1.0 Preview 的事件驱动 agent loop 内核正按切片方式向 main 落地，托管 Agent（managed-agent）的收敛与能力补齐同步推进。

---

## 版本发布

**v1.0.0-preview.1**
- 修复：Qwen 订阅账号登录后无法使用订阅模型；模型目录现自动跟随登录状态，无需手动配置 provider。
- 同步：订阅模型目录与 thinking-budget 映射与 Qwen Code 0.2 保持一致。
- 链接：QwenLM/qwen-code Releases

---

## 社区热点 Issues

1. **#17045 [OPEN][P1] tracking(core): 将 1.0 Preview loop kernel 按切片落地 main**
   作者 qqqys。1.0 Preview 将 agent loop 重构为单一 `query()` 入口后的事件驱动内核，本 issue 追踪分片合入并逐步开放。这是理解后续所有核心变更的总纲。👍0 / 评论 7
   链接：QwenLM/qwen-code Issue #17045

2. **#16927 [OPEN][P1] CI：构建产物下载超时导致 PR 检查变红且零测试执行**
   hz 集群全部 58 个 job 受影响，两次下载尝试均过期，job 约 31 分钟后失败。已标记 ready-for-human。👍0 / 评论 7
   链接：QwenLM/qwen-code Issue #16927

3. **#17037 [OPEN][P1] CI：hz3 节点 /tmp inode 耗尽**
   残留验证工作树占用 92% tmpfs，`/tmp` 仅剩 10314 个空闲 inode，低于 100000 下限，job 在重步骤前即失败。👍0 / 评论 4
   链接：QwenLM/qwen-code Issue #17037

4. **#17040 [OPEN][P1] ACP 会话执行 curl/网络调用后空闲失联**
   Web Shell（`qwen serve` daemon）中执行 curl 的回合触发 `agent channel closed mid-request`，子进程未崩溃，最终被 stats 超时杀掉。涉及 Windows 与 shell 工具链。👍0 / 评论 5
   链接：QwenLM/qwen-code Issue #17040

5. **#16579 [OPEN][P1] Hosted v1 detach 在 Hook 配置回合的后台运行中卡死**
   范围于 2026-11-12 修正：原命名路由已不再失败，楔死点在 v1 detach，需要 keep-READY drain。👍0 / 评论 4
   链接：QwenLM/qwen-code Issue #16579

6. **#15327 [OPEN][P1] tracking(core): 所有 surface 统一运行在 `experimental.unifiedAgentLoop` 下的单一 agent loop**
   与 #17045 互为上下游，目标是 `packages/core` 中唯一实现供所有界面复用。👍0 / 评论 4
   链接：QwenLM/qwen-code Issue #15327

7. **#16958 [OPEN][P2] CI：lint-gate 与 pool 加固的三项已验证跟进（heap-cap 值、`|| true` pin 缺口、ESLint github_ci_only 缺口）**
   三项均已实现在 PR #16946 中，issue 将保持开启直至该 PR 合入。👍0 / 评论 11
   链接：QwenLM/qwen-code Issue #16958

8. **#14361 [OPEN][P2] managed-agent：Session store 间歇性以 400 拒绝 Hosted Shell 回合**
   `HostedShellLifecycleRecoveryIT` 在 SDK Java 运行中 41% 概率失败，属于长期未收敛的抖动型缺陷。👍0 / 评论 10
   链接：QwenLM/qwen-code Issue #14361

9. **#13570 [OPEN][P2] Auto mode 误拦仅提及 amend 字样的无害文本**
   拦截发生在用户自身 ask 规则之前，且无逃生通道；涉及 shell、git 与 core 权限层。0.24.5 / 0.25.0 均可复现。👍0 / 评论 9
   链接：QwenLM/qwen-code Issue #13570

10. **#16434 [OPEN][P2] 升级 SDK 与 Web Shell 依赖以消除已公布的安全公告**
    干净的 npm 解析 `@qwen-code/sdk@0.1.28`、`@qwen-code/web-shell@0.26.8` 仍会引入受影响依赖。安全类需求值得优先看待。👍0 / 评论 4
    链接：QwenLM/qwen-code Issue #16434

> 另注：#16915 与 #16908 两条用户侧“任务中断/连接模型服务失败”反馈已于今日关闭，说明该类断连问题已有处置路径；#16816（browser-use 在 zod@4.6.6 下二次解析深层 locator plan 卡死）亦已关闭。

---

## 重要 PR 进展

1. **#17058 [CLOSED] refactor(managed-agent): 收敛 OSS 热路径、死代码与 pool 默认值**
   托管 Agent 服务投产前收敛的第一层，移除每次读取的冗余 bucket 版本检查。作者 doudouOUC。
   链接：QwenLM/qwen-code PR #17058

2. **#17072 [OPEN] refactor(managed-agent): 移除 binding control 中的 catalog 探测与重复 root lock**
   在 claim/renew/release/dispatch 前去掉两项冗余校验，降低普通 session 类 Runtime binding 的开销。
   链接：QwenLM/qwen-code PR #17072

3. **#16866 [OPEN] feat(managed-agent): 新增 Managed Web Terminal**
   为托管会话加入交互式 Web 终端，浏览器 WebSocket 经 Java 控制面逐字节转发至 Runtime worker 的 PTY，补齐 `web_terminal` 的 Managed 能力对齐。
   链接：QwenLM/qwen-code PR #16866

4. **#16844 [OPEN] feat(managed-agent): 将客户端文件系统注册进托管会话**
   让托管会话可使用浏览器用户本地文件系统，对齐 daemon 已有的本地文件能力；受限于托管控制面无 WebSocket 及托管 harness 的 Web 限制。
   链接：QwenLM/qwen-code PR #16844

5. **#17032 [OPEN] feat(serve): 为 PR watch 装配依赖并在恢复时投递**
   daemon 的 PR 状态监听存在两个生产环境从未填充的依赖缝，此前即便开启功能也无法观测或投递。
   链接：QwenLM/qwen-code PR #17032

6. **#16685 [OPEN] fix(acp): 在 ACP 回合上调度托管 skill review**
   使 `qwen serve`、daemon 与 ACP 桥接 CLI 与交互式 CLI 行为一致，避免触发状态堆积未读。
   链接：QwenLM/qwen-code PR #16685

7. **#15959 [OPEN] fix(cli): 中断后保留 Hosted 回合历史**
   Hosted tool-profile 回合在 Harness 中断后结算时，保留原始用户指令及已提交的 assistant/tool 交换。
   链接：QwenLM/qwen-code PR #15959

8. **#16686 [OPEN] feat(headless): 终态错误结果保留 provider HTTP 状态码**
   机器可读错误对象新增可选 `status` 字段，便于下游程序化处理上游 provider 失败。
   链接：QwenLM/qwen-code PR #16686

9. **#16760 [OPEN] fix(web-shell): 无需 workspace 即可解析用户设置**
   启动时立即从 `/workspace/settings` 加载，而非被 `projectFeaturesAvailable` 阻塞，并扩大 providers 相关逻辑的适用范围。
   链接：QwenLM/qwen-code PR #16760

10. **#16779 [OPEN] feat(web-shell): 改进会话搜索体验**
    在居中的独立对话框内打开会话搜索，侧栏品牌与操作行保持稳定，最近会话与匹配项展示标题、对话片段和工作区上下文，支持键盘选择。
    链接：QwenLM/qwen-code PR #16779

---

## 功能需求趋势

- **统一 Agent Loop（核心架构主线）**：#17045 与 #15327 共同指向“`packages/core` 单一 loop 实现、所有 surface 复用”，通过 `experimental.unifiedAgentLoop` 渐进开放，是当前最强的路线信号。
- **托管 Agent 能力补齐（managed-agent）**：Web Terminal、客户端文件系统注册、托管会话与 daemon 能力对齐，构成今日 PR 最密集的方向。
- **会话管理（session-management）**：roadmap 标签高频出现，涵盖中断后历史保留、detach 状态机、keep-READY drain 等。
- **安全与权限加固**：amend-guard 识别器覆盖扩展（#16449）、Auto mode 误拦（#13570）、依赖安全公告升级（#16434）。
- **CI/CD 工程健壮性**：inode 耗尽、产物下载超时、lint-gate 缺口、Docker 测试重试，已成体系化需求而非零散缺陷。
- **多 Agent 与后台视图（roadmap/multi-agent）**：cli background-view 的 UX 边界问题被持续记录（#16444）。

---

## 开发者关注点

- **CI 不稳定性直接伤害贡献者体验**：多个 P1 issue 显示 PR 检查在“零测试执行”的情况下变红，58 个 job 同时受影响，开发者无法从红灯中区分真实回归与环境故障。
- **基础设施容量问题**：hz3 节点 /tmp inode 低于下限、残留工作树占用 92% tmpfs，属于需运维介入的硬阻塞。
- **托管/长连接会话的可靠性**：curl 调用后会话失联、Hosted v1 detach 卡死、Session store 间歇 400，均表现为“偶发但高比例”，排查成本高。
- **权限拦截的误报与缺少逃生通道**：Auto mode 对仅提及 amend 字样的文本先行拦截并绕过用户自身规则，是典型的可用性痛点。
- **依赖安全与版本对齐**：已发布安全公告仍存在于干净解析结果中，需要明确的升级与发布节奏。
- **用户侧断连反馈集中关闭**：两条“任务卡死/连接模型服务中断”反馈今日关闭，可作为该问题已被响应的正向信号。

---

*说明：本日报仅基于提供的 GitHub 数据生成；PR 评论数为数据源缺失（undefined），故未作引用。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-12）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issue/PR 链接均指向 codewhale-hq/Codewhale 仓库编号）

## 1. 今日速览

今日无新版本发布，社区活动集中在 v0.10.3 的收尾与质量修复。16 条活跃 Issue 中多数由 luochen211 提交，围绕**非 ASCII / 中文（zh-Hans）场景**、沙箱策略绕过、MCP/LSP 协议正确性和状态持久化四类问题集中爆发。相关修复 PR 同步大量涌现（15 条评论较多的 PR 中 10 条已关闭），显示维护者对这批 bug 响应迅速。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

| # | 标题 | 状态 | 为何值得关注 |
|---|------|------|--------------|
| [#7279](https://github.com/codewhale-hq/Codewhale/issues/7279) | 0.10.3：通过 ACP 将已安装 agent（Claude Code、Codex、Kimi 等）作为 Codewhale 会话运行 | OPEN | v0.10.3 的核心方向，ACP（Agent Client Protocol）优先，影响侧边栏/历史/状态的整体架构。4 条评论，是今日讨论最热的 Issue，带 `help wanted`、`good first issue`。 |
| [#7306](https://github.com/codewhale-hq/Codewhale/issues/7306) | MCP 与 LSP 客户端把服务器请求当成回复，且从不回应 | OPEN | 协议级正确性问题：带 `method` 的入站请求被误判为自身请求的回复，影响所有 MCP/LSP 交互的可靠性。 |
| [#7305](https://github.com/codewhale-hq/Codewhale/issues/7305) | 拒绝规则漏掉 `hash -p` / `zsh =cmd` 重绑定、alias 经 eval 执行，以及 parallel、chpst、screen、at 启动器 | OPEN | 沙箱安全绕过，直接关系到策略能否真正拦截危险命令，OS 标注 macOS。 |
| [#7302](https://github.com/codewhale-hq/Codewhale/issues/7302) | 国际化域名的网络拒绝条目永不匹配 | OPEN | `host_from_url` 返回 punycode 形式，非 ASCII 域名的 deny 规则形同虚设，属安全策略失效。 |
| [#7301](https://github.com/codewhale-hq/Codewhale/issues/7301) | 密钥脱敏漏掉紧邻中文或全角标点的 provider key | OPEN | 脱敏仅按 ASCII 空格分词、仅修剪 ASCII 标点，存在凭据泄露风险。 |
| [#7299](https://github.com/codewhale-hq/Codewhale/issues/7299) | zh-Hans：`/router`、label 与 usage 字符串使用 ASCII 标点；zh-Hans 专属分支绕过语言包 | CLOSED | 本地化一致性问题的代表，已关闭。 |
| [#7304](https://github.com/codewhale-hq/Codewhale/issues/7304) | zh-Hans TUI：`/status` 标签错位，tool 单元格、`/help`、`/diff` 与输入框残留英文 | OPEN | 基于 `main`(4b8a30009) 在 `LANG=zh_CN.UTF-8` 下的实测截图级反馈，是中文用户体验的直接痛点。 |
| [#7303](https://github.com/codewhale-hq/Codewhale/issues/7303) | 非 ASCII 文件名：`/diff`、`@git`、`@diff` 出现八进制转义路径，工作集条目为空 | OPEN | `core.quotePath=true` 导致中文/空格/emoji 文件名显示异常，影响中文项目日常使用。 |
| [#7298](https://github.com/codewhale-hq/Codewhale/issues/7298) | state/snapshot：残缺的 session-index 行吞掉下一条；过大的 `snapshots.max_age_days` 会清空全部快照 | OPEN | 崩溃场景下的磁盘状态丢失，涉及会话索引与快照保留策略两个边界。 |
| [#7324](https://github.com/codewhale-hq/Codewhale/issues/7324) | Git status 隐藏从工作区一侧离开的 rename 来源 | OPEN | `split_by_workspace` 的 deleted 行合成逻辑有边界缺陷，与今日多条 git rename 修复相连。 |

另有 [#7174](https://github.com/codewhale-hq/Codewhale/issues/7174)（conformance prompt fixture 在装有可选工具的主机上失败，`status:awaiting-release`）值得关注，属发布前阻塞类问题。

## 4. 重要 PR 进展（10 条）

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| [#7326](https://github.com/codewhale-hq/Codewhale/pull/7326) | feat(engine)：外部 agent 注册表新增 GitHub Copilot CLI | OPEN | 在 `crates/engine/src/fleet/agents.rs` 的 `AGENTS` 增一行，衔接 #7279 方向（Qwen Code 由 #7293 覆盖）。外部贡献。 |
| [#7285](https://github.com/codewhale-hq/Codewhale/pull/7285) | feat(providers)：新增 UberLLM 内置描述符 | OPEN | OpenAI 兼容网关，一把 key 接入 OpenAI/Anthropic/Google/DeepSeek 等模型，格式与 Opper、Runcrate 行一致。 |
| [#7319](https://github.com/codewhale-hq/Codewhale/pull/7319) | fix(mcp,lsp)：回应服务器请求而非当作回复 | OPEN | 对应 #7306，均为两提交修复，属协议正确性核心修复。 |
| [#7315](https://github.com/codewhale-hq/Codewhale/pull/7315) | fix(config)：所有 env 别名链经由 `env_non_blank` 读取 | OPEN | 修复空导出变量（如 compose `${VAR:-}`）遮蔽 legacy 别名的问题，对应 #7297。 |
| [#7322](https://github.com/codewhale-hq/Codewhale/pull/7322) | fix(tui)：会话标题上限按字符而非字节计数 | OPEN | 36 个中文字符标题被误判超长（`len()>100` 计字节），改为字符计数。 |
| [#7314](https://github.com/codewhale-hq/Codewhale/pull/7314) | fix(tui)：zh-Hans 全角标点与 CJK 标签下 `/status` 对齐 | CLOSED | 两个独立提交，对应 #7299。 |
| [#7310](https://github.com/codewhale-hq/Codewhale/pull/7310) | fix(app-server)：读取 git status 中工作区侧 rename 的原始路径 | CLOSED | 修复 porcelain v2 `-z` 下 ` R new\0old\0` 行解析错误。 |
| [#7323](https://github.com/codewhale-hq/Codewhale/pull/7323) | fix(app-server)：读取工作区侧 rename 的原始路径 | CLOSED | `parse_porcelain` 仅在 index 列为 R/C 时读取原路径，而 Git 在任一列都可能报告 rename。 |
| [#7296](https://github.com/codewhale-hq/Codewhale/pull/7296) | fix(repl)：按字节而非字符截断 stdout | CLOSED | 原按字符截断导致多字节输出超限最多 3 倍（1024 字节限制下 CJK 输出达 2886 字节）。 |
| [#7291](https://github.com/codewhale-hq/Codewhale/pull/7291) | fix(engine)：web fetch 与 web.run 只解码一次 HTML 实体 | CLOSED | 用 `str::replace` 链（以 `&amp;` 开头）解码会误改页面刻意转义的文本。 |

其他值得一提的已关闭修复：[#7295](https://github.com/codewhale-hq/Codewhale/pull/7295)（上下文窗口标签去掉尾随零）、[#7290](https://github.com/codewhale-hq/Codewhale/pull/7290)（RLM 会话名保留非 ASCII 字符，避免中文文件名重名）、[#7289](https://github.com/codewhale-hq/Codewhale/pull/7289)（恰好等于上限的摘要被误加 `...`）、[#7288](https://github.com/codewhale-hq/Codewhale/pull/7288)（识别 `env -S` shebang）。

## 5. 功能需求趋势

- **ACP 与外部 agent 生态接入**：v0.10.3 以 ACP 优先，社区在扩充外部 agent 注册表（Claude Code、Codex、Kimi、Qwen Code、GitHub Copilot CLI），把多家 CLI agent 统一为 Codewhale 会话。
- **本地化（zh-Hans）深化**：从字符串标点、标签对齐到全角标点分支，本地化不止是翻译，还涉及布局与方向性。
- **国际化 / 非 ASCII 全链路健壮性**：文件名、会话名、截断计数、域名、脱敏、git 路径等多处均存在字节/字符混淆类缺陷。
- **沙箱与安全策略强化**：命令重绑定、别名 eval、多种启动器的绕过，以及 IDN 域名 deny 规则失效。
- **协议正确性（MCP/LSP）**：JSON-RPC 双向请求处理的正确性。
- **Provider 网关集成**：以描述符行方式内置 OpenAI 兼容网关（UberLLM 等）。
- **状态持久化可靠性**：session-index 残缺行与快照保留边界。

## 6. 开发者关注点

- **字节 vs 字符的反复踩坑**：stdout 截断、会话标题长度、上下文窗口格式化、RLM 会话名派生等多处出现同一类错误，建议系统性审计所有长度/截断逻辑。
- **中文与全角标点场景未被覆盖**：脱敏、网络策略、TUI 布局在中文环境下失效，反映测试用例缺乏非 ASCII 输入。
- **沙箱拦截可信度**：拒绝规则被多种 shell 语法绕过，开发者对策略有效性存疑。
- **磁盘状态丢失风险**：崩溃时的残缺行与极端配置（`snapshots.max_age_days`）会静默丢数据。
- **维护者响应快但积压仍多**：多数 bug 当日即有对应 PR 并关闭，但 OPEN 项中多项为安全/协议级问题，优先级需明确。
- **贡献门槛不高**：`good first issue`、`help wanted` 标签与外部贡献者活跃（Aboysky、SparkofSpike、PSA-Team-source），外部 PR 主要来自少数贡献者。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*