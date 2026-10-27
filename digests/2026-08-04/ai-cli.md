# AI CLI 工具社区动态日报 2026-08-04

> 生成时间: 2026-08-04 15:28 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-04）


## 1. 生态全景

当前 AI CLI 工具正从"单会话编码助手"加速演化为"多智能体协作的 Agent 运行时"，但**用量计量透明化**成为商业工具共同的信任瓶颈——Claude Code 当日 50 条更新 Issue 中超 1/3 与配额相关，Codex 的 token 消耗问题（#14593）积累 628 条评论。各工具围绕 **MCP 生态、子代理可靠性、安全边界、会话恢复** 四个方向高强度迭代：OpenAI Codex 一日发布 4 个 Rust alpha、DeepSeek TUI 单日 36 个 PR 整合 v0.9.4、OpenCode 连续两日发版修复。与此同时，本地/自托管模型接入（Gemini SGLang、Pi LLM Gateway）与 IDE 深度集成（Claude Code Focus view、ACP 工具执行链）构成两条并行演进主线。整体呈现"功能扩张快于稳定性沉淀"的典型早期竞争格局，可靠性问题正在取代模型能力成为社区首要关注点。


## 2. 各工具活跃度对比

| 工具 | 更新 Issues | 更新 PR | Release | 版本节奏 |
|---|---|---|---|---|
| Claude Code | 50 | 2 | v2.1.221 | 稳定版，低频发版 |
| OpenAI Codex | 10（热点） | 10 | 4（rust-v0.147.0-alpha 系列） | 快速迭代 / alpha |
| Gemini CLI | 10（热点） | 10 | 0 | 稳定版 + 维护 |
| GitHub Copilot CLI | 10（热点） | 1 | v1.0.78 + v1.0.78-3 | 稳定版，双发版 |
| Kimi Code CLI | 5（全量） | 3（全量） | 0 | 早期阶段 |
| OpenCode | 10（热点） | 10 | v1.18.12 + v1.18.13 | 稳定版，高频修复 |
| Pi | 10（热点） | 10 | 0 | 稳定版 + 大量合入 |
| Qwen Code | 10（热点） | 10 | v0.21.5 + nightly | 稳定版 + 夜间版 |
| DeepSeek TUI | 5（全量） | 36（全量） | 0 | 大版本整合期（v0.9.4，领先 main 77 commits） |

> 注：部分工具日报仅列热点条目，实际全量数据可能更高。


## 3. 共同关注的功能方向

**① 用量计量与配额透明化（最强烈）**
- **Claude Code**：7+ 个活跃 Issue（#16157 达 1484 评论），Max/Pro 用户普遍遭遇"0 token/0 费用仍显示 100% 用量"。
- **OpenAI Codex**：#14593"token 燃烧过快"628 评论；#9508 要求每周限额重置时间可预期。
- **OpenCode**：#40006 Go 套餐用量异常；新增 usage API 端点（PR #16513）。
- **共性诉求**：服务端计量与客户端展示对齐、重置窗口可视化、配额审计日志。

**② MCP 生态与工具自动发现**
- **OpenAI Codex**：#26234 MCP 工具在 Ollama/Bedrock 等非 OpenAI 端点不可用；4 个 PR 完善 MCP 扩展协商与启动时序。
- **Copilot CLI**：#4349 策略枚举过严导致 MCP 全禁用；#4364 macOS 私有 CA 证书阻断企业 MCP 注册表。
- **DeepSeek TUI**：PR #5238 引入 MCP Registry 自动发现，工具选择从"手动配置"走向"注册表优先"。
- **Gemini CLI**：PR #28664 扩展同意提示展示完整服务器配置（env/cwd/headers）。

**③ 多智能体/子代理可靠性**
- **Gemini CLI**：#22323 子代理 MAX_TURNS 被误报为 GOAL 成功；#21409 generalist 无限挂起；#22093 禁用配置不生效。
- **Claude Code**：#76727 多会话并行缺少官方协调原语。
- **OpenAI Codex**：#35097 多智能体 v1/v2 模型资格判定混乱；PR #36892 允许 leaf model spawn。
- **共性诉求**：子代理状态真实上报、硬停止机制、跨会话编排能力。

**④ 安全与权限细粒度控制**
- **Claude Code**：#82074 OAuth 登出后授权仍有效；#75372 工具结果流伪造 system-reminder 注入。
- **Qwen Code**：#8102 确定性工具执行边界提案；#8136 Provider 警告清理器泄露含 `@` 的密码。
- **Gemini CLI**：#26525 Auto Memory"先发送内容、后脱敏"，隐私设计顺序颠倒。
- **Pi**：PR #7605 修复 OAuth 错误消息携带 access token 进入日志/遥测。
- **OpenAI Codex**：PR #36908/#36893 加强 Bearer Token 与命令执行项脱敏。

**⑤ 会话恢复与上下文压缩策略**
- **Pi**：#6768 Copilot Enterprise 压缩功能 421 错误（18 👍）；#7553 要求压缩独立配置 thinking 等级（PR #7602 落地）。
- **DeepSeek TUI**：#5239 模型支持 1M 上下文却在 128K 触发压缩，信息流失担忧。
- **OpenAI Codex**：#33306 要求可配置 1.05M 上下文与压缩阈值。
- **Gemini CLI**：PR #28672 修复 `/compress` 重载失败与配额回退丢工具响应。
- **Qwen Code**：#8356 用户取消请求后会话记录中断。

**⑥ 平台兼容性与终端体验**
- **Windows**：Claude Code #72680 零活动重置循环；Codex #14593（Windows 环境）；Kimi #2584 IME 字符重复、#2582 流挂起；OpenCode #40483 空白响应；Copilot #4328 WSL2 键位误判。
- **终端**：Qwen #8519 tmux 闪屏；Pi 官方发起 Windows 使用调查（#7547）；DeepSeek TUI PR #5234 鼠标捕获与滚动冲突。


## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 / 差异化 |
|---|---|---|---|
| **Claude Code** | 会话配额治理、IDE 集成、Hook 生态 | Anthropic Max/Pro 专业开发者 | 商业化最成熟；VSCode Focus view；Linux 沙箱 `mask` 凭据模式；社区规模最大 |
| **OpenAI Codex** | 多智能体 v2、MCP 扩展协商、密钥脱敏 | OpenAI API 商业用户 | Rust 重写快速迭代（日更 4 个 alpha）；leaf model spawn；permission 传播到 review 线程 |
| **Gemini CLI** | 子代理架构（codebase/generalist/browser）、Auto Memory | Google Gemini 生态开发者 | 多类型子代理编排 + 记忆系统；P1 问题集中在"假成功/挂起"；SGLang 本地接入 |
| **Copilot CLI** | GitHub 企业工作流、ACP 协议、插件管理 | GitHub 企业用户 | 绑定 GHE/Copilot 订阅；first-party 插件自动更新；`/new-worktree` 隔离会话 |
| **Kimi Code CLI** | ACP 协议能力补全（模型发现/切换、权限模式） | Moonshot API 用户、ACP 客户端开发者 | 体量最小；以协议层能力为杠杆切入第三方编辑器生态 |
| **OpenCode** | 多模型聚合（go 套餐/DeepSeek/Azure）、桌面端 | 多模型订阅用户 | 桌面端 + TUI 双形态；models.dev 目录统一治理；DeepSeek v4 Flash 支持成焦点 |
| **Pi** | 多 provider 聚合、TUI 极致体验 | 技术型/DIY 开发者 | 极简依赖（bun/node/deno）；RPC over unix socket/TCP；LLM Gateway 聚合；企业 Copilot 席位接入 |
| **Qwen Code** | Tauri 桌面迁移、daemon 多工作区、ACP/IDE 深化 | Qwen/阿里云生态 | Electron→Tauri Shell 一次桥；确定性工具执行边界提案；Omni 托管媒体存储 |
| **DeepSeek TUI** | Runtime API 控制面、沙箱机制、MCP 注册表 | 开源/本地模型用户 | v0.9.4 一次性暴露目标/内存/MCP/技能四维管理端点；ACP 从"聊天"走向"真实工具执行" |


## 5. 社区热度与成熟度

**第一梯队（高热度、商业化成熟）**
- **Claude Code**：50 issues/日居首，单一 Issue #16157（1484 评论 / 691 👍）为历史级热度；但配额信任危机正在侵蚀付费用户忠诚度。
- **OpenAI Codex**：#14593 达 628 评论；Rust 版仍处 alpha 但迭代速度全场最快，工程重心已转向 MCP 与多 Agent 安全加固。

**第二梯队（中高热度、稳定迭代）**
- **Gemini CLI**：P1 问题密集但维护者响应明确（重测/跟踪中），PR 与 Issue 形成闭环。
- **OpenCode**：发版节奏紧凑（连续两日修复），但 DeepSeek 通道故障与"Thinking 卡死"集中爆发，服务端稳定性是短板。
- **Pi**：社区讨论质量高，热点 Issue 多带对应修复 PR（#6768→#7602、#7465→#7612），闭环率突出。
- **Qwen Code**：Issue 治理精细（P2/P3 分级），安全与取消语义类问题被系统性追踪。

**第三梯队（中等/早期）**
- **Copilot CLI**：功能需求旺盛（高赞主题/会话分叉/插件开关）但社区贡献极少——当日唯一 PR 标题仅为 "Merge" 且无描述。
- **DeepSeek TUI**：PR 异常活跃（36 条）但 Issue 仅 5 条，处于 v0.9.4 大版本整合期，社区参与集中于贡献者而非用户反馈。
- **Kimi Code CLI**：5 issues / 3 PRs 体量最小，ACP 协议方向尚未形成生态。


## 6. 值得关注的趋势信号

**① 配额信任危机是商业工具的生死线**
Claude Code 与 Codex 的最大 Issue 均指向计量不透明；"0 token / $0.0000 费用仍触发 100% 上限"（Claude #81116）等极端样本证明服务端计量存在系统性误判。对开发者：选择工具时需评估配额审计与申诉通道，而非只看订阅价格；对厂商：计量逻辑公开化与补偿方案已是公关级优先级。

**② MCP 正从"协议标准"走向"声明式自动发现"**
DeepSeek TUI 的 Registry 优先工具选择、Codex 的 MCP 扩展协商、Copilot 的企业 CA/策略兼容，共同指向 MCP 生态的注册表化。对工具开发者：尽早按 MCP 规范封装技能即可获得跨 CLI 复用红利；对企业用户：私有 CA 与策略枚举兼容性应纳入选型 checklist。

**③ 子代理"假成功"比失败更危险**
Gemini #22323（MAX_TURNS 误报 GOAL）与 DeepSeek TUI #5209（文件编辑伪造成功）本质相同——错误信号会让上层调度做出错误决策，且无法触发重试。可靠性（而非模型能力）正在成为 Agent 编排框架的下一竞争核心。

**④ 取消/中断语义是基础设施级短板**
Qwen 三连（#8493 取消后仍写文件、#8491 信号终止报成功、#8495 stream 中断）与 OpenCode"Thinking 卡死"系列指向同一根因：流式工具调用缺乏可靠的取消传播。这解释了为何多个工具同时出现"假死状态"——修复需要从协议层（ACP/流式传输）而非 UI 层入手。

**⑤ 本地/自托管部署成为第二增长曲线**
Gemini 合并 SGLang 支持、Pi 接入 LLM Gateway、Codex 用户要求 MCP 兼容 Ollama/Bedrock、Copilot 被要求支持 BYO 模型——企业数据合规正在把"云厂商锁定"推向"混合部署"，本地模型端点即将成为 CLI 标配能力。

**⑥ 安全治理须覆盖"认证—传输—日志—记忆"全链路**
同一天内：Claude OAuth 登出残留、Qwen 密码含 `@` 泄露、Pi OAuth 错误消息携带 token、Gemini 记忆先发送后脱敏——密钥生命周期缺陷在四个独立代码库中同时暴露。安全已从单点"防注入"升级为全链路治理问题，任何一环缺失都可能成为企业采用的一票否决项。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-08-04）

> 数据来源：github.com/anthropics/skills PR/Issue 列表。所有 PR 当前均为 **Open**。

## 1. 热门 Skills 排行

按 PR 评论数排序，以下为关注度最高的 7 个 Skill 相关 PR（合并了同属 skill-creator 的修复条目）。

### 1. skill-creator 工具链修复（#1298, #539）
- **功能**：修复 `run_eval.py` 对所有描述恒定报告 `recall=0%` 的严重问题（#1298），并增加 YAML frontmatter 中未加引号 `description` 的预校验（#539）。
- **热点**：社区 10+ 独立复现 0% recall，导致描述优化循环失效；Windows 子进程、流读取、触发检测均被反复提及。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/1298 、 https://github.com/anthropics/skills/pull/539

### 2. document-typography 技能（#514）
- **功能**：新增技能，为 AI 生成文档提供排版质量控制，预防孤行（1-6 词溢出）、寡段（标题滞留页底）、编号错位。
- **热点**：社区普遍认可 AI 生成文档存在系统性排版缺陷，属于高频刚需。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/514

