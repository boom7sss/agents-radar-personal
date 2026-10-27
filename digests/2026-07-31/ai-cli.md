# AI CLI 工具社区动态日报 2026-07-31

> 生成时间: 2026-07-31 03:32 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告

**数据窗口：2026-07-31 社区动态 | 来源：各工具 GitHub 仓库公开 Issue/PR**

## 1. 生态全景

AI CLI 工具正从“单点执行助手”向“可信赖的自动化开发平台”过渡。过去 24 小时，9 款工具中仅 3 款发布新版本（Copilot CLI v1.0.77、OpenCode v1.18.10、Qwen Code nightly），其余均处于功能积累期。社区反馈高度集中在**多代理可靠性、上下文/会话管理、配额透明化、Windows 稳定性**四大共性问题上，说明工具链的核心矛盾已从“模型能力”转向“工程化成熟度”。与此同时，跨端协议（ACP、pi-protocol、runtime API）与安全加固（SSRF、凭据泄露、沙箱误报）成为新的竞争焦点。

## 2. 各工具活跃度对比

| 工具 | 重点 Issues 数¹ | 重点 PR 数¹ | 版本发布 | 最热 Issue（👍/评论） |
|---|---|---|---|---|
| Claude Code | 10 | 1（关闭） | 无 | #36151 跨账户切换（530👍/148💬） |
| OpenAI Codex | 10 | 10 | 无 | #35058 Codex Diff 崩溃（100👍/39💬） |
| Gemini CLI | 10 | 10 | 无 | #22323 subagent 误报成功（p1/12💬） |
| Copilot CLI | 11 | 0 | **v1.0.77** | #3767 超大附件楔死会话（13💬） |
| Kimi Code | 3 | 1 | 无 | #1283 Memory System（7💬） |
| OpenCode | 10 | 10 | **v1.18.10** | #5200 /compact 可配置（28👍/11💬） |
| Pi (pi-mono) | 10 | 10 | 无 | #7248 Wayland 剪贴板失效 |
| Qwen Code | 10 | 10 | **v0.21.1-nightly** | #8124 启动横幅缺行（9💬） |
| CodeWhale | 10 | 7 | **v0.9.2** | #2870 命令边界重构（19💬） |

¹ 指各日报中作为“重点/热点”列出的筛选条目，非当日全量数据。  
**Release 活跃度排序：** OpenCode（桌面端+核心更新）、Copilot CLI（Web OAuth+编辑器集成）、Qwen Code（CI+Web Shell 修复）、CodeWhale（完整 handoff 修复+品牌迁移）。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 社区具体诉求 |
|---|---|---|
| **Agent/子代理可靠性** | Gemini（挂起/误报成功）、Copilot（空响应/冻结）、Codex（子进程不唤醒主 Agent）、Qwen（Team 消息排队）、CodeWhale（子代理监督）、Claude（Hooks 静默不执行） | 后台任务状态不真实、子代理失控、任务完成通知缺失——**自动化可信度是当前最大共性痛点** |
| **上下文与会话管理** | Claude（中途转向）、Codex（附件污染会话）、Copilot（5MB 附件楔死）、Gemini（低信号无限重试）、Kimi（Memory System）、OpenCode（/compact 可配置）、Pi（自定义压缩）、CodeWhale（中断文本一致性） | 跨会话记忆、压缩策略可配置、会话状态可恢复、部分输出与权威上下文一致 |
| **配额/限流透明化** | Claude（per-model 限额）、Codex（重置时间/余额）、Copilot（credits 告警/持续消耗质疑）、Kimi（429 过载）、OpenCode（固定窗口 429 重试） | 将不透明的用量消耗变为可观测、可预测、可干预的指标 |
| **跨端/统一体验** | Claude（多账户+桌面/CLI 同步）、Copilot（Web OAuth 现代化）、Qwen（Web Shell 做桌面端）、CodeWhale（桌面应用+Runtime API）、Pi（远程会话协议）、Codex（跨设备工作区） | 桌面/移动/CLI 会话设置同步；远程工作台；登录流程统一 |
| **Windows/平台稳定性** | Codex（BSOD）、Claude（GPU 崩溃）、Qwen（渲染/桌面连 LMStudio）、Pi（输入重绘）、Gemini（Wayland 兼容）、Copilot（终端兼容性） | 内核级崩溃、无响应、渲染错乱——**跨平台质量差距显著** |
| **安全与隐私加固** | Gemini（SSRF + 脱敏时序）、Qwen（凭据泄露）、Codex（沙箱误报）、Copilot（沙盒白名单） | 默认安全策略、DNS 解析校验、凭据剥离、错误阻断可解释性 |

**双高需求（高赞+高评论）：** 多代理可靠性与上下文/会话管理，建议各工具列为下一阶段最高优先级。

## 4. 差异化定位分析

| 工具 | 生态/背景 | 核心优势 | 目标用户 | 技术路线特征 |
|---|---|---|---|---|
| **Claude Code** | Anthropic | 深度 Hooks 自动化、Claude.ai 跨产品协同、大上下文模型 | 企业级工作流、需复杂自动化的团队 | 自有模型+强会话管理，社区规模最大（530👍） |
| **OpenAI Codex** | OpenAI | 沙箱隔离、Codex Apps 并行工具调用、桌面应用 | ChatGPT 生态用户、对安全执行有要求的开发者 | app-server 架构 + 远程网络策略路由 + 沙箱规范化事件 |
| **Gemini CLI** | Google | Agent 自主性（subagent/skills）、AST 感知评估、p1/p2 分级治理 | Google 生态开发者、大型代码库使用者 | 评估驱动（76 测试→6 模型）+ 安全修复优先，SSRF 修复 PR 已提交 |
| **Copilot CLI** | GitHub | VS Code/ACP 生态、Web OAuth 现代化、Ctrl+G 编辑器集成 | 深度 GitHub 用户、ACP 工具链开发者 | 与 IDE 深度绑定，发布节奏快但稳定性承压 |
| **Kimi Code** | MoonshotAI | 轻量、计划中的 Memory System 跨会话记忆 | 中文用户、Kimi 模型使用者 | 早期阶段（仅 3 Issues），差异化方向为“AI 长期记忆” |
| **OpenCode** | 社区开源 | 多模型兼容（OpenAI 兼容层）、TUI+Web 双端、插件热重载 | 中立开源用户、追求模型自由切换 | 插件化架构+模型输入限额+OTel 可观测性 |
| **Pi (pi-mono)** | 社区开源 | TUI 渲染质量、远程会话协议（pi-protocol/pi-client） | 终端极客、远程/多设备开发场景 | 协议先行、CBOR 分帧、运行时无关客户端 |
| **Qwen Code** | 阿里/通义 | Agent Team 多代理、Goal v3 接入 TUI、资源预算治理 | 阿里云用户、多代理/多租户场景 | 工作区隔离+守护进程资源预算+GenAI 可观测性（TTFT） |
| **CodeWhale** | Shannon Labs | Rust 单二进制（目标）、命令边界重构、桌面应用方向 | 原 DeepSeek-TUI 用户、早期采用者 | 大规模 Rust 重构（77 万行），通过 EPIC 拆分推进模块化 |

## 5. 社区热度与成熟度

- **第一梯队（高活跃 + 用户基础大）：** **Claude Code** 以 530👍 的顶流 Issue 显著领先，社区规模与功能需求密度均最高；**Copilot CLI** 发布节奏快（v1.0.77），但 Credits 计费和代理稳定性问题正在消耗用户信任；**OpenAI Codex** 的 Codex Diff 崩溃获 100👍，Windows 问题集中爆发，显示用户量已跨过“开始挑剔细节”的成熟度门槛。
- **第二梯队（快速迭代 + 修复密集）：** **Gemini CLI** 有清晰的分级治理（p1/p2）和安全响应机制，SSRF 从上报到修复 PR 出现在同一时间窗内；**Qwen Code** 在 24 小时内推进 10 条 PR，多代理运行时可观测性走在各工具前列；**OpenCode** 发布 v1.18.10 并保持 10 条 PR 的高节奏，桌面端和模型兼容性双线推进。
- **第三梯队（特定阶段）：** **Pi** 处于远程会话协议开发期，Issue 讨论质量高但社区规模有限；**CodeWhale** 正进行大规模 Rust 重构（v0.9.2 定稿 + v0.9.3 EPIC 密集更新），Issue 评论量偏小但架构导向性强；**Kimi Code** 数据量最小（3 Issues、1 PR），尚处早期验证阶段。

## 6. 值得关注的趋势信号

1. **多代理可靠性是行业级短板。** 5 款以上工具同时出现子代理挂起、误报成功、空响应、消息排队阻塞等问题。对开发者而言，在 AI CLI 上构建自动化流程时必须内置超时、重试和结果校验；对工具厂商而言，这是拉开体验差距的最大机会点。

2. **上下文窗口的“感知失真”正在被正视。** Claude Code 的 200K/1M 分母错误、Copilot 的 128K 硬编码回退、OpenCode 的 /compact 可配置化，共同指向一个事实：客户端对真实上下文占用缺乏准确感知，导致压缩策略错配。下一阶段可能出现“上下文使用量作为一等观测指标”的标准能力。

3. **配额透明化将成为基本信任门槛。** 从 Claude 的 per-model 限额到 Codex 的限流字段暴露，再到 Copilot 的“任务完成后 credits 仍消耗”质疑——用户不再接受黑盒计费。能提供实时余额、重置时间、消耗归因的工具将获得更高忠诚度。

4. **Windows 是共同短板，也是差异化入口。** SysmonDrv 驱动 BSOD、GPU 崩溃后不可恢复、每秒钟轮询 powershell.exe——多款工具在 Windows 上呈现“常年带病”状态。团队若需覆盖 Windows 开发者，应在选型时将平台稳定性权重上调。

5. **安全默认值回归。** Gemini 的 SSRF（CVSS 8.6）与 Auto Memory 脱敏时序问题、Qwen 的凭据泄露、Codex 的安全误报——第三方工具链（MCP server、技能、插件）极大扩展了攻击面。安全策略需要默认启用、可解释、且不阻断合法请求。

6. **协议层正在形成“互操作基础设施”。** Pi 的 pi-protocol、CodeWhale 的 runtime API、Copilot 的 ACP、Qwen 的 Agent Team 通信——AI CLI 之间的协作协议开始成型。未来可能出现“一个编排器驱动多个 CLI Agent”的跨工具工作流。

7. **架构重构成为第二增长曲线。** CodeWhale 的 77 万行 Rust 模块化、Qwen 的资源预算与运行时所有权收敛、Gemini 的组件级评估体系，都表明头部工具已进入“为规模化重写底层”的阶段。工具是否具备清晰的架构演进路线，应纳入选型评估。

---

*本报告基于各工具 2026-07-31 公开社区数据整理，部分判断受限于数据源筛选范围，仅供参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截至 2026-07-31）

> 数据说明：本报告基于 anthropics/skills 仓库按评论数排序的 Top 50 PR 与 Top 50 Issues（各展示前 20/15 条）。PR 评论数字段在源数据中为空，排名以原始排序为准。**当前 Top 20 热门 PR 全部处于 Open 状态**，反映社区讨论活跃但合入滞后。

---

## 一、热门 Skills 排行（Top 8 PRs）

**1. skill-creator 评估链路修复 — #1298**｜Open
- 功能：修复 `run_eval.py` 对所有 skill 一律报 `recall=0%` 的致命缺陷（关联 #556，10+ 次独立复现），将评估产物安装为真实 skill，并修复 Windows 流读取、触发检测与并行 worker 问题。
- 热点：该 bug 使 `run_loop.py` / `improve_description.py` 的描述优化闭环在"噪声"上运行，skill 优化机制整体失效。同族修复 PR 密集（#1099、#1050、#539、#1323、#1261），是当前社区投入最集中的方向。
- 链接：https://github.com/anthropics/skills/pull/1298

**2. document-typography 文档排版技能 — #514**｜Open
- 功能：新增排版质量控制 skill，解决 AI 生成文档的孤词换行（1-6 词溢出）、寡段（标题滞留页底）与编号错位问题。
- 热点：覆盖所有 Claude 生成文档的普遍痛点——"用户很少主动要求，但每一项生成文档都受影响"，代表社区从"功能正确"向"交付质量"延伸。
- 链接：https://github.com/anthropics/skills/pull/514

