# AI CLI 工具社区动态日报 2026-08-06

> 生成时间: 2026-08-06 03:15 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-06）

## 一、生态全景

2026-08-06，九大主流 AI CLI 工具共发布 18 个版本（含 alpha/preview/nightly），日报精选重要 PR 更新 72 项，整体迭代强度维持高位。各工具不约而同进入"平台化"阶段：Claude Code 强化企业级治理与安全 fail-closed，OpenAI Codex 加码多代理编排与 Guardian 熔断，Qwen Code 发布桌面版，DeepSeek TUI 全面开放 Runtime API，Pi 则继续深耕多提供商连接。共性痛点同样清晰：MCP 生态碎片化（5 款工具同日出现兼容性问题）、Windows 平台稳定性差、跨厂商多代理协议断裂、模型行为不透明，是开发者抱怨最集中的四个领域。与此同时，上下文/记忆管理与"执行前安全拦截"正在成为下一波差异化竞争的高地。

---

## 二、各工具活跃度对比

> 数据口径：各日报"热点/重要"精选条目数，非全量仓库数据。

| 工具 | 热点 Issues | 重要 PR | Release 情况 | 迭代节奏判断 |
|---|---|---|---|---|
| **Claude Code** | 10 | 5 | v2.1.223（稳定版） | 稳定迭代，治理与安全加固导向 |
| **OpenAI Codex** | 10 | 10 | v0.146.1 + 5 个 alpha | 高频，0.147.0 功能预演密集 |
| **Gemini CLI** | 10 | 10 | v0.54.0 + preview.1 + nightly | 三通道并行，Agent 可靠性攻坚 |
| **Copilot CLI** | 10 | 0 | v1.0.79-2 ~ -5（4 个预发布） | 预发布驱动，PR 修复出现停滞 |
| **Kimi Code** | 3 | 3 | 无 | 低活跃，但 Bug 响应极快（当日双 PR） |
| **OpenCode** | 10 | 10 | v1.18.14（稳定版） | 架构迁移与功能开发并行 |
| **Pi** | 10 | 10 | 无 | PR 密集合并期，精细化打磨 |
| **Qwen Code** | 10（总量 38） | 10（总量 50） | desktop-v0.1.0 + v0.21.6 + nightly | 桌面战略启动，全维度扩张 |
| **DeepSeek TUI** | 1 | 14（总量） | 无 | v0.9.4 发布列车整合期 |

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 典型诉求与证据 |
|---|---|---|
| **MCP 生态兼容性** | Claude Code、Copilot CLI、Gemini CLI、Kimi | Claude #72228 长参数静默丢弃；Copilot #4370 初始化失败 / #4374 Azure DevOps 400 / #4378 GHEC 策略 401；Gemini #28481 OAuth 令牌刷新失败；Kimi #2588 图像返回工具中途中止。诉求：统一兼容层、严格参数校验、企业级策略支持 |
| **Agent/子代理可靠性** | Gemini CLI、DeepSeek TUI、Kimi、Copilot CLI | Gemini #21409 无限挂起（8👍）/ #22323 MAX_TURNS 误报 GOAL / #25166 Shell 卡死；DeepSeek #5242 检查点续跑；Kimi #2588 副作用生效后中止。诉求：状态真实上报、超时熔断、断点恢复 |
| **上下文/记忆/会话管理** | Kimi、Claude Code、Codex、OpenCode、Pi、Gemini CLI | Kimi #1283 跨会话记忆（19 评论）；Claude #81946 会话可移植；Codex #25319 会话按项目隔离（54👍）；OpenCode #40781 会话导出 JSON；Pi #6879 自动压缩失效（13👍）；Gemini PR #28488 自动压缩。诉求：自动压缩、跨会话记忆、可移植会话 |
| **模型行为透明与成本控制** | Copilot CLI、Claude Code、OpenCode、Gemini CLI | Copilot #4377 GPT-5.6 Terra 静默委托 Opus；Claude #77136 模型风格突变/降级；OpenCode #31042 small_model 被忽略；Gemini #21968 自定义技能不被主动调用。诉求：显示实际模型、防静默委托、BYOM 运行时切换 |
| **安全与权限精细化** | Qwen Code、Claude Code、Gemini CLI、Codex、Copilot CLI | Qwen #8582 只读 Shell 分类器绕过 + #8136 密码泄露；Claude #77605 浏览器无认证驱动 + PR #84364 fail-closed；Gemini #26525 脱敏前置；Codex Guardian 首次拒绝即熔断；Copilot #4378 企业数据驻留策略。诉求：默认拒绝、凭据保护、执行前拦截 |
| **Windows 平台稳定性** | Claude Code、Copilot CLI、OpenCode、Qwen、Codex、Pi | Claude #83744 GPU 进程崩溃；Copilot #4026 两月未解；OpenCode #27749 退出杀死终端；Qwen #8615 启动 EISDIR；Codex #25203 OAuth 失败；Pi #7547 平台调研。诉求：崩溃修复、认证与终端渲染兼容 |

---

## 四、差异化定位分析

| 工具 | 定位 | 功能侧重 | 目标用户 | 生态与技术特征 |
|---|---|---|---|---|
| **Claude Code** | 企业级全能 Agent 平台 | 插件市场、企业治理（org 级通配符）、hooks/workflow agents，CLI+桌面+IDE 全覆盖 | 企业团队、专业开发者 | 生态最广、商业化最成熟；短板是模型行为不可控与资源占用（ugrep 峰值 14GB） |
| **OpenAI Codex** | 多代理编排与安全沙箱 | Multi-Agent V2、Guardian 熔断、远程环境、Rust TUI | 追求自动化规模的开发者 | 协议封闭（agent_message 不兼容非 OpenAI 提供商）；功能需求热度极高（143👍） |
| **Gemini CLI** | Agent 可靠性与记忆系统 | 子代理生命周期、Auto Memory、组件级评估（76 个行为测试）、AST 感知路线图 | Google Cloud/GCA 用户 | 对 Agent 行为可观测性投入最深；P1 挂起问题尚未收敛 |
| **Copilot CLI** | GitHub 工作流原生集成 | worktree/PR、MCP 注册表、BYOM、GHEC 合规 | GitHub 重度用户与企业 | 平台绑定深，MCP 兼容面窄；近期回归频率偏高（view 工具、server/discover 两连回归） |
| **Kimi Code** | 轻量 ACP 接入与多模态前端 | ACP 协议、语音 agent、capabilities 边界管理 | Moonshot API 用户 | 社区小但响应快（#2588 当日双 PR 修复）；记忆系统为下一步 |
| **OpenCode** | 开源、架构现代化 | V1→V2 迁移、托管工作区执行、会话导出、安装脚本 GITHUB_TOKEN | 开源/自托管/本地模型用户 | 插件市场呼声最高（23👍）；GO 订阅区域限制伤害付费体验 |
| **Pi** | 极客向 TUI + 多提供商 | 提供商广度（Bedrock/Qwen/Copilot/OpenAI）、扩展事件总线、Linux 细节打磨 | Linux/TUI/Neovim 高级用户 | XDG、剪贴板、X11 泄漏等细节到位；长会话可靠性待加强 |
| **Qwen Code** | 桌面/Web/终端一体化 | Tauri Desktop、Web Shell、tmux 交互式子代理、OpenTelemetry 对齐 | Qwen 用户、桌面偏好者、中文社区 | 增长迅猛（38 issues/50 PRs）；安全团队主动披露 P1 绕过，安全成熟度提升 |
| **DeepSeek TUI** | 运行时 API 开放 | memory/MCP/skill/verifier 生命周期端点、ACP 工具执行 | TUI 极客、DeepSeek 用户 | 小社区但 PR 密度最高（14）；发布列车 77 commits 领先 main，整合中 |

---

## 五、社区热度与成熟度

**第一梯队（高活跃 + 成熟生态）**

- **Claude Code**：评论/点赞规模最大（单 issue 11 评论、8👍），功能需求与 Bug 报告均衡，商业化最成熟，已进入"治理导向"阶段。
- **OpenAI Codex**：需求热度最高（多根工作区 143👍、Markdown 导出 78👍），版本节奏最快（1 stable + 5 alphas），处于功能扩张期。

**第二梯队（高活跃 + 快速追赶）**

- **Gemini CLI**：P1 问题密集（挂起、误报、卡死），三通道发布暴露其"边修边发布"状态，可靠性攻坚是中短期主题。
- **Qwen Code**：Issue/PR 总量最大（38/50），桌面版半日即暴露 Windows 阻断 bug，属于典型的"快速扩张、稳定跟进"。
- **OpenCode**：PR 中架构迁移占一半（V2 类型、兼容层移除、数据迁移），处于技术债清偿与新功能并行的关键期。
- **Pi**：Issue 与 PR 均衡（10/10），多个长期问题（XDG、Copilot 模型列表、事件总线泄漏）当日合入修复，社区治理精细。

**第三梯队（平台绑定 / 早期阶段）**

- **Copilot CLI**：发布频繁但 24h PR 为 0，模型委托与 MCP 策略问题悬而未决，叠加近期连续回归，社区信任成本在上升。
- **Kimi Code / DeepSeek TUI**：社区体量小，但修复链路完整（Kimi 当日三 PR 覆盖一个 issue 的两个子缺陷）、PR 密度高（DeepSeek 14 条），处于能力补全的早期活跃期。

---

## 六、值得关注的趋势信号

1. **MCP 兼容层成为新的竞争焦点。** 5 款工具同日出现 MCP 相关故障（参数丢失、初始化失败、OAuth 刷新、企业策略拦截）。对开发者的参考价值：在 MCP 标准收敛前，选型时优先验证目标工具对主流框架（FastMCP 等）与异构 Git 环境的兼容范围，并锁定核心 server 版本。

2. **多代理编排走向生产，但跨厂商协议割裂是硬伤。** OpenAI 的 `agent_message` 与加密负载在 DeepSeek、Ollama 处直接断裂（Codex #33551/#34833/#36586）。若团队使用异构子代理，应预留"纯文本任务降级"通道，避免被单一厂商协议锁定。

3. **安全防线从"事后审查"前移到"执行前拦截"。** Qwen 只读 Shell 分类器绕过、Claude hook fail-closed 修复、Codex Guardian 首次拒绝即中断、Gemini 确定性脱敏——安全机制正在拦截输入与执行路径。开发者在安全评审中应将工具的 fail-closed 行为与凭据处理纳入检查清单。

4. **上下文/记忆管理是下一波核心竞争力。** Gemini Auto Memory、Kimi 记忆系统、Pi 自动压缩失效、OpenCode 会话导出、AST 感知读取——"长会话不中断、跨会话有记忆"已成为 Agent 生产力的关键瓶颈。优先选择上下文管理自动化程度高的工具，可显著降低手工压缩与续接成本。

5. **桌面端/IDE 化是第二增长曲线。** Qwen 发布 Tauri Desktop、Claude Desktop 问题高频上榜、Codex VS Code 多根工作区收获 143👍、OpenCode 推出桌面版——CLI 的能力外壳正在多样化。团队选型时不应只看终端体验，还需评估 IDE 扩展与桌面端成熟度。

6. **Windows 是普遍短板，也是差异化机会。** 6 款工具同日出现 Windows 专属问题（GPU 崩溃、OAuth 失败、退出杀终端、路径解析 EISDIR）。对 Windows 团队而言，核心工具需做平台回归验证并准备备用方案；对工具厂商而言，率先补齐 Windows 稳定性即可获得显著的竞争红利。

---

*本报告基于 2026-08-06 各工具 GitHub 社区动态日报编制，数据口径为各日报精选条目。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据范围**：github.com/anthropics/skills 官方仓库 | 截至 2026-08-06 | 样本：热门 PR 50 条 + 热门 Issue 50 条（均按评论数排序）

---

## 1. 热门 Skills 排行

**🥇 #1298 skill-creator 评估链路修复** — [PR #1298](https://github.com/anthropics/skills/pull/1298)
- **功能**：修复 `run_eval.py` 对所有技能恒定报告 `recall=0%` 的核心缺陷——将评估产物安装为真实 skill，并修复 Windows 流读取、触发检测与并行 worker 问题。
- **讨论热点**：skill-creator 的描述优化循环"在对着噪声调参"；关联 Issue #556、#1169，已有 10+ 独立复现，是当前仓库最集中的单一技术债。
- **状态**：OPEN

**#514 document-typography 文档排版技能** — [PR #514](https://github.com/anthropics/skills/pull/514)
- **功能**：AI 生成文档的排版质检——孤儿词换行（1-6 词溢出到下一行）、寡行段落（标题滞留页底）、编号错位。
- **讨论热点**："这些问题影响 Claude 生成的每个文档"，普适性强、用户感知度高。
- **状态**：OPEN

**#538 PDF 大小写引用修复** — [PR #538](https://github.com/anthropics/skills/pull/538)
- **功能**：修复 `skills/pdf/SKILL.md` 中 8 处大小写不匹配（`REFERENCE.md` → `reference.md`），解决大小写敏感文件系统上的引用断裂。
- **讨论热点**：跨平台兼容细节，修复成本极低、收益确定。
- **状态**：OPEN

