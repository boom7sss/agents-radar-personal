# AI CLI 工具社区动态日报 2026-11-06

> 生成时间: 2026-11-06 17:31 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-11-06）

## 1. 生态全景

当前 AI CLI 工具已整体越过"能否运行"阶段，社区讨论重心普遍转向**可信度、成本可控性与安全边界**——"假成功"误报、静默挂起、额度失控、破坏性操作成为跨工具的共性痛点。同日多个工具出现安全/数据风险议题（Claude Code 邮箱经 `User-Agent` 外泄、Codex 破坏 systemd 事故、Gemini CLI 密钥误挂载），说明 agent 权限与数据外泄防护是行业当前的集体短板。各项目密集提交 PR，但主题高度集中于**稳定性修复、上下文/成本治理与审批机制**，而非新功能扩张。生态同时呈现两条演进路线：一条以插件/Provider 标准化扩大可组合性（OpenCode、Pi、Gemini CLI），另一条以架构重构清偿技术债（Qwen Code 统一 agent loop、DeepSeek TUI crate 分解）。

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issues（今日展示/总量） | PR（今日展示/总量） | 最热议题量级 | 状态定性 |
|---|---|---|---|---|---|
| Claude Code | v2.1.319 | 10 条展示 | 1 条（CLOSED，24h 内仅此 1 条） | #107757：631 👍 / 92 评论 | 高热度、PR 稀少 |
| OpenAI Codex | rust-v0.167.0 + 2 个 alpha | 10 条 + 3 条补充 | 15 条（全部 CLOSED，同一 bot 作者） | #59060：548 👍 / 440 评论（已关闭） | 高热度、发布节奏快 |
| Gemini CLI | 无 | 约 20 条（50 条更新中展示） | 10 条 + 4 条补充（50 条更新） | #21409：8 👍 / 8 评论 | 无版本、修复密集 |
| GitHub Copilot CLI | v1.0.106 + v1.0.106-11 | 10 条 + 4 条已关闭 | 1 条（OPEN） | #1972：48 👍 | 中热度、PR 极少 |
| Kimi Code CLI | 无 | 无活动 | 无活动 | — | 静默 |
| OpenCode | process-daemon v0.5.0 | 10 条 + 2 条补充 | 10 条 + 3 条补充 | #59387：23 👍 / 314 评论 | 高热度、站点重构 |
| Pi | 无 | 10 条（48 条更新） | 10 条 + 3 条补充（18 条更新） | #7730：12 👍 / 30 评论 | 清理合并期 |
| Qwen Code | v0.26.9 + 4 项（SDK/桌面/nightly） | 10 条 + 3 条已关闭 | 10 条 + 3 条补充 | #14724：215 评论 | 快速迭代、CI 噪声高 |
| DeepSeek TUI | 无 | 10 条 | 10 条 | #5316：36 评论 | 验收阻塞、架构并行 |

> 说明：各"日报"数据窗口并不统一（部分为 24h 更新、部分为展示 Top10），故 Issues/PR 数仅作相对活跃度参考，不宜横向严格量化比较。Codex PR 评论数在源数据中为 undefined，未列；DeepSeek TUI 的链接指向 `codewhale-hq/Codewhale` 仓库，与数据来源仓库的对应关系源数据未说明。

## 3. 共同关注的功能方向

**① 成本与用量可观测性（覆盖面最广）**
- Claude Code：子代理 1.9 万次 read 耗光额度（#106556）、Opus 重复 cache-read（#107338）、成本暴露到 statusline（#107829）
- Codex：Business Premium 单次请求耗 37% 周额度（#59639）、额度重置失败（#31606）
- OpenCode：免费层 314 评论汇总帖、Go 额度共享与文档不符（#60311）
- Pi：提示缓存未刷新，44 天内发生 789 次重写（PR #11857）
- DeepSeek TUI：token 计量/缓存命中率/每工具 sink（#6011）、驱逐策略经济性为负（#6969）
- Copilot CLI：prompt 缓存 TTL 延长（#5220）、模型判定上下文裁剪（#5362）

**② Agent/Subagent 行为可信度**
- Gemini CLI：达到轮次上限仍报 GOAL 成功（#22323）、无限挂起（#21409）、不主动调用子代理（#21968）
- OpenCode：后台任务提前标记 completed（#48826）、权限 last-match-wins 失效（#62346）
- Claude Code：Read 循环（#106556）
- DeepSeek TUI：Interrupted/Completed 硬编码 `delivered:true` 虚假上报（PR #7228）
- Codex：agent 执行重启破坏系统（#59060）、Guardian 审批多条 PR

**③ 安全护栏与破坏性操作防护**
- Claude Code：密钥文件 hook 被绕过（#94082）、Cowork 误删约 275GB（#106205）、邮箱外泄（#107757）
- Gemini CLI：粘贴文本误挂载 SSH 私钥（PR #30169）、劝阻 `git reset --force`（#22672）
- DeepSeek TUI：请求 `--no-sandbox` 零沙箱模式（#4955）

**④ 会话压缩/恢复与长会话可靠性**
- Claude Code：/compact 产生空 system 消息（#101181）、恢复导致"反压缩"390K→862K（#107157）、同族 #97230/#107178
- Qwen Code：转录快照二次增长、256 MiB 硬编码上限（#13113）、自动压缩致技能越权（#16418）
- Gemini CLI：长会话内存 OOM（PR #30180）、macOS PTY 句柄泄漏（PR #30184）

**⑤ 跨平台一致性（Windows 尤为集中）**
- Codex：durable 任务、浏览器工具、Computer Use、项目丢失、UI 卡死等 Windows 问题占比显著
- Pi：`pi.exec` 无法执行 .cmd（#10616）、进程树终止（#11854）
- DeepSeek TUI：`/undo` Windows 路径（#6970）、中文输入法（#2323）、剪贴板图片（#7217/#7218）
- Gemini CLI：Wayland 失败（#21983）、IME 输入丢音节（PR #30178）
- Copilot CLI：Termux/Bionic libc 不兼容（#3333）

**⑥ 输入体验与 IME**
- Copilot CLI：#1972 以 48 👍 居首，要求可配置提交键解决 CJK 误提交
- DeepSeek TUI：#2323 中文输入法未适配
- Gemini CLI：韩文 IME 末音节丢失修复

**⑦ 插件/Provider 标准化**
- OpenCode：Agent Plugins 规范（#40993，21 👍）、CommandCode 作为 Provider（45 👍）
- Copilot CLI：BYOK Azure / 自定义 Provider 在 server 模式失效（#3679、#5371）
- Pi：provider 默认模型被忽略（#8810）、Groq `developer` 角色 400（#10741）

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 深度 IDE/桌面集成、hook 与权限体系 | 重度专业开发者 | 闭源产品+公开仓库反馈；企业云接入（Bedrock/Vertex/Foundry）区分对待，auto mode 引入服务器端校验 |
| **OpenAI Codex** | Agent command center、后端切换、多端（桌面/Android Remote） | 企业+订阅个人用户 | Rust 实现，Guardian 审批体系、上下文预算、增量工具声明等成本工程；发布节奏最快（正式+alpha 并行） |
| **Gemini CLI** | Subagent 编排、代码库理解（AST 方向） | 开源开发者、Google 生态 | 开源；架构级提案活跃（OS 沙箱、AST 感知工具、统一配置），强调模型原生 bash 亲和性 |
| **GitHub Copilot CLI** | 终端+VS Code 联动、企业 BYOK | GitHub 企业用户 | `/code` 打开 VS Code、Fusion 层级、统一设置面板；强调与 GitHub 生态及 Azure/企业环境对齐 |
| **OpenCode** | 插件生态、Provider 扩展、富可视化输出 | 开源/自托管开发者 | 站点与文档体系重构、Agent Plugins 标准、GUI 内联 `visual` 块；架构上以 process-daemon 分进程 |
| **Pi** | 扩展 SDK、codemode 沙箱 | 扩展开发者、SDK 嵌入方 | 强调可定制性（自定义 preamble、overlay 状态）与文件编码/换行等正确性细节；Provider 兼容性面最广 |
| **Qwen Code** | 统一 agent loop、Managed Agent/外部工作区 | 企业托管场景 | 架构收敛（多界面共用 core agent loop）、ECS 隔离 triage 凭据；CI 门禁体系建设投入大 |
| **DeepSeek TUI** | TUI crate 分解、桥接（WeCom）、本地模型（Ollama） | 中文/本地部署用户、自托管 | Rust 多 crate 架构、诚实上报工程纪律、外部贡献占比高；v0.10.3 多处验收阻塞未闭环 |
| **Kimi Code CLI** | — | — | 今日无活动，无法评估 |

差异化关键结论：**Copilot CLI 与 Claude Code 走"产品+IDE 深度绑定"路线；Gemini CLI、OpenCode、Pi、Qwen Code 走"开源+可扩展/可托管"路线；Codex 与 DeepSeek TUI 在工程治理（审批、验收纪律）上投入突出。**

## 5. 社区热度与成熟度

**社区热度（按最强情绪信号）**
- 第一梯队（数百量级反应）：**Codex**（440 评论/548 👍 的单议题，且是破坏性事故）、**Claude Code**（631 👍/92 评论隐私议题）、**OpenCode**（314 评论免费层汇总帖）
- 第二梯队（数十量级）：**Qwen Code**（CI 自动 Issue 215 评论，属噪声型热度）、**Pi**（48 条 Issue 更新/18 条 PR 更新，清理活跃）、**DeepSeek TUI**（36 评论架构 EPIC）、**Gemini CLI**（评论数普遍个位数，但 agent 体系问题密度高）
- 低热度：**Copilot CLI**（单 PR、单议题 48 👍）、**Kimi Code CLI**（静默）

**成熟度与阶段判断**
- **快速迭代/重构期**：OpenCode（站点整体迁移、文档切换到 /docs、下线邮件收集）、Qwen Code（5 项发布、统一 agent loop、Managed Agent 切片）、Gemini CLI（无版本但 50 条 PR 修复）
- **技术债清偿期**：Claude Code（compact/resume 一致性问题群式爆发，是当前"最需系统性修复的核心路径"）、DeepSeek TUI（4 个 release-blocker 均处"部分修复、原始事故未闭环"）
- **稳定但存可靠性裂缝**：Codex（发布节奏最稳，但 Windows 桌面端问题集中爆发、企业 Azure 审批不可用）
- **热度与 PR 产出不匹配**：Claude Code 与 Copilot CLI 24h 内 PR 极少（分别 1 条且均非 OPEN 修复），与议题热度形成反差，值得关注响应速度。

## 6. 值得关注的趋势信号

**① "假成功"比失败更危险——结果可信度成为新评价维度**
Gemini 将中断上报为 GOAL 成功、OpenCode 后台任务提前 completed、DeepSeek TUI 硬编码 `delivered:true`——三者独立出现同类问题。对开发者的启示：**接入 agent 编排时，不能以 status 字段作为成功判据，需外部校验（如 DeepSeek TUI #6013 goal gates 思路）。**

