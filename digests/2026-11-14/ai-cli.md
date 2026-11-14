# AI CLI 工具社区动态日报 2026-11-14

> 生成时间: 2026-11-14 16:37 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-11-14）

> 说明：以下数据均取自所提供的各工具社区动态摘要。部分工具（Kimi Code CLI、Pi、DeepSeek TUI）仅列出摘要给出的条目，未做补足或推算；未能从材料中获得的指标（如真实 Issue 总数）以“材料所示”口径标注，避免虚构。

---

## 1. 生态全景

当前 AI CLI 工具已从“能跑起来”进入**可靠性治理期**：多数高热度讨论不再是新功能，而是会话状态一致性、工具调用正确性、跨端协同与发布流水线稳定性。同一类缺陷在几乎全部工具中重复出现——回合提前终止、中断后状态残留、配置项被静默忽略、错误信息缺乏可诊断性。与此同时，多家工具在推进**架构级重构**（Qwen Code 的 1.0 事件驱动内核、Gemini CLI 的 subagent 体系、OpenCode 的 v2 会话存储），说明竞争焦点正从模型接入转向运行时内核与生态扩展（MCP、插件、子代理）。企业化与权限模型成为新的分裂点：沙箱、信任边界、托管工作区、OAuth/MCP 授权在多个仓库同时成为高频议题。

---

## 2. 各工具活跃度对比

| 工具 | Release（24h） | 摘要所示 Issues（热点/更新） | 摘要所示 PR（更新） | 今日最热话题 |
|---|---|---|---|---|
| **Claude Code** | v2.1.325（zstd 解码安全修复） | 10 条热点 + 4 条其他（约 14） | 5 条（全部列出） | 桌面端自定义主题 #79305（39 评论，👍101） |
| **OpenAI Codex** | rust-v0.171.0-alpha.4 / alpha.5（无变更日志） | 10 条 + 3 条其他（约 13） | 10 条（多为 copyberry[bot]，CLOSED） | Windows Computer Use 截图失败 #49383（57 评论） |
| **Gemini CLI** | 无（v0.45.2 changelog PR 待合） | 10 条 | 10 条 | Subagent 达 MAX_TURNS 却报成功 #22323（13 评论）；P0 构建失败 PR #30207 |
| **GitHub Copilot CLI** | v1.0.112 / v1.0.112-0 | 10 条（摘要称 Issues 侧更新 34 条） | 2 条（均为 dependabot） | 默认子代理模型免费计划不可用 #5456（新回归） |
| **Kimi Code CLI** | 无 | 无 | 无 | 过去 24 小时无活动 |
| **OpenCode** | 无 | 10 条 | 10 条 | 桌面端合并同一仓库不同目录 #29869（11 评论，👍8）；hashline 编辑模式 👍37 |
| **Pi** | 无 | 10 条 | 5 条（全部列出） | Gemini reasoning_effort 失效 #12019（P0，已闭合） |
| **Qwen Code** | nightly 20261113（不建议生产） | 10 条 + 若干其他 | 10 条 + 若干其他 | CI 失败 #14724（364 评论）；1.0 内核落地 #17045 |
| **DeepSeek TUI** | 无 | 1 条（#7232，CLOSED 待发版） | 13 条（实质 4 条 + 9 条依赖/CI） | 工作区级 flock 导致会话只读 #7232 |

**读数提示**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 的摘要均以“热点 10 条”为展示上限，真实 Issue 总量不可比；GitHub Copilot CLI 是唯一给出“Issues 侧更新 34 条”这一显式计数的工具。DeepSeek TUI 仅 1 条 Issue、Qwen Code 评论量极端集中（#14724 单条 364 评论），活跃度结构差异显著。

---

## 3. 共同关注的功能方向

**① 会话与状态一致性（覆盖面最广）**
- Claude Code：插件状态在桌面端/Web/CLI 不同步（#95157）；Remote Control 注册失败与重启后不恢复（#100377、#100114）。
- OpenAI Codex：云托管会话恢复报 `AbsolutePathBuf` 错误（#59855）；Cloud 会话切换易丢上下文（PR #61490）。
- OpenCode：`time_updated` 被服务重启/归档错误重写导致排序错乱（#63920、#63951）；存档线程只读。
- Pi：中断后留下未应答的工具调用（#9986）。
- Qwen Code：被终止 CLI 遗留后台 shell 状态（PR #16511）。

**② 工具调用与并发正确性**
- Claude Code：`readOnlyHint: true` 的 MCP 工具仍串行执行（#109845）；MCP 工具列表不刷新（#100115）。
- Gemini CLI：ACP 模式工具全串行，需并行化（PR #30298）；大输出截断（PR #30297）。
- Pi：同消息内 bash 与 read 并发引发竞态（#11950，P0）；MCP HTTP 取消后仍续流（#11763）。
- DeepSeek TUI：fallback 解析器丢失多行 XML 参数（#7341）、重复解析 `key=value`（#7342）。
- 共性诉求：**并行以提升吞吐，但必须保证执行顺序与状态可回收**。

**③ 配置被静默忽略 / 静默降级**
- Claude Code：`idleCompaction:false` 仍触发压缩（#109898）；语言设为日语仍返回英文（#109459）。
- Gemini CLI：settings.json 对 Browser Agent 无效（#22267）。
- GitHub Copilot CLI：Fusion “high” 静默降级为 standard（#5457）；`--no-alt-screen` 被静默移除（#4509，👍6）。
- OpenCode：`models.opencode.ai` 不可达时模型静默消失（#63323）。

**④ 模型行为可信度**
- Gemini CLI：subagent 达轮次上限却报 success（#22323）；模型不主动使用 skills/subagents（#21968）；倾向使用 `git reset --force` 等破坏性命令（#22672）。
- OpenAI Codex：代理承认仍有工作却提前结束回合（#60258）。
- Qwen Code：反复出现同一拼写错误，重装无效（#16824）。

**⑤ MCP / 授权生命周期**
- OpenAI Codex：令牌轮换后不重新注册 DCR，需手动重授权（#29630）。
- GitHub Copilot CLI：请求 MCP 服务器启动完成事件（#5458）；Windows Entra 令牌缓存 0 字节（#5236）。
- Gemini CLI：OAuth 初始化失败污染进程级缓存（PR #30296，安全相关）。

**⑥ 发布流水线与 CI 稳定性**
- Gemini CLI：陈旧构建产物导致 nightly 连续 9 天失败（PR #30207）。
- Qwen Code：E2E、macOS nightly、依赖 CVE 审计多条长尾失败（#11680、#16371、#13078）。
- Claude Code / OpenAI Codex：安全问题（zstd 解码、zstd 错误码 400 vs 413）在两端同时出现。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线信号 |
|---|---|---|---|
| **Claude Code** | 全端产品化（CLI + 桌面 + 移动 + Remote Control），插件/Hook 体系 | 个人专业开发者向团队扩展 | 以安全修复为主的增量迭代（v2.1.325）；插件工程细节仍在补课（hook 路径未加引号等） |
| **OpenAI Codex** | 云托管会话 + Computer Use + 多客户端（Windows/macOS/iOS） | 重度 IDE/桌面一体化用户 | Rust 化（rust-v0.171.0）、app-server 架构、Context/权限按环境描述（PR #61494） |
| **Gemini CLI** | Subagent 体系、AST 感知代码理解、ACP 协议 | 希望 agent 自主编排的开发者 | 推进 ACP 并行执行与沙箱化 bash（#19873）；构建与内核修复并重 |
| **GitHub Copilot CLI** | 企业策略、沙箱权限、多模型路由（Fusion） | 企业与 GitHub 生态内开发者 | 依赖更新为主，功能 PR 少；沙箱与策略精细化是主诉求 |
| **OpenCode** | v2 会话存储、桌面端、编辑模式创新、Console 产物 | 多 worktree、重度会话管理用户 | 插件（Effect）导出 Tool、会话大纲面板；自更新链路需加固 |
| **Pi** | 多模型兼容（Copilot/Mistral/Groq/llama.cpp）、工具执行链路 | 多 provider 混用开发者 | 用 models.dev 替代硬编码 model metadata（PR #12110）；`toolOutput` 截断配置化 |
| **Qwen Code** | 1.0 事件驱动内核、托管 agent、Web Shell → IDE 形态 | 企业托管部署与自建 | 单一 `query()` 入口、feature flag 渐进（`experimental.unifiedAgentLoop`）、托管 worktree |
| **DeepSeek TUI** | 轻量 TUI、OpenAI-compatible provider 扩展 | 偏好终端与自托管的小团队 | 运行时 `/v1/models` 发现模型与价格而非硬编码（PR #7340） |

**关键分化**：Claude Code / Codex / Copilot CLI 走“产品全端 + 企业策略”；Gemini CLI / Qwen Code 走“内核重构 + agent 编排”；OpenCode / Pi / DeepSeek TUI 更偏“可插拔 provider + 开发者自建”。

---

## 5. 社区热度与成熟度

**热度梯队（基于材料可核实的评论/点赞）**
- **高强度**：Qwen Code（#14724 单条 364 评论，CI 追蹤类）；OpenAI Codex（#49383 57 评论、#59855 35 评论）；Claude Code（#79305 39 评论/👍101）；Claude Code #95557 之外的 Gemini #22323（13 评论）；OpenCode（#29869 11 评论/👍8，hashline 👍37）。
- **中等**：Gemini CLI、Pi、GitHub Copilot CLI（多条 1–10 评论，新回归问题为主）。
- **低/静默**：DeepSeek TUI（1 条 Issue，评论 1，👍0）；Kimi Code CLI（无活动）。

**成熟度判断**
- **快速迭代 / 结构性变动**：Qwen Code（1.0 内核逐面落地、CI 体系重投入）、Gemini CLI（subagent 成熟化 + P0 构建修复）、OpenCode（v2 会话存储缺陷集中暴露）。
- **产品化收敛但基础可靠性仍欠账**：Claude Code、Codex、Copilot CLI——发布频繁但以修复为主，开箱可用性回归（Copilot #5456 免费计划子代理不可用、#5404 杀父进程）是主要风险。
- **维护节奏偏保守**：DeepSeek TUI 以 dependabot 与 CI action 升级为主（13 条 PR 中 9 条例行），实质工程集中在两条外部贡献的解析器修复。

---

## 6. 值得关注的趋势信号

1. **“配置可信度”成为一等公民问题**。Claude Code、Gemini CLI、Copilot CLI、OpenCode 四家均出现配置/策略被忽略或静默降级。对开发者的参考价值：在自动化流水线中不应假设 settings 生效，需有配置生效的可观测验证。