**#486 ODT 技能** — [PR #486](https://github.com/anthropics/skills/pull/486)
- **功能**：OpenDocument 格式（.odt/.ods）的创建、模板填充与 ODT→HTML 解析。
- **讨论热点**：补齐文档格式矩阵——docx/pdf 已有官方技能，开源/ISO 标准的 OD(F) 是明显缺口。
- **状态**：OPEN

**#210 frontend-design 可执行性改进** — [PR #210](https://github.com/anthropics/skills/pull/210)
- **功能**：重写 frontend-design skill，确保每条指令 Claude 能在单轮对话内真正执行、指引足够具体。
- **讨论热点**："技能指令的可执行性"标准——教育式文档 vs 操作式指令（与 Issue #202 直接呼应）。
- **状态**：OPEN

**#83 skill-quality-analyzer & skill-security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83)
- **功能**：一对元技能——质量分析器（结构、文档、示例等五维评估）与安全分析器。
- **讨论热点**：社区对"技能质量/安全可度量"的诉求，与 #492 安全议题形成呼应。
- **状态**：OPEN（悬置最久，2025-11-06 创建）

**#1367 self-audit 技能** — [PR #1367](https://github.com/anthropics/skills/pull/1367)
- **功能**：交付前审计——先机械校验所有输出文件真实存在，再按伤害严重度做四维推理审计，宣称跨技术栈通用。
- **讨论热点**：推理质量门控概念（配套提案 Issue #1385），"交付验证"正成为独立技能品类。
- **状态**：OPEN

**#723 testing-patterns 技能** — [PR #723](https://github.com/anthropics/skills/pull/723)
- **功能**：全栈测试技能——Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、测什么/不测什么。
- **讨论热点**：测试哲学 + 实操模式，属开发者基础需求最广的技能方向。
- **状态**：OPEN

---

## 2. 社区需求趋势

从 Issues 提炼，社区关注点明显分为两层：

