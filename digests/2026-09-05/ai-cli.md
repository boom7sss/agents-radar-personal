# AI CLI 工具社区动态日报 2026-09-05

> 生成时间: 2026-09-05 10:55 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 — 2026-09-05

## 1. 生态全景

当前 AI CLI 工具生态正处于**密集迭代与稳定性阵痛并行**的阶段。头部工具（Claude Code、Codex、Gemini CLI）均保持高频发版节奏，但社区反馈集中暴露了**桌面端/Windows 平台稳定性不足**、**计费与用量透明度缺失**、**多代理工作流可靠性存疑**三大共性问题。与此同时，**GPT-6-Astra / Fable 5 等新一代模型的接入**成为各工具当前的主线任务，带动了模型选择器、推理力度控制、多模型回退等外围功能的密集开发。新模型"智能提升但自主完成率下降"的初步反馈（Codex #42937）值得密切关注。整体来看，生态正从"功能堆叠期"过渡到"稳定性与信任建设期"。

## 2. 各工具活跃度对比

> 注：数据口径为 2026-09-05 当日快照中各工具日报所覆盖的热点/全部 Issues 与 PR 样本，非仓库全量。

| 工具 | 今日 Issues（样本） | 今日 PR（样本） | Release 情况 | 社区热点密度 | 高频问题类型 |
|---|---|---|---|---|---|
| **Claude Code** | 50（全量） | 1（活跃） | v2.1.261 | 高 | Windows 桌面崩溃、计费透明度、子代理恢复 |
| **OpenAI Codex** | 10（Top） | 10 | rust-v0.153.3 / v0.153.4 | 高 | Windows 平台 Bug、远程会话同步、模型可靠性 |
| **Gemini CLI** | 10（Top） | 10 | v0.60.0-nightly.20260905 | 中高 | 子代理可靠性（挂起/误报）、安全检查加固 |
| **GitHub Copilot CLI** | 10（Top） | 0（近 24h） | v1.0.84-1 / v1.0.84-0 / v1.0.83 | 中高 | ACP 权限回归、自动更新破坏、MCP 兼容性 |
| **OpenCode** | 10（Top） | 10 | v1.18.29 / v1.18.28 | 高 | v2 回归（URL/配置/会话头）、用量统计 |
| **Pi** | 10（Top） | 10 | 无（0.85.0 有打包缺陷） | 中 | 发布质量、TUI 交互、OpenAI 兼容层容错 |
| **Qwen Code** | 10（Top） | 10 | v0.23.0-nightly.20260905 | 中 | 导出体积、CI 可靠性、cron 静默执行 |
| **Kimi Code CLI** | 2 | 1 | — | 低 | IDE 扩展渲染丢字、第三方接入文档 |
| **Codewhale (DeepSeek TUI)** | 10 | 10 | v0.9.12（正式版） | 中 | ACP 协议完整度、本地模型上下文管理 |

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **模型切换与推理控制** | Copilot CLI（#2904，👍23）、Gemini CLI（#21968）、Qwen Code（#10999）、Claude Code（#73423） | 按 Agent 粒度配置推理力度（reasoning effort）；自定义 Agent 可声明多模型并按序回退；新模型在模型选择器中的可见性与可用性状态需准确 |
| **多代理/子代理可靠性** | Gemini CLI（#22323、#21409）、Claude Code（#92016）、Codex（#40037） | 子代理轮次耗尽后的状态误报修复；子代理挂起与超时恢复；多 Agent 图中父子会话的上下文与状态传递 |
| **沙箱与权限边界治理** | Copilot CLI（ACP 权限回归 #4537）、Gemini CLI（MCP 策略 #29200、NTFS 短名 #29116）、Claude Code（安全规则误伤 #79392）、Qwen Code（Windows O_NOFOLLOW 失效 #8227） | 沙箱策略需在安全与不误伤合法开发之间取得平衡；策略判定需确定性与可解释性，而非依赖模型主观判断 |
| **计费与用量透明度** | Claude Code（#67506、#77222、#79671）、Codex（#42660）、OpenCode（#46365、免费配额 #15585）、Pi（#8760） | 拒绝无确认扣费；用量统计口径需与实际消耗一致；订阅与 Credits 判定不应错乱；免费/限额状态需可预期 |
| **桌面端/Windows 平台稳定性** | Claude Code（#80444、#73107）、Codex（#25178、#41290、#41874）、Copilot CLI（#4728）、Pi（#6300）、Qwen Code（#8227）、OpenCode（#47462） | GPU 进程崩溃致应用不可用、升级后无法启动、历史会话丢失、输入渲染异常等阻断性问题亟待解决 |
| **会话持久化与生命周期健壮性** | Copilot CLI（#4726、#1857）、Pi（#9179）、Gemini CLI（#29194）、OpenCode（#29175） | 压缩/恢复/并发操作中的竞态保护；入队消息可取消；畸形 checkpoint 的优雅降级而非崩溃 |
| **第三方提供商兼容性** | Qwen Code（Cerebras 400 #11045）、Pi（#8760、#8720）、Kimi Code CLI（#1210） | OpenAI 兼容层需过滤推理字段、校验参数上限；对空白工具输出的容错；跨 Agent 接入需文档与简化配置 |

## 4. 差异化定位分析

| 工具 | 定位 | 目标用户 | 核心竞品维度 | 当前阶段特征 |
|---|---|---|---|---|
| **Claude Code** | 全功能 Agent 平台（CLI + 桌面版） | 专业开发者、企业团队 | 功能完整度最高，桌面版为差异化壁垒 | 桌面版引流的代价是稳定性口碑受损；企业治理需求上升 |
| **OpenAI Codex** | OpenAI 模型原生的 Coding Agent | OpenAI 生态用户、ChatGPT 深度用户 | 模型能力（GPT-6-Astra）+ 跨端（移动/桌面）同步 | Windows 平台 Bug 密度最高；Remote 会话一致性是短板 |
| **Gemini CLI** | Google 模型原生的安全优先 Agent | Google 生态开发者、企业安全敏感用户 | 安全加固深度（MCP 策略、路径防护、prompt 注入防御） | 子代理可靠性是当前最大信任危机 |
| **Copilot CLI** | GitHub 生态的辅助编程代理 | GitHub 深度用户、VS Code 用户 | GitHub 生态集成（ACP、任务栏、MCP OAuth） | 发版频率高但回归问题同步增加；权限系统信任度承压 |
| **OpenCode** | 开源可自托管的产物级 Agent | 开源社区、希望控制数据主权的团队 | 开放性与可迁移性（兼容 Claude Code 生态） | v2 密集迭代期，迁移阵痛明显但修复响应快 |
| **Pi** | 开源 TUI 优先的编码 Agent | 追求轻量与终端体验的开发者 | TUI 交互质感、多提供商灵活接入 | 发布质量出现信任危机；TUI 打磨进入深水区 |
| **Qwen Code** | 阿里模型生态的编码 Agent | Qwen 模型用户、VS Code 生态 | Web Shell 平台化收敛、本地/云混合部署 | CI 治理问题拖累交付节奏；Web Shell 正成为交互中枢 |
| **Kimi Code CLI** | Moonshot 模型的轻量 CLI | Kimi 模型用户、第三方 Agent 使用者 | 轻量性、模型体验外延 | 样本量最小，处于生态建设早期 |
| **Codewhale (DeepSeek TUI)** | 从 DeepSeek TUI 转型的独立产品 | 原 DeepSeek-TUI 用户、本地模型爱好者、中文开发者 | 本地/离线模型支持、ACP 协议实现、中文文档 | 品牌转型期（deepseek-tui 弃用）；v0.9.12 正式版发布 |

**技术路线差异**：Claude Code、Codex、Copilot CLI 走"官方绑定模型 + 桌面端重投入"路线；Gemini CLI 偏"模型 + 安全架构深度整合"；OpenCode、Pi、Codewhale 走开源路线，强调多提供商灵活接入与生态兼容（Claude Code 生态兼容是后发工具的切入策略）；Qwen Code、Kimi Code 以自家模型为核心但开放第三方接入。

## 5. 社区热度与成熟度评估

| 工具 | 社区热度 | 活跃度特征 | 成熟度信号 |
|---|---|---|---|
| **Claude Code** | 最高 | 单 Issue 达 109 条评论、持续两个月未解决仍居榜首；50 条 Issue 样本覆盖功能需求、计费、桌面端、企业治理全谱系 | 功能最丰富但历史上最久的桌面端 GPU 崩溃未获解决（#80444），说明问题复杂度已达平台层而非 CLI 修复可及 |
| **OpenCode** | 高 | v2 相关 bug 密集上报 + 当日关闭与修复 PR 同步出现，迭代速度极快 | 处于从 v1 到 v2 的架构迁移阵痛期，修复响应快（当日 Issue 当日多已有 PR）但稳定性波动大 |
| **OpenAI Codex** | 高 | Windows 专项问题占 Top 10 一半；异步问题系统 TUI 集成链 48 小时内 5 个 PR 合入，开发现场活跃 | 功能开发节奏快（Astra 集成主线清晰），但 Windows 桌面端是明显短板 |
| **Gemini CLI** | 中高 | P1 级子代理问题开放近半年仍在标记 *need-retesting*；PR 侧安全加固持续深化 | 工程规范性好（安全 PR 成体系），但核心可靠性问题解决周期偏长 |
| **Copilot CLI** | 中高 | 一周三个版本高发版，但 MCP 兼容性回归引发多个独立 Issue，权限系统信任度承压 | 发布频率高于稳定性把控；依赖 GitHub 生态集成但 MCP 握手迁移带来阵痛 |
| **Qwen Code** | 中 | CI 治理类 Issue 占比高（合并队列停摆两个月）；导出体积优化主线推进中 | 工程基建质量问题（CI 红灯、合并队列阻塞）正在消耗社区信任；贡献者以核心成员为主 |
| **Codewhale** | 中 | 正式版 v0.9.12 发布，Issue 关闭速度快（多数 1-2 天内关闭） | 处于品牌与产品转型期，维护者响应迅速；CI 基础设施问题（发布超时致产物丢失）反映快速扩张期的工程债 |
| **Pi** | 中 | TUI 交互类 PR 密度最高（6 个），功能需求（Bedrock Mantle）有明确排期信号 | 基础功能稳定后社区开始聚焦交互质感的打磨；发布质量缺口（0.85.0 新装即坏）是近期信任危机 |
| **Kimi Code CLI** | 低 | 当日仅 2 个 Issue、1 个 PR，但问题定位清晰（VS Code 扩展渲染层 bug 已确认非模型问题） | 生态处于早期，社区规模有限；文档与第三方接入体验是当前主要诉求 |

**综合判断**：
- **最成熟/社区规模最大**：Claude Code 和 OpenAI Codex — 问题谱系最广，覆盖企业治理、计费、桌面端等"规模用户才能碰到的问题"。
- **快速迭代但稳定性波动最大**：Copilot CLI 和 OpenCode — 前者发版频率最高但回归频发；后者处于 v2 架构迁移期。
- **小而精的追赶者**：Codewhale、Kimi Code CLI — 修复响应快，但社区规模仍处于早期。
- **值得警惕的信号**：Gemini CLI 和 Qwen Code 的 P1 级问题（子代理挂起半年、CI 停摆两月）长期悬而未决，可能正在侵蚀开发者的信任基础。

## 6. 值得关注的趋势信号

**面向开发者的参考建议**：

1. **Windows 平台问题正在成为全行业的系统性质短板**。Claude Code（GPU 崩溃 109 评论未解决）、Codex（Top 10 占半）、Pi（输入逐字重绘两月未修）、Qwen Code（文件路径边界）均在此失分。**若你的主力开发环境是 Windows，当前阶段建议对新工具保持"先验证后全量采用"的策略**，重点测试：安装/升级路径、长会话稳定性、文件系统操作。

2. **新一代模型（GPT-6-Astra、Fable 5）的"智能提升但可靠性下降"初现端倪**（Codex #42937）。新模型接入初期往往伴随推理字段兼容（Qwen Code Cerebras 400）、模型选择器显示错乱（Claude Code #73423）、自主完成率波动等问题。**生产环境建议锁定已充分验证的模型版本，新模型先在预发环境评估自主完成率与成本特征后再切换**。

3. **费用透明度正成为开发者最敏感的信任指标**。本周多家工具的计费类问题集中爆发：/ultrareview 无确认扣费（Claude Code）、订阅与 Credits 判定错乱（Claude Code、Codex）、用量统计口径不一致（OpenCode）、配额耗尽无活动却扣减（Codex）。**凡是涉及费用/配额的操作，优先选择有明确预估与确认机制的工具**。

4. **多代理/子代理工作流的可靠性是当前最大信任缺口**。MAX_TURNS 误报成功（Gemini CLI）、子代理挂起（Gemini CLI）、SendMessage 被拒致恢复失败（Claude Code）、入队消息无法取消（Copilot）——**当前阶段不要把关键任务的最终结果完全托付给子代理自动执行，对涉及写操作或计费的任务保持人工审批环节**。

5. **ACP（Agent Client Protocol）正成为编辑器生态集成的事实标准**。Codewhale 和 Copilot CLI 均在积极补齐 ACP 会话管理、配置暴露能力；Codex、Gemini CLI 的异步问题系统也在对齐类似交互模式。**这一方向说明"编辑器内 Agent 工作流"即将迎来互操作性拐点，值得提前布局**。

