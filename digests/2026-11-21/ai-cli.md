# AI CLI 工具社区动态日报 2026-11-21

> 生成时间: 2026-11-21 17:36 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析 · 2026-11-21

## 1. 生态全景

当前 AI CLI 工具已从"能不能用"进入"用得起、用得稳"的阶段：成本与额度失控（Claude Code #38335 达 878 评论、OpenCode 免费额度主帖 404 评论）成为声量最大的议题，超过任何新功能讨论。二是**长会话可靠性**成为跨工具共识痛点——Claude Code 的 compaction 丢信息、Pi 的压缩摘要膨胀、Qwen Code 的自动压缩开关、OpenCode 的上下文管理，指向同一类问题。三是**安全护栏**在多个仓库同日密集收敛：Copilot CLI 出现 `rsync --delete` 清盘事故、DeepSeek TUI 系列 execpolicy 逃逸修复、Gemini CLI 多条 P1 安全 PR 关闭。四是**CI/基础设施可靠性**意外成为头部项目的主要噪音源（Qwen Code #14724 达 518 评论）。整体看，生态正从能力竞赛转向工程成熟度竞赛。

## 2. 各工具活跃度对比

| 工具 | Issues（本期列举） | PR（本期列举/更新） | Release 情况 | 备注 |
|---|---|---|---|---|
| Claude Code | 10 条热点 + 3 条补充 | 仅 3 条更新，均非新功能 | v2.1.330 | 声量最大（#38335 878 评论/476 赞） |
| OpenAI Codex | 10 条 + 1 补充 | 10 条（多为 CLOSED） | 3 个 0.173.0-alpha 预发布（无说明） | TUI 降噪 PR 批量落地 |
| Gemini CLI | 10 条 | 10 条（多为 CLOSED）+ 2 条关注 | v0.71.0 nightly | 安全/稳定性修复集中 |
| GitHub Copilot CLI | 10 条 + 4 条补充 | 仅 3 条 | v1.0.115-3/-4/-5 | 补丁节奏快，PR 极少 |
| Kimi Code CLI | 无 | 无 | 无 | 过去 24 小时无活动 |
| OpenCode | 10 条 | 10 条 + 1 条注 | 无新 Release | 免费额度主帖热度最高 |
| Pi | 10 条 | 10 条 | 无新 Release | 上下文成本治理为主线 |
| Qwen Code | 10 条 + 1 补充 | 10 条 + 2 条关注 | v0.28.3 + 2 预览/夜构建 | CI 工单评论量异常高 |
| DeepSeek TUI | 10 条 | 10 条 | 无新 Release | execpolicy 安全修复密集 |

> 注：表中数字为各摘要**列举**的条目数，非仓库全量；评论数为摘要中明确给出的数据。

## 3. 共同关注的功能方向

- **上下文/记忆治理（覆盖 6+ 工具，最强共识）**
  - Claude Code：compaction 与 `/clear` 后保留状态（#70555、#111493）、替换自动记忆后端（#48465）
  - Pi：searchTools 每次 ~36KB 占上下文约 25%（#12165）、压缩摘要 9 次从 17k 膨胀至 164k 字符（#12242）、压缩预算按上下文窗口计算（PR #12380）
  - Qwen Code：禁用自动压缩开关（#12597）、worktree 间共享自动记忆（#18030）
  - OpenCode：长会话消息置顶（#55195）
  - Codex：推理摘要可选 Auto/Concise/Detailed/None（PR #62905）

- **成本/额度可观测性与失控（Claude Code、OpenCode、Codex、Pi）**
  - Claude Code：Max 额度异常耗尽（#38335）、side session 导致周额度约 1 天耗尽（#108238）、插件用量 API 与 `/usage` 口径不一致（#101847）
  - OpenCode：免费额度主帖（#59387）、ChatGPT 订阅共享限额误报（#62529）
  - Codex：GPT-6.2 Astra 未出现在 Desktop 用量明细（#62442）
  - Pi：空闲缓存预热窗口可配置（#11127）

- **破坏性命令安全护栏（Copilot CLI、Gemini CLI、DeepSeek TUI、Pi）**
  - Copilot CLI：Agent 在 WSL 执行 `rsync -a --delete` 清空磁盘（#5541）
  - Gemini CLI：递归/强制 `rm` 变体漏检（PR #30171）、阻止 `git reset --force`（#22672）、粘贴内容泄露 SSH 私钥（PR #30169）
  - DeepSeek TUI：`find -delete`、`awk/sed` 载荷、tmux 动词等逃逸面系列修复（#7412、PR #7425–#7430）
  - Pi：headless 模式退出与清理

- **MCP / 外部集成兼容性（Claude Code、Codex、Copilot CLI、Gemini CLI）**
  - Claude Code：draft-07 schema 工具被拒（#88882）
  - Codex：HTTP MCP 启动报错泄露凭据 URL（PR #62906）、旧版 server 回退（PR #62893）
  - Copilot CLI：MCP Tasks 增强未发送（#5540）、OAuth 缺 Mcp-Session-Id（#5542）
  - Gemini CLI：工具数超 128 触发 400（#24246）

- **Windows 平台质量欠账（Claude Code、Codex、Pi、DeepSeek TUI、Copilot CLI）**
  - Codex：连接失败（#62918）、取消快照遗留 774 GiB tmp 文件（#50920）、Computer Use 边框残留（#57101）
  - DeepSeek TUI：`/undo` Windows 验收未关闭（#6970）
  - Pi：Cygwin 引号截断（PR #12369）、安装脚本与 apt 包冲突（#12166）

- **CJK/输入法适配（DeepSeek TUI、Gemini CLI）**
  - DeepSeek TUI：中文 IME 未适配（#2323）、64 KiB 静默截断大型 CJK 粘贴（#7403）
  - Gemini CLI：韩文 IME 丢末字符（PR #30178）

- **多代理/子代理可靠性（Gemini CLI、Copilot CLI、Qwen Code）**
  - Gemini CLI：MAX_TURNS 被误报成功（#22323）、generalist agent 无限挂起（#21409）、模型不主动调用 subagent（#21968）
  - Copilot CLI：子 Agent 无法多轮对话、background 模式被静默忽略（#5543）
  - Qwen Code：子代理后台通知只达顶层导致崩溃（#15748）

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业登录/组织策略、Remote Control、Cowork 协作、MCP 生态 | 付费个人（Max）与企业组织 | 闭源；企业 Admin Console 统一网关；桌面端 + CLI + Chrome/Office 插件多端 |
| **OpenAI Codex** | TUI 可读性/降噪、推理摘要控制、app-server 外部集成 | CLI 重度用户 + Desktop | Rust 实现（rust-v0.173 预发布）；app-server 架构；Computer Use |
| **Gemini CLI** | 多代理/子代理架构、AST 感知代码库理解、安全策略引擎 | 开源开发者、Google Cloud 用户 | 开源；PolicyEngine + OS Sandbox；AgentRegistry；夜间构建高频 |
| **Copilot CLI** | 权限审批 UX、ACP 编辑器集成、GitHub 生态 | GitHub 订阅用户、IDE 用户 | 补丁式发布（v1.0.115），集成 Copilot Fusion 路由、ACP |
| **OpenCode** | 桌面端项目管理、多 provider/OAuth 接入、插件体系 | 多模型自由切换用户 | Desktop + bundled server；Google Antigravity provider（PR #65430） |
| **Pi** | token 成本精细治理、多 provider 兼容、durable 压缩 | 成本敏感的资深开发者 | 自研 durable 层 + AI 层；headless/CI 场景 |
| **Qwen Code** | Web Shell 统一聊天界面、SDK 契约健壮性、daemon 模式 | SDK 集成方、企业自托管 | local-daemon + Web Shell；Python SDK 契约校验密集 |
| **DeepSeek TUI** | execpolicy 沙箱安全、ACP 多 agent 会话接入、TUI 流式渲染 | 安全敏感用户、多 agent 编排者 | ACP 将 Claude Code/Codex/Kimi 作为会话接入（#7279）；fail-closed 策略 |
| **Kimi Code CLI** | —（本期无活动） | — | — |

**关键差异点**：Claude Code 与 Codex 走"多端 + 企业化"，Gemini CLI/Qwen Code 走"开源 + 代理编排/Web Shell"，Pi 专注"每 token 成本效率"，DeepSeek TUI 走"沙箱安全 + ACP 聚合器"，Copilot CLI 深度绑定 GitHub 工作流。值得注意的是 **ACP 正在成为跨工具会话互通的潜在标准**（DeepSeek TUI #7279、Copilot CLI v1.0.115-4 均支持 ACP）。

## 5. 社区热度与成熟度

- **热度最高**：Claude Code（#38335 单项 878 评论/476 赞）、OpenCode（额度主帖 404 评论）、Qwen Code（CI 工单 518 评论）。但高热度性质不同——Claude Code/OpenCode 是**用户痛点驱动**，Qwen Code 是**CI 机器人工单堆积**。
- **成熟度较高、节奏稳健**：Codex 与 Gemini CLI——本期 PR 多为 CLOSED 状态且批量落地（Codex 10 条 PR 全部 CLOSED，Gemini CLI 10 条中 9 条 CLOSED），显示评审与合并流程成熟。
- **快速迭代但质量承压**：OpenCode v2.3.0→2.3.2 出现模型选择器回归（#65138）、服务端 V8 堆 OOM（#65371）；Copilot CLI 三个补丁版本内有插件初始化竞态，"已修复"项在稳定版复现（#5544）。
- **小而精**：Pi 与 DeepSeek TUI 社区规模较小，但讨论质量高——Pi 的上下文占比基于 3 天真实会话实测，DeepSeek TUI 吸引多位外部贡献者集中提交安全修复。
- **低活跃**：Kimi Code CLI 过去 24 小时无活动。

## 6. 值得关注的趋势信号

1. **"成本可预期"正在取代"能力"成为续费决策因素**。Claude Code #38335 的高赞（476）与 OpenCode 额度主帖的高评论（404）说明，即使模型能力领先，配额不可解释会直接动摇付费意愿。**对开发者**：接入第三方 CLI 时优先选择额度口径透明、有官方 usage API 一致性的工具；**对工具方**：用量明细与告警是留存关键，而非边缘功能。