### 3. pdf 技能大小写引用修复（#538）
- **功能**：修复 `skills/pdf/SKILL.md` 中 8 处大小写不一致的引用（如 `REFERENCE.md` → `reference.md`）。
- **热点**：在大小写敏感文件系统上（Linux/macOS）会导致技能资源加载失败，影响面大。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/538

### 4. ODT 技能（#486）
- **功能**：新增 OpenDocument 技能，支持 `.odt`/`.ods` 的创建、填充、读取及转换为 HTML。
- **热点**：社区对 LibreOffice / ISO 标准文档格式的支持需求明显，触发词覆盖完整。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/486

### 5. frontend-design 技能改进（#210）
- **功能**：修订 `frontend-design` 技能，提升指令清晰度、可操作性和内部一致性，确保 Claude 可在单次会话中执行。
- **热点**：与 Issue #202 相呼应，社区批评现有技能“像开发文档而非操作指令”，要求可执行性优先。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/210

### 6. skill-quality-analyzer 与 skill-security-analyzer（#83）
- **功能**：新增两个元技能——质量分析器（五维评估：结构/文档、示例、资源等）与安全分析器。
- **热点**：直击社区对 skill 质量参差不齐、缺少安全审查机制的担忧。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/83

### 7. docx 技能跟踪修订 ID 冲突修复（#541）
- **功能**：修复 DOCX 技能在添加 tracked changes 时，`w:id` 与书签共享 ID 空间冲突导致的文档损坏。
- **热点**：OOXML 内部 ID 空间问题隐蔽，若不修复会在真实文档上引发数据损坏。
- **状态**：Open
- **链接**：https://github.com/anthropics/skills/pull/541

---

## 2. 社区需求趋势

从 Issues 评论热度与内容看，社区最集中的需求方向如下：

- **安全与信任治理**：Issue #492（43 评论）指出社区技能在 `anthropic/` 命名空间下分发造成信任边界滥用；#412 提议 `agent-governance` 技能；#1175 关注 SharePoint Online 文档的权限与上下文安全。  
  https://github.com/anthropics/skills/issues/492

- **组织级技能共享**：#228（16 评论）要求支持 org-wide 技能库/直接分享链接，代替手动下载上传。  
  https://github.com/anthropics/skills/issues/228

- **skill-creator 工具链稳定性**：#556（12 评论）、#1169、#1061、#202 集中反映 `run_eval.py`/`run_loop.py` 触发检测失效、Windows 兼容性差、YAML 解析脆弱等问题，社区急需一个稳定可用的优化闭环。  
  https://github.com/anthropics/skills/issues/556

- **上下文与记忆管理**：#1329 提出 `compact-memory` 符号化记忆；#1487 报告 `claude-api` 技能单次注入约 156k tokens 耗尽上下文；#189 指出插件重复安装浪费上下文。  
  https://github.com/anthropics/skills/issues/1329

- **质量门控与推理审计**：#1385 规划“预校准 → 对抗审查 → 交付验证”三段式流水线；#83 已提交对应元技能。  
  https://github.com/anthropics/skills/issues/1385

- **MCP 与跨平台互操作**：#16 希望将 Skills 暴露为 MCP 接口；#29 询问 AWS Bedrock 支持。  
  https://github.com/anthropics/skills/issues/16

---

## 3. 高潜力待合并 Skills

以下 PR 位于评论榜中后段，但近期更新活跃、功能完整，具备较高合并潜力：

- **self-audit（#1367）**：交付前机械文件验证 + 四维推理质量审计，适配任意项目/模型。更新至 2026-07-02。  
  https://github.com/anthropics/skills/pull/1367

- **testing-patterns（#723）**：覆盖测试哲学、单元测试、React 组件测试的完整测试生成技能。更新至 2026-04-21。  
  https://github.com/anthropics/skills/pull/723

- **pyxel（#525）**：为 pyxel-mcp 提供复古/像素/8-bit 游戏开发技能，集成“写→运行→截图→迭代”工作流。更新至 2026-07-15。  
  https://github.com/anthropics/skills/pull/525

- **color-expert（#1302）**：全面的颜色专业知识，涵盖命名系统（ISCC-NBS、Munsell、RAL 等）与色彩空间选择。更新至 2026-07-21。  
  https://github.com/anthropics/skills/pull/1302

- **plan-file-hygiene（#1479）**：规划工件生命周期管理，解决 planning artifacts 无限累积问题。更新至 2026-07-27，响应 Issue #1417。  
  https://github.com/anthropics/skills/pull/1479

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：在完善 skill-creator 工具链稳定性与安全性的同时，快速补齐垂直场景（文档排版/格式转换/测试/设计/游戏/颜色）和治理型技能（质量审计、安全分析、记忆管理），并解决命名空间信任、上下文膨胀和组织级共享等生态级问题。**

---

# Claude Code 社区动态日报 — 2026-08-04

## 今日速览

社区最突出的动态是**用量配额异常类 Issue 持续爆发**——#16157（Max 订阅用户瞬间耗尽套餐额度）已积累 1484 条评论、691 个 👍，是当前社区影响面最大、讨论度最高的问题；与此同时，官方发布 **v2.1.221**，为 VSCode 引入 Focus view 并改进 Linux 沙箱凭据掩码。安全方面出现一条值得警惕的报告：Claude for Chrome 的 OAuth 授权在全局登出后依然有效。PR 动态较少，仅有文档补充与符号链接修复各一条。

---

## 版本发布

### v2.1.221

- **VSCode Focus view 正式上线**：聊天菜单新增开关，可将工具活动隐藏为可展开的逐轮摘要，并带有实时运行工具指示器。可通过 `Ctrl+Alt+F` 或 "Claude Code: Toggle Focus view" 命令切换。
- **Linux 沙箱增强**：为凭据文件新增 `mode: "mask"` 支持，进一步收紧本地敏感信息暴露面。

---

## 社区热点 Issues

过去 24 小时内有 50 条 Issue 被更新，其中**超过 1/3 与用量配额计算有关**。以下为最值得关注的 10 条：

### 1. #16157 — Max 订阅用户"瞬间"触发用量上限
- 状态：OPEN ｜ 作者：deqrocks ｜ 评论 1484 ｜ 👍 691
- **为什么重要**：社区历史上最热的 Issue 之一。自 2026 年 1 月创建至今仍在持续发酵，大量 Max 付费订阅用户反映在几乎未使用的情况下立刻撞上会话/周度限额，直接导致核心工作流不可用。
- 链接：https://github.com/anthropics/claude-code/issues/16157

### 2. #54750 — 本地可见用量极低，会话限制却显示 100%
- 状态：OPEN ｜ 作者：Troskiev83 ｜ 评论 13 ｜ 👍 9
- **为什么重要**：macOS 平台上的典型"假阳性"配额耗尽问题——本地跟踪数据显示用量极低，但 Claude Code 与 Claude Desktop 均报告会话限制 100% 并阻断使用，进一步指向服务端计量与客户端展示的脱节。
- 链接：https://github.com/anthropics/claude-code/issues/54750

### 3. #82506 — Max 会话额度"无消耗"却被扣光
- 状态：OPEN ｜ 作者：TchabaTech ｜ 评论 15 ｜ 👍 6
- **为什么重要**：7 月 30 日创建、仅几天内就获得 15 条评论，说明同类问题在新版本上仍在复现，并波及 Max 20x 等高阶套餐用户。
- 链接：https://github.com/anthropics/claude-code/issues/82506

### 4. #61012 — 无主动使用却反复触达使用上限（Pro 计划）
- 状态：OPEN ｜ 作者：8codesign-ship-it ｜ 评论 16 ｜ 👍 6
- **为什么重要**：将配额异常问题从 Max 扩展到 **Pro 计划**，Windows 平台用户同样中招，佐证该问题并非单一套餐或单一平台的偶发缺陷。
- 链接：https://github.com/anthropics/claude-code/issues/61012

### 5. #82074 — [安全] Chrome 版 OAuth 授权在全局登出后依然有效
- 状态：OPEN ｜ 作者：uningeningero ｜ 评论 13
- **为什么重要**：账户执行全局登出后，Claude for Chrome 的 OAuth 授权仍保持认证状态，且对会话控制不可见。与前序 #43801、#34198 相关但属 Chrome 特有缺口，涉及账户安全边界，建议高度重视。
- 链接：https://github.com/anthropics/claude-code/issues/82074

### 6. #52477 — 模型无视用户记忆中的代词设定，默认使用男性偏见
- 状态：OPEN ｜ 作者：raleighsedona ｜ 评论 10 ｜ 👍 2
- **为什么重要**：用户在 user memory 中明确指定了人称代词，模型仍覆写并默认采用男性称谓。该报告触及模型对齐与记忆系统的一致性问题，易引发信任危机。
- 链接：https://github.com/anthropics/claude-code/issues/52477

### 7. #76727 — 独立启动的多个 Claude Code 会话缺少跨会话协调机制
- 状态：OPEN ｜ 作者：wshallwshall ｜ 评论 10
- **为什么重要**：重度用户对同一仓库/工作树并行运行多个独立会话，目前只能靠自建 PreToolUse deny hook 兜底，且存在静默漏洞。社区对官方级会话协调原语的诉求正在上升。
- 链接：https://github.com/anthropics/claude-code/issues/76727

### 8. #81116 — 显示"100% used"但成本 $0.0000、token 消耗为 0
- 状态：OPEN ｜ 作者：hounkanrinbessan-blip ｜ 评论 7
- **为什么重要**：把用量计量 bug 量化到了极致——0 token、0 费用也触发 100% 上限。这是证明服务端计量逻辑存在明显误判的关键样本。
- 链接：https://github.com/anthropics/claude-code/issues/81116

### 9. #67441 — Fable 5 网络安全分类器误报，合法任务被强制切换模型
- 状态：OPEN ｜ 作者：vgukhov ｜ 评论 3 ｜ 👍 1
- **为什么重要**：在合法的发票处理开发中，Fable 5 分类器两次误判"网络安全违规"并自动切换到 Opus 4.8。安全分类器接入主工作流后的误报代价正在成为新痛点。
- 链接：https://github.com/anthropics/claude-code/issues/67441

### 10. #72680 — 零活动状态下陷入 5 小时重置循环 / 100% 用量枯竭
- 状态：OPEN ｜ 作者：reuseful ｜ 评论 5 ｜ 👍 1
- **为什么重要**：Windows 平台用户即使完全空闲也会周期性进入"配额清零—恢复—再清零"的循环，疑似与 5 小时滚动窗口重置逻辑缺陷强相关。
- 链接：https://github.com/anthropics/claude-code/issues/72680

> 另有 #83579（闲置时配额从 0% 跳至 50%/100%）、#77599（Windows 下子代理回复串线）、#75372（Agent 工具结果流中出现伪造的 `<system-reminder>` 注入）、#56117（Bash 白名单外命令未经授权直接执行）等亦值得留意。

---

## 重要 PR 进展

过去 24 小时内更新的 PR 仅 2 条，均为社区贡献：

### 1. PR #83374 — docs(plugin-dev)：补充 MessageDisplay 流式传输语义文档
- 作者：iCodeCraft ｜ 创建于 2026-08-02 ｜ OPEN
- **内容**：官方自带 Hook 开发技能中遗漏了 `MessageDisplay` 事件，本 PR 将其补充到技能描述、事件指南与速查表中，完善插件/钩子生态的文档缺口。
- 链接：https://github.com/anthropics/claude-code/pull/83374

### 2. PR #83738 — 修复 #83484：symlink 路径展开问题
- 作者：KrypticKode007 ｜ 创建于 2026-08-04 ｜ OPEN
- **内容**：修复 `claude install` 在部分 Linux 上创建 `~/.local/bin/claude` 时，将字面量 `%h` 而非展开后的 home 路径写入符号链接目标，导致链接失效的问题。
- 链接：https://github.com/anthropics/claude-code/pull/83738

---

## 功能需求趋势

从近 24 小时更新的 Issues 与 Release 中，可提炼出社区最关注的五个方向：

1. **用量计量与配额透明化（最强烈）**：大量 Issue 集中要求用量计算公开、可解释，包括服务端与客户端数据对齐、5 小时窗口重置逻辑可视化、配额消耗审计日志等。这是当前压倒性的第一诉求。

2. **多会话 / 多代理工作流协调**：#76727 提出官方跨会话协调原语，#77599 暴露并发子代理回复路由错误，说明用户正从"单会话"走向"多会话并行"的深度使用模式，需要官方提供会话编排能力。

3. **IDE 集成深化**：v2.1.221 新增 VSCode Focus view 是官方对这一方向的响应；同时 #45087（`/buddy` 接入 VSCode 原生扩展）、#42214（主题支持）等历史需求仍在社区中获得共鸣，IDE 体验与 CLI 的体验对齐是长期关注点。

4. **安全与权限细粒度控制**：OAuth 登出残留（#82074）、Bash 白名单绕过（#56117）、伪造 system-reminder 注入（#75372）等报告，推动社区对"最小权限、全局可控"安全模型的更高期待；Linux 凭据 `mask` 模式也表明官方正加强沙箱侧的防护。

