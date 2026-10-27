# AI CLI 工具社区动态日报 2026-07-28

> 生成时间: 2026-07-28 03:13 UTC | 覆盖工具: 9 个

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

好的，作为专注于AI开发工具生态的资深技术分析师，我已深入分析2026年7月28日这8款主流AI CLI工具的社区动态。以下是基于数据的横向对比分析报告，旨在为您提供清晰的生态全貌和决策参考。

---

### **AI CLI 工具生态横向对比分析报告 (2026-07-28)**

#### **1. 生态全景**

当前AI CLI工具生态正处于 **“从功能探索到稳定性与平台化”的过渡期**。一方面，核心Agent能力（如MCP集成、子任务编排、YOLO模式）已成为标配，各工具在功能上趋于同质化；另一方面，**跨平台（特别是Windows）稳定性、会话数据一致性、成本透明度和身份认证**已成为社区普遍关注的三大核心痛点。同时，社区对 **非交互模式（ACP/CAPA）、外部知识集成（企业级MCP）以及自动化工作流（Hooks、技能）** 的需求显著提升，标志着开发者不再满足于“聊天式”编码，而是期望CLI工具成为开发流程中可靠、可集成的基础设施。

#### **2. 各工具活跃度对比**

| 工具名称 | 活跃度评级 | 今日热点 Issues | 重要 PR 数量 | 版本发布 | 社区焦点关键词 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | ⭐⭐⭐⭐⭐ | 10条 (高热度) | 5 | 无 | Windows稳定性、会话数据丢失、计费争议 |
| **OpenAI Codex** | ⭐⭐⭐⭐⭐ | 10条 (极高热度) | 10 (均已合并) | 2个Alpha版 | `/undo`回归、Windows崩溃、MCP OAuth、会话日志膨胀 |
| **Gemini CLI** | ⭐⭐⭐⭐☆ | 10条 | 10 (均已合并) | 1个Nightly版 | 子代理挂起/误报、安全加固、UI卡顿 |
| **GitHub Copilot CLI** | ⭐⭐⭐⭐☆ | 10条 (5个热点) | 10 (含垃圾PR) | v1.0.76-0 | 僵尸进程、CAPI限制、非交互模式增强 |
| **Kimi Code CLI** | ⭐⭐☆☆☆ | 4条 (较少) | 4 (均为修复类) | 无 | Hook任务稳定、VS Code扩展可靠性、Windows编码 |
| **OpenCode** | ⭐⭐⭐⭐⭐ | 10条 (高热度) | 10 (含架构升级) | v1.18.7 | MCP SDK v2、配置热重载、权限模型、Web Shell |
| **Pi (mono)** | ⭐⭐⭐⭐☆ | 10条 | 10 (含特性开发) | 无 | Copilot压缩不可用、会话搜索、扩展系统、成本优化 |
| **Qwen Code** | ⭐⭐⭐⭐☆ | 10条 | 10 (多为特性) | 预发布(隔离) | 连接稳定性、外部上下文集成、动态工作流TUI |
| **DeepSeek TUI** | ⭐⭐⭐☆☆ | 10条 | 10 (冲刺阶段) | 无 (v0.9.2冲刺) | CRLF兼容、成本透明度、死代码清理、文档一致性 |

**分析**:
- **Claude Code & OpenAI Codex** 和 **OpenCode** 社区活跃度最高，但前者集中在**Bug和问题反馈**，后者则更多在 **新特性和架构升级**。
- **Kimi Code CLI** 和 **DeepSeek TUI** 社区体量较小，但反馈的问题质量高，修复效率也较快。
- **GitHub Copilot CLI & Qwen Code & Pi** 处于中间地带，既有稳定性的老问题，也有积极的功能开发。
- **PR合并情况**：OpenAI Codex和Qwen Code今日合入PR数量多，表现积极；GitHub Copilot CLI存在大量垃圾PR，维护质量待提高。

#### **3. 共同关注的功能方向**

以下为多个工具社区不约而同反映的需求，代表了行业发展趋势：

| 共同方向 | 具体诉求 | 涉及工具 |
| :--- | :--- | :--- |
| **🚩 Windows平台稳定性** | 桌面白屏、安装失败、登录循环、GPU崩溃、沙箱适配失败、CRLF兼容性、编码错误。 | **Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, DeepSeek TUI, Qwen Code** (几乎所有非纯Rust工具都受影响) |
| **🔗 会话数据一致性与持久化** | 重启后历史丢失、`/undo`功能回归、会话重名、侧对话上下文丢失、子Agent输出截断。 | **Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Qwen Code** |
| **🔌 MCP生态稳定性与易用性** | OAuth令牌不刷新、内存泄漏、管理UI（一键启停）、路由MCP服务器兼容性、命名空间隔离。 | **OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code** |
| **⚙️ 配置与身份认证** | 跨设备设置同步、组织策略管理、SSO登录循环、钥匙串冲突、API Key管理。 | **Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi** |
| **💰 成本与计费透明度** | 配额内被误扣费、`/cost`命令不精确、缺乏开销分解、免费模型不显示。 | **Claude Code, OpenAI Codex, DeepSeek TUI, Pi** |
| **🤖 Agent行为可靠性** | 子Agent无限挂起、误报成功、不主动使用技能/工具、自定义工作流（Hook）执行不稳定。 | **Gemini CLI, Claude Code, Qwen Code, Kimi Code CLI** |

#### **4. 差异化定位分析**

| 工具名称 | 核心定位/差异化标签 | 功能侧重 | 目标用户画像 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **深度Agent协作** | 强大的子Agent系统、Worktree隔离、广泛的MCP生态。 | 需要处理复杂多步骤任务的**专业开发者**，注重工作流隔离和安全。 |
| **OpenAI Codex** | **模型能力即服务** (MaaS) | 快速迭代模型（如`gpt-5.6-sol`）、Rust重构内核、强大的社区和生态规模。 | 追求最新模型能力、需要高性能本地化工具的**AI先行者**，对社区依赖度高。 |
| **Gemini CLI** | **Google生态深度集成** | Gemini 3旗舰模型、A2A协议、浏览器Agent、沙箱模式。 | 使用Google Cloud、Android等生态的**全栈工程师**，以及对多模态Agent有需求的开发者。 |
| **GitHub Copilot CLI** | **IDE & DevOps无缝嵌入** | 基于GitHub生态（分支、PR）、非交互模式（ACP）、Autopilot、Plan模式。 | 重度使用 **GitHub DevOps流程** 和 **VS Code IDE** 的开发者，追求端到端自动化。 |
| **Kimi Code CLI** | **专注 & 简洁（KISS）** | 轻量级CLI、Moonshot API优化、重点解决核心Bug而非堆砌功能。 | 对工具稳定性要求高于功能丰富度的**务实开发者**，适合快速上手。 |
| **OpenCode** | **企业级插件与配置** | 强大的插件系统（热重载、依赖管理）、细粒度权限模型、Web Shell、MCP SDK v2。 | **企业级团队和平台工程师**，需要高度可定制、可扩展的开发环境。 |
| **Pi (mono)** | **开源、自由与灵活** | 广泛的第三方API支持（Bedrock、Copilot、Z.AI）、成本计算透明、全量搜索、DIY精神。 | **独立开发者、极客和爱好者**，追求对工具的完全掌控和低成本运行。 |
| **Qwen Code** | **工程化 & 企业级集成** | 动态工作流TUI、渠道集成（钉钉/飞书）、外部上下文提供者、CI/CD自动化。 | 需要将AI工具有机整合进 **复杂企业研发流程** 的**DevOps和平台工程团队**。 |
| **DeepSeek TUI** | **极致的终端美学** | 高度可定制的TUI、Rust实现、质量驱动的开发（clippy/lint）、对SSH/tmux优化。 | **终端爱好者和Neovim用户**，追求在纯终端环境下拥有最佳体验和可控性。 |

#### **5. 社区热度与成熟度**

- **高热度、高成熟度（平台化阶段）**：**Claude Code, OpenAI Codex**。社区体量巨大，拥有成熟插件/功能生态，bug报告和功能请求都高度复杂，反馈集中在系统级稳定性和精调体验上。OpenCode虽社区热度高，但成熟度略低于前两者，处于快速功能迭代阶段。
- **中热度、快速迭代**：**OpenCode, Gemini CLI, GitHub Copilot CLI, Qwen Code, Pi**。这些工具功能演进迅速，积极拥抱新概念（MCP v2、A2A、企业上下文）。社区反馈热情，但核心稳定性问题（Windows、会话管理）仍是主要矛盾。
- **低热度、稳步追赶**：**Kimi Code CLI, DeepSeek TUI**。社区体量较小，但项目维护者响应积极，沉淀了大量高质量的Bug修复和工程优化。它们不追求面面俱到，而是在特定领域（如稳定性、TUI体验）做到极致。

#### **6. 值得关注的趋势信号**

1.  **“Windows战役”已成定局**：几乎所有主流工具都在Windows上遭遇了严重的稳定性挑战，这不再是边缘问题。任何声称“开发者友好”的CLI工具，若无法在Windows上提供与macOS/Linux同等可靠的体验，将失去大量市场份额。**你的团队如果主力是Windows环境，选择工具时务必优先考察其Windows稳定性历史。**

2.  **成本透明度成为核心竞争力**：社区已不再满足于“计价器”，而是要求精细化的成本分解、本地化显示、以及准确的配额健康检查（如何区分临时限流和永久耗尽）。**对于有预算管控需求的团队（CTO、Tech Lead），Pi和DeepSeek TUI在此领域的主动探索值得关注。**

3.  **从“聊天”到“舰队”的范式转变**：子Agent、多Agent协作、后台Daemon、Automation Hooks等功能的兴起，标志着LLM CLI工具正在从单一的“编码伙伴”转变为复杂的“任务舰队”指挥中心。**你需要评估工具对本复杂工作流的支撑能力，特别是子Agent的可靠性（Gemini CLI正深受此害）和任务状态的恢复机制（OpenAI Codex侧对话丢失是红灯）。**

4.  **“测试”与“回归”成为新常态**：Qwen Code和DeepSeek TUI社区中反复出现的E2E测试失败、死代码清理、CI门控等话题，揭示了随着代码库膨胀，维持高质量面临挑战。**在选择工具时，可以留意其社区是否建立了自动化测试和回归保护的机制，这直接关系到长期维护的稳定性。**

5.  **“本地优先” vs “云端集成”**：虽然绝大多数工具依赖云端API，但社区对 **“企业级外部内存/知识集成”**（Qwen Code、Pi）、**“本地MCP服务器”**、**“离线/沙箱模式”** 的呼声日益高涨。这表明开发者既渴望AI能力，又对数据安全和网络依赖抱有戒心。**如果你所在公司有严格的合规要求，应重点关注Pi和Gemini CLI在本地沙箱和企业级集成方面的进展。**

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为一名专注于 Claude Code 生态的技术分析师，以下是我基于您提供的 `anthropics/skills` 仓库数据（截至2026-07-28）生成的社区热点报告。

---

### Claude Code Skills 社区热点报告 (截至 2026-07-28)

#### 1. 热门 Skills 排行 (Top 5 by Engagement)

以下列出社区讨论热度最高、关注度最强的5个 Skill PRs。

