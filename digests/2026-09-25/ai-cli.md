# AI CLI 工具社区动态日报 2026-09-25

> 生成时间: 2026-09-25 14:10 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-09-25）

## 1. 生态全景

当前 AI CLI 工具生态已从"能否用"进入"是否可信、可控、可负担"的深水区：多数工具今日焦点是稳定性回归、认证/会话失效与配额误判，而非新功能。模型矩阵快速扩张（GPT-6 Sol/Luna、Claude Opus 5.5、Gemini 3.8、DeepSeek V4 系列）正把"模型参数边界适配"变成日常维护成本。同时，多代理编排、记忆系统、MCP/插件集成成为各工具共同的基础设施战场，但成熟度参差不齐。值得警惕的是，多个工具出现"修复后回归"，社区对版本间质量波动的容忍度正在下降。

## 2. 各工具活跃度对比

| 工具 | Release | Issues（今日/热点） | PR（今日） | 社区状态 |
|---|---|---|---|---|
| **Claude Code** | v2.1.282 | 多条高热，最高 196 评论 / 237 赞 | 8（均来自同一作者） | 极活跃，记忆/桌面端问题集中 |
| **OpenAI Codex** | rust-v0.157.0 正式 + 多个 0.158.0-alpha | Windows 问题占绝对多数 | 10（均为 copyberry[bot]） | 极活跃，Windows 稳定性痛点突出 |
| **Gemini CLI** | v0.62.0-nightly | P1/P2 活跃，子代理/浏览器代理 | 10（4 个同源并发竞态 PR） | 活跃，并发与配置一致性问题 |
| **GitHub Copilot CLI** | v1.0.89-2 / -3 | 50 条更新，20 条高评论 | 无更新 | 中等，认证/MCP 为焦点 |
| **Kimi Code CLI** | 无 | 无活动 | 无活动 | 静默 |
| **OpenCode** | 无 | 热点集中在额度/子代理卡死 | 10（模型边界修复为主） | 活跃，配额逻辑痛点显著 |
| **Pi** | 无 | 回归+成本计算双主线 | 10（核心开发者提交重量级特性） | 高度活跃，triage 引不满 |
| **Qwen Code** | v0.24.5（正式） | 架构提案 20 评论居首 | 10（Managed Agent 架构密集落地） | 高度活跃，架构重构中 |
| **DeepSeek TUI** | 无 | 42 条更新，创始人审计类密集 | 50 条更新 | 高度活跃，0.10.0 回归修复期 |

> 注：数据均来自各自摘要，统计口径不完全统一（部分工具标注"过去 24 小时更新数"，部分仅列热点条目）。

## 3. 共同关注的功能方向

**① 多代理/子代理编排与可靠性（覆盖最广）**
- Codex：spawn 阶段耗时指标、子代理卡死（#38385）
- Gemini CLI：#22323 MAX_TURNS 误报成功、#21409 generalist agent 挂起、#8097 后台协调缺口
- Qwen Code：#12380 双路径架构、#8097 后台 Agent 协调失败、#8586 activeWork 恢复
- OpenCode：#11865 子代理卡死无超时/重试
- Claude Code：子代理记忆结论被当事实传播（#97139）
- 共同诉求：**生命周期管理 + 状态语义正确性 + 兜底超时/重试**

**② 记忆系统可信度与可控性**
- Claude Code：#91188 阈值可配置、#97139 记忆污染、#97128 未持久化
- Gemini CLI：#26525 先外发后脱敏、#26522 无限重试
- DeepSeek TUI：#6050 可插拔记忆后端（causal-memory/mem0）
- 共同诉求：**从"能用"到"可信、可控、可审计"**

**③ 沙箱与权限模型**
- Codex：deny-read ACL、PID namespace、Guardian 审批
- Gemini CLI：#29491 CI 写权限检查失效、#22672 危险 shell 命令
- Claude Code：#44180 Linux Unix socket 白名单、#96808 破坏性命令
- Qwen Code：#12683 PreToolUse hook deny 被静默覆盖
- 共同诉求：**权限语义确定性、拒绝优先**

**④ 模型版本适配与参数边界**
- OpenCode：#51338/#51302 Opus 5.5 thinking 不可禁用、#51301 GPT-6 reasoning effort、#51300 Gemini TTS 格式变更
- Pi：#9714 Azure Foundry、#9980 成本计算偏差
- 共同诉求：**新模型接入的兼容层维护成本上升**

**⑤ 认证与会话持久性**
- Copilot CLI：#4929 令牌停止刷新、#4905 桌面会话死亡
- Codex：#39162 macOS 打开历史会话导致登出（70 评论）
- OpenCode：#11830 多账号 OAuth（23 赞成）

**⑥ 平台一致性（Windows/WSL/Linux）**
- Codex：Windows 控制台窗口闪烁、0xC000013A、ACL 失败构成最集中问题簇
- Qwen Code：#11303 ConPTY 进程泄漏、#12687 Windows 更新失败
- Copilot CLI：#3534 WSL2 ARM64 剪贴板

## 4. 差异化定位分析

| 工具 | 功能侧重 | 技术路线 | 目标用户 |
|---|---|---|---|
| **Claude Code** | 桌面端体验、记忆系统、hooks 插件机制 | 闭源，mod/hook 插件架构 | 专业开发者、长期项目 |
| **OpenAI Codex** | 新模型矩阵、多智能体、沙箱/Guardian 安全层 | Rust 重写（rust-v*），云端+本地沙箱 | 企业级、跨端协同用户 |
| **Gemini CLI** | 子代理编排、AST 代码理解、Auto Memory | 开源，TS core + 扩展体系 | 开源社区、IDE 集成用户 |
| **GitHub Copilot CLI** | MCP 生态、企业模型、IDE 内嵌 | 闭源，深度绑定 GitHub/Copilot 订阅 | 企业/私有环境、GitHub 用户 |
| **OpenCode** | 多模型聚合、多前端自由组合 | 开源，前端/后端解耦 | 模型尝鲜者、自定义端点用户 |
| **Pi** | 本地/自托管后端、RPC 协议、成本透明 | 开源，Bun/TS，mitsuhiko 等核心开发者驱动 | 高级用户、自托管部署者 |
| **Qwen Code** | Managed Agent 架构、Hosted Runtime | 开源，TS→可插拔引擎重构 | 企业部署、多平台开发者 |
| **DeepSeek TUI** | 产品化体验、宠物/活动可视化 | 开源 Rust，TUI+GPUI 多前端 | 终端重度用户、0.10.0 新用户 |

**关键差异点**：
- **开源 vs 闭源**：Gemini CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI 全开源；Claude Code、Codex、Copilot CLI 闭源（但接受 Issue/部分 PR）。
- **本地化取向**：Pi 是最明确的自托管友好派（#6933 默认禁用 undici idle timeout）；Codex/Copilot CLI 更偏云端协同。
- **架构演进**：Qwen Code 正主动从"单 TS 循环"重构为可插拔引擎+持久会话，是当前架构动作最激进的工具。

## 5. 社区热度与成熟度

**社区热度排序（综合评论数、点赞、更新量）**：
1. **Claude Code / OpenAI Codex** — 单条 Issue 最高 196 评论 / 237 赞量级，热度绝对领先
2. **Qwen Code / DeepSeek TUI / Pi** — 42–50 条/日的更新量，核心开发者高度活跃
3. **Gemini CLI / OpenCode** — 稳定高活跃，多代理与配额问题驱动
4. **GitHub Copilot CLI** — 中等活跃，Issues 集中但 PR 停更
5. **Kimi Code CLI** — 静默，无活动

**成熟度判断**：
- **成熟期**：Claude Code、OpenAI Codex、Copilot CLI（有稳定发布节奏，但回归频繁暴露质量管控压力）
- **快速迭代期**：Gemini CLI（夜间版驱动）、Qwen Code（架构重构）、OpenCode（模型适配驱动）、Pi（0.87.x 稳定期修补）
- **整合修复期**：DeepSeek TUI（0.10.0 回归密集，测试门禁在干净 main 上变红）

**值得注意的质量信号**：
- Codex 多个缺陷属"修复后回归"，社区容忍度下降
- Pi 出现"自动关闭"引发的不满（#10008），triage 流程信任度承压
- Gemini CLI 出现低质量/自动生成 PR 噪声（#29271/#29272/#29274）

## 6. 值得关注的趋势信号

**① "稳定性 > 新特性"已成为共识底线**
多个工具的高评论 Issue 集中在重启失败、会话挂起、认证失效，且多数"重装重登"后仍复现。对开发者而言：**评估 AI CLI 时应把长会话可靠性与平台一致性放在功能清单之前**。

**② 记忆系统正从"卖点"变成"风险面"**
Claude Code 的记忆污染（结论被当事实传给子代理）、Gemini CLI 的"先外发后脱敏"，说明记忆机制若不可控会**放大而非纠正错误**。这是对"长期上下文"宣传的重要反证，值得在生产工作流中谨慎引入。

**③ 多代理编排缺乏兜底机制是普遍短板**
OpenCode 子代理卡死无超时、Qwen Code 后台 Agent 协调失败、Codex 子代理卡死——**"无超时/无重试/无状态语义"是当前多代理落地的共同软肋**。

**④ 模型矩阵扩张正推高维护成本**
OpenCode 单日 PR 覆盖 Opus 5.5 thinking 约束、GPT-6 reasoning effort 默认值、Gemini TTS 音频格式变更。对开发者而言：**多模型工具的价值越来越取决于其适配层的更新速度与正确性**。

**⑤ 配额/计费透明度成为信任基础设施**
OpenCode 免费档误判、限额拖垮全模型；Pi 成本偏差 2–3 倍、工具集变更触发重复计费。**"为什么花了这么多"正在成为与"能不能跑"同等重要的诉求**。

**⑥ 安全边界的确定性诉求上升**
Claude Code 破坏性命令无视用户意图（#96808）、Gemini CLI CI 写权限失效、Qwen Code hook deny 被静默覆盖——**权限系统出现"看似约束实则失效"的情况，比显式报错更危险**。

**⑦ 本地/自托管后端支持是明确分水岭**
Pi 对 vLLM/LM Studio/llama.cpp/Ollama 的专项适配（#6933），与云端派工具形成清晰路线差异。**数据合规敏感或成本敏感团队应优先关注此维度**。

---

*报告基于 2026-09-25 各工具社区动态摘要生成，所有数据与判断均源自所提供材料；各工具统计口径存在差异，跨工具比较时请注意。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，截止 2026-09-25。注意：PR 列表的评论数字段均为 `undefined`，排行依据来源数据的排序位次与更新活跃度；Issues 的评论数、👍 数据完整。

---

## 1. 热门 Skills 排行（按 PR 展示位次与活跃度）

