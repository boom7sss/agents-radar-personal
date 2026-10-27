# AI CLI 工具社区动态日报 2026-08-13

> 生成时间: 2026-08-13 02:27 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-13）

## 1. 生态全景

当前 AI CLI 工具赛道已进入**稳定性攻坚期**，而非功能竞赛期。过去 24 小时，8 个主流工具共发布 6 个版本（含 2 个桌面端版本），但社区讨论热度最高的议题全部集中在**崩溃、卡死、资源失控、静默错误**等可靠性问题上，而非新功能。MCP（Model Context Protocol）成为全行业集成标准，但各工具在协议合规性、远程认证、进程生命周期管理上普遍存在落地阵痛。模型输出质量与可控性（幻觉、静默降级、假成功）成为开发者付费意愿的头号威胁，跨工具浮现出“显式指定必须生效”的强烈共识。与此同时，多智能体协调、长会话上下文管理、Windows/WSL2 平台体验正在成为下一阶段竞争的主要战场。


## 2. 各工具活跃度对比

| 工具 | Issues 活跃量 | PR 活跃量 | Release | 社区热度信号 |
|---|---|---|---|---|
| **Claude Code** | 50 条活跃；精选 10 条（最高评论 82，最高 👍 31） | 3 个（2 合并文档，1 长期开放） | v2.1.229 | 评论数全场最高；Windows 稳定性连续多日高频 |
| **OpenAI Codex** | 精选 10 条（最高 👍 392，评论 83） | 10 个（全为功能/修复类，质量高） | 无 | 单 Issue 获 392 👍 为全场最高；PR 产出最密集 |
| **Gemini CLI** | 精选 10 条（最高评论 18，👍 13） | 10 个（含 2 个安全修复，1 个核心稳定性修复） | v0.56.0-nightly | 安全漏洞修复密集；夜间版迭代快 |
| **GitHub Copilot CLI** | 42 条更新；精选 10 条（最高 👍 35） | 2 个 | 无 | 高赞需求多但功能 PR 少；扩展类需求旺盛 |
| **Kimi Code CLI** | 仅 1 个 Issue 更新；长期需求 #1283 积累 36 条评论 | 2 个（边界修复，均已开放超 2 个月） | 无 | 社区体量最小，活跃度低 |
| **OpenCode** | 精选 10 条（最高 👍 88，评论 35） | 10 个（6 修复 + 2 客户端 + 1 chore + 1 MCP） | v1.18.18 / v1.18.17 | 开源社区活跃；付费订阅问题集中爆发 |
| **Pi** | 精选 10 条（最高评论 18，👍 17） | 10 个（6 功能 + 4 修复） | 无 | 社区规模中等；TUI 体验打磨方向集中 |
| **Qwen Code** | 精选 10 条（最高评论 10） | 10 个（Web Shell 方向占 5 个） | Desktop v0.2.1 / v0.2.0 | 发布节奏快；Web Shell 成主战场 |
| **DeepSeek TUI / CodeWhale** | 精选 10 条（最高评论 9） | 10 个（含 5 个 harvest 合入） | v0.9.6 | 品牌迁移期；维护者主导的 harvest 机制独特 |

> 注：Issue 数为“过去 24 小时有更新”的活跃量，不同工具统计口径可能略有差异。Kimi Code 因当日更新量极少，仅 1 个 Issue 计入。


## 3. 共同关注的功能方向

**① MCP 生态：集成完成，可靠性滞后**
- **Claude Code**：MCP server 被无故 kill 重启（#86040）；draft-07 outputSchema 被拒（#86142）
- **Codex**：MCP 工具结构化内容丢失（#38287）；非 OpenAI 端点命名空间忽略（#33263）
- **Copilot CLI**：Remote OAuth CIMD 支持（#1305，👍 35）；registry 策略 403（#4346）
- **OpenCode**：MCP 连接成功但 agent 不可见（#33027）；本地服务器启动竞态（#42020 PR）
- **DeepSeek/CodeWhale**：`nextCursor: null` 破坏严格客户端（#5335）；服务端已修复（#5336）

**② 模型输出质量与“静默错误”**
- **Claude Code**：Opus 5.0 质量下降（#82162）、幻觉（#82326）、“自造 Bug 自修”（#71618）
- **Gemini CLI**：子代理 MAX_TURNS 中断被误报为 GOAL 成功（#22323）
- **Copilot CLI**：子代理模型被静默降级（#3565）、model 参数覆盖策略（#4432）
- **DeepSeek/CodeWhale**：File 工具假成功（#5209）
- **Pi**：Edit 模糊匹配空白差异失败（#7836）、单对象 edits 参数被拒（#7835）

**③ 上下文管理与长会话可靠性**
- **Claude Code**：VSCode 对话记录永久丢失（#24172，👍 25）；Prompt 缓存意外失效（#86244、#78720）
- **Codex**：线程恢复静默丢消息（#38169）；上下文溢出不可恢复（#32888）
- **Pi**：auto-compaction 仅靠 API 溢出触发（#6879）；冷恢复重放已清理历史（#7724）
- **Qwen Code**：自动记忆召回 RFC（#7040）；大会话恢复超时保护（#8678）
- **Kimi Code**：跨会话记忆系统长期需求（#1283，36 条评论）
- **Gemini CLI**：Auto Memory 无限重试/无效补丁/日志脱敏（#26522/#26523/#26525）

**④ 多智能体协调与生命周期管理**
- **Claude Code**：一次隔夜运行暴露 12 个多 Agent 协调 Bug（#54393）；Agent 会话“已完成”标记（#66202）
- **Copilot CLI**：模型参数覆盖跨模型族策略（#4432）
- **Qwen Code**：后台 Agent 重复工作、过早完成（#8097）
- **Gemini CLI**：子代理生命周期状态误报（#22323）

**⑤ 安全与权限的“双刃剑”**
- **Claude Code**：安全过滤器误伤合法任务（#84352、#86197、#86241）与 permissions.deny 不生效（#61268）并存
- **Gemini CLI**：MCP 配置损坏 fail-open（#28786/#28794）、`$VAR` 变量展开绕过（GHSA-wpqr-6v78-jr5g/#28691）、A2A 认证缺失（#28699）
- **OpenCode**：grep/glob 导致 `.env` 泄露（#17073）
- **DeepSeek/CodeWhale**：API key 明文存于仓库（#5047）
- **Qwen Code**：Vertex AI ADC 不可用（#9016）


## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek/CodeWhale |
|---|---|---|---|---|---|---|---|---|
| **目标用户** | 专业开发者/团队，大规模生产环境 | 高级开发者，深度绑定 OpenAI 模型 | Google Cloud / Vertex AI 生态开发者 | GitHub 生态开发者，企业组织 | 开源社区，多模型偏好者 | TUI/终端极客，本地模型爱好者 | 中文开发者，Web/桌面端用户 | Rust/TUI 开发者，多 Provider 用户 |
| **核心优势** | 插件生态，Remote Control 自托管，Hook 机制 | 线程管理深度，企业级用量核算，多模型（gpt-5.6 系列） | 子代理/Skills 机制，Eval 基础设施，安全修复响应快 | GitHub 原生集成（ACP、MCP registry、组织策略） | 轻量 Go 实现，TUI 体验，配置热重载预期高 | 组件化 TUI 架构，Rust 性能，本地模型接入 | Web Shell 可视化工作流，桌面端迭代快，多模态路线图 | 品牌迁移期，多 Provider（OrcaRouter 等），harvest 合入机制 |
| **主要短板** | Windows 桌面端崩溃高频，模型质量波动 | macOS/Windows 资源失控，进程管理缺陷 | 卡死/挂起频发，Antigravity 迁移引发用户不满 | MCP 远程认证/容错不成熟，插件可靠性 | 付费订阅计费问题集中，MCP 可见性 | 编辑工具对弱模型兼容性差，macOS 资源占用 | 长任务执行卡死，回归引入频繁 | v0.9.5 回归问题集中，API key 安全设计缺陷 |
| **技术路线** | TypeScript 终端层（用户提议 Rust 重写） | 自研桌面端 + gRPC 远程执行 + 线程持久化 | 同步 v0.55.1 稳定版 + nightly 快速迭代 | shell 环境为主，ACP 扩展协议 | Go 单二进制 + 后台服务 + SDK | Rust + ratatui + 组件化扩展 | Rust CLI + Web Shell + 桌面壳 | Rust + Ratatui + 工作区级契约 |
| **商业化** | 订阅（付费会话） | Pro 订阅 + 企业工作区 | 免费 + Google Cloud | Copilot Business/Enterprise | OpenCode Go 订阅（计费问题需关注） | 开源 + 云 API 自备 | 开源 + 免费 | 开源 + 多 Provider 自带 key |

**关键趋势**：Claude Code 和 Codex 在向“企业级重型工具”演进（远程执行、用量核算、安全策略）；Gemini 和 Copilot 背靠云生态，在安全合规上投入最大；OpenCode、Pi、Qwen Code、DeepSeek/CodeWhale 则在垂直场景（TUI、Web Shell、本地模型、多 Provider）上做差异化深耕。值得注意，**中长尾工具在“模型无关性”上反而走得更远**——OpenCode、Pi、DeepSeek/CodeWhale 均天然支持多 Provider，而头部工具正通过模型版本控制和质量监控来锁定用户。


## 5. 社区热度与成熟度

| 梯队 | 工具 | 特征 |
|---|---|---|
| **成熟期** | **Claude Code** | 社区讨论深度最高（82 条评论的技术 Issue），Issue 分类细粒度好，但 PR 活跃度低（文档为主），处于“功能间歇期”。 |
| **快速迭代期** | **OpenAI Codex** | 10 个高质量功能 PR/日，社区关注度极大（392 👍 事件），性能与稳定性的声誉风险与改进速度并存。 |
| | **Qwen Code** | 桌面端双版本连发（v0.2.0/v0.2.1），Web Shell 方向 PR 占比 50%，功能推进节奏全场最快。 |
| | **DeepSeek/CodeWhale** | 品牌迁移期但社区响应积极，维护者通过 harvest 机制快速合入社区 PR，体现较强的治理能力。 |
| | **Gemini CLI** | nightly + 稳定版双轨，安全修复响应及时，但社区反馈的卡死/挂起问题持续未根治。 |
| **稳定活跃期** | **OpenCode** | Issue 高赞需求（88 👍）和付费投诉并存，社区有热情但商业链路待验证。 |
| | **Pi** | 社区规模中等，讨论质量高（组件化技术方案），长会话稳定性是当前焦点。 |
| | **Copilot CLI** | 虽背靠 GitHub，但 Issue 以长期未决的需求类为主（如 #1305），代码 PR 活跃度较低，处于“需求积累期”。 |
| **早期/低活跃** | **Kimi Code CLI** | 仅 1 个维度活跃，唯一的长期需求（#1283）36 条评论但 0 👍，社区尚处观望阶段。 |


## 6. 值得关注的趋势信号

**① 稳定性已取代功能成为第一购买/留存要素**
各工具的高热度 Issue 几乎全部是崩溃、卡死、资源失控类问题（Codex 392 👍 系统进程失控、Claude Windows GPU 崩溃、Gemini Thinking 卡死、Copilot tgrep OOM-kill）。**功能创新不再是差异化核心，“不崩溃、不丢数据、不失控”才是当前社区最强烈的诉求。** 对开发者而言，在评估新工具时，应将稳定性记录（Issue 关闭率、回归修复速度）置于功能列表之前。

**② “静默错误”比报错更具破坏力，正在侵蚀 AI 编程工具的信任根基**
多个工具同时出现“假成功”类问题：Gemini 子代理 MAX_TURNS 误报 GOAL 成功、CodeWhale File 工具错误参数返回“已替换”、Copilot Task tool 静默降级模型、Pi Edit 工具对弱模型不兼容。这种“看似成功实则失败”的行为在 agentic 工作流中会被自动放大，且极难排查。**工具厂商需要将“输出置信度声明”作为一等功能来建设**——当模型或工具不确定时，能明确表达不确定性，是当前各工具共同缺失的能力。

**③ MCP 从“能连上”进入“生产合规”阶段**
MCP  server 的认证（CIMD/DCR）、进程生命周期（无超时、被 kill）、协议合规（nextCursor 类型、outputSchema）、权限隔离（fail-open）等问题在各工具中密集暴露。这标志着 MCP 正从实验性标准走向生产环境标准，**规范执行的严格程度将成为 MCP server 生态的新竞争维度**。开发者选择 MCP 工具时应优先关注严格符合规范、有明确认证机制的实现。

**④ Windows/WSL2 是当前最大的平台红利**
各工具在 Windows 上均出现系统性问题（Codex 的 taskkill 风暴、Claude 的 GPU 进程崩溃、Copilot 的 WSL2 键位冲突、Pi 的 socket bind 失败）。这一方面说明 Windows 用户占比在上升，另一方面也意味着**谁先解决 Windows 桌面端的稳定性，谁就能获得显著的竞争优势**。

**⑤ 本地/边缘模型接入需求抬头，模型无关性成为新卖点**
Pi 的 Ollama/llama.cpp 接入、DeepSeek/CodeWhale 的 OrcaRouter 多 Provider 注册、OpenCode 的多模型支持，均在满足用户回避单一云厂商绑定、控制成本、数据主权的诉求。头部工具（Claude、Codex、Gemini）的模型锁定策略与中长尾工具的“模型自由”策略正在形成路线分化，**对成本敏感或有多模型需求的团队，可优先关注模型无关工具**。