2. **长会话是当前最大的技术债**。compaction 静默丢需求已被 Claude Code 用户明确标注为"生产事故"（#111493），Pi 实测压缩膨胀近 10 倍（17k→164k 字符）。**对开发者**：不要把关键需求托付给一次性会话，重要上下文应外部化；**对工具方**：有状态续接、显式告警、压缩预算按上下文窗口计算（Pi PR #12380 方向）将成标配。

3. **Agent 的破坏性操作能力已跑在安全护栏前面**。Copilot CLI 的 `rsync --delete` 清盘事故（#5541）与 DeepSeek TUI 一整批 execpolicy 逃逸修复同日出现，说明模型调用 shell 的风险已从理论变为现实事故。**对开发者**：启用自主 agent 前应配置强制确认与 fail-closed 策略；`find -delete`、`awk BEGIN{system()}`、`sed /e`、未建模启动器是当前已知盲区。

4. **"静默失败"比"报错"更伤害信任**。Gemini CLI 子代理达 MAX_TURNS 仍报 success（#22323）、DeepSeek TUI 粘贴静默截断（#7403）、Copilot CLI background 模式被静默忽略（#5543）、Pi 流式 error 不重试（#12206）——四类不同工具、同一模式。**对开发者**：自动化流水线需对"成功"结果做二次校验；**对工具方**：显式失败优先于兜底成功。

5. **ACP 有潜力成为跨 CLI 的互操作层**。DeepSeek TUI 将 Claude Code/Codex/Kimi 作为会话接入（#7279）、Copilot CLI 在 ACP 编辑器中启用结构化提问（v1.0.115-4），意味着**工具间的竞争正从"谁替代谁"转向"谁能编排谁"**。**对技术决策者**：不必押注单一 CLI，可关注 ACP 兼容性作为选型维度。

6. **CI 与发布验证流程成为头部项目的隐性瓶颈**。Qwen Code 单条 CI 工单 518 评论、Managed Agent gate 长期失败并出现"失败 PR 仍可合并"漏洞（#17039）；Copilot CLI 出现"已关闭问题在稳定版复现"（#5544）。**对工具方**：发布验证与回归覆盖的投入回报，正在超过新功能开发。

7. **平台与本地化细节决定可用性下限**。Windows（Codex 774 GiB 临时文件、Pi Cygwin 截断、DeepSeek `/undo` 未验收）与 CJK 输入（IME 丢字、64 KiB 截断）问题跨工具反复出现，且往往长期悬置。**对中文开发者**：选用工具前应将 IME 与大文本粘贴纳入实测；**对工具方**：非英语市场是尚未被充分服务的差异化空间。

---

*说明：以上分析严格基于所提供的 2026-11-21 各工具社区动态摘要，所有评论数、赞数、Issue/PR 编号与版本号均引自原文，未作补充或推测。Kimi Code CLI 当日无活动，未纳入对比。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：anthropics/skills，截止 2026-11-21。PR 数据中的评论数字段为 `undefined`，因此“PR 排行”以更新活跃度、修复对象的重要性及社区关联 Issue 讨论度为依据；Issues 部分保留真实评论数。

## 1. 热门 Skills 排行（PR）

以下条目均为 **OPEN（未合并）**，按关注度与影响面排序：

1. **mcp-builder 修复（PR #1742）** — 适配 `mcp>=2.0.0` 中 `streamable_http_client` 的重命名及自定义 header 配置方式，修复 #1668。影响所有使用 MCP 构建器 Skill 的用户，是当前最贴近核心功能的修复。
   https://github.com/anthropics/skills/pull/1742
2. **skill-creator 触发评测隔离与跨平台修复（PR #1298）** — 解决触发器评测的误判（worker 探针竞争、Windows 下 subprocess `select()` 失败、运行时错误被误判为非触发）。与 #556、#1352 的评测失效问题同源，关注度高。
   https://github.com/anthropics/skills/pull/1298
3. **skill-creator 直接执行 package_skill.py（PR #1681）** — 修复独立运行时的 `ModuleNotFoundError`，更新使用路径。最近更新于 2026-11-19，是当前活跃度最高的 PR 之一。
   https://github.com/anthropics/skills/pull/1681
4. **skill-creator YAML frontmatter 解析修复（PR #1997）** — 修正手动去引号、拼接续行导致的元数据偏差，直接影响评测与 description 优化结果。
   https://github.com/anthropics/skills/pull/1997
5. **webapp-testing 安全性修复（PR #1980）** — 移除 `with_server.py` 中的 `shell=True`，避免未净化命令注入系统 shell。
   https://github.com/anthropics/skills/pull/1980
6. **docx 超时与输出校验（PR #1792）** — LibreOffice 超时不再误报成功，并在确认 `w:ins`/`w:del` 修订标记清除后才返回成功。
   https://github.com/anthropics/skills/pull/1792
7. **xlsx 外部链接风险检测修复（PR #2019）** — 修复 `external_links_at_risk` 仅检查工作簿级 defined_names 导致的漏报（修 #2013）。
   https://github.com/anthropics/skills/pull/2019
8. **新增 Skill 提案：md2video-audio（PR #1703）** — 将 Markdown 零成本编译为带拟真配音的 MP4，属于社区新增能力类提案。
   https://github.com/anthropics/skills/pull/1703

其他值得留意的新增提案：pyxel 复古游戏开发（#525）、document-typography 排版质检（#514）、proofcore-contract-auditor 智能合约审计（#1771）、scnet-hpc（#1615）。

## 2. 社区需求趋势（Issues）

- **安全与信任边界（最高讨论度）** — Issue #492（46 评论）指出社区 Skill 以 `anthropic/` 命名空间分发，冒充官方 Skill，存在权限提升风险。这是当前最集中的治理诉求。
  https://github.com/anthropics/skills/issues/492
- **组织级 Skill 共享与分发** — Issue #228（17 评论，👍8）要求 Claude.ai 支持组织内共享 Skill 库，替代“下载 .skill 文件再手动上传”的流程。属于工作流自动化/协作方向。
  https://github.com/anthropics/skills/issues/228
- **Skill 评测可靠性** — #556（13 评论，👍7）报告 `claude -p` 触发率为 0%；#1352（6 评论）指出多 worker 下 UUID 交叉匹配导致假阴性。社区强烈需要可信的触发评测机制。
  https://github.com/anthropics/skills/issues/556 ｜ https://github.com/anthropics/skills/issues/1352
- **上下文效率与 Skill 设计规范** — #1487 指出 `claude-api` 单次注入约 156k tokens；#2064 指出 theme-factory 的 description 未说明“何时使用”；#202（已关闭）批评 skill-creator 写作风格偏文档而非可执行指令。共同诉求是 Skill 应精简、可触发。
  https://github.com/anthropics/skills/issues/1487 ｜ https://github.com/anthropics/skills/issues/2064
- **质量控制流水线类新 Skill** — #1385 提出“预任务校准 → 对抗审查 → 交付验证”三段式质量门；#412（已关闭）提出 agent-governance 安全模式。#1329 提出 compact-memory 符号化 agent 状态压缩。方向偏向 agent 工作流与代码审查治理。
  https://github.com/anthropics/skills/issues/1385 ｜ https://github.com/anthropics/skills/issues/1329
- **文档类 Skill 的正确性** — #2018（docx 写出非法 XML）、#1868（渐变背景插值 off-by-one）说明文档/媒体类 Skill 的脚本正确性仍是高频反馈点，需求偏向测试生成与输出校验。
  https://github.com/anthropics/skills/issues/2018 ｜ https://github.com/anthropics/skills/issues/1868
- **插件重复与平台功能缺口** — #189（👍9）指出 document-skills 与 example-skills 内容重复占用上下文；#1143（👍18）要求支持修改账户邮箱。后者属平台层诉求，与 Skills 本体关联较弱。
  https://github.com/anthropics/skills/issues/189 ｜ https://github.com/anthropics/skills/issues/1143

## 3. 高潜力待合并 Skills

以下 PR 评论活跃或更新频繁，尚未合并，可能近期落地：

| PR | 内容 | 潜力信号 |
|---|---|---|
| #1681 | skill-creator 独立执行修复 | 更新至 2026-11-19，最新活跃 |
| #1997 | skill-creator YAML 解析 | 修正评测链路元数据，与高频 Issue 同源 |
| #1298 | skill-creator 触发器评测隔离 | 直接回应 #556/#1352 的评测失效 |
| #1742 | mcp-builder mcp>=2 适配 | 修复核心 MCP 流程，对应 #1668 |
| #1980 | webapp-testing 移除 shell=True | 安全类修复，易获维护者优先处理 |
| #1792 | docx 超时误报修复 | 结果正确性问题，影响面明确 |
| #2019 | xlsx 外部链接漏报 | 修复 #2013，属精确 bug fix |
| #1975 / #1976 / #1977 | pptx/webapp-testing/algorithmic-art 小修复（同一作者 gerardrecinto） | 各自 Fixes #1809/#1891/#1897，范围小、合并阻力低 |

链接：#1681 https://github.com/anthropics/skills/pull/1681 ｜ #1997 https://github.com/anthropics/skills/pull/1997 ｜ #1298 https://github.com/anthropics/skills/pull/1298 ｜ #1742 https://github.com/anthropics/skills/pull/1742 ｜ #1980 https://github.com/anthropics/skills/pull/1980 ｜ #1792 https://github.com/anthropics/skills/pull/1792 ｜ #2019 https://github.com/anthropics/skills/pull/2019 ｜ #1975 https://github.com/anthropics/skills/pull/1975

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是“信任与可靠性”：一方面要求 Skill 来源可信（#492 命名空间冒充）、评测与触发机制可验证（#556/#1352/#1298），另一方面要求 Skill 本身精简、可复用、输出正确，而非功能数量扩张。**

*说明：PR 评论数字段在源数据中均为 `undefined`，本报告的 PR 排序不基于评论数；所有信息均来自所给材料，未作外部补充。*

---

# Claude Code 社区动态日报 · 2026-11-21

## 1. 今日速览