**3. pdf 技能大小写引用修复 — #538**｜Open
- 功能：修复 `skills/pdf/SKILL.md` 中 8 处大小写不一致（`REFERENCE.md`→`reference.md` 等），解决大小写敏感系统上的引用失效。
- 热点：文档类 skill 的健壮性被高频关注；作者 Lubrsy706 同时提交 #541、#539，是近期最活跃的贡献者之一。
- 链接：https://github.com/anthropics/skills/pull/538

**4. ODT 技能 — #486**｜Open
- 功能：OpenDocument 格式（.odt/.ods）的创建、模板填充与 ODT→HTML 解析，触发词覆盖 LibreOffice、ISO 标准文档等。
- 热点：补齐官方仓库办公文档格式覆盖空白，与 pdf/docx skill 形成完整闭环。
- 链接：https://github.com/anthropics/skills/pull/486

**5. frontend-design 技能改进 — #210**｜Open
- 功能：重写 frontend-design skill，提升指令清晰度与可执行性，确保每条指导可在单次对话内被 Claude 实际遵循。
- 热点：讨论聚焦"技能文档是写给人类还是写给模型执行"，与 Issue #202（skill-creator 风格偏教育性）互相印证，社区要求指令可操作、token 高效。
- 链接：https://github.com/anthropics/skills/pull/210

**6. quality-analyzer + security-analyzer 双元技能 — #83**｜Open
- 功能：新增两个元技能——质量分析（结构/文档、示例、资源等五维加权评估）与安全分析。
- 热点：可视作社区对 #492 安全信任问题在工具层面的回应：用自动化评估替代人工审查。
- 链接：https://github.com/anthropics/skills/pull/83

**7. docx 修订 w:id 冲突修复 — #541**｜Open
- 功能：修复 DOCX 技能在含书签文档中添加修订时，硬编码低值 `w:id` 与书签/修订共享 ID 空间冲突导致的文档损坏。
- 热点：涉及 OOXML 内部规范的深度 bug，说明社区已从"能生成文档"推进到"生成合法健壮的文件"。
- 链接：https://github.com/anthropics/skills/pull/541

**8. self-audit 交付审计技能 — #1367**｜Open
- 功能：交付前审计——先做机械文件验证（逐一核对声明的产物文件），再按损害严重度进行四维推理审计；通用任意项目/技术栈/模型。
- 热点：与 #1385（Reasoning Quality Gate 提案）同源，形成"质量门控"路线，社区讨论活跃（2026-06 创建，72 小时内更新至 v1.3.0）。
- 链接：https://github.com/anthropics/skills/pull/1367

---

## 二、社区需求趋势（Issues）

| 趋势方向 | 代表 Issue | 热度 | 核心诉求 |
|---|---|---|---|
| **安全与信任边界** | #492 | 43 评论 | 社区技能在 `anthropic/` 命名空间下分发、冒充官方技能，形成信任边界漏洞与权限滥用风险；生态头号治理问题 |
| **企业级共享协作** | #228 | 16 评论 👍8 | 组织级 skill 库/直接共享链接，替代"下载文件→Slack 发送→手动上传"的原始流程 |
| **skill-creator 可靠性** | #556（👍7）、#1169、#1061、#202 | 12+ 评论 | 0% 触发率、Windows 不兼容（PATHEXT/cp1252/select-on-pipes）、文档风格偏教育性——开发者无法信任优化闭环 |
| **上下文窗口效率** | #1487、#1175 | 4+ 评论 | `claude-api` skill 单次工具调用注入 ~156k tokens 撑爆上下文；SPO 权限逻辑直接写入 SKILL.md 的安全顾虑 |
| **Agent 治理与记忆** | #412、#1385、#1329 | 6+ 评论 | agent-governance（策略执行/威胁检测/审计轨迹）、推理质量门控流水线、compact-memory（符号化压缩 agent 状态）等进阶提案 |
| **互操作与插件生态** | #16、#29、#189（👍9） | 4+ 评论 | Skills 暴露为 MCP 协议、AWS Bedrock 支持、document/example 插件重复安装导致上下文污染 |

---

## 三、高潜力待合并 Skills（Open 且讨论活跃）

