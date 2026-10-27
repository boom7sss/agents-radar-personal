# AI CLI 工具社区动态日报 2026-08-26

> 生成时间: 2026-08-26 11:02 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 — 2026-08-26

## 1. 生态全景

当前 AI CLI 工具已从"单点代码补全"演变为"全能 agent 工作台"，核心竞争围绕模型行为可控性、会话可靠性与平台覆盖展开。各工具普遍面临类似的结构性挑战——工具选择偏差、记忆机制不透明、长会话稳定性不足、Windows 平台体验欠佳——但成熟度差异显著。Claude Code 处于功能迭代期（权限管理 GUI 化、记忆系统遭质疑），OpenAI Codex 处于快速演进期（密集 alpha 发布、step/turn 语义精细化），而 Qwen Code、Agent Team 等新功能则在密集迭代中暴露大量可靠性问题。安全与可观测性（沙箱隔离、实时 Token 可视化、Guardian 审查机制）正成为新一轮差异化竞争焦点。

## 2. 各工具活跃度对比

| 工具 | Issues（热点） | PR | Release | 热度信号 |
|---|---|---|---|---|
| Claude Code | 10（最高 106 👍 / 46 评论） | 0 | v2.1.246 | 模型行为偏离与记忆透明度是双核心痛点 |
| OpenAI Codex | 10（最高 61 评论 / 56 👍） | 10 | 4 个 alpha 预发布 | Windows 启动阻断 + auth 失效；step/turn 一致性修复密集 |
| Gemini CLI | 10（8 条 P1/P2 混合） | 10 | 3 个版本（含 nightly/preview） | Agent 挂起与误报为 P1 焦点；2 个 CRITICAL CVE 修复 |
| GitHub Copilot CLI | 数据截断 | 数据截断 | 2 个预发布 | 信息不足 |
| Kimi Code CLI | 4（全量） | 0 | 0 | Edit/Write 假成功数据丢失 bug 为最高优先级 |
| OpenCode | 10（最高 89 评论 / 93 👍） | 10 | 0 | 沙箱安全与消息队列控制为长期高赞诉求；Web UI 2.0 早期 bug 出现 |
| Pi | 10（最高 23 评论 / 19 👍） | 10 | 0 | auto-compaction 失效为最紧急问题；provider 生态快速扩展 |
| Qwen Code | 10 | 10 | 2 个预览 | Agent Team 4 个 bug 同日爆发；0.22.1 权限白名单回归 |
| DeepSeek TUI（CodeWhale） | 10 | 10（3 个已合入） | 0 | 会话可观测性为核心方向；git 锁冲突影响日常流 |

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **沙箱/权限隔离** | OpenCode（#2242，89 评论/73 👍）、Gemini CLI（#19873 零依赖 OS 沙箱）、Codex（approval_policy 变更争议 #39973） | 限制 agent 终端命令访问范围；执行审批边界需明确且可配置 |
| **会话/记忆透明度** | Claude Code（#82056 记忆索引加载状态不可查、#88579 记忆不可验证）、Pi（#6879 auto-compaction 不可靠）、DeepSeek TUI（#5620 上下文告警瞬态） | 可观测性缺失导致无法判断模型状态，第三方替代生态因此生长 |
| **Windows 平台体验** | Codex（#40715/#40752/#40819 启动失败与 MCP transport）、Claude Code（#12506 WSL 支持，146 👍）、Qwen Code（#9061 Ctrl+V 失效）、OpenCode（#12405/#2447） | 启动失败、路径处理、MCP 配置兼容性是最主要痛点 |
| **MCP 配置集中化与可靠性** | Claude Code（#32145 用户级配置）、Codex（invalid transport 系列）、Qwen Code（#9944 reconnect 假成功） | 集中式可版本化配置 + 连接状态可验证 |
| **多 agent/子代理控制** | Qwen Code（Agent Team 系列）、OpenCode（#38966 子代理独立操控）、Gemini CLI（#21409 挂起、#22323 误报） | 子代理回收、状态误报、消息路由可靠性 |
| **实时 Token/用量可视化** | DeepSeek TUI（#5624/#5623 已提交）、Pi（#6879 上下文越限不可感知） | 长回合中界面"冻结感"与用量不可见是共同痛点 |

## 4. 差异化定位分析

| 工具 | 定位 | 技术路线 | 目标用户 |
|---|---|---|---|
| Claude Code | **全能 agent 工作台** | 内置工具集（Read/Grep 等）+ 权限分类器 GUI 化；Auto 模式规则可视化编辑 | 追求开箱即用与 GUI 化权限管理的开发者 |
| OpenAI Codex | **深度 agent 引擎** | Rust 实现，step/turn 语义精细化；Guardian v2 安全审查；OpenTelemetry 可观测性；Vim 模式增强 | 安全敏感、重度 CLI 用户 |
| Gemini CLI | **Google 生态 + 多 agent 架构** | 子代理（generalist/codebase_investigator）+ Auto Memory 系统；AST 感知文件读取探索 | Google 生态开发者、多 agent 协作场景 |
| Qwen Code | **多智能体协作试验场** | Agent Team 跨会话消息传递（list_agents/send_message）；Goal 系统 + 守卫契约；review/autofix 自动化 | 需要多 agent 协作、重视代码审查自动化的团队 |
| OpenCode | **开源可扩展平台** | 插件系统（effect schema 解码修复）；沙箱安全为第一诉求；Web UI 2.0 与桌面端（Office/PDF 预览） | 关注安全隔离、插件生态的开源用户 |
| Pi | **provider 中立聚合层** | 20+ provider 内置支持（NVIDIA、Opper 新增）；compaction 跨 provider 参数治理 | 多 provider 切换、长会话工作流用户 |
| Kimi Code CLI | **轻量专注型 CLI** | 极简功能集，活跃 Issue 仅 4 条 | 基础代码辅助场景用户 |
| DeepSeek TUI（CodeWhale） | **可观测性导向的 TUI** | 实时 Token 账本、外部 supervisor 控制套接字、gix 纯 Rust git 替换 | TUI 重度用户、自动化运维场景 |

## 5. 社区热度与成熟度

**高热度 + 快速迭代**：OpenAI Codex（4 个 alpha 发布 + 10 个高价值 PR，安全/一致性双线推进）、Gemini CLI（3 个版本 + 10 个 PR，覆盖 CVE 修复与性能优化）。两者处于功能密集投放期，但版本更新引入的回归也最频繁。

**高热度 + 功能打磨期**：Claude Code 社区活跃度最高（单 issue 106 👍），但 PR 停滞，关注集中于模型行为与记忆机制两大结构性争议——官方回应速度决定用户去留。OpenCode 社区高赞长期未落地（沙箱 73 👍、消息队列 93 👍），Web UI 2.0 早期 bug 开始积累。

**活跃开发 + 可靠性欠账**：Qwen Code 的 Agent Team 尚处"边发布边补洞"阶段，同日 4 个 bug 暴露功能成熟度不足。Pi 的 provider 生态扩展迅速，但多 provider 下的 compaction 兼容性问题集中爆发。

**成熟稳定但需求分化**：DeepSeek TUI（CodeWhale）治理成熟（PR 合入率高、发布流程自动化），社区集中在可观测性增强与外部监管集成，而非基础功能缺陷。Kimi Code 体量最小，但数据丢失类 bug（#2617）优先级最高。

## 6. 值得关注的趋势信号

1. **模型行为可控性将成为核心竞争维度**：Claude Code 的双高赞 issue（Bash 工具过度使用 106 👍、冗长注释 155 👍）揭示用户对"模型按语义选择工具、严格遵循指令"的期望远超当前实现。Gemini CLI 的 #19873（利用模型 bash 亲和力 + 意图路由）表明部分项目已在尝试"顺应"而非"对抗"模型行为。对开发者而言，评估工具时模型行为可控性应优先于功能列表。

2. **记忆/上下文机制的透明化是用户信任的底线**：Claude Code 记忆索引不可验证（#88579 催生 91k 星第三方替代）、Pi auto-compaction 失效（#6879）、Qwen MCP reconnect 假成功（#9944）——"声称成功但实际未生效"已成为多工具共通的信任破坏点。选择工具时，建议优先验证状态可观测性（能否查询记忆加载状态、token 消耗、压缩触发时机）。

3. **Windows/WSL 支持是主要的平台缺口**：Codex 多个高赞 issue 指向 Windows 桌面端启动阻断，Claude Code 的 WSL 需求高达 146 👍，Qwen 的 Ctrl+V 回归跨度多个版本。Windows 开发者仍是各工具的"二等公民"，这一缺口既是风险也是机会。

4. **安全审查正在从"事后告警"转向"事前预测"**：Codex Guardian v2 将预测窗口缩至 5 个操作、默认聚焦 computer-use 审查；OpenCode 沙箱诉求长期霸榜；Gemini 两项 CRITICAL CVE 修复被重新提交。安全能力正从加分项变为准入门槛。

5. **step/turn 语义精细化是长会话可靠性的技术底座**：Codex 三个 PR（#40821/#40771/#40807）将审批决策、沙箱执行、MCP 元数据全部从 turn 级改为 step 级，Pi 也在修复工具中止的双重取消问题。当会话跨越数小时、包含数十个工具调用时，细粒度的动作级语义（而非整轮级）是保证正确性的关键。