今日社区讨论几乎完全被**成本与用量失控**问题占据：v2.1.330 引入了面向企业组织账户的登录支持，但社区注意力集中在 Issue #38335（Max 计划额度异常快速耗尽，878 条评论、476 个赞）以及桌面端副作用会话导致的额度与系统稳定性问题上。同时，**长会话上下文连续性**成为最集中的一个功能诉求方向，围绕 compaction 丢信息的多个 Issue 持续活跃。

## 2. 版本发布

**v2.1.330**
- 新增对 Anthropic Enterprise Admin Console 管理组织的登录支持：执行 `claude auth login` 后，Claude Code 会应用该组织的设置，并使用其指定的云服务商或网关。
- 新增内置模块 `easel`，在被要求时可绘制图表，并在 MCP 指标结果下呈现。
- 链接: anthropics/claude-code Releases

## 3. 社区热点 Issues

1. **#38335 Max 计划会话额度自 2026-03-23 起异常快速耗尽（CLI）** — 标签 bug/area:cost/regression，878 评论、476 赞，是当前社区声量最大的问题，直接影响付费用户的可用性判断。链接: anthropics/claude-code Issue #38335
2. **#108238 桌面端嵌套副作用会话 + 父会话自动唤醒 + 每会话 MCP 服务 → 周额度约 1 天耗尽，并触发 macOS watchdog 内核崩溃** — 指出 side session 上线后的成本与稳定性回归，问题严重度高。链接: anthropics/claude-code Issue #108238
3. **#95364 桌面端“静默更新”在用户离开时退出并重启应用，导致所有 Remote Control 会话丢失** — 涉及 macOS 与 Remote Control 日常使用者的核心工作流。链接: anthropics/claude-code Issue #95364
4. **#70555 工作状态连续性：需在 compaction 与 /clear 后保留状态** — 描述长会话“越用越笨”（重复推导、遗忘进行中线程），是获得评论最多的功能类请求之一。链接: anthropics/claude-code Issue #70555
5. **#111493 长会话 compaction 静默丢弃关键需求且模型不告警（已造成生产事故）** — 与 #70555 同一痛点，但以 bug 形式提交，反映该问题已产生实际业务风险。链接: anthropics/claude-code Issue #111493
6. **#60082 单会话实时多人协作** — 希望实现类似 Google Docs / VS Code Live Share 的多账号共享会话，39 赞，说明团队协作场景需求真实存在。链接: anthropics/claude-code Issue #60082
7. **#109419 Windows 桌面端：离开后所有会话的 Remote Control 自动关闭，尽管已开启默认启用且禁用睡眠** — 与 #95364 一起构成 Remote Control 可靠性问题群。链接: anthropics/claude-code Issue #109419
8. **#110676 Cowork 远程会话（Windows）：≥4 MB 文件 device_stage_files 上传失败，随后 47 KB 文件也报 HTTP 503** — 新功能 Cowork 在文件传输上的可用性缺陷。链接: anthropics/claude-code Issue #110676
9. **#31992 跨机器会话恢复：同步会话状态以支持 CLI 到 CLI 交接** — 22 赞，反映多机开发者的连续工作流诉求。链接: anthropics/claude-code Issue #31992
10. **#88882 带 draft-07 的 MCP 工具被拒绝（macOS，有复现）** — MCP 生态兼容性问题，影响第三方工具接入。链接: anthropics/claude-code Issue #88882

> 其他值得留意：#91142（附加后台会话未启用鼠标跟踪，滚轮变方向键）、#107896（Claude in Chrome 在 Vivaldi 上标签组消失导致全部工具调用失败）、#101641（`-p --output-format stream-json` 提前退出导致慢速读取方丢失回复结尾）。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 仅 3 条，且均非新功能合并，以下如实列出：

1. **#41447 [OPEN] feat: open source claude code** — 请求开源 Claude Code 的长期 PR，引用多个相关 Issue（#59、#456、#2846、#22002、#41434）。链接: anthropics/claude-code PR #41447
2. **#111198 [CLOSED] 不要在来自 fork 的 pull request 上运行 @claude 提及** — 安全/成本相关的 CI 行为调整，已关闭。链接: anthropics/claude-code PR #111198
3. **#1 [CLOSED] Create SECURITY.md** — 创建安全策略文件，历史 PR，今日更新。链接: anthropics/claude-code PR #1

说明：本期数据中不存在 10 条可列举的重要 PR，未做补充或推测。

## 5. 功能需求趋势

- **长会话状态与记忆管理**：compaction / `/clear` 后保留工作状态（#70555、#111493）、允许 MCP 服务替换自动记忆后端（#48465）是需求最集中的方向。
- **会话的跨端、跨机与协作能力**：跨机器会话恢复（#31992）、单会话多人实时协作（#60082）、云端会话与本地会话双向通信（#109491，目前 `SendMessage` 单向）、桌面端项目双向语音对话（#108890）。
- **Remote Control 可靠性**：多份报告指向离开机器后 Remote Control 失效或会话被重启中断（#95364、#109419、#103373 中 `request_access` 无提示自动拒绝）。
- **成本可观测性**：插件 API `session.usage().rateLimits` 缺少 `/usage` 中的按模型周窗口（#101847），以及多处额度异常消耗报告，指向对用量透明度的需求。
- **MCP 与浏览器集成的兼容性**：draft-07 schema 被拒（#88882）、Chrome 扩展在 Vivaldi 上的标签组问题（#107896）。

## 6. 开发者关注点

- **额度与成本失控是首要痛点**：#38335 的高热度与 #108238 的额度+内核崩溃报告表明，用户对“费用/配额消耗不可预期”容忍度最低，且将回归归因于 side session 等新功能。
- **长会话可靠性**：compaction 静默丢失需求被视为可导致生产事故的缺陷，而非单纯体验问题；开发者期望有状态延续机制与显式告警。
- **Remote Control 在无人值守场景不可靠**：应用自动更新、设置未生效导致会话断开，直接破坏远程工作流。
- **新功能（Cowork、Chrome 扩展、Office 插件）存在明显质量缺口**：文件上传失败、标签组消失、插件安装后消失（#111275）等报告集中在近期新增集成上。
- **CLI/API 边界行为问题**：stream-json 输出未刷新即退出（#101641）、插件用量 API 与 `/usage` 口径不一致（#101847），影响自动化与工具链集成。
- **社区仍在推动开源**：#41447 虽为长期悬置请求，但仍持续活跃。

---
*注：本期 Releases 说明中 `easel` 条目原文在此处被截断（“under MCP metrics resu…”），以上仅按可见内容转述。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-21）

## 1. 今日速览

今日 Codex 仓库发布了 3 个 0.173.0-alpha 预发布版本（无更新说明），同时 TUI 体验相关 PR 批量合并：推理摘要默认改为自动、新增 `/config` 推理摘要选择器、并发推理摘要默认开启。社区侧，Windows Computer Use 显示边框残留问题以 80 条评论居首，多项 TUI 隐藏工具调用的需求已关闭落地。

## 2. 版本发布

- **rust-v0.173.0-alpha.4 / alpha.3 / alpha.2**：仅标注版本号，无具体更新说明，属于快速迭代的预发布序列。
  - https://github.com/openai/codex/releases

## 3. 社区热点 Issues（10 条）

1. **#57101 Windows Computer Use 截图后访问权限与金色/黄色显示边框未关闭**（OPEN，80 评论，👍13）— 今日评论最集中的问题，Windows 端 Computer Use 状态泄漏影响使用体验。
   https://github.com/openai/codex/issues/57101
2. **#18396 为 TUI 增加隐藏工具调用/输出能力**（CLOSED，26 评论，👍63）— 点赞数最高之一，长会话中工具调用单元格淹没对话，现已关闭，反映该需求已被接纳。
   https://github.com/openai/codex/issues/18396
3. **#21252 增加隐藏工具活动的 CLI 选项**（CLOSED，28 评论，👍47）— 与 #18396 同类需求，评论最多，说明 TUI 可读性是社区高共识痛点。
   https://github.com/openai/codex/issues/21252
4. **#29156 Desktop 自定义 provider 与已有对话、模型选择器不兼容**（OPEN，15 评论，👍42）— 自定义模型提供方在 Desktop 上的具体故障，影响第三方模型用户。
   https://github.com/openai/codex/issues/29156
5. **#25914 记录 app-server 客户端如何发现并接入活动 Desktop 线程**（OPEN，17 评论）— 外部工具集成缺少受支持的文档路径。
   https://github.com/openai/codex/issues/25914
6. **#6015 会话记录可自定义保留期**（OPEN，10 评论，👍20）— 当前历史无限保留，缺乏清理机制，涉及存储管理。
   https://github.com/openai/codex/issues/6015
7. **#8782 用户输入与 AI 输出的视觉区分不足**（OPEN，9 评论）— TUI 可读性细节，社区持续跟进。
   https://github.com/openai/codex/issues/8782
8. **#62918 Windows 新建 Work 会话无法发送首条消息，重启报“Connection for host ID local not found”**（OPEN，6 评论）— 当日新建的连接性故障，影响基本可用性。
   https://github.com/openai/codex/issues/62918
9. **#59592 macOS CLI `codex exec` 无法使用 ChatGPT Chrome 扩展**（OPEN，6 评论，👍5）— 脚本化运行与浏览器能力不一致。
   https://github.com/openai/codex/issues/59592
10. **#50920 Windows 取消的 turn-diff 快照在仓库中遗留 774 GiB `tmp_pack_*` 文件**（OPEN，4 评论）— 数据安全隐患，后果严重。
    https://github.com/openai/codex/issues/50920

补充：**#62442** GPT-6.2 Astra 未出现在 Desktop 用量明细中（OPEN，5 评论），涉及用量统计准确性。
https://github.com/openai/codex/issues/62442

## 4. 重要 PR 进展（10 条）

1. **#62904 TUI 默认使用自动推理摘要**（CLOSED）— 修正 TUI 未设置摘要时可能回退到 `concise` 的问题。
   https://github.com/openai/codex/pull/62904
2. **#62903 默认启用并发推理摘要**（CLOSED）— 将 `concurrent_reasoning_summaries` 标记为稳定并默认开启，请求时设置 `stream_options.reasoning_summary_delta`。
   https://github.com/openai/codex/pull/62903
3. **#62905 在 `/config` 中新增推理摘要选择器**（CLOSED）— 可选 Auto / Concise / Detailed / None，通过连接的 app server 保存。
   https://github.com/openai/codex/pull/62905
