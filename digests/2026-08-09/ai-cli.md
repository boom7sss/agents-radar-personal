# AI CLI 工具社区动态日报 2026-08-09

> 生成时间: 2026-08-09 02:08 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告

**报告日期：** 2026-08-09  
**分析范围：** Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（CodeWhale）

---

## 1. 生态全景

当前 AI CLI 工具已从单点接入模型 API 的阶段，快速演进为具备 Agent 编排、跨端协作、可编程钩子与运行时 API 的复合开发平台。社区反馈的热点高度集中于**多 Agent/多会话协同、Windows 平台稳定性、上下文与记忆管理、计费与模型路由透明度**四大方向，各工具在能力和成熟度上仍存在明显位差。与此同时，同一时间窗口内多个工具集中暴露出 Windows 专属缺陷（如 Claude Code GPU 崩溃、Codex Computer Use 故障、Copilot 日志级静默退出、OpenCode 休眠后 CPU 异常），说明**跨平台一致性正成为全行业的共同短板**。此外，以 Claude Code「Fable 5 计费争议」和 Pi「openai-codex 长连接 30% 失败率」为代表，**信任问题（计费透明与连接可靠性）已上升为社区最尖锐的情绪触发点**，直接影响产品口碑与用户留存。

---

## 2. 各工具活跃度对比

以下数据基于各工具日报中「过去 24 小时」标注的精选 Issue 与 PR 动态，并非仓库全量数据。

| 工具 | 热点 Issues | PR 更新 | Release | 社区信号摘要 |
|------|------------|---------|---------|-------------|
| Claude Code | 10 | 1 | v2.1.226 | Fable 5 计费争议爆发（70 评论）；消息队列需求 184 👍 |
| OpenAI Codex | 10 | 10 | rust-v0.148.0-alpha.5 | 钩子/审批系统密集迭代；Windows Computer Use 多故障 |
| Gemini CLI | 10 | 10 | v0.56.0-nightly | 3 个 P1 bug 未关闭；Agent 互调 PR 最具前瞻性 |
| Copilot CLI | 10 | 0 | 无 | 多 issue 被关闭疑似静默修复；长会话性能被投诉 |
| Kimi Code CLI | 2 | 0 | 无 | 活跃度最低；记忆系统诉求（25 评论）与 88k tokens 失控生成 |
| OpenCode | 10 | 10 | 无（v1.18.15 被引用） | /goal 功能 128 👍；DB 膨胀 13GB 严重；Go 网关回归 |
| Pi | 10 | 10 | 无（0.84.1 被引用） | 连接可靠性霸榜（76 评论）；auto-compaction 失效 |
| Qwen Code | 10 | 10 | v0.21.8 | 跨会话消息传递成主线；CI 稳定性受关注 |
| DeepSeek TUI | 10 | 10 | v0.9.5（品牌→CodeWhale） | Runtime API 密集扩展；死代码清理（464 处）反映工程治理 |

**解读：**
- **密集迭代组**（PR ≥ 10）：OpenAI Codex、Gemini CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI。
- **稳定修复组**（PR 极少）：Claude Code（1 PR）、Copilot CLI（0 PR）。
- **低活跃组**：Kimi Code CLI（2 Issues、0 PR）。
- 从 Issue 热度看，**Claude Code 与 Pi 拥有讨论最激烈的话题**（70+ 评论），前者是计费争议，后者是连接稳定性。

---

## 3. 共同关注的功能方向

### 3.1 跨会话与多 Agent 协同

| 工具 | 具体诉求 | 热度信号 |
|------|---------|---------|
| Claude Code | 消息队列（不打断当前工作）、桌面 App 远程控制会话 | 184 👍 / 119 👍 |
| Gemini CLI | 允许 subagent 相互调用/递归（PR #28738） | size/l，官方采纳 |
| Qwen Code | live-session 注册表 + 跨会话消息传递（#8724/#8728） | 已拆 PR 落地 |
| OpenCode | 原生会话目标 /goal、多实例会话隔离 | 128 👍 |
| DeepSeek TUI | CLI/TUI 控制面对等、统一任务表面、会话窥视 | 多 issue 追踪 |

**趋势：** 各工具均将「多会话/多 Agent 编排」列为下一阶段核心，但实现路径分化——Claude 走桌面端远程控制，Qwen/Gemini 走 Agent 间消息协议。

### 3.2 Windows 平台稳定性

| 工具 | 代表问题 |
|------|---------|
| Claude Code | 桌面端 GPU 进程崩溃杀死所有会话（#81698） |
| OpenAI Codex | Computer Use 审批不弹、窗口枚举失败、扩展资源加载失败 |
| Copilot CLI | 特定日志级别下静默退出、skill 工具找不到目录 |
| OpenCode | 休眠唤醒后 Bun 进程 CPU 异常、UNC 路径会话为空 |
| Gemini CLI | （macOS 沙箱崩溃为主，但 Wayland 下浏览器 Agent 失败） |

### 3.3 上下文与记忆管理

| 工具 | 具体诉求 | 暴露的问题 |
|------|---------|-----------|
| Claude Code | 上下文窗口元数据错误（200K vs 实际 1M） | statusline 饱和、/compact 异常 |
| Gemini CLI | Auto Memory 无限重试、先发送后脱敏 | 后台任务失控 + 隐私风险 |
| Kimi Code | 跨会话持久记忆（#1283） | 25 条评论持续升温 |
| OpenCode | event 表无限膨胀至 13GB+ | 磁盘撑爆、需手动清理 |
| Pi | Auto-compaction 从不触发直至 API 拒绝 | 长 agent 循环下上下文溢出 |
| DeepSeek TUI | 压缩实时性改造、上下文窗口静默降级 | 1M 模型被无声截断至 128K |

### 3.4 计费与模型路由透明度

| 工具 | 事件 | 影响 |
|------|------|------|
| Claude Code | Fable 5 在 Max 计划被拒并静默降级 Opus 4.8；模型被切换致 $1,050 超额账单 | 社区最强烈的投诉点之一 |
| OpenAI Codex | （未直接提及计费，但连接失败影响调用成本） | — |
| Gemini CLI | Preview 模型 404 回退稳定模型（PR #28608） | 被动降级缺失通知 |

**共同点：** 用户对「模型被切换/降级时缺乏明确异常反馈」的容忍度正在显著降低。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线/关键特征 |
|------|---------|---------|------------------|
| **Claude Code** | 全功能编码 Agent + 桌面端协同 + 企业合规 | 企业级开发者、Anthropic 生态重度用户 | 闭源，模型分层（Opus/Sonnet/Fable），强调桌面 App 与 CLI 联动 |
| **OpenAI Codex** | 可编程自动化（钩子系统）、Computer Use、审批流 | 需要复杂自动化流水线的进阶用户 | Rust 实现，钩子/Guardian 审批机制，TUI 可定制（多行状态栏） |
| **Gemini CLI** | Subagent 编排、浏览器 Agent、Auto Memory | Google/Vertex AI 生态用户、Agent 架构实验者 | 基于 Gemini 模型，开放 subagent 协作协议，系统级沙箱安全 |
| **Copilot CLI** | GitHub 工作流深度嵌入、企业认证 | GitHub 重度用户、企业团队 | 闭源，订阅制，紧耦合 GitHub/Azure 生态，MCP 内建 |
| **Kimi Code** | 轻量级 CLI、记忆系统（规划中） | Moonshot 生态用户、轻量使用场景 | 社区资源最少，当前聚焦跨会话记忆与生成护栏 |
| **OpenCode** | TUI 体验、插件系统、多模型网关 | 开源社区、插件开发者、多模型使用者 | TypeScript/Bun、SQLite 存储、插件槽位结构化、Go 网关（OpenCode Go） |
| **Pi** | 多 provider 聚合（含 openai-codex）、移动优先/agentic | 多模型用户、长会话任务执行者 | Bun/Node 双运行时，扩展生态（oh-my-pi），Auto-compaction |
| **Qwen Code** | 阿里云生态原生集成、Web Shell、多 Agent 协调 | 阿里云开发者、中国开发者 | Rust 核心，DashScope 原生认证，跨会话 live-session 注册表 |
| **DeepSeek TUI** | Rust 高性能、Runtime HTTP API、企业级控制面 | Rust 技术栈开发者、需要控制面的团队 | 品牌迁移 CodeWhale，20-crate 拆分，Runtime API 覆盖 Goal/Memory/MCP/Skill |

**核心差异：**
- **生态绑定路径：** Copilot（GitHub）、Qwen（阿里云）、Gemini（Google/Vertex）走深度绑定；OpenCode、Pi、DeepSeek 走 provider 中立。
- **架构理念：** Codex 强调「可编程钩子」与审批自动化；DeepSeek 强调「Runtime API 化」；Gemini 强调「Agent 间协作」；Claude 强调「端-端协同」。
- **TUI 优先级：** OpenCode、Pi、Codex 对 TUI 交互细节投入高（复制、滚动、状态栏），Claude/Copilot 相对轻视。

---

## 5. 社区热度与成熟度

### 按 Issue 讨论热度排序

1. **Pi** — openai-codex 连接问题 76 条评论，31 👍，社区持续共鸣
2. **Claude Code** — Fable 5 争议 70 条评论；消息队列 184 👍 为跨工具最高赞
3. **OpenCode** — /goal 128 👍，复制粘贴问题 55 条评论
4. **Gemini CLI** — P1 bug 评论区普遍 3-12 条，但长期未关闭
5. **Qwen Code** — 跨会话讨论刚起步（4-6 条评论），但 PR 落地迅速
6. **Copilot CLI** — 当日 issue 多被关闭，公开讨论活跃度一般
7. **Kimi Code** — 仅 2 条 Issue，社区规模较小

### 按发布与迭代节奏

- **快速迭代+工程纪律严明：** OpenAI Codex（10 PR/日）、DeepSeek TUI（发布序验证+Runtime API）、Qwen Code（RFC 到 PR 当日落地）
- **社区驱动密集合并：** OpenCode（kitlangton 单人 10+ PR）、Pi（10 PR 覆盖深度修复）
- **稳定保守：** Claude Code（1 个补丁 PR）、Copilot CLI（0 PR）
- **品牌/架构转型期：** DeepSeek TUI → CodeWhale，伴随大规模代码重构

### 成熟度判断

- **高信任度风险：** Claude Code（计费争议）、Pi（连接可靠性）——核心体验受到质疑。
- **工程化领先：** OpenAI Codex（钩子体系）、DeepSeek（发布自动化）、Qwen（CI 自动化追踪）。
- **生态潜力大但基础不稳：** Gemini（P1 长期未关）、OpenCode（DB 膨胀/复制粘贴老问题）。

---

## 6. 值得关注的趋势信号

### 信号一：Agent 协作从概念走向协议落地
Gemini 允许 subagent 互调、Qwen 落地 live-session 注册表与跨会话消息传递、OpenCode 推进 /goal 会话目标——**「多 Agent 编排」正在成为下一个标准能力**。开发者应关注各工具的会话消息协议与安全 gate 设计（如 Qwen 的入站门控），这将是构建复杂自动化流程的基础设施。

### 信号二：Windows 用户体验已成为工具采纳的隐形门槛
Claude（GPU 崩溃）、Codex（Computer Use 全家桶故障）、Copilot（静默退出）、OpenCode（休眠后 CPU 异常）在同一日集中暴露 Windows 问题，且多为基础链路故障。**Windows 开发者目前是「二等公民」**，但这也意味着率先补齐 Windows 稳定性的工具将获得显著的差异化优势。

### 信号三：上下文管理从「窗口大小」转向「生命周期工程」
- Pi 的 auto-compaction 失效、OpenCode 的 DB 膨胀、Gemini 的 Auto Memory 重试风暴、Claude 的元数据错误——四者共同指向**上下文的全生命周期管理（写入、压缩、持久化、清理）尚未成熟**。
- Kimi 社区对记忆系统的迫切需求（25 条评论）进一步验证：**跨会话记忆不再只是「想要的功能」，而是「影响留存的核心短板」**。