5. **模型行为可靠性**：代词偏见（#52477）、任务时长高估并提前弃跑（#55576）、参数修改前不读取代码（#55581）、安全分类器误报（#67441）等，反映出用户对"模型自我纪律"和可预测性的要求，正从功能可用性升级为行为可信度。

---

## 开发者关注点

- **配额异常是第一大痛点**：Max 与 Pro 用户普遍遭遇"无操作也扣配额""0 token 显示 100%""5 小时重置循环"等问题（#16157、#61012、#82506、#54750、#81116、#83579、#72680）。由于涉及真金白银的订阅权益与开发中断，情绪最为激烈，官方需优先给出计量逻辑说明与补偿方案。

- **安全信任出现裂缝**：OAuth 登出后授权仍有效、Bash 未授权执行、工具结果流被伪造系统提示注入——这三类问题一旦被恶意利用，后果严重，社区期待更严格的默认安全策略与可审计性。

- **平台兼容性依旧拖后腿**：Windows 上的会话 UUID 复用、子代理回复串线、Stop hook 静默失败，以及 macOS 沙箱初始化失败（#55849）等平台特有缺陷频繁出现，用户希望跨平台行为保持一致。

- **插件与钩子生态尚不成熟**：插件子进程环境变量丢失（#41768）、钩子文档不完整（PR #83374 恰好是补文档）等问题，说明生态基础设施建设仍处于早期，社区对官方提供更完善、更稳定的扩展机制有明确需求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-08-04）

## 今日速览

- 过去 24 小时 Codex 发布了 4 个 Rust 版 alpha 版本（`rust-v0.147.0-alpha.1.2` → `alpha.7`），迭代节奏明显加快。
- Issue #14593 “Burning tokens very fast” 以 628 条评论、283 个 👍 持续霸榜，token 消耗与限速问题仍是社区最大痛点。
- 大量 PR 集中在 MCP 扩展协商、多智能体 v2 模型支持、密钥脱敏与权限传播，工程重点正转向 MCP/多 Agent 稳定性和安全加固。

## 版本发布

过去 24 小时共发布 4 个 Release：

- [`rust-v0.147.0-alpha.7`](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.7)
- [`rust-v0.147.0-alpha.6.1`](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.1)
- [`rust-v0.147.0-alpha.6`](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6)
- [`rust-v0.147.0-alpha.1.2`](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.2)

Release 描述未提供额外 changelog，可能需要关注对应 commit 或后续发布说明。

## 社区热点 Issues

### 1. [#14593 Burning tokens very fast](https://github.com/openai/codex/issues/14593)
- 评论 628 | 👍 283
- 商业版用户在 VS Code / Windows 环境下反映 token 消耗异常快。该问题评论量远超其他 Issue，说明大量用户正被限速或配额问题困扰。

### 2. [#9508 Make Weekly Limit Reset Deterministic](https://github.com/openai/codex/issues/9508)
- 评论 48 | 👍 32
- 用户希望每周限额重置时间可预期。当前重置机制不透明，导致 Pro 用户无法规划使用节奏。

### 3. [#17827 Customizable status line](https://github.com/openai/codex/issues/17827)
- 评论 38 | 👍 143
- 高赞功能需求：希望 TUI 底部状态栏可自定义，展示 token 用量、模型名、限速状态、git 分支等实时信息。

### 4. [#26234 Flatten MCP namespace tools for non-OpenAI Responses API providers](https://github.com/openai/codex/issues/26234)
- 评论 31 | 👍 41
- Ollama、LM Studio、OpenRouter、AWS Bedrock 等非 OpenAI Responses API 端点下，MCP 工具无法被模型调用。对第三方模型生态非常关键。

### 5. [#35097 gpt-5.6-luna is marked as MultiAgent V1, so V2 spawn_agent rejects it](https://github.com/openai/codex/issues/35097)
- 评论 15 | 👍 39
- `gpt-5.6-luna` 被标记为 MultiAgent V1，导致 V2 `spawn_agent` 拒绝调用。反映多智能体版本兼容策略仍混乱。

### 6. [#19262 Codex CLI 0.124.0 misreports `gh auth status` as invalid inside Codex session](https://github.com/openai/codex/issues/19262)
- 评论 18 | 👍 18
- CLI 在会话内误报 `gh auth status` 无效，影响依赖 GitHub CLI 的自动化流程。

### 7. [#21538 Windows Codex app should provide a non-Microsoft Store installer for enterprise environments](https://github.com/openai/codex/issues/21538)
- 评论 12 | 👍 23
- 企业环境普遍禁用 Microsoft Store，目前缺少独立 Windows 安装包，成为企业部署硬阻塞。

### 8. [#33306 Allow opt-in full 1.05M context and configurable compaction for GPT-5.6 Sol](https://github.com/openai/codex/issues/33306)
- 评论 5 | 👍 4
- 高级用户希望主动启用 GPT-5.6 Sol 完整 1.05M 上下文，并自定义自动压缩阈值，而不是由客户端强制管理。

### 9. [#30464 Codex App visible window causes sustained high GPU/WindowServer CPU and MacBook Air extreme heat](https://github.com/openai/codex/issues/30464)
- 评论 5 | 👍 4
- macOS 版 Codex 窗口常驻时导致高 GPU/WindowServer 占用和发热，性能问题影响日常使用。

### 10. [#34004 Pasting code snippets (especially diffs) now converts it to markdown, which completely messes up the text](https://github.com/openai/codex/issues/34004)
- 评论 6 | 👍 5
- 粘贴代码块或 diff 会被自动转成 Markdown，严重破坏内容。这是在 Code Review 场景中高频出现的 UX 回归。

## 重要 PR 进展

### 1. [#36910 Negotiate MCP extensions per app-server session](https://github.com/openai/codex/pull/36910)
- 为 app-server 会话增加 `extensions` 协商机制，支持结构化 MCP 扩展设置和 MCP App UI MIME 类型。

### 2. [#36908 Improve bearer token secret redaction](https://github.com/openai/codex/pull/36908)
- 改进 Bearer Token 脱敏，覆盖 URL-safe 字符以及此前无法识别的 key 前缀，避免凭据泄露。

### 3. [#36906 Preserve model providers when reloading v2 agents](https://github.com/openai/codex/pull/36906)
- 修复 v2 agent 重新加载时可能继承错误 model provider 的问题，确保模型和 provider 都从持久化线程状态恢复。

### 4. [#36892 Support leaf models in multi-agent v2](https://github.com/openai/codex/pull/36892)
- 允许 multi-agent v2 parent spawn 任何可见且未禁用多智能体支持的模型，旧模型继续保持 leaf 模式。

### 5. [#36901 Propagate updated permissions to review threads](https://github.com/openai/codex/pull/36901)
- 会话审批策略变更后，review 线程会继承最新的权限设置和审批人，避免权限不一致。

### 6. [#36900 Register app tools independently of the connector list](https://github.com/openai/codex/pull/36900)
- Codex Apps 的 MCP 工具注册改为以 apps 是否启用为判断条件，不再依赖 connector 是否在可访问列表中。

### 7. [#36895 Handle late MCP startup results after lag timeout](https://github.com/openai/codex/pull/36895)
- 修复 MCP 启动结果延迟时产生误导性中断警告的问题，更准确展示服务器的最终启动状态。

### 8. [#36893 Redact secrets from app-server command execution items](https://github.com/openai/codex/pull/36893)
- 对 app-server 命令执行项中的 `command` 和 `commandActions` 做密钥脱敏，防止敏感信息出现在客户端可见内容中。

### 9. [#36882 Preserve complete MCP namespace descriptions](https://github.com/openai/codex/pull/36882)
- 保留完整 MCP namespace 描述，工具规格描述上限从 1,000 bytes 提升到 512 KiB，并按 UTF-8 字符边界截断。

### 10. [#36857 Support custom tools in namespaces](https://github.com/openai/codex/pull/36857)
- 允许 namespace 工具规格中同时包含 custom freeform tools 和 function tools，并支持命名空间下的自定义工具搜索与调用。

## 功能需求趋势

从今日活跃 Issues 中可以看到社区最关注的几个方向：

- **Token 计费与限速透明化**：多个高赞 Issue 要求明确每周限额重置时间、优化 token 消耗展示，并解决“token 快速烧尽”的问题。
- **MCP 与第三方模型兼容性**：用户希望 MCP 工具在 Ollama、OpenRouter、Bedrock 等非 OpenAI 端点下也能正常工作。
- **多智能体（Multi-Agent）模型策略**：围绕 `gpt-5.6-luna`、`gpt-5.6-sol` 等新模型的 V1/V2 兼容性，以及是否允许叶子模型 spawn，讨论非常活跃。
- **Windows 桌面端与企业部署**：多项需求集中在非 Microsoft Store 安装包、企业环境部署、多显示器窗口行为等。
- **TUI/CLI 可定制性**：自定义状态栏、CLI 自动更新等增强需求受到关注。
- **资源占用与性能优化**：macOS 高发热、GPU 占用过高以及上下文压缩行为不可控等问题持续被反馈。

## 开发者关注点

- **Token 消耗和限速**是当前社区情绪最激烈的区域。`#14593` 的 628 条评论说明大量用户正在为 token 快速消耗和 rate limit 困扰。
- **Windows 桌面端稳定性**是另一大高频痛点：Microsoft Store 安装失败、更新后 Remote Control 失效、窗口跨屏溢出、本地状态断电丢失等问题密集出现。
- **MCP 工具命名空间** 在非 OpenAI API 下不可调用，直接影响本地模型和第三方网关的使用体验。
- **多智能体 v2 的模型资格判定**不够清晰，开发者希望有更明确、可预测的模型支持和 provider 保留策略。
- **上下文压缩（compaction）** 行为不透明，用户希望获得手动控制和更细粒度的配置。
- 安全侧，社区和官方 PR 都高度重视 **密钥脱敏、权限继承与敏感信息过滤**，说明 Codex 正在加强对企业场景的安全保障。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-04

> 数据来源：github.com/google-gemini/gemini-cli | 本期时间窗口：2026-08-03 ~ 2026-08-04

## 📌 今日速览

过去 24 小时无新版本发布。社区讨论聚焦在子代理可靠性：MAX_TURNS 被误报为 GOAL 成功（#22323）、通用代理无限挂起（#21409）、shell 命令执行完成后卡在等待输入（#25166），这三个 P1 问题均处于维护者重测/跟踪中。PR 侧亮点则是 SGLang/本地 OpenAI 兼容端点支持（#28681）、Gemini 3.6 Flash 与 3.5 Flash-Lite 新模型配置（#28673），以及一批认证、上下文损坏与 MCP 安全修复，整体呈现“稳定性修复 + 本地化部署”的双主线。

## 🔥 社区热点 Issues

### 1. 子代理达到 MAX_TURNS 后误报为 GOAL 成功 — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **优先级**：P1 | 评论 12 | 👍 2
- `codebase_investigator` 子代理在尚未做任何分析、仅因 MAX_TURNS 被打断时，仍向主代理报告 `status: "success"` / `Termination Reason: "GOAL"`。这比直接失败更危险，会误导主代理做出“任务已完成”的错误决策。

### 2. 通用代理（generalist agent）无限挂起 — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **优先级**：P1 | 评论 8 | 👍 8
- 用户反馈从创建文件夹这类简单操作到复杂任务，只要委派给 generalist 就会永久卡住，最长等待 1 小时无结果；禁止模型使用子代理后问题消失。8 个 👍 说明受影响面不小。

### 3. Shell 命令执行完成后卡在 “Waiting input” — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **优先级**：P1 | 评论 4 | 👍 3
- 即使是最简单的、不会等待输入的 CLI 命令，执行完毕后 Gemini CLI 仍将其显示为活动状态并标注“Awaiting user input”。这个问题会卡死自动化流程和批处理脚本。

### 4. Wayland 下浏览器子代理失败 — [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **优先级**：P1 | 评论 4 | 👍 1
- 浏览器子代理在 Wayland 会话中直接以 GOAL 失败终止。Linux 桌面环境下的兼容性问题，说明 browser agent 的环境适配仍需加固。

### 5. Auto Memory 先发送内容再脱敏，日志可能泄露技能内容 — [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
- **优先级**：P2 / Security | 评论 4
- 自动记忆先把本地 transcript 全文送入模型上下文，然后才靠 prompt 要求“脱敏”秘钥；同时日志可能输出已加载技能的内容。内容先进上下文再脱敏，在隐私设计上是反的，企业用户需要重点关注。

### 6. Auto Memory 对低信号会话无限重试 — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
- **优先级**：P2 | 评论 5
- 只有成功读取 transcript 的会话才会被标记为已处理；若抽取代理判断某个会话“低信号”而不读取，该会话会反复出现在后续扫描中，持续消耗配额与推理资源。

### 7. 模型几乎不会自主使用自定义 skills 和 sub-agents — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **优先级**：P2 | 评论 6
- 用户内置了 gradle/git 等技能及其描述，但 Gemini 在完全相关的场景下也不会主动调用，必须显式命令才执行。这削弱了自定义工作流和 MCP 生态的价值。