4. **#62906 在 `codex exec` 中清晰报告 HTTP MCP 启动问题**（CLOSED）— 避免底层传输错误污染 stderr 并泄露含凭据的端点 URL。
   https://github.com/openai/codex/pull/62906
5. **#62894 新增可选的 indexed 网络搜索默认值**（CLOSED）— 通过 `features.web_search_indexed_default` 在受限回合中用 `indexed` 替代隐式 `cached`。
   https://github.com/openai/codex/pull/62894
6. **#62893 扩展 HTTP 上 MCP 发现的旧版回退**（CLOSED）— 处理旧版服务器拒绝 `server/discover` 返回 HTTP 400 的情况。
   https://github.com/openai/codex/pull/62893
7. **#62896 允许模型目录设置初始协作指引**（CLOSED）— 新增可选 `collaboration` 字段，覆盖首次 Plan 之前的回合。
   https://github.com/openai/codex/pull/62896
8. **#62986 将 Agent Command Center 停靠到对话旁**（CLOSED）— 替代模态窗口，保留转录与草稿可见性。
   https://github.com/openai/codex/pull/62986
9. **#63013 支持 Orca 集成终端**（CLOSED）— 通过 `TERM_PROGRAM=Orca` 识别并在 `codex doctor` 中上报，链接按可点击标签渲染。
   https://github.com/openai/codex/pull/63013
10. **#62931 将 TUI 剪贴板复制转发到 Rex 客户端**（CLOSED）— 修复后接入的客户端收不到主机剪贴板更新的问题。
    https://github.com/openai/codex/pull/62931

## 5. 功能需求趋势

- **TUI 可读性与降噪**：#18396、#21252、#36845（final-answer-only / 安静转录模式）、#37227（Calm 模式）、#8782（输入/输出视觉区分）构成最强共识，今天多条已关闭，方向被确认。
- **自定义模型 provider 支持**：#29156、#36597（隔离的第三方 provider 路由）、#59323（Desktop 更新阻断使用其他 provider 的已有会话），Desktop 侧是主要短板。
- **app-server / 外部客户端集成**：#25914 要求可发现并接入活动线程的文档化路径。
- **浏览器与 Computer Use 能力一致性**：#57101、#59592、#58535（IAB owner 未注册/未恢复）反映不同变体与平台间行为不齐。
- **会话与存储管理**：#6015（留存期）、#50920（tmp 文件堆积）。
- **平台稳定性**：Windows（#61548、#62918）与 Linux 沙箱（#44680 NoNewPrivs 阻断 sudo）、macOS 权限（#55922）问题持续。

## 6. 开发者关注点

- **Windows 端稳定性最突出**：连接失败、发送禁用、Computer Use 边框残留、取消快照遗留巨量临时文件，问题覆盖面广。
- **Desktop 与 CLI 行为不一致**：自定义 provider、浏览器访问、推理设置在不同变体间表现不同，迁移与历史会话受影响。
- **可观测性与透明度不足**：用量明细缺模型（#62442）、MCP 启动错误需清晰报错并避免泄露凭据。
- **长会话体验**：工具调用与推理摘要大量占据转录，社区要求可配置的降噪与摘要控制，今日 PR 已部分响应。
- **权限与沙箱语义**：Full access 实际获得 workspace-write、继承 NoNewPrivs 阻断 sudo，说明权限边界仍存在问题。

*说明：以上内容严格依据所提供数据；版本发布无更新说明，未作推测。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-21）

## 1. 今日速览

今日发布 nightly 版本 v0.71.0，包含 Windows 路径解析与「恢复最近活跃会话」两项 CLI 修复。社区讨论高度集中在 **Agent / Subagent 的可靠性**上：最多评论的 Issue 均围绕 MAX_TURNS 被误报为成功、generalist agent 挂起、browser subagent 失败等行为异常。PR 侧则集中修复安全与稳定性问题（危险命令检测、粘贴内容泄密、超时重试、IME 输入丢字）。

## 2. 版本发布

**v0.71.0-nightly.20261121.geecccfcd5**

- `fix(cli)`：使用波浪号与反斜杠展开 Windows 用户主目录相对路径（PR #30376）
- `fix(cli)`：恢复「最近活跃」的会话，而非「最近启动」的会话（PR 片段未显示完整编号）

链接：https://github.com/google-gemini/gemini-cli/releases

## 3. 社区热点 Issues（10 条）

1. **#22323 [P1] Subagent 达到 MAX_TURNS 后仍被报告为 GOAL 成功**（14 评论，👍2）
   子代理在未完成分析时因回合上限中断，却返回 `status: "success"`，掩盖了中断事实。这会让自动化流程静默地忽略失败，属于高优先级 bug。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] Generalist agent 无限挂起**（8 评论，👍8）
   一旦委派给 generalist agent，即使是建文件夹这类简单操作也会永久挂起（用户等待长达一小时）。高赞数说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21968 [P2] Gemini 几乎不会主动使用 skills 和 sub-agents**（7 评论）
   除非显式指示，否则模型不会在相关场景下自行调用子代理。这直接削弱了多代理架构的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

4. **#19873 [P2] 通过零依赖 OS Sandbox 与执行后意图路由利用模型对 bash 的偏好**（9 评论）
   指出 Gemini 3 模型原生以 POSIX 工具链（grep/cat/sed/awk）工作，建议围绕该特性设计沙箱与工具路由。
   https://github.com/google-gemini/gemini-cli/issues/19873

5. **#22745 [P2] 评估 AST 感知的文件读取/搜索/映射**（7 评论）
   EPIC 议题，探索用 AST 精确读取方法边界、减少工具调用回合。后续 #22746 建议以 tilth 或 glyph 为起点改进 codebase_investigator。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 [P2] Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**（5 评论）
   AgentRegistry 正常加载配置，但 Browser Agent 完全绕过全局/项目级设置，配置系统一致性存疑。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 [P1] browser subagent 在 Wayland 下失败**（4 评论）
   Linux Wayland 环境的浏览器子代理不可用，属平台兼容性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 [P2] 工具数超过 128 时报 400 错误**（3 评论）
   议题描述中提到工具数超过 128 后触发 400。开发者期望 agent 能更智能地裁剪工具集。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 [P2] Agent 应阻止/劝阻破坏性行为**（3 评论，👍1）
   模型在 git 操作中会使用 `git reset` 或 `--force`，而存在更安全的替代方案。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#20079 [P2] `~/.gemini/agents/` 下的符号链接不被识别为 agent**（4 评论）
    通过 symlink 共享代理定义（常见于 dotfiles 管理）不可用。
    https://github.com/google-gemini/gemini-cli/issues/20079

## 4. 重要 PR 进展（10 条）

> 注：本期高关注度 PR 多为 CLOSED 状态，评论数字段在数据中未提供。

1. **#30308 [CLOSED]** `fix(cli)`：在 `resolvePath` 中展开 Windows `~\...` 路径，使 `policyPaths`、`adminPolicyPaths`、`includeDirectories`、`extensionRegistryURI` 正确基于 `homedir()` 解析。
   https://github.com/google-gemini/gemini-cli/pull/30308

2. **#30169 [CLOSED, P1, security]** `fix(cli)`：防止粘贴的 `@` 文本与模糊匹配将 SSH 私钥自动附加到模型请求。粘贴内容默认惰性处理。
   https://github.com/google-gemini/gemini-cli/pull/30169

3. **#30171 [CLOSED, P1]** `fix(core)`：无论参数顺序如何都识别递归/强制 `rm`（如 `rm -r -f x`、`rm x -rf`、`rm --recursive --force`）。
   https://github.com/google-gemini/gemini-cli/pull/30171

4. **#30174 [CLOSED]** `fix(core)`：阻止 body timeout 在模型长时间无流输出（如大 `write_file` 参数）时中止并重放回合，修复 #29747。
   https://github.com/google-gemini/gemini-cli/pull/30174

5. **#30178 [CLOSED]** `fix(cli)`：修复 IME 提交与 Enter 同 tick 到达时丢失最后个字符（如韩文 `테스트`→`테스`）。
   https://github.com/google-gemini/gemini-cli/pull/30178

6. **#30175 [CLOSED]** `fix(core)`：本地子代理对 `auto`、`flash`、`pro` 等所有模型值都应用其 `generateContentConfig`（temperature/topP/topK/thinkingConfig），修复 #30168。
   https://github.com/google-gemini/gemini-cli/pull/30175

7. **#30170 [CLOSED, P1]** `fix(core)`：模型调用停滞时本地子代理不再耗满 3 分钟 `maxTimeMinutes` 再加 60 秒恢复回合，新增单次调用超时，修复 #29257。
   https://github.com/google-gemini/gemini-cli/pull/30170

8. **#30172 [CLOSED, P2]** `fix(core)`：在会话记录与实时历史中保证每个 tool-call ID 只有一个结果，修复 #28004。
   https://github.com/google-gemini/gemini-cli/pull/30172

9. **#30173 [CLOSED, P3, security]** `fix(cli)`：在不受信任目录中也读取 `~/.gemini/.env`，解决 workspace 用户 `GOOGLE_CLOUD_PROJECT` 缺失导致的登录死循环，修复 #27114。
   https://github.com/google-gemini/gemini-cli/pull/30173

10. **#30273 [OPEN]** `fix(core)`：统一 `@google/gemini-cli-core` 的退出码映射，补齐 `exitCodes.ts` 中缺失的致命错误码并建立错误层级。
    https://github.com/google-gemini/gemini-cli/pull/30273
    另可关注 **#30268 [OPEN]**：让 shell taint / build-file 风险检查与 `PolicyEngine` 尊重已启用的 YOLO 模式。
    https://github.com/google-gemini/gemini-cli/pull/30268

## 5. 功能需求趋势