### 信号四：计费透明性成为信任基建，且涉及「静默降级」模式
Claude Code 的 Fable 5 事件并非孤例——Gemini 的 Preview 404 回退、DeepSeek 模型上下文静默降级均属同类模式。**用户对「无通知的模型/能力降级」的容忍度已接近零**。工具厂商（及 API 提供商）需要将变更通知与显式确认纳入产品机制。

### 信号五：CLI 工具正在演化出「可编程控制面」
DeepSeek Runtime API（Goal/Memory/MCP/Skill 生命周期端点）、Codex 钩子系统（异步命令、Guardian 审批、进程树终止）、Claude Dispatch 远程控制、Qwen Web Shell——**CLI 正从「人工交互工具」演变为「可被外部控制的 Agent 平台」**。嵌入 IDE、桌面 App、云端工作流的趋势不可避免。

### 信号六：MCP 集成是普及率与问题率的双高地带
多个工具（Claude VS Code 不加载 MCP、Copilot 企业认证失败、OpenCode MCP 重复进程、Gemini 工具数量超限 400）在 MCP 链路上存在断层，但 MCP 同时是用户最依赖的扩展机制。**MCP 生态的成熟度（认证、进程管理、工具路由）将直接决定 AI CLI 工具的上限**。

---

## 总结

2026 年 8 月的 AI CLI 生态呈现出「能力快速分化、质量参差不齐」的格局：OpenAI Codex、DeepSeek、Qwen 在工程化与平台化上领先；OpenCode、Pi 凭借社区驱动保持高速迭代；Claude Code 与 Copilot 在稳步与争议中维持既有市场份额；Kimi 仍处于早期探索阶段。对于技术决策者，建议关注三个核心决策维度：**多 Agent 编排能力（是否具备跨会话/协作协议）、平台覆盖（Windows 稳定性）、上下文与计费透明度（信任保障）**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-09）

## 1. 热门 Skills 排行

以下为社区讨论最集中的 8 个 PR，均处于 Open 状态。

- **#1298 — 修复 skill-creator 的 run_eval.py 评估失效**  
  功能：修复 `run_eval.py` 始终报告 recall=0% 的问题，涉及 Windows 管道读取、触发检测、并发 worker 等。该问题导致技能描述自动优化循环基于噪声运行。  
  讨论热点：这是阻断 skill-creator 核心流程的严重 bug，社区出现 10+ 独立复现（#556），并衍生出 #1099、#1050、#1323、#1261 等多个相关修复 PR。  
  状态：Open  
  https://github.com/anthropics/skills/pull/1298

- **#514 — 新增 document-typography 技能**  
  功能：对 AI 生成的文档进行排版质量控制，避免孤行、寡段、编号错位等问题。  
  讨论热点：社区认为这是所有 AI 生成文档的普遍痛点，用户很少主动要求排版，但直接影响文档质量与专业度。  
  状态：Open  
  https://github.com/anthropics/skills/pull/514

- **#538 — 修复 pdf 技能中的大小写敏感文件引用**  
  功能：修正 `skills/pdf/SKILL.md` 中 8 处大小写不一致的文件引用（`REFERENCE.md` → `reference.md`、`FORMS.md` → `forms.md`）。  
  讨论热点：在大小写敏感的文件系统（如 Linux）上会导致技能无法正常加载，社区关注跨平台可靠性。  
  状态：Open  
  https://github.com/anthropics/skills/pull/538

- **#486 — 新增 ODT 技能（OpenDocument 文本处理）**  
  功能：支持创建、填充、读取 OpenDocument 格式（.odt / .ods），并可解析 ODT 为 HTML，兼容 LibreOffice 等开源生态。  
  讨论热点：社区对 ISO 标准文档格式支持有持续需求，该技能填补了官方文档技能矩阵中 ODF 的空白。  
  状态：Open  
  https://github.com/anthropics/skills/pull/486

- **#210 — 改进 frontend-design 技能的清晰度与可操作性**  
  功能：重写前端设计技能的指令，使每条指引都可在单次对话中落地，且更具体地约束 Claude 行为。  
  讨论热点：社区普遍反映部分技能写得像“开发文档”而非“操作指令”，该 PR 是关于技能内容质量的典型讨论。  
  状态：Open  
  https://github.com/anthropics/skills/pull/210

- **#83 — 新增 skill-quality-analyzer 与 skill-security-analyzer 元技能**  
  功能：提供技能质量分析（结构、文档、示例、安全等五维评估）与安全分析工具。  
  讨论热点：与 #492 的命名空间欺骗问题直接相关，社区希望有工具能自动检查技能的完整性和安全风险。  
  状态：Open  
  https://github.com/anthropics/skills/pull/83

- **#541 — 修复 docx 技能与现有书签的 w:id 冲突**  
  功能：修复 DOCX 技能在添加修订时因 `w:id` 硬编码低地址导致文档损坏的问题。  
  讨论热点：涉及 OOXML 中共享 ID 空间的底层正确性，社区关注文档处理技能在复杂真实文件中的健壮性。  
  状态：Open  
  https://github.com/anthropics/skills/pull/541

- **#539 — 为 skill-creator 增加 YAML 特殊字符未加引号的警告**  
  功能：在 `quick_validate.py` 中加入前置校验，识别未加引号且包含 `:` 的 `description` 字段，避免静默解析失败。  
  讨论热点：技能描述中的 YAML 格式问题是社区常见新手错误，该修复直接提升技能创建体验。  
  状态：Open  
  https://github.com/anthropics/skills/pull/539

---

## 2. 社区需求趋势

从 Issues 中提炼出四大需求方向：

- **安全与信任边界**  
  #492（43 评论）指出社区技能被分布到 `anthropic/` 命名空间下，可能诱发用户对非官方技能授予过高权限。这是目前社区最担忧的问题，直接催生了对安全分析类技能的需求。  
  https://github.com/anthropics/skills/issues/492

- **组织级共享与企业环境支持**  
  #228 要求技能能在组织内直接共享，而不是通过文件传输和手动导入；#29 则期望在 AWS Bedrock 上使用官方技能。反映出从个人工具走向企业级协作基础设施的诉求。  
  https://github.com/anthropics/skills/issues/228  
  https://github.com/anthropics/skills/issues/29

- **技能生命周期与可靠性**  
  多个 issue 暴露了技能安装后消失（#62）、插件重复安装导致上下文冗余（#189）、评估工具触发率长期为 0%（#556、#1169）等问题。社区希望官方提供更稳定的版本管理、去重机制和可用的评估工具。  
  https://github.com/anthropics/skills/issues/62  
  https://github.com/anthropics/skills/issues/189  
  https://github.com/anthropics/skills/issues/556

- **上下文效率与智能体治理**  
  #1487 反映 `claude-api` 技能单次注入约 156k tokens，直接耗尽上下文窗口；#1329 提出符号化紧凑记忆；#412 和 #1385 则关注 AI agent 的安全治理与推理质量门控。社区希望技能在不牺牲质量的前提下尽量轻量，并为可审计的智能体行为提供规范。  
  https://github.com/anthropics/skills/issues/1487  
  https://github.com/anthropics/skills/issues/1329  
  https://github.com/anthropics/skills/issues/412  
  https://github.com/anthropics/skills/issues/1385

---

## 3. 高潜力待合并 Skills

以下 PR 讨论活跃、功能完整且与热门 issue 强关联，近期有较大概率合入：

- **#1298 — 修复 skill-creator run_eval.py 核心评估逻辑**  
  关联 #556、#1169，是当前生态中阻碍最大的工程问题。合入后可直接改善所有技能的质量优化闭环。  
  https://github.com/anthropics/skills/pull/1298

- **#83 — skill-quality-analyzer 与 skill-security-analyzer**  
  直接回应 #492 的安全信任问题，为社区提供可用的质量/安全审计工具，属于生态基础设施类技能。  
  https://github.com/anthropics/skills/pull/83

- **#1367 — self-audit：机械验证 + 四维推理质量门控**  
  与 #1385 的推理质量门控提案呼应，且不依赖特定模型/技术栈，普适性强，适合作为通用交付检查技能。  
  https://github.com/anthropics/skills/pull/1367

- **#514 — document-typography 技能**  
  解决 AI 文档排版这一高频痛点，实现清晰、独立，容易作为官方文档类技能直接合入。  
  https://github.com/anthropics/skills/pull/514

- **#486 — ODT 技能**  
  填补 OpenDocument 格式支持的空白，且与企业办公、开源生态场景匹配，社区讨论积极。  
  https://github.com/anthropics/skills/pull/486

---

## 4. Skills 生态洞察

**社区当前最集中的诉求是从“能用”走向“可信可用”：围绕技能评估工具的正确性、官方命名空间下的安全边界、以及技能对上下文窗口的消耗，展开了一场对技能生态质量与治理的系统性追问。**  
这与热门 PR 多为 skill-creator 修复、安全分析器、质量审计类技能相互印证。

---

# Claude Code 社区动态日报

**2026-08-09** | 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)


## 今日速览

