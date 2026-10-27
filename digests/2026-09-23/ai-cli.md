# AI CLI 工具社区动态日报 2026-09-23

> 生成时间: 2026-09-23 12:11 UTC | 覆盖工具: 9 个

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

**数据窗口：2026-09-23（过去 24 小时）｜ 覆盖 9 个工具**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**"前沿模型密集上线 + 平台稳定性欠账集中暴露"**的叠加期：同一天内 Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Pi 五个工具都接入了新一代模型（Claude Opus 5.5、GPT-6 Sol/Luna、Gemini 3.8 Flash），但几乎每个工具都在发布后立即收到模型不可用（404、灰显、静默改写）的反馈。与此同时，**Windows 平台与沙箱/路径校验成为跨工具的共性故障面**，Codex、Claude Code、Pi、Gemini CLI 的多数高赞 Issue 都落在这两类问题上。社区诉求则明显从"能不能用"转向**成本可见性、会话持久化与 Agent 行为可信度**。整体看，生态竞争已从模型接入速度转向**可靠性、可观测性与权限边界的工程成熟度**。

---

## 2. 各工具活跃度对比

> 计数均取自各工具日报所载"过去 24 小时更新"数据；"热点 Issue"指日报列出的重点条目数。

| 工具 | Release | 热点 Issue 数 | 其中最高热度 | PR 更新数 | 突出标签/焦点 |
|---|---|---|---|---|---|
| **Claude Code** | v2.1.280（Opus 5.5） | 10（含 50 条更新） | #53247：103 评论 / 35 👍 | 2 | Windows 崩溃、模型行为 |
| **OpenAI Codex** | rust-v0.156.1（热修复）+ 0.156.0 + 4 个预发布 | 10 | #25178：78 评论 / 29 👍 | 10 | Windows、沙箱回归 |
| **Gemini CLI** | v0.62.0-nightly（Gemini 3.8 Flash） | 10 | #22323（p1，13 评论） | 10 | Agent 可靠性、安全 |
| **GitHub Copilot CLI** | v1.0.89-0（预）+ v1.0.88 + v1.0.88-2 | 10 | #4742：12 评论 / 5 👍 | 2 | OOM、凭据链路 |
| **Kimi Code CLI** | 无 | 2（全量） | #2596：1 评论 | 2（全量） | `rm -rf` 数据安全 |
| **OpenCode** | 无 | 10 | #49433：51 评论 / 15 👍 | 10 | 计费/账号迁移 |
| **Pi** | v0.87.1（Opus 5.5 / GPT-6） | 10 | #5653：21 评论 | 10 | provider 解析、扩展 |
| **Qwen Code** | 5 个标签（v0.24.4 正式 + 预览/nightly/desktop/CUA） | 10 | #8835：7 评论 | 10 | CI、安全、MCP |
| **DeepSeek TUI (Codewhale)** | v0.10.0（更名） | 10 | #6011：9 评论 | 10 | 架构收敛、中文体验 |

**要点：**
- **发布密度最高**：Codex（1 热修复 + 1 正式 + 4 预发布）与 Qwen Code（5 个标签，含 Desktop 与 CUA 二进制）。
- **PR 活跃度分层**：Codex、Gemini CLI、OpenCode、Pi、Qwen Code 均为 10 条 PR 更新；Claude Code、Copilot CLI、Kimi 仅 2 条（后两者已注明数据不足以凑满 10 条）。
- **Kimi 数据量最小**（2 Issue + 2 PR），但单条严重度最高。
- **OpenCode 无新版本但社区最热**（#49433 达 51 评论），说明其痛点集中在服务端账号体系而非客户端迭代。

---

## 3. 共同关注的功能方向

### ① 成本与用量可见性（跨工具最一致诉求）
- **OpenCode**：#13003 TUI 显示 token 用量（14 评论 / 53 👍，当日第二高赞）；PR #50888 已在桌面端落地。
- **Claude Code**：#90756 要求把 auto-compact 窗口暴露在 usage ring 中——"显示了数字却藏起了杠杆"。
- **DeepSeek TUI**：#6011 token 计量 + 工具调用错误模式诊断。
- **Copilot CLI**：#2421 静默消耗 premium 请求（8 评论 / 19 👍）、#2827 限流 UI 不足。

### ② 会话持久化与项目/上下文身份
- **OpenCode**：#16077 持久化会话记忆、#48497 长期记忆系统（/teach、/recall…）。
- **Claude Code**：#79215（macOS）/ #88903（Windows）"重命名或移动项目文件夹后保留会话"，且已被多次 not-planned 关闭后重新提出。
- **Pi**：fork 迁移（#9950）、冷恢复回放（#7724）、元数据成 leaf 导致截断（#9930）。
- **Gemini CLI**：#18836 用持久化文件任务跟踪替代 WriteToDo，直指"上下文腐化"。

### ③ Agent 行为可信度 / "假装成功"
- **Gemini CLI**：subagent 达 MAX_TURNS 却上报 GOAL 成功（#22323，p1）。
- **Claude Code**：一系列 `area:model` Issue——幻觉工具调用（#77339）、叙述先于工具执行（#95319）、静默省略（#85255）、草稿泄露（#85256）。
- **OpenCode**：subagent 卡死且无超时重试（#11865），整个会话永久挂起。
- **Pi**：#8810 / #9884 扩展注册 provider 的默认模型被间歇性忽略。

### ④ 权限与破坏性操作的安全边界
- **Kimi Code**：#2596 yolo 模式下 Agent 越出工作区执行 `rm -rf`，删除用户会话数据——本批最严重的安全事件。
- **Gemini CLI**：#29458 默认阻止粘贴文本中 `@path` 展开（防 `cat @id_rsa`）、#26525 Auto Memory 脱敏发生在发送之后、#22672 劝阻 `git reset --force`。
- **Copilot CLI**：#4844 `--yolo` 被预认证逻辑吞掉、#4521 沙箱无法禁用、#3877 会话启动自动 allow-all。
- **OpenCode**：#17076 多文件 apply_patch 审批只显示第一个 diff（8 评论 / 28 👍）——既有体验问题也是安全盲区。

### ⑤ Windows 平台稳定性（跨工具共性故障面）
- **Codex**：20 条热门 Issue 中约 13 条带 `windows-os`（Computer Use 截图 #25178、窗口最大化溢出 #25826、发送按钮禁用 #45307、Core 安装阻断审批 #47383）。
- **Claude Code**：#53247 崩溃后 Silo/Job Object 残留只能注销恢复（103 评论 / 35 👍）、#91198 ConPTY 尺寸过期。
- **Pi**：#9361 Windows 下 `shellPath` 被非确定性忽略并回退到 WSL bash。
- **Gemini CLI**：#29247 Windows `isWithinRoot` 大小写敏感导致合法路径被拒。

### ⑥ 沙箱与路径校验回归（Codex 与 Gemini CLI 尤为集中）
- **Codex**：#47345（mountinfo path is not absolute）、#46110（snapd nsfs 挂载根被拒）、#46388（0.155.0 提权沙箱回归）。
- **Gemini CLI**：#29249 `get_internal_docs` 路径守卫前缀绕过、#29446 MCP 配置缺失被当作启用。

### ⑦ 多模型/Provider 可插拔与一致性
- **Copilot CLI**：#2995 DeepSeek API（9 👍）、#3997 `gpt-5.3-codex` 不可用。
- **Pi**：v0.87.1 支持 Opus 5.5 / GPT-6 Sol / GPT-6 Luna，默认 Grok 4.7；PR #9934 新增 Yolo-Auto provider 与运行时模型自动发现。
- **Gemini CLI**：#29420 显式 `--model` 被静默改写。
- **Qwen Code**：#9951 支持开源 Mem0 协议 provider 及可配置 baseUrl。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 模型能力 + 桌面/TUI 工作流，插件与技能体系 | 通用开发者，企业部署（org-plugin） | 模型层自研且快速迭代（Opus 5.5 默认、1M 上下文）；平台分发与更新检查滞后 |
| **OpenAI Codex** | 多智能体编排 + 全屏 TUI + 语音/图像多模态 | 深度自动化用户 | 内部重点为 multi-agent v2 控制面（`AgentControl` 统一路由）；Rust 核心，发布节奏最密 |
| **Gemini CLI** | Agent 可靠性 + 安全默认值 + AST 感知工具 | 关注效率和安全的开发者 | 安全类 PR 单日占比显著（OAuth、粘贴路径、取消信号、原子写入）；nightly → preview → stable 分层但存在 cherry-pick 冲突 |
| **GitHub Copilot CLI** | GitHub 生态集成 + 托管 Connector 授权 | GitHub 平台用户、企业 | Node.js 实现（OOM 为主要短板）；凭据/MCP 链路深度绑定 GitHub |
| **Kimi Code CLI** | 轻量 CLI + Web 端输入体验 | 中文用户为主 | 无版本发布，重心在 IME/CJK 输入与第三方平台兼容（OpenCode Go） |
| **OpenCode** | 订阅付费 + 多平台客户端（TUI/Desktop/serve） | 付费开发者 | 正经历 Console 账号迁移；PR 覆盖语音、模型分层路由、PTY 交互式执行 |
| **Pi** | 扩展系统 + Provider 生态 + 配置 Schema | 扩展作者、多 provider 用户 | 走"扩展驱动"路线，同时踩到依赖重复（`pi-ai` 双副本）与 provider 解析竞态 |
| **Qwen Code** | CI/发布基建 + Desktop/CUA + 多语言 SDK | 企业贡献者、桌面/自动化场景 | 唯一提供 CUA Driver 预编译二进制（三平台签名策略不同）；Java SDK 独立推进 |
| **DeepSeek TUI / Codewhale** | 单仓库一体化 TUI，Fleet 子 Agent 管理 | 中文用户、Rust 生态 | v0.10.0 更名并弃用旧 npm 包；当前主线是架构收敛（拆巨型文件、合并 MCP 双栈） |

**核心差异线：**
- **模型自研程度**：Claude Code、Codex、Gemini CLI 由模型厂商自营；Pi、Copilot CLI、OpenCode 走多 provider 聚合。
- **架构语言**：Codex / Pi / DeepSeek TUI 为 Rust，Copilot CLI 为 Node.js，Gemini CLI / OpenCode 生态混合。
- **平台野心**：OpenCode、Qwen Code 明确覆盖 TUI + Desktop + serve/Web；Pi 走 ACP 集成 Zed/JetBrains/VSCode/Neovim。

---

## 5. 社区热度与成熟度

**社区热度（按最高互动量级）**
1. **Claude Code**：#53247 单条 103 评论 + 35 👍，是全部工具中互动最高的单个 Issue。
2. **OpenAI Codex**：#25178 78 评论 / 29 👍 + 高密度 Windows 反馈，Issue 讨论规模最大。
3. **OpenCode**：#49433 51 评论 / 15 👍，且 #23153 达 52 👍（支付类高赞）。
4. **Pi**：#7128 13 👍、#5653 21 评论，扩展生态讨论深入。

**成熟度分层**

| 分层 | 工具 | 判断依据 |
|---|---|---|
| **高度活跃 + 快速迭代** | Codex、Gemini CLI、Qwen Code、Pi、OpenCode | PR 均 10 条；Codex/Qwen 单日多点发布 |
| **活跃但以修复为主** | Claude Code、Copilot CLI | 有版本发布但 PR 仅 2 条，Issue 以长期痛点为主 |
| **数据稀疏/低活跃** | Kimi Code CLI | 无发布，2 Issue + 2 PR，样本不足以归纳趋势 |

**成熟度信号：**
- **相对成熟**：Codex（多智能体控制面已进入重构收敛阶段）、Pi（已发布配置 JSON Schema、manifest 发现对齐，工程规范在建立）。
- **处于重构/迁移阵痛期**：OpenCode（Console 账号迁移导致付费订阅失效、账号丢失）、DeepSeek TUI（v0.10.0 更名 + MCP 双栈合并 + 配置双权威）、Qwen Code（发布链路与 CI 红灯频发）。
- **回归测试缺口明显**：Codex（#46388、#47345、#47383 均明确"上一版本正常、新版本失败"）、Pi（#9843 0.85.1→0.86.1 回归），说明发布前平台特定路径校验不足。

---

## 6. 值得关注的趋势信号

### 信号一：模型发布速度已超过分发与验证能力
同一天五家工具接入新模型，随之而来的是 **Codex `gpt-6-sol` 404（#47412）**、**Claude Code macOS 12 锁在 2.1.260 且 Opus 5.5 灰显（#96105）**、**Gemini CLI 显式模型 ID 被静默改写（#29420）**。
> **对开发者**：新模型上线首日不要立即切换生产配置；显式 pin 模型 ID 的行为本身可能被 rollout 覆盖。

### 信号二："Agent 声称完成"正在成为一等可信度问题
Gemini CLI 的 **subagent 达上限却报 success（#22323）**、Claude Code 的 **叙述先于工具调用（#95319）**、OpenCode 的 **subagent 卡死无超时（#11865）**——三个工具独立报告同一类问题。
> **对开发者**：不要用助手文本作为自动化流程的完成信号；应在工具层校验副作用是否真实发生。

