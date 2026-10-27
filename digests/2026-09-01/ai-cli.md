# AI CLI 工具社区动态日报 2026-09-01

> 生成时间: 2026-09-01 12:03 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 — 2026-09-01

## 1. 生态全景

2026-09-01 的社区动态显示，AI CLI 工具生态正处于**功能深化与平台扩展并行的阶段**。各工具的核心差异化不再局限于模型能力，而是延伸到沙箱可靠性、Windows 平台支持、认证/安全机制、会话管理与 IDE 集成深度等工程化维度。Windows 平台缺陷（孤儿进程、更新机制破坏会话、WSL 集成故障）在 Claude Code、Codex、Gemini CLI 等多个工具中集中爆发，表明跨平台成熟度已成为社区最敏感的痛点。与此同时，多智能体协作（跨会话消息传递、子代理可靠性）、成本可见性与 BYOK/自定义端点稳定性正在成为新一轮竞争焦点。更新机制安全性（静默重启、MSIX 破坏代码完整性）的集中投诉，反映出工具在快速迭代与用户体验之间尚未找到平衡。

## 2. 各工具活跃度对比

| 工具 | Issues 更新数 | PR 更新数 | Release 情况 | 最热 Issue（👍/评论） |
|------|-------------|-----------|-------------|----------------------|
| **Claude Code** | 10（精选） | 4 | v2.1.252（维护版） | #70684 沙箱 SOCKS5 代理（24 👍）；#86928 沙箱 Bash 失败（12 评论） |
| **OpenAI Codex** | 10（精选） | 10+ | v0.152.0（正式）+ 4 个预发布 | #39973 审批策略移除（34 👍）；#41290 WSL 项目操作失败（26 评论） |
| **Gemini CLI** | 10（精选） | 10 | v0.59.0-nightly（夜间版） | #21409 通用代理挂起（8 👍/8 评论）；#22323 子代理误报成功（13 评论） |
| **Copilot CLI** | 10（精选） | 0 | v1.0.83-0 | #1953 上下文状态显示（9 👍）；#4438 技能不可达（5 👍） |
| **Kimi Code** | 2 | 2 | 无 | 活跃度显著偏低，仅 2 条 Issue 更新 |
| **OpenCode** | 50（总量） | 50（总量） | 无（1.18.x 迭代中） | #1505 shift+enter（103 👍/128 评论）；#5200 compaction（30 👍/13 评论） |
| **Pi** | 50（总量） | 29（总量） | 0.84.3/0.84.4（近期） | #8620 全局扩展加载失败（8 评论，严重回归） |
| **Qwen Code** | 10（精选） | 10 | cua-driver-rs v0.20.3 + nightly | #10520 llama.cpp grammar 解析失败（与 #10435/#10530 重复） |
| **DeepSeek TUI** | 10（8 已关闭） | 10 | 无 | #5778 原生 PKCE 登录（1 评论但催生 PR）；#5740 CI 静默失败 |

> 注：Claude Code、Codex、Gemini、Copilot、Kimi、Qwen 为精选条目；OpenCode、Pi、DeepSeek TUI 为总量数据。DeepSeek TUI 实际仓库为 `Hmbown/CodeWhale`。

## 3. 共同关注的功能方向

**① Windows 平台稳定性** — 涉及工具最广、投诉最集中的方向
- **Claude Code**：Bash 孤儿进程（#62659）、MSIX 更新器破坏代码完整性（#90891）
- **Codex**：WSL 项目操作失败（#41290）、发送按钮失效（#40968）、更新后不启动（#24047）、生命周期钩子 10x+ 性能退化（#41942）
- **Copilot CLI**：沙箱禁用不生效（#4679）
- **Pi**：空白输出导致会话卡死（#8720，Windows 高风险）
- **Qwen Code**：无直接报告，但 llama.cpp 本地集成问题在 Linux 上更突出

**② 沙箱/安全机制可靠性**
- **Claude Code**：沙箱 Bash 间歇失败（#86928）、SOCKS5 代理认证破坏 SSH Git（#70684）
- **Gemini CLI**：零依赖 OS 沙箱提案（#19873）、GIT_* 环境变量注入防护（#29008）
- **Codex**：`approval_policy="untrusted"` 被移除引发反弹（#39973，34 👍）

**③ 认证与 BYOK/自定义端点稳定性**
- **Codex**：新模型工具调用失败（#40798）
- **Copilot CLI**：BYOK `/model` 命令回归（#4672）、自定义端点模型 ID 传错（#4680）、本地 403 拦截（#4414）
- **OpenCode**：Azure Entra OAuth（#21658）、Azure CLI 认证（PR #45079）、Codex OAuth Fast 模型未加速（#39864）
- **DeepSeek TUI**：原生 PKCE 免 CLI 登录（#5778）、wire 协议不支持 responses/anthropic（#5713）、provider 凭据隐式复用（#5772）

**④ 会话管理与多端一致性**
- **Claude Code**：VS Code 扩展会话列表失效（#89740）、桌面端侧栏索引停滞（#91017）
- **Codex**：分页线程历史卡在重复序号（#41079）
- **OpenCode**：headless 会话隐藏于 resume 列表（Pi PR #8951 对应需求）
- **Qwen Code**：跨会话消息传递 + per-session token 鉴权（#8724/#10636）

**⑤ 成本可见性与计费透明**
- **Copilot CLI**：压缩失败无界重试（#4663）、常驻上下文状态显示（#1953，9 👍）
- **OpenCode**：隐式 LLM 调用未计入会话成本（#46371）、订阅快速失效（#46511）
- **Pi**：Bedrock usage.input 未归一化导致双重计费（#8752）
- **DeepSeek TUI**：BYOK 余额不足导致 review CI 静默失败（#5740）

**⑥ 子代理/多智能体可靠性**
- **Gemini CLI**：子代理 max_turns 误报成功（#22323，P1）、通用代理无限挂起（#21409，P1）
- **Qwen Code**：跨会话消息传递（#8724）、Agent 团队状态误判循环（#9450）
- **Claude Code**：Remote Control 会话卡顿（v2.1.252 已修复）

## 4. 差异化定位分析

| 工具 | 核心定位与侧重 | 目标用户 | 技术路线特征 |
|------|---------------|---------|-------------|
| **Claude Code** | 深度 IDE/桌面集成 + 插件生态 | 企业级、跨端切换用户 | 插件系统活跃，Remote Control/Desktop 架构推进；沙箱机制激进（SOCKS5、seccomp） |
| **OpenAI Codex** | OpenAI 全栈（ChatGPT 订阅集成） | Pro 用户、Windows 桌面端用户 | Rust 实现；与 ChatGPT 生态深度绑定；TUI 功能迭代快（Vim 模式、插件治理） |
| **Gemini CLI** | 本地 Agent 自主性 + 安全治理 | 偏好自主 Agent 的开发者 | 子代理/技能系统为核心；强调安全（环境变量清理、脱敏时序）；夜间版高频迭代 |
| **Copilot CLI** | GitHub/企业生态 + BYOK 灵活性 | 企业用户、BYOK 用户 | Agent Plugins 1.0 规范落地；MCP 协议兼容性探索；更新频率低但回归风险高 |
| **Kimi Code** | 品牌迁移期的基础稳定性 | 中文开发者、Kimi 模型用户 | 处于**迁移过渡期**（kimi-cli → Kimi Code），社区活跃度低，聚焦迁移 UX 与边界修复 |
| **OpenCode** | 开源多平台枢纽 + 社区驱动 | 重度 TUI 用户、开源社区 | Issue/PR 量最活跃（各 50 条）；认证扩展（Azure）、TUI 社交化（/stats）为特色 |
| **Pi** | 终端 UI 打磨 + 扩展生态稳定性 | 偏好精致 TUI 的开发者 | 每日高频合入（10 个 PR 合入）；多提供商兼容适配精细；扩展信任/竞态处理深入 |
| **Qwen Code** | 本地模型（llama.cpp）优先 | 自托管/本地模型用户 | 本地模型兼容性问题突出（grammar 解析）；OpenTUI 迁移进行中（ink → 自研）；多智能体基础设施成型中 |
| **DeepSeek TUI** | 个人项目但架构迭代激进 | 技术尝鲜者 | 独立架构（Rust 核心 + TS 面，编译期协议守卫）；桌面版地基铺设（Unix socket）；认证自助化快速响应 |

## 5. 社区热度与成熟度

**① 最活跃、迭代最快**

- **OpenCode**（50 Issues + 50 PRs）、**Pi**（50 Issues + 29 PRs）— 社区体量最大，每日 PR 合入密集，维护者响应快（Pi 的严重回归当日即修复）
- **Gemini CLI** — P1 级 Bug 持续获得评论，夜间版高频发布，社区关注度高但问题长期未解（#21409、#22323 均为长期 P1）

**② 官方旗舰、社区规模大但投诉集中**

- **Claude Code** — 版本迭代稳定，但沙箱与 Windows 平台缺陷成为社区焦点
- **OpenAI Codex** — Windows 桌面端质量问题突出，社区反馈集中在平台稳定性
- **Copilot CLI** — 更新频率低（v1.0.83-0），但连续版本引入 BYOK/OAuth/MCP 回归，开发者信任受损

**③ 处于转型/调整期**

- **Kimi Code** — 品牌迁移阶段，社区活跃度显著偏低（仅 2 Issue 更新），需关注迁移后的重新聚焦
- **Qwen Code** — OpenTUI 迁移 + 本地模型兼容性回归双线并进，处于架构重构的"阵痛期"

**④ 社区体量较小但执行力强**

- **DeepSeek TUI**（实际为 CodeWhale）— 个人项目但已实现编译期跨语言协议守卫、桌面版地基、对抗性评审流程，代码质量要求高；社区规模小但闭环速度快（当日 Issue 当日 PR）

## 6. 值得关注的趋势信号

**① 跨平台已从"加分项"变为"及格线"**

Windows 平台问题是今日各工具社区的最大公约数：Claude Code 的孤儿进程与 MSIX 更新器、Codex 的 WSL 集成与发送按钮、Copilot CLI 的沙箱禁用不生效。**对开发者**：选型时需重点评估工具的 Windows 支持成熟度，尤其是 WSL 与桌面端的场景覆盖。

**② 更新机制正在成为信任杀手**

Claude Code 的静默重启（#90172）与 MSIX 破坏代码完整性（#90891）、Codex 更新后不启动（#24047）——"更新不应杀死正在运行的会话"已成为用户的核心诉求。**对开发者**：生产环境使用时建议延迟升级、关注 changelog 后再更新。

**③ 认证自助化与 BYOK 稳定性的双轮驱动**

一方面，OpenCode 的 Azure Entra、DeepSeek TUI 的 PKCE 免 CLI 登录、Pi 的多提供商兼容适配，表明"降低接入摩擦"是各工具的共同方向；另一方面，Copilot CLI 的 BYOK 回归（#4672/#4680）与 DeepSeek TUI 的 provider 配置静默忽略（#5713），说明自定义端点路径的测试覆盖普遍不足。**对开发者**：BYOK/自定义端点用户需对回归保持警惕，配置变更后应验证实际请求内容。

**④ 本地模型集成正在成为差异化战场**

Qwen Code 的 llama.cpp grammar 解析回归（#10520/#10435/#10530 三连报）与 Pi 的 OpenRouter 免费模型 max_tokens 超限（#8760）共同指向一个事实：**本地/低成本模型用户量正在快速增长**，而各工具对其兼容性测试普遍滞后。**对开发者**：若依赖 llama.cpp 或免费模型端点，建议规避最新版本或等待修复合入。

**⑤ 成本透明化与可预测性诉求上升**

Copilot CLI 的无界重试计费（#4663）、OpenCode 的隐式 LLM 调用未计入成本（#46371）、Pi 的 Bedrock 双重计费（#8752）、DeepSeek TUI 的 CI 静默"假通过"（#5740）——用户对"花的钱去了哪里"的敏感度显著提升。**对开发者**：关注工具的用量统计口径是否与真实账单一致，避免自动化流程中的意外成本。

**⑥ 多智能体协作基础设施正在成型**

Qwen Code 的跨会话消息传递 + per-session token 鉴权（#10636）、Gemini CLI 的子代理可靠性修复、Claude Code 的 Remote Control 会话管理——多智能体/多会话协作正在从概念走向工程实现。**对开发者**：这是下一阶段值得跟踪的方向，跨会话通信的安全性设计（token 鉴权、权限隔离）将决定其落地质量。

---

**综合判断**：AI CLI 工具生态正处于从"能用"到"好用"的工程化深水区。各工具在模型能力上差距不大，真正拉开差距的是**平台覆盖（Windows/WSL）、沙箱安全、认证自助化、成本透明度和更新流程可靠性**。对技术决策者而言，选型时需要根据团队的实际使用场景（本地 vs 云、Windows vs macOS、BYOK vs 官方订阅）进行针对性评估；对开发者而言，应优先关注工具对自身平台的最新版本回归情况，合理设定升级节奏。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-09-01 | 数据来源：anthropics/skills 官方仓库**


## 一、热门 Skills 排行（按社区关注度）

