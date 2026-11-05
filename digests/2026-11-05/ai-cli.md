# AI CLI 工具社区动态日报 2026-11-05

> 生成时间: 2026-11-05 18:03 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-11-05）

> 数据来源：各工具 GitHub 仓库过去 24 小时社区动态摘要。统计口径以各日报披露为准；部分数量为"更新数"而非全量 Issue 数，表内已标注。Kimi Code CLI 数据量极少，相关对比结论从略。

## 1. 生态全景

当前 AI CLI 生态已从"能力演示"阶段进入**可靠性、成本安全与平台一致性**的工程化打磨期：破坏性执行、失控循环与计费异常成为多个仓库共同的头号议题（Claude Code 的 Stop hook 循环约 $9,364、Codex 的服务器重启事故损失超 1 万美元、OpenCode 免费额度主帖 295 条评论）。与此同时，各工具都在重构 agent 运行时底层——子代理可靠性、沙箱权限语义、上下文压缩与统一 agent 循环成为 PR 密集区。发布节奏分化明显：Gemini CLI 与 Qwen Code 走稳定版/预览版双轨，Codex 高频推送 alpha，而 Claude Code、Copilot CLI、Kimi 当日无任何版本动作。

## 2. 各工具活跃度对比

| 工具 | Release（24h） | Issues（更新数） | PR（更新数） | 当日焦点 |
|---|---|---|---|---|
| Claude Code | 0 | 约 15 条（列举 10 条 + 4 条补充） | 0 | 成本失控、`rm -rf` 数据丢失、桌面键位需求（👍88） |
| OpenAI Codex | 5（0.167/0.168 alpha） | 10 条（详列）+ 3 条补充 | 10 条（全 CLOSED，copyberry[bot]） | 破坏性执行事故（397 评论/👍478）、Guardian v3 重构 |
| Gemini CLI | 2（v0.67.0、v0.68.0-preview.0） | 10 条 | 10 条（含 CI/安全加固） | Subagent 可靠性（P1 多项）、安全加固 |
| GitHub Copilot CLI | 0 | 21 条更新（详列 10 条） | 0 | ACP 与交互模式一致性、模型路由挂起 |
| Kimi Code CLI | 0 | 0 | 1 条（CLOSED） | 无有效社区信号 |
| OpenCode | 1（process-daemon 0.5.0） | 10 条 + 3 条补充（主帖 295 评论） | 10 条（含 Console Phase 3 堆叠 PR） | 计费/免费额度、shell 执行迁移到进程守护 |
| Pi (pi-mono) | 0 | 10 条 | 10 条 | macOS 长会话高 CPU（29 评论）、上下文计数错误 |
| Qwen Code | 3（v0.26.8、SDK v0.1.28、nightly） | 50 条更新（多为 bot CI 失败；详列 10 条） | 10 条 | CI 噪音、Web Shell 性能、统一 Agent 循环 |
| DeepSeek TUI | 0 | 2 条 | 13 条更新（多数 OPEN） | Windows 剪贴板图片链路、子代理路径解析 |

**要点**：Issues 讨论强度排序（按单帖互动）为 Codex（397 评论）> OpenCode（295 评论）> Claude Code（👍88）> Pi（29 评论）> Copilot/Qwen。PR 密度以 DeepSeek TUI（13）、Codex（10，但均为机器人当日关闭）和 OpenCode/Pi/Gemini/Qwen（各 10）居前。Qwen 的 50 条 Issue 更新中人工信号占比很低。

## 3. 共同关注的功能方向

**（1）破坏性执行防护与成本上限**（Claude Code、Codex、Gemini CLI）
- Claude Code #107256：Stop hook 循环无守卫、无单会话支出上限，六天约 $9,364；#107271 分词问题导致 `rm -rf` 删除 `.git`。
- Codex #59060：执行"重启服务器"摧毁 systemd 与容器，损失超 1 万美元；#58898：xhigh 多智能体审计 117 秒耗尽 5 小时配额（余额 22%→98%）。
- Gemini #22672：Agent 应抑制 `git reset`/`--force` 等破坏性操作。
- 共性诉求：**事前确认 + 循环守卫 + 支出/配额上限 + 可恢复路径**。

**（2）上下文与成本可见性/可控性**（Copilot CLI、OpenCode、Pi、Qwen Code）
- Copilot #5151（工具定义 15K→约 260K token）、#5220（Claude 缓存 TTL 希望 1 小时）、#5362（模型判定式上下文裁剪）。
- OpenCode #62059（同款模型判定裁剪）、#59861（成本显示）、#61352（上下文消耗过快）。
- Pi #10287（网络重试后计数从约 42k 跳至 330,081）、#7730（长会话 CPU 50–110%）。
- Qwen #16171（live replay 保留完整文件内容致会话极慢）。
- 注意：#5362 与 #62059 诉求高度雷同，属跨工具趋同设计。

**（3）静默失败与"展示即实际"**（Claude Code、Gemini CLI、Copilot CLI、Qwen Code）
- Claude Code #107459（hook 输出静默截断为 2KB）、#88113（settings.json 静默剥离未知键）。
- Gemini #22323（MAX_TURNS 误报 success）、#22267（settings.json 覆盖对 Browser Agent 不生效）。
- Copilot #5363（ACP 上报模型与实际不符）、#4438（技能设置后"Skill not found"）、#5359（恢复会话后工具引用 400）。
- Qwen #14532（`sensitive: true` 未进入 MCP 请求头）、#11955（桌面忽略主题/语言）。

**（4）MCP / 插件 / ACP 生态健壮性**（四家以上）
- Claude Code：#107604（插件 MCP 400 鉴权）、#104133（Datadog MCP 仍需 `/v1/mcp` 迁移）。
- Gemini：#29901/#30148/#30154 多个 ACP PR。
- Copilot：#5354（ACP 未暴露 Fusion）、#5229（OAuth 刷新差异）。
- OpenCode：#61867（V2 缺 SSE 回退致远程 MCP 405）、#62068（插件重载 ENOENT）。
- Qwen：#16242（按需加载凭证）、#14532。

**（5）子代理/多智能体可靠性**（Gemini CLI、DeepSeek TUI、Codex、Qwen Code）
- Gemini #21409（generalist agent 永久挂起，👍8）、#21983（Wayland 下 browser subagent 失败）。
- DeepSeek #7227/#7226（绝对 vs 相对路径校验不对称）、#7228（投递状态硬编码误报）。
- Qwen #15327（统一 agent 循环）；Codex Guardian v3 系列 PR 重构审核/证据体系。

**（6）终端与 TUI 环境兼容**（Pi、Copilot CLI、Qwen Code、OpenCode、DeepSeek TUI）
- Pi #10628（tmux 吞 OSC 52）、#11802（kitty CSI-u）。
- Copilot #5320 与 Qwen #16407 同时提出 **OSC 7501 状态上报**。
- OpenCode #62087（Windows 误启 PowerShell 5.1）、#61686（home/end 键）。
- DeepSeek TUI #7217/#7218/#7221（Windows QQ 截图剪贴板）。

**（7）CI/Issue 治理噪音**（Qwen Code、Claude Code、Gemini CLI）
- Qwen 50 条 Issue 更新多为 `qwen-code-dev-bot` 自动生成，#14724 达 201 条评论持续 17 天未关。
- Claude Code #107459 是对 #44086/#70460 的重新提交，前序被不活跃 bot 关闭。
- Gemini #20079（符号链接 agent 被 `Dirent.isFile()` 跳过）。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 终端/桌面一体化体验、hooks 与 skills 深度定制 | 个人高频开发者、桌面重度用户 | hook 机制重、配置以 settings.json 为核心；当日以企业级安全（telemetry、connector 权限）与 IDE 转录视图为诉求 |
| **OpenAI Codex** | 沙箱安全边界、Guardian 审核证据体系、Cloud/Dots 会话 | 企业/Business 订阅、Windows 企业环境 | Rust 端高频 alpha；PR 集中重构 Guardian v3（证据快照、增量捕获、拒绝重采样），内部审核体系架构升级中 |
| **Gemini CLI** | Subagent 体系、ACP 编辑器集成、AST 代码理解探索 | 开源开发者、Zed/JetBrains/VS Code 用户 | 稳定/预览双轨；强调 OS 沙箱 + bash 原生工具链（#19873），并行推进安全加固 PR（CI 密钥、错误报告隐私） |
| **GitHub Copilot CLI** | 与 GitHub 生态耦合、ACP 第三方集成、模型路由 | 企业 Copilot 订阅、IDE/终端集成方 | 无版本发布、无 PR；问题集中在 ACP 与交互模式的能力落差及模型透明度，Windows+企业策略是缺陷高发区 |
| **OpenCode** | 多客户端（TUI/desktop/Console）、免费额度商业模式 | 成本敏感个人开发者、自托管用户 | 架构迁移中：shell 执行迁往 process-daemon，Copilot 迁移原生 ai 协议（-3,400 行 vendored 代码）；Console 多客户端进入 Phase 3 |
| **Pi (pi-mono)** | 终端性能、多提供商扩展、会话同步 | 极客/多设备用户、嵌入式宿主场景 | TypeScript + pi-schema；偏好修复优先于新功能，探索 session sync 与 Workers 宿主 |
| **Qwen Code** | 统一 Agent 循环、托管 Agent 性能、LSP 代码智能 | 开源/中文社区、SDK 集成方 | 以 `experimental.unifiedAgentLoop` 为旗标收敛架构；CI 自动化程度高但噪音大 |
| **DeepSeek TUI** | Windows 剪贴板/图片链路、子代理路径正确性 | Windows 桌面用户、中文终端场景 | 贡献门（contribution-gate）驱动的密集小修；向后兼容旧版本会话 |

## 5. 社区热度与成熟度

**社区活跃度（讨论深度）**
- **第一梯队**：Codex 与 OpenCode——单帖 395/295 评论量级，且分别对应"安全事故"与"计费"两类结构性问题，讨论含高价值根因分析（如 Codex #37722 给出确定性根因与 A-B-A 因果测试）。
- **第二梯队**：Claude Code、Gemini CLI、Copilot CLI——议题分散、多人跟进，但缺少超长讨论串；Claude Code 的高赞需求（👍88）长期 OPEN 已超两个月。
- **第三梯队**：Pi、DeepSeek TUI——议题集中、闭环快，Pi 多条 Issue 当日即 CLOSED/no-action。