6. **沙箱/安全策略的误伤率正在上升**。从 Copilot CLI 的 ACP 权限回归到 Gemini CLI 的 MCP 策略 fail-closed 化，再到 Claude Code/Qwen Code 的安全规则误伤合法开发与符号链接路径拦截——**安全策略的收紧趋势确定，但实现粗糙会在日常开发中频繁打断工作流**。评估工具时建议实测安全策略对自身工作流（含自定义脚本、本地服务、符号链接项目）的干扰率。

7. **MCP 生态正在经历兼容性阵痛**。Copilot CLI 的 MCP 握手迁移（v1.0.81 前后）引发多起独立兼容性 Issue（chroma-mcp、工具列表刷新超时永久丢失工具）、Gemini CLI 在推进 MCP 策略一致性、Claude Code 在收紧外部工具输出溯源——**MCP 仍处于"野蛮生长后的规范化"阶段，依赖特定 MCP 服务器的团队需关注上游工具版本变更带来的破坏性更新**。

8. **导出与可观测性：数据完整性成为新的信任维度**。Pi 的 HTML 导出静默丢弃模型实际见过的上下文（#8896）、Qwen Code 的空会话导出仍达 19.5 MB、Copilot CLI 的 OTel 恢复轮次缺失输入消息（#4726）——**"Agent 实际做了什么、看到了什么"的可审计性正在成为企业级用户评估工具的关键维度**。这将是下一阶段差异化竞争的方向之一。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截至 2026-09-05）

## 1. 热门 Skills 排行

按关注度（评论、Issue 引用及讨论深度）排序，以下 Skill 动态最值得关注：

