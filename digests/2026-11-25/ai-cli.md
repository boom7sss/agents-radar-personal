# AI CLI 工具社区动态日报 2026-11-25

> 生成时间: 2026-11-25 19:57 UTC | 覆盖工具: 9 个

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

# 主流 AI CLI 工具横向对比分析报告（2026-11-25）

> 说明：以下数据严格取自各工具当日摘要。“Issues 数/PR 数”按日报列出的当日更新条目统计（Claude Code、Codex 等摘要仅呈现 Top 10，实际数量可能更多），部分字段在原始材料中未披露，以“—/未披露”标注，不做推测。

## 1. 生态全景

当前 AI CLI 工具生态已从“能否用”进入“可观测、可控、可评测”的成熟化阶段：子代理可靠性、钩子/权限语义、MCP 数据通道完整性成为多家共同的高发问题区。扩展机制（hooks、插件、MCP、skills）正在成为 bug 最密集的层面，多数工具在扩大扩展面的同时，稳定性契约尚未同步补齐。发布节奏分化明显——Claude Code、Copilot CLI 保持高频迭代，Gemini CLI、OpenCode、DeepSeek TUI 当日零发布。安全与权限一致性（headless 审批、凭据落盘、shell 绕过）在 Qwen Code、OpenCode、Gemini CLI 同时升温，说明企业化落地正在倒逼信任边界收紧。与此同时，成本敏感信号（提示缓存重写、子代理无限循环、token 失控）普遍出现，表明重度用户已进入“按费用评估体验”的阶段。

## 2. 各工具活跃度对比

| 工具 | Release 情况 | 当日更新 Issues（列示数） | 当日更新 PR（列示数） | 备注 |
|---|---|---|---|---|
| Claude Code | v2.1.332（1 个正式版） | 10（Top 10） | 0 | 扩展机制 bug 集中；MCP 技能 beta |
| OpenAI Codex | 4 个 alpha 预发布（alpha.3–6，无变更说明） | 10（含 1 条已关闭） | 10+（另有 2 条补充） | Windows 桌面端回归集中 |
| Gemini CLI | 无 | 10（另列 3 条“值得一瞥”） | 10（另注 1 条可疑 PR） | P1 子代理问题多在 need-retesting |
| GitHub Copilot CLI | v1.0.116 正式版 + 5 个预发布 | 10（另列 2 条新建） | 2（均 devcontainer，已关闭） | 功能 PR 几乎缺席 |
| Kimi Code CLI | 无活动 | 0 | 0 | 过去 24 小时无活动 |
| OpenCode | 无 | 10 | 10 | 计费与权限安全为焦点 |
| Pi | v1.6.1（1 个正式版） | 10 | 10 | 两个高影响缺陷已修复关闭 |
| Qwen Code | v1.0.0-preview.2 | 10 | 10 | CI 告警密集；安全类 P1 |
| DeepSeek TUI | 无（0.10.5 待批准） | 1（全量） | 7（全量） | 数据量有限，趋势仅供参考 |

## 3. 共同关注的功能方向

- **子代理 / Agent 可靠性**：Gemini CLI（#22323 假成功、#21409 无限挂起）、OpenCode（#45442 子代理 50 分钟 364 次重复 grep）、Codex（#63434 提前停止）、Claude Code（#81825 循环工作流失效）均指向“失败要快速且可见、需循环保护”。
- **会话与工作区组织**：Codex（#25319 VS Code 会话限定工作区，144👍）、OpenCode（#55446 按项目分组侧边栏）、Claude Code（#111973 团队共享记忆）共同反映多项目、多会话工作流已成主流诉求。
- **扩展机制一致性（skills / 插件 / hooks）**：Copilot CLI（#2753 插件 skill 未注入、#5440 `.instructions.md` 被忽略）、Gemini CLI（#21968 模型不主动用 skills）、Claude Code（hooks 时序与权限交互）、OpenCode（#66299 插件钩子静默失效）——普遍存在“UI 可见但链路不生效”。
- **MCP 数据与协议正确性**：Claude Code（#111999 仅传 `structuredContent` 丢字段）、Copilot CLI（#4888/#5464 新旧协议协商）、Gemini CLI（#30454 OAuth 源一致性校验）、Codex（#63922 hooks 上下文溢出阈值）。
- **权限与安全边界**：Qwen Code（#18379 headless 越权、#18165 日志明文 key）、OpenCode（#56288 shell 绕过 `external_directory`、#66441 企业策略收紧）、Gemini CLI（shell 包装器解包、#22672 抑制破坏性命令）。
- **成本与缓存**：Claude Code（#112264 prompt cache 每次重写）、Pi（#12539 跨 effort 保留缓存）、OpenCode（#45442 循环失控）。
- **跨平台稳定性（尤以 Windows）**：Claude Code（#14828 控制台闪烁）、Codex（11-21 更新后执行选择器消失问题簇）、Copilot CLI（#1148 CRLF、#4683 ConstrainedLanguage）、Pi（#4399 Windows 全局安装失败）。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| Claude Code | 扩展生态（MCP 技能、hooks、插件 UI）、远程控制/桌面端 | 重度个人开发者向团队演进 | 快速扩大 MCP 接入面，扩展机制激进 |
| OpenAI Codex | 桌面端本地/云端混合执行、Guardian V3 审批管线 | IDE/桌面用户、多机协作 | PR 侧持续 crate 解耦与审批管线打磨，架构中台化 |
| Gemini CLI | 子代理系统、AST 感知检索、策略引擎安全 | 终端优先、自动化用户 | 强调安全加固（shell 解包、OAuth 校验）与检索效率 |
| GitHub Copilot CLI | IDE/ACP 集成、插件规范（Agent Plugins 1.0） | 企业/受管环境、VS Code 用户 | 协议与规范先行（JSON Schema、ACP），写操作侵入性受关注 |
| OpenCode | 计费/订阅、企业策略、插件运行时（v2） | 付费用户与企业客户 | v2 生命周期管理补齐中，企业权限策略 12-04 承诺 |
| Pi | 多 provider 一致性、codemode 决策模型、SDK 生态 | 嵌入式集成方、多模型用户 | provider 语义统一，错误元数据成一等公民 |
| Qwen Code | Managed Agent / Hosted 运行面、Harness 内核 | 托管/嵌入场景、企业 | 内核与产品包分层，CI fail-closed |
| DeepSeek TUI | 第三方兼容网关接入（描述符模式） | 多模型网关用户 | 统一“内置描述符行”接入范式，发布纪律严格 |

## 5. 社区热度与成熟度

- **高热度 + 高频迭代**：Claude Code（Issues 评论密集，Windows 问题持续近一年）、OpenAI Codex（#25319 达 144👍/65 评论，11-21 更新引发多条高赞回归）、Copilot CLI（#1826 达 22👍、正式版+5 预发布）。
- **快速迭代 + 安全加固期**：Gemini CLI（PR 以 P1 安全加固为主，多个 P1 仍 need-retesting，稳定性验证滞后）、Qwen Code（preview 版推进 Managed Agent，但 CI 告警密集、安全 P1 待解）、OpenCode（v2 修复为主，企业策略进入评审）。
- **成熟度较高、发布克制**：Pi（两个高影响缺陷当日修复关闭，PR 打磨 SDK/扩展细节）、DeepSeek TUI（release PR 显式要求创始人批准，工程纪律强但当日数据量小）。
- **当日静默**：Kimi Code CLI（无活动）。

注：各工具 Issues/PR 数为日报列示的 Top 条目数，非全量，热度对比应结合评论数、👍 数等互动指标理解。

## 6. 值得关注的趋势信号

1. **扩展机制的“信任债”正在集中兑付**：hooks/skills/插件在多家出现“可见但不生效”或静默失败（Copilot #2753/#5440、OpenCode #66299、Claude Code #109300）。对开发者而言，接入第三方扩展前应验证实际注入链路，而非仅看 UI 列表。
2. **失败可见性成为一等需求**：假成功（Gemini #22323）、挂起无超时（Gemini #30415）、静默丢事件（Qwen #16708）、结构化错误元数据（Pi #11071）——错误处理正从体验问题升级为正确性问题。
3. **写操作侵入性与仓库卫生受重视**：Copilot CLI checkpoint refs（#5323）、CRLF 改写（#1148）、Pi settings.json 混入状态（#12158），开发者希望 CLI 对仓库与配置的改动可关闭、可版本控制。
4. **企业/受管环境是下一个战场**：ConstrainedLanguage、GHE.com 登录、企业策略强制新鲜决策（OpenCode #66441）、headless 审批一致性（Qwen #18379）密集出现，表明 CLI 正从个人工具走向组织部署。
5. **安全信号密度上升**：凭据明文落盘（Qwen #18165）、shell 绕过目录规则（OpenCode #56288）、OAuth issuer 校验（Gemini #30454）——建议将权限模型一致性纳入选型评估。
6. **成本治理进入日常**：prompt cache 重写、无限循环、上下文溢出阈值可配置，说明 token 成本已成为影响会话时长与使用模式的核心约束。
7. **MCP 与协议规范化加速**：MCP 技能 beta、OAuth 源校验、协议版本协商集中出现，生态扩展速度快于数据通道可靠性建设，集成方需关注字段完整性与兼容性风险。

---
*数据说明：本报告仅基于各工具 2026-11-25 社区动态摘要，Issues/PR 计数为日报列示条目，部分为 Top 10 抽样；DeepSeek TUI 为全量 1 Issue/7 PR，样本有限，相关判断建议结合多日数据交叉验证。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，数据截止 2026-11-25。说明：PR 列表评论数为 `undefined`，故“关注度”以更新活跃度、修复关联 Issue 数及讨论相关性衡量，不虚构评论数据。