### 8. 工具数量过多时直接触发 400 错误 — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)
- **优先级**：P2 | 评论 3
- 启用工具数量较大时 API 直接返回 400。社区期望的是按当前任务动态裁剪工具范围，而不是把全部工具一次性塞进上下文。

### 9. v0.33.0 起子代理在“已禁用”配置下仍会运行 — [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)
- **优先级**：P2 | 评论 3
- 用户在配置中将 agents mode 全部设为 disabled，更新到 v0.33.0 后 generalist 等子代理仍然被拉起。配置不生效会引发安全与合规担忧。

### 10. 代理应停止/劝阻破坏性行为 — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)
- **优先级**：P2 | 评论 3 | 👍 1
- 在复杂 git 操作、分支管理、数据库维护等场景下，模型会使用 `git reset`、`--force` 等高危指令。社区建议在模型指令层面增加安全兜底，优先推荐非破坏性方案。

## 🔧 重要 PR 进展

### 1. 支持 SGLang 与本地 OpenAI 兼容端点 — [#28681](https://github.com/google-gemini/gemini-cli/pull/28681)
- 新增对 SGLang 和本地 OpenAI 兼容端点的支持，允许 Gemini CLI 接入自托管模型后端，是本地化部署方向的重要基础能力。已标记 P1、size/l。

### 2. 添加 Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置 — [#28673](https://github.com/google-gemini/gemini-cli/pull/28673)
- 在 `packages/core` 中为 Gemini 3.6 Flash / 3.5 Flash-Lite 预置模型定义、能力标记（thinking / multimodalToolUse）与别名，为 CLI 后续默认识别和切换新模型做好铺垫。

### 3. 修复上下文损坏与配额回退后的“自动补全”污染 — [#28671](https://github.com/google-gemini/gemini-cli/pull/28671)
- 对工具执行被中断、用户 ESC 打断或配额回退时的历史记录做防御性加固，避免模型产生“自动补全前缀”式错误继续生成。

### 4. 修复 /compress 会话重载失败与配额回退丢失工具响应 — [#28672](https://github.com/google-gemini/gemini-cli/pull/28672)
- 解决 `/compress` 后 `Failed to load resumed session data from file` 的错误，以及配额回退导致的 tool response 丢失问题。长会话用户会直接受益。

### 5. MCP 扩展同意提示显示完整服务器配置，加固 stdio env — [#28664](https://github.com/google-gemini/gemini-cli/pull/28664)
- 之前扩展更新同意弹窗只展示 command/args/httpUrl，现在把 `env`、`cwd`、`headers` 一并展示和比较；同时对 stdio 进程环境做了加固，降低配置注入面。

### 6. IdeClient 增加 3 秒超时，避免 TUI 卡在 “Initializing...” — [#28677](https://github.com/google-gemini/gemini-cli/pull/28677)
- `IdeClient.getInstance()` 在进程树遍历卡住时会在 3 秒后回退到 no-IDE 客户端，修复裸终端/SSH 下启动挂起的问题。

### 7. 重新启动的子进程正确转发终止信号 — [#28676](https://github.com/google-gemini/gemini-cli/pull/28676)
- `relaunchAppInChildProcess` 现在会把 SIGTERM/SIGHUP/SIGINT/SIGQUIT 等信号转发给子进程，解决 `kill -TERM <bootstrap-pid>` 时子进程变成孤儿的问题。

### 8. 使用 GEMINI_API_KEY 认证时清除陈旧 Authorization 头 — [#28546](https://github.com/google-gemini/gemini-cli/pull/28546)
- 修复当使用 API Key 认证时仍残留旧 `Authorization` 头，导致 Google API 返回 401 `ACCESS_TOKEN_TYPE_UNSUPPORTED` 的问题（Fixes #28538）。

### 9. 拒绝 A2A 远程代理的 OpenID Connect 认证 — [#28680](https://github.com/google-gemini/gemini-cli/pull/28680)
- 原本声明支持 OIDC 的远程 A2A agent 会在正式运行时才报错；本 PR 改为在校验阶段直接拒绝，避免“配置验证通过、运行时失败”的迷惑行为（Fixes #28651）。

### 10. 修复 OAuth 回调超时泄漏与资源回收 — [#28678](https://github.com/google-gemini/gemini-cli/pull/28678)
- 将 OAuth callback server 的 settle 与资源清理集中化，防止超时回调残留和内存泄漏（Resolves #28652）。

## 📊 功能需求趋势

- **本地/自托管模型接入**：SGLang 与本地 OpenAI 兼容端点支持（[#28681](https://github.com/google-gemini/gemini-cli/pull/28681)）表明社区希望 CLI 不被锁定在单一云厂商，未来可能成为配置项中的“一等公民”。
- **新模型快速适配**：Gemini 3.6 Flash / 3.5 Flash-Lite 的配置 PR（[#28673](https://github.com/google-gemini/gemini-cli/pull/28673)）显示官方正在为下一代小模型做铺垫，开发者可期待更低延迟和成本档位。
- **代理结果可信度与可观测性**：多个 P1 Issue（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）共同指向“主代理无法得知子代理真实状态”。子代理轨迹需要暴露到 `/chat share`、bugreport 等机制中。
- **工具范围（Tool Scoping）与上下文管理**：工具数量过多触发 400 错误（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）、AST 感知的文件读取与代码库映射（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)）都在探索如何用更少的 token、更精准的工具调用完成分析。
- **自动记忆（Auto Memory）的安全与效率**：确定性脱敏、低信号会话隔离、无效 patch 隔离（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）是记忆功能走向可用的必经之路。
- **终端/UI 稳定性**：shell 命令卡在 Waiting input（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）、外部编辑器退出后渲染损坏（[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)）、终端 resize 闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）等 Issue 持续被追踪，开发者对交互体验的容忍度很低。

## 💡 开发者关注点

- **“假成功”比失败更可怕**：子代理把 MAX_TURNS 说成 GOAL success（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)），主代理会误以为任务已完成，无法触发重试或补偿逻辑——这是对 Agent 编排稳定性影响最大的 bug。
- **代理卡死/挂起是最高频痛点**：generalist 挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）、shell 等待输入（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）、IdeClient 初始化卡住（[#28677](https://github.com/google-gemini/gemini-cli/pull/28677)），多个 P1 都集中在“不结束的假死状态”。
- **配置没被遵守**：子代理在 disabled 状态下仍运行（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）、browser agent 忽略 settings.json 的 maxTurns（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、symlink 自定义 agent 不生效（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）。开发者希望配置是“契约”而不是“建议”。
- **隐私与安全是底线**：Auto Memory 把内容先发进模型上下文再脱敏、日志可能输出技能内容（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)），加上 OAuth 超时泄漏（[#28678](https://github.com/google-gemini/gemini-cli/pull/28678)）、A2A OIDC 校验缺失（[#28680](https://github.com/google-gemini/gemini-cli/pull/28680)）等安全问题，正在成为企业采用的硬门槛。
- **自定义技能/子代理的价值未释放**：模型不会主动调用用户精心配置的技能（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)），高级用户投入的配置资产被闲置，社区期望通过行为级 eval 来约束模型“按需使用工具”。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-04）

## 今日速览

1. v1.0.78 与 v1.0.78-3 先后发布；后者新增实验性 `/new-worktree` 命令，可创建新 worktree 并启动全新会话。
2. 社区对「自定义主题」「会话分叉」「插件自动更新」的呼声持续走高，多个高赞 Issue 表达了对 CLI 个性化与工作流灵活性的期待。
3. 今日新增一批 triage 类 Issue，集中在企业级 MCP 配置、ACP 成本/用量可观测性和终端序列恢复问题，企业治理与自动化集成方向成为关注焦点。


## 版本发布

### v1.0.78
- **Timeline 工具耗时显示**：每次工具调用后右对齐显示耗时，超过 5 秒的调用带实时计时动画；默认开启，可用 `/settings showToolDurations` 关闭。
- **首方插件自动更新**：会话启动时自动将 first-party 插件更新至最新版本，省去手动维护。
- 剩余公告内容被截断（“Add the ex-”），未能确认完整功能项。

### v1.0.78-3
- **新增**：实验性 `/new-worktree` 命令，创建新 Git worktree 并直接在其中开启新会话，适合在隔离环境中并行处理任务。
- **改进**：交互式 shell 快捷键在 `$` 待命状态下按 Enter 即可启动，并增加内联提示。
- **修复**：Copilot 登录在本地桌面环境默认改为浏览器 OAuth 流程。


## 社区热点 Issues