**⑥ Agent 生命周期管理是下一波基础设施**
多工具社区同时出现对 Agent 会话状态可视化（等待输入/休眠中）、显式完成/终止、资源回收（extension-host 泄漏、后台进程无限重试）的诉求。Agent 已从“能跑通”进入“可治理”阶段，**将 Agent 视为需要全生命周期管理的“一等公民”基础设施，是工具从 demo 走向生产的关键一步**。

**⑦ 配置热重载与上下文连续性成为高频体验诉求**
OpenCode 的配置热重载需求获 88 👍，Kimi Code 的记忆系统积累了 36 条评论，Pi 的 auto-compaction 失效问题是其最热 Issue。**开发者对“重启损失”的容忍度正在降低**，无论是配置变更、会话恢复还是长期记忆，工具的“无感连续性”将直接影响用户粘性。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据范围**: github.com/anthropics/skills | 统计口径: PR/Issue 讨论活跃度 | 数据截止 2026-08-13

> 说明：原始 PR 评论数字段缺失，以下排序依据来源给定的评论数排序规则及 Issue 联动热度综合判断。所有 PR 当前均为 **Open** 状态。

---

## 一、热门 Skills 排行（Top 8）

### 1. skill-creator 评测链路修复（#1298）
- **功能**: 修复 `run_eval.py` 恒定报 `recall=0%` 的严重缺陷——评测工件未作为真实 skill 安装，导致描述优化循环在噪声上做优化；同时修复 Windows 流读取、触发检测与并行 worker 问题。
- **社区热点**: 关联 Issue #556（12 评论 / 7👍）与 #1169，是仓库内最大的 bug 集群，超 10 次独立复现，直接影响所有 skill 作者。
- **状态**: Open
- **链接**: https://github.com/anthropics/skills/pull/1298

### 2. document-typography 文档排版技能（#514）
- **功能**: 针对 AI 生成文档的排版质量管控：孤字折行（1-6 词溢出到下一行）、段首悬挂（标题滞留页底）、编号错位。
- **社区热点**: 直击"每个 Claude 生成的文档都会遇到"的痛点，讨论聚焦通用性与触发词设计。
- **状态**: Open（3 月创建后持续活跃）
- **链接**: https://github.com/anthropics/skills/pull/514

### 3. ODT 开放文档技能（#486）
- **功能**: OpenDocument 格式（.odt/.ods）的创建、模板填充、读取与 ODT→HTML 转换，覆盖 LibreOffice 及 ISO 标准场景。
- **社区热点**: 社区对微软 Office 之外的开放格式支持需求明确，与现有 docx/pdf 技能形成互补。
- **状态**: Open
- **链接**: https://github.com/anthropics/skills/pull/486

### 4. frontend-design 技能可执行性重构（#210）
- **功能**: 全面修订 frontend-design skill，确保每条指令都能在单次会话中被 Claude 实际执行，提升指导的具体性。
- **社区热点**: 讨论聚焦"skill 究竟该写成开发者文档还是可执行指令"——与 Issue #202 的批评一脉相承。
- **状态**: Open（1 月创建，3 月仍在更新）
- **链接**: https://github.com/anthropics/skills/pull/210

### 5. 元技能：skill-quality-analyzer + skill-security-analyzer（#83）
- **功能**: 新增两个 meta-skills：质量分析器按结构/文档/示例/安全/可维护性五维评估；安全分析器专注技能安全审计。
- **社区热点**: 呼应社区对 skill 质量参差与安全风险的普遍担忧（见 Issue #492），是"技能的技能"方向代表。
- **状态**: Open（2025-11 提交，2026-01 仍在更新）
- **链接**: https://github.com/anthropics/skills/pull/83

### 6. self-audit 自审计技能（#1367）
- **功能**: 交付前审计：先做输出文件的机械核验（Step 0），再做按损害严重度排序的四维推理审计，自称全项目/全技术栈通用。
- **社区热点**: 与 Issue #1385（推理质量门禁流水线提案）配套，代表社区对"输出可靠性"的系统性方案探索。
- **状态**: Open
- **链接**: https://github.com/anthropics/skills/pull/1367

### 7. testing-patterns 测试模式技能（#723）
- **功能**: 全栈测试技能：Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、测试命名与边界用例。
- **社区热点**: 测试是社区最渴求的垂直方向之一，讨论关注覆盖面与 Claude 可执行性之间的平衡。
- **状态**: Open
- **链接**: https://github.com/anthropics/skills/pull/723

### 8. ServiceNow 企业平台技能（#568）
- **功能**: 覆盖 ITSM/ITOM/ITAM/SAM、FSM、HRSD、CSM、SPM、漏洞响应、安全事件响应与 IntegrationHub 的 ServiceNow 全平台助手。
- **社区热点**: 企业级、多模块大型 skill 的典型代表；8 月 12 日仍有更新，处于活跃迭代中。
- **状态**: Open
- **链接**: https://github.com/anthropics/skills/pull/568

---

## 二、社区需求趋势（来自 Issues）

### 1. 安全与信任边界（最热议题）
Issue #492（43 评论）指出社区技能在 `anthropic/` 命名空间下分发，构成信任边界滥用——用户可能向"看似官方"的技能授予过高权限。这是当前社区第一关切。
- https://github.com/anthropics/skills/issues/492

### 2. 企业级技能分发
Issue #228（8👍）要求 org-wide 技能共享，替代手动下载 .skill 文件 + Slack 传输的原始流程；#1175 则关注 SharePoint 场景下技能内的权限与上下文窗口安全设计。
- https://github.com/anthropics/skills/issues/228

### 3. 工具链可靠性（skill-creator 生态）
Issue #556 / #1169 构成第二大痛点集群：`run_eval.py` 触发率恒为 0%，优化循环形同虚设。社区大量 PR（#1298、#1099、#1050、#538、#539）都在围剿此类问题，说明"造技能的工具"本身质量是当前瓶颈。

### 4. 新技能方向诉求
- **记忆管理**: #1329 compact-memory——用符号化表示压缩 agent 长期状态，节省上下文。
- **AI 治理**: #412 agent-governance——策略执行、威胁检测、信任评分、审计轨迹（已关闭，但方向被 #1385 延续）。
- **质量门禁**: #1385 推理质量门禁流水线：任务前校准→对抗审查→交付验证。
- **上下文效率**: #1487 警告 `claude-api` skill 单次注入 ~156k tokens 耗尽上下文——技能体积与 token 经济性是重要设计约束。

### 5. 平台集成与互操作
#29（Bedrock 使用）、#16（将 Skills 暴露为 MCP）表明社区希望技能生态向多平台、标准化协议延伸；#189（document-skills 与 example-skills 安装重复内容）暴露了插件分发治理缺陷。

---

## 三、高潜力待合并 Skills（近期可能落地）

| PR | Skill | 潜力信号 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | 修复阻塞性 bug，关联 #556 高赞 issue，合并优先级最高 |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow | 8/12 仍在更新，作者持续投入，企业需求明确 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏开发 | 作者为 pyxel-mcp 原作者（kitao），有生态背书，7/15 仍在更新 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 配套提案 #1385 活跃，质量门禁是热门方向 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 痛点普遍、实现聚焦，3 月后仍有讨论 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | 技能规范合规修复 | 8/12 最新更新，让现存技能通过 `skills-ref validate`，属于仓库自举修复，易被采纳 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 解决规划产物生命周期问题，回应 #1417，作者明确欢迎协作 |

---

## 四、Skills 生态洞察

**一句话总结**：当前社区最集中的诉求是**"先修好造技能的工具链（skill-creator 的 0% 召回率 bug 群），再建立技能的安全信任边界（命名空间滥用与权限治理），同时以可执行性为标准持续沉淀垂直领域技能（文档排版、测试、企业平台、记忆与自审计）"**——即从"能造技能"走向"造可信、可靠、可共享的技能"。

---

*报告生成基于 anthropics/skills 公开数据，所有链接均为仓库内原始讨论，可点击查阅细节。*

---

# Claude Code 社区动态日报 — 2026-08-13

## 1. 今日速览

今日发布补丁版本 **v2.1.229**，主要补充了 Remote Control 会话恢复的文档、自托管 Runner 的服务端 Hook 支持，以及网关流式响应的 SSE 保活机制。社区讨论热度集中在三点：**CVP 审核通过组织仍被安全拦截**（#84352 已达 82 条评论）、**/plugin update 不刷新插件缓存**（#14061，31 个 👍 为今日最高）、以及 **Opus 5.0 模型质量与幻觉问题**（多起并发报告）。Windows 桌面端稳定性问题继续高频出现，成为不可忽视的"显性痛点"。

## 2. 版本发布 — v2.1.229