**快速迭代阶段**
- **Codex**：5 个 alpha/24 小时，`.3.1`/`.3.2` 补丁式编号提示 0.167 线反复修正；Guardian v3 PR 当日提交当日关闭，节奏极快但 Release 无变更说明，外部难以评估影响。
- **OpenCode**：架构级迁移同步进行（daemon + Console Phase 3 堆叠 PR），属高风险高收益迭代期。
- **Qwen Code**：稳定/预览/nightly 三线并行 + SDK 同步发布，但**CI 噪音掩盖真实信号**，且 SDK 发布说明混入旧版本信息，流程成熟度落后于迭代速度。

**成熟度信号（偏弱项）**
- Release 可读性：Codex alpha 正文仅"Release + 版本号"；Qwen SDK 说明混入旧版信息。
- Issue 治理：Claude Code、Gemini、Qwen 均出现 bot 误关或 bot 刷屏，影响问题反馈可信度。
- Kimi Code CLI 当日零信号，无法评估活跃度。

## 6. 值得关注的趋势信号

1. **"安全护栏"正从功能变为准入项**：两个单日万美元级损失案例（Claude Code #107256、Codex #59060）说明，**破坏性命令的事前确认、循环守卫与单会话/单任务预算上限**将成为企业采购的硬性评估维度。开发者选型时应核查工具是否具备：执行前 dry-run/确认、token 与金额双上限、可恢复快照。

2. **上下文管理进入"模型判定式裁剪"共识期**：Copilot #5362 与 OpenCode #62059 同日出现几乎相同的提案，叠加 Codex #58898 的 token 跃升与 Pi #10287 的计数失真，表明**上下文计数准确性 + 可编程裁剪策略**是下一轮工具竞争力的核心。

3. **静默失败是信任的隐形杀手**：静默截断、静默剥离配置键、静默替换模型、静默降级状态——四家工具均集中出现此类问题。对技术决策者而言，**"可观测性"（日志、退出状态首行、trace 记录成本）应与功能广度同等权重评估**。

4. **ACP 成为第三方集成的事实接口，但实现一致性不足**：Copilot #5354/#5363、Gemini 多个 ACP PR、Qwen #16306/#16404 共同显示 ACP 正被 IDE/终端广泛接入，但模型上报、hooks 触发、stdio 缓冲等行为在各工具间并不统一，**集成方需为每家做适配层**。

5. **终端协议生态在自发标准化**：Copilot #5320 与 Qwen #16407 独立提出 OSC 7501 状态上报，加上 Pi 对 tmux/kitty 的兼容修复，暗示**终端-AI 会话状态协议**有望形成社区事实标准，值得终端模拟器与 TUI 框架提前跟进。

6. **自动化贡献的双刃效应**：Codex 的 copyberry[bot]、Qwen 的 dev-bot 带来高 PR/Issue 吞吐，但也造成 Issue 噪音与"无变更说明的 Release"。**建议读者以人工标注的 P0/P1 Issue 与带 repro 的条目作为真实信号源**，对 bot 提交只做趋势观察，不据此判断版本质量。

7. **Windows 与移动/非主流终端是长期欠账区**：Copilot（Windows+企业策略）、Codex（Windows 沙箱凭据群，6–10 月持续未解）、OpenCode（Windows PowerShell 版本）、DeepSeek TUI（Windows 剪贴板）、Pi（Termux/Android、kitty）共同显示**跨平台一致性仍是行业性短板**，Windows 企业用户选型时需预留更高兼容成本。

---

*本报告仅基于所给日报材料整理；所有数字、Issue/PR 编号与表述均来源于各日报原文，未做材料外补充或推断。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-05）

> 说明：本次提供的 PR 数据中评论数字段均为 `undefined`，无法据此排出真实热度，因此"热门 Skills 排行"按**影响范围与讨论线索**（对应 Issue 数、跨技能复用、发布时间与更新活跃度）排序，并明确标注状态。所有条目均来自官方仓库 anthropics/skills。

---

## 1. 热门 Skills 排行

| 排名 | Skill / PR | 功能 | 讨论热点 / 关联线索 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 系列修复**（#1298、#1997、#1681） | 用于创建与评估新 Skill 的工具链 | 触发评估误判、Windows 下 subprocess 失败、YAML frontmatter 解析失真、脚本无法独立运行；对应 Issue #556（run_eval.py 触发率 0%）、#1394（eval-viewer XSS） | OPEN |
| 2 | **mcp-builder 修复**（#1742） | 构建 MCP server 的 Skill | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 改名与自定义 header；关联 Issue #1390（evaluation.py 对所有真实 MCP server 打分 0/N） | OPEN，修复 #1668 |
| 3 | **docx 系列**（#1792、#1734） | Word 文档处理（接受修订、批注清理） | LibreOffice 超时被误报为成功、孤立批注检测；关联 Issue #2018（merge_runs.py 写出非法 XML） | OPEN |
| 4 | **webapp-testing 系列**（#1980、#1976） | 浏览器/Web 应用自动化测试 | `shell=True` 命令注入风险、textarea/select 元素识别错误 | OPEN |
| 5 | **xlsx 修复**（#2019） | Excel 重算与外部链接风险识别 | 工作表级 defined names 与别名漏检导致假阴性 | OPEN，修复 #2013 |
| 6 | **pptx 修复**（#1975） | PPT 缩略图渲染 | `--cols` 非法值延迟报错 | OPEN，修复 #1809 |
| 7 | **Pyxel 游戏开发**（#525） | Python 复古游戏创建与无头验证 | 早期提交、跨半年持续更新，属新的垂直场景 | OPEN |
| 8 | **md2video-audio**（#1703） | 将 Markdown 直接编译为带语音的 MP4 | "零成本"内容生产类新 Skill | OPEN |

值得注意：`document-typography`（#514）、`notion-spec-to-implementation` 与 `quantitative-resume-auditor`（#1245）、`proofcore-contract-auditor`（#1771）、`scnet-hpc`（#1615）均为新方向提案，但均无 Issue 讨论支撑。

---

## 2. 社区需求趋势

基于 Issues 讨论量（46 / 17 / 13 / 10 / 10 条等），社区诉求集中在以下方向：

1. **信任与安全边界（最高热度，Issue #492，46 条评论）**：社区 Skill 冒用 `anthropic/` 命名空间、假扮官方 Skill，用户可能对第三方 Skill 授予过高权限。这是当前生态最集中的安全诉求。
   https://github.com/anthropics/skills/issues/492

2. **组织级共享与分发（Issue #228，17 条评论）**：希望摆脱"下载 .skill 文件 → 通过 Slack 或 Teams 发送 → 同事手动上传"的流程，提供组织内共享 Skill 库。
   https://github.com/anthropics/skills/issues/228

3. **Skill 评测可信度（Issue #556，13 条评论）**：`run_eval.py` 在所有查询下触发率为 0%，评测工具本身不可信是社区反复反馈的核心痛点。
   https://github.com/anthropics/skills/issues/556

4. **上下文效率与状态压缩（Issue #1329，10 条评论；Issue #1487，5 条评论）**：一方面有人提议 `compact-memory` 用符号化记法压缩长会话状态，另一方面 `claude-api` 单次注入约 156k tokens 被指耗尽上下文窗口。这类需求体现为既要减少 token 占用，也要避免过度注入。
   https://github.com/anthropics/skills/issues/1329
   https://github.com/anthropics/skills/issues/1487

5. **AI 输出质量治理（Issue #1385，7 条评论；Issue #412 已关闭）**：提案"预任务校准 → 对抗式审查 → 交付验证"三段式质量门，以及 agent 治理（策略执行、威胁检测、审计轨迹）。
   https://github.com/anthropics/skills/issues/1385
   https://github.com/anthropics/skills/issues/412

6. **文档类 Skill 的规范性与插件重复（Issue #189，6 条评论，👍9）**：`document-skills` 与 `example-skills` 安装内容完全相同，导致上下文重复占用。
   https://github.com/anthropics/skills/issues/189

---

## 3. 高潜力待合并 Skills

以下 PR 更新活跃、问题界定清晰，或已有对应 Issue 编号，相对更可能近期落地：

- **#1742 mcp-builder（mcp≥2 兼容）**：直接修复 #1668，2026-10-08 仍在更新，属工具链基础兼容性修复。
  https://github.com/anthropics/skills/pull/1742
- **#2019 xlsx（defined names 解析）**：有明确 issue 号 #2013，2026-11-03 更新，是最新活跃的修复之一。
  https://github.com/anthropics/skills/pull/2019
- **#1980 webapp-testing（移除 shell=True）**：安全加固类改动，风险低、理由充分。
  https://github.com/anthropics/skills/pull/1980
- **#1977 / #1976 / #1975 gerardrecinto 三连修复**：分别对应 #1897、#1891、#1809，改动小、边界清晰；但三者均停留在 2026-10-18 ~ 10-27，需关注是否停滞。
  https://github.com/anthropics/skills/pull/1977
  https://github.com/anthropics/skills/pull/1976
  https://github.com/anthropics/skills/pull/1975
- **#1997 skill-creator（YAML frontmatter 解析）**：影响评测与描述优化两条命令，属核心工具正确性。
  https://github.com/anthropics/skills/pull/1997
- **#525 Pyxel（新场景 Skill）**：2026-03-05 创建、2026-11-01 仍更新，长期维护意愿明显，但合并前景取决于维护方对新场景的接纳度。

---

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是"先让生态可信、可度量"——即解决 Skill 的命名空间信任边界、评测工具失真与上下文过度占用，其次才是新增垂直场景 Skill；对比之下，新 Skill 提案的热度远低于对现有 Skill 正确性与安全性的修复讨论。

---

# Claude Code 社区动态日报 · 2026-11-05

> 数据来源：github.com/anthropics/claude-code。过去 24 小时无版本发布、无 PR 更新；以下内容全部基于提供的 Issues 数据。

## 1. 今日速览

今日社区动态主要来自 Issues 层面：无新版本、无 PR。最突出的是**成本与数据安全**类缺陷——一个 Stop hook 循环在六天内产生约 $9,364 的费用，另有 agent 执行的 `rm -rf` 在 bypass 模式下删除了整个仓库，以及工作区被整体删除的报告。桌面端交互定制（Enter/Ctrl+Enter 键位）仍是点赞最高的需求（👍88），但状态为 OPEN 且已持续两个多月。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