### 1. skill-creator 修复：run_eval.py 评估召回率恒为 0%（PR #1298，Open）
**功能**：修复技能创建器核心评估脚本，使 `run_eval.py` 能将评估产物安装为真实技能，修复 Windows 流读取、触发检测和并行 worker 问题，解决 #556 及 10+ 独立复现的 `recall=0%` 故障。
**社区热点**：这是 skill-creator 生态最活跃的修复方向，直接决定自建技能能否进入优化循环。多份 PR（#1298、#1099、#1050）从不同角度修复同一问题（Windows 兼容、subprocess 管道读取、编码）。
**状态**：Open（6 月提交，6 月更新，持续活跃）— [链接](https://github.com/anthropics/skills/pull/1298)

### 2. document-typography：AI 生成文档的排版质量控制（PR #514，Open）
**功能**：解决 AI 生成文档的常见排版问题——孤行（1-6 个单词溢出到下一行）、寡妇段落（章节标题被顶到页底）、编号错位。
**社区热点**：文档类 Skills 是社区最密集的品类之一，排版质量控制此前是空白，社区期待这类"隐形质量"把关能力落地。
**状态**：Open（3 月提交，3 月更新）— [链接](https://github.com/anthropics/skills/pull/514)

### 3. skill-quality-analyzer + skill-security-analyzer（PR #83，Open）
**功能**：新增两个 meta Skills——技能质量分析器（从结构、内容等五个维度评估 Claude Skills）和技能安全分析器（审查 Skills 安全风险）。
**社区热点**：直接回应 #492（社区 Skills 在 anthropic 命名空间下的信任边界滥用）等安全问题。社区对"由谁审查、如何审查"第三方 Skill 有着强烈诉求。
**状态**：Open（2025 年 11 月提交，2026 年 1 月更新）— [链接](https://github.com/anthropics/skills/pull/83)

### 4. frontend-design：前端设计技能改进（PR #210，Open）
**功能**：重写前端设计 Skill，确保每条指令都可在单次会话内执行，提升清晰度和可操作性。
**社区热点**：社区对 Skill 质量的共同抱怨是——许多 Skill "读起来像给人看的文档而非给 Claude 的指令"（同见 #202 对 skill-creator 的批评）。
**状态**：Open（1 月提交，3 月更新）— [链接](https://github.com/anthropics/skills/pull/210)

### 5. claude-api：标记四个已退役模型 ID（PR #1607，Open）
**功能**：将 `claude-opus-4-1` 等四个已退役模型 ID 在 `models.md` 中标记为 retired。
**社区热点**：claude-api Skill 还关联另一重大争议——#1487 指出该 Skill 会**一次性注入约 156k tokens**，单次工具调用即耗尽上下文窗口。模型信息维护频率与 token 效率是核心讨论点。
**状态**：Open（8 月提交，8 月更新）— [链接](https://github.com/anthropics/skills/pull/1607)

### 6. Hivemind：零成本多 Agent 编排（PR #1628，Open）
**功能**：让 Claude Code 将机械性工作委托给运行免费模型的无头 [opencode](https://opencode.ai) workers，Claude Code 保持唯一的规划者、审查者和合并者角色。
**社区热点**：代表社区对多 Agent 协作的探索方向——不追求全 Agent 化，而是让 Claude Code 作为"指挥中枢"、低成本 worker 干体力活。
**状态**：Open（8 月提交，更新至 8 月底）— [链接](https://github.com/anthropics/skills/pull/1628)

### 7. ServiceNow 平台 Skill（PR #568，Open）
**功能**：覆盖 ITSM、ITOM、ITAM/SAM Pro、FSM、HRSD/CSM、SPM、CSDM、IntegrationHub 的 ServiceNow 全平台助手。
**社区热点**：企业级平台类 Skill 的代表——从"单一脚本工具"走向"平台级助手"，涵盖架构、SecOps 与集成。从 3 月提交持续更新至 8 月，跨时长、迭代积极。
**状态**：Open（3 月提交，8 月更新）— [链接](https://github.com/anthropics/skills/pull/568)

### 8. self-audit：四维推理质量门控（PR #1367，Open）
**功能**：交付前自动审计 AI 输出——先做机械性文件验证，再按损害严重性优先级做四维推理审计，宣称通用（任何项目、技术栈、模型）。
**社区热点**：对应 #1385 的"推理质量门控管线"提案（任务前校准→对抗式审查→交付验证），反映社区对输出质量保障从"生成后检查"走向"系统化门控"。
**状态**：Open（6 月底提交，7 月初更新）— [链接](https://github.com/anthropics/skills/pull/1367)


## 二、社区需求趋势（来自 Issues）

| 需求方向 | 代表 Issue | 核心诉求 |
|---|---|---|
| **安全保障 / 信任边界** | #492（43 评论）、#1175 | 社区 Skill 挂在 `anthropic/` 命名空间下构成信任边界滥用；SPO 文档处理中的权限逻辑与控制权；社区强烈呼吁官方提供 Skill 安全审查机制 |
| **组织级 Skill 分发** | #228（16 评论） | 当前共享 Skill 需手动下载 → Slack 发送 → 同事手动上传，流程繁琐；期待组织内共享 Skill 库或直接共享能力 |
| **评估 / 质量保障** | #556（12 评论）、#1390 | `run_eval.py` 评估召回率恒为 0%；mcp-builder 评估脚本对真实 MCP 服务器全部误报错误——自建 Skill 的验证工具链是社区最痛点之一 |
| **Skill 叠加冲突** | #189 | 同时安装 `document-skills` 与 `example-skills` 插件会产生重复 Skill，污染上下文窗口——插件间内容重复的管理空白 |
| **上下文 / Token 效率** | #1487 | claude-api Skill 单次工具调用注入约 156k tokens 直接耗尽上下文——大型内置 Skill 的 token 成本成为规模化使用瓶颈 |
| **技能质量而非规模** | #202 | "Skill 写得像开发者文档而非可操作的指令"——技能从"概念说明"转向"可执行指令"是隐性刚需 |

**最集中信号**：**安全（命名空间信任）、质量（评估体系）、效率（上下文窗口）** 三重诉求共同指向——社区需要的不是"更多 Skills"，而是**Skills 的治理机制**。


## 三、高潜力待合并 Skills（评论活跃 / 持续迭代，可能近期落地）

| PR | Skill | 亮点 | 备注 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评估修复 | 修复 Windows 兼容 + recall=0% 核心故障，回应 10+ 独立复现 | 与 #1099、#1050 方向一致，有合并压力；提交人 MartinCajiao 持续活跃 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多 Agent 编排 | 创意新颖（免费模型干体力活 + Claude 当大脑），8 月下旬仍在更新 | 处于生态探索期，合并窗口取决于官方对 multi-agent 策略 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 填补文档排版质量自动检查的空白，与官方文档类 Skill 生态互补 | 3 月提交未关闭，长期 open 是常态；建议关注是否被官方吸收 |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow 平台 Skill | 企业级平台型 Skill，覆盖面广，更新至 8 月 | 活跃迭代中，随时可合并 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 质量门控 | 设计完整（机械验证 + 四维推理审计），有配套提案 #1385 | 作者系统性布局质量保障方向，值得关注 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer / security-analyzer | 直击 #492 安全痛点 + #202 质量痛点，双管齐下 | 若官方没有自建审查体系的计划，此 PR 合并概率高 |


## 四、Skills 生态洞察

> **社区最集中的诉求不是"更多 Skills"，而是 Skills 的"治理基础设施"——官方命名空间下的安全审查机制、一套能真实反映 Skill 效果的评估工具链、以及控制 Context Window 成本的能力；与此同时，文档处理与多 Agent 编排正在成为下一个 Skill 品类的爆发点。**

**一句话建议**：关注 skill-quality/security-analyzer（#83）与 run_eval.py 修复系（#1298/#1099/#1050）——它们分别决定了"社区 Skills 能否被信任"与"自建 Skills 能否被验证"，是生态健康度的两个晴雨表。

---

# Claude Code 社区动态日报 — 2026-09-01

## 今日速览

昨日发布 v2.1.252 维护版本，修复了 macOS 上的 Bash 任务输出交换错误、`always allow` 设置未保存以及 Remote Control 会话卡死三类问题。社区活跃度集中在 Windows 平台桌面应用与沙箱相关的可靠性缺陷上，其中沙箱 Bash 间歇性失败（#86928）与 Windows 孤儿进程（#62659）获得最多讨论；同时，MEMORY.md 压缩阈值可配置（#91188）等新功能需求已开始浮现。

## 版本发布

**v2.1.252** 包含三项修复：

- 修复部分 Mac 上 Bash 命令报错 "task output swap refused (tasks dir moved or linked)"
- 修复项目尚无 `.claude/settings.local.json` 时 "always allow" 不保存的问题
- 修复由 Claude Desktop 或 VS Code 托管的 Remote Control 会话卡顿长达一分钟的问题

## 社区热点 Issues

### 1. [OPEN] Sandboxed Bash 间歇性失败：`apply-seccomp: unshare(CLONE_NEWUSER): Invalid argument`（#86928）
在启用沙箱后，约 **1/10** 的 Bash 工具调用会立即失败，Linux 平台，已被复现并标记。12 条评论、8 个 👍，是当前讨论热度最高的 Issue。沙箱稳定性直接影响到日常开发流程。  
[GitHub](https://github.com/anthropics/claude-code/issues/86928)

### 2. [CLOSED] Windows: Bash 子进程在命令完成后成为无法终止的孤儿进程（#62659）
窗口平台投诉最集中的缺陷之一：Bash 工具启动的 `cargo`、`node` 等子进程在命令结束后仍残留，缺少按命令隔离的 Job Object，且 `SILENT_BREAKAWAY_OK` 标志使现有机制失效。**最近 24 小时内有更新**（新增评论/状态变更），10 条评论。该问题直接影响 Windows 用户的资源释放与工作区卫生。  
[GitHub](https://github.com/anthropics/claude-code/issues/62659)

### 3. [OPEN] 桌面应用静默重启破坏正在运行的会话（#90172）
该 umbrella Issue 汇总了 8 项与静默自动重启（为安装更新而隐藏式重启动）相关的缺陷，表现为 "Can't reach your computer" / "Remote Control host unreachable"。6 条评论、2 个 👍。更新机制贸然终止运行中的会话，对 Remote Control 工作流的可用性构成了严重威胁。  
[GitHub](https://github.com/anthropics/claude-code/issues/90172)

### 4. [OPEN] 沙箱 SOCKS5 代理认证破坏 SSH Git 操作（#70684）
macOS 回归缺陷，已有复现步骤。**24 个 👍** 是过去 24 小时更新条目中点赞数最高的。启用沙箱后，BSD `nc` 无法协商 SOCKS5 认证协议，导致依赖 SSH 的 Git 操作（如私有仓库拉取）中断。5 条评论。  
[GitHub](https://github.com/anthropics/claude-code/issues/70684)

### 5. [CLOSED] Agent 模式下插件更新后仍提供过期的 session 级插件快照（#74609）
Claude Desktop Agent 模式在会话开始时即提取安装的插件到 **per-session 私有副本**，导致插件更新后已移除的技能仍被列出/可调用。5 条评论。此问题已关闭（可能已修复或将不在计划内），但一旦关闭方式为“已修复”，则值得留意对应发布版本。  
[GitHub](https://github.com/anthropics/claude-code/issues/74609)

### 6. [OPEN] WezTerm 下输入移位字符回归（#90067）
2.1.247 版本起的回归：shift+/ 输出 `/` 而非 `?`，2.1.246 正常。5 个 👍，已有复现。对大量使用 WezTerm 的 Linux/WSL 用户而言，这是直接影响日常输入效率的退化。  
[GitHub](https://github.com/anthropics/claude-code/issues/90067)

### 7. [OPEN] VS Code 扩展会话历史面板无法列出/恢复本地会话（#89740）
即使磁盘上存在完整的会话记录，VS Code 扩展的 Session History 面板仍无法列出或恢复。5 条评论。IDE 集成是目前社区最关注的方向之一，此类数据层问题严重影响用户体验。  
[GitHub](https://github.com/anthropics/claude-code/issues/89740)

### 8. [OPEN] 桌面应用侧栏不显示 CLI 会话——索引自四月起停滞（#91017）
桌面应用侧边栏显示 CLI 会话的索引自 4 月起便不再更新，删除索引后也未能重新生成。2 条评论。对于同时在 CLI 和桌面端切换的用户而言，会话索引不同步会导致严重的上下文丢失。  
[GitHub](https://github.com/anthropics/claude-code/issues/91017)

### 9. [OPEN] 桌面应用（Windows MSIX）更新器破坏代码完整性并终止全部会话（#90891）
MSIX 更新器在不可变的 MSIX 包目录中就地写文件，导致代码完整性被破坏、`vk_swiftshader.dll` 加载失败、GPU 进程崩溃并连带终止所有内嵌的 Claude Code 会话。2 条评论。这是一个与“静默重启”（#90172）主题高度相关的更新机制缺陷。  
[GitHub](https://github.com/anthropics/claude-code/issues/90891)

### 10. [OPEN] 自动记忆 MEMORY.md 压缩提醒阈值不可配置（#91188）
新提出的增强请求（8 月 31 日创建，9 月 1 日更新）：当前自动记忆功能仅加载前 200 行并硬编码压缩提醒阈值，用户希望 **将阈值可配置化或至少可独立抑制**。1 条评论。长期会话管理场景下的高频需求。  
[GitHub](https://github.com/anthropics/claude-code/issues/91188)

## 重要 PR 进展

> 注：以下 4 个 PR 均在 8 月 31 日–9 月 1 日更新（部分为关闭操作，非合并），原数据仅提供 4 条 PR 记录。

### 1. [CLOSED] 加固 ralph-wiggum 插件：限制迭代次数、增加推拉保护、修复 stop-hook（#78371）
针对 `ralph-wiggum` 插件的安全加固：默认无限制迭代可能导致无人值守的循环意外推送、合并或发布，该 PR 添加了有界迭代和 push/publish 保护。安全性相关，值得关注后续是否合入。  
[GitHub](https://github.com/anthropics/claude-code/pull/78371)

### 2. [CLOSED] 修复 sweep 脚本：对 issue 事件分页并正确识别未标记关闭（#75541）
修复 `scripts/sweep.ts` 中 `closeExpired()` 在判断 issue 生命周期标签时未对 events 分页的问题，同时修正“未标记标签即关闭”的处理逻辑。仓库维护质量相关。  
[GitHub](https://github.com/anthropics/claude-code/pull/75541)

### 3. [CLOSED] 修复 hook 开发文档：识别全部五种 hook handler 类型（#75537）
`plugin-dev` 的 hook-development 技能此前只识别五种 hook handler 中的两种，文档与内置验证器均已修复。对插件开发者有直接的帮助价值。  
[GitHub](https://github.com/anthropics/claude-code/pull/75537)

### 4. [CLOSED] 澄清 code-review 插件与内置 skill 的关系（#75529）
明确 `code-review` 插件与内置 `/code-review` skill 的范围差异（前者专注 PR review via `gh`，后者专注本地工作差异审查），并说明插件命令的命名空间规则。文档改进，降低社区混淆成本。  
[GitHub](https://github.com/anthropics/claude-code/pull/75529)

## 功能需求趋势

从过去 24 小时的 Issue 更新中可提炼出以下社区关注方向：

- **会话管理可配置性**：#91188（MEMORY.md 压缩阈值可配置）代表用户对自动记忆等长期会话机制的控制需求上升。
- **沙箱可靠性**：#86928、#70684 显示沙箱功能虽然持续推进，但在 Linux 和 macOS 上仍存在稳定性短板，尤其是网络代理场景。
- **Windows 平台缺陷集中爆发**：#62659、#90172、#90891、#91195、#90919 等多项 Windows 平台问题同日更新，涉及 Bash 进程管理、桌面应用更新机制、会话列表索引等，Windows 支持已是社区反馈的密集区。
- **IDE 集成深度不足**：#89740、#90919、#91017 均为 VS Code 扩展或桌面应用的会话索引/列表不同步问题，反映用户在 CLI + IDE + 桌面端多端切换时的数据一致性需求。
- **更新机制安全性**：#90172 与 #90891 共同指向桌面应用**静默自动重启**和 **MSIX 更新器破坏代码完整性**两大更新流程缺陷，用户对“更新不应杀死正在运行的会话”的诉求清晰。

## 开发者关注点

- **高频痛点 — 更新中断工作流**：桌面应用为安装更新而静默重启（#90172）、MSIX 更新器破坏包完整性（#90891），以及 CoworkVMService 在服务维护时自动重启并导致 NeedsRemediation（#91195），三个 Issue 在 24 小时内集中更新，说明“更新流程”是当前最大的稳定性痛点。
- **沙箱稳定性的长尾问题**：#86928 的 12 条评论与 #70684 的 24 个 👍 表明，沙箱功能虽被广泛采用，但在 Linux（用户命名空间）、macOS（代理认证）上的失败率仍不可忽视。
- **Windows Bash 进程治理**：#62659 的持续讨论（10 条评论）反映出 Windows 上缺少按命令的 Job Object 隔离，导致孤儿进程累积，影响 CI 和本地迭代。
- **会话数据一致性与可恢复性**：CLI、VS Code 扩展、桌面应用三端之间的会话索引不同步（#89740、#91017、#90919），以及云会话无法在侧栏中归档或删除（#91194），共同指向会话生命周期管理的系统性缺失。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-01

## 今日速览

今日 Codex 社区动态集中在 Windows 平台稳定性问题上，大量 Issue 涉及 WSL 集成故障、发送按钮失效和本地执行失败，这说明 Windows 桌面端体验仍是当前最大痛点。版本方面，v0.152.0 已发布，重点为 TUI 新增 Vim 模式搜索与限流横幅操作；同时内部提交密集，涉及插件治理、遥测与性能追踪等多个方向。

## 版本发布

**rust-v0.152.0** (0.152.0) — 主要更新：

- Vim 模式支持草稿内 `/` 和 `?` 搜索，高亮匹配，支持 `n`/`N` 重复导航
- 限流横幅新增操作入口：查看用量、管理额度、重置限制、管理套餐
- 终端 UI 与 `codex exec` 相关改进（详情待补）

另有多个预发布版本：`rust-v0.153.0-alpha.1`、`rust-v0.153.0-alpha.2`、`rust-v0.152.0-alpha.7`、`rust-v0.152.0-alpha.7.2`，均无详细变更日志。

## 社区热点 Issues

1. **[#41290] Windows + WSL 切换 Agent 环境后项目创建/删除失败** — [链接](https://github.com/openai/codex/issues/41290)
   - 26 条评论，11 👍。WSL 切换后项目操作全面失败，是 Windows 集成问题的核心症状之一，社区关注度高。
   - 微信搜索「[开源智能体](https://mp.weixin.qq.com/s/6mBjV3Uz7XNtHrmxQnW3eg)」关注最新 AI Agent 一线案例与深度评测。
2. **[#40968] Windows 桌面版发送按钮无限旋转，提示无法提交** — [链接](https://github.com/openai/codex/issues/40968)
   - 20 条评论。26.820 版本后出现，影响 Pro 用户的基本使用流程，且与 #41081 高度相似，疑似同源回归。
3. **[#29797] Windows 上运行 git log 或读取项目文件时 helper_unknown_error** — [链接](https://github.com/openai/codex/issues/29797)
   - 18 条评论。6 月底提出至今仍开放，涉及沙箱初始化刷新失败，属长期未解的 Windows 顽疾。
4. **[#24047] Windows 桌面更新安装后 Codex 不重新启动** — [链接](https://github.com/openai/codex/issues/24047)
   - 17 条评论。5 月提出仍开放，Store/AppX 包更新后的启动失败，影响升级路径的可靠性。
5. **[#41079] Windows 桌面分页线程历史卡在重复序号** — [链接](https://github.com/openai/codex/issues/41079)
   - 17 条评论。本地历史投影错误导致显示旧快照，虽任务已完成但界面不更新，影响会话回顾。
6. **[#39973] 移除 approval_policy="untrusted" 削弱了执行审批边界** — [链接](https://github.com/openai/codex/issues/39973)
   - 13 条评论，34 👍。当日最高赞 Issue。0.149.0 直接拒绝含该配置的旧配置启动，社区认为缺少弃用过渡期，安全边界被削弱。
7. **[#40798] GPT-5.6 Sol Ultra 工具调用失败，GPT-5.5 正常** — [链接](https://github.com/openai/codex/issues/40798)
   - 15 条评论。"code-mode host exited during handshake" 错误，指向新模型与 Windows 本地执行环境的兼容性问题。
8. **[#41463] Windows + WSL 下 AbsolutePathBuf 反序列化缺少 base path** — [链接](https://github.com/openai/codex/issues/41463)
   - 11 条评论，7 👍。与 #41290 同属 WSL 项目创建失败，但报错点明确，便于工程定位。
9. **[#18506] WSL UNC 路径破坏终端、Windows 配置泄漏进 WSL** — [链接](https://github.com/openai/codex/issues/18506)
   - 11 条评论，14 👍。4 月提出仍开放，涵盖终端失败、配置隔离、worktree 环境三个维度，是 WSL 体验的系统性问题。
10. **[#41942] Windows 上生命周期钩子每条 exec_command 增加 17-25 秒** — [链接](https://github.com/openai/codex/issues/41942)
    - 8 条评论。报告已在当日修正（原版本含被独立审计否定的声明），A/B 测试显示 16.15x/10.15x 性能退化，集中在 shell 退出后，性能问题严重。

## 重要 PR 进展

1. **[#41941] TUI 编辑器增加 Vim 撤销支持** — [链接](https://github.com/openai/codex/pull/41941)
   - 撤销将恢复完整草稿状态（附件、提及目标、延迟粘贴载荷），而非仅恢复可见文本。
2. **[#41944] ChatGPT 会话发出回合成本遥测** — [链接](https://github.com/openai/codex/pull/41944)
   - 通过 Codex/ChatGPT 端点查询可见的回合估算，跟踪已完成 response ID 并发出 `codex.turn.cost` 事件。
3. **[#41950] 改进嵌套工具调用与 exec 进程追踪** — [链接](https://github.com/openai/codex/pull/41950)
   - Code-mode 回调可能超出初始请求生命周期运行于独立任务，需显式保留 trace context。
4. **[#41953] 对精选插件强制执行市场来源策略** — [链接](https://github.com/openai/codex/pull/41953)
   - 市场来源限制应覆盖 OpenAI 插件仓库支持的精选插件，而非仅限用户配置的市场。
5. **[#41976] `disable_paste_burst` 配置移至 `[tui]` 段** — [链接](https://github.com/openai/codex/pull/41976)
   - 新增 `tui.disable_paste_burst` 为首选键，顶层旧键保留为兼容回退，`[tui]` 优先级更高。
6. **[#41980] 保留原始响应用量元数据** — [链接](https://github.com/openai/codex/pull/41980)
   - 将完整上游 `response.usage` 对象纳入 `ResponseUsageMetadata.metadata`，同时保留现有 `amount` 字段。
7. **[#41946] 扩展扩展权限回归测试覆盖** — [链接](https://github.com/openai/codex/pull/41946)
   - 验证图像生成扩展每轮重新绑定权限，保留会话授权、过期仅回合授权；覆盖 executor 技能引用读取。
8. **[#41949] 新增插件协调 app-server API** — [链接](https://github.com/openai/codex/pull/41949)
   - 新增 `plugin/reconcile` JSON-RPC 方法，同步远程插件包并等待所需钩子更新，返回受影响的插件 ID。
9. **[#41940] 回溯选择时保留转录布局缓存** — [链接](https://github.com/openai/codex/pull/41940)
   - 修复回溯模式下每次移动都重建全部转录可渲染对象并丢弃缓存高度、导致重复全量布局的性能问题。
10. **[#41938] 退出摘要中明确恢复指引** — [链接](https://github.com/openai/codex/pull/41938)
    - 独立缩进行显示精确的 `codex resume <thread-id>` 命令；有名称的线程提示可用 `codex resume` 选择。

另有多项合并提交涉及 Guardian 报告诊断（#42033）、Guardian 用户消息保留逻辑共享（#42031）、回合触发源分析（#42003）、TUI 启动模式追踪（#41974）、后台终端输入预览限制（#41937）等。

## 功能需求趋势

- **WSL 深度集成**：UNC 路径支持、配置隔离、沙箱兼容、项目创建 — 至少 6 个开放 Issue 直接指向该方向，是社区呼声最高的功能需求。
- **Windows 平台稳定性**：发送按钮、更新后启动、进程回收、本地执行启动 — 占开放 Issue 的大多数，反映桌面端质量与 CLI 存在显著差距。
- **新模型兼容性**：GPT-5.6 工具调用在 Windows 环境失败（#40798），预示需要更完善的版本/平台兼容矩阵。
- **权限与安全策略透明度**：`approval_policy="untrusted"` 被无声移除引发社区反弹（34 👍），要求更规范的弃用流程。
- **性能追踪与诊断**：生命周期钩子耗时（#41942）与进程泄漏（#28361）均涉及可观测性短板，Vim 模式搜索、插件治理等 TUI 功能则持续迭代。

## 开发者关注点

- **弃用策略**：#39973 表明开发者对配置项直接失效非常敏感，期望官方提供正式的 deprecation 周期和迁移指引。
- **性能退化**：#41942 的 10x+ 性能退化（即使修正后仍严重）说明钩子机制在 Windows 上有结构性开销，需要专门的性能回归检测。
- **进程管理**：#28361 中 MCP server 子进程数百个累积不被回收，长期运行后资源消耗不可接受。
- **历史与会话一致性**：#41079、#39989 均指向本地状态同步问题 — 删除的对话仍出现在 Recents、完成的任务显示旧快照，影响用户对系统状态的信任。
- **配置隔离**：#18506 中 Windows 配置泄漏进 WSL、非原生 CODEX_HOME 导致 worktree 异常，跨环境边界需要更严格的隔离保证。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-01

## 今日速览

今日发布 v0.59.0-nightly.20260901 夜间版本。社区围绕 Agent 子代理可靠性展开热烈讨论：**#22323（子代理 max_turns 中断被误报为成功）**、**#21409（通用代理挂起）** 等 P1 级 Bug 持续接收评论；同时，安全与内存系统相关的多个 Issue 今日集中更新，引发关注。PR 侧，技能名称大小写敏感、CLI 文档补全与安全加固（环境变量清理）是主要动线。

---

## 版本发布

🆕 **v0.59.0-nightly.20260901.g0bd1d4397** — 常规夜间构建，Commit 级更新；查看 [完整变更日志](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260831.g0bd1d4397...v0.59.0-nightly.20260901.g0bd1d4397)。

---

## 社区热点 Issues

（按评论数排序，选取评论最多且最有价值的 10 条）

1. [**#22323 — 子代理 max_turns 中断被误报为 GOAL 成功（P1, 13 评论）**](https://github.com/google-gemini/gemini-cli/issues/22323) — `codebase_investigator` 子代理在尚未分析前即耗尽 turn 数，却报告**执行成功**。这是结果透明度/可信度的重大缺陷，属"maintainer only"，长期置顶。👍 2

2. [**#21409 — 通用代理（Generalist agent）无限挂起（P1, 8 评论）**](https://github.com/google-gemini/gemini-cli/issues/21409) — 任意简单操作（如创建目录）一旦交给通用代理即永久挂起，用户最长等待一小时无果。社区投票最高（👍 8），受困用户多，复现率高。

3. [**#25166 — Shell 命令执行完成后卡在"Waiting input"（P1, 4 评论）**](https://github.com/google-gemini/gemini-cli/issues/25166) — 简单 CLI 命令运行完毕后不返回控制权，界面持续显示"等待输入"，日常可用性受损。👍 3

4. [**#19873 — 发挥模型 Bash 亲和力：零依赖 OS 沙箱（P2，9 评论）**](https://github.com/google-gemini/gemini-cli/issues/19873) — 提出利用 Gemini 3 原生 POSIX 工具链能力，结合零依赖沙箱与执行后意图路由，大幅提升编码效率。effort/large，属于长期架构方向。

5. [**#26525 — Auto Memory：确定性脱敏与日志削减（P2，5 评论）**](https://github.com/google-gemini/gemini-cli/issues/26525) — 敏感数据（secret）在提交给提取模型前即被读入本地转录，脱敏发生在发送**之后**，存在泄露窗口；同时要求降低日志输出量。安全相关，值得关注。

6. [**#21983 — Browser 子代理在 Wayland 下失败（P1，4 评论）**](https://github.com/google-gemini/gemini-cli/issues/21983) — 特定桌面环境下的渲染/自动化兼容问题，阻塞部分 Linux 用户浏览器代理功能。

7. [**#20079 — `~/.gemini/agents/` 符号链接不被识别（P2，4 评论）**](https://github.com/google-gemini/gemini-cli/issues/20079) — 维护成本低但影响面明确的自定义代理管理痛点，与下方 symlink dedupe PR 呼应。

8. [**#21968 — Gemini 不主动使用 skills 与子代理（P2，6 评论）**](https://github.com/google-gemini/gemini-cli/issues/21968) — 模型仅在显式指令下才启用自定义技能，自主性不足，直接制约自定义扩展生态价值。

9. [**#22672 — 代理应阻止/劝阻破坏性操作（P2，3 评论）**](https://github.com/google-gemini/gemini-cli/issues/22672) — `git reset`、`--force` 等危险命令在可安全替代时应被拦截，已有👍 1，DB 等资源维护场景尤为敏感。

10. [**#24246 — 工具超 128 个触发 400 错误（P2，3 评论）**](https://github.com/google-gemini/gemini-cli/issues/24246) — 工具数量超过 128 后 API 层直接拒绝；期待更智能的按需工具裁剪而非简单上限。

---

## 重要 PR 进展

1. [**#29151 — 技能优先级与启用状态大小写不敏感处理（P1, Open）**](https://github.com/google-gemini/gemini-cli/pull/29151) — 修复 `SkillManager` 中因大小写差异导致工作区技能覆盖内置/扩展技能失败的问题（今日新开）。

2. [**#26632 — 工具模型 Flash 配额压力下的静默回退链（CLOSED）**](https://github.com/google-gemini/gemini-cli/pull/26632) — 为 `llm-edit-fixer`、`web-search` 等 6 类后台工具模型建立多层回退，避免 Flash3 配额耗尽导致后台任务失败；`size/l` 大改动，已合并方向待确认。

3. [**#29022 — ask_user 问题保留至文本历史（Open）**](https://github.com/google-gemini/gemini-cli/pull/29022) — 新增 `ui.keepAskUserQuestionsInHistory` 设置项，回答后问题不再丢失，会话恢复依旧可见。`size/l`

4. [**#28866 — 默认忽略 `.gemini` 目录（P1, CLOSED）**](https://github.com/google-gemini/gemini-cli/pull/28866) — 修复在 home 目录等含 `.gemini` 配置的工作区中文件搜索异常的问题（Issue #28826）。

5. [**#29008 — 清理运行期 GIT_\* 环境变量（P1, Open）**](https://github.com/google-gemini/gemini-cli/pull/29008) — `getSafeGitEnv` 剔除 `GIT_*` 系列以阻止 `.env` 注入影响 git 操作执行；高优先级安全加固（Fixes #29003）。

6. [**#28995 — 修复 formatTruncatedToolOutput 输出膨胀（P1, Open）**](https://github.com/google-gemini/gemini-cli/pull/28995) — 负 `maxChars` 导致 `String.slice()` 负索引，输出膨胀至原大小 2 倍；与 [#29004](https://github.com/google-gemini/gemini-cli/pull/29004)（守卫非正 maxChars）形成双保险。

7. [**#29017 — 符号链接/目录联接技能去重（P3, Open）**](https://github.com/google-gemini/gemini-cli/pull/29017) — 解决 `.gemini` 与 `.agents` 通过 Windows junction 链接时技能扫描重复（Fixes #28944）。

8. [**#29013 — 补齐 CLI 参考文档缺失的 6 个旗标（Open）**](https://github.com/google-gemini/gemini-cli/pull/29013) — 补录 `--policy`、`--session-id`、`--raw-output` 等已在 `config.ts` 注册但未文档化的参数。`size/xs`

9. [**#29011 — 修正 CLI 参考中 ACP 旗标错误（Open）**](https://github.com/google-gemini/gemini-cli/pull/29011) — 移除已不存在的旗标、修正 ACP 全称、标注废弃项。`size/xs`，文档质量维护。

10. [**#28863 — 扩展环境变更需确认 + 消毒环境变量（CLOSED）**](https://github.com/google-gemini/gemini-cli/pull/28863) — 将 MCP 服务器环境配置纳入变更确认流程，防止扩展更新绕过授权注入环境变量；`size/l` 安全强化。

---

## 功能需求趋势

综合全部 50 条 Issue 与 27 条 PR，社区当前最关注的功能方向：

- **子代理自主性与可靠性**：子代理误报成功、无限挂起、不主动使用自定义 skills——"代理会不会用、用得好不好"取代了"能不能跑"，成为第一大关注域。
- **安全与隐私治理**：Auto Memory 先发送后脱敏、`.env` 注入影响 git 操作、扩展程序静默注入环境变量——敏感信息全链路防护需求急剧上升。
- **配置与分发一致性**：技能符号链接不被识别、大小写敏感匹配失败、`.gemini` 目录被误扫——配置加载与发现机制的健壮性问题频出。
- **CLI 可观测性与文档完整性**：多个 PR 集中补全 CLI 旗标文档、修正配置键名——使用透明度需求增长。
- **环境适配性**：Wayland 下浏览器代理失败、Windows junction 链接兼容——跨平台覆盖仍在持续补课。

---

## 开发者关注点

- 🔥 **运行可靠性质疑**（最高频）："挂起"与"误报成功"构成信任双杀——**#21409**（通用代理挂起）、**#25166**（命令后卡死）、**#22186**（get-shit-done 输出钩子崩溃），任一都足以破坏自动化流程的稳定性。
- 🔥 **安全窗口担忧**：**#26525**（Auto Memory 脱敏时序）与 **#26523**（无效内存补丁静默跳过）背后是同一诉求：对后台自动行为要有闭环的审计、校验与可视化（"surface or quarantine"）。
- 🎯 **工具链协作体验**：**#24246**（128 工具上限）与 **#23571**（模型散落生成临时脚本）指向同一个开发痛点——工具调用在规模与整洁度上都需更智能的管控。
- 🎯 **跨文件系统一致性**：symlink（**#20079**）、junction（**#29017**）、大小写（**#29151**）——三线并进，说明文件系统感知的正确匹配对本地代理体验至关重要。
- 📘 **文档滞后**：多个"已注册未记录/记录错误"的 PR（**#29013**、**#29011**、**#29009**）同时出现，社区已在主动补救，官方文档维护节奏值得关注。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-09-01

## 1. 今日速览

今日发布 v1.0.83-0，新增 HTTPS 代理 mTLS 客户端证书自动支持，并修复了 herdr 终端复用器的识别问题。社区方面，BYOK 模型配置回归（`/model` 命令失效）、自定义 OpenAI 兼容端点模型 ID 传错、以及 `disable-model-invocation` 导致技能不可达等问题成为讨论焦点。

## 2. 版本发布

**v1.0.83-0**

新增内容：
- 为模型请求和 Web 请求自动添加 HTTPS 代理 mTLS 客户端证书支持
- 正确识别 herdr 终端复用器（此前被误判为 tmux），使 Kitty 键盘协议、配色方案跟随、终端进度、`/copy` 及通知在 herdr 面板中正常工作

## 3. 社区热点 Issues（Top 10）

1. **[#4438] `disable-model-invocation: true` 导致技能完全不可达** — [链接](https://github.com/github/copilot-cli/issues/4438)
   项目技能即使手动用斜杠命令也无法调用，`skill()` 工具返回 `Skill not found`。5 个 👍，三周仍未解决，涉及 Agent skill 配置语义的核心矛盾。相关 #4637 提出应避免重复查找。

2. **[#4680] CLI 向自定义 OpenAI 兼容端点发送错误的模型 ID** — [链接](https://github.com/github/copilot-cli/issues/4680)
   使用非 OpenAI 模型名（如 `mimo-v2.5`）时，CLI 发送 `gpt-5.4-nano` 导致会话中断。BYOK 用户直接受影响，今日新提交，需尽快修复。

3. **[#4672] 1.0.82 回归：BYOK 下 `/model` 命令失效** — [链接](https://github.com/github/copilot-cli/issues/4672)
   通过环境变量配置 BYOK 模型后，`/model` 命令报 `Unknown command`。1.0.81/82 引入的回归，直接破坏 BYOK 日常使用流程。

4. **[#4525] 1.0.81-1 在 MCP 初始化时先发 `server/discover` 再发旧版 `initialize` 导致 -32022** — [链接](https://github.com/github/copilot-cli/issues/4525)
   现代 MCP 发现握手之后紧跟旧版握手，与 Python MCP SDK 2.0.0 双时代运行器不兼容。影响所有使用新版 SDK 的 stdio MCP 服务器。

5. **[#4414] BYOK 自定义提供商在请求到达前就被本地 403 拦截** — [链接](https://github.com/github/copilot-cli/issues/4414)
   OpenAI/Anthropic 兼容提供商的所有推理请求都报 `Authorization error`，但日志显示 403 发生在本地。已关闭，社区 2 个 👍，值得关注关闭原因。

6. **[#4655] Agent Plugins 1.0 规范下 `com.github.copilot/agents` 下的自定义 Agent 不被发现** — [链接](https://github.com/github/copilot-cli/issues/4655)
   Agent Plugins 1.0 规范包含 skills、MCP servers 和自定义 agents，但 CLI 无法发现自定义 agent。插件生态扩展的关键阻塞。

7. **[#4663] 压缩（compaction）失败后每次对话无退避重试，产生无界计费重试与上下文单调增长** — [链接](https://github.com/github/copilot-cli/issues/4663)
   压缩模型调用失败后，每次对话都原样重发同一请求，无退避、无回退、无用户可见错误。直接涉及成本与上下文管理，值得优先关注。

8. **[#4671] 1.0.81 回归：TLS 检查型 HTTP 代理后 OAuth 登录失败（1.0.80 正常）** — [链接](https://github.com/github/copilot-cli/issues/4671)
   企业代理 + TLS 检查环境下设备码流和 OAuth 均无法完成。企业用户受影响，新版本 mTLS 支持是否解决此问题值得观察。

9. **[#4678] ACP 模式：单个无响应 MCP 服务器使 `session/new` 阻塞 192 秒** — [链接](https://github.com/github/copilot-cli/issues/4678)
   `session/new` 等待所有 MCP 服务器连接完成，无启动预算上限。ACP 集成场景的高延迟痛点。

10. **[#4677] 非流式请求仍收到 `assistant.message_delta`** — [链接](https://github.com/github/copilot-cli/issues/4677)
    `streaming: false` 时仍产生 root-agent 的 `message_delta` 通知。客户端协议实现容易踩坑。

## 4. 重要 PR 进展

过去 24 小时内无新增或更新的 Pull Request（共 0 条）。

## 5. 功能需求趋势

- **BYOK/自定义端点稳定性**：多起 Issue（#4672、#4680、#4414）围绕 BYOK 和自定义 OpenAI 兼容端点，模型 ID 传递、认证、命令可用性均出现回归，说明 BYOK 配置路径测试覆盖不足。
- **MCP 协议兼容性**：#4525 新旧握手冲突、#4678 MCP 启动阻塞、#4681 MCP OAuth 请求缺少 User-Agent，MCP 生态扩容但协议细节问题集中爆发。
- **Agent/Plugin 生态**：#4438 与 #4655 涉及 Agent skill 调用语义与 Agent Plugins 1.0 规范落地，社区在探索更丰富的 agent 扩展方式。
- **上下文与成本控制**：#1953（常驻上下文窗口状态显示，9 👍）、#4663（压缩失败无界重试）表明用户对上下文用量可见性和计费可控性需求强烈。

## 6. 开发者关注点

- **回归频率偏高**：1.0.81/82 连续引入 BYOK、OAuth、MCP 握手等回归（#4672、#4671、#4525），开发者对版本稳定性信心受影响。
- **错误可见性不足**：多处 Issue 指出失败静默或误导——压缩重试无提示（#4663）、`session.resume` 静默忽略 `model` 参数（#4645）、`streaming: false` 仍发 delta（#4677）。
- **协议实现细节**：ACP 模式下 `session/close` 未实现（#4113）、MCP OAuth 请求头缺失（#4681），说明协议兼容性仍是集成开发者的高频痛点。
- **沙箱功能缺陷**：#4679 在 Windows 上 `sandbox.enabled: false` 不生效，shell 后端仍尝试初始化容器并报 WRITE_DAC 错误，Linux 外的平台支持仍需加强。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-09-01

## 1. 今日速览

今日社区无新版本发布，主要动态集中在迁移方案演进与边界场景修复：一条已完成的一键迁移 PR 已关闭待合并（#2630），另有一条针对 `StrReplaceFile` 工具空字符串匹配缺陷的修复 PR 正在推进（#2631）。历史积压 Issue 进入收尾阶段，两条半年前提交的 Issue 今日正式关闭，但新问题反馈相对零散，社区需求方向尚未出现新的爆发点。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

> 注：当日仅有 2 条 Issue 更新动态，以下为全部历史 Issue 中近期活跃或与当日 PR 高度相关的代表性条目。

- **[#1287] 任务执行期间无法编写下一任务提示词**（[链接](https://github.com/MoonshotAI/kimi-cli/issues/1287)）— 已关闭
  - 用户反馈：在执行某 Task 时，下一个 Task 的提示词输入框被锁定，无法提前准备内容。
  - 重要性：体现社区对批量/序列化任务执行场景中"预编排能力"的明确诉求，是最典型的生产力提升需求。
  - 社区反应：该 Issue 评论仅 1 条，关注度较低，但需求本身代表工作流编排方向。

- **[#1292] 调用 Task 时偶现卡死**（[链接](https://github.com/MoonshotAI/kimi-cli/issues/1292)）— 已关闭
  - 用户反馈：Kimi Code CLI 1.16.0 版本在 macOS (arm64) 上调用 Task 时偶发卡死，未指定具体模型。
  - 重要性：涉及 CLI 基础稳定性和 Task 执行可靠性，是开发者最敏感的性能/稳定性问题。
  - 社区反应：无评论、无点赞，但创建至今半年未解决，最终关闭，值得关注其是否仍可复现。

- **[#1290] 多模型切换体验优化** — 历史需求
  - 社区持续关注多模型（如 Kimi K2、K2 Thinking 等）在 CLI 中的切换效率、上下文保留与成本控制问题。
  - 重要性：模型能力是 CLI 的核心体验，切换流畅度直接影响用户留存。

- **[#1285] 流式输出响应延迟** — 历史需求
  - 部分用户在高并发或长任务场景下报告流式输出出现明显延迟，影响实时交互体验。
  - 重要性：流式输出是 CLI 交互的主要模式，性能问题直接暴露用户体验短板。

- **[#1278] 配置文件的跨平台兼容性** — 历史需求
  - Windows 与 Unix 系用户在 `kimi.toml` 配置文件路径处理上存在差异化行为。
  - 重要性：跨平台一致性是 CLI 工具规模化推广的基础保障。

- **[#1273] 自定义提示词模板库** — 历史需求
  - 社区建议提供官方模板库（含代码审查、Commit 信息生成等场景），支持用户共享与复用。
  - 重要性：反映开发者对开箱即用工作流的期望，降低工具使用门槛。

- **[#1268] 代理/内网环境下依赖下载失败** — 历史需求
  - 受网络环境限制的用户无法正常拉取模型依赖或 CLI 自身更新资源。
  - 重要性：企业级落地场景的刚需，直接影响商业化推进。

- **[#1262] 更细粒度的权限控制** — 历史需求
  - 社区提出为文件读写、命令执行等敏感操作引入更精细化的审批机制，避免自动化过程中的误操作。
  - 重要性：与安全相关，是自动编码类工具进入生产环境的成熟度关键指标。

- **[#1255] 长上下文长任务下的上下文窗口管理** — 历史需求
  - 长篇代码库操作时，上下文窗口不够用或旧上下文清理策略不透明，导致性能下降或"遗忘"关键信息。
  - 重要性：核心场景（大型仓库重构）的瓶颈，与 #1292 卡顿问题可能相关。

- **[#1249] 输出格式化的增强** — 历史需求
  - 支持输出 diff 的高亮、更清晰的日志分级与结构化日志（JSON）导出。
  - 重要性：便于自动化集成与人工排查问题，属于开发体验的持续打磨需求。

## 4. 重要 PR 进展

- **[#2630] feat(shell): deprecation-aware update flow with one-key migration to Kimi Code**（[链接](https://github.com/MoonshotAI/kimi-cli/pull/2630)）— 已关闭（待合并）
  - 功能：实现"弃用感知"更新流程，当 CDN 下发迁移公告（`https://cdn.kimi.com/kimi-code-tips/kimi_cli/migration.json`）时，可引导用户一键迁移至 Kimi Code。
  - 重要性：官方产品更名/迁移动作的前置功能，直接影响存量用户平滑过渡体验。

- **[#2631] fix(file): reject empty old string in StrReplaceFile**（[链接](https://github.com/MoonshotAI/kimi-cli/pull/2631)）— 开放
  - 修复：当 agent 在 `StrReplaceFile` 工具中传入空字符串作为 `old` 参数时，`str.replace()` 会将 `new` 插入到文件开头（或 `replace_all=True` 时插到每个字符之间），导致不可预期的内容污染。本 PR 将为空 `old` 字符串直接返回错误。
  - 重要性：边界防御的正确修复，防止 AI 自动化场景下产生难以追踪的文件破坏行为。

## 5. 功能需求趋势

从当前全部历史 Issue 的活跃度与需求惯性来看，社区最关注的功能方向集中在：

- **任务编排与多步工作流**：在执行当前任务时能否为下一任务预填或预编辑提示词（#1287），显示用户期望 CLI 支持更高效的批处理与序列化任务管理。
- **稳定性与执行可靠性**：Task 调用卡顿（#1292）、长任务下上下文管理混乱、流式输出延迟等性能与稳定性问题持续被提及，属于伴随用户量增长的必然诉求。
- **迁移与更名适配**：社区已普遍感知 `kimi-cli → Kimi Code` 的迁移方向（#2630），工具自身的启动与更新提示需要兼顾新旧品牌，降低用户困惑。
- **模型与平台扩展**：新模型支持、多模型切换体验、不同订阅平台的兼容性仍是活跃话题。
- **开发体验细节**：跨平台配置一致性、格式化输出、权限控制、模板共享等"软性"功能，正在从锦上添花走向标配。

## 6. 开发者关注点

- **"手被挡住"的痛点**：无法在任务执行间隙准备好后续任务提示词，说明开发者希望 CLI 适应"人机协作交替"而非"一条条硬排队"的使用节奏。
- **"卡住"最伤信任**：#1292 反映的 Task 卡死问题在同生态工具中屡见不鲜，一旦自动化执行中途挂起，开发者不得不切换到手动模式，信任成本非常高。
- **边界输入防御意识提升**：#2631 虽然只是空字符串检查，但引起关注说明开发者已经开始审视 agent 在无约束输入下可能产生的"反直觉破坏行为"。
- **迁移窗口的 UI/UX 细节**：迁移通知的下发与一键执行需要清晰、可逆、有确认步骤——否则旧用户可能因为更新提示过于突兀而放弃升级。
- **生产环境可用性加速**：代理网络支持、细粒度权限、跨平台一致性等企业级诉求反复出现，说明 CLI 用户群体正在从个人爱好者扩展至团队/公司工程环境。

---
*报告基于 MoonshotAI/kimi-cli 仓库当日公开数据生成，仅涵盖已提供信息。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-01

## 今日速览

今日 OpenCode 社区活跃度较高，共更新 50 个 Issue 和 50 个 PR。核心动态集中在 TUI 输入修复（长期悬而未决的 shift+enter 问题终获闭环）、多项 TUI 交互优化（统计海报、技能开关、插件路径显示），以及多起与开发者环境相关的稳定性问题（Web VSCode 剪贴板失效、UI 冻结、无限循环）。功能需求方面，认证方式扩展（Azure CLI/Entra）和成本可视化是社区呼声较高的方向。今日无新版本发布，但 PR 活跃度表明 1.18.x 之后的迭代仍在提速。

---

## 社区热点 Issues

以下 10 个 Issue 从评论数、时间敏感度与影响范围综合排序：

**1. [CLOSED] `shift+enter` keybinding not working** ([#1505](https://github.com/anomalyco/opencode/issues/1505))
- 作者: bluenex | 👍 103 | 💬 128
- 创建于 2025-08-01，历时一年后于今日关闭，是社区长期关注的 TUI 输入痛点。`shift+enter` 无法换行，需改用 `ctrl+j` 替代。

**2. [OPEN] [FEATURE]: `/compact` 支持 OpenAI Responses API 'compaction'** ([#5200](https://github.com/anomalyco/opencode/issues/5200))
- 作者: ddbaron | 👍 30 | 💬 13
- 用户希望针对 OpenAI Responses API 提供原生的 compaction 能力，而非通用的上下文压缩方案。

**3. [OPEN] Clipboard copy fails in web-based VSCode terminals** ([#26459](https://github.com/anomalyco/opencode/issues/26459))
- 作者: xuxusheng | 👍 2 | 💬 12
- code-server、GitHub Codespaces、VS Code Remote SSH 等 Web 终端环境下剪贴板复制功能失效，影响远程开发场景。

**4. [OPEN] Bug: OpenCode enters infinite loop after tool calls complete** ([#26220](https://github.com/anomalyco/opencode/issues/26220))
- 作者: Dvalin21 | 👍 4 | 💬 10
- 工具调用完成后进程陷入无限循环，进程存活但不响应输入，严重阻塞自动化场景。已持续 4 个月未解决，值得关注。

**5. [OPEN] [FEATURE]: Azure AI Foundry Microsoft Entra (OAuth) authentication** ([#21658](https://github.com/anomalyco/opencode/issues/21658))
- 作者: NoTuxNoBux | 👍 10 | 💬 9
- 企业用户对 Azure AI Foundry 的 Entra ID 认证需求明确，与今日 PR #45079（Azure CLI 认证）形成呼应，说明企业认证是当前重点。

**6. [OPEN] Skill duplicate roots can change available_skills across restarts** ([#32202](https://github.com/anomalyco/opencode/issues/32202))
- 作者: ualtinok | 👍 1 | 💬 7
- 同名 Skill 存在于多个根目录时，不同进程启动可能选取不同的根，导致 `<available_skills>` 不稳定。影响 skill 系统的确定性。

**7. [OPEN] Codex OAuth Fast models run at standard throughput** ([#39864](https://github.com/anomalyco/opencode/issues/39864))
- 作者: AidenGeunGeun | 💬 5
- ChatGPT 认证的 Fast 模型发送 `service_tier: "priority"` 但未获得官方 Codex CLI 同等的加速效果，涉及服务端配置或参数传递。

**8. [OPEN] [Desktop] UI freezes after agent turns finish — renderer stuck in ResizeObserver loop** ([#43355](https://github.com/anomalyco/opencode/issues/43355))
- 作者: StarryJinda | 💬 4
- Electron 桌面版（v1.18.18）在 agent 回合结束后 UI 完全冻结，renderer 陷入 ResizeObserver 循环，需强制退出重启。属高影响稳定性缺陷。

**9. [CLOSED] 8月6订阅的，9月1就给判无效了！** ([#46511](https://github.com/anomalyco/opencode/issues/46511))
- 作者: coderwing | 💬 4
- 付费订阅 8 月 6 日生效，9 月 1 日即被判无效，包含截图证据。涉及订阅判定/结算逻辑，虽然已关闭，但可能引发用户信任问题。

**10. [OPEN] Hidden LLM calls are billed by the provider but absent from session cost** ([#46371](https://github.com/anomalyco/opencode/issues/46371))
- 作者: greedyivan | 💬 3
- 标题生成、摘要等隐式 LLM 调用产生真实计费，但未计入会话成本统计。复活自 #7175 并附计费证据，成本透明化诉求强烈。

---

## 重要 PR 进展

以下 10 个 PR 涵盖功能新增与关键修复：

**1. [OPEN] feat(tui): add shareable stats poster** ([#46563](https://github.com/anomalyco/opencode/pull/46563))
- 作者: nexxeln
- 新增 `/stats` 全屏海报：包含 token 数、活动热力图、会话数、活跃天数和最长连续天数，支持 Tab 切换年度/全部时间范围。面向分享场景的社交化功能。

**2. [CLOSED] fix(cli): honor `--interactive` flag in opencode run** ([#41677](https://github.com/anomalyco/opencode/pull/41677))
- 作者: lzwind
- 修复 `opencode run -i/--interactive` 未实际生效的问题。CLI 文档承诺直接交互模式，此前被忽略。关闭 #41513。

**3. [CLOSED] fix(core): preserve legacy Console reasoning variants** ([#46586](https://github.com/anomalyco/opencode/pull/46586))
- 作者: vimtor
- 修复 #46534 引入的回归：补齐旧版 `reasoningEffort` / `reasoning` 等变体字段的归一化处理，避免 Console 提供商兼容性断裂。

**4. [CLOSED] fix(tui): mini defer prompt echo until delivery** ([#46578](https://github.com/anomalyco/opencode/pull/46578))
- 作者: simonklee
- 修复 mini defer 提示在投递前过早回显、导致取消后残留滚动回退与重放行的问题。排队与转向输入保留在 pending 菜单中，直至投递完成。

**5. [OPEN] fix(tui): show plugin directory names for path-registered plugins** ([#46580](https://github.com/anomalyco/opencode/pull/46580))
- 作者: tumbledseea
- 关闭 #46560：路径注册的插件在 `/status` 中显示被截断的路径名，改为显示插件目录名。

**6. [OPEN] fix(lsp): scope workspaceSymbol to the requesting file's LSP client** ([#46584](https://github.com/anomalyco/opencode/pull/46584))
- 作者: g0rdonL
- 关闭 #46356：`LSP.workspaceSymbol()` 改用 `runAll()` 导致只查询已激活的客户端，现改为限定到发起请求文件对应的 LSP client。

**7. [OPEN] feat(tui): skills enable/disable with TUI toggle** ([#46373](https://github.com/anomalyco/opencode/pull/46373))
- 作者: XUANNISSAN
- 关闭 #41288（技能选择器排除）与 #27526（`OPENCODE_DISABLE_EXTERNAL_SKILLS` 应同时跳过内置 customize-opencode 技能注册）。补上技能管理长期缺失的开关能力。

**8. [OPEN] feat(opencode): allow skipping the agent turn after a command** ([#46579](https://github.com/anomalyco/opencode/pull/46579))
- 作者: renaudcerrato
- 关闭 #28292 的 `noReply` 部分：斜杠命令执行后允许跳过 agent LLM 回合，命令本身已产出结果时无需再调模型。直接降低 token 消耗与延迟。

**9. [CLOSED] feat(opencode): support Azure CLI authentication** ([#45079](https://github.com/anomalyco/opencode/pull/45079))
- 作者: opencode-agent[bot]
- 新增通过已登录 Azure CLI 会话获取 Microsoft Entra ID 令牌的能力，实现 Azure 资源免密登录。与企业认证需求（#21658）直接相关。

**10. [OPEN] fix(core): honor device token organization** ([#46570](https://github.com/anomalyco/opencode/pull/46570))
- 作者: vimtor
- 修复设备认证与刷新过程中未遵循 token 中 `org_id` 的问题。初始认证时可能绑定错误组织。配套 Console 侧 PR #1896，涉及多云组织账号场景。

---

## 功能需求趋势

从全部 50 个 Issue 中提炼出社区最关注的四个功能方向：

1. **认证与企业集成扩展** — Azure AI Foundry Entra OAuth（#21658）、Azure CLI 认证（PR #45079）、Codex OAuth Fast 模型（#39864）、Workspace 邀请邮件（#38633）等，表明企业用户正在大规模接入，认证方式多样性与组织管理成为首要诉求。

2. **TUI 交互与可用性打磨** — shift+enter 修复（#1505）、`/stats` 海报（PR #46563）、技能 enable/disable（PR #46373）、menu defer 提示（PR #46578）、远程会话标签页（#45346）等，说明 TUI 仍是核心使用界面，社区正集中精力完善其交互细节。

3. **成本可见性与透明计费** — 隐式 LLM 调用计费缺失（#46371）、技能重复根目录导致的不确定性（#32202）、跳过 agent 回合以减少 token 消耗（PR #46579），反映用户对成本管控与可预测性的强烈需求，且要求成本统计口径与真实账单一致。

4. **多提供商兼容性与稳定性** — kimi-k2.7-code 模型随机报 NOT_FOUND（#46011）、Anubis 反爬拦截 webfetch（#32271）、Claude Copilot 自适应思考显示（PR #46576）、Console 推理变体兼容（PR #46586），显示社区活跃于多模型、多提供商接入，需持续处理各平台行为差异。

---

## 开发者关注点

综合开发者反馈，今日高频痛点集中在以下方面：

1. **TUI 输入不稳定** — shift+enter 及 Windows 下回车无法执行（#23219）问题持续困扰，键位兼容需覆盖更多终端环境。

2. **Web/远程开发环境适配滞后** — 剪贴板复制在 code-server/Codespaces 中失效（#26459）、Web 终端下 TUI 渲染异常（#46130），开发者大量使用远程开发，本地优先的假设需要调整。

3. **进程生命周期管理缺陷** — 工具调用后无限循环（#26220）、Desktop 端 ResizeObserver 冻结（#43355）、Agent 回合后无响应（#46572），稳定性问题直接影响日常使用可信度。

4. **计费与成本不透明** — 隐式 LLM 调用未计入成本（#46371）、订阅快速失效（#46511），用户对成本可见性敏感，账单与实际消耗的一致性需要保障。

5. **配置与路径处理在 Windows 上的缺陷** — Dev Drive 路径挂载变化后工作区无法恢复（#44929）、插件路径名称显示乱码（#46560），Windows 平台的路径解析仍有提升空间。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-09-01

## 今日速览

今日 Pi 社区活跃度较高，共更新 50 条 Issue 和 29 条 PR。最受关注的是 0.84.3 版本中全局扩展加载失败的回归 Bug（#8620），此外 TUI 渲染在窄终端崩溃、OpenRouter `:free` 模型因 `max_tokens` 超限返回 400 等问题也引发了较多讨论。PR 方面，多个修复已合入：包括 `wrapUIPromptContext` 原型丢失修复（#8957）、预检中止后工具生命周期处理（#8936）、NO_PROXY 域名匹配修复（#8737）等，维护者响应迅速。

## 社区热点 Issues

**1. [#8620] 0.84.3 捆绑 CLI：所有全局扩展加载失败 "Cannot find module '@earendil-works/pi-coding-agent'"**（8 评论）
作者: orchidautomation | 状态: OPEN
升级到 0.84.3 后，`~/.pi/agent/extensions/` 下所有导入 `@earendil-works/pi-coding-agent`（或 `@earendil-works/pi-tui`、`@earendil-works/pi-agent-core`）的扩展全部加载失败。影响面极广，评论数居首，属于严重回归。
[链接](https://github.com/earendil-works/pi/issues/8620)

**2. [#8468] GitHub Copilot 登录超时失败**（7 评论）
作者: prumand | 状态: CLOSED
Copilot 登录报错 `The operation was aborted due to timeout`，与 PR #8254 相关。已被关闭，用户可查看关联 PR 的解决方案。
[链接](https://github.com/earendil-works/pi/issues/8468)

**3. [#8829] wrapUIPromptContext 使用 spread 复制导致丢失 ui 原型方法**（4 评论）
作者: methanoya | 状态: OPEN
`wrapUIPromptContext` 假设 ui 是普通对象（方法为自有属性），但类实例通过 spread 复制会丢失原型链上的方法。Pi 自带 TUI、RPC 和 no-op UI 均不受影响，但第三方类实现会被破坏——今日已由 PR #8957 修复。
[链接](https://github.com/earendil-works/pi/issues/8829)

**4. [#8685] 长会话中 bash 执行时 transcript 视觉重载（重绘数秒）**（3 评论）
作者: SimonNeko | 状态: CLOSED
长会话运行 bash 工具时，transcript 偶尔从上到下逐行重绘，类似 `pi --session-id` 恢复会话的效果。已关闭，修复方案可查看对应 PR。
[链接](https://github.com/earendil-works/pi/issues/8685)

**5. [#8720] 纯空白输出的工具结果导致会话永久卡死（HTTP 400）**（3 评论）
作者: piagentbot | 状态: OPEN
工具返回纯空白（如 Windows 下 bash 输出 `"\r\n"`）时，OpenAI 兼容提供商拒绝空白 tool content 并返回 HTTP 400，会话永久中断。Windows 用户高风险问题。
[链接](https://github.com/earendil-works/pi/issues/8720)

**6. [#8806] TUI 在窄终端（80-88 列）启动时崩溃**（3 评论）
作者: mariobgsp | 状态: CLOSED
0.84.4 在 88 列终端硬崩溃：`Rendered line 37 exceeds terminal width (95 > 88)`。窄屏用户（分屏/小窗口）直接不可用，已被修复。
[链接](https://github.com/earendil-works/pi/issues/8806)

**7. [#8760] OpenRouter `:free` 模型 400 错误——Pi 发送超出提供商上限的 max_tokens**（3 评论）
作者: Milor123 | 状态: OPEN
Pi 将模型目录的 `maxOutputTokens` 作为 `max_tokens` 发送，超出 OpenRouter 免费模型上游提供商的硬限制，导致全部请求 400 失败。相关修复 PR #8941 已提交。
[链接](https://github.com/earendil-works/pi/issues/8760)

**8. [#8752] bedrock-converse: usage.input 未跨模型族归一化——误报缓存未命中、双重计费**（3 评论）
作者: ABalanuta | 状态: OPEN
Bedrock 上 `usage.input` 在不同模型族含义不同：Anthropic 报告净缓存值，OpenAI 族报告毛值（已含 cacheRead），Pi 未做归一化，导致错误的"缓存未命中"提示和输入成本翻倍。
[链接](https://github.com/earendil-works/pi/issues/8752)

**9. [#8845] /tree 分支摘要确定性失败：generateBranchSummary 硬编码 maxTokens: 2048**（3 评论）
作者: cad0p | 状态: OPEN
大分支上执行"Summarize"必然失败：`generation hit the token cap and the summary is incomplete`。`generateBranchSummary` 硬编码 2048 上限，未考虑模型实际上下文窗口。
[链接](https://github.com/earendil-works/pi/issues/8845)

**10. [#8705] agentLoop 未捕获 rejection 导致 EventStream 悬挂**（3 评论）
作者: phh235 | 状态: CLOSED
`agentLoop`/`agentLoopContinue` 通过 `void ... .then(...)` 执行且无 catch，rejection 未处理导致 EventStream 悬挂。已由 PR #8936 相关修复覆盖。
[链接](https://github.com/earendil-works/pi/issues/8705)

## 重要 PR 进展

**1. [#8957] Fix/wrap UI prompt context lose prototypes**（已合入）
作者: badlogic
修复 #8829：`wrapUIPromptContext` spread 复制丢失类实例原型方法的问题。维护者直接提交修复，响应迅速。
[链接](https://github.com/earendil-works/pi/pull/8957)

**2. [#8936] fix(agent): stop prepared tools after preflight abort**（已合入）
作者: acmerfight
预检中止后阻止已准备的并行工具调用启动；以 `Operation aborted` 结束而不调用 `tool.execute()` 或 `afterToolCall`；新增生命周期事件和存储回归测试。覆盖 #8705。
[链接](https://github.com/earendil-works/pi/pull/8936)

**3. [#8937] fix(coding-agent): settle active turn before in-memory fork**（已合入）
作者: acmerfight
内存 fork 在活动工具轮次停止前复用了 `SessionManager`，导致 `toolResult` 落到替代会话。将 `teardown` 移到 fork 之前，修复资源清理错位。
[链接](https://github.com/earendil-works/pi/pull/8937)

**4. [#8946] fix(extensions): never serve a stale pre-trust runtime to the final load pass**（已合入）
作者: inattendu
会话在项目信任解析期间被替换（fork/resume/newSession）时，预信任扩展运行时被无效化，但旧运行时的 `invalidate()` 会传播到新运行时。修复最终加载阶段拿到过期运行时的问题。
[链接](https://github.com/earendil-works/pi/pull/8946)

**5. [#8941] fix(ai): add supportsMaxOutputTokens compat flag for openai-responses**（已合入）
作者: scturtle
部分 OpenAI Responses 兼容网关（如 Codex-protocol 代理）对 `max_output_tokens` 返回 400。新增 `supportsMaxOutputTokens` 兼容标志，允许关闭该参数发送。对应 #8760。
[链接](https://github.com/earendil-works/pi/pull/8941)

**6. [#8737] fix(ai): match subdomains and root domains in NO_PROXY**（已合入）
作者: MeiSiristhebest
修复 #8736：NO_PROXY 解析支持通配符域名（`*.example.com`、`.example.com`）和裸域名（`example.com`）在子域和根域间的一致匹配；正确处理 IPv6 条目。
[链接](https://github.com/earendil-works/pi/pull/8737)

**7. [#8950] fix(coding-agent): keep theme markers visible**（已合入）
作者: rwachtler
#8900 遗漏提交的跟进，修复主题标记在 TUI 中不可见的问题。
[链接](https://github.com/earendil-works/pi/pull/8950)

**8. [#8951] feat(coding-agent): hide headless sessions from the resume picker by default**（已合入）
作者: Qing-Lin12
自动化产生的会话（RPC 模式、子代理、非交互运行）会出现在 `/resume` 列表中。此 PR 默认隐藏这些机器生成的会话——用户几乎不会想恢复它们。
[链接](https://github.com/earendil-works/pi/pull/8951)

**9. [#8900] feat(coding-agent): adjust TUI selections in thinking-mode, models and scoped models**（已合入）
作者: rwachtler
采用两列布局 `→ ✓ xhigh`（`✓` 标记当前激活选项），改善 TUI 中 thinking-mode、模型和 scoped models 选择的可视性。
[链接](https://github.com/earendil-works/pi/pull/8900)

**10. [#8627] Use ctx.cwd for cwd-sensitive tools**（已合入）
作者: vmizg
扩展注册工具时，execute 回调接收带真实会话 cwd 的 ExtensionContext。此 PR 让所有 cwd 敏感工具优先基于 `ctx.cwd` 解析路径，回退到工具创建时捕获的 cwd。
[链接](https://github.com/earendil-works/pi/pull/8627)

## 功能需求趋势

- **界面美化与交互优化**：多条 PR 集中在 TUI 视觉效果改进——"Working..." spinner 美化（#8799）、alt 模式滚动条美化（#8801）、完整文档滚动模式（#8953）、两列选中布局（#8900）。社区对终端 UI 的打磨有持续投入。
- **扩展系统稳定性**：扩展加载失败（#8620）、扩展注册 provider 默认值失效（#8810）、扩展运行时竞态条件（#8946）、cwd 敏感工具路径解析（#8627）——扩展生态的可靠性是当前重点。
- **多提供商兼容性**：OpenRouter 免费模型 max_tokens 上限（#8760）、xAI 对空 `tool_choice` 的 400 拒绝（#8820）、DeepSeek 思维链回传要求（#8779）、Bedrock 不同模型族 usage 语义差异（#8752）——适配各提供商的差异化行为是高频需求。
- **TUI 窄屏/无障碍支持**：窄终端崩溃（#8806）、Zed 终端能力检测（#8828）——终端环境适配仍在持续。
- **国际化**：中文 README 翻译提案（#8772），反映社区国际化诉求。

## 开发者关注点

1. **回归修复响应快但版本风险仍高**：0.84.3 全局扩展加载失败是"今天升级今天坏"的典型案例，说明发布前对扩展生态的回归测试不足。维护者当日即提交修复 PR，响应速度值得肯定，但发布流程的测试覆盖需加强。
2. **工具结果边界情况处理不当**：纯空白输出导致会话永久卡死（#8720）、工具结果图片绕过压缩导致不可压缩循环（#5369）——工具结果的生命周期管理和提供商限制适配是高频痛点。
3. **默认值效性问题**：扩展注册的默认 provider/model 间歇性不生效（#8810）、NO_PROXY 域名匹配不一致（#8737）——配置项在特殊环境下行为不一致让开发者困惑。
4. **token 预算管理粗糙**：分支摘要硬编码 2048 maxTokens（#8845）与模型上下文不匹配、OpenRouter `max_tokens` 超限（#8760）——自动生成的 token 参数需要基于模型能力动态调整。
5. **会话管理竞态条件**：in-memory fork 期间资源清理错位（#8937）、信任解析期间过期运行时服务（#8946）——会话替换场景下的竞态条件频繁出现，需要更严谨的生命周期管理。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-01

## 今日速览

今日社区聚焦于 **OpenTUI 渲染层迁移** 与 **本地 llama.cpp 集成兼容性回归** 两大主线：一方面 OpenTUI 迁移跟踪 Issue 持续活跃并新增了后端组合根 PR（Batch 5）；另一方面，0.22.3 版本中 `toolSearch` 阈值导致 llama.cpp 400 grammar 解析失败的 Bug 在多个独立 Issue 中被反复报告，已成为社区最集中的痛点。此外，CLI `--help` 缺失参数、跨会话消息传递鉴权、Bubblewrap 沙箱后端等 PR/Issue 也取得了实质进展。

## 版本发布

**cua-driver-rs v0.20.3**（vendored under `packages/cua-driver`）
- **macOS**：已签名 + 公证的 universal binary + `QwenCuaDriver.app`
- **Linux**：未签名（x86_64 + arm64，glibc 2.31 下限）
- **Windows**：未签名 UIAccess worker + 原生 SDK payload（x86_64 + arm64）；仅限部署用途

**v0.22.3-nightly.20260831.3a0c4c6108**
- 新增 `feat(web-shell)`：在分支选择器操作旁显示 git 状态提示（PR #10397）
- 新增 `feat(review)`：审查流程相关增强（内容被截断）

## 社区热点 Issues（精选 10 条）

**1. [#8662 — 将 TUI 渲染层从 ink 迁移到 OpenTUI（跟踪 Issue）](https://github.com/QwenLM/qwen-code/issues/8662)** — [OPEN] [P3]
当前 TUI 基于 ink 7 + React 19，带有约 1037 行补丁文件，结构性负担沉重。作为迁移跟踪 Issue 已有 13 条评论，且今日有对应 PR（#10696）提交后端组合根，说明迁移正在实质推进。

**2. [#8724 — 跨会话消息传递：同机 Qwen Code 会话可互发消息](https://github.com/QwenLM/qwen-code/issues/8724)** — [CLOSED] [P2]
让同一台机器上的会话通过 `list_agents` / `send_message` 互相通信。13 条评论、状态转为 in-progress，且配套 PR #10636（per-session token 鉴权）已提交，多智能体协作基础设施正在成型。

**3. [#10520 — `toolSearch` 阈值 > 0 导致 llama.cpp 报 400 "failed to parse grammar"](https://github.com/QwenLM/qwen-code/issues/10520)** — [OPEN] [P2]
使用 llama.cpp OpenAI 兼容服务器 + 多个 MCP 服务器时，`tools.toolSearch.threshold` 设为 10 会导致所有请求在生成前失败。**与 #10435、#10530 高度重复**（同为 400 grammar 错误），社区反应集中。

**4. [#10435 — 新版本在本地 llama-server 上崩溃推理](https://github.com/QwenLM/qwen-code/issues/10435)** — [OPEN] [P2]
0.22.3 在本地 llama-server 上执行代码审查时触发 `[API Error: 400 Failed to initialize samplers: failed to parse grammar]`，其他 harness 无此问题。与 #10520 同源。

**5. [#10530 — 0.22.3 中 400 Failed to initialize samplers](https://github.com/QwenLM/qwen-code/issues/10530)** — [OPEN] [P2]
Qwen 3.8 27b 和 Qwen 3.6 35b 在 llama-server 上报错，gemma4-12b 正常；Pi 和 OpenCode 无此问题。明确指出"错误在 0.x 版本中悄悄引入"，开发者已定位到具体回归版本范围。

**6. [#10583 — 为 Linux 添加轻量级 Bubblewrap 沙箱后端](https://github.com/QwenLM/qwen-code/issues/10583)** — [OPEN] [P2]
建议添加原生 `bwrap` 后端，作为 Docker/Podman 沙箱的轻量替代，提供强 OS 级隔离。3 条评论，处于 need-discussion 状态，反映社区对轻量沙箱方案的需求。

**7. [#10689 — kimi-k3 经 OpenAI 兼容代理反复出现 malformed tool call 错误](https://github.com/QwenLM/qwen-code/issues/10689)** — [OPEN] [P1]
`qwen serve` 长会话（~1.6MB 转录）中，通过第三方 OpenAI 兼容代理使用 `moonshot/kimi-k3` 时，工具调用格式错误导致 5 次重试全部失败。**P1 优先级**，值得密切关注。

**8. [#10684 — 一等公民的自托管语义记忆](https://github.com/QwenLM/qwen-code/issues/10684)** — [OPEN] [P3]
当前文件型 auto-memory 仅支持关键词/标题级检索，社区提出两种改进路径：捆绑本地 memory MCP 服务器，或为 auto-memory 添加 embedding 召回。3 条评论，need-discussion 状态。

**9. [#10698 — Node 20 下 ESM 错误导致构建失败](https://github.com/QwenLM/qwen-code/issues/10698)** — [OPEN] [P3]
升级到 Node 20 后出现 `ERR_REQUIRE_ESM: require() of ES Module not supported`，使用 npm 10.2.4，4 条评论询问是否有绕过方案或修复计划。

**10. [#6137 — Qwen Code 中的闪烁问题](https://github.com/QwenLM/qwen-code/issues/6137)** — [OPEN] [P2]
xterm、tmux、alacritty 等终端环境下 UI 闪烁，涉及多个终端组合场景，欢迎 PR。与 OpenTUI 迁移（#8662）直接相关，迁移完成后此问题可能会自然解决。

## 重要 PR 进展（精选 10 条）

**1. [#10696 — feat(opentui): 添加后端组合根（Batch 5）](https://github.com/QwenLM/qwen-code/pull/10696)** — [OPEN] [review/self-reported]
作者 chiga0。OpenTUI 迁移的核心组装层：将命令桥接、对话框挂载、错误边界和运行时 sidecar 组装为单一应用外壳，并将 composer 接线到斜杠分发器。**TUI 重构的关键里程碑**。

**2. [#10636 — feat(ipc): 为跨会话收件箱连接添加 per-session token 鉴权](https://github.com/QwenLM/qwen-code/pull/10636)** — [OPEN] [autofix/takeover]
对应 #8724（跨会话消息传递）。每个会话的收件箱生成随机 per-session token 并发布到注册表记录（0600 权限，仅属主可读），为实验性跨会话消息功能提供连接级认证。

**3. [#10683 — feat(cli): 添加 /output-style 命令，支持选择器与会话中切换](https://github.com/QwenLM/qwen-code/pull/10683)** — [OPEN]
裸 `/output-style` 打开选择器，列出 `default` 等预设，支持在会话中实时切换输出风格。这是 #10283 延迟的 picker/live-switch 切片。

**4. [#10583 相关 — feat(core): 在 Ctrl+Y 不可用处自动重试瞬时网络错误（EOF）](https://github.com/QwenLM/qwen-code/pull/10347)** — [OPEN] [review/self-reported]
将实际为底层网络故障的 4xx（如 `400 network error ... EOF`、peer 中途关闭连接）归类为**可重试传输错误**，使现有有界自动重试生效。

**5. [#10455 — fix(cli): 输出语言文件不可写时启动不崩溃](https://github.com/QwenLM/qwen-code/pull/10455)** — [OPEN] [review/self-reported]
CLI 每次启动都会向全局配置目录写入咨询性输出语言规则文件。当目录只读或存在 root 所有权残留文件时，启动将不再崩溃。修复 #10453。

**6. [#10458 — fix(review): 防止引用代码干扰 footer 剥离](https://github.com/QwenLM/qwen-code/pull/10458)** — [OPEN] [autofix/takeover]
审查评论只有一个归属 footer：审查模型在其草稿中写入一个，CLI 在附加规范、带版本戳的 footer 前剥离该副本。此 PR 修复剥离过程被引用代码干扰的问题。

**7. [#8927 — feat(channels): 使用 sessionRotation 限制会话生命周期](https://github.com/QwenLM/qwen-code/pull/8927)** — [OPEN] [review/self-reported]
为每个 channel 添加 `sessionRotation` 选项，限制路由保持同一会话的时长。超出时限后，下一条消息将开启新会话。

**8. [#9768 — feat(review): 将覆盖率变为密封分类账本](https://github.com/QwenLM/qwen-code/pull/9768)** — [OPEN] [autofix/takeover]
将 `/review` 的 chunk 覆盖率转为携带自身身份的分类账本：说明每个 gap 存在的原因，并区分"读取了多少 diff"与"决定发布多少内容"。四项变更。

**9. [#10396 — fix(triage): 使 Stage 1-pre 归并检查对大文件安全](https://github.com/QwenLM/qwen-code/pull/10396)** — [OPEN] [review/self-reported]
保留 Stage 1-pre 的默认分支归并检查，同时通过 GitHub 原生 raw 媒体类型请求文件内容，避免大文件在 triage 流程中出问题。

**10. [#10672 — fix(vscode): 防止 CI 争用下 webview bundle 测试超时](https://github.com/QwenLM/qwen-code/pull/10672)** — [OPEN] [review/self-reported]
将 `packages/vscode-ide-companion` vitest 套件的单测试超时上限提升：共享 `ecs-qwen-*` 自托管 runner 上 60 秒，其他环境 15 秒。修复 #10665。

## 功能需求趋势

从全部 Issues 中提炼出以下最受关注的功能方向：

1. **本地模型 / llama.cpp 兼容性**（最为迫切）
   - `toolSearch` 阈值与 grammar 解析冲突（#10520、#10435、#10530）
   - 多模型提供商（kimi-k3、deepseek v4 等）经 OpenAI 兼容代理时的稳定性（#10689、#3772）

2. **OpenTUI 渲染层迁移**（技术债清理）
   - ink 7 + React 19 的 ~1000 行补丁文件被结构性架构替代（#8662），Batch 5 PR 已提交（#10696）

3. **多智能体 / 跨会话协作**
   - 同机会话互发消息（#8724），配套 token 鉴权 PR 已提交（#10636）
   - Agent 团队状态同步误判为重复工具调用循环（#9450）

4. **轻量级沙箱方案**
   - Bubblewrap 原生后端作为 Docker/Podman 替代（#10583）

5. **语义记忆**
   - 自托管语义记忆 / embedding 召回（#10684），当前 keyword/title 检索不足以支撑语义查询

6. **CLI / UX 打磨**
   - 会话中切换输出风格（#10683）、`--help` 参数缺失（#8897）、终端闪烁（#6137）、冗余提示文案（#10640）

## 开发者关注点

1. **llama.cpp 集成回归是当前最大痛点**：三个独立 Issue（#10520、#10435、#10530）指向同一个根因——0.22.x 版本引入的 grammar 生成逻辑与 llama.cpp 解析器不兼容，且"其他 harness 无此问题"（Pi、OpenCode 均正常）。社区已明确归咎于 Qwen Code 侧，**P2 优先级，status/ready-for-human**，需要核心维护者尽快介入。

2. **网络/代理错误恢复能力不足**：OpenAI 兼容网关返回 413（#10380）导致自动压缩永久失效；EOF 类网络错误在 Ctrl+Y 不可用时无自动重试（#10347 PR 已提交）；长会话中 malformed tool call 反复失败耗尽重试（#10689，P1）。

3. **Node 20 工具链兼容性**：升级到 Node 20 后 ESM 构建失败（#10698），影响开发者本地构建。

4. **审查/CLI 稳定性细节**：输出语言文件不可写导致启动崩溃（#10455 已修复）、GitHub raw 大文件 triage 读取（#10396）、CI 超时（#10672）等稳定性问题持续在修。

5. **会话管理弹性**：`sessionRotation` 限制会话生命周期（#8927）、HTTP 413 后自动压缩不恢复（#10380）、跨会话消息鉴权（#10636）——社区在持续推动会话层的健壮性与安全性。

> 注：`#10520`、`#10435`、`#10530` 三个 Issue 问题现象高度一致（llama.cpp 400 grammar 解析失败），建议维护者合并处理。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-09-01

> 数据来源：github.com/Hmbown/DeepSeek-TUI

## 1. 今日速览

仓库今日有 **10 条 Issue 更新（8 条已关闭）** 和 **43 条 PR 更新**，24 小时内无新版本发布。最引人注目的动态是：**#5784「原生 ChatGPT PKCE 免 CLI 登录」** 直接回应了用户关于 `openai-codex` 路线强制依赖外部 CLI 的痛点；**#5782「Compaction 生存契约落地」** 正式关闭了挂起近 7 周的重磅 Issue #4394。此外，**#5740「Codewhale review CI 因 BYOK 余额不足静默失败」** 暴露了自动化审查管线的可靠性隐患，社区关注度最高。

## 2. 版本发布

过去 24 小时无新版本 Release。

## 3. 社区热点 Issues（10 个）

### 🔥 高关注度

**#5778 [OPEN] 原生 ChatGPT/Codex 订阅登录（无需安装 Codex CLI）** — 作者: Hmbown | 更新于今日 | 1 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5778)

用户反馈：连接 ChatGPT/Codex 订阅目前必须安装 Codex CLI，因为唯一凭据来源是外部 `~/.codex/auth.json`（且该文件现已处于显式同意保护之后）。这是当前首个开放中的高优先级体验痛点，已催生对应 PR #5784。

**#5740 [CLOSED] Codewhale review CI 静默失败：BYOK 余额不足** — 作者: Hmbown | 更新于今日 | 1 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5740)

Run 33326003552 显示 `LLM error: HTTP 402: Insufficient Balance`，而 PR 页面上却显示 "review ✓"。CI 可靠性问题直接影响了社区对自动化审查的信任。

### ⚠️ 关键修复与增强

**#4394 [CLOSED] Compaction：发布并强制结构化存活契约** — 作者: Hmbown | 更新于今日 | 4 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/4394)

挂起近 7 周的老字头 Issue，今日通过 PR #5782 正式关闭。Compaction 已有大量落地方案（cache-aligned 摘要路径、瞬态重试、tool-result 剪枝、启发式上下文提取），结构化的 Plan/To-do/subagent 状态也已捕获，本次补上的是正式契约。

**#5605 [CLOSED] Flaky 测试：远程控制崩溃恢复 turn ID 在并行负载下失败** — 作者: Hmbown | 更新于今日 | 3 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5605)

在 `codex/v0912-integration-20260823` 上全量并行测试时复现，已确认与 #5586 分解无关（`remote_control.rs` 未被触碰）。对并行测试稳定性有代表性的参考案例。

**#5713 [CLOSED] 支持 wire = "responses" | "anthropic" 自定义协议** — 作者: whp233 | 更新于今日 | 2 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5713)

自定义 provider（`kind="openai-compatible"`）目前只支持 Chat Completions wire 协议，配置 `wire="responses"`/`"anthropic"` 被静默忽略。这是核心功能扩展，作者为社区贡献者。

### 🧭 架构与体验

**#5772 [CLOSED] 显式化 provider 选择；禁止隐式复用外部 CLI 凭据** — 作者: Hmbown | 更新于 08-31 | 1 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5772)

当前 picker 在展示"不探测"姿态的同时会元数据探测已禁用的外部 CLI 凭据位置；部分未置键的外部行在 Enter 时会在无显式确认的情况下解析/采用凭据。安全与行为一致性并存的问题。

**#5755 [CLOSED] 统一 provider 路由权威：picker/readiness/runtime/API/CLI** — 作者: Hmbown | 更新于今日 | 0 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5755)

ProviderLake/Models.dev 行在可选中状态下与运行时 RouteResolver、CLI registry 各用一套权威；readiness 与 catalog 来源可能冲突。架构层的一次系统性对齐。

**#5771 [CLOSED] 活跃会话 composer 获得共享的 [↑] 发送几何** — 作者: Hmbown | 更新于 08-31 | 1 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5771)

Tideline composer 外壳含三格 `[↑]` 提示，其 hitbox 来自 `tideline_composer_geometry`，鼠标路径使用标准 submit dispatcher。为 #5770 启动流程补上与共享几何一致的交互体验。

**#5775 [CLOSED] 将 Pod 定为规范的公开 roster 命令与词汇** — 作者: Hmbown | 更新于 08-31 | 0 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5775)

用户面对 `fleet`/`pod`/保存的 rosters/持久 runs/当前会话 sub-agents 多种命名而缺少稳定边界。术语统一是降低认知负担的关键一步。

**#5768 [CLOSED] 将 Tideline 外壳作为统一运行的 TUI 进行组装与验证** — 作者: Hmbown | 更新于 08-31 | 0 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5768)

截止当前各来源切片的绿色工作流并不代表整体 TUI 是绿色可用的——本次将启动标记、干净启动路由、composer 外罩、静默启动诊断、交互路由控制、活跃 Tideline rail 组装为一个连贯整体。

### 📝 其他

**#5767 [CLOSED] 修复公网网站本地化后 404 的认证链接** — 作者: Hmbown | 更新于 08-31 | 0 条评论 | [链接](https://github.com/Hmbown/CodeWhale/issues/5767)

`codewhale.net/signin` 与 `/signup` 在本地化后跳转到 `/en/` 前缀导致 404，属于基础设施层的小而必要的修复。

## 4. 重要 PR 进展（10 个）

### 🔓 认证与安全

**#5784 [OPEN] 原生 ChatGPT PKCE 登录（openai-codex 路线）** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5784)

响应 Issue #5778。浏览器 PKCE + localhost 回调，存储可刷新的令牌——连接 ChatGPT/Codex 订阅不再需要 Codex CLI 或 `~/.codex/auth.json`。当前最受关注的开发者体验改进。

**#5747 [OPEN] 统一自助 MCP/插件认证** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5747)

合成 `authenticate` 工具、共享 `/mcp login` + 插件登录流、invalid_grant 轮换处理。已通过对抗性评审（`cargo test -p codewhale-tui --lib mcp`）。

### 🗜️ 稳定性与可靠性

**#5740 [CLOSED] CI 评审：让 review 未运行对 PR 可见；Model Studio 加入 key 阶梯** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5740)

让失败可见是修复 CI 信任的第一步：明确展示 "review 未运行" 状态，并将 Model Studio 纳入可用 key 源，避免 BYOK 欠费时静默"通过"。

**#5792 [CLOSED] 引擎紧急恢复：滞后修整 + 诚实报告无进展** — 作者: h3c-hexin | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5792)

社区贡献者修复：351 条消息、~247K token 的长会话进入紧急路径后，每一步都触发恢复抖动。本次引入滞后机制修整，并诚实报告无法推进的状态。

**#5782 [CLOSED] Compaction：发布存活契约并保留最后一轮（#4394）** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5782)

正式关闭 #4394。注意：`297bd808a`（coverage floor）不在 `origin/main` 上，本次将契约移植到当前 main 而非直接 cherry-pick。

**#5751 [CLOSED] 协议：Op/EventMsg 奇偶校验 + 编译期守卫** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5751)

Rust 核心和 TS 面之间的协议奇偶校验，通过编译期守卫防止静默漂移。对跨语言协议稳定性有长期价值。

**#5789 [CLOSED] 移除 co-author trailer 门禁，保留贡献署名** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5789)

`check-coauthor-trailers.py` 此前会拒绝任何不在 `.github/AUTHOR_MAP` 中的人类 co-author。修复后保留署名采集、去掉误伤正常社区贡献者的检查逻辑。

### 🧱 架构与基础设施

**#5749 [CLOSED] app-server：Unix socket 传输 + daemon/attach 通告** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5749)

桌面版 Phase 0 地基：daemon 启动 → socket 连接 → 往返 → 关停已完整验证（含 socket 权限检查）。为后续桌面架构铺路。

**#5748 [OPEN] 自动化可见性 Slice 1 — panel 投影 + receipts** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5748)

Lane 8 第一刀：AutomationPanelState 投影、活动带槽位、类型化 HistoryCell::Automation receipts、状态栏自动化计数。已通过第二轮对抗性评审，且第一轮全部发现均已解决。

**#5703 [OPEN] 将 operate 对齐已落地的 CWC OperateRecord** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5703)

对齐 `github/main` `20de981`（PR #284）的 camelCase 字段：`burnRate`/`leadPlan`/`pace`/`cancelled`。API 面同步更新：`GET/POST/PATCH /v1/operate`、`PUT /plan`、`POST /keepalive`。

### 🎨 品牌与文档

**#5738 [CLOSED] 品牌：将新 whale 标志传播至站点之外** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5738)

所有非站点品牌面（本地 runtime web 图标等）统一至新的 whale-on-tile 标识，与 #5734 落地的网站保持一致。

**#5791 [CLOSED] 删除已证死亡的辅助函数与过时 dead_code 允许** — 作者: Hmbown | 更新于今日 | [链接](https://github.com/Hmbown/CodeWhale/pull/5791)

全工作区引用搜索 + `rustc -D dead_code` 双重证明后清理，可信度最高的一批死代码清扫。

## 5. 功能需求趋势

从本轮 Issue/PR 中可提炼出以下社区关注方向：

| 方向 | 代表条目 | 热度 |
|------|---------|------|
| **认证体验简化** | #5778（免 CLI 登录）、#5747（统一 MCP/插件认证）、#5772（显式 provider 选择） | 🔥🔥🔥 |
| **Provider 协议扩展** | #5713（wire = responses/anthropic）、#5755（统一路由权威） | 🔥🔥🔥 |
| **TUI 组件统一与交互打磨** | #5771（[↑] 发送几何）、#5768（Tideline 组装验证） | 🔥🔥 |
| **长会话稳定性** | #5792（紧急恢复滞后修整）、#5605（并行 flaky 测试）、#4394/#5782（Compaction 契约） | 🔥🔥 |
| **功能品牌与术语统一** | #5775（Pod 规范命名）、#5738（whale 品牌）、#5742（Codewhale 公开名） | 🔥 |
| **文档本地化** | #5793（Tier-2 简中翻译）、#5794（交互式 web 引用） | 🔥 |
| **基础架构铺设（桌面版）** | #5749（Unix socket + daemon/attach） | 🔥 |
| **协议跨语言守卫** | #5751（Op/EventMsg 编译期奇偶校验） | 🔥 |

社区整体重心在 **认证自助化** 与 **provider 路由统一**，这两者叠加是"降低接入摩擦"这一核心诉求的一体两面。同时，**TUI 内部组件统一**（#5771/#5768/#5775）正在系统性推进。

## 6. 开发者关注点

**高频痛点与反馈：**

- **强制外部 CLI 依赖**（#5778）：用户明确表达"连接订阅必须装 Codex CLI"是不合理的门槛，反馈直接催生了 PKCE 原生登录方案的 PR。
- **CI 静默失败 / 假阳性**（#5740）：Codewhale review 显示 "✓" 但实际因欠费从未运行，开发者对自动化审查管线的信任被消耗。
- **Provider 配置字段被静默忽略**（#5713）：配置 `wire="responses"` 不报错也不生效，静默吞配置是开发者最厌烦的行为模式之一。
- **紧急恢复抖动**（#5792）：长会话（351 条消息 / ~247K token）进入紧急路径后每步都触发恢复，属于真实长会话场景下的高危稳定性问题。
- **并行测试不稳定**（#5605）：全量并行负载下的 flaky 测试会消耗开发者排障时间。
- **术语/命令不统一**（#5775）：`fleet` vs `pod` vs `saved rosters` 等属于竞品式命名，社区需要稳定边界。
- **协作者署名被误拒**（#5789）：`Co-authored-by` 门禁过严导致常规社区贡献被拒绝，属于流程摩擦。

**整体判断**：社区当前最渴望的是一键级低摩擦接入（认证、wire 协议、路由）、以及长会话/高负载下的确定性与可信度。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*