| 排名 | Skill (PR) | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估修复** #1298 | 隔离 trigger evals，修复 Windows 下 `select()` 失败与运行时失败被误判为「未触发」 | 评估器的可靠性与跨平台行为 | OPEN（2026-06-10 创建，09-16 更新） |
| 2 | **proofcore-contract-auditor** #1771 | Web3 智能合约静态分析（Solidity/Rust），并将审计证明锚定到 TON 区块链 | 加密审计证明的链上锚定 | OPEN（2026-09-15） |
| 3 | **mcp-builder 修复** #1742 | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名与自定义 HTTP headers 配置 | 修复 Issue #1668，MCP SDK 升级兼容 | OPEN（关联 Issue #1390 亦反映该模块评估失败） |
| 4 | **docx 相关修复** #1792 / #1790 / #1734 / #541 | LibreOffice 超时误报成功、缺失 `document.xml.rels`、孤立批注检测、tracked change `w:id` 与书签冲突 | DOCX 写入的健壮性与文档损坏问题 | OPEN（多个独立提交，作者含 TINGyu123644、rohitjain25、Lubrsy706） |
| 5 | **pyxel（复古游戏开发）** #525 | 用 Python 创建、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查 | 长期活跃的老 PR | OPEN（2026-03-05 创建，09-22 更新） |
| 6 | **document-typography** #514 | 生成文档的排版质量控制：孤词换行、寡行标题、编号错位 | 面向所有文档类 Skill 的通用质量问题 | OPEN（2026-03-04） |
| 7 | **scnet-hpc** #1615 | 通过 profile 化 SSH 与 Slurm 工作流操作 SCNet HPC 集群 | 集群作业提交与资源/模块配置 | OPEN（2026-08-20） |
| 8 | **AWT (AI Watch Tester)** #822 | 赋予 Claude 视觉与浏览器控制能力，运行 E2E 测试 | AI 驱动的端到端测试 | OPEN（2026-03-31 创建，09-19 更新） |

其他值得关注的提交：`odt` #486、`md2video-audio` #1703、`testing-patterns` #723、`blast-radius` #1776。

---

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界（最高热度）**：Issue #492（43 评论）指出社区 Skill 以 `anthropic/` 命名空间分发，存在冒充官方 Skill、诱导用户授予高权限的风险。相关：Issue #1175 关注 SharePoint 文档处理中的安全与上下文窗口问题。
- **组织级分发与协作**：Issue #228（16 评论，👍8）希望 Claude.ai 支持组织内 Skill 共享库，替代「下载 .skill → Slack 传文件 → 手动上传」的流程。
- **评估/测试链路可靠性**：Issue #556（12 评论，👍7）报告 `run_eval.py` 在所有查询上触发率为 0%；Issue #1390 报告 `mcp-builder` 的 `evaluation.py` 对任意真实 MCP 服务器都报 0/N 并伪造工具错误。
- **上下文窗口治理**：Issue #1487 指出 `claude-api` skill 单次工具调用即注入约 156k tokens，直接耗尽上下文。
- **Skill 质量与最佳实践**：Issue #202（已关闭）要求 skill-creator 从「教学文档」转向可执行的指令式写法；PR #83 则提出 `skill-quality-analyzer` 与 `skill-security-analyzer` 两个元 Skill。
- **平台互操作**：Issue #16 提议将 Skills 以 MCP 形式暴露；Issue #29 询问如何在 AWS Bedrock 上使用 Skills。
- **插件内容重复**：Issue #189（👍9）指出 `document-skills` 与 `example-skills` 安装相同内容导致重复。

---

## 3. 高潜力待合并 Skills

以下 PR 评论/更新活跃且长期维护，落地概率较高（均为 OPEN）：

- **pyxel** #525 — 2026-03 创建，09-22 仍在更新，跨半年持续打磨。https://github.com/anthropics/skills/pull/525
- **AWT (AI Watch Tester)** #822 — 09-19 更新，AI + 浏览器 E2E 测试方向需求明确。https://github.com/anthropics/skills/pull/822
- **skill-creator 修复** #1298 — 09-16 更新，与 Issue #556 的 0% 触发率问题直接呼应。https://github.com/anthropics/skills/pull/1298
- **mcp-builder 修复** #1742 — 09-19 更新，修复 #1668，配合 Issue #1390 的评估失败投诉。https://github.com/anthropics/skills/pull/1742
- **docx 系列修复** #1792 / #1790 / #1734 — 均更新至 09-19～09-25，集中在同一 Skill 的可靠性问题。https://github.com/anthropics/skills/pull/1792
- **md2video-audio** #1703 — 09-15 更新，Markdown 直出带配音 MP4。https://github.com/anthropics/skills/pull/1703
- **notion-spec-to-implementation / quantitative-resume-auditor** #1245 — 09-24 更新。https://github.com/anthropics/skills/pull/1245

---

## 4. Skills 生态洞察

**社区最集中的诉求是「可信与可用」**：一方面要求解决安全与命名空间冒用（#492）、重复安装（#189）等信任问题，另一方面大量活跃 PR 都集中在修复评估器失效（#556/#1390）、上下文爆炸（#1487）、文档损坏（#1790/#1792）等「Skill 本身能不能稳定工作」的基础性缺陷——即从「堆功能」转向「把质量、评估与安全边界做扎实」。

---

*说明：热门排行依据来源数据中 PR 的展示顺序与更新时间；由于 PR 评论数在原始数据中为 `undefined`，本报告未虚构具体评论数值。*

---

# Claude Code 社区动态日报（2026-09-25）

## 今日速览

- 发布 **v2.1.282**，新增 `maxProseWidth` 排版设置，并对设置文件中被忽略的遥测变量给出启动提示与 `/status`、`claude doctor` 诊断入口。
- Windows 桌面端桥接（device bridge）出现多起连接握手/超时故障，两个当日提交的高热 Issue 在短时间内获得大量讨论后被关闭。
- 记忆与持久化成为当日焦点：多条新 Issue 反映模型将记忆中的未验证结论当作事实传递给子代理，以及重要工作成果未被写入持久化记忆目录。

## 版本发布

### v2.1.282

- 新增 `maxProseWidth` 设置：在宽终端中限制 Claude 正文的最大宽度，表格与代码块仍保持全宽显示，改善长文本可读性。
- 新增启动提示，以及在 `/status` 和 `claude doctor` 中列出项目设置文件里被忽略的遥测变量，便于排查配置未生效问题。

链接: https://github.com/anthropics/claude-code/releases

## 社区热点 Issues

1. **#42776 [OPEN] Windows Desktop 孤儿进程文件锁导致无法重启**
   长期存在的破坏性 bug，196 条评论、96 个赞，是当前讨论量最高的 Issue；用户反复反馈重启后进程残留导致应用无法拉起，至今未解决。
   链接: https://github.com/anthropics/claude-code/issues/42776

2. **#30154 [OPEN] 桌面端多窗口支持**
   237 个赞，反映社区对桌面端单窗口 + 侧边栏会话管理模式的不满，多会话并行工作流需求强烈。
   链接: https://github.com/anthropics/claude-code/issues/30154

3. **#91188 [OPEN] 让 MEMORY.md 自动记忆压缩提醒阈值可配置**
   54 条评论，指向自动记忆机制中硬编码阈值带来的干扰，属于记忆系统可配置性诉求。
   链接: https://github.com/anthropics/claude-code/issues/91188

4. **#96911 [CLOSED] Windows 桌面端设备桥接握手约 18 分钟无响应**
   当日新报即获 11 条评论，问题在重启和应用升级后仍存在，随后自行恢复，指向桥接服务侧不稳定。
   链接: https://github.com/anthropics/claude-code/issues/96911

5. **#96918 [CLOSED] Windows 桌面端关联电脑卡在"休眠或应用已关闭"，云会话与定时任务失败**
   与上条同日出现，涉及 area:cowork / area:routines，反映桌面桥接与云端会话联动的系统性风险。
   链接: https://github.com/anthropics/claude-code/issues/96918

6. **#97117 [OPEN] Opus 5.5 相比 Opus 4.6 出现严重范围蔓延与任务聚焦退化**
   在长期项目中途切换模型后表现明显退化，属于高优先级模型质量问题，值得关注后续官方回应。
   链接: https://github.com/anthropics/claude-code/issues/97117

7. **#96808 [OPEN] 用户明确表示手动执行的情况下 Claude Code 仍执行破坏性命令**
   带 data-loss 标签，涉及 Opus 4.8（1M 上下文），属于安全与信任层面的严重事件报告。
   链接: https://github.com/anthropics/claude-code/issues/96808

8. **#97139 [OPEN] 模型将记忆中未经验证的泛化结论作为事实传给子代理**
   记忆正确性问题：模型基于记忆笔记向审查子代理断言协议级 HTTP 状态规则，被 botocore 模型证伪，最终由子代理纠正。
   链接: https://github.com/anthropics/claude-code/issues/97139

9. **#97128 [OPEN] 待办修复与审查发现未被跟踪，持久工作只留在临时目录**
   数百条代码库审查发现未写入可用的持久记忆目录，暴露记忆持久化在实际工作流中的失效。
   链接: https://github.com/anthropics/claude-code/issues/97128

10. **#88134 [OPEN] 子代理结果被安全层标记为指令投毒，示例指向 .env 外泄**
    涉及 area:security 与 area:agents，是代理安全边界的重要案例。
    链接: https://github.com/anthropics/claude-code/issues/88134

其他值得留意：#44180（Linux bwrap/seccomp 缺少 allowUnixSockets 等价的 Unix socket 白名单配置，16 赞）、#89842（macOS Silicon 长时会话中 Bun 运行时 Bus error 崩溃）、#95450（云定时任务静默失败、长时间 PENDING 或重复触发）、#97141（Windsurf 中 IDE 扩展自动安装导致版本回退 2.1.281 → 2.1.89）。

## 重要 PR 进展

今日更新的 8 条 PR 全部来自同一作者 poteat，多数集中在 `diff`、`telemetry`、`agents-md` 三个 mod 与 hooks 机制上。

1. **#96953 [OPEN] diff：focus hook 需同时响应引擎在元素上标记的名称**
   修复插件注册名与自绘元素名不一致导致的匹配失败。
   链接: https://github.com/anthropics/claude-code/pull/96953

2. **#96930 [CLOSED] telemetry / agents-md：测试插件按名称挂钩并调用采集器流**
   仅测试改动，不触及任何 `hooks/` 目录下的实现。
   链接: https://github.com/anthropics/claude-code/pull/96930

3. **#96917 [CLOSED] telemetry：将 log 与 mark 改为事件 hook，仅在引擎缺少对应名词处新增**
   `$.telemetry.log` 与 `$.telemetry.mark` 的行为迁移为 `telemetry.log`、`telemetry.mark` 两个 hook。
   链接: https://github.com/anthropics/claude-code/pull/96917

4. **#96364 [CLOSED] agents-md：自动分页读取的嵌套 AGENTS.md 不再计为已投递**
   修正超过 Read 工具 token 上限被分页时仍被视为完整投递的问题。
   链接: https://github.com/anthropics/claude-code/pull/96364

5. **#96363 [CLOSED] diff：传入 --no-color 避免强制 git 颜色清空 diff 内容**
   解决仓库或用户 git config 中 `color.ui=always` / `color.diff=always` 导致 diff 主体被 ANSI 转义污染。
   链接: https://github.com/anthropics/claude-code/pull/96363

6. **#96487 [CLOSED] telemetry：行数据携带引擎版本、基础版本与构建时间**
   通过 `$.session.version()` 补全外部构建缺失的版本字段（2.1.281 起可用）。
   链接: https://github.com/anthropics/claude-code/pull/96487

7. **#95423 [CLOSED] diff：工具判定为只读的 shell 命令不再触发重新获取**
   避免面板在 `ls`、`git status`、`cat`、grep 等只读命令后无谓刷新 diff。
   链接: https://github.com/anthropics/claude-code/pull/95423

8. **#96570 [CLOSED] diff：command.run hook 以引擎扫描可读的字面量命名命令**
   修复 hook 匹配使用常量名导致引擎无法从 hooks 模块中识别 slash 命令的问题。
   链接: https://github.com/anthropics/claude-code/pull/96570