### 1. 自定义主题支持（高赞 + 长期讨论）
[#1504](https://github.com/github/copilot-cli/issues/1504) · OPEN · 评论 8 · 👍 23
用户希望 `/theme` 在 `auto/dark/light` 之外支持创建可分享的自定义主题（如 JSON 配置）。8 条评论中讨论了主题文件格式、作用域范围等细节，是当前个性化方向最具代表性的需求。

### 2. 会话分叉 —— 分支并行会话
[#1697](https://github.com/github/copilot-cli/issues/1697) · OPEN · 评论 3 · 👍 25
多步任务中常遇到一个会话内出现多个独立子问题的情况，现有机制下用户必须选一条线执行或手动切换会话，容易丢失上下文。该提案希望支持从任意节点分叉出新会话并共享上下文，获 25 个 👍。

### 3. 插件自动更新（已获官方回应）
[#1709](https://github.com/github/copilot-cli/issues/1709) · CLOSED · 评论 1 · 👍 29
请求为插件增加自动更新机制。结合 v1.0.78 公告「First-party plugins automatically update to the latest version at session start」，该需求已得到部分实现，但第三方插件是否同样适用仍需确认。

### 4. 插件启用/禁用开关
[#2714](https://github.com/github/copilot-cli/issues/2714) · OPEN · 评论 2 · 👍 11
现有 `copilot plugin` 只支持安装、列出、卸载和更新，无法快速禁用插件。Gemini CLI 和 Claude Code 已支持类似开关，社区期待补齐这一基础能力。

### 5. WSL2 下 Ctrl+H 被误判为 Ctrl+Backspace
[#4328](https://github.com/github/copilot-cli/issues/4328) · OPEN · 评论 5 · 👍 0
`/help` 文档写明 `ctrl+h` 应删除前一个字符，但在 WSL2 + Windows Terminal 环境下实际表现为删除整个单词。排查指向 `WT_SESSION` 环境变量泄漏导致键位映射判断错误，影响 WSL2 用户的日常编辑操作。

### 6. 插件技能作为 slash command 回归
[#4361](https://github.com/github/copilot-cli/issues/4361) · OPEN（triage）· 评论 1
桌面端调用 `/plugin-skill` 类命令时，从重写为自然语言退化成了直接发起 `session.commands.invoke` RPC，导致技能无法正常触发。属于 1.0.78 回归的新增报告，需官方尽快确认。

### 7. 企业配置策略 fail-closed 阻断 MCP
[#4349](https://github.com/github/copilot-cli/issues/4349) · OPEN · 评论 1
GHE 托管策略中 `permissions.disableBypassPermissionsMode` 合法枚举值为 `"enable"`，但 CLI 校验器仅接受 `"disable"`，导致策略获取失败并连带禁用所有本地/自定义 MCP 服务器。企业用户受影响面较大。

### 8. macOS 企业 MCP 注册表 TLS 校验失败
[#4364](https://github.com/github/copilot-cli/issues/4364) · OPEN（triage）· 评论 0
Copilot CLI 1.0.78 在 macOS 下访问使用私有 CA 证书的企业 MCP 注册表时，rustls 报错 `-67901`（certificate is not standards compliant），且 fail-closed 阻断所有 MCP 请求。企业自建 CA 场景下无法使用。

### 9. ACP 缺少成本字段
[#4363](https://github.com/github/copilot-cli/issues/4363) · OPEN（triage）· 评论 0
1.0.78 的 `copilot --acp` 已能提供 token 用量和上下文窗口大小，但会话更新对象中缺少成本（cost）字段。依赖 ACP 做费用追踪的自动化工具链无法直接使用。

### 10. 禁用 Memory 后 Subconscious 仍持续运行
[#3859](https://github.com/github/copilot-cli/issues/3859) · CLOSED · 评论 2
即使通过 `/memory off` 和 `settings.json` 双重禁用内存，`copilot_cli_subconscious` 后台 agent 仍会在每个 prompt 启动。该问题影响隐私敏感场景，用户希望有彻底关闭入口。


## 重要 PR 进展

过去 24 小时仅监测到 1 条 PR，且信息匮乏：

### #4355 Merge
[#4355](https://github.com/github/copilot-cli/pull/4355) · OPEN · 创建于 08-04 · 作者 XavierMP14 · 无描述
标题仅为 “Merge”，未附带说明文字。需查看 diff 后确认是否有实质变更，目前无法评估内容。


## 功能需求趋势

| 方向 | 相关 Issue | 社区诉求 |
|---|---|---|
| 可定制 UI | #1504、#2830 | 支持自定义主题/配色（不限 auto/dark/light），并可分享配置文件 |
| 会话管理 | #1697、#1947、#2019、#1343 | 会话分叉、云同步跨设备、删除会话、远程心跳/状态上报 |
| 插件系统 | #1709、#2714 | 插件自动更新、启用/禁用开关，降低手动管理成本 |
| ACP 可观测性 | #4174、#4363 | 在协议层暴露 token/context/cost 用量，便于外部工具集成 |
| 企业治理 | #4349、#4364 | 私有 CA、策略枚举值兼容性，确保企业环境可用 |
| 模型灵活性 | #4139 | 支持 BYO 模型/自定义 LLM 端点（Azure OpenAI、本地模型等） |
| 终端体验 | #4352、#4362 | 允许禁用 OSC 9;4 进度条；异常退出时恢复终端焦点报告 |


## 开发者关注点

**平台兼容性**
- WSL2 下 `Ctrl+H` 键位被误判（#4328）；原生 Windows 下 DA1 转义序列泄漏进输入框（#4267）
- Windows 原生运行时自 2026-05 起持续崩溃，多版本未修复（#4026）

**终端卫生**
- 异常退出后 `?1004` 焦点报告未恢复，逃逸序列泄漏到父 shell（#4362）
- OSC 9;4 进度条无关闭开关（#4352）
- 换行 URL 只有首行可点击（#4348）

**企业网络与 MCP**
- 私有 CA 证书在 macOS 上被 rustls 拒绝，阻断企业 MCP 注册表（#4364）
- 管理策略枚举校验过严，`"enable"` 被误判导致 MCP 全禁用（#4349）
- Web Search 工具在 MCP 下报 Streamable HTTP 错误（#2692）

**插件与技能**
- 插件技能作为 slash command 的使用方式不稳定（#4361、#4048）
- 缺少启用/禁用开关和可靠的自动更新机制（#2714、#1709）

**会话与钩子**
- `sessionStart` 钩子在 `/new` 和 `/clear` 时不会触发，与命名语义不符（#4365）
- 缺少会话删除命令（#2019），云同步会话（#1947）仍是中长线需求

**搜索结果可靠性**
- 内置 `web_search` 在检索无结果时返回「看似合理但完全捏造」的答案，存在幻觉风险（#4093）

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Kimi Code CLI 社区动态日报 — 2026-08-04

> 数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

### 今日速览

今日无新版本发布，社区动态集中于 ACP 协议能力扩展与稳定性的讨论：一个关于跨会话 Memory System 的长期 Issue（#1283）重新活跃。开发方面，ACP 相关的模型发现/切换（#2583）和权限模式切换（#2364）成为当前协议演进的重要方向，同时 Windows 平台输入法字符重复和流式生成挂起等稳定性问题也集中浮现。

---

### 版本发布

过去 24 小时无新版本发布。

---

### 社区热点 Issues

> 过去 24 小时内更新的全部 5 个 Issue 如下。

#### 1. [Feature Request] Memory System — Persistent context across sessions（#1283）
- **作者**: CatKang | **更新**: 2026-08-04 | **评论**: 17 | 👍: 0
- **摘要**: 建议实现跨会话的 Memory System，让 CLI 能自动记忆项目模式、用户偏好等上下文，并支持 AI 自动管理与用户手动定义两种记忆模式。
- **重要性**: 这是解决 Agent 工具"跨会话失忆"痛点的核心需求。创建于 2 月底，今日仍被更新，且已有 17 条评论，说明社区讨论热度较高，是长期关注的功能方向。
- **链接**: [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

#### 2. Bug: Web UI "Connecting to session..." infinite spinner（#2573）
- **作者**: belenov-maker | **更新**: 2026-08-03 | **评论**: 1 | 👍: 0
- **摘要**: 在 `kimi web`（Technical Preview）中切换会话时，页面无限显示"Connecting to session..."加载状态。环境为 kimi-cli 1.48.0 / macOS 26.4 / Chrome 150。
- **重要性**: Web UI 是正在快速迭代的技术预览功能，会话切换的核心交互被阻塞，属于明显影响体验的缺陷。
- **链接**: [Issue #2573](https://github.com/MoonshotAI/kimi-cli/issues/2573)

#### 3. Bug: Thai 和其他 IME 字符在 Windows 输入重复（#2584）
- **作者**: mgprona | **创建/更新**: 2026-08-04 | **评论**: 0
- **摘要**: Windows 11 环境下，使用泰语等基于 IME 的输入法在提示符中输入时，字符会出现重复。
- **重要性**: 这是一个典型的本地化输入缺陷，影响非英文用户的基础输入体验，尤其是泰语、中日韩等 IME 用户。
- **链接**: [Issue #2584](https://github.com/MoonshotAI/kimi-cli/issues/2584)

#### 4. feat(acp): advertise available models and support mid-session model switching（#2583）
- **作者**: tizerluo | **创建/更新**: 2026-08-04 | **评论**: 0
- **摘要**: 当从 ACP 客户端（如 Happy Coder、Zed）驱动 `kimi acp` 时，客户端无法发现可用模型列表，也无法在会话中途切换模型。建议在 `session/new` 中通告模型列表，并支持 `current_model_update` 等协议消息。
- **重要性**: 这是 ACP 集成场景下的关键能力缺口。模型发现与切换是 ACP 客户端实现模型选择 UI 和管理会话的基础，直接影响 Kimi 作为后端模型在第三方工具中的可用性。
- **链接**: [Issue #2583](https://github.com/MoonshotAI/kimi-cli/issues/2583)

#### 5. Bug: CLI stream hangs indefinitely during generation（#2582）
- **作者**: bobtu56 | **创建**: 2026-08-03 | **更新**: 2026-08-03 | **评论**: 0
- **摘要**: 使用 Moonshot Platform API 和 `kimi-k2.7-code` 模型，在 Windows 上生成过程中 CLI 输出流无限挂起，导致会话无法继续使用（版本 0.31.1）。
- **重要性**: 生成流挂起是核心路径上的严重稳定性问题，会使会话完全不可用。社区尚未收到回复，值得尽快修复。
- **链接**: [Issue #2582](https://github.com/MoonshotAI/kimi-cli/issues/2582)

---

### 重要 PR 进展

> 过去 24 小时内更新的全部 3 个 PR 如下。评论数未在数据源中提供。

#### 1. fix(shell): adapt timeouts for long commands（#2200）
- **作者**: he-yufeng | **创建**: 2026-05-08 | **更新**: 2026-08-04
- **功能摘要**: 针对 git submodule cleanup、git clone/fetch、包安装和构建等常见的慢命令模式，自动扩展 shell 超时时间；普通命令继续保持 60 秒默认超时；如果调用方提供了更大的显式超时则优先保留。
- **重要性**: 解决了自动化任务中长耗时命令被过早中断的痛点，有助于提升 Kimi CLI 在真实项目中执行操作（尤其是安装依赖和大型 git 操作）的稳定性。
- **链接**: [PR #2200](https://github.com/MoonshotAI/kimi-cli/pull/2200)

#### 2. feat(cli): set AI_AGENT for subprocesses（#2585）
- **作者**: complynx | **创建/更新**: 2026-08-04
- **功能摘要**: 为 pip/uv 安装以及独立二进制入口点启动的子进程统一设置 `AI_AGENT=kimi` 环境变量；同时保留包装器或编排器传入的显式非空值，并覆盖了缺失、空值和显式标记三种情况。
- **重要性**: 子进程环境变量是工具链和 CI/CD 编排中的常见约定，此改动有助于下游进程识别当前 AI Agent 身份，为脚本和框架提供更一致的集成信号。
- **链接**: [PR #2585](https://github.com/MoonshotAI/kimi-cli/pull/2585)

#### 3. feat(acp): support permission mode switching（#2364）
- **作者**: huntharo | **创建**: 2026-05-24 | **更新**: 2026-08-04
- **功能摘要**: 为 Kimi ACP 会话增加协议层面的权限模式切换能力，PR 中通告默认权限，并且叠加在 #2363 之上（需按顺序合并）。
- **重要性**: 权限模式切换是 ACP（Agent Client Protocol）成熟度的重要一环，能让客户端在会话过程中动态调整 AI 的操作权限范围，适合需要精细权限控制的集成场景（如移动端、编辑器插件）。
- **链接**: [PR #2364](https://github.com/MoonshotAI/kimi-cli/pull/2364)

---

### 功能需求趋势

综合当前 Issues 与 PR，社区最关注的功能方向集中在以下四类：

1. **会话记忆与持久化（Memory System）** — #1283 明确提出了跨会话记忆的完整方案，包括自动记忆与手动指令记忆。这是提升 AI 助手连续工作能力的关键方向，社区讨论热度高。
2. **ACP 协议完善与第三方集成** — 包括模型列表发现、会话中模型切换（#2583）以及权限模式切换（#2364）。这些能力直接决定 Kimi Code CLI 在 Zed、移动应用等 ACP 客户端中的可用性，是当前开发的核心重点。
3. **Web UI / 交互界面稳定性** — #2573 表明 Web UI 仍是新增能活跃、但稳定性问题较多的部分，存在会话切换加载卡死等明显缺陷。
4. **本地化与输入法支持** — #2584 反映了非英文用户在 Windows 平台上的输入兼容问题，属于国际化（i18n）层面的需求。

---

### 开发者关注点

从反馈中可提炼出以下几点高频需求和痛点：

- **生成稳定性**：如 #2582 所述，生成过程无限挂起会让会话完全不可用。此类问题在 Windows 上较为集中，对日常使用影响极大。
- **连接与会话恢复**：Web UI 的无限 spinner（#2573）暴露了会话切换时的连接健壮性问题，需要更清晰的错误提示或超时重试机制。
- **第三方客户端集成体验**：开发者希望 ACP 客户端能主动发现模型、中途切换模型，并获得会话级权限控制。由于 K2.7 等模型仍在快速迭代，模型列表的动态发现比硬编码更符合需求。
- **子进程环境一致性**：PR #2585 说明开发者很关注 CLI 在自动化/编排场景下如何正确、透明地传递环境变量，以便下游工具识别 AI Agent。
- **输入法兼容性**：对 IME 字符重复的反馈表明，在 Windows 上保持正确的终端输入处理仍是不可忽视的问题，尤其对非英文用户而言。
- **长期项目下 shell 超时**：PR #2200 侧面反映了在大型仓库中执行克隆、包安装等操作时，固定 60 秒超时不够用，社区需要更智能的超时策略。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode 社区动态日报 — 2026-08-04

### 1. 今日速览

昨日连续发布 v1.18.12 与 v1.18.13 两个修复版本，分别解决了 Azure GPT-5.5+ 推理请求失败和桌面端 RTL 布局问题。社区最集中的反馈是 DeepSeek v4 Flash 在 OpenCode Go 通道大规模不可用（HTTP 500/403、连接中断、空白响应），以及模型在「Thinking」状态卡死的问题，多个 issue 在一天内涌入。此外，一款「OpenCode Go 套餐使用异常」的 issue 也引发了大量讨论。

---

### 2. 版本发布

**v1.18.13**
- **TUI**：修复 GitHub pull request 评审上下文未包含 PR 编号和 URL 的问题。
- **Desktop**：修复多个 RTL（从右到左）布局问题，覆盖标签页、抽屉、缩放和标题栏交互；同时修复方向图标等共享的 RTL UI 行为。

**v1.18.12**
- **Core**：修复 Azure GPT-5.5+ 在启用推理时完成请求失败的问题（感谢 @frederiknsgo）。
- **Desktop**：减少草稿包含大型粘贴图片或附件时的编辑器延迟；修复项目搜索仅匹配最近 5 个项目的问题。

---

### 3. 社区热点 Issues

**#40471 — OpenCode Agents 不回复**
作者：Shan7Usmani | 评论：11 | 👍：0
Agent 卡在「思考」状态且无任何响应，是当日报告最多的症状之一。
https://github.com/anomalyco/opencode/issues/40471

**#39829 — [Feature] 为 opencode-go 上的 deepseek-v4-flash 支持 Responses API**
作者：YiRan0 | 评论：10 | 👍：22
DeepSeek 官方 deepseek-v4-flash-0731 检查点原生支持 OpenAI Responses API，社区希望 OpenCode Go 能同步支持。
https://github.com/anomalyco/opencode/issues/39829

**#4232 — OpenCode 显示未配置且 LM Studio 中不存在的模型**
作者：jschmdt | 评论：10 | 👍：10
即使用户配置 LM Studio 并清理本地配置，模型选择器中仍会出现无效模型。已关闭但讨论持续，反映配置过滤逻辑仍有缺陷。
https://github.com/anomalyco/opencode/issues/4232

**#34087 — OpenCode 桌面端不再返回响应**
作者：code-infected | 评论：7 | 👍：3
输入 → 思考 → 无输出的老问题，在 1.16.2 版本仍在发生，go 和 zen 模型均受影响。
https://github.com/anomalyco/opencode/issues/34087

**#40480 — [Bug] deepseek-v4-flash 返回 HTTP 500 而 mimo-v2.5 正常**
作者：nonearth | 评论：6 | 👍：3
同一 API 密钥、端点和网络下，mimo-v2.5 返回 200，deepseek-v4-flash 却持续 500，指向服务端问题而非用户配置。
https://github.com/anomalyco/opencode/issues/40480

**#40006 — opencode-go 套餐使用异常**
作者：ZXH109030 | 评论：6 | 👍：0
Windows 桌面上多个 opencode-go 模型可见但调用失败，如 gpt-5.6-luna 报「模型在你的地区不可用」，与套餐地区限制和模型可见性逻辑相关。
https://github.com/anomalyco/opencode/issues/40006

**#40465 — deepseek-v4-flash 在 opencode-go 上响应前断开连接**
作者：MyGO-Mujica | 评论：4 | 👍：4
上游在返回任何 HTTP 响应前就关闭 TCP 连接，导致每次请求挂起直到 30s 超时，而 pro 模型在同一端点可正常使用。
https://github.com/anomalyco/opencode/issues/40465

**#40460 — [needs:compliance] DeepSeek v4 Flash 模型不响应**
作者：mohmmed-afnan | 评论：4 | 👍：5
重启软件、重启电脑、新建会话均无效，模型始终停留在「Thinking...」，该 issue 被标记为合规审查。
https://github.com/anomalyco/opencode/issues/40460

**#40483 — [Bug] DeepSeek v4 Flash Free 在 Windows 11 桌面端返回空白响应**
作者：yugdabgar21 | 评论：4 | 👍：0
界面显示思考动画并播放完成音效，但响应区完全空白、UI 像挂起一样无法继续交互。
https://github.com/anomalyco/opencode/issues/40483

**#32366 — [Bug] 流错误后 UI 无限卡在「thinking」**
作者：Superissac | 评论：5 | 👍：0
流式错误发生时不显示错误提示、无状态恢复，会话直接不可用，只能重启应用。已被社区多次关联为同类问题的根因。
https://github.com/anomalyco/opencode/issues/32366

---

### 4. 重要 PR 进展

**#40487 — fix(core): 省略遗留 provider 别名**
重构 models.dev 目录：移除 Azure Cognitive Services 和 Google Vertex Anthropic 独立 provider，统一收录到 Azure/Google Vertex 下，并添加回归测试。
https://github.com/anomalyco/opencode/pull/40487

**#40477 — fix(app): 项目选择器回退到目录列表**
修复 Web 应用首次使用或从 $HOME 启动时「打开项目」对话框被完全阻塞的问题，Closes #37005。
https://github.com/anomalyco/opencode/pull/40477

**#40432 — fix(session): 跨 ID 翻转的消息排序**
按持久化创建时间排序会话消息，ID 仅作为同毫秒级 tie-breaker，并添加了 48 位时间戳边界前后的 rollover 测试。
https://github.com/anomalyco/opencode/pull/40432

**#40436 — fix(opencode): 刷新 MiniMax M3 定价快照**
将 MiniMax M3 的定价更新为统一的输入/输出/缓存读取费率，移除过时的上下文附加费率层级。
https://github.com/anomalyco/opencode/pull/40436

**#40472 — fix(opencode): 保留技能斜杠命令的用户请求**
修复 `/skill-name user request...` 中用户请求文本未被正确保留的问题，Closes #40463。
https://github.com/anomalyco/opencode/pull/40472

**#16513 — feat(console): 添加 go 用量端点**
新增 `/zen/go/v1/usage` API 端点，提供与 Zen 控制台一致的 opencode-go 使用量数据，Closes #16017。
https://github.com/anomalyco/opencode/pull/16513

**#40458 — fix(opencode): 在 Node 服务端构建中定义 OPENCODE_VERSION**
修复 Node 服务端构建缺失编译时常量导致 InstallationVersion 相关功能异常的问题，连带关闭 6 个相关 issue。
https://github.com/anomalyco/opencode/pull/40458

**#40371 — feat(vcs): 发布分支更新**
将分支元数据统一管理，通过 LocationWatcher 监听 Git HEAD 和 Mercurial .hg/branch 变化，并通过 vcs.branch 总线事件发布更新。
https://github.com/anomalyco/opencode/pull/40371

**#40450 — fix(acp): 在 ACP 用量中包含缓存写入**
ACP 上下文用量统计新增缓存写入 token，并统一两条服务路径的 token 计算逻辑，附带回归测试。
https://github.com/anomalyco/opencode/pull/40450

**#40327 — feat(plugin): 添加会话 HTTP 中间件**
为插件系统新增 `ctx.session.hook("http", ...)` 钩子，暴露原始 HTTP 状态码，让插件可在 provider 错误分类前拦截请求。
https://github.com/anomalyco/opencode/pull/40327

---

### 5. 功能需求趋势

- **DeepSeek v4 Flash 全面支持**：社区强烈要求 opencode-go 完整支持 DeepSeek V4 Flash（包括 Responses API、稳定连接、正确的用量统计），这是当前最集中的功能诉求。
- **套餐/用量透明化**：多个 issue 希望 opencode-go 套餐支持查看用量和额度限制，并澄清「Free usage exceeded」的触发机制，与此配套的 usage API 也已有 PR 在推进。
- **模型管理精细化**：要求模型选择器只显示实际可用的模型（如修复 LM Studio 场景），并对地区不可用的模型（如 gpt-5.6-luna）给出明确提示而非简单报错。
- **会话稳定性与恢复**：大量开发者要求流式错误时 UI 能显示错误信息并可恢复，而不是卡死在「Thinking」状态。

---

### 6. 开发者关注点

- **「Thinking」卡死是头号痛点**：几乎所有模型（DeepSeek、Zen、go）都可能出现「输入 → 思考 → 无输出」的现象，开发者需要频繁重启应用，且无日志可查，严重影响日常使用。
- **OpenCode Go 服务端问题集中爆发**：DeepSeek V4 Flash 在 Go 通道上的 HTTP 500、403、TCP 断连和空白响应是最集中的投诉点，社区普遍认为这是服务端问题，期望官方尽快修复而不是让用户排查配置。
- **RTL 与国际化体验**：v1.18.13 的 RTL 修复获得桌面端用户关注，同时非英语用户（土耳其语、葡萄牙语等）的 issue 增多，说明 OpenCode 的国际化用户群正在扩大。
- **免费额度与限制不透明**：部分用户反映免费额度被过快耗尽且规则不够清晰，希望官方明确免费层与 Go 订阅的边界，并在界面中增加额度提示。
- **Windows 桌面端稳定性**：多个 Windows 11 专属问题被报告（空白响应、模型不可用、黑屏无响应），Windows 端的稳定性仍是重点改进方向。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi 社区动态日报 — 2026-08-04

### 1. 今日速览

今日无新版本发布，社区热点集中在 Copilot Enterprise 端压缩功能故障（#6768，18 👍 / 19 评论）与 Windows 使用体验讨论（#7547）。PR 方面，多个高质量修复合入：iTerm2 图像兼容性修复（#7612）、可配置压缩模型（#7602）、LLM Gateway 新供应商接入（#7610），以及多项 OAuth/Anthropic schema 修复。

### 2. 版本发布

无新版本发布。

### 3. 社区热点 Issues

1. **[#6768] [bug] Copilot Enterprise 许可证下无法压缩上下文**
   - 评论 19 | 👍 18 | 已关闭
   - 影响企业用户的核心功能阻断问题：无论是 OpenAI 还是 Anthropic 模型，压缩都会返回 421 Misdirected Request 错误。社区反响强烈，是企业席位的热门痛点。
   - https://github.com/earendil-works/pi/issues/6768

2. **[#7547] [Windows] 你如何在 Windows 上使用 Pi？遇到什么问题？**
   - 评论 8 | 开放
   - 官方发起的使用体验调查，目的是整理 Windows 上的运行方式与痛点，决定官方投入方向（修复、文档还是交由外部方案）。Windows 开发者值得关注和参与。
   - https://github.com/earendil-works/pi/issues/7547

3. **[#7153] `/scoped-models` 在等待目录刷新时约 5 分钟无响应**
   - 评论 7 | 👍 4 | 开放
   - 命令在渲染任何 UI 前同步等待 model-catalog 刷新，导致编辑器清空后长时间无反馈。性能阻塞问题，影响 REPL 体验。
   - https://github.com/earendil-works/pi/issues/7153

4. **[#7553] 压缩功能应支持独立的 thinking level / 模型配置**
   - 评论 6 | 开放
   - 自动/手动压缩无条件复用当前会话的 thinking 等级，导致推理模型的总结预算与正常对话无法分离。已有 PR #7602 修复。
   - https://github.com/earendil-works/pi/issues/7553

5. **[#7128] 默认系统提示词中的 PI_\* 指南过度诱导执行 bash 调用**
   - 评论 6 | 👍 1 | 已关闭
   - “Inspect PI_\* environment variables”指南会让智能体频繁执行 env 检查命令，即使与任务无关。涉及默认 prompt 设计与智能体行为调优。
   - https://github.com/earendil-works/pi/issues/7128

6. **[#7465] iTerm2 内联图像缺少 size 参数**
   - 评论 5 | 开放
   - `encodeITerm2()` 生成的 OSC 1337 序列缺少 `size` 参数，导致 `@xterm/addon-image@0.9.0` 静默拒绝渲染。影响 xterm.js 下的图片显示。PR #7612 已提交修复。
   - https://github.com/earendil-works/pi/issues/7465

7. **[#7244] `version` 命令应显示运行时（bun/node/deno）**
   - 评论 5 | 开放
   - 不少问题由 bun 运行导致，但 issue 报告中通常只包含 OS/终端版本。将运行时信息加入 `version` 有利于用户直接粘贴完整诊断信息。
   - https://github.com/earendil-works/pi/issues/7244

8. **[#7560] Copilot Business 订阅下 Grok 4.5 未出现在模型列表中**
   - 评论 5 | 已关闭
   - 通过 GitHub Copilot provider 登录后，模型列表中没有 grok-4.5。新模型支持是用户重点关注方向。
   - https://github.com/earendil-works/pi/issues/7560

9. **[#7508] GitHub Copilot / OpenAI Codex OAuth 刷新无请求超时，持锁冻结会话约 5 分钟**
   - 评论 5 | 已关闭
   - 刷新令牌时若网络抖动/代理半开连接，token 刷新获取凭证库跨进程锁后卡住，导致整个会话冻结约 5 分钟。严重故障根因。
   - https://github.com/earendil-works/pi/issues/7508

10. **[#7594] release 二进制缺少 node:sqlite，导致插件加载失败**
    - 评论 4 | 已关闭
    - 影响 `pi-total-recall` 及所有使用 `node:sqlite` 的扩展。发布构建需要包含该内置模块，否则插件生态受阻。
    - https://github.com/earendil-works/pi/issues/7594

### 4. 重要 PR 进展

1. **[#7612] fix(tui): 为 xterm.js image addon 增加 iterm 载荷 size**
   - 新增 `size=<decoded byte count>` 到 OSC 1337 序列，解决 `@xterm/addon-image@0.9.0` 静默拒图问题。对应 #7465。
   - https://github.com/earendil-works/pi/pull/7612

2. **[#7602] feat(coding-agent): 可配置压缩/分支摘要模型与 thinking 等级**
   - 为压缩功能增加独立的模型与思考级别配置，处理 provider 上下文窗口限制。关闭 #7553。
   - https://github.com/earendil-works/pi/pull/7602

3. **[#7610] feat(ai): 新增 LLM Gateway 与 LLM Gateway DevPass provider**
   - 以 OpenRouter 风格路由的 LLM Gateway 作为内置 `openai-completions` 提供商接入，由 LLM Gateway 团队贡献，替代自动关闭的 #7480。
   - https://github.com/earendil-works/pi/pull/7610

4. **[#7605] fix(ai): OAuth 错误消息不再包含响应体**
   - Token 端点响应体可能含 access/refresh token 或回显请求参数，此前会进入日志/遥测/用户对话框。防止敏感信息泄露。
   - https://github.com/earendil-works/pi/pull/7605

5. **[#7606] fix(ai): 显式 chatgpt-account-id 优先于 JWT 提取**
   - 并非所有 ChatGPT token 都带 `chatgpt_account_id` claim；允许 login 流程中已保存的 accountId 覆盖 JWT 提取，修复 Codex 认证。
   - https://github.com/earendil-works/pi/pull/7606

6. **[#7604] fix(ai): 非严格 Anthropic 工具 schema 保留 `$defs`**
   - 非严格模式下 `input_schema` 仅重建 type/properties/required，导致 `$ref` 指向被丢弃的 `$defs`，发送悬空引用给 Anthropic。修复后保留 `$defs`。
   - https://github.com/earendil-works/pi/pull/7604

7. **[#7599] feat(coding-agent): RPC over unix socket / tcp**
   - 新增 `--listen` 参数支持 RPC 通过 unix socket 或 TCP 通信，以及 `connectAddress` 客户端选项。为外部集成提供更灵活通道。
   - https://github.com/earendil-works/pi/pull/7599

8. **[#7597] fix: 全屏模式下扩展选择器 diff 可滚动**
   - 将 diff 标题放入 ScrollView，固定 yes/no 操作，并新增 `tui.select.scrollUp/scrollDown` 键绑定（`[` / `]`），方便无鼠标场景。
   - https://github.com/earendil-works/pi/pull/7597

9. **[#7592] fix(coding-agent): 静默打开的标准输入管道不再永久阻塞进程**
   - 非 TTY 场景下 `readPipedStdin` 无条件等待 EOF，后台启动继承开放但静默的管道时会永久挂起。修复后避免进程卡死。
   - https://github.com/earendil-works/pi/pull/7592

10. **[#6216] feat: 添加 Amazon Bedrock Mantle OpenAI Responses provider**
    - 基于 OpenAI Bedrock provider 的 Mantle 响应 API，为亚马逊 Bedrock 用户提供新接入选项。
    - https://github.com/earendil-works/pi/pull/6216

### 5. 功能需求趋势

- **压缩（compaction）功能深化**：除修复 Copilot Enterprise 端 421 失败外（#6768、#7579），社区明确要求独立控制压缩的模型与 thinking 等级（#7553），并有对应 PR #7602 落地。
- **新模型/provider 支持速度**:Grok 4.5 未出现在 Copilot 模型列表（#7560）、opencode-go 静态模型快照过期（#7363），反映用户对最新模型接入节奏敏感。
- **Windows 支持升温**：官方发起 Windows 使用调查（#7547），同时修复 `git clean` 在 Windows 下因文件占用失败（PR #7570），Windows 体验成为常驻话题。
- **TUI 稳定性与性能**：长会话消息列表虚拟化（#7573）、JSON 模式二次方输出（#7395）、全屏模式键位冲突（#7574）、compaction 摘要渲染两次（#7608）等，说明 TUI 在极端场景下的健壮性需求旺盛。
- **表格/诊断可观测性**：`version` 增加运行时信息（#7244）、Anthropic 路径统一发送 `x-client-request-id`（#7161），本质都是提升诊断与网关溯源能力。

### 6. 开发者关注点

- **Copilot Enterprise 压缩功能阻断**（#6768/#7579）波及企业用户，点赞最高，是当前最影响可用性的单一问题。
- **长时间无响应**：`/scoped-models` 等待 5 分钟（#7153）、OAuth 刷新持锁冻结会话 5 分钟（#7508），“5 分钟”阻塞频繁触发开发者敏感神经。
- **环境变量与配置陷阱**：默认提示词诱导多余 bash 调用（#7128）、project 级 `retry.provider` 覆盖全局配置（#7572），说明配置合并与默认行为需要更谨慎。
- **运行时兼容性**：Node 20 下 undici CacheStorage 崩溃（#7601）、发布包缺少 node:sqlite（#7594）、X11 连接泄漏（#7600），主流运行时的覆盖与资源管理仍是短板。
- **认证与安全细节**：OAuth 错误消息携带敏感 token（PR #7605）、Codex 账号 ID 提取失败（PR #7606）、RPC 模式缺少认证暴露（#7590），开发者对安全边界和自动化集成接口要求提高。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

### 1. 今日速览

Qwen Code 今日发布 v0.21.5 稳定版，核心是为 macOS 用户提供从 Electron 桌面应用迁移到新 Tauri Shell 的一次性更新桥。社区方面，围绕**确定性工具执行边界**（#8102，17 条评论）、**tmux 闪屏问题**（#8519，11 条评论）以及**多工作区守护进程资源控制**（#8051，9 条评论）的讨论热度最高。此外，ACP/IDE 集成、会话恢复完整性和取消/中断语义是当前开发者反馈最集中的方向。

---

### 2. 版本发布

**v0.21.5**（Release v0.21.5）

- 为 macOS 用户新增 opt-in 一次性更新桥，用于从 Electron 桌面应用迁移至新的 Tauri Shell（[#8392](https://github.com/QwenLM/qwen-code/pull/8392)）。
- 引入针对工具调用的、执行结果级别的细粒度结果追踪能力。
- 修复 Web Shell 中表格对话框相关的显示问题。

> 另有 v0.21.4-nightly.20260804.d6f55a1c9 夜间版发布，包含 Electron 迁移桥以及 Web Shell 表格对话框修复。

---

### 3. 社区热点 Issues

以下为过去 24 小时内更新最活跃、讨论度最高的 10 个 Issue：

| Issue | 标题 / 摘要 | 活跃度 |
| ----- | ----------- | ------ |
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | **[提案] 确定性工具执行边界**：建议将 LLM 置于信任边界之外，运行时能确定性地约束、授权、观察和评估模型产生的动作，构建可信 Agent 运行时。 | 17 评论 · P3 |
| [#8519](https://github.com/QwenLM/qwen-code/issues/8519) | **BUG: qwen code 在 tmux 中闪屏严重**：用户在 tmux 中使用时几乎每秒闪屏一两次，严重影响交互体验。 | 11 评论 · P2 |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | **[跟踪] 绑定多工作区守护进程资源使用**：daemon 目前仅限制工作区/会话数量，但未限制请求体字节数、WebSocket 组装缓冲区等内存占用。 | 9 评论 · P2 |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | **BUG: Provider 警告清理器泄露密码**：`sanitizeProviderWarning` 截断包含端口的信息，且当密码含 `@` 时会被泄露到 /status 负载中。 | 6 评论 · P2 · 安全 |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | **BUG: APIUserAbortError 后会话记录中断**：用户取消请求后，后续轮次不再写入本地会话记录（Windows 上复现）。 | 5 评论 · P2 |
| [#8493](https://github.com/QwenLM/qwen-code/issues/8493) | **BUG: 已取消的文件工具仍可修改文件**：`write_file` 和 `edit` 在异步准备期间被取消，但最终写入仍继续执行。 | 5 评论 · P2 |
| [#8470](https://github.com/QwenLM/qwen-code/issues/8470) | **BUG: alibaba token plan 模型名过长**：模型前缀 `[Modelstuidio token plan]` 过长，在手机端 Paseo 调用时模型名被截断。 | 5 评论 · P2 |
| [#8533](https://github.com/QwenLM/qwen-code/issues/8533) | **[讨论] Content[]/Part[] 无法安全编码推理重放契约**：当前数据结构无法承载不同提供方的推理过程重放需求，属于基础设计问题。 | 4 评论 · P2 |
| [#8535](https://github.com/QwenLM/qwen-code/issues/8535) | **BUG: --resume 可重建悬空无符号 thought 风险**：PR #8260 修复的 live session 路径风险，在 `--resume`/`--continue` 场景下可被重新构造。 | 2 评论 · P2 |
| [#8458](https://github.com/QwenLM/qwen-code/issues/8458) | **BUG: Goal 提议通道因证据目录超限被锁定**：使用 goal 功能后，证据目录超过硬限制，多次尝试均返回同一错误，无法正常验收。 | 3 评论 · P2 |

---

### 4. 重要 PR 进展

以下为过去 24 小时更新的关键 PR（按主题归类）：

| PR | 内容概要 |
| --- | -------- |
| [#8498](https://github.com/QwenLM/qwen-code/pull/8498) | **perf(review)**: 在反向审计（reverse-audit）中移除 dry chunks 和流水线验证，解决大 PR 评审耗时到 5 轮上限的问题。 |
| [#8399](https://github.com/QwenLM/qwen-code/pull/8399) | **fix(core)**: 让 `isAbortError` 识别 OpenAI SDK 的 `APIUserAbortError`，修复 `auth_type=openai` 路径下用户取消请求未被正确识别为 abort 的问题。 |
| [#8465](https://github.com/QwenLM/qwen-code/pull/8465) | **feat(core)**: 为长时间运行的 Goal 增加持久化证据检查点。在证据目录达到硬限制前暂停自动续期，由独立验证器压缩证据。 |
| [#8469](https://github.com/QwenLM/qwen-code/pull/8469) | **feat(acp)**: 为 ACP 前台会话增加重复工具执行失败的本地防护，基于执行结果契约计数终端失败。 |
| [#8464](https://github.com/QwenLM/qwen-code/pull/8464) | **perf(core)**: 工具结果清理改为清除到阈值一半的低水位线，而非刚低于阈值即停止，以更好地保持 prompt cache。 |
| [#8442](https://github.com/QwenLM/qwen-code/pull/8442) | **fix**: 为 4 处 `proper-lockfile` 调用添加 `onCompromised` 处理器，避免锁丢失时守护进程崩溃。 |
| [#8364](https://github.com/QwenLM/qwen-code/pull/8364) | **feat(omni)**: 实现 Omni 托管媒体存储层——内容寻址对象存储，含 mark-and-sweep GC、容量预算、崩溃恢复和上传缓存。 |
| [#8445](https://github.com/QwenLM/qwen-code/pull/8445) | **fix(web-shell)**: 修复 Web Shell 会话文档导航在 bearer 认证前加载公开 HTML 壳的需求，同时保持 API 子路径认证。 |
| [#8439](https://github.com/QwenLM/qwen-code/pull/8439) | **feat(cli)**: VP 模式下恢复 Ctrl+点击超链接和右键上下文菜单，因为 SGR 鼠标追踪曾导致原生终端能力失效。 |
| [#8436](https://github.com/QwenLM/qwen-code/pull/8436) | **fix(triage)**: 让 triage 状态评论在 job 被取消时也能最终确定（原来 `success() \|\| failure()` 排除了 cancellation）。 |

---

### 5. 功能需求趋势

从近期 Issues 与 PR 可以提炼出以下社区最关注的功能方向：

1. **ACP/IDE 集成深化**
   - 要求暴露推理努力级别（low/medium/high/xhigh/max）作为会话配置（[#8514](https://github.com/QwenLM/qwen-code/issues/8514)）
   - 要求通过 ACP 协议发送 `usage_update` 更新，让 JetBrains AI Assistant 等客户端能显示上下文用量（[#8513](https://github.com/QwenLM/qwen-code/issues/8513)）

2. **会话管理的完整性与可恢复性**
   - 持久化 assistant 内联图片，使 `/resume` 后能恢复完整渲染（[#8521](https://github.com/QwenLM/qwen-code/issues/8521)）
   - 修复 `--resume` 路径下的悬空 thought 风险（[#8535](https://github.com/QwenLM/qwen-code/issues/8535)）
   - 中断（APIUserAbortError）后会话记录未写入（[#8356](https://github.com/QwenLM/qwen-code/issues/8356)）

3. **资源使用可预测性**
   - 为多工作区 daemon 绑定内存、请求体大小等资源配额（[#8051](https://github.com/QwenLM/qwen-code/issues/8051)）
   - 修复 ACP 子进程内存上限按宿主内存 50% 固定分配、未按子进程数均分的问题（[#8182](https://github.com/QwenLM/qwen-code/issues/8182)）

4. **安全与信任边界**
   - 确定性工具执行边界提案（[#8102](https://github.com/QwenLM/qwen-code/issues/8102)）
   - Provider 警告清理器泄露密码（[#8136](https://github.com/QwenLM/qwen-code/issues/8136)）
   - 取消的文件工具仍会修改文件系统（[#8493](https://github.com/QwenLM/qwen-code/issues/8493)）

5. **终端体验优化**
   - tmux 闪屏问题（[#8519](https://github.com/QwenLM/qwen-code/issues/8519)）
   - 模型名过长截断（[#8470](https://github.com/QwenLM/qwen-code/issues/8470)）
   - Kitty 图片在终端 resize/scroll 时的生命周期管理（[#8520](https://github.com/QwenLM/qwen-code/issues/8520)）

---

### 6. 开发者关注点

以下是开发者反馈中最集中的痛点和高频需求：

- **取消/中断语义不一致**：多个 Issue 指向同一类问题——工具调用被取消后仍执行（[#8493](https://github.com/QwenLM/qwen-code/issues/8493)）、shell 命令被信号终止却报告成功（[#8491](https://github.com/QwenLM/qwen-code/issues/8491)）、stream-json 中断导致会话控制基础设施失效（[#8495](https://github.com/QwenLM/qwen-code/issues/8495)）。说明“取消”操作的可靠传播仍是核心稳定性短板。

- **多工作区 / daemon 资源失控**：daemon 模式下的内存配额、子进程调度、认证等问题多次被提及（[#8051](https://github.com/QwenLM/qwen-code/issues/8051)、[#8182](https://github.com/QwenLM/qwen-code/issues/8182)、[#8494](https://github.com/QwenLM/qwen-code/issues/8494)）。生产环境用户对“count-only limits”不满，要求真正的字节级/CPU 级约束。

- **认证与配置管理摩擦**：自定义模型保留时 Provider 更新提示无限重复（[#8504](https://github.com/QwenLM/qwen-code/issues/8504)）、DingTalk 配置字段无法通过 daemon API 修改（[#8515](https://github.com/QwenLM/qwen-code/issues/8515)）、Web Shell 会话刷新认证问题（[#8445](https://github.com/QwenLM/qwen-code/pull/8445)）——配置写入和认证路径的体验需要打磨。

- **会话恢复可靠性受质疑**：从中断后记录丢失（[#8356](https://github.com/QwenLM/qwen-code/issues/8356)）到 `--resume` 带来的悬空 thought 风险（[#8535](https://github.com/QwenLM/qwen-code/issues/8535)），开发者对“恢复的会话是否与原始会话完全等价”存在疑虑。这直接影响长任务场景下对工具的信任度。

- **发布质量回归**：社区注意到 v0.21.5 发布流程两次失败（[#8476](https://github.com/QwenLM/qwen-code/issues/8476)、[#8483](https://github.com/QwenLM/qwen-code/issues/8483)），且性能回归调查（0.21.3 → 0.21.4 变慢）需要数小时取证，推动 [#8471](https://github.com/QwenLM/qwen-code/pull/8471) 提出“评审成本账本”的概念——开发者期望更透明的性能可观测性。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-04**  
**数据来源：** [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（Issue/PR 页面显示为 Hmbown/CodeWhale）

---

## 1. 今日速览

- **v0.9.4 发布列车**进入关键整合阶段（PR #5135），当前领先 main 分支 77 个提交，运行时 API（Runtime API）迎来一波大规模端点扩展，覆盖目标、内存、MCP 与技能生命周期管理。
- 两个新 Bug 引发关注：**文件编辑工具静默接受错误参数并伪造成功**（#5209）与 **1M 上下文未启用、仅 128K 触发压缩**（#5239），直指工具可靠性与上下文策略问题。
- 社区对**安全/可控性**的需求显著上升：`stop` 命令拦截、`--no-sandbox` 模式等提案反映出用户对自主工作流失控和沙箱干扰的强烈忧虑。

---

## 2. 版本发布

过去 24 小时无新版本发布。目前主版本线正聚集于 **v0.9.4 release train**（见 PR #5135）。

---

## 3. 社区热点 Issues

过去 24 小时更新共 5 条，以下全部收录。

### 🔥 [4959] [enhancement] 提议增加 `stop` 命令
- **作者：** ronohara | 创建：2026-07-29 | 更新：2026-08-03 | 评论：7 | 👍：0
- **链接：** [Hmbown/CodeWhale Issue #4959](https://github.com/Hmbown/CodeWhale/issues/4959)
- **要点：** 当模型处于 YOLO 模式或深度自主工作流时，类似 `+ stop` 或 `stop` 的文本命令会被忽略，模型继续执行。提议引入 `/stop` 命令及运行时 STOP 词拦截机制，以机械方式强制中断工具调用。
- **为何值得关注：** 这是自主 Agent 安全的经典痛点。没有可靠的硬停止机制，用户只能强制杀进程，社区已有 7 条评论讨论实现方案，但点赞数不高，说明热度尚未破圈。

### ⚠️ [4978] [bug] Anthropic API 频繁报错：`'type' must be in ["enabled", "disabled", "auto"]`
- **作者：** w1w218 | 创建：2026-07-30 | 更新：2026-08-04 | 评论：6 | 👍：0
- **链接：** [Hmbown/CodeWhale Issue #4978](https://github.com/Hmbown/CodeWhale/issues/4978)
- **要点：** 使用 `providers.openmodel`（兼容 Anthropic Messages API）时频繁收到 HTTP 400 错误，内容为 `'type' must be in ["enabled", "disabled", "auto"]`。重试偶尔成功，但错误反复出现，无固定规律。
- **为何值得关注：** 影响所有通过 Anthropic 兼容协议接入第三方模型的用户（OpenModel 等）。疑似参数序列化格式与 Anthropic 规范存在偏差，涉及面较广。

### 🛡️ [4955] [enhancement] 请求：零沙箱 / `--no-sandbox` 本地开发模式
- **作者：** eugenicum | 创建：2026-07-28 | 更新：2026-08-04 | 评论：4 | 👍：1
- **链接：** [Hmbown/CodeWhale Issue #4955](https://github.com/Hmbown/CodeWhale/issues/4955)
- **要点：** 用户希望在自己的开发机上**完全禁用沙箱**。kernel 级 Seatbelt 沙箱每天都会破坏基本 shell 命令，安全绕过方案均已尝试失败。CodeWhale 实际有两层沙箱机制，需要一种关闭内部沙箱的方法。
- **为何值得关注：** 该 Issue 获得仅有的 1 个 👍，反映沙箱对本地日常开发的干扰并不是个例。如何在安全性和易用性之间取得平衡，是 CLI/TUI 工具的核心问题。

### 🐛 [5209] [bug] File 工具（action=edit）静默接受错误参数名并报告虚假成功
- **作者：** yekern | 创建：2026-08-03 | 更新：2026-08-04 | 评论：3 | 👍：0
- **链接：** [Hmbown/CodeWhale Issue #5209](https://github.com/Hmbown/CodeWhale/issues/5209)
- **要点：** `File` 工具的 `action=edit` 模式存在两个严重缺陷：
  1. 使用 `new_str` 等非标准参数时，工具不会报错，反而返回“替换成功”的假阳性。
  2. 结果是每个位置需要 3−5 次重新编辑，严重影响效率。
- **为何值得关注：** 工具调用的静默失败最危险——模型误以为操作成功，实际代码未被修改，产生连锁错误。

### 🧠 [5239] [bug, question] 模型支持 1M 上下文，为何工具只在 128K 触发压缩？
- **作者：** hardy922 | 创建：2026-08-04 | 更新：2026-08-04 | 评论：1 | 👍：0
- **链接：** [Hmbown/CodeWhale Issue #5239](https://github.com/Hmbown/CodeWhale/issues/5239)
- **要点：** 配置显示模型支持 1M 上下文，但工具在 128K 时即触发上下文压缩。用户希望可以显式设置为 1M，避免频繁压缩导致信息丢失。
- **为何值得关注：** 上下文压缩阈值与模型实际能力不匹配，可能导致长会话场景下的信息流失。这是刚创建的新 Issue，预计后续会有更多讨论。

---

## 4. 重要 PR 进展

过去 24 小时共 36 个 PR 更新，以下为最值得关注的 10 个。

### 🚂 [5135] release: Codewhale v0.9.4 release train
- **作者：** Hmbown | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135)
- **内容：** v0.9.4 集成列车，取代 #5044。当前领先 main 分支 77 个提交，包含 2026-08-01 的全部源码候选。
- **重要性：** 下一个大版本的核心载体，后续大量 PR 都将并入本分支。

### 🔧 [5225] feat(acp): 通过 session/prompt 暴露 file/search/git/patch/shell 工具
- **作者：** rafaelcavalheri | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5225](https://github.com/Hmbown/CodeWhale/pull/5225)
- **内容：** ACP 服务器此前只流式传输模型文本，不执行工具调用。本 PR 让 Zed 等编辑器/桥接工具通过 ACP 获得真正的代码编辑能力，将 CodeWhale 从“只聊天的 Agent”升级为“真正干活的 Agent”。
- **重要性：** 打通 ACP 工具执行链，是 IDE 集成生态的关键一步。

### 📊 [5133] feat(runtime-api): 暴露持久目标循环状态与完成控制
- **作者：** Copilot | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5133](https://github.com/Hmbown/CodeWhale/pull/5133)
- **内容：** 新增 `GET /v1/threads/{id}/goal` 等端点，管理端可读取活动目标状态并通过运行时边界驱动生命周期转换。
- **重要性：** 补全 Runtime API 的目标管理空白。

### 📄 [5132] Runtime API: 暴露验证器回执与证据
- **作者：** Copilot | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5132](https://github.com/Hmbown/CodeWhale/pull/5132)
- **内容：** 新增三个只读端点：`receipts`（任务回执列表）、任务失败详情、重试信息。此前只有聚合计数器 `verifier_failed`。
- **重要性：** 使管理端能精确定位失败任务、原因与重试条件。

### 🧠 [5131] feat: Runtime API 内存端点——有界检查与生命周期控制
- **作者：** Copilot | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5131](https://github.com/Hmbown/CodeWhale/pull/5131)
- **内容：** 新增 `/v1/memory` 资源，可检查活动内存、作用域与来源，并施加生命周期控制，全部走 `require_runtime_token` 鉴权。
- **重要性：** 让外部管理端可以对内存进行受控操作，而无需连接第二个内存存储。

### 🔌 [5130] feat(runtime-api): MCP 服务器配置与生命周期管理
- **作者：** Copilot | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5130](https://github.com/Hmbown/CodeWhale/pull/5130)
- **内容：** 新增 `POST /v1/apps/mcp/servers` 等路由，支持 MCP 服务器的创建（需提供 name + 一种协议）、更新、删除。
- **重要性：** 告别手工编辑 TOML/JSON，管理面开始支持 MCP 动态维护。

### 🎯 [5129] feat(runtime-api): 技能生命周期端点——安装、更新、卸载、信任、审计
- **作者：** Copilot | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5129](https://github.com/Hmbown/CodeWhale/pull/5129)
- **内容：** 将 TUI 中完整的技能生命周期管理能力通过 HTTP 暴露，覆盖安装、更新、卸载、信任与审计。
- **重要性：** 管理端具备与 TUI 同等的技能治理能力。

### ⏱️ [5240] feat(tui/shell): 在工具内容中展示真实等待耗时
- **作者：** SparkofSpike | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5240](https://github.com/Hmbown/CodeWhale/pull/5240)
- **内容：** Bash `wait`/delta 工具结果的 `duration_ms` 此前只在元数据中，模型看不到。结果就是无论任务刚启动还是运行几分钟，等待结果对模型来说都一样，导致模型会忙轮询短等待或误判长停顿。
- **重要性：** 让模型感知真实的时间流逝，减少无效轮询，改善自主任务编排质量。

### 🗂️ [5238] feat(mcp): MCP Registry 发现与注册表优先工具选择
- **作者：** bistack | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5238](https://github.com/Hmbown/CodeWhale/pull/5238)
- **内容：** 新增 `registry_sync`，在模型调用 `exec_shell`、自定义代码或手动实现之前，先查询公共 MCP Registry 寻找匹配的零环境 stdio 服务器。
- **重要性：** 推动 MCP 生态从“手动配置”走向“自动发现”。

### 🖱️ [5234] fix(tui): 鼠标捕获激活期间保持备用滚动关闭
- **作者：** SparkofSpike | 状态：OPEN | 更新：2026-08-04
- **链接：** [Hmbown/CodeWhale PR #5234](https://github.com/Hmbown/CodeWhale/pull/5234)
- **内容：** 修复鼠标滚轮/trackpad 滚动不移动会话、反而切换编辑器输入历史的 Bug。根因是 `recover_terminal_modes()` 同时启用了鼠标捕获和 xterm 备用滚动模式（DECSE...）。
- **重要性：** 直接影响日常交互体验，是一个高频易触发的 UI 缺陷修复。

---

## 5. 功能需求趋势

综合当日全部 Issue/PR，社区关注方向集中在以下五点：

1. **Runtime API 控制面大扩展**：目标、验证器、内存、MCP、技能五个维度同时新增管理端点，说明 0.9.4 正向“可编程管理”大步迈进，外部客户端（桌面/Web/IDE）将获得与 TUI 对等的能力。
2. **ACP 协议走向真实工具执行**：PR #5225 让 ACP 从“纯聊天”升级为“可执行代码编辑”，意味着 CodeWhale 正加速融入 Zed 等现代化编辑器生态——这是面向未来 IDE 集成的重要信号。
3. **更高粒度的安全/中断控制**：`stop` 命令拦截（#4959）与 `--no-sandbox`（#4955）一放一收，共同指向用户对自主 Agent 可控性的强烈诉求。
4. **MCP 生态向“注册表自动发现”演进**：PR #5238 将 MCP Registry 接入工具选择流程，减少零散手工配置，推动 MCP 成为即插即用的标准工具层。
5. **模型上下文能力被低估**：1M 上下文未启用、128K 触发压缩（#5239）——用户希望工具配置能匹配模型真实能力，而不是被保守阀值拖累。

---

## 6. 开发者关注点

从 Issue 反馈中可提炼出以下高频痛点：

- **工具静默失败是最大效率杀手**（#5209）：错误参数不报错、反而伪装成功，导致模型反复重试，一个改动浪费 3−5 倍时间。此类“假阳性”比直接报错后果更严重。
- **沙箱对本地开发干扰严重**（#4955）：Seatbelt 打破日常 shell 命令，用户想要一键关闭的能力，而不是在配置中摸索。
- **第三方 Anthropic 兼容 API 不稳定**（#4978）：OpenModel 等 HTTP 400 报错无固定规律，影响所有依赖 Anthropic 协议进行模型接入的用户。
- **上下文压缩策略与模型能力不匹配**（#5239）：用户对压缩阈值不满，担心长会话信息丢失，希望显式分配 1M 上下文。
- **自主工作流“刹车”困难**（#4959）：YOLO 模式下无法用自然语言打断模型，需要机械级指令拦截机制。

---

> 本日报基于 2026-08-04 的 GitHub 公开数据自动生成，涵盖过去 24 小时内创建或更新的 Issues 与 Pull Requests。如有个别条目未包含，可能是由于更新时间的边缘情况。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*