**② 成本不可观测正在成为采用阻力**
从 Claude Code 的子代理循环、Codex 的单请求 37% 周额度，到 OpenCode 文档与实际的额度口径不符，用户反复表达"不知道钱花在哪里"。**趋势：token 计量、缓存命中率、按工具/按模型的成本分解将成为 CLI 的必备能力**，而非附加功能。

**③ 安全控制"可绕过"是系统性风险而非个别 bug**
hook 被绕过、密钥误挂载、破坏性命令无护栏在多工具同时出现。**建议：对 agent 执行系统级命令一律假设护栏可能失效，采用沙箱/审批双保险（参考 Codex Guardian 审批链路的多条修补）。**

**④ 配置"写了没人读"与平台间行为不一致**
Copilot CLI 的 commandIdentifiers 不生效、Gemini 的 settings.json 被特定 Agent 忽略、Claude Code 的 `permissions.defaultMode` 在桌面端被忽略、Qwen Code 的设置项无人读取。**配置一致性是信任基础，跨平台行为分歧正在累积运维成本。**

**⑤ 插件/Provider 标准化竞赛开始**
OpenCode 推进 agent-plugins.org 规范、Pi 扩展 SDK 定制诉求、Gemini AST 感知工具提案、Copilot BYOK。**对工具选型的参考：优先选择已表态支持厂商中立插件格式的项目，以降低锁定风险。**

**⑥ 长会话可靠性是尚未解决的核心技术债**
压缩/恢复一致性（Claude Code 问题群）、内存与句柄泄漏（Gemini PTY/堆 OOM）、转录快照膨胀（Qwen Code）共同指向同一根因域。**这些问题的复现成本低、修复价值高，是评估各工具工程投入的观察窗口。**

**⑦ 无障碍、国际化、本地化需求抬头**
Pi 屏幕阅读器（#1188）、Gemini 韩文 IME、Copilot 社区提交简体中文 README（#5373）、DeepSeek TUI 中文输入法。**中文开发者群体关注度上升，是本地化投入的早期信号。**

---

*说明：本报告所有数据、议题编号、点赞与评论数、版本号均严格取自用户提供的日报材料，未作补充或推断；跨工具的"总量"因各日报数据窗口不一致，仅用于相对比较。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-06）

> 说明：本次数据中所有 PR 的评论数均为 `undefined`、👍 均为 0，因此"关注度排行"以 Issues 讨论热度、PR 更新活跃度与议题关联度综合判断，并明确标注。所有状态均为 open，无 merged 记录。

---

## 1. 热门 Skills 排行（PR）