2. **工具调用并发的正确性 > 并行度**。多家在推进并行工具执行（Gemini PR #30298、Claude Code #109845），但 Pi #11950 的 bash/read 竞态说明**并行化必须带依赖感知**。自建 agent 时应把“同消息工具依赖图”作为显式设计对象。

3. **reasoning_effort / 缓存键耦合影响成本**。OpenCode #55156、#63935 指出 `reasoning_effort` 参与前缀缓存键，导致约三分之一请求丢失提示词缓存；Pi #12019 修复 Gemini reasoning effort。对成本敏感团队，这是可量化的优化点（缓存命中率、token 计费）。

4. **上下文膨胀从“模型问题”变成“工具设计问题”**。Pi #12165（`searchTools` 3 天 950KB，占上下文约 25%）与 PR #12163（`toolOutput` 默认 50KB/2000 行截断）表明，工具描述与输出截断正在被产品化为可配置项。

5. **MCP 进入“授权生命周期”深水区**。DCR 重注册（Codex #29630）、令牌缓存（Copilot #5236）、OAuth 缓存污染（Gemini PR #30296）、传输层环境变量展开（Pi #10654）——MCP 已从“能连上”转向“长期运行不失效”。

6. **安全类信号两端并现**：zstd 解码安全问题（Claude Code v2.1.325）与 zstd 错误码不一致（Codex #61489）；WebSearch 返回第三方镜像域名并被模型复述（Claude Code #108979）；YOLO 模式解析失败误放行（Gemini PR #30295）。**外部结果可信度与策略兜底**值得纳入评审清单。

7. **“持续工程工作区”诉求浮现**。Codex #61348（明确标注非独立验证）与 Qwen Code 托管 worktree（PR #17228）指向同一方向：跨会话记忆与任务持久化。但需注意前者为社区自述、未经官方验证，决策时应以官方 roadmap 为准。

---

*数据边界声明：本报告所有数量、评论数、点赞数、版本号与链接均来自用户提供的摘要；其中 Pi、DeepSeek TUI 的 PR/Issue 数量为材料实际列出条目，Claude Code、Codex、Gemini CLI、Copilot CLI、OpenCode、Qwen Code 的 Issue 数为“热点 10 条 + 材料另列条目”的合计口径，非仓库真实总量。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-14）

> 说明：提供的 PR 数据中评论数均为 `undefined`、👍 均为 0（仅作者自述摘要），因此「热门 PR」无法按真实互动量排序。以下排行依据为**更新活跃度、关联 Issue 热度、讨论中暴露问题的重要性**，并已注明数据限制。

---

## 1. 热门 Skills 排行（PR）