- **多代理架构行为优化**：最高频方向。包括子代理自主调用意愿低（#21968）、MAX_TURNS 结果误报（#22323）、generalist agent 挂起（#21409）、子代理轨迹可通过 `/chat share` 查看（#22598）、local subagent sprint（#20195）。指向「可观测性 + 可靠性」并重。
- **AST 感知的代码库理解**：#22745、#22746 组成一组探索，目标减少回合数、提高 codebase_investigator 精度。
- **Browser Agent 健壮性与平台兼容**：#22267（配置被忽略）、#22232（会话接管与锁恢复）、#21983（Wayland）。数据中可见 `agent/browser` 标签。
- **安全与破坏性操作防护**：#22672（阻止 `git reset --force`），与多个安全类 CLOSED PR 呼应。
- **Shell 优先的工具策略**：#19873 建议顺应模型原生 bash 习惯，配合沙箱化。
- **扩展生态**：#29840 反馈 GeminiCLI.com 扩展库索引新鲜度与 Cloady MCP 的收录。

## 6. 开发者关注点

- **静默失败与误报是最大痛点**：子代理超限被标为成功、generalist agent 永久挂起，二者都让开发者难以定位问题。
- **配置系统不一致**：`settings.json` 的覆盖在 Browser Agent 中不生效、`~/.gemini/agents/` 不识别符号链接，破坏了用户对配置的预期。
- **安全默认值受关注**：粘贴文本可能带出 SSH 私钥、危险 `rm` 变体漏检、`--force` 类破坏性命令，多条 P1 安全 PR 同批关闭，可见维护节奏。
- **跨平台体验**：Windows 路径展开（release 与 PR #30308）、Linux Wayland 浏览器子代理、韩文 IME 丢字，均为区域/平台细节问题。
- **长回合稳定性**：请求超时导致长推理被中断并重放（#30174），直接消耗 token 与时间。
- **工具集规模上限**：工具数超限触发 400 错误（#24246），MCP 生态扩张后将成为常见瓶颈。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-21）

## 1. 今日速览

今日共发布 3 个补丁版本（v1.0.115-3/-4/-5），集中在本地会话磁盘占用与恢复速度优化、插件初始化竞态修复，以及 Windows 子进程清理。社区方面，`web_fetch` 在 Surge Fake-IP 环境下的拒绝问题在上一轮关闭后于最新稳定版复现（#5544），同时出现一条安全级别极高的报告：Agent 在 WSL 中误执行 `rsync -a --delete` 清空用户磁盘（#5541）。

## 2. 版本发布

- **v1.0.115-5**
  - 改进：长时间运行的本地会话占用更少磁盘空间，恢复更快。
  - 修复：排队从指定模型切换到 Copilot Fusion 时，CLI 正确确认所请求的路由配置，而非显示上一配置。
- **v1.0.115-4**
  - 新增：在支持表单的 ACP 编辑器中启用结构化澄清提问。
  - 修复：解决插件初始化竞态导致新会话阻塞、已有会话无法恢复的问题。
  - 修复：Windows 下清理 Git 命令、hooks 与语言服务器检查产生的子进程。
- **v1.0.115-3**
  - 修复：@ 提及选择器在空搜索结束前保持可见，关闭后 Ctrl+Y 与 Tab 恢复默认行为。

## 3. 社区热点 Issues（精选 10 条）

1. **#5541 Agent 在 WSL 中执行 `rsync -a --delete` 清空用户磁盘**（OPEN，triage:needs-human）— 引用失败导致变量为空，`rsync` 将目标 `/` 清空且不可恢复；属于最高优先级的破坏性操作安全问题。链接: github/copilot-cli Issue #5541
2. **#3558 重复条目错误（CAPIError 400 websocket_error）**（CLOSED，8 👍，5 评论）— 模型/上下文内存相关的高赞问题，反映 WebSocket 调用链的 ID 去重缺陷。链接: github/copilot-cli Issue #3558
3. **#4805 会话因残留 `inuse.<pid>.lock` 永久不可恢复**（OPEN，更多信息待补充）— 崩溃宿主留下的锁在打开时不会被回收，会话数据实际完好却判定为不可恢复，影响可恢复性核心能力。链接: github/copilot-cli Issue #4805
4. **#5544 `web_fetch` 仍拒绝 Surge Fake-IP 解析的公网 URL（CLI 1.0.114）**（OPEN）— 原问题 #5180 已标记完成，但最新稳定版仍复现，验证与回归流程存在缺口。链接: github/copilot-cli Issue #5544
5. **#3192 `footer.showCustom=true` 时 `statusLine.command` 不执行**（OPEN，macOS）— 终端渲染与配置交互缺陷，长期未解决。链接: github/copilot-cli Issue #3192
6. **#5468 GitHub Mobile 与 github.com 远程控制失败（relay 连接挑战绑定错误）**（OPEN）— 会话可读但不可控，阻塞远程控制工作流。链接: github/copilot-cli Issue #5468
7. **#5543 子 Agent 无法多轮对话，`background` 模式被静默忽略**（OPEN）— 与 changelog 承诺不一致，Agent 编排能力受限。链接: github/copilot-cli Issue #5543
8. **#5542 Supabase MCP OAuth 状态探测因缺少 Mcp-Session-Id 返回 400**（OPEN）— 常规工具调用正常而状态探测失败，暴露 MCP 会话管理不一致。链接: github/copilot-cli Issue #5542
9. **#5540 未对 `taskSupport: "required"` 的工具发送 MCP Tasks 增强**（OPEN）— 初始化阶段宣称支持 MCP Tasks，实际调用被服务端拒绝。链接: github/copilot-cli Issue #5540
10. **#5547 `VERSION=prerelease` 安装比最新稳定版更旧的构建**（OPEN，triage）— `git ls-remote --sort version:refname` 的排序陷阱导致预发布安装回退。链接: github/copilot-cli Issue #5547

其他值得留意（已关闭，反映历史需求走向）：#1444 空 bash 参数导致无限循环（5000+ 次）、#2256 持久化白名单二进制权限、#1696 恢复会话时重新申请权限、#4874 嵌套会话中 `/exit` 的退出方式。

## 4. 重要 PR 进展

过去 24 小时内仅 3 条 PR 更新，如实列出：

1. **#5548 install: sort stable releases after their prereleases**（OPEN）— 修复 #5547，调整版本排序逻辑。链接: github/copilot-cli PR #5548
2. **#5310 Fix container smoke-test workspace permissions**（OPEN）— 临时工作区权限 `0700` 导致镜像运行用户无法访问，修复 amd64/arm64 冒烟测试失败。链接: github/copilot-cli PR #5310
3. **#1512 Updated Copilot CLI default model in readme**（CLOSED）— README 默认模型由 Sonnet 4.5 更新为 Sonnet 4.6。链接: github/copilot-cli PR #1512

> 说明：数据中仅 3 条 PR，无法凑足 10 条；以上为全部可用信息，不作补充推测。

## 5. 功能需求趋势

- **权限与审批 UX**：#2256、#1696、#5539、#5538 均指向同一方向——希望有持久化、用户级、跨会话的权限规则，减少重复确认与复杂的策略配置；浏览器扩展的审批流程也是延伸诉求。
- **会话可恢复性与生命周期**：#4805（锁未回收）、#4874（嵌套会话退出）、#1696（恢复后权限）、#5537（会话列表展示 AIC 消耗）构成完整会话管理需求簇。
- **MCP 生态兼容性**：#5540、#5542 连续暴露 MCP Tasks 增强与 OAuth 会话标识处理问题，说明 MCP 集成的协议一致性是新增长点。
- **子 Agent 编排**：#5543 指向多轮子 Agent 与后台模式的实际可用性。
- **网络环境适配**：#5180 / #5544（Fake-IP）、#5546（企业网络 TLS handshake_failure）反映受限网络中启动与抓取能力不足。
- **上下文管理**：#1682、#3558 关注上下文窗口管理与模型调用稳定性。
- **终端与 IDE 集成**：#3192（自定义状态栏）、#5541（WSL 跨 shell 调用）体现渲染与工具调用的平台差异问题。

## 6. 开发者关注点

- **破坏性命令的安全护栏缺失**：#5541 是最突出的痛点——空变量、引用失败可让 `rsync --delete` 直接作用于根目录，社区期待对此类操作有强制校验或确认机制。
- **“已修复”与实际不符**：#5544 在 #5180 被关闭后于最新稳定版复现，削弱对发布验证的信任；#5543 同样与 changelog 描述不一致。
- **恢复机制鲁棒性不足**：残留锁文件使完好会话不可用，恢复路径缺少自我修复。
- **远程控制链路故障**：#5468 显示 Mobile 与 Web 端 relay 连接层问题，影响本地会话的远程使用。
- **安装脚本边界情况**：#5547 属小而影响明确的分发质量问题，已快速配套 PR #5548。
- **Windows 与受限网络**：子进程清理、企业网络 TLS 与企业代理下的 `web_fetch` 是持续消耗调试成本的环境问题。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-21

## 1. 今日速览

今日无新版本发布。免费额度问题的主 Issue 持续高热（404 条评论），社区注意力集中在**桌面端模型选择器卡顿/递归冻结**（v2.3.2 回归）与**项目无法删除**两条产品体验线上；同时服务端 V8 堆 OOM 与本地 Ollama 挂起两类稳定性问题同日浮现。PR 侧则有 Google Antigravity provider 落地实现，回应了长期功能请求。

## 2. 版本发布

过去 24 小时无新 Release。社区讨论中已出现 v2.3.2、v2.2.5/2.2.6 等版本号相关的缺陷反馈，详见下文。

## 3. 社区热点 Issues

