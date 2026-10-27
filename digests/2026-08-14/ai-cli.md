# AI CLI 工具社区动态日报 2026-08-14

> 生成时间: 2026-08-14 02:26 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-14）

## 1. 生态全景

2026-08-14 单日，9 款主流 AI CLI 工具合计发布 12 个版本（6 个稳定版、6 个预发布），活跃 Issue 超 130 条、PR 更新 63 条，整体处于高频迭代期。多智能体协作、MCP 生态可靠性与上下文透明化是跨工具的共同攻坚方向；Windows 平台稳定性、供应链安全与配置"静默失效"问题在各仓库密集暴露，说明工具能力扩张明显快于工程化成熟度。Claude Code 与 OpenAI Codex 代表第一梯队的成熟度，但社区反馈显示新功能上线的回归风险是当前共同挑战。

## 2. 各工具活跃度对比

| 工具 | 活跃 Issue | PR 更新 | Release | 迭代节奏 |
|------|-----------|---------|---------|---------|
| Claude Code | ~50（约 15 条涉 Windows 跨会话） | 2 | v2.1.231 / v2.1.232 | 稳定版 + 新特性 |
| OpenAI Codex | Top 10 | 10 | 4 个 alpha | 高频预发布打磨 |
| Gemini CLI | Top 10 | 10 | 1 个 nightly | 夜间构建 + 安全加固 |
| GitHub Copilot CLI | Top 10 | 1 | v1.0.80-0 / v1.0.80-1 | 功能诉求密集、PR 交付偏少 |
| Kimi Code CLI | 3 | 0 | 无 | 低活跃 |
| OpenCode | Top 10 | 10 | 无 | 社区驱动、性能优化 |
| Pi | Top 10 | 10 | 无 | 稳定打磨期 |
| Qwen Code | Top 10 | 10 | v0.21.11 + v0.21.12-preview.1 | 多智能体加速推进 |
| DeepSeek TUI | Top 10 | 10 | v0.9.7 | 品牌迁移 + 重构期 |

> 注：除 Claude Code 明确披露 50 条、Kimi 3 条外，其余仓库数据来自日报代表性 Top 10 列表，实际总数可能更高。

## 3. 共同关注的功能方向

**① 多会话协作与多智能体编排** — 最显著的共性方向
- Claude Code：Subagent forking 默认开启、跨会话 @ 提及（v2.1.232）
- Qwen Code：`/coordinate` 原生多智能体命令、Agent Plugins v1（v0.21.11）
- OpenAI Codex：实验性线程队列 API、thread/revert 分页回滚（PR #38456、#38440）
- Copilot CLI：会话共享状态显示（2 clients）、外部构建会话监控面板需求（#4470）
- DeepSeek TUI：多子 Agent 编排的收敛与超时问题（#1425）

**② MCP 生态从"能连上"走向"生产级"**
- Codex：MCP stdio fd 泄漏致 EMFILE（#26984）、OAuth 回调端口支持（PR #38448）
- Copilot CLI：OAuth 刷新并发互斥（#4472）、瞬时 5xx 导致会话级不可用（#4466）
- Claude Code：修复 MCP OAuth 登录失败（v2.1.231）
- OpenCode：MCP 连接成功但工具未暴露给 Agent（#33027）

**③ 上下文与 Token 计费的透明化**
- Claude Code：advisor() 虚报 token 触发过早自动压缩（#53065）
- Pi：上下文超限后 auto-compaction 不触发，直到 provider 报错（#6879，17👍）
- OpenCode：上下文修剪静默丢弃指令性内容（#42437）、V2 压缩请求超出窗口（#42448）
- Codex：上下文压缩时保留客户端 developer 消息（PR #38445）

**④ Windows 平台稳定性** — 各工具共识短板
- Claude Code：50 条 Issue 中近 15 条为 Windows 桌面跨会话消息故障
- Qwen Code：Ctrl+V 粘贴失效（#9061，P1）、安装器 SHA-256 校验失败（#7118）
- Copilot CLI：`--server --stdio` 进程泄漏（#4468）
- Codex：桌面状态写入无崩溃安全（#26990）

**⑤ 安全与供应链**
- Gemini CLI：修复工作流 RCE 漏洞（PR #28740）、升级 simple-git 修复 CVE（PR #28778）
- OpenCode：curl|bash 安装无完整性校验（#42434）、webfetch SSRF（#42435）
- Qwen Code：npm update 后暴露 2 个高危漏洞（#8944）

**⑥ 模型/Provider 中立化**
- Codex：新增 Amazon Bedrock provider（PR #38470）
- Gemini CLI：新增 Claude Sonnet 4.5 / Opus 4.8 模型定义（PR #28803）
- Pi：Grok 4.6 支持呼声、Bedrock Mantle provider（PR #6216）
- DeepSeek TUI：DS4 本地模型一等支持（PR #5365）
- Copilot CLI：`explore` 工具硬编码 gpt-5.4-mini，忽略自定义模型配置（#3954）

## 4. 差异化定位分析

| 工具 | 定位 | 差异化亮点 | 当前主要矛盾 |
|------|------|-----------|-------------|
| Claude Code | 企业级多智能体 CLI | Subagent forking 默认开启；跨会话 @ 提及；生态最成熟 | 企业安全策略一致性（CVP）与 Windows 回归 |
| OpenAI Codex | OpenAI 生态快速迭代 | 单日 4 个 alpha；线程/队列 API 前瞻布局 | 更新回归频率偏高（Remote Control、IDE Context） |
| Gemini CLI | 多模型中立、安全优先 | 容量错误自动重试；多 Provider 定义；供应链加固 | 基础输入响应问题（回车无响应、假死） |
| GitHub Copilot CLI | GitHub 原生 Agent 工作流 | Agent 级模型/推理强度配置体系；会话共享 | 配置静默忽略（模型覆盖、allowed_directories） |
| Kimi Code CLI | ACP/自动化集成场景 | 轻量，聚焦协议层 | 流式挂死、8.8 万 token 乱码，活跃度不足 |
| OpenCode | 开源社区驱动的轻量 TUI | 社区 PR 密集（性能懒加载）、插件生态 | 半年未解的 "Preparing write" 卡死、v2 迁移断裂 |
| Pi | 极致终端体验与性能 | 视觉行缓存、终端状态恢复、多后端适配 | auto-compaction 触发不可靠、大文本性能 |
| Qwen Code | 全栈多智能体平台 | `/coordinate`、Agent Plugins v1、Web Shell/Desktop 全覆盖 | Windows 与 Vertex AI 第三方模型集成不稳 |
| DeepSeek TUI | 品牌重塑期的长文本分析工具 | DS4 本地模型、NIM 接入、大文本场景 | agent 工具 32 字段 schema 过复杂、会话收敛差 |

**关键差异判断**：Claude Code 与 Qwen Code 在多智能体战略上最激进（默认开启/原生命令）；Codex 与 Pi 在会话/线程治理上投入最大（队列、回滚、缓存）；OpenCode、Pi、DeepSeek TUI 更强调终端体验与轻量部署；Copilot CLI 与 Gemini CLI 则分别在 GitHub 生态与多模型中立上建立壁垒。

## 5. 社区热度与成熟度

| 梯队 | 工具 | 判断依据 |
|------|------|---------|
| 高活跃 · 相对成熟 | **Claude Code** | 50 Issue/日、Top Issue 94 评论、企业级用户深度参与 |
| 高活跃 · 相对成熟 | **Qwen Code** | 稳定版 + 预览版同日发布、10 PR、多智能体路线图清晰 |
| 高迭代 · 稳定性承压 | **OpenAI Codex** | 单日 4 alpha，但回归反馈密集（VS Code Context、Remote Control） |
| 高社区声量 · 工程待提升 | **OpenCode** | 78 评论痛点 Issue 持续半年、安全质疑集中、10 个社区 PR |
| 稳健推进 | **Gemini CLI / Pi / Copilot CLI / DeepSeek TUI** | PR 活跃但多为修复与打磨，无重大功能跳跃（Copilot 仅 1 PR） |
| 低活跃 | **Kimi Code CLI** | 3 Issue、0 PR、0 Release，两个可靠性 Bug 待根治 |

**成熟度结论**：Claude Code 功能与生态最成熟，但 Windows 桌面端成为明显短板；Qwen Code 与 DeepSeek TUI 处于"能力快速扩张、工程质量追赶"阶段；Kimi Code 是唯一明显掉队的样本，需警惕社区信心流失。

## 6. 值得关注的趋势信号

**① 多智能体协作正从"概念验证"走向"默认体验"**
Claude Code 将 subagent forking 默认开启、Qwen Code 落地 `/coordinate`、Codex 布局线程队列 API——三巨头同日推进同一方向。**对开发者的意义**：单会话"孤岛模式"正在被打破，工作流设计需提前考虑多会话依赖、消息编排与任务收敛策略。

**② MCP 是最拥挤的可靠性短板，也是下一轮竞争力分水岭**
fd 泄漏、OAuth 并发刷新冲突、瞬时故障无重试，问题集中在 Codex 与 Copilot CLI 中爆发。**对开发者的意义**：重度依赖 MCP 工具的团队应关注客户端对 OAuth 刷新、重试与并发调用的实现成熟度，不能只看"能否连接"。

**③ 上下文与 Token 的可观测性成为信任基石**
Claude Code 的 advisor 虚报 token、Pi 的 compaction 失效、OpenCode 的静默修剪，共同指向一个诉求：用户需要能区分主对话/辅助推理的 token 消耗，并对压缩行为有控制权。**对开发者的意义**：在选型时，将"上下文管理是否透明、可干预"作为与模型能力同等重要的评估维度。

**④ Windows 平台体验正在成为选型分水岭**
Claude Code 的 Windows 桌面消息故障（15/50）、Qwen Code 的 Ctrl+V 回归、Copilot CLI 的进程泄漏，说明多数工具在 Windows 上的成熟度远低于 macOS/Linux。**对开发者的意义**：含 Windows 开发者的团队，应将平台专项回归测试的投入视为工具厂商的隐性承诺。

**⑤ 供应链安全从 CI 最佳实践下沉为社区集体意识**
Gemini 修复工作流 RCE、OpenCode 用户质疑 curl|bash 安装、Qwen 报告 npm 高危漏洞——**对开发者的意义**：评估开源 CLI 时，应检查安装链路校验、依赖扫描与 CI 权限最小化实践，而非仅看功能列表。

**⑥ CLI 工具正演变为"统一 Agent 运行时"，模型可替换性是默认约束**
Codex 接入 Bedrock、Gemini CLI 支持 Claude、Pi 支持 Grok/Codex 后端、DeepSeek TUI 支持 DS4/NIM——**对开发者的意义**：避免被单一模型绑定，优先选择 Provider 抽象层成熟的工具，以降低未来模型切换成本。

**⑦ 长会话治理是隐性的护城河**
Pi 的 compaction 失效、OpenCode 的半年卡死、Codex 的线程回滚、Qwen 的 session 恢复超时（#8678）——多工具同时在补课。**对开发者的意义**：长时运行任务的稳定性（恢复、压缩、审计）比单次生成质量更能决定工具的长期可用性，建议在选型时通过长会话压力测试验证。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-08-14 ｜ 数据源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行

按社区评论热度排序（Top 8，当前状态均为 **OPEN**，无一合并——这本身就说明了问题：社区大量精力花在"修"，而不是"合"）：

### ① PR #1298 — skill-creator 评估引擎修复（热度第一）
- **功能**：修复 `run_eval.py` 恒定报 `recall=0%` 的核心缺陷——该脚本是 skill 描述优化循环的信号源，已致 10+ 次独立复现；同时修 Windows 流读取、触发检测、并行 worker 问题。
- **社区热点**：直接对应 issues #556、#1169。社区共识是"当前优化循环正在对噪声做优化"，这是 skill 创作者最痛的阻塞点。
- **状态**：Open（与 #1099、#1050 的 Windows 修复构成修复簇，等待官方整合）
- 🔗 https://github.com/anthropics/skills/pull/1298

### ② PR #514 — document-typography 文档排版质量 Skill
- **功能**：拦截 AI 生成文档的常见排版问题——孤字回绕（1–6 词溢出到下一行）、页尾孤立标题、编号错位。
- **社区热点**：针对"每个 Claude 文档"都会出现的通用痛点，讨论焦点是应独立成 Skill 还是内置为 docx/pdf 的基础能力。
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/514

### ③ PR #538 — pdf Skill 大小写引用修复
- **功能**：修复 `skills/pdf/SKILL.md` 中 8 处大小写不一致的引用（`REFERENCE.md` → `reference.md` 等），解决大小写敏感文件系统上的加载失败。
- **社区热点**：虽是小修复，但暴露了官方 Skill 在跨平台（Linux/macOS 大小写敏感）上的质量把关缺口。
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/538

