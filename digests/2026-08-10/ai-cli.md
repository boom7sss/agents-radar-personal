# AI CLI 工具社区动态日报 2026-08-10

> 生成时间: 2026-08-10 02:15 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-10）

## 1. 生态全景

当前 AI CLI 工具整体处于 **"功能快速演进、稳定性大规模还债"** 阶段。各工具在会话持久化、多 Agent 协作、MCP 生态接入三方面集中投入，但社区反馈的热点正从"缺功能"转向"不稳定"——Windows 平台兼容、流式协议可靠性、上下文压缩透明性成为跨工具共性痛点。安全分类器误报（Claude Code Fable 5）与模型网关故障（OpenCode DeepSeek V4 Flash）等系统性问题开始消耗用户信任。与此同时，Gemini 与 Qwen 通过夜间版本保持高频迭代，Codex 与 Copilot 则侧重 IDE/企业级集成深度，生态分层已然清晰。

## 2. 各工具活跃度对比

| 工具 | 活跃 Issue | PR 动态 | Release | 今日最热信号 |
|------|-----------|---------|---------|-------------|
| **Claude Code** | 50 条（精选 10 条） | 5 个 PR，全部 OPEN | 无 | 安全分类器误报集中爆发（#67246 + 今日新增 5 条 ClAudit、2 条降级） |
| **OpenAI Codex** | 精选 10 条 | 8 个 PR，7 个已合并/关闭 | 无 | Windows 行尾问题（#4003）随 PR #37757/#37758 落地关闭 |
| **Gemini CLI** | 精选 10 条（含 P1 级） | 10 个 PR，1 个核心特性（#28738） | v0.56.0-nightly | 子代理 MAX_TURNS 误报成功（#22323）需重点回归 |
| **GitHub Copilot CLI** | 25 条更新 | 0 个 PR | 无 | MCP 连接韧性系列问题（#4421/#4419/#4420）集中报告 |
| **Kimi Code CLI** | 2 条更新 | 1 个 PR | 无 | ACP 流式挂死新 Bug（#2598）；Memory 诉求持续半年（#1283） |
| **OpenCode** | 精选 10 条 + 124 评论 Megathread | 10 个 PR，全部 OPEN | 无 | DeepSeek V4 Flash "假修复"争议 + 剪贴板失效（110👍） |
| **Pi** | 精选 10 条 | 10 个 PR，8 个已合并 | 无（v0.9.6 筹备中） | llama.cpp 模型目录竞态修复闭环（#6922/#6948） |
| **Qwen Code** | 精选 10 条 | 10 个 PR | v0.21.8-nightly | 多会话协调 RFC（#8718）进入设计讨论 |
| **DeepSeek TUI** | 精选 10 条 | 3 个 PR，2 个已合并 | v0.9.6 发布准备中 | "Constitution" 译名争议（#4949）成社区治理事件 |

**活跃度梯队**：Claude Code / Codex / Gemini / Qwen 处于第一梯队（高 Issue 量 + 持续 PR 流）；OpenCode / Pi 处于"快速修复期"（PR 密集但 Issue 积压严重）；Copilot 处于"问题集中暴露但修复滞后"状态（25 条更新、0 PR）；Kimi 与 DeepSeek TUI 规模最小，但社区讨论质量高。

## 3. 共同关注的功能方向

### 3.1 会话持久化与跨端同步（5 个工具）
- **Claude Code**：跨目录恢复会话（#28745，76👍）；**Codex**：网页/桌面/VS Code 三端聊天同步（#5609，63👍）；**Kimi**：跨会话 Memory System（#1283，27 评论）；**Gemini**：Auto Memory 系列 3 个 issue 上榜；**OpenCode**：会话归档持久化 PR（#39358）。
- **共性诉求**：会话不再绑定单一目录/设备，记忆与上下文成为可移植资产。

### 3.2 MCP 协议健壮性（4 个工具）
- **Copilot**：60s 硬编码握手超时无重试（#4421）、临时 deny-all 策略丢弃用户 MCP server（#4419）、并行响应乱序（#4420）、不兼容标准 `server/discover`（#4370）；
- **Qwen**：Streamable HTTP 可选 SSE 流 404 导致整个连接中断（#8784）；
- **Kimi**：Google GenAI 对标准 JSON Schema 元数据报错（PR #739）；
- **Gemini**：MCP SDK 1.23→1.30 批量升级（PR #28746）。
- **共性诉求**：MCP 客户端需支持超时配置、失败重试、协议降级，而非一次性失败永久禁用。

### 3.3 多 Agent 协作与可观测性（5 个工具）
- **Gemini**：PR #28738 实现 "Agent 调用 Agent"（含自我递归）；**Qwen**：多会话协调 RFC（#8718）+ Agent Team 草案 PR（#8804）；**DeepSeek TUI**：统一任务面板整合 shell/子代理/worker（#5270）；**Copilot**：并行 explore 子代理触发 per-model 429（#4416）、Autopilot 子任务冻结（#4306）；**OpenCode**：嵌套子代理权限请求静默挂起（#13715）。
- **共性诉求**：Agent 间可委托、可纠偏、可观测，且并发调度需有配额管理与退避机制。

### 3.4 上下文压缩的透明性（3 个工具）
- **DeepSeek TUI**：1M 模型按 128K 阈值静默压缩（#5239）、/compact 后 token 计数无反馈（#5096）；**Claude Code**：PreToolUse 变更导致 prompt 缓存失效、按写入速率重新计费（#83913）；**Gemini**：Auto Memory 对低信号会话无限重试（#26522）。
- **共性诉求**：压缩策略应与模型实际窗口匹配，且结果可见、可预期。

### 3.5 Windows 平台支持（4 个工具）
- **Codex**：apply_patch 行尾修复闭环，但 Computer Use 大面积 0x80070003（4 个独立报告）；**Qwen**：Windows 安装包 SHA-256 校验失败（#7118）；**Claude Code**：MSIX 崩溃销毁本地数据（#81306）；**OpenCode**：Windows TUI 启动冻结（#41436）。
- **共性诉求**：Windows 已从"二等公民"变为必备支持项，但执行环境、安装器、桌面端的稳定性均落后于 macOS/Linux。

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 | 当前最大短板 |
|------|---------|---------|-------------|-------------|
| **Claude Code** | 生态最完整的专业级 Agent CLI | 深度插件用户、企业开发团队 | 插件/技能生态规范化 + 钩子系统 + 安全分类器 | 安全分类器误报导致模型不可控降级 |
| **OpenAI Codex** | OpenAI 全矩阵的 IDE/桌面入口 | VS Code/Cursor 用户、ChatGPT 订阅者 | 深度 IDE 集成 + Realtime + code-mode gRPC | Windows Computer Use 系统性故障；扩展稳定性 |
| **Gemini CLI** | 多 Agent 自主性探索先锋 | Gemini 重度用户、Agent 实验者 | Agent 间委托/递归 + 零依赖沙箱 + 组件级评估体系 | Agent 调度惰性（不主动用 skills/子代理）；挂起类 Bug |
| **GitHub Copilot CLI** | 企业级 GitHub 原生自动化 | 企业组织、GitHub 重度用户 | 企业策略管理 + 远程会话控制 + MCP 标准化 | MCP 连接韧性差；模型目录与组织配置不同步 |
| **Kimi Code CLI** | 轻量级 ACP/协议友好型 CLI | Moonshot AI 生态、自动化流水线开发者 | 协议级可靠性 + 多 Provider 兼容 | 功能规模小；跨会话记忆缺失 |
| **OpenCode** | 开源高性能终端 Agent（V2 重构中） | 开源社区、性能敏感用户 | 自研 Go 网关订阅 + 渲染性能优化 + V2 架构合并 | 付费订阅可靠性受质疑；老 Issue 久拖未决 |
| **Pi** | 终端体验极致的本地模型 CLI | 终端原教旨主义者、本地模型爱好者 | TUI 细节打磨 + llama.cpp 本地推理 + 扩展机制 | macOS 长会话 CPU/内存占用；渲染器健壮性 |
| **Qwen Code** | 多会话/多 Agent 企业级编排 | Qwen 生态企业用户、多代理工作流团队 | 会话注册表 + 工作流引擎化（/review）+ 内存集成标准 | 跨平台安装体验；MCP 错误隔离 |
| **DeepSeek TUI** | 中文母语体验最佳的多 Provider CLI | 中文开发者、多 API 切换用户 | 本土化（IME/译名）+ "大声失败"哲学 + 多密钥管理 | 压缩反馈缺失；静默假成功伤害信任 |

## 5. 社区热度与成熟度

**成熟稳定型（生态已成型，重心转向质量）**：
- **Claude Code** 活跃度最高（50 Issue、76👍 的会话恢复请求、插件生态规范化 PR），但安全分类器误报已成为社区情绪爆发点——今日新增 7 条相关问题，是典型的"生态先行、治理滞后"。
- **OpenAI Codex** 合并速度最快（8 PR 中 7 个闭环），Windows 行尾这一跨年度问题（2025-09 至 2026-08）的解决显示维护力度；但 63👍 的跨端同步需求长期无排期，社区耐心在被消耗。

**快速迭代型（功能与版本高频演进）**：
- **Gemini CLI** 保持夜间版节奏，P1/P2 级问题响应快，Agent-to-Agent 特性（#28738）标志着其向多 Agent 架构大步迈进，但 8 个 waiting-for-retest 状态说明修复验证链仍需时间。
- **Qwen Code** 同样夜间版高频推进（Qoder 插件扩展），多 Agent 协调、上下文用量 UI 等新特性密集落地，处于"功能领先、稳定性追赶"阶段。
- **OpenCode** 进入 V2 架构合并期，渲染内存 -75.5% 的性能优化（PR #40427）值得期待，但 DeepSeek V4 Flash 网关"标记关闭却仍复现"的处理方式已引发社区信任危机。
- **Pi** 维护者正在做一轮集中的问题清理（8/9 涌现 20+ Bug 大多当天闭环），修复效率高，适合对稳定性敏感的开发者试用。

**小众但高粘性型**：
- **DeepSeek TUI** 社区规模小但讨论质量高（"Constitution" 译名争议体现母语者深度参与），v0.9.6 的"减法式"重构（移除 mailbox freeze）值得关注。
- **Kimi Code CLI** 活跃度最低，但 ACP 流式挂死（#2598）和 Memory 需求（#1283）直击协议可靠性与记忆两大命门，尚处于早期补课阶段。

## 6. 值得关注的趋势信号

**① 安全 Guardrails 正在成为 UX 瓶颈**。Claude Code Fable 5 将正常工程讨论误判为安全内容并强制降级、且不可覆盖——安全机制缺乏透明性、可配置性和逃生通道时，会从保护伞变成生产力杀手。对开发者的启示：评估 CLI 时需考察安全机制是"可干预的辅助"还是"不可绕过的黑盒"。

**② Windows 支持已是及格线而非加分项**。Codex 行尾问题修复获得 74👍 并关闭，同期 Computer Use 故障 4 连报；Qwen、Claude Code 的 Windows 缺陷也均涉及数据安全。对决策者的启示：若团队有 Windows 开发者，需重点验证该平台上的安装、沙箱、桌面端链路，而非仅看 macOS 演示效果。

**③ MCP 生态进入"标准化验收期"**。Copilot 暴露的超时硬编码、协议方法不兼容、临时拒绝策略，与 Qwen 的 404 错误隔离、Kimi 的 JSON Schema 剥离共同说明：MCP 的"能连上"远远不够，**超时可配、失败可重试、错误可隔离**将成为企业选型的新硬指标。

**④ 多 Agent 协作是下一个主战场，但控制力决定成败**。Gemini 允许 Agent 递归调用 Agent，Qwen 提出原生会话协调层，DeepSeek 整合统一任务面板——但 Copilot 的 429 配额击穿、OpenCode 的嵌套权限挂起、Claude Code 的子代理 effort 不可观测，都指向同一个结论：**先解决调度、配额、权限传递的可控性，再谈 Agent 规模扩张**。

**⑤ "大声失败"正在成为社区共识**。DeepSeek TUI 文件编辑静默假成功（#5209）、OpenCode 网关加空格后"标记修复仍复现"、Qwen 隐藏诊断事件污染 transcript（#8823）——三起事件说明，**静默错误（空错误信息、假成功、假关闭）对信任的杀伤力远大于显式报错**。开发者在封装工具链时，应优先保证错误可诊断、可复现、可追溯。

**⑥ 上下文与记忆管理是体验分水岭**。从 DeepSeek 的 128K 静默回落、Claude Code 的缓存失效重新计费，到 Gemini 的 Auto Memory 无限重试，各工具在"长会话"场景下的表现差距明显。对于每天处理大型代码库的开发者，**压缩策略与模型窗口是否匹配、记忆写入是否可见**应作为选型的重要评估项，而非只看 demo 中的短对话效果。

---

*报告基于 GitHub 公开社区数据整理，覆盖 2026-08-10 过去 24 小时动态；具体 Issue/PR 编号可溯源至各仓库。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-10）

## 1. 热门 Skills 排行

以下 PR 按仓库给定排序位列关注度前列，当前均处于 **Open** 状态。