| # | Skill / PR | 功能 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **mcp-builder** 修复 [#1742](https://github.com/anthropics/skills/pull/1742) | 使 mcp-builder 适配 `mcp>=2.0.0` | MCP 2.x 将 `streamablehttp_client` 重命名为 `streamable_http_client`，自定义 header 改由 `create_mcp_http_client` 配置；关联 Issue #1668。涉及核心开发工具链，兼容性影响面最大 | OPEN |
| 2 | **skill-creator** 触发评估修复 [#1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger evals、修复 Windows 与运行时失败 | 与 Issue #556（0% 触发率）、#1352（并行 worker 交叉匹配 UUID 导致假阴性）同源，直指 skill 评估机制的可靠性 | OPEN |
| 3 | **webapp-testing** 安全修复 [#1980](https://github.com/anthropics/skills/pull/1980) | 移除 `with_server.py` 中的 `shell=True` | 未净化命令串进入系统 shell 的安全风险；另有 #1976（textarea/select 元素识别）分项修复 | OPEN |
| 4 | **docx** 两处正确性修复 [#1792](https://github.com/anthropics/skills/pull/1792) / [#1734](https://github.com/anthropics/skills/pull/1734) | LibreOffice 超时上报为错误并校验输出；检测孤立批注 | 与 Issue #2018（merge_runs.py 写出非法 XML）共同反映文档 Skills 的脚本可靠性问题 | OPEN |
| 5 | **xlsx** 定义名解析修复 [#2019](https://github.com/anthropics/skills/pull/2019) | 解析工作表级 defined names 与别名 | 修复 #2013 的外部链接风险漏报（false negative） | OPEN |
| 6 | **claude-api** 文档修复 [#1730](https://github.com/anthropics/skills/pull/1730) / [#1950](https://github.com/anthropics/skills/pull/1950) | 替换 3 个 404 文档链接；更新 Python `pause_turn` 恢复指引 | #1950 指出 Python SDK 1.1.0 已支持自动恢复，旧指引已过时；背景是 Issue #1487 关于该 Skill 单次注入约 156k tokens 的担忧 | OPEN |
| 7 | **新 Skill：pyxel** [#525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏开发（实现、无头输入运行、帧检查） | 创建于 2026-03，更新至 2026-11-01，是生命周期最长、仍活跃的社区新 Skill | OPEN |
| 8 | **新 Skill：md2video-audio** [#1703](https://github.com/anthropics/skills/pull/1703) | 将 Markdown 编译为带配音的 MP4 | 「零成本」内容生产类 Skill 的代表 | OPEN |

---

## 2. 社区需求趋势（Issues）

- **Skill 分发与信任治理（最热）**：Issue [#492](https://github.com/anthropics/skills/issues/492)（46 评论）指出社区 Skill 借 `anthropic/` 命名空间冒充官方，构成信任边界滥用；[#228](https://github.com/anthropics/skills/issues/228)（17 评论，👍8）要求 Claude.ai 内组织级 Skill 共享，替代手动下载、用 Slack 传文件的流程。
- **评估工具可信度**：Issue [#556](https://github.com/anthropics/skills/issues/556)（0% 触发率）与 [#1352](https://github.com/anthropics/skills/issues/1352)（并行 worker 假阴性）表明社区大量投入 skill 触发评估自动化，但工具输出不可信。
- **Skill 编写规范**：Issue [#202](https://github.com/anthropics/skills/issues/202)（已关闭）主张 skill-creator 应写成可执行指令而非开发文档；[#2064](https://github.com/anthropics/skills/issues/2064) 指出 description 缺少「何时使用」，影响触发。
- **上下文与安装冲突**：[#189](https://github.com/anthropics/skills/issues/189)（👍9）指出 document-skills 与 example-skills 安装内容重复；[#1487](https://github.com/anthropics/skills/issues/1487) 反映 claude-api 单次注入约 156k tokens 耗尽窗口。
- **新 Skill 方向提案**：agent 治理/安全模式（[#412](https://github.com/anthropics/skills/issues/412)，已关闭）、compact-memory 符号化状态（[#1329](https://github.com/anthropics/skills/issues/1329)）、三段式推理质量门（[#1385](https://github.com/anthropics/skills/issues/1385)）。
- **平台账户能力**：Issue [#1143](https://github.com/anthropics/skills/issues/1143)（👍17）要求支持更改账户邮箱，属仓库外的平台诉求。

---

## 3. 高潜力待合并 Skills

| PR | 类型 | 潜力判断依据 |
|---|---|---|
| [#1742](https://github.com/anthropics/skills/pull/1742) mcp-builder 修复 | 工具链兼容 | 关联明确 Issue、有具体方案、影响所有使用 MCP 2.x 的用户 |
| [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 评估隔离 | 评估可靠性 | 同时覆盖 Windows、运行时失败，与 #556/#1352 形成完整修复链条 |
| [#1792](https://github.com/anthropics/skills/pull/1792) / [#2019](https://github.com/anthropics/skills/pull/2019) docx / xlsx 正确性修复 | 文档 Skills 缺陷 | 均「Fixes #具体 Issue」，改动局部、风险低 |
| [#1980](https://github.com/anthropics/skills/pull/1980) webapp-testing 安全修复 | 安全 | 解决 `shell=True` 注入面，安全类修复通常优先级高 |
| [#1681](https://github.com/anthropics/skills/pull/1681) package_skill.py 独立执行 | 开发者体验 | 解决直接运行脚本的 `ModuleNotFoundError`，使用门槛低 |
| [#2108](https://github.com/anthropics/skills/pull/2108) README 快照状态说明 | 文档 | 引用可验证的导出里程碑（#1447、#330），仅改 README |
| [#525](https://github.com/anthropics/skills/pull/525) pyxel | 新增 Skill | 持续更新近 8 个月，作者活跃，垂直场景明确 |

> 注：数据未提供任何 PR 的合并状态或维护者表态，以上为基于活跃度与问题性质的推断，不构成合并预期判断。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是「信任与可靠性」——既要治理 Skill 的命名/分发信任边界与重复安装，也要让 skill 触发评估、文档类脚本和安全执行不再产生静默错误，新 Skill 方向（游戏、视频、HPC、Web3 审计）的诉求反而次要。**

---

*数据局限：PR 评论数与点赞在数据源中缺失（`undefined` / 0），无法按互动量真实排序；表中所有功能与状态均引自 PR/Issue 摘要，未验证合并结果。*

---

# Claude Code 社区动态日报（2026-11-14）

> 数据来源：github.com/anthropics/claude-code。以下内容仅基于本次提供的 Releases、Issues、PR 数据整理。

## 1. 今日速览

今日发布 v2.1.325，核心是修复 zstd 压缩响应解码中的安全问题，并补充 VS Code 类集成终端的 Jupyter notebook 交互提示。社区侧，桌面端主题定制（#79305）、Remote Control 注册失败（#100377）与 MCP 工具并行执行（#109845）是讨论度较高的方向；PR 以插件/Hook 的工程性修复为主。

## 2. 版本发布

**v2.1.325**

- 修复 zstd 压缩响应解码过程中的安全问题（安全相关，建议尽快升级）。
- VS Code 及类似集成终端中新增 spinner 提示：当 Claude 读取或编辑过 Jupyter notebook 后，会提示重新运行 notebook 单元格（仅显示一次）。
- 组织相关错误提示下方新增一行说明（原文摘要在此处截断，未提供完整内容）。

## 3. 社区热点 Issues

1. **#79305 桌面端支持自定义主题 / 强调色**（OPEN，39 评论，👍101）
   桌面端仅有明/暗/高对比模式，用户认为在多数应用深色模式趋同的背景下难以区分窗口。这是今日评论与点赞数最高的需求，反映桌面端与 CLI 自定义主题系统存在体验落差。
   https://github.com/anthropics/claude-code/issues/79305

2. **#100377 Remote Control：Projects 线程注册失败（CCR v2 worker registration failed … 400）**（OPEN，19 评论，带复现）
   自 2026-10-07 起，从 claude.ai 发往本机 Mac 的 Project 线程全部无法启动，而同一服务器上自启动的会话可正常注册。属于跨端远程执行的重要连通性缺陷。
   https://github.com/anthropics/claude-code/issues/100377

3. **#105770 Android 应用在 root/解锁设备上 Google Play 验证失败（HTTP 400）**（OPEN，15 评论，👍13）
   设备通过 Play Integrity 校验后仍被服务端 `/auth/verify_google_mobile` 拒绝。涉及移动端登录可用性，被标记为 invalid 但讨论持续，说明存在用户与官方判断的分歧。
   https://github.com/anthropics/claude-code/issues/105770

4. **#102952 恢复桌面主页的发光代码字形涟漪背景**（OPEN，13 评论，👍19）
   纯视觉/品牌向需求，点赞数高，显示桌面端外观细节是活跃的用户关注点。
   https://github.com/anthropics/claude-code/issues/102952

5. **#100114 Windows 桌面端重启后 Remote Control 未恢复，移动端会话显示为归档**（OPEN，12 评论，👍8）
   静默更新或重启后既有会话丢失远程控制状态。与 #100377 共同指向 Remote Control 的稳定性问题。
   https://github.com/anthropics/claude-code/issues/100114

6. **#95157 账号同步插件无法删除：从桌面端和 claude.ai 移除后仍复现，且 CLI 不可见**（OPEN，11 评论）
   插件状态在桌面端、Web、CLI 三处不一致，属插件体系的状态同步缺陷。
   https://github.com/anthropics/claude-code/issues/95157

7. **#108975 iOS 应用在回合进行中发送的消息，需等当前回合结束才送达**（OPEN，7 评论，👍3，regression）
   近期回归问题，直接影响移动端与桌面端协同使用体验。
   https://github.com/anthropics/claude-code/issues/108975

8. **#100115 桌面端 MCP 连接器工具列表不刷新**（OPEN，4 评论）
   服务端新增工具后，已有会话与 chip 派生会话中的工具列表仍为旧数据，关闭/重开连接器也无效。对依赖动态 MCP 的开发者影响较大。
   https://github.com/anthropics/claude-code/issues/100115

9. **#109845 readOnlyHint: true 的 MCP 工具经 HTTP 仍串行执行**（OPEN，1 评论）
   在 bypassPermissions 模式下、单个远程 MCP 服务器场景中，只读工具未并行执行。直接影响多工具工作流的吞吐效率，属新提交但值得关注。
   https://github.com/anthropics/claude-code/issues/109845

10. **#108979 WebSearch 返回第三方镜像域名（gh.hhj520.top）并被模型在回复中复述**（OPEN，1 评论，👍3）
    搜索结果被改写至非 GitHub 官方域名，且模型沿用该域。涉及结果可信度与引用安全。
    https://github.com/anthropics/claude-code/issues/108979

**其他值得留意的条目**：#109898（已关闭）—idle compaction 忽略 `idleCompaction:false` 与 `CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS`，被记录为 trigger “auto”；#109459—即使已在 settings.json 与 CLAUDE.md 中指定日语，中途消息与部分最终回复仍为英文；#109900—项目级 `.claude/skills/` 插件在仅信任父目录时被跳过（#87325 的延续）；#109853—Windows 桌面端 mod 背景无法绘制。

## 4. 重要 PR 进展

本次数据仅包含 5 条过去 24 小时更新的 PR，以下全部列出（不足 10 条，未作补充或推测）：

1. **#78445 docs：修正与插件实际行为矛盾的插件描述与版本号**（OPEN）
   指出插件索引/市场元数据有三处与实际行为不符，包括 `security-guidance` 的 hook 事件与 pattern 数量错误；每处均对照插件源码核实。
   https://github.com/anthropics/claude-code/pull/78445

2. **#106972 在前台运行 dedupe agents**（OPEN）
   部分 dedupe 运行数秒即结束，疑似因后台启动 agent 后回合提前收尾而被截断；该 PR 在 dedupe 步骤设置 `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1`。
   https://github.com/anthropics/claude-code/pull/106972

3. **#95698 fix(plugins)：通过 bash 以带引号路径运行 ralph-wiggum 与 output-style 的 .sh hooks**（OPEN，作者 claude[bot]）
   三个内置插件以裸路径、未加引号的方式注册 hook；关联 #95673，并修复 #78490 中的一半问题。
   https://github.com/anthropics/claude-code/pull/95698

4. **#81672 fix(hookify)：使包导入不依赖安装目录名**（OPEN）
   原实现将 `os.path.dirname(CLAUDE_PLUGIN_ROOT)` 加入 `sys.path` 并依赖目录名恰为 `hookify`；修复 #69665、#81448。
   https://github.com/anthropics/claude-code/pull/81672

5. **#45553 resolve duplicate IPs**（OPEN）
   摘要为空，无更多可核实信息。
   https://github.com/anthropics/claude-code/pull/45553

## 5. 功能需求趋势

- **桌面端体验与外观定制**：自定义主题/强调色（#79305）、恢复首页动态背景（#102952），显示桌面端在视觉层面与 CLI 的差距成为诉求。
- **跨端会话与远程控制**：Remote Control 注册失败（#100377）、重启后不恢复（#100114）、iOS 中途消息延迟（#108975）共同指向多设备协同的可靠性。
- **插件与扩展体系统一**：统一 MCP servers / skills / agents 的插件系统（#93716）、账号同步插件无法删除（#95157）、项目级 skills 信任问题（#109900）。
- **TUI 与子代理控制力**：为 subagents 提供类似 skills 的运行时开关、仅用户、仅名称调用（#93225）；新增 `/restart` 命令快速恢复最近会话（#96189）。
- **MCP 性能与工具列表一致性**：只读工具并行执行（#109845）、工具列表刷新（#100115）。
- **CLI 初始化与清理配置**：首次设置时提示 `cleanupPeriodDays`（#95322）。

## 6. 开发者关注点

- **状态与配置被忽略**：`idleCompaction:false`、`CLAUDE_CODE_IDLE_COMPACT_MIN_TOKENS` 仍触发压缩（#109898）；语言设为日语仍返回英文（#109459）。配置可信度是反复出现的痛点。
- **跨端状态不一致**：插件在桌面端/Web/CLI 之间状态不同步（#95157）；会话在移动端被归档（#100114）。
- **远程与移动端可用性**：Remote Control 400 注册失败（#100377）、iOS 消息排队（#108975）影响日常协作流程。
- **安全与结果可信度**：zstd 解码安全问题已在 v2.1.325 修复；WebSearch 返回镜像域名并被模型复述（#108979）提示需关注外部结果的可信度。
- **集成工具体验**：Alacritty 的 `/terminal-setup` 写入路径错误（#16066）、VS Code 中 Jupyter notebook 的重跑提示（v2.1.325 新增）表明 IDE/终端集成仍是高频反馈区。
- **插件工程细节**：hook 路径未加引号、包导入依赖目录名等低层问题（#95698、#81672）仍有待合并修复，影响插件作者与使用者。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-14）

## 1. 今日速览

过去 24 小时仓库连续发布 0.171.0 两个 Rust alpha 版本（alpha.4、alpha.5），更新说明仅为版本号本身。与此同时，大量 copyberry[bot] 提交的 PR 被关闭合并，集中在 Cloud 会话切换、归档线程、实时历史分页、Git remote 解析加固等基础能力上。社区侧 Windows Computer Use 截图失败（#49383，57 条评论）与云托管会话恢复失败的 `AbsolutePathBuf` 错误（#59855，35 条评论）仍是讨论量最高的两个问题。

---

## 2. 版本发布

- **rust-v0.171.0-alpha.5** — 发布说明仅包含「Release 0.171.0-alpha.5」，未提供具体变更内容。[链接](https://github.com/openai/codex/releases)
- **rust-v0.171.0-alpha.4** — 同上，说明仅含版本号。

> 两个 alpha 版本均未附带变更日志，无法从数据判断具体改动。

---

## 3. 社区热点 Issues（10 个）

1. **#49383 Windows Computer Use 截图捕获失败（FrameArrived 超时 + E_INVALIDARG）**
   评论 57、👍3，是本周期讨论最热烈的问题。用户在 Codex App 26.928.20755（Plus 订阅）上使用 Windows Computer Use 时截图捕获失败，持续近两个月（创建于 2026-09-29）仍未解决。[链接](https://github.com/openai/codex/issues/49383)

2. **#59855 Windows 桌面端恢复云托管会话报 AbsolutePathBuf 错误**
   评论 35。打开侧栏中的云托管聊天时，在发送新消息前就出现 "Failed to resume chat / Invalid request: AbsolutePathBuf deserialized without a b..."。影响 Windows 桌面端核心的会话恢复流程。[链接](https://github.com/openai/codex/issues/59855)

3. **#57101 Windows Computer Use 截图轮次结束后捕获权限与金色边框未关闭**
   评论 31、👍2。涉及 `OpenAI.Codex 26.1021.3705.0` MSIX 包，属于 Computer Use 的资源释放/状态残留问题，与 #49383 同属 Windows Computer Use 稳定性议题。[链接](https://github.com/openai/codex/issues/57101)

4. **#61348 功能请求：将 ChatGPT + Work + Codex 做成持续工程工作区而非一次性任务**
   评论 26。作者明确标注内容由 ChatGPT 根据用户对话与投诉摘要整理，且**非独立验证**。反映社区对跨会话连续记忆/工作区形态的强烈诉求。[链接](https://github.com/openai/codex/issues/61348)

5. **#49829 云端 WebSocket 需代理时，Dot 任务无法在桌面端打开**
   评论 25、👍4。macOS 上 ChatGPT Pro 用户打开 Dot 创建的任务时报 "Codex app-server is not available"，同一任务在其他途径可正常打开，属代理/连通性问题。[链接](https://github.com/openai/codex/issues/49829)

6. **#14613 Stream disconnected before completion**
   评论 12。创建于 2026-03-13，长期未关闭的 macOS Pro 连接稳定性问题，说明流式连接中断是长期存在的顽疾。[链接](https://github.com/openai/codex/issues/14613)

7. **#61489 zstd 请求压缩：高可压缩内容返回裸 400 而非文档所述 413，且 Codex 不会规避**
   评论 11，当日新建。codex-cli 0.167.0、Pro 500、Linux CentOS 8 环境。涉及 CLI 错误处理与服务端状态码一致性问题。[链接](https://github.com/openai/codex/issues/61489)

8. **#25202 远程移动端 Codex 不渲染助手消息中链接的本地媒体产物**
   评论 9、👍8（本期点赞最高之一）。跨 Windows 宿主 + iOS 客户端的产物展示断链问题，创建于 2026-05-30 已持续数月。[链接](https://github.com/openai/codex/issues/25202)

9. **#60258 Codex 在长实现任务中反复在部分步骤后结束回合（尽管明确要求继续）**
   评论 7。属 model-behavior 类问题：代理承认仍有大量工作却提前终止，直接影响多步骤实现任务的可用性。[链接](https://github.com/openai/codex/issues/60258)

10. **#29630 MCP OAuth：invalid_client / 刷新令牌过期时不重新注册 DCR，需手动重授权**
    评论 6、👍5。MCP 服务器刷新令牌轮换后 Codex 直接停止，不丢弃失效 `client_id` 也不调用注册端点，是 MCP 集成的实际阻碍。[链接](https://github.com/openai/codex/issues/29630)

> 其他值得留意：#52067 托管 app-server 守护进程保留所有旧版本，`releases` 目录涨至 2.8 GB；#47223 PR 上下文的 @codex 任务无 git remote、无法回推 PR；#61529 Windows 上本地 Frigate 测试疑似触发重复误报（安全内容拦截）。

---

## 4. 重要 PR 进展（10 个）

本期高评论数 PR 基本由 copyberry[bot] 提交，状态均为 **CLOSED**。以下按功能重要性排列：

1. **#61490 在导航就绪前保留当前 Cloud 任务**
   打开另一个 Cloud 任务时，在历史加载完成前保留当前聊天、草稿与回复流，避免切换失败导致上下文丢失。[链接](https://github.com/openai/codex/pull/61490)

2. **#61488 加固 Git remote 采集并限制 remote URL 元数据**
   修复 `git remote -v` 解析时把 partial clone filter 文本误判为 remote 条目的问题；同时限制过长的 remote URL，避免回合元数据超出 Responses API 的 8,096 字符上限。[链接](https://github.com/openai/codex/pull/61488)

3. **#61486 归档线程保持只读，并在 TUI 中支持取消归档**
   归档线程显示提示并冻结输入（保留缓存转录、草稿、待处理 steer、问题回答），`U` 键可取消归档。[链接](https://github.com/openai/codex/pull/61486)

4. **#61481 允许在 Cloud 会话切换期间用 Ctrl+C 退出**
   在准备 Cloud 会话、接管线程之前响应 `Ctrl+C`；先清空缓冲草稿，无草稿或模态框处理取消时再请求关闭。[链接](https://github.com/openai/codex/pull/61481)

5. **#61480 为持久化实时历史添加快照分页**
   新增实验性 `thread/realtime/list` 读取，独立于回合分页或活跃运行时，支持按会话、观察时间、事件 ID 过滤并排序。[链接](https://github.com/openai/codex/pull/61480)

6. **#61473 在确认完成前持久化带时间戳的实时帧**
   将语音转录作为带 `voice_transcript` 通道的 `frame` 项记录，同时保留旧转录支持。[链接](https://github.com/openai/codex/pull/61473)

7. **#61494 通过特性开关按环境描述上下文与权限**
   此前上下文只描述主环境的文件系统与网络规则；改动后可按所选环境分别描述权限。[链接](https://github.com/openai/codex/pull/61494)

8. **#61452 为上下文窗口提示新增可选的工具输出渲染**
   新增令牌预算设置 `context_window_as_tool_output`，默认 `false`；开启后渲染代理身份、上下文窗口 ID 及相关提示。[链接](https://github.com/openai/codex/pull/61452)

9. **#61446 为 `thread/list` 增加 thread ID 包含过滤**
   便于客户端在现有列表过滤条件下回查保存的线程 ID，包括第一页历史之外的线程。[链接](https://github.com/openai/codex/pull/61446)

10. **#61444 为共享 MCP 服务器添加进程内启动目录**
    新增隐藏 app-server 选项 `--plugin-mcp-launch-cwd` 与 `--mcp-launch-cwd`，允许宿主提供本地 stdio 服务器的启动目录而不写入持久设置。[链接](https://github.com/openai/codex/pull/61444)

> 另：#61535 为 Responses 请求添加受信任的请求国家元数据；#61465 将 JSON 字节计数迁移至 `codex-utils-string`；#4334（2025-09 创建）为 TUI Markdown 代码块添加语法高亮。

---

## 5. 功能需求趋势

从本期 Issues 标签与内容看，社区关注方向集中在：

- **Windows 桌面端稳定性**：Computer Use 截图、会话恢复、UI 残留（幽灵标签 #41653、朗读失败 #53730）等问题占据高评论榜多数，`windows-os` 是出现最频繁的标签之一。
- **Computer Use / 截图能力**：#49383、#57101 两条合计 88 条评论，是当前最集中的功能短板。
- **云任务与会话连续性**：云托管聊天恢复、Dot 任务打开、Cloud 目录刷新，以及 #61348 提出的「持续工程工作区」诉求，共同指向跨会话记忆与任务持久化。
- **导航与信息检索体验**：#38631 建议在会话 minimap 上增加消息书签，针对长线程难以定位的问题（👍5）。
- **MCP / 集成生态**：OAuth 失效重注册（#29630）、MCP 启动目录配置（#61444）显示 MCP 已成为实际工作流的一部分，但授权与生命周期管理仍不完善。
- **CLI 与协议健壮性**：zstd 压缩错误码不一致（#61489）、app-server 守护进程磁盘占用（#52067，2.8 GB）。

---

## 6. 开发者关注点

- **回合提前终止**：#60258 指出代理在明确授权、且自身承认仍有大量工作的多步骤实现中反复提前结束，直接损害长任务的可靠性。
- **错误信息可诊断性差**：`AbsolutePathBuf deserialized without a b...`、`Codex app-server is not available`、`{"detail":"Bad Request"}` 等错误缺乏上下文，用户难以自助定位。
- **网络与代理环境适配**：代理场景下的 WebSocket、流式连接中断（#14613）、HTTP 400（#58569）在 macOS/Windows 上反复出现。
- **手动重授权摩擦**：MCP 令牌轮换后必须人工重新认证（#29630），在自动化工作流中成本较高。
- **磁盘与资源管理**：app-server 守护进程累积旧版本至 2.8 GB，缺少清理机制。
- **安全内容误报**：Windows 上授权安全测试（Frigate）触发「This content can't be shown」拦截（#61529），影响合法的安全研究场景。

---

*说明：本期 Releases 无具体变更说明；PR 评论数字段在数据中为 undefined，故按功能重要性而非评论量筛选。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-14）

## 今日速览
过去 24 小时无新版本发布，社区活动集中在 *agents* 与 *core* 稳定性问题。最值得关注的是 P0 构建问题：夜间发布自 2026-11-05 起连续失败（npm 包体积超限），以及一批 subagent 行为错误——命中轮次上限被误报为成功、generalist agent 无限挂起。同时 ACP 模式出现并行工具调用、大输出截断等改进 PR。

## 版本发布
无（过去 24 小时无新 Release）。相关信号：PR #27703 为 v0.45.2 自动生成的 Changelog 仍处于 OPEN，待审合并。

## 社区热点 Issues（10 条）

1. **#22323 Subagent 达到 MAX_TURNS 却报告为 GOAL 成功**（P1，13 条评论，👍2）
   `codebase_investigator` 未做任何分析就触发轮次上限，却返回 `status: success`，掩盖了中断事实。这是今日讨论最热的问题，直接影响 subagent 结果的可信度。状态：need-retesting。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 Generalist agent 永久挂起**（P1，8 条评论，👍8）
   任何委派给 generalist agent 的任务（如建文件夹）都会无限挂起，用户等待 1 小时后取消。👍 数偏高说明影响面广，是当前最高优先级的可用性阻塞。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由**（P2，9 条评论）
   基于 Gemini 3 模型原生倾向链式调用 POSIX 工具（grep/cat/sed/awk）的观察，提出沙箱化执行方案。属于架构层面的方向性讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 Gemini 不会主动使用 skills 和 sub-agents**（P2，7 条评论）
   用户反馈：除非显式指示，模型几乎不会自发调用自定义 skills 与 subagent。这直接影响 agent 生态的实用价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 评估 AST 感知的文件读取、搜索与代码库映射**（P2，7 条评论）
   EPIC 追踪 AST 工具能否减少轮次、更精确读取方法边界。与 #22746 联动，指向代码理解能力的系统性提升。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**（P2，5 条评论）
   全局/项目级配置对 Browser Agent 完全无效，配置系统一致性存在缺口。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 browser subagent 在 Wayland 下失败**（P1，4 条评论）
   Linux Wayland 环境下的兼容性问题，影响桌面 Linux 用户。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 工具数超过 128 个时出现 400 错误**（P2，3 条评论）
   标题称 >128，正文称 >400，描述不一致。核心诉求是模型应更智能地按需收窄工具范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 Agent 应抑制破坏性行为**（P2，3 条评论）
   模型在复杂 git 操作中会使用 `git reset`、`--force` 等命令，而非更安全的替代方案；涉及数据库等资源时风险更高。属安全类诉求。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#20079 `~/.gemini/agents/` 下的符号链接不被识别为 agent**（P2，4 条评论）
    影响通过 symlink 管理 agent 配置的工作流。状态：need-information。
    https://github.com/google-gemini/gemini-cli/issues/20079

## 重要 PR 进展（10 条）

1. **#30207 [P0] fix(build): esbuild 前清空 bundle/ 以移除陈旧 chunk**
   夜间发布自 2026-11-05 起每晚失败（`413 Request Entity Too Large`）：tarball 25.2 MB，而约 106 MB 内容中有 ~70 MB 为残留产物。这是当前最关键的基础设施修复。
   https://github.com/google-gemini/gemini-cli/pull/30207

2. **#30298 feat(acp): 并行执行独立工具调用（#30235）**
   ACP 模式下此前所有工具调用均串行，即使模型产出了多个独立的只读调用。改为并行可显著缩短多工具轮次耗时。
   https://github.com/google-gemini/gemini-cli/pull/30298

3. **#30297 fix(acp): 截断 ACP 模式下过大的 shell 与 MCP 工具输出（#30233）**
   `convertToFunctionResponse` 此前将工具输出原样转发给模型，大输出会挤占上下文。
   https://github.com/google-gemini/gemini-cli/pull/30297

4. **#30296 fix(core): 从缓存中剔除被拒绝的 OAuth 客户端初始化 Promise**
   失败的 OAuth 初始化会污染进程级 `oauthClientPromises` 缓存，导致此后所有请求持续失败。安全相关。
   https://github.com/google-gemini/gemini-cli/pull/30296

5. **#30295 fix(core): YOLO 模式下 shell 解析失败时保留 ASK_USER 决策**
   此前 `PolicyEngine.checkShellCommand()` 在解析失败时无条件返回 `ALLOW`，存在误放行风险。
   https://github.com/google-gemini/gemini-cli/pull/30295

6. **#30292 fix(core): 保留超长后台日志尾部并标记截断读取（#29944）**
   `read_background_output` 此前在读取起点超过字节 0 时会丢弃 64KB 窗口的首行，可能丢失整段输出；需补 truncated 标记。带 help wanted。
   https://github.com/google-gemini/gemini-cli/pull/30292

7. **#30157 fix(core): safeJsonStringify 仅在真正循环时替换为 [Circular]**
   此前任何被二次引用的对象都会被替换为 `"[Circular]"`——OpenTelemetry SDK 会在所有 data point 间共享 `endTime` 数组，导致遥测导出数据损坏。
   https://github.com/google-gemini/gemini-cli/pull/30157

8. **#28405 fix: 用户上滚时阻止内容更新导致滚动位置跳动（#5009）**
   修复 `VirtualizedList.tsx` 中自动滚动 `useLayoutEffect` 的问题，改善长输出审阅体验。P1/P2 双标记，长期未合。
   https://github.com/google-gemini/gemini-cli/pull/28405

9. **#30051 fix(cli): headless 中断时终止活跃 shell 并持久化工具调用**
   修复 `gemini -p --yolo` 在 `run_shell_command` 执行中被信号中断时以退出码 0 退出、而非标准信号码的问题。（CLOSED）
   https://github.com/google-gemini/gemini-cli/pull/30051

10. **#30055 fix(cli): 迁移时将 Claude SubagentStop hook 映射为 AfterAgent**
    `gemini hooks migrate --from-claude` 因键名 `SubAgentStop` 大小写错误而跳过该事件。同类 CLOSED 修复还包括 #30052（嵌套 .gitignore 否定规则）、#30053（后台 PID 解析 NaN）、#30056（expandEnvVars 内部键泄漏）。
    https://github.com/google-gemini/gemini-cli/pull/30055

## 功能需求趋势

- **Subagent 体系成熟化**：本轮最大主题。涵盖错误上报语义（#22323）、主动调用意愿（#21968）、轨迹可视化 `/chat share`（#22598）、Sprint 1 规划（#20195）、仓库内示例 agent  curation（#18283）、codebase_investigator 重构（#18282）。
- **代码理解能力升级**：AST 感知的读取/搜索/映射（#22745、#22746，涉及 tilth/glyph 工具），指向减少轮次、提升精度。
- **Agent 安全与约束**：抑制破坏性命令（#22672）、YOLO 模式策略收紧（PR #30295）、沙箱化 bash 执行（#19873）。
- **浏览器 agent 健壮性**：配置覆盖失效（#22267）、会话接管与锁恢复（#22232）、Wayland 兼容（#21983）。
- **工具规模治理**：工具数超限报错（#24246），需动态收窄工具集。
- **配置与工作流一致性**：符号链接 agent 识别（#20079）、原生文件工具维护任务追踪（#21000）。

## 开发者关注点

- **可靠性优先于新功能**：P1 问题集中在“挂起”和“误报成功”两类——generalist agent 无限挂起（#21409）、轮次上限被掩盖（#22323），都是让开发者无法信任 agent 输出的根本性缺陷。
- **配置不生效**：settings.json 对 Browser Agent 无效（#22267）、symlink 不被识别（#20079），反映配置加载路径存在多处盲区。
- **发布流水线脆弱**：陈旧构建产物导致夜间发布连续 9 天失败（PR #30207），直接影响版本可达性。
- **模型行为的“自觉性”不足**：不主动用 skills/subagents（#21968）、不优先选安全命令（#22672）、在随机位置生成临时脚本（#23571），是当前用户体感最集中的抱怨。
- **企业/遥测正确性**：`safeJsonStringify` 误判循环导致 OTel 数据损坏（PR #30157）、OAuth 缓存污染（PR #30296），对生产集成影响较大。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-14）

## 1. 今日速览

过去 24 小时共有 2 个版本发布（v1.0.112 与 v1.0.112-0），重点修复 `/compact` 错误显示和提示符粘贴保留问题，并默认采用各模型推荐的上下文窗口。Issues 侧更新达 34 条，1.0.112 默认子代理模型在免费计划不可用（#5456）、Fusion 高等级静默降级（#5457）等新回归问题值得优先关注。

## 2. 版本发布

**v1.0.112**（2026-11-13）
- 修复：`/compact` 失败时现在直接显示模型提供方的错误信息，去除内部 host-rethrow 前缀。
- 修复：CLI 尚未发送的提示（例如在托管账户策略加载期间输入的提示）会保留粘贴文本，再次按 Enter 发送粘贴内容而非丢弃。

**v1.0.112-0**（改进）
- 在不扩大官方支持范围的前提下，改善 macOS Ventura 13.5+ 上的启动表现（best-effort）。
- 默认使用各模型推荐的上下文窗口，同时保留用户显式指定的上下文选择。
- `/chronicle cost-tips` 现包含 Copilot App 会话，并推荐更便宜的模型。

链接: github.com/github/copilot-cli

## 3. 社区热点 Issues

1. **#5456 默认子代理模型在免费计划不可用**（OPEN，新报，v1.0.112）— 默认 explore/task 用 `gpt-6-luna`、research 用 `claude-sonnet-5.5`，但免费计划均不可用，直接导致报错，属新版本开箱即坏问题。
   https://github.com/github/copilot-cli/issues/5456
2. **#5457 Fusion "high" 静默降级为 "standard"**（OPEN，新报）— 请求 High 档却运行在 Standard 策略且无任何警告，`session.fusion_resolved` 记录 `policy: "standard"`，涉及策略解析正确性。
   https://github.com/github/copilot-cli/issues/5457
3. **#5236 Windows MCP 登录后 Entra 令牌缓存为 0 字节**（CLOSED，8 条评论）— 每个新进程都重新弹出账户选择器，`/restart` 不触发，影响 HTTP MCP 服务器体验，已关闭。
   https://github.com/github/copilot-cli/issues/5236
4. **#5323 增加禁用 agent checkpoint refs 的设置**（OPEN，6 条评论，👍2）— 每轮 agent 都在用户仓库生成 `refs/agents/*` 提交并使用用户 git 身份，社区希望可关闭。
   https://github.com/github/copilot-cli/issues/5323
5. **#5145 自定义 provider 下 400 `reasoning_text` 必须回传**（OPEN，4 条评论）— 自定义 OpenAI 兼容 provider（DeepSeek）在后台 shell 退出后的合成回合触发 400，影响第三方模型接入。
   https://github.com/github/copilot-cli/issues/5145
6. **#4509 `--no-alt-screen` 被静默移除**（OPEN，👍6，最高赞）— 全屏模式无法退出且存在问题，自 3 月的 #1799、#2334 起长期未解决，是终端渲染层的高关注痛点。
   https://github.com/github/copilot-cli/issues/4509
7. **#5435 长会话反复内存溢出崩溃（1.0.109）**（OPEN）— 崩溃后恢复会话时此前后台 agent 丢失，属稳定性与上下文记忆的复合问题。
   https://github.com/github/copilot-cli/issues/5435
8. **#5390 macOS 沙箱 `allowLocalNetwork: true` 仍生成 `hostLoopback: deny`**（OPEN，1.0.107）— 导致 Gradle 无法连接本地守护进程，沙箱策略与配置不一致。
   https://github.com/github/copilot-cli/issues/5390
9. **#5404 Windows 在 pwsh 中启动 copilot 杀掉父进程**（OPEN）— 在 git 仓库中从交互式 PowerShell 7 启动会终止父 `pwsh.exe`（tgrep 索引，1.0.108），影响面大。
   https://github.com/github/copilot-cli/issues/5404
10. **#5458 MCP 服务器启动完成时的 hook/通知事件**（OPEN，triage）— 配置多个 MCP 服务器时无法感知全部 connected/failed，社区请求标准化事件。
    https://github.com/github/copilot-cli/issues/5458

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 仅 2 条，均为依赖更新，无功能性 PR：

1. **#5454** `build(deps): bump debian from f6b08b0 to a72b443 in /container`（CLOSED，dependabot）— 容器基础镜像更新。
   https://github.com/github/copilot-cli/pull/5454
2. **#5453** `build(deps): bump docker/login-action from 4.7.0 to 4.8.0`（CLOSED，dependabot）— CI 登录动作版本升级。
   https://github.com/github/copilot-cli/pull/5453

> 说明：本日数据中不存在 10 条重要 PR，以上为全部 PR 记录，不做补充推断。

## 5. 功能需求趋势

- **权限与企业策略精细化**：沙箱/`yolo` 模式的独立策略作用域（#4783，已关闭）、协助式权限回归（#5066）、沙箱 git 凭据与登录身份解耦（#5102）等。
- **Agent 与可配置性**：禁用 checkpoint refs（#5323）、MCP 启动完成通知（#5458）、恢复会话时自动选择原 agent（#4489，已关闭）。
- **多模型 / 自定义 provider 支持**：自定义 OpenAI 兼容 provider 的 `reasoning_text` 回传（#5145）、子代理默认模型适配免费计划（#5456）、Fusion 档位正确解析（#5457）。
- **终端与平台兼容**：Wayland/`/copy`（#4615、#3985）、Windows 代码页复制清屏（#4391）、alt-screen 退出（#4509）。
- **稳定性**：长会话 OOM（#5435）、Windows 父进程被杀（#5404）。

## 6. 开发者关注点

- **开箱即用的兼容性回归**：新版本默认子代理模型在免费计划不可用，是当前最影响新用户的问题。
- **静默行为差异**：Fusion 档位静默降级、`--no-alt-screen` 被移除均无提示，开发者强烈希望有明确告警或替代方案。
- **终端渲染与剪贴板**：Wayland、Windows 代码页、alt-screen 问题反复出现，跨平台体验仍是高频投诉点。
- **沙箱权限模型**：本地网络、凭据注入、企业策略作用域等配置与预期不一致，影响构建工具（如 Gradle）和企业落地。
- **Windows PowerShell 集成安全性**：启动即可杀掉父 shell 属高破坏性缺陷，需优先修复。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-14

## 1. 今日速览

今天没有新版本发布。社区焦点集中在 **v2 会话存储与排序的可靠性**：多个由同一作者（ValDagon）提交的问题揭示 `time_updated` 被服务重启和归档操作错误重写，导致会话列表顺序异常。同时，**opencode-go 推理参数与提示词缓存** 的关联问题出现两条互补报告（#55156、#63935），值得持续跟踪。此外，Gemini/LM Studio 的模型能力推断、桌面端滚动位置丢失等体验问题继续有讨论。

## 2. 版本发布

过去 24 小时无新 Releases。

## 3. 社区热点 Issues（10 条）

1. **#29869 [CLOSED] 桌面端把同一 Git 仓库的不同目录合并为一个项目**
   11 条评论、8 个 👍，是今日讨论量最高的 Issue。影响多 worktree 工作流，社区关注度明显。
   https://github.com/anomalyco/opencode/issues/29869

2. **#55699 [OPEN] 切换会话后滚动位置丢失（v2.0.29，Windows）**
   7 条评论、4 个 👍。长会话体验的高频痛点，回归稳定性问题。
   https://github.com/anomalyco/opencode/issues/55699

3. **#63912 [CLOSED] 2.0 自更新损坏程序，回退后仍不可用**
   6 条评论。升级链路故障直接导致程序不可用，属于安装/升级路径的高危问题。
   https://github.com/anomalyco/opencode/issues/63912

4. **#51395 [CLOSED] OpenCode Go 账号被封、客服无回应、封禁期间仍扣费**
   6 条评论、1 个 👍。涉及计费与账号合规，反映支持响应链条的问题。
   https://github.com/anomalyco/opencode/issues/51395

5. **#13393 [CLOSED] 实验性 “hashline” 编辑模式**
   6 条评论、**37 个 👍**，是今日点赞最高的需求。编辑模式创新在社区中有强烈呼声。
   https://github.com/anomalyco/opencode/issues/13393

6. **#63920 [OPEN] 空闲会话在服务重启后获得新 time_updated 并跳到列表顶部**
   5 条评论，标记为已复现。与会话排序机制直接相关，影响日常导航。
   https://github.com/anomalyco/opencode/issues/63920

7. **#63817 [CLOSED] Linux 上 opencode-pty 守护进程留下僵尸进程（2.3.0）**
   5 条评论。从 2.2.7 升级到 2.3.0 后出现，属于明确的版本回归。
   https://github.com/anomalyco/opencode/issues/63817

8. **#63323 [CLOSED] models.opencode.ai 不可达时 opencode-go 模型静默消失（DNS ENOTFOUND）**
   4 条评论。网络异常下模型选择器静默降级，缺少可感知的错误提示。
   https://github.com/anomalyco/opencode/issues/63323

9. **#63075 [OPEN] 让 deny 权限规则携带说明信息给模型**
   4 条评论。当前 deny 只返回固定字符串，模型无法获知原因或替代方案，影响 agent 自我纠错。
   https://github.com/anomalyco/opencode/issues/63075

10. **#63935 [OPEN] 仅 reasoning_effort 变化时约三分之一请求丢失提示词缓存（opencode-go / deepseek-v4.1-flash）**
    3 条评论。与已关闭的 #55156 相互印证，涉及成本与延迟，值得优先排查。
    https://github.com/anomalyco/opencode/issues/63935

## 4. 重要 PR 进展（10 条）

1. **#63942 [OPEN] fix(core): 恢复待处理的会话执行意图**
   修复进程在入队与写入之间崩溃后 prompt 卡死的问题，关联 #60596；此前 #60788 已关闭，本次为重新提交。
   https://github.com/anomalyco/opencode/pull/63942

2. **#63955 [OPEN] fix(ai): 为 Gemini 枚举与 const schema 推断缺失类型**
   解决 Gemini/Vertex 在参数属性缺少类型时拒绝函数 schema 的问题，关联 #63762。
   https://github.com/anomalyco/opencode/pull/63955

3. **#63936 [OPEN] feat(app): 新增会话大纲面板**
   在会话视图侧栏列出用户 prompt，支持搜索、时间戳与点击跳转，对应需求 #47993。同日 #63934 为同一功能的重复提交。
   https://github.com/anomalyco/opencode/pull/63936

4. **#63929 [OPEN] feat(opencode): 通过 Console 插件共享 Console 产物**
   属于 OpenCode Console 产物功能的客户端实现。
   https://github.com/anomalyco/opencode/pull/63929

5. **#63941 [OPEN] fix(app): 将拖入的文本插入输入框**
   此前拖放处理仅支持文件与工作区文件行，现支持跨应用拖入选中文本，修复 #63924。
   https://github.com/anomalyco/opencode/pull/63941

6. **#63926 [OPEN] fix(core): 对绝对插件路径从 package.json 解析版本**
   修复全局/系统级安装插件时的版本解析问题，关联 #54654。
   https://github.com/anomalyco/opencode/pull/63926

7. **#63923 [CLOSED] perf(app): 测量滚动历史的主线程开销**
   以 120 轮会话中往返滚动 4000 像素为基准，新增主线程占用指标。
   https://github.com/anomalyco/opencode/pull/63923

8. **#63957 [OPEN] chore(perf): 基准测试升级至 strobe 0.42.0**
   更新依赖与锁文件，HTML 报告可解释对比为何需要确认，测量口径不变。
   https://github.com/anomalyco/opencode/pull/63957

9. **#62549 [CLOSED] feat(plugin): 从 Effect 插件入口导出 Tool**
   `@opencode/plugin/effect` 此前导出所有 schema 但缺少 `Tool`，补齐后便于 Effect 插件复用，修复 #62367。
   https://github.com/anomalyco/opencode/pull/62549

10. **#62545 [CLOSED] fix(tui): 后台 shell 运行时保持会话标签忙碌态**
    修复后台 shell 仍在运行时标签页不显示加载动画的问题，修复 #62505。
    https://github.com/anomalyco/opencode/pull/62545

## 5. 功能需求趋势

- **会话与存储一致性**：`time_updated` 在服务重启、归档时被重写，子会话无法枚举/中止（#63298），空闲会话排序错乱（#63920、#63951）——会话生命周期管理是当前最集中的缺陷方向。
- **编辑模式创新**：hashline 编辑模式获 37 个 👍（#13393），显示社区对超越现有编辑体验的强烈兴趣。
- **UI 可导航性**：会话大纲（#47993 及其 PR）、滚动位置保持（#55699）、TUI 标签模型隔离（#54363）。
- **凭据与安全**：原生 secret 引用，支持 OS 凭据库或密钥管理器（#63867）。
- **模型能力适配**：LM Studio 的 reasoning 能力发现被丢弃（#63921）、Gemini schema 类型推断（#63955）。
- **权限语义化**：deny 规则向模型传递理由（#63075）。
- **平台覆盖**：Android 11 兼容性（#63791）、Computer Use/桌面控制工具（#20490）。

## 6. 开发者关注点

- **升级与自更新可靠性**：2.0 自更新损坏程序且无法手动修复（#63912），叠加 2.3.0 僵尸进程回归（#63817），削弱对自动升级的信任。
- **静默失败**：网络异常时 opencode-go 模型无声消失（#63323），缺乏可诊断的错误反馈。
- **推理参数与缓存耦合**：`reasoning_effort` 参与前缀缓存键，压缩摘要与主请求不一致造成大量未缓存 token（#55156、#63935），直接影响成本与响应速度。
- **支持与计费流程**：封号申诉无响应、封禁期间继续扣费（#51395）。
- **响应性能**：有用户反馈回答耗时长、菜单卡顿（#63304），并与滚动性能测量 PR 相呼应。
- **多客户端配置同步**：TUI 标签模型跟随其他标签与客户端（#54363），共享偏好的边界需要厘清。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-14

## 1. 今日速览

过去 24 小时无新版本发布，社区活动集中在模型适配与工具执行可靠性上。GitHub Copilot 的 Gemini 模型此前忽略 `reasoning_effort` 的问题已通过 PR #12110 修复并闭合。同时，多条涉及工具调用并发、中断后状态残留、MCP 传输层的问题被曝出，反映出工具执行链路仍是当前稳定性焦点。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#12019 [CLOSED] [prio:p0] github-copilot: Gemini models never get reasoning_effort**（10 条评论，本日讨论最热）
   `--thinking` 参数对 `github-copilot/gemini-4-argon`、`gemini-3.8-flash` 无效，原因是内置目录硬编码 `compat.supportsReasoningEffort: false`，且 `usage.reasoning_tokens` 被忽略。P0 级问题已闭合，并有对应 PR。
   https://github.com/earendil-works/pi/issues/12019

2. **#9986 [CLOSED] Aborting during tool execution leaves unanswered tool calls**
   中断批量工具执行后，中断点之后的工具调用没有结果返回，会话中出现悬空调用；已启动的调用正常返回。影响会话状态一致性。
   https://github.com/earendil-works/pi/issues/9986

3. **#10654 [OPEN] [bug, mcp] Transport is resolved before environment variable expansion in mcp.json**
   `mcp.json` 中 `"url": "${MY_VAR}"` 无法正确解析传输类型，需写成 `"http://${MY_VAR}"` 才生效。环境变量与传输解析顺序存在缺陷。
   https://github.com/earendil-works/pi/issues/10654

4. **#11950 [OPEN] [bug, prio:p0] Tool calls in one message run concurrently with bash**
   同一消息中 bash 与 read 并发启动，导致 read 在命令完成前读取尚未生成的构建日志或图像而报错。P0 级正确性问题，仍在处理中。
   https://github.com/earendil-works/pi/issues/11950

5. **#12148 [OPEN] [bug] Mistral Large 4 hangs when trying to use tools**
   使用工具调用的提示词时 Mistral Large 4 直接挂起（等待数分钟无响应）。新模型工具调用兼容性受阻。
   https://github.com/earendil-works/pi/issues/12148

6. **#12165 [CLOSED] [untriaged] searchTools() returns full tool descriptions — 36KB per call**
   实测 3 天会话中 `searchTools` 调用 73 次、结果约 950KB，占整条会话上下文约 25%。上下文膨胀的重要线索。
   https://github.com/earendil-works/pi/issues/12165

7. **#12133 [CLOSED] Windows: terminal left with mouse/Kitty input reporting enabled after exit**
   Windows Terminal 中退出后鼠标/键盘转义序列回显为乱码，终端状态未被正确复位。
   https://github.com/earendil-works/pi/issues/12133

8. **#11006 [OPEN] GitHub Copilot enterprise-enabled models stay hidden after restart**
   企业管理员新启用的模型在重启后仍不出现在模型选择器，因 OAuth 凭证的 `availableModelIds` 被缓存且未刷新。
   https://github.com/earendil-works/pi/issues/11006

9. **#12169 [CLOSED] openai-completions loses SSE error codes before retry classification**
   HTTP 200 SSE 响应体内含 `code: 503` 时未触发重试；隔离环境加本地 mock 端点复现为一次请求、零重试。
   https://github.com/earendil-works/pi/issues/12169

10. **#11763 [OPEN] [fix-available] MCP HTTP resumes response streams after tool calls cancelled/timeout**
    MCP Streamable HTTP 在调用方已收到 `AbortError`/`McpTimeoutError` 后仍继续恢复响应流。已有可用修复，待合入。
    https://github.com/earendil-works/pi/issues/11763

## 4. 重要 PR 进展（5 条，过去 24 小时仅更新以下）

1. **#12110 [CLOSED] [inprogress] fix(ai): send reasoning_effort and read reasoning tokens for GitHub Copilot**
   关闭 #12019。Gemini 与 Kimi 的 reasoning effort 支持改由 models.dev 提供，不再硬编码。
   https://github.com/earendil-works/pi/pull/12110

2. **#12163 [CLOSED] Add toolOutput.maxBytes and toolOutput.maxLines settings**
   新增 agent 设置项，默认 51200 字节 / 2000 行；bash 与 read 按此截断面向模型的输出，完整输出仍可读取。
   https://github.com/earendil-works/pi/pull/12163

3. **#12115 [OPEN] fix(coding-agent): report diagnostics that appear on session replacement**
   针对启动及 `/new`、`/resume`、`/fork`、导入、RPC 会话切换等重启时点遗漏诊断上报的问题，关联 #11264，补充 #11973。
   https://github.com/earendil-works/pi/pull/12115

4. **#12162 [CLOSED] feat(coder): add Docker template that clones this repo**
   在 `coder/` 下新增可克隆本仓库的 workspace 模板，code-server 打开 `~/pi`。
   https://github.com/earendil-works/pi/pull/12162

5. **#12151 [CLOSED] Sync**
   无描述内容的同步类 PR。
   https://github.com/earendil-works/pi/pull/12151

## 5. 功能需求趋势

- **模型适配与推理参数**：GitHub Copilot（Gemini/Kimi）、Mistral Large 4、Groq Qwen（`developer` 角色兼容）、llama.cpp 连接持久化。
- **工具执行正确性**：同消息工具并发顺序、中断后的调用补全、MCP HTTP 流生命周期。
- **上下文与输出控制**：`searchTools` 描述体积、`toolOutput` 截断配置。
- **终端/平台健壮性**：Windows 终端状态恢复、安装脚本识别冲突的 `pi` 命令（#12166）。
- **会话可观测性**：诊断上报、运行时实例标识与状态端点（#9626）、扩展的原子完成通知 API（#12073）。

## 6. 开发者关注点

- **工具链状态一致性**是最高频痛点：中断残留（#9986）、并发竞态（#11950）、取消后仍续流（#11763）三条不同路径指向同一类问题。
- **重试与错误语义**：SSE 错误码丢失（#12169）、对不可重试错误发起重试（#12153）影响稳定性与成本。
- **上下文成本**：`searchTools` 占用约 25% 上下文，开发者希望降低模型可见内容的冗余。
- **缓存刷新**：企业 Copilot 模型列表与 OAuth 缓存不更新，需显式刷新机制。
- **模型排序体验**：`/model` 建议按最新版本优先（#12122，已闭合）。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-14）

## 1. 今日速览

今天最核心的动态是 **1.0 Preview 事件驱动内核向 main 分支的分片合并**：Issue #17045 正在跟踪相关进展，多个 PR 围绕共享 agent loop 展开（#17264、#17218）。与此同时，CI 稳定性问题持续成为主要关注点：E2E 和 macOS nightly 频繁出现失败，多个 deflake Issue 与 PR #17219 同步推进。功能方面，Web Shell 迎来一批较大的改动，包括 Codex 风格托管 worktree 会话（#17228）和内存面板刷新（#17108）。

## 2. 版本发布

**v0.27.2-nightly.20261113.6f754be654**（nightly）
- `feat(managed-agent)`：将客户端文件系统注册到托管会话中（@wenshao，PR #16844）
- 另有 web-shell 测试相关变更（Release notes 中内容被截断）

> 提示：这是 nightly 构建，不建议用于生产环境。

## 3. 社区热点 Issues（10 条）

1. **#14724 主 CI 失败：Managed Agent 检查点未识别任何测试**（评论 364，创建于 2026-10-19）
   评论数远超其他 Issue，形成持续讨论的集中地；该问题已存在近一个月仍未关闭，说明 Managed Agent 的 CI 检查点存在结构性缺陷。
   https://github.com/QwenLM/qwen-code/issues/14724

2. **#17045 [P1] 跟踪：将 1.0 Preview loop kernel 逐面落地到 main**（评论 15）
   这是社区最重要的架构级跟踪 Issue，它将事件驱动内核作为单一 `query()` 入口，并会以分片方式逐步上线，直接影响后续所有核心开发。
   https://github.com/QwenLM/qwen-code/issues/17045

3. **#16371 [P1] nightly 故障检查与 E2E 通道持续报错（"rotating" flaky）**（评论 5）
   该 Issue 指出失败并非由单一回归导致，而是每晚都有不同的时序敏感测试触发失败；这可能导致按失败单独立项的问题处理方式失效，并掩盖真实回归。
   https://github.com/QwenLM/qwen-code/issues/16371

4. **#11680 主 CI 失败：E2E Tests 未识别测试**（评论 60，创建于 2026-09-11）
   近两个月未关闭的长尾 CI 问题；讨论热度高，反映 E2E 流程在测试结果上报前就发生崩溃。
   https://github.com/QwenLM/qwen-code/issues/11680

5. **#13078 每日依赖 CVE 审计失败**（评论 51）
   定时安全审计持续失败，可能存在新的高危漏洞；这属于安全类风险，需优先确认。
   https://github.com/QwenLM/qwen-code/issues/13078

6. **#17234 [P1] ACP agent-loop 一致性测试失败：kernelRounds 仅为 sharedRounds 一半（23/25 用例）**（已关闭）
   合并 main 的 PR 在两个无关分支上出现完全相同的失败集，属于 1.0 内核迁移引入的一致性回归；虽然已经关闭，但需要验证修复是否完整。
   https://github.com/QwenLM/qwen-code/issues/17234

7. **#16824 [P2] Qwen Code 反复出现相同拼写错误（长期上下文/Token 管理）**（评论 6）
   用户反馈即使多次清理重装后，模型仍会"确信"错误拼写；是面向真实用户侧、值得重视的模型行为问题。
   https://github.com/QwenLM/qwen-code/issues/16824

8. **#17038 [P2] CLI 在 headless Linux 上卡在登录验证状态**（评论 5，OAuth/Linux）
   类似 headless 服务端场景的 OAuth 回调无法自动完成，影响无头环境与远程登录体验。
   https://github.com/QwenLM/qwen-code/issues/17038

9. **#17247 [P3] managed-agent：外部工作区 profile 下公共子智能体委派被拒绝**
   在 `hosted-workspace-external-files/1` 下，委派打包子智能体（如 `maxcompute-coder`）始终被拒绝；这限制了企业级托管部署的能力。
   https://github.com/QwenLM/qwen-code/issues/17247

10. **#17225 [P3, blocked] 对齐文件夹信任读取边界并补充 daemon 正向覆盖**（安全/trusted-folders）
    承接 PR #17123 第三轮评审的三条建议，涉及 trust 边界这一安全敏感区域。
    https://github.com/QwenLM/qwen-code/issues/17225

> 其他值得一看的 Issues：#16219（E2E extensions-install 失败）、#17158 / #17262 / #17243 / #17217（CI Failure Patrol 触发的 deflake 系列）、#13603（Agent 标签页上下文窗口计算错误，已关闭）、#17173（DingTalk 适配器评审跟进）、#17250 关联的 PR 状态设计文档更新、#17078（设计文档中文翻译）。

## 4. 重要 PR 进展（10 条）

1. **#17264 `feat(serve)`：Hosted Harness 模型轮迁移到共享 agent loop**
   这是基于 #17248 评估结论的 model-round-only 迁移；通过 `experimental.unifiedAgentLoop` 的新 `hosted` 面（默认关闭）实现，是 1.0 内核逐步推进的关键部分。
   https://github.com/QwenLM/qwen-code/pull/17264

2. **#17218 `feat(acp)`：将 live 与只读 Agent Host 会话路由到共享 tool batch**
   同时从 core 移除 `SendMessageOptions.toolLoopGuardsByHost`，ACP batch 新增三个 host 输入，属于内核统一化的配套清理。
   https://github.com/QwenLM/qwen-code/pull/17218

3. **#17228 `feat(web-shell)`：Codex 风格托管 worktree 会话（默认开启）**
   在受信任的 Git 工作区中，新会话默认创建隔离 worktree，采用 lazy 创建并支持 branch 与 handoff；这改变了 Web Shell 的默认行为，需要关注。
   https://github.com/QwenLM/qwen-code/pull/17228

4. **#17219 `test(ci)`：稳定 macOS nightly CI 通道**
   不改动产品行为，通过 GNU-date 能力探测来控制依赖宿主环境的测试，并对齐 flaky 套件的等待预算。
   https://github.com/QwenLM/qwen-code/pull/17219

5. **#17108 `fix(web-shell)`：内存面板刷新后重试加载内容**
   在 Memory 面板中增加 Refresh 控件，可重新加载文件列表，并重试读取选中文件，无需关闭面板；读取失败或截断时会保留编辑状态。
   https://github.com/QwenLM/qwen-code/pull/17108

6. **#16511 `fix(core)`：处理被终止的 CLI 遗留的后台 shell 状态文件**
   会话被接管后，孤儿后台 shell 状态可从 `running` 转为 `unknown`，同时保留其他字段，避免误导性状态。
   https://github.com/QwenLM/qwen-code/pull/16511

7. **#15780 `fix(permissions)`：对格式错误的权限规则进行报告，而不是静默丢弃**
   括号不平衡的规则当前会被解析为不匹配任何内容的无效规则；本 PR 会报告哪份列表持有该规则，提升权限配置可观测性。
   https://github.com/QwenLM/qwen-code/pull/15780

8. **#15358 `fix(cli)`：在 JSON 结果中报告最大会话轮数，而非重放上一轮回答**
   修复 `-p` 模式下达到轮数上限却返回成功并重放上次回答的问题，改为返回与 `-p` 一致的错误。
   https://github.com/QwenLM/qwen-code/pull/15358

9. **#16338 `feat(desktop)`：macOS 桌面端发送回合通知**
   打包的 macOS 桌面版中，Web Shell 通过桌面宿主发布原生系统通知（Web Notifications 不可用时），改善长任务的完成提醒。
   https://github.com/QwenLM/qwen-code/pull/16338

10. **#17212 `fix(cli)`：Windows 独立更新时隔离 PowerShell**
    更新提取子进程不再继承 PowerShell 7 模块路径，使 Windows PowerShell 5.1 能解析兼容的 Archive 模块，同时不改动父环境。
    https://github.com/QwenLM/qwen-code/pull/17212

> 其他：#17250（PR watch 设计文档状态更新）、#16862（release Docker 集成套件失败重试一次，autofix/needs-human）、#17025（修复 OpenTUI 流式 markdown 抖动）、#17265（memory-manager 套件独立输出根目录，已关闭）、#17185（verify-pr 要求边界声明）。

## 5. 功能需求趋势

- **统一 Agent Loop 内核（1.0 Preview）**：从 #17045 的跟踪 Issue，到 #17264、#17218 的一系列迁移 PR，整体主线是将事件驱动内核逐面落地，并以 feature flag 渐进开放（`experimental.unifiedAgentLoop`）。
- **Managed Agent 与企业托管能力**：客户端文件系统注册（#16844）、托管会话工作区 profile、DingTalk 适配器（#17173）、子智能体委派（#17247）等，均指向托管部署场景。
- **Web Shell / 桌面端体验**：托管 worktree 会话（#17228）、内存面板刷新（#17108）、macOS 原生通知（#16338），Web Shell 正朝独立 IDE 形态演进。
- **CI/测试基础设施**：deflake 体系（多 Issue 由 CI Failure Patrol 自动触发）、nightly 稳定性（#17219、#16371）、Docker 集成重试（#16862）；测试基础设施已成为持续性的主要投入方向。
- **安全与信任边界**：依赖 CVE 审计（#13078）、文件夹信任读取边界（#17225）、权限规则错误可见性（#15780）。
- **文档本地化**：按 `AGENTS.md` 双语规则补齐设计文档中文版（#17078）。

## 6. 开发者关注点

- **CI 失败长尾明显**：评论数最高的三条（#14724、#11680、#13078）全部是自动化失败追踪 Issue，分别涉及 CI 失败、E2E 失败和依赖审计失败，且评论数在 51–364 之间；这说明失败通知机制本身产生了大量评论，而稳定修复的进度落后。尤其 #16371 指出"每晚不同测试出错"，因此需要治理整体 flaky 问题，而不是逐个修复。
- **flaky 判定流程被广泛使用**：CI Failure Patrol 会自动触发 rerun，并创建 deflake Issue，同时明确"确定性失败即真实 bug，不要 stabilize"，这一流程已覆盖多个测试文件。
- **headless / 远程环境体验**：Linux 无头环境下 OAuth 登录卡住（#17038）、Windows PowerShell 模块冲突（#17212），跨平台与环境隔离问题是近期的高频修复主题。
- **模型行为可信度**：用户对"反复拼写错误且重装无效"（#16824）的反馈，指向长期上下文与 token 管理的行为一致性问题。
- **文档与评审跟进**：多处"deferred review findings"（#12313、#12563）与设计文档状态过期（#17250）表明，评审遗留事项的闭环管理需要持续关注。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-14

> 数据源：github.com/Hmbown/DeepSeek-TUI（以下条目链接均来自供应材料中给出的 Issue/PR 编号与标题）

## 1. 今日速览

过去 24 小时无新版本发布，社区动态集中在一个已关闭的关键 TUI 缺陷（#7232，等待发版修复）和 13 条 PR 上。PR 中仅有 4 条涉及实质工程内容：新增服务商适配、两处核心解析器修复，以及 tokio 等依赖升级；其余 9 条为 dependabot 例行依赖与 CI Action 版本更新。

## 2. 版本发布

过去 24 小时无新版本发布（用户材料中“最新 Releases”为空）。

## 3. 社区热点 Issues

过去 24 小时内仅 1 条 Issue 有更新。材料仅提供该 1 条，为不虚构内容，不做补足；其余条目列于此并标注证据边界：

1. **#7232 [CLOSED] 移除工作区级 sub-agent 协调 flock（macOS / v0.10.3）** — 作者 Hmbown，创建 2026-11-06，更新 2026-11-14，评论 1，👍 0。
   - **为什么重要**：这是一个有明确版本上下文（v0.10.3）和跨模块标签（area:tui、area:core、area:state）的缺陷。材料摘要显示：一个工作区内每个新 TUI 会话在 sub-agent 侧栏刷新时都会遇到同一个问题；标题结论是“一个陈旧会话会让所有新会话只读，并反复出现 ‘Failed to clean up sub-agents’”。协调锁被工作区级共享，因此单个异常会话就会污染整个工作区。
   - **社区反应**：材料显示评论数为 1、点赞为 0，互动量低。该 Issue 有 status:awaiting-release 标签，说明修复已进入等待发版流程，社区热度低可能与此相关。
   - 链接：codewhale-hq/Codewhale Issue #7232

> 说明：材料只含 1 条 Issue，无法按要求选出 10 个。此处不做补足。

## 4. 重要 PR 进展

按工程价值排序；以下 4 条为实质变更，其余 9 条为 dependabot 例行升级。

1. **#7340 [OPEN][enhancement] feat(providers): 新增 Synap provider 描述符** — 作者 weare-linkrra（contributor:external），创建/更新 2026-11-14。
   - 材料内容：通过 Codewhale 现有 compatible-host descriptor 路径接入 Synap；OpenAI-compatible Chat Completions 端点；`GET /v1/models` 作为模型 id 与 token 价格的可信来源；提及 `SYNAP_API_...` 环境变量（材料截断）。
   - 意义：扩充兼容服务商接入面，外部贡献者参与；价格依赖运行时模型发现而非硬编码。
   - 链接：codewhale-hq/Codewhale PR #7340
2. **#7342 [OPEN][bug] fix(core): 保持 CLI 参数值内的 `key=value` 为字面量** — 作者 Ricardo-M-L（external），2026-11-14。
   - 材料内容：fallback parser 的第二遍 `key=value` 扫描会重复解析已被 `--argument` 消费的文本，导致 `--command "MODE=dev node app.js"` 凭空多出 `MODE` 工具参数；文件内容同样受影响（材料截断）。这是工具参数构造正确性问题。
   - 链接：codewhale-hq/Codewhale PR #7342
3. **#7341 [OPEN][bug] fix(core): 保留多行 XML 工具参数** — 作者 Ricardo-M-L（external），2026-11-14。
   - 材料内容：XML fallback 工具调用会静默丢失含换行的参数值；模型生成的 `write_file` 多行内容在引擎执行前变成空参数对象；问题在外层 invoke 匹配环节（材料截断）。对代码写入类工具影响直接。
   - 链接：codewhale-hq/Codewhale PR #7341
4. **#7334 [OPEN] build(deps): tokio 1.53.3 → 1.54.1** — dependabot[bot]，创建 2026-11-13，更新 2026-11-14。异步运行时核心依赖升级，为 13 条 PR 中唯一在 11-14 仍有更新的依赖 PR。
   - 链接：codewhale-hq/Codewhale PR #7334

其余依赖 / CI 例行 PR（材料均标注 OPEN、dependabot[bot]）：
5. #7339 flate2 1.1.10 → 1.1.11（2026-11-13 创建，11-14 更新）— codewhale-hq/Codewhale PR #7339
6. #7337 jsonschema 0.57.0 → 0.61.1（跨度较大的主版本区间）— PR #7337
7. #7336 lru 0.18.5 → 0.19.0（area:core，0.x 次版本升级）— PR #7336
8. #7338 globset 0.4.20 → 0.4.21 — PR #7338
9. #7335 actions/setup-java 6.1.0 → 6.2.0（area:ci）+ #7333 docker/login-action 4.7.0 → 4.8.0 + #7332 softprops/action-gh-release 3.0.3 → 3.0.4 — PR #7335 / #7333 / #7332
10. #7331 / #7330 内部仓库与 publish action 引用从 b0b2b9a 升至 43c87b4（area:ci）— PR #7331 / #7330
> 说明：材料仅含 13 条 PR，其中实质变更 4 条；第 5–10 条为合并归类，未做材料之外的推断。

## 5. 功能需求趋势

基于材料中的标签与内容，可提炼：

- **TUI 核心稳定性与状态一致性**（area:tui / area:core / area:state）：#7232 显示跨会话共享状态（工作区级锁）会造成故障扩散，是当前唯一有更新的高频关注面。
- **工具调用解析健壮性**：两处 core 修复（#7341 多行 XML、#7342 参数内 `key=value`）共同指向“模型生成的工具参数被静默改写或丢失”，属高优先级正确性方向。
- **服务商 / 模型接入扩展**（area:localization、area:web）：#7340 走 OpenAI-compatible descriptor 路径，并依赖 `/v1/models` 动态发现模型与价格，反映社区倾向“运行时发现而非硬编码”。
- **本地化**：#7340 带 area:localization 标签，但材料未说明具体本地化内容，不做延伸。
- **依赖与 CI 维护**：9 条 PR 均属 cleanup / dependencies / area:ci，说明近期维护节奏以例行升级为主。
- 材料中未出现关于 IDE 集成、性能优化或新模型训练侧支持的 Issue/PR，故不作此类判断。

## 6. 开发者关注点

- **故障隔离**：工作区级 flock 让单个陈旧会话拖垮所有新会话（只读 + 重复报错），开发者诉求是移除该全局协调锁（#7232）。
- **参数保真**：CLI 与 XML 两条 fallback 解析路径都会篡改或丢弃工具参数（#7342、#7341），外部贡献者连续提交两个修复，说明这是影响日常使用的真实痛点。
- **发版节奏关**：#7232 已 CLOSED 但带 status:awaiting-release，修复落地仍取决于下一次发版；而过去 24 小时无 Release，用户侧实际获得感存在延迟。
- **外部贡献活跃**：两个修复与一个 provider 新增均来自 contributor:external，说明兼容服务商接入与 core 解析器是外部开发者最容易切入的模块。

---
*注：本期数据窗口内仅 1 条 Issue、13 条 PR，且 Releases 为空；第 3、4 节已按材料实际数量呈现，未做补足或推测。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*