### ④ PR #486 — ODT（OpenDocument）处理 Skill
- **功能**：创建、填充、读取、转换 ODT/ODS 文件，覆盖 LibreOffice 与 ISO 开放标准格式，含模板填充及 ODT→HTML 解析。
- **社区热点**：填补 docx/pdf 之外的开放文档格式空白，社区讨论集中在模板填充语义与转换边界的界定。
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/486

### ⑤ PR #210 — frontend-design Skill 重构
- **功能**：重写 frontend-design skill，确保每条指令都能在单次对话内被 Claude 真正执行，提升可操作性与内部一致性。
- **社区热点**：与 issue #202 对 skill-creator"教学腔、不 operational"的批评同频，反映社区对 Skill 指令**可执行性**的普遍高要求。
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/210

### ⑥ PR #83 — skill-quality-analyzer + skill-security-analyzer 元 Skill
- **功能**：新增两个"治理 Skill 的 Skill"——质量分析器（结构/文档/示例/资源五维评分）与安全分析器。
- **社区热点**：直接回应 #492 对 Skill 安全和质量缺口的担忧，是生态进入"自我治理"阶段的标志性提案。
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/83

### ⑦ PR #541 — docx 修订模式 w:id 冲突修复
- **功能**：修复 DOCX Skill 添加修订时 `w:id` 与既有书签共享 ID 空间导致文档损坏的问题。
- **社区热点**：OOXML 的 `w:id` 是书签/修订/批注/移动范围的共享 ID 空间，原示例硬编码低 ID 值有高碰撞风险——社区对 Office 文档保真度的关注度持续走高。
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/541

### ⑧ PR #539 — skill-creator 对未加引号 YAML description 的告警
- **功能**：在 `quick_validate.py` 中增加预解析校验，检测未加引号的 description 中含 `:` 导致的 YAML 静默解析失败。
- **社区热点**：与 #1298、#202 同属"skill-creator 工具链质量"主线，说明元工具的可靠性已成为社区最大共识痛点。
- **状态**：Open
- 🔗 https://github.com/anthropics/skills/pull/539

---

## 2. 社区需求趋势

### ① 安全与信任边界（最强音，43 条评论）
**Issue #492**：社区 Skill 挂在 `anthropic/` 命名空间下分发，造成信任边界滥用——用户可能将社区 Skill 误认为官方 Skill 并授予高权限。这是全仓库评论数最高的 issue，且长期未关闭（3 月提出、7 月仍活跃），说明官方尚未给出明确的命名空间治理方案。
🔗 https://github.com/anthropics/skills/issues/492

### ② 企业协作与分发能力（最高赞，8👍）
**Issue #228**：要求在 Claude.ai 内支持**组织级 Skill 共享**，替代"下载 .skill 文件→Slack/Teams 传→手动上传"的原始流程。说明企业用户已把 Skill 视为团队资产，而非个人工具。
🔗 https://github.com/anthropics/skills/issues/228

### ③ Agent 自我治理类新 Skill（方向最明确的三连提案）
| Issue | 提案 | 要点 |
|---|---|---|
| #1329 | compact-memory | 符号化紧凑记忆，解决 agent 长期运行中上下文被散文式笔记耗尽的问题 |
| #412 | agent-governance | 策略执行、威胁检测、信任评分、审计轨迹等治理模式 |
| #1385 | 推理质量门流水线 | 预任务校准→对抗性审查→交付验证（其中一步已实现为 PR #1367） |

社区正在系统性地给"agent 自身"造 Skill——管记忆、管安全、管输出质量。
🔗 https://github.com/anthropics/skills/issues/1329 ｜ https://github.com/anthropics/skills/issues/412 ｜ https://github.com/anthropics/skills/issues/1385

### ④ 工具链可靠性与资源效率（集中爆发的不满）
- **#556**（12 评论，7👍）：run_eval.py 中 `claude -p` 0% 触发率；**#1169** 独立复现 recall=0%。
- **#202**：skill-creator 冗长、教学腔、违反自有命名规范。
- **#1487**：claude-api skill 单次调用注入 ~156k token，直接榨干上下文窗口。
- **#189**（9👍，最高赞）：document-skills 与 example-skills 插件内容重复，浪费上下文。
- **#12**：docx 技能添加批注后因多写空白导致文档无法被 Word 打开。
🔗 https://github.com/anthropics/skills/issues/556 ｜ #202 ｜ #1487 ｜ #189

### ⑤ 互操作与平台扩展
- **#16**：将 Skills 暴露为 MCP 协议，用统一 API 封装 agent 能力。
- **#29**：AWS Bedrock 上使用 Skills 的支持请求（已搁置近一年，仍无官方答复）。
🔗 https://github.com/anthropics/skills/issues/16 ｜ https://github.com/anthropics/skills/issues/29

---

## 3. 高潜力待合并 Skills

以下 PR 均未合并，但社区关注度高、作者在活跃迭代或价值明确，近期落地概率大：

| 优先级 | PR | Skill/修复 | 落地信号 |
|---|---|---|---|
| ★★★ | #1298 | skill-creator eval 修复 | 关联两个高赞 issue（#556、#1169），多作者提交重叠修复（#1099、#1050），官方合并整合压力最大 |
| ★★★ | #1538 | Skill 规范合规修复 | 仓库自身是 Agent Skills 规范的参考实现，`skills-ref validate` 失败必须被修 |
| ★★★ | #568 | ServiceNow 企业平台 Skill | 作者仍在持续迭代（8/12 最新更新），覆盖 ITSM/ITOM/SecOps 等广谱场景 |
| ★★☆ | #514 | document-typography | 解决所有 AI 文档的通用排版缺陷，零冲突依赖 |
| ★★☆ | #1367 | self-audit 输出审计 | 有配套 proposal（#1385）支撑，v1.3.0 已迭代，治理向 Skill 是强需求 |
| ★★☆ | #83 | skill 质量/安全分析器 | 直接回应 #492 治理缺口，两个 Skill 天然互补 |
| ★★☆ | #723 | testing-patterns | 测试是高频刚需，内容完备（Testing Trophy/AAA/React Testing Library） |
| ★☆☆ | #486 | ODT Skill | 开放文档格式需求稳健，无明显争议点 |

🔗 链接格式：https://github.com/anthropics/skills/pull/1298（按编号替换）

---

## 4. Skills 生态洞察

**一句话总结**：当前社区在 Skills 层面最集中的诉求是「可信与可用」——工具链上要求修复 run_eval.py 0% recall、Windows 崩溃、token 膨胀等可靠性缺陷，治理上要求厘清 `anthropic/` 命名空间的信任边界并建立质量/安全分析机制，功能上则期待补齐 agent 自我治理（记忆/安全/审计）、文档格式保真与企业平台（ServiceNow）等高价值 Skill 方向。

---

# Claude Code 社区动态日报（2026-08-14）

## 今日速览

今日发布了 v2.1.231 与 v2.1.232 两个版本，其中 v2.1.232 默认开启 Subagent forking 并新增跨会话 @ 提及能力，是今日核心亮点。社区层面，Windows 桌面版跨会话消息投递故障仍在持续发酵，大量用户反馈从 2.1.222 升级至 2.1.227 后出现消息丢失、会话挂起等回归问题，且 2.1.231 仍未完全修复，是当前最大的稳定性争议点。

## 版本发布

**v2.1.232**
- Subagent forking 现已默认开启：`subagent_type: "fork"` 的 subagent 将继承完整对话上下文及 prompt cache；同时，交互式会话中非 teammate agent 的生成默认在后台运行
- 新增功能：在提示符中输入 `@` 可提及另一个 Claude 会话

**v2.1.231**
- 修复 MCP OAuth 登录失败问题：对于使用预注册 OAuth client 的服务器（如 Slack），此前会因重定向 URI 不匹配而登录失败

## 社区热点 Issues（前 10 个）

**1. CVP 批准组织仍遭遇 cyber safeguard 拦截**
Issue #84352 | 评论 94 | 👍 14
已通过 Cyber Verification Program 批准的 Claude.ai 组织，在 Claude Code 中仍持续收到 cyber safeguard 拦截；验证门户显示"Under review"而非已批准状态。该问题已持续一周，评论数高居榜首，反映企业用户对安全策略一致性的高度关切。
链接：https://github.com/anthropics/claude-code/issues/84352

**2. 多 Claude 工作流的会话间通信（功能请求）**
Issue #24798 | 评论 66 | 👍 21
用户提出为并行运行的多个 Claude Code 会话建立直接的项目工作流依赖编排机制，以支持复杂的多会话协作场景。该 Issue 已开放 6 个月，获 21 个 👍，是社区最期待的功能方向之一，v2.1.232 的 @ 提及功能可能部分回应了这一诉求。
链接：https://github.com/anthropics/claude-code/issues/24798

**3. 轮次中输入的文字在结束轮次时被静默丢弃**
Issue #85603 | 评论 22 | 👍 1
在交互式 TUI（tmux 内）长时间运行 agent 会话时，用户在轮次进行中键入的内容在轮次结束时被静默丢弃（end_turn，无 Escape 介入）。2.1.220 与 2.1.226 两个版本均可复现，影响重度 TUI 用户的输入体验。
链接：https://github.com/anthropics/claude-code/issues/85603

**4. advisor() 工具虚报输入 token，触发过早自动压缩**
Issue #53065 | 评论 15 | 👍 7
调用 `advisor()` 时，完整对话记录被转发给第二个模型，主执行器与 advisor 的 token 消耗被合计进顶层 usage 字段，导致 auto-compaction 逻辑误解上下文占用率，在真实窗口约 50% 时即提前压缩。同类问题见 #81620，社区已多次报告。
链接：https://github.com/anthropics/claude-code/issues/53065

**5. 跨会话消息导致收件方查询完全无响应**
Issue #86012 | 评论 15 | 👍 3
Windows Desktop 1.28929.0 中，跨会话消息到达后收件方一直处于 `hadFirstResponse=false, reason=no_response` 状态，直到桌面端 idle-timeout 15-20 分钟后强制终止。涉及 MCP 会话管理与桌面端集成，是今日 Windows 跨会话问题群中评论数最高的一条。
链接：https://github.com/anthropics/claude-code/issues/86012

**6. Apps gateway 下发缺少 otlpHeaders 的 OTLP endpoint**
Issue #82092 | 评论 10 | 👍 5
Apps gateway 向 Claude Desktop 提供的是自身 bearer-gated 的 OTLP ingest 地址，但未附带 otlpHeaders，导致每次遥测 flush 都被拒绝（missing_token）。该问题影响所有桌面端遥测数据上报。
链接：https://github.com/anthropics/claude-code/issues/82092

**7. Windows 桌面端跨会话消息静默丢弃（约 5 分钟过期）**
Issue #86298 | 评论 5 | 👍 0
消息被挂起等待一个 UI 永远不会提供的审批，随后约 5 分钟后过期丢弃。属于 1.28929.0 引入的回归，开发者已确认是最新出现的问题形态。
链接：https://github.com/anthropics/claude-code/issues/86298

**8. 跨会话 send_message 在 2.1.231 中依旧损坏**
Issue #86385 | 评论 3 | 👍 1
即使将 Claude Code 运行时升级到 2.1.231，Windows 桌面端经 `mcp__ccd_session_mgmt__send_message` 投递的消息仍只会进入目标会话队列、不会触发回应轮次。该 Issue 证实此回归在最新版本中仍未修复。
链接：https://github.com/anthropics/claude-code/issues/86385

**9. Fable 5 cyber safeguard 拦截 Claude Code 自身生成的上下文**
Issue #86527 | 评论 1 | 👍 0
新近报告：拦截针对的是 Claude Code 自己生成的上下文而非用户输入，且组织已获 CVP 批准。与 #84352 可能同源，需关注后续官方回应。
链接：https://github.com/anthropics/claude-code/issues/86527

**10. Windows 桌面更新失败："另一个程序正在使用此文件"**
Issue #73107 | 评论 3 | 👍 1
升级后应用无法启动，AppX 容器被孤立的提权 Claude Code 子进程锁定（0x80070020）。同类问题在 #77421、#77379、#86555 中被反复报告，已成为 Windows 桌面端高频痛点。
链接：https://github.com/anthropics/claude-code/issues/73107

## 重要 PR 进展

今日更新 PR 数量较少（共 2 条），均非功能性变更，简述如下：

**#86537 [OPEN] 修复 CHANGELOG.md 重复词语**
作者：genesisdayabl-droid | 更新于 2026-08-13
修复 `CLAUDE_BASH_NO_LOGIN`（1.0.124）条目中 "to to" 的拼写重复，纯文档修正。
链接：https://github.com/anthropics/claude-code/pull/86537