- **#1298 — fix(skill-creator): run_eval.py always reports 0% recall**  
  功能：修复 `run_eval.py` 在评估 Skill 描述时永远报告 0% recall 的问题，使描述优化循环真正可工作；同时修复 Windows 流读取、触发检测和并行 worker。  
  社区关注点：该问题直接影响 skill-creator 的自动优化能力，多个 issue 和 PR 围绕同一问题展开。  
  链接：https://github.com/anthropics/skills/pull/1298

- **#514 — Add document-typography skill**  
  功能：新增文档排版质量检查 Skill，覆盖 AI 生成文档常见的孤词换行、段落孤行、编号错位等问题。  
  社区关注点：文档排版是生成式文档的通用痛点，被视作高价值新 Skill。  
  链接：https://github.com/anthropics/skills/pull/514

- **#538 — fix(pdf): correct case-sensitive file references in SKILL.md**  
  功能：修复 `skills/pdf/SKILL.md` 中 8 处文件名大小写不一致问题，避免在大小写敏感系统（如 Linux）上失效。  
  社区关注点：跨平台可移植性是文档类 Skill 的基础可靠性问题。  
  链接：https://github.com/anthropics/skills/pull/538

- **#486 — Add ODT skill**  
  功能：新增 OpenDocument 格式（ODT/ODS/ODF）创建、模板填充、ODT 转 HTML 的 Skill。  
  社区关注点：开源与 ISO 标准文档格式支持，弥补官方文档技能矩阵空白。  
  链接：https://github.com/anthropics/skills/pull/486

- **#210 — Improve frontend-design skill clarity and actionability**  
  功能：重写 frontend-design Skill，使其指令更清晰、可执行，并确保 Claude 能在单次会话中真正遵循。  
  社区关注点：Skill 指令的质量直接决定行为稳定性，属于“元改进”型 PR。  
  链接：https://github.com/anthropics/skills/pull/210

- **#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace**  
  功能：在 example-skills 中新增两个元 Skill：技能质量分析器（结构/文档/示例/可执行性等五维评估）和技能安全分析器。  
  社区关注点：社区开始关注 Skill 本身的质量与安全治理。  
  链接：https://github.com/anthropics/skills/pull/83

- **#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks**  
  功能：修复 DOCX 技能在添加修订时，`w:id` 与已有书签/评论共享 ID 空间导致文档损坏的问题。  
  社区关注点：OOXML 规范细节导致的文档损坏是低级但致命的 bug，直接影响 word 文档可用性。  
  链接：https://github.com/anthropics/skills/pull/541

- **#539 — fix(skill-creator): warn on unquoted description with YAML special characters**  
  功能：在 `quick_validate.py` 中增加前置校验，提前发现 description 中未加引号的 YAML 特殊字符（如 `:`），避免描述被静默截断。  
  社区关注点：skill-creator 工具链的输入校验，属于提升全社区 Skill 质量的“基础设施”修复。  
  链接：https://github.com/anthropics/skills/pull/539

---

## 2. 社区需求趋势

从 Issues 高频讨论中可提炼出以下方向：

- **安全与信任边界**  
  **#492**（43 评论）批评社区技能在 `anthropic/` 命名空间下分发，冒充官方技能，形成信任边界滥用。这是当前最受关注的安全议题。  
  链接：https://github.com/anthropics/skills/issues/492

- **企业级共享与协作**  
  **#228**（16 评论，👍 8）提出在 Claude.ai 中支持组织级 Skill 共享，而不是手动下载/上传 `.skill` 文件。  
  链接：https://github.com/anthropics/skills/issues/228

- **skill-creator 工具链可靠性**  
  **#556**（12 评论，👍 7）和 **#1169** 报告 `run_eval.py` / `run_loop.py` 对所有查询返回 0% 触发率，导致描述优化循环失效。多个 PR 都在修复此问题，属于社区最集中的“基础设施 bug”。  
  链接：https://github.com/anthropics/skills/issues/556  
  链接：https://github.com/anthropics/skills/issues/1169

- **上下文窗口与资源效率**  
  **#1487** 指出 `claude-api` Skill 单次调用注入约 156k tokens，直接耗尽上下文窗口。**#189**（👍 9）则反映 `document-skills` 与 `example-skills` 安装重复技能，浪费上下文。  
  链接：https://github.com/anthropics/skills/issues/1487  
  链接：https://github.com/anthropics/skills/issues/189

- **记忆与长期状态管理**  
  **#1329** 提出 `compact-memory` Skill，用符号化记法压缩 Agent 的持久记忆和 notes，回应长会话上下文膨胀问题。  
  链接：https://github.com/anthropics/skills/issues/1329

- **集成与扩展**  
  **#29**（Bedrock 支持）、**#16**（将 Skills 暴露为 MCP）、**#1175**（SharePoint Online 场景下的权限与上下文安全）反映出企业级集成需求在增加。  
  链接：https://github.com/anthropics/skills/issues/29  
  链接：https://github.com/anthropics/skills/issues/16  
  链接：https://github.com/anthropics/skills/issues/1175

---

## 3. 高潜力待合并 Skills

以下 PR 均为新增 Skill 且尚未合并，但社区讨论活跃、需求明确，近期有较大落地可能：

- **#723 — Add testing-patterns skill**  
  覆盖测试哲学、单元测试、React 组件测试、端到端测试等完整测试栈，是开发者高频需求方向。  
  链接：https://github.com/anthropics/skills/pull/723

- **#1302 — Add color-expert skill**  
  提供色彩命名系统、色彩空间选择、渐变/色板设计等专业知识，适合设计类工作流。  
  链接：https://github.com/anthropics/skills/pull/1302

- **#525 — Add pyxel skill for retro game development**  
  结合 pyxel-mcp 支持 Python 复古/像素风游戏开发的“写→运行→截图→迭代”闭环。  
  链接：https://github.com/anthropics/skills/pull/525

- **#1367 — feat(skills): add self-audit（v1.3.0）**  
  交付前先做机械文件验证，再按损害严重度进行四维推理审计，是一种通用质量门禁 Skill。  
  链接：https://github.com/anthropics/skills/pull/1367

- **#1479 — Add plan-file-hygiene skill**  
  规划类文件生命周期管理，解决 planning artifacts 持续堆积、无归档清理机制的痛点。  
  链接：https://github.com/anthropics/skills/pull/1479

- **#181 — Add SAP-RPT-1-OSS predictor skill**  
  基于 SAP 开源表格基础模型，在 SAP 业务数据上做预测分析，面向企业级数据场景。  
  链接：https://github.com/anthropics/skills/pull/181

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是让 Skills 更可信、更可靠**：一方面要求官方命名空间下具备安全治理与信任边界；另一方面集中修复 skill-creator 评估工具链中“recall=0%”等致命问题，确保技能可被正确触发、评估和优化。

---

# Claude Code 社区动态日报 — 2026-08-10

## 今日速览

今日无新版本发布，社区讨论焦点集中在**安全分类器（ClAudit / Fable 5）误报与模型自动降级**问题，多个新提交的 Issue 指向同一现象，疑似成为当前最严重的体验痛点。此外，会话管理（跨目录恢复、持久化状态）、工具调用可靠性（Workflow JSON 参数、deny 后仍执行）以及数据安全类 Bug 也在持续发酵。

## 社区热点 Issues

本期共 50 条活跃 Issue，以下为最值得关注的 10 条：

### 1. 允许从不同目录恢复会话
- **Issue #28745** | 👍 76 | 💬 11
- 高赞功能请求：会话与启动目录强绑定，若原目录被删除或重命名则无法恢复。社区关注度极高，是当前最受欢迎的功能需求之一。
- https://github.com/anthropics/claude-code/issues/28745

### 2. UI 语言本地化支持
- **Issue #31413** | 👍 8 | 💬 13
- 请求为 Claude Code UI 增加多语言本地化能力，评论区讨论活跃，反映了非英语用户群体的诉求。
- https://github.com/anthropics/claude-code/issues/31413

### 3. 安全分类器模型切换误报且无法用 /model 覆盖
- **Issue #67246** | 👍 3 | 💬 12
- Fable 5 安全分类器将正常工程讨论误判为"网络安全或生物"内容，并静默切换至 Opus 4.8，且无法通过 /model 指令覆盖。与今日新增的 #85415、#85414 等 Issue 现象一致，疑为系统性问题。
- https://github.com/anthropics/claude-code/issues/67246

### 4. Workflow 工具将 JSON 参数以字符串传递
- **Issue #72248** | 👍 1 | 💬 10
- 带复现步骤的 Bug：Workflow 工具传入对象/数组 args 时，脚本侧收到的是 JSON 编码字符串，与文档承诺的 "verbatim" 契约不符，影响自动化流程开发。
- https://github.com/anthropics/claude-code/issues/72248

### 5. Assistant 生成伪造的对话轮次与角色标记
- **Issue #85286** | 👍 0 | 💬 4
- 严重模型行为 Bug：助手在自身回合结束后继续"扮演"用户/系统/工具通知，生成伪造内容并被记录进对话历史，破坏会话完整性。
- https://github.com/anthropics/claude-code/issues/85286

### 6. PreToolUse/PostToolUse 变更导致 Prompt 缓存失效
- **Issue #83913** | 👍 4 | 💬 5
- 钩子返回的 additionalContext 在历史重建时发生变化，使本应命中的缓存前缀失效、按写入速率重新计费。影响长会话的性能与成本。
- https://github.com/anthropics/claude-code/issues/83913

### 7. Windows 桌面崩溃导致 MSIX 包卡死并丢失本地数据
- **Issue #81306** | 👍 0 | 💬 5
- Windows 上 Claude Desktop 崩溃后 MSIX 包无法恢复，手动删除包时连同本地应用数据（标签分组、崩溃转储）一并销毁，属于数据丢失高危场景。
- https://github.com/anthropics/claude-code/issues/81306

### 8. GitHub 集成写操作全部返回 403
- **Issue #80874** | 👍 0 | 💬 4
- GitHub Integration 连接器 OAuth 授权成功，但所有写操作均报 "403 Resource not accessible by integration"，阻断 PR、Issue 自动化流程。
- https://github.com/anthropics/claude-code/issues/80874

### 9. 后台任务被 30 分钟定时器 SIGTERM
- **Issue #84981** | 👍 0 | 💬 3
- macOS CLI 长会话中，后台 Bash 任务在精确 30 分钟间隔被引擎 SIGTERM（exit 144），日志显示两次 kill 间隔恰好 1800.000 秒，且无 Task 停止通知，疑似存在未文档化的内部 kill 路径。
- https://github.com/anthropics/claude-code/issues/84981

### 10. 跨平台同步失败导致会话/聊天记录消失
- **Issue #81658** | 👍 3 | 💬 4
- Desktop/Web/Android 间同步异常，Cowork 会话与聊天记录消失，用户怀疑为服务端事件，影响多端协作场景。
- https://github.com/anthropics/claude-code/issues/81658

## 重要 PR 进展

过去 24 小时共 5 个 PR 有更新，全部收录如下：

### 1. 更新安全指引中的默认模型引用
- **PR #85409**（OPEN）| 👍 0
- 将 security-guidance 插件 README 与 llm.py 中的模型引用从 Opus 4.7/Sonnet 4.6 更新至 Opus 5/Sonnet 5，使默认审查模型与当前模型版本对齐。
- https://github.com/anthropics/claude-code/pull/85409

### 2. 修复 plugin-dev 对块标量 agent 描述的解析
- **PR #85323**（OPEN）| 👍 0
- 修复 #83803 遗留的 YAML 块标量解析缺陷，validate-agent.sh 现在能正确测量 `description: |` / `>` 多行描述的缩进内容，而不是把标量标记当作完整描述。
- https://github.com/anthropics/claude-code/pull/85323

### 3. 技能命名规范化
- **PR #85243**（OPEN）| 👍 0
- 8 个内置技能声明了含空格且大小写不符合规范的 `name:`，该 PR 将其改为 spec 兼容格式，涉及 hookify、plugin-dev 等技能。
- https://github.com/anthropics/claude-code/pull/85243

### 4. 新增 agent-session-commit 插件
- **PR #17395**（CLOSED）| 👍 0
- 新增插件支持在会话结束时增量迭代 AGENTS.md，可通过 `/session-commit` 手动触发或 Stop 钩子自动触发。PR 已关闭，未合并。
- https://github.com/anthropics/claude-code/pull/17395

### 5. 文档：强制 task 工具与模型元数据
- **PR #9262**（CLOSED）| 👍 0
- 文档性 PR：要求在 commit 命令文档中记录模型参数，并强制 Task 工具用于提交工作流。已关闭，未合并。
- https://github.com/anthropics/claude-code/pull/9262

## 功能需求趋势

从当前活跃 Issues 中可提炼出社区最关注的几个功能方向：