1.  **#1298 [OPEN] fix(skill-creator): 修复 `run_eval.py` 始终报告 0% 召回率**
    -   **功能**: 对 Skill 创建工具集 (`skill-creator`) 的核心修复，解决了 `run_eval.py` 脚本在所有测试中均返回 0% 召回率的严重问题。该问题直接导致描述优化循环失效。
    -   **社区热点**: 帖子详细描述了问题的根本原因（eval 产物未作为真实 Skill 安装、Windows 兼容性、触发器检测失败等），并提供了完整的修复方案。社区对此高度关注，因为它直接影响了 Skill 开发的效率和质量反馈。
    -   **状态**: Open (未合并)
    -   **链接**: [PR #1298](https://github.com/anthropics/skills/pull/1298)

2.  **#514 [OPEN] Add document-typography skill: 文档排版质量控制**
    -   **功能**: 新增一个专门用于解决 AI 生成文档中常见排版问题的 Skill，如孤行、寡段、编号错位等。
    -   **社区热点**: 社区普遍认为这是对 AI 输出质量精细化控制的宝贵补充。讨论集中在如何界定“好”的文档规范，以及该 Skill 与现有文档生成 Skills 的集成方式。
    -   **状态**: Open (未合并)
    -   **链接**: [PR #514](https://github.com/anthropics/skills/pull/514)

3.  **#486 [OPEN] Add ODT skill: 支持 OpenDocument 格式**
    -   **功能**: 新增对 `.odt` 和 `.ods` 等 OpenDocument 格式的创建、填充、读取和转换能力。这对需要使用 LibreOffice 等开源办公套件的用户至关重要。
    -   **社区热点**: 讨论聚焦于跨平台互操作性，以及如何通过该 Skill 处理复杂格式的模板填充。它代表了社区对打破文档格式垄断、支持开源生态的强烈需求。
    -   **状态**: Open (未合并)
    -   **链接**: [PR #486](https://github.com/anthropics/skills/pull/486)

4.  **#83 [OPEN] Add skill-quality-analyzer & skill-security-analyzer: “元” Skills 分析器**
    -   **功能**: 提出两个元 Skill（Meta-Skills）：一个用于分析其他 Skill 的质量（结构、文档等），另一个用于分析其安全性（权限、数据泄露风险等）。
    -   **社区热点**: 这是社区对 Skill 生态治理的一种前瞻性探索。讨论焦点在于如何定义“高质量”和“安全”的标准化评估维度，以及这类分析器自身的安全性与可靠性。
    -   **状态**: Open (未合并)
    -   **链接**: [PR #83](https://github.com/anthropics/skills/pull/83)

5.  **#1367 [OPEN] feat(skills): 添加 self-audit — 四维推理质量门 (v1.3.0)**
    -   **功能**: 引入一个通用的“自我审计” Skill，在交付前对 AI 输出进行机械文件验证和四维推理质量审核。
    -   **社区热点**: 该提议试图解决 AI 输出可靠性这一核心问题。社区围绕“推理质量门”的具体维度（如完整性、一致性、准确性、可执行性）展开了深入讨论，认为这是提升 AI Agent 可信度的关键一步。
    -   **状态**: Open (未合并)
    -   **链接**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

#### 2. 社区需求趋势 (From Issues)

从社区的 Issues 反馈来看，最迫切的需求集中在以下几个方面：

1.  **Bug 修复与工具稳定性 (Skill Creator):** 这是当前呼声最高的需求。围绕 `#556` (run_eval.py 0%触发率)、`#202` (skill-creator 应更新至最佳实践)、`#1061` (Windows兼容性问题) 等 Issue，社区正在大声疾呼修复 Skill 创建工具的严重缺陷，因为该工具是生产其他所有 Skills 的“母机”，其不稳定已严重阻碍了社区贡献。
2.  **安全与信任治理:** `#492` 提出的“社区 Skills 在 Anthropic 命名空间下分发导致信任边界滥用”是讨论最激烈的问题之一。社区担忧这种机制会使用户无意中授予恶意社区 Skill 高权限。这反映了社区对 Skill 生态安全模型的深刻担忧。
3.  **组织级 Skill 共享与协作:** `#228` 要求能在组织内直接共享 Skill，而不是通过繁琐的文件发送和手动导入。这体现了 Skills 从个人工具向团队协作资产演进的强烈需求。
4.  **核心基础设施与跨平台支持:** 社区持续关注核心工具的跨平台兼容性（如 Windows 支持 Issues `#62`, `#1061`）以及与外部平台的集成（如 Bedrock `#29`，MCP 协议 `#16`），这表明用户希望 Skill 生态能融入更广泛的开发环境和工作流中。

#### 3. 高潜力待合并 Skills (High-Value Open PRs)

以下 PR 评论活跃、功能明确，且解决了社区的明确痛点，预计近期有较高可能性被合并。

1.  **#538 [OPEN] fix(pdf): 修正 SKILL.md 中的大小写敏感文件引用**
    -   **原因**: 虽然是简单的 bug 修复，但解决了一个在大小写敏感文件系统（如 Linux）上导致 PDF Skill 无法正常使用的阻塞性问题，实用价值高。
    -   **链接**: [PR #538](https://github.com/anthropics/skills/pull/538)

2.  **#723 [OPEN] feat: 添加 testing-patterns skill**
    -   **原因**: 测试是软件开发的核心环节。该 PR 提供了覆盖单元、React组件、集成、E2E和性能测试的全栈指导，内容详实，对开发者极具吸引力，且与官方仓库的“工具”定位高度契合。
    -   **链接**: [PR #723](https://github.com/anthropics/skills/pull/723)

3.  **#509 [OPEN] docs: 添加 CONTRIBUTING.md**
    -   **原因**: 这是社区健康度指标的基础。提交者明确指出了仓库在社区健康度评分上的缺失，并提供了结构清晰的贡献指南。这是一个成本低但影响面广的正向改进，合并后能极大降低贡献门槛。
    -   **链接**: [PR #509](https://github.com/anthropics/skills/pull/509)

4.  **#1479 [OPEN] Add plan-file-hygiene skill**
    -   **原因**: 该 Skill 直接回应了社区 Issue `#1417` 中提到的“规划文件生命周期管理”痛点，是一个社区驱动、解决实际问题的典型 Skill。它代表了 Agent 在实践中遇到的“工作流文件污染”问题的系统化解决方案。
    -   **链接**: [PR #1479](https://github.com/anthropics/skills/pull/1479)

#### 4. Skills 生态洞察

**当前社区最集中的诉求是在核心基础设施稳定与可信的基础上，推动 Skills 从单点工具向安全、协作、可治理的生态系统演进。** 简单来说，社区在追求：**“基础先行，生态繁荣”**——必须先解决好 Skill 创建工具的 Bug (尤其是 Windows 和 0% 召回率问题) 和安全信任模型，而后才能有序地拓展文档、测试、游戏等各类应用场景。

---

# Claude Code 社区动态日报 | 2026-07-28

## 今日速览

Claude Code 过去24小时没有新版本发布，但社区围绕 **Windows 平台稳定性**、**会话数据一致性问题** 和 **计费事故** 展开了密集讨论。一个涉及子代理输出截断的核心 Bug 刚被上报，可能影响深层 agent 工作流。此外，**跨设备设置同步** 和 **自定义快捷键** 两项功能请求持续获得大量支持。

---

## 社区热点 Issues（10 条精选）

### 1. #5064 [Feature] Ctrl+Enter 换行快捷键与标准应用冲突，请求自定义
- **高赞 52**，评论 30，持续更新中
- Windows TUI 用户反馈 `Ctrl+Enter` 被占用，与系统粘贴等操作冲突，社区强烈要求提供可配置快捷键。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/5064)

### 2. #22648 [Feature] 账户级设置跨设备同步
- **高赞 43**，评论 24，引用多个关联 Issue
- 用户有多台设备（Linux + Mac），本地 `~/.claude/` 配置无法同步，每次手动维护效率低。社区期待官方统一方案。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/22648)

### 3. #51143 [Bug] Windows 桌面版持续白屏/空白屏幕
- **评论 18**，多次重装无效
- 严重影响日常使用，用户已尝试多种清理操作仍无法恢复，怀疑与 Electron 渲染或 GPU 进程有关。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/51143)

### 4. #54186 [Bug] VS Code 重启后本地会话历史丢失
- **评论 13**，影响 IDE 工作流
- 在 VS Code 扩展中启动的 Claude Code 会话，重启后历史记录全部消失，对需要回顾上下文的重构任务构成障碍。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/54186)

### 5. #61172 [Bug] `/clear` 继承上一会话名称导致 `/resume` 中出现重名会话
- **评论 8**，有复现步骤
- 使用 `/clear` 清空会话后，新会话名称不会重置，导致 `/resume` 列表出现多条同名记录，难以区分。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/61172)

### 6. #81703 [Bug] 7 月 17 日批量计费事故：计划额度内用量被扣费，合计 $704.71
- **评论 7**，用户发起争议
- 用户订阅套餐中包含的用量在被扣减额度后仍然产生额外费用，涉及金额较大，社区关注 Anthropic 的赔付方案。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/81703)

### 7. #79366 [Bug] Worktree 会话复用了以前会话的工作树目录
- **评论 6**，可复现
- 启用 worktree 隔离后新会话并未创建干净目录，而是进入之前会话遗留的目录，可能导致文件污染。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/79366)

### 8. #78946 [Bug] Windows 登录陷入循环
- **评论 6**，影响使用
- 用户在 Windows 上启动应用后一遍遍弹出登录页面，无法正常完成认证。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/78946)

### 9. #81813 [Bug] 自动生成会话名匹配了无关的项目文件，与对话内容无关
- **评论 4**，昨日新建
- 两个独立会话在相同工作目录下获得了完全相同的自动命名（源自某个已有文件名），导致会话切换时混淆。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/81813)

### 10. #81838 [Bug] 子代理回复被输出 token 上限截断：仅最后一条 assistant 消息到达调用方
- **评论 0**，昨日新建，**高优先级**
- 当子代理最终回复超过输出 token 上限时，只有最后一个 assistant 消息片段被返回，之前的完整内容被静默丢弃。直接影响多 agent 协作的可靠性。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/81838)

---

## 重要 PR 进展（过去 24 小时内更新，共 5 条）