- **[#59387 免费额度问题主帖](https://github.com/anomalyco/opencode/issues/59387)**（404 评论，👍30）：Zen 免费层报错（"Free usage exceeded"等）的统一上报入口，热度远超其他条目，反映免费额度告警的普遍性与沟通成本。
- **[#65371 服务端 V8 堆 OOM](https://github.com/anomalyco/opencode/issues/65371)**（9 评论）：v2.3.2 开启 `warming: true` 时，回答生成中四次 SIGABRT 崩溃（同一天 17:13/17:38/18:01/18:33），属严重稳定性缺陷。
- **[#62529 ChatGPT 订阅共享限额误报](https://github.com/anomalyco/opencode/issues/62529)**（11 评论）：v2.2.5 上简单 "Hello" 即触发 `subscription_sharing_usage_limit_exceeded`，但用户套餐余量正常，质疑限额判定逻辑。
- **[#65138 模型选择器无限递归冻结](https://github.com/anomalyco/opencode/issues/65138)**（3 评论）：v2.3.0→2.3.2 回归，`zoomLevel != 1` 时悬停即 1–2 秒 UI 冻结，渲染日志反复报错，影响所有缩放非 100% 的 Windows 桌面用户。
- **[#64570 模型选择器卡顿](https://github.com/anomalyco/opencode/issues/64570)**（4 评论）：与上条同区域的性能问题——数据量极小（3 个 provider、41 个模型）却掉帧，属渲染层效率问题。
- **[#65367 本地 Ollama 下 `opencode run` 无限挂起](https://github.com/anomalyco/opencode/issues/65367)**（8 评论）：Windows 上无输出、不退出，而远程 HTTP 模型与 Ollama 原生 API 均正常，指向 CLI 与本地运行时集成。
- **[#64591 Windows 重启后会话标签丢失](https://github.com/anomalyco/opencode/issues/64591)**（5 评论）：冷重启后标签栏为空，会话数据完好但状态在 bundled server 注册前被剪除，属启动时序缺陷。
- **[#65378 / #28030 桌面端无法删除项目](https://github.com/anomalyco/opencode/issues/65378)**（3 评论；[#28030](https://github.com/anomalyco/opencode/issues/28030) 已关闭，18 评论）：同一诉求跨越 5 月与 11 月，用户只能手改配置绕过，体验缺口明显。
- **[#59603 自定义 provider 选项消失](https://github.com/anomalyco/opencode/issues/59603)**（9 评论）：v2.2.0 起 provider 列表不再提供自定义入口，影响接入非内置模型的工作流。
- **[#54180 拒绝工具调用被记为关机](https://github.com/anomalyco/opencode/issues/54180)**（6 评论，已复现）：拒绝权限请求后该轮次被记录为 server shutdown，重启后被错误恢复，涉及会话状态正确性。

## 4. 重要 PR 进展

- **[#65430 新增 Google Antigravity provider](https://github.com/anomalyco/opencode/pull/65430)**：实现 ACP 路线，直接回应功能请求 #28889。
- **[#65240 修复模型选择器小数缩放下的布局循环](https://github.com/anomalyco/opencode/pull/65240)**：针对 #65138 回归的定点修复，是今日最贴近用户痛点的 PR。
- **[#65426 TUI 首帧显示 worktree 分支](https://github.com/anomalyco/opencode/pull/65426)**：修复 #65424，`/worktrees` 选择后 footer 仅显示路径的问题。
- **[#65421 修复 Windows toast 淘汰逻辑](https://github.com/anomalyco/opencode/pull/65421)**：上限 40 条时正确关闭最旧通知，#65325 的后续修正。
- **[#65326 Windows toast 按钮直接应答权限请求](https://github.com/anomalyco/opencode/pull/65326)**：桌面端权限交互前移到系统通知层。
- **[#65429 工具调用名称在保存前统一解析](https://github.com/anomalyco/opencode/pull/65429)**：#65193 的后续重构，纠正 Code Mode 工具调用记录方式。
- **[#65382 CLI 流式输出 SSE](https://github.com/anomalyco/opencode/pull/65382)**：修复 `opencode api` 缓冲至 EOF 导致事件流无输出的问题（关闭 #55701）。
- **[#65427 配对机器进程支持输入与独立错误流](https://github.com/anomalyco/opencode/pull/65427)**：此前机器进程无输入、输出流混杂，扩展了远程执行能力。
- **[#65418 脚本文件变更按直接编辑方式分组](https://github.com/anomalyco/opencode/pull/65418)**：会话 UI 中脚本改动此前每条一张卡片，现统一归组。
- **[#65415 浏览器设置简体中文本地化](https://github.com/anomalyco/opencode/pull/65415)**：补齐设置页与站点导入对话框缺失的 zh-CN 标签（关联 #63756）。

另注：[#64784](https://github.com/anomalyco/opencode/pull/64784) 的 dev→production 提升已关闭，包含 Tidepool Alpha Free、Gemini 4 Neon 与 embedding models 相关文档。

## 5. 功能需求趋势

- **桌面端项目管理**：删除/移除项目是跨月反复出现的需求（#28030、#65378），说明 Desktop 的项目生命周期管理尚不完整。
- **更多模型与认证接入**：自定义 provider 入口缺失（#59603）、Google/Antigravity OAuth（#28889，已有 PR 实现），社区持续要求扩展模型接入面。
- **长会话可用性**：消息与选中文本置顶（#55195），针对长会话中关键回答难以回找的问题。
- **插件体系扩展**：让 `./gui-experimental` 插件在 Web App 中加载（#60976，👍14，本批中较高），并伴随插件列表冷启动竞态（#54654）。
- **本地模型 / 本地运行时**：Ollama 相关挂起（#65367）与本地 provider 自动压缩失败（#62778，已关闭）显示本地推理是活跃使用场景。

## 6. 开发者关注点

- **稳定性优先于新功能**：V8 堆 OOM、CLI 挂起、UI 冻结三类问题同日出现，且均发生在最新版本上，对日常使用影响直接。
- **v2.3.x 回归风险**：模型选择器问题明确标注为 v2.3.0→2.3.2 回归，提示近期发布需加强缩放/悬停等边界场景的回归测试。
- **限额与计费透明度**：免费层与 ChatGPT 订阅共享两类限额报错并存，用户难以自查原因，需更明确的错误说明与额度展示。
- **会话状态一致性**：拒绝工具调用被误记关机并恢复（#54180）、Windows 重启丢失标签（#64591），反映持久化与启动时序的可靠性短板。
- **冷启动竞态反复出现**：`plugin list` 首次调用为空被标注与 `mcp.list`、`skills` 同源（#54654），属系统性问题而非孤例。
- **跨平台细节欠打磨**：Windows toast、缩放渲染、Linux TUI 显示等问题集中在平台适配层。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-21

> 数据来源：github.com/badlogic/pi-mono（Issues/PR 链接沿原文指向 earendil-works/pi 对应编号）

## 1. 今日速览

今日无新版本发布，社区讨论集中在**上下文与压缩机制的成本控制**（搜索工具描述膨胀、压缩摘要逐次变长）与**多模型/多 provider 兼容性修复**（openai-codex 思考强度、Gemini 模型 ID 识别、Bedrock SSO 代理）。多条 P0 问题取得进展：Anthropic Team 席位登录失败标记 inprogress，openai-codex 思考强度问题当日新开。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#7885 [CLOSED] npm search 未索引新发布的 pi-packages**（18 评论，最热）
   新发布包无法通过 `npm search` 命中，导致 pi.dev/packages 画廊不展示。影响包分发生态的可发现性，社区讨论量最高，现已关闭。
   https://github.com/earendil-works/pi/issues/7885

2. **#8834 [CLOSED] [no-action] 可选包命名空间 pi.namespace**
   提议为 skills 与 prompt templates 引入统一命名空间字段，解决名称冲突。讨论活跃但被标记 no-action，说明方案方向被记录、暂不推进。
   https://github.com/earendil-works/pi/issues/8834

3. **#12318 [OPEN] [inprogress, prio:p0] Anthropic /login 在 Claude Team/Enterprise 席位失败（"Unknown scope"）**
   授权请求在同意页前即被拒绝，直接影响企业用户登录，P0 + inprogress，是当前最高优先级未决问题。
   https://github.com/earendil-works/pi/issues/12318

4. **#12165 [OPEN] searchTools() 返回完整工具描述，每次约 36KB、占长会话上下文约 25%**
   基于真实 3 天会话测量：73 次调用累计约 950KB。属性能/成本类实证反馈，指向工具描述裁剪或按需加载。
   https://github.com/earendil-works/pi/issues/12165

5. **#12242 [OPEN] 压缩摘要逐次膨胀（9 次压缩从 17k 增至 164k 字符）**
   第 9 次压缩耗时 588 秒、输出 75k tokens；另一台机器 5 次后达 88k。与 #12380 修复方向直接呼应。
   https://github.com/earendil-works/pi/issues/12242

6. **#12361 [OPEN] [prio:p0] openai-codex 1.6.0：GPT-6 系列 --thinking high/xhigh 推理反而减少**
   `reasoning.effort` 恒为 "medium"，源于 #12269 引入的 `compat.supportsMidConvoEffort: true`。影响多个 GPT-6 变体，属回归类 P0。
   https://github.com/earendil-works/pi/issues/12361

7. **#11127 [OPEN] 允许配置空闲缓存预热窗口**
   希望把 30 分钟默认值可配置为 60/120 分钟。与 prompt-cache TTL 直接相关，是长期的缓存成本优化诉求。
   https://github.com/earendil-works/pi/issues/11127

8. **#12206 [OPEN] [bug] openai-completions：finish_reason "error" 不自动重试**
   github-copilot（gemini-4-carbon）流式中途终止即结束回合。属流式稳定性问题。
   https://github.com/earendil-works/pi/issues/12206

9. **#12238 [OPEN] pi -p（headless）在 stdio MCP server 保持连接时不退出**
   pi 1.4.0 / macOS：已输出结果但进程挂起直到被杀；启动失败的 server 反而不会阻塞。影响脚本化与 CI 使用。
   https://github.com/earendil-works/pi/issues/12238

10. **#12166 [OPEN] [bug] 安装脚本误判已有安装**
    Ubuntu 上无关的 apt 包 `pi` 占据 `/usr/bin/pi`，安装器将其视为既有 Pi 安装并提供重装/卸载选项，存在误操作风险。
    https://github.com/earendil-works/pi/issues/12166

## 4. 重要 PR 进展

1. **#12380 [CLOSED] fix(durable)：按模型上下文窗口设定压缩摘要预算**
   输出预算由 `0.8 × reserveTokens` 改为 `max(1, min(10% × contextWindow, model.maxTokens))`，直接针对摘要膨胀问题。
   https://github.com/earendil-works/pi/pull/12380

2. **#12378 [CLOSED] fix(coding-agent)：post-usage 上下文编辑后保留基于 usage 的估算**
   修复仅因存在较新的 `context_edit`（即使仅是省略溢出失败消息）就丢弃 provider 实测 usage 估算的问题。
   https://github.com/earendil-works/pi/pull/12378

3. **#12366 [CLOSED] fix(ai)：createProvider 模型目录每次发布合并一次，而非每次读取**
   消除 `getModels()` 中逐模型 `findIndex` 导致的二次复杂度（关闭 #12311）。
   https://github.com/earendil-works/pi/pull/12366

4. **#12371 [CLOSED] fix(ai)：带前缀的 Google 模型 ID 支持 Gemini 3+ 检测，新增 compat.supportsStrictMode**
   使 `randomprefix-gemini-4-argon` 之类 ID 获得严格工具支持（关闭 #12321）。
   https://github.com/earendil-works/pi/pull/12371

5. **#12369 [OPEN] fix(coding-agent)：Windows 上通过环境变量传递 bash 命令**
   规避 Cygwin 运行时对引号参数的截断（8,186 字符），关闭 #12340。Windows 兼容性的关键修复，仍开放。
   https://github.com/earendil-works/pi/pull/12369

6. **#11889 [CLOSED] [inprogress] fix(coding-agent)：Windows 控制台关闭时执行清理**
   此前仅在 POSIX 监听 SIGHUP，Windows 缺少退出清理路径。
   https://github.com/earendil-works/pi/pull/11889

7. **#12365 [CLOSED] fix(ai)：Bedrock SSO 凭据走 HTTPS_PROXY**
   为 AWS SDK 默认链自建的 SSOClient/SSOOIDCClient 注入代理感知 HTTP handler。
   https://github.com/earendil-works/pi/pull/12365

8. **#12370 [CLOSED] fix(tui)：重复 prompt 移到编辑器历史前端而非重复插入**
   修复树导航重渲染时历史重复问题（Fixes #12279），为 #12280 的替代方案。
   https://github.com/earendil-works/pi/pull/12370

9. **#12280 [CLOSED] fix(coding-agent)：树导航不再把 prompt 重新加入历史**
   与 #12370 解决同一问题（/tree 选择器与 navigateTree 动作），两条 PR 均关闭，需关注最终采用实现。
   https://github.com/earendil-works/pi/pull/12280

10. **#12373 [CLOSED] Devin/1793920318 pi jobbench blended objective**
    无描述内容，信息不足，仅记录。
    https://github.com/earendil-works/pi/pull/12373

## 5. 功能需求趋势

- **上下文与 token 成本治理**：searchTools 结果膨胀（#12165）、压缩摘要变长（#12242）、空闲缓存预热窗口可配置（#11127）、压缩预算按上下文窗口计算（#12380）——是当日最集中的方向。
- **多 provider / 模型兼容**：Gemini 前缀 ID 识别与严格模式（#12321/#12371）、openai-codex 思考强度（#12361）、openai-completions 重试分类（#12206/#12169）、ant-ling 迁移至 Ling 3.x（#11999）、Bedrock SSO 代理（#12365）。
- **包生态与命名空间**：npm search 索引（#7885）与 `pi.namespace`（#8834）反映包可发现性与资源命名冲突诉求。
- **Windows 平台完备性**：控制台退出清理（#11889）、bash 参数传递（#12369）、安装脚本冲突（#12166）。
- **扩展/路由场景**：虚拟模型下 compaction.modelOverrides 被忽略（#12265），指向路由扩展与按模型配置的衔接。

## 6. 开发者关注点

- **长会话成本失控**：工具描述、压缩摘要、缓存预热三项都被实测证明显著占用上下文或延迟，开发者期待更细粒度、可配置的预算控制。
- **流式错误处理不一致**：SSE 中的 error code/finish_reason 未进入重试分类，导致偶发中断被当作正常结束，稳定性口碑受影响。
- **headless/CI 可用性**：`pi -p` 因 stdio MCP 连接而无法退出，阻碍自动化集成。
- **企业与大客户场景**：Claude Team/Enterprise 登录失败（P0）是当前最紧急的阻塞项。
- **TUI 输入健壮性**：ANSI 粘贴残留与未闭合 bracketed paste 导致编辑器卡死，Ctrl+C 失效（#11383），属体验硬伤。
- **安装与平台误判**：同名命令冲突、Windows 参数/信号差异，说明跨平台与分发环节仍需加固。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-21）

## 今日速览
今日发布 v0.28.3 正式版及 v0.28.1-preview.1、v0.28.0-nightly.20261120 两个预览/夜构建，均无已知破坏性变更。CI 稳定性仍是社区最大噪音源：Managed Agent gate、E2E、Desktop Checks 等主分支失败工单长期未关闭。同时 Web Shell 统一聊天界面、SDK Python 契约校验、会话续接标记等能力密集推进。

## 版本发布
- **v0.28.3**：正式版，无已知破坏性变更。变更列表含一项 web-shell 功能——从 composer chips 解释后台任务（[#17398](https://github.com/QwenLM/qwen-code/pull/17398)）。
- **v0.28.1-preview.1 / v0.28.0-nightly.20261120.19b31401f5**：预览与夜构建，主要内容为 managed-agent 全栈 E2E 观察真实定时 `/loop` 触发（[#17506](https://github.com/QwenLM/qwen-code/pull/17506)）及 verify-pr 加固修复。三项发布均标注 `qwen-release-notes` 自动生成，Highlights 以完整变更列表为准。

## 社区热点 Issues
1. **#14724** Managed Agent gate 主分支 CI 失败，无测试被识别——**518 条评论**，为当前最热工单，反映该门禁长期不稳定（[链接](https://github.com/QwenLM/qwen-code/issues/14724)）。
2. **#11680** E2E Tests 主分支 CI 失败——100 条评论，跨提交追踪，已积压两月余（[链接](https://github.com/QwenLM/qwen-code/issues/11680)）。
3. **#13078** 每日依赖 CVE 审计失败——58 条评论，涉及高危漏洞检测，安全性相关（[链接](https://github.com/QwenLM/qwen-code/issues/13078)）。
4. **#11678** Qwen Code CI 失败——52 条评论，Windows 测试作业报错，autofix 处理中（[链接](https://github.com/QwenLM/qwen-code/issues/11678)）。
5. **#17934** E2E：daemon 被 SIGKILL 后会话续接失败——25 条评论，暂定性质，关联 daemon 恢复能力（[链接](https://github.com/QwenLM/qwen-code/issues/17934)）。
6. **#17479** `qwen serve` 双缺陷：SSE 可耗尽监听器上限导致 /health 不可达，`--port` 静默重复启动 daemon——P1，生产实测（[链接](https://github.com/QwenLM/qwen-code/issues/17479)）。
7. **#15748** 子代理后台任务完成通知只到达顶层代理，导致多余会话甚至崩溃——核心体验痛点（[链接](https://github.com/QwenLM/qwen-code/issues/15748)）。
8. **#12597** 请求真正的"禁用自动压缩"开关——涉及 token 管理三档（warn/auto/hard）的显式控制，need-discussion（[链接](https://github.com/QwenLM/qwen-code/issues/12597)）。
9. **#18030** 在 workspace 与其 Git worktree 间共享项目自动记忆——worktree 各自独立记忆导致知识割裂（[链接](https://github.com/QwenLM/qwen-code/issues/18030)）。
10. **#17037** hz3 的 /tmp inode 耗尽，遗留 verify 工作树占 92% tmpfs——P1 基础设施问题，已关闭（[链接](https://github.com/QwenLM/qwen-code/issues/17037)）。

补充关注：#17039 将 Managed Agent gate 名称稳定化以设为必需检查，直指"失败可合并"的流程漏洞（[链接](https://github.com/QwenLM/qwen-code/issues/17039)）。

## 重要 PR 进展
1. **#17952** feat(web-shell)：新增契约驱动的 ChatSurface 聊天列，统一聊天界面迁移；后端中立组件完全由会话控制器视图模型渲染（[链接](https://github.com/QwenLM/qwen-code/pull/17952)）。
2. **#18044** feat(web-shell)：侧边栏标记需续接的会话——为末轮中断的会话加"Continue"徽章（[链接](https://github.com/QwenLM/qwen-code/pull/18044)）。
3. **#17976** fix(sdk-python)：校验可调用权限契约，按 SDK 实际传入的位置参数绑定回调（[链接](https://github.com/QwenLM/qwen-code/pull/17976)）。
4. **#17975** fix(sdk-python)：拒绝非有限与非法 timeout 对象，构造期校验（[链接](https://github.com/QwenLM/qwen-code/pull/17975)）。
5. **#17974** fix(sdk-python)：异步 prompt 源结束后保持输入开启，直到所有已提交轮次产出结果（[链接](https://github.com/QwenLM/qwen-code/pull/17974)）。
6. **#17994** fix(sdk)：将 prompt 输入失败传播给查询消费者，失败时关闭传输（[链接](https://github.com/QwenLM/qwen-code/pull/17994)）。
7. **#17979** perf(sdk)：以摊还线性时间排空缓冲消息，立即释放已消费载荷引用（[链接](https://github.com/QwenLM/qwen-code/pull/17979)）。
8. **#18036** docs：设计 local-daemon 模式下的工作区级制品库页面，只读，跨活跃/冷/归档会话列出制品（[链接](https://github.com/QwenLM/qwen-code/pull/18036)）。
9. **#17756** fix(core)：从撕裂前缀 JSONL 行中抢救完整后缀记录（[链接](https://github.com/QwenLM/qwen-code/pull/17756)）。
10. **#18031** test(integration)：稳定 teammate parity 辅助门禁，不改动被验证内容（[链接](https://github.com/QwenLM/qwen-code/pull/18031)）。

其他：#17903 以仓库变量门控 Teams 频道，暂缓其 npm 首发直到维护者完成一次性 bootstrap（[链接](https://github.com/QwenLM/qwen-code/pull/17903)）；#18040 强化 verify 暂存目录契约（[链接](https://github.com/QwenLM/qwen-code/pull/18040)）。

## 功能需求趋势
- **上下文与记忆管理**：禁用自动压缩（#12597）、worktree 间共享自动记忆（#18030）、持久化输出在 microcompaction 下的保护（#17337、#18043）——"记忆不丢失"是核心诉求。
- **Web Shell 统一聊天界面**：契约驱动渲染、会话续接提示、制品库页面，是当前产品化主线。
- **SDK 健壮性**：Python/通用 SDK 的权限、超时、流管理与错误传播连续多 PR，指向对外 API 契约收紧。
- **模型路由扩展**：#18039（已关闭）为未声明的 `gemini-4*` 模型补内置推理档位（low/medium/high，默认 high），CLI/ACP/Web Shell 共用。
- **MCP 与技能扩展**：MCP 热重载文档纠正（#16925）、PkgDiet 依赖护栏技能（#12572）。

## 开发者关注点
- **CI 可靠性成头号痛点**：Managed Agent gate、E2E、Desktop Checks 的主分支失败长期以机器人工单形式堆积，单条达数百评论，并出现"失败 PR 仍可合并"的流程漏洞（#17039）。基础设施侧还有 inode/tmpfs 耗尽（#17037）与 verify 工作树清理问题。
- **daemon 可达性**：SSE 耗尽监听器、端口重复启动（#17479）与 SIGKILL 后会话恢复（#17934）说明长驻服务模式仍需加固。
- **显式配置偏好**：用户希望关键行为（如自动压缩）可控、可关闭，而非隐式触发。
- **子代理通知语义**：后台任务完成通知的传播范围误伤顶层会话（#15748），暴露多代理协作的边界设计问题。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-21）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库实际指向 codewhale-hq/Codewhale）

## 1. 今日速览

今日无新版本发布，社区焦点集中在 **v0.10.3 的执行策略（execpolicy）沙箱加固**上——多位外部贡献者针对 `find -delete`、`awk/sed` 脚本载荷、`tmux` 执行动词等逃逸路径提交了系列修复。同时，TUI 层出现多个流式渲染与输入处理相关的缺陷（streamed delta 归位、reasoning card 溢出、粘贴截断），反映出 0.10.3 在 TUI 交互一致性上仍有较多待收敛问题。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

1. **#6970 [OPEN] Windows 下 `/undo` 命令出现严重 bug**（评论 8，v0.10.3）
   Windows 平台的 rollback 验收仍未关闭，源码与 macOS 路径已修复，仅剩 Windows 验收待办。是当前评论数最高的 issue，跨平台一致性风险明确。
   https://github.com/codewhale-hq/Codewhale/issues/6970

2. **#7279 [OPEN] 0.10.3 通过 ACP 将已安装 agent 作为 Codewhale 会话运行**（评论 7，tracking）
   围绕 Agent Client Protocol 的集成追踪 issue，目标是让 Claude Code、Codex、Kimi 等已安装 CLI 作为完整会话进入 Codewhale 侧栏与历史。标记 good first issue，是 0.10.3 的战略性方向。
   https://github.com/codewhale-hq/Codewhale/issues/7279

3. **#2323 [OPEN] 未适配中文输入法**（评论 7，👍1）
   中文 IME 输入拼音时提示语不隐藏、配置/危险确认界面输入异常。长期未解的本地化痛点，对中文用户可用性影响直接。
   https://github.com/codewhale-hq/Codewhale/issues/2323

4. **#7403 [OPEN] `PASTE_BURST_MAX_BYTES`（64 KiB）静默截断原始粘贴**（评论 2）
   非括号粘贴超过 64 KiB 时尾部被静默丢弃；PR #7398 让非 ASCII 字符走 burst buffer 后，大型 CJK 粘贴更易命中。中等严重度的数据丢失问题。
   https://github.com/codewhale-hq/Codewhale/issues/7403

5. **#7412 [OPEN] execpolicy 未将 `find -delete` 视为破坏性载荷**（评论 1）
   `-delete` 不带命令词即可删除匹配文件，对 `rm` 的 deny 规则无法覆盖等价删除。属于沙箱逃逸面，安全相关。
   https://github.com/codewhale-hq/Codewhale/issues/7412

6. **#7354 [OPEN] 会话准入锁在 fork 准备全过程持有，阻塞无关线程**（评论 1）
   按 turn id fork 会话时持有 manager 级 session admission guard，影响并发性能。核心并发正确性问题。
   https://github.com/codewhale-hq/Codewhale/issues/7354

7. **#7454 [OPEN] 活跃 reasoning card 在后续 tool card 之上持续增长**
   流式推理时思考内容出现在已运行命令之上，间歇复现。渲染层级/顺序缺陷，影响 TUI 可读性。
   https://github.com/codewhale-hq/Codewhale/issues/7454

8. **#7433 [OPEN] 提案：agent 工作前的 maintainer gate 及工作后的回归阶段**
   提议为行为变更建立准入协议，补齐贡献流程中的行为变更管控空白。流程治理类提案，涉及 CI 与核心。
   https://github.com/codewhale-hq/Codewhale/issues/7433

9. **#7344 [OPEN] GNOME Terminal 退出后背景仍保留 Nord 主题色**
   退出后终端 profile 未恢复原配色（背景变为 `#ECEFF4`）。Linux 平台体验缺陷，导致用户终端状态被污染。
   https://github.com/codewhale-hq/Codewhale/issues/7344

10. **#7435 [OPEN] PR review 的 task 文案与工具权限矛盾**
    per-pass `task` 文本声称"省略的调用方不会被检查"，但实际已提供 read/grep 工具。会误导评审模型的提示词一致性问题。
    https://github.com/codewhale-hq/Codewhale/issues/7435

## 4. 重要 PR 进展

1. **#7427 [CLOSED] execpolicy：对整词动态 flag/动词名 fail-closed**
   防止 `su $(echo -c) 'rm x'` 等运行时解析的整词绕过所有扫描器，改为失败关闭。安全加固关键项。
   https://github.com/codewhale-hq/Codewhale/pull/7427

2. **#7425 [CLOSED] execpolicy：建模 oc、vagrant、op、opam、helm 启动器**
   补齐未建模的执行启动器，避免 deny 规则被这些启动器绕过。
   https://github.com/codewhale-hq/Codewhale/pull/7425

3. **#7428 [CLOSED] execpolicy：建模更多 tmux 执行动词**
   覆盖 `display-popup`、`confirm-before`、`bind-key`、`source-file` 等可执行命令的动词。
   https://github.com/codewhale-hq/Codewhale/pull/7428

4. **#7430 [CLOSED] execpolicy：扫描静态 awk/sed 程序载荷**
   拦截 `awk 'BEGIN{system("rm x")}'`、`sed 's/a/rm x/e'` 这类藏在静态程序文本中的命令执行。
   https://github.com/codewhale-hq/Codewhale/pull/7430

5. **#7424 [CLOSED] execpolicy：在 nix 及启动器 flag 上传播动态位**
   修复 `nix develop -c$(echo rm) x` 中 flag 词被渲染为静态、导致载荷逃逸的问题。
   https://github.com/codewhale-hq/Codewhale/pull/7424

6. **#7429 [CLOSED] execpolicy：收紧 stdin_piped 传播与 numactl --strict**
   处理 `||` 与 `|` 的区分等六项发现，减少误判。
   https://github.com/codewhale-hq/Codewhale/pull/7429

7. **#7452 [OPEN] fix(tui)：将流式 delta 保留在其自身类型所属的 cell 中**
   修复思考流中途打开文本块后思考 delta 错位的问题，对应 #7454 类渲染缺陷。
   https://github.com/codewhale-hq/Codewhale/pull/7452

8. **#7445 [OPEN] feat(ci)：新增 maintainer gate 与回归阶段（#7433）**
   实现提案协议：Agent 任务表单不再自行应用 `agent-ready`，工作后增加回归阶段。
   https://github.com/codewhale-hq/Codewhale/pull/7445

9. **#7444 [CLOSED] test(tui)：守护全部四个 paste-burst chunk-flush 站点**
   补齐 #7403 指出的测试缺口，确保单个 chunk 检查缺失也能被捕获。
   https://github.com/codewhale-hq/Codewhale/pull/7444

10. **#7447 [OPEN] chore(catalog)：刷新 Models.dev 离线种子**
    由定时任务自动生成，新增厂商白名单模型，合并后将发布到公开 /models 页面（行标记为未审核）。
    https://github.com/codewhale-hq/Codewhale/pull/7447

## 5. 功能需求趋势

- **沙箱与执行策略加固**：今日最集中的方向。围绕 execpolicy 的启动器建模、动态词逃逸、静态脚本载荷、`find -delete` 等，形成系统性安全收敛（#7401、#7408、#7411、#7412、#7413、#7415、#7416 及对应 PR 系列）。
- **ACP / 多 agent 会话集成**：#7279 推动将 Claude Code、Codex、Kimi 等外部 agent 作为统一会话接入，是 0.10.3 的产品重心。
- **TUI 交互与流式渲染一致性**：streamed delta 归位（#7452）、reasoning card 层级（#7454）、Enter 双闸门（#7414）等多处修复，指向流式 UI 的稳定性需求。
- **本地化 / 输入法适配**：#2323 中文 IME 长期未解，反映 CJK 输入场景支持不足。
- **终端兼容性**：DEC 2026 同步更新、GNOME Terminal 配色恢复等终端行为适配需求（#7343、#7344）。
- **性能与并发**：#7446 跨进程 item 索引缓存、#7354 会话准入锁持有范围，指向大规模对话数据下的性能诉求。
- **贡献流程治理**：#7433/#7445 提出 maintainer gate 与回归阶段，体现对 agent 参与开发的行为管控需求。

## 6. 开发者关注点

- **安全边界是高频焦点**：多位外部贡献者（如 NieZhuZhu）集中提交 execpolicy 修复，开发者明显关注 deny 规则能否被 `find -delete`、`awk/sed`、未建模启动器、动态 flag 等绕过，要求 fail-closed 而非 fail-open。
- **Windows 平台欠账**：#6970 的 `/undo` 验收与 Windows 相关 issue 反复出现，跨平台一致性是持续痛点。
- **中文用户可用性**：#2323 与 #7403（大型 CJK 粘贴截断）共同指向非 ASCII 输入场景处理不足。
- **数据静默丢失不可接受**：粘贴截断（#7403）被明确视为需优先修复的静默失败。
- **并发与性能正确性**：#7354 的锁范围问题表明开发者关心 fork/undo/retry 路径对全局会话管理的影响。
- **提示词与工具权限一致性**：#7435 反映 review task 文案与实际工具集不符，开发者重视模型提示的可信度。
- **流程自动化治理**：对 agent 参与代码变更的准入与回归机制有明确诉求（#7433/#7445）。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*