发布说明（[Release 页面](https://github.com/anthropics/claude-code/releases)）包含三项变更：

- **文档**：新增 `claude remote-control --continue` 的说明，用于恢复最近的 Remote Control 会话。
- **Hook 支持**：为自托管 Runner 会话增加服务端下发的 Claude Code Hook 支持，与托管环境行为对齐。
- **可靠性**：为网关流式响应添加 SSE keepalive 心跳，降低长连接断流风险。

整体为增量修复版本，无破坏性变更。

## 3. 社区热点 Issues（10 条精选）

### 3.1 争议与讨论焦点

**#84352 — CVP 已批准组织仍被 cyber safeguard 拦截**（[链接](https://github.com/anthropics/claude-code/issues/84352)）
- 评论 **82** 条，👍 12
- 作者称其 Claude.ai 组织此前已获 Cyber Verification Program 批准，如今在 Claude Code 中再次触发安全拦截，且验证门户显示"Under review"。这是今日评论量最高的 Issue，反映安全策略对已授权用户的误伤问题。

**#82162 — Opus 5.0 质量"降级"，5 次重试仍无法交付**（[链接](https://github.com/anthropics/claude-code/issues/82162)）
- 评论 9 条，👍 3
- 用户反馈 Opus 5.0 输出质量显著下滑，简单任务多次重试仍失败。同类报告还有 #82326（幻觉回复）、#86205（措辞模糊），模型质量议题呈集中爆发态势。

**#71618 — "Claude Code 浪费付费会话修复自己制造的 Bug"**（[链接](https://github.com/anthropics/claude-code/issues/71618)）
- 评论 4 条（已关闭）
- 用户抱怨模型自产 Bug 自修，消耗大量额度却无进度，反映成本与质量控制的核心矛盾。

### 3.2 高频 Bug 与稳定性

**#81698 — Windows 桌面端 GPU 进程崩溃（exit code 101457950）导致全部会话终止**（[链接](https://github.com/anthropics/claude-code/issues/81698)）
- 评论 **25** 条
- 环境：Windows 11 + RTX 5080 Laptop GPU，桌面版 1.24012.9 + Claude Code 2.1.219。崩溃会连带杀掉所有运行中会话，影响面极大。同类崩溃报告还有 #85199（需 "Advanced Options → Repair" 修复）、#84951（Browser 面板触发崩溃），Windows 稳定性成为连续多日的高频词。

**#24172 — [CRITICAL] VSCode 中对话记录消失且不可恢复**（[链接](https://github.com/anthropics/claude-code/issues/24172)）
- 评论 12 条，👍 **25**
- 关闭/重开 VSCode、切换到摘要页再返回、切换对话等操作均可能导致历史记录永久丢失，被标记为 high-priority。

**#14061 — `/plugin update` 不失效插件缓存**（[链接](https://github.com/anthropics/claude-code/issues/14061)）
- 评论 25 条，👍 **31**（今日最高赞）
- 更新插件后缓存未失效，需手动清缓存才能生效，影响插件迭代效率。已标记 duplicate，但社区关注度极高。

### 3.3 多智能体与工具体验

**#54393 — 一次自主隔夜运行暴露 12 个多智能体协调 Bug**（[链接](https://github.com/anthropics/claude-code/issues/54393)）
- 评论 **27** 条
- 用户在单个 autonomous-overnight 周期内汇总了 12 个多智能体协作缺陷，属深度技术报告，对 Agent 稳定性有重要参考价值。

**#75899 — 左箭头误触跳转 Agents 屏幕且无法重绑定**（[链接](https://github.com/anthropics/claude-code/issues/75899)）
- 评论 15 条，👍 19
- macOS 上聊天输入框为空时按左箭头会跳转到 agents 界面，返回后还会破坏主会话视图。Touch Bar/键盘流用户痛点，附不可重绑定的可用性问题。

**#79366 — Worktree 会话复用了上一会话的工作目录**（[链接](https://github.com/anthropics/claude-code/issues/79366)）
- 评论 11 条，👍 7
- 开启 worktree 隔离的新任务被放入**旧会话遗留目录**而非新建目录，可能导致上下文污染。对使用 worktree 隔离的团队影响显著。

**#64158 — Advisor 工具调用导致崩溃：Unsupported content type: server_tool_use**（[链接](https://github.com/anthropics/claude-code/issues/64158)）
- 评论 8 条，👍 13
- VSCode / Linux 环境下调用 advisor 工具即崩溃，属于工具链集成崩溃，被标记为 bug + duplicate。

## 4. 重要 PR 进展

过去 24 小时仅 3 个 PR 更新，全部为文档类改动，无代码功能 PR 合并，显示当前处于功能开发间歇期。

**#85925 — docs: 将剩余的过期文档链接指向 code.claude.com**（[链接](https://github.com/anthropics/claude-code/pull/85925)）
- 状态：已关闭（合并）
- 清理 docs.claude.com 等仅重定向的旧域名链接，覆盖 plugins、plugin skills/agents/commands 及 issue-template 联系链接。

**#85822 — docs: 修复 plugins 与 examples 中的过期文档链接及 README 漂移**（[链接](https://github.com/anthropics/claude-code/pull/85822)）
- 状态：已关闭（合并）
- 纯文档清理：hooks 示例文档链接更新、plugins README 文档链接修正，所有改动均经重定向验证。

**#41611 — add the missing source to claude code**（[链接](https://github.com/anthropics/claude-code/pull/41611)）
- 状态：开放
- 自 2026-03-31 创建至今未合并，内容为补充缺失的 source 文件，久拖未决。

**小结**：PR 活跃度低，社区提交以文档修正为主；无核心功能 PR 进入审查/合并流程。

## 5. 功能需求趋势

从全部 50 条活跃 Issues 中提炼出四个主要方向：

**① 多智能体（Agent）生命周期管理**
- 代表需求：标记 Agent 会话为"已完成/解除"（#66202，👍 20）；Agent 视图缺少"等待输入/休眠中"状态指示（#86082）。
- 信号：Agent 已从"能跑"进入"要管"阶段，开发者需要更精细的会话控制与状态可视化。

**② Windows 桌面端稳定性的压倒性诉求**
- 代表问题：GPU 崩溃（#81698）、重复崩溃需 Repair（#85199）、Browser 面板崩溃（#84951）。
- 信号：Windows 用户占比不低，但桌面端稳定性是当前最大短板。

**③ 性能与资源占用优化**
- 代表需求：以纯 Rust 重写 Claude Code 以消除 CPU 峰值和终端闪烁（#84192）。
- 信号：TypeScript 终端层在长时段运行下的资源占用已引发用户显式不满。

**④ 模型行为可控性与输出质量**
- 代表问题：Opus 5.0 质量下降（#82162）、幻觉（#82326）、措辞模糊（#86205）、安全过滤器误判（#86197、#86241）。
- 信号：模型版本切换后质量回退是社区当前最焦虑的问题，且安全策略"宽进严判"已开始影响正常开发流程。

## 6. 开发者关注点（痛点与高频需求）

- **数据安全与持久化**：VSCode 中对话丢失（#24172）被标记为 CRITICAL 且获 25 个 👍，历史记录不可恢复对日常开发是致命打击。Prompt 缓存的意外失效（#86244 自动更新后全量重缓存、#78720 git status 变化导致缓存失效）则直接转化为费用问题，已有用户明确表达成本焦虑。

- **安全与权限的"双刃剑"**：一边是 permissions.deny 规则不生效（#61268）让用户感觉不受控，另一边是安全过滤器在合法代码任务上频繁误伤（#86197、#86241、#84352），安全策略的两端都在引发投诉。

- **多智能体协同的可靠性**：#54393 的 12-bug 后记与 #86237（跨会话消息渲染但不进运行时队列）指向同一问题——多 Agent 并行时消息路由与状态同步尚不成熟，自主运行场景风险较高。

- **MCP 生态兼容性**：#86142（draft-07 outputSchema 被拒）、#86040（MCP server 被无故 kill 重启），MCP 服务器接入的兼容性和进程生命周期管理需要加强。

- **模型输出质量是最大的"隐形税"**：Opus 5.0 的质量抱怨（#82162、#82326、#86205）分布在 8 月 12-13 日密集出现，用户普遍反馈"不如 4.8"或"需要多次重试"。加上 #71618 指出的"自造 Bug 自修"循环，模型输出质量已成为开发者付费意愿的头号威胁。

---

*数据范围：anthropics/claude-code 仓库，2026-08-12 至 2026-08-13 更新内容。Issue 数据基于评论数排序的前 30 条。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### 1. 今日速览

今日 Codex 社区无新版本发布，但围绕**桌面端（macOS/Windows）的系统资源占用与进程异常**问题引发了高强度讨论，其中 macOS 上 Codex Desktop 触发 `syspolicyd`/`trustd` 进程失控的 Issue 已获得 392 👍，成为社区最关注的性能痛点。与此同时，多项 PR 合并带来了核心架构层面的改进，包括**分页线程的持久化回滚、gRPC 代码模式主机支持**，以及**插件指标的远程执行器收集**，显示出项目在复杂工作流与企业级特性上的持续投入。

---

### 2. 版本发布

过去 24 小时无新版本发布。

---

### 3. 社区热点 Issues

以下 10 个 Issue 因其讨论热度、影响范围或社区关注度而值得特别关注：

- **macOS 系统进程资源失控（#25719）** — [链接](https://github.com/openai/codex/issues/25719)
  评论 83 条，👍 392 次。Codex Desktop for macOS 反复触发 `syspolicyd`/`trustd` 导致 CPU 和内存占用飙升。这是目前社区反馈最强烈的性能问题，直接影响用户日常使用。

- **新增禁用 60 秒自动解析的设置（#28969）** — [链接](https://github.com/openai/codex/issues/28969)
  评论 70 条，👍 194 次。用户希望在 CLI 中配置提问等待时间，使其不自动在 60 秒后超时解析。该需求获得大量支持，反映了高级用户对交互控制力的诉求。

- **重置（Reset）次数无效消耗（#31606）** — [链接](https://github.com/openai/codex/issues/31606)
  评论 56 条，👍 65 次。用户反馈 Pro 订阅中执行重置操作时，实际未生效但消耗了一次重置次数。涉及用户核心权益，评论区讨论激烈。

- **Windows 桌面版 taskkill 进程风暴（#34260）** — [链接](https://github.com/openai/codex/issues/34260)
  评论 34 条，👍 11 次。Windows 版 Codex Desktop 可能进入无界进程清理循环，大量 `taskkill.exe` 进程耗尽 WMI 配额，导致系统卡死。这是 Windows 平台又一个严重的性能缺陷。

- **应用内更新后无法安装（#37002）** — [链接](https://github.com/openai/codex/issues/37002)
  评论 28 条。用户在点击更新后应用无法安装，问题无版本号描述，可能为更新机制引入的回归，影响了正常的版本升级路径。

- **Windows 高频调用 PowerShell 导致高 CPU（#25453）** — [链接](https://github.com/openai/codex/issues/25453)
  评论 25 条。Codex Desktop 每秒生成短命的 `powershell.exe` 进程进行全量进程轮询，导致高 CPU 占用。与 #34260 共同反映出 Windows 平台上进程管理实现存在系统性问题。

- **Windows 计算机使用（Computer Use）截图失败（#25178）** — [链接](https://github.com/openai/codex/issues/25178)
  评论 25 条，👍 13 次。在 Windows 10 22H2 上，任何要求截图的 `get_window_state` 调用都会因 `SetIsBorderRequired` 失败而中断，限制了自动化功能的实用范围。

- **CLI 线程恢复静默丢失消息（#38169）** — [链接](https://github.com/openai/codex/issues/38169)
  评论 2 条（更新于 8-13）。`thread/resume` 在重度压缩的线程上会静默丢弃最新对话轮次。虽然评论数不多，但涉及数据完整性的严重逻辑缺陷，新近提交值得关注。

- **未超时的搜索/抓取进程孤儿化（#37770）** — [链接](https://github.com/openai/codex/issues/37770)
  评论 2 条。`rg` 进程无超时机制，在大规模网络文件系统（Lustre/NFS）上可运行数小时，持续消耗 CPU/IO。对于企业级项目影响较大，且缺少自动清理机制。

- **MCP 工具结果丢失结构化内容（#38287）** — [链接](https://github.com/openai/codex/issues/38287)
  评论 2 条（今日新增）。当 MCP 工具调用返回 `structuredContent` 时，Codex App 无法正确展示内容数据。可回归至旧版本，定位为新版本引入的缺陷，影响所有 MCP 集成开发者。

---

### 4. 重要 PR 进展

- **分页线程的持久化回滚（#38292）** — [链接](https://github.com/openai/codex/pull/38292)
  为分页线程增加 `revert_thread` 能力，通过创建新的不可变回滚记录并原子切换存储路径，保留线程 ID 与会话元数据。这补全了线程管理核心功能。

- **支持 gRPC code-mode 主机（#38288）** — [链接](https://github.com/openai/codex/pull/38288)
  允许在 `--code-mode-host` 中接受 `http://` / `https://` URL，并共享现有 gRPC 会话提供器；同时保持对 `ws://` / `wss://` WebSocket 传输的兼容。为远程执行提供更高效的传输通道。

- **插件指标收集扩展至远程执行器（#38283）** — [链接](https://github.com/openai/codex/pull/38283)
  为远程插件命令解析清单声明的指标操作，并在执行器本地创建一个私有时限的 sidecar 目录，用于流式回传指标输出。完善了插件在远端执行场景下的可观测性。

- **TUI 状态栏新增线程用量显示（#38282）** — [链接](https://github.com/openai/codex/pull/38282)
  为 TUI 状态栏和终端标题添加 `thread-credits` 和 `estimated-thread-cost` 配置项（面向企业工作区），仅在需要时获取共享估算，避免性能开销。

- **`/status` 命令展示线程用量（#38281）** — [链接](https://github.com/openai/codex/pull/38281)
  扩展 `account/usage/read`，支持按 `threadId` 查询预估信用、美元成本、模型、推理速度与令牌消耗等详细拆分信息。

- **统一回合输入提交与路由（#38275）** — [链接](https://github.com/openai/codex/pull/38275)
  引入 `TurnInputRequest` 与类型化提交结果，新增 `start_or_steer_turn`、`start_turn_if_idle`、`steer_turn` 等接口，用于统一回合的启动与转向逻辑，简化跨层状态管理。

- **世界状态持久化为 JSON 对象（#38274）** — [链接](https://github.com/openai/codex/pull/38274)
  将持久化的世界状态快照和合并补丁的类型收紧为键控集合对象，避免历史数据中混入无法表达世界状态的任意 JSON 值（如数组），提升了回放逻辑的健壮性。

- **会话历史项添加创建时间（#38272）** — [链接](https://github.com/openai/codex/pull/38272)
  为本地生成的用户、开发者、代理和工具输出项写入分数级 Unix 时间戳，并保留后续请求中携带的已有时间，为会话审计与排序提供了准确依据。

- **凭证代理集成（#29752）** — [链接](https://github.com/openai/codex/pull/29752)
  将代理拥有的凭证代理集成至 Codex 核心。为受管理的子进程提供可替换的虚拟凭证，并确保在子进程生命周期中保持凭证的持续传递与正确性，避免了代理值在 shell 跳转时丢失的问题。

- **Windows 托管代理回退端口绑定（#38265）** — [链接](https://github.com/openai/codex/pull/38265)
  当显式配置的 HTTP/SOCKS5 代理端口不可用时，自动在协议首选范围内扫描可用端口；HTTP 与 SOCKS5 监听完全独立，避免端口冲突导致代理失效。

---

### 5. 功能需求趋势

- **桌面端稳定性与性能优化**：无论是 macOS 的系统进程失控，还是 Windows 的 `taskkill`/`powershell` 风暴，性能相关的缺陷占据了 Issue 榜的主导地位。社区对桌面应用的 CPU、内存占用及进程管理有着极高的敏感度。
- **CLI 交互的精细控制**：多个高赞 Issue 集中于 CLI 的交互等待时间（如 #28969 和 #37472），说明重度用户在追求更可控、更灵活的自动化流程，而非固定的超时机制。
- **计算机使用（Computer Use）能力补全**：Windows 平台无法截图、无法上传文件（#20785）、无法启动应用（#37932）等，表明 Computer Use 功能在 Windows 生态下存在明显的功能缺口，尚未达到 macOS 的使用体验。
- **MCP（Model Context Protocol）集成可靠性**：MCP 工具在非 OpenAI 端点下的命名空间忽略（#33263）、结构化内容丢失（#38287）等问题，反映出第三方工具互联互通和兼容性需求正在上升。
- **企业级与多线程管理**：包括远程线程同步（#24280）、线程用量查询（#38282/#38281）以及针对大数据量项目的性能优化，显示开发者正在将 Codex 用于更复杂的团队协作场景。

---

### 6. 开发者关注点

- **权限与授权机制**：多起 Windows 平台 Computer Use 在授予权限后仍返回 `EPERM`（#38293），以及应用无法加载账户信息等，暴露了权限模型在特定环境下的一致性问题。
- **数据持久化与恢复**：如断电后窗格和项目配置回归（#26990）、SQLite 状态回填卡死（#28087）以及线程内容静默丢失（#38169），开发者对状态保存的可靠性提出了更高要求。
- **上下文管理**：自动压缩决策使用过期令牌计数，导致上下文溢出后不可恢复（#32888）。这属于深度使用场景下的隐蔽缺陷，说明 Codex 在长对话与大工具输出时的上下文管理仍有待加强。
- **进程生命周期管理**：除了资源消耗问题，开发者还注意到搜索/抓取进程没有超时机制，会持续占用网络文件系统资源（#37770）。进程的细粒度控制与超时保护成为开发者重点关注的方向。

---

> **数据说明**：本日报基于 2026-08-13 当日更新的 Issues 与 PRs 数据整理，部分 Issue 为历史创建但当日有更新（如评论或标签变更），均视为社区活跃动态。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-13）

## 今日速览

今日发布 v0.56.0-nightly 夜间版，核心变化集中在 eval 验证能力增强。社区侧，Issue #26126「卡在 Thinking 状态无响应」以 18 条评论成为今日最热问题，而 #27858「Antigravity CLI 是巨大倒退」获得 13 个 👍，反映出开发者对产品迁移方向的强烈担忧。安全方面，多条 PR 正在修复 MCP 配置损坏导致的 fail-open、变量展开绕过（GHSA-wpqr-6v78-jr5g）等漏洞。

## 版本发布

### v0.56.0-nightly.20260813.g1ac337739
- **feat/eval validate** by @ved015（[PR #28344](https://github.com/google-gemini/gemini-cli/pull/28344)）
- **feat(evals): 新增工具调用格式化器并集成失败摘要** by @ved015（[PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305)）
- 同步了 v0.55.1 的 Changelog

## 社区热点 Issues（Top 10）

### 1. [p1/Bug] 卡在 Thinking 状态无响应 — #26126
[Issue #26126](https://github.com/google-gemini/gemini-cli/issues/26126) | 评论 18 | 👍 11 | 已关闭（Stale）

CLI 间歇性卡死在「Thinking」状态，长时间无输出、无错误、无超时。作为今日评论数最多、👍 数最高的 Issue，该问题严重影响日常交互体验，尽管已被自动标记为 Stale，仍说明核心执行链路稳定性是社区最大痛点。

### 2. [p1/Bug] 子代理 MAX_TURNS 中断却被误报为 GOAL 成功 — #22323
[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 评论 12 | 开放中

`codebase_investigator` 子代理在分析前就已触达最大轮次限制，却向主代理回报 `status: "success"` / `Termination Reason: "GOAL"`，造成错误成功信号。该问题涉及 Agent 生命周期状态的可靠性，可能引发生成代码质量被静默降级的风险。

### 3. [p2/反馈] Antigravity CLI 对开发者是巨大倒退 — #27858
[Issue #27858](https://github.com/google-gemini/gemini-cli/issues/27858) | 评论 4 | 👍 13 | 开放中

社区呼声最高的反馈（👍 13）：用户认为从 Gemini CLI 迁移到 Antigravity CLI 后，统一 agent 引擎的做法破坏了 CLI 原有的轻量、无摩擦体验，特别是「智能自动编辑」和「模型路由」能力的缺失。建议保留 CLI 独立产品线。

### 4. [p1/Bug] Shell 命令执行完毕后卡在 "Waiting input" — #25166
[Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166) | 评论 4 | 👍 3 | 开放中

执行极简单的 shell 命令后，CLI 仍显示命令活跃且等待用户输入，命令实际早已完成。该 bug 与 #26126 同属「卡死」类问题，显著影响自动化流程的可控性。

### 5. [p1/Bug] node-pty resize 导致 `ioctl(2) failed, EBADF` 崩溃 — #27533
[Issue #27533](https://github.com/google-gemini/gemini-cli/issues/27533) | 评论 7 | 已关闭

SSH 远程 Linux 环境中执行 PTY resize 操作时触发 `EBADF` 崩溃，同类问题 #27541 也在 mkdir 场景出现。终端模拟层的稳定性缺陷对远程开发场景影响较大。

### 6. [p2/Bug] Gemini 不会主动使用 skills 和子代理 — #21968
[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968) | 评论 6 | 开放中

用户反馈：即使已配置 gradle、git 等自定义 skill，模型在相关任务中几乎不会主动调用，只有显式指令才生效。这削弱了 skills/sub-agents 机制的实际价值，社区期待更强的自主调度能力。

### 7. [p2/Bug] GEMINI_API_KEY 含特殊字符导致启动崩溃 — #28575
[Issue #28575](https://github.com/google-gemini/gemini-cli/issues/28575) | 评论 5 | 已关闭

当环境变量包含 `=` 或 `+` 时触发 `ParseError: invalid key format`。暴露了配置解析对合法字符集的兼容问题，也提醒了密钥处理路径需要更健壮的错误分支。

### 8. [p2/Bug] 工具数量 >128 时遭遇 400 错误 — #24246
[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 评论 3 | 开放中

启用工具过多时 API 返回 400，社区期望 agent 能按上下文动态裁剪工具范围，而非一次性全量注入。这与工具生态扩大后的可扩展性直接相关。

### 9. [p2/Bug] v0.33.0 起子代理绕过配置被自动调用 — #22093
[Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093) | 评论 3 | 开放中

用户将所有 agents 模式设为 disabled，但子代理仍被自动执行。权限边界被破坏属于高风险问题，社区期待回归「配置即契约」的行为准则。

### 10. [p2/Bug] Auto Memory 对低信号会话无限重试 — #26522
[Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522) | 评论 5 | 开放中

后台提取 agent 仅当成功读取 transcript 才标记会话为已处理，低信号会话会被反复捞起重试，造成无效 token 消耗。同类记忆问题（#26523、#26525）今日也持续滚动，说明记忆子系统的稳定性仍是关注焦点。

## 重要 PR 进展（Top 10）

### 1. [p1/core] 容量错误支持上下文感知静默重试 + TTL — #28790
[PR #28790](https://github.com/google-gemini/gemini-cli/pull/28790) | 开放中 | size/l

修复 #28761 报告的容量耗尽重试回归：为非交互式场景引入自动退避重试（至多 2 次静默重试），并为容量可用性增加 TTL 缓存，防止无效重试风暴。这是今日对生产稳定性最关键的修复。

### 2. [p1/core] 阻止 MCP enablement 配置损坏时 fail-open 与数据丢失 — #28794 / #28787
[PR #28794](https://github.com/google-gemini/gemini-cli/pull/28794) | [PR #28787](https://github.com/google-gemini/gemini-cli/pull/28787) | 开放中 | size/m

两个 PR 针对同一漏洞（#28786）：`mcp-server-enablement.json` 损坏时 `readConfig()` 错误地返回空对象，导致所有 MCP server 被默认启用（fail-open）。#28794 还修复了后续保存可能覆盖损坏配置导致数据丢失的问题，属于安全优先级修复。

### 3. [p1/security] 阻断 `$VAR` / `${VAR}` 变量展开绕过 — #28691
[PR #28691](https://github.com/google-gemini/gemini-cli/pull/28691) | 开放中 | size/l

修复 GHSA-wpqr-6v78-jr5g 的补丁遗漏：`detectBashSubstitution()` 与 `detectPowerShellSubstitution()` 未能拦截变量展开模式，攻击者仍可绕过命令注入安全门。同时对自动化 issue 去重工作流做了纵深防御加固。

### 4. [security] A2A Server 强制认证 + 阻断 checkpoint 路径穿越 — #28699
[PR #28699](https://github.com/google-gemini/gemini-cli/pull/28699) | 开放中 | size/l

A2A server 的自定义 REST 路由（`/tasks`、`/executeCommand` 等）绕过 `UserBuilder` 认证中间件，可匿名访问；另有 checkpoint 路径穿越风险。一次性修复了认证缺失与路径校验两个高危问题。

### 5. [p2/core] 保留 functionCall 的 thoughtSignature，修复 400 错误 — #28586
[PR #28586](https://github.com/google-gemini/gemini-cli/pull/28586) | 已关闭 | size/m

修复 v0.53.0 引入的回归：并行工具调用时 `thoughtSignature` 字段被意外剥离，导致 API 返回 400 Bad Request。对多工具并行场景影响显著。

### 6. [p2/core] 跳过 diff hunk 标记的 @ 解析，消除堆内存增长 — #28581
[PR #28581](https://github.com/google-gemini/gemini-cli/pull/28581) | 已关闭 | size/m

统一/组合 diff 的 hunk 标记（如 `@@ -1,3 +1,3 @@`）被误判为 `@file` 引用，每次匹配触发两次全工作区 glob 递归搜索，在大 diff 场景下导致 `minimatch`/`path-scurry` 堆内存膨胀。该修复可显著降低大补丁提示词的内存峰值。

### 7. [core] 修复 TRUST_PARENT 规则优先级判定 — #28701
[PR #28701](https://github.com/google-gemini/gemini-cli/pull/28701) | 开放中 | size/s

`LoadedTrustedFolders.isPathTrusted()` 的「最长匹配获胜」策略未正确处理 TRUST_PARENT 规则，可能导致父级信任策略覆盖更具体的子级配置。信任边界判定错误有安全隐患。

### 8. [vscode-ide-companion] 修复 stop() 挂起与 keep-alive 失效阈值 — #28789
[PR #28789](https://github.com/google-gemini/gemini-cli/pull/28789) | 开放中 | size/m

修复 `IdeServer.stop()` 在存在活跃 MCP streaming 会话时无限挂起的问题，以及 keep-alive 心跳偶发失败永不触发断线判定的资源泄漏。IDE 集成稳定性补强。

### 9. [evals] 新增技能激活与 web_fetch 行为评估 — #28788
[PR #28788](https://github.com/google-gemini/gemini-cli/pull/28788) | 开放中 | size/l

为 `activate_skill` 与 `web_fetch` 新增行为评估用例，同时改进本地评估环境的 Windows 兼容性，并修复 EDK 报告聚合器跳过未执行用例的 bug。延续了团队对 eval 基础设施的持续投入。

### 10. [p2/auth] 改进 Vertex AI 401 错误提示 — #28679
[PR #28679](https://github.com/google-gemini/gemini-cli/pull/28679) | 开放中 | size/s

当用户选择 Vertex AI 认证但仅配置了标准 Gemini API key 时，给出可操作的错误信息，引导其正确配置 Google Cloud 凭证。属于开发者体验类改进。

## 功能需求趋势

- **Agent 可靠性与自主性**：子代理生命周期状态误报（#22323）、自主调用 skills/子代理不足（#21968）、浏览器代理会话自愈（#22232）等议题持续发酵，社区对 agent 的「可控自主」期望明显提升。
- **Eval / 测试基础设施**：组件级评估 EPIC（#24353）持续滚动，配合 v0.56.0-nightly 的 eval 新特性以及 #28788 行为评估 PR，团队正系统化加强模型行为回归能力。
- **安全与权限强化**：API key 解析崩溃（#28575）、子代理越权（#22093）、变量展开绕过、MCP 配置 fail-open、Auto Memory 脱敏（#26525）等多点开花，安全已成为社区最敏感的话题。
- **代码理解智能化**：#22745 追踪 AST 感知的文件读取与代码库映射价值评估，社区期待减少 token 噪声并提升多轮编辑精准度。
- **记忆系统治理**：围绕 Auto Memory 出现三个 parallel issues（#26522、#26523、#26525），分别涉及无限重试、无效补丁静默跳过与日志脱敏，记忆子系统正从「能用」走向「可控」。
- **IDE / 编辑器集成稳定性**：vscode-ide-companion 连续出现挂起与泄漏修复（#28789、#28580），说明 IDE 配套组件的稳定性投入在加大。

## 开发者关注点

- **卡死与挂起问题最痛**：Thinking 卡死（#26126）、shell 等待输入（#25166）、vscode stop() 挂起等「无响应」类问题高居热度前列，这类缺陷对交互式 CLI 的信任损伤最大。
- **崩溃场景集中在终端层与工具链**：node-pty 的 EBADF（#27533、#27541）、`RangeError: Maximum call stack size exceeded`（#27539）、write_file/replace 工具 TypeError（#27319），终端模拟与文件编辑工具是崩溃重灾区。
- **静默状态误报引发信任危机**：MAX_TURNS 被报为 GOAL 成功（#22323）这类「假成功」比报错更危险，开发者担心错误信号会污染自动化流水线。
- **配置损坏的 fail-open 行为不可接受**：MCP enablement 配置损坏后所有 server 默认启用（#28786），叠加 API key 解析失败崩溃（#28575），社区期望「配置异常时应 fail-fast 而不是 fail-open」。
- **Token 效率与迁移焦虑并存**：#27858（👍 13）与 #27567 均反馈 Antigravity CLI 迁移后 token 消耗显著上升，VPS/低配环境用户对资源开销极为敏感。
- **输出质量偶发失控**：非英文内容混入输出（#27312）虽已关闭，但仍是开发者对多语言场景可靠性的顾虑点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-13

## 今日速览

过去 24 小时无新版本发布，但 Issue 活动非常密集（42 条更新），焦点集中在 **MCP 生态可靠性**与**子代理模型被静默覆盖**两大方向。Remote OAuth MCP 长期需求（#1305）获得 35 个 👍，成为社区关注度最高的问题；同时有 2 个 PR 提交，其中一个是将 CI 自动化从 `pull_request_target` 迁移到权限更小的工作流。

## 社区热点 Issues（10 个）

**1. 长期高赞需求：#1305 支持 CIMD for Remote OAuth MCP Servers**
👍 35 | 评论 5 | 更新于 08-12
自 0.0.389 支持 DCR 后，社区继续要求 CIMD（Consumer-Managed Credentials）支持，以满足无法在启动时动态注册客户端的环境。这是 MCP 远程认证最受关注的方向。
🔗 https://github.com/github/copilot-cli/issues/1305

**2. 组织模型缺失：#4390 Enabled 模型不在目录中（Claude Sonnet 5/Opus 5、Kimi K3）**
👍 4 | 评论 5 | 更新于 08-12
管理员在 Copilot Business 组织显式启用的模型（含 Anthropic Claude Sonnet 5/Opus 5、Kimi K3）在 CLI 目录中不可见，选中后报 "disabled by your organization"。直接影响模型可用性。
🔗 https://github.com/github/copilot-cli/issues/4390

**3. 插件系统缺陷：#1730 sessionStart hook 不触发**
👍 3 | 评论 8 | 更新于 08-12
`.github/hooks/*.json` 中定义的 `sessionStart` 在 v0.0.420 上不执行，Windows 11 + PowerShell 7 环境。8 条评论说明用户排查积极但尚未定位。
🔗 https://github.com/github/copilot-cli/issues/1730

**4. CI 阻塞：#4346 MCP registry 策略对 GITHUB_TOKEN 返回 403**
👍 3 | 评论 1 | 更新于 08-13
使用文档推荐的 PAT-less Actions 集成（`copilot-requests: write`）时，MCP registry policy fetch 被 403 拒绝，导致 CI 中所有非默认 MCP 服务器不可用。已关闭。
🔗 https://github.com/github/copilot-cli/issues/4346

**5. Windows/WSL2 键位冲突：#4328 Ctrl+H 被误判为 Ctrl+Backspace**
评论 6 | 更新于 08-12
WSL2 下由于 `WT_SESSION` 环境变量泄漏，Ctrl+H（删除前一字符）被当作删除整个词。影响 WSL2 用户的日常编辑效率。
🔗 https://github.com/github/copilot-cli/issues/4328

**6. 严重资源问题：#3976 原生 tgrep 索引器 OOM-kill 整个主机**
评论 2 | 更新于 08-12
启用 `copilot_cli_tgrep` 实验后，tgrep daemon 在大规模 monorepo 上无上限消耗内存，直接 OOM-kill 宿主系统。属于高危稳定性问题。
🔗 https://github.com/github/copilot-cli/issues/3976

**7. 扩展能力请求：#2109 ACP 支持 ask_user / ask_question**
👍 7 | 评论 3 | 更新于 08-12
社区希望 ACP 增加向用户提问并返回结构化答案的方法，当前 `session/request_permission` 覆盖不了澄清类交互。
🔗 https://github.com/github/copilot-cli/issues/2109

**8. 模型控制权：#4432 rubber-duck 子代理的 model 参数覆盖 complementary 策略**
评论 2 | 更新于 08-12
Task 工具暴露的 `model` 参数可覆盖 `complementary` 跨模型族评审策略及用户 `/subagents` 设置，且无提示。
🔗 https://github.com/github/copilot-cli/issues/4432

**9. 同类问题：#3565 Task tool 静默降级子代理模型**
👍 1 | 评论 1 | 更新于 08-13
当子代理请求的模型比会话模型成本倍率高时，Task tool 会静默降级为会话模型，且 ignore frontmatter 和显式 `model` 覆盖。该问题已关闭，但社区对此类静默行为明显不满。
🔗 https://github.com/github/copilot-cli/issues/3565

**10. 终端渲染回归：#4311 增量滚动时 Transcript 变空白**
评论 3 | 更新于 08-12
1.0.79 中该问题已无法复现并关闭，但原始排查过程（`--stream off`、resize 均无效）对理解渲染管线仍有参考价值。
🔗 https://github.com/github/copilot-cli/issues/4311

## 重要 PR 进展（2 个）

由于过去 24 小时仅 2 个 PR 更新，全部列出：

**#4449 [OPEN] 将 PR 自动化从 pull_request_target 迁移走**
作者：mrecachinas | 更新于 08-12
改进 CI 安全模型：使用 issue-scoped write token 关闭无效 issue，用无权限的 `pull_request` 信号处理可合并 PR，特权步骤移入单独的 workflow。仓库基础设施安全加固。
🔗 https://github.com/github/copilot-cli/pull/4449

**#4453 [CLOSED] Julesdemangeot ship it patch 1**
作者：julesdemangeot-ship-it | 更新于 08-12
由 "Ship It" 自动化 bot 提交的补丁，已关闭。摘要为空，无进一步信息。
🔗 https://github.com/github/copilot-cli/pull/4453

## 功能需求趋势

从全部 Issues 中可提炼出以下社区关注方向：

- **MCP 生态正经历大规模落地阵痛**：Remote OAuth（CIMD、DCR、Entra 静默刷新）、MCP registry 权限、Docker stdio 容器生命周期、初始化 5xx 重试。数量最多、覆盖面最广，说明 MCP 集成已进入真实生产使用阶段。
- **模型选择与控制权**：子代理模型被降级/忽略、组织模型缺失、BYOK `/models` 浏览多模型。社区要求"显式指定必须生效"，反对静默 fallback。
- **Windows/WSL2 平台体验**：键位映射混淆、socket error 10013、Windows 桌面宿主下的进程泄漏。Windows 用户占比不低，平台细节问题集中暴露。
- **会话生命周期管理**：extension-host 进程按会话泄漏、事件存储耗尽、compaction 递归有损压缩、权限事件在 resume 时重放。长会话用户开始要求资源回收与上下文持久化保证。
- **插件与自动化机制完善**：sessionStart hook 不触发、marketplace autoUpdate 失效。插件机制功能已发布但可靠性待补。

## 开发者关注点

- **模型"静默覆盖"行为引发信任危机**：`code-review` 子代理指定 `gpt-5.6-luna` 却被启动为 `gpt-5.6-sol`（#4458/#4462），`rubber-duck` 的 model 参数覆盖策略（#4432），Task tool 成本守卫静默降级（#3565）。开发者普遍要求：要么严格生效，要么明确报错警告。
- **资源泄漏不释放**：`--server --stdio` 下每个会话泄漏 4 个 extension-host 进程直到 server 退出（#4468）；tgrep 索引器 OOM-kill 主机（#3976）；Docker stdio MCP 容器在会话关闭后继续运行（#4460/#4461）。内存和进程管理是当前最突出的稳定性痛点。
- **MCP 远程服务器容错不足**：`initialize` 遇到一次 502 就整会话标记失败（#4466）；Entra OAuth 因 scope 拼接错误导致每 60-75 分钟重新交互登录（#4464）；Windows 下 OAuth 随机 socket 10013（#4463）。用户在 MCP 上投入明显增加，但对失败恢复体验不满意。
- **会话恢复可靠性**：长驻会话反复 resume 后出现孤儿权限事件重放（#4469）、event store 耗尽导致会话被误判取消（#4467）、compaction 每轮递归压缩使早期决策丢失（#4441）。高频 resume 用户需要更稳健的会话持久化方案。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

### Kimi Code CLI 社区动态日报 —— 2026-08-13

> 数据来源：github.com/MoonshotAI/kimi-cli

#### 1. 今日速览
过去 24 小时，Kimi Code CLI 无新版本发布，社区活跃度集中在功能讨论与稳定性修复上。核心议题为 [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) 提出的「记忆系统」（跨会话持久上下文），该 Issue 已积累 36 条评论；PR 方面则有两条修复分支（字符串缩短、Web 会话错误处理）在活跃跟进中。

#### 2. 版本发布
无新版本发布。

---

#### 3. 社区热点 Issues

> 说明：过去 24 小时更新量极少，仅 1 个 Issue 处于更新状态，因此不再从 10 个中挑选，以下为该窗口内最值得关注的 Issue。

- **[#1283 [enhancement] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** [开放]
  - 作者：CatKang | 创建：2026-02-27 | 更新：2026-08-13 | 评论：36 | 👍：0
  - **为什么重要**：这是一个持续近半年的长期功能请求，目标是让 Kimi Code CLI 实现**跨会话记忆**——既包含 AI 自动管理的笔记，也包含用户手动定义的指令。36 条评论说明社区讨论有实质热度，但 👍 为 0 也忠实地反映出社区对该需求存在争议或观望情绪。
  - **对项目的影响**：一旦落地，将显著提升 CLI 在大型项目中的连续工作体验，避免每轮会话“从零开始”的割裂感，是 AI 编程助手向“个人化工作记忆”演进的关键一步。

---

#### 4. 重要 PR 进展

> 说明：过去 24 小时内仅有 2 个 PR 在更新，且出自同一作者，以下全部列出。

- **[PR #2449 fix(string): strip newlines in shorten_middle before the length check](https://github.com/MoonshotAI/kimi-cli/pull/2449)** [开放]
  - 作者：Ricardo-M-L | 创建：2026-06-13 | 更新：2026-08-12
  - **功能/修复内容**：`shorten_middle(text, width, remove_newline=True)` 被 `extract_key_argument` 用来渲染**单行**的工具调用摘要，但该函数在输入字符串较短时会提前返回，**没有执行换行符折叠**，导致含换行的参数在终端显示成多行。该 PR 将换行符剥离提前到长度检查之前完成。
  - **价值**：这是一处边界条件 bug，直接影响工具调用参数输出的终端可读性，修复后能让信息密度和排版更稳定。

- **[PR #2324 fix(web): handle BrokenPipeError in SessionProcess.send_message](https://github.com/MoonshotAI/kimi-cli/pull/2324)** [开放]
  - 作者：Ricardo-M-L | 创建：2026-05-19 | 更新：2026-08-12
  - **功能/修复内容**：`SessionProcess.send_message` 在向子进程 `stdin` 写入并 `await drain()` 时，没有防范子进程在 `start()` 调用与实际写入之间退出的情况，从而可能抛出 `BrokenPipeError` 中断 Web 会话。该 PR 为这类资源争用/竞态条件增加了容错处理。
  - **价值**：提升基于 Web 的会话运行生命周期健壮性，避免子进程因用户中断或意外退出导致整体会话挂死。

---

#### 5. 功能需求趋势
从当前 Issue 和 PR 的活跃线索来看，社区最关注的功能方向为：

- **持久上下文 / 记忆系统（#1283）**：横跨项目模式、用户偏好与历史对话，期望同时支持 **AI 自动记忆** 与 **用户手动指令**，是当前呼声最集中的长期功能。
- **基础体验打磨**：输出渲染的准确性（单行摘要）与 Web 会话的稳定性，是确保工具在真实开发环境中可靠运行的基础。

#### 6. 开发者关注点
- **上下文连续性缺失**：开发者不希望每次会话都从零开始，跨会话记忆可帮助大型项目中的多轮协作与项目经验积累。
- **记忆的可控性**：针对 #1283 的讨论涉及对自动记忆边界、手动指令优先级的担忧，社区期望有“记忆编辑 / 删除 / 禁用”等控制维度，避免 AI 误记或无约束增长。
- **边界场景稳定性**：PR 反馈显示，换行格式混乱与子进程退出导致的中断，是影响日常使用的实际痛点，开发者希望 CLI 在异常情况下也能给出更合理的表现。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-13

## 1. 今日速览

昨日发布 v1.18.18 与 v1.18.17 两个维护版本，集中修复了 Kimi 系统提示词选择、xai 推理力度、会话压缩与自动重试抖动等问题。社区方面，Gemini 3 Pro 函数调用失败（#4832）仍是讨论热度最高的话题（35 条评论）；配置热重载需求（#6815）以 88 个 👍 成为最受期待的功能。此外，多条关于 OpenCode Go 付费后仍被限制的反馈（#42132、#42140、#42154）值得官方关注。

## 2. 版本发布

**v1.18.18**
- 核心 Bugfix：
  - 为官方 Moonshot/Kimi 提供商正确选择 Kimi 系统提示词
  - 修复 xai 模型的 xhigh 推理力度选项

**v1.18.17**
- 核心 Bugfix：
  - 会话压缩保留完整最近的对话回合，并为较小模型生成更清晰的摘要
  - 新增 MERGE Gateway 推理变体支持，使相关模型选项正常工作（@MatthewFeroz）
  - 限制自动会话重试次数并加入抖动，减少重复重试

## 3. 社区热点 Issues（Top 10）

1. **[BUG] Gemini 3 Pro function calling fails - missing `thoughtSignature` support**（#4832）
   - 35 条评论，14 👍。Gemini 3 Pro 在函数调用/工具使用场景下因缺少 `thoughtSignature` 导致请求失败，已关闭但仍为社区关注焦点。
   - https://github.com/anomalyco/opencode/issues/4832

2. **[FEATURE] Add command palette action to reload configuration without restart**（#6815）
   - 88 👍，8 条评论。社区强烈希望添加命令面板操作，无需退出重启即可加载配置变更（opencode.json、AGENTS.md），是当前最热的功能需求。
   - https://github.com/anomalyco/opencode/issues/6815

3. **[BUG] "Copied to clipboard" doesn't work**（#41470）
   - 11 条评论。VSCode Server（Docker）环境下显示“已复制”但系统剪贴板无内容，影响远程开发场景。
   - https://github.com/anomalyco/opencode/issues/41470

4. **[BUG] MCP tools connected but not exposed to agent**（#33027）
   - 7 条评论。MCP 服务器连接成功且 tools/list 返回 6 个工具，但 agent 工具列表不可见，MCP 可靠性问题持续存在。
   - https://github.com/anomalyco/opencode/issues/33027

5. **[BUG] Azure OpenAI large models hang due to Responses API streaming**（#42147）
   - 4 条评论。gpt-5.6-luna/sol、gpt-5.4、o3 在原生 Azure provider 下挂起，小模型正常，疑似 Responses API 流式处理问题。
   - https://github.com/anomalyco/opencode/issues/42147

6. **[BUG] OpenCode Go subscription not recognized**（#42132）
   - 4 条评论。用户购买订阅后仍提示 “limit exceeded buy Go”，且 Deepseek for Go 提示仅限中国地区；同日出现多条同类付费反馈（#42140、#42154、#42114），建议官方排查计费与订阅状态同步。
   - https://github.com/anomalyco/opencode/issues/42132

7. **[BUG] Cyclic symlinks in global skills cause blank TUI and unbounded memory growth**（#42216）
   - 2 条评论。全局 skill 中的循环目录符号链接导致 TUI 空白、日志停留在 `message=init`，实测内存增长至约 7.3 GB，属严重稳定性问题。
   - https://github.com/anomalyco/opencode/issues/42216

8. **[FEATURE] Protect .env files in grep/glob results, not just direct read**（#17073）
   - 6 条评论，5 👍。权限规则只匹配搜索模式而非匹配文件路径，导致 `.env` 文件内容可通过 grep/glob 泄露，安全增强需求明确。
   - https://github.com/anomalyco/opencode/issues/17073

9. **[BUG] Error: Unexpected error disk I/O error**（#32571）
   - 6 条评论。`opencode debug config` 在特定目录下触发磁盘 I/O 错误，影响 v1.17.7 用户，可能与文件系统或工作目录处理有关。
   - https://github.com/anomalyco/opencode/issues/32571

10. **[BUG] opencode -c shows wrong working directory**（#42221）
    - 1 条评论但当日已有对应 PR（#42223）。在无历史会话的新目录首次运行 `opencode -c`，会恢复旧目录会话而非当前目录。
    - https://github.com/anomalyco/opencode/issues/42221

## 4. 重要 PR 进展（Top 10）

1. **fix(tui): correct working directory when continuing session in a new directory**（#42223）
   - 修复 #42221：SDK `pick()` 未回退到 `config.directory`，导致新目录错误恢复旧会话。
   - https://github.com/anomalyco/opencode/pull/42223

2. **fix(tui): highlight queued prompts on hover**（#42219）
   - 为悬停的队列提示坞添加背景高亮，让现有点击行为更可发现，提升 TUI 交互体验。
   - https://github.com/anomalyco/opencode/pull/42219

3. **fix(tui): highlight shell tool commands**（#42214）
   - 在代理调用 shell 工具时，对命令输入框内联行和展开块应用 Bash 语法高亮（关键字、字符串、变量、注释等）。
   - https://github.com/anomalyco/opencode/pull/42214

4. **fix(client): cancel SSE readers after handshake**（#42209）
   - 减少长生命周期 Promise SSE 订阅重连/取消时的原生内存增长，避免重复建立连接时的资源泄漏。
   - https://github.com/anomalyco/opencode/pull/42209

5. **fix(client): prevent stale service replacement**（#42185）
   - 防止旧版 CLI/Desktop 客户端在更新后将新版后台服务替换为旧二进制，避免版本回退。
   - https://github.com/anomalyco/opencode/pull/42185

6. **fix(client): require authenticated service stop**（#42186）
   - 要求托管服务认证并接受精确实例停止请求，超时不再降级为 `SIGTERM/SIGKILL`，提升服务管理安全性。
   - https://github.com/anomalyco/opencode/pull/42186

7. **chore: move drive and catalog ownership**（#42207）
   - 将 OpenCode Drive 和终端目录从本仓库移出，所有权转移至 anomalyco/opencode-drive#57，简化主仓库维护范围。
   - https://github.com/anomalyco/opencode/pull/42207

8. **fix(core): refresh fallback file search**（#42218）
   - 项目文件系统变化时使 ripgrep 备用文件索引失效，下次搜索重建快照，确保新文件出现。
   - https://github.com/anomalyco/opencode/pull/42218

9. **fix(mcp): retry local server connection on transient spawn failures**（#42020）
   - 修复并行启动 MCP 服务器时的竞态问题（#41996），对瞬时 spawn 失败添加重试。
   - https://github.com/anomalyco/opencode/pull/42020

10. **fix(core): reject invalid UTF-8 directory paths in serve**（#38314）
    - 拒绝 `opencode serve` 中包含 U+FFFD 替换字符的无效路径，修复 #38235/#37764。
    - https://github.com/anomalyco/opencode/pull/38314

## 5. 功能需求趋势

从近期 Issues 中提炼出社区最关注的五个方向：

- **配置热重载**（#6815，88 👍）：无需重启即可生效配置变更，是当前呼声最高的功能，开发者对频繁重启深感不便。
- **安全与隐私增强**（#17073、#40111）：grep/glob 结果应覆盖权限规则防止 `.env` 泄露；MCP 服务器支持按服务器维度配置 TLS 信任，适配内网/家庭网络场景。
- **新模型兼容性**（#4832、#42147、#42135、#42168）：Gemini 3 Pro、Azure gpt-5.6 系列、DeepSeek V4 Pro、Nemotron 3 Ultra 等新模型在函数调用、流式响应、多轮对话和速度方面均存在问题，需持续适配。
- **桌面端体验完善**（#42213、#41364）：标签页切换保留滚动位置；为桌面应用增加语音输入与语音摘要输出能力。
- **MCP 可靠性**（#33027、#40111、#42020 PR）：工具连接成功但不可见、本地服务器启动竞态、证书信任配置等问题频发，MCP 生态仍需加固。

## 6. 开发者关注点

- **付费订阅问题集中爆发**：仅 8 月 12 日一天就有至少 5 条关于 OpenCode Go 付费后仍被限制的反馈（#42132、#42140、#42145、#42154、#42114），涉及订阅未同步、地区限制、DeepSeek 额度未更新等，严重影响了用户信任，建议优先排查计费系统状态同步链路。
- **剪贴板与远程环境兼容性**：VSCode Server/Docker 下复制功能失效（#41470），远程开发是高频使用场景，需验证 TUI 在容器内的剪贴板桥接。
- **项目/目录切换困扰**：新目录打开旧会话（#42221）、同名项目无法区分（#42040），工作目录解析逻辑需更严谨。
- **大模型性能与稳定性**：Nemotron 3 Ultra 速度过慢、Azure 大模型流式挂起（#42168、#42147）、多轮后不再调用 API（#42217)），用户在真实开发中对模型响应质量和稳定性高度敏感。
- **错误恢复与迁移**：磁盘 I/O 错误（#32571）、迁移时 `no such column: project_id`（#42170）等异常场景缺乏友好的恢复引导，开发者期望更明确的错误提示和修复路径。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-13

## 今日速览
- 社区焦点集中在两个稳定性问题上：**上下文自动压缩失效**（#6879，18 条评论、17 👍）与 **macOS 高 CPU 占用**（#7730，11 条评论），二者均直接影响长会话体验。
- PR 侧有两项值得关注：**#8032 组件级鼠标事件**使 TUI 扩展层可响应用户点击/滚动，**#7970 滚动状态指示器**为长时间回看 transcript 的用户提供视觉反馈。
- 模型支持方面，社区持续推动本地模型接入（#8049 Ollama 代理、#8051 llama.cpp 全量模型列表），同时 Grok 4.6 模型已通过 PR #8042 加入。

## 社区热点 Issues

1. **[#6879] auto-compaction 在上下文超过 100% 后不触发，直到 provider 溢出** — 18 评论 / 17 👍
   最热 Issue。长 agentic 会话中 footer 超过压缩阈值后仍继续增长，直到 API 端拒绝请求（373k tokens）才触发压缩。用户建议在每个 agent 步骤后检查上下文占用。社区对“压缩机制过于被动”的反馈集中。
   https://github.com/earendil-works/pi/issues/6879

2. **[#7730] macOS 长会话高 CPU 占用** — 11 评论 / 8 👍
   Pi 在 macOS 上 CPU 在 50%-110% 间波动，内存 600-800MB，且与上下文大小或会话长度相关。这属于长会话稳定性核心问题，影响日常使用的持续性。
   https://github.com/earendil-works/pi/issues/7730

3. **[#7836] Edit 模糊匹配无法处理空白长度差异** — 10 评论
   编辑工具对 `oldText` 的模糊匹配会因多余空格/缩进而失败，即使内容语义完全相同。报告者提到该问题对小模型尤其不友好，弱模型经常因此导致编辑失败。
   https://github.com/earendil-works/pi/issues/7836

4. **[#7835] Edit 工具拒绝单对象格式的 edits 参数** — 4 评论
   部分模型会把 `edits` 包装成单个对象而非数组，工具直接抛错。该 Issue 与 #7836 共同指向模型输出与工具预期的兼容性摩擦，是提升 Agent 稳定性的关键路径。
   https://github.com/earendil-works/pi/issues/7835

5. **[#8055] TUI 对 Ambiguous-width 字符按 1 列计算，CJK 终端下表格错位** — 3 评论 / 新增于今日
   ①、±、…、€ 等字符在 CJK 终端显示为 2 列宽，但 TUI 按 1 列计算导致表格/列表边框错位。影响到中文/日文用户的渲染质量。
   https://github.com/earendil-works/pi/issues/8055

6. **[#8000] `@` 文件补全中直接子级被深层匹配挤掉** — 3 评论
   当输入 `@~/<dir>/pro` 时，直接子级 `projects/` 可能被更深层的同名 basename 匹配击败，导致用户想要的条目不出现。该排序缺陷影响文件导航效率。
   https://github.com/earendil-works/pi/issues/8000

7. **[#7724] 冷恢复会重放已被自动恢复清除的溢出 assistant 消息** — 1 评论
   上下文溢出触发压缩并成功重试后，重新打开 session 会把之前失败/截断的 assistant 响应重新加回模型历史，导致历史被污染。与 #6879 同样属于上下文管理可靠性问题。
   https://github.com/earendil-works/pi/issues/7724

8. **[#8047] Windows 上 Pi Server 测试套件无法绑定 Unix socket** — 2 评论
   31 个测试因 `listen EACCES` 失败。Windows 11 环境的 Unix socket 路径兼容性问题，阻塞了平台级 CI。
   https://github.com/earendil-works/pi/issues/8047

9. **[#8041] HTML 导出应渲染 Mermaid 与 LaTeX 以匹配 TUI** — 1 评论 / 1 👍
   目前 HTML 导出跳过 TUI 的数学/图表变换，mermaid 和 LaTeX 以原始文本呈现。属于功能完整度诉求，已有前期 PR 铺垫，社区期待落地。
   https://github.com/earendil-works/pi/issues/8041

10. **[#8054] WSL 下文件链接使用 Linux URI，Windows Terminal 无法打开** — 1 评论 / 新增于今日
   希望 `/mnt/d/rest` 映射为 `file:///D:/rest`，其他路径用 `file://wsl.localhost/<distro>/...`，改善 WSL 用户的跨系统体验。
    https://github.com/earendil-works/pi/issues/8054

## 重要 PR 进展

1. **[#8032] feat(tui): 让组件在自己的行上接收鼠标事件**（OPEN）
   实现 #7683。为 `Component` 增加可选 `onMouse(event)` 钩子，`TuiAltScreen` 从最内层组件开始命中测试，提供相对坐标。扩展组件、自定义浮层从此可响应点击和滚动。
   https://github.com/earendil-works/pi/pull/8032

2. **[#7970] feat(coding-agent): transcript 滚动回看时显示指示器**（OPEN）
   非跟随底部时在状态栏显示 `↓` 箭头，滚动到底自动消失。一个小而直观的体验改进，解决长会话回看时“位置迷失”的问题。
   https://github.com/earendil-works/pi/pull/7970

3. **[#8049] feat: 通过本地模型代理在 Pi 中使用 Ollama 模型**（CLOSED）
   新增两个零依赖 Node.js 脚本，支持 Ubuntu/macOS/Windows 三种平台，本地起一个代理即可将 Ollama 模型接入 Pi。满足本地模型需求的核心 PR，社区关注度高。
   https://github.com/earendil-works/pi/pull/8049

4. **[#8042] feat(ai): 添加 Grok 4.6**（CLOSED）
   将 Grok 4.6 加入 xAI Responses 模型集，保留 `low/medium/high/xhigh` 推理等级，并补充测试。模型支持跟进的常规但必要的更新。
   https://github.com/earendil-works/pi/pull/8042

5. **[#8052] fix(coding-agent): session 持久化改为事务性**（CLOSED）
   修复 `_appendEntry()` 先改内存图再写磁盘导致的一致性风险（如 ENOSPC 后会破坏会话图）。属于数据可靠性关键修复，避免重启后会话损坏。
   https://github.com/earendil-works/pi/pull/8052

6. **[#7982] fix(coding-agent): 在流式事件中保留 usage**（CLOSED）
   修复 #7911（0.84.0 删除 `message_update` 累计消息后 `usage` 字段也被移除）。在保持流大小线性增长的前提下保留 usage，并补充回归测试。
   https://github.com/earendil-works/pi/pull/7982

7. **[#8022] fix: triggerTurn: false 不应启动新 turn**（CLOSED）
   修复 #7783。此前 `agent_end` 扩展处理器用 `{triggerTurn: false}` 发送展示型消息时，仍会意外触发第二个假响应。该修复避免无意的额外模型调用。
   https://github.com/earendil-works/pi/pull/8022

8. **[#5262] feat(ai): 添加 Anthropic Vertex provider**（OPEN）
   基于 `AnthropicVertex` SDK 的薄适配器，复用现有 Anthropic Messages 流式链路。数年前的需求在持续跟进中，反映用户对 GCP Vertex 上 Claude 的稳定需求。
   https://github.com/earendil-works/pi/pull/5262

9. **[#8012] fix: 不将 settings 配置的技能目录根文档加载为技能**（OPEN）
   修复 #7805。`README.md`/`AGENTS.md` 等根级 Markdown 文件不再默认识别为 skill，只有包含有效 frontmatter 时才作为候选。减少配置时的误报警告。
   https://github.com/earendil-works/pi/pull/8012

10. **[#8014] feat(ai): 添加同步语音生成能力**（CLOSED）
    为配置的 global 和 CN 端点补齐全同步语音合成 SDK 路径，包含类型定义、注册表、请求映射与状态校验。继续补齐多模态能力矩阵。
    https://github.com/earendil-works/pi/pull/8014

## 功能需求趋势

- **本地/边缘模型接入**：Ollama 代理（#8049）、llama.cpp 模型全量列表（#8051）、`/add-local-model` 交互式注册扩展（#8039）。社区希望减少对云 API 的依赖，将 Pi 接入本地运行时代。
- **新模型与 Provider 持续扩展**：Grok 4.6（#8042）、Anthropic Vertex（#5262）、DeepSeek 参数兼容修复（#8018）、Scaleway 开放权重模型（#6165）、Xiaomi 计费端点拆分（#4112）。模型支持仍是社区 PR 最活跃的方向。
- **上下文管理与长期会话**：auto-compaction 不触发（#6879）、冷恢复重放错误消息（#7724）、usage 在流事件中缺失（#7911/#7982）。长会话可靠性正在成为比功能迭代更强烈的诉求。
- **TUI 交互精细化**：组件级鼠标事件（#7683/#8032）、鼠标滚轮步长可配置（#7765）、滚动状态指示（#7908/#7970）、CJK 宽度修正（#8055）。终端 UI 从“可用”走向“可配置”。
- **扩展 API 能力增强**：消息显示钩子可按需隐藏/替换助手消息（#8035）、durable custom-message 异步确认（#8023）、`triggerTurn: false` 语义修正（#7783/#8022）。扩展系统正逐渐成为一等公民。

## 开发者关注点

- **编辑工具对弱模型不够宽容**：#7836 和 #7835 共同反映了模型输出格式偏差导致的编辑失败。开发者希望模糊匹配能容忍空白差异、`edits` 参数能接受单对象形式，以适配低能力模型的实际输出。
- **上下文溢出恢复流程不可靠**：#6879 的“压缩只在 API 拒收时才触发”与 #7724 的“冷恢复重放历史垃圾消息”组合，说明 overflow 处理的生命周期管理仍存在缺口。
- **本地运行资源消耗**：#7730 中 macOS 高 CPU + 内存随会话增长，开发者期待对长上下文会话的资源使用做优化。
- **配置写回保真性**：#8009 指出 Pi 重写 `settings.json` 时移除文件末尾换行，对于把配置纳入版本控制的用户造成无谓的 diff 噪音。
- **跨平台细节仍未拉平**：Windows 测试套件的 Unix socket 绑定失败（#8047）、WSL 文件 URI 无法被 Windows Terminal 识别（#8054），反映 Linux 优先之外还有大量平台适配空间。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-13

## 今日速览

Qwen Code Desktop 连续发布 v0.2.1 与 v0.2.0 两个版本，重点优化了项目记忆作用域与会话遥测；社区侧围绕自动记忆召回、长任务执行稳定性、Vertex AI 认证等话题展开热烈讨论；Web Shell 相关功能与修复占据 PR 主流，多模态接入实验（omni-experiment）路线图持续活跃。


## 版本发布

### Qwen Code Desktop v0.2.1
- **重构默认项目记忆作用域**：由全局改为工作区隔离（PR #8856）
- **对齐会话生命周期遥测**，完善会话追踪

🔗 [Release v0.2.1](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.2.1)

### Qwen Code Desktop v0.2.0
- **稳定 Web Shell 会话历史分页**（PR #8914）
- **新增会话目录共享能力**

🔗 [Release v0.2.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.2.0)


## 社区热点 Issues（Top 10）

### 1. #7040 RFC：可靠的自动记忆召回——时机、质量与遥测
**标签**：P2 / feature-request / need-discussion
10 条评论。该 RFC 持续迭代中，当前第 2/3 项（有界首轮召回 + 确定性快速路径）已在 PR #8716 中进入评审。这是 Qwen Code 上下文性能路线图的核心议题。

🔗 https://github.com/QwenLM/qwen-code/issues/7040

### 2. #8963 不能自动运行：长任务执行卡死
**标签**：P2 / bug / shell
9 条评论。用户反馈无论 yolo 还是 auto 模式，跑 Python 脚本或长命令都会卡住不动，无法完成数小时至数天的长任务。用户对比称 Kimi Code 在 UI 稳定性和模式准确性上优于 Qwen，需重点关注。

🔗 https://github.com/QwenLM/qwen-code/issues/8963

### 3. #8957 [回归] 0.21.2 起加载图片即崩溃
**标签**：P2 / bug / 回归
8 条评论。0.21.1 为最后一个正常版本，0.21.2 之后读取图片时 Qwen Code 直接崩溃。需要紧急定位处理。

🔗 https://github.com/QwenLM/qwen-code/issues/8957

### 4. #8678 大会话恢复超时时需保留当前会话
**标签**：P1 / bug / daemon
7 条评论。PR #8691 已合入实现超时契约、迟到请求安全与可观测性；PR1 为该问题的第一段落地，后续仍需跟进。

🔗 https://github.com/QwenLM/qwen-code/issues/8678

### 5. #8562 tmux 分屏内闪烁问题
**标签**：P2 / bug / Linux / UI
7 条评论。MacBook iTerm2 SSH 至 Ubuntu 后进入 tmux，多发消息时 tmux 分屏内闪屏。用户用 Qwen 3.8 Max 排查后指向 Qwen Code 版本问题。

🔗 https://github.com/QwenLM/qwen-code/issues/8562

### 6. #8097 后台 Agent 协调缺陷：重复工作、过早完成与 send_message 不可交互
**标签**：P2 / bug / multi-agent
6 条评论。多个后台 Explore 子代理并发时出现重复劳动，且 `send_message` 无法在飞行中交互沟通。属于多代理路线图关键短板。

🔗 https://github.com/QwenLM/qwen-code/issues/8097

### 7. #9016 Vertex AI 无法使用 ADC 认证：强制 API Key 与 ADC 互斥
**标签**：P2 / bug / google-auth
4 条评论。Vertex AI 认证要求 API Key，但配置 API Key 后又返回 401，导致 ADC（Application Default Credentials）完全不可用。

🔗 https://github.com/QwenLM/qwen-code/issues/9016

### 8. #9002 Python SDK 拒绝 permission_mode="auto"
**标签**：P3 / bug / SDK
5 条评论。CLI 支持 `auto` 权限模式，但 Python SDK 客户端侧校验直接拒绝该值，导致 SDK 与 CLI 行为不一致。

🔗 https://github.com/QwenLM/qwen-code/issues/9002

### 9. #8897 --approval-mode 与 --auth-type 已注册但不在 --help 中
**标签**：P2 / bug / CLI
5 条评论。0.21.9 中两个参数已注册且参与校验，但 `qwen --help` 不展示，造成发现性差。

🔗 https://github.com/QwenLM/qwen-code/issues/8897

### 10. #9026 NO_TOOL_RESULT_PROGRESS 导致 headless 模式硬失败
**标签**：P2 / bug / non-interactive
3 条评论。当模型在工具结果后安静结束回合时，headless 模式直接以 `InvalidStreamError` 中止，需要容错处理。

🔗 https://github.com/QwenLM/qwen-code/issues/9026


## 重要 PR 进展（Top 10）

### 1. #8890 refactor(cli)：概括 Conversations 运行时基础
作者 doudouOUC，8/10 创建，8/13 更新。重构 CLI 对话运行时的基础抽象，为后续功能铺路。

🔗 https://github.com/QwenLM/qwen-code/pull/8890

### 2. #8950 feat(web-shell)：可视化与管理动态工作流运行
作者 qqqys，8/11 创建。为 Web Shell 增加动态工作流的一等公民体验：实时执行图、阶段泳道、依赖边、token 用量、审批状态以及暂停/恢复/停止/重试/重跑控制。

🔗 https://github.com/QwenLM/qwen-code/pull/8950

### 3. #8848 feat(web-shell)：重新设计 Channel 策略与工作区管理
作者 qqqys，8/10 创建。Web Shell 频道管理现覆盖直发消息、群组访问、会话路由与工作区归属控制，支持全部发送者和群组策略配置。

🔗 https://github.com/QwenLM/qwen-code/pull/8848

### 4. #8974 feat(web-shell)：配置 Qwen 3.8 推理参数
作者 callmeYe，8/12 创建。基于精确匹配的模型配置清单，启用 `qwen3.8-max` Thinking 与 low/medium/xhigh 三档 effort 控制。

🔗 https://github.com/QwenLM/qwen-code/pull/8974

### 5. #8735 fix(workflows)：重放日志持久化
作者 qqqys，8/8 创建。将工作流重放状态改造为持久化、版本化的检查点契约，恢复时校验精确提交日志前缀。

🔗 https://github.com/QwenLM/qwen-code/pull/8735

### 6. #9007 fix(serve)：按字节限制 ACP HTTP 预附加缓冲区
作者 doudouOUC，8/12 创建。将预附加缓冲区从元素数改为按字节限制，防止内存放大。

🔗 https://github.com/QwenLM/qwen-code/pull/9007

### 7. #9014 fix(core)：尊重 Shell 截断阈值设置
作者 cxruan，8/12 创建。Shell 现尊重配置的 `tools.truncateToolOutputThreshold`，未配置时维持现有 30,000 字符默认值。

🔗 https://github.com/QwenLM/qwen-code/pull/9014

### 8. #8613 feat(web-shell)：基于 tmux 的交互式终端子代理
作者 wenshao，8/5 创建。Agent 可在 daemon 主机的 tmux 会话中运行交互式 CLI（REPL、其他 Agent CLI 或 curses/TUI 应用），Web Shell 中呈现实时交互终端视图。

🔗 https://github.com/QwenLM/qwen-code/pull/8613

### 9. #8989 feat(web-shell)：后台任务通知本地化
作者 ytahdn，8/12 创建。后台 shell、监视器与后台代理完成通知不再硬编码英文，改为结构化可本地化数据。

🔗 https://github.com/QwenLM/qwen-code/pull/8989

### 10. #8982 fix(ci)：降低 ENOSPC 与负载敏感测试抖动
作者 yiliang114，8/12 创建。在不改动 CLI/Core 测试套件的前提下，优化测试门的资源敏感性。

🔗 https://github.com/QwenLM/qwen-code/pull/8982


## 功能需求趋势

从全部 Issues 与 PR 中提炼，社区最关注以下方向：

1. **会话管理与上下文性能**：自动记忆召回（#7040）、大会话恢复超时保护（#8678）、守护进程资源保护拆分（#8091）持续为讨论热点，表明长会话场景下可靠性与性能已成为核心诉求。
2. **多智能体协作与后台任务**：后台 Agent 重复工作与协调缺陷（#8097）、tmux 交互终端子代理（#8613）、动态工作流可视化（#8950），社区对复杂多代理工作流的需求正在快速增长。
3. **Web Shell 功能扩展**：Channel 策略管理、文件上传、工作流可视化、通知本地化（#8848、#8874、#8950、#8989），桌面端 web-shell 正成为交互主战场。
4. **认证与云集成**：Vertex AI ADC 不可用（#9016）、keyless Vertex AI 环境推断缺失（#9025），云服务认证体验问题浮出水面。
5. **新模型能力接入**：Qwen 3.8 推理参数配置（#8974）、Omni 多模态实验路线图（#8197），新模型与多模态接入是既定方向。


## 开发者关注点

- **长任务稳定性是首要痛点**：yolo/auto 模式下长命令卡死（#8963）、headless 模式下工具结果后模型安静结束即硬失败（#9026），长时间运行场景的可靠性反馈集中。
- **终端兼容性与渲染问题**：tmux 分屏内闪烁（#8562）在 Linux 服务器 + SSH 场景下高频出现，影响日常使用体验。
- **CLI/SDK 一致性问题**：`--approval-mode`/`--auth-type` 不显示于 help（#8897）、Python SDK 拒绝 `permission_mode="auto"`（#9002）、`--channel all` 空配置时异常退出（#8975），命令行工具链的细节打磨亟待提升。
- **配置项不生效**：`tools.truncateToolOutputThreshold` 被硬编码阈值覆盖（#8922），用户对"官方文档所述配置与实际行为不符"的容忍度较低。
- **回归问题响应速度**：#8957（0.21.2 图片加载崩溃）与 #8562 均指向近期版本引入的回归，社区期望更快的修复节奏。

---

*数据采集自 github.com/QwenLM/qwen-code，截至 2026-08-13。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-13

> **数据来源**: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（已演变为 CodeWhale 项目，所有 Issue/PR 均迁移至 Hmbown/CodeWhale 仓库）

## 1. 今日速览

今日最核心的动向是 **v0.9.6 正式发布**，标志着项目从 `deepseek-tui` 品牌全面转向 **CodeWhale**（Shannon Labs 产品），旧 npm 包已弃用。与此同时，v0.9.5 引入了多个严重回归——尤其是 **Auto-Review 模式静默阻塞所有 Bash 调用**（#5323），社区已在积极反馈；维护者则通过大规模 "harvest" 机制合入了多项社区 PR（窗口 PiP、复制净化、OrcaRouter 提供商等），并修复了 `lru` 安全漏洞（RUSTSEC-2026-0253）。

## 2. 版本发布

### v0.9.6
- **链接**: [GitHub Releases](https://github.com/Hmbown/DeepSeek-TUI/releases)
- **要点**: Codewhale 是 Shannon Labs 的公开产品名称。`codewhale` 命令、npm 包及发布资产名称保留小写技术标识。旧的 `deepseek-tui` npm 包已弃用，不再获得后续更新。v0.8.x 旧版 `deepseek` / `d` 命令用户需注意迁移路径。

---

## 3. 社区热点 Issues（10 个）

### 🟢 #4949 — Discussion: "Constitution" 中文翻译之争（宪法 / 协作准则）
- **作者**: SparkofSpike | 更新: 08-12 | 评论: 9
- **为什么重要**: 由 PR #4908 引发的翻译争议——"宪法"的词义精准性与中文语境下的政治敏感性之间的矛盾。社区无法达成共识，作者再次发起讨论邀请母语者投票。这是项目国际化过程中文化敏感度的典型案例。
- **链接**: [Issue #4949](https://github.com/Hmbown/CodeWhale/issues/4949)

### 🔴 #5323 — [bug] v0.9.5 回归：Auto-Review 模式静默阻塞所有 Bash 调用和写操作
- **作者**: USTZhanGLu | 更新: 08-12 | 评论: 3
- **为什么重要**: 严重功能性回归。v0.9.5 将 Auto-Review 从"自动批准所有工具调用"变为"静默阻断"，所有 Bash 调用都要求"显式审查"，且无提示，直接破坏自动化工作流。影响所有依赖 Auto-Review 的开发者。
- **链接**: [Issue #5323](https://github.com/Hmbown/CodeWhale/issues/5323)

### 🟢 #5316 — EPIC-005: CodeWhale TUI Crate 分解（Umbrella）
- **作者**: aboimpinto | 更新: 08-12 | 评论: 5
- **为什么重要**: 项目架构级重构的追踪 Epic。明确所有子 EPIC 和 FEAT 的完成归宿，是理解项目未来代码组织方式的核心入口。
- **链接**: [Issue #5316](https://github.com/Hmbown/CodeWhale/issues/5316)

### 🔴 #5034 — [bug] 切换 Provider 后保留不相关的默认模型
- **作者**: Hmbown | 更新: 08-12 | 评论: 5
- **为什么重要**: 切换到 OpenAI 后默认模型仍可能是 `gpt-5.5`（从其他路由继承），provider 与 model 解析不是作为单一整体更新的。在多 API 提供商并用的工作流中极易造成意外调用。
- **链接**: [Issue #5034](https://github.com/Hmbown/CodeWhale/issues/5034)

### 🔴 #5209 — [bug] File 工具 edit 模式静默接受错误参数并假成功
- **作者**: yekern | 更新: 08-12 | 评论: 4
- **为什么重要**: `File` 工具的 `action=edit` 模式下，使用 `new_str` 等错误参数名时不会报错，而是返回"已替换"的假成功消息，迫使每个位置需要 3-5 次重编辑。工具可靠性问题直接影响日常开发效率。
- **链接**: [Issue #5209](https://github.com/Hmbown/CodeWhale/issues/5209)

### 🟢 #5322 — [bug] 回归：输出区域不填满宽终端（v0.8.65 正常）
- **作者**: M-Maciej | 更新: 08-12 | 评论: 2
- **为什么重要**: v0.8 中 transcript 区域可扩展至终端全宽，v0.9 中却被限制在最大宽度，宽屏显示器上大量留白。影响所有宽屏用户的使用体验。
- **链接**: [Issue #5322](https://github.com/Hmbown/CodeWhale/issues/5322)

### 🟢 #5335 — [bug] serve --mcp 返回 "nextCursor": null 破坏严格 MCP 客户端
- **作者**: xiaoray-blip | 更新: 08-12 | 评论: 1
- **为什么重要**: `tools/list` 和 `resources/list` 响应中的 `nextCursor: null` 违反 MCP 规范（必须是 string 或字段缺失），Claude Code 等严格客户端会直接拒绝。影响 MCP 生态集成。
- **链接**: [Issue #5335](https://github.com/Hmbown/CodeWhale/issues/5335)

### 🟢 #5250 — [enhancement] 只能保存一个 API key，多 Provider 使用困难
- **作者**: ffyuhf | 更新: 08-12 | 评论: 3
- **为什么重要**: 作者同时使用 DeepSeek 和 GLM，每次切换模型都要重新获取 key。社区普遍需要多 key 分 Provider 保存能力。与 #5332（OrcaRouter 注册）形成呼应。
- **链接**: [Issue #5250](https://github.com/Hmbown/CodeWhale/issues/5250)

### 🔴 #5047 — [bug, security] API keys 仅持久化在当前工作仓库（明文），而非全局安全存储
- **作者**: Hmbown | 更新: 08-12 | 评论: 2
- **为什么重要**: 保存的 API key 有时只写入 `<cwd>/.codewhale/config.toml` 明文，切换到其他项目 key 消失，且密钥留在仓库内可被读取。安全设计缺陷，影响所有多项目用户。
- **链接**: [Issue #5047](https://github.com/Hmbown/CodeWhale/issues/5047)

### 🔴 #5314 — [bug] 右键"复制消息"包含 UI 装饰字符（● ▏）
- **作者**: maimik | 更新: 08-12 | 评论: 2
- **为什么重要**: 复制结果包含角色图标 `●` 和换行 rail 字符 `▏`，无法直接用于代码粘贴或文档引用——与选区复制的"净内容"行为不一致。细节体验问题，但高频触发。
- **链接**: [Issue #5314](https://github.com/Hmbown/CodeWhale/issues/5314)

---

## 4. 重要 PR 进展（10 个）

### 🟢 #5328 — [OPEN] FEAT-014: 命令契约 crate 边界（facets + shared types）
- **作者**: aboimpinto | 更新: 08-12
- **内容**: EPIC-005/006 的一部分，为 TUI 命令分解设计原型迁移形状，暂不改造生产代码。epic 所有者批准了上游提前审查例外。
- **链接**: [PR #5328](https://github.com/Hmbown/CodeWhale/pull/5328)

### 🟢 #5339 — [OPEN] fix(engine): 抑制子 shell 的完成事件
- **作者**: cyq1017 | 更新: 08-12
- **内容**: 过滤子拥有的后台 shell 完成事件，避免混入父模型流；保留无主父级完成与任务/状态可见性；新增父/子作业回归测试。修复 #5325。
- **链接**: [PR #5339](https://github.com/Hmbown/CodeWhale/pull/5339)

### 🟢 #5338 — [OPEN] feat(web): docs 指南页迁移到字典 spine
- **作者**: Lstarsky0 | 更新: 08-12
- **内容**: #5337 的首个切片（每 PR 一组页面）。移除 `app/[locale]/docs/guide/page.tsx` 中的 `isZh` 三元分支，引入逐页字典模式（`DocsGuideDict` 9 个键）。后续 PR 将统一复用此模式。
- **链接**: [PR #5338](https://github.com/Hmbown/CodeWhale/pull/5338)

### 🟢 #5333 — [OPEN] feat(tui): 将宿主机终端窗口固定为迷你置顶窗口（PiP）
- **作者**: Hmbown | 更新: 08-12
- **内容**: Harvest 社区 PR #5318（SparkofSpike），是 v0.9.7 首个贡献者集成。右键菜单或 `/pin` 命令将终端窗口缩至 640x400 并置顶，再次触发恢复原尺寸。原 PR 因旧 base CI 失败，fork push 被拒，走维护者 harvest 路线落地。
- **链接**: [PR #5333](https://github.com/Hmbown/CodeWhale/pull/5333)

### 🟢 #5336 — [OPEN] fix(mcp): nextCursor 无后续页时省略该字段
- **作者**: xiaoray-blip | 更新: 08-12
- **内容**: 修复 #5335。`tools/list` 和 `resources/list` 不再返回 `nextCursor: null`，符合 MCP 规范（string 或 absent），解除 Claude Code 等严格客户端的拒绝。
- **链接**: [PR #5336](https://github.com/Hmbown/CodeWhale/pull/5336)

### 🟢 #5329 — [CLOSED] fix(tui): 升级 lru 至 0.18 并解除 ratatui-core 锁定（RUSTSEC-2026-0253）
- **作者**: Hmbown | 更新: 08-12
- **内容**: `lru 0.16.4` 的 `LruCache::pop()` 存在 panic 安全缺陷，可留下悬空链表指针。0.18.2 已修复。此 PR 恢复 main 分支的绿色 CI 门禁。
- **链接**: [PR #5329](https://github.com/Hmbown/CodeWhale/pull/5329)

### 🟢 #5327 — [CLOSED] feat(tui): 添加交互式扩展管理器
- **作者**: Inference1 | 更新: 08-12
- **内容**: 新增本地化 `/plugin` 和 `/plugins` 命令的交互式扩展管理器；通过 digest 绑定控制器集中管理 bundle 生命周期；遗留可执行工具以只读、独立批准清单项保留。
- **链接**: [PR #5327](https://github.com/Hmbown/CodeWhale/pull/5327)

### 🟢 #5330 — [CLOSED] fix(session): 将快照读取与崩溃恢复分离
- **作者**: Hmbown | 更新: 08-12（Harvest 自 #5320 / h3c-hexin）
- **内容**: 新增 `load_session_snapshot`（工具调用运行期间可无副作用读取）和 `recover_session_for_resume`（返回修复统计，嵌入宿主可在确认进程/引擎重启后执行恢复）。修复因 base drift 导致 CI 失败的贡献者版本。
- **链接**: [PR #5330](https://github.com/Hmbown/CodeWhale/pull/5330)

### 🟢 #5332 — [CLOSED] feat(config): 注册 OrcaRouter 为命名 Provider
- **作者**: Hmbown | 更新: 08-12（Harvest 自 #5321 / XiaoHuo888-hue）
- **内容**: 以与 OpenRouter 相同的方式接入 OrcaRouter（OpenAI 兼容网关，`ORCAROUTER_API_KEY` 以 `sk-orca-` 开头），解锁 150+ 模型，模型选择器、配置引用和文档保持一致。
- **链接**: [PR #5332](https://github.com/Hmbown/CodeWhale/pull/5332)

### 🟢 #5331 — [CLOSED] fix(tui): 复制消息不含视觉 rail 装饰
- **作者**: Hmbown | 更新: 08-12（Harvest 自 #5319 / XhesicaFrost，关闭 #5314）
- **内容**: 用户/助手消息单元格复制 canonical 源内容而非渲染后的 Ratatui 行；Tool、Thinking、System 等复杂单元格保留完整转录路径。附带回归测试。
- **链接**: [PR #5331](https://github.com/Hmbown/CodeWhale/pull/5331)

---

## 5. 功能需求趋势

从近 24 小时更新的 Issues 中可提炼出以下社区关注方向：

1. **国际化（i18n）纵深推进**：不只是翻译覆盖，而是架构级的字典 spine 统一（#5337、#5338、#5334），以及"Constitution"这类深层文化概念的翻译讨论（#4949）。项目正在从"支持多语言"走向"语言无关的架构"。
2. **多 Provider 与 API Key 管理**：#5250（多 key 保存）、#5332（OrcaRouter 注册）表明用户跨服务商使用成为常态，但当前单 key 明文存储（#5047）已构成实际阻碍。
3. **后台任务统一可见性**：#5270 提出的 unified tasks surface（shell + subagents + durable workers）是 v0.9.5 的一个重要方向，配合 #5316 的 crate 分解，项目正在构建更清晰的运行时架构。
4. **MCP 协议规范性**：#5335 虽是小 bug，但反映了工具链对 MCP 标准合规的严格要求，未来会有更多 MCP 相关能力建设。
5. **桌面端集成增强**：#5318/#5333 的窗口 PiP（画中画）功能是 TUI 向桌面体验延伸的信号，预计后续会有更多窗口管理、通知联动类功能。
6. **安全与可靠性优先**：cargo-deny 安全漏洞修复（#5329）、API key 安全存储（#5047）、工具假成功修复（#5209）等都指向社区对"可信赖工具"的强烈诉求。

---

## 6. 开发者关注点

从 Bug 报告和 PR 评论中可总结出开发者最集中的痛点和诉求：

1. **v0.9.5 回归问题集中爆发**：#5323（Auto-Review 静默阻塞）、#5322（宽屏适配回退）等多个回归表明 0.9.x 的重构引入了 UX 和流程上的兼容性破坏，开发者对"升级即受伤"非常敏感。
2. **"假成功"比报错更可怕**：#5209 中 File 工具对错误参数返回成功消息、#5215 中 prompt 对工具执行方式的过期描述，都体现了"模型感知与实现不一致"的问题——这在 agent 工作流中被放大为反复重试的成本。
3. **CI/Base Drift 阻碍社区贡献**：多个社区 PR（#5318、#5319、#5320、#5321）因 base drift 无法通过 CI，fork push 又被拒，最终只能由维护者通过 harvest 流程重新落地。这暴露出项目贡献门槛问题，维护者正在用流程化的 harvest 机制缓解。
4. **会话恢复与快照安全**：#5330/#5320 的"将快照读取与崩溃恢复分离"是高频需求方向，配合 #5000（中断输出的持久化）和 #5272（prompt 级文件恢复），社区对"不丢失工作"的诉求强烈。
5. **API Key 的多环境管理**：#5047 指出的明文存储与 #5250 的单 key 限制，是目前阻碍多 Provider 工作流落地的最大工程障碍之一。开发者期望"一次配置、全局可用、独立保存"的密钥管理能力。

---

> 日报生成时间：2026-08-13 | 数据窗口：过去 24 小时 | 仓库：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) / [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*