**生态治理层（当前主旋律）**
- **安全与信任边界（最热议题）**：[Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论）——社区技能借 `anthropic/` 命名空间分发、冒充官方，构成信任边界滥用。这是全仓库讨论度最高的话题。
- **组织级分发与共享**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论，8👍）——要求 org 内直接共享 skill，替代"下载→发送→手动上传"；[Issue #189](https://github.com/anthropics/skills/issues/189)（6 评论，9👍）——插件重复安装导致 context window 浪费。
- **基础设施可靠性**：[Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论，7👍）/ #1169——skill-creator 评估循环 0% recall；[Issue #62](https://github.com/anthropics/skills/issues/62)——用户技能消失并报错。

**新技能方向层**
- **代理记忆压缩**：[#1329 compact-memory](https://github.com/anthropics/skills/issues/1329)（9 评论）——符号化记法替代长篇幅 prose 记忆，节省长期任务 context。
- **Agent 安全治理**：[#412 agent-governance](https://github.com/anthropics/skills/issues/412)——策略执行、威胁检测、信任评分、审计轨迹。
- **推理质量门控**：[#1385](https://github.com/anthropics/skills/issues/1385)——预任务校准 → 对抗性审查 → 交付验证三闸门管线。

**综合判断**：社区最期待的新技能不再是单一业务功能，而是"让 Agent 输出可信"的横切能力——记忆管理、质量审计、安全治理；同时强烈要求修好 skill-creator 这条"生产技能的流水线"。

---

## 3. 高潜力待合并 Skills

> 榜单中 50 条 PR **全部为 OPEN**，无 merged，以下按"合并概率 × 影响"评估：

- **#538 PDF 修复** — 8 处纯文本大小写修正，风险最小、确定性高。[PR #538](https://github.com/anthropics/skills/pull/538)
- **#541 DOCX w:id 碰撞修复** — 根因清晰（OOXML 共享 ID 空间），修复"添加修订导致文档损坏"的高危 bug。[PR #541](https://github.com/anthropics/skills/pull/541)
- **#539 skill-creator YAML 预校验** — 对未加引号且含 `:` 的 description 提前告警，防止静默解析失败。[PR #539](https://github.com/anthropics/skills/pull/539)
- **#509 CONTRIBUTING.md** — 关闭 Issue #452，将仓库社区健康度从 25% 拉回正轨，管理价值明确。[PR #509](https://github.com/anthropics/skills/pull/509)
- **#514 document-typography** — 直击所有 AI 生成文档的共性排版问题，讨论热度高且无依赖。[PR #514](https://github.com/anthropics/skills/pull/514)
- **#723 testing-patterns** — 完整覆盖测试栈，内容成熟、属开发者刚需。[PR #723](https://github.com/anthropics/skills/pull/723)
- **#486 ODT skill** — 与现有 docx/pdf 技能自然并列，补齐格式矩阵。[PR #486](https://github.com/anthropics/skills/pull/486)
- **#525 pyxel 技能** — 作者 kitao 即 Pyxel 引擎原作者，垂直领域权威性无可争议，并有配套 MCP 服务。[PR #525](https://github.com/anthropics/skills/pull/525)

**风险信号**：最早的 #83（2025-11-06）已悬置约 9 个月，合并节奏偏慢是生态当前的一个瓶颈；skill-creator 修复 PR 群（#1298/#1099/#1050/#1323/#1261）彼此功能重叠，存在"谁先合、合谁的"协调成本。

---

## 4. Skills 生态洞察

**一句话总结**：社区当前在 Skills 层面最集中的诉求已从"增加更多技能"转向"让技能生态可信、可靠、可治理"——修复 skill-creator 评估工具链的 0% recall 缺陷、终结 anthropic/ 命名空间下的信任边界滥用、建立技能质量与安全审计机制，这三条主线贯穿了 PR 与 Issue 的热度榜首。

---

# Claude Code 社区动态日报 2026-08-06

## 1. 今日速览

- 发布 v2.1.223，新增 GitHub org 级通配符市场管理配置，并增加对 workflow agents 等场景的警告提示。
- 社区讨论热度集中在 Cloud/Cowork 会话 git 推送被代理阻断、Opus 模型语言行为异常、Claude Desktop 崩溃等问题。
- 两个新 PR 修复了 hookify 在异常情况下不按规定拒绝工具执行的安全漏洞。

## 2. 版本发布

### v2.1.223
- 在 `strictKnownMarketplaces` 和 `blockedMarketplaces` 托管设置中新增 `"owner/*"` 通配符条目，用于按 GitHub 组织允许或阻止整个仓库市场。
- 当 workflow agents、forked skills、slash commands 或后台恢复的操作触发时，新增警告提示。

## 3. 社区热点 Issues

1. **[Cloud/Cowork 会话 git 代理阻止所有推送，PAT 失效 #76248](https://github.com/anthropics/claude-code/issues/76248)** — 11 评论，5 👍  
   用户反馈远程会话无法推送到非授权仓库，即使使用自己的 PAT 也被拒绝，改动似乎随 CCR_TEST_GITPROXY 上线，影响开发工作流。

2. **[Opus 4.8 语言令人不适，Opus 5.0 导致逻辑混乱 #77136](https://github.com/anthropics/claude-code/issues/77136)** — 8 评论，8 👍  
   用户抱怨模型用词风格毒性化，而 Opus 5.0 在长对话中产生严重不一致，引发对模型选择与输出控制的热议。

3. **[Claude Desktop 接近 5 小时使用限制时崩溃，需重装 #83403](https://github.com/anthropics/claude-code/issues/83403)** — 7 评论  
   桌面版在长时间使用后崩溃且无法重新打开，需要完全重装，疑似与使用时限或内存泄漏相关。

4. **[`--continue` 无法找到由 `-p` 创建的会话 #82536](https://github.com/anthropics/claude-code/issues/82536)** — 7 评论  
   交互式恢复（`--continue`）无法识别非交互模式（`-p`）生成的会话，影响自动化流程的连续性。

5. **[MCP 工具调用在长参数后静默丢弃后续参数 #72228](https://github.com/anthropics/claude-code/issues/72228)** — 5 评论，1 👍  
   v2.1.195 开始，当某个参数值很长时，后续所有参数在请求发出前被静默删除，导致 MCP 服务收到不完整参数集。

6. **[内置 ugrep 内存膨胀至 9–14 GB RSS #83342](https://github.com/anthropics/claude-code/issues/83342)** — 4 评论  
   执行有界间隔 BRE 时，内置 ugrep 内存占用可达 14 GB，且普通 grep 被透明重定向到它，影响大型仓库操作。

7. **[Claude Desktop Windows GPU 进程崩溃导致整个应用退出 #83744](https://github.com/anthropics/claude-code/issues/83744)** — 4 评论  
   GPU 进程 crash（exitCode 101457950）会拖垮整个应用，用户无法继续工作。

8. **[Chrome 扩展“始终允许”权限始终存为 once #74715](https://github.com/anthropics/claude-code/issues/74715)** — 4 评论  
   站点授权设置未持久化，导致每次浏览器操作都要重复询问，Chrome 扩展的权限管理失效。

9. **[Chrome 扩展跨机器驱动无可靠设备识别 #77605](https://github.com/anthropics/claude-code/issues/77605)** — 3 评论  
   已连接的浏览器可被其他机器无身份验证地驱动，存在重大安全隐患，要求增加设备绑定或身份验证。

10. **[会话记录可移植性：希望将 transcripts 项目化而 scratch 文件本地化 #81946](https://github.com/anthropics/claude-code/issues/81946)** — 3 评论，1 👍  
    用户希望会话记录能与项目一起迁移，同时临时文件保留在本地，通过 session ID 关联，便于团队协作与多机同步。

## 4. 重要 PR 进展

1. **[fix(scripts): 允许任何用户通过 thumbs down 防止自动关闭 #84365](https://github.com/anthropics/claude-code/pull/84365)** — 修复 #79146，使任何用户的负面反馈都能阻止 issue 自动关闭，与 dedupe bot 的承诺行为一致。

2. **[fix(hookify): 在 pretooluse 异常时 fail closed #84364](https://github.com/anthropics/claude-code/pull/84364)** — 修复当 hook 抛异常（如 ImportError）时仍以状态 0 放行工具执行的安全漏洞，现在异常将触发 `permissionDecision: 'deny'`。

3. **[添加 14 个革命性 Claude Code 插件（安全、性能、架构、全栈自动化） #41661](https://github.com/anthropics/claude-code/pull/41661)** — 新增 14 个插件目录和 marketplace.json 更新，共 27 个插件，但长期未合并，可能需要治理审核。

4. **[fix(code-review): 尊重 --comment 标志决定是否发布到 GitHub #16929](https://github.com/anthropics/claude-code/pull/16929)** — 修复 #16606，默认在终端输出，仅在指定 `--comment` 时才发布 GitHub 评论，避免意外发布。

5. **[fix: Cowork 自签名证书错误的临时解决方案 #84138](https://github.com/anthropics/claude-code/pull/84138)** — 针对 Bun 运行时未加载系统证书而导致的 “Self-signed certificate detected” 问题，在 hookify PostToolUse hook 中添加绕过逻辑，关闭 #24470。

## 5. 功能需求趋势

- **更细粒度的权限与安全控制**：如 GitHub 市场 org 级通配符管理、Chrome 扩展设备身份验证、会话授权仓库集合，社区对安全性的要求不断提升。
- **会话与项目可移植性**：多个 issue 要求会话记录可跨机器/项目迁移，并支持固定会话、自定义排序（#81946、#84368）。
- **IDE 与桌面端体验改进**：涉及快捷键自定义（#84348）、目录切换在无 git 仓库时的可达性（#84370），以及桌面崩溃修复。
- **模型行为可配置性**：用户希望更自主地控制模型语言风格、模型切换后的稳定性（#77136、#76660），避免被强制降级或行为突变。
- **MCP 与工具生态可靠性**：MCP 参数丢失、解析器静默吞参数、服务器自动重连等问题成为开发者频繁提及的痛点。

## 6. 开发者关注点

- **git 推送与代理冲突**：Cloud/Cowork 会话中授权仓库限制导致推送失败，即使使用 PAT 也无效（#76248），严重影响远程协作。
- **MCP 数据完整性**：长参数丢弃（#72228）和标签解析器静默吞字段（#84362）导致数据丢失，开发者呼吁更严格的参数校验和错误提示。
- **异常资源占用**：内置 ugrep 内存膨胀（#83342）拖垮环境，普通 grep 也被间接影响。
- **模型行为与安全策略透明度**：T&S 审查不透明（#84372）、模型被降级（#84340）以及 Opus 语言风格问题，反映出开发者希望有更清晰的反馈和控制机制。
- **环境可移植性与自动化连续性**：`--continue` 失效、会话记录无法迁移、桌面端崩溃恢复困难，都是高频阻碍自动化流程的问题。

---
以上为今日 Claude Code 社区动态摘要，完整信息请访问 [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-06

## 今日速览
- **0.146.1 补丁发布**：针对具备网络攻击能力的模型（cyber-capable models）收紧自动审查默认值，并在 TUI 中增加相关权限变更提示。
- **多代理兼容性争议升温**：多起 Issue 指出 Multi-Agent V2 将 OpenAI 专属 `agent_message` 负载发送给非 OpenAI 提供商，导致 DeepSeek、Ollama 等外部子代理无法消费任务内容（#33551、#34833、#36586）。
- **IDE 集成呼声最高**：多根工作区支持（👍143）与「将聊天会话限定到当前项目」（👍54）继续霸榜功能需求，社区对 VS Code 扩展的工作区隔离能力期待极高。

---

## 版本发布

### rust-v0.146.1（稳定补丁）
- **修复**：为 cyber-capable 模型启用更保守的自动审查默认值，并在终端界面中明示权限变更说明。
- **Changelog**：[Compare rust-v0.146.0...rust-v0.146.1](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1)

### rust-v0.147.0-alpha.x（预发布序列）
今日连续推出 **alpha.6.5 / alpha.10 / alpha.11 / alpha.12 / alpha.13** 五个迭代版本，主要面向 0.147.0 的功能整合与内部验证，尚未提供面向用户的明细变更说明。

---

## 社区热点 Issues

### 1. 多根工作区支持（Feature Request）
- **Issue [#2909](https://github.com/openai/codex/issues/2909)**（👍143 · 💬23 · 已关闭）
- VS Code 扩展无法正确处理 Multi-root Workspace，在 Linux 上复现。这是当前社区点赞量最高的需求，说明专业开发者对多项目同时协作的场景非常依赖。

### 2. 复制/导出消息为 Markdown
- **Issue [#2880](https://github.com/openai/codex/issues/2880)**（👍78 · 💬27 · 已关闭）
- 用户希望将对话内容一键导出为 Markdown，便于粘贴到文档和 GitHub Issue。当前只能复制纯文本或手工摘录，效率太低。

### 3. 浅色背景终端支持
- **Issue [#2020](https://github.com/openai/codex/issues/2020)**（👍60 · 💬24 · 已关闭）
- TUI 硬编码为深色背景优化，导致浅色终端下提示、补全和菜单几乎不可见。该问题长期高热度，社区对终端主题适配的需求强烈。

### 4. 将 VS Code 聊天范围限定到当前工作区
- **Issue [#25319](https://github.com/openai/codex/issues/25319)**（👍54 · 💬22 · 开启）
- 当前扩展的聊天/线程历史是全局共享的，切换项目时容易混淆上下文。社区希望 Codex 能像 Git 仓库一样按项目隔离会话。

### 5. Windows 下 GitHub OAuth 回调失败
- **Issue [#25203](https://github.com/openai/codex/issues/25203)**（👍21 · 💬38 · 已关闭）
- Desktop 应用在 Windows 上连接 GitHub 时提示 “Unable to find Electron app”，38 条评论表明影响面较大，目前已关闭（推测已修复或给出解决方案）。

### 6. MultiAgentV2 跨提供商子代理无法读取加密任务
- **Issue [#34833](https://github.com/openai/codex/issues/34833)**（💬8 · 开启）
- OpenAI 父代理向非 OpenAI 自定义子代理下发任务时，负载被加密，导致外部模型无法消费。这是多代理架构与自定义模型生态之间急需打通的断点。

### 7. DeepSeek 子代理收不到任务输入
- **Issue [#36586](https://github.com/openai/codex/issues/36586)**（👍3 · 💬5 · 开启）
- 在 Windows 上使用 DeepSeek 作为子代理时，`spawn_agent` 任务从未到达子代理，初始化完成后直接回复「无任务输入」。与 #34833/#33551 同属「自定义提供商 × 多代理」兼容性系列问题。

### 8. Multi-Agent V2 发送 OpenAI 专属消息给外部提供商
- **Issue [#33551](https://github.com/openai/codex/issues/33551)**（👍4 · 💬7 · 开启）
- Codex 将 OpenAI 特有的 `agent_message` 类型发送到 Ollama 等外部 Responses 提供商，模型无法识别，直接阻断任务下发。

### 9. TUI 中 Markdown 超链接不可点击
- **Issue [#25934](https://github.com/openai/codex/issues/25934)**（💬6 · 开启）
- 0.136.0 声称支持 OSC 8 超链接，但在多个终端模拟器下 TUI 内链接均无法点击，交互体验受损。

### 10. 递归信任项目根目录
- **Issue [#19426](https://github.com/openai/codex/issues/19426)**（👍23 · 💬4 · 开启）
- 现在必须为每个仓库单独添加信任条目，用户希望支持「信任某目录下所有项目」，简化大批量仓库管理。

---

## 重要 PR 进展

### 1. 统一图像预算（unified_image_budget）
- **PR [#37206](https://github.com/openai/codex/pull/37206)**（开启）
- 引入受控的 `unified_image_budget` 功能：对支持原始图像细节或 Responses Lite 的模型统一应用 6,000 像素 / 10,000 patch 预处理限制，并隐藏 `view_image` 中的细节控制选项。

### 2. 持久化用户消息队列派发
- **PR [#37204](https://github.com/openai/codex/pull/37204)**（已合并）
- 新增存储无关的队列扩展，支持列出、增删、重排、显式启动用户消息；当线程在完成一轮后空闲时按 FIFO 顺序派发队列消息。

### 3. Cyber 模型在首次 Guardian 拒绝后中断
- **PR [#37190](https://github.com/openai/codex/pull/37190)**（已合并）
- 为目录中归类为 `cyber` 的模型新增「Guardian 熔断」策略：首次被 Guardian 拒绝即中断该轮，并集中管理不同模型的拒绝阈值。

### 4. 远程 MCP 握手 HTTP 请求超时约束
- **PR [#37168](https://github.com/openai/codex/pull/37168)**（已合并）
- 修复流式 HTTP MCP 握手超时后底层请求仍在运行、阻塞串行执行器的问题；现在握手会遵循剩余初始化截止时间。

### 5. 旧版 Rollout 迁移：保留旧语义
- **PR [#37191](https://github.com/openai/codex/pull/37191)**（已合并）
- 由于旧版 rollout 可能包含回滚、压缩检查点和子代理历史副本，逐字迁移会改变恢复后的可见会话与模型上下文。该 PR 在迁移时保留这些旧语义，避免数据失真。

### 6. 将旧版 Rollout 迁移至分页历史
- **PR [#37175](https://github.com/openai/codex/pull/37175)**（已合并）
- 为 `LocalThreadStore` 新增 `migrate_rollouts`，支持 dry-run 与执行模式、可选线程选择、吞吐限制和逐 rollout 结果输出，将旧 JSONL 记录规范化到分页历史格式。

### 7. 为搜索工具保留 `tool_search` 命名空间
- **PR [#37188](https://github.com/openai/codex/pull/37188)**（已合并）
- 注册内置搜索工具前先移除名为 `tool_search` 的命名空间工具，避免共享模型可见表面；被移除的工具会被记录为冲突，便于严格错误处理。

### 8. 在世界状态中跟踪多代理使用提示
- **PR [#37189](https://github.com/openai/codex/pull/37189)**（已合并）
- 当配置变更或历史记录早于 usage-hint 追踪时，恢复的会话需要当前多代理指令。此改动将提示写入世界状态，并刷新变更或未追踪的条目。

### 9. TUI 文本域光标与渲染边界修复
- **PR [#37166](https://github.com/openai/codex/pull/37166)**（已合并）
- 当一个逻辑行恰好在文本域宽度内填满时，为插入点保留一个续行；同时处理溢出空格，保证明文、掩码和样式文本的描画不被裁切。

### 10. 远程环境就绪状态的测试覆盖
- **PR [#37156](https://github.com/openai/codex/pull/37156)**（已合并）
- 新增端到端测试：验证远程环境在「被选中执行前就已报告就绪」的场景下，`wait_for_environment` 能正确等待远程执行工具，保持所选能力角色符合预期。

---

## 功能需求趋势

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **VS Code 扩展工作区隔离** | #2909、#25319 | 👍143 + 👍54，多根工作区与按项目隔离会话是 IDE 用户最迫切的需求 |
| **多代理 × 自定义模型兼容** | #34833、#33551、#36586、#36321 | 8 条活跃 Issue 集中在外部提供商无法消费任务负载，说明自定义模型接入是双刃剑 |
| **TUI / 终端可用性** | #2020、#2880、#25934 | 浅色主题、Markdown 导出、OSC 8 链接，均围绕「把终端变成顺手的生产力工具」 |
| **Windows 平台稳定性** | #25203、#29242、#37043、#37186 | OAuth、sandboxPolicy、EnumWindows、用量限制等高频故障，Windows 依然是重灾区 |
| **沙箱与权限模型** | #19426、#29214、#29238 | 递归信任目录与 sandboxPolicy 缺失问题，暗示沙箱配置在跨平台上表现不一致 |
| **新模型能力适配** | #35300（GPT-5.6 prompt cache） | Codex 尚未支持 `prompt_cache_breakpoint`，无法利用 GPT-5.6 的缓存优化能力 |

---

## 开发者关注点

1. **多代理与第三方提供商仍然「半通」**：多个 Issue 指向同一个根因——Codex 内部通讯格式（`agent_message`、`encrypted_content`）没有为 Responses 兼容的非 OpenAI 提供商做适配。建议有自定义模型需求的开发者持续追踪 #33551 / #34833，在官方闭环前给子代理加一层「纯文本任务降级」的规避方案。
2. **Windows 的 Computer Use 功能依旧脆弱**：sandboxPolicy 元数据 missing 的问题从 6 月底一直持续到 8 月初（#29214/#29238/#29242 均已关闭，但 #37043 与 #37201 显示同一类故障以 0x80070003 形式复现），说明修复尚未完全落地。
3. **用量限制判定疑似存在误报**：#37186（8月6日新建）报告剩余额度为 5.3 的 Codex Spark 被判定超限，且附带 in-app 反馈 ID，值得官方排查额度判定逻辑。
4. **对「安全 vs 可用」的平衡非常敏感**：0.146.1 对 cyber-capable 模型收紧审查默认值即引发讨论；同时 PR #37190 的「一次 Guardian 拒绝即中断」也被社区视为激进策略。安全团队需要在防滥用和可操作性之间找到更细粒度的方案。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-06

## 今日速览

今日最值得关注的是 **v0.54.0 正式版发布**，同时 v0.55.0-preview.1 与 v0.55.0-nightly 也已推出，nightly 版包含 macOS seatbelt 修复与 PR 生成器核心模块增强。社区讨论焦点集中在 **Agent/子代理稳定性**（挂起、状态误报、Shell 卡住）与 **Auto Memory 系统质量**（低信号会话重试、脱敏与日志）上，多个 P1 级问题持续发酵，开发者对 Agent 可靠性的诉求非常强烈。

## 版本发布

### v0.54.0（正式版）
- 包含 v0.53.0-preview.0 与 v0.52.0 的 changelog
- 正式版本号推进，建议关注该版本中 Agent 相关修复的回归情况
- 链接：https://github.com/google-gemini/gemini-cli/releases

### v0.55.0-preview.1（预览版）
- 主要是版本号升级与 changelog 同步，为下一个预览版做准备
- 链接：https://github.com/google-gemini/gemini-cli/releases

### v0.55.0-nightly.20260806.g761f604c1（夜间版）
- **fix(cli)**: macOS 上若系统缺失 seatbelt profiles，则回退使用内置配置（作者: @amelidev）
- **feat(pr-generator-core)**: 新增环境配置解析器、命令执行器与 GitHub 集成能力（作者: @joneba-google）
- 链接：https://github.com/google-gemini/gemini-cli/releases

---

## 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功 🔴 P1
**#22323** — `codebase_investigator` 子代理实际已触发最大轮次限制、未做任何分析，但最终却报告 `status: "success"`、`Termination Reason: "GOAL"`。这种状态误报会严重掩盖真实的中断原因，影响 Agent 行为评估与调试。

- 评论 12 | 👍 2 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/22323

### 2. Generalist Agent 无限挂起 🔴 P1
**#21409** — 只要 Gemini CLI 委托给 generalist agent，就会永久挂起（连"创建文件夹"这类简单操作也如此），用户最长等待一小时后被迫取消。社区获得 **8 个 👍**，说明影响范围较广。当前唯一的绕过方式是提示模型不要使用子代理。

- 评论 8 | 👍 8 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/21409

### 3. Shell 命令执行完仍卡在"Waiting input" 🔴 P1
**#25166** — 极简单的 CLI 命令执行完成后，Gemini 仍显示该 shell 命令处于活动状态并等待用户输入，导致会话挂起。此问题可稳定复现，在自动化工作流中是致命伤。

- 评论 4 | 👍 3 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/25166

### 4. Browser Subagent 在 Wayland 下失败 🔴 P1
**#21983** — 浏览器子代理在 Wayland 环境下运行失败，终止原因为 GOAL，但实际没有完成任何有效操作。考虑到 Wayland 的普及率，这限制了 Linux 桌面用户的使用体验。

- 评论 4 | 👍 1 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/21983

### 5. 高内存使用问题 🟠 P2
**#28698** — 用户报告在 v0.53.1 中进程空闲期间内存使用持续增长，形成类似循环的行为。该问题创建于 8 月 5 日，一天内已获得 5 条评论。

- 评论 5 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/28698

### 6. Auto Memory 无限重试低信号会话 🟠 P2
**#26522** — Auto Memory 只有当提取代理成功用 `read_file` 读取转录后，才会将会话标记为"已处理"。如果代理判断会话为低信号而跳过读取，该会话会反复出现在待处理队列中，导致无限重试循环，浪费模型调用资源。

- 评论 5 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/26522

### 7. Auto Memory 缺少确定性脱敏，日志泄露风险 🟠 P2 / 安全
**#26525** — Auto Memory 将本地转录内容发送给后台提取模型，但提示词要求模型脱敏是在内容进入模型上下文**之后**才发生的；同时服务日志可能记录已有技能描述等敏感信息。建议实现确定性脱敏并削减日志输出。

- 评论 4 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/26525

### 8. 组件级评估体系 EPIC 🟠 P1
**#24353** — 这是行为评估体系（behavioral evals）的后续 EPIC。目前已积累 76 个行为测试，覆盖 6 个 Gemini 模型。社区呼吁建立更鲁棒的组件级评估设施，以应对 Agent 行为回归。

- 评论 7 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/24353

### 9. AST 感知的文件读取与代码库映射 🟠 P2
**#22745** — EPIC 跟踪一系列关于 AST 感知工具价值的调研：精确读取方法边界、减少跨轮次读取的 token 消耗、改进代码库导航等。社区希望引入 AST 能力来提升子代理的代码理解效率。

- 评论 7 | 👍 1 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/22745

### 10. Gemini 几乎不主动使用自定义 Skills 和 Sub-agents 🟠 P2
**#21968** — 用户反馈即使用户定义了 gradle、git 等技能，Gemini 在相关场景下也不会主动调用，只有在显式指示时才会使用。这削弱了用户自定义扩展的实际价值。

- 评论 6 | 更新于 2026-08-06
- https://github.com/google-gemini/gemini-cli/issues/21968

---

## 重要 PR 进展

### 1. fix(cli): 向重启动的子进程转发终止信号 🟡 P2
**#28676** — `relaunchAppInChildProcess` 现在会将 SIGTERM、SIGHUP、SIGINT、SIGQUIT、SIGUSR1、SIGUSR2 从 bootstrap 父进程转发给子进程，避免 `kill -TERM` 父进程后留下孤儿进程。

- 状态: OPEN | size/m
- https://github.com/google-gemini/gemini-cli/pull/28676

### 2. fix(core): 使用存储的 client ID 刷新 MCP OAuth 令牌 🟡 P1 / 安全
**#28481** — 修复通过 OAuth discovery + 动态客户端注册方式配置的 MCP server 无法刷新令牌的问题。此前刷新在任何网络请求前就失败，并会删除已存凭据，迫使用户反复重新认证。

- 状态: CLOSED | size/m
- https://github.com/google-gemini/gemini-cli/pull/28481

### 3. fix(cli): 为所有用户将 gemini-3.5-flash 加入模型选择器 🟡 P2
**#28485** — 修复 v0.51.0 用户无法在模型选择器中看到 gemini-3.5-flash / gemini-3.6-flash 的问题。根因是 `buildAvailableModels` 和 `ModelDialog` 仍硬编码指向 `gemini-2.5-flash`。

- 状态: CLOSED | size/m
- https://github.com/google-gemini/gemini-cli/pull/28485

### 4. feat(cli): 上下文窗口溢出时自动压缩聊天历史 🟢 新功能
**#28488** — 新增 `model.autoCompressOnOverflow` 设置：当上下文即将溢出时，自动压缩聊天历史而不是停住报错。流程为：取消当前提交 → 提示用户 → 调用 `tryCompressChat` 压缩。

- 状态: CLOSED | size/m
- https://github.com/google-gemini/gemini-cli/pull/28488

### 5. fix(core): 保留 functionCall 的 thoughtSignature 以修复 400 错误 🟡 P2
**#28586** — 修复 v0.53.0 引入的回归：并行工具调用时 `thoughtSignature` 被意外剥离，导致 400 Bad Request。此问题严重打击并行工具调用场景。

- 状态: OPEN | size/m
- https://github.com/google-gemini/gemini-cli/pull/28586

### 6. fix(cli): 在 @ 处理时跳过 diff hunk 标记 🟡 P2 / 性能
**#28581** — 防止 unified/combined diff 中的 hunk 标记被误解析为 `@file` 引用。此前每个 hunk 会触发两次递归全工作区 glob 搜索，在大 diff 场景下导致 `minimatch`/`path-scurry` 堆内存增长。

- 状态: OPEN | size/m
- https://github.com/google-gemini/gemini-cli/pull/28581

### 7. fix(sdk): 格式错误的工具参数不再中止 sendStream 🟡 P2
**#28695** — `GeminiCliSession.sendStream()` 对字符串类型的工具参数调用了无保护的 `JSON.parse()`，一旦模型输出格式错误的 JSON 就会抛出异常并中断整个流。现在改为防御性解析，并关闭了对应的 issue #28649。

- 状态: CLOSED | size/m
- https://github.com/google-gemini/gemini-cli/pull/28695

### 8. fix(core): 解析嵌套的 gaxios 流式错误以提升配额/限流处理 🟡 P2
**#28689** — 改进对底层 HTTP 客户端嵌套流式错误的解析与回退逻辑，使配额（quota）与速率限制（rate limit）错误能被正确分类和格式化，提升 Gemini Code Assist（GCA）的容错能力。

- 状态: CLOSED | size/m, size/l
- https://github.com/google-gemini/gemini-cli/pull/28689

### 9. fix(core): 动态解析 Cloud Workstations 代理重定向 URI 🟡 P3 / 安全
**#28688** — 修复 Google Cloud Workstations VM 中 OAuth 2.0 认证失败的问题：原先静态配置重定向到 `http://localhost:<port>/oauth/callback`，但开发者的浏览器实际运行在本地机器上，需要动态解析代理地址。

- 状态: OPEN | size/m, size/l
- https://github.com/google-gemini/gemini-cli/pull/28688

### 10. fix(vscode-ide-companion): 移除 activate() 中的逗号运算符包装 🟡 P2
**#28494** — 移除 activate() 中逗号运算符导致的 Disposable 泄漏，这些泄漏使得 `gemini.diff.accept` 和 `onDidChangeWorkspaceFolders` 无法在插件停用时正确清理（关闭 #27790）。

- 状态: CLOSED | size/xs
- https://github.com/google-gemini/gemini-cli/pull/28494

---

## 功能需求趋势

从近期 Issues 和 PR 中可以提炼出社区最关注的功能方向：

1. **Agent/子代理可靠性** — 最集中的方向。包括子代理 hang（#21409）、状态误报（#22323）、Shell 交互卡死（#25166）、浏览器代理在 Wayland 下失败（#21983）等。社区期望 Agent 具备更完善的错误恢复与状态真实性。
2. **Auto Memory 质量与安全** — 多个 issue 围绕记忆系统：#26522 低信号会话无限重试、#26523 无效补丁隔离与隔离区机制、#26525 确定性脱敏与日志削减。反映出后台记忆提取需要更保守、可审计的设计。
3. **AST 感知的开发工具链** — #22745 与 #22746 探索用 AST 感知方式改进文件读取、代码搜索与代码库映射，旨在减少多轮读取的 token 开销与噪声，提升子代理代码理解效率。
4. **上下文管理自动化** — PR #28488 引入自动上下文压缩；Issue #24246 反映工具数量超过 128 个时触发 400 错误。社区希望 CLI 能更聪明地管理上下文窗口与工具作用域。
5. **安全与权限控制** — #26525 要求脱敏前置、#22672 建议模型避免使用 `git reset`/`--force` 等破坏性命令、#22093 报告 v0.33.0 后子代理绕过禁用配置运行。安全边界被持续关注。

---

## 开发者关注点

1. **Agent 挂起是最大的体验杀手**：generalist agent 与 Shell 命令卡住（#21409、#25166）让自动化流程无法收敛，且目前只能通过"禁止使用子代理"来规避，属于较难接受的 workaround。
2. **状态报告不可信**：子代理达到 MAX_TURNS 却显示 GOAL 成功（#22323），会误导用户对 Agent 输出的判断，也影响对 Agent 质量的评估与调试。
3. **内存与性能问题**：v0.53.1 的空闲内存增长（#28698）、大 diff 时堆内存膨胀（#28581）、AI 频繁创建临时脚本造成工作区污染（#23571），这些性能/清理成本是实际使用中的高频噪音。
4. **上下文窗口频繁触顶**：工具数量过多导致 400 错误（#24246）、上下文溢出需要手动处理，开发者希望 CLI 自动压缩或裁剪（#28488），而不是中断任务。
5. **自定义 Skill 与 Sub-agent 的"不可见性"**：模型默认几乎不使用用户自定义技能（#21968），同时自定义 agent 文件如果是 symlink 则无法被识别（#20079），这两点限制了用户扩展生态的积极性。
6. **权限与安全控制粒度**：开发者希望 Agent 在 git 操作、数据库维护、资源修改等场景下主动采用更安全的替代方案（#22672），并在执行前有更清晰的权限确认机制。

---

*本日报数据来源：github.com/google-gemini/gemini-cli（Issues/PRs/Releases 近 24 小时更新）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-06）

## 📌 今日速览

过去 24 小时，Copilot CLI 发布了 v1.0.79-5，新增多会话并发管理能力，并对 Prompt pinning 与沙盒构建缓存做了调整。社区方面，**MCP 相关问题集中爆发**（初始化失败、策略阻止、OAuth 3LO 不支持等约 7 个新 Issue），同时 **模型行为不透明**（如 GPT-5.6 Terra 默默委托 Claude Opus 执行）引发用户对成本与可控性的担忧。

---

## 🚀 版本发布（过去 24 小时）

### v1.0.79-5（最新）
- **新增**：从 Sessions 标签页和侧边栏管理多个并发会话
- **改进**：Prompt pinning 默认关闭，需设置 `pinnedPrompts: true` 启用
- **修复**：沙盒包装构建（`make` 等）现在可根据构建清单获取所需的开发工具缓存

### v1.0.79-4
- 预发布版本，无详细变更说明

### v1.0.79-3
- **改进**：使用 `/worktree new` 可在新工作树中启动新会话

### v1.0.79-2
- **改进**：Pinned prompt 位置上移一行，减少对时间线的垂直占用
- **改进**：在低于 30 行的终端上默认关闭 pinned prompt，避免遮挡输出；可通过 `pinnedPrompts` 手动开启

---

## 🔥 社区热点 Issues（TOP 10）

### 1. 如何关闭 alt-screen 视图？
- **Issue**: [#1799](https://github.com/github/copilot-cli/issues/1799)
- **状态**: OPEN | **标签**: `area:configuration`, `area:terminal-rendering`
- **数据**: 12 评论 | 8 👍
- **关注点**: 最新 alt-screen 渲染模式给大量用户带来困扰，这是当前评论最活跃的 Issue。用户希望恢复原有渲染方式，表明该 UI 变更对实际工作流产生了显著冲击。

---

### 2. claude-haiku-4.5 不支持 'medium' reasoning effort
- **Issue**: [#4345](https://github.com/github/copilot-cli/issues/4345)
- **状态**: OPEN | **标签**: `area:agents`, `area:models`
- **数据**: 2 评论 | 4 👍
- **关注点**: 当 `copilot_cli_opus_medium_effort_default` 与 `copilot_cli_gpt_5_4_mini_for_explore` 两个特性标志同时启用时，子代理执行反复抛错。模型支持矩阵与特性标志之间存在配置冲突，影响依赖 Claude Haiku 的轻量任务。

---

### 3. "Somebody else is owning the clipboard" 奇怪消息
- **Issue**: [#3172](https://github.com/github/copilot-cli/issues/3172)
- **状态**: OPEN | **标签**: `area:input-keyboard`, `area:terminal-rendering`
- **数据**: 2 评论 | 7 👍
- **关注点**: 复制操作触发多余提示并破坏状态栏布局。虽然不影响核心功能，但获得较多 👍，说明交互体验问题受到广泛认同。

---

### 4. 内置 view 工具对现有文件报告 "Path does not exist"（1.0.73 回归）
- **Issue**: [#4202](https://github.com/github/copilot-cli/issues/4202)
- **状态**: OPEN | **标签**: `area:non-interactive`, `area:tools`
- **数据**: 5 评论 | 1 👍
- **关注点**: v1.0.72 开始引入，v1.0.73 仍存在。内置 `view` 工具无法读取现有文本文件，而 v1.0.71 正常。属于核心工具链的严重回归，影响自动化与文件读取场景。

---

### 5. /mcp search 在 Azure DevOps 远程仓库中返回 400 错误
- **Issue**: [#4374](https://github.com/github/copilot-cli/issues/4374)
- **状态**: OPEN | **标签**: `triage`
- **数据**: 0 评论 | 4 👍
- **关注点**: 当 git remote 指向 Azure DevOps（而非 GitHub）时，`/mcp search` 始终返回 400。异构 Git 环境下的用户完全无法使用 MCP 注册表浏览器，是 MCP 功能对非 GitHub 场景适配不足的典型体现。

---

### 6. MCP 初始化失败：server/discover 返回 -32602
- **Issue**: [#4370](https://github.com/github/copilot-cli/issues/4370)
- **状态**: OPEN | **标签**: `triage`
- **数据**: 2 评论 | 1 👍
- **关注点**: v1.0.79-1 的 MCP 回归——FastMCP 等实现不响应 `server/discover` 方法时，CLI 直接判定为失败。这压缩了与主流 MCP 框架的兼容空间，属于新版本引入的兼容性 bug。

---

### 7. GPT-5.6 Terra 默默委托 Opus 子代理
- **Issue**: [#4377](https://github.com/github/copilot-cli/issues/4377)
- **状态**: OPEN | **标签**: `triage`
- **数据**: 0 评论 | 0 👍
- **关注点**: 用户在 IntelliJ 插件（底层由 Copilot CLI 驱动）中配置 `gpt-5.6-terra` 生成计划，却产生大量 Opus 积分消耗。模型委托行为完全不透明，用户对成本失控和安全边界产生担忧。

---

### 8. GHEC 数据驻留实例：MCP 注册表策略获取 401/403
- **Issue**: [#4378](https://github.com/github/copilot-cli/issues/4378)
- **状态**: OPEN | **标签**: `triage`
- **数据**: 0 评论 | 0 👍
- **关注点**: 在启用数据驻留的 GitHub Enterprise Cloud（`<tenant>.ghe.com`）上，所有用户自定义 MCP 服务器被静默丢弃，仅平台默认 MCP 可用。这是企业级环境的 Blocking 问题，影响安全合规与定制化扩展。

---

### 9. 支持 BYOM 提供商的模型发现与会话内切换
- **Issue**: [#4376](https://github.com/github/copilot-cli/issues/4376)
- **状态**: OPEN | **标签**: `triage`
- **数据**: 0 评论 | 0 👍
- **关注点**: BYOM 配置目前仅支持单一 `COPILOT_MODEL` 值，切换模型必须重启 CLI。用户（如通过 Vertex AI OpenAI 兼容端点 + gcloud 认证）希望支持运行时模型发现与切换，这是一个明确的产品能力缺口。

---

### 10. Windows 平台反复崩溃（原生运行时）
- **Issue**: [#4026](https://github.com/github/copilot-cli/issues/4026)
- **状态**: OPEN | **标签**: `area:sessions`, `area:platform-windows`
- **数据**: 2 评论 | 0 👍
- **关注点**: 自 2026-05-24 起，Windows 用户在正常交互使用中频繁崩溃，已跨 v1.0.15、v1.0.52、v1.0.53 等多个版本且无法复现到具体操作。稳定性问题持续两个多月未解决，Windows 用户受影响严重。

---

## 🔨 重要 PR 进展

过去 24 小时无 PR 更新（共 0 条）。

---

## 📈 功能需求趋势

从近期 Issues 中可以提炼出社区最关注的五大方向：

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **MCP 生态兼容性** | #4370, #4374, #4378, #4371, #3934 | FastMCP 初始化、Azure DevOps 远程适配、GHEC 数据驻留策略、OAuth 3LO 授权、自定义 registry 策略等——MCP 已成为新 Issue 的最大来源 |
| **模型选择透明度** | #4377, #4376, #3135, #4345 | 用户要求看到实际使用的模型、支持会话内切换、修复 BYOK/BYOM 状态显示错误、避免静默委托到非预期模型 |
| **终端 UI 可控性** | #1799, #3172, v1.0.79-2 | alt-screen 可关闭、剪贴板监控提示可抑制、小终端自动降级渲染 |
| **会话管理与多任务** | #4373, #4372, v1.0.79-5 | 排队消息可靠性、steering 消息顺序、多会话并发管理（已在最新版初步实现） |
| **企业合规与安全** | #4378, #3934, #3013 | 数据驻留实例的策略拉取、MCP 策略阻止、hooks 对后台代理的强制性问题 |

---

## 🧐 开发者关注点

1. **MCP 碎片化严重**：在不同 MCP 服务器实现（FastMCP）、不同 Git 远程（Azure DevOps）、不同企业环境（GHEC 数据驻留）下，CLI 的 MCP 行为差异巨大且均以报错或静默丢弃告终。开发者期待更统一、更宽容的 MCP 兼容层。

2. **升级回归频率升高**：v1.0.72/73（view 工具回归）、v1.0.79-1（MCP `server/discover` 回归）接连引入新问题。部分团队可能开始对版本升级持保守态度。

3. **模型成本不可控**：GPT-5.6 Terra 委托 Opus 的案例引发讨论——用户对"配置的模型"与"实际执行的模型"不一致缺乏知情与干预手段，深度规划任务的成本预估存在盲区。

4. **平台稳定性差异**：Windows 崩溃问题持续两个月未解决、macOS 出现 `MallocStackLogging` stderr 垃圾信息。跨平台质量的一致性是当前社区反馈中反复出现的隐性诉求。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-06）

## 今日速览

过去 24 小时，Kimi Code CLI 社区的核心动态集中在一个未发布版本前的快速修复期：#2588 暴露的“模型未声明 capabilities 时，图像 MCP 工具在副作用生效后中止任务且无修复提示”问题，已由 #2592 和 #2590 两个 PR 分工响应；同时 #2591 揭示了 StrReplaceFile 会破坏编辑区域外非 UTF-8 字节的数据完整性问题；此外，长期活跃的功能请求 #1283（跨会话记忆系统）仍在持续讨论。

## 版本发布

过去 24 小时内无新版本发布。

## 社区热点 Issues（当前活跃共 3 条）

### 1. #1283 [功能请求] 记忆系统：跨会话持久上下文
- **作者**: CatKang | **更新**: 2026-08-06 | **评论**: 19 | **状态**: 开放
- **链接**: [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **核心内容**: 建议实现一套完整的 **Memory System**，使 CLI 能跨会话记住项目上下文、项目模式（patterns）与用户偏好。方案包括 AI 自动管理的笔记（automatic memory）和用户手动定义的指令（manual memory）。
- **关注理由**: 这是当前评论数最高（19 条）的 Issue。跨会话上下文缺失是多会话开发工作流的核心痛点，直接关系到 CLI 在 Agentic 场景下的实用性，社区讨论热度高。

### 2. #2591 [Bug] StrReplaceFile 损坏编辑区域外的不可解码字节
- **作者**: shoemoney | **创建**: 2026-08-05 | **评论**: 0 | **状态**: 开放
- **链接**: [MoonshotAI/kimi-cli Issue #2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)
- **核心内容**: `StrReplaceFile` 使用 `errors="replace"` 解码整个文件→执行字符串编辑→将整个字符串写回。文件中任意位置（包括远离编辑区域）的非 UTF-8 字节会被替换为 U+FFFD，并以 `EF BF BD` 写回磁盘，导致文件长度和内容意外改变。
- **关注理由**: 这是严重的数据完整性问题——用户在对纯文本文件做局部编辑时，可能在不知情的情况下破坏图片、字体等二进制资源，属于高风险 bug。

### 3. #2588 [Bug] 模型未声明 capabilities：图像返回型 MCP 工具在副作用发生后中止任务，且无修复提示
- **作者**: tic-top | **创建**: 2026-08-05 | **评论**: 0 | **状态**: 开放
- **链接**: [MoonshotAI/kimi-cli Issue #2588](https://github.com/MoonshotAI/kimi-cli/issues/2588)
- **核心内容**: 当 `config.toml` 中的模型未声明 `capabilities`，且某个 MCP 工具返回图像时，任务会在工具已运行并产生副作用之后被中止，报错信息中也没有提示用户应修正哪项配置。
- **关注理由**: 该问题实际包含两个独立缺陷：①工具副作用生效后才暴露能力不足，导致任务半途失败且无法回滚；②错误信息未指出修复方法，排障成本高。已触发两个 PR 跟进修复，说明影响面较大。

## 重要 PR 进展（当前活跃共 3 条）

### 1. #2592 fix(soul): 将不支持的 tool media 降级处理，不再中途中止任务
- **作者**: rainbowgore | **创建**: 2026-08-06 | **状态**: 开放
- **链接**: [MoonshotAI/kimi-cli PR #2592](https://github.com/MoonshotAI/kimi-cli/pull/2592)
- **关联**: Resolve #2588
- **功能/修复**: 修复模型未配置 `capabilities` 且工具返回图像时的异常行为。此前 `_grow_context` 会在工具执行后抛出 `LLMNotSupported`，导致回合终止；该 PR 将行为改为“降级处理”（degrade），避免任务在副作用已生效后被硬中断。

### 2. #2590 fix(soul): 在 unsupported-capability 错误中指明配置修复方式
- **作者**: ayaangazali | **创建**: 2026-08-05 | **状态**: 开放
- **链接**: [MoonshotAI/kimi-cli PR #2590](https://github.com/MoonshotAI/kimi-cli/pull/2590)
- **关联**: Partially addresses #2588
- **功能/修复**: 针对 #2588 中“错误信息无修复提示”的子问题，优化报错文案，明确告知用户需要补充哪一项能力配置（例如 `capabilities` 中缺少的具体条目），提升排障效率。

### 3. #2589 docs: 在文档中提及 qwen-audio-agent 作为语音 ACP 客户端
- **作者**: x-lixu | **创建**: 2026-08-05 | **状态**: 开放
- **链接**: [MoonshotAI/kimi-cli PR #2589](https://github.com/MoonshotAI/kimi-cli/pull/2589)
- **功能/修复**: ACP 章节原本只列出编辑器/IDE 客户端（Zed、JetBrains）。该 PR 在 ACP gif 后增加一句说明，介绍 qwen-audio-agent——一个开源全双工语音运行时，可启动 `kimi acp` 作为 agent，让用户以“免提语音对话”方式操作 Kimi CLI。
- **备注**: 作者已声明该项目与自身存在关联（Disclosure），评审时需注意利益冲突。

## 功能需求趋势

从当前活跃的 Issues/PRs 中可提炼出以下社区关注方向：

- **跨会话记忆与状态持久化**（#1283）：用户希望 CLI 能自动管理笔记、记住项目模式与用户偏好，从“单次会话工具”演进为“长期协作 Agent”。
- **工具执行与能力边界管理**（#2588 / #2592 / #2590）：需要更稳健的 capabilities 检测机制，在调用工具前预判能力范围，并给出可操作的配置修复指引，而不是在中途仓促失败。
- **文件编辑的二进制安全性**（#2591）：工具链在处理包含非文本内容时，必须保证只修改目标区域，避免因全文件解码/编码导致数据损坏。
- **语音 / 多模态前端接入**（#2589）：社区开始探索通过 ACP 协议将语音运行时（如 qwen-audio-agent）接入 Kimi CLI，扩展 IDE 之外的人机交互入口。

## 开发者关注点

- **错误提示需要“直接给出修复动作”**：开发者在配置缺失时不愿意看到笼统报错，期望错误信息中直接指明补充哪一项 config 配置（#2588 → #2590）。
- **工具副作用不可逆的代价很高**：MCP 工具先执行后校验会导致外部系统状态被污染，应在调度前校验模型能力，或在失败时提供补偿机制（#2588 → #2592）。
- **编辑操作不得破坏编辑区域外的数据**：开发者对文件操作的安全性高度敏感，要求工具实现真正的“精准编辑”，而不是依赖有损解码兜底（#2591）。
- **多会话上下文成为刚需**：随着 CLI 逐渐承担 Agent 角色，开发者明确表示需要跨会话的自动/手动记忆机制来持续积累项目知识（#1283）。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-08-06** | 数据源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)


## 今日速览

v1.18.14 发布，带来 xAI 登录流程简化与流式错误重试改进。社区方面，**插件/技能市场**（#28696，23 👍）仍是呼声最高的功能需求，而 **Windows 终端退出崩溃** 与 **OpenCode GO 订阅可用性** 成为开发者反馈最集中的两类问题。PR 侧，V1→V2 兼容层移除与数据迁移工作进入收尾阶段。


## 版本发布

### v1.18.14
**Core 改进**
- 简化 xAI 登录流程为单一设备码（device-code），在无头（headless）和远程环境中表现更好
- 修复：保留结构化的流中（mid-stream）提供商错误，使兼容的提供商能够重试失败的响应
- 修复：对更多瞬态提供商/网络错误增加重试


## 社区热点 Issues

> 以下 10 个 Issue 从更新最活跃的 50 条中选出，兼顾讨论热度、社区关注度与代表性。

### 1. [#28696：插件/Agent/技能市场（开放）](https://github.com/anomalyco/opencode/issues/28696)
提出建立统一的 OpenCode 插件市场/注册表/分发系统，涵盖发现、安装与更新。**23 👍 / 7 评论**，是当前社区最期待的功能方向之一。

### 2. [#40791：GO 订阅基本不可用（开放）](https://github.com/anomalyco/opencode/issues/40791)
用户反馈 GO 订阅请求/响应极慢，且部分地区 GPT 模型返回 403「不支持该区域」错误。属于**付费用户的直接体验问题**，需重点关注。

### 3. [#14026：部分模型不生成代码（已关闭）](https://github.com/anomalyco/opencode/issues/14026)
gpt-oss:14b 正常，但 qwen2.5-coder:14b、ministral-3:14b 只会输出工具调用却实际不执行。**9 条评论**为今日最多，本地 Ollama 用户受影响明显。

### 4. [#27749：/exit 或 /quit 杀死 Windows 终端（已关闭）](https://github.com/anomalyco/opencode/issues/27749)
退出 TUI 时整个 PowerShell 窗口/标签页被关闭，而非返回 shell 提示符。同类问题还有 #28673、#30495 和 #26480，**Windows 终端兼容性问题尤为突出**。

### 5. [#31105：CLI 终端重复输出消息标记数字（已关闭）](https://github.com/anomalyco/opencode/issues/31105)
系统消息标记被错误渲染为纯数字（如 "259 259 259…"），持续填满整个终端屏幕，跨窗口复现，Windows 下影响严重。

### 6. [#31099：桌面版渲染器冻结 / Solid.js 无限循环（已关闭）](https://github.com/anomalyco/opencode/issues/31099)
macOS Desktop v1.16.2 在约 12 分钟后渲染进程无响应，报 Solid.js findDOMIndex 无限循环。**桌面端稳定性**问题引发讨论。

### 7. [#31042：small_model 被忽略且触发 90 秒重试阻塞（已关闭）](https://github.com/anomalyco/opencode/issues/31042)
标题生成始终强行使用 `opencode/deepseek-v4-flash-free` 而忽略 `small_model` 配置，并伴随 FreeUsageLimitError 重试循环，拖慢整个会话约 90 秒。

### 8. [#35881：kotlin-ls 自动安装静默失败（开放）](https://github.com/anomalyco/opencode/issues/35881)
LSP 对 Kotlin/Gradle 项目自动安装 kotlin-ls 时，创建空缓存目录后从不启动，且**无任何错误日志**，排查困难。

### 9. [#39291：压缩发送变异 thinking 块导致 400 死循环（开放）](https://github.com/anomalyco/opencode/issues/39291)
启用 Anthropic 扩展思考时，上下文压缩会发送被修改的 `thinking` 块，触发永久 400 invalid_request_error 重试循环，**影响长会话数据完整性**。

### 10. [#29272：添加 /simplify 自动化代码审查技能（已关闭）](https://github.com/anomalyco/opencode/issues/29272)
希望借鉴 Claude Code 的 /simplify 命令，启动并行代理对代码进行简化重构与审查，反映社区对**内置高质量技能**的普遍需求。


## 重要 PR 进展

> 以下 10 个 PR 从过去 24 小时更新的 50 条中选出，突出架构演进、功能新增与关键修复。

### 1. [#40608：refactor(app) — 使用原生 v2 类型（开放）](https://github.com/anomalyco/opencode/pull/40608)
将 App 层的冗余类型别名替换为生成的 V2 客户端类型，原生渲染 V2 权限请求字段，移除遗留适配层。为后续 V1 清理铺路。

### 2. [#40382：refactor(app) — 移除 V1 兼容性（已关闭）](https://github.com/anomalyco/opencode/pull/40382)
删除 V1 协议检测、兼容适配器、旧客户端面与迁移文档，App 流量完全切换至 V2，并移除 `@opencode-ai/sdk`。**架构演进的重要里程碑**。

### 3. [#40723：feat(core) — 将 V1 数据迁移到 V2（已关闭）](https://github.com/anomalyco/opencode/pull/40723)
实现 REST 触发的 V1 会话历史迁移，支持可恢复进度，导入 V2 会话数据与遗留 JSON 凭据，同步更新 TUI 迁移流程。

### 4. [#40784：feat(core) — 托管工作区执行（开放）](https://github.com/anomalyco/opencode/pull/40784)
引入 **Workspace** 作为持久执行环境：沙箱是 Workspace 的一种，会话可通过 `workspaceID` 在远端环境中运行，复用现有 runner 图与工具。`kitlangton` 的又一核心贡献。

### 5. [#38790：feat(app) — 新布局支持工作区流程（开放，beta）](https://github.com/anomalyco/opencode/pull/38790)
新建会话时可选择本地仓库、启动隔离的**新工作区**或选择**已有工作区**，并在 Composer 中提供上下文感知的位置选择器。

### 6. [#35311：fix(core) — 同一仓库的多个克隆视为不同项目（开放）](https://github.com/anomalyco/opencode/pull/35311)
一次性关闭 **15 个相关 Issue**（#17940、#19348、#29869 等），修复仓库多克隆导致的项目识别混乱问题。

### 7. [#40781：feat(app) — 从 UI 导出会话为 JSON](https://github.com/anomalyco/opencode/pull/40781)
新增「导出会话」能力：会话菜单增加 Export 选项、Context 页增加导出按钮、命令面板增加 `/export` 命令。

### 8. [#40590：feat — 安装脚本支持 GITHUB_TOKEN 认证（开放）](https://github.com/anomalyco/opencode/pull/40590)
解决匿名 GitHub 请求在受限网络/CI 中失败的问题，安装脚本现可读取 `GITHUB_TOKEN` 完成版本检测、发布判断与资产下载。

### 9. [#40794：fix(desktop) — 禁用打包版控制台日志（开放）](https://github.com/anomalyco/opencode/pull/40794)
打包版 Desktop 不再向控制台输出 electron-log，避免 stdout/stderr 管道无消费者时造成的阻塞；开发版与文件日志不受影响。

### 10. [#40772：fix(opencode) — 缺失认证方法时报错而非崩溃（开放）](https://github.com/anomalyco/opencode/pull/40772)
`ProviderAuth.authorize` 对 hook 表直接索引无保护，现改为在缺失时给出明确错误提示，提升错误可诊断性。


## 功能需求趋势

- **插件/市场体系**：#28696 提出统一市场/注册表/分发系统，涵盖发现、安装与更新，获得 23 👍 高关注，预计将成为 OpenCode 生态扩展的核心方向。
- **本地模型与 LAN 发现**：#14026（Ollama 模型兼容）、#27554（本地 LAN 提供商自动发现 + 模型发现），社区对本地/私有化部署的支持诉求持续升温。
- **V1→V2 平滑迁移**：多个 PR（#40382、#40723、#40608）集中推进 V2 架构落地与数据迁移，是当前开发优先级最高的技术主线。
- **可配置性与操作体验**：#31100（CTRL+W 可配置）、#30057（bash arity 字典扩展）、#16226（仅按钮发送），为常见操作提供更多自定义空间。
- **会话管理增强**：#40781（会话导出 JSON）、#17251（拆分会话消息、允许编辑模型回复）、#29272（/simplify 技能），围绕会话组织与代码质量的诉求活跃。


## 开发者关注点

- **Windows 退出崩溃问题集中爆发**：#27749、#28673、#26480、#30495 高度同质 — `/exit`、`/quit` 或 Ctrl+C 直接杀死父终端/进程，且涉及 ConPTY、conhost 崩溃与 psmux 窗格；侧面说明 Windows 平台用户基数正在快速增长，需要优先修复。
- **模型/提供商可用性**：OpenCode GO 订阅（#40791）存在区域限制与延迟问题；GLM-5.1 网络错误不重试（#31133）、qwen3.7-max 兼容错误（#31178）、`small_model` 被忽略（#31042），反映出多提供商适配仍有不小改进空间。
- **稳定性与资源控制**：#31099 渲染器冻结、#31087 SSE 流无界内存增长、#31105 终端输出内存/显示污染 — 长会话运行时的资源管理与健壮性是高频痛点。
- **数据完整性与重试逻辑**：#39291（变异 thinking 块 400 死循环）、#31042（FreeUsageLimitError 90 秒阻塞）、#31133（网络错误不重试），提示「错误可重试」与「不破坏数据」是底层架构的关键质量指标。

---

*以上为 2026-08-06 OpenCode 社区动态日报，基于 GitHub 公开数据汇总。如需查看完整列表，请访问 [anomalyco/opencode](https://github.com/anomalyco/opencode)。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-06

## 今日速览

过去 24 小时无新版本发布，但社区围绕 **Linux 平台稳定性**（X11 连接泄漏、剪贴板问题）和 **上下文管理**（自动压缩失效、@file 行号引用）展开了密集修复与讨论。值得关注的是，多项针对已有 Issue 的修复 PR 已合入，包括 Copilot 模型列表恢复、扩展事件总线泄漏修复，以及 `AGENTS.override.md` 支持落地。

---

## 社区热点 Issues（10 个）

### 1. #7547 [Windows] 你在 Windows 上如何使用 Pi？遇到了哪些问题？
- **评论**: 18 | 👍 0 | 状态: OPEN
- **链接**: https://github.com/earendil-works/pi/issues/7547
- **为什么重要**: 这是社区主动发起的 Windows 支持调研，意在收敛 Windows 上的运行方式与痛点，帮助核心团队决定优先修复方向。Windows 开发者基数庞大，此讨论将直接影响后续平台支持路线图。

### 2. #6879 [bug] 上下文超过 100% 后自动压缩仍不触发，直到 provider 溢出
- **评论**: 11 | 👍 13 | 状态: OPEN
- **链接**: https://github.com/earendil-works/pi/issues/6879
- **为什么重要**: 用户在一次超过 2 小时的 agentic turn 中，上下文脚标持续超过压缩阈值，直到 API 在 373k tokens 处拒绝请求才触发压缩。这是长会话场景下的严重可靠性问题，获 13 个 👍，社区呼吁在每次 agent 步进后检查压缩。

### 3. #534 [Linux] 配置文件目录不符合 XDG Base Directory 规范
- **评论**: 14 | 👍 23 | 状态: CLOSED
- **链接**: https://github.com/earendil-works/pi/issues/534
- **为什么重要**: 这是本期列表中 👍 数最高的 Issue（23）。用户指出 `pi` 将配置直接放在 `$HOME` 下，违反 Linux 现代工具的 XDG 规范。经讨论后已关闭，说明已获得处理方案或已实现。

### 4. #5263 会话内模型/思考级别更改应默认临时生效
- **评论**: 11 | 👍 12 | 状态: OPEN
- **链接**: https://github.com/earendil-works/pi/issues/5263
- **为什么重要**: 用户希望在会话内切换模型/思考级别只影响当前会话，全局默认值通过 `/settings` 中的 "Default model" 明确设置。这是改善 TUI 交互心智模型的高赞建议。

### 5. #7553 压缩（Compaction）应支持独立的思考级别/模型配置
- **评论**: 7 | 👍 0 | 状态: OPEN
- **链接**: https://github.com/earendil-works/pi/issues/7553
- **为什么重要**: 当前压缩无条件复用会话当前的思考级别，推理模型用户无法为摘要任务单独设定 thinking budget。对于重度使用 auto-compaction 的用户，这直接关系到压缩质量和成本。

### 6. #3200 prompt RPC 命令支持视频/音频内容
- **评论**: 7 | 👍 4 | 状态: OPEN
- **链接**: https://github.com/earendil-works/pi/issues/3200
- **为什么重要**: 目前 `prompt` 仅支持 `images`，用户希望扩展到 video/audio 多模态输入，以适配 Gemma 4、GPT-4o 等多模态模型。这反映了 agent 工具链向多模态发展的趋势。

### 7. #7444 WebSocket 重试仅覆盖两种错误码，其他瞬态错误直接终止回合
- **评论**: 4 | 👍 0 | 状态: OPEN
- **链接**: https://github.com/earendil-works/pi/issues/7444
- **为什么重要**: `openai-codex-responses.js` 中 WebSocket 重试逻辑只处理 `previous_response_not_found` 和 `websocket_connection_limit_reached`，其他 `response.failed` 错误会硬性终止回合。在弱网环境下这会显著降低任务成功率。

### 8. #7600 [bug] pi-coding-agent 泄漏 X11 连接直至占满 X server 客户端表
- **评论**: 2 | 👍 0 | 状态: OPEN
- **链接**: https://github.com/earendil-works/pi/issues/7600
- **为什么重要**: 长时间运行的 `pi` 进程在 8 天内泄漏了 **182 个 X server 连接**，直接耗尽 Xorg 的 256 客户端表，导致所有新 X 客户端启动失败。这是一个隐蔽而严重的资源泄漏问题，已由 PR #7694 给出修复。

### 9. #7634 [bug] Copilot 登录后模型列表为空（availableModelIds 始终为空数组）
- **评论**: 2 | 👍 0 | 状态: CLOSED
- **链接**: https://github.com/earendil-works/pi/issues/7634
- **为什么重要**: `parseAvailableCopilotModelIds` 只保留 `model_picker_enabled === true` 的模型，而 GitHub API 已改变返回策略，导致个人 Copilot 账号在 `/model` 中看不到任何模型。官方账号功能回归，影响面大，已由 PR #7672 修复。

### 10. #7642 支持 `AGENTS.override.md` 作为目录级上下文覆盖文件
- **评论**: 4 | 👍 0 | 状态: CLOSED
- **链接**: https://github.com/earendil-works/pi/issues/7642
- **为什么重要**: 用户希望同一目录下存在 `AGENTS.override.md` 时优先加载它而非 `AGENTS.md`，实现目录级上下文覆盖。该功能已实现（PR #7664 / #7681），对大型 monorepo 的上下文管理非常有价值。

---

## 重要 PR 进展（10 个）

### 1. #7694 fix(coding-agent): 避免 Linux 剪贴板 X11 泄漏
- **状态**: OPEN | **作者**: muyiyr
- **链接**: https://github.com/earendil-works/pi/pull/7694
- **内容**: 修复 #7600：禁用 Linux 原生剪贴板 addon，改用 `wl-paste`、`xclip`、`xsel` 处理文本，附带 Linux loader 回归测试与命令回退覆盖。

### 2. #7679 feat(coding-agent): 支持 `@file` 引用中的行号范围
- **状态**: CLOSED | **作者**: muyiyr
- **链接**: https://github.com/earendil-works/pi/pull/7679
- **内容**: 支持 1-based 含端点的 `#L<start>-L<end>` 选择器，保留字面文件名与路径恢复逻辑，拒绝图片范围，并提供行号元数据。Neovim 插件用户可直接受益。

### 3. #6216 feat: 新增 Amazon Bedrock Mantle OpenAI Responses 提供商
- **状态**: OPEN | **作者**: unexge
- **链接**: https://github.com/earendil-works/pi/pull/6216
- **内容**: 基于 OpenAI 的 Bedrock Provider，为 Bedrock Mantle 的 OpenAI Responses API 添加新 provider。云厂商接入继续扩展。

### 4. #7659 feat(ai): 新增 Qwen Token Plan Individual 提供商
- **状态**: OPEN | **作者**: arasovic
- **链接**: https://github.com/earendil-works/pi/pull/7659
- **内容**: 添加 `qwen-token-plan-individual` 内置 provider，暴露 8 个面向个人订阅的模型，并强制 Token Plan 配额限制。

### 5. #7656 修复事件总线泄漏
- **状态**: CLOSED | **作者**: tudoroancea
- **链接**: https://github.com/earendil-works/pi/pull/7656
- **内容**: 修复 #7193：将 `pi.events.on()` 订阅作用域限定到注册它的扩展运行时，重载/销毁时清理旧监听器，不影响宿主监听器，附带回归测试。

### 6. #7672 fix(ai): 从账户策略恢复 Copilot 模型列表
- **状态**: CLOSED | **作者**: muyiyr
- **链接**: https://github.com/earendil-works/pi/pull/7672
- **内容**: 修复 #7634：保留 `model_picker_enabled` 作为主要信号，仅在 Individual 端点无可用模型时回退到策略明确启用的模型，非 Individual 账户保持严格语义。

### 7. #7685 fix(coding-agent): 编译产物中禁用 bunfig 自动加载
- **状态**: CLOSED | **作者**: geril07
- **链接**: https://github.com/earendil-works/pi/pull/7685
- **内容**: Bun 编译的独立 `pi` 二进制会自动加载 cwd 下的 `bunfig.toml` 并执行 `preload`，项目中的损坏 preload 会直接导致 `pi --version` 崩溃。现在以 `--no-compile-autoload` 编译发布版和本地二进制。

### 8. #7664 feat(coding-agent): 支持 `AGENTS.override.md`
- **状态**: CLOSED | **作者**: muyiyr
- **链接**: https://github.com/earendil-works/pi/pull/7664
- **内容**: 在每个上下文目录（含全局 agent 目录）中优先使用 `AGENTS.override.md` 而非 `AGENTS.md` / `CLAUDE.md`，保留祖先层叠与嵌套 worktree 去重行为，并将覆盖读取归类为上下文资源。

### 9. #7638 feat(ai): openai-completions 支持 `thinking_token_budget`
- **状态**: CLOSED | **作者**: bnsd55
- **链接**: https://github.com/earendil-works/pi/pull/7638
- **内容**: 解决 OpenAI 兼容端点上推理与回答共享 `max_tokens` 导致"思考耗尽配额、无输出无工具调用"的问题，允许为推理单独设置 token 预算。

### 10. #7692 fix(coding-agent): 两个模型选择器统一自然排序
- **状态**: CLOSED | **作者**: Omzig
- **链接**: https://github.com/earendil-works/pi/pull/7692
- **内容**: 修复 #7693：在 `/model` 与 `/scoped-models` 间共享自然模型 ID 比较器，大小写不敏感且具备数字感知排序，避免 `@1m` 排在 `@200k` 之前的词法问题。

---

## 功能需求趋势

从过去 24 小时更新的 Issues/PRs 中，可以提炼出以下社区关注方向：

1. **厂商/模型支持扩展**：Amazon Bedrock Mantle、Qwen Token Plan Individual、Meta Model API（#7543）接连出现，社区对低成本/多样化模型接入需求旺盛。
2. **上下文管理精细化**：压缩独立思考级别（#7553）、自动压缩触发修复（#6879）、上下文窗口选项（#5064）、`@file` 行号引用（#7673）、`AGENTS.override.md`（#7642）——围绕"如何在长会话中精准控制上下文"已形成完整需求面。
3. **Linux 平台体验修复**：XDG 规范（#534）、X11 连接泄漏（#7600）、剪贴板实现替换（#7694），Linux 桌面用户的稳定性问题正在集中暴露和解决。
4. **多模态/富媒体支持**：prompt 命令扩展至视频/音频（#3200）、iTerm2 内联图片参数补全（#7465）、Mermaid 渲染（#7623）。
5. **扩展生态健全化**：扩展事件总线生命周期修复（#7193/#7656）、API-key 持久化 API（#7658）、provider 重试回调暴露（#7649）、可配置 Harness 工厂（#7686）——第三方扩展开发能力正在成为重点。

## 开发者关注点

- **长会话可靠性是最大痛点**：自动压缩不触发导致 API 溢出（#6879）、WebSocket 瞬态错误硬终止回合（#7444）、Anthropic 订阅下会话卡在 "Working..."（#5291），高赞和高评论集中在这些"跑着跑着就废了"的问题上。
- **平台兼容性回归频繁**：Node 20 崩溃（#7601）、Copilot 模型列表为空（#7634）、X11 泄漏（#7600）都是近期引入的回归，开发者对"更新后功能意外损坏"的容忍度在下降。
- **系统提示词疑似过度诱导工具调用**：#7128 指出默认提示词中的 "Inspect PI_* environment variables" 话术导致 agent 频繁执行无意义的 env 检查 bash 调用，开发者对 token 效率敏感。
- **小但高频的体验问题**：模型选择器排序混乱（#7693）、`/tree` 中失败 turn 无法恢复（#7609）、审批评论 "LGTM," 带逗号不被识别（#7663）——这些细节直接拉低日常使用流畅度。
- **对 Windows 支持的战略关注**：#7547 的大规模讨论表明社区对 Windows 官方支持路径高度关注，但当前运行方式碎片化严重，核心团队需要收敛投入方向。

---
*数据来源: github.com/badlogic/pi-mono（earendil-works/pi）*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-06

## 今日速览
今日最受关注的是 **Desktop v0.1.0 正式发布**，但随即暴露 Windows 平台启动崩溃问题（EISDIR lstat 'C:'）；同时安全团队披露一个 **P1 级只读 Shell 分类器绕过漏洞**，攻击面涉及命令替换与续行隐藏；此外，`/review` CI 静默挂起问题的根因已被定位并提交修复 PR。

## 版本发布
### desktop-v0.1.0
Qwen Code Desktop 首个正式版本发布。修复了容器作业默认 shell 配置，以及 Web Shell 的若干预设置问题。该版本是 Tauri 壳层方向的首个里程碑。

### v0.21.6
- **实验性原生实时语音支持**：WebShell 在 macOS 上可通过全局快捷键进行实时音频交互（[#7859](https://github.com/QwenLM/qwen-code/pull/7859)）
- Web Shell 在后台任务运行期间保持对话展开状态

### v0.21.6-nightly.20260806.cb3dc107f
- test(core): 使用专用空目录替代 /tmp，修复 glob 外部路径测试不稳定问题（[#8604](https://github.com/QwenLM/qwen-code/pull/8604)）

## 社区热点 Issues
### 🔴 安全相关（高风险）
- **[#8582] 只读 Shell 分类器可被命令替换绕过**（P1，5 评论） — `isShellCommandReadOnlyAST` 与 `detectCommandSubstitution` 均未能识别通过行继续符（`\`）或 `${var@P}` 间接展开隐藏的任意代码执行。攻击者可借"只读"审批执行任意命令。[查看](https://github.com/QwenLM/qwen-code/issues/8582)
- **[#8136] Provider 警告清理器泄露密码**（8 评论，社区讨论最热） — `sanitizeProviderWarning` 在截断含端口消息时，会意外泄露含 `@` 的密码凭据。该函数在写入 `/status` 前剥离 URL 凭据，但定位逻辑存在缺陷。[查看](https://github.com/QwenLM/qwen-code/issues/8136)

### 🖥️ 桌面端
- **[#8615] Desktop 0.1.0 Windows 启动崩溃**（P1，4 评论） — 打包的 Node v22.20.0 运行时在打开工作区时触发 `EISDIR lstat 'C:'`。这是 v0.1.0 发布后最严重的平台阻断问题，已有对应 PR #8619 修复。[查看](https://github.com/QwenLM/qwen-code/issues/8615)
- **[#8593] 桌面端 Markdown 链接点击无效**（4 评论） — 链接有样式但点击无任何反应，无浏览器打开或错误提示。[查看](https://github.com/QwenLM/qwen-code/issues/8593)

### 🖥️ 终端/TUI
- **[#8580] tmux < 3.5 下 TUI 持续闪烁**（3 评论） — 每个溢出帧都执行全屏清空+重绘，Ink 渲染器仅在缺少 DEC 2026 查询响应时使用该路径，导致 tmux 3.4 下每秒闪屏 2-3 次。[查看](https://github.com/QwenLM/qwen-code/issues/8580)
- **[#8557] 终端窗口缩小时产生重复输出**（5 评论） — macOS Warp 下缩小终端宽度，已打印的会话块被重新打印进回滚缓冲区。[查看](https://github.com/QwenLM/qwen-code/issues/8557)

### 🔧 IDE 集成
- **[#8606] VSCode 插件文件链接解析错误**（3 评论） — `edit_file`/`write_file` 产物链接始终解析到 `<workspace-root>/<basename>`，嵌套文件全部报"文件未找到"。[查看](https://github.com/QwenLM/qwen-code/issues/8606)

### ⚙️ CI/CD
- **[#8597] `/review` 反向审计静默挂起**（P1，3 评论） — 8 月 4 日超时 12 次、5 日 14:50 前再超时 9 次，4/5 超时源于同一故障模式。根因已定位并提交修复（PR #8602）。[查看](https://github.com/QwenLM/qwen-code/issues/8597)
- **[#8532] CI 日志混淆磁盘满错误**（6 评论） — 测试故意抛出的 `disk full` 错误被生产代码记录为真实日志，干扰 runner ENOSPC 排查。[查看](https://github.com/QwenLM/qwen-code/issues/8532)
- **[#8560] Web Shell 刷新会话返回 401**（3 评论） — `qwen serve --token` 启动后，刷新 `/session/<id>` 深链返回未授权错误，PR #8445 已提交修复。[查看](https://github.com/QwenLM/qwen-code/issues/8560)

## 重要 PR 进展
### 🐛 修复类
- **[#8619] fix(desktop): 剥离 Windows verbatim 路径前缀** — 用 `dunce::canonicalize` 替换两处 `std::fs::canonicalize`，直接修复 #8615 的 Windows 启动崩溃。[查看](https://github.com/QwenLM/qwen-code/pull/8619)
- **[#8602] fix(core): 流式响应总生命周期上限 & 精简 review 扇出** — 现有 watchdog 仅限制块间空闲，改为限制请求总时长，同时精简 fan-out 启动，关闭 #8597 的静默挂起。[查看](https://github.com/QwenLM/qwen-code/pull/8602)
- **[#8399] fix(core): 识别 OpenAI SDK APIUserAbortError** — 该类错误不设置 `.name`、无 `ABORT_ERR` 码，现有检查全部漏判，导致 `error_type=APIUserAbortError` 噪音。[查看](https://github.com/QwenLM/qwen-code/pull/8399)
- **[#8445] fix(web-shell): 允许带 daemon 认证刷新会话** — 精确放行 Web Shell 会话文档导航的公开 HTML 加载，会话 API 子路径仍保持认证，为 #8560 的修复。[查看](https://github.com/QwenLM/qwen-code/pull/8445)
- **[#8570] fix(cli): 零高度 VP 项目释放折叠思考空间** — 虚拟历史列表现在报告收缩为零的项目高度，折叠思考块立即释放其占用空间。[查看](https://github.com/QwenLM/qwen-code/pull/8570)
- **[#7897] fix(cli): WSL/ConPTY 跳过终端重绘优化器** — 修复 WSL + Windows Terminal 下流式输入逐字符重复渲染的已知问题（#7634）。[查看](https://github.com/QwenLM/qwen-code/pull/7897)

### ✨ 功能类
- **[#8613] feat(web-shell): tmux 交互式终端子代理** — 允许 Agent 在 daemon 主机的 tmux 会话中运行 REPL/TUI 应用，Web Shell 提供实时交互式终端视图，作为一级后台任务驱动。[查看](https://github.com/QwenLM/qwen-code/pull/8613)
- **[#8529] feat(core): 从 API 元数据解析模型模态** — 从 models.dev 解析模型输入模态，内置紧凑快照并后台刷新，冷启动无需等待远程元数据。[查看](https://github.com/QwenLM/qwen-code/pull/8529)
- **[#8620] fix(serve): 允许批准的工作区外同主机文本读取** — ACP 客户端文本读取经工作区边界校验后，放行已获批准的同主机外部文件读取，权限模型与 CLI 对齐。[查看](https://github.com/QwenLM/qwen-code/pull/8620)
- **[#8616] feat(telemetry): 与 OpenTelemetry 对齐会话生命周期** — 活跃会话发出标准 `session.start`/`session.end` LogRecord，恢复会话附带 `session.previous_id`。[查看](https://github.com/QwenLM/qwen-code/pull/8616)

## 功能需求趋势
- **桌面端形态演进**：多个 Issue 指向以 Web Shell 为核心的 Tauri 桌面壳层（#8092），并建议弃用 Electron 桌面应用、将 `desktop-shell` 更名为 `desktop`（#8596）
- **移动/远程访问**："Local Control" 模式呼声上升：希望通过 **QR 码配对**让手机零配置接管本地会话（#8595）
- **安全加固**：只读 Shell 分类器绕过（#8582）、密码泄露（#8136）表明社区对凭据处理与命令执行边界非常敏感
- **可观测性**：OpenTelemetry 会话生命周期对齐（#8589）、daemon 活性跟踪与后台 Agent 恢复（#8586）成为关注点
- **批处理/异步执行**：社区提出 `/slow` 或 `/batch` 模式，通过异步批处理降低长任务成本（#8605）
- **性能资源管理**：工具输出预算与产物生命周期管理持续推进（#7306、#8447），文本展示载荷将被限制在 65,536 字节

## 开发者关注点
- **终端兼容性阵痛**：tmux < 3.5 闪烁（#8580、#8562）、WSL/ConPTY 重复渲染（#7897）、Warp 缩小重印（#8557）共同指向 **TUI 渲染器在不同终端后端下兼容性不足**，Ink 渲染器的重绘策略是主要争议点
- **桌面端稳定性欠佳**：Windows 启动崩溃（#8615）、复制按钮失效（#8538）、语言切换无效（#8592）、链接不可点击（#8593）——v0.1.0 首版本功能完整度尚可，完成度待提升
- **CI/CD 可靠性焦虑**：`/review` 大量超时（#8597）、Autofix 并发互斥漏洞（#8435）、容器作业默认 shell 缺失——社区对自动化流程的失控风险反应强烈
- **模型兼容性**：Anthropic 带点小版本别名被拒（#8584）、跨提供商模型 ID 解析不一致，代理部署场景下用户希望更宽松的模型名匹配
- **高频词**：`redraw`、`flash`、`hang/timeout`、`resolve/parse` 出现频率最高，渲染与路径解析是当前反馈最集中的技术债区域

---

*数据截至 2026-08-06 02:39 UTC，Issue 38 条 / PR 50 条。Fleet Shepherd 仪表板显示上次扫描信号龄 1046 分钟，同步与调度均为 0 次。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-06

## 今日速览

DeepSeek-TUI 社区过去 24 小时**无新 Release**，核心活跃度集中在 Pull Request 上：**14 条 PR 更新**，其中多数来自 v0.9.4 发布列车的运行时 API 扩展（由 Copilot 自动生成），以及社区贡献的 TUI 交互修复与文档本地化。Issue 侧较为平静，仅 1 条旧 Issue 获得更新，未出现新的社区反馈热点。整体而言，项目正进入 **v0.9.4 发布前的能力补全阶段**，重点在于开放运行时边界、完善子代理恢复机制与修复终端交互细节。

---

## 社区热点 Issues

过去 24 小时内更新的 Issue 仅 1 条，社区讨论活跃度较低，更多讨论集中在 PR 侧。

| Issue | 标题 | 状态 | 作者 | 更新 | 评论 | 重要性 |
|-------|------|------|------|------|------|--------|
| [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) | planning to create an interface similar to Reasonix? | OPEN | longASKme | 2026-08-05 | 4 | 该提问创建于 7 月 4 日，搁置一个月后于昨日被重新激活。结合 v0.9.4 提交中密集的 Runtime API 与 ACP 工具执行支持，社区对"类 Reasonix 外部 IDE / 编辑器界面"的诉求可能正在催生官方或三方接入层的进展。 |

**分析：** 这条 Issue 的重新活跃值得留意——它出现在多个 Runtime API PR（#5129–#5133）合并推进的同一时间窗口，暗示"对外暴露能力、让外部界面接入"正是当前版本的核心目标之一。

---

## 重要 PR 进展

从 14 条 PR 中精选 10 条关键进展，分为**发布协调 / 运行时 API / TUI 修复与体验 / 文档与平台支持**四组：

### 一、发布协调

| PR | 标题 | 状态 | 作者 | 说明 |
|----|------|------|------|------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | release: Codewhale v0.9.4 release train | OPEN | Hmbown | v0.9.4 集成列车，**77 个 commit 领先 main**，包含 2026-08-01 全部源码候选，并取代 #5044。这是目前版本的主干，所有功能 PR 最终都应汇入此线。 |

### 二、运行时 API 扩展（v0.9.4 核心能力）

| PR | 标题 | 状态 | 作者 | 说明 |
|----|------|------|------|------|
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | feat(acp): expose file/search/git/patch/shell tools over session/prompt | OPEN | rafaelcavalheri | **本次更新最重要的功能 PR**。此前 ACP 服务器的 `session/prompt` 只流式返回模型文本，不执行模型请求的工具调用。此 PR 让 ACP 驱动的编辑器（Zed 等）和企业桥接器真正具备**代码编辑能力**，补上了从"聊天"到"代理"的关键缺口。 |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | feat: Runtime API memory endpoints — bounded inspection and lifecycle controls | OPEN | Copilot | 新增 `/v1/memory` 端点族，允许托管客户端检查活动内存、查看作用域/来源并施加生命周期控制，全部路由受已有 `require_runtime_*` 中间件保护。 |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | feat(runtime-api): bounded MCP server configuration and lifecycle management | OPEN | Copilot | 为 MCP 服务器补齐 **CRUD 表面**（此前仅只读列表）。客户端可通过 `POST /v1/apps/mcp/servers` 等路由创建/更新/移除服务器，无需直接改 TOML/JSON。 |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | feat(runtime-api): expose persistent goal-loop state and completion controls | OPEN | Copilot | 新增 goal 资源端点（`GET /v1/threads/{id}/goal` 等），让托管客户端可读取活跃目标状态并驱动生命周期转换。 |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | Runtime API: expose verifier receipts and evidence beyond the aggregate counter | OPEN | Copilot | 在 `/v1/fleet/runs/{run_id}/` 下新增 3 个只读端点（receipts / evidence / retry 建议），解决此前仅有一个 `verifier_failed` 计数器、无法定位失败任务的运维难题。 |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | feat(runtime-api): add skill lifecycle endpoints — install, update, uninstall, trust, audit | OPEN | Copilot | 将 TUI 内的完整技能生命周期（安装/更新/卸载/信任/审计）通过 HTTP 暴露给桌面与 Web 客户端，由 `require_runtime_token` 保护。 |

### 三、TUI 修复与体验改进（社区贡献）

| PR | 标题 | 状态 | 作者 | 说明 |
|----|------|------|------|------|
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | feat(tui/shell): surface real wait elapsed time in tool content | OPEN | SparkofSpike | Bash `wait`/delta 工具此前把 `duration_ms` 只放在元数据中，模型不可见。导致所有等待结果看起来一样，模型会误判长任务状态。此 PR 将**真实耗时写入工具内容**，提升模型对长任务耗时的感知。 |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | feat(tui/subagent): resume interrupted children from checkpoint via followup | OPEN | SparkofSpike | `interrupted_continuable` 子代理此前只能保留检查点、无法真正恢复运行。此 PR 实现**通过 followup 从检查点续跑**，长文档审查、多步搜索类任务中断后无需重新派发。 |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | fix(tui): keep alternate scroll off while mouse capture is active (#5223) | OPEN | SparkofSpike | 修复对话超长时滚轮无法滚动转录、反而触发输入历史的 Bug。根因是 `recover_terminal_modes()` 同时启用了鼠标捕获与 xterm 备用滚动模式（DECSE），造成模式冲突。 |

### 四、文档与平台支持

| PR | 标题 | 状态 | 作者 | 说明 |
|----|------|------|------|------|
| [#5229](https://github.com/Hmbown/CodeWhale/pull/5229) | docs: add Docs/windows beginner guide in zh-CN | OPEN | vFONGv | 新增**中文版 Windows 新手指南**，覆盖安装、配置、模型切换、模式与权限、常见问题，命令已在 Windows 10 实测。吸引国内 Windows 用户的关键文档。 |

**已合并/关闭（值得跟踪）**
- [#5192](https://github.com/Hmbown/CodeWhale/pull/5192)（CLOSED）fix(tui): pin ratatui to 0.30.0 — 修复 ratatui-core 0.1.1+ 的阻塞式 CPR 查询与 TUI 事件循环死锁竞态，**建议关注 0.30.1 相关兼容问题**。
- [#5095](https://github.com/Hmbown/CodeWhale/pull/5095)（CLOSED）fix(ohos): re-quote Windows linker arguments containing spaces — 解决 OpenHarmony SDK 安装在含空格路径（如 `D:\DevEco Studio\...\native`）时 `--sysroot` 被错误拆分的问题。

---

## 功能需求趋势

从近 24 小时 PR 合集中可以提炼出以下社区方向：

1. **运行时 API 全面开放** — 6/14 的 PR 都在为 Runtime API 增加资源端点（memory、MCP、goal、verifier、skill）。这是 v0.9.4 的主线：**把 TUI 内部能力以受控 HTTP 接口暴露给托管客户端**（桌面 App / Web / IDE）。
2. **ACP 协议从"聊天"走向"代理"** — #5225 让 ACP 驱动的编辑器真正能执行工具调用，这是社区第三方 `acp-deepseek-adapter` 等集成落地的前提。
3. **子代理生命周期增强** — #5242 的检查点恢复呼应了社区对长任务可靠性的诉求。
4. **工具结果对模型透明化** — #5240 把耗时等元数据放入模型可读取的工具内容，源于实际使用中模型误判长任务的痛点。
5. **中文社区与 Windows 生态** — #5229 中文 Windows 指南的提交，显示国内用户基数的增长。
6. **终端交互细节修复** — #5234 的鼠标滚动、#5192 的 ratatui 固定，集中在"TUI 在真实终端环境下的可用性"。

---

## 开发者关注点

- **长任务中断恢复仍是高频痛点**：`interrupted_continuable` 检查点保留但无法续跑的问题终于有了解决方案（#5242），未来可关注该 PR 的合并状态。
- **外部界面接入的"最后一公里"**：运行时 API 已覆盖大量资源，但 #5132 指出的"验证器失败只有计数器、无法定位失败任务"问题，说明运维可观测性仍是开发者的关注重点。
- **终端模式冲突与输入竞态**：#5234 与 #5192 分别处理了滚动误触与 CPR 阻塞问题，这类与真实终端交互相关的 Bug 虽小，但直接影响日常使用体验。
- **依赖锁定策略**：#5192 通过精确锁定 `ratatui=0.30.0` 规避上游回归，但长期看仍需关注官方何时修复 ratatui-core 的 CPR 问题。
- **中文文档供给不足**：目前仅 #5229 新增中文 Windows 指南，官方 `GUIDE.md` 尚未改造，其他语言版本也未见更新。

---

*本日报数据来源于 GitHub 上 Hmbown/CodeWhale 仓库公开信息，选取时间窗口为 2026-08-05 至 2026-08-06（按 PR/Issue 最近更新时间）。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*