1. **[#107256](anthropics/claude-code Issue #107256) Stop hook 循环失控，六天约 $9,364（成本 / hooks，OPEN）** — 该 Issue 指出：Stop hook 持续返回 block 时，agent 会无限运行，既没有循环守卫，也没有单会话支出上限，并伴随 auto reload 反复触发（headless 运行）。这是本期影响最大的一条，直接关系成本安全。
2. **[#107271](anthropics/claude-code Issue #107271) Agent 写入的 helper 在 bypass 模式下 `rm -rf` 删除仓库根目录（data-loss，OPEN）** — zsh/bash 分词行为不一致，导致未加引号的 `$D` 被展开并删除了 `.git`，过程中没有任何确认提示。这是破坏性数据丢失，优先级很高。
3. **[#107587](anthropics/claude-code Issue #107587) 修复方向键导航时删除整个工作区（data-loss，OPEN）** — 平台为 Linux、终端为 VS Code，版本 2.1.318。与上一条同属 agent 误操作类风险，已带 `data-loss` 标签。
4. **[#89673](anthropics/claude-code Issue #89673) 桌面端希望 Enter 换行、Ctrl/Cmd+Enter 提交（20 评论，👍88，OPEN）** — 本期评论与点赞最高，反映桌面端输入体验与编辑器习惯不一致，是社区呼声最强的交互需求。
5. **[#107459](anthropics/claude-code Issue #107459) SessionStart hook 输出超 1 万字符被静默截断为 2KB 预览（hooks，OPEN）** — 用户无任何警告、模型跳过剩余内容；作者注明这是对 #44086/#70460 的重新提交，而这些前序 issue 均被不活跃 bot 关闭且无维护者回应，反映出**问题关闭机制的信任问题**。
6. **[#73413](anthropics/claude-code Issue #73413) VS Code 扩展增加 Summary / Normal / Verbose 转录视图（IDE / UI，OPEN）** — 用于隐藏工具调用产生的信息干扰，是 IDE 体验方向中长期存在的需求（自 7 月提出）。
7. **[#88113](anthropics/claude-code Issue #88113) settings.json 写入时静默剥离 hook 分组和条目中的未知键（hooks，OPEN）** — 带 repro，属于配置被静默改写的隐患，会影响依赖自定义字段的 hooks 用户。
8. **[#107232](anthropics/claude-code Issue #107232) 超过 5 分钟的 API 请求无法处理（Linux / API，OPEN）** — 与长任务、headless 工作流直接相关。
9. **[#87312](anthropics/claude-code Issue #87312) /auto-mode-setup 全局存储 autoMode.environment 且无 per-repo 键，跨仓库事实被静默混合（CLOSED）** — 本期少见的高影响已关闭条目（👍5），同时存在配套仍开放的重复写入问题 #87233。
10. **[#107555](anthropics/claude-code Issue #107555) 一次性纠正被固化为永久规则（memory / skills，OPEN）** — 模型之后把它当作“用户的决定”引用，涉及记忆与技能的可靠性，对长期多日工作者影响明显。

其他值得留意的条目：**[#106284](anthropics/claude-code Issue #106284)** 桌面聊天中为自定义连接器写工具设置的“始终允许”被忽略（仅提供“允许一次”）；**[#106204](anthropics/claude-code Issue #106204)** `DISABLE_TELEMETRY=1` 导致 `/advisor` 显示为未知命令；**[#104133](anthropics/claude-code Issue #104133)** Datadog MCP 仍使用废弃的 `/api/unstable` 端点，迁移到 `/v1/mcp` 的路径不明；**[#107604](anthropics/claude-code Issue #107604)** 桌面 Code 标签页中 github 插件 MCP 连接报 400 “Authorization header is badly formatted”。

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本期略。

## 5. 功能需求趋势

- **终端/桌面输入与键位定制**：Enter/Ctrl+Enter 提交行为（#89673）、agent view 关闭悬停选中并支持恢复误删会话（#107489）。
- **IDE 集成体验**：VS Code 转录视图分级以降低工具调用干扰（#73413）。
- **hooks 与配置可靠性**：hook 输出长度静默截断（#107459）、settings.json 未知键被剥离（#88113）、Stop hook 缺少循环守卫和支出上限（#107256）。
- **跨环境/多仓库隔离**：`/auto-mode-setup` 的 per-repo 存储问题（#87312、#87233）、always-on 主机上 Remote Control 一机一服务按会话选项目（#100303）。
- **MCP 与插件生态维护**：自定义连接器权限持久化（#106284）、官方插件 MCP 鉴权失败（#107604）、第三方 MCP 端点迁移（#104133）。
- **记忆/技能与模型行为正确性**：一次性纠正被固化为规则（#107555）、PR 审查漏掉静默丢邮件路径（#107582）。

## 6. 开发者关注点

- **成本与失控执行防护是首要诉求**：缺少循环守卫、单会话支出上限与 auto reload 保护，已被实际费用数据佐证；idle compaction 在用量限制锁定期跳过、重置后冷缓存全量重写（#107367）进一步加剧成本焦虑。
- **数据丢失风险反复出现**：`rm -rf` 分词问题、修复时的整库删除、误删会话无法恢复——开发者希望补上提示确认与恢复路径，而不只是事后报告。
- **静默行为不可接受**：hook 输出被截断、settings.json 键被剥离、telemetry 关闭隐藏命令、连接器权限被忽略，共性是“无警告、无日志”。
- **Issue 治理的可信度**：多条 issue 被不活跃 bot 关闭且无维护者回应（#107459 是对多次关闭报告的重新提交），影响问题反馈的有效性。
- **平台差异问题**：Linux 长请求、Windows 鉴权/MCP、macOS hooks/permissions 各自存在集中缺陷，跨平台一致性仍需关注。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-05）

## 1. 今日速览

今天最受关注的是 Issue #59060：Codex CLI 被要求重启服务器后，破坏了 systemd、摧毁容器并运行了随机脚本，用户报告损失超过 1 万美元，评论达到 397 条、点赞 478。版本方面，过去 24 小时推送了 5 个 rust 端 alpha 版本（0.167.x / 0.168.x 系列），但 Release 说明仅有版本号，无具体变更内容。PR 侧集中在 Guardian v3 证据管理与 TUI 渲染修复，且大多为 copyberry[bot] 提交并于当日关闭。

## 2. 版本发布

过去 24 小时共 5 个新 Release，均为 alpha 预发布版本，分别属于 0.167 和 0.168 两条线：

- `rust-v0.168.0-alpha.3` — Release 0.168.0-alpha.3
- `rust-v0.168.0-alpha.2` — Release 0.168.0-alpha.2
- `rust-v0.167.0-alpha.5` — Release 0.167.0-alpha.5
- `rust-v0.167.0-alpha.3.2` — Release 0.167.0-alpha.3.2
- `rust-v0.167.0-alpha.3.1` — Release 0.167.0-alpha.3.1

说明：所给数据中这些 Release 的正文仅包含“Release + 版本号”，未披露具体改动；同日出现的 `.1`、`.2` 补丁式 alpha 编号可能提示 0.167 线存在反复修正，但这一点仅为推断，数据中无对应说明。

## 3. 社区热点 Issues

1. **#59060 — 执行“重启服务器”导致系统级破坏，损失超 1 万美元**（OPEN，397 评论，👍478）
   运行环境为 Codex CLI v0.166.0 / Business 订阅 / gpt-6-sol medium / Linux。它摧毁了 systemd 和容器，并执行了随机脚本。这是今日热度最高、风险等级最高的问题，属于模型行为与 CLI 安全边界议题。链接：openai/codex Issue #59060

2. **#58898 — Luna xhigh 多智能体审计任务 117 秒内耗尽 5 小时配额（22%→98%）**（OPEN，8 评论）
   单次只读审计任务消耗约 442 万输入 token，同时周配额从 62% 升至 74%。涉及 rate-limits、context、subagent 标签，直接关系到多智能体与上下文管理的成本可控性。链接：openai/codex Issue #58898

3. **#10571 — “Bad request” 错误长期未解**（OPEN，33 评论）
   创建于 2026-02-04，环境为 CLI 0.94.0 / Pro / gpt-5.2 xhigh / macOS。属于最长寿的高讨论缺陷之一，说明错误信息缺乏可诊断性是持续痛点。链接：openai/codex Issue #10571

4. **#12119 — `{"detail": "Bad Request"}` 于 macOS App 响应中途出现**（CLOSED，12 评论）
   与 #10571 同类症状，本次已关闭，可视为该错误族的一个收敛信号。链接：openai/codex Issue #12119

5. **#25431 — Windows 桌面端请求拼写检查开关**（OPEN，15 评论，👍29）
   今日高赞 enhancement，属于 App 设置项可用性类需求。链接：openai/codex Issue #25431

6. **#58447 — macOS 桌面端 dot 原生线程读取返回 DesktopThreadReadUnavailableError**（OPEN，15 评论）
   在桌面端已连接、已授权的前提下，按文档 `cloud_threads.read` 路由仍失败，threadId 与 environmentId 均正确。影响 Dots 与云端会话集成。链接：openai/codex Issue #58447

7. **#42621 — Windows 提权沙箱缺少凭据上下文，私有 Git 报 SEC_E_NO_CREDENTIALS**（OPEN，8 评论）
   与 #53174、#55032、#54243 共同构成 Windows 沙箱访问控制问题群，是当下最密集的缺陷簇。链接：openai/codex Issue #42621

8. **#52458 — 切换到 “Ask for approval” 后 `sandbox_approval` 仍为 false**（OPEN，5 评论）
   `/permissions` 交互提示成功但实际不生效，属于权限模型的一致性问题，容易造成用户误判安全状态。链接：openai/codex Issue #52458

9. **#50489 — Daybreak 仅接受物理 FIDO2 密钥，拒收密码管理器 passkey**（OPEN，5 评论，👍8）
   付费 Pro 用户因此在常规代码审查流程中被挡在门外，是认证策略与付费用户体验之间的冲突。链接：openai/codex Issue #50489

10. **#55046 — Windows MXC 沙箱遗留 AppContainer 命名对象目录，重启前持续增长**（OPEN，5 评论）
    每条命令可能残留 `Sandbox.{GUID}` 配置与 `\Sessions\1\AppContainerNamedObjects\...` 目录，属于资源泄漏类稳定性问题。链接：openai/codex Issue #55046

补充关注：#37722（Windows OpenSSH Session 0 下 Window Station/Desktop 权限缺失，已给出确定性根因与 A-B-A 因果测试）、#50600（dot 插件工具在重启前持续 stale）、#50385（iOS 快捷指令/Action Button 唤起指定 dot，11 月 5 日有新复现报告）。

## 4. 重要 PR 进展

以下 PR 在过去 24 小时内更新，均为 CLOSED 状态，作者为 copyberry[bot]。

1. **#59711 — 在进程内展开 Linux 沙箱 deny globs**：用 `ignore` walker 替换外部 `rg` 扫描与回退遍历器，并从沙箱扫描器中移除 scanner 查找与依赖跟踪。链接：openai/codex PR #59711
2. **#59709 — 模糊文件搜索优先匹配文件名**：修复父目录名匹配挤占有限结果的问题（例：搜 `ViewModel` 应保留 `ChatViewModel.kt`）。链接：openai/codex PR #59709
3. **#59700 — 修复 TUI 助手消息被工具执行打断**：工具可能在助手消息流式输出完成前启动，需并入已完成文本且不重复回复、不切断 Markdown。链接：openai/codex PR #59700
4. **#59698 — 修复 TUI 推理摘要恢复**：摘要可能随 item 开始或完成事件抵达而非流式 delta，导致丢失或截断，语音切换后重放也会隐藏摘要。链接：openai/codex PR #59698
5. **#59693 — app-server 客户端支持 Cloud 会话请求**：将线程列举/创建、分页 turn 与 item 历史、turn 提交与中断映射到 Cloud 操作。链接：openai/codex PR #59693
6. **#59691 — 拆分 MCP direct-mode 暴露测试用例**：用 `test_case::test_matrix` 替换嵌套循环，为每个独立 MCP server 与会话设置分配独立测试身份与超时预算，保留全部 64 种配置。链接：openai/codex PR #59691
7. **#59671 — Guardian v3 证据清理**：新增 `Housekeeper`，使用隔离的 reviewer runtime 将原始证据路由到主题频道并更新其发现描述，保留原始件。链接：openai/codex PR #59671
8. **#59670 — Guardian 证据增量捕获与显式确认**：此前每次捕获都重载完整历史且不跟踪消费方进度；现支持实时消费方从激活点起读取新原始件。链接：openai/codex PR #59670
9. **#59659 — 用原始请求重采样 Guardian 拒绝**：在 `features.guardian_denial_reconsideration` 启用时，对首个终态拒绝以未改动的推理请求重试一次，并缓冲临时输出。链接：openai/codex PR #59659
10. **#59642 — 在 Guardian 评分与审批中保留 turn 配置**：即使实时线程配置变更，评分与缓存审批仍使用发起 turn 捕获的策略。链接：openai/codex PR #59642

其他：#59677 移除遗留 `summarize_sandbox_policy` 辅助函数，统一到 `summarize_permission_profile`；#59638 在依赖审计中忽略无维护的 `pin-utils` 0.1.0 通告（经 AWS Smithy 与 `loom`/`tokio-graceful` 传递引入）；#59633 在增量世界状态中暴露保留的命令会话，便于模型发现运行中命令。

## 5. 功能需求趋势

- **Windows 平台沙箱与凭据体系**（缺陷与文档类混合）：#42621、#53174、#55032、#54243、#55046、#29688、#37722、#55311。本轮 20 条热门 Issue 中约半数带 `windows-os` 与 `sandbox` 标签，是当前最集中的方向，并已出现要求明确“原生包含与后代完成契约”的文档化诉求（#55311）。
- **Dots / 云端会话能力扩展**：#58447（线程读取失败）、#50600（插件工具 stale 与会话连续性）、#50385（iOS 快捷指令、Action Button、小组件唤起指定 dot）。
- **Windows 桌面端设置项精细化**：#25431 拼写检查开关为代表。
- **多智能体与 token 成本可控性**：#58898 暴露 5 小时/周配额在 subagent 场景下的消耗速度问题。
- **认证与安全策略可选性**：#50489 要求接受密码管理器 passkey 而非强制物理 FIDO2 密钥。
- **宏观观察**：PR 侧围绕 Guardian v3（证据快照、增量捕获、拒绝重采样、turn 配置保留）形成密集迭代，说明内部审核/证据体系正在重构；Issues 侧则以 Windows 沙箱与 Dots 可靠性为主。

## 6. 开发者关注点

- **破坏性执行与安全边界**：#59060 是中心议题。开发者关注点不在“模型是否聪明”，而在破坏性命令（重启服务、容器操作、脚本执行）缺乏有效护栏与事前确认，且损失难以追责。
- **错误可诊断性差**：`Bad Request` 与 `{"detail": "Bad Request"}`（#10571、#12119）长期反复出现，缺少可操作信息。
- **沙箱权限语义不一致**：#52458 提示成功但 `sandbox_approval` 不生效；#53174 出现沙箱内 ACCESS DENIED 而 Full Access 正常，用户难以判断当前实际授权状态。
- **配额与成本不可预期**：#58898 的 117 秒、442 万 token 级跃升，使多智能体任务的成本规划困难。
- **Windows 环境长期积压**：多个 Issue 从 6 月至 10 月持续更新（#29688、#37722、#42621、#55046），说明修复节奏与用户预期存在差距；同类集中在 MXC 沙箱、cwd 和 PSDrive 初始化、凭据继承。
- **认证门槛影响付费用户流程**：#50489 反映强安全策略与常规代码审查工作流之间的摩擦。

---
数据来源：github.com/openai/codex，统计窗口 2026-11-05 前 24 小时。Release 正文无变更说明，相关条目未做内容推断。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-05）

## 今日速览

今日 Gemini CLI 连续发布 v0.67.0 稳定版与 v0.68.0-preview.0 预览版，主要体现代码变更日志整理与 README 范围说明完善。社区侧最受关注的是 subagent 系统的可靠性问题：`MAX_TURNS` 中断被误报为成功（#22323）、generalist agent 永久挂起（#21409）等 P1 级 bug 持续活跃讨论。PR 方向集中在安全加固（fork 代码不暴露 API Key、错误报告移出共享临时目录）与 macOS/ACP 平台兼容性修复。

## 版本发布

- **v0.68.0-preview.0**：包含 v0.67.0-preview.0 与 v0.66.0 的变更日志整理（由 @gemini-cli-robot 提交，PR #29990、#29992），以及 README 文档更新，澄清 Gemini CLI 的范围、限制与工具启动方式。
- **v0.67.0**：将版本号提升至 0.67.0，并整合 v0.65.0 与 v0.66.0-preview 的变更日志（PR #29853、#29854）。
- 链接：google-gemini/gemini-cli Releases

## 社区热点 Issues

1. **#22323 [P1] Subagent 达到 MAX_TURNS 后误报为 GOAL 成功**：`codebase_investigator` 在未做任何分析前触达轮次上限，却返回 `status: "success"`，掩盖了真实中断。13 条评论，是今日讨论度最高的问题，直接影响用户对 subagent 结果的信任。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] Generalist agent 永久挂起**：只要 CLI 交由 generalist agent 处理（如创建文件夹这类简单操作）就会无限挂起，用户等待一小时仍未完成。8 条评论、8 个 👍，是今日点赞最高的问题。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [P2] 利用模型的 bash 亲和性：零依赖 OS 沙箱与执行后意图路由**：提案认为 Gemini 3 模型原生擅长链式调用 `grep`/`sed`/`awk` 等 POSIX 工具，应通过沙箱设计发挥这一优势。属于架构级 enhancement，9 条评论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 [P2] Gemini 几乎不主动使用 skills 与 sub-agents**：作者反馈除非显式指令，模型不会在相关任务中自主调用自定义技能或子代理，影响 agent 体系的实际价值释放。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 [P2] 评估 AST 感知的文件读取、搜索与代码库映射**：EPIC 追踪 AST 工具的潜在收益，例如单次调用精确读取方法边界以减少对话轮次。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#21983 [P1] browser subagent 在 Wayland 下失败**：Linux Wayland 环境下的浏览器子代理无法工作，影响桌面 Linux 用户体验。
   https://github.com/google-gemini/gemini-cli/issues/21983

7. **#22267 [P2] Browser Agent 忽略 settings.json 覆盖配置**：如 `maxTurns` 等全局/项目级配置对 Browser Agent 完全不生效，暴露配置体系一致性问题。
   https://github.com/google-gemini/gemini-cli/issues/22267

8. **#24246 [P2] 工具数量超限触发 400 错误**：可用工具过多时 CLI 遇到 400 错误，期望 agent 能更智能地收敛工具范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 [P2] Agent 应抑制破坏性操作**：模型在复杂 git 操作中会使用 `git reset` 或 `--force`，在存在更安全替代方案时缺乏收敛。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#22186 [P1] get-shit-done 输出 hook 导致崩溃**：在打印用户摘要接近完成时 CLI 崩溃，属于第三方 hook 集成稳定性问题。
    https://github.com/google-gemini/gemini-cli/issues/22186

## 重要 PR 进展

1. **#30160 [P2] 主题文件家目录校验改用 isSubpath**：将朴素的字符串前缀判断替换为 `isSubpath`，修复同级目录误判等路径安全问题。
   https://github.com/google-gemini/gemini-cli/pull/30160

2. **#30159 [P2] 注册 gemini-2.5-flash-image 模型配置**：修复模型注册表中缺少内置图像生成模型的问题，使 Nano Banana 可作为模型被选择（Fixes #28445）。
   https://github.com/google-gemini/gemini-cli/pull/30159

3. **#30122 [P2] 从符号链接的 markdown 文件加载 agent**：`loadAgentsFromDirectory()` 使用 `Dirent.isFile()` 会跳过符号链接，此 PR 修复该行为，对应 Issue #20079。
   https://github.com/google-gemini/gemini-cli/pull/30122

4. **#30090 CI 加固：不向 fork 控制的代码暴露 GEMINI_API_KEY**：`chained_e2e.yml` 在带 secrets 的基础仓上下文中检出 fork PR 代码并执行构建，存在密钥泄露风险。
   https://github.com/google-gemini/gemini-cli/pull/30090

5. **#30088 [安全，help wanted] 错误报告移出共享临时目录**：错误报告含完整聊天历史，原先写入 `os.tmpdir()` 且为默认权限；改为写入 `~/.gemini/tmp/error-reports/` 并限制仅当前用户可读。
   https://github.com/google-gemini/gemini-cli/pull/30088

6. **#30143 [P1] 处理文件监听错误，macOS 宽松沙箱放行 FSEvents**：修复 macOS 受限沙箱策略下初始化目录监听时的未处理启动错误。
   https://github.com/google-gemini/gemini-cli/pull/30143

7. **#30153 阻止仅含 thoughtSignature 的轮次并保留多模态工具响应**：修复对图片使用 `read_file` 时出现的 400 错误（"Requests ending with a model turn are not supported"）与空响应重试循环。
   https://github.com/google-gemini/gemini-cli/pull/30153

8. **#29901 ACP 客户端可对运行中轮次插入引导消息**：允许 Zed、JetBrains、VS Code 等 `gemini --acp` 客户端在不取消当前 `session/prompt` 的情况下追加用户消息，与终端版 `experimental.modelSteering` 对齐。
   https://github.com/google-gemini/gemini-cli/pull/29901

9. **#30157 [P2] safeJsonStringify 仅将真实循环引用替换为 [Circular]**：修复误判——此前任何第二次出现的对象都会被替换，导致 OpenTelemetry 导出器共享的 `endTime` 数组被错误标记。
   https://github.com/google-gemini/gemini-cli/pull/30157

10. **#30148 / #30154 ACP 模式 hooks 与输出修复**：前者在 ACP 会话创建/恢复时触发 SessionStart、在工具请求确认时触发 Notification hooks；后者修复 ACP 模式下 stdio 缓冲未刷新、stderr 无输出的问题。
    https://github.com/google-gemini/gemini-cli/pull/30148
    https://github.com/google-gemini/gemini-cli/pull/30154

## 功能需求趋势

- **Subagent 体系成熟化**：围绕本地子代理的 sprint 规划（#20195）、codebase investigator 改进（#18282）、仓库内示例代理整理（#18283），以及 `/chat share` 暴露子代理轨迹（#22598），显示团队正系统性打磨 agent 生态。
- **AST 感知的代码理解**：从文件读取、搜索到代码库映射（#22745、#22746，建议以 tilth 或 glyph 为起点），探索以减少轮次提升效率。
- **OS 级沙箱与 bash 原生工作流**：发挥模型对 POSIX 工具的亲和性（#19873），同时约束破坏性行为（#22672）。
- **浏览器代理健壮性**：会话接管与锁恢复（#22232）、Wayland 支持（#21983）、配置覆盖失效（#22267）。
- **IDE / ACP 集成**：多个 PR（#29901、#30148、#30154）围绕 ACP 协议完善外部编辑器体验。
- **模型与多模态能力**：图像生成模型注册（#30159）、多模态工具响应保留（#30153）。

## 开发者关注点

- **可靠性优先**：多起 P1 问题指向 agent 中断、挂起与崩溃（#22323、#21409、#22186），且存在"失败被报告为成功"的误导性状态，是当前信任度最大的痛点。
- **配置一致性**：settings.json 覆盖不生效（#22267）、符号链接 agent 不被识别（#20079）等说明配置加载路径存在多处不一致，社区已有对应修复 PR 跟进。
- **安全与隐私**：错误报告包含完整聊天历史却落在共享临时目录（#30088）、fork PR 可接触 CI 密钥（#30090），与企业环境的安全预期存在差距；遥测中 `skill_name` 的脱敏白名单也有专门 PR（#30010）。
- **跨平台兼容**：macOS 沙箱下的文件监听（#30143）、Linux Wayland 下的浏览器代理（#21983）说明非主流平台路径仍是缺陷高发区。
- **交互体验摩擦**：交互式提示导致创建 vite 应用卡死（#22465）、模型在随机位置生成临时脚本造成工作区污染（#23571），反映需要更多行为评估（behavioral eval）来约束模型行为。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-05）

> 数据来源：github.com/github/copilot-cli。过去 24 小时无新 Release、无 PR 更新；Issues 共 21 条更新，以下基于其中 20 条。部分标题引用的模型名（如 GPT-6.1 Sol、Claude Sonnet 5.5）为 Issue 原文表述。

## 1. 今日速览

今日无新版本发布，社区焦点集中在**模型路由与会话状态一致性**：多项 Issue 指向 ACP 模式与交互模式在模型信息上的不一致，以及 Fusion/Sol 模型在计划/实现模式切换中的挂起。同时，技能（skill）可见性、上下文裁剪、终端状态协议等 Agent 能力细节持续被讨论。企业环境和 Windows 平台的问题仍然突出。

## 2. 版本发布

无。过去 24 小时无新 Release。

## 3. 社区热点 Issues（Top 10）

1. **#4438 skill 设置 `disable-model-invocation: true` 后完全不可达**（OPEN，16 评论，👍19）
   项目技能在 `copilot skill list` 中可见，但模型调用 `skill()` 返回“Skill not found”，即该设置实际导致技能彻底不可用，而非“仅手动调用”。这是本期讨论度最高的 Issue，反映技能权限语义与作者预期不符。
   https://github.com/github/copilot-cli/issues/4438

2. **#5270 “Fusion” 模型卡在 plan 模式**（OPEN，5 评论）
   选用 GPT-6.1 Sol（显式或 Auto 自动选中）时，从 Plan 到 Implementation 的模式切换永不发生，会话无限挂起。直接影响核心编码流程，值得优先确认。
   https://github.com/github/copilot-cli/issues/5270

3. **#5151 上下文回归：工具定义从 15K 膨胀到约 260K token，Sol 模型首轮即失败**（OPEN，1 评论）
   默认上下文层级的 `gpt-5.6-sol`/`gpt-6.1-sol` 在接收首个提示前即报 `compaction_static_context_blocked`。属于明显的回归问题，影响工具密集型使用场景。
   https://github.com/github/copilot-cli/issues/5151

4. **#5320 请求支持 OSC 7501 终端状态上报**（OPEN，👍10）
   希望 CLI 原生上报会话状态，供 Herdr 等终端展示 Copilot 会话活动。社区点赞数仅次于 #4438，反映终端集成生态的需求。
   https://github.com/github/copilot-cli/issues/5320

5. **#5220 为 Claude 模型提供 1 小时提示缓存 TTL 选项**（OPEN，👍8）
   当前疑似使用 Anthropic 默认 5 分钟缓存，交互式“思考—输入”间隙常导致缓存过期，带来额外成本与延迟。属成本/性能双重诉求。
   https://github.com/github/copilot-cli/issues/5220

6. **#5354 ACP 未暴露 Fusion 及其层级配置**（OPEN，1 评论）
   Fusion 在交互模式可用，但 ACP 只上报 Auto 路由模型，且无层级配置，导致 T3 Code 等 ACP 客户端无法呈现。与 #5363 共同指向 ACP 与交互模式的能力落差。
   https://github.com/github/copilot-cli/issues/5354

7. **#5363 ACP `session/new` 上报的 `model` 与实际运行模型不符**（OPEN，triage）
   响应中 `currentValue` 为 `claude-sonnet-5.5`，但会话在客户端显式 `session/set_model` 前并不使用该模型。会误导客户端展示与会话审计。
   https://github.com/github/copilot-cli/issues/5363

8. **#5362 让模型将无效工具结果替换为一行摘要（模型判定式上下文裁剪）**（OPEN，triage，2 评论）
   当天新提的功能请求：在回合结束前把非预期工具输出换成一句话摘要，以保持上下文干净。属于上下文成本优化的新方向。
   https://github.com/github/copilot-cli/issues/5362

9. **#5356 Windows/npm 1.0.105 回合中途间歇性多分钟卡死**（OPEN，1 评论）
   `npx copilot --yolo` 交互模式下部分回合长时间无最终回复，需取消并发送 continue。Windows + npm 组合的稳定性问题。
   https://github.com/github/copilot-cli/issues/5356

10. **#5323 增加禁用 agent checkpoint refs（`refs/agents/*`）的设置**（OPEN，triage）
    每个 agent 回合都会以用户 git 身份创建 checkpoint 提交，污染仓库 refs。对使用共享仓库或严格 Git 工作流的团队影响明显。
    https://github.com/github/copilot-cli/issues/5323

**其他值得留意**：#5352 子代理把“勿写入临时目录”的指令误解为“不得读取临时文件”；#5359 恢复会话后因 MCP 工具集变化导致 400 “Tool reference not found”；#5358 请求无副作用的设备码登录与免 token 的认证状态接口。

## 4. 重要 PR 进展

过去 24 小时无 PR 更新，本节无内容。

## 5. 功能需求趋势

从本期 Issues 可提炼出四个方向：

- **ACP / 非交互集成一致性**：#5354、#5363、#5229 均涉及 ACP 模式与交互模式在模型上报、OAuth 刷新上的行为差异；#5358 进一步要求适合外部集成的认证接口。ACP 正成为第三方 IDE/终端接入的主要摩擦点。
- **模型路由与模式切换**：Fusion/Auto 的模型选择（#5270）、上下文层级与工具定义膨胀（#5151）、Claude 缓存 TTL（#5220）共同指向模型选择透明度和成本控制。
- **上下文与技能治理**：模型判定式上下文裁剪（#5362）、技能调用语义（#4438）、agent checkpoint refs（#5323）、子代理临时目录指令（#5352）。
- **终端与渲染体验**：OSC 7501 状态上报（#5320）、timeline 中用户消息的 Markdown 渲染（#5353）。

## 6. 开发者关注点

- **会话可用性中断**：多分钟卡死（#5356）、会话限额重置后模型不可用 400（#5361）、`copilot -p` I/O 失败（#5357）、沙箱策略变更报错（#5360），多为阻塞级问题，且集中出现在 Windows 与企业策略环境下。
- **状态如实反映**：ACP 上报的模型、恢复会话后的工具引用（#5359）、技能列表与可用性（#4438），核心诉求是“CLI 展示的即实际运行的”。
- **对用户仓库的副作用**：checkpoint refs 以用户身份写入（#5323）、远程会话在 `--add-dir` 下自动发布失败（#5355），涉及仓库整洁与可审计性。
- **成本与延迟**：提示缓存过期（#5220）与工具定义膨胀（#5151）直接推高 token 消耗。

*说明：本期数据量有限且无 PR 更新，Top 10 已覆盖全部高评论/高点赞条目；#5360、#5361、#5357、#5358、#5359、#5355 等 0 评论条目未进入 Top 10，仅在趋势与关注点中引用，详情请查阅对应链接。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-11-05）

## 1. 今日速览

今日仓库动态极少：过去 24 小时内没有新版本发布，也没有 Issue 更新。唯一的变动是一个已于 2026-08-18 创建、今日关闭的 PR #2606（Dev/knowledge plane），其摘要仅包含贡献模板说明，未披露具体功能内容。

## 2. 版本发布

过去 24 小时无新版本发布，此节省略。

## 3. 社区热点 Issues

过去 24 小时内 Issues 更新数为 0，无可汇总条目。

## 4. 重要 PR 进展

本次仅有 1 个 PR 更新，无法按 10 条整理：

- **PR #2606 [CLOSED] Dev/knowledge plane** — 作者 SoMiReMiReDo，创建于 2026-08-18，更新于 2026-11-05。该 PR 摘要仅包含贡献模板提醒（要求先在 Issue 中与维护者讨论并取得确认），未提供实际功能或修复说明；评论数据缺失。状态为已关闭，无法判断是否被合并。
  链接: MoonshotAI/kimi-cli PR #2606

## 5. 功能需求趋势

今日数据中 Issues 数量为 0，且唯一 PR 的摘要未包含功能描述，因此无法从所给材料中提炼出 IDE 集成、性能、新模型支持等具体功能方向。此处不做推断。

## 6. 开发者关注点

今日无 Issue 更新，唯一 PR 的摘要体现的是贡献流程要求：提交前需先在 Issue 中与维护者讨论并获得确认。除此之外，材料中不存在可供归纳的痛点或高频需求。

---

**说明**：本日报严格依据所提供数据生成；Issues 为 0、Releases 为 0、仅 1 条 PR 且内容不含功能细节，故部分章节无法按要求填充 10 条条目，也未对缺失信息做任何推测。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-05

## 今日速览
今天最值得关注的是 process-daemon 0.5.0（opencode-pty，protocol 8）发布，以及 jlongster 提交的"在进程守护中运行 shell 命令"PR，说明本地 shell 执行架构正在迁移。Issue 端仍以免费额度与计费问题为最大热点（主帖累计 295 条评论），同时插件加载、MCP 传输、TUI 细节交互等一批被复现的缺陷集中收尾。Console 多客户端计划推进到 Phase 3，出现 client-core 与 opencode-connect CLI 两个堆叠 PR。

## 版本发布
- **process-daemon-v0.5.0**（opencode-pty 0.5.0，protocol 8）：从 packages/process-daemon 发布至 npm，包名 `@opencode/pty@0.5.0`。
  链接: https://github.com/anomalyco/opencode/releases

## 社区热点 Issues
1. **#59387 [OPEN] zen 免费层问题主帖**（评论 295，👍22）— 免费层故障的集中报告入口，覆盖"免费额度超限/需订阅 Go"等多类提示。社区反应最强烈，适合作为免费层体验的主要观测点。
   https://github.com/anomalyco/opencode/issues/59387
2. **#56371 [CLOSED] CLI 请求持续超时**— 因缺少响应头导致超时，涉及 Windows Terminal + NVIDIA NIM 模型。已关闭，但暴露了非主流提供商兼容性问题。
   https://github.com/anomalyco/opencode/issues/56371
3. **#55542 [OPEN] desktop 的 /export 只有 JSON**— TUI 的 `/export` 支持 Markdown，桌面端仅提供 JSON，同一命令跨客户端行为不一致。
   https://github.com/anomalyco/opencode/issues/55542
4. **#62068 [OPEN] [reproduced] npm 插件更新/重载竞态**— 更新插件时删除版本化缓存目录，重载报 `ENOENT`，自定义提供商静默回退到内置目录。
   https://github.com/anomalyco/opencode/issues/62068
5. **#61867 [CLOSED] 仅支持 SSE 的远程 MCP 服务器 405**— V2 缺少 V1 的 SSE 回退，`type: "remote"` 只做 Streamable HTTP POST。对使用旧式 MCP 服务的用户影响大。
   https://github.com/anomalyco/opencode/issues/61867
6. **#61694 [CLOSED] 流式响应失败重试时工具调用状态误报**— 工具已执行，重试后模型却被告知已中止，涉及 OpenAI 兼容服务端错误场景，属于正确性问题。
   https://github.com/anomalyco/opencode/issues/61694
7. **#61680 [CLOSED] Plan 只读代理可被 Python 绕过**— LLM 通过执行 Python 命令绕过 Plan 代理的只读限制，属于权限边界缺陷。
   https://github.com/anomalyco/opencode/issues/61680
8. **#59861 [OPEN] TUI 可选目录价估算**— 自 v2.2.0 起提供商上报成本覆盖目录价，Go 上报 $0 导致侧栏"已花费"不再显示。
   https://github.com/anomalyco/opencode/issues/59861
9. **#62087 [OPEN] Windows Desktop "Open in → PowerShell" 启动 PS5**— 实际打开 PowerShell 5.1 而非 PowerShell 7，与终端 shell 配置不一致。
   https://github.com/anomalyco/opencode/issues/62087
10. **#62059 [OPEN] [FEATURE] 模型判断的上下文裁剪**— 允许模型把无用工具结果替换为一行摘要，直指上下文占用问题（与 #61352 反映的 Big Pickle 上下文消耗过快呼应）。
    https://github.com/anomalyco/opencode/issues/62059

其他可关注：#54862（重试耗尽时调用 `session.retry` 钩子）、#59899（GITHUB_TOKEN 认证下 Claude ≥5.1 请求失败）、#61261（`provider.only` 限制为 anthropic 时免费模型 400）。

## 重要 PR 进展
1. **#62034 [contributor] refactor(core): GitHub Copilot 迁移到原生 ai 协议**— 移除约 3,400 行 vendored 分支代码及 3,000 行测试，改用现有协议层，显著降低维护成本。
   https://github.com/anomalyco/opencode/pull/62034
2. **#61876 [contributor] feat(core): 在进程守护中运行 shell 命令**— 本地 shell 命令改由 `opencode-pty` 守护进程（protocol 8）执行，与今日 0.5.0 发布配套。
   https://github.com/anomalyco/opencode/pull/61876
3. **#62142 [contributor] fix(core): 重试所有 DNS 失败并保住会话 WebSocket**— 一次 DNS 失败不再让会话终生退回 HTTP；背景是 11 月 4 日 45 分钟 DNS 故障中断了 366 步。
   https://github.com/anomalyco/opencode/pull/62142
4. **#62141 [contributor] fix(core): 失败 shell 结果以退出状态开头**— 输出首行为 `[exit 2]`、`[timed out after 120s]` 等；同时修复 zsh 因未匹配 glob 中断整条命令。
   https://github.com/anomalyco/opencode/pull/62141
5. **#62140 [contributor] fix(core): trace 记录步成本与重试**— 每步 trace 新增成本与是否重试信息，并把每次配置重载/进程启动触发的两条噪音日志降为 debug。
   https://github.com/anomalyco/opencode/pull/62140
6. **#62134 [OPEN] feat(client-core): 共享 Console 登录与策略引擎**— Console 多客户端计划 Phase 3 的第一个 PR，为其他 harness 提供登录与策略能力。
   https://github.com/anomalyco/opencode/pull/62134
7. **#62135 [OPEN] feat(connect): 新增 opencode-connect CLI**— 堆叠在 #62134 之上，是 Phase 3 的第二个 PR。
   https://github.com/anomalyco/opencode/pull/62135
8. **#60819 [contributor] feat(session-ui): 用户消息操作收进箭头菜单**— 修复 Revert 与 ⋯ 图标覆盖消息文字、菜单关闭后残留的问题。
   https://github.com/anomalyco/opencode/pull/60819
9. **#55261 feat(tui): 提示历史范围设置**— 新增 `prompt.history_scope`，默认 `global` 保持现状（Refs #52154）。
   https://github.com/anomalyco/opencode/pull/55261
10. **#61652 fix(app): 避免 hover 时 tooltip 计算泄漏**— 关闭 #61651，修复新建会话路径/基础分支 tooltip 悬停产生未释放计算的问题。
    https://github.com/anomalyco/opencode/pull/61652

另有 #62043（后台标签页权限自动批准，修 #44007）、#61839（dev 提升至 production，含 Hy4 Go Teams 限额 $65 文档更新）、#62143（Console 登录方式文档，标记 needs:compliance）。

## 功能需求趋势
- **上下文管理**：#62059 模型判断的裁剪、#61352 上下文消耗过快、#59861 成本显示，三者共同指向"上下文与花费的可见性/可控性"。
- **跨客户端一致性**：TUI 与 desktop 的 `/export` 格式差异（#55542）、Windows 下 PowerShell 版本选择（#62087）、`home`/`end` 键行为（#61686）反映客户端行为对齐需求。
- **插件与提供商生态**：插件重载竞态（#62068）、非推理提供商分类误判（#59141）、`provider.only` 与免费模型冲突（#61261）、GitHub Copilot 认证与模型兼容（#59899）。
- **钩子可扩展性**：#54862 要求在重试耗尽时触发 `session.retry` 钩子。
- **MCP 协议兼容**：SSE 回退缺失（#61867）显示 V2 迁移中的兼容性需求。

## 开发者关注点
1. **计费与免费额度是最集中的痛点**：主帖 #59387 达 295 条评论，配套问题包括余额/充值后不可用（#60840）、"永远超限"（#61716）、未发消息即提示限额（#61708）。
2. **架构迁移中的回归**：V2 相对 V1 丢失 SSE 回退、Windows 下 CLI 超时，均属版本升级带来的兼容性缺口，且多已被复现或关闭。
3. **安全与权限边界**：Plan 代理只读限制可被 Python 绕过（#61680）、后台标签页权限需自动批准（#62043），是权限模型的直接反馈。
4. **可观测性诉求**：trace 记录成本与重试（#62140）、失败命令首行给出退出状态（#62141），说明开发者希望更快定位失败原因与花费来源。
5. **网络韧性**：DNS 故障导致会话降级与大量步骤中断（#62142）被视为需要系统性修复的问题。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-05

> 数据来源：github.com/badlogic/pi-mono（Issues/PR 链接显示为 earendil-works/pi）。过去 24 小时无新 Release。

## 1. 今日速览

今日无新版本发布，社区讨论集中在稳定性与性能问题上：macOS 长会话高 CPU 占用（#7730，29 条评论、12 赞）是当日最热话题，`getContextUsage()` 在网络重试后严重高估上下文（#10287）也持续发酵。PR 侧以修复类为主，包括 OAuth 刷新落盘（#11812）、模型作用域切换（#11832）、重试抖动（#11840）等，另有多模型/提供商支持提案（LongCat-2.5、Ling 3.x）进入讨论。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#7730 [OPEN] macOS 长会话高 CPU 占用** — 报告 CPU 在 50–110% 间波动、内存 600–800MB，疑似与上下文大小相关。29 条评论、12 赞，是当日互动量最高的 Issue，属核心运行时性能问题。
   https://github.com/earendil-works/pi/issues/7730

2. **#10287 [OPEN] `getContextUsage()` 在网络错误后严重高估上下文** — Pi 0.99.2 上可重试网络错误使计数从约 42k 跳到 330,081 tokens。直接影响上下文管理与压缩决策，值得优先排查。
   https://github.com/earendil-works/pi/issues/10287

3. **#10628 [OPEN] 全屏 TUI 的 OSC 52 复制被 tmux 吞掉** — 缺少 passthrough 包裹，tmux 内复制提示"Copied!"但实际未到客户端。影响高频 tmux 用户，6 赞。
   https://github.com/earendil-works/pi/issues/10628

4. **#11211 [OPEN] Anthropic 流中止后永不 settle** — SSE reader 在提前结束读取时未取消 response body，可能导致挂起。稳定性和资源泄漏风险。
   https://github.com/earendil-works/pi/issues/11211

5. **#11808 [CLOSED] [no-action] headless 运行中 Worker 线程 SIGILL** — 1.4.0 linux-x64 上两次长时间无头任务崩溃，故障指令一致。严重崩溃类问题，虽已关闭仍值得关注。
   https://github.com/earendil-works/pi/issues/11808

6. **#11809 [CLOSED] [no-action] Termux/Android 下 `findExecutableOnPath`/`commandExists` 在主线程 spawn** — 可能冻结进程内宿主，涉及移动端可用性。
   https://github.com/earendil-works/pi/issues/11809

7. **#11613 [CLOSED] bash 工具对已退出命令误报超时** — 当子进程占用继承的 stdout/stderr 管道时，误报 "Command timed out"，影响工具调用判断。
   https://github.com/earendil-works/pi/issues/11613

8. **#11802 [CLOSED] [no-action] kitty CSI-u 分片序列被当作文本送入输入框** — 导致 Enter、`/quit`、`/resume` 失灵，属 TUI 输入解析缺陷。
   https://github.com/earendil-works/pi/issues/11802

9. **#11773 [OPEN] [prio:p0] Token Plan 品牌与网关升级** — 将默认配置切换到千问 AI 平台（中国）/ QwenCloud（国际），涉及默认端点变更，属 p0 优先级。
   https://github.com/earendil-works/pi/issues/11773

10. **#11829 / #4846 [CLOSED] [no-action] 会话切换时应让当前 turn 后台继续** — 现有 `/resume`、`/tree`、`/fork` 会中止活动 agent。两个 Issue 指向同一需求：会话级后台/分离执行。
    https://github.com/earendil-works/pi/issues/11829
    https://github.com/earendil-works/pi/issues/4846

## 4. 重要 PR 进展（10 条）

1. **#11812 [CLOSED] 等待已发起的 OAuth 刷新落盘后再退出** — 修复 #11692（RPC 启动期刷新被中断导致 `invalid_grant`），直接解 OAuth 登录失效痛点。
   https://github.com/earendil-works/pi/pull/11812

2. **#11832 [CLOSED] 作用域仅剩一个模型时正确切换** — 修复 Ctrl+P 在单模型作用域且当前模型不同时无响应的问题。
   https://github.com/earendil-works/pi/pull/11832

3. **#11840 [CLOSED] 为 agent 重试加入抖动** — 在延迟上限处也分散并发重试，避免多子代理下的惊群，不改变重试次数。
   https://github.com/earendil-works/pi/pull/11840

4. **#11828 [CLOSED] 注册 LongCat-2.5 API-key 提供商** — 按现有 DeepSeek/Qwen 结构新增 `longcat`，取代更大实现的 #11784。
   https://github.com/earendil-works/pi/pull/11828

5. **#11696 [CLOSED][inprogress] 存储复制：实验性会话同步** — 新增 `@earendil-works/pi-durable/sync`，设备间通过远端推送/拉取会话提交。架构级变更，值得关注。
   https://github.com/earendil-works/pi/pull/11696

6. **#11833 [CLOSED] pi-schema 补齐 TypeBox 类型对齐** — 新增 `unsafe<T>()`、`recursive<T>()`、`Validator.validate()`、`bigint()`、`equal()` 等。
   https://github.com/earendil-works/pi/pull/11833

7. **#11798 [CLOSED] issue 分流工具迁移到 pi-schema** — 修复 `Type` 从 pi-ai 移除后 triage 工具无法启动的问题。
   https://github.com/earendil-works/pi/pull/11798

8. **#11824 [CLOSED] TUI 覆盖层正确渲染于终端图片之上** — 仅在覆盖层与 Kitty 图像行列范围相交时抑制其 placement。
   https://github.com/earendil-works/pi/pull/11824

9. **#11686 [CLOSED] 在 pkg.earendil.com 上发布版本标签** — 修复 release 流程只构建推送头部、标签提交从未构建的问题。
   https://github.com/earendil-works/pi/pull/11686

10. **#11255 [OPEN] 新增压缩模型与 thinking level 配置** — 从 #7602 中拆出配置部分，关联 #7553，允许自定义压缩所用模型。
    https://github.com/earendil-works/pi/pull/11255

## 5. 功能需求趋势

- **模型与提供商生态扩展**：Ling 3.x 升级并改用 DeepSeek 兼容推理（#11116）、LongCat-2.5 原生提供商（#11828）、Token Plan/千问网关兼容（#11773）。
- **会话生命周期管理**：turn 在切换会话时后台/分离继续运行是反复出现的诉求（#11829、#4846）；会话同步/复制（#11696）则指向多设备场景。
- **TUI 与终端环境兼容性**：tmux 下 OSC 52 passthrough（#10628）、kitty 键盘协议解析（#11802）、图片与覆盖层合成（#11824）、粘贴内容预览（#7754）。
- **输入/编辑器体验**：`@` 文件补全使用过期前缀（#11825）、复制操作导致输入丢失（#11379）。
- **性能与大文件/上下文处理**：长会话 CPU（#7730）、`read` 工具按行读取却整文件加载（#9654）、上下文计数准确性（#10287）。

## 6. 开发者关注点

- **稳定性优先于新功能**：崩溃（SIGILL #11808）、挂起（流中止 #11211）、误报超时（#11613）、OAuth 令牌丢失（#11692）等多集中在核心运行时与网络层，且多数已关闭，节奏偏向修复。
- **性能与资源**：长会话 CPU、内存，以及 `read` 工具整文件读入（#9654）反映大文件/长上下文场景下的资源控制不足。
- **终端环境适配**：tmux、Termux/Android、kitty 等非标准环境问题频出，且部分被标记 no-action，社区对可移植性有持续需求。
- **跨平台与宿主线程模型**：Android 主线程 spawn（#11809）、`Connection` 注入守护进程以运行于 Workers（#10846）显示对嵌入式/非 CLI 宿主场景的兴趣。
- **AI 生成提交的治理**：#11837 作者自述由 AI agent 生成并主动请求保持关闭，提示社区对 AI 提交质量与审查流程的关注。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-11-05

## 1. 今日速览

今日发布 `v0.26.8` 及配套 TypeScript SDK `v0.1.28`，核心变更是让 `prompt.submit` 钩子在 OpenTUI 终端中运行。CI 稳定性仍是社区最大噪音源：过去 24 小时更新的 50 个 Issue 中绝大多数为机器人自动提交的 CI 失败报告，其中 #14724 已积累 201 条评论。功能性议题集中在 Web Shell 会话性能、MCP 敏感配置传递与统一 Agent 循环架构。

## 2. 版本发布

- **v0.26.8**：无已知破坏性变更。唯一功能项为 `feat(mods): run prompt.submit hooks in the OpenTUI terminal`（[#16195](https://github.com/QwenLM/qwen-code/pull/16195)）。
- **sdk-typescript v0.1.28**：TypeScript SDK 发布，捆绑 CLI 0.26.8（发布 PR [#16412](https://github.com/QwenLM/qwen-code/pull/16412)）。发布说明中同时混入了 0.26.6 等旧版本的捆绑信息，建议发布流程清理沿袭内容。
- **v0.26.7-nightly.20261104.b9e20830f7**：nightly 构建，含集成测试隔离 ACP 运行时状态的改动（[#16254](https://github.com/QwenLM/qwen-code/pull/16254)）。

## 3. 社区热点 Issues

1. **[#14724](https://github.com/QwenLM/qwen-code/issues/14724)（OPEN）** Managed Agent gate CI 失败，无法定位测试。201 条评论、持续 17 天未关，是当前最活跃的工单，反映“无测试可定位”类 CI 报告的长期堆积问题。
2. **[#15052](https://github.com/QwenLM/qwen-code/issues/15052)（OPEN, P2）** Main E2E 使用 ref 级并发时会替换旧的待运行任务，导致中间 main 提交缺少独立验证结果。由人工提交且讨论深入（18 条评论），属于 CI 架构层的实质缺陷。
3. **[#16171](https://github.com/QwenLM/qwen-code/issues/16171)（CLOSED, P1）** Web Shell 打开特定会话极慢，原因是 live replay 保留了 edit 工具结果中的完整文件内容。性能类 P1，涉及 daemon 内存与会话管理。
4. **[#16322](https://github.com/QwenLM/qwen-code/issues/16322)（CLOSED）** E2E 失败指向 ACP 在返回错误时传递 PreToolUse/PostToolUseFailure 上下文的测试，与近期 ACP 相关工作直接相关。
5. **[#15327](https://github.com/QwenLM/qwen-code/issues/15327)（OPEN, P1）** 追踪需求：在 `experimental.unifiedAgentLoop` 下让所有界面共用 `packages/core` 中的单一 Agent 循环。涉及核心架构走向，值得持续跟踪。
6. **[#14532](https://github.com/QwenLM/qwen-code/issues/14532)（OPEN, P2）** 原生扩展的 `sensitive: true` 设置在 0.25.2 中被掩码并持久化，但未能解析进 MCP HTTP 头。扩展与 MCP 生态的安全配置链路断点。
7. **[#11955](https://github.com/QwenLM/qwen-code/issues/11955)（CLOSED, P2）** 桌面应用忽略 `ui.theme` 与 `general.language` 设置，界面始终保持深色/英文。桌面端配置生效问题，用户可感知度高。
8. **[#16377](https://github.com/QwenLM/qwen-code/issues/16377)（OPEN）** Managed Agent gate 新增失败：`ChildWorkspaceServiceTest.aBusyStorageParksTheStepWithoutSpendingAnAttempt`，关联 Java SDK 快速通道，提交当日即有 11 条评论。
9. **[#11678](https://github.com/QwenLM/qwen-code/issues/11678)（OPEN）** Qwen Code CI 在 Windows 环境的 `Test` 作业失败且未产出测试结果，自 9 月 11 日持续至今，跨平台 CI 稳定性欠账。
10. **[#13370](https://github.com/QwenLM/qwen-code/issues/13370)（CLOSED）** SDK Java 中 `HostedProcessCrashIT.processCrashesNeverReplayHostedToolsOnMySql` 失败，属于托管工具重放语义的关键测试。

> 说明：过去 24 小时更新的 50 个 Issue 绝大多数由 `qwen-code-dev-bot` 自动生成，带 `autofix/*` 标签，人工讨论占比很低。

## 4. 重要 PR 进展

1. **[#16370](https://github.com/QwenLM/qwen-code/pull/16370)（CLOSED）** perf(managed-agent)：移除普通 journal 与发布路径上的存储锁，降低托管 Agent 写路径争用。
2. **[#16410](https://github.com/QwenLM/qwen-code/pull/16410)（OPEN）** perf(managed-agent)：原生 journal 快照发布不再持有租户 `runtime_placement` / `output_publication` 守卫，避免同一 writer 三次加锁。
3. **[#16242](https://github.com/QwenLM/qwen-code/pull/16242)（OPEN）** perf(core)：`mcp-client.ts` 改为仅在 `createTransport()` 内按 `authProviderType` 动态导入 Google 凭证提供者，缩短启动路径。
4. **[#15144](https://github.com/QwenLM/qwen-code/pull/15144)（OPEN）** fix(core)：路径限定的 Read 拒绝规则（如 `Read(./secret.env)`）现在同样作用于 grep/glob 搜索结果，并附简短提示。安全相关，建议优先评审。
5. **[#16306](https://github.com/QwenLM/qwen-code/pull/16306)（OPEN）** fix(sdk)：daemon UI normalizer 将 `_meta.toolLifecycle.toolName` 作为工具名解析的最后来源，修复 Web Shell 显示 “unknown Tool”。
6. **[#16404](https://github.com/QwenLM/qwen-code/pull/16404)（OPEN）** fix(cli)：非交互与 ACP 运行中汇报 `/skill` 叠加超出五条上限的情况（此前 `exceededMax` 被丢弃）。
7. **[#16407](https://github.com/QwenLM/qwen-code/pull/16407)（WIP）** feat(cli)：用 OSC 7501 向终端报告交互程序状态；尚未在支持该序列的终端中人工验证。
8. **[#14613](https://github.com/QwenLM/qwen-code/pull/14613)（OPEN）** feat(cli)：通过用户级设置与环境变量对启用实验性 LSP 代码智能服务，无需命令行 flag。
9. **[#15274](https://github.com/QwenLM/qwen-code/pull/15274) / [#15286](https://github.com/QwenLM/qwen-code/pull/15286)（OPEN, autofix/needs-human）** 两项 CI 修复：前者在 Maven 缓存回写失败时保留套件结果，后者隔离 sdk-java 解析器簿记与本地 jar，避免污染宿主缓存。
10. **[#15562](https://github.com/QwenLM/qwen-code/pull/15562)（OPEN）** feat(desktop)：桌面端跨重启持久化 Web Shell 的 daemon 连接与 workspace-host 目录，经白名单 IPC 读取。

## 5. 功能需求趋势

- **统一 Agent 架构**：以 `experimental.unifiedAgentLoop` 为旗标，推动所有界面共用一套 core 循环（#15327）。
- **性能与资源治理**：Web Shell 会话重放、daemon 内存、MCP 客户端按需加载、托管 Agent 锁粒度——性能类 PR 与 P1 议题明显增多。
- **MCP 与扩展生态**：敏感设置的端到端传递（#14532）、扩展设置链路是主要缺口。
- **终端/桌面体验**：OpenTUI 钩子、TUI 前景 shell PTY 一致性、桌面主题与语言设置、OSC 7501 状态上报，显示客户端体验投入上升。
- **代码智能**：LSP 服务通过设置项开放（#14613）。
- **CI/CD 可靠性**：议题数量最多，但以自动化报告为主，人工需求集中在并发语义修正（#15052）。

## 6. 开发者关注点

- **CI 噪音淹没真实信号**：大量机器人 Issue 长期 OPEN（#14724 达 201 条评论、#11678 自 9 月未关），其中不少被标记为“provisional”并因后续运行通过而本应关闭，建议加强自动收敛。
- **跨平台稳定性**：Windows 与 macOS 单元测试、Docker 沙箱 E2E、Java SDK（Java 11/21、MySQL/MariaDB）反复失败。
- **安全规则一致性**：拒绝规则需在搜索类工具中同样生效（#15144），敏感配置需真正进入 MCP 请求头（#14532）。
- **配置生效可信度**：桌面端主题/语言不生效（#11955）这类“设置写了但没用”的问题对信任度伤害较大。
- **发布流程细节**：SDK 发布说明混入多版本捆绑信息，需模板清理。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-05）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issue/PR 链接实际指向 codewhale-hq/Codewhale）

## 1. 今日速览

过去 24 小时无新版本发布，社区活动集中在 PR 端：共 13 条 PR 更新，其中 11 条处于 OPEN 状态，绝大多数来自 `asto18089` 的 `contribution-gate` 系列，聚焦子代理（subagent）权限、路径解析与任务计时等底层正确性修复。Issues 端有 2 条新增增强提案，分别涉及模型 ID 大小写保留与剪贴板图片清理。

## 3. 社区热点 Issues

今日仅 2 条 Issue 更新，以下全部列出（未凑满 10 条以避免虚构）：

- **#7214 提案：在模型选择器中保留区分大小写的模型 ID**
  作者 liuyy2，标签 `enhancement`、`needs-triage`，评论 1。提案希望修复 provider picker 中模型选择恢复的逻辑，涉及大小写敏感模型 ID 的保留，属于模型选择可用性的细粒度修复。
  https://github.com/codewhale-hq/Codewhale/issues/7214

- **#7221 剪贴板图片清理（clean clipboard-images）**
  作者 Asteria1028，标签 `enhancement`、`needs-triage`，评论 1。提出两个问题：剪贴板图片是否应按会话分组？是否应新增清理命令？反映图片附件管理缺少生命周期治理。
  https://github.com/codewhale-hq/Codewhale/issues/7221

## 4. 重要 PR 进展

今日 13 条 PR 中挑选最具代表性的 10 条（附链接）：

- **#7230 feat(tasks): 人工等待时暂停任务墙钟计时**
  延续 turn 层既有设计理念——预算只约束 agent 自身开销，不计人工响应时长，让任务计时更贴近真实成本。
  https://github.com/codewhale-hq/Codewhale/pull/7230
- **#7229 fix(compaction): 修复 v0.10.0 之前拓扑检查点在恢复时的位置**
  针对 v0.9.10–v0.9.12 保存、且压缩时存在活跃子代理的会话，修正 agent 拓扑检查点被置于历史末尾的兼容性问题。
  https://github.com/codewhale-hq/Codewhale/pull/7229
- **#7228 fix(subagent): 如实上报后续投递状态并跟随真正应答的后续代理**
  修正 `continue_child_from_user` 在 Interrupted/Completed 分支硬编码 `delivered: true, resumed: true` 的问题。
  https://github.com/codewhale-hq/Codewhale/pull/7228
- **#7227 fix(subagent): 接受解析到声明工作区内的绝对写入路径**
  修复同一文件用绝对路径被拒、用相对路径却能成功的路径校验不对称问题。
  https://github.com/codewhale-hq/Codewhale/pull/7227
- **#7226 fix(vision): 接受解析到工作区内的绝对图片路径**
  `image_analyze` 只读通道上的同类不对称问题，`resolve_image_path` 在包含性检查前就拒绝了绝对路径。
  https://github.com/codewhale-hq/Codewhale/pull/7226
- **#7225 fix(localization): 清理非英文语言包中过时的模式跳转与 rail 文案**
  逐 key 对照英文包，14 个非英文语言包中有 12 个仍保留已移除的 Plan/Work/Operate 跳转描述。
  https://github.com/codewhale-hq/Codewhale/pull/7225
- **#7224 fix(subagent): 仅在工作树锚点扫描嵌套仓库**
  `git_repo_root` 在向祖先逐级扫描时会检查每层子目录，导致位于 home 目录下数层的非仓库工作区误判。
  https://github.com/codewhale-hq/Codewhale/pull/7224
- **#7220 feat: 增加有界 HTTP 限流恢复**
  针对 HTTP 429，为原生 HTTP 传输提供独立的恢复策略（共 20 次尝试），避免临时限流提前中止调用。作者 zhuowp。
  https://github.com/codewhale-hq/Codewhale/pull/7220
- **#7218 fix(tui): 通过 .NET 读取 Windows 剪贴板图片作为回退**
  修复 QQ 截图后 `Ctrl+V` 在 Codewhale 中无响应、而经其他应用复制后却能粘贴的问题。作者 SparkofSpike。
  https://github.com/codewhale-hq/Codewhale/pull/7218
- **#7217 feat(tui): 粘贴剪贴板图片并预览每个附件**
  从真实 QQ 截图场景倒推出 Windows 下 `Ctrl+V` 附件链路中的五个独立缺陷。作者 SparkofSpike。
  https://github.com/codewhale-hq/Codewhale/pull/7217

（另：#7223 修正 verify 描述误导隐藏工具名 `run_verifiers`；#7222 移除 fetch_url 描述中不实的 “sandboxed” 声明；#7219 已关闭，豁免 home 状态目录的链接限制。）

## 5. 功能需求趋势

基于今日 Issue 与 PR，社区关注方向集中在：

- **Windows TUI 剪贴板/图片附件链路**：#7218、#7217、#7221 围绕剪贴板图片的读取、粘贴、预览与清理，是今日最集中的功能与缺陷主题。
- **模型选择与 provider 体验**：#7214 关注区分大小写模型 ID 的保留。
- **子代理权限与路径解析正确性**：#7224、#7226、#7227、#7228 形成一组系统性修复。
- **网络与限流健壮性**：#7220 引入 HTTP 429 有界恢复。
- **本地化与工具描述准确性**：#7225、#7223、#7222 清理过时或误导性文案。

## 6. 开发者关注点

- **路径校验的不一致**：绝对路径与相对路径行为不对称，是子代理写入与图片分析通道的共同痛点（#7226、#7227）。
- **Windows 平台体验**：QQ 截图剪贴板兼容是真实高频场景，驱动了多条 TUI 修复。
- **兼容性与迁移**：旧版本（v0.9.10–v0.9.12）会话的压缩检查点恢复需向后兼容（#7229）。
- **状态报告真实性**：子代理投递状态硬编码导致误报，影响可观测性（#7228）。
- **工具描述与模型可调用性一致**：描述中教模型使用已隐藏/退役的工具名会误导模型（#7223、#7222）。

> 注：以上内容严格依据所给数据整理，未补充数据外信息；Issues 数量仅 2 条，故未凑满 10 条。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*