## 功能需求趋势

- **桌面端与多窗口工作流**：多窗口支持（#30154，237 赞）是呼声最高的增强需求，可与 Windows 端一系列桥接、重启故障对照，桌面端体验是当前短板集中区。
- **记忆系统可控性与可靠性**：#91188（压缩阈值可配置）、#97139（记忆结论被当作事实）、#97128（发现未持久化）共同指向记忆从"能用"走向"可信、可控"的需求。
- **跨平台能力对齐**：#44180 要求 Linux 沙箱补齐 macOS 上已有的 Unix socket 白名单能力，安全沙箱配置的跨平台一致性受到关注。
- **云会话与集成稳定性**：#96911 / #96918 / #95450 / #96609 / #97140 集中反映桥接连接、云定时任务与 GitHub 集成（反复重连、无法推送/调用 API）的可靠性问题。
- **模型行为质量**：#97117（Opus 5.5 范围蔓延）、#96808（无视用户手动执行意图）显示社区对模型版本迭代中行为回归与安全边界的高度敏感。

## 开发者关注点

- **稳定性优先于新特性**：桌面端重启失败、桥接握手超时、云任务静默失败等问题反复出现在高评论 Issue 中，且多数"重启、重登、重装"后依然复现。
- **记忆机制的可信度**：从阈值不可配置，到记忆内容被当作事实传播、重要产出未落盘，开发者担心记忆会放大而非纠正错误。
- **安全边界与破坏性操作**：破坏性命令在用户明确要求手动执行时仍被执行（#96808），以及子代理输出触发指令投毒告警（#88134），是当前最敏感的信任问题。
- **工具与 IDE 集成细节**：扩展版本回退（#97141）、虚拟工作区误激活并报 libc 错误（#96525）、Read 工具在超长行文件上失败（#97138）等，属于高频但可快速修复的开发体验摩擦点。
- **模型版本升级的取舍**：从 Opus 4.6 切到 5.5 出现明显退化（#97117），提示开发者在长期项目中需谨慎评估模型切换。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-25）

## 今日速览

今日 Codex 发布 `rust-v0.157.0` 正式版，新增 GPT-6 Sol / Luna 模型支持（含 Amazon Bedrock）并默认开启全屏转录；同时仓库持续推进 0.158.0 系列的 alpha 迭代。社区侧，Windows 平台问题占据热点 Issue 的绝对多数——控制台窗口闪烁、app-server 异常退出（0xC000013A）、沙箱 ACL 失败等长期缺陷持续发酵。PR 方面以 copyberry[bot] 提交的批量合并为主，集中在沙箱/执行服务器、Guardian 审查与 MCP 处理等底层稳定性改进。

---

## 版本发布

