# AI CLI 工具社区动态日报 2026-10-31

> 生成时间: 2026-10-31 15:45 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析 · 2026-10-31

## 1. 生态全景

当前 AI CLI 工具已进入**以稳定性、可靠性与集成深度竞争**的阶段，而非单纯的功能堆砌：多数工具的社区讨论从“有没有某功能”转向“配置为什么不生效、会话为什么丢失、失败为什么被掩盖”。**跨平台（尤其 Windows/WSL/Wayland）体验裂痕**与**版本更新引发的回归**是横跨所有工具的共性痛点。同时，**上下文/用量/成本管理**（配额池、缓存 TTL、上下文轮转、工具输出污染）成为最集中的功能与缺陷交汇点。少数工具（Qwen Code、DeepSeek TUI）当日主线甚至完全被 CI/主分支健康度占据，说明工程基建已成社区活跃度的重要一极。整体看，生态正从“可用”迈向“可预测、可恢复、可审计”。

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release（24h） | 当日主线 |
|---|---|---|---|---|
| Claude Code | 10 条热点（多条 stale 关闭） | **0** | v2.1.316 | 桌面端对齐、Windows/WSL 回归、MCP 权限 |
| OpenAI Codex | 50 条 | 28 条（均 copyberry[bot]、CLOSED） | 无 | IDE 扩展稳定性、模型行为、浏览器接入回归 |
| Gemini CLI | 10 条热点 | 10+ 条（多条 fix 进行中） | nightly v0.67.0 | Agent 挂起/虚假成功、会话恢复 |
| GitHub Copilot CLI | 10 条热点 | 3 条（2 CLOSED / 1 OPEN） | 无 | 容器化分发、上下文轮转复发 |
| Kimi Code CLI | 0 | 0 | 无 | 无活动 |
| OpenCode | 10 条热点 | 10+ 条 | **v2.2.5 + v2.2.4** | 网络适配、计费限流、TUI 打磨 |
| Pi | 10 条热点 | 10+ 条（大量 CLOSED） | 无 | Windows 终端兼容、工具搜索排序 |
| Qwen Code | 10 条热点 | 10+ 条 | 无 | **CI 稳定性、测试基建** |
| DeepSeek TUI | 5 条（全部） | 24 条（展示 15 条） | 无 | 主分支编译失败、TUI 渲染/本地化 |

> 说明：Claude Code 当日 PR 为 0，是唯一“Issue 热、PR 冷”的工具；Codex 的 28 条 PR 全部为机器人提交且已关闭，实质人工推进有限；DeepSeek TUI 的 PR 数（24）为单日最高，但多集中在渲染细节与本地化打磨。

## 3. 共同关注的功能方向

**① 配置“写了但不生效”——跨工具最强共性**
- Codex：`sandbox_mode`/`default_permissions` 被忽略（#58507）、权限选择器消失（#42599）
- Gemini CLI：`settings.json` 覆盖被忽略（#22267）、`contextManagement` 阈值回落默认（#30068）
- Pi：Git 包固定 SHA 后不更新 checkout（#10758）
- Copilot CLI：托管设置空允许列表误删用户 MCP（#4419）

**② 会话/上下文生命周期与成本控制**
- Copilot CLI：上下文轮转崩溃在修复关闭后仍复发（#5205→#5312）、按 cache TTL 自动压缩建议（#4724）、二进制污染历史（#4097）
- Claude Code：组预算池（v2.1.316）、周限额重置可配置（#76272）、流式超时浪费 token（#47698）
- Gemini CLI：配额中断后会话恢复（#29799、#29800）
- OpenCode：单模型限额外溢至全部模型（#49014）、按请求套餐被单 prompt 耗尽（#48330）

**③ 失败不能被正确暴露（静默失败）**
- Gemini CLI：subagent 达 MAX_TURNS 却报 success（#22323）、generalist agent 无限挂起（#21409）、ripgrep 失败被记为成功（#29779）
- Codex：任务声称“将继续”却停手（#50771）
- Claude Code：Ctrl+C 静默清空输入无确认（#59408）

**④ 跨平台/终端兼容**
- Pi：Windows 终端讨论帖 94 评论（#7547）、颜色查询回显泄漏（#10256）
- Claude Code：WSL2 听写失效（#93782）、PowerShell 预检（#102430）
- Codex：Linux/Wayland 扩展冻结（#57759）、WSL2 语音（#47370）
- Gemini CLI：Wayland 下 browser subagent（#21983）

**⑤ IDE/编辑器深度集成**
- Codex：Ghost Text 行内建议 #11898（**50 👍，当日最高赞**）
- Gemini CLI：ACP 客户端运行中轮次干预（#29901）
- Claude Code：桌面端自定义主题对齐 CLI（#79305，84 👍）

**⑥ 容器化/低门槛分发**
- Copilot CLI：#55（23 👍）+ 镜像发布 PR #5307/#5308 + 冒烟修复 #5310，是唯一有完整实现路径的分发诉求。

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|
| **功能侧重** | 企业网关/预算、桌面+CLI 对齐、MCP 生态 | IDE 深度集成、跨设备/远程、模型路由 | Agent/subagent 架构、沙箱执行提案 | 容器化、终端集成、企业/MCP | 桌面+终端、多 provider、计费 | 终端 TUI、多模型接入、安装自更新 | daemon/serve、Web Shell、记忆 | TUI 渲染、本地化、多语言 |
| **目标用户** | 团队/企业（预算池、权限） | Pro/企业、IDE 重度用户 | Agent 框架探索者 | 企业、无 Node 环境用户 | 多模型付费用户 | 终端极客、多 provider 用户 | 自托管/服务化集成方 | CJK/本地模型用户 |
| **技术路线** | 闭源 + 平台化（apps 网关） | 闭源 + 桌面/移动/IDE 多端 | 开源 + nightly 快迭代 | 闭源 + 容器化服务端形态 | 开源 + v1→v2 大重构 | 开源 + 扩展生态 | 开源 + 自托管 runner/CI 重投入 | 开源 + 多语言/平台扩展（HarmonyOS） |
| **当日信号** | 版本先行、PR 静默 | 机器人 PR 主导、人工少 | 维护者集中修“中断恢复” | 分发路线推进中 | v2 行为回归集中暴露 | Windows 治理 + 海量细节修复 | 被 CI 拖累，功能侧稳推 | 主分支阻塞 + 渲染打磨 |

**关键差异判断**：Claude Code 与 Codex 走**平台化/闭源 + 多端整合**路线，问题多集中于“跨端一致性”；OpenCode、Pi、Gemini CLI、Qwen Code 走**开源 + 社区驱动快速迭代**，问题多集中于“回归与配置生效”。Gemini CLI 是唯一在当日集中修复“会话被打断后状态丢失”这一类的工具，治理思路最系统；Copilot CLI 是唯一把容器化分发推进到 PR 阶段但尚未落地的工具。

## 5. 社区热度与成熟度

**热度梯队（按当日有效讨论量）**
- **第一梯队**：OpenAI Codex（50 Issues / 28 PR）、DeepSeek TUI（24 PR）、Pi（94 评论单帖 + 海量 PR）、OpenCode（双版本 + 高热 Issue）、Gemini CLI（多 fix 并行）
- **第二梯队**：Claude Code（Issue 热但 PR=0）、Qwen Code（CI 主导）、Copilot CLI（集中但量少）
- **静默**：Kimi Code CLI（零活动）

**成熟度信号**
- **趋于成熟**：Claude Code（版本节奏稳定、stale 清理机制运转，但存在“以 stale 关闭掩盖真实缺陷”风险）、Codex（机器人 PR 流水线化，但人工修复可见度低）。
- **快速迭代/高摩擦**：OpenCode（v1→v2 回归集中：`/connect` 忽略 `enabled_providers` #54145、Copilot 请求膨胀 #48330）、Pi（Windows 长期欠账 + 非标准安装自更新问题）、Gemini CLI（nightly 高频，Agent 层稳定性未收敛）。
- **工程健康度承压**：Qwen Code（#14724 达 104 评论的 main CI 长期失败，迫使每个 PR 重新归因）、DeepSeek TUI（#7148 主分支无法编译，外部贡献完全阻塞）——**这两者的“高活跃”部分是基建故障驱动的被动活跃，需与功能活跃区分**。

## 6. 值得关注的趋势信号

1. **“可信的失败”成为新竞争维度**：Gemini CLI 的虚假 success（#22323）、Codex 的提前停手（#50771）、Claude Code 的静默清空输入（#59408）共同指向——**Agent 可靠性已从“能否完成”转向“失败是否可见、可恢复”**。对开发者而言，选型时应重点评估工具的错误暴露与恢复机制，而非仅看功能列表。

2. **成本治理从“限额”走向“精细化”**：Claude Code 组预算池、Copilot 按 cache TTL 压缩、OpenCode 的限额外溢缺陷——**上下文与 token 的经济性正成为一等公民**。建议关注各工具是否提供可观测的用量计量与可配置策略。

3. **版本更新即风险，回滚通道成刚需**：Codex 浏览器接入（#57641）、IDE 扩展冻结（#57759）可降级规避；Claude Code WSL 2.1.268→2.1.269 回归。**决策者应优先选择具备明确 changelog 与快速回滚能力的工具**，并在生产环境锁定版本。

4. **关闭流程透明度受质疑**：Copilot #5205 以“completed”关闭但无关联提交/说明，用户在 1.0.105 复现并新开 #5312；Claude Code 大量 stale 关闭含数据丢失/MCP 缺陷。**“已关闭”不等于“已修复”**，需交叉验证发布说明。

5. **开源工具的 CI/基建债务正在反噬贡献者体验**：Qwen Code、DeepSeek TUI 的教训表明，**自托管 runner、gate 稳定性、依赖供应链（CVE 审计、fast-uri）** 已成为开源 AI CLI 不可回避的工程议题。对企业采用者，评估项目的 CI 健康度可作成熟度代理指标。

6. **本地/离线与多 provider 是开源阵营的差异化护城河**：Pi 一次性接入 6 家 provider（#11370）、DeepSeek TUI 修复无密钥 Ollama（#7115）、OpenCode 原生 Android 构建（#60903）——**“厂商中立 + 本地可跑”是闭源工具短期难以覆盖的空间**，适合对数据主权与模型选择有要求的团队。

7. **国际化与 CJK 渲染是易被忽视的体验短板**：DeepSeek TUI 的全角标点 URL（#7158）、Zh-Hans 术语统一（#7150）、Pi 的 Unicode 分词（#11037）显示**中文/东亚用户的终端体验仍是打磨洼地**，对中文团队选型有实际参考价值。

---

*注：本报告严格基于所供各工具日报内容，未补充外部数据；部分工具 PR 数为“展示条数”而非全量（如 DeepSeek TUI 24 条中展示 15 条），已在表中标注。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-31）