| Skill | PR | 亮点 | 落地潜力 |
|---|---|---|---|
| testing-patterns | [#723](https://github.com/anthropics/skills/pull/723) | 完整测试栈：Testing Trophy 模型、AAA 模式、React Testing Library 查询原则 | 高——补齐测试生成/指导方向，社区长期空白 |
| self-audit | [#1367](https://github.com/anthropics/skills/pull/1367) | 机械验证 + 四维推理质量门控，通用性强 | 高——与 #1385 提案联动，迭代快 |
| color-expert | [#1302](https://github.com/anthropics/skills/pull/1302) | 色彩命名体系（ISCC-NBS/Munsell/RAL）、色彩空间选型表（OKLCH/OKLAB/CAM16） | 中高——自包含设计，7 月仍在更新 |
| plan-file-hygiene | [#1479](https://github.com/anthropics/skills/pull/1479) | 规划产物生命周期管理，回应 #1417，社区协作命名 | 中——2026-07 新建，议题明确 |
| pyxel 复古游戏 | [#525](https://github.com/anthropics/skills/pull/525) | pyxel-mcp 驱动的"写→运行截图→检查→迭代"工作流 | 中——唯一游戏类候选，垂直场景 |
| SAP-RPT-1-OSS 预测 | [#181](https://github.com/anthropics/skills/pull/181) | SAP 开源表格基础模型（Apache 2.0）企业数据预测 | 中——企业数据分析场景独有 |

---

## 四、Skills 生态洞察

**当前社区最集中的诉求是修复 skill-creator 评估/优化链路的系统性故障（0% recall、Windows 兼容、触发检测缺失），并同步建立 Skill 的安全信任边界与上下文效率标准——社区重心正从"新增 Skill"转向"让 Skill 生态可测、可信、可控"。**

---

# Claude Code 社区动态日报 — 2026-07-31

## 1. 今日速览

过去 24 小时无新版本 Release；社区讨论热度集中在多账户切换、Hooks 执行异常与 Windows 桌面端稳定性问题。最受关注的 Issue 为 Claude Mobile 多账户切换（#36151，148 条评论、530 👍），而新提交的 `claude-opus-5` 模型缺失（#82748）与 grep NUL 字节回归（#82773）值得开发者留意。PR 方面仅 1 条已关闭的外部提交，无官方功能合并。

## 2. 版本发布

过去 24 小时无新版本发布，当前社区提及的最新版本为 2.1.220。

## 3. 社区热点 Issues（10 个）

### 1. Multi-account switching in Claude Mobile app without shared email
- **作者**: CorneAussems | **更新**: 2026-07-31 | **评论**: 148 | **👍**: 530
- **链接**: https://github.com/anthropics/claude-code/issues/36151
- **为什么重要**: 全仓库热度最高，社区对移动端多账户切换需求强烈，但被标记为 `[invalid]`，需关注官方对本需求的定性及后续处理方案。

### 2. Post/PreToolUse Hooks Not Executing in Claude Code
- **作者**: fwends | **更新**: 2026-07-31 | **评论**: 38 | **👍**: 16
- **链接**: https://github.com/anthropics/claude-code/issues/6305
- **为什么重要**: Hooks 是自动化工作流的核心能力，该 bug 已存在近一年且持续被顶，macOS 上 PreToolUse/PostToolUse 不执行会静默破坏 CI/本地校验类集成。

### 3. Share conversation context from Claude.ai to Claude Code
- **作者**: Rahillasne | **更新**: 2026-07-31 | **评论**: 26 | **👍**: 103
- **链接**: https://github.com/anthropics/claude-code/issues/13843
- **为什么重要**: 用户期望将 Claude.ai 的规划讨论无缝带入 CLI 继续执行，属于跨产品工作流的关键断点，获得大量社区认可。

### 4. [Windows] fatal GPU-process crash via in-app Browser tab
- **作者**: brainxd | **更新**: 2026-07-31 | **评论**: 10 | **👍**: 1
- **链接**: https://github.com/anthropics/claude-code/issues/80444
- **为什么重要**: MSIX 包在 GPU 崩溃后进入不可启动状态（appxState=2），必须 Repair 才能恢复，严重影响 Windows 桌面端用户，且已跨驱动版本复现。

### 5. Feature: Real-time steering — send message mid-generation without queueing
- **作者**: andrewkangkr | **更新**: 2026-07-31 | **评论**: 9 | **👍**: 17
- **链接**: https://github.com/anthropics/claude-code/issues/64624
- **为什么重要**: 当前输入只能排队，打断则丢弃进度，社区对“中途转向”能力呼声高，直接影响长任务的交互效率。

### 6. Artifact sharing fails: "This version can't be shared publicly"
- **作者**: kristianward416 | **更新**: 2026-07-31 | **评论**: 8 | **👍**: 15
- **链接**: https://github.com/anthropics/claude-code/issues/79824
- **为什么重要**: 公开分享 Artifact 功能持续不可用，重新发布也无法解决，影响团队间协作分发场景。

### 7. Unified sessions, settings & projects across Desktop, Mobile and CLI
- **作者**: frederik-bugglin | **更新**: 2026-07-31 | **评论**: 6 | **👍**: 27
- **链接**: https://github.com/anthropics/claude-code/issues/42050
- **为什么重要**: 跨端统一是高频需求，当前会话、项目各端隔离，严重制约 Desktop/Mobile/CLI 之间的工作流衔接。

### 8. Expose rate_limits.model_scoped in statusLine stdin
- **作者**: sebyul2 | **更新**: 2026-07-31 | **评论**: 6 | **👍**: 6
- **链接**: https://github.com/anthropics/claude-code/issues/77846
- **为什么重要**: 自定义 statusline 脚本已能读取计划级限额，但缺少 per-model 的周窗口数据（如 Fable），影响多模型混跑时的用量监控。

### 9. `claude-opus-5` absent from client model table on 2.1.212
- **作者**: leandro849 | **更新**: 2026-07-31 | **评论**: 1 | **👍**: 0
- **链接**: https://github.com/anthropics/claude-code/issues/82748
- **为什么重要**: 客户端模型表中缺少 `claude-opus-5`，导致 /context 按 200K 分母显示而实际 API 按 1M 计，属于模型支持矩阵遗漏，影响上下文用量判断。

### 10. Bash-tool grep wrapper silently returns nothing on text files with stray NUL byte
- **作者**: Quinton1110 | **更新**: 2026-07-31 | **评论**: 0 | **👍**: 0
- **链接**: https://github.com/anthropics/claude-code/issues/82773
- **为什么重要**: 单个 NUL 字节即导致 grep 静默失败（exit 1 无诊断），且 #56644 被 stale 自动关闭而非真正修复，属于工具链可控性问题。

## 4. 重要 PR 进展

过去 24 小时仅检测到 1 条 PR，且已被关闭、无合并状态：

- **#82555 [CLOSED] Claude/youtube instagram mcp yn2u6s**
  - 作者: batuhunca-del | 更新: 2026-07-30 | 👍: 0
  - 链接: https://github.com/anthropics/claude-code/pull/82555
  - 说明: 内容为空，疑似垃圾提交，已关闭。官方 PR 合并记录缺失，建议关注提交分支与后续正式版本。

## 5. 功能需求趋势

从全部 Issues 中提炼出以下社区重点功能方向：

| 方向 | 代表性 Issue | 社区诉求 |
|------|-------------|---------|
| **跨端/多账户统一体验** | #36151、#42050、#81658 | 桌面、移动、CLI 间会话/设置同步；多账户独立切换，不依赖共享邮箱 |
| **上下文管理增强** | #35150、#64624、#80787 | 支持中途转向、程序化清理上下文并注入续接提示，以避免长任务退化 |
| **Hooks / Skills 自动化扩展** | #6305、#72404、#73774 | Hooks 稳定性修复；提供程序化设置会话标题、避免 Skill 重复加载等能力 |
| **模型支持与可观测性** | #82748、#77846 | 新模型（claude-opus-5）正确注册；statusLine 暴露 per-model 限额明细 |
| **Windows / 桌面稳定性** | #80444、#80584、#63566 | GPU 崩溃恢复、HCS 服务缺失、自动更新失败状态误导等平台级缺陷 |
| **会话管理细节** | #79575、#82769 | `/fork` 权限判断逻辑修正；`--continue --chrome` 恢复时正确注册 MCP server |

其中 **跨端统一** 和 **上下文/会话管理** 是双高需求（高赞 + 高评论），或有较高优先级。

## 6. 开发者关注点

- **Windows 端可靠性隐患突出**: 多个 Issue 指向 GPU 进程崩溃后 MSIX 包无法启动、HCS 服务持久缺失、调度器重启后 catch-up storm 误触发等，Windows 用户修复成本高昂（需 Repair 或重装）。
- **上下文窗口“假象”问题**: `claude-opus-5` 缺失导致 /context 分母错误（200K vs 1M），开发者无法准确判断真实上下文占用，进而影响自动压缩策略配置。
- **工具静默失败是隐形成本**: grep 因 NUL 字节静默返回空、hooks 不执行无报错，这类“安静失败”比显式错误更难以排查，成为自动化流程的隐性地雷。
- **“stale 自动关闭”引发质疑**: #82773 指出 #56644 被 stale 机制关闭但问题未修复，开发者对无效的 stale 闭环流程表达不满，期望 bug 修复后再关闭。
- **细粒度权限与元数据缺失**: 子代理 `tools: []` 被错误显示为 “All tools”（#82562）、`/fork` 在 `--dangerously-skip-permissions` 下的不必要阻断（#79575），反映出权限判定与 UI 展示逻辑仍存在明显与直觉相悖的行为。
- **移动端 Code 会话自动归档**: 新建 Code 会话在 iOS 上自动 archive 且无法访问（#71616），影响移动端点检场景，需要尽快修复可用性。

---
*本日报数据基于 GitHub anthropics/claude-code 仓 2026-07-31 的公开 Issue/PR 元数据生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-07-31

## 今日速览

过去 24 小时社区讨论热度集中于 **Windows 平台稳定性问题**（SysmonDrv 驱动的 BSOD、PowerShell 高频轮询、沙箱执行失败）以及 **VS Code 扩展 Codex Diff 崩溃**（39 条评论、100 👍，为当前最热 Issue）。PR 侧以 **copyberry 自动机器人合入的一批 app-server 协议与内部修复**为主，同时社区关注的并行工具调用、无工具线程模式等较长线 PR 仍在推进中。

📎 [GitHub 仓库](https://github.com/openai/codex)

## 版本发布

过去 24 小时无新版本 Release。

## 社区热点 Issues

### 1. Codex Diff 在 VS Code macOS 上崩溃（🔥 最热）
- **#35058** [bug, extension] Codex Diff crashes with "Oops, an error has occurred" in VS Code on macOS
- **作者**: Furgon | **评论**: 39 | **👍**: 100 | **状态**: OPEN
- **重要性**: 评论数与点赞数均为当前最高，在 Apple Silicon 上任何仓库复现，严重阻碍日常代码审查流程。
- [查看 Issue](https://github.com/openai/codex/issues/35058)

### 2. Windows 上 SysmonDrv.sys 导致 BSOD
- **#31035** [bug, windows-os, sandbox, app] Windows Codex Desktop appears to reinstall/start SysmonDrv v13.22; WinDbg points to SysmonDrv.sys BSODs
- **作者**: Cartmancxx | **评论**: 22 | **👍**: 0 | **状态**: OPEN
- **重要性**: 内核级崩溃，威胁机器稳定性。官方强制卸载后仍被重新拉起，严重性极高。
- [查看 Issue](https://github.com/openai/codex/issues/31035)

### 3. Windows 高 CPU：每秒生成 powershell.exe
- **#25453** [bug, windows-os, app, performance] Windows Codex Desktop spawns powershell.exe every second for full process polling, causing high CPU usage
- **作者**: jrf1001 | **评论**: 21 | **👍**: 5 | **状态**: OPEN
- **重要性**: 持续的性能问题，每秒轮询导致 CPU 占用高企，影响 Windows 上的日常使用体验。
- [查看 Issue](https://github.com/openai/codex/issues/25453)

### 4. OneDrive 降级导致 Work/Codex 流反复断开
- **#35420** [bug, windows-os, codex-web, connectivity] Work/Codex stream repeatedly disconnects when selected workspace is OneDrive-backed
- **作者**: hiroki-tamba-research | **评论**: 17 | **状态**: OPEN
- **重要性**: 与 OneDrive 状态耦合的流连接问题，影响使用云端同步目录的 Windows 用户。
- [查看 Issue](https://github.com/openai/codex/issues/35420)

### 5. Windows 沙箱升级后报错 1920
- **#20570** [bug, windows-os, sandbox, CLI, tool-calls] Win: CreateProcessAsUserW failed: 1920 after upgrading Codex
- **作者**: Msirkovsky | **评论**: 15 | **👍**: 11 | **状态**: OPEN
- **重要性**: 升级后沙箱无法启动进程，直接阻断工具调用；社区关注度高（11 👍），已持续两个月。
- [查看 Issue](https://github.com/openai/codex/issues/20570)

### 6. 后台子进程不会唤醒主 Agent
- **#15723** [bug, subagent] Background subprocesses/subagents do not wake the calling agent on completion
- **作者**: zoox101 | **评论**: 13 | **👍**: 7 | **状态**: OPEN
- **重要性**: 核心 agent 协同机制的缺陷，后台任务完成后主 agent 无感知，影响自动化可靠性。
- [查看 Issue](https://github.com/openai/codex/issues/15723)

### 7. 文本日志附件触发 Request Blocked 并污染会话
- **#32177** [bug, context, app, session] Codex App: text-log attachment can trigger "Request blocked" and poison subsequent turns
- **作者**: 66Ton99 | **评论**: 12 | **👍**: 12 | **状态**: OPEN
- **重要性**: 附件导致整个会话后续请求被阻塞，严重影响长会话可用性。
- [查看 Issue](https://github.com/openai/codex/issues/32177)

### 8. 扩展 status_line 以暴露更丰富限流数据
- **#24080** [enhancement, TUI, rate-limits] Expose rate-limit reset times, balance, plan as status_line tokens
- **作者**: NavinAgrawal | **评论**: 11 | **状态**: OPEN
- **重要性**: 社区对限流可见性的核心诉求，希望 CLI 暴露重置时间、余额、套餐类型等字段。
- [查看 Issue](https://github.com/openai/codex/issues/24080)

### 9. Pro 账户 5 小时用量额度消失
- **#32707** [bug, rate-limits, app, app-server] Pro account: 5-hour usage bucket disappeared from Codex App and account/rateLimits/read
- **作者**: aidawilliam41-ops | **评论**: 8 | **👍**: 3 | **状态**: OPEN
- **重要性**: 计费/限流数据不展示，用户无法追踪用量，涉及账户核心权益。
- [查看 Issue](https://github.com/openai/codex/issues/32707)

### 10. 安全审查误报阻断合法请求
- **#34306** [bug, CLI, safety-check] "This content can't be shown" - We take extra caution with cybersecurity requests
- **作者**: Recodify | **评论**: 7 | **👍**: 5 | **状态**: OPEN
- **重要性**: 合法请求被安全机制错误阻断且无明确解释，涉及内容审查策略的精度问题。
- [查看 Issue](https://github.com/openai/codex/issues/34306)

## 重要 PR 进展

### 1. 更新模型列表
- **#31817** ([OPEN](https://github.com/openai/codex/pull/31817)): `github-actions[bot]` 自动更新 `models.json`，保持模型元数据最新。当前 PR 编号跨度大，持续数周未合入。

### 2. 支持企业自动化账户计划
- **#36228** ([CLOSED](https://github.com/openai/codex/pull/36228)): 识别 `enterprise_cbp_automation` 计划，并在认证、后端响应、限流 API 中呈现为 "Enterprise (Automation)"。

### 3. Code 模式独立 host 运行
- **#36217** ([CLOSED](https://github.com/openai/codex/pull/36217)): 将 V8 实现移入独立 `codex-code-mode-runtime` crate，移除 Codex 进程内嵌回退逻辑，提升隔离性。

### 4. exec-server 远程网络策略路由
- **#31458** ([OPEN](https://github.com/openai/codex/pull/31458)): 将执行器本地代理策略未命中路由到进程级核心策略决策器，确保 Guardian 决策的归属与安全隔离。

### 5. 无工具线程模式
- **#31922** ([OPEN](https://github.com/openai/codex/pull/31922)): 为线程标题生成等轻量辅助任务引入 `tool_free` 模式，跳过 MCP、技能、插件与工具枚举，降低开销。

### 6. 提取 Connector Runtime 管理器
- **#31471** ([OPEN](https://github.com/openai/codex/pull/31471)): 将 Codex Apps 工具缓存提取为 `ConnectorRuntimeManager`，按账户、用户、工作区隔离运行时上下文（1/4 系列 PR）。

### 7. 启用 Codex Apps 并行工具调用
- **#31591** ([OPEN](https://github.com/openai/codex/pull/31591)): 添加默认关闭的 `codex_apps_parallel_tool_calls` feature，仅对 host 管理的 MCP server 生效，不影响第三方配置。

### 8. 序列化 Connector 运行时刷新
- **#31472** ([OPEN](https://github.com/openai/codex/pull/31472)): 为每个激活的 connector 运行时增加异步显式刷新锁，通过 `hard_refresh_codex_apps_runtime` 保证同一时刻仅一次 `tools/list`。

### 9. 规范化沙箱违规事件
- **#36207** ([CLOSED](https://github.com/openai/codex/pull/36207)): 将文件系统拒绝与托管网络拦截统一为结构化事件，减少下游解析成本。

### 10. 流式输出缓冲区性能优化
- **#36194** ([CLOSED](https://github.com/openai/codex/pull/36194)): 移除每次解码后对 `Vec` 的 shift 操作，修复多无效 UTF-8 或密集帧消息时的高耗时问题。

## 功能需求趋势

- **限流透明度与公平性**: #24080 要求暴露重置时间/余额/计划类型；#32707 抱怨用量数据消失；#36213 直指 GPT-SOL 5.6 对 Plus 用户的配额不公平。社区对配额可见性与分配公平的需求强烈。
- **跨设备工作区连续性**: #34804 提出 Codex Remote 后跨设备同步工作区、会话与进度的诉求。
- **模型/推理等级交接**: #36251 建议 ChatGPT 向 Codex 交接任务时附带推荐模型与推理等级，减少手动配置。
- **并行执行能力**: #31591 为 Codex Apps 增加并行工具调用开关，提升多工具协同效率。
- **轻量化辅助任务**: #31922 的 tool-free 模式响应社区对低开销会话（如标题生成）的需求。

## 开发者关注点

- **Windows 平台问题集中爆发**: SysmonDrv 驱动 BSOD（#31035）、PowerShell 每秒轮询（#25453）、沙箱 1920 错误（#20570）、OneDrive 场景断连（#35420）——Windows 稳定性已成为社区最大痛点。
- **会话/上下文状态纠缠**: 附件污染会话（#32177）、推理等级被重置（#26930）、fork 时父会话数据全量写入（#35647）、符号链接路径导致会话丢失（#31895），开发者普遍反映会话生命周期管理不可预期。
- **沙箱与安全机制误伤**: Windows 下应用补丁失败（#35864）、安全策略误阻断合法请求（#34306），沙箱策略的可用性与透明度有待提升。
- **自动化任务不可靠**: 后台子 agent 不唤醒主 agent（#15723）、桌面自动化运行被立即归档（#19742），削弱了 Codex 作为自动化平台的可信度。
- **冗余/重复 UI 问题**: 模型选择器显示重复项（#35066）、项目排序控件失效（#33077），桌面端用户体验细节仍有打磨空间。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-07-31）

## 今日速览

今日社区聚焦于三个方向：一是安全领域，`web-fetch` 工具曝出 SSRF 漏洞（#28555）并已有对应修复 PR（#28557），另有供应链安全 PoC 被提交；二是 Agent 可靠性问题持续发酵，subagent 挂起、完成后误报成功等 p1 级 bug 仍在高频讨论中；三是多个 PR 着力解决 CLI 卡死、认证循环和工具调用异常，整体修复节奏加快。

## 社区热点 Issues

以下选取过去 24 小时内更新最活跃、或对使用影响最大的 10 个 Issue：

1. **Subagent 在 MAX_TURNS 后被误报为 GOAL 成功** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
   p1 级 bug，12 条评论。`codebase_investigator` 在未做任何分析便触发最大轮数限制时，仍返回 `status: "success"`，导致用户无法感知任务被中断。该问题直接削弱对 Agent 执行结果的信任。

2. **Generalist agent 永久挂起** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
   p1 级 bug，8 条评论。用户反馈一旦调用 generalist agent，即使建文件夹这类简单操作也会挂起，最长等待 1 小时无响应；手动禁止使用 subagent 后恢复正常。

3. **组件级评估（Component Level Evaluations）** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)  
   p1 级 EPIC，7 条评论。规划将行为评估从 76 个测试扩展到 6 个支持模型，是后续 Agent 质量保障的基础设施。

4. **AST 感知的文件读取、搜索与映射评估** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
   p2 级 EPIC，7 条评论。探索利用 AST 感知工具精确定位方法边界、减少 token 噪声与读取偏差，可能提升大代码库下的导航效率。

5. **Gemini 不主动使用 skills 和 sub-agents** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
   p2 级，6 条评论。即使存在明确的 gradle/git 技能描述，模型仍不主动调用，只有显式指令才会使用，导致个性化能力实际未生效。

6. **Auto Memory 对低信号会话无限重试** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)  
   p2 级，5 条评论。后台提取器反复将低价值会话置为“未处理”并重新拉取，既浪费 token 又拖慢索引。

7. **Shell 命令执行完成后卡在“等待输入”** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)  
   p1 级，4 条评论。简单 CLI 命令结束后进程仍显示 active 并处于 "Awaiting user input"，影响自动化流程，用户需要手动干预。

8. **Browser subagent 在 Wayland 下失败** | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
   p1 级，4 条评论。Wayland 环境下浏览器代理启动失败并返回 "GOAL"，属于平台兼容性问题。

9. **Web-fetch 工具存在 SSRF（DNS 解析绕过）** | [#28555](https://github.com/google-gemini/gemini-cli/issues/28555)  
   p2 级安全漏洞，CVSS 8.6。`isPrivateIp()` 仅做同步 IP 检查，域名可解析至 `169.254.169.254` 逃过校验，构成内网 SSRF 风险。

10. **Auto Memory 需要确定性脱敏并减少日志** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)  
    p2 级，4 条评论。当前 redaction 发生在内容进入模型上下文之后，存在敏感信息泄露窗口；同时服务日志可能记录已有 skill 内容，需加强隐私控制。

## 重要 PR 进展

以下 10 个 PR 在过去 24 小时有更新，其中安全修复与稳定性改进最为集中：

1. **修复 web-fetch SSRF：改为异步 DNS 解析** | [#28557](https://github.com/google-gemini/gemini-cli/pull/28557)  
   修复 #28555，将同步 `isPrivateIp()` 替换为 `isPrivateIpAsync`，在 DNS 解析后校验内网地址，堵住域名绕过漏洞。

2. **保留 functionCall 中的 thoughtSignature，修复 400 错误** | [#28586](https://github.com/google-gemini/gemini-cli/pull/28586)  
   修复 v0.53.0 引入的回归：并行工具调用时 `thoughtSignature` 被剥离导致 400 Bad Request，现于 core 层保留该字段。

3. **等待凭据保存并强制 consent，防止无限认证循环** | [#28519](https://github.com/google-gemini/gemini-cli/pull/28519)  
   修复 #28430，通过正确 await `oauth_creds.json` 异步写入，并强制用户完成授权，避免重复登录。

4. **传播 InvalidStreamError 详情到 UI** | [#28566](https://github.com/google-gemini/gemini-cli/pull/28566)  
   将空响应等错误的 `type` 和 `message` 从 core 传递到 CLI 界面，可提示用户执行 `/compress` 等具体解决措施。

5. **跳过 diff hunk 标记中的 @ 处理** | [#28581](https://github.com/google-gemini/gemini-cli/pull/28581)  
   防止 unified/combined diff 中的 hunk 行被误识别为 `@file` 引用，消除每次 hunk 的递归 glob 搜索，避免大 diff 提示下堆内存增长。

6. **沙箱 Dockerfile 升级至 Node 22** | [#28603](https://github.com/google-gemini/gemini-cli/pull/28603)  
   修复 #28584：Node 20 已 EOL（2026-04-30），沙箱运行环境升级至 Node 22，降低执行模型命令时的安全风险。

7. **使用存储的 client ID 刷新 MCP OAuth tokens** | [#28481](https://github.com/google-gemini/gemini-cli/pull/28481)  
   修复动态客户端注册的 MCP HTTP 传输，刷新 token 不再因 client ID 缺失而失败，也避免删除凭据导致每次强制重新认证。

8. **将容量耗尽错误分类为终止性错误** | [#28599](https://github.com/google-gemini/gemini-cli/pull/28599)  
   当后端返回 `MODEL_CAPACITY_EXHAUSTED`（HTTP 429）且无重试延迟时，客户端立即触发 fallback，而非无限等待重试。该 PR 当前已关闭。

9. **新增 `--list-all-sessions` 选项** | [#28596](https://github.com/google-gemini/gemini-cli/pull/28596)  
   允许用户跨所有已注册工作区列出并管理会话，按工作区路径分组，解决会话散落在不同目录难以查找的痛点。

10. **macOS seatbelt 配置文件缺失时回退到内置 profile** | [#28551](https://github.com/google-gemini/gemini-cli/pull/28551)  
   修复 macOS 沙箱模式（`-s`）下因静态 `.sb` profile 不在 runfiles/bundle 中导致的启动崩溃，改为回退内置 profile。

## 功能需求趋势

从当前 Issue 可提炼出社区最关注的四个方向：

- **Agent 自主性与可靠性**：大量 Issue 指向 subagent 不主动使用、挂起、误报成功、以及权限控制缺失。社区期望 Agent 能更智能地调用 subagent/skills，并在异常时给出真实状态。
- **安全与隐私加固**：SSRF 漏洞、Auto Memory 敏感信息脱敏、Node EOL 运行时升级等安全问题明显增多，用户对 CLI 访问内网资源与日志泄露的担忧上升。
- **代码理解能力增强**：AST 感知工具、代码库映射、子代理轨迹共享等需求表明，开发者希望 Gemini CLI 更深层理解代码结构，而不仅仅是文本搜索。
- **开发体验细节优化**：跨会话管理（`--list-all-sessions`）、命令行参数自感知、terminal resize 性能、交互式提示卡死等高频问题，反映用户对产品成熟度的要求逐渐提高。

## 开发者关注点

- **Agent 行为不可预测**：挂起、错误成功状态、不使用可用 skill 是反馈最集中的痛点，尤其是 p1 级问题长期未解决已影响日常使用。
- **Shell 交互可靠性**：命令执行完成却仍显示“等待输入”、交互式提示卡死等问题，破坏自动化脚本与 CI 场景。
- **安全默认值不足**：Auto Memory 在脱敏前便将内容发送到模型、SSRF 防护可被 DNS 绕过，开发者希望安全策略默认开启且不确定时不引入风险。
- **配置覆盖与权限**：`settings.json` 对 browser agent 失效、subagent 在禁用状态下仍被调用等，表明配置系统的一致性和优先级需要修复。
- **工具数量上限**：超过 400 个工具时出现 400 错误，社区期待 Agent 能按需动态裁剪工具集，而非直接失败。

> 以上数据均来自 GitHub `google-gemini/gemini-cli` 仓库过去 24 小时更新内容。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-31** | 数据来源：github.com/github/copilot-cli


## 今日速览

昨日发布 **v1.0.77**，引入了全新的浏览器端 OAuth 登录流程（本地终端默认方式），并允许通过 Ctrl+G 直接在编辑器中修改 ask_user 自由文本答案。Issue 侧，AI Credits 用量告警与用量持续消耗类反馈集中出现（#4295、#4308、#4309），同时一个已关闭的“超大附件永久楔死会话”问题（#3767）引发社区对 CAPI 5MB 限制恢复机制的讨论。


## 版本发布

### v1.0.77 — 2026-07-30

**新增功能：**
- 浏览器端（Web）OAuth 登录流程，现为本地交互式终端 `copilot login` 的默认方式；远程/无头终端仍默认使用设备码。可通过 `--web-flow` / `--device-code` 强制指定模式，或在交互式 `/login` 命令中手动选择。
- 无条件的 autopilot 批准现在会在允许绕过时，自动禁用当前会话的沙盒机制。
- **Ctrl+G** 可直接在 `$EDITOR` 中编辑 ask_user 自由文本答案，无需关闭当前提示。

### v1.0.77-0 — 2026-07-30

- 与 v1.0.77 相同的 Web OAuth 登录流程更新（预发布版）。
- 额外包含“支持 enfor…”（release 内容截断，疑似 enforcement 相关支持）。


## 社区热点 Issues

### 🔥 高热度 / 已解决

**1. [已关闭] Oversized attachment permanently wedges session（#3767）**
`[area:sessions, area:context-memory]`
当附件超过 CAPI Responses 原生 5MB 限制时，会话会永久卡死且无恢复路径。原始报错明确提示“9.1 MB request; 5.0 MB limit”，但会话无法通过任何方式恢复。**13 条评论**，属于近期最受关注的会话稳定性问题之一。
🔗 https://github.com/github/copilot-cli/issues/3767

**2. [已关闭] ACP 模式未实现 session/close——ACP 客户端无法释放会话（#4113）**
`[area:sessions, area:agents]`
以 ACP agent 模式运行时，未实现 `session/close` 请求，导致客户端无法通过协议层面终止会话，影响 ACP 生态集成。获得 3 个 👍。
🔗 https://github.com/github/copilot-cli/issues/4113

**3. [已关闭] 自定义/BYOK 提供商下 `-i` 启动提示被忽略（#4258）**
`[area:non-interactive, area:models]`
TTY 交互模式下使用自定义/BYOK 提供商时，`-i/--interactive` 传入的启动提示不会自动提交；同版本标准提供商下无此问题。
🔗 https://github.com/github/copilot-cli/issues/4258

**4. [已关闭] v1.0.74 通用退出命令 Bug，无退出屏幕（#4266）**
`[area:sessions, area:terminal-rendering]`
正常退出（Ctrl+C/D、`/exit`）时不显示含 Session-ID 的退出界面，疑似 `session.shutdown()` 在 `Ovn()` 前清空 Events 导致竞态条件。
🔗 https://github.com/github/copilot-cli/issues/4266

**5. [已关闭] JS 'Undefined' → Rust String 转换崩溃（#4305）**
v1.0.76 升级后，几乎所有命令都会立即触发 `Failed to convert JavaScript value 'Undefined' into rust type 'String'` 错误，预发布版 1.0.76-2 同样存在。影响面较大。
🔗 https://github.com/github/copilot-cli/issues/4305

### 🔥 新晋值得关注

**6. [开放] AI Credits 接近限制警告（#4295）**
社区请求 CLI 与 Visual Studio 2026 对齐，在聊天会话中提示 AI Credits 即将耗尽。8 条评论，话题度较高，反映用户对 credits 消耗的敏感度上升。
🔗 https://github.com/github/copilot-cli/issues/4295

**7. [开放] 全工具子代理返回空响应，无任何错误（#4293）**
`[area:agents, area:tools]`
通过 `task` 工具启动的子代理，在拥有完整工具集时返回**完全空白**——无错误、无部分输出、无日志；相同模型/提示在受限工具代理类型下可正常执行。暗示代理工具权限路由存在严重 bug。
🔗 https://github.com/github/copilot-cli/issues/4293

**8. [开放] Transcript 渲染空白行，直到 children 或终端宽度改变（#4311）**
`[triage]`
交互模式下 transcript 底部区域空白化，内容实际存在（上滚可见），新消息或 `/resume` 都只能短暂恢复。指向 `WCr`/ScrollBox 测量行缓存失效后未重触发绘制的问题。
🔗 https://github.com/github/copilot-cli/issues/4311

**9. [开放] 坏默认值：引擎静默回退 128K token 预算（#4310）**
`[triage]`
当路由模型无 capability 限制或 context window 报告为 0 时，引擎回退到硬编码 128,000-token 预算并据此触发上下文压缩；对 1M-token 模型（如 Anthropic）造成不必要的性能损失。
🔗 https://github.com/github/copilot-cli/issues/4310

**10. [开放] AI Credits 在任务完成后继续消耗（#4308 / #4309）**
两条几乎相同的报告，均发生在 v1.0.75 交互模式，可见任务完成后 credits 仍持续消耗至约 97.8%。用户对计费准确性提出质疑，值得官方调查。
🔗 https://github.com/github/copilot-cli/issues/4308 | https://github.com/github/copilot-cli/issues/4309

**11. [开放] Sub-agents 冻结、停止响应（#4306）**
`[triage]`
Autopilot 模式下 `/fleet use` 多代理循环执行时，子代理在会话中途冻结，不产生任何输出。
🔗 https://github.com/github/copilot-cli/issues/4306

**12. [开放] 长会话中输入延迟急剧增加（#4299）**
`[area:sessions, area:input-keyboard]`
长时间运行（尤其是后台 agent 活跃）的会话中，打字延迟高到“几乎不可用”。1 个 👍。
🔗 https://github.com/github/copilot-cli/issues/4299


## 重要 PR 进展

过去 24 小时内**无 PR 更新**。v1.0.77 的发布内容已直接承载主要变更（Web OAuth、Ctrl+G 编辑、autopilot 沙盒策略）。


## 功能需求趋势

从近期 Issues 中提炼出以下社区关注方向：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **计费与配额透明化** | #4295（限值警告）、#4308/#4309（持续消耗） | 🟢 新增爆发 |
| **登录流程现代化** | v1.0.77 Web OAuth 默认化 | ✅ 已落地 |
| **非 Git 版本控制支持** | #1381（jj/mercurial 下 Rewind 不可用，10 👍） | 🟡 长期诉求 |
| **沙盒与权限精细化** | #4298（sandbox 工具白名单） | 🟡 待评估 |
| **BYOK 认证增强** | #4300（bearerToken 支持） | 🟢 企业需求 |
| **MCP 工具参数保真** | #4301（anyOf 联合类型参数被字符串化） | 🟡 正确性 bug |
| **代理/子任务可靠性** | #4293（全工具子代理空响应）、#4306（冻结） | 🟢 高优 |
| **终端兼容性** | #4296（iTerm2 Cmd+V）、#2841（MobaXterm 滚轮） | 🟡 持续 |
| **会话稳定性/恢复** | #3767（5MB 附件楔死）、#4311（渲染空白） | 🟢 回归风险 |


## 开发者关注点

**1. 性能退化是当前最大痛点。** #4299（长会话输入延迟）、#4306（子代理冻结）、#4293（子代理空响应）集中指向代理运行时稳定性，开发者对“后台 agent 拖垮交互体验”的抱怨尤为突出。

**2. AI Credits 计费敏感度上升。** 同一时段出现 3 条相关 Issue（#4295、#4308、#4309），“任务完成后仍在扣费”的质疑可能引发信任危机，建议官方尽快公开核查。

**3. v1.0.76 的 Rust/JS 边界崩溃影响广泛。** #4305 几乎在“任何命令”上触发，虽然已在 v1.0.77 修复，但反映出预发布测试对 Node 生态边界覆盖不足。

**4. 非 Git 工作流支持长期缺位。** #1381 以 10 个 👍 成为高赞功能请求，jj（Jujutsu）用户强烈呼吁 Rewind 功能剥离对 Git 的硬依赖。

**5. 主题/渲染回归值得关注。** #4294（注入 COLORTERM 改变高亮色）和 #4311（transcript 空白渲染）均属于视觉层回归，说明近期终端渲染重构仍在消化中。

**总结：** 今日动态呈现“发布积极、稳定性承压”的双面格局——v1.0.77 的 Web OAuth 与 Ctrl+G 编辑是明确的体验进步，但社区注意力正大量集中在代理稳定性、credits 计费和 5MB 附件楔死等可靠性议题上，建议官方将子代理管理与会话恢复机制列为下一阶段最高优先级。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-07-31）

## 今日速览

过去 24 小时没有新版本发布。社区动态集中在 3 个 Issue 和 1 个 PR：长期功能请求“跨会话内存系统”被重新更新，新增两起稳定性 Bug（服务端 429 过载和 CLI 冻结），以及一个修复 Hook 任务被提前回收的 PR 提交。整体上，稳定性问题和持久化上下文成为当前社区关注焦点。

## 版本发布

（无新版本 Release）

## 社区热点 Issues

> 说明：数据源中过去 24 小时更新的 Issue 共 3 条，不足 10 条，以下全部列出，按更新时间/优先级排序。

- **[#1283] 内存系统：跨会话持久上下文（功能请求）**  
  作者：CatKang · 创建于 2026-02-27 · 更新于 2026-07-30 · 👍 0 · 💬 7  
  链接：[Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  **摘要**：请求实现全面的 **Memory System**，让 CLI 能记住项目模式、上下文和用户偏好。包括自动记忆（AI 管理的笔记）和手动记忆（用户定义的指令）。  
  **为什么重要**：这是 2 月就提出的长期功能需求，本次再次被更新，说明社区关注度持续存在。7 条评论表明该方向有实质性讨论价值，有望成为产品差异化能力。

- **[#2571] LLM Overloaded！无法使用 Kimi（Bug）**  
  作者：andrew-sz · 创建于 2026-07-30 · 更新于 2026-07-30 · 👍 0 · 💬 1  
  链接：[Issue #2571](https://github.com/MoonshotAI/kimi-cli/issues/2571)  
  **摘要**：使用 v1.49.0 / Moderato 平台 / Kimi K3 时报错 `Error code: 429`，导致完全无法使用。  
  **为什么重要**：服务端限流直接阻塞开发者工作流，是最紧急的可用性问题。虽然评论只有 1 条，但 429 叠加“Can't use at all”的表述，需要立即排查服务容量或配额逻辑。

- **[#2570] CLI 间歇性冻结（spinning moon），与浏览器标签状态相关（Bug）**  
  作者：XbackMK · 创建于 2026-07-30 · 更新于 2026-07-30 · 👍 0 · 💬 0  
  链接：[Issue #2570](https://github.com/MoonshotAI/kimi-cli/issues/2570)  
  **摘要**：Windows 11 + KIMI Login Subscription + KIMI K3 HIGH，CLI 会出现无响应（旋转月亮图标），且与浏览器标签状态存在相关性。  
  **为什么重要**：新出现的环境相关稳定性问题，涉及登录态和浏览器交互，尚无人回复。可能指向客户端与登录 WebView 的耦合缺陷，值得持续跟踪。

## 重要 PR 进展

> 说明：数据源中过去 24 小时更新的 PR 仅 1 条，以下为全部列出。

- **[#2565] fix(hooks): keep a strong reference to fire-and-forget hook triggers**  
  作者：LHMQ878 · 更新于 2026-07-30  
  链接：[PR #2565](https://github.com/MoonshotAI/kimi-cli/pull/2565)  
  **修复内容**：修复 Issue #2564。Python `asyncio` 用 `WeakSet` 持有任务，当 `_hook_task` 在函数返回后失去作用域引用时，任务可能被垃圾回收，导致 fire-and-forget 的 Hook 触发丢失。该 PR 通过持有强引用确保任务完整执行。  
  **为什么重要**：这是典型的“偶发但难以排查”的异步生命周期问题。Hook 机制若不可靠，会直接影响扩展性和自动化流程的可信度。

## 功能需求趋势

从本期活跃 Issue 中可以提炼出以下社区最关注的方向：

1. **持久化上下文 / Memory System**（#1283）  
   希望 CLI 在跨会话间记住项目模式、用户偏好，同时支持自动和手动记忆，形成“真正的长期工作记忆”。

2. **服务端稳定性与限流透明化**（#2571）  
   在 Kimi K3 等高负载模型上出现 429 过载时，开发者希望获得更友好的错误提示、自动重试或排队机制，而非直接不可用。

3. **客户端健壮性与跨环境兼容**（#2570）  
   不同操作系统（Windows 11 / macOS Tahoe）下出现冻结、浏览器联动异常，说明登录态管理和本地 UI 进程隔离需要加强。

## 开发者关注点

- **服务不可用是当前最大痛点**：429 错误直接阻断工作流，开发者期待更完善的负载预警告警和重试策略。
- **“AI 记住上下文”的需求愈加强烈**：memory system 反复被提出，说明在复杂项目中，用户希望减少重复描述上下文，让 AI 具备持续学习能力。
- **异步任务生命周期需要更严谨**：PR #2565 暴露了 Hook 任务被 GC 的问题，提示异步引擎在“发后即忘”场景下容易产生隐蔽缺陷，需要保持强引用和更完善的回调错误处理。
- **跨平台/登录态稳定性是质量关键**：Windows 与浏览器标签状态相关的冻结，以及 macOS 上的限流异常，都表明多环境适配是当前 CLI 质量短板。

---

*本日报数据来源：GitHub MoonshotAI/kimi-cli 仓库，更新窗口为 2026-07-30 至 2026-07-31。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-07-31

## 今日速览

今日 OpenCode 发布 v1.18.10，核心更新为自动发现 Modal 可用模型，桌面端同步优化了附件去重、新会话按钮及通知交互。社区方面，多个历史 Issue 在今日集中更新/关闭，其中 “exiting loop” TUI 报错与 `/compact` 可配置化讨论热度最高，同时大量针对 v1.15.x 的回归问题已被修复关闭。

## 版本发布

**v1.18.10** — 核心与桌面端改进：
- **Core**: 自动发现可用的 Modal 模型（@devennavani）。
- **Desktop**:
  - 防止同一附件被重复添加
  - 始终显示“新建会话”按钮
  - 改进 Toast 通知的堆叠、关闭与移动端布局
  - 优化标签页 hover 与激活态样式

## 社区热点 Issues

1. **[OPEN] `message="exiting loop"`** — 评论 17
   TUI 循环退出报错，影响多 OpenAI API 用户，作者表示该问题长期影响使用体验。
   https://github.com/anomalyco/opencode/issues/38801

2. **[FEATURE] `/compact` 应可配置使用 OpenAI Responses API 的 compaction** — 评论 11，👍 28
   高赞需求，希望 `/compact` 能调用 OpenAI 官方 compaction 接口而非本地截断，对长会话体验至关重要。
   https://github.com/anomalyco/opencode/issues/5200

3. **[CLOSED] qwen3.7-max 返回 401 `unsupported_value`（oa-compat）** — 评论 8
   通过 OpenCode Go 的 oa-compat 端点调用 qwen3.7-max 时 `response_format.type` 报错，而其他模型正常，反映 OpenAI 兼容层差异。
   https://github.com/anomalyco/opencode/issues/29754

4. **[CLOSED] v1.15.x 后 edit 工具连续调用频繁中断** — 评论 6
   用户报告 v1.15.3 起对同一文件连续 edit 时反复出现 `[Tool execution was interrupted]`，v1.14.x 无此问题，已定位为回归。
   https://github.com/anomalyco/opencode/issues/28011

5. **[CLOSED] GLM-5.1 ZAI CODING SUBSCRIPTION 提示 Invalid API parameter** — 评论 6，👍 3
   使用 GLM-5.1 订阅时出现无效 API 参数错误，触发广泛关注。
   https://github.com/anomalyco/opencode/issues/29334

6. **[CLOSED] Web UI 权限弹窗在批准子会话请求后仍卡住** — 评论 5
   子代理触发权限请求后，即使在服务端已接受（返回 `200 true`），composer 中的弹窗仍不消失。
   https://github.com/anomalyco/opencode/issues/26907

7. **[CLOSED] 项目目录存在 `.opencode/` 时全局 MCP 不加载** — 评论 4，👍 1
   全局配置中的 MCP 在创建项目级配置后失效，涉及配置合并优先级问题。
   https://github.com/anomalyco/opencode/issues/30038

8. **[FEATURE] 支持 Linux PRIMARY 选择（中键粘贴）** — 评论 4，👍 4
   TUI 目前仅操作 `CLIPBOARD`，Linux 用户期待中键粘贴支持，社区呼声较高。
   https://github.com/anomalyco/opencode/issues/29963

9. **[CLOSED] `opencode run` 不发送 OTLP traces** — 评论 4，👍 2
   即使启用 `experimental.openTelemetry` 并配置 OTLP exporter，`opencode run` 仍不产生 trace span，影响可观测性。
   https://github.com/anomalyco/opencode/issues/13438

10. **[CLOSED] WebUI 无法上传视频文件** — 评论 3，👍 4
    使用 `opencode serve` 时向支持视频的模型传视频，提示 “Only images, PDFs, or text files can be attached here.”
    https://github.com/anomalyco/opencode/issues/21273

## 重要 PR 进展

1. **[OPEN] fix(core): respect model input limits** — rekram1-node
   为原生及 AI SDK 模型增加 `input` 限额，补齐目录输入限制到 provider 配置，并针对显式上限与上下文预算取更紧值。
   https://github.com/anomalyco/opencode/pull/39797

2. **[OPEN] feat(ai): support Gemini thinking levels** — rekram1-node
   显式映射 Google AI SDK thinkingConfig，支持 `thinkingBudget` / `includeThoughts` / `thinkingLevel` 任意组合。
   https://github.com/anomalyco/opencode/pull/39796

3. **[OPEN] fix(opencode): spawn configured posix shell directly on Windows** — brendanlefebvre
   修复 Windows 上配置 POSIX shell（如 msys64 bash）时 bash tool 不可用的问题，Closes #38799。
   https://github.com/anomalyco/opencode/pull/39795

4. **[CLOSED] [contributor] fix(core): preserve custom Codex endpoints** — opencode-agent[bot]
   保留用户自定义的 ChatGPT/Codex endpoint 行为，避免通用 model resolver 干扰 OAuth bearer 凭据。
   https://github.com/anomalyco/opencode/pull/39257

5. **[CLOSED] refactor(core): contain Codex in OpenAI plugin** — rekram1-node
   将 ChatGPT/Codex 路由与目录行为完全收敛到 OpenAI 插件内，Codex 模型走原生 provider，移除通用解析器中的专用逻辑。
   https://github.com/anomalyco/opencode/pull/39734

6. **[CLOSED] fix(core): map xAI native options** — rekram1-node
   显式映射 `@ai-sdk/xai` 参数，校验 reasoning effort、storage、prompt cache key 等，停止转发非法键。
   https://github.com/anomalyco/opencode/pull/39787

7. **[OPEN] [contributor] feat(tui): hot-reload local TUI plugins** — kitlangton
   本地 TUI 插件编辑后无需重启即可生效；插件 import/setup/渲染崩溃被隔离，不再拖垮整个应用。Closes #39777。
   https://github.com/anomalyco/opencode/pull/39776

8. **[OPEN] fix(session): stop retrying fixed-window usage quotas** — vinlee19
   对 5 小时/周/月固定窗口的 429 配额限制不再重试，因为重试注定失败。Closes #39790。
   https://github.com/anomalyco/opencode/pull/39791

9. **[CLOSED] feat(plugin): add session request hook** — rekram1-node
   新增 `session.request` 钩子，允许插件在请求发送前修改 URL、HTTP headers 及序列化后的 body。
   https://github.com/anomalyco/opencode/pull/39764

10. **[OPEN] fix(github): honor GHES REST and GraphQL endpoints** — rover0811
    让 GitHub Action 客户端读取标准 GHES endpoint 环境变量，修复企业版 GitHub 兼容性。Closes #39789。
    https://github.com/anomalyco/opencode/pull/39788

## 功能需求趋势

- **模型 / Provider 支持扩展**：社区持续关注新模型接入（Gemini thinking、xAI、Qwen、GLM、Friendli 等），以及模型能力的自动发现（如 Modal 模型、Local LAN 发现）。
- **会话管理与长上下文**：`/compact` 可配置化、长会话性能退化、历史会话持久化是高频需求点。
- **可观测性增强**：OTel trace 正确导出、错误信息可读性（如避免 ProviderInitError 掩盖真实原因）受到关注。
- **MCP 生态稳定性**：MCP server 子进程生命周期管理（孤儿进程、启动策略）成为社区焦点。
- **桌面端 / TUI 体验**：Linux PRIMARY 选择支持、文件管理增强、权限弹窗布局、快捷键注册等在桌面端与 TUI 层面持续被提及。

## 开发者关注点

- **长会话卡顿**：长时间对话后 OpenCode 明显变慢，新会话恢复流畅，影响日常使用。
- **模型兼容性碎片化**：OpenAI 兼容端点的参数差异（qwen、GLM、Ollama 等）频繁导致 401 或工具调用异常。
- **MCP 孤儿进程**：退出或重启后残留 MCP 子进程，多次更新后累积大量孤儿进程。
- **全局 vs 项目配置作用域**：项目 `.opencode/` 存在时全局 MCP 不加载，配置合并规则需更透明。
- **网络异常处理**：对不稳定网络（如国内访问 GitHub）缺少快速失败与重试策略，默认 60–120s 超时过长。
- **版本升级回归**：v1.15.x 系列出现的 edit 中断、历史会话消失等问题虽然已修复，但开发者对升级稳定性仍存顾虑。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi 社区动态日报 — 2026-07-31

### 1. 今日速览

今日社区焦点集中在 **终端兼容性与稳定性**：Wayland 剪贴板失效问题已获得修复 PR，多个因模型目录刷新停滞导致的 UI 挂起类 Issue 持续发酵。此外，**远程会话协议进入密集开发期**（#7344/#7348），为后续远程桌面、客户端分离等场景铺路。

---

### 2. 社区热点 Issues（10 个）

**#7248** [OPEN] Ctrl+V 在 Wayland 下静默失效（`readClipboardText` 仅支持 X11）
- 影响所有 Wayland 桌面用户；已有 PR #7261 修复，社区关注度高。
- [earendil-works/pi Issue #7248](https://github.com/earendil-works/pi/issues/7248)

**#7194** [CLOSED] 活动工具卡片滚出视口时 Pi 每 1s 全量重绘
- 远程沙盒用户反馈频繁重绘整个会话文本，属性能回归问题。
- [earendil-works/pi Issue #7194](https://github.com/earendil-works/pi/issues/7194)

**#7153** [OPEN] `/scoped-models` 命令因目录刷新停滞约 5 分钟无响应
- 命令同步等待目录刷新，期间编辑器清空但无任何加载提示，严重破坏交互体验。
- [earendil-works/pi Issue #7153](https://github.com/earendil-works/pi/issues/7153)

**#7047** [OPEN] Gemini 3.x 工具调用 ID 被剥离，多轮工具对话失败
- Gemini 3 要求回显唯一 ID，但 Pi 重放历史时丢失该字段，模型协作场景受阻。
- [earendil-works/pi Issue #7047](https://github.com/earendil-works/pi/issues/7047)

**#7027** [OPEN] API-Key 登录在保存凭据后可能挂起（目录刷新停滞时）
- 凭据已写入 `auth.json`，但登录对话框永久阻塞；获 4 👍，影响面广。
- [earendil-works/pi Issue #7027](https://github.com/earendil-works/pi/issues/7027)

**#6300** [OPEN] Windows 下每次按键输入行整体重绘（每个字符换行）
- Windows 10 + cmd/Windows Terminal 均复现，TUI 核心体验问题。
- [earendil-works/pi Issue #6300](https://github.com/earendil-works/pi/issues/6300)

**#7161** [OPEN] `anthropic-messages` 从不发送 `x-client-request-id`
- 网关层面无法按会话保持亲和性，代理负载均衡时对话可能被拆散。
- [earendil-works/pi Issue #7161](https://github.com/earendil-works/pi/issues/7161)

**#7187** [CLOSED] 第三方包清单错误导致静默崩溃，所有聊天会话不可用
- 单个包 manifest 拼写错误导致生产环境（screenpipe 嵌入）所有会话崩溃，暴露校验和错误隔离缺陷。
- [earendil-works/pi Issue #7187](https://github.com/earendil-works/pi/issues/7187)

**#7332** [CLOSED] 上下文增长后流式输出显著变慢
- 用户 30 秒录屏展示无输入时输出速率严重下降，推测与 TUI 渲染或协议处理有关。
- [earendil-works/pi Issue #7332](https://github.com/earendil-works/pi/issues/7332)

**#6907** [OPEN] README 缺少安装章节
- 新用户从 GitHub 无法直接获得安装指引，社区请求补充。
- [earendil-works/pi Issue #6907](https://github.com/earendil-works/pi/issues/6907)

---

### 3. 重要 PR 进展（10 个）

**#7261** [CLOSED] Wayland 剪贴板修复：`wl-paste` / `xclip` / `xsel`
- 关闭 #7248；Linux 下按会话类型使用对应 CLI 工具读取剪贴板。
- [earendil-works/pi PR #7261](https://github.com/earendil-works/pi/pull/7261)

**#7344** [CLOSED] 新增远程会话线协议（`@earendil-works/pi-protocol`）
- 定义类型安全的远程会话命令/事件/快照，实现 CBOR 编码与分帧，浏览器安全适配。
- [earendil-works/pi PR #7344](https://github.com/earendil-works/pi/pull/7344)

**#7348** [OPEN] 新增运行时无关的会话客户端（`@earendil-works/pi-client`）
- 连接生命周期建模为可辨识联合，支持多会话句柄、可观测监听失败，面向远端会话场景。
- [earendil-works/pi PR #7348](https://github.com/earendil-works/pi/pull/7348)

**#7309** [CLOSED] 修复 RPC stdout 处理中 `JSON.parse` 未捕获问题
- 子进程输出非 JSON 行（日志/警告/截断）时不再崩溃；关闭 #7300。
- [earendil-works/pi PR #7309](https://github.com/earendil-works/pi/pull/7309)

**#7163** [OPEN] SQLite FTS5 全文搜索索引支持
- 为 `SessionRepo.search()` 增加 FTS5 内容表迁移；JSONL/内存后端仍待优化。
- [earendil-works/pi PR #7163](https://github.com/earendil-works/pi/pull/7163)

**#7231** [CLOSED] Markdown 扩展 API（关闭 #6747）
- 使扩展可修改代理消息的渲染表现（如公式渲染器）而不影响发给 LLM 的内容。
- [earendil-works/pi PR #7231](https://github.com/earendil-works/pi/pull/7231)

**#6784 → #7340** [CLOSED] 修复浅色终端背景下加粗 Markdown 文本不可见
- bold-as-bright 终端（浅色主题）下加粗文本显示为白底白字；改为显式设置前景色。
- [earendil-works/pi PR #7340](https://github.com/earendil-works/pi/pull/7340)

**#7343** [CLOSED] Agent 增加关停生命周期（`AgentHarness.shutdown()`）
- 幂等关停，拒绝新任务、中止活动轮次/压缩/树导航，并保证不删除持久会话。
- [earendil-works/pi PR #7343](https://github.com/earendil-works/pi/pull/7343)

**#7011** [CLOSED] 修复原生 ESM 扩展与宿主模块状态分离问题
- 拦截 jiti 的原生 import，使扩展复用宿主 Pi 包，避免模块单例状态分裂。
- [earendil-works/pi PR #7011](https://github.com/earendil-works/pi/pull/7011)

**#7325** [OPEN] 通过新 Model Runtime 支持自定义压缩（custom-compaction）
- 针对 `registerProvider()` 注册的模型无法被 compat `complete()` 调度的兼容性缺陷。
- [earendil-works/pi PR #7325](https://github.com/earendil-works/pi/pull/7325)

---

### 4. 功能需求趋势

从近期 Issue/PR 看，社区关注方向集中在：

- **模型目录与服务状态健壮性**：多个 Issue 指向目录刷新停滞导致 UI 挂起、登录卡死、刷新不可恢复（#7153 / #7027 / #7301 / #7323），是当前最突出的稳定性痛点。
- **终端/平台兼容性**：Wayland 剪贴板、Windows TUI 重绘、iTerm2 渲染异常等跨平台问题高频出现，说明用户环境多样、对 TUI 适配要求高。
- **扩展 API 能力**：Markdown 渲染扩展（#6747/#7231）、状态化 ACP Agent 后端（#7320）、Loadout 动态管理（#7148）等需求表明社区希望 Pi 拥有更开放的扩展边界。
- **远程会话与多设备协作**：`pi-protocol`、`pi-client` 和相应传输抽象积极开发（#7344/#7348），预示官方远程会话场景即将成型。
- **新模型/提供商支持**：Bedrock Mantle（#6216）、OpenAI Background Mode（#7339）、Gemini 3 工具 ID（#7047）等持续跟进业界新特性。
- **会话管理增强**：搜索索引（#7163）、上下文窗口配置（#5064）、状态化继续/服务端压缩（#7317）反映用户对大型会话的管理需求上升。

---

### 5. 开发者关注点

- **目录刷新停滞引发的连锁故障**：从 `/scoped-models` 无响应，到登录挂起、`refresh()` 永久不可恢复，再到 `pi update --models` 单次失败即中断全部刷新——开发者集中反馈刷新链路缺少超时降级、重试与错误可视化。
- **错误隔离与可观测性**：第三方包 manifest 错误即可导致全部会话崩溃，暴露了错误处理和 schema 校验的脆弱性；开发者建议按扩展隔离错误、避免“静默崩溃”。
- **流式渲染性能退化**：工具卡片滚动触发全量重绘、长对话输出越来越慢，说明 TUI 渲染对增量渲染和可视区域裁剪仍有优化空间。
- **跨平台体验一致性**：Wayland 剪贴板、Windows 输入重绘、iTerm2 闪烁/跳变等影响“首次体验”，开发者希望官方对主流终端组合做系统化回归测试。
- **协议/头信息标准化**：`x-client-request-id` 缺失、OAuth token 检测硬编码等，在网关/代理接入场景中被频繁点名，希望提供可配置能力。

---

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 生成时间：2026-07-31

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-07-31

> 数据来源：github.com/QwenLM/qwen-code

## 1. 今日速览

昨日发布了 `v0.21.1-nightly.20260731` 夜间版，主含 CI 与 Web Shell 修复。Issue 侧出现 **Anthropic 转换器的 4 个连环 Bug**（#8160/#8161/#8162/#8159），且集中在消息内容生成的正确性上；另一热点是 **ACP 子进程内存授权缺陷**（#8182），守护进程为每个子进程分配宿主内存的 50%，存在 OOM 风险。PR 侧则聚焦于多代理运行时（Agent View 监督者）、Goal v3 接入 TUI、以及按工作区隔离内存等基础设施改造。

---

## 2. 版本发布

### v0.21.1-nightly.20260731.702932cc7
- **fix(ci)**：为 qwen-triage 容器任务添加默认 bash shell，修复容器内脚本执行环境不完整的问题。
- **fix(web-shell)**：内容截断，推测为 Web Shell 的渲染/交互修复，完整说明未在 Release 页面展示。

链接：[v0.21.1-nightly.20260731.702932cc7](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260731.702932cc7)｜[PR #7838](https://github.com/QwenLM/qwen-code/pull/7838)

---

## 3. 社区热点 Issues（10 个）

### #8124 启动横幅首帧渲染缺行（Windows / 间歇性）
TUI 启动横幅（`AppHeader` / `<Static>` 区域）首次 paint 时偶发丢失顶部约 3 行，并非之后被覆盖，而是第一次 `stdout` 写入即为残缺。与待处理的 provider update 相关。评论 9 条，为当日最高讨论量，Windows + 渲染时序问题，欢迎 PR 接入。

链接：https://github.com/QwenLM/qwen-code/issues/8124

---

### #8136 敏感信息清洗器：截断含端口消息、泄露含 `@` 密码
`sanitizeProviderWarning` 在剥离 URL 凭据时因 `indexOf` 定位逻辑缺陷导致两个 Bug：含端口号的 provider warning 被错误截断；URL 密码中若包含 `@` 字符，凭据无法剥离造成泄露。安全相关，评论 4 条，修复 PR #8137 已在开发中。

链接：https://github.com/QwenLM/qwen-code/issues/8136

---

### #8162 Anthropic 转换器：历史轮次中陈旧 thinking 签名未清理
当非最新 assistant 轮次的 `tool_use` 被早期清理/压缩移除后，对应的 `thinking`/`redacted_thinking` 块不会被后续 reconciliation 清理，导致发送给 Anthropic 的历史消息中残留孤儿 thinking 块。属于内容生成正确性问题，评论 4 条，欢迎 PR。

链接：https://github.com/QwenLM/qwen-code/issues/8162

---

### #8182 守护进程为每个 ACP 子进程授权宿主内存 50%
`qwen serve` 给每个 `qwen --acp` 子进程设置 V8 old-space 上限，直接取宿主内存且**不**按预期子进程数量均分——例如同时跑 4 个子进程时，每个仍按宿主内存的 50% 计算 ceiling，容量模型与宿主实际情况脱节，极易触发整机 OOM。新提交 bug，评论 2 条。

链接：https://github.com/QwenLM/qwen-code/issues/8182

---

### #8172 Agent Team：队友消息在整个多工具调用回合期间持续排队
`send_message` / `TeamManager` 的消息只在 `StreamingState.Idle` 时投递给 leader，导致消息不只是等待当前 response 结束，而是会积压至整个多工具调用回合完成，极大拖慢团队协作响应。评论 3 条。

链接：https://github.com/QwenLM/qwen-code/issues/8172

---

### #8138 worktree 场景下 settings.json 写入路径错误
在 git worktree（`enter_worktree` / `agent isolation:'worktree'`）中修改设置（如切换项目模型）时，配置被写入**全局/项目根目录**的 `.qwen/settings.json`，而非当前 worktree 的 `.qwen/` 目录，导致 worktree 配置隔离失效。评论 4 条，欢迎 PR。

链接：https://github.com/QwenLM/qwen-code/issues/8138

---

### #8146 桌面应用无法连接 LMStudio（Windows）
桌面版尝试连接 LMStudio API 时无任何请求发出，界面却显示持续运行 5 分钟。Windows 平台集成问题，评论 4 条，欢迎 PR。

链接：https://github.com/QwenLM/qwen-code/issues/8146

---

### #8177 macOS + tmux 下 IME 输入导致光标错位和文本乱码
本地 tmux session 中通过输入法输入中文时，出现光标位置错乱、残影、拼音片段混入已输入文本、候选窗与终端渲染重叠等问题。影响中文用户核心输入体验，评论 2 条，新上报。

链接：https://github.com/QwenLM/qwen-code/issues/8177

---

### #8092 围绕 Web Shell 构建低维护桌面应用
建议复用现有 Web Shell 作为桌面端 UI 与功能载体，替代当前独立的桌面 UI 实现，以降低维护成本。需包含系统集成能力。已标记 `need-discussion`，为桌面端演进方向的重要提案，评论 4 条。

链接：https://github.com/QwenLM/qwen-code/issues/8092

---

### #7966 如何获取会话中创建的文件？
用户询问如何区分工作区中由不同会话生成/修改的文件（包括直接写入和通过代码间接生成的），目前缺少会话到文件的映射能力。反映工作区审计/会话隔离诉求，评论 6 条，社区讨论度高。

链接：https://github.com/QwenLM/qwen-code/issues/7966

---

## 4. 重要 PR 进展（10 个）

### #7799 feat(cli): Agent View 监督者运行时
为本地 Agent View 引入监督者（supervisor）基础：认证本地 socket、JSON-line 控制协议、持久化 session 元数据存储、启动/停止处理及客户端辅助。是一系列 PR 的根 PR（栈位置 1/5），为本地多代理可视化与监控铺路。

链接：https://github.com/QwenLM/qwen-code/pull/7799

---

### #8005 feat(cli): 交互式 TUI 接入 Goal v3 运行时
新增 `/goal` 生命周期命令、持久化生命周期卡片与 footer 状态、Goal 感知的 resume/分支恢复，以及双通道输入队列（Goal 执行时普通消息排队等待）。有 `autofix/takeover` 标记，自动修复持续推进中。

链接：https://github.com/QwenLM/qwen-code/pull/8005

---

### #8056 fix(serve): 按选定工作区隔离托管内存
新增工作区限定的异步 remember/forget/dream 操作，通过可信工作区运行时和独立任务通道执行；同时提供 opt-in 的 exact-workspace 存储模式。解决托管内存跨工作区串扰问题。

链接：https://github.com/QwenLM/qwen-code/pull/8056

---

### #8093 feat(serve): 守护进程资源预算基础
为 `qwen serve` 建立资源预算（resource budgeting）框架，后续可基于子进程数量、负载等维度进行显存/内存配额控制。与 #8182（ACP 子进程内存超配）直接相关。

链接：https://github.com/QwenLM/qwen-code/pull/8093

---

### #8137 fix(cli): 将凭据剥离范围限定到 URL authority
重写 provider warning sanitizer：删除自定义凭据启发式，改为将每个类 URL 片段交给标准 URL 解析器，仅从 authority 中剥离凭据。直接修复 #8136 的截断和密码泄露问题，已标记 `review/self-reported`。

链接：https://github.com/QwenLM/qwen-code/pull/8137

---

### #8088 fix(cli): 为 VP 模式添加 uncaughtException 处理
增加 `process.on('uncaughtException')`，并在 alternate-screen（VP）模式下强化错误可见性。虽不声称修复 #7971/#7972/#7779/#7781 所列崩溃，但确保下次崩溃时可获得错误现场，避免静默异常。

链接：https://github.com/QwenLM/qwen-code/pull/8088

---

### #8150 feat(core): 添加 GenAI 首 Token 时间（TTFT）追踪
为 LLM spans 加入 OpenTelemetry GenAI v1.41 流式属性：`gen_ai.request.stream=true`，并记录 `gen_ai.response.time_to_first_chunk`（秒）。非流式请求不受影响。对服务延迟观测有直接价值。

链接：https://github.com/QwenLM/qwen-code/pull/8150

---

### #8050 fix: 测试套件 Windows 可移植化
让工作区测试套件和平台敏感运行时路径在 Windows 上表现一致，同时保留 POSIX-only 断言语义；复用现有 self-hosted Windows 验证 workflow，并指定稳定 locale 与临时目录。改善 Windows 平台 CI 质量。

链接：https://github.com/QwenLM/qwen-code/pull/8050

---

### #8057 feat(skills): 添加 disabled skill levels
新增 `skills.disabledLevels`（union-merged）配置，接受 `project/user/extension/bundled`。技能发现阶段即跳过禁用级别，例如设置 `["bundled"]` 可隐藏所有内置技能但保留宿主提供的技能。有 `autofix/takeover` 标记。

链接：https://github.com/QwenLM/qwen-code/pull/8057

---

### #8178 feat(channels): 按工作区隔离守护进程适配器状态
每个 daemon-managed channel 实例获得独立的适配器可访问状态目录，归属其解析出的工作区；目录名采用可读前缀 + 完整 channel 名的 hash，避免不安全字符路径穿越。继续推进工作区隔离体系。

链接：https://github.com/QwenLM/qwen-code/pull/8178

---

## 5. 功能需求趋势

| 方向 | 代表 Items | 趋势说明 |
|---|---|---|
| **Agent/多代理运行时** | #8172、#8128、#7799、#8005 | Agent Team 消息投递、子代理状态监控、本地 supervisor、Goal v3 进入 TUI，多代理产品化提速 |
| **资源/容量治理** | #8182、#8093、#8056、#8178 | 守护进程和 ACP 子进程的内存预算、按工作区隔离托管内存与适配器状态，为多租户/高并发场景打基础 |
| **可观测性** | #8150、#8175、#8179、#8128 | 从 LLM 首 Token 时间到工具执行结果分类，遥测体系系统化补齐 |
| **Windows 平台体验** | #7118、#8050、#7957、#8124、#8146 | 安装器、测试可移植性、粘贴文件、渲染与桌面集成问题集中上报 |
| **Web/桌面合一** | #8092、#8174、#8127 | 社区建议桌面端复用 Web Shell 以减少维护成本，Web Shell 自身 UI 细节持续打磨 |
| **内容生成正确性** | #8160、#8161、#8162、#8159 | Anthropic 转换器暴露 4 个独立正确性缺陷，输入清洗与历史一致性成焦点 |

---

## 6. 开发者关注点

- **Anthropic 转换器可信度**：昨日集中上报 4 个相关 Bug（tool_use_id 未按 charset 清洗、tool_result 顺序无保证、孤儿 thinking 残留、尾部 tool_use 被误删），提示多提供商兼容层需要系统性的“往返一致性”测试。
- **内存/资源失控风险**：#8182 中守护进程为每个 ACP 子进程授权宿主内存 50% 且不按子进程数均分，属于上线前必须解决的资源安全问题。
- **CI 稳定性**：一天内 3 个 CI 失败 issue（#8133、#8153、#8173），问题集中在 E2E 测试，且由 `qwen-code-dev-bot` 自动跟进，测试 flakiness 正在消耗社区注意力。
- **配置与工作区隔离**：#8138（worktree 配置写错目录）、#8056/#8178（工作区状态隔离），说明多项目/多工作区场景下的配置和状态归属是当前实际使用中的高频痛点。
- **中文输入体验**：#8177（macOS + tmux IME 错位/乱码）影响大量中文本地用户，是 CLITUI 输入法处理能力的一次集中反馈。
- **文件级会话审计**：#7966 对“哪些文件由哪个会话产生”的追踪诉求，呼应更广泛的 AGENT 行为可审计性话题，未来可能衍生出 workspace 变更归因方案。

---

*本日报由 AI 自动整理，数据截至 2026-07-31 当日更新，部分条目描述受限于 GitHub 原始文本截断。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-07-31

> 说明：原 DeepSeek-TUI 仓库已正式更名/迁移至 **Hmbown/CodeWhale**，以下内容基于该仓库最新数据。

## 1. 今日速览

CodeWhale（原 DeepSeek-TUI）v0.9.2 正式定稿发布，legacy 包 `deepseek-tui` 停止维护，品牌与产物统一为 `codewhale`。v0.9.3 重构密集推进：runtime 所有权收敛、CLI/TUI 控制面对等、命令边界拆分等多个 EPIC 同步更新；同时，桌面应用、GitHub Copilot 集成、无头 OAuth 等平台化需求成为新热点。

## 2. 版本发布

### v0.9.2 正式版
- **Codewhale** 成为 Shannon Labs 正式公开产品，`codewhale` 命令、npm 包与 release 资产统一为小写技术标识
- legacy npm 包 `deepseek-tui` 正式弃用，不再接收新版本；v0.8.x 的 `deepseek` / `d` 用户需迁移至 `codewhale`
- 补齐 v0.9.2 暂停的 handoff 修复：权限真实性、Fleet 设置/持久化、推理检查、compaction 错误处理、子代理监督与 steering、sandbox 真值、provider 凭据 UX、ambient 生命体轮廓渲染，并提取子代理 worktree 隔离、移除被取代的旧实现
- 相关 PR：[#4982](https://github.com/Hmbown/CodeWhale/pull/4982)

## 3. 社区热点 Issues

### #2870 EPIC：分阶段命令边界重构
- **评论 19 | 更新 07-30**
- 跟踪 #2791 的命令边界重构，将大规模重构拆分为可独立合并的多个小层，PR #2851 为参考实现。这是 v0.9.3 最核心的架构演进主线
- [GitHub Issue #2870](https://github.com/Hmbown/CodeWhale/issues/2870)

### #2369 CodeWhale 配置路径跨 OS/Cygwin 碎片化（含静默迁移 Bug）
- **评论 7 | 更新 07-30**
- Windows 与 Cygwin 下配置文件可能走不同的 home 目录解析规则，legacy 迁移可能静默失败，直接影响老用户升级
- [GitHub Issue #2369](https://github.com/Hmbown/CodeWhale/issues/2369)

### #4022 v0.9.3：定义 CLI/TUI 对子代理与运行时控制面的对等接口
- **评论 7 | 更新 07-30**
- 子代理状态、展开/折叠、取消目前只存在于 TUI 侧边栏；若未来有云应用/远程工作台，控制面不能被 TUI 独占
- [GitHub Issue #4022](https://github.com/Hmbown/CodeWhale/issues/4022)

### #3306 v0.9.3 重构：收敛 runtime 所有权，发布单可执行文件
- **评论 4 | 更新 07-30**
- 当前 main 有 18 个 Rust 包、约 77.1 万行代码，但 87% 集中在 `codewhale-tui`；TUI 仍维护与共享 crate 并行的 runtime/tool/config/session 路径
- [GitHub Issue #3306](https://github.com/Hmbown/CodeWhale/issues/3306)

### #4949 讨论："Constitution" 中文翻译——"宪法"还是"协作准则"？
- **评论 4 | 更新 07-30**
- PR #4908 作者将中文翻译改回"宪法"后引发争议：贴切性与政治敏感性各执一词，维护者邀请中文母语者投票定夺，是项目本地化讨论的典型样本
- [GitHub Issue #4949](https://github.com/Hmbown/CodeWhale/issues/4949)

### #4991 讨论：TUI 巨型 crate 的编译时间——大家有同感吗？
- **评论 1 | 更新 07-30**
- 开发者反馈在做 slash command 重构时大量时间花在等待编译，验证 monolith 已成为实际开发阻力
- [GitHub Issue #4991](https://github.com/Hmbown/CodeWhale/issues/4991)

### #4930 前台 shell 阻塞时按 Enter 应先 detach 再 steering
- **评论 1 | 更新 07-30**
- `sleep 30`、`cargo build` 等前台命令阻塞时，用户输入消息回车失败且无提示；期望是自动将阻塞任务移到 `/jobs` 后再接收消息
- [GitHub Issue #4930](https://github.com/Hmbown/CodeWhale/issues/4930)

### #5000 Engine：中断后保留可见的部分 assistant 文本到权威上下文
- **评论 1 | 创建 07-31 | 更新 07-31**
- 流式中断后 TUI 历史保留部分文本，但该文本不在 Engine 会话中，也不进入下一次模型请求，造成"看见的"与"实际生效的"不一致
- [GitHub Issue #5000](https://github.com/Hmbown/CodeWhale/issues/5000)

### #4986 功能：面向项目与 Agent 工作流的一等桌面应用
- **评论 1 | 创建 07-30 | 更新 07-30**
- 用户提出希望获得类似 Codex Desktop 的完整桌面产品体验，不必自己管理终端、工作目录、后台进程与项目级快捷方式
- [GitHub Issue #4986](https://github.com/Hmbown/CodeWhale/issues/4986)

### #4997 v0.9.3：将 GitHub Copilot 作为命名外部 ACP worker 后端
- **评论 0 | 创建 07-31 | 更新 07-31**
- 不把 Copilot 注册为 `ProviderKind`，而是作为外部 ACP worker 在运行时动态协商模型列表与能力，避免硬编码过时信息
- [GitHub Issue #4997](https://github.com/Hmbown/CodeWhale/issues/4997)

## 4. 重要 PR 进展

### #4993 v0.9.3 本地集成 train：协议真实性、doctor/路径、PDF 链删除、ocean 渲染、测量 ratchet
- **37 commits**，基于 main @ df3bfc7 本地构建验证，每个切片在独立 lane 中实施并审校后按依赖顺序集成
- [GitHub PR #4993](https://github.com/Hmbown/CodeWhale/pull/4993)

### #4982 release：最终定稿 CodeWhale v0.9.2
- 完成暂停的 v0.9.2 handoff 修复（权限真值、Fleet 持久化、推理检查、compaction 错误、子代理监督、sandbox、凭据 UX、ambient 轮廓），并提取子代理 worktree 隔离
- [GitHub PR #4982](https://github.com/Hmbown/CodeWhale/pull/4982)

### #4992 Layer 5.2：用户命令调度优先级、shadowing 与错误语义
- 新增 AT-004~AT-007 Gherkin 验收测试：用户命令 shadow 内置规范名/别名、缺失时回退、非法用户命令行为
- [GitHub PR #4992](https://github.com/Hmbown/CodeWhale/pull/4992)

### #4979 fix(TUI)：steering 前先 detach 前台 shell
- 处理 #4930：请求阻塞的前台 Bash 等待先移至 `/jobs`，再入队同轮 steer；同时保留 busy-Enter 队列行为，区分真实前台等待路径
- [GitHub PR #4979](https://github.com/Hmbown/CodeWhale/pull/4979)

### #4980 docs(permissions)：发布并锁定授权顺序
- 以 engine 级契约测试固化工具准入、hooks、注册需求、类型化权限规则、自动审查、仓库法、审批与 sandbox 强制力的组合顺序
- [GitHub PR #4980](https://github.com/Hmbown/CodeWhale/pull/4980)

### #4981 feat(TUI)：LaTeX 数学渲染增强
- 新增环境块渲染、常用内联命令、重音命令、命令感知下标/上标，环境匹配改为大小写不敏感
- [GitHub PR #4981](https://github.com/Hmbown/CodeWhale/pull/4981)

### #4985 feat(runtime-api)：任务列表按 workspace 过滤
- `GET /v1/tasks` 增加可选 `workspace` 过滤参数，`TaskSummary` 包含 workspace 路径，并补充过滤与截断顺序的回归测试
- [GitHub PR #4985](https://github.com/Hmbown/CodeWhale/pull/4985)

### #4984 fix：runtime 配置持久化与 workspace 任务范围
- 将 GUI 面向的 TUI runtime API 工作 rebase 到最新 main，对齐 provider 持久化修复，使 GUI 消费者可按 workspace 正确过滤任务
- [GitHub PR #4984](https://github.com/Hmbown/CodeWhale/pull/4984)

### #4990 fix(devcontainer)：支持 Windows 开发
- 改用专用开发镜像（含 Rust toolchain、rustfmt、pkg-config、DBus 头），以命名卷替代 host HOME bind mount，修复 Windows HOME 展开问题
- [GitHub PR #4990](https://github.com/Hmbown/CodeWhale/pull/4990)

### #4977 fix(TUI)：让 AltGr 输入的 "/" 到达 composer 而非打开帮助
- 修复 #4723：Windows 将 AltGr 报告为 Ctrl+Alt，巴西 ABNT2 布局的 `/` 是 AltGr+Q，被误匹配全局 Ctrl-/ 帮助 chord
- [GitHub PR #4977](https://github.com/Hmbown/CodeWhale/pull/4977)

## 5. 功能需求趋势

- **架构收敛与去重**：v0.9.3 的多条 EPIC 聚焦 runtime 所有权收敛（#3306）、TUI monolith 拆分（#3948/#3950/#3957）、命令边界重构（#2870），最终目标是单一可执行文件
- **平台化与外部集成**：桌面应用（#4986）、本地浏览器客户端（#4984/#4985）、GitHub Copilot 作为 ACP worker（#4997）、协议中立 ACP 客户端（#4996）
- **认证与安全**：无头/SSH/容器环境下的 OAuth PKCE 完成方式（#4998）、provider 凭据交接与锁定解析（#4994）、统一 home-scoped 凭据存储（#4987）
- **上下文与性能优化**：Compaction 结构化生存契约（#4394）、缩短工具描述并渐进披露 schema（#4708）、缩小默认工具面（#4706）、精简工具结果与子代理完成载荷（#4705）
- **TUI 渲染与视觉**：LaTeX 数学渲染（#4981）、ambient ocean 语义化持久化（#4995）、水母视觉重设计（#4807）
- **模型事实一致化**：每模型事实单一来源（#4599）、合并两套模型解析链（#4851）

## 6. 开发者关注点

- **编译时间是最普遍痛点**：TUI crate 集中了 87% 代码，18 个 crate / 77.1 万行 Rust，开发者已公开讨论编译等待问题（#4991），v0.9.3 重构被寄予厚望
- **配置/凭据路径碎片化**：Windows/Cygwin 路径解析不一致、`CODEWHALE_HOME` 与默认 store 不透明、静默迁移失败（#2369/#4987/#4994）
- **中断与状态一致性**：前台 shell 阻塞时的 Enter 交互误导（#4930）、流式中断后部分文本不进入权威上下文（#5000）、compaction 触发原因无法追溯（#4988）
- **键盘布局兼容性**：AltGr/ABNT2 等非美式键盘的按键冲突（#4977），说明 TUI 对国际用户输入法支持仍需加强
- **更名迁移成本**：`deepseek-tui` → `codewhale` 的品牌切换需要清晰的老用户迁移路径（v0.9.2 release notes）
- **中文社区参与度高**："Constitution" 翻译争议（#4949）展示出本地化质量已进入社区讨论议程，中文母语者的意见将直接影响翻译定稿

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*