**#60280 [CLOSED] CI 工作流 SHA-pin 第三方 action**
作者：arpitjain099 | 更新于 2026-08-13 | 已关闭
对 6 个工作流中的 `actions/checkout@v4` 与 `actions/github-script@v7` 引用进行 SHA 固定，作为 #56784 的后续补充，属供应链安全加固，现已关闭。
链接：https://github.com/anthropics/claude-code/pull/60280

## 功能需求趋势

从今日 Issues 与近期动态来看，社区最关注的功能方向集中在以下几个方面：

1. **多会话协作与编排**（#24798 等）：用户希望打破会话孤岛，支持跨会话的任务依赖编排、消息传递与结果汇总。v2.1.232 的 @ 提及和 subagent forking 表明官方正朝此方向发力，但 Windows 大量消息投递故障说明实现仍不成熟。

2. **上下文与 token 计费的透明化**（#53065、#81620）：advisor 等辅助模型调用导致 usage 统计虚高、触发过早 auto-compaction 的问题引发开发者对上下文计算透明度的强烈需求，希望在 UI 中能区分主对话与辅助推理的 token 消耗。

3. **桌面端稳定性与更新机制**（#73107、#77421、#86555 等）：Windows 桌面应用的文件锁、更新失败、进程残留问题反复出现，用户需要一个更可靠的应用生命周期管理和更新机制。

4. **安全策略一致性**（#84352、#86527）：CVP 审批状态与 Claude Code 实际执行不一致，以及限制拦截"误伤"自生成内容，反映企业用户对安全策略管理精细化的需求。

5. **输入处理的可靠性**（#85603）：TUI 下轮次中输入被静默丢弃的问题，提示社区对输入事件完整性的高要求，尤其在多任务并行操作时。

## 开发者关注点

- **跨会话通信可靠性是当务之急**：今日 50 条 Issue 中近 15 条与 Windows 桌面端跨会话消息投递故障相关（#86012、#86138、#86069、#86237、#86298、#86386、#86059、#86385、#86212、#86088、#86398、#86029 等），覆盖消息丢失、不触发回应、会话挂起、UI 显示但未入队等多种形态，且为 2.1.22x 升级后的回归问题，影响大量使用多会话工作流的用户。

- **2.1.231 尚未完全修复跨会话问题**：多名开发者明确表示，升级到 2.1.231 后问题依旧（如 #86385、#86398），版本信任度受损，建议官方优先回溯 2.1.222 至 2.1.227 之间的变更。

- **Windows 桌面端已成问题高发区**：文件锁、更新失败、GPU 崩溃（如 #86265 的 0x060C201E）、应用启动失败等问题集中在 Windows MSIX 打包环境，开发者期待官方在发布前增加 Windows 专项回归测试。

- **上下文统计透明度需求上升**：advisor 导致的 token 虚高与提前压缩，使部分用户被迫手动调整工作流避免触发自动压缩，此类"隐形"行为消耗开发者的信任。

- **对 subagent forking 与 @ 提及的期待与观望并存**：v2.1.232 虽带来新特性，但社区正值跨会话故障频发期，新功能能否在不同平台上保持一致体验，尚待验证。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-14）

## 今日速览

今日 Codex CLI 密集发布 0.148.0-alpha.11 至 alpha.14 四个快速迭代版本，正式发布前处于高频打磨期。社区讨论热度集中在 MCP stdio 描述符泄漏、macOS 远程控制回归、VS Code 扩展 IDE 上下文反复失效等稳定性问题上。PR 侧则有 Amazon Bedrock 供应商、线程队列 API、MCP OAuth 回调端口等值得关注的新能力落地。

## 版本发布

过去 24 小时共发布 4 个预发布版本：rust-v0.148.0-alpha.11 至 alpha.14。Release 页面未附带具体更新说明，推测为内部开发分支的连续快照同步，正处于 0.148.0 的功能收尾与缺陷修复阶段。追求稳定的用户建议继续使用 0.147.0 正式版，开发者可关注 alpha.14 对应的代码变更。

## 社区热点 Issues