> 数据说明：PR 列表中的评论数字段均为 `undefined`，因此 PR 部分无法按评论数真实排序，以下“排行”依据 Issue 讨论热度、更新活跃度及与高热度 Issue 的关联度整理；Issues 部分有真实评论数。

---

## 1. 热门 Skills 排行（PR）

| 排序 | PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [#1742 fix(mcp-builder)](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0.0`：`streamablehttp_client` 重命名为 `streamable_http_client`，自定义 header 改由 `create_mcp_http_client` / `http_client` 配置 | 直接修复高热度 Issue #1390 所在的 mcp-builder 工具链；2026-10 仍在更新 | OPEN |
| 2 | [#1298 fix(skill-creator)](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger 评测、修复 Windows 下 `select()` 管道失败、运行时失败被误判为非触发 | 关联 Issue #556（评测触发率 0%）这一核心评测可信度问题 | OPEN |
| 3 | [#1681 fix(skill-creator)](https://github.com/anthropics/skills/pull/1681) | 支持 `package_skill.py` 直接执行，修复 `ModuleNotFoundError` 与用法路径 | 官方核心工具 skill-creator 的可用性问题，2026-10-24 仍在更新 | OPEN |
| 4 | [#1997 fix(skill-creator)](https://github.com/anthropics/skills/pull/1997) | 修正 `parse_skill_md` 对 YAML frontmatter 标量的解析（引号剥离、续行拼接导致元数据与 SKILL.md 不一致） | 与 Issue #2064（description 只写“做什么”不写“何时用”）呼应，指向 frontmatter 规范 | OPEN |
| 5 | [#1245 Notion 规格转实现 + 简历审计](https://github.com/anthropics/skills/pull/1245) | 将产品/技术规格拆解为 Notion 可执行任务（含验收标准）；另含 quantitative-resume-auditor | 工作流自动化 + 垂直领域审计，2026-10-15 更新 | OPEN |
| 6 | [#525 pyxel 复古游戏开发](https://github.com/anthropics/skills/pull/525) | 用 Python（Pyxel）创建、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查 | 提交最早（2026-03）且持续更新至 2026-10-23，长尾关注度最高 | OPEN |
| 7 | [#514 document-typography](https://github.com/anthropics/skills/pull/514) | 文档排版质检：孤词换行、标题孤行（widow）、编号错位 | 面向 AI 生成文档的通用质量问题 | OPEN |
| 8 | [#1771 proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 智能合约静态分析，并将审计证明锚定到 TON 区块链 | Web3 垂直场景，属于第三方品牌 Skill 入驻 | OPEN |

补充：本次 PR 列表中 **无一条为 merged**，全部为 OPEN。

---

## 2. 社区需求趋势（Issues）

按评论数排序后，诉求集中在以下几类：

1. **安全与信任边界（最高热度）** — [Issue #492](https://github.com/anthropics/skills/issues/492)（46 评论）：社区 Skill 以 `anthropic/` 命名空间分发，存在冒充官方、诱导用户授予高权限的风险。同时 [#1394](https://github.com/anthropics/skills/issues/1394) 的 eval-viewer XSS、[#1487](https://github.com/anthropics/skills/issues/1487) 的 `claude-api` 单次注入约 156k tokens 也属同类“Skill 即攻击面”问题。
2. **Skill 分发与组织协作** — [Issue #228](https://github.com/anthropics/skills/issues/228)（17 评论，👍8）：期望组织内直接共享 Skill，而非下载 `.skill` 文件再手动上传；[#189](https://github.com/anthropics/skills/issues/189)（👍9）指出 document-skills 与 example-skills 插件内容重复、挤占上下文。
3. **评测与质量保障基础设施** — [Issue #556](https://github.com/anthropics/skills/issues/556)（13 评论）：`run_eval.py` 在所有查询上触发率为 0%；[#1390](https://github.com/anthropics/skills/issues/1390) 指出 mcp-builder 评测对任何真实 MCP server 都伪造工具错误。
4. **Agent 状态与推理质量** — [Issue #1329](https://github.com/anthropics/skills/issues/1329)（compact-memory，符号化压缩 agent 状态）；[#1385](https://github.com/anthropics/skills/issues/1385)（三阶段推理质量门：预任务校准 → 对抗评审 → 交付验证）。
5. **治理与安全模式** — [Issue #412](https://github.com/anthropics/skills/issues/412)（agent-governance：策略执行、威胁检测、信任评分、审计轨迹，已 CLOSED）。
6. **文档类 Skill 的稳定性** — docx/pptx/pdf/slack-gif-creator 的确定性缺陷被持续上报（[#2018](https://github.com/anthropics/skills/issues/2018) XML 命名空间丢失、[#1868](https://github.com/anthropics/skills/issues/1868) 渐变插值 off-by-one），对应大量修复型 PR（#1734、#1792、#1975、#1976、#538）。

---

## 3. 高潜力待合并 Skills

- [#1742 mcp-builder（mcp>=2 适配）](https://github.com/anthropics/skills/pull/1742)：有明确 Fixes #1668，且与 #1390 共同构成 mcp-builder 的修复闭环，落地优先级最高。
- [#1298 skill-creator 评测隔离与跨平台修复](https://github.com/anthropics/skills/pull/1298)：直击 #556 的 0% 触发率，是评测体系能否被信任的前提。
- [#1681](https://github.com/anthropics/skills/pull/1681) / [#1997](https://github.com/anthropics/skills/pull/1997)：skill-creator 的可用性与元数据正确性，二者互补，均活跃更新至 2026-10。
- [#1980 webapp-testing 移除 `shell=True`](https://github.com/anthropics/skills/pull/1980)：命令注入风险修复，属安全类高确定性改动。
- [#1977](https://github.com/anthropics/skills/pull/1977) / [#1976](https://github.com/anthropics/skills/pull/1976) / [#1975](https://github.com/anthropics/skills/pull/1975)：同一作者 gerardrecinto 提交的三处确定性修复，均带 Fixes 编号、改动面小，易被合并。
- [#525 pyxel](https://github.com/anthropics/skills/pull/525) 与 [#514 document-typography](https://github.com/anthropics/skills/pull/514)：分别为最长尾与最贴近通用文档场景的新增 Skill，但创建时间较早且无近期维护，落地不确定性较高。
- [#1245 Notion 规格转实现](https://github.com/anthropics/skills/pull/1245)：2026-10-15 仍更新，工作流自动化方向需求明确，但一次性提交两个 Skill、审查成本较高。

---

## 4. Skills 生态洞察

**一句话总结：** 社区当前最集中的诉求已从“再多几个 Skill”转向“让 Skill 可信、可测、可控”——即命名空间与权限的信任边界、评测结果的真实性，以及官方基础工具链（skill-creator / mcp-builder）的跨平台可靠性，而新增垂直领域 Skill 的动力相对减弱。

---

# Claude Code 社区动态日报 · 2026-10-31

## 1. 今日速览

今日发布 v2.1.316，新增禁用 `ultrathink` 关键词的开关，并为 Claude apps 网关引入按组共享的月度预算池。Issues 侧热点集中在桌面端功能对齐（自定义主题）、Windows/WSL 平台回归问题（语音听写粘贴、PowerShell 权限预检）以及 MCP 工具注册/权限相关缺陷；今日无 PR 更新。

## 2. 版本发布

**v2.1.316**
- 新增环境变量 `CLAUDE_CODE_DISABLE_ULTRATHINK`，可关闭 `ultrathink` 关键词行为。
- Claude apps 网关新增"池化组预算"（pooled group budgets）：在每位成员自身额度之上，为组内成员设置一份共享的月度预算，通过 spend limits 管理 API 的 `pooled_budget` 字段配置。

链接：anthropics/claude-code Releases v2.1.316

## 3. 社区热点 Issues（10 条）

1. **#32479 [OPEN] GitHub Connector 在 Claude Desktop 已连接但 Claude 无法识别** — 108 条评论、153 👍，为当前讨论度最高的 Issue，涉及认证/集成链路，影响面广。
   链接：anthropics/claude-code Issue #32479

2. **#79305 [OPEN] 桌面端支持自定义主题/强调色（对齐 CLI 自定义主题系统）** — 26 条评论、84 👍，体现桌面端与 CLI 功能对齐的强烈诉求。
   链接：anthropics/claude-code Issue #79305

3. **#93782 [OPEN] 2.1.269 回归：语音听写工具粘贴在 VS Code 集成终端（WSL2）失效，2.1.268 正常** — 带复现、标记 regression，25 条评论，影响特定但明确的开发工作流。
   链接：anthropics/claude-code Issue #93782

4. **#6481 [OPEN] CLI 窗口缩放异常** — 自 2025-08 持续至今的老问题，25 条评论、40 👍，说明 TUI 在 Windows 上的长期稳定性欠账。
   链接：anthropics/claude-code Issue #6481

5. **#59408 [OPEN] Ctrl+C / Ctrl+Shift+C 静默清空提示输入，无确认、无恢复** — 20 条评论，存在误操作导致输入丢失的风险，属易用性与数据保护问题。
   链接：anthropics/claude-code Issue #59408

6. **#89812 [OPEN] Linux 桌面：`session_stale_relogin`（elevated_auth）导致约每日重登录；Cowork 文件夹授权需二次登录** — 18 条评论，认证体验直接影响日常可用性。
   链接：anthropics/claude-code Issue #89812

7. **#47698 [OPEN] Anthropic API 错误：Stream idle timeout - 部分响应已接收** — 14 条评论、13 👍，涉及 Ultraplan 场景下消耗大量 token 后中断，成本与可靠性双重关切。
   链接：anthropics/claude-code Issue #47698

8. **#76272 [OPEN] 允许用户控制周限额重置时间（可配置重置日，或类似 Codex 的按需重置额度）** — 9 条评论、37 👍，反映用量管理灵活性的普遍需求。
   链接：anthropics/claude-code Issue #76272

9. **#102430 [OPEN] Windows：PowerShell 工具预检在 2.1.300 上仍报 "The command line is too long"，allow 规则始终不生效** — 带复现，直接削弱权限允许列表的有效性。
   链接：anthropics/claude-code Issue #102430

10. **#99813 [OPEN] 自动模式分类器拦截用户明确请求的合并/部署；headless `claude -p` 中的键入式批准不生效** — 涉及 auto 模式与远程/Slack 无头场景的权限语义，影响自动化流程收尾。
    链接：anthropics/claude-code Issue #99813

> 补充观察：今日多条 Issue 被标记 stale 并关闭（如 #78826 MCP 工具未暴露、#73137 MCP 数组参数被字符串化、#78578 VS Code 扩展更新时硬删除会话记录、#78995 Cowork 降级丢失会话历史），其中包含数据丢失与 MCP 类缺陷，建议关注是否会被重新提起。

## 4. 重要 PR 进展

过去 24 小时内无更新的 Pull Request（共 0 条），本期不作列举。

## 5. 功能需求趋势（基于所供 Issues）

- **桌面端与 CLI / 各平台功能对齐**：自定义主题与强调色（#79305），显示社区希望桌面端具备与 CLI 同等的可配置性。
- **用量与成本控制**：周限额重置时间可配置或可"存储按需重置"（#76272），与本次发布的组预算池方向一致；流式超时导致 token 浪费亦属成本关切（#47698）。
- **IDE 与终端集成稳定性**：VS Code 集成终端中的粘贴/听写（#93782）、VS Code 扩展更新时的会话恢复（#78578）显示编辑器内体验是重点。
- **MCP 生态健壮性**：连接成功但工具未暴露（#78826）、Windows 桌面 Claude_Browser MCP 零工具注册（#92046）、数组参数被字符串化（#73137）、未列入 allow/deny 的 MCP 工具跳过权限提示（#80135）。
- **权限与自动化语义**：PowerShell 预检失败导致 allow 规则失效（#102430）、auto 模式分类器与无头批准（#99813）。
- **认证与会话保持**：Linux 桌面频繁重登录（#89812）、Keychain OAuth 与环境变量 token 优先级反转（#80091）、GitHub Connector 识别失败（#32479）。
- **TUI 输入安全**：快捷键静默清空输入（#59408）、窗口缩放异常（#6481）。

## 6. 开发者关注点

- **回归与平台差异**：多个 Issue 明确标注 regression 与平台标签（WSL、Windows、Linux、macOS），升级后行为变化（如 2.1.268 → 2.1.269）是开发者最敏感的问题类型。
- **数据安全与可恢复性**：会话记录被硬删除（#78578）、降级丢失历史（#78995）、快捷键无确认清空输入（#59408）——开发者期望软删除与恢复机制。
- **认证摩擦**：频繁重登录、重复登录授权、OAuth 凭证优先级与文档不符，直接拉低日常效率。
- **权限系统可信度**：allow 规则不生效、MCP 工具绕过权限提示、auto 模式拦截明确指令，使开发者难以预测自动化行为边界。
- **长时间未闭环的老问题**：如 #6481 自 2025 年 8 月持续存在，反映部分 TUI 问题修复周期长；同时大量 Issue 以 stale 关闭，可能掩盖真实缺陷。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-31）

> 数据来源：github.com/openai/codex。过去 24 小时内无新 Release；Issues 更新 50 条、PR 更新 28 条。以下内容均基于所给摘要。

## 1. 今日速览

今日无新版本发布，社区讨论集中在**桌面端与 IDE 扩展的稳定性问题**：浏览器访问失效（Windows/macOS 多处报告）、VS Code 扩展启动超时/卡死，以及模型行为层面的“任务提前中断”和 GPT-6.1 误判 prompt 违规。PR 侧清一色为 `copyberry[bot]` 提交的已关闭变更，涵盖 TUI 体验、音频输入校验、Guardian 上下文预算与登录流程调整。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 / 评论 / 👍 | 关注理由 |
|---|---|---|---|
| 1 | [#57641](https://github.com/openai/codex/issues/57641) Windows CLI @Browser 报 “browser access host is unavailable” | OPEN / 22 / 7 | 今日评论最多。桌面端更新至 26.1023.6123.0 后，CLI 0.164.0 的浏览器接入在 Windows 11 + Brave 环境失效，属更新引发的回归，影响 Pro 用户工作流。 |
| 2 | [#11898](https://github.com/openai/codex/issues/11898) VS Code 扩展行内建议 / Ghost Text | CLOSED / 13 / **50** | 点赞最高，说明 IDE 内联补全是最强呼声。今日被关闭，建议关注后续是否以其他形式落地。 |
| 3 | [#50771](https://github.com/openai/codex/issues/50771) Codex 提前结束任务、声称“将继续”却停手 | OPEN / 13 / 12 | 模型行为类高赞问题，直击智能体可靠性核心：需用户反复催促才继续，影响长任务信任度。 |
| 4 | [#47370](https://github.com/openai/codex/issues/47370) WSL2 下 F8 语音会话启动即停止（WSLg PulseAudio） | OPEN / 15 / 1 | 跨平台语音功能缺陷，WSL2 用户受影响，涉及实时语音模型与音频子系统适配。 |
| 5 | [#52450](https://github.com/openai/codex/issues/52450) GPT-6.1 Sol 将良性 prompt 判为 invalid_prompt，GPT-5.6 正常 | OPEN / 11 / 1 | 新模型的策略过滤误伤问题，连“Reply with exactly...”这类无害指令也被拦截，可能阻碍模型升级迁移。 |
| 6 | [#57721](https://github.com/openai/codex/issues/57721) macOS：移动端创建的远程会话显示浏览器被禁用 | OPEN / 11 / 0 | 远程/跨设备场景（Android 控制 macOS 主机）的一致性问题，需桌面端发消息后才初始化。 |
| 7 | [#57026](https://github.com/openai/codex/issues/57026) IDE/Remote-SSH：30s renderer_ready_timeout，二次扫描 + 3,203 个预加载资源 | OPEN / 7 / 2 | 含实测数据（30 秒超时、资源数量），提供了缓解后仍失败的证据，对性能优化很有参考价值。 |
| 8 | [#57759](https://github.com/openai/codex/issues/57759) Linux/Wayland：扩展 26.1021.22027 启动失败并冻结 VS Code 1.143.1 | OPEN / 6 / 2 | 与 #57026 同版本段，回退到 26.908.40401 可恢复，指向特定版本回归，影响 Linux 开发者。 |
| 9 | [#58507](https://github.com/openai/codex/issues/58507) macOS 新会话恒用 workspaceWrite，忽略 config.toml 中的 sandbox_mode | OPEN / 4 / 0 | 当日新建。配置被忽略 + 编辑器无权限选择器，涉及安全边界与用户预期不符。 |
| 10 | [#34278](https://github.com/openai/codex/issues/34278) 按线程的 Auto 模式，同时路由模型与推理强度 | OPEN / 10 / 10 | 高赞功能请求，已有维护者分诊摘要；暴露 app-server 无法原子更新模型+推理强度的限制。 |

其他值得留意：[#42599](https://github.com/openai/codex/issues/42599) Windows 桌面“Approve for me”权限选项消失（sandbox）；[#55427](https://github.com/openai/codex/issues/55427) Windows 安全自动审查错误拦截只读 Git 校验；[#37950](https://github.com/openai/codex/issues/37950) 实时语音会话不接收 AGENTS.md/人格指令，与文本会话行为不一致。

## 4. 重要 PR 进展（Top 10）

以下均为 `copyberry[bot]` 提交、状态为 CLOSED 的变更（评论数未提供）：

1. [#58457](https://github.com/openai/codex/pull/58457) **TUI 跨后端会话切换**：解决会话选择器能列出多后端会话、但选中他后端会话会被拒绝的问题。
2. [#58456](https://github.com/openai/codex/pull/58456) **失败推理 trace 保留不完整输出**：此前失败响应中的尝试性工具调用会丢失，现予以保留。
3. [#58459](https://github.com/openai/codex/pull/58459) **Bazel CI 快照与 OTLP 测试清理**：快照断言失败时打印 diff 且重试通过后不留 `.snap.new`；OTLP 回环收集器在导出器关闭后停止。
4. [#58454](https://github.com/openai/codex/pull/58454) **Guardian 上下文弹性预算**：引入 `ContextBudgeting::Elastic`，在准备根会话与 Node REPL 证据时去掉固定分区上限。
5. [#58444](https://github.com/openai/codex/pull/58444) **弹性分配前限制 Guardian 上下文条目**：新增 `prepare_elastic_entries`，按渲染内容（含 JSON 转义）计量，先限制再分配。
6. [#58434](https://github.com/openai/codex/pull/58434) **音频校验失败按不可重试输入错误处理**：大小/数据/格式/采样率问题映射为 `InvalidAudioInput`（HTTP 400），保留提供方消息。
7. [#58430](https://github.com/openai/codex/pull/58430) **音频文件引用 + 显式运行时拒绝**：app-server 用 `fileId`、模型内容用 `file_id` 承载上传音频，保留原内联形态。
8. [#58446](https://github.com/openai/codex/pull/58446) **TUI 中已查看图片路径可点击**：为图片文件名与转录路径加终端超链接，含分页加载的历史记录，仅限本地工作区。
9. [#58427](https://github.com/openai/codex/pull/58427) **登录方式分组的子菜单**：将 API Key、Amazon Bedrock、Google Cloud Vertex AI 收至“Sign in another way”，主菜单保留 ChatGPT 与设备码登录。
10. [#58428](https://github.com/openai/codex/pull/58428) **插件配置支持 app settings**：允许在 `plugins.<plugin>.apps.<connector>` 下配置连接器级设置，按字段合并，插件名靠前者优先。

其余：[#58441](https://github.com/openai/codex/pull/58441) 模型目录消息中保留 Apps 使用说明；[#58436](https://github.com/openai/codex/pull/58436) 内联可视化加交互控件与样式刷新；[#58412](https://github.com/openai/codex/pull/58412) 聊天编辑器保留暴露的行首 `!` 字面量；[#58418](https://github.com/openai/codex/pull/58418) 简化已记录 exec 命令审查；[#58411](https://github.com/openai/codex/pull/58411) 向宿主暴露非消费型输入等待。

## 5. 功能需求趋势

- **IDE 深度集成**：行内建议/Ghost Text（#11898，50 赞）是明确的功能缺口，也是本次唯一点赞量显著领先的需求。
- **智能体可控性与自动化路由**：按线程 Auto 模式同时路由模型与推理强度（#34278），反映用户希望减少手动切换成本。
- **平台一致性与稳定性**：Windows（CLI 浏览器、权限下拉、安全审查）、Linux/Wayland（扩展启动）、macOS（登录、沙箱、远程会话）多点爆发，跨平台体验是当前主要矛盾。
- **语音能力**：WSL2 语音会话（#47370）与语音会话不遵循 AGENTS.md/人格配置（#37950），说明实时语音路径与文本路径尚未对齐。
- **新模型适配**：GPT-6.1 Sol 的策略误判（#52450）表明模型升级伴随过滤与行为回归风险。

## 6. 开发者关注点

- **更新引发的回归最伤体验**：浏览器接入失效（#57641）、IDE 扩展卡死（#57759）、登录反复（#49443）均出现在特定版本更新后，且可通过降级规避——版本发布质量与回滚通道是高频诉求。
- **配置与权限的真实生效**：`default_permissions`/`sandbox_mode` 被忽略（#58507）、权限选择器消失（#42599）、实时语音不读 AGENTS.md（#37950），用户对“配置写了但不生效”容忍度很低。
- **模型行为不可靠**：任务提前中断（#50771）、良性 prompt 被误判（#52450）直接影响长任务与自动化场景的信任。
- **app-server / Dots 接口一致性**：线程读取不可用（#58447）、`send_message_to_thread` 报 thread not found（#52197）、resume 遇符号链接失败（#56162）等接口边界问题反复出现。
- **性能有量化反馈**：Remote-SSH 场景下 30 秒超时、二次扫描与 3,203 个预加载资源（#57026），为优化提供了可复现的基准。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-31）

## 1. 今日速览

今日社区动态主要由 Agent 子系统的稳定性问题主导：generalist agent 挂起（#21409，8 个 👍）与 subagent 在达到 MAX_TURNS 后仍上报 GOAL 成功（#22323）是讨论最集中的两条问题。PR 侧出现多条针对 Agent 配额、中断与会话恢复的修复（#29800、#29799、#30070、#30051），显示维护者正在集中处理“会话被打断后状态丢失”这一类问题。此外，两条 CI 探测类 PR（#30064、#30066）来自首次贡献者，可能与此前 E2E 流程的安全验证有关。

## 2. 版本发布

**v0.67.0-nightly.20261031.g6814e00d6**（nightly）

- `fix(core)`：shadow repo 现在会遵循 `.git/info/exclude` 与 `core.excludesFile`（PR #30034）
- `fix(core)`：CodeAssistServer 在流结束时刷新 SSE 事件缓冲区（PR 编号在数据中被截断）
- 链接：https://github.com/google-gemini/gemini-cli/releases

## 3. 社区热点 Issues

1. **#22323 Subagent 达 MAX_TURNS 却上报 GOAL 成功**（13 评论，👍2）
   子代理在未做任何分析就达到轮次上限时，仍返回 `status: "success"`，导致中断被隐藏。这属于结果可信度问题，影响所有依赖 subagent 输出的用户。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 Generalist agent 无限挂起**（8 评论，👍8）
   当请求交给 generalist agent 后会永久挂起，连创建文件夹这类简单操作也会等待一小时以上。点赞数最高，说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 零依赖 OS 沙箱 + 执行后意图路由**（9 评论，👍1）
   提案利用 Gemini 3 对 bash 的原生亲和性，通过沙箱化执行链式 POSIX 工具，是 agent 执行模型层面的较大方向性讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 Gemini 很少主动使用 skills 与 sub-agents**（7 评论）
   用户反馈只有在显式指令下才会调用自定义技能和子代理。如果属实，这会直接削弱 subagent 架构的价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 评估 AST 感知的文件读取、搜索与映射**（7 评论，👍1）
   EPIC 级调研，目标是用 AST 精确定位方法边界以减少轮次消耗，属于提升 agent 效率的长期投入。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**（5 评论）
   配置系统与实际行为不一致，已有对应修复 PR #30067。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 browser subagent 在 Wayland 下失败**（4 评论，👍1）
   Linux 桌面环境兼容性问题，p1 优先级。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 工具数超过 128 个时出现 400 错误**（3 评论）
   正文描述为“超过 400 个工具”，与标题数字不一致，需澄清。这是工具规模扩展时的硬性约束。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 Agent 应阻止破坏性操作**（3 评论，👍1）
   模型在复杂 git 操作中可能使用 `git reset` 或 `--force`。这是关于安全边界的高价值反馈。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#23571 模型在随机位置生成临时脚本**（3 评论）
    限制模型只能通过 shell 执行操作后，模型会在各目录生成大量编辑脚本，污染工作区、影响提交。
    https://github.com/google-gemini/gemini-cli/issues/23571

> 其他值得留意：#22186（get-shit-done 输出钩子导致崩溃，p1）、#22465（创建 vite app 卡在交互式提示）、#22598（希望 `/chat share` 展示 subagent 轨迹，便于评测）。

## 4. 重要 PR 进展

1. **#30070 fix(cli)：保留执行中的 subagent 工具调用**（p2, help wanted）
   修复直接进入 `Executing` 状态（无审批）的工具调用被从 `useToolScheduler` UI 状态中丢弃的问题。
   https://github.com/google-gemini/gemini-cli/pull/30070

2. **#30051 fix(cli)：headless 中断时终止 shell 并持久化工具调用**（size/l）
   修复 `gemini -p ... --yolo` 被 SIGINT/SIGTERM/SIGHUP 或 Ctrl+C 停止时以退出码 0 退出的问题。
   https://github.com/google-gemini/gemini-cli/pull/30051

3. **#29800 fix(core)：仅在 Auto 配额耗尽时才跨模型层级回退**（size/xl）
   重构终止态配额处理，避免一次硬性配额耗尽就终结会话，也避免把容量型失败记录为永久不可用。
   https://github.com/google-gemini/gemini-cli/pull/29800

4. **#29799 fix(cli)：保留因配额中断的会话，Escape 即停止**（size/l）
   在配额或取消后保留最新用户提示与已完成的工具轮次，避免正常退出清理抹掉可恢复的历史。
   https://github.com/google-gemini/gemini-cli/pull/29799

5. **#29901 feat(acp)：允许客户端对运行中的轮次进行干预**（size/l）
   让 Zed、JetBrains、VS Code 等 ACP 客户端在不取消当前 `session/prompt` 的情况下追加用户消息，对齐终端的 `modelSteering`。
   https://github.com/google-gemini/gemini-cli/pull/29901

6. **#30067 fix(browser)：Browser Agent 遵循 settings.json 覆盖**（p2）
   对应 Issue #22267，修复工厂重建定义时忽略 `maxTurns` 等配置的问题。
   https://github.com/google-gemini/gemini-cli/pull/30067

7. **#30068 fix(cli)：向 core 转发 context management 配置**（size/s）
   文档中记载的输出遮蔽阈值（如 400,000 tokens）此前被丢弃、回落到默认 50,000。
   https://github.com/google-gemini/gemini-cli/pull/30068

8. **#29978 fix(core)：read_background_output 保留超长行与边界行**（p2, help wanted）
   修复读取日志最后 64KB 时丢弃窗口首行，导致日志略超 64KB 就返回空输出的问题。
   https://github.com/google-gemini/gemini-cli/pull/29978

9. **#30058 fix(core)：中断的 Whisper 模型下载不再被视为已安装**（p2）
   `downloadModel()` 失败时在最终路径留下不完整文件，导致 `isModelInstalled` 误判。
   https://github.com/google-gemini/gemini-cli/pull/30058

10. **#30032 / #29779（均已 CLOSED）**
    前者补全自定义主题 schema 缺失的 `ui.active`、`ui.focus` 键；后者让失败的 ripgrep 搜索被标记为工具错误，而不是被调度器当作成功。
    https://github.com/google-gemini/gemini-cli/pull/30032
    https://github.com/google-gemini/gemini-cli/pull/29779

> 注：#30064、#30066 分别标注 “ci probe” 和 “security PoC — do not merge”，均不应按普通功能合并处理。

## 5. 功能需求趋势

- **Subagent 可观测性与可控性**：多条 Issue 集中于此——结果状态要真实（#22323）、轨迹要可查看分享（#22598）、技能要被主动调用（#21968）、配置要生效（#22267）、失败要可恢复（#22232）。
- **执行安全与破坏性操作防护**：担心破坏性 git 操作（#22672）、沙箱化执行（#19873）、临时脚本污染（#23571）。
- **上下文与工具规模管理**：AST 感知的代码读取与映射（#22745、#22746）以减少轮次；工具数过多导致 400（#24246）。
- **IDE / ACP 集成**：通过 ACP 对运行中轮次进行干预（#29901），表明对编辑器内交互深度的需求在上升。
- **平台兼容性**：Wayland 下的浏览器子代理问题（#21983）。

## 6. 开发者关注点

- **会话与配额处理的健壮性**：多个 PR（#29800、#29799、#30051）集中修复“中断后状态丢失、错误退出码、会话无法恢复”，说明这是当前用户体感最强的痛点。
- **Agent 挂起与静默失败**：generalist agent 挂起（#21409）、subagent 虚假成功（#22323）、ripgrep 失败被记为成功（#29779）都指向同一个问题——失败没有被正确暴露。
- **配置不生效**：`settings.json` 覆盖被忽略（#22267）、`contextManagement` 阈值被丢弃（#30068），两者都表现为“文档写了但不生效”。
- **工作区整洁**：临时脚本散落（#23571）影响提交干净度，是高频抱怨。
- **首次贡献体验**：CI 探测类 PR 需要多次递交才能让 workflows 从 `action_required` 状态解除，侧面反映首次贡献者的流程摩擦。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-31）

## 1. 今日速览

今日无新版本发布。社区最显著的动向是**容器化分发**：为 Issue #55 提交的容器镜像发布工作流 PR（#5308/#5307）已关闭，同时新的冒烟测试权限修复 PR #5310 待审。**上下文窗口溢出问题**仍在持续发酵：前序 Issue #5205 被标记完成关闭后，用户报告在 1.0.105 上仍复发，已新开 #5312 跟进。另有多个会话管理、终端集成与认证相关问题集中更新。

## 2. 版本发布

过去 24 小时无新 Release 发布。

## 3. 社区热点 Issues（10 条）

1. **#55 用 Docker 镜像打包 copilot-cli**（OPEN，6 评论，23 👍）
   [github/copilot-cli Issue #55](https://github.com/github/copilot-cli/issues/55)
   社区最热门的需求：让未安装 Node.js 的开发者也能直接使用 CLI。高赞反映容器化分发的强烈诉求，相关实现 PR 已出现（见 #5307）。

2. **#4097 apply_patch 删除二进制文件后将其存入会话历史，永久突破 CAPI 5 MB 上限**（CLOSED，5 评论，5 👍）
   [github/copilot-cli Issue #4097](https://github.com/github/copilot-cli/issues/4097)
   删除大型二进制文件时，完整二进制以文本 diff 形式写入 `tool.execution_complete` 结果并驻留会话历史，导致超限。属于会话内存与工具输出处理的关键缺陷。

3. **#5205 上下文窗口轮转失败："checkpoint.md is absent for this agent"**（CLOSED，3 评论）
   [github/copilot-cli Issue #5205](https://github.com/copilot-cli/issues/5205)
   长时运行会话在上下文填满触发轮转时崩溃。已关闭，但后续见 #5312。

4. **#5312 上下文轮转问题在 1.0.105 上仍复现**（OPEN，1 评论）
   [github/copilot-cli Issue #5312](https://github.com/github/copilot-cli/issues/5312)
   提报者称 #5205 于 2026-10-30 以"completed"关闭，但无关闭说明、无关联 PR/提交、无发布说明，且在其自身 1.0.105 复现中问题依旧。值得关注：关闭流程的透明度与回归验证。

5. **#2622 手动 `/rename` 被后续自动生成会话名覆盖**（OPEN，3 评论，1 👍）
   [github/copilot-cli Issue #2622](https://github.com/github/copilot-cli/issues/2622)
   自 2026-04 提出至今未解，用户自定义会话名不可靠持久化，影响会话管理与可追溯性。

6. **#4724 在空闲时按模型 prompt cache TTL 自动压缩上下文**（OPEN，3 评论，2 👍）
   [github/copilot-cli Issue #4724](https://github.com/github/copilot-cli/issues/4724)
   指出 prompt cache TTL 约 5 分钟，空闲后下一轮会重新无缓存读取全部上下文，成本与延迟随上下文规模放大。提议将压缩触发与缓存 TTL 对齐，属于成本/性能优化方向的高价值建议。

7. **#5112 在交互式 CLI 中支持 OSC 7501 程序状态协议**（OPEN，2 评论，2 👍）
   [github/copilot-cli Issue #5112](https://github.com/github/copilot-cli/issues/5112)
   通过 OSC 7501 向支持的终端上报 agent 状态，改善终端集成体验。

8. **#4419 托管设置临时 fail-closed 使用空允许列表，永久丢弃窗口内注册的用户 MCP 服务器**（CLOSED，2 评论，1 👍）
   [github/copilot-cli Issue #4419](https://github.com/github/copilot-cli/issues/4419)
    `managedAllowedMcpServerLists: [[]]` 导致临时"全部拒绝"策略误伤用户自行配置的 MCP 服务器，在无托管策略的账户上亦可复现。企业/MCP 场景的重要缺陷。

9. **#5256 未登录时高 CPU 并反复 `gh auth token` 失败**（OPEN，1 评论）
   [github/copilot-cli Issue #5256](https://github.com/github/copilot-cli/issues/5256)
    后台认证探针 `copilot_runtime::auth::gh` 在无可用凭据时以无退避的紧密循环重试，造成高 CPU；未安装 `gh` 时更严重。影响首次使用体验与资源占用。

10. **#5276 Autopilot 覆盖需要用户决策的技能（ask_user 自动回复"work autonomously"）**（OPEN，1 评论）
    [github/copilot-cli Issue #5276](https://github.com/github/copilot-cli/issues/5276)
    Autopilot 模式下 `ask_user` 被自动答复，使本应等待用户确认的插件技能被跳过。涉及 agent 自主性与插件交互语义的冲突。

*其他值得留意的更新：*#4244（在 VS Code 会话中支持 `/rename` 并允许 agent 调用，3 👍）、#5279（终端集成所需的前台会话变更 hook，含热恢复）、#5283（个人 Copilot Free 账户远程环境被 remote-control 策略阻止）、#5309（内容过滤响应后误报 `model_not_supported`）、#5304（WSL2 下 `/keep-alive` 无法阻止 Windows 主机休眠）、#2361（IPv6 不可路由时 SEA 二进制无 IPv4 回退而挂起）、#4601（父目录访问权限误报）、#5007（Node/libuv 终端检测清除 SIGCHLD，延迟 `userPromptSubmitted` hook 至超时）。

## 4. 重要 PR 进展（3 条，全部列出）

1. **#5310 修复容器冒烟测试工作区权限**（OPEN，devm33，2026-10-31）
   [github/copilot-cli PR #5310](https://github.com/github/copilot-cli/pull/5310)
   修复工作流运行 41153798295 中 amd64 与 arm64 的冒烟测试失败：临时工作区以 `0700` 创建，阻止了镜像运行用户访问。是容器化路线能否落地的前置阻塞项。

2. **#5308 发布时发布 Copilot CLI 服务端容器镜像**（CLOSED，brunoborges）
   [github/copilot-cli PR #5308](https://github.com/github/copilot-cli/pull/5308)
   由 #5307 重建，保留原有两个提交不变。遗留评审意见：现有 `latest` 或 `prerelease` manifest 若缺少版本注解，可能被误判为缺失 tag 而被覆盖。

3. **#5307 发布时发布 Copilot CLI 服务端容器镜像**（CLOSED，brunoborges）
   [github/copilot-cli PR #5307](https://github.com/github/copilot-cli/pull/5307)
   响应 #55，新增在每次 Release 时向 `ghcr.io/github/copilot-cli` 发布镜像的工作流；镜像以无头服务端方式运行 CLI，供其他容器中的 Copilot SDK 客户端连接。

## 5. 功能需求趋势

- **容器化与免 Node.js 分发**：#55 与 #5307/#5308/#5310 构成同一主线，是当前社区呼声最高（23 👍）且已有实现路径的方向。
- **会话生命周期与命名管理**：#2622、#4244、#5279 集中指向会话名持久化、VS Code 会话一致性、以及供终端集成使用的前台会话切换 hook。
- **上下文内存与成本控制**：#4724（按 cache TTL 自动压缩）、#4097（工具输出污染历史）、#5205/#5312（轮转失败）显示社区对上下文窗口管理既关注稳定性也关注成本。
- **终端与 IDE 集成**：#5112（OSC 7501 状态上报）、#5279、#4244，说明 CLI 越来越多被嵌入终端面板与编辑器。
- **企业 / MCP / 认证**：#4419、#5286（沙箱模式下企业环境无法转发 token 给 `gh`）、#5256，反映企业落地与凭据处理仍是摩擦点。
- **agent 自主性边界**：#5276 提出 autopilot 与需用户确认的插件技能之间的语义冲突。

## 6. 开发者关注点

- **安装门槛**：无 Node.js 环境无法安装，是使用前的最大阻碍，容器镜像是社区公认的解法。
- **长会话稳定性**：上下文轮转崩溃（#5205/#5312）在闭环后仍复现，且关闭过程缺少说明与关联提交，削弱了对修复的信任。
- **隐性资源开销**：无凭据时认证探针紧密重试导致高 CPU（#5256）；空闲后失去 prompt cache 导致成本与延迟上升（#4724）；工具输出保留完整二进制拖垮会话（#4097）。
- **权限判定噪音**：#4601 中项目子目录内的相对父目录访问被反复告警，打断工作流。
- **跨平台细节**：WSL2 电源抑制失效（#5304）、IPv6 不可路由无 IPv4 回退（#2361）、Linux 下 hook 完成信号被延迟至超时（#5007）。
- **自动化与控制权平衡**：Autopilot 绕过用户确认（#5276），开发者希望在自动化与显式决策之间保留可控边界。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-31）

## 今日速览

今日发布 v2.2.5 与 v2.2.4 两个版本，桌面端终端持久化与 worktree/Shell 模式快捷键是主要更新。社区侧，CLI 在特定网络（DPI 丢弃分片 TLS ClientHello）下请求前挂起的问题成为最热 Issue（20 条评论），Go 套餐额度与 OAuth 认证问题持续发酵。PR 方向集中在 TUI 交互细节、MCP OAuth 刷新一致性与平台扩展（Android、Nix）。

## 版本发布

- **v2.2.5**：新增 Worktree 与 Shell 模式快捷键——macOS 按 `⌘⌥O` / `Ctrl+Alt+O` 选择 worktree，`⌘⌥B` / `Ctrl+Alt+B` 选择其 base 分支；`⌘⇧X` / `Ctrl+Shift+X` 在编辑器中切换 shell 模式。
  https://github.com/anomalyco/opencode/releases
- **v2.2.4**：桌面终端改为属于会话本身，服务器重启后保留回滚缓冲，并与 TUI 及其他窗口保持同步；重命名的终端在重启后保留名称。
  https://github.com/anomalyco/opencode/releases

## 社区热点 Issues

1. **[OPEN] #60399 CLI 在特定网络下发送请求前挂起**（20 评论，👍3）
   在 ISP DPI 丢弃/重置分片 TLS ClientHello（含后量子密钥共享）的网络中，CLI 在发送推理请求前即挂起 120 秒以上，无会话、无流、无错误；同一请求用 curl 正常。已标记 reproduced，影响特定网络安全策略下的可用性，讨论热度最高。
   https://github.com/anomalyco/opencode/issues/60399

2. **[CLOSED] #49014 Go 套餐单模型限额波及所有模型**（19 评论）
   当 grok-4.6 触及 5 小时使用限额后，所有零使用量的 Go 模型均返回相同的限额错误与相同重置窗口，切换模型无效。涉及计费/限流逻辑正确性，影响付费用户。
   https://github.com/anomalyco/opencode/issues/49014

3. **[CLOSED] #58302 免费额度异常快速耗尽**（19 评论，👍2）
   中文用户反馈 10 月 22 日出现额度耗尽，23 日早上使用不到半小时再次耗尽，怀疑与近期升级有关；使用模型与频率均无变化。反映额度计量可能存在问题。
   https://github.com/anomalyco/opencode/issues/58302

4. **[CLOSED] #2245 OpenRouter 有效 API Key 报 User not found**（18 评论，👍9）
   使用 OpenRouter 模型时持续返回 `AI_APICallError: User not found`，而同一 Key 直连 API 正常。高赞说明影响面广，认证链路兼容性受关注。
   https://github.com/anomalyco/opencode/issues/2245

5. **[CLOSED] #48330 Copilot 旧版按请求套餐被单条 prompt 耗尽**（11 评论）
   在 opencode2 中单次会话耗尽 1500 请求/月额度并触发 429，而 OpenCode 1 无此问题。指向 2.0 对按请求计费模式的请求次数膨胀。
   https://github.com/anomalyco/opencode/issues/48330

6. **[OPEN] #56285 桌面端从底部快速上滚会回弹**（8 评论）
   长会话中快速上滚视口被弹回底部，历史消息逐块懒加载，无法一次手势完成滚动。桌面端长会话体验的典型痛点，已 reproduced。
   https://github.com/anomalyco/opencode/issues/56285

7. **[CLOSED] #47902 工具调用参数跨调用损坏，非法 schema 调用可执行**（7 评论）
   V2 会话中连续多轮后工具参数损坏（出现 `<|DELIM_AE|>` 等序列化标记），且 schema 非法的调用仍被执行。涉及工具调用安全性与正确性。
   https://github.com/anomalyco/opencode/issues/47902

8. **[OPEN] #47998 TUI 保存的标签在本地与远程服务器间共享**（7 评论，👍3）
   V2 TUI 在托管本地服务器与显式远程服务器之间共享已保存会话标签，切换服务器会恢复上一服务器的标签。多服务器工作流下的状态隔离问题。
   https://github.com/anomalyco/opencode/issues/47998

9. **[OPEN] #54145 `/connect` 显示配置中已禁用的 provider**（6 评论，👍4）
   v1 中 `enabled_providers` 受限时 `/connect` 只显示已启用项，v2 则显示全部。属于 v1→v2 行为回归，高赞说明企业配置场景关注度高。
   https://github.com/anomalyco/opencode/issues/54145

10. **[OPEN] #60915 ChatGPT Business 账号 OpenAI OAuth 登录失败**（3 评论）
    当日新建，OAuth 流程无法完成，OpenAI 同意页返回组织未启用该应用访问。影响企业账号用户登录。
    https://github.com/anomalyco/opencode/issues/60915

其他值得注意：#60635 与 #60644 均为长时间 agent 运行中的 ECONNRESET 与自动重试（https://github.com/anomalyco/opencode/issues/60635 ，https://github.com/anomalyco/opencode/issues/60644 ）；#43771 屏幕阅读器导航与光标无障碍需求（https://github.com/anomalyco/opencode/issues/43771 ）；#60643 请求在 OpenCode 内使用 Antigravity app agents（https://github.com/anomalyco/opencode/issues/60643 ）。

## 重要 PR 进展

1. **#60908 fix(core)：缺失 pty 会话视为不存在并避免错误 span**（OPEN）
   Closes #60876，将缺失的 daemon 会话目录视为"daemon 未运行"，避免产生错误 span。
   https://github.com/anomalyco/opencode/pull/60908

2. **#60896 fix(core)：重放已完成的 MCP OAuth 刷新**（CLOSED）
   Fixes #60612，解决远程 MCP 服务器轮换刷新令牌时同一 token 被刷新两次的问题。
   https://github.com/anomalyco/opencode/pull/60896

3. **#53275 fix(core)：复用已花费令牌的 MCP OAuth 刷新结果**（OPEN）
   刷新令牌一次性使用，并发刷新虽共享请求，但答案返回后即被遗忘；该 PR 保留结果以供复用。
   https://github.com/anomalyco/opencode/pull/53275

4. **#60898 fix(core)：用 JSON Schema override 转换旧版 Zod 工具 schema**（OPEN，needs:compliance）
   低版本 Zod 生成的工具 schema 会使核心的 JSON Schema 转换崩溃，导致相关工具从工具集中消失。
   https://github.com/anomalyco/opencode/pull/60898

5. **#60879 feat(core)：在 step metadata 中上报 Claude Agent 套餐用量**（OPEN，contributor）
   Closes #60877，让展示 Claude 订阅用量的插件无需轮询 API。
   https://github.com/anomalyco/opencode/pull/60879

6. **#60907 feat(tui)：显示权限请求的原因**（OPEN）
   插件已可解释权限请求原因，该 PR 将其在 TUI 中呈现。
   https://github.com/anomalyco/opencode/pull/60907

7. **#56846 fix(tui)：对话框内支持粘贴**（OPEN）
   Fixes #56815，`prompt.paste`（Ctrl+V）此前仅绑定在主编辑器中，对话框内无法粘贴。
   https://github.com/anomalyco/opencode/pull/56846

8. **#60903 feat(cli)：新增原生 Android 支持**（OPEN）
   新增 `android-arm64` 构建目标，使 `@opencode/cli` 可原生运行于 Android，关联 #47612。
   https://github.com/anomalyco/opencode/pull/60903

9. **#60913 chore(tui)：升级 OpenTUI 快照至 0.0.0-20261030-1f1b608e**（OPEN）
   将 `@opencode/plugin` 对 `@opentui/core`、`@opentui/solid` 的 peer 依赖从 >=0.8.0 提升至 >=0.8.1。
   https://github.com/anomalyco/opencode/pull/60913

10. **#59403 refactor(nix)：从 bun.lock 获取依赖**（OPEN，contributor）
    Closes #49063、#59882、#59601，改进 Nix 打包的依赖来源一致性。
    https://github.com/anomalyco/opencode/pull/59403

其他：#60895 `session list` 新增 `--all` 跨项目列出会话（https://github.com/anomalyco/opencode/pull/60895 ）；#60910 文档补充生态项目 OpenCode Mobile（https://github.com/anomalyco/opencode/pull/60910 ）。

## 功能需求趋势

- **平台扩展与生态整合**：原生 Android 构建（#60903）、在 OpenCode 内使用 Antigravity app agents（#60643）、生态项目收录（#60910）。
- **TUI/桌面端交互打磨**：对话框粘贴支持（#56846）、权限原因展示（#60907）、快速滚动回弹（#56285），以及 v2.2.5/2.2.4 的快捷键与持久终端。
- **会话与项目管理**：`session list --all`（#60895）、多服务器标签隔离（#47998）。
- **用量与订阅可视化**：Claude 套餐用量上报（#60879），与额度相关 Issue（#49014、#58302、#48330）相互呼应。
- **可访问性**：屏幕阅读器导航与光标（#43771）。

## 开发者关注点

- **网络环境适配**：DPI 干预下分片 TLS ClientHello 导致请求前长时间无响应（#60399），无错误提示使问题难以自查。
- **计费与限流正确性**：单模型限额外溢至全部模型（#49014）、免费额度异常消耗（#58302）、按请求套餐被单 prompt 耗尽（#48330），三者共同指向额度计量与错误归因。
- **认证链路**：3rd 方 provider（#2245）、ChatGPT Business OAuth（#60915）、MCP OAuth 令牌轮换（#60896、#53275）。
- **工具调用可靠性**：参数跨调用损坏与 schema 非法调用仍被执行（#47902）、旧版 Zod schema 致工具消失（#60898）。
- **长任务稳定性**：长 agent 运行中反复 ECONNRESET 与自动重试（#60635、#60644）。
- **v1→v2 行为回归**：`enabled_providers` 被 `/connect` 忽略（#54145）、Copilot 请求膨胀（#48330），提示升级兼容性需重点关注。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-31

## 1. 今日速览

今天没有新的版本发布，社区讨论几乎全部围绕 **Windows 终端兼容性** 展开：一条关于“如何在 Windows 上使用 Pi”的讨论帖已累积 94 条评论；同时，多条与终端颜色查询回显泄漏相关的问题被合并修复（PR #11642）。此外，PR 方面密集取得进展：工具搜索排序、`pi update` 安装方式识别、WSL 互操作、新增 6 家模型提供商等数十项修复的提交状态都有更新。

## 2. 版本发布

过去 24 小时内没有新的 Release。

## 3. 社区热点 Issues

1. **[#7547] [Windows] 在 Windows 上如何使用 Pi？遇到哪些问题？**（OPEN，94 评论）
   这是目前评论数最高的讨论帖，用于讨论 Pi 在 Windows 上过于分散的运行方式（终端、ConPTY、WSL 等），并打算集中精力优化。社区响应极为活跃，是 Windows 体验治理的核心线索。
   https://github.com/earendil-works/pi/issues/7547

2. **[#10256] 0.99.x：终端颜色查询回复泄漏进输入框，BEL 触发外部编辑器（mintty/ConPTY）**（OPEN，inprogress，18 评论）
   一条回归问题，涉及 0.87.1 正常、0.99.x 异常。它是多条同源问题的总入口（PR #11642 同时修复 #10362、#10742、#10717、#10970 等）。
   https://github.com/earendil-works/pi/issues/10256

3. **[#6300] Windows：每次按键都重绘输入行（字符换行显示）**（CLOSED，21 评论）
   这是 Windows TUI 的典型渲染缺陷，已关闭，反映出 Windows 终端兼容性的历史积压。
   https://github.com/earendil-works/pi/issues/6300

4. **[#10157] Gemini 工具调用 thought signature 在 AI Studio OpenAI 兼容端点下被丢弃**（OPEN，9 评论）
   影响通过 OpenAI 兼容层接入 Gemini 的用户，属于模型协议层面的正确性问题。
   https://github.com/earendil-works/pi/issues/10157

5. **[#4748] pi-tui：`getKeybindings()` 单例导致导入 keyText 的扩展异常**（CLOSED，9 评论）
   这是扩展生态的模块解析和单例问题，PR #11630 已修复，对扩展开发生态意义较大。
   https://github.com/earendil-works/pi/issues/4748

6. **[#10299] openai-completions：OpenRouter/GLM 返回空工具调用会让会话永久卡死**（CLOSED，8 评论）
   该问题提供了复现步骤与修复方案，补齐了此前 #4854 缺失的复现；这类畸形响应会导致会话不可恢复，影响面较大。
   https://github.com/earendil-works/pi/issues/10299

7. **[#10758] 修改 Git 包固定 SHA 后，启动时不会更新 checkout**（OPEN，6 评论）
   直接影响通过手动编辑 `settings.json` 管理包的高级用户，导致版本切换失效。
   https://github.com/earendil-works/pi/issues/10758

8. **[#11021] openai：ChatGPT 登录仍按 272K 上报 GPT-6.1 Sol 上下文，账户目录为 500K**（OPEN，7 👍）
   这是本期点赞最高的问题之一，说明上下文窗口上报偏低会导致可用上下文变小，是模型元数据准确性痛点。
   https://github.com/earendil-works/pi/issues/11021

9. **[#11331] tool_search 在精确查询工具名时返回其他工具**（CLOSED，fix-available，5 评论）
   它触发了后续多次排序修复（#11625、#11632、#11631），是今日 PR 中反复出现的问题。
   https://github.com/earendil-works/pi/issues/11331

10. **[#11599] RPC 模式：异步 `ctx.shutdown()` 无法退出空闲进程**（OPEN，4 评论）
    这影响以 RPC 模式集成 Pi 的应用（stdio 保持打开时进程无法退出），是集成方关注的生命周期缺陷。
    https://github.com/earendil-works/pi/issues/11599

## 4. 重要 PR 进展

1. **#11644 [CLOSED] docs：记录 Windows 终端与 conhost 限制**
   在 `docs/windows.md` 新增“选择终端”章节与两张表格（Windows Terminal 推荐、VS Code 等），并标注 2026 年 10 月更新，是对 #7547 治理讨论的直接回应。
   https://github.com/earendil-works/pi/pull/11644

2. **#11642 [OPEN] fix(tui)：阻止迟到/无头部颜色回复进入输入框**
   修复 #10256，并覆盖多条重复问题。核心思路是让 OSC 10/11、OSC 4 查询的迟到回复与 DA1 结束标记不再被当作输入。
   https://github.com/earendil-works/pi/pull/11642

3. **#11638 [CLOSED] fix(ai)：自定义 openai baseUrl 时在顶层声明 tools**
   修复 #11637：覆盖 `providers.openai.baseUrl` 后，生成的模型目录仍保留 `supportsAdditionalTools` 假设，导致工具声明位置错误。
   https://github.com/earendil-works/pi/pull/11638

4. **#11370 [OPEN] feat(ai,coding-agent)：新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun 提供商**
   该 PR 基于 models.dev 的贡献活跃度与 issue 需求选择这些提供商，并列出各端点信息，是今日规模最大的功能扩展。
   https://github.com/earendil-works/pi/pull/11370

5. **#11632 [CLOSED] fix(coding-agent)：工具搜索中匹配更多查询词的工具优先**
   它是 #11625 的后续，修复“名称匹配压过描述匹配”带来的排序回退，是对 #11331 的持续打磨。
   https://github.com/earendil-works/pi/pull/11632

6. **#11631 [CLOSED] fix(durable)：使 durable 的工具搜索排序与 coding agent 一致**
   把 #11440、#11625 的排序修复移植到 durable 自有的 `src/search.ts`，消除两份排名器的行为差异。
   https://github.com/earendil-works/pi/pull/11631

7. **#11629 [CLOSED] feat(coding-agent)：新增 PI_SELF_UPDATE_COMMAND / selfUpdateCommand**
   解决 mise、PNPM_HOME 包装器（nub）、Nix 等非标准安装下 `pi update` 无法自更新的问题（Refs #7756、#5607）。
   https://github.com/earendil-works/pi/pull/11629

8. **#11628 [CLOSED] fix(coding-agent)：仅当包管理器拥有安装时才在 pi update 中报告它**
   修复 `detectInstallMethod()` 把任何含 `/pnpm/` 的路径误判为 pnpm 的问题（Fixes #7756）。
   https://github.com/earendil-works/pi/pull/11628

9. **#11627 [CLOSED] fix(coding-agent)：WSL 互操作助手从 / 启动并报告外部编辑器失败**
   解决 WSL 当前目录路径超过 MAX_PATH 时 Windows 程序启动失败（`Invalid argument`）的问题（Fixes #11592）。
   https://github.com/earendil-works/pi/pull/11627

10. **#11630 [CLOSED] fix(coding-agent)：向扩展渲染器传递宿主键位提示**
    修复 #4748：扩展解析到自身副本时键位单例不一致，导致 `keyText`/`keyHint` 显示异常。
    https://github.com/earendil-works/pi/pull/11630

## 5. 功能需求趋势

- **Windows 终端兼容性治理**：#7547 的大讨论与 #11644 文档、#11642 修复共同构成主线，涉及 ConPTY、mintty、WezTerm、WSL、conhost 等终端环境组合。
- **工具搜索（tool_search）质量**：#11331 系列问题引出多轮排序修复（#11625/#11632/#11631），并扩展到 Unicode/多语言分词（#11037）。
- **更多模型与提供商接入**：#11370 一次性新增 6 家托管推理供应商；#10157 关注 Gemini 协议细节；#10804 请求支持 Anthropic `thinking.display: "updates"`。
- **安装与更新体验**：#7756、#5607 相关改动加上 #11629/#11628，集中解决非标准安装方式下的自更新与安装方式识别。
- **扩展与集成生态**：键位单例（#4748）、beforeProviderRequest 钩子（#11619）、RPC 生命周期（#11599）是今天扩展开发者侧的主要话题。

## 6. 开发者关注点

- **Windows 是当前最大的痛点集中区**：输入行重绘、颜色查询回显泄漏、BEL 被当作 Ctrl+G 打开编辑器、SSH/ConPTY 与 WezTerm/mintty 差异等问题反复出现，且多为回归或多终端重叠。
- **安装方式识别与自更新不可靠**：包装器与包管理器共存的场景下，`pi update` 误判归属或无法更新，用户需要显式配置自更新命令。
- **模型能力元数据不准**：上下文窗口上报偏低（#11021）、thought signature 丢失（#10157），会直接影响模型实际可用能力。
- **畸形模型响应导致会话卡死**：空 tool_calls 等异常输入缺少容错，社区期望有复现即修复（#10299）。
- **文档缺口**：恢复会话的工作目录（#11617/#11532）、Windows 终端选择等基础行为此前未在文档中说明，开发者呼唤更明确的文档。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-31）

## 1. 今日速览

过去 24 小时没有新版本发布，社区活动几乎全部集中在 CI 稳定性与测试基础设施上。Main 分支的多个 gate（Managed Agent、E2E、SDK Java、web-shell smoke）出现与具体 PR 无关的确定性失败，导致每个 PR 都被迫做重新归因；同时自托管 runner 池暴露出缺少 Node.js 等环境缺陷。功能侧则围绕 daemon/serve 路由、记忆提取、Web Shell 交互与编辑正确性持续推进。

## 2. 版本发布

过去 24 小时无新 Release，本节省略。

## 3. 社区热点 Issues

1. **#14724 Main CI 失败：Managed Agent gate 无法定位测试**（104 条评论，社区讨论最热）
   长期未关闭的主分支 CI 失败，评论数远超其他 issue，说明它持续阻塞全量 tier 的 PR 验证。
   https://github.com/QwenLM/qwen-code/issues/14724

2. **#13078 每日依赖 CVE 审计失败**（37 条评论）
   定时安全审计连续失败，涉及新出现的高危漏洞，安全相关、需优先处理。
   https://github.com/QwenLM/qwen-code/issues/13078

3. **#15173 Main CI 失败：E2E Tests（sandbox:docker）**（22 条评论，autofix 进行中）
   E2E 在 docker 沙箱分片中失败，自动修复流程已介入，是主分支健康的直接指标。
   https://github.com/QwenLM/qwen-code/issues/15173

4. **#15898 CI：Hosted 进程故障 gate 在 main 上不稳定**（7 条评论，P1）
   同一测试两次 main 运行都失败但测量形态不同，属于 flaky gate，会连带拖红所有触发全量 tier 的 PR。
   https://github.com/QwenLM/qwen-code/issues/15898

5. **#16005 `ecs-qwen-hz6-18` 缺少 Node.js，导致必需的 Lint & Static 检查失败**（P2，ready-for-human）
   单台 runner 环境缺陷使落在该机上的提交因与代码无关的原因变红，属于典型基础设施问题。
   https://github.com/QwenLM/qwen-code/issues/16005

6. **#15861 web-shell 目录选择器 smoke 超时**（P1）
   在无关 PR 上确定性失败，每次都要额外做一轮重新归因，影响所有 Web Shell 相关提交。
   https://github.com/QwenLM/qwen-code/issues/15861

7. **#14859 CI：跟踪 runner 容量与独立 main 验证**（11 条评论）
   提出跟踪 CI 容量、保留 main 独立验证机会，是上述一系列 CI 问题的系统性改进议题。
   https://github.com/QwenLM/qwen-code/issues/14859

8. **#12514 会话提交登记未覆盖所有落地路径**（P2，安全/核心）
   会导致对 amend 的误判拦截（"not made by the agent in this session"），影响 git 与 shell 安全语义。
   https://github.com/QwenLM/qwen-code/issues/12514

9. **#15276 Windows Desktop 更新失败（node.exe 被占用）**（P1，平台/安装）
   用户侧真实安装故障，内嵌运行时锁定 node.exe 导致文件写入失败，直接影响升级体验。
   https://github.com/QwenLM/qwen-code/issues/15276

10. **#15919 打包内置 fast-uri 3.1.0（经 MCP client 2.0.0）**（安全/打包，已关闭）
    通过依赖传递引入旧版本 fast-uri，属于供应链安全问题，已关闭说明处理较快。
    https://github.com/QwenLM/qwen-code/issues/15919

## 4. 重要 PR 进展

1. **#16019 ci：classify_pr gate 全部路由到 ECS**（yiliang114）
   将所有事件（任意作者的 PR、merge queue、push、手动触发）的 classify gate 指向自托管 ECS 池，保留 kill switch。
   https://github.com/QwenLM/qwen-code/pull/16019

2. **#16010 ci(sdk-java)：Hosted verify 失败时仍运行 admission gate**
   让 `Verify Hosted admission gates` 在前置 Java/Spring/MySQL 验证失败时仍执行，提升故障诊断能力。
   https://github.com/QwenLM/qwen-code/pull/16010

3. **#15998 fix(review)：让自然语言重新评审请求指向对应 PR**
   修复"有更新了，重新评审"等纯文本请求无法命中 PR、以及 resume 标志被误读为 re-review 的问题。
   https://github.com/QwenLM/qwen-code/pull/15998

4. **#15995 test(managed-agent)：校验 A3 兄弟调用绑定**
   按 ordinal 用 runtimeCallId、partIndex、prepareKey、requestDigest 校验两次调用崩溃屏障计划。
   https://github.com/QwenLM/qwen-code/pull/15995

5. **#15982 fix(cli)：让较长的 `/btw` 回答在受限视口中可读**
   `/btw` 侧答改为在独立滚动视口中渲染，最多占终端一半高度。
   https://github.com/QwenLM/qwen-code/pull/15982

6. **#15924 feat(memory)：可选稳定的提取窗口以复用前缀**（默认关闭实验）
   针对热历史尾部每次重算的问题，引入稳定提取窗口以复用前缀缓存。
   https://github.com/QwenLM/qwen-code/pull/15924

7. **#15466 feat(serve)：用户级 Skill 启停路由**（autofix/takeover）
   新增 `PUT /skills/:name/activation` 与批量 `PUT /skills/activation`（最多 100 个）两条 daemon 路由。
   https://github.com/QwenLM/qwen-code/pull/15466

8. **#14335 feat(serve)：完成后子会话按 TTL 自动清理**
   新增 `serve.subSessionCompletionTtlHours` 配置（默认 0 表示永久保留），优化 daemon 会话管理。
   https://github.com/QwenLM/qwen-code/pull/14335

9. **#14204 feat(web-shell)：将选中消息文本引用到输入框**
   transcript 选区浮层新增"Quote to composer"，与现有复制动作并列。
   https://github.com/QwenLM/qwen-code/pull/14204

10. **#12799 fix(edit)：保留编辑未触及的换行符**
    保持编辑范围外原始字节，按 span 选择插入换行，兼顾 CRLF 与团队记忆编辑。
    https://github.com/QwenLM/qwen-code/pull/12799

（另：#14140 放宽 `--local-control-address` 的 RFC 1918/3927 限制，#15169 在 auto dream 失败后加入退避，均值得关注。）

## 5. 功能需求趋势

- **Daemon / serve 能力扩展**：用户级 Skill 启停、子会话 TTL 清理，以及 #12511 提出的单请求批量获取多工作区会话实时快照 API。
- **Web Shell 交互增强**：引用到输入框、地址选择器稳定性、smoke 测试修复。
- **记忆与会话管理**：稳定提取窗口以复用前缀、auto dream 失败退避、session-commit 登记完善。
- **平台与安装体验**：Windows Desktop 更新、内嵌运行时锁定问题。
- **CLI 渲染体验**：长侧答的视口化展示、`/mcp` 服务器选择按身份而非索引。
- **CI / 测试基础设施**：runner 容量跟踪、独立 main 验证、gate 路由与诊断，是当前最集中的方向。

## 6. 开发者关注点

- **CI 噪声是最大痛点**：多条与 PR 无关的确定性/flaky 失败（#14724、#15173、#15898、#15861、#16005）迫使每个 PR 支付"重新归因"成本，维护者已开始用 P1/P2 优先级系统性处理。
- **基础设施可靠性**：runner 池缺少 Node.js、容量不足、gate 不稳定，直接决定必需检查的可信度。
- **安全与供应链**：CVE 审计持续失败（#13078）、传递依赖内置旧版 fast-uri（#15919）、会话提交登记覆盖不全（#12514）。
- **安装与升级体验**：Windows 内嵌运行时文件锁导致升级失败，属于高频用户侧问题。
- **功能 PR 门槛**：维护者明确要求 PR 附带清晰的 reviewer test plan，否则评审会被延迟（见 #15169 说明）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-31）

> 数据范围：github.com/Hmbown/DeepSeek-TUI 过去 24 小时更新。说明：数据源提供的 Issues 共 5 条，PR 共 24 条（展示评论数最多的 15 条）。部分条目所附链接域名为 codewhale-hq/Codewhale，以下按原文保留。按要求 Issues 与 PR 各挑选 10 条，但实际可用数据不足，已如实按全部可用条目整理，不作补充或杜撰。

---

## 1. 今日速览

今日主线是 **main 分支健康度修复**：Issue #7148 指出 `PersistRequest::ClearCheckpoint` 变体已死导致主分支无法编译，所有 PR 的必需检查集体失败，外部贡献无法合入；配套的 #7154/#7155 修复了在 ubuntu-latest 上稳定失败的三项测试。另一条主线是 **TUI 渲染与本地化打磨**：Lstarsky0 提交了一组 Markdown 渲染修复（括号链接、`~~~` 围栏、星号强调、全角标点 URL、列表缩进），本地化方向则关闭了非英文 locale 硬编码英文串的 #7071。

---

## 2. 版本发布

过去 24 小时无新 Release。相关条目均带有 `v0.10.3` 标签。

---

## 3. 社区热点 Issues（全部 5 条）

**#7071 [CLOSED] 非英文 locale 常见 TUI 字符串硬编码为英文**
- 标签：bug, help wanted, localization, v0.10.3｜作者 Hmbown｜4 条评论
- 重要原因：涉及 `/undo` 提示、`/diff` 标题、审批与 plan-handoff 框架文案、`/color` 提示等多处界面文本。摘要显示 10-29 已有引擎主提交 `896e781fbb`，分组活动、工具状态、文件回执改用 15 种语言目录，group cache 跟踪 locale 变化。是本周期评论最多的问题。
- https://github.com/codewhale-hq/Codewhale/issues/7071

**#7115 [CLOSED] exec 与 doctor 忽略 TUI 的无密钥 Ollama 采纳，仍强制要求 DeepSeek key**
- 标签：bug, providers, v0.10.3｜作者 Hmbown｜1 条评论
- 重要原因：影响本地/离线使用路径。摘要称只读 doctor 修复已落地（引擎 `14a5723b75`），已配置路由会在凭证检查前短路 Ollama 采纳，未配置诊断使用非迁移解析器，exec 保留原行为。
- https://github.com/codewhale-hq/Codewhale/issues/7115

**#7124 [CLOSED] vLLM effort 取值必须遵循本地模型模板**
- 标签：needs-triage, v0.10.3｜作者 gannp｜1 条评论
- 重要原因：本地模型推理档位不匹配。摘要显示在冻结引擎 `1014538dde` 上，向 `reasoning_effort_scenario` 临时加入断言后失败：回环 vLLM `Qwen3.8-27B-NVFP4` 路由上的 Low 归一化行为异常（原文截断）。
- https://github.com/codewhale-hq/Codewhale/issues/7124

**#7148 [OPEN] main 无法编译：`PersistRequest::ClearCheckpoint` 成为死代码，所有 PR 必需检查失败**
- 作者 gaord｜1 条评论
- 重要原因：**本日最高优先级**。工作区自身 lint 策略下 `main` 无法编译，`variant ClearCheckpoint is never con...` 使每个 PR 的必需检查都失败，外部贡献完全无法合入。仍未关闭。
- https://github.com/codewhale-hq/Codewhale/issues/7148

**#7154 [CLOSED] ubuntu-latest 上三个测试在每个 PR 稳定失败（providers golden 过期、context-window fixture 半安装）**
- 标签：needs-triage｜作者 luochen211｜1 条评论
- 重要原因：CI 噪音，与 PR 内容无关地失败。涉及 `route::export::tests::golden_providers_export_matches_registry`（codewhale-config）等三项。
- https://github.com/codewhale-hq/Codewhale/issues/7154

---

## 4. 重要 PR 进展（挑选 10 条）

**#7168 [OPEN] fix(runtime)：在不支持所有权的文件系统上保留私有状态**
- 作者 gaord｜HarmonyOS hmdfs 上 GUI 启动时 workspace drive lease 检查失败，逐特性报错，此为运行时兼容性修复。
- https://github.com/codewhale-hq/Codewhale/pull/7168

**#7151 [CLOSED] 原生 HarmonyOS：修复文档中的构建流程，发布签名 arm64 版本**
- 作者 gaord｜两处提交：`docs(ohos)` 使指南命令可用，并说明设备真实行为；另交付签名 arm64 release，使原生 HarmonyOS 成为可文档化、可发布的目标平台。
- https://github.com/codewhale-hq/Codewhale/pull/7151

**#7125 [CLOSED] [contribution-gate] fix：遵循本地模型推理档位**
- 作者 gannp｜vLLM Chat 适配器此前统一发送 low/medium/high，但 Qwen3.8 模板接受 low/medium/xhigh 并拒绝 high；其他模板只暴露 thinking 开关或 low/high/max。新增按 revision 区分的能力。
- https://github.com/codewhale-hq/Codewhale/pull/7125

**#7170 [OPEN] fix(tui)：保留 Markdown 链接目标中的配对括号**
- 作者 Lstarsky0｜`[text](url)` 在第一个 `)` 处截断，含括号的目的地丢失末尾 `)`，超链接指向不存在的页面（如含括号的维基条目）。
- https://github.com/codewhale-hq/Codewhale/pull/7170

**#7156 [CLOSED] fix(tui)：将 `~~~` 围栏渲染为代码块**
- 作者 Lstarsky0｜渲染器此前只识别反引号围栏，`~~~` 开头的代码块被当正文渲染，而代码库其他部分已把 `~~~` 视为围栏。
- https://github.com/codewhale-hq/Codewhale/pull/7156

**#7157 [CLOSED] fix(tui)：保留不开启强调的星号**
- 作者 Lstarsky0｜行内只要有匹配的 `*`/`**` 就开启强调，带空格的星号被吞且中间文本变成斜体/粗体。
- https://github.com/codewhale-hq/Codewhale/pull/7157

**#7158 [CLOSED] fix(tui)：裸 URL 在全角标点处结束**
- 作者 Lstarsky0｜中日文本不在 URL 后加空格，导致链接吞入标点及后续文字，屏幕显示与 OSC 8 目标均错误。
- https://github.com/codewhale-hq/Codewhale/pull/7158

**#7146 [CLOSED] fix(tui)：保留嵌套在列表中的段落缩进**
- 作者 Lstarsky0｜列表项下缩进段落被渲染为左对齐，word wrapper 丢弃行首空格，缩进无法到屏。
- https://github.com/codewhale-hq/Codewhale/pull/7146

**#7150 [CLOSED] fix(l10n)：统一 zh-Hans 人称与 provider/token 术语**
- 作者 luochen211｜统一三个术语形态，离群写法向包内主流形态靠拢，例如称呼用户由「你 ×43 / 您 ×6」统一。
- https://github.com/codewhale-hq/Codewhale/pull/7150

**#7155 [CLOSED] test：修复因 catalog 与 context-window 变更在 main 上损坏的三个测试**
- 作者 luochen211｜Closes #7154。仅修 fixture 与 golden 文件，无生产代码变更；例如 `0e3677b` 新增 MiniMa...（原文截断）导致 golden 过期。
- https://github.com/codewhale-hq/Codewhale/pull/7155

补充（数据中另有 5 条）：#7117 第二实例运行时保留 setup checkpoint；#7169 去掉 stream timeout 变更的引擎状态回复；#7152 去掉 fleet roster 刷新的状态回复；#7149 移除 fleet alerts 与 pet worker 的文件级 `dead_code` 允许；#7147 按对话携带的历史而非存储形态进行 fork（关联 `/undo` 报错用户报告）。

---

## 5. 功能需求趋势

从本期 Issues 与 PR 可提炼出以下方向：

1. **本地模型与自托管 provider 支持**：Ollama 无密钥采纳（#7115）、vLLM 推理档位按模型模板归一化（#7124/#7125），显示社区重点在本地推理链路的正确性。
2. **国际化与本地化质量**：15 语言目录落地、非英文界面硬编码清理（#7071）、zh-Hans 术语统一（#7150），并伴随全角标点 URL 等 CJK 渲染修复（#7158）。
3. **Markdown/TUI 渲染健壮性**：链接括号、围栏、强调、列表缩进等一系列细粒度渲染修复，表明 TUI 渲染器是当前活跃打磨区。
4. **新平台支持**：原生 HarmonyOS 的构建文档、签名 arm64 发布与 hmdfs 文件系统兼容（#7151/#7168）。
5. **仓库工程健康度**：死代码清理（`#5587` dead-code sweep）、去除冗余状态回复（#7152/#7169），以减少转录噪音。

---

## 6. 开发者关注点

- **CI 与主分支阻塞是首要痛点**：`main` 无法编译（#7148）叠加三项测试在 ubuntu-latest 稳定失败（#7154），使所有外部 PR 无法合入，直接影响贡献者体验；修复已提交（#7155）但编译问题仍 OPEN。
- **贡献门禁（contribution-gate）标签密集出现**：本期多数 TUI 修复 PR 带此标签，说明评审流程存在明确门槛。
- **本地/离线可用性**：开发者不希望仅用本地 Ollama 时被强制要求 DeepSeek key，也不希望本地模型的推理档位被错误映射。
- **非英文用户界面体验**：硬编码英文串与术语不一致被反复提出，CJK 文本下的链接、标点边界问题也被逐项修复。
- **跨平台与异构文件系统**：HarmonyOS hmdfs 等不支持 POSIX 所有权的环境需要专门的运行时容错。

---

*注：部分摘要原文在提供数据中被截断，本文仅转述可见内容，未作推断补全。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*