- **会话管理增强**：跨目录恢复会话（#28745）、固定会话防误删（#62104）成为高频诉求，用户希望会话与目录解耦、生命周期可控。
- **UI/国际化**：本地化支持（#31413）呼声上升，反映 Claude Code 用户群体的全球化扩展。
- **安全分类器可配置性**：多起 ClAudit/Fable 5 误报（#67246、#85414、#85415 及 #85375 系列）表明用户需要更透明的安全机制、可覆盖的降级策略，以及更低的误报率。
- **新模型适配**：PR #85409 主动更新模型引用至 Opus 5/Sonnet 5，侧面反映社区的模型升级节奏；同时 Fable 5 行为异常问题也备受关注。
- **插件/技能生态规范化**：技能命名规范（#85243）、块标量解析（#85323）、插件版本解析逃逸（#82712）等修复表明社区对插件开发体验的要求正在提高。

## 开发者关注点

综合所有 Issue，开发者反馈中最集中的痛点为：

1. **安全模型误报与不可控降级**：Fable 5/ClAudit 将正常内容标记为敏感并强制降级到 Opus 4.8，且无法干预。今日新增 5 条 ClAudit 误报 Issue（#85375/#85389–#85392）和 2 条模型降级 Issue（#85414/#85415），可见该问题正集中爆发。
2. **数据丢失风险**：Windows MSIX 包崩溃销毁本地数据（#81306）、桌面版 30 天清理删除唯一副本（#81100）、跨平台同步丢失会话（#81658），数据安全问题密集出现。
3. **会话与记忆一致性**：模型伪造对话轮次（#85286）、压缩后遗忘待办列表（#85417）、持久化状态残留（#85398）等问题威胁长会话的可信度。
4. **工具调用可靠性**：Workflow JSON 参数类型错误（#72248）、被 deny 的工具仍执行（#83760）、GitHub 集成写操作 403（#80874）等破坏自动化流程的 Bug 仍待解决。
5. **可观测性不足**：子代理 effort 级别无法观察（#85416）、MessageDisplay 钩子返回内容不生效（#83957）等问题表明开发者希望更透明地掌握系统内部状态。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-10**

---

## 1. 今日速览

今日社区动态集中在 **Windows 平台问题的集中爆发与修复**：长期困扰 Windows 用户的 `apply_patch` 行尾混用问题（Issue #4003）随着两个相关 PR 的合并而解决；但 **Windows Computer Use 功能出现大面积故障**，多个用户报告 `EnumWindows 0x80070003` 错误。此外，IDE 扩展的稳定性问题（提示词丢失、资源加载失败）也引起广泛讨论。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 已解决：Windows 行尾问题
**#4003 [CLOSED] Patched files have mixed line endings on Windows**
- 作者：chausner | 创建：2025-09-21 | 更新：2026-08-10
- 评论：33 | 👍：74
- 链接：https://github.com/openai/codex/issues/4003
- **重要性**：这是社区最关注的 Windows 问题之一。在 Windows 上运行 `apply_patch` 时，文件行尾被不规范处理，导致 CRLF/LF 混用。今日关闭，与 PR #37757/#37758 的落地直接相关。
- 模型：gpt5（medium）| Codex 0.39.0

---

### 🔥 新发严重问题：扩展无法加载
**#37458 [OPEN] Codex extension fails to start: "The extension couldn't load its resources"**
- 作者：YeNai-ShaoXianChao | 创建：2026-08-07 | 更新：2026-08-10
- 评论：24 | 👍：0
- 链接：https://github.com/openai/codex/issues/37458
- **重要性**：VS Code 中 Codex 面板完全无法启动，环境为 Windows x64 + VSCode 1.132.0 + 扩展 26.803.41515。24 条评论说明影响用户较多，但官方尚未回复。

---

### IDE 扩展：提交的提示词随机消失
**#25928 [OPEN] VS Code/Cursor Codex Extension: Submitted Prompts Randomly Disappear Before Entering Queue**
- 作者：Avnsx | 创建：2026-06-02 | 更新：2026-08-10
- 评论：25 | 👍：17
- 链接：https://github.com/openai/codex/issues/25928
- **重要性**：在 Cursor 中使用 Codex 扩展时，已提交的提示词在进入队列前随机丢失。ChatGPT Pro 20x 订阅用户、Windows 平台。该问题已持续两个多月，严重干扰日常开发工作流。

---

### 性能：切换线程非常慢
**#11011 [OPEN] Switching between threads is very slow**
- 作者：ImanYZ | 创建：2026-02-07 | 更新：2026-08-10
- 评论：22 | 👍：19
- 链接：https://github.com/openai/codex/issues/11011
- **重要性**：Codex App 更新后切换线程出现严重卡顿，Pro 用户反馈。同类问题 #20802 已被标记为回归并关闭，但此条仍开放。

---

### Windows Computer Use 故障（同一个根因的多个报告）

**#37043 [OPEN] Windows Computer Use fails at EnumWindows with 0x80070003**
- 作者：Moonst | 创建：2026-08-05 | 更新：2026-08-10
- 评论：18 | 👍：4
- 链接：https://github.com/openai/codex/issues/37043
- **摘要**：`sky.list_apps()` 和 `sky.list_windows()` 均返回 `EnumWindows failed: 0x80070003`，重启后依旧。

**#37180 [OPEN] Windows Computer Use approval prompt never appears**
- 作者：YTSun | 创建：2026-08-05 | 更新：2026-08-10
- 评论：11 | 👍：6
- 链接：https://github.com/openai/codex/issues/37180
- **摘要**：审批提示不出现，`launch_app` 失败并报 `node_repl exec context not found`。

**#37383 [OPEN] Computer Use on Windows fails during app/window discovery with 0x80070003**
- 作者：dystopia78 | 创建：2026-08-07 | 更新：2026-08-10
- 评论：11 | 👍：4
- 链接：https://github.com/openai/codex/issues/37383
- **摘要**：Windows 11 Pro 25h2 上同样报 `EnumWindows 0x80070003`。

> **分析**：不完全统计已有 4 个 Issue 报告同一错误（#37043、#37383、#37595、#37734），说明该问题在 Windows 用户中具有普遍性，@oai/sky 0.6.2 疑似引入回归。

---

### 功能需求：支持入站 MCP 通知
**#15299 [OPEN] Support inbound MCP notifications routed into an active Codex CLI session**
- 作者：jasny | 创建：2026-03-20 | 更新：2026-08-10
- 评论：15 | 👍：14
- 链接：https://github.com/openai/codex/issues/15299
- **重要性**：开发者期望 Codex CLI 能接收外部渠道通过 MCP 通知推送的消息（如频道事件），目前仅支持 Codex 主动调用 MCP 工具，缺少双向通信能力。

---

### 功能需求：跨平台聊天记录同步
**#5609 [OPEN] Sync my chats, conversation history between ChatGPT website, Codex in VScode**
- 作者：interconnectedMe | 创建：2025-10-24 | 更新：2026-08-10
- 评论：6 | 👍：63
- 链接：https://github.com/openai/codex/issues/5609
- **重要性**：虽然评论不多，但 63 个 👍 显示这是社区高度渴望的功能——用户希望在 ChatGPT 网站、Codex 桌面端与 VS Code 扩展之间无缝同步对话历史。

---

### 连接问题：Realtime V3 被 Cloudflare 拦截
**#35490 [OPEN] Realtime V3 (macOS, 0.146.0-alpha.3.1): default sideband dials wss://chatgpt.com/... and is blocked by Cloudflare → 403**
- 作者：Co-Messi | 创建：2026-07-26 | 更新：2026-08-10
- 评论：6 | 👍：2
- 链接：https://github.com/openai/codex/issues/35490
- **摘要**：macOS 上 Realtime V3 的 sideband 连接被 Cloudflare 挑战拦截，返回 `403 cf-mitigated`。该问题与 #35094 是同一机制的不同表现，说明 Realtime 基础设施存在连通性缺陷。

---

## 4. 重要 PR 进展（全部 8 条）

### ✅ 已合并/关闭

**#37758 [CLOSED] Add a feature flag to preserve apply_patch line endings**
- 作者：copyberry[bot] | 更新：2026-08-10
- 链接：https://github.com/openai/codex/pull/37758
- **内容**：新增 `apply_patch_preserve_line_endings` feature flag（默认关闭），用于在 `apply_patch` 更新文件时保留 CRLF、CR 及混合行尾。该功能同时应用于内置 patch 处理和外部 patch 工具。

**#37757 [CLOSED] Add a line-ending preservation mode to `apply_patch`**
- 作者：copyberry[bot] | 更新：2026-08-10
- 链接：https://github.com/openai/codex/pull/37757
- **内容**：为 `apply_patch` 增加可选的 `PreserveLineEndings` 更新模式，解决长期以来该工具会把文件行尾规范化为 LF 的问题。**直接对应 Issue #4003 的修复。**

**#37747 [CLOSED] Bound Cursor project path resolution**
- 作者：copyberry[bot] | 更新：2026-08-10
- 链接：https://github.com/openai/codex/pull/37747
- **内容**：修复从 Cursor 项目名称解析工作目录时可能递归扫描大目录树的问题。改为探测有限路径候选集，避免性能瓶颈。

**#37745 [CLOSED] Add gRPC TCP transport to the code-mode host**
- 作者：copyberry[bot] | 更新：2026-08-09
- 链接：https://github.com/openai/codex/pull/37745
- **内容**：code-mode host 新增 `grpc://IP:PORT` 监听支持，允许通过 TCP 调用现有 code-mode gRPC 服务。绑定端口 `0` 时向 stdout 打印实际端口，方便调用方发现。

**#37723 [CLOSED] Report I/O subtypes for session config import failures**
- 作者：copyberry[bot] | 更新：2026-08-09
- 链接：https://github.com/openai/codex/pull/37723
- **内容**：在 `failed_to_load_session_config` 错误中附加标准 `std::io::ErrorKind` 分类（如 `invalid_data`、`not_found`、`permission_denied`），便于定位配置导入失败原因。

**#37709 [CLOSED] Keep wrapped composer whitespace with following text**
- 作者：copyberry[bot] | 更新：2026-08-09
- 链接：https://github.com/openai/codex/pull/37709
- **内容**：修复 TUI 编辑器中超长空白字符被单独折行、与后续文字脱离的问题。采用 grapheme-safe 换行策略，改进中文等 Unicode 文本的显示。

**#37654 [CLOSED] Advertise environment config read support**
- 作者：copyberry[bot] | 更新：2026-08-09
- 链接：https://github.com/openai/codex/pull/37654
- **内容**：exec-server 环境能力新增 `environmentConfigRead`，本地执行器默认开启。旧 executor 反序列化时默认置为 `false`，兼容旧协议。

### 📌 开启中

**#31817 [OPEN] Update models.json**
- 作者：github-actions[bot] | 更新：2026-08-10
- 链接：https://github.com/openai/codex/pull/31817
- **内容**：自动化模型元数据更新 PR，仍在持续维护中。

---

## 5. 功能需求趋势

从当前 Issues 中可以提炼出社区最关注的五大方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **Windows 平台支持** | #4003、#37043、#37180、#37383、#37458 | 🔥🔥🔥🔥🔥 |
| **IDE 集成与稳定性** | #25928、#37458、#5609 | 🔥🔥🔥🔥 |
| **MCP 双向通信** | #15299 | 🔥🔥🔥 |
| **性能优化（App 与 TUI）** | #11011、#20802 | 🔥🔥🔥 |
| **企业级配置（model_aliases）** | #21594 | 🔥🔥 |

值得注意的 **新兴需求**：
- **MultiAgentV2 增强**：#33885 期望子线程可以接受父线程的纠偏和引导；#32353 发现队列消息会钉住驻留槽位。
- **聊天记录跨端同步**（#5609，👍 63）长期高居功能需求榜首，官方尚未明确排期。
- **外部进程通知接入**（#15299）显示社区希望将 Codex 集成到更多自动化工作流中。

---

## 6. 开发者关注点

### 📌 Windows 平台用户“痛苦指数”最高
- **行尾问题刚修复**：`apply_patch` 在 Windows 上会破坏文件行尾，该问题横跨 2025-09 至 2026-08，社区讨论 33 条、74 👍。
- **Computer Use 在 Windows 上完全不可用**：`EnumWindows 0x80070003` 错误（至少 4 个独立报告 #37043、#37383、#37595、#37734）和审批提示缺失（#37180）表明该功能在 Windows 上存在系统性缺陷。
- **沙箱与终端问题**：#26803（CreateProcessAsUserW 失败）、#37104（PTY 静默失败）、#37599（弹出可见终端窗口）——Windows 上的执行环境稳定性是当前最大短板。

### 📌 IDE 扩展稳定性威胁日常开发
- 提示词在进入队列前随机消失（#25928，持续 2+ 个月）
- 扩展资源加载失败导致面板无法启动（#37458）
- 开发者希望扩展与 ChatGPT 网站/桌面端共享聊天记录（#5609）

### 📌 高频反馈模式
1. **性能回归反复出现**：线程切换、TUI 滚动、WSL 启动——多个版本更新后出现性能倒退，社区对“更新后变慢”的容忍度降低。
2. **错误信息不够可诊断**：`0x80070003`、`node_repl exec context not found` 等底层错误直接暴露给用户，缺乏可操作性的修复提示。
3. **子代理（MultiAgentV2）的控制能力不足**：用户无法对子代理中途纠偏，队列消息还会造成资源泄漏——自动化编排场景的成熟度仍需提升。