6. **会话可观测性正在成为差异化卖点**：DeepSeek TUI 以实时 Token 账本和外部 supervisor 控制套接字回应"冻结感"问题（3 个 PR 同日落地），Pi 在修复 O(n²) thinking 序列化。长任务场景下，用户需要的不只是结果，而是"中间状态随时可查、可干预"。这一方向值得所有工具借鉴。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-26）

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能 | 社区讨论热点 | 状态 |
|------|-----------|------|-------------|------|
| 1 | **skill-creator 修复**（[PR #1298](https://github.com/anthropics/skills/pull/1298)） | 修复 `run_eval.py` 在所有场景下误报 recall=0% 的问题，涉及 Windows 流读取、触发检测与并行 worker 修复 | 关联 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 条评论，7 👍），已有 10+ 独立复现，是生态中最核心的开发工具链缺陷 | open |
| 2 | **document-typography**（[PR #514](https://github.com/anthropics/skills/pull/514)） | AI 生成文档的排版质量控制：孤儿单词换行、孤行段落标题、编号错位 | 所有文档类 Skill（docx/odt/pdf）的通病，覆盖面广 | open |
| 3 | **scnet-hpc**（[PR #1615](https://github.com/anthropics/skills/pull/1615)） | SCNet HPC 集群运维，基于 profile 的 SSH + Slurm 工作流 | 新增 HPC 领域，关注度高（近期创建即上榜） | open |
| 4 | **pdf 大小写修复**（[PR #538](https://github.com/anthropics/skills/pull/538)） | 修复 SKILL.md 中 8 处大小写不匹配的文件引用 | 反映官方仓库自身维护质量问题 | open |
| 5 | **ODT Skill**（[PR #486](https://github.com/anthropics/skills/pull/486)） | OpenDocument 格式（.odt/.ods）创建、模板填充、转 HTML | 补全文档处理生态缺口 | open |
| 6 | **frontend-design 改进**（[PR #210](https://github.com/anthropics/skills/pull/210)） | 提升 frontend-design Skill 的可执行性，确保每条指令可单轮对话完成 | 讨论 Skill 最佳实践：如何从"文档式"转向"指令式" | open |
| 7 | **skill-quality-analyzer + skill-security-analyzer**（[PR #83](https://github.com/anthropics/skills/pull/83)） | 两个 meta Skills：质量分析（五维评估：结构、内容、……）与安全分析 | 与 [Issue #492](https://github.com/anthropics/skills/issues/492)（安全信任边界）直接呼应 | open |
| 8 | **DOCX tracked change 修复**（[PR #541](https://github.com/anthropics/skills/pull/541)） | 修复添加修订时 `w:id` 与已有书签冲突导致的文档损坏 | 关联 [Issue #12](https://github.com/anthropics/skills/issues/12)（docx 格式破坏），OOXML 共享 ID 空间的根因分析 | open |

## 2. 社区需求趋势

- **安全与信任边界**（[Issue #492](https://github.com/anthropics/skills/issues/492)，43 条评论，热度断层第一）：社区技能在 `anthropic/` 命名空间下分发构成信任攻击面，用户可能向非官方 Skill 授予过高权限。这是生态治理层面的最大诉求。
- **组织级 Skill 共享**（[Issue #228](https://github.com/anthropics/skills/issues/228)，16 条评论，8 👍）：企业用户希望 Skill 可在组织内直接共享，而非手动下载、传输、再上传。
- **开发工具链可靠性**：`run_eval.py` 0% 触发率问题（[Issue #556](https://github.com/anthropics/skills/issues/556)）是 Skill 开发者最痛的工具缺陷；此外还有 mcp-builder 评估框架对真实 MCP 服务器评分恒为 0（[Issue #1390](https://github.com/anthropics/skills/issues/1390)）。
- **上下文窗口优化**：`claude-api` Skill 单次注入 ~156k tokens 直接耗尽上下文（[Issue #1487](https://github.com/anthropics/skills/issues/1487)）；重复安装插件导致重复 Skill 占用上下文（[Issue #189](https://github.com/anthropics/skills/issues/189)）。表明社区对 Skill 的 token 资源管理高度敏感。
- **新领域方向**：HPC 运维（scnet-hpc）、多智能体编排（Hivemind，[PR #1628](https://github.com/anthropics/skills/pull/1628)）、推理质量门禁（[PR #1367](https://github.com/anthropics/skills/pull/1367)）。

## 3. 高潜力待合并 Skills（均处于 open，近期活跃）

| Skill | PR | 说明 |
|-------|-----|------|
| **compact-memory** | [Issue #1329](https://github.com/anthropics/skills/issues/1329) | 用符号记法压缩长期运行 agent 的状态，直接解决上下文膨胀痛点 |
| **Hivemind** | [PR #1628](https://github.com/anthropics/skills/pull/1628) | 零成本多智能体编排：Claude Code 作为 planner/reviewer，将机械工作委派给免费模型 worker，创新度高 |
| **self-audit** | [PR #1367](https://github.com/anthropics/skills/pull/1367) | 交付前四维推理质量审计，跟随 [Issue #1385](https://github.com/anthropics/skills/issues/1385) 的质量门禁提案，生态完善度高 |
| **ServiceNow 平台** | [PR #568](https://github.com/anthropics/skills/pull/568) | 覆盖面极广（ITSM、ITOM、ITAM、SAM Pro、FSM、CSDM 等），更新持续到 2026-08，作者长期维护 |
| **testing-patterns** | [PR #723](https://github.com/anthropics/skills/pull/723) | 测试方法论全覆盖（Testing Trophy、AAA 模式、单元/集成测试策略），社区高频需求方向 |
| **pyxel 复古游戏** | [PR #525](https://github.com/anthropics/skills/pull/525) | 与 pyxel-mcp 集成，面向 8-bit/pixel-art 游戏开发，作者为库作者本人（kitao），专业度可信 |

## 4. 生态洞察

社区当前最集中的诉求是 **Skill 开发的工具链可靠性（评测、验证、调试），其次是安全信任边界治理与上下文 token 效率**——这三点共同指向一个信号：社区已越过"体验新 Skill"阶段，进入"规模化生产高质量 Skill"阶段，基建质量成为新的瓶颈。

---

## Claude Code 社区动态日报 — 2026-08-26

### 1. 今日速览

Claude Code 今日发布 v2.1.246，新增 **Auto 模式**下的权限分类器规则编辑标签页，并对 Bash 通配符权限规则增加了启动警告。社区方面，开发者的注意力集中在两大核心议题：**模型行为偏离**（过度使用 Bash 工具、默认输出冗长代码注释）和 **持久记忆功能的不透明与不可验证性**；同时，WSL 支持、MCP 配置等平台/集成类需求持续获得高热度。

### 2. 版本发布

**v2.1.246** 主要变更：

- **启动警告**：针对在子命令前使用通配符（如 `Bash(git * main)`）的 Bash 允许规则增加警告。原因在于此类规则同样会匹配子命令前的插入选项，存在越权匹配风险。
- **Auto 模式标签页**：在 `/permissions` 中新增 Auto 模式标签页，用于查看与编辑自动模式分类器规则。

### 3. 社区热点 Issues（10 个）

1. **[#19649]** [开放] 模型频繁使用 Bash 工具（sed/grep 等）处理本应使用内置工具（Read/Grep）的任务 — **46 条评论，106 👍**
   https://github.com/anthropics/claude-code/issues/19649
   模型工具选择偏差问题，热度最高。用户普遍认为模型过于依赖 Bash，未能优先调用语义更准确的专用工具，影响输出质量与可审计性。

2. **[#12506]** [已关闭] 功能请求：支持在 Windows 上将命令执行切换到 WSL 环境 — **42 条评论，146 👍**
   https://github.com/anthropics/claude-code/issues/12506
   Windows 用户在 Claude Desktop 嵌入式 Claude Code 中希望配置命令通过 WSL 执行，而非 CMD/PowerShell。当前状态虽为关闭，但需求热度极高，反映 Windows 开发者对 Unix 工具链的刚性依赖。

3. **[#82056]** [开放] 会话无法判断自动记忆索引加载状态（完整/截断/未加载）— **39 条评论**
   https://github.com/anthropics/claude-code/issues/82056
   持久记忆功能透明性缺失的典型案例，用户无法确认记忆索引是否完整加载，影响对模型行为的判断与故障排查。

4. **[#65961]** [开放] 模型默认生成冗长代码注释，忽略终止指令 — **24 条评论，155 👍**
   https://github.com/anthropics/claude-code/issues/65961
   模型行为控制问题，用户显著不满。模型频繁插入不必要的注释，即使明确指示停止仍持续输出。获赞数在今日榜单中位居第二。

5. **[#15148]** [开放] LSP 插件 `lspServers` 配置未从 marketplace.json 中读取处理 — **21 条评论，73 👍**
   https://github.com/anthropics/claude-code/issues/15148
   已附复现步骤。类型语言 LSP 插件（typescript-lsp、pyright-lsp、gopls-lsp）因配置未解析而无法工作，影响插件生态的可用性。

6. **[#32145]** [开放] 功能请求：支持在 `~/.claude/settings.json` 中配置 MCP 服务器 — **10 条评论，18 👍**
   https://github.com/anthropics/claude-code/issues/32145
   用户希望通过用户级配置文件统一管理 MCP 连接，而非仅限项目级或 GUI 配置。体现社区对集中式、可版本化配置的偏好。

7. **[#88579]** [开放] 持久记忆"不可见、按目录隔离、无法验证"——第三方替代方案因此获得 91k 星 — **9 条评论**
   https://github.com/anthropics/claude-code/issues/88579
   对官方持久记忆功能的系统性质疑，指出其在多项目真实场景下机制不透明，催生了庞大的第三方记忆管理生态，值得官方关注。

8. **[#40816]** [已关闭] VS Code 扩展：对话中出现 "Unsupported content type: server_tool_use / advisor_tool_result" 错误 — **7 条评论**
   https://github.com/anthropics/claude-code/issues/40816
   IDE 集成稳定性问题，与 #62885（API 层 advisor_tool_result 块缺少对应 server_tool_use）疑似同一根因，涉及 advisor 工具结果块在消息流中的协议合规性。

9. **[#79217]** [开放] 功能请求：使自动记忆 MEMORY.md 索引大小限制（200 行 / 25KB）可配置 — **4 条评论**
   https://github.com/anthropics/claude-code/issues/79217
   记忆索引的固定截断策略（200 行或 25KB 先到先截）在大型项目中过早损失信息，用户希望将其参数化。

10. **[#89655]** [开放] 鼠标滚轮在 TUI 中滚动的是提示输入框而非历史命令 — **2 条评论**
    https://github.com/anthropics/claude-code/issues/89655
    最新版 2.1.246 下的 TUI 交互缺陷，影响命令行基础操作体验。优先度不高但值得跟踪。

### 4. 重要 PR 进展

过去 24 小时内无新 Pull Requests 更新。历史 PR 状态请在 GitHub 页面确认。

### 5. 功能需求趋势

- **平台支持扩展（Windows/WSL）**：Windows 用户对 WSL 集成的需求热度持续（#12506，146 👍），说明跨平台开发环境统一是重要方向。
- **配置集中化**：用户希望将 MCP 配置（#32145）、LSP 配置（#15148）统一到用户级文件，实现更可移植、可版本化的工作区设置管理。
- **记忆功能深度定制**：持久记忆索引大小可配置（#79217）、加载状态可视化（#82056）等诉求，指向记忆机制需要更强的透明度与灵活性。
- **权限/自动规则可视化编辑**：v2.1.246 新增 Auto 模式规则编辑标签页，说明项目正在将权限管理从 CLI 命令向 GUI/交互式方向推进。

### 6. 开发者关注点

- **模型行为可控性不足**：Bash 工具过度使用（#19649）与冗长注释无法抑制（#65961）构成今日两大痛点。开发者期望模型更精准地选择工具、更严格地遵循指令，这关系到 Claude Code 的核心工作流质量。
- **记忆/索引机制不透明**：自动记忆索引的加载状态无法查询（#82056）、大小限制固定不可调（#79217 || #88579 等），反映出工具在关键运行状态上的可观测性缺失，推高了第三方替代方案的热度。
- **平台与 IDE 集成稳定性和一致性**：VS Code 扩展协议错误（#40816）、WSL 支持缺失（#12506）、TUI 滚轮行为异常（#89655）表明，在追求核心能力迭代的同时，桌面端、插件端与 CLI 端的体验对齐仍需加强。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-26

## 1. 今日速览

今日 Codex 仓库密集发布了 4 个 `rust-v0.150.0-alpha` 系列预发布版本，同时社区反馈集中在 Windows 桌面端更新后无法启动（`spawn EINVAL`、`invalid transport` 等）以及 macOS 端会话恢复导致认证失效的高赞问题。PR 侧则以 Guardian 安全审查机制、MCP 请求元数据、沙箱执行环境对齐等内部一致性与安全加固为主。

## 2. 版本发布

过去 24 小时内发布了 4 个 **rust-v0.150.0-alpha** 系列预发布版本，均无额外变更说明：

- [`rust-v0.150.0-alpha.12`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.12) — 0.150.0-alpha.12
- [`rust-v0.150.0-alpha.11`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.11) — 0.150.0-alpha.11
- [`rust-v0.150.0-alpha.10`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.10) — 0.150.0-alpha.10
- [`rust-v0.150.0-alpha.9`](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.9) — 0.150.0-alpha.9

注：部分桌面端 issue 报告捆绑的 CLI 版本为 0.150.0-alpha.8，说明该系列为当前桌面应用测试通道版本。

## 3. 社区热点 Issues（Top 10）

### 3.1 高热度/高影响

**[#40715 — [Windows] ChatGPT 26.820.60940 fails with "invalid transport in mcp_servers.codex_app"](https://github.com/openai/codex/issues/40715)** `[bug, windows-os, mcp, app, config]`

- **状态**: OPEN | 评论 41 | 👍 56
- **摘要**: Windows 版 Codex App 更新至 26.820.60940 后报 `invalid transport in mcp_servers.codex_app`，而 Beta 版 26.727.40816 正常。
- **重要性**: 点赞数今日最高（56），Windows + MCP 配置兼容性问题影响面大，且与 #40819 同源。

**[#39162 — [macOS] Opening an existing conversation invalidates ChatGPT auth](https://github.com/openai/codex/issues/39162)** `[bug, auth, app]`

- **状态**: OPEN | 评论 61 | 👍 34
- **摘要**: macOS 端 26.814.41407 打开已有会话会使 ChatGPT 认证失效并重定向至登录页；已知正常版本为 26.810.52044。
- **重要性**: 评论数最多（61），认证失效属于阻断性问题，直接影响桌面端核心使用流程。

**[#40752 — [Windows] Desktop app fails to start after update to v26.820.60940](https://github.com/openai/codex/issues/40752)** `[bug, windows-os, app]`

- **状态**: OPEN | 评论 51 | 👍 29
- **摘要**: 更新后无法定位 Codex CLI 二进制，`.cmd` 包装器触发 `spawn EINVAL`。
- **重要性**: 新版本发布当日即被报告，Windows 桌面端启动完全阻断，评论数快速攀升。

### 3.2 功能反馈类

**[#39903 — Add an option to disable "Ran N commands" collapsing](https://github.com/openai/codex/issues/39903)** `[enhancement, TUI, CLI, config]`

- **状态**: OPEN | 评论 29 | 👍 48
- **摘要**: 请求增加配置项以禁用 TUI 中 “Ran N commands” 折叠行为，始终展示已执行命令。
- **重要性**: 点赞数较高（48），反映 CLI 重度用户对终端输出透明度的需求。

**[#39973 — Retiring approval_policy="untrusted" without deprecation weakens execution-approval boundary](https://github.com/openai/codex/issues/39973)** `[bug, sandbox, CLI, config]`

- **状态**: OPEN | 评论 5 | 👍 27
- **摘要**: Codex 0.149.0 直接移除 `approval_policy = "untrusted"` 配置且未提供弃用过渡，致使既有配置无法启动，被认为削弱了执行审批边界。
- **重要性**: 涉及安全策略的破坏性变更，点赞 27 表明社区对配置兼容性与安全边界并重的关注。

### 3.3 稳定性与一致性问题

**[#38350 — Recurring scheduled tasks disable themselves after successful runs](https://github.com/openai/codex/issues/38350)** `[bug, codex-web, automations]`

- **状态**: OPEN | 评论 43
- **摘要**: 周期性定时任务在成功执行后无端自动从 enabled 变为 paused。
- **重要性**: 自动化任务可靠性问题，评论较多，影响 Web 端自动化的信任度。

**[#38350 同源 — #40819 — Resuming WSL-hosted threads fails with "invalid transport"](https://github.com/openai/codex/issues/40819)** `[bug, windows-os, mcp, app, app-server]`

- **状态**: OPEN | 评论 21 | 👍 17
- **摘要**: 桌面应用 26.820.7780.0 在 WSL2 环境下恢复会话时出现与 #40715 相同的 MCP transport 错误。
- **重要性**: 与 #40715 共同构成 Windows + MCP 配置的系统性问题，覆盖 WSL 场景。

**[#38931 — Context compaction turns completed plans into active work](https://github.com/openai/codex/issues/38931)** `[bug, context, app, plan]`

- **状态**: OPEN | 评论 9 | 👍 6
- **摘要**: 上下文压缩会保留计划内容但丢失执行状态，导致已完成工作被重新执行，形成重复调查循环。
- **重要性**: 长任务场景下的上下文一致性问题，直接影响复杂任务效率和 token 消耗。

**[#38792 — Resume opens a long thread at its first turn (desynced thread_history cursors)](https://github.com/openai/codex/issues/38792)** `[bug, CLI, session]`

- **状态**: OPEN | 评论 12 | 👍 4
- **摘要**: 0.146.1 版本开始 `thread_history` 投影游标失步，导致恢复长会话时跳回第一轮。
- **重要性**: 会话恢复机制缺陷，对长时间运行的 CLI 工作流影响大。

**[#40527 — Pro 20x weekly quota consumption increased dramatically after reset](https://github.com/openai/codex/issues/40527)** `[bug, rate-limits]`

- **状态**: OPEN | 评论 8
- **摘要**: 配额重置后，同等使用量下 Pro 20x 周额度消耗约增加 20%。
- **重要性**: 涉及计费与配额计算，用户对额度消耗敏感度极高。

## 4. 重要 PR 进展（Top 10）

### 4.1 功能新增

**[#40799 — Support persistent reasoning effort](https://github.com/openai/codex/pull/40799)**

- **内容**: 在 reasoning-effort 协议及 TypeScript SDK 类型中新增 `persistent` 选项；TUI 中显示 "Persistent"；本地配置保留该字段。
- **意义**: 扩展推理强度协议，为新型持久推理模式提供前端支持。

**[#40785 — Add Vim character find and till motions](https://github.com/openai/codex/pull/40785)**

- **内容**: Vim 普通模式新增行内 `f`/`F`/`t`/`T` 移动；支持与 `c`/`d`/`y` 组合及 dot-repeat。
- **意义**: 提升 TUI 编辑器 Vim 模式完整度，改善 CLI 重度用户操作效率。

**[#40846 — Default Guardian v2 to computer-use reviews with images](https://github.com/openai/codex/pull/40846)**

- **内容**: Guardian v2 默认审查范围调整为 computer-use 工具，可配置回退至更广工具范围。
- **意义**: 安全审查机制向计算机操作场景聚焦，默认启用图像审查。

**[#40844 — Refine Guardian predictive risk classification](https://github.com/openai/codex/pull/40844)**

- **内容**: 风险预测评估窗口从最近 10 个操作缩至 5 个；高/临界风险动作在置信度高时标记。
- **意义**: 提升 Guardian 风险预测的响应速度与精确度。

### 4.2 一致性与正确性修复

**[#40821 — Use issuing step settings for approval decisions](https://github.com/openai/codex/pull/40821)**

- **内容**: 审批决策改用发出工具动作时的 step 设置，而非当前 turn 设置。
- **意义**: 修复延迟工具动作可能采用错误审批策略的问题，强化审批边界。

**[#40771 — Use turn environment settings for sandbox execution](https://github.com/openai/codex/pull/40771)**

- **内容**: 沙箱选择与进程设置跟随工具执行所属的环境配置，而非 turn 级全局配置。
- **意义**: 修复多环境场景下沙箱配置错配问题。

**[#40807 — Use step settings for MCP request metadata](https://github.com/openai/codex/pull/40807)**

- **内容**: MCP 工具调用元数据改用发起 step 的设置，而非 turn 初始设置。
- **意义**: 与 #40821 同属 step/turn 设置一致性修复，完善 MCP 请求溯源。

**[#40775 — Make history and notes tools Bridge-compatible](https://github.com/openai/codex/pull/40775)**

- **内容**: history 与 notes 工具参数改用 `anyOf` 表达可空类型，移除不支持的 schema 约束。
- **意义**: 提升跨后端兼容性，避免 Bridge 模式下参数校验失败。

### 4.3 基础设施与工具链

**[#40760 — Add OpenTelemetry tracing to the code-mode host](https://github.com/openai/codex/pull/40760)**

- **内容**: 新增 `--otel-trace-exporter`（OTLP/HTTP JSON）及互斥的 `--otel-trace-listen` 选项。
- **意义**: 为 code-mode host 提供标准可观测性支持，便于分布式诊断。

**[#40787 — Respect paginated history when stopping background tasks](https://github.com/openai/codex/pull/40787)**

- **内容**: 停止后台任务时通过 turn history 端点查询活动 turn，而非请求嵌入式完整历史。
- **意义**: 修复分页线程中后台任务停止逻辑，避免全量历史请求开销。

**[#40808 — Harden Windows sandbox helper cleanup](https://github.com/openai/codex/pull/40808)**

- **内容**: Windows 文件系统操作完成后确保 helper 进程清理；提升权限的沙箱进程不得在控制管道断开后存活。
- **意义**: 针对 Windows 沙箱进程生命周期与安全性的加固。

## 5. 功能需求趋势

从今日 Issue 与 PR 中可提炼出以下社区关注方向：

1. **Windows 平台稳定性**: 今日多个高赞 Issue（#40715、#40752、#40819）集中在 Windows 桌面端启动失败、路径处理（`.cmd` wrapper `spawn EINVAL`）与 MCP transport 兼容性。Windows 已成为桌面端主要痛点平台。
2. **MCP 配置与兼容性**: 多个 issue 指向 `mcp_servers.codex_app` 配置解析失败或 transport 初始化错误，涉及 Windows 与 WSL 场景，且跨版本行为不一致（Beta 正常、正式版异常）。
3. **会话/上下文可靠性**: 会话恢复（#38792）、上下文压缩状态丢失（#38931）、后台任务停止（#40787）等问题表明，长时间运行任务的会话一致性是 CLI 重度用户的核心诉求。
4. **审批安全边界**: `approval_policy` 移除（#39973）与 Guardian v2 调整（#40846、#40844）显示安全审查机制正在快速演进，但社区对破坏性配置变更敏感。
5. **TUI/编辑器体验**: Vim motions（#40785）、命令折叠开关（#39903）等请求表明终端交互体验精细化是持续需求。

## 6. 开发者关注点

- **认证与会话稳定性**: macOS 打开历史会话导致认证失效（#39162）、刷新令牌 10 秒后被标记失效（#40541）等认证问题严重影响日常使用，且困扰多个版本。
- **版本更新风险**: 多个问题集中在特定版本更新后突然失效（#40752、#40715、#40819、#37458），显示用户对新版本发布质量敏感，回退旧版本成为常见临时方案。
- **配置兼容性**: `approval_policy` 与 `startup_timeout_sec`（#29396）等配置项的行为变更或报错频繁出现，开发者希望配置变更走标准弃用流程。
- **配额与计费透明度**: Pro 20x 配额消耗异常（#40527）引发对计费逻辑的质疑，用户期望用量统计可解释、可审计。
- **MCP 相关调试困难**: `invalid transport` 错误在多个场景复现，但用户难以定位是配置问题、版本问题还是平台问题，期望更清晰的错误提示与迁移文档。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-26

## 今日速览

今日 Gemini CLI 发布 v0.59.0-nightly 与 v0.58.0-preview.0，核心包含 symlink 忽略路径处理和 Cloud Workstations OAuth 代理修复。社区关注焦点仍是 Agent 稳定性问题（子代理挂起、MAX_TURNS 误报）以及 Auto Memory 系统与浏览器代理的可靠性。安全方面，两项 CRITICAL 级依赖漏洞（simple-git、shell-quote）的修复 PR 今日获得更新。

## 版本发布

### v0.59.0-nightly.20260826.g64b5b79a6
- 版本号例行提升，包含上一 preview 的变更日志
- 暂无功能性变更说明

### v0.58.0-preview.0
- **修复**：`fix(core)` 确保忽略路径处理中 symlink 评估的一致性（PR #28915，作者：luisfelipe-alt）
- **重构**：core 模块（详情未完整披露）

### v0.57.0
- **修复**：动态解析 Cloud Workstations 代理重定向 URI 以支持 OAuth 流程（PR #28688，作者：amelidev）
- **修复**：解决 IDE 连接中目录不匹配被吞掉的问题

## 社区热点 Issues（Top 10）

1. **[#22323] 子代理在 MAX_TURNS 后误报 GOAL 成功** — [链接](https://github.com/google-gemini/gemini-cli/issues/22323)
   - P1 优先级 | 13 评论 | 2 👍
   - `codebase_investigator` 子代理在达到最大轮次限制后仍报告 `status: "success"`，掩盖了中断事实。维护者已标记需重新测试。此问题直接影响用户对代理完成状态的信任判断。

2. **[#21409] Generalist 代理无限挂起** — [链接](https://github.com/google-gemini/gemini-cli/issues/21409)
   - P1 优先级 | 8 评论 | 8 👍
   - 当 CLI 委派任务给 generalist 代理时永久挂起，最简单的操作（如创建文件夹）也会卡住，用户最久等待一小时。8 个👍 显示痛点广泛。

3. **[#25166] Shell 命令执行后卡在 "Waiting input"** — [链接](https://github.com/google-gemini/gemini-cli/issues/25166)
   - P1 优先级 | 4 评论 | 3 👍
   - 命令已完成但终端仍显示等待输入。影响日常交互流畅度，属高频 P1 痛点。

4. **[#26522] Auto Memory 无限重试低信号会话** — [链接](https://github.com/google-gemini/gemini-cli/issues/26522)
   - P2 | 5 评论
   - 提取代理跳过低信号会话时，该会话永远不会被标记为已处理，导致无限重试循环。属于资源浪费型 Bug。

5. **[#26525] Auto Memory 缺少确定性脱敏且日志过多** — [链接](https://github.com/google-gemini/gemini-cli/issues/26525)
   - P2 优先级 | 4 评论
   - 本地 transcript 在发送给提取模型前未做确定性脱敏，存在敏感信息泄露风险。安全相关，值得密切关注。

6. **[#19873] 利用模型 bash 亲和力：零依赖 OS 沙箱与执行后意图路由** — [链接](https://github.com/google-gemini/gemini-cli/issues/19873)
   - P2 / enhancement / effort/large | 8 评论
   - 提出让 Gemini 3 原生链式使用 POSIX 工具而非依赖受限工具集。方向性较强的架构建议。

7. **[#22745] 评估 AST 感知的文件读取/搜索/映射的价值** — [链接](https://github.com/google-gemini/gemini-cli/issues/22745)
   - P2 / EPIC | 7 评论
   - 探索通过 AST 感知工具减少工具调用轮次（如单次调用精确读取方法边界）。对长任务性能提升有潜力。

8. **[#21968] Gemini 主动使用 skills 和子代理的频率不足** — [链接](https://github.com/google-gemini/gemini-cli/issues/21968)
   - P2 | 6 评论
   - 用户反馈模型几乎不会自发使用自定义 skills，需要显式指令才触发。影响扩展生态的落地效果。

9. **[#20079] symlink 形式的 agent 文件不被识别** — [链接](https://github.com/google-gemini/gemini-cli/issues/20079)
   - P2 | 4 评论
   - `~/.gemini/agents/filename.md` 若为 symlink 则不会被识别。轻量但影响自定义工作流。

10. **[#22232] browser_agent 会话接管与锁恢复** — [链接](https://github.com/google-gemini/gemini-cli/issues/22232)
    - P3 / feature | 4 评论
    - 当前 `BrowserManager.ts` 采用 fail-fast 策略，遇到锁定的浏览器配置文件即失败。建议自动接管，提升浏览器代理的恢复力。

## 重要 PR 进展（Top 10）

1. **[#29098] fix(cli): 保持 useInputHistoryStore 状态更新器纯净** — [链接](https://github.com/google-gemini/gemini-cli/pull/29098)
   - 作者：Eswar809 | size/m | 8/26 创建
   - 修复 React 状态更新器内的副作用问题，避免 `setPastSessionMessages()` 与 `recalculateHistory()` 在 updater 中嵌套调用导致的状态异常。

2. **[#29091] perf(fileDiscovery): 大型仓库 O(n*m) 忽略过滤性能修复** — [链接](https://github.com/google-gemini/gemini-cli/pull/29091)
   - 作者：CheesyWannabe | P1 / size/m |
   - 解决大型仓库遍历时的多秒延迟问题，引入路径级结果缓存（`ignoreCache`）和目录级子树剪枝。修复 #29077，已关闭。

3. **[#29093] fix(core): ignoreCache 内存缓存实现** — [链接](https://github.com/google-gemini/gemini-cli/pull/29093)
   - 作者：CheesyWannabe | P1 / size/l |
   - 针对 #29077 的正式实现，按文件路径、目录标志和选项缓存 ignore 匹配结果，并支持子树剪枝。与 #29091 为同一问题的不同提交。

4. **[#29094] fix: 升级 simple-git 至 3.32.3（CVE-2026-28292）** — [链接](https://github.com/google-gemini/gemini-cli/pull/29094)
   - 作者：anupamme | 8/26 创建 | CRITICAL 严重级别
   - 修复 `CVE-2026-28292`，由 trivy 扫描发现。注意：早前同一 CVE 的 PR #28778 已关闭，本次为重新提交。

5. **[#29095] fix: 升级 shell-quote 至 1.8.4（CVE-2026-9277）** — [链接](https://github.com/google-gemini/gemini-cli/pull/29095)
   - 作者：anupamme | 8/26 创建 | CRITICAL 严重级别
   - 修复 `CVE-2026-9277`。同样，之前提交的 #28780 已关闭。

6. **[#29092] fix(core): 防止 LLM 提示模板中的 $-pattern 插值** — [链接](https://github.com/google-gemini/gemini-cli/pull/29092)
   - 作者：dylanyunlon | size/l | 已关闭
   - 修复 `String.prototype.replace('{placeholder}', userControlledValue)` 中 `$` 序列的特殊解析问题 — 用户可控值中的 `$` 模式可能被错误解释，存在提示注入风险。修复 #29044。

7. **[#28888] fix(a2a): 允许 launcher workspace 位于 home 目录之外** — [链接](https://github.com/google-gemini/gemini-cli/pull/28888)
   - 作者：sylvesterkaczmarek | P2 / area: security, platform | size/m
   - 使用 launcher 提供的 `CODER_AGENT_WORKSPACE_PATH` 作为默认限制根目录，同时保留 `CODER_AGENT_ALLOWED_ROOT` 显式配置。修复 #28782。

8. **[#28790] fix(core): 容量错误的上下文感知静默重试与可用性 TTL** — [链接](https://github.com/google-gemini/gemini-cli/pull/28790)
   - 作者：DavidAPierce | P1 / size/l | 已关闭
   - 修复 #28761 容量耗尽重试回归，为非交互式 CLI 运行引入上下文感知重试策略。

9. **[#29097] fix(extensions): 仅剥离 GitHub 仓库名尾部的 .git 后缀** — [链接](https://github.com/google-gemini/gemini-cli/pull/29097)
   - 作者：Eswar809 | size/s
   - 修复 `tryParseGithubUrl` 使用 `replace('.git', '')` 剥离首次出现而非尾部后缀的问题。如 `blog.github.io` 被错误解析为 `hub.io`。

10. **[#28911] fix(cli): sandbox launcher 仅识别 DEBUG=true/1** — [链接](https://github.com/google-gemini/gemini-cli/pull/28911)
    - 作者：rekcilyssup | area/platform | size/m
    - 统一 sandbox launcher 与容器 entrypoint 的 `DEBUG` 环境变量判定逻辑，仅接受显式值 `true`/`1`。

## 功能需求趋势

- **Agent 可靠性治理**：多项 P1 Issue（#22323、#21409、#25166）指向子代理回收、挂起与状态误报，社区对 Agent 稳定性诉求强烈。相关 PR 集中在容量重试与浏览器代理并发场景。
- **Auto Memory 系统安全加固**：#26522/#26523/#26525/#26516 四条 Issue 均由 SandyTao520 提出，涉及无限重试、无效 patch 静默跳过、确定性脱敏缺失等。内存系统进入密集打磨期。
- **性能优化与 AST 感知**：#29091/#29093 解决大型仓库遍历延迟；#22745 探索 AST 感知文件读取以降低工具调用轮次。大规模代码库用户对性能敏感度上升。
- **工具使用效率与安全性**：#19873 提出零依赖 OS 沙箱与意图路由，#22672 要求阻止破坏性 git 操作。社区对"更安全且高效地使用 shell"有明确期待。

## 开发者关注点

- **高频痛点**：通用代理挂起（#21409，8👍）与 shell 执行后卡死（#25166）是当前干扰日常使用最严重的两个问题。两者均处于 P1 且已对维护者可见，但尚无关闭性更新。
- **安全敏感度提升**：两项 CRITICAL 级 CVE（CVE-2026-28292、CVE-2026-9277）修复 PR 被重新提交，说明维护者正在处理之前被关闭的 PR；Auto Memory 的脱敏问题（#26525）也反映了用户对数据隐私的关切。
- **配置一致性**：sandbox launcher 与容器 entrypoint 的 `DEBUG` 判定不一致（#28911）、browser_agent 忽略 `settings.json` 覆盖（#22267），说明多个子系统的配置对齐仍有欠账。
- **API 与工具链小型缺陷**：#29097（GitHub URL 解析的 `.git` 剥离错误）与 #20079（symlink agent 不被识别）属于轻量但影响体验的小问题，值得优先修复。


</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-26

## 今日速览

今日发布两个公开预发布版本（v1.0.81-10 / v1.0.81-11），其中插

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-26

## 今日速览

今日仓库无新版本发布，也无新增 PR 动态。社区焦点集中在两个方向：一是 0.38.0 版本在 macOS 上出现 Edit/Write 工具“假成功”但未实际写盘的严重问题（Issue #2617），二是用户对官方脚本安装版本号与仓库不一致产生疑惑（Issue #2618）。此外，两条 2 月份提交的旧 Issue（#1248、#1249）于今日被关闭，说明维护者正在清理历史积压问题。

## 版本发布

过去 24 小时内无新版本发布。

## 社区热点 Issues

> 由于仓库活跃 Issue 仅 4 条，以下全量列出，按优先级排列：

**#2617 — Edit/Write 工具报告成功但从未写盘（0.38.0, macOS）**
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/2617
- 作者: tizerluo | 创建/更新: 2026-08-25 | 评论: 2 | 👍: 0
- 重要性: 极高。**数据丢失类 Bug**，属于阻断性缺陷。Edit/Write 工具返回成功信息但文件无任何变更，100% 可复现，影响所有依赖文件写入的工作流。2 条评论表明社区有讨论，但目前 0 个点赞，关注度尚未扩散。
- 状态: OPEN

**#2618 — 官方脚本安装的最新版本是 0.38，这个怎么是 1.49**
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/2618
- 作者: mawenwu1983 | 创建/更新: 2026-08-26 | 评论: 0 | 👍: 0
- 重要性: 中等。用户对**版本号体系混乱**提出疑问：官方安装脚本拉取的是 0.38.0，而仓库中已出现 1.49 的引用（可能来自 Issue #1248 中的版本字段）。这暴露了发布流程中版本标注不一致的问题，容易造成用户混淆，可能暗示 0.38.0 是一个独立于主线版本的发布分支。
- 状态: OPEN

**#1249 — [enhancement] new session 时检查命令行环境**
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/1249
- 作者: ljwzz | 创建: 2026-02-26 | 更新: 2026-08-26 | 评论: 0 | 👍: 1
- 重要性: 中低。用户在 PowerShell 中启动 CLI，但系统提示词默认按 bash 生成命令，每次需手动纠正。该 Issue 在今日被关闭（未合并），说明维护者已处理或搁置。1 个 👍 说明有一定需求基础，但 6 个月无评论，优先级不高。
- 状态: CLOSED

**#1248 — [bug] kimi code cli 运行与 mcp 的冲突**
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/1248
- 作者: guxiaxunhuan | 创建: 2026-02-26 | 更新: 2026-08-26 | 评论: 0 | 👍: 0
- 重要性: 中低。Kimi Code CLI（1.14.0）与 MCP（Model Context Protocol）存在运行冲突，报告未提供具体错误详情。今日被关闭，可能是因长期无补充信息或已在其他渠道解决。
- 状态: CLOSED

## 重要 PR 进展

过去 24 小时内无新增或更新的 PR。

## 功能需求趋势

从全部活跃 Issue 中提炼出的社区关注方向如下：

1. **跨平台 Shell 环境自适应**（#1249）—— 用户要求 CLI 在启动新会话时自动检测当前 Shell（PowerShell/bash）并写入系统提示词，减少命令格式返工。

2. **高版本特性可见性与一致性**（#2618）—— 社区对版本号差异产生困惑的本身，反映了对**版本发布透明度**和**更新日志可追溯性**的隐含需求。

## 开发者关注点

1. **写操作可靠性是第一优先级**（#2617）：文件编辑/创建是 CLI 最核心的操作，出现“假成功”且不可写入的 Bug 会直接导致用户数据丢失和工作流中断，需要紧急热修复。

2. **版本号混乱影响信任度**（#2618）：0.38 与 1.49 并存让用户难以确认自己处于哪个发布轨道，建议维护者统一版本管理策略，在文档或脚本中明确说明各版本对应关系。

3. **环境集成细节值得打磨**（#1249）：跨 Shell 的默认行为差异虽非致命，但属于高频体验痛点。该 Issue 已关闭，建议开发者关注后续版本是否有相关改进落地。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-26

> 数据来源: github.com/anomalyco/opencode

---

## 今日速览

今日社区热度集中在**沙箱安全能力**（#2242，89 评论）与**消息队列管理**（#4821，27 评论）两大核心诉求上，两者均为长期悬而未决的高赞功能请求。此外，Web UI 2.0 的会话 URL 直接打开白屏问题（#43667）成为新出现的活跃 bug 反馈，值得关注。PR 侧无合并合入动态，但桌面端文档预览（#45164）与垂直会话标签（#45210）为新功能亮点。

---

## 社区热点 Issues

### 1. [#2242] 沙箱化 agent：限制终端命令访问范围 🔥
- **作者**: edmBernard | 评论: 89 | 👍: 73 | 状态: OPEN
- **摘要**: 请求在 macOS 上提供类似 gemini-cli/codex-cli 的 seatbelt 沙箱，限制 agent 终端命令仅能访问当前目录内文件。
- **值得关注**: 社区最高赞 + 最高评论的 Issue，安全隔离是用户核心焦虑点。
- [链接](https://github.com/anomalyco/opencode/issues/2242)

### 2. [#4821] 功能请求：支持取消已排队消息 🔥
- **作者**: Mishkun | 评论: 27 | 👍: 93 | 状态: OPEN
- **摘要**: 当前消息入队后无法撤销，请求增加 "unqueue" 能力。
- **值得关注**: 93 👍 表明该交互痛点在长时间会话中普遍存在。
- [链接](https://github.com/anomalyco/opencode/issues/4821)

### 3. [#12405] 错误：Connection reset by server（Windows 环境）
- **作者**: LIFue | 评论: 21 | 状态: CLOSED
- **摘要**: Windows 10 + 代理环境下，配置 ZHIPU GLM4.7 后运行 init 命令报错连接重置。
- **值得关注**: Windows 环境下的稳定性/代理兼容问题是高频复现场景。
- [链接](https://github.com/anomalyco/opencode/issues/12405)

### 4. [#2447] Windows 安装 opencode 后命令不可用
- **作者**: weroperking | 评论: 17 | 👍: 7 | 状态: CLOSED
- **摘要**: npm 全局安装 `opencode-ai` 后，PowerShell 中 `opencode` 命令报 `/bin/sh.exe` 无法识别。
- **值得关注**: Windows 开箱即用体验的经典痛点，长期被社区关注。
- [链接](https://github.com/anomalyco/opencode/issues/2447)

### 5. [#35649] Kitty 终端中跨行链接无法点击
- **作者**: sporteka2 | 评论: 7 | 👍: 3 | 状态: OPEN
- **摘要**: opencode 1.17.13 在 Kitty 0.32.2（Linux Mint）中输出的跨行 OSC 8 超链接不可点击。
- **值得关注**: 终端兼容性细分问题的持续反馈。
- [链接](https://github.com/anomalyco/opencode/issues/35649)

### 6. [#43102] Upstream request failed: Endpoint is unavailable
- **作者**: agarbanzo | 评论: 6 | 状态: OPEN
- **摘要**: 新会话中运行两个不同模型均报上游端点不可用错误。
- **值得关注**: 多模型切换时上游连通性问题的具体案例。
- [链接](https://github.com/anomalyco/opencode/issues/43102)

### 7. [#44577] deepseek 模型提示 API key invalid，且缺少新模型
- **作者**: CaiXj1976 | 评论: 5 | 状态: OPEN
- **摘要**: deepseek 模型报 API key 无效（其他模型正常）；同时缺少 GPT 5.6 Luna、GLM-5.3、Qwen3.8 Max 等新模型。
- **值得关注**: 反映社区对新模型支持速度的期待与第三方提供商配置问题。
- [链接](https://github.com/anomalyco/opencode/issues/44577)

### 8. [#38966] 功能请求：支持单独操控运行中的 subagent
- **作者**: iceteaSA | 评论: 4 | 状态: OPEN
- **摘要**: 子代理运行中无法单独进行转向、取消或中止操作。
- **值得关注**: 多代理协作场景下控制粒度的提升需求。
- [链接](https://github.com/anomalyco/opencode/issues/38966)

### 9. [#43667] [2.0] Web UI：直接打开会话 URL 渲染空白页
- **作者**: nico2525nn | 评论: 3 | 状态: OPEN
- **摘要**: 直接访问 `/server/{serverKey}/session/{sessionID}` 时主内容区空白，消息时间线不渲染；从列表导航则正常。
- **值得关注**: 2.0 Web UI 新出现的路由级 bug，影响分享/直链场景。
- [链接](https://github.com/anomalyco/opencode/issues/43667)

### 10. [#37946] 中止的 assistant turn 导致会话损坏（400 空消息）
- **作者**: Oloompa | 评论: 3 | 👍: 1 | 状态: OPEN
- **摘要**: 流式中止后持久化的空 assistant 消息被重放给 provider，报 400 "must not be empty"，导致会话无法继续。
- **值得关注**: 会话恢复/中止的边界条件处理缺陷，影响长时间使用的可靠性。
- [链接](https://github.com/anomalyco/opencode/issues/37946)

---

## 重要 PR 进展

### 1. [#43460] fix(core): 使用 schema 自身实例解码插件工具输入
- **作者**: argszero | 创建: 08-19 | 状态: OPEN
- **内容**: 修复配置插件捆绑不同版本 `effect` 时插件工具输入解码错误的问题。Closes #43322。
- [链接](https://github.com/anomalyco/opencode/pull/43460)

### 2. [#45164] feat(desktop): Office 文件与 PDF 文档预览
- **作者**: xirothedev | 创建: 08-26 | 状态: OPEN
- **内容**: 桌面端新增 Office 文件与 PDF 的应用内预览，一次性关闭 6 个相关 Issue（#44950-#44955）。
- [链接](https://github.com/anomalyco/opencode/pull/45164)

### 3. [#45218] feat(app): 项目 favicon 发现与选择
- **作者**: Brendonovich | 创建: 08-26 | 状态: OPEN
- **内容**: 新增位置感知的项目图标发现接口，在项目设置中展示候选 favicon 并支持保存所选图标。
- [链接](https://github.com/anomalyco/opencode/pull/45218)

### 4. [#45210] feat(app): 实验性垂直会话标签页
- **作者**: Hona | 创建: 08-26 | 状态: CLOSED
- **内容**: 新增"实验性外观"设置，支持水平/垂直会话标签布局，默认水平；保留导航、快捷键、重命名与关闭行为。
- [链接](https://github.com/anomalyco/opencode/pull/45210)

### 5. [#45217] fix(app): 合并已加载技能与指令文件条目
- **作者**: opencode-agent[bot] | 创建: 08-26 | 状态: CLOSED
- **内容**: 将连续成功加载的技能条目合并为单行逗号分隔，指令文件同理，并按单复数正确标注。
- [链接](https://github.com/anomalyco/opencode/pull/45217)

### 6. [#45219] fix(plugin): 支持文档化的工具注册方式
- **作者**: fancive | 创建: 08-26 | 状态: OPEN
- **内容**: 修复 Promise 插件文档中 `tools.add(name, definition, options)` 注册方式不生效的问题。Fixes #43753。
- [链接](https://github.com/anomalyco/opencode/pull/45219)

### 7. [#44493] fix(core): v2 bash 工具拒绝 fish shell
- **作者**: mcostasilva | 创建: 08-23 | 状态: CLOSED
- **内容**: v2 bash 工具补上与 v1 一致的 shell 接受逻辑，显式拒绝 fish 和 nu。Closes #44434。
- [链接](https://github.com/anomalyco/opencode/pull/44493)

### 8. [#45027] fix(console): 校验认证重定向
- **作者**: adamdotdevin | 创建: 08-25 | 状态: CLOSED
- **内容**: 调用 OpenAuth 前校验 OAuth client 与 redirect URI，允许注册应用使用 HTTPS 回调与本地开发回调。
- [链接](https://github.com/anomalyco/opencode/pull/45027)

### 9. [#41695] feat(opencode): Termux 一键安装脚本
- **作者**: openchat-ai | 创建: 08-11 | 状态: OPEN
- **内容**: 新增 `termux-install.sh` 一键安装脚本及文档，支持在 Termux（Android）上部署 opencode。
- [链接](https://github.com/anomalyco/opencode/pull/41695)

### 10. [#40005] feat(background): 后台运行长耗时 shell 命令
- **作者**: openchat-ai | 创建: 08-01 | 状态: OPEN
- **内容**: 长耗时 shell 命令可在后台运行，不阻塞对话继续。为 #39978 的重新提交。Closes #39769。
- [链接](https://github.com/anomalyco/opencode/pull/40005)

---

## 功能需求趋势

| 需求方向 | 相关 Issues | 热度信号 |
|---------|------------|---------|
| **沙箱/权限隔离** | #2242（89 评论, 73 👍） | 单一 Issue 热度极高，安全诉求集中 |
| **消息/会话管理** | #4821（27 评论, 93 👍）、#38966 | 队列控制与 sub-agent 控制需求上升 |
| **终端兼容性** | #35649、#26695（macOS Cmd+V 图片粘贴）、#45226（中断键自定义） | 各终端平台细节适配持续被提出 |
| **新模型支持** | #44577、#43102 | 对 GPT 5.6 Luna、GLM-5.3、Qwen3.8 Max 等新模型的期待 |
| **Web UI 2.0 稳定性** | #43667 | 新 UI 框架的早期 bug 反馈开始出现 |
| **本地化/国际化** | #42447（希伯来语） | 小语种支持需求出现 |
| **输入交互增强** | #7516（键盘复制剪切）、#45180（Ctrl+C 行为可配置） | 键盘操作精细化需求持续 |

---

## 开发者关注点

- **Windows 环境稳定性**: #12405 与 #2447 均涉及 Windows 安装与运行问题（代理、shell 路径），是高频复现场景，值得官方优先处理。
- **沙箱安全**是当前第一诉求：用户明确要求 macOS seatbelt 级别的终端访问限制，期待跟进上游做法（gemini-cli/codex-cli）。
- **中断/恢复可靠性**需关注：#37946 的会话损坏 bug 与 #45180 的 Ctrl+C 可配置请求均指向会话生命周期管理的细节打磨。
- **provider/上游错误可诊断性不足**: #43102 与 #44577 中错误信息无法指导用户定位是 key、网络还是模型配置问题，提示错误提示体系有优化空间。
- **新模型跟进速度**是社区活跃话题，多个模型（GPT 5.6 Luna、GLM-5.3、Qwen3.8 Max）未被内置支持，社区期望更快的供应商模型更新节奏。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-26

## 1. 今日速览

今日 Pi 社区修复集中在两个核心方向：一是**多 provider 的 compaction 缺陷**（xAI/Grok、GitHub Copilot、Anthropic 因 tool_choice 与 tools 不匹配导致失败）；二是**流式处理与 TUI 性能问题**（O(n²) reasoning 累积、自动补全排序）。社区对 auto-compaction 失效问题（#6879）持续高度关注，已积累 23 条评论。此外，NVIDIA InferenceHub 与 Opper 两个新 provider 的 PR 表明生态扩展正在加速。

## 2. 版本发布

过去 24 小时无新版本发布。多个 Issue 提及 0.84.3 版本引入的回归问题（#8620、#8638）。

## 3. 社区热点 Issues

### #6879 — auto-compaction 在上下文超限后永不触发（OPEN，23 评论，👍19）
**链接**: [earendil-works/pi Issue #6879](https://github.com/earendil-works/pi/issues/6879)

**摘要**: GPT-5.6 会话中单次 agentic turn 运行超 2 小时，footer 越过压缩阈值后持续增长至 >100% 上下文窗口，compaction 直到 API 拒绝请求才触发。

**重要性**: 当前社区关注度最高的 issue，直接影响长会话稳定性，在上下文溢出后进入不可恢复状态。

### #8166 — 工具批次中途注入自定义消息破坏 tool_calls→tool 邻接（OPEN，10 评论）
**链接**: [earendil-works/pi Issue #8166](https://github.com/earendil-works/pi/issues/8166)

**摘要**: 扩展在 tool batch 中途注入 custom message，导致后续每一轮都因 DeepSeek 400 错误失败（"tool must be a response to preceding tool_calls"）。

**重要性**: 反映扩展 API 与消息序列约束之间的兼容性问题，影响所有依赖中途消息注入的扩展。

### #8620 — 0.84.3 捆绑 CLI 中所有全局扩展模块加载失败（OPEN，3 评论）
**链接**: [earendil-works/pi Issue #8620](https://github.com/earendil-works/pi/issues/8620)

**摘要**: 升级 0.84.3 后，`~/.pi/agent/extensions/` 下所有引用 `@earendil-works/pi-coding-agent` 等包的扩展报 "Cannot find module" 错误。

**重要性**: 最新版本引入的回归问题，阻断所有全局扩展使用。

### #8648 — O(n²) reasoning_details 累积冻结事件循环（CLOSED，2 评论）
**链接**: [earendil-works/pi Issue #8648](https://github.com/earendil-works/pi/issues/8648)

**摘要**: openai-completions 流处理器在长 reasoning_details 序列时每 chunk 重新解析全部累积的 thinkingSignature，导致进程冻结。

**重要性**: 长推理模型（如 GPT-5.6）下的严重性能缺陷，已有对应修复 PR #8671。

### #8649 — openai-responses 无 tools 时发送 tool_choice 导致 xAI 400（CLOSED，3 评论）
**链接**: [earendil-works/pi Issue #8649](https://github.com/earendil-works/pi/issues/8649)

**摘要**: `/compact` 在 xAI/Grok 上失败：compaction 总是发送 `toolChoice: "none"` 但不附带 tools，xAI 拒绝该请求。

**重要性**: 与 #8638 同属一类问题，影响 Grok 与 GitHub Copilot 用户的 compaction 功能。

### #8638 — GitHub Copilot compaction 发送 tool_choice 但无 tools（CLOSED，3 评论）
**链接**: [earendil-works/pi Issue #8638](https://github.com/earendil-works/pi/issues/8638)

**摘要**: 0.84.3 中 `/compact` 搭配 `github-copilot/gemini-3.6-flash` 失败，返回 400 "tools are required when tool choice is specified"。

**重要性**: 影响使用 GitHub Copilot 作为 provider 的用户，已有关联修复 PR #8633、#8650。

### #8000 — @ 文件自动补全中直接子目录被深层匹配压制（CLOSED，4 评论）
**链接**: [earendil-works/pi Issue #8000](https://github.com/earendil-works/pi/issues/8000)

**摘要**: `@~/<dir>/` 自动补全时，深层嵌套匹配（如 venv/site-packages 下文件）在 basename 相同时压制直接子目录结果。

**重要性**: TUI 日常使用高频路径，已由 #8669 修复。

### #8665 — 强制开启 OSC 8 超链接的逃生舱（OPEN，2 评论）
**链接**: [earendil-works/pi Issue #8665](https://github.com/earendil-works/pi/issues/8665)

**摘要**: 提议新增 `PI_HYPERLINKS=1|0|auto` 环境变量作为超链接检测的强制开关，因为当前检测在 PTY 代理后失败关闭（fail-closed）。

**重要性**: 影响用户在 tmux/代理环境下的 TUI 体验。

### #6600 — npm 11.16.0 阻止安装脚本导致扩展更新流程中断（OPEN，4 评论）
**链接**: [earendil-works/pi Issue #6600](https://github.com/earendil-works/pi/issues/6600)

**摘要**: npm 11.16.0 默认阻止 install scripts，导致 `pi update --extensions` 流程失败。

**重要性**: 与 npm 生态变更联动，长期未解决，影响扩展安装与更新。

### #8666 — anthropic-messages 无 parameters 的扩展工具导致请求崩溃（CLOSED，2 评论）
**链接**: [earendil-works/pi Issue #8666](https://github.com/earendil-works/pi/issues/8666)

**摘要**: 扩展注册无 parameters schema 的工具时，anthropic-messages provider 每个请求同步抛 TypeError。

**重要性**: 扩展 API 边界条件处理缺陷，需要更加健壮的 schema 默认值。

## 4. 重要 PR 进展

### #8671 — 修复 O(n²) thinking signature 序列化（CLOSED）
**链接**: [earendil-works/pi PR #8671](https://github.com/earendil-works/pi/pull/8671)

**内容**: 修复 #8648。通过保留 `reasoning_details` 在内存中的增量状态，避免每个 chunk 重新解析和序列化完整累积的 `thinkingSignature`。

**意义**: 消除长推理场景下的 O(n²) 性能瓶颈，对 GPT-5.6 等长推理模型至关重要。

### #8669 — TUI 自动补全嵌套结果排序修复（CLOSED）
**链接**: [earendil-works/pi PR #8669](https://github.com/earendil-works/pi/pull/8669)

**内容**: 修复 #8000。替换有问题的 `getFuzzyFileSuggestions` 实现，该实现调用递归 `fd --max-results 100`，在 `@~/<dir>/xxx` 场景下容易淹没在深层匹配中。

**意义**: 提升 TUI 文件自动补全的实用性。

### #8658 — 工具执行中止时停止循环（CLOSED）
**链接**: [earendil-works/pi PR #8658](https://github.com/earendil-works/pi/pull/8658)

**内容**: 修复用户按下 Stop 时产生两次 "cancelled" 结果的问题——运行中的工具被中止（预期行为）之外，排队中的 steering turn 还会出现第二次虚假失败。

**意义**: 改善用户取消操作时的反馈准确性和一致性。

### #8656 — 修复 pi update 后启动失败（CLOSED）
**链接**: [earendil-works/pi PR #8656](https://github.com/earendil-works/pi/pull/8656)

**内容**: 修复 jiti v2.6.1 移除 `./static` export 导致的启动失败；修复 web-ui 的模块声明类型错误。

**意义**: 确保版本更新后的平滑迁移。

### #8664 — NVIDIA InferenceHub 升级为内置 provider（CLOSED）
**链接**: [earendil-works/pi PR #8664](https://github.com/earendil-works/pi/pull/8664)

**内容**: 将基于 LiteLLM 的 NVIDIA InferenceHub 网关提升为 `@earendil-works/pi-ai` 中的一等公民内置 provider，支持 Claude、GPT、Gemini、DeepSeek、Llama 及 NVIDIA 自托管模型。

**意义**: 扩展了企业级用户的模型访问渠道。

### #8639 — 新增 Opper provider（CLOSED）
**链接**: [earendil-works/pi PR #8639](https://github.com/earendil-works/pi/pull/8639)

**内容**: 添加 Opper 作为内置 OpenAI 兼容 provider（`https://api.opper.ai/v3/compat`，`OPPER_API_KEY`），包括 provider module、models.dev 生成目录、注册、env key、默认模型、文档及兼容性覆盖。

**意义**: 持续丰富 provider 生态。

### #8650 — 无 tools 时省略 Responses tool_choice（CLOSED）
**链接**: [earendil-works/pi PR #8650](https://github.com/earendil-works/pi/pull/8650)

**内容**: `/compact` 调用 `completeSimple` 时发送 `toolChoice: "none"` 且不附带 tools，导致 xAI 返回 400。修复为无 tools 时省略 tool_choice。

**意义**: 修复 Grok 上 `/compact` 与溢出 compaction 的失败问题。

### #8635 — 保留 lazy setup 期间的中止 stop reason（OPEN）
**链接**: [earendil-works/pi PR #8635](https://github.com/earendil-works/pi/pull/8635)

**内容**: 修复 #8409。将请求中止信号传递给 lazy stream setup wrapper，在信号已中止时将 setup 失败报告为 aborted，并添加中止回归测试。

**意义**: 改善工具执行中止时的行为正确性。

### #8642 — Bedrock 工具结果图片提升到 toolResult 之外（CLOSED）
**链接**: [earendil-works/pi PR #8642](https://github.com/earendil-works/pi/pull/8642)

**内容**: OpenAI 模型在 Bedrock 上（如 `us.openai.gpt-5.6-sol`）拒绝任何将图片嵌套在 `toolResult.content` 中的请求，该 PR 将这些图片移至同级 content 块。

**意义**: 修复工具返回图片时的会话中断，影响所有 Bedrock 上的 OpenAI 模型用户。

### #8641 — bash 可用时加载 skills（CLOSED）
**链接**: [earendil-works/pi PR #8641](https://github.com/earendil-works/pi/pull/8641)

**内容**: 修复 #8551。`bash` 可用但 `read` 被禁用时也包含 skills 部分，并调整 skill 加载指引和系统提示词回归测试。

**意义**: 完善受限环境下的 skills 功能可用性。

## 5. 功能需求趋势

| 趋势方向 | 相关 Issues/PRs | 说明 |
|---------|----------------|------|
| **Compaction 可靠性** | #6879, #8649, #8638, #8633, #8650, #8651, #8652 | 多 provider 下 compaction 发送无效请求、预留 token 未按模型缩放、摘要检查不充分，是当前最大痛点 |
| **新 Provider 支持** | #8664, #8639 | NVIDIA InferenceHub 内置化、Opper 加入，持续扩展 OpenAI 兼容 provider 面 |
| **TUI 交互体验** | #8547, #8665, #8669 | 编辑器光标点击定位、OSC 8 超链接逃生舱、自动补全排序优化 |
| **性能优化** | #8648, #8671, #8653 | reasoning 流处理 O(n²) 修复、reasoning effort 钳制、高上下文场景的流式性能 |
| **扩展 API 能力** | #8666, #8668 | 无 schema 工具崩溃防御、暴露 acknowledged prompt 与队列控制 API |
| **中止/取消语义** | #8658, #8635 | 单次 Stop 操作不应产生双重取消、中止信号在 lazy setup 中的正确传递 |

## 6. 开发者关注点

- **Auto-compaction 失效的严重后果（#6879）**：在长 agentic turn 中 compaction 不触发，直到 API 拒绝请求才介入，这会导致整个会话不可恢复，是当前最紧急的稳定性问题。
- **Compaction 请求的 provider 兼容性**：xAI/Grok 与 GitHub Copilot 均因 `tool_choice` 与 tools 不匹配而拒绝 compaction 请求（#8649、#8638），此类问题需要跨 provider 的请求参数统一治理。
- **0.84.3 版本回归**：捆绑 CLI 扩展加载失败（#8620）和 Copilot compaction 回归（#8638）提示发布前需要更全面的回归测试覆盖。
- **npm 生态联动问题持续**：#6600 已存在一个月以上，npm 11.16.0 默认阻止 install scripts 导致的扩展更新中断尚未有修复方案。
- **扩展开发者的边界条件痛点**：无 parameters schema 的工具直接导致崩溃（#8666）、消息注入破坏 tool_calls 邻接（#8166），说明扩展 API 的输入校验和消息序列约束需要更多的防御性处理。
- **推理密集型模型性能**：O(n²) reasoning 累积（#8648）说明需要为长推理序列设计增量式处理架构，而非每次重新解析全量数据。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-26

## 今日速览

今日发布两个预览版本（v0.22.2-preview.1 与桌面端 v0.2.2），核心修复围绕 Goal 续写提示收敛为统一守卫契约。社区焦点集中在 0.22.1 版本中 `permissions.allow` 白名单导致 `edit`/`write_file` 工具静默消失的回归 bug（#10075），以及 Agent Team 多智能体功能上暴露的一系列消息传递与路由问题（#10069-#10073）。

## 版本发布

### v0.22.2-preview.1
- **fix(goal)**：将三个续写提示（continuation prompts）收敛为单一的守卫契约（guarded contract），统一 Goal 续写行为（PR #9834）
- **feat(core)**：require explicit user opt-in（详情见 release notes）

### Qwen Code Desktop v0.2.2
- 与 CLI v0.22.2-preview.1 共享相同的两项核心修复（Goal 续写收敛 + core 变更）

## 社区热点 Issues（Top 10）

1. **[#10075] 0.22.1 回归：配置 permissions.allow 后 edit/write_file 工具静默消失**（P1，4 条评论）
   配置白名单后，未被覆盖的内置工具直接从会话中消失而非延迟注册。作者 @GCGH159 呼吁发布前进行 smoke-test。已有对应修复 PR #10082。
   [链接](https://github.com/QwenLM/qwen-code/issues/10075)

2. **[#4063] core + cli 架构 Review：14 项结构性问题清单**（进行中，10 条评论，👍1）
   长期跟踪的架构审查 issue，P0 级问题包括核心类型系统被 `@google/genai` 类型绑架。社区讨论持续数月，今日仍有更新。
   [链接](https://github.com/QwenLM/qwen-code/issues/4063)

3. **[#8724] Cross-session messaging：同机多会话间消息互通**（P2，9 条评论）
   多智能体路线图下的功能提案：让同机运行的 Qwen Code 会话通过 `list_agents` 发现彼此、`send_message` 定向通信。社区讨论活跃。
   [链接](https://github.com/QwenLM/qwen-code/issues/8724)

4. **[#9061] Windows CLI 上 Ctrl+V 粘贴完全失效**（P1，7 条评论）
   自 0.21.0 至 0.21.11 间引入的回归，Windows 平台 CLI 粘贴无响应，影响日常使用。
   [链接](https://github.com/QwenLM/qwen-code/issues/9061)

5. **[#10072] Agent Team：broadcast 在部分投递被拒时仍报告完全成功**（P2，4 条评论）
   `send_message(to: "*")` 即使部分接收方拒绝投递，仍返回 "Message broadcast to all teammates"。静态代码审查发现，尚未实测复现。
   [链接](https://github.com/QwenLM/qwen-code/issues/10072)

6. **[#10069] Agent Team：切换队友标签后排队消息消失**（P2，3 条评论）
   在 Agent View 中队友忙碌时提交的后续消息，切换标签页再返回后排队消息不再显示，疑似丢失。
   [链接](https://github.com/QwenLM/qwen-code/issues/10069)

7. **[#10071] Agent Team：命名队友忽略 agent 定义中的自定义模型路由**（P2，3 条评论）
   同一个自定义 agent 定义，作为普通子代理时使用 `.qwen/agents/<name>.md` 中配置的模型路由，但作为命名队友（named teammate）启动时路由被忽略。
   [链接](https://github.com/QwenLM/qwen-code/issues/10071)

8. **[#10073] Agent Team：send_message 报 "background task not found" 错误**（P2，3 条评论）
   向命名队友发消息时报 `No background task found with ID "qa-reviewer"`，原始工具调用参数已不可追溯。
   [链接](https://github.com/QwenLM/qwen-code/issues/10073)

9. **[#9198] 长时间运行后 OOM 问题**（P2，7 条评论）
   服务器 1TB 内存仍跑出 OOM，连续运行一周多未退出，且 OOM 后 tmux 终端按键错乱。
   [链接](https://github.com/QwenLM/qwen-code/issues/9198)

10. **[#9944] MCP reconnect 报成功但工具仍不可用**（P2，已关闭，4 条评论）
    HTTP 传输的 MCP 服务器重启后，`qwen mcp reconnect --all` 报告成功但 MCP 工具实际不可用，mcp-session-id 已更换。
    [链接](https://github.com/QwenLM/qwen-code/issues/9944)

## 重要 PR 进展（Top 10）

1. **[PR #10082] fix(core): 白名单未覆盖工具改为延迟注册而非移除**（修复 #10075）
   针对 0.22.1 的回归，将 `permissions.allow` 未覆盖的内置工具从"完全不注册"改为"延迟注册"，恢复 `edit`/`write_file` 的可用性。
   [链接](https://github.com/QwenLM/qwen-code/pull/10082)

2. **[PR #10136] feat(review): re-review 轮次改为 fix-audit 形态**
   当多轮 review 进入 critical-only 模式（`floor: c`）后，re-review 轮次不再全量 fan-out，改为 fix-audit 审计形态，收敛审查成本。Closes #10104。
   [链接](https://github.com/QwenLM/qwen-code/pull/10136)

3. **[PR #9771] feat(autofix): 长时间 review 轮次中保持状态评论实时更新**
   修复 review 轮次可能持续数小时但 PR 状态评论冻结在 "🔄 working" 的问题，避免健康的长轮次与死循环无法区分。
   [链接](https://github.com/QwenLM/qwen-code/pull/9771)

4. **[PR #10139] refactor(cli): 移除未使用的 ApiKeyInput 组件**
   清理无任何代码引用的 API-key 输入组件及其关联的 plan-type 接口和常量。
   [链接](https://github.com/QwenLM/qwen-code/pull/10139)

5. **[PR #10128] fix(cli): 限制 goal-runtime 启动等待并跳过无操作的 Bun 内存重启**
   两处启动路径健壮性修复：goal-runtime 就绪等待增加 5 秒超时；跳过无实际效果的内存重启。
   [链接](https://github.com/QwenLM/qwen-code/pull/10128)

6. **[PR #10002] feat(core): 内置 goal-draft 技能**
   新增只读技能 `/goal-draft <intent>`，将模糊意图转换为 Goal verifier 可判断的 `/goal` 目标。
   [链接](https://github.com/QwenLM/qwen-code/pull/10002)

7. **[PR #8276] fix(core): 延迟工具发现时保留 prompt cache**
   将延迟工具目录从启动与生命周期 `<system-reminder>` 消息移至 `tool_search` 函数描述中，从注册表动态重建，减少不必要的 cache 失效。
   [链接](https://github.com/QwenLM/qwen-code/pull/8276)

8. **[PR #9929] fix(artifacts): artifact 内容变更时刷新 updatedAt**
   会话 artifact 内容变化时 `updatedAt` 随之更新，工作区文件编辑被检测到后暴露实时的 `sizeBytes`。
   [链接](https://github.com/QwenLM/qwen-code/pull/9929)

9. **[PR #9659] feat(review): 本地 review-fix 循环的内容锚定增量轮次**
   已在 #9190 上获得 20 条 review 和 166 条 inline comments，因原 PR 所在堆栈无法合并而重新落地到 main。
   [链接](https://github.com/QwenLM/qwen-code/pull/9659)

10. **[PR #10085] ci: Linux E2E 分片迁移至持久化运行池**
    将 `e2e-test-linux` 路由到持久化的 `ecs-qwen` 池，带仓库守卫与 kill-switch 回退。
    [链接](https://github.com/QwenLM/qwen-code/pull/10085)

## 功能需求趋势

1. **Agent Team / 多智能体协作**（最热门方向）：跨会话消息传递（#8724）、队友间 broadcast 可靠性（#10072）、自定义模型路由（#10071）、UI 状态一致性（#10069）——多智能体功能正在密集迭代中，bug 集中爆发说明该功能处于活跃开发阶段。
2. **Terminal UX 与渲染架构**：ink→OpenTUI 迁移（#8662）、macOS+tmux IME 光标错位（#8177）、VP 模式底部对齐（PR #9305）——终端渲染层持续优化中。
3. **Review/autofix 自动化流程打磨**：fix-audit 形态（#10136）、状态评论实时更新（#9771）、内容锚定增量轮次（#9659）——团队在持续优化代码审查自动化体验。
4. **Goal 系统演进**：goal-draft 技能（#10002）、Goal 续写契约收敛（release notes）——Goal 体系的可用性在持续打磨。
5. **Settings/权限模型修复**：白名单工具注册行为（#10075）——0.22.1 引入的权限配置回归引发关注。

## 开发者关注点

- **发布质量**：0.22.1 的 `permissions.allow` 回归（#10075）引发对发布前 smoke-test 的呼吁；Windows Ctrl+V 粘贴回归（#9061）跨度多个版本未被发现——社区对发布质量有明确不满。
- **多智能体功能可靠性**：#10069-#10073 连续 4 个 Agent Team 相关 bug 在同一天提交，覆盖消息丢失、错误路由、误报成功、内部错误四大类问题，该功能目前可靠性堪忧。
- **性能问题**：1TB 内存服务器仍 OOM（#9198）、长时间运行不退出后的资源耗尽——长会话场景下的内存管理是痛点。
- **MCP 连接可靠性**：reconnect 报成功但工具实际不可用（#9944）——HTTP 传输下的会话管理存在缺陷。
- **模型支持**：deepseekv4flash-vision-exp 图片能力缺失（#9832）、LM Studio + qwen3.6-35b 的 grammar 解析失败（#10065）——第三方模型/后端的兼容性问题持续存在。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-26

> 数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（注：数据中 Issue/PR 链接均跳转至上游镜像 Hmbown/CodeWhale）

---

## 1. 今日速览

今日社区聚焦于**会话运行时的可观测性与外部监管能力**：多条新 Issue 围绕实时 Token 计数、上下文压力告警、非阻塞式用户输入窥探工具提出增强建议；PR 侧则有三个高价值改进已提交——聚焦转录操作、实时 Token 总数展示、压缩后输入 Token 上报。此外，Windows 平台下 `--model`/`--toolsets` 参数被拼接为一个参数的老 Bug 仍悬而未决，持续受到关注。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues（10 条）

### 🐛 Bug 类

**#4564 — `codewhale exec --auto`：Windows 下 `--model` 与 `--toolsets` 参数被拼接为单参数**
作者：alozano978-spec | 创建于 07-19 | 最后更新：08-26 | 评论：3

Windows + npm 全局安装环境下，`exec` 前置的 `--model` 和 `--toolsets` 会被拼成一个参数，仅 `--max-steps N` 可用。作者建议支持 exec 前置 flags 或新增 `CODEWHALE_*` 环境变量变通方案。
→ [Issue #4564](https://github.com/Hmbown/CodeWhale Issue #4564)

---

**#4956 — Provider 网络错误：连接请求发送失败**
作者：RelicOfTesla | 创建于 07-28 | 最后更新：08-26 | 评论：3

WSL2 环境下安装后无法连接 API 提供方。涉及 WSL2 网络栈与代理配置问题，虽标为 `stale/needs-info`，但 8-26 仍有更新，说明维护方仍在排查。
→ [Issue #4956](https://github.com/Hmbown/CodeWhale Issue #4956)

---

**#4568 — 新版斜杠指令（`/xxx`）响应迟缓，性能不如上一版本**
作者：whp233 | 创建于 07-19 | 最后更新：08-26 | 评论：2

Windows 10 + 最新版下，任意 `/xxx` 斜杠指令输入后有明显卡顿延迟，怀疑新版性能优化出现回退。中文社区持续关注此回归问题，但已持续一个多月未关闭，值得留意。
→ [Issue #4568](https://github.com/Hmbown/CodeWhale Issue #4568)

---

**#5620 — 上下文压力告警是瞬态且 Agent 不主动应对**
作者：ronohara | 创建于 08-26 | 更新于 08-26 | 评论：1

中等级 Bug：上下文压力告警仅短暂闪现，Agent 不会主动据此调整行为（如触发压缩或改写策略），可能导致静默的上下文质量退化。
→ [Issue #5620](https://github.com/Hmbown/CodeWhale Issue #5620)

---

**#5617 — 后台 Git 命令频繁执行，git 探测持有 `.git/index.lock` 导致 `git commit` 偶发失败**
作者：LmeSzinc | 创建于 08-25 | 更新于 08-25 | 评论：2

CodeWhale 内部只读 Git 探测（仓库徽章、workspace 上下文、`@status`/`@diff` 等）持有 index.lock，导致开发者自己的 `git commit` 偶发失败。触发后续 #5618 的重构讨论。
→ [Issue #5617](https://github.com/Hmbown/CodeWhale Issue #5617)

---

### ✨ 增强类

**#5625 — 非阻塞式“待处理用户输入”窥探工具，支持回合中段引导**
作者：ronohara | 创建于 08-26 | 更新于 08-26 | 评论：1

提案：为 agent 运行时增加非阻塞 peek 工具，让 agent 在长任务回合中段感知“有待处理的用户输入”，无需阻塞等待即可继续工作，服务于 human-in-the-loop 协作场景。
→ [Issue #5625](https://github.com/Hmbown/CodeWhale Issue #5625)

---

**#5581 — 事件粒度审计：回合边界处卡顿的界面表面**
作者：Hmbown | 创建于 08-23 | 更新于 08-25 | 评论：2

#5578 成本修复的后续：跨多模型调用的长回合中，只监听 `TurnComplete` 事件的界面会看起来完全冻结。已审计并列出存活数据源与仍存卡顿的表面——直接推动今日 #5624/#5623 两个 PR。
→ [Issue #5581](https://github.com/Hmbown/CodeWhale Issue #5581)

---

**#5618 — 用 gix（gitoxide）替换内部 `git` CLI 调用**
作者：LmeSzinc | 创建于 08-25 | 更新于 08-25 | 评论：1

#5617 的延续：排除了锁问题后，还剩两项代价——每操作产生子进程的进程开销、以及依赖用户 PATH 中的 git 二进制。提议改用纯 Rust 的 gix 库，提升跨平台一致性。
→ [Issue #5618](https://github.com/Hmbown/CodeWhale Issue #5618)

---

**#5533 — 受监管运行的控制平面：per-session 控制套接字 + RuntimeBackendKind::External**
作者：M-Maciej | 创建于 08-21 | 更新于 08-25 | 评论：3

外部监管场景（如 herdr 类终端复用器/自动化框架）：新增 per-session 控制套接字（消息/中断/重启/状态查询）与 `RuntimeBackendKind::External`，让外部 supervisor 无需人类在场即可监管 agent 会话。
→ [Issue #5533](https://github.com/Hmbown/CodeWhale Issue #5533)

---

**#5482 — EPIC（文档）：审查、部分重构并全面中文化文档**
作者：SparkofSpike | 创建于 08-17 | 更新于 08-25 | 评论：2

中文用户群体持续增长，但 `docs/` 下大量文档仅英文，机器翻译引入错误。提案系统化推进文档中文化，配套 PR #5613 已开始落地 Tier-2 的中文翻译。
→ [Issue #5482](https://github.com/Hmbown/CodeWhale Issue #5482)

---

### 🏗️ 元/EPIC 类

**#5316 — EPIC-005：CodeWhale TUI Crate 分解（伞状跟踪）**
作者：aboimpinto | 创建于 08-10 | 更新于 08-25 | 评论：16

社区讨论热度最高（16 条评论）的伞状 EPIC，跟踪 TUI crate 分解的整个结构（含所有子 EPIC 与 FEAT），是当前架构演进的主线索。
→ [Issue #5316](https://github.com/Hmbown/CodeWhale Issue #5316)

---

## 4. 重要 PR 进展（10 条）

### 🚀 功能增强

**#5624 — feat(tui)：展示会话实时 Token 总数**
作者：wuisabel-gif | 创建于 08-26 | 更新于 08-26

落实 #5581 首片：回合运行时，每次模型调用的 `TurnUsage` 进入仅展示用途的 pending 账本——输入/输出/总 Token + 失败/压缩调整。直接回应“回合跨度大时界面看起来冻结”的反馈。
→ [PR #5624](https://github.com/Hmbown/CodeWhale PR #5624)

---

**#5608 — feat(tui)：聚焦转录操作**
作者：wuisabel-gif | 创建于 08-25 | 更新于 08-26 | ✅ 已合并

转录区聚焦且输入框为空时：`y` 复制规范化块内容、`Y` 复制渲染的元数据/回执。为 #5551 已批准的聚焦切片。
→ [PR #5608](https://github.com/Hmbown/CodeWhale PR #5608)

---

**#5623 — feat(tui)：上报压缩后输入 Token**
作者：h3c-hexin | 创建于 08-26 | 更新于 08-26

`CompactionCompleted` 事件新增 `post_input_tokens` 字段；在共享完成事件发送器中一次性计算，复用引擎 canonical 输入估算，保证值跨界面一致。为完整压缩成本视图补齐最后一块拼图。
→ [PR #5623](https://github.com/Hmbown/CodeWhale PR #5623)

---

**#5622 — feat(tui)：支持 Kimi Code k3-256k 模型**
作者：h3c-hexin | 创建于 08-26 | 更新于 08-26

将 `k3-256k` 加入 Kimi Code 成员名单，固定 262,144 Token 上下文窗口与 K3 输出/推理契约；membership-plan 上下文覆盖保持仅限裸 `k3`，泛型 `temp`/上下文参数不被默认覆盖。
→ [PR #5622](https://github.com/Hmbown/CodeWhale PR #5622)

---

**#5621 — fix(tui)：使 edit-last-turn 边界具有权威性**
作者：h3c-hexin | 创建于 08-26 | 更新于 08-26

使 edit-last-turn 定位到最近的真实用户编写 prompt（而非任何持久化的 `role="user"` 消息）；将不支持的用户内容视为权威边界而非删除更早回合；同时触发语义与回调。
→ [PR #5621](https://github.com/Hmbown/CodeWhale PR #5621)

---

### 🐛 修复

**#5616 — fix(tui)：将 git_status/git_diff 移出异步执行器线程**
作者：rafaelcavalheri | 创建于 08-25 | 更新于 08-25 | ✅ 已合并

`GitStatusTool`/`GitDiffTool` 在 async `execute()` 内直接调用阻塞式 `std::process::Command::output()`，可能卡死 tokio worker 池并挂起整个会话。已修复。
→ [PR #5616](https://github.com/Hmbown/CodeWhale PR #5616)

---

### 🏗️ 工程 & 治理

**#5576 — 0.9.12 集成：必修复 + UX 修复（WIP）**
作者：Hmbown | 创建于 08-23 | 更新于 08-25

v0.9.12 周期的集成分支，release 阻塞项已 gate 且代码完整；剩余 pre-review 工作为版本号提升 + changelog/RC gates（跟踪：#5573）。**在 gates 变绿前不得合并。**
→ [PR #5576](https://github.com/Hmbown/CodeWhale PR #5576)

---

**#5612 — fix(web)：保持已发布版本事实更新（而非事后修补）**
作者：Hmbown | 创建于 08-25 | 更新于 08-25 | ✅ 已合并

`web/data/latest-published-release.json` 为手工维护且从未被写入，一直停留在 **v0.9.10** 而 **v0.9.11** 已于 08-23 发布。后果不止表面：营销站点等消费方展示过期版本信息。
→ [PR #5612](https://github.com/Hmbown/CodeWhale PR #5612)

---

**#5613 — docs(i18n)：修复英文文档不准确之处并新增 Tier-2 简体中文翻译**
作者：SparkofSpike | 创建于 08-25 | 更新于 08-25 | ✅ 已合并

审查新简体中文文档集时发现多处英文源文档与代码库矛盾（`provider_defaults.rs`、`child_env.rs` 等），一并修复并补齐 Tier-2 翻译。配合 #5482 中文 EPIC。
→ [PR #5613](https://github.com/Hmbown/CodeWhale PR #5613)

---

**#5615 — 避免跨 manager 重启复用子审批 ID**
作者：cyq1017 | 创建于 08-25 | 更新于 08-25 | ✅ 已合并

子审批 ID 生成格式为 `agent:<agent_id>:approval:<sequence>`，序列号随每个 `SubAgentManager` 重启重置；若持久化子 agent ID 被新 manager 恢复，首个审批 ID 可能复用旧 ID，造成冲突。
→ [PR #5615](https://github.com/Hmbown/CodeWhale PR #5615)

---

**#5544 — feat(web)：将 docs/subagents 与 docs/mcp 迁移至字典主架构**
作者：Lstarsky0 | 创建于 08-22 | 更新于 08-25 | ✅ 已合并

#5337 系列的下一组（前序 #5520）：`docs/subagents` 与 `docs/mcp` 分别有 16 和 18 个 `isZh` 条件分支，现已全部清零。每页两个字典、`types.ts` 与 `index.ts` 接线完成。
→ [PR #5544](https://github.com/Hmbown/CodeWhale PR #5544)

---

## 5. 功能需求趋势

从今日 Issues 与 PR 中可提炼出以下社区重点方向：

| 方向 | 代表 Issue / PR | 热度 |
|------|----------------|------|
| **会话可观测性**（实时 Token、生命周期事件、事件粒度审计） | #5624, #5623, #5581, #5531 | 🔥 高 — 三条活跃 PR + 多条 issue，核心痛点 |
| **外部监管/supervisor 集成**（控制套接字、RuntimeBackendKind::External、生命周期 outbox） | #5533, #5531 | 🔥 高 — M-Maciej 连续提交，自动化运维场景需求明确 |
| **Human-in-the-loop 协作增强**（非阻塞 peek、紧急反馈通道） | #5625 | 🌕 中 — 新提案，尚未有实现 |
| **Git 集成可靠性**（锁冲突、gix 替换、异步化） | #5617, #5618, #5616 | 🌕 中 — 已被前两个 issue + 一个已合入 PR 覆盖 |
| **新模型支持**（Kimi Code k3-256k 等） | #5622 | 🌕 中 — 持续跟进主流模型发布 |
| **中文社区建设**（文档中文化、i18n 修复） | #5482, #5613, #5544 | 🌕 中 — EPIC 级进展，多 PR 合入 |

---

## 6. 开发者关注点

**高频痛点：**

1. **长回合中的“冻结感”** — 多模型调用的长回合中，界面只在 `TurnComplete` 更新会导致看似完全冻结（#5581）。社区连续提交 3 个 PR 解决此问题，是目前最集中的改进方向。

2. **Git 锁冲突干扰日常工作流** — CodeWhale 的只读 git 探测会持有 `.git/index.lock`，导致开发者自身 `git commit` 失败（#5617）。修复路径正从两个方向推进：减少 CLI 子进程调用（#5616 已合入）与替换为 gix 纯 Rust 实现（#5618 提案中）。

3. **Windows / WSL2 环境问题** — `exec` 参数被拼接（#4564）与 WSL2 网络连接失败（#4956）均为长期未关闭的环境相关 bug，虽标 `stale` 但仍在维护。

4. **斜杠指令性能回归** — Windows 10 下 `/xxx` 指令响应明显变慢（#4568），用户明确表达了“性能不如上一版本”的不满。

**治理亮点：**

- 外部贡献者自动化授权通道已运行（#5619 `pr:wuisabel-gif`）
- 发布流程中版本事实（`latest-published-release.json`）曾过期 3 天未被发现（#5612），已建立失败即阻断的机制
- ci 检查的可靠性补强：release-note 回执检查无法执行时，现在将直接失败（#5614）

---

> **一句话总结**：今日社区主题是“让 AI 会话更透明、更可控”——实时 Token 可视化、上下文压力主动应对、外部 supervisor 集成是当下的三大主攻方向。建议关注 #5581 的后续演进（今日 2 个 PR 均为其落地切片），以及 #5618 的 gix 替换方案是否会进入 0.9.12 里程碑。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*