- **v2.1.226 发布**：本版聚焦 Bug 修复与可靠性改进，未引入新功能。
- **Fable 5 计费争议激化**：[Issue #79337](https://github.com/anthropics/claude-code/issues/79337) 关于 Max 计划用户被要求“usage credits”、并被静默降级到 Opus 4.8 的投诉已积累 **70 条评论**，成为当前社区最热议题。
- **Windows 与跨端协作成焦点**：Windows 桌面端 GPU 进程崩溃（[#81698](https://github.com/anthropics/claude-code/issues/81698)）以及 Dispatch 远程控制在桌面端的系列问题（[#80058](https://github.com/anthropics/claude-code/issues/80058)、[#67303](https://github.com/anthropics/claude-code/issues/67303)）集中反映了平台稳定性短板。


## 版本发布

### v2.1.226
- **内容**：Bug fixes and reliability improvements
- **说明**：例行维护版本，未披露具体修复项，建议生产环境用户关注升级后回归。


## 社区热点 Issues

以下 10 个问题是过去 24 小时社区讨论最热烈、最具代表性的 Issue：

### 1. Fable 5 在 Max 计划上被错误要求“usage credits”
[Issue #79337](https://github.com/anthropics/claude-code/issues/79337) | 评论 70 | 👍 23 | 状态：OPEN

Fable 5 自 2026-07-20 起已成为 Max 计划的标准模型，但用户在 Max 计划下运行 Fable 5 时被拒绝，并**静默降级到 Opus 4.8**。该问题涉及计费、权限、模型路由多个核心模块，且已在多个场景复现，是当前社区最强烈的投诉点。

### 2. 功能请求：消息队列模式（Message Queue）
[Issue #50246](https://github.com/anthropics/claude-code/issues/50246) | 评论 50 | 👍 184 | 状态：OPEN

用户希望在 Claude 执行任务时，可以将后续指令排队而**不是打断当前工作**。184 个 👍 表明这是社区最期待的生产力增强功能之一，目前仍无官方排期。

### 3. 功能请求：Claude Desktop App 远程控制 Claude Code 会话
[Issue #29006](https://github.com/anthropics/claude-code/issues/29006) | 评论 36 | 👍 119 | 状态：OPEN

希望在桌面 App 中远程接管正在运行的 Claude Code 会话。与 Dispatch 相关的多个 bug（#80058、#67303、#84035）说明用户对跨端控制的需求非常强烈，但当前的实现并不稳定。

### 4. VS Code 版 Claude Code 完全不使用 MCP Servers
[Issue #19054](https://github.com/anthropics/claude-code/issues/19054) | 评论 24 | 👍 26 | 状态：OPEN

老牌 bug：VS Code 集成中的 MCP 工具全部不可用。该问题已持续近 7 个月仍未解决，严重影响依赖 MCP 生态的 VS Code 用户。

### 5. Windows 桌面应用 GPU 进程崩溃导致所有会话终止
[Issue #81698](https://github.com/anthropics/claude-code/issues/81698) | 评论 15 | 👍 0 | 状态：OPEN

Windows 桌面版在此次崩溃中**直接杀死整个应用及所有运行中的 Claude Code 会话**。涉及 RTX 5080 等 NVIDIA 显卡，崩溃代码与驱动不兼容有关。多用户报告类似问题。

### 6. CVP 批准的 org 在 Claude Code 中仍被安全策略拦截
[Issue #84352](https://github.com/anthropics/claude-code/issues/84352) | 评论 13 | 👍 0 | 状态：OPEN

已获得 Cyber Verification Program（CVP）批准的 org，在 Claude Code 中仍被网络保护策略误伤，且验证门户显示“Under review”。**安全策略状态同步不一致**，影响合规用户的正常使用。

### 7. 科学计算场景下安全策略误报
[Issue #83436](https://github.com/anthropics/claude-code/issues/83436) | 评论 11 | 👍 0 | 状态：OPEN

在红外光谱仪校准的科学计算会话中，**累计上下文触发网络保护误报**，且 Opus 5 和 Opus 4.8 均被拦截。社区担忧安全过滤对长上下文专业场景的误判率偏高。

### 8. Dispatch 在 macOS 桌面版被禁用，移动端却正常
[Issue #80058](https://github.com/anthropics/claude-code/issues/80058) | 评论 10 | 👍 1 | 状态：OPEN

同一账号在移动端可使用 Dispatch，但 macOS 桌面版直接禁用该功能。跨端能力不一致，疑似平台权限控制 bug。

### 9. 模型被静默切换至 Opus，导致 $1,050 超额计费
[Issue #60093](https://github.com/anthropics/claude-code/issues/60093) | 评论 10 | 👍 0 | 状态：CLOSED

用户报告 2026-05-05 至 05-07 期间模型在无通知的情况下从 Sonnet 切换至 Opus，带来 $1,050 额外费用。虽已关闭，但此类**计费透明度问题**仍是社区核心焦虑点，与 #79337 相互印证。

### 10. Opus 5 上下文窗口被错误报告为 200K（实际 1M）
[Issue #81693](https://github.com/anthropics/claude-code/issues/81693) | 评论 4 | 👍 0 | 状态：OPEN

Claude Code v2.1.216 将 claude-opus-5 的上下文窗口上报为 200K tokens，导致 statusline 进度条提前饱和、`/compact` 行为异常。属于典型的**元数据错误**，影响用户对项目真实状态的判断。


## 重要 PR 进展

过去 24 小时仅有 1 条 PR 状态更新：

### fix(hookify): match Write and prompt rules
[PR #77492](https://github.com/anthropics/claude-code/pull/77492) | 创建：2026-07-14 | 更新：2026-08-08 | 状态：OPEN

**核心修复内容：**
- 让文件规则能检查传入 `Write` 工具的新文本内容（此前规则只能读取已有文件内容）。
- 将简单的 prompt 规则映射到当前 `UserPromptSubmit` payload，同时保留 legacy 配置字段。
- 为 `Write`、`Edit` 和 prompt 规则新增回归测试覆盖。

**影响：** 修复了 hook 系统中规则匹配不完整的问题，特别是针对文件写入场景的权限规则判断，预计将改善部分「规则看似配置了却不生效」的怪癖。这也是 #83362（ask 规则被静默忽略）可能的潜在修复之一。


## 功能需求趋势

从近期活跃 Issue 中，可提炼出以下社区高度关注的功能方向：

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **消息队列模式** | [#50246](https://github.com/anthropics/claude-code/issues/50246) | 184 👍 |
| **远程控制 / 桌面端协作** | [#29006](https://github.com/anthropics/claude-code/issues/29006)、[#80058](https://github.com/anthropics/claude-code/issues/80058) | 119 👍 + 多 bug 报告 |
| **移动端体验补齐** | [#85131](https://github.com/anthropics/claude-code/issues/85131)（草稿持久化）、[#79410](https://github.com/anthropics/claude-code/issues/79410) | 新增反馈 |
| **模型与上下文数据准确性** | [#81693](https://github.com/anthropics/claude-code/issues/81693) | 上下文窗口元数据错误 |
| **安全策略精细化管理** | [#84352](https://github.com/anthropics/claude-code/issues/84352)、[#83436](https://github.com/anthropics/claude-code/issues/83436) | 误报 + 状态不同步 |

**观察**：社区对「非侵入式交互」（消息队列）和「跨端远程控制」的诉求强烈且持续未得到满足；安全/合规策略的误报问题开始影响专业科学计算等长尾场景。


## 开发者关注点

综合过去 24 小时的高热度反馈，当前开发者最关心的痛点如下：

- **计费透明性**：Fable 5「限制却不给切换路径」（#79337）、静默切模型导致超额费用（#60093）——用户对**模型被切换和配额耗尽时缺乏明确异常反馈**的容忍度正在降低。
- **Windows 平台稳定性**：GPU 进程崩溃（#81698）、内核 BSOD（#80912）、插件安装文件占用冲突（#67595）。Windows 用户整体体验明显落后于 macOS/Linux。
- **终端残留污染**：崩溃后鼠标跟踪模式未关闭（#84029、#68602），导致终端永久处于异常状态，需手动重置。开发者在非交互式或崩溃场景的清理逻辑上期待改进。
- **MCP 生态连接阻力**：VS Code 集成完全不加载 MCP servers（#19054）、远程 MCP OAuth 连接器工具获取失败（#74210）。MCP 作为核心扩展机制，在 IDE 集成和远程认证两条路径上都存在断层。
- **权限规则行为不一致**：#83362 指出 `ask` 规则被静默忽略、`deny` 规则正常生效——这会让用户对权限体系失去信任。
- **Dispatch 跨端可靠性**：永久“Can't reach your desktop”（#67303）、macOS 被禁用（#80058）、Windows 渲染即销毁（#84035），说明该功能尚未达到可用标准。

---

**总结**：v2.1.226 虽是常规补丁版，但社区注意力正集中在**模型计费公平性**与**跨端协作稳定性**两件大事上。Fable 5 的配额问题背后是模型路由和账号系统之间的弱一致性；而 Dispatch/远程控制类诉求的爆发，预示着 Agent 能力正在从单机向「端-端协同」演进——这可能是未来几个版本最值得关注的产品方向。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 2026-08-09

## 今日速览

Windows 平台 Computer Use 功能成为社区焦点，今日集中出现多个稳定性 Bug 报告（陈旧执行上下文、审批不弹窗、窗口发现失败等）。代码侧，多个钩子（Hooks）系统优化 PR 由 copyberry[bot] 合并，Codex 自动化与审批基础设施正在快速迭代。TUI 增强请求 #21653 以 59 赞成为今日最热 Issue。

## 版本发布

- **rust-v0.148.0-alpha.5**：发布 `0.148.0-alpha.5` 版本（无详细说明）。注意：今日 Issue #37635 中，用户反馈该版本在 Windows 终端上恢复会话时存在滚动刷新异常，建议关注。

## 社区热点 Issues

1. **#21653 TUI 支持多行状态栏**
   👍 59 | 评论 13
   状态栏配置较长时被截断且无换行能力。59 个赞为今日最高，反映 TUI 用户对可定制化界面有强烈需求。
   https://github.com/openai/codex/issues/21653

2. **#27284 Codex App SSH 远程项目显示 "No Chats"**
   评论 12
   远程线程已存在于状态 DB，但界面显示为空。影响远程开发场景的会话连续性。
   https://github.com/openai/codex/issues/27284

3. **#37013 Windows Computer Use 复用陈旧 `node_repl` 上下文**
   评论 11
   首次 JS 执行完成后，后续 `node_repl/js` 调用复用了旧传输层，导致 Computer Use 核心功能异常。
   https://github.com/openai/codex/issues/37013

4. **#37458 Codex 扩展无法加载资源**
   评论 11
   Windows 上扩展启动直接失败，报 "The extension couldn't load its resources"，属于阻断性问题。
   https://github.com/openai/codex/issues/37458

5. **#37649 CLI/macOS 频繁重连循环（今日新提交）**
   评论 5
   即简单提示也报 "stream disconnected before completion"，影响 gpt-5.6-sol/luna 模型的常规使用。
   https://github.com/openai/codex/issues/37649

6. **#33074 Windows Codex 应用导致系统鼠标卡顿**
   👍 9 | 评论 6
   启动和任务切换时出现明显的系统级鼠标停滞，CPU/磁盘未达饱和但可影响正常操作。
   https://github.com/openai/codex/issues/33074

7. **#37383 Computer Use 在 Windows 上窗口发现失败**
   👍 4 | 评论 8
   app/window 枚举报 `0x80070003`，导致无法发现目标窗口，属于 Computer Use 基础链路故障。
   https://github.com/openai/codex/issues/37383

8. **#33479 `:workspace_roots` 相对写入规则递归膨胀**
   👍 3 | 评论 5
   相对写入规则在多次会话中递归扩展，最终进程启动因 E2BIG 失败，配置系统缺少边界检测。
   https://github.com/openai/codex/issues/33479

9. **#37563 子代理状态在重启后被错误重新水合为 Working**
   👍 2 | 评论 4
   已终止（completed/aborted）的子代理在应用重启后被标记为 Working，可能导致资源误判和挂起任务误报。
   https://github.com/openai/codex/issues/37563

10. **#15756 符号链接 SKILL.md 不被技能加载器发现（已关闭）**
    评论 7
    仅符号链接目录被支持，符号链接文件会被忽略。该问题已关闭，建议开发者查看关闭原因和相关改动。
    https://github.com/openai/codex/issues/15756

## 重要 PR 进展

1. **#37533 支持异步命令钩子**
   命令处理器可按 async 模式后台运行，并设置每会话并发上限；SessionEnd 保持同步语义不变。
   https://github.com/openai/codex/pull/37533

2. **#37530 实现 gRPC code-mode 主机服务**
   导出 `GrpcCodeModeHost`，支持租约会话、执行与等待生命周期、过滤嵌套工具订阅及通知。
   https://github.com/openai/codex/pull/37530

3. **#37610 添加工作负载身份令牌交换支持**
   新增 `codex-workload-identity` crate，将文件 JWT 交换为短期 ChatGPT 凭据，并支持缓存、刷新及并发合并。
   https://github.com/openai/codex/pull/37610

4. **#37607 防止启动上下文泄漏到子进程**
   将 `OPENAI_FEDERATION_RULE_ID`、`OPENAI_IDENTITY_TOKEN_FILE` 等环境变量标记为非继承，阻止模型可触达的子进程获取敏感上下文。
   https://github.com/openai/codex/pull/37607

5. **#37641 使用步骤上下文处理命令审批前缀规则**
   审批策略现在从活动 step context 关联的 turn 中读取 `allow_prefix_rules`，统一 exec 审批请求。
   https://github.com/openai/codex/pull/37641

6. **#37527 终止超时钩子的整个进程树**
   Unix 下使用进程组、Windows 下使用 Job Object，确保钩子超时后，孙进程也被一并终止。
   https://github.com/openai/codex/pull/37527

7. **#37622 编辑提示时包含缓冲中的回合**
   修复了新回合仅存在于 replay buffer、提示编辑却查不到对应用户消息的问题。
   https://github.com/openai/codex/pull/37622

8. **#37618 Guardian 审批改用步骤环境**
   延迟环境可能在回合开始后才就绪，Guardian 审批现在使用当前步骤所选环境，而非陈旧回合快照。
   https://github.com/openai/codex/pull/37618

9. **#37538 钩子列表暴露执行模式**
   `hooks/list` 新增 `executionMode` 字段（`sync` 为默认缺省值），便于客户端区分同步/异步钩子。
   https://github.com/openai/codex/pull/37538

10. **#37644 通用化钩子处理器执行**
    按 handler kind 路由执行逻辑，并拒绝如 `null` 等无法用于 TOML 信任哈希的 MCP 工具输入。
    https://github.com/openai/codex/pull/37644

## 功能需求趋势

- **TUI/CLI 交互精细化**：#21653 多行状态栏、#17103 文本粘贴与图片粘贴对称、#35292 模型参数保持等，表明 CLI 用户界面的可配置性需求在上升。
- **Windows 平台支持补全**：计算机使用、扩展资源加载、窗口枚举等多个 Windows 专属 Bug 集中爆发，社区对 Windows 作为一等公民的期待明显。
- **远程与多会话一致性**：SSH 远程"无聊天"、本地项目注册丢失、双活动回合等，反映多端会话同步仍不完善。
- **自动化钩子体系**：异步钩子、Guardian 审批、钩子进程树管理等 PR 与 #33371 无效心跳问题相互呼应，社区在推进可编程审批与自动化能力。
- **新云集成方向**：#37633 建议让 ChatGPT Sites 仓库可作为 Codex 云工作空间，预示 Codex 与 ChatGPT 产品线进一步融合。

## 开发者关注点

- **Windows Computer Use 可靠性**：今日高频词。审批不弹、截屏失败、窗口枚举失败、陈旧上下文复用，基础功链需要系统性修复。
- **连接稳定性**：#37649 在 macOS 上频繁重连，简单提示也受影响，直接波及日常工作效率。
- **状态同步与信任**：远程项目"无聊天"、子代理"复活"、归档不可撤销，状态误显示会侵蚀用户信任。
- **钩子进程生命周期**：超时后遗留子进程、异步执行限制、审批环境陈旧，是自动化落地时的关键可靠性问题。
- **配置系统边界**：递归膨胀（E2BIG）、符号链接不识别等，提示配置解析需要更强的正则化和安全校验。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-09

## 今日速览

- 发布 v0.56.0 nightly 版本，社区注意力仍集中在 Agent 基础可靠性上：多个 P1 级 Bug 围绕 subagent 误报成功、generalist 挂起和 shell 执行卡死持续发酵。
- 新 PR #28738 尝试允许 Agent 互相调用，若落地将显著提升 Agent 的自主编排能力，是今日最具关注度的功能向变更。
- Auto Memory 子系统的稳定性与隐私问题（无限重试、先发送后脱敏）开始形成集中反馈，成为新的讨论焦点。

## 版本发布

**v0.56.0-nightly.20260809.gcf22ac7e8**：今日为自动化 nightly 版本，无独立功能更新。完整变更可对比昨日构建：[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8)。

---

## 社区热点 Issues

### 1. Subagent 达到 MAX_TURNS 却被误报为 GOAL 成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 评论 12 | 👍 2

`codebase_investigator` 在尚未执行任何分析时即因轮次上限终止，却被标记为 `status: "success"` 和 `Termination Reason: "GOAL"`。这是典型的静默失败，严重误导自动化流水线与用户对任务成功与否的判断，是当前 Issue 中评论数最高的一条。

### 2. Generalist agent 无限挂起
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 评论 8 | 👍 8

一旦 defer 到 generalist agent，CLI 便永远挂起（有用户反馈等待 1 小时无果）。让模型不要使用 subagent 可规避。简单操作（如创建文件夹）也可能触发，这对日常使用者打击面极大。

### 3. Shell 命令执行完成后卡在 “Waiting input”
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | P1 | 评论 4 | 👍 3

简单的 CLI 命令执行完成后，CLI 仍显示命令活动并卡在 “Awaiting user input”。核心执行链路受阻，直接影响自动化与交互式开发。

### 4. get-shit-done 输出钩子在收尾阶段崩溃
[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 | 评论 3

长任务执行已接近完成（打印用户摘要）时触发崩溃，导致整次会话失败。对依赖长时运行场景的用户影响明显。

### 5. Browser subagent 在 Wayland 下失败
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 评论 4 | 👍 1

浏览器 subagent 在 Wayland 会话中直接失败。Linux 桌面用户无法使用浏览器自动化能力，环境兼容性问题亟待解决。

### 6. Bugreport 不包含 subagent 上下文
[#21763](https://github.com/google-gemini/gemini-cli/issues/21763) | P1 | 评论 2

`/bug` 报告只包含主会话内容，subagent 内部状态完全缺失。这导致社区和官方难以定位复杂的 agent 链路问题，也降低了用户反馈的有效性。

### 7. Auto Memory 对低信号会话无限重试
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | P2 | 评论 5

后台提取器若判定会话为“低信号”而不读取，则该会话永远不会被标记为已处理，从而反复进入待处理队列，造成无限重试和资源浪费。

### 8. Auto Memory 需要确定性脱敏并减少日志输出
[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | P2 | 评论 4

本地 transcript 内容在上送模型之后才由模型执行脱敏，存在先泄露后处理的风险；此外服务日志可能记录已有 skills 信息，隐私边界需要收紧。

### 9. Subagents 在配置禁用后仍然运行
[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | P2 | 评论 3

自 v0.33.0 起，即使用户在配置中禁用了 agents 模式，subagents 仍会被触发执行。有用户声明只期望 MCP 功能却被强制引入 agent 行为，权限模型受到质疑。

### 10. 工具数量超过 128 时报 400 错误
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | 评论 3

当可用工具数量超过 128 时请求报错。随着 MCP 服务器增多，工具数量已逼近实际瓶颈，社区期待动态工具裁剪而非直接失败。

---

## 重要 PR 进展

### 1. 允许 Agent 调用 Agent
[#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | Open | size/l | help wanted

通过 `tools:` frontmatter 让 subagent 可委托其他 subagent 或递归调用自身，修复 #22092。这是 Agent 协作能力的基石，可能改变复杂任务拆解方式，值得长期关注。

### 2. 修复 formatTruncatedToolOutput 非正值导致的输出膨胀
[#28735](https://github.com/google-gemini/gemini-cli/pull/28735) | Open | size/xs | P1

为 `maxChars <= 0` 增加保护，避免截断逻辑反而导致输出内容膨胀（修复 #28620）。小改动解决核心工具链的防御性问题。

### 3. 修复 OAuth 回调超时未清除
[#28736](https://github.com/google-gemini/gemini-cli/pull/28736) | Open | size/s | area/security

在认证流程完成后及时清理回调定时器并优雅关闭服务器，防止悬挂超时导致进程残留。安全性小幅加固。

### 4. 处理 EACCES 防止 macOS 沙箱崩溃
[#28734](https://github.com/google-gemini/gemini-cli/pull/28734) | Open | size/s | P1

修复 macOS Seatbelt 沙箱启用且当前目录位于 Git 仓库内时，CLI 启动即崩溃的问题。属于影响 macOS 用户的基础稳定性修复。

### 5. 改进 Vertex AI 401 错误提示
[#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | Open | size/s | area/security

当用户使用标准 Gemini API key 却选择 Vertex AI 认证方式时，给出更明确的配置引导，而不是笼统的 401 失败。提升配置阶段的开发者体验。

### 6. Preview 模型 404 时自动回退到稳定模型
[#28608](https://github.com/google-gemini/gemini-cli/pull/28608) | Open | size/m | P2

无 preview 权限的 API key 请求 `gemini-3.1-pro-preview` 会收到 404，现在将按策略回退到稳定模型，避免初始化失败阻塞整体使用（修复 #28600）。

### 7. 修复 VSCode IDE Companion 资源泄漏
[#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | Closed | size/s

修复了 `context.subscriptions.push()` 中括号错误导致的 Disposable 未注册问题，解决 `gemini.diff.accept` 命令与 `onDidChangeWorkspaceFolders` 的泄漏（修复 #27790）。

### 8. OpenAI 兼容认证 PR 被关闭
[#28737](https://github.com/google-gemini/gemini-cli/pull/28737) | Closed | size/xl

社区对 OpenAI 兼容端点有明确需求，但官方关闭了这一实现。该决定值得关注，可能暗示 Gemini CLI 将坚持原生生态，或未来以其他方式支持。

### 9. 更新 .gitignore 忽略 .env/.ai 文件
[#28619](https://github.com/google-gemini/gemini-cli/pull/28619) | Open | size/m | P1

避免敏感 `.env` 文件与临时 `.ai` 文件被误提交，同时补充单元测试。偏向工程规范的维护型改动。

### 10. Nightly 版本自动 bump
[#28739](https://github.com/google-gemini/gemini-cli/pull/28739) | Open

对应今日 v0.56.0-nightly 发布的例行自动版本提升 PR。

---

## 功能需求趋势

1. **Agent 协作与编排**：#28738（允许 agents 互相调用）、#22598（subagent 轨迹可通过 `/chat share` 分享）表明社区不再满足于单 agent 执行，而是希望引入自主拆解、互相委托的协作体系。
2. **记忆系统稳定与隐私**：多个 Auto Memory issue（#26522、#26525、#26516）集中要求解决后台重试风暴、确定性脱敏和日志收敛问题。记忆功能已被真实使用，但工程化程度尚未跟上。
3. **浏览器 Agent 的韧性**：#22232（锁定 profile 自动接管）、#22267（忽略 settings.json 覆盖）显示用户对浏览器自动化的会话管理和配置一致性有更高要求。
4. **操作系统级沙箱安全**：#19873（零依赖 OS 沙箱与执行后意图路由）与 #28734（EACCES 崩溃修复）呼应了“模型擅长 bash 但需要隔离”的共识。
5. **AST 感知的代码库理解**：#22745/#22746 系列 EPIC 探索用 AST 工具精简文件读取、代码搜索和 mapping，以应对大型仓库下的 token 开销问题。
6. **大规模工具管理**：#24246 的实际报错让“工具数量上限”从理论走向现实，社区期待动态工具裁剪或路由方案。

---

## 开发者关注点

- **可靠性仍是头号痛点**：Agent 挂起（#21409）、shell 卡死（#25166）、状态误报（#22323）等多个 P1 长期未关闭，且都直接影响日常使用。
- **可观测性不足**：bugreport 缺失 subagent 上下文（#21763）、subagent 轨迹不可见（#22598）让问题定位非常困难。
- **权限模型信任度低**：Subagent 在配置禁用后仍运行（#22093），破坏用户对 CLI 控制力的信任。
- **环境兼容性压力**：Wayland（#21983）与 macOS 沙箱（#28734）等系统级问题反复出现，影响 Linux/macOS 用户的采纳体验。
- **隐私敏感度上升**：Auto Memory 的“先发送后脱敏”模式（#26525）引发担忧，开发者要求安全前置、默认收敛日志。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-09

## 今日速览

过去 24 小时无新版本发布，也没有新的 PR 更新；但 Issue 侧相对活跃，共 23 条更新。社区反馈集中在长会话性能退化、会话恢复后状态丢失、Windows 兼容性，以及 MCP/企业认证失败等问题；其中多个 issue 已被关闭，可能意味着修复或官方已介入处理。

## 版本发布

过去 24 小时无新 Release。当前社区反馈涉及的版本包括 `1.0.76`、`1.0.77`、`1.0.78` 等。

## 社区热点 Issues

以下挑选 10 个最值得关注的 Issue：

- [#4299 长时间 Copilot 会话后输入延迟严重](https://github.com/github/copilot-cli/issues/4299) — [已关闭]  
  会话运行时间越长，尤其是后台 agents 运行后，打字延迟高到几乎无法使用。涉及 `sessions` 和 `input-keyboard` 两个领域。社区 2 条评论，说明有一定用户共鸣。

- [#4285 Windows 下 1.0.76-1 在特定日志级别下静默退出](https://github.com/github/copilot-cli/issues/4285) — [已关闭]  
  当 `log level` 为 `none/error/warning/info/debug` 时，CLI 启动即退出 code 1，且无任何输出。这是 Windows 平台上的严重回归，获得 2 个 👍。

- [#4256 为 Anthropic 请求增加 cache_control breakpoints](https://github.com/github/copilot-cli/issues/4256) — [已关闭]  
  用户希望复用昂贵的上下文，减少 Anthropic 端重复处理。该 feature request 是近期社区关注度较高的方向，3 个 👍 为当日最高之一。

- [#4329 恢复会话时 Autopilot 看似开启但实际未生效](https://github.com/github/copilot-cli/issues/4329) — [已关闭]  
  状态栏显示 autopilot 已启用，但需要审批的操作仍会失败。属于会话恢复状态不一致问题，影响实际自动化工作流。

- [#4410 /agent 弹窗把 .github\agents\AGENTS.md 误认为自定义 agent](https://github.com/github/copilot-cli/issues/4410) — [打开]  
  仓库指导文件 `AGENTS.md` 被错误加载为自定义 agent，并报 frontmatter 格式错误。这是文档与实现不一致导致的误判，容易让新用户困惑。

- [#4397 恢复 Copilot CLI 会话时被切回默认模型](https://github.com/github/copilot-cli/issues/4397) — [打开]  
  用户用 `--model` 指定模型启动会话后，resume 时自动回到默认模型。涉及 `sessions` 与 `models`，是会话元数据保留不足的典型问题。

- [#4398 permissions.config 中的 allowed_directories 从未加载](https://github.com/github/copilot-cli/issues/4398) — [打开]  
  用户配置的 `allowed_directories` 在 `/list-dirs` 中不可见，权限配置疑似被完全忽略。涉及安全与权限，影响较大。

- [#4405 Copilot Free 用户升级后在 Codespaces 中提示 No model available](https://github.com/github/copilot-cli/issues/4405) — [打开]  
  账号为 Copilot Free 时，在 Codespaces 中每次 prompt 都失败，且与文档描述不符。涉及认证、模型选择以及 Codespaces 环境，阻碍免费用户上手。

- [#4408 github-mcp-server 在 Copilot Enterprise 下认证永远失败](https://github.com/github/copilot-cli/issues/4408) — [打开]  
  企业路由账号使用内置 MCP server 时，OAuth 流程因发现到跨域资源标识符而失败。属于企业级 MCP 集成阻断性问题。

- [#4401 Windows 下 skill 工具找不到 ~/.agents/skills 中的技能](https://github.com/github/copilot-cli/issues/4401) — [打开]  
  技能目录和 `SKILL.md` 均存在，但 `skill` 工具无法调用。用户怀疑与 #2230 的修复不完整有关，是 Windows 平台上的功能回归。

## 重要 PR 进展

过去 24 小时更新或合并的 PR 为 0 条，因此暂无 PR 进展可展示。建议关注 próximamente 的修复型 PR，尤其是针对 Windows 日志退出和会话恢复问题的改动。

## 功能需求趋势

从当前 Issue 中可以提炼出以下社区关注方向：

- **会话状态一致性**：resume 后应保留 autopilot 状态、当前模型、权限目录等，而不是回退到默认值。
- **模型与上下文控制**：用户希望有更细粒度的模型/上下文控制，例如 Anthropic cache_control、ACP 的 `contextTier` 配置、Auto-mode 的最小/最大模型强度设置。
- **Windows 兼容性**：多个 Windows 专属 bug，包括日志级别导致静默退出、PowerShell 下 hook 命令解析失败、skill 工具无法发现技能目录。
- **配置可靠生效**：`allowed_directories`、`banner: "once"`、`cli_remote_control_enabled` 等配置项未按预期工作，用户要求配置可被明确感知。
- **企业认证与 MCP 集成**：企业账号下 MCP server OAuth 失败、远程控制功能无提示地不可用，影响团队级部署。
- **本地化支持**：有用户提出为桌面端和 CLI 新增简体中文 UI，说明社区对中文本地化有明确需求。
- **安装与版本管理**：npm 安装的 `copilot` 本质是 loader，同一路径会静默切换版本，用户希望有明确的版本锁定机制。

## 开发者关注点

综合近两天 Issue，开发者的核心痛点包括：

- **长会话性能衰减严重**：后台 agents 运行后输入延迟不可接受。
- **会话恢复不完全**：模型、autopilot、权限目录等状态没有完整持久化。
- **Windows 平台回归较多**：从日志级别到 hook 执行、skill 加载，Windows 用户频繁遇到专属问题。
- **配置被静默忽略**：多个权限/显示相关配置不会生效，且没有错误提示。
- **MCP/Enterprise 认证链路脆弱**：企业路由、OAuth 元数据发现等环节容易失败。
- **免费版与 Codespaces 组合容易出现 "No model available"**：环境策略和账号 entitlement 的关联不够透明。
- **npm 全局安装路径不固定版本**：同一命令在不同时间运行会加载不同 CLI 版本，给问题排查和复现带来困扰。

> 数据来源：GitHub `github/copilot-cli` Issues/PRs，更新截至 2026-08-09。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-09）

## 今日速览
过去 24 小时社区主要围绕两个议题：一是 #1283「记忆系统」功能请求持续活跃（25 条评论），反映出开发者对跨会话上下文保持的迫切需求；二是新报告的 #2597 严重生成失控 Bug（单次 LLM 步骤输出 88k tokens 乱码），暴露了生成稳定性与成本控制方面的潜在风险。期间无新版本发布，PR 动态为空。

## 版本发布
无

## 社区热点 Issues
> 说明：过去 24 小时内更新的 Issue 共 2 条，以下全部纳入。

### 1. #1283 [功能请求] 记忆系统 —— 跨会话持久上下文  
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/1283  
- 作者: @CatKang | 创建: 2026-02-27 | 更新: 2026-08-08 | 评论: 25 | 👍: 0  
- **为什么重要**：这是社区长期关注的高热度功能请求。希望实现自动记忆（AI 托管笔记）+ 手动记忆（用户定义指令）双模式，让 CLI 在跨会话场景下记住项目模式、用户偏好等上下文。  
- **社区反应**：25 条评论表明讨论持续升温，大量用户期望减少重复说明，提升长时间工作流的连续性。

### 2. #2597 [Bug] 失控乱码生成 —— 单次 LLM 步骤输出 88k tokens 垃圾内容  
- 链接: https://github.com/MoonshotAI/kimi-cli/issues/2597  
- 作者: @kdp123 | 创建/更新: 2026-08-08 | 评论: 0 | 👍: 0  
- **为什么重要**：该 Bug 显示正常交互中模型运行了约 **53 分钟**，输出 **88,114 tokens** 的重复、混乱内容（多语言碎片、损坏的 Markdown、无限重复等）。这属于严重的生成稳定性问题，可能引发 token 成本失控及下游数据污染。  
- **社区反应**：刚提交暂未获得评论，但严重性高，急需官方定位「步骤 e6f3748b」的触发条件并修复。

## 重要 PR 进展
过去 24 小时无 PR 创建或更新。

## 功能需求趋势
基于当前活跃 Issues，社区关注方向集中在：

- **记忆与持久化上下文**：从 #1283 可见，用户希望 CLI 能跨会话保存项目模式、用户偏好和关键上下文，减少重复初始化成本。
- **生成稳定性与护栏机制**：#2597 暴露出对无限生成、输出长度上限和异常中断机制的潜在需求，亦隐含对 token 成本控制的要求。

## 开发者关注点
- **会话连续性**：长期使用 CLI 的开发者对每次重新构建上下文感到繁琐，期望更智能的记忆能力。
- **生成可靠性**：期待更强的输出护栏，如长度上限、重复检测、自动停止等机制，避免类似 88k tokens 乱码的事件发生。
- **可观测性**：希望官方提供日志或审计能力，便于回溯「e6f3748b」这类失控步骤的根因。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-09

## 今日速览

过去 24 小时，OpenCode 社区的动态集中在 **OpenCode Go 网关的模型兼容性问题**（多个 Issue 报告 `deepseek-v4-flash` 因前导空格报 HTTP 400）以及 **TUI 与 Core 的密集修复**（kitlangton 贡献了 10+ 个 PR，覆盖 Mermaid 渲染、插件系统、文件锁等）。此外，Issue #33356 揭示的数据库无限膨胀问题，正通过 PR #40861 着手解决。

---

## 社区热点 Issues

### 1. [FEATURE] 原生会话目标 `/goal` — 社区最强诉求
**Issue #27167** | 👍 128 | 评论 69
> 社区对原生持久化会话目标/生命周期的呼声极高。当前仅有自定义 slash command，缺少内置的 goal 管理。该 Issue 已获得 128 个 👍，是近期最受关注的功能请求。
[查看详情](https://github.com/anomalyco/opencode/issues/27167)

### 2. `event` 表无限膨胀：opencode.db 突破 13GB
**Issue #33356** | 👍 4 | 评论 15
> SQLite 事件表永不清理，`message.updated.1` 快照堆积导致 DB 膨胀至 13GB+，直接撑爆磁盘。这是目前最严重的稳定性/性能问题之一，与长会话用户强相关。
[查看详情](https://github.com/anomalyco/opencode/issues/33356)

### 3. CLI 中无法复制粘贴
**Issue #13984** | 评论 55 | 状态: OPEN
> 尽管界面提示 "copied to clipboard"，但 `Ctrl+V` 无内容。该问题持续数月、评论数极高，严重干扰日常交互流。
[查看详情](https://github.com/anomalyco/opencode/issues/13984)

### 4. OpenCode Go 中 `deepseek-v4-flash` 模型名前导空格（HTTP 400）
**Issue #41300 + 关联 #41306/#41314/#41322** | 多报告
> 多个用户在 8 月 8-9 日集中报告：请求 `model: "deepseek-v4-flash"` 时，上游网关注入了前导空格，导致 HTTP 400。已有 4 个独立 Issue，且 #41306 标注“已验证仍存在”，是当前最热门的线上故障。
[#41300](https://github.com/anomalyco/opencode/issues/41300) | [#41306](https://github.com/anomalyco/opencode/issues/41306) | [#41314](https://github.com/anomalyco/opencode/issues/41314) | [#41322](https://github.com/anomalyco/opencode/issues/41322)

### 5. 启动速度明显变慢（特定终端下）
**Issue #14965** | 评论 19
> 在 Ghostty 中启动极慢，而 Terminal/Alacritty/Kitty 正常。这指向终端兼容性而非单纯性能问题，影响日常使用效率。
[查看详情](https://github.com/anomalyco/opencode/issues/14965)

### 6. 同项目多实例共享同一 Session
**Issue #31307** | 👍 3 | 评论 4
> 同目录下开两个 TUI 实例会共享 SQLite 中的会话，导致状态相互干扰。对于习惯多标签工作的用户是重要的正确性问题。
[查看详情](https://github.com/anomalyco/opencode/issues/31307)

### 7. 网络抖动直接终止会话，不自动重试
**Issue #30611** | 👍 1 | 评论 6
> 仅 `ECONNRESET` 会被重试，其他瞬时网络错误（如 socket hang up）直接判死。移动办公/弱网场景下非常影响体验。
[查看详情](https://github.com/anomalyco/opencode/issues/30611)

### 8. MCP Server 启动时产生 2-4 个重复进程
**Issue #31554** | 评论 2
> Linux 下每个 MCP server 会 spawn 多份重复进程且不清理，最终导致 TasksMax 耗尽和 `EAGAIN`。对于配置 10+ MCP server 的重度用户影响显著。
[查看详情](https://github.com/anomalyco/opencode/issues/31554)

### 9. Claude 模型开启 thinking 后 step-cap 消息触发 400
**Issue #32548** | 评论 5
> 达到 step cap 后，`MAXIMUM STEPS REACHED` 被作为 assistant-role 消息附加，Anthropic API 将其视为 prefill 并拒绝。这是 Agent 长跑场景下的阻塞性 bug。
[查看详情](https://github.com/anomalyco/opencode/issues/32548)

### 10. 休眠唤醒后 Bun 进程 CPU 占用异常
**Issue #41337** | 评论 2 | 版本 v1.18.15
> Windows 下电脑从休眠恢复后，bun 进程大量占用 CPU。疑似与底层 Bun 运行时相关（已关联 oven-sh/bun#37224），影响资源受限环境。
[查看详情](https://github.com/anomalyco/opencode/issues/41337)

---

## 重要 PR 进展

### 1. 实验性渲染性能优化：初始渲染内存 -75.5%
**PR #40427** | 新增（由 Hona 提交）
> 基于不可变数据库快照 + 固定 24 小时语料窗口，初始渲染器内存从 7.45MB 降至 1.82MB。对长时间运行的实例有显著提升。
[查看详情](https://github.com/anomalyco/opencode/pull/40427)

### 2. 停止在 session summary 中存储完整 patch 文本
**PR #40861** | 修复 #32005
> `SessionSummary.summarize()` 此前保存完整 `diffFull()` 结果，是 DB 膨胀的主要推手之一。该 PR 顺势收紧摘要存储，属于 #33356 告警后的治理补位。
[查看详情](https://github.com/anomalyco/opencode/pull/40861)

### 3. 同步 v2 终端 Mermaid 渲染器修复
**PR #41347** | 由 kitlangton 提交
> 修复分支/反馈状态图损坏问题，支持真实模型输出中的 Mermaid 连接器、解码 HTML 实体，并引入新的空间路由算法。
[查看详情](https://github.com/anomalyco/opencode/pull/41347)

### 4. `/undo` 撤回到最新待处理 prompt
**PR #41344** | 修复 #39736
> 此前 `/undo` 只回退 session 历史，现在会先将排队/steering 的最新 prompt 移回 composer 再撤销，避免误删用户输入。
[查看详情](https://github.com/anomalyco/opencode/pull/41344)

### 5. 插件槽位重构为带结构的 region 树
**PR #41189** | 由 kitlangton 提交
> 插件插槽从“位置编码名称”（如 `prompt.footer.end`）升级为结构化区域树，插件可在宿主组件树中精确声明相对位置，并提供类型安全的上下文。
[查看详情](https://github.com/anomalyco/opencode/pull/41189)

### 6. 文件变更先授权再锁
**PR #41202** | 由 kitlangton 提交
> 针对 `write`/`edit`/`patch` 改为：先解析路径并请求权限（不持锁），待批准后再获取全局路径锁执行。避免权限请求与锁竞争的死锁/顺序问题。
[查看详情](https://github.com/anomalyco/opencode/pull/41202)

### 7. 集成 prompt 改为统一表单驱动
**PR #40997**
> 将 GitHub Copilot、Azure、Cloudflare 等各集成的 prompt schema 统一为共享 `Form.Fields`/`Form.Answer`，并把 key 验证迁移到 Core 层，降低集成间维护成本。
[查看详情](https://github.com/anomalyco/opencode/pull/40997)

### 8. 添加 fish shell 补全支持
**PR #41336** | 修复 #41232
> 此前 `opencode completion fish` 错误输出 bash/zsh 脚本。该 PR 新增独立 completion 模板，为 fish 用户提供正确的语法补全。
[查看详情](https://github.com/anomalyco/opencode/pull/41336)

### 9. 会话页签显示非默认 VCS 分支
**PR #41342** | 由 kitlangton 提交
> 在垂直会话页签的项目详情行中显示非默认分支，格式为 `project:branch`；默认分支保持不变，避免日常噪音。
[查看详情](https://github.com/anomalyco/opencode/pull/41342)

### 10. 新增 BusyWave 加载动画
**PR #41350** | 由 Victozee26 提交
> 用波浪式动画替换 TUI 中闪烁的 "Thinking" 标签，并在开启“显示思考”时保持持续性，提升长时间等待的视觉反馈。
[查看详情](https://github.com/anomalyco/opencode/pull/41350)

---

## 功能需求趋势

从近 24 小时活跃的 Issues 中，社区最关注以下方向：

- **原生会话管理**：`/goal` 持久化目标、会话分支可视化、多实例会话隔离（#27167、#31307、#41342）
- **MCP 体验**：TUI 内直接增删/配置 MCP server（#38993），以及修复重复进程、connect/disconnect 稳定性（#31554）
- **模型与网关兼容性**：OpenCode Go 对 deepseek-v4-flash 等新模型的支持质量成为焦点（#41300 系列）
- **数据存储健康**：event 表膨胀、session summary 瘦身、DB 自动清理机制（#33356、#40861）
- **平台化补齐**：桌面版对存储（UNC）、Shell（PowerShell 7）、终端（Kitty 超链接）的适配改进

## 开发者关注点

- **OpenCode Go 网关的回归**：4 个 Issue 指向同一前导空格 bug，且 #41306 确认修复无效并完成二次验证，说明 QA 流程存在疏漏。
- **db 无限增长**：多用户反映长会话后磁盘占用达 GB 量级；修复 PR 已出现，但社区仍在等待正式版本。
- **基础交互卡点**：无法复制粘贴（持续多月）、退出乱码等问题被反复提及，被视为影响“清爽体验”的关键短板。
- **弱网可靠性**：网络错误不重试、socket 挂断直接终止会话，频繁打断 Agent 任务。
- **终端兼容性**：Ghostty 启动慢、Kitty 超链接不可点、WSL 下乱码，说明跨终端渲染仍有不少适配工作。
- **Windows 特定问题**：UNC 路径会话为空（#41349）、休眠后 CPU 占用高（#41337）相继被报告，桌面端稳定性仍是薄弱环节。

---

*数据统计截至 2026-08-09，来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-09

## 今日速览

openai-codex 连接可靠性问题（#4945）以 76 条评论持续霸榜，成为社区最关注的痛点；auto-compaction 机制在长 agent 循环中失效的问题（#6879/#7821）同样引发广泛讨论。TUI 交互细节修复与新模型提供商支持（DeepSeek、Meta、LLM Gateway）构成了今日 PR 更新的主线。

## 社区热点 Issues

### 1. openai-codex 连接可靠性问题（#4945）
**评论 76 | 👍 31 | 状态：OPEN [inprogress]**
`openai-codex` / `gpt-5.5` 在交互式 TUI 中频繁卡在 `Working...` 状态，无流式文本、无工具调用、无报错，只能按 Escape 恢复。评论区累计 76 条讨论，开发者已在研究修复方案。
🔗 https://github.com/earendil-works/pi/issues/4945

### 2. Auto-compaction 在超长 agentic 会话中从不触发（#6879）
**评论 15 | 👍 15 | 状态：OPEN [bug]**
`gpt-5.6-sol` 上一个超过 2 小时的 agentic turn 使上下文超出阈值，compaction 直到 API 在 373k tokens 时才被迫触发。用户呼吁在每次 agent 操作后检查上下文。
🔗 https://github.com/earendil-works/pi/issues/6879

### 3. Auto-compaction 等待 agent_end 导致长工具循环内溢出（#7821）
**评论 3 | 状态：CLOSED [untriaged]**
与 #6879 同源的补充报告：在 0.84.1 中，272k 配置窗口下工具循环在越过阈值后仍持续请求，因为 compaction 只在 `agent_end` 后检查。
🔗 https://github.com/earendil-works/pi/issues/7821

### 4. Meta Model API 支持请求（#7543）
**评论 3 | 👍 3 | 状态：CLOSED [no-action]**
请求将 Meta Model API 纳入 LLM providers，以支持 Meta 的 Muse Spark 通过标准 `/login` 流使用。虽然被 no-action 关闭，但反映了社区对新模型接入的持续需求。
🔗 https://github.com/earendil-works/pi/issues/7543

### 5. Edit 工具模糊匹配忽略空白符差异问题（#7836）
**评论 2 | 状态：CLOSED [untriaged]**
`normalizeForFuzzyMatch` 不会折叠连续空白或去除前导空格，导致 `oldText` 在空白符不一致时匹配失败，尤其影响小型模型使用 Edit 工具。
🔗 https://github.com/earendil-works/pi/issues/7836

### 6. 全屏 TUI 鼠标选择静默覆盖系统剪贴板（#7837）
**评论 2 | 状态：CLOSED [untriaged]**
全屏模式下拖拽鼠标选择文本会立即通过 OSC 52 写入剪贴板并闪烁 "Copied!"，且无修饰键或设置可关闭——存在意外覆盖用户剪贴板的风险。
🔗 https://github.com/earendil-works/pi/issues/7837

### 7. openai-codex 流式请求缺少重试包装（#7820）
**评论 2 | 状态：CLOSED [untriaged]**
实测 0.83.0（Bun 1.3.14）上约 30% 的长流（3–25 分钟）因传输层错误死亡，包括 `WebSocket closed 1006`。流式请求没有 `retryProviderRequest` 保护，中断即致命。
🔗 https://github.com/earendil-works/pi/issues/7820

### 8. 打印模式加载扩展后挂起（#7734）
**评论 2 | 状态：CLOSED [bug]**
pi 0.84.0/0.83.0 + Node 22 + 14 个扩展（含 pi-subagents 0.41.0）时，print 模式在完成输出后无法退出，进程 0% CPU 挂起。
🔗 https://github.com/earendil-works/pi/issues/7734

### 9. Bedrock 非法工具调用毒化会话（#7782）
**评论 2 | 状态：CLOSED [bug, untriaged]**
Pi 接受并执行了 Bedrock 生成的包含空 key（`""`）的工具调用并持久化，之后每次回放都被 Bedrock 拒绝，永久损坏会话。缺乏工具参数校验。
🔗 https://github.com/earendil-works/pi/issues/7782

### 10. 支持单 provider 多登录（#7814）
**评论 2 | 状态：CLOSED [untriaged]**
用户有两个 ChatGPT Plus 订阅，希望在 Pi 中同时使用而无需反复登出/登录。开发者可考虑在自定义 provider 扩展中复用 oauth 流。
🔗 https://github.com/earendil-works/pi/issues/7814

## 重要 PR 进展

### 1. 新增 Aliyun Model Studio CLI 到 Related Tools（#7840）
**CLOSED | 更新：08-09**
将 `bailian-cli`（阿里云 DashScope 官方 CLI）加入 README 的 Related Tools 部分，扩展 Pi 的生态链接。
🔗 https://github.com/earendil-works/pi/pull/7840

### 2. 新增 LLM Gateway 与 LLM Gateway DevPass 提供商（#7610）
**OPEN | 更新：08-08**
为 `openai-completions` 增加 LLM Gateway（OpenRouter 风格路由器）作为内置 provider，由 LLM Gateway 团队贡献，替换了自动关闭的 #7480。
🔗 https://github.com/earendil-works/pi/pull/7610

### 3. `pi --version` 标注运行时环境（#7834）
**CLOSED | 更新：08-08**
输出如 `0.84.1 (bun)` / `0.84.1 (node)`，便于 issue 报告者快速区分运行时相关问题。Closes #7244。
🔗 https://github.com/earendil-works/pi/pull/7834

### 4. notify 扩展示例从 agent_end 改为 agent_settled（#7833）
**CLOSED | 更新：08-08**
修复示例扩展在重试、compaction 回调、后续 continuation 尚未完成时就发送通知的问题。
🔗 https://github.com/earendil-works/pi/pull/7833

### 5. 原生 DeepSeek 改用 max_tokens 参数（#7811）
**CLOSED | 更新：08-08**
DeepSeek API 文档明确要求 `max_tokens`，但 Pi 发送的是 `max_completion_tokens`，被 DeepSeek 静默忽略。此修复直接对齐官方接口。
🔗 https://github.com/earendil-works/pi/pull/7811

### 6. 从 oh-my-pi 移植 A 级能力到核心（#7823）
**CLOSED | 更新：08-08**
包括 stream rules（流式规则匹配与中断重试）、subagent 工具、advisor 以及跨会话记忆四个独立功能，均已拆分 commit。
🔗 https://github.com/earendil-works/pi/pull/7823

### 7. 将 `length` 视为正常的长度停止原因（#7817）
**CLOSED | 更新：08-08**
兼容 OpenAI 兼容接口（如豆包/火山方舟）返回 `incomplete_details.reason = 'length'` 的情况，避免被误判为错误。
🔗 https://github.com/earendil-works/pi/pull/7817

### 8. 语法高亮按需懒加载（#7801）
**OPEN | 更新：08-08**
实验性地重构语法高亮，不常用语法 grammar 延迟加载，减少启动开销。mitsuhiko 提出，但对 public API 有一定侵入。
🔗 https://github.com/earendil-works/pi/pull/7801

### 9. 全屏模式复制避免多余换行（#7721）
**CLOSED | 更新：08-08**
此前鼠标选择折行长文本时，每一视觉行会被复制为独立一行，粘贴时引入意外换行。现在追踪行归属，还原原始正文。
🔗 https://github.com/earendil-works/pi/pull/7721

### 10. 拒绝并发 compaction 调用（#7810）
**CLOSED | 更新：08-08**
快速双击 `/compact` 或快捷键会触发崩溃（`Cannot read properties of undefined (reading 'signal')`），现在通过防重入保护解决。
🔗 https://github.com/earendil-works/pi/pull/7810

## 功能需求趋势

- **连接可靠性与重试机制**：openai-codex 的连接中断和流式请求无重试包装（#4945/#7820）是当前最高频痛点，预计会有针对性修复。
- **Auto-compaction 策略优化**：长 agent 循环 / 长工具循环中无法及时触发 (#6879/#7821)，社区希望改为更细粒度的检查时机。
- **新模型与网关支持**：Meta Model API（#7543）、Cloudflare Workers AI Gateway（#7838）、LLM Gateway（#7610）以及 DeepSeek 原生参数修复（#7811/#7807）都表明用户希望扩展接入范围。
- **多账户 / 多配置管理**：#7814（同 provider 多登录）、#7813（多 settings 配置文件）反映用户对更灵活配置的期待。
- **TUI 交互精细化**：鼠标选择、滚动步长（#7765）、逐行滚动（#7830）、自动补齐描述滚动（#7827）、剪贴板行为（#7837）等高频小优化，改善日常使用体验。
- **恶意包 / 安全治理**：#7825 报告一个名为 `@baylarsadigov/omp-undo-redo` 的扩展包会导致 2–5 秒发送延迟，提示对第三方扩展包的安全审查。

## 开发者关注点

- **openai-codex 稳定性是最大痛点**：约 30% 的长流式 turn 会死于传输层中断，且无自动重试，用户被迫频繁按 Escape 恢复。
- **上下文压缩机制不可预测**：多个 issue 指向 compaction 在长操作中"失效"，直到 API 拒绝请求才被迫触发，用户体验差且浪费 tokens。
- **Edit 工具对非标准模型输出不够健壮**：#7835（单对象 edits 参数被拒）和 #7836（空白符差异导致模糊匹配失败）共同指向模型输出兼容性问题，特别影响小模型的可靠性。
- **TUI 交互细节影响效率**：剪贴板静默覆盖、复制时多余换行、滚动步长固定等问题虽小但高频，用户期望更细粒度的控制。
- **会话管理灵活性不足**：无法删除当前活动会话（#7818）、RPC 会话替换导致扩展重复绑定（#7831）等，限制了多会话工作流。
- **第三方扩展安全引起警惕**：恶意/劣质扩展包影响输入延迟，社区关注建立更完善的扩展审查或隔离机制。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## 📰 Qwen Code 社区动态日报 — 2026-08-09

### 1. 今日速览
- **v0.21.8 正式发布**，重点恢复 fork 仓库 PR 的实时自动修复能力，并为 OpenAI、Gemini、Vertex AI 启用压缩缓存共享。
- **跨会话通信成为社区最热方向**：`#8724`、`#8718` RFC 讨论火热，配套 PR `#8728`、`#8730` 已落地实现。
- **CI 稳定性与安全问题持续受关注**，多个自动追踪的失败 Issue 待处理，同时 `#8627` 等安全漏洞被修复并关闭。

---

### 2. 版本发布
**v0.21.8** 发布，主要更新：
- 🔧 恢复从 fork 打开的 Pull Request 的实时自动修复（autofix）支持 — 通过将评审事件桥接到有凭证的工作流（[#8676](https://github.com/QwenLM/qwen-code/pull/8676)）
- ⚡ 为 OpenAI、Gemini 和 Vertex AI 启用压缩缓存共享，提升多模型场景下的缓存效率

---

### 3. 社区热点 Issues（Top 10）

1. **[#8092] 构建围绕 Web Shell 的低维护桌面应用** — 6 条评论  
   提出复用现有 Web Shell 作为桌面端主界面，避免维护两套 UI 实现。社区讨论积极，反映桌面端体验是重要诉求。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8092)

2. **[#8724] 跨会话消息传递** — 4 条评论  
   允许同一机器上的 Qwen Code 会话之间互相发现、发消息，接收端带显式 gate。已拆分为两个 PR 落地，基础设施价值高。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8724)

3. **[#8718] RFC：原生协调独立 Qwen 会话** — 4 条评论  
   提出 leader 派发多 worker 会话的协调机制，需讨论会话分组、消息协议与安全边界。是 Agent 场景的重要架构储备。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8718)

4. **[#8756] 主分支 CI 失败：E2E Tests** — 5 条评论  
   main 分支 E2E 测试在结果回报前即失败，由机器人自动追踪。社区对 CI 稳定性敏感度高。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8756)

5. **[#8766] CI 失败：本地 Qoder 插件安装测试** — 4 条评论  
   定位到 `cli/extensions-install.test.ts`，已标记 autofix/in-progress，是开发者高频遇到的插件安装场景回归。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8766)

6. **[#8317] Ctrl+Shift+C 复制文本失效** — 4 条评论  
   终端标准复制快捷键回归，影响用户日常复制操作，社区反馈人数较多。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8317)

7. **[#8737] Chrome 远程调试同意弹窗每次会话重复出现** — 4 条评论  
   chrome-devtools MCP `--autoConnect` 模式下，每次交互都会触发 Chrome 的 consent 弹窗，影响自动化流程的连续性。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8737)

8. **[#8697] OTel 指标导出被环境变量静默禁用** — 3 条评论  
   设置 `OTEL_METRICS_EXPORTER=otlp` 后，native 指标全部丢失但 traces 仍在发送。多 CLI 共存场景下隐蔽性高，排查困难。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8697)

9. **[#8750] 裸 URL 超链接吞掉 CJK 全角标点** — 3 条评论  
   终端输出中 URL 后的中文标点被错误吸入链接区域，是 CJK 用户的高频 UI 细节问题。  
   👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8750)

10. **[#8627] 安全漏洞：显式 DO_NOT_TRUST 被祖先 TRUST_FOLDER 覆盖** — 3 条评论  
    已修复关闭。若不修复，恶意工作区可注入 `qwen serve` bearer token，属高风险信任边界问题。  
    👉 [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8627)

---

### 4. 重要 PR 进展（Top 10）

1. **[#8714] 原生 DashScope 集成**  
   新增 `dashscope` 一等认证类型，直连阿里云 ModelStudio 原生接口，不再绕道 OpenAI 兼容层。对国内开发者是重要平台扩展。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8714)

2. **[#8728] 添加 live-session 注册表与 `qwen sessions ps`**  
   跨会话功能的基础设施。每个交互会话以 `~/.qwen/sessions/<pid>.json` 记录自身状态，退出时自动清理。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8728)

3. **[#8730] 接受带入站门控的跨会话消息**  
   跨会话消息传递的第二步。消息到达后先过 gate 再进入模型上下文，实现 fail-closed 的安全控制。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8730)

4. **[#8675] Web Shell 新增模型特定推理控制**  
   建立内置模型推理控制注册表，从 Core 到 WebShell 端到端支持 Thinking/Effort 控制，首发适配 `qwen3` 系列。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8675)

5. **[#8776] 重构 review：提取 toolchain 适配器边界**  
   将 npm 实现移至 `lib/npm-toolchain.ts`，`build-test.ts` 只保留 CLI 路由与 spawn 边界，为多包管理器支持做准备。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8776)

6. **[#8777] review 支持 Maven 多模块验证**  
   基于 #8776 的适配器边界，注册 Maven adapter，`review build-test` 可识别根 reactor 并将变更文件映射到最深层模块。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8777)

7. **[#8614] Web Shell 右侧面板全屏视图**  
   为 artifacts/subagents/review 等右侧面板添加全屏切换按钮，提升大屏浏览效率。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8614)

8. **[#8469] ACP 重复工具执行失败保护**  
   对交互式 Session 中重复的 typed tool 执行失败增加保守的 prompt 级 guard，基于 #8176/#8180 的冻结执行结果契约。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8469)

9. **[#8761] CI 标签变更全部走 REST**  
   将三处 workflow 中的 `gh pr edit` 替换为 `issues/labels` REST 端点，并加 guard test。`gh pr edit` 在机器人上下文受限时的替代方案。  
   👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8761)

10. **[#8762] 修复 serve 的 usage_update 帧洪泛 demo 日志**  
   将 `/demo` 调试页 Events 标签中的 `usage_update` 从原始 JSON 日志改为实时 context meter 渲染，降低噪音。  
    👉 [查看 PR](https://github.com/QwenLM/qwen-code/pull/8762)

---

### 5. 功能需求趋势

| 方向 | 相关 Issue / PR | 热度 |
|---|---|---|
| **跨会话与多 Agent 协调** | [#8724](https://github.com/QwenLM/qwen-code/issues/8724)、[#8718](https://github.com/QwenLM/qwen-code/issues/8718)、[#8775](https://github.com/QwenLM/qwen-code/issues/8775)、[#8728](https://github.com/QwenLM/qwen-code/pull/8728)、[#8730](https://github.com/QwenLM/qwen-code/pull/8730)、[#8769](https://github.com/QwenLM/qwen-code/issues/8769) | 🔥🔥🔥 最高 |
| **Web Shell 体验与桌面端精简** | [#8092](https://github.com/QwenLM/qwen-code/issues/8092)、[#8614](https://github.com/QwenLM/qwen-code/pull/8614) | 🔥🔥 |
| **浏览器控制集成** | [#8737](https://github.com/QwenLM/qwen-code/issues/8737)、[#8699](https://github.com/QwenLM/qwen-code/issues/8699) | 🔥🔥 |
| **终端交互 UX 优化** | [#8741](https://github.com/QwenLM/qwen-code/issues/8741)、[#8738](https://github.com/QwenLM/qwen-code/issues/8738)、[#8750](https://github.com/QwenLM/qwen-code/issues/8750)、[#8317](https://github.com/QwenLM/qwen-code/issues/8317) | 🔥🔥 |
| **安全与信任模型** | [#8627](https://github.com/QwenLM/qwen-code/issues/8627)、[#8575](https://github.com/QwenLM/qwen-code/issues/8575)、[#8756](https://github.com/QwenLM/qwen-code/issues/8756) | 🔥 |
| **会话管理与恢复** | [#8678](https://github.com/QwenLM/qwen-code/issues/8678)、[#8743](https://github.com/QwenLM/qwen-code/pull/8743) | 🔥 |
| **新模型/平台支持** | [#8714](https://github.com/QwenLM/qwen-code/pull/8714)、[#8675](https://github.com/QwenLM/qwen-code/pull/8675) | 🔥 |

---

### 6. 开发者关注点

- **CI 稳定性是当前最大痛点**：过去一天出现 3 个 CI/发布失败自动追踪 Issue（[#8756](https://github.com/QwenLM/qwen-code/issues/8756)、[#8766](https://github.com/QwenLM/qwen-code/issues/8766)、[#8771](https://github.com/QwenLM/qwen-code/issues/8771)），其中既有 E2E 测试失败，也有 nightly 发布集成任务失败。社区期望更快的自动修复周转。

- **配置项名实不符**：`general.dynamicCommandTranslation` 完全暴露但在运行时无效果（[#8748](https://github.com/QwenLM/qwen-code/issues/8748)），VS Code 设置 schema 拒绝核心运行时已支持的 prompt hooks（[#8752](https://github.com/QwenLM/qwen-code/issues/8752)）。开发者对配置文档与实现的一致性有明显诉求。

- **快捷键与终端行为回归**：`Ctrl+Shift+C` 复制失效（[#8317](https://github.com/QwenLM/qwen-code/issues/8317)）和 ESC 未取消进行中任务（[#8201](https://github.com/QwenLM/qwen-code/issues/8201)）都是高频日常操作，回归影响面大。

- **测试与构建基建问题**：`npm test` 因未知 flag 直接崩溃（[#8721](https://github.com/QwenLM/qwen-code/issues/8721)）、`integration-tests/` 从未被类型检查（[#8692](https://github.com/QwenLM/qwen-code/issues/8692)）、vendored 包版本落后于 lockfile（[#8722](https://github.com/QwenLM/qwen-code/issues/8722)），反映出仓库测试基建仍需加固。

- **安全边界受到关注**：文件夹信任继承绕过（[#8627](https://github.com/QwenLM/qwen-code/issues/8627)）已修复，但只读 git 子命令可执行 `.git/config` 中程序的问题（[#8575](https://github.com/QwenLM/qwen-code/issues/8575)）说明 shell 工具的安全审计还需持续推进。

- **session 恢复超时风险**：大型会话恢复超时可能丢失当前会话（[#8678](https://github.com/QwenLM/qwen-code/issues/8678)），已有 PR1 实现超时契约，但选择性恢复仍需设计评审（[#8743](https://github.com/QwenLM/qwen-code/pull/8743)）。

---

> 📌 *本日报由 Qwen Code 社区数据自动生成，聚焦过去 24 小时的关键动态。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-09

## 今日速览

v0.9.5 正式发布，标志着项目全面转向 **Codewhale** 品牌（传统 `deepseek-tui` npm 包进入弃用状态，不再接收更新）。围绕 v0.9.5 的架构重构与运行时 API 扩展成为今日主线：多个 Issue 聚焦于将引擎提取到 `crates/core`、子代理控制面统一、以及会话恢复能力；PR 侧则密集合并了运行时 API 的 goal/memory/MCP/skill 端点与 Mistral AI 一级提供商支持。

## 版本发布

### v0.9.5
- **Codewhale** 为 Shannon Labs 正式公开产品，`codewhale` 命令 / npm 包 / 发布资源均保持小写技术标识符
- 传统 npm 包 `deepseek-tui` 正式弃用，不再接收后续版本
- 从 v0.8.x 传统 `deepseek` / `d` 迁移的用户需切换至新的 `codewhale` 命令

### v0.9.4
- 与 v0.9.5 相同的品牌声明，作为 v0.9.5 发布前的中间版本

## 社区热点 Issues

挑选过去 24 小时评论数最高的 10 个 Issue：

1. **[#4022] v0.9.3: 定义子代理与运行时控制面的 CLI/TUI 对等** — 评论 8
   TUI 侧边栏已成为子代理状态 / 展开收起 / 取消的主交互区，但同样的控制面不应被锁死在 TUI 中——如果未来引入云端应用或远程工作流，CLI 必须提供同等的控制能力。
   https://github.com/Hmbown/CodeWhale/issues/4022

2. **[#4785] 死代码清扫：464 处 `#[allow(dead_code)]` 属性掩盖代码漂移** — 评论 6
   仓库中 143 个文件存在 464 个 `#[allow(dead_code)]` 属性，编译器结构性失明，无法报告真实漂移。涉及大规模代码清理，影响工程质量基线。
   https://github.com/Hmbown/CodeWhale/issues/4785

3. **[#4326] 性能：解释并限定取消 32-worker 风暴后的 RSS** — 评论 6
   高扇出并发足够响应，但取消后单次 RSS 采样不降反升。需区分分配器高水位保留与真实 worker/运行时泄漏，并给取消后的稳态内存设边界。
   https://github.com/Hmbown/CodeWhale/issues/4326

4. **[#4416] 隔离同一工作区内 CodeWhale 会话间的过期失败代理状态** — 评论 4
   同一工作区开启第二个 CodeWhale 实例时，面板显示“Active 0”，但工作区却渲染出另一个更早会话残留的红色失败代理行。会话状态串扰影响多实例协同。
   https://github.com/Hmbown/CodeWhale/issues/4416

5. **[#4029] 计划创建类似 Reasonix 的界面？** — 评论 4
   社区用户直接询问是否规划 Reasonix 风格的交互界面。这代表了终端 UI 之外的另一类产品形态诉求。
   https://github.com/Hmbown/CodeWhale/issues/4029

6. **[#5034] 切换 Provider 时可能保留不相关的默认模型** — 评论 3
   切换到 OpenAI 后，模型仍可能停留在从其他路由继承的 `gpt-5.5`。Provider 与模型解析未按单一一致性单元更新，容易导致用户用错模型配置。
   https://github.com/Hmbown/CodeWhale/issues/5034

7. **[#5272] v0.9.5: 提示词级文件恢复（从先前的 prompt 恢复工作区）** — 评论 2
   用历史提示词恢复当时 agent 写入的工作区文件（会话快照），而非仅恢复转录滚动区。要求破坏性恢复前确认、并与 git 协作不丢弃用户提交。
   https://github.com/Hmbown/CodeWhale/issues/5272

8. **[#5270] v0.9.5: 统一任务表面（shell + 子代理 + 持久 workers）** — 评论 2
   一张操作者视角的“本会话仍在运行什么”列表：后台 shell、子代理、Fleet/lane workers、工作流运行等。解决 Task 面板、Fleet、Workflow 各自孤立的问题。
   https://github.com/Hmbown/CodeWhale/issues/5270

9. **[#5271] v0.9.5: 会话窥视（不完整附加即可列出 / 窥视 / 应答审批）** — 评论 2
   在 TUI 中列出其他线程/会话，窥视最近活动与待批准审批，安全时无需完全附加即可应答审批，且不丢失当前 composer 上下文。
   https://github.com/Hmbown/CodeWhale/issues/5271

10. **[#5267] v0.9.5: 回合停止诚实性（状态显示“结束”就必须结束）** — 评论 2
    当 footer 显示 "ending" / "stopping" 但模型仍在继续输出时，用户信任受损。要求删除假守卫，让 turn loop 真正停止。
    https://github.com/Hmbown/CodeWhale/issues/5267

## 重要 PR 进展

挑选 10 个关键 PR：

1. **[#5306] fix(release): 验证 crate 发布顺序**（已合并）
   在任何 registry 操作前，对照锁定的 Cargo 元数据校验 20-crate 发布顺序；将 codewhale-core 置于 codewhale-tui 之前，并拒绝重复、缺失、版本混用及构建依赖倒置。
   https://github.com/Hmbown/CodeWhale/pull/5306

2. **[#5308] fix(release): 使用 CNB 资产下载 URL**（开放）
   两个 updater 统一改用 codewhale.net 的 canonical CNB 仓库路径，补上 `/-/releases/download/vX.Y.Z` 段，确保镜像模式收到资产字节而非发布 HTML。
   https://github.com/Hmbown/CodeWhale/pull/5308

3. **[#5295] feat: 添加 Mistral AI 作为一级 Provider 路由**（已合并）
   来自首次贡献者 @xavierpestel-ai。默认 `mistral-code-latest`，支持 `provider = "mistral"`、`CODEWHALE_PROVIDER=mistral` 与 `codewhale --provider mistral`。
   https://github.com/Hmbown/CodeWhale/pull/5295

4. **[#5133] feat(runtime-api): 暴露持久目标循环状态与完成控制**（已合并）
   为 v0.9.4 runtime HTTP API 增加 goal 资源：`GET /v1/threads/{id}/goal` 读取活动目标状态 + 生命周期转换端点，托管客户端首次获得目标级控制能力。
   https://github.com/Hmbown/CodeWhale/pull/5133

5. **[#5132] Runtime API: 暴露验证器收据与证据**（已合并）
   在 `/v1/fleet/runs/{run_id}/` 下新增 `receipts`、`evidence` 等三个只读端点，托管客户端可定位失败任务、失败原因并判断是否重试，突破了只有聚合计数器的限制。
   https://github.com/Hmbown/CodeWhale/pull/5132

6. **[#5131] feat: Runtime API 内存端点 — 有界检查与生命周期控制**（已合并）
   新增 `/v1/memory` 系列路由，受现有 `require_runtime_token` 中间件保护；托管客户端可检查活动内存、了解 scope/provenance、执行生命周期控制。
   https://github.com/Hmbown/CodeWhale/pull/5131

7. **[#5130] feat(runtime-api): 有界 MCP 服务器配置与生命周期管理**（已合并）
   将只读 MCP 清单扩展为完整的 CRUD：`POST /v1/apps/mcp/servers` 创建（需 name + 一种连接配置），另含更新、删除、列表等操作。
   https://github.com/Hmbown/CodeWhale/pull/5130

8. **[#5129] feat(runtime-api): 技能生命周期端点**（已合并）
   `/v1/skills` 下新增 install / update / uninstall / trust / audit 全套端点，将 TUI 内的技能管理完整暴露给桌面/Web 托管客户端。
   https://github.com/Hmbown/CodeWhale/pull/5129

9. **[#5205] 在 Tabby 中稳定 IME 候选定位**（已合并）
   修复 Chinese IME 候选窗口在 Tabby（Electron/xterm.js）快速重绘期间跳动问题：检测 `TERM_PROGRAM=Tabby`、启用 low-motion rendering、限制重绘节奏、禁用会干扰候选定位的特定合成器路径。
   https://github.com/Hmbown/CodeWhale/pull/5205

10. **[#5301] fix(tui): 使压缩实时且压力感知**（已合并）
    手动 `/compact` 改为非阻塞入队，用类型化生命周期 ID 串行化；128K / 272K / 1M 自动压缩阈值与完整保守请求压力对齐；绑定精确的活动操作重锚点。
    https://github.com/Hmbown/CodeWhale/pull/5301

## 功能需求趋势

从全部 Issues 中提炼出以下方向：

- **运行时 API 扩展**：Goal / Memory / MCP / Skill 生命周期端点密集落地，托管客户端（桌面/Web）的能力边界正在快速外扩
- **架构模块化**：多个 v0.9.5 Issue 要求将引擎移入 `crates/core`、提示词组装移出 TUI、拆分 Thread/Session、终结 682,959 行单体 crate 的“独角兽税”
- **子代理控制与多会话管理**：CLI/TUI 控制面对等、统一任务列表、会话窥视、跨会话状态隔离——子代理不是“玩具”，而是生产级编排对象
- **Provider 中立化**：`DeepSeekClient` 内部命名必须重命名为 provider-neutral（#5103）；Mistral 成为一级路由；Responses API 需要按 provider profile 配置而非硬编码
- **可恢复性与上下文管理**：prompt 级文件恢复（#5272）、压缩的存活契约（#4394）、压缩保留意图与决策（#5043）——长会话可靠性成为核心议题
- **性能与资源约束**：构建时间优化（#5249）、RSS 上限（#4326）、无谓依赖升级——工程健康度被提上日程

## 开发者关注点

- **命名迁移阵痛**：`deepseek-tui` 弃用、`DeepSeekClient` 内部命名残留（#5103），社区需要一份清晰的迁移路径，避免新旧标识符混用造成混乱
- **“看似停止实则还在跑”的信任问题**：多篇 Issue（#5267、#4416、#5270）指向状态展示与真实行为不一致——用户对 UI 状态的真实性要求极高
- **子代理输出契约过重**：#5189 指出每个 child brief 强制 `### SUMMARY` / `### EVIDENCE` / `### CHANGES` / sentinel 等完整仪式，对小任务反而造成负担
- **上下文窗口静默降级**：#5244 暴露未知模型 ID 静默落到 128K 默认值，1M 窗口模型在不知情下被压缩——用户需要显式提示而非无声降级
- **构建与发布链路验证**：#5306、#5294、#5296 等 PR 显示维护者正在为发布流程、遥测上报与测试固件增加自动化护栏，整体工程纪律在收紧

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*