---

*本日报由 AI 自动整理，数据来源：[github.com/openai/codex](https://github.com/openai/codex)，覆盖 2026-08-10 过去 24 小时动态。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-10

## 今日速览
今日发布 v0.56.0-nightly.20260810 夜间版本。社区讨论焦点集中在 Agent 稳定性与自主性上：子代理在达到 MAX_TURNS 后被误报为成功（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）、通用代理无限挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)），以及“零依赖 OS 沙箱”增强提案（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）引发热议。PR 方面，“允许 Agent 调用 Agent”功能（[#28738](https://github.com/google-gemini/gemini-cli/pull/28738)）是今日最值得关注的新特性。

## 版本发布
**v0.56.0-nightly.20260810.gcf22ac7e8** — 常规自动化夜间版本，无显著更新说明。  
完整变更日志：[GitHub Compare](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260809.gcf22ac7e8...v0.56.0-nightly.20260810.gcf22ac7e8)

---

## 社区热点 Issues（Top 10）

### 1. 子代理 MAX_TURNS 后被误报为成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 12 条评论

`codebase_investigator` 子代理在达到最大轮次限制后，仍报告 `status: "success"` 且 Termination Reason 为 `"GOAL"`，掩盖了实际中断。这是 Agent 可信度方面的关键缺陷，直接影响用户对执行结果的信任。

### 2. 通用代理无限挂起
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 条评论 | 👍 8

处理简单任务（如创建文件夹）时，一旦 delegated 给 generalist agent 就会永久挂起，用户最多等待 1 小时后只能手动取消。当前唯一可用的绕过方案是显式禁止模型使用子代理。

### 3. 零依赖 OS 沙箱与执行后意图路由
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 8 条评论

提案主张利用 Gemini 3 模型原生 bash 能力，通过零依赖 OS 沙箱机制让模型自由使用 `grep`、`sed`、`awk` 等 POSIX 工具，同时在执行后增加意图路由以保障安全性。反映社区对“释放模型原生能力”与“安全边界”双重诉求的平衡探讨。

### 4. 组件级评估体系构建
[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | P1 | 7 条评论

当前已有 76 个行为评估测试、覆盖 6 个 Gemini 模型，但缺少组件级别的细粒度验证。该 EPIC 旨在建立更健壮的评估基础设施，是保障 CLI 质量可持续性的重要议题。

### 5. AST 感知工具的影响评估
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 条评论

探讨是否值得引入 AST 感知的文件读取、搜索和代码库映射能力。预期收益包括精确定位方法边界、减少单次工具调用的 token 消耗、降低多轮读取的对齐开销。与调研类 issue [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 联动。

### 6. Gemini 不会主动使用 skills 和子代理
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 6 条评论

用户反映 Gemini CLI 在拥有高度相关的自定义 skills（如 gradle、git）时，仍不会主动调用，需要显式指示才触发。这一“调度惰性”问题直指 Agent 智能化的核心短板。

### 7. Auto Memory 对低信号会话无限重试
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | P2 | 5 条评论

内存提取代理未通过 `read_file` 读取的会话会永远处于未处理状态，导致低信号会话被反复捞取。建议将低信号会话直接标记为已处理或进入隔离区，而非无限重试。

### 8. Shell 命令执行完成后卡在“等待输入”
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | P1 | 4 条评论 | 👍 3

非常简单且不可能交互的 CLI 命令执行完毕后，仍显示“Awaiting user input”并挂起。该问题对自动化流水线是致命级别的稳定性缺陷。

### 9. Auto Memory 需确定性的敏感内容编辑
[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | P2 | 4 条评论

Auto Memory 将本地转录发送给提取模型时，敏感内容已经进入模型上下文之后才进行提示词层面的编辑。安全问题：需在发送前实现确定性编辑（redaction），并降低日志对既有技能内容的输出。

### 10. Browser Agent 韧性增强：自动会话接管与锁恢复
[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 | 4 条评论

`BrowserManager.ts` 目前对锁定的浏览器配置采取“快速失败”，在 `sessionMode: 'persistent'` 下遇到僵尸进程时会直接放弃。建议实现自动会话接管和锁文件的恢复机制。

---

## 重要 PR 进展（Top 10）

### 1. 修复 ACP 会话恢复时污染会话文件
[#28744](https://github.com/google-gemini/gemini-cli/pull/28744) | P1 | OPEN

`loadSession` 在 `resumeChat()` 之前调用 `initialize()`，会创建一个无恢复数据的新会话，导致会话文件被污染。此 PR 调整了调用顺序，修复 #28693。

### 2. 允许 Agent 调用 Agent
[#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | P2 | Size: L | OPEN | help wanted

**核心新特性**：通过 `tools:` frontmatter 允许子代理委托给其他子代理，甚至支持自我递归。修复 #22092，是 Gemini CLI 迈向多 Agent 协作架构的重要一步。

### 3. 保留 resolved model config 中的 systemInstruction 和 tools
[#28743](https://github.com/google-gemini/gemini-cli/pull/28743) | OPEN

修复 `sendMessageStream()` 中，模型级配置中的 `systemInstruction` 和 `tools` 被 chat 级配置覆盖的问题，确保模型特定配置在流式发送时生效。

### 4. 修复 caretaker-agent 技能命名不合规
[#28742](https://github.com/google-gemini/gemini-cli/pull/28742) | OPEN

将 `triage-worker` 下两个技能名称从 `code_explorer` 改为 `code-explorer`、`spec_generator` 改为 `spec-generator`，以符合 Agent Skills 规范对 `name` 字段的约束。

### 5. 策略引擎多项 Bug 修复
[#26540](https://github.com/google-gemini/gemini-cli/pull/26540) | P1 | OPEN

修复策略引擎中影响工具审批的关键问题：参数匹配正则的空字节崩溃、审批无法持久化、以及 YOLO / AUTO_EDIT 模式下仍出现多余审批提示。

### 6. npm 依赖组 74 项批量升级
[#28746](https://github.com/google-gemini/gemini-cli/pull/28746) | Size: XL | CLOSED

大规模依赖更新：simple-git 3.28→3.36、@modelcontextprotocol/sdk 1.23→1.30 等。覆盖面广，建议关注潜在回归风险。

### 7. puppeteer-core 24 → 25 主版本升级
[#28752](https://github.com/google-gemini/gemini-cli/pull/28752) | CLOSED

浏览器代理核心依赖跨主版本升级，可能带来浏览器自动化行为的改进，但需验证与现有 browser_agent 的兼容性。

### 8. @google/genai 1.30 → 2.15 升级
[#28749](https://github.com/google-gemini/gemini-cli/pull/28749) | CLOSED

Google 官方 GenAI SDK 跨主版本升级，可能引入 API 行为变更，对 Gemini CLI 的模型调用链路有一定影响，需回归测试。

### 9. google-auth-library 10 → 11 主版本升级
[#28751](https://github.com/google-gemini/gemini-cli/pull/28751) | CLOSED

认证库主版本升级，需确认与现有 OAuth / API key 流程的兼容性。

### 10. Actions 依赖组批量更新
[#28450](https://github.com/google-gemini/gemini-cli/pull/28450) | OPEN

`lycheeverse/lychee-action`、`preactjs/compressed-size-action`、`google-github-actions/run-gemini-cli` 三个 GitHub Actions 依赖更新，属于 CI 基础设施维护。

---

## 功能需求趋势

从今日活跃 Issues 中可提炼出社区最关注的四大方向：

1. **Agent 自主性与智能调度**  
   核心诉求：模型不主动使用 skills / 子代理（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）、工具超过 128 个触发 400 错误（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）、以及 Agent 对破坏性操作缺乏主动判别能力（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）。

2. **安全与沙箱**  
   一边是零依赖 OS 沙箱提案（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)），希望让模型发挥 bash 原生能力；另一边是 Auto Memory 的敏感内容编辑问题（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)），安全边界成为社区焦点议题。

3. **Agent 可观测性与评估**  
   从子代理轨迹可通过 `/chat share` 分享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）、bug 报告需包含子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)），到组件级评估体系（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)），社区要求“看得见、可衡量”。

4. **内存系统迭代**  
   Auto Memory 系列问题（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)）连续上榜，围绕低信号会话处理、无效补丁隔离、整体质量改进，说明记忆功能正处于活跃迭代期。

---

## 开发者关注点

- **稳定性痛点最受共鸣**：通用代理挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）、shell 执行后卡死（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）、Wayland 下浏览器代理失败（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）——直接影响日常开发体验，获得最多 👍 和评论。

- **权限边界引发担忧**：[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) 指出 v0.33.0 后子代理可在用户配置为禁用的情况下被调用；[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 要求 Agent 在 `git reset`、`--force` 等危险操作前主动提示更安全的替代方案。

- **终端体验细节被高频放大**：resize 时的闪烁与性能（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）、外部编辑器退出后画面损坏（[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)）、`\n` 转义行为异常（[#22466](https://github.com/google-gemini/gemini-cli/issues/22466)）。

- **修复验证待社区反馈**：多个 issue 处于 `status/need-retesting` 状态（如 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)），维护者已提交修复，升级 nightly 版本的开发者可重点回归验证这些历史问题。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-10）

## 1. 今日速览

过去 24 小时没有新 Release 或 PR 更新，但 Issues 区非常活跃，共 25 条更新。最集中的信号是 **MCP 连接韧性**问题：60 秒硬编码握手超时、临时空策略丢弃用户 MCP server、并行工具调用响应乱序等被集中报告。与此同时，**企业模型可用性**与 **BYOK 自定义 provider** 也出现多例回归，社区对认证与模型目录同步的抱怨明显增加。

## 2. 版本发布

无。

## 3. 社区热点 Issues

### 1. [#4422: All Claude models disabled under CLI model selection](https://github.com/github/copilot-cli/issues/4422)  
**状态：Open · 评论 0**  
个人 Enterprise 账号昨天还能正常使用 Claude Sonnet 5 / 4.8，今天全部提示 “This model is disabled by your organization”。回滚 CLI 版本无效，疑似服务端策略或模型目录同步出现问题。同类问题还有 [#4390](https://github.com/github/copilot-cli/issues/4390)：组织已启用的 Claude/Kimi 模型在目录中直接缺失。

### 2. [#4421: MCP initialize handshake 固定 60s 超时且无重试](https://github.com/github/copilot-cli/issues/4421)  
**状态：Open · 评论 0**  
MCP 初始化握手使用硬编码 60,000ms 预算，超时后仅记录 `Recorded failure for server <name>`，整个会话内不再重试。报告称 npx 启动的 stdio 服务器约有 29% 的会话初始化失败，无法配置、无退避、无恢复。对重度 MCP 用户是阻断性问题。

### 3. [#4419: Managed settings 临时 fail-closed 空白名单丢弃用户 MCP server](https://github.com/github/copilot-cli/issues/4419)  
**状态：Open · 评论 0**  
CLI 解析托管设置期间会安装 `managedAllowedMcpServerLists: [[]]` 的“拒绝一切”策略，任何恰好在该窗口注册的用户 MCP server 都会被永久拒绝。报告提到在无托管策略的普通账号下也可通过桌面 App 复现。

### 4. [#4420: 并行工具调用响应顺序非确定，agent 上下文错乱](https://github.com/github/copilot-cli/issues/4420)  
**状态：Open · 评论 0**  
Harness 无法可靠关联并行工具请求与响应，可能返回没有原始请求的响应、或响应顺序与调用顺序不一致。这会导致 agent 误解工具结果，直接影响并行执行可靠性。

### 5. [#4416: 并行 explore 子代理触发 per-model 429 限流](https://github.com/github/copilot-cli/issues/4416)  
**状态：Open · 评论 0**  
`explore` 子代理默认全部使用同一轻量模型（当前 claude-haiku-4.5），并行扇出时所有请求集中在一个模型配额上，触发 429 后既不退避也不自动切换模型，即使模型配置中标注了 `eligibleForAutoSwitch`。

### 6. [#4306: Autopilot 模式下子任务冻结无响应](https://github.com/github/copilot-cli/issues/4306)  
**状态：Open · 更新于 08-10 · 评论 2 · 👍 2**  
使用 `/fleet` 循环执行 implement / converge agent 时，会话中途出现 `●` 冻结，子任务不再继续推进。该问题持续至今仍未定位，社区缺少有效 workaround。

### 7. [#4370: MCP server/discover 返回 -32602 时初始化失败](https://github.com/github/copilot-cli/issues/4370)  
**状态：Open · 评论 2**  
CLI 在 MCP 初始化前发送 `server/discover` 请求，而 FastMCP 并未实现该标准方法，返回 `-32602 Invalid request parameters`。Copilot CLI 将其视为致命错误，导致无法连接基于 FastMCP 的服务器。属于协议兼容性问题。

### 8. [#2751: `/remote` 在 GitHub 组织仓库中报 “could not resolve repository”](https://github.com/github/copilot-cli/issues/2751)  
**状态：Open · 评论 8 · 👍 13**  
在 GitHub Organization 仓库内运行 `/remote` 时，CLI 无法解析仓库归属，远程会话直接关闭。企业用户受影响较大，该 issue 存在时间较长，社区关注度一直在累积。

### 9. [#1857: 支持取消或删除已排队的消息](https://github.com/github/copilot-cli/issues/1857)  
**状态：Open · 评论 9 · 👍 26**  
社区高票功能需求：使用 `Ctrl+Q` / `Ctrl+Enter` 排队的消息在 agent 忙碌或 `/compact` 期间无法取消。用户希望能在消息执行前撤回，避免误发送造成不可控操作。

### 10. [#4414: BYOK 自定义 provider 在请求到达前本地返回 403](https://github.com/github/copilot-cli/issues/4414)  
**状态：Open · 评论 0**  
在 Copilot App 中配置自定义 OpenAI / Anthropic-compatible provider 后，所有推理请求都会立即得到 403 `Authorization error, you may need to run /login`，但请求从未真正到达配置的 provider。`/login` 也无法解决，BYOK 功能基本不可用。

## 4. 重要 PR 进展

无。统计窗口内（2026-08-09 至 2026-08-10）没有更新或被合并的 Pull Request。

## 5. 功能需求趋势

- **MCP 标准化与连接韧性**：社区希望 CLI 更严格地遵循 MCP 协议，包括支持 `server/discover`、OAuth 3LO URL elicitation（[#4370](https://github.com/github/copilot-cli/issues/4370)、[#4371](https://github.com/github/copilot-cli/issues/4371)）；同时要求握手超时可配置、失败可重试，而不是一次失败后永久禁用（[#4421](https://github.com/github/copilot-cli/issues/4421)）。
- **模型可用性与自定义模型**：企业用户要求 CLI 模型目录与组织后台配置保持一致，避免“已启用但无法使用”（[#4390](https://github.com/github/copilot-cli/issues/4390)、[#4422](https://github.com/github/copilot-cli/issues/4422)）；BYOK 用户希望自定义 provider 流量真正能到达服务端（[#4414](https://github.com/github/copilot-cli/issues/4414)）。
- **远程会话扩展到非 GitHub 仓库**：`/remote` 不应只支持 GitHub，应覆盖 GitLab、Bitbucket 等平台（[#2922](https://github.com/github/copilot-cli/issues/2922)）；当 `cli_remote_control_enabled` 为 false 时需要有明确 UI 提示（[#4409](https://github.com/github/copilot-cli/issues/4409)）。
- **会话交互控制**：排队消息可取消（[#1857](https://github.com/github/copilot-cli/issues/1857)）、kickoff prompt 不应丢失（[#4423](https://github.com/github/copilot-cli/issues/4423)）、`/agent` 不应把 `AGENTS.md` 误解析为自定义 agent（[#4410](https://github.com/github/copilot-cli/issues/4410)）。
- **成本与性能优化**：部分用户提出为 Anthropic 请求增加 `cache_control` breakpoints，复用 system prompt 与工具定义，减少重复计费（[#4256](https://github.com/github/copilot-cli/issues/4256)）。
- **本地化与可访问性**：有用户要求增加中文（zh-CN）UI 界面，推动 CLI 与桌面端国际化（[#4407](https://github.com/github/copilot-cli/issues/4407)）。

## 6. 开发者关注点

- **MCP 连接失败是当前最大痛点**：60 秒硬超时、无重试、临时 deny-all 策略、不兼容标准 MCP 方法，多个问题叠加导致 MCP 生态接入成本很高。
- **模型认证与授权回归频繁**：多个 issue 出现“昨天可用、今天不可用”的现象，且错误提示不透明，无论是企业 Claude 模型、组织目录缺失还是 BYOK 本地 403，用户都难以自行排查。
- **并行执行可靠性不足**：并行工具调用响应乱序、explore 子代理集中触发 429、autopilot 子任务冻结，说明 CLI 在 agent 并发管理上仍需加强限流、退避和请求关联能力。
- **远程会话体验不透明**：`/remote` 在组织仓库失败、桌面端远程控制开关无实际效果、GitHub Mobile 返回裸 HTTP 422，用户无法从 UI 获知真实原因。
- **资源占用异常**：有开发者反馈 CLI 在等待 sleep 时仍占用单个 CPU 100%（[#4415](https://github.com/github/copilot-cli/issues/4415)），提示终端进程的事件循环或空闲调度需要优化。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI 社区动态日报（2026-08-10）

> 数据来源：github.com/MoonshotAI/kimi-cli | 过去 24 小时更新量较少，以下为全部有效动态。

### 1. 今日速览
过去 24 小时无新版本发布，社区更新集中在 3 项：一项 ACP 模式流式挂死的严重 Bug（#2598）被提交并获开发者关注；长期需求的 Memory System 提案（#1283）再次更新，说明持久化上下文仍是热门方向；另有一项针对 Google GenAI 与 MCP 工具兼容性的修复 PR（#739）更新。整体来看，流式可靠性与跨会话记忆是当前社区最关心的两类问题。

### 2. 版本发布
无新版本发布。

### 3. 社区热点 Issues
> 过去 24 小时内共有 2 个 Issue 更新，以下全部列出。

- **#2598 [OPEN] ACP/print 流式响应静默挂死：无空闲超时、被顶替轮 partial 不落 wire（0.31.1 只覆盖 Esc 场景）**
  - 作者：ai-agent-workbench | 创建：2026-08-09 | 更新：2026-08-09 | 评论：0 | 👍：0
  - 链接：[MoonshotAI/kimi-cli Issue #2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)
  - **为什么重要**：这是一个新提交的高影响 Bug。在 ACP 模式下，流式答复的 `[DONE]`/finish 帧可能永远不到达，且无空闲超时配置；当用户发送下一条消息时，上一轮挂死被静默顶替，已流式的内容也不会写入 `wire.jsonl`。这直接影响自动化工作流的可观测性与可靠性，属于协议层面的严重缺陷。
  - **社区反应**：目前尚无评论，但问题描述非常细致，包含复现路径与配置文档确认，预计会迅速获得维护者关注。

- **#1283 [OPEN] [enhancement] Feature Request: Memory System - Persistent context across sessions**
  - 作者：CatKang | 创建：2026-02-27 | 更新：2026-08-09 | 评论：27 | 👍：0
  - 链接：[MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
  - **为什么重要**：这是社区需求度最高的功能请求之一（27 条评论）。希望 Kimi Code CLI 支持自动记忆（AI 管理的笔记）和手动记忆（用户自定义指令），跨 session 保留项目模式与用户偏好，类似于 Claude Code 的 Memory 功能。该 Issue 在创建近半年后仍保持更新，说明需求长期未满足且用户持续关注。
  - **社区反应**：讨论热度高，评论中大概率有具体使用场景与实现建议，是衡量产品路线图的重要参考。

### 4. 重要 PR 进展
> 过去 24 小时内共有 1 个 PR 更新。

- **#739 [OPEN] fix(kosong): strip JSON Schema metadata from Google GenAI tool parameters**
  - 作者：xiaoju111a | 创建：2026-01-28 | 更新：2026-08-09 | 评论：undefined | 👍：0
  - 链接：[MoonshotAI/kimi-cli PR #739](https://github.com/MoonshotAI/kimi-cli/pull/739)
  - **功能/修复内容**：修复 Google GenAI provider 与 MCP 工具（如 Exa MCP）的兼容性问题。当 MCP 工具参数中包含标准 JSON Schema metadata 字段时，Google GenAI 会报校验错误，此 PR 会剥离这些元数据。
  - **为什么重要**：该 PR 解决了多 provider 环境下 MCP 工具链的互操作性问题，对使用 Google 模型 + MCP 生态的开发者有直接帮助。PR 在创建 6 个月后仍有更新，可能正在等待 review 或经过多轮修改。

### 5. 功能需求趋势
基于过去 24 小时更新的 Issues，可提炼出以下社区关注方向：

- **记忆与持久化上下文**（#1283）：跨 session 的记忆系统是明确的高频需求，涉及自动笔记、用户偏好保存、项目模式学习等。这是 CLI 从“一次性会话工具”走向“长期协作代理”的关键能力。
- **流式协议稳定性**（#2598）：在 ACP/print 模式下，流式响应需要可靠的空闲超时和完整的 wire log 记录。社区对协议细节（如终止帧、partial 落盘）的要求说明已有用户将 kimi-cli 接入自动化流水线，对稳定性非常敏感。
- **多 Provider 兼容性**（PR #739 反映）：随着 MCP 工具标准化，Google GenAI 等 provider 对 JSON Schema 的兼容性成为开发者集成痛点，侧面体现工具链生态整合需求在增长。

### 6. 开发者关注点
- **缺少流式空闲超时机制**：Issue #2598 明确指出官方 `config.toml` 没有相关配置项，导致挂死无法自动恢复，开发者需要外部 watchdog 或人工干预。
- **数据完整性/可审计性**：被顶替的轮次不写入 `wire.jsonl`，意味着日志链路断裂，调试与合规场景不可接受。
- **跨会话记忆缺失**：社区持续呼吁 Memory System，开发者需要在每次会话重复告知项目背景，效率受损。
- **MCP 工具元数据兼容**：Google GenAI 对标准 JSON Schema 的严格校验阻碍了 MCP 工具复用，开发者期待 provider 层做适配或提供配置开关。

---
*以上日报基于 2026-08-10 公开数据整理，如需完整列表请访问 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-08-10** | 数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 今日速览

今日无新版本发布，社区讨论重心集中在两件事：**DeepSeek V4 Flash 在 OpenCode Go 网关上的持续故障**（多个 issue 标记关闭后用户验证仍复现），以及**剪贴板复制失效与内存问题**两大高热度老 issue 的持续发酵。PR 方面，多项 session 修复与渲染性能优化进入活跃状态，`merge dev into v2` 工作也在推进中。

---

## 版本发布

过去 24 小时无新 Release。

---

## 社区热点 Issues

精选 10 个最值得关注的讨论（含相关合并项）。

### 1. Memory Megathread：内存问题集中追踪
**#20695** | 🤖 评论 124 | 👍 96 | 状态：OPEN  
[查看 Issue](https://github.com/anomalyco/opencode/issues/20695)

团队将所有分散的内存问题报告集中到一个 thread 中统一处理。维护者特别提醒：**不要用 LLM 跑解决方案，它总是错的**（原文强调），当前最需要的是收集 heap snapshots。这是社区内存问题的主战场，反映了 opencode 在长会话/大数据量场景下的内存占用仍是核心痛点。

### 2. 复制到剪贴板功能失效
**#4283** | 🤖 评论 122 | 👍 110 | 状态：OPEN  
[查看 Issue](https://github.com/anomalyco/opencode/issues/4283)

自 2025 年 11 月创建至今仍为 OPEN，是社区呼声最高、最持久未解决的功能性问题之一。用户报告在终端中选中响应文本后无法复制到剪贴板，涉及 opencode 1.0.62 版本。同类问题在 VS Code 扩展上也存在（见 #39588），说明复制粘贴功能在多个前端层面存在系统性缺陷。

### 3. 原生模型回退/故障转移支持
**#7602** | 🤖 评论 29 | 👍 107 | 状态：OPEN  
[查看 Issue](https://github.com/anomalyco/opencode/issues/7602)

高赞功能需求：目前 OpenCode 仅支持同模型 ID 下的 provider 回退，无法定义**跨模型**的故障转移策略（如"模型 A 报错或限流 → 自动切换到模型 B"）。对长时间运行的 agent 任务而言，缺乏该能力意味着一次上游故障就可能导致任务中断。

### 4. DeepSeek V4 Flash 在 OpenCode Go 上全面故障（合并追踪）
**#39838 / #41300 / #41306 / #41314 / #41322** | 状态：多数标为 CLOSED 但问题复现  
[#39838 查看](https://github.com/anomalyco/opencode/issues/39838) · [#41306 查看](https://github.com/anomalyco/opencode/issues/41306)

这是今日最扑朔迷离的一组问题。7 月 31 日起 DeepSeek V4 Flash 开始报错，8 月 8 日多个用户独立确认根因：**Go 网关在转发请求时给模型名注入了一个前导空格**（`" deepseek-v4-flash"`），导致上游返回 HTTP 400。Issue #41211 曾声称修复，但 #41306 在 8 月 9 日实测验证问题依然存在。多个 issue 被标记为 CLOSED 却没有真正解决，用户情绪明显受挫。

### 5. OpenCode Go 订阅会话全部 "terminated"
**#30221** | 🤖 评论 9 | 👍 4 | 状态：OPEN  
[查看 Issue](https://github.com/anomalyco/opencode/issues/30221)

所有 Go 订阅下的活跃会话都会以 `UnknownError: "terminated"` 结束，与模型选择和用户活动无关。直接使用 Deepseek 或 Z.AI 的 API 端点无此问题，问题集中在 Go 订阅的网关层。对依赖 Go 计划的重度用户影响严重。

### 6. 能否禁用流式模式？
**#785** | 🤖 评论 29 | 👍 38 | 状态：OPEN  
[查看 Issue](https://github.com/anomalyco/opencode/issues/785)

创建于 2025 年 7 月的长期问题。某些代理 provider（如 Credal OpenAI Proxy）不支持流式响应，导致 `AI_APICallError: Streaming is not supported`。用户需要 OpenCode 提供关闭流式模式的开关，以兼容更多企业级代理服务。

### 7. 嵌套子代理的权限请求静默挂起
**#13715** | 🤖 评论 11 | 👍 24 | 状态：OPEN  
[查看 Issue](https://github.com/anomalyco/opencode/issues/13715)

子代理再生成子代理时，若触发 bash 等权限请求，该请求会发出但**永远不会渲染到 TUI 中**，会话无限期挂起。根因定位在 `src/cli/cmd/tui/routes/session/index.tsx` 的 `children()` memo 逻辑。这是一个阻塞性 bug，影响 agent 递归调用场景。

### 8. bash 权限绕过漏洞：`--` 双连字符
**#39931** | 🤖 评论 2 | 👍 0（安全敏感）| 状态：OPEN  
[查看 Issue](https://github.com/anomalyco/opencode/issues/39931)

包含 `--` 的 bash 命令可以绕过 `"bash": "ask"` 权限设置。例如用户配置了 bash 需要询问，但命令中含 `--` 时会被直接执行。这是一个**安全权限逃逸漏洞**，影响版本 1.18.10。一旦被恶意 prompt 利用，可能带来命令执行风险，值得优先关注。

### 9. Xcode 27 Beta 2 中 ACP 代理忽略模型配置
**#34743** | 🤖 评论 15 | 状态：OPEN  
[查看 Issue](https://github.com/anomalyco/opencode/issues/34743)

在 macOS 27 beta + Xcode 27 beta 2 环境，将 opencode 配置为自定义 ACP agent 后，Xcode 发出的请求始终使用默认模型 `big-pickle`，完全忽略 `opencode.json` 中的模型指定（无论 LMStudio 还是 Ollama）。这是 IDE 集成方向的重要反馈——Xcode 的 ACP 通道未能正确传递 opencode 的模型配置。

### 10. Go 订阅支付成功但订阅未激活
**#41430** | 🤖 评论 3 | 状态：CLOSED  
[查看 Issue](https://github.com/anomalyco/opencode/issues/41430)

用户支付 $10.00 订阅 OpenCode Go 后，工作区仪表盘仍显示"Subscribe to Go"。支付记录出现在通用账单历史中，但未与 Go 订阅状态同步。付费体验相关的问题，直接影响用户信任和转化。

---

## 重要 PR 进展

精选 10 个活跃或刚合并的 PR。

### 1. fix(session): 为不支持工具调用的模型省略工具定义
**#41463** | 创建 2026-08-10 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/41463)

从 provider 配置中读取 `capabilities.toolcall`，在构建请求时据此过滤工具列表。此前该字段从未被读取，导致所有工具（包括模型不支持的）都会被声明，引发上游报错。对只支持纯文本的模型（如某些 embedding/轻量模型）有实际意义。

### 2. [贡献者] chore: merge dev into v2
**#41460** | 创建 2026-08-10 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/41460)

由 `opencode-agent[bot]` 发起的自动化合并，将 `dev` 分支的可移植变更同步到 V2 架构，同时保留 App/Desktop/Core/TUI/SDK 的 V2 特性（RTL 本地化、消息/会话排序、原生导出等）。V2 稳步演进中。

### 3. fix(session): 边沿触发的构建切换提醒
**#38067** | 创建 2026-07-21 | 更新 2026-08-10 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/38067)

修复 `SessionReminders.apply` 在判断"从 plan 切换到 build 模式"时扫描整个会话历史的问题，改为边沿触发。旧逻辑在 long-running agent 中会产生大量误判和性能开销。

### 4. fix(session): 限制 prompt 循环中的连续溢出压缩周期
**#37584** | 创建 2026-07-18 | 更新 2026-08-10 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/37584)

当 provider 因上下文溢出（context overflow）拒绝请求时，SessionPrompt 运行循环现在会限制连续压缩重试次数，避免死循环。对超长上下文的稳定运行很重要，closes #27924。

### 5. [beta] 实验性渲染性能优化
**#40427** | 创建 2026-08-04 | 更新 2026-08-10 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/40427)

一组实验性的渲染器性能优化，基于不可变数据库快照和固定 24 小时语料窗口测量：初始渲染内存占用从 7.45 MB 降至 1.82 MB（**-75.5%**）。该 PR 标注为 beta，说明团队正在积极解决渲染性能瓶颈，与 #20695 内存问题形成呼应。

### 6. feat(app): 新增 animated BusyWave 加载指示器
**#41350** | 创建 2026-08-09 | 更新 2026-08-10 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/41350)

用 TUI 风格的"忙碌波浪"动画替换掉 App 中闪烁的 "Thinking" 标签，并在开启 "show thinking" 时保持可见。纯 UI 改进，但反映了桌面端体验打磨的推进。

### 7. feat(session): 支持持久化会话归档
**#39358** | 创建 2026-07-28 | 更新 2026-08-10 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/39358)

为 V2 增加持久化的 session 归档操作：归档记录一个 `session.archived` fact，并将时间戳投影到 `Session.Info.time.archived`，重复归档幂等。归档与删除分离，删除会中断现有操作。对需要长期管理历史会话的团队有价值。

### 8. refactor(core): 用表单替代集成提示
**#40997** | 创建 2026-08-07 | 更新 2026-08-09 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/40997)

将 GitHub Copilot、Azure、Cloudflare 等集成的专用提示词结构，重构为共享的 `Form.Fields` 定义，并在传输层提交 `Form.Answer` 作为 `answers`。OAuth 和密钥验证被移入 Core，密钥 answers 持久化为 provider 配置。这是核心架构的简化，降低集成维护成本。

### 9. fix(core): 为空的 AI SDK 错误生成回退消息
**#41450** | 创建 2026-08-09 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/41450)

AI SDK 错误（如 `AI_APICallError`）可能只有空 `message`，但携带 `statusCode`、`data.error.code`、rate-limit headers 等结构化信息。旧逻辑只复制 `error.message` 到 `UnknownProviderReason`，导致 TUI 显示空错误。现在会从结构化字段派生回退消息。

### 10. fix(tui): 在模型上下文中包含附件路径
**#41455** | 创建 2026-08-09 | 状态：OPEN  
[查看 PR](https://github.com/anomalyco/opencode/pull/41455)

修复模型上下文丢失本地附件路径的问题：在二进制图像部分之前，先插入 `source.path` 作为文本片段。部分 provider 需要路径信息才能正确解析图像内容。

---

## 功能需求趋势

从近期 Issue 中提炼出社区最关注的四个方向：

1. **高可用与容错**
   - [模型跨品牌回退/故障转移 #7602](https://github.com/anomalyco/opencode/issues/7602)：希望支持"模型 A 失败 → 自动切模型 B"，而非仅同模型 ID 的 provider 回退。
   - [持久化会话守护进程 + 无工具调用的记忆召回 #41453](https://github.com/anomalyco/opencode/issues/41453)：要求常驻守护 agent 保存 workspace 上下文，减少重复推理和 token 浪费。

2. **交互与体验打磨**
   - [/clear 替代 /new #38392](https://github.com/anomalyco/opencode/issues/38392)：用户期望 `clear` 清空当前会话上下文，而非开启新会话，抱怨当前的 `new` 语义困惑。
   - [支持撤销问题工具的回答 #25555](https://github.com/anomalyco/opencode/issues/25555)：`question` 工具产生的回答无法作为 undo/fork 点，限制了对话回退和分支。
   - [可配置代码隐藏默认状态 #35093](https://github.com/anomalyco/opencode/issues/35093)：代码隐藏（concealment）默认开启，对希望始终显示代码的用户不友好。

3. **服务端与模型管理透明度**
   - [Go 计划模型托管方式需澄清 #24649](https://github.com/anomalyco/opencode/issues/24649)：用户要求明确区分自托管模型与通过第三方代理的模型，涉及基础设施声明和定价可信度。
   - [禁用流式模式 #785](https://github.com/anomalyco/opencode/issues/785)：为不支持流式的代理提供降级路径。

4. **IDE 集成深化**
   - Xcode ACP [#34743](https://github.com/anomalyco/opencode/issues/34743) 与 VS Code 扩展复制粘贴 [#39588](https://github.com/anomalyco/opencode/issues/39588) 表明，编辑器集成通道的稳定性已成为核心期待。

---

## 开发者关注点

### 🔴 痛点一：DeepSeek V4 Flash 故障“假修复”
围绕 `deepseek-v4-flash` 的故障从 7 月 31 日持续至今：先是突然停止工作（#39838），后定位到网关给模型名注入前导空格（#41314、#41300），直接 API 调用同样返回 400（#41322）。**最令社区不满的是 #41211 声称修复后，#41306 在 8 月 9 日实测依然失败，且多个 issue 被直接 CLOSED。** 这暴露出 Go 网关的回归检测不足和社区沟通问题。

### 🔴 痛点二：OpenCode Go 订阅的稳定性与计费
- [#30221](https://github.com/anomalyco/opencode/issues/30221)：所有会话莫名 `terminated`。
- [#32971](https://github.com/anomalyco/opencode/issues/32971)：账户有 $20 余额却触发 "Free Usage Exceeded"，而 curl 直连同一 API 正常。
- [#41430](https://github.com/anomalyco/opencode/issues/41430)：Stripe 支付 $10 后订阅未激活。

Go 订阅的网关可靠性和计费同步均受到质疑，直接影响付费用户的信任。

### 🟡 痛点三：剪贴板复制功能长期失效
[#4283](https://github.com/anomalyco/opencode/issues/4283)（终端 TUI）和 [#39588](https://github.com/anomalyco/opencode/issues/39588)（VS Code 扩展）均报告复制粘贴不可用，后者连右键菜单、快捷键、菜单栏复制全部无效。122 条评论、110 👍 证明这不是偶发问题，而是跨端系统性的交互缺陷。

### 🟡 痛点四：模型配置项被静默丢弃
- [#27361](https://github.com/anomalyco/opencode/issues/27361)：`@ai-sdk/openai-compatible` 的 `options`（如 `reasoning.effort`）在 headless 模式被忽略。
- [#41294](https://github.com/anomalyco/opencode/issues/41294)：v1.17.11 上 `@ai-sdk/openai` 的 `reasoning` 字段未进入请求体，而 `temperature`/`top_p` 正常。

模型选项"静默丢失"让用户难以诊断，也直接影响推理质量。

### 🟡 痛点五：权限系统的不稳定性与安全隐患
- 功能类：嵌套子代理权限请求挂起（[#13715](https://github.com/anomalyco/opencode/issues/13715)）
- 安全类：`--` 绕过 bash 权限（[#39931](https://github.com/anomalyco/opencode/issues/39931)）

### 🟢 平台稳定性：TUI 启动冻结
[#41284](https://github.com/anomalyco/opencode/issues/41284)（macOS 1.18.14/15）和 [#41436](https://github.com/anomalyco/opencode/issues/41436)（Windows 1.18.15 需管理员权限）分别报告 TUI 在启动时冻结或所有 LLM 请求挂起，且无任何错误输出。跨平台 TUI 稳定性仍需加强。

---

> **总结**：2026 年 8 月 10 日的 OpenCode 社区处于"功能快速演进、稳定性欠账还债"的阶段。V2 合并、性能优化（-75.5% 渲染内存）值得期待，但 DeepSeek V4 Flash 的网关故障、"修复后仍复现"的处理方式、剪贴板与内存两大老问题，正持续消耗社区耐心。建议关注 [#41463](https://github.com/anomalyco/opencode/pull/41463) 工具定义修复与 [#40427](https://github.com/anomalyco/opencode/pull/40427) 性能优化的后续进展。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-10

## 今日速览

过去 24 小时无新版本发布，社区焦点集中在稳定性修复与 TUI 体验优化。llama.cpp 默认模型相关的两个历史 issue（#6922、#6948）随 PR #7072 的模型目录缓存方案落地而关闭；8 月 9 日集中涌现的 20+ 个 untriaged 缺陷报告（涉及 TUI 渲染崩溃、EPIPE、扩展命令路由等）大多已在当天闭环，显示维护者正在进行一次集中的问题清理。

---

## 社区热点 Issues

1. **[#6922] [已关闭] llama.cpp 默认模型导致启动报 "No models available"** — [链接](https://github.com/earendil-works/pi/issues/6922)
   最受关注的问题（14 👍 / 10 评论）。当 `defaultProvider` 设为 `llama.cpp` 时，Pi 启动即提示无可用模型并退出。根因与 #6948 的异步模型刷新竞态相关，已由 PR #7072 修复。

2. **[#7730] [开启] macOS 长会话高 CPU 占用** — [链接](https://github.com/earendil-works/pi/issues/7730)
   CPU 在 50-110% 之间波动、内存 600-800MB，用户反馈与上下文/会话长度相关。已有 6 条讨论，尚未定位，是当前最活跃的未解决问题之一。

3. **[#3159] [已关闭] edit 工具超时被终止** — [链接](https://github.com/earendil-works/pi/issues/3159)
   从 4 月持续至今的编辑工具超时问题，Qwen 27b 等模型在新版本中频繁触发 "terminated"，社区要求提高 edit 操作的超时上限。

4. **[#7323] [已关闭] `pi update --models` 因瞬时网络停顿导致整体刷新失败** — [链接](https://github.com/earendil-works/pi/issues/7323)
   单次 HTTPS 请求 stall 15 秒即让整个模型目录刷新失败，用户希望 Pi 支持重试而非整体失败，暴露了目录刷新的容错短板。

5. **[#7720] [开启] 全屏 TUI 模式支持禁用"选择即复制"** — [链接](https://github.com/earendil-works/pi/issues/7720)
   高亮终端文本时容易误覆盖剪贴板，社区建议增加开关；PR #7866 已提交实现，正处于验证阶段。

6. **[#7616] [已关闭] TUI 工具块超出视口时滚动跳变且缺少历史滚动键** — [链接](https://github.com/earendil-works/pi/issues/7616)
   渲染器在工具块过长时触发全量清屏导致聊天位置丢失，且无 PageUp/PageDown 历史滚动，影响长任务中的阅读体验。

7. **[#7740] [开启] /reload 后自定义工具渲染失效** — [链接](https://github.com/earendil-works/pi/issues/7740)
   MCP 工具在 `session_start` 中注册后，`/reload` 会破坏 `renderCall`/`renderResult` 的加载顺序，直接影响扩展开发者的调试效率。

8. **[#7869] [已关闭] AI21 API 已退役（410）** — [链接](https://github.com/earendil-works/pi/issues/7869)
   运行中突然报 410，AI21 Gateway 已迁移至 app.ai21.com，属于紧急 Provider 迁移问题，需要快速更新端点配置。

9. **[#7850] [已关闭] GitHub Copilot 登录 429 限流** — [链接](https://github.com/earendil-works/pi/issues/7850)
   组织账号可用模型超过 20 个时，并发启用策略触发 GitHub 限流导致登录失败；PR #7851/#7844 分别给出串行化与移除批量更新的修复。

10. **[#7848] [已关闭] 自动压缩后活动任务被中断** — [链接](https://github.com/earendil-works/pi/issues/7848)
    上下文达到上限触发 auto-compaction 后，本应继续的 tool 任务停止，需等待用户再次输入，影响长任务可靠性。

---

## 重要 PR 进展

1. **[#7072] [已关闭] 缓存 llama.cpp 模型目录** — [链接](https://github.com/earendil-works/pi/pull/7072)
   修复 #6948，为 llama.cpp provider 增加模型目录缓存，解决启动时默认模型竞态问题，同时闭环 #6922。

2. **[#7872] [已关闭] session_start 时暴露上下文文件** — [链接](https://github.com/earendil-works/pi/pull/7872)
   在 `session_start` 事件中传递已加载的 AGENTS/CLAUDE 上下文文件，并补充测试与文档，增强扩展对上下文的可观测性。

3. **[#7344] [已关闭] 新增远程会话线协议** — [链接](https://github.com/earendil-works/pi/pull/7344)
   引入 `@earendil-works/pi-protocol` 包，定义会话命令/事件/快照的验证与有界 CBOR 编码，为远程会话能力铺路。

4. **[#7866] [已关闭] TUI 增加 `copyOnSelect` 选项** — [链接](https://github.com/earendil-works/pi/pull/7866)
   实现 #7720 的请求，允许用户关闭全屏模式下的鼠标选择自动复制行为。

5. **[#7865] [已关闭] SelectList 与 model-selector 支持 PageUp/PageDown** — [链接](https://github.com/earendil-works/pi/pull/7865)
   补齐基础 SelectList 的翻页键绑定，统一各选择器的键盘导航行为。

6. **[#7858] [已关闭] 不受 expandPromptTemplates 影响地路由扩展命令** — [链接](https://github.com/earendil-works/pi/pull/7858)
   修复 `sendUserMessage()` 无法触发扩展命令的问题，使文档中"命令作为 reload 入口"的模式真正可用。

7. **[#7857] [开启] sendUserMessage 暴露 `expandPromptTemplates`** — [链接](https://github.com/earendil-works/pi/pull/7857)
   与 #7858 互补的开放 PR，让工具可主动控制模板展开，作者表示需评估边界影响，目前仍在讨论中。

8. **[#7856] [已关闭] 修复结构化工具参数的 JSON 双重序列化** — [链接](https://github.com/earendil-works/pi/pull/7856)
   解决部分 Provider 将对象/数组参数以字符串形式传入时 `must be object` 硬失败的问题，避免无谓重试。

9. **[#7851] [已关闭] GitHub Copilot 模型策略串行启用** — [链接](https://github.com/earendil-works/pi/pull/7851)
   将并发策略启用改为串行请求，规避组织账号的 Copilot 429 登录失败。

10. **[#7844] [已关闭] 登录时移除批量策略更新** — [链接](https://github.com/earendil-works/pi/pull/7844)
    同一 429 问题的另一修复方案：登录阶段不再批量启用模型，改为在 Copilot Chat 中显式启用。

---

## 功能需求趋势

- **TUI 交互完善**：禁用选择复制、鼠标点击定位光标、PageUp/PageDown 滚动、滚动/回复时视图不跳变——说明 TUI 正从"可用"走向"好用"阶段，终端交互细节成为社区关注重点。
- **本地/自托管模型支持**：llama.cpp 默认模型、模型目录缓存、VLLM 兼容性（响应截断）是高频话题，本地推理链路仍需加固。
- **新 Provider 与模型适配**：AI21 API 退役迁移、Qwen 中国区 Token 套餐、GLM-5.2 上下文窗口覆盖错误、Copilot 登录限流，反映社区对多 Provider/多模型生态的活跃需求。
- **扩展机制增强**：sendUserMessage 触发扩展命令、/reload 后渲染注册顺序、session_start 上下文文件、远程会话协议——扩展开发者的能力诉求集中爆发。
- **可靠性与崩溃修复**：渲染器超宽行崩溃、EPIPE、bun 运行时 `zlib.createZstdDecompress` 缺失、自动压缩中断任务，稳定性成为质量焦点。

---

## 开发者关注点

- **llama.cpp 默认模型配置**是最持久的痛点（#6922/#6948），最终通过目录缓存解决，但暴露了 provider 异步初始化的设计短板。
- **TUI 渲染器健壮性**受到质疑：超宽行直接中止整个会话（#7868）、流式输出时滚动位置被反复拉回（#7861），开发者希望渲染器优先截断而非崩溃。
- **上下文管理策略**需改进：auto-compaction 不应让任务停止（#7848），长会话 CPU/内存占用需优化（#7730）。
- **扩展开发障碍**集中在事件加载顺序（#7740）与消息路由（#7859），文档模式与实现不一致的问题多次被提及。
- **运行环境兼容性**：bun 运行时无法使用 zstd 解压（#7846）、外部宿主关闭 stdout 管道导致 EPIPE（#7860），说明 Pi 的部署形态正在多样化，但兼容层还未跟上。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-10）

## 今日速览

今日发布 `v0.21.8-nightly.20260810` 预览版，核心新增 **Qoder 插件扩展支持**；社区围绕**多会话协调（#8718）**与**外部上下文集成（#7585）**展开深入讨论；Windows/MCP 相关缺陷修复持续推进，多个 CI 稳定性和测试问题也在快速处理中。

## 版本发布

**v0.21.8-nightly.20260810.55e20db328**  
- `feat(core): support Qoder plugin extensions`（由 @callmeYe 提交，PR #8661）  
- `feat(ci): auto-assign issues to area owners`（CI 自动将 issue 分配给对应领域负责人）  
🔗 [Release 详情](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.8-nightly.20260810.55e20db328)

## 社区热点 Issues

以下为过去 24 小时内更新频繁、讨论热度高或影响面较大的 10 个 Issue：

1. **RFC: Native coordination for independent Qwen sessions**  
   #8718 | P2 | 8 条评论  
   提出为多个独立 Qwen Code 会话增加原生协调机制，允许 leader 分发任务给多个 worker 并收集结果。社区正围绕多代理工作流展开设计讨论。  
   🔗 [Issue #8718](https://github.com/QwenLM/qwen-code/issues/8718)

2. **proposal: Add a direct external context provider profile**  
   #7585 | P3 | 12 条评论  
   提议为 Qwen Code 增加“直接外部上下文提供者”配置，支持私有 monorepo 集成，并按需/自动召回仓库共享上下文。评论数最多，企业级用户关注度高。  
   🔗 [Issue #7585](https://github.com/QwenLM/qwen-code/issues/7585)

3. **proposal(memory): Define an enterprise external-memory integration profile**  
   #7449 | P3 | 7 条评论  
   针对企业外部内存集成定义供应商中立的标准配置，包含文档优先的上游方案和增量兼容测试，是长期内存管理方向的重要提案。  
   🔗 [Issue #7449](https://github.com/QwenLM/qwen-code/issues/7449)

4. **Windows standalone installer fails when powershell.exe cannot resolve Get-FileHash**  
   #7118 | P2 | 6 条评论  
   Windows 独立安装包在 SHA-256 校验阶段失败，导致安装回退到 npm 模式。已打上 `welcome-pr` 标签，欢迎贡献修复。  
   🔗 [Issue #7118](https://github.com/QwenLM/qwen-code/issues/7118)

5. **fix(serve): Preserve the current session when a large restore times out**  
   #8678 | P1 | 2 条评论  
   大型会话恢复超时会导致当前会话丢失，P1 级问题。部分修复已合并（PR #8691），剩余部分仍在推进。  
   🔗 [Issue #8678](https://github.com/QwenLM/qwen-code/issues/8678)

6. **Streamable HTTP: optional GET/SSE stream rejected with 404 kills the whole MCP connection**  
   #8784 | P2 | 5 条评论  
   MCP Streamable HTTP 客户端在握手后主动探测可选的 SSE 流，若服务端返回 404 会导致整个连接中断，影响 MCP 兼容性。  
   🔗 [Issue #8784](https://github.com/QwenLM/qwen-code/issues/8784)

7. **npm test doesn't run due to unkown flag**  
   #8721 | P2 | 5 条评论  
   本地运行 `npm test` 时报错 `EUNKNOWN`，原因是测试脚本中传递了未知参数，影响开发者本地验证。  
   🔗 [Issue #8721](https://github.com/QwenLM/qwen-code/issues/8721)

8. **TUI flickering / screen tearing in web-based terminals**  
   #8659 | P3 | 4 条评论  
   在阿里云 Workbench 等 Web 终端中 TUI 持续闪烁/撕裂，可能由虚拟化历史模式的全屏 ANSI 重绘导致。已标记 `welcome-pr`。  
   🔗 [Issue #8659](https://github.com/QwenLM/qwen-code/issues/8659)

9. **bug(sdk): hidden unrecognized diagnostics mutate and evict transcript state**  
   #8823 | P2 | 3 条评论  
   无法识别的守护进程事件会被转换为结构化调试事件并隐藏，但在隐藏前会先进入共享 transcript reducer，导致用户可见状态被意外修改或驱逐。  
   🔗 [Issue #8823](https://github.com/QwenLM/qwen-code/issues/8823)

10. **Proposal: rebuild /review Step 3–5 orchestration on the workflow engine**  
    #8769 | P2 | 4 条评论  
    提议将 `/review` 技能的 Step 3–5（agent 扇出、验证、反向审计）从模型驱动迁移到工作流引擎，使编排逻辑变为确定性代码。  
    🔗 [Issue #8769](https://github.com/QwenLM/qwen-code/issues/8769)

## 重要 PR 进展

以下为近期提交、正在讨论或已进入自动修复流程的高价值 PR：

1. **feat(cli): add native multi-agent coordination**  
   #8804 | Draft  
   初步暴露进程内 Agent Team 工作流，为 #8718 的独立会话协调层铺路，是当前多代理方向的实验性实现。  
   🔗 [PR #8804](https://github.com/QwenLM/qwen-code/pull/8804)

2. **feat(core): add a live-session registry and `qwen sessions ps`**  
   #8728  
   新增 `~/.qwen/sessions/<pid>.json` 实时会话注册表和 `qwen sessions ps` 命令，便于查看当前运行中的会话状态。  
   🔗 [PR #8728](https://github.com/QwenLM/qwen-code/pull/8728)

3. **feat(cli): adopt Goal v3 in ACP sessions**  
   #8732  
   将 CLI 的 Goal v3 运行时引入 ACP/Web Shell 会话，统一创建、暂停、恢复、替换等状态管理。  
   🔗 [PR #8732](https://github.com/QwenLM/qwen-code/pull/8732)

4. **fix(core): catch content-only thinking-tag leaks on all OpenAI-compatible providers**  
   #8818  
   扩展对 `<think>` 标签泄漏的防御到所有 OpenAI 兼容端点，并修复两个真实泄漏绕过路径。  
   🔗 [PR #8818](https://github.com/qwenLM/qwen-code/pull/8818) *(注意链接大小写保持一致)*

5. **fix(web-shell): reconcile mid-turn messages with daemon state**  
   #8798  
   让 daemon 成为中间轮次消息的权威所有者，Web Shell 通过稳定消息 ID 同步队列，避免刷新或切换后重复提交。  
   🔗 [PR #8798](https://github.com/QwenLM/qwen-code/pull/8798)

6. **fix(serve): use authority-scoped credential stripping in provider warning sanitizer**  
   #8408  
   修复 provider 警告清理器中端口截断和密码泄漏两个问题，提升 URL 凭据剥离的安全性。  
   🔗 [PR #8408](https://github.com/QwenLM/qwen-code/pull/8408)

7. **perf(review): guarantee compose survives a reverse-audit budget stop**  
   #8791  
   为 `/review` 组合阶段设置最低保障时间（默认 20 分钟），防止反向审计预算耗尽导致评审无法提交。  
   🔗 [PR #8791](https://github.com/QwenLM/qwen-code/pull/8791)

8. **fix(desktop): restore the macOS window after closing it**  
   #8802  
   修复 macOS 桌面端关闭窗口后无法从 Dock 恢复的问题，并避免 Dock 激活时抢占“Local Control”焦点。  
   🔗 [PR #8802](https://github.com/QwenLM/qwen-code/pull/8802)

9. **feat(web-shell): show context usage as a mini progress pill in the status bar**  
   #8794  
   在 Web UI 输入栏旁新增上下文窗口占用率环形进度指示，阈值与 `/context` 一致，帮助用户直观了解 token 用量。  
   🔗 [PR #8794](https://github.com/QwenLM/qwen-code/pull/8794)

10. **fix(core): preserve prompt cache across deferred tool discovery**  
    #8276  
    保持主会话的 provider 工具声明和系统指令稳定，`tool_search` 在发现延迟工具时呈现匹配 schema，避免破坏缓存。  
    🔗 [PR #8276](https://github.com/QwenLM/qwen-code/pull/8276)

## 功能需求趋势

从近期 Issue 和 PR 中可提炼出以下社区关注方向：

- **多代理与多会话协调**：多个独立会话的调度、状态同步、结果收集成为热门话题（#8718、#8804、#8728），反映用户对并行任务编排的需求。
- **企业级外部上下文/内存集成**：社区持续提出与私有仓库、外部存储、供应商中立的集成方案（#7585、#7449），强调文档化、可兼容性的企业落地路径。
- **跨平台稳定性与体验优化**：Windows 安装、桌面端崩溃、TUI 闪烁等问题集中出现（#7118、#8615、#8659），说明非 Linux 环境用户体验仍需加固。
- **MCP 协议健壮性**：Streamable HTTP 的可选流处理、错误隔离等问题受到关注（#8784、#8823），MCP 兼容性正在成为开发者的高频使用场景。

## 开发者关注点

- **安装与运行环境问题**：Windows 独立安装器的 SHA-256 校验失败、桌面端运行时崩溃（EISDIR）是当前最直接的阻碍。
- **测试与 CI 稳定性**：`npm test` 因未知标志无法运行、多个 E2E 测试间歇性失败（如 extensions-install、monitor.test），开发者希望测试命令开箱即用。
- **会话恢复与状态一致性**：大会话恢复超时、未识别诊断事件导致 transcript 状态错乱，影响长时间工作的可靠性。
- **模型输出的 reasoning 处理**：`<think>` 标签泄漏问题在多个 OpenAI 兼容 provider 上重现，开发者期望统一修复而非仅限单一厂商。

---
*本日报由 AI 自动整理，数据来源于 [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) 仓库公开信息。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-10

## 今日速览

- v0.9.6 发布准备 PR 已合并（#5313），核心是“减法式”运行时清理与压缩机制重构，为下个版本扫清障碍。
- 社区围绕「"Constitution" 中文译名」的跨文化讨论持续升温（#4949），已有 8 条评论，是当前最活跃的社区议题。
- 上下文压缩“1M 模型却按 128K 阈值截断”的用户痛点集中爆发（#5239、#5096、#5244），成为今日最突出体验问题。

---

## 社区热点 Issues

### 1. 「Constitution」中文翻译：宪法、协作准则还是其他？（#4949）
- **热度**：8 条评论 | 开放中
- **为什么重要**：PR #4908 将 "Constitution" 的中文翻译从“协作准则”改回“宪法”，引发对术语准确性与政治敏感性的争议。这是中文母语社区参与项目治理的标志性事件，最终译法将影响文档基调和中文用户认知。
- **社区反应**：已有多位中文母语者参与，观点分化，尚无定论。
- 链接：https://github.com/Hmbown/CodeWhale/issues/4949

### 2. 切换 Provider 后残留无关的默认模型（#5034）
- **热度**：4 条评论 | 开放中
- **为什么重要**：切换到 OpenAI 后默认模型仍可能是 `gpt-5.5`，说明 provider 与 model 的解析链路未作为整体原子更新。多提供商工作流会因此出现“用 A 厂商 Key 调到 B 厂商模型”的隐蔽错误。
- **社区反应**：被标记为 bug，等待修复方案。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5034

### 3. /compact 后压缩收益不可见（#5096）
- **热度**：4 条评论 | 开放中
- **为什么重要**：用户执行压缩后状态栏仍显示 37K/128K，token 计数器完全没有反馈。压缩功能“做了但看不见”，会让用户怀疑功能是否生效，属于典型的反馈缺失问题。
- **社区反应**：用户 jbousquie 报告，涉及 Qwen3.6 / DeepSeek v4 Flash 多个本地端点。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5096

### 4. 权限请求默认高亮“拒绝”引发误操作担忧（#5293）
- **热度**：4 条评论 | 开放中 | 👍 1
- **为什么重要**：v0.9.4 起权限对话框默认高亮拒绝选项，改变了既有交互习惯，快速确认操作时容易误拒。这触及安全默认与操作效率的根本矛盾，需要提供配置项而非单向收紧。
- **社区反应**：已有用户反馈具体的误触场景。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5293

### 5. v0.9.5 统一任务面板：shell + 子代理 + 常驻 worker（#5270）
- **热度**：3 条评论 | 开放中
- **为什么重要**：后台 shell、子代理、Fleet worker 与工作流运行目前分散在不同视图，运营者无法在一个界面上看见“这个 session 还在跑什么”。这是多代理协作场景下的关键 UX 补齐。
- **社区反应**：被列为 v0.9.5 核心目标。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5270

### 6. 文件编辑工具静默假成功，3-5 倍返工（#5209）
- **热度**：3 条评论 | 开放中
- **为什么重要**：`File (action=edit)` 收到错误参数 `new_str` 时既不报错也不修改，反而返回“替换成功”。这种工具幻觉会让 agent 反复做无效编辑，是当前最影响可信度的可靠性 bug。
- **社区反应**：用户 yekern 给出详细复现路径，诉求是“必须报错”。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5209

### 7. 模型支持 1M 上下文，为何仍按 128K 触发压缩？（#5239）
- **热度**：2 条评论 | 开放中
- **为什么重要**：模型已支持 1M 上下文，但 `context_window_for_model` 未识别新模型 ID 时静默回落到 128K 兜底值，用户被迫频繁压缩。这是 #5244 的根源问题，且 #5244 仅缓解未根治。
- **社区反应**：用户 hardy922 贴出状态栏截图，希望直接支持 1M。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5239

### 8. IME 候选窗口跳动，中文输入体验受损（#5023）
- **热度**：2 条评论 | 开放中
- **为什么重要**：Windows 11 + v0.9.3 环境下，TUI 输入时中文 IME 候选窗口位置不稳定，反复跳动。中文用户日常输入直接受影响，目前缺少稳定复现环境和修复方案。
- **社区反应**：用户 BrathonBai 提交了系统化环境信息。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5023

### 9. API Key 只保存在当前仓库，而非全局安全存储（#5047）
- **热度**：1 条评论 | 开放中
- **为什么重要**：API Key 有时只写入 `<cwd>/.codewhale/config.toml` 明文，切换项目后即丢失，且密钥随仓库分发存在泄漏风险。这既是功能缺陷也是安全隐患。
- **社区反应**：被标记为 bug + security，期望改为全局密钥链/加密存储。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5047

### 10. 复制消息时混入 `●` 和 `▏` 装饰符（#5314）
- **热度**：1 条评论 | 开放中
- **为什么重要**：通过上下文菜单“Copy message”复制内容时，会把角色图标与续行 rail 装饰一并带入剪贴板。看似小问题，但直接污染输出，在重现代码与文档摘录场景中很恼人。
- **社区反应**：新提交 issue，已定位到右键菜单复制路径。
- 链接：https://github.com/Hmbown/CodeWhale/issues/5314

---

## 重要 PR 进展

> 过去 24 小时内活跃 PR 共 3 条，全部列出。

### 1. chore(release): 准备 v0.9.6（#5313）
- **状态**：已合并
- **内容**：v0.9.6 定位为“减法式”运行时发布：移除代码创建的无谓阻塞，保留显式预算、截止时间、取消与真实 provider 状态；并围绕“单一 provider 摘要 + 已提交的继任 handoff”重构压缩机制，移除 mailbox freeze 等拖慢会话的中间环节。
- **意义**：标志着下一代压缩与运行时稳定性的核心改动落地。
- 链接：https://github.com/Hmbown/CodeWhale/pull/5313

### 2. build(deps): jsonschema 0.46.10 → 0.49.6（#5281）
- **状态**：开放中
- **内容**：依赖 bot 例行动作，升级 jsonschema 库以获取 bug 修复与性能改进，无破坏性变更说明。
- 链接：https://github.com/Hmbown/CodeWhale/pull/5281

### 3. fix(release): 使用 CNB 发布资产下载 URL（#5308）
- **状态**：已合并
- **内容**：修正两处 updater 实现中的仓库 slug 为 `codewhale.net/codewhale`，并补齐 `/-/releases/download/vX.Y.Z/` 路径段，确保镜像模式获取到二进制资产而非 release 页面 HTML。保留显式镜像覆盖优先级的既有语义。
- 链接：https://github.com/Hmbown/CodeWhale/pull/5308

---

## 功能需求趋势

综合当日活跃 Issue，社区关注方向可归纳为五条主线：

1. **上下文窗口自适应与压缩策略可配置化**
   #5239、#5096、#5134、#5244、#5043 等形成问题簇。用户不再满足于“自动压缩”，而是要求：阈值与模型实际窗口匹配（1M）、压缩行为可见（token 计数反馈）、压缩结果可预期（保留意图与决策）。

2. **多 Provider / 多 API Key 的一等公民支持**
   #5034、#5250、#5047 指向同一诉求：同时管理 DeepSeek、GLM、OpenAI 等多个服务商时，应有独立的密钥存储、干净的默认模型切换、禁止密钥落入仓库明文。这是专业用户与团队协作的基础设施需求。

3. **CLI/TUI 控制面对等**
   #4022、#576 明确表达了“TUI 内的控制能力不应被困在 TUI 里”的诉求——子代理状态、取消、Fork 会话等操作需在 CLI、TUI、远端工作台保持一致。终端 UI 与脚本接口的对等性成为架构级要求。

4. **统一任务/身份视图**
   #5270（统一 tasks 面板）、#5287（子代理显示名称）说明，随着 subagent、Fleet、workflow 并存，操作者需要一眼看清“当前有哪些任务、用什么名字、如何控制”，而不是面对 `agent_<hex>` 和随机鲸鱼昵称。

5. **工具行为的“大声失败”优于“静默成功”**
   #5209（假成功）、#5244（静默降级到 128K）、#3364（编辑前读取保护）共同指向一个文化转变：工具宁可报错也不要用假成功消耗用户的信任。错误要 loud、specific、recoverable。

---

## 开发者关注点

- **压缩反馈缺失是最大体验痛点**：多个 Issue（#5096、#5239）显示用户无法判断压缩到底有没有发生、收益去了哪里，token 计数器长期不动会直接动摇对整个上下文管理系统的信任。
- **“静默错误”最消耗调试时间**：文件编辑返回假成功（#5209）、未知模型 ID 静默回落 128K（#5244）这类行为，会让开发者花费数小时排查根本不存在于代码逻辑中的问题，社区强烈要求“错误必须显式化”。
- **Provider 切换的原子性不被信任**：切换到谁、默认模型是谁、密钥用哪个，这三者必须作为一个整体更新；拆开的任何一步都会产生难以察觉的配置串味（#5034）。
- **API 密钥管理是安全红线**：明文写入项目目录（#5047）比“功能缺失”更让人不安，开发者期望系统级密钥存储或至少明确且可配置的持久化位置。
- **非英语用户的输入体验需要被看见**：IME 候选窗跳动（#5023）和 Constitution 译本争议（#4949）表明，国际化和本地文本输入质量已经足够影响用户留存，需要尽早纳入排期。
- **细节交互的打磨同样重要**：Fork 只能在 CLI 操作（#576）、复制消息带装饰符（#5314）等问题虽小，却直接暴露 UI 层与数据层没有解耦——复制应复制数据本身，而非屏幕渲染结果。

---

*本日报基于 GitHub 公开数据生成，数据源：Hmbown/DeepSeek-TUI（活跃开发代号 CodeWhale）。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*