### 1. #26984 MCP stdio 服务器泄漏管道 fd 与孤儿进程 → 累积 EMFILE
[GitHub Issue #26984](https://github.com/openai/codex/issues/26984)  
评论 21 条、👍 4，是目前社区讨论最激烈的技术缺陷。长时间运行 Codex 时，每次启动 MCP stdio 服务器都会泄漏文件描述符和子进程，最终触发 `EMFILE ("Too many open files", os error 24)`。对依赖自定义 MCP 工具链的深度用户影响显著。

### 2. #37403 macOS 桌面无法恢复 Remote Control / CLI 线程：`already has an active writer`
[GitHub Issue #37403](https://github.com/openai/codex/issues/37403)  
评论 18 条、👍 11，是近期高赞回归问题。用户晚上用手机远程控制 Mac 上的 Codex CLI 线程后，白天在桌面端打开同一线程时提示已有活动 writer，无法恢复，只能重启客户端。远程工作流受到明显影响。

### 3. #26990 Windows 桌面端状态写入不具备崩溃安全性：Pin/项目重置、配置回退
[GitHub Issue #26990](https://github.com/openai/codex/issues/26990)  
评论 18 条。异常断电后，Windows Desktop 本地状态会丢失：Pin 和项目被重置、配置回退到旧版本，甚至出现未来时间戳。属于典型的本地状态持久化设计缺陷，Windows 用户反馈集中。

### 4. #31553 VS Code 扩展更新后停止自动附带 IDE Context
[GitHub Issue #31553](https://github.com/openai/codex/issues/31553)  
评论 17 条、👍 12，已关闭但热度极高。VS Code 更新后，Remote/Container（.vscode-server）环境下自动 IDE 上下文失效。同类问题（#34920、#34696、#35333）在多个版本间反复出现，说明扩展的 IDE 上下文链路非常脆弱。

### 5. #34920 Codex 扩展 26.715.x 的 IDE Context 出现 RPC 序列化错误
[GitHub Issue #34920](https://github.com/openai/codex/issues/34920)  
评论 10 条。26.715.x 及部分相邻版本中，VS Code 和 Devin 的 IDE Context 均无法工作。用户反馈新模型 GPT-5.6 已可用，但上下文能力反而被破坏，体验割裂感明显。

### 6. #2062 功能请求：监控后台服务
[GitHub Issue #2062](https://github.com/openai/codex/issues/2062)  
评论 9 条、👍 10。这是长期未关闭的增强请求：让 Codex 不阻塞其他任务的同时，后台运行长构建或服务，并可随时查看日志和完成状态。社区对 Agent 的异步任务编排能力期待较高。

### 7. #23454 `$skill` 显式调用忽略本地仅限显式调用的 Skills
[GitHub Issue #23454](https://github.com/openai/codex/issues/23454)  
评论 8 条、👍 7。当某个 skill 只存在于本地且不在隐式 skill 列表中时，即使通过 `$skill` 显式调用也会失败。这对自定义技能的开发与调试造成直接困扰。

### 8. #33551 多智能体 V2 将 OpenAI 特定消息类型发送给外部 Responses Providers
[GitHub Issue #33551](https://github.com/openai/codex/issues/33551)  
评论 8 条、👍 6。Codex Multi-Agent V2 会把 `agent_message` 这种 OpenAI 特有的 Responses item 传给外部提供商（如 Ollama），导致其无法识别甚至无法解密 `encrypted_content`。自定义模型用户的跨提供商兼容性受阻。

### 9. #38472 VS Code 扩展恢复暂停的 Goal 后无响应并渲染空白
[GitHub Issue #38472](https://github.com/openai/codex/issues/38472)  
当天新提交，3 条评论。Windows 用户从暂停状态恢复 Goal 时，扩展会进入不可交互状态且界面空白，只能重载窗口。这是扩展状态恢复机制的又一稳定性问题。

### 10. #38455 macOS 桌面反复生成 Computer Use 工作进程并最终 V8 OOM 崩溃
[GitHub Issue #38455](https://github.com/openai/codex/issues/38455)  
当天新提交，3 条评论。ChatGPT 桌面版 26.810.41047 在启动约 98 秒后因 V8 OOM 崩溃，崩溃时存在 316 个线程、其中 187 个名为 computer-use；重启后出现 78 次不明原因的工作进程启动。疑似 Computer Use 组件存在严重资源失血。

## 重要 PR 进展

### 1. #38470 添加 Amazon Bedrock Runtime Provider
[GitHub PR #38470](https://github.com/openai/codex/pull/38470)  
内置 `amazon-bedrock-runtime` 提供商，支持基于 endpoint 的 SigV4 服务配置，同时保留 bearer token 认证、per-provider AWS profile/region 设置。这是 Codex 在多云/私有化部署方向上的一次重要扩展。

### 2. #38448 支持 per-server MCP OAuth 回调端口
[GitHub PR #38448](https://github.com/openai/codex/pull/38448)  
MCP 服务器配置新增 `oauth.callback_port`，同时在插件声明和 skill 依赖元数据中支持 `oauth.callbackPort`。对于企业代理环境和端口受限场景，MCP 授权灵活性明显提升。

### 3. #38447 为本地 daemon 会话添加运行中任务的退出选择
[GitHub PR #38447](https://github.com/openai/codex/pull/38447)  
当后台任务运行时按 Ctrl-C，不再直接退出，而是弹出菜单：取消任务并留在 Codex、退出但保留任务运行、或停止任务。交互设计更贴近实际使用习惯。

### 4. #38456 添加实验性线程队列 API
[GitHub PR #38456](https://github.com/openai/codex/pull/38456)  
app server 新增 `thread/queue/add`、list、update、delete、reorder、start 等实验性请求，支持持久化的用户提交队列，并在回合结束后自动 FIFO 调度。为异步任务编排和批量提交场景打基础。

### 5. #38440 添加分页线程回滚支持
[GitHub PR #38440](https://github.com/openai/codex/pull/38440)  
新增实验性 `thread/revert` 请求，可将分页加载的长线程恢复到 `beforeTurnId` 之前的历史记录，同时保留线程 ID。这对因长时间运行导致会话膨胀的问题提供了治理手段。

### 6. #38463 跨回滚重载保留线程订阅
[GitHub PR #38463](https://github.com/openai/codex/pull/38463)  
修复线程在 `thread/revert` 重载过程中连接关闭时，新监听任务无法继续为已有订阅提供数据的问题。现在会从保留的订阅状态中重启监听，避免回滚后丢订阅。

### 7. #38445 上下文压缩时保留客户端开发者消息
[GitHub PR #38445](https://github.com/openai/codex/pull/38445)  
当启用 `retain_client_developer_messages` 时，客户端自定义的 developer 指令会在上下文压缩后继续保留，避免压缩后开发者身份或指令信息丢失。

### 8. #38443 在模型上下文中标记当前时间提醒
[GitHub PR #38443](https://github.com/openai/codex/pull/38443)  
将注入的当前时间提醒包装为 `<current_time_reminder>` 标签，同时保持直接 `clock.curr_time` 工具输出为纯文本。对长会话中模型的时间感知能力是一处细粒度改进。

### 9. #38467 从技能 frontmatter 解析模型注解
[GitHub PR #38467](https://github.com/openai/codex/pull/38467)  
skill 元数据新增可选 `model` 字段（如 `model: luna`），遇到不支持的模型值不会阻塞其余元数据加载。这是为不同技能指定底层模型的第一步。

### 10. #38475 添加有界技能模型委托指令
[GitHub PR #38475](https://github.com/openai/codex/pull/38475)  
当技能在 Sol/Terra 模型上运行并请求使用 Luna 时，可委托到当前 provider 命名空间中的 Luna 模型。系统会对模型标识、技能名和指令做边界校验，避免无效或恶意的模型委托。

## 功能需求趋势

从近期 Issue 中可提炼出四个社区重点方向：

- **IDE 集成可靠性**：VS Code 扩展的 IDE Context 自动附加功能在多个版本中反复失效（#31553、#34920、#34696、#35333），高赞与评论数说明这是当前影响面最广的痛点。
- **长会话与上下文管理**：大量 Issue 和 PR 围绕长会话的上下文压缩、线程回滚、状态恢复、性能退化展开，社区对大型会话的可维护性诉求越来越强。
- **Windows/WSL2 支持**：沙箱权限升级不生效、路径转换错误、Desktop 状态丢失、WSL Agent 下 Chrome/Computer Use 不可用等问题密集出现（#33114、#30435、#26990），跨平台体验存在短板。
- **MCP 生态与外部模型兼容性**：MCP 服务器 fd 泄漏、OAuth 回调端口配置、外部 Responses Provider 兼容（#26984、#33551）开始成为高级用户的核心关注点。

## 开发者关注点

- **更新回归频率偏高**：“上次能用，更新后坏了”的反馈多次出现，尤其是 macOS Remote Control 回归和 VS Code IDE Context 反复失效。
- **资源占用失控**：macOS 桌面应用出现 CPU 100%、内存占用超过 10GB、V8 OOM 崩溃（#38455、#38468），以及长期运行后线程过大无法检查（#38466）。
- **配置不生效**：Windows 下 `approval_policy=never` 仍弹确认框（#24934）、运行中将 `/permissions` 升级为 Full Access 不即时生效（#33114），影响自动化流程。
- **状态与数据持久性不足**：断电后 Windows 桌面状态重置、远程线程无法恢复、暂停的 Goal 恢复后空白等问题，持续消耗开发者信任。
- **新模型支持不一致**：gpt-5.6-luna 已进入部分 CLI/扩展流程，但子代理、VS Code 内置 CLI、技能模型注解等方面的支持仍参差不齐（#38107、#38317、#38467）。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-14

## 今日速览

今日发布 v0.56.0-nightly 版本，主要包含容量错误自动重试机制与 E2E 测试稳定性优化。社区方面，容量不可用、回车无响应等问题持续引发讨论；PR 侧则有多项安全修复（供应链 RCE、CVE）和 Claude 模型支持的定义合入。整体来看，稳定性和安全性是今日的焦点。

---

## 版本发布

### v0.56.0-nightly.20260814.gc0d192452
**更新内容：**
- **test(e2e):** 稳定慢速 CI 环境下的文件系统交互测试（PR #28793）
- **fix(core):** 实现上下文感知的静默重试与容量错误可用性 TTL，非交互运行在容量耗尽时自动退避重试（PR #28790，关闭 #28761）

🔗 [查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260814.gc0d192452)

---

## 社区热点 Issues

以下为近 24 小时内更新最活跃、讨论最集中的 10 个 Issue：

1. **#23297 按 Enter 键无任何反应（👍10 | 💬11）**
   用户在交互模式中按回车无响应，重启 shell 后依旧。影响基本输入操作，已被标记为 possible-duplicate，目前缺少可复现信息。
   🔗 [Issue #23297](https://github.com/google-gemini/gemini-cli/issues/23297)

2. **#19883 容量错误：gemini-3-flash-preview 无可用容量（👍8 | 💬14）**
   用户反馈 gemini-2.5 与 3-pro 正常，但 3-flash-preview 持续报"无容量"。该问题已关闭待重新测试，与今日合入的容量重试修复（#28790）直接相关。
   🔗 [Issue #19883](https://github.com/google-gemini/gemini-cli/issues/19883)

3. **#18811 API 错误：请求包含无效参数（👍5 | 💬16）**
   自动更新至 0.28.0 后 CLI 频繁报 `Request contains an invalid argument`，影响正常使用。状态为 Stale 已关闭，可能与当时版本的上游 API 变更有关。
   🔗 [Issue #18811](https://github.com/google-gemini/gemini-cli/issues/18811)

4. **#22323 Subagent 因 MAX_TURNS 中断却误报 GOAL 成功（🔒 维护者）**
   `codebase_investigator` 在达到最大轮数后仍报告 `status: "success"`，掩盖了实际中断情况，影响任务可靠性判断。目前等待重新测试。
   🔗 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

5. **#18903 请求包含无效参数（💬14）**
   与 #18811 类似的上游参数错误，多个用户反馈从某天起 CLI 停止工作。已关闭。
   🔗 [Issue #18903](https://github.com/google-gemini/gemini-cli/issues/18903)

6. **#18834 沙箱镜像缺失或无法拉取（💬12）**
   用户提出 `Sandbox image ... is missing or could not be pulled` 的修复建议，涉及 `sandbox:0.28.0` 镜像拉取失败场景。已关闭。
   🔗 [Issue #18834](https://github.com/google-gemini/gemini-cli/issues/18834)

7. **#25166 Shell 命令执行后卡在 "Waiting input"（👍3 | 🔒 维护者）**
   极其简单的 CLI 命令执行完毕后，界面仍显示命令活动并等待输入。属于高优先级核心问题，影响自动化流程。
   🔗 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

8. **#21968 Gemini 不会主动使用自定义 skills 和 sub-agents（🔒 维护者）**
   用户 Anecdata 反馈，模型不会主动调用已配置的 gradle/git 等技能，只有显式指定时才使用。虽不是硬 bug，但反映 Agent 自主工具调用能力的不足。
   🔗 [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

9. **#26522 Auto Memory 对低信号会话无限重试（🔒 维护者）**
   后台提取 agent 如果不读取低信号会话，该会话会一直处于未处理状态，反复出现。需要引入处理上限或跳过机制。
   🔗 [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

10. **#28528 CLI 一直"思考"无响应（西班牙语反馈）**
    用户反馈 0.52.0 版本在输入后一直不回复。类似问题高频出现，可能与模型容量或上下文处理有关。已关闭待补充信息。
    🔗 [Issue #28528](https://github.com/google-gemini/gemini-cli/issues/28528)

---

## 重要 PR 进展

以下为近 24 小时内更新或合入的关键 PR：

1. **#28790 [已合入 nightly] 容量错误上下文感知重试（PR #28790）**
   针对 #28761 的回归，非交互模式下容量耗尽自动退避重试，交互模式最多静默重试 2 次，并增加可用性 TTL。
   🔗 [PR #28790](https://github.com/google-gemini/gemini-cli/pull/28790)

2. **#28793 [已合入 nightly] 稳定慢速 CI 的文件系统交互测试**
   增加 prompt 同步等待，避免在虚拟化环境中因渲染延迟导致的偶发失败。
   🔗 [PR #28793](https://github.com/google-gemini/gemini-cli/pull/28793)

3. **#28803 添加 Claude Sonnet 4.5 与 Opus 4.8 模型定义**
   在 Gemini CLI 中新增 Claude 模型常量、别名解析和策略链回退，支持显式版本 ID。
   🔗 [PR #28803](https://github.com/google-gemini/gemini-cli/pull/28803)

4. **#28740 修复 eval-pr 工作流中的供应链 RCE 漏洞**
   修复 `pull_request_target` 中不可信 fork 代码在特权上下文执行的问题，拆分为安全的 `pull_request` 构建和受信任的 `workflow_run` 执行。
   🔗 [PR #28740](https://github.com/google-gemini/gemini-cli/pull/28740)

5. **#28778 升级 simple-git 至 3.32.3 修复 CVE-2026-28292**
   通过 trivy 扫描发现的 CRITICAL 级漏洞，位于 `package-lock.json` 的 simple-git 依赖中。
   🔗 [PR #28778](https://github.com/google-gemini/gemini-cli/pull/28778)

6. **#28801 取消或中止时回滚整个多轮请求**
   修复中止包含工具调用的多轮请求后，会话历史残留未响应的工具消息，导致后续请求异常的问题。
   🔗 [PR #28801](https://github.com/google-gemini/gemini-cli/pull/28801)

7. **#28597 修复设置占位符的环境变量加载顺序**
   解决 `.env` 文件在设置文件解析后才加载，导致 `process.env` 占位符无法正确展开的竞态条件。
   🔗 [PR #28597](https://github.com/google-gemini/gemini-cli/pull/28597)

8. **#28596 新增 `--list-all-sessions` 选项**
   允许跨所有已注册工作区间列出会话，按工作区路径分组，满足多目录管理需求。
   🔗 [PR #28596](https://github.com/google-gemini/gemini-cli/pull/28596)

9. **#28603 Docker sandbox 基础镜像升级至 Node 22**
   修复 Node 20 EOL 带来的安全暴露（对应 Issue #28584）。
   🔗 [PR #28603](https://github.com/google-gemini/gemini-cli/pull/28603)

10. **#28718 流式响应中止时记录已收到的 usage 数据**
    当前仅在成功路径中刷新 `usageMetadata`，中止时通过 `_logApiError` 提前返回，导致使用数据丢失。该 PR 将已收到的用量记录在日志中。
    🔗 [PR #28718](https://github.com/google-gemini/gemini-cli/pull/28718)

---

## 功能需求趋势

从今日活跃的 Issues 与 PR 中可以提炼出社区当前关注的方向：

1. **容量与可用性管理**
   - 容量错误（`No capacity`）是目前最热门的痛点，官方已通过 #28790 引入重试与 TTL 机制，但 gemini-3-flash-preview 的容量问题仍需观察。
   - 相关：Issue #19883、PR #28790

2. **Auto Memory 可靠性优化**
   - 多个维护者 Issue 集中在 Auto Memory 的无限重试、无效补丁静默跳过、日志过度冗余等问题。
   - 相关：Issue #26522、#26523、#26525

3. **子代理（Sub-agent）行为可控性**
   - 社区关注子代理是否会主动使用 skills、是否遵守配置中的禁用设置、以及在 max turns 等限制下是否如实报告状态。
   - 相关：Issue #22323、#21968、#22093

4. **浏览器代理增强**
   - 会话锁恢复、settings.json 覆盖、Wayland 兼容性等。
   - 相关：Issue #22232、#22267、#21983

5. **安全与供应链**
   - 外部贡献者多次提交安全修复：工作流 RCE（#28740）、CVE 升级（#28778）、认证缺失（#28699）、沙箱 Node EOL（#28603）。说明社区对 CLI 的安全基线有较高期望。

6. **模型与多提供商支持**
   - PR #28803 添加 Claude 模型定义，体现 CLI 作为多模型前端的方向。

---

## 开发者关注点

1. **容量不可用导致的"假死"现象**
   - 多个 Issue 反映模型无容量时 CLI 表现为"一直思考"/"无响应"，开发者难以区分是容量问题还是 bug。建议在 UI 上明确展示重试状态。

2. **输入响应问题频发**
   - #23297（回车无响应）、#25166（命令执行后卡在 waiting）高频出现，涉及基础交互可靠性，属高优先级。

3. **子代理配置不生效**
   - 部分用户反映在 `settings.json` 中禁用 agents 后，v0.33.0 仍自动调用 subagents（#22093），说明配置优先级或加载逻辑可能存在回归。

4. **会话与日志管理**
   - `/clear` 后日志保留旧 session ID、`--list-sessions` 与清理任务竞争等问题（#27280、#27273）虽不严重，但反映生命周期管理的细节有待打磨。

5. **环境与沙箱问题**
   - 沙箱镜像拉取失败（#18834）、Wayland 下浏览器代理失败（#21983）、WSL2 剪贴板支持（PR #27588）等环境相关痛点分散但持续可见。

---

*数据来源：github.com/google-gemini/gemini-cli（2026-08-14 更新）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-14**  
**数据来源：github.com/github/copilot-cli**

---

## 今日速览

今日发布 v1.0.80-0 与 v1.0.80-1 两个补丁版本，前者新增 `--enable-mcp-server` 运行级标志，后者为常规修复。社区围绕 **模型/推理强度配置** 与 **MCP 稳定性** 的讨论持续升温：一方面自定义 Agent 的推理强度、模型覆盖问题反复被提及，另一方面远程 MCP 服务器在 OAuth 刷新、并发调用和瞬时故障处理上暴露出多项可靠性质疑。此外，多条新提交的 triage 级 Issue 显示 Windows 平台、会话恢复与权限配置仍是高频痛点。

---

## 版本发布

### v1.0.80-1
- 常规修复与细节优化（Fixes and changes）。

### v1.0.80-0
- 新增 `--enable-mcp-server` 标志，允许在当前运行中重新启用在设置里被禁用的 MCP 服务器。
- 会话共享体验改进：在 `--ahp` 模式下，当你加入一个其他人也在场的会话时，该会话行会显示 `2 clients`（或更多），并在两个标签页中同步呈现该状态。

🔗 [查看 Releases](https://github.com/github/copilot-cli/releases)

---

## 社区热点 Issues（Top 10）

### 1. 自定义 Agent YAML Frontmatter 应支持推理强度
**Issue #2904** | 开放中 | 👍 20 | 💬 6  
作者提议为自定义 Agent（`.agent.md`）增加 `reasoning effort` 的前置配置字段，目前只能通过全局 `--effort=LEVEL` 设置。该 Issue 已积压近四个月，今天有一项相关 PR（#4476）提交文档方案，说明社区推动已进入落地阶段。  
🔗 https://github.com/github/copilot-cli/issues/2904

### 2. `claude-haiku-4.5` 子代理仍被分配不支持的 `medium` 推理强度
**Issue #4473** | 开放中 | 新提交  
今天再次有人报告：CLI 内部将子代理任务路由到 `claude-haiku-4.5` 时仍会施加 `medium` 推理强度，导致执行失败。这与近期关闭的 #4345 问题高度关联，表明此前修复可能没有覆盖所有子代理调用路径。  
🔗 https://github.com/github/copilot-cli/issues/4473

### 3. `explore` 工具硬编码模型，忽略自定义/DeepSeek API 配置
**Issue #3954** | 开放中 | 👍 3 | 💬 3  
`explore` 工具在决策时仍硬编码为 `gpt-5.4-mini`，即使配置了自定义模型或 DeepSeek 端点也不生效，导致 API 调用失败。反映出工具链对第三方模型服务的兼容性仍有死角。  
🔗 https://github.com/github/copilot-cli/issues/3954

### 4. 显式 `code-review` 子代理模型覆盖被静默忽略
**Issue #4462** | 开放中  
内置 `code-review` 子代理配置的是 `gpt-5.6-luna`，但 CLI 启动时却使用了 `gpt-5.6-sol`，配置值被静默丢弃。这类“静默忽略”行为对用户来说尤为难以排查。  
🔗 https://github.com/github/copilot-cli/issues/4462

### 5. Atlassian MCP OAuth 在 1.0.79 回归，报“Incompatible authorization server”错误
**Issue #4480** | 开放中 | 新提交  
升级到 1.0.79 后，连接 Atlassian 远程 MCP 服务器在 OAuth 发现阶段失败，错误信息涉及 RFC 8414 的 issuer 不匹配，而 1.0.71 尚能正常工作。  
🔗 https://github.com/github/copilot-cli/issues/4480

### 6. 远程 MCP 令牌刷新期间的并发调用互相取消
**Issue #4472** | 开放中 | 新提交  
多个并发工具调用同时触发 OAuth 刷新时，每次刷新都会新建一个 `rmcp::service` 实例，导致正在进行的调用被“transport closed before the tool responded”错误取消。涉及 Streamable HTTP 协议的并发安全设计。  
🔗 https://github.com/github/copilot-cli/issues/4472

### 7. 远程 MCP 单次瞬时 5xx 导致整个会话不可用
**Issue #4466** | 开放中  
初始化时遇到一次 502，该 MCP 服务器就会被标记为“会话级失败”，剩余生命周期内不再重试。开发者期望的是带退避的重试策略，而不是一次性降级。  
🔗 https://github.com/github/copilot-cli/issues/4466

### 8. 孤立的 `permission.requested` 事件在每次会话恢复时重放
**Issue #4469** | 开放中  
一个长期复用的会话在每次恢复时都会弹出目录访问请求，指向 10 天前已执行完毕的命令涉及的路径，批准后依然重复出现。权限事件队列缺少清理机制。  
🔗 https://github.com/github/copilot-cli/issues/4469

### 9. Windows 上 `--server --stdio` 进程泄漏
**Issue #4468** | 开放中  
在 Windows 桌面 App 通过 `--server --stdio` 托管时，每个会话派生 4 个扩展宿主子进程，会话结束后并不终止，而是持续累积直至服务器退出。  
🔗 https://github.com/github/copilot-cli/issues/4468

### 10. `/plugins` TUI 无法区分已禁用技能，且禁用状态不持久化
**Issue #4471** | 开放中 | 新提交  
TUI 对启用和禁用的技能显示相同的勾选标记，禁用后刷新即恢复原状，实际仍处于启用状态。插件管理的可用性有待完善。  
🔗 https://github.com/github/copilot-cli/issues/4471

> 其他值得关注的 Issue：#4477（停止操作导致会话丢失）、#4464（Entra OAuth 静默刷新作用域错误）、#4465（autoUpdate 不生效）、#4467（长会话耗尽事件存储）、#4482（allowed_directories 未生效）。

---

## 重要 PR 进展

今天 24 小时内只有 1 条 PR 更新：

### 文档：自定义 Agent `effort` frontmatter 方案（Option A）
**PR #4476** | 已合并（CLOSED）  
该 PR 为 Issue #2904 提议的 `effort` 前置字段编写了文档，采用“与 `model` 平行的独立字段”方案（Option A），并在 README 中新增了“Custom Agents”参考章节，覆盖现有字段与新增字段的使用说明。虽然 README 文档先行，但核心功能是否实现还有待后续版本验证。  
🔗 https://github.com/github/copilot-cli/pull/4476

---

## 功能需求趋势

从近 24 小时的 Issues 中可以提炼出以下社区关注方向：

| 方向 | 代表性 Issue 数 | 关注度 |
|------|----------------|--------|
| **模型与推理强度配置（Agent 级）** | #2904, #4345, #2133, #3954, #4462, #4473 | 🔥🔥🔥 |
| **远程 MCP 可靠性（OAuth/重试/并发）** | #4480, #4472, #4464, #4466, #4463 | 🔥🔥🔥 |
| **会话生命周期管理** | #4477, #4474, #4467, #4468, #4469 | 🔥🔥 |
| **权限系统可用性** | #4237, #4482, #4469 | 🔥🔥 |
| **插件与技能管理** | #4465, #4471 | 🔥 |

具体趋势解读：

- **Agent 级模型控制是当前最大呼声**：开发者不再满足于全局模型/推理强度开关，希望每个自定义 Agent 都能独立绑定模型和推理精度，同时也希望内置子代理不被“静默替换”配置。该方向已获得 20+ 👍，并已进入文档方案阶段（#4476）。

- **远程 MCP 正快速普及，但基础设施尚不成熟**：OAuth 刷新竞态、瞬时故障无重试、平台相关的 socket 错误等问题的集中出现，说明 MCP 在真实生产环境中的健壮性还亟待加强。

- **会话恢复与状态一致性被越来越多的用户依赖**：多设备、长时间运行的会话场景下，停止操作误删会话、恢复超时归档、`permission.requested` 事件重放等问题直接影响到工作流安全。此外，有用户点名希望借鉴 Claude Code 的 `agents --json`，以支持外部构建会话监控面板（#4470）。

- **配置项的“看起来生效”问题**：无论是 `allowed_directories`、`autoUpdate` 还是 TUI 中的 skill 禁用状态，多处出现“配置写入了但未生效/未持久化”的情况，说明配置系统的优先级与加载逻辑需要更明确的文档与验证手段。

---

## 开发者关注点

### 高频痛点

1. **静默忽略用户配置**：`code-review` 模型覆盖被忽略（#4462）、`explore` 硬编码模型（#3954）、`allowed_directories` 不抑制提示（#4482）——多个场景下用户的显式配置无效但不报错，导致排查成本极高。

2. **推理强度与模型不匹配时，错误处理粗糙**：`claude-haiku-4.5` 不支持 `medium` 推理强度的问题在两个独立 Issue 中出现（#4345、#4473），且 CLI 不自动降级或给出清晰提示，直接抛出 `Execution failed`。

3. **MCP 的“一次性失败”设计过于脆弱**：一次 502（#4466）或一次 OAuth 刷新冲突（#4472）就能让整个会话中该服务器不可用，缺少渐进式重试与恢复机制。

4. **Windows 平台问题占比明显**：#4463（socket 10013）、#4468（进程泄漏）连续两天出现在 Windows 平台上，提示该平台在长期驻留场景下可能存在系统性缺陷。

5. **安全策略误判**：#4479 提到普通的代码调试（创建分支、回滚 Build Insights 变更）被 CAPI 422 反复拦截，说明内容安全策略对“开发操作”和“恶意操作”的边界识别需要调优。

### 社区呼声

- 希望增加“列出当前运行中的会话及状态”的命令行工具（#4470），便于构建外部监控面板。
- 期望 `/plugins` TUI 至少能区分技能的“启用/禁用”状态并持久化（#4471）。
- 启动消息 `No copilot-instructions.md found` 有歧义——应明确说明这是指仓库作用域的 `copilot-instructions.md` 未找到，而非全局（#4475）。

---

**总结**：2026-08-14 的 Copilot CLI 社区处于“功能需求旺盛、基础设施加固进行时”的阶段。模型配置粒度和 MCP 稳定性是最响亮的两个呼声；CLI 在快速迭代新能力的同时，需优先补齐配置可靠性、错误恢复和跨平台一致性这三块短板。

*本日报由 AI 生成，数据来自 GitHub 公开仓库 github/copilot-cli。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-14**

---

## 1. 今日速览

过去 24 小时无新版本发布、无 PR 合并，社区讨论集中在 3 个未关闭 Issue 上：记忆系统特性请求（#1283）持续沉淀讨论，ACP/print 流式挂死（#2598）与 8.8 万 token 乱码生成（#2597）两大可靠性 Bug 仍在发酵。总体来看，**持久化能力**与**流式/输出可靠性**是今日社区最突出的关键词。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

当前共有 3 个 Issue 在过去 24 小时内获得更新，全部列举如下：

### #1283 [特性请求] 记忆系统——跨会话持久化上下文

- **作者**: CatKang | 创建: 2026-02-27 | 更新: 2026-08-13 | 评论: 38
- **链接**: [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **内容摘要**: 希望实现一套完整的记忆系统，让 Kimi Code CLI 跨会话记住项目模式、用户偏好与有效上下文，包括 AI 管理的自动记忆和用户定义的手动记忆。
- **值得关注的原因**: 该 Issue 已存活近半年且仍有更新，38 条评论说明讨论深入，是社区对"AI 助手长期记忆"诉求的集中体现。目前 👍 数不高，可能更多是深度用户在小范围讨论。

### #2598 [Bug] ACP/print 流式响应静默挂死：无空闲超时、被顶替轮次内容不落盘

- **作者**: ai-agent-workbench | 创建: 2026-08-09 | 更新: 2026-08-13 | 评论: 1
- **链接**: [MoonshotAI/kimi-cli Issue #2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)
- **内容摘要**: kimi CLI 0.34.0 在 `kimi acp` 模式下与 api.kimi.com 流式对话时，内容全部到达后连接挂死：无 `[DONE]`/finish 帧、无错误、无空闲超时配置项。此时发送下一条消息，挂死轮次被静默顶替，且已流式答复从未写入 wire.jsonl。
- **值得关注的原因**: 影响 ACP 模式下的自动化工作流，且 0.31.1 只覆盖了 Esc 场景、未根治问题。缺 idle timeout 与日志丢失对开发者调试是双重打击。

### #2597 [Bug] 失控乱码生成——单个 LLM 步骤产生 8.8 万 token 乱码

- **作者**: kdp123 | 创建: 2026-08-08 | 更新: 2026-08-13 | 评论: 1
- **链接**: [MoonshotAI/kimi-cli Issue #2597](https://github.com/MoonshotAI/kimi-cli/issues/2597)
- **内容摘要**: 一次正常交互中，模型出现失控生成：单个 LLM 步骤运行 3214 秒（约 53 分钟），输出 88,114 个 token 的重复乱码（混合多语言碎片、损坏的 Markdown、无意义重复等）。
- **值得关注的原因**: 这是一次极端的输出质量事故，既浪费算力也严重破坏会话状态。单个 step 跑 53 分钟说明缺少生成上限/失控保护，可能涉及解码或上下文管理缺陷，值得深挖根因。

## 4. 重要 PR 进展

过去 24 小时无 PR 更新或合并，暂无进展可汇报。

## 5. 功能需求趋势

从当前活跃的 3 个 Issue 中，可以观察到两个核心方向：

- **上下文持久化能力**：#1283 表明用户希望 CLI 具备跨会话记忆，减少重复描述项目背景与偏好的成本。
- **流式交互可靠性**：#2598 和 #2597 均指向流式/长生成场景下的稳定性问题——前者是连接挂死与超时缺失，后者是生成失控与乱码输出。

虽然样本量较小，但结合 Issue 创建时间均在近期，可看出在 ACP/自动化集成场景普及后，**开发者对"可信任的长时运行"需求正在快速上升**。

## 6. 开发者关注点

- **挂死与超时**：ACP 模式下无流式空闲超时配置，进程会无限等待，用户亟需可配置的兜底机制。
- **日志完整性**：被顶替轮次不写 wire.jsonl，导致问题难以复现与追溯，开发者希望所有轮次都留有审计记录。
- **输出失控保护**：8.8 万 token 乱码事件呼吁在单步生成中加入 token 上限、内容质量检测或手动终止通道。
- **跨会话记忆**：对长期使用的开发者来说，CLI 能记住项目结构、偏好设置和常用指令，是提升日常效率的关键诉求。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-14

## 今日速览

今日无正式版本发布，但社区讨论热度集中在两个方向：一是**高频复现的运行时卡顿与限流问题**（如 #11112 "Preparing write" 卡死、Zen 免费额度 429 报错），二是**安全与 v2 迁移带来的兼容性焦虑**（curl|bash 供应链、上下文静默修剪、V2 数据库互操作破坏）。PR 侧则是一轮由 @kitlangton 主导的**启动性能优化与依赖清理**，另有多项 TUI 交互修复和 Hebrew 本地化合入。

---

## 社区热点 Issues（10 个）

### 1. 总是在 "Preparing write..." 阶段卡死
- **Issue #11112**｜评论 78｜👍 46
- 一个持续半年仍未解决的高频问题：模型反复尝试写入工作计划文件，但工具执行始终被中止，导致会话无法推进。社区多次反馈重试无效，是目前关注度最高的稳定性缺陷。
- 🔗 https://github.com/anomalyco/opencode/issues/11112

### 2. 请求保留旧版布局（legacy layout）
- **Issue #37012**｜评论 37｜👍 41
- 新版本界面需要多层导航，旧版可在主窗口直接操作几乎所有功能。用户强烈希望提供保留旧布局的选项，代表了一批老用户对 UI 改版的不满。
- 🔗 https://github.com/anomalyco/opencode/issues/37012

### 3. "Copied to clipboard" 提示但未真正复制
- **Issue #41470**｜评论 15｜👍 1
- 在 VSCode Server（Docker 环境）中使用时，界面显示复制成功但系统剪贴板中没有内容。涉及远程开发场景的可用性问题。
- 🔗 https://github.com/anomalyco/opencode/issues/41470

### 4. MCP 工具已连接但未暴露给 Agent
- **Issue #33027**｜评论 8｜👍 3
- `pdfrag` MCP 服务器连接成功且 `tools/list` 返回 6 个工具，但 Agent 的工具列表中不可见。MCP 生态是 OpenCode 的核心竞争力，此问题影响面广。
- 🔗 https://github.com/anomalyco/opencode/issues/33027

### 5. [安全] upgrade 命令 curl|bash 无完整性校验
- **Issue #42434**｜评论 3
- `opencode upgrade` 拉取远程脚本直接 pipe 给 bash，无签名或哈希校验，存在供应链投毒/TOCTOU 风险。社区对安装链路的安全性质疑已达到需要官方回应的程度。
- 🔗 https://github.com/anomalyco/opencode/issues/42434

### 6. [安全] webfetch 可访问回环/内网地址（SSRF）
- **Issue #42435**｜评论 2
- `webfetch` 工具可请求 `127.0.0.1` 等内网地址，存在本地 SSRF 风险。此前修复 PR #40851 被关闭未合并，用户再次提交并呼吁重视。
- 🔗 https://github.com/anomalyco/opencode/issues/42435

### 7. [安全] 上下文修剪静默丢弃指令性内容
- **Issue #42437**｜评论 2
- 压缩/修剪上下文时可能静默丢失包含指令或约束的文本，不仅是成本问题，更可能绕过模型的安全约束。Medium-High 严重性。
- 🔗 https://github.com/anomalyco/opencode/issues/42437

### 8. Zen 路由缺少 stickyProvider 导致冷缓存重新计费
- **Issue #35402**｜评论 2｜👍 8
- 同一请求经 Zen 多源路由时可能落到冷缓存 provider，导致重复计费和更慢的 prefill。赞数较高，用户要求为多源模型启用粘性路由。
- 🔗 https://github.com/anomalyco/opencode/issues/35402

### 9. 启动时同步拉取模型注册表导致 10-30 秒阻塞
- **Issue #42376**｜评论 2
- 本地缓存超过 5 分钟 TTL 时，OpenCode 会同步拉取 `models.dev/api.json`（约 3.6MB），在弱网环境可阻塞启动 10-30 秒。影响日常使用体验。
- 🔗 https://github.com/anomalyco/opencode/issues/42376

### 10. [V2] 压缩请求超出上下文窗口
- **Issue #42448**｜评论 2
- V2 会话在 79% 上下文占用时自动压缩未触发，手动 `/compact` 因“提示+输出超限”失败。高输出模型场景下 V2 的压缩策略存在缺陷。
- 🔗 https://github.com/anomalyco/opencode/issues/42448

---

## 重要 PR 进展（10 个）

### 1. 修复 TUI 终端尺寸刷新（SIGWINCH）
- **PR #42474**（Open）由 fancive 提交
- 在受影响的 PTY 宿主环境中，Bun 可能未及时更新 `process.stdout.columns/rows`，导致 resize 处理异常。此 PR 在响应 `SIGWINCH` 前强制刷新终端尺寸。
- 🔗 https://github.com/anomalyco/opencode/pull/42474

### 2. 新增 Hebrew 语言支持
- **PR #42475**（Open）由 opencode-agent[bot] 提交
- 完整添加 `he-IL` 翻译：覆盖 app、共享 UI、桌面渲染器，注册 RTL 布局路径与 CLDR 复数形式，并附带测试。
- 🔗 https://github.com/anomalyco/opencode/pull/42475

### 3. TUI：隔离各标签页滚动状态
- **PR #42456**（Closed）由 kitlangton 提交
- 修复启用 `tab_scroll` 实验特性后，不同会话标签页共享滚动位置的 bug，每个标签页现在独立记忆阅读位置。
- 🔗 https://github.com/anomalyco/opencode/pull/42456

### 4. TUI：未读状态仅归聚焦终端所有
- **PR #42471**（Closed）由 kitlangton 提交
- 背景 TUI 不再能因切换标签页而标记/清除会话未读状态，避免多 TUI 场景下的未读标记错乱。
- 🔗 https://github.com/anomalyco/opencode/pull/42471

### 5. 修复 Node SEA 构建无法加载本地 TUI 插件
- **PR #42466**（Closed，标记 `needs:issue, needs:compliance`）由 xdagiz 提交
- Node SEA 构建（opencode2-node）下所有本地插件加载失败（`ERR_UNKNOWN_BUILTIN_MODULE`），此 PR 改用 SEA-safe 运行时导入方式修复。
- 🔗 https://github.com/anomalyco/opencode/pull/42466

### 6. 性能：MCP 客户端改为懒加载
- **PR #42468**（Open）由 kitlangton 提交
- 当目录没有启用 MCP 服务器时，不再在启动阶段加载 MCP SDK。配置了启用服务器的目录仍会急切连接；禁用或未配置场景可减少启动开销。
- 🔗 https://github.com/anomalyco/opencode/pull/42468

### 7. 性能：semver 延迟加载
- **PR #42470**（Open）由 kitlangton 提交
- 仅在更新检查获取候选版本后才加载 `semver`。本地安装、禁用检查或网络失败时不再支付导入成本。
- 🔗 https://github.com/anomalyco/opencode/pull/42470

### 8. 性能：webfetch HTML 解析延迟化
- **PR #42469**（Open）由 kitlangton 提交
- 将 `htmlparser2` 及 `entities` 从 WebFetch 工具注册的急切依赖中移除，仅在需要 HTML 转换文本/Markdown 时才加载。原始 HTML 和非 HTML 响应零开销。
- 🔗 https://github.com/anomalyco/opencode/pull/42469

### 9. 性能：npm 配置懒加载
- **PR #42458**（Closed）由 kitlangton 提交
- 延迟加载 `@npmcli/config`，避免导入 `npm-config` 但未调用 `load` 的启动路径付出配置初始化成本。
- 🔗 https://github.com/anomalyco/opencode/pull/42458

### 10. 依赖清理：替换 xdg-basedir
- **PR #42222**（Closed）由 kitlangton 提交
- 用行为兼容的本地实现替换 `xdg-basedir`，移除一个直接运行时依赖（约 6.8KB），同时保留 import 时 XDG 环境变量覆盖行为。
- 🔗 https://github.com/anomalyco/opencode/pull/42222

---

## 功能需求趋势

综合近期 Issues，社区诉求可归为五个方向：

| 方向 | 代表 Issue | 需求描述 |
|---|---|---|
| UI/UX 回溯与本地化 | #37012、#42447 | 要求保留旧布局选项；请求新增 Hebrew 等语言支持（PR 已合入） |
| 安全加固 | #42434、#42435、#42437 | upgrade 供应链校验、webfetch 防 SSRF、上下文完整性保护 |
| 性能与启动速度 | #42376、#42468-70 | 启动时阻塞网络请求优化、依赖懒加载、减少冷启动时间 |
| v2 兼容与迁移 | #42421、#42260、#42448 | V2 与 V1 数据库共存、TODO 工具缺失、压缩策略需适配高输出模型 |
| 模型接入与路由 | #35402、#42083、#42029 | Zen 多源路由粘性、Copilot 零模型问题、免费额度 429 报错频发 |

---

## 开发者关注点

1. **稳定性焦虑**：`Preparing write` 卡死（#11112）持续半年未解，已积累 78 条评论、46 个赞，是高优先级痛点。VSCode Server 环境下的剪贴板失效（#41470）也反映出远程开发场景的兼容不足。
2. **安全疑云**：curl\|bash 安装、SSRF、上下文静默修剪三连发，表明开发者开始审慎对待 OpenCode 的安全模型；注意到多个安全 PR（如 #40851）曾被关闭未合并，社区对此有所不满。
3. **性能敏感**：启动阻塞、依赖加载开销是高频抱怨点；好在 @kitlangton 推动了系列懒加载 PR（MCP/semver/npm/webfetch），方向正确但需注意行为回归。
4. **v2 迁移阵痛**：V2 分支改动大，出现数据库互操作破坏（#42260）、TODO 工具消失（#42421）等断裂性问题，建议官方发布 v2 迁移指南并明确共存策略。
5. **模型体验**：来自 3 个不同 IP 的 Zen 免费额度 429 报错（#42074）、Copilot 模型不可见（#42083）等问题说明多模型接入的可用性仍是验证核心；`glm-5.2` 此类模型多源路由缺少粘性（#35402）让高额 prompt 缓存失效成为用户的直接成本痛点。

---

> 数据源：[GitHub anomalyco/opencode](https://github.com/anomalyco/opencode) | 数据时间范围：2026-08-13 ~ 2026-08-14

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-14

## 今日速览

过去 24 小时 Pi 社区无新版本发布，焦点集中在 **上下文压缩（compaction）失效**、**TUI 大文本编辑性能** 与 **终端状态恢复** 三大问题上。两个重要修复 PR（#8082、#8066）已关闭/提交，分别解决会话恢复刷屏和编辑器卡顿；同时社区对 Grok 4.6、Amazon Bedrock 等新模型/Provider 的支持呼声渐起。

---

## 社区热点 Issues（10 个）

1. **#6879 [bug] auto-compaction 在上下文超限后不触发，直到 provider 报错**  
   https://github.com/earendil-works/pi/issues/6879  
   最热 issue（19 评论 / 17 👍）。GPT-5.6 长会话中上下文超 100% 后 compaction 未触发，直到 API 在 373k tokens 处拒绝请求。评论普遍认为应在每个 agent turn 后检查上下文水位，而非依赖 provider 溢出。

2. **#8029 [bug, inprogress] Prompt 编辑器在大文本下移动光标极其缓慢**  
   https://github.com/earendil-works/pi/issues/8029  
   7000 行 buffer 时按一次方向键耗时 1650ms，呈线性增长。已标记 inprogress，由 PR #8066 的视觉行缓存方案修复。

3. **#7779 [bug] 多 Unix 用户共享 PI_CODING_AGENT_DIR 受限**  
   https://github.com/earendil-works/pi/issues/7779  
   `auth.json` 与 `models-store.json` 权限固定为 `0600`，首个创建者独占读写，其他用户进程无法访问共享状态。DevOps 多用户场景痛点。

4. **#7829 [bug, inprogress] Windows 上无效 settings.json 被静默忽略，误报 'bash not found'**  
   https://github.com/earendil-works/pi/issues/7829  
   Windows 路径反斜杠未转义导致 JSON 非法，但 Pi 不报 JSON 错误，反而以误导性的“bash not found”呈现。Windows 用户诊断成本高。

5. **#8017 [bug] 支持 Anthropic refusal 服务端 fallback**  
   https://github.com/earendil-works/pi/issues/8017  
   项目作者 badlogic 亲自提交。当 Anthropic 分类器判定 Pi 行为违规时，compaction 可能失败，需要接入官方 refusal fallback 机制。

6. **#7761 [bug] TUI 复制提示 "Copied!" 但剪贴板为空（VTE 终端）**  
   https://github.com/earendil-works/pi/issues/7761  
   GNOME Terminal 等 VTE 环境下，`copySelectionToClipboard()` 仅写入 OSC 52，`wl-paste` 确认剪贴板未更新，导致复制功能不可用。

7. **#7689 [bug] Codex 后端需处理 `end_turn: false`**  
   https://github.com/earendil-works/pi/issues/7689  
   Codex backend 可能在 `response.completed` 中返回 `end_turn: false`，Pi 当前未处理，可能导致会话结束/继续行为异常。由 mitsuhiko 提出。

8. **#8041 [feature] HTML 导出应渲染 Mermaid 与 LaTeX 以匹配 TUI**  
   https://github.com/earendil-works/pi/issues/8041  
   HTML 导出使用 marked 直接渲染 markdown，导致 Mermaid 图和 LaTeX 公式以源码暴露。社区希望导出内容与 TUI 视觉一致。

9. **#7787 [bug] Bash 工具的 PI_\* 环境变量指南引发无关权限请求**  
   https://github.com/earendil-works/pi/issues/7787  
   默认 `exposeSessionEnvironment: true` 会向模型注入“查看 PI_* 环境变量”的指南，导致模型在普通任务中执行 `env` 等操作并触发多余权限提示，干扰正常工作流。

10. **#7739 [feature] 设定启动时间预算，对标 jcode 的延迟与内存**  
    https://github.com/earendil-works/pi/issues/7739  
    给出与 jcode 启动性能的量化差距表（中位数交互式 PTY 启动），希望 Pi 设定明确的启动时间/内存预算并做优化。

---

## 重要 PR 进展（10 个）

1. **#8082 [fix(tui)] 只渲染可见视口；SIGINT 时恢复终端状态**  
   https://github.com/earendil-works/pi/pull/8082  
   两个终端卫生修复：恢复大 session 时全量重放历史（759KB session 产生 844KB 输出）；SIGINT 后终端遗留 raw mode、光标隐藏、Kitty keyboard protocol 未复位的问题。

2. **#8066 [fix(tui)] 添加 visual lines 缓存，避免大文本重复计算**  
   https://github.com/earendil-works/pi/pull/8066  
   修复 #8029：按宽高和文本内容缓存 visual lines，避免方向键每次触发全量重算。作者同时引入 `VisualLine` 类型整理内联类型。

3. **#8086 [fix(ai)] Gemini 端点拒绝未知字段时回退到旧版工具 schema**  
   https://github.com/earendil-works/pi/pull/8086  
   部分 generativelanguage 端点拒绝 `parametersJsonSchema` 等新字段（400 `Unknown name`），此 PR 提供兼容回退。

4. **#8084 [fix(coding-agent)] 布尔扩展 flag 不再吞掉后续 prompt**  
   https://github.com/earendil-works/pi/pull/8084  
   修复 `pi -p --plan "prompt"` 场景下 `--plan` 被当作布尔 flag 却吞掉了 `"prompt"`，导致会话无消息直接退出的问题。

5. **#8070 [fix(coding-agent)] 校验扩展 flag 默认值类型**  
   https://github.com/earendil-works/pi/pull/8070  
   `registerFlag()` 的 `type` 与 `default` 现在构成判别联合类型，避免布尔 flag 拿到 `"false"` 字符串而恒为真值。

6. **#8085 [feat(tui)] Escape 键取消进行中的鼠标选区**  
   https://github.com/earendil-works/pi/pull/8085  
   自动复制到剪贴板很好，但用户可能误选：现在可在松开鼠标前按 Escape 清除选区而不触发复制，符合常规编辑器行为。

7. **#7984 [fix(coding-agent)] 更新 grok-mermaid 至 0.2.3**  
   https://github.com/earendil-works/pi/pull/7984  
   解决 #7832，Mermaid 图渲染效果大幅改善（附 before/after 截图），类（class）暂不解析。

8. **#6216 [feat] 新增 Amazon Bedrock Mantle OpenAI Responses provider**  
   https://github.com/earendil-works/pi/pull/6216  
   基于 openai-node 的 Bedrock Provider，接入 Mantle OpenAI Responses API。是原 #6214 的替代实现。

9. **#8076 [DRAFT] 新 harness 开发分支**  
   https://github.com/earendil-works/pi/pull/8076  
   davidbrai 创建，目前为草稿状态，涉及新的 harness 设计，尚未有实现细节。

10. **#8057 [fix(examples)] todo 工具校验失败返回 undefined 导致 TUI 崩溃**  
    https://github.com/earendil-works/pi/pull/8057  
    校验失败时 `details` 为 `{}` 真值对象，`renderResult` 跳过所有分支后返回 `undefined`，交互模式下整个 TUI 崩溃。

---

## 功能需求趋势

1. **新模型/新 Provider 支持**：Grok 4.6 需要加入 xAI model catalog（#8046）；Amazon Bedrock Mantle Provider（PR #6216）；Kimi 的 `cached_tokens` 应纳入 usage 统计（#8075）。社区对跟进主流模型发布有较强需求。

2. **终端健壮性与恢复**：SIGINT 后终端 raw mode 与标题未恢复（#8080）、`/exit` 未重置 kitty keyboard protocol（#5065）、剪贴板失效（#7761）、会话恢复全量刷屏（#8079）——终端全生命周期卫生是高频诉求。

3. **性能优化**：大文本 prompt 编辑器卡顿（#8029）、启动时间对标 jcode 差距（#7739）、扩展加载 1100ms 耗时（#4254），性能问题集中在初始化和大 buffer 场景。

4. **渲染与导出能力**：HTML 导出需渲染 Mermaid/LaTeX（#8041）；流式输出中部分内容闪现颜色异常（#8060）。文档展示与视觉一致性开始被社区关注。

5. **多用户/配置共享**：PI_CODING_AGENT_DIR 的 0600 权限阻碍多用户协作（#7779）；settings.json 错误提示不友好（#7829）；i18n 本地化请求（#8077）。Pi 正从单用户工具走向团队场景。

---

## 开发者关注点

- **上下文管理不可靠**：#6879 表明 compaction 触发时机有根本性缺陷，高赞高评论，是当前社区最大痛点之一。
- **终端状态“拿起容易放下难”**：SIGINT、/exit、会话恢复均可能破坏终端环境，开发者被迫频繁 `reset`。
- **大文本/长会话性能仍需打磨**：编辑器 1650ms 单次按键延迟（#8029）与会话恢复 844KB 输出（#8079）都影响日常使用。
- **错误信息可诊断性差**：无效 JSON 被静默吞掉并误报“bash not found”（#7829）、未知斜杠命令被当普通消息发给模型（#8081），这类“假成功/假失败”最消耗排查时间。
- **扩展体系契约待完善**：布尔 flag 吞 prompt（#8084）、flag 默认值类型不校验（#8070）、MCP 工具无法折叠（#8074）、extension override 元数据合成（#8078）——扩展 API 的健壮性仍在快速迭代中。
- **流式传输稳定性**：openai-codex 流式中断后整段重试并保留重复输出（#8031），在长回复时极为尴尬。

> 数据来源：https://github.com/earendil-works/pi （Issues #2366–#8088，PRs #6216–#8086）

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-14）

## 今日速览

正式版 **v0.21.11** 发布，带来 Agent Plugins v1 与原生多智能体 `/coordinate` 命令；同时 Web Shell 相关 PR 支持独立会话目标保留与 workspace 文件上传。社区方面，Windows CLI 的 Ctrl+V 粘贴回归（#9061）和 Vertex AI 上 Gemini 2.5 不可用（#9019）成为开发者关注焦点；SWE-bench Verified 结果被标记为 QUARANTINED，500 条用例全部未通过，质量门槛仍然严格。

## 版本发布

### v0.21.11（正式版）
- 支持 **Agent Plugins v1** 扩展 Agent 能力（[#8834](https://github.com/QwenLM/qwen-code/pull/8834)）
- 通过 `/coordinate` 命令启用原生**多智能体工作流**，支持只读 teammate 协作（[#8804](https://github.com/QwenLM/qwen-code/pull/8804)）
- 附带 DSW EAS Harbor full E2E 验证数据；SWE-bench Verified 500/500 完成，但状态为 **QUARANTINED**（0 resolved）

### v0.21.12-preview.1 / nightly
- `fix(web-shell): preserve standalone session target`（[#9038](https://github.com/QwenLM/qwen-code/pull/9038)）
- `feat(web-shell): support workspace file uploads`（由 @ytahdn 贡献）

## 社区热点 Issues

### 1. [#8718 RFC：原生协调多个独立 Qwen Code 会话](https://github.com/QwenLM/qwen-code/issues/8718)（CLOSED，9 评论）
社区最受关注的多智能体设计 RFC，leader 可调度 2-3 个 worker 并保持交互。该提案直接推动了 `/coordinate` 命令落地，是多智能体路线图的顶层设计。

### 2. [#9061 Windows CLI 中 Ctrl+V 粘贴完全失效](https://github.com/QwenLM/qwen-code/issues/9061)（OPEN，P1，4 评论）
自 0.21.0 至 0.21.11 间引入的回归——Ctrl+V 在 Windows CLI 无任何响应，降级到 0.21.0 恢复。Windows 用户的日常操作被打断，P1 优先级体现了影响面。

### 3. [#9019 Gemini 2.5 在 Vertex AI 上完全不可用](https://github.com/QwenLM/qwen-code/issues/9019)（OPEN，5 评论）
每次请求都会因 `thinking_level` 不受模型支持而立即失败，发生在任何 tool call 之前。第三方模型集成的兼容性问题，影响 Vertex AI 用户。

### 4. [#8678 session 大规模恢复超时时保留当前会话](https://github.com/QwenLM/qwen-code/issues/8678)（OPEN，P1，8 评论）
修复方案已部分合并（[#8691](https://github.com/QwenLM/qwen-code/pull/8691)），实现超时契约与可观测性。社区关注 session 恢复的稳定性与延迟。

### 5. [#7118 Windows 独立安装器 SHA-256 校验失败](https://github.com/QwenLM/qwen-code/issues/7118)（CLOSED，7 评论，👍3）
`Get-FileHash` 解析失败导致安装中断。社区最热门的三方问题之一，Windows 用户受影响较多，欢迎 PR 修复。

### 6. [#9025 Keyless Vertex AI 无法从环境推断认证类型](https://github.com/QwenLM/qwen-code/issues/9025)（OPEN，5 评论）
纯环境变量配置的 keyless Vertex AI 在 headless 模式下启动即失败，`getAuthTypeFromEnv` 未能正确识别。与 #9019 共同构成 Vertex AI 集成双痛点。

### 7. [#8586 跟踪 activeWork 与后台 Agent 恢复](https://github.com/QwenLM/qwen-code/issues/8586)（OPEN，4 评论）
提议将 `activeWork` 加入 daemon 深度健康检查，并构建长期运行后台 Agent 的恢复路径。与多智能体/后台自动化路线图直接相关。

### 8. [#9088 `read_file` 仅凭扩展名将非图片发给模型 API](https://github.com/QwenLM/qwen-code/issues/9088)（OPEN，3 评论）
以 `.png` 结尾的 UTF-8 JSON 文件被当作图片发送，导致 400 错误并中断回合。文件类型识别不能只看扩展名——这是工具链健壮性问题。

### 9. [#6801 `pinned/` 目录——受保护的只读记忆文件](https://github.com/QwenLM/qwen-code/issues/6801)（OPEN，3 评论）
建议增加 `pinned/` 子目录，防止 `/dream` 整理时合并重要记忆。社区对记忆管理的精细化控制有明确需求。

### 10. [#8944 npm update 之后出现 2 个高危漏洞](https://github.com/QwenLM/qwen-code/issues/8944)（CLOSED，3 评论）
自 0.21.0 起每次 `npm update` 都会报 2 个 high severity 漏洞。安全敏感型用户高度关注，已关闭说明有修复或说明。

## 重要 PR 进展

### 1. [#9107 feat(telemetry): Trace main agent invocations](https://github.com/QwenLM/qwen-code/pull/9107)（OPEN）
为主 Agent 调用添加遥测追踪，提升可观测性。对诊断多智能体行为和性能瓶颈很有价值。

### 2. [#8890 refactor(cli): Generalize the Conversations runtime foundation](https://github.com/QwenLM/qwen-code/pull/8890)（OPEN）
重构 Conversations 运行时基础，为后续多会话/多智能体场景打底。属于大的架构调整，值得关注。

### 3. [#8677 feat(tui): OpenTUI renderer backend (react track)](https://github.com/QwenLM/qwen-code/pull/8677)（OPEN）
全新的 OpenTUI 渲染后端，主打无闪烁和一流鼠标支持，单 PR 完成整个 react track 迁移。CLI 交互体验的重要升级。

### 4. [#8899 fix(autofix): hold autofix rounds while review-pr is in flight](https://github.com/QwenLM/qwen-code/pull/8899)（CLOSED）
修复 #8888 中的自增强循环——autofix 推送会取消进行中的 review-pr。CI/CD 流程稳定性关键修复。

### 5. [#9040 fix(cli): prevent dialog clipping in short terminals](https://github.com/QwenLM/qwen-code/pull/9040)（OPEN）
解决 `/statusline` 和 `/skills` 对话框在矮终端中被裁切的问题，对应 #9037。低于 16 行时切换紧凑布局。

### 6. [#9086 fix(review): harden the pipeline against four live-run failures](https://github.com/QwenLM/qwen-code/pull/9086)（OPEN）
针对三个真实 PR 运行 `qwen review run` 时发现的 4 个缺陷逐一修复并添加回归测试。质量改进与基础设施硬化。

### 7. [#9007 fix(serve): Bound ACP HTTP pre-attach buffers by bytes](https://github.com/QwenLM/qwen-code/pull/9007)（OPEN）
按字节限制 ACP HTTP pre-attach 缓冲区，修复内存使用边界问题。服务端稳定性相关。

### 8. [#8740 feat(serve): share one Chrome bridge across sessions via multi-client /cdp tunnel](https://github.com/QwenLM/qwen-code/pull/8740)（OPEN）
让 `/cdp` tunnel 支持多客户端，使多个会话共享同一个 Chrome 扩展桥接，避免每个会话重复连接。架构改进。

### 9. [#9104 feat(autofix): escalate a non-converging diff to a maintainer handoff](https://github.com/QwenLM/qwen-code/pull/9104)（OPEN）
当 PR diff 持续增长且超预算时，自动升级给维护者决策，而不是无限打补丁。autofix 流程的重要防失控机制。

### 10. [#9110 fix(core): clean up project snapshots for temporary working directories](https://github.com/QwenLM/qwen-code/pull/9110)（OPEN）
临时工作目录（如 `mktemp`）启动的会话退出后，清理项目快照记录，避免存储泄漏。

## 功能需求趋势

- **多智能体/Agent 编排**：`/coordinate` 落地后，fleet stages（#8840-#8843）、后台 Agent 恢复（#8586）、Fleet Shepherd Dashboard（#7167）持续推动，是当前最明确的战略方向。
- **Web Shell / Desktop 体验优化**：Channel 策略与 workspace 管理重设计（#8845）、外部链接打开修复（#9108）、项目列表图标抖动（#8985），UI 细节改进密集。
- **第三方模型服务兼容性**：Vertex AI 的 `thinking_level` 与 keyless 认证问题并发暴露（#9019、#9025），社区对 OpenAI-compatible 端点的 window 适配也有诉求（#7960）。
- **记忆与上下文管理**：`pinned/` 目录（#6801）、压缩 side-query 超 window（#7960），说明用户需要更可控的长期记忆机制。
- **Omni 多模态实验**：S4-S6 系列（#8186-#8190）稳步推进，多模态降质压缩、Policy 完整语义、GC 治理等子任务进入收尾。

## 开发者关注点

- **Windows 平台问题密集**：安装器哈希校验失败（#7118）、CLI 粘贴回归（#9061）、Desktop 启动弹出终端（#9043）——Windows 用户占比不低，但体验问题最多。
- **Vertex AI 集成不稳**：Gemini 2.5 直接不可用（#9019）、headless 模式无法走 ADC（#9025），影响生产环境部署。
- **文件处理误判**：`read_file` 仅靠扩展名判断图片（#9088）、`record_artifact` 验证缺失（#9083），工具层健壮性需要加强。
- **安全与权限边界**：npm 高危漏洞（#8944）、Git 跨 worktree 变更防护（#8687）受到关注，开发者对运行时安全更敏感。
- **CLI 操作细节回归**：Ctrl+V 粘贴、`/statusline` 弹窗裁切等小问题虽不起眼，但对日常体验影响直接，回归测试需覆盖 Windows 与短终端场景。

---

*本日报由 QwenLM/qwen-code 仓库数据自动生成，数据时间截至 2026-08-14。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-14

## 今日速览

本周社区核心动态集中在 **v0.9.7 发布与 CodeWhale 品牌迁移**：维护者明确宣布 legacy `deepseek-tui` npm 包弃用，今后以 `codewhale` 命令作为统一入口。与此同时，v0.9.8 的预研已启动，多个 P0 级 PR（如 DS4 本地模型一等支持、Auto-Review 模型守护层）正在密集合入。Issue 侧热度最高的是 Agent 工具 schema 过度复杂（32 字段引发模型报错）以及大文本任务中 Agent 会话卡死/中断的稳定性反馈。


## 版本发布

### v0.9.7 — CodeWhale 品牌发布，legacy 包停更

- **核心变化**：公开产品正式定名 **Codewhale**（Shannon Labs 出品），`codewhale` 命令、npm 包名及 release 资产统一为小写技术标识。
- **弃用说明**：legacy npm 包 `deepseek-tui` 进入冻结状态，不再获得新版本。
- **升级提示**：v0.8.x 老用户需迁移至新命令与配置路径，社区反馈迁移过程中可能遇到配置路径解析差异（见 Issue #2369）。


## 社区热点 Issues（10 个）

1. **[#998 文案展示不全](https://github.com/Hmbown/CodeWhale/issues/998)** — 评论 11 条
   TUI 界面中部分文案被截断，用户希望鼠标悬停时显示完整提示。属于 v0.9.4 的 UI 细节问题，社区共鸣较高。

2. **[#1004 /dryrun 命令：预览下一次 Chat Completion 请求](https://github.com/Hmbown/CodeWhale/issues/1004)** — 评论 9 条
   针对 DeepSeek V4 Pro 长上下文中“必须先发送才能看到请求内容”的痛点，提出 dry-run 预览方案。需求设计完整，获维护者关注。

3. **[#5324 简化 Agent 工具的 32 字段 JSON Schema](https://github.com/Hmbown/CodeWhale/issues/5324)** — 评论 7 条
   模型面对 `agent` 工具 32 个属性、8 种 action、零必填字段的巨型 schema 时频繁报错。维护者 Hmbown 亲自提出，是当前模型稳定性方向的核心问题。

4. **[#2369 CodeWhale 配置路径跨 OS/Cygwin 碎片化 + 静默迁移 Bug](https://github.com/Hmbown/CodeWhale/issues/2369)** — 评论 7 条
   Windows 与 Cygwin 下 home 目录规则不同导致配置/密钥路径解析不一致，legacy 迁移还会产生静默错误。影响面广，属于迁移期高危问题。

5. **[#894 执行过程中图片显示混乱](https://github.com/Hmbown/CodeWhale/issues/894)** — 评论 6 条
   v0.9.4 中 TUI 渲染图片时出现错乱，附有截图复现。影响多模态工作流体验。

6. **[#1425 大文本处理工程会话中断卡死](https://github.com/Hmbown/CodeWhale/issues/1425)** — 评论 6 条
   分析 300 万字小说时启动 10 个子 Agent 分批处理，最终因 `agent_wait` 超时会话中断。子 Agent 全部 Running 但父会话无法收敛，是当前 Agent 编排稳定性的重要复现案例。

7. **[#1482 NVIDIA NIM 接入报错 404](https://github.com/Hmbown/CodeWhale/issues/1482)** — 评论 6 条
   调用 NIM 接口时返回 `404 page not found`。`doctor` 输出显示版本与配置路径，但问题定位仍需维护者介入。

8. **[#1732 合并分析报告保存文档巨慢](https://github.com/Hmbown/CodeWhale/issues/1732)** — 评论 6 条
   将分析报告合并保存为本地文档时缓存命中率极低、过程极慢。社区怀疑与长文本处理的内存/缓存策略有关。

9. **[#5316 EPIC-005: CodeWhale TUI Crate 拆分子任务伞](https://github.com/Hmbown/CodeWhale/issues/5316)** — 评论 5 条
   架构层面的 umbrella issue，追踪 TUI crate 分解的多个子 EPIC 与 FEAT。体现 v0.9.8 期间的内部重构方向。

10. **[#1651 VS Code 崩溃：YOLO Agent 运行测试脚本时退出](https://github.com/Hmbown/CodeWhale/issues/1651)** — 评论 5 条
   在 VS Code 集成终端中启动 TUI，YOLO Agent 后台执行测试脚本导致编辑器崩溃。IDE 集成稳定性问题，直接影响开发者日常使用。


## 重要 PR 进展（10 个）

1. **[#5365 feat(provider): DS4 本地模型一等支持](https://github.com/Hmbown/CodeWhale/pull/5365)**
   将 DwarfStar（DS4）作为本地 DeepSeek V4 路由集成，`/setup provider ds4` 一键预填无密钥 loopback 预设，复用 OpenAI 兼容传输层，不新增协议适配器。

2. **[#5353 feat(tui): Auto-Review 模型守护层（v0.9.8）](https://github.com/Hmbown/CodeWhale/pull/5353)**
   Auto-Review 升级为双层模式：确定性兜底仍不可绕过，fallback 卡住时升级为一次性模型守护，而非静默阻塞。引入 Codex `auto_review` 语义与 Kimi 模式词汇。

3. **[#5369 fix(tools): Moonshot schema 降级而非拒绝条件参数](https://github.com/Hmbown/CodeWhale/pull/5369)**
   针对 #5324 的独立 schema 修复切片：Moonshot 相关工具不再因条件参数而整体拒绝请求，改为 schema 降级兼容。

4. **[#5368 fix(tui): 将无隔离测试限定到独立状态根目录](https://github.com/Hmbown/CodeWhale/pull/5368)**
   修复测试读取宿主 `~/.codewhale` 与 display probe 导致的本地确定性失败问题，三个机制各配回归测试。

5. **[#5339 fix(engine): 过滤子进程持有的 shell 完成事件](https://github.com/Hmbown/CodeWhale/pull/5339)**
   修复子 Agent 后台 shell 完成事件误入父模型流的问题，并补充父/子任务回归测试。Closes #5325。

6. **[#5364 feat(tui): Markdown blockquote 渲染增加引用条](https://github.com/Hmbown/CodeWhale/pull/5364)**
   支持嵌套、行内格式、自动换行与选区复制，替代以往将 `>` 作为纯文本展示的粗糙行为。

7. **[#5358 feat(engine): Auto-Review 拒绝原因 + 回合熔断器](https://github.com/Hmbown/CodeWhale/pull/5358)**
   修复模型收到裸 `permission_denied` 后反复重试同一步骤的问题——拒绝时携带原因，并在回合级别进行熔断。

8. **[#5333 feat(tui): 宿主终端窗口置顶迷你窗（社区 PR 整合）](https://github.com/Hmbown/CodeWhale/pull/5333)**
   维护者 Hmbown 将社区 PR #5318（SparkofSpike）harvest 后重新落地：`/pin` 命令可将 Windows 终端窗口缩为 640×400 并置顶，再次触发恢复原大小。

9. **[#5336 fix(mcp): nextCursor 无更多页时省去该字段](https://github.com/Hmbown/CodeWhale/pull/5336)**
   修复 MCP 响应中 `"nextCursor": null` 不符合协议的问题（必须为 string 或 absent），Claude Code 等严格客户端不再拒绝响应。

10. **[#5338 feat(web): 文档指南页迁移至字典架构](https://github.com/Hmbown/CodeWhale/pull/5338)**
   首个 i18n 重构切片：移除 `docs/guide` 页面中的 `isZh` 三元表达式，引入按页面组织的字典模式，为后续多语言维护打底。


## 功能需求趋势

- **本地/自托管模型支持（DS4、NIM）** — 社区对 DwarfStar、NVIDIA NIM、自托管长上下文模型的一等集成呼声上升，要求减少手动自定义 provider 的配置负担。
- **Agent 编排稳定性** — 多子 Agent 并发、超时、会话中断成为高频问题，开发者需要 dry-run 预览、拒绝理由、熔断器等可观测与控制手段。
- **可配置输入体验** — “多行输入模式”与自定义发送快捷键（#5345）是近期新增的明确诉求，参考 Grok Build / Codex 的交互范式。
- **i18n 覆盖与 UI 细节** — 繁体中文已补齐，但仍有大量硬编码英文字符串；文案截断、图片渲染混乱等视觉问题也受到关注。
- **工具 schema 简化** — 32 字段的 agent 工具 schema 已成为模型调用稳定性的瓶颈，简化与降级策略是 v0.9.8 的明确改进方向。

## 开发者关注点

- **配置迁移之痛**：`deepseek-tui` → `codewhale` 迁移过程中，Windows/Cygwin 下配置路径不一致、doctor 卡在 `needs action` 等问题集中爆发。
- **长任务可靠性**：多子 Agent 编排在真实大文本场景中容易卡死或中断，`agent_wait` 超时、字节量大的报告保存慢是高频反馈。
- **命令执行环境误判**：AI 生成的 shell 命令在 PowerShell/cmd 下失败，开发者希望让 AI 自行探测或选择运行环境。
- **模型不可见信息**：开发者希望增加 /dryrun 预览、内置指令帮助（`tui_help`）等机制，减少 agent 因缺少上下文而产生的幻觉。
- **神秘崩溃**：VS Code 集成终端中的崩溃、子进程完成事件污染模型流等“看不到原因”的问题，削弱了开发者在 IDE 中使用 TUI 的信心。

---
*本日报由 GitHub 数据自动生成，覆盖 2026-08-13 至 2026-08-14 的社区活动。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*