### 信号三：成本可见性从"加分项"变成"基础诉求"
OpenCode #13003（53 👍）、Claude Code #90756、DeepSeek TUI #6011 指向同一需求；Copilot CLI #2421 的 19 👍 则揭示了**静默消耗 premium 请求**这类直接经济损失。
> **对开发者**：选型时应把 token/额度可见性纳入评估，而非仅看模型能力。

### 信号四：破坏性操作的安全边界成为短板
Kimi Code **`rm -rf` 删除工作区外用户数据（#2596）**、Claude Code #95319 的下游影响、OpenCode #17076 的审批 diff 不完整——共同指向 **yolo/自动批准模式下的路径白名单与审批信息完整性问题**。
> **对开发者**：在宽松权限模式下应假设 Agent 缺少目标路径归属校验，需在外部加一层审计或备份。

### 信号五：Windows 与沙箱路径校验是跨工具的系统性技术债
Codex（13/20 条 windows-os）、Claude Code（#53247 最高热）、Pi（#9361）、Gemini CLI（#29247）四家同时暴露。
> **对开发者**：跨平台团队应优先在 Windows 与容器化沙箱环境中做回归验证；路径大小写、挂载信息解析、进程/Silo 生命周期是共性坑点。

### 信号六：扩展/插件体系正在成为生态竞争的第二战场
Pi 的扩展重载时序（#7948、#9222）、Claude Code 的 org-plugin 默认安装失效（#88248）、Copilot CLI 插件市场自动更新（#3331）、DeepSeek TUI 的可插拔记忆后端（#6050）——**扩展系统的成熟度直接影响企业采纳**。
> **对技术决策者**：评估工具时，插件/扩展的加载可靠性与配置生效一致性（如 Copilot CLI #4521 沙箱配置与实际状态不符）比功能数量更值得关注。

### 信号七：CJK 输入体验是被主流忽视的稳定需求
Kimi Code PR #2667（IME 组字期间误提交回车）、DeepSeek TUI #2323（中文输入法未适配）、Claude Code #80053（英文中混入中文）——**中文/多语言场景的输入与输出细节持续产生噪音**。
> **对中文团队**：这是选型时的实际摩擦点，且往往修复周期较长。

---

*本报告仅基于 2026-09-23 所提供各工具的 GitHub 日报数据整理；所有 Issue/PR 编号、评论数、点赞数与版本号均取自原始材料，未作外部核实或补充。Kimi Code CLI 当日样本量较小（2 Issue + 2 PR），其相关结论的置信度低于其他工具。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：github.com/anthropics/skills，截止 2026-09-23。注：本次提供的 PR 数据中评论数均缺失（undefined），故 PR 排序以"创建/更新时间活跃度 + 社区相关性"为参考；Issues 保留评论数。

---

## 1. 热门 Skills 排行

> 说明：PR 评论数字段缺失，以下按更新时间与议题热度综合选取；括号内状态均为 OPEN（未合并）。

- **#525 Add pyxel skill for retro game development** — 作者 kitao
  功能：用 Python 创建、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查。
  热点：创建于 2026-03 但更新至 2026-09-22，长期活跃、迭代持续，属"长寿 PR"。
  状态：OPEN | https://github.com/anthropics/skills/pull/525

- **#822 feat: add AWT (AI Watch Tester)** — 作者 ksgisang
  功能：AI 驱动的 E2E 测试 Skill，赋予 Claude 视觉与浏览器控制能力来跑端到端测试。
  热点：测试自动化方向代表，跨 2026-03 至 2026-09 长期更新。
  状态：OPEN | https://github.com/anthropics/skills/pull/822

- **#1771 proofcore-contract-auditor（智能合约公证）** — 作者 ProofCore-Protocol
  功能：对 Solidity/Rust 合约做静态分析，并把审计证明锚定到 TON 区块链。
  热点：Web3 + 加密审计这一全新方向，创建于 2026-09-15，属最新提案。
  状态：OPEN | https://github.com/anthropics/skills/pull/1771

- **#1703 Add md2video-audio skill** — 作者 70v-Yoyo
  功能：将 Markdown 文档直接编译为带类人配音的 MP4 视频。
  热点：文档→多媒体内容生成，成本为零，属内容生产自动化方向。
  状态：OPEN | https://github.com/anthropics/skills/pull/1703

- **#1615 Add scnet-hpc skill** — 作者 lql341
  功能：通过 profile-based SSH 与 Slurm 工作流操作 SCNet HPC 集群。
  热点：把 Claude Code 接入 HPC 科研计算环境。
  状态：OPEN | https://github.com/anthropics/skills/pull/1615

- **#723 feat: add testing-patterns skill** — 作者 4444J99
  功能：覆盖完整测试栈——测试哲学（Testing Trophy）、单元测试（AAA 模式）、测试命名等。
  热点：通用测试方法论 Skill，跨 2026-03 至 2026-09 活跃更新。
  状态：OPEN | https://github.com/anthropics/skills/pull/723

- **#83 skill-quality-analyzer + skill-security-analyzer** — 作者 eovidiu
  功能：两个元技能，从五个维度对 Skills 做质量与安全分析。
  热点：Skill 自身的质量/安全治理，属"元生态"方向。
  状态：OPEN | https://github.com/anthropics/skills/pull/83

- **#1776 Add blast-radius skill** — 作者 kishormorol
  功能：批量/破坏性写入前的检查清单（删用户、撤销权限、删行、群发邮件等）。
  热点：面向"高危操作"的安全护栏，最新提案（2026-09-17）。
  状态：OPEN | https://github.com/anthropics/skills/pull/1776

---

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界（当前最热）**
  Issue #492（43 评论）：社区 Skills 以 `anthropic/` 命名空间分发，冒充官方技能，构成信任边界滥用。
  https://github.com/anthropics/skills/issues/492

- **技能共享与协作**
  Issue #228（16 评论，👍8）：希望在 Claude.ai 内实现组织级 Skill 共享，而非靠手动下载 .skill 文件再上传。
  https://github.com/anthropics/skills/issues/228

- **Skill 评估/触发机制失效（工具质量）**
  Issue #556（12 评论，👍7）：`run_eval.py` 中 `claude -p` 从不触发 skills/commands，全部查询 0% 触发率。
  https://github.com/anthropics/skills/issues/556

- **Agent 状态压缩 / 上下文管理**
  Issue #1329（10 评论）：提案 `compact-memory`，用符号化记法压缩长时运行 Agent 的状态。
  https://github.com/anthropics/skills/issues/1329

- **Skill 编写规范（官方 skill-creator 质量问题）**
  Issue #202（已关闭）：skill-creator 更像开发者文档而非可执行 Skill，冗长教学语气消耗 token。
  https://github.com/anthropics/skills/issues/202

- **插件内容重复**
  Issue #189（6 评论，👍9，高赞）：`document-skills` 与 `example-skills` 安装内容完全相同，导致 Skill 重复占用上下文。
  https://github.com/anthropics/skills/issues/189

- **Agent 治理 / 推理质量把关**
  Issue #412（agent-governance，策略执行、威胁检测、审计追踪）与 Issue #1385（推理质量门控：任务前校准→对抗审查→交付验证）。
  https://github.com/anthropics/skills/issues/412 ｜ https://github.com/anthropics/skills/issues/1385

- **上下文窗口消耗**
  Issue #1487：`claude-api` skill 单次工具调用急切注入约 156k tokens，直接耗尽上下文窗口。
  https://github.com/anthropics/skills/issues/1487

- **平台集成**
  Issue #29（AWS Bedrock 支持）、Issue #16（把 Skills 暴露为 MCP）、Issue #1175（SharePoint Online 文档的安全与上下文顾虑）。
  https://github.com/anthropics/skills/issues/29 ｜ https://github.com/anthropics/skills/issues/16 ｜ https://github.com/anthropics/skills/issues/1175

**趋势小结**：需求重心已从"新增功能型 Skill"转向 **质量、安全、上下文效率与共享协作**——安全问题（命名空间滥用）、评估机制失效、token 膨胀成为最集中的痛点。

---

## 3. 高潜力待合并 Skills

以下 PR 虽无评论数据，但更新频繁（近期仍在迭代），落地概率较高：

- **#1742 fix(mcp-builder): 支持 mcp>=2 streamable_http_client 与自定义 headers**（作者 Kuldeeep18）
  修复 #1668，解决 mcp>=2.0.0 中 API 重命名导致的兼容问题。更新至 2026-09-19。
  https://github.com/anthropics/skills/pull/1742

- **#1769 Fix skill-creator trigger detection reporting 0% recall**（作者 ChiFungHillmanChan）
  修复 #1721：skill-creator 触发评估对所有 skill 报 `precision=100% recall=0%`。更新至 2026-09-15。
  https://github.com/anthropics/skills/pull/1769

- **#1298 fix(skill-creator): 隔离 trigger evals，处理 Windows 与运行时故障**（作者 MartinCajiao）
  修复触发评估误报/无效评分、Windows 上 subprocess pipe 的 select() 失败等。更新至 2026-09-16。
  https://github.com/anthropics/skills/pull/1298

- **#1792 fix(docx): 将 LibreOffice 超时报为错误并验证输出**（作者 TINGyu123644）
  最新（2026-09-23）更新，修正超时被误报为成功的问题。
  https://github.com/anthropics/skills/pull/1792

- **#1790 fix(docx): comment.py 在缺失时创建 document.xml.rels**（作者 TINGyu123644）
  与 #1792 同一作者，成套 docx 修复。
  https://github.com/anthropics/skills/pull/1790

**规律**：当前高活跃 PR 集中在 **修复类提交（fix）**，尤其是 `skill-creator`、`docx`、`mcp-builder` 三大官方 Skill 的稳定性问题。

---

## 4. Skills 生态洞察

**一句话总结**：当前社区最集中的诉求已从"扩展 Skill 数量"转向"**把官方工具链修稳、把安全与信任边界管住、把上下文成本压下来**"——修复类 PR 与安全/共享/评估机制类 Issue 构成了生态主旋律。

---

# Claude Code 社区动态日报 — 2026-09-23

## 1. 今日速览

今天最重要的动态是 **v2.1.280 发布**，引入 Claude Opus 5.5（`claude-opus-5-5`）并设为默认 Opus 模型，支持 1M 上下文，定价 $4/$20 per Mtok。社区侧，Windows 平台稳定性问题持续发酵——Issue #53247（Claude Desktop 在 Windows 上崩溃后无法启动）累计 103 条评论、35 个 👍，是今日最热议题。同时，模型行为质量问题（幻觉工具调用、相对时间虚构、部分请求静默省略）在一批 `area:model` Issue 中被集中讨论。

---

## 2. 版本发布

### v2.1.280

- **新增 Claude Opus 5.5（`claude-opus-5-5`）**，现为默认 Opus 模型：1M 上下文窗口，价格 $4/$20 per Mtok，缓存读取 $0.20/Mtok。
- **全屏模式鼠标支持扩展**：鼠标滚轮可滚动 `/skills` 列表；`/plugin` 中技能的 state 选项可点击。

该版本直接关联今天的多个 Issue——例如 #96105 报告 macOS 12 桌面端模型选择器中 Opus 5.5 呈灰色不可用，且该应用被锁在 Claude Code 2.1.260。

---

## 3. 社区热点 Issues

> 今日过去 24 小时共有 50 条 Issue 更新，以下为最值得关注的 10 条。