### rust-v0.157.0（正式版）
- **新增模型支持**：加入 GPT-6 Sol 与 Luna，覆盖 Amazon Bedrock，并提供旧模型迁移提示（#47332、#47347）
- **交互改进**：默认启用全屏转录（fullscreen transcripts），新增 Shift+点击扩展文本选择（#47178、#47414）
- **启动优化**：为符合条件的场景启用后台服务自动启动
- 链接: [openai/codex Release rust-v0.157.0](https://github.com/openai/codex/releases)

### rust-v0.158.0 系列（alpha）
- 过去 24 小时发布 `0.158.0-alpha.9 / .10 / .11 / .12 / .13 / .14` 多个预发布版本，以及 `0.157.0-alpha.11.1`，均无详细变更说明，处于高频迭代阶段。

---

## 社区热点 Issues

1. **[#39162] macOS 打开已有会话导致 ChatGPT 认证失效并跳转登录**
   macOS 26.814.41407 下，打开历史对话会使认证被作废并重定向到登录页，上一可用版本为 26.810.52044。70 条评论、42 个 👍，是当前社区情绪最集中的回归问题。
   [openai/codex Issue #39162](https://github.com/openai/codex/issues/39162)

2. **[#36040] iOS 远程控制仅列出近期有对话的项目（回归）**
   iOS ChatGPT 应用通过 Remote Control 连接 macOS 主机时，项目列表不完整。57 条评论，跨端体验问题持续未解。
   [openai/codex Issue #36040](https://github.com/openai/codex/issues/36040)

3. **[#40231] Windows app-server 执行命令中被 0xC000013A 终止**
   在 26.818.5229 版本出现回归（此前 26.810 后曾修复），任何执行本地 shell 命令的 agent 回合数分钟后引擎被强制终止，纯聊天不受影响。
   [openai/codex Issue #40231](https://github.com/openai/codex/issues/40231)

4. **[#37599] Windows 下 codex-code-mode-host 弹出可见终端窗口**
   CLI 0.147.0 触发可见 Windows Terminal 窗口，干扰正常使用。
   [openai/codex Issue #37599](https://github.com/openai/codex/issues/37599)

5. **[#46949] Windows 远程控制守护进程为工具与 MCP 子进程弹出控制台窗口**
   通过 `codex agents` 打开会话会级联弹出黑色窗口，暴露内部进程行为。
   [openai/codex Issue #46949](https://github.com/openai/codex/issues/46949)

6. **[#44503] Windows Modern Standby 系统上 app-server 守护进程启动失败（Job Object 错误）**
   codex-cli 0.154.0，ChatGPT Pro 用户，失败发生在模型交互前的守护进程启动阶段，7 个 👍。
   [openai/codex Issue #44503](https://github.com/openai/codex/issues/44503)

7. **[#43776] Windows 下 Codex 创建的 .agents 目录所有权破坏沙箱设置与内置浏览器控制**
   与沙箱 ACL、浏览器控制链路相互关联，属于权限体系的结构性问题。
   [openai/codex Issue #43776](https://github.com/openai/codex/issues/43776)

8. **[#48074] 安装 Codex 守护进程后，Windows 终端窗口在请求期间反复闪烁**
   codex-cli 0.157.0、Windows 11 上最新上报的同类问题，说明该缺陷在正式版中仍未消除。
   [openai/codex Issue #48074](https://github.com/openai/codex/issues/48074)

9. **[#41818] Windows 沙箱 “apply deny-read ACLs” 失败，Node 运行时 / Browser / Computer Use 无法启动**
   26.825.6671.0 下沙箱初始化失败，直接阻断多个核心功能。
   [openai/codex Issue #41818](https://github.com/openai/codex/issues/41818)

10. **[#47270] 桌面端 Browser Use 缺少 ChatGPT 浏览器路由，无法发现 Chrome 与内置浏览器标签页**
    26.915.31945（build 9922），macOS，浏览器集成能力受阻。
    [openai/codex Issue #47270](https://github.com/openai/codex/issues/47270)

**其它值得留意**：#47969（Mac 应用无法连接账户）、#48007 与 #47316（Windows 首条消息成功后无法继续发送）、#48068（0.157.0 TUI 状态行颜色丢失）、#32927（macOS 新任务缺少 Worktree 模式选择器）。

---

## 重要 PR 进展

以下 PR 均由 `copyberry[bot]` 于 2026-09-25 提交并关闭：

1. **[#48098] 为 Guardian 审查保留近期授权上下文**
   避免用户消息先占满根上下文、导致助手提问被挤出的问题。
   [openai/codex PR #48098](https://github.com/openai/codex/pull/48098)

2. **[#48078] 通过匿名文件回放 exec-server shell 快照**
   为大型 shell 快照提供不污染子进程环境变量的回放路径。
   [openai/codex PR #48078](https://github.com/openai/codex/pull/48078)

3. **[#48073] 运行时权限授予不再触发 stdin 审批**
   修复插件指标等运行时文件系统授权误触发 `write_stdin` 审批、阻断输入的问题。
   [openai/codex PR #48073](https://github.com/openai/codex/pull/48073)

4. **[#48069] 处理 Guardian 网络审批测试中的提前命令 yield**
   避免父请求消费本应给 Guardian 的 mock 响应。
   [openai/codex PR #48069](https://github.com/openai/codex/pull/48069)

5. **[#48060] 去重 Guardian 审查中重复保留的指令**
   复用会话时避免重复投递证据，仅在内容变化时重新下发。
   [openai/codex PR #48060](https://github.com/openai/codex/pull/48060)

6. **[#48035] 从发现与摘要中移除插件扩展元数据**
   停止发送 `includeExtensions=true`，并移除 `PluginSummary` 中的扩展信息。
   [openai/codex PR #48035](https://github.com/openai/codex/pull/48035)

7. **[#48015] 在展示应用链接前校验工具建议的 install URL**
   复用外部 URL 校验器，避免未经检查的 `install_url` 被浏览器打开。
   [openai/codex PR #48015](https://github.com/openai/codex/pull/48015)

8. **[#47989] 为 exec-server 增加仅启动期的 PID namespace 继承**
   应对容器拒绝新建 `/proc` 挂载时的沙箱回退场景，保证沙箱内 PID 正确。
   [openai/codex PR #47989](https://github.com/openai/codex/pull/47989)

9. **[#47988] 在等价绑定间复用 MCP 处理器**
   避免工具元数据未变时重建处理器、强制重建工具搜索索引。
   [openai/codex PR #47988](https://github.com/openai/codex/pull/47988)

10. **[#47984] 新增多智能体 spawn 延迟与失败指标**
    记录 `codex.multi_agent.spawn.phase.duration_ms`，覆盖驻留预留、fork 上下文、子进程创建等阶段。
    [openai/codex PR #47984](https://github.com/openai/codex/pull/47984)

---

## 功能需求趋势

- **新模型与云端后端支持**：0.157.0 引入 GPT-6 Sol / Luna 与 Amazon Bedrock 支持，并配套旧模型迁移提示，模型矩阵仍在快速扩张。
- **多智能体与子代理基础设施**：从 spawn 阶段耗时指标（#47984）、子代理卡死问题（#38385）到消息板 Serde 支持（#48077），多 agent 协作正成为底层建设的重点方向。
- **MCP 与插件生态**：MCP 处理器复用、插件扩展元数据清理、工具建议链接校验等多项改动静默推进，说明 MCP 已成为一等集成路径。
- **沙箱与权限模型**：deny-read ACL、PID namespace、运行时权限授予、Guardian 网络审批等构成一条持续演进的沙箱/权限主线。
- **远程控制与跨端协同**：iOS Remote、Windows remote-control daemon 相关问题密集，跨设备工作流是社区实际使用中的高频场景。
- **浏览器与 Computer Use 集成**：Browser Use 路由缺失、沙箱阻断浏览器启动等，反映桌面端自动化能力仍待打通。

---

## 开发者关注点

- **Windows 平台稳定性是当前最大痛点**：控制台窗口闪烁/弹出（#37599、#46949、#18984、#37153、#48074）、app-server 以 0xC000013A 异常退出（#40231、#46397）、守护进程启动失败（#44503）、沙箱 ACL 失败（#41818、#43776）构成了最集中的问题簇，且多个缺陷属于"修复后回归"。
- **认证与会话可靠性**：macOS 打开历史对话导致登出（#39162，70 条评论）、Mac 应用无法接入账户（#47969），直接影响可用性。
- **消息发送链路中断**：Windows 端首条消息成功后无法继续发送（#48007、#47316），属于阻断日常使用的严重缺陷。
- **回归问题频繁出现**：多个 Issue 明确指出"post-26.810 修复后于新版本再次回归"，开发者对版本间质量波动的容忍度正在下降。
- **平台体验一致性**：TUI 颜色配置失效（#48068）、Worktree 模式选择器缺失（#32927）等细节问题虽小，但反映出配置项与实际行为的一致性仍需加强。

---

*数据来源：github.com/openai/codex，统计时间 2026-09-25。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-25）

## 1. 今日速览

今日社区焦点集中在**并发文件操作竞态修复**（同一作者连发 4 个同源 PR）与**子代理/浏览器代理稳定性问题**上。夜间版 v0.62.0 持续推进，MCP 配置缺失与畸形配置的区分处理已进入修复通道。Issues 侧，Auto Memory 相关的隐私与重试逻辑、子代理 MAX_TURNS 误报成功等 P1/P2 问题持续活跃。

---

## 2. 版本发布

**v0.62.0-nightly.20260925.gbedef96ef**（夜间版）

- 更新 v0.61.0-preview.1 与 v0.61.0 的 Changelog
- `fix(cli)`：区分「缺失 MCP 启用配置」与「畸形配置」两种场景（摘要截断）
- 链接：google-gemini/gemini-cli Release v0.62.0-nightly.20260925

---

## 3. 社区热点 Issues（10 个）

**1. #22323 [P1] 子代理 MAX_TURNS 中断被误报为 GOAL 成功**
`codebase_investigator` 子代理在达到最大轮次限制、未做任何分析的情况下，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`。这是典型的**状态语义污染**问题，会让上层编排与用户误判任务结果。13 条评论、2 个赞，为今日评论数最高。🔗 google-gemini/gemini-cli Issue #22323

**2. #21409 [P1] Generalist agent 挂起**
只要 CLI 委派给 generalist agent 就会永久挂起，连创建文件夹这类简单操作也不例外，用户曾等待长达一小时。8 个赞（今日最高的用户共鸣度），说明影响面较广。🔗 google-gemini/gemini-cli Issue #21409

**3. #19873 [P2] 零依赖 OS 沙箱 + 执行后意图路由**
提案指出 Gemini 3 模型本质上是「原生 bash 用户」，惯于用 `grep`/`cat`/`sed`/`awk` 链式操作代码库，建议用沙箱释放这一原生能力。属于方向性架构提案，9 条评论。🔗 google-gemini/gemini-cli Issue #19873

**4. #22745 [P2] 评估 AST 感知的文件读取、搜索与映射**
EPIC 级追踪议题，探索用 AST 感知工具精确读取方法边界、减少工具调用轮次。与 #22746 形成一组平台能力调研。7 条评论。🔗 google-gemini/gemini-cli Issue #22745

**5. #21968 [P2] Gemini 不主动使用 skills 与子代理**
用户反馈模型几乎不会自发调用自定义 skills 和子代理，仅在显式指令下才会使用。这直接关系到 skills/subagent 体系的**实际采用率**。🔗 google-gemini/gemini-cli Issue #21968

**6. #26525 [P2] 增加确定性脱敏，减少 Auto Memory 日志**
Auto Memory 读取本地会话记录并发送给后台提取代理，虽然提示词要求脱敏，但**脱敏发生在内容已外发之后**——属隐私风险。🔗 google-gemini/gemini-cli Issue #26525

**7. #26522 [P2] 阻止 Auto Memory 无限重试低价值会话**
只有当提取代理成功 `read_file` 后会话才被标记为已处理；若代理判定为低价值而跳过读取，该会话会被反复重试。🔗 google-gemini/gemini-cli Issue #26522

**8. #22267 [P2] Browser Agent 忽略 settings.json 覆盖**
Browser Agent 完全无视全局/项目级 `settings.json` 中的配置（如 `maxTurns`），尽管 `AgentRegistry` 能读到配置。🔗 google-gemini/gemini-cli Issue #22267

**9. #21983 [P1] 浏览器子代理在 Wayland 下失败**
Linux Wayland 环境下 browser subagent 直接启动失败。P1 + need-retesting，属平台兼容性硬伤。🔗 google-gemini/gemini-cli Issue #21983

**10. #22672 [P2] 代理应停止/劝阻破坏性行为**
模型在复杂 git 操作中偶发使用 `git reset` 或 `--force`，而更安全的替代方案是存在的。关联到用户信任与数据安全底线。🔗 google-gemini/gemini-cli Issue #22672

> 其他值得留意：#24246（工具数超 128/400 触发 400 错误）、#23571（模型在随机目录生成临时脚本污染工作区）、#20079（symlink 形式的 agent 文件无法被识别）。

---

## 4. 重要 PR 进展（10 个）

**1. #29502 [P1, area/core] 确保 Enter/Spacebar 可靠确认选择列表**
修复 `useSelectionList`、`RadioButtonSelect`、`ToolConfirmationMessage`、`AskUserDialog` 在各类终端（含 Windows IDE 终端）中的确认行为。交互可靠性 P1 修复。🔗 google-gemini/gemini-cli PR #29502

**2. #29499 / #29497 [P1] 序列化文件工具操作并实现原子写入**
修复 `packages/core` 中并发工具执行（尤其是并行子代理）对同一文件路径的竞态条件，解决非协调的 read-modify-write 问题。同源另有两个 CLOSED 版本（#29498、#29495），说明作者在快速迭代提交方案。🔗 google-gemini/gemini-cli PR #29499 ｜ #29497

**3. #29491 [P1, area/security] 补丁发布前增加显式写权限检查**
指出 `slash-command-dispatch` 的 `permission: write` 在评论者无写权限时**不会使任务失败**，仅约束内部路由，导致 `Get PR Status` 与 `Dispatch if Merged` 可被任意用户触发。属 CI 安全边界问题。🔗 google-gemini/gemini-cli PR #29491

**4. #29368 [P1, area/non-interactive] ACP 按 ID 解析 session/load**
修复 #29288：即使没有可恢复内容，也应按 ID 定位会话文件。作者在诊断中明确区分了报告里的两类现象，指出只有一类属代理侧 bug。🔗 google-gemini/gemini-cli PR #29368

**5. #24905 [P3, area/core] 校验扩展与设置配置 JSON**
将 CLI 配置加载器中不安全的 `JSON.parse(...) as ...` 强制转换替换为运行时校验，安全处理畸形扩展/设置 JSON。带 `help wanted` 标签的长期 PR。🔗 google-gemini/gemini-cli PR #24905

**6. #29376 [area/core] 阻止 Windows IDE 检测回退执行 Unix `ps`**
`getIdeProcessInfoForWindows()` 在未于进程快照中找到当前 PID 时会回退执行 Unix `ps`，导致跨平台错误。🔗 google-gemini/gemini-cli PR #29376

**7. #29282 [P2, area/security] 登录后持久化 OAuth 凭据**
在浏览器或 user-code 登录成功后立即持久化 OAuth 凭据，避免反复弹出 Google 登录。已 CLOSED，带 `status/pr-nudge-sent`。🔗 google-gemini/gemini-cli PR #29282

**8. #29278 [P2, area/core] 选择无冲突的环境变量展开键**
防止 `expandEnvVars()` 使用的临时哨兵键与调用方环境冲突。已 CLOSED。🔗 google-gemini/gemini-cli PR #29278

**9. #29277 [P2, area/core] 修复 `expandEnvVars` 哨兵键环境变量冲突**
与 #29278 同类问题：当环境变量中恰好存在 `__GCLI_EXPAND_TARGET__` 时，函数会返回该值而非展开输入。🔗 google-gemini/gemini-cli PR #29277

**10. #29271 [P1] 重构项目结构与元数据** / **#29274 [P1] NB-gemini** / **#29272 [P1] SECURITY.md**
三者均已 CLOSED 且带 `status/pr-nudge-sent`、正文多为模板占位（#29274、#29272 无实质描述），建议维护者关注此类低质量/自动生成 PR 的噪声。🔗 PR #29271 ｜ #29274 ｜ #29272

---

## 5. 功能需求趋势

从全部 Issues 标签分布看，**`area/agent` 占据绝对主导**，社区关注方向集中于：

- **子代理编排体系**：子代理生命周期管理（#20195 Sprint 1）、技能与子代理的自动触发（#21968）、子代理状态语义正确性（#22323）。
- **浏览器代理（browser agent）成熟度**：配置覆盖（#22267）、会话接管与锁恢复（#22232）、Wayland 兼容（#21983）——BrowserManager 的 fail-fast 策略被反复质疑。
- **代码理解能力升级**：AST 感知的读取/搜索/映射（#22745、#22746）成为独立的平台级调研方向。
- **Auto Memory 记忆系统**：隐私脱敏（#26525）、重试策略（#26522）、无效补丁隔离（#26523）、质量追踪（#26516）构成一个完整的子系统 backlog。
- **安全与破坏性行为约束**：`area/security` 下集中于凭据持久化、Auto Memory 数据外发与危险 shell 命令（#22672）。

---

## 6. 开发者关注点

综合 Issues 与 PR 反馈，当前高频痛点集中在四个层面：

1. **稳定性与挂起**：子代理挂起（#21409）、MAX_TURNS 误报成功（#22323）、输出钩子崩溃（#22186）说明代理执行链的**错误传播与终止条件**仍不可靠。
2. **并发与竞态**：并行子代理导致的文件读写竞态催生了今日 4 个同源 P1 PR，`packages/core` 的并发模型是当前的修复热点。
3. **配置系统的一致性**：Browser Agent 忽略 `settings.json`（#22267）、扩展/设置 JSON 缺乏运行时校验（#24905）、MCP 配置缺失与畸形难区分（v0.62.0 夜间版）——配置链路的**可信度**问题贯穿 CLI。
4. **安全底线**：CI 写权限检查失效（#29491）、Auto Memory 先外发后脱敏（#26525）、OAuth 凭据未及时持久化（#29282），以及低质量 PR 噪声（#29271/#29272/#29274）对维护者注意力的消耗。

---

*数据来源：github.com/google-gemini/gemini-cli（Issues 50 条、PR 45 条，均在过去 24 小时内更新；本文仅列出其中评论数最高的条目）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-25）

## 1. 今日速览

今日共发布 2 个补丁版本（v1.0.89-2、v1.0.89-3），主要围绕 MCP OAuth 作用域、本地会话提示撤回（Esc Esc）以及问答表单答案隔离等细节修复。过去 24 小时内 Issues 活跃度较高（50 条更新，20 条为高评论议题），认证/会话失效、MCP 工具暴露异常、Windows/WSL2 平台兼容性构成当日焦点。Pull Requests 无更新。

---

## 2. 版本发布

### v1.0.89-3
- **Fixed**：Ask-user 表单在多问题场景下，自定义 "Other" 答案现在能在各问题间正确隔离，不再串扰。
- 链接：github.com/github/copilot-cli Releases（v1.0.89-3）

### v1.0.89-2
- **Added**：MCP 预注册 OAuth 客户端现在会遵循配置的 `oauthScopes`。
- **Added**：本地会话中，在空白聊天输入框按 Esc Esc，可撤回模型尚未开始回答的提示，并将其从会话中移除。
- **Improved**：受支持的 Windows 版本上，沙箱化命令的处理有所改进（原文在此处截断）。
- 链接：github.com/github/copilot-cli Releases（v1.0.89-2）

---

## 3. 社区热点 Issues（10 条）

1. **[OPEN] #3534 — WSL2 (ARM64) `/copy` 失败：`clip.exe exited with code 1`**（评论 7，👍 5）
   1.0.55 起，WSL2 ARM64 下所有经 Windows 路径的剪贴板写入因 `cmd.exe` 引号处理失败。平台兼容性问题持续 4 个月未关，跨平台用户受影响明显。
   github/copilot-cli Issue #3534

2. **[CLOSED] #3501 — 滚动条导致文本错位**（评论 6，👍 9）
   Windows 下引入垂直滚动条后文本渲染异常。高赞（9）且已关闭，属渲染层高关注度回归。
   github/copilot-cli Issue #3501

3. **[CLOSED] #3123 — `/research` 无法写入研究报告**（评论 6，👍 6）
   执行 `/research` 后 agent 报 "create" 工具不可用，无法落盘报告。核心 agent/工具链缺陷，已关闭。
   github/copilot-cli Issue #3123

4. **[CLOSED] #4089 — Atlassian MCP：OAuth 成功但零工具暴露**（评论 5）
   Atlassian MCP 连接与 OAuth 均成功，但会话中不暴露任何工具；同类 HTTP MCP（LeanIX、Lucid）正常。MCP 集成结构性问题，已关闭。
   github/copilot-cli Issue #4089

5. **[OPEN] #4775 — Mission Control 仪表盘链接 404**（评论 5，👍 2）
   "Created by me" 指向的 `/copilot/tasks/<uuid>` 路径不存在，实际会话位于 `/agents/tasks/<uuid>`。会话仍存活可经 CLI 访问，仅链接错误。
   github/copilot-cli Issue #4775

6. **[OPEN] #4905 — 桌面应用会话生成数分钟后死亡**（评论 5，👍 4）
   "GitHub credential registration is no longer available" 导致 github-mcp-server 目录失效并致命。桌面应用 1.1.22 + 捆绑 CLI 1.0.84-5，macOS arm64，影响严重。
   github/copilot-cli Issue #4905

7. **[OPEN] #4929 — 进程内认证令牌停止刷新，重启前所有提示失败**（评论 5）
   长运行进程永久丢失认证，`/ask` 与普通提示即时报授权错误，`/login` 无法恢复，只能重启。长会话稳定性关键痛点。
   github/copilot-cli Issue #4929

8. **[CLOSED] #4103 — 插件市场克隆禁用 Git 凭据助手，破坏私有 HTTPS 仓库**（评论 4，👍 4）
   私有 Azure DevOps HTTPS 仓库添加插件市场失败，疑为 v1.x 回归。影响企业私有源使用。
   github/copilot-cli Issue #4103

9. **[OPEN] #4680 — CLI 向自定义 OpenAI 兼容端点发送错误模型 ID，杀死会话**（评论 4）
   使用非 OpenAI 模型名（如 `mimo-v2.5`）时，CLI 发送 `gpt-5.4-nano`，导致会话中断。影响自定义模型用户。
   github/copilot-cli Issue #4680

10. **[OPEN] #2753 — 插件技能未注入主 agent 的 `available_skills`**（评论 3）
    市场安装的插件技能在 `/skills` UI 中可见（18 个），但未注入系统提示的 `<available_skills>` 块，仅内建技能可见。削弱插件体系实际效力。
    github/copilot-cli Issue #2753

（另可关注 #4907 MCP 重连通知刷屏、#4960 企业自定义模型可见但不可选、#4556 服务端市场注册静默失败。）

---

## 4. 重要 PR 进展

过去 24 小时内 **无 Pull Request 更新**。本节略。

---

## 5. 功能需求趋势

从本次 Issues 可见社区最关注的方向：

- **认证与会话持久性**：#4929（令牌不刷新）、#4905（凭据注册失效）、#4103（凭据助手被禁用）、#4887（Auto 模式 + `/ask` 报错）。认证链路是当前最集中的不稳定源。
- **MCP 生态完善**：#4089（工具零暴露）、#4907（重连通知刷屏）以及本日 release 对 `oauthScopes` 的支持，显示 MCP 的 OAuth、工具发现与生命周期通知亟待打磨。
- **插件/技能体系**：#2753（技能未注入）、#4556（服务端市场未注册）、#4103（私有源克隆），插件从安装到生效的链路存在多处断点。
- **自定义/企业模型支持**：#4680（模型 ID 错误）、#4960（企业模型不可选）、#3053（切换模型 reasoning effort 错误），第三方与企业管理模型接入是明确需求。
- **平台与终端渲染**：WSL2/ARM64（#3534）、Windows 滚动条渲染（#3501），跨平台保真度仍受关注。
- **输入与编辑体验**：#2199（Ctrl+Backspace 删词）、#3138（编辑提示时切换模型不丢草稿），键盘交互改进呼声稳定。
- **配置正确性**：#1527（非 git 仓库下指令文件重复加载）、#1373（`.github/lsp.json` 报告异常）。

---

## 6. 开发者关注点

- **长会话可靠性是最大痛点**：认证令牌停止刷新、桌面会话死亡、MCP 重连噪音，三者叠加导致长时间或后台运行的会话不可预测（#4929、#4905、#4907）。
- **本地模型与第三方端点的配置错配**：CLI 对自定义端点发送错误模型 ID，企业模型"可见不可选"，反映模型选择/解析层与展示层不一致（#4680、#4960）。
- **企业/私有环境的凭据处理**：私有 HTTPS 仓库与插件市场集成因凭据助手被禁用而失败，影响企业落地（#4103）。
- **平台一致性诉求**：WSL2 ARM64 剪贴板、Windows 渲染等平台特有问题长期未解，跨平台体验参差（#3534、#3501）。
- **agent 工具可用性透明度**：`/research` 找不到 create 工具、插件技能未被注册，开发者期望工具与技能在运行时准确可见、可用（#3123、#2753）。

---

*说明：本日报仅基于所提供数据生成；Release 条目中 v1.0.89-2 的 Windows 沙箱改进描述在原始数据中截断，未作补全。所有条目链接均指向 github.com/github/copilot-cli 对应编号。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-25）

## 今日速览
今日无新版本发布，社区讨论集中在免费额度的错误识别与重置异常（#49580、#49609、#50091）以及 OpenAI/Codex 子代理卡死问题（#11865）。PR 侧多数为 AI 请求边界修复，覆盖 Claude Opus 5.5、GPT-6 Sol/Luna 与 Gemini 3.8 TTS 的兼容性。

## 版本发布
过去 24 小时无新 Release。

## 社区热点 Issues

1. **#49580 [OPEN]** 免费档 Muse Spark 1.3 Free 在 MonoCode 前端 + OpenCode 后端下报错 "can only be used from within OpenCode"。46 条评论、持续 8 天，是当前最热问题，反映免费额度校验与第三方前端的兼容争议。
   https://github.com/anomalyco/opencode/issues/49580

2. **#11865 [OPEN]** 使用 OpenAI/Codex 5.2 Xhigh 时 Tasks/Subagents 频繁卡死，无超时与重试，导致整个会话永久挂起。25 条评论、22 个 👍，为当日点赞最高的开放 Issue，可靠性问题长期未解。
   https://github.com/anomalyco/opencode/issues/11865

3. **#11830 [CLOSED]** 多账号 OAuth 支持与自动重新登录，含凭据轮换和浏览器会话管理。23 条评论、23 个 👍，社区呼声高但已关闭，值得关注后续是否以其他形式落地。
   https://github.com/anomalyco/opencode/issues/11830

4. **#49609 [CLOSED]** 纯 OpenCode 客户端（无第三方 IDE/Agent）同样触发免费档报错。与 #49580 同源，9 条评论后关闭，说明该问题影响面比第三方前端更广。
   https://github.com/anomalyco/opencode/issues/49609

5. **#49014 [OPEN]** Go 订阅下 grok-4.6 触及 5 小时限额后，所有零使用量的 Go 模型被一并阻断，且共享同一重置窗口。限额隔离逻辑存在缺陷。
   https://github.com/anomalyco/opencode/issues/49014

6. **#50155 [OPEN]** `opencode-go/deepseek-v4-flash` 要求 Global 区域，但隐私设置入口缺失，付费用户被阻断。7 条评论、5 个 👍。
   https://github.com/anomalyco/opencode/issues/50155

7. **#27837 [OPEN]** Web 模式下左侧会话列表始终为空，尽管 `/api/session` 正常返回，作者已定位到 SSE 事件驱动加载逻辑。自 5 月延续至今。
   https://github.com/anomalyco/opencode/issues/27837

8. **#48844 [OPEN]** "Session too large to compact"：压缩请求本身缺乏体积预算，是 #48827 自动压缩乒乓问题的后续，影响长会话可用性。
   https://github.com/anomalyco/opencode/issues/48844

9. **#51087 [OPEN]** 桌面版 2.0.16 在非英语 locale（泰语已确认）下遇到 `TodoWrite` 工具调用时，会话时间线渲染崩溃。
   https://github.com/anomalyco/opencode/issues/51087

10. **#51305 [OPEN]** 桌面版 MCP 面板在 20+ 服务器时难以管理，请求折叠、分组、内部滚动与批量启用。反映 MCP 重度使用者的规模化痛点。
    https://github.com/anomalyco/opencode/issues/51305

## 重要 PR 进展

1. **#51339 [OPEN]** 在 GPT-6 Sol 与 Luna 上切换 reasoning effort 时保留 prompt cache，依据 OpenAI reasoning 指南新增 `configuration_update` 支持。
   https://github.com/anomalyco/opencode/pull/51339

2. **#51338 [CLOSED]** Claude Opus 5.5 变体保持 thinking 开启——该模型无法禁用思考，Anthropic 会拒绝 `thinking: { type: ... }` 请求。
   https://github.com/anomalyco/opencode/pull/51338

3. **#51302 [CLOSED]** 在 Anthropic Messages 请求边界拦截 Opus 5.5 不支持选项（显式禁用/手动 thinking、强制工具选择），本地返回 `InvalidRequest` 而非 HTTP 400。
   https://github.com/anomalyco/opencode/pull/51302

4. **#51301 [CLOSED]** 原生 OpenAI Chat Completions 下，含函数工具或工具历史的 GPT-6 Sol/Luna 请求在未指定 effort 时显式选 `reasoning_effort: "none"`，避免默认 medium 导致不兼容。
   https://github.com/anomalyco/opencode/pull/51301

5. **#51300 [CLOSED]** 适配 Google 9 月 22 日 Gemini 3.8 TTS 变更：unary 默认由无头 PCM 改为带 RIFF 头的 WAV（`audio/wav`）。
   https://github.com/anomalyco/opencode/pull/51300

6. **#51337 [OPEN]** 修复核心配置加载，重新支持托管配置目录与 macOS managed preferences（V1 行为），关闭 #51107。
   https://github.com/anomalyco/opencode/pull/51337

7. **#51345 [OPEN]** 在会话标签上显示服务器名称（关闭 #51344），以草稿形式提交，等待 issue 中先确定设计。
   https://github.com/anomalyco/opencode/pull/51345

8. **#51124 [CLOSED]** 新增「撤销排队提示」功能：可将已排队 prompt 拉回输入框编辑，TUI/Mini 使用 `ctrl+u`，App 提供图标按钮。
   https://github.com/anomalyco/opencode/pull/51124

9. **#48871 [OPEN]** 修复 `Project.resolve`：未识别目录此前一律返回 `ID.global`，现改为解析到其关联项目。
   https://github.com/anomalyco/opencode/pull/48871

10. **#51231 [CLOSED]** 将 #51161 的雷达图修复提升到 production，解决 Muse Spark Contributor 对比显示全零雷达图的问题。
    https://github.com/anomalyco/opencode/pull/51231

## 功能需求趋势

- **新模型适配与请求参数边界**：Claude Opus 5.5、GPT-6 Sol/Luna、Gemini 3.8 TTS、DeepSeek V4 Flash 等在今日 PR 中集中出现，模型能力差异（thinking 不可禁用、reasoning effort 默认值、音频格式变更）正成为主要维护成本。
- **多账号与凭据管理**：OAuth 多账号、自动重登与凭据轮换（#11830）获得高赞。
- **桌面端可管理性**：MCP 面板规模化（#51305）、会话标签归属服务器（#51344）、slash 命令展示 skills（#50638）等桌面体验需求密集。
- **本地化与渲染健壮性**：非英语 locale 崩溃（#51087）、FR 文档工具名被误译（#51335）、品牌大小写（#51334）等 i18n 细节受到关注。
- **计费与用量可视化**：货币显示配置（#32485）、免费额度重置异常（#50091）指向配额透明度需求。

## 开发者关注点

- **额度与配额逻辑是最大痛点**：免费档被误判为「非 OpenCode 环境」、额度不按预期重置、单一模型限额拖垮全部模型，三类问题同日并存，直接影响付费与免费用户的可用性信任。
- **会话可靠性**：子代理卡死无超时/重试（#11865）与超大会话无法压缩（#48844）共同指向长会话与多代理编排缺少兜底机制。
- **跨平台与升级路径**：Windows 上 `upgrade --method curl` 因反斜杠路径被 bash 处理失败（#50924）。
- **企业管理场景回归**：托管配置目录与 macOS managed preferences 在 V1 存在、V2 缺失，说明企业部署路径需要持续跟进。
- **退出/白标与商业化细节**：退出 splash 可选关闭（#38010）、OpenCode Zen 无法退订（#51317）反映嵌入式集成与订阅管理的边缘但真实诉求。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-25

## 1. 今日速览

今日无新版本发布，社区讨论集中在 **0.87.x 稳定期的回归缺陷** 与 **成本计算准确性** 两条主线。Issues 侧，RPC steer 关联性回归（#9803）与"Working..."卡死（#10031）已关闭，但成本偏差（#9980）、压缩提示超窗（#10033）、工具集变更触发重复计费（#10024）仍处于 OPEN。PR 侧，mitsuhiko 连续提交 codemode/MCP、virtual models 等重量级特性，社区维护者与核心开发者的活跃度显著上升。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues

1. **#9803 [CLOSED] 0.86.0 回归：RPC steer 成功无法与扩展处理的输入关联** — 评论 11 条。扩展 input handler 可消费 steer A 却独立排队 steer B，导致成功响应与 queue_update 无法对应。涉及 RPC 协议语义一致性，是当日评论数最高的议题。
   [earendil-works/pi#9803](https://github.com/earendil-works/pi/issues/9803)

2. **#10031 [CLOSED] ESC 停止思考后 Pi 偶发卡在 "Working..."** — 评论 10 条，👍 1。持续约一个月的复现问题，用户需 CTRL+c 后 `pi -c` 恢复，属高频体验痛点（已标记 no-action）。
   [earendil-works/pi#10031](https://github.com/earendil-works/pi/issues/10031)

3. **#9674 [CLOSED] mistral-conversations：空 content delta 打开文本块（GLM 5.x 回放报 400）** — 评论 7 条。此前 #8069 的 workaround 会丢失 Mistral 原生 prompt cache，本 issue 提供 provider 侧修复方案。
   [earendil-works/pi#9674](https://github.com/earendil-works/pi/issues/9674)

4. **#3790 [CLOSED] 为思考级别循环增加反向快捷键** — 评论 6 条。5–6 个级别下容易"冲过头"，需支持反向循环；与之呼应的 #6281 同日关闭，说明该需求已被合并处理。
   [earendil-works/pi#3790](https://github.com/earendil-works/pi/issues/3790)

5. **#9980 [OPEN] OpenRouter 主流开源模型成本计算常年偏差 2–3 倍** — 评论 5 条。模型目录使用最便宜供应商定价，对多供应商提供的热门开源权重模型造成系统性低估/偏差，直接影响成本可信度。
   [earendil-works/pi#9980](https://github.com/earendil-works/pi/issues/9980)

6. **#10033 [OPEN] 压缩提示包含全部 thinking 文本，会话尚可容纳却超上下文窗口** — 评论 5 条。`serializeConversation()` 将每个 thinking 块完整写入，导致推理模型长会话下 auto-compaction 永远失败（DeepSeek V4.1 自托管场景）。
   [earendil-works/pi#10033](https://github.com/earendil-works/pi/issues/10033)

7. **#9918 [CLOSED] Codex 回放空的已签名最终答案** — 评论 5 条。Codex 可返回文本为空/仅空白的 signed final-answer 项，Pi 保留并在下次请求中回放，触发同类失败模式。
   [earendil-works/pi#9918](https://github.com/earendil-works/pi/issues/9918)

8. **#9098 [CLOSED] 在 RPC 响应中暴露 prompt disposition** — 评论 5 条。建议在成功 RPC `prompt` 响应中加入 `data.disposition: "handled" | "queued" | "started"`，复用现有 preflight 决策，是 #9803 类问题的协议层解法。
   [earendil-works/pi#9098](https://github.com/earendil-works/pi/issues/9098)

9. **#10024 [OPEN] 运行中修改工具集导致系统提示头部移动并重新计费** — 评论 4 条。头部正是 `- <tool>: <snippet>` 项目渲染处，运行中途变更会使下一次请求从该点起重新计费，属明显的成本与稳定性缺陷。
   [earendil-works/pi#10024](https://github.com/earendil-works/pi/issues/10024)

10. **#9974 [CLOSED] Pi 误处理 llama.cpp 返回的 Responses API 工具调用（重复且损坏的执行）** — 评论 4 条。本地推理后端场景下会执行重复、损坏的 tool call，涉及正确性风险。
    [earendil-works/pi#9974](https://github.com/earendil-works/pi/issues/9974)

> 其他值得留意：#10008（用户抱怨 issue 被自动关闭，评论 4 条）、#10006（pi-otel OTLP 导出器提案）、#9997（session_shutdown 不 resolve 时退出无反馈卡死）、#10038（全屏下鼠标滚轮滚动错对象）、#10026（退出后光标隐藏）。

---

## 4. 重要 PR 进展

1. **#10040 [OPEN] feat(coding-agent): Codemode 与 MCP** — 作者 mitsuhiko。一次性引入 codemode 与 MCP 的完整功能，动机是让 Jev 等模型获得良好沙箱环境；PR 体量较大但方向性最强。
   [earendil-works/pi#10040](https://github.com/earendil-works/pi/pull/10040)

2. **#10035 [OPEN] Virtual models** — 作者 mitsuhiko。为 Pi 添加虚拟模型的实验性支持。
   [earendil-works/pi#10035](https://github.com/earendil-works/pi/pull/10035)

3. **#10027 [CLOSED] fix(ai,coding-agent)：流式健壮性、reasoning 钳制、压缩有效性、edit 恢复** — 作者 rahulrajaram。一揽子修复，作者日常以 Pi 对接 OpenRouter 与本地网关，已 rebase 至 v0.87.1 且全部提交通过完整测试。
   [earendil-works/pi#10027](https://github.com/earendil-works/pi/pull/10027)

4. **#6933 [CLOSED] fix(coding-agent)：默认禁用 undici idle timeout 以适配本地 LLM** — 作者 3194603353。将 `DEFAULT_HTTP_IDLE_TIMEOUT_MS` 由 300000 改为 0，避免 vLLM/LM Studio/llama.cpp/Ollama 长时间静默时被 per-socket 超时中断。
   [earendil-works/pi#6933](https://github.com/earendil-works/pi/pull/6933)

5. **#10039 [CLOSED] fix(coding-agent)：自定义主题遵循 truecolor** — 作者 christianklotz。从环境检测与最终终端设置解析颜色模式，并在资源加载中透传，避免改动进程级能力状态。
   [earendil-works/pi#10039](https://github.com/earendil-works/pi/pull/10039)

6. **#10021 [OPEN] feat(coding-agent)：为 bash 调用中的 heredoc 与内联脚本加高亮** — 作者 mitsuhiko。针对最新 opus/fable 模型不倾向使用内置 edit 工具的情况，提升 heredoc 阅读体验。
   [earendil-works/pi#10021](https://github.com/earendil-works/pi/pull/10021)

7. **#10016 [OPEN] fix(coding-agent)：当 wake follow-up 入队时恢复被中止的运行** — 作者 HyeokjaeLee。修复 `sendMessage(..., { deliverAs: "followUp", triggerTurn: true })` 在运行被 abort 结束前队列未排空导致丢消息的问题。
   [earendil-works/pi#10016](https://github.com/earendil-works/pi/pull/10016)

8. **#9714 [OPEN] feat(ai)：支持 Azure Foundry Chat Completions 部署** — 作者 jsanter27。Azure provider 此前仅实现 Responses API，使使用 Chat Completions 的 Foundry 部署（如 DeepSeek V4 Pro）不可用。
   [earendil-works/pi#9714](https://github.com/earendil-works/pi/pull/9714)

9. **#10020 [CLOSED] feat(coding-agent)：HTML 导出增加隐藏消息开关** — 作者 rwachtler。为隐藏的 `CustomMessage` 添加快捷切换按钮并保留默认隐藏行为，同时保留 "Toggle tools" / "Toggle thinking" 的按钮状态，修复 #8896。
   [earendil-works/pi#10020](https://github.com/earendil-works/pi/pull/10020)

10. **#9957 [CLOSED] fix(tui)：按纵横失真选择 Kitty 图像尺寸** — 作者 rwachtler。作者明确说明这并非彻底修复，而是在部分场景下择优选择失真较小的尺寸，属渐进改进。
    [earendil-works/pi#9957](https://github.com/earendil-works/pi/pull/9957)

---

## 5. 功能需求趋势

- **RPC / 扩展协议语义化**：#9803 与 #9098 共同指向同一方向——让 RPC 响应显式表达 prompt 的处置结果（handled / queued / started），并让 steer 与扩展处理可被可靠关联。
- **成本计量准确性**：#9980（OpenRouter 多供应商定价偏差）与 #10024（工具集中途变更导致重新计费）显示"成本可解释性"已成为独立关注面。
- **推理模型与上下文管理**：#10033（thinking 全量进入压缩提示）、#10024（系统提示头部位移）反映长会话 + reasoning 模型组合下的压缩与缓存失效问题。
- **本地 / 自托管后端兼容**：#9974（llama.cpp Responses API 工具调用错乱）、#6933（undici 超时）、#10033（DeepSeek V4.1 自托管）构成完整的本地部署支持链条。
- **工具界面体验**：思考级别双向循环（#3790、#6281）、TUI 渲染健壮性（#9887 字符串行号、#9957 Kitty 图像尺寸）、全屏滚动（#10038）等交互细节持续被推动。
- **新模型与供应商接入**：#9714（Azure Foundry Chat Completions）、#9553（commandcode provider）、#10035（virtual models）、#9674（Mistral 原生缓存路径）。
- **可观测性**：#10006 提出 `@earendil-works/pi-otel` OTLP/HTTP 导出包，走现有 telemetry contract，属于新的生态扩展方向。

---

## 6. 开发者关注点

- **稳定性与恢复能力**：ESC 停止后卡在 "Working..."（#10031）、`session_shutdown` 不 resolve 时退出无反馈（#9997）、退出后光标隐藏（#10026）——都是需要强制中断才能恢复的体验断裂点。
- **"自动关闭"引发的不满**：#10008 直言 bug 报告被自动关闭、无人真正阅读，并指认 #9566 已存在同样问题；多个高质量 issue 被标记 `no-action` / `not_planned`（如 #10031、#9553、#10006），社区对 triage 流程的信任度存在压力。
- **计费透明性**：开发者不只需要"能跑"，还需要知道"为什么花了这么多"——最便宜供应商定价假设、系统提示头部位移，都会造成难以自查的隐性成本。
- **本地推理的静默长等待**：本地后端可能数分钟无输出，默认 5 分钟 idle timeout 会误杀请求，#6933 正是针对这一常态场景。
- **工具调用边界情况**：模型返回字符串型 offset/limit（#9887）、空签名最终答案（#9918）、重复损坏的 tool call（#9974）——分类器式输入校验仍显不足。
- **类型与依赖维护**：#9965 指出 TypeScript 7 正式版已发布两个月，主张移除 tsgo preview 依赖，反映社区对工具链及时跟进有明确期待。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-25）

## 今日速览

今天社区围绕 **Managed Agent 双路径架构** 集中发力：Issue #12380 的架构提案讨论升温（20 条评论），并配套落地了多个 PR（#12691 Hosted Runtime 基础、#12692 Spring 控制平面与双路径 WebShell、#12698 ACP Bridge 引擎路由）。同时发布 v0.24.5，但 Windows 更新失败、自更新丢失 ripgrep 执行位等安装/打包类问题成为当日新痛点。

---

## 版本发布

**v0.24.5**（正式版）
- 特性：`feat(channels)` 将群组成员访问与 `senderPolicy` 解耦（[#12475](https://github.com/QwenLM/qwen-code/pull/12475)）
- 无已知 Breaking Changes
- 官方 Release Notes 内容较简（Highlights 为空，指向完整变更列表）

**配套版本**
- `v0.24.5-nightly.20260924.ffea2d024e`：含 `feat(sdk-java)` 新增 Hosted Harness 私有客户端（[#12654](https://github.com/QwenLM/qwen-code/pull/12654)）
- `sdk-typescript-v0.1.15`：捆绑 CLI 版本 0.24.5
- `desktop-v0.24.5`：修复 serve 会话创建失败诊断信息保留（[#12331](https://github.com/QwenLM/qwen-code/pull/12331)），并新增 sdk-java managed runtime 相关功能

---

## 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)（OPEN，20 评论）Managed Agent 双路径架构提案**
   定义分阶段 Managed Agent 架构：保留现有 TypeScript agent loop，将模型推理与工具环境供给解耦，赋予 Session 持久所有权。今日多个 PR 直接源于此提案，是本轮架构演进的核心议题。

2. **[#11303](https://github.com/QwenLM/qwen-code/issues/11303)（OPEN，17 评论）Windows 下 conhost.exe 进程泄漏**
   VS Code Companion 内嵌 qwen-cli 泄漏无头 ConPTY 进程，约 12 小时累积 347 个进程 / 约 2.8 GB。P1 级性能/平台问题，Windows 用户体验受损明显。

3. **[#11872](https://github.com/QwenLM/qwen-code/issues/11872)（CLOSED，14 评论）Web Terminal "PTY not available"**
   `@lydell/node-pty` 声明但未打包，macOS 代码签名阻止本地安装的 prebuild。涉及打包与平台分发，已关闭。

4. **[#472](https://github.com/QwenLM/qwen-code/issues/472)（OPEN，13 评论，👍5）`is_background` 属性缺失/非布尔**
   自 #445 合并后持续报错，是列表中唯一获较多点赞的老问题（创建于 2025-08-27），长期未彻底解决。

5. **[#12416](https://github.com/QwenLM/qwen-code/issues/12416)（OPEN，11 评论）Remote-SSH POST /session 全部 EPIPE 失败**
   Companion 0.24.2 下每个会话创建都失败（`BridgeChannelClosedError`），而捆绑 CLI 独立运行正常。远程开发场景的 P1 阻塞问题。

6. **[#8586](https://github.com/QwenLM/qwen-code/issues/8586)（OPEN，10 评论）追踪 activeWork 与后台 Agent 恢复**
   为 daemon 健康检查引入显式 `activeWork` 事实，并为超出前台 prompt 生命周期的后台 Agent 建立恢复路径。

7. **[#8097](https://github.com/QwenLM/qwen-code/issues/8097)（OPEN，9 评论）后台 Agent 协调缺口**
   多个后台 Explore 子 Agent 并发时出现重复工作、过早完成、非交互式 `send_message` 三类协调失败，多 Agent 场景的典型痛点。

8. **[#12683](https://github.com/QwenLM/qwen-code/issues/12683)（CLOSED，P1，4 评论）PreToolUse hook 决策竞态**
   多个 hook 匹配同一工具调用时"最后完成者胜出"，一个 deny 可被另一 hook 的 allow 静默覆盖。涉及安全与权限控制，当日创建当日关闭。

9. **[#12668](https://github.com/QwenLM/qwen-code/issues/12668)（CLOSED，P1，4 评论）自更新丢失 ripgrep 执行位**
   `npm update` 机制安装到 `~/.qwen/updates/...` 后，内置 ripgrep 丢失 execute 位导致 EACCES。当日创建当日关闭的打包类回归。

10. **[#12505](https://github.com/QwenLM/qwen-code/issues/12505)（OPEN，6 评论）Linux 剪贴板图片粘贴静默失败**
     #12489 只覆盖了"未发现工具"路径，仍有三条静默失败链（工具找到但查询失败、原生模块抛错、OpenTUI 渲染器）。

**其他值得留意**：[#12589](https://github.com/QwenLM/qwen-code/issues/12589) 提出 System One 决策门（von-install + `/superfast`），让轻量判断不再唤醒完整 LLM，指向延迟优化方向；[#10603](https://github.com/QwenLM/qwen-code/issues/10603)（CLOSED）ToolSearch 触发全量 prompt 重处理；[#11756](https://github.com/QwenLM/qwen-code/issues/11756)（CLOSED）虚拟化历史在后台 Agent 工作流中触发 React error #185。

---

## 重要 PR 进展

1. **[#12691](https://github.com/QwenLM/qwen-code/pull/12691) feat(serve): 新增受保护的 Hosted Runtime 基础**
   引入 Hosted Runtime 工具契约、provider 基础、Broker HTTP 适配器与本地进程供给地基（拆分自 #12358）。属基础性 PR，尚不提供可运行的 Hosted Harness 闭环。

2. **[#12692](https://github.com/QwenLM/qwen-code/pull/12692) feat(managed-agent): Spring 控制平面与双路径 WebShell**
   拆分出 Spring Managed Agent 控制平面与可选的 Java Managed WebShell 面板，Legacy daemon chat 仍可用，服务端持久化租户级 session/命令/事件。

3. **[#12698](https://github.com/QwenLM/qwen-code/pull/12698) feat(acp-bridge): 在 legacy 与 managed 引擎间路由会话**
   为单一 ACP Bridge 增加可选 Legacy/Managed 通道，由服务端决定引擎选择，共享会话准入与 ID 预留。

4. **[#12183](https://github.com/QwenLM/qwen-code/pull/12183) feat(extensions): 从目录加载部署托管扩展**
   为 CLI 与 daemon 增加 `--managed-extensions <root>`，从根目录直接子目录发现完整扩展并原地读取其贡献，支持全新用户主目录。

5. **[#11799](https://github.com/QwenLM/qwen-code/pull/11799) feat(computer-use): 通过 node_repl 中继让远程会话使用本地桌面**
   让无头 Linux 服务器上的会话借用 Mac 的 `node_repl`、CUA SDK 与嵌入式驱动，经反向工具通道操作桌面。

6. **[#12308](https://github.com/QwenLM/qwen-code/pull/12308) feat(serve): 会话创建时支持模型与推理强度选择**
   外部调用方可通过 `startupConfig: { modelServiceId, reasoningEffort }` 创建普通及独立会话，`modelServiceId` 必填。

7. **[#12492](https://github.com/QwenLM/qwen-code/pull/12492) feat(cli): 由 agent 准备的 Batch API 工作流（/batch-api）**
   用户输入 `/batch-api <task>`，agent 判断任务是否符合批处理形态、抽样文件、撰写小计划并生成确定性后续步骤。

8. **[#12688](https://github.com/QwenLM/qwen-code/pull/12688) feat: 完善 Advisor 咨询行为与使用限制**
   在 #9636 之后补齐 Advisor 行为层，执行器在定位后、实质工作前（含解读、假设、任务声明）收到咨询提醒。

9. **[#12562](https://github.com/QwenLM/qwen-code/pull/12562) fix(core): MCP 服务器在 -32601 后保持连接**
   修复 #12496：新版 JSON-RPC 错误码处理模块使旧式 tools-only MCP 服务器返回 `-32601` 时不再被切为 DISCONNECTED。

10. **[#12540](https://github.com/QwenLM/qwen-code/pull/12540) fix(cli): 关闭 /context 计费遗留问题**
    收尾 #12119 延后至 #12235 的建议项（R1-3 入口 2–5 除外），修正 `/context` 对文本的列举检测等计费逻辑。

**其他**：[#12638](https://github.com/QwenLM/qwen-code/pull/12638)（CLOSED）合并并发扩展状态加载以提升 `/workspace/extensions` 性能；[#12651](https://github.com/QwenLM/qwen-code/pull/12651) 修复 workflow 脚本 meta 声明前有注释时的沙箱 SyntaxError；[#12221](https://github.com/QwenLM/qwen-code/pull/12221) 将 GNU sed 的 `--quiet`/`--silent` 识别为只读；[#12634](https://github.com/QwenLM/qwen-code/pull/12634) 处理 macOS 应用颜色弹层；[#12650](https://github.com/QwenLM/qwen-code/pull/12650) 加固 CI 的 yamllint 回退。

---

## 功能需求趋势

从今日 Issues 可见几个明确方向：

- **多 Agent / 后台 Agent 编排**：涉及数量最多。包括 [#12380](https://github.com/QwenLM/qwen-code/issues/12380) 双路径架构、[#8586](https://github.com/QwenLM/qwen-code/issues/8586) activeWork 与恢复、[#8097](https://github.com/QwenLM/qwen-code/issues/8097) 后台协调缺口、[#11069](https://github.com/QwenLM/qwen-code/issues/11069) 在实时 Agent 名册中显示 Agent Team 队友、[#11756](https://github.com/QwenLM/qwen-code/issues/11756) 后台工作流下的 TUI 崩溃。
- **会话管理与 Web/Desktop 一致性**：[#12619](https://github.com/QwenLM/qwen-code/issues/12619)（Web Shell/Desktop 无法删除当前选中会话）、[#12620](https://github.com/QwenLM/qwen-code/issues/12620)（Live Voice 会话中新建任务失败）、#12606（`/context` 在估算状态下的 Messages 行）。
- **性能与延迟优化**：[#11303](https://github.com/QwenLM/qwen-code/issues/11303) 进程泄漏、[#10603](https://github.com/QwenLM/qwen-code/issues/10603) ToolSearch 全量 prefill、[#12589](https://github.com/QwenLM/qwen-code/issues/12589) System One 决策门。
- **IDE / 编辑器集成**：ACP/Zed 方向的 [#11361](https://github.com/QwenLM/qwen-code/issues/11361)（AskUserQuestion 在 Zed 中仅显示 Raw Input）、VS Code Companion 的 Remote-SSH [#12416](https://github.com/QwenLM/qwen-code/issues/12416)。
- **平台与打包分发**：[#11872](https://github.com/QwenLM/qwen-code/issues/11872)（macOS 签名阻断 PTY prebuild）、[#12668](https://github.com/QwenLM/qwen-code/issues/12668) 与 [#12687](https://github.com/QwenLM/qwen-code/issues/12687)（Windows 更新失败）。

---

## 开发者关注点

1. **安装与自更新可靠性是当日最集中的新痛点**：v0.24.5 发布同时，出现自更新丢失 ripgrep 执行位（[#12668](https://github.com/QwenLM/qwen-code/issues/12668)）和 Windows `/update` 失败（[#12687](https://github.com/QwenLM/qwen-code/issues/12687)），升级路径本身需要更多加固。

2. **Windows 与远程开发体验差距**：ConPTY 进程泄漏（[#11303](https://github.com/QwenLM/qwen-code/issues/11303)）与 Remote-SSH 会话创建全失败（[#12416](https://github.com/QwenLM/qwen-code/issues/12416)）表明平台差异化问题仍突出。

3. **安全与权限语义的确定性**：PreToolUse hook 竞态导致 deny 被静默覆盖（[#12683](https://github.com/QwenLM/qwen-code/issues/12683)），权限聚合逻辑需明确"拒绝优先"语义。

4. **静默失败缺乏反馈**：剪贴板图片粘贴（[#12505](https://github.com/QwenLM/qwen-code/issues/12505)）等多条链路上问题被静默吞掉，开发者需要明确的用户可感知错误。

5. **长期未闭环的老问题**：如 [#472](https://github.com/QwenLM/qwen-code/issues/472) 的 `is_background` 类型问题（创建于 2025-08），虽评论不多但持续有活动，反映兼容性/校验层的技术债。

6. **架构分层正在被主动重构**：Managed Agent 与 Hosted Runtime 相关的提案与 PR 同日密集出现，说明项目正从"单 TS 循环"走向可插拔引擎与持久会话模型，开发者需关注接口与部署形态变化。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-25）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库实际指向 `Hmbown/Codewhale`）

## 1. 今日速览

今日无新版本发布，社区活动集中在 0.10.0 的回归修复与产品审计上：过去 24 小时有 42 条 Issue 更新、50 条 PR 更新。创始人提交的多份审计类 Issue（首次运行体验、后台工作展示、设置交互）暴露出 0.10.0 在可用性与一致性上的短板；同时 Linux 全工作区测试门禁在干净 main 上变红，成为当日最受关注的工程问题。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[CLOSED] #6310 ACP follow-up: empty terminal responses and Full Access discovery**（11 条评论，当日最高）
   ACP 配置/姿态问题已修复，报告者已在 nightly 构建中验证 socket 创建与审批往返，是当日讨论热度最高、且已闭环的问题。
   https://github.com/Hmbown/Codewhale/issues/6310

2. **[OPEN] #6579 test(tui): restore the green Linux full-workspace test gate on main**（当日新增）
   权威 Linux 全工作区 libtest 门禁在干净 `main@8a835d7c` 上变红（无 FEAT-029 改动），属于工程健康度红线问题，已有对应修复 PR。
   https://github.com/Hmbown/Codewhale/issues/6579

3. **[OPEN] #6573 [bug, needs-triage] Multiple TUI Sessions Contend on Subagents Store → CPU Spin-loop**
   多 TUI 会话争用 subagents 存储导致 CPU 空转，影响 0.10.0 (dev) 交互模式，FreeBSD 上观测到，可能跨平台。
   https://github.com/Hmbown/Codewhale/issues/6573

4. **[CLOSED] #6504 [bug] Sub-agents are killed at a 100k per-step input cap and never compact**
   子代理在 deepseek-flash（1M 窗口）下因 `MAX_CHILD_STEP_INPUT_TOKENS` 触顶被杀死且不做压缩，与父代理行为不一致，影响长任务工作流。
   https://github.com/Hmbown/Codewhale/issues/6504

5. **[OPEN] #6566 [bug] First run: new users never see onboarding; first message lost or doubled**
   首次运行审计发现新用户看不到引导、首条消息丢失或重复，provider 选择器与密钥错误提示偏开发者视角，直接关系新用户留存。
   https://github.com/Hmbown/Codewhale/issues/6566

6. **[OPEN] #6565 [bug] Background work: footer step chatter、agent 命名不一致、needs-you 未触达 footer**
   对 15 个后台工作展示面的产品审计，缓存命中率也被默认紧凑模式隐藏，是当日反馈最系统的 UI/UX 问题。
   https://github.com/Hmbown/Codewhale/issues/6565

7. **[OPEN] #6050 [enhancement] Pluggable agent memory: 通用后端接缝，以 causal-memory / mem0 为参考实现**
   指出 `MemoryBackend` 仅有 `Native` / `Off` 两个变体，缺乏第三方可插拔入口，是当日最具架构价值的需求。
   https://github.com/Hmbown/Codewhale/issues/6050

8. **[OPEN] #6564 Settings by conversation: propose-only 设置工具与逐项审批卡**
   创始人提案：用自然语言描述想要的配置，由工具给出具体变更并逐项审批，不直接写入，指向更安全的配置交互范式。
   https://github.com/Hmbown/Codewhale/issues/6564

9. **[OPEN] #6562 Code mode for MCP and plugins: 免重钉发现 + 共享门禁的类型化绑定**
   设计研究引用 Cloudflare Code Mode、Anthropic "code execution with MCP" 等，基于 81 个创始人会话的 token 证据，涉及 MCP 效率优化。
   https://github.com/Hmbown/Codewhale/issues/6562

10. **[CLOSED] #6528 Credential setup: 去除粘贴密钥中的不可见字符，认证错误标明 provider、host 与密钥来源**
    对比 Cline 的配置体验后提出的两项小修复，直接影响密钥配置失败率。
    https://github.com/Hmbown/Codewhale/issues/6528

其他值得留意：#6427（0.10.0 Windows Terminal 多行粘贴按行自提交回归，重开 #5981）、#6560（不可信输入缺少资源限制/DoS 防护）、#6561（本地化与组件加固积压）。

## 4. 重要 PR 进展

1. **#6581 test: restore green Linux full-workspace gate**
   基于干净 upstream main 恢复 Linux 全工作区测试门禁；基线运行报告 12 个 TUI libtest 失败，CI 风格 nextest 报 2 个失败。
   https://github.com/Hmbown/Codewhale/pull/6581

2. **#6576 feat(engine): typed engine owner contract for pet operation activity**
   以类型化 Engine owner 契约替换按工具名索引的宠物活动流，契约不携带工具名、参数、命令或结果（Refs #6184、#6109）。
   https://github.com/Hmbown/Codewhale/pull/6576

3. **#6570 fix(tui): keep user questions open and child progress on its row**
   未答复的 `request_user_input` 默认等待用户作答或取消（与审批一致），子步骤更新占用独立行（Refs #6565、#6003）。
   https://github.com/Hmbown/Codewhale/pull/6570

4. **#6568 [contribution-gate] fix(config): validate setting values against SETTINGS_SCHEMA**
   关闭 #6563，让配置写入按 SETTINGS_SCHEMA 校验，拒绝拼写错误与未知键；维护者在贡献者提交之上补齐合并与编译修复。
   https://github.com/Hmbown/Codewhale/pull/6568

5. **#6577 fix(auto-review): 按动词分类工具、审查删除、从 reviewer 中脱敏凭证**
   Auto-Review 按工具名中的动词分类，将 git 无法恢复的删除送审，并在发送给 reviewer 模型前脱敏凭证（Refs #6467、#6094）。
   https://github.com/Hmbown/Codewhale/pull/6577

6. **#6578 chore: delete dead workflow code, config flags and env twins**
   删除约 2,650 行无引用的 workflow 代码（replay.rs、review_repair.rs、experimental_search.rs）及重复权威配置（Closes #6517、#6516）。
   https://github.com/Hmbown/Codewhale/pull/6578

7. **#6572 feat(plugins): vendor Computer Use 0.12.0 并将目录重钉至 ae3dd22**
   将内置 Computer Use 插件升级到已发布的 v0.12.0（tag 提交 `843569235f15`），替代此前 vendoring 的 `0f54bf6`（Refs #5856）。
   https://github.com/Hmbown/Codewhale/pull/6572

8. **#6575 fix(update): 检测通过 bin 符号链接启动的 Homebrew 安装（macOS）**
   `current_exe()` 返回 `/opt/homebrew/bin/codewhale` 而非 Cellar 文件，导致自更新检测错误（Refs #6094）。
   https://github.com/Hmbown/Codewhale/pull/6575

9. **#6580 feat(runtime-api): fork a thread at a named turn**
   新增 `POST /v1/threads/{id}/fork-at-turn`，在指定用户轮次处分叉线程，保留该轮及之前所有轮次。
   https://github.com/Hmbown/Codewhale/pull/6580

10. **#6571 [CLOSED] fix(telemetry-ingest): PostHog 处理器在 Cloudflare 上从未真正发送**
    传入 `redirect: "error"` 被 Cloudflare Workers 拒绝并静默吞掉异常，导致每次 PostHog 转发静默失败。
    https://github.com/Hmbown/Codewhale/pull/6571

其他：#6574（FAQ 页面与搜索接入 dictionary spine，消除 `isZh` 分支）、#6483（修复 undo 无法回滚 VS Code 客户端保存会话的文件）、#6222（Shoreline TUI 重设计，仍为 Draft）。

## 5. 功能需求趋势

- **Agent 记忆可插拔**：#6050 要求将硬编码的原生记忆改为通用后端接缝，以 causal-memory / mem0 为参考实现。
- **MCP 与插件效率**：#6562 关注免重钉发现、类型化绑定，以及降低 MCP 调用的 token 开销。
- **模型路由与选择**：#6525 提出 `/router` 等交互式路由预设；#6500 报告固定模型与加入 Fleet 失效。
- **配置交互安全化**：#6564 的"会话内设置"提案与 #6563 的配置校验，共同指向受控、可审批的配置变更。
- **多客户端一致性**：#6222 统一 TUI 与 GPUI 调色板，宠物/活动展示（#6109、#6576）跨 Codewhale 各界面共享同一确定性模型。
- **首次运行与本地化**：#6566 首次运行审计覆盖 zh_CN 与多分辨率，#6561 沉淀本地化加固积压。

## 6. 开发者关注点

- **0.10.0 回归密集**：Windows Terminal 多行粘贴按行自提交（#6427，重开 #5981）、会话无法恢复（#6418）、deepseek-flash 图片输入不支持（#6421）均已关闭或正在处理，但短期内回归集中出现。
- **测试门禁不稳**：Linux 全工作区门禁在干净 main 上变红（#6579），且存在 12 个 libtest / 2 个 nextest 失败，直接影响合并信心。
- **资源与并发控制**：#6573 多会话争用导致 CPU 空转，#6560 指出不可信输入缺少资源限制与 DoS 控制，#6504 的子代理 100k 单步上限导致长任务中断。
- **错误提示面向开发者**：#6566、#6528 共同反映 provider 选择、密钥错误与审批卡的可读性不足，粘贴密钥还受 BOM/零宽字符干扰。
- **配置工具过于宽松**：`config set` 静默接受拼写错误与未知键，且 did-you-mean 使用过期键表（#6563）。
- **工程清理与可信度**：删除死代码（#6578）、修复静默失败的遥测（#6571），显示社区在补齐 0.10.0 的功能之外的工程债。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*