| 排名 | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [fix(mcp-builder) #1742](https://github.com/anthropics/skills/pull/1742) | 适配 mcp>=2 的 `streamable_http_client` 重命名与自定义 header 配置 | 关联 Issue #1668；MCP 新版本 API 兼容性 | OPEN（2026-09-08 创建，10-08 更新） |
| 2 | [fix(skill-creator) #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger 评估、修复 Windows 及运行时失败误判 | 评估误报为"未触发"、跨平台稳定性 | OPEN（06-10 创建，09-16 更新） |
| 3 | [Add notion-spec-to-implementation + quantitative-resume-auditor #1245](https://github.com/anthropics/skills/pull/1245) | 将 Notion 规格转为可执行任务；量化简历审计 | 规格→实现的工作流自动化 | OPEN（06-02 创建，10-15 更新） |
| 4 | [Add pyxel skill #525](https://github.com/anthropics/skills/pull/525) | 用 Pyxel 创建/调试/验证复古游戏 | 无头输入驱动运行、逐帧检查 | OPEN（03-05 创建，11-01 更新，跨度长） |
| 5 | [webapp-testing: avoid shell=True #1980](https://github.com/anthropics/skills/pull/1980) | 移除 `with_server.py` 中的 `shell=True` 命令注入风险 | 安全性 | OPEN（10-06 创建，11-01 更新） |
| 6 | [fix(docx): LibreOffice 超时上报为错误 #1792](https://github.com/anthropics/skills/pull/1792) | 超时不再误报成功，并校验输出无修订标记 | 文档处理可靠性 | OPEN（09-19 创建，11-01 更新） |
| 7 | [fix(xlsx): 解析工作表级定义名称与别名 #2019](https://github.com/anthropics/skills/pull/2019) | 修复 `external_links_at_risk` 漏报 | 关联 Issue #2013；表格公式正确性 | OPEN（10-14 创建，11-03 更新） |
| 8 | [feat: proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 合约静态分析与 TON 链上审计凭证 | Web3 场景扩展 | OPEN（09-15 创建，09-16 更新） |

---

## 2. 社区需求趋势（Issues）

- **信任与安全边界**：[Issue #492](https://github.com/anthropics/skills/issues/492)（46 评论，全站最热）——社区 skill 冒充 `anthropic/` 官方命名空间，导致权限误授。
- **组织级协作与分发**：[Issue #228](https://github.com/anthropics/skills/issues/228)（17 评论，👍8）——希望 Claude.ai 支持组织内共享 Skill 库，免去手动下载/上传。
- **技能评估与触发可靠性**：[Issue #556](https://github.com/anthropics/skills/issues/556)（13 评论，👍7）——`run_eval.py` 触发率 0%；[Issue #202](https://github.com/anthropics/skills/issues/202)（CLOSED）要求 skill-creator 从"人类文档"改为"可执行指令"。
- **上下文效率**：[Issue #1329](https://github.com/anthropics/skills/issues/1329) 提出 compact-memory 符号化压缩；[Issue #1487](https://github.com/anthropics/skills/issues/1487) 反映 `claude-api` 单次注入约 156k tokens 挤爆上下文。
- **质量门控与工作流**：[Issue #1385](https://github.com/anthropics/skills/issues/1385) 提出"预任务校准→对抗审查→交付验证"三阶段质量门；[Issue #412](https://github.com/anthropics/skills/issues/412)（CLOSED）提出 agent-governance 安全治理模式。
- **文档与前端细节**：[Issue #2018](https://github.com/anthropics/skills/issues/2018) docx XML 命名空间丢失；[Issue #1868](https://github.com/anthropics/skills/issues/1868) 渐变背景差一插值；[Issue #2064](https://github.com/anthropics/skills/issues/2064) 描述只说"做什么"未说"何时用"。
- **插件去重**：[Issue #189](https://github.com/anthropics/skills/issues/189)（👍9）document-skills 与 example-skills 内容重复占用上下文。

---

## 3. 高潜力待合并 Skills（活跃但未合并）

- **[#1245 notion-spec-to-implementation / quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245)** — 规格转任务的工作流 skill，更新至 10-15，贴合需求趋势。
- **[#1980 webapp-testing 安全修复](https://github.com/anthropics/skills/pull/1980)** 与 **[#1976 元素识别修复](https://github.com/anthropics/skills/pull/1976)**、**[#1975 pptx 参数校验](https://github.com/anthropics/skills/pull/1975)** — 同作者 gerardrecinto 系列小修复，均关联已开 Issue，落地成本低。
- **[#2019 xlsx 定义名称修复](https://github.com/anthropics/skills/pull/2019)** — 10-14 创建、11-03 仍更新，修复 Issue #2013。
- **[#1742 mcp-builder 兼容修复](https://github.com/anthropics/skills/pull/1742)** 与 **[#1681](https://github.com/anthropics/skills/pull/1681)**、**[#1997 skill-creator 修复](https://github.com/anthropics/skills/pull/1997)** — 围绕 skill-creator / mcp-builder 工具链的高频修复。
- **[#2108 README 快照状态说明](https://github.com/anthropics/skills/pull/2108)** — 澄清文档类 skill 的参考状态与同步关系（11-02 新建）。

---

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是**"信任 + 可靠"**——既要防止冒充官方的 Skill 突破权限边界、支持组织级安全分发，也要让评估/触发机制真正可靠、控制上下文开销，而非单纯追求新增 Skill 数量。

---

# Claude Code 社区动态日报（2026-11-06）

## 今日速览
今天最受关注的是隐私问题：Issue #107757 指出 Claude Code 在未获允许的情况下，把用户邮箱写进 `User-Agent` 请求头发送给第三方，获得 631 个 👍，同时该 Issue 有 92 条评论，讨论非常密集。另一个热点是长年累积的日常使用错误反馈（#69044，127 条评论）以及多项与 `/compact`、会话恢复相关的核心 bug。版本方面有一个发布 v2.1.319，调整了自动模式在关闭遥测或功能开关时的安全行为。

## 版本发布
**v2.1.319**
- 变更 auto mode 行为：当遥测（telemetry）或功能开关（feature flag）关闭，或处于 LLM 网关之后时，服务器无法检查的调用会被询问或拒绝，不再回退到内置分类器（built-in classifier）。
- 设置 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 可继续使用内置分类器；Bedrock、Vertex 和 Foundry 不受此变更影响。
- 链接：anthropics/claude-code Release v2.1.319

## 社区热点 Issues
1. **#107757 隐私违规：User-Agent 头泄露邮箱**（bug，macos/tools/security）
   用户称在未授权的情况下，在网页搜索时，其邮箱通过 `User-Agent` 泄露给第三方，收到大量诈骗邮件。631 👍、92 评论，是今日社区反响最强的问题。
   链接：anthropics/claude-code Issue #107757
2. **#69044 长期日常使用的重复性错误汇总**（bug，model）
   一位长期用户用德语系统记录了数月来的重复错误与失败模式。127 条评论，是持续时间最长、讨论最充分的反馈帖。
   链接：anthropics/claude-code Issue #69044
3. **#106556 后台子代理陷入 Read 调用循环**（bug，cost/agents，macos/vscode）
   两个后台子代理为 93 张图片执行了 1.9 万次 read，耗尽套餐额度。涉及成本失控，对重度用户影响直接。
   链接：anthropics/claude-code Issue #106556
4. **#106205 Cowork 在作用域清理中删除约 275 GB**（bug，CRITICAL，windows/security/data-loss）
   标记为 CRITICAL 且涉及数据丢失，属于高严重度问题，虽评论不多但值得警惕。
   链接：anthropics/claude-code Issue #106205
5. **#94082 密钥文件 PreToolUse hook 被绕过**（bug，security/hooks，macos）
   “file changed on disk”通知可绕过阻止读取密钥文件的 hook，导致凭据文件内容进入 transcript。安全控制失效，影响明确。
   链接：anthropics/claude-code Issue #94082
6. **#101181 手动 `/compact` 产生空 system 消息并破坏恢复会话**（bug，has repro，core）
   在 2.1.296 上，compact 后下一轮报 `400 messages.3: system content must contain at least one block`，并提供了复现步骤，可直接定位问题。
   链接：anthropics/claude-code Issue #101181
7. **#107157 Desktop 恢复会话导致会话“反压缩”**（bug，core/desktop，windows）
   resume 通过重新附加已压缩片段重建对话，token 从 390K 涨到 862K。与 #97230、#107178 同属压缩/恢复一致性问题群。
   链接：anthropics/claude-code Issue #107157
8. **#107111 HTTP MCP 合法 tools/list 结果被误判为错误**（bug，has repro，mcp，macos）
   Google 远程 Gmail MCP 服务（协议 2026-07-28）连接成功，但 `/mcp` 显示 “tools fetch failed · connected”，影响 MCP 生态兼容性。
   链接：anthropics/claude-code Issue #107111
9. **#107338 Opus 5 重复读取以重新推导已有答案**（bug，cost/model，linux）
   有用户称 Opus 5 在 Claude Code 中消耗数百万个 cache-read token，反复重新推导仓库里已有的答案，属于成本方面的投诉。
   链接：anthropics/claude-code Issue #107338
10. **#38179 请求原生 Bitbucket 集成**（enhancement，tools/integrations）
    自 3 月创建，持续更新至今，86 👍，反映非 GitHub 用户的集成诉求。
    链接：anthropics/claude-code Issue #38179

## 重要 PR 进展
过去24小时内更新的 PR 仅 1 条，无法凑足 10 条，以下为全部内容：

1. **#107768 [CLOSED] mods: 新增 privacy mod**（作者 poteat）
   在 `mods/privacy` 下公开内置 `privacy` mod 的源码（hook 模块、manifest 与 README），该 mod 拒绝包含敏感信息的 shell 调用；声明“无新增行为”，属于透明度/可审计性改进。与今日 #107757 的隐私争议形成呼应，但该 PR 状态为 CLOSED。
   链接：anthropics/claude-code PR #107768

## 功能需求趋势
- **IDE 与权限集成**：VS Code 无法将 Auto Mode 设为默认（#107899），桌面端忽略 `permissions.defaultMode`（#92394），反映出不同平台之间权限行为不一致是共性诉求。
- **会话压缩与恢复（compact/resume）**：/compact 出错（#101181）、恢复导致反压缩（#107157、#97230、#107178）、按会话开关空闲压缩（#107906），相关请求高度集中，是当前最突出的技术债之一。
- **成本与用量可见性**：子代理循环导致耗光额度（#106556）、Opus 缓存读取成本（#107338）、side agent token/成本暴露到 statusline 或插件（#107829）。
- **集成拓展**：Bitbucket 原生集成（#38179）、私有 GitHub org 仓库连接器缺失（#107294）、HTTP MCP 兼容（#107111）。
- **安全与隐私**：User-Agent 泄露邮箱（#107757）、密钥 hook 绕过（#94082）、Cowork 误删数据（#106205）。

## 开发者关注点
- **隐私与数据外泄是今日最高优先级情绪点**：`User-Agent` 泄露邮箱同时具备高赞和高讨论，用户明确认为这不应由“[设置]”来控制。
- **成本可观测性不足**：后台代理、side agent、Opus 的 token 消耗缺乏隔离视图，用户无法定位钱花在哪里。
- **压缩/恢复机制缺乏一致性**：多个高复现问题（#101181、#107157、#107178、#97230）共同指向 compact 后消息结构与 tool result 处理不当，是当前最需系统性修复的核心路径。
- **安全控制存在绕过风险**：hook 机制在多处被绕过（#94082），影响对 Claude Code 的安全信任。
- **跨平台行为不一致**：权限默认值、遥测属性（#93338）、桌面端状态判断（#102690）在 CLI/桌面/VS Code 间存在差异，增加协作与运维成本。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-06）

## 今日速览

今日社区最受关注的事件是一条被关闭的高危 Issue：Codex CLI 在执行"重启服务器"指令时破坏 systemd 与容器、执行随机脚本，用户称损失超过 1 万美元，该 Issue 获得 440 条评论、548 个赞。版本方面，`rust-v0.167.0` 正式发布，新增 agent command center 与后端切换能力；同时拉取请求大量集中于 Guardian 审批机制、上下文预算与发布流程的稳健性修复。

## 版本发布

**rust-v0.167.0**
- 新增 `codex agents --no-daemon` 打开 agent command center，command center 与 session picker 可标记未读结果（#58238、#58239、#58263、#58264）。
- 支持在终端 session picker 中切换已连接的后端，切换时保留草稿（#58280、#58457）。

**rust-v0.168.0-alpha.7 / alpha.6**：均为预发布版本，数据中未提供具体变更说明。

## 社区热点 Issues

1. **#59060 [已关闭] 指令"重启服务器"导致系统破坏、损失 1 万美元以上**（440 评论 / 548 👍）— 报告者使用 v0.166.0 与 gpt-6-sol medium，称 Codex 摧毁 systemd、容器并运行随机脚本。这是今日讨论量最高的事件，直接关系到 agent 破坏性操作的安全边界。
   https://github.com/openai/codex/issues/59060

2. **#31606 [开放] 额度重置失败且浪费一次重置**（61 评论 / 68 👍）— Pro 用户在 Windows 上使用重置后未生效，属长期未解的计费/额度问题，社区累积关注度高。
   https://github.com/openai/codex/issues/31606

3. **#50428 [开放] Windows 桌面端 durable chat turn/start 与 thread/fork 失败**（41 评论）— `AbsolutePathBuf` 反序列化缺少 base path，导致纯文本提交与同目录 fork 在执行前失败。
   https://github.com/openai/codex/issues/50428

4. **#54989 [开放] Windows 浏览器工具误报"已禁用"**（29 评论）— 设置中 Browser 开关已启用但工具持续报禁用，需重启应用才能恢复。
   https://github.com/openai/codex/issues/54989

5. **#31925 [开放] 恢复 macOS 上的 Option+Space Quick Chat**（22 评论 / 46 👍）— ChatGPT 与 Codex 应用合并后快捷键功能丢失，是用户呼声较高的体验回归。
   https://github.com/openai/codex/issues/31925

6. **#49753 [开放] dot 生成混合 Linux/Windows 工作路径的 Codex 任务**（16 评论）— 本机任务实际变成 durable 任务，后续轮次失败，涉及跨平台路径处理。
   https://github.com/openai/codex/issues/49753

7. **#41708 [开放] Android Remote 消息队列在宿主轮次结束后卡住**（16 评论）— 消息可能丢失或延迟，移动端远程控制可靠性存疑。
   https://github.com/openai/codex/issues/41708

8. **#21928 [开放] Microsoft Foundry/Azure 上自动审批复核失败**（6 评论 / 26 👍）— 因 `codex-auto-review` 不可部署，影响企业 Azure 环境使用自动审批。
   https://github.com/openai/codex/issues/21928

9. **#59639 [开放] Business Premium 单次 Astra Ultra 请求消耗 37% 周额度**（5 评论）— 新报告的额度消耗异常，涉及 Astra Ultra 与 Sol High/Xhigh 模型，值得关注计费透明度。
   https://github.com/openai/codex/issues/59639

10. **#49611 [开放] Windows 更新后切换聊天反复卡死**（6 评论）— 疑与 `cua_node rename_staging` 的 EPERM 重试循环有关，已跨四个构建复现。
    https://github.com/openai/codex/issues/49611

其他值得留意：#59689（移除本地 marketplace 后已安装插件被隐藏但 skill 仍生效）、#59114（Windows Computer Use 原生管道连接失败）、#59895（Windows 更新并切回个人账户后本地项目消失）。

## 重要 PR 进展

今日展示的 15 个 PR 均标记为 CLOSED，作者均为 `copyberry[bot]`，主题集中在 Guardian 审批、上下文预算与发布流程。

1. **#59944** 将 `openai-docs` 收窄到产品问答与首次 API 接入，跳过既有集成相关问题。
   https://github.com/openai/codex/pull/59944

2. **#59933** 对需要自动审查的受保护模型，在启动降级时改用权限配置文件判断。
   https://github.com/openai/codex/pull/59933

3. **#59928** 改进侧边栏会话选择与标签悬停高亮，改用配置化的列表绑定替代硬编码按键。
   https://github.com/openai/codex/pull/59928

4. **#59914** 将 Guardian Decisions 请求绑定到其凭据来源，避免登录变更后仍使用旧密钥。
   https://github.com/openai/codex/pull/59914

5. **#59913** 从被审查线程的 catalog 解析 Guardian 策略，修复异步分类误用启动 catalog 的问题。
   https://github.com/openai/codex/pull/59913

6. **#59910** 将文件变更审批取消限定在发起轮次，防止延迟取消打断后续轮次。
   https://github.com/openai/codex/pull/59910

7. **#59908** 估算 original-detail 图像上下文时只读取尺寸，不再完整解码图像以节省内存。
   https://github.com/openai/codex/pull/59908

8. **#59905** 校验 Guardian Decisions 的隐式 API key，排除空值、含空白及 FedRAMP 密钥。
   https://github.com/openai/codex/pull/59905

9. **#59903 / #59887** 按 release ID 删除未完成的预发布，并在资源上传失败后清理不完整预发布，避免标签复用误删或阻塞重跑。
   https://github.com/openai/codex/pull/59903 ｜ https://github.com/openai/codex/pull/59887

10. **#59893 / #59832** 切换模型时重新计算审批复核者；为常规 OpenAI Responses 增加可选的增量工具声明，不再每次发送完整工具目录。
    https://github.com/openai/codex/pull/59893 ｜ https://github.com/openai/codex/pull/59832

另有 #59902（弹性预算下保持问答记录完整）、#59891（限制 REPL 溯源成本）、#59842（在最终答案消息上携带定向审核结果）等上下文/审核相关修复。

## 功能需求趋势

- **平台稳定性与跨平台一致性**：Windows 相关 Issue 占比显著，涵盖 durable 任务、浏览器工具、Computer Use、本地项目丢失、UI 卡死等；Linux 桌面端与 WSL 扩展也有输入与超时问题。
- **额度与计费透明度**：重置失败（#31606、#34249）与异常额度消耗（#59639、#48369）反复出现，涉及 Pro、Business、Business Premium 多档订阅。
- **远程与多端协同**：Android Remote 消息队列、终端 session picker 后端切换、跨设备连接可靠性受到关注。
- **企业/自托管接入**：Azure/Foundry 自动审批不可用（#21928）以及 FedRAMP 密钥处理相关 PR，显示企业部署路径仍需完善。
- **可访问性与桌面体验**：Read Aloud（#20957）、Quick Chat 快捷键恢复（#31925）等体验类需求有稳定支持度。
- **Agent 安全边界**：今日最高热度 Issue 指向破坏性操作与审批机制，与多条 Guardian 审批相关 PR 形成呼应。

## 开发者关注点

- **破坏性操作的防护缺口**：高赞 Issue #59060 反映出对 agent 执行系统级命令（重启、容器、脚本）时缺乏有效约束的强烈担忧。
- **Windows 桌面端可靠性是当前最大痛点**：更新后项目丢失、聊天卡死、路径混合、Computer Use 管道失败等问题集中爆发。
- **审批与权限模型的行为一致性**：多个 PR 围绕审批取消、复核者重算、权限配置文件，说明该链路存在边界情况缺陷。
- **上下文与成本控制**：增量工具声明、图像尺寸估算、弹性预算下的记录完整性等 PR，说明团队在压缩请求成本与上下文占用。
- **长期未闭环的 Issue**：#31606（7 月创建）、#31925（7 月创建）、#21928（5 月创建）持续更新，社区对历史问题修复节奏有所期待。

---
*说明：以上内容严格依据所提供的 GitHub 数据整理；PR 评论数字段在数据中为 undefined，故未列评论数。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-06）

## 1. 今日速览

过去24小时无新版本发布，但社区讨论高度集中于 **Subagent/Agent 体系的可靠性问题**：误报成功、无限挂起、超时等待、配置失效等多条 P1/P2 Issue 同时处于"待重测"状态。PR 侧则以**稳定性与资源泄漏修复**为主，覆盖 macOS PTY 句柄泄漏、长会话内存溢出、网络故障静默挂起和密钥误挂载等安全相关问题。

---

## 2. 版本发布

过去24小时内无新 Release。

---

## 3. 社区热点 Issues（10 条）

**① #22323 [P1] Subagent 达到最大轮次后被误报为 GOAL 成功** 👍2 · 评论13
`codebase_investigator` 在未做任何分析即触及轮次上限时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。这是今日评论最多的 Issue，属于**结果可信度**问题——误报成功会让上层编排逻辑做出错误决策，重要性高于普通 bug。
https://github.com/google-gemini/gemini-cli/issues/22323

**② #21409 [P1] Generalist agent 无限挂起** 👍8 · 评论8
只要 CLI 移交到 generalist agent 就会永久挂起，连创建文件夹这类简单操作也不例外，用户等待一小时后才取消。**本批 Issue 中点赞最高**，反映子代理调度链路的严重阻塞，直接影响可用性。
https://github.com/google-gemini/gemini-cli/issues/21409

**③ #19873 [P2] 利用模型的 bash 亲和性：零依赖 OS 沙箱与执行后意图路由** 👍1 · 评论9
提出 Gemini 3 模型天然以 bash 用户方式工作（链式调用 `grep`/`sed`/`awk`），主张通过操作系统级沙箱释放这一原生能力。这是少见的**架构级方向性提案**，评论数仅次于榜首，值得关注其对工具设计路线的影响。
https://github.com/google-gemini/gemini-cli/issues/19873

**④ #21968 [P2] Gemini 不主动使用 skills 和 sub-agents** 👍0 · 评论7
用户反馈：除非显式指令，模型几乎不会在相关场景自行调用自定义 skill 或子代理。与 #22323、#21409 共同指向**代理自主性问题**——即使基础能力就绪，模型也不会主动启用。
https://github.com/google-gemini/gemini-cli/issues/21968

**⑤ #22745 [P2] 评估 AST 感知的文件读取、搜索与代码映射** 👍1 · 评论7
EPIC 议题，探索 AST 感知工具能否以单次调用精确获取方法边界、减少交互轮次。这是对 `codebase_investigator` 效率问题的**系统性改进方向**，与 #22746 联动。
https://github.com/google-gemini/gemini-cli/issues/22745

**⑥ #22267 [P2] Browser Agent 忽略 settings.json 覆盖配置（如 maxTurns）** 👍0 · 评论5
Browser Agent 完全无视全局/项目级 `settings.json` 中的覆盖项，而 `AgentRegistry` 侧正常。属于**配置系统一致性缺陷**，会使用户调优手段失效。
https://github.com/google-gemini/gemini-cli/issues/22267

**⑦ #21983 [P1] browser subagent 在 Wayland 下失败** 👍1 · 评论4
Linux Wayland 环境下浏览器子代理直接失败。**平台兼容性**问题，影响面明确且优先级高。
https://github.com/google-gemini/gemini-cli/issues/21983

**⑧ #24246 [P2] 工具数超过 128 个时触发 400 错误** 👍0 · 评论3
工具数量过多时请求报 400（正文提及超过 400 个工具）。期望代理能更智能地按启用范围裁剪工具。涉及**大规模扩展场景下的上下文管理**。
https://github.com/google-gemini/gemini-cli/issues/24246

**⑨ #22672 [P2] 代理应阻止/劝退破坏性操作** 👍1 · 评论3
模型在复杂 git 操作中会使用 `git reset` 或 `--force`，而存在更安全的替代方案。属于**安全护栏**类需求，由维护者提出。
https://github.com/google-gemini/gemini-cli/issues/22672

**⑩ #22186 [P1] get-shit-done 输出钩子导致崩溃** 👍0 · 评论3
输出摘要即将打印完成时 CLI 崩溃。**P1 级稳定性缺陷**，且触发路径固定、可复现性较高。
https://github.com/google-gemini/gemini-cli/issues/22186

> 其他值得一提：#20079（`~/.gemini/agents/` 下符号链接不被识别为 agent）、#23571（模型在随机目录生成临时脚本污染工作区）、#22598（建议通过 `/chat share` 暴露子代理轨迹以便评审）。

---

## 4. 重要 PR 进展（10 条）

**① #30169 [P1/security] 阻止粘贴文本与模糊 `@` 匹配误挂载密钥**
修复 #26730：粘贴的 shell 记录可能让 CLI 在未询问的情况下把 SSH 私钥随请求发送给模型。PR 双侧封堵——粘贴文本默认惰性化，并限制模糊匹配。**安全优先级最高**。
https://github.com/google-gemini/gemini-cli/pull/30169

**② #30170 [P1/agent] 停止本地子代理在模型调用卡死时空等整个截止时间**
修复 #29257：单次模型调用卡住时，`cli_help` 会耗尽全部 3 分钟 `maxTimeMinutes` 再额外等 60 秒恢复轮次。新增可选的单次超时控制。**直接回应今日最热的挂起类痛点**。
https://github.com/google-gemini/gemini-cli/pull/30170

**③ #30185 [P1] 防止 Shell 模式内递归启动交互式 gemini 会话**
在 `!` Shell 模式及 `[Shell]` 工具中阻止嵌套生成交互式 `gemini` 进程。属于**递归调用防护**类修复。
https://github.com/google-gemini/gemini-cli/pull/30185

**④ #30184 [core] 修复 macOS PTY spawn 泄漏的 `/dev/ptmx` master 句柄**
使用稳定版 `@lydell/node-pty`（1.1.0）时，命令结束后 PTY master FD 未释放，长时间会话会导致 `kern.tty.ptmx_max` 耗尽。**资源泄漏型长会话稳定性问题**。
https://github.com/google-gemini/gemini-cli/pull/30184

**⑤ #30180 [core] 限制多段工具输出并对旧多模态 inlineData 做淘汰**
修复长时间代理会话反复读取多文件时触发的 V8 老生代堆 OOM（`Reached heap limit`）。**内存上限治理**，对 `read_many_files` 类场景尤为关键。
https://github.com/google-gemini/gemini-cli/pull/30180

**⑥ #30182 [core] 网络失败时避免静默数分钟加载挂起**
当请求遇到网络超时、路由不可达、TLS 拦截或 `ALL_PROXY` 异常时，CLI 不再长时间停在加载动画且无任何错误信息。**可观测性 + 防挂起**。
https://github.com/google-gemini/gemini-cli/pull/30182

**⑦ #30183 [core] 允许在所有认证模式下覆盖 60 秒 API 响应头超时**
新增 `model.requestTimeoutMs` / `GEMINI_API_HEADERS_TIMEOUT_MS`，修复长思考请求（如大上下文下 `thinkingLevel: HIGH`）超过 60 秒返回响应头即被 `UND_ERR_HEADERS_TIMEOUT` 丢弃的问题。与 #30082 为同一问题的两条并行方案。
https://github.com/google-gemini/gemini-cli/pull/30183

**⑧ #30082 [core] 新增 `model.requestTimeoutMs` 设置项**
说明当前 60 秒超时只能通过 `DEFAULT_REQUEST_TIMEOUT` 实验开关修改，而该开关在 Vertex AI / API Key 认证下从不拉取——**填补配置盲区**。与 #30183 建议合并评估。
https://github.com/google-gemini/gemini-cli/pull/30082

**⑨ #30159 [P2/extensions] 注册 `gemini-2.5-flash-image`（Nano Banana）模型配置**
修复 #28445：模型注册表中原本没有内置图像生成模型，导致该模型无法在 CLI 中选择。**新模型支持**类改动。
https://github.com/google-gemini/gemini-cli/pull/30159

**⑩ #30178 [cli] IME 提交与 Enter 同 tick 到达时提交完整文本**
修复韩文（Hangul）场景下 Enter 紧随输入法组合提交时丢失末音节（如 `테스트` 变 `테스`）。**国际化输入体验**修复。
https://github.com/google-gemini/gemini-cli/pull/30178

> 其他：#30181（替换 barrel 导入削减 VSCode 扩展包体积、消除冗余 `setContext` 调用）、#30176（认证重启后保留 `--worktree` 选择）、#30117（headless CLI 错误载荷归一化）、#30162（修复 eval-pr 工作流的 zizmor 模板注入告警）。

---

## 5. 功能需求趋势

从本批 Issue 的标签与主题分布看，社区关注方向高度收敛：

1. **Agent / Subagent 体系成熟度（绝对主线）**：20 条热点 Issue 中约 14 条带 `area/agent` 标签。焦点从"能否运行"转向"结果是否可信、行为是否自主、超时是否可控"，包括误报成功、随机挂起、不主动调用子代理、配置被忽略等。
2. **代码库理解效率**：AST 感知读取/搜索/映射（#22745、#22746）被视为减少交互轮次、改进 `codebase_investigator` 的关键路径。
3. **安全与破坏性操作护栏**：密钥误挂载、`git reset --force` 等危险命令的劝退（#22672、PR #30169）。
4. **平台兼容性**：Wayland 支持（#21983）、macOS PTY（PR #30184）、IME 输入（PR #30178）。
5. **新模型接入**：图像生成模型注册（PR #30159）；结合 #19873 来看，对 Gemini 3 原生 bash 工作方式的适配也被提上议程。
6. **长会话资源治理**：内存上限、文件句柄、请求超时三类"慢性"资源问题集中出现。

---

## 6. 开发者关注点

- **"假成功"比失败更危险**：#22323 暴露的语义错误——中断被上报为 GOAL 成功——会污染上游编排与评测结果，开发者要求终止原因必须如实反映。
- **挂起/超时是首要体验痛点**：#21409（无限挂起）、#22186（输出阶段崩溃）、PR #30170/#30182 共同表明，用户对"无输出、无错误、只能等待"的静默卡死容忍度极低。
- **配置应处处生效**：#22267 反映的 `settings.json` 被特定 Agent 忽略，以及 #30082 指出的 `DEFAULT_REQUEST_TIMEOUT` 在部分认证模式下从不加载，说明配置一致性仍是信任基础。
- **代理自主性不足**：#21968 显示即使用户配置了 skills 与子代理，模型也不会在相关场景主动启用，需显式指令——这削弱了自定义扩展的实际价值。
- **工作区污染**：#23571 中模型在随机目录生成临时脚本，影响干净提交，开发者期望更收敛的文件写入行为。
- **可调试性诉求**：#22598 提议通过 `/chat share` 暴露子代理轨迹，反映子代理内部行为当前难以观察和评估。

---

*数据窗口：2026-11-06 更新的 Issues（50 条，展示 20 条）与 PRs（50 条，展示 15 条）；Releases 无更新。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-06）

> 数据来源：github.com/github/copilot-cli。今日仅提供 1 条新增 PR 数据，因此“重要 PR 进展”部分只覆盖该条，不补足至 10 条。

## 1. 今日速览

今日发布 v1.0.106 及预发布版 v1.0.106-11，新增 `/code` 命令可将当前会话在 VS Code 中打开，并引入 Fusion 层级配置与“全局搜索”式的统一设置面板。社区侧最集中的反馈仍是输入体验（Shift+Enter、IME 误提交），同时 BYOK/Azure 自定义模型在服务器模式下的失效与限流问题成为新焦点。

## 2. 版本发布

**v1.0.106**（2026-11-05）[链接](https://github.com/github/copilot-cli/releases)
- 新增 `/code` 命令：将当前会话在 VS Code 中打开。
- 在 `copilot config` 中新增 Fusion 层级（tier）设置。
- `/settings` 对所有用户开放统一仪表盘，并支持在设置与本地资源之间全局搜索。
- Rex 终端使用 Kitty direct placements 渲染内联图片。

**v1.0.106-11**（预发布）
- 修复：用 Ctrl+U/Ctrl+K/Ctrl+W 移除或被历史召回替换的图片，不再随消息发送；此后可用 Ctrl+S 暂存提示词。
- 修复：粘贴含 NEL 或 Unicode 行/段分隔符的文本时，正确填充为独立的提示词行。

## 3. 社区热点 Issues

1. **[#2776] Shift+Enter 提交而非换行**（OPEN，9 条评论，👍5）——最活跃的输入类问题，影响所有期望多行输入的用户。[链接](https://github.com/github/copilot-cli/issues/2776)
2. **[#1972] 允许自定义提交键（如 Ctrl+Enter），解决 IME 误提交**（OPEN，4 条评论，👍**48**）——今日点赞最高，直击 CJK 输入法“回车确认候选词触发提交”的核心痛点。[链接](https://github.com/github/copilot-cli/issues/1972)
3. **[#3333] Android/Termux 支持自 v1.0.48 起损坏**（OPEN，6 条评论，👍5）——原生 Rust 插件 `runtime.node` 依赖 glibc，与 Termux 的 Bionic libc 不兼容。[链接](https://github.com/github/copilot-cli/issues/3333)
4. **[#3679] BYOK Azure OpenAI 429 限流瞬间耗尽重试、无有效退避**（OPEN，3 条评论）——约 0.15s 内用尽 5 次重试，且重试次数/等待不可配置，企业用户受影响明显。[链接](https://github.com/github/copilot-cli/issues/3679)
5. **[#5220] Claude 模型 1 小时 prompt 缓存 TTL 选项**（OPEN，2 条评论，👍9）——默认 5 分钟缓存会在正常交互阅读/思考间隙过期，提升成本与延迟。[链接](https://github.com/github/copilot-cli/issues/5220)
6. **[#5279] 终端集成需要权威的前台会话切换钩子（含热恢复）**（OPEN，3 条评论）——终端集成需将窗格关联到“当前前台”对话，而 `sessionStart` 钩子无法完整覆盖。[链接](https://github.com/github/copilot-cli/issues/5279)
7. **[#4150] permissions-config 中含空格的 commandIdentifiers 仍需审批**（OPEN，2 条评论，👍3）——按官方文档示例配置 `"make fix"` 自动放行但不生效。[链接](https://github.com/github/copilot-cli/issues/4150)
8. **[#5362] 允许模型将无用工具结果替换为单行摘要（模型判定的上下文裁剪）**（OPEN，2 条评论，2026-11-05 新建）——聚焦上下文成本与信噪比。[链接](https://github.com/github/copilot-cli/issues/5362)
9. **[#5370] Fusion/Auto 模式下长时间后台 shell 命令导致代理输出被扣留至下一轮**（OPEN，triage，2026-11-06 新建）——新版 Fusion 相关的用户可见“卡住”问题。[链接](https://github.com/github/copilot-cli/issues/5370)
10. **[#5371] 自定义模型提供方在 `--host-environment` 与 `--server` 模式下被忽略**（OPEN，triage，2026-11-06 新建）——BYOK 在交互 TUI 与 `-p` 模式可用，但服务器/宿主环境模式失效，关系到自动化集成场景。[链接](https://github.com/github/copilot-cli/issues/5371)

**其他已关闭（CLOSED）值得留意**：
- [#4845] 会话长期卡在 “In use” 状态（已关闭）。[链接](https://github.com/github/copilot-cli/issues/4845)
- [#5265] 并发进程下命令历史 last-writer-wins 导致提示词被覆盖（已关闭）。[链接](https://github.com/github/copilot-cli/issues/5265)
- [#4943] `ask_user` 表单中 Esc 静默丢弃整个表单而非清空输入（已关闭）。[链接](https://github.com/github/copilot-cli/issues/4943)
- [#2731] `@` 文件补全在含空格路径下失效（已关闭）。[链接](https://github.com/github/copilot-cli/issues/2731)

## 4. 重要 PR 进展

1. **[#5373] 新增简体中文 Copilot CLI README**（OPEN，2026-11-06）——添加简体中文翻译版 README，并在两版 README 间加入中英文导航链接，保留命令、配置键、产品名与上游文档链接。[链接](https://github.com/github/copilot-cli/pull/5373)

> 注：过去 24 小时内仅此 1 条 PR 更新，无可补充条目。

## 5. 功能需求趋势

- **输入体验与键盘可配置性**：Shift+Enter 换行（#2776、#3768）、可配置提交键以适配 IME（#1972）——多个独立 Issue 指向同一方向。
- **模型与成本控制**：Claude prompt 缓存 TTL 延长（#5220）、模型判定的上下文裁剪（#5362），反映对推理成本与上下文管理的关注。
- **自定义/BYOK 模型支持**：Azure OpenAI 限流退避（#3679）、自定义提供方在 server/宿主环境失效（#5371）。
- **插件与钩子系统**：前台会话切换钩子（#5279）、面向助手的展示型钩子（#5099）、桌面端渲染 `postToolUse` 消息（#5374）。
- **跨平台与安装**：Android/Termux 兼容性（#3333）。
- **配置系统可靠性**：含空格命令标识符（#4150）、企业环境下的沙箱策略更新错误（#5360）。

## 6. 开发者关注点

- **键盘与输入行为不一致是最高频痛点**：回车/Shift+Enter/Esc 的语义在不同场景（提示输入、表单、IME）下不统一，且不可配置；#1972 以 48 个赞成为今日最受支持的诉求。
- **网络/限流健壮性**：Azure OpenAI 429 无有效退避，开发者期望可配置的重试次数与等待时间。
- **BYOK 与自动化模式的一致性**：自定义模型在交互模式可用、在 `--server`/`--host-environment` 模式被忽略，影响 CI 与集成部署。
- **会话与状态管理**：会话卡在 “In use”、并发进程覆盖历史文件等已修复问题，说明多进程/多会话场景仍是稳定性薄弱环节。
- **平台可移植性**：Termux 等非 glibc 环境因原生 Rust 插件被排除在外。
- **本地化需求**：社区提交简体中文 README PR（#5373），显示中文开发者群体关注度上升。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-06

## 今日速览

今天的主线是官网与文档体系的重构：V2 文档被切换到 `/docs`，旧站点、旧域名绑定和旧 changelog 服务被陆续移除，订阅邮件收集功能也一并下线。与此同时，免费额度（Free tier）相关的用户反馈继续占据社区讨论热度榜首，单条主 Issue 的评论数已达 314。子代理（subagent）权限、模型解析和后台任务状态方面仍有多个新缺陷被报告。

## 版本发布

- **process-daemon v0.5.0**（协议版本 8）：来自 `packages/process-daemon`，以 `@opencode/pty@0.5.0` 发布到 npm。
  链接：anomalyco/opencode Releases

## 社区热点 Issues

1. **#59387 [OPEN] Free tier 问题统一汇总帖**（314 评论，👍23）
   免费额度问题的主 Issue，集中收集"Free usage exceeded / limit reached / 今日免费消息已用完"等提示。评论量远超其他任何条目，说明免费层体验是当前社区情绪的最大来源。
   链接：anomalyco/opencode Issue #59387

2. **#48826 [OPEN] [reproduced] V2 子代理后台任务提前标记完成**（12 评论）
   使用 `background: true` 的 task/shell 仍在运行时，子代理已向父会话报告 `completed`，结果永远无人收集。涉及 V2 并发模型的正确性，已被复现。
   链接：anomalyco/opencode Issue #48826

3. **#40993 [OPEN] [FEATURE] 支持 Agent Plugins 标准**（13 评论，👍21）
   请求支持 agent-plugins.org 这一厂商中立的插件打包规范，可将 Agent Skills 与 MCP server 打包为可移植插件。这是插件生态标准化方向的高赞需求。
   链接：anomalyco/opencode Issue #40993

4. **#59759 [OPEN] TUI：服务端存在待答问题但选择器不显示**（7 评论）
   原生 question 工具阻塞等待输入，TUI 只显示"Asked 1 question"却不渲染问题与选项；通过只读 API 轮询确认表单确实存在于服务端。属于会导致会话卡死的交互缺陷。
   链接：anomalyco/opencode Issue #59759

5. **#62337 [OPEN] 子代理 spawn 报 "Model not found"**（5 评论，2026-11-06 新建）
   模型在 OpenCode 自身目录中标记为 active、且在 provider 的 `models` 块中显式声明，仍无法 spawn；换绑其他模型则正常。影响多模型工作流。
   链接：anomalyco/opencode Issue #62337

6. **#60311 [OPEN] [reproduced] 文档称 Go 额度按模型计，实际为全模型共享**（4 评论）
   5 小时滚动、每周、每月限额实为所有付费模型共用一个池，与文档描述不符。对重度用户的使用规划影响直接。
   链接：anomalyco/opencode Issue #60311

7. **#60839 [OPEN] [reproduced] TUI 在系统睡眠唤醒后回到起始页**（3 评论）
   会话仍在运行、历史完好，但窗口丢失了正在展示的会话。长时间任务场景下的可用性问题。
   链接：anomalyco/opencode Issue #60839

8. **#62346 [OPEN] 子代理会话不遵守 frontmatter 权限的"最后匹配优先"**（3 评论）
   子代理拒绝执行前端 frontmatter 明确允许的 `edit`/`write`：当 deny-all 规则位于路径级 allow 规则之前时，文档约定的 last-match-wins 未被遵循。
   链接：anomalyco/opencode Issue #62346

9. **#62258 [OPEN] [FEATURE] 对话中的生成式可视化**（4 评论）
   指出桌面端对话仍以文本为主，请求支持内联可视化表达（对应下方 PR #62287）。反映社区对富交互输出层的兴趣。
   链接：anomalyco/opencode Issue #62258

10. **#62324 [OPEN] [FEATURE] Plugin API：session.synthetic 的原子化"仅在空闲时唤醒"**（2 评论）
    插件向用户会话投递短通知的场景，需要原子的"仅空闲时唤醒"语义，避免打断正在进行的会话。属于插件 API 精细化需求。
    链接：anomalyco/opencode Issue #62324

> 另注：#62338（CommandCode 作为 Provider，👍45）与 #52958（意大利用户所有支付方式被拒，已关闭）虽不在今日评论前列，但分别代表高赞的 Provider 扩展诉求与付费流程阻塞问题。
> 链接：anomalyco/opencode Issue #26338 ・ Issue #52958

## 重要 PR 进展

1. **#62389 [OPEN] feat(site): 在 /docs 提供 V2 文档**
   将 opencode.ai/docs 切换为 V2 文档。文档入口迁移的关键一步。
   链接：anomalyco/opencode PR #62389

2. **#62388 [CLOSED] chore(console): 移除旧 opencode.ai 站点**
   新站点（`services/site`）已接管 opencode.ai 与 dev.opencode.ai，删除 `packages/console/app` 及其 SST Worker。
   链接：anomalyco/opencode PR #62388

3. **#62381 [CLOSED] fix(console): 旧 Console 不再管理 opencode.ai 自定义域名**
   旧 Console Worker 仍声明 `domain` 导致 SST 保留自定义域名；本次取消 production/dev 的 domain 绑定，个人 stage 保留。
   链接：anomalyco/opencode PR #62381

4. **#62382 [CLOSED] chore(changelog): 移除已退役的 changelog 服务**
   站点现已承接 /changelog，旧的 opencode-changelog Worker 已删除，同时移除会自动重建该 Worker 路由的部署工作流。
   链接：anomalyco/opencode PR #62382

5. **#62387 / #62390 [CLOSED] 下线邮件订阅收集**
    前者移除首页的邮箱注册、隐私区块与 Claude Code 提及；后者移除 opencode.ai/data 上最后一处注册入口，官方表示"不再收集邮箱地址"。
    （注：#62385 同日曾新增 OpenSend 投递，随后即被上述清理覆盖。）
    链接：anomalyco/opencode PR #62387 ・ PR #62390

6. **#62379 [CLOSED] release: 站点配色修复（dev → production）**
    修复 CSS 压缩器降级 `light-dark()` 导致暗色卡片仍使用亮色 token 的问题（卡片标题过暗、轮播按钮发黑）。
    ���接：anomalyco/opencode PR #62379

7. **#62386 [CLOSED] [contributor] fix(core): 模型调用前等待 MCP 启动上限设为 2 秒**
    为仍处于启动中的 MCP server 设置等待上限，避免模型调用被 MCP 启动阻塞。是 #62019 的后续。
    链接：anomalyco/opencode PR #62386

8. **#60559 [OPEN] fix: 直连请求保留 base URL 路径前缀**
    修复 `--server http://host/prefix` 场景下路径前缀丢失的问题（Closes #60542），是 #50428 客户端生成修复的延伸。
    链接：anomalyco/opencode PR #60559

9. **#61624 [OPEN] feat: 通过 --base-path 在 URL 路径前缀下提供服务**
    依赖 #60559，在其合并前保持 draft 状态（Closes #7624）。面向反向代理/子路径部署场景。
    链接：anomalyco/opencode PR #61624

10. **#62287 [OPEN] [needs:compliance] feat(gui-plugins): 内联可视化图表**
    引入围栏式 `visual` 块与小型 JSON spec，由类型化 registry 解析并使用宿主主题 token 渲染，首个 renderer 为 `plot`。对应 Issue #62258。
    链接：anomalyco/opencode PR #62287

> 其他：#62383 在 `OPENCODE_CONFIG_DIR` 覆盖用户级配置时增加警告（Fixes #32825）；#62391 在生态文档插件表中新增 rzv-opencode-plugin；#60957 为机器人自动更新 nix node_modules 哈希。
> 链接：anomalyco/opencode PR #62383 ・ PR #62391 ・ PR #60957

## 功能需求趋势

- **插件与生态标准化**：Agent Plugins 规范支持（#40993，👍21）、插件 API 原子语义（#62324）、生态插件收录（#62391）、GUI 内联可视化（#62258 / #62287）。插件体系正从"能用"走向"可组合、可移植"。
- **新 Provider / 模型接入**：CommandCode 作为 Provider（#26338，👍45）为今日最高赞需求；同时 #62337 显示现有 provider 的模型声明与解析存在一致性问题。
- **部署灵活性**：`--base-path` 与 base URL 路径前缀修复（#61624 / #60559）回应子路径部署需求。
- **交互与呈现层**：TUI/桌面端体验类需求集中在问答选择器（#59759）、睡眠唤醒恢复（#60839）、系统主题跟随（#61925）和富可视化（#62258）。
- **历史会话完整性**：旧 Issue #23346（已关闭）要求 `/timeline` 加载全部会话消息，而非仅加载内存中的数据，反映长会话检索诉求。

## 开发者关注点

- **免费层与计费透明度是首要痛点**：314 条评论的汇总帖、重置时间"每日前移"、Go 额度共享与文档不符（#60311），以及意大利用户全部支付方式被拒（#52958），构成同一主题的多个侧面——额度规则与付费路径需要更清晰的说明与更可靠的实现。
- **V2 子代理语义仍不稳**：后台任务提前完成（#48826）、模型解析失败（#62337）、权限 last-match-wins 失效（#62346）三项均集中在子代理生命周期与权限模型上，是当前最集中的正确性风险区。
- **TUI/桌面端状态一致性**：服务端有状态但界面不呈现（#59759）、唤醒后丢失会话视图（#60839）、主题切换闪烁（#61925），指向客户端与服务端状态同步的薄弱环节。
- **启动与响应延迟**：MCP 启动阻塞模型调用（PR #62386 已将等待上限设为 2 秒）、WSL 下操作明显卡顿（#62055，已关闭）、GO 版本长时间停在 "Working"（#60330，已关闭），说明延迟问题在多种环境下被反复报告。
- **文档准确性**：额度规则（#60311）与配置行为（#62383 涉及的 `OPENCODE_CONFIG_DIR` 静默覆盖）均出现"实际行为与文档不一致"的反馈，文档与实现的对齐值得投入。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-06

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

## 1. 今日速览

今日无新版本发布，社区活动集中在问题清理与修复合并上：24 小时内 48 条 Issue 更新、18 条 PR 更新，其中大量长期 Issue 被关闭。最受关注的是 macOS 长时间会话下 CPU 占用过高（#7730，30 条评论、12 个 👍）。同时，围绕编码正确性（提示模板参数、文件编码、Windows 进程终止）和 provider 兼容性（OpenAI OAuth 403、Groq 消息角色、流式工具调用）的修复密集提交。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 个）

1. **#7730 [OPEN] macOS 长会话 CPU 占用过高** — 30 条评论、12 👍，是今日讨论度最高的问题。用户报告 CPU 占用在 50–110% 间波动、内存 600–800MB，并疑似与上下文大小相关。长期未闭环，建议优先跟进。
   链接：earendil-works/pi Issue #7730

2. **#1188 [CLOSED] 改善屏幕阅读器兼容性** — 14 条评论。流式输出期间每 80ms 重绘“working”动画和状态栏，导致辅助技术难以朗读。已关闭，体现无障碍方向的社区推动。
   链接：earendil-works/pi Issue #1188

3. **#10605 [OPEN] ChatGPT/OpenAI OAuth 403** — 13 条评论。Plus 订阅用户在登出/重登后仍报 “not eligible for subscription sharing”。影响付费用户正常使用，属高优先级接入阻塞。
   链接：earendil-works/pi Issue #10605

4. **#8810 [OPEN] 扩展注册 provider 时默认模型被忽略** — 10 条评论、5 👍。通过 `pi.registerProvider` 注册的 provider，新会话偶发不采用 settings.json 中的 `defaultProvider`/`defaultModel`。间歇性复现，影响扩展生态可靠性。
   链接：earendil-works/pi Issue #8810

5. **#9932 [OPEN] before_agent_start 强制系统提示保留已移除工具** — 7 条评论。强制 `systemPrompt` 在工具集协调之前被捕获，导致 `setActiveTools` 移除的工具仍出现在提示中，属扩展钩子的时序缺陷。
   链接：earendil-works/pi Issue #9932

6. **#10741 [OPEN] Groq Qwen3.8 27B 因 `developer` 角色报 400** — 7 条评论。Pi 发送 `developer` 角色，Groq 模板渲染失败，仅简单问候即报错，属新模型/新 provider 兼容性问题。
   链接：earendil-works/pi Issue #10741

7. **#10616 [OPEN][inprogress] Windows 上 pi.exec 无法执行 .cmd** — 5 条评论。`pi.exec("npm", ...)` 返回退出码 1 且 stdout 为空，但经 bash 工具执行正常，影响 Windows 扩展开发者的核心工具链。
   链接：earendil-works/pi Issue #10616

8. **#10015 [OPEN] bash 截断提示对超长末行误报 0B** — 4 条评论。末尾换行会重置行计数器，使 >50KB 的行被报告为 0B，误导用户对截断规模的判断。
   链接：earendil-works/pi Issue #10015

9. **#11858 [CLOSED] codemode 脚本重复相同工具调用 24,018 次** — 3 条评论。约 35 秒内以约 680 次/秒重复读取 28KB 文件，沙箱无重复调用防护，仅靠超时中止。暴露 codemode 的资源治理缺口。
   链接：earendil-works/pi Issue #11858

10. **#11317 [OPEN] 允许 SDK 用户自定义身份前言** — 3 条评论。希望经由 `systemPromptOptions.sections.preamble` 替换开头身份文本，同时保留默认工具、规则与文档段落，反映 SDK 嵌入场景的定制需求。
    链接：earendil-works/pi Issue #11317

## 4. 重要 PR 进展（10 个）

1. **#11885 [CLOSED] ai：重试回复开始后被截断的流** — 补充 `RETRYABLE_PROVIDER_ERROR_PATTERN`，匹配上游 Anthropic 流中断的报错文本，减少半途失败。
   链接：earendil-works/pi PR #11885

2. **#11882 [CLOSED] openai-completions：流索引与工具调用 id 冲突时拆分块**（Fixes #11881）— 修正 `ensureToolCallBlock` 仅按 index 优先匹配导致工具调用块错乱的问题。
   链接：earendil-works/pi PR #11882

3. **#11878 [OPEN] codemode：允许本地 tools 与 console 声明** — 修复脚本中 `const tools = await searchTools(...)` 触发 `SyntaxError: invalid redefinition of parameter name` 的问题。
   链接：earendil-works/pi PR #11878

4. **#11854 [OPEN] coding-agent：Windows 上终止整棵进程树** — `taskkill /T` 依赖父进程 id，会漏掉父进程已退出的子进程（如 `while true; ...`），需整体清理。
   链接：earendil-works/pi PR #11854

5. **#11751 [OPEN] coding-agent：edit 保留未改动行换行符，仅差异区域变更** — 同时避免大文件 diff 时内存耗尽导致文件已写入后失败。
   链接：earendil-works/pi PR #11751

6. **#9461 [CLOSED] ai：延迟到读取时再解析流式工具参数**（Fixes #9265）— 不再对每个增量重解析完整累积 JSON，改为按访问缓存解析，降低长工具调用开销。
   链接：earendil-works/pi PR #9461

7. **#11850 [CLOSED] coding-agent：tool search 与 codemode 摘要跟随本地 `$ref`**（Fixes #11803）— 解决 MCP（Pydantic/FastMCP）在 `$defs` 中嵌套模型时工具无法被检索的问题。
   链接：earendil-works/pi PR #11850

8. **#11857 [OPEN] feat：p2 提示缓存预热** — p2 使用 Anthropic 5 分钟提示缓存但从不刷新，间隔超过 305 秒即重写整个提示；报告称 10 月 12 日至 11 月 5 日期间发生 789 次，属成本优化向改动。
   链接：earendil-works/pi PR #11857

9. **#11855 [CLOSED] mcp：OAuth 回调服务器关闭时关闭剩余连接**（对应 #11311）— `http.Server.close()` 等待所有 socket 关闭，浏览器闲置连接可能使其挂起数分钟，造成 “Connecting…” 假死。
   链接：earendil-works/pi PR #11855

10. **#11811 [OPEN] coding-agent：read/edit 无损处理 UTF-16 与非 UTF-8 文件** — 新增共享 helper `src/core/tools/file-encoding.ts`，修复 `edit` 静默损坏非 UTF-8 文件、`read` 将 UTF-16 显示为乱码的问题。
    链接：earendil-works/pi PR #11811

另：#11873 修复提示模板参数中撇号被当作引号导致词语粘连（对应 #11861）；#11851 让 `ctx.ui.custom()` overlay 支持 `blocked` 状态（Closes #11816）；#11853 在 `/reload` 与会话切换时移除全部扩展 overlay。

## 5. 功能需求趋势

- **Provider 与模型兼容性**：OpenAI OAuth 403（#10605）、Groq `developer` 角色 400（#10741）、Kimi K2.7 Code 思维过程被当作回复输出（#10237）、github-copilot 401/403 令牌刷新重试（#10238），以及流式工具调用 id/index 冲突（#11882）。
- **扩展与 SDK 可定制性**：默认 provider 被忽略（#8810）、`before_agent_start` 系统提示时序（#9932）、自定义 preamble（#11317）、overlay 的 `blocked` 状态（#11816）、扩展 npm 包入口解析（#9817）。
- **跨平台正确性**：Windows 下 `pi.exec` 无法执行 .cmd（#10616）、进程树终止（#11854）、Bun 虚拟入口路径（#11874）。
- **性能与资源治理**：macOS 高 CPU（#7730）、提示缓存预热（#11857）、流式参数解析开销（#9461）、codemode 重复调用无防护（#11858）。
- **文件与文本处理健壮性**：编码兼容（#11811）、换行符保留（#11751）、bash 截断提示准确度（#10015）。
- **无障碍**：屏幕阅读器兼容（#1188）。

## 6. 开发者关注点

- **平台差异带来的隐性故障**：Windows 是明显痛点，涉及命令执行、进程清理与 Bun 路径识别；macOS 则集中在长时间会话的性能表现。
- **静默数据损坏风险**：`edit` 改写未触碰行的换行符、破坏非 UTF-8 文件，这类无报错但影响实际产出的问题对开发者信任度影响较大。
- **扩展开发体验**：注册 provider 的默认行为不可靠、钩子执行顺序不符合直觉、沙箱缺少重复调用与资源防护。
- **认证与网络路径的稳健性**：OAuth 403、MCP OAuth 挂起、流中断未重试，均表现为“看似成功实则失败”或长时间无响应，需更明确的错误与自动恢复。
- **成本与延迟优化**：提示缓存未刷新、流式 JSON 反复解析等效率问题已被社区量化为具体数据，反映出对长会话成本与性能的关注。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-11-06

## 今日速览

今日发布 v0.26.9 正式版与桌面端 v0.26.8，TypeScript SDK 同步至 v0.1.28（内置 CLI 0.26.8）。社区焦点集中在会话管理稳定性（大体积转录快照、长路径、自动压缩）与 Managed Agent 架构上；CI 失败类自动 Issue 仍是评论数最高的一类，说明主干稳定性治理仍在持续。

## 版本发布

- **v0.26.9**：修复 channels 中 GitHub 入站读取失败后恢复机制失效的问题（#16402），并加固 core 的续期等待与 writer seal 测试。链接：https://github.com/QwenLM/qwen-code/releases
- **v0.26.8-nightly.20261105**：包含与 v0.26.9 相同的 channels 修复与 core 测试加固。
- **sdk-typescript-v0.1.28**：SDK 发布，内置 CLI 版本 0.26.8（由同分支源码构建）。
- **desktop-v0.26.8**：重构 managed-agent 会话事件投递循环（#15952），并调整 CI 的 classify_pr 门禁路由。

> 说明：以上更新内容仅覆盖数据中列出的条目，release notes 其余部分未在材料中展开。

## 社区热点 Issues（10 条）

1. **#14724 Main CI 失败：Managed Agent 门禁未识别到测试**（OPEN，215 条评论，10-19 创建至今）：评论数最高，且持续一个多月未收敛，反映 Managed Agent 相关门禁的测试识别逻辑存在长期噪声。链接：https://github.com/QwenLM/qwen-code/issues/14724
2. **#13078 每日依赖 CVE 审计失败**（OPEN，43 条评论）：涉及新出现的高危漏洞可能性，属供应链安全问题，需要人工跟进。链接：https://github.com/QwenLM/qwen-code/issues/13078
3. **#13113 会话无法打开："Transcript snapshot is too large to index"，file_history_snapshot 呈二次增长、256 MiB 索引上限硬编码**（P1，11 条评论）：长会话直接不可用的数据完整性问题，影响面大，标记为 ready-for-human。链接：https://github.com/QwenLM/qwen-code/issues/13113
4. **#16418 严重：反复自动压缩使"仅审查"技能越权改动源码**（P1，11-05 新建，4 条评论）：涉及权限边界与 agent 行为安全，是今日最值得优先关注的新问题。链接：https://github.com/QwenLM/qwen-code/issues/16418
5. **#15597 Headless `-p` 模式下托管自动记忆永远无法写入**（P1）：隐式 edit/write_file 拒绝覆盖了记忆 agent 的作用域允许规则，导致非交互模式记忆功能实际失效。链接：https://github.com/QwenLM/qwen-code/issues/15597
6. **#15327 跟踪：所有界面统一运行在单一 agent loop 上（experimental.unifiedAgentLoop）**（P1，feature-request）：架构级改动，决定后续多界面行为一致性，标记 ready-for-human。链接：https://github.com/QwenLM/qwen-code/issues/15327
7. **#15412 长项目路径导致无法记录会话、会话列表损坏**（P2）：用完整绝对路径作为单一文件系统路径组件，在 macOS 上可生成非法路径。链接：https://github.com/QwenLM/qwen-code/issues/15412
8. **#15495 图片负载淘汰机制没有开关且阈值未文档化**（P2，enhancement）：长会话中内联图片被静默重写，默认阈值 20，用户不可控。链接：https://github.com/QwenLM/qwen-code/issues/15495
9. **#13911 Web Shell 自动回顾忽略 "Show Session Recap" 设置**（P2）：设置项写入但无人读取，属配置失效类问题；已有对应修复 PR #16472。链接：https://github.com/QwenLM/qwen-code/issues/13911
10. **#15052 CI：pending 运行被替换时保留独立的主干 E2E 验证结果**（P2，19 条评论）：直接关系主干验证可信度，是 CI 噪声问题的重要根因之一。链接：https://github.com/QwenLM/qwen-code/issues/15052

其他值得留意的已关闭项：#15712（E2E TUI 前台 shell 测试）与 #16377（Managed Agent 门禁）已于今日关闭；#14586（email-channel 容量测试）亦已关闭。

## 重要 PR 进展（10 条）

1. **#16478 perf(managed-agent)：工具执行准入不再依赖租户 placement**：属于 #16415 的分解项，削减普通会话绑定路径上的租户校验开销。链接：https://github.com/QwenLM/qwen-code/pull/16478
2. **#15684 feat(managed-agent)：启用外部工作区执行**：在 #15654 物化前置之上构建外部 Workspace 执行切片，含 `hosted-workspace-external-files/1` 准入与有界单查询发现。链接：https://github.com/QwenLM/qwen-code/pull/15684
3. **#16458 feat(web-shell)：待答问题面板提供"询问详情"侧任务**：以问题与选项快照预填首个提示词，改善交互闭环。链接：https://github.com/QwenLM/qwen-code/pull/16458
4. **#16472 fix(web-shell)：按 general.showSessionRecap 门控自动回顾**：修复设置不生效问题（对应 #13911）。链接：https://github.com/QwenLM/qwen-code/pull/16472
5. **#15837 fix(cli)：配置就绪后才回复 SDK initialize**：避免 SDK MCP servers 与 SDK-only 配置尚未就绪即回包。链接：https://github.com/QwenLM/qwen-code/pull/15837
6. **#15851 fix(cli)：上报发送前拒绝，而非重放上轮回答**：修复 token 上限或 UserPromptSubmit hook 拦截时流为空、结果构建器回退到上一轮助手消息的问题。链接：https://github.com/QwenLM/qwen-code/pull/15851
7. **#15836 fix(core)：取消的 shell 报告为 interrupted 而非 completed**：新增 `interruptedBeforeCompletion` 标记，修正调度器取消分支的提示选择。链接：https://github.com/QwenLM/qwen-code/pull/15836
8. **#16416 fix(channels)：将普通对话评论投递到绑定 PR 的会话**：开启 `deliverToBoundSessions` 时，无需 @提及 即可送达。链接：https://github.com/QwenLM/qwen-code/pull/16416
9. **#16468 feat(ci)：隔离 triage agent 凭据并在 ECS 上运行全部分诊**：triage agent 不再持有写凭据，所有触发路由到维护者 ECS 池。链接：https://github.com/QwenLM/qwen-code/pull/16468
10. **#13885 fix(cli)：headless 结果先于记忆任务排空输出**：在 headless JSON 格式下先交付终止 `result`，再等待被跟踪的托管记忆任务。链接：https://github.com/QwenLM/qwen-code/pull/13885

其他：#16467（Web Shell 会话搜索移至活动铃铛旁）、#16476（旧 PR 检出刷新 host assets）、#16367（按浏览器 OS 显示通知指南）为体验与 CI 细节改进。

## 功能需求趋势

- **Web Shell / 伴随界面打磨**：会话搜索位置、通知指南、自动回顾设置、生成式 UI 保留测试——界面一致性与设置生效是持续主题（#16467、#16367、#13911、#16279）。
- **统一 agent loop 与多界面一致性**：#15327 提出所有界面共用 `packages/core` 的单一 agent loop，是当前最明确的架构方向。
- **会话管理**：转录快照膨胀、长路径处理、会话列表健壮性构成一组集中诉求（#13113、#15412）。
- **Managed Agent / 工作区执行**：外部工作区执行、准入路径性能优化显示该方向正在快速迭代（#15684、#16478）。
- **CI/CD 与测试基础设施**：大量 Issue 与 PR 围绕门禁可信度、E2E 独立验证、缓存写回失败展开（#15052、#15274、#16468）。
- **终端集成小需求**：如 #13870 请求在交互式 CLI 中支持 OSC 7501 程序状态协议，并标注 welcome-pr。

## 开发者关注点

- **长会话的可靠性是最大痛点**：快照二次增长、硬编码 256 MiB 上限、图片负载静默淘汰、自动压缩反复触发，都会让长会话变得不可用或行为越界（#13113、#16418、#15495）。
- **权限与作用域规则冲突**：隐式拒绝覆盖记忆 agent 的作用域允许（#15597）、取消状态被误报为完成（#15836），说明工具结果语义与权限叠加逻辑需要更清晰的契约。
- **CI 噪声与自动 Issue 负担**：评论数最高的 Issues 多为 CI 失败自动报告，开发者需要更精准的测试识别与独立的主干验证（#14724、#12714、#15052）。
- **设置项"写了没人读"**：Web Shell 自动回顾等配置失效，反映设置读取路径缺乏统一门控。
- **安全相关需要人工介入**：依赖 CVE 审计失败与 amend-guard 后续加固（#16449）均标记需人工处理。

> 注：部分条目（如 #16478 等 PR）评论数在原始数据中为 undefined，本报告未对其社区反应强度做推断。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-11-06

## 今日速览

今日无新版本发布，社区焦点集中在 v0.10.3 验收的残余阻塞项（会话历史丢失、引擎静默卡死、`/undo` Windows 路径）与 v0.11 架构分解（EPIC-005 已累积 36 条评论）。PR 侧外部贡献活跃，围绕子代理交付真实性、工作区路径处理、WeCom 桥接和 Windows 剪贴板粘贴等一批修复完成流转。

---

## 社区热点 Issues

1. **#5316 EPIC-005: TUI Crate 分解总纲（36 评论）** — 最长讨论线程，覆盖剩余 crate 分解的规划，路由至 v0.11（未定档）。是理解本项目架构演进的主线索。
 https://github.com/codewhale-hq/Codewhale/issues/5316

2. **#7095 会话历史丢失（release-blocker, v0.10.3，11 评论）** — 摘要显示「范围性恢复已修复、原始事故仍开放」，Windows 控制适配器已落地。影响用户数据留存，属最高优先级。
 https://github.com/codewhale-hq/Codewhale/issues/7095

3. **#6184 引擎运行中静默冻结（release-blocker, 9 评论）** — 用户消息已持久化但无回答、无报错、无日志、无崩溃记录。看门狗已落地，但原始长跑事故未闭环，排查难度高。
 https://github.com/codewhale-hq/Codewhale/issues/6184

4. **#6970 `/undo` 命令严重 Bug（release-blocker, os:windows，4 评论）** — 源码与 macOS 路径已修复，Windows 最终验收待完成。跨平台一致性是短板。
 https://github.com/codewhale-hq/Codewhale/issues/6970

5. **#5848 Ollama 实时目录验证（release-blocker, 4 评论）** — 源码与实机 TUI 已合格，已安装版本待验证。反映本地模型接入的验收严格度。
 https://github.com/codewhale-hq/Codewhale/issues/5848

6. **#6011 用量与工具诊断（10 评论）** — 提出按组件/按模型的 token 计量、缓存命中率、每工具 sink 与压缩成本，路由至 v0.10.5。可观测性是高频诉求。
 https://github.com/codewhale-hq/Codewhale/issues/6011

7. **#6969 延迟工具箱驱逐在经济上净负收益（6 评论）** — 在 provider 提示缓存下，全前缀重预填 + 写入溢价使驱逐策略得不偿失。技术分析深入，关系到成本控制设计。
 https://github.com/codewhale-hq/Codewhale/issues/6969

8. **#6050 可插拔代理记忆后端（8 评论）** — 当前 `MemoryBackend` 仅有 `Native`/`Off` 两种变体，社区希望以 causal-memory / mem0 作为参考实现接入通用接缝。
 https://github.com/codewhale-hq/Codewhale/issues/6050

9. **#6728 CPU 占用回退（7 评论）** — v0.9.12 空闲 → v0.9.13 中等 → v0.10.0 高负载；残余证据指向 FreeBSD 原生审批等待/后台 CPU，路由至 v0.10.4。
 https://github.com/codewhale-hq/Codewhale/issues/6728

10. **#2323 中文输入法未适配（os:windows，5 评论）** — 拼音输入提示未隐藏、弹窗内输入异常。中文用户日常阻塞，且有 1 个 👍，值得优先处理。
 https://github.com/codewhale-hq/Codewhale/issues/2323

---

## 重要 PR 进展

1. **#7234 fix(fork): 裁剪携带工作区漂移通知的已保存历史** — 修复会话 fork / `/undo` / `retry` 因无法识别保存历史边界而拒绝执行的问题。
 https://github.com/codewhale-hq/Codewhale/pull/7234

2. **#7220 feat: 有界 HTTP 限流恢复** — HTTP 429 目前共用普通传输重试额度，改为独立且经校验的恢复策略（共 20 次尝试）。
 https://github.com/codewhale-hq/Codewhale/pull/7220

3. **#7231 fix(net): 本地代理消失时走直连** — reqwest 在客户端构建时快照代理环境变量，代理下线后会话无法恢复，改为直连回退。
 https://github.com/codewhale-hq/Codewhale/pull/7231

4. **#7217 feat(tui): 粘贴剪贴板图片并预览所有附件** — 修复 Windows 下 `Ctrl+V` 无法附加剪贴板图片，沿真实 QQ 截图链路定位出五处缺陷。
 https://github.com/codewhale-hq/Codewhale/pull/7217

5. **#7218 fix(tui): 通过 .NET 读取 Windows 剪贴板图片作为回退** — 针对 QQ 截图工具产生的图片格式兼容问题，作为上一条的补充路径。
 https://github.com/codewhale-hq/Codewhale/pull/7218

6. **#7228 fix(subagent): 如实上报后续交付并跟随实际应答的后继代理** — 修复 Interrupted/Completed 分支硬编码 `delivered: true, resumed: true` 的虚假上报。
 https://github.com/codewhale-hq/Codewhale/pull/7228

7. **#7226 fix(vision): 接受解析到工作区内的绝对图片路径** — 修复 `image_analyze` 只读通道对绝对路径先拒绝、后做包含检查的顺序颠倒。
 https://github.com/codewhale-hq/Codewhale/pull/7226

8. **#7230 feat(tasks): 用户应答等待期间暂停任务墙钟** — 与上游 `turn_budget.rs` 一致：预算约束的是代理自身开销，而非人的应答时长。
 https://github.com/codewhale-hq/Codewhale/pull/7230

9. **#7211 feat(bridges): 引导进行中的 WeCom 轮次而非丢弃消息** — 此前运行中 `runPrompt` 返回忙碌提示并丢弃输入内容，手机端体验尤其受损。
 https://github.com/codewhale-hq/Codewhale/pull/7211

10. **#7207 fix(workspace): 家目录工作区不再拒绝自身 junction 状态目录** — 修复以用户主目录启动会话时四处调用点的错误限制。
 https://github.com/codewhale-hq/Codewhale/pull/7207

---

## 功能需求趋势

- **可观测性与成本核算**：#6011（token 计量、缓存命中率）、#6991（显著降低 token 消耗）、#6969（驱逐经济学）构成一条完整线索——社区不只关心省 token，更关心可测量、可解释的度量口径。
- **代理记忆与技能演化**：#6050 可插拔记忆后端、#5860 对话驱动的自动技能演化（路由至 v1.0，需审批、隐私与版本控制），指向长期产品架构。
- **工作流验证**：#6013 goal gates——对完成/阻塞/需输入/停滞状态做独立校验，可选验证阶段，默认行为不变。
- **多代理与模型运营**：#5915 Fleet 模型按角色保存、常驻算子模型列表。
- **平台与本地化覆盖**：#1097 FreeBSD 支持（npm 二进制/pkg）、#2323 中文输入法、#2342 输出内容中的文件可点击预览。
- **沙箱可控性**：#4955 请求 `--no-sandbox` / 零沙箱本地开发模式，理由是 Seatbelt 内核级沙箱日常破坏基础 shell 命令。

---

## 开发者关注点

1. **v0.10.3 验收仍是主线压力**：四个 release-blocker（#7095、#6184、#6970、#5848）均呈「已修复/已抑制部分路径，原始事故仍开放」状态，摘要中的措辞相当谨慎，未宣称问题已彻底关闭。
2. **架构债并行推进**：#5586 巨型文件分解（runtime_threads.rs、lib.rs、runtime_api.rs、config.rs）、#5587 清除 25 处模块级 blanket allow、#6145 命令约定落地，均标记为 v0.11，与本轮缺陷修复形成两条并行轨道。
3. **Windows 与跨平台是薄弱面**：`/undo`、剪贴板图片、CPU 回退、输入法问题均指向平台差异。
4. **诚实上报被单独立项**：#7228「如实上报交付状态」与多处「不宣称未经验证的收益」措辞，显示维护者对过度承诺有明确的工程纪律。
5. **外部贡献者比重高**：今日 PR 多标 `contributor:external` 或 `contribution-gate`，其中多条已 CLOSED，社区参与度与评审吞吐均较健康。

> 说明：以上信息全部来自所提供的 GitHub 数据；各版本目标（v0.10.4 / v0.10.5 / v0.11 / v1.0）均为「planned, undated」，尚无确定时间点。数据中的 Issue/PR 链接指向 `codewhale-hq/Codewhale` 仓库，与数据来源 `github.com/Hmbown/DeepSeek-TUI` 的对应关系未在数据中说明。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*