1. **[#53247](https://github.com/anthropics/claude-code/issues/53247) [OPEN] Windows 桌面端崩溃后无法启动（Silo / Job Object 残留）**
   平台: windows | 评论 **103** | 👍 **35**
   应用崩溃后残留 Silo / Job Object（AppModel-Runtime EventID 215/208，HRESULT 0x80070020），只能注销或重启恢复。这是评论量与点赞数双高的长期未解问题，说明 Windows 用户受影响面广且缺少可行的进程内恢复手段。

2. **[#96105](https://github.com/anthropics/claude-code/issues/96105) [OPEN] macOS 12 桌面端卡在 2.1.260，Opus 5.5 灰色不可用**
   平台: macos | 评论 3
   与今日发布直接相关：应用内更新检查显示"已是最新"，但实际停留在 2.1.260；同时 2.1.280 将本应用的 SDK wrapper（0.3.260）标为已测试，而 `stable`（2.1.267）并未标注。新模型发布与旧平台分发的脱节，是升级类高优先问题。

3. **[#91198](https://github.com/anthropics/claude-code/issues/91198) [OPEN] [has repro] Windows Agent fleet 会话渲染为过期 ConPTY 尺寸**
   平台: windows | 评论 2
   在 `claude agents` FleetView 启动时或 worker spawn 后，会话以过期 ConPTY 尺寸渲染，直到真实窗口 resize 才恢复。带复现步骤，涉及 TUI / agent-view，影响多窗口并行工作流。

4. **[#88248](https://github.com/anthropics/claude-code/issues/88248) [OPEN] 组织级"默认安装"插件在全新 Web 会话中缺失**
   平台: web | 评论 2 | 👍 **2**
    Org-plugin "Installed by Default" 在 Claude Code on the web 的新会话中不生效，疑似与 #63028 相关。对企业部署而言，这直接影响组织策略的可靠性。

5. **[#77339](https://github.com/anthropics/claude-code/issues/77339) [CLOSED] [MODEL] Opus 4.8 幻觉工具调用、用户消息与系统提示**
   平台: windows | 评论 **11** | 👍 3
   模型层最受关注的报告，已关闭。幻觉范围覆盖工具调用、用户消息和系统提示三类，是新模型上线期开发者信任度的重要观察点。

6. **[#95319](https://github.com/anthropics/claude-code/issues/95319) [OPEN] Agent 在工具调用完成前就宣称动作已完成**
   评论 2
   助手文本与工具调用在同一 turn 生成，导致叙述先于实际执行——以"Done."开头描述尚未发生的工作。报告者强调这不同于幻觉，而是执行顺序问题，对依赖完成信号的自动化流程影响较大。

7. **[#85255](https://github.com/anthropics/claude-code/issues/85255) [OPEN] [MODEL] 静默省略多部分请求的部分内容，却呈现为完整响应**
   评论 2
   与 #85253（推断内容被当作观测事实）、#85256（私有草稿 deliberation 泄露到公开 GitHub 文本）同属一位作者提出的模型行为系列，集中质疑输出完整性与可信度。

8. **[#79731](https://github.com/anthropics/claude-code/issues/79731) [CLOSED] [MODEL] 同一会话内事件被描述为"yesterday"——相对时间由 turn 数虚构**
   评论 5 | 👍 1
   系统提示中绝对日期正确，但模型仍虚构相对时间引用。已关闭，但对长会话中的时间推理仍有参考价值。

9. **[#80053](https://github.com/anthropics/claude-code/issues/80053) [OPEN] 英文文本中混入中文字符**
   平台: win32 | 评论 3
   示例："The debugging路 found three real mechanisms along the way"。与 #69792（macOS，已关闭）同类，是跨平台仍存续的输出编码/混语问题。

10. **[#79215](https://github.com/anthropics/claude-code/issues/79215) [CLOSED] [FEATURE] 会话应跟随重命名/移动后的项目文件夹（持久项目身份）**
    平台: macos | 评论 2 | 👍 **8**
    点赞数为本批最高，指向的是此前 #55831、#52494 相继被 not-planned 关闭的老需求。今天 #88903（Windows 桌面端同类需求）亦更新，说明"项目文件夹重命名/移动后保留会话"是持续未被满足的跨平台诉求。

> 其他值得留意：#90624（桌面端 MRU 顺序切换会话）、#90756（用量环中暴露 auto-compact 窗口）、#89910（焦点在 pane 间移动的快捷键）、#96339/#96340（计费缺陷、Windows 语音听写快捷键，均被标为 invalid）。

---

## 4. 重要 PR 进展

> 今日过去 24 小时仅 2 条 PR 更新。按要求列出值得关注项，并如实说明数量限制。

1. **[#79150](https://github.com/anthropics/claude-code/pull/79150) [OPEN] docs: 使 code-review README 与当前基于验证的命令对齐**
   作者: Codeturion | 创建 2026-07-19 | 更新 2026-09-23 | 👍 0
   现有 README 描述的是一条已不再实现的流水线：git blame/history agent、0-100 置信度评分（阈值 80）、以及要求用户编辑"Filter out any..."的 Configuration 章节。对使用 code-review 的开发者而言，这是文档与实现脱节导致的误导性配置，属高价值修复。

2. **[#95409](https://github.com/anthropics/claude-code/pull/95409) [CLOSED] mods/agents-md: AGENTS.md 项目指令 mod**
   作者: poteat | 创建 2026-09-18 | 更新 2026-09-22 | 👍 0
   在 `mods/agents-md` 下新增 `agents-md` mod 源码，采用与 `sec-default`、`diff`、`telemetry` 相同的布局：manifest、`hooks/` 模块、用于 `claude plugin test` 的 `tests/` 及 README。该 mod 以编辑器读取 AGENTS.md 的方式读取项目指令，代表了以 mod 方式扩展项目级指令的路线。**注意：该 PR 已关闭，更新时间为 2026-09-22。**

---

## 5. 功能需求趋势

从今日更新的 Issues 中可提炼出以下集中方向：

- **桌面端交互与快捷键**：#89910 请求在 pane（chat / terminal / diff / browser）间移动焦点的快捷键，且不切换可见性；#90624 请求按 MRU 顺序循环会话或提供"最后两个会话"切换快捷键；#96340 请求 Windows 桌面端语音听写快捷键。桌面端键鼠工作流仍是需求密集区。
- **项目身份持久化**：#79215（macOS）与 #88903（Windows）共同指向"重命名或移动项目文件夹后保留既有会话"，且已多次被 not-planned 关闭后重新提出，说明官方立场与用户诉求存在持续张力。
- **用量与成本可见性**：#90756 请求把 auto-compact 窗口暴露在已显示上下文用量的 usage ring 中，指出"桌面端显示了数字却藏起了杠杆"。
- **模型行为可信度**：#95253 / #85255 / #85256 / #95319 构成一组关于"输出呈现为完整、事实、已完成，但实际为推断、省略、未执行或泄露草稿"的模型行为报告。
- **插件与组织策略**：#88248 反映 org-plugin 默认安装在 Web 会话中失效，插件体系在企业场景下的可靠性待补。
- **平台渲染稳定性**：#91198（ConPTY 尺寸）与 #53247（Windows 启动失败）指向 Windows 平台的多窗口/进程生命周期问题。

---

## 6. 开发者关注点

- **Windows 是当前最痛平台**：#53247 以 103 评论 / 35 👍 成为绝对热点，且只能靠注销或重启恢复；#91198 带复现步骤；#77339、#80053 均为 win32/Windows 环境。Windows 上的启动可靠性与终端渲染是首要痛点。
- **新模型发布与旧平台分发的错位**：Opus 5.5 在 v2.1.280 上线，但 #96105 显示 macOS 12 桌面端仍锁在 2.1.260 且 Opus 5.5 灰显。发布节奏与下游分发/更新检查的一致性需要关注。
- **模型输出的"完成感"不可信**：#95319 描述的"叙述先于工具调用"直接影响以助手文本作为完成信号的下游自动化；配合 #85253/#85255/#85256，构成对输出完整性与真实性的集中质疑。
- **相对时间与语言混入等输出细节**：#79731（虚构"yesterday"）虽已关闭，#80053（英文中混入中文）仍开启，两者都是长会话/多语言场景下的持续噪音。
- **计费与支持链路**：#96339 报告 $600 扣费后账户仍为 Free、credits 未生效，并称 Fin AI 无人工升级路径。该 Issue 被标为 invalid，但反映的是计费异常时可获得的升级通道问题。
- **文档滞后于实现**：#79150 显示 code-review README 仍描述已废弃的置信度评分与配置流程，是开发者按文档配置时容易踩坑的典型。

---

*数据来源：github.com/anthropics/claude-code，统计窗口为过去 24 小时（截至 2026-09-23）。所有链接、编号、标签与指标均取自所提供的原始数据。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-23）

## 今日速览

今天 Codex 发布了 `rust-v0.156.1` 热修复版本，模型选择器新增 GPT-6 Sol 与 GPT-6 Luna，并把限流切换提示默认推荐为 GPT-6 Luna；但新模型随即引发 404 访问问题（Issue #47412）。Windows 平台问题集中爆发，占据本期热门 Issue 的绝大多数，涵盖 Computer Use 截图失败、沙箱初始化回归、桌面端发送按钮禁用等。PR 侧则以多智能体（multi-agent v2）控制面重构和图像生成、环境设置等基础设施改动为主。

---

## 版本发布

**rust-v0.156.1（热修复）**
- 模型选择器支持选择 GPT-6 Sol 或 GPT-6 Luna，限流切换提示现在推荐 GPT-6 Luna（#47405）
- 完整变更：https://github.com/openai/codex/compare/rust-v0.156.0...rust-v0.156.1

**rust-v0.156.0**
- 新增可选全屏 UI（通过 `/tui` 为下次启动启用），支持会话记录搜索、鼠标选择、右键复制（#46732、#46734、#46883、#46895）
- 语音对话默认启用，支持 F8 切换、`/voice settings` 选择器和内置音频

**预发布版本**：`rust-v0.157.0-alpha.11`、`rust-v0.157.0-alpha.9`、`rust-v0.157.0-alpha.8`、`rust-v0.155.0-alpha.16.3` 均已发布（仅版本号，无详细说明）。

---

## 社区热点 Issues

1. **#25178 Windows Computer Use 截图失败**（78 评论，👍29）
   Windows 10 22H2 上调用 `SetIsBorderRequired` 时，任何请求截图的 `get_window_state` 调用在捕获前即失败，而列窗口、读无障碍文本、发送键盘输入均正常。
   https://github.com/openai/codex/issues/25178

2. **#27117 Windows 独立更新继承 PSModulePath 导致 Get-FileHash 失败**（35 评论，👍27）
   即使用户在 PowerShell 7（`pwsh`）中启动 Codex，更新动作仍调用 `powershell.exe`，子进程继承的 `PSModulePath` 破坏校验流程。影响 Windows 更新链路可靠性。
   https://github.com/openai/codex/issues/27117

3. **#25826 Windows 桌面端最大化窗口溢出到相邻显示器**（30 评论，👍20）
   多显示器场景下最大化窗口跨越屏幕边界，属高频可见的 UI 缺陷。
   https://github.com/openai/codex/issues/25826

4. **#31433 有效 rollout 文件未入索引且缺乏重建修复手段**（21 评论）
   状态数据库遗漏合法的 rollout 文件，官方未提供受支持的重新索引方式。涉及数据完整性，值得重视。
   https://github.com/openai/codex/issues/31433

5. **#45307 Windows 桌面端首轮成功后发送按钮禁用**（19 评论，👍3）
   首次成功对话后发送按钮变为禁用状态，直接阻断会话继续，影响核心使用流程。
   https://github.com/openai/codex/issues/45307

6. **#47383 Windows 10 桌面端 Core 安装失败并阻断审批模式**（18 评论）
   版本 26.917.6896.0 上注册的 Core 安装失败，进而阻断 approval modes，属新近回归。
   https://github.com/openai/codex/issues/47383

7. **#47345 Linux 沙箱报 "mountinfo path is not absolute"**（14 评论，👍13）
   ChatGPT 更新后 Ubuntu 24.04.5 上 Linux 沙箱直接失败，与新版本引入的挂载路径校验相关。
   https://github.com/openai/codex/issues/47345

8. **#46110 Linux 沙箱拒绝 snapd 的合法 nsfs 挂载根**（12 评论）
   `0.155.0-alpha.15` 在原生 Ubuntu 上因 `/proc/self/mountinfo` 含 snapd 创建的 nsfs 条目而拒绝执行受限命令。与 #47345 同属沙箱路径解析问题，说明该类回归影响面较广。
   https://github.com/openai/codex/issues/46110

9. **#47412 新模型 gpt-6-sol 返回 404**（9 评论，👍2，2026-09-23 新建）
   请求 `chatgpt.com/backend-api/codex/responses` 时提示模型不存在或无访问权限，与今日 0.156.1 上线 GPT-6 Sol/Luna 直接相关，是发布后的即时反馈。
   https://github.com/openai/codex/issues/47412

10. **#46388 CLI 0.155.0 提权沙箱初始化回归**（10 评论，👍3）
    运行期路径校验失败导致提权沙箱初始化失败，0.154.0 正常。属明确版本回归，便于定位。
    https://github.com/openai/codex/issues/46388

---

## 重要 PR 进展

1. **#47540 新增禁用多智能体 v2 直接消息的选项**（CLOSED）
   新增 `features.multi_agent_v2.disable_direct_message`（默认 false），启用后省略 `send_message` 与 `followup_task`，保留派生与自动化能力。
   https://github.com/openai/codex/pull/47540

2. **#47536 通过 `AgentControl` 路由 agent 查找与 V2 上下文**（CLOSED）
   使 V2 工具与模型上下文即使在会话本地运行时无注册表条目时，也使用控制器的 agent 树。
   https://github.com/openai/codex/pull/47536

3. **#47520 会话 agent 操作统一走 `AgentControl`**（CLOSED）
   在 session services 中保存 `Arc<dyn AgentControl>`，将 agent 工具、轮次准入、用量计费、完成通知与共享设置统一路由。
   https://github.com/openai/codex/pull/47520

4. **#47529 为 unified exec 启动失败发出命令生命周期事件**（CLOSED）
   当 unified exec 无法创建进程时补发 start/end 事件，避免客户端收不到命令失败通知。
   https://github.com/openai/codex/pull/47529

5. **#47539 中断式一次性命令启动失败持久化的回归测试**（CLOSED）
   构造工作目录缺失导致 `exec_command` 失败、暂停完成并在释放前中断轮次的场景，验证状态持久化。
   https://github.com/openai/codex/pull/47539

6. **#47484 图像生成新增显式背景控制**（CLOSED）
   为 `image_gen.imagegen` 生成与编辑增加布尔参数 `transparent_background`，true 映射为 transparent，false 或省略映射为 opaque。
   https://github.com/openai/codex/pull/47484

7. **#47458 并行化指令刷新与工具准备**（CLOSED）
   将 `AGENTS.md` 与线程指令刷新，与能力发现、MCP 初始化、工具构建并发执行，并用 Box 避免栈占用。
   https://github.com/openai/codex/pull/47458

8. **#47447 抽出 `codex-websocket-auth` crate**（CLOSED）
   将 WebSocket 认证参数、设置、凭证加载与升级授权迁移至共享 crate（使用 `http` 类型），并同步更新 app server。
   https://github.com/openai/codex/pull/47447

9. **#47435 允许在活动轮次中更新环境选择**（CLOSED）
   在 `TurnSettingsUpdate` 中新增 `environments`，可替换后续步骤的选择而不影响未来轮次。
   https://github.com/openai/codex/pull/47435

10. **#31334 对齐 skill creator 路径与受支持位置**（CLOSED）
    在 `skill-creator` 指令中记录受支持的技能保存位置：仓库/项目/工作区技能指向 `.agents/skills`，用户技能指向 `$HOME/.agents/skills`，管理员技能指向 `/etc/codex/sk...`。
    https://github.com/openai/codex/pull/31334

---

## 功能需求趋势

- **新模型支持与切换体验**：GPT-6 Sol / Luna 进入模型选择器并成为限流切换推荐项（#47405），但随即出现 `gpt-6-sol` 404（#47412）与自定义模型相关的限流显示问题（#47344），表明模型矩阵扩展正在带来可见的发布期问题。
- **多智能体架构演进**：多份 PR 围绕 `AgentControl` 统一路由、direct message 开关、V2 上下文等展开，说明多智能体 v2 是当前内部重点方向。
- **终端交互与 UI 能力**：0.156.0 引入全屏 TUI、会话记录搜索、鼠标选择与右键复制，配合 #47441 等文本样式微调，显示 TUI 体验是持续投入方向。
- **语音与多模态**：语音对话默认启用并配套 F8 切换与 `/voice settings`，图像生成新增透明背景控制（#47484）。
- **沙箱与安全边界**：Linux 沙箱 DNS 代理（#31644）、nsfs 挂载路径（#46110）、Windows 提权沙箱（#46388）等议题密集，反映跨平台隔离机制仍在快速迭代。

---

## 开发者关注点

- **Windows 体验是当前最大痛点**：本期 20 条热门 Issue 中约 13 条带 `windows-os` 标签，覆盖 Computer Use 截图、窗口最大化、发送按钮禁用、Core 安装失败、会话状态阻塞、浏览器标签崩溃、沙箱回归等。其中多条为近期版本回归，建议 Windows 用户谨慎升级或关注后续修复。
- **版本回归问题突出**：多个 Issue 明确指出"上一版本正常、新版本失败"（#46388、#47345、#47383），提示发布前回归测试在平台特定路径校验上存在缺口。
- **状态与数据完整性**：rollout 文件未入索引（#31433）、WSL 环境破坏 `state_5.sqlite` 迁移（#23841）、现有会话发送被 `loading-local-config` 阻塞（#44342），本地状态管理稳定性是高频诉求。
- **模型访问与限流一致性**：新模型 404（#47412）与"0% 使用率下发送按钮仍置灰"（#47344）显示模型可用性与配额展示需保持一致。
- **配置与工具调用细节**：`AGENTS.md` 在 `CODEX_HOME` 等于项目根时被重复加载（#34193）、`request_user_input_async` 问题卡被自动关闭导致无法作答（#43803）、内置图像生成未触发 `PreToolUse` 钩子（#20616），均为影响可预期性的具体缺陷。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-23）

## 1. 今日速览

今日 Gemini CLI 发布 v0.62.0-nightly 夜间版，核心变更是新增 **Gemini 3.8 Flash** 与 **Gemini 3.5 Flash Lite** 模型支持，该提交已同步 cherry-pick 至 preview 分支（v0.61.0-preview.1），但向 stable 分支（v0.60.1）的 cherry-pick 出现合并冲突。社区侧焦点集中在 Agent 可靠性问题：subagent 达到 MAX_TURNS 却被误报为成功、generalist agent 永久挂起，以及 Auto Memory 的隐私与重试逻辑缺陷。

## 2. 版本发布

**v0.62.0-nightly.20260923.g62364cb20**（夜间版）

- 唯一变更：`Feat/gemini 3.8 flash 3.5 flash lite`（#29443），新增对 `gemini-3.8-flash` 与 `gemini-3.5-flash-lite` 的支持。
- 关联动态：该提交被机器人 cherry-pick 至 v0.61.0-preview.0，生成 v0.61.0-preview.1（#29455）；向 stable v0.60.0 的 cherry-pick（#29456）**检测到合并冲突**，尚未进入稳定版。
- 链接：https://github.com/google-gemini/gemini-cli/releases

## 3. 社区热点 Issues（10 个）

1. **#22323 Subagent 达到 MAX_TURNS 却上报 GOAL 成功** — p1 bug，13 条评论。`codebase_investigator` 在未做任何分析前即触达轮次上限，却返回 `status: "success"`，掩盖了中断事实，会直接误导用户对结果完整性的判断。社区反应最热烈。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 Generalist agent 永久挂起** — p1 bug，8 条评论、8 个 👍（本批最高点赞）。简单的文件夹创建等操作在委托给 generalist agent 后无限挂起，用户最长等待一小时才取消，严重影响可用性。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由** — p2 enhancement，9 条评论。提出 Gemini 3 模型天然以 bash 原生命令（grep/cat/sed/awk）工作，应据此重构执行环境，属于架构层面的方向性提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 评估 AST 感知的文件读取、搜索与映射** — p2 EPIC，7 条评论。跟踪 AST 感知工具能否用单次调用精确读取方法边界、减少轮次，属于 agent 效率的核心探索。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 Gemini 不主动使用 skills 和 sub-agents** — p2 bug，6 条评论。用户反馈除非显式指令，模型几乎不会自主调用自定义技能与子代理，说明工具路由策略存在盲区。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#26525 Auto Memory 需确定性脱敏并减少日志** — p2 安全类，5 条评论。Auto Memory 会把本地 transcript 内容发送给后台抽取模型，脱敏在内容已发出之后才发生，属隐私隐患。
   https://github.com/google-gemini/gemini-cli/issues/26525

7. **#24246 工具数超过 128 个时出现 400 错误** — p2 bug，3 条评论。工具数量膨胀导致 API 报错，用户期望 agent 能在启用范围内智能裁剪工具集。
   https://github.com/google-gemini/gemini-cli/issues/24246

8. **#21983 Browser subagent 在 Wayland 下失败** — p1 bug，4 条评论。Linux Wayland 环境下浏览器子代理无法工作，属平台兼容性硬伤。
   https://github.com/google-gemini/gemini-cli/issues/21983

9. **#22672 Agent 应停止/劝阻破坏性行为** — p2，3 条评论。模型在复杂 git 操作中偶发使用 `git reset` 或 `--force`，而更安全的替代方案其实可用，涉及操作安全性。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#18836 用持久化文件任务跟踪替代 WriteToDo** — p3，3 条评论。当前 todo 仅存在于上下文历史，导致"上下文腐化"、token 成本高、记忆丢失，指向任务状态持久化方向。
    https://github.com/google-gemini/gemini-cli/issues/18836

## 4. 重要 PR 进展（10 个）

1. **#29443 新增 Gemini 3.8 Flash / 3.5 Flash Lite 支持**（已关闭，size/xl）— 本日夜间版的唯一功能变更，已进入 nightly 与 preview。
   https://github.com/google-gemini/gemini-cli/pull/29443

2. **#29460 修复 OAuth URL 换行截断**（p1，安全）— 长 Google OAuth URL 被终端折行截断导致 `Error 400: invalid_request`，改用 OSC 8 超链接渲染。
   https://github.com/google-gemini/gemini-cli/pull/29460

3. **#29458 默认阻止粘贴文本中的 @path 展开**（p1，安全）— 防止粘贴 `cat @id_rsa` 这类文本时触发路径展开并上传用户只打算粘贴的文件，将 `ui.escapePastedAtSymbols` 默认置为 true。
   https://github.com/google-gemini/gemini-cli/pull/29458

4. **#29459 将取消信号传播进 shell 命令注入**（p1）— `!{...}` 注入此前使用新建的 AbortController，调用方取消无法到达子进程，且注入无预算限制。
   https://github.com/google-gemini/gemini-cli/pull/29459

5. **#29457 用 glob 匹配替换 read-many-files 的模糊判断**（p1）— 修复二进制资源（图片/PDF/音频）被误判为"显式请求"导致的严重上下文膨胀（#29045）。
   https://github.com/google-gemini/gemini-cli/pull/29457

6. **#29420 保留显式指定的 Gemini 3 Pro preview 模型 ID**（p2）— 修复 `--model gemini-3-pro-preview` 在 3.1 rollout 开启时被静默改写为 `gemini-3.1-pro-preview` 的问题。
   https://github.com/google-gemini/gemini-cli/pull/29420

7. **#29244 工具文件写入原子化并串行化同路径写入**（p1，已关闭）— 并行工具执行下两个 `replace` 同时读原文件会导致编辑静默丢失。
   https://github.com/google-gemini/gemini-cli/pull/29244

8. **#29249 修复 get_internal_docs 路径守卫的前缀绕过**（p1，已关闭）— 字符串前缀比较缺少路径分量边界，以文档目录名开头的兄弟目录可绕过限制。
   https://github.com/google-gemini/gemini-cli/pull/29249

9. **#29446 区分 MCP 配置缺失与 JSON 格式错误**（p1）— 修复 `mcp-server-enablement.json` 文件不存在（ENOENT）时被当作启用状态处理，导致已禁用的 MCP server 默认恢复启用。
   https://github.com/google-gemini/gemini-cli/pull/29446

10. **#29247 Windows 下 isWithinRoot 改为大小写不敏感**（已关闭）— 盘符或目录大小写不一致（`c:\` vs `C:\`）时合法路径被拒绝，破坏 ACP/IDE 文件系统路由。
    https://github.com/google-gemini/gemini-cli/pull/29247

## 5. 功能需求趋势

- **新模型支持**：Gemini 3.8 Flash / 3.5 Flash Lite 落地，同时社区关注显式模型 pin 的语义不被 rollout 覆盖（#29420）。
- **Agent 可靠性与工具路由**：subagent 轮次上限、generalist 挂起、skills/sub-agents 不被主动调用，构成当前最大一类问题簇。
- **任务与记忆持久化**：以文件为基础的任务跟踪（#18836、#21000）与 Auto Memory 体系（#26525、#26522、#26523、#26516）密集出现，指向上下文腐化与记忆质量问题。
- **上下文与 token 效率**：read-many-files 的上下文膨胀、工具数超限 400 错误（#24246）、AST 感知读取（#22745）都围绕减少无效 token 消耗。
- **安全与权限边界**：脱敏时序、粘贴路径展开、路径守卫绕过、OAuth URL 处理等，安全类 PR 在本日占比显著。
- **平台兼容性**：Wayland 浏览器子代理、Windows 路径大小写等跨平台问题持续被反馈。

## 6. 开发者关注点

- **Agent 会"假装成功"**：达到轮次上限却上报 GOAL 成功（#22323），是最被诟病的可信度问题。
- **挂起无反馈**：generalist agent 无限等待（#21409）且无超时提示，用户只能手动取消。
- **静默失败与静默改写**：无效记忆补丁被跳过（#26523）、显式模型 ID 被静默替换（#29420）、并发写文件静默丢失编辑（#29244），共同指向"出错不吭声"。
- **模型行为不够克制**：倾向使用 `git reset`/`--force` 等破坏性命令（#22672），并在随机目录生成临时脚本（#23571），增加清理成本。
- **配置不生效**：`settings.json` 覆写被 Browser Agent 忽略（#22267），MCP 启用状态在配置缺失时默认反转（#29446）。
- **安全默认值偏弱**：隐私内容脱敏发生在发送之后（#26525）、粘贴文本默认可触发文件外发（#29458），开发者期望更安全的默认行为。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-23）

## 今日速览

v1.0.89-0 预发布版加入对 claude-opus-5.5 的支持，并改进托管 Connector 授权流程；v1.0.88 正式发布，新增 OSC 777 终端通知与底部对话框文本选择修复。社区侧，内存溢出（OOM）崩溃、桌面端会话创建失败与 GitHub 凭据失效等稳定性问题持续发酵，成为过去 24 小时评论最集中的方向。

## 版本发布

- **v1.0.89-0（预发布）**
  - 新增：支持 `claude-opus-5.5` 模型。
  - 改进：连接与重连时显示托管 Connector 授权进度，并提供可复制的授权 URL。
  - 链接：github/github/copilot-cli Releases

- **v1.0.88（2026-09-22）**
  - 新增：为 Ghostty 与 WezTerm 直连会话提供可选的 OSC 777 终端通知。
  - 修复：底部锚定对话框（含登录设备码）现可正常选择文本。
  - 修复：托管设置刷新失败时保留 `/allow-all`；对缺失路径记住确切的会话批准。
  - 链接：github/github/copilot-cli Releases

- **v1.0.88-2**
  - 修复：底部锚定对话框（含登录设备码）的文本选择问题。
  - 链接：github/github/copilot-cli Releases

## 社区热点 Issues

1. **#4742 [OPEN] 桌面端 1.1.15 无法创建第二个 Local 会话** — 评论 12、👍 5。同一项目已有活跃 Local 会话时新建失败，影响多分支并行开发的核心工作流，是今日讨论最热的桌面端问题。
   https://github.com/github/copilot-cli/issues/4742

2. **#4535 [CLOSED] `store_memory` 在 v1.0.81 预发布版报错 `Instance id is required`** — 评论 10。原生记忆写入器缺失实例 ID，直接影响上下文记忆功能可用性，现已关闭。
   https://github.com/github/copilot-cli/issues/4535

3. **#3997 [OPEN] Copilot Web 提示模型 `gpt-5.3-codex` 不可用** — 评论 10。`session.create` 因模型不可用而失败，长期未解决，反映 Web 端模型可用性一致性问题。
   https://github.com/github/copilot-cli/issues/3997

4. **#2995 [CLOSED] 无法使用 DeepSeek API** — 评论 9、👍 9。自定义 Provider（`COPILOT_PROVIDER_*`）接入第三方模型的典型诉求，高赞说明社区对多模型后端需求强烈。
   https://github.com/github/copilot-cli/issues/2995

5. **#2421 [CLOSED] HTTP/2 GOAWAY 竞态导致级联重试失败与静默消耗 premium 请求** — 评论 8、👍 19。合并了 #1743、#1754、#2050、#2101、#2189 五个重复问题，高赞高关注，涉及真实的额度浪费。
   https://github.com/github/copilot-cli/issues/2421

6. **#4699 [OPEN] 长时间 `--resume` 会话触发 `JavaScript heap out of memory`，崩溃转储写入用户 cwd** — 评论 7、👍 7。约 14 小时内崩溃 3 次，且诊断文件污染工作目录，属于长会话场景的严重稳定性缺陷。
   https://github.com/github/copilot-cli/issues/4699

7. **#4725 [OPEN] Linux 平台频繁 JavaScript 堆内存溢出** — 评论 7。每隔数分钟即崩溃，与 #4699 相互印证内存管理是当前的系统性问题。
   https://github.com/github/copilot-cli/issues/4725

8. **#4905 [OPEN] 桌面端会话 spawn 后数分钟即死：“GitHub credential registration is no longer available”** — 评论 5、👍 3。凭据注册失效使 github-mcp-server 目录过期并变为致命错误，属桌面端 + MCP 链路的阻断性问题。
   https://github.com/github/copilot-cli/issues/4905

9. **#4844 [OPEN] `--yolo` 启动标志被预认证 fail-closed 逻辑吞掉，策略解析后未重新应用** — 评论 4。权限绕过在启动窗口期被静默禁用，涉及托管设置与权限模型的边界行为。
   https://github.com/github/copilot-cli/issues/4844

10. **#4521 [CLOSED] 沙箱无法禁用** — 评论 4、👍 4。配置显示已禁用但状态仍为启用且实际走沙箱，配置与运行时状态不一致。
    https://github.com/github/copilot-cli/issues/4521

> 其他值得留意的已关闭项：#3331（插件市场自动更新）、#3877（会话启动自动 `/allow-all`）、#4673（会话恢复自动续跑被用户中止的工作）、#2197（`--config-dir` 行为不符预期）、#4605（`latest-prerelease` 查找因 `created_at` 相同而卡在旧版本）。

## 重要 PR 进展

过去 24 小时内更新的 PR 仅有 2 条：

1. **#4948 [OPEN] Update github-script action pin** — 将固定的 `actions/github-script` 刷新至 v9.0.0 提交；作者核查后确认仓库无运行时依赖清单，且 `actions/stale` 已是最新。
   https://github.com/github/copilot-cli/pull/4948

2. **#4770 [OPEN] Document the WebSocket responses opt-out** — 为默认使用 WebSocket responses 端点的模型补充文档，说明在 WebSocket 被网络阻断或出现 `400 input item ID does not be...` 失败时如何关闭该传输。
   https://github.com/github/copilot-cli/pull/4770

> 本次数据仅含 2 条 PR，不足以挑选 10 条，故如实列出全部。真实 PR 看板请见仓库 Pull Requests 列表。

## 功能需求趋势

- **多模型与第三方 Provider 支持**：claude-opus-5.5 已进入预发布（v1.0.89-0）；同时 #2995（DeepSeek API）、#3997（gpt-5.3-codex 不可用）、#4919（`/ask` 在 auto 模式下报模型不支持）显示社区对模型可插拔与可用性一致性的持续诉求。
- **权限与沙箱策略可控性**：#3877（会话启动自动 allow-all）、#4844（`--yolo` 被吞）、#4521（沙箱无法禁用）、#2533（阻塞式 shell 调用冻结 agent）集中反映对权限模型的透明性与可预测性要求。
- **长会话与内存性能**：#4699、#4725 两起 OOM 表明长 `--resume` 会话的内存管理是关键短板。
- **会话生命周期管理**：#4742（同项目多 Local 会话）、#4673（恢复后自动续跑被中止的工作）指向会话状态机与并发控制。
- **插件与配置生态**：#3331（插件市场自动更新）、#2197（`--config-dir` 行为）反映对可维护性与配置一致性的需求。
- **终端体验与平台适配**：v1.0.88 的 OSC 777 通知与 #4843（Warp 下配色不跟随终端主题）说明终端集成细节受关注。

## 开发者关注点

- **稳定性优先**：OOM 崩溃（#4699、#4725）与会话意外终止（#4905）是当前最影响日常使用的痛点，且崩溃转储写入 cwd 带来额外困扰。
- **凭据与认证链路脆弱**：预认证窗口期的策略处理（#4844）与 GitHub 凭据注册失效（#4905）表明认证初始化阶段的时序处理仍需加固。
- **额度与成本可见性**：#2421 中静默消耗 premium 请求、#2827 中限流 UI 不足，说明开发者希望对用量与限流有更清晰的实时反馈。
- **配置与运行时状态一致性**：#4521、#2197、#4843 均属配置生效与状态展示不一致类问题，易造成信任损耗。
- **平台差异**：Linux（#4725）、macOS/Warp（#4843）、桌面端（#4742、#4905）问题分布分散，跨平台一致性仍是挑战。

---

*本日报仅基于 2026-09-23 提供的 GitHub 数据生成，未包含数据源之外的发布、指标或引用。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-23）

## 今日速览

今日无新版本发布。社区动态集中在两个安全与稳定性问题上：一例高危的 `rm -rf` 误删用户数据 Issue（#2596）持续获得更新，另有一例长期存在的授权失败 Bug（#1547）被关闭。PR 侧以修复为主，涉及 Web 端 CJK 输入法回车误提交与 OpenCode Go 主机请求头兼容。

---

## 版本发布

过去 24 小时内无新 Release。

---

## 社区热点 Issues

> 说明：过去 24 小时内仅 2 条 Issue 有更新，全部列出，未凑足 10 条。

**1. #2596 [OPEN] Agent 对工作区外已存在目录执行 `rm -rf`，删除用户会话数据**
- 链接：MoonshotAI/kimi-cli Issue #2596
- 作者 iMaxTomas | 创建 2026-08-07 | 更新 2026-09-23 | 评论 1 | 👍 0
- 重要性：这是涉及**数据安全的高危问题**。在 yolo 权限模式下，用户要求清理 Agent 自己创建的符号链接 `~/.pi/agent/sessions`，但该符号链接此前其实创建失败（`ln -sfn` 未成功），导致 Agent 的清理操作落在了**工作区之外、原本已存在的真实目录**上，删除了用户会话数据。
- 社区反应：评论数仅 1，讨论热度不高，但问题性质严重——它暴露了 Agent 在破坏性操作前缺少对目标路径存在性与归属的校验。值得关注其是否会引申出权限边界或路径白名单相关的修复。

**2. #1547 [CLOSED] [bug] 生成过程中反复报错 "Authorization failed, please check your login status"**
- 链接：MoonshotAI/kimi-cli Issue #1547
- 作者 Philipp-Pfeiffer | 创建 2026-03-22 | 更新 2026-09-23 | 评论 0 | 👍 0
- 重要性：已关闭的长期授权类 Bug。报告环境为 kimi 1.24.0、Kimi Code 订阅、kimi-for-coding 模型、Linux 6.12.73-1-lts。问题表现为**生成中途反复出现授权失败提示**，属于影响连续使用体验的中断类故障。
- 社区反应：无评论、无点赞，今日仅更新状态为已关闭，尚不清楚对应修复的具体版本或提交。

---

## 重要 PR 进展

> 说明：过去 24 小时内仅 2 条 PR 有更新，全部列出，未凑足 10 条。

**1. #2667 [CLOSED] fix(web): 拦截输入法组字状态下的回车键**
- 链接：MoonshotAI/kimi-cli PR #2667
- 作者 dvd233 | 创建 2026-09-22 | 更新 2026-09-22 | 👍 0
- 内容：当 CJK 输入法处于组字（composition）状态时，WebKit 可能在 React 能观察到 `isComposing` 之前，先发出 `keyCode === 229` 的回车 keydown，导致 `PromptInputTextarea` 提交未完成的文本。该 PR 增加了 WebKit 兼容的守卫逻辑，避免误提交。
- 意义：直接改善中日韩用户的输入体验，是面向前端输入层的细节修复。

**2. #2656 [OPEN] fix(llm): 为 OpenCode Go 主机发送 `x-opencode-session` 请求头**
- 链接：MoonshotAI/kimi-cli PR #2656
- 作者 FOWEPJF255 | 创建 2026-09-20 | 更新 2026-09-22 | 👍 0
- 内容：关联 Issue #2653。OpenCode Go 在编码 Agent 缺少稳定的 `x-opencode-session` 头时会返回 HTTP 400。该改动检测官方 OpenCode 主机（`opencode.ai` / `*.opencode.ai`）并设置对应请求头。
- 状态：仍为 OPEN，尚未合并。
- 意义：解决与第三方编码平台对接时的兼容性故障，属于生态互操作方向。

---

## 功能需求趋势

基于今日可用的 Issue 数据，可提炼出的方向有限，主要集中在两点：

1. **Agent 权限与破坏性操作的安全边界**（#2596）：社区对 Agent 在 yolo 等宽松权限模式下执行 `rm -rf` 等危险命令的边界控制存在明确关切，尤其是对工作区外路径的保护。
2. **会话与认证稳定性**（#1547）：生成过程中授权状态反复失效，反映长会话场景下认证保持的可靠性需求。

> 注：本次提供的数据仅包含 2 条 Issue，样本量不足以支撑更广泛的功能方向（如 IDE 集成、性能、新模型支持等）的归纳，故不做推测。

---

## 开发者关注点

- **数据安全优先**：#2596 中 Agent 越出工作区删除既有目录，是本次最值得开发者留意的痛点——需要在执行破坏性命令前校验目标路径来源与归属。
- **宽松权限模式的风险**：该问题发生在 yolo 权限模式，提示高自动化模式下的操作审计与确认机制仍是薄弱环节。
- **输入法体验**：#2667 显示 CJK 用户的输入层细节（IME 组字期间误提交）被社区持续打磨。
- **第三方平台兼容**：#2656 反映与 OpenCode Go 等外部编码平台的请求头约定是实际集成中的高频故障点。
- **认证中断**：#1547 的关闭显示生成中途授权失败类问题在被处理，但缺少公开的修复说明与版本对应信息。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-23）

## 1. 今日速览

今日无新版本发布，社区讨论集中于**账号与计费系统迁移遗留问题**：多个付费用户的 OpenCode Go 订阅在 Console 迁移后显示失效或丢失，同时免费层出现「只能在 OpenCode 内部使用」的报错，该问题以 51 条评论成为今日最热 Issue。PR 侧则较为活跃，涵盖语音生成、会话级模型路由、TUI 计时显示等新能力，以及多项核心层 bug 修复。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

1. **[#49433](https://github.com/anomalyco/opencode/issues/49433) 免费层报错「OpenCode's free tier can only be used from within OpenCode」**（51 评论 / 👍15）— 任意模型均触发，用户使用 1.3.17 版本。评论数为今日最高，说明影响面广且定位困难，属于阻塞日常使用的可用性问题，最值得优先跟进。

2. **[#23153](https://github.com/anomalyco/opencode/issues/23153) 请求支持加密货币支付 Go 订阅**（23 评论 / 👍52）— 今日点赞数最高的需求类 Issue，反映部分用户对现有支付渠道（Stripe/Alipay）覆盖不足的诉求，也侧面说明订阅支付体系的用户摩擦。

3. **[#11865](https://github.com/anomalyco/opencode/issues/11865) Codex / OpenAI 的 Tasks/Subagents 频繁卡死且无超时重试**（22 评论 / 👍22）— 卡死后整个会话永久挂起，自 2 月提出至今仍未解决，是长期存在的稳定性顽疾。

4. **[#16077](https://github.com/anomalyco/opencode/issues/16077) 持久化会话记忆（Persistent Session Memory）**（16 评论）— 期望启动时从本地文件加载历史上下文，与 #48497 形成同一方向的持续呼声。

5. **[#13003](https://github.com/anomalyco/opencode/issues/13003) 在 TUI 中显示 token 用量**（14 评论 / 👍53）— 今日点赞第二高，成本可见性是开发者最普遍的基础诉求之一。

6. **[#37564](https://github.com/anomalyco/opencode/issues/37564) 「Auto mode」基于 LLM 分类器的权限自动批准**（9 评论 / 👍35）— 高赞功能请求，目标是减少权限确认打断，与 #33585 相关联。

7. **[#17076](https://github.com/anomalyco/opencode/issues/17076) 多文件 apply_patch 审批只显示第一个文件的 diff**（8 评论 / 👍28）— 审批 UI 存在安全盲区：用户看不到全部改动即批准，风险较高，点赞数可观。

8. **[#49768](https://github.com/anomalyco/opencode/issues/49768) 已付费的 Go 订阅显示未激活，请求被 Account.Disabled 拒绝**（7 评论）— 用户附上订单号证据，与 #50201、#49893 同属迁移/续费相关问题群，需一并排查。

9. **[#50201](https://github.com/anomalyco/opencode/issues/50201) 账号在 dashboard 迁移中丢失**（5 评论 / 👍4）— 迁移后原工作区不可用，订阅、用量和发票记录均消失，涉及用户资产，敏感度高。

10. **[#50870](https://github.com/anomalyco/opencode/issues/50870) Linux 构建所有 API 路由返回 502**（3 评论，当日创建并关闭）— v1.18.30 Linux 包阻塞 `--port` TUI、serve/attach 及 Web 客户端，虽评论不多但属完全不可用级别故障，且当日已关闭，值得确认修复情况。

> 另注：#49133（tab 键不切换 agent）、#6479（从父目录读取 agents.md）、#6111（SSH 剪贴板）、#30904（本地插件导致启动挂起）均已关闭。

## 4. 重要 PR 进展

1. **[#50883](https://github.com/anomalyco/opencode/pull/50883) feat(ai): 新增流式语音生成**（已关闭）— 为 `@opencode/ai` 增加 `Speech.generate` / `Speech.stream`，覆盖 OpenAI、ElevenLabs、Gemini、Cartesia、Deepgram，并引入新的流式媒体路由类型。补齐了文本、图像、视频之外的语音模态。

2. **[#50859](https://github.com/anomalyco/opencode/pull/50859) feat(session): 置信度门控的模型分层路由**（开放）— 实现 #34370 第 1 项「基于意图的模型路由」，置于可选 jev 配置之后，替代此前的 #50468。

3. **[#38510](https://github.com/anomalyco/opencode/pull/38510) feat(shell): 基于 PTY 的交互式命令执行与 SecureInput**（已关闭）— 支持 sudo、`ssh -t`、`ansible -K` 等需密码输入的命令（此前因 stdin 被忽略而失败），是对 Shell 工具能力的重要扩展。

4. **[#50896](https://github.com/anomalyco/opencode/pull/50896) feat(core): 在 Console 请求中标识客户端**（已关闭）— 修复 Console 插件刷新 token 时不带 User-Agent 导致的识别问题。

5. **[#50899](https://github.com/anomalyco/opencode/pull/50899) fix(core): 忽略 JSONC 注释中的文件引用**（开放）— 修复 `//` 或块注释里的 `{file:...}` 被 V2 误解析的问题（Fixes #50898），属易踩坑的配置解析缺陷。

6. **[#50892](https://github.com/anomalyco/opencode/pull/50892) feat(tui): 在工具调用上显示耗时**（开放）— 目前 TUI 中工具调用无任何时间信息，该 PR 补充计时展示，提升可观测性。

7. **[#50888](https://github.com/anomalyco/opencode/pull/50888) feat(desktop): 桌面 UI 增加会话总 token 统计**（开放）— 与 Issue #13003 的 token 可见性需求呼应。

8. **[#50422](https://github.com/anomalyco/opencode/pull/50422) feat(core): 恢复 GitLab 工作流发现并新增 OAuth 登录**（开放）— 同时修复与增强内置 GitLab Duo provider。

9. **[#46721](https://github.com/anomalyco/opencode/pull/46721) refactor(core): 为停止操作携带类型化结果**（开放）— 修复 Ctrl+D 停止后台 shell 被误报为失败、进而唤醒空闲 agent 重启工作的行为问题。

10. **[#47867](https://github.com/anomalyco/opencode/pull/47867) fix(core): 日志时间戳使用本地时间**（开放）— 修复日志时间与本地时区不一致（Closes #21330）。另有 [#47173](https://github.com/anomalyco/opencode/pull/47173) 修复桌面端 deep link、[#50680](https://github.com/anomalyco/opencode/pull/50680) 新增 codemode 资源工具、[#50887](https://github.com/anomalyco/opencode/pull/50887) 收录 opencode-stay-awake 插件。

## 5. 功能需求趋势

- **会话记忆与连续性**：#16077（持久化会话记忆）与 #48497（/teach、/recall、/learn、/memory 长期记忆系统）指向同一方向——跨会话上下文保持是当前最集中的功能诉求。
- **成本与用量可视化**：#13003（TUI token 用量）高赞，#50888 已在桌面端落地部分能力，说明用户对成本和资源的可见性需求强烈。
- **权限与自动化平衡**：#37564（Auto mode 自动批准）与 #17076（多文件 diff 审批不完整）形成对照——既要减少打断，又要保证审批信息完整安全。
- **子代理可靠性**：#11865、#44747 均指向 subagent 卡死、权限请求丢失、stop/interrupt 失效，稳定性是 Agent 编排能力落地的前提。
- **多模态与模型生态扩展**：#50883（语音生成）扩展能力边界，#50859（模型分层路由）优化模型选择，配合 GitLab provider 相关 PR，显示生态接入持续拓宽。
- **计费与支付渠道**：#23153（加密支付）及多个订阅失效问题，反映支付与账号体系的多样性诉求和迁移风险。

## 6. 开发者关注点

- **计费与账号迁移是当下最大痛点**：#49768、#49893、#50201 集中在 Console 迁移后订阅失效、账号丢失、Alipay 续费授权失败，直接影响付费用户可用性，且带有订单号等可核查证据，需优先处理。
- **卡死类问题缺乏兜底机制**：多个 Issue（#11865、#44747）反复提到无超时、无重试、stop/interrupt 无效、甚至重启客户端仍无法恢复，反映会话状态机缺少故障隔离与恢复路径。
- **审批 UI 的信息完整性受质疑**：#17076 中用户只看到首个文件 diff 即需批准多文件改动，既是体验问题也是潜在安全风险。
- **平台与构建质量问题**：#50870（Linux 全路由 502）、#45856（serve 模式下 Basic Auth 恒返回 401）、#6111（SSH 剪贴板）、#49790（TUI 崩溃 PluginProvider is missing）显示非 macOS 主路径与服务器模式下的质量仍有明显短板。
- **配置解析与日志等基础体验**：JSONC 注释误解析（#50899/#50898）、日志时区（#47867/#21330）、父目录 agents.md（#6479）等小问题虽已修复，但说明配置与日志层仍有较多易踩坑点。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-23

数据来源: github.com/badlogic/pi-mono

## 1. 今日速览

Pi 发布 v0.87.1，引入 Claude Opus 5.5、GPT-6 Sol、GPT-6 Luna 等前沿模型，并默认启用 Grok 4.7。本日最活跃的讨论集中在扩展与 provider 的可靠性问题（默认 provider/model 被覆盖、扩展工具重名、扩展导入延迟）以及会话管理的一致性缺陷（fork 迁移、冷恢复回放、元数据截断）。PR 侧则有模型基础设施统一、配置 Schema 发布等较大改动在推进。

## 2. 版本发布

**v0.87.1**
- **前沿模型支持**：可通过受支持 provider（含 GitHub Copilot）使用 Claude Opus 5.5、GPT-6 Sol、GPT-6 Luna。文档: `packages/coding-agent/docs/models.md#select-a-model`
- **默认启用 Grok 4.7**
（release 说明在数据中被截断，仅含上述信息。）

## 3. 社区热点 Issues（10 条）

1. **[#5653 OPEN] Move off Shrinkwrap**（评论 21，更新至 2026-09-23）
   同时直接依赖 `pi-ai` 与 `pi-coding-agent` 会在磁盘上产生两份相同的 `pi-ai` 副本（一份 hoisted、一份嵌套），涉及 API provider registry 的重复实例问题。本日评论数最高，属于长期悬而未决的依赖结构问题。
   https://github.com/earendil-works/pi/issues/5653

2. **[#7128 CLOSED] 默认 PI_* 系统提示引导过度触发 bash 调用**（评论 12，👍 13）
   系统提示新增“Inspect PI_* environment variables…”后，agent 被引导频繁执行环境检查命令。点赞数最高，反映社区对默认提示词副作用敏感。已关闭。
   https://github.com/earendil-works/pi/issues/7128

3. **[#9843 CLOSED] 0.86.x 回归：OpenAI 兼容（LiteLLM）provider 长请求中途连接错误**（评论 12）
   0.85.1 升级到 0.86.1 后，TUI 与 Pendant（VS Code、pi SDK）均出现 `litellm.APIConnectionError`。涉及升级回归，影响面广。
   https://github.com/earendil-works/pi/issues/9843

4. **[#9361 OPEN] Windows：加载扩展时 `shellPath` 被非确定性忽略，PATH 回退到 WSL 的 bash.exe**（评论 9）
   只要加载任一扩展，`~/.pi/agent/settings.json` 中有效的 `shellPath` 就可能被静默忽略。Windows 平台工具链可靠性问题，属 `inprogress`。
   https://github.com/earendil-works/pi/issues/9361

5. **[#5581 OPEN] `pi.sendMessage()` + `triggerTurn: true` 绕过 `before_agent_start` 事件**（评论 6，👍 2）
   自定义消息直接调用 `_runAgentPrompt` 而非 `prompt()`，跳过 `emitBeforeAgentStart`，破坏扩展事件钩子的一致性。
   https://github.com/earendil-works/pi/issues/5581

6. **[#8810 OPEN] 扩展注册的 provider：新会话间歇性忽略默认 provider/model**（评论 6）
   当默认 provider 由扩展通过 `pi.registerProvider()` 注册时，新会话有时会落到其他 provider 的默认模型上。与 #9884 同类症状。
   https://github.com/earendil-works/pi/issues/8810

7. **[#7724 CLOSED] 冷恢复回放了已被实时恢复移除的溢出 assistant 消息**（评论 6）
   Pi 通过压缩+重试处理上下文溢出后，重开会话会把失败/截断的回复重新写入模型历史，影响上下文正确性。
   https://github.com/earendil-works/pi/issues/7724

8. **[#9884 OPEN] 启动时配置的默认模型有时被回退模型替换**（评论 5，2026-09-22 创建）
   20 次启动中有 4 次会话以 `deepseek/deepseek-v4-pro` 开始，而非配置的扩展注册 provider 模型。与 #8810 共同指向 provider 解析时序问题。
   https://github.com/earendil-works/pi/issues/9884

9. **[#9863 OPEN] 性能：导出打包后的 `dist/bundle/index.js` 以消除 500–1000ms 扩展导入延迟**（评论 2）
   扩展导入 `pi-coding-agent` 冷启动延迟 500–1000ms，原因是包导出与 jiti alias 指向未打包入口。直接影响扩展启动体感。
   https://github.com/earendil-works/pi/issues/9863

10. **[#9904 OPEN] 将自动压缩阈值与 `reserveTokens` 解耦**（评论 3）
    建议新增 `compaction.thresholdRatio` 之类的上下文相对阈值，在未设置时保持现有 `contextWindow - reserveTokens` 行为。涉及长会话成本与稳定性。
    https://github.com/earendil-works/pi/issues/9904

其他值得留意的当日新报：**[#9944] `/skill` 输入时技能自动补全为空**、**[#9950] `forkFrom` 跳过旧会话迁移导致 fork 后历史为空**、**[#9905] Anthropic `thinking.display` 恒为 `summarized` 且无法配置**。

## 4. 重要 PR 进展（10 条）

1. **#9948 [OPEN] feat(ai,coding-agent): 统一图像与分类器模型基础设施**（mitsuhiko，2026-09-23）
   对模型系统做较大改造，使其支持 chat 之外的模型类型。属架构级变更。
   https://github.com/earendil-works/pi/pull/9948

2. **#7948 [OPEN] feat(coding-agent): 延迟扩展运行时重载**（christianklotz）
   将等待式的 `ctx.reload()` 替换为 fire-and-forget 的 `ctx.requestReload()`，合并重载请求，推迟到扩展操作、压缩或分支边界时再替换运行时。
   https://github.com/earendil-works/pi/pull/7948

3. **#9880 [OPEN] feat(coding-agent): 发布配置 JSON Schema**（christianklotz）
   从 TypeBox 契约生成并提交 `models.json`、`settings.json`、`keybindings.json` 与主题的 JSON Schema，保留编辑器描述与文档默认值。
   https://github.com/earendil-works/pi/pull/9880

4. **#9222 [OPEN] fix(coding-agent): 运行或压缩中拒绝 reload**（acmerfight）
   修复扩展工具执行期间被 RPC/SDK reload 打断后 `ctx.getSystemPrompt()` 抛 stale-context 的问题。
   https://github.com/earendil-works/pi/pull/9222

5. **#9889 [OPEN] fix(coding-agent): 对齐 manifest 资源发现**（christianklotz）
   规范化点相对包 manifest 模式，并在直接发现时应用扩展 manifest 的 glob 与排除规则。测试 156 项通过。
   https://github.com/earendil-works/pi/pull/9889

6. **#9941 [CLOSED] fix(coding-agent): abort 解退期间的 steer 转为新 prompt**（nateGeorge）
   修复 Escape 中止后快速回车重提交时新 prompt 丢失、界面显示 aborted 错误的问题。
   https://github.com/earendil-works/pi/pull/9941

7. **#9937 [CLOSED] 以响应式网格渲染启动扩展**（henry-feldhaus）
   将启动扩展标签渲染为对齐的宽度感知网格，并在渲染时重算以适配终端 resize。
   https://github.com/earendil-works/pi/pull/9937

8. **#9934 [CLOSED] feat(ai,coding-agent): 新增 Yolo-Auto provider**（harryvgiunta）
   内置 OpenAI 兼容订阅网关 provider，支持 `/v1/models` 运行时自动发现，提供 `qwen3.8-flash`、`yolo`、`yolo-small`。
   https://github.com/earendil-works/pi/pull/9934

9. **#9569 [OPEN] fix(ai): 强制转换 JSON 编码的 object/array 工具参数**（rsaryev）
   当模型把 `object`/`array` 参数以 JSON 字符串形式返回时，`validateToolArguments` 进行恢复。与 #9570 同属 Gemini/工具调用兼容修复。
   https://github.com/earendil-works/pi/pull/9569 · https://github.com/earendil-works/pi/pull/9570

10. **#9924 [CLOSED] `showHardwareCursor: true` 时不再渲染假光标**（fuzzypixelz）
    修复 Pi 总把硬件光标覆盖为块状的问题；作者提到其 kitty 配置为 `cursor_shape beam`。对应 issue #9925。
    https://github.com/earendil-works/pi/pull/9924

## 5. 功能需求趋势

- **新模型与 provider 生态**：v0.87.1 加入 Opus 5.5 / GPT-6 系列并默认 Grok 4.7；PR #9934 新增 Yolo-Auto provider 与运行时模型自动发现；#9905 要求可配置 Anthropic thinking.display —— provider 层可配置性成为持续诉求。
- **扩展系统成熟度**：延迟重载（#7948）、重载期间拒绝（#9222）、重名工具替换（#9071）、manifest 发现对齐（#9889）、冷启动导入性能（#9863）构成一条清晰的“扩展可靠性”主线。
- **会话与历史一致性**：fork 迁移（#9950）、冷恢复回放（#7724）、元数据成为 leaf 导致截断（#9930）集中暴露 session-manager 的边界缺陷。
- **上下文与成本控制**：自动压缩阈值解耦（#9904）、溢出恢复正确性（#7724）——长会话治理需求上升。
- **配置与可观测性**：配置 JSON Schema（#9880）、provider 显示名（#9926）反映设置项可发现性需求。
- **终端/TUI 细节**：光标形状（#9924/#9925）、启动扩展网格（#9937）、图片纵横比（#8938）、outputPad（#9946）、select-all（#9949）——TUI 打磨类需求密集但单点影响小。

## 6. 开发者关注点

- **默认 provider/model 解析不可靠**：#8810（扩展注册 provider）与 #9884（20 次启动 4 次回退）指向同一类启动时序竞态，是当前最影响日常使用的痛点之一。
- **依赖结构重复**：#5653 中 `pi-ai` 双副本问题讨论已达 21 条评论，涉及 registry 单例语义，属于需要设计决策的长期项。
- **Windows 平台稳定性**：#9361 的 `shellPath` 非确定性忽略与 WSL 回退，加上 #9843 的 Windows 11 + Node 24 回归，构成平台侧集中风险。
- **升级回归敏感**：#9843（0.85.1→0.86.1）与多处标注具体版本（0.84.4、0.86.1）的 issue 表明开发者关注版本间行为差异。
- **默认行为副作用**：#7128 的高赞（13）说明默认系统提示与默认设置的任何改动都会被快速感知，需谨慎评估。
- **启动延迟**：#9863 量化的 500–1000ms 扩展导入开销，是扩展作者最直接的性能抱怨。

---
*注：本日报仅基于所提供数据整理；部分 release 说明与 issue/PR 评论数（如 PR 评论数为 undefined）在原始数据中不完整，已按原文标注。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-23

数据来源：github.com/QwenLM/qwen-code

---

## 1. 今日速览

今日仓库释出 5 个发布标签，覆盖 `v0.24.4` 正式版、`v0.24.5-preview.0` 预览版、nightly、Desktop v0.24.4 以及面向 CUA 的 `cua-driver-rs` v0.20.11 预编译二进制。Issue 侧仍以 bot 自动生成的 "deferred review findings" 与仓库卫生报告为主，但多个安全/CI 类问题（telemetry 未脱敏、Windows bwrap 失败、ECS runner 陈旧）今日集中关闭。PR 侧新提交活跃，围绕工具描述瘦身、图片重放标注、MCP 兼容、浏览器运行时自包含等方向。

---

## 2. 版本发布

- **v0.24.4**（正式版）：无已知破坏性变更；Features 中新增 "add monitor tool to system prompt guidance"（#12408）。
- **v0.24.5-preview.0**（预览版）：修复 core/docs 中 deferred-tool bridge 导致的过时或未测试内容（#12355）。
- **v0.24.4-nightly.20260922.99bf4ce86b**：nightly 构建，变更同 #12355。
- **desktop-v0.24.4**（Qwen Code Desktop）：修复 review 覆盖范围问题，避免计划外 chunk 计入覆盖（#12370）。
- **cua-driver-rs v0.20.11**：Qwen CUA Driver 预编译二进制，vendored 于 `packages/cua-driver`。macOS 为已签名+公证的 universal binary 并含 `QwenCuaDriver.app`；Linux 未签名（x86_64 + arm64，glibc 2.31 下限）；Windows 未签名 UIAccess worker + 原生 SDK payload（x86_64 + arm64）。

---

## 3. 社区热点 Issues（精选 10 条）

1. **#8835** [OPEN][P2][bug] repo-hygiene 2026-W33 report-only findings（8 项）
   指出 ACP 会话 cwd / allowed-roots 校验中与 `startsWith('..')` 同类的路径包含缺陷，位于安全敏感校验路径。仓库卫生类系统性缺陷，值得安全向维护者关注。评论 7。
   https://github.com/QwenLM/qwen-code/issues/8835

2. **#11198** [CLOSED][P1][security] 使用统计遥测未脱敏上传原始工具错误文本（含 shell 命令行）至 RUM
   默认开启的遥测通道将未脱敏的 tool-error 文本上传，属于数据隐私/凭据安全范畴。今日关闭，是安全方向的重要收敛。评论 4。
   https://github.com/QwenLM/qwen-code/issues/11198

3. **#12270** [CLOSED][P2][sandbox/windows/testing] Windows lane 自 #12067 起持续红灯：bwrap 执行套件在 win32 上抛 'Sandbox assets are missing'
   新增 bwrap 执行测试在 Windows 失败，导致 nightly 的 Windows leg 持续失败。属跨平台测试门禁问题，今日关闭。评论 4。
   https://github.com/QwenLM/qwen-code/issues/12270

4. **#11937** [CLOSED][P1][ci-cd/testing] "Run .github/scripts helper tests" 全仓库失败——review-runner-schedule gh shim 被当作 ESM 加载
   `Lint & Static` 在 `ci_profile=full` 的每个 PR 上于第 35 步失败，影响所有 PR 的 CI 通过率。评论 5。
   https://github.com/QwenLM/qwen-code/issues/11937

5. **#11633** [CLOSED][bug][ci-cd] ECS runner 集群陈旧：qwen 更新失败
   至少一个 ECS 池仍运行旧版 `qwen`，说明发布安装链路与 CI 基础设施存在滞后。评论 6。
   https://github.com/QwenLM/qwen-code/issues/11633

6. **#11962** [CLOSED][bug] v0.23.5-preview.0 发布失败（2026-09-15）
   发布工作流失败，失败 job 为 quality。与今日多个版本发布对照，反映发布流水线稳定性议题。评论 3。
   https://github.com/QwenLM/qwen-code/issues/11962

7. **#8666** [OPEN][P2][ui/rendering][welcome-pr] 长 agent 回合中排队消息指示器消失，用户无法确认消息已排队
   通过 Ctrl+Q 排队的消息在 agent 长时间运行时从 UI 消失（实际仍在队列中并会生效），属交互可预期性痛点，且标记 welcome-pr。评论 4。
   https://github.com/QwenLM/qwen-code/issues/8666

8. **#8946** [CLOSED][P2][feature-request][ci-cd] 增量（delta）审查：仅审查自上次已审 SHA 以来的新提交
   为自动 PR 审查引入增量模式，避免每次重启全量审查。直接关系开发者的 PR 反馈时延。评论 3。
   https://github.com/QwenLM/qwen-code/issues/8946

9. **#9951** [CLOSED][P3][integration/mcp][need-discussion] 支持开源 Mem0 协议 provider 及可配置 baseUrl
   `integrations/external-context` 目前仅内置 `mem0-platform-v3`（硬编码 `https://api.mem0.ai/`），社区希望支持可配置的开源 Mem0 协议 provider。评论 3。
   https://github.com/QwenLM/qwen-code/issues/9951

10. **#8389** [CLOSED][feature-request][daemon][web-shell] 为 daemon 会话新增实验性 Plan & Review 工作流
    将普通会话的 Workflow 可视化升级为可选的 Plan & Review 体验，可投影 Todo、依赖边、Agent 执行与实时任务。评论 4。
    https://github.com/QwenLM/qwen-code/issues/8389

> 补充观察：今日更新的 50 条 Issue 中有相当比例为 `qwen-code-dev-bot` 自动生成的 "Deferred review findings"（如 #9981、#11408、#11598、#10018、#10382 等），属 autofix 循环中超出原 PR 范围的审查项，需维护者逐条转化为独立 issue/PR。

---

## 4. 重要 PR 进展（精选 10 条）

1. **#12532** perf(core)：精简重复的工具指引，并为民用工具面设定预算
   删除 5 个常驻工具描述中重复参数 schema、复述系统提示或自相矛盾的文本，并为每个内置工具加入此前缺失的 per-turn 大小预算。直接关系上下文开销。作者 yiliang114。
   https://github.com/QwenLM/qwen-code/pull/12532

2. **#12549** fix(core)：为每张重新附加的图片加标签，避免旧图被当作当前图
   会话从内存图片存储重放图片时，在图片前直接标注 id 及是否属于当前消息（如 "read earlier, NOT part of..."）。修复多轮图片语义歧义。
   https://github.com/QwenLM/qwen-code/pull/12549

3. **#11651** fix(core)：在重新附加图片前保留 DashScope 缓存前缀
   随着历史增长，自动重附加图片移到请求尾部，当缓存断点包含这些图片时会破坏复用。面向缓存命中率的性能修复（自报审查）。
   https://github.com/QwenLM/qwen-code/pull/11651

4. **#12552** feat(sdk-java)：仅在 attestation 通过后采用 Managed Runtime
   由 Broker 启动合并后的 Managed Runtime worker，完成 attest 后才将 lease 记为 ready；后续使用该内存 lease 时再次 attest。Java 客户端侧的安全性增强。
   https://github.com/QwenLM/qwen-code/pull/12552

5. **#12548** feat(browser-use)：使内置运行时自包含
   SDK 已随 skill 一起内置并含固定版本 Playwright，现由该副本自行加载，模型可直接 import SDK 并使用。降低外部依赖。
   https://github.com/QwenLM/qwen-code/pull/12548

6. **#12500** fix(core)：为可选的 -32601 响应保留 MCP 状态
   当旧版 Streamable HTTP 服务对可选 `prompts/list` / `resources/list` 返回 HTTP 400 + JSON-RPC `-32601` 时，保持 MCP 连接为健康状态。提升 MCP 兼容性。
   https://github.com/QwenLM/qwen-code/pull/12500

7. **#12547** feat(channels)：分离私聊与群组访问策略
   新增 `privatePolicy`（`disabled` / `allowlist` / `pairing` / `open`），与群组准入独立控制；channel 编辑器暴露该策略并附文档。作者 qqqys。
   https://github.com/QwenLM/qwen-code/pull/12547

8. **#10954** feat(serve)：暴露 supervisor 正在运行的后台 agents
   为 `qwen serve` 新增 `GET /background-agents`，返回 Agent View supervisor 正在运行的会话及各自当前工作。Stack 位置 4/4，父 PR #10949。作者 yiliang114。
   https://github.com/QwenLM/qwen-code/pull/10954

9. **#12541** perf(serve)：使用 catalog 做 workspace 扩展激活投影
   选定 workspace 的扩展激活列表改为读取 manifest catalog，并据其返回的身份与一致快照解析激活状态，同时保留响应字段。作者 callmeYe。
   https://github.com/QwenLM/qwen-code/pull/12541

10. **#12258** fix(mcp)：支持更大的 Apps、带作用域的工具调用与隔离源（autofix/takeover, needs-human）
    在真实远端实例的隔离 fixture 中验证了远端 HTTPS renderer（`d6d532eb8b`）。已标记需人工介入。
    https://github.com/QwenLM/qwen-code/pull/12258

> 另：**#12507** 修复 Linux 剪贴板不可用时提示语不当（沿用"重装 Qwen Code"文案，实际原因是 `wl-clipboard` 等工具缺失）；**#12154** 为 Web Shell git 对话框新增 "Worktrees" 标签页；**#11506** 对齐 LSP 指南与当前行为（配置、workspace trust、超时、沙箱、server 选择、诊断、文档同步）；**#11129** 新增 CI 与发布仓库变量文档。

---

## 5. 功能需求趋势

- **CI / 测试基础设施自动化**：增量（delta）审查（#8946）、确定性 fake-server E2E 迁移与稳定 merge gate（#8299）、CI 变量文档（#11129）、helper tests 与 ESM 加载问题（#11937）。审查与发布流水线效率是被反复提及的主线。
- **安全与隐私**：遥测未脱敏上传（#11198）、路径包含校验缺陷（#8835）、Java Managed Runtime attestation（#12552）、credential/data-privacy 标签存在于多个 Issue。
- **沙箱与跨平台**：Windows bwrap 执行套件（#12270）、shell/credential-security 相关 scope 标签，以及 CUA Driver 在三大平台的分发策略。
- **MCP 与外部上下文集成**：MCP 兼容性修复（#12500、#12258）、Mem0 协议 provider 与可配置 baseUrl（#9951）。
- **Web Shell / daemon 会话体验**：Plan & Review 工作流（#8389）、worktrees 管理（#12154）、后台 agents 暴露（#10954）、workspace 扩展激活（#12541）。
- **上下文与缓存效率**：工具描述瘦身与工具预算（#12532）、DashScope 缓存前缀保留（#11651）、图片重放标注（#12549）。
- **SDK 多语言**：出现 `sdk-java` 方向的独立 PR（#12552），显示客户端 SDK 覆盖面在扩展。

---

## 6. 开发者关注点

- **信息可预期性**：长回合中排队消息指示器消失（#8666），用户无法判断消息是否已入队——属高频交互摩擦。
- **CI 红灯对贡献者的阻塞**：`full` profile 下 helper tests 全仓库失败（#11937），以及 Windows lane 因新增测试持续红灯（#12270），直接影响每个 PR 的通过率与反馈速度。
- **自动审查项的积压**：大量 `Deferred review findings` Issue（#9981、#11408、#11598、#10018、#10382 等）长期 OPEN，需要维护者将其转为独立 issue/PR，否则会持续堆积。
- **发布链路稳定性**：v0.23.5-preview.0 发布失败（#11962）、ECS runner qwen 更新失败（#11633）显示发布与基础设施环节仍需加固。
- **安全默认值**：默认开启的遥测上传未经脱敏的原始工具错误文本（#11198），是隐私与凭据安全上的高优先级关切。
- **提示尺寸与成本**：工具描述重复、缺少 per-turn 预算（#12532）以及图片导致缓存前缀失效（#11651），指向上下文成本与缓存命中率这一持续诉求。

---

*本日报仅依据所提供 GitHub 数据整理，未核实链接外的额外信息。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-23）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内实际显示为 Hmbown/Codewhale）

## 1. 今日速览

今日最值得关注的是 **v0.10.0（Codewhale）发布**：产品正式更名，旧 npm 包 `deepseek-tui` 被弃用、不再发布新版本。围绕 0.10.1 的可靠性修复集中推进，PR #6422、#6423、#6407 均标注为 0.10.1 范围内的切片；同时代码库清理与架构收敛仍是 Issue 讨论主线（配置文件拆分、MCP 双栈合并）。

## 2. 版本发布

**v0.10.0** — 发布说明显示：Codewhale 是 Shannon Labs 的公开产品，`codewhale` 命令、npm 包与发布资源名保持小写技术标识；旧 npm 包 `deepseek-tui` 已弃用，不再发布后续版本。说明中还提示了从 v0.8.x 旧版 `deepseek` 迁移的用户路径（原文在此处截断）。

> 提示：发布说明未给出更多具体变更条目，建议关注后续 0.10.1 集成 PR（#6407）。

## 3. 社区热点 Issues（按更新与评论热度挑选 10 条）

1. **#6011 [enhancement] TUI 用量与工具诊断（token 计量 + 工具调用错误模式）** — 评论 9 条，今日讨论最活跃。涉及按组件/按模型统计 token、缓存命中率、per-tool 消耗与 compaction 成本，是 C11 核心执行计划的一部分。
   https://github.com/Hmbown/Codewhale/issues/6011

2. **#5586 拆分巨型文件（lib.rs 18.7k、config.rs 12.3k、client.rs 11.1k 等）** — 评论 8 条。属 C09 计划，反映代码体量已影响可维护性，是长期结构债的核心议题。
   https://github.com/Hmbown/Codewhale/issues/5586

3. **#6050 [enhancement] 可插拔 Agent 记忆后端（causal-memory / mem0 作参考实现）** — 评论 6 条。当前 `MemoryBackend` 仅有 `Native`/`Off` 两种变体，缺少第三方后端入口，社区希望开放扩展缝。
   https://github.com/Hmbown/Codewhale/issues/6050

4. **#6142 [rust, cleanup] 合并两套 MCP 客户端栈（tui/src/mcp vs crates/mcp）** — 评论 5 条。两处存在同名 `stdio_client`/`http_client`/`sse`/`oauth` 等重复实现，属 0.9.14 重构积压项。
   https://github.com/Hmbown/Codewhale/issues/6142

5. **#2342 [enhancement] 输出中的文件支持点击预览** — 评论 5 条，来自中文社区的实际使用诉求：不必再去目录中手动查找文件。
   https://github.com/Hmbown/Codewhale/issues/2342

6. **#6036 "Fleet" 与 "agent" 概念重复存储** — 评论 5 条。创始人明确指出混淆问题：同一名称（如 `scout`）在两边同时存在，且 fleet 成员混合了角色、模型 pin 与路由书签。
   https://github.com/Hmbown/Codewhale/issues/6036

7. **#6086 [enhancement, external-memory] 会话草稿本 + 三个存储统一寻址方案** — 评论 4 条。创始人方向：scratchpad、Agent Mail 与 workshop 应协同工作；当前 scratchpad 尚不存在。
   https://github.com/Hmbown/Codewhale/issues/6086

8. **#5915 [enhancement] Fleet 模型流程：provider → model → 候选清单 → 角色** — 评论 4 条。目标是让子 Agent 从用户维护的模型候选清单中选取，并支持"保存到角色"与 fleet 感知的操作器。
   https://github.com/Hmbown/Codewhale/issues/5915

9. **#2323 [bug, enhancement] 未适配中文输入法** — 评论 3 条、👍1。具体问题包括输入拼音时不隐藏"编写任务或使用 /。"提示、在配置/危险操作确认窗口中输入异常，是中文用户的高频痛点。
   https://github.com/Hmbown/Codewhale/issues/2323

10. **#6280 [enhancement, rust] v0.9.14 收敛到 MCP 2026-07-28 规范** — 评论 2 条。此前在三处被固定在 2024-11-05 版本，且客户端从不读取服务端返回的 `protocolVersion`，导致无法参与现行协商。
    https://github.com/Hmbown/Codewhale/issues/6280

其他值得一读：#6193（缺乏运行时性能门禁）、#6203（`edit_symbol` 基于 AST 的符号级编辑）、#5835（在完整 thread/turn 运行时上跑 ACP 会话）、#5637（MCP 密钥作用域限定到所属运行时）。

## 4. 重要 PR 进展（挑选 10 条）

1. **#6424 [OPEN] fix(models): 离线目录保留 DeepSeek Flash 图像输入** — 今日新建，作为 #6421 的部分修复，需在报告者实际路由与 Windows 图像输入路径验证后再关闭。
   https://github.com/Hmbown/Codewhale/pull/6424

2. **#6423 [OPEN] fix(fleet): 只读 Workflow Agent 保留受限检查能力** — 0.10.1 的 Workflow/Fleet 可靠性修复，叠加在 #6407 之上。
   https://github.com/Hmbown/Codewhale/pull/6423

3. **#6422 [OPEN] fix(plugins): 完成安全的可移植 DSH 转换与 CI 覆盖** — 0.10.1 首个可移植 DSH 导入切片，复用既有转换器与原生插件的审查/安装/信任流程。
   https://github.com/Hmbown/Codewhale/pull/6422

4. **#6407 [OPEN] Integration: 网站 wave 1 + 0.10.1 CI/自动化切片** — 集成分支，通过 CI 落地而非直接推送，只有检查通过 main 才前进。
   https://github.com/Hmbown/Codewhale/pull/6407

5. **#6417 [OPEN] feat(web): legal/terms 与 legal/privacy 迁移到 dictionary spine** — 消除页面按 `isZh` 分叉的写法，字符串迁入 `legal-terms.ts` / `legal-privacy.ts`。
   https://github.com/Hmbown/Codewhale/pull/6417

6. **#6408 [OPEN] feat(providers): 新增 Yolo-Auto 兼容主机** — 以数据驱动的 host 描述符接入，无需新增 `ProviderKind` 变体，走普通 Chat Completions。
   https://github.com/Hmbown/Codewhale/pull/6408

7. **#6406 [CLOSED] fix(tui): 阻止 resume 与 fork 重复创建 thread 和 session** — 修复两个身份 bug：恢复会话会额外新增 thread，导致客户端侧栏出现重复。已关闭。
   https://github.com/Hmbown/Codewhale/pull/6406

8. **#6404 [CLOSED] fix(api): 让用户自定义 `[providers.<name>]` 路由对原生客户端可见** — 此前 `GET /v1/providers` 注册表只遍历内置枚举，导致自定义路由在所有原生选择器中缺失。已关闭。
   https://github.com/Hmbown/Codewhale/pull/6404

9. **#6402 [CLOSED] refactor(tui): 移除未使用的 feature stage 与 blanket allow** — 删除 `crates/tui/src/features.rs` 的全量 dead-code 豁免及无用的 `Stage::Deprecated` / `Stage::Removed`。已关闭。
   https://github.com/Hmbown/Codewhale/pull/6402

10. **#6400 [CLOSED] fix(config): 接收带命名空间的仅模型目录条目** — 仅在 `catalog.models` 中出现的模型此前无法进入 offering 列表。已关闭。
    https://github.com/Hmbown/Codewhale/pull/6400

其他：#6405（docs/work 进入 dictionary spine）、#6403（isZh 上限从 28 降到 18）、#6401（新增简体中文本地浏览器客户端指南 `docs/zh_hans/WEB.md`）。

## 5. 功能需求趋势

- **可观测性与性能门禁**：#6011 的 token/工具诊断、#6193 指出仓库既无 `benches/` 也无性能预算常量，构建性能有文档但运行时性能完全无度量，二者指向同一方向——把"用户路径的速度"和资源消耗变成可测、可守的指标。
- **Agent 与 Fleet 的组织模型**：#6036、#5915、#5479 共同指向子 Agent 管理尚未定型：fleet 与 agent 概念重叠、缺少 provider → model → 候选清单 → 角色的清晰流程，也缺少 TUI 内的 Agent 实时状态视图（状态/耗时/token/停止/历史）。
- **记忆与上下文存储扩展**：#6050 要求可插拔记忆后端，避免 `Native`/`Off` 的硬编码二元；#6086 要求统一 scratchpad / Agent Mail / workshop 三个存储的寻址方式并新增会话草稿本。
- **IDE / 编辑器集成**：#5835 属于已批准的 IDE 计划第二阶段——让 Codewhale 作为 ACP Agent 选项运行在 Zed、JetBrains、VS Code、Neovim 等宿主中，并修正过时的 RUNTIME_API.md 文档。
- **协议与提供方生态跟进**：#6280 要求收敛到 MCP 2026-07-28 规范并读取服务端协商版本；#6029 要求把上游厂商固定从"仅 OpenRouter、仅配置"推广到按模型 pin 与发现；#6408 已出现 Yolo-Auto 这类新兼容主机。
- **代码库架构收敛**：多份 issue（#5586、#6142、#6143、#5580）围绕巨型文件拆分、MCP 双栈合并、配置单一权威展开，方向都是把 `tui/` 收缩为 `crates/` 之上的适配层。

## 6. 开发者关注点

- **重复实现与身份混乱是当前最痛的两类问题**：MCP 存在两套客户端栈（#6142），config 存在 `tui/src/config*` 与 `crates/config` 两个权威（#6143），"fleet" 与 "agent" 概念被存了两遍且同一名字出现在两侧（#6036）。这些都不是新功能，而是会持续制造 bug 的结构性来源——#6406、#6404 两个已关闭的重复/可见性 bug 正是同类症状。
- **编辑与锚定的可靠性**：#6203 指出 `edit_file` 的主要失败模式不是语法而是锚定——`old_string` 找不到、不唯一，或格式化后匹配到过期空白，每次失败都要多花一个回合重新读取。
- **中文用户的实际体验缺口**：#2323（中文输入法未适配，包括提示不隐藏、配置/确认窗口输入异常）与 #2342（输出中的文件希望可点击预览）都来自中文社区，且均已开放数月仍有更新。PR #6401 新增简体中文浏览器客户端指南，说明中文文档在补齐，但输入法层面的问题仍在。
- **安全边界**：#5637 提出嵌入式宿主可能把 MCP 凭据放在 keyring 或自有密钥库中，通过在运行时改写进程环境来传递这些值并不安全——一旦其他线程可读环境变量即失效。
- **流程纪律**：多个 PR（#6407、#6422、#6423）明确标注为有界切片、通过 CI 落地、存在堆叠依赖关系（#6423 依赖 #6407），并声明"检查未绿前不得合并"，显示项目在 0.10.x 阶段对集成路径的控制趋于严格。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*