## 1. 热门 Skills 排行

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [mcp-builder 修复 #1742](https://github.com/anthropics/skills/pull/1742) | 修复 MCP 客户端构建器的兼容性 | 适配 `mcp>=2` 中 `streamable_http_client` 重命名与自定义 header 配置（关联 #1668） | OPEN |
| 2 | [skill-creator 隔离触发评测 #1298](https://github.com/anthropics/skills/pull/1298) | 修复 Skill 触发评测的误判 | 并行 worker 竞争、Windows 下管道 `select()` 失败、运行时失败被误判为“未触发” | OPEN |
| 3 | [webapp-testing 去除 shell=True #1980](https://github.com/anthropics/skills/pull/1980) | 修复测试脚本的服务器启动逻辑 | `shell=True` 注入风险，属安全性修复 | OPEN |
| 4 | [docx 超时与输出校验 #1792](https://github.com/anthropics/skills/pull/1792) | 修复 Word 文档处理脚本 | LibreOffice 超时被误报成功；需校验修订标记已清除 | OPEN |
| 5 | [Notion 规格转实现 + 简历审计 #1245](https://github.com/anthropics/skills/pull/1245) | 新增两个业务类 Skill | 将产品/技术规格拆解为 Notion 可执行任务 | OPEN |
| 6 | [Pyxel 复古游戏开发 #525](https://github.com/anthropics/skills/pull/525) | 新增 Python 复古游戏 Skill | 无头输入驱动运行、逐帧检查、状态校验 | OPEN（自 2026-03 长期开放） |
| 7 | [document-typography 排版质控 #514](https://github.com/anthropics/skills/pull/514) | 生成文档的排版质量检查 | 孤词换行、孤行标题、编号错位 | OPEN |

上述 7 个 PR 的评论数均未显示，故按更新活跃度与关联修复价值排序。

## 2. 社区需求趋势

- **安全与信任边界**：[#492](https://github.com/anthropics/skills/issues/492)（46 评论，全站最高）指出社区 Skill 借用 `anthropic/` 命名空间冒充官方，存在权限提升风险。
- **组织内 Skill 共享**：[#228](https://github.com/anthropics/skills/issues/228) 呼吁在 Claude.ai 内建团队 Skill 库，取代手动下载 `.skill` 文件再上传。
- **评测工具可靠性**：[#556](https://github.com/anthropics/skills/issues/556)、[#1352](https://github.com/anthropics/skills/issues/1352) 均反映 `run_eval.py` 触发率系统性错误（0% 或近似 0），这是 skill-creator 体系的核心短板。
- **上下文与描述质量**：[#1487](https://github.com/anthropics/skills/issues/1487)（`claude-api` 单次注入约 156k tokens）、[#2064](https://github.com/anthropics/skills/issues/2064)（description 未说明“何时使用”）、[#202](https://github.com/anthropics/skills/issues/202)（skill-creator 更像文档而非操作指令）。
- **文档处理类 Skill 的正确性**：[#2018](https://github.com/anthropics/skills/issues/2018)（docx 写出无效 XML）、[#1868](https://github.com/anthropics/skills/issues/1868)（渐变背景插值 off-by-one）。
- **工作流与治理类新方向**：[#1329](https://github.com/anthropics/skills/issues/1329)（compact-memory 压缩代理状态）、[#1385](https://github.com/anthropics/skills/issues/1385)（推理质量门控流水线）、[#412](https://github.com/anthropics/skills/issues/412)（agent-governance，已关闭）。

## 3. 高潜力待合并 Skills

以下均为 OPEN，且近期（2026-10 至 11）仍有更新，落地可能性较高：

- [PR #1681 skill-creator 直接执行修复](https://github.com/anthropics/skills/pull/1681) — 更新至 11-19，修复 `ModuleNotFoundError` 与用法路径。
- [PR #1950 claude-api `pause_turn` 文档更新](https://github.com/anthropics/skills/pull/1950) — 更新至 11-10，对齐 Python SDK 1.1.0 自动恢复行为。
- [PR #2019 xlsx 外部链接检测修复](https://github.com/anthropics/skills/pull/2019) — 更新至 11-03，修复工作表级定义名误报。
- [PR #1980 webapp-testing 安全修复](https://github.com/anthropics/skills/pull/1980) / [PR #1792 docx 校验修复](https://github.com/anthropics/skills/pull/1792) — 均更新至 11-01。
- [PR #1976 元素识别修复](https://github.com/anthropics/skills/pull/1976) / [PR #1975 pptx 参数校验](https://github.com/anthropics/skills/pull/1975) / [PR #1977 algorithmic-art 循环包裹](https://github.com/anthropics/skills/pull/1977) — 同一作者批量小修复，各自固定关联 Issue，合并门槛较低。

新功能类 PR [Pyxel #525](https://github.com/anthropics/skills/pull/525) 与 [document-typography #514](https://github.com/anthropics/skills/pull/514) 关注度高但长期未动，落地不确定性更大。

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是“让 Skill 体系本身可靠且可信任”：一方面修复 skill-creator 评测与触发机制的误判，另一方面解决命名空间冒充、上下文膨胀等信任与成本问题；新 Skill 方向的热度反而居其次。

---

# Claude Code 社区动态日报（2026-11-25）

## 1. 今日速览

过去24小时内，发布仅更新一次，但 Issues 区依然活跃，关键问题集中在 Windows 工具执行、桌面端自动更新与远程会话冲突、以及长期运行内存泄漏三条线上。MCP 生态出现两个值得注意的方向：一是新版本引入 MCP 服务器技能（beta）与 `PreSkillShellCommand` 钩子，二是社区反馈 MCP 工具结果只传递 `structuredContent`，导致模型丢失字段。此外，hooks、插件与权限系统之间的交互问题继续堆积，说明扩展机制正在成为 bug 高发区。

## 2. 版本发布

**v2.1.332**（过去24小时内发布）

- **新增：来自 MCP 服务器的技能（beta）**。这类技能在 `/` 菜单中显示为 `server:skill`，其他技能保持原有命名。这意味着第三方 MCP 服务器可直接向斜杠命令菜单注入能力，是扩展生态的重要一步。
- **新增 `PreSkillShellCommand` 钩子事件**。可以在技能或命令加载时，拒绝其中的内联 shell 命令。需要注意的兼容性问题：在 2.1.331 及更早版本中，设置文件一旦引用该事件就会���到影响，因此升级时需要留意配置。

## 3. 社区热点 Issues（10 条）

1. **#14828 Windows：执行工具时控制台窗口闪烁**（67 条评论，38 👍）
   这是本日评论最多的 Issue，从 2025-12-20 持续至今未修复，问题会直接影响 Windows 用户的日常体验，社区耐心已接近临界。链接：https://github.com/anthropics/claude-code/issues/14828

2. **#95364 桌面端“隐身更新”会退出并重启应用，导致所有 Remote Control 会话丢失**（27 条评论，29 👍）
   自动更新与远程控制日常使用场景直接冲突：用户离开机器时更新一旦触发，所有会话就会中断。这是桌面端可靠性的严肃问题。链接：https://github.com/anthropics/claude-code/issues/95364

3. **#42765 OAuth redirect_uri 使用 localhost，而不是 127.0.0.1，违反 RFC 8252 §7.3**（26 条评论，58 👍）
   这是本次列表中点赞最高的一条，涉及认证合规以及 Linux 上的 MCP 认证流程。它明显损害了规范一致性，因此容易被更多开发者遇到。链接：https://github.com/anthropics/claude-code/issues/42765

4. **#18859 长时间空闲会话存在内存泄漏**（25 条评论，33 👍）
   这是横跨 macOS、core、MCP 与内存性能的长期问题，它影响“挂机式”使用模式，可能限制重度用户的会话时长。链接：https://github.com/anthropics/claude-code/issues/18859

5. **#99217 插件 `ui.render` 在 Remote Control 的桌面端和 iOS 视图中不绘制**（14 条评论，14 👍）
   插件 UI 在终端能显示，但远程客户端不显示，因此破坏了插件跨端一致性，是插件生态的信任问题。链接：https://github.com/anthropics/claude-code/issues/99217

6. **#112264 Code Mode：事件 nonce 用每进程密钥重新生成，导致每次恢复都从首个工具结果起重写 prompt cache**（3 条评论）
   这是今日新建的问题，直接指向成本与缓存命中率问题，对高频恢复会话的用户会产生费用影响，值得优先排查。链接：https://github.com/anthropics/claude-code/issues/112264

7. **#111999 MCP 工具结果只把 `structuredContent` 传给模型，导致 Gmail search_threads 丢失 snippet、date、labelIds、nextPageToken**（2 条评论）
   这是标为回归的问题。它与今日 MCP 技能 beta 发布形成对照，提醒开发者：MCP 数据通道中字段的完整性仍是薄弱环节。链接：https://github.com/anthropics/claude-code/issues/111999

8. **#109300 Auto 模式下，PreToolUse 钩子返回 `updatedInput` 后工具调用被拒，整批调用失效**（3 条评论，3 👍）
   hooks 与权限分类器的交互缺陷，会让钩子改写输入这一常见扩展用法变得不可靠，并连带影响同一批次中的其他调用。链接：https://github.com/anthropics/claude-code/issues/109300

9. **#81825 ralph-loop 在 2.1.x 上永不循环：Stop 钩子在本轮助手消息写入前读取 transcript，随后删除自身状态文件**（5 条评论）
   这是典型的时序竞态问题，会让基于 Stop 钩子的循环类工作流在 2.1.x 上整体失效，已标注为可复现。链接：https://github.com/anthropics/claude-code/issues/81825

10. **#102030 插件附加的 context 按约定对用户隐藏**（5 条评论）
    该问题揭示出一个设计层面的透明度与安全争议：`prompt.submit` 钩子可向消息注入用户不可见的内容，涉及信任边界，可能引发后续政策讨论。链接：https://github.com/anthropics/claude-code/issues/102030

## 4. 重要 PR 进展

过去24小时内更新的 Pull Request 为 **0 条**，本期无 PR 内容可汇总。

## 5. 功能需求趋势

- **团队与企业级协作**：#111973 提出部门内 Claude Code 会话共享团队记忆与配置，反映从个人工具向组织级能力演进的需求。
- **成本与缓存控制**：#112264（prompt cache 重写）、#104683（子会话回合结束时唤醒父会话带来的额外开销）显示社区对 token 成本与无谓唤醒的高度敏感。
- **IDE 与界面体验**：#101019 针对 VS Code 扩展中 AskUserQuestion 预览区过窄、文本被裁剪，属于 IDE 集成细节打磨类需求。
- **远程控制与跨端一致性**：#99217、#98171、#103373 等多条问题围绕 Remote Control 的渲染、状态标签与权限提示不一致，已经成为独立的需求簇。
- **扩展机制（hooks、插件、MCP）**：本日 Issues 中大面积涉及 hooks 时序、插件 UI 与 MCP 字段透传，说明社区正在深入使用扩展面，并期待其稳定性。

## 6. 开发者关注点

- **跨平台稳定性**：Windows 控制台闪烁（#14828）与 Linux/TUI 滚动缓冲区错乱（#103257）长期未解，平台差异仍是高频痛点。
- **桌面端后台行为不可控**：自动更新重启（#95364）、子会话唤醒父会话（#104683）、computer use 权限被静默拒绝（#103373），用户希望获得显式开关与可预期的默认行为。
- **hooks 与权限系统的可组合性**：PreToolUse 改写输入被拒（#109300）、Stop 钩子读取时序（#81825）、技能内联命令拒绝（新增 `PreSkillShellCommand`），显示出钩子的执行顺序与语义边界需要更清晰的契约。
- **MCP 数据完整性**：只传递 `structuredContent`（#111999）导致字段丢失，而新版本又在扩大 MCP 能力的接入面，因此数据通道的可靠性需要同步加强。
- **性能与成本**：内存泄漏（#18859）与 prompt cache 重写（#112264）是影响长期使用与费用的两类核心问题。
- **安装与打包链路**：npm 12 下插件安装报 `EALLOWREMOTE`（#98362），说明依赖生态升级会直接冲击插件分发。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-25）

## 1. 今日速览

今日 Codex 仓库无稳定版发布，仅推送了 4 个 `0.174.0-alpha` 预发布版本（alpha.3–alpha.6），更新说明均未给出具体内容。社区侧最突出的信号是 Windows 桌面端/ChatGPT Work 自 11 月 21 日更新后出现多项回归：本地/云端执行选择器消失、本地执行不可用、审批开关失效等多条高赞 Issue 集中发酵；同时一条关于将 IDE 扩展会话限定到当前工作区的功能请求以 144 个赞、65 条评论成为最热议题。

## 2. 版本发布

过去 24 小时内仅有预发布版本：

- `rust-v0.174.0-alpha.6`
- `rust-v0.174.0-alpha.5`
- `rust-v0.174.0-alpha.4`
- `rust-v0.174.0-alpha.3`

各版本 Release 说明均为版本号本身，未披露具体变更。链接：https://github.com/openai/codex/releases

## 3. 社区热点 Issues

1. **#25319 VS Code 会话应限定到当前工作区/项目**（65 评论 / 144 👍，创建于 2026-05-30）
   最热门的功能请求，要求 IDE 扩展按工作区隔离聊天会话。长期高互动且经维护者引导重新提交，说明会话管理是 IDE 用户的首要诉求。
   https://github.com/openai/codex/issues/25319

2. **#24295 桌面端远程主机侧栏应支持 Connection → Project → Thread 分组**（22 评论 / 21 👍）
   控制远程 Mac 主机时“按项目排序”不显示远程项目，影响多机协作场景。
   https://github.com/openai/codex/issues/24295

3. **#62733 Windows 蓝牙听写更新后失效**（19 评论）
   升级到 26.1117.3838.0 后语音输入报 `clock=unavailable`，此前版本正常，属明确回归。
   https://github.com/openai/codex/issues/62733

4. **#46182 桌面端已归档云任务缺少删除操作**（17 评论 / 16 👍）
   归档页只有“取消归档”，无法彻底删除任务，涉及数据管理预期。
   https://github.com/openai/codex/issues/46182

5. **#63042 Windows 本地/云端选择器在线时消失、离线时重现**（17 评论 / 11 👍）
   与 #62907、#62925、#63035、#63290 同属 11 月 21 日更新后的执行位置选择器回归，是当前最集中的问题簇。
   https://github.com/openai/codex/issues/63042

6. **#62907 Windows 本地执行选择器消失，SSH 仍被阻断**（14 评论 / 20 👍）
   描述 ChatGPT Work 中找不到“在您的电脑上”选项，即使开启完全访问 SSH 仍不通。
   https://github.com/openai/codex/issues/62907

7. **#62925 执行位置选择器消失但本地文件访问仍保留、回环服务不可达**（13 评论 / 4 👍）
   进一步佐证该回归的行为不一致性：新会话保留本地文件系统权限却无法访问本地回环服务。
   https://github.com/openai/codex/issues/62925

8. **#62899 iOS 打开 Codex 标签页崩溃**（12 评论 / 6 👍）
   iOS 27.2 Beta 上 SwiftUI 元数据 `EXC_BAD_ACCESS`，桌面端正常，影响移动端可用性。
   https://github.com/openai/codex/issues/62899

9. **#63434 GPT-6.2 SOL 在已批准任务中反复提前停止**（5 评论 / 5 👍）
   模型行为类缺陷，直接影响自主执行可靠性，值得模型侧关注。
   https://github.com/openai/codex/issues/63434

10. **#63819 [已关闭] CLI/TUI 子代理条目与活动链接无法打开详情**（7 评论）
    codex-cli 0.172.0 上的 TUI 回归，当日提出并已关闭，反映 CLI 侧修复响应较快。
    https://github.com/openai/codex/issues/63819

## 4. 重要 PR 进展

以下 PR 多由 `copyberry[bot]` 提交，主题集中在 Guardian V3 审批机制与 crate 依赖解耦。

1. **#63950 从 proxy crate 抽取共享网络策略类型**：为协议与功能配置 crate 提供更小的依赖，替代对网络代理 crate 的类型依赖。https://github.com/openai/codex/pull/63950
2. **#63949 为 Guardian V3 增加可选的影子接入**：新增默认关闭的 `features.guardianv3_shadow` 开关并忽略项目级配置，在 V2 处理自动审查时为符合条件的新线程做影子评估。https://github.com/openai/codex/pull/63949
3. **#63948 关联式 Guardian V3 审查采用重置检查**：检测根历史重置以避免旧批准失效。https://github.com/openai/codex/pull/63948
4. **#63941 证据路由未完成时允许 Guardian V3 先行审查**：避免因历史证据处理缓慢而阻塞审批。https://github.com/openai/codex/pull/63941
5. **#63940 无关上下文更新不再使 Guardian V3 结论失效**：修复无关线程目标更新触发二次评估的问题。https://github.com/openai/codex/pull/63940
6. **#63926 在 Guardian 审查中把加密子代理回复作为证据呈现**：防止审查压缩时丢弃此类证据。https://github.com/openai/codex/pull/63926
7. **#63937 将沙箱对 `codex-otel` 的依赖限制在 Windows**：依赖瘦身。https://github.com/openai/codex/pull/63937
8. **#63929 移除 `codex-tools` 对 connector 的依赖**：改由核心通过 `DiscoverableConnectorInfo` 传递连接器元数据。https://github.com/openai/codex/pull/63929
9. **#63922 让 MCP hooks 的上下文溢出阈值可配置**：为返回较大上下文的 hook（如会话启动记忆 hook）保留更多内联内容。https://github.com/openai/codex/pull/63922
10. **#63898 app-server 传输层移除对 `codex-core` 的生产依赖**：改用 `codex-utils-home-dir` 与 `codex-utils-path`，`codex-core` 仅保留为开发依赖。https://github.com/openai/codex/pull/63898

另有 #63897（插件技能命名空间解析移入 skills loader）、#63896（进程退出状态与退出码原子发布）值得关注。

## 5. 功能需求趋势

- **会话/工作区隔离与组织**：VS Code 会话绑定工作区（#25319）、远程主机按 Connection → Project → Thread 分组（#24295）、归档任务可删除（#46182），指向会话生命周期管理与多环境组织能力。
- **本地 vs 云端执行控制**：多条 Issue 围绕“在您的电脑上 / 云端”选择器、审批开关与本地回环访问，说明混合执行模式是桌面端核心使用路径。
- **平台稳定性回归**：Windows 听写、启动服务、AppX 部署错误（#50719、#62868）等系统集成问题反复出现。
- **模型行为可控性**：GPT-6.1/6.2 SOL 在 Ultra 启用或任务执行中出现提前停止、档位锁定（#61548、#63434）。
- **内部架构中台化**：PR 侧持续进行 crate 依赖解耦与 Guardian V3 审批管线打磨。

## 6. 开发者关注点

- **更新回归风险高**：11 月 21 日更新集中引发执行位置选择器消失、本地执行不可用、审批禁用等连锁问题，Windows 用户反馈密集且点赞集中。
- **环境一致性**：桌面端与 chatgpt.com 的项目会话清单不一致（#56790），跨端状态同步受关注。
- **自主执行可靠性**：模型提前停止已批准任务，削弱长时间自主工作信任度。
- **CLI/TUI 细节缺陷**：子代理详情无法打开（#63819）、FenceTracker 误闭合代码围栏（#63822）等影响日常终端使用。
- **数据管理诉求**：希望彻底删除归档任务而非仅取消归档。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-25）

## 今日速览

今日无新版本发布，社区动态集中在 **Agent/子代理可靠性**：多个 P1 级 Issue（子代理 MAX_TURNS 被误报为成功、generalist agent 无限挂起、Wayland 下浏览器子代理失败）仍在 `need-retesting` 状态。PR 侧以**安全加固**为主，数条 shell 包装器解包与命令替换检测、MCP OAuth 源一致性校验的 PR 集中更新，另有 `/fork` 会话分支、web_search 超时等新功能提案。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **#22323 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（P1，14 条评论）
   `codebase_investigator` 在未做任何分析就触达回合上限的情况下，仍返回 `status: "success"`。这是当日评论最多的 Issue，误导性成功状态会直接污染上层 agent 的决策与评测，属于正确性问题而非体验问题。[链接](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **#21409 Generalist agent 无限挂起**（P1，8 条评论，👍 8）
   一旦委派给 generalist agent 即永久挂起，甚至"创建文件夹"这类简单操作也会卡住，用户等待长达一小时。👍 数为本批最高，说明影响面广、可复现性强。[链接](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **#19873 零依赖 OS 沙箱 + 执行后意图路由**（P2，9 条评论）
   主张 Gemini 3 原生擅长 bash 工具链，应通过沙箱释放其 POSIX 组合能力，而非用工具抽象限制它。属于较大的架构方向提案。[链接](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **#21968 Gemini 不主动使用 skills 和子代理**（P2，7 条评论）
   用户反馈除非显式指令，模型几乎不会自发调用自定义 skill 与子代理——这让自定义能力形同虚设，是 agent 编排层的关键缺口。[链接](https://github.com/google-gemini/gemini-cli/issues/21968)

5. **#22745 AST 感知的文件读取、搜索与代码库映射评估**（P2，7 条评论）
   EPIC 级调研：用 AST 精确界定方法边界，单次调用完成读取，减少回合数。与 #22746（评估 tilth / glyph 等 AST CLI 工具）形成一组，指向检索效率优化。[链接](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **#22267 Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**（P2，5 条评论）
   全局/项目级配置对 Browser Agent 完全失效，用户失去了对浏览器子代理回合预算的控制手段。[链接](https://github.com/google-gemini/gemini-cli/issues/22267)

7. **#21983 Wayland 下浏览器子代理失败**（P1，4 条评论）
   Linux Wayland 环境下 browser subagent 启动即失败，属平台兼容性硬伤。[链接](https://github.com/google-gemini/gemini-cli/issues/21983)

8. **#24246 工具数超过 128 个时出现 400 错误**（P2，3 条评论）
   启用工具过多即触发 API 400，期望 agent 能智能裁剪工具范围。对依赖大量 MCP 扩展的用户是明确阻塞点。[链接](https://github.com/google-gemini/gemini-cli/issues/24246)

9. **#22672 Agent 应抑制破坏性操作**（P2，3 条评论，👍 1）
   模型在复杂 git 操作中会使用 `git reset` / `--force`，尽管存在更安全的替代方案。涉及安全边界与自主性权衡。[链接](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **#30294 Extensions Gallery 卡片信息过期**（4 条评论）
    `@azmartone67/dchub-mcp-server` 卡片显示 2.12.29 / 92 工具，实际仓库已到 2.12.54。虽为展示层问题，但反映扩展生态元数据同步机制缺失。[链接](https://github.com/google-gemini/gemini-cli/issues/30294)

其他值得一瞥：#23571（模型在随机目录生成临时脚本污染工作区）、#20079（`~/.gemini/agents/` 下的软链接不被识别为 agent）、#22598（希望 `/chat share` 可导出子代理轨迹以便评测）。

## 重要 PR 进展

1. **#30453 shell 包装器解包与 AST 分解前置化**（CLOSED，P1，security）
   加固 `@google/gemini-cli-core`，防止包装、前缀调用、复合、重定向、herestring、管道等形式的命令绕过策略检查。[链接](https://github.com/google-gemini/gemini-cli/pulls/30453)

2. **#30454 MCP OAuth 源一致性强制校验**（CLOSED，P1）
   落实 RFC 8414 §3.3 的 issuer 匹配，并在元数据发现与认证全流程校验 endpoint origin，同时展示端点源。[链接](https://github.com/google-gemini/gemini-cli/pulls/30454)

3. **#30451 检查 shell 包装器变体中的命令替换**（CLOSED）
   加固 `detectCommandSubstitution`、`stripShellWrapper` 与 `PolicyEngine`，与 #30453 互为补充。[链接](https://github.com/google-gemini/gemini-cli/pulls/30451)

4. **#30109 限制 grep_search 输出体积并引导模型收窄搜索**（OPEN，P2，help wanted）
   当前匹配数上限约束的是行数而非字节数，长日志/压缩行下单次调用可返回巨量文本。[链接](https://github.com/google-gemini/gemini-cli/pulls/30109)

5. **#30415 为 web search 增加超时并在中止时停止重试**（OPEN，P1）
   修复 #29594 的挂起问题：`google_web_search` 无超时，请求停滞或服务端持续返回可重试错误时 agent 会卡死在该工具调用上。[链接](https://github.com/google-gemini/gemini-cli/pulls/30415)

6. **#30464 新增 `/fork` 命令与 rewind 分支选项**（OPEN）
   通过 `/fork [name] [--stay]` 与 `/rewind` 中的"从此处分叉"实现非破坏性会话分支，底层复用 `ChatRecordingService.forkAsync()`。[链接](https://github.com/google-gemini/gemini-cli/pulls/30464)

7. **#30470 新增 `gemini-2.5-flash-image` 模型配置**（OPEN，P2）
   将 Nano Banana 图像生成模型纳入内置配置，可通过 `--model` 与 `/model` 选择。[链接](https://github.com/google-gemini/gemini-cli/pulls/30470)

8. **#30268 在 taint / build file 检查中尊重 YOLO 模式**（OPEN，security）
   使 `--approval-mode=yolo` 下的自主交互与 headless（`-y -p`）运行不再被风险检查打断。[链接](https://github.com/google-gemini/gemini-cli/pulls/30268)

9. **#29546 非交互模式下支持 `/skill-name` 激活技能**（OPEN，P2，help wanted）
   在非交互 slash 命令路径注册 `SkillCommandLoader`，使技能可在交互 UI 之外触发。[链接](https://github.com/google-gemini/gemini-cli/pulls/29546)

10. **#30473 从豁免检索字节预算中排除被驱逐的二进制负载**（OPEN）
    `collapseOlderFunctionResponses` 改用保留字节数计算旧检索回合体积，修复 #30446 的历史体积误计。[链接](https://github.com/google-gemini/gemini-cli/pulls/30473)

另注：#30469 为声称"良性 CI 权限探针"的 PR（仅加 `postinstall` 日志行与 evals 下 markdown 文件），修改 `package.json` 安装钩子的行为值得审慎对待，已被关闭。

## 功能需求趋势

- **子代理系统成熟化**：本批 Issues 中 `area/agent` 占绝对多数，需求从"能否用"转向"可观测、可控、可评测"——轨迹导出（#22598）、本地子代理 Sprint（#20195）、示例 curation（#18283）、codebase investigator 改进（#18282）。
- **上下文与检索效率**：AST 感知读取/搜索（#22745、#22746）、grep 输出限流（#30109）、工具数量上限处理（#24246）、历史字节预算（#30473）共同指向"如何在有限窗口内更精准地取用信息"。
- **安全与策略引擎**：shell 包装器解包、命令替换检测、OAuth 源校验、破坏性命令抑制（#22672）、YOLO 模式与策略检查的协调，构成一组连贯的信任边界议题。
- **平台兼容与配置一致性**：Wayland 支持、settings.json 覆盖失效，说明跨平台与配置体系仍有缺口。
- **新模型/多模态接入**：#30470 显示社区希望图像生成模型可直接通过 CLI 选择。
- **会话工作流**：`/fork` 分支、`/chat share` 轨迹分享，反映用户希望把 CLI 对话当作可管理、可回溯的工程资产。

## 开发者关注点

1. **挂起与静默失败最伤信任**：generalist agent 挂起（#21409）、web search 无超时（#30415）、子代理假成功（#22323）——失败必须快速且可见，而非无限等待或伪装成功。
2. **模型不主动使用已配置的能力**：skills 与 subagents 需显式指令才触发（#21968），自定义投入回报低。
3. **安全默认值 vs 自主性**：既要抑制 `git reset --force` 类操作，又要在 YOLO 模式下不打断自动化流程，策略引擎需要更精细的分级。
4. **工作区污染**：模型在随机目录生成临时脚本（#23571），影响干净提交，反映缺乏受控的临时文件策略。
5. **配置与扩展生态的一致性**：settings.json 覆盖失效、扩展卡片元数据过期，均属"配置写了但没生效"类体验问题。
6. **可观测性诉求上升**：子代理轨迹难以查看（#22598）与多个 `need-retesting` 标签并存，说明维护者与用户都需要更好的验证与评测手段。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-25）

## 1. 今日速览

今日发布 v1.0.116 正式版及 5 个预发布迭代（v1.0.116-1 ~ v1.0.116-5），集中在扩展清单 JSON Schema、ACP 编辑器上下文配置、全屏时间线交互与 PowerShell 允许规则修复。Issues 侧最受关注的是 agent checkpoint refs 污染仓库（#5323）、多根工作区支持（#1826）与 ACP 未暴露 Fusion 模型（#5354）；另有多个 MCP 协议兼容与 Windows 平台问题在今日更新或关闭。

## 2. 版本发布

**v1.0.116**（2026-11-25）正式版
- 为扩展清单（extension manifests）新增构建期 JSON Schema。
- 全屏时间线新增 "Jump to latest"，可回到最新输出并恢复跟随。
- 在 ACP 兼容编辑器中可为支持的模型选择上下文大小，且不改变已保存的默认值。
- 支持为 Copilot 启动的每个进程设置环境变量。

预发布迭代带来的具体变更：
- **v1.0.116-5**（Fixed）：`copilot help parallel-work` 不再提示"批准计划后可继续 Autopilot 并使用 /fleet"，计划批准流程同步移除该选项；ACP 客户端中的 Shell 审批提示改为显示待授权的命令本身而非其描述；已配置的 HTTP hooks 行为修正。
- **v1.0.116-4**（Added / Fixed）：新增扩展清单 JSON Schema；PowerShell 参数名含数字（如 `-n1`、`-ExpectedSha256`）的命令重新遵循 allow 规则，不再要求整脚本审批；文件夹信任提示选择 "Yes" 后立即关闭。
- **v1.0.116-3**（Added）：全屏时间线 "Jump to latest"；ACP 编辑器上下文大小选择；为 Copilot 启动的所有进程设置环境变量。
- **v1.0.116-2 / v1.0.116-1**（Added / Fixed）：当插件与独立 MCP server 连接同一 endpoint 时给出警告，并在 `/mcp` 中提示如何禁用其中一个；取消待处理提示不再等待活动刷新；重连 host 后不再把空闲会话误显示为忙碌；Unix 上前台任务取消行为修正。

链接: github.com/github/copilot-cli

## 3. 社区热点 Issues

1. **#5323 [OPEN] 增加禁用 agent checkpoint refs（refs/agents/*）的设置** — 评论 8，👍 6
   每个 agent turn 都会在用户仓库中创建以用户自身 git 身份署名的 checkpoint commit，污染仓库引用。这是高频工作流摩擦点，社区讨论活跃。
   github/copilot-cli Issue #5323

2. **#1148 [CLOSED] Copilot CLI 将触及的所有文件改为 CRLF 行尾** — 评论 8，👍 9
   Windows 下即使原文件为 LF 也会被改写为 CRLF，影响跨平台仓库的 diff 干净度。虽已关闭，但赞数最高，说明影响面广。
   github/copilot-cli Issue #1148

3. **#1826 [OPEN] 通过 .code-workspace 支持多根工作区** — 评论 6，👍 22
   `/ide` 连接 VS Code 时不读取 `.code-workspace` 中的额外根目录，导致上下文与指令文件缺失。22 个赞为今日最高，IDE 集成诉求明确。
   github/copilot-cli Issue #1826

4. **#2073 [OPEN] 频繁出现 "Request failed due to a transient API error. Retrying..."** — 评论 6，👍 13
   模型请求稳定性问题，反复重试直接影响可用性，属于长期未解的体验痛点。
   github/copilot-cli Issue #2073

5. **#2753 [OPEN] 插件 skills 未进入主 agent 的 available_skills** — 评论 5，👍 1
   `/skills` UI 能看到全部 18 个插件 skill，但系统提示中只注入内置 skill，插件生态的实际生效链路存在断点。
   github/copilot-cli Issue #2753

6. **#4888 [CLOSED] MCP 客户端在 2026-07-28 server/discover 成功后仍发送旧版 initialize** — 评论 5
   双版本 MCP SDK 服务器会锁定连接至新版协议，随后收到旧版请求而被拒。与 #5464 同属 MCP 协议协商问题，今日双双关闭，值得关注修复方向。
   github/copilot-cli Issue #4888

7. **#4755 [OPEN] 队列消息落在 turn 末尾时会话永久卡死** — 评论 4
   turn 结束后会话既不 idle 也不 running，无法接收输入且排队消息静默失效，只能重启恢复。属于会话状态机的严重缺陷。
   github/copilot-cli Issue #4755

8. **#4683 [OPEN] PowerShell ConstrainedLanguage 模式下每条命令都报 $host.SetShouldExit() 错误** — 评论 4，👍 1
   在 AppLocker/WDAC 管控的企业环境中，agent 执行的每条 shell 命令都会输出伪错误，企业部署场景的阻断性问题。
   github/copilot-cli Issue #4683

9. **#5354 [OPEN] ACP 未对外公布 Copilot Fusion 及其 tier 配置** — 评论 3，👍 11
   交互式 CLI 中可用 Fusion，但 ACP 仅暴露为 "Auto"，导致 T3 Code 等客户端无法展示 Fusion 能力。与今日 release 中 ACP 上下文配置改动同属 ACP 能力对齐议题。
   github/copilot-cli Issue #5354

10. **#5440 [OPEN] Agent Plugins 1.0 的 `.instructions.md` 与 `applyTo` frontmatter 被静默忽略** — 评论 2，👍 1
    按 1.0.0 schema 打包的插件中，skills、`mcp.json`、自定义 agent 能加载，但 `com.github.copilot/rules/` 下的指令文件失效，影响插件规范落地一致性。
    github/copilot-cli Issue #5440

补充关注（今日新建）：#5571 GHE.com 登录下 updater 报 "GitHub credential owner did not provide a token"；#5577 v1.0.115 远程 CLI 会话切换挂起，伴随内存增长与 auth-change 日志风暴。
链接: github/copilot-cli Issue #5571 · github/copilot-cli Issue #5577

## 4. 重要 PR 进展

过去 24 小时内仅有 2 条 PR 更新，且均为同一贡献者的 devcontainer 配置，无功能或修复类 PR 可总结：

1. **#4316 [CLOSED] Create devcontainer.json** — 作者 Pjrich1313，已关闭，无摘要内容。
   github/copilot-cli PR #4316

2. **#4428 [CLOSED] Add initial devcontainer configuration** — 作者 Pjrich1313，已关闭，评论 "LGTM"。
   github/copilot-cli PR #4428

说明：数据中不足 10 条 PR，故不补足条目。

## 5. 功能需求趋势

- **IDE / 编辑器集成**：多根工作区（#1826）、ACP 能力暴露（#5354，与 release 中 ACP 上下文配置呼应）、脚本化/非交互场景配置（#4454）。
- **仓库与 Git 卫生**：禁用 checkpoint refs（#5323）、行尾规范（#1148），反映开发者对 CLI 写操作侵入性的敏感。
- **插件与扩展生态**：插件 skill 注入（#2753）、Agent Plugins 1.0 规范兼容（#5440）、插件/MCP endpoint 冲突提示（已在 release 中落地）。
- **MCP 协议演进**：新旧协议协商（#4888、#5464）、被禁用 server 的误报策略警告（#5222）。
- **模型与提供商**：请求稳定性（#2073）、BYOK 多 provider 支持（#4976）、Fusion/Auto tier 配置（#5354、#5298）。
- **会话可靠性**：会话卡死（#4755）、云端存储失败时的本地回退（#3904）、远程会话切换（#5577）。
- **企业/受管环境**：PowerShell ConstrainedLanguage（#4683）、GHE.com 登录与更新（#5571）、组织策略警告（#5222）。

## 6. 开发者关注点

- **写操作需可关闭**：checkpoint refs 与 CRLF 改写均属 CLI 主动修改用户仓库，社区希望提供显式开关或保留原始状态。
- **稳定性优先于新功能**：API 瞬时错误重试、会话永久卡死、远程切换挂起三类问题直接中断工作流，是反馈中最强的痛点信号。
- **协议与规范的"已支持但未生效"**：插件 skills、`.instructions.md`、ACP Fusion 均表现为 UI 可见但实际链路缺失，容易造成排查成本。
- **企业环境的默认假设不足**：ConstrainedLanguage 与 GHE.com 场景暴露了 CLI 对受管环境的兼容缺口。
- **Windows 平台问题长期存在**：行尾、PowerShell 允许规则、终端键位设置（#5074）反复出现，今日 release 中 PowerShell allow 规则修复是对该方向的直接回应。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-25

## 1. 今日速览
今日无新版本发布，社区焦点集中在**计费与权限安全**上：意大利用户订阅支付全线被拒的 Issue 持续发酵（30 条评论），另有一个高严重级别的权限缺陷——`shell` 工具绕过了 `external_directory` 的询问规则。PR 侧以 v2 稳定性修复为主，同时有面向企业客户的权限策略增强（强制新鲜决策、禁用 Allow always）进入评审。

## 2. 版本发布
无。

## 3. 社区热点 Issues（10 条）

1. **#52958 意大利用户所有支付方式被拒，无法订阅 OpenCode Go** — 30 条评论、👍5，是今日讨论量最高的话题，涉及实体卡、Apple Pay、Stripe Link、虚拟 Mastercard 全部失败，属直接阻断付费转化的收入类问题。
   https://github.com/anomalyco/opencode/issues/52958

2. **#56288 [reproduced, severity:high] `external_directory` 询问规则对 shell 不生效** — 文件类工具受该规则约束，shell 却可绕过，构成安全边界不一致，已复现且标注高严重度。
   https://github.com/anomalyco/opencode/issues/56288

3. **#45442 [2.0, reproduced] 子代理无限循环约 50 分钟、364 次相同 grep 调用** — 缺乏循环保护导致 token 不可控消耗，对成本敏感用户影响大。
   https://github.com/anomalyco/opencode/issues/45442

4. **#55446 桌面/Web 侧边栏按项目分组会话（对标 Codex Projects）** — 25 条评论、👍14，是今日点赞最高的开放需求之一，反映会话规模增长后的组织痛点。
   https://github.com/anomalyco/opencode/issues/55446

5. **#40993 [CLOSED] 支持 Agent Plugins 标准（agent-plugins.org）** — 21 条评论、👍25，为今日最高赞；厂商中立的 Skill + MCP 打包规范，关闭状态值得关注后续落地方式。
   https://github.com/anomalyco/opencode/issues/40993

6. **#33300 桌面端语音/语音输入支持** — 17 条评论、👍15，长期开放的功能请求，交互方式层面的主要缺口。
   https://github.com/anomalyco/opencode/issues/33300

7. **#59461 [CLOSED] 启动崩溃（Error 134 / 缺少 SSE4.2）** — 新版 Bun 运行时要求 SSE4.2，老 CPU 用户直接无法启动，属兼容性回归。
   https://github.com/anomalyco/opencode/issues/59461

8. **#66299 [area/plugins, v2, Windows] 长驻 serve 进程中插件重载后 prompt 钩子静默失效** — 无任何错误日志，排障困难，影响插件生态可靠性。
   https://github.com/anomalyco/opencode/issues/66299

9. **#66133 [reproduced, area/sdk-api, v2] 嵌入式 SDK 宿主（`OpenCode.create` / `OpenCodeWorkerd.create`）不执行 automations** — 仅服务器进程会运行 `Automation.run`，影响嵌入式集成方。
   https://github.com/anomalyco/opencode/issues/66133

10. **#66112 [CLOSED, area/tui] 2.4.1 上 `/models` 仅显示 “Free models”** — 即使已通过 `/connect` 连接付费 provider 仍复现，直接影响付费模型可用性。
    https://github.com/anomalyco/opencode/issues/66112

## 4. 重要 PR 进展（10 条）

1. **#66441 feat(core): 托管策略可要求重新做权限决策并关闭 “Allow always”** — 面向企业客户（12 月 4 日承诺），含文档更新。
   https://github.com/anomalyco/opencode/pull/66441

2. **#66430 fix(session-ui): 在时间线中显示工具调用返回的图片** — 对应 Issue #21227 的场景，dogfooding 中发现。
   https://github.com/anomalyco/opencode/pull/66430

3. **#62014 fix(core): 创建会话时不再复用未迁移的 V1 session ID** — 关闭 #61947，修复 V1→V2 迁移遗留。
   https://github.com/anomalyco/opencode/pull/62014

4. **#66436 fix(ai): 模型未声明格式时将 freeform 工具按 JSON 发送** — 修正 `@opencode/ai` 中 “未设置=支持所有格式” 的误判。
   https://github.com/anomalyco/opencode/pull/66436

5. **#66422 fix(core): 运行失败或工具缺失时不再暂停 automations** — 仅对无法自愈的配置问题暂停。
   https://github.com/anomalyco/opencode/pull/66422

6. **#66409 fix(core): 进程在 ready 前死亡时让 shell 创建失败** — 关闭 #51351，修复 `Shell.create` 等待 ready 的挂起风险。
   https://github.com/anomalyco/opencode/pull/66409

7. **#66410 fix(core): 非 Git 目录不再列出 Git worktree** — 关闭 #57989，避免 `Worktree.refresh` 对非 Git 根目录误操作。
   https://github.com/anomalyco/opencode/pull/66410

8. **#66170 fix(mcp): 服务端结束列表变更流后重新打开** — 关闭 #66072，诊断归功于报告者。
   https://github.com/anomalyco/opencode/pull/66170

9. **#66438 feat(app): 将 Web 偏好设置保存在服务端** — 解决 localStorage 按 origin 隔离导致偏好丢失的问题（关闭 #66437）。
   https://github.com/anomalyco/opencode/pull/66438

10. **#66434 refactor(core): 将会话 API skill 文档拆分为目录** — 单个 19.1 KB 的 `session.md` 超过其余 15 个参考文件总和，拆分以降低检索噪声。
    https://github.com/anomalyco/opencode/pull/66434

## 5. 功能需求趋势
- **界面组织与多视图**：按项目分组的侧边栏（#55446）、会话拆分视图（#58245）显示多会话/多项目工作流成为主流诉求。
- **插件与扩展标准化**：Agent Plugins 规范（#40993）、自定义主题在 GUI 中不可见（#54235）、插件钩子失效（#66299）共同指向插件生态的成熟度需求。
- **多模态与输入方式**：工具结果图片在聊天 UI 展示（#21227）、桌面语音输入（#33300）。
- **桌面/IDE 深度集成**：原生 Android/iOS 模拟器工作区（#65480）、ACP 在 Zed 中的响应分片问题（#66347）。
- **平台细节打磨**：终端光标形状转义（#66256）、WSL sidecar 不加载 shell 启动文件（#61230）、Windows 路径比较（#66192）。

## 6. 开发者关注点
- **计费与订阅可用性**：支付被拒（#52958）与付费模型不显示（#66112）都直接影响付费用户，是转化链路上的关键断点。
- **安全与权限一致性**：shell 绕过 `external_directory` 规则（#56288）、未设置的 `{env:VAR}` 静默解析为空串（#33853，已关闭）反映配置层的隐式行为风险；#66441 则从企业策略侧收紧权限确认。
- **成本与失控保护**：子代理无限循环（#45442）缺少循环保护，是 token 消耗失控的典型场景。
- **跨平台可靠性**：Windows 上的路径比较、插件钩子、WSL 启动文件，以及老 CPU 缺少 SSE4.2 导致启动崩溃（#59461），构成明显的平台碎片化负担。
- **v2 生态一致性**：嵌入式 SDK 不执行 automations（#66133）、插件重载后静默失效（#66299）等问题，说明 v2 的 SDK 与插件运行时的生命周期管理仍需补齐。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-25

## 今日速览

今天 Pi 发布 v1.6.1，codemode 新增对 GitHub Copilot `gpt-6-luna-decisions` 与 Radius 决策模型的支持，并在返回结果中携带 `responseId`。社区侧，OpenAI Responses API 的推理参数问题（#12464）与 Anthropic SSE 解析器的 CRLF 分块缺陷（#10390）均已修复关闭，同时一批围绕会话生命周期、主题持久化和提示缓存的 PR 集中提交。

## 版本发布

**v1.6.1**
- **codemode 决策模型**：可在 `models.classify()` 中调用 GitHub Copilot 的 `gpt-6-luna-decisions` 和 Radius 决策模型，结果包含 provider 的 `responseId`。
- 链接：https://github.com/earendil-works/pi/releases/tag/v1.6.1

## 社区热点 Issues

1. **#12464 [CLOSED] openai-responses 仍发送 medium effort 与 configuration_update**（10 条评论）
   此前 #12361/#12437 修好了 `openai-codex`，但直连 `openai` provider（Responses API + API key）问题依旧，且 `additional_tools` 会在工具轮次压制推理。属于跨 provider 的参数一致性问题。
   https://github.com/earendil-works/pi/issues/12464

2. **#10390 [CLOSED] Anthropic SSE 解析器跨分块 CRLF 处理错误**（10 条评论）
   `\r` 与 `\n` 分属两个网络分块时被当作两个换行，待处理事件无 `data:` 字段即被冲刷，导致整轮中断。影响所有 Anthropic 长连接场景，属于高影响稳定性缺陷。
   https://github.com/earendil-works/pi/issues/10390

3. **#4399 [CLOSED] Windows 上 npm/pnpm 全局安装后无法运行**（9 条评论）
   Windows 11 + Node 26 环境全局安装后无明确报错直接退出。跨平台安装可靠性问题，已因重构关闭。
   https://github.com/earendil-works/pi/issues/4399

4. **#11071 [OPEN] 在 AssistantMessage 中保留结构化 provider 失败元数据**（8 条评论）
   提议为 HTTP 状态、provider 错误码和可选重试性建立共享类型契约，复用现有诊断机制。这是错误处理可观测性的基础性改造。
   https://github.com/earendil-works/pi/issues/11071

5. **#8829 [OPEN] wrapUIPromptContext 用展开复制导致 UI 原型方法丢失**（7 条评论）
   展开仅复制自有可枚举属性，类实例方法丢失；Pi 自带 TUI/RPC 恰好是普通对象所以未暴露。影响第三方扩展的 UI 兼容性。
   https://github.com/earendil-works/pi/issues/8829

6. **#11383 [OPEN] 粘贴 ANSI 残留转义序列，未闭合的括号粘贴会卡死编辑器**（5 条评论，1 👍）
   粘贴终端输出后转义体变成提示词字面文本；未闭合 bracketed paste 下 Ctrl+C 也失效。直接影响日常编辑体验。
   https://github.com/earendil-works/pi/issues/11383

7. **#12548 [CLOSED] Kitty 图片超出屏幕底部时丢失并清空回滚缓冲**（4 条评论）
   连续打印多图时，普通模式下首图消失、全屏模式下第二三张消失，且每张新图清空回滚。终端图形渲染的回归类问题。
   https://github.com/earendil-works/pi/issues/12548

8. **#12158 [OPEN] 将机器写入的状态移出 settings.json**（3 条评论，2 👍）
   建议把 `lastChangelogVersion` 等运行时键拆到 `state.json`。配置与状态混存会引发版本控制冲突与误改风险，今日 👍 数最高的开放需求。
   https://github.com/earendil-works/pi/issues/12158

9. **#12420 [OPEN] 会话中途从 Claude 切到 google-vertex 的 Gemini 4 报 400**（3 条评论）
   Vertex 要求 functionCall 部分携带 `thought_signature`，跨模型切换时缺失。多 provider 混用场景的真实阻碍。
   https://github.com/earendil-works/pi/issues/12420

10. **#12546 [CLOSED] dispose()/invalidate() 保留会话闭包导致无法 GC**（2 条评论）
    长期运行进程中托管的多个会话直到 OOM 才释放。对基于 SDK 构建多会话服务的开发者影响显著。
    https://github.com/earendil-works/pi/issues/12546

## 重要 PR 进展

1. **#12535 [OPEN] feat(ai): 新增 pi-image API**
   提供类似 `pi-messages` / `pi-decision` 的通用图像生成协议，并附各 provider 图像 API 能力矩阵。
   https://github.com/earendil-works/pi/pull/12535

2. **#12539 [OPEN] feat(ai): 在 GitHub Copilot 上跨 effort 与工具变更保留提示缓存**
   关闭 #12316，让 Copilot 复用 Anthropic/OpenAI 直连已有的缓存友好请求形式，降低重发成本。
   https://github.com/earendil-works/pi/pull/12539

3. **#12505 [OPEN] fix(ai): 在 openai-completions 中回放 Copilot 的 reasoning_opaque**
   修复 #12418，此前只保留 reasoning_text 而丢弃不透明值，影响推理上下文连续性。
   https://github.com/earendil-works/pi/pull/12505

4. **#12520 [CLOSED] fix: 通过魔数检测图片 MIME**
   修复 #12239，此前信任声明的 MIME 导致后续轮次 provider 拒绝回放图片。
   https://github.com/earendil-works/pi/pull/12520

5. **#12532 [CLOSED] fix(coding-agent): 自定义提示词下仍构建 tools/rules/docs 段落**
   原逻辑在 `customPrompt` 分支只设 preamble，替换为 `SYSTEM.md` 时丢失三段内容。
   https://github.com/earendil-works/pi/pull/12532

6. **#12543 [OPEN] 支持 AGENTS.local.md**
   在 `AGENTS.override.md` 之后、`AGENTS.md` 之前查找，便于本地私有指令不入库。
   https://github.com/earendil-works/pi/pull/12543

7. **#12523 [OPEN] fix(coding-agent): 所有模式下上报 models.json 错误**
   关闭 #12522，让 print/JSON/RPC 模式的运行时诊断也能读到 `modelRuntime.getError()`。
   https://github.com/earendil-works/pi/pull/12523

8. **#12538 [CLOSED] fix(tui): 慢速搜索下保持 @ 文件补全响应**
   递归搜索过慢时先展示直接匹配，避免旧前缀残留并正确替换。
   https://github.com/earendil-works/pi/pull/12538

9. **#12519 [CLOSED] fix: 渲染 codemode 数组元素约束**
   修复 #12156，`schemaToType` 此前遗漏数组 items 的约束，现递归渲染 `items.` 前缀。
   https://github.com/earendil-works/pi/pull/12519

10. **#12486 [OPEN] docs(coding-agent): 将 NVIDIA RTX 配方并入 llama.cpp 指南**
    把本地模型配置集中到一处，并新增 "Use tuned settings with a preset" 章节。
    https://github.com/earendil-works/pi/pull/12486

## 功能需求趋势

- **多 provider 与新模型接入**：EXAONE 2.5 内置 provider（#12481）、Copilot 决策模型账号可用性过滤（#12395）、Ant Ling 模型兼容性更新（#11800），反映模型矩阵扩张诉求。
- **跨 provider 行为一致性**：推理 effort 参数（#12464）、`responseModel` 字段补齐（#12488）、`thought_signature` 传递（#12420），社区希望不同后端遵循统一语义。
- **错误可观测性**：结构化失败元数据（#11071）、多模式上报 models.json 错误（#12523），错误信息正在成为一等公民。
- **扩展与 SDK 生态**：UI 原型方法丢失（#8829）、会话 GC（#12546）、主题持久化（#12468）、`StreamOptions.cwd`（#12480），均为第三方扩展与嵌入式集成打磨。
- **终端与编辑器体验**：ANSI 粘贴（#11383）、Kitty 图片（#12548）、@ 补全（#12538）、按键提示纠正（#12541/#12518）。
- **安装与供应链**：Windows 全局安装（#4399）、npm 12 的 `allowScripts` 声明（#12219）、Nix 中 nodejs 跟随 pinned nixpkgs（#12549）。

## 开发者关注点

- **平台与运行环境兼容**：Windows 全局安装、Nix 下插件 Node 版本冲突、npm 12 安装脚本策略，是入门链路的高频阻塞点。
- **长会话与资源管理**：提示缓存保留（#12539）、回合中压缩后重估输出预算（#12482）、dispose 后内存滞留（#12546），指向长期运行与成本控制。
- **配置与状态卫生**：settings.json 混入机器写入状态（#12158）、models.json 拼写错误静默（#12523），开发者希望配置错误能显式暴露且可版本控制。
- **模型切换的连续性**：中途换模型易触发 provider 侧 400 或丢失推理签名，跨模型会话的鲁棒性仍需补强。
- **工具调用效率**：Pi Durable 提议在系统提示中引导模型批量发起无依赖工具调用（#12471），以减少往返。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-25）

## 1. 今日速览

v1.0.0-preview.2 发布，接入 Qwen4-Max（1M 上下文、图像与视频输入），并新增订阅额度重置倒计时与 `/upgrade` 命令。同期 main 分支 CI 告警密集刷屏，Managed Agent gate 与 E2E 测试出现多处失败，CI 噪音已占据评论区前列。安全类问题出现两起高优先级反馈：headless 模式越权读文件、会话日志明文落盘 API key。

## 2. 版本发布

**v1.0.0-preview.2**（[Release](https://github.com/QwenLM/qwen-code/releases)）
- 订阅目录新增 **Qwen4-Max**，支持 1M 上下文窗口及图像、视频输入。
- 订阅额度耗尽时展示重置倒计时，并新增 `/upgrade` 命令用于打开订阅方案页。
- 订阅请求开始携带 QwenCode 用户标识（原文截断）。

## 3. 社区热点 Issues（Top 10）

1. **#18379 [P1/security] `qwen -p` 未指定 `--approval-mode` 时可读取工作区外文件**（[链接](https://github.com/QwenLM/qwen-code/issues/18379)）
   在 trusted folder 下，同一 `read_file` 请求在 `--approval-mode=default` 被拒绝，无该参数时被放行。属权限模型不一致，优先级 P1，影响 headless 自动化场景的信任边界。

2. **#18165 会话日志明文记录 API key**（[链接](https://github.com/QwenLM/qwen-code/issues/18165)）
   更换 Token Plan key 时，工具输出中的完整 key 经 `chats/<会话>.jsonl` 明文持久化，且在多字段重复出现。敏感信息落盘风险，建议优先加脱敏。

3. **#15686 Active Goal 阻塞普通用户输入**（[链接](https://github.com/QwenLM/qwen-code/issues/15686)）
   Goal 运行期间，Enter steer 消息与粘贴文本无法在下一个安全点送达。交互体验核心缺陷，已挂 need-discussion，讨论 7 条。

4. **#16708 FileChangedWatcher 永久漏掉新建子目录中的文件**（[链接](https://github.com/QwenLM/qwen-code/issues/16708)）
   chokidar 的“先快照后监听”间隙导致静默丢事件，非延迟而是永久丢失。影响 hooks/events 与文件操作可靠性。

5. **#12928 内部模型请求硬编码 temperature**（[链接](https://github.com/QwenLM/qwen-code/issues/12928)）
   对 `gpt-6-astra` 的辅助分类请求固定附加 `temperature`，破坏用户/服务端配置语义。属模型兼容性问题的典型样本。

6. **#18149 提案：扩大 Action parking 范围（无状态 Harness Phase 4 后续）**（[链接](https://github.com/QwenLM/qwen-code/issues/18149)）
   当前仅 park 冷恢复可接受的等待，多数真实 Session 仍常驻。涉及会话管理与资源占用，讨论 10 条，是架构演进主线之一。

7. **#18253 Managed Agent gate 失败：ClassSizeRatchetTest**（[链接](https://github.com/QwenLM/qwen-code/issues/18253)）
   17 条评论，属持续出现的 main CI 失败。反映门禁测试对类体积的约束正在频繁触发。

8. **#18350 Managed Agent gate 失败：HostedWorkflowFaultGatesIT（+158 更多）**（[链接](https://github.com/QwenLM/qwen-code/issues/18350)）
   单条 Issue 聚集 158 个以上失败用例，表明 hosted 故障注入网关一处失败会批量产生 CI 告警。

9. **#18298 Web Shell 将未设置的布尔项渲染为 OFF**（[链接](https://github.com/QwenLM/qwen-code/issues/18298)）
   对 schema `default` 为 `undefined` 的设置（如 `experimental.unifiedAgentLoop`），UI 掩盖了各端各自取默认值的事实，易造成配置误判。已 CLOSED。

10. **#13845 飞书资源 401 后保留热 tenant token 缓存**（[链接](https://github.com/QwenLM/qwen-code/issues/13845)）
    入站图片/文件返回 401 不会失效缓存，后续消息复用被拒 token 直到过期。第三方集成错误恢复缺陷。

## 4. 重要 PR 进展（Top 10）

1. **#18351 feat(qwen): 基于 Harness 内核的 Qwen Code CLI 包**（[链接](https://github.com/QwenLM/qwen-code/pull/18351)）
   在 #18314 引入的 Harness 内核之上新增产品包，内核已提供 agent loop、TUI、headless、ACP 等入口。为下一代 CLI 的产品化铺路。

2. **#18155 feat(managed-agent): 受限 Hosted Workspace Shell**（[链接](https://github.com/QwenLM/qwen-code/pull/18155)）
   opt-in 前台 Shell，Bubblewrap 为每条命令提供只读私有视图，绑定已注册 Workspace 根目录，落于持久化、Session 独占的 Linux runtime。

3. **#16891 fix(managed-agent): 统一 serverRevision 上限**（[链接](https://github.com/QwenLM/qwen-code/pull/16891)）
   OpenAPI 契约、管理服务计数器与持久化 `count()` 规则三处上限不一致（2^53-1 对比更窄区间），统一以消除边界差异。

4. **#18378 fix(managed-agent): 隔离内嵌启动失败**（[链接](https://github.com/QwenLM/qwen-code/pull/18378)）
   接续 #18344，Managed Agent 初始化失败不再连带阻断宿主其他路径，改为在独立子 Spring 上下文中启动。

5. **#17823 fix(agents): transcript 读取错误后 A2A 任务仍可恢复**（[链接](https://github.com/QwenLM/qwen-code/pull/17823)）
   文件系统错误导致回复查找失败时返回可重试 JSON-RPC 错误 `-32012`，恢复后任务可继续。

6. **#18009 feat(cli): 跨 workspace 保留与恢复 worktree 快照**（[链接](https://github.com/QwenLM/qwen-code/pull/18009)）
   实现 P6 U4/U5：按计数保留 held chats，重开时按 owner 重建 worktree，覆盖 trusted 的主/次 workspace。

7. **#18365 feat(web-shell): 可选 session adapter**（[链接](https://github.com/QwenLM/qwen-code/pull/18365)）
   为嵌入 WebShell 的宿主提供 adapter，接管独立会话创建、历史恢复与 prompt 提交，共用同一 UI。

8. **#18376 feat(web-shell): ManagedSessionsPage 切入共享 ChatSurface（3c.3）**（[链接](https://github.com/QwenLM/qwen-code/pull/18376)）
   移除页面内重复的消息列表、工具审批、提问等实现，统一到后端中立的 chat surface。

9. **#18370 fix(ci): 对 authority-surface PR 与凭据探测 fail closed**（[链接](https://github.com/QwenLM/qwen-code/pull/18370)）
   自动分诊/评审预检从“匹配坏短语”改为判断 PR 实际可达面，收紧外部贡献的自动执行权限。

10. **#18373 / #18366 perf(release): 浅克隆与内联 bootstrap**（[链接](https://github.com/QwenLM/qwen-code/pull/18373)、[#18366](https://github.com/QwenLM/qwen-code/pull/18366)）
    发布准备改为单提交浅克隆、仅取 version tag 引用；以短内联步骤替换自引用 composite action，减少整仓归档下载。

## 5. 功能需求趋势

- **Managed Agent / Hosted 运行面**：Workspace Shell 受限执行、Action parking 扩展、启动失败隔离、A2A 可恢复性，是当前最集中的工程投入方向。
- **会话与状态管理**：worktree 快照保留/恢复、web-shell session adapter、Managed 会话页统一，指向“可恢复、可嵌入的会话层”。
- **下一代 CLI 架构**：Harness 内核 + 产品包分层（#18351），配合 headless、ACP 等入口模式。
- **模型能力接入**：Qwen4-Max 的 1M 上下文与图像/视频输入进入订阅目录；同时出现内部请求硬编码参数（#12928）的兼容性诉求。
- **安全与权限模型**：headless 审批模式一致性、日志脱敏、CI fail-closed 策略，安全议题密度明显上升。
- **CI 可观测性**：provisional 报告与批量失败聚合（#18252、#18350）显示门禁噪音已成为独立需求。

## 6. 开发者关注点

- **权限语义不一致最痛**：同一操作在 `--approval-mode=default` 与无参数下结果相反（#18379），直接损害对 headless 自动化的信任。
- **凭据卫生**：会话日志明文保存 key（#18165）且多字段重复，用户期望的是默认脱敏而非事后清理。
- **交互与 Goal 机制摩擦**：Active Goal 期间输入被扣留（#15686）、Web Shell 键盘重复触发取消（#18374），交互细节仍有明显坑点。
- **静默失败类缺陷**：文件监听漏事件（#16708）、飞书 token 缓存不复位（#13845）、未设置布尔项显示为 OFF（#18298），共同点是缺乏可见反馈。
- **CI 告警疲劳**：大量 bot 生成的 main CI 失败 Issue（含 +73、+158 用例聚合）占用评论热度前列，社区需要更准确的失败归因与去重。
- **第三方与模型兼容性**：固定 temperature 注入（#12928）等隐式参数覆盖，仍是集成方高频反馈来源。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-25

> 数据来源：github.com/Hmbown/DeepSeek-TUI｜说明：本期仅抓到 1 条更新 Issue 与 7 条更新 PR，无法满足"各挑选 10 个"的数量要求，以下按实际数据全量呈现，不做虚构补充。

## 1. 今日速览

0.10.5 版本进入收尾：发布 PR #7560 已提交但被作者明确标注"创始人确认发布前不得合并"，配套的 changelog 去重整理（#7559）与 Wave 2 集成分支（#7558）已关闭合并。同时外部贡献者持续推进多模型网关描述符接入，今日新增 Synap，前一日另有 onomeo、UberLLM。工程侧最实质的动作是 PR #7561 针对 R5 审计遗留缺陷的修复。

## 2. 版本发布

过去 24 小时无新 Release。0.10.5 发布流程处于待批准状态（见 PR #7560）。

## 3. 社区热点 Issues

本期仅 1 条更新 Issue，按实际列出：

1. **#7344 [CLOSED] TUI 退出后 GNOME Terminal 背景残留 Nord 主题色** — https://codewhale-hq/Codewhale/issues/7344
   - 重要原因：属于 `area:install` + `area:tui` + `os:linux` 交叉问题，退出后终端配置残留 `#ECEFF4` 背景与 `#2E3440` 前景，未恢复用户原有 profile，直接影响 Linux 用户的日常终端体验。
   - 社区反应：6 条评论、0 赞，讨论有一定密度但赞同度低，说明问题真实存在但影响面集中于特定终端环境。状态已关闭。

## 4. 重要 PR 进展

本期共 7 条更新 PR，按实际列出：

1. **#7561 [OPEN] 修复 R5 持久性、grep 超时取消与有界 review 读取缺陷** — https://codewhale-hq/Codewhale/pulls/7561
   外部贡献者 NieZhuZhu 提交，处理 #7461 审计中剩余的 R5 缺口（如 R5-L10-01，`crates/util` 相关），并补充行为回归测试。今日唯一处于 OPEN 状态的 PR，工程质量关注点最高。
2. **#7560 [CLOSED] chore(release): 切出 0.10.5** — https://codewhale-hq/Codewhale/pulls/7560
   将 Unreleased 合并笔记归档为 `## [0.10.5] - 2026-11-24`，含 compare 链接。作者注明打 tag 与发布由创始人执行，合并需其确认。
3. **#7559 [CLOSED] docs(changelog): 整合并去重 0.10.5 Unreleased 笔记** — https://codewhale-hq/Codewhale/pulls/7559
   修复并行合并导致的 changelog 混乱：曾累积 11 个 `### Fixed`、6 个 `### Added` 标题及 24 条完全重复条目，现恢复每类单一标题。
4. **#7558 [CLOSED] feat(0.10.5): DSH 0.2.2 宿主服务、插件级设置、遥测诚实性与 Wave 2 运行时** — https://codewhale-hq/Codewhale/pulls/7558
   0.10.5 的 Wave 2 集成分支，rebase 到主干后丢弃了与当日已落地切片重复的提交（桌面浏览器准入、fleet 方法门控、pet 遥测），仅保留其说明。
5. **#7340 [CLOSED] feat(providers): 新增 Synap 描述符** — https://codewhale-hq/Codewhale/pulls/7340
   通过现有兼容宿主描述符路径接入 `https://synap402.com/v1`，模型 ID 与 token 价格以 `GET /v1/models` 实时发现为准。
6. **#7525 [CLOSED] feat(providers): 将 onomeo 作为内置描述符行** — https://codewhale-hq/Codewhale/pulls/7525
   与 WorldRouter (#7488)、LLMTR (#7450)、Opper (#7131) 同形态，onomeo 为 OpenAI 兼容网关，汇聚 Claude、GPT、Gemini 与 DeepSeek 模型。
7. **#7285 [CLOSED] feat(providers): 将 UberLLM 作为内置描述符行** — https://codewhale-hq/Codewhale/pulls/7285
   同为兼容宿主描述符行，一把 key 接入 OpenAI、Anthropic、Google、DeepSeek 等模型。

## 5. 功能需求趋势

- **第三方兼容网关接入成为最密集的贡献方向**：Synap、onomeo、UberLLM 三条 PR 连续落地，且均采用"内置描述符行"的统一模式，说明社区已形成稳定的接入范式（含 #7488、#7450、#7131 等前序参照）。
- **发布工程与 changelog 治理**：#7559 与 #7560 反映出并行合并带来的文档熵增，社区开始主动做规范化。
- **跨平台终端体验（Linux/GNOME Terminal）**：仅有的 Issue 指向该方向，但样本不足以判断整体趋势。

## 6. 开发者关注点

- **代码质量与审计闭环**：R5 审计遗留项被外部贡献者跟进并补齐回归测试，说明审计结论正在被系统性消化。
- **发布流程纪律**：release PR 显式设置"创始人批准前不合并"的门槛，且 tag/发布权限保留，体现对发布节奏的严格控制。
- **外部贡献者活跃**：7 条 PR 中 4 条标注 `contributor:external`，主要集中在 providers 与 localization 领域。
- **痛点信号**：终端状态未正确恢复这类"退出副作用"问题虽已关闭，但属于容易被忽视的用户体验细节，建议关注是否有同类残留。

---
*注：本期数据量有限（1 Issue / 7 PR / 0 Release），趋势判断基于单日样本，建议结合后续多日数据交叉验证。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*