**① skill-creator 修复（PR #1298 / #1099 / #1050）**
- 社区最集中的 bug 修复战线。核心问题：`run_eval.py` 在所有查询下报告 `recall=0%`（Issue #556，10+ 独立复现），且 Windows 平台存在子进程管道读取崩溃与编码问题。多个 PR 从不同角度修复（安装 eval artifact、修复 subprocess、修复 YAML 解析告警）。
- 状态：全部 Open（#1298、#1099、#1050，以及 #539）
- [PR #1298](https://github.com/anthropics/skills/pull/1298) | [PR #1099](https://github.com/anthropics/skills/pull/1099) | [PR #1050](https://github.com/anthropics/skills/pull/1050)

**② document-typography（PR #514）**
- 针对 AI 生成文档的排版质量控制：孤行断词（1-6 个词溢出到下一行）、页末孤立段落标题、编号错位。直接回应 AI 文档生成的核心痛点。
- 状态：Open
- [PR #514](https://github.com/anthropics/skills/pull/514)

**③ servicenow（PR #568）**
- 宽带 ServiceNow 平台助手，覆盖 ITSM、ITOM、ITAM/SAM Pro、FSM、HRSD/CSM、SPM、CSDM 及 IntegrationHub。从窄脚本助手升级为平台级辅助，被讨论为 Skill 设计从"窄"转"宽"的分歧样本。
- 状态：Open（更新持续至 2026-08-12）
- [PR #568](https://github.com/anthropics/skills/pull/568)

**④ Hivemind（PR #1628）**
- 零成本多代理编排：Claude Code 保持唯一规划者/审查者/合并者，将机械工作委派给跑在免费模型上的无头 opencode worker。回应"昂贵模型不做机械活"的成本诉求。
- 状态：Open（2026-08-21 创建，持续更新中）
- [PR #1628](https://github.com/anthropics/skills/pull/1628)

**⑤ claude-api 模型退役更新（PR #1607）**
- 修正已退役模型 ID（claude-opus-4-1、claude-sonnet-4-0 等）仍在 "Legacy Models (still active)" 列表中的错误（修复 Issue #1603）。同类问题还有 Issue #1487——claude-api skill 单次注入约 15.6 万 tokens 耗尽上下文窗口。
- 状态：Open
- [PR #1607](https://github.com/anthropics/skills/pull/1607) | [Issue #1487](https://github.com/anthropics/skills/issues/1487)

**⑥ self-audit（PR #1367）**
- 交付前审计 Skill：先做机械化文件校验，再按损害严重度优先级做四维推理审计。通用性设计——适配任意项目、技术栈与模型。
- 状态：Open
- [PR #1367](https://github.com/anthropics/skills/pull/1367)

**⑦ pyxel（PR #525）+ ODT（PR #486）+ testing-patterns（PR #723）+ scnet-hpc（PR #1615）**
- 细分领域补充：pyxel（复古游戏开发，基于 pyxel-mcp，作者 kitao 持续更新至 07-15）；ODT（OpenDocument 创建/模板填充/转 HTML）；testing-patterns（完整测试栈：Testing Trophy 模型、AAA 模式、单元/集成测试）；scnet-hpc（HPC 集群的 SSH+Slurm 配置文件化操作）。
- 状态：均 Open
- [PR #525](https://github.com/anthropics/skills/pull/525) | [PR #486](https://github.com/anthropics/skills/pull/486) | [PR #723](https://github.com/anthropics/skills/pull/723) | [PR #1615](https://github.com/anthropics/skills/pull/1615)

---

## 2. 社区需求趋势

**① Trust / 安全边界（最高优先）**
- Issue #492（43 评论）：社区 Skills 在 `anthropic/` 命名空间下分发，冒充官方 Anthropic Skills，构成信任边界滥用——用户可能授予社区 Skill 过高权限。这是评论量最大的 Issue，直接瞄准 Skills 分发的信任模型。

**② 组织级 Skill 共享**
- Issue #228（16 评论）：当前组织内分享 Skill 需手动下载 .skill 文件、通过 Slack/Teams 发送、同事再手动导航到 Settings > Capabilities 上传。急需共享 Skill 库或直接分发机制。

**③ 工具链可靠性修复**
- Issue #556（12 评论）：`skill-creator` 的 `run_eval.py` 在所有查询下 0% 触发率，使优化循环永远报告 `precision=100% recall=0%`。
- Issue #1390：mcp-builder 的 `evaluation.py` 对任何真实 MCP 服务器都打 0/N——TextContent 不可 JSON 序列化，被吞成伪造的工具错误。
- Issue #1362：web-artifacts-builder 在 pnpm ≥10.1 下 bundle/init 脚本失败。

**④ 上下文窗口管理**
- Issue #1487：claude-api skill 一次调用注入 ~156k tokens 耗尽上下文窗口。
- Issue #1175（CLOSED）：处理 SharePoint Online 文档时的安全与上下文窗口双重担忧。

**⑤ 重复 / 去重**
- Issue #189（👍9）：document-skills 和 example-skills 插件安装时内容相同，在 Claude Code 上下文窗口造成重复 Skills。

**⑥ 新功能提案（质量门、记忆压缩）**
- Issue #1385：推理质量门流水线（任务前校准 → 对抗性审查 → 交付验证），与 PR #1367（self-audit）高度呼应。
- Issue #1329：compact-memory——用符号标记压缩长时运行 agent 的上下文状态。

---

## 3. 高潜力待合并 Skills（Open 状态，讨论活跃）

| Skill | 功能 | 热度信号 | 链接 |
|---|---|---|---|
| **document-typography** | AI 生成文档的排版质量门（孤行、孤段、编号错位） | 创建后 9 天内持续更新，直击 AI 文档硬伤 | [PR #514](https://github.com/anthropics/skills/pull/514) |
| **Hivemind** | 免费模型 worker 做机械活，Claude Code 只做规划与审查 | Demo 型低成本编排方案，诉求明确 | [PR #1628](https://github.com/anthropics/skills/pull/1628) |
| **self-audit** | 交付前机械化校验 + 四维推理审计门 | 与 Issue #1385 提案呼应，形成提案-实现闭环 | [PR #1367](https://github.com/anthropics/skills/pull/1367) |
| **testing-patterns** | 完整测试栈模式库（Trophy 模型、AAA、命名） | 覆盖测试全栈，模板化复制价值高 | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **skill-quality-analyzer / skill-security-analyzer** | 元 Skills：质量五维评估 + 安全分析 | 回应社区对 Skill 本身质量的诉求 | [PR #83](https://github.com/anthropics/skills/pull/83) |
| **servicenow** | 平台级 ServiceNow 助手（ITSM→SPM 全覆盖） | 长周期维护（03-08 至 08-12 仍在更新） | [PR #568](https://github.com/anthropics/skills/pull/568) |

skill-creator 系列修复 PR（#1298/#1099/#1050/#539）虽非新功能，但修复的是整个共创流程最大的堵点（eval 信号不可信 + Windows 不可用），合并优先级可能最高。

---

## 4. Skills 生态洞察

**一句话总结：社区最集中的诉求是信任与质量——既要防住 `anthropic/` 命名空间下的信任边界滥用与上下文窗口耗尽（安全/资源信任），也要修好 skill-creator 自身的评估、跨平台与去重可靠性（工具信任），同时持续投喂文档排版素质（document-typography）与交付前审计（self-audit）类"质量门"Skill——一句话：让 Skills 本身变得可信、可靠、可度量。**

---

# Claude Code 社区动态日报 — 2026-09-05

## 📋 今日速览

今日发布 v2.1.261，新增 `/status` 和 `claude doctor` 的组织策略加载失败原因提示，并引入 `bashOutputMaxChars` 和 `taskOutputMaxChars` 两项输出上限配置。社区方面，Windows 桌面版 GPU 崩溃问题（#80444）持续发酵，已积累 109 条评论，成为当前最受关注的热点；此外 Claude Desktop（Code 标签页）自动拒绝 CLI 原生 SendMessage 导致子代理恢复失败的回归问题（#92016）为昨日新报，迅速获得 13 条评论，值得关注。

## 🚀 版本发布

### v2.1.261

- `/status` 与 `claude doctor` 新增 "Organization policy" 行，当组织策略因代理未透传端点等原因加载失败时，会明确展示失败原因
- 新增 `bashOutputMaxChars` 与 `taskOutputMaxChars` 设置项，用于限制命令输出与后台任务输出的最大字符数

## 🔥 社区热点 Issues（Top 10）

### 1. [Windows] 桌面版致命 GPU 进程崩溃，MSIX 包需修复才能重新启动
[#80444](https://github.com/anthropics/claude-code/issues/80444) — 109 评论 / 17 👍

应用内 Browser 标签页触发 GPU 进程崩溃（错误码 0x060C201E），崩溃后整个 MSIX 包处于无法启动状态（appxState=2），必须执行 Repair 才能恢复。这是目前评论数最多的 Issue，影响严重且尚无解决方案。

### 2. [macOS] Claude Desktop（Code 标签页）自动拒绝 CLI 原生 SendMessage，导致子代理恢复失败
[#92016](https://github.com/anthropics/claude-code/issues/92016) — 13 评论 / 3 👍

昨日新报的回归问题：桌面版仅覆盖会话到会话的恢复，却会拒绝 CLI 原生的 SendMessage 调用，破坏子代理（subagent）任务恢复流程。涉及 [area:agents] 与 [regression] 标签，反馈热度上升很快。

### 3. 功能需求：单会话实时多用户协作
[#60082](https://github.com/anthropics/claude-code/issues/60082) — 9 评论 / 11 👍

社区呼声最高的功能需求之一。请求实现类似 Google Docs / VS Code Live Share 的多人实时协作能力，让不同账号同时操作同一个 Claude Code 会话。👍 数位列本次 Top 10 之首。

### 4. [macOS] Fable 5 Token 消耗与描述不符
[#67506](https://github.com/anthropics/claude-code/issues/67506) — 26 评论 / 1 👍

用户反馈 Fable 5 模型的实际 token 消耗与其官方描述不匹配（已关闭）。涉及计费与模型行为，同类"Fable 相关计费/用量不符"的反馈在本次数据中多次出现。

### 5. [Windows] 桌面版升级后无法启动：旧版 AppX 容器被孤立进程锁定
[#73107](https://github.com/anthropics/claude-code/issues/73107) — 12 评论 / 2 👍

包升级后启动即报 "Another program is currently using this file"（0x80070020），根因是旧版本 AppX 容器被一个孤立的提权 Claude Code 子进程钉住。Windows 桌面版稳定性问题频发。

### 6. 功能需求：桌面版恢复上下文用量指示器
[#90708](https://github.com/anthropics/claude-code/issues/90708) — 5 评论 / 5 👍

桌面版右下角原本展示上下文窗口用量，更新后改为展示 5 小时用量限制环。对于长时 agentic 会话，上下文用量更能帮助判断是否即将压缩。请求恢复该指标或使其可配置。

### 7. [Windows] /model 选择器显示 Fable 5 为禁用态
[#73423](https://github.com/anthropics/claude-code/issues/73423) — 5 评论 / 2 👍

TUI 中 /model 选择器将 Fable 5 标记为禁用，但同账号通过 `--model claude-fable-5` 却能正常使用（已作为重复问题关闭）。模型可用性状态显示不准确。

### 8. [macOS] TUI 流式输出被提示重绘实时截断，长响应无法完整保留
[#76692](https://github.com/anthropics/claude-code/issues/76692) — 4 评论 / 1 👍

响应流式渲染时，固定输入提示/头部就地重绘，导致滚动出重绘区域的行被覆盖丢弃，最终长响应永远无法完整出现在终端回滚缓冲区中。

### 9. [CLI] 组织托管 Team 席位误提示使用 Credits
[#79671](https://github.com/anthropics/claude-code/issues/79671) — 3 评论 / 0 👍

CLI 间歇性地提示组织托管的 Team 席位用户继续按 Credits / 按量付费，而非使用已包含的订阅额度。根因疑似 `hasAvailableSubscription` 被错误缓存为 false。

### 10. [macOS] /ultrareview 无确认直接发起收费云审查
[#77222](https://github.com/anthropics/claude-code/issues/77222) — 2 评论 / 0 👍

从 CLI 运行 `/ultrareview <PR#>` 会立即发起**计费**云审查，跳过文档所述应显示的确认对话框、审查范围与**预估费用**。涉及费用透明性问题。

## 🔧 重要 PR 进展

> ⚠️ 注意：过去 24 小时内有更新的 PR 仅 1 条（见下），其余条目来自该 PR 的关联上下文。以下仅列示数据中可见的 PR。

### [OPEN] fix(security-guidance): 使 `**` 通配符匹配零深度路径
[#87079](https://github.com/anthropics/claude-code/pull/87079) — 作者: anishsamant

修复安全规则中 glob 匹配的一个缺陷：`_glob_match` 委托给 fnmatch 后，裸 `*` 本身已可穿越 `/`，导致 `**/*.ts` 要求字面 `/`，从而静默排除顶层文件。docstring 承诺 "`**` matches any depth"，但实际行为违背了这一约定。该 PR 修复了 security-patterns.json 规则对顶层文件的漏匹配问题。

> 注：本次数据快照中活跃 PR 仅此 1 条，建议关注 [#87079](https://github.com/anthropics/claude-code/pull/87079) 的后续进展，社区 PR 活动集中于其它时间窗口。

## 📊 功能需求趋势

综合本次全部 50 条 Issues，社区最关注的功能方向如下：

### 1. 桌面版稳定性与体验（占比较高）
Windows 与 macOS 桌面版连续出现问题——GPU 崩溃致 MSIX 包不可用（#80444）、升级后无法启动（#73107）、SendMessage 被拒导致子代理恢复失败（#92016）。桌面版正在成为新的功能主阵地，但稳定性问题明显拖累体验。

### 2. 计费与用量透明度
Fable 模型相关的计费/用量问题是当前最大的痛点簇：Token 消耗与描述不符（#67506）、会话级模型选择意外扩至全会话导致超额消耗（#79477）、Max 套餐无法切换 Fable 需 Credits（#80706）、/ultrareview 无确认扣费（#77222）、Team 席位误提示 Credits（#79671）；相应地用户还要求恢复桌面版上下文用量指示器（#90708）。社区对"花的钱去哪了"高度敏感。

### 3. 多用户实时协作
单会话多人实时协作（#60082）以 11 👍 成为最强功能呼声，但目前仍停留在 Feature Request 阶段，无排期迹象。

### 4. 新模型支持与切换体验
Fable 5 的模型选择器可用性显示（#73423）、不同套餐/账号类型的模型可及性差异，反映出用户在模型切换路径上的困惑。

### 5. 企业组织与治理
组织策略加载失败的原因可视化（v2.1.261 已部分解决）、组织托管席位的订阅判定问题（#79671），说明企业治理场景的需求正在上升。

## 💡 开发者关注点

- **费用不透明**：多个 Issue 直指估算缺失或与文档不符——/ultrareview 无确认扣费、Fable 用量异常、订阅与 Credits 判定错乱，开发者对"每一笔钱花在哪"有强烈的不安全感。
- **桌面版稳定性是当前最大痛点**：GPU 崩溃、升级后无法启动、代理恢复被破坏——多个 Issue 都指向 MSIX/AppX 打包与进程隔离层面的深层缺陷。其中 #80444 持续两个月未解决，109 条评论的围观本身就说明问题严重性。
- **子代理/多代理工作流的可靠性**：桌面版拒绝 CLI SendMessage 破坏子代理恢复（#92016）、workflow 在会话限额后从空白上下文重试导致用量翻倍（#80253），多代理工作流的异常恢复路径有待完善。
- **CLI/TUI 输出丢失**：流式输出在 TUI 中因重绘被截断（#76692）、长输出无法完整保留，直接影响开发者依赖终端回滚查看历史的日常习惯。
- **Windows 平台问题密度偏高**：在 Top 10 中 Windows 相关占 3 席，且均为阻断性（launch-blocking）问题，Windows 用户的使用体验明显落后于 macOS。
- **策略/安全功能误伤正常开发**：安全策略错误拦截非安全/生物领域的开源工作（#79392）、RTL 文本渲染反序（#76712）、浏览器工具点击坐标漂移（#78548）等长尾问题仍待修复。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-05

## 今日速览

今日发布两个补丁版本（rust-v0.153.3 / rust-v0.153.4），核心是 GPT-6-Astra 模型的集成打磨与稳定性修复。社区侧 Windows 平台问题持续高密度爆发，**Windows Computer Use 截图失败**（#25178）以42条评论居首，远程同步、会话丢失等Windows相关Bug占据十大热点近半数席位。PR方面，TUI 异步问题系统在今日被系统性整合推进。

---

## 版本发布

### rust-v0.153.4（补丁）
- **Bug 修复**: 修复 Astra 在捆绑模型选择器（bundled model picker）中的可见性，并设为未显式指定模型时的捆绑默认模型（#42874）
- Astra 引导文案更新：仅在会话中该工具可用时才使用异步问题（#42878）

### rust-v0.153.3（补丁)
- **新功能**: GPT-6-Astra 已加入 Amazon Bedrock 模型选择器（Mantle 与 Runtime 全球/US 路由）（#42805）
- **Bug 修复**: 修正 Astra 异步澄清问题的引导，使用受支持的工具并明确其仅接受文本（#42809）

---

## 社区热点 Issues（Top 10）

### 1. Windows Computer Use 截图失败 — 评论42 | 👍20
**#25178** [bug, windows-os] — Windows Codex Desktop 的 Computer Use 可列出应用/窗口、激活窗口、读取无障碍文本、发送键盘输入，但任何需要截图的 `get_window_state` 调用均在捕获前失败（`SetIsBorderRequired` 相关）。这是社区积怨最久的 Windows 核心功能缺陷之一。

### 2. 切换 WSL 后项目创建/删除失败 — 评论35 | 👍27
**#41290** [bug, windows-os] — 在 Windows 版 Codex App（26.825.31414）将 Agent Environment 切换至 WSL 后，项目创建与移除均不可用。获赞27为今日最高，反映 WSL 工作流用户的广泛抵触。

### 3. 分页滚动产生重复序号导致线程冻结 — 评论17
**#41566** [bug, windows-os, session] — Codex 分页滚动（paginated rollout）在未完成回合后可发出重复序号（duplicate ordinal），导致线程历史投影永久冻结。属严重的会话一致性问题。

### 4. 隐藏 Pets 菜单 + 可配置提示词润色 — 评论17 | 👍17
**#32069** [enhancement, app] — 用户请求两个 UX 改进：允许隐藏 "Show pets" 菜单项；增加可配置的 prompt polishing（提示词润色）开关。功能需求类获赞最高。

### 5. Windows/Android 远程项目双向同步不对称 — 评论11 | 👍3
**#41470** [bug, windows-os, remote] — Windows Codex 主机与 Android ChatGPT 间的 Remote 同步不对称：新桌面项目不在移动端出现，而移动端发起的线程又触发信任门槛（trust gate）。

### 6. 关闭的侧边聊天无法重新打开 — 评论9 | 👍12
**#27716** [enhancement, session] — 桌面版关闭侧边聊天（side chat）后无任何方式重新打开，历史记录实际不可恢复。macOS 用户持续反馈的会话管理缺口。

### 7. 原生 Agent 图中基于证据的语义升级提案 — 评论9
**#40037** [enhancement, subagent] — 社区提出 Codex 原生多 Agent 图的 "evidence-driven semantic escalation" 方案，并已产出实验性 Slopdex 源码与 Windows CLI 预览（作者自述）。

### 8. Windows 选择性丢失本地历史会话 — 评论7
**#41874** [bug, windows-os, session] — Windows 桌面版选择性丢失本地历史会话，旧版 legacy 线程反而存活，同时伴随项目分配迁移不完整的问题。

### 9. GPT-5.6 Sol 与 GPT-6 Astra：智能更高但自主完成率降低 — 评论4
**#42937** [bug, model-behavior] — 今日新建。用户报告 Codex 内置的新模型（GPT-5.6 Sol / GPT-6 Astra）在八九月反复观察中呈现出更高的智能水平但更低的自主任务完成率与运行可靠性。

### 10. VS Code 扩展 `chatgpt.openSidebar` 命令缺失 — 评论4
**#42882** [bug, extension] — 更新到 26.901.22334 后，Codex VS Code 扩展的侧边栏命令 `chatgpt.openSidebar` 报 "command not found"，扩展集成出现回归。

---

## 重要 PR 进展（Top 10）

### 1. 等待回合分析后再关闭 Guardian v2 测试
**#42933** — 在 `guardian_v2_routes_scoped_tool_approvals` 测试中，等待被审线程的 `codex_turn_event` 后再关闭 app server，并用返回事件做断言。提升测试确定性。

### 2. OpenAI Docs skill 转向 GPT-6 Astra 引导
**#42931** — 将捆绑的 GPT-5.6 Sol 迁移指南替换为 GPT-6 Astra 引导，更新模型元数据、迁移路由与官方文档链接。

### 3. Default 协作模式改用静态指令
**#42904** — 将 Default 与 Plan 模式指令直接写入默认模式说明，去除模板渲染，删除模式名格式化辅助函数（架构简化）。

### 4. TUI 问题状态保持 + 历史与队列导航整合
**#42903** — 在线程输入恢复与重连时保留问题草稿、选择、展开状态与已处理消息 ID；保留缓冲的实时问题（架构/体验双重改进）。

### 5. 为独立任务与记忆请求建立根回合身份
**#42900** — 修复后台与空输入回合缺少 `root_turn_id` 的问题；独立任务与分离式记忆请求现在具备完整的回合身份链。

### 6. 异步问题选项支持内联 "其他" 回答
**#42897** — 异步问题除预设选项外，允许用户在问题面板中直接编写替代答案（回答方式更灵活）。

### 7. 异步 TUI 问题支持可选择答案
**#42894** — TUI 此前仅显示自由文本输入；现展示异步问题的建议答案选项，并要求完全可见后才可提交。

### 8. 将异步问题系统集成进 TUI
**#42891** — 实时 Agent 消息中的问题以折叠计数 + 可展开回答编辑器展示；支持导航、回答、排队与跳过。

### 9. 客户端 exec-server RPC 尝试指标
**#42883** — 为每次客户端 RPC 调用记录 `exec_server_client_requests_total`（按协议方法标注），在本地准入前计数，以统计被拒、超时等尝试。

### 10. 文件系统沙箱路径解析去冗余
**#42870** — 修复文件系统沙箱准备阶段在 executor 运行时线程上同步探测无关权限根、反复解析相同文件系统别名的问题（性能优化）。

---

## 功能需求趋势

从全部 Issues 中提炼三大方向：

1. **GPT-6-Astra 适配与打磨（当前主线）** — 从今日两个版本发布及相关 PR（#42874、#42878、#42879、#42831）可见官方正密集推进 Astra 的模型选择器可见性、引导文档与默认启用。社区侧 #42937 开始质疑新模型"智能提升但可靠性下降"，需要关注后续走向。
2. **远程（Remote）会话一致性与双向同步** — #41470（Win↔Android 不对称）、#32614（Agent 创建任务在移动端不可见）、#31398（Android 无法关闭 Plan 模式）持续累积，反映跨端体验是当前最大体验短板。
3. **会话/历史可管理性** — #27716（侧边聊天无法重开）、#41874（历史会话丢失）等表明用户对会话持久化的信任度在下降，属于高优先级体验债。

## 开发者关注点

- **Windows 平台 Bug 密度最高**：今日评论区前十中 Windows 专项占 5 席（#25178、#41290、#41566、#41470、#41874），加上进程无窗口（#42669）、沙箱凭据缺失（#42621）等新问题，Windows 已成为 Codex 桌面端最不稳定的平台。
- **配额与计费透明度焦虑**：#42660 报告周配额重置/核算异常（无本地活动却配额耗尽）、#28382（防自动使用付费 credits 开关，👍15）表明用户对用量控制的诉求持续升温。
- **沙箱策略与本地开发冲突**：#41779 本地 API 启动被 "blocked by policy" 拒绝、#42621 Elevated 沙箱缺少凭据上下文（SEC_E_NO_CREDENTIALS）——沙箱安全策略正在干扰合法本地开发流程。
- **模型行为回归担忧**：#42937（今日新建）系统性质疑新模型"更高智能、更低可靠性"的趋势，值得关注是否有更多复现报告跟进。
- **异步问题系统的 TUI 集成已进入收官阶段**：从 #42889（构建块）、#42891（集成）、#42894（可选答案）、#42897（内联 Other）到 #42903（状态保持），一条完整的 feature 链在 48 小时内合入，TUI 交互将迎来显著升级。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-05

## 1. 今日速览

今日有 1 个 nightly 版本发布（v0.60.0-nightly.20260905），核心更新聚焦于子代理安全加固。社区讨论热度集中在**子代理可靠性**方向，MAX_TURNS 被误报成功、通用子代理挂起、shell 命令执行卡死是当前开发者最关切的三大痛点，且多条 Issues 正处于"需要重新测试"状态，暗示官方正在进行系统性修复。此外，MCP 策略执行一致性、NTFS 短文件名（SFN）防护等 PR 展示了安全加固的深化趋势。

## 2. 版本发布

- **v0.60.0-nightly.20260905.g85aca163f**：包含两个修复：
  - `fix(extensions)`：环境变更时提示用户确认，并对运行时环境变量进行清理，防止子代理运行环境被篡改。
  - `fix(core)`：增强工作区路径边界检查与符号链接解析，提升命令执行安全性。
  - GitHub 链接：google-gemini/gemini-cli releases

## 3. 社区热点 Issues（10 个）

1. **[#22323] Subagent 达到 MAX_TURNS 后恢复被报告为 GOAL 成功，隐藏中断**（P1/Bug）
  - 作者: matei-anghel | Comments: 13 | 👍: 2
  - **为什么重要**：子代理耗尽轮次却被误报为成功完成，这是 agent 可靠性层面的严重逻辑漏洞，会直接误导用户对任务结果的判断。该 Issue 已开放近半年且评论数最高，官方已标记 *need-retesting*。
  - 链接：google-gemini/gemini-cli Issue #22323

2. **[#21409] 通用子代理（Generalist agent）无限挂起**（P1/Bug）
  - 作者: turmanticant | Comments: 8 | 👍: 8
  - **为什么重要**：点赞数（8）为今日列表最高，说明遭遇此问题的用户面极广。用户反馈即使最简单的"创建文件夹"操作也会永久挂起，等待长达一小时也不返回，严重阻塞了依赖子代理的常规工作流。
  - 链接：google-gemini/gemini-cli Issue #21409

3. **[#25166] Shell 命令执行完毕后卡在 "Waiting input" 状态**（P1/Bug）
  - 作者: rnett | Comments: 4 | 👍: 3
  - **为什么重要**：这是工作流效率的"致命伤"——命令已结束但 CLI 无响应，用户不得不反复中断操作。iOS 版相关反馈较多，涉及非常基础的 CLI 命令，属于高频触发问题。
  - 链接：google-gemini/gemini-cli Issue #25166

4. **[#20079]** `~/.gemini/agents/` 中的 `filename.md` 符号链接不被识别为子代理（P2/Bug）
  - 作者: wtanaka | Comments: 4 | 👍: 0
  - **为什么重要**：开发者普遍用符号链接管理点文件配置，此问题导致自定义子代理管理不便。核心在于：`AgentRegistry` 仅做了字面路径匹配，未解析真实路径。此问题已加入 workstream-rollup（汇总工作流），处于待修复状态。
  - 链接：google-gemini/gemini-cli Issue #20079

5. **[#29194] 畸形结构的 Checkpoint 导致恢复（resume）崩溃**（P2/Bug, effort/small）
  - 作者: soroush5 | Comments: 5 | 👍: 0
  - **为什么重要**：当 `history` 字段不是数组时（如保存中断、磁盘写满或手工编辑），`loadCheckpoint` 会抛出 `TypeError`，导致会话恢复功能彻底不可用。虽然影响非核心功能，但崩溃路径明确，已有修复方案预期。
  - 链接：google-gemini/gemini-cli Issue #29194

6. **[#21968] Gemini 不使用社区自定义的 skills 与子代理**（P2/Bug/Customer-issue）
  - 作者: rnett | Comments: 6 | 👍: 0
  - **为什么重要**：用户付出成本编写了自定义技能与子代理，但模型在相关场景中默认不主动调用，仅在被明确指令时才使用。这直接降低了 skills/agents 生态对用户的价值。
  - 链接：google-gemini/gemini-cli Issue #21968

7. **[#24246]** 可用工具数量超过 128 个时遭遇 400 错误（P2/Bug）
  - 作者: gundermanc | Comments: 3 | 👍: 0
  - **为什么重要**：随着 MCP 服务器、插件等扩展增多，工具数量膨胀是必然趋势。当前实现存在硬编码上限，一旦超过即报错，严重制约了工具生态的横向扩展能力。
  - 链接：google-gemini/gemini-cli Issue #24246

8. **[#19873] 利用模型 bash 亲和性：零依赖 OS 沙箱与执行后意图路由**（P2/Enhancement, effort/large）
  - 作者: abhipatel12 | Comments: 9 | 👍: 1
  - **为什么重要**：讨论量较高，提案将 Gemini 3 模型的 bash/工具调用原生亲和性与工作区安全隔离结合，涉及沙箱化执行设计，具有重要的架构参考价值，虽属长期建设项目，但官方已将其纳入工作流汇总跟踪。
  - 链接：google-gemini/gemini-cli Issue #19873

9. **[#26525] Auto Memory 需要确定性的脱敏机制并减少日志写入**（P2/Security）
  - 作者: SandyTao520 | Comments: 5 | 👍: 0
  - **为什么重要**：Auto Memory 依赖"经验性提取"进行密钥脱敏在发送给模型前，将本地转录内容发送给后台提取 agent，这带来了凭据泄露风险。用户建议在发送前就确定性地脱敏（如基于模式匹配），属于安全层面的重要建议。
  - 链接：google-gemini/gemini-cli Issue #26525

10. **[#22267] Browser Agent 忽略 settings.json 中的配置覆盖（如 maxTurns）**（P2/Bug）
  - 作者: hsm207 | Comments: 3 | 👍: 0
  - **为什么重要**：配置读取链路存在设计缺陷，即使 `AgentRegistry` 可成功覆盖全局及项目级设置，浏览器子代理仍可能因自身机制而忽略这些设置，导致用户无法按预期控制浏览器代理的资源限制。
  - 链接：google-gemini/gemini-cli Issue #22267

## 4. 重要 PR 进展（10 个）

1. **#29215 fix(core): enforce envelope metadata provenance for untrusted tool outputs** (Open, size/m)
  - **修复内容**：强化系统提示词，强制审计外部工具和 MCP 服务器输出的元数据来源，让模型能从信封元数据而非工具内容中提取作者和操作状态，防止 prompt 注入类攻击。
  - 链接：google-gemini/gemini-cli PR #29215

2. **#29200 fix(core): enforce MCP policy consistently at runtime** (Open, p2, size/m)
  - **修复内容**：让 MCP 运行时策略检查与 CLI 中不区分大小写、去空白空格的服务名称匹配对齐，且将空 `mcp.allowed` 列表改为 fail-closed 而非放行所有服务器，最大化企业安全边界。
  - 链接：google-gemini/gemini-cli PR #29200

3. **#29116 fix(core): mitigate NTFS 8.3 short name (SFN) path** (Open, size/m)
  - **修复内容**：修复 Windows NTFS 短文件名（`git~1` 等）绕过路径规范化与 AllowedPaths 检查的漏洞，可在编译映射前拦截基于短名的路径.
  - 链接：google-gemini/gemini-cli PR #29116

4. **#29114 fix(core): prevent duplicate handleExit execution on spawn failure** (Open, area/agent)
  - **修复内容**：为 shell 执行服务添加可重入守卫标志，避免子进程异常退出时 spawn failure 同时触发 `error` 与 二次 `exit` 事件两个回调执行，彻底修复重复清理与状态机崩溃问题。
  - 链接：google-gemini/gemini-cli PR #29114

5. **#29118 fix(extensions): only strip trailing .git suffix** (Open, size/xs)
  - **修复内容**：修正 GitHub 扩展解析逻辑，`.git` 仅出现在仓库名末尾时才删除，包含 `.git` 的内部名称（如 `blog.github.io`）不会再被误修正。
  - 链接：google-gemini/gemini-cli PR #29118

6. **#29219 Create webpack.yml** (Open, p1, size/s)
  - **修复内容**：新增 webpack 构建工作流配置，应对 nightly 构建或打包路径中的配置缺失问题，目前处于开放待评审状态。
  - 链接：google-gemini/gemini-cli PR #29219

7. **#28942 fix(cli): use strict boolean parsing for DEBUG env var in sandbox launcher** (Closed, platform)
  - **修复内容**：沙箱启动器原先按 JS 字符串真值执行布尔判断，导致 `DEBUG=false`、`DEBUG=0` 被错误判定为启用调试模式。改为严格布尔解析，修复了环境变量语义与直觉不一致的问题。
  - 链接：google-gemini/gemini-cli PR #28942

8. **#28948 ~ #28953 系列：PR 生成评测套件全套合并（5 个 PR）** (Closed, size/l~xl)
  - **内容**：涵盖 eval 评测 harness（#28948）、LLM 评判模块与评分标准（#28949）、可视化对比工具（#28952）、diff 提交助手（#28953）及 Cloud Run / Workflow 部署（#28951），虽属 Caretaker 内部流水线，但体现了官方对代码生成与自动化评估体系的投入。
  - 链接：google-gemini/gemini-cli PR #28948 / #28949 / #28951 / #28952 / #28953

9. **#28955 Update dependencies, add MCP configuration, and integrate ECC bundles** (Closed, p1)
  - **内容**：批量依赖更新并集成 ECC bundles（企业连接能力包），同时加入 MCP 配置文件，属于企业功能入门的打包型 PR。
  - 链接：google-gemini/gemini-cli PR #28955

10. **#29218 chor/release 版本自动打标** (Open, bot)
  - **内容**：配合今日 nightly 发布自动执行的版本号更新。
  - 链接：google-gemini/gemini-cli PR #29218

## 5. 功能需求趋势

- **子代理行为自主性提升**（#21968）：社区希望模型能主动调用用户自定义的 skills 与子代理，而不仅限于显式指令后执行，实现更自然任务分解。
- **安全边界防护强化**：多个方向并发，包括环境变更前的用户确认（已入版本）、确定性密钥脱敏与减少敏感数据落盘（#26525）、沙箱路径防护（NTFS 短名、符号链接解析）等。AST 感知的代码读取/检索也在评估中（#22745），通过精确方法边界读取来减少不必要的命令执行，间接压缩攻击面。
- **资源优化与鲁棒提升**：聚焦于浏览器子代理的自动会话接管和锁恢复（#22232）、可配置的浏览器并发限制（#22267）、工具数量超过 128 时的动态降级而非直接报错（#24246），以及更严格的破坏性命令劝阻机制（#22672）。
- **checkpoint 健壮性**：期望非法历史格式能被拦截并提示，而非抛出致命错误，保障长时任务的断点恢复可靠性。

## 6. 开发者关注点

- **可靠性是当前最大痛点**：MAX_TURNS 误报、通用子代理挂起、shell 卡死这三个 P1 级 Bug 涉及 agent 的核心执行链路，直接影响开发者能否放心把任务交付给 CLI，需要官方优先解决。
- **自定义能力价值感不足**：开发者耗费心力编写的自定义子代理与技能得不到模型的主动采用会大幅降低工具的"增量价值"，社区期待模型拥有更强的工作流感知与工具调度能力。
- **安全策略需要细粒度与确定性**：从 MCP 白名单的 fail-closed 语义到环境变量透传的安全确认，开发者倾向让策略判定行为更透明、更可控，而非依赖模型的主观判断。
- **Windows 与跨平台路径处理的边界问题**：NTFS 短名、符号链接、工作区边界，这些路径处理细节若不严谨会造成安全与可用性双重漏洞，社区期待在核心层尽早修复，而不是通过模型提示词规避。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-05

## 今日速览

今日共发布 3 个新版本（1.0.84-1、1.0.84-0、1.0.83），其中 1.0.84-x 系列新增 GPT-6 Astra 模型支持及托管沙箱会话改进。社区讨论热度集中在自定义 Agent 缺少推理力度配置（#2904，👍23）、入队消息无法取消（#1857，👍28）等长期未决的功能需求，同时 ACP 模式权限回归（#4537）和 MCP 工具生命周期问题（#4731）等稳定性缺陷值得关注。

## 版本发布

### v1.0.84-1
- 新增 GPT-6 Astra 模型支持

### v1.0.84-0
- 托管沙箱会话可在批准的旁路提示后，在本次会话剩余时间内被禁用
- 修复：PowerShell 写入被沙箱阻止后，提供在沙箱外运行该命令的选项
- 修复：凭据库中存在多个 GitHub 账户时的沙箱化 `gh` 问题

### v1.0.83（2026-09-04）
- Windows 11 任务栏展示运行中的 Copilot 会话，支持实时悬停状态卡片
- 为 MCP OAuth 登录增加 Client ID Metadata Document (CIMD) 支持
- 自定义 Agent 可在 `model` 字段列出多个模型并按顺序尝试，直至找到可用模型；`model-policy: required` 强制该行为

## 社区热点 Issues（Top 10）

| # | Issue | 热度 | 说明 |
|---|-------|------|------|
| 1 | [#4726 OTel: 恢复轮次缺少输入消息](https://github.com/copilot-cli Issue #4726) | 新 | VS Code Agent Host 窗口重载恢复后，`invoke_agent` span 可能缺失 `gen_ai.input.messages`，影响可观测性数据完整性 |
| 2 | [#4537 ACP 模式权限回归](https://github.com/copilot-cli Issue #4537) | 👍2 | 自 v1.0.81-1 起 `--acp` 模式不再发送 `session/request_permission`，shell 命令、文件编辑自动执行，是 #845 的回归 |
| 3 | [#4731 MCP 工具列表刷新超时](https://github.com/copilot-cli Issue #4731) | 新 | 工具调用超时后向同一仍被占用的服务器发起 `tools/list` 刷新，导致超时并永久丢失该服务器工具 |
| 4 | [#4725 Linux 频繁 JavaScript 堆内存溢出](https://github.com/copilot-cli Issue #4725) | 新 | 每几分钟进程崩溃，Mark-Compact 显示 ~3.9GB 堆内存，疑似内存泄漏 |
| 5 | [#2904 自定义 Agent 缺少推理力度配置](https://github.com/copilot-cli Issue #2904) | 👍23 | `.agent.md` 的 frontmatter 无法按 Agent 设置 reasoning effort，社区诉求强烈 |
| 6 | [#1857 无法取消已入队消息](https://github.com/copilot-cli Issue #1857) | 👍28 / 11 评论 | Agent 忙时或 `/compact` 期间，通过 `Ctrl+Q`/`Ctrl+Enter` 入队的消息无法取消或移除 |
| 7 | [#4728 自动更新破坏 Copilot 桌面应用](https://github.com/copilot-cli Issue #4728) | 新 | 自动更新重写了正在运行的 `copilot.exe`，导致 GitHub Copilot 桌面应用无法恢复任何会话（"Session unavailable"） |
| 8 | [#4729 内置 research Agent 引用不存在的工具](https://github.com/copilot-cli Issue #4729) | 新 | 内置 `research` subagent 提示调用 `github/get_me`，但会话中的 MCP 服务器并不暴露该工具 |
| 9 | [#4710 copilot-file-search 失控线程](https://github.com/copilot-cli Issue #4710) | 新 | v1.0.83-3 在会话处于 idle 状态时，`copilot-file-search` 线程持续占用单核 CPU 并无限写入磁盘 |
| 10 | [#4647 chroma-mcp 兼容性破坏](https://github.com/copilot-cli Issue #4647) | 3 评论 | v1.0.80→v1.0.81 更新破坏了与 chroma-mcp 的兼容性，MCP 生态兼容性问题持续出现 |

## 重要 PR 进展

近 24 小时无新的 Pull Request 更新（共 0 条）。

## 功能需求趋势

从近期 Issue 中可以观察到以下社区需求方向：

1. **模型与推理控制**：除自定义 Agent 的 `model` 字段外，社区明显需要**按 Agent 粒度的推理力度（reasoning effort）控制**（#2904）。此外，#4732 反映了服务端模型自动切换（GPT-5 mini）导致输出质量不稳定的用户困扰。今日 v1.0.84-1 新增 GPT-6 Astra 支持，表明多模型接入是 CLI 持续演进方向。
2. **输入与交互体验**：入队消息取消（#1857，👍28）、Shift+方向键文本选择（#2644）、WSL2 按键映射修复（#4328）等持续高热度，说明终端输入体验仍有较大改进空间。
3. **沙箱与权限边界**：v1.0.84-0 修复 PowerShell 沙箱旁路选项、ACP 模式权限回归（#4537）与托管沙箱会话禁用能力（1.0.84-0 release），显示沙箱/权限系统近期改动频繁且存在回归风险。
4. **Windows 平台支持**：Windows 11 任务栏集成（v1.0.83）、WSL2 按键问题、Android Studio 终端滚轮问题（#3194），Windows 生态适配正在被积极建设。
5. **MCP 生态稳定性**：#4647、#4731、#4525 等多起 MCP 兼容性问题集中在 1.0.81 前后出现，现代 MCP 握手（`server/discover`）的迁移带来兼容性阵痛。

## 开发者关注点

高频痛点集中在：**ACP 模式权限回归**（#4537，工具调用绕过审批直接执行）、**自动更新破坏安装**（#4728，更新重写正在运行的二进制）、**MCP 服务器故障后工具被永久移除**（#4731）、**空闲状态下后台线程失控**（#4710，CPU + 磁盘无限消耗）。此外，v1.0.81 系列引发的 MCP 握手回归问题已在社区形成多个独立 Issue（#4647、#4525），建议维护者优先排查 1.0.81-1 以来的 MCP 相关改动。整体来看，近期发布的频率较高（一周内 3 个版本），但稳定性和回归问题也在同步增加，开发者对权限系统和 MCP 子系统的信任度面临考验。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-09-05

## 今日速览

今日社区动态集中在两处：一是针对第三方 Coding Agent（如 Claude Code）接入文档与体验的改进诉求（#1210 已关闭）；二是 VS Code 扩展出现流式渲染丢字符的问题反馈（#2635 新开）。另有一项关于 `StrReplaceFile` 工具编辑计数逻辑的修复 PR（#2524）仍在进行中，存在关联 Issue 待处理。

## 社区热点 Issues

### 1. [#2635 · VS Code 扩展：流式输出渲染层字符丢失](https://github.com/MoonshotAI/kimi-cli/issues/2635)
- **状态**：OPEN，24小时内新开
- **要点**：扩展聊天面板中，助手的渲染文本偶发丢失单个字符；经与会话日志核对，底层模型输出完整，问题定位于渲染/复制环节。
- **为什么值得关注**：直接影响用户在 IDE 内查看与复制代码的准确性，属于典型的 UI 层数据完整性问题，且已确认非模型问题，通常修复优先级较高。
- **社区反应**：暂无评论，等待维护者与扩展作者排查转义、DOM 更新或 diff 渲染逻辑。

### 2. [#1210 · 完善"第三方 Coding Agent 中使用"文档](https://github.com/MoonshotAI/kimi-cli/issues/1210)
- **状态**：CLOSED，评论 1，更新于 2026-09-05
- **要点**：请求补充在 Claude Code 中切换 Kimi K2 Thinking 模型的具体操作说明，并建议提供类似智谱文档中的环境变量免重复配置方案。
- **为什么值得关注**：本次唯一获得关闭的 Issue，表明维护方向正在跟进。TAB 切换功能细节确实文档不足，新的快捷配置方式将直接降低第三方 Agent 接入的摩擦成本。
- **社区反应**：仅有1条评论，提出者给出了对标参考（智谱官方文档）。

## 重要 PR 进展

### [#2524 · fix(tools): StrReplaceFile 替换计数基于当前内容计算](https://github.com/MoonshotAI/kimi-cli/pull/2524)
- **状态**：OPEN，更新于 2026-09-04
- **功能/修复**：修复 `StrReplaceFile` 工具在顺序执行多个编辑时，报告替换次数却基于原始文件的问题。当链式编辑的 `old` 字符串由前一步生成，统计将发生偏移。
- **关键点**：关联 Issue #2526 尚未出现在近期热点中，说明该 PR 先于 Issue 被社区关注到——涉及工具执行正确性，属于 Agent 编辑文件时的底层可靠性问题（如误报"0 次替换"导致意外退出）。

## 功能需求趋势

根据当前 Issue 样本，社区关注方向集中在：

- **IDE/编辑器扩展的可靠性**（#2635）：流式输出渲染层的数据完整性是新增热点。
- **第三方 Agent 接入体验优化**（#1210）：文档具体化与环境变量免重复配置方案是当前诉求的核心。

> 注：受限于当日 Issue/PR 样本数量（2个 Issue，1个 PR），此处只能呈现有限的两条趋势，待数据量积累后可进一步补全排序。

## 开发者关注点

- **配置繁琐度**：#1210 中明确表达"每次需要 export 变量也不太方便"，开发者期待更简化的接入配置方式（如智谱的 token 路径），反映出第三方集成场景下对开箱即用的渴求。
- **渲染层 bug 可观测性**：#2635 暴露了一个关键痛点——扩展聊天面板的显示结果会"悄悄丢字"，但日志中模型输出是完整的。这类问题极易被误诊为"模型变笨了"，实际是前端渲染 bug，开发者希望官方优先处理此类 IDE 层数据一致性问题。

---

*本日报基于 MoonshotAI/kimi-cli 仓库过去24小时（截至 2026-09-05）的 Issue 与 PR 动态自动生成，仅覆盖源数据中可见的信息。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-05

## 今日速览

今日发布 v1.18.29 与 v1.18.28 两个补丁版本，主要修复 Codex OAuth 模型过滤与桌面端设备认证问题。社区中与 v2 相关的 bug 报告显著增多，涉及会话头缺失、配置目录解析、URL 路径丢失等，且已有多個对应修复 PR 提交，表明 v2 正处于密集迭代期。

## 版本发布

**v1.18.29**
- 修复 Codex OAuth 模型过滤无法识别整数版本（如 `gpt-6`）的问题
- 修复 `gpt-6-astra` 未对 OpenAI 订阅用户显示的问题
- 中文文档粗体渲染修复（感谢 @Peter267）
- 2 位社区贡献者参与

**v1.18.28**
- Core：发送 session ID 作为 GitHub Copilot 交互头，改进跨会话请求追踪
- Desktop：OpenCode 账户设备认证改用桌面客户端 ID；增大"在应用中打开"图标尺寸

## 社区热点 Issues

### 高热度（👍 ≥ 15）

1. **[#8751] [FEATURE] Agent、技能和命令的热重载** — 👍96，22 评论，已开放近 8 个月
   请求在 OpenCode 运行期间使配置失效并重载。高赞表明开发工作流对此有强烈需求，长尾未解决可能成为社区持续关注点。
   https://github.com/anomalyco/opencode/issues/8751

2. **[#15585] 免费模型提示"free usage exceed"** — 👍17，54 评论（已关闭）
   所有免费模型均报同一错误，用户质疑 OpenCode 是否对免费模型设有使用上限。评论数最高，说明影响面广，但现已关闭。
   https://github.com/anomalyco/opencode/issues/15585

3. **[#12472] Claude Code hooks 原生兼容（PreToolUse、PostToolUse、Stop）** — 👍40，19 评论
   OpenCode 已兼容 Claude Code 的规则与技能，但 hooks 系统尚不支持。高👍反映用户希望无缝迁移 Claude Code 工作流。
   https://github.com/anomalyco/opencode/issues/12472

### 新提交 / 近期活跃

4. **[#47438] Node.js fetch 调用缺少 x-opencode-session 头** — 今日创建，6 评论
   模型提供商（OpenCode Go）主动通知请求缺少必需会话头。已有对应 PR #47473 提交，修复速度快。
   https://github.com/anomalyco/opencode/issues/47438

5. **[#46498] [2.0] OpenCode v2 中 server URL 丢失完整路径** — 4 评论，👍4
   v1 可正常附加 `http://127.0.0.1:3000/proxy` 这类带路径的 URL，v2 存在 URL 解析 bug 导致路径被丢弃。影响代理部署场景。
   https://github.com/anomalyco/opencode/issues/46498

6. **[#46415] finish_reason 'unknown' 触发 assistant-prefill 延续，导致 SAP AI Core 每次成功后返回 400** — 4 评论
   禁止 prefill 的提供商（SAP AI Core）因 `finish_reason: unknown` 在每轮成功对话后被强制发起延续请求而报错。涉及 session 状态机逻辑。
   https://github.com/anomalyco/opencode/issues/46415

7. **[#47458] v2 插件工具：URL 附件与取消信号问题** — 今日创建，3 评论
   Code Mode 静默丢弃 HTTPS 和 `file:` 附件（工具成功但 `files` 数组为空），Base64 data URI 则被保留；另提到取消信号缺失。
   https://github.com/anomalyco/opencode/issues/47458

### 其他值得关注

8. **[#44684] 1.18.21 插件安装器拉取 npm 公共依赖超时，导致插件静默失效/启动挂起** — 5 评论
   1.18.20 无此问题，1.18.21 后出现。headless 运行与 serve 模式在加载任何插件时挂起，影响 CI 场景。
   https://github.com/anomalyco/opencode/issues/44684

9. **[#46365] [Go] 月度用量在 ~$24.5 即显示 100%，远低于文档所述的 $60 限额** — 4 评论，👍3
   付费用户（$10/月）发现用量统计与控制台显示不一致。结合 #47142，用量计算逻辑存在系统性问题。
   https://github.com/anomalyco/opencode/issues/46365

10. **[#32825] [2.0] OPENCODE_CONFIG_DIR 在 v2 服务中替换而非叠加全局配置** — 3 评论
    ​​v2/core 配置加载器将 `OPENCODE_CONFIG_DIR` 视为唯一配置目录，而旧版加载器将其作为附加目录。已有 PR #47468 修复。
    https://github.com/anomalyco/opencode/issues/32825

## 重要 PR 进展

### v2 / Core 修复

1. **[#47473] fix(core): 在 session runner 请求中发送 x-opencode-session 头** — 关闭 #47438
    v2 session runner 请求此前仅携带 `x-session-affinity` 和 `X-Session-Id`，本 PR 补齐所需会话头。
    https://github.com/anomalyco/opencode/pull/47473

2. **[#47468] fix(core): 保持 OPENCODE_CONFIG_DIR 对全局 AGENTS.md 的叠加语义** — 关闭 #28658, #32825
    恢复旧版"附加配置目录"的行为，而非替换全局配置。
    https://github.com/anomalyco/opencode/pull/47468

3. **[#45931] fix(core): 拼接 patch hunks 时保留 CRLF 行尾** — 已关闭
    修复 CRLF 文件在 `Patch.derive` 切分时行尾残留 `\r`、而模型新增行仅 LF 导致拼接错乱的问题。
    https://github.com/anomalyco/opencode/pull/45931

### TUI / 桌面端 / UI

4. **[#47464] fix(tui): 子代理间保留父级滚动位置** — 已关闭
    按 session 维护滚动锚点而非共享根标签锚点；在同步恢复前忽略初始滚动写入，防止重挂载清除已保存位置。
    https://github.com/anomalyco/opencode/pull/47464

5. **[#47272] fix(tui): 避免终端退出时的断连报错** — 已关闭
    内嵌终端正常退出时不再闪现红色"Terminal disconnected"提示。
    https://github.com/anomalyco/opencode/pull/47272

6. **[#47461] fix(ui): 缩放时保持文件手风琴边框可见** — 已关闭
    将 0.5px 细线边框改为 1px，避免缩放/重采样时边框消失。
    https://github.com/anomalyco/opencode/pull/47461

7. **[#47462] fix(desktop): Windows Explorer 溢出后恢复用户 PATH** — 新增
    Explorer 在 4 KB 边界丢弃 PATH 时恢复用户 PATH；仅在启动时修复纯机器继承场景，不编辑注册表。
    https://github.com/anomalyco/opencode/pull/47462

8. **[#47472] fix(stats): 无需光标转义即可关闭模型用量框** — 新增
    修复 `opencode stats` 关闭 MODEL USAGE 框时打印分隔符而非正确转义的问题。
    https://github.com/anomalyco/opencode/pull/47472

### 功能改进

9. **[#47334] feat(core): web 搜索提供商按会话保持 sticky** — 新增
    使 `websearch.provider` 的选择在会话内保持不跳变。
    https://github.com/anomalyco/opencode/pull/47334

10. **[#47431] fix(tui): 将 /variants 斜杠命令更名为 /reasoning，保留 variants 别名** — 新增
    模型变体选择器的命令名改为 `/reasoning`，`/variants` 作为别名保留兼容。
    https://github.com/anomalyco/opencode/pull/47431

## 功能需求趋势

- **Claude Code 生态兼容** — #12472 请求 hooks 系统（PreToolUse/PostToolUse/Stop）原生支持，与既有 rules/skills 兼容并列。社区对平滑迁移 Claude Code 工作流有持续诉求。
- **配置热重载** — #8751 高赞居首，开发者期望 agents/skills/commands 修改后无需重启。长期未解决可能成为采用障碍。
- **语音输入** — #41413 提出为终端 AI 工具（OpenCode CLI、Claude Code、Cursor）构建 MCP 语音输入服务。属于新兴方向。
- **斜杠命令增强** — #43454 请求 `/reload` 命令支持自动恢复会话上下文，与 #6719 及搁置的 PR #9871 相关。
- **v2 稳定性** — 出现 #47458、#46498、#32825 等 v2 功能/回归问题，集中在插件工具、URL 解析和配置加载。
- **LSP 内置扩展** — #25735 请求将 `circleci-yaml-language-server` 纳入内置 LSP 服务。

## 开发者关注点

- **用量统计与配额计算不透明**：#46365（Go 套餐 $24.5 即显示 100%）与 #47142（Total 百分比为各模型简单相加，忽略配额差异）共同指向仪表盘统计逻辑缺陷。
- **VSCode 扩展剪贴板失效**：#25772 与 #39588 均报告 macOS 下 Cmd+C/Cmd+V 无效（Beta 扩展 v0.1.1），只能通过编辑菜单操作，两个 issue 均已关闭但根因修复尚不明确。
- **插件安装脆弱性**：#44684 中 1.18.21 因 npm 注册表拉取超时导致插件静默失效、启动挂起，且 headless 模式受影响。
- **子会话管理可见性不足**：#29175 指出直接通过 `session.create(parentID)` 创建的子会话不会出现在父会话 UI 中（TUI 仅从原生 `task` 工具元数据发现子代理）。
- **free 模型配额不透明**：#15585 中用户对免费模型是否存在用量限制及限制标准提出质疑，引发 54 条讨论。
- **WebUI 版本号显示错误**：#42920 中 WebUI 始终比实际版本低一个版本号（如 1.18.18 显示为 1.18.17）。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-09-05

## 今日速览

今日 Pi 社区的核心议题集中在**打包与发布质量问题**（#9132 已确认 0.85.0 包缺失运行时依赖，并有两组对应修复 PR），以及**大量围绕 TUI 交互细节的打磨**（滚动速度、剪贴板处理、光标渲染等）。此外，**新的模型提供商支持**（Amazon Bedrock Mantle、Meta Muse）仍在持续推进中，是最受关注的功能新增方向。

## 版本发布

过去 24 小时内无新版本发布。但请注意：版本 0.85.0 存在已确认的打包缺陷——`dist/cli.js` 静态导入了未声明的依赖 `@earendil-works/pi-server`，导致全新安装无法正常使用。修复正在进行中（见下方 PR #9170、#9172）。

## 社区热点 Issues

### 1. [#5363：为 OpenAI 兼容模型新增 amazon-bedrock-mantle provider](https://earendil-works/pi Issue #5363)
- **类型/状态**：功能请求，[inprogress]
- **热度**：18 条评论，👍 15（今日最高热度之一）
- **要点**：提议在 `packages/ai` 中新增 `amazon-bedrock-mantle` provider。现有 `amazon-bedrock` 走 Converse API，而 Bedrock Mantle 模型提供 OpenAI 兼容接口。该 Issue 已进入实现阶段，值得关注。

### 2. [#7730：Mac OS 上长时间会话导致高 CPU 占用](https://earendil-works/pi Issue #7730)
- **类型/状态**：bug，[OPEN]
- **热度**：15 条评论，👍 10
- **要点**：macOS 上运行 Pi 时 CPU 飙升至 50–110%，内存占用 600–800MB，且与上下文大小相关。性能问题是开发者核心痛点，讨论活跃。

### 3. [#9132：0.85.0 版本发布包静态导入未声明的依赖](https://earendil-works/pi Issue #9132)
- **类型/状态**：bug，[CLOSED]
- **热度**：5 条评论，👍 5
- **要点**：`@earendil-works/pi-coding-agent@0.85.0` 的 npm 包中，非打包构建 `dist/cli.js` 静态导入了 `@earendil-works/pi-server`，但该依赖未在 package.json 中声明，导致全新安装无法运行。已关闭，修复中。

### 4. [#6300：Windows 上输入行每次击键都重绘（每个字符出现在新行）](https://earendil-works/pi Issue #6300)
- **类型/状态**：bug，[OPEN]
- **热度**：8 条评论
- **要点**：Windows 10 下 TUI 输入每敲一个字符就换行重绘，cmd.exe 和 Windows Terminal 均受影响。Windows 平台体验的稳定性仍是短板。

### 5. [#8896：`/export HTML` 静默丢弃发送给模型的上下文（display:false 自定义消息）](https://earendil-works/pi Issue #8896)
- **类型/状态**：bug，[OPEN]
- **热度**：7 条评论
- **要点**：HTML 导出时静默丢弃 `display: false` 的自定义消息。该标记在文档中被标注为仅供 TUI 显示控制，模型实际仍会收到这部分上下文——导出结果与真实会话内容不一致，属于数据完整性问题。

### 6. [#5593：Tab 补全斜杠命令后追加尾随空格，阻塞参数自动补全](https://earendil-works/pi Issue #5593)
- **类型/状态**：bug，[inprogress]
- **热度**：7 条评论
- **要点**：Tab 补全（如 `/sb-l<Tab>` → `/sb-list `）会自动补一个空格，导致后续再按空格无法触发参数自动补全。交互细节问题，已标记 inprogress。

### 7. [#8760：OpenRouter `:free` 模型报 400 —— Pi 发送的 max_tokens 超出提供商上限](https://earendil-works/pi Issue #8760)
- **类型/状态**：bug，[OPEN]
- **热度**：5 条评论
- **要点**：Pi 将模型目录中的 `maxOutputTokens` 值直接作为 `max_tokens` 发送，但上游免费模型硬限制更低，导致所有请求 400。**新模型接入生态友好度**问题，直接影响免费模型用户。

### 8. [#8720：空白输出的工具结果永久卡死会话（HTTP 400）](https://earendil-works/pi Issue #8720)
- **类型/状态**：bug，[OPEN]
- **热度**：4 条评论
- **要点**：工具返回纯空白内容（如 Windows 上 bash 输出 `"\r\n"`）时，原样发送给提供商会被 OpenAI 兼容 API 拒绝（HTTP 400），导致会话永久卡死。健壮性缺陷，对 Windows 用户影响尤甚。

### 9. [#9052：全屏模式固定输入框很好，但滚轮滚动比普通模式慢 3 倍](https://earendil-works/pi Issue #9052)
- **类型/状态**：功能/体验，[OPEN]
- **热度**：5 条评论，👍 2
- **要点**：全屏模式滚动速度明显慢于普通模式，影响长会话浏览效率。已有对应 PR #9166 提出加速方案。

### 10. [#9180：`/model` 在后台目录刷新后保留过期的 scoped 模型](https://earendil-works/pi Issue #9180)
- **类型/状态**：bug，[CLOSED]
- **热度**：2 条评论
- **要点**：远程目录后台刷新新增的模型（如 `openai-codex/gpt-6-astra`）不会立即出现在 `/model` 选择器的 scoped 视图中，需重启或手动触发。今日创建即关闭，修复效率高。

## 重要 PR 进展

### 1. [#9170：声明 pi-server 运行时依赖（修复 0.85.0 打包问题）](https://earendil-works/pi PR #9170)
- fix(coding-agent)，[OPEN]
- 修复 0.85.0 全新安装无法导入公共包根的问题：`dist/index.js` → `main.js` 静态导入 `experimental/server.js` → 导入 `@earendil-works/pi-server`，而该依赖未声明。

### 2. [#9172：防止破坏性包根发布再次发生](https://earendil-works/pi PR #9172)
- fix(coding-agent)，[OPEN]
- 依赖 #9170，作为后续防护：增加打包机制层面的检查，避免同类发布缺陷再次出现。反映了社区对发布质量的信任危机。

### 3. [#9163：简化 TUI 剪贴板处理](https://earendil-works/pi PR #9163)
- feat(tui)，[OPEN]，作者 mitsuhiko
- 最初计划是移入剪贴板库以支持 NixOS 等平台构建，但作者认为现有 Rust 库过重，转而直接简化实现。对跨平台系统兼容性有积极意义。

### 4. [#9138：macOS 上使用 Cmd+V 粘贴剪贴板图片](https://earendil-works/pi PR #9138)
- feat(coding-agent)，[CLOSED]
- 修复 macOS 上图片粘贴仅支持 `Ctrl+V`、违反平台惯例的问题。新版在 darwin 上绑定 `super+v`，保留 `ctrl+v` 兼容。平台交互一致性的修复。

### 5. [#9096：新增 Meta Provider（Muse 订阅 OAuth）](https://earendil-works/pi PR #9096)
- feat(ai,coding-agent)，[OPEN]
- 解决 #7543。作者指出两项特殊之处：refresh token 机制不寻常（从 identity token 每日重新铸造而非滚动刷新）；当前流式支持有限。新模型提供商的接入是持续热门方向。

### 6. [#9166：Alt+滚轮加速滚动 5 倍](https://earendil-works/pi PR #9166)
- feat(tui)，[OPEN]
- 按住 Alt 时滚动速度提升 5 倍，直接解决 #9052 中全屏模式滚动慢的问题。实现简单直接。

### 7. [#9164：目录刷新后保留模型选择器选中项](https://earendil-works/pi PR #9164)
- fix(coding-agent)，[CLOSED]
- 用户在 `/model`（或 Ctrl+L）浏览时后台刷新模型目录，当前选中项可能被重置。此 PR 修复该竞态条件。

### 8. [#9179：压缩期间拒绝树导航操作](https://earendil-works/pi PR #9179)
- fix(coding-agent)，[OPEN]
- 会话压缩（compaction）进行中拒绝新的树导航，防止两个操作竞争导致状态错乱。保持压缩结果在原始分支上。与 #9155（拒绝压缩期 prompt）构成系统性的会话状态保护。

### 9. [#9157：渲染会话树搜索光标](https://earendil-works/pi PR #9157)
- fix(coding-agent)，[OPEN]
- 在会话树的 "Type to search" 输入框中补充光标块，与恢复会话搜索体验对齐。交互一致性的 UI 打磨。

### 10. [#9149：模型选择器保存键位与键位显示统一](https://earendil-works/pi PR #9149)
- fix(coding-agent)，[CLOSED]
- `/model` 改用 `app.models.save` 替代硬编码 `Ctrl+S`，新增 `app.thinking.save`，并在 `/scoped-models` 中使用 `keyDisplayText()` 统一快捷键文案。可配置性提升，也避免了与终端默认键位的冲突。

## 功能需求趋势

| 方向 | 代表 Issue / PR | 热度信号 |
|---|---|---|
| **新模型/提供商支持** | #5363（Bedrock Mantle）、PR #9096（Meta Muse） | Issue #5363 获 👍 15 且已 inprogress，是社区最期待的功能方向；Meta Provider 的接入也在推进中 |
| **TUI 交互体验打磨** | PR #9163（剪贴板简化）、#9166（Alt+滚轮加速）、#9157（搜索光标渲染）、#9149（键位统一）、#9138（Cmd+V 粘贴） | 过去 24 小时 PR 密度最高的一类，涉及滚动速度、键位约定、光标可见性等细节，说明基础功能稳定后社区开始聚焦交互质感 |
| **会话状态健壮性** | PR #9179（压缩期拦截树导航）、#9155（压缩期拦截 prompt）、#8887 类似趋势 | 多发生在会话压缩、切换（`/new`、Ctrl+C）等竞态窗口，社区正在系统性补齐会话生命周期中的状态竞争漏洞 |
| **OpenAI 兼容层治理** | #8760（max_tokens 超限）、#8720（空白工具输出 400） | 随着用户接入更多第三方提供商（OpenRouter、Bedrock Mantle 等），兼容层参数校验与容错成为高频需求 |

## 开发者关注点

- **发布质量与信任问题（当日最尖锐痛点）**：#9132 确认 0.85.0 的 npm 包存在静态导入未声明依赖的问题，新装即坏。Issue 与修复 PR（#9170、#9172）几乎同时出现，说明社区响应迅速，但也反映出发布校验流程存在缺口——开发者对 npm 包可直接安装可用的基本预期被打破。
- **Windows 平台体验仍是最短板**：#6300（输入逐字换行）打开已两月仍在排期，另有 #8720 专门指出 Windows 上 bash 输出 `"\r\n"` 会触发 400 错误卡死会话。Windows 用户占社区一定比例，但这些问题迟迟未修复，可能限制用户基数扩展。
- **性能问题需要更积极的干预**：#7730（macOS 高 CPU）已有 15 条评论、10 个 👍 但仍然 OPEN，涉及上下文增长与资源消耗的非线性关系，是长会话用户的核心痛点。随上下文变长，CPU 在 50–110% 间波动且内存达 600–800MB，说明 TUI 渲染或上下文管理存在可能的指数级开销。
- **后台刷新与会话操作的竞态频繁触发问题**：#9180（模型目录刷新丢选中项）、PR #9179/#9155（压缩期间状态竞争）等多条 Issue/PR 指向同一类问题——后台异步任务（目录刷新、压缩）与用户前台操作（导航、选择）之间的竞态条件处理不完善。社区已开始系统性修复，值得 maintainer 统一规划。
- **导出数据完整性问题受关注**：#8896 指出 `/export HTML` 静默丢弃 `display: false` 的自定义消息，而模型实际见过这些内容——导出的会话记录对审计、调试而言不完整且无提示，属于"静默数据丢失"型缺陷，用户信任成本高。

> 注：Issue #3218（google-vertex ECONNRESET）、#5137、#5904、#6978、#8857、#9036、#9051、#9073、#9089 等在本日更新中均标记为 CLOSED 且无进一步讨论，多为 long-tail 关闭，未列入重点。完整列表见仓库 [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-05

## 1. 今日速览

今日社区焦点集中在 **web-shell 导出体积优化** 与 **CI 可靠性治理** 两大方向：多条 Issue 围绕 HTML 导出文件体积过大（19.5 MB → 目标缩小至只读所需）展开讨论，并有多个对应 PR 在推进中。此外，多个 main 分支 CI 失败被自动追踪，合并队列长期停摆的问题持续引发关注。夜间版 v0.23.0-nightly.20260905 已发布，新增 web-shell 动态工作流可视化能力。

## 2. 版本发布

**v0.23.0-nightly.20260905.e3d26283e6**（2026-09-05）

主要变更：
- `feat(web-shell)`: 可视化并管理动态工作流运行（PR #10594）
- `perf(web-shell)`: 会话派生性能优化

## 3. 社区热点 Issues（Top 10）

### #11031 — [P1] 导出 HTML 时不再嵌入完整 Web Shell 运行时
- **作者**: yiliang114 | 评论: 4 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/11031)
- **状态**: OPEN | 创建: 2026-09-04 | 更新: 2026-09-05
- **重要性**: 当前 `/export html` 架构将完整浏览器依赖图嵌入每个导出文件，即使空会话也生成约 19.5 MB 的文档。这是 export-data 路线图中的 P1 问题，严重制约导出文档的可用性和传播性。
- **社区反应**: 与其关联的 #11091 和 PR #11038 已展开一轮修复（将渲染器从包根入口改为只读所需的最小依赖），但仍未完全解决，讨论仍在进行。

### #11091 — mermaid（约 6 MB）仍被扁平化进导出转录渲染器
- **作者**: yiliang114 | 评论: 5 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/11091)
- **状态**: OPEN | 创建: 2026-09-05 | 更新: 2026-09-05
- **重要性**: 继承 #11031/#11038，导出脚本已改为外部加载，SRI 锁定版本；但 mermaid 仍被打入渲染包，增加约 6 MB，是当前导出体积的另一个大头。
- **社区反应**: 5 条讨论，需进一步分流哪些依赖被扁平化。

### #11069 — 在现有实时 agent 列表中显示 Agent Team 成员
- **作者**: yiliang114 | 评论: 3 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/11069)
- **状态**: OPEN | 创建: 2026-09-05 | 更新: 2026-09-05
- **重要性**: Agent Team 队友目前注册为独立 Agent 标签页，而 Main 视图中的常驻 `LiveAgent...` 列表不会显示队友。该功能请求旨在让多智能体协作更透明，与 multi-agent 路线图直接相关。
- **社区反应**: 需求明确，UI 层与交互层需要协同改动。

### #5823 — /loop cron 任务静默触发，无可见性，模型无法列出或停止自己的定时任务
- **作者**: interconnectedMe | 评论: 6 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/5823)
- **状态**: CLOSED | 创建: 2026-06-24 | 更新: 2026-09-05
- **重要性**: 用户数天后发现在 VSCode 每次新会话中，之前测试中添加的 cron 一直静默触发，无法感知或干预。正好与新版中 cron 交互测试期望和 web-shell 工作流可视化目标相呼应。
- **社区反应**: 6 条评论，问题已关闭，但相关体验问题在新 UI 中仍在改进中。

### #8227 — Windows 下 @-文件读取 O_NOFOLLOW 保护失效
- **作者**: yiliang114 | 评论: 6 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/8227)
- **状态**: CLOSED | 创建: 2026-07-31 | 更新: 2026-09-05
- **重要性**: Windows 不支持 `O_NOFOLLOW`，因此 #7206 的符号链接保护在 Windows 上形同虚设，dev/ino 身份校验也无效。安全（scope/security）+文件操作（scope/file-operations）。
- **社区反应**: 6 条评论，welcome-pr 标签标明可引导新贡献者参与。

### #10254 — [P1] CI：合并队列自 2026-07-02 起未运行，main 无必要检查
- **作者**: yiliang114 | 评论: 3 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/10254)
- **状态**: OPEN | 创建: 2026-08-27 | 更新: 2026-09-05
- **重要性**: CI 治理的核心问题：分支保护只要求审查，不要求任何状态检查；且基于旧 base 的绿色 PR 可直接合入，导致语义冲突悄然进入 main。需人工介入。
- **社区反应**: 标注 `ready-for-human`，属于工程基建质量高风险项。

### #4441 — 微信 bot 发送图片报错（Windows 路径限制）
- **作者**: lonesurvivor1984 | 评论: 5 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/4441)
- **状态**: CLOSED | 创建: 2026-05-22 | 更新: 2026-09-05
- **重要性**: Windows 用户路径 D:\WorkGroup\... 下的图片被拒绝发送（"Image path outside allowed directories"），涉及文件操作 + Windows 兼容性。
- **社区反应**: 5 条评论，已关闭。

### #9348 — API 错误：模型响应泄露 thinking tags
- **作者**: youyud | 评论: 4 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/9348)
- **状态**: CLOSED | 创建: 2026-08-17 | 更新: 2026-09-05
- **重要性**: 内容生成过程中端常出现"Model response leaked thinking tags"，需要 Ctrl+Y 重试，影响任务连贯执行。Qwen Code 0.21.13。
- **社区反应**: 4 条评论，已处理。

### #11045 — [P1] Cerebras OpenAI 兼容提供方：每次多轮请求失败
- **作者**: mdm-sfo | 评论: 3 | 👍: 0 | [链接](https://github.com/QwenLM/qwen-code/issues/11045)
- **状态**: CLOSED | 创建: 2026-09-04 | 更新: 2026-09-05
- **重要性**: 首个回合成功但后续回合全挂，原因是请求中带入了 `reasoning_content`，导致 400 无 body。对第三方 OpenAI 兼容服务支持有影响。
- **社区反应**: 3 条评论，说明请求清洗未包含 reasoning 保留策略。

### #5883 — 将聊天面板收敛到 web-shell（Web/VSCode/桌面统一）
- **作者**: qqqys | 评论: 4 | 👍: 1 | [链接](https://github.com/QwenLM/qwen-code/issues/5883)
- **状态**: OPEN | 创建: 2026-06-26 | 更新: 2026-09-05
- **重要性**: 提案型 Issue：将聊天面板（输入区+会话流）统一落于 web-shell，跨 VSCode webview 与桌面复用。与 #11069、web-shell 演进直接相关，也影响多端交互一致性。
- **社区反应**: 4 条评论，👍 1 人赞成，虽是提案但为 web-shell 组件方向定了基调。

## 4. 重要 PR 进展（Top 10）

### #11095 — fix(release): 解除预览质量门禁
- **作者**: yiliang114 | 创建: 2026-09-05 | [链接](https://github.com/QwenLM/qwen-code/pull/11095)
- **内容**: 将已退役的 WebUI 依赖检查补入 post-merge lint 预期载荷；发布质量静态检查时限上调至 90 分钟，不跳过任何检查。

### #11075 — fix(core): 加固 Config.initialize() 聚合路径
- **作者**: yiliang114 | 创建: 2026-09-05 | [链接](https://github.com/QwenLM/qwen-code/pull/11075)
- **内容**: #11037 合并后遗留的 4 条 review 建议修复：join 分支在调用方信号已中止时快速失败。

### #11080 — ci: 为 deferred-findings 追踪 Issue 补充 PR 上下文
- **作者**: yiliang114 | 创建: 2026-09-05 | [链接](https://github.com/QwenLM/qwen-code/pull/11080)
- **内容**: 自动修复循环为每个 PR 生成一个追踪 Issue，此前标题固定为“Deferred review findings”，现补上对应 PR 链接与指派信息。

### #11038 — fix(export): 将导出转录渲染器收缩到只读转录所需
- **作者**: yiliang114 | 创建: 2026-09-04 | [链接](https://github.com/QwenLM/qwen-code/pull/11038)
- **内容**: 从包根入口打包改为按只读转录所需最小集打包，避开 WebShellTranscript 的深层依赖，回应 #11031。

### #10999 — feat(core): 为模型定义声明推理能力
- **作者**: callmeYe | 创建: 2026-09-04 | [链接](https://github.com/QwenLM/qwen-code/pull/10999)
- **内容**: 为现有 provider model 定义加入声明式 reasoning 能力，贯穿模型注册表→ACP→会话恢复→工作区预览→TUI effort 控制→OpenAI 兼容最终输出。

### #11083 — fix(serve): workspace 为 home 时从用户 domain 读 channel settings
- **作者**: yiliang114 | 创建: 2026-09-05 | [链接](https://github.com/QwenLM/qwen-code/pull/11083)
- **内容**: daemon 的 workspace 是用户 home 时，channel 配置在管理 API 与 Web Shell 中不可见；改为回退到用户 settings 范围。

### #11078 — docs(core): 解释 Todo 依赖语义为何不置于 flag 之后
- **作者**: yiliang114 | 创建: 2026-09-05 | [链接](https://github.com/QwenLM/qwen-code/pull/11078)
- **内容**: 在两个关键分支添加注释：`hasActivePlan` 处缺少 `isSessionWorkflowEnabled()` 检查是有意为之；保留分支说明触发条件及 `[]` 仍表示无活动计划。

### #11080 → 上述; #10962 — feat(web-shell): 将浏览器授权的本地目录桥接到会话
- **作者**: wenshao | 创建: 2026-09-03 | [链接](https://github.com/QwenLM/qwen-code/pull/10962)
- **内容**: 当 daemon 运行在非本地（云、容器、共享主机）时，将用户浏览器授权的一格本地目录桥接到远程会话，使 agent 可访问本机文件系统。

### #10136 — feat(review): 在 critical posture 下将复评轮次切换为 fix-audit 形态
- **作者**: wenshao | 创建: 2026-08-26 | [链接](https://github.com/QwenLM/qwen-code/pull/10136)
- **内容**: multi-round `/review` 的复评若可预判将进 critical-only posture 且存在可用的增量锚点，则以更窄的 fix-audit 形态替代完整形状，检查确认修复并聚焦泄漏（leak）。

### #9940 — fix(review): 将复评 findings 回复到其原始线程并关闭已解决项
- **作者**: wenshao | 创建: 2026-08-24 | [链接](https://github.com/QwenLM/qwen-code/pull/9940)
- **内容**: multi-round review 中仍在的 finding 以回复形式落在原评论线程，而非新开 inline 评论；若轮次判定前项已修复，则将其解析/关闭。

## 5. 功能需求趋势

从全部 Issues 中提炼出的社区关注方向：

1. **Web Shell 平台化收敛**：多个 Issue 指向将聊天面板（#5883）、Agent 列表（#11069）、web-shell 运行时（#11031/#11091）统一到 Web Shell 或做依赖瘦身。说明 Web Shell 正成为多端交互核心，但组件边界和依赖管理未跟上。
2. **导出文档轻量化**：`export-data` 路线图多线程推进，核心诉求是让导出 HTML 体积从 MB 级降到 KB 级 — 空会话 19.5 MB 显然不可接受。
3. **后台自动化可见性**：cron / 定时任务（#5823, #10904）暴露调度可观测性缺口：模型既不能列出也不能停止自己的任务；用户只能被动接受静默执行。web-shell 动态工作流可视化是目前的应对方向。
4. **CI/发布质量门禁强化**：多起 CI 失败自动上报（#11043, #11087, #11088）、合并队列停摆（#10254）、发布质量门超时（#11095）。工程系统正在努力把质量门落到实处。
5. **第三方 provider 推理字段兼容**：Cerebras 事件（#11045）说明 reasoning_content 的回传需对齐各 OpenAI 兼容端点，防止多轮对话直接 400。

## 6. 开发者关注点

- **聊天/cron 静默性**：最痛的是 agent 在后台执行定时任务却无提示，VSCode 会话被污染，无法干预或停止。
- **CI 红灯形同虚设**：continue-on-error 吞掉失败；main 合并不需要状态检查，语义冲突悄然落地。开发者希望「红的就是红的」。
- **Windows 路径与文件权限**：图片发送越界（#4441）、`O_NOFOLLOW` 缺失（#8227）、输出语言文件不可写时崩溃（#10455）——Windows 上仍存在系统性文件访问边界问题。
- **本地目录授权**：当 daemon 运行位置与用户本机分离（云端容器），如何安全、便捷地把用户目录授信给 agent 成为高频诉求。
- **多轮请求稳定性**：thinking tag 泄漏（#9348）与 Cerebras 400 事件（#11045）共同指向请求构造/清洗在多轮与多端点间的稳定性不足。

---

*报告基于 2026-09-05 GitHub 数据生成，仅提取源头信息。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## DeepSeek TUI 社区动态日报 — 2026-09-05

> 数据来源：[github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（Codewhale / DeepSeek-TUI 社区）

---

### 1. 今日速览

**Codewhale v0.9.12 正式发布**，项目已从 `deepseek-tui` 全面转向 Codewhale 品牌（npm 旧包 `deepseek-tui` 已弃用）。本次发布附带多项关键修复，包括 Ollama 32K 上下文窗口输入预算坍缩问题、todo 列表历史记录污染对话流问题，以及 v0.9.12 发布过程中 CI 超时导致 artifact 丢失的修补。

---

### 2. 版本发布

**Codewhale v0.9.12**（此版本在数据中以 Release 和 PR #5884「v0.9.12 release candidate」双重确认）

关键信息：
- Codewhale 是 Shannon Labs 的正式产品名称，`codewhale` 命令 / npm 包 / 发布资产名称保持小写技术标识符
- 旧 npm 包 `deepseek-tui` **已弃用，不再接收后续发布**
- 从 v0.8.x 旧版 `deepseek` / `d` 迁移的用户需要关注

相关 PR：
- **#5884** — v0.9.12 候选版的冻结源代码（本地集成线自 2026-09-03 起的 dogfood 构建，rebase 合并至公开 `main` c042ea2d）
- **#5885** — v0.9.12 tag 推送时 release.yml parity job 在 20 分钟超时前被取消，导致 rust-cache 后保存阶段未能完成，artifacts/release/npm/docker/homebrew 均未产出。此 PR 修复抬高 parity 作业的缓存保存空间约束
- **#5886** — 将 v0.9.12 记录为已发布版本，网站 vitest 407 项测试通过

---

### 3. 社区热点 Issues（10 个精选）

**📌 #5820 — [已关闭] Ollama provider：32K 本地模型的输入预算坍缩至 1024 tokens**
作者: slowly247 | 评论 5 | 👍 0
**为什么重要：** 默认输出预留 64K 反而将 32K 上下文窗口的输入预算挤压到 1024 tokens，属于严重影响本地模型可用性的 bug。5 条评论，已关闭说明已获修复。
🔗 https://github.com/Hmbown/Codewhale/issues/5820

**📌 #5573 — [开放] v0.9.12 milestone tracker（从这里开始）**
作者: Hmbown | 创建 2026-08-23 | 更新 2026-09-05 | 评论 24
**为什么重要：** 官方里程碑总览，包含 2026-09-01 创始人决策、slice 表、gate、PR/重装/自测步骤。社区路线图导航的第一入口。
🔗 https://github.com/Hmbown/Codewhale/issues/5573

**📌 #5871 — [已关闭] [bug] 待办列表历史在对话记录中堆积，无法在不丢失上下文的情况下清空**
作者: ronohara | 评论 1
**为什么重要：** 每次 `todo_write` 调用都会渲染完整快照为永久卡片，「下推历史」导致对话流被持续污染。仅在 1 天后即关闭，修复 PR #5873 同日合入。
🔗 https://github.com/Hmbown/Codewhale/issues/5871

**📌 #5864 — [已关闭] serve --acp 未实现 ACP session/list 与 session/load**
作者: senka9h | 评论 2
**为什么重要：** ACP 客户端无法枚举或恢复已有 Codewhale 会话，直接阻碍编辑器生态集成完整度。
🔗 https://github.com/Hmbown/Codewhale/issues/5864

**📌 #5863 — [已关闭] [增强] ACP 函数增强：暴露会话配置选项**
作者: Lujc0523 | 评论 3
**为什么重要：** `serve --acp` 不暴露 modes / models / configOptions，编辑器客户端无法展示或切换工作模式。与 #5864 共同指向 ACP 协议实现的系统性缺口。
🔗 https://github.com/Hmbown/Codewhale/issues/5863

**📌 #5769 — [已关闭] [bug] 网络错误有时导致引擎停止**
作者: ronohara | Linux Mint 环境 | 评论 3
**为什么重要：** 网络抖动直接杀死引擎进程，影响所有平台的稳定性，社区用户报告的典型可靠性痛点。
🔗 https://github.com/Hmbown/Codewhale/issues/5769

**📌 #5482 — [开放] [文档] EPIC(docs)：审阅、部分重构并完整本地化为中文**
作者: SparkofSpike | 评论 2
**为什么重要：** CodeWhale 中文用户群体快速增长，但大量 `docs/` 目录文档仅有英文。机器翻译有误差风险，需要人工审阅重建。
🔗 https://github.com/Hmbown/Codewhale/issues/5482

**📌 #5846 — [开放] 语音输入：设备端 STT 默认、API-key 回退、快捷键与电平动画**
作者: Hmbown | 评论 1
**为什么重要：** 官方规划的功能方向。当前 reasoning 块仅支持鼠标点击展开（无键盘路径），语音输入应遵循同样的内联交互模式。反映出从纯 TUI 向多模态交互演进的信号。
🔗 https://github.com/Hmbown/Codewhale/issues/5846

**📌 #5849 — [开放] 验证引擎和 App 都从实时目录解析模型**
作者: Hmbown | 评论 1
**为什么重要：** 确认 TUI/引擎与 Web/桌面应用均通过实时 `/v1/models` 目录发现解析模型行、reason tier 和 Muse Spark 1.3 id，无硬编码，且当目录过期/不可达时优雅降级。涉及架构正确性验证。
🔗 https://github.com/Hmbown/Codewhale/issues/5849

**📌 #5853 — [已关闭] muse-spark-1.3 reasoning effort + Codex XHigh/Ultra picker 行**
作者: Hmbown | 评论 1
**为什么重要：** `apply_openai_reasoning_effort` 仅匹配 1.1/1.2/1.2-contributor，1.3 收到零 reasoning_effort；扩展家族匹配（前缀而非每版本字面量），使目录发现的 1.3 继承方言。
🔗 https://github.com/Hmbown/Codewhale/issues/5853

---

### 4. 重要 PR 进展（10 个精选）

**🚀 #5884 — [已合并] release: Codewhale v0.9.12 candidate**
作者: Hmbown
**内容：** v0.9.12 发布候选分支（冻结源码），自 2026-09-03 起的 dogfood 构建 rebase 至公开 main（包含 #5882、#5873）。
🔗 https://github.com/Hmbown/Codewhale/pull/5884

**🔧 #5885 — [已合并] ci(release): give the parity job room for its cache save**
作者: Hmbown
**内容：** v0.9.12 tag 推送时 parity job 在 20 分钟超时被取消（rust-cache post-run 保存阶段失败），导致 artifacts/release/npm/docker/homebrew 全部缺失。此 PR 解除缓存保存的空间/时间瓶颈。
🔗 https://github.com/Hmbown/Codewhale/pull/5885

**🔧 #5886 — [开放] web: record v0.9.12 as the published release**
作者: Hmbown
**内容：** 发布后事实同步——latestPublishedRelease → v0.9.12；trust/FAQ/roadmap 文案从「已发布的 0.9.11 release 先询问」改为「更早的 0.9.11 release 先询问」。网站 vitest 407 项通过。
🔗 https://github.com/Hmbown/Codewhale/pull/5886

**🔧 #5883 — [已合并] fix(tui): derive local output budget from route window**
作者: dajiaohuang
**内容：** 当模型无静态目录行时，从路由声明的上下文窗口推导自动输出预留；保留显式操作员覆盖、路由输出限制、兼容性上限和现有窗口化逻辑。直接针对 #5820 一类问题的根因修复。
🔗 https://github.com/Hmbown/Codewhale/pull/5883

**🔧 #5873 — [已合并] fix(tui): replace stale todo transcript snapshots**
作者: yiheng-kkk
**内容：** 仅保留最新成功 `todo_write` 快照在可见对话中；隐藏空的当前快照而不清空存储的对话上下文。**Fixes #5871**。
🔗 https://github.com/Hmbown/Codewhale/pull/5873

**🔧 #5869 — [已合并] fix(shell): preserve task origin in job snapshots**
作者: zhuowp
**内容：** 后台 shell 作业快照和完成事件缺乏稳定 origin 标识符。同一会话内多作业时，宿主依赖命令文本等启发式来协调更新，可能投射错误上下文到错误的作业上。为作业快照增加稳定的 origin 跟踪。
🔗 https://github.com/Hmbown/Codewhale/pull/5869

**🔧 #5739 — [已合并] fix(providers): retire Antigravity to a non-runnable tombstone with a Codewhale-owned clear path (PROD-002)**
作者: Hmbown
**内容：** Antigravity 不再是任何位置可选 provider。保留不可运行的遗留 tombstone（旧配置仍可解析）+ 一条 Codewhale 拥有的清晰路径。不触碰用户体验层。
🔗 https://github.com/Hmbown/Codewhale/pull/5739

**🔧 #5865 — [已合并] refactor(tui): re-land FEAT-020 plugin command shapes on main**
作者: aboimpinto
**内容：** 在最新 main 上重新落地 FEAT-020 插件命令形状。无独立 Issue（由 umbrella #5316 跟踪，需保持开放以完成剩余命令分解工作）。原始实现 PR #5657。
🔗 https://github.com/Hmbown/Codewhale/pull/5865

**🔧 #5882 — [已合并] test: restore contributor CI baseline and process lifecycle checks**
作者: Hmbown
**内容：** 恢复 contributor CI 基线使无关 PR 可在可工作的基线上评估。插件生命周期 fixture 现提供所需 trust token，Unix 符号链接测试在 Windows 上保持关闭，指针断言使用当前紧凑 footer。
🔗 https://github.com/Hmbown/Codewhale/pull/5882

**🔧 #5880 / #5881 / #5875 / #5876 — [开放] Dependabot 批量依赖升级（Rust 及 GitHub Actions）**
作者: dependabot[bot]
**内容：** jsonschema 0.46.10→0.52.1、tower-http 0.7.0→0.7.1、base64 0.22.1→0.23.1、lru 0.18.2→0.18.3、softprops/action-gh-release 3.0.2→3.0.3。jsonschema 跨 0.46→0.52 的大版本跳跃值得关注。
🔗 #5880 | #5881 | #5875 | #5876

---

### 5. 功能需求趋势

从全部 13 条 Issue 中提炼出以下社区关注方向：

1. **ACP 协议完整度（编辑器生态集成）** — 两条 Issue（#5863、#5864）均指向 `serve --acp` 在会话管理（session/list、session/load）与配置暴露（modes/models/configOptions）上的系统性缺口。社区对编辑器客户端的互操作性需求集中爆发，且两条均在 2 天内关闭，说明维护者响应迅速。

2. **本地模型与离线能力** — #5820（Ollama 32K 上下文预算坍缩）和 #5846（设备端 STT 语音输入）共同指向本地优先 / 离线能力增强方向。前者是对本地模型支持质量的 bug 修复，后者是新的端侧能力规划。

3. **文档中文本地化** — #5482 为 EPIC 级文档中国化计划，反映出快速增长的中文用户基础正在成为社区的重要组成部分。

4. **对话体验与信息架构** — #5871（todo 列表污染对话流）揭示工具调用快照在长会话场景下的信息架构问题，触达「如何在不丢失上下文的前提下保持对话清洁」的产品设计深层议题。

5. **新模型支持与推理调优** — #5853（muse-spark-1.3 reasoning effort 继承）和 #5849（模型目录实时解析验证）表明 Codewhale 正积极接入新模型（Muse Spark 1.3）并重构模型解析架构为目录驱动模式。

6. **编译器自由（Rust 生态）** — #5872 提议添加 `rusty_alloc` 作为 mimalloc 旁的可选 feature，降低无 C 编译器的贡献者参与门槛，指向社区对构建依赖轻量化的诉求。

---

### 6. 开发者关注点

从 Issues 和 PR 中提炼的开发者高频痛点：

- **网络稳定性**（#5769）：网络错误导致引擎停止——社区用户在多平台（Linux Mint 等）上遇到的可靠性问题，被修复后关闭。
- **本地 LLM 上下文管理**（#5820）：Ollama 提供商的输出预留逻辑与实际窗口不匹配，导致输入预算坍缩至 1024 tokens——默认值设计需要更智能的动态推导（PR #5883 从路由窗口派生）。
- **会话状态污染**（#5871/#5873）：工具调用产生的快照卡片在对话记录中持续堆积，用户需要「清空但不丢上下文」的中间态，当前实现无法兼顾。
- **后台作业 Origin 追踪**（#5869）：多作业并发时，宿主靠命令文本猜测作业来源，需要稳定的 origin 标识符。
- **老用户迁移路径**：v0.9.12 Release 说明明确 legacy `deepseek-tui` npm 包已弃用，v0.8.x 用户面临迁移成本，公告需要清晰传达升级路径。
- **CI 基础设施稳定性**（#5885/#5882）：发布流水线 20 分钟超时导致发布产物丢失、contributor CI 基线损坏——直接影响社区贡献者的开发体验和发布节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*