### 1. #81673 修复 devcontainer 防火墙设置：当可选域名解析失败时不中断脚本
- 解决 `init-firewall.sh` 因 `statsig.anthropic.com` 域名解析失败导致整个脚本退出、ipset 半吊子的问题。
- [查看 PR](https://github.com/anthropics/claude-code/pull/81673)

### 2. #81672 修复 hookify 插件：使包导入不依赖安装目录名称
- 原来的通过 `os.path.dirname(CLAUDE_PLUGIN_ROOT)` 加入 `sys.path` 依赖于目录名为 `hookify`，市场安装可能不满足导致导入失败。此 PR 解除了这一限制。
- [查看 PR](https://github.com/anthropics/claude-code/pull/81672)

### 3. #81670 修复插件钩子命令中的路径引用：处理含空格路径并补充 hookify 示例
- 解决 `hooks.json` 中 `${CLAUDE_PLUGIN_ROOT}` 未加引号导致路径含有空格时 shell 解析错误；同时为 hookify 示例添加了前缀文档。
- [查看 PR](https://github.com/anthropics/claude-code/pull/81670)

### 4. #20448 新增 web4-governance 插件：AI 治理 + R6 审计追溯
- 基于 T3 信任张量、实体见证和 R6 审计跟踪的轻量治理插件，适用于信任原生互联网（Web4）场景。评审中。
- [查看 PR](https://github.com/anthropics/claude-code/pull/20448)

### 5. #81576 修正 `plugins/README.md` 中 security-guidance 插件的文档描述
- 原文档声称有一个监控 9 个安全模式的 `PreToolUse` 钩子，但实际插件没有该钩子，且模式数为 25。此 PR 纠正了描述错误。
- [查看 PR](https://github.com/anthropics/claude-code/pull/81576)

---

## 功能需求趋势

从近期热门 Issues 中可观察到三个主要社区诉求：

1. **跨设备/跨平台配置同步**（#22648、#81835）  
   用户多设备场景普遍，期望官方实现账户级设置云同步，避免手动拷贝配置文件。

2. **终端/CLI 体验改进**（#5064、#70132、#70368）  
   - 自定义快捷键支持（尤其是 Windows 用户）
   - 在 CLI 提示符中显示当前工作目录（类似 Copilot CLI）
   - Markdown 标题层次在渲染上更好区分

3. **MCP 管理与可访问性**（#69200、#77394）  
   - 在 `/mcp` 菜单中增加一键启用/禁用快捷键
   - 修复问询工具标题在浅色主题中白字白底不可见的问题

---

## 开发者关注点

- **Windows 平台稳定性集中爆发**：桌面白屏、登录循环、MSIX 包 GPU 进程崩溃（#51143、#78946、#81398、#81836），部分用户报告即使重装也无法恢复，已成为 Windows 用户的核心痛点。
- **会话数据丢失与混乱**：VS Code 扩展重启后历史消失（#54186）、`/clear` 命名继承（#61172）、worktree 目录复用（#79366）、子代理输出静默截断（#81838）——多环节出现数据一致性问题，严重影响日常调试和 agent 信任度。
- **计费争议**：7月17日批量计费事故（#81703）涉及 $704.71 的不合理扣费，用户情绪激烈，社区期待 Anthropic 的正式道歉和退款。
- **身份与认证在 Windows 上不稳定**：登录循环（#78946）表明认证流程在 Windows 环境下存在兼容性缺陷。
- **macOS 睡眠抑制机制缺陷**：#81832 指出 caffeinate 进程切换时存在无睡眠断言的时间窗口，导致合盖后仍在执行的任务被系统强行休眠打断。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 | 2026-07-28

## 今日速览

- **Rust 核心连续发布两个 Alpha 版本**：0.146.0-alpha.12 与 0.146.0-alpha.13，主要包含多项内部修复与改进。
- **社区呼声最高的 `/undo` 回归请求持续发酵**：Issue #9203 已获 362 个 👍 和 65 条评论，成为当日最热议题。
- **Windows 平台可靠性问题集中爆发**：多个 Windows 桌面端崩溃、浏览器 GPU 进程崩溃、沙箱适配失败等 bug 被密集报告，开发团队在 PR #35670 #35655 等中针对性修复。

## 版本发布

- **rust-v0.146.0-alpha.12**：发布链接 `openai/codex/releases/tag/rust-v0.146.0-alpha.12`
- **rust-v0.146.0-alpha.13**：发布链接 `openai/codex/releases/tag/rust-v0.146.0-alpha.13`

> 两个 Alpha 版本暂无详细变更日志，从 PR 看包含多 agent 设置兼容性、Windows 非 TTY 中断处理、SQLite 日志路径修正等改进。

## 社区热点 Issues（10 条）

1. **#9203 – 请求恢复 `/undo` 功能**  
   - 评论：65 | 👍：362  
   - 重要性：社区最强烈呼声，用户多次因非 Git 跟踪文件被误删或未提交修改被意外覆盖而损失工作成果。  
   - 链接：[Issue #9203](https://github.com/openai/codex/issues/9203)

2. **#17265 – MCP OAuth 令牌不会自动刷新**  
   - 评论：27 | 👍：54  
   - 重要性：影响所有使用路由 MCP 服务器的用户，令牌过期后工具调用全部失败。  
   - 链接：[Issue #17265](https://github.com/openai/codex/issues/17265)

3. **#32149 – Windows 安装器在 UAC 前失败**  
   - 评论：27 | 👍：6  
   - 重要性：全新用户无法完成安装，严重阻碍 Windows 平台推广。  
   - 链接：[Issue #32149](https://github.com/openai/codex/issues/32149)

4. **#24948 – 会话日志膨胀至 700MB-2GB**  
   - 评论：24 | 👍：1  
   - 重要性：高频用户磁盘空间被异常占用，与压缩历史及原始工具输出相关。  
   - 链接：[Issue #24948](https://github.com/openai/codex/issues/24948)

5. **#32094 – 嵌入式浏览器打开 WebCodecs 页面时崩溃**  
   - 评论：18 | 👍：2  
   - 重要性：严重 Crash，已被浏览器团队追踪（BRWPLAT-293）。  
   - 链接：[Issue #32094](https://github.com/openai/codex/issues/32094)

6. **#25319 – VS Code 聊天应限定于当前工作区**  
   - 评论：18 | 👍：48  
   - 重要性：多项目开发者的高频需求，当前聊天历史混乱。  
   - 链接：[Issue #25319](https://github.com/openai/codex/issues/25319)

7. **#30712 – Windows 上 `apply_patch` 因沙箱根目录分割而失败**  
   - 评论：15 | 👍：13  
   - 重要性：强制 agent 回退到 PowerShell 写文件，绕过沙箱安全机制。  
   - 链接：[Issue #30712](https://github.com/openai/codex/issues/30712)

8. **#11324 – MCP 服务器在执行多任务时耗尽内存**  
   - 评论：14 | 👍：5  
   - 重要性：长时间并发工作者受限，Business 订阅用户反馈强烈。  
   - 链接：[Issue #11324](https://github.com/openai/codex/issues/11324)

9. **#34027 – `gpt-5.6-sol` 模型在 ChatGPT 账号下不被支持**  
   - 评论：5 | 👍：5  
   - 重要性：最新模型 Sol 在更新后消失，已被关闭但社区关注。  
   - 链接：[Issue #34027](https://github.com/openai/codex/issues/34027)

10. **#35669 – RemoteCompactionV2 重复压缩导致状态丢失**  
    - 评论：3 | 👍：0  
    - 重要性：新发现的高影响 bug，涉及侧对话中上下文意外丢失。  
    - 链接：[Issue #35669](https://github.com/openai/codex/issues/35669)

## 重要 PR 进展（10 条）

1. **#35695 – 让日志客户端遵循配置的 SQLite Home**  
   - 状态：已合并  
   - 摘要：修复 `just log` 在 `sqlite_home` 与 `CODEX_HOME` 不一致时读错数据库的问题。  
   - 链接：[PR #35695](https://github.com/openai/codex/pull/35695)

2. **#35693 – 后台刷新子 agent 选择器**  
   - 状态：已合并  
   - 摘要：优化 TUI 中打开子 agent 选择器的性能，避免阻塞终端输入。  
   - 链接：[PR #35693](https://github.com/openai/codex/pull/35693)

3. **#35691 – 在关系列表中包含无预览的线程**  
   - 状态：已合并  
   - 摘要：让子线程/派生线程即使没有预览文字也能被列出。  
   - 链接：[PR #35691](https://github.com/openai/codex/pull/35691)

4. **#35689 – 在线程历史投影中保留项目时间戳**  
   - 状态：已合并  
   - 摘要：添加可选的时间戳字段，从 ItemCompleted 记录填充，改善审计体验。  
   - 链接：[PR #35689](https://github.com/openai/codex/pull/35689)

5. **#35688 – 将 crossterm 补丁指向 OpenAI OSS Fork**  
   - 状态：已合并  
   - 摘要：统一终端处理库的维护渠道，确保内部修复的可靠性。  
   - 链接：[PR #35688](https://github.com/openai/codex/pull/35688)

6. **#35685 – 为 `codex sandbox` 加载云端管理的 profile**  
   - 状态：已合并  
   - 摘要：允许沙箱接收显式权限配置文件时自动加载云端管理配置。  
   - 链接：[PR #35685](https://github.com/openai/codex/pull/35685)

7. **#35670 – 将 Windows exec 最小 yield 时长提升至 10 秒**  
   - 状态：已合并  
   - 摘要：解决 Windows 上 `exec_command` 过早 yield 导致工具执行失败的问题。  
   - 链接：[PR #35670](https://github.com/openai/codex/pull/35670)

8. **#35655 – 在中断时终止 Windows 非 TTY 进程**  
   - 状态：已合并  
   - 摘要：修复非 TTY 会话中 Ctrl-C 无效的问题，采用终止机制而非“不支持”。  
   - 链接：[PR #35655](https://github.com/openai/codex/pull/35655)

9. **#35675 – 并行准备 MCP 和插件推荐**  
   - 状态：已合并  
   - 摘要：减少 Turn 准备的延迟，将 MCP 发现与端点插件推荐同时进行。  
   - 链接：[PR #35675](https://github.com/openai/codex/pull/35675)

10. **#35663 – 基于字符匹配评估技能路由元数据**  
    - 状态：已合并  
    - 摘要：新增字符 n-gram 阴影选择器，结合技能描述、主机接口元数据等进行路由排序。  
    - 链接：[PR #35663](https://github.com/openai/codex/pull/35663)

## 功能需求趋势

- **会话管理与持久化**：`/undo` 回归（#9203）、工作区限定聊天（#25319）、归档/导出会话（#20115）等需求热度最高，社区对“可回退、可整理、可跨会话保留工作上下文”的诉求强烈。
- **MCP 生态改进**：OAuth 自动刷新（#17265）、内存泄漏（#11324）、重认证问题（#13852）表明 MCP 的稳定性和自动化配置是当前痛点。
- **Windows 平台稳定性**：安装失败、浏览器崩溃、沙箱集成缺陷（#32149 #32094 #30712 #35352 #35311）几乎占 bug 报告一半，社区希望官方投入更多资源到 Windows 适配。
- **多 Agent 与子任务**：子 agent 运行时继承（#25990）、多 agent 设置兼容性（#34700）说明用户正在大规模使用复杂多 agent 工作流，但边界情况频繁出现。
- **速率限制与计费透明度**：计划降级后额度归零（#26763）、银行满重置无法使用（#34249）、容量错误自动重试（#32020）反映用户对使用配额感知和容错机制的需求。

## 开发者关注点

- **高频 bug：会话日志异常膨胀**（#24948）严重影响长时间使用者的磁盘空间，是实际开发中亟待优化的性能问题。
- **Windows 专属沙箱 `apply_patch` 失败**（#30712）导致安全编辑路径不可用，迫使 agent 采用不安全的 PowerShell 直接写文件，是安全与体验的双重缺陷。
- **RemoteCompactionV2 重复压缩与状态丢失**（#35669）是新出现的高影响 bug，特别是在侧对话中，上下文压缩不仅未缓解内存反而造成损失。
- **TUI 输入丢失**：PR #35649 专门修复了终端焦点返回时键盘输入被丢弃的问题，说明 TUI 体验的细节问题影响日常使用流畅度。
- **模型支持追踪**：`gpt-5.6-sol` 被移除（#34027）后用户无法使用，社区对模型更新透明度和兼容性保持高度敏感。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 – 2026-07-28

## 📌 今日速览

今日发布 **v0.54.0-nightly.20260728** 修复了 Windows 下的 CRLF 行尾问题及文件凭证存储的加密标签验证；社区仍聚焦于子代理行为异常（如误报成功、无限挂起）与安全加固（变量展开绕过、MCP OAuth 令牌刷新）；同时多个 PR 合入以提升核心管道异步化与终端 UI 响应性。

## 📦 版本发布

**v0.54.0-nightly.20260728.gbef611950**  
[查看 Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-nightly.20260728.gbef611950)

What’s Changed：
- **fix(a2a-server)**: 将 `getProposedContent` 中的 CRLF 行尾统一转换为 LF，修复 Windows 环境下 Gemini Code Assist 差异视图无法高亮的问题。
- **fix(core)**: 在文件密钥库中强制执行明确的标签长度和验证，防止因运行时差异导致凭证损坏。

## 🔥 社区热点 Issues（精选 10 条）

1. **[#22323] 子代理达到最大轮次后误报为 GOAL 成功**  
   `codebase_investigator` 达到 `MAX_TURNS` 后仍返回 `status: "success"`，隐藏了实际中断。  
   👥 12 条评论，热度最高。  
   [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

2. **[#21409] 通用代理无限挂起**  
   只要 `gemini-cli` 将任务委托给通用代理就会永久挂起，用户需等待多达一小时。  
   👥 8 条评论，8 👍。典型用户痛点。  
   [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

3. **[#19873] 利用模型 Bash 亲和性：零依赖 OS 沙箱与执行后意图路由**  
   提议使用 POSIX 工具链充分发挥 Gemini 3 的原生能力，同时保障安全。  
   👥 8 条评论，影响范围大。  
   [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

4. **[#24353] 组件级评估体系建设**  
   作为 #15300 的后续，已生成 76 项行为评估测试并支持 6 款 Gemini 模型。  
   👥 7 条评论，持续演进中。  
   [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

5. **[#22745] 评估 AST 感知的文件读取/搜索/映射价值**  
   探索通过 AST 工具减少调用轮次、降低令牌噪声、提升代码导航精度。  
   👥 7 条评论，技术深水区。  
   [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

6. **[#21968] Gemini 不充分使用自定义技能和子代理**  
   用户反馈即使有相关技能描述，Gemini 也几乎不会主动调用，需手动指令。  
   👥 6 条评论，社区共鸣度高。  
   [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

7. **[#26522] 自动记忆无限重试低信号会话**  
   若提取代理因低信号跳过某会话，该会话会反复出现在 inbox 中，导致死循环。  
   👥 5 条评论，记忆系统重要缺陷。  
   [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

8. **[#25166] Shell 命令执行完成后卡在 “Awaiting input”**  
   简单命令执行后依然显示活动状态，导致 UI 阻塞。  
   👥 4 条评论，影响日常开发流程。  
   [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

9. **[#22232] 浏览器代理弹性和锁定恢复**  
   当前使用持久化浏览器会话时，若文件锁残留则直接失败，缺乏自动接管机制。  
   👥 4 条评论，期待提升鲁棒性。  
   [Issue #22232](https://github.com/google-gemini/gemini-cli/issues/22232)

10. **[#21983] 浏览器子代理在 Wayland 下失败**  
    浏览器子代理在 Wayland 环境中无法正常工作，报告 `Termination Reason: GOAL` 但实际未完成。  
    👥 4 条评论，Linux 用户关注。  
    [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

## 🚀 重要 PR 进展（精选 10 条）

1. **#28546 – fix(core): 使用 `GEMINI_API_KEY` 时剥离 `Authorization` 头**  
   解决因陈旧头导致 Google API 返回 `401 UNAUTHENTICATED`。  
   [PR #28546](https://github.com/google-gemini/gemini-cli/pull/28546)

2. **#28386 – fix(vscode): 跟踪激活时的事件注册**  
   修复 VS Code 配套扩展因括号使用不当导致部分 Disposable 未被正确注册。  
   [PR #28386](https://github.com/google-gemini/gemini-cli/pull/28386)

3. **#28394 – fix(core): 后台进程退出时清理临时目录**  
   修复后台 Shell 执行后临时目录长期残留问题。  
   [PR #28394](https://github.com/google-gemini/gemini-cli/pull/28394)

4. **#28397 – fix(core): 移除 Shell 工具关键路径中的同步 I/O**  
   将 `fs.mkdtempSync` 等替换为异步版本，消除 React Ink 终端 UI 卡顿和闪烁。  
   [PR #28397](https://github.com/google-gemini/gemini-cli/pull/28397)

5. **#28389 – fix(core): 添加实时时间预算防止无限循环**  
   为 `sendMessageStream` 和 `processTurn` 加入共享截止时间，避免事件驱动的代理状态无限转换。  
   [PR #28389](https://github.com/google-gemini/gemini-cli/pull/28389)

6. **#28387 – fix(cli): `customDeepMerge` 循环引用保护**  
   防止设置对象中存在 `obj.self = obj` 导致 `Maximum call stack size` 崩溃。  
   [PR #28387](https://github.com/google-gemini/gemini-cli/pull/28387)

7. **#28388 – fix(core): `tools.core` 通配符拒绝规则限定为内置工具**  
   修复之前 `tools.core = []` 意外禁用所有 MCP 工具的 Bug。  
   [PR #28388](https://github.com/google-gemini/gemini-cli/pull/28388)

8. **#28403 – fix(core): 阻塞 `$VAR` 和 `${VAR}` 变量展开绕过**  
   加强 `detectBashSubstitution` 检测，防御性加固工作流安全。  
   [PR #28403](https://github.com/google-gemini/gemini-cli/pull/28403)

9. **#28551 – fix(cli): macOS 缺少 Seatbelt 配置文件时回退到嵌入式版本**  
   解决沙箱模式（`-s`）下因静态 `.sb` 文件缺失导致的启动崩溃。  
   [PR #28551](https://github.com/google-gemini/gemini-cli/pull/28551)

10. **#28481 – fix(core): 使用存储的 client ID 刷新 MCP OAuth 令牌**  
    修复 OAuth 动态注册的 MCP 服务器本地刷新失败并删除凭据的问题。  
    [PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

## 📊 功能需求趋势

- **代理系统稳定性与可观测性**：大量涉及子代理误报、挂起、不自动使用技能、轨迹不可见等问题，社区强烈需求更可靠的代理行为和调试能力。
- **安全性加固**：持续涌现密钥管理、变量展开绕过、多因素认证令牌刷新、文件凭证存储加固等 PR 和 Issue，安全已成为核心关注点。
- **性能与 UI 响应性**：同步 I/O 替换、终端闪烁修复、命令执行后状态卡死等表明开发者对操作流畅度要求极高。
- **AST 感知工具链**：探索性 EPIC 显示社区希望引入 AST 能力减少不必要的代码读取、提升导航效率。
- **多模型支持与平台兼容性**：新增 `gemini-3.5-flash` 模型支持，Wayland、macOS sandbox、Windows CRLF 等平台问题均有修复，跨平台体验持续优化。
- **记忆系统完善**：自动记忆的重试逻辑、无效补丁处理、日志红化等显示了社区对智能上下文保留功能的期待与要求。

## 🧑‍💻 开发者关注点

- **高频痛点**：
  - 子代理在某些场景下完全挂起（#21409）或误报成功（#22323），导致任务不可靠。
  - 自定义技能和子代理几乎不被主动启用（#21968），需要反复手动提示。
  - Shell 命令执行后 UI 状态卡死（#25166），影响交互。
  - 安全漏洞如变量展开绕过（#28403）、OAuth 令牌刷新失败（#28481）直接威胁凭证安全。
- **高频请求**：
  - 更好的代理自省能力（bug report 包含子代理上下文 (#21763)、子代理轨迹可分享 (#22598)）。
  - 对于危险操作（如 `git reset --force`）的抑制与警告（#22672）。
  - 对于设置文件覆盖被忽略（#22267）以及 symlink 不被识别（#20079）的修复，提升配置灵活性。
  - 更积极的行为评估和自动化测试（#24353），保障每次发布质量。

---

*数据来源：GitHub google-gemini/gemini-cli，截至 2026-07-28 UTC 更新。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-28

## 📌 今日速览

- **v1.0.76-0 发布**：MCP 工具加载速度优化（引入缓存及 opt-out 机制），Autopilot 模式默认保持在任务完成后不退出。
- **社区持续关注三个核心痛点**：虚拟机环境下的僵尸进程泄漏（#4163）、CAPI 5MB 体限制导致的会话死锁（#4183）、非交互模式下缺少上下文用量上报（#4233）。
- **三个“triage”状态的新 Issue 暴露新问题**：macOS 钥匙串重复弹窗、glob 工具多段模式匹配失败、模型选择灰显。

---

## 🚀 版本发布：v1.0.76-0

| 类别 | 内容 |
|------|------|
| **Improved** | MCP 工具从定义范围的快照中加载更快，支持进程级和每服务器缓存 opt-out；Autopilot 在任务完成后默认保持选中状态（可通过 `stayInAutopilot: false` 恢复交互模式）。 |
| **Fixed** | 恢复当某些情况下的早期警告（原文截断，推测是未完成的警告提示）。 |

[查看 Release 详情](https://github.com/github/copilot-cli/releases)

---

## 🔥 社区热点 Issues（10 条）

### 1. 🐛 #4163 — copilot CLI 1.0.71 不收割子进程，僵尸进程堆积（高影响）
- **标签**: `area:platform-linux`, `area:tools`
- **概述**: 每个会话每分钟约产生 2 个僵尸进程（Z 状态），父进程为 copilot，21 分钟内已累积 8 个僵尸。
- **社区反应**: 5 条评论，3 个 👍，已关闭但修复未验证。**开发者痛点**：影响服务器稳定性和资源回收。
- [Issue #4163](https://github.com/github/copilot-cli/issues/4163)

### 2. 🔥 #4183 — 自动压缩无法阻止 CAPI 5MB 体限制导致的会话死锁
- **标签**: `area:context-memory`, `area:models`
- **概述**: 长会话虽未超出模型 token 容量，但序列化后的 CAPI 请求体超过 5MB 限制，自动压缩无法阻止，导致会话永久无法发起新模型调用。
- **社区反应**: 4 条评论，10 个 👍（赞数最高之一），已关闭但修复方向待定。
- [Issue #4183](https://github.com/github/copilot-cli/issues/4183)

### 3. 📊 #4233 — [ACP] 在 `--acp` 模式下缺少 `usage_update` 事件（建议）
- **标签**: `area:non-interactive`
- **概述**: `copilot --acp` 从未发出 `usage_update` 会话更新，导致 ACP 客户端（如 Zed）无法展示上下文窗口或 AI 额度指示器，尽管 CLI 内部已计算这些数据。
- **社区反应**: 2 条评论，2 个 👍。**对 IDE 集成影响大**。
- [Issue #4233](https://github.com/github/copilot-cli/issues/4233)

### 4. 🔁 #3977 — 请求：通过启动标志持久化 Autopilot 模式
- **标签**: `area:permissions`, `area:configuration`
- **概述**: 当前 `--autopilot` 只设置初始模式，任务完成后回退到交互模式；需要持久化的启动标志。
- **社区反应**: 2 条评论，1 个 👍，已关闭但实现已部分出现在 v1.0.76-0（`stayInAutopilot` 选项）。
- [Issue #3977](https://github.com/github/copilot-cli/issues/3977)

### 5. 🔄 #1381 — “Rewind”功能强依赖 Git，不支持 jj 等版本控制
- **标签**: `area:sessions`
- **概述**: 用户使用 jj（Jujutsu）而非 Git，Rewind 功能无法使用；VS Code 中的 Copilot 则无需 Git。
- **社区反应**: 3 条评论，9 个 👍。**开发者呼吁解耦版本控制依赖**。
- [Issue #1381](https://github.com/github/copilot-cli/issues/1381)

### 6. 🛠️ #4188 — Plan 模式回归：阻止 shell 命令执行
- **标签**: `area:permissions`, `area:tools`
- **概述**: 最新版本中 Plan 模式阻止了 Shell 命令执行，而之前 Plan 模式会利用 `gh` 等命令来丰富计划（如读取/创建 Issue）。用户认为是回归。
- **社区反应**: 6 条评论，3 个 👍。**影响工作流效率**。
- [Issue #4188](https://github.com/github/copilot-cli/issues/4188)

### 7. 📉 #2792 — 请求：在规划与执行阶段自动切换不同模型
- **标签**: `area:agents`, `area:models`
- **概述**: 用户希望 Copilot 在任务规划阶段使用一个可配置模型，执行阶段自动切换另一个更高效的模型。
- **社区反应**: 5 条评论，16 个 👍（赞数最高）。已关闭但为长期反馈。
- [Issue #2792](https://github.com/github/copilot-cli/issues/2792)

### 8. 🧪 #4272 — 新模型被组织策略禁用，无法选择
- **标签**: `triage`
- **概述**: 用户看到“此模型已被组织策略禁用”的消息，但在 settings 页面找不到启用开关，之前无需手动启用。
- **社区反应**: 0 条评论，问题尚待确认。**可能影响企业用户试用新模型**。
- [Issue #4272](https://github.com/github/copilot-cli/issues/4272)

### 9. 🧠 #4271 — glob 工具对包含路径分隔符的模式返回假阴性
- **标签**: `triage`
- **概述**: 内置 `glob` 工具对于 `2026/07/26.md` 或 `2026/07/*.md` 等模式均返回“未匹配”，除非前缀加 `**/`。用户确认文件存在。
- **社区反应**: 0 条评论但影响工具可靠性。
- [Issue #4271](https://github.com/github/copilot-cli/issues/4271)

### 10. 🪟 #4273 — macOS：GitHub 签名与 Microsoft 签名二进制共用钥匙串导致重复弹窗
- **标签**: `triage`
- **概述**: 同一 CLI 在两套不同开发者 ID（GitHub 与 Microsoft）下签名时，macOS XARA 保护导致钥匙串 ACL 分区列表冲突，每次启动都弹出密钥链授权提示。
- **社区反应**: 0 条评论，但影响 macOS 用户体验。
- [Issue #4273](https://github.com/github/copilot-cli/issues/4273)

---

## 🔧 重要 PR 进展（10 条）

| 序号 | PR | 内容 | 状态 | 链接 |
|------|-----|------|------|------|
| 1 | #1609 | 📝 **更新 PAT 权限说明**：指明 `Copilot Requests` 权限位于“Account”选项卡下，避免用户遗漏。 | 🟡 打开（2026-02-22） | [PR #1609](https://github.com/github/copilot-cli/pull/1609) |
| 2 | #1598 | 🐛 **修复 install.sh 临时目录泄漏**：添加 trap 确保意外退出时清理 `mktemp -d` 创建的临时目录。 | 🟡 打开（2026-02-21） | [PR #1598](https://github.com/github/copilot-cli/pull/1598) |
| 3 | #1333 | 📝 **修复文档语法与 Markdown 格式**：无功能变更，提升可读性。 | 🟡 打开（2026-02-06） | [PR #1333](https://github.com/github/copilot-cli/pull/1333) |
| 4 | #1116 | 📜 **修正 README 中关于 0x 模型配额扣减的误导**：实际使用 0x 模型不扣除配额，但文档写为会扣。 | 🟡 打开（2026-01-26） | [PR #1116](https://github.com/github/copilot-cli/pull/1116) |
| 5 | #988 | 📝 **修正 brew 安装命令前缀**：原 `brew install copilot-cli` 错误，应改为 `brew install github/copilot-cli/copilot-cli`。 | 🟡 打开（2026-01-15） | [PR #988](https://github.com/github/copilot-cli/pull/988) |
| 6 | #4030 | 🚀 **新增 Jekyll 部署 GitHub Actions 工作流**：自动化构建与部署 Jekyll 网站到 GitHub Pages。 | 🟡 打开（2026-07-05） | [PR #4030](https://github.com/github/copilot-cli/pull/4030) |
| 7 | #3928 | ✨ **添加 .gitignore 和设置配置**：普适性配置增强。 | 🟡 打开（2026-06-25） | [PR #3928](https://github.com/github/copilot-cli/pull/3928) |
| 8 | #3473 | ⚠️ **垃圾 PR（诈骗链接）**：内容为 TEMU 广告，已标记为垃圾。 | 🟡 打开 | [PR #3473](https://github.com/github/copilot-cli/pull/3473) |
| 9 | #2800 | ✨ **添加初始 devcontainer 配置**：便于容器化开发。 | 🟡 打开（2026-04-17） | [PR #2800](https://github.com/github/copilot-cli/pull/2800) |
| 10 | #3873 | 🛑 **垃圾 PR（无意义内容）**：添加控制台问候语。 | 🟡 打开（2026-06-20） | [PR #3873](https://github.com/github/copilot-cli/pull/3873) |

> 注：PR 列表中混入大量垃圾 PR（如 #3473、#3873、#3880 等），以上仅列出有实际价值的 PR。

---

## 📈 功能需求趋势

从近期 Issue 与 PR 中提炼出社区最关注的五大方向：

| 方向 | 需求描述 | 代表 Issue |
|------|---------|-----------|
| **非交互模式增强** | ACP 协议需暴露上下文使用量、AI 额度、模型选择能力，以便 IDE 集成展示。 | #4233, #4174, #4275 |
| **模型灵活切换** | 支持规划/执行阶段不同模型、自动切换、BYOK 自定义提供商启动提示。 | #2792, #4258 |
| **持久化与智能行为** | Autopilot 模式持久化、任务完成后保持 autopilot、插件钩子 sessionStart 修复。 | #3977, #4161, #1730 |
| **跨平台兼容性** | Windows Terminal 响应消失、macOS 钥匙串弹窗、WSL tmux 剪贴板问题、全局 glob 工具。 | #4263, #4191, #4273, #4271 |
| **版本控制解耦** | Rewind 不应强制依赖 Git，应支持 jj 等 VCS。 | #1381 |

---

## 👥 开发者关注点

根据本次数据，开发者反馈中的高频痛点和诉求如下：

1. **资源泄漏与稳定性**：僵尸进程（#4163）、会话死锁（#4183）、子代理 OTel 计费缺失（#4224）是严重影响生产体验的 bug。
2. **行为回归**：Plan 模式阻止 shell 命令（#4188）、`task_complete` 工具在 autopilot 模式下不可用（#4161）引发用户不满。
3. **交互细节缺失**：退出时不显示会话 ID（#4266）、Pending 消息状态不准确（#4281）、左右箭头键盘缓冲（#4274）。
4. **配置与管理**：组织策略无法启用新模型（#4272）、`.github/hooks/` 钩子未触发（#1730）、需要文档说明符号链接行为（#3264）。
5. **AI 额度消耗异常**：`/restart` 等命令消耗固定 174 额度（#3886），浪费资源。

---

## 📅 总结

今日发布的 v1.0.76-0 带来了 MCP 性能优化和 Autopilot 模式改进，但对社区热切关注的 zombie 进程、CAPI 5MB 限制、ACP 用量上报等核心问题尚未触及。多个 triage 状态的新 Issue 提示 macOS 和 Windows 平台仍存在兼容性坑。PR 方面，修复 install.sh 泄漏和修正文档的 PR 虽久未合并，但值得维护者优先评审。整体来看，Copilot CLI 社区正处于功能丰富与稳定性博弈的关键阶段，建议开发者留意 **非交互模式集成** 和 **资源管理** 方面的更新。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

好的，这是为您准备的 Kimi Code CLI 社区动态日报。

---

# Kimi Code CLI 社区动态 | 日报 2026-07-28

## 今日速览

今日社区动态主要集中在 **Bug 修复** 和 **稳定性提升** 上。核心修复包括解决了 Hook 任务可能被 GC 意外回收的严重问题，以及 Windows 系统下因字符编码导致的 CLI 启动崩溃。同时，社区对 VS Code 扩展的交互可靠性提出了新的挑战。

## 社区热点 Issues

以下挑选了今日更新的 4 个最值得关注的 Issue（因数据源数量限制，已全量展示）：

1.  **#1070 [已关闭] 登录失败：网络不可达**
    -   **重要性：** 涉及基础的网络连接功能。虽然已关闭，但可能反映了特定网络环境下的 TLS 连接问题，需要关注底层网络库的兼容性。
    -   **社区反应：** 有 8 条评论，说明此问题曾引起讨论。最终被关闭，可能已被修复或确定为环境问题。
    -   **链接：** `MoonshotAI/kimi-cli Issue #1070`

2.  **#2317 [开放] [VS Code 扩展] Plan 模式下的文件路径无法在 Chat Webview 中点击**
    -   **重要性：** 直接影响开发者在使用 Plan 模式时的工作流程，需要手动复制路径，降低了交互效率。这是一个关键的 UI/UX 问题。
    -   **社区反应：** 3 条评论，表明此问题已获得其他用户共鸣，但尚未有解决方案。
    -   **链接：** `MoonshotAI/kimi-cli Issue #2317`

3.  **#2563 [开放] [Bug] VS Code 扩展审批提示渲染失败**
    -   **重要性：** **这是当前最严重的 Bug 之一**。扩展在请求用户批准（如退出 Plan 模式、工具权限）时，提示窗口可能无法渲染，导致任务无限期挂起或 600 秒超时。这完全阻塞了用户与 AI 的交互流程。
    -   **社区反应：** 为最新提交的 Issue，评论 0 条，但问题描述清晰，复现路径明确，**开发者应优先关注**。
    -   **链接：** `MoonshotAI/kimi-cli Issue #2563`

4.  **#2564 [开放] [Bug] Hook 回调任务被 GC 回收**
    -   **重要性：** **这是一个严重的问题**。用户配置的 `PostToolUse` 等 Hook 子进程会因 Python 垃圾回收机制而“非确定性”地执行失败或根本不执行。这破坏了自定义工作流的可靠性，是开发过程中的一个隐藏陷阱。
    -   **社区反应：** 开发者已定位到 `asyncio.WeakSet` 的根因，为后续修复提供了精确方向。
    -   **链接：** `MoonshotAI/kimi-cli Issue #2564`

## 重要 PR 进展

1.  **#2565 [开放] 修复：为即时触发的 Hook 保持强引用**
    -   **功能/修复：** 直接响应 Issue #2564。通过在函数作用域外保持对 `_hook_task` 的强引用（例如使用列表或 `TaskGroup`），解决了 `asyncio` 任务因超出作用域而被 GC 回收的问题，从根源上修复了 Hook 回调不稳定的 Bug。
    -   **链接：** `MoonshotAI/kimi-cli PR #2565`

2.  **#2561/#2560 [开放] 修复：Windows 非 UTF-8 环境下的启动 Unicode 编码错误**
    -   **功能/修复：** 这两个 PR 分别针对 CLI 和 Web 模式修复了 Windows 系统在非 UTF-8 编码（如中文 GBK）下启动时，因输出 Logo 中的特殊字符（如 `▐`、`➜`）而直接崩溃的问题。这是一个关键的**跨平台兼容性修复**。
    -   **链接：** `MoonshotAI/kimi-cli PR #2561`， `MoonshotAI/kimi-cli PR #2560`

3.  **#2562 [开放] 修复：允许禁用 Prompt 缓存 Key**
    -   **功能/修复：** 引入一个新的 `prompt_cache_key` 布尔配置项。当设置为 `false` 时，API 请求中将不再包含基于会话派生的 `prompt_cache_key` 字段。这为开发者提供了更高的控制权，可能在需要完全避免缓存导致的上下文污染时非常有用。
    -   **链接：** `MoonshotAI/kimi-cli PR #2562`

4.  **#2539 [开放] 修复：为 Moonshot API 规范化 MCP 工具名**
    -   **功能/修复：** 针对 Moonshot API 对 MCP 工具名称的限制，生成了稳定的别名用于 API 交互，同时保留原始名称用于内部路由。此外，还修复了 MCP Schema 中缺少 `object` 根类型以及 `anyOf`/`required` 格式问题，提升了与 MCP 协议的兼容性。
    -   **链接：** `MoonshotAI/kimi-cli PR #2539`

## 功能需求趋势

从近期 Issues 和 PRs 可以提炼出社区最关注的三个方向：

1.  **VS Code 扩展的稳定性和交互体验**：多个 Bug（#2317, #2563）和 PR 都围绕扩展展开，表明 VS Code 是 Kimi Code CLI 最核心的 IDE 集成平台。焦点已从“能用”转向“好用”，特别是**审批流程的可靠性和界面交互的自然性**是当前主要痛点。

2.  **跨平台兼容性**：Windows 系统的编码问题（#2561, #2560）成为社区关注的焦点。这表明用户群体正在扩大，项目需要为不同语言环境（特别是非英文 Windows 用户）提供稳健的体验。**基础环境的鲁棒性**是当前急需解决的问题。

3.  **工作流自动化与可定制性**：Hook 功能的 Bug（#2564）及其修复（#2565）凸显了社区对**自定义工作流**的深度依赖。开发者不仅需要 Hook 功能，更需要它能够**可靠、可预测地执行**。这是从简单聊天向自动化代码助手演进的关键环节。

## 开发者关注点

-   **工具执行的可靠性**：Issue #2563 是最具代表性的痛点——AI 发起的操作请求（如创建/编辑文件）可能因扩展 UI 问题而“石沉大海”，导致用户不得不等待超时或手动干预。这直接破坏了信任感和工作流程。
-   **背景任务的健壮性**：Issue #2564 揭示的 Hook 任务被 GC 回收问题，说明开发者编写的自动化脚本（如测试、格式化）可能在不经意间默默失败。这要求在异步编程中更加谨慎地管理任务生命周期。
-   **基础环境的兼容性**：Issue #1070（虽已关闭）和 Issue #2560/2561 表明，网络环境和操作系统差异是导致 CLI 工具“开箱即用”失败的主要障碍。确保在复杂多样的用户环境中稳定运行是提升采用率的基础。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 ｜ 2026-07-28

---

## 今日速览

- 发布 **v1.18.7** 补丁版，主要修复 macOS 全屏标题栏内边距、命令面板阴影残留、项目选择器滚动等桌面端 Bug。
- 社区活跃度保持高位，共有 **50 条 Issue** 更新（其中 30 条有较多评论），**50 个 PR** 进入状态变动（其中多个由 `opencode-agent[bot]` 自动提交）。
- 值得关注的两大方向：**MCP 客户端 SDK 升级至 v2**（PR #39247）以及 **配置热重载与插件依赖修复**（PR #39224、#38830）。

---

## 版本发布

### v1.18.7

**桌面端 Bugfixes**
- 移除 macOS 全屏模式下多余的标题栏内边距。
- 修复被隐藏的命令在清除后仍可能重新出现的问题。
- 为项目选择器下拉列表添加滚动支持（感谢 @david1gp）。

> 感谢 2 位社区贡献者。

---

## 社区热点 Issues（10 条最值得关注）

| # | 标题 | 评论数 | 关键点 |
|---|------|--------|--------|
| [#26628](https://github.com/anomalyco/opencode/issues/26628) | TUI 配置 schema 不匹配 + 设置 leader 为 none 时崩溃 | 14 | 配置文件中 `keymap` 字段被拒绝，改回 `keybinds` 后设置 leader 为 none 导致 TUI 白屏。**底层配置解析缺陷**。 |
| [#14494](https://github.com/anomalyco/opencode/issues/14494) | Azure 及 Azure Cognitive Services 设置文档不清晰 | 12 | 用户因缺少 `AZURE_RESOURCE_NAME` 环境变量而无法通过 `opencode auth login` 配置 Azure 提供商。**文档需补充**。 |
| [#18273](https://github.com/anomalyco/opencode/issues/18273) | 在 Nix flake 中构建失败 | 10 | 将 OpenCode 作为 Nix flake input 引用时，home-manager 构建失败。**包管理兼容性问题**。 |
| [#21793](https://github.com/anomalyco/opencode/issues/21793) | `permission.skill` 模式规则未完全执行 | 8 | 使用 `"lark-*": "deny"` 模式后，Lark 系列技能仍暴露给模型。**权限控制漏洞**。 |
| [#29034](https://github.com/anomalyco/opencode/issues/29034) | qwen3.6-plus-free / minimax-m2.5-free 在 TUI 中不可见 | 7 | 免费模型在 Zen API 中存在，但 `opencode models` 不显示。**模型列表过滤问题**。 |
| [#29571](https://github.com/anomalyco/opencode/issues/29571) | 对话因 GitHub Copilot “vision is not enabled” 永久卡死 | 6 | 组织禁用 vision 后，对话无法继续。**致命错误无恢复机制**。 |
| [#16962](https://github.com/anomalyco/opencode/issues/16962) | SSH 连接下剪贴板复制不生效（Mac to Mac） | 6 | 显示“已复制”但系统剪贴板未更新。**远程会话剪贴板适配缺失**。 |
| [#29520](https://github.com/anomalyco/opencode/issues/29520) | `/undo` 只回滚对话不回滚文件 | 6 | 撤销操作仅恢复聊天记录，文件修改未还原，且“Last turn changes”为空。**核心功能不完整**。 |
| [#38830](https://github.com/anomalyco/opencode/issues/38830) | AutoScroller 插件依赖 Scroller 插件错误 | 5 | **最新 Bug**，PluginRegistry 注册顺序导致依赖缺失报错。影响插件开发者。 |
| [#29200](https://github.com/anomalyco/opencode/issues/29200) | 无效 JSON/C 导致启动时出现“Unexpected server error” | 5 | 错误信息不友好，不指向具体语法错误。**降低调试效率**。 |

---

## 重要 PR 进展（10 条关键合并/开放 PR）

| # | 标题 | 状态 | 核心内容 |
|---|------|------|----------|
| [#39247](https://github.com/anomalyco/opencode/pull/39247) | feat(mcp): upgrade client SDK to v2 | OPEN | 替换 `@modelcontextprotocol/sdk@1.29.0` 为 `@modelcontextprotocol/client@2.0.0-beta.5`，支持无状态/遗留 MCP 协商、分页委托、list-change 订阅、OAuth 签名迁移。**架构级升级**。 |
| [#39224](https://github.com/anomalyco/opencode/pull/39224) | feat(core): reload configured plugins from source edits | CLOSED | 本地配置插件（`"plugins": ["./tools/my-plugin.ts"]`）编辑后自动热重载，与自动发现目录保持一致的开发体验。 |
| [#39239](https://github.com/anomalyco/opencode/pull/39239) | fix(core): keep config root watches alive and ignore vendored trees | CLOSED | 修复配置文件删除后仍能重载、忽略 vendor 目录的监控问题。**提升配置变更可靠性**。 |
| [#39242](https://github.com/anomalyco/opencode/pull/39242) | fix(tui): hide background hint when all work is already backgrounded | OPEN | 修复 `ctrl+b` 背景提示因 metadata 异步设置而错误显示的问题。关联 #36940。 |
| [#39238](https://github.com/anomalyco/opencode/pull/39238) | fix(core): bound search tool execution | OPEN | 为交互式 glob/grep 工具添加 30 秒超时，防止挂起。修复 #39208。 |
| [#39245](https://github.com/anomalyco/opencode/pull/39245) | fix(core): refresh system prompt references | CLOSED | 更新系统提示中的 V2 文档链接、工具名称和 Gemini/Codex/GPT 示例。 |
| [#39234](https://github.com/anomalyco/opencode/pull/39234) | [contributor] docs: forbid type-position import references | CLOSED | 新增代码风格规则：禁止 `import("...")` 类型位置引用。改善代码一致性。 |
| [#39223](https://github.com/anomalyco/opencode/pull/39223) | [contributor] test(core): add scoped test LLM | OPEN | 复活 TestLLM 测试模式，简化 session-runner 测试。提升测试基础设施。 |
| [#39241](https://github.com/anomalyco/opencode/pull/39241) | fix(app): follow visual tab order | OPEN | 根据可见标签栏顺序推导 Tab 导航次序，跳过隐藏标签，支持换行环绕。 |
| [#39233](https://github.com/anomalyco/opencode/pull/39233) | refactor(app): establish v2 session controller | OPEN | 系列重构之一，提取新会话控制器，为 V2 架构铺路。 |

---

## 功能需求趋势

从所有 Issue 中可提炼出社区当前最关注的 5 个方向：

1. **模型支持扩展**  
   - 免费模型在 TUI 中不显示（#29034）  
   - 请求支持 DeepSeek-V4-Pro on SiliconFlow（#29494）  
   - Qwen 3.5 Plus 配额误报（#23722）  
   - Kimi K3 温度参数被上游拒绝（#39214）

2. **配置与 schema 一致性**  
   - TUI 配置 keymap/keybinds 字段不兼容（#26628）  
   - 无效 JSON/C 错误信息不友好（#29200）  
   - Azure 文档缺失环境变量说明（#14494）

3. **权限与安全**  
   - `permission.skill` 模式匹配未生效（#21793）  
   - 远程 MCP 工具调用需暴露上游 HTTP 头（#29665）

4. **撤销/回滚机制完善**  
   - `/undo` 只回滚对话不回滚文件（#29520）  
   - 多服务器布局状态未隔离导致会话循环（#18302）

5. **插件系统稳定性与热重载**  
   - AutoScroller 依赖 Scroller 插件顺序错误（#38830）  
   - 配置插件源编辑后需手动重启（正被 PR #39224 解决）

---

## 开发者关注点

- **严重卡死与崩溃**：GitHub Copilot vision 错误导致对话永久卡死（#29571）；Sidecar 在 Windows 上反复崩溃（ACCESS_VIOLATION，exit code 1，#29599）。
- **操作体验不一致**：SSH 下剪贴板不工作（#16962）；新会话从键盘快捷键启动时继承当前模式而非默认 agent（#29594）；TUI 中 `/session` 内 Ctrl+D 无响应（#29687）。
- **动画与控制**：持久会话动画（spinner/进度条）无法禁用（#21939）；`/go` 页面因 LimitsGraph 溢出导致水平抖动（#29794）。
- **国际化与中文用户**：中文用户反馈 `/init` 选择后会话消失（#29708），以及免费模型列表不显示（#29034）。
- **构建与部署**：Nix flake 构建失败（#18273）与 Zen/Go 端点 `qwen3.7-max` 返回 `oa-compat` 不兼容（#29688）影响 CI 和云端使用。

---
*数据来源：GitHub repository anomalyco/opencode，截至 2026-07-28 23:59 UTC。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-07-28

## 📌 今日速览

昨日（7/27-28）Pi 项目共处理了约 50 条 Issue 和 25 个 PR，社区活跃度较高。核心动态包括：**Copilot Enterprise 压缩功能依旧不可用**（#6768 持续发酵）；**Anthropic 会话亲和性缺失** 被快速修复（#7161 →#7172）；**Z.AI 提供商 `max_tokens` 字段错配** 已提交 PR（#7143 →#7174）。此外，**全量内容搜索**（SQLite FTS5）和 **扩展系统暴露 `scopedModels`** 等实用特性正在开发中。

---

## 🌟 社区热点 Issues

以下按关注度与重要性选出 10 个最值得关注的 Issue：

### 1. #6768 — [Bug] 使用 Copilot Enterprise 时压缩（Compaction）不可用
- **链接**：[earendil-works/pi Issue #6768](https://github.com/earendil-works/pi/issues/6768)
- **重要性与社区反应**：评论 14，👍 12。企业用户的痛点问题：尝试用 Copilot Enterprise 压缩上下文会得到 421 错误。自 7 月 17 日创建至今未关闭，社区关注度高。
- **状态**：OPEN，暂无修复。

### 2. #5263 — 会话内模型和思考级别更改默认应为临时性
- **链接**：[earendil-works/pi Issue #5263](https://github.com/earendil-works/pi/issues/5263)
- **重要性与社区反应**：评论 10，👍 10。请求将 `/model`、`/thinking` 等命令的变更限制在当前会话，避免污染全局默认配置。同时建议新增 `/settings` 下的 “Default model” 入口。功能需求清晰，获得社区广泛赞同。
- **状态**：OPEN。

### 3. #6747 — [inprogress] 为 Agent 消息 Markdown 增强提供 API
- **链接**：[earendil-works/pi Issue #6747](https://github.com/earendil-works/pi/issues/6747)
- **重要性与社区反应**：评论 8，👍 2。允许扩展在 Agent 消息中注入自定义渲染（如公式渲染），而不影响发送给 LLM 的内容。已有初步 PR 跟踪，社区期待相关扩展能力。
- **状态**：OPEN（标记 inprogress）。

### 4. #6970 — GitHub Copilot 插件授权方式导致 Token 失效
- **链接**：[earendil-works/pi Issue #6970](https://github.com/earendil-works/pi/issues/6970)
- **重要性与社区反应**：评论 4，👍 1。Pi 使用 `GitHub Copilot Plugin` 认证而非 OAuth，导致多设备同时使用时 token 被刷新失效。该问题影响通过 Copilot LSP（如 Neovim）与 Pi 协同工作的用户。已关闭但讨论活跃。
- **状态**：CLOSED（已修复？需跟踪后续）。

### 5. #7157 — [Bug] OpenCode Go 提供者显示名错为 “OpenCode Zen Go”
- **链接**：[earendil-works/pi Issue #7157](https://github.com/earendil-works/pi/issues/7157)
- **重要性与社区反应**：评论 5，显示名混淆用户认知，属低级 UI 错配。已快速提交 PR #7173 修复。
- **状态**：CLOSED（已合并修复）。

### 6. #7161 — Anthropic Messages 从不发送 `x-client-request-id`
- **链接**：[earendil-works/pi Issue #7161](https://github.com/earendil-works/pi/issues/7161)
- **重要性与社区反应**：评论 4。影响使用会话亲和性网关（如代理分片）的用户，导致同一对话无法绑定到同一后端实例。已在 24 小时内得到修复 PR #7172。
- **状态**：OPEN → 等待合并。

### 7. #7143 — Z.AI 提供者误发 `max_completion_tokens`（Z.AI 忽略该字段）
- **链接**：[earendil-works/pi Issue #7143](https://github.com/earendil-works/pi/issues/7143)
- **重要性与社区反应**：评论 4。Z.AI 只识别 `max_tokens`，导致输出限制未生效，长推理中途被截断。已提交 PR #7174。
- **状态**：CLOSED（no-action → 由 PR 解决）。

### 8. #7198 — Markdown 渲染器在嵌套邮件引用时崩溃
- **链接**：[earendil-works/pi Issue #7198](https://github.com/earendil-works/pi/issues/7198)
- **重要性与社区反应**：评论 2。`RangeError: Maximum call stack size exceeded`，由邮件风格的多级引用触发。直接导致会话不可恢复。紧急 bug，社区关注。
- **状态**：CLOSED（已修复或关闭？未标记修复）。

### 9. #7189 — Git 扩展安装失败后污染安装目录
- **链接**：[earendil-works/pi Issue #7189](https://github.com/earendil-works/pi/issues/7189)
- **重要性与社区反应**：评论 1。扩展安装流程不稳定：失败后残留不完整目录，阻止后续重试。用户体验差，需优化安装原子性。
- **状态**：CLOSED（untriaged）。

### 10. #7194 — 当活动工具卡片移出视口时，Pi 每秒执行全量重新渲染
- **链接**：[earendil-works/pi Issue #7194](https://github.com/earendil-works/pi/issues/7194)
- **重要性与社区反应**：评论 1。远程沙盒用户反馈的巨大性能问题：全量重绘导致带宽和 CPU 飙升。触及渲染引擎核心。
- **状态**：CLOSED（untriaged，需性能优化）。

---

## 🔧 重要 PR 进展

以下 10 个 PR 为昨日最值得关注的合并或开发动态：

### 1. #7163 — feat: search index sqlite（全量会话搜索）
- **链接**：[earendil-works/pi PR #7163](https://github.com/earendil-works/pi/pull/7163)
- **内容**：为 `SessionRepo.search()` 添加 SQLite FTS5 全文搜索支持。JSONL 和内存后端仍为全量扫描，但 SQLite 将获得高效内容搜索。
- **状态**：OPEN。

### 2. #7191 — feat(extensions): expose ctx.scopedModels to extensions
- **链接**：[earendil-works/pi PR #7191](https://github.com/earendil-works/pi/pull/7191)
- **内容**：向扩展上下文暴露当前会话的 scoped model 列表（通过 `--models`/`enabledModels` 解析后的集合），解决扩展无法读取生效模型列表的问题。
- **状态**：CLOSED（已合并）。

### 3. #7081 — feat(ai): support Claude Opus 5 on Bedrock
- **链接**：[earendil-works/pi PR #7081](https://github.com/earendil-works/pi/pull/7081)
- **内容**：为 Bedrock 上的 Claude Opus 5 配置 Adaptive Thinking（必需参数），同时修复错误消息显示问题。
- **状态**：CLOSED（已合并）。

### 4. #7172 — fix(ai): send x-client-request-id on anthropic-messages
- **链接**：[earendil-works/pi PR #7172](https://github.com/earendil-works/pi/pull/7172)
- **内容**：为 `anthropic-messages` 路径添加 `x-client-request-id` 请求头（与 OpenAI 系列保持一致性），解决会话亲和性问题。
- **状态**：CLOSED（已合并）。

### 5. #7174 — fix(ai): send max_tokens for Z.AI providers
- **链接**：[earendil-works/pi PR #7174](https://github.com/earendil-works/pi/pull/7174)
- **内容**：针对 Z.AI 提供者（`zai`, `api.z.ai` 等）改用 `max_tokens` 字段，而非被忽略的 `max_completion_tokens`。修复输出上限不生效问题。
- **状态**：OPEN。

### 6. #7176 — fix(ai): prefer configured Bedrock profile over ambient AWS keys
- **链接**：[earendil-works/pi PR #7176](https://github.com/earendil-works/pi/pull/7176)
- **内容**：修复 Bedrock 配置项被环境变量 `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY` 覆盖的问题，确保用户显式配置的 profile 优先。
- **状态**：OPEN。

### 7. #7169 — fix(coding-agent): dedupe byte-identical context files
- **链接**：[earendil-works/pi PR #7169](https://github.com/earendil-works/pi/pull/7169)
- **内容**：`loadProjectContextFiles` 在遍历目录收集 `AGENTS.md`/`CLAUDE.md` 时，对字节相同但路径不同的文件进行去重。避免上下文重复。
- **状态**：CLOSED（已合并）。

### 8. #7103 — fix(coding-agent): support concurrent user bash cancellation
- **链接**：[earendil-works/pi PR #7103](https://github.com/earendil-works/pi/pull/7103)
- **内容**：支持同时取消多个用户 bash 命令，改进并发场景下的用户体验。
- **状态**：CLOSED（已合并）。

### 9. #7173 — fix(ai): rename OpenCode Zen Go display name to OpenCode Go
- **链接**：[earendil-works/pi PR #7173](https://github.com/earendil-works/pi/pull/7173)
- **内容**：简单显示名修复，对应 Issue #7157。
- **状态**：CLOSED（已合并）。

### 10. #6881 — [inprogress] feat(ai): use provider-reported cost when responses include it
- **链接**：[earendil-works/pi PR #6881](https://github.com/earendil-works/pi/pull/6881)
- **内容**：当 API 返回中包含 billed cost 时，优先使用实际成本而非目录价格。支持 OpenAI 和 Vercel AI Gateway 格式的成本明细。减少费用计算误差。
- **状态**：OPEN（inprogress）。

---

## 🚀 功能需求趋势

综合分析近 24 小时的 Issues，社区最关注的功能方向包括：

1. **多模型 / 多提供商支持**  
   - 要求正确处理不同 API 的字段差异（Z.AI、Anthropic）。  
   - 添加新提供者（Merge Gateway, AWS Bedrock profile 优先级）。  
   - 会话内的模型切换应临时生效，避免全局污染（#5263）。

2. **扩展系统增强**  
   - 扩展应能读取会话 scope model 列表（#7191）。  
   - 添加响应前/后处理钩子（pre_response/before_send_message，#7137）。  
   - 扩展安装失败后目录需清理或支持重试（#7189）。

3. **性能与稳定性**  
   - 大缓冲区可见宽度缓存改用 LRU 淘汰（#7196）。  
   - 降低持续 re-render 频率（#7194）。  
   - Markdown 渲染栈溢出修复（#7198）。

4. **认证与安全**  
   - 提供只读的 auth 预检命令（#7152）。  
   - 支持 AWS credential_process（#7170）。  
   - Copilot 插件认证替代方案（#6970）。

5. **会话管理**  
   - SQLite 全文搜索索引（#7163）。  
   - 会话模型隔离。

---

## 🐛 开发者关注点（痛点 / 高频反馈）

- **Copilot Enterprise压缩不可用** 是企业用户的头号痛点，已持续 11 天无实质性进展。  
- **多设备 token 失效** 源于 Pi 使用的认证方式，影响使用 Copilot LSP 的用户。  
- **Z.AI / MiniMax 等非标准提供商** 的字段兼容问题反复出现。  
- **扩展系统** 缺乏原子安装与错误恢复，容易留后门。  
- **远程沙盒性能** 问题突出，全量重绘占用大量带宽。  
- **嵌套 Markdown 区块** 可导致终端崩溃，影响已有会话的可恢复性。  
- **会话 fork 选择器** 在消息 `content` 为 `null` 时致命崩溃，需对异常数据做健壮处理。

---

> 日报生成自 [earendil-works/pi](https://github.com/earendil-works/pi) 公开数据，统计时间截至 2026-07-28 12:00 UTC。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 | 2026-07-28

## 📌 今日速览

- **SWE-bench 基准测试新发版**：DSW manual benchmark POC 预发布（v0.20.0-nightly），500 题中 376 题 resolve，但状态标记为 **QUARANTINED**（隔离），暂不用于正式评估。
- **E2E 测试频繁失败**：过去 24 小时内主分支 CI 在超过 10 个 commit 上挂掉，团队正通过自动去重和人工修复加速排查。
- **两项 P1 级 Bug 受关注**：YOLO 模式大代码生成因 socket 关闭失败、长上下文流式连接重置，直接影响核心编码体验，社区讨论热烈。

---

## 🚀 版本发布

**非生产基准预发布（DSW manual benchmark POC）**
- `dsw-manual-poc-20260727-1` 和 `dsw-manual-poc-20260727-2`
- 基于 `v0.20.0-nightly.20260722.b98306b7e`
- **SWE-bench Verified**：500/500 完成，376 resolved / 116 unresolved / 1 execut（执行态），状态为 **QUARANTINED**（隔离），原因待确认。
- 用途：内部 benchmark 测试，非正式发布。

---

## 🔥 社区热点 Issues（10 条）

### 1. [#7832 YOLO 模式：大代码生成因 socket 关闭失败](https://github.com/QwenLM/qwen-code/issues/7832)
**优先级 P1** | **类型 Bug** | **评论 3**
- 问题：YOLO 模式下生成 500+ 行代码时，DashScope 网关约 3-5 分钟断开 TCP 连接，导致 `UND_ERR_SOCKET: other side closed`。
- 社区反应：开发者立即反馈，期望服务端支持长连接重试或客户端自动重建。

### 2. [#7831 长上下文（>150k tokens）流式响应 ECONNRESET](https://github.com/QwenLM/qwen-code/issues/7831)
**优先级 P2** | **模型/长上下文** | **评论 3**
- 问题：对话超过约 150k tokens 后，API 调用频繁 `read ECONNRESET`，一小时内出现 5 次。
- 社区反应：用户质疑客户端网络重试机制不足，建议增加上下文压缩或分段策略。

### 3. [#7835 子代理提问后用户无法回答](https://github.com/QwenLM/qwen-code/issues/7835)
**优先级 P2** | **Bug / 子代理工具** | **评论 3**
- 问题：子代理可能向用户提问，但主代理不转发，导致子代理永远等待。
- 社区反应：讨论两种方案：禁止子代理提问，或者主代理收集并转发问题给用户。

### 4. [#7841 429 配额耗尽错误被静默重试](https://github.com/QwenLM/qwen-code/issues/7841)
**优先级 P2** | **Bug / 核心** | **评论 3**
- 问题：API 返回 429 且 body 表示“配额永久耗尽”时，`isRateLimitError` 仅检查状态码，导致无限重试，用户无感知。
- 社区反应：建议区分临时限流和永久配额耗尽，后者应终止并报错。

### 5. [#6762 技能上下文生命周期管理](https://github.com/QwenLM/qwen-code/issues/6762)
**优先级 P2** | **Feature Request** | **评论 5**
- 需求：SKILL.md 的 body 会永久留在会话历史中，无法卸载或压缩。希望引入生命周期管理（卸载、压缩、过期）。
- 社区反应：讨论积极，认为该功能对长期会话性能至关重要。

### 6. [#7585 添加直接外部上下文提供者 Profile](https://github.com/QwenLM/qwen-code/issues/7585)
**优先级 P3** | **Feature Request / 集成** | **评论 9（最多）**
- 需求：允许一个 Qwen CLI 进程从管理员绑定的外部内存/知识服务获取仓库共享上下文，而不修改 Qwen Core。
- 社区反应：企业级集成需求强烈，但需进一步讨论标准化接口。

### 7. [#7449 定义企业外部内存集成 Profile](https://github.com/QwenLM/qwen-code/issues/7449)
**优先级 P3** | **Feature Request** | **评论 6**
- 需求：官方提出一个供应商中立的 **企业外部内存集成 Profile**，文档先行，兼容性测试增量添加。
- 社区反应：与 #7585 互补，社区期待统一的内存扩展规范。

### 8. [#7887 动态工作流 TUI：使实时运行可读为执行控制台](https://github.com/QwenLM/qwen-code/issues/7887)
**优先级 P2** | **Feature Request / UI** | **评论 3**
- 需求：将现有 Dynamic Workflow 详情视图改造为终端原生执行控制台，展示阶段轨道、实时进度和信号。
- 社区反应：已实现对应 PR #7892，反馈正面。

### 9. [#7167 Fleet Shepherd Dashboard](https://github.com/QwenLM/qwen-code/issues/7167)
**自动化维护** | **CI/CD** | **评论 4**
- 内容：由 CI 自动维护的面板，跟踪 PR 状态和扫描信号。当前显示 PR #7892 和 #7885 在检。
- 社区反应：开发者可快速掌握 CI 脉搏，减少手动检查。

### 10. [#7807 GitHub 频道按通知原因分发](https://github.com/QwenLM/qwen-code/issues/7807)
**优先级 P2** | **Feature Request / 渠道** | **评论 3**
- 需求：目前 GitHub 适配器将所有 issue/PR 评论统一处理，导致 `notification.reason`（如 mention、review_request）被忽略。希望按原因路由，构建更精准的 agent 输入。
- 社区反应：讨论中已有对应 PR #7826 实现。

---

## 📦 重要 PR 进展（10 条）

### 1. [#7892 feat(cli): 重新设计 Dynamic Workflow 执行控制台](https://github.com/QwenLM/qwen-code/pull/7892)
**状态 OPEN** | **review/self-reported**
- 将动态工作流详情视图改为紧凑的执行控制台，包含运行头、阶段轨道、实时 agent 进度、最近信号和错误区。
- 重要性：大幅提升终端工作流调试体验。

### 2. [#7891 feat(channels): 在 daemon 会话中暴露循环工具](https://github.com/QwenLM/qwen-code/pull/7891)
**状态 OPEN**
- 通过私有 MCP 服务器暴露频道循环工具，允许用户用自然语言创建、列出、取消定期任务。
- 重要性：为频道自动化（如定时推送）提供基础能力。

### 3. [#7894 feat: 为会话写入者租赁添加 opt-in 门控](https://github.com/QwenLM/qwen-code/pull/7894)
**状态 OPEN**
- 增加 `experimental.sessionWriterLease` 设置，默认关闭。仅当显式启用且会话通过 ACP/daemon 运行时才生效。
- 重要性：防止跨进程写入冲突，保障数据一致性。

### 4. [#7859 feat(web-shell): 添加原生 Live Voice](https://github.com/QwenLM/qwen-code/pull/7859)
**状态 OPEN** | **autofix/takeover**
- macOS 上安装 Qwen Live Host 后，用户可在任意应用按两次 Command 开始语音对话。
- 重要性：扩展语音交互场景，提升非键盘输入效率。

### 5. [#7812 fix(serve): 在关闭时释放托管会话写入者锁](https://github.com/QwenLM/qwen-code/pull/7812)
**状态 OPEN** | **autofix/takeover**
- daemon 管理的 ACP 子进程在收到关闭信号时，主动关闭会话/轮次准入，并原子性回收写入者锁。
- 重要性：避免关闭时数据残留或死锁。

### 6. [#7893 feat(web-shell): 添加渠道配置流](https://github.com/QwenLM/qwen-code/pull/7893)
**状态 OPEN**
- Web Shell 中新增钉钉、企业微信、飞书渠道的可写配置体验，支持创建、编辑、删除配置。
- 重要性：让非 CLI 用户也能管理渠道。

### 7. [#7792 feat(ci): 通过评论已有 issue 来去重 E2E 失败](https://github.com/QwenLM/qwen-code/pull/7792)
**状态 OPEN** | **autofix/takeover, review/self-reported**
- 修改 `main-ci-failure-issue.yml`：对于相同失败模式的 commit，不再新建 issue，而是评论到已有 issue 上。
- 重要性：减少重复 issue 噪音，集中排查。

### 8. [#7731 feat(web-shell): 添加 git 分支选择器、提交对话框和创建 PR 流](https://github.com/QwenLM/qwen-code/pull/7731)
**状态 OPEN** | **autofix/takeover**
- Web Shell 中实现 IntelliJ 风格分支选择、提交对话框、创建 PR 功能。
- 重要性：将 git 常用操作搬进 Web Shell，提升远程开发效率。

### 9. [#7821 fix(daemon): 加固 Todo Stop Guard 延续](https://github.com/QwenLM/qwen-code/pull/7821)
**状态 OPEN** | **autofix/takeover**
- 将 Todo Stop Guard 的延续排序改为原子状态机变更，引入基于桥接 prompt ID 的 claim/release 协议。
- 重要性：修复多消费者下任务停止的竞态问题。

### 10. [#7808 feat(web-shell): 添加分割面板 header 动作插槽与溢出菜单](https://github.com/QwenLM/qwen-code/pull/7808)
**状态 OPEN** | **autofix/takeover, review/self-reported**
- 为分割视图的每个窗格 header 添加宿主渲染插槽和溢出菜单，防止过多操作按钮挤占标题空间。
- 重要性：改善 Web Shell 多窗格 UI 的可扩展性。

---

## 📊 功能需求趋势

从过去 24 小时的热点 Issues 中可以看出社区最关注以下方向：

1. **企业级上下文集成**（#7585, #7449）：外部上下文提供者、外部内存集成，强调标准化与零 Core 改造。
2. **上下文生命周期管理**（#6762）：长时间运行时 context 膨胀问题，需要卸载/压缩/过期机制。
3. **终端用户体验优化**（#7887, #7890）：Dynamic Workflow 执行控制台、更清晰的 TUI 信息呈现。
4. **渠道集成增强**（#7807, #7687, #7893）：GitHub 按通知原因分发、钉钉图文传送、Web Shell 渠道配置。
5. **子代理交互深度**（#7835）：子代理与用户的对话转发需求，避免死锁。
6. **CI/CD 自动化**（#7792, #7383）：E2E 失败去重、自动修复 trivial 文档/测试问题。
7. **网络与容错**（#7832, #7831）：长连接稳定性、重试策略优化。
8. **Web Shell 功能丰富**（#7731, #7808, #7859）：Git 操作、语音控制、UI 组件扩展。

---

## ⚡ 开发者关注点

- **YOLO 下大输出不稳定**：`UND_ERR_SOCKET` 导致 500+ 行代码生成失败，开发者呼吁增加自动重试或分块策略。
- **长上下文流式连接重置**：150k tokens 以上 `ECONNRESET` 频发，影响深度编码助手使用。
- **配额错误静默重试**：429 永久配额耗尽被误判为临时限流，导致无限重试且无用户提示。
- **子代理与主代理通信断裂**：子代理提问后即无响应，影响多 agent 协作场景。
- **`--safe-mode` 误伤 ACP 传入的 MCP 配置**：本地 MCP 配置和客户端传入的 MCP server 均被丢弃，需明确隔离策略。
- **Git 分支显示过时**：切换分支后 footer 中分支名不刷新，UI 状态不同步。
- **冷启动首次输出延迟**：daemon 虽已优化会话创建，但首次模型输出仍需测量与优化（#7757）。

---

*数据来源：github.com/QwenLM/qwen-code，更新于 2026-07-28 UTC。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，以下是为您生成的 2026-07-28 DeepSeek TUI 社区动态日报。

---

# DeepSeek TUI 社区动态日报 2026-07-28

## 今日速览

今日社区动态集中在 **v0.9.2 版本发布前的最后冲刺**，大量 PR 被合并至候选分支。同时，**CRLF 文件编辑**、**成本计算透明度** 和 **死代码清理** 成为社区讨论和修复的热点。一个为网站录制真实操作演示的提议也得到了社区的积极响应。

## 社区热点 Issues

1.  **[Bug] `edit_file` 工具在 Windows 上处理 CRLF 文件失败 (#4764)**
    -   **重要性**: **高。** 切中 Windows 用户的核心痛点。`edit_file` 工具无法正确编辑 Windows 平台下使用 `\r\n` 换行符的文件，即使从 `read_file` 中复制的搜索字符串也不行。这直接影响了 Windows 用户的开发体验。
    -   **社区反应**: 问题刚被修复，一个对应的修复 PR (#4942) 已提交，社区反应迅速且积极。
    -   **链接**: `Hmbown/CodeWhale Issue #4764`

2.  **[Enhancement] 死代码清理：464个 `#[allow(dead_code)]` 属性正在隐藏代码漂移 (#4785)**
    -   **重要性**: **高。** 这是一个架构性问题。代码中存在大量无用的死代码，这会增加维护成本、降低编译速度，并掩盖真实的代码逻辑问题。项目维护者主动发起清理，体现了对代码质量的追求。
    -   **社区反应**: 维护者已提交一个关联 PR (#4938)，在引入一个预算性 CI 门控的同时，合并了部分无争议的死代码删除。社区暂无其他讨论。
    -   **链接**: `Hmbown/CodeWhale Issue #4785`

3.  **[Bug] 成本计算系统问题：两个定价系统，未计价的缓存写入，以及一个过于单一的 `/cost` 命令 (#4797)**
    -   **重要性**: **高。** 成本是用户使用 AI 工具的核心关切点。该议题指出了当前成本计算系统的多个缺陷：手工维护的定价代码（2003行）、低估实际支出以及昂贵的请求成本。这直接影响用户对项目的信任度。
    -   **社区反应**: 该议题已关闭，其中部分问题已在 `main` 分支上修复。一个后续议题 (#4939) 被开启，以进一步优化成本分解。
    -   **链接**: `Hmbown/CodeWhale Issue #4797`

4.  **[Enhancement] 支持“思考块”默认展开的设置 (#4925)**
    -   **重要性**: **高。** 直接回应用户的可用性反馈。在SSH/tmux环境下，空格键可能被终端捕获，导致无法展开思考块。同时，有用户希望始终保持展开状态。该特性需求明确，且已有社区成员提交了实现PR (#4928)。
    -   **社区反应**: 该议题在一天内从开放到关闭，PR 已被合并，效率极高。
    -   **链接**: `Hmbown/CodeWhale Issue #4925`

5.  **[Enhancement] 为网站和 README 录制一个真实的 CodeWhale 操作会话 (#4906)**
    -   **重要性**: **中。** 对于吸引新用户至关重要。目前，项目文档全是文字描述，缺乏直观的操作演示。一个高质量的操作录制GIF或视频能极大提升项目的吸引力和易理解性。
    -   **社区反应**: 项目维护者已提交一个实现录制的工具 PR (#4940)，但录制本身需要人工操作，议题保持开放。社区对此表示赞赏。
    -   **链接**: `Hmbown/CodeWhale Issue #4906`

6.  **[Bug] 在前台 Shell 执行时按回车，应能优雅地暂停 Shell 任务再处理新指令 (#4930)**
    -   **重要性**: **中。** 这是一个典型的用户体验问题。当用户在等待编译或脚本执行时，想发送新消息，但按回车会失败且不会自动暂停当前任务。这会影响工作流的流畅性。
    -   **社区反应**: 议题刚创建，暂无评论，但属于一个常见的用户期望功能。
    -   **链接**: `Hmbown/CodeWhale Issue #4930`

7.  **[Bug] `/cost` 命令应分解开销明细，并以人民币为单位显示 (#4939)**
    -   **重要性**: **中。** 作为 #4797 的后续，该议题进一步细化了成本计算的要求。用户不仅想知道总花费，还想了解每个模型、每个token类型的花费，并希望以人民币显示。它是提升项目专业度的体现。
    -   **社区反应**: 议题刚创建，暂无评论，但反映了社区对功能深度和透明度的追求。
    -   **链接**: `Hmbown/CodeWhale Issue #4939`

8.  **[Bug] 产品指导用户运行一个运行时并不存在的命令 `/rc` (#4936)**
    -   **重要性**: **中。** 这是一个严重的文档与实现不一致的Bug。官方网站提供的“复制到剪贴板”按钮中的命令 `/rc` 在当前的App中无法被识别，会直接导致用户困惑。
    -   **社区反应**: 议题刚创建，暂无评论。这是发布前必须修复的问题之一。
    -   **链接**: `Hmbown/CodeWhale Issue #4936`

9.  **[Bug] 思维等级在重启后静默恢复为“自动” (#4941)**
    -   **重要性**: **中。** 用户“Hunter”报告的一个持久化问题。用户设置了思考等级，但重启后却恢复为默认值，即使设置持久化本身看起来是正常的。这可能是一个状态恢复顺序或同步的Bug。
    -   **社区反应**: 议题刚创建，暂无评论。此类用户设置丢失的问题是高优先级的。
    -   **链接**: `Hmbown/CodeWhale Issue #4941`

10. **[Enhancement] 建议补全 StepFun Plan 和 OpenCode Go 订阅的接入配置 (#4526)**
    -   **重要性**: **低，但反映了社区贡献。** 非英语用户（使用DeepSeek翻译）提出的配置补充建议。显示了社区对新模型提供商集成的兴趣，以及国际化用户的参与。
    -   **社区反应**: 该议题已关闭，相关的功能已在另一个PR (#4467) 中实现。
    -   **链接**: `Hmbown/CodeWhale Issue #4526`

## 重要 PR 进展

1.  **[#4942] fix(tools): preserve CRLF edits**
    -   **内容**: 针对 #4764 的修复，使 `edit_file` 工具能正确处理和保留 Windows 下的 CRLF 换行符。
    -   **链接**: `Hmbown/CodeWhale PR #4942`

2.  **[#4940] feat(media): executable capture harness for the v0.9.2 real session**
    -   **内容**: 为录制真实的CodeWhale操作会话（#4906）提供了技术工具，使录制过程自动化，但最终录制仍需要人工操作。
    -   **链接**: `Hmbown/CodeWhale PR #4940`

3.  **[#4938] chore: land the bounded dead-code slice and add a budget ratchet**
    -   **内容**: 作为 #4785 的一部分，合并了部分无争议的死代码删除，并添加了一个CI门控，防止新的死代码无限制增长。
    -   **链接**: `Hmbown/CodeWhale PR #4938`

4.  **[#4935] fix(tui): stop the ambient jellyfish reading as a face**
    -   **内容**: 修复了TUI中“水母”动画的ASCII艺术，使其不再看起来像人脸，避免用户的恐怖谷效应。
    -   **链接**: `Hmbown/CodeWhale PR #4935`

5.  **[#4937] fix(tui): finalize stale shell transcript cells**
    -   **内容**: 修复了当Shell任务结束后，TUI界面中仍显示为“运行中”状态的陈旧单元格，使其正确显示为“已完成”或“无输出”。
    -   **链接**: `Hmbown/CodeWhale PR #4937`

6.  **[#4932] test(cli): satisfy strict all-target clippy**
    -   **内容**: 修复一个clippy lint警告，通过使用固定大小的数组替换`vec!`宏，以满足发布版本的严格检查要求。
    -   **链接**: `Hmbown/CodeWhale PR #4932`

7.  **[#4912] feat(web): v0.9.2 docs guide/vocabulary, getting-started path, pending media manifest**
    -   **内容**: 为 v0.9.2 候选分支添加了用户指南、词汇表和新用户引导路径等文档。
    -   **链接**: `Hmbown/CodeWhale PR #4912`

8.  **[#4913] test(preview): provider-free manifest×wire matrix for four exact routes**
    -   **内容**: 为四个关键的API路由添加了无需真实API Key的测试，使用 wiremock 模拟网络请求，以验证核心逻辑。
    -   **链接**: `Hmbown/CodeWhale PR #4913`

9.  **[#4931] Migrate QA PTY test harness from vt100 to rio-vt**
    -   **内容**: 将PTY测试框架从`vt100`库迁移到`rio-vt`库，这可能带来更好的终端模拟性能和更准确的渲染测试。
    -   **链接**: `Hmbown/CodeWhale PR #4931`

10. **[#4904] fix(composer): respect the menu limit and resolve git mentions once**
    -   **内容**: 修复了一个已合并PR(#4899)的回归，确保菜单限制功能正常工作，并优化了Git引用的解析，避免重复操作。
    -   **链接**: `Hmbown/CodeWhale PR #4904`

## 功能需求趋势

- **TUI/UX 优化**: 社区对终端用户界面（TUI）的细节体验非常敏感。热点包括：**思考块默认展开**、**优雅处理前台Shell阻塞**、**修复陈旧的Shell单元格状态** 以及 **捕捉录制操作演示**。
- **编辑器/IDE 集成**: 通过修复 `edit_file` 工具的 CRLF 兼容性问题，以及对远端编辑器(avante.nvim)的 JSON-RPC ID 兼容性修复，显示了社区在将 CodeWhale 集成到现有编辑器工作流中的强烈需求。
- **配置与可定制性**: 用户希望获得更强的配置能力，如 **可持久化的思考等级设置**、**更详细的开销分解** 和 **对特定模型订阅端点的支持**。
- **成本与透明度**: 对AI使用成本的关注度很高。从全新的 `/cost` 命令重设计到成本计算的分解和本地化（人民币），社区期望项目在费用方面做到公开、透明且准确。
- **平台兼容性**: Windows 平台的 CRLF 问题凸显了跨平台兼容性的重要性。任何对非标准环境（如 SSH/tmux）的处理都受到欢迎。

## 开发者关注点

- **文件编辑兼容性**: **CRLF 文件编辑失败** 是 Windows 开发者遇到的最直接、最影响使用的 Bug。建议所有 Windows 用户优先关注此问题的修复PR(#4942)。
- **系统交互阻塞**: 如何优雅地处理**前台Shell任务阻塞**下的新用户输入，是一个高频体验痛点。
- **成本透明度不足**: `/cost` 命令过于简单，无法反映真实开销和消费细节，用户在强烈呼吁一个更精细、更诚实的成本展示系统。
- **设置信息架构混乱**: 用户反馈设置项（如 Fleet、Models）的摆放位置不合理，存在“遗留”字段未清理的情况，影响了配置体验。
- **测试与代码质量**: 开发者（尤其是项目维护者）非常关注代码健康度，正在主动进行**死代码清理**并引入 **CI 门控**，这种行为值得社区贡献者学习。
- **文档与产品一致性**: 产品中指导用户使用的命令（`/rc`）在运行时中不存在，这是一个严重的文档